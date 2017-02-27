<template>
  <div class="setting_box">
      <div class="set_back">
          <span @click="toback"></span>
          设置
      </div>
      <div class="login">
          <button v-if="user">{{user}}</button>
          <button v-if="!user" @click="act='animate'">登录网易云课堂</button>
      </div>

      <div class="item">
          视频下载清晰度
          <div class="ri">
              <span :class="con(0)" @click="index=0"> 流畅</span>|<span :class="con(1)" @click="index=1">高清</span>
          </div>
      </div>

      <div class="item">
          允许使用2G/3G/4G网络观看视频
          <div class="ri">
              <div class="open" :class="open1" @click="change(1)">
                  <div></div>
              </div>
          </div>
      </div>

      <div class="item">
          允许使用2G/3G/4G网络观看视频
          <div class="ri">
              <div class="open" :class="open2" @click="change(2)" >
                  <div></div>
              </div>
          </div>
          <div>
          清除缓存缓存
              <div class="ri"><span>4M</span></div>
          </div>
      </div>

      <div class="item">
          清除离线下载内容
          <div class="ri">
              <span>0MB</span>
          </div>
      </div>

      <div class="item">
          意见反馈
          <div class="ri net">

          </div>
      </div>

      <div class="item">
          评价
          <div class="ri net">
          </div>
      </div>

      <div class="item">
          关于
          <div class="ri net">
          </div>
      </div>
      <div class="item" v-if="user" @click="exit" >
          退出登陆
      </div>

     <div class="loginbox" :class="act">
          <div class="back" @click=" act=''">X</div>

          <div class="ban">
              <img src="/static/images/ionic/logo_green.png"/>
              <span>顶尖互联网教育平台</span>
          </div>

          <div class="way">
              <button class="tell" @click="loginto">手机号登陆</button>
              <button class="call" @click="register">注册</button>
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
export default {
  name: 'setting',
  data (){
      return {
          'act': '',
          user: sessionStorage.getItem( "user" ),
          index: '',
          open1: '',
          open2: '',
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
      con (i){
          return i==this._data.index?'active':''
      },
      change (i){
          this._data["open"+i] = this._data["open"+i]=="active"?"":"active";
      },
      register (){
          window.location.pathname = "/register"
      },
      loginto (){
           window.location.pathname = "/login"
       },
       toback (){
          window.location.pathname = "/index/mystudy"
       },
       exit (){
          sessionStorage.setItem( "user",'' )
          this._data.user = ''
       }
  }
 }
</script>

<style>
.setting_box{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.set_back{
    width: 100%;
    height: 30px;
    position: relative;
    text-align: center;
    line-height: 30px;
    background:  rgba(217,217,217,0.3);
}
.set_back span{
  position: absolute;
  width: 15px;
  font-size: 12px;
  height: 15px;
  background: url("/static/images/ionic/arrow_left_disabled.png") no-repeat;
  background-size: 100% 100%;
  top: 6px;
  left: 5px;
}
.login{
    height: 60px;
    width: 100%;
    position: relative;
    border-bottom: 1px solid #eee;
}
.login button{
    height: 35px;
    width: 50%;
    position: absolute;
    top: 10px;
    left: 25%;
    line-height: 35px;
    font-size: 12px;
    border: 1px solid #2cc17b;
    color: #2cc17b;
    background: none;
}

.item{
    box-sizing: border-box;
    width: 95%;
    margin: 0 auto;
    font-size: 13px;
    color: #666;
    line-height: 40px;
    border-bottom: 1px solid #eee;
}

.ri{
    float: right;
    color: #999;
}
.ri .active{
    color: #2cc17b;
}
.ri span{
    display: inline-block;
    width: 40px;
    font-size: 13px;
    text-align: center
}
.open{
    position: relative;
    width: 45px;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 12px;
    box-shadow: 0 0 1px #ccc;
    margin: 7px 10px 0 0;
}

.open div{
    position: absolute;
    top: -2px;
    left: 0px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #eee;
    background: #fff;
    box-shadow: 0 3px  1px #eee;
}

.open.active{
    background: #2cc17b;
}
.active div{
    transition: translate .5s;
    transform: translate(25px)
}

.net{
    width: 10px;
    height: 20px;
    background: url("/static/images/ionic/ic_arrow_right_disabled.png") no-repeat;
    background-size: 8px 15px;
    margin: 12px 10px 0 0;
}
</style>
