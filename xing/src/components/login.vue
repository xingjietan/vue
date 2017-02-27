<template>
<div class="logins">
     <div class="set_back">
         <span @click="back"></span>
         手机号登陆
     </div>
     <div class="margin"></div>
    <div class="user">
        <span>手机：+86</span>
        <input v-model="user" />
    </div>
    <div class="word">
        <span>密码：</span>
        <input v-model="password" type="password"/>
    </div>
    <div class="but">
        <button :disabled="disabled" @click="loginbtn">登录</button>
        <span>忘记密码？</span>
    </div>

    <div class="alert" :class="error">
        <span>用户名或密码错误</span>
    </div>
</div>
</template>

<script>
let reg = /^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/;
export default {
    data (){
      return {
        user: '',
        password: '',
        error: 'error',
        disabled: true,
      }
    },
    methods: {
        back () {
            window.location.pathname = "index/home"
        },
        disabled (){
            let user = this._data.user
            let password = this._data.user
            if( reg.test(user) && password.length>6  ){
                console.log(1)
                return true
            }
            return true
        },
        loginbtn (){
            let that = this;
            let users = JSON.parse(sessionStorage.login )
            let user = this._data.user
            let password = this._data.password
            for( let i =0;i<users.length;i++ ){
                if( users[i]['user'] == user && users[i]['password'] == password ){
                    sessionStorage.setItem( "user",user )
                    window.location.pathname = "/index/mystudy"
                    return
                }
            }
            this._data.error = ''
            setTimeout(function(){
                that._data.error = 'error';
            },800)
        }
    },
     watch :{
        user: {
              handler(curVal,oldVal){
                  if( reg.test(curVal)&&this._data.password.length>6){
                    this._data.disabled = false;
                  }else{
                    this._data.disabled = true;
                  }
              },
              deep: true
        },
        password: {
              handler(curVal,oldVal){
                if(  reg.test( this._data.user ) && curVal.length>=6 ){
                    this._data.disabled = false;
                }else{
                    this._data.disabled = true;
                }
             }
        }
     }
}
</script>

<style>
.set_back{
    width: 100%;
    height: 30px;
    position: relative;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
    background:  rgba(217,217,217,0.3);
}
.disabled{
  disabled: disable;
}
.yz{
  line-height: 30px;
}
.set_back span{
  position: absolute;
  width: 14px;
  font-size: 13px;
  height: 15px;
  background: url("/static/images/ionic/arrow_left_disabled.png") no-repeat;
  background-size: 100% 100%;
  top: 6px;
  left: 5px;
}
.logins{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.margin{
    width: 100%;
    height: 100px;
}
.logins input{
    flex: 1;
    height: 20px;
    border: none;
    outline: none;
    margin-top: 2px;
    font-size: 12px;
    color: #999;
}

.logins .user{
    height: 30px;
    display: flex;
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
}
.logins .word{
    height: 30px;
    display: flex;
    width: 80%;
    margin: 0 auto;
}

.logins span{
    float: left;
    padding-right: 10px;
    line-height: 30px;
    font-size: 12px;
    color: #999;
}
.but{
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;
    text-align: center
}
.but button{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 10px;
    color: #fff;
    background: #2cc17b;
}
.but button:disabled{
   background: #ccc;
   border: none;
}
.but span{
    float: none;
}

.alert{
    position: relative;
    width: 60%;
    height: 20%;
    background: #000;
    opacity: .5;
    position: absolute;
    left: 20%;
    top: 40%;
}

.alert span{
    position: absolute;
    display: block;
    text-align: center;
    color: #fff;
    top: 50%;
    margin-top: -10px;
    width: 100%;
    line-height: 20px;
    font-size: 13px;
}
.error{
    display: none;
}
</style>
