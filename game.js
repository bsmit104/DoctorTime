// let game = new Phaser.Game({
//     type: Phaser.WEBGL,
//     scale: {
//         mode: Phaser.Scale.FIT,
//         autoCenter: Phaser.Scale.CENTER_BOTH,
//         width: 1920,
//         height: 1080
//     },
//     parent: 'app',
//     title: "CMPM120 Final",
//     scene: [Level1]
// })

/////////cheat codes/////////////
// arcade level : 
// - press down causes gravity to disappear
// - pressing space will resume gravity

// tame the javashrek
'use strict';

var map;
var smap;
var player;
var groundLayer;
var wallLayer;
var miscLayer;
var sgroundLayer;
let cursors;
var previousScene;

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    //roundPixels: true,
    zoom: 1,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            },
            debug: false
        }
    },
    scene: [Beg, Title, Map, Pause, Settings, Level1, Level2, Level3]
    //{
    // key: 'main',
    // preload: preload,
    // create: create,
    // update: update
    //}
};
var game = new Phaser.Game(config);