// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        //功能：用节点控制另一个节点移动
        //绑定节点即可运行
        //控制的节点
        gamePlayer:{
            default:null,
            type:cc.Node
        },
        //受控节点
        controlBar:{
            default:null,
            type:cc.Node
        },
        controlPos:cc.Vec2,
        defaultPos:cc.Vec2,
        speed:50,
        ontouch:0,
        dirY:0,
        dirX:0,
        //控制摇杆半径
        controlRadius:100,
        gamePlayerjs:cc.Component
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.defaultPos=this.controlBar.getPosition();
         //速度
        this.speed=50;
        //控制摇杆半径
        this.controlRadius=100;
        //获取gamePlayerjs的控制权限
        this.gamePlayerjs=this.gamePlayer.getComponent('gamePlayer');

         //下面的内容控制了节点行为
        //点按开始
         this.controlBar.on(cc.Node.EventType.TOUCH_START,function(event){
            this.ontouch=1;
         },this);
         //点按中，控制gamePlayer运行，并且将方向(direction)传给了gamePlayer
         //在点按中检测距离
         this.controlBar.on(cc.Node.EventType.TOUCH_MOVE,function(event){
            this.controlPos=this.controlBar.getParent().convertToNodeSpaceAR(event.getTouches()[0].getLocation());
             if(this.controlPos.sub(this.defaultPos).mag()<=this.controlRadius){
                this.controlBar.setPosition(this.controlPos);
             }
             else {
                 var vecFrom=this.defaultPos.sub(this.controlPos);
                 this.controlBar.setPosition(this.defaultPos.sub(vecFrom.div(vecFrom.mag()/this.controlRadius)));
             }
             //确定绝对方向
             this.dirX=this.controlPos.x-this.defaultPos.x;
             this.dirY=this.controlPos.y-this.defaultPos.y;
             if(Math.abs(this.dirX)>Math.abs(this.dirY)){
                 this.dirX=-this.dirX/Math.abs(this.dirX);
                 this.dirY=0;
             }
             else{
                this.dirY=-this.dirY/Math.abs(this.dirY);
                this.dirX=0;
             }
            
             
    
         },this);
         //点按结束，重置控制摇杆
         this.controlBar.on(cc.Node.EventType.TOUCH_END,function(event){
            this.controlBar.setPosition(this.defaultPos);
            this.ontouch=0;
        },this);
         this.controlBar.on(cc.Node.EventType.TOUCH_CANCEL,function(event){
             this.controlBar.setPosition(this.defaultPos);
             this.ontouch=0;
         },this);
         
     },

    start () {
        
    },

     update (dt) {
         //更新gamePlayer位置
        if(this.ontouch==1){
            var xplus=0;
            var yplus=0;
            if(this.gamePlayer.getPosition().x>=480){
                xplus=1;
            }
            if(this.gamePlayer.getPosition().x<=-480){
                xplus=-1;
            }
            if(this.gamePlayer.getPosition().y>=320){
                yplus=1;
            }
            if(this.gamePlayer.getPosition().y<=-320){
                yplus=-1;
            }
            this.gamePlayer.setPosition(this.gamePlayer.getPosition().sub(cc.v2(this.speed*this.dirX*dt+xplus,this.speed*this.dirY*dt+yplus)));
            //将方向信息传给gamePlayer
            if(this.dirX === -1 && this.dirY === 0) {
                this.gamePlayerjs.direction = 'right';
            } else if(this.dirX === 1 && this.dirY === 0) {
                this.gamePlayerjs.direction = 'left';
            } else if(this.dirX === 0 && this.dirY === -1) {
                this.gamePlayerjs.direction = 'up';
            } else if(this.dirX === 0 && this.dirY === 1) {
                this.gamePlayerjs.direction = 'down';
            }
            //检测距离
            this.gamePlayerjs.judgeDistance();
            this.gamePlayerjs.judgeNeighbor();
        }
     },
});
