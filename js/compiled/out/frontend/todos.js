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
var len__17809__auto___26986 = arguments.length;
var i__17810__auto___26987 = (0);
while(true){
if((i__17810__auto___26987 < len__17809__auto___26986)){
args__17816__auto__.push((arguments[i__17810__auto___26987]));

var G__26988 = (i__17810__auto___26987 + (1));
i__17810__auto___26987 = G__26988;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__26981_SHARP_){
return cljs.core.apply.call(null,f,p1__26981_SHARP_,args);
}),model);
});

frontend.todos.update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.todos.update_todos_STAR_.cljs$lang$applyTo = (function (seq26982){
var G__26983 = cljs.core.first.call(null,seq26982);
var seq26982__$1 = cljs.core.next.call(null,seq26982);
var G__26984 = cljs.core.first.call(null,seq26982__$1);
var seq26982__$2 = cljs.core.next.call(null,seq26982__$1);
var G__26985 = cljs.core.first.call(null,seq26982__$2);
var seq26982__$3 = cljs.core.next.call(null,seq26982__$2);
return frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26983,G__26984,G__26985,seq26982__$3);
});
frontend.todos.update_todo = (function frontend$todos$update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___26994 = arguments.length;
var i__17810__auto___26995 = (0);
while(true){
if((i__17810__auto___26995 < len__17809__auto___26994)){
args__17816__auto__.push((arguments[i__17810__auto___26995]));

var G__26996 = (i__17810__auto___26995 + (1));
i__17810__auto___26995 = G__26996;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.todos.update_todos_STAR_,model,(function (p1__26989_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26989_SHARP_),id);
}),f,args);
});

frontend.todos.update_todo.cljs$lang$maxFixedArity = (3);

frontend.todos.update_todo.cljs$lang$applyTo = (function (seq26990){
var G__26991 = cljs.core.first.call(null,seq26990);
var seq26990__$1 = cljs.core.next.call(null,seq26990);
var G__26992 = cljs.core.first.call(null,seq26990__$1);
var seq26990__$2 = cljs.core.next.call(null,seq26990__$1);
var G__26993 = cljs.core.first.call(null,seq26990__$2);
var seq26990__$3 = cljs.core.next.call(null,seq26990__$2);
return frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic(G__26991,G__26992,G__26993,seq26990__$3);
});
frontend.todos.update_todos = (function frontend$todos$update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___27000 = arguments.length;
var i__17810__auto___27001 = (0);
while(true){
if((i__17810__auto___27001 < len__17809__auto___27000)){
args__17816__auto__.push((arguments[i__17810__auto___27001]));

var G__27002 = (i__17810__auto___27001 + (1));
i__17810__auto___27001 = G__27002;
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

frontend.todos.update_todos.cljs$lang$applyTo = (function (seq26997){
var G__26998 = cljs.core.first.call(null,seq26997);
var seq26997__$1 = cljs.core.next.call(null,seq26997);
var G__26999 = cljs.core.first.call(null,seq26997__$1);
var seq26997__$2 = cljs.core.next.call(null,seq26997__$1);
return frontend.todos.update_todos.cljs$core$IFn$_invoke$arity$variadic(G__26998,G__26999,seq26997__$2);
});
frontend.todos.find_todo = (function frontend$todos$find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27003_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27003_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.todos.remove_todos = (function frontend$todos$remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__27004_SHARP_){
return cljs.core.remove.call(null,pred,p1__27004_SHARP_);
}));
});
frontend.todos.remove_todo = (function frontend$todos$remove_todo(model,id){
return frontend.todos.remove_todos.call(null,model,(function (p1__27005_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27005_SHARP_),id);
}));
});
frontend.todos.visibility_spec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"title","title",636505583),"All",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"token","token",-1211463215),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),"Active",new cljs.core.Keyword(null,"href","href",-793805698),"#/active",new cljs.core.Keyword(null,"token","token",-1211463215),"/active"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"href","href",-793805698),"#/completed",new cljs.core.Keyword(null,"token","token",-1211463215),"/completed"], null)], null);
frontend.todos.new_control = (function frontend$todos$new_control(history){
return (function frontend$todos$new_control_$_control(_model_,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-init","on-init",-1723361030))){
goog.events.listen(history,goog.history.EventType.NAVIGATE,(function (p1__27006_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),p1__27006_SHARP_.token], null));
}));

dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),history.getToken()], null));

return dispatch.call(null,new cljs.core.Keyword(null,"sample-action","sample-action",653047762));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27103){if((e27103 instanceof Error)){
var e__18365__auto__ = e27103;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27092 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27092,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27118){if((e27118 instanceof Error)){
var e__18365__auto____$1 = e27118;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$1;
}
} else {
throw e27118;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27104){if((e27104 instanceof Error)){
var e__18365__auto____$1 = e27104;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27105){if((e27105 instanceof Error)){
var e__18365__auto____$2 = e27105;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27094 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27094,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27117){if((e27117 instanceof Error)){
var e__18365__auto____$3 = e27117;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$3;
}
} else {
throw e27117;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27106){if((e27106 instanceof Error)){
var e__18365__auto____$3 = e27106;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27107){if((e27107 instanceof Error)){
var e__18365__auto____$4 = e27107;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27096 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27096,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27114){if((e27114 instanceof Error)){
var e__18365__auto____$5 = e27114;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{var signal_0__27096 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27096,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27115){if((e27115 instanceof Error)){
var e__18365__auto____$6 = e27115;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__27096 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27096,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27116){if((e27116 instanceof Error)){
var e__18365__auto____$7 = e27116;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e27116;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e27115;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e27114;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27108){if((e27108 instanceof Error)){
var e__18365__auto____$5 = e27108;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__27098 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27098,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27113){if((e27113 instanceof Error)){
var e__18365__auto____$6 = e27113;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$6;
}
} else {
throw e27113;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27109){if((e27109 instanceof Error)){
var e__18365__auto____$6 = e27109;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27101 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27101,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27112){if((e27112 instanceof Error)){
var e__18365__auto____$7 = e27112;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e27112;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27110){if((e27110 instanceof Error)){
var e__18365__auto____$7 = e27110;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27111){if((e27111 instanceof Error)){
var e__18365__auto____$8 = e27111;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__18365__auto____$8;
}
} else {
throw e27111;

}
}} else {
throw e__18365__auto____$7;
}
} else {
throw e27110;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e27109;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e27108;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e27107;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e27106;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e27105;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e27104;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e27103;

}
}});
});
frontend.todos.new_reconcile = (function frontend$todos$new_reconcile(history){
return (function frontend$todos$new_reconcile_$_reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sample-action","sample-action",653047762))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e27223){if((e27223 instanceof Error)){
var e__18365__auto__ = e27223;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27212 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27212,new cljs.core.Keyword(null,"navigate","navigate",657596805))){
var token = cljs.core.nth.call(null,action,(1));
cljs.core.println.call(null," token =",cljs.core.pr_str.call(null,token));

var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (token,action_0__27212,e__18365__auto__){
return (function (p1__27119_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__27119_SHARP_),token);
});})(token,action_0__27212,e__18365__auto__))
,frontend.todos.visibility_spec));
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
cljs.core.println.call(null,"  route match =",cljs.core.pr_str.call(null,match));

return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e27238){if((e27238 instanceof Error)){
var e__18365__auto____$1 = e27238;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__27212 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27212,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27239){if((e27239 instanceof Error)){
var e__18365__auto____$2 = e27239;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$2;
}
} else {
throw e27239;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e27238;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27224){if((e27224 instanceof Error)){
var e__18365__auto____$1 = e27224;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
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
}catch (e27225){if((e27225 instanceof Error)){
var e__18365__auto____$2 = e27225;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27214 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27214,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27237){if((e27237 instanceof Error)){
var e__18365__auto____$3 = e27237;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$3;
}
} else {
throw e27237;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27226){if((e27226 instanceof Error)){
var e__18365__auto____$3 = e27226;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.todos.update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27227){if((e27227 instanceof Error)){
var e__18365__auto____$4 = e27227;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27216 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27216,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,frontend.todos.update_todos.call(null,model,((function (id,action_0__27216,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__27120_SHARP_){
return cljs.core.assoc.call(null,p1__27120_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27120_SHARP_),id));
});})(id,action_0__27216,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
),id,((function (id,action_0__27216,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__27121_SHARP_){
return cljs.core.assoc.call(null,p1__27121_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__27121_SHARP_));
});})(id,action_0__27216,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27234){if((e27234 instanceof Error)){
var e__18365__auto____$5 = e27234;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__27216 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27216,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.todos.find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.todos.remove_todo.call(null,model,id);
} else {
return frontend.todos.update_todos.call(null,model,((function (title,id,action_0__27216,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__27122_SHARP_){
return cljs.core.assoc.call(null,p1__27122_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__27216,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e27235){if((e27235 instanceof Error)){
var e__18365__auto____$6 = e27235;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__27216 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27216,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,model,id,((function (id,action_0__27216,e__18365__auto____$6,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__27123_SHARP_){
return cljs.core.assoc.call(null,p1__27123_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__27123_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__27216,e__18365__auto____$6,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27236){if((e27236 instanceof Error)){
var e__18365__auto____$7 = e27236;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e27236;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e27235;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e27234;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27228){if((e27228 instanceof Error)){
var e__18365__auto____$5 = e27228;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__27218 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27218,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.todos.update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27233){if((e27233 instanceof Error)){
var e__18365__auto____$6 = e27233;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$6;
}
} else {
throw e27233;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27229){if((e27229 instanceof Error)){
var e__18365__auto____$6 = e27229;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27221 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27221,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27232){if((e27232 instanceof Error)){
var e__18365__auto____$7 = e27232;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e27232;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27230){if((e27230 instanceof Error)){
var e__18365__auto____$7 = e27230;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.todos.remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27231){if((e27231 instanceof Error)){
var e__18365__auto____$8 = e27231;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__18365__auto____$8;
}
} else {
throw e27231;

}
}} else {
throw e__18365__auto____$7;
}
} else {
throw e27230;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e27229;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e27228;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e27227;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e27226;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e27225;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e27224;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e27223;

}
}});
});
frontend.todos.view_model = (function frontend$todos$view_model(model){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.filter.call(null,(function (){var G__27241 = (((new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model).fqn:null);
switch (G__27241) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27243_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__27243_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__27244_SHARP_){
if(cljs.core.truth_(frontend.todos.enter_key_QMARK_.call(null,p1__27244_SHARP_))){
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27245_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__27245_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__27246_SHARP_){
if(cljs.core.truth_(frontend.todos.enter_key_QMARK_.call(null,p1__27246_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.todos.escape_key_QMARK_.call(null,p1__27246_SHARP_))){
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
frontend.todos.view_todo = (function frontend$todos$view_todo(p__27247,dispatch){
var map__27250 = p__27247;
var map__27250__$1 = ((((!((map__27250 == null)))?((((map__27250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27250):map__27250);
var _todo_ = map__27250__$1;
var id = cljs.core.get.call(null,map__27250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__27250__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__27250__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__27250__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__27250,map__27250__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__27250,map__27250__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__27250,map__27250__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__27250,map__27250__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27250,map__27250__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__27250,map__27250__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.todos.view_todo_list = (function frontend$todos$view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$todos$view_todo_list_$_iter__27256(s__27257){
return (new cljs.core.LazySeq(null,(function (){
var s__27257__$1 = s__27257;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27257__$1);
if(temp__4425__auto__){
var s__27257__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27257__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__27257__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__27259 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__27258 = (0);
while(true){
if((i__27258 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__27258);
cljs.core.chunk_append.call(null,b__27259,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__27260 = (i__27258 + (1));
i__27258 = G__27260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27259),frontend$todos$view_todo_list_$_iter__27256.call(null,cljs.core.chunk_rest.call(null,s__27257__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27259),null);
}
} else {
var todo = cljs.core.first.call(null,s__27257__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$todos$view_todo_list_$_iter__27256.call(null,cljs.core.rest.call(null,s__27257__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$todos$view_footer_$_iter__27273(s__27274){
return (new cljs.core.LazySeq(null,(function (){
var s__27274__$1 = s__27274;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27274__$1);
if(temp__4425__auto__){
var s__27274__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27274__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__27274__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__27276 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__27275 = (0);
while(true){
if((i__27275 < size__17522__auto__)){
var map__27281 = cljs.core._nth.call(null,c__17521__auto__,i__27275);
var map__27281__$1 = ((((!((map__27281 == null)))?((((map__27281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27281):map__27281);
var key = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__27276,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__27285 = (i__27275 + (1));
i__27275 = G__27285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27276),frontend$todos$view_footer_$_iter__27273.call(null,cljs.core.chunk_rest.call(null,s__27274__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27276),null);
}
} else {
var map__27283 = cljs.core.first.call(null,s__27274__$2);
var map__27283__$1 = ((((!((map__27283 == null)))?((((map__27283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27283):map__27283);
var key = cljs.core.get.call(null,map__27283__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__27283__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__27283__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$todos$view_footer_$_iter__27273.call(null,cljs.core.rest.call(null,s__27274__$2)));
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
frontend.todos.view = (function frontend$todos$view(p__27286,dispatch){
var map__27289 = p__27286;
var map__27289__$1 = ((((!((map__27289 == null)))?((((map__27289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27289):map__27289);
var _view_model_ = map__27289__$1;
var field = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var todos = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var has_todos_QMARK_ = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var active_count = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var all_completed_QMARK_ = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var visibility = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_header,field,dispatch], null),(cljs.core.truth_(has_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo_list,todos,all_completed_QMARK_,dispatch], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_footer,active_count,has_completed_todos_QMARK_,visibility,dispatch], null)], null):null)], null);
});

//# sourceMappingURL=todos.js.map?rel=1448343279792