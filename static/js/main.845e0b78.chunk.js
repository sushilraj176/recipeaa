(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),i=c.n(r),s=(c(12),c(4)),o=c.n(s),u=c(6),b=c(2),p=c(7),j=c.n(p),l=c(0),d=function(e){var t=e.title,c=e.ingredients,n=e.image;return Object(l.jsxs)("div",{className:j.a.recipes,children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)("img",{src:n,alt:""}),Object(l.jsx)("ol",{children:c.map((function(e){return Object(l.jsx)("li",{children:e.text})}))})]})};c(15);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/recipeaa",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_APP_ID:"e19e806e",REACT_APP_APP_KEY:"13b1a82fb09dc446b13b4209b01afb93"}));var f=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(b.a)(r,2),s=i[0],p=i[1],j=Object(n.useState)("cakes"),f=Object(b.a)(j,2),O=f[0],h=f[1],m="https://api.edamam.com/search?q=".concat(O,"&app_id=").concat("e19e806e","&app_key=").concat("13b1a82fb09dc446b13b4209b01afb93");Object(n.useEffect)((function(){v()}),[O]);var v=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(s)},className:"search-form",children:[Object(l.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){p(e.target.value)}}),Object(l.jsx)("button",{className:"search-button",type:"submit",children:" Search"})]}),Object(l.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(l.jsx)(d,{Key:e.recipe.label,title:e.recipe.label,ingredients:e.recipe.ingredients,image:e.recipe.image})}))})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),O()},7:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.845e0b78.chunk.js.map