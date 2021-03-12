<template>
  <div class="block">
    <div class="left-icon"><img src="../assets/icon/title-left.png" alt=""></div>
    <div class="main" :style="{'color':color}">{{title}}</div>
    <div class="right-icon"><img src="../assets/icon/title-right.png" alt=""></div>
  </div>
</template>
<script>
export default {
  props:{
    title:{
      type:String,
      required:true,
      default:'我是标题'
    },
    color:{
      type:String,
      default:'#333'
    }
  },
  methods:{
    handleColor(){

    }
  }
}
</script>
<style lang="less">
.block{
  display: flex;
  height: 66px;
  .main{
    height:66px;
    text-align: center;
    line-height: 70px;
    font-size: 36px;
    font-weight: 700;
    // color: #333;
  }
  .left-icon{
    width: 44px;
    height: 66px;
    margin-right:10px;
    img{
      width: 100%;
      height:100%;
    }
  }
  .right-icon{
    width: 44px;
    height: 66px;
    margin-left:10px;
    img{
      width: 100%;
      height:100%;
    }
  }
}
</style>