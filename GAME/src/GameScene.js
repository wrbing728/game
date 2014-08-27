var MUSIC_FILE = "res/background.mp3";
var M_WIN = "res/WIN.mp3";
var M_CONN = "res/CONN.mp3";
var M_PONG = "res/PONG.mp3";
var M_PP = "res/PP.mp3";
var M_DI = "res/DI.mp3";
var M_KA = "res/KA.mp3";
var M_KEY = "res/KEY.mp3";
var M_FUSHE = "res/FUSHE.mp3";
var M_SUN = "res/SUN.mp3";
var M_CLOTH = "res/CLOTH1.mp3";
var M_KJG = "res/KJG.mp3";
var M_YUANLI = "res/YUANLI.mp3";

var audioEngine = cc.AudioEngine.getInstance();
var GameScene = cc.Scene.extend({

	onEnter:function(){
		this._super();//调用父类的同名方法，这里是调用cc.Scene的onEnter

        //一般在这里自己写进入场景后的操作
        this.initData();
        this.schedule(this.update,0);//参数1：执行函数，参数2：调用间隔时间，0为每帧都调用

        var layer = new MainMenu();
        this.addChild(layer);

    },

    initData:function () {

    }
});

var MainMenu = cc.Layer.extend({
    ctor:function(){
        this._super();
        this.init();

    },

    init:function(){

        var size = cc.Director.getInstance().getWinSize();

        this.playmusic();

        //添加背景
        var bgt = cc.Sprite.create(s_top);
        bgt.setAnchorPoint(cc.p(0,1));
        bgt.setPosition(cc.p(-size.width,size.height));
        bgt.runAction(cc.MoveTo.create(2.5,cc.p(10,size.height)));
        this.addChild(bgt,0);

        var bgm = cc.Sprite.create(s_middle);
        bgm.setAnchorPoint(cc.p(0,0));
        bgm.setPosition(cc.p(size.width,165));
        var move = cc.MoveBy.create(3.5,cc.p(-size.width,0));
        var move_ease_out = cc.EaseBounceOut.create(move.copy());
        bgm.runAction(move_ease_out);
        this.addChild(bgm,0);

        var bgb = cc.Sprite.create(s_bottom);
        bgb.setAnchorPoint(cc.p(0,0));
        bgb.setPosition(cc.p(-size.width,0));
        bgb.runAction(cc.MoveTo.create(4,cc.p(0,0)));
        this.addChild(bgb,0);


        //进入按钮
        var btnIn = cc.MenuItemImage.create(s_in,s_in,this.onReplaceSceneTran,this);
        btnIn.setAnchorPoint(cc.p(0,0));
        btnIn.setPosition(cc.p(size.width ,-80));
        btnIn.runAction(cc.MoveTo.create(3.5,cc.p(0,-80)));

        var infoMenu = cc.Menu.create(btnIn );
        this.addChild(infoMenu,5);

    },

    playmusic:function(){
        audioEngine.playMusic(MUSIC_FILE, true);
    },

    onReplaceSceneTran:function (sender) {
        audioEngine.playEffect(M_KEY, false);
        var s = new NextScene();
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1.5, s));
    }

});


