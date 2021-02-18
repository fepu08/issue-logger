(this["webpackJsonpissue-logger"]=this["webpackJsonpissue-logger"]||[]).push([[0],{26:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(10),r=c.n(s),l=(c(26),c(27),c(5)),i=c.n(l),o=c(3),d=c(8),u=c(19),j=c(20),b=c(12),h=c(2),O="GET_LOGS",m="ADD_LOG",p="DELETE_LOG",f="SET_CURRENT",x="CLEAR_CURRENT",g="UPDATE_LOG",v="SET_LOADING",N="LOGS_ERROR",y="SEARCH_LOGS",w="GET_TECHS",T="ADD_TECH",E="DELETE_TECH",L="TECH_ERROR",C={logs:null,current:null,loading:!1,error:null},k={techs:null,loading:!1,error:null},S=Object(d.combineReducers)({log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(h.a)(Object(h.a)({},e),{},{logs:t.payload,loading:!1});case m:return Object(h.a)(Object(h.a)({},e),{},{logs:[].concat(Object(b.a)(e.logs),[t.payload]),loading:!1});case p:return Object(h.a)(Object(h.a)({},e),{},{logs:e.logs.filter((function(e){return e.id!==t.payload})),loading:!1});case g:return Object(h.a)(Object(h.a)({},e),{},{logs:e.logs.map((function(e){return e.id===t.payload.id?t.payload:e})),loading:!1});case y:return Object(h.a)(Object(h.a)({},e),{},{logs:t.payload});case f:return Object(h.a)(Object(h.a)({},e),{},{current:t.payload});case x:return Object(h.a)(Object(h.a)({},e),{},{current:null});case v:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case N:return console.error(t.payload),Object(h.a)(Object(h.a)({},e),{},{error:t.payload});default:return e}},tech:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(h.a)(Object(h.a)({},e),{},{techs:t.payload,loading:!1});case T:return Object(h.a)(Object(h.a)({},e),{},{techs:[].concat(Object(b.a)(e.techs),[t.payload]),loading:!1});case E:return Object(h.a)(Object(h.a)({},e),{},{techs:e.techs.filter((function(e){return e.id!==t.payload})),loading:!1});case L:return console.error(t.payload),Object(h.a)(Object(h.a)({},e),{},{error:t.payload});case v:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});default:return e}}}),D=[j.a],R=Object(d.createStore)(S,{},Object(u.composeWithDevTools)(d.applyMiddleware.apply(void 0,D))),_=c(4),A=c.n(_),G=c(7),M=function(){return{type:v}},P=c(0),F=Object(o.b)(null,{searchLogs:function(e){return function(){var t=Object(G.a)(A.a.mark((function t(c){var a,n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,M(),t.next=4,fetch("https://github.com/fepu08/issue-logger/blob/main/db.json/logs?q=".concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,c({type:y,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:N,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.searchLogs,c=Object(a.useRef)("");return Object(P.jsx)("nav",{style:{marginBottom:"30px"},className:"blue",children:Object(P.jsx)("div",{className:"nav-wrapper",children:Object(P.jsx)("form",{children:Object(P.jsxs)("div",{className:"input-field",children:[Object(P.jsx)("input",{id:"search",type:"search",placeholder:"Search Logs",ref:c,onChange:function(e){t(c.current.value)}}),Object(P.jsx)("label",{className:"label-icon",htmlFor:"search",children:Object(P.jsx)("i",{className:"material-icons",children:"search"})}),Object(P.jsx)("i",{className:"material-icons",children:"close"})]})})})})})),H=function(){return Object(P.jsxs)("div",{className:"fixed-action-btn",children:[Object(P.jsx)("a",{href:"#add-log-modal",className:"btn-floating btn-large blue darken-2 modal-trigger",children:Object(P.jsx)("i",{className:"large material-icons",children:"add"})}),Object(P.jsxs)("ul",{children:[Object(P.jsx)("li",{children:Object(P.jsx)("a",{href:"#tech-list-modal",className:"btn-floating green modal-trigger",children:Object(P.jsx)("i",{className:"material-icons",children:"person"})})}),Object(P.jsx)("li",{children:Object(P.jsx)("a",{href:"#add-tech-modal",className:"btn-floating red modal-trigger",children:Object(P.jsx)("i",{className:"material-icons",children:"person_add"})})})]})]})},J=c(21),I=c.n(J),U=Object(o.b)(null,{deleteLog:function(e){return function(){var t=Object(G.a)(A.a.mark((function t(c){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,M(),t.next=4,fetch("https://github.com/fepu08/issue-logger/blob/main/db.json/logs/".concat(e),{method:"DELETE"});case 4:return a=t.sent,t.next=7,a.json();case 7:t.sent,c({type:p,payload:e}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:N,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:f,payload:e}}})((function(e){var t=e.log,c=e.deleteLog,a=e.setCurrent;return Object(P.jsx)("li",{className:"collection-item",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("a",{href:"#edit-log-modal",className:"modal-trigger ".concat(t.attention?"red-text":"blue-text"),onClick:function(){return a(t)},children:t.message}),Object(P.jsx)("br",{}),Object(P.jsxs)("span",{className:"grey-text",children:[Object(P.jsxs)("span",{className:"black-text",children:["ID #",t.id]})," last updated by"," ",Object(P.jsx)("span",{className:"black-text",children:t.tech})," on"," ",Object(P.jsx)(I.a,{format:"MMMM Do YYYY, h:mm:ss a",children:t.time})]}),Object(P.jsx)("a",{href:"#!",onClick:function(){c(t.id),i.a.toast({html:"Log Deleted"})},className:"secondary-content",children:Object(P.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})})),Y=function(){return Object(P.jsx)("div",{className:"progress blue lighten-4",children:Object(P.jsx)("div",{className:"indeterminate blue"})})},B=Object(o.b)((function(e){return{log:e.log}}),{getLogs:function(){return function(){var e=Object(G.a)(A.a.mark((function e(t){var c,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(),e.next=4,fetch("https://github.com/fepu08/issue-logger/blob/main/db.json/logs");case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,t({type:O,payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:N,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.log,c=t.logs,n=t.loading,s=e.getLogs;return Object(a.useEffect)((function(){s()}),[]),n||null===c?Object(P.jsx)(Y,{}):Object(P.jsxs)("ul",{className:"collection with-header",children:[Object(P.jsx)("li",{className:"collection-header",children:Object(P.jsx)("h4",{className:"center",children:"System Logs"})}),n||0!==c.length?c.map((function(e){return Object(P.jsx)(U,{log:e},e.id)})):Object(P.jsx)("p",{className:"center",children:"No logs to show..."})]})})),q=function(){return function(){var e=Object(G.a)(A.a.mark((function e(t){var c,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,W(),e.next=4,fetch("https://github.com/fepu08/issue-logger/blob/main/db.json/techs");case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,t({type:w,payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:L,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},W=function(){return{type:v}},z=function(e){var t=e.tech,c=t.firstName,a=t.lastName;return Object(P.jsx)("li",{className:"collection-item",children:Object(P.jsxs)("div",{children:[c," ",a,Object(P.jsx)("a",{href:"#!",className:"secondary-content",children:Object(P.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})},K=Object(o.b)((function(e){return{tech:e.tech}}),{getTechs:q})((function(e){var t=e.tech,c=t.techs,n=t.loading,s=e.getTechs;return Object(a.useEffect)((function(){s()}),[]),Object(P.jsx)("div",{id:"tech-list-modal",className:"modal",children:Object(P.jsxs)("div",{className:"modal-content",children:[Object(P.jsx)("h4",{children:"Technician List"}),Object(P.jsx)("ul",{className:"collection",children:!n&&null!==c&&c.map((function(e){return Object(P.jsx)(z,{tech:e},e.id)}))})]})})})),Q=c(6),V=Object(o.b)((function(e){return{tech:e.tech}}),{getTechs:q})((function(e){var t=e.tech,c=t.techs,n=t.loading,s=e.getTechs;return Object(a.useEffect)((function(){s()}),[]),!n&&null!==c&&c.map((function(e){return Object(P.jsxs)("option",{value:"".concat(e.firstName," ").concat(e.lastName),children:[e.firstName," ",e.lastName]},e.id)}))})),X={width:"75%",height:"75%"},Z=Object(o.b)(null,{addLog:function(e){return function(){var t=Object(G.a)(A.a.mark((function t(c){var a,n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,M(),t.next=4,fetch("https://github.com/fepu08/issue-logger/blob/main/db.json/logs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,c({type:m,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:N,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addLog,c=Object(a.useState)(""),n=Object(Q.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)(!1),o=Object(Q.a)(l,2),d=o[0],u=o[1],j=Object(a.useState)(""),b=Object(Q.a)(j,2),h=b[0],O=b[1],m=function(){r(""),O(""),u(!1)};return Object(P.jsxs)("div",{id:"add-log-modal",className:"modal",style:X,children:[Object(P.jsxs)("div",{className:"modal-content",children:[Object(P.jsx)("h4",{children:"Enter System Log"}),Object(P.jsx)("div",{className:"row",children:Object(P.jsxs)("div",{className:"input-field",children:[Object(P.jsx)("input",{type:"text",name:"message",value:s,onChange:function(e){return r(e.target.value)}}),Object(P.jsx)("label",{htmlFor:"message",className:"active",children:"Log Message"})]})}),Object(P.jsx)("div",{className:"row",children:Object(P.jsx)("div",{className:"input-field",children:Object(P.jsxs)("select",{name:"tech",value:h,className:"browser-default",onChange:function(e){return O(e.target.value)},children:[Object(P.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(P.jsx)(V,{})]})})}),Object(P.jsx)("div",{className:"row",children:Object(P.jsx)("div",{className:"input-field",children:Object(P.jsx)("p",{children:Object(P.jsxs)("label",{children:[Object(P.jsx)("input",{type:"checkbox",className:"field-in",checked:d,value:d,onChange:function(e){return u(!d)}}),Object(P.jsx)("span",{children:"Needs Attention"})]})})})})]}),Object(P.jsx)("div",{className:"modal-footer",children:Object(P.jsx)("a",{href:"#!",onClick:function(){if(""===s||""===h)i.a.toast({html:"Please enter a message and tech"});else{var e={message:s,attention:d,tech:h,date:new Date};t(e),i.a.toast({html:"Log added by ".concat(h)}),m()}},className:"modal-close waves-effect waves-blue btn",children:"Enter"})})]})})),$={width:"75%",height:"75%"},ee=Object(o.b)((function(e){return{current:e.log.current}}),{updateLog:function(e){return function(){var t=Object(G.a)(A.a.mark((function t(c){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,M(),t.next=4,fetch("https://github.com/fepu08/issue-logger/blob/main/db.json/logs/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return a=t.sent,t.next=7,a.json();case 7:t.sent,c({type:g,payload:e}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:N,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},clearCurrent:function(){return{type:x}}})((function(e){var t=e.current,c=e.updateLog,n=e.clearCurrent,s=Object(a.useState)(""),r=Object(Q.a)(s,2),l=r[0],o=r[1],d=Object(a.useState)(!1),u=Object(Q.a)(d,2),j=u[0],b=u[1],h=Object(a.useState)(""),O=Object(Q.a)(h,2),m=O[0],p=O[1];Object(a.useEffect)((function(){t&&(o(t.message),b(t.attention),p(t.tech))}),[t]);var f=function(){o(""),p(""),b(!1)};return Object(P.jsxs)("div",{id:"edit-log-modal",className:"modal",style:$,children:[Object(P.jsxs)("div",{className:"modal-content",children:[Object(P.jsx)("h4",{children:"Enter System Log"}),Object(P.jsx)("div",{className:"row",children:Object(P.jsx)("div",{className:"input-field",children:Object(P.jsx)("input",{type:"text",name:"message",value:l,onChange:function(e){return o(e.target.value)}})})}),Object(P.jsx)("div",{className:"row",children:Object(P.jsx)("div",{className:"input-field",children:Object(P.jsxs)("select",{name:"tech",value:m,className:"browser-default",onChange:function(e){return p(e.target.value)},children:[Object(P.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(P.jsx)(V,{})]})})}),Object(P.jsx)("div",{className:"row",children:Object(P.jsx)("div",{className:"input-field",children:Object(P.jsx)("p",{children:Object(P.jsxs)("label",{children:[Object(P.jsx)("input",{type:"checkbox",className:"field-in",checked:j,value:j,onChange:function(e){return b(!j)}}),Object(P.jsx)("span",{children:"Needs Attention"})]})})})})]}),Object(P.jsx)("div",{className:"modal-footer",children:Object(P.jsx)("a",{href:"#!",onClick:function(){if(""===l||""===m)i.a.toast({html:"Please enter a message and tech"});else{var e={id:t.id,message:l,attention:j,tech:m,date:new Date};c(e),f(),n(),i.a.toast({html:"Log updated by ".concat(m)})}},className:"modal-close waves-effect waves-blue btn",children:"Enter"})})]})})),te=Object(o.b)(null,{addTech:function(e){return function(){var t=Object(G.a)(A.a.mark((function t(c){var a,n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,W(),t.next=4,fetch("https://github.com/fepu08/issue-logger/blob/main/db.json/techs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,c({type:T,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:L,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addTech,c=Object(a.useState)(""),n=Object(Q.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)(""),o=Object(Q.a)(l,2),d=o[0],u=o[1],j=function(){r(""),u("")};return Object(P.jsxs)("div",{id:"add-tech-modal",className:"modal",children:[Object(P.jsxs)("div",{className:"modal-content",children:[Object(P.jsx)("h4",{children:"New Technician"}),Object(P.jsx)("div",{className:"row",children:Object(P.jsxs)("div",{className:"input-field",children:[Object(P.jsx)("input",{type:"text",name:"firstName",value:s,onChange:function(e){return r(e.target.value)}}),Object(P.jsx)("label",{htmlFor:"firstName",className:"active",children:"First Name"})]})}),Object(P.jsx)("div",{className:"row",children:Object(P.jsxs)("div",{className:"input-field",children:[Object(P.jsx)("input",{type:"text",name:"lastName",value:d,onChange:function(e){return u(e.target.value)}}),Object(P.jsx)("label",{htmlFor:"lastName",className:"active",children:"Last Name"})]})})]}),Object(P.jsx)("div",{className:"modal-footer",children:Object(P.jsx)("a",{href:"#!",onClick:function(){""===s||""===d?i.a.toast({html:"Please enter the first and last name"}):(t({firstName:s,lastName:d}),i.a.toast({html:"".concat(s," ").concat(d," was added as a technician")}),j())},className:"modal-close waves-effect waves-blue btn",children:"Enter"})})]})})),ce=function(){return Object(a.useEffect)((function(){i.a.AutoInit()})),Object(P.jsx)(o.a,{store:R,children:Object(P.jsxs)(a.Fragment,{children:[Object(P.jsx)(F,{}),Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)(H,{}),Object(P.jsx)(Z,{}),Object(P.jsx)(ee,{}),Object(P.jsx)(K,{}),Object(P.jsx)(te,{}),Object(P.jsx)(B,{})]})]})})};r.a.render(Object(P.jsx)(n.a.StrictMode,{children:Object(P.jsx)(ce,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.f2468570.chunk.js.map