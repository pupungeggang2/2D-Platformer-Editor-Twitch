function loopEditor() {
    displayEditor();
}

function displayEditor() {
    drawSceneInit();

    drawEditorUpperBar();
    drawEditorStatusBar();
    drawEditorField();

    if (state === 'TwitchSetting') {
        drawEditorTwitchSettingsWindow();
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
                    state = 'TwitchSetting';
                    resetTwitch();
                }
            } else if (state === 'TwitchSetting') {
                if (pointInsideRectArray(x, y, UIEditor.twitchClose)) {
                    state = '';
                }
            }
        }
    }
}

function mouseDownEditor(x, y, button) {

}

function keyDownEditor(key) {

}

function keyUpEditor(key) {

}