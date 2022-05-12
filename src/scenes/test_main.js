class Test_Main extends Phaser.Scene {
    constructor() {
        super("Test_Main");
  
        //globle variable for this game
        //those varible will be reset if they restart in the middle of the game
 


    }

    create() {

        inventory_grocery_potato_goodQuality = 0;
        inventory_grocery_potato_normalQuality = 0;
        inventory_grocery_potato_badQuality = 0;

        this.createKeys();

        this.add.text(80, 70, "Here is the Main Scene", { align: 'center', fontFamily: 'PixelFont', fontSize: '32px', color: '#FFFFFF', });

        this.add.text(80, 200, "variables for this game play is initialized", { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });

        this.add.text(80, 280, "Inventory: ", { align: 'center', fontFamily: 'PixelFont', fontSize: '40px', color: '#FFFFFF', });

        this.add.text(80, 350, "potato_good: ", { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });
        this.add.text(350, 350, inventory_grocery_potato_goodQuality, { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });
        this.add.text(80, 400, "potato_normal: ", { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });
        this.add.text(350, 400, inventory_grocery_potato_normalQuality, { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });
        this.add.text(80, 450, "potato_bad: ", { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });
        this.add.text(350, 450, inventory_grocery_potato_badQuality, { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });


        //example of calling variable made in main.js    
        /*
        this.add.text(80, 320, "Example of constant globle calling", { align: 'center', fontFamily: 'PixelFont', fontSize: '32px', color: '#FFFFFF', });
        this.add.text(300, 400, "Call cops: ", { align: 'center', fontFamily: 'PixelFont', fontSize: '32px', color: '#FFFFFF', });
        this.add.text(600, 400, cops, { align: 'center', fontFamily: 'PixelFont', fontSize: '32px', color: '#FFFFFF', });
        */

    }


    update() {
        // press -> go check sub scene 1,   R to restart
        if (Phaser.Input.Keyboard.JustDown(keyRight)) {
            this.scene.start("Test_Scene1");
        } else if(Phaser.Input.Keyboard.JustDown(keyR)){
            this.scene.restart();
        } else{ }

    }

    createKeys(){
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }
}