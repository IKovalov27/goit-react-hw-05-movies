"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[30],{627:function(n,t,e){e.d(t,{Hq:function(){return s},xc:function(){return x},Y5:function(){return d},Hx:function(){return l},Tg:function(){return u}});var r=e(5861),a=e(7757),i=e.n(a),o=e(340),p=e.p+"static/media/images.f1f85d59b86edd2736c8.jpg";o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"8fb08ce7c4baf0eda528d5cdd76e2668",include_adult:!1};var c="https://image.tmdb.org/t/p/w500",u=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o.Z.get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:c+r}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o.Z.get("/search/movie?query=".concat(t)).then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:c+r}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(n){return o.Z.get("/movie/".concat(n,"?")).then((function(n){var t=n.data,e=t.id,r=t.poster_path,a=t.title,i=t.release_date,o=t.vote_average,p=t.overview,u=t.genres;return{id:e,poster:c+r,title:a,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*o),overview:p,genres:u}})).catch((function(n){console.log(n.message)}))},x=function(n){return o.Z.get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return{id:t,name:e,character:r,photo:a?c+a:p}}))})).catch((function(n){console.log(n.message)}))},l=function(n){return o.Z.get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).catch((function(n){console.log(n.message)}))}},5310:function(n,t,e){e.r(t),e.d(t,{default:function(){return Y}});var r,a,i,o,p,c,u,s,d,x=e(5861),l=e(9439),h=e(7757),f=e.n(h),g=e(2791),m=e(1087),b=e(7689),v=e(627),w=e(168),Z=e(5867),y=Z.ZP.div(r||(r=(0,w.Z)(["\n  display: block;\n\n  max-width: 320px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media (min-width: 877px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    max-width: 1140px;\n  }\n"]))),k=Z.ZP.form(a||(a=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n\n  margin-top: 25px;\n  margin-bottom: 20px;\n"]))),j=Z.ZP.input(i||(i=(0,w.Z)(["\n  height: 20px;\n  padding: 5px;\n\n  font-size: 15px;\n\n  width: 200px;\n\n  border: none;\n  outline: none;\n\n  padding-left: 8px;\n  padding-right: 4px;\n  margin-right: 10px;\n\n  border-radius: 5px;\n  border: 1px solid #212529;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n\n  transition: 250ms;\n\n  &::placeholder {\n    font-size: 15px;\n  }\n\n  @media (min-width: 877px) {\n    width: 250px;\n  }\n"]))),_=Z.ZP.button(o||(o=(0,w.Z)(["\n  display: block;\n\n  background-color: white;\n  border-radius: 5px;\n  border: 1px solid #212529;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n\n  transition: 250ms;\n\n  cursor: pointer;\n  outline: none;\n  font-weight: 600;\n\n  &:hover {\n    background-color: #212529;\n    color: white;\n    border: 1px solid transparent;\n  }\n"]))),P=Z.ZP.ul(p||(p=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  margin: 0 auto 0 auto;\n  padding: 0;\n"]))),q=Z.ZP.li(c||(c=(0,w.Z)(["\n  display: inline-block;\n  width: 266px;\n  margin: 12px;\n\n  border: 1px solid rgba(0, 0, 0, 0.23);\n  border-radius: 5px;\n\n  transition: 250ms;\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  }\n"]))),S=(0,Z.ZP)(m.rU)(u||(u=(0,w.Z)(["\n  text-decoration: none;\n"]))),H=Z.ZP.div(s||(s=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n\n  padding: 5px;\n  margin: 0px;\n\n  font-size: 20px;\n  color: #212529;\n"]))),z=Z.ZP.img(d||(d=(0,w.Z)(["\n  display: block;\n\n  height: 400px;\n  width: auto;\n  max-width: 266px;\n\n  padding: 0px;\n  margin: 0px;\n\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]))),C=e(184),Y=function(){var n=(0,g.useState)(""),t=(0,l.Z)(n,2),e=t[0],r=t[1],a=(0,g.useState)([]),i=(0,l.Z)(a,2),o=i[0],p=i[1],c=(0,m.lr)(""),u=(0,l.Z)(c,2),s=u[0],d=u[1],h=(0,b.TH)(),w=s.get("query");(0,g.useEffect)((function(){w&&(0,v.Hq)(w).then(p)}),[w]);var Z=function(){var n=(0,x.Z)(f().mark((function n(t){var a;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,(0,v.Hq)(e);case 3:a=n.sent,p(a),d({query:e}),r("");case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(y,{children:[(0,C.jsxs)(k,{onSubmit:Z,children:[(0,C.jsx)(j,{type:"text",value:e,placeholder:"Search a movie",onChange:function(n){r(n.target.value)}}),(0,C.jsx)(_,{type:"submit",children:"Search"})]}),o.length>0&&(0,C.jsx)(P,{children:o.map((function(n){var t=n.id,e=n.title,r=n.poster;return(0,C.jsx)(q,{children:(0,C.jsxs)(S,{to:"/movies/".concat(t),state:{from:h},children:[(0,C.jsx)(z,{src:r,alt:e}),(0,C.jsx)(H,{children:(0,C.jsx)("h5",{children:e})})]})},t)}))})]})})}}}]);
//# sourceMappingURL=30.608459f2.chunk.js.map