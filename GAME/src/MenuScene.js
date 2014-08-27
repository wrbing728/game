/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-7-12
 * Time: 下午1:18
 * To change this template use File | Settings | File Templates.
 */

var MenuScene = cc.Scene.extend({
   ctor:function(){

       this._super();
       this.init();

   } ,
    init:function(){

    }

});

var MenuLayer = cc.Layer.extend({

   ctor:function(){
       this._super();
       this.init();

   },
    init:function(){
        var size = cc.Director.getInstance().getWinSize();

        //添加图片
        var learn = cc.Sprite.create(s_learn);
        var pink = cc.MenuItemImage.create(s_pink,s_pink,this.ChangeToSlide1,this);
        var green = cc.MenuItemImage.create(s_green,s_green,this.ChangeToSlide2,this);
        var yellow = cc.MenuItemImage.create(s_yellow,s_yellow,this.ChangeToSlide3,this);
        var gray = cc.MenuItemImage.create(s_gray,s_gray,this.ChangeToSlide4,this);
        var lightgray = cc.MenuItemImage.create(s_lightgray,s_lightgray,this.ChangeToSlide5,this);
        var red = cc.MenuItemImage.create(s_red,s_red,this.ChangeToSlide6,this);
        var blue = cc.Sprite.create(s_blue);
        var pic1 = cc.Sprite.create(s_1);
        var pic2 = cc.Sprite.create(s_2);
        var pic3 = cc.Sprite.create(s_3);
        var pic4 = cc.Sprite.create(s_4);
        var pic5 = cc.Sprite.create(s_5);
        var pic6 = cc.Sprite.create(s_6);
        var back = cc.MenuItemImage.create(s_back,s_back,this.onReplaceSceneTran,this);


        learn.setAnchorPoint(cc.p(0,1));
        pink.setAnchorPoint(cc.p(0,1));
        green.setAnchorPoint(cc.p(0,1));
        yellow.setAnchorPoint(cc.p(0,1));
        gray.setAnchorPoint(cc.p(0,1));
        lightgray.setAnchorPoint(cc.p(0,1));
        red.setAnchorPoint(cc.p(0,1));
        blue.setAnchorPoint(cc.p(0,1));
        pic1.setAnchorPoint(cc.p(0,1));
        pic2.setAnchorPoint(cc.p(0,1));
        pic3.setAnchorPoint(cc.p(0,1));
        pic4.setAnchorPoint(cc.p(0,1));
        pic5.setAnchorPoint(cc.p(0,1));
        pic6.setAnchorPoint(cc.p(0,1));
        back.setAnchorPoint(cc.p(0,1));

        learn.setPosition(cc.p(0,size.height-30));
        pink.setPosition(cc.p(207-size.width/2,size.height/2-30));
        green.setPosition(cc.p(404-size.width/2,size.height/2-30));
        yellow.setPosition(cc.p(602-size.width/2,size.height/2-30));
        gray.setPosition(cc.p(10-size.width/2,268-size.height/2));
        lightgray.setPosition(cc.p(207-size.width/2,268-size.height/2));
        red.setPosition(cc.p(404-size.width/2,268-size.height/2));
        blue.setPosition(cc.p(602,268));
        pic1.setPosition(cc.p(207,size.height-210));
        pic2.setPosition(cc.p(404,size.height-210));
        pic3.setPosition(cc.p(602,size.height-210));
        pic4.setPosition(cc.p(10,88));
        pic5.setPosition(cc.p(207,88));
        pic6.setPosition(cc.p(404,88));
        back.setPosition(cc.p(250,-190));

        var infoMenu = cc.Menu.create(back,pink,green,yellow,gray,lightgray,red);
        this.addChild(infoMenu,10);

        this.addChild(learn);
        this.addChild(blue);
        this.addChild(pic1);
        this.addChild(pic2);
        this.addChild(pic3);
        this.addChild(pic4);
        this.addChild(pic5);
        this.addChild(pic6);


    },
    onReplaceSceneTran:function (sender) {
        audioEngine.playEffect(M_KEY, false);

        m = 1;
        tag1 = 0;
        temp = 0;
        temp2 = 0;
        score4 = 0;
        counting = 0;

        round = 1;
        num = 1;
        score2 = 0
        click = 0;

        Round = 1;
        score = 0;
        credit1 = 0;
        credit2 = 0;
        credit3 = 0;
        credit4 = 0;

        r = 1;
        n = 1;
        c = 0;
        score5 = 0;

        var s = new GameScene();
        var l = new MainMenu();
        s.addChild(l,0);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1.5, s));
    },
    ChangeToSlide1:function () {
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        var s = new Slide3();
        var l = new Slide3_Layer();
        s.addChild(l,0);
        l.bgM = cc.Sprite.create(s_bg1);
        l.bgM.setPosition(cc.p(size.width/2,size.height/2));
        l.addChild(l.bgM,-10);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInB.create(1.5,s));
    },
    ChangeToSlide2:function () {
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        var s = new Color_Mixing();
        var l = new Mixing_Layer();
        s.addChild(l,0);
        l.bgM = cc.Sprite.create(s_bgM);
        l.bgM.setPosition(cc.p(size.width/2,size.height/2));
        l.addChild(l.bgM,-10);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInB.create(1.5,s));
    },

    ChangeToSlide3:function () {
        audioEngine.playEffect(M_KEY, false);
        var s = new Color_Sorting();
        var l = new Sorting_Layer();
        s.addChild(l,0);
        var subtitle = cc.Sprite.create(s_subtitle1);
        subtitle.setPosition(cc.p(630,400));
        subtitle.setScale(0);
        subtitle.runAction(cc.Sequence.create(cc.DelayTime.create(0.8),cc.ScaleTo.create(0.5, 1)));
        l.addChild(subtitle);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInB.create(1.5,s));

        var title1 = cc.Sprite.create(s_title1);
        title1.setPosition(cc.p(460,700));
        var move = cc.MoveBy.create(3,cc.p(0,-220));
        var move_ease_out = cc.EaseBounceOut.create(move.copy());
        title1.runAction(move_ease_out);
        l.addChild(title1,10);
    },

    ChangeToSlide5:function () {
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        var s = new Color_Conn();
        var l = new Conn_Layer();
        s.addChild(l,0);
        l.bgM = cc.Sprite.create(s_conn_bg);
        l.bgM.setPosition(cc.p(size.width/2,size.height/2))
        l.addChild(l.bgM,-10);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInB.create(1.5,s));
    },
    ChangeToSlide4:function () {
        audioEngine.playEffect(M_KEY, false);
        var s = new Color_Using();
        var l = new Using_Layer();
        s.addChild(l,0);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInB.create(1.5,s));
    },
    ChangeToSlide6:function () {
        audioEngine.playEffect(M_KEY, false);
        var size = cc.Director.getInstance().getWinSize();
        var s = new Score();
        var l = new Score_Layer();
        s.addChild(l,0);
        l.bgM = cc.Sprite.create(s_add);
        l.bgM.setPosition(cc.p(size.width/2,size.height/2))
        l.addChild(l.bgM,-10);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInB.create(1.5,s));
    }
});