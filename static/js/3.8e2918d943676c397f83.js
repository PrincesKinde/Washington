webpackJsonp([3],{AAMG:function(t,e,a){t.exports=a.p+"static/img/2.6c43482.jpg"},H6DL:function(t,e,a){t.exports=a.p+"static/img/6.ded4536.png"},HXef:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"Home",data:function(){return{msg:"Welcome to HomePage",time:"00天00小时00分00秒",date:{day:"00",hour:"00",minute:"00",second:"00"}}},components:{homeFooter:a("TVmP").a},created:function(){var t=this;setInterval(function(){t.countDownTime()},1e3)},methods:{countDownTime:function(){var t,e,a,o,n=(new Date).getTime(),i=new Date("2019/1/1 00:00:00").getTime()-n;i>=0?(t=Math.floor(i/1e3/60/60/24),this.date.day=t<10?"0"+t:""+t,e=Math.floor(i/1e3/60/60%24),this.date.hour=e<10?"0"+e:""+e,a=Math.floor(i/1e3/60%60),this.date.minute=a<10?"0"+a:""+a,o=Math.floor(i/1e3%60),this.date.second=o<10?"0"+o:""+o):this.date={day:"00",hour:"00",minute:"00",second:"00"}},jumpInfo:function(){this.$router.push({name:"Info",params:{}})},jumpPhoto:function(){this.$router.push({name:"Photo",params:{}})}}},n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"home"}},[o("mt-swipe",{attrs:{auto:2e3}},[o("mt-swipe-item",[o("img",{attrs:{src:a("d+Yd"),alt:""}})]),t._v(" "),o("mt-swipe-item",[o("img",{attrs:{src:a("H6DL"),alt:""},on:{click:t.jumpPhoto}})]),t._v(" "),o("mt-swipe-item",[o("img",{attrs:{src:a("AAMG"),alt:""},on:{click:t.jumpInfo}})])],1),t._v(" "),o("section",[o("div",{staticClass:"count_down"},[t._v("距离12月31日交房还剩")]),t._v(" "),o("div",{staticClass:"count_down_time"},[o("span",[t._v(t._s(t.date.day))]),t._v("天"),o("span",[t._v(t._s(t.date.hour))]),t._v("小时"),o("span",[t._v(t._s(t.date.minute))]),t._v("分钟"),o("span",[t._v(t._s(t.date.second))]),t._v("秒")])]),t._v(" "),o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("tRMD"),expression:"require('../../static/images/3.jpg')"}],staticClass:"bigimg",attrs:{alt:""}}),t._v(" "),o("home-footer")],1)},staticRenderFns:[]};var i=a("VU/8")(o,n,!1,function(t){a("x7aV")},"data-v-44d2583b",null);e.default=i.exports},"d+Yd":function(t,e,a){t.exports=a.p+"static/img/1.f416b1c.jpg"},tRMD:function(t,e,a){t.exports=a.p+"static/img/3.2ff061c.jpg"},x7aV:function(t,e){}});
//# sourceMappingURL=3.8e2918d943676c397f83.js.map