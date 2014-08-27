/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-7-25
 * Time: 下午11:51
 * To change this template use File | Settings | File Templates.
 */
    var round = 1;
    var num = 1;
    var score2 = 0;
    var click = 0;

//var arr = [this.changeto2,this.changeto3,this.changeto4];



var Color_Blank = cc.Sprite.extend({
    parent_layer:null,
    flag:false,
    ans:null,
    tag:0,
    shootl1:null,
    shootr1:null,
    shootl2:null,
    shootr2:null,
    shootl3:null,
    shootr3:null,

//    arr:[this.changeto2,this.changeto3,this.changeto4],

    ctor:function(parent){
        this._super();
        parent_layer = parent;


            parent_layer.scorelabel.setVisible(true);

            var xx = cc.MenuItemImage.create("res/"+round+"_"+num+".png","res/"+round+"_"+num+".png",this.judge,this);
            xx.setPosition(cc.p(-157+125*(num-1),-210));
            var infomenu = cc.Menu.create(xx);
            cc.CallFunc.create(this.scaleout(xx));
            parent_layer.addChild(infomenu,15);
            num++;

         if(num == 6){
            num = 1;

         }

    },
    addscore:function(){
        parent_layer.scorelabel.runAction(cc.FadeOut.create(1));
        score2 += 10;
        parent_layer.scorelabel.setString(score2.toString());
        parent_layer.scorelabel.runAction(cc.FadeIn.create(1));
    },
    judge:function(){

        if(this.flag == true){
            audioEngine.playEffect(M_PP, false);
            if(round == 1){
                round++;

                this.ans1 = cc.Sprite.create(s_ans_1);
                this.ans1.setPosition(cc.p(530,357));
                parent_layer.addChild(this.ans1,11);
                if(this.tag < round && click == 0)
                this.addscore();
                parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.changeto2,this)));
            }else if(round == 2){
                round++;
                this.ans2 = cc.Sprite.create(s_ans_2);
                this.ans2.setPosition(cc.p(530,357));
                parent_layer.addChild(this.ans2,11);
                if(this.tag < round && click == 0)
                this.addscore();
                parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.changeto3,this)));
            }else if (round == 3){
                round++;
                this.ans3 = cc.Sprite.create(s_ans_3);
                this.ans3.setPosition(cc.p(530,357));
                parent_layer.addChild(this.ans3,11);
                if(this.tag < round && click == 0)
                this.addscore();
                parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.changeto4,this)));

            }else if(round == 4){
                round++;
                this.ans4 = cc.Sprite.create(s_ans_4);
                this.ans4.setPosition(cc.p(532,355));
                parent_layer.addChild(this.ans4,11);
                if(this.tag < round && click == 0)
                this.addscore();
                parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.changeto5,this)));

            }else if(round == 5){
                round++;
                this.ans5 = cc.Sprite.create(s_ans_5);
                this.ans5.setPosition(cc.p(505,160));
                parent_layer.addChild(this.ans5,11);
                if(this.tag < round && click == 0)
                this.addscore();

                parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.changeto6,this)));
            }else if(round == 6){
                round++;
                this.ans6 = cc.Sprite.create(s_ans_6);
                this.ans6.setPosition(cc.p(505,160));
                parent_layer.addChild(this.ans6,11);
                if(this.tag < round && click == 0)
                this.addscore();
                parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.changeto7,this)));
            }else if(round == 7){
                round++;
                this.ans7 = cc.Sprite.create(s_ans_7);
                this.ans7.setPosition(cc.p(505,160));
                parent_layer.addChild(this.ans7,11);
                if(this.tag < round && click == 0)
                this.addscore();
                parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.changeto8,this)));
            }else if(round == 8){
                round++;
                this.ans8 = cc.Sprite.create(s_shoot_blank);
                this.ans8.setPosition(cc.p(505,160));
                parent_layer.addChild(this.ans8,11);
                if(this.tag < round && click == 0)
                this.addscore();
                parent_layer.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create(this.changetofin,this)));
            }else{
                round = 1;
                score2 = 0;

            }
        }else{
            audioEngine.playEffect(M_PONG, false);
            click = 1;
            this.tag  = round;
            ans = cc.MenuItemImage.create("res/paintans"+ round +".png","res/paintans"+ round +".png",this.answer,this);
            ans.setPosition(cc.p(0,0));
            var inform = cc.Menu.create(ans);
            parent_layer.addChild(inform,20);
        }
    },
    changeto2:function(){
        click = 0;
        this.ans1.removeFromParent(true);

        var blank2 = cc.Sprite.create(s_blank2);
        blank2.setPosition(cc.p(518,325));
        parent_layer.addChild(blank2,10);

        var b2_1 = new Color_Blank (parent_layer);
        var b2_2 = new Color_Blank (parent_layer);
        var b2_3 = new Color_Blank (parent_layer);
        var b2_4 = new Color_Blank (parent_layer);
        var b2_5 = new Color_Blank (parent_layer);
        b2_4.flag = true;
    },
    changeto3:function(){
        click = 0;
        this.ans2.removeFromParent(true);

        var blank3 = cc.Sprite.create(s_blank3);
        blank3.setPosition(cc.p(518,325));
        parent_layer.addChild(blank3,10);

        var b3_1 = new Color_Blank (parent_layer);
        var b3_2 = new Color_Blank (parent_layer);
        var b3_3 = new Color_Blank (parent_layer);
        var b3_4 = new Color_Blank (parent_layer);
        var b3_5 = new Color_Blank (parent_layer);
        b3_5.flag = true;
    },
    changeto4:function(){
        click = 0;
        this.ans3.removeFromParent(true);

        var bg = cc.Sprite.create(s_paint_stage2);
        bg.setPosition(cc.p(492,293));
        parent_layer.addChild(bg,10);

        var blank4 = cc.Sprite.create(s_blank4);
        blank4.setPosition(cc.p(518,315));
        parent_layer.addChild(blank4,10);

        var b4_1 = new Color_Blank (parent_layer);
        var b4_2 = new Color_Blank (parent_layer);
        var b4_3 = new Color_Blank (parent_layer);
        var b4_4 = new Color_Blank (parent_layer);
        var b4_5 = new Color_Blank (parent_layer);
        b4_3.flag = true;
    },
    changeto5:function(){
        click = 0;
        this.ans4.removeFromParent(true);

        var bg = cc.Sprite.create(s_shoot_bg);
        bg.setPosition(cc.p(492,296));
        bg.setScaleY(1.03);
        parent_layer.addChild(bg,10);

        shootl1 = cc.Sprite.create(s_redl);
        shootl1.setPosition(cc.p(400,288));
        parent_layer.addChild(shootl1,11);

        shootr1 = cc.Sprite.create(s_bluer);
        shootr1.setPosition(cc.p(565,290));
        parent_layer.addChild(shootr1,11);


        var shootblank = cc.Sprite.create(s_shoot_blank);
        shootblank.setPosition(cc.p(505,160));
        parent_layer.addChild(shootblank,11);

        var b5_1 = new Color_Blank (parent_layer);
        var b5_2 = new Color_Blank (parent_layer);
        var b5_3 = new Color_Blank (parent_layer);
        var b5_4 = new Color_Blank (parent_layer);
        var b5_5 = new Color_Blank (parent_layer);
        b5_5.flag = true;

    },
    changeto6:function(){
        click = 0;
        this.ans5.removeFromParent(true);
        shootl1.removeFromParent(true);
        shootr1.removeFromParent(true);

        shootl2 = cc.Sprite.create(s_greenl);
        shootl2.setPosition(cc.p(400,288));
        parent_layer.addChild(shootl2,11);

        shootr2 = cc.Sprite.create(s_redr);
        shootr2.setPosition(cc.p(565,290));
        parent_layer.addChild(shootr2,11);

        var shootblank = cc.Sprite.create(s_shoot_blank);
        shootblank.setPosition(cc.p(505,160));
        parent_layer.addChild(shootblank,11);

        var b6_1 = new Color_Blank (parent_layer);
        var b6_2 = new Color_Blank (parent_layer);
        var b6_3 = new Color_Blank (parent_layer);
        var b6_4 = new Color_Blank (parent_layer);
        var b6_5 = new Color_Blank (parent_layer);
        b6_3.flag = true;
    },
    changeto7:function(){
        click = 0;
        this.ans6.removeFromParent(true);
        shootl2.removeFromParent(true);
        shootr2.removeFromParent(true);

        shootl3 = cc.Sprite.create(s_bluel);
        shootl3.setPosition(cc.p(400,288));
        parent_layer.addChild(shootl3,11);

        shootr3 = cc.Sprite.create(s_greenr);
        shootr3.setPosition(cc.p(565,290));
        parent_layer.addChild(shootr3,11);

        var shootblank = cc.Sprite.create(s_shoot_blank);
        shootblank.setPosition(cc.p(505,160));
        parent_layer.addChild(shootblank,11);

        var b7_1 = new Color_Blank (parent_layer);
        var b7_2 = new Color_Blank (parent_layer);
        var b7_3 = new Color_Blank (parent_layer);
        var b7_4 = new Color_Blank (parent_layer);
        var b7_5 = new Color_Blank (parent_layer);
        b7_2.flag = true;
    },
    changeto8:function(){
        click = 0;
        this.ans7.removeFromParent(true);
//        this.shootl3.removeFromParent(true);
//        this.shootr3.removeFromParent(true);

        this.shootl4 = cc.Sprite.create(s_bluel);
        this.shootl4.setPosition(cc.p(400,288));
        parent_layer.addChild(this.shootl4,11);

        this.shootr4 = cc.Sprite.create(s_greenr);
        this.shootr4.setPosition(cc.p(565,290));
        parent_layer.addChild(this.shootr4,11);

        this.shootm4 = cc.Sprite.create(s_redm);
        this.shootm4.setPosition(cc.p(505,315));
        parent_layer.addChild(this.shootm4,11);

        var shootblank = cc.Sprite.create(s_shoot_blank);
        shootblank.setPosition(cc.p(505,160));
        parent_layer.addChild(shootblank,11);

        var b8_1 = new Color_Blank (parent_layer);
        var b8_2 = new Color_Blank (parent_layer);
        var b8_3 = new Color_Blank (parent_layer);
        var b8_4 = new Color_Blank (parent_layer);
        var b8_5 = new Color_Blank (parent_layer);
        b8_4.flag = true;
    },

    changetofin:function(){
        audioEngine.stopMusic(M_CONN, true);
        audioEngine.playMusic(M_WIN, false);
        var finbg = cc.Sprite.create(s_fin);
        finbg.setPosition(cc.p(400,280));
        parent_layer.addChild(finbg,50);

        this.scorelabel = cc.LabelTTF.create(score2, "Arial", 42);
        this.scorelabel.setPosition(cc.p(370,280));
        this.scorelabel.setColor(cc.c3b(255,0,0));

        parent_layer.addChild(this.scorelabel,50);

        var fin = cc.MenuItemImage.create(s_okbutton,s_okbutton,this.onReplaceSceneTran,this);
        fin.setPosition(cc.p(100,-150));
        var info = cc.Menu.create(fin);
        parent_layer.addChild(info,50);
    },
    onReplaceSceneTran:function(){

        audioEngine.playMusic(MUSIC_FILE, false);
        this.getScheduler().pauseTarget(this);
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
    answer:function(){


        ans.runAction(cc.FadeOut.create(0.3));


    }

});