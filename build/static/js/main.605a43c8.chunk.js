(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],{17:function(e,t,r){e.exports=r(30)},27:function(e,t,r){},28:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(3),c=r.n(o),s=r(6),i=r(2),l=(r(27),r(4)),u=r(5),h=r(8),d=r(7),E=(r(28),function(e){var t=e.searchChange;return a.a.createElement("div",{className:"tc"},a.a.createElement("input",{type:"search",placeholder:"Search Robots",onChange:t}),a.a.createElement("br",null))}),m=function(e){var t=e.name,r=e.user,n=e.id;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"ph",src:"https://robohash.org/".concat(n+12,"/?100x100")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,r,"@altruy.com")))},b=function(e){var t=e.robots;return a.a.createElement("div",{className:"tc"},t.map((function(e,r){return a.a.createElement(m,{key:r,name:t[r].name,user:t[r].username,id:t[r].id})})))},p=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"75vh",borderBottom:"3vh solid black"}},e.children)},f=function(e){Object(h.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).state={hasError:!1},n}return Object(u.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"There has been an error"):this.props.children}}]),r}(n.Component),g=function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))},v=function(e){Object(h.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.onrequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,r=e.searchField,n=e.onSearchChange,o=e.isPending,c=e.isError,s=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return c?a.a.createElement("h1",{className:"tc"},"There has been an error"):o?a.a.createElement("h1",{className:"tc"},"Loading.. pls wait.."):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{height:"22vh"}},a.a.createElement("h1",{className:"tc"},"Look for Ur friend Robot"),a.a.createElement("div",{style:{paddingBottom:"1rem"}},a.a.createElement(E,{searchChange:n}))),a.a.createElement(p,null,a.a.createElement(f,null,a.a.createElement(b,{robots:s}))))}}]),r}(n.Component),O=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,isError:e.requestRobots.isError}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onrequestRobots:function(){return e(g)}}}))(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(29);var y=r(1),R={searchField:""},S={robots:[],isPending:!1,isError:!1},j=r(15),C=r(16),w=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(y.a)(Object(y.a)({},e),{},{isPending:!0,isError:!1});case"REQUEST_ROBOTS_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{robots:t.payload,isPending:!1,isError:!1});case"REQUEST_ROBOTS_FAILED":return Object(y.a)(Object(y.a)({},e),{},{isError:!0,isPending:!1});default:return e}}}),_=Object(j.createLogger)(),T=Object(i.d)(w,Object(i.a)(C.a,_));c.a.render(a.a.createElement(s.a,{store:T},a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.605a43c8.chunk.js.map