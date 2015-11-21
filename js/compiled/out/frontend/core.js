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
var len__17809__auto___53182 = arguments.length;
var i__17810__auto___53183 = (0);
while(true){
if((i__17810__auto___53183 < len__17809__auto___53182)){
args__17816__auto__.push((arguments[i__17810__auto___53183]));

var G__53184 = (i__17810__auto___53183 + (1));
i__17810__auto___53183 = G__53184;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.core.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.core.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__53177_SHARP_){
return cljs.core.apply.call(null,f,p1__53177_SHARP_,args);
}),model);
});

frontend.core.update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.core.update_todos_STAR_.cljs$lang$applyTo = (function (seq53178){
var G__53179 = cljs.core.first.call(null,seq53178);
var seq53178__$1 = cljs.core.next.call(null,seq53178);
var G__53180 = cljs.core.first.call(null,seq53178__$1);
var seq53178__$2 = cljs.core.next.call(null,seq53178__$1);
var G__53181 = cljs.core.first.call(null,seq53178__$2);
var seq53178__$3 = cljs.core.next.call(null,seq53178__$2);
return frontend.core.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53179,G__53180,G__53181,seq53178__$3);
});
frontend.core.update_todo = (function frontend$core$update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___53190 = arguments.length;
var i__17810__auto___53191 = (0);
while(true){
if((i__17810__auto___53191 < len__17809__auto___53190)){
args__17816__auto__.push((arguments[i__17810__auto___53191]));

var G__53192 = (i__17810__auto___53191 + (1));
i__17810__auto___53191 = G__53192;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.core.update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.core.update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.core.update_todos_STAR_,model,(function (p1__53185_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53185_SHARP_),id);
}),f,args);
});

frontend.core.update_todo.cljs$lang$maxFixedArity = (3);

frontend.core.update_todo.cljs$lang$applyTo = (function (seq53186){
var G__53187 = cljs.core.first.call(null,seq53186);
var seq53186__$1 = cljs.core.next.call(null,seq53186);
var G__53188 = cljs.core.first.call(null,seq53186__$1);
var seq53186__$2 = cljs.core.next.call(null,seq53186__$1);
var G__53189 = cljs.core.first.call(null,seq53186__$2);
var seq53186__$3 = cljs.core.next.call(null,seq53186__$2);
return frontend.core.update_todo.cljs$core$IFn$_invoke$arity$variadic(G__53187,G__53188,G__53189,seq53186__$3);
});
frontend.core.update_todos = (function frontend$core$update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___53196 = arguments.length;
var i__17810__auto___53197 = (0);
while(true){
if((i__17810__auto___53197 < len__17809__auto___53196)){
args__17816__auto__.push((arguments[i__17810__auto___53197]));

var G__53198 = (i__17810__auto___53197 + (1));
i__17810__auto___53197 = G__53198;
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

frontend.core.update_todos.cljs$lang$applyTo = (function (seq53193){
var G__53194 = cljs.core.first.call(null,seq53193);
var seq53193__$1 = cljs.core.next.call(null,seq53193);
var G__53195 = cljs.core.first.call(null,seq53193__$1);
var seq53193__$2 = cljs.core.next.call(null,seq53193__$1);
return frontend.core.update_todos.cljs$core$IFn$_invoke$arity$variadic(G__53194,G__53195,seq53193__$2);
});
frontend.core.find_todo = (function frontend$core$find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__53199_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53199_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.core.remove_todos = (function frontend$core$remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__53200_SHARP_){
return cljs.core.remove.call(null,pred,p1__53200_SHARP_);
}));
});
frontend.core.remove_todo = (function frontend$core$remove_todo(model,id){
return frontend.core.remove_todos.call(null,model,(function (p1__53201_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53201_SHARP_),id);
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
}catch (e53302){if((e53302 instanceof Error)){
var e__19645__auto__ = e53302;
if((e__19645__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__53291 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__53291,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908))){
var token = cljs.core.nth.call(null,signal,(1));
cljs.core.println.call(null,"token =",token);

var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (token,signal_0__53291,e__19645__auto__){
return (function (p1__53202_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__53202_SHARP_),token);
});})(token,signal_0__53291,e__19645__auto__))
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
}catch (e53317){if((e53317 instanceof Error)){
var e__19645__auto____$1 = e53317;
if((e__19645__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__53291 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__53291,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53318){if((e53318 instanceof Error)){
var e__19645__auto____$2 = e53318;
if((e__19645__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19645__auto____$2;
}
} else {
throw e53318;

}
}} else {
throw e__19645__auto____$1;
}
} else {
throw e53317;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53303){if((e53303 instanceof Error)){
var e__19645__auto____$1 = e53303;
if((e__19645__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53304){if((e53304 instanceof Error)){
var e__19645__auto____$2 = e53304;
if((e__19645__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__53293 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__53293,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53316){if((e53316 instanceof Error)){
var e__19645__auto____$3 = e53316;
if((e__19645__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19645__auto____$3;
}
} else {
throw e53316;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53305){if((e53305 instanceof Error)){
var e__19645__auto____$3 = e53305;
if((e__19645__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53306){if((e53306 instanceof Error)){
var e__19645__auto____$4 = e53306;
if((e__19645__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__53295 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__53295,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53313){if((e53313 instanceof Error)){
var e__19645__auto____$5 = e53313;
if((e__19645__auto____$5 === cljs.core.match.backtrack)){
try{var signal_0__53295 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__53295,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53314){if((e53314 instanceof Error)){
var e__19645__auto____$6 = e53314;
if((e__19645__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__53295 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__53295,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53315){if((e53315 instanceof Error)){
var e__19645__auto____$7 = e53315;
if((e__19645__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19645__auto____$7;
}
} else {
throw e53315;

}
}} else {
throw e__19645__auto____$6;
}
} else {
throw e53314;

}
}} else {
throw e__19645__auto____$5;
}
} else {
throw e53313;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53307){if((e53307 instanceof Error)){
var e__19645__auto____$5 = e53307;
if((e__19645__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__53297 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__53297,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53312){if((e53312 instanceof Error)){
var e__19645__auto____$6 = e53312;
if((e__19645__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19645__auto____$6;
}
} else {
throw e53312;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53308){if((e53308 instanceof Error)){
var e__19645__auto____$6 = e53308;
if((e__19645__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__53300 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__53300,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53311){if((e53311 instanceof Error)){
var e__19645__auto____$7 = e53311;
if((e__19645__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19645__auto____$7;
}
} else {
throw e53311;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53309){if((e53309 instanceof Error)){
var e__19645__auto____$7 = e53309;
if((e__19645__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53310){if((e53310 instanceof Error)){
var e__19645__auto____$8 = e53310;
if((e__19645__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19645__auto____$8;
}
} else {
throw e53310;

}
}} else {
throw e__19645__auto____$7;
}
} else {
throw e53309;

}
}} else {
throw e__19645__auto____$6;
}
} else {
throw e53308;

}
}} else {
throw e__19645__auto____$5;
}
} else {
throw e53307;

}
}} else {
throw e__19645__auto____$4;
}
} else {
throw e53306;

}
}} else {
throw e__19645__auto____$3;
}
} else {
throw e53305;

}
}} else {
throw e__19645__auto____$2;
}
} else {
throw e53304;

}
}} else {
throw e__19645__auto____$1;
}
} else {
throw e53303;

}
}} else {
throw e__19645__auto__;
}
} else {
throw e53302;

}
}});
});
frontend.core.reconcile = (function frontend$core$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__53353 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53353,new cljs.core.Keyword(null,"load","load",-1318641184))){
var new_model = cljs.core.nth.call(null,action,(1));
if(cljs.core.truth_(new_model)){
return new_model;
} else {
return model;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e53378){if((e53378 instanceof Error)){
var e__19645__auto__ = e53378;
if((e__19645__auto__ === cljs.core.match.backtrack)){
try{var action_0__53353 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53353,new cljs.core.Keyword(null,"set-visibility","set-visibility",1621948326))){
var key = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"visibility","visibility",1338380893),key);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53379){if((e53379 instanceof Error)){
var e__19645__auto____$1 = e53379;
if((e__19645__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__53353 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53353,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53380){if((e53380 instanceof Error)){
var e__19645__auto____$2 = e53380;
if((e__19645__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19645__auto____$2;
}
} else {
throw e53380;

}
}} else {
throw e__19645__auto____$1;
}
} else {
throw e53379;

}
}} else {
throw e__19645__auto__;
}
} else {
throw e53378;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53364){if((e53364 instanceof Error)){
var e__19645__auto__ = e53364;
if((e__19645__auto__ === cljs.core.match.backtrack)){
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
}catch (e53365){if((e53365 instanceof Error)){
var e__19645__auto____$1 = e53365;
if((e__19645__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__53355 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53355,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53377){if((e53377 instanceof Error)){
var e__19645__auto____$2 = e53377;
if((e__19645__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19645__auto____$2;
}
} else {
throw e53377;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53366){if((e53366 instanceof Error)){
var e__19645__auto____$2 = e53366;
if((e__19645__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.core.update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53367){if((e53367 instanceof Error)){
var e__19645__auto____$3 = e53367;
if((e__19645__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__53357 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53357,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.update_todo.call(null,frontend.core.update_todos.call(null,model,((function (id,action_0__53357,e__19645__auto____$3,e__19645__auto____$2,e__19645__auto____$1,e__19645__auto__){
return (function (p1__53319_SHARP_){
return cljs.core.assoc.call(null,p1__53319_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53319_SHARP_),id));
});})(id,action_0__53357,e__19645__auto____$3,e__19645__auto____$2,e__19645__auto____$1,e__19645__auto__))
),id,((function (id,action_0__53357,e__19645__auto____$3,e__19645__auto____$2,e__19645__auto____$1,e__19645__auto__){
return (function (p1__53320_SHARP_){
return cljs.core.assoc.call(null,p1__53320_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__53320_SHARP_));
});})(id,action_0__53357,e__19645__auto____$3,e__19645__auto____$2,e__19645__auto____$1,e__19645__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53374){if((e53374 instanceof Error)){
var e__19645__auto____$4 = e53374;
if((e__19645__auto____$4 === cljs.core.match.backtrack)){
try{var action_0__53357 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53357,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.core.find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.core.remove_todo.call(null,model,id);
} else {
return frontend.core.update_todos.call(null,model,((function (title,id,action_0__53357,e__19645__auto____$4,e__19645__auto____$3,e__19645__auto____$2,e__19645__auto____$1,e__19645__auto__){
return (function (p1__53321_SHARP_){
return cljs.core.assoc.call(null,p1__53321_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__53357,e__19645__auto____$4,e__19645__auto____$3,e__19645__auto____$2,e__19645__auto____$1,e__19645__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e53375){if((e53375 instanceof Error)){
var e__19645__auto____$5 = e53375;
if((e__19645__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__53357 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53357,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.update_todo.call(null,model,id,((function (id,action_0__53357,e__19645__auto____$5,e__19645__auto____$4,e__19645__auto____$3,e__19645__auto____$2,e__19645__auto____$1,e__19645__auto__){
return (function (p1__53322_SHARP_){
return cljs.core.assoc.call(null,p1__53322_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__53322_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__53357,e__19645__auto____$5,e__19645__auto____$4,e__19645__auto____$3,e__19645__auto____$2,e__19645__auto____$1,e__19645__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53376){if((e53376 instanceof Error)){
var e__19645__auto____$6 = e53376;
if((e__19645__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19645__auto____$6;
}
} else {
throw e53376;

}
}} else {
throw e__19645__auto____$5;
}
} else {
throw e53375;

}
}} else {
throw e__19645__auto____$4;
}
} else {
throw e53374;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53368){if((e53368 instanceof Error)){
var e__19645__auto____$4 = e53368;
if((e__19645__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__53359 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53359,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.core.update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53373){if((e53373 instanceof Error)){
var e__19645__auto____$5 = e53373;
if((e__19645__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19645__auto____$5;
}
} else {
throw e53373;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53369){if((e53369 instanceof Error)){
var e__19645__auto____$5 = e53369;
if((e__19645__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__53362 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53362,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.core.remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53372){if((e53372 instanceof Error)){
var e__19645__auto____$6 = e53372;
if((e__19645__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19645__auto____$6;
}
} else {
throw e53372;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53370){if((e53370 instanceof Error)){
var e__19645__auto____$6 = e53370;
if((e__19645__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.core.remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53371){if((e53371 instanceof Error)){
var e__19645__auto____$7 = e53371;
if((e__19645__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19645__auto____$7;
}
} else {
throw e53371;

}
}} else {
throw e__19645__auto____$6;
}
} else {
throw e53370;

}
}} else {
throw e__19645__auto____$5;
}
} else {
throw e53369;

}
}} else {
throw e__19645__auto____$4;
}
} else {
throw e53368;

}
}} else {
throw e__19645__auto____$3;
}
} else {
throw e53367;

}
}} else {
throw e__19645__auto____$2;
}
} else {
throw e53366;

}
}} else {
throw e__19645__auto____$1;
}
} else {
throw e53365;

}
}} else {
throw e__19645__auto__;
}
} else {
throw e53364;

}
}});
frontend.core.view_model = (function frontend$core$view_model(model){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.filter.call(null,(function (){var G__53382 = (((new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model).fqn:null);
switch (G__53382) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53384_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__53384_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__53385_SHARP_){
if(cljs.core.truth_(frontend.core.enter_key_QMARK_.call(null,p1__53385_SHARP_))){
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53386_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__53386_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__53387_SHARP_){
if(cljs.core.truth_(frontend.core.enter_key_QMARK_.call(null,p1__53387_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.core.escape_key_QMARK_.call(null,p1__53387_SHARP_))){
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
frontend.core.view_todo = (function frontend$core$view_todo(p__53388,dispatch){
var map__53391 = p__53388;
var map__53391__$1 = ((((!((map__53391 == null)))?((((map__53391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53391):map__53391);
var _todo_ = map__53391__$1;
var id = cljs.core.get.call(null,map__53391__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__53391__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__53391__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__53391__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__53391,map__53391__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__53391,map__53391__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__53391,map__53391__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__53391,map__53391__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__53391,map__53391__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__53391,map__53391__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.core.view_todo_list = (function frontend$core$view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$core$view_todo_list_$_iter__53397(s__53398){
return (new cljs.core.LazySeq(null,(function (){
var s__53398__$1 = s__53398;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53398__$1);
if(temp__4425__auto__){
var s__53398__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53398__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__53398__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__53400 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__53399 = (0);
while(true){
if((i__53399 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__53399);
cljs.core.chunk_append.call(null,b__53400,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__53401 = (i__53399 + (1));
i__53399 = G__53401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53400),frontend$core$view_todo_list_$_iter__53397.call(null,cljs.core.chunk_rest.call(null,s__53398__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53400),null);
}
} else {
var todo = cljs.core.first.call(null,s__53398__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$core$view_todo_list_$_iter__53397.call(null,cljs.core.rest.call(null,s__53398__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$core$view_footer_$_iter__53414(s__53415){
return (new cljs.core.LazySeq(null,(function (){
var s__53415__$1 = s__53415;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53415__$1);
if(temp__4425__auto__){
var s__53415__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53415__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__53415__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__53417 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__53416 = (0);
while(true){
if((i__53416 < size__17522__auto__)){
var map__53422 = cljs.core._nth.call(null,c__17521__auto__,i__53416);
var map__53422__$1 = ((((!((map__53422 == null)))?((((map__53422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53422):map__53422);
var key = cljs.core.get.call(null,map__53422__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__53422__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__53422__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__53417,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__53426 = (i__53416 + (1));
i__53416 = G__53426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53417),frontend$core$view_footer_$_iter__53414.call(null,cljs.core.chunk_rest.call(null,s__53415__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53417),null);
}
} else {
var map__53424 = cljs.core.first.call(null,s__53415__$2);
var map__53424__$1 = ((((!((map__53424 == null)))?((((map__53424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53424):map__53424);
var key = cljs.core.get.call(null,map__53424__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__53424__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__53424__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$core$view_footer_$_iter__53414.call(null,cljs.core.rest.call(null,s__53415__$2)));
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
frontend.core.view = (function frontend$core$view(p__53427,dispatch){
var map__53430 = p__53427;
var map__53430__$1 = ((((!((map__53430 == null)))?((((map__53430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53430):map__53430);
var _view_model_ = map__53430__$1;
var field = cljs.core.get.call(null,map__53430__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var todos = cljs.core.get.call(null,map__53430__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var has_todos_QMARK_ = cljs.core.get.call(null,map__53430__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var active_count = cljs.core.get.call(null,map__53430__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__53430__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var all_completed_QMARK_ = cljs.core.get.call(null,map__53430__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var visibility = cljs.core.get.call(null,map__53430__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
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
frontend.core.history = (function (){var G__53432 = (new goog.history.Html5History());
G__53432.setEnabled(true);

return G__53432;
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
return (function (p1__53433_SHARP_){
return dispatch_navigate.call(null,p1__53433_SHARP_.token);
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

//# sourceMappingURL=core.js.map?rel=1448083430338