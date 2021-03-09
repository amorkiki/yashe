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
  height: 70px;
  .main{
    height:70px;
    text-align: center;
    line-height: 70px;
    font-size: 34px;
    font-weight: 700;
    // color: #333;
  }
  .left-icon,
  .right-icon{
    width: 46px;
    height: 70px;
    margin: 0 10px;
    img{
      width: 100%;
      height:100%;
    }
  }
}
</style>