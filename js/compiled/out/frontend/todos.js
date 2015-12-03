// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.todos');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('reagent.core');
goog.require('com.rpl.specter');
goog.require('goog.events');
goog.require('goog.history.EventType');
frontend.todos._init_todo = (function frontend$todos$_init_todo(id,title){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"completed?","completed?",946828354),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"",new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});
frontend.todos.init = (function frontend$todos$init(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"",new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,frontend.todos._init_todo.call(null,(2),"Take a bath")),frontend.todos._init_todo.call(null,(1),"Finish this project")),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(3)], null);
});
frontend.todos._update_todos_STAR_ = (function frontend$todos$_update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___20749 = arguments.length;
var i__17810__auto___20750 = (0);
while(true){
if((i__17810__auto___20750 < len__17809__auto___20749)){
args__17816__auto__.push((arguments[i__17810__auto___20750]));

var G__20751 = (i__17810__auto___20750 + (1));
i__17810__auto___20750 = G__20751;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__20744_SHARP_){
return cljs.core.apply.call(null,f,p1__20744_SHARP_,args);
}),model);
});

frontend.todos._update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.todos._update_todos_STAR_.cljs$lang$applyTo = (function (seq20745){
var G__20746 = cljs.core.first.call(null,seq20745);
var seq20745__$1 = cljs.core.next.call(null,seq20745);
var G__20747 = cljs.core.first.call(null,seq20745__$1);
var seq20745__$2 = cljs.core.next.call(null,seq20745__$1);
var G__20748 = cljs.core.first.call(null,seq20745__$2);
var seq20745__$3 = cljs.core.next.call(null,seq20745__$2);
return frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__20746,G__20747,G__20748,seq20745__$3);
});
frontend.todos._update_todo = (function frontend$todos$_update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___20757 = arguments.length;
var i__17810__auto___20758 = (0);
while(true){
if((i__17810__auto___20758 < len__17809__auto___20757)){
args__17816__auto__.push((arguments[i__17810__auto___20758]));

var G__20759 = (i__17810__auto___20758 + (1));
i__17810__auto___20758 = G__20759;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.todos._update_todos_STAR_,model,(function (p1__20752_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20752_SHARP_),id);
}),f,args);
});

frontend.todos._update_todo.cljs$lang$maxFixedArity = (3);

frontend.todos._update_todo.cljs$lang$applyTo = (function (seq20753){
var G__20754 = cljs.core.first.call(null,seq20753);
var seq20753__$1 = cljs.core.next.call(null,seq20753);
var G__20755 = cljs.core.first.call(null,seq20753__$1);
var seq20753__$2 = cljs.core.next.call(null,seq20753__$1);
var G__20756 = cljs.core.first.call(null,seq20753__$2);
var seq20753__$3 = cljs.core.next.call(null,seq20753__$2);
return frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic(G__20754,G__20755,G__20756,seq20753__$3);
});
frontend.todos._update_todos = (function frontend$todos$_update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___20763 = arguments.length;
var i__17810__auto___20764 = (0);
while(true){
if((i__17810__auto___20764 < len__17809__auto___20763)){
args__17816__auto__.push((arguments[i__17810__auto___20764]));

var G__20765 = (i__17810__auto___20764 + (1));
i__17810__auto___20764 = G__20765;
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

frontend.todos._update_todos.cljs$lang$applyTo = (function (seq20760){
var G__20761 = cljs.core.first.call(null,seq20760);
var seq20760__$1 = cljs.core.next.call(null,seq20760);
var G__20762 = cljs.core.first.call(null,seq20760__$1);
var seq20760__$2 = cljs.core.next.call(null,seq20760__$1);
return frontend.todos._update_todos.cljs$core$IFn$_invoke$arity$variadic(G__20761,G__20762,seq20760__$2);
});
frontend.todos._find_todo = (function frontend$todos$_find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__20766_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20766_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.todos._remove_todos = (function frontend$todos$_remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__20767_SHARP_){
return cljs.core.remove.call(null,pred,p1__20767_SHARP_);
}));
});
frontend.todos._remove_todo = (function frontend$todos$_remove_todo(model,id){
return frontend.todos._remove_todos.call(null,model,(function (p1__20768_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20768_SHARP_),id);
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
}catch (e20868){if((e20868 instanceof Error)){
var e__19655__auto__ = e20868;
if((e__19655__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__20857 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__20857,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908))){
var token = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),token], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20883){if((e20883 instanceof Error)){
var e__19655__auto____$1 = e20883;
if((e__19655__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__20857 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__20857,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20884){if((e20884 instanceof Error)){
var e__19655__auto____$2 = e20884;
if((e__19655__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$2;
}
} else {
throw e20884;

}
}} else {
throw e__19655__auto____$1;
}
} else {
throw e20883;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20869){if((e20869 instanceof Error)){
var e__19655__auto____$1 = e20869;
if((e__19655__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20870){if((e20870 instanceof Error)){
var e__19655__auto____$2 = e20870;
if((e__19655__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__20859 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__20859,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20882){if((e20882 instanceof Error)){
var e__19655__auto____$3 = e20882;
if((e__19655__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$3;
}
} else {
throw e20882;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20871){if((e20871 instanceof Error)){
var e__19655__auto____$3 = e20871;
if((e__19655__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20872){if((e20872 instanceof Error)){
var e__19655__auto____$4 = e20872;
if((e__19655__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__20861 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__20861,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20879){if((e20879 instanceof Error)){
var e__19655__auto____$5 = e20879;
if((e__19655__auto____$5 === cljs.core.match.backtrack)){
try{var signal_0__20861 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__20861,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20880){if((e20880 instanceof Error)){
var e__19655__auto____$6 = e20880;
if((e__19655__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__20861 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__20861,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20881){if((e20881 instanceof Error)){
var e__19655__auto____$7 = e20881;
if((e__19655__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$7;
}
} else {
throw e20881;

}
}} else {
throw e__19655__auto____$6;
}
} else {
throw e20880;

}
}} else {
throw e__19655__auto____$5;
}
} else {
throw e20879;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20873){if((e20873 instanceof Error)){
var e__19655__auto____$5 = e20873;
if((e__19655__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__20863 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__20863,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20878){if((e20878 instanceof Error)){
var e__19655__auto____$6 = e20878;
if((e__19655__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$6;
}
} else {
throw e20878;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20874){if((e20874 instanceof Error)){
var e__19655__auto____$6 = e20874;
if((e__19655__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__20866 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__20866,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20877){if((e20877 instanceof Error)){
var e__19655__auto____$7 = e20877;
if((e__19655__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$7;
}
} else {
throw e20877;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20875){if((e20875 instanceof Error)){
var e__19655__auto____$7 = e20875;
if((e__19655__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20876){if((e20876 instanceof Error)){
var e__19655__auto____$8 = e20876;
if((e__19655__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19655__auto____$8;
}
} else {
throw e20876;

}
}} else {
throw e__19655__auto____$7;
}
} else {
throw e20875;

}
}} else {
throw e__19655__auto____$6;
}
} else {
throw e20874;

}
}} else {
throw e__19655__auto____$5;
}
} else {
throw e20873;

}
}} else {
throw e__19655__auto____$4;
}
} else {
throw e20872;

}
}} else {
throw e__19655__auto____$3;
}
} else {
throw e20871;

}
}} else {
throw e__19655__auto____$2;
}
} else {
throw e20870;

}
}} else {
throw e__19655__auto____$1;
}
} else {
throw e20869;

}
}} else {
throw e__19655__auto__;
}
} else {
throw e20868;

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
}catch (e20992){if((e20992 instanceof Error)){
var e__19655__auto__ = e20992;
if((e__19655__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sample-action","sample-action",653047762))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20993){if((e20993 instanceof Error)){
var e__19655__auto____$1 = e20993;
if((e__19655__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__20981 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20981,new cljs.core.Keyword(null,"navigate","navigate",657596805))){
var token = cljs.core.nth.call(null,action,(1));
cljs.core.println.call(null,"    token =",cljs.core.pr_str.call(null,token));

if(cljs.core._EQ_.call(null,token,history.getToken())){
} else {
cljs.core.println.call(null,"      REPLACING TOKEN TO",cljs.core.pr_str.call(null,token));

history.replaceToken(token);
}

var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (token,action_0__20981,e__19655__auto____$1,e__19655__auto__){
return (function (p1__20885_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__20885_SHARP_),token);
});})(token,action_0__20981,e__19655__auto____$1,e__19655__auto__))
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
}catch (e21008){if((e21008 instanceof Error)){
var e__19655__auto____$2 = e21008;
if((e__19655__auto____$2 === cljs.core.match.backtrack)){
try{var action_0__20981 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20981,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21009){if((e21009 instanceof Error)){
var e__19655__auto____$3 = e21009;
if((e__19655__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$3;
}
} else {
throw e21009;

}
}} else {
throw e__19655__auto____$2;
}
} else {
throw e21008;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20994){if((e20994 instanceof Error)){
var e__19655__auto____$2 = e20994;
if((e__19655__auto____$2 === cljs.core.match.backtrack)){
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
}catch (e20995){if((e20995 instanceof Error)){
var e__19655__auto____$3 = e20995;
if((e__19655__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__20983 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20983,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21007){if((e21007 instanceof Error)){
var e__19655__auto____$4 = e21007;
if((e__19655__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$4;
}
} else {
throw e21007;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20996){if((e20996 instanceof Error)){
var e__19655__auto____$4 = e20996;
if((e__19655__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.todos._update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20997){if((e20997 instanceof Error)){
var e__19655__auto____$5 = e20997;
if((e__19655__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__20985 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20985,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,frontend.todos._update_todos.call(null,model,((function (id,action_0__20985,e__19655__auto____$5,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__){
return (function (p1__20886_SHARP_){
return cljs.core.assoc.call(null,p1__20886_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20886_SHARP_),id));
});})(id,action_0__20985,e__19655__auto____$5,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__))
),id,((function (id,action_0__20985,e__19655__auto____$5,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__){
return (function (p1__20887_SHARP_){
return cljs.core.assoc.call(null,p1__20887_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__20887_SHARP_));
});})(id,action_0__20985,e__19655__auto____$5,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21004){if((e21004 instanceof Error)){
var e__19655__auto____$6 = e21004;
if((e__19655__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__20985 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20985,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.todos._find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.todos._remove_todo.call(null,model,id);
} else {
return frontend.todos._update_todos.call(null,model,((function (title,id,action_0__20985,e__19655__auto____$6,e__19655__auto____$5,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__){
return (function (p1__20888_SHARP_){
return cljs.core.assoc.call(null,p1__20888_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__20985,e__19655__auto____$6,e__19655__auto____$5,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e21005){if((e21005 instanceof Error)){
var e__19655__auto____$7 = e21005;
if((e__19655__auto____$7 === cljs.core.match.backtrack)){
try{var action_0__20985 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20985,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,model,id,((function (id,action_0__20985,e__19655__auto____$7,e__19655__auto____$6,e__19655__auto____$5,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__){
return (function (p1__20889_SHARP_){
return cljs.core.assoc.call(null,p1__20889_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__20889_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__20985,e__19655__auto____$7,e__19655__auto____$6,e__19655__auto____$5,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21006){if((e21006 instanceof Error)){
var e__19655__auto____$8 = e21006;
if((e__19655__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$8;
}
} else {
throw e21006;

}
}} else {
throw e__19655__auto____$7;
}
} else {
throw e21005;

}
}} else {
throw e__19655__auto____$6;
}
} else {
throw e21004;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20998){if((e20998 instanceof Error)){
var e__19655__auto____$6 = e20998;
if((e__19655__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__20987 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20987,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.todos._update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21003){if((e21003 instanceof Error)){
var e__19655__auto____$7 = e21003;
if((e__19655__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$7;
}
} else {
throw e21003;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20999){if((e20999 instanceof Error)){
var e__19655__auto____$7 = e20999;
if((e__19655__auto____$7 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__20990 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20990,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21002){if((e21002 instanceof Error)){
var e__19655__auto____$8 = e21002;
if((e__19655__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$8;
}
} else {
throw e21002;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21000){if((e21000 instanceof Error)){
var e__19655__auto____$8 = e21000;
if((e__19655__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.todos._remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e21001){if((e21001 instanceof Error)){
var e__19655__auto____$9 = e21001;
if((e__19655__auto____$9 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19655__auto____$9;
}
} else {
throw e21001;

}
}} else {
throw e__19655__auto____$8;
}
} else {
throw e21000;

}
}} else {
throw e__19655__auto____$7;
}
} else {
throw e20999;

}
}} else {
throw e__19655__auto____$6;
}
} else {
throw e20998;

}
}} else {
throw e__19655__auto____$5;
}
} else {
throw e20997;

}
}} else {
throw e__19655__auto____$4;
}
} else {
throw e20996;

}
}} else {
throw e__19655__auto____$3;
}
} else {
throw e20995;

}
}} else {
throw e__19655__auto____$2;
}
} else {
throw e20994;

}
}} else {
throw e__19655__auto____$1;
}
} else {
throw e20993;

}
}} else {
throw e__19655__auto__;
}
} else {
throw e20992;

}
}});
});
frontend.todos.view_model = (function frontend$todos$view_model(model){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.filter.call(null,(function (){var G__21011 = (((new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model).fqn:null);
switch (G__21011) {
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
frontend.todos._enter_key_QMARK_ = (function frontend$todos$_enter_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(13));
});
frontend.todos._escape_key_QMARK_ = (function frontend$todos$_escape_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(27));
});
frontend.todos._view_header = (function frontend$todos$_view_header(field,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21013_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__21013_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__21014_SHARP_){
if(cljs.core.truth_(frontend.todos._enter_key_QMARK_.call(null,p1__21014_SHARP_))){
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21015_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__21015_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__21016_SHARP_){
if(cljs.core.truth_(frontend.todos._enter_key_QMARK_.call(null,p1__21016_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.todos._escape_key_QMARK_.call(null,p1__21016_SHARP_))){
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
frontend.todos._view_todo = (function frontend$todos$_view_todo(p__21017,dispatch){
var map__21020 = p__21017;
var map__21020__$1 = ((((!((map__21020 == null)))?((((map__21020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21020):map__21020);
var _todo_ = map__21020__$1;
var id = cljs.core.get.call(null,map__21020__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__21020__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__21020__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__21020__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__21020,map__21020__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__21020,map__21020__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__21020,map__21020__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__21020,map__21020__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21020,map__21020__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__21020,map__21020__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.todos._view_todo_list = (function frontend$todos$_view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$todos$_view_todo_list_$_iter__21026(s__21027){
return (new cljs.core.LazySeq(null,(function (){
var s__21027__$1 = s__21027;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21027__$1);
if(temp__4425__auto__){
var s__21027__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21027__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__21027__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__21029 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__21028 = (0);
while(true){
if((i__21028 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__21028);
cljs.core.chunk_append.call(null,b__21029,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__21030 = (i__21028 + (1));
i__21028 = G__21030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21029),frontend$todos$_view_todo_list_$_iter__21026.call(null,cljs.core.chunk_rest.call(null,s__21027__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21029),null);
}
} else {
var todo = cljs.core.first.call(null,s__21027__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$todos$_view_todo_list_$_iter__21026.call(null,cljs.core.rest.call(null,s__21027__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$todos$_view_footer_$_iter__21043(s__21044){
return (new cljs.core.LazySeq(null,(function (){
var s__21044__$1 = s__21044;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21044__$1);
if(temp__4425__auto__){
var s__21044__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21044__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__21044__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__21046 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__21045 = (0);
while(true){
if((i__21045 < size__17522__auto__)){
var map__21051 = cljs.core._nth.call(null,c__17521__auto__,i__21045);
var map__21051__$1 = ((((!((map__21051 == null)))?((((map__21051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21051):map__21051);
var key = cljs.core.get.call(null,map__21051__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__21051__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__21051__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__21046,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__21055 = (i__21045 + (1));
i__21045 = G__21055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21046),frontend$todos$_view_footer_$_iter__21043.call(null,cljs.core.chunk_rest.call(null,s__21044__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21046),null);
}
} else {
var map__21053 = cljs.core.first.call(null,s__21044__$2);
var map__21053__$1 = ((((!((map__21053 == null)))?((((map__21053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21053):map__21053);
var key = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$todos$_view_footer_$_iter__21043.call(null,cljs.core.rest.call(null,s__21044__$2)));
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
frontend.todos.view = (function frontend$todos$view(p__21056,dispatch){
var map__21059 = p__21056;
var map__21059__$1 = ((((!((map__21059 == null)))?((((map__21059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21059):map__21059);
var _view_model_ = map__21059__$1;
var field = cljs.core.get.call(null,map__21059__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var todos = cljs.core.get.call(null,map__21059__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var has_todos_QMARK_ = cljs.core.get.call(null,map__21059__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var active_count = cljs.core.get.call(null,map__21059__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__21059__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var all_completed_QMARK_ = cljs.core.get.call(null,map__21059__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var visibility = cljs.core.get.call(null,map__21059__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_header,field,dispatch], null),(cljs.core.truth_(has_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo_list,todos,all_completed_QMARK_,dispatch], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_footer,active_count,has_completed_todos_QMARK_,visibility,dispatch], null)], null):null)], null);
});
frontend.todos.new_spec = (function frontend$todos$new_spec(history){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.todos.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.todos.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.todos.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.todos.new_control.call(null,history),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.todos.new_reconcile.call(null,history)], null);
});

//# sourceMappingURL=todos.js.map?rel=1449140262331