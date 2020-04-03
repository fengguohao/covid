// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        //功能：从json中获取信息，显示在Lable上
        //mText:用于显示提示信息
        //mContent:用于存放提示信息的json文件
        //num:运行时局部变量，不用管
        //运行此文件，将properity绑定即可
        mText:{
            default:null,
            type:cc.Label
        },
        mContent:{
            default:null,
            type:cc.JsonAsset
        },
        num:0

            
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
            this.num=0;
         this.schedule(function(){
            var json1 = this.mContent.json.message;
            this.mText.string=json1[this.num];
            if(this.num==json1.length-1){
                this.num=0;
            }
            else{
                this.num=this.num+1;
            }
         },1);
         //上一行的1是指延时1s
     },
     


    start () {

    },

    // update (dt) {},
});
