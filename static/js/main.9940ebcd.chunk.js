(this.webpackJsonppopup=this.webpackJsonppopup||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),u=(n(11),n(2)),i=n(3),o=n(4),d=(n(12),n(0));var j=function(e){var t=e.doSave,n=Object(c.useState)(!1),a=Object(o.a)(n,2),s=a[0],r=a[1],j=Object(c.useState)({username:"",password:"",nickName:""}),l=Object(o.a)(j,2),b=l[0],p=l[1],O=b.username,h=b.password,m=b.nickName,v=function(e,t){p((function(n){var c;return Object(i.a)(Object(i.a)({},n),{},Object(u.a)({},t,null===e||void 0===e||null===(c=e.target)||void 0===c?void 0:c.value))}))};return Object(d.jsxs)("div",{className:"add-user-container",children:[Object(d.jsxs)("button",{className:"add-user".concat(s?" open":""),onClick:function(){r(!s)},children:[Object(d.jsx)("span",{children:"+"})," add user"]}),s&&Object(d.jsxs)("div",{className:"add-user-input",children:[Object(d.jsx)("button",{className:"close",onClick:function(e){r(!1)},children:"X"}),Object(d.jsxs)("div",{className:"add-user-row",children:[Object(d.jsx)("input",{value:O,type:"text",placeholder:"username",onInput:function(e){return v(e,"username")}}),Object(d.jsx)("input",{value:h,type:"text",placeholder:"password",onInput:function(e){return v(e,"password")}})]}),Object(d.jsx)("input",{value:m,type:"text",placeholder:"name",className:"add-user-name full-width",onInput:function(e){return v(e,"nickName")}}),Object(d.jsx)("button",{onClick:function(){return t(b)},children:"Add user"})]})]})};n(14);var l=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"heading-container",children:[Object(d.jsx)("h2",{children:"Users"}),Object(d.jsx)(j,{doSave:function(e){a((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(u.a)({},e.username,e))}))}})]}),Object.keys(n).map((function(e){return Object(d.jsx)("span",{children:e},e)}))]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);