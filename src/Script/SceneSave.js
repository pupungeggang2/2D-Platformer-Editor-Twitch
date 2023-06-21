function loopSave() {
    displaySave();
}

function displaySave() {
    drawSceneInit();

    strokeRectArray(UISave.backButton);
}

function mouseUpSave(x, y, button) {
    if (button === 0) {
        if (pause === false && menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UISave.backButton)) {
                    scene = 'Title';
                    state = '';
                }
            }
        }
    }
}

function mouseDownSave(x, y, button) {

}

function keyDownSave(key) {

}

function keyUpSave(key) {

}