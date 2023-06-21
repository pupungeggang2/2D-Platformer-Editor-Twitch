function loopEditor() {
    displayEditor();
}

function displayEditor() {
    drawSceneInit();

    fillTextArray('Editor', UIEditor.editorText);
    strokeRectArray(UIEditor.backbutton);
}

function mouseUpEditor(x, y, button) {
    if (button === 0) {
        if (pause === false && menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UIEditor.backbutton)) {
                    scene = 'Title';
                    staet = '';
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