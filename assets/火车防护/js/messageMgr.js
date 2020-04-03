// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
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
     },
     


    start () {

    },

    // update (dt) {},
});
