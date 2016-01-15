// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.todos');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('frontend.routing');
goog.require('frontend.devtools');
goog.require('reagent.core');
goog.require('frontend.ui');
goog.require('cljs.core.match');
frontend.todos._init_todo = (function frontend$todos$_init_todo(id,title){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"completed?","completed?",946828354),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"",new cljs.core.Keyword(null,"editing?","editing?",1646440800),false], null);
});
frontend.todos.init = (function frontend$todos$init(todo_titles){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"",new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,frontend.todos._init_todo),cljs.core.map_indexed.call(null,cljs.core.vector,todo_titles)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.count.call(null,todo_titles)], null);
});
frontend.todos._update_todos_STAR_ = (function frontend$todos$_update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___55010 = arguments.length;
var i__17810__auto___55011 = (0);
while(true){
if((i__17810__auto___55011 < len__17809__auto___55010)){
args__17816__auto__.push((arguments[i__17810__auto___55011]));

var G__55012 = (i__17810__auto___55011 + (1));
i__17810__auto___55011 = G__55012;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__55005_SHARP_){
return cljs.core.apply.call(null,f,p1__55005_SHARP_,args);
}),model);
});

frontend.todos._update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.todos._update_todos_STAR_.cljs$lang$applyTo = (function (seq55006){
var G__55007 = cljs.core.first.call(null,seq55006);
var seq55006__$1 = cljs.core.next.call(null,seq55006);
var G__55008 = cljs.core.first.call(null,seq55006__$1);
var seq55006__$2 = cljs.core.next.call(null,seq55006__$1);
var G__55009 = cljs.core.first.call(null,seq55006__$2);
var seq55006__$3 = cljs.core.next.call(null,seq55006__$2);
return frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__55007,G__55008,G__55009,seq55006__$3);
});
frontend.todos._update_todo = (function frontend$todos$_update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___55018 = arguments.length;
var i__17810__auto___55019 = (0);
while(true){
if((i__17810__auto___55019 < len__17809__auto___55018)){
args__17816__auto__.push((arguments[i__17810__auto___55019]));

var G__55020 = (i__17810__auto___55019 + (1));
i__17810__auto___55019 = G__55020;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.todos._update_todos_STAR_,model,(function (p1__55013_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55013_SHARP_),id);
}),f,args);
});

frontend.todos._update_todo.cljs$lang$maxFixedArity = (3);

frontend.todos._update_todo.cljs$lang$applyTo = (function (seq55014){
var G__55015 = cljs.core.first.call(null,seq55014);
var seq55014__$1 = cljs.core.next.call(null,seq55014);
var G__55016 = cljs.core.first.call(null,seq55014__$1);
var seq55014__$2 = cljs.core.next.call(null,seq55014__$1);
var G__55017 = cljs.core.first.call(null,seq55014__$2);
var seq55014__$3 = cljs.core.next.call(null,seq55014__$2);
return frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic(G__55015,G__55016,G__55017,seq55014__$3);
});
frontend.todos._update_todos = (function frontend$todos$_update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___55024 = arguments.length;
var i__17810__auto___55025 = (0);
while(true){
if((i__17810__auto___55025 < len__17809__auto___55024)){
args__17816__auto__.push((arguments[i__17810__auto___55025]));

var G__55026 = (i__17810__auto___55025 + (1));
i__17810__auto___55025 = G__55026;
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

frontend.todos._update_todos.cljs$lang$applyTo = (function (seq55021){
var G__55022 = cljs.core.first.call(null,seq55021);
var seq55021__$1 = cljs.core.next.call(null,seq55021);
var G__55023 = cljs.core.first.call(null,seq55021__$1);
var seq55021__$2 = cljs.core.next.call(null,seq55021__$1);
return frontend.todos._update_todos.cljs$core$IFn$_invoke$arity$variadic(G__55022,G__55023,seq55021__$2);
});
frontend.todos._find_todo = (function frontend$todos$_find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__55027_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55027_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.todos._remove_todos = (function frontend$todos$_remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__55028_SHARP_){
return cljs.core.remove.call(null,pred,p1__55028_SHARP_);
}));
});
frontend.todos._remove_todo = (function frontend$todos$_remove_todo(model,id){
return frontend.todos._remove_todos.call(null,model,(function (p1__55029_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55029_SHARP_),id);
}));
});
frontend.todos.control = (function frontend$todos$control(_model_,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return dispatch.call(null,new cljs.core.Keyword(null,"sample-action","sample-action",653047762));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55071){if((e55071 instanceof Error)){
var e__18365__auto__ = e55071;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-did-replay","frontend.devtools/on-did-replay",1141581615))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e55072){if((e55072 instanceof Error)){
var e__18365__auto____$1 = e55072;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__55060 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__55060,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55087){if((e55087 instanceof Error)){
var e__18365__auto____$2 = e55087;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$2;
}
} else {
throw e55087;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55073){if((e55073 instanceof Error)){
var e__18365__auto____$2 = e55073;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55074){if((e55074 instanceof Error)){
var e__18365__auto____$3 = e55074;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__55062 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__55062,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55086){if((e55086 instanceof Error)){
var e__18365__auto____$4 = e55086;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$4;
}
} else {
throw e55086;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55075){if((e55075 instanceof Error)){
var e__18365__auto____$4 = e55075;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55076){if((e55076 instanceof Error)){
var e__18365__auto____$5 = e55076;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__55064 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__55064,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55083){if((e55083 instanceof Error)){
var e__18365__auto____$6 = e55083;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__55064 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__55064,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55084){if((e55084 instanceof Error)){
var e__18365__auto____$7 = e55084;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
try{var signal_0__55064 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__55064,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55085){if((e55085 instanceof Error)){
var e__18365__auto____$8 = e55085;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$8;
}
} else {
throw e55085;

}
}} else {
throw e__18365__auto____$7;
}
} else {
throw e55084;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e55083;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55077){if((e55077 instanceof Error)){
var e__18365__auto____$6 = e55077;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__55066 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__55066,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55082){if((e55082 instanceof Error)){
var e__18365__auto____$7 = e55082;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e55082;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55078){if((e55078 instanceof Error)){
var e__18365__auto____$7 = e55078;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__55069 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__55069,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55081){if((e55081 instanceof Error)){
var e__18365__auto____$8 = e55081;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$8;
}
} else {
throw e55081;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55079){if((e55079 instanceof Error)){
var e__18365__auto____$8 = e55079;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55080){if((e55080 instanceof Error)){
var e__18365__auto____$9 = e55080;
if((e__18365__auto____$9 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__18365__auto____$9;
}
} else {
throw e55080;

}
}} else {
throw e__18365__auto____$8;
}
} else {
throw e55079;

}
}} else {
throw e__18365__auto____$7;
}
} else {
throw e55078;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e55077;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e55076;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e55075;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e55074;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e55073;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e55072;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e55071;

}
}});
frontend.todos.reconcile = (function frontend$todos$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sample-action","sample-action",653047762))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e55132){if((e55132 instanceof Error)){
var e__18365__auto__ = e55132;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__55121 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__55121,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55147){if((e55147 instanceof Error)){
var e__18365__auto____$1 = e55147;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$1;
}
} else {
throw e55147;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55133){if((e55133 instanceof Error)){
var e__18365__auto____$1 = e55133;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
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
}catch (e55134){if((e55134 instanceof Error)){
var e__18365__auto____$2 = e55134;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__55123 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__55123,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55146){if((e55146 instanceof Error)){
var e__18365__auto____$3 = e55146;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$3;
}
} else {
throw e55146;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55135){if((e55135 instanceof Error)){
var e__18365__auto____$3 = e55135;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.todos._update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55136){if((e55136 instanceof Error)){
var e__18365__auto____$4 = e55136;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__55125 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__55125,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,frontend.todos._update_todos.call(null,model,((function (id,action_0__55125,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__55088_SHARP_){
return cljs.core.assoc.call(null,p1__55088_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55088_SHARP_),id));
});})(id,action_0__55125,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
),id,((function (id,action_0__55125,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__55089_SHARP_){
return cljs.core.assoc.call(null,p1__55089_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__55089_SHARP_));
});})(id,action_0__55125,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55143){if((e55143 instanceof Error)){
var e__18365__auto____$5 = e55143;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__55125 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__55125,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.todos._find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.todos._remove_todo.call(null,model,id);
} else {
return frontend.todos._update_todos.call(null,model,((function (title,id,action_0__55125,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__55090_SHARP_){
return cljs.core.assoc.call(null,p1__55090_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__55125,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e55144){if((e55144 instanceof Error)){
var e__18365__auto____$6 = e55144;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__55125 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__55125,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,model,id,((function (id,action_0__55125,e__18365__auto____$6,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__55091_SHARP_){
return cljs.core.assoc.call(null,p1__55091_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__55091_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__55125,e__18365__auto____$6,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55145){if((e55145 instanceof Error)){
var e__18365__auto____$7 = e55145;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e55145;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e55144;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e55143;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55137){if((e55137 instanceof Error)){
var e__18365__auto____$5 = e55137;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__55127 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__55127,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.todos._update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55142){if((e55142 instanceof Error)){
var e__18365__auto____$6 = e55142;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$6;
}
} else {
throw e55142;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55138){if((e55138 instanceof Error)){
var e__18365__auto____$6 = e55138;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__55130 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__55130,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e55141){if((e55141 instanceof Error)){
var e__18365__auto____$7 = e55141;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e55141;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e55139){if((e55139 instanceof Error)){
var e__18365__auto____$7 = e55139;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.todos._remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e55140){if((e55140 instanceof Error)){
var e__18365__auto____$8 = e55140;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__18365__auto____$8;
}
} else {
throw e55140;

}
}} else {
throw e__18365__auto____$7;
}
} else {
throw e55139;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e55138;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e55137;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e55136;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e55135;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e55134;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e55133;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e55132;

}
}});
frontend.todos._visibility_spec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"title","title",636505583),"All",new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"/",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),"Active",new cljs.core.Keyword(null,"href","href",-793805698),"#/active",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["/active",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"href","href",-793805698),"#/completed",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["/completed",null], null), null)], null)], null);
frontend.todos._visibility = (function frontend$todos$_visibility(model){
var temp__4423__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__55148_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(p1__55148_SHARP_),new cljs.core.Keyword("frontend.routing","token","frontend.routing/token",1365729519).cljs$core$IFn$_invoke$arity$1(model));
}),frontend.todos._visibility_spec)));
if(cljs.core.truth_(temp__4423__auto__)){
var result = temp__4423__auto__;
return result;
} else {
console.error("Could not determine visibility for token",cljs.core.pr_str.call(null,new cljs.core.Keyword("frontend.routing","token","frontend.routing/token",1365729519).cljs$core$IFn$_invoke$arity$1(model)));

return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,frontend.todos._visibility_spec));
}
});
frontend.todos.view_model = (function frontend$todos$view_model(model){
var todos = reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model));
}));
var visibility = reagent.ratom.make_reaction.call(null,((function (todos){
return (function (){
return frontend.todos._visibility.call(null,cljs.core.deref.call(null,model));
});})(todos))
);
return cljs.core.assoc.call(null,frontend.ui.track_keys.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500)], null)),new cljs.core.Keyword(null,"visibility","visibility",1338380893),visibility,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793),reagent.ratom.make_reaction.call(null,((function (todos,visibility){
return (function (){
return (cljs.core.count.call(null,cljs.core.deref.call(null,todos)) > (0));
});})(todos,visibility))
),new cljs.core.Keyword(null,"todos","todos",630308868),reagent.ratom.make_reaction.call(null,((function (todos,visibility){
return (function (){
return cljs.core.filter.call(null,(function (){var G__55150 = (((cljs.core.deref.call(null,visibility) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,visibility).fqn:null);
switch (G__55150) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55152_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__55152_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__55153_SHARP_){
if(cljs.core.truth_(frontend.todos._enter_key_QMARK_.call(null,p1__55153_SHARP_))){
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55154_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__55154_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__55155_SHARP_){
if(cljs.core.truth_(frontend.todos._enter_key_QMARK_.call(null,p1__55155_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.todos._escape_key_QMARK_.call(null,p1__55155_SHARP_))){
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
frontend.todos._view_todo = (function frontend$todos$_view_todo(p__55156,dispatch){
var map__55159 = p__55156;
var map__55159__$1 = ((((!((map__55159 == null)))?((((map__55159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55159):map__55159);
var _todo_ = map__55159__$1;
var id = cljs.core.get.call(null,map__55159__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__55159__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__55159__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__55159__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__55159,map__55159__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__55159,map__55159__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__55159,map__55159__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__55159,map__55159__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__55159,map__55159__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__55159,map__55159__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.todos._view_todo_list = (function frontend$todos$_view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$todos$_view_todo_list_$_iter__55165(s__55166){
return (new cljs.core.LazySeq(null,(function (){
var s__55166__$1 = s__55166;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__55166__$1);
if(temp__4425__auto__){
var s__55166__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55166__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__55166__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__55168 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__55167 = (0);
while(true){
if((i__55167 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__55167);
cljs.core.chunk_append.call(null,b__55168,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__55169 = (i__55167 + (1));
i__55167 = G__55169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55168),frontend$todos$_view_todo_list_$_iter__55165.call(null,cljs.core.chunk_rest.call(null,s__55166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55168),null);
}
} else {
var todo = cljs.core.first.call(null,s__55166__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$todos$_view_todo_list_$_iter__55165.call(null,cljs.core.rest.call(null,s__55166__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$todos$_view_footer_$_iter__55182(s__55183){
return (new cljs.core.LazySeq(null,(function (){
var s__55183__$1 = s__55183;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__55183__$1);
if(temp__4425__auto__){
var s__55183__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55183__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__55183__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__55185 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__55184 = (0);
while(true){
if((i__55184 < size__17522__auto__)){
var map__55190 = cljs.core._nth.call(null,c__17521__auto__,i__55184);
var map__55190__$1 = ((((!((map__55190 == null)))?((((map__55190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55190):map__55190);
var key = cljs.core.get.call(null,map__55190__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__55190__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__55190__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__55185,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__55194 = (i__55184 + (1));
i__55184 = G__55194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55185),frontend$todos$_view_footer_$_iter__55182.call(null,cljs.core.chunk_rest.call(null,s__55183__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55185),null);
}
} else {
var map__55192 = cljs.core.first.call(null,s__55183__$2);
var map__55192__$1 = ((((!((map__55192 == null)))?((((map__55192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55192):map__55192);
var key = cljs.core.get.call(null,map__55192__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__55192__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__55192__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$todos$_view_footer_$_iter__55182.call(null,cljs.core.rest.call(null,s__55183__$2)));
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
frontend.todos.view = (function frontend$todos$view(p__55195,dispatch){
var map__55198 = p__55195;
var map__55198__$1 = ((((!((map__55198 == null)))?((((map__55198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55198):map__55198);
var _view_model_ = map__55198__$1;
var field = cljs.core.get.call(null,map__55198__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var has_todos_QMARK_ = cljs.core.get.call(null,map__55198__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var todos = cljs.core.get.call(null,map__55198__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var all_completed_QMARK_ = cljs.core.get.call(null,map__55198__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var active_count = cljs.core.get.call(null,map__55198__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__55198__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var visibility = cljs.core.get.call(null,map__55198__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_header,cljs.core.deref.call(null,field),dispatch], null),(cljs.core.truth_(cljs.core.deref.call(null,has_todos_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo_list,cljs.core.deref.call(null,todos),cljs.core.deref.call(null,all_completed_QMARK_),dispatch], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_footer,cljs.core.deref.call(null,active_count),cljs.core.deref.call(null,has_completed_todos_QMARK_),cljs.core.deref.call(null,visibility),dispatch], null)], null):null)], null);
});
frontend.todos.spec = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.todos.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.todos.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.todos.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.todos.control,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.todos.reconcile], null);

//# sourceMappingURL=todos.js.map?rel=1452862458380