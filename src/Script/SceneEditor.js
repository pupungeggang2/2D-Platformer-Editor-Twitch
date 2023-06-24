function loopEditor() {
    displayEditor();
}

function displayEditor() {
    drawSceneInit();

    drawEditorUpperBar();
    drawEditorStatusBar();
    drawEditorField();
    drawEditorLowerBar();

    if (state === 'TwitchSetting') {
        drawEditorTwitchSettingsWindow();
    }

    if (twitchMode.viewerMode === true && twitchMode.state === 'EditConfirm') {
        drawEditorConfirmRect();
    }
}

function mouseUpEditor(x, y, button) {
    if (button === 0) {
        if (pause === false && menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UIEditor.buttonClose)) {
                    scene = 'Title';
                    state = '';
                } else if (pointInsideRectArray(x, y, UIEditor.buttonTwitch)) {
                    if (twitchMode.viewerMode === false) {
                        state = 'TwitchSetting';
                        resetTwitch();
                    } else {
                        twitchMode.viewerMode = false;
                    }
                }

                if (pointInsideRectArray(x, y, UIEditor.buttonSelectEditor)) {
                    if (twitchMode.viewerMode === true && twitchMode.joinedList.length > 0) {
                        selectEditor();
                    }
                }

                if (pointInsideRectArray(x, y, UIEditor.editorConfirmClose)) {
                    if (twitchMode.viewerMode === true && twitchMode.state === 'EditConfirm') {
                        twitchMode.state = 'Edit';
                    }
                }
            } else if (state === 'TwitchSetting') {
                if (pointInsideRectArray(x, y, UIEditor.twitchClose)) {
                    state = '';
                }

                if (pointInsideRectArray(x, y, UIEditor.twitchNameTextbox)) {
                    twitchSetting.inputMode = 'Nick';
                }

                if (pointInsideRectArray(x, y, UIEditor.twitchOkButton)) {
                    if (twitchSetting.time > 0 && twitchSetting.resource > 0 && twitchSetting.turn > 0 && twitchSetting.broadcasterNick.length > 0) {
                        state = '';
                        setupTwitch();
                    }
                }
            }
        }
    }
}

function mouseDownEditor(x, y, button) {

}

function keyDownEditor(key) {
    if (pause === false && menu === false) {
        if (state === 'TwitchSetting') {
            if (twitchSetting.inputMode === 'Nick') {
                for (let i = 0; i < validCharacterNick.length; i++) {
                    if (key === validCharacterNick[i]) {
                        twitchSetting.broadcasterNick += key;
                    }
                }

                if (key === 'Backspace') {
                    if (twitchSetting.broadcasterNick.length > 0) {
                        twitchSetting.broadcasterNick = twitchSetting.broadcasterNick.slice(0, -1);
                    }
                }
            }
        }
    }
}

function keyUpEditor(key) {

}