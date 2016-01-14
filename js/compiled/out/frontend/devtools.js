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
var G__26757__i = 0, G__26757__a = new Array(arguments.length -  0);
while (G__26757__i < G__26757__a.length) {G__26757__a[G__26757__i] = arguments[G__26757__i + 0]; ++G__26757__i;}
  args = new cljs.core.IndexedSeq(G__26757__a,0);
} 
return frontend$devtools$_wrap_init_$_init__delegate.call(this,args);};
frontend$devtools$_wrap_init_$_init.cljs$lang$maxFixedArity = 0;
frontend$devtools$_wrap_init_$_init.cljs$lang$applyTo = (function (arglist__26758){
var args = cljs.core.seq(arglist__26758);
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
var args__17817__auto__ = [];
var len__17810__auto___26764 = arguments.length;
var i__17811__auto___26765 = (0);
while(true){
if((i__17811__auto___26765 < len__17810__auto___26764)){
args__17817__auto__.push((arguments[i__17811__auto___26765]));

var G__26766 = (i__17811__auto___26765 + (1));
i__17811__auto___26765 = G__26766;
continue;
} else {
}
break;
}

var argseq__17818__auto__ = ((((3) < args__17817__auto__.length))?(new cljs.core.IndexedSeq(args__17817__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17818__auto__);
});

frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-events","action-events",1949072282),com.rpl.specter.ALL,pred], null),(function (p1__26759_SHARP_){
return cljs.core.apply.call(null,f,p1__26759_SHARP_,args);
}),model);
});

frontend.devtools._update_action_events_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_events_STAR_.cljs$lang$applyTo = (function (seq26760){
var G__26761 = cljs.core.first.call(null,seq26760);
var seq26760__$1 = cljs.core.next.call(null,seq26760);
var G__26762 = cljs.core.first.call(null,seq26760__$1);
var seq26760__$2 = cljs.core.next.call(null,seq26760__$1);
var G__26763 = cljs.core.first.call(null,seq26760__$2);
var seq26760__$3 = cljs.core.next.call(null,seq26760__$2);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26761,G__26762,G__26763,seq26760__$3);
});
frontend.devtools._update_action_event = (function frontend$devtools$_update_action_event(var_args){
var args__17817__auto__ = [];
var len__17810__auto___26772 = arguments.length;
var i__17811__auto___26773 = (0);
while(true){
if((i__17811__auto___26773 < len__17810__auto___26772)){
args__17817__auto__.push((arguments[i__17811__auto___26773]));

var G__26774 = (i__17811__auto___26773 + (1));
i__17811__auto___26773 = G__26774;
continue;
} else {
}
break;
}

var argseq__17818__auto__ = ((((3) < args__17817__auto__.length))?(new cljs.core.IndexedSeq(args__17817__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17818__auto__);
});

frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_action_events_STAR_,model,(function (p1__26767_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26767_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action_event.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_event.cljs$lang$applyTo = (function (seq26768){
var G__26769 = cljs.core.first.call(null,seq26768);
var seq26768__$1 = cljs.core.next.call(null,seq26768);
var G__26770 = cljs.core.first.call(null,seq26768__$1);
var seq26768__$2 = cljs.core.next.call(null,seq26768__$1);
var G__26771 = cljs.core.first.call(null,seq26768__$2);
var seq26768__$3 = cljs.core.next.call(null,seq26768__$2);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic(G__26769,G__26770,G__26771,seq26768__$3);
});
frontend.devtools._find_action = (function frontend$devtools$_find_action(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__26775_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26775_SHARP_),id);
}),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools._wrap_control = (function frontend$devtools$_wrap_control(component_control){
return (function frontend$devtools$_wrap_control_$_control(model,signal,dispatch){
var replay = (function frontend$devtools$_wrap_control_$_control_$_replay(){
return component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.Keyword("frontend.devtools","replay","frontend.devtools/replay",-1059082135))),new cljs.core.Keyword("frontend.devtools","on-did-replay","frontend.devtools/on-did-replay",1141581615),(function (p1__26776_SHARP_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,p1__26776_SHARP_));
}));
});
var handle_component_signal = (function frontend$devtools$_wrap_control_$_control_$_handle_component_signal(model__$1){
var vec__26829 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model__$1),signal);
var signal_id = cljs.core.nth.call(null,vec__26829,(0),null);
var _ = cljs.core.nth.call(null,vec__26829,(1),null);
var signal_event = vec__26829;
component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model__$1),signal,((function (vec__26829,signal_id,_,signal_event){
return (function (p1__26777_SHARP_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,p1__26777_SHARP_], null)));
});})(vec__26829,signal_id,_,signal_event))
);

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","record-signal-event","frontend.devtools/record-signal-event",2068008119),signal_event], null));
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
}catch (e26833){if((e26833 instanceof Error)){
var e__18366__auto__ = e26833;
if((e__18366__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-did-replay","frontend.devtools/on-did-replay",1141581615))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e26834){if((e26834 instanceof Error)){
var e__18366__auto____$1 = e26834;
if((e__18366__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__26831 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__26831,new cljs.core.Keyword("frontend.devtools","on-toggle-signal","frontend.devtools/on-toggle-signal",-542410243))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","toggle-signal","frontend.devtools/toggle-signal",-109076655),id], null));

return replay.call(null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26839){if((e26839 instanceof Error)){
var e__18366__auto____$2 = e26839;
if((e__18366__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__26831 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__26831,new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","toggle-action","frontend.devtools/toggle-action",1628953787),id], null));

return replay.call(null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26840){if((e26840 instanceof Error)){
var e__18366__auto____$3 = e26840;
if((e__18366__auto____$3 === cljs.core.match.backtrack)){
try{var signal_0__26831 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__26831,new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155))){
var id = cljs.core.nth.call(null,signal,(1));
return cljs.core.println.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(frontend.devtools._find_action.call(null,model,id))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26841){if((e26841 instanceof Error)){
var e__18366__auto____$4 = e26841;
if((e__18366__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18366__auto____$4;
}
} else {
throw e26841;

}
}} else {
throw e__18366__auto____$3;
}
} else {
throw e26840;

}
}} else {
throw e__18366__auto____$2;
}
} else {
throw e26839;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26835){if((e26835 instanceof Error)){
var e__18366__auto____$2 = e26835;
if((e__18366__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-toggle-persist","frontend.devtools/on-toggle-persist",322406856))){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","toggle-persist","frontend.devtools/toggle-persist",1478929596));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26836){if((e26836 instanceof Error)){
var e__18366__auto____$3 = e26836;
if((e__18366__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-sweep","frontend.devtools/on-sweep",-119430604))){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","sweep","frontend.devtools/sweep",-125621996));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26837){if((e26837 instanceof Error)){
var e__18366__auto____$4 = e26837;
if((e__18366__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword("frontend.devtools","on-reset","frontend.devtools/on-reset",1299957487))){
dispatch.call(null,new cljs.core.Keyword("frontend.devtools","clear-history","frontend.devtools/clear-history",-141771415));

return replay.call(null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26838){if((e26838 instanceof Error)){
var e__18366__auto____$5 = e26838;
if((e__18366__auto____$5 === cljs.core.match.backtrack)){
return handle_component_signal.call(null,model);
} else {
throw e__18366__auto____$5;
}
} else {
throw e26838;

}
}} else {
throw e__18366__auto____$4;
}
} else {
throw e26837;

}
}} else {
throw e__18366__auto____$3;
}
} else {
throw e26836;

}
}} else {
throw e__18366__auto____$2;
}
} else {
throw e26835;

}
}} else {
throw e__18366__auto____$1;
}
} else {
throw e26834;

}
}} else {
throw e__18366__auto__;
}
} else {
throw e26833;

}
}});
});
/**
 * Orphaned signal has no actions.
 */
frontend.devtools._orphaned_signal_QMARK_ = (function frontend$devtools$_orphaned_signal_QMARK_(model,p__26843){
var vec__26845 = p__26843;
var signal_id = cljs.core.nth.call(null,vec__26845,(0),null);
var _ = cljs.core.nth.call(null,vec__26845,(1),null);
var _signal_ = vec__26845;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__26845,signal_id,_,_signal_){
return (function (p1__26842_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__26842_SHARP_),signal_id);
});})(vec__26845,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools._wrap_reconcile = (function frontend$devtools$_wrap_reconcile(component_reconcile){
return (function frontend$devtools$_wrap_reconcile_$_reconcile(model,action){
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("frontend.devtools","clear-history","frontend.devtools/clear-history",-141771415))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY);
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__26902 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__26902,new cljs.core.Keyword("frontend.devtools","record-signal-event","frontend.devtools/record-signal-event",2068008119))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc);
} else {
var action_0__26902__$1 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__26902__$1,new cljs.core.Keyword("frontend.devtools","toggle-signal","frontend.devtools/toggle-signal",-109076655))){
var id = cljs.core.nth.call(null,action,(1));
var all_actions_enabled_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.filter.call(null,((function (id,action_0__26902__$1,action_0__26902){
return (function (p1__26846_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__26846_SHARP_),id);
});})(id,action_0__26902__$1,action_0__26902))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
return frontend.devtools._update_action_events_STAR_.call(null,model,((function (all_actions_enabled_QMARK_,id,action_0__26902__$1,action_0__26902){
return (function (p1__26847_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__26847_SHARP_),id);
});})(all_actions_enabled_QMARK_,id,action_0__26902__$1,action_0__26902))
,cljs.core.assoc,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),!(all_actions_enabled_QMARK_));
} else {
var action_0__26902__$2 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__26902__$2,new cljs.core.Keyword("frontend.devtools","toggle-action","frontend.devtools/toggle-action",1628953787))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.devtools._update_action_event.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword("frontend.devtools","replay","frontend.devtools/replay",-1059082135))){
var action_events = cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model));
var new_model = cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model));
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,action_events);
if(cljs.core.truth_(temp__4423__auto__)){
var map__26910 = temp__4423__auto__;
var map__26910__$1 = ((((!((map__26910 == null)))?((((map__26910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26910):map__26910);
var id = cljs.core.get.call(null,map__26910__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__26910__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__26918 = cljs.core.rest.call(null,action_events);
var G__26919 = (function (){var m = new_model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,action__$1);
var m__$2 = frontend.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1));
return m__$2;
})();
action_events = G__26918;
new_model = G__26919;
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
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"action-events","action-events",1949072282),((function (m,action_0__26902__$2,action_0__26902__$1,action_0__26902){
return (function (p1__26848_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__26848_SHARP_);
});})(m,action_0__26902__$2,action_0__26902__$1,action_0__26902))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1,action_0__26902__$2,action_0__26902__$1,action_0__26902){
return (function (p1__26849_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__26849_SHARP_);
});})(m,m__$1,action_0__26902__$2,action_0__26902__$1,action_0__26902))
);
return m__$2;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__26904 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__26904,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(m__$1),a,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1))], null));
var m__$3 = cljs.core.update.call(null,m__$2,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
return m__$3;
} else {
var vec__26912 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword("frontend.devtools","unknown-signal","frontend.devtools/unknown-signal",-640444007));
var signal_id = cljs.core.nth.call(null,vec__26912,(0),null);
var _ = cljs.core.nth.call(null,vec__26912,(1),null);
var unknown_signal_event = vec__26912;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,action], null));

}
} else {
var vec__26913 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword("frontend.devtools","unknown-signal","frontend.devtools/unknown-signal",-640444007));
var signal_id = cljs.core.nth.call(null,vec__26913,(0),null);
var _ = cljs.core.nth.call(null,vec__26913,(1),null);
var unknown_signal_event = vec__26913;
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
var map__26914 = temp__4423__auto__;
var map__26914__$1 = ((((!((map__26914 == null)))?((((map__26914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26914):map__26914);
var id = cljs.core.get.call(null,map__26914__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__26914__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__26920 = cljs.core.rest.call(null,action_events);
var G__26921 = (function (){var m = new_model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,action__$1);
var m__$2 = frontend.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1));
return m__$2;
})();
action_events = G__26920;
new_model = G__26921;
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
return (function (p1__26848_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__26848_SHARP_);
});})(m))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1){
return (function (p1__26849_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__26849_SHARP_);
});})(m,m__$1))
);
return m__$2;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__26907 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__26907,new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(m__$1),a,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1))], null));
var m__$3 = cljs.core.update.call(null,m__$2,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
return m__$3;
} else {
var vec__26916 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword("frontend.devtools","unknown-signal","frontend.devtools/unknown-signal",-640444007));
var signal_id = cljs.core.nth.call(null,vec__26916,(0),null);
var _ = cljs.core.nth.call(null,vec__26916,(1),null);
var unknown_signal_event = vec__26916;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),signal_id,action], null));

}
} else {
var vec__26917 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword("frontend.devtools","unknown-signal","frontend.devtools/unknown-signal",-640444007));
var signal_id = cljs.core.nth.call(null,vec__26917,(0),null);
var _ = cljs.core.nth.call(null,vec__26917,(1),null);
var unknown_signal_event = vec__26917;
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
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(p__26923,dispatch){
var map__26982 = p__26923;
var map__26982__$1 = ((((!((map__26982 == null)))?((((map__26982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26982):map__26982);
var _view_model_ = map__26982__$1;
var persist_QMARK_ = cljs.core.get.call(null,map__26982__$1,new cljs.core.Keyword(null,"persist?","persist?",-1772568760));
var initial_model = cljs.core.get.call(null,map__26982__$1,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487));
var signal_events = cljs.core.get.call(null,map__26982__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244));
var action_events = cljs.core.get.call(null,map__26982__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#4F5A65"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Persist debug session into local storage?",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,persist_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","on-toggle-persist","frontend.devtools/on-toggle-persist",322406856));
});})(map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
], null),"Persist session"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._menu_button,"Sweep",((function (map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","on-sweep","frontend.devtools/on-sweep",-119430604));
});})(map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,"Removes disabled actions and \"orphaned\" signals from history"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._menu_button,"Reset",((function (map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword("frontend.devtools","on-reset","frontend.devtools/on-reset",1299957487));
});})(map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,"Removes all actions and signals resetting the model to initial state"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17524__auto__ = ((function (map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__26984(s__26985){
return (new cljs.core.LazySeq(null,((function (map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__26985__$1 = s__26985;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26985__$1);
if(temp__4425__auto__){
var s__26985__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26985__$2)){
var c__17522__auto__ = cljs.core.chunk_first.call(null,s__26985__$2);
var size__17523__auto__ = cljs.core.count.call(null,c__17522__auto__);
var b__26987 = cljs.core.chunk_buffer.call(null,size__17523__auto__);
if((function (){var i__26986 = (0);
while(true){
if((i__26986 < size__17523__auto__)){
var vec__27014 = cljs.core._nth.call(null,c__17522__auto__,i__26986);
var signal_id = cljs.core.nth.call(null,vec__27014,(0),null);
var signal = cljs.core.nth.call(null,vec__27014,(1),null);
cljs.core.chunk_append.call(null,b__26987,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26986,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-signal","frontend.devtools/on-toggle-signal",-542410243),signal_id], null));
});})(i__26986,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17524__auto__ = ((function (i__26986,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__26984_$_iter__27015(s__27016){
return (new cljs.core.LazySeq(null,((function (i__26986,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__27016__$1 = s__27016;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27016__$1);
if(temp__4425__auto____$1){
var s__27016__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27016__$2)){
var c__17522__auto____$1 = cljs.core.chunk_first.call(null,s__27016__$2);
var size__17523__auto____$1 = cljs.core.count.call(null,c__17522__auto____$1);
var b__27018 = cljs.core.chunk_buffer.call(null,size__17523__auto____$1);
if((function (){var i__27017 = (0);
while(true){
if((i__27017 < size__17523__auto____$1)){
var map__27023 = cljs.core._nth.call(null,c__17522__auto____$1,i__27017);
var map__27023__$1 = ((((!((map__27023 == null)))?((((map__27023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27023):map__27023);
var id = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__27023__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__27018,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27017,i__26986,map__27023,map__27023__$1,id,enabled_QMARK_,action,c__17522__auto____$1,size__17523__auto____$1,b__27018,s__27016__$2,temp__4425__auto____$1,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(i__27017,i__26986,map__27023,map__27023__$1,id,enabled_QMARK_,action,c__17522__auto____$1,size__17523__auto____$1,b__27018,s__27016__$2,temp__4425__auto____$1,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27017,i__26986,map__27023,map__27023__$1,id,enabled_QMARK_,action,c__17522__auto____$1,size__17523__auto____$1,b__27018,s__27016__$2,temp__4425__auto____$1,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(i__27017,i__26986,map__27023,map__27023__$1,id,enabled_QMARK_,action,c__17522__auto____$1,size__17523__auto____$1,b__27018,s__27016__$2,temp__4425__auto____$1,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__27040 = (i__27017 + (1));
i__27017 = G__27040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27018),frontend$devtools$_devtools_view_$_iter__26984_$_iter__27015.call(null,cljs.core.chunk_rest.call(null,s__27016__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27018),null);
}
} else {
var map__27025 = cljs.core.first.call(null,s__27016__$2);
var map__27025__$1 = ((((!((map__27025 == null)))?((((map__27025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27025):map__27025);
var id = cljs.core.get.call(null,map__27025__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__27025__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__27025__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26986,map__27025,map__27025__$1,id,enabled_QMARK_,action,s__27016__$2,temp__4425__auto____$1,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(i__26986,map__27025,map__27025__$1,id,enabled_QMARK_,action,s__27016__$2,temp__4425__auto____$1,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26986,map__27025,map__27025__$1,id,enabled_QMARK_,action,s__27016__$2,temp__4425__auto____$1,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(i__26986,map__27025,map__27025__$1,id,enabled_QMARK_,action,s__27016__$2,temp__4425__auto____$1,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__26984_$_iter__27015.call(null,cljs.core.rest.call(null,s__27016__$2)));
}
} else {
return null;
}
break;
}
});})(i__26986,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(i__26986,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17524__auto__.call(null,cljs.core.filter.call(null,((function (i__26986,iter__17524__auto__,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__26922_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__26922_SHARP_),signal_id);
});})(i__26986,iter__17524__auto__,vec__27014,signal_id,signal,c__17522__auto__,size__17523__auto__,b__26987,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__27041 = (i__26986 + (1));
i__26986 = G__27041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26987),frontend$devtools$_devtools_view_$_iter__26984.call(null,cljs.core.chunk_rest.call(null,s__26985__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26987),null);
}
} else {
var vec__27027 = cljs.core.first.call(null,s__26985__$2);
var signal_id = cljs.core.nth.call(null,vec__27027,(0),null);
var signal = cljs.core.nth.call(null,vec__27027,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-signal","frontend.devtools/on-toggle-signal",-542410243),signal_id], null));
});})(vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17524__auto__ = ((function (vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__26984_$_iter__27028(s__27029){
return (new cljs.core.LazySeq(null,((function (vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__27029__$1 = s__27029;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27029__$1);
if(temp__4425__auto____$1){
var s__27029__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27029__$2)){
var c__17522__auto__ = cljs.core.chunk_first.call(null,s__27029__$2);
var size__17523__auto__ = cljs.core.count.call(null,c__17522__auto__);
var b__27031 = cljs.core.chunk_buffer.call(null,size__17523__auto__);
if((function (){var i__27030 = (0);
while(true){
if((i__27030 < size__17523__auto__)){
var map__27036 = cljs.core._nth.call(null,c__17522__auto__,i__27030);
var map__27036__$1 = ((((!((map__27036 == null)))?((((map__27036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27036):map__27036);
var id = cljs.core.get.call(null,map__27036__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__27036__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__27036__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__27031,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27030,map__27036,map__27036__$1,id,enabled_QMARK_,action,c__17522__auto__,size__17523__auto__,b__27031,s__27029__$2,temp__4425__auto____$1,vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(i__27030,map__27036,map__27036__$1,id,enabled_QMARK_,action,c__17522__auto__,size__17523__auto__,b__27031,s__27029__$2,temp__4425__auto____$1,vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27030,map__27036,map__27036__$1,id,enabled_QMARK_,action,c__17522__auto__,size__17523__auto__,b__27031,s__27029__$2,temp__4425__auto____$1,vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(i__27030,map__27036,map__27036__$1,id,enabled_QMARK_,action,c__17522__auto__,size__17523__auto__,b__27031,s__27029__$2,temp__4425__auto____$1,vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__27042 = (i__27030 + (1));
i__27030 = G__27042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27031),frontend$devtools$_devtools_view_$_iter__26984_$_iter__27028.call(null,cljs.core.chunk_rest.call(null,s__27029__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27031),null);
}
} else {
var map__27038 = cljs.core.first.call(null,s__27029__$2);
var map__27038__$1 = ((((!((map__27038 == null)))?((((map__27038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27038):map__27038);
var id = cljs.core.get.call(null,map__27038__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__27038__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__27038__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27038,map__27038__$1,id,enabled_QMARK_,action,s__27029__$2,temp__4425__auto____$1,vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-toggle-action","frontend.devtools/on-toggle-action",1205361791),id], null));
});})(map__27038,map__27038__$1,id,enabled_QMARK_,action,s__27029__$2,temp__4425__auto____$1,vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27038,map__27038__$1,id,enabled_QMARK_,action,s__27029__$2,temp__4425__auto____$1,vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","on-log-action-result","frontend.devtools/on-log-action-result",1253445155),id], null));
});})(map__27038,map__27038__$1,id,enabled_QMARK_,action,s__27029__$2,temp__4425__auto____$1,vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__26984_$_iter__27028.call(null,cljs.core.rest.call(null,s__27029__$2)));
}
} else {
return null;
}
break;
}
});})(vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17524__auto__.call(null,cljs.core.filter.call(null,((function (iter__17524__auto__,vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__26922_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__26922_SHARP_),signal_id);
});})(iter__17524__auto__,vec__27027,signal_id,signal,s__26985__$2,temp__4425__auto__,map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__26984.call(null,cljs.core.rest.call(null,s__26985__$2)));
}
} else {
return null;
}
break;
}
});})(map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(map__26982,map__26982__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17524__auto__.call(null,cljs.core.reverse.call(null,cljs.core.deref.call(null,signal_events)));
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
 */
frontend.devtools.wrap = (function frontend$devtools$wrap(spec,storage,storage_key){
return frontend.persistence_middleware.wrap.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"init","init",-1875481434),frontend.devtools._wrap_init),new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.devtools._wrap_view_model),new cljs.core.Keyword(null,"view","view",1247994814),frontend.devtools._wrap_view),new cljs.core.Keyword(null,"control","control",1892578036),frontend.devtools._wrap_control),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.devtools._wrap_reconcile),storage,storage_key,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),null], null), null));
});

//# sourceMappingURL=devtools.js.map?rel=1452795137297