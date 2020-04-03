// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        promptBar:{
            default:null,
            type:cc.Node
        },
        people:{
            default:null,
            type:cc.Node
        }

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    promptMove(){
        // this.promptBar.runAction(cc.toggleVisibility());
        // var sprites = node.getComponentsInChildren(cc.Node);
        // for(i in sprites){
        //     i.runAction(cc.toggleVisibility());
        // }

        // cc.tween(this,promptBar).to(1, {scale: 1, position: cc.v2(100, 100)});
        var actionBy = cc.moveTo(0.6, this.people.getPosition()).easing(cc.easeBackIn());
        this.promptBar.runAction(actionBy);
    },

    promptOn(){
        var actionBy = cc.moveTo(0.6, this.people.getPosition()).easing(cc.easeBackIn());
        this.promptBar.runAction(actionBy);
        this.promptBar.runAction(cc.toggleVisibility());
        var sprites = node.getComponentsInChildren(cc.Node);
        for(i in sprites){
            i.runAction(cc.toggleVisibility());
        }
    },

    // update (dt) {},
});
