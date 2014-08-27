/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-7-11
 * Time: 下午1:09
 * To change this template use File | Settings | File Templates.
 */

//var countx = 0;

var NextScene = cc.Scene.extend({

    blink:null,
    i:0,

   ctor:function(){
       this._super();
       this.init();
   },
    init:function(){
        this.layer = cc.Layer.create();
        this.addChild(this.layer,0);
        var size = cc.Director.getInstance().getWinSize();

        var bg2 = cc.Sprite.create(s_load);
        bg2.setPosition(cc.p(size.width/2,size.height/2));
        this.layer.addChild(bg2);
/*

        //进入按钮
        var btnIn = cc.MenuItemImage.create(s_in,s_in,this.onReplaceSceneTran,this);
        btnIn.setAnchorPoint(cc.p(0,0));
        btnIn.setPosition(cc.p(0 ,-80));
//        btnIn.runAction(cc.MoveTo.create(3.5,cc.p(0,-80)));

        var infoMenu = cc.Menu.create(btnIn );
        this.layer.addChild(infoMenu);
        */
        this.blink = cc.LayerColor.create(cc.c4(225,225,0,225),50,50);
        this.blink.setVisible(false);
        this.layer.addChild(this.blink);
        console.log("OK");

        this.blink.runAction(cc.Repeat.create(cc.Sequence.create(cc.DelayTime.create(0.8),cc.CallFunc.create(this.Blink,this)
        ),7));

    },

    onReplaceSceneTran:function (sender) {

        var s = new MenuScene();
        var l = new MenuLayer();
        s.addChild(l,0);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1.5, s));
    }/**/,

    Blink:function(){
        if(this.i == 6){
            this.blink.runAction(cc.CallFunc.create(this.onReplaceSceneTran,this));

        }
        else {
            this.i += 1;
            console.log("OK");
            var rgb1 =Math.floor(Math.random()*500);
            var rgb2 =Math.floor(Math.random()*500);
            var rgb3 =Math.floor(Math.random()*500);

            this.blink = cc.LayerColor.create(cc.c4(rgb1,rgb2,rgb3,255),18,18);
            this.blink.setPosition(cc.p(50*this.i+420,213));
            this.layer.addChild(this.blink);
        }

    }

});


