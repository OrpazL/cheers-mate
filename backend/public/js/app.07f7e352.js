(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)s=c[l],o[s]&&d.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},o={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0adaa416":"b633e842","chunk-16e0a020":"99010b13","chunk-2b1cb1d4":"f1916b61","chunk-2d22d746":"1d260351","chunk-33ec739b":"3037ae78","chunk-a525c036":"b335b293","chunk-cac604a0":"fcefe8b0"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0adaa416":1,"chunk-16e0a020":1,"chunk-2b1cb1d4":1,"chunk-a525c036":1,"chunk-cac604a0":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0adaa416":"8d846906","chunk-16e0a020":"c727f922","chunk-2b1cb1d4":"133ff10a","chunk-2d22d746":"31d6cfe0","chunk-33ec739b":"31d6cfe0","chunk-a525c036":"d7381845","chunk-cac604a0":"4f444336"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete s[e],f.parentNode.removeChild(f),n(a)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){s[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=a);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e),u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");a.type=r,a.request=s,n[1](a)}o[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"10b6":function(e,t,n){},2670:function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("bc3a"),s=n.n(r),o="/cheer";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new URLSearchParams;for(var n in e)t.set("".concat(n),e[n]);return s.a.get("".concat(o,"?").concat(t)).then(function(e){return e.data})}function c(e){return s.a.get("".concat(o,"/").concat(e)).then(function(e){return e.data})}function i(e){return s.a.post(o,e).then(function(e){return e.data})}function u(e,t){return s.a.put("".concat(o,"/").concat(e),t).then(function(e){return e.data})}function l(e){return s.a.delete("".concat(o,"/").concat(e)).then(function(e){return e.data})}var d="/userCheer";function f(e){return s.a.delete("".concat(d,"/").concat(e)).then(function(e){return e.data})}t["a"]={query:a,getById:c,add:i,update:u,remove:l,removeAttendance:f}},"2d82":function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("bc3a"),s=n.n(r),o="/user";function a(e){return s.a.get("".concat(o,"/").concat(e)).then(function(e){return e.data})}function c(){return s.a.get("".concat(o)).then(function(e){return e.data})}function i(e){return s.a.delete("".concat(o,"/").concat(e)).then(function(e){return e.data})}function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&(t?localStorage.setItem("user",JSON.stringify(e)):sessionStorage.setItem("user",JSON.stringify(e)))}t["a"]={getById:a,remove:i,getAll:c,login:u}},"422d":function(e,t,n){},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840d","./gl.js":"8840d","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id="4678"},"4b87":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("el-card",{staticClass:"card cheer-preview-container",attrs:{"body-style":{padding:"10px"},shadow:"hover"},nativeOn:{click:function(t){e.$router.push("/cheer/"+e.cheer._id)}}},[r("img",{ref:"previewImg",staticClass:"image",attrs:{src:n("b860")}}),r("div",{staticStyle:{padding:"14px"}},[r("span",{staticClass:"location"},[r("i",{staticClass:"fas fa-map-marker-alt"}),e._v("\n        "+e._s(e.cheer.locationName)+"\n      ")]),r("br"),e._l(e.cheer.category,function(t){return r("span",{key:t,staticClass:"categories"},[e._v(e._s(t))])}),r("br"),r("span",[r("i",{staticClass:"fas fa-users"}),e._v(" "+e._s(e.spotsLeft)+" seats left")]),r("div",{staticClass:"bottom clearfix"},[r("time",{staticClass:"time"},[e._v(e._s(e.date(e.cheer)))])])],2)])],1)},s=[],o=(n("cadf"),n("551c"),n("097d"),n("c1df")),a={props:{cheer:{type:Object,default:{}}},mounted:function(){this.cheer.img&&this.cheer.img.length&&(this.$refs.previewImg.src=this.cheer.img)},computed:{spotsLeft:function(){return this.cheer.attendees?this.cheer.spots-this.cheer.attendees.length:this.cheer.spots},relativeDate:function(){return o(this.cheer.date).fromNow()},time:function(){return o(this.cheer.date).format("hh:mm A")}},methods:{date:function(e){var t=e.date;return o(t).format("dddd, ll")}}},c=a,i=(n("a4ab"),n("2877")),u=Object(i["a"])(c,r,s,!1,null,"69091dd7",null);u.options.__file="cheer-preview.vue";t["a"]=u.exports},"4eef":function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("bc3a"),s=n.n(r),o="";function a(e){return s.a.post("".concat(o,"/signup"),e).then(function(e){return e.data})}function c(e){return s.a.put("".concat(o,"/login"),e).then(function(e){return e.data})}function i(){s.a.put("".concat(o,"/logout")).then(function(e){sessionStorage.getItem("user")&&sessionStorage.removeItem("user"),localStorage.getItem("user")&&localStorage.removeItem("user")})}function u(){return s.a.get("".concat(o,"/loggedin")).then(function(e){return e.data})}t["a"]={signup:a,checkUser:c,logout:i,getLoggedInUser:u}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"create-cheer-page"},[n("header",[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/",tag:"div"}},[n("h1",{staticClass:"main-logo"},[e._v("Cheers🍻")])]),n("section",{staticClass:"links"},[n("router-link",{staticClass:"auth-link",attrs:{to:"/cheer/create"}},[e._v("Create a cheer")]),e.currUser?n("div",{staticClass:"links logout"},[n("el-dropdown",[n("span",{staticClass:"el-dropdown-link logged-in-greet",staticStyle:{cursor:"pointer"}},[e._v("Hello "+e._s(e.currUser.nickname)+"\n              "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("span",{on:{click:e.goProfile}},[e._v("Profile")])]),n("el-dropdown-item",[e._v("Other")]),n("el-dropdown-item",[n("span",{on:{click:e.logout}},[e._v("Logout")])])],1)],1)],1):n("div",{staticClass:"links sign"},[n("router-link",{staticClass:"auth-link",attrs:{to:"/signup"}},[e._v("Sign up")]),n("router-link",{staticClass:"auth-link",attrs:{to:"/login"}},[e._v("Log in")])],1)],1)],1)]),n("router-view"),n("footer")],1)},o=[],a={sockets:{connect:function(){console.log("socket connected")},customEmit:function(e){console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')},renderMsg:function(e){this.msgToShow=e},userAttended:function(e){var t=e.userId;this.$store.dispatch("getUserById",t).then(function(e){console.log("".concat(e.nickname," attended to the cheer!"))}).catch(function(e){return console.log("DEBUG:userAttended socket App.vue:userId,err",t,e)})}},data:function(){return{msgToShow:null,logedInUser:[]}},computed:{currUser:function(){return this.logedInUser=this.$store.getters.getUser,this.$store.getters.getUser}},methods:{logout:function(){this.$store.dispatch({type:"logout"}),this.$router.push("/")},goProfile:function(){this.$router.push("/user/".concat(this.logedInUser._id))}},created:function(){console.log("DEBUG:store created:sessionStorage.getItem(user)",sessionStorage.getItem("user")),sessionStorage.getItem("user")?this.$store.dispatch({type:"login",user:JSON.parse(sessionStorage.getItem("user"))}):localStorage.getItem("user")&&this.$store.dispatch({type:"login",user:JSON.parse(localStorage.getItem("user"))})}},c=a,i=(n("5c0b"),n("2877")),u=Object(i["a"])(c,s,o,!1,null,null,null);u.options.__file="App.vue";var l,d=u.exports,f=n("755e"),h=n("5132"),p=n.n(h),m=(n("7f7f"),n("8c4f")),g=n("323e"),b=n.n(g),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home-page-container"},[n("div",{staticClass:"home"},[n("cheer-filter")],1),n("cheer-list")],1)},j=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"cheer-list-container grid",attrs:{id:"list"}},e._l(e.cheers,function(e){return n("div",{key:e._id,staticClass:"cards"},[n("cheer-preview",{attrs:{cheer:e}})],1)}))},y=[],w=n("ade3"),_=n("4b87"),C=n("2670"),S=(l={data:function(){return{}},created:function(){this.loadCheers()},computed:{cheers:function(){return this.$store.getters.getCheers}}},Object(w["a"])(l,"created",function(){var e={sortBy:"date"};this.$store.dispatch({type:"loadFilter",filter:e})}),Object(w["a"])(l,"components",{cheerPreview:_["a"]}),l),O=S,U=Object(i["a"])(O,k,y,!1,null,null,null);U.options.__file="cheer-list.vue";var I=U.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"filter-container"},[n("h2",[e._v("Look for new people to drink with")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.locationName,expression:"locationName"}],staticClass:"filter-input",attrs:{placeholder:"Look by location"},domProps:{value:e.locationName},on:{input:[function(t){t.target.composing||(e.locationName=t.target.value)},e.updateFilter]}})]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],staticClass:"filter-input",attrs:{placeholder:"Date",onfocus:"(this.type='date')",type:"text"},domProps:{value:e.date},on:{change:e.updateFilter,input:function(t){t.target.composing||(e.date=t.target.value)}}})]),n("div",{staticClass:"filter-buttons"},[n("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#list",expression:"'#list'"}],attrs:{type:"warning"},nativeOn:{click:function(t){return e.updateFilter(t)}}},[e._v("Search")]),n("router-link",{attrs:{to:"/map"}},[n("el-button",{attrs:{type:"info"}},[e._v("Look Around")])],1)],1)])},x=[],N=n("c1df"),z={data:function(){return{locationName:"",date:""}},methods:{updateFilter:function(){var e=this.filter;e.locationName=this.locationName,this.$store.dispatch({type:"loadFilter",filter:e})}},computed:{filter:function(){return{fromDate:N(this.date).format("X"),toDate:N(this.date).add(24,"hours").format("X")}}}},E=z,$=(n("6d06"),Object(i["a"])(E,P,x,!1,null,"07bfabfa",null));$.options.__file="cheer-filter.vue";var A=$.exports,B={name:"home",components:{cheerList:I,cheerFilter:A},methods:{sortBy:function(e){var t={sortBy:e};this.$store.dispatch({type:"loadFilter",filter:t})}}},L=B,T=Object(i["a"])(L,v,j,!1,null,null,null);T.options.__file="Home.vue";var F=T.exports;r["default"].use(m["a"]);var D=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/map",name:"map",component:function(){return n.e("chunk-2b1cb1d4").then(n.bind(null,"0212"))}},{path:"/cheer/create",name:"create-cheer",component:function(){return n.e("chunk-33ec739b").then(n.bind(null,"9fe4"))}},{path:"/cheer/:cheerId",name:"cheer",component:function(){return n.e("chunk-cac604a0").then(n.bind(null,"d9c0"))}},{path:"/signup",name:"signup",component:function(){return n.e("chunk-16e0a020").then(n.bind(null,"62c4"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-0adaa416").then(n.bind(null,"dd7b"))}},{path:"/user/:userId",name:"user",component:function(){return n.e("chunk-a525c036").then(n.bind(null,"f9cd"))}}]});D.beforeResolve(function(e,t,n){e.name&&b.a.start(),n()}),D.afterEach(function(e,t){b.a.done()});var q=D,J=n("2f62"),M=n("2d82"),G=n("4eef");r["default"].use(J["a"]);var X=new J["a"].Store({state:{cheers:[],filter:{},position:{lat:32,lng:34},loggedinUser:null},getters:{getCheers:function(e){return e.cheers},getCurrPosition:function(e){return e.position},getUser:function(e){return e.loggedinUser}},mutations:{setCheers:function(e,t){var n=t.cheers;e.cheers=n},setPosition:function(e,t){var n=t.coords;e.position.lat=n.latitude,e.position.lng=n.longitude},setFilter:function(e,t){var n=t.filter;e.filter=n},setUser:function(e,t){var n=t.user,r=t.rememberPref;e.loggedinUser=n,M["a"].login(n,r),console.log("logged in user",e.loggedinUser)}},actions:{loadCheers:function(e){return console.log("loading cheers..."),C["a"].query(e.state.filter).then(function(t){e.commit({type:"setCheers",cheers:t}),console.log("filter",e.state.filter),console.log("cheers loaded:",t)})},getUserById:function(e,t){return M["a"].getById(t)},findCurrPosition:function(e){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){var n=t.coords;e.commit({type:"setPosition",coords:n})}):console.log("cant find location")},loadFilter:function(e,t){var n=t.filter;e.commit({type:"setFilter",filter:n}),e.dispatch({type:"loadCheers"})},signup:function(e,t){var n=t.user;return G["a"].signup(n).then(function(t){e.commit({type:"setUser",user:t})})},login:function(e,t){var n=t.user,r=t.rememberPref;G["a"].getLoggedInUser().then(function(t){t?e.commit({type:"setUser",user:t,rememberPref:r}):G["a"].checkUser(n).then(function(t){e.commit({type:"setUser",user:t,rememberPref:r})})}).catch(function(e){console.log("DEBUG::err",e)})},logout:function(e){e.commit({type:"setUser",user:null}),G["a"].logout()}}}),R=n("9483");Object(R["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("c1c3");var H=n("5c96"),K=n.n(H),Z=(n("0fae"),n("b2d6")),Q=n.n(Z),V=n("4897"),W=n.n(V),Y=n("b92a"),ee=(n("1fe0"),n("bc3a")),te=n.n(ee);W.a.use(Q.a),r["default"].use(K.a),te.a.defaults.withCredentials=!0;var ne=n("f13c");r["default"].use(ne);var re={};r["default"].use(Y["a"],re),r["default"].config.productionTip=!1,r["default"].use(f,{load:{key:"AIzaSyAPXhBZJxk_lQ7GMLmTm_szq6eJ7R7X_Z8",libraries:"places"}}),r["default"].use(new p.a({debug:!0,connection:"http://localhost:3003",vuex:{store:X,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),new r["default"]({router:q,store:X,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(e,t,n){},"6d06":function(e,t,n){"use strict";var r=n("422d"),s=n.n(r);s.a},a4ab:function(e,t,n){"use strict";var r=n("10b6"),s=n.n(r);s.a},b860:function(e,t,n){e.exports=n.p+"img/mates.de582aaa.jpeg"},c1c3:function(e,t,n){}});
//# sourceMappingURL=app.07f7e352.js.map