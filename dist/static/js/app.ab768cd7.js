(function(t){function a(a){for(var i,o,u=a[0],s=a[1],l=a[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);c&&c(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],i=!0,u=1;u<e.length;u++){var s=e[u];0!==n[s]&&(i=!1)}i&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var i={},n={app:0},r=[];function o(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(e,i,function(a){return t[a]}.bind(null,i));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=a,u=u.slice();for(var l=0;l<u.length;l++)a(u[l]);var c=s;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-navigation-drawer",{attrs:{app:"",clipped:"",dark:"",color:"#8E2DE2"},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}}),e("v-app-bar",{attrs:{app:"",clippedLeft:"",flat:"",dark:"",color:"#8E2DE2"}},[e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v("janQen")]),e("v-spacer"),e("v-btn",{attrs:{outlined:"",href:"https://github.com/orangekame3/janqen"}},[t._v("GitHub")])],1),e("v-content",[e("v-container",[e("v-card",[e("v-card-title",[t._v("ようこそjanQenへ")]),e("v-card-text",[t._v(" janQenは量子コンピュータとジャンケンするサービスです。"),e("br"),t._v(" 「グー」「チョキ」「パー」のボタンを押してください。"),e("br"),t._v(" すぐにゲームをはじめることができます。"),e("br"),t._v(" janQenの仕組みについて知りたい方は"),e("a",{attrs:{href:"https://github.com/orangekame3/janqen"}},[t._v("こちら")])])],1)],1),e("v-container",[e("v-container",[e("v-row",[e("v-col",[e("p",[t._v("あなた")])]),e("v-col",[e("p",[t._v("量子コンピューター")])])],1),e("v-container",[e("v-row",[e("v-col",[e("v-card",{staticClass:"d-flex child-flex",attrs:{height:"100%"}},[null==t.your_input?e("img",{attrs:{src:t.your_fig}}):t._e(),0==t.your_input?e("img",{attrs:{src:t.gu_fig}}):t._e(),1==t.your_input?e("img",{attrs:{src:t.choki_fig}}):t._e(),2==t.your_input?e("img",{attrs:{src:t.pa_fig}}):t._e()])],1),e("v-col",[e("v-card",{staticClass:"d-flex child-flex",attrs:{height:"100%"}},[null==t.q_output?e("img",{attrs:{src:t.q_fig}}):t._e(),0==t.q_output?e("img",{attrs:{src:t.gu_fig}}):t._e(),1==t.q_output?e("img",{attrs:{src:t.choki_fig}}):t._e(),2==t.q_output?e("img",{attrs:{src:t.pa_fig}}):t._e()])],1)],1)],1)],1),e("v-card",{staticClass:"d-flex justify-space-between mb-6",attrs:{color:t.$vuetify.theme.dark?"grey darken-3":"grey lighten-4",flat:"",tile:""}},[e("v-btn",{staticClass:"ma-2 white--text",attrs:{height:"70px",width:"120",loading:t.loading1,disabled:t.loading1,color:"#8E2DE2"},on:{click:t.gu}},[t._v(" グー ")]),e("v-btn",{staticClass:"ma-2 white--text",attrs:{height:"70px",width:"120",loading:t.loading2,disabled:t.loading2,color:"#8E2DE2"},on:{click:t.tyoki}},[t._v(" チョキ ")]),e("v-btn",{staticClass:"ma-2 white--text",attrs:{height:"70px",width:"120",loading:t.loading3,disabled:t.loading3,color:"#8E2DE2"},on:{click:t.pa}},[t._v(" パー ")])],1),e("v-row",{attrs:{align:"start",justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"mx-auto"},[e("v-toolbar",{attrs:{color:"#8E2DE2",dark:""}},[e("v-toolbar-title",[t._v("Result")])],1),e("v-list",{attrs:{"three-line":""}},[t._l(t.items,(function(a,i){return[e("v-list-item",{key:a.title},[e("v-list-item-content",[e("v-list-item-title",[t._v("この勝負は"+t._s(a.result)+"です。")]),e("v-list-item-subtitle",[t._v(" あなたは"+t._s(a.input)+"を ")]),e("v-list-item-subtitle",[t._v(" 量子コンピューターは"+t._s(a.output)+"を出しました。")])],1)],1),e("v-divider",{key:i,attrs:{inset:a.inset}})]}))],2)],1)],1)],1)],1)],1),e("v-footer",{attrs:{app:"",dark:"",color:"#8E2DE2"}},[t._v(" @orangekame3 ")])],1)},r=[],o=e("bc3a"),u=e.n(o),s={name:"App",data:function(){return{InputText:"",TextLength:null,items:[],loader:null,loading1:!1,loading2:!1,loading3:!1,qout:0,gu_fig:"static/janken_gu.png",choki_fig:"static/janken_choki.png",pa_fig:"static/janken_pa.png",your_fig:"static/yaruki_moeru_man.png",q_fig:"static/computer_ryoushi_quantum.png",load_fig:"static/computer_bar5_load.png",your_input:null,q_output:null,drawer:null}},methods:{gu:function(){var t=this,a={input:0};this.your_input=0,this.q_output=null,this.q_fig=this.load_fig,u.a.post("/api/post",a).then((function(a){t.items.push(a.data),t.q_output=a.data.output_num}))},tyoki:function(){var t=this,a={input:1};this.your_input=1,this.q_output=null,this.q_fig=this.load_fig,u.a.post("/api/post",a).then((function(a){t.items.push(a.data),t.q_output=a.data.output_num}))},pa:function(){var t=this,a={input:2};this.your_input=2,this.q_output=null,this.q_fig=this.load_fig,u.a.post("/api/post",a).then((function(a){t.items.push(a.data),t.q_output=a.data.output_num}))},SendData:function(){var t=this,a=this.InputText;u.a.post("/api/post",a).then((function(a){t.items.push(a.data)}))}},watch:{loader:function(){var t=this,a=this.loader;this[a]=!this[a],setTimeout((function(){return t[a]=!1}),3e3),this.loader=null}}},l=s,c=e("2877"),p=e("6544"),d=e.n(p),f=e("7496"),v=e("40dc"),_=e("5bc1"),g=e("8336"),h=e("b0af"),m=e("99d9"),b=e("62ad"),y=e("a523"),w=e("a75b"),k=e("ce7e"),x=e("553a"),V=e("8860"),j=e("da13"),q=e("5d23"),E=e("f774"),C=e("0fd9"),T=e("2fa4"),O=e("71d9"),D=e("2a7f"),P=Object(c["a"])(l,n,r,!1,null,null,null),S=P.exports;d()(P,{VApp:f["a"],VAppBar:v["a"],VAppBarNavIcon:_["a"],VBtn:g["a"],VCard:h["a"],VCardText:m["a"],VCardTitle:m["b"],VCol:b["a"],VContainer:y["a"],VContent:w["a"],VDivider:k["a"],VFooter:x["a"],VList:V["a"],VListItem:j["a"],VListItemContent:q["a"],VListItemSubtitle:q["b"],VListItemTitle:q["c"],VNavigationDrawer:E["a"],VRow:C["a"],VSpacer:T["a"],VToolbar:O["a"],VToolbarTitle:D["a"]});var I=e("f309");i["a"].use(I["a"]);var L=new I["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:L,render:function(t){return t(S)}}).$mount("#app")}});
//# sourceMappingURL=app.ab768cd7.js.map