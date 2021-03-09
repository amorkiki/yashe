<template>
  <div class="home">
    <!-- 导航栏 -->
    <top-nav/>
    <!-- 轮播图 -->
    <swiper-comp/>
    <!-- 客户服务 -->
    <div class="service">
      <div class="service-title"><block-title :title="title1"/></div>
      <div class="block-main">
        <div class="block-item" v-for="(item,i) in serviceBlock" :key="i">
          <div class="icon"><img :src="item.icon" alt=""></div>
          <div class="title">{{item.title}}</div>
          <div class="sub1">{{item.sub1}}</div>
          <div class="sub2">{{item.sub2}}</div>
        </div>
      </div>
      <div class="sentence">
        <div class="sen1">哑舍是一间屋子，存放着许多故事，</div>
        <div class="sen2">故事通过物品，方寸之间</div>
        <div class="sen3">默默传达日月轮转，动静无常。</div>
      </div>
      <more-btn/>
    </div>
    <!-- 玩转物件 -->
    <play-page/>
    <!-- 哑舍欣赏 -->
    <div class="taste">
      <div class="taste-title"><block-title :title="title3"/></div>
      <div class="main-list">
        <div class="list-item" v-for="(item,i) in tasteList" :key="i">
          <div class="left-title">
            <div class="l1">{{item.l1}}</div>
            <div class="l2">{{item.l2}}</div>
          </div>
          <div class="right-con">
            <div class="r1">{{item.r1}}</div>
            <div class="r2">{{item.r2}}</div>
            <div class="r3">{{item.r3}}</div>
            <div class="r4">{{item.r4}}</div>
            <div class="r5">{{item.r5}}</div>
            <div class="r6">{{item.r6}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 匠人定制 -->
    <div class="customed">
      <div class="cus-title"><block-title :title="title4"/></div>
    </div>
    <!-- 哑舍精选 -->
    <choose-page/>
    <!-- 哑舍资讯 -->
    <div class="yashenews">
      <div class="news-title"><block-title :title="title6"/></div>
      <div class="news-main">
        <div class="left-video"></div>
        <div class="right-part">
          <div class="topbtn">
            <div>直播</div>
            <div>文玩资讯</div>
            <div>藏家分享</div>
            <div>鉴定</div>
            <div>大师传记</div>
            <div>作品展示</div>
          </div>
          <div class="readmore">Read more <div class="bar"></div></div>
          <div class="news">
            <div>
              <div class="news-pic"><img src="../assets/item/news1.png" alt=""></div>
            </div>
            <div>
              <div class="news-pic"><img src="../assets/item/news2.png" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/> 
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import SwiperComp from '@/components/SwiperComp.vue'
import BlockTitle from '@/components/Title.vue'
import MoreBtn from '@/components/MoreBtn.vue'
import Footer from '../components/Footer.vue'
import PlayPage from '../components/PlayPage.vue'
import ChoosePage from '../components/ChoosePage.vue'

export default {
  name: 'Home',
  components: {
    TopNav,
    SwiperComp,
    BlockTitle,
    MoreBtn,
    Footer,
    PlayPage,
    ChoosePage
  },
  data(){
    return{
      title1:'客户服务',
      serviceBlock:[
        {icon:require('../assets/icon/circle1.png'),title:'品鉴',sub1:'万物并作',sub2:'吾以观复'},
        {icon:require('../assets/icon/circle2.png'),title:'收藏',sub1:'收纳故事',sub2:'倾听思想'},
        {icon:require('../assets/icon/circle3.png'),title:'定制',sub1:'私人订制',sub2:'匠心精选'},
        {icon:require('../assets/icon/circle4.png'),title:'活动',sub1:'玩转物件',sub2:'优惠多多'}
      ],
      title3:'哑舍欣赏',
      tasteList:[
        {l1:'与',l2:'大师互动身临其境',r1:'世界再吵杂',r2:'匠人的内心 绝对是安静的',
        r3:'手工人 往往意味着固执 缓慢 少量 劳作',r4:'这些背后所隐含的是 专注 技艺 对完美的追求',
        r5:'所以我们宁愿这样做',r6:'–也必须这样 也一直这样'},
        {l1:'收',l2:'藏精品只有你想不到',r1:'收而不研者俗，藏而不鉴者傻',r2:'以藏学师者德，以藏悟心者美',
        r3:'这些背后所隐含的是 专注 记忆 对完美的追求 ',r4:'所以我们 宁愿这样做',
        r5:'也必须这样做',r6:'也会一直这样做'},
        {l1:'平',l2:'台直播分享文化传承交流',r1:'用最现代化的交流方式完美地',r2:'真实地将祖先留下的杰作传承品鉴',
        r3:'以藏缘友者雅，以藏养藏者富',r4:'这些背后所隐含的是 专注 记忆 对完美的追求 ',
        r5:'所以我们 宁愿这样做',r6:'也必须一直这样做'},
        {l1:'发',l2:'现新玩法聆听旧故事',r1:'每一个藏品都是一种缘。',r2:'它从哪里来，你不知道;',
        r3:'它会到哪里去，你也不知道。',r4:'在过程中，在你这里，',
        r5:'–呵护好，保存好，',r6:'这是你唯一的权利...'}
      ],
      title4:'私人订制，匠人云集',
      title6:'哑舍资讯'
    }
  }
}
</script>
<style lang="less" scoped>
.service{
  box-sizing: border-box;
  width: 878px;
  height: 805px;
  padding-top: 80px;
  margin: 0 auto;
  .service-title{
    width: 270px;
    margin: 0 auto;
  }
  .block-main{
    box-sizing: border-box;
    margin-top: 42px;
    width:100%;
    height: 354px;
    display: flex;
    justify-content: space-between;
    .block-item{
      width: 166px;
      height: 100%;
      .icon{
        height: 165px;
        width:100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .title{
        text-align: center;
        font-size: 34px;
        font-weight: 500;
        padding: 25px 0;
      }
      .sub1,
      .sub2{
        text-align: center;
        font-size: 22px;
        color:#666;
      }
    }
  }
  .sentence{
    width: 100%;
    height: 138px;
    .sen1,
    .sen2,
    .sen3{
      text-align: center;
      font-size: 24px;
      color: #666;
    }
  }
}

.taste{
  margin:0 auto;
  box-sizing: border-box;
  padding-top: 80px;
  width: 1140px;
  height: 878px;
  .taste-title{
    width: 270px;
    margin: 0 auto;
  }
  .main-list{
    font-family: '宋体';
    font-weight: 700;
    width: 100%;
    height: 582px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    .list-item{
      display: flex;
      box-sizing: border-box;
      width:270px;
      height: 100%;
      border: 1px solid #666;
      padding: 52px 0 0 38px;
      .left-title{
        width: 34px;
        height: 100%;
        .l1{
          box-sizing: border-box;
          width: 100%;
          height: 67px;
          border-top: 7px solid #313233;
          font-size: 34px;
          padding-top: 16px;
        }
        .l2{
          font-size: 24px;
          writing-mode:vertical-lr;
          margin-left: 2px;
        }
      }
      .right-con{
        display: flex;
        margin-left: 34px;
        margin-top: 68px;
        color: #68696a;
        .r1,
        .r2,
        .r3,
        .r4,
        .r5,
        .r6{
          font-size: 18px;
          writing-mode:vertical-lr;
        }
      }
    }
  }
}
.customed{
  width: 1920px;
  height: 656px;
  .cus-title{
    width:440px;
    margin: 0 auto;
  }
}
.yashenews{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 472px;
  width: 1080px;
  margin: 78px auto;
  .news-title{
    width: 270px;
    margin :0 auto;
  }
  .news-main{
    display: flex;
    justify-content: space-between;
    width:100%;
    height:360px;
    .left-video{
      width:520px;
      height: 360px;
      background-color: #152;
    }
    .right-part{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 518px;
      height: 360px;
      .topbtn{
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: space-between;
        width:240px;
        height: 60px;
        div{
          box-sizing: border-box;
          text-align: center;
          line-height: 28px;
          padding:0 10px;
          height: 28px;
          background-color: #ebebeb;
          font-size: 12px;
          color:#666;
          box-sizing: border-box;
        }
      }
      .readmore{
        width:100%;
        height: 70px;
        line-height: 70px;
        position: relative;
        color:#666;
        font-weight: 700;
        .bar{
          position: absolute;
          top:48%;
          right: 70%;
          width:36px;
          height: 3px;
          background-color: #666;
        }
      }
      .news{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width:518px;
        height: 234px;
        div{
          width: 100%;
          height: 106px;
          .news-pic{
            width: 104px;
            height: 106px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>