"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[877],{627:function(t,n,e){e.d(n,{Hq:function(){return d},xc:function(){return l},Y5:function(){return p},Hx:function(){return f},Tg:function(){return s}});var r=e(5861),o=e(7757),a=e.n(o),i=e(340),c=e.p+"static/media/images.f1f85d59b86edd2736c8.jpg";i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"8fb08ce7c4baf0eda528d5cdd76e2668",include_adult:!1};var u="https://image.tmdb.org/t/p/w500",s=function(){var t=(0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.Z.get("/trending/all/day?").then((function(t){return t.data.results.map((function(t){var n=t.id,e=t.title,r=t.poster_path;return{id:n,title:e,poster:u+r}}))})).catch((function(t){console.log(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.Z.get("/search/movie?query=".concat(n)).then((function(t){return t.data.results.map((function(t){var n=t.id,e=t.title,r=t.poster_path;return{id:n,title:e,poster:u+r}}))})).catch((function(t){console.log(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(t){return i.Z.get("/movie/".concat(t,"?")).then((function(t){var n=t.data,e=n.id,r=n.poster_path,o=n.title,a=n.release_date,i=n.vote_average,c=n.overview,s=n.genres;return{id:e,poster:u+r,title:o,releaseYear:new Date(a).getFullYear(),userScore:Math.round(10*i),overview:c,genres:s}})).catch((function(t){console.log(t.message)}))},l=function(t){return i.Z.get("/movie/".concat(t,"/credits?")).then((function(t){return t.data.cast.map((function(t){var n=t.id,e=t.name,r=t.character,o=t.profile_path;return{id:n,name:e,character:r,photo:o?u+o:c}}))})).catch((function(t){console.log(t.message)}))},f=function(t){return i.Z.get("/movie/".concat(t,"/reviews?")).then((function(t){return t.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}}))})).catch((function(t){console.log(t.message)}))}},9779:function(t,n,e){e.r(n),e.d(n,{default:function(){return _}});var r,o,a,i,c,u,s=e(9439),d=e(627),p=e(7689),l=e(2791),f=e(168),h=e(5867),m=h.ZP.div(r||(r=(0,f.Z)(["\n    max-width: 1300px;\n\n    margin-left: auto;\n    margin-right: auto;\n"]))),g=h.ZP.h2(o||(o=(0,f.Z)(["\n    margin: 0;\n"]))),v=h.ZP.ul(a||(a=(0,f.Z)(["\n    list-style: none;\n\n    padding: 0;\n"]))),x=h.ZP.li(i||(i=(0,f.Z)(["\n    margin-bottom: 15px;\n"]))),b=h.ZP.h3(c||(c=(0,f.Z)(["\n    background-color: #f1f1f1;\n    border-bottom: 1px solid #212529;\n    border: 1px solid #212529;\n\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n\n    margin: 0;\n    padding: 8px 16px;\n\n"]))),Z=h.ZP.p(u||(u=(0,f.Z)(["\n    border-left: 1px solid #212529;\n    border-right: 1px solid #212529;\n    border-bottom: 1px solid #212529;\n\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n\n    margin: 0;\n    padding: 16px;\n"]))),w=e(184),_=function(){var t=(0,p.UO)("movieId").movieId,n=(0,l.useState)([]),e=(0,s.Z)(n,2),r=e[0],o=e[1];return(0,l.useEffect)((function(){(0,d.Hx)(t).then(o)}),[t]),(0,w.jsxs)(m,{children:[(0,w.jsx)(g,{children:"Reviews"}),r.length>0?(0,w.jsx)(v,{children:r.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,w.jsxs)(x,{children:[(0,w.jsx)(b,{children:e}),(0,w.jsx)(Z,{children:r})]},n)}))}):(0,w.jsx)("p",{children:"We don`t have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=877.520d8788.chunk.js.map