(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bffe0b96"],{1071:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outer"},[i("div",{staticClass:"inner"},[i("div",{staticClass:"notice"},[t._v(" Writer : "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.notice.writer,expression:"notice.writer"}],attrs:{type:"text",name:"writer",required:"",placeholder:"글쓴이"},domProps:{value:t.notice.writer},on:{input:function(e){e.target.composing||t.$set(t.notice,"writer",e.target.value)}}}),i("br"),i("br"),t._v(" Title : "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.notice.title,expression:"notice.title"}],attrs:{type:"text",name:"title",required:"",placeholder:"제목"},domProps:{value:t.notice.title},on:{input:function(e){e.target.composing||t.$set(t.notice,"title",e.target.value)}}}),i("br"),i("br"),t._v(" Content "),i("br"),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.notice.content,expression:"notice.content"}],attrs:{name:"content",required:"",placeholder:"내용"},domProps:{value:t.notice.content},on:{input:function(e){e.target.composing||t.$set(t.notice,"content",e.target.value)}}}),i("br"),i("button",{staticClass:"mybtn",on:{click:t.editNotice}},[t._v("수정")])])])])},o=[],r={data(){return{notice:{writer:"",title:"",content:""}}},methods:{async editNotice(){const t=await this.$store.dispatch("updateNotice",{id:this.$route.params.id,data:this.notice});!1===t.success?alert(t.message):this.$router.push("/notice")}},async beforeCreate(){const t=await this.$store.dispatch("fetchNotice",{id:this.$route.params.id});!1===t.success?alert(t.message):this.notice=t.result}},a=r,s=(i("d572"),i("2877")),c=Object(s["a"])(a,n,o,!1,null,null,null);e["default"]=c.exports},d572:function(t,e,i){"use strict";var n=i("fea3"),o=i.n(n);o.a},fea3:function(t,e,i){}}]);
//# sourceMappingURL=chunk-bffe0b96.84c59d8b.js.map