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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"",new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,frontend.todos.init_todo.call(null,(2),"Take a bath")),frontend.todos.init_todo.call(null,(1),"Finish this project")),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(3)], null),new cljs.core.Keyword(null,"on-init","on-init",-1723361030)], null);
});
frontend.todos.update_todos_STAR_ = (function frontend$todos$update_todos_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___82803 = arguments.length;
var i__17810__auto___82804 = (0);
while(true){
if((i__17810__auto___82804 < len__17809__auto___82803)){
args__17816__auto__.push((arguments[i__17810__auto___82804]));

var G__82805 = (i__17810__auto___82804 + (1));
i__17810__auto___82804 = G__82805;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868),com.rpl.specter.ALL,pred], null),(function (p1__82798_SHARP_){
return cljs.core.apply.call(null,f,p1__82798_SHARP_,args);
}),model);
});

frontend.todos.update_todos_STAR_.cljs$lang$maxFixedArity = (3);

frontend.todos.update_todos_STAR_.cljs$lang$applyTo = (function (seq82799){
var G__82800 = cljs.core.first.call(null,seq82799);
var seq82799__$1 = cljs.core.next.call(null,seq82799);
var G__82801 = cljs.core.first.call(null,seq82799__$1);
var seq82799__$2 = cljs.core.next.call(null,seq82799__$1);
var G__82802 = cljs.core.first.call(null,seq82799__$2);
var seq82799__$3 = cljs.core.next.call(null,seq82799__$2);
return frontend.todos.update_todos_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__82800,G__82801,G__82802,seq82799__$3);
});
frontend.todos.update_todo = (function frontend$todos$update_todo(var_args){
var args__17816__auto__ = [];
var len__17809__auto___82811 = arguments.length;
var i__17810__auto___82812 = (0);
while(true){
if((i__17810__auto___82812 < len__17809__auto___82811)){
args__17816__auto__.push((arguments[i__17810__auto___82812]));

var G__82813 = (i__17810__auto___82812 + (1));
i__17810__auto___82812 = G__82813;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.todos.update_todos_STAR_,model,(function (p1__82806_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__82806_SHARP_),id);
}),f,args);
});

frontend.todos.update_todo.cljs$lang$maxFixedArity = (3);

frontend.todos.update_todo.cljs$lang$applyTo = (function (seq82807){
var G__82808 = cljs.core.first.call(null,seq82807);
var seq82807__$1 = cljs.core.next.call(null,seq82807);
var G__82809 = cljs.core.first.call(null,seq82807__$1);
var seq82807__$2 = cljs.core.next.call(null,seq82807__$1);
var G__82810 = cljs.core.first.call(null,seq82807__$2);
var seq82807__$3 = cljs.core.next.call(null,seq82807__$2);
return frontend.todos.update_todo.cljs$core$IFn$_invoke$arity$variadic(G__82808,G__82809,G__82810,seq82807__$3);
});
frontend.todos.update_todos = (function frontend$todos$update_todos(var_args){
var args__17816__auto__ = [];
var len__17809__auto___82817 = arguments.length;
var i__17810__auto___82818 = (0);
while(true){
if((i__17810__auto___82818 < len__17809__auto___82817)){
args__17816__auto__.push((arguments[i__17810__auto___82818]));

var G__82819 = (i__17810__auto___82818 + (1));
i__17810__auto___82818 = G__82819;
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

frontend.todos.update_todos.cljs$lang$applyTo = (function (seq82814){
var G__82815 = cljs.core.first.call(null,seq82814);
var seq82814__$1 = cljs.core.next.call(null,seq82814);
var G__82816 = cljs.core.first.call(null,seq82814__$1);
var seq82814__$2 = cljs.core.next.call(null,seq82814__$1);
return frontend.todos.update_todos.cljs$core$IFn$_invoke$arity$variadic(G__82815,G__82816,seq82814__$2);
});
frontend.todos.find_todo = (function frontend$todos$find_todo(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__82820_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__82820_SHARP_),id);
}),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.todos.remove_todos = (function frontend$todos$remove_todos(model,pred){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),(function (p1__82821_SHARP_){
return cljs.core.remove.call(null,pred,p1__82821_SHARP_);
}));
});
frontend.todos.remove_todo = (function frontend$todos$remove_todo(model,id){
return frontend.todos.remove_todos.call(null,model,(function (p1__82822_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__82822_SHARP_),id);
}));
});
frontend.todos.visibility_spec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"title","title",636505583),"All",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"token","token",-1211463215),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),"Active",new cljs.core.Keyword(null,"href","href",-793805698),"#/active",new cljs.core.Keyword(null,"token","token",-1211463215),"/active"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"href","href",-793805698),"#/completed",new cljs.core.Keyword(null,"token","token",-1211463215),"/completed"], null)], null);
frontend.todos.control = (function frontend$todos$control(_model_,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-init","on-init",-1723361030))){
return dispatch.call(null,new cljs.core.Keyword(null,"sample-action","sample-action",653047762));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82865){if((e82865 instanceof Error)){
var e__21825__auto__ = e82865;
if((e__21825__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__82854 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__82854,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908))){
var token = cljs.core.nth.call(null,signal,(1));
cljs.core.println.call(null," token =",cljs.core.pr_str.call(null,token));

var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (token,signal_0__82854,e__21825__auto__){
return (function (p1__82823_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__82823_SHARP_),token);
});})(token,signal_0__82854,e__21825__auto__))
,frontend.todos.visibility_spec));
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
cljs.core.println.call(null,"  route match =",cljs.core.pr_str.call(null,match));

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-visibility","set-visibility",1621948326),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(match)], null));
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e82880){if((e82880 instanceof Error)){
var e__21825__auto____$1 = e82880;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__82854 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__82854,new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field","update-field",521547570),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82881){if((e82881 instanceof Error)){
var e__21825__auto____$2 = e82881;
if((e__21825__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$2;
}
} else {
throw e82881;

}
}} else {
throw e__21825__auto____$1;
}
} else {
throw e82880;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e82866){if((e82866 instanceof Error)){
var e__21825__auto____$1 = e82866;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-add","on-add",-1283372042))){
return dispatch.call(null,new cljs.core.Keyword(null,"add","add",235287739));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82867){if((e82867 instanceof Error)){
var e__21825__auto____$2 = e82867;
if((e__21825__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__82856 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__82856,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82879){if((e82879 instanceof Error)){
var e__21825__auto____$3 = e82879;
if((e__21825__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$3;
}
} else {
throw e82879;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e82868){if((e82868 instanceof Error)){
var e__21825__auto____$3 = e82868;
if((e__21825__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82869){if((e82869 instanceof Error)){
var e__21825__auto____$4 = e82869;
if((e__21825__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__82858 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__82858,new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-editing","start-editing",36503254),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82876){if((e82876 instanceof Error)){
var e__21825__auto____$5 = e82876;
if((e__21825__auto____$5 === cljs.core.match.backtrack)){
try{var signal_0__82858 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__82858,new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82877){if((e82877 instanceof Error)){
var e__21825__auto____$6 = e82877;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
try{var signal_0__82858 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__82858,new cljs.core.Keyword(null,"on-cancel-editing","on-cancel-editing",-436027624))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82878){if((e82878 instanceof Error)){
var e__21825__auto____$7 = e82878;
if((e__21825__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$7;
}
} else {
throw e82878;

}
}} else {
throw e__21825__auto____$6;
}
} else {
throw e82877;

}
}} else {
throw e__21825__auto____$5;
}
} else {
throw e82876;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e82870){if((e82870 instanceof Error)){
var e__21825__auto____$5 = e82870;
if((e__21825__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 3))){
try{var signal_0__82860 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__82860,new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114))){
var id = cljs.core.nth.call(null,signal,(1));
var val = cljs.core.nth.call(null,signal,(2));
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-todo","update-todo",1473036639),id,val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82875){if((e82875 instanceof Error)){
var e__21825__auto____$6 = e82875;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$6;
}
} else {
throw e82875;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e82871){if((e82871 instanceof Error)){
var e__21825__auto____$6 = e82871;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__82863 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__82863,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82874){if((e82874 instanceof Error)){
var e__21825__auto____$7 = e82874;
if((e__21825__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$7;
}
} else {
throw e82874;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e82872){if((e82872 instanceof Error)){
var e__21825__auto____$7 = e82872;
if((e__21825__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-clear-completed","on-clear-completed",-1939293477))){
return dispatch.call(null,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82873){if((e82873 instanceof Error)){
var e__21825__auto____$8 = e82873;
if((e__21825__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__21825__auto____$8;
}
} else {
throw e82873;

}
}} else {
throw e__21825__auto____$7;
}
} else {
throw e82872;

}
}} else {
throw e__21825__auto____$6;
}
} else {
throw e82871;

}
}} else {
throw e__21825__auto____$5;
}
} else {
throw e82870;

}
}} else {
throw e__21825__auto____$4;
}
} else {
throw e82869;

}
}} else {
throw e__21825__auto____$3;
}
} else {
throw e82868;

}
}} else {
throw e__21825__auto____$2;
}
} else {
throw e82867;

}
}} else {
throw e__21825__auto____$1;
}
} else {
throw e82866;

}
}} else {
throw e__21825__auto__;
}
} else {
throw e82865;

}
}});
frontend.todos.reconcile = (function frontend$todos$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sample-action","sample-action",653047762))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e82927){if((e82927 instanceof Error)){
var e__21825__auto__ = e82927;
if((e__21825__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__82916 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__82916,new cljs.core.Keyword(null,"set-visibility","set-visibility",1621948326))){
var key = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"visibility","visibility",1338380893),key);
} else {
throw cljs.core.match.backtrack;

}
}catch (e82942){if((e82942 instanceof Error)){
var e__21825__auto____$1 = e82942;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__82916 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__82916,new cljs.core.Keyword(null,"update-field","update-field",521547570))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"field","field",-1302436500),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e82943){if((e82943 instanceof Error)){
var e__21825__auto____$2 = e82943;
if((e__21825__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$2;
}
} else {
throw e82943;

}
}} else {
throw e__21825__auto____$1;
}
} else {
throw e82942;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e82928){if((e82928 instanceof Error)){
var e__21825__auto____$1 = e82928;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
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
}catch (e82929){if((e82929 instanceof Error)){
var e__21825__auto____$2 = e82929;
if((e__21825__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__82918 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__82918,new cljs.core.Keyword(null,"toggle","toggle",1291842030))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"completed?","completed?",946828354),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e82941){if((e82941 instanceof Error)){
var e__21825__auto____$3 = e82941;
if((e__21825__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$3;
}
} else {
throw e82941;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e82930){if((e82930 instanceof Error)){
var e__21825__auto____$3 = e82930;
if((e__21825__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349))){
var all_completed_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed?","completed?",946828354),new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(model));
return frontend.todos.update_todos.call(null,model,cljs.core.assoc,new cljs.core.Keyword(null,"completed?","completed?",946828354),!(all_completed_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82931){if((e82931 instanceof Error)){
var e__21825__auto____$4 = e82931;
if((e__21825__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__82920 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__82920,new cljs.core.Keyword(null,"start-editing","start-editing",36503254))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,frontend.todos.update_todos.call(null,model,((function (id,action_0__82920,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__){
return (function (p1__82882_SHARP_){
return cljs.core.assoc.call(null,p1__82882_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__82882_SHARP_),id));
});})(id,action_0__82920,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__))
),id,((function (id,action_0__82920,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__){
return (function (p1__82883_SHARP_){
return cljs.core.assoc.call(null,p1__82883_SHARP_,new cljs.core.Keyword(null,"original-title","original-title",1909208979),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__82883_SHARP_));
});})(id,action_0__82920,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e82938){if((e82938 instanceof Error)){
var e__21825__auto____$5 = e82938;
if((e__21825__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__82920 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__82920,new cljs.core.Keyword(null,"stop-editing","stop-editing",8387561))){
var id = cljs.core.nth.call(null,action,(1));
var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(frontend.todos.find_todo.call(null,model,id)));
if(clojure.string.blank_QMARK_.call(null,title)){
return frontend.todos.remove_todo.call(null,model,id);
} else {
return frontend.todos.update_todos.call(null,model,((function (title,id,action_0__82920,e__21825__auto____$5,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__){
return (function (p1__82884_SHARP_){
return cljs.core.assoc.call(null,p1__82884_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(title,id,action_0__82920,e__21825__auto____$5,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__))
);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e82939){if((e82939 instanceof Error)){
var e__21825__auto____$6 = e82939;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__82920 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__82920,new cljs.core.Keyword(null,"cancel-editing","cancel-editing",437543526))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.update_todo.call(null,model,id,((function (id,action_0__82920,e__21825__auto____$6,e__21825__auto____$5,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__){
return (function (p1__82885_SHARP_){
return cljs.core.assoc.call(null,p1__82885_SHARP_,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979).cljs$core$IFn$_invoke$arity$1(p1__82885_SHARP_),new cljs.core.Keyword(null,"original-title","original-title",1909208979),"");
});})(id,action_0__82920,e__21825__auto____$6,e__21825__auto____$5,e__21825__auto____$4,e__21825__auto____$3,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e82940){if((e82940 instanceof Error)){
var e__21825__auto____$7 = e82940;
if((e__21825__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$7;
}
} else {
throw e82940;

}
}} else {
throw e__21825__auto____$6;
}
} else {
throw e82939;

}
}} else {
throw e__21825__auto____$5;
}
} else {
throw e82938;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e82932){if((e82932 instanceof Error)){
var e__21825__auto____$5 = e82932;
if((e__21825__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__82922 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__82922,new cljs.core.Keyword(null,"update-todo","update-todo",1473036639))){
var id = cljs.core.nth.call(null,action,(1));
var val = cljs.core.nth.call(null,action,(2));
return frontend.todos.update_todo.call(null,model,id,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e82937){if((e82937 instanceof Error)){
var e__21825__auto____$6 = e82937;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$6;
}
} else {
throw e82937;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e82933){if((e82933 instanceof Error)){
var e__21825__auto____$6 = e82933;
if((e__21825__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__82925 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__82925,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.todos.remove_todo.call(null,model,id);
} else {
throw cljs.core.match.backtrack;

}
}catch (e82936){if((e82936 instanceof Error)){
var e__21825__auto____$7 = e82936;
if((e__21825__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$7;
}
} else {
throw e82936;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e82934){if((e82934 instanceof Error)){
var e__21825__auto____$7 = e82934;
if((e__21825__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))){
return frontend.todos.remove_todos.call(null,model,new cljs.core.Keyword(null,"completed?","completed?",946828354));
} else {
throw cljs.core.match.backtrack;

}
}catch (e82935){if((e82935 instanceof Error)){
var e__21825__auto____$8 = e82935;
if((e__21825__auto____$8 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__21825__auto____$8;
}
} else {
throw e82935;

}
}} else {
throw e__21825__auto____$7;
}
} else {
throw e82934;

}
}} else {
throw e__21825__auto____$6;
}
} else {
throw e82933;

}
}} else {
throw e__21825__auto____$5;
}
} else {
throw e82932;

}
}} else {
throw e__21825__auto____$4;
}
} else {
throw e82931;

}
}} else {
throw e__21825__auto____$3;
}
} else {
throw e82930;

}
}} else {
throw e__21825__auto____$2;
}
} else {
throw e82929;

}
}} else {
throw e__21825__auto____$1;
}
} else {
throw e82928;

}
}} else {
throw e__21825__auto__;
}
} else {
throw e82927;

}
}});
frontend.todos.view_model = (function frontend$todos$view_model(model){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.filter.call(null,(function (){var G__82945 = (((new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(model).fqn:null);
switch (G__82945) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),field,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__82947_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-field","on-update-field",764010162),p1__82947_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__82948_SHARP_){
if(cljs.core.truth_(frontend.todos.enter_key_QMARK_.call(null,p1__82948_SHARP_))){
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__82949_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-update-todo","on-update-todo",1852752114),id,p1__82949_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__82950_SHARP_){
if(cljs.core.truth_(frontend.todos.enter_key_QMARK_.call(null,p1__82950_SHARP_))){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-stop-editing","on-stop-editing",2121759568),id], null));
} else {
if(cljs.core.truth_(frontend.todos.escape_key_QMARK_.call(null,p1__82950_SHARP_))){
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
frontend.todos.view_todo = (function frontend$todos$view_todo(p__82951,dispatch){
var map__82954 = p__82951;
var map__82954__$1 = ((((!((map__82954 == null)))?((((map__82954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82954):map__82954);
var _todo_ = map__82954__$1;
var id = cljs.core.get.call(null,map__82954__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__82954__$1,new cljs.core.Keyword(null,"title","title",636505583));
var editing_QMARK_ = cljs.core.get.call(null,map__82954__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var completed_QMARK_ = cljs.core.get.call(null,map__82954__$1,new cljs.core.Keyword(null,"completed?","completed?",946828354));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(editing_QMARK_)?"editing":(cljs.core.truth_(completed_QMARK_)?"completed":null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__82954,map__82954__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),id], null));
});})(map__82954,map__82954__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__82954,map__82954__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-start-editing","on-start-editing",888969745),id], null));
});})(map__82954,map__82954__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__82954,map__82954__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__82954,map__82954__$1,_todo_,id,title,editing_QMARK_,completed_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo_input,id,title,editing_QMARK_,dispatch], null)], null);
});
frontend.todos.view_todo_list = (function frontend$todos$view_todo_list(todos,all_completed_QMARK_,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle-all","input.toggle-all",2102292209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_completed_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-all","on-toggle-all",563544535));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__17523__auto__ = (function frontend$todos$view_todo_list_$_iter__82960(s__82961){
return (new cljs.core.LazySeq(null,(function (){
var s__82961__$1 = s__82961;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__82961__$1);
if(temp__4425__auto__){
var s__82961__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__82961__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__82961__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__82963 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__82962 = (0);
while(true){
if((i__82962 < size__17522__auto__)){
var todo = cljs.core._nth.call(null,c__17521__auto__,i__82962);
cljs.core.chunk_append.call(null,b__82963,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__82964 = (i__82962 + (1));
i__82962 = G__82964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82963),frontend$todos$view_todo_list_$_iter__82960.call(null,cljs.core.chunk_rest.call(null,s__82961__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82963),null);
}
} else {
var todo = cljs.core.first.call(null,s__82961__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo,todo,dispatch], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),frontend$todos$view_todo_list_$_iter__82960.call(null,cljs.core.rest.call(null,s__82961__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),[cljs.core.str(" "),cljs.core.str(((cljs.core._EQ_.call(null,active_count,(1)))?"item":"items")),cljs.core.str(" left")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),(function (){var iter__17523__auto__ = (function frontend$todos$view_footer_$_iter__82977(s__82978){
return (new cljs.core.LazySeq(null,(function (){
var s__82978__$1 = s__82978;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__82978__$1);
if(temp__4425__auto__){
var s__82978__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__82978__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__82978__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__82980 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__82979 = (0);
while(true){
if((i__82979 < size__17522__auto__)){
var map__82985 = cljs.core._nth.call(null,c__17521__auto__,i__82979);
var map__82985__$1 = ((((!((map__82985 == null)))?((((map__82985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82985):map__82985);
var key = cljs.core.get.call(null,map__82985__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__82985__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__82985__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append.call(null,b__82980,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__82989 = (i__82979 + (1));
i__82979 = G__82989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82980),frontend$todos$view_footer_$_iter__82977.call(null,cljs.core.chunk_rest.call(null,s__82978__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82980),null);
}
} else {
var map__82987 = cljs.core.first.call(null,s__82978__$2);
var map__82987__$1 = ((((!((map__82987 == null)))?((((map__82987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82987):map__82987);
var key = cljs.core.get.call(null,map__82987__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.call(null,map__82987__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__82987__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,visibility,key))?"selected":null)], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),frontend$todos$view_footer_$_iter__82977.call(null,cljs.core.rest.call(null,s__82978__$2)));
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
frontend.todos.view = (function frontend$todos$view(p__82990,dispatch){
var map__82993 = p__82990;
var map__82993__$1 = ((((!((map__82993 == null)))?((((map__82993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82993):map__82993);
var _view_model_ = map__82993__$1;
var field = cljs.core.get.call(null,map__82993__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var todos = cljs.core.get.call(null,map__82993__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var has_todos_QMARK_ = cljs.core.get.call(null,map__82993__$1,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793));
var active_count = cljs.core.get.call(null,map__82993__$1,new cljs.core.Keyword(null,"active-count","active-count",676410108));
var has_completed_todos_QMARK_ = cljs.core.get.call(null,map__82993__$1,new cljs.core.Keyword(null,"has-completed-todos?","has-completed-todos?",1754771313));
var all_completed_QMARK_ = cljs.core.get.call(null,map__82993__$1,new cljs.core.Keyword(null,"all-completed?","all-completed?",-546513888));
var visibility = cljs.core.get.call(null,map__82993__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_header,field,dispatch], null),(cljs.core.truth_(has_todos_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_todo_list,todos,all_completed_QMARK_,dispatch], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.todos.view_footer,active_count,has_completed_todos_QMARK_,visibility,dispatch], null)], null):null)], null);
});

//# sourceMappingURL=todos.js.map?rel=1448293983959