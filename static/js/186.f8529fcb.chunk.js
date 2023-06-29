"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(r,e,t){t.r(e);var n=t(861),c=t(439),a=t(757),u=t.n(a),o=t(791),s=t(992),i=t(184);e.default=function(r){var e=r.movieId,t=(0,o.useState)([]),a=(0,c.Z)(t,2),p=a[0],v=a[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.Hx)(e);case 3:t=r.sent,v(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log("Error fetching movie reviews:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),0===p.length?(0,i.jsx)("div",{children:"There are no reviews yet."}):(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Reviews"}),(0,i.jsx)("ul",{children:p.map((function(r){return(0,i.jsxs)("li",{children:[(0,i.jsxs)("p",{children:["Author: ",r.author]}),(0,i.jsxs)("p",{children:["Content: ",r.content]})]},r.id)}))})]})}},992:function(r,e,t){t.d(e,{Hx:function(){return l},Y5:function(){return v},_z:function(){return f},vw:function(){return p},y:function(){return i}});var n=t(861),c=t(757),a=t.n(c),u=t(243),o="9c2047c90d98ec66c1e34a0e397d29c4",s="https://api.themoviedb.org/3",i=function(){var r=(0,n.Z)(a().mark((function r(e){var t,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.cast);case 8:return r.prev=8,r.t0=r.catch(0),console.log("Error fetching cast:",r.t0),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(){var e,t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 3:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("Error fetching movies:",r.t0),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(e){var t,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(o));case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),console.log("Error fetching movie details:",r.t0),r.abrupt("return",null);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(e){var t,n,c;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t="".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(encodeURIComponent(e)),r.next=4,u.Z.get(t);case 4:return n=r.sent,c=n.data,r.abrupt("return",c.results);case 9:return r.prev=9,r.t0=r.catch(0),console.log("Error fetching movies:",r.t0),r.abrupt("return",[]);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(a().mark((function r(e){var t,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("Error fetching movie reviews:",r.t0),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.f8529fcb.chunk.js.map