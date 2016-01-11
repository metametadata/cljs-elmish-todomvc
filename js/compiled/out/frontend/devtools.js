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
var len__17809__auto___22672 = arguments.length;
var i__17810__auto___22673 = (0);
while(true){
if((i__17810__auto___22673 < len__17809__auto___22672)){
args__17816__auto__.push((arguments[i__17810__auto___22673]));

var G__22674 = (i__17810__auto___22673 + (1));
i__17810__auto___22673 = G__22674;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-events","action-events",1949072282),com.rpl.specter.ALL,pred], null),(function (p1__22667_SHARP_){
return cljs.core.apply.call(null,f,p1__22667_SHARP_,args);
}),model);
});

frontend.devtools._update_action_events_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_events_STAR_.cljs$lang$applyTo = (function (seq22668){
var G__22669 = cljs.core.first.call(null,seq22668);
var seq22668__$1 = cljs.core.next.call(null,seq22668);
var G__22670 = cljs.core.first.call(null,seq22668__$1);
var seq22668__$2 = cljs.core.next.call(null,seq22668__$1);
var G__22671 = cljs.core.first.call(null,seq22668__$2);
var seq22668__$3 = cljs.core.next.call(null,seq22668__$2);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22669,G__22670,G__22671,seq22668__$3);
});
frontend.devtools._update_action_event = (function frontend$devtools$_update_action_event(var_args){
var args__17816__auto__ = [];
var len__17809__auto___22680 = arguments.length;
var i__17810__auto___22681 = (0);
while(true){
if((i__17810__auto___22681 < len__17809__auto___22680)){
args__17816__auto__.push((arguments[i__17810__auto___22681]));

var G__22682 = (i__17810__auto___22681 + (1));
i__17810__auto___22681 = G__22682;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_action_events_STAR_,model,(function (p1__22675_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22675_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action_event.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_event.cljs$lang$applyTo = (function (seq22676){
var G__22677 = cljs.core.first.call(null,seq22676);
var seq22676__$1 = cljs.core.next.call(null,seq22676);
var G__22678 = cljs.core.first.call(null,seq22676__$1);
var seq22676__$2 = cljs.core.next.call(null,seq22676__$1);
var G__22679 = cljs.core.first.call(null,seq22676__$2);
var seq22676__$3 = cljs.core.next.call(null,seq22676__$2);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic(G__22677,G__22678,G__22679,seq22676__$3);
});
frontend.devtools._wrap_control = (function frontend$devtools$_wrap_control(component_control){
return (function frontend$devtools$_wrap_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(model))){
return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
return frontend$devtools$_wrap_control_$_control.call(null,dispatch.call(null,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)], null),dispatch);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e22734){if((e22734 instanceof Error)){
var e__20495__auto__ = e22734;
if((e__20495__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__22730 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__22730,new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-signal","toggle-signal",-436538733),id], null));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e22742){if((e22742 instanceof Error)){
var e__20495__auto____$1 = e22742;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__22730 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__22730,new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453),id], null));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e22743){if((e22743 instanceof Error)){
var e__20495__auto____$2 = e22743;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$2;
}
} else {
throw e22743;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e22742;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22735){if((e22735 instanceof Error)){
var e__20495__auto____$1 = e22735;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-persist","on-toggle-persist",264423174))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042));
} else {
throw cljs.core.match.backtrack;

}
}catch (e22736){if((e22736 instanceof Error)){
var e__20495__auto____$2 = e22736;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158))){
return dispatch.call(null,new cljs.core.Keyword(null,"sweep","sweep",-50871214));
} else {
throw cljs.core.match.backtrack;

}
}catch (e22737){if((e22737 instanceof Error)){
var e__20495__auto____$3 = e22737;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829))){
dispatch.call(null,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e22738){if((e22738 instanceof Error)){
var e__20495__auto____$4 = e22738;
if((e__20495__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__22732 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__22732,new cljs.core.Keyword(null,"component","component",1555936782))){
var s = cljs.core.nth.call(null,signal,(1));
var vec__22741 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),s);
var signal_id = cljs.core.nth.call(null,vec__22741,(0),null);
var _ = cljs.core.nth.call(null,vec__22741,(1),null);
var signal_event = vec__22741;
component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model),s,((function (vec__22741,signal_id,_,signal_event,s,signal_0__22732,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__22683_SHARP_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),signal_id,p1__22683_SHARP_], null)));
});})(vec__22741,signal_id,_,signal_event,s,signal_0__22732,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
);

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135),signal_event], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e22740){if((e22740 instanceof Error)){
var e__20495__auto____$5 = e22740;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$5;
}
} else {
throw e22740;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22739){if((e22739 instanceof Error)){
var e__20495__auto____$5 = e22739;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20495__auto____$5;
}
} else {
throw e22739;

}
}} else {
throw e__20495__auto____$4;
}
} else {
throw e22738;

}
}} else {
throw e__20495__auto____$3;
}
} else {
throw e22737;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e22736;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e22735;

}
}} else {
throw e__20495__auto__;
}
} else {
throw e22734;

}
}});
});
/**
 * Orphaned signal has no actions.
 */
frontend.devtools._orphaned_signal_QMARK_ = (function frontend$devtools$_orphaned_signal_QMARK_(model,p__22745){
var vec__22747 = p__22745;
var signal_id = cljs.core.nth.call(null,vec__22747,(0),null);
var _ = cljs.core.nth.call(null,vec__22747,(1),null);
var _signal_ = vec__22747;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__22747,signal_id,_,_signal_){
return (function (p1__22744_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__22744_SHARP_),signal_id);
});})(vec__22747,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools._wrap_reconcile = (function frontend$devtools$_wrap_reconcile(component_reconcile){
return (function frontend$devtools$_wrap_reconcile_$_reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"dev-identity","dev-identity",1587672432))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e22826){if((e22826 instanceof Error)){
var e__20495__auto__ = e22826;
if((e__20495__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22827){if((e22827 instanceof Error)){
var e__20495__auto____$1 = e22827;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__22819 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__22819,new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22837){if((e22837 instanceof Error)){
var e__20495__auto____$2 = e22837;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{var action_0__22819 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__22819,new cljs.core.Keyword(null,"toggle-signal","toggle-signal",-436538733))){
var id = cljs.core.nth.call(null,action,(1));
var all_actions_enabled_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.filter.call(null,((function (id,action_0__22819,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__22748_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__22748_SHARP_),id);
});})(id,action_0__22819,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
return frontend.devtools._update_action_events_STAR_.call(null,model,((function (all_actions_enabled_QMARK_,id,action_0__22819,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__22749_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__22749_SHARP_),id);
});})(all_actions_enabled_QMARK_,id,action_0__22819,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
,cljs.core.assoc,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),!(all_actions_enabled_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e22838){if((e22838 instanceof Error)){
var e__20495__auto____$3 = e22838;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
try{var action_0__22819 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__22819,new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.devtools._update_action_event.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22839){if((e22839 instanceof Error)){
var e__20495__auto____$4 = e22839;
if((e__20495__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$4;
}
} else {
throw e22839;

}
}} else {
throw e__20495__auto____$3;
}
} else {
throw e22838;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e22837;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22828){if((e22828 instanceof Error)){
var e__20495__auto____$2 = e22828;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"replay","replay",-681122389))){
var enabled_actions = cljs.core.map.call(null,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.reduce.call(null,component_reconcile,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev-identity","dev-identity",1587672432)], null),enabled_actions)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e22829){if((e22829 instanceof Error)){
var e__20495__auto____$3 = e22829;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22830){if((e22830 instanceof Error)){
var e__20495__auto____$4 = e22830;
if((e__20495__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sweep","sweep",-50871214))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"action-events","action-events",1949072282),((function (m,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__22750_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__22750_SHARP_);
});})(m,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__22751_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__22751_SHARP_);
});})(m,m__$1,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
);
return m__$2;
} else {
throw cljs.core.match.backtrack;

}
}catch (e22831){if((e22831 instanceof Error)){
var e__20495__auto____$5 = e22831;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__22821 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__22821,new cljs.core.Keyword(null,"component","component",1555936782))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22836){if((e22836 instanceof Error)){
var e__20495__auto____$6 = e22836;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$6;
}
} else {
throw e22836;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22832){if((e22832 instanceof Error)){
var e__20495__auto____$6 = e22832;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__22824 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__22824,new cljs.core.Keyword(null,"component","component",1555936782))){
var a = cljs.core.nth.call(null,action,(1));
var vec__22835 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var singal_id = cljs.core.nth.call(null,vec__22835,(0),null);
var _ = cljs.core.nth.call(null,vec__22835,(1),null);
var unknown_signal_event = vec__22835;
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,singal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22834){if((e22834 instanceof Error)){
var e__20495__auto____$7 = e22834;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$7;
}
} else {
throw e22834;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22833){if((e22833 instanceof Error)){
var e__20495__auto____$7 = e22833;
if((e__20495__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20495__auto____$7;
}
} else {
throw e22833;

}
}} else {
throw e__20495__auto____$6;
}
} else {
throw e22832;

}
}} else {
throw e__20495__auto____$5;
}
} else {
throw e22831;

}
}} else {
throw e__20495__auto____$4;
}
} else {
throw e22830;

}
}} else {
throw e__20495__auto____$3;
}
} else {
throw e22829;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e22828;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e22827;

}
}} else {
throw e__20495__auto__;
}
} else {
throw e22826;

}
}});
});
frontend.devtools._wrap_view_model = (function frontend$devtools$_wrap_view_model(component_view_model){
return (function frontend$devtools$_wrap_view_model_$_view_model(model){
return cljs.core.assoc.call(null,frontend.ui.track_keys.call(null,model,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),new cljs.core.Keyword(null,"signal-events","signal-events",555073244),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null)),new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058),component_view_model.call(null,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model));
}))));
});
});
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(p__22841,dispatch){
var map__22900 = p__22841;
var map__22900__$1 = ((((!((map__22900 == null)))?((((map__22900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22900):map__22900);
var _view_model_ = map__22900__$1;
var persist_QMARK_ = cljs.core.get.call(null,map__22900__$1,new cljs.core.Keyword(null,"persist?","persist?",-1772568760));
var initial_model = cljs.core.get.call(null,map__22900__$1,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487));
var signal_events = cljs.core.get.call(null,map__22900__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244));
var action_events = cljs.core.get.call(null,map__22900__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#4F5A65"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Persist debug session into local storage?",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,persist_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-persist","on-toggle-persist",264423174));
});})(map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
], null),"Persist session"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),"Removes disabled actions and \"orphaned\" signals from history",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158));
});})(map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
], null),"Sweep"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),"Removes all actions and signals resetting the model to initial state",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829));
});})(map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
], null),"Reset"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = ((function (map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__22902(s__22903){
return (new cljs.core.LazySeq(null,((function (map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__22903__$1 = s__22903;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22903__$1);
if(temp__4425__auto__){
var s__22903__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22903__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__22903__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__22905 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__22904 = (0);
while(true){
if((i__22904 < size__17522__auto__)){
var vec__22932 = cljs.core._nth.call(null,c__17521__auto__,i__22904);
var signal_id = cljs.core.nth.call(null,vec__22932,(0),null);
var signal = cljs.core.nth.call(null,vec__22932,(1),null);
cljs.core.chunk_append.call(null,b__22905,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22904,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849),signal_id], null));
});})(i__22904,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (i__22904,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__22902_$_iter__22933(s__22934){
return (new cljs.core.LazySeq(null,((function (i__22904,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__22934__$1 = s__22934;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__22934__$1);
if(temp__4425__auto____$1){
var s__22934__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22934__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__22934__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__22936 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__22935 = (0);
while(true){
if((i__22935 < size__17522__auto____$1)){
var map__22941 = cljs.core._nth.call(null,c__17521__auto____$1,i__22935);
var map__22941__$1 = ((((!((map__22941 == null)))?((((map__22941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22941):map__22941);
var id = cljs.core.get.call(null,map__22941__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__22941__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__22941__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__22936,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22935,i__22904,map__22941,map__22941__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__22936,s__22934__$2,temp__4425__auto____$1,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__22935,i__22904,map__22941,map__22941__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__22936,s__22934__$2,temp__4425__auto____$1,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__22958 = (i__22935 + (1));
i__22935 = G__22958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22936),frontend$devtools$_devtools_view_$_iter__22902_$_iter__22933.call(null,cljs.core.chunk_rest.call(null,s__22934__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22936),null);
}
} else {
var map__22943 = cljs.core.first.call(null,s__22934__$2);
var map__22943__$1 = ((((!((map__22943 == null)))?((((map__22943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22943):map__22943);
var id = cljs.core.get.call(null,map__22943__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__22943__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__22943__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22904,map__22943,map__22943__$1,id,enabled_QMARK_,action,s__22934__$2,temp__4425__auto____$1,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__22904,map__22943,map__22943__$1,id,enabled_QMARK_,action,s__22934__$2,temp__4425__auto____$1,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__22902_$_iter__22933.call(null,cljs.core.rest.call(null,s__22934__$2)));
}
} else {
return null;
}
break;
}
});})(i__22904,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(i__22904,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__22904,iter__17523__auto__,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__22840_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__22840_SHARP_),signal_id);
});})(i__22904,iter__17523__auto__,vec__22932,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22905,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__22959 = (i__22904 + (1));
i__22904 = G__22959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22905),frontend$devtools$_devtools_view_$_iter__22902.call(null,cljs.core.chunk_rest.call(null,s__22903__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22905),null);
}
} else {
var vec__22945 = cljs.core.first.call(null,s__22903__$2);
var signal_id = cljs.core.nth.call(null,vec__22945,(0),null);
var signal = cljs.core.nth.call(null,vec__22945,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849),signal_id], null));
});})(vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__22902_$_iter__22946(s__22947){
return (new cljs.core.LazySeq(null,((function (vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__22947__$1 = s__22947;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__22947__$1);
if(temp__4425__auto____$1){
var s__22947__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22947__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__22947__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__22949 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__22948 = (0);
while(true){
if((i__22948 < size__17522__auto__)){
var map__22954 = cljs.core._nth.call(null,c__17521__auto__,i__22948);
var map__22954__$1 = ((((!((map__22954 == null)))?((((map__22954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22954):map__22954);
var id = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__22949,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22948,map__22954,map__22954__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__22949,s__22947__$2,temp__4425__auto____$1,vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__22948,map__22954,map__22954__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__22949,s__22947__$2,temp__4425__auto____$1,vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__22960 = (i__22948 + (1));
i__22948 = G__22960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22949),frontend$devtools$_devtools_view_$_iter__22902_$_iter__22946.call(null,cljs.core.chunk_rest.call(null,s__22947__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22949),null);
}
} else {
var map__22956 = cljs.core.first.call(null,s__22947__$2);
var map__22956__$1 = ((((!((map__22956 == null)))?((((map__22956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22956):map__22956);
var id = cljs.core.get.call(null,map__22956__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__22956__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__22956__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__22956,map__22956__$1,id,enabled_QMARK_,action,s__22947__$2,temp__4425__auto____$1,vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(map__22956,map__22956__$1,id,enabled_QMARK_,action,s__22947__$2,temp__4425__auto____$1,vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__22902_$_iter__22946.call(null,cljs.core.rest.call(null,s__22947__$2)));
}
} else {
return null;
}
break;
}
});})(vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__22840_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__22840_SHARP_),signal_id);
});})(iter__17523__auto__,vec__22945,signal_id,signal,s__22903__$2,temp__4425__auto__,map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__22902.call(null,cljs.core.rest.call(null,s__22903__$2)));
}
} else {
return null;
}
break;
}
});})(map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(map__22900,map__22900__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.reverse.call(null,cljs.core.deref.call(null,signal_events)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Initial model:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,cljs.core.deref.call(null,initial_model))], null)], null);
});
frontend.devtools._wrap_view = (function frontend$devtools$_wrap_view(component_view){
return (function frontend$devtools$_wrap_view_$_devtools_view(view_model,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_view,new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058).cljs$core$IFn$_invoke$arity$1(view_model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"component","component",1555936782))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-2px 0 7px 0 rgba(0, 0, 0, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._devtools_view,view_model,dispatch], null)], null)], null);
});
});
/**
 * Wraps a component into devtools instance.
 *   For replay to work correctly component is required to implement a :dev-identity action which returns the same model.
 */
frontend.devtools.new_spec = (function frontend$devtools$new_spec(spec,storage,storage_key){
return frontend.persistence_middleware.wrap.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.devtools._wrap_init.call(null,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.devtools._wrap_view_model.call(null,new cljs.core.Keyword(null,"view-model","view-model",-895405675).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"view","view",1247994814),frontend.devtools._wrap_view.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"control","control",1892578036),frontend.devtools._wrap_control.call(null,new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.devtools._wrap_reconcile.call(null,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830).cljs$core$IFn$_invoke$arity$1(spec))], null),storage,storage_key,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),null], null), null));
});

//# sourceMappingURL=devtools.js.map?rel=1452529993549