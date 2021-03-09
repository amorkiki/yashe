<template>
  <div class="mycontainer">
    <swiper :options="swiperOption">
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
          autoplay: 3500,
          setWrapperSize :true,
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
      },
    }
  }
}
</script>
<style lang="less" scoped>
.mycontainer{
  width:1920px;
  height: 589px;
  background-color: burlywood;
  .swiper-slide {
    width: 100%;
    height: 589px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>