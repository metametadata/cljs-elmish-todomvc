// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.todos');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('reagent.core');
goog.require('com.rpl.specter');
goog.require('goog.events');
goog.require('goog.history.EventType');
frontend.todos.init_todo = (function frontend$todos$init_todo(id,title){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"completed?","completed?",946828354),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"",new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});
frontend.todos.init = (function frontend$todos$init(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"",new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,frontend.todos.init_todo.call(null,(2),"Take a bath")),frontend.todos.init_todo.call(null,(1),"Finish this project")),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(3)], null),new cljs.core.Keyword(null,"on-init","on-init",-1723361030)], null);
});
frontend.todos.update_todos_STAR_ = (function frontend$todos$update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___47735 = arguments.length;
var i__17810__auto___47736 = (0);
while(true){
if((i__17810__auto___47736 < len__17809__auto___47735)){
args__17816__auto__.push((arguments[i__17810__auto___47736]));

var G__47737 = (i__17810__auto___47736 + (1));
i__17810__auto___47736 = G__47737;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__47730_SHARP_){
return cljs.core.apply.call(null,f,p1__47730_SHARP_,args);
}),model);
});

frontend.todos.update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.todos.update_todos_STAR_.cljs$lang$applyTo = (function (seq47731){
var G__47732 = cljs.core.first.call(null,seq47731);
var seq47731__$1 = cljs.core.next.call(null,seq47731);
var G__47733 = cljs.core.first.call(null,seq47731__$1);
var seq47731__$2 = cljs.core.next.call(null,seq47731__$1);
var G__47734 = cljs.core.first.call(null,seq47731__$2);
var seq47731__$3 = cljs.core.next.call(null,seq47731__$2);
return frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__47732,G__47733,G__47734,seq47731__$3);
});
frontend.todos.update_todo = (function frontend$todos$update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___47743 = arguments.length;
var i__17810__auto___47744 = (0);
while(true){
if((i__17810__auto___47744 < len__17809__auto___47743)){
args__17816__auto__.push((arguments[i__17810__auto___47744]));

var G__47745 = (i__17810__auto___47744 + (1));
i__17810__auto___47744 = G__47745;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.todos.update_todos_STAR_,model,(function (p1__47738_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47738_SHARP_),id);
}),f,args);
});

frontend.todos.update_todo.cljs$lang$maxFixedArity = (3);

frontend.todos.update_todo.cljs$lang$applyTo = (function (seq47739){
var G__47740 = cljs.core.first.call(null,seq47739);
var seq47739__$1 = cljs.core.next.call(null,seq47739);
var G__47741 = cljs.core.first.call(null,seq47739__$1);
var seq47739__$2 = cljs.core.next.call(null,seq47739__$1);
var G__47742 = cljs.core.first.call(null,seq47739__$2);
var seq47739__$3 = cljs.core.next.call(null,seq47739__$2);
return frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic(G__47740,G__47741,G__47742,seq47739__$3);
});
frontend.todos.update_todos = (function frontend$todos$update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___47749 = arguments.length;
var i__17810__auto___47750 = (0);
while(true){
if((i__17810__auto___47750 < len__17809__auto___47749)){
args__17816__auto__.push((arguments[i__17810__auto___47750]));

var G__47751 = (i__17810__auto___47750 + (1));
i__17810__auto___47750 = G__47751;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return frontend.todos.update_todos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

frontend.todos.update_todos.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.todos.update_todos_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.todos.update_todos.cljs$lang$maxFixedArity = (2);

frontend.todos.update_todos.cljs$lang$applyTo = (function (seq47746){
var G__47747 = cljs.core.first.call(null,seq47746);
var seq47746__$1 = cljs.core.next.call(null,seq47746);
var G__47748 = cljs.core.first.call(null,seq47746__$1);
var seq47746__$2 = cljs.core.next.call(null,seq47746__$1);
return frontend.todos.update_todos.cljs$core$IFn$_invoke$arity$variadic(G__47747,G__47748,seq47746__$2);
});
frontend.todos.find_todo = (function frontend$todos$find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__47752_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47752_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.todos.remove_todos = (function frontend$todos$remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__47753_SHARP_){
return cljs.core.remove.call(null,pred,p1__47753_SHARP_);
}));
});
frontend.todos.remove_todo = (function frontend$todos$remove_todo(model,id){
return frontend.todos.remove_todos.call(null,model,(function (p1__47754_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47754_SHARP_),id);
}));
});
frontend.todos.visibility_spec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"title","title",636505583),"All",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"token","token",-1211463215),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),"Active",new cljs.core.Keyword(null,"href","href",-793805698),"#/active",new cljs.core.Keyword(null,"token","token",-1211463215),"/active"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"href","href",-793805698),"#/completed",new cljs.core.Keyword(null,"token","token",-1211463215),"/completed"], null)], null);
frontend.todos.new_control = (function frontend$todos$new_control(history){
return (function frontend$todos$new_control_$_control(_model_,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-init","on-init",-1723361030))){
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),history.getToken()], null));

return dispatch.call(null,new cljs.core.Keyword(null,"sample-action","sample-action",653047762));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47854){if((e47854 instanceof Error)){
var e__18365__auto__ = e47854;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__47843 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__47843,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908))){
var token = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),token], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47869){if((e47869 instanceof Error)){
var e__18365__auto____$1 = e47869;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__47843 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__47843,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47870){if((e47870 instanceof Error)){
var e__18365__auto____$2 = e47870;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$2;
}
} else {
throw e47870;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e47869;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47855){if((e47855 instanceof Error)){
var e__18365__auto____$1 = e47855;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47856){if((e47856 instanceof Error)){
var e__18365__auto____$2 = e47856;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__47845 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__47845,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47868){if((e47868 instanceof Error)){
var e__18365__auto____$3 = e47868;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$3;
}
} else {
throw e47868;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47857){if((e47857 instanceof Error)){
var e__18365__auto____$3 = e47857;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47858){if((e47858 instanceof Error)){
var e__18365__auto____$4 = e47858;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__47847 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__47847,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47865){if((e47865 instanceof Error)){
var e__18365__auto____$5 = e47865;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{var signal_0__47847 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__47847,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47866){if((e47866 instanceof Error)){
var e__18365__auto____$6 = e47866;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__47847 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__47847,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47867){if((e47867 instanceof Error)){
var e__18365__auto____$7 = e47867;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e47867;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e47866;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e47865;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47859){if((e47859 instanceof Error)){
var e__18365__auto____$5 = e47859;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__47849 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__47849,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47864){if((e47864 instanceof Error)){
var e__18365__auto____$6 = e47864;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$6;
}
} else {
throw e47864;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47860){if((e47860 instanceof Error)){
var e__18365__auto____$6 = e47860;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__47852 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__47852,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47863){if((e47863 instanceof Error)){
var e__18365__auto____$7 = e47863;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e47863;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47861){if((e47861 instanceof Error)){
var e__18365__auto____$7 = e47861;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47862){if((e47862 instanceof Error)){
var e__18365__auto____$8 = e47862;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__18365__auto____$8;
}
} else {
throw e47862;

}
}} else {
throw e__18365__auto____$7;
}
} else {
throw e47861;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e47860;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e47859;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e47858;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e47857;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e47856;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e47855;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e47854;

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
}catch (e47978){if((e47978 instanceof Error)){
var e__18365__auto__ = e47978;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sample-action","sample-action",653047762))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e47979){if((e47979 instanceof Error)){
var e__18365__auto____$1 = e47979;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__47967 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__47967,new cljs.core.Keyword(null,"navigate","navigate",657596805))){
var token = cljs.core.nth.call(null,action,(1));
cljs.core.println.call(null,"    token =",cljs.core.pr_str.call(null,token));

if(cljs.core._EQ_.call(null,token,history.getToken())){
} else {
cljs.core.println.call(null,"      REPLACING TOKEN TO",cljs.core.pr_str.call(null,token));

history.replaceToken(token);
}

var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (token,action_0__47967,e__18365__auto____$1,e__18365__auto__){
return (function (p1__47871_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__47871_SHARP_),token);
});})(token,action_0__47967,e__18365__auto____$1,e__18365__auto__))
,frontend.todos.visibility_spec));
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
}catch (e47994){if((e47994 instanceof Error)){
var e__18365__auto____$2 = e47994;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{var action_0__47967 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__47967,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47995){if((e47995 instanceof Error)){
var e__18365__auto____$3 = e47995;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$3;
}
} else {
throw e47995;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e47994;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47980){if((e47980 instanceof Error)){
var e__18365__auto____$2 = e47980;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"add","add",235287739))){
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(model));
if(clojure.string.blank_QMARK_.call(null,title)){
return model;
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),""),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.init_todo.call(null,new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),title)], null));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e47981){if((e47981 instanceof Error)){
var e__18365__auto____$3 = e47981;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__47969 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__47969,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47993){if((e47993 instanceof Error)){
var e__18365__auto____$4 = e47993;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$4;
}
} else {
throw e47993;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47982){if((e47982 instanceof Error)){
var e__18365__auto____$4 = e47982;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.todos.update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47983){if((e47983 instanceof Error)){
var e__18365__auto____$5 = e47983;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__47971 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__47971,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,frontend.todos.update_todos.call(null,model,((function (id,action_0__47971,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__47872_SHARP_){
return cljs.core.assoc.call(null,p1__47872_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__47872_SHARP_),id));
});})(id,action_0__47971,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
),id,((function (id,action_0__47971,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__47873_SHARP_){
return cljs.core.assoc.call(null,p1__47873_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__47873_SHARP_));
});})(id,action_0__47971,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47990){if((e47990 instanceof Error)){
var e__18365__auto____$6 = e47990;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__47971 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__47971,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.todos.find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.todos.remove_todo.call(null,model,id);
} else {
return frontend.todos.update_todos.call(null,model,((function (title,id,action_0__47971,e__18365__auto____$6,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__47874_SHARP_){
return cljs.core.assoc.call(null,p1__47874_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__47971,e__18365__auto____$6,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e47991){if((e47991 instanceof Error)){
var e__18365__auto____$7 = e47991;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
try{var action_0__47971 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__47971,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,model,id,((function (id,action_0__47971,e__18365__auto____$7,e__18365__auto____$6,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__47875_SHARP_){
return cljs.core.assoc.call(null,p1__47875_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__47875_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__47971,e__18365__auto____$7,e__18365__auto____$6,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47992){if((e47992 instanceof Error)){
var e__18365__auto____$8 = e47992;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$8;
}
} else {
throw e47992;

}
}} else {
throw e__18365__auto____$7;
}
} else {
throw e47991;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e47990;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47984){if((e47984 instanceof Error)){
var e__18365__auto____$6 = e47984;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__47973 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__47973,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.todos.update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47989){if((e47989 instanceof Error)){
var e__18365__auto____$7 = e47989;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e47989;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47985){if((e47985 instanceof Error)){
var e__18365__auto____$7 = e47985;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__47976 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__47976,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e47988){if((e47988 instanceof Error)){
var e__18365__auto____$8 = e47988;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$8;
}
} else {
throw e47988;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e47986){if((e47986 instanceof Error)){
var e__18365__auto____$8 = e47986;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.todos.remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e47987){if((e47987 instanceof Error)){
var e__18365__auto____$9 = e47987;
if((e__18365__auto____$9 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__18365__auto____$9;
}
} else {
throw e47987;

}
}} else {
throw e__18365__auto____$8;
}
} else {
throw e47986;

}
}} else {
throw e__18365__auto____$7;
}
} else {
throw e47985;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e47984;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e47983;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e47982;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e47981;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e47980;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e47979;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e47978;

}
}});
});
frontend.todos.view_model = (function frontend$todos$view_model(model){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.filter.call(null,(function (){var G__47997 = (((new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model).fqn:null);
switch (G__47997) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model))].join('')));

}
})(),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793),(cljs.core.count.call(null,new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)) > (0)),new cljs.core.Keyword(null,"active-count","active-count",676410108),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354)),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model))),new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313),(cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model))) > (0)),new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888),cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.todos.enter_key_QMARK_ = (function frontend$todos$enter_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(13));
});
frontend.todos.escape_key_QMARK_ = (function frontend$todos$escape_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(27));
});
frontend.todos.view_header = (function frontend$todos$view_header(field,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47999_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__47999_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__48000_SHARP_){
if(cljs.core.truth_(frontend.todos.enter_key_QMARK_.call(null,p1__48000_SHARP_))){
return dispatch.call(null,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));
} else {
return null;
}
})], null)], null)], null);
});
/**
 * Note that |editing?| is passed only to trigger :component-did-update to set focus on the state change.
 */
frontend.todos.view_todo_input = (function frontend$todos$view_todo_input(_id_,_title_,_editing_QMARK__,_dispatch_){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (id,title,_editing_QMARK____$1,dispatch){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48001_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__48001_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__48002_SHARP_){
if(cljs.core.truth_(frontend.todos.enter_key_QMARK_.call(null,p1__48002_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.todos.escape_key_QMARK_.call(null,p1__48002_SHARP_))){
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
frontend.todos.view_todo = (function frontend$todos$view_todo(p__48003,dispatch){
var map__48006 = p__48003;
var map__48006__$1 = ((((!((map__48006 == null)))?((((map__48006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48006):map__48006);
var _todo_ = map__48006__$1;
var id = cljs.core.get.call(null,map__48006__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__48006__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__48006__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__48006__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__48006,map__48006__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__48006,map__48006__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__48006,map__48006__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__48006,map__48006__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__48006,map__48006__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__48006,map__48006__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.todos.view_todo_list = (function frontend$todos$view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$todos$view_todo_list_$_iter__48012(s__48013){
return (new cljs.core.LazySeq(null,(function (){
var s__48013__$1 = s__48013;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__48013__$1);
if(temp__4425__auto__){
var s__48013__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48013__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__48013__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__48015 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__48014 = (0);
while(true){
if((i__48014 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__48014);
cljs.core.chunk_append.call(null,b__48015,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__48016 = (i__48014 + (1));
i__48014 = G__48016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48015),frontend$todos$view_todo_list_$_iter__48012.call(null,cljs.core.chunk_rest.call(null,s__48013__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48015),null);
}
} else {
var todo = cljs.core.first.call(null,s__48013__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$todos$view_todo_list_$_iter__48012.call(null,cljs.core.rest.call(null,s__48013__$2)));
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
frontend.todos.view_footer = (function frontend$todos$view_footer(active_count,has_completed_todos_QMARK_,visibility,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$todos$view_footer_$_iter__48029(s__48030){
return (new cljs.core.LazySeq(null,(function (){
var s__48030__$1 = s__48030;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__48030__$1);
if(temp__4425__auto__){
var s__48030__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48030__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__48030__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__48032 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__48031 = (0);
while(true){
if((i__48031 < size__17522__auto__)){
var map__48037 = cljs.core._nth.call(null,c__17521__auto__,i__48031);
var map__48037__$1 = ((((!((map__48037 == null)))?((((map__48037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48037):map__48037);
var key = cljs.core.get.call(null,map__48037__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__48037__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__48037__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__48032,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__48041 = (i__48031 + (1));
i__48031 = G__48041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48032),frontend$todos$view_footer_$_iter__48029.call(null,cljs.core.chunk_rest.call(null,s__48030__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48032),null);
}
} else {
var map__48039 = cljs.core.first.call(null,s__48030__$2);
var map__48039__$1 = ((((!((map__48039 == null)))?((((map__48039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48039):map__48039);
var key = cljs.core.get.call(null,map__48039__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__48039__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__48039__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$todos$view_footer_$_iter__48029.call(null,cljs.core.rest.call(null,s__48030__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,frontend.todos.visibility_spec);
})()], null),(cljs.core.truth_(has_completed_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.clear-completed","button.clear-completed",1293834241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477));
})], null),"Clear completed"], null):null)], null);
});
frontend.todos.view = (function frontend$todos$view(p__48042,dispatch){
var map__48045 = p__48042;
var map__48045__$1 = ((((!((map__48045 == null)))?((((map__48045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48045):map__48045);
var _view_model_ = map__48045__$1;
var field = cljs.core.get.call(null,map__48045__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var todos = cljs.core.get.call(null,map__48045__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var has_todos_QMARK_ = cljs.core.get.call(null,map__48045__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var active_count = cljs.core.get.call(null,map__48045__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__48045__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var all_completed_QMARK_ = cljs.core.get.call(null,map__48045__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var visibility = cljs.core.get.call(null,map__48045__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_header,field,dispatch], null),(cljs.core.truth_(has_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo_list,todos,all_completed_QMARK_,dispatch], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_footer,active_count,has_completed_todos_QMARK_,visibility,dispatch], null)], null):null)], null);
});

//# sourceMappingURL=todos.js.map?rel=1448538128368