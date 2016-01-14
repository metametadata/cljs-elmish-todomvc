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
frontend.todos.init = (function frontend$todos$init(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"",new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,frontend.todos._init_todo.call(null,(2),"Take a bath")),frontend.todos._init_todo.call(null,(1),"Finish this project")),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(3)], null);
});
frontend.todos._update_todos_STAR_ = (function frontend$todos$_update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29851 = arguments.length;
var i__17810__auto___29852 = (0);
while(true){
if((i__17810__auto___29852 < len__17809__auto___29851)){
args__17816__auto__.push((arguments[i__17810__auto___29852]));

var G__29853 = (i__17810__auto___29852 + (1));
i__17810__auto___29852 = G__29853;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__29846_SHARP_){
return cljs.core.apply.call(null,f,p1__29846_SHARP_,args);
}),model);
});

frontend.todos._update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.todos._update_todos_STAR_.cljs$lang$applyTo = (function (seq29847){
var G__29848 = cljs.core.first.call(null,seq29847);
var seq29847__$1 = cljs.core.next.call(null,seq29847);
var G__29849 = cljs.core.first.call(null,seq29847__$1);
var seq29847__$2 = cljs.core.next.call(null,seq29847__$1);
var G__29850 = cljs.core.first.call(null,seq29847__$2);
var seq29847__$3 = cljs.core.next.call(null,seq29847__$2);
return frontend.todos._update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__29848,G__29849,G__29850,seq29847__$3);
});
frontend.todos._update_todo = (function frontend$todos$_update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29859 = arguments.length;
var i__17810__auto___29860 = (0);
while(true){
if((i__17810__auto___29860 < len__17809__auto___29859)){
args__17816__auto__.push((arguments[i__17810__auto___29860]));

var G__29861 = (i__17810__auto___29860 + (1));
i__17810__auto___29860 = G__29861;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.todos._update_todos_STAR_,model,(function (p1__29854_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29854_SHARP_),id);
}),f,args);
});

frontend.todos._update_todo.cljs$lang$maxFixedArity = (3);

frontend.todos._update_todo.cljs$lang$applyTo = (function (seq29855){
var G__29856 = cljs.core.first.call(null,seq29855);
var seq29855__$1 = cljs.core.next.call(null,seq29855);
var G__29857 = cljs.core.first.call(null,seq29855__$1);
var seq29855__$2 = cljs.core.next.call(null,seq29855__$1);
var G__29858 = cljs.core.first.call(null,seq29855__$2);
var seq29855__$3 = cljs.core.next.call(null,seq29855__$2);
return frontend.todos._update_todo.cljs$core$IFn$_invoke$arity$variadic(G__29856,G__29857,G__29858,seq29855__$3);
});
frontend.todos._update_todos = (function frontend$todos$_update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29865 = arguments.length;
var i__17810__auto___29866 = (0);
while(true){
if((i__17810__auto___29866 < len__17809__auto___29865)){
args__17816__auto__.push((arguments[i__17810__auto___29866]));

var G__29867 = (i__17810__auto___29866 + (1));
i__17810__auto___29866 = G__29867;
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

frontend.todos._update_todos.cljs$lang$applyTo = (function (seq29862){
var G__29863 = cljs.core.first.call(null,seq29862);
var seq29862__$1 = cljs.core.next.call(null,seq29862);
var G__29864 = cljs.core.first.call(null,seq29862__$1);
var seq29862__$2 = cljs.core.next.call(null,seq29862__$1);
return frontend.todos._update_todos.cljs$core$IFn$_invoke$arity$variadic(G__29863,G__29864,seq29862__$2);
});
frontend.todos._find_todo = (function frontend$todos$_find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29868_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29868_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.todos._remove_todos = (function frontend$todos$_remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__29869_SHARP_){
return cljs.core.remove.call(null,pred,p1__29869_SHARP_);
}));
});
frontend.todos._remove_todo = (function frontend$todos$_remove_todo(model,id){
return frontend.todos._remove_todos.call(null,model,(function (p1__29870_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29870_SHARP_),id);
}));
});
frontend.todos.control = (function frontend$todos$control(_model_,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return dispatch.call(null,new cljs.core.Keyword(null,"sample-action","sample-action",653047762));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29912){if((e29912 instanceof Error)){
var e__18365__auto__ = e29912;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-did-replay","frontend.devtools/on-did-replay",1141581615))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e29913){if((e29913 instanceof Error)){
var e__18365__auto____$1 = e29913;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29901 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29901,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29928){if((e29928 instanceof Error)){
var e__18365__auto____$2 = e29928;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$2;
}
} else {
throw e29928;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29914){if((e29914 instanceof Error)){
var e__18365__auto____$2 = e29914;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29915){if((e29915 instanceof Error)){
var e__18365__auto____$3 = e29915;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29903 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29903,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29927){if((e29927 instanceof Error)){
var e__18365__auto____$4 = e29927;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$4;
}
} else {
throw e29927;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29916){if((e29916 instanceof Error)){
var e__18365__auto____$4 = e29916;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29917){if((e29917 instanceof Error)){
var e__18365__auto____$5 = e29917;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29905 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29905,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29924){if((e29924 instanceof Error)){
var e__18365__auto____$6 = e29924;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__29905 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29905,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29925){if((e29925 instanceof Error)){
var e__18365__auto____$7 = e29925;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
try{var signal_0__29905 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29905,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29926){if((e29926 instanceof Error)){
var e__18365__auto____$8 = e29926;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$8;
}
} else {
throw e29926;

}
}} else {
throw e__18365__auto____$7;
}
} else {
throw e29925;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e29924;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29918){if((e29918 instanceof Error)){
var e__18365__auto____$6 = e29918;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__29907 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29907,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29923){if((e29923 instanceof Error)){
var e__18365__auto____$7 = e29923;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e29923;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29919){if((e29919 instanceof Error)){
var e__18365__auto____$7 = e29919;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29910 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29910,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29922){if((e29922 instanceof Error)){
var e__18365__auto____$8 = e29922;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$8;
}
} else {
throw e29922;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29920){if((e29920 instanceof Error)){
var e__18365__auto____$8 = e29920;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29921){if((e29921 instanceof Error)){
var e__18365__auto____$9 = e29921;
if((e__18365__auto____$9 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__18365__auto____$9;
}
} else {
throw e29921;

}
}} else {
throw e__18365__auto____$8;
}
} else {
throw e29920;

}
}} else {
throw e__18365__auto____$7;
}
} else {
throw e29919;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e29918;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e29917;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e29916;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e29915;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e29914;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e29913;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e29912;

}
}});
frontend.todos.reconcile = (function frontend$todos$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sample-action","sample-action",653047762))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e29973){if((e29973 instanceof Error)){
var e__18365__auto__ = e29973;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29962 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29962,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29988){if((e29988 instanceof Error)){
var e__18365__auto____$1 = e29988;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$1;
}
} else {
throw e29988;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29974){if((e29974 instanceof Error)){
var e__18365__auto____$1 = e29974;
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
}catch (e29975){if((e29975 instanceof Error)){
var e__18365__auto____$2 = e29975;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29964 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29964,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29987){if((e29987 instanceof Error)){
var e__18365__auto____$3 = e29987;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$3;
}
} else {
throw e29987;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29976){if((e29976 instanceof Error)){
var e__18365__auto____$3 = e29976;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.todos._update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29977){if((e29977 instanceof Error)){
var e__18365__auto____$4 = e29977;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29966 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29966,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,frontend.todos._update_todos.call(null,model,((function (id,action_0__29966,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__29929_SHARP_){
return cljs.core.assoc.call(null,p1__29929_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29929_SHARP_),id));
});})(id,action_0__29966,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
),id,((function (id,action_0__29966,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__29930_SHARP_){
return cljs.core.assoc.call(null,p1__29930_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__29930_SHARP_));
});})(id,action_0__29966,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29984){if((e29984 instanceof Error)){
var e__18365__auto____$5 = e29984;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__29966 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29966,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.todos._find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.todos._remove_todo.call(null,model,id);
} else {
return frontend.todos._update_todos.call(null,model,((function (title,id,action_0__29966,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__29931_SHARP_){
return cljs.core.assoc.call(null,p1__29931_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__29966,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e29985){if((e29985 instanceof Error)){
var e__18365__auto____$6 = e29985;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__29966 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29966,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._update_todo.call(null,model,id,((function (id,action_0__29966,e__18365__auto____$6,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__29932_SHARP_){
return cljs.core.assoc.call(null,p1__29932_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__29932_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__29966,e__18365__auto____$6,e__18365__auto____$5,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29986){if((e29986 instanceof Error)){
var e__18365__auto____$7 = e29986;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e29986;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e29985;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e29984;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29978){if((e29978 instanceof Error)){
var e__18365__auto____$5 = e29978;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__29968 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29968,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.todos._update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29983){if((e29983 instanceof Error)){
var e__18365__auto____$6 = e29983;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$6;
}
} else {
throw e29983;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29979){if((e29979 instanceof Error)){
var e__18365__auto____$6 = e29979;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29971 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29971,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos._remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29982){if((e29982 instanceof Error)){
var e__18365__auto____$7 = e29982;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$7;
}
} else {
throw e29982;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29980){if((e29980 instanceof Error)){
var e__18365__auto____$7 = e29980;
if((e__18365__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.todos._remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29981){if((e29981 instanceof Error)){
var e__18365__auto____$8 = e29981;
if((e__18365__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__18365__auto____$8;
}
} else {
throw e29981;

}
}} else {
throw e__18365__auto____$7;
}
} else {
throw e29980;

}
}} else {
throw e__18365__auto____$6;
}
} else {
throw e29979;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e29978;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e29977;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e29976;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e29975;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e29974;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e29973;

}
}});
frontend.todos._visibility_spec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"title","title",636505583),"All",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"token","token",-1211463215),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),"Active",new cljs.core.Keyword(null,"href","href",-793805698),"#/active",new cljs.core.Keyword(null,"token","token",-1211463215),"/active"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"href","href",-793805698),"#/completed",new cljs.core.Keyword(null,"token","token",-1211463215),"/completed"], null)], null);
frontend.todos._visibility = (function frontend$todos$_visibility(model){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29989_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__29989_SHARP_),new cljs.core.Keyword("frontend.routing","token","frontend.routing/token",1365729519).cljs$core$IFn$_invoke$arity$1(model));
}),frontend.todos._visibility_spec)));
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
return cljs.core.filter.call(null,(function (){var G__29991 = (((cljs.core.deref.call(null,visibility) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,visibility).fqn:null);
switch (G__29991) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29993_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__29993_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__29994_SHARP_){
if(cljs.core.truth_(frontend.todos._enter_key_QMARK_.call(null,p1__29994_SHARP_))){
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29995_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__29995_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__29996_SHARP_){
if(cljs.core.truth_(frontend.todos._enter_key_QMARK_.call(null,p1__29996_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.todos._escape_key_QMARK_.call(null,p1__29996_SHARP_))){
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
frontend.todos._view_todo = (function frontend$todos$_view_todo(p__29997,dispatch){
var map__30000 = p__29997;
var map__30000__$1 = ((((!((map__30000 == null)))?((((map__30000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30000):map__30000);
var _todo_ = map__30000__$1;
var id = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__30000,map__30000__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__30000,map__30000__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__30000,map__30000__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__30000,map__30000__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__30000,map__30000__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__30000,map__30000__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.todos._view_todo_list = (function frontend$todos$_view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$todos$_view_todo_list_$_iter__30006(s__30007){
return (new cljs.core.LazySeq(null,(function (){
var s__30007__$1 = s__30007;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30007__$1);
if(temp__4425__auto__){
var s__30007__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30007__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__30007__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__30009 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__30008 = (0);
while(true){
if((i__30008 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__30008);
cljs.core.chunk_append.call(null,b__30009,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__30010 = (i__30008 + (1));
i__30008 = G__30010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30009),frontend$todos$_view_todo_list_$_iter__30006.call(null,cljs.core.chunk_rest.call(null,s__30007__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30009),null);
}
} else {
var todo = cljs.core.first.call(null,s__30007__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$todos$_view_todo_list_$_iter__30006.call(null,cljs.core.rest.call(null,s__30007__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$todos$_view_footer_$_iter__30023(s__30024){
return (new cljs.core.LazySeq(null,(function (){
var s__30024__$1 = s__30024;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30024__$1);
if(temp__4425__auto__){
var s__30024__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30024__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__30024__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__30026 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__30025 = (0);
while(true){
if((i__30025 < size__17522__auto__)){
var map__30031 = cljs.core._nth.call(null,c__17521__auto__,i__30025);
var map__30031__$1 = ((((!((map__30031 == null)))?((((map__30031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30031):map__30031);
var key = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__30026,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__30035 = (i__30025 + (1));
i__30025 = G__30035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30026),frontend$todos$_view_footer_$_iter__30023.call(null,cljs.core.chunk_rest.call(null,s__30024__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30026),null);
}
} else {
var map__30033 = cljs.core.first.call(null,s__30024__$2);
var map__30033__$1 = ((((!((map__30033 == null)))?((((map__30033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30033):map__30033);
var key = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$todos$_view_footer_$_iter__30023.call(null,cljs.core.rest.call(null,s__30024__$2)));
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
frontend.todos.view = (function frontend$todos$view(p__30036,dispatch){
var map__30039 = p__30036;
var map__30039__$1 = ((((!((map__30039 == null)))?((((map__30039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30039):map__30039);
var _view_model_ = map__30039__$1;
var field = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var has_todos_QMARK_ = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var todos = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var all_completed_QMARK_ = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var active_count = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var visibility = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_header,cljs.core.deref.call(null,field),dispatch], null),(cljs.core.truth_(has_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_todo_list,cljs.core.deref.call(null,todos),cljs.core.deref.call(null,all_completed_QMARK_),dispatch], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos._view_footer,cljs.core.deref.call(null,active_count),cljs.core.deref.call(null,has_completed_todos_QMARK_),cljs.core.deref.call(null,visibility),dispatch], null)], null):null)], null);
});
frontend.todos.spec = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.todos.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.todos.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.todos.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.todos.control,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.todos.reconcile], null);

//# sourceMappingURL=todos.js.map?rel=1452809604635