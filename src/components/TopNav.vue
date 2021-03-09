<template>
  <div class="nav-container">
    <div class="nav-main">
      <div class="logo"><img src="../assets/icon/logo-red.png" alt=""></div>
      <div class="nav-bar">
        <div :class="{'active':activeIndex==i}" v-for="(item,i) in navList" :key="i" @mouseenter="handleEnter(i)" @mouseleave="handleLeave(i)" @click="handleClick(i)" >{{item}}</div>
        <!-- <div @mouseenter="enter" @mouseleave="leave" @click="" class="shouye">首页</div>
        <div @mouseenter="enter" @mouseleave="leave" @click="" class="pinjian">品鉴</div>
        <div @mouseenter="enter" @mouseleave="leave" @click="" class="dingzhi">定制</div>
        <div @mouseenter="enter" @mouseleave="leave" @click="" class="shoucang">收藏</div>
        <div @mouseenter="enter" @mouseleave="leave" @click="" class="xinwen">新闻</div>
        <div @mouseenter="enter" @mouseleave="leave" @click="" class="guanyu">关于我们</div>
        <div @mouseenter="enter" @mouseleave="leave" @click="" class="lianxi">联系我们</div> -->
      </div>
      <div class="users-bar">
        <div class="users-item">
          <div class="user"><img src="../assets/icon/user.png" alt=""></div>
          <div class="en"><img src="../assets/icon/en.png" alt=""></div>
          <div class="search"><img src="../assets/icon/search.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      navList:['首页','品鉴','定制','收藏','新闻','关于我们','联系我们'],
      activeIndex:0,
      currentIndex:-1
    }
  },
  methods:{
    handleEnter(i){
      this.activeIndex=i
    },
    handleLeave(){
      this.activeIndex=-1
    },
    handleClick(i){
      this.activeIndex=i
    }
  }
}
</script>
<style lang="less" scoped>
.nav-container{
  height: 55px;
  width: 1920px;
  background: #fff;
  .nav-main{
    width: 1212px;
    height:100%;
    margin: 0 auto;
    .logo{
      float: left;
      width: 95px;
      height: 55px;
      margin-right:154px;
      img{
        width:100%;
        height: 100%;
      }
    }
    .nav-bar{
      float: left;
      width: 772px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      color: #3a3a3a;
      font-size: 18px;
      font-weight: 700;
      line-height: 55px;
      text-align: center;
      div {
        padding: 0 20px ;
        height: 100%;
      }
      .active{
        color: #fff;
        background-color: #9a2634;
      }
    }
    .users-bar{
      float: right;
      width: 153px;
      height: 100%;
      .users-item{
        display: flex;
        padding: 14px 0;
        div{
          border-right: 1px solid #9a2634;
          width: 50px;
          height: 22px;
          padding: 0 14px;
          img{
            width: 22px;
            height: 22px;
          }
        }
        .search{
          border-right: none;
        }
      }
    } 
  }
  
}
</style>