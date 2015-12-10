// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.todos');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('reagent.core');
goog.require('com.rpl.specter');
goog.require('frontend.ui');
frontend.todos._init_todo = (function frontend$todos$_init_todo(id,title){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"completed?","completed?",946828354),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"",new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});
frontend.todos.init = (function frontend$todos$init(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lolka","lolka",1772726109),(123),new cljs.core.Keyword(null,"field","field",-1302436500),"",new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,frontend.todos._init_todo.call(null,(2),"Take a bath")),frontend.todos._init_todo.call(null,(1),"Finish this project")),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(3)], null);
});
frontend.todos._update_todos_STAR_ = (function frontend$todos$_update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___52537 = arguments.length;
var i__17810__auto___52538 = (0);
while(true){
if((i__17810__auto___52538 < len__17809__auto___52537)){
args__17816__auto__.push((arguments[i__17810__auto___52538]));

var G__52539 = (i__17810__auto___52538 + (1));
i__17810__auto___52538 = G__52539;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__52532_SHARP_){
return cljs.core.apply.call(null,f,p1__52532_SHARP_,args);
}),model);
});

frontend.todos._update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.todos._update_todos_STAR_.cljs$lang$applyTo = (function (seq52533){
var G__52534 = cljs.core.first.call(null,seq52533);
var seq52533__$1 = cljs.core.next.call(null,seq52533);
var G__52535 = cljs.core.first.call(null,seq52533__$1);
var seq52533__$2 = cljs.core.next.call(null,seq52533__$1);
var G__52536 = cljs.core.first.call(null,seq52533__$2);
var seq52533__$3 = cljs.core.next.call(null,seq52533__$2);
return frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__52534,G__52535,G__52536,seq52533__$3);
});
frontend.todos._update_todo = (function frontend$todos$_update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___52545 = arguments.length;
var i__17810__auto___52546 = (0);
while(true){
if((i__17810__auto___52546 < len__17809__auto___52545)){
args__17816__auto__.push((arguments[i__17810__auto___52546]));

var G__52547 = (i__17810__auto___52546 + (1));
i__17810__auto___52546 = G__52547;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.todos._update_todos_STAR_,model,(function (p1__52540_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52540_SHARP_),id);
}),f,args);
});

frontend.todos._update_todo.cljs$lang$maxFixedArity = (3);

frontend.todos._update_todo.cljs$lang$applyTo = (function (seq52541){
var G__52542 = cljs.core.first.call(null,seq52541);
var seq52541__$1 = cljs.core.next.call(null,seq52541);
var G__52543 = cljs.core.first.call(null,seq52541__$1);
var seq52541__$2 = cljs.core.next.call(null,seq52541__$1);
var G__52544 = cljs.core.first.call(null,seq52541__$2);
var seq52541__$3 = cljs.core.next.call(null,seq52541__$2);
return frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic(G__52542,G__52543,G__52544,seq52541__$3);
});
frontend.todos._update_todos = (function frontend$todos$_update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___52551 = arguments.length;
var i__17810__auto___52552 = (0);
while(true){
if((i__17810__auto___52552 < len__17809__auto___52551)){
args__17816__auto__.push((arguments[i__17810__auto___52552]));

var G__52553 = (i__17810__auto___52552 + (1));
i__17810__auto___52552 = G__52553;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return frontend.todos._update_todos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

frontend.todos._update_todos.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.todos._update_todos_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.todos._update_todos.cljs$lang$maxFixedArity = (2);

frontend.todos._update_todos.cljs$lang$applyTo = (function (seq52548){
var G__52549 = cljs.core.first.call(null,seq52548);
var seq52548__$1 = cljs.core.next.call(null,seq52548);
var G__52550 = cljs.core.first.call(null,seq52548__$1);
var seq52548__$2 = cljs.core.next.call(null,seq52548__$1);
return frontend.todos._update_todos.cljs$core$IFn$_invoke$arity$variadic(G__52549,G__52550,seq52548__$2);
});
frontend.todos._find_todo = (function frontend$todos$_find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__52554_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52554_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.todos._remove_todos = (function frontend$todos$_remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__52555_SHARP_){
return cljs.core.remove.call(null,pred,p1__52555_SHARP_);
}));
});
frontend.todos._remove_todo = (function frontend$todos$_remove_todo(model,id){
return frontend.todos._remove_todos.call(null,model,(function (p1__52556_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52556_SHARP_),id);
}));
});
frontend.todos._visibility_spec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"title","title",636505583),"All",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"token","token",-1211463215),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),"Active",new cljs.core.Keyword(null,"href","href",-793805698),"#/active",new cljs.core.Keyword(null,"token","token",-1211463215),"/active"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"href","href",-793805698),"#/completed",new cljs.core.Keyword(null,"token","token",-1211463215),"/completed"], null)], null);
frontend.todos.new_control = (function frontend$todos$new_control(history){
return (function frontend$todos$new_control_$_control(_model_,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),history.getToken()], null));

return dispatch.call(null,new cljs.core.Keyword(null,"sample-action","sample-action",653047762));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52656){if((e52656 instanceof Error)){
var e__20495__auto__ = e52656;
if((e__20495__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__52645 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__52645,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908))){
var token = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),token], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52671){if((e52671 instanceof Error)){
var e__20495__auto____$1 = e52671;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__52645 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__52645,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52672){if((e52672 instanceof Error)){
var e__20495__auto____$2 = e52672;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$2;
}
} else {
throw e52672;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e52671;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52657){if((e52657 instanceof Error)){
var e__20495__auto____$1 = e52657;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52658){if((e52658 instanceof Error)){
var e__20495__auto____$2 = e52658;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__52647 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__52647,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52670){if((e52670 instanceof Error)){
var e__20495__auto____$3 = e52670;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$3;
}
} else {
throw e52670;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52659){if((e52659 instanceof Error)){
var e__20495__auto____$3 = e52659;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52660){if((e52660 instanceof Error)){
var e__20495__auto____$4 = e52660;
if((e__20495__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__52649 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__52649,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52667){if((e52667 instanceof Error)){
var e__20495__auto____$5 = e52667;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
try{var signal_0__52649 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__52649,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52668){if((e52668 instanceof Error)){
var e__20495__auto____$6 = e52668;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__52649 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__52649,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52669){if((e52669 instanceof Error)){
var e__20495__auto____$7 = e52669;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$7;
}
} else {
throw e52669;

}
}} else {
throw e__20495__auto____$6;
}
} else {
throw e52668;

}
}} else {
throw e__20495__auto____$5;
}
} else {
throw e52667;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52661){if((e52661 instanceof Error)){
var e__20495__auto____$5 = e52661;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__52651 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__52651,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52666){if((e52666 instanceof Error)){
var e__20495__auto____$6 = e52666;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$6;
}
} else {
throw e52666;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52662){if((e52662 instanceof Error)){
var e__20495__auto____$6 = e52662;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__52654 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__52654,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52665){if((e52665 instanceof Error)){
var e__20495__auto____$7 = e52665;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$7;
}
} else {
throw e52665;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52663){if((e52663 instanceof Error)){
var e__20495__auto____$7 = e52663;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52664){if((e52664 instanceof Error)){
var e__20495__auto____$8 = e52664;
if((e__20495__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20495__auto____$8;
}
} else {
throw e52664;

}
}} else {
throw e__20495__auto____$7;
}
} else {
throw e52663;

}
}} else {
throw e__20495__auto____$6;
}
} else {
throw e52662;

}
}} else {
throw e__20495__auto____$5;
}
} else {
throw e52661;

}
}} else {
throw e__20495__auto____$4;
}
} else {
throw e52660;

}
}} else {
throw e__20495__auto____$3;
}
} else {
throw e52659;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e52658;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e52657;

}
}} else {
throw e__20495__auto__;
}
} else {
throw e52656;

}
}});
});
frontend.todos.new_reconcile = (function frontend$todos$new_reconcile(history){
return (function frontend$todos$new_reconcile_$_reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"dev-identity","dev-identity",1587672432))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e52780){if((e52780 instanceof Error)){
var e__20495__auto__ = e52780;
if((e__20495__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sample-action","sample-action",653047762))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e52781){if((e52781 instanceof Error)){
var e__20495__auto____$1 = e52781;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__52769 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__52769,new cljs.core.Keyword(null,"navigate","navigate",657596805))){
var token = cljs.core.nth.call(null,action,(1));
cljs.core.println.call(null,"    token =",cljs.core.pr_str.call(null,token));

if(cljs.core._EQ_.call(null,token,history.getToken())){
} else {
cljs.core.println.call(null,"      REPLACING TOKEN TO",cljs.core.pr_str.call(null,token));

history.replaceToken(token);
}

var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (token,action_0__52769,e__20495__auto____$1,e__20495__auto__){
return (function (p1__52673_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__52673_SHARP_),token);
});})(token,action_0__52769,e__20495__auto____$1,e__20495__auto__))
,frontend.todos._visibility_spec));
if(cljs.core.truth_(temp__4423__auto__)){
var match = temp__4423__auto__;
cljs.core.println.call(null,"      route match =",cljs.core.pr_str.call(null,match));

return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(match));
} else {
return model;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e52796){if((e52796 instanceof Error)){
var e__20495__auto____$2 = e52796;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{var action_0__52769 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__52769,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52797){if((e52797 instanceof Error)){
var e__20495__auto____$3 = e52797;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$3;
}
} else {
throw e52797;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e52796;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52782){if((e52782 instanceof Error)){
var e__20495__auto____$2 = e52782;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"add","add",235287739))){
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(model));
if(clojure.string.blank_QMARK_.call(null,title)){
return model;
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),""),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._init_todo.call(null,new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),title)], null));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e52783){if((e52783 instanceof Error)){
var e__20495__auto____$3 = e52783;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__52771 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__52771,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52795){if((e52795 instanceof Error)){
var e__20495__auto____$4 = e52795;
if((e__20495__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$4;
}
} else {
throw e52795;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52784){if((e52784 instanceof Error)){
var e__20495__auto____$4 = e52784;
if((e__20495__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.todos._update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52785){if((e52785 instanceof Error)){
var e__20495__auto____$5 = e52785;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__52773 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__52773,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,frontend.todos._update_todos.call(null,model,((function (id,action_0__52773,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__52674_SHARP_){
return cljs.core.assoc.call(null,p1__52674_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52674_SHARP_),id));
});})(id,action_0__52773,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
),id,((function (id,action_0__52773,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__52675_SHARP_){
return cljs.core.assoc.call(null,p1__52675_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__52675_SHARP_));
});})(id,action_0__52773,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52792){if((e52792 instanceof Error)){
var e__20495__auto____$6 = e52792;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__52773 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__52773,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.todos._find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.todos._remove_todo.call(null,model,id);
} else {
return frontend.todos._update_todos.call(null,model,((function (title,id,action_0__52773,e__20495__auto____$6,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__52676_SHARP_){
return cljs.core.assoc.call(null,p1__52676_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__52773,e__20495__auto____$6,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e52793){if((e52793 instanceof Error)){
var e__20495__auto____$7 = e52793;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
try{var action_0__52773 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__52773,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,model,id,((function (id,action_0__52773,e__20495__auto____$7,e__20495__auto____$6,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__52677_SHARP_){
return cljs.core.assoc.call(null,p1__52677_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__52677_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__52773,e__20495__auto____$7,e__20495__auto____$6,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52794){if((e52794 instanceof Error)){
var e__20495__auto____$8 = e52794;
if((e__20495__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$8;
}
} else {
throw e52794;

}
}} else {
throw e__20495__auto____$7;
}
} else {
throw e52793;

}
}} else {
throw e__20495__auto____$6;
}
} else {
throw e52792;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52786){if((e52786 instanceof Error)){
var e__20495__auto____$6 = e52786;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__52775 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__52775,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.todos._update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52791){if((e52791 instanceof Error)){
var e__20495__auto____$7 = e52791;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$7;
}
} else {
throw e52791;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52787){if((e52787 instanceof Error)){
var e__20495__auto____$7 = e52787;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__52778 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__52778,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52790){if((e52790 instanceof Error)){
var e__20495__auto____$8 = e52790;
if((e__20495__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$8;
}
} else {
throw e52790;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52788){if((e52788 instanceof Error)){
var e__20495__auto____$8 = e52788;
if((e__20495__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.todos._remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52789){if((e52789 instanceof Error)){
var e__20495__auto____$9 = e52789;
if((e__20495__auto____$9 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20495__auto____$9;
}
} else {
throw e52789;

}
}} else {
throw e__20495__auto____$8;
}
} else {
throw e52788;

}
}} else {
throw e__20495__auto____$7;
}
} else {
throw e52787;

}
}} else {
throw e__20495__auto____$6;
}
} else {
throw e52786;

}
}} else {
throw e__20495__auto____$5;
}
} else {
throw e52785;

}
}} else {
throw e__20495__auto____$4;
}
} else {
throw e52784;

}
}} else {
throw e__20495__auto____$3;
}
} else {
throw e52783;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e52782;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e52781;

}
}} else {
throw e__20495__auto__;
}
} else {
throw e52780;

}
}});
});
frontend.todos.view_model = (function frontend$todos$view_model(model){
var todos = reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model));
}));
var visibility = reagent.ratom.make_reaction.call(null,((function (todos){
return (function (){
return new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model));
});})(todos))
);
return cljs.core.assoc.call(null,frontend.ui.track_keys.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"visibility","visibility",1338380893)], null)),new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793),reagent.ratom.make_reaction.call(null,((function (todos,visibility){
return (function (){
return (cljs.core.count.call(null,cljs.core.deref.call(null,todos)) > (0));
});})(todos,visibility))
),new cljs.core.Keyword(null,"todos","todos",630308868),reagent.ratom.make_reaction.call(null,((function (todos,visibility){
return (function (){
return cljs.core.filter.call(null,(function (){var G__52799 = (((cljs.core.deref.call(null,visibility) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,visibility).fqn:null);
switch (G__52799) {
case "all":
return cljs.core.constantly.call(null,true);

break;
case "active":
return cljs.core.complement.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354));

break;
case "completed":
return new cljs.core.Keyword(null,"completed?","completed?",946828354);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,visibility))].join('')));

}
})(),cljs.core.deref.call(null,todos));
});})(todos,visibility))
),new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888),reagent.ratom.make_reaction.call(null,((function (todos,visibility){
return (function (){
return cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.deref.call(null,todos));
});})(todos,visibility))
),new cljs.core.Keyword(null,"active-count","active-count",676410108),reagent.ratom.make_reaction.call(null,((function (todos,visibility){
return (function (){
return cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354)),cljs.core.deref.call(null,todos)));
});})(todos,visibility))
),new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313),reagent.ratom.make_reaction.call(null,((function (todos,visibility){
return (function (){
return (cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.deref.call(null,todos))) > (0));
});})(todos,visibility))
));
});
frontend.todos._enter_key_QMARK_ = (function frontend$todos$_enter_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(13));
});
frontend.todos._escape_key_QMARK_ = (function frontend$todos$_escape_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(27));
});
frontend.todos._view_header = (function frontend$todos$_view_header(field,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52801_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__52801_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__52802_SHARP_){
if(cljs.core.truth_(frontend.todos._enter_key_QMARK_.call(null,p1__52802_SHARP_))){
return dispatch.call(null,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));
} else {
return null;
}
})], null)], null)], null);
});
/**
 * Note that |editing?| is passed only to trigger :component-did-update to set focus on the state change.
 */
frontend.todos._view_todo_input = (function frontend$todos$_view_todo_input(_id_,_title_,_editing_QMARK__,_dispatch_){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (id,title,_editing_QMARK____$1,dispatch){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52803_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__52803_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__52804_SHARP_){
if(cljs.core.truth_(frontend.todos._enter_key_QMARK_.call(null,p1__52804_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.todos._escape_key_QMARK_.call(null,p1__52804_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624),id], null));
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
})], null)], null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return reagent.core.dom_node.call(null,this$).focus();
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return reagent.core.dom_node.call(null,this$).focus();
})], null));
});
frontend.todos._view_todo = (function frontend$todos$_view_todo(p__52805,dispatch){
var map__52808 = p__52805;
var map__52808__$1 = ((((!((map__52808 == null)))?((((map__52808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52808):map__52808);
var _todo_ = map__52808__$1;
var id = cljs.core.get.call(null,map__52808__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__52808__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__52808__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__52808__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__52808,map__52808__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__52808,map__52808__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__52808,map__52808__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__52808,map__52808__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__52808,map__52808__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__52808,map__52808__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.todos._view_todo_list = (function frontend$todos$_view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$todos$_view_todo_list_$_iter__52814(s__52815){
return (new cljs.core.LazySeq(null,(function (){
var s__52815__$1 = s__52815;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__52815__$1);
if(temp__4425__auto__){
var s__52815__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52815__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__52815__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__52817 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__52816 = (0);
while(true){
if((i__52816 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__52816);
cljs.core.chunk_append.call(null,b__52817,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__52818 = (i__52816 + (1));
i__52816 = G__52818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52817),frontend$todos$_view_todo_list_$_iter__52814.call(null,cljs.core.chunk_rest.call(null,s__52815__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52817),null);
}
} else {
var todo = cljs.core.first.call(null,s__52815__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$todos$_view_todo_list_$_iter__52814.call(null,cljs.core.rest.call(null,s__52815__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,todos);
})()], null)], null);
});
frontend.todos._view_footer = (function frontend$todos$_view_footer(active_count,has_completed_todos_QMARK_,visibility,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$todos$_view_footer_$_iter__52831(s__52832){
return (new cljs.core.LazySeq(null,(function (){
var s__52832__$1 = s__52832;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__52832__$1);
if(temp__4425__auto__){
var s__52832__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52832__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__52832__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__52834 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__52833 = (0);
while(true){
if((i__52833 < size__17522__auto__)){
var map__52839 = cljs.core._nth.call(null,c__17521__auto__,i__52833);
var map__52839__$1 = ((((!((map__52839 == null)))?((((map__52839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52839):map__52839);
var key = cljs.core.get.call(null,map__52839__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__52839__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__52839__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__52834,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__52843 = (i__52833 + (1));
i__52833 = G__52843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52834),frontend$todos$_view_footer_$_iter__52831.call(null,cljs.core.chunk_rest.call(null,s__52832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52834),null);
}
} else {
var map__52841 = cljs.core.first.call(null,s__52832__$2);
var map__52841__$1 = ((((!((map__52841 == null)))?((((map__52841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52841):map__52841);
var key = cljs.core.get.call(null,map__52841__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__52841__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__52841__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$todos$_view_footer_$_iter__52831.call(null,cljs.core.rest.call(null,s__52832__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,frontend.todos._visibility_spec);
})()], null),(cljs.core.truth_(has_completed_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.clear-completed","button.clear-completed",1293834241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477));
})], null),"Clear completed"], null):null)], null);
});
frontend.todos.view = (function frontend$todos$view(p__52844,dispatch){
var map__52847 = p__52844;
var map__52847__$1 = ((((!((map__52847 == null)))?((((map__52847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52847):map__52847);
var _view_model_ = map__52847__$1;
var field = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var has_todos_QMARK_ = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var todos = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var all_completed_QMARK_ = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var active_count = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var visibility = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_header,cljs.core.deref.call(null,field),dispatch], null),(cljs.core.truth_(has_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo_list,cljs.core.deref.call(null,todos),cljs.core.deref.call(null,all_completed_QMARK_),dispatch], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_footer,cljs.core.deref.call(null,active_count),cljs.core.deref.call(null,has_completed_todos_QMARK_),cljs.core.deref.call(null,visibility),dispatch], null)], null):null)], null);
});
frontend.todos.new_spec = (function frontend$todos$new_spec(history){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.todos.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.todos.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.todos.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.todos.new_control.call(null,history),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.todos.new_reconcile.call(null,history)], null);
});

//# sourceMappingURL=todos.js.map?rel=1449759457031