(this["webpackJsonpit-kamasutra"]=this["webpackJsonpit-kamasutra"]||[]).push([[6],{393:function(e,t,c){"use strict";c.r(t);var s=c(70),n=c(381),a=c(0),r=c(124),j=c(391),i=c(28),u=c(1),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),b=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{}),Object(u.jsx)(O,{})]})},d=function(){var e=Object(a.useState)([]),t=Object(n.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){o.addEventListener("message",(function(e){var t=JSON.parse(e.data);console.log(t),r((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))}))}))}),[]),Object(u.jsx)("div",{style:{height:"500px",overflowY:"auto"},children:c.map((function(e,t){return Object(u.jsx)(l,{message:e},t)}))})},O=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(j.a,{onChange:function(e){s(e.currentTarget.value)},value:c})}),Object(u.jsx)("div",{children:Object(u.jsx)(r.a,{onClick:function(){c&&(o.send(c),s(""))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})},l=function(e){var t=e.message;return Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:t.photo,style:{width:"40px"},alt:"ava"}),Object(u.jsxs)(i.b,{to:"/profile/".concat(t.userId),children:[t.userName," "]}),Object(u.jsx)("br",{}),t.message,Object(u.jsx)("hr",{})]})};t.default=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(b,{})})}}}]);
//# sourceMappingURL=6.474f29fd.chunk.js.map