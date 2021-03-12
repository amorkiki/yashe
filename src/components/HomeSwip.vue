<template>
    <div class="customed">
      <div class="cus-title"><block-title :title="title4"/></div>
      <!-- 1张轮播 -->
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,i) in sliderList" :key="i" class="swiper-container">
            <!-- 轮播的2张图 -->
            <div class="swiper-pic">
          <div class="first-pic"><img :src="item.firstPic" alt=""></div>
          <div class="last-pic"><img :src="item.secondPic" alt=""></div>
            </div>
            <!-- 轮播文字 -->
            <div class="swiper-desc">
          <div class="desc-left">
            <div class="desc-date">{{item.date}}</div>
            <div class="desc-museum">{{item.museum}}</div>
            <div class="desc-collect"></div>
            <div >收藏</div>
          </div>
          <div class="desc-right">
            <div class="desc-title">{{item.title}}</div>
            <div class="desc-con">{{item.content}}</div>
            <button>more...</button>
          </div>
            </div>
          </swiper-slide>
          <div class="swiper-button-next" slot="button-prev"></div>
          <div class="swiper-button-prev" slot="button-next"></div>
        </swiper>

          
    </div>  
</template>
<script>
import BlockTitle from '@/components/Title.vue'

import 'swiper/swiper.less'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  components: {BlockTitle,swiper, swiperSlide},
  data(){
    return{
      title4:'私人订制，匠人云集',
      title6:'哑舍资讯',
      swiperOptions: {
        autoplay: false,
        loop:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      sliderList:[
        {firstPic:require('../assets/item/play1.png'),
        secondPic:require('../assets/item/play2.png'),
        date:'2019-2-3',
        museum:'南京博物馆',
        title:'霍铁辉大师的如意双龙尊',
        content:'“珐琅界最具影响力大师”霍铁辉从艺生涯名作之首；2009年获第十届中国工艺美术大师作品暨国际艺术精品博览会上“天工艺苑·百花杯”中国工艺美术精品奖银奖；2012年入选“中国当代工艺美术双年展”于中国国家博物馆展出。'
        },
        {firstPic:require('../assets/item/play3.png'),
        secondPic:require('../assets/item/play4.png'),
        date:'2019-2-3',
        museum:'南京博物馆',
        title:'霍铁辉大师的如意双龙尊',
        content:'“珐琅界最具影响力大师”霍铁辉从艺生涯名作之首；2009年获第十届中国工艺美术大师作品暨国际艺术精品博览会上“天工艺苑·百花杯”中国工艺美术精品奖银奖；2012年入选“中国当代工艺美术双年展”于中国国家博物馆展出。'
        },
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.customed{
  width: 1920px;
  height: 573px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  .cus-title{
    width:440px;
    margin: 0 auto;
  }
  .swiper-container{
    width: 720px;
    height:467px;
    overflow: visible !important;
    margin:0 auto;
    padding: 0 10px;
    .swiper-pic{
      width:720px;
      height: 264px;
      display: flex;
      justify-content: space-between;
      .first-pic{
        width: 434px;
        height:264px;
        background-color: aqua;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .last-pic{
        width: 266px;
        height:264px;
      background-color: aqua;
      img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .swiper-desc{
      box-sizing: border-box;
      margin-top:26px;
      width:434px;
      height: 172px;
      display: flex;
      justify-content: space-between;
      .desc-left{
        width:90px;
        height: 172px;
        font-size: 18px;
        color: #333;
        line-height: 25px;
        font-family: PingFangSC-Regular, PingFang SC;
        .desc-collect{
          width: 48px;
          height: 48px;
          margin-top: 15px;
          background-color: bisque;
        }
        :last-child{
        line-height: 22px;
        }
      }
      .desc-right{
        width: 309px;
        height: 177px;
        color: #333333;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .desc-title{
          font-size: 18px;
          font-weight: 600;
          line-height: 25px;
      font-family: PingFangSC-Semibold, PingFang SC;
        }
        .desc-con{
          width: 309px;
          height: 117px;
          font-size: 14px;
          line-height: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
        }
        button{
          display: block;
          width: 68px;
          height: 21px;
          border: 1px solid #9A7A53;
          background:none;
          font-size: 18px;
          outline: none;
          font-family: PingFangSC-Regular, PingFang SC;
          line-height: 25px;
        }
      }

    }

  }
  .swiper-button-next,
  .swiper-button-prev{
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 4px solid #9A7A53;
    border-radius: 50%;
    position: absolute;
    top: 150px;
    right: -238px;
  }
  .swiper-button-prev{
    left: -238px;
  }
  .swiper-button-next::after{
    content:'next';
    transform: scale(0.5);
    color:#9A7A53 ;
  }
  .swiper-button-prev::after{
    content:'prev';
    transform: scale(0.5);
    color:#9A7A53 ;
  }
}
</style>