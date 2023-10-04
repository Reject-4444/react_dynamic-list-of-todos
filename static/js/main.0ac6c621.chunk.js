(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(2),l=c(1),r=(c(11),c(12),c(4)),i=c.n(r),o=c(0),d=function(e){var t=e.todos,c=e.setChosenTodo,s=e.setIsModalLoading,a=e.chosenTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.title,l=e.completed;return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:t}),Object(o.jsx)("td",{className:"is-vcentered",children:l&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:i()({"has-text-danger":!l,"has-text-success":l}),children:n})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e),s(!0)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:i()({"far fa-eye":!Object.keys(a).length,"far fa-eye-slash":Object.keys(a).length})})})})})]},t)}))})]})},j=c(3),b=function(e){var t=e.filter,c=e.setFilter,s=t.query;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{value:t.filteredBy,"data-cy":"statusSelect",onChange:function(e){return c(Object(j.a)(Object(j.a)({},t),{},{filteredBy:e.target.value}))},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:function(e){return c(Object(j.a)(Object(j.a)({},t),{},{query:e.target.value}))}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{onClick:function(){return c(Object(j.a)(Object(j.a)({},t),{},{query:""}))},"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})},u=(c(14),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function h(e){var t="".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api").concat(e,".json");return fetch(t).then((function(e){if(!e.ok)throw new Error("Error");return e.json()}))}var O=function(e){var t=e.todo,c=e.setTodo,s=e.isLoading,a=e.setIsLoading,r=Object(l.useState)({}),d=Object(n.a)(r,2),j=d[0],b=d[1],O=t.userId,m=t.id,x=t.title,f=t.completed;return Object(l.useEffect)((function(){(function(e){return h("/users/".concat(e))})(O).then((function(e){return b(e)})).finally((function(){return a(!1)}))}),[j]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),s?Object(o.jsx)(u,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(m)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c({})}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:x}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(o.jsx)("strong",{className:i()({"has-text-danger":!f,"has-text-success":f}),children:f?"Done":"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(j.email),children:j.name})]})]})]})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)({filteredBy:"all",query:""}),r=Object(n.a)(a,2),i=r[0],j=r[1],m=Object(l.useState)(!1),x=Object(n.a)(m,2),f=x[0],y=x[1],p=Object(l.useState)(!1),v=Object(n.a)(p,2),N=v[0],g=v[1],k=Object(l.useState)(""),C=Object(n.a)(k,2),w=C[0],L=C[1],S=Object(l.useState)({}),T=Object(n.a)(S,2),B=T[0],q=T[1];Object(l.useEffect)((function(){y(!0),h("/todos").then((function(e){return s(e)})).catch((function(e){return L(e.message)})).finally((function(){return y(!1)}))}),[]);var I=Object(l.useMemo)((function(){var e=c.length?c.filter((function(e){var t=e.completed;switch(i.filteredBy){case"all":default:return!0;case"active":return!t;case"completed":return t}})):[],t=i.query;return t?e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})):e}),[i.filteredBy,i.query,c]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(b,{filter:i,setFilter:j})}),f&&!w&&Object(o.jsx)(u,{}),!f&&Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(d,{chosenTodo:B,setIsModalLoading:g,todos:I,setChosenTodo:q})}),w&&Object(o.jsx)("p",{children:w})]})})}),Object.keys(B).length&&Object(o.jsx)(O,{isLoading:N,setIsLoading:g,setTodo:q,todo:B})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0ac6c621.chunk.js.map