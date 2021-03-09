<template>
      <div class="play">
      <div class="play-title"><block-title :title="title2" color="#fff"/></div>
      <div class="play-block">
        <div class="play-nav">
          <div v-for="(item,i) in playNav" :key="i">{{item}}</div>
        </div>
        <div class="main-block">
          <div><img src="../assets/item/play1.png" alt=""></div>
          <div><img src="../assets/item/play2.png" alt=""></div>
          <div><img src="../assets/item/play3.png" alt=""></div>
          <div><img src="../assets/item/play4.png" alt=""></div>
          <div><img src="../assets/item/play5.png" alt=""></div>
          <div><img src="../assets/item/play6.png" alt=""></div>
          <div><img src="../assets/item/play7.png" alt=""></div>
          <div><img src="../assets/item/play8.png" alt=""></div>
          <div><img src="../assets/item/play9.png" alt=""></div>
          <div><img src="../assets/item/play10.png" alt=""></div>
        </div>
        <div class="arr-l"><div class="inner-l"></div></div>
        <div class="arr-r"><div class="inner-r"></div></div>
      </div>
      <div class="play-foot">
          <div>哑舍中珍藏着各类古玩古董等您莅临</div>
          <div class="arr-b"></div>
      </div>
    </div>
</template>
<script>
import BlockTitle from '@/components/Title.vue'

export default {
  components:{BlockTitle},
  data(){
    return{
      title2:'玩转物件',
      playNav:['全部','书画','瓷器','玉石','钟表','家具','金银器','珠宝','古着','更多'],
    }
  }
}
</script>
<style lang="less" scoped>
.play{
  box-sizing: border-box;
  height: 720px;
  width:1920px;
  background:url('../assets/banner/bg1.jpg') ;
  padding-top:42px ;
  .play-title{
    width: 270px;
    margin: 0 auto;
    block-title{
      color:#fff !important;
    }
  }
  .play-block{
    position: relative;
    width:1080px;
    height: 470px;
    margin :20px auto 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .play-nav{
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      width:1080px;
      height: 40px;
      color: #e9e7e6;
      padding: 0 55px;
      div{
        border-bottom: 8px solid #9a7a53;
      }
    }
    .main-block{
      display: flex;
      justify-content: space-between;
      align-content:space-between;
      flex-wrap:wrap;
      width:1080px;
      height:418px;
      div{
        background-color: yellowgreen;
        width: 200px;
        height: 200px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .arr-l{
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: -6%;
      width:44px;
      height:44px;
      border: 4px solid #9a7a53;
      border-radius: 50%;
      .inner-l{
        width: 12px;
        height: 12px;
        border: 4px solid #9a7a53;
        margin:10px 13px;
        transform: rotate(45deg);
        border-top: none;
        border-right: none;
      }
    }
    .arr-r{
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      right: -6%;
      width:44px;
      height:44px;
      border: 4px solid #9a7a53;
      border-radius: 50%;
      .inner-r{
        width: 12px;
        height: 12px;
        border: 4px solid #9a7a53;
        margin:10px 8px;
        transform: rotate(-45deg);
        border-top: none;
        border-left: none;
      }
    }

  }
  .play-foot{
    :first-child{
      font-size: 18px;
      color: #e9e7e6;
      text-align: center;
    }
    .arr-b{
      margin: 15px auto 0;
      width: 20px;
      height: 20px;
      border: 5px solid  #9a7a53;
      transform: rotate(45deg);
      border-left: none;
      border-top: none;
      border-radius: 2px;
    }
  }

}
</style>