/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-7-24
 * Time: 下午3:13
 * To change this template use File | Settings | File Templates.
 */
var Color_Mixing = cc.Scene.extend({
   ctor:function(){
       this._super();

   }
});


var Mixing_Layer = cc.Layer.extend({
    bgM:null,

    ctor:function(){
        this._super();
        this.init();
//        this.ignoreAnchorPointForPosition(false);
        this.setAnchorPoint(cc.p(0.2,0.5));
        console.log(this.getAnchorPoint())
    },
    init:function(){
        var size = cc.Director.getInstance().getWinSize();


        this.tag2_1 = cc.MenuItemImage.create(s_tag2_1,s_tag2_1,this.Move1,this);
        this.tag2_2 = cc.MenuItemImage.create(s_tag2_2,s_tag2_2,this.Move2,this);
        this.tag2_3 = cc.MenuItemImage.create(s_tag2_3,s_tag2_3,this.Move3,this);

        this.tag2_1.setPosition(cc.p(-size.width/2+77,size.height/2-130));
        this.tag2_2.setPosition(cc.p(-size.width/2+77,size.height/2-190));
        this.tag2_3.setPosition(cc.p(-size.width/2+77,size.height/2-250));
//console.log(this.tag2_1.getPosition());

        this.scorelabel = cc.LabelTTF.create("0", "Arial", 42);
        this.scorelabel.setPosition(cc.p(718,530));
        this.scorelabel.setColor(cc.c3b(255,0,0));
        this.scorelabel.setVisible(false);
        this.addChild(this.scorelabel,10);

        var start2 = cc.MenuItemImage.create(s_start2,s_start2,this.startGame,this);
        start2.setPosition(cc.p(-365,-195));
        start2.setScale(0.9);

        this.laba = cc.MenuItemImage.create(s_laba2,s_laba2,this.stopmusic,this);
        this.laba.setPosition(cc.p(-315,-195));
        this.laba.setScale(0.9);

        this.laba2 = cc.MenuItemImage.create(s_laba2_2,s_laba2_2,this.startmusic,this);
        this.laba2.setPosition(cc.p(-315,-195));
        this.laba2.setScale(0.9);
        this.laba2.setVisible(false);

        var Return2 = cc.MenuItemImage.create(s_return2,s_return2,this.onReplaceSceneTran,this);
        Return2.setPosition(cc.p(-265,-195));
        Return2.setScale(0.9);

        var  infoMenu = cc.Menu.create(this.tag2_1,this.tag2_2,this.tag2_3,start2,this.laba,this.laba2,Return2);
        this.addChild(infoMenu,20);



    },
    startGame:function(){
        audioEngine.playEffect(M_KEY, false);
        audioEngine.playMusic(M_CONN, true);
        var size = cc.Director.getInstance().getWinSize();

        this.bgM.setVisible(false);
        var paint_bg = cc.Sprite.create(s_paint_bg);
        paint_bg.setPosition(cc.p(size.width/2,size.height/2+1))
        this.addChild(paint_bg,0);

        var blank1 = cc.Sprite.create(s_blank1);
        blank1.setPosition(cc.p(518,325));
        this.addChild(blank1,10);

        var b1_1 = new Color_Blank (this);
        var b1_2 = new Color_Blank (this);
        var b1_3 = new Color_Blank (this);
        var b1_4 = new Color_Blank (this);
        var b1_5 = new Color_Blank (this);
        b1_2.flag = true;

    },
    pauseGame:function(){

    },
    stopmusic:function(){
        audioEngine.pauseMusic(M_CONN, false);
        this.laba.setVisible(false);
        this.laba2.setVisible(true);
    },
    startmusic:function(){
        audioEngine.resumeMusic(M_CONN, false);
        this.laba.setVisible(true);
        this.laba2.setVisible(false);
    },
    onReplaceSceneTran:function(){
        audioEngine.playEffect(M_KEY, false);
        audioEngine.stopMusic(M_CONN, true);
        audioEngine.playMusic(MUSIC_FILE, false);
        credit1 = score2;

        round = 1;
        num = 1;
        score2 = 0;
        click = 0;
        var s = new MenuScene();
        var l = new MenuLayer();
        s.addChild(l,0);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1.5, s));
    },
    Move1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.tag2_1.setVisible(false);

        this.tag2_1_1 = cc.MenuItemImage.create(s_tag2_1,s_tag2_1,this.Move1_1,this);
        this.tag2_1_1.setPosition(cc.p(-size.width/2+77,size.height/2-130));
        this.tag2_1_1.runAction(cc.MoveTo.create(1,cc.p(220,size.height/2-130)));
        var menu = cc.Menu.create(this.tag2_1_1);
        this.addChild(menu,20,20);

        this.bg1 = cc.Sprite.create(s_move2_1);
        this.bg1.setPosition(cc.p(-280,282));
        this.bg1.runAction(cc.MoveTo.create(1,cc.p(272,282)));

        this.addChild(this.bg1,20,20);


    },
    Move2:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.tag2_2.setVisible(false);

        this.tag2_2_1 = cc.MenuItemImage.create(s_tag2_2,s_tag2_2,this.Move2_1,this);
        this.tag2_2_1.setPosition(cc.p(-size.width/2+77,size.height/2-190));
        this.tag2_2_1.runAction(cc.MoveTo.create(1,cc.p(220,size.height/2-190)));
        var menu = cc.Menu.create(this.tag2_2_1);
        this.addChild(menu,20,20);

        this.bg2 = cc.Sprite.create(s_move2_2);
        this.bg2.setPosition(cc.p(-280,282));
        this.bg2.runAction(cc.MoveTo.create(1,cc.p(272,282)));

        this.addChild(this.bg2,20,20);
    },
    Move3:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.tag2_3.setVisible(false);

        this.tag2_3_1 = cc.MenuItemImage.create(s_tag2_3,s_tag2_3,this.Move3_1,this);
        this.tag2_3_1.setPosition(cc.p(-size.width/2+77,size.height/2-250));
        this.tag2_3_1.runAction(cc.MoveTo.create(1,cc.p(220,size.height/2-250)));
        var menu = cc.Menu.create(this.tag2_3_1);
        this.addChild(menu,20,20);

        this.bg3 = cc.Sprite.create(s_move2_3);
        this.bg3.setPosition(cc.p(-280,282));
        this.bg3.runAction(cc.MoveTo.create(1,cc.p(272,282)));

        this.addChild(this.bg3,20,20);
    },
    Move1_1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.bg1.runAction(cc.MoveTo.create(1,cc.p(-280,282)));
        this.tag2_1_1.runAction(cc.MoveTo.create(1,cc.p(-size.width/2+77,size.height/2-130)));
        this.tag2_1_1.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.setvis1,this)));
//        this.tag1_1.setVisible(false);

    },
    Move2_1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.bg2.runAction(cc.MoveTo.create(1,cc.p(-280,282)));
        this.tag2_2_1.runAction(cc.MoveTo.create(1,cc.p(-size.width/2+77,size.height/2-190)));
        this.tag2_2_1.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.setvis2,this)));
//        this.tag1_1.setVisible(false);

    },
    Move3_1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.bg3.runAction(cc.MoveTo.create(1,cc.p(-280,282)));
        this.tag2_3_1.runAction(cc.MoveTo.create(1,cc.p(-size.width/2+77,size.height/2-250)));
        this.tag2_3_1.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.setvis3,this)));
//        this.tag1_1.setVisible(false);

    },
    setvis1:function(){
        this.tag2_1_1.setVisible(false);
        this.tag2_1.setVisible(true);

    },
    setvis2:function(){
        this.tag2_2_1.setVisible(false);
        this.tag2_2.setVisible(true);
    },
    setvis3:function(){
        this.tag2_3_1.setVisible(false);
        this.tag2_3.setVisible(true);
    }
});