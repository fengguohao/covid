// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends:cc.Component,

    properties: {


        jumpHeight: 400,

        jumpDuration: 0.3,

        maxMoveSpeed: 1000,

        accel: 4000,

        accLeft:false,

        accRight:false,

        xSpeed:500,

    },

    setJumpAction: function() {

        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());

        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());

        console.log("set jump action success");

        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    onKeyDown:function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                
                break;
        }
    },

    onKeyUp:function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {

        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);

        this.accLeft = false;
        this.accRight = false;

        this.xSpeed = 0;
        this.accel=100;
        this.jumpHeight=200;
        console.log(this.accel);

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    start: function() {
        var node = this.node;
    },

    update: function(dt) {
        
        
        if (this.accLeft) {
            this.xSpeed -= this.accel*dt ;
            //console.log(this.accel+"*"+dt);
        } else if (this.accRight) {
            this.xSpeed += this.accel*dt ;
        }

        // if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
        //     this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        // }

        this.node.x += this.xSpeed * dt ;

     },

});
