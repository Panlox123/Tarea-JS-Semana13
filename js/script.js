// Funciones para personalización de texto y fondo
function cambiarColor() {
    document.body.style.backgroundColor = '#3a3a3a';  // Fondo gris oscuro
}

function colorGradiante() {
    document.body.style.background = 'linear-gradient(to right, #4e5b6e, #6a8caf)';
}

function aumentarTexto() {
    let bodyText = document.body;
    let currentSize = window.getComputedStyle(bodyText).fontSize;
    bodyText.style.fontSize = (parseFloat(currentSize) + 2) + 'px';
}

function disminuirTexto() {
    let bodyText = document.body;
    let currentSize = window.getComputedStyle(bodyText).fontSize;
    bodyText.style.fontSize = (parseFloat(currentSize) - 2) + 'px';
}

function ponerNegrita() {
    document.body.style.fontWeight = 'bold';
}

function ponerCursiva() {
    document.body.style.fontStyle = 'italic';
}

function cambiarFuente() {
    document.body.style.fontFamily = 'Courier New, monospace';
}


// Efecto de nieve
window.addEventListener('load', function () {
    var snowflakes = [];
    var maxSnowflakes = 500;
    var snowContainer = document.getElementById('snowContainer');

    function createSnowflake() {
        var snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = Math.random() * 15 + 2 + 's';  // Varía la duración de la caída
        snowContainer.appendChild(snowflake);
        snowflakes.push(snowflake);

        setTimeout(function () {
            snowflake.remove();
            snowflakes.shift();
        }, 5000);
    }

    setInterval(createSnowflake, 200);
});

