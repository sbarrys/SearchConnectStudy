(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26f6bacb"],{"053e":function(e,t,n){},8843:function(e,t,n){"use strict";var i=n("053e"),o=n.n(i);o.a},d879:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{method:"post"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.postNotice(t)}}},[n("div",{staticClass:"outer"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"notice"},[e._v(" Study Type "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v(" select one ")]),n("option",[e._v("멘토 멘티")]),n("option",[e._v("자율 스터디")])]),e._v(" Member "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.notice.maxMember,expression:"notice.maxMember"}],attrs:{type:"Number",name:"studyMember",required:""},domProps:{value:e.notice.maxMember},on:{input:function(t){t.target.composing||e.$set(e.notice,"maxMember",t.target.value)}}}),n("br"),n("br"),e._v(" Study Name : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.notice.studyName,expression:"notice.studyName"}],attrs:{type:"text",name:"studyName",required:"",placeholder:"스터디 이름"},domProps:{value:e.notice.studyName},on:{input:function(t){t.target.composing||e.$set(e.notice,"studyName",t.target.value)}}}),n("br"),n("br"),e._v(" Writer : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.notice.writer,expression:"notice.writer"}],attrs:{type:"text",name:"writer",required:"",placeholder:"글쓴이"},domProps:{value:e.notice.writer},on:{input:function(t){t.target.composing||e.$set(e.notice,"writer",t.target.value)}}}),n("br"),n("br"),e._v(" Title : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.notice.title,expression:"notice.title"}],attrs:{type:"text",name:"title",required:"",placeholder:"제목"},domProps:{value:e.notice.title},on:{input:function(t){t.target.composing||e.$set(e.notice,"title",t.target.value)}}}),n("br"),n("br"),e._v(" Content "),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.notice.content,expression:"notice.content"}],attrs:{name:"content",required:"",placeholder:"내용"},domProps:{value:e.notice.content},on:{input:function(t){t.target.composing||e.$set(e.notice,"content",t.target.value)}}}),n("br"),n("button",{staticClass:"mybtn",attrs:{type:"submit"}},[e._v("작성")])])])])])},o=[],r={data(){return{notice:{studyType:"",studyName:"",maxMember:"",writer:"",title:"",content:""},selected:""}},methods:{async postNotice(){""===this.selected&&alert("Study Type을 선택해주세요!");const e=await this.$store.dispatch("appendNotice",this.notice);!1===e.success?alert(e.message):this.$router.push("/notice")}},watch:{selected:function(){"멘토 멘티"===this.selected?this.notice.studyType=this.selected:"자율 스터디"===this.selected&&(this.notice.studyType=this.selected)}}},a=r,s=(n("8843"),n("2877")),c=Object(s["a"])(a,i,o,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-26f6bacb.baf367f3.js.map