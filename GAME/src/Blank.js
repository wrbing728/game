/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-9-2
 * Time: 下午2:14
 * To change this template use File | Settings | File Templates.
 */

    var m = 1;
    var tag1 = 0;
    var temp = 0;
    var temp2 = 0;
    var score4 = 0;
    var counting = 0;
var Blank = cc.Sprite.extend({
    parentl:null,
    flag:0,
    flag1:0,
    tempSprite:null,

    ctor:function(parent){
        this._super();
        parentl = parent;
        this.init();


    },
    init:function(){
        var size = cc.Director.getInstance().getWinSize();



        this.xx = cc.MenuItemImage.create("res/44_"+m+".png","res/44_"+m+".png",this.judge,this);
        this.xx.setPosition(cc.p(-142+76*((m-1)%7),80-53*Math.floor((m-1)/7)));
        var infomenu = cc.Menu.create(this.xx);
        parentl.addChild(infomenu,15);
        m++;
        if(n > 24){m = 1;}


    },
    judge:function(){

        if(tag1 == 0){
            audioEngine.playEffect(M_KA, false);
            tag1 = 1;
            tempSprite = this.xx;
            temp = this.flag ;
            temp2 = this.flag1 ;
            parentl.reorderChild(this.xx,50);
            tempSprite.setScale(1.2);

        }else{
            if(this.flag == temp && this.flag1 != temp2){
                this.disappear();
            }else{
                audioEngine.playEffect(M_PONG, false);
                tempSprite.setScale(1);
                tempSprite = null;
                tag1 = 0;
                temp = 0;

            }
        }
        if(counting >= 21){
            audioEngine.stopMusic(M_CONN, true);
            audioEngine.playMusic(M_WIN, false);
            var finbg = cc.Sprite.create(s_fin);
            finbg.setPosition(cc.p(400,280));
            parentl.addChild(finbg,25);

            this.scorelabel = cc.LabelTTF.create(score4, "Arial", 42);
            this.scorelabel.setPosition(cc.p(370,280));
            this.scorelabel.setColor(cc.c3b(255,0,0));
            parentl.addChild(this.scorelabel,25);

            var fin = cc.MenuItemImage.create(s_okbutton,s_okbutton,this.onReplaceSceneTran,this);
            fin.setPosition(cc.p(100,-150));
            var info = cc.Menu.create(fin);
            parentl.addChild(info,25);
        }

    },
    disappear:function() {
        audioEngine.playEffect(M_PP, false);
        counting += 1;
        this.addscore();
        tempSprite.runAction(cc.ScaleTo.create(0.3, 0));
        this.xx.runAction(cc.ScaleTo.create(0.3, 0));
        tempSprite = null;
        tag1 = 0;
        temp = 0;

    },
    addscore:function(){

        parentl.scorelabel.runAction(cc.FadeOut.create(1));
        score4 += 5;
        parentl.scorelabel.setString(score4.toString());
        parentl.scorelabel.runAction(cc.FadeIn.create(1));

    },
    onReplaceSceneTran:function (sender) {
        audioEngine.playEffect(M_KEY, false);

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
});