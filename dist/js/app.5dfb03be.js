(function(t){function e(e){for(var n,a,r=e[0],c=e[1],d=e[2],u=0,p=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0738":function(t,e,o){},"0ce7":function(t,e,o){"use strict";o("eaab")},"119f":function(t,e,o){"use strict";o("fa20")},"22f7":function(t,e,o){"use strict";o("54fa")},"2ddf":function(t,e,o){"use strict";o("7d8a")},"340d":function(t,e,o){},"41a1":function(t,e,o){"use strict";o("f8c6")},"54fa":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",{staticClass:"app__title"},[t._v("TodoApp")]),o("app-pages")],1)},s=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pages"},[o("app-sidevar-navi"),o("app-todo")],1)},r=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todos"},[o("app-wrapper",{scopedSlots:t._u([{key:"todos",fn:function(){return[t.todos.length?o("app-list",{attrs:{todos:t.todos}}):o("app-enpty-message")]},proxy:!0}])},["completed"!==t.todoFilter?o("app-resister"):t._e()],1)],1)},d=[],l=(o("b0c0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("main",{staticClass:"main"},[t._t("default"),o("div",{staticClass:"todos"},[t._t("todos")],2)],2)])}),u=[],p={components:{}},f=p,m=(o("22f7"),o("2877")),g=Object(m["a"])(f,l,u,!1,null,"42da3b4e",null),h=g.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo__box"},[o("div",[o("label",{attrs:{for:"inputText"}},[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.targetTodoText,expression:"targetTodoText"}],staticClass:"input__area",attrs:{type:"text",id:"inputText",placeholder:"input your Todo title"},domProps:{value:t.targetTodoText},on:{input:function(e){e.target.composing||(t.targetTodoText=e.target.value)}}}),o("label",{attrs:{for:"inputDetail"}},[t._v("Detail")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.targetTodoDetail,expression:"targetTodoDetail"}],staticClass:"input__area",attrs:{type:"text",id:"inputDetail",placeholder:"input your Todo detail"},domProps:{value:t.targetTodoDetail},on:{input:function(e){e.target.composing||(t.targetTodoDetail=e.target.value)}}})]),""!==t.errorMessage?o("div",{staticClass:"error__area"},[o("p",[t._v(t._s(t.errorMessage))])]):t._e(),o("div",{staticClass:"submit"},[o("div",{staticClass:"todo__detail"},[o("p",[t._v("completed Todos: "+t._s(t.completedTodosLength))]),o("p",[t._v("incomplete Todos: "+t._s(t.incompleteLengthTodosLength))])]),o("button",{staticClass:"submitbtn btn",on:{click:function(e){null===t.targetTodo.id?t.resisterTodo():t.editTodo()}}},[null===t.targetTodo.id?[o("span",[t._v("resister")])]:[o("span",[t._v("update")])]],2)])])},_=[],v={computed:{targetTodo:function(){return this.$store.state.targetTodo},targetTodoText:{get:function(){return this.$store.state.targetTodo.title},set:function(t){return this.$store.dispatch("updateTextValue",{name:"title",value:t})}},targetTodoDetail:{get:function(){return this.$store.state.targetTodo.detail},set:function(t){return this.$store.dispatch("updateTextValue",{name:"detail",value:t})}},errorMessage:function(){return this.$store.state.errorMessage},completedTodosLength:function(){return this.$store.getters.completedLength},incompleteLengthTodosLength:function(){return this.$store.getters.incompleteLength}},methods:{resisterTodo:function(){this.$store.dispatch("resisterTodo")},editTodo:function(t){this.$store.dispatch("editTodo",t)}}},b=v,y=(o("0ce7"),Object(m["a"])(b,T,_,!1,null,"2f54bcf2",null)),C=y.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition-group",{staticClass:"todo__list",class:["all"!==t.todoFilter?"is-large":""],attrs:{mode:"in-out",appear:"",tag:"ul",name:"fadeList"}},t._l(t.todos,(function(t){return o("app-list-item",{key:t.id,attrs:{todo:t}})})),1)},O=[],$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"todo__item"},[o("div",{staticClass:"todo__item__box"},[o("button",{staticClass:"todo__completed btn",class:[!0===t.todo.completed?"is-completed":""],attrs:{type:"button"},on:{click:function(e){return t.changeCompleted(t.todo)}}},[t.todo.completed?[o("span",[t._v("finished")])]:[o("span",[t._v("unfinish")])]],2),o("div",[o("p",{staticClass:"todo__title"},[t._v("Title: "+t._s(t.todo.title))]),o("p",[t._v("Detail: "+t._s(t.todo.detail))])])]),o("div",{staticClass:"todo__option"},[!1===t.todo.completed?o("button",{staticClass:"btn todo__edit__btn",on:{click:function(e){return t.showEditor(t.todo)}}},[t._v("Edit")]):t._e(),o("button",{staticClass:"btn todo__delete__btn",on:{click:function(e){return t.deleteTodo(t.todo.id)}}},[t._v("Delete")])])])},w=[],M=(o("a9e3"),{props:{id:{type:Number},todo:{type:Object,default:function(){return{}}}},computed:{isfinished:function(){return this.todo.completed},todoFilter:function(){return this.$store.state.todoFilter}},methods:{showEditor:function(t){this.$store.dispatch("showEditor",t)},deleteTodo:function(t){this.$store.dispatch("deleteTodo",t)},changeCompleted:function(t){this.$store.dispatch("changeCompleted",t)}}}),j=M,E=(o("a5fd"),Object(m["a"])(j,$,w,!1,null,"175375c4",null)),k=E.exports,F={components:{AppListItem:k},props:{todos:{type:Array,default:function(){return[]}}},computed:{todoFilter:function(){return this.$store.state.todoFilter}},methods:{beforeCreate:function(t){t.style.opacity=0}}},S=F,D=(o("41a1"),Object(m["a"])(S,x,O,!1,null,"6ed612f4",null)),L=D.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"emptyMessage"},[o("p",{staticClass:"emptyMessage__text"},[t._v(t._s(t.emptyMessage))])])},I=[],P={computed:{emptyMessage:function(){return this.$store.state.emptyMessage}}},N=P,J=(o("cf8d"),Object(m["a"])(N,A,I,!1,null,"6388b7e6",null)),W=J.exports,K={components:{AppWrapper:h,AppResister:C,AppList:L,AppEnptyMessage:W},computed:{todoFilter:function(){return this.$store.state.todoFilter},todos:function(){return"all"===this.todoFilter?this.$store.state.todos:this.$store.getters[this.todoFilter]}},watch:{todos:function(t){t.length||this.$store.dispatch("setEmptyMessage",this.todoFilter)},$route:function(t){this.$store.dispatch("setTodoFilter",t.name)}},created:function(){this.$store.dispatch("setTodoFilter",this.$route.name)}},V=K,R=(o("c767"),Object(m["a"])(V,c,d,!1,null,"1ec4b3bd",null)),q=R.exports,z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{staticClass:"sidevar"},[o("ul",{staticClass:"icon__list"},[o("li",{staticClass:"icon",on:{click:t.initTargetTodo}},[o("router-link",{staticClass:"icon__link",attrs:{to:"/",exact:"","active-class":"icon__link__active"}},[o("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:"th-list"}})],1)],1),o("li",{staticClass:"icon",on:{click:t.initTargetTodo}},[o("router-link",{staticClass:"icon__link",attrs:{to:"/completed",exact:"","active-class":"icon__link__active"}},[o("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:"check-circle"}})],1)],1),o("li",{staticClass:"icon",on:{click:t.initTargetTodo}},[o("router-link",{staticClass:"icon__link",attrs:{to:"/incomplete",exact:"","active-class":"icon__link__active"}},[o("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:"bomb"}})],1)],1)])])},B=[],G={methods:{initTargetTodo:function(){this.$store.dispatch("initTargetTodo")}}},H=G,Q=(o("119f"),Object(m["a"])(H,z,B,!1,null,"069259fd",null)),U=Q.exports,X={components:{AppTodo:q,AppSidevarNavi:U}},Y=X,Z=(o("2ddf"),Object(m["a"])(Y,a,r,!1,null,"a817de3c",null)),tt=Z.exports,et={name:"App",components:{AppPages:tt}},ot=et,nt=(o("fd79"),Object(m["a"])(ot,i,s,!1,null,"9b295cde",null)),it=nt.exports,st=o("8c4f"),at=o("2909"),rt=(o("4de4"),o("d81d"),o("7db0"),o("2f62"));n["a"].use(rt["a"]);var ct=new rt["a"].Store({state:{todoKeyWord:"Todos",todos:[],todoFilter:"",targetTodo:{id:null,title:"",detail:"",completed:!1},emptyMessage:"",errorMessage:""},getters:{completed:function(t){return t.todos.filter((function(t){return t.completed}))},incomplete:function(t){return t.todos.filter((function(t){return!t.completed}))},completedLength:function(t,e){return e.completed.length},incompleteLength:function(t,e){return e.incomplete.length}},mutations:{setTodoFilter:function(t,e){t.todoFilter=e},updateTextValue:function(t,e){t.targetTodo[e.name]=e.value},initTargetTodo:function(t){t.targetTodo={id:null,title:"",detail:"",completed:!1}},getItem:function(t){var e,o=JSON.parse(localStorage.getItem(t.todoKeyWord));null!==o&&(e=t.todos).push.apply(e,Object(at["a"])(o))},resisterTodo:function(t,e){t.todos.unshift(e),localStorage.setItem(t.todoKeyWord,JSON.stringify(t.todos))},showError:function(t,e){t.errorMessage=e?e.data:"ネットに接続がされていない、もしくはサーバーとの接続がされていません。ご確認ください。"},showEditor:function(t,e){t.targetTodo=Object.assign({},e)},deleteTodo:function(t,e){var o=t.todos.filter((function(t){return t.id!==e}));t.todos=o,localStorage.setItem(t.todoKeyWord,JSON.stringify(t.todos))},changeCompleted:function(t,e){t.targetTodo.completed=e.completed,localStorage.setItem(t.todoKeyWord,JSON.stringify(t.todos))},setEmptyMessage:function(t,e){t.emptyMessage="completed"===e?"There are no completed TODOs.":"incomplete"===e?"There are no incomplete TODOs.":"There is no registered TODO."},editTodo:function(t,e){t.todos=t.todos.map((function(t){return e.id===t.id?e:t})),localStorage.setItem(t.todoKeyWord,JSON.stringify(t.todos)),t.targetTodo.title="",t.targetTodo.detail=""}},actions:{setTodoFilter:function(t,e){var o=t.commit;o("setTodoFilter",e)},updateTextValue:function(t,e){var o=t.commit,n=e.value,i=e.name;o("updateTextValue",{value:n,name:i})},getItem:function(t){var e=t.commit;e("getItem")},resisterTodo:function(t){var e=t.commit,o=t.state;if(o.targetTodo.title&&o.targetTodo.detail){var n=o.todos.length+1,i=Object.assign({},{title:o.targetTodo.title,detail:o.targetTodo.detail,id:n,completed:!1});e("resisterTodo",i),e("initTargetTodo"),o.errorMessage=""}else e({type:"showError",data:"タイトルと内容はどちらも必須項目です。"})},showEditor:function(t,e){var o=t.commit,n=t.state;o("showEditor",e),n.errorMessage=""},deleteTodo:function(t,e){var o=t.commit,n=t.state;o("deleteTodo",e),o("initTargetTodo"),n.errorMessage=""},changeCompleted:function(t,e){var o=t.commit;e.completed=!e.completed,o("changeCompleted",e),o("initTargetTodo")},setEmptyMessage:function(t,e){var o=t.commit;o("setEmptyMessage",e)},editTodo:function(t){var e=t.commit,o=t.state,n=o.todos.find((function(t){return t.id===o.targetTodo.id}));if(n.title!==o.targetTodo.title||n.detail!==o.targetTodo.detail){var i=Object.assign({},{title:o.targetTodo.title,detail:o.targetTodo.detail,id:o.targetTodo.id,completed:o.targetTodo.completed});e("editTodo",i)}else e("initTargetTodo")},initTargetTodo:function(t){var e=t.commit;e("initTargetTodo")}}}),dt=[{name:"all",path:"/",component:it},{name:"completed",path:"/completed",component:it},{name:"incomplete",path:"/incomplete",component:it}],lt=dt,ut=o("ecee"),pt=o("c074"),ft=o("ad3d"),mt=o("f33e"),gt=o.n(mt);ut["c"].add(pt["c"],pt["b"],pt["a"]),n["a"].component("font-awesome-icon",ft["a"]),n["a"].use(st["a"]);var ht=new st["a"]({routes:lt,mode:"history"});new n["a"]({store:ct,router:ht,css:gt.a,beforeCreate:function(){this.$store.dispatch("getItem")},render:function(t){return t(it)}}).$mount("#app")},"7d8a":function(t,e,o){},a594:function(t,e,o){},a5fd:function(t,e,o){"use strict";o("340d")},b8ee:function(t,e,o){},c767:function(t,e,o){"use strict";o("0738")},cf8d:function(t,e,o){"use strict";o("b8ee")},eaab:function(t,e,o){},f33e:function(t,e,o){},f8c6:function(t,e,o){},fa20:function(t,e,o){},fd79:function(t,e,o){"use strict";o("a594")}});
//# sourceMappingURL=app.5dfb03be.js.map