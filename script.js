let participantes = [];

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const linhas = e.target.result.split("\n").map(l => l.trim()).filter(l => l);
        participantes = linhas;
        alert("Lista de participantes carregada!");
    };

    reader.readAsText(file);
});

function sortear() {
    if (participantes.length === 0) {
        alert("Carregue uma planilha primeiro!");
        return;
    }
    const sorteado = participantes[Math.floor(Math.random() * participantes.length)];
    document.getElementById('resultado').innerText = "Vencedor: " + sorteado;
}
