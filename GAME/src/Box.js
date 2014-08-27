/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-8-12
 * Time: 下午3:51
 * To change this template use File | Settings | File Templates.
 */


    var r = 1;
    var n = 1;
    var c = 0;
    var score5 = 0;
var Box = cc.Sprite.extend({
    parent_layer:null,
    flag:false,
    ctor:function(parent){
       this._super();
       parent_layer = parent;
       this.init();
   } ,
    init:function(){
        var bg = cc.Sprite.create("res/bg5_"+r+".png");
        bg.setPosition(cc.p(351,296));
        parent_layer.addChild(bg,10+r);

        var title = cc.Sprite.create("res/title5_"+r+".png");
        title.setPosition(cc.p(351,513));
        parent_layer.addChild(title,10+r);


            this.xx = cc.MenuItemImage.create("res/5_"+r+"_"+n+".png","res/5_"+r+"_"+n+".png",this.judge,this);
            this.xx.setPosition(cc.p(150+53*((n-1)%5),100-53*Math.floor((n-1)/5)));
            var infomenu = cc.Menu.create(this.xx);
            cc.CallFunc.create(this.scaleout(this.xx));
            parent_layer.addChild(infomenu,10+r);
            n++;
            if(n > 15){n = 1;}

    },
    addscore:function(){
        parent_layer.scorelabel.runAction(cc.FadeOut.create(1));
        score5 += 10;
        parent_layer.scorelabel.setString(score5.toString());
        parent_layer.scorelabel.runAction(cc.FadeIn.create(1));
    },
    judge:function(){

        if(this.flag == true){
            if(r == 1){
                this.jump();
                if(c>=4){
                    r = 2;
                    n = 1;
                    c = 0;
                    this.addscore();
                    parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1.5), cc.CallFunc.create(this.showans,this)));
                    parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(3), cc.CallFunc.create(this.changeto2,this)));


                }
            }else if(r == 2){
                this.jump();
                if(c>=4){
                    r = 3;
                    n = 1;
                    c = 0;
                    this.addscore();
                    parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1.5), cc.CallFunc.create(this.showans,this)));
                    parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(3), cc.CallFunc.create(this.changeto3,this)));

                }
            }else if(r == 3){
                this.jump();
                if(c>=2){
                    r = 4;
                    n = 1;
                    c = 0;
                    this.addscore();
                    parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1.5), cc.CallFunc.create(this.showans,this)));
                    parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(3), cc.CallFunc.create(this.changeto4,this)));

                }
            }else if(r == 4){
                this.jump();
                if(c>=2){
                    r = 5;
                    n = 1;
                    c = 0;
                    this.addscore();
                    parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(2), cc.CallFunc.create(this.showans,this)));
                    parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(3.5), cc.CallFunc.create(this.changeto5,this)));

                }
            }else if(r == 5){
                this.jump();
                if(c>=4){
                    r = 6;
                    n = 1;
                    c = 0;
                    this.addscore();
                    parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1.5), cc.CallFunc.create(this.showans,this)));
                    parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(3), cc.CallFunc.create(this.changeto6,this)));

                }
            }
        }else{

        }
    },
    showans:function(){
        audioEngine.playEffect(M_DI, false);
        var x = r-1;
        var ans = cc.Sprite.create("res/ans3_" + x + ".png");
        ans.setPosition(cc.p(653,190));
        parent_layer.addChild(ans,10+r);
        ans.runAction(cc.Sequence.create(cc.DelayTime.create(1.2), cc.FadeOut.create(0.2)));
    },

    jump:function(){
        c += 1;
        var move1 = cc.MoveBy.create(3,cc.p(0,-this.xx.getPositionY()-100));
        var move_ease_out1 = cc.EaseBounceOut.create(move1.copy());
        this.xx.runAction(move_ease_out1);
    },

    changeto2:function(){

        var bg = cc.Sprite.create(s_using_bg);
        bg.setPosition(cc.p(400,280));
        parent_layer.addChild(bg,12);

        var a = new Box(parent_layer);
        var b = new Box(parent_layer);
        var c = new Box(parent_layer);
        var d = new Box(parent_layer);
        var e = new Box(parent_layer);
        var f = new Box(parent_layer);
        var g = new Box(parent_layer);
        var h = new Box(parent_layer);
        var i = new Box(parent_layer);
        var j = new Box(parent_layer);
        var k = new Box(parent_layer);
        var l = new Box(parent_layer);
        var m = new Box(parent_layer);
        var n = new Box(parent_layer);
        var o = new Box(parent_layer);
        c.flag = true;
        g.flag = true;
        k.flag = true;
        l.flag = true;
    },
    changeto3:function(){

        var bg = cc.Sprite.create(s_using_bg);
        bg.setPosition(cc.p(400,280));
        parent_layer.addChild(bg,13);

        var a = new Box(parent_layer);
        var b = new Box(parent_layer);
        var c = new Box(parent_layer);
        var d = new Box(parent_layer);
        var e = new Box(parent_layer);
        var f = new Box(parent_layer);
        var g = new Box(parent_layer);
        var h = new Box(parent_layer);
        var i = new Box(parent_layer);
        var j = new Box(parent_layer);
        var k = new Box(parent_layer);
        var l = new Box(parent_layer);
        var m = new Box(parent_layer);
        var n = new Box(parent_layer);
        var o = new Box(parent_layer);
        b.flag = true;
        j.flag = true;

    },
    changeto4:function(){

        var bg = cc.Sprite.create(s_using_bg);
        bg.setPosition(cc.p(400,280));
        parent_layer.addChild(bg,14);

        var a = new Box(parent_layer);
        var b = new Box(parent_layer);
        var c = new Box(parent_layer);
        var d = new Box(parent_layer);
        var e = new Box(parent_layer);
        var f = new Box(parent_layer);
        var g = new Box(parent_layer);
        var h = new Box(parent_layer);
        var i = new Box(parent_layer);
        var j = new Box(parent_layer);
        var k = new Box(parent_layer);
        var l = new Box(parent_layer);
        var m = new Box(parent_layer);
        var n = new Box(parent_layer);
        var o = new Box(parent_layer);

        g.flag = true;
        e.flag = true;

    },
    changeto5:function(){

        var bg = cc.Sprite.create(s_using_bg);
        bg.setPosition(cc.p(400,280));
        parent_layer.addChild(bg,15);

        var a = new Box(parent_layer);
        var b = new Box(parent_layer);
        var c = new Box(parent_layer);
        var d = new Box(parent_layer);
        var e = new Box(parent_layer);
        var f = new Box(parent_layer);
        var g = new Box(parent_layer);
        var h = new Box(parent_layer);
        var i = new Box(parent_layer);
        var j = new Box(parent_layer);
        var k = new Box(parent_layer);
        var l = new Box(parent_layer);
        var m = new Box(parent_layer);
        var n = new Box(parent_layer);
        var o = new Box(parent_layer);

        a.flag = true;
        l.flag = true;
        c.flag = true;
        o.flag = true;

    },
    changeto6:function(){
        audioEngine.stopMusic(M_CONN, true);
        audioEngine.playMusic(M_WIN, false);
        var finbg = cc.Sprite.create(s_fin);
        finbg.setPosition(cc.p(400,280));
        parent_layer.addChild(finbg,55);

        this.scorelabel = cc.LabelTTF.create(score5, "Arial", 42);
        this.scorelabel.setPosition(cc.p(370,280));
        this.scorelabel.setColor(cc.c3b(255,0,0));

        parent_layer.addChild(this.scorelabel,55);

        var fin = cc.MenuItemImage.create(s_okbutton,s_okbutton,this.onReplaceSceneTran,this);
        fin.setPosition(cc.p(100,-150));
        var info = cc.Menu.create(fin);
        parent_layer.addChild(info,55);
    },
    scaleout:function(sprite){
        var seq = cc.Sequence.create(
            cc.ScaleTo.create(0.2, 1.5),
            cc.ScaleTo.create(0.15, 0.7),
            cc.ScaleTo.create(0.1, 1.3),
            cc.ScaleTo.create(0.07, 0.8),
            cc.ScaleTo.create(0.04, 1.2),
            cc.ScaleTo.create(0.03, 0.9),
            cc.ScaleTo.create(0.02, 1.1),
            cc.ScaleTo.create(0.1,1)
        );
        sprite.runAction(cc.Repeat.create(seq, 1));

    },
    onReplaceSceneTran:function(){
        audioEngine.playMusic(MUSIC_FILE, false);
        this.getScheduler().pauseTarget(this);
        credit3 = score5;

        r = 1;
        n = 1;
        c = 0;
        score5 = 0;
        var s = new MenuScene();
        var l = new MenuLayer();
        s.addChild(l,0);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1.5, s));
    }
});