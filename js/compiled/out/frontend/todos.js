// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.todos');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('reagent.core');
goog.require('com.rpl.specter');
frontend.todos.init_todo = (function frontend$todos$init_todo(id,title){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"completed?","completed?",946828354),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"",new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});
frontend.todos.init = (function frontend$todos$init(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"",new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,frontend.todos.init_todo.call(null,(2),"Take a bath")),frontend.todos.init_todo.call(null,(1),"Finish this project")),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(3)], null);
});
frontend.todos.update_todos_STAR_ = (function frontend$todos$update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___22889 = arguments.length;
var i__17810__auto___22890 = (0);
while(true){
if((i__17810__auto___22890 < len__17809__auto___22889)){
args__17816__auto__.push((arguments[i__17810__auto___22890]));

var G__22891 = (i__17810__auto___22890 + (1));
i__17810__auto___22890 = G__22891;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__22884_SHARP_){
return cljs.core.apply.call(null,f,p1__22884_SHARP_,args);
}),model);
});

frontend.todos.update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.todos.update_todos_STAR_.cljs$lang$applyTo = (function (seq22885){
var G__22886 = cljs.core.first.call(null,seq22885);
var seq22885__$1 = cljs.core.next.call(null,seq22885);
var G__22887 = cljs.core.first.call(null,seq22885__$1);
var seq22885__$2 = cljs.core.next.call(null,seq22885__$1);
var G__22888 = cljs.core.first.call(null,seq22885__$2);
var seq22885__$3 = cljs.core.next.call(null,seq22885__$2);
return frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22886,G__22887,G__22888,seq22885__$3);
});
frontend.todos.update_todo = (function frontend$todos$update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___22897 = arguments.length;
var i__17810__auto___22898 = (0);
while(true){
if((i__17810__auto___22898 < len__17809__auto___22897)){
args__17816__auto__.push((arguments[i__17810__auto___22898]));

var G__22899 = (i__17810__auto___22898 + (1));
i__17810__auto___22898 = G__22899;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.todos.update_todos_STAR_,model,(function (p1__22892_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22892_SHARP_),id);
}),f,args);
});

frontend.todos.update_todo.cljs$lang$maxFixedArity = (3);

frontend.todos.update_todo.cljs$lang$applyTo = (function (seq22893){
var G__22894 = cljs.core.first.call(null,seq22893);
var seq22893__$1 = cljs.core.next.call(null,seq22893);
var G__22895 = cljs.core.first.call(null,seq22893__$1);
var seq22893__$2 = cljs.core.next.call(null,seq22893__$1);
var G__22896 = cljs.core.first.call(null,seq22893__$2);
var seq22893__$3 = cljs.core.next.call(null,seq22893__$2);
return frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic(G__22894,G__22895,G__22896,seq22893__$3);
});
frontend.todos.update_todos = (function frontend$todos$update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___22903 = arguments.length;
var i__17810__auto___22904 = (0);
while(true){
if((i__17810__auto___22904 < len__17809__auto___22903)){
args__17816__auto__.push((arguments[i__17810__auto___22904]));

var G__22905 = (i__17810__auto___22904 + (1));
i__17810__auto___22904 = G__22905;
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

frontend.todos.update_todos.cljs$lang$applyTo = (function (seq22900){
var G__22901 = cljs.core.first.call(null,seq22900);
var seq22900__$1 = cljs.core.next.call(null,seq22900);
var G__22902 = cljs.core.first.call(null,seq22900__$1);
var seq22900__$2 = cljs.core.next.call(null,seq22900__$1);
return frontend.todos.update_todos.cljs$core$IFn$_invoke$arity$variadic(G__22901,G__22902,seq22900__$2);
});
frontend.todos.find_todo = (function frontend$todos$find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__22906_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22906_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.todos.remove_todos = (function frontend$todos$remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__22907_SHARP_){
return cljs.core.remove.call(null,pred,p1__22907_SHARP_);
}));
});
frontend.todos.remove_todo = (function frontend$todos$remove_todo(model,id){
return frontend.todos.remove_todos.call(null,model,(function (p1__22908_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22908_SHARP_),id);
}));
});
frontend.todos.visibility_spec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"title","title",636505583),"All",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"token","token",-1211463215),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),"Active",new cljs.core.Keyword(null,"href","href",-793805698),"#/active",new cljs.core.Keyword(null,"token","token",-1211463215),"/active"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"href","href",-793805698),"#/completed",new cljs.core.Keyword(null,"token","token",-1211463215),"/completed"], null)], null);
frontend.todos.new_control = (function frontend$todos$new_control(storage){
return (function frontend$todos$new_control_$_control(_model_,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(storage)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23009){if((e23009 instanceof Error)){
var e__21825__auto__ = e23009;
if((e__21825__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__22998 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__22998,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908))){
var token = cljs.core.nth.call(null,signal,(1));
cljs.core.println.call(null,"token =",token);

var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (token,signal_0__22998,e__21825__auto__){
return (function (p1__22909_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__22909_SHARP_),token);
});})(token,signal_0__22998,e__21825__auto__))
,frontend.todos.visibility_spec));
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
}catch (e23024){if((e23024 instanceof Error)){
var e__21825__auto____$1 = e23024;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__22998 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__22998,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23025){if((e23025 instanceof Error)){
var e__21825__auto____$2 = e23025;
if((e__21825__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$2;
}
} else {
throw e23025;

}
}} else {
throw e__21825__auto____$1;
}
} else {
throw e23024;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23010){if((e23010 instanceof Error)){
var e__21825__auto____$1 = e23010;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23011){if((e23011 instanceof Error)){
var e__21825__auto____$2 = e23011;
if((e__21825__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__23000 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23000,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23023){if((e23023 instanceof Error)){
var e__21825__auto____$3 = e23023;
if((e__21825__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$3;
}
} else {
throw e23023;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23012){if((e23012 instanceof Error)){
var e__21825__auto____$3 = e23012;
if((e__21825__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23013){if((e23013 instanceof Error)){
var e__21825__auto____$4 = e23013;
if((e__21825__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__23002 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23002,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23020){if((e23020 instanceof Error)){
var e__21825__auto____$5 = e23020;
if((e__21825__auto____$5 === cljs.core.match.backtrack)){
try{var signal_0__23002 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23002,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23021){if((e23021 instanceof Error)){
var e__21825__auto____$6 = e23021;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__23002 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23002,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23022){if((e23022 instanceof Error)){
var e__21825__auto____$7 = e23022;
if((e__21825__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$7;
}
} else {
throw e23022;

}
}} else {
throw e__21825__auto____$6;
}
} else {
throw e23021;

}
}} else {
throw e__21825__auto____$5;
}
} else {
throw e23020;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23014){if((e23014 instanceof Error)){
var e__21825__auto____$5 = e23014;
if((e__21825__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__23004 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23004,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23019){if((e23019 instanceof Error)){
var e__21825__auto____$6 = e23019;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$6;
}
} else {
throw e23019;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23015){if((e23015 instanceof Error)){
var e__21825__auto____$6 = e23015;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__23007 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23007,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23018){if((e23018 instanceof Error)){
var e__21825__auto____$7 = e23018;
if((e__21825__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$7;
}
} else {
throw e23018;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23016){if((e23016 instanceof Error)){
var e__21825__auto____$7 = e23016;
if((e__21825__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23017){if((e23017 instanceof Error)){
var e__21825__auto____$8 = e23017;
if((e__21825__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__21825__auto____$8;
}
} else {
throw e23017;

}
}} else {
throw e__21825__auto____$7;
}
} else {
throw e23016;

}
}} else {
throw e__21825__auto____$6;
}
} else {
throw e23015;

}
}} else {
throw e__21825__auto____$5;
}
} else {
throw e23014;

}
}} else {
throw e__21825__auto____$4;
}
} else {
throw e23013;

}
}} else {
throw e__21825__auto____$3;
}
} else {
throw e23012;

}
}} else {
throw e__21825__auto____$2;
}
} else {
throw e23011;

}
}} else {
throw e__21825__auto____$1;
}
} else {
throw e23010;

}
}} else {
throw e__21825__auto__;
}
} else {
throw e23009;

}
}});
});
frontend.todos.reconcile = (function frontend$todos$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__23060 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23060,new cljs.core.Keyword(null,"load","load",-1318641184))){
var new_model = cljs.core.nth.call(null,action,(1));
if(cljs.core.truth_(new_model)){
return new_model;
} else {
return model;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e23085){if((e23085 instanceof Error)){
var e__21825__auto__ = e23085;
if((e__21825__auto__ === cljs.core.match.backtrack)){
try{var action_0__23060 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23060,new cljs.core.Keyword(null,"set-visibility","set-visibility",1621948326))){
var key = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"visibility","visibility",1338380893),key);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23086){if((e23086 instanceof Error)){
var e__21825__auto____$1 = e23086;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__23060 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23060,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23087){if((e23087 instanceof Error)){
var e__21825__auto____$2 = e23087;
if((e__21825__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$2;
}
} else {
throw e23087;

}
}} else {
throw e__21825__auto____$1;
}
} else {
throw e23086;

}
}} else {
throw e__21825__auto__;
}
} else {
throw e23085;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23071){if((e23071 instanceof Error)){
var e__21825__auto__ = e23071;
if((e__21825__auto__ === cljs.core.match.backtrack)){
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
}catch (e23072){if((e23072 instanceof Error)){
var e__21825__auto____$1 = e23072;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__23062 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23062,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23084){if((e23084 instanceof Error)){
var e__21825__auto____$2 = e23084;
if((e__21825__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$2;
}
} else {
throw e23084;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23073){if((e23073 instanceof Error)){
var e__21825__auto____$2 = e23073;
if((e__21825__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.todos.update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23074){if((e23074 instanceof Error)){
var e__21825__auto____$3 = e23074;
if((e__21825__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__23064 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23064,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,frontend.todos.update_todos.call(null,model,((function (id,action_0__23064,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__){
return (function (p1__23026_SHARP_){
return cljs.core.assoc.call(null,p1__23026_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__23026_SHARP_),id));
});})(id,action_0__23064,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__))
),id,((function (id,action_0__23064,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__){
return (function (p1__23027_SHARP_){
return cljs.core.assoc.call(null,p1__23027_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__23027_SHARP_));
});})(id,action_0__23064,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23081){if((e23081 instanceof Error)){
var e__21825__auto____$4 = e23081;
if((e__21825__auto____$4 === cljs.core.match.backtrack)){
try{var action_0__23064 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23064,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.todos.find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.todos.remove_todo.call(null,model,id);
} else {
return frontend.todos.update_todos.call(null,model,((function (title,id,action_0__23064,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__){
return (function (p1__23028_SHARP_){
return cljs.core.assoc.call(null,p1__23028_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__23064,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e23082){if((e23082 instanceof Error)){
var e__21825__auto____$5 = e23082;
if((e__21825__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__23064 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23064,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,model,id,((function (id,action_0__23064,e__21825__auto____$5,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__){
return (function (p1__23029_SHARP_){
return cljs.core.assoc.call(null,p1__23029_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__23029_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__23064,e__21825__auto____$5,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23083){if((e23083 instanceof Error)){
var e__21825__auto____$6 = e23083;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$6;
}
} else {
throw e23083;

}
}} else {
throw e__21825__auto____$5;
}
} else {
throw e23082;

}
}} else {
throw e__21825__auto____$4;
}
} else {
throw e23081;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23075){if((e23075 instanceof Error)){
var e__21825__auto____$4 = e23075;
if((e__21825__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__23066 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23066,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.todos.update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23080){if((e23080 instanceof Error)){
var e__21825__auto____$5 = e23080;
if((e__21825__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$5;
}
} else {
throw e23080;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23076){if((e23076 instanceof Error)){
var e__21825__auto____$5 = e23076;
if((e__21825__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__23069 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23069,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23079){if((e23079 instanceof Error)){
var e__21825__auto____$6 = e23079;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$6;
}
} else {
throw e23079;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23077){if((e23077 instanceof Error)){
var e__21825__auto____$6 = e23077;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.todos.remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23078){if((e23078 instanceof Error)){
var e__21825__auto____$7 = e23078;
if((e__21825__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__21825__auto____$7;
}
} else {
throw e23078;

}
}} else {
throw e__21825__auto____$6;
}
} else {
throw e23077;

}
}} else {
throw e__21825__auto____$5;
}
} else {
throw e23076;

}
}} else {
throw e__21825__auto____$4;
}
} else {
throw e23075;

}
}} else {
throw e__21825__auto____$3;
}
} else {
throw e23074;

}
}} else {
throw e__21825__auto____$2;
}
} else {
throw e23073;

}
}} else {
throw e__21825__auto____$1;
}
} else {
throw e23072;

}
}} else {
throw e__21825__auto__;
}
} else {
throw e23071;

}
}});
frontend.todos.view_model = (function frontend$todos$view_model(model){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.filter.call(null,(function (){var G__23089 = (((new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model).fqn:null);
switch (G__23089) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23091_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__23091_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__23092_SHARP_){
if(cljs.core.truth_(frontend.todos.enter_key_QMARK_.call(null,p1__23092_SHARP_))){
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23093_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__23093_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__23094_SHARP_){
if(cljs.core.truth_(frontend.todos.enter_key_QMARK_.call(null,p1__23094_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.todos.escape_key_QMARK_.call(null,p1__23094_SHARP_))){
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
frontend.todos.view_todo = (function frontend$todos$view_todo(p__23095,dispatch){
var map__23098 = p__23095;
var map__23098__$1 = ((((!((map__23098 == null)))?((((map__23098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23098):map__23098);
var _todo_ = map__23098__$1;
var id = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__23098__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__23098,map__23098__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__23098,map__23098__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__23098,map__23098__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__23098,map__23098__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23098,map__23098__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__23098,map__23098__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.todos.view_todo_list = (function frontend$todos$view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$todos$view_todo_list_$_iter__23104(s__23105){
return (new cljs.core.LazySeq(null,(function (){
var s__23105__$1 = s__23105;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23105__$1);
if(temp__4425__auto__){
var s__23105__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23105__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__23105__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__23107 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__23106 = (0);
while(true){
if((i__23106 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__23106);
cljs.core.chunk_append.call(null,b__23107,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__23108 = (i__23106 + (1));
i__23106 = G__23108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23107),frontend$todos$view_todo_list_$_iter__23104.call(null,cljs.core.chunk_rest.call(null,s__23105__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23107),null);
}
} else {
var todo = cljs.core.first.call(null,s__23105__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$todos$view_todo_list_$_iter__23104.call(null,cljs.core.rest.call(null,s__23105__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$todos$view_footer_$_iter__23121(s__23122){
return (new cljs.core.LazySeq(null,(function (){
var s__23122__$1 = s__23122;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23122__$1);
if(temp__4425__auto__){
var s__23122__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23122__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__23122__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__23124 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__23123 = (0);
while(true){
if((i__23123 < size__17522__auto__)){
var map__23129 = cljs.core._nth.call(null,c__17521__auto__,i__23123);
var map__23129__$1 = ((((!((map__23129 == null)))?((((map__23129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23129):map__23129);
var key = cljs.core.get.call(null,map__23129__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__23129__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__23129__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__23124,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__23133 = (i__23123 + (1));
i__23123 = G__23133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23124),frontend$todos$view_footer_$_iter__23121.call(null,cljs.core.chunk_rest.call(null,s__23122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23124),null);
}
} else {
var map__23131 = cljs.core.first.call(null,s__23122__$2);
var map__23131__$1 = ((((!((map__23131 == null)))?((((map__23131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23131):map__23131);
var key = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$todos$view_footer_$_iter__23121.call(null,cljs.core.rest.call(null,s__23122__$2)));
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
frontend.todos.view = (function frontend$todos$view(p__23134,dispatch){
var map__23137 = p__23134;
var map__23137__$1 = ((((!((map__23137 == null)))?((((map__23137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23137):map__23137);
var _view_model_ = map__23137__$1;
var field = cljs.core.get.call(null,map__23137__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var todos = cljs.core.get.call(null,map__23137__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var has_todos_QMARK_ = cljs.core.get.call(null,map__23137__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var active_count = cljs.core.get.call(null,map__23137__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__23137__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var all_completed_QMARK_ = cljs.core.get.call(null,map__23137__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var visibility = cljs.core.get.call(null,map__23137__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_header,field,dispatch], null),(cljs.core.truth_(has_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo_list,todos,all_completed_QMARK_,dispatch], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_footer,active_count,has_completed_todos_QMARK_,visibility,dispatch], null)], null):null)], null);
});

//# sourceMappingURL=todos.js.map?rel=1448194812550