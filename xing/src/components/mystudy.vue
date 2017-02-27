<template>
  <div class="container">
      <div class="search flex">
          <div class="setting">
              <div @click="setting"></div>
          </div>
          <div  v-if="!user" class="search-right flex-item" @click=" active='animate' " >
          <img src="/static/images/email.png"/>
          </div>
          <div v-if="user" class="search-right flex-item" >
          <img src="/static/images/email.png"/>
          </div>
      </div>

      <div class="logged" v-if="user">
          <div class="userLogin">
              <img src="/static/images/initial/zx5.gif"/>
          </div>

          <div>
              <span >
                  空空如你，快开始学习吧
              </span>
          </div>
      </div>


      <div class="not_logged_in"  v-if="!user" >
          <div class="userLogin">
              <div>
                  <img src="/static/images/ionic/ic_launcher.png"/>
              </div>
              <span>你尚未登录</span>
              <span>无法记录和同步学习进度，建议登录后再学习</span>
          </div>

          <div class="loginTo">
              <button class="tell" @click="loginto">手机号登陆</button>
              <button class="call" @click="register">注册</button>
          </div>

          <div class="next">
              <span>其他方式登录</span>
              <div class="nextLogin">
                  <div v-for="item in login">
                      <div class="imgUrl"><img :src="item.img"/></div>
                      <span>{{item.name}}</span>
                  </div>
              </div>
          </div>
      </div>

      <div class="loginbox" :class="active">

          <div class="back" @click=" active=''">X</div>

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
export default{
    name: 'mystudy',
    data (){
        return {
            cLass : "",
            user : sessionStorage.getItem( "user" ),
            active: '',
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
        setting (){
            window.location.pathname = "/setting"
        },
        register (){
            window.location.pathname = "/register"
        },
        loginto (){
             window.location.pathname = "/login"
         }
    }
}
</script>

<style>

.setting{
    flex: 15;
}
.setting div{
    margin: 3px 0 0 6px;
    width: 20px;
    height: 20px;
    background: url("/static/images/setting.gif") no-repeat;
    background-size: 15px 20px;
}

.logged,.not_logged_in{
    width: 100%;
}
.pageContainer .logged img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.logged span{
    font-size: 15px;
    display: block;
    text-align: center;
    color:#2cc17b;
    line-height: 50px;
}
.userLogin{
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    background: #2cc17b;
    width: 100%;
    height: 180px;
    padding-top: 20px;
}

.userLogin div{
    display: flex;
    width: 70px;
    height: 70px;
    background: #fff;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin: 10px auto 10px;
}
.userLogin img{
    width: 45px;
    height: 45px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.userLogin span{
    font-size: 13px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.loginTo{
    width: 80%;
    margin: 30px auto
}

.loginTo button{
    width: 100%;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
}
</style>
