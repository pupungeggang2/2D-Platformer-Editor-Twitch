function drawSceneInit() {
    context.font = '32px neodgm';
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.textBaseline = 'top';
    context.textAlign = 'left';
    context.lineWidth = 2;
    
    context.clearRect(0, 0, 1280, 720);
}

function strokeRectArray(rect) {
    context.strokeRect(rect[0], rect[1], rect[2], rect[3]);
}

function fillTextArray(text, position) {
    context.fillText(text, position[0], position[1]);
}

function drawImageArray(img, position) {
    context.drawImage(img, position[0], position[1]);
}
