// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    //neighborSeat为邻座，others为其他乘客
    properties: {
        neighborSeat: cc.Node,
        others: [cc.Node],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //给neighborSeat和others添加并初始化isVisited, speed, dirX, dirY等属性
        //isVisited用于判断该乘客是否已经计算过增加的概率了
        //目前乘客初始化位置待定
        this.neighborSeat.x = 300;
        this.neighborSeat.y = 200;
        this.neighborSeat.isVisited = false;
        this.neighborSeat.isVisitedSameOnce = false;
        this.neighborSeat.isVisitedOppositeOnce = false;
        this.neighborSeat.isVisitedOppositeTwice = false;
        this.neighborSeat.speed = 33;
        this.neighborSeat.dirX = -1;
        this.neighborSeat.dirY = 0;
        this.neighborSeat.direction = 'left';
        this.others[0].x = -300;
        this.others[0].y = 300;
        this.others[1].x = -200;
        this.others[1].y = 300;
        this.others[2].x = -120;
        this.others[2].y = 100;
        this.others[3].x = 0;
        this.others[3].y = -200;
        this.others[4].x = 120;
        this.others[4].y = 80;
        this.others[5].x = 200;
        this.others[5].y = -100;
        this.others[6].x = 350;
        this.others[6].y = 0;
        this.others[7].x = 450;
        this.others[7].y = -200;
        this.others[8].x = 550;
        this.others[8].y = 250;
        for(var i = 0; i <= 8; i++) {
            this.others[i].isVisitedSameOnce = false;
            this.others[i].isVisitedOppositeOnce = false;
            this.others[i].isVisitedOppositeTwice = false;
            this.others[i].isVisited = false;
            this.others[i].speed = 33;
            this.others[i].dirX = -1;
            this.others[i].dirY = 0;
            this.others[i].direction = 'left';
        }
    },

    start () {

    },
    onCollisionEnter: function (other, self) {
        this.node.destroy();
    },

    update (dt) {

        //更新方向
        if(this.dirX === -1 && this.dirY === 0) {
            this.direction = 'left';
        } else if(this.dirX === 1 && this.dirY === 0) {
            this.direction = 'right';
        } else if(this.dirX === 0 && this.dirY === -1) {
            this.direction = 'down';
        } else if(this.dirX === 0 && this.dirY === 1) {
            this.direction = 'up';
        }

        //每过一段时间随机两个others开始移动

    },
});
