// Main.js holds global variables and essential config datas

let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    scene: [Test_Main, Test_Scene1, Test_Scene2]
}

var game = new Phaser.Game(config);
var borderUISize = game.config.height / 20;
var borderPadding = borderUISize / 3;


// Key inputs
var keyLeft, keyRight, keyR;


// Constant variables
// WARNING: Dynamic varible may cause memory leak, free array before u restart the scene
var cops = 911;
var inventory_grocery_potato_goodQuality ;
var inventory_grocery_potato_normalQuality ;
var inventory_grocery_potato_badQuality ;




