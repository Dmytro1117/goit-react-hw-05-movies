"use strict";(self.webpackChunkgoit_react_hw_06_movies=self.webpackChunkgoit_react_hw_06_movies||[]).push([[881],{197:function(n,t,e){e.d(t,{Hq:function(){return s},Hx:function(){return p},Tg:function(){return u},Y5:function(){return l},xc:function(){return f}});var r=e(861),o=e(757),a=e.n(o),i=e(388);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"4202ba49f9ca3f0cb877db41381d2d2b",include_adult:!1};var c="https://image.tmdb.org/t/p/w500",u=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i.Z.get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:c+r}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i.Z.get("/search/movie?query=".concat(t)).then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:c+r}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(n){return i.Z.get("/movie/".concat(n,"?")).then((function(n){var t=n.data,e=t.id,r=t.poster_path,o=t.title,a=t.release_date,i=t.vote_average,u=t.overview,s=t.genres;return{id:e,poster:c+r,title:o,releaseYear:new Date(a).getFullYear(),userScore:Math.round(10*i),overview:u,genres:s}})).catch((function(n){console.log(n.message)}))},f=function(n){return i.Z.get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast.map((function(n){var t=n.id,e=n.name,r=n.character,o=n.profile_path;return{id:t,name:e,character:r,photo:c+o}}))})).catch((function(n){console.log(n.message)}))},p=function(n){return i.Z.get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).catch((function(n){console.log(n.message)}))}},881:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,o,a,i=e(861),c=e(439),u=e(757),s=e.n(u),l=e(791),f=e(87),p=e(689),d=e(197),h=e(168),g=e(444),v=g.ZP.form(r||(r=(0,h.Z)(["\nmargin-left: auto;\nmargin-right: auto;\n    margin-top: 32px;\n    max-width: 600px;\n    display: flex;\n    justify-content: center;\n    max-width: 400px;;\n"]))),m=g.ZP.input(o||(o=(0,h.Z)(["\n background-color: silver;\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 10px;\n"]))),x=g.ZP.button(a||(a=(0,h.Z)(["\n  display: inline-block;\n  border: 0;\n  cursor: pointer;\n  outline: none;\n   padding: 10px 20px;\n  text-decoration: none;\n  color: black;\n  font-weight: 600;\n  color: white;\n    background-color: orangered;\n  &:hover {\n    color: orange;\n    background-color: gray;\n  }\n"]))),b=e(184),w=function(){var n=(0,l.useState)(""),t=(0,c.Z)(n,2),e=t[0],r=t[1],o=(0,l.useState)([]),a=(0,c.Z)(o,2),u=a[0],h=a[1],g=(0,f.lr)(""),w=(0,c.Z)(g,2),Z=w[0],_=w[1],k=(0,p.TH)(),y=Z.get("query");(0,l.useEffect)((function(){y&&(0,d.Hq)(y).then(h)}),[y]);var j=function(){var n=(0,i.Z)(s().mark((function n(t){var o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==e){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,(0,d.Hq)(e);case 5:o=n.sent,h(o),_({query:e}),r("");case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(v,{onSubmit:j,children:[(0,b.jsx)(m,{type:"text",value:e,onChange:function(n){r(n.target.value)}}),(0,b.jsx)(x,{type:"submit",children:"Find"})]}),u.length>0&&(0,b.jsx)("ul",{children:u.map((function(n){var t=n.id,e=n.title;return(0,b.jsx)("li",{children:(0,b.jsx)(f.rU,{to:"/movies/".concat(t),state:{from:k},children:(0,b.jsx)("h3",{children:e})})},t)}))})]})}}}]);
//# sourceMappingURL=881.cf7ef664.chunk.js.map