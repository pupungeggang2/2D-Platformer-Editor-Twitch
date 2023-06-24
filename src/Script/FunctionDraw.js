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
    drawImageArray(img.close, UIEditor.buttonClose);
    strokeRectArray(UIEditor.buttonTwitch);

    if (twitchMode.viewerMode === false) {
        fillTextArray('Connect Twitch', UIEditor.textTwitch);
    } else {
        strokeRectArray(UIEditor.buttonSelectEditor);
        fillTextArray('Pick Editor', UIEditor.textSelectEditor);
        fillTextArray('Disconnect', UIEditor.textTwitch);
    }

    strokeRectArray(UIEditor.upperBar);
}

function drawEditorStatusBar() {
    if (twitchMode.viewerMode === true) {
        fillTextArray(`Turn : ${twitchMode.turn}/${twitchMode.turnMax}`, UIEditor.turnText);
    } else {
        fillTextArray(`Viewer Editing Mode is Off.`, UIEditor.turnText);
    }

    strokeRectArray(UIEditor.statusBar);
}

function drawEditorLowerBar() {
    if (twitchMode.viewerMode === true) {
        if (twitchMode.state === 'Edit') {
            fillTextArray(`${twitchMode.editorNick} is editing.`, UIEditor.editorNickText);
        } else if (twitchMode.state === 'Pick') {
            fillTextArray(`Pick Editor`, UIEditor.editorNickText);
        }
    }

    strokeRectArray(UIEditor.lowerBar);
}

function drawEditorTwitchSettingsWindow() {
    context.fillStyle = 'White';
    fillRectArray(UIEditor.twitchSettingsWindow);
    context.fillStyle = 'Black';
    strokeRectArray(UIEditor.twitchSettingsWindow);

    // Title
    drawImageArray(img.close, UIEditor.twitchClose);
    fillTextArray(`Twitch Settings`, UIEditor.twitchTitleText);

    // Name
    strokeRectArray(UIEditor.twitchNameTextbox);
    fillTextArray(`Name`, UIEditor.twitchNameTitleText);
    fillTextArray(`${twitchSetting.broadcasterNick}`, UIEditor.twitchNameText);

    // Time, Turn, Resource
    drawImageArray(img.flag, UIEditor.twitchFlagIcon);
    fillTextArray(`${twitchSetting.turn}`, UIEditor.twitchTurnText);
    drawImageArray(img.clock, UIEditor.twitchClockIcon);
    fillTextArray(`${twitchSetting.time}`, UIEditor.twitchTimeText);
    drawImageArray(img.resourceOrb, UIEditor.twitchResourceIcon);
    fillTextArray(`${twitchSetting.resource}`, UIEditor.twitchResourceText);

    // Ok Button
    strokeRectArray(UIEditor.twitchOkButton);
    fillTextArray(`OK`, UIEditor.twitchOkText);
}

function drawEditorConfirmRect() {
    context.fillStyle = 'White';
    fillRectArray(UIEditor.editorConfirm);
    context.fillStyle = 'Black';
    strokeRectArray(UIEditor.editorConfirm);

    drawImageArray(img.close, UIEditor.editorConfirmClose);
    fillTextArray('Congratulations!', UIEditor.editorConfirmText1);
    fillTextArray(`${twitchMode.editorNick} is Editor.`, UIEditor.editorConfirmText2);
}

function drawEditorField() {
    context.fillStyle = 'Silver';
    context.font = '24px neodgm';

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 20; j++) {
            if (editor.current.field[i][j] === 0) {
                context.fillText(`${numAlphaMatch[i]}${j}`, UIEditor.field[0] + 40 * j + 2, UIEditor.field[1] + 40 * i + 10);
            }
        }
    }
    context.fillStyle = 'Black';
    context.font = '32px neodgm';

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 20; j++) {
            if (editor.current.field[i][j] != 0) {
                context.fillText(`${editor.current.field[i][j]}`, UIEditor.field[0] + 40 * j + 4, UIEditor.field[1] + 40 * i + 4);
            }
        }
    }

    context.strokeStyle = 'Silver';

    for (let i = 0; i < 19; i++) {
        context.beginPath();
        context.moveTo(UIEditor.field[0] + 40 + 40 * i, UIEditor.field[1]);
        context.lineTo(UIEditor.field[0] + 40 + 40 * i, UIEditor.field[1] + UIEditor.field[3]);
        context.stroke();
    }

    for (let i = 0; i < 14; i++) {
        context.beginPath();
        context.moveTo(UIEditor.field[0], UIEditor.field[1] + 40 + 40 * i);
        context.lineTo(UIEditor.field[0] + UIEditor.field[2], UIEditor.field[1] + 40 + 40 * i);
        context.stroke();
    }

    context.strokeStyle = 'Black';

    strokeRectArray(UIEditor.field);
}

function stateUpdate() {
    
}