<template>
<div class="other">
    <div class="header">
        <div class="back"></div>
        课程详情
        <img src="/static/images/ionic/ic_courseware_exam_normal.png"/>
    </div>
    <div class="main">
        <div>
            <div class="banner">
                <img src="/static/images/initial/zx2.gif"/>
            </div>

            <div class="nav">
                <div>
                    <span>介绍</span>
                 </div>
                <div>
                    <span>目录</span>
                 </div>
                <div>
                    <span>评价</span>
                 </div>
            </div>

            <div class="content">
                <div class="title">
                    <b> 木头哥哥讲科学</b>
                    <span>691人学过</span>
                </div>

                <div class="type">
                    免费
                </div>
                <div class="gap"></div>
                <div class="introduce">
                    课程介绍
                    <span>在这一系列的内容中，会用几分钟讲一个有趣的科学知识。有天文宇宙，还有恐龙</span>
                </div>

                <div class="apply">
                    适用人群
                    <span>对恐龙和科学感兴趣的学前儿童，或是小学生</span>
                </div>

                <div class="a_lecturer">
                    讲师
                   <span>木头哥哥讲科学</span>
                </div>
            </div>
        </div>
    </div>
    <button>加入学习</button>
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
            name: 'other',
            data (){
                return {
                    active: ''
                }
            }
       }
</script>

<style>

.other{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.other button{
    width: 100%;
    height: 40px;
    border-radius: 0;
    background: #2cc17b;
    color: #fff;
    font-size: 10px;
}

.header{
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    text-align: center;
    position: relative;
}
.header .back{
    position: absolute;
    width: 15px;
    height: 20px;
    top: 10px;
    left: 10px;
    background: url( "/static/images/ionic/arrow_left_disabled.png" ) no-repeat;
    background-size: 15px 20px;
}

.header img{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
}

.main{
    flex: 1;
    padding: 0;
    margin: 0;
    overflow: hidden;
}

.main>div{
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
}

.other .banner{
    height: 200px;
}
.banner img{
    height: 100%;
    width: 100%;
}

.other .nav{
    height: 40px;
    line-height: 40px;
    display: flex;
}

.other .nav div{
    flex: 1;
    font-size: 12px;
    text-align: center;
}
.other .nav span{
    box-sizing: border-box;
    display: inline-block;
    padding:  0 15px;
    height: 100%;
}

.active{
    color: #2cc17b;
    border-bottom: 2px solid #2cc17b;
}

.title,.type,.introduce,.apply,.a_lecturer{
    height: 70px;
    width: 95%;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
}
.title b{
    font-size: 12px;
    line-height: 30px;
}

.title span{
    font-size: 12px;
    color: #999;
    line-height: 20px;
    display: block;
}

.type{
    font-size: 15px;
    line-height: 70px;
    font-weight: 500;
    color: #2cc17b;
}
.gap{
    height: 20px;
    background: #f1f1f1;
}
.introduce,.apply,.a_lecturer{
    font-size: 10px;
    line-height: 20px;
}
.introduce span,.apply text,.a_lecturer span{
    font-size: 14px;
    color: #666;
    display: block;
    line-height: 20px;
}
</style>
