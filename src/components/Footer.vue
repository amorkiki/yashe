<template>
  <div class="footer">
    <div class="foot-main">
      <div class="logo"><img src="../assets/icon/logo-white.png" alt=""></div>
      <div class="middle-box">
        <div class="left">
          <div class="left-item" v-for="(item,i) in footList" :key="i">
            <div class="icon-box"></div>
            <div class="foot-list">
              <div class="list-t">{{item.t}}</div>
              <div class="li1">{{item.li1}}</div>
              <div class="li2">{{item.li2}}</div>
              <div class="li3">{{item.li3}}</div>
              <div class="li4">{{item.li4}}</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="erwei"><img src="../assets/icon/erwei.png" alt=""><div>扫一扫微信公众号</div></div>
          <div class="erwei"><img src="../assets/icon/erwei.png" alt=""><div>扫一扫 下载APP</div></div>
        </div>
      </div>
      <div class="bottom-box">©2014-2021 上海哑舍有限公司 | 沪ICP备17033508号-5 | ICP证：沪B2-20180417 | 沪公网安备：31011502009581号</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      footList:[
        {t:'关于我们',li1:'公司理念',li2:'新闻资讯',li3:'公益活动',li4:'海外特供'},
        {t:'客户服务',li1:'投诉建议',li2:'广告招商'},
        {t:'关于我们',li1:'公司理念',li2:'新闻资讯',li3:'公益活动',li4:'海外特供'},
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.footer{
  box-sizing: border-box;
  padding-top: 40px;
  width:1920px;
  height: 400px;
  background:url('../assets/banner/foot-bg.jpg') no-repeat;
  .foot-main{
    box-sizing: border-box;
    width: 856px;
    height: 400px;
    margin: 0 auto;
    .logo{
      margin: 0 auto;
      width: 107px;
      height: 57px;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .middle-box{
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      width:100%;
      height: 228px;
      border-top: 1px solid #9a7a53;
      .left{
        display: flex;
        justify-content: space-between;
        margin-top: 36px;
        width: 508px;
        height: 196px;
        // background-color: #fff;
        .left-item{
          display: flex;
          justify-content: space-between;
          .icon-box{
            width: 13px;
            height: 13px;
            background-color: #9a7a53;
            margin: 3px 12px 0 0;
          }
          .foot-list{
            color: #fff;
            .list-t{
              font-size: 18px;
            }
            .li1,
            .li2,
            .li3,
            .li4{
              font-size: 12px;
              margin-top: 15px;
            }
          }
        }
      }
      .right{
        display: flex;
        justify-content: space-between;
        margin-top: 33px;
        width:286px;
        height: 100%;
        color:#fff;
        font-weight: 700;
        font-size:10px;
        .erwei{
          width: 128px;
          height: 115px;
          img{
            width: 95%;
            height: 100%;
          }
        }
      }
    }
    .bottom-box{
      transform: scale(0.8);
      color: #fff;
      font-size: 10px;
    }
  }
}
</style>