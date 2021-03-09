<template>
  <div class="choose-box">
    <div class="choose-title"><block-title :title="title5" color="#fff"/></div>
    <div class="choose-main">
      <div class="search-bar"></div>
      <div class="item-list">
        <div><img src="../assets/choose/choose1.png" alt=""></div>
        <div><img src="../assets/choose/choose2.png" alt=""></div>
        <div><img src="../assets/choose/choose3.png" alt=""></div>
        <div><img src="../assets/choose/choose4.png" alt=""></div>
        <div><img src="../assets/choose/choose5.png" alt=""></div>
        <div><img src="../assets/choose/choose6.png" alt=""></div>
        <div><img src="../assets/choose/choose7.png" alt=""></div>
        <div><img src="../assets/choose/choose8.png" alt=""></div>
        <div><img src="../assets/choose/choose9.png" alt=""></div>
        <div><img src="../assets/choose/choose10.png" alt=""></div>
        <div><img src="../assets/choose/choose11.png" alt=""></div>
        <div><img src="../assets/choose/choose12.png" alt=""></div>
        <div><img src="../assets/choose/choose13.png" alt=""></div>
        <div class="final"><img src="../assets/choose/choose14.png" alt=""></div>
      </div>
    </div>
  </div>
</template>
<script>
import BlockTitle from '@/components/Title.vue'

export default {
  components:{BlockTitle},
  data(){
    return{
      title5:'哑舍精选'
    }
  }
}
</script>
<style lang="less" scoped>
.choose-box{
  box-sizing: border-box;
  padding: 50px 0 85px;
  margin: 0 auto;
  width: 1920px;
  height: 1360px;
  background:url('../assets/banner/bg2.jpg') no-repeat;
  .choose-title{
    width: 270px;
    margin: 0 auto;
  }
  .choose-main{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1202px;
    height: 1132px;
    margin: 30px auto 0;
    .search-bar{
      box-sizing: border-box;
      height: 42px;
      width: 100%;
      padding-left: 160px;
      background-color: #fff;
    }
    .item-list{
      display: flex;
      justify-content: space-between;
      align-content: space-between;
      flex-wrap:wrap;
      height: 1048px;
      width: 100%;
      div{
        width: 232px;
        height: 336px;
        background-color: #fff;
        img{
          width:100%;
          height: 100%;
        }
      }
      .final{
        width: 475px;
        height: 336px;
      }
    }
  }
}
</style>