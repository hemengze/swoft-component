webpackJsonp([13],{CndE:function(t,e){},I4ez:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("B2YR"),n=a.n(s),l=a("k/aq"),i=a.n(l),r=a("/uRu"),c=a("ZXMi"),v={name:"app-info",components:n()({VDataTable:i.a},r),data:function(){return{aliases:{}}},created:function(){this.fetchList()},mounted:function(){},computed:{},methods:{fetchList:function(){var t=this;Object(c.b)().then(function(e){var a=e.data;t.aliases=a,console.log(a)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-subheader",[a("h1",[t._v(t._s(t.$t(this.$route.name)))])])],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",md4:""}},[a("v-card",[a("v-card-title",{staticClass:"title grey lighten-3"},[t._v(t._s(t.$t("App.someTips")))]),t._v(" "),a("v-card-text",[a("p",[t._v(t._s(t.$t("App.getRealPath"))+": "),a("span",{staticClass:"el-tag el-tag--success"},[t._v("\\Swoft::getAlias('@root/public')")])])])],1)],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",md8:""}},[a("v-card",[a("v-card-title",{staticClass:"title blue lighten-5"},[t._v(t._s(t.$t("App.pathAliases")))]),t._v(" "),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("App.alias")))]),t._v(" "),a("th",[t._v(t._s(t.$t("App.value")))])])]),t._v(" "),a("tbody",t._l(t.aliases,function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(s))]),t._v(" "),a("td",[a("span",{staticClass:"el-tag"},[t._v(t._s(e))])])])}))])],1)],1)],1)},staticRenderFns:[]};var u=a("E9e/")(v,o,!1,function(t){a("CndE")},"data-v-715700a6",null);e.default=u.exports}});
//# sourceMappingURL=13.042aaf963386062ca1d5.js.map