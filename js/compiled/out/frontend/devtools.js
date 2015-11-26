// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.devtools');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('reagent.core');
goog.require('cljs.core.match');
goog.require('com.rpl.specter');
goog.require('frontend.persistence_middleware');
/**
 * Creates a fresh dev-model instance using wrapped component init.
 */
frontend.devtools.init = (function frontend$devtools$init(p__52931){
var vec__52933 = p__52931;
var component_model = cljs.core.nth.call(null,vec__52933,(0),null);
var component_signal = cljs.core.nth.call(null,vec__52933,(1),null);
var _component_initial_ = vec__52933;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"component","component",1555936782),component_model,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),component_model,new cljs.core.Keyword(null,"initial-signal","initial-signal",1264328313),component_signal,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),(0),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),(0),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),false], null),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)], null);
});
frontend.devtools._signal_event = (function frontend$devtools$_signal_event(id,signal){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,signal], null);
});
frontend.devtools._action_event = (function frontend$devtools$_action_event(signal_id,id,action){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781),signal_id,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"action","action",-811238024),action], null);
});
frontend.devtools._update_action_events_STAR_ = (function frontend$devtools$_update_action_events_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___52939 = arguments.length;
var i__17810__auto___52940 = (0);
while(true){
if((i__17810__auto___52940 < len__17809__auto___52939)){
args__17816__auto__.push((arguments[i__17810__auto___52940]));

var G__52941 = (i__17810__auto___52940 + (1));
i__17810__auto___52940 = G__52941;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-events","action-events",1949072282),com.rpl.specter.ALL,pred], null),(function (p1__52934_SHARP_){
return cljs.core.apply.call(null,f,p1__52934_SHARP_,args);
}),model);
});

frontend.devtools._update_action_events_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_events_STAR_.cljs$lang$applyTo = (function (seq52935){
var G__52936 = cljs.core.first.call(null,seq52935);
var seq52935__$1 = cljs.core.next.call(null,seq52935);
var G__52937 = cljs.core.first.call(null,seq52935__$1);
var seq52935__$2 = cljs.core.next.call(null,seq52935__$1);
var G__52938 = cljs.core.first.call(null,seq52935__$2);
var seq52935__$3 = cljs.core.next.call(null,seq52935__$2);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__52936,G__52937,G__52938,seq52935__$3);
});
frontend.devtools._update_action_event = (function frontend$devtools$_update_action_event(var_args){
var args__17816__auto__ = [];
var len__17809__auto___52947 = arguments.length;
var i__17810__auto___52948 = (0);
while(true){
if((i__17810__auto___52948 < len__17809__auto___52947)){
args__17816__auto__.push((arguments[i__17810__auto___52948]));

var G__52949 = (i__17810__auto___52948 + (1));
i__17810__auto___52948 = G__52949;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_action_events_STAR_,model,(function (p1__52942_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52942_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action_event.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_event.cljs$lang$applyTo = (function (seq52943){
var G__52944 = cljs.core.first.call(null,seq52943);
var seq52943__$1 = cljs.core.next.call(null,seq52943);
var G__52945 = cljs.core.first.call(null,seq52943__$1);
var seq52943__$2 = cljs.core.next.call(null,seq52943__$1);
var G__52946 = cljs.core.first.call(null,seq52943__$2);
var seq52943__$3 = cljs.core.next.call(null,seq52943__$2);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic(G__52944,G__52945,G__52946,seq52943__$3);
});
frontend.devtools.new_control = (function frontend$devtools$new_control(component_control){
return (function frontend$devtools$new_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(model))){
return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
dispatch.call(null,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289));

var s = new cljs.core.Keyword(null,"initial-signal","initial-signal",1264328313).cljs$core$IFn$_invoke$arity$1(model);
if((s == null)){
return null;
} else {
return frontend$devtools$new_control_$_control.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),s], null),dispatch);
}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e53001){if((e53001 instanceof Error)){
var e__18365__auto__ = e53001;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__52997 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__52997,new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-signal","toggle-signal",-436538733),id], null));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53009){if((e53009 instanceof Error)){
var e__18365__auto____$1 = e53009;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__52997 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__52997,new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453),id], null));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53010){if((e53010 instanceof Error)){
var e__18365__auto____$2 = e53010;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$2;
}
} else {
throw e53010;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e53009;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53002){if((e53002 instanceof Error)){
var e__18365__auto____$1 = e53002;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-persist","on-toggle-persist",264423174))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53003){if((e53003 instanceof Error)){
var e__18365__auto____$2 = e53003;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158))){
return dispatch.call(null,new cljs.core.Keyword(null,"sweep","sweep",-50871214));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53004){if((e53004 instanceof Error)){
var e__18365__auto____$3 = e53004;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829))){
dispatch.call(null,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53005){if((e53005 instanceof Error)){
var e__18365__auto____$4 = e53005;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__52999 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__52999,new cljs.core.Keyword(null,"component","component",1555936782))){
var s = cljs.core.nth.call(null,signal,(1));
var vec__53008 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),s);
var signal_id = cljs.core.nth.call(null,vec__53008,(0),null);
var _ = cljs.core.nth.call(null,vec__53008,(1),null);
var signal_event = vec__53008;
component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model),s,((function (vec__53008,signal_id,_,signal_event,s,signal_0__52999,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__52950_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),signal_id,p1__52950_SHARP_], null));
});})(vec__53008,signal_id,_,signal_event,s,signal_0__52999,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135),signal_event], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53007){if((e53007 instanceof Error)){
var e__18365__auto____$5 = e53007;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$5;
}
} else {
throw e53007;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53006){if((e53006 instanceof Error)){
var e__18365__auto____$5 = e53006;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__18365__auto____$5;
}
} else {
throw e53006;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e53005;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e53004;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e53003;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e53002;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e53001;

}
}});
});
/**
 * Orphaned signal has no actions.
 */
frontend.devtools._orphaned_signal_QMARK_ = (function frontend$devtools$_orphaned_signal_QMARK_(model,p__53012){
var vec__53014 = p__53012;
var signal_id = cljs.core.nth.call(null,vec__53014,(0),null);
var _ = cljs.core.nth.call(null,vec__53014,(1),null);
var _signal_ = vec__53014;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__53014,signal_id,_,_signal_){
return (function (p1__53011_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__53011_SHARP_),signal_id);
});})(vec__53014,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools.new_reconcile = (function frontend$devtools$new_reconcile(component_reconcile){
return (function frontend$devtools$new_reconcile_$_reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53090){if((e53090 instanceof Error)){
var e__18365__auto__ = e53090;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__53083 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53083,new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53100){if((e53100 instanceof Error)){
var e__18365__auto____$1 = e53100;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__53083 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53083,new cljs.core.Keyword(null,"toggle-signal","toggle-signal",-436538733))){
var id = cljs.core.nth.call(null,action,(1));
var all_actions_enabled_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.filter.call(null,((function (id,action_0__53083,e__18365__auto____$1,e__18365__auto__){
return (function (p1__53015_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__53015_SHARP_),id);
});})(id,action_0__53083,e__18365__auto____$1,e__18365__auto__))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
return frontend.devtools._update_action_events_STAR_.call(null,model,((function (all_actions_enabled_QMARK_,id,action_0__53083,e__18365__auto____$1,e__18365__auto__){
return (function (p1__53016_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__53016_SHARP_),id);
});})(all_actions_enabled_QMARK_,id,action_0__53083,e__18365__auto____$1,e__18365__auto__))
,cljs.core.assoc,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),!(all_actions_enabled_QMARK_));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53101){if((e53101 instanceof Error)){
var e__18365__auto____$2 = e53101;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{var action_0__53083 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53083,new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.devtools._update_action_event.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53102){if((e53102 instanceof Error)){
var e__18365__auto____$3 = e53102;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$3;
}
} else {
throw e53102;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e53101;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e53100;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53091){if((e53091 instanceof Error)){
var e__18365__auto____$1 = e53091;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"replay","replay",-681122389))){
var enabled_actions = cljs.core.map.call(null,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.reduce.call(null,component_reconcile,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev-identity","dev-identity",1587672432)], null),enabled_actions)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e53092){if((e53092 instanceof Error)){
var e__18365__auto____$2 = e53092;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53093){if((e53093 instanceof Error)){
var e__18365__auto____$3 = e53093;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sweep","sweep",-50871214))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"action-events","action-events",1949072282),((function (m,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__53017_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__53017_SHARP_);
});})(m,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__53018_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__53018_SHARP_);
});})(m,m__$1,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
return m__$2;
} else {
throw cljs.core.match.backtrack;

}
}catch (e53094){if((e53094 instanceof Error)){
var e__18365__auto____$4 = e53094;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__53085 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53085,new cljs.core.Keyword(null,"component","component",1555936782))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53099){if((e53099 instanceof Error)){
var e__18365__auto____$5 = e53099;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$5;
}
} else {
throw e53099;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53095){if((e53095 instanceof Error)){
var e__18365__auto____$5 = e53095;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__53088 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__53088,new cljs.core.Keyword(null,"component","component",1555936782))){
var a = cljs.core.nth.call(null,action,(1));
var vec__53098 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var singal_id = cljs.core.nth.call(null,vec__53098,(0),null);
var _ = cljs.core.nth.call(null,vec__53098,(1),null);
var unknown_signal_event = vec__53098;
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,singal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53097){if((e53097 instanceof Error)){
var e__18365__auto____$6 = e53097;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$6;
}
} else {
throw e53097;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53096){if((e53096 instanceof Error)){
var e__18365__auto____$6 = e53096;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__18365__auto____$6;
}
} else {
throw e53096;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e53095;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e53094;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e53093;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e53092;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e53091;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e53090;

}
}});
});
frontend.devtools.new_view_model = (function frontend$devtools$new_view_model(component_view_model){
return (function frontend$devtools$new_view_model_$_view_model(model){
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
})], null),"Reset"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = (function frontend$devtools$_devtools_view_$_iter__53160(s__53161){
return (new cljs.core.LazySeq(null,(function (){
var s__53161__$1 = s__53161;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53161__$1);
if(temp__4425__auto__){
var s__53161__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53161__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__53161__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__53163 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__53162 = (0);
while(true){
if((i__53162 < size__17522__auto__)){
var vec__53190 = cljs.core._nth.call(null,c__17521__auto__,i__53162);
var signal_id = cljs.core.nth.call(null,vec__53190,(0),null);
var signal = cljs.core.nth.call(null,vec__53190,(1),null);
cljs.core.chunk_append.call(null,b__53163,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53162,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849),signal_id], null));
});})(i__53162,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (i__53162,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__53160_$_iter__53191(s__53192){
return (new cljs.core.LazySeq(null,((function (i__53162,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__){
return (function (){
var s__53192__$1 = s__53192;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__53192__$1);
if(temp__4425__auto____$1){
var s__53192__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53192__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__53192__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__53194 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__53193 = (0);
while(true){
if((i__53193 < size__17522__auto____$1)){
var map__53199 = cljs.core._nth.call(null,c__17521__auto____$1,i__53193);
var map__53199__$1 = ((((!((map__53199 == null)))?((((map__53199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53199):map__53199);
var id = cljs.core.get.call(null,map__53199__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__53199__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__53199__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__53194,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53193,i__53162,map__53199,map__53199__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__53194,s__53192__$2,temp__4425__auto____$1,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__53193,i__53162,map__53199,map__53199__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__53194,s__53192__$2,temp__4425__auto____$1,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__53216 = (i__53193 + (1));
i__53193 = G__53216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53194),frontend$devtools$_devtools_view_$_iter__53160_$_iter__53191.call(null,cljs.core.chunk_rest.call(null,s__53192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53194),null);
}
} else {
var map__53201 = cljs.core.first.call(null,s__53192__$2);
var map__53201__$1 = ((((!((map__53201 == null)))?((((map__53201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53201):map__53201);
var id = cljs.core.get.call(null,map__53201__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__53201__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__53201__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53162,map__53201,map__53201__$1,id,enabled_QMARK_,action,s__53192__$2,temp__4425__auto____$1,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__53162,map__53201,map__53201__$1,id,enabled_QMARK_,action,s__53192__$2,temp__4425__auto____$1,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__53160_$_iter__53191.call(null,cljs.core.rest.call(null,s__53192__$2)));
}
} else {
return null;
}
break;
}
});})(i__53162,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__))
,null,null));
});})(i__53162,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__53162,iter__17523__auto__,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__){
return (function (p1__53103_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__53103_SHARP_),signal_id);
});})(i__53162,iter__17523__auto__,vec__53190,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53163,s__53161__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__53217 = (i__53162 + (1));
i__53162 = G__53217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53163),frontend$devtools$_devtools_view_$_iter__53160.call(null,cljs.core.chunk_rest.call(null,s__53161__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53163),null);
}
} else {
var vec__53203 = cljs.core.first.call(null,s__53161__$2);
var signal_id = cljs.core.nth.call(null,vec__53203,(0),null);
var signal = cljs.core.nth.call(null,vec__53203,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849),signal_id], null));
});})(vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__53160_$_iter__53204(s__53205){
return (new cljs.core.LazySeq(null,((function (vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__){
return (function (){
var s__53205__$1 = s__53205;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__53205__$1);
if(temp__4425__auto____$1){
var s__53205__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53205__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__53205__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__53207 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__53206 = (0);
while(true){
if((i__53206 < size__17522__auto__)){
var map__53212 = cljs.core._nth.call(null,c__17521__auto__,i__53206);
var map__53212__$1 = ((((!((map__53212 == null)))?((((map__53212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53212):map__53212);
var id = cljs.core.get.call(null,map__53212__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__53212__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__53212__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__53207,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53206,map__53212,map__53212__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__53207,s__53205__$2,temp__4425__auto____$1,vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__53206,map__53212,map__53212__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__53207,s__53205__$2,temp__4425__auto____$1,vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__53218 = (i__53206 + (1));
i__53206 = G__53218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53207),frontend$devtools$_devtools_view_$_iter__53160_$_iter__53204.call(null,cljs.core.chunk_rest.call(null,s__53205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53207),null);
}
} else {
var map__53214 = cljs.core.first.call(null,s__53205__$2);
var map__53214__$1 = ((((!((map__53214 == null)))?((((map__53214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53214):map__53214);
var id = cljs.core.get.call(null,map__53214__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__53214__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__53214__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__53214,map__53214__$1,id,enabled_QMARK_,action,s__53205__$2,temp__4425__auto____$1,vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(map__53214,map__53214__$1,id,enabled_QMARK_,action,s__53205__$2,temp__4425__auto____$1,vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__53160_$_iter__53204.call(null,cljs.core.rest.call(null,s__53205__$2)));
}
} else {
return null;
}
break;
}
});})(vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__))
,null,null));
});})(vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__){
return (function (p1__53103_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__53103_SHARP_),signal_id);
});})(iter__17523__auto__,vec__53203,signal_id,signal,s__53161__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__53160.call(null,cljs.core.rest.call(null,s__53161__$2)));
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
frontend.devtools.new_view = (function frontend$devtools$new_view(component_view){
return (function frontend$devtools$new_view_$_view(model,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_view,new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058).cljs$core$IFn$_invoke$arity$1(model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"component","component",1555936782))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-2px 0 7px 0 rgba(0, 0, 0, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._devtools_view,model,dispatch], null)], null)], null);
});
});
/**
 * Given component's parts creates a devtools wrapper for it. Returns the same structure as ui/connect.
 *   For replay to work correctly component is required to implement a :dev-identity action which returns the same model.
 */
frontend.devtools.connect = (function frontend$devtools$connect(component_initial,component_view_model,component_view,component_control,component_reconcile,storage){
var non_persisted_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),null,new cljs.core.Keyword(null,"initial-signal","initial-signal",1264328313),null], null), null);
var vec__53220 = frontend.devtools.init.call(null,component_initial);
var _ = cljs.core.nth.call(null,vec__53220,(0),null);
var initial_signal = cljs.core.nth.call(null,vec__53220,(1),null);
var initial = vec__53220;
return frontend.ui.connect.call(null,initial,frontend.devtools.new_view_model.call(null,component_view_model),frontend.devtools.new_view.call(null,component_view),frontend.ui.wrap_log_signals.call(null,frontend.persistence_middleware.wrap_control.call(null,frontend.devtools.new_control.call(null,component_control),initial_signal,storage,new cljs.core.Keyword(null,"devtools","devtools",-1870878518),non_persisted_keys)),frontend.ui.wrap_log_actions.call(null,frontend.persistence_middleware.wrap_reconcile.call(null,frontend.devtools.new_reconcile.call(null,component_reconcile),storage,new cljs.core.Keyword(null,"devtools","devtools",-1870878518),non_persisted_keys)));
});

//# sourceMappingURL=devtools.js.map?rel=1448539729697