(this["webpackJsonpdirectory-app"]=this["webpackJsonpdirectory-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},4:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(13),a=n.n(c),s=(n(24),n(25),n(26),n(0)),l=function(){return Object(s.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Employee Directory"})})})},i=n(14),o=n(15),u=n(16),h=n(19),j=n(18),d=(n(4),n(17)),b=n.n(d),m=function(){return b.a.get("https://randomuser.me/api/?results=25&nat=us")};var p=function(e){var t=e.first+"-"+e.last+"-Photo";return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{alt:t,src:e.picture})}),Object(s.jsxs)("td",{children:[e.first," ",e.last," "]}),Object(s.jsx)("td",{children:e.phone}),Object(s.jsx)("td",{children:e.email})]},e.id)},f=function(e){return Object(s.jsx)("form",{className:"form-group mb-3",children:Object(s.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Enter Employee First or Last Name Here",id:"search-name"})})},O=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={result:[],filteredResult:[],search:""},e.getEmployee=function(){m().then((function(t){e.setState({result:t.data.results,filteredResult:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.value,r=t.target.name;console.log(n),console.log(r);var c=e.state.result.filter((function(e){return n==e.name.first||(n==e.name.last||void 0)}));e.setState(Object(i.a)({filteredResult:c},r,n))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getEmployee()}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(f,{handleInputChange:this.handleInputChange,search:this.state.search}),Object(s.jsxs)("table",{className:"table table-striped",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Image"}),Object(s.jsx)("th",{scope:"col",children:"Name"}),Object(s.jsx)("th",{scope:"col",children:"Phone"}),Object(s.jsx)("th",{scope:"col",children:"Email"})]},"main-head")}),Object(s.jsx)("tbody",{children:this.state.filteredResult.map((function(e){return Object(s.jsx)(p,{id:e.login.username,picture:e.picture.medium,first:e.name.first,last:e.name.last,phone:e.cell,email:e.email})}))})]})]})}}]),n}(r.Component);var x=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(l,{}),Object(s.jsx)(O,{})]})};n(46);a.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.de8aee5c.chunk.js.map