(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(2),l=function(e){var n=e.person,t=e.deleteFun;return r.a.createElement("tr",null,r.a.createElement("td",null,n.name),r.a.createElement("td",null,n.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:t},"del")))},i=function(e){var n=e.persons,t=e.filterInput,a=e.deleteFun;return r.a.createElement("table",null,r.a.createElement("tbody",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement(l,{key:e.name,person:e,deleteFun:function(){return a(e.id)}})}))))},m=function(e){var n=e.filterInput,t=e.filterInputChange;return r.a.createElement("div",null,r.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.nameInput,t=e.nameInputChange,a=e.numberInput,u=e.numberInputChange,c=e.addButtonClick;return r.a.createElement("form",null,r.a.createElement("div",null,"Add new contact:",r.a.createElement("input",{value:n,onChange:t}),r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:c},"add")))},f=function(e){var n=e.message,t=e.angry;if(null===n)return null;var a=t?"red":"green",u={borderColor:a,color:a};return r.a.createElement("div",{className:"notification",style:u},n)},d=t(3),p=t.n(d),h="http://localhost:3001/api/persons",g=function(){return p.a.get(h).then((function(e){return e.data}))},b=function(e){return p.a.post(h,e).then((function(e){return e.data}))},E=function(e){return p.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.status})).catch((function(e){return e.response?e.response.status:e}))},v=function(e,n){return p.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},C=function(){Object(a.useEffect)((function(){g().then((function(e){u(e)}))}),[]);var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c={message:null,angry:!1},l=Object(a.useState)(""),d=Object(o.a)(l,2),p=d[0],h=d[1],C=Object(a.useState)(""),I=Object(o.a)(C,2),j=I[0],O=I[1],w=Object(a.useState)(""),y=Object(o.a)(w,2),k=y[0],S=y[1],F=Object(a.useState)(c),A=Object(o.a)(F,2),B=A[0],D=A[1],x=function(e,n){D({message:e,angry:n}),setTimeout((function(){D(c)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(f,{message:B.message,angry:B.angry}),r.a.createElement("h2",null,"Add new"),r.a.createElement(s,{nameInput:p,nameInputChange:function(e){return h(e.target.value)},numberInput:j,numberInputChange:function(e){return O(e.target.value)},addButtonClick:function(e){if(e.preventDefault(),""===p.trim())return!1;if(t.map((function(e){return e.name})).includes(p)){if(!window.confirm("Name ".concat(p," exists, update number?")))return;var n=t.filter((function(e){return e.name===p}))[0].id;v(n,{name:p,number:j,id:n}).then((function(e){u(t.map((function(n){return n.id!==e.id?n:e}))),x("Updated ".concat(p),!1)})).catch((function(e){x("Can't find ".concat(p," on server"),!0)}))}else b({name:p,number:j}).then((function(e){u(t.concat(e)),x("Added ".concat(p),!1)}));h(""),O("")}}),r.a.createElement("h2",null,"Filter"),r.a.createElement(m,{filterInput:k,filterInputChange:function(e){return S(e.target.value)}}),r.a.createElement("h2",null,"Contacts",k.length>0?"*":""),r.a.createElement(i,{persons:t,filterInput:k,deleteFun:function(e){var n=t.filter((function(n){return n.id===e}))[0].name;window.confirm("Delete contact ".concat(n,"?"))&&E(e).then((function(a){204===a?(u(t.filter((function(n){return n.id!==e}))),x("Deleted ".concat(n),!1)):404===a?(x("".concat(n," missing on server, removeing clientside too"),!0),console.log("".concat(n," missing on server, removeing clientside too"),a),u(t.filter((function(n){return n.id!==e})))):x("Something broke, find help!\n(or run the json server)",!0)}))}}))};t(36);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d17e7d22.chunk.js.map