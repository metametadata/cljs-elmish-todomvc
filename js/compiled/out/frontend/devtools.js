// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.devtools');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('reagent.core');
goog.require('cljs.core.match');
goog.require('com.rpl.specter');
goog.require('frontend.persistence_middleware');
frontend.devtools._wrap_init = (function frontend$devtools$_wrap_init(component_init){
return (function() { 
var frontend$devtools$_wrap_init_$_init__delegate = function (args){
var component_model = cljs.core.apply.call(null,component_init,args);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"component","component",1555936782),component_model,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),component_model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),(0),new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),(0),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),false], null);
};
var frontend$devtools$_wrap_init_$_init = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21448__i = 0, G__21448__a = new Array(arguments.length -  0);
while (G__21448__i < G__21448__a.length) {G__21448__a[G__21448__i] = arguments[G__21448__i + 0]; ++G__21448__i;}
  args = new cljs.core.IndexedSeq(G__21448__a,0);
} 
return frontend$devtools$_wrap_init_$_init__delegate.call(this,args);};
frontend$devtools$_wrap_init_$_init.cljs$lang$maxFixedArity = 0;
frontend$devtools$_wrap_init_$_init.cljs$lang$applyTo = (function (arglist__21449){
var args = cljs.core.seq(arglist__21449);
return frontend$devtools$_wrap_init_$_init__delegate(args);
});
frontend$devtools$_wrap_init_$_init.cljs$core$IFn$_invoke$arity$variadic = frontend$devtools$_wrap_init_$_init__delegate;
return frontend$devtools$_wrap_init_$_init;
})()
;
});
frontend.devtools._signal_event = (function frontend$devtools$_signal_event(id,signal){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,signal], null);
});
frontend.devtools._action_event = (function frontend$devtools$_action_event(signal_id,id,action,result){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781),signal_id,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
});
frontend.devtools._update_action_events_STAR_ = (function frontend$devtools$_update_action_events_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___21455 = arguments.length;
var i__17810__auto___21456 = (0);
while(true){
if((i__17810__auto___21456 < len__17809__auto___21455)){
args__17816__auto__.push((arguments[i__17810__auto___21456]));

var G__21457 = (i__17810__auto___21456 + (1));
i__17810__auto___21456 = G__21457;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-events","action-events",1949072282),com.rpl.specter.ALL,pred], null),(function (p1__21450_SHARP_){
return cljs.core.apply.call(null,f,p1__21450_SHARP_,args);
}),model);
});

frontend.devtools._update_action_events_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_events_STAR_.cljs$lang$applyTo = (function (seq21451){
var G__21452 = cljs.core.first.call(null,seq21451);
var seq21451__$1 = cljs.core.next.call(null,seq21451);
var G__21453 = cljs.core.first.call(null,seq21451__$1);
var seq21451__$2 = cljs.core.next.call(null,seq21451__$1);
var G__21454 = cljs.core.first.call(null,seq21451__$2);
var seq21451__$3 = cljs.core.next.call(null,seq21451__$2);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21452,G__21453,G__21454,seq21451__$3);
});
frontend.devtools._update_action_event = (function frontend$devtools$_update_action_event(var_args){
var args__17816__auto__ = [];
var len__17809__auto___21463 = arguments.length;
var i__17810__auto___21464 = (0);
while(true){
if((i__17810__auto___21464 < len__17809__auto___21463)){
args__17816__auto__.push((arguments[i__17810__auto___21464]));

var G__21465 = (i__17810__auto___21464 + (1));
i__17810__auto___21464 = G__21465;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_action_events_STAR_,model,(function (p1__21458_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21458_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action_event.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_event.cljs$lang$applyTo = (function (seq21459){
var G__21460 = cljs.core.first.call(null,seq21459);
var seq21459__$1 = cljs.core.next.call(null,seq21459);
var G__21461 = cljs.core.first.call(null,seq21459__$1);
var seq21459__$2 = cljs.core.next.call(null,seq21459__$1);
var G__21462 = cljs.core.first.call(null,seq21459__$2);
var seq21459__$3 = cljs.core.next.call(null,seq21459__$2);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic(G__21460,G__21461,G__21462,seq21459__$3);
});
frontend.devtools._find_signal = (function frontend$devtools$_find_signal(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__21466_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__21466_SHARP_),id);
}),new cljs.core.Keyword(null,"signal-events","signal-events",555073244).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools._find_action = (function frontend$devtools$_find_action(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__21467_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__21467_SHARP_),id);
}),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools._wrap_control = (function frontend$devtools$_wrap_control(component_control){
return (function frontend$devtools$_wrap_control_$_control(model,signal,dispatch){
var replay = (function frontend$devtools$_wrap_control_$_control_$_replay(){
return component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.Keyword("frontend.devtools","replay","frontend.devtools/replay",-1059082135))),new cljs.core.Keyword("frontend.devtools","on-did-replay","frontend.devtools/on-did-replay",1141581615),(function (p1__21468_SHARP_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,p1__21468_SHARP_));
}));
});
var handle_component_signal = (function frontend$devtools$_wrap_control_$_control_$_handle_component_signal(model__$1){
var vec__21521 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model__$1),signal);
var signal_id = cljs.core.nth.call(null,vec__21521,(0),null);
var _ = cljs.core.nth.call(null,vec__21521,(1),null);
var signal_event = vec__21521;
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","record-signal-event","frontend.devtools/record-signal-event",2068008119),signal_event], null));

return component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model__$1),signal,((function (vec__21521,signal_id,_,signal_event){
return (function (p1__21469_SHARP_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,p1__21469_SHARP_], null)));
});})(vec__21521,signal_id,_,signal_event))
);
});
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(model))){
return replay.call(null);
} else {
return handle_component_signal.call(null,dispatch.call(null,new cljs.core.Keyword("frontend.devtools","clear-history","frontend.devtools/clear-history",-141771415)));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e21525){if((e21525 instanceof Error)){
var e__18365__auto__ = e21525;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-did-replay","frontend.devtools/on-did-replay",1141581615))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21526){if((e21526 instanceof Error)){
var e__18365__auto____$1 = e21526;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__21523 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__21523,new cljs.core.Keyword("frontend.devtools","on-toggle-signal","frontend.devtools/on-toggle-signal",-542410243))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","toggle-signal","frontend.devtools/toggle-signal",-109076655),id], null));

return replay.call(null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21531){if((e21531 instanceof Error)){
var e__18365__auto____$2 = e21531;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__21523 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__21523,new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","toggle-action","frontend.devtools/toggle-action",1628953787),id], null));

return replay.call(null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21532){if((e21532 instanceof Error)){
var e__18365__auto____$3 = e21532;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{var signal_0__21523 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__21523,new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155))){
var id = cljs.core.nth.call(null,signal,(1));
return cljs.core.println.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(frontend.devtools._find_action.call(null,model,id))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e21533){if((e21533 instanceof Error)){
var e__18365__auto____$4 = e21533;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$4;
}
} else {
throw e21533;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e21532;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e21531;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21527){if((e21527 instanceof Error)){
var e__18365__auto____$2 = e21527;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-toggle-persist","frontend.devtools/on-toggle-persist",322406856))){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","toggle-persist","frontend.devtools/toggle-persist",1478929596));
} else {
throw cljs.core.match.backtrack;

}
}catch (e21528){if((e21528 instanceof Error)){
var e__18365__auto____$3 = e21528;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-sweep","frontend.devtools/on-sweep",-119430604))){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","sweep","frontend.devtools/sweep",-125621996));
} else {
throw cljs.core.match.backtrack;

}
}catch (e21529){if((e21529 instanceof Error)){
var e__18365__auto____$4 = e21529;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-reset","frontend.devtools/on-reset",1299957487))){
dispatch.call(null,new cljs.core.Keyword("frontend.devtools","clear-history","frontend.devtools/clear-history",-141771415));

return replay.call(null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21530){if((e21530 instanceof Error)){
var e__18365__auto____$5 = e21530;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
return handle_component_signal.call(null,model);
} else {
throw e__18365__auto____$5;
}
} else {
throw e21530;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e21529;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e21528;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e21527;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e21526;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e21525;

}
}});
});
/**
 * Orphaned signal has no actions.
 */
frontend.devtools._orphaned_signal_QMARK_ = (function frontend$devtools$_orphaned_signal_QMARK_(model,p__21535){
var vec__21537 = p__21535;
var signal_id = cljs.core.nth.call(null,vec__21537,(0),null);
var _ = cljs.core.nth.call(null,vec__21537,(1),null);
var _signal_ = vec__21537;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__21537,signal_id,_,_signal_){
return (function (p1__21534_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__21534_SHARP_),signal_id);
});})(vec__21537,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools._wrap_reconcile = (function frontend$devtools$_wrap_reconcile(component_reconcile){
return (function frontend$devtools$_wrap_reconcile_$_reconcile(model,action){
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("frontend.devtools","clear-history","frontend.devtools/clear-history",-141771415))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY);
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__21594 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21594,new cljs.core.Keyword("frontend.devtools","record-signal-event","frontend.devtools/record-signal-event",2068008119))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc);
} else {
var action_0__21594__$1 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21594__$1,new cljs.core.Keyword("frontend.devtools","toggle-signal","frontend.devtools/toggle-signal",-109076655))){
var id = cljs.core.nth.call(null,action,(1));
var all_actions_enabled_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.filter.call(null,((function (id,action_0__21594__$1,action_0__21594){
return (function (p1__21538_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__21538_SHARP_),id);
});})(id,action_0__21594__$1,action_0__21594))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
return frontend.devtools._update_action_events_STAR_.call(null,model,((function (all_actions_enabled_QMARK_,id,action_0__21594__$1,action_0__21594){
return (function (p1__21539_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__21539_SHARP_),id);
});})(all_actions_enabled_QMARK_,id,action_0__21594__$1,action_0__21594))
,cljs.core.assoc,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),!(all_actions_enabled_QMARK_));
} else {
var action_0__21594__$2 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21594__$2,new cljs.core.Keyword("frontend.devtools","toggle-action","frontend.devtools/toggle-action",1628953787))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.devtools._update_action_event.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("frontend.devtools","replay","frontend.devtools/replay",-1059082135))){
var action_events = cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model));
var new_model = cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model));
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,action_events);
if(cljs.core.truth_(temp__4423__auto__)){
var map__21602 = temp__4423__auto__;
var map__21602__$1 = ((((!((map__21602 == null)))?((((map__21602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21602):map__21602);
var id = cljs.core.get.call(null,map__21602__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__21602__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__21610 = cljs.core.rest.call(null,action_events);
var G__21611 = (function (){var m = new_model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,action__$1);
var m__$2 = frontend.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1));
return m__$2;
})();
action_events = G__21610;
new_model = G__21611;
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
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"action-events","action-events",1949072282),((function (m,action_0__21594__$2,action_0__21594__$1,action_0__21594){
return (function (p1__21540_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__21540_SHARP_);
});})(m,action_0__21594__$2,action_0__21594__$1,action_0__21594))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1,action_0__21594__$2,action_0__21594__$1,action_0__21594){
return (function (p1__21541_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__21541_SHARP_);
});})(m,m__$1,action_0__21594__$2,action_0__21594__$1,action_0__21594))
);
return m__$2;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__21596 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21596,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
if(cljs.core.truth_(frontend.devtools._find_signal.call(null,model,signal_id))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(m__$1),a,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1))], null));
var m__$3 = cljs.core.update.call(null,m__$2,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
return m__$3;
} else {
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,model,a);
}
} else {
var vec__21604 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword("frontend.devtools","unknown-signal","frontend.devtools/unknown-signal",-640444007));
var signal_id = cljs.core.nth.call(null,vec__21604,(0),null);
var _ = cljs.core.nth.call(null,vec__21604,(1),null);
var unknown_signal_event = vec__21604;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,action], null));

}
} else {
var vec__21605 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword("frontend.devtools","unknown-signal","frontend.devtools/unknown-signal",-640444007));
var signal_id = cljs.core.nth.call(null,vec__21605,(0),null);
var _ = cljs.core.nth.call(null,vec__21605,(1),null);
var unknown_signal_event = vec__21605;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,action], null));

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
var map__21606 = temp__4423__auto__;
var map__21606__$1 = ((((!((map__21606 == null)))?((((map__21606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21606):map__21606);
var id = cljs.core.get.call(null,map__21606__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__21606__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__21612 = cljs.core.rest.call(null,action_events);
var G__21613 = (function (){var m = new_model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,action__$1);
var m__$2 = frontend.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1));
return m__$2;
})();
action_events = G__21612;
new_model = G__21613;
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
return (function (p1__21540_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__21540_SHARP_);
});})(m))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1){
return (function (p1__21541_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__21541_SHARP_);
});})(m,m__$1))
);
return m__$2;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__21599 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21599,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
if(cljs.core.truth_(frontend.devtools._find_signal.call(null,model,signal_id))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(m__$1),a,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1))], null));
var m__$3 = cljs.core.update.call(null,m__$2,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
return m__$3;
} else {
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,model,a);
}
} else {
var vec__21608 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword("frontend.devtools","unknown-signal","frontend.devtools/unknown-signal",-640444007));
var signal_id = cljs.core.nth.call(null,vec__21608,(0),null);
var _ = cljs.core.nth.call(null,vec__21608,(1),null);
var unknown_signal_event = vec__21608;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,action], null));

}
} else {
var vec__21609 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword("frontend.devtools","unknown-signal","frontend.devtools/unknown-signal",-640444007));
var signal_id = cljs.core.nth.call(null,vec__21609,(0),null);
var _ = cljs.core.nth.call(null,vec__21609,(1),null);
var unknown_signal_event = vec__21609;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,action], null));

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
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(p__21615,dispatch){
var map__21674 = p__21615;
var map__21674__$1 = ((((!((map__21674 == null)))?((((map__21674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21674):map__21674);
var _view_model_ = map__21674__$1;
var persist_QMARK_ = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"persist?","persist?",-1772568760));
var initial_model = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487));
var signal_events = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244));
var action_events = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#4F5A65"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Persist debug session into local storage?",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,persist_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","on-toggle-persist","frontend.devtools/on-toggle-persist",322406856));
});})(map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
], null),"Persist session"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._menu_button,"Sweep",((function (map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","on-sweep","frontend.devtools/on-sweep",-119430604));
});})(map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,"Removes disabled actions and \"orphaned\" signals from history"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._menu_button,"Reset",((function (map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","on-reset","frontend.devtools/on-reset",1299957487));
});})(map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,"Removes all actions and signals resetting the model to initial state"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = ((function (map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__21676(s__21677){
return (new cljs.core.LazySeq(null,((function (map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__21677__$1 = s__21677;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21677__$1);
if(temp__4425__auto__){
var s__21677__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21677__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__21677__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__21679 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__21678 = (0);
while(true){
if((i__21678 < size__17522__auto__)){
var vec__21706 = cljs.core._nth.call(null,c__17521__auto__,i__21678);
var signal_id = cljs.core.nth.call(null,vec__21706,(0),null);
var signal = cljs.core.nth.call(null,vec__21706,(1),null);
cljs.core.chunk_append.call(null,b__21679,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21678,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-signal","frontend.devtools/on-toggle-signal",-542410243),signal_id], null));
});})(i__21678,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (i__21678,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__21676_$_iter__21707(s__21708){
return (new cljs.core.LazySeq(null,((function (i__21678,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__21708__$1 = s__21708;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__21708__$1);
if(temp__4425__auto____$1){
var s__21708__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21708__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__21708__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__21710 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__21709 = (0);
while(true){
if((i__21709 < size__17522__auto____$1)){
var map__21715 = cljs.core._nth.call(null,c__17521__auto____$1,i__21709);
var map__21715__$1 = ((((!((map__21715 == null)))?((((map__21715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21715):map__21715);
var id = cljs.core.get.call(null,map__21715__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__21715__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__21715__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__21710,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21709,i__21678,map__21715,map__21715__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__21710,s__21708__$2,temp__4425__auto____$1,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(i__21709,i__21678,map__21715,map__21715__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__21710,s__21708__$2,temp__4425__auto____$1,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21709,i__21678,map__21715,map__21715__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__21710,s__21708__$2,temp__4425__auto____$1,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(i__21709,i__21678,map__21715,map__21715__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__21710,s__21708__$2,temp__4425__auto____$1,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__21732 = (i__21709 + (1));
i__21709 = G__21732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21710),frontend$devtools$_devtools_view_$_iter__21676_$_iter__21707.call(null,cljs.core.chunk_rest.call(null,s__21708__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21710),null);
}
} else {
var map__21717 = cljs.core.first.call(null,s__21708__$2);
var map__21717__$1 = ((((!((map__21717 == null)))?((((map__21717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21717):map__21717);
var id = cljs.core.get.call(null,map__21717__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__21717__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__21717__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21678,map__21717,map__21717__$1,id,enabled_QMARK_,action,s__21708__$2,temp__4425__auto____$1,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(i__21678,map__21717,map__21717__$1,id,enabled_QMARK_,action,s__21708__$2,temp__4425__auto____$1,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21678,map__21717,map__21717__$1,id,enabled_QMARK_,action,s__21708__$2,temp__4425__auto____$1,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(i__21678,map__21717,map__21717__$1,id,enabled_QMARK_,action,s__21708__$2,temp__4425__auto____$1,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__21676_$_iter__21707.call(null,cljs.core.rest.call(null,s__21708__$2)));
}
} else {
return null;
}
break;
}
});})(i__21678,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(i__21678,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__21678,iter__17523__auto__,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__21614_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__21614_SHARP_),signal_id);
});})(i__21678,iter__17523__auto__,vec__21706,signal_id,signal,c__17521__auto__,size__17522__auto__,b__21679,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__21733 = (i__21678 + (1));
i__21678 = G__21733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21679),frontend$devtools$_devtools_view_$_iter__21676.call(null,cljs.core.chunk_rest.call(null,s__21677__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21679),null);
}
} else {
var vec__21719 = cljs.core.first.call(null,s__21677__$2);
var signal_id = cljs.core.nth.call(null,vec__21719,(0),null);
var signal = cljs.core.nth.call(null,vec__21719,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-signal","frontend.devtools/on-toggle-signal",-542410243),signal_id], null));
});})(vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__21676_$_iter__21720(s__21721){
return (new cljs.core.LazySeq(null,((function (vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__21721__$1 = s__21721;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__21721__$1);
if(temp__4425__auto____$1){
var s__21721__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21721__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__21721__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__21723 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__21722 = (0);
while(true){
if((i__21722 < size__17522__auto__)){
var map__21728 = cljs.core._nth.call(null,c__17521__auto__,i__21722);
var map__21728__$1 = ((((!((map__21728 == null)))?((((map__21728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21728):map__21728);
var id = cljs.core.get.call(null,map__21728__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__21728__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__21728__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__21723,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21722,map__21728,map__21728__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__21723,s__21721__$2,temp__4425__auto____$1,vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(i__21722,map__21728,map__21728__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__21723,s__21721__$2,temp__4425__auto____$1,vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21722,map__21728,map__21728__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__21723,s__21721__$2,temp__4425__auto____$1,vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(i__21722,map__21728,map__21728__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__21723,s__21721__$2,temp__4425__auto____$1,vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__21734 = (i__21722 + (1));
i__21722 = G__21734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21723),frontend$devtools$_devtools_view_$_iter__21676_$_iter__21720.call(null,cljs.core.chunk_rest.call(null,s__21721__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21723),null);
}
} else {
var map__21730 = cljs.core.first.call(null,s__21721__$2);
var map__21730__$1 = ((((!((map__21730 == null)))?((((map__21730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21730):map__21730);
var id = cljs.core.get.call(null,map__21730__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__21730__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__21730__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21730,map__21730__$1,id,enabled_QMARK_,action,s__21721__$2,temp__4425__auto____$1,vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(map__21730,map__21730__$1,id,enabled_QMARK_,action,s__21721__$2,temp__4425__auto____$1,vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21730,map__21730__$1,id,enabled_QMARK_,action,s__21721__$2,temp__4425__auto____$1,vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(map__21730,map__21730__$1,id,enabled_QMARK_,action,s__21721__$2,temp__4425__auto____$1,vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__21676_$_iter__21720.call(null,cljs.core.rest.call(null,s__21721__$2)));
}
} else {
return null;
}
break;
}
});})(vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__21614_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__21614_SHARP_),signal_id);
});})(iter__17523__auto__,vec__21719,signal_id,signal,s__21677__$2,temp__4425__auto__,map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__21676.call(null,cljs.core.rest.call(null,s__21677__$2)));
}
} else {
return null;
}
break;
}
});})(map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(map__21674,map__21674__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.reverse.call(null,cljs.core.deref.call(null,signal_events)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Initial model:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,cljs.core.deref.call(null,initial_model))], null)], null);
});
frontend.devtools._wrap_view = (function frontend$devtools$_wrap_view(component_view){
return (function frontend$devtools$_wrap_view_$_view(view_model,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_view,new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058).cljs$core$IFn$_invoke$arity$1(view_model),dispatch], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-2px 0 7px 0 rgba(0, 0, 0, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._devtools_view,view_model,dispatch], null)], null)], null);
});
});
/**
 * Adds devtools to a component.
 *   For replay to work correctly component is required to handle ::on-did-replay signal.
 *   Middleware is expected to be used with ui/connect-reactive-reagent.
 */
frontend.devtools.wrap = (function frontend$devtools$wrap(spec,storage,storage_key){
return frontend.persistence_middleware.wrap.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"init","init",-1875481434),frontend.devtools._wrap_init),new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.devtools._wrap_view_model),new cljs.core.Keyword(null,"view","view",1247994814),frontend.devtools._wrap_view),new cljs.core.Keyword(null,"control","control",1892578036),frontend.devtools._wrap_control),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.devtools._wrap_reconcile),storage,storage_key,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),null], null), null));
});

//# sourceMappingURL=devtools.js.map?rel=1452962582978