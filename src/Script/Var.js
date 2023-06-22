let canvas;
let context;
let gameTime;
let gameFramePrevious;
let gameFrameCurrent;
let gameInstance;
let delta = 16;

let scene = 'Title';
let state = '';
let pause = false;
let menu = false;

let editor = {
    camera : [0, 0],
    editHistory : [],
    current : {
        field : [],
        thing : [],
    },
};

let twitchSetting = {
    broadcasterNick : '',
    time : 0,
    turn : 0,
    resource : 0,
    inputMode : '',
};

let twitchMode = {
    viewerMode : false,
    broadcasterNick : '',
    joinedList : [],
    editorNick : '',
    editorChat : '',
    editorTime : 0,
    editorResource : 0,
    turn : 0,
    turnMax : 0,
};
