(function(){"use strict";var e={8798:function(e,t,n){var r=n(6369),s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("MySearch"),t("MyList")],1)},i=[],o=function(){var e=this,t=e._self._c;return t("div",[t("section",{staticClass:"jumbotron"},[t("h3",{staticClass:"jumbotron-heading"},[e._v("Search Github Users")]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.keyWord,expression:"keyWord"}],attrs:{type:"text",placeholder:"検索したいユーザー名を入力"},domProps:{value:e.keyWord},on:{input:function(t){t.target.composing||(e.keyWord=t.target.value)}}}),e._v("  "),t("button",{on:{click:e.searchUsers}},[e._v("Search")])])])])},a=[],u=n(4161),c={name:"MySearch",data(){return{keyWord:""}},methods:{searchUsers(){this.$bus.$emit("updateListData",{isFirst:!1,isLoading:!0,errMsg:"",users:[]}),u.Z.get(`https://api.github.com/search/users?q=${this.keyWord}`).then((e=>{console.log("成功",e.data.items),this.$bus.$emit("updateListData",{isLoading:!1,errMsg:"",users:e.data.items})}),(e=>{console.log("失败",e.message),this.$bus.$emit("updateListData",{isLoading:!1,errMsg:e.message,users:[]})}))}}},l=c,f=n(1001),h=(0,f.Z)(l,o,a,!1,null,null,null),d=h.exports,v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"row"},[e._l(e.info.users,(function(n){return t("div",{directives:[{name:"show",rawName:"v-show",value:e.info.users.length,expression:"info.users.length"}],key:n.login,staticClass:"card"},[t("a",{attrs:{href:n.html_url,target:"_blank"}},[t("img",{staticStyle:{width:"100px"},attrs:{src:n.avatar_url}})]),t("p",{staticClass:"card-text"},[e._v(e._s(n.login))])])})),t("h1",{directives:[{name:"show",rawName:"v-show",value:e.info.isFirst,expression:"info.isFirst"}]},[e._v("こんにちは")]),t("h1",{directives:[{name:"show",rawName:"v-show",value:e.info.isLoading,expression:"info.isLoading"}]},[e._v("Loading...")]),t("h1",{directives:[{name:"show",rawName:"v-show",value:e.info.errMsg,expression:"info.errMsg"}]},[e._v(e._s(e.info.errMsg))])],2)},p=[],g={name:"MyList",data(){return{info:{isFirst:!0,isLoading:!1,errMsg:"",users:[]}}},mounted(){this.$bus.$on("updateListData",(e=>{this.info={...this.info,...e}}))}},m=g,b=(0,f.Z)(m,v,p,!1,null,"db4fa62a",null),w=b.exports,y={name:"App",components:{MySearch:d,MyList:w},mounted(){console.log("app",this)}},_=y,x=(0,f.Z)(_,s,i,!1,null,null,null),k=x.exports,L=n(3822);const M={},O={},$={};r.ZP.use(L.ZP);const Z=new L.ZP.Store({actions:M,mutations:O,state:$});var C=Z;r.ZP.config.productionTip=!1,new r.ZP({render:e=>e(k),store:C,beforeCreate(){r.ZP.prototype.$bus=this}}).$mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,i){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],s=e[l][1],i=e[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,i<o&&(o=i));if(a){e.splice(l--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,o=r[0],a=r[1],u=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(u)var l=u(n)}for(t&&t(r);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkvuepages"]=self["webpackChunkvuepages"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8798)}));r=n.O(r)})();
//# sourceMappingURL=app.b9f97d65.js.map