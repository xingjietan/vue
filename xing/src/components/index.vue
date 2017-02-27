<template>
  <div id='index' class='pageContainer'>
      <router-view></router-view>
      <p class='index-footer'>
        <router-link to="/index/home">
          <img src='/static/images/tab_index1.png' />
          首页
        </router-link>
        <router-link to="/index/course">
          <img src='/static/images/tab_course1.png' />
           全部课程
        </router-link>
        <router-link to="/index/mystudy">
           <img src='/static/images/tab_mystudy1.png' />
           我的学习
        </router-link>
      </ul>
   </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>
.index-footer{
    display: flex;
    box-sizing: content-box;
    width: 100%;
    height: 50px;
    text-aline: center;
    padding: 0;
    margin: 0;
    border-top: 1px solid #999;
}
.index-footer a{
    flex: 1;
    padding-top: 7px;
    line-height: 25px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
.index-footer img{
  width: 20px;
  height: 20px;
}
.router-link-active{
  color: blue;
}
</style>