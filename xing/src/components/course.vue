<template>
    <div class='container'>
            <div class="course">
                <div class="search flex">
                    <div class="search-left">
                        <div class="seach-box">
                            <div></div>
                        </div>
                        <input placeholder="网易云课堂"/>
                    </div>

                    <div class="search-right flex-item" @click=" act='animate'">
                    <img src="/static/images/ionic/ic_course_detail_message.png"/>
                    </div>
              </div>

              <div class="main">
                <div class="courses-left">
                    <div>
                        <span v-for="(item,i) in list" :class="active(i)" @click=" index = i"><i></i>{{item}}</span>
                    </div>
                </div>

                <div class="courses-right">
                        <div v-for="item in main[index]" class="padding">
                            <div class="catalog">{{item.name}}</div>
                            <div class="listing">
                                <span v-for="list in item.list">{{list}}</span>
                            </div>
                        </div>
                </div>

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
    </div>
</template>

<script>
export default {
  name: 'course',
  data (){
      return {
                  "act": '',
                 "index": 0,
                 "list" : [
                     "编程开发",
                     "办公效率",
                     "产品和设计",
                     "生活方式",
                     "职业发展",
                     "市场营销"
                 ],
                 "main" : [
                     {
                         "program" : {
                             "name" : "编程语言",
                             "list" : [
                                 "全部",
                                 "Python",
                                 "PHP",
                                 "Java",
                                 "C",
                                 "C++",
                                 "C#",
                                 "Swift",
                                 "R",
                                 "Git"
                             ]
                         },
                         "front_end" : {
                             "name" : "前端开发",
                              "list" : [
                                 "全部",
                                 "HTML/CSS",
                                 "JavaScript",
                                 "HTML5",
                                 "jQuery",
                                 "Bootstrap",
                                 "AngularJS",
                                 "React",
                                 "Vue.js",
                                 "EctJS",
                                 "开发框架"
                             ]
                         },
                         "back_end" : {
                             "name" : "后端开发",
                              "list" : [
                                 "全部",
                                 "Node.js",
                                 ".NET",
                                 "J2EE",
                                 "Go",
                                 "开发实践"
                             ]
                         },
                         "move" : {
                             "name" : "移动开发",
                              "list" : [
                                 "全部",
                                 "IOS",
                                 "Android",
                                 "Windows Phone",
                                 "手游开发"
                             ]
                         },
                         "data" : {
                             "name" : "数据处理",
                              "list" : [
                                 "全部",
                                 "大数据",
                                 "MySQL",
                                 "Oracle",
                                 "SQL Server"
                             ]
                         },
                         "system" : {
                             "name" : "系统/硬件",
                              "list" : [
                                 "全部",
                                 "信息安全",
                                 "操作系统",
                                 "物联网",
                                 "运维管理",
                                 "硬件开发"
                             ]
                         }
                     },
                     {
                         "handle_off" : {
                             "name" : "办公软件",
                             "list" : [
                                 "全部",
                                 "PPT",
                                 "Excel",
                                 "Word",
                                 "Outlook",
                                 "更多软件"
                             ]
                         },
                         "computer" : {
                             "name" : "电脑基础",
                             "list" : [
                                 "全部",
                                 "Windows10",
                                 "常用工具",
                                 "键盘操作"
                             ]
                         },
                         "thougt" : {
                             "name" : "思维导图",
                             "list" : [
                                 "全部",
                                 "百度脑图",
                                 "记忆力"
                             ]
                         },
                         "time" : {
                             "name" : "时间管理",
                             "list" : [
                                 "全部",
                                 "提升效率",
                                 "番茄工作法",
                                 "Java"
                             ]
                         }
                     },
                     {
                         "product_manager" : {
                             "name" : "产品经理",
                             "list" : [
                                 "全部",
                                 "需求分析",
                                 "产品设计"
                             ]
                         },
                         "product_operation" : {
                             "name" : "产品运营",
                             "list" : [
                                 "全部",
                                 "内容运营",
                                 "用户运营",
                                 "活动运营",
                                 "新媒体运营"
                             ]
                         },
                         "user_experience" : {
                             "name" : "用户体验",
                             "list" : [
                                 "全部",
                                 "交互设计",
                                 "视觉设计",
                                 "用户研究"
                             ]
                         },
                         "CAD" : {
                             "name" : "设计软件",
                             "list" : [
                                 "全部",
                                 "Photoshop",
                                 "lilustrator",
                                 "Premiere",
                                 "After_efects",
                                 "CorelDRAW",
                                 "3DMAX",
                                 "AutoCAD",
                                 "MAYA",
                                 "Axure",
                                 "Sketch",
                                 "其他软件"
                             ]
                         },
                         "game" : {
                             "name" : "游戏美术",
                             "list" : [
                                 "全部",
                                 "美术设计",
                             ]
                         },
                         "other" : {
                             "name" : "其他",
                             "list" : [
                                 "全部",
                                 "设计理论",
                                 "工业设计",
                                 "服饰设计"
                             ]
                         }
                     },
                     {
                         "film" : {
                             "name" : "摄影影视",
                             "list" : [
                                 "全部",
                                 "摄影基础",
                                 "摄影后期",
                                 "影视基础",
                                 "影视后期",
                                 "手机摄影"
                             ]
                         },
                         "music" : {
                             "name" : "音乐乐器",
                             "list" : [
                                 "全部",
                                 "唱歌发声",
                                 "琴艺乐器",
                                 "音乐基础",
                                 "编曲混声"
                             ]
                         },
                         "movement" : {
                             "name" : "运动健康",
                             "list" : [
                                 "全部",
                                 "健身",
                                 "体育",
                                 "瑜伽",
                                 "舞蹈",
                                 "武术",
                                 "性健康",
                                 "医疗养生"
                             ]
                         },
                         "accompishment" : {
                             "name" : "个人修养",
                             "list" : [
                                 "全部",
                                 "语言",
                                 "读书",
                                 "演讲",
                                 "绘画",
                                 "书法",
                                 "艺术",
                                 "棋牌八卦",
                                 "科普"
                             ]
                         },
                         "live_with_one_is_own_family" : {
                             "name" : "居家生活",
                             "list" : [
                                 "全部",
                                 "美食烹饪",
                                 "时尚美妆",
                                 "生活妙招",
                                 "手工DIY",
                                 "居家装饰",
                                 "宠物绿植"
                             ]
                         },
                         "pyschology" : {
                             "name" : "心理学",
                             "list" : [
                                 "全部",
                                 "恋爱",
                                 "情绪管理",
                                 "思维训练"
                             ]
                         },
                         "impart" : {
                             "name" : "亲子启蒙",
                             "list" : [
                                 "全部",
                                 "科学孕产",
                                 "育儿保健",
                                 "启蒙教育",
                                 "STEAM",
                                 "家庭教育"
                             ]
                         },
                         "manage_money_matters" : {
                             "name" : "投资理财",
                             "list" : [
                                 "全部",
                                 "理财指导",
                                 "基金",
                                 "股票"
                             ]
                         }
                     },
                     {
                         "apply_for_a_jab" : {
                             "name" : "求职应聘",
                             "list" : [
                                 "全部",
                                 "职业规划",
                                 "求职简历",
                                 "面试技巧"
                             ]
                         },
                         "self_improvement" : {
                             "name" : "自我提升",
                             "list" : [
                                 "全部",
                                 "知识管理",
                                 "习惯养成",
                                 "情绪管理",
                                 "演讲和口才"
                             ]
                         },
                         "careers" : {
                             "name" : "职场关系",
                             "list" : [
                                 "全部",
                                 "人脉管理",
                                 "商务礼仪",
                                 "谈判沟通"
                             ]
                         },
                         "certification" : {
                             "name" : "资格认证",
                             "list" : [
                                 "全部",
                                 "财会金融考试",
                                 "教师资格证",
                                 "心理咨询师",
                                 "更多考试"
                             ]
                         },
                         "start" : {
                             "name" : "创业",
                             "list" : [
                                 "全部",
                                 "投资融资",
                                 "创业环境"
                             ]
                         },
                         "manafements" : {
                             "name" : "管理能力",
                             "list" : [
                                 "全部",
                                 "领导力培养",
                                 "人力资源",
                                 "财务管理",
                                 "项目管理",
                                 "信息管理"
                             ]
                         }
                     },
                     {
                         "network_marketing" : {
                             "name" : "网络营销",
                             "list" : [
                                 "全部",
                                 "微信营销",
                                 "SEO",
                                 "SEM"
                             ]
                         },
                         "marketing_managament" : {
                             "name" : "市场营销",
                             "list" : [
                                 "全部",
                                 "营销必备心灵鸡汤",
                                 "大客户销售"
                             ]
                         },
                         "e_commerce" : {
                             "name" : "电子商务",
                             "list" : [
                                 "全部",
                                 "开店指南",
                                 "网店运营"
                             ]
                         },
                         "brand_promotion" : {
                             "name" : "品牌推广",
                             "list" : [
                                 "全部",
                                 "销售心得",
                                 "品牌营销"
                             ]
                         }
                     }
                 ],
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
      active (i){
        return this._data.index==i?'active':''
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
.course{
    display: flex;
    flex-direction: column;
    font-family:"微软雅黑";
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(217,217,217,0.3);
}
.course .main{
    flex:1;
    width: 100%;
    display: flex;
    padding-top: 35px;
    overflow: hidden
}
.courses-left{
    flex: 1;
    overflow: hidden
}
.courses-left div{
    width:100%;
    height: 100%;
}
.courses-left span{
    width: 100%;
    display: block;
    line-height: 40px;
    display: block;
    font-size: 13px;
    color: #777;
    padding-left: 8rpx;
    text-align: center;
}
.courses-left .active{
    background: #fff;
    position: relative;
    border: none;
}
.active i{
    width: 2px;
    height: 40px;
    position: absolute;
    background:url("/static/images/section_title_tip.png") left no-repeat;
    left: 0;
    top: 0;
}
.active span{
    background: #fff;
}

.courses-right{
    flex: 3;
    height: 100%;
    background: #fff;
    overflow: hidden;
    overflow-y: auto;
}
.padding{
    padding: 0 10px;
}
.courses-right .catalog{
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    padding-top: 20px;
}

.courses-right .listing span{
    display: inline-block;
    padding-right: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 10px;
    color: #999;
}
</style>
