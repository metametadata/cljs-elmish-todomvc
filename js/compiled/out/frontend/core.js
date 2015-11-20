// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('hodgepodge.core');
goog.require('goog.history.Html5History');
goog.require('frontend.devtools');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('frontend.ui');
goog.require('cljs.core.match');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
frontend.core.init_todo = (function frontend$core$init_todo(id,title){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"completed?","completed?",946828354),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"",new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});
frontend.core.init = (function frontend$core$init(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"",new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,frontend.core.init_todo.call(null,(2),"Take a bath")),frontend.core.init_todo.call(null,(1),"Finish this project")),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(3)], null);
});
frontend.core.update_todos_STAR_ = (function frontend$core$update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___28929 = arguments.length;
var i__17810__auto___28930 = (0);
while(true){
if((i__17810__auto___28930 < len__17809__auto___28929)){
args__17816__auto__.push((arguments[i__17810__auto___28930]));

var G__28931 = (i__17810__auto___28930 + (1));
i__17810__auto___28930 = G__28931;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.core.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.core.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__28924_SHARP_){
return cljs.core.apply.call(null,f,p1__28924_SHARP_,args);
}),model);
});

frontend.core.update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.core.update_todos_STAR_.cljs$lang$applyTo = (function (seq28925){
var G__28926 = cljs.core.first.call(null,seq28925);
var seq28925__$1 = cljs.core.next.call(null,seq28925);
var G__28927 = cljs.core.first.call(null,seq28925__$1);
var seq28925__$2 = cljs.core.next.call(null,seq28925__$1);
var G__28928 = cljs.core.first.call(null,seq28925__$2);
var seq28925__$3 = cljs.core.next.call(null,seq28925__$2);
return frontend.core.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__28926,G__28927,G__28928,seq28925__$3);
});
frontend.core.update_todo = (function frontend$core$update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___28937 = arguments.length;
var i__17810__auto___28938 = (0);
while(true){
if((i__17810__auto___28938 < len__17809__auto___28937)){
args__17816__auto__.push((arguments[i__17810__auto___28938]));

var G__28939 = (i__17810__auto___28938 + (1));
i__17810__auto___28938 = G__28939;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.core.update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.core.update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.core.update_todos_STAR_,model,(function (p1__28932_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28932_SHARP_),id);
}),f,args);
});

frontend.core.update_todo.cljs$lang$maxFixedArity = (3);

frontend.core.update_todo.cljs$lang$applyTo = (function (seq28933){
var G__28934 = cljs.core.first.call(null,seq28933);
var seq28933__$1 = cljs.core.next.call(null,seq28933);
var G__28935 = cljs.core.first.call(null,seq28933__$1);
var seq28933__$2 = cljs.core.next.call(null,seq28933__$1);
var G__28936 = cljs.core.first.call(null,seq28933__$2);
var seq28933__$3 = cljs.core.next.call(null,seq28933__$2);
return frontend.core.update_todo.cljs$core$IFn$_invoke$arity$variadic(G__28934,G__28935,G__28936,seq28933__$3);
});
frontend.core.update_todos = (function frontend$core$update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___28943 = arguments.length;
var i__17810__auto___28944 = (0);
while(true){
if((i__17810__auto___28944 < len__17809__auto___28943)){
args__17816__auto__.push((arguments[i__17810__auto___28944]));

var G__28945 = (i__17810__auto___28944 + (1));
i__17810__auto___28944 = G__28945;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return frontend.core.update_todos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

frontend.core.update_todos.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.core.update_todos_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.core.update_todos.cljs$lang$maxFixedArity = (2);

frontend.core.update_todos.cljs$lang$applyTo = (function (seq28940){
var G__28941 = cljs.core.first.call(null,seq28940);
var seq28940__$1 = cljs.core.next.call(null,seq28940);
var G__28942 = cljs.core.first.call(null,seq28940__$1);
var seq28940__$2 = cljs.core.next.call(null,seq28940__$1);
return frontend.core.update_todos.cljs$core$IFn$_invoke$arity$variadic(G__28941,G__28942,seq28940__$2);
});
frontend.core.find_todo = (function frontend$core$find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28946_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28946_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.core.remove_todos = (function frontend$core$remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__28947_SHARP_){
return cljs.core.remove.call(null,pred,p1__28947_SHARP_);
}));
});
frontend.core.remove_todo = (function frontend$core$remove_todo(model,id){
return frontend.core.remove_todos.call(null,model,(function (p1__28948_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28948_SHARP_),id);
}));
});
frontend.core.visibility_spec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"title","title",636505583),"All",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"token","token",-1211463215),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),"Active",new cljs.core.Keyword(null,"href","href",-793805698),"#/active",new cljs.core.Keyword(null,"token","token",-1211463215),"/active"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"href","href",-793805698),"#/completed",new cljs.core.Keyword(null,"token","token",-1211463215),"/completed"], null)], null);
frontend.core.on_navigate = (function frontend$core$on_navigate(token,dispatch){
cljs.core.println.call(null,"token =",token);

var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28949_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__28949_SHARP_),token);
}),frontend.core.visibility_spec));
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
cljs.core.println.call(null," route match =",match);

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-visibility","set-visibility",1621948326),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(match)], null));
} else {
return null;
}
});
frontend.core.new_control = (function frontend$core$new_control(history,storage){
return (function frontend$core$new_control_$_control(_model_,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(storage)], null));

goog.events.listen(history,goog.history.EventType.NAVIGATE,(function (p1__28950_SHARP_){
return frontend.core.on_navigate.call(null,p1__28950_SHARP_.token,dispatch);
}));

return frontend.core.on_navigate.call(null,history.getToken(),dispatch);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29047){if((e29047 instanceof Error)){
var e__21823__auto__ = e29047;
if((e__21823__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29036 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29036,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29062){if((e29062 instanceof Error)){
var e__21823__auto____$1 = e29062;
if((e__21823__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto____$1;
}
} else {
throw e29062;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29048){if((e29048 instanceof Error)){
var e__21823__auto____$1 = e29048;
if((e__21823__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29049){if((e29049 instanceof Error)){
var e__21823__auto____$2 = e29049;
if((e__21823__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29038 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29038,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29061){if((e29061 instanceof Error)){
var e__21823__auto____$3 = e29061;
if((e__21823__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto____$3;
}
} else {
throw e29061;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29050){if((e29050 instanceof Error)){
var e__21823__auto____$3 = e29050;
if((e__21823__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29051){if((e29051 instanceof Error)){
var e__21823__auto____$4 = e29051;
if((e__21823__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29040 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29040,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29058){if((e29058 instanceof Error)){
var e__21823__auto____$5 = e29058;
if((e__21823__auto____$5 === cljs.core.match.backtrack)){
try{var signal_0__29040 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29040,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29059){if((e29059 instanceof Error)){
var e__21823__auto____$6 = e29059;
if((e__21823__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__29040 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29040,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29060){if((e29060 instanceof Error)){
var e__21823__auto____$7 = e29060;
if((e__21823__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto____$7;
}
} else {
throw e29060;

}
}} else {
throw e__21823__auto____$6;
}
} else {
throw e29059;

}
}} else {
throw e__21823__auto____$5;
}
} else {
throw e29058;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29052){if((e29052 instanceof Error)){
var e__21823__auto____$5 = e29052;
if((e__21823__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__29042 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29042,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29057){if((e29057 instanceof Error)){
var e__21823__auto____$6 = e29057;
if((e__21823__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto____$6;
}
} else {
throw e29057;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29053){if((e29053 instanceof Error)){
var e__21823__auto____$6 = e29053;
if((e__21823__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29045 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29045,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29056){if((e29056 instanceof Error)){
var e__21823__auto____$7 = e29056;
if((e__21823__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto____$7;
}
} else {
throw e29056;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29054){if((e29054 instanceof Error)){
var e__21823__auto____$7 = e29054;
if((e__21823__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29055){if((e29055 instanceof Error)){
var e__21823__auto____$8 = e29055;
if((e__21823__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__21823__auto____$8;
}
} else {
throw e29055;

}
}} else {
throw e__21823__auto____$7;
}
} else {
throw e29054;

}
}} else {
throw e__21823__auto____$6;
}
} else {
throw e29053;

}
}} else {
throw e__21823__auto____$5;
}
} else {
throw e29052;

}
}} else {
throw e__21823__auto____$4;
}
} else {
throw e29051;

}
}} else {
throw e__21823__auto____$3;
}
} else {
throw e29050;

}
}} else {
throw e__21823__auto____$2;
}
} else {
throw e29049;

}
}} else {
throw e__21823__auto____$1;
}
} else {
throw e29048;

}
}} else {
throw e__21823__auto__;
}
} else {
throw e29047;

}
}});
});
frontend.core.reconcile = (function frontend$core$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29097 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29097,new cljs.core.Keyword(null,"load","load",-1318641184))){
var new_model = cljs.core.nth.call(null,action,(1));
if(cljs.core.truth_(new_model)){
return new_model;
} else {
return model;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e29122){if((e29122 instanceof Error)){
var e__21823__auto__ = e29122;
if((e__21823__auto__ === cljs.core.match.backtrack)){
try{var action_0__29097 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29097,new cljs.core.Keyword(null,"set-visibility","set-visibility",1621948326))){
var key = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"visibility","visibility",1338380893),key);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29123){if((e29123 instanceof Error)){
var e__21823__auto____$1 = e29123;
if((e__21823__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__29097 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29097,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29124){if((e29124 instanceof Error)){
var e__21823__auto____$2 = e29124;
if((e__21823__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto____$2;
}
} else {
throw e29124;

}
}} else {
throw e__21823__auto____$1;
}
} else {
throw e29123;

}
}} else {
throw e__21823__auto__;
}
} else {
throw e29122;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29108){if((e29108 instanceof Error)){
var e__21823__auto__ = e29108;
if((e__21823__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"add","add",235287739))){
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(model));
if(clojure.string.blank_QMARK_.call(null,title)){
return model;
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),""),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.init_todo.call(null,new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),title)], null));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e29109){if((e29109 instanceof Error)){
var e__21823__auto____$1 = e29109;
if((e__21823__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29099 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29099,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29121){if((e29121 instanceof Error)){
var e__21823__auto____$2 = e29121;
if((e__21823__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto____$2;
}
} else {
throw e29121;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29110){if((e29110 instanceof Error)){
var e__21823__auto____$2 = e29110;
if((e__21823__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.core.update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29111){if((e29111 instanceof Error)){
var e__21823__auto____$3 = e29111;
if((e__21823__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29101 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29101,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.update_todo.call(null,frontend.core.update_todos.call(null,model,((function (id,action_0__29101,e__21823__auto____$3,e__21823__auto____$2,e__21823__auto____$1,e__21823__auto__){
return (function (p1__29063_SHARP_){
return cljs.core.assoc.call(null,p1__29063_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29063_SHARP_),id));
});})(id,action_0__29101,e__21823__auto____$3,e__21823__auto____$2,e__21823__auto____$1,e__21823__auto__))
),id,((function (id,action_0__29101,e__21823__auto____$3,e__21823__auto____$2,e__21823__auto____$1,e__21823__auto__){
return (function (p1__29064_SHARP_){
return cljs.core.assoc.call(null,p1__29064_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__29064_SHARP_));
});})(id,action_0__29101,e__21823__auto____$3,e__21823__auto____$2,e__21823__auto____$1,e__21823__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29118){if((e29118 instanceof Error)){
var e__21823__auto____$4 = e29118;
if((e__21823__auto____$4 === cljs.core.match.backtrack)){
try{var action_0__29101 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29101,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.core.find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.core.remove_todo.call(null,model,id);
} else {
return frontend.core.update_todos.call(null,model,((function (title,id,action_0__29101,e__21823__auto____$4,e__21823__auto____$3,e__21823__auto____$2,e__21823__auto____$1,e__21823__auto__){
return (function (p1__29065_SHARP_){
return cljs.core.assoc.call(null,p1__29065_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__29101,e__21823__auto____$4,e__21823__auto____$3,e__21823__auto____$2,e__21823__auto____$1,e__21823__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e29119){if((e29119 instanceof Error)){
var e__21823__auto____$5 = e29119;
if((e__21823__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__29101 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29101,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.update_todo.call(null,model,id,((function (id,action_0__29101,e__21823__auto____$5,e__21823__auto____$4,e__21823__auto____$3,e__21823__auto____$2,e__21823__auto____$1,e__21823__auto__){
return (function (p1__29066_SHARP_){
return cljs.core.assoc.call(null,p1__29066_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__29066_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__29101,e__21823__auto____$5,e__21823__auto____$4,e__21823__auto____$3,e__21823__auto____$2,e__21823__auto____$1,e__21823__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29120){if((e29120 instanceof Error)){
var e__21823__auto____$6 = e29120;
if((e__21823__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto____$6;
}
} else {
throw e29120;

}
}} else {
throw e__21823__auto____$5;
}
} else {
throw e29119;

}
}} else {
throw e__21823__auto____$4;
}
} else {
throw e29118;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29112){if((e29112 instanceof Error)){
var e__21823__auto____$4 = e29112;
if((e__21823__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__29103 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29103,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.core.update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29117){if((e29117 instanceof Error)){
var e__21823__auto____$5 = e29117;
if((e__21823__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto____$5;
}
} else {
throw e29117;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29113){if((e29113 instanceof Error)){
var e__21823__auto____$5 = e29113;
if((e__21823__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29106 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29106,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29116){if((e29116 instanceof Error)){
var e__21823__auto____$6 = e29116;
if((e__21823__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto____$6;
}
} else {
throw e29116;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29114){if((e29114 instanceof Error)){
var e__21823__auto____$6 = e29114;
if((e__21823__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.core.remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29115){if((e29115 instanceof Error)){
var e__21823__auto____$7 = e29115;
if((e__21823__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__21823__auto____$7;
}
} else {
throw e29115;

}
}} else {
throw e__21823__auto____$6;
}
} else {
throw e29114;

}
}} else {
throw e__21823__auto____$5;
}
} else {
throw e29113;

}
}} else {
throw e__21823__auto____$4;
}
} else {
throw e29112;

}
}} else {
throw e__21823__auto____$3;
}
} else {
throw e29111;

}
}} else {
throw e__21823__auto____$2;
}
} else {
throw e29110;

}
}} else {
throw e__21823__auto____$1;
}
} else {
throw e29109;

}
}} else {
throw e__21823__auto__;
}
} else {
throw e29108;

}
}});
frontend.core.view_model = (function frontend$core$view_model(model){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.filter.call(null,(function (){var G__29126 = (((new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model).fqn:null);
switch (G__29126) {
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
frontend.core.enter_key_QMARK_ = (function frontend$core$enter_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(13));
});
frontend.core.escape_key_QMARK_ = (function frontend$core$escape_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(27));
});
frontend.core.view_header = (function frontend$core$view_header(field,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29128_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__29128_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__29129_SHARP_){
if(cljs.core.truth_(frontend.core.enter_key_QMARK_.call(null,p1__29129_SHARP_))){
return dispatch.call(null,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));
} else {
return null;
}
})], null)], null)], null);
});
/**
 * Note that |editing?| is passed only to trigger :component-did-update to set focus on the state change.
 */
frontend.core.view_todo_input = (function frontend$core$view_todo_input(_id_,_title_,_editing_QMARK__,_dispatch_){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (id,title,_editing_QMARK____$1,dispatch){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29130_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__29130_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__29131_SHARP_){
if(cljs.core.truth_(frontend.core.enter_key_QMARK_.call(null,p1__29131_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.core.escape_key_QMARK_.call(null,p1__29131_SHARP_))){
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
frontend.core.view_todo = (function frontend$core$view_todo(p__29132,dispatch){
var map__29135 = p__29132;
var map__29135__$1 = ((((!((map__29135 == null)))?((((map__29135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29135):map__29135);
var _todo_ = map__29135__$1;
var id = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__29135,map__29135__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__29135,map__29135__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__29135,map__29135__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__29135,map__29135__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__29135,map__29135__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__29135,map__29135__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.core.view_todo_list = (function frontend$core$view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$core$view_todo_list_$_iter__29141(s__29142){
return (new cljs.core.LazySeq(null,(function (){
var s__29142__$1 = s__29142;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29142__$1);
if(temp__4425__auto__){
var s__29142__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29142__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__29142__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__29144 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__29143 = (0);
while(true){
if((i__29143 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__29143);
cljs.core.chunk_append.call(null,b__29144,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__29145 = (i__29143 + (1));
i__29143 = G__29145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29144),frontend$core$view_todo_list_$_iter__29141.call(null,cljs.core.chunk_rest.call(null,s__29142__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29144),null);
}
} else {
var todo = cljs.core.first.call(null,s__29142__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$core$view_todo_list_$_iter__29141.call(null,cljs.core.rest.call(null,s__29142__$2)));
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
frontend.core.view_footer = (function frontend$core$view_footer(active_count,has_completed_todos_QMARK_,visibility,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$core$view_footer_$_iter__29158(s__29159){
return (new cljs.core.LazySeq(null,(function (){
var s__29159__$1 = s__29159;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29159__$1);
if(temp__4425__auto__){
var s__29159__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29159__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__29159__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__29161 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__29160 = (0);
while(true){
if((i__29160 < size__17522__auto__)){
var map__29166 = cljs.core._nth.call(null,c__17521__auto__,i__29160);
var map__29166__$1 = ((((!((map__29166 == null)))?((((map__29166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29166):map__29166);
var key = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__29161,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__29170 = (i__29160 + (1));
i__29160 = G__29170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29161),frontend$core$view_footer_$_iter__29158.call(null,cljs.core.chunk_rest.call(null,s__29159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29161),null);
}
} else {
var map__29168 = cljs.core.first.call(null,s__29159__$2);
var map__29168__$1 = ((((!((map__29168 == null)))?((((map__29168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29168):map__29168);
var key = cljs.core.get.call(null,map__29168__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__29168__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__29168__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$core$view_footer_$_iter__29158.call(null,cljs.core.rest.call(null,s__29159__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,frontend.core.visibility_spec);
})()], null),(cljs.core.truth_(has_completed_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.clear-completed","button.clear-completed",1293834241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477));
})], null),"Clear completed"], null):null)], null);
});
frontend.core.view = (function frontend$core$view(p__29171,dispatch){
var map__29174 = p__29171;
var map__29174__$1 = ((((!((map__29174 == null)))?((((map__29174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29174):map__29174);
var _view_model_ = map__29174__$1;
var field = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var todos = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var has_todos_QMARK_ = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var active_count = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var all_completed_QMARK_ = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var visibility = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_header,field,dispatch], null),(cljs.core.truth_(has_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_todo_list,todos,all_completed_QMARK_,dispatch], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_footer,active_count,has_completed_todos_QMARK_,visibility,dispatch], null)], null):null)], null);
});
frontend.core.wrap_persist_to_storage = (function frontend$core$wrap_persist_to_storage(reconcile,storage){
return (function frontend$core$wrap_persist_to_storage_$_wrapped_reconcile(model,action){
var result = reconcile.call(null,model,action);
cljs.core.assoc_BANG_.call(null,storage,new cljs.core.Keyword(null,"model","model",331153215),result);

return result;
});
});
if(typeof frontend.core.history !== 'undefined'){
} else {
frontend.core.history = (function (){var G__29176 = (new goog.history.Html5History());
G__29176.setEnabled(true);

return G__29176;
})();
}
if(typeof frontend.core.model !== 'undefined'){
} else {
frontend.core.model = reagent.core.atom.call(null,frontend.core.init.call(null));
}
frontend.core.dev_model = reagent.core.atom.call(null,frontend.devtools.init.call(null));
frontend.core.main = (function frontend$core$main(){
cljs.core.println.call(null,"Hi.");

goog.events.removeAll(frontend.core.history);

var storage = hodgepodge.core.local_storage;
var app = frontend.ui.connect.call(null,frontend.core.model,frontend.core.view_model,frontend.core.view,frontend.devtools.wrap_control.call(null,frontend.core.new_control.call(null,frontend.core.history,storage),frontend.core.dev_model),frontend.devtools.wrap_reconcile.call(null,frontend.core.wrap_persist_to_storage.call(null,frontend.core.reconcile,storage),frontend.core.dev_model));
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools.view,frontend.core.dev_model,app], null),document.getElementById("root"));

return app;
});
frontend.core.app = frontend.core.main.call(null);
frontend.core.on_js_reload = (function frontend$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1447987000580