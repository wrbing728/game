/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-7-20
 * Time: 上午10:36
 * To change this template use File | Settings | File Templates.
 */



var Color_Sorting = cc.Scene.extend({

   ctor:function(){
       this._super();
   }

});

var Sorting_Layer = cc.Layer.extend({

    totalnum : 0,

    ctor:function(){
        this._super();
        this.init();

        this.time = 30.0;
        this.label = cc.LabelTTF.create("30.0000", "Arial", 32);
        this.label.setPosition(cc.p(677,193));
        this.addChild(this.label,10);

        this.scorelabel = cc.LabelTTF.create(score, "Arial", 32);
        this.scorelabel.setPosition(cc.p(677,130));
//        this.scorelabel.setColor(cc.c3b(255,0,0));

        this.addChild(this.scorelabel,10);
    },

    init:function(){
        var size = cc.Director.getInstance().getWinSize();
//
        var bg = cc.Sprite.create(s_bg);
        bg.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(bg);

        this.tag1 = cc.MenuItemImage.create(s_tag1,s_tag1,this.Move1,this);
        this.tag2 = cc.MenuItemImage.create(s_tag2,s_tag2,this.Move2,this);
        this.tag3 = cc.MenuItemImage.create(s_tag3,s_tag3,this.Move3,this);

        this.tag1.setPosition(cc.p(-size.width/2+77,-30));
        this.tag2.setPosition(cc.p(-size.width/2+77,-90));
        this.tag3.setPosition(cc.p(-size.width/2+77,-150));



        var start = cc.MenuItemImage.create(s_start,s_start,this.startGame,this);
        start.setPosition(cc.p(190,-210));

        var pause = cc.MenuItemImage.create(s_pause,s_pause,this.pauseGame,this);
        pause.setPosition(cc.p(240,-210));

        this.laba = cc.MenuItemImage.create(s_laba3,s_laba3,this.stopmusic,this);
        this.laba.setPosition(cc.p(290,-210));

        this.laba2 = cc.MenuItemImage.create(s_laba3_2,s_laba3_2,this.startmusic,this);
        this.laba2.setPosition(cc.p(290,-210));
        this.laba2.setVisible(false);

        var Return = cc.MenuItemImage.create(s_return,s_return,this.onReplaceSceneTran,this);
        Return.setPosition(cc.p(340,-210));

        var  infoMenu = cc.Menu.create(this.tag1,this.tag2,this.tag3,start,pause,this.laba,this.laba2,Return);
        this.addChild(infoMenu);
//

        this.ball1_1 = new BallSprite(this);
        this.ball1_2 = new BallSprite(this);
        this.ball1_3 = new BallSprite(this);
        this.ball1_4 = new BallSprite(this);
        this.ball1_5 = new BallSprite(this);
        this.ball2_1 = new BallSprite(this);
        this.ball2_2 = new BallSprite(this);
        this.ball2_3 = new BallSprite(this);
        this.ball2_4 = new BallSprite(this);
        this.ball2_5 = new BallSprite(this);
        this.ball3_1 = new BallSprite(this);
        this.ball3_2 = new BallSprite(this);
        this.ball3_3 = new BallSprite(this);
        this.ball3_4 = new BallSprite(this);
        this.ball3_5 = new BallSprite(this);
        this.xb1 = new BallSprite(this);
        this.xb2 = new BallSprite(this);
        this.xb3 = new BallSprite(this);
        this.xb4 = new BallSprite(this);
        this.xb5 = new BallSprite(this);
        this.xb6 = new BallSprite(this);
        this.xb7 = new BallSprite(this);
        this.xb8 = new BallSprite(this);
        this.xb9 = new BallSprite(this);
        this.xb10= new BallSprite(this);
        this.xb11= new BallSprite(this);
        this.xb12= new BallSprite(this);
        this.xb13= new BallSprite(this);
        this.xb14= new BallSprite(this);

        this.ball1_1.initWithFile(s_ball1_1);
        this.ball1_2.initWithFile(s_ball1_2);
        this.ball1_3.initWithFile(s_ball1_3);
        this.ball1_4.initWithFile(s_ball1_4);
        this.ball1_5.initWithFile(s_ball1_5);
        this.ball2_1.initWithFile(s_ball2_1);
        this.ball2_2.initWithFile(s_ball2_2);
        this.ball2_3.initWithFile(s_ball2_3);
        this.ball2_4.initWithFile(s_ball2_4);
        this.ball2_5.initWithFile(s_ball2_5);
        this.ball3_1.initWithFile(s_ball3_1);
        this.ball3_2.initWithFile(s_ball3_2);
        this.ball3_3.initWithFile(s_ball3_3);
        this.ball3_4.initWithFile(s_ball3_4);
        this.ball3_5.initWithFile(s_ball3_5);
        this.xb1 .initWithFile(s_x1 );
        this.xb2 .initWithFile(s_x2 );
        this.xb3 .initWithFile(s_x3 );
        this.xb4 .initWithFile(s_x4 );
        this.xb5 .initWithFile(s_x5 );
        this.xb6 .initWithFile(s_x6 );
        this.xb7 .initWithFile(s_x7 );
        this.xb8 .initWithFile(s_x8 );
        this.xb9 .initWithFile(s_x9 );
        this.xb10.initWithFile(s_x10);
        this.xb11.initWithFile(s_x11);
        this.xb12.initWithFile(s_x12);
        this.xb13.initWithFile(s_x13);
        this.xb14.initWithFile(s_x14);


        this.ball1_1.setPosition(cc.p(240,400));
        this.ball1_2.setPosition(cc.p(255,358));
        this.ball1_3.setPosition(cc.p(250,310));
        this.ball1_4.setPosition(cc.p(242,272));
        this.ball1_5.setPosition(cc.p(245,235));
        this.ball2_1.setPosition(cc.p(253,185));
        this.ball2_2.setPosition(cc.p(248,142));
        this.ball2_3.setPosition(cc.p(280,110));
        this.ball2_4.setPosition(cc.p(420,402));
        this.ball2_5.setPosition(cc.p(295,385));
        this.ball3_1.setPosition(cc.p(300,338));
        this.ball3_2.setPosition(cc.p(289,293));
        this.ball3_3.setPosition(cc.p(300,248));
        this.ball3_4.setPosition(cc.p(288,203));
        this.ball3_5.setPosition(cc.p(296,155));
        this.xb1 .setPosition(cc.p(340,403));
        this.xb2 .setPosition(cc.p(335,355));
        this.xb3 .setPosition(cc.p(350,310));
        this.xb4 .setPosition(cc.p(335,265));
        this.xb5 .setPosition(cc.p(343,220));
        this.xb6 .setPosition(cc.p(347,178));
        this.xb7 .setPosition(cc.p(343,128));
        this.xb8 .setPosition(cc.p(400,125));
        this.xb9 .setPosition(cc.p(390,380));
        this.xb10.setPosition(cc.p(395,335));
        this.xb11.setPosition(cc.p(410,300));
        this.xb12.setPosition(cc.p(378,270));
        this.xb13.setPosition(cc.p(394,225));
        this.xb14.setPosition(cc.p(388,180));


        this.ball1_1.setVisible(false);
        this.ball1_2.setVisible(false);
        this.ball1_3.setVisible(false);
        this.ball1_4.setVisible(false);
        this.ball1_5.setVisible(false);
        this.ball2_1.setVisible(false);
        this.ball2_2.setVisible(false);
        this.ball2_3.setVisible(false);
        this.ball2_4.setVisible(false);
        this.ball2_5.setVisible(false);
        this.ball3_1.setVisible(false);
        this.ball3_2.setVisible(false);
        this.ball3_3.setVisible(false);
        this.ball3_4.setVisible(false);
        this.ball3_5.setVisible(false);
        this.xb1 .setVisible(false);
        this.xb2 .setVisible(false);
        this.xb3 .setVisible(false);
        this.xb4 .setVisible(false);
        this.xb5 .setVisible(false);
        this.xb6 .setVisible(false);
        this.xb7 .setVisible(false);
        this.xb8 .setVisible(false);
        this.xb9 .setVisible(false);
        this.xb10.setVisible(false);
        this.xb11.setVisible(false);
        this.xb12.setVisible(false);
        this.xb13.setVisible(false);
        this.xb14.setVisible(false);

        this.addChild(this.ball1_1,15);
        this.addChild(this.ball1_2,15);
        this.addChild(this.ball1_3,15);
        this.addChild(this.ball1_4,15);
        this.addChild(this.ball1_5,15);
        this.addChild(this.ball2_1,15);
        this.addChild(this.ball2_3,15);
        this.addChild(this.ball2_4,15);
        this.addChild(this.ball2_5,15);
        this.addChild(this.ball2_2,15);
        this.addChild(this.ball3_1,15);
        this.addChild(this.ball3_2,15);
        this.addChild(this.ball3_3,15);
        this.addChild(this.ball3_4,15);
        this.addChild(this.ball3_5,15);
        this.addChild(this.xb1,15 );
        this.addChild(this.xb2,15 );
        this.addChild(this.xb3,15 );
        this.addChild(this.xb4,15 );
        this.addChild(this.xb5,15 );
        this.addChild(this.xb6,15 );
        this.addChild(this.xb7,15 );
        this.addChild(this.xb8,15 );
        this.addChild(this.xb9,15 );
        this.addChild(this.xb10,15);
        this.addChild(this.xb11,15);
        this.addChild(this.xb12,15);
        this.addChild(this.xb13,15);
        this.addChild(this.xb14,15);

        this.ball1_1.name = "hl1";
        this.ball1_2.name = "hl2";
        this.ball1_3.name = "hl3";
        this.ball1_4.name = "hl4";
        this.ball1_4.name = "hl5";
        this.ball2_1.name = "nc1";
        this.ball2_2.name = "nc2";
        this.ball2_3.name = "nc3";
        this.ball2_4.name = "nc4";
        this.ball2_5.name = "nc5";
        this.ball3_1.name = "hp1";
        this.ball3_2.name = "hp2";
        this.ball3_3.name = "hp3";
        this.ball3_4.name = "hp4";
        this.ball3_5.name = "hp5";


    },
    update:function (dt) {

        if(this.time <= 0){
            audioEngine.stopMusic(M_CONN, true);
            audioEngine.playMusic(M_WIN, false);
            this.stopAllActions();
            this.label.setString("Time's Up");
            this.label.setScale(0.8);
            this.label.setColor(cc.c3b(255,0,0));

            this.scorelabel = cc.LabelTTF.create(score, "Arial", 42);
            this.scorelabel.setPosition(cc.p(370,280));
            this.scorelabel.setColor(cc.c3b(255,0,0));
            this.addChild(this.scorelabel,50);

            var finbg = cc.Sprite.create(s_fin2);
            finbg.setPosition(cc.p(400,280));
            this.addChild(finbg,25);

            var fin = cc.MenuItemImage.create(s_okbutton,s_okbutton,this.onReplaceSceneTran,this);
            fin.setPosition(cc.p(100,-150));
            var info = cc.Menu.create(fin);
            this.addChild(info,30);
            this.unschedule(this.update);
//            this.label.runAction(cc.Sequence.create(cc.DelayTime.create(1), cc.CallFunc.create(this.reset, this)));

        }else{
        this.time -= dt;
        this.label.setString(this.time.toFixed(4));}
    },

    reset:function(){

        if(Round >= 4){
            audioEngine.stopMusic(M_CONN, true);
            audioEngine.playMusic(M_WIN, false);
            var finbg = cc.Sprite.create(s_ok);
            finbg.setPosition(cc.p(400,280));
            this.addChild(finbg,25);

            this.scorelabel = cc.LabelTTF.create(score, "Arial", 42);
            this.scorelabel.setPosition(cc.p(370,280));
            this.scorelabel.setColor(cc.c3b(255,0,0));
            this.addChild(this.scorelabel,26);


            var fin = cc.MenuItemImage.create(s_okbutton,s_okbutton,this.onReplaceSceneTran,this);
            fin.setPosition(cc.p(100,-150));
            var info = cc.Menu.create(fin);
            this.addChild(info,25);

            this.getScheduler().pauseTarget(this);

        }else{
            var s = new Color_Sorting();
            var l = new Sorting_Layer();
            s.addChild(l,0);

            var title1 = cc.Sprite.create(s_title1);
            title1.setPosition(cc.p(460,480));
            l.addChild(title1,15);

            var subtitle = cc.Sprite.create("res/subtitle" + Round + ".png");
            subtitle.setPosition(cc.p(630,400));
            subtitle.setScale(0);
            subtitle.runAction(cc.Sequence.create(cc.DelayTime.create(0.8),cc.ScaleTo.create(0.5, 1)));
            l.addChild(subtitle);
            cc.Director.getInstance().replaceScene(s);
        }
    },

    startGame:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        audioEngine.playMusic(M_CONN, true);

        this.schedule(this.update,0);
        this.getScheduler().resumeTarget(this);  //暂停恢复
//        cc.Director.getInstance().resume();
        this.ball1_1.runAction(cc.RepeatForever.create(cc.Blink.create(3,3)));
        this.ball1_2.runAction(cc.RepeatForever.create(cc.Blink.create(3,4)));
        this.ball1_3.runAction(cc.RepeatForever.create(cc.Blink.create(3,5)));
        this.ball1_4.runAction(cc.RepeatForever.create(cc.Blink.create(3,2)));
        this.ball1_5.runAction(cc.RepeatForever.create(cc.Blink.create(3,4)));
        this.ball2_1.runAction(cc.RepeatForever.create(cc.Blink.create(3,3)));
        this.ball2_2.runAction(cc.RepeatForever.create(cc.Blink.create(3,5)));
        this.ball2_3.runAction(cc.RepeatForever.create(cc.Blink.create(3,3)));
        this.ball2_4.runAction(cc.RepeatForever.create(cc.Blink.create(3,4)));
        this.ball2_5.runAction(cc.RepeatForever.create(cc.Blink.create(3,2)));
        this.ball3_1.runAction(cc.RepeatForever.create(cc.Blink.create(3,3)));
        this.ball3_2.runAction(cc.RepeatForever.create(cc.Blink.create(3,5)));
        this.ball3_3.runAction(cc.RepeatForever.create(cc.Blink.create(3,4)));
        this.ball3_4.runAction(cc.RepeatForever.create(cc.Blink.create(3,2)));
        this.ball3_5.runAction(cc.RepeatForever.create(cc.Blink.create(3,3)));
        this.xb1 .runAction(cc.RepeatForever.create(cc.Blink.create(3,5)));
        this.xb2 .runAction(cc.RepeatForever.create(cc.Blink.create(3,2)));
        this.xb3 .runAction(cc.RepeatForever.create(cc.Blink.create(3,4)));
        this.xb4 .runAction(cc.RepeatForever.create(cc.Blink.create(3,3)));
        this.xb5 .runAction(cc.RepeatForever.create(cc.Blink.create(3,2)));
        this.xb6 .runAction(cc.RepeatForever.create(cc.Blink.create(3,5)));
        this.xb7 .runAction(cc.RepeatForever.create(cc.Blink.create(3,4)));
        this.xb8 .runAction(cc.RepeatForever.create(cc.Blink.create(3,3)));
        this.xb9 .runAction(cc.RepeatForever.create(cc.Blink.create(3,2)));
        this.xb10.runAction(cc.RepeatForever.create(cc.Blink.create(3,6)));
        this.xb11.runAction(cc.RepeatForever.create(cc.Blink.create(3,4)));
        this.xb12.runAction(cc.RepeatForever.create(cc.Blink.create(3,3)));
        this.xb13.runAction(cc.RepeatForever.create(cc.Blink.create(3,5)));
        this.xb14.runAction(cc.RepeatForever.create(cc.Blink.create(3,2)));


    },
    pauseGame:function(){
        audioEngine.playEffect(M_KEY, false);

        this.getScheduler().pauseTarget(this);  //暂停部分动作   具体停止的是哪个动作还没弄清楚
//        cc.Director.getInstance().pause();   //   所有动作均暂停不可操作
        this.ball1_1.stopAllActions();
        this.ball1_2.stopAllActions();
        this.ball1_3.stopAllActions();
        this.ball1_4.stopAllActions();
        this.ball1_5.stopAllActions();
        this.ball2_1.stopAllActions();
        this.ball2_2.stopAllActions();
        this.ball2_3.stopAllActions();
        this.ball2_4.stopAllActions();
        this.ball2_5.stopAllActions();
        this.ball3_1.stopAllActions();
        this.ball3_2.stopAllActions();
        this.ball3_3.stopAllActions();
        this.ball3_4.stopAllActions();
        this.ball3_5.stopAllActions();
        this.xb1 .stopAllActions();
        this.xb2 .stopAllActions();
        this.xb3 .stopAllActions();
        this.xb4 .stopAllActions();
        this.xb5 .stopAllActions();
        this.xb6 .stopAllActions();
        this.xb7 .stopAllActions();
        this.xb8 .stopAllActions();
        this.xb9 .stopAllActions();
        this.xb10.stopAllActions();
        this.xb11.stopAllActions();
        this.xb12.stopAllActions();
        this.xb13.stopAllActions();
        this.xb14.stopAllActions();

        this.ball1_1.setVisible(false);
        this.ball1_2.setVisible(false);
        this.ball1_3.setVisible(false);
        this.ball1_4.setVisible(false);
        this.ball1_5.setVisible(false);
        this.ball2_1.setVisible(false);
        this.ball2_2.setVisible(false);
        this.ball2_3.setVisible(false);
        this.ball2_4.setVisible(false);
        this.ball2_5.setVisible(false);
        this.ball3_1.setVisible(false);
        this.ball3_2.setVisible(false);
        this.ball3_3.setVisible(false);
        this.ball3_4.setVisible(false);
        this.ball3_5.setVisible(false);
        this.xb1 .setVisible(false);
        this.xb2 .setVisible(false);
        this.xb3 .setVisible(false);
        this.xb4 .setVisible(false);
        this.xb5 .setVisible(false);
        this.xb6 .setVisible(false);
        this.xb7 .setVisible(false);
        this.xb8 .setVisible(false);
        this.xb9 .setVisible(false);
        this.xb10.setVisible(false);
        this.xb11.setVisible(false);
        this.xb12.setVisible(false);
        this.xb13.setVisible(false);
        this.xb14.setVisible(false);
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
//返回上一级
    onReplaceSceneTran:function (sender) {
        audioEngine.playEffect(M_KEY, false);
        this.getScheduler().pauseTarget(this);
        audioEngine.stopMusic(M_CONN, true);
        audioEngine.playMusic(MUSIC_FILE, false);
        credit2 = score;

        Round = 1;
        score = 0;
        var s = new MenuScene();
        var l = new MenuLayer();
        s.addChild(l,0);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1.5, s));
    },
//左边的小标签移动
    Move1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.tag1.setVisible(false);

        this.tag1_1 = cc.MenuItemImage.create(s_tag1,s_tag1,this.Move1_1,this);
        this.tag1_1.setPosition(cc.p(-size.width/2+77,-30));
        this.tag1_1.runAction(cc.MoveTo.create(1,cc.p(220,-30)));
        var menu = cc.Menu.create(this.tag1_1);
        this.addChild(menu,20,20);

        this.bg1 = cc.Sprite.create(s_move1);
        this.bg1.setPosition(cc.p(-280,282));
        this.bg1.runAction(cc.MoveTo.create(1,cc.p(272,282)));

        this.addChild(this.bg1,20,20);


    },
    Move2:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.tag2.setVisible(false);

        this.tag2_1 = cc.MenuItemImage.create(s_tag2,s_tag2,this.Move2_1,this);
        this.tag2_1.setPosition(cc.p(-size.width/2+77,-90));
        this.tag2_1.runAction(cc.MoveTo.create(1,cc.p(220,-90)));
        var menu = cc.Menu.create(this.tag2_1);
        this.addChild(menu,20,20);

        this.bg2 = cc.Sprite.create(s_move2);
        this.bg2.setPosition(cc.p(-280,282));
        this.bg2.runAction(cc.MoveTo.create(1,cc.p(272,282)));

        this.addChild(this.bg2,20,20);
    },
    Move3:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.tag3.setVisible(false);

        this.tag3_1 = cc.MenuItemImage.create(s_tag3,s_tag3,this.Move3_1,this);
        this.tag3_1.setPosition(cc.p(-size.width/2+77,-150));
        this.tag3_1.runAction(cc.MoveTo.create(1,cc.p(220,-150)));
        var menu = cc.Menu.create(this.tag3_1);
        this.addChild(menu,20,20);

        this.bg3 = cc.Sprite.create(s_move3);
        this.bg3.setPosition(cc.p(-280,282));
        this.bg3.runAction(cc.MoveTo.create(1,cc.p(272,282)));

        this.addChild(this.bg3,20,20);
    },
    Move1_1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.bg1.runAction(cc.MoveTo.create(1,cc.p(-280,282)));
        this.tag1_1.runAction(cc.MoveTo.create(1,cc.p(-size.width/2+77,-30)));
        this.tag1_1.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.setvis1,this)));
//        this.tag1_1.setVisible(false);

    },
    Move2_1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.bg2.runAction(cc.MoveTo.create(1,cc.p(-280,282)));
        this.tag2_1.runAction(cc.MoveTo.create(1,cc.p(-size.width/2+77,-90)));
        this.tag2_1.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.setvis2,this)));
//        this.tag1_1.setVisible(false);

    },
    Move3_1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.bg3.runAction(cc.MoveTo.create(1,cc.p(-280,282)));
        this.tag3_1.runAction(cc.MoveTo.create(1,cc.p(-size.width/2+77,-150)));
        this.tag3_1.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.setvis3,this)));
//        this.tag1_1.setVisible(false);

    },
    setvis1:function(){
        this.tag1_1.setVisible(false);
        this.tag1.setVisible(true);

    },
    setvis2:function(){
        this.tag2_1.setVisible(false);
        this.tag2.setVisible(true);
    },
    setvis3:function(){
        this.tag3_1.setVisible(false);
        this.tag3.setVisible(true);
    }
//左边小标签移动结束
});