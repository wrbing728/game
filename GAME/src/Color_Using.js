/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-8-9
 * Time: 下午2:14
 * To change this template use File | Settings | File Templates.
 */

var Color_Using = cc.Scene.extend({
   ctor:function(){
       this._super();
   }
});

var Using_Layer = cc.Layer.extend({
   ctor:function (){
       this._super();
       this.init();
   },
    init:function(){
        var size = cc.Director.getInstance().getWinSize();

        var bg = cc.Sprite.create(s_using_bg);
        bg.setPosition(cc.p(400,280));
        this.addChild(bg);

        var score_bg = cc.Sprite.create(s_score);
        score_bg.setPosition(cc.p(650,30));
        this.addChild(score_bg,50);

        var time_bg = cc.Sprite.create(s_time);
        time_bg.setPosition(cc.p(400,30));
        this.addChild(time_bg,50);

        this.scorelabel = cc.LabelTTF.create("0", "Arial", 42);
        this.scorelabel.setPosition(cc.p(700,28));
        this.scorelabel.setColor(cc.c3b(255,0,0));
        this.addChild(this.scorelabel,50);

        this.time = 60.0;
        this.label = cc.LabelTTF.create("60", "Arial", 32);
        this.label.setPosition(cc.p(450,30));
        this.label.setColor(cc.c3b(255,0,0));
        this.addChild(this.label,50);

        this.tag5_1 = cc.MenuItemImage.create(s_tag5_1,s_tag5_1,this.Move1,this);

        this.tag5_1.setPosition(cc.p(-size.width/2+77,size.height/2-50));

        var start5 = cc.MenuItemImage.create(s_start5,s_start5,this.startGame,this);
        start5.setPosition(cc.p(-195,-190));

        this.laba = cc.MenuItemImage.create(s_laba4,s_laba4,this.stopmusic,this);
        this.laba.setPosition(cc.p(-145,-190));

        this.laba2 = cc.MenuItemImage.create(s_laba4_2,s_laba4_2,this.startmusic,this);
        this.laba2.setPosition(cc.p(-145,-190));
        this.laba2.setVisible(false);

        var Return5 = cc.MenuItemImage.create(s_return5,s_return5,this.onReplaceSceneTran,this);
        Return5.setPosition(cc.p(-95,-190));


        var  infoMenu = cc.Menu.create(this.tag5_1,start5,this.laba,this.laba2,Return5);
        this.addChild(infoMenu,50);
    },
    update:function (dt) {

        if(this.time <= 0){

            this.stopAllActions();
            this.label.setString("Time's Up");
            this.label.setScale(0.7);
            this.label.setColor(cc.c3b(255,0,0));
//            this.label.runAction(cc.ScaleTo.create(0.5, 0));

            audioEngine.stopMusic(M_CONN, true);
            audioEngine.playMusic(M_WIN, false);
            var finbg = cc.Sprite.create(s_fin2);
            finbg.setPosition(cc.p(400,280));
            parent_layer.addChild(finbg,55);

            this.scorelabel = cc.LabelTTF.create(score5, "Arial", 42);
            this.scorelabel.setPosition(cc.p(370,280));
            this.scorelabel.setColor(cc.c3b(255,0,0));
            this.addChild(this.scorelabel,60);

            var fin = cc.MenuItemImage.create(s_okbutton,s_okbutton,this.onReplaceSceneTran,this);
            fin.setPosition(cc.p(100,-150));
            var info = cc.Menu.create(fin);
            parent_layer.addChild(info,55);

            this.unschedule(this.update);

        }else{
            this.time -= dt;
            this.label.setString(this.time.toFixed(0));}
    },
    startGame:function(){

        audioEngine.playEffect(M_KEY, false);
        audioEngine.playMusic(M_CONN, true);
        this.schedule(this.update,0);
        this.getScheduler().resumeTarget(this);
        var a = new Box(this);
        var b = new Box(this);
        var c = new Box(this);
        var d = new Box(this);
        var e = new Box(this);
        var f = new Box(this);
        var g = new Box(this);
        var h = new Box(this);
        var i = new Box(this);
        var j = new Box(this);
        var k = new Box(this);
        var l = new Box(this);
        var m = new Box(this);
        var n = new Box(this);
        var o = new Box(this);
        d.flag = true;
        b.flag = true;
        m.flag = true;
        o.flag = true;
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
        this.getScheduler().pauseTarget(this);
        audioEngine.stopMusic(M_CONN, true);
        audioEngine.playMusic(MUSIC_FILE, false);
        credit3 = score5;

        r = 1;
        n = 1;
        c = 0;
        score5 = 0;
        var s = new MenuScene();
        var l = new MenuLayer();
        s.addChild(l,0);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1.5, s));
    },
    Move1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.tag5_1.setVisible(false);

        this.tag5_1_1 = cc.MenuItemImage.create(s_tag5_1,s_tag5_1,this.Move1_1,this);
        this.tag5_1_1.setPosition(cc.p(-size.width/2+77,size.height/2-50));
        this.tag5_1_1.runAction(cc.MoveTo.create(1,cc.p(220,size.height/2-50)));
        var menu = cc.Menu.create(this.tag5_1_1);
        this.addChild(menu,50,50);

        this.bg1 = cc.Sprite.create(s_move5);
        this.bg1.setPosition(cc.p(-280,340));
        this.bg1.runAction(cc.MoveTo.create(1,cc.p(272,340)));

        this.addChild(this.bg1,55,55);


    },

    Move1_1:function(){
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        this.bg1.runAction(cc.MoveTo.create(1,cc.p(-280,340)));
        this.tag5_1_1.runAction(cc.MoveTo.create(1,cc.p(-size.width/2+77,size.height/2-50)));
        this.tag5_1_1.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.setvis1,this)));
//        this.tag1_1.setVisible(false);

    },

    setvis1:function(){
        this.tag5_1_1.removeFromParent(true);
        this.tag5_1.setVisible(true);

    }

});