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
frontend.devtools.init = (function frontend$devtools$init(p__48064){
var vec__48066 = p__48064;
var component_model = cljs.core.nth.call(null,vec__48066,(0),null);
var component_signal = cljs.core.nth.call(null,vec__48066,(1),null);
var _component_initial_ = vec__48066;
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
var len__17809__auto___48072 = arguments.length;
var i__17810__auto___48073 = (0);
while(true){
if((i__17810__auto___48073 < len__17809__auto___48072)){
args__17816__auto__.push((arguments[i__17810__auto___48073]));

var G__48074 = (i__17810__auto___48073 + (1));
i__17810__auto___48073 = G__48074;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-events","action-events",1949072282),com.rpl.specter.ALL,pred], null),(function (p1__48067_SHARP_){
return cljs.core.apply.call(null,f,p1__48067_SHARP_,args);
}),model);
});

frontend.devtools._update_action_events_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_events_STAR_.cljs$lang$applyTo = (function (seq48068){
var G__48069 = cljs.core.first.call(null,seq48068);
var seq48068__$1 = cljs.core.next.call(null,seq48068);
var G__48070 = cljs.core.first.call(null,seq48068__$1);
var seq48068__$2 = cljs.core.next.call(null,seq48068__$1);
var G__48071 = cljs.core.first.call(null,seq48068__$2);
var seq48068__$3 = cljs.core.next.call(null,seq48068__$2);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__48069,G__48070,G__48071,seq48068__$3);
});
frontend.devtools._update_action_event = (function frontend$devtools$_update_action_event(var_args){
var args__17816__auto__ = [];
var len__17809__auto___48080 = arguments.length;
var i__17810__auto___48081 = (0);
while(true){
if((i__17810__auto___48081 < len__17809__auto___48080)){
args__17816__auto__.push((arguments[i__17810__auto___48081]));

var G__48082 = (i__17810__auto___48081 + (1));
i__17810__auto___48081 = G__48082;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_action_events_STAR_,model,(function (p1__48075_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__48075_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action_event.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_event.cljs$lang$applyTo = (function (seq48076){
var G__48077 = cljs.core.first.call(null,seq48076);
var seq48076__$1 = cljs.core.next.call(null,seq48076);
var G__48078 = cljs.core.first.call(null,seq48076__$1);
var seq48076__$2 = cljs.core.next.call(null,seq48076__$1);
var G__48079 = cljs.core.first.call(null,seq48076__$2);
var seq48076__$3 = cljs.core.next.call(null,seq48076__$2);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic(G__48077,G__48078,G__48079,seq48076__$3);
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
}catch (e48131){if((e48131 instanceof Error)){
var e__18365__auto__ = e48131;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__48127 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__48127,new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453),id], null));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48139){if((e48139 instanceof Error)){
var e__18365__auto____$1 = e48139;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$1;
}
} else {
throw e48139;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48132){if((e48132 instanceof Error)){
var e__18365__auto____$1 = e48132;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-persist","on-toggle-persist",264423174))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48133){if((e48133 instanceof Error)){
var e__18365__auto____$2 = e48133;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158))){
return dispatch.call(null,new cljs.core.Keyword(null,"sweep","sweep",-50871214));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48134){if((e48134 instanceof Error)){
var e__18365__auto____$3 = e48134;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829))){
dispatch.call(null,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48135){if((e48135 instanceof Error)){
var e__18365__auto____$4 = e48135;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__48129 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__48129,new cljs.core.Keyword(null,"component","component",1555936782))){
var s = cljs.core.nth.call(null,signal,(1));
var vec__48138 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),s);
var signal_id = cljs.core.nth.call(null,vec__48138,(0),null);
var _ = cljs.core.nth.call(null,vec__48138,(1),null);
var signal_event = vec__48138;
component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model),s,((function (vec__48138,signal_id,_,signal_event,s,signal_0__48129,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__48083_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),signal_id,p1__48083_SHARP_], null));
});})(vec__48138,signal_id,_,signal_event,s,signal_0__48129,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135),signal_event], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48137){if((e48137 instanceof Error)){
var e__18365__auto____$5 = e48137;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$5;
}
} else {
throw e48137;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48136){if((e48136 instanceof Error)){
var e__18365__auto____$5 = e48136;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__18365__auto____$5;
}
} else {
throw e48136;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e48135;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e48134;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e48133;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e48132;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e48131;

}
}});
});
/**
 * Orphaned signal has no actions.
 */
frontend.devtools._orphaned_signal_QMARK_ = (function frontend$devtools$_orphaned_signal_QMARK_(model,p__48141){
var vec__48143 = p__48141;
var signal_id = cljs.core.nth.call(null,vec__48143,(0),null);
var _ = cljs.core.nth.call(null,vec__48143,(1),null);
var _signal_ = vec__48143;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__48143,signal_id,_,_signal_){
return (function (p1__48140_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__48140_SHARP_),signal_id);
});})(vec__48143,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools.new_reconcile = (function frontend$devtools$new_reconcile(component_reconcile){
return (function frontend$devtools$new_reconcile_$_reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48214){if((e48214 instanceof Error)){
var e__18365__auto__ = e48214;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__48207 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__48207,new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48224){if((e48224 instanceof Error)){
var e__18365__auto____$1 = e48224;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__48207 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__48207,new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.devtools._update_action_event.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48225){if((e48225 instanceof Error)){
var e__18365__auto____$2 = e48225;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$2;
}
} else {
throw e48225;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e48224;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48215){if((e48215 instanceof Error)){
var e__18365__auto____$1 = e48215;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"replay","replay",-681122389))){
var enabled_actions = cljs.core.map.call(null,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.reduce.call(null,component_reconcile,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dev-identity","dev-identity",1587672432)], null),enabled_actions)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e48216){if((e48216 instanceof Error)){
var e__18365__auto____$2 = e48216;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48217){if((e48217 instanceof Error)){
var e__18365__auto____$3 = e48217;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sweep","sweep",-50871214))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"action-events","action-events",1949072282),((function (m,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__48144_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__48144_SHARP_);
});})(m,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__48145_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__48145_SHARP_);
});})(m,m__$1,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
return m__$2;
} else {
throw cljs.core.match.backtrack;

}
}catch (e48218){if((e48218 instanceof Error)){
var e__18365__auto____$4 = e48218;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__48209 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__48209,new cljs.core.Keyword(null,"component","component",1555936782))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48223){if((e48223 instanceof Error)){
var e__18365__auto____$5 = e48223;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$5;
}
} else {
throw e48223;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48219){if((e48219 instanceof Error)){
var e__18365__auto____$5 = e48219;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__48212 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__48212,new cljs.core.Keyword(null,"component","component",1555936782))){
var a = cljs.core.nth.call(null,action,(1));
var vec__48222 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var singal_id = cljs.core.nth.call(null,vec__48222,(0),null);
var _ = cljs.core.nth.call(null,vec__48222,(1),null);
var unknown_signal_event = vec__48222;
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,singal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e48221){if((e48221 instanceof Error)){
var e__18365__auto____$6 = e48221;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$6;
}
} else {
throw e48221;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e48220){if((e48220 instanceof Error)){
var e__18365__auto____$6 = e48220;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__18365__auto____$6;
}
} else {
throw e48220;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e48219;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e48218;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e48217;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e48216;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e48215;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e48214;

}
}});
});
frontend.devtools.new_view_model = (function frontend$devtools$new_view_model(component_view_model){
return (function frontend$devtools$new_view_model_$_view_model(model){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058),component_view_model.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model)));
});
});
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(model,dispatch){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#4F5A65"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Persist actions and signals?",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-persist","on-toggle-persist",264423174));
})], null),"Persist session"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),"Removes disabled actions and \"orphaned\" signals from history",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158));
})], null),"Sweep"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),"Removes all actions and signals resetting the model to initial state",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829));
})], null),"Reset"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = (function frontend$devtools$_devtools_view_$_iter__48283(s__48284){
return (new cljs.core.LazySeq(null,(function (){
var s__48284__$1 = s__48284;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__48284__$1);
if(temp__4425__auto__){
var s__48284__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48284__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__48284__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__48286 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__48285 = (0);
while(true){
if((i__48285 < size__17522__auto__)){
var vec__48313 = cljs.core._nth.call(null,c__17521__auto__,i__48285);
var signal_id = cljs.core.nth.call(null,vec__48313,(0),null);
var signal = cljs.core.nth.call(null,vec__48313,(1),null);
cljs.core.chunk_append.call(null,b__48286,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (i__48285,vec__48313,signal_id,signal,c__17521__auto__,size__17522__auto__,b__48286,s__48284__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__48283_$_iter__48314(s__48315){
return (new cljs.core.LazySeq(null,((function (i__48285,vec__48313,signal_id,signal,c__17521__auto__,size__17522__auto__,b__48286,s__48284__$2,temp__4425__auto__){
return (function (){
var s__48315__$1 = s__48315;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__48315__$1);
if(temp__4425__auto____$1){
var s__48315__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48315__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__48315__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__48317 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__48316 = (0);
while(true){
if((i__48316 < size__17522__auto____$1)){
var map__48322 = cljs.core._nth.call(null,c__17521__auto____$1,i__48316);
var map__48322__$1 = ((((!((map__48322 == null)))?((((map__48322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48322):map__48322);
var id = cljs.core.get.call(null,map__48322__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__48322__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__48322__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__48317,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__48316,i__48285,map__48322,map__48322__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__48317,s__48315__$2,temp__4425__auto____$1,vec__48313,signal_id,signal,c__17521__auto__,size__17522__auto__,b__48286,s__48284__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__48316,i__48285,map__48322,map__48322__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__48317,s__48315__$2,temp__4425__auto____$1,vec__48313,signal_id,signal,c__17521__auto__,size__17522__auto__,b__48286,s__48284__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__48339 = (i__48316 + (1));
i__48316 = G__48339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48317),frontend$devtools$_devtools_view_$_iter__48283_$_iter__48314.call(null,cljs.core.chunk_rest.call(null,s__48315__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48317),null);
}
} else {
var map__48324 = cljs.core.first.call(null,s__48315__$2);
var map__48324__$1 = ((((!((map__48324 == null)))?((((map__48324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48324):map__48324);
var id = cljs.core.get.call(null,map__48324__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__48324__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__48324__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__48285,map__48324,map__48324__$1,id,enabled_QMARK_,action,s__48315__$2,temp__4425__auto____$1,vec__48313,signal_id,signal,c__17521__auto__,size__17522__auto__,b__48286,s__48284__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__48285,map__48324,map__48324__$1,id,enabled_QMARK_,action,s__48315__$2,temp__4425__auto____$1,vec__48313,signal_id,signal,c__17521__auto__,size__17522__auto__,b__48286,s__48284__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__48283_$_iter__48314.call(null,cljs.core.rest.call(null,s__48315__$2)));
}
} else {
return null;
}
break;
}
});})(i__48285,vec__48313,signal_id,signal,c__17521__auto__,size__17522__auto__,b__48286,s__48284__$2,temp__4425__auto__))
,null,null));
});})(i__48285,vec__48313,signal_id,signal,c__17521__auto__,size__17522__auto__,b__48286,s__48284__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__48285,iter__17523__auto__,vec__48313,signal_id,signal,c__17521__auto__,size__17522__auto__,b__48286,s__48284__$2,temp__4425__auto__){
return (function (p1__48226_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__48226_SHARP_),signal_id);
});})(i__48285,iter__17523__auto__,vec__48313,signal_id,signal,c__17521__auto__,size__17522__auto__,b__48286,s__48284__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__48340 = (i__48285 + (1));
i__48285 = G__48340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48286),frontend$devtools$_devtools_view_$_iter__48283.call(null,cljs.core.chunk_rest.call(null,s__48284__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48286),null);
}
} else {
var vec__48326 = cljs.core.first.call(null,s__48284__$2);
var signal_id = cljs.core.nth.call(null,vec__48326,(0),null);
var signal = cljs.core.nth.call(null,vec__48326,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (vec__48326,signal_id,signal,s__48284__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__48283_$_iter__48327(s__48328){
return (new cljs.core.LazySeq(null,((function (vec__48326,signal_id,signal,s__48284__$2,temp__4425__auto__){
return (function (){
var s__48328__$1 = s__48328;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__48328__$1);
if(temp__4425__auto____$1){
var s__48328__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48328__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__48328__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__48330 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__48329 = (0);
while(true){
if((i__48329 < size__17522__auto__)){
var map__48335 = cljs.core._nth.call(null,c__17521__auto__,i__48329);
var map__48335__$1 = ((((!((map__48335 == null)))?((((map__48335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48335):map__48335);
var id = cljs.core.get.call(null,map__48335__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__48335__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__48335__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__48330,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__48329,map__48335,map__48335__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__48330,s__48328__$2,temp__4425__auto____$1,vec__48326,signal_id,signal,s__48284__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__48329,map__48335,map__48335__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__48330,s__48328__$2,temp__4425__auto____$1,vec__48326,signal_id,signal,s__48284__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__48341 = (i__48329 + (1));
i__48329 = G__48341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48330),frontend$devtools$_devtools_view_$_iter__48283_$_iter__48327.call(null,cljs.core.chunk_rest.call(null,s__48328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48330),null);
}
} else {
var map__48337 = cljs.core.first.call(null,s__48328__$2);
var map__48337__$1 = ((((!((map__48337 == null)))?((((map__48337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48337):map__48337);
var id = cljs.core.get.call(null,map__48337__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__48337__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__48337__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__48337,map__48337__$1,id,enabled_QMARK_,action,s__48328__$2,temp__4425__auto____$1,vec__48326,signal_id,signal,s__48284__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(map__48337,map__48337__$1,id,enabled_QMARK_,action,s__48328__$2,temp__4425__auto____$1,vec__48326,signal_id,signal,s__48284__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__48283_$_iter__48327.call(null,cljs.core.rest.call(null,s__48328__$2)));
}
} else {
return null;
}
break;
}
});})(vec__48326,signal_id,signal,s__48284__$2,temp__4425__auto__))
,null,null));
});})(vec__48326,signal_id,signal,s__48284__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__48326,signal_id,signal,s__48284__$2,temp__4425__auto__){
return (function (p1__48226_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__48226_SHARP_),signal_id);
});})(iter__17523__auto__,vec__48326,signal_id,signal,s__48284__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__48283.call(null,cljs.core.rest.call(null,s__48284__$2)));
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
var vec__48343 = frontend.devtools.init.call(null,component_initial);
var _ = cljs.core.nth.call(null,vec__48343,(0),null);
var initial_signal = cljs.core.nth.call(null,vec__48343,(1),null);
var initial = vec__48343;
return frontend.ui.connect.call(null,initial,frontend.devtools.new_view_model.call(null,component_view_model),frontend.devtools.new_view.call(null,component_view),frontend.ui.wrap_log_signals.call(null,frontend.persistence_middleware.wrap_control.call(null,frontend.devtools.new_control.call(null,component_control),initial_signal,storage,new cljs.core.Keyword(null,"devtools","devtools",-1870878518),non_persisted_keys)),frontend.ui.wrap_log_actions.call(null,frontend.persistence_middleware.wrap_reconcile.call(null,frontend.devtools.new_reconcile.call(null,component_reconcile),storage,new cljs.core.Keyword(null,"devtools","devtools",-1870878518),non_persisted_keys)));
});

//# sourceMappingURL=devtools.js.map?rel=1448538259038