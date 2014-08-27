/**
 * Created with JetBrains WebStorm.
 * User: sony
 * Date: 13-7-20
 * Time: 下午5:42
 * To change this template use File | Settings | File Templates.
 */
var Round = 1;
var score = 0;
var credit1 = 0;
var credit2 = 0;
var credit3 = 0;
var credit4 = 0;


var BallSprite = cc.Sprite.extend({
    name:null,
    layerxx : null,
    isMouseDown : false,
    _rect:null,

//    sizeLabel : null,
    //构造函数，当new一个当前的实例时，会执行ctor
    ctor:function(parent){
        this._super();  //调用父类的同名方法，这里是调用cc.Sprite的ctor
        this.layerxx = parent;
        this.test = false;
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);

        if(Round == 1){
            this.ans1=["hl1","hl2","hl3","hl4","hl5"];
        }else if(Round == 2){
            this.ans1=["nc1","nc2","nc3","nc4","nc5"];
        }else if(Round == 3){
            this.ans1=["hp1","hp2","hp3","hp4","hp5"];
        }
    },

   //判断触摸点是否在图片的区域上
    containsTouchLocation:function (touch) {
        //获取触摸点位置
        var getPoint = touch.getLocation();

        //物体当前区域所在的位置
//        var contentSize  =  this.getContentSize();
        var myRect = cc.rect(-this._rect.size.width / 2, -this._rect.size.height / 2, this._rect.size.width, this._rect.size.height);
        myRect.origin.x += this.getPosition().x;
        myRect.origin.y += this.getPosition().y;
        //判断点击是否在区域上
        return cc.Rect.CCRectContainsPoint(myRect, getPoint);
    },
    //刚触摸瞬间
    onTouchBegan : function (touch, event) {

//        this.isMouseDown = true;
//        console.log("onTouchesBegan");
        if (!this.containsTouchLocation(touch) ) return false;
        else{
            this.LastX = this.getPosition().x;
            this.LastY = this.getPosition().y;

            return true;}
    },
    //触摸移动
    onTouchMoved:function (touch, event) {
//        cc.log("onTouchMoved");
        var touchPoint = touch.getLocation();
        this.setPositionX(touchPoint.x);  //设置X轴位置等于触摸的x位置
        this.setPositionY(touchPoint.y);
        this.collide();
        this.collide2();
        this.collide3();
        this.collide4();
        this.collide5();

        if(this.layerxx.totalnum >= 5){
            this.getScheduler().pauseTarget(this.layerxx);
            Round ++;
            this.runAction(cc.Sequence.create(cc.DelayTime.create(2), cc.CallFunc.create(this.reset, this)));
        }

    },
    onTouchEnded : function(touch,event) {
        var x = this.getPositionX();
        var y = this.getPositionY();
        if(x<470||x>720||y<320||y>360){
            this.setPosition(cc.p(this.LastX, this.LastY));
        }
    },
    reset:function(){

        if(Round >= 4){
            this.layerxx.getScheduler().pauseTarget(this.layerxx);
            audioEngine.stopMusic(M_CONN, true);
            audioEngine.playMusic(M_WIN, false);
            var finbg = cc.Sprite.create(s_fin);
            finbg.setPosition(cc.p(400,280));
            this.layerxx.addChild(finbg,25);

            this.scorelabel = cc.LabelTTF.create(score, "Arial", 42);
            this.scorelabel.setPosition(cc.p(370,280));
            this.scorelabel.setColor(cc.c3b(255,0,0));
            this.layerxx.addChild(this.scorelabel,50);

            var fin = cc.MenuItemImage.create(s_okbutton,s_okbutton,this.onReplaceSceneTran,this);
            fin.setPosition(cc.p(100,-150));
            var info = cc.Menu.create(fin);
            this.layerxx.addChild(info,25);

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


    collide: function () {
        var x = this.getPositionX();
        var y = this.getPositionY();

        if (x >= 520 && x <= 560 &&
            y >= 300 && y <= 360 &&
            this.layerxx.totalnum == 0){
            audioEngine.playEffect(M_PP, false);
            this.setPosition(cc.p(532,333));
            this.stopAllActions();
            this.setVisible(true);
            this.test = true;
            this.layerxx.totalnum++;
            cc.Director.getInstance().getTouchDispatcher().removeDelegate(this);
            for(var i=0 ; i<this.ans1.length ; i++){
                if(this.name == this.ans1[i]){
                    score += 10;
                    this.layerxx.scorelabel.setString(score.toString());
                }
            }
        }
    },
    collide2: function () {
        var x = this.getPositionX();
        var y = this.getPositionY();

        if (x >= 570 && x <= 610 &&
            y >= 300 && y <= 360 &&
            this.layerxx.totalnum == 1){
            audioEngine.playEffect(M_PP, false);
            this.setPosition(cc.p(584,333));
            this.stopAllActions();
            this.setVisible(true);
            this.test = true;
            this.layerxx.totalnum++;
            cc.Director.getInstance().getTouchDispatcher().removeDelegate(this);
            for(var i=0 ; i<this.ans1.length ; i++){
                if(this.name == this.ans1[i]){
                    score += 10;
                    this.layerxx.scorelabel.setString(score.toString());
                }
            }
        }
    },
    collide3: function () {
        var x = this.getPositionX();
        var y = this.getPositionY();

        if (x >= 620 && x <= 660 &&
            y >= 300 && y <= 360 &&
            this.layerxx.totalnum == 2){
            audioEngine.playEffect(M_PP, false);
            this.setPosition(cc.p(635,333));
            this.stopAllActions();
            this.setVisible(true);
            this.test = true;
            this.layerxx.totalnum++;
            cc.Director.getInstance().getTouchDispatcher().removeDelegate(this);
            for(var i=0 ; i<this.ans1.length ; i++){
                if(this.name == this.ans1[i]){
                    score += 10;
                    this.layerxx.scorelabel.setString(score.toString());
                }
            }
        }
    },
    collide4: function () {
        var x = this.getPositionX();
        var y = this.getPositionY();

        if (x >= 670 && x <= 720 &&
            y >= 300 && y <= 360 &&
            this.layerxx.totalnum == 3){
            audioEngine.playEffect(M_PP, false);
            this.setPosition(cc.p(686,333));
            this.stopAllActions();
            this.setVisible(true);
            this.test = true;
            this.layerxx.totalnum++;
            cc.Director.getInstance().getTouchDispatcher().removeDelegate(this);
            for(var i=0 ; i<this.ans1.length ; i++){
                if(this.name == this.ans1[i]){
                    score += 10;
                    this.layerxx.scorelabel.setString(score.toString());
                }
            }
        }

    },
    collide5: function () {
        var x = this.getPositionX();
        var y = this.getPositionY();

        if (x >= 730 && x <= 770 &&
            y >= 300 && y <= 360 &&
            this.layerxx.totalnum == 4 ) {
            audioEngine.playEffect(M_PP, false);
            this.setPosition(cc.p(737,333));
            this.stopAllActions();
            this.setVisible(true);
            this.test = true;
            this.layerxx.totalnum++;
            cc.Director.getInstance().getTouchDispatcher().removeDelegate(this);
            for(var i=0 ; i<this.ans1.length ; i++){
                if(this.name == this.ans1[i]){
                    score += 10;
                    this.layerxx.scorelabel.setString(score.toString());
                }
            }
        }

        return;
    },
    onReplaceSceneTran:function (sender) {

        audioEngine.playMusic(MUSIC_FILE, false);
        this.getScheduler().pauseTarget(this);
        credit2 = score;

        Round = 1;
        score = 0;

        var s = new MenuScene();
        var l = new MenuLayer();
        s.addChild(l,0);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1.5, s));
    }
});
