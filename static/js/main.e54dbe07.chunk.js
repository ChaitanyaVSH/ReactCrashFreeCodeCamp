(this.webpackJsonpcrashreact=this.webpackJsonpcrashreact||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(14),n(8)),i=n(1),s=n(2),u=n(4),d=n(3),m=(n(15),function(){var e=function(){var t=(new Date).getHours();e=t<12?"Morning":t>=12&&t<17?"afternoon":t>=17&&t<20?"evening":"night";return e}();return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-success text-white"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-1"},"Hey, ",r.a.createElement("br",null)," Good ",e," ",r.a.createElement("br",null)," Chaitu Maverick"),r.a.createElement("p",null,"Affirm the good and the bad will vanish...!")))}),p=(n(16),function(e){var t={margin:10,padding:15,borderLeft:!0===e.todo.completed?"5px solid lightblue":"5px solid lightgreen"};return console.log(e),r.a.createElement("div",{style:t},r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",style:{marginRight:10}})),r.a.createElement("span",null,e.todo.desc))}),h=(n(17),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},this.props.todos.map((function(e){return r.a.createElement(p,{completed:"false",todo:e})})))}}]),n}(a.Component)),b=n(7),f=(n(18),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.onChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value)),e.setState({text:""})},e.onClick=function(t){t.preventDefault(),e.props.onSubmit(e.state.text),e.setState({text:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"text",placeholder:"Add a ToDo",onChange:this.onChange}),r.a.createElement("button",{id:"submit-book",onClick:this.onClick},"Submit")))}}]),n}(a.Component)),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[{desc:"Do not give up on this",completed:!0},{desc:"Slow and steady wins the race",completed:!1},{desc:"Work hard",completed:!0},{desc:"One Day you will be the CEO",completed:!0},{desc:"All this came true",completed:!0}]},e.handleSubmit=function(t){var n={desc:t,completed:!0},a=[].concat(Object(l.a)(e.state.todos),[n]);e.setState({todos:a})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(f,{onSubmit:this.handleSubmit}),r.a.createElement(h,{todos:this.state.todos}))}}]),n}(a.Component);n(19);o.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.e54dbe07.chunk.js.map