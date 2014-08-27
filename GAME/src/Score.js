/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-7-14
 * Time: 下午4:13
 * To change this template use File | Settings | File Templates.
 */

var Score = cc.Scene.extend({

    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){

    }

});

var Score_Layer = cc.Layer.extend({
    ctor:function(){
        this._super();
        this.init();
    } ,
    init:function(){

        var Return = cc.MenuItemImage.create(s_back6,s_back6,this.onReplaceSceneTran,this);
        Return.setPosition(cc.p(348,-210));
        var  infoMenu = cc.Menu.create(Return);
        this.addChild(infoMenu);

        var scorelabel1 = cc.LabelTTF.create(credit1, "Arial", 50);
        scorelabel1.setPosition(cc.p(598,366));
        this.addChild(scorelabel1,10);

        var scorelabel2 = cc.LabelTTF.create(credit2, "Arial", 50);
        scorelabel2.setPosition(cc.p(598,293));
        this.addChild(scorelabel2,10);

        var scorelabel3 = cc.LabelTTF.create(credit3, "Arial", 50);
        scorelabel3.setPosition(cc.p(598,215));
        this.addChild(scorelabel3,10);

        var scorelabel5 = cc.LabelTTF.create(credit4, "Arial", 50);
        scorelabel5.setPosition(cc.p(598,137));
        this.addChild(scorelabel5,10);

        var scorelabel4 = cc.LabelTTF.create(credit1+credit2+credit3+credit4, "Arial", 50);
        scorelabel4.setPosition(cc.p(598,63));
        this.addChild(scorelabel4,10);
    },
    onReplaceSceneTran:function (sender) {
        audioEngine.playEffect(M_KEY, false);

        var s = new MenuScene();
        var l = new MenuLayer();
        s.addChild(l,0);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1.5, s));
    }

});