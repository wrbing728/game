/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-8-30
 * Time: 下午4:17
 * To change this template use File | Settings | File Templates.
 */


var Color_Conn = cc.Scene.extend({

    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){

    }

});

var Conn_Layer = cc.Layer.extend({
    ctor:function(){
        this._super();
        this.init();
    } ,
    init:function(){
        var size = cc.Director.getInstance().getWinSize();

        this.time = 60.0;
        this.label = cc.LabelTTF.create("60", "Arial", 32);
        this.label.setPosition(cc.p(377,445));
        this.label.setColor(cc.c3b(255,0,0));
        this.addChild(this.label,10);

        this.scorelabel = cc.LabelTTF.create("0", "Arial", 32);
        this.scorelabel.setPosition(cc.p(677,445));
        this.scorelabel.setColor(cc.c3b(255,0,0));

        this.addChild(this.scorelabel,10);

        this.tag1 = cc.MenuItemImage.create(s_tag2_4,s_tag2_4,this.Move1,this);
        this.tag2 = cc.MenuItemImage.create(s_tag2_3,s_tag2_3,this.Move2,this);

        this.tag1.setPosition(cc.p(-size.width/2+77,-90));
        this.tag2.setPosition(cc.p(-size.width/2+77,-150));

        var start = cc.MenuItemImage.create(s_start4,s_start4,this.startGame,this);
        start.setPosition(cc.p(170,-250));

        var pause = cc.MenuItemImage.create(s_pause4,s_pause4,this.pauseGame,this);
        pause.setPosition(cc.p(230,-250));

        var Return = cc.MenuItemImage.create(s_return4,s_return4,this.onReplaceSceneTran,this);
        Return.setPosition(cc.p(350,-250));

        this.laba = cc.MenuItemImage.create(s_laba5,s_laba5,this.stopmusic,this);
        this.laba.setPosition(cc.p(290,-250));

        this.laba2 = cc.MenuItemImage.create(s_laba5_2,s_laba5_2,this.startmusic,this);
        this.laba2.setPosition(cc.p(290,-250));
        this.laba2.setVisible(false);

        var  infoMenu = cc.Menu.create(this.tag1,this.tag2,start,pause,this.laba,this.laba2,Return);
        this.addChild(infoMenu);
    },
    update:function (dt) {

        if(this.time <= 0){
            this.stopAllActions();
            audioEngine.stopMusic(M_CONN, true);
            this.label.setString("Time's Up");
            this.label.setScale(0.8);
            this.label.setColor(cc.c3b(255,0,0));
            this.label.runAction(cc.Sequence.create(cc.DelayTime.create(1), cc.CallFunc.create(this.Pop, this)));
            this.unschedule(this.update);

        }else{
            this.time -= dt;
            this.label.setString(this.time.toFixed(1));}
    },
    Pop:function(){
        audioEngine.playMusic(M_WIN, false);
        var finbg = cc.Sprite.create(s_fin2);
        finbg.setPosition(cc.p(400,280));
        this.addChild(finbg,25);

        this.scorelabel = cc.LabelTTF.create(score4, "Arial", 42);
        this.scorelabel.setPosition(cc.p(370,280));
        this.scorelabel.setColor(cc.c3b(255,0,0));
        this.addChild(this.scorelabel,26);

        var fin = cc.MenuItemImage.create(s_okbutton,s_okbutton,this.onReplaceSceneTran,this);
        fin.setPosition(cc.p(100,-150));
        var info = cc.Menu.create(fin);
        this.addChild(info,25);
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
    startGame:function(){

        audioEngine.playEffect(M_KEY, false);
        audioEngine.playMusic(M_CONN, true);

        this.schedule(this.update,0);
        this.getScheduler().resumeTarget(this);  //暂停恢复

        var bg = cc.Sprite.create(s_background);
        bg.setPosition(cc.p(485,226));
        this.addChild(bg,6);

        this.a1 = new Blank(this);
        this.b1 = new Blank(this);
        this.c1 = new Blank(this);
        this.d1 = new Blank(this);
        this.e1 = new Blank(this);
        this.f1 = new Blank(this);
        this.g1 = new Blank(this);
        this.a2 = new Blank(this);
        this.b2 = new Blank(this);
        this.c2 = new Blank(this);
        this.d2 = new Blank(this);
        this.e2 = new Blank(this);
        this.f2 = new Blank(this);
        this.g2 = new Blank(this);
        this.a3 = new Blank(this);
        this.b3 = new Blank(this);
        this.c3 = new Blank(this);
        this.d3 = new Blank(this);
        this.e3 = new Blank(this);
        this.f3 = new Blank(this);
        this.g3 = new Blank(this);
        this.a4 = new Blank(this);
        this.b4 = new Blank(this);
        this.c4 = new Blank(this);
        this.d4 = new Blank(this);
        this.e4 = new Blank(this);
        this.f4 = new Blank(this);
        this.g4 = new Blank(this);
        this.a5 = new Blank(this);
        this.b5 = new Blank(this);
        this.c5 = new Blank(this);
        this.d5 = new Blank(this);
        this.e5 = new Blank(this);
        this.f5 = new Blank(this);
        this.g5 = new Blank(this);
        this.a6 = new Blank(this);
        this.b6 = new Blank(this);
        this.c6 = new Blank(this);
        this.d6 = new Blank(this);
        this.e6 = new Blank(this);
        this.f6 = new Blank(this);
        this.g6 = new Blank(this);

        this.a1.flag = 1;
        this.b1.flag = 2;
        this.c1.flag = 13;
        this.d1.flag = 4;
        this.e1.flag = 5;
        this.f1.flag = 6;
        this.g1.flag = 14;
        this.a2.flag = 7;
        this.b2.flag = 2;
        this.c2.flag = 9;
        this.d2.flag = 11;
        this.e2.flag = 16;
        this.f2.flag = 8;
        this.g2.flag = 12;
        this.a3.flag = 10;
        this.b3.flag = 11;
        this.c3.flag = 5;
        this.d3.flag = 14;
        this.e3.flag = 13;
        this.f3.flag = 1;
        this.g3.flag = 12;
        this.a4.flag = 13;
        this.b4.flag = 14;
        this.c4.flag = 3;
        this.d4.flag = 7;
        this.e4.flag = 4;
        this.f4.flag = 9;
        this.g4.flag = 14;
        this.a5.flag = 5;
        this.b5.flag = 8;
        this.c5.flag = 17;
        this.d5.flag = 5;
        this.e5.flag = 17;
        this.f5.flag = 13;
        this.g5.flag = 2;
        this.a6.flag = 3;
        this.b6.flag = 10;
        this.c6.flag = 6;
        this.d6.flag = 2;
        this.e6.flag = 15;
        this.f6.flag = 15;
        this.g6.flag = 16;

        this.a1.flag1 = 50;
        this.b1.flag1 = 51;
        this.c1.flag1 = 52;
        this.d1.flag1 = 53;
        this.e1.flag1 = 54;
        this.f1.flag1 = 55;
        this.g1.flag1 = 56;
        this.a2.flag1 = 57;
        this.b2.flag1 = 58;
        this.c2.flag1 = 59;
        this.d2.flag1 = 60;
        this.e2.flag1 = 61;
        this.f2.flag1 = 62;
        this.g2.flag1 = 63;
        this.a3.flag1 = 64;
        this.b3.flag1 = 65;
        this.c3.flag1 = 66;
        this.d3.flag1 = 67;
        this.e3.flag1 = 68;
        this.f3.flag1 = 69;
        this.g3.flag1 = 70;
        this.a4.flag1 = 71;
        this.b4.flag1 = 72;
        this.c4.flag1 = 73;
        this.d4.flag1 = 74;
        this.e4.flag1 = 75;
        this.f4.flag1 = 76;
        this.g4.flag1 = 77;
        this.a5.flag1 = 78;
        this.b5.flag1 = 79;
        this.c5.flag1 = 80;
        this.d5.flag1 = 81;
        this.e5.flag1 = 82;
        this.f5.flag1 = 83;
        this.g5.flag1 = 84;
        this.a6.flag1 = 85;
        this.b6.flag1 = 86;
        this.c6.flag1 = 87;
        this.d6.flag1 = 88;
        this.e6.flag1 = 89;
        this.f6.flag1 = 90;
        this.g6.flag1 = 91;

    },
    pauseGame:function(){
        audioEngine.playEffect(M_KEY, false);


        this.a1.setVisible(false);
        this.b1.setVisible(false);
        this.c1.setVisible(false);
        this.d1.setVisible(false);
        this.e1.setVisible(false);
        this.f1.setVisible(false);
        this.g1.setVisible(false);
        this.a2.setVisible(false);
        this.b2.setVisible(false);
        this.c2.setVisible(false);
        this.d2.setVisible(false);
        this.e2.setVisible(false);
        this.f2.setVisible(false);
        this.g2.setVisible(false);
        this.a3.setVisible(false);
        this.b3.setVisible(false);
        this.c3.setVisible(false);
        this.d3.setVisible(false);
        this.e3.setVisible(false);
        this.f3.setVisible(false);
        this.g3.setVisible(false);
        this.a4.setVisible(false);
        this.b4.setVisible(false);
        this.c4.setVisible(false);
        this.d4.setVisible(false);
        this.e4.setVisible(false);
        this.f4.setVisible(false);
        this.g4.setVisible(false);
        this.a5.setVisible(false);
        this.b5.setVisible(false);
        this.c5.setVisible(false);
        this.d5.setVisible(false);
        this.e5.setVisible(false);
        this.f5.setVisible(false);
        this.g5.setVisible(false);
        this.a6.setVisible(false);
        this.b6.setVisible(false);
        this.c6.setVisible(false);
        this.d6.setVisible(false);
        this.e6.setVisible(false);
        this.f6.setVisible(false);
        this.g6.setVisible(false);

        this.getScheduler().pauseTarget(this);  //暂停部分动作   具体停止的是哪个动作还没弄清楚
    },
    onReplaceSceneTran:function (sender) {
        audioEngine.playEffect(M_KEY, false);

        audioEngine.stopMusic(M_CONN, true);
        audioEngine.playMusic(MUSIC_FILE, false);
        this.getScheduler().pauseTarget(this);

        credit4 = score4;

        m = 1;
        tag1 = 0;
        temp = 0;
        temp2 = 0;
        score4 = 0;

        var s = new MenuScene();
        var l = new MenuLayer();
        s.addChild(l,0);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1.5, s));
    },
    Move1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.tag1.setVisible(false);

        this.tag1_1 = cc.MenuItemImage.create(s_tag2_4,s_tag2_4,this.Move1_1,this);
        this.tag1_1.setPosition(cc.p(-size.width/2+77,-90));
        this.tag1_1.runAction(cc.MoveTo.create(1,cc.p(220,-90)));
        var menu = cc.Menu.create(this.tag1_1);
        this.addChild(menu,20,20);

        this.bg1 = cc.Sprite.create(s_move4_1);
        this.bg1.setPosition(cc.p(-280,282));
        this.bg1.runAction(cc.MoveTo.create(1,cc.p(272,282)));

        this.addChild(this.bg1,20,20);


    },
    Move2:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.tag2.setVisible(false);

        this.tag2_1 = cc.MenuItemImage.create(s_tag2_3,s_tag2_3,this.Move2_1,this);
        this.tag2_1.setPosition(cc.p(-size.width/2+77,-150));
        this.tag2_1.runAction(cc.MoveTo.create(1,cc.p(220,-150)));
        var menu = cc.Menu.create(this.tag2_1);
        this.addChild(menu,20,20);

        this.bg2 = cc.Sprite.create(s_move4_2);
        this.bg2.setPosition(cc.p(-280,282));
        this.bg2.runAction(cc.MoveTo.create(1,cc.p(272,282)));

        this.addChild(this.bg2,20,20);
    },

    Move1_1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.bg1.runAction(cc.MoveTo.create(1,cc.p(-280,282)));
        this.tag1_1.runAction(cc.MoveTo.create(1,cc.p(-size.width/2+77,-90)));
        this.tag1_1.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.setvis1,this)));
//        this.tag1_1.setVisible(false);

    },
    Move2_1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.bg2.runAction(cc.MoveTo.create(1,cc.p(-280,282)));
        this.tag2_1.runAction(cc.MoveTo.create(1,cc.p(-size.width/2+77,-150)));
        this.tag2_1.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.setvis2,this)));
//        this.tag1_1.setVisible(false);

    },

    setvis1:function(){
        this.tag1_1.setVisible(false);
        this.tag1.setVisible(true);

    },
    setvis2:function(){
        this.tag2_1.setVisible(false);
        this.tag2.setVisible(true);
    }


});
