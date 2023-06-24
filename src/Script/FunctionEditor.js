function editorInit() {
    twitchMode = JSON.parse(JSON.stringify(emptyTwitchMode));
    editor = JSON.parse(JSON.stringify(emptyEditor));
}

function resetTwitch() {
    twitchMode = JSON.parse(JSON.stringify(emptyTwitchMode));
    twitchSetting = JSON.parse(JSON.stringify(emptyTwitchSetting));
}

function resetEditor() {
    editorMode = JSON.parse(JSON.stringify(emptyEditor));
}

function resetTwitchSetting() {
    twitchSetting = JSON.parse(JSON.stringify(emptyTwitchSetting));
}

function setupTwitch() {
    twitchMode.broadcasterNick = twitchSetting.broadcasterNick;
    twitchMode.turn = 0;
    twitchMode.turnMax = twitchSetting.turn;
    twitchMode.state = 'Pick';
    twitchMode.viewerMode = true;

    client = new tmi.client({
        channels : [twitchSetting.broadcasterNick]
    });

    client.connect();

    client.on('message', manageChat);
}

function manageChat(channel, tags, message, self) {
    let name = tags['display-name'];
    console.log(name, message);

    if (message === '!join') {
        if (!(name in twitchMode.joinedList)) {
            twitchMode.joinedList.push(name);
        }
    }

    if (message === '!exit') {
        if (name in twitchMode.joinedList) {
            twitchMode.joinedList.filter(name);
        }
    }

    if (name === twitchMode.editorNick && twitchMode.state === 'Edit') {
        if (message[0] === '!') {
            commandProcess(message);
        }
    }
}

function commandProcess(message) {
    console.log(1);
    let messageSplit = message.split(' ');
    const locationReg = /^[A-Oa-o][0-9][0-9]?$/;

    if (messageSplit[0] === '!fill') {
        if (messageSplit.length >= 4) {
            if (!(isNaN(messageSplit[1])) && locationReg.test(messageSplit[2]) && locationReg.test(messageSplit[3])) {
                let fillID = parseInt(messageSplit[1]);
                let r1 = alphaNumMatch[messageSplit[2][0]];
                let r2 = alphaNumMatch[messageSplit[3][0]];
                let c1 = parseInt(messageSplit[2].slice(1));
                let c2 = parseInt(messageSplit[3].slice(1));
                let positionStart = [Math.min(r1, r2), Math.min(c1, c2)];
                let positionEnd = [Math.max(r1, r2), Math.max(c1, c2)];

                for (let i = positionStart[0]; i <= positionEnd[0]; i++) {
                    for (let j = positionStart[1]; j <= positionEnd[1]; j++) {
                        editor.current.field[i][j] = fillID;
                    }
                }
            }
        }
    }
}

function selectEditor() {
    twitchMode.editorNick = twitchMode.joinedList[Math.floor(Math.random() * twitchMode.joinedList.length)];
    twitchMode.editorTime = twitchSetting.time;
    twitchMode.editorResource = twitchSetting.resource;
    twitchMode.turn += 1;
    twitchMode.state = 'EditConfirm';
}