document.getElementById("runButton").addEventListener("click", () => {
    const codeInput = document.getElementById("codeInput").value;
    const output = document.getElementById("output");
    try {
        const resultado = analizarCodigo(codeInput);
        output.textContent = resultado;
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
});

document.getElementById('copyButton').addEventListener('click', copiarCodigo);

function copiarCodigo() {
    const entradaCodigo = document.getElementById('codeInput');
    entradaCodigo.select();
    document.execCommand('copy');
    alert('Código copiado al portapapeles');
}

function loadEjemplo(numeroEjemplo) {
    const ejemplos = [
        `entero a = 5\nentero b = 3\nentero c = 2 + a * b\n`,
        `real x = 4.5\nreal y = x + 3.2\nsi (y < 10)\n    y = y * 2\nsino\n    y = y - 1\nfinsi\n`,
        `entero i = 0\nmientras (i < 5)\n    i = i + 1\nfinmientras\n`,
        `real r\nreal s = r * 3.0\nentero t = (r + s) / 2\n`,
        `entero j = 7\nreal k = 2.5\nsi (j > )\n    k = k + 3.5\nsino\n    k = k - 1.5\nfinsi\n`
    ];
    document.getElementById('codeInput').value = ejemplos[numeroEjemplo - 1];
}

function analizarCodigo(codigo) {
    const tokens = tokenizar(codigo);
    const ast = parse(tokens);
    return JSON.stringify(ast, null, 2);
}

