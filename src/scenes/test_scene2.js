class Test_Scene2 extends Phaser.Scene {
    constructor() {
        super("Test_Scene2");
    }

    create(){

        this.createKeys();


        this.add.text(80, 70, "Here is the Sub Scene 2", { align: 'center', fontFamily: 'PixelFont', fontSize: '32px', color: '#FFFFFF', });

        this.add.text(80, 150, "Change: ", { align: 'center', fontFamily: 'PixelFont', fontSize: '32px', color: '#FFFFFF', });

        this.add.text(300, 200, "potato_good -2", { align: 'center', fontFamily: 'PixelFont', fontSize: '32px', color: '#FFFFFF', });

        inventory_grocery_potato_goodQuality -= 2;

        this.add.text(80, 280, "Inventory: ", { align: 'center', fontFamily: 'PixelFont', fontSize: '40px', color: '#FFFFFF', });

        this.add.text(80, 350, "potato_good: ", { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });
        this.add.text(350, 350, inventory_grocery_potato_goodQuality, { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });
        this.add.text(80, 400, "potato_normal: ", { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });
        this.add.text(350, 400, inventory_grocery_potato_normalQuality, { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });
        this.add.text(80, 450, "potato_bad: ", { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });
        this.add.text(350, 450, inventory_grocery_potato_badQuality, { align: 'center', fontFamily: 'PixelFont', fontSize: '20px', color: '#FFFFFF', });


    }



    
    update() {
        //    R to restart,  <- to go back to Test_Scene1
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start("Test_Main");
        } else if (Phaser.Input.Keyboard.JustDown(keyLeft)){
            this.scene.start("Test_Scene1");
        }else{
            
        }

    }



    createKeys(){
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }
}