// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        //功能：promptMove():使promptBar跟随people节点移动（移动形式：弹跳移入）
        //promptOn():使promptBar显示或消失
        //上面两个函数都是回调函数，绑定在按钮等节点上即可看到效果
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
