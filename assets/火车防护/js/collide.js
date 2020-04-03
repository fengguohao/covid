// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        npc:{
            default:null,
            type:cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        this.schedule(function(){
            var scene = cc.director.getScene();
            var npc = cc.instantiate(this.npc);
            npc.position = cc.v2(parseInt(Math.random()*(500)+0,10),parseInt(Math.random()*(500)+0,10));
            npc.active = true;
            scene.addChild(npc);
        },5);
    },

    start () {

    },

    randomIn(){
        var time=1;
        this.schedule(function(){
            var scene = cc.director.getScene();
            var npc = cc.instantiate(this.npc);
            npc.position = cc.v2(parseInt(Math.random()*(500)+0,10),parseInt(Math.random()*(500)+0,10));
            npc.active = true;
            scene.addChild(npc);
        },time);
    },

    // update (dt) {},
});
