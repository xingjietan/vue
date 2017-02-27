<template>
<div class='container'>
    <div class='search flex'>
      <div class='search-left'>
        <div class='seach-box'>
          <div></div>
        </div>
        <input placeholder='网易云课堂'/>
      </div>
      <div class='search-right flex-item' @click=" act ='animate' ">
        <img @click="other" src='/static/images/email.png'></img>
      </div>
    </div>
    <!--banner-->
    <div class='bannerbox'>
      <!--bannerImg-->
      <swiper  class='banner flex' auto height="100%">
          <swiper-item class='banner-item' v-for="item in banner" >
            <router-link to="/other">
              <img :src="item.img"></img>
            </router-link>
          </swiper-item >

      </swiper>
    </div>

    <div class='nav flex'>
      <div v-for="item in nav" class='nav-item'>
        <router-link to="/other">
          <img :src='item.img'></img>
          <span>{{item.title}}</span>
        </router-link>
      </div>
    </div>

    <div class='ad flex'>
        <router-link to="/other">
          <img :src="bg" ></img>
        </router-link>
    </div>

    <div class='course-grp flex'>
        <div class='course-grp-name flex'>
          <span>{{free_good_lesson.name}}</span>
          <a>{{free_good_lesson.name}}排行榜》</a>
        </div>
        <div class='course-grp-item'>
          <div v-for="item in free_good_lesson.list">
            <router-link to="/other" class='flex flex-col' >
              <img :src="item.img"></img>
              <span>{{item.title}}</span>
              <span></span>
            </router-link>
          </div>
        </div>
    </div>

    <div class='course-grp flex' >
        <div class='course-grp-name flex'>
          <span>{{best_seller.name}}</span>
          <a>{{best_seller.name}}畅销排行榜》</a>
        </div>
        <div class='course-grp-item'>
          <div v-for="item in best_seller.list">
            <router-link to="/other" class='flex flex-col' >
              <img :src="item.img"></img>
              <span>{{item.title}}</span>
              <span class='highlight'>{{item.Present_price}}<span>{{item.original_price}}</span></span>
            </router>
          </div>
        </div>
    </div>

    <div class='special course-grp flex'>
        <div class='special_title flex'>
        <span>
        {{Special_recommendation.name}}
        </span>
        </div>
        <div v-for="item in Special_recommendation.list" class='special_item'>
          <img :src="item.img"/>
        </div>
    </div>

    <div class='course-grp flex aouther' v-for="mains in main">
        <div class='course-grp-name flex'>
          <span>{{mains.name}}</span>
          <a>{{mains.name}}排行榜》</a>
        </div>
        <div class='course-grp-item'>
          <div v-for="item in mains.list">
            <router-link to="/other" class='flex flex-col' >
              <img :src="item.img"></img>
              <span>{{item.title}}</span>
              <span class='highlight'>{{item.Present_price}}<span>{{item.original_price}}</span></span>
            </router>
          </div>
        </div>
    </div>

    <!--全部课程-->
    <div class='navigator-course'>
      <router-link to="/index/course">已经到底了，查看更多》</router-link>
    </div>
    <div class="loginbox" :class="act">

        <div class="back" @click=" act=''">X</div>

        <div class="ban">
            <img src="/static/images/ionic/logo_green.png"/>
            <span>顶尖互联网教育平台</span>
        </div>

        <div class="way">
            <button class="tell" @click="loginto()">手机号登陆</button>
            <button class="call" @click="register()">注册</button>
        </div>

         <div class="next posa">
              <span>其他方式登录</span>
              <div class="nextLogin">
                  <div v-for="item in login">
                      <div class="imgUrl"><img :src="item.img"/></div>
                      <span>{{item.name}}</span>
                  </div>
              </div>
          </div>
   </div>
</div>
</template>

<script>
import { Swiper,SwiperItem } from 'vux'
export default {
  name: 'home',
  components: {
      Swiper,
      SwiperItem
  },
  data () {
      return {
          "active": 'active',
          "act": '',
          "bg" : "/static/images/initial/img1.gif",
          "banner" : [
           {
             "img" : "http://edu-image.nosdn.127.net/c5064b6d-a0ab-4f9c-9982-c963d7420882.jpg"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/3B1D0D4AC10815212E54EFE41778B8AA.jpg"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/03568d83-32fb-4d6c-ae04-c64b346fe2a2.jpg"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/7A90F82CD5464E306B95AC158E90F8B6.jpg"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/5348B382098E03D958B8A8ED3FEB4182.png"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/40680a35-a866-4ff7-9032-17f8f6f43a24.jpg"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/1D821F1ACACC2610AF4768D0E850083B.jpg"
           }
         ],
         "nav" : [
           {
             "img" : "http://edu-image.nosdn.127.net/A0ED3BAF7A2572B19FD7FF1ECF71C21C.jpg",
             "title" : "微专业"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/24c80eb7-148d-4520-92b3-19de174561d2.jpg",
             "title" : "互联网"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/65ECBB4D91707E1BF49A8757F01909AC.jpg",
             "title" : "设计创作"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/1da4c76a-e2be-4474-bd27-f8167b338b670.jpg",
             "title" : "职业/金融"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/4e2c978b-b1a4-4258-836a-1815c4894ad4.jpg",
             "title" : "兴趣生活"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/2EF8DA3AEB2B91D100E649D651426F46.jpg",
             "title" : "语言/留学"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/edf60979-e0fd-42ae-b8ca-9558232ab289.jpg",
             "title" : "中小学"
           },
           {
             "img" : "http://edu-image.nosdn.127.net/C23BB54D90D7E22754C91959B36B9461.jpg",
             "title" : "考证认证"
           }
         ],
         "free_good_lesson" : {
             "name" : "免费好课",
             "list"    : [
               {
                   "img" : "/static/images/initial/mf1.gif",
                   "title": "学会用正确的方式唱歌"
               },
               {
                 "img" : "/static/images/initial/mf2.gif",
                 "title": "趣你的PPT"
               },
               {
                 "img" : "/static/images/initial/mf3.gif",
                 "title": "宁泽涛带你”肌肉大作战“"
               },
               {
                 "img" : "/static/images/initial/mf4.gif",
                 "title": "基础体能训练"
               },
               {
                 "img" : "/static/images/initial/mf5.gif",
                 "title": "微在涨姿势"
               },
               {
                 "img" : "/static/images/initial/mf6.gif",
                 "title": "蔡康宁的说话之道"
               }
             ]
         },
         "best_seller" : {
           "name" : "畅销好课",
           "list"    : [
             {
               "img" : "/static/images/initial/cx1.gif",
               "title": "从零开始学做新媒体",
               "original_price" : 199,
               "Present_price" : 198
             },
             {
               "img" : "/static/images/initial/cx2.gif",
               "title": "和秋叶一起学PPT",
               "original_price" : 169,
               "Present_price" : 168
             },
             {
               "img" : "/static/images/initial/cx3.gif",
               "title": "动画让你的PPT飞起来",
               "original_price" : 79,
               "Present_price" : 78
             },
             {
               "img" : "/static/images/initial/cx4.gif",
               "title": "松哥中级统计教程",
               "original_price" : 599,
               "Present_price" : 588
             },
             {
               "img" : "/static/images/initial/cx5.gif",
               "title": "英语面试必备",
               "original_price" : 49,
               "Present_price" : 45
             },
             {
               "img" : "/static/images/initial/cx6.gif",
               "title": "跟简七学理财",
               "original_price" : 398,
               "Present_price" : 388
             }
           ]
         },
         "Special_recommendation": {
           "name": "专题推荐",
           "list": [
             {
               "img": "/static/images/initial/tj1.gif"
             },
             {
               "img": "/static/images/initial/tj2.gif"
             },
             {
               "img": "/static/images/initial/tj3.gif"
             }
           ]
         },
         "main" : {
           "Internet": {
             "name": "互联网",
             "list": [
               {
                 "img": "/static/images/initial/it1.gif",
                 "title": "交互设计软件操作指南"
               },
               {
                 "img": "/static/images/initial/it2.gif",
                 "title": "四周实现爬虫网站"
               },
               {
                 "img": "/static/images/initial/it3.gif",
                 "title": "Python数据分析实战"
               },
               {
                 "img": "/static/images/initial/it4.gif",
                 "title": "20分钟学IOS小程序"
               },
               {
                 "img": "/static/images/initial/it5.gif",
                 "title": "用Java学编程"
               }
             ]
           },
           "improve_workplace": {
             "name": "职场提升",
             "list": [
               {
                 "img": "/static/images/initial/cx2.gif",
                 "title": "PPT动画是把双刃剑，用好了帅气，用错了晕眩"
               },
               {
                 "img": "/static/images/initial/zc2.gif",
                 "title": "趣你的PPT之PPT基础"
               },
               {
                 "img": "/static/images/initial/zc3.gif",
                 "title": "和秋叶一起学职场技能"
               },
               {
                 "img": "/static/images/initial/zc4.gif",
                 "title": "职场加速器"
               },
               {
                 "img": "/static/images/initial/zc5.gif",
                 "title": "求职简单学"
               }
             ]
           },
           "interest_in_life": {
             "name": "兴趣生活",
             "list": [
               {
                 "img": "/static/images/initial/xq1.gif",
                 "title": "新媒体视频导演微专业新学期强势回归，低价招"
               },
               {
                 "img": "/static/images/initial/mf5.gif",
                 "title": "微在涨姿势"
               },
               {
                 "img": "/static/images/initial/xq3.gif",
                 "title": "淘宝摄影这点事儿"
               },
               {
                 "img": "/static/images/initial/xq5.gif",
                 "title": "电影自习室Pro"
               },
               {
                 "img": "/static/images/initial/xq6.gif",
                 "title": "毛笔书法入门"
               }
             ]
           },
           "language_study_abroad": {
             "name": "语言留学",
             "list": [
               {
                 "img": "/static/images/initial/yy1.gif",
                 "title": "教你四步实现留学梦，敲开世界名校的大门"
               },
               {
                 "img": "/static/images/initial/yy2.gif",
                 "title": "90分钟会读所有韩文字"
               },
               {
                 "img": "/static/images/initial/yy3.gif",
                 "title": "中美文化差异"
               },
               {
                 "img": "/static/images/initial/yy4.gif",
                 "title": "老外最常用的口语"
               },
               {
                 "img": "/static/images/initial/yy5.gif",
                 "title": "雅思写作精细30讲"
               }
             ]
           },
           "primary_and_secondary_schools": {
             "name": "中小学",
             "list": [
               {
                 "img": "/static/images/initial/zx1.gif",
                 "title": "期末个性诊断过关检测"
               },
               {
                 "img": "/static/images/initial/zx2.gif",
                 "title": "木头哥哥讲科学"
               },
               {
                 "img": "/static/images/initial/zx3.gif",
                 "title": "最有温度的汉字解读"
               },
               {
                 "img": "/static/images/initial/zx4.gif",
                 "title": "12门课备战编导专业课"
               },
               {
                 "img": "/static/images/initial/zx5.gif",
                 "title": "英语思维：十节课搞定"
               }
             ]
           }
         },
         login : [
               {
                 "name" : "网易",
                 "img"  : "/static/images/wy.gif"
               },
               {
                 "name" : "QQ",
                 "img"  : "/static/images/qq.gif"
               },
               {
                 "name" : "微信",
                 "img"  : "/static/images/wx.gif"
               },
               {
                 "name" : "微博",
                 "img"  : "/static/images/wb.gif"
               },
               {
                 "name" : "人人",
                 "img"  : "/static/images/rr.gif"
               }
          ]
       }
   },
   methods: {
      register (){
          window.location.pathname = "/register"
      },
      loginto (){
           window.location.pathname = "/login"
       },
      other (){
          window.location.pathname = '/other'
      }
   }
}
</script>

<style>
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
.bannerbox{
  height: 215px;
  width: 100%;
  position: relative;
}
.bannerbox .banner{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:row;
  align-items:center;
}
.vux-swiper{
   width: 100%;
}

.banner-item{
  flex: 1;
  height: 100%;
}
.banner-item a,.banner-item img{
  width: 100%;
  height: 100%;
}
.banner .active{
  width: 100%;
  height: 215px;
  display: inline-block;
}
.banner-btn{
  width:100%;
  position: absolute;
  bottom: 20px;
  flex-direction:row;
  justify-content:center;
}
.banner-btn li{
  width:10px;
  height: 10px;
  margin: 10px;
  float: left;
  background-color: rgba(255,255,255,0.4);
  border-radius: 50%;
}
.banner-btn  .active{
  background-color: #FFF;
}

/*nav*/
.container .nav{
 width: 100%;
 height: 120px;
 padding: 5px 0;
 flex-wrap:wrap;
 justify-content:center;
}
.nav-item{
  width: 25%;
  height: 50%;
  box-sizing: border-box;
  float: left;
}
.nav-item a{
  width: 100%;
  height: 100%;
}
.nav-item img{
  display: block;
  width: 40px;
  height: 40px;
  margin: 5px auto 0;
  border-radius:50%;
}
.nav-item span{
  display: block;
  font-size: 12px;
  height: 15px;
  line-height: 15px;
  color: #000;
  text-align: center;
}
.ad{
  width: 95%;
  height: 60px;
  margin: 0 auto;
}
.ad img,.ad a{
  width: 100%;
  height: 100%;
}

/*courseGrp*/
.course-grp {
  margin-top: 10px;
  flex-wrap:wrap;
  justify-content: space-around;
}
.course-grp-name{
  width: 100%;
  height: 30px;
  justify-content:space-between;
  align-items:center;
  background-color: rgba(217, 217, 217, 0.2)
}
.course-grp-name span{
  font-size: 13px;
  line-height: 25px;
  color: #000 ;
  padding-left: 15px;
  background:url("/static/images/section_title_tip.png") left no-repeat;
}
.course-grp-name a{
  font-size: 12px;
  color: rgba(217, 217, 217, 0.8);
  padding-right: 10px;
}
.course-grp-item{
  width: 95%;
  margin: 0 auto;
}
.course-grp-item div{
  width: 48%;
  float: left;
}
.course-grp-item div:nth-of-type(even){
  margin-left: 4%;
}
.aouther .course-grp-item div:nth-of-type(even){
  margin: 0;
}
.aouther .course-grp-item div:nth-of-type(odd){
 margin-left: 4%;
}
.aouther .course-grp-item div:first-child{
  width: 100%;
  margin: 0;
}
.course-grp-item img{
  height: 75px;
}
.course-grp-item span{
  color:#000;
  line-height: 20px;
  font-size: 13px;
}
.course-grp-item .highlight{
  color: red;
}
.highlight span{
  color: lightgray;
  padding-left: 10px;
  span-decoration: line-through;
}

.special_title{
  font-size: 15px;
  span-align: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color:rgba(217, 217, 217, 0.2);
}
.special_title span{
  margin: 0 auto;
  height: 100%;
}
.special_item{
  width: 95%;
  margin: 5px auto;
  height: 90px;
}

.special_item img{
  width: 100%;
  height: 100%;
}

.course-grp-item  .item_big{
  width: 100%
}
.item_big image{
  width: 100%;
  height: 100px;
}


/*更多课程*/
.navigator-course{
  padding: 5px 0 20px;
  color:#4bbc93;
  font-size: 10px;
  text-align: center;
}
.navigator-course a{
  color: #999;
}
</style>
