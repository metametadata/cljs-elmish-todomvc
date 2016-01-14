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
frontend.devtools._action_event = (function frontend$devtools$_action_event(signal_id,id,action,result){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781),signal_id,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
});
frontend.devtools._update_action_events_STAR_ = (function frontend$devtools$_update_action_events_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29164 = arguments.length;
var i__17810__auto___29165 = (0);
while(true){
if((i__17810__auto___29165 < len__17809__auto___29164)){
args__17816__auto__.push((arguments[i__17810__auto___29165]));

var G__29166 = (i__17810__auto___29165 + (1));
i__17810__auto___29165 = G__29166;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-events","action-events",1949072282),com.rpl.specter.ALL,pred], null),(function (p1__29159_SHARP_){
return cljs.core.apply.call(null,f,p1__29159_SHARP_,args);
}),model);
});

frontend.devtools._update_action_events_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_events_STAR_.cljs$lang$applyTo = (function (seq29160){
var G__29161 = cljs.core.first.call(null,seq29160);
var seq29160__$1 = cljs.core.next.call(null,seq29160);
var G__29162 = cljs.core.first.call(null,seq29160__$1);
var seq29160__$2 = cljs.core.next.call(null,seq29160__$1);
var G__29163 = cljs.core.first.call(null,seq29160__$2);
var seq29160__$3 = cljs.core.next.call(null,seq29160__$2);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__29161,G__29162,G__29163,seq29160__$3);
});
frontend.devtools._update_action_event = (function frontend$devtools$_update_action_event(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29172 = arguments.length;
var i__17810__auto___29173 = (0);
while(true){
if((i__17810__auto___29173 < len__17809__auto___29172)){
args__17816__auto__.push((arguments[i__17810__auto___29173]));

var G__29174 = (i__17810__auto___29173 + (1));
i__17810__auto___29173 = G__29174;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_action_events_STAR_,model,(function (p1__29167_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29167_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action_event.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_event.cljs$lang$applyTo = (function (seq29168){
var G__29169 = cljs.core.first.call(null,seq29168);
var seq29168__$1 = cljs.core.next.call(null,seq29168);
var G__29170 = cljs.core.first.call(null,seq29168__$1);
var seq29168__$2 = cljs.core.next.call(null,seq29168__$1);
var G__29171 = cljs.core.first.call(null,seq29168__$2);
var seq29168__$3 = cljs.core.next.call(null,seq29168__$2);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic(G__29169,G__29170,G__29171,seq29168__$3);
});
frontend.devtools._find_action = (function frontend$devtools$_find_action(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29175_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29175_SHARP_),id);
}),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools._wrap_control = (function frontend$devtools$_wrap_control(component_control){
return (function frontend$devtools$_wrap_control_$_control(model,signal,dispatch){
var replay = (function frontend$devtools$_wrap_control_$_control_$_replay(){
return component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.Keyword("frontend.devtools","replay","frontend.devtools/replay",-1059082135))),new cljs.core.Keyword("frontend.devtools","on-did-replay","frontend.devtools/on-did-replay",1141581615),(function (p1__29176_SHARP_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),p1__29176_SHARP_], null)));
}));
});
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(model))){
return replay.call(null);
} else {
return frontend$devtools$_wrap_control_$_control.call(null,dispatch.call(null,new cljs.core.Keyword("frontend.devtools","clear-history","frontend.devtools/clear-history",-141771415)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)], null),dispatch);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e29234){if((e29234 instanceof Error)){
var e__20495__auto__ = e29234;
if((e__20495__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-did-replay","frontend.devtools/on-did-replay",1141581615))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e29235){if((e29235 instanceof Error)){
var e__20495__auto____$1 = e29235;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29230 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29230,new cljs.core.Keyword("frontend.devtools","on-toggle-signal","frontend.devtools/on-toggle-signal",-542410243))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","toggle-signal","frontend.devtools/toggle-signal",-109076655),id], null));

return replay.call(null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29243){if((e29243 instanceof Error)){
var e__20495__auto____$2 = e29243;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__29230 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29230,new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","toggle-action","frontend.devtools/toggle-action",1628953787),id], null));

return replay.call(null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29244){if((e29244 instanceof Error)){
var e__20495__auto____$3 = e29244;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
try{var signal_0__29230 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29230,new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155))){
var id = cljs.core.nth.call(null,signal,(1));
return cljs.core.println.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(frontend.devtools._find_action.call(null,model,id))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29245){if((e29245 instanceof Error)){
var e__20495__auto____$4 = e29245;
if((e__20495__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$4;
}
} else {
throw e29245;

}
}} else {
throw e__20495__auto____$3;
}
} else {
throw e29244;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e29243;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29236){if((e29236 instanceof Error)){
var e__20495__auto____$2 = e29236;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-toggle-persist","frontend.devtools/on-toggle-persist",322406856))){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","toggle-persist","frontend.devtools/toggle-persist",1478929596));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29237){if((e29237 instanceof Error)){
var e__20495__auto____$3 = e29237;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-sweep","frontend.devtools/on-sweep",-119430604))){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","sweep","frontend.devtools/sweep",-125621996));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29238){if((e29238 instanceof Error)){
var e__20495__auto____$4 = e29238;
if((e__20495__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-reset","frontend.devtools/on-reset",1299957487))){
dispatch.call(null,new cljs.core.Keyword("frontend.devtools","clear-history","frontend.devtools/clear-history",-141771415));

return replay.call(null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29239){if((e29239 instanceof Error)){
var e__20495__auto____$5 = e29239;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29232 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29232,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))){
var s = cljs.core.nth.call(null,signal,(1));
var vec__29242 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),s);
var signal_id = cljs.core.nth.call(null,vec__29242,(0),null);
var _ = cljs.core.nth.call(null,vec__29242,(1),null);
var signal_event = vec__29242;
component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model),s,((function (vec__29242,signal_id,_,signal_event,s,signal_0__29232,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__29177_SHARP_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,p1__29177_SHARP_], null)));
});})(vec__29242,signal_id,_,signal_event,s,signal_0__29232,e__20495__auto____$5,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
);

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","record-signal-event","frontend.devtools/record-signal-event",2068008119),signal_event], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29241){if((e29241 instanceof Error)){
var e__20495__auto____$6 = e29241;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$6;
}
} else {
throw e29241;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29240){if((e29240 instanceof Error)){
var e__20495__auto____$6 = e29240;
if((e__20495__auto____$6 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20495__auto____$6;
}
} else {
throw e29240;

}
}} else {
throw e__20495__auto____$5;
}
} else {
throw e29239;

}
}} else {
throw e__20495__auto____$4;
}
} else {
throw e29238;

}
}} else {
throw e__20495__auto____$3;
}
} else {
throw e29237;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e29236;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e29235;

}
}} else {
throw e__20495__auto__;
}
} else {
throw e29234;

}
}});
});
/**
 * Orphaned signal has no actions.
 */
frontend.devtools._orphaned_signal_QMARK_ = (function frontend$devtools$_orphaned_signal_QMARK_(model,p__29247){
var vec__29249 = p__29247;
var signal_id = cljs.core.nth.call(null,vec__29249,(0),null);
var _ = cljs.core.nth.call(null,vec__29249,(1),null);
var _signal_ = vec__29249;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__29249,signal_id,_,_signal_){
return (function (p1__29246_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__29246_SHARP_),signal_id);
});})(vec__29249,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools._wrap_reconcile = (function frontend$devtools$_wrap_reconcile(component_reconcile){
return (function frontend$devtools$_wrap_reconcile_$_reconcile(model,action){
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("frontend.devtools","clear-history","frontend.devtools/clear-history",-141771415))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY);
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__29330 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29330,new cljs.core.Keyword("frontend.devtools","record-signal-event","frontend.devtools/record-signal-event",2068008119))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc);
} else {
var action_0__29330__$1 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29330__$1,new cljs.core.Keyword("frontend.devtools","toggle-signal","frontend.devtools/toggle-signal",-109076655))){
var id = cljs.core.nth.call(null,action,(1));
var all_actions_enabled_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.filter.call(null,((function (id,action_0__29330__$1,action_0__29330){
return (function (p1__29250_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__29250_SHARP_),id);
});})(id,action_0__29330__$1,action_0__29330))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
return frontend.devtools._update_action_events_STAR_.call(null,model,((function (all_actions_enabled_QMARK_,id,action_0__29330__$1,action_0__29330){
return (function (p1__29251_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__29251_SHARP_),id);
});})(all_actions_enabled_QMARK_,id,action_0__29330__$1,action_0__29330))
,cljs.core.assoc,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),!(all_actions_enabled_QMARK_));
} else {
var action_0__29330__$2 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29330__$2,new cljs.core.Keyword("frontend.devtools","toggle-action","frontend.devtools/toggle-action",1628953787))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.devtools._update_action_event.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("frontend.devtools","replay","frontend.devtools/replay",-1059082135))){
var action_events = cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model));
var new_model = cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model));
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,action_events);
if(cljs.core.truth_(temp__4423__auto__)){
var map__29346 = temp__4423__auto__;
var map__29346__$1 = ((((!((map__29346 == null)))?((((map__29346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29346):map__29346);
var id = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__29354 = cljs.core.rest.call(null,action_events);
var G__29355 = (function (){var m = new_model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,action__$1);
var m__$2 = frontend.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1));
return m__$2;
})();
action_events = G__29354;
new_model = G__29355;
continue;
} else {
return new_model;
}
break;
}
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("frontend.devtools","toggle-persist","frontend.devtools/toggle-persist",1478929596))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("frontend.devtools","sweep","frontend.devtools/sweep",-125621996))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"action-events","action-events",1949072282),((function (m,action_0__29330__$2,action_0__29330__$1,action_0__29330){
return (function (p1__29252_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__29252_SHARP_);
});})(m,action_0__29330__$2,action_0__29330__$1,action_0__29330))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1,action_0__29330__$2,action_0__29330__$1,action_0__29330){
return (function (p1__29253_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__29253_SHARP_);
});})(m,m__$1,action_0__29330__$2,action_0__29330__$1,action_0__29330))
);
return m__$2;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__29332 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29332,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(m__$1),a,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1))], null));
var m__$3 = cljs.core.update.call(null,m__$2,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
return m__$3;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__29335 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29335,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))){
var a = cljs.core.nth.call(null,action,(1));
var vec__29348 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var signal_id = cljs.core.nth.call(null,vec__29348,(0),null);
var _ = cljs.core.nth.call(null,vec__29348,(1),null);
var unknown_signal_event = vec__29348;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,a], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}

}
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__29337 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29337,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))){
var a = cljs.core.nth.call(null,action,(1));
var vec__29349 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var signal_id = cljs.core.nth.call(null,vec__29349,(0),null);
var _ = cljs.core.nth.call(null,vec__29349,(1),null);
var unknown_signal_event = vec__29349;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,a], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}

}

}

}

}

}

}

}
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("frontend.devtools","replay","frontend.devtools/replay",-1059082135))){
var action_events = cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model));
var new_model = cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model));
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,action_events);
if(cljs.core.truth_(temp__4423__auto__)){
var map__29350 = temp__4423__auto__;
var map__29350__$1 = ((((!((map__29350 == null)))?((((map__29350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29350):map__29350);
var id = cljs.core.get.call(null,map__29350__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__29350__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__29356 = cljs.core.rest.call(null,action_events);
var G__29357 = (function (){var m = new_model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,action__$1);
var m__$2 = frontend.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1));
return m__$2;
})();
action_events = G__29356;
new_model = G__29357;
continue;
} else {
return new_model;
}
break;
}
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("frontend.devtools","toggle-persist","frontend.devtools/toggle-persist",1478929596))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("frontend.devtools","sweep","frontend.devtools/sweep",-125621996))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"action-events","action-events",1949072282),((function (m){
return (function (p1__29252_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__29252_SHARP_);
});})(m))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1){
return (function (p1__29253_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__29253_SHARP_);
});})(m,m__$1))
);
return m__$2;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__29339 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29339,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(m__$1),a,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1))], null));
var m__$3 = cljs.core.update.call(null,m__$2,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
return m__$3;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__29342 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29342,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))){
var a = cljs.core.nth.call(null,action,(1));
var vec__29352 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var signal_id = cljs.core.nth.call(null,vec__29352,(0),null);
var _ = cljs.core.nth.call(null,vec__29352,(1),null);
var unknown_signal_event = vec__29352;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,a], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}

}
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__29344 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29344,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))){
var a = cljs.core.nth.call(null,action,(1));
var vec__29353 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var signal_id = cljs.core.nth.call(null,vec__29353,(0),null);
var _ = cljs.core.nth.call(null,vec__29353,(1),null);
var unknown_signal_event = vec__29353;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,a], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}

}

}

}

}

}

}
});
});
frontend.devtools._wrap_view_model = (function frontend$devtools$_wrap_view_model(component_view_model){
return (function frontend$devtools$_wrap_view_model_$_view_model(model){
return cljs.core.assoc.call(null,frontend.ui.track_keys.call(null,model,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),new cljs.core.Keyword(null,"signal-events","signal-events",555073244),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null)),new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058),component_view_model.call(null,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model));
}))));
});
});
frontend.devtools._menu_button = (function frontend$devtools$_menu_button(caption,on_click,title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),caption], null);
});
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(p__29359,dispatch){
var map__29418 = p__29359;
var map__29418__$1 = ((((!((map__29418 == null)))?((((map__29418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29418):map__29418);
var _view_model_ = map__29418__$1;
var persist_QMARK_ = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"persist?","persist?",-1772568760));
var initial_model = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487));
var signal_events = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244));
var action_events = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#4F5A65"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Persist debug session into local storage?",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,persist_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","on-toggle-persist","frontend.devtools/on-toggle-persist",322406856));
});})(map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
], null),"Persist session"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._menu_button,"Sweep",((function (map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","on-sweep","frontend.devtools/on-sweep",-119430604));
});})(map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,"Removes disabled actions and \"orphaned\" signals from history"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._menu_button,"Reset",((function (map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","on-reset","frontend.devtools/on-reset",1299957487));
});})(map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,"Removes all actions and signals resetting the model to initial state"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = ((function (map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__29420(s__29421){
return (new cljs.core.LazySeq(null,((function (map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__29421__$1 = s__29421;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29421__$1);
if(temp__4425__auto__){
var s__29421__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29421__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__29421__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__29423 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__29422 = (0);
while(true){
if((i__29422 < size__17522__auto__)){
var vec__29450 = cljs.core._nth.call(null,c__17521__auto__,i__29422);
var signal_id = cljs.core.nth.call(null,vec__29450,(0),null);
var signal = cljs.core.nth.call(null,vec__29450,(1),null);
cljs.core.chunk_append.call(null,b__29423,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29422,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-signal","frontend.devtools/on-toggle-signal",-542410243),signal_id], null));
});})(i__29422,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (i__29422,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__29420_$_iter__29451(s__29452){
return (new cljs.core.LazySeq(null,((function (i__29422,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__29452__$1 = s__29452;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__29452__$1);
if(temp__4425__auto____$1){
var s__29452__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29452__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__29452__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__29454 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__29453 = (0);
while(true){
if((i__29453 < size__17522__auto____$1)){
var map__29459 = cljs.core._nth.call(null,c__17521__auto____$1,i__29453);
var map__29459__$1 = ((((!((map__29459 == null)))?((((map__29459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29459):map__29459);
var id = cljs.core.get.call(null,map__29459__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__29459__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__29459__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__29454,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29453,i__29422,map__29459,map__29459__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__29454,s__29452__$2,temp__4425__auto____$1,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(i__29453,i__29422,map__29459,map__29459__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__29454,s__29452__$2,temp__4425__auto____$1,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29453,i__29422,map__29459,map__29459__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__29454,s__29452__$2,temp__4425__auto____$1,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(i__29453,i__29422,map__29459,map__29459__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__29454,s__29452__$2,temp__4425__auto____$1,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__29476 = (i__29453 + (1));
i__29453 = G__29476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29454),frontend$devtools$_devtools_view_$_iter__29420_$_iter__29451.call(null,cljs.core.chunk_rest.call(null,s__29452__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29454),null);
}
} else {
var map__29461 = cljs.core.first.call(null,s__29452__$2);
var map__29461__$1 = ((((!((map__29461 == null)))?((((map__29461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29461):map__29461);
var id = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29422,map__29461,map__29461__$1,id,enabled_QMARK_,action,s__29452__$2,temp__4425__auto____$1,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(i__29422,map__29461,map__29461__$1,id,enabled_QMARK_,action,s__29452__$2,temp__4425__auto____$1,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29422,map__29461,map__29461__$1,id,enabled_QMARK_,action,s__29452__$2,temp__4425__auto____$1,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(i__29422,map__29461,map__29461__$1,id,enabled_QMARK_,action,s__29452__$2,temp__4425__auto____$1,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__29420_$_iter__29451.call(null,cljs.core.rest.call(null,s__29452__$2)));
}
} else {
return null;
}
break;
}
});})(i__29422,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(i__29422,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__29422,iter__17523__auto__,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__29358_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__29358_SHARP_),signal_id);
});})(i__29422,iter__17523__auto__,vec__29450,signal_id,signal,c__17521__auto__,size__17522__auto__,b__29423,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__29477 = (i__29422 + (1));
i__29422 = G__29477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29423),frontend$devtools$_devtools_view_$_iter__29420.call(null,cljs.core.chunk_rest.call(null,s__29421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29423),null);
}
} else {
var vec__29463 = cljs.core.first.call(null,s__29421__$2);
var signal_id = cljs.core.nth.call(null,vec__29463,(0),null);
var signal = cljs.core.nth.call(null,vec__29463,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-signal","frontend.devtools/on-toggle-signal",-542410243),signal_id], null));
});})(vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__29420_$_iter__29464(s__29465){
return (new cljs.core.LazySeq(null,((function (vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__29465__$1 = s__29465;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__29465__$1);
if(temp__4425__auto____$1){
var s__29465__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29465__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__29465__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__29467 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__29466 = (0);
while(true){
if((i__29466 < size__17522__auto__)){
var map__29472 = cljs.core._nth.call(null,c__17521__auto__,i__29466);
var map__29472__$1 = ((((!((map__29472 == null)))?((((map__29472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29472):map__29472);
var id = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__29467,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29466,map__29472,map__29472__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__29467,s__29465__$2,temp__4425__auto____$1,vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(i__29466,map__29472,map__29472__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__29467,s__29465__$2,temp__4425__auto____$1,vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29466,map__29472,map__29472__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__29467,s__29465__$2,temp__4425__auto____$1,vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(i__29466,map__29472,map__29472__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__29467,s__29465__$2,temp__4425__auto____$1,vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__29478 = (i__29466 + (1));
i__29466 = G__29478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29467),frontend$devtools$_devtools_view_$_iter__29420_$_iter__29464.call(null,cljs.core.chunk_rest.call(null,s__29465__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29467),null);
}
} else {
var map__29474 = cljs.core.first.call(null,s__29465__$2);
var map__29474__$1 = ((((!((map__29474 == null)))?((((map__29474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29474):map__29474);
var id = cljs.core.get.call(null,map__29474__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__29474__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__29474__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__29474,map__29474__$1,id,enabled_QMARK_,action,s__29465__$2,temp__4425__auto____$1,vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(map__29474,map__29474__$1,id,enabled_QMARK_,action,s__29465__$2,temp__4425__auto____$1,vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__29474,map__29474__$1,id,enabled_QMARK_,action,s__29465__$2,temp__4425__auto____$1,vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(map__29474,map__29474__$1,id,enabled_QMARK_,action,s__29465__$2,temp__4425__auto____$1,vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__29420_$_iter__29464.call(null,cljs.core.rest.call(null,s__29465__$2)));
}
} else {
return null;
}
break;
}
});})(vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__29358_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__29358_SHARP_),signal_id);
});})(iter__17523__auto__,vec__29463,signal_id,signal,s__29421__$2,temp__4425__auto__,map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__29420.call(null,cljs.core.rest.call(null,s__29421__$2)));
}
} else {
return null;
}
break;
}
});})(map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(map__29418,map__29418__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.reverse.call(null,cljs.core.deref.call(null,signal_events)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Initial model:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,cljs.core.deref.call(null,initial_model))], null)], null);
});
frontend.devtools._wrap_view = (function frontend$devtools$_wrap_view(component_view){
return (function frontend$devtools$_wrap_view_$_devtools_view(view_model,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_view,new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058).cljs$core$IFn$_invoke$arity$1(view_model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-2px 0 7px 0 rgba(0, 0, 0, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._devtools_view,view_model,dispatch], null)], null)], null);
});
});
/**
 * Adds devtools to a component.
 *   For replay to work correctly component is required to handle ::on-did-replay signal.
 */
frontend.devtools.wrap = (function frontend$devtools$wrap(spec,storage,storage_key){
return frontend.persistence_middleware.wrap.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.devtools._wrap_init.call(null,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.devtools._wrap_view_model.call(null,new cljs.core.Keyword(null,"view-model","view-model",-895405675).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"view","view",1247994814),frontend.devtools._wrap_view.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"control","control",1892578036),frontend.devtools._wrap_control.call(null,new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.devtools._wrap_reconcile.call(null,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830).cljs$core$IFn$_invoke$arity$1(spec))], null),storage,storage_key,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),null], null), null));
});

//# sourceMappingURL=devtools.js.map?rel=1452772447739