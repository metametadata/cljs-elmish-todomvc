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
var len__17809__auto___27206 = arguments.length;
var i__17810__auto___27207 = (0);
while(true){
if((i__17810__auto___27207 < len__17809__auto___27206)){
args__17816__auto__.push((arguments[i__17810__auto___27207]));

var G__27208 = (i__17810__auto___27207 + (1));
i__17810__auto___27207 = G__27208;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.core.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.core.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__27201_SHARP_){
return cljs.core.apply.call(null,f,p1__27201_SHARP_,args);
}),model);
});

frontend.core.update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.core.update_todos_STAR_.cljs$lang$applyTo = (function (seq27202){
var G__27203 = cljs.core.first.call(null,seq27202);
var seq27202__$1 = cljs.core.next.call(null,seq27202);
var G__27204 = cljs.core.first.call(null,seq27202__$1);
var seq27202__$2 = cljs.core.next.call(null,seq27202__$1);
var G__27205 = cljs.core.first.call(null,seq27202__$2);
var seq27202__$3 = cljs.core.next.call(null,seq27202__$2);
return frontend.core.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27203,G__27204,G__27205,seq27202__$3);
});
frontend.core.update_todo = (function frontend$core$update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___27214 = arguments.length;
var i__17810__auto___27215 = (0);
while(true){
if((i__17810__auto___27215 < len__17809__auto___27214)){
args__17816__auto__.push((arguments[i__17810__auto___27215]));

var G__27216 = (i__17810__auto___27215 + (1));
i__17810__auto___27215 = G__27216;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.core.update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.core.update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.core.update_todos_STAR_,model,(function (p1__27209_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27209_SHARP_),id);
}),f,args);
});

frontend.core.update_todo.cljs$lang$maxFixedArity = (3);

frontend.core.update_todo.cljs$lang$applyTo = (function (seq27210){
var G__27211 = cljs.core.first.call(null,seq27210);
var seq27210__$1 = cljs.core.next.call(null,seq27210);
var G__27212 = cljs.core.first.call(null,seq27210__$1);
var seq27210__$2 = cljs.core.next.call(null,seq27210__$1);
var G__27213 = cljs.core.first.call(null,seq27210__$2);
var seq27210__$3 = cljs.core.next.call(null,seq27210__$2);
return frontend.core.update_todo.cljs$core$IFn$_invoke$arity$variadic(G__27211,G__27212,G__27213,seq27210__$3);
});
frontend.core.update_todos = (function frontend$core$update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___27220 = arguments.length;
var i__17810__auto___27221 = (0);
while(true){
if((i__17810__auto___27221 < len__17809__auto___27220)){
args__17816__auto__.push((arguments[i__17810__auto___27221]));

var G__27222 = (i__17810__auto___27221 + (1));
i__17810__auto___27221 = G__27222;
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

frontend.core.update_todos.cljs$lang$applyTo = (function (seq27217){
var G__27218 = cljs.core.first.call(null,seq27217);
var seq27217__$1 = cljs.core.next.call(null,seq27217);
var G__27219 = cljs.core.first.call(null,seq27217__$1);
var seq27217__$2 = cljs.core.next.call(null,seq27217__$1);
return frontend.core.update_todos.cljs$core$IFn$_invoke$arity$variadic(G__27218,G__27219,seq27217__$2);
});
frontend.core.find_todo = (function frontend$core$find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27223_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27223_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.core.remove_todos = (function frontend$core$remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__27224_SHARP_){
return cljs.core.remove.call(null,pred,p1__27224_SHARP_);
}));
});
frontend.core.remove_todo = (function frontend$core$remove_todo(model,id){
return frontend.core.remove_todos.call(null,model,(function (p1__27225_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27225_SHARP_),id);
}));
});
frontend.core.visibility_spec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"title","title",636505583),"All",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"token","token",-1211463215),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),"Active",new cljs.core.Keyword(null,"href","href",-793805698),"#/active",new cljs.core.Keyword(null,"token","token",-1211463215),"/active"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"href","href",-793805698),"#/completed",new cljs.core.Keyword(null,"token","token",-1211463215),"/completed"], null)], null);
frontend.core.new_control = (function frontend$core$new_control(storage){
return (function frontend$core$new_control_$_control(_model_,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(storage)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27326){if((e27326 instanceof Error)){
var e__18550__auto__ = e27326;
if((e__18550__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27315 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27315,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908))){
var token = cljs.core.nth.call(null,signal,(1));
cljs.core.println.call(null,"token =",token);

var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (token,signal_0__27315,e__18550__auto__){
return (function (p1__27226_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__27226_SHARP_),token);
});})(token,signal_0__27315,e__18550__auto__))
,frontend.core.visibility_spec));
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
cljs.core.println.call(null," route match =",match);

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-visibility","set-visibility",1621948326),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(match)], null));
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e27341){if((e27341 instanceof Error)){
var e__18550__auto____$1 = e27341;
if((e__18550__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__27315 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27315,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27342){if((e27342 instanceof Error)){
var e__18550__auto____$2 = e27342;
if((e__18550__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto____$2;
}
} else {
throw e27342;

}
}} else {
throw e__18550__auto____$1;
}
} else {
throw e27341;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27327){if((e27327 instanceof Error)){
var e__18550__auto____$1 = e27327;
if((e__18550__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27328){if((e27328 instanceof Error)){
var e__18550__auto____$2 = e27328;
if((e__18550__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27317 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27317,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27340){if((e27340 instanceof Error)){
var e__18550__auto____$3 = e27340;
if((e__18550__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto____$3;
}
} else {
throw e27340;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27329){if((e27329 instanceof Error)){
var e__18550__auto____$3 = e27329;
if((e__18550__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27330){if((e27330 instanceof Error)){
var e__18550__auto____$4 = e27330;
if((e__18550__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27319 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27319,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27337){if((e27337 instanceof Error)){
var e__18550__auto____$5 = e27337;
if((e__18550__auto____$5 === cljs.core.match.backtrack)){
try{var signal_0__27319 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27319,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27338){if((e27338 instanceof Error)){
var e__18550__auto____$6 = e27338;
if((e__18550__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__27319 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27319,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27339){if((e27339 instanceof Error)){
var e__18550__auto____$7 = e27339;
if((e__18550__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto____$7;
}
} else {
throw e27339;

}
}} else {
throw e__18550__auto____$6;
}
} else {
throw e27338;

}
}} else {
throw e__18550__auto____$5;
}
} else {
throw e27337;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27331){if((e27331 instanceof Error)){
var e__18550__auto____$5 = e27331;
if((e__18550__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__27321 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27321,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27336){if((e27336 instanceof Error)){
var e__18550__auto____$6 = e27336;
if((e__18550__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto____$6;
}
} else {
throw e27336;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27332){if((e27332 instanceof Error)){
var e__18550__auto____$6 = e27332;
if((e__18550__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27324 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27324,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27335){if((e27335 instanceof Error)){
var e__18550__auto____$7 = e27335;
if((e__18550__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto____$7;
}
} else {
throw e27335;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27333){if((e27333 instanceof Error)){
var e__18550__auto____$7 = e27333;
if((e__18550__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27334){if((e27334 instanceof Error)){
var e__18550__auto____$8 = e27334;
if((e__18550__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__18550__auto____$8;
}
} else {
throw e27334;

}
}} else {
throw e__18550__auto____$7;
}
} else {
throw e27333;

}
}} else {
throw e__18550__auto____$6;
}
} else {
throw e27332;

}
}} else {
throw e__18550__auto____$5;
}
} else {
throw e27331;

}
}} else {
throw e__18550__auto____$4;
}
} else {
throw e27330;

}
}} else {
throw e__18550__auto____$3;
}
} else {
throw e27329;

}
}} else {
throw e__18550__auto____$2;
}
} else {
throw e27328;

}
}} else {
throw e__18550__auto____$1;
}
} else {
throw e27327;

}
}} else {
throw e__18550__auto__;
}
} else {
throw e27326;

}
}});
});
frontend.core.reconcile = (function frontend$core$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27377 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27377,new cljs.core.Keyword(null,"load","load",-1318641184))){
var new_model = cljs.core.nth.call(null,action,(1));
if(cljs.core.truth_(new_model)){
return new_model;
} else {
return model;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e27402){if((e27402 instanceof Error)){
var e__18550__auto__ = e27402;
if((e__18550__auto__ === cljs.core.match.backtrack)){
try{var action_0__27377 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27377,new cljs.core.Keyword(null,"set-visibility","set-visibility",1621948326))){
var key = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"visibility","visibility",1338380893),key);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27403){if((e27403 instanceof Error)){
var e__18550__auto____$1 = e27403;
if((e__18550__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__27377 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27377,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27404){if((e27404 instanceof Error)){
var e__18550__auto____$2 = e27404;
if((e__18550__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto____$2;
}
} else {
throw e27404;

}
}} else {
throw e__18550__auto____$1;
}
} else {
throw e27403;

}
}} else {
throw e__18550__auto__;
}
} else {
throw e27402;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27388){if((e27388 instanceof Error)){
var e__18550__auto__ = e27388;
if((e__18550__auto__ === cljs.core.match.backtrack)){
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
}catch (e27389){if((e27389 instanceof Error)){
var e__18550__auto____$1 = e27389;
if((e__18550__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27379 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27379,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27401){if((e27401 instanceof Error)){
var e__18550__auto____$2 = e27401;
if((e__18550__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto____$2;
}
} else {
throw e27401;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27390){if((e27390 instanceof Error)){
var e__18550__auto____$2 = e27390;
if((e__18550__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.core.update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27391){if((e27391 instanceof Error)){
var e__18550__auto____$3 = e27391;
if((e__18550__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27381 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27381,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.update_todo.call(null,frontend.core.update_todos.call(null,model,((function (id,action_0__27381,e__18550__auto____$3,e__18550__auto____$2,e__18550__auto____$1,e__18550__auto__){
return (function (p1__27343_SHARP_){
return cljs.core.assoc.call(null,p1__27343_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27343_SHARP_),id));
});})(id,action_0__27381,e__18550__auto____$3,e__18550__auto____$2,e__18550__auto____$1,e__18550__auto__))
),id,((function (id,action_0__27381,e__18550__auto____$3,e__18550__auto____$2,e__18550__auto____$1,e__18550__auto__){
return (function (p1__27344_SHARP_){
return cljs.core.assoc.call(null,p1__27344_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__27344_SHARP_));
});})(id,action_0__27381,e__18550__auto____$3,e__18550__auto____$2,e__18550__auto____$1,e__18550__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27398){if((e27398 instanceof Error)){
var e__18550__auto____$4 = e27398;
if((e__18550__auto____$4 === cljs.core.match.backtrack)){
try{var action_0__27381 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27381,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.core.find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.core.remove_todo.call(null,model,id);
} else {
return frontend.core.update_todos.call(null,model,((function (title,id,action_0__27381,e__18550__auto____$4,e__18550__auto____$3,e__18550__auto____$2,e__18550__auto____$1,e__18550__auto__){
return (function (p1__27345_SHARP_){
return cljs.core.assoc.call(null,p1__27345_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__27381,e__18550__auto____$4,e__18550__auto____$3,e__18550__auto____$2,e__18550__auto____$1,e__18550__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e27399){if((e27399 instanceof Error)){
var e__18550__auto____$5 = e27399;
if((e__18550__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__27381 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27381,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.update_todo.call(null,model,id,((function (id,action_0__27381,e__18550__auto____$5,e__18550__auto____$4,e__18550__auto____$3,e__18550__auto____$2,e__18550__auto____$1,e__18550__auto__){
return (function (p1__27346_SHARP_){
return cljs.core.assoc.call(null,p1__27346_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__27346_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__27381,e__18550__auto____$5,e__18550__auto____$4,e__18550__auto____$3,e__18550__auto____$2,e__18550__auto____$1,e__18550__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27400){if((e27400 instanceof Error)){
var e__18550__auto____$6 = e27400;
if((e__18550__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto____$6;
}
} else {
throw e27400;

}
}} else {
throw e__18550__auto____$5;
}
} else {
throw e27399;

}
}} else {
throw e__18550__auto____$4;
}
} else {
throw e27398;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27392){if((e27392 instanceof Error)){
var e__18550__auto____$4 = e27392;
if((e__18550__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__27383 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27383,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.core.update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27397){if((e27397 instanceof Error)){
var e__18550__auto____$5 = e27397;
if((e__18550__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto____$5;
}
} else {
throw e27397;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27393){if((e27393 instanceof Error)){
var e__18550__auto____$5 = e27393;
if((e__18550__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27386 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27386,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27396){if((e27396 instanceof Error)){
var e__18550__auto____$6 = e27396;
if((e__18550__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto____$6;
}
} else {
throw e27396;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27394){if((e27394 instanceof Error)){
var e__18550__auto____$6 = e27394;
if((e__18550__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.core.remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27395){if((e27395 instanceof Error)){
var e__18550__auto____$7 = e27395;
if((e__18550__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__18550__auto____$7;
}
} else {
throw e27395;

}
}} else {
throw e__18550__auto____$6;
}
} else {
throw e27394;

}
}} else {
throw e__18550__auto____$5;
}
} else {
throw e27393;

}
}} else {
throw e__18550__auto____$4;
}
} else {
throw e27392;

}
}} else {
throw e__18550__auto____$3;
}
} else {
throw e27391;

}
}} else {
throw e__18550__auto____$2;
}
} else {
throw e27390;

}
}} else {
throw e__18550__auto____$1;
}
} else {
throw e27389;

}
}} else {
throw e__18550__auto__;
}
} else {
throw e27388;

}
}});
frontend.core.view_model = (function frontend$core$view_model(model){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.filter.call(null,(function (){var G__27406 = (((new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model).fqn:null);
switch (G__27406) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27408_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__27408_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__27409_SHARP_){
if(cljs.core.truth_(frontend.core.enter_key_QMARK_.call(null,p1__27409_SHARP_))){
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27410_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__27410_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__27411_SHARP_){
if(cljs.core.truth_(frontend.core.enter_key_QMARK_.call(null,p1__27411_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.core.escape_key_QMARK_.call(null,p1__27411_SHARP_))){
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
frontend.core.view_todo = (function frontend$core$view_todo(p__27412,dispatch){
var map__27415 = p__27412;
var map__27415__$1 = ((((!((map__27415 == null)))?((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415):map__27415);
var _todo_ = map__27415__$1;
var id = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__27415,map__27415__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__27415,map__27415__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__27415,map__27415__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__27415,map__27415__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27415,map__27415__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__27415,map__27415__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.core.view_todo_list = (function frontend$core$view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$core$view_todo_list_$_iter__27421(s__27422){
return (new cljs.core.LazySeq(null,(function (){
var s__27422__$1 = s__27422;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27422__$1);
if(temp__4425__auto__){
var s__27422__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27422__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__27422__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__27424 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__27423 = (0);
while(true){
if((i__27423 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__27423);
cljs.core.chunk_append.call(null,b__27424,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__27425 = (i__27423 + (1));
i__27423 = G__27425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27424),frontend$core$view_todo_list_$_iter__27421.call(null,cljs.core.chunk_rest.call(null,s__27422__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27424),null);
}
} else {
var todo = cljs.core.first.call(null,s__27422__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$core$view_todo_list_$_iter__27421.call(null,cljs.core.rest.call(null,s__27422__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$core$view_footer_$_iter__27438(s__27439){
return (new cljs.core.LazySeq(null,(function (){
var s__27439__$1 = s__27439;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27439__$1);
if(temp__4425__auto__){
var s__27439__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27439__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__27439__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__27441 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__27440 = (0);
while(true){
if((i__27440 < size__17522__auto__)){
var map__27446 = cljs.core._nth.call(null,c__17521__auto__,i__27440);
var map__27446__$1 = ((((!((map__27446 == null)))?((((map__27446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27446):map__27446);
var key = cljs.core.get.call(null,map__27446__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__27446__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__27446__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__27441,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__27450 = (i__27440 + (1));
i__27440 = G__27450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27441),frontend$core$view_footer_$_iter__27438.call(null,cljs.core.chunk_rest.call(null,s__27439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27441),null);
}
} else {
var map__27448 = cljs.core.first.call(null,s__27439__$2);
var map__27448__$1 = ((((!((map__27448 == null)))?((((map__27448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27448):map__27448);
var key = cljs.core.get.call(null,map__27448__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__27448__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__27448__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$core$view_footer_$_iter__27438.call(null,cljs.core.rest.call(null,s__27439__$2)));
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
frontend.core.view = (function frontend$core$view(p__27451,dispatch){
var map__27454 = p__27451;
var map__27454__$1 = ((((!((map__27454 == null)))?((((map__27454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27454):map__27454);
var _view_model_ = map__27454__$1;
var field = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var todos = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var has_todos_QMARK_ = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var active_count = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var all_completed_QMARK_ = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var visibility = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
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
frontend.core.history = (function (){var G__27456 = (new goog.history.Html5History());
G__27456.setEnabled(true);

return G__27456;
})();
}
frontend.core.model = reagent.core.atom.call(null,frontend.core.init.call(null));
frontend.core.dev_model = reagent.core.atom.call(null,frontend.devtools.init.call(null));
frontend.core.main = (function frontend$core$main(){
cljs.core.println.call(null,"Hi.");

var storage = hodgepodge.core.local_storage;
var app = frontend.ui.connect.call(null,frontend.core.model,frontend.core.view_model,frontend.core.view,frontend.devtools.wrap_control.call(null,frontend.core.new_control.call(null,storage),frontend.core.dev_model),frontend.devtools.wrap_reconcile.call(null,frontend.core.wrap_persist_to_storage.call(null,frontend.core.reconcile,storage),frontend.core.dev_model));
var dispatch_navigate = ((function (storage,app){
return (function frontend$core$main_$_dispatch_navigate(token){
return new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591).cljs$core$IFn$_invoke$arity$1(app).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),token], null));
});})(storage,app))
;
goog.events.removeAll(frontend.core.history);

goog.events.listen(frontend.core.history,goog.history.EventType.NAVIGATE,((function (storage,app){
return (function (p1__27457_SHARP_){
return dispatch_navigate.call(null,p1__27457_SHARP_.token);
});})(storage,app))
);

dispatch_navigate.call(null,frontend.core.history.getToken());

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools.view,frontend.core.dev_model,app], null),document.getElementById("root"));

return app;
});
frontend.core.app = frontend.core.main.call(null);
frontend.core.on_js_reload = (function frontend$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1448046309442