(function(t){function e(e){for(var n,r,i=e[0],c=e[1],d=e[2],l=0,u=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(u.length)u.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-26f6bacb":"f50baff2","chunk-2a5342dd":"65828f53","chunk-2d0b30b7":"5fc55148","chunk-2d22d746":"f5382a39","chunk-3b94b4f5":"3935f2ea","chunk-497bfe15":"c7c41907","chunk-bffe0b96":"84c59d8b"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-26f6bacb":1,"chunk-2a5342dd":1,"chunk-3b94b4f5":1,"chunk-497bfe15":1,"chunk-bffe0b96":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-26f6bacb":"7b7f86e5","chunk-2a5342dd":"ce9b7e57","chunk-2d0b30b7":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3b94b4f5":"c7b1311a","chunk-497bfe15":"e80439ab","chunk-bffe0b96":"ce9b7e57"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var d=s[i],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===o))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){d=u[i],l=d.getAttribute("data-href");if(l===n||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],f.parentNode.removeChild(f),a(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=s);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var u=new Error;d=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}o[t]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var u=0;u<d.length;u++)e(d[u]);var f=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},3823:function(t,e,a){"use strict";var n=a("43de"),r=a.n(n);r.a},4360:function(t,e,a){"use strict";var n=a("2b0e"),r=a("2f62");n["default"].use(r["a"]);e["a"]=new r["a"].Store({state:{token:"",id:"",role:"",notices:[]},getters:{id(t){return t.id}},mutations:{id:function(t,e){t.id=e,console.log("(store/index.js)vuex의 id값:"+t.id)},logout:t=>{t.id&&(t.id="",alert("로그아웃성공"))},logincheck:function(t){return!!t.id&&(alert("로그인중"),!0)},updateList(t,e){t.notices=e}},actions:{async fetchNotices({commit:t}){const e=await n["default"].axios.get("/notices/notice");return!0===e.data.success&&t("updateList",e.data.result),e.data},async appendNotice({},t){const e=await n["default"].axios.post("/notices/create",t);return e.data},async fetchNotice({},{id:t}){const e=await n["default"].axios.get(`/notices/${t}`);return e.data},async updateNotice({},{id:t,data:e}){const a=await n["default"].axios.put(`/notices/create/${t}`,e);return a.data},async deleteNotice({},{id:t}){const e=await n["default"].axios.delete(`/notices/${t}`);return e.data}},modules:{}})},"43de":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("div",{staticClass:"container-cus"},[a("router-view",{key:t.$route.fullPath})],1),a("Footer")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer_inner_wrap"},[a("div",{staticClass:"footer_wrap_menu row"},[t._m(0),t._m(1),a("div",{staticClass:"footer_wrap_menu_about col-4 col-md-2"},[a("h4",[t._v("About")]),a("a",{staticClass:"sc_icon_wrap"},[a("div",{staticClass:"sc_icon"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])]),t._v("Git ")])]),a("div",{staticClass:"footer_wrap_menu_social col-4 col-md-2"},[a("h4",[t._v("Social")]),a("a",{staticClass:"sc_icon_wrap"},[a("div",{staticClass:"sc_icon"},[a("svg",{attrs:{"data-v-d79dd928":"","data-v-4a138f5e":"",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 8 16"}},[a("path",{attrs:{"data-v-d79dd928":"","data-v-4a138f5e":"",fill:"#ff4401",d:"M3.02293,16 L3,9 L0,9 L0,6 L3,6 L3,4 C3,1.3008 4.67151,0 7.07938,0 C8.23277,0 9.22406,0.08587 9.51294,0.12425 L9.51294,2.94507 L7.84296,2.94583 C6.53343,2.94583 6.27987,3.5681 6.27987,4.48124 L6.27987,6 L10,6 L9,9 L6.27986,9 L6.27986,16 L3.02293,16 Z"}})])]),t._v("Facebook ")]),a("a",{staticClass:"sc_icon_wrap"},[a("div",{staticClass:"sc_icon"},[a("svg",{attrs:{"data-v-d79dd928":"","data-v-4a138f5e":"",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 16 16"}},[a("g",{attrs:{"data-v-d79dd928":"","data-v-4a138f5e":"",fill:"#ff4401"}},[a("circle",{attrs:{"data-v-d79dd928":"","data-v-4a138f5e":"",cx:"12.145",cy:"3.892",r:"1"}}),a("path",{attrs:{"data-v-d79dd928":"","data-v-4a138f5e":"",d:"M8,12 C5.794,12 4,10.206 4,8 C4,5.794 5.794,4 8,4 C10.206,4 12,5.794 12,8 C12,10.206 10.206,12 8,12 Z M8,6 C6.897,6 6,6.897 6,8 C6,9.103 6.897,10 8,10 C9.103,10 10,9.103 10,8 C10,6.897 9.103,6 8,6 Z"}}),a("path",{attrs:{"data-v-d79dd928":"","data-v-4a138f5e":"",d:"M12,16 L4,16 C1.944,16 0,14.056 0,12 L0,4 C0,1.944 1.944,0 4,0 L12,0 C14.056,0 16,1.944 16,4 L16,12 C16,14.056 14.056,16 12,16 Z M4,2 C3.065,2 2,3.065 2,4 L2,12 C2,12.953 3.047,14 4,14 L12,14 C12.935,14 14,12.935 14,12 L14,4 C14,3.065 12.935,2 12,2 L4,2 Z"}})])])]),t._v("Instagram ")]),a("a",{staticClass:"sc_icon_wrap"},[a("div",{staticClass:"sc_icon"},[a("svg",{attrs:{"data-v-d79dd928":"","data-v-4a138f5e":"",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 16 14"}},[a("path",{attrs:{"data-v-d79dd928":"","data-v-4a138f5e":"",fill:"#ff4401",d:"M16,2 C15.4,2.3 14.8,2.4 14.1,2.5 C14.8,2.1 15.3,1.5 15.5,0.7 C14.9,1.1 14.2,1.3 13.4,1.5 C12.8,0.9 11.9,0.5 11,0.5 C9.3,0.5 7.8,2 7.8,3.8 C7.8,4.1 7.8,4.3 7.9,4.5 C5.2,4.4 2.7,3.1 1.1,1.1 C0.8,1.6 0.7,2.1 0.7,2.8 C0.7,3.9 1.3,4.9 2.2,5.5 C1.7,5.5 1.2,5.3 0.7,5.1 C0.7,5.1 0.7,5.1 0.7,5.1 C0.7,6.7 1.8,8 3.3,8.3 C3,8.4 2.7,8.4 2.4,8.4 C2.2,8.4 2,8.4 1.8,8.3 C2.2,9.6 3.4,10.6 4.9,10.6 C3.8,11.5 2.4,12 0.8,12 C0.5,12 0.3,12 0,12 C1.5,12.9 3.2,13.5 5,13.5 C11,13.5 14.3,8.5 14.3,4.2 C14.3,4.1 14.3,3.9 14.3,3.8 C15,3.3 15.6,2.7 16,2 Z"}})])]),t._v("Twitter ")])])]),t._m(2)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer_wrap_menu_intro col-12 col-md-6"},[a("h4",[t._v("서커스")]),a("p",[t._v("Search, Connect, -Study")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer_wrap_menu_browse col-4 col-md-2"},[a("h4",[t._v("Browse")]),a("a",[t._v("Travel")]),a("a",[t._v("About")]),a("a",[t._v("FAQ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer_wrap_sub"},[a("p",[t._v("© 2019 Circus All right reserved")]),a("div",[a("a",[t._v("Ajou Univ. 웹시스템설계")]),a("a",[t._v("팀프로젝트 5조")])])])}],c={},d=c,l=(a("760c"),a("2877")),u=Object(l["a"])(d,s,i,!1,null,null,null),f=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"nav"}},[a("b-navbar",{staticClass:"py-3 bg-custom4",attrs:{toggleable:"lg",type:"light"}},[a("b-navbar-brand",{staticClass:"text-custom2 h2",attrs:{href:"/"}},[t._v("Cir.cu.s")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",[a("router-link",{staticClass:"text-unset",attrs:{to:"/notice"}},[t._v("스터디모집")])],1),t.id?a("b-nav-item-dropdown",{staticClass:"transition-slow",attrs:{text:"나의스터디",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[a("router-link",{staticClass:"text-unset",attrs:{to:"/st1"}},[t._v("StudyA")])],1),a("b-dropdown-item",{attrs:{href:"#"}},[a("router-link",{staticClass:"text-unset",attrs:{to:"/st2"}},[t._v("StudyB")])],1),a("b-dropdown-item",{attrs:{href:"#"}},[a("router-link",{staticClass:"text-unset",attrs:{to:"/st3"}},[t._v("Studyexample")])],1),a("b-dropdown-item",{attrs:{href:"#"}},[a("router-link",{staticClass:"text-unset",attrs:{to:"/st4"}},[t._v("Studyexmaple2")])],1)],1):t._e()],1),a("b-navbar-nav",{staticClass:"ml-auto"},[t.id?a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("span",[t._v(t._s(t.id)+" 님")])]},proxy:!0}],null,!1,1507117415)},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),a("b-dropdown-item",{on:{click:t.logout}},[t._v("로그아웃")])],1):t._e(),[t.id?t._e():a("div",[a("Login")],1)]],2)],1)],1)],1)},h=[],v=a("578a"),m=a("610b"),b={data(){return{userok:!1,id:""}},components:{Login:v["a"]},created(){console.log("(header.vue)store: "+this.$store.getters.id),this.id=this.$store.getters.id},methods:{logout(){m["a"].clearData("id"),this.$store.commit("logout"),this.id=this.$store.getters.id}}},g=b,w=Object(l["a"])(g,p,h,!1,null,"089e6318",null),C=w.exports,_={name:"home",components:{Navbar:C,Footer:f}},k=_,y=(a("034f"),Object(l["a"])(k,r,o,!1,null,null,null)),x=y.exports,S=a("8c4f"),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"})},j=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))])])},$=[],D={name:"HelloWorld",props:{msg:String}},P=D,E=(a("3823"),Object(l["a"])(P,O,$,!1,null,"6e5887d6",null)),T=E.exports,N={name:"home",components:{HelloWorld:T}},M=N,A=Object(l["a"])(M,L,j,!1,null,null,null),B=A.exports;n["default"].use(S["a"]);const F=[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/notice",name:"Notice",component:function(){return a.e("chunk-497bfe15").then(a.bind(null,"c9d4"))}},{path:"/signup",name:"Signup",component:function(){return a.e("chunk-3b94b4f5").then(a.bind(null,"34c3"))}},{path:"/test",name:"Test",component:function(){return a.e("chunk-2d0b30b7").then(a.bind(null,"2762"))}},{path:"/create",name:"Create",component:function(){return a.e("chunk-26f6bacb").then(a.bind(null,"d879"))}},{path:"/:id",name:"Detail",component:function(){return a.e("chunk-2a5342dd").then(a.bind(null,"c84b"))}},{path:"/create/:id",name:"Edit",component:function(){return a.e("chunk-bffe0b96").then(a.bind(null,"1071"))}}],U=new S["a"]({mode:"history",base:"/",routes:F});U.beforeEach((t,e,a)=>{m["a"].loadDataFromCookie(),a()});var Z=U,q=a("4360"),I=a("bc3a"),J=a.n(I);let z={};const H=J.a.create(z);H.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),H.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=H,window.axios=H,Object.defineProperties(t.prototype,{axios:{get(){return H}},$axios:{get(){return H}}})},n["default"].use(Plugin);Plugin;var W=a("5f5b");a("f9e3"),a("2dd8");n["default"].prototype.$http=J.a,n["default"].use(W["a"]),n["default"].config.productionTip=!1,new n["default"]({router:Z,store:q["a"],render:function(t){return t(x)}}).$mount("#app")},"578a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],staticClass:"pr-3 py-1 text-unset"},[t._v("Login")]),a("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Login"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[a("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[a("b-form-group",{attrs:{label:"ID","label-for":"id-input","invalid-feedback":"ID는 5~12입니다"}},[a("b-form-input",{attrs:{id:"id-input",state:t.iddState,required:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),a("b-form-group",{attrs:{label:"Password","label-for":"pw-input","invalid-feedback":"PW는 5~12입니다"}},[a("b-form-input",{attrs:{id:"pw-input",type:"password",state:t.pwwState,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("div",{staticClass:"justify-content-end row"},[a("span",{staticClass:"small pr-3"},[t._v("설마..아직도..?")]),a("a",{staticClass:"text-unset small mr-3",attrs:{href:"#"},on:{click:t.modaloff}},[t._v("회원가입")])])])],1)},r=[],o=a("610b"),s={computed:{iddState(){return this.id.length>4&&this.id.length<13},pwwState(){return this.password.length>4&&this.password.length<13}},data(){return{id:"",password:""}},methods:{checkFormValidity(){return this.iddState&&this.pwwState},resetModal(){this.id="",this.password=""},handleOk(t){t.preventDefault(),this.handleSubmit()},handleSubmit(){if(!this.checkFormValidity())return;this.$http.post("http://localhost:3000/api/users/login",{id:this.id,password:this.password}).then(t=>{o["a"].saveData("id",t.data.id)});this.$nextTick(()=>{this.$refs.modal.hide(),location.reload()})},modaloff(){this.$refs.modal.hide(),this.$router.push("/signup").catch(t=>{})}}},i=s,c=(a("cc2c"),a("2877")),d=Object(c["a"])(i,n,r,!1,null,null,null);e["a"]=d.exports},"610b":function(t,e,a){"use strict";var n=a("4360"),r={setCookie:(t,e,a)=>{const n=new Date,r=a-324e5-60*(new Date).getTimezoneOffset()*1e3;n.setTime(r),document.cookie=t+"="+e+"; expires="+n.toUTCString()+";path=/"},setCookieObj:(t,e,a)=>{const n=new Date,r=a-324e5-60*(new Date).getTimezoneOffset()*1e3;n.setTime(r),document.cookie=t+"="+JSON.stringify(e)+"; expires="+n.toUTCString()+";path=/"},getCookie:t=>{const e=document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return e?e[2]:null},deleteCookie:t=>{const e=new Date;document.cookie=t+"= ; expires="+e.toUTCString()+"; path=/"}};const o=(t,e)=>{n["a"].commit(t,e),console.log("(data-manager.js)쿠키저장값:"+r.getCookie("id")),console.log("(data-manager.js)store.commit함수 dataName: "+t+", id:"+e)};e["a"]={saveData:(t,e)=>{o(t,e);let a=new Date;a.setDate(a.getDate()+1),r.setCookieObj(t,e,a.toUTCString())},loadDataFromCookie:()=>{const t=JSON.parse(r.getCookie("id"));null!=t&&o("id",t)},clearData:()=>{n["a"].commit("id",[]),r.deleteCookie("id")}}},"760c":function(t,e,a){"use strict";var n=a("c3f5"),r=a.n(n);r.a},"85ec":function(t,e,a){},"8d75":function(t,e,a){},c3f5:function(t,e,a){},cc2c:function(t,e,a){"use strict";var n=a("8d75"),r=a.n(n);r.a}});
//# sourceMappingURL=app.9cb3db9f.js.map