// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.devtools');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('reagent.core');
goog.require('cljs.core.match');
goog.require('com.rpl.specter');
goog.require('frontend.persistence_middleware');
frontend.devtools._wrap_init = (function frontend$devtools$_wrap_init(component_init){
return (function frontend$devtools$_wrap_init_$_init(){
var component_model = component_init.call(null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"component","component",1555936782),component_model,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),component_model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),(0),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),(0),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),false], null);
});
});
frontend.devtools._signal_event = (function frontend$devtools$_signal_event(id,signal){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,signal], null);
});
frontend.devtools._action_event = (function frontend$devtools$_action_event(signal_id,id,action){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781),signal_id,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"action","action",-811238024),action], null);
});
frontend.devtools._update_action_events_STAR_ = (function frontend$devtools$_update_action_events_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___20458 = arguments.length;
var i__17810__auto___20459 = (0);
while(true){
if((i__17810__auto___20459 < len__17809__auto___20458)){
args__17816__auto__.push((arguments[i__17810__auto___20459]));

var G__20460 = (i__17810__auto___20459 + (1));
i__17810__auto___20459 = G__20460;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-events","action-events",1949072282),com.rpl.specter.ALL,pred], null),(function (p1__20453_SHARP_){
return cljs.core.apply.call(null,f,p1__20453_SHARP_,args);
}),model);
});

frontend.devtools._update_action_events_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_events_STAR_.cljs$lang$applyTo = (function (seq20454){
var G__20455 = cljs.core.first.call(null,seq20454);
var seq20454__$1 = cljs.core.next.call(null,seq20454);
var G__20456 = cljs.core.first.call(null,seq20454__$1);
var seq20454__$2 = cljs.core.next.call(null,seq20454__$1);
var G__20457 = cljs.core.first.call(null,seq20454__$2);
var seq20454__$3 = cljs.core.next.call(null,seq20454__$2);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__20455,G__20456,G__20457,seq20454__$3);
});
frontend.devtools._update_action_event = (function frontend$devtools$_update_action_event(var_args){
var args__17816__auto__ = [];
var len__17809__auto___20466 = arguments.length;
var i__17810__auto___20467 = (0);
while(true){
if((i__17810__auto___20467 < len__17809__auto___20466)){
args__17816__auto__.push((arguments[i__17810__auto___20467]));

var G__20468 = (i__17810__auto___20467 + (1));
i__17810__auto___20467 = G__20468;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_action_events_STAR_,model,(function (p1__20461_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20461_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action_event.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_event.cljs$lang$applyTo = (function (seq20462){
var G__20463 = cljs.core.first.call(null,seq20462);
var seq20462__$1 = cljs.core.next.call(null,seq20462);
var G__20464 = cljs.core.first.call(null,seq20462__$1);
var seq20462__$2 = cljs.core.next.call(null,seq20462__$1);
var G__20465 = cljs.core.first.call(null,seq20462__$2);
var seq20462__$3 = cljs.core.next.call(null,seq20462__$2);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic(G__20463,G__20464,G__20465,seq20462__$3);
});
frontend.devtools._wrap_control = (function frontend$devtools$_wrap_control(component_control){
return (function frontend$devtools$_wrap_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(model))){
return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
dispatch.call(null,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289));

return frontend$devtools$_wrap_control_$_control.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)], null),dispatch);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e20520){if((e20520 instanceof Error)){
var e__19655__auto__ = e20520;
if((e__19655__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__20516 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__20516,new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-signal","toggle-signal",-436538733),id], null));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20528){if((e20528 instanceof Error)){
var e__19655__auto____$1 = e20528;
if((e__19655__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__20516 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__20516,new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453),id], null));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20529){if((e20529 instanceof Error)){
var e__19655__auto____$2 = e20529;
if((e__19655__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$2;
}
} else {
throw e20529;

}
}} else {
throw e__19655__auto____$1;
}
} else {
throw e20528;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20521){if((e20521 instanceof Error)){
var e__19655__auto____$1 = e20521;
if((e__19655__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-persist","on-toggle-persist",264423174))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20522){if((e20522 instanceof Error)){
var e__19655__auto____$2 = e20522;
if((e__19655__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158))){
return dispatch.call(null,new cljs.core.Keyword(null,"sweep","sweep",-50871214));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20523){if((e20523 instanceof Error)){
var e__19655__auto____$3 = e20523;
if((e__19655__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829))){
dispatch.call(null,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20524){if((e20524 instanceof Error)){
var e__19655__auto____$4 = e20524;
if((e__19655__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__20518 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__20518,new cljs.core.Keyword(null,"component","component",1555936782))){
var s = cljs.core.nth.call(null,signal,(1));
var vec__20527 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),s);
var signal_id = cljs.core.nth.call(null,vec__20527,(0),null);
var _ = cljs.core.nth.call(null,vec__20527,(1),null);
var signal_event = vec__20527;
component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model),s,((function (vec__20527,signal_id,_,signal_event,s,signal_0__20518,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__){
return (function (p1__20469_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),signal_id,p1__20469_SHARP_], null));
});})(vec__20527,signal_id,_,signal_event,s,signal_0__20518,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__))
);

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135),signal_event], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20526){if((e20526 instanceof Error)){
var e__19655__auto____$5 = e20526;
if((e__19655__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$5;
}
} else {
throw e20526;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20525){if((e20525 instanceof Error)){
var e__19655__auto____$5 = e20525;
if((e__19655__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19655__auto____$5;
}
} else {
throw e20525;

}
}} else {
throw e__19655__auto____$4;
}
} else {
throw e20524;

}
}} else {
throw e__19655__auto____$3;
}
} else {
throw e20523;

}
}} else {
throw e__19655__auto____$2;
}
} else {
throw e20522;

}
}} else {
throw e__19655__auto____$1;
}
} else {
throw e20521;

}
}} else {
throw e__19655__auto__;
}
} else {
throw e20520;

}
}});
});
/**
 * Orphaned signal has no actions.
 */
frontend.devtools._orphaned_signal_QMARK_ = (function frontend$devtools$_orphaned_signal_QMARK_(model,p__20531){
var vec__20533 = p__20531;
var signal_id = cljs.core.nth.call(null,vec__20533,(0),null);
var _ = cljs.core.nth.call(null,vec__20533,(1),null);
var _signal_ = vec__20533;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__20533,signal_id,_,_signal_){
return (function (p1__20530_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__20530_SHARP_),signal_id);
});})(vec__20533,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools._wrap_reconcile = (function frontend$devtools$_wrap_reconcile(component_reconcile){
return (function frontend$devtools$_wrap_reconcile_$_reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"dev-identity","dev-identity",1587672432))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20612){if((e20612 instanceof Error)){
var e__19655__auto__ = e20612;
if((e__19655__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY);
} else {
throw cljs.core.match.backtrack;

}
}catch (e20613){if((e20613 instanceof Error)){
var e__19655__auto____$1 = e20613;
if((e__19655__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__20605 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20605,new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e20623){if((e20623 instanceof Error)){
var e__19655__auto____$2 = e20623;
if((e__19655__auto____$2 === cljs.core.match.backtrack)){
try{var action_0__20605 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20605,new cljs.core.Keyword(null,"toggle-signal","toggle-signal",-436538733))){
var id = cljs.core.nth.call(null,action,(1));
var all_actions_enabled_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.filter.call(null,((function (id,action_0__20605,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__){
return (function (p1__20534_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__20534_SHARP_),id);
});})(id,action_0__20605,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
return frontend.devtools._update_action_events_STAR_.call(null,model,((function (all_actions_enabled_QMARK_,id,action_0__20605,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__){
return (function (p1__20535_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__20535_SHARP_),id);
});})(all_actions_enabled_QMARK_,id,action_0__20605,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__))
,cljs.core.assoc,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),!(all_actions_enabled_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20624){if((e20624 instanceof Error)){
var e__19655__auto____$3 = e20624;
if((e__19655__auto____$3 === cljs.core.match.backtrack)){
try{var action_0__20605 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20605,new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.devtools._update_action_event.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e20625){if((e20625 instanceof Error)){
var e__19655__auto____$4 = e20625;
if((e__19655__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$4;
}
} else {
throw e20625;

}
}} else {
throw e__19655__auto____$3;
}
} else {
throw e20624;

}
}} else {
throw e__19655__auto____$2;
}
} else {
throw e20623;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20614){if((e20614 instanceof Error)){
var e__19655__auto____$2 = e20614;
if((e__19655__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"replay","replay",-681122389))){
var enabled_actions = cljs.core.map.call(null,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.reduce.call(null,component_reconcile,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev-identity","dev-identity",1587672432)], null),enabled_actions)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e20615){if((e20615 instanceof Error)){
var e__19655__auto____$3 = e20615;
if((e__19655__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e20616){if((e20616 instanceof Error)){
var e__19655__auto____$4 = e20616;
if((e__19655__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sweep","sweep",-50871214))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"action-events","action-events",1949072282),((function (m,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__){
return (function (p1__20536_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__20536_SHARP_);
});})(m,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__){
return (function (p1__20537_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__20537_SHARP_);
});})(m,m__$1,e__19655__auto____$4,e__19655__auto____$3,e__19655__auto____$2,e__19655__auto____$1,e__19655__auto__))
);
return m__$2;
} else {
throw cljs.core.match.backtrack;

}
}catch (e20617){if((e20617 instanceof Error)){
var e__19655__auto____$5 = e20617;
if((e__19655__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__20607 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20607,new cljs.core.Keyword(null,"component","component",1555936782))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e20622){if((e20622 instanceof Error)){
var e__19655__auto____$6 = e20622;
if((e__19655__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$6;
}
} else {
throw e20622;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20618){if((e20618 instanceof Error)){
var e__19655__auto____$6 = e20618;
if((e__19655__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__20610 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__20610,new cljs.core.Keyword(null,"component","component",1555936782))){
var a = cljs.core.nth.call(null,action,(1));
var vec__20621 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var singal_id = cljs.core.nth.call(null,vec__20621,(0),null);
var _ = cljs.core.nth.call(null,vec__20621,(1),null);
var unknown_signal_event = vec__20621;
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,singal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e20620){if((e20620 instanceof Error)){
var e__19655__auto____$7 = e20620;
if((e__19655__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19655__auto____$7;
}
} else {
throw e20620;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e20619){if((e20619 instanceof Error)){
var e__19655__auto____$7 = e20619;
if((e__19655__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19655__auto____$7;
}
} else {
throw e20619;

}
}} else {
throw e__19655__auto____$6;
}
} else {
throw e20618;

}
}} else {
throw e__19655__auto____$5;
}
} else {
throw e20617;

}
}} else {
throw e__19655__auto____$4;
}
} else {
throw e20616;

}
}} else {
throw e__19655__auto____$3;
}
} else {
throw e20615;

}
}} else {
throw e__19655__auto____$2;
}
} else {
throw e20614;

}
}} else {
throw e__19655__auto____$1;
}
} else {
throw e20613;

}
}} else {
throw e__19655__auto__;
}
} else {
throw e20612;

}
}});
});
frontend.devtools._wrap_view_model = (function frontend$devtools$_wrap_view_model(component_view_model){
return (function frontend$devtools$_wrap_view_model_$_view_model(model){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058),component_view_model.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model)));
});
});
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(model,dispatch){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#4F5A65"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Persist debug session into local storage?",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-persist","on-toggle-persist",264423174));
})], null),"Persist session"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),"Removes disabled actions and \"orphaned\" signals from history",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158));
})], null),"Sweep"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),"Removes all actions and signals resetting the model to initial state",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829));
})], null),"Reset"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = (function frontend$devtools$_devtools_view_$_iter__20683(s__20684){
return (new cljs.core.LazySeq(null,(function (){
var s__20684__$1 = s__20684;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20684__$1);
if(temp__4425__auto__){
var s__20684__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20684__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__20684__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__20686 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__20685 = (0);
while(true){
if((i__20685 < size__17522__auto__)){
var vec__20713 = cljs.core._nth.call(null,c__17521__auto__,i__20685);
var signal_id = cljs.core.nth.call(null,vec__20713,(0),null);
var signal = cljs.core.nth.call(null,vec__20713,(1),null);
cljs.core.chunk_append.call(null,b__20686,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20685,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849),signal_id], null));
});})(i__20685,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (i__20685,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__20683_$_iter__20714(s__20715){
return (new cljs.core.LazySeq(null,((function (i__20685,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__){
return (function (){
var s__20715__$1 = s__20715;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__20715__$1);
if(temp__4425__auto____$1){
var s__20715__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20715__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__20715__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__20717 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__20716 = (0);
while(true){
if((i__20716 < size__17522__auto____$1)){
var map__20722 = cljs.core._nth.call(null,c__17521__auto____$1,i__20716);
var map__20722__$1 = ((((!((map__20722 == null)))?((((map__20722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20722):map__20722);
var id = cljs.core.get.call(null,map__20722__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__20722__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__20722__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__20717,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20716,i__20685,map__20722,map__20722__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__20717,s__20715__$2,temp__4425__auto____$1,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__20716,i__20685,map__20722,map__20722__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__20717,s__20715__$2,temp__4425__auto____$1,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__20739 = (i__20716 + (1));
i__20716 = G__20739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20717),frontend$devtools$_devtools_view_$_iter__20683_$_iter__20714.call(null,cljs.core.chunk_rest.call(null,s__20715__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20717),null);
}
} else {
var map__20724 = cljs.core.first.call(null,s__20715__$2);
var map__20724__$1 = ((((!((map__20724 == null)))?((((map__20724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20724):map__20724);
var id = cljs.core.get.call(null,map__20724__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__20724__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__20724__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20685,map__20724,map__20724__$1,id,enabled_QMARK_,action,s__20715__$2,temp__4425__auto____$1,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__20685,map__20724,map__20724__$1,id,enabled_QMARK_,action,s__20715__$2,temp__4425__auto____$1,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__20683_$_iter__20714.call(null,cljs.core.rest.call(null,s__20715__$2)));
}
} else {
return null;
}
break;
}
});})(i__20685,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__))
,null,null));
});})(i__20685,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__20685,iter__17523__auto__,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__){
return (function (p1__20626_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__20626_SHARP_),signal_id);
});})(i__20685,iter__17523__auto__,vec__20713,signal_id,signal,c__17521__auto__,size__17522__auto__,b__20686,s__20684__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__20740 = (i__20685 + (1));
i__20685 = G__20740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20686),frontend$devtools$_devtools_view_$_iter__20683.call(null,cljs.core.chunk_rest.call(null,s__20684__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20686),null);
}
} else {
var vec__20726 = cljs.core.first.call(null,s__20684__$2);
var signal_id = cljs.core.nth.call(null,vec__20726,(0),null);
var signal = cljs.core.nth.call(null,vec__20726,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849),signal_id], null));
});})(vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__20683_$_iter__20727(s__20728){
return (new cljs.core.LazySeq(null,((function (vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__){
return (function (){
var s__20728__$1 = s__20728;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__20728__$1);
if(temp__4425__auto____$1){
var s__20728__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20728__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__20728__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__20730 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__20729 = (0);
while(true){
if((i__20729 < size__17522__auto__)){
var map__20735 = cljs.core._nth.call(null,c__17521__auto__,i__20729);
var map__20735__$1 = ((((!((map__20735 == null)))?((((map__20735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20735):map__20735);
var id = cljs.core.get.call(null,map__20735__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__20735__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__20735__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__20730,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20729,map__20735,map__20735__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__20730,s__20728__$2,temp__4425__auto____$1,vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__20729,map__20735,map__20735__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__20730,s__20728__$2,temp__4425__auto____$1,vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__20741 = (i__20729 + (1));
i__20729 = G__20741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20730),frontend$devtools$_devtools_view_$_iter__20683_$_iter__20727.call(null,cljs.core.chunk_rest.call(null,s__20728__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20730),null);
}
} else {
var map__20737 = cljs.core.first.call(null,s__20728__$2);
var map__20737__$1 = ((((!((map__20737 == null)))?((((map__20737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20737):map__20737);
var id = cljs.core.get.call(null,map__20737__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__20737__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__20737__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__20737,map__20737__$1,id,enabled_QMARK_,action,s__20728__$2,temp__4425__auto____$1,vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(map__20737,map__20737__$1,id,enabled_QMARK_,action,s__20728__$2,temp__4425__auto____$1,vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__20683_$_iter__20727.call(null,cljs.core.rest.call(null,s__20728__$2)));
}
} else {
return null;
}
break;
}
});})(vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__))
,null,null));
});})(vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__){
return (function (p1__20626_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__20626_SHARP_),signal_id);
});})(iter__17523__auto__,vec__20726,signal_id,signal,s__20684__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__20683.call(null,cljs.core.rest.call(null,s__20684__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"signal-events","signal-events",555073244).cljs$core$IFn$_invoke$arity$1(model)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Initial model:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model))], null)], null);
});
frontend.devtools._wrap_view = (function frontend$devtools$_wrap_view(component_view){
return (function frontend$devtools$_wrap_view_$_devtools_view(model,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_view,new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058).cljs$core$IFn$_invoke$arity$1(model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"component","component",1555936782))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-2px 0 7px 0 rgba(0, 0, 0, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._devtools_view,model,dispatch], null)], null)], null);
});
});
/**
 * Wraps a component into devtools instance.
 *   For replay to work correctly component is required to implement a :dev-identity action which returns the same model.
 */
frontend.devtools.new_spec = (function frontend$devtools$new_spec(spec,storage,storage_key){
return frontend.ui.wrap_log.call(null,frontend.persistence_middleware.wrap.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.devtools._wrap_init.call(null,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.devtools._wrap_view_model.call(null,new cljs.core.Keyword(null,"view-model","view-model",-895405675).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"view","view",1247994814),frontend.devtools._wrap_view.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"control","control",1892578036),frontend.devtools._wrap_control.call(null,new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.devtools._wrap_reconcile.call(null,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830).cljs$core$IFn$_invoke$arity$1(spec))], null),storage,storage_key,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),null], null), null)));
});

//# sourceMappingURL=devtools.js.map?rel=1449140261961