(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-741f99f3"],{2051:function(t,e,r){"use strict";var s=r("5939"),n=r.n(s);n.a},5939:function(t,e,r){},c9d4:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"outer"},[r("div",{staticClass:"inner"},[r("table",{staticClass:"notice"},[t._m(0),t._l(t.notices,(function(e){return r("tr",{on:{click:function(r){return t.detail(e)}}},[r("td",[t._v(t._s(e.studyType))]),t._v(" "),r("td",[t._v(t._s(e.maxMember))]),t._v(" "),r("td",[t._v(t._s(e.writer))]),t._v(" "),r("td",[t._v(t._s(e.title))]),t._v(" "),r("td",[t._v(t._s(e.create_date))])])})),r("br")],2),r("br"),r("br"),r("br"),r("button",{staticClass:"mybtn",attrs:{type:"submit"},on:{click:function(e){return t.write()}}},[t._v(" Study 생성 ")])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("Type")]),t._v(" "),r("td",[t._v("Member")]),t._v(" "),r("td",[t._v("Writer")]),t._v(" "),r("td",[t._v("Title")]),t._v(" "),r("td",[t._v("Date")])])}],i={data:function(){return{}},computed:{notices(){return this.$store.state.notices}},methods:{write(){this.$router.push({name:"Create"})},detail(t){this.$router.push({name:"Detail",params:{id:t._id}})},createStudy(){}},async beforeCreate(){await this.$store.dispatch("fetchNotices")}},a=i,c=(r("2051"),r("2877")),u=Object(c["a"])(a,s,n,!1,null,"4fe60b9c",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-741f99f3.34b51b48.js.map