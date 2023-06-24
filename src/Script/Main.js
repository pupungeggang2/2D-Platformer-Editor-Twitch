window.onload = main;
window.onerror = errorHandle;
window.oncontextmenu = rightClick;

function main() {
    canvas = document.getElementById('Screen');
    context = canvas.getContext('2d');
    
    window.addEventListener('keydown', keyDown, false);
    window.addEventListener('keyup', keyUp, false);
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);

    gameTime = Date.now();
    gameFrameCurrent = Date.now();
    gameFramePrevious = Date.now() - 16;

    imageLoad();

    gameInstance = requestAnimationFrame(loop);
}

function loop() {
    gameFrameCurrent = Date.now();
    delta = gameFrameCurrent - gameFramePrevious;

    if (scene === 'Title') {
        loopTitle();
    } else if (scene === 'Save') {
        loopSave();
    } else if (scene === 'Field') {
        loopField();
    } else if (scene === 'Editor') {
        loopEditor();
    } else if (scene === 'Test') {
        loopTest();
    }
    
    gameFramePrevoius = Date.now();
    gameInstance = requestAnimationFrame(loop);
}

function keyDown(event) {
    let key = event.key;

    if (scene === 'Title') {
        keyDownTitle(key);
    } else if (scene === 'Save') {
        keyDownSave(key);
    } else if (scene === 'Field') {
        keyDownField(key);
    } else if (scene === 'Editor') {
        keyDownEditor(key);
    } else if (scene === 'Test') {
        keyDownTest(key);
    }
}

function keyUp(event) {
    let key = event.key;

    if (scene === 'Title') {
        keyUpTitle(key);
    } else if (scene === 'Save') {
        keyUpSave(key);
    } else if (scene === 'Field') {
        keyUpField(key);
    } else if (scene === 'Editor') {
        keyUpEditor(key);
    } else if (scene === 'Test') {
        keyUpTest(key);
    }
}

function mouseDown(event) {
    let canvasRect = canvas.getBoundingClientRect();
    let x = event.clientX - canvasRect.left;
    let y = event.clientY - canvasRect.top;
    let button = event.button;
    
    if (scene === 'Title') {
        mouseDownTitle(x, y, button);
    } else if (scene === 'Save') {
        mouseDownSave(x, y, button);
    } else if (scene === 'Field') {
        mouseDownField(x, y, button);
    } else if (scene === 'Editor') {
        mouseDownEditor(x, y, button);
    } else if (scene === 'Test') {
        mouseDownTest(x, y, button);
    }
}

function mouseUp(event) {
    let canvasRect = canvas.getBoundingClientRect();
    let x = event.clientX - canvasRect.left;
    let y = event.clientY - canvasRect.top;
    let button = event.button;
    
    if (scene === 'Title') {
        mouseUpTitle(x, y, button);
    } else if (scene === 'Save') {
        mouseUpSave(x, y, button);
    } else if (scene === 'Field') {
        mouseUpField(x, y, button);
    } else if (scene === 'Editor') {
        mouseUpEditor(x, y, button);
    } else if (scene === 'Test') {
        mouseUpTest(x, y, button);
    }
}

function errorHandle() {
    cancelAnimationFrame(gameInstance);
    client = null;
}

function rightClick() {
    return false;
}
