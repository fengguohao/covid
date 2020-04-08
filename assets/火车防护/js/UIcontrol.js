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
        people:{
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
        speed:601,
        ontouch:0,
        diry:0,
        dirx:0
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         //下面的内容控制了节点行为
        this.speed=500;
        console.log(this.speed);
         this.controlBar.on(cc.Node.EventType.TOUCH_START,function(event){
            this.ontouch=1;
         },this);
         this.controlBar.on(cc.Node.EventType.TOUCH_MOVE,function(event){
             this.controlPos=event.getTouches()[0].getLocation();
             this.controlBar.setPosition(this.controlPos);
             this.dirx=this.controlPos.x-this.defaultPos.x;
             this.diry=this.controlPos.y-this.defaultPos.y;
             if(Math.abs(this.dirx)>Math.abs(this.diry)){
                 this.dirx=-this.dirx/Math.abs(this.dirx);
                 this.diry=0;
             }
             else{
                this.diry=-this.diry/Math.abs(this.diry);
                this.dirx=0;
             }
             console.log(this.dirx+"  "+this.diry);
         },this);
         this.controlBar.on(cc.Node.EventType.TOUCH_END,function(event){
             this.controlBar.setPosition(this.defaultPos);
             this.ontouch=0;
         },this);
         
     },

    start () {
        this.defaultPos=this.controlBar.getPosition();
    },

     update (dt) {
        if(this.ontouch==1){
            this.people.setPosition(this.people.getPosition().sub(cc.v2(this.speed*this.dirx*dt,this.speed*this.diry*dt)));
        }
     },
});
