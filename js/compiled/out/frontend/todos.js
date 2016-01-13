// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.todos');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('reagent.core');
goog.require('com.rpl.specter');
goog.require('frontend.ui');
goog.require('frontend.routing');
frontend.todos._init_todo = (function frontend$todos$_init_todo(id,title){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"completed?","completed?",946828354),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"",new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});
frontend.todos.init = (function frontend$todos$init(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"",new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,frontend.todos._init_todo.call(null,(2),"Take a bath")),frontend.todos._init_todo.call(null,(1),"Finish this project")),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(3)], null);
});
frontend.todos._update_todos_STAR_ = (function frontend$todos$_update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___103128 = arguments.length;
var i__17810__auto___103129 = (0);
while(true){
if((i__17810__auto___103129 < len__17809__auto___103128)){
args__17816__auto__.push((arguments[i__17810__auto___103129]));

var G__103130 = (i__17810__auto___103129 + (1));
i__17810__auto___103129 = G__103130;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__103123_SHARP_){
return cljs.core.apply.call(null,f,p1__103123_SHARP_,args);
}),model);
});

frontend.todos._update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.todos._update_todos_STAR_.cljs$lang$applyTo = (function (seq103124){
var G__103125 = cljs.core.first.call(null,seq103124);
var seq103124__$1 = cljs.core.next.call(null,seq103124);
var G__103126 = cljs.core.first.call(null,seq103124__$1);
var seq103124__$2 = cljs.core.next.call(null,seq103124__$1);
var G__103127 = cljs.core.first.call(null,seq103124__$2);
var seq103124__$3 = cljs.core.next.call(null,seq103124__$2);
return frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__103125,G__103126,G__103127,seq103124__$3);
});
frontend.todos._update_todo = (function frontend$todos$_update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___103136 = arguments.length;
var i__17810__auto___103137 = (0);
while(true){
if((i__17810__auto___103137 < len__17809__auto___103136)){
args__17816__auto__.push((arguments[i__17810__auto___103137]));

var G__103138 = (i__17810__auto___103137 + (1));
i__17810__auto___103137 = G__103138;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.todos._update_todos_STAR_,model,(function (p1__103131_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__103131_SHARP_),id);
}),f,args);
});

frontend.todos._update_todo.cljs$lang$maxFixedArity = (3);

frontend.todos._update_todo.cljs$lang$applyTo = (function (seq103132){
var G__103133 = cljs.core.first.call(null,seq103132);
var seq103132__$1 = cljs.core.next.call(null,seq103132);
var G__103134 = cljs.core.first.call(null,seq103132__$1);
var seq103132__$2 = cljs.core.next.call(null,seq103132__$1);
var G__103135 = cljs.core.first.call(null,seq103132__$2);
var seq103132__$3 = cljs.core.next.call(null,seq103132__$2);
return frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic(G__103133,G__103134,G__103135,seq103132__$3);
});
frontend.todos._update_todos = (function frontend$todos$_update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___103142 = arguments.length;
var i__17810__auto___103143 = (0);
while(true){
if((i__17810__auto___103143 < len__17809__auto___103142)){
args__17816__auto__.push((arguments[i__17810__auto___103143]));

var G__103144 = (i__17810__auto___103143 + (1));
i__17810__auto___103143 = G__103144;
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

frontend.todos._update_todos.cljs$lang$applyTo = (function (seq103139){
var G__103140 = cljs.core.first.call(null,seq103139);
var seq103139__$1 = cljs.core.next.call(null,seq103139);
var G__103141 = cljs.core.first.call(null,seq103139__$1);
var seq103139__$2 = cljs.core.next.call(null,seq103139__$1);
return frontend.todos._update_todos.cljs$core$IFn$_invoke$arity$variadic(G__103140,G__103141,seq103139__$2);
});
frontend.todos._find_todo = (function frontend$todos$_find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__103145_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__103145_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.todos._remove_todos = (function frontend$todos$_remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__103146_SHARP_){
return cljs.core.remove.call(null,pred,p1__103146_SHARP_);
}));
});
frontend.todos._remove_todo = (function frontend$todos$_remove_todo(model,id){
return frontend.todos._remove_todos.call(null,model,(function (p1__103147_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__103147_SHARP_),id);
}));
});
frontend.todos._visibility_spec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"title","title",636505583),"All",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"token","token",-1211463215),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),"Active",new cljs.core.Keyword(null,"href","href",-793805698),"#/active",new cljs.core.Keyword(null,"token","token",-1211463215),"/active"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"href","href",-793805698),"#/completed",new cljs.core.Keyword(null,"token","token",-1211463215),"/completed"], null)], null);
frontend.todos.control = (function frontend$todos$control(_model_,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return dispatch.call(null,new cljs.core.Keyword(null,"sample-action","sample-action",653047762));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103190){if((e103190 instanceof Error)){
var e__20495__auto__ = e103190;
if((e__20495__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__103179 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__103179,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908))){
var token = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),token], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103206){if((e103206 instanceof Error)){
var e__20495__auto____$1 = e103206;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__103179 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__103179,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103207){if((e103207 instanceof Error)){
var e__20495__auto____$2 = e103207;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$2;
}
} else {
throw e103207;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e103206;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e103191){if((e103191 instanceof Error)){
var e__20495__auto____$1 = e103191;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103192){if((e103192 instanceof Error)){
var e__20495__auto____$2 = e103192;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__103181 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__103181,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103205){if((e103205 instanceof Error)){
var e__20495__auto____$3 = e103205;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$3;
}
} else {
throw e103205;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e103193){if((e103193 instanceof Error)){
var e__20495__auto____$3 = e103193;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103194){if((e103194 instanceof Error)){
var e__20495__auto____$4 = e103194;
if((e__20495__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__103183 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__103183,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103202){if((e103202 instanceof Error)){
var e__20495__auto____$5 = e103202;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
try{var signal_0__103183 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__103183,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103203){if((e103203 instanceof Error)){
var e__20495__auto____$6 = e103203;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__103183 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__103183,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103204){if((e103204 instanceof Error)){
var e__20495__auto____$7 = e103204;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$7;
}
} else {
throw e103204;

}
}} else {
throw e__20495__auto____$6;
}
} else {
throw e103203;

}
}} else {
throw e__20495__auto____$5;
}
} else {
throw e103202;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e103195){if((e103195 instanceof Error)){
var e__20495__auto____$5 = e103195;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__103185 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__103185,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103201){if((e103201 instanceof Error)){
var e__20495__auto____$6 = e103201;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$6;
}
} else {
throw e103201;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e103196){if((e103196 instanceof Error)){
var e__20495__auto____$6 = e103196;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__103188 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__103188,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103200){if((e103200 instanceof Error)){
var e__20495__auto____$7 = e103200;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$7;
}
} else {
throw e103200;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e103197){if((e103197 instanceof Error)){
var e__20495__auto____$7 = e103197;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103198){if((e103198 instanceof Error)){
var e__20495__auto____$8 = e103198;
if((e__20495__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-devtools-did-replay","on-devtools-did-replay",-1526267411))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e103199){if((e103199 instanceof Error)){
var e__20495__auto____$9 = e103199;
if((e__20495__auto____$9 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20495__auto____$9;
}
} else {
throw e103199;

}
}} else {
throw e__20495__auto____$8;
}
} else {
throw e103198;

}
}} else {
throw e__20495__auto____$7;
}
} else {
throw e103197;

}
}} else {
throw e__20495__auto____$6;
}
} else {
throw e103196;

}
}} else {
throw e__20495__auto____$5;
}
} else {
throw e103195;

}
}} else {
throw e__20495__auto____$4;
}
} else {
throw e103194;

}
}} else {
throw e__20495__auto____$3;
}
} else {
throw e103193;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e103192;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e103191;

}
}} else {
throw e__20495__auto__;
}
} else {
throw e103190;

}
}});
frontend.todos.new_reconcile = (function frontend$todos$new_reconcile(history){
return (function frontend$todos$new_reconcile_$_reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sample-action","sample-action",653047762))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e103312){if((e103312 instanceof Error)){
var e__20495__auto__ = e103312;
if((e__20495__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__103301 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__103301,new cljs.core.Keyword(null,"navigate","navigate",657596805))){
var token = cljs.core.nth.call(null,action,(1));
frontend.routing.replace_token.call(null,history,token);

var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (token,action_0__103301,e__20495__auto__){
return (function (p1__103208_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__103208_SHARP_),token);
});})(token,action_0__103301,e__20495__auto__))
,frontend.todos._visibility_spec));
if(cljs.core.truth_(temp__4423__auto__)){
var match = temp__4423__auto__;
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(match));
} else {
return model;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e103327){if((e103327 instanceof Error)){
var e__20495__auto____$1 = e103327;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__103301 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__103301,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e103328){if((e103328 instanceof Error)){
var e__20495__auto____$2 = e103328;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$2;
}
} else {
throw e103328;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e103327;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e103313){if((e103313 instanceof Error)){
var e__20495__auto____$1 = e103313;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
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
}catch (e103314){if((e103314 instanceof Error)){
var e__20495__auto____$2 = e103314;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__103303 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__103303,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e103326){if((e103326 instanceof Error)){
var e__20495__auto____$3 = e103326;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$3;
}
} else {
throw e103326;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e103315){if((e103315 instanceof Error)){
var e__20495__auto____$3 = e103315;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.todos._update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103316){if((e103316 instanceof Error)){
var e__20495__auto____$4 = e103316;
if((e__20495__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__103305 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__103305,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,frontend.todos._update_todos.call(null,model,((function (id,action_0__103305,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__103209_SHARP_){
return cljs.core.assoc.call(null,p1__103209_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__103209_SHARP_),id));
});})(id,action_0__103305,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
),id,((function (id,action_0__103305,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__103210_SHARP_){
return cljs.core.assoc.call(null,p1__103210_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__103210_SHARP_));
});})(id,action_0__103305,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e103323){if((e103323 instanceof Error)){
var e__20495__auto____$5 = e103323;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__103305 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__103305,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.todos._find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.todos._remove_todo.call(null,model,id);
} else {
return frontend.todos._update_todos.call(null,model,((function (title,id,action_0__103305,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__103211_SHARP_){
return cljs.core.assoc.call(null,p1__103211_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__103305,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e103324){if((e103324 instanceof Error)){
var e__20495__auto____$6 = e103324;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__103305 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__103305,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,model,id,((function (id,action_0__103305,e__20495__auto____$6,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__103212_SHARP_){
return cljs.core.assoc.call(null,p1__103212_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__103212_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__103305,e__20495__auto____$6,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e103325){if((e103325 instanceof Error)){
var e__20495__auto____$7 = e103325;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$7;
}
} else {
throw e103325;

}
}} else {
throw e__20495__auto____$6;
}
} else {
throw e103324;

}
}} else {
throw e__20495__auto____$5;
}
} else {
throw e103323;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e103317){if((e103317 instanceof Error)){
var e__20495__auto____$5 = e103317;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__103307 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__103307,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.todos._update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e103322){if((e103322 instanceof Error)){
var e__20495__auto____$6 = e103322;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$6;
}
} else {
throw e103322;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e103318){if((e103318 instanceof Error)){
var e__20495__auto____$6 = e103318;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__103310 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__103310,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e103321){if((e103321 instanceof Error)){
var e__20495__auto____$7 = e103321;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$7;
}
} else {
throw e103321;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e103319){if((e103319 instanceof Error)){
var e__20495__auto____$7 = e103319;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.todos._remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e103320){if((e103320 instanceof Error)){
var e__20495__auto____$8 = e103320;
if((e__20495__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20495__auto____$8;
}
} else {
throw e103320;

}
}} else {
throw e__20495__auto____$7;
}
} else {
throw e103319;

}
}} else {
throw e__20495__auto____$6;
}
} else {
throw e103318;

}
}} else {
throw e__20495__auto____$5;
}
} else {
throw e103317;

}
}} else {
throw e__20495__auto____$4;
}
} else {
throw e103316;

}
}} else {
throw e__20495__auto____$3;
}
} else {
throw e103315;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e103314;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e103313;

}
}} else {
throw e__20495__auto__;
}
} else {
throw e103312;

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
return cljs.core.filter.call(null,(function (){var G__103330 = (((cljs.core.deref.call(null,visibility) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,visibility).fqn:null);
switch (G__103330) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__103332_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__103332_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__103333_SHARP_){
if(cljs.core.truth_(frontend.todos._enter_key_QMARK_.call(null,p1__103333_SHARP_))){
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
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (id,title,editing_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__103334_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__103334_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__103335_SHARP_){
if(cljs.core.truth_(frontend.todos._enter_key_QMARK_.call(null,p1__103335_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.todos._escape_key_QMARK_.call(null,p1__103335_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624),id], null));
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
if(cljs.core.truth_(editing_QMARK_)){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
return null;
}
})], null)], null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return reagent.core.dom_node.call(null,this$).focus();
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return reagent.core.dom_node.call(null,this$).focus();
})], null));
});
frontend.todos._view_todo = (function frontend$todos$_view_todo(p__103336,dispatch){
var map__103339 = p__103336;
var map__103339__$1 = ((((!((map__103339 == null)))?((((map__103339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__103339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103339):map__103339);
var _todo_ = map__103339__$1;
var id = cljs.core.get.call(null,map__103339__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__103339__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__103339__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__103339__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__103339,map__103339__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__103339,map__103339__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__103339,map__103339__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__103339,map__103339__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__103339,map__103339__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__103339,map__103339__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.todos._view_todo_list = (function frontend$todos$_view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$todos$_view_todo_list_$_iter__103345(s__103346){
return (new cljs.core.LazySeq(null,(function (){
var s__103346__$1 = s__103346;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__103346__$1);
if(temp__4425__auto__){
var s__103346__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103346__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__103346__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__103348 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__103347 = (0);
while(true){
if((i__103347 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__103347);
cljs.core.chunk_append.call(null,b__103348,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__103349 = (i__103347 + (1));
i__103347 = G__103349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103348),frontend$todos$_view_todo_list_$_iter__103345.call(null,cljs.core.chunk_rest.call(null,s__103346__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103348),null);
}
} else {
var todo = cljs.core.first.call(null,s__103346__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$todos$_view_todo_list_$_iter__103345.call(null,cljs.core.rest.call(null,s__103346__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$todos$_view_footer_$_iter__103362(s__103363){
return (new cljs.core.LazySeq(null,(function (){
var s__103363__$1 = s__103363;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__103363__$1);
if(temp__4425__auto__){
var s__103363__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103363__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__103363__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__103365 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__103364 = (0);
while(true){
if((i__103364 < size__17522__auto__)){
var map__103370 = cljs.core._nth.call(null,c__17521__auto__,i__103364);
var map__103370__$1 = ((((!((map__103370 == null)))?((((map__103370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__103370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103370):map__103370);
var key = cljs.core.get.call(null,map__103370__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__103370__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__103370__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__103365,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__103374 = (i__103364 + (1));
i__103364 = G__103374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103365),frontend$todos$_view_footer_$_iter__103362.call(null,cljs.core.chunk_rest.call(null,s__103363__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103365),null);
}
} else {
var map__103372 = cljs.core.first.call(null,s__103363__$2);
var map__103372__$1 = ((((!((map__103372 == null)))?((((map__103372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__103372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103372):map__103372);
var key = cljs.core.get.call(null,map__103372__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__103372__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__103372__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$todos$_view_footer_$_iter__103362.call(null,cljs.core.rest.call(null,s__103363__$2)));
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
frontend.todos.view = (function frontend$todos$view(p__103375,dispatch){
var map__103378 = p__103375;
var map__103378__$1 = ((((!((map__103378 == null)))?((((map__103378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__103378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103378):map__103378);
var _view_model_ = map__103378__$1;
var field = cljs.core.get.call(null,map__103378__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var has_todos_QMARK_ = cljs.core.get.call(null,map__103378__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var todos = cljs.core.get.call(null,map__103378__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var all_completed_QMARK_ = cljs.core.get.call(null,map__103378__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var active_count = cljs.core.get.call(null,map__103378__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__103378__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var visibility = cljs.core.get.call(null,map__103378__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_header,cljs.core.deref.call(null,field),dispatch], null),(cljs.core.truth_(has_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo_list,cljs.core.deref.call(null,todos),cljs.core.deref.call(null,all_completed_QMARK_),dispatch], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_footer,cljs.core.deref.call(null,active_count),cljs.core.deref.call(null,has_completed_todos_QMARK_),cljs.core.deref.call(null,visibility),dispatch], null)], null):null)], null);
});
frontend.todos.new_spec = (function frontend$todos$new_spec(history){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.todos.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.todos.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.todos.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.todos.control,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.todos.new_reconcile.call(null,history)], null);
});

//# sourceMappingURL=todos.js.map?rel=1452715031496