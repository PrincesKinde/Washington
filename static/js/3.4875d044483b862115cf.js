webpackJsonp([3],{"9ypA":function(t,e,a){t.exports=a.p+"static/img/3.61106c1.png"},AAMG:function(t,e,a){t.exports=a.p+"static/img/2.6c43482.jpg"},H6DL:function(t,e,a){t.exports=a.p+"static/img/6.ded4536.png"},HXef:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"Home",data:function(){return{msg:"Welcome to HomePage",time:"00天00小时00分00秒",date:{day:"00",hour:"00",minute:"00",second:"00"}}},components:{homeFooter:a("TVmP").a},created:function(){var t=this;setInterval(function(){t.countDownTime()},1e3)},methods:{countDownTime:function(){var t,e,a,n,o=(new Date).getTime(),i=new Date("2018/12/31 00:00:00").getTime()-o;i>=0?(t=Math.floor(i/1e3/60/60/24),this.date.day=t<10?"0"+t:""+t,e=Math.floor(i/1e3/60/60%24),this.date.hour=e<10?"0"+e:""+e,a=Math.floor(i/1e3/60%60),this.date.minute=a<10?"0"+a:""+a,n=Math.floor(i/1e3%60),this.date.second=n<10?"0"+n:""+n):this.date={day:"00",hour:"00",minute:"00",second:"00"}},jumpInfo:function(){this.$router.push({name:"Info",params:{}})},jumpPhoto:function(){this.$router.push({name:"Photo",params:{}})},jumpTurntable:function(){this.$router.push({name:"Turntable",params:{}})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("mt-swipe",{attrs:{auto:2e3}},[n("mt-swipe-item",[n("img",{attrs:{src:a("d+Yd"),alt:""}})]),t._v(" "),n("mt-swipe-item",[n("img",{attrs:{src:a("H6DL"),alt:""},on:{click:t.jumpPhoto}})]),t._v(" "),n("mt-swipe-item",[n("img",{attrs:{src:a("AAMG"),alt:""},on:{click:t.jumpInfo}})])],1),t._v(" "),n("section",[n("div",{staticClass:"count_down"},[t._v("距离12月31日交房还剩")]),t._v(" "),n("div",{staticClass:"count_down_time"},[n("span",[t._v(t._s(t.date.day))]),t._v("天"),n("span",[t._v(t._s(t.date.hour))]),t._v("小时"),n("span",[t._v(t._s(t.date.minute))]),t._v("分钟"),n("span",[t._v(t._s(t.date.second))]),t._v("秒")])]),t._v(" "),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("9ypA"),expression:"require('../../static/images/3.png')"}],staticClass:"bigimg",attrs:{alt:""}}),t._v(" "),n("footer",{on:{click:t.jumpTurntable}},[n("img",{attrs:{src:a("OtO1"),alt:""}})]),t._v(" "),n("home-footer")],1)},staticRenderFns:[]};var i=a("VU/8")(n,o,!1,function(t){a("mYFZ")},"data-v-4f83ae7b",null);e.default=i.exports},OtO1:function(t,e,a){t.exports=a.p+"static/img/turntable.f98a6cb.png"},"d+Yd":function(t,e,a){t.exports=a.p+"static/img/1.f416b1c.jpg"},mYFZ:function(t,e){}});
//# sourceMappingURL=3.4875d044483b862115cf.js.map