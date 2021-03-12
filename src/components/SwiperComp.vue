<template>
  <div class="mycontainer">
    <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/banner/banner1.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/banner/banner1.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/banner/banner1.jpg" alt=""></swiper-slide>
      <!-- <swiper-slide v-for="(item,i) in picList" :key="i"><img :src="item.src"></swiper-slide> -->
    </swiper>
  </div>
</template>
<script>
import 'swiper/swiper.less'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  components:{swiper, swiperSlide},
  data(){
    return{
      swiperOption: {
          autoplay: 3800,
          setWrapperSize :true,
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          effect:'coverflow'
      },
    }
  }
}
</script>
<style lang="less" scoped>
.mycontainer{
  width:1920px;
  height: 588px;
  background-color: burlywood;
  .swiper-slide {
    width: 100%;
    height: 588px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>