(this["webpackJsonpit-kamasutra"]=this["webpackJsonpit-kamasutra"]||[]).push([[0],{106:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.0b5d9161.gif",c=n(1);t.a=function(){return Object(c.jsx)("img",{src:r,alt:"loading"})}},110:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__17MJB",pNum:"Users_pNum__OJC9-"}},123:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3SIki",paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi"}},126:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},147:function(e,t,n){e.exports={friends:"Friends_friends__1-Zf7",images:"Friends_images__2QqNV"}},157:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return v}));var r=n(13),c=n.n(r),a=n(25),s=n(54),i=n(8),u=n(69),o=n(19),l=function(e){return o.c.get("profile/".concat(e)).then((function(e){return e.data}))},d=function(e){return o.c.get("profile/status/".concat(e)).then((function(e){return e.data}))},j=function(e){return o.c.put("profile/status/",{status:e}).then((function(e){return e.data}))},f=function(e){return o.c.put("profile/",e).then((function(e){return e.data}))},b=function(e){var t=new FormData;return t.append("image",e),o.c.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},h={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0442\u044b \u043a\u0430\u043a?",like_count:12},{id:2,message:"\u041c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",like_count:20}],profile:null,status:"",newPostText:""},p={addPostActionCreator:function(e){return{type:"profile/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"profile/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"profile/SET_STATUS",status:e}},deletePost:function(e){return{type:"profile/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"profile/SAVE_PHOTO_SUCCESS",photosUrl:e}}},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(p.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(p.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j(e);case 3:t.sent.resultCode===o.b.Success&&n(p.setStatus(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:(r=t.sent).resultCode===o.b.Success&&n(p.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:if(a=t.sent,s=r().auth.userId,a.resultCode!==o.b.Success){t.next=12;break}if(null==s){t.next=9;break}n(O(s)),t.next=10;break;case 9:throw Error("userId \u043d\u0435 \u043c\u043e\u0436\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!");case 10:t.next=15;break;case 12:return i=a.messages.length>0?a.messages[0]:"Some error",n(Object(u.a)("edit-profile",{_error:i})),t.abrupt("return",Promise.reject(i));case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD-POST":var n={id:Math.floor(500*Math.random()),message:t.newPostText,like_count:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[n].concat(Object(s.a)(e.posts)),newPostText:""});case"profile/SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"profile/SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"profile/SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photosUrl})});case"profile/DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}},158:function(e,t,n){},188:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(54),c=n(8),a={messages:[{id:1,message:"\u043d\u041e\u0440\u043c?"},{id:2,message:"\u043d\u041e\u0440\u043c."},{id:3,message:"\u043d\u041e\u0440\u043c!"}],dialogs:[{id:1,name:"Alexandr"},{id:2,name:"Viktor"},{id:3,name:"Yuri"},{id:4,name:"Vladimir"}]},s={sendMessage:function(e){return{type:"dialogs/SEND_MESSAGE",newMessageBody:e}}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND_MESSAGE":var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:Math.floor(500*Math.random()),message:n}])});default:return e}}},189:function(e,t,n){"use strict";t.a=n.p+"static/media/avatar-placeholder.05262aba.png"},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r,c,a=n(194),s=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"be82d700-54e4-4201-a22e-d509e44f0f71"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},193:function(e,t,n){"use strict";n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return k})),n.d(t,"b",(function(){return L}));var r,c=n(13),a=n.n(c),s=n(25),i=n(54),u=n(8),o=function(){b("pending"),setTimeout(h,3e3)},l=function(e){var t=JSON.parse(e.data);p["messages-received"].forEach((function(e){return e(t)}))},d=function(){return b("ready")},j=function(){console.log("WS ERROR"),b("error")},f=function(){var e,t,n,c;null===(e=r)||void 0===e||e.removeEventListener("close",o),null===(t=r)||void 0===t||t.removeEventListener("message",l),null===(n=r)||void 0===n||n.removeEventListener("open",d),null===(c=r)||void 0===c||c.removeEventListener("error",j)},b=function(e){return p["status-changed"].forEach((function(t){return t(e)}))};function h(){var e,t,n,c,a;f(),null===(e=r)||void 0===e||e.close(),r=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),b("pending"),null===(t=r)||void 0===t||t.addEventListener("close",o),null===(n=r)||void 0===n||n.addEventListener("message",l),null===(c=r)||void 0===c||c.addEventListener("open",d),null===(a=r)||void 0===a||a.addEventListener("error",j)}var p={"messages-received":[],"status-changed":[]},O=function(){h()},m=function(){var e;p["messages-received"]=[],p["status-changed"]=[],f(),null===(e=r)||void 0===e||e.close()},g=function(e,t){return p[e].push(t),function(){p[e]=p[e].filter((function(e){return e!==t}))}},x=function(e,t){p[e]=p[e].filter((function(e){return e!==t}))},v=function(e){var t;null===(t=r)||void 0===t||t.send(e)},S=n(374),_={messages:[],status:"pending"},E=function(e){return{type:"chat/MESSAGES_RECEIVED",payload:{messages:e}}},w=function(e){return{type:"chat/STATUS_CHANGED",payload:{status:e}}},y=null,C=function(e){return null===y&&(y=function(t){e(E(t))}),y},P=null,T=function(e){return null===P&&(P=function(t){e(w(t))}),P},I=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(),g("messages-received",C(t)),g("status-changed",T(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x("messages-received",C(t)),x("status-changed",T(t)),m();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(e){return Object(s.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(e);case 1:case"end":return t.stop()}}),t)})))};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"chat/MESSAGES_RECEIVED":return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(i.a)(e.messages),Object(i.a)(t.payload.messages.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{id:Object(S.a)()})})))).slice(-100)});case"chat/STATUS_CHANGED":return Object(u.a)(Object(u.a)({},e),{},{status:t.payload.status});default:return e}}},199:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},243:function(e,t,n){},368:function(e,t,n){"use strict";n.r(t);n(158);var r=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,390)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},c=n(0),a=n.n(c),s=n(37),i=n.n(s),u=n(151),o=n(152),l=n(156),d=n(155),j=(n(243),n(34)),f=n(20),b=n(190),h=n(191),p=n(94),O=n(126),m=n(15),g=n(13),x=n.n(g),v=n(25),S=n(8),_=n(19),E=n(69),w=function(){return _.c.get("auth/me").then((function(e){return e.data}))},y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return _.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},C=function(){return _.c.delete("auth/login").then((function(e){return e.data}))},P=function(){return _.c.get("security/get-captcha-url").then((function(e){return e.data}))},T={userId:null,email:null,login:null,isAuth:!1,captchaURL:null},I=function(e,t,n,r){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},k=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaURL:e}}},L=function(){return function(){var e=Object(v.a)(x.a.mark((function e(t){var n,r,c,a,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:(n=e.sent).resultCode===_.b.Success&&(r=n.data,c=r.id,a=r.login,s=r.email,t(I(c,s,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(){return function(){var e=Object(v.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:n=e.sent,r=n.url,t(k(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){return function(){var e=Object(v.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:e.sent.resultCode===_.b.Success&&t(I(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(S.a)(Object(S.a)({},e),t.payload);default:return e}},R=n(84),F=n.n(R),M=n(1),G=function(){var e=Object(m.d)((function(e){return e.auth.captchaURL})),t=Object(m.d)((function(e){return e.auth.isAuth})),n=Object(m.c)();return t?Object(M.jsx)(f.a,{to:"/profile"}):Object(M.jsxs)("div",{children:[Object(M.jsx)("h1",{children:"Login "}),Object(M.jsx)(D,{onSubmit:function(e){var t,r,c,a;console.log(e),n((t=e.email,r=e.password,c=e.rememberMe,a=e.captcha,function(){var e=Object(v.a)(x.a.mark((function e(n){var s,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t,r,c,a);case 2:(s=e.sent).resultCode===_.b.Success?n(L()):s.resultCode===_.a.CaptchaIsRequired?n(U()):(i=s.messages.length>0?s.messages:"Some error",n(Object(E.a)("login",{_error:i})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaURL:e})]})},D=Object(h.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaURL;return Object(M.jsxs)("form",{onSubmit:t,children:[Object(M.jsx)("div",{children:Object(M.jsx)(b.a,{placeholder:"Email",name:"email",required:!0,component:p.a,validate:[O.b]})}),Object(M.jsx)("div",{children:Object(M.jsx)(b.a,{placeholder:"Pass",type:"password",required:!0,name:"password",component:p.a,validate:[O.b]})}),Object(M.jsxs)("div",{children:[Object(M.jsx)(b.a,{type:"checkbox",name:"rememberMe",component:"input"}),"remember me"]}),r&&Object(M.jsx)("img",{src:r,alt:"captcha"}),r&&Object(M.jsx)("div",{children:Object(M.jsx)(b.a,{placeholder:"captcha",required:!0,name:"captcha",component:p.a})}),n&&Object(M.jsx)("div",{style:{padding:"19px 0"},children:Object(M.jsx)("span",{className:F.a.formSummaryError,children:n})}),Object(M.jsx)("div",{children:Object(M.jsx)("button",{children:"Login"})})]})})),z=n(21),H={initialized:!1},q=function(){return{type:"app/INITIALIZED_SUCCESS"}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},W=n(106),B=n(157),K=n(188),Z={qwe:123},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"123":return Object(S.a)(Object(S.a)({},e),{},{qwe:e.qwe+1});default:return e}},X=n(54),Y=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},Q={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _.c.get("/users?page=".concat(e,"&count=").concat(t,"&term=").concat(n,"&friend=").concat(r)).then((function(e){return e.data}))},unfollow:function(e){return _.c.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return _.c.post("follow/".concat(e)).then((function(e){return e.data}))}},$={users:[],pageSize:7,totalUsersCount:0,currentPage:1,isFetching:!1,filter:{term:"",friend:null},followingInProgress:[]},ee=function(e){return{type:"users/FOLLOW",userId:e}},te=function(e){return{type:"users/UNFOLLOW",userId:e}},ne=function(e){return{type:"users/SET_USERS",users:e}},re=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},ce=function(e){return{type:"users/SET_FILTER",payload:e}},ae=function(e){return{type:"users/SET_TOTAL_USERS_COUNT",totalCount:e}},se=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},ie=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ue=function(e,t,n){return function(){var r=Object(v.a)(x.a.mark((function r(c){var a;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(se(!0)),c(re(e)),c(ce(n)),r.next=5,Q.getUsers(e,t,n.term,n.friend);case 5:a=r.sent,c(se(!1)),c(ne(a.items)),c(ae(a.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},oe=function(){var e=Object(v.a)(x.a.mark((function e(t,n,r,c){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ie(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(ie(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:Y(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:Y(e.users,t.userId,"id",{followed:!1})});case"users/SET_USERS":return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case"users/SET_CURRENT_PAGE":return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.totalCount});case"users/TOGGLE_IS_FETCHING":return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case"users/SET_FILTER":return Object(S.a)(Object(S.a)({},e),{},{filter:t.payload});case"users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(X.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},de=n(196),je=n(192),fe=n(193),be=Object(z.c)({profilePage:B.a,dialogsPage:K.a,usersPage:le,sidebar:J,auth:N,app:V,chat:fe.a,form:je.a}),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,pe=Object(z.e)(be,he(Object(z.a)(de.a)));window.__store__=pe;var Oe=pe;function me(e){return function(t){return Object(M.jsx)(a.a.Suspense,{fallback:Object(M.jsx)("div",{children:"\ud83d\udce1\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(M.jsx)(e,Object(S.a)({},t))})}}var ge=n(110),xe=n.n(ge),ve=n(107),Se=n(123),_e=n.n(Se),Ee=n(6),we=n.n(Ee),ye=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalItemsCount,c=e.pageSize,a=Math.ceil(r/c),s=Array(a).fill(1).map((function(e,t){return t+1})),i=Math.ceil(2.5),u=t<=i?0:t-i;s=s.slice(u,t+i);var o=function(e){n(t+e>a?a-i:t+e<0?i:t+e)};return Object(M.jsxs)("div",{className:_e.a.paginator,children:[t>100&&Object(M.jsxs)("span",{onClick:function(){return o(-100)},children:["<100","\xa0"]}),t>10&&Object(M.jsxs)("span",{onClick:function(){return o(-10)},children:["<10","\xa0\xa0\xa0"]}),s.map((function(e){return Object(M.jsxs)("span",{onClick:function(){return n(e)},className:we()(Object(ve.a)({},_e.a.selectedPage,t===e),_e.a.pageNumber),children:[" ",e," "]},e)})),t+10<a&&Object(M.jsxs)("span",{onClick:function(){return o(10)},children:["\xa0\xa0\xa0","10>","\xa0"]}),t+100<a&&Object(M.jsx)("span",{onClick:function(){return o(100)},children:"100>"})]})},Ce=n(189),Pe=function(e){var t=e.user,n=e.follow,r=e.unfollow,c=e.followingProgress;return Object(M.jsxs)("div",{children:[Object(M.jsxs)("span",{children:[Object(M.jsx)("div",{children:Object(M.jsx)(j.c,{to:"/profile/"+t.id,children:Object(M.jsx)("img",{src:null!=t.photos.small?t.photos.small:Ce.a,alt:"avatar",className:xe.a.userPhoto})})}),Object(M.jsx)("div",{children:t.followed?Object(M.jsx)("button",{disabled:c.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(M.jsx)("button",{disabled:c.some((function(e){return e===t.id})),onClick:function(){n(t.id)},children:"Follow"})})]}),Object(M.jsxs)("span",{children:[Object(M.jsx)("div",{children:t.name}),Object(M.jsx)("div",{children:t.status})]}),Object(M.jsxs)("span",{children:[Object(M.jsx)("div",{children:"user.location.city"}),Object(M.jsx)("div",{children:"user.location.country"})]})]})},Te=n(93),Ie=function(e){return e.usersPage.users},ke=function(e){return e.usersPage.pageSize},Le=function(e){return e.usersPage.totalUsersCount},Ue=function(e){return e.usersPage.currentPage},Ae=function(e){return e.usersPage.isFetching},Ne=function(e){return e.usersPage.followingInProgress},Re=function(e){return e.usersPage.filter},Fe=function(e){return{}},Me=a.a.memo((function(e){var t=e.onFilterChanged,n=Object(m.d)(Re);return Object(M.jsx)("div",{children:Object(M.jsx)(Te.c,{enableReinitialize:!0,initialValues:{term:n.term,friend:n.friend},validate:Fe,onSubmit:function(e,n){var r=n.setSubmitting,c={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(M.jsxs)(Te.b,{children:[Object(M.jsx)(Te.a,{type:"text",name:"term"}),Object(M.jsxs)(Te.a,{as:"select",name:"friend",children:[Object(M.jsx)("option",{value:"null",children:"\u0412\u0441\u0435"}),Object(M.jsx)("option",{value:"true",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"}),Object(M.jsx)("option",{value:"false",children:"\u041d\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"})]}),Object(M.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),Ge=n(146),De=function(){var e=Object(m.d)(Le),t=Object(m.d)(Ue),n=Object(m.d)(ke),r=Object(m.d)(Re),a=Object(m.d)(Ie),s=Object(m.d)(Ne),i=Object(m.c)(),u=Object(f.g)();Object(c.useEffect)((function(){var e=Ge.parse(u.location.search.substr(1)),c=t,a=r;switch(e.page&&(c=Number(e.page)),e.term&&(a=Object(S.a)(Object(S.a)({},a),{},{term:e.term})),e.friend){case"null":a=Object(S.a)(Object(S.a)({},a),{},{friend:null});break;case"true":a=Object(S.a)(Object(S.a)({},a),{},{friend:!0});break;case"false":a=Object(S.a)(Object(S.a)({},a),{},{friend:!1})}i(ue(c,n,a))}),[]),Object(c.useEffect)((function(){var e={};r.term&&(e.term=r.term),null!==r.friend&&(e.friend=String(r.friend)),1!==t&&(e.page=String(t)),u.push({pathname:"/users",search:Ge.stringify(e)})}),[r,t]);var o=function(e){i(function(e){return function(){var t=Object(v.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe(n,e,Q.follow.bind(Q),ee);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},l=function(e){i(function(e){return function(){var t=Object(v.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe(n,e,Q.unfollow.bind(Q),te);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(M.jsxs)("div",{children:[Object(M.jsx)(Me,{onFilterChanged:function(e){i(ue(1,n,e))}}),Object(M.jsx)("div",{className:xe.a.pNum,children:Object(M.jsx)(ye,{totalItemsCount:e,currentPage:t,onPageChanged:function(e){i(ue(e,n,r))},pageSize:n})}),Object(M.jsx)("div",{children:a.map((function(e){return Object(M.jsx)(Pe,{user:e,follow:o,unfollow:l,followingProgress:s},e.id)}))})]})},ze=function(){var e=Object(m.d)(Ae);return Object(M.jsxs)(M.Fragment,{children:[e?Object(M.jsx)(W.a,{}):null,Object(M.jsx)(De,{})]})},He=(n(367),n(150)),qe=n(371),Ve=n(372),We=n(124),Be=n(377),Ke=n(378),Ze=n(379),Je=n(147),Xe=n.n(Je),Ye=function(){return Object(M.jsxs)("div",{className:Xe.a.friends,children:[Object(M.jsx)("div",{children:"Friends:"}),Object(M.jsxs)("div",{className:Xe.a.images,children:[Object(M.jsx)("img",{src:"https://i.pravatar.cc/80?img=".concat(Math.floor(50*Math.random())),alt:"ava"}),Object(M.jsx)("img",{src:"https://i.pravatar.cc/80?img=".concat(Math.floor(50*Math.random())),alt:"ava"}),Object(M.jsx)("img",{src:"https://i.pravatar.cc/80?img=".concat(Math.floor(50*Math.random())),alt:"ava"}),Object(M.jsx)("img",{src:"https://i.pravatar.cc/80?img=".concat(Math.floor(50*Math.random())),alt:"ava"}),Object(M.jsx)("img",{src:"https://i.pravatar.cc/80?img=".concat(Math.floor(50*Math.random())),alt:"ava"}),Object(M.jsx)("img",{src:"https://i.pravatar.cc/80?img=".concat(Math.floor(50*Math.random())),alt:"ava"})]})]})},Qe=n(199),$e=n.n(Qe),et=n(375),tt=n(376),nt=n(373),rt=function(e){return e.auth.isAuth},ct=function(e){return e.auth.login},at=function(e){return e.auth.userId},st=function(e){var t=qe.a.Header,n=Object(m.d)(rt),r=Object(m.d)(ct),c=Object(m.d)(at),a=Object(m.c)();return Object(M.jsx)(t,{className:$e.a.header,children:Object(M.jsxs)(et.a,{children:[Object(M.jsx)(tt.a,{span:18,children:Object(M.jsx)("img",{alt:"logo",src:"https://svgx.ru/svg/1775543.svg"})}),Object(M.jsxs)(tt.a,{span:6,children:[Object(M.jsx)(nt.a,{style:{backgroundColor:"#87d068"},icon:Object(M.jsx)(Be.a,{})}),n?Object(M.jsxs)(j.b,{to:"/profile/".concat(c),children:[r,Object(M.jsx)(We.a,{onClick:function(){a(A())},children:"Logout"})]}):Object(M.jsx)(j.b,{to:"/login",children:"Login"})]})]})})},it=He.a.SubMenu,ut=qe.a.Header,ot=qe.a.Content,lt=qe.a.Footer,dt=qe.a.Sider,jt=a.a.lazy((function(){return n.e(4).then(n.bind(null,393))})),ft=a.a.lazy((function(){return n.e(3).then(n.bind(null,392))})),bt=a.a.lazy((function(){return Promise.all([n.e(5),n.e(6)]).then(n.bind(null,391))})),ht=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"catchAllUnhandledErrors",value:function(e){console.log("Some error occured",e.reason)}},{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(M.jsxs)(qe.a,{children:[Object(M.jsxs)(ut,{className:"header",children:[Object(M.jsx)("div",{className:"logo"}),Object(M.jsx)(He.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]}),Object(M.jsx)(st,{})]}),Object(M.jsxs)(ot,{style:{padding:"0 50px"},children:[Object(M.jsxs)(Ve.a,{style:{margin:"16px 0"},children:[Object(M.jsx)(Ve.a.Item,{children:"Home"}),Object(M.jsx)(Ve.a.Item,{children:"List"}),Object(M.jsx)(Ve.a.Item,{children:"App"})]}),Object(M.jsxs)(qe.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(M.jsx)(dt,{className:"site-layout-background",width:200,children:Object(M.jsxs)(He.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"},children:[Object(M.jsxs)(it,{icon:Object(M.jsx)(Be.a,{}),title:"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:[Object(M.jsx)(He.a.Item,{children:Object(M.jsx)(j.b,{to:"/profile",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})},"1"),Object(M.jsx)(He.a.Item,{children:Object(M.jsx)(j.b,{to:"/dialogs",children:"\u0414\u0438\u0430\u043b\u043e\u0433\u0438"})},"2")]},"sub1"),Object(M.jsx)(it,{icon:Object(M.jsx)(Ke.a,{}),title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438",children:Object(M.jsx)(He.a.Item,{children:Object(M.jsx)(j.b,{to:"/users",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u0438"})},"5")},"sub2"),Object(M.jsx)(it,{icon:Object(M.jsx)(Ke.a,{}),title:"\u0427\u0430\u0442",children:Object(M.jsx)(He.a.Item,{children:Object(M.jsx)(j.b,{to:"/chat",children:"\u0427\u0430\u0442"})},"6")},"sub3"),Object(M.jsxs)(it,{icon:Object(M.jsx)(Ze.a,{}),title:"404",children:[Object(M.jsx)(He.a.Item,{children:Object(M.jsx)(j.b,{to:"/news",children:"News"})},"9"),Object(M.jsx)(He.a.Item,{children:Object(M.jsx)(j.b,{to:"/music",children:"Music"})},"10"),Object(M.jsx)(He.a.Item,{children:Object(M.jsx)(j.b,{to:"/settings",children:"Settings"})},"11")]},"sub4"),Object(M.jsx)(Ye,{})]})}),Object(M.jsx)(ot,{style:{padding:"0 24px",minHeight:280},children:Object(M.jsxs)(f.d,{children:[Object(M.jsx)(f.b,{exact:!0,path:"/",render:me(ft)}),Object(M.jsx)(f.b,{path:"/login",render:function(){return Object(M.jsx)(G,{})}}),Object(M.jsx)(f.b,{path:"/chat",render:me(bt)}),Object(M.jsx)(f.b,{path:"/dialogs",render:me(jt)}),Object(M.jsx)(f.b,{path:"/profile/:userId?",render:me(ft)}),Object(M.jsx)(f.b,{path:"/users",render:function(){return Object(M.jsx)(ze,{pageTitle:"Samurai"})}}),Object(M.jsx)(f.b,{path:"*",render:function(){return Object(M.jsxs)("div",{children:["404 ",Object(M.jsx)(We.a,{type:"primary",children:"OK"})]})}})]})})]})]}),Object(M.jsx)(lt,{style:{textAlign:"center"},children:"Samurai Social Network 2021"})]}):Object(M.jsx)(W.a,{})}}]),n}(c.Component),pt=Object(z.d)(f.h,Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=[e(L())];Promise.all([t]).then((function(){e(q())}))}},logout:A}))(ht),Ot=function(){return Object(M.jsx)(j.a,{children:Object(M.jsx)(m.a,{store:Oe,children:Object(M.jsx)(pt,{})})})};i.a.render(Object(M.jsx)(Ot,{}),document.getElementById("root")),r()},84:function(e,t,n){e.exports={formControl:"FormsControl_formControl__1ZwPZ",error:"FormsControl_error__2Zkz5",formSummaryError:"FormsControl_formSummaryError__1PkX-"}},94:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var r=n(8),c=n(141),a=(n(0),n(84)),s=n.n(a),i=n(1),u=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,a=r&&n;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(a?s.a.error:""),children:[Object(i.jsx)("div",{children:c}),a&&Object(i.jsx)("span",{children:r})]})},o=function(e){var t=e.input,n=(e.meta,e.children,Object(c.a)(e,["input","meta","children"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.children,Object(c.a)(e,["input","meta","children"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}}},[[368,1,2]]]);
//# sourceMappingURL=main.bd236d81.chunk.js.map