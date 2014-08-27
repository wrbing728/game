/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-7-14
 * Time: 下午4:12
 * To change this template use File | Settings | File Templates.
 */
var a = 10;
var Slide3 = cc.Scene.extend({

    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){

    }

});

var Slide3_Layer = cc.Layer.extend({
    ctor:function(){
        this._super();
        this.init();
    } ,
    init:function(){
        var size = cc.Director.getInstance().getWinSize();

        this.slide = cc.Sprite.create(s_slide);
        this.slide.setPosition(cc.p(size.width/2+93,size.height/2));
        this.addChild(this.slide,5);

        this.tag1 = cc.MenuItemImage.create(s_tag1_1,s_tag1_1,this.slide1,this);
        this.tag11 = cc.MenuItemImage.create(s_tag1_3,s_tag1_3,this.slide1,this);
        this.tag2 = cc.MenuItemImage.create(s_tag1_2,s_tag1_2,this.slide2,this);
        this.tag22 = cc.MenuItemImage.create(s_tag1_4,s_tag1_4,this.slide2,this);

        this.tag1.setPosition(cc.p(-size.width/2+77,20));
        this.tag11.setPosition(cc.p(-size.width/2+112,20));
        this.tag2.setPosition(cc.p(-size.width/2+77,-40));
        this.tag22.setPosition(cc.p(-size.width/2+112,-40));

        this.tag11.setVisible(false);
        this.tag22.setVisible(false);

        var Return = cc.MenuItemImage.create(s_return1,s_return1,this.onReplaceSceneTran,this);
        Return.setPosition(cc.p(310,-250));

        var  infoMenu = cc.Menu.create(this.tag1,this.tag11,this.tag2,this.tag22,Return);
        this.addChild(infoMenu);


    },
    suns:function(){
        audioEngine.stopEffect(M_YUANLI,true);
        audioEngine.playEffect(M_SUN,false);

        this.xx1 = cc.Sprite.create(s_sun);
        this.xx1.setPosition(cc.p(500,263));
        this.addChild(this.xx1,a);
        this.back1 = cc.MenuItemImage.create(s_back1,s_back1,this.back11,this);
        this.back1.setPosition(cc.p(315,-158));
        var infoMenu = cc.Menu.create(this.back1);
        this.addChild(infoMenu,a);
    },
    eyes:function(){

        this.xx2 = cc.Sprite.create(s_eye);
        this.xx2.setPosition(cc.p(500,263));
        this.addChild(this.xx2,a);
        this.back2 = cc.MenuItemImage.create(s_back1,s_back1,this.back22,this);
        this.back2.setPosition(cc.p(315,-158));
        var infoMenu = cc.Menu.create(this.back2);
        this.addChild(infoMenu,a);
    },
    cloths:function(){
        audioEngine.stopEffect(M_YUANLI,true);
        audioEngine.playEffect(M_CLOTH,false);

        this.xx3 = cc.Sprite.create(s_cloth);
        this.xx3.setPosition(cc.p(500,263));
        this.addChild(this.xx3,a);
        this.back3 = cc.MenuItemImage.create(s_back1,s_back1,this.back33,this);
        this.back3.setPosition(cc.p(315,-158));
        var infoMenu = cc.Menu.create(this.back3);
        this.addChild(infoMenu,a);
    },
    back11:function(){
        audioEngine.stopEffect(M_SUN,true);
        this.xx1.removeFromParent(true);
        this.back1.setVisible(false);
    },
    back22:function(){

        this.xx2.removeFromParent(true);
        this.back2.setVisible(false);
    },
    back33:function(){
        audioEngine.stopEffect(M_CLOTH,true);
        this.xx3.removeFromParent(true);
        this.back3.setVisible(false);
    },
    back44:function(){
        audioEngine.stopEffect(M_FUSHE,true);
        this.xx4.removeFromParent(true);
        this.back4.setVisible(false);
    },
    p1:function(){
        this.pp1 = cc.Sprite.create(s_p1);
        this.pp1.setPosition(cc.p(470,370));
        this.pp1.runAction(cc.FadeIn.create(1));
        this.addChild(this.pp1,a);
    },
    p2:function(){
        this.pp2 = cc.Sprite.create(s_p2);
        this.pp2.setPosition(cc.p(350,190));
        this.pp2.runAction(cc.FadeIn.create(1));
        this.addChild(this.pp2,a);
    },
    p3:function(){
        this.pp3 = cc.Sprite.create(s_p3);
        this.pp3.setPosition(cc.p(680,210));
        this.pp3.runAction(cc.FadeIn.create(1));
        this.addChild(this.pp3,a);
    },
    onReplaceSceneTran:function (sender) {
        audioEngine.stopEffect(M_KJG,true);
        audioEngine.stopEffect(M_YUANLI,true);
        audioEngine.stopEffect(M_SUN,true);
        audioEngine.stopEffect(M_FUSHE,true);
        audioEngine.stopEffect(M_CLOTH,true);

        audioEngine.playEffect(M_KEY, false);
        var s = new MenuScene();
        var l = new MenuLayer();
        s.addChild(l,0);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1.5, s));
    },
    slide1:function(){
//        this.point4.removeFromParent(true);
        audioEngine.stopEffect(M_KJG,true);
        audioEngine.playEffect(M_KEY, false);
        audioEngine.playEffect(M_YUANLI, false);
        this.slide.removeFromParent(true);
        a = a+1;
        var size = cc.Director.getInstance().getWinSize();
        var slide1 = cc.Sprite.create(s_slide1);
        slide1.setPosition(cc.p(size.width/2+113,size.height/2-20));
//        slide1.setScale(0.8);
        this.addChild(slide1,a);

        this.point = cc.MenuItemImage.create(s_point,s_point,this.suns,this);
        this.point.setPosition(cc.p(350,100));

        this.point2 = cc.MenuItemImage.create(s_point,s_point,this.cloths,this);
        this.point2.setPosition(cc.p(-50,-180));

        this.point3 = cc.MenuItemImage.create(s_point,s_point,this.eyes,this);
        this.point3.setPosition(cc.p(350,-180));

        var  infoMenu = cc.Menu.create(this.point,this.point2,this.point3);
        this.addChild(infoMenu,a);

        this.tag11.setVisible(true);
        this.tag22.setVisible(false);
        this.runAction(cc.Sequence.create(cc.DelayTime.create(1.5),cc.CallFunc.create(this.p1,this),
            cc.DelayTime.create(1.5),cc.CallFunc.create(this.p2,this),
            cc.DelayTime.create(1.5),cc.CallFunc.create(this.p3,this)));


    },
    slide2:function(){
//        this.pp1.removeFromParent(true);
//        this.pp2.removeFromParent(true);
//        this.pp3.removeFromParent(true);

//        this.point.removeFromParent(true);
//        this.point2.removeFromParent(true);
//        this.point3.removeFromParent(true);
        audioEngine.stopEffect(M_YUANLI,true);
        audioEngine.playEffect(M_KEY, false);
        audioEngine.playEffect(M_KJG, false);
        this.slide.removeFromParent(true);
        a = a+1;
        var size = cc.Director.getInstance().getWinSize();
        var slide2 = cc.Sprite.create(s_slide2);
        slide2.setPosition(cc.p(size.width/2+113,size.height/2-20));
//        slide2.setScale(0.8);
        this.addChild(slide2,a);

        this.point4 = cc.MenuItemImage.create(s_point,s_point,this.rays,this);
        this.point4.setPosition(cc.p(350,85));

        var  infoMenu = cc.Menu.create(this.point4);
        this.addChild(infoMenu,a);

        this.tag11.setVisible(false);
        this.tag22.setVisible(true);

    },
    rays:function(){
        audioEngine.stopEffect(M_KJG,true);
        audioEngine.playEffect(M_FUSHE,false);

        this.xx4 = cc.Sprite.create(s_ray);
        this.xx4.setPosition(cc.p(500,263));
        this.addChild(this.xx4,210);
        this.back4 = cc.MenuItemImage.create(s_back1,s_back1,this.back44,this);
        this.back4.setPosition(cc.p(315,-158));
        var infoMenu = cc.Menu.create(this.back4);
        this.addChild(infoMenu,215);
    }

});