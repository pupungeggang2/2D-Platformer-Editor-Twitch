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

function fillRectArray(rect) {
    context.fillRect(rect[0], rect[1], rect[2], rect[3]);
}

function fillTextArray(text, position) {
    context.fillText(text, position[0], position[1]);
}

function drawImageArray(img, position) {
    context.drawImage(img, position[0], position[1]);
}

function drawEditorUpperBar() {
    strokeRectArray(UIEditor.upperBar);
    drawImageArray(img.close, UIEditor.buttonClose);
    strokeRectArray(UIEditor.buttonTwitch);

    if (twitchMode.viewerMode === false) {
        fillTextArray('Connect Twitch', UIEditor.textTwitch);
    } else {
        fillTextArray('Disconnect', UIEditor.textTwitch);
    }
}

function drawEditorStatusBar() {
    strokeRectArray(UIEditor.statusBar);

    if (twitchMode.viewerMode === true) {
        fillTextArray(`Turn : ${twitchMode.turn}}/${twitchMode.turnMax}`, UIEditor.turnText);
    } else {
        fillTextArray(`Viewer Editing Mode is Off.`, UIEditor.turnText);
    }
}

function drawEditorTwitchSettingsWindow() {
    context.fillStyle = 'White';
    fillRectArray(UIEditor.twitchSettingsWindow);
    context.fillStyle = 'Black';
    strokeRectArray(UIEditor.twitchSettingsWindow);

    drawImageArray(img.close, UIEditor.twitchClose);
}

function drawEditorField() {
    strokeRectArray(UIEditor.field);
}