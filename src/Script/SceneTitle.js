function loopTitle() {
    displayTitle();
}

function displayTitle() {
    drawSceneInit();

    fillTextArray('Desserterria', UITitle.titleText);
    
    drawImageArray(img.buttonBar, UITitle.startRect);
    drawImageArray(img.buttonBar, UITitle.editorRect);
    drawImageArray(img.buttonBar, UITitle.eraseRect);
    
    fillTextArray('Start', UITitle.startText);
    fillTextArray('Editor', UITitle.editorText);
    fillTextArray('Erase', UITitle.eraseText);
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (pause === false && menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UITitle.startRect)) {
                    scene = 'Save';
                    state = '';
                } else if (pointInsideRectArray(x, y, UITitle.editorRect)) {
                    scene = 'Editor';
                    state = '';
                    editorInit();
                } else if (pointInsideRectArray(x, y, UITitle.eraseRect)) {
                    eraseSaveFile();
                }
            }
        }
    }
}

function mouseDownTitle(x, y, button) {
}

function keyUpTitle(key) {

}

function keyDownTitle(key) {

}
