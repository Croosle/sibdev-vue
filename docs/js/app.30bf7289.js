(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/sibdev-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"12c1":function(e,t,r){},"17fc":function(e,t,r){},"1b56":function(e,t,r){},"1b5a":function(e,t,r){"use strict";var n=r("12c1"),a=r.n(n);a.a},"33c0":function(e,t,r){"use strict";var n=r("1b56"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("2f62"),o=r("bc3a"),s=r.n(o),i=r("a7fe"),c=r.n(i),u=r("5f5b"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},d=[],p={name:"app"},m=p,f=(r("034f"),r("2877")),b=Object(f["a"])(m,l,d,!1,null,null,null),h=b.exports,g=(r("b0c0"),r("8c4f")),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("Header"),r("b-container",[e.user?r("b-row",e._l(e.user.dashboard,(function(t,n){return r("b-col",{key:n,attrs:{lg:"4"}},[r("b-button",{attrs:{variant:"card",to:"/card/"+e.api[t].url}},[r("h5",[e._v(e._s(e.api[t].name))]),r("p",[e._v(e._s(e.api[t].desc))])])],1)})),1):e._e()],1)],1)},_=[],y=(r("a4d3"),r("4de4"),r("4160"),r("c975"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark mb-4"},[r("b-container",[r("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Dashboard")]),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})]),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),r("b-dropdown",{attrs:{size:"lg",variant:"avatar","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("img",{attrs:{src:"/sibdev/img/avatar.png",alt:""}})]},proxy:!0}])},[e._l(e.$store.state.users,(function(t,n){return r("b-dropdown-item",{key:n,on:{click:function(r){return e.setUser(t.id)}}},[e._v(" "+e._s(t.name)+" "+e._s(t.surname)+" "+e._s(t.middlename)+" ")])})),r("b-dropdown-item",{on:{click:e.logout}},[e._v("Выйти")])],2),r("b-button",{staticClass:"ml-2",attrs:{variant:"settings",to:"/settings"}},[r("img",{attrs:{src:"/sibdev/svg/settings.svg",alt:"",width:"28"}})])],1)],1)],1)},w=[],k={methods:{logout:function(){this.$store.dispatch("removeAuthToken")},setUser:function(e){this.$store.commit("SET_USER",e),this.$router.push("/")}}},j=k,S=(r("1b5a"),Object(f["a"])(j,O,w,!1,null,null,null)),x=S.exports;function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(r,!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $={components:{Header:x},computed:E({},Object(a["b"])({user:"userData",api:"apiData"})),watch:{user:function(){this.generateDashboard()}},mounted:function(){this.user&&this.generateDashboard()},methods:{generateDashboard:function(){0===this.user.dashboard.length&&this.$store.commit("ADD_DASHBOARD",this.generateIds(3,5))},generateIds:function(e,t){var r=[];while(r.length<e){var n=Math.floor(Math.random()*t);-1===r.indexOf(n)&&r.push(n)}return r}}},P=$,U=(r("33c0"),Object(f["a"])(P,v,_,!1,null,"4a67c550",null)),C=U.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("div",{staticClass:"autorisation"},[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("b-form-group",[r("b-form-input",{attrs:{type:"email",required:"",placeholder:"Почта"},model:{value:e.account.email,callback:function(t){e.$set(e.account,"email",t)},expression:"account.email"}})],1),r("b-form-group",[r("b-form-input",{attrs:{type:"password",required:"",placeholder:"Пароль"},model:{value:e.account.password,callback:function(t){e.$set(e.account,"password",t)},expression:"account.password"}})],1),r("b-button",{attrs:{type:"submit",variant:"autorisation"}},[e._v("Вход")])],1)],1)])},A=[],I=(r("0d03"),r("d3b7"),r("ac1f"),r("25f0"),r("5319"),{data:function(){return{account:{email:"",password:""}}},methods:{onSubmit:function(){var e=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5);this.$store.dispatch("setAuthToken",{token:e}),this.$router.push("/")}}}),q=I,B=(r("eefd"),Object(f["a"])(q,T,A,!1,null,"02686c18",null)),R=B.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("Header"),r("b-container",[r("b-list-group",{staticClass:"mb-2"},e._l(this.$store.state.users,(function(t,n){return r("b-list-group-item",{key:n,attrs:{button:""},on:{click:function(r){return e.editUser(t.id)}}},[e.editingUser.id!==t.id?r("span",[e._v(e._s(t.name)+" "+e._s(t.surname)+" "+e._s(t.middlename))]):r("base-form",{attrs:{user:e.editingUser}})],1)})),1),r("base-form",{attrs:{user:e.user}}),r("b-button",{staticClass:"mt-2",on:{click:e.addUser}},[e._v("Добавить")]),e.editingUser.id>=0?r("b-button",{staticClass:"mt-2 ml-2",on:{click:e.saveUser}},[e._v("Сохранить")]):e._e()],1)],1)},M=[],L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",{attrs:{inline:""}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Имя"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Фамилия"},model:{value:e.user.surname,callback:function(t){e.$set(e.user,"surname",t)},expression:"user.surname"}}),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Отчество"},model:{value:e.user.middlename,callback:function(t){e.$set(e.user,"middlename",t)},expression:"user.middlename"}})],1)},G=[],J={props:["user"]},K=J,N=Object(f["a"])(K,L,G,!1,null,null,null),Q=N.exports;function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(r,!0).forEach((function(t){Object(y["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W={components:{BaseForm:Q,Header:x},data:function(){return{user:{id:0,name:"",surname:"",middlename:"",dashboard:[]},editingUser:{}}},computed:F({},Object(a["b"])({id:"userID"})),methods:{addUser:function(){this.user.id=this.id,this.$store.commit("ADD_USER",this.user),this.user={id:"",name:"",surname:"",middlename:"",dashboard:[]}},editUser:function(e){this.editingUser.id!=e&&(this.editingUser=JSON.parse(JSON.stringify(this.$store.state.users[e])))},saveUser:function(){this.$store.commit("UPDATE_USER",this.editingUser),this.editingUser={}}}},V=W,X=Object(f["a"])(V,H,M,!1,null,null,null),Y=X.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("b-container",[r("div",{staticClass:"card__content"},[r(e.name,{tag:"component"})],1)])],1)},ee=[],te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[e._l(e.cards,(function(e,t){return r("b-col",{key:t,staticClass:"mb-4",attrs:{lg:"4"}},[r("img",{attrs:{src:e.download_url,width:"100%"}})])})),r("base-loading",{attrs:{loading:e.loading}}),r("base-error",{attrs:{error:e.error}})],2)},re=[],ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-col",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[r("div",{staticClass:"text-center"},[r("b-spinner",{attrs:{label:"Spinning",small:""}})],1)])},ae=[],oe={props:["loading"]},se=oe,ie=Object(f["a"])(se,ne,ae,!1,null,null,null),ce=ie.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.error?r("b-col",[r("p",[e._v(e._s(e.error))])]):e._e()},le=[],de={props:["error"]},pe=de,me=Object(f["a"])(pe,ue,le,!1,null,null,null),fe=me.exports,be={components:{BaseLoading:ce,BaseError:fe},data:function(){return{cards:[],loading:!0,error:""}},mounted:function(){var e=this;this.axios.get("https://picsum.photos/v2/list?page=2&limit=6").then((function(t){e.cards=t.data,e.loading=!1})).catch((function(t){e.error=t,e.loading=!1}))}},he=be,ge=Object(f["a"])(he,te,re,!1,null,null,null),ve=ge.exports,_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[e._l(e.cards,(function(t,n){return r("b-col",{key:n,staticClass:"mb-4",attrs:{cols:"12"}},[r("h1",[e._v(e._s(t.title))]),r("p",[e._v(e._s(t.description))]),r("b-row",[r("b-col",{attrs:{lg:"3"}},[r("p",[e._v("Director: "+e._s(t.director))])]),r("b-col",{attrs:{lg:"3"}},[r("p",[e._v("Producer: "+e._s(t.producer))])]),r("b-col",{attrs:{lg:"3"}},[r("p",[e._v("Release date: "+e._s(t.release_date))])])],1)],1)})),r("base-loading",{attrs:{loading:e.loading}}),r("base-error",{attrs:{error:e.error}})],2)},ye=[],Oe={components:{BaseLoading:ce,BaseError:fe},data:function(){return{cards:[],loading:!0,error:""}},mounted:function(){var e=this;this.axios.get("https://ghibliapi.herokuapp.com/films/").then((function(t){e.cards=t.data,e.loading=!1})).catch((function(t){e.error=t,e.loading=!1}))}},we=Oe,ke=Object(f["a"])(we,_e,ye,!1,null,null,null),je=ke.exports,Se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[e._l(e.cards,(function(t,n){return r("b-col",{key:n,staticClass:"mb-4",attrs:{lg:"3"}},[r("h4",[e._v(e._s(t.name))]),t.imageUrl?r("img",{attrs:{src:t.imageUrl,width:"100%"}}):r("p",[e._v("The image is missing")])])})),r("base-loading",{attrs:{loading:e.loading}}),r("base-error",{attrs:{error:e.error}})],2)},xe=[],De={components:{BaseLoading:ce,BaseError:fe},data:function(){return{cards:[],loading:!0,error:""}},mounted:function(){var e=this;this.axios.get("https://api.magicthegathering.io/v1/cards?page=1").then((function(t){e.cards=t.data.cards,e.loading=!1})).catch((function(t){e.error=t,e.loading=!1}))}},Ee=De,$e=Object(f["a"])(Ee,Se,xe,!1,null,null,null),Pe=$e.exports,Ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[e._l(e.cards,(function(t,n){return r("b-col",{key:n,staticClass:"mb-4",attrs:{lg:"6"}},[r("h3",[e._v(e._s(t.videoTitle))]),r("iframe",{attrs:{width:"100%",height:"315",src:"https://www.youtube.com/embed/"+t.videoCode,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])})),r("base-loading",{attrs:{loading:e.loading}}),r("base-error",{attrs:{error:e.error}})],2)},Ce=[],Te={components:{BaseLoading:ce,BaseError:fe},data:function(){return{cards:[],loading:!0,error:""}},mounted:function(){var e=this;this.axios.get("https://thereportoftheweek-api.herokuapp.com/reports?between=2018-8-1|2019-1-1").then((function(t){e.cards=t.data,e.loading=!1})).catch((function(t){e.error=t,e.loading=!1}))}},Ae=Te,Ie=Object(f["a"])(Ae,Ue,Ce,!1,null,null,null),qe=Ie.exports,Be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Kanye West quote")]),r("p",[e._v(e._s(e.quote))]),r("base-loading",{attrs:{loading:e.loading}}),r("base-error",{attrs:{error:e.error}}),r("b-button",{on:{click:function(t){return e.generateQuote()}}},[e._v("Another quote")])],1)},Re=[],He={components:{BaseLoading:ce,BaseError:fe},data:function(){return{quote:"",loading:!0,error:""}},mounted:function(){this.generateQuote()},methods:{generateQuote:function(){var e=this;this.axios.get("https://api.kanye.rest/").then((function(t){e.quote=t.data.quote,e.loading=!1})).catch((function(t){e.error=t,e.loading=!1}))}}},Me=He,Le=Object(f["a"])(Me,Be,Re,!1,null,null,null),Ge=Le.exports,Je={components:{"lorem-picsum":ve,ghibli:je,"magic-the-gathering":Pe,"the-report-of-the-week":qe,kanye:Ge,Header:x},data:function(){return{name:this.$route.params.name}}},Ke=Je,Ne=(r("82cc"),Object(f["a"])(Ke,Z,ee,!1,null,null,null)),Qe=Ne.exports;n["default"].use(g["a"]);var ze=[{path:"/login",name:"Login",component:R},{path:"/",name:"Home",component:C,meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:Y,meta:{requiresAuth:!0}},{path:"/card/:name",name:"Card",component:Qe,meta:{requiresAuth:!0}}],Fe=new g["a"]({routes:ze,mode:"history"}),We=Fe;Fe.beforeEach((function(e,t,r){e.meta.requiresAuth?sessionStorage.getItem("authToken")?r():r("/login"):e.name?sessionStorage.getItem("authToken")?r("/"):r():r("/")}));r("f9e3"),r("2dd8");n["default"].use(a["a"]);var Ve=new a["a"].Store({state:{userId:null,users:[],api:[{id:0,name:"Lorem Picsum",url:"lorem-picsum",desc:"Images from Unsplash"},{id:1,name:"Ghibli",url:"ghibli",desc:"Resources from Studio Ghibli films"},{id:2,name:"The report of the week",url:"the-report-of-the-week",desc:"Food & Drink Reviews"},{id:3,name:"Magic the gathering",url:"magic-the-gathering",desc:"Magic The Gathering Game Information"},{id:4,name:"Kanye.rest",url:"kanye",desc:"REST API for random Kanye West quotes"}]},getters:{userData:function(e){return e.users[e.userId]},userID:function(e){return e.users.length>0?e.users[e.users.length-1].id+1:0},apiData:function(e){return e.api}},mutations:{SET_USER:function(e,t){e.userId=t},ADD_USER:function(e,t){e.users.push(t)},ADD_DASHBOARD:function(e,t){e.users[e.userId].dashboard=t},UPDATE_USER:function(e,t){n["default"].set(e.users,t.id,t)}},actions:{setAuthToken:function(e){sessionStorage.setItem("authToken",e)},removeAuthToken:function(){sessionStorage.removeItem("authToken")}}});n["default"].use(u["a"]),n["default"].use(a["a"]),n["default"].use(c.a,s.a),n["default"].config.productionTip=!1,new n["default"]({router:We,store:Ve,render:function(e){return e(h)}}).$mount("#app")},"82cc":function(e,t,r){"use strict";var n=r("ca31"),a=r.n(n);a.a},"85ec":function(e,t,r){},ca31:function(e,t,r){},eefd:function(e,t,r){"use strict";var n=r("17fc"),a=r.n(n);a.a}});
//# sourceMappingURL=app.30bf7289.js.map