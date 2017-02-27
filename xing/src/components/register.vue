<template>
<div class="register">
    <div class="set_back">
        <span @click="back"></span>
        注册
    </div>
    <div class="margin"></div>
    <div class="user">
        <span>手机：+86</span>
        <input v-model="user"/>
    </div>
    <div class="yz">
        <span>验证码：</span>
        <input v-model="yz"  class="sim" />
        发送验证码
    </div>
    <div class="user">
        <span>设置密码：</span>
        <input v-model="password" type="password" />
    </div>

    <div class="but">
        <button :disabled="disabled" @click="loginbtn">注册</button>
    </div>
    <div class="alert" :class="error">
        <span>用户名已注册</span>
    </div>
</div>
</template>

<script>
let reg = /^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/;
export default {
    data (){
      return {
          disabled: 'disabled',
          user: '',
          password: '',
          error: 'error',
          yz: ''
      }
    },
    methods: {
        back (){
            window.location.pathname = "index/home"
        },
        loginbtn (){
            let that = this;
            let users = JSON.parse(sessionStorage.login )
            let user = this._data.user
            let password = this._data.password
            for( let i =0;i<users.length;i++ ){
                if( users[i]['user'] == user  ){
                    this._data.error = '';
                    setTimeout(function(){
                        that._data.error = 'error';
                    },800)
                    return
                }
                /*console.log(1)*/
                sessionStorage.setItem( "user",user )
                window.location.pathname = "/index/mystudy"
            }
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
.register{
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.register input{
    flex: 1;
    height: 20px;
    border: none;
    outline: none;
    margin-top: 2px;
    font-size: 12px;
    color: #999;
}

.register .sim,.register .user,.yz{
    height: 30px;
    display: flex;
    width: 80%;
    font-size: 12px;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
}
.register .word{
    height: 30px;
    display: flex;
    width: 80%;
    margin: 0 auto;
}

.register span{
    float: left;
    padding-right: 10px;
    line-height: 30px;
    font-size: 10px;
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
    font-size: 12px;
    color: #fff;
    background: #2cc17b;
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
    margin-top: -20px;
    width: 100%;
    line-height: 20px;
    font-size: 13px;
}
.error{
    display: none;
}
</style>
