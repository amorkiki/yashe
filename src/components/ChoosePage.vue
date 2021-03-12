<template>
  <div class="choose-box">
    <div class="choose-title"><block-title :title="title5" color="#fff"/></div>
    <div class="choose-main">
      <div class="search-bar">
        <div class="shidai"><my-select :options="shidai" :title="shidaiT" @selected="selectedShidai"/></div>
        <div class="fenlei"><my-select :options="fenlei" :title="fenleiT" @selected="selectedFenlei"/></div>
        <div class="mingcheng"><my-select :options="mincheng" :title="minchengT" @selected="selectedMincheng"/></div>
        <div class="search"><input type="text" placeholder="搜索"></div>
      </div>
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
import MySelect from '../components/MySelect.vue'
export default {
  components:{BlockTitle,MySelect},
  data(){
    return{
      title5:'哑舍精选',
      shidai:[{label:'先秦时期'},{label:'两汉魏晋'},{label:'唐宋元'},{label:'明清'},{label:'民国时期'},{label:'现代'}],
      shidaiT:'时代',
      fenlei:[{label:'书画'},{label:'瓷器'},{label:'玉石'},{label:'钟表'},{label:'家具'},{label:'金银器'},{label:'古着'}],
      fenleiT:'分类',
      mincheng:[{label:'还没想好呀'}],
      minchengT:'名称'
      }
    },
    methods:{
      selectedShidai(val){
        // console.log(val)
        this.shidaiT=val
      },
      selectedFenlei(val){
        this.fenleiT=val
      },
      selectedMincheng(val){
        this.minchengT=val
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
      height: 41px;
      width: 872px;
      color:#fff;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .shidai,
      .fenlei {
        width: 134px;
        height: 41px;
        border: 1px solid #9A7A53;
        border-radius: 6px;
      }
      .mingcheng{
        width: 182px;
        height: 41px;
        border: 1px solid #9A7A53;
        border-radius: 6px;
      }
      .search{
        width: 320px;
        height: 41px;
        border: 1px solid #9A7A53;
        border-radius: 6px;
        input{
          padding: 0 15px;
          box-sizing: border-box;
          background: none;
          width: 100%;
          height: 100%;
          outline: none;
          border:none;
          color: #fff;
        }
        ::-webkit-input-placeholder{
            color: #fff;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
          }
      }
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