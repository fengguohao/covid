// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

        //被传染的概率
        infectPossibility: 0.01,
        //关联提示框
        promptBox: cc.Node,
        //关联其他乘客
        npc: cc.Node,
        //关联摇杆
        control:cc.Node,
        //移动方向
        direction:cc.String,


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.npc = this.npc.getComponent('npc');
        this.direction = 'left';
    },

    // start () {
    // },

    // update (dt) {
    // },

    //判断gamePlayer和npc的距离
    judgeDistance: function() {
        var npc = this.npc.getComponent('npc');
        for(var i = 0; i <= 8; i++) {

            //从背后距离不足够大的情况
            if(npc.others[i].isVisited === false && npc.others[i].direction === this.direction && this.direction !== 'up' && this.direction !== 'down') {

                if(Math.abs(this.node.x - npc.others[i].x) <= 400 && Math.abs(this.node.y) <= 20 && Math.abs(npc.others[i].x) <= 20) {

                    if(npc.others[i].isVisitedSameOnce === true) {
                        this.infectPossibility += 0.04;
                    } else {
                        this.infectPossibility += 0.07;
                    }
                    npc.others[i].isVisited = true;

                    //弹出提示框

                }
                if(400 < Math.abs(this.node.x - npc.others[i].x) && Math.abs(this.node.x - npc.others[i].x) <= 800 && Math.abs(this.node.y) <= 20 && Math.abs(npc.others[i].x) <= 20) {
                    
                    this.infectPossibility += 0.03;
                    npc.others[i].isVisitedSameOnce = true;

                    //弹出提示框

                }
            }

            //面对面距离不够大的情况
            if(npc.others[i].isVisited === false && (npc.others[i].direction === 'left' && this.direction === 'right' || npc.others[i].direction === 'right' && this.direction === 'left')) {

                if(Math.abs(this.node.x - npc.others[i].x) <= 100 && Math.abs(this.node.y) <= 20 && Math.abs(npc.others[i].x) <= 20) {

                    if(npc.others[i].isVisitedOppositeOnce === true && npc.others[i].isVisitedOppositeTwice === true) {
                        this.infectPossibility += 0.10;
                    } else if(npc.others[i].isVisitedOppositeOnce === true && npc.others[i].isVisitedOppositeTwice === false) {
                        this.infectPossibility += 0.20;
                    } else if(npc.others[i].isVisitedOppositeOnce === false && npc.others[i].isVisitedOppositeTwice === true) {
                        this.infectPossibility += 0.10;
                    } else {
                        this.infectPossibility += 0.25;
                    }
                    npc.others[i].isVisited = true;

                }
                if(100 < Math.abs(this.node.x - npc.others[i].x) && Math.abs(this.node.x - npc.others[i].x) <= 600 && Math.abs(this.node.y) <= 20 && Math.abs(this.npc.others[i].x) <= 20) {

                    if(npc.others[i].isVisitedOppositeOnce === true) {
                        this.infectPossibility += 0.10;
                    } else {
                        this.infectPossibility += 0.15;
                    }
                    npc.others[i].isVisitedOppositeTwice = true;

                    //弹出提示框

                }
                if(Math.abs(this.node.x - npc.others[i].x) > 600 && Math.abs(this.node.y) <= 20 && Math.abs(npc.others[i].x) <= 20) {
                    
                    this.infectPossibility += 0.05;
                    npc.others[i].isVisitedOppositeOnce = true;
                    //弹出提示框`
                }
            }
        }
        console.info(this.direction);
    },

    //判断邻座是否有人
    judgeNeighbor: function() {
        var npc=this.npc.getComponent('npc');
        if(Math.abs(this.node.y - npc.neighborSeat.y) <= 50) {

            //弹出提示框

        }
    },
 
});
