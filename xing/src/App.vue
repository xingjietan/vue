<template>
  <div id="app" class="max-box">
      <router-view></router-view>
  </div>
</template>

<script>
let login = [
      {
          user: "18811795749",
          password: "123456"
      }
]
export default {
  name: 'app'
}
sessionStorage.setItem("login", JSON.stringify(login));
</script>
<style>
*{
    padding: 0;
    margin: 0;
}
.container{
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  color: #313131;
}
.pageContainer {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}
.flex{
  display: flex;
}
.flex-wrap{
  flex-wrap: wrap;
}
.flex-col{
  flex-direction: column;
}

/*head   search*/
.pageContainer .search{
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 30px;
}
.pageContainer .search-left{
  flex: 15;
  margin-left: 20px;
  margin-top: 5px;
  background: #fff;
  height: 20px;
  border-radius: 3px;
  text-align: left;
  box-shadow: 0 0 1px #ccc;
}
.pageContainer .seach-box{
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  float: left;
  border-radius: 50%;
  padding: 5px;
}
.seach-box div{
  width: 100%;
  height: 100%;
  border: 1px solid #999;
  border-radius: 50%;
  position: relative;
}
.seach-box div:after{
  content: "";
  position: absolute;
  width: 4.5px;
  height: 2px;
  background: #999;
  right: -2.5px;
  bottom:-.5px;
  transform: rotate( 38deg );
}
.pageContainer .search-left input{
  width: 50%;
  padding: 0;
  background: none;
  outline: none;
  border: none;
  height: 20px;
  padding-left: 10px;
  line-height: 20px;
  color: #999;
  font-size: 10px;
}
.search-placeholder{
  color: #FFF;
  line-height: 13px;
  padding-top: 2.5px;
}
.pageContainer .search .search-left img{
  display: inline-block;
  width: 17px;
  height: 17px;
  padding: 7px 7px 7px 10px;
}
.pageContainer .search .search-right{
  flex: 2;
  margin-right: 15px;
  padding-top: 6px;
}
.pageContainer .search .search-right img{
  width: 22px;
  height: 15px;
  margin-left: 15px;
}

.loginbox{
    position: relative;
    position: absolute;
    top: 100%;
    z-index: 100;
    transition: top .8s;
    width: 100%;
    height: 100%;
    background: #fff;
}

.animate{
    top: 0;
}
.loginbox .back{
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 15px;
    color: #666;
}

.ban{
    width: 70%;
    height: 20px;
    text-align: center;
    margin: 100px auto;
}

.ban img{
    display: block;
    width: 150px;
    margin: 0 auto;
    height: 25px;
}
.ban span{
    letter-spacing: 10px;
    line-height: 20px;
    font-size: 13px;
    color: #999;
}


.way{
    width: 80%;
    margin: 0 auto;
}

.way button{
    width: 100%;
    font-size: 13px;
    height: 35px;
    line-height: 35px;
    margin-bottom: 10px;
}
.tell{
    background: #2cc17b;
    color: #fff;
    border: none;
}
.call{
    background: #fff;
    color: #2cc17b;
    border: 1px solid #2cc17b;
}

.posa{
  position: absolute;
  bottom: 100px;
  left: 10%
}
.next{
    width: 80%;
    margin: 0 auto;
}
.next span{
    width: 100%;
    display: block;
    font-size: 13px;
    color: #ccc;
    text-align: center;
}

.nextLogin{
    height: 50px;
    padding-top: 15px;
    width: 100%;
    display: flex;
}

.nextLogin>div{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.nextLogin .imgUrl{
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #333;
    display: flex;
    justify-content: center;
    align-items: center;
}

.imgUrl img{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin: 0 auto;
}
.nextLogin span{
    font-size: 13px;
    line-height: 20px;
}
</style>
