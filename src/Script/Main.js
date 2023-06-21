window.onload = main;
window.onerror = errorHandle;
window.oncontextmenu = rightClick;

function main() {
    canvas = document.getElementById('Screen');
    context = canvas.getContext('2d');

    gameInstance = requestAnimationFrame(loop);
}

function loop() {
    gameInstance = requestAnimationFrame(loop);
}

function errorHandle() {
    cancelAnimationFrame(gameInstance);
}

function rightClick() {
    return false;
}