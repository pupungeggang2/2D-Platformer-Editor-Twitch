let canvas;
let context;
let gameTime;
let gameFramePrevious;
let gameFrameCurrent;
let gameInstance;

let scene = 'Title';
let state = '';

let editor = {
    state : [],
    current : {

    },
};

let twitch = {
    editorNick : '',
    editorChat : '',
    editorTime : 0,
    editorResource : 0,
    turn : 0,
    turnMax : 0,
};