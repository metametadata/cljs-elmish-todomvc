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
var len__17809__auto___71965 = arguments.length;
var i__17810__auto___71966 = (0);
while(true){
if((i__17810__auto___71966 < len__17809__auto___71965)){
args__17816__auto__.push((arguments[i__17810__auto___71966]));

var G__71967 = (i__17810__auto___71966 + (1));
i__17810__auto___71966 = G__71967;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-events","action-events",1949072282),com.rpl.specter.ALL,pred], null),(function (p1__71960_SHARP_){
return cljs.core.apply.call(null,f,p1__71960_SHARP_,args);
}),model);
});

frontend.devtools._update_action_events_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_events_STAR_.cljs$lang$applyTo = (function (seq71961){
var G__71962 = cljs.core.first.call(null,seq71961);
var seq71961__$1 = cljs.core.next.call(null,seq71961);
var G__71963 = cljs.core.first.call(null,seq71961__$1);
var seq71961__$2 = cljs.core.next.call(null,seq71961__$1);
var G__71964 = cljs.core.first.call(null,seq71961__$2);
var seq71961__$3 = cljs.core.next.call(null,seq71961__$2);
return frontend.devtools._update_action_events_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__71962,G__71963,G__71964,seq71961__$3);
});
frontend.devtools._update_action_event = (function frontend$devtools$_update_action_event(var_args){
var args__17816__auto__ = [];
var len__17809__auto___71973 = arguments.length;
var i__17810__auto___71974 = (0);
while(true){
if((i__17810__auto___71974 < len__17809__auto___71973)){
args__17816__auto__.push((arguments[i__17810__auto___71974]));

var G__71975 = (i__17810__auto___71974 + (1));
i__17810__auto___71974 = G__71975;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_action_events_STAR_,model,(function (p1__71968_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__71968_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action_event.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action_event.cljs$lang$applyTo = (function (seq71969){
var G__71970 = cljs.core.first.call(null,seq71969);
var seq71969__$1 = cljs.core.next.call(null,seq71969);
var G__71971 = cljs.core.first.call(null,seq71969__$1);
var seq71969__$2 = cljs.core.next.call(null,seq71969__$1);
var G__71972 = cljs.core.first.call(null,seq71969__$2);
var seq71969__$3 = cljs.core.next.call(null,seq71969__$2);
return frontend.devtools._update_action_event.cljs$core$IFn$_invoke$arity$variadic(G__71970,G__71971,G__71972,seq71969__$3);
});
frontend.devtools._find_action = (function frontend$devtools$_find_action(model,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__71976_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__71976_SHARP_),id);
}),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
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
}catch (e72031){if((e72031 instanceof Error)){
var e__20495__auto__ = e72031;
if((e__20495__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__72027 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__72027,new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-signal","toggle-signal",-436538733),id], null));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e72039){if((e72039 instanceof Error)){
var e__20495__auto____$1 = e72039;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__72027 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__72027,new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453),id], null));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e72040){if((e72040 instanceof Error)){
var e__20495__auto____$2 = e72040;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__72027 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__72027,new cljs.core.Keyword(null,"on-log-action-result","on-log-action-result",1211018593))){
var id = cljs.core.nth.call(null,signal,(1));
return cljs.core.println.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(frontend.devtools._find_action.call(null,model,id))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e72041){if((e72041 instanceof Error)){
var e__20495__auto____$3 = e72041;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$3;
}
} else {
throw e72041;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e72040;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e72039;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e72032){if((e72032 instanceof Error)){
var e__20495__auto____$1 = e72032;
if((e__20495__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-persist","on-toggle-persist",264423174))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042));
} else {
throw cljs.core.match.backtrack;

}
}catch (e72033){if((e72033 instanceof Error)){
var e__20495__auto____$2 = e72033;
if((e__20495__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158))){
return dispatch.call(null,new cljs.core.Keyword(null,"sweep","sweep",-50871214));
} else {
throw cljs.core.match.backtrack;

}
}catch (e72034){if((e72034 instanceof Error)){
var e__20495__auto____$3 = e72034;
if((e__20495__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829))){
dispatch.call(null,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e72035){if((e72035 instanceof Error)){
var e__20495__auto____$4 = e72035;
if((e__20495__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__72029 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__72029,new cljs.core.Keyword(null,"component","component",1555936782))){
var s = cljs.core.nth.call(null,signal,(1));
var vec__72038 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),s);
var signal_id = cljs.core.nth.call(null,vec__72038,(0),null);
var _ = cljs.core.nth.call(null,vec__72038,(1),null);
var signal_event = vec__72038;
component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model),s,((function (vec__72038,signal_id,_,signal_event,s,signal_0__72029,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__){
return (function (p1__71977_SHARP_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),signal_id,p1__71977_SHARP_], null)));
});})(vec__72038,signal_id,_,signal_event,s,signal_0__72029,e__20495__auto____$4,e__20495__auto____$3,e__20495__auto____$2,e__20495__auto____$1,e__20495__auto__))
);

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135),signal_event], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e72037){if((e72037 instanceof Error)){
var e__20495__auto____$5 = e72037;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto____$5;
}
} else {
throw e72037;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e72036){if((e72036 instanceof Error)){
var e__20495__auto____$5 = e72036;
if((e__20495__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20495__auto____$5;
}
} else {
throw e72036;

}
}} else {
throw e__20495__auto____$4;
}
} else {
throw e72035;

}
}} else {
throw e__20495__auto____$3;
}
} else {
throw e72034;

}
}} else {
throw e__20495__auto____$2;
}
} else {
throw e72033;

}
}} else {
throw e__20495__auto____$1;
}
} else {
throw e72032;

}
}} else {
throw e__20495__auto__;
}
} else {
throw e72031;

}
}});
});
/**
 * Orphaned signal has no actions.
 */
frontend.devtools._orphaned_signal_QMARK_ = (function frontend$devtools$_orphaned_signal_QMARK_(model,p__72043){
var vec__72045 = p__72043;
var signal_id = cljs.core.nth.call(null,vec__72045,(0),null);
var _ = cljs.core.nth.call(null,vec__72045,(1),null);
var _signal_ = vec__72045;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__72045,signal_id,_,_signal_){
return (function (p1__72042_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__72042_SHARP_),signal_id);
});})(vec__72045,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools._wrap_reconcile = (function frontend$devtools$_wrap_reconcile(component_reconcile){
return (function frontend$devtools$_wrap_reconcile_$_reconcile(model,action){
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"dev-identity","dev-identity",1587672432))){
return model;
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.List.EMPTY);
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__72126 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__72126,new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc);
} else {
var action_0__72126__$1 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__72126__$1,new cljs.core.Keyword(null,"toggle-signal","toggle-signal",-436538733))){
var id = cljs.core.nth.call(null,action,(1));
var all_actions_enabled_QMARK_ = cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.filter.call(null,((function (id,action_0__72126__$1,action_0__72126){
return (function (p1__72046_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__72046_SHARP_),id);
});})(id,action_0__72126__$1,action_0__72126))
,new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model)));
return frontend.devtools._update_action_events_STAR_.call(null,model,((function (all_actions_enabled_QMARK_,id,action_0__72126__$1,action_0__72126){
return (function (p1__72047_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__72047_SHARP_),id);
});})(all_actions_enabled_QMARK_,id,action_0__72126__$1,action_0__72126))
,cljs.core.assoc,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),!(all_actions_enabled_QMARK_));
} else {
var action_0__72126__$2 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__72126__$2,new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.devtools._update_action_event.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"replay","replay",-681122389))){
var action_events = cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model));
var new_model = cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"dev-identity","dev-identity",1587672432)));
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,action_events);
if(cljs.core.truth_(temp__4423__auto__)){
var map__72142 = temp__4423__auto__;
var map__72142__$1 = ((((!((map__72142 == null)))?((((map__72142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72142):map__72142);
var id = cljs.core.get.call(null,map__72142__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__72142__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__72150 = cljs.core.rest.call(null,action_events);
var G__72151 = (function (){var m = new_model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,action__$1);
var m__$2 = frontend.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1));
return m__$2;
})();
action_events = G__72150;
new_model = G__72151;
continue;
} else {
return new_model;
}
break;
}
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sweep","sweep",-50871214))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"action-events","action-events",1949072282),((function (m,action_0__72126__$2,action_0__72126__$1,action_0__72126){
return (function (p1__72048_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__72048_SHARP_);
});})(m,action_0__72126__$2,action_0__72126__$1,action_0__72126))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1,action_0__72126__$2,action_0__72126__$1,action_0__72126){
return (function (p1__72049_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__72049_SHARP_);
});})(m,m__$1,action_0__72126__$2,action_0__72126__$1,action_0__72126))
);
return m__$2;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__72128 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__72128,new cljs.core.Keyword(null,"component","component",1555936782))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(m__$1),a,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1))], null));
var m__$3 = cljs.core.update.call(null,m__$2,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
return m__$3;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__72131 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__72131,new cljs.core.Keyword(null,"component","component",1555936782))){
var a = cljs.core.nth.call(null,action,(1));
var vec__72144 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var signal_id = cljs.core.nth.call(null,vec__72144,(0),null);
var _ = cljs.core.nth.call(null,vec__72144,(1),null);
var unknown_signal_event = vec__72144;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),signal_id,a], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}

}
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__72133 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__72133,new cljs.core.Keyword(null,"component","component",1555936782))){
var a = cljs.core.nth.call(null,action,(1));
var vec__72145 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var signal_id = cljs.core.nth.call(null,vec__72145,(0),null);
var _ = cljs.core.nth.call(null,vec__72145,(1),null);
var unknown_signal_event = vec__72145;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),signal_id,a], null));
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
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"replay","replay",-681122389))){
var action_events = cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"action-events","action-events",1949072282).cljs$core$IFn$_invoke$arity$1(model));
var new_model = cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"dev-identity","dev-identity",1587672432)));
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,action_events);
if(cljs.core.truth_(temp__4423__auto__)){
var map__72146 = temp__4423__auto__;
var map__72146__$1 = ((((!((map__72146 == null)))?((((map__72146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72146):map__72146);
var id = cljs.core.get.call(null,map__72146__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var action__$1 = cljs.core.get.call(null,map__72146__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__72152 = cljs.core.rest.call(null,action_events);
var G__72153 = (function (){var m = new_model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,action__$1);
var m__$2 = frontend.devtools._update_action_event.call(null,m__$1,id,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1));
return m__$2;
})();
action_events = G__72152;
new_model = G__72153;
continue;
} else {
return new_model;
}
break;
}
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),cljs.core.not);
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sweep","sweep",-50871214))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"action-events","action-events",1949072282),((function (m){
return (function (p1__72048_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__72048_SHARP_);
});})(m))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),((function (m,m__$1){
return (function (p1__72049_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__72049_SHARP_);
});})(m,m__$1))
);
return m__$2;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
var action_0__72135 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__72135,new cljs.core.Keyword(null,"component","component",1555936782))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(m__$1),a,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(m__$1))], null));
var m__$3 = cljs.core.update.call(null,m__$2,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
return m__$3;
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__72138 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__72138,new cljs.core.Keyword(null,"component","component",1555936782))){
var a = cljs.core.nth.call(null,action,(1));
var vec__72148 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var signal_id = cljs.core.nth.call(null,vec__72148,(0),null);
var _ = cljs.core.nth.call(null,vec__72148,(1),null);
var unknown_signal_event = vec__72148;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),signal_id,a], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));

}

}
} else {
if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
var action_0__72140 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__72140,new cljs.core.Keyword(null,"component","component",1555936782))){
var a = cljs.core.nth.call(null,action,(1));
var vec__72149 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var signal_id = cljs.core.nth.call(null,vec__72149,(0),null);
var _ = cljs.core.nth.call(null,vec__72149,(1),null);
var unknown_signal_event = vec__72149;
return frontend$devtools$_wrap_reconcile_$_reconcile.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signal-events","signal-events",555073244),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),signal_id,a], null));
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
});
});
frontend.devtools._wrap_view_model = (function frontend$devtools$_wrap_view_model(component_view_model){
return (function frontend$devtools$_wrap_view_model_$_view_model(model){
return cljs.core.assoc.call(null,frontend.ui.track_keys.call(null,model,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),new cljs.core.Keyword(null,"signal-events","signal-events",555073244),new cljs.core.Keyword(null,"action-events","action-events",1949072282)], null)),new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058),component_view_model.call(null,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,model));
}))));
});
});
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(p__72155,dispatch){
var map__72214 = p__72155;
var map__72214__$1 = ((((!((map__72214 == null)))?((((map__72214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72214):map__72214);
var _view_model_ = map__72214__$1;
var persist_QMARK_ = cljs.core.get.call(null,map__72214__$1,new cljs.core.Keyword(null,"persist?","persist?",-1772568760));
var initial_model = cljs.core.get.call(null,map__72214__$1,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487));
var signal_events = cljs.core.get.call(null,map__72214__$1,new cljs.core.Keyword(null,"signal-events","signal-events",555073244));
var action_events = cljs.core.get.call(null,map__72214__$1,new cljs.core.Keyword(null,"action-events","action-events",1949072282));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#4F5A65"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Persist debug session into local storage?",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,persist_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-toggle-persist","on-toggle-persist",264423174));
});})(map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
], null),"Persist session"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),"Removes disabled actions and \"orphaned\" signals from history",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158));
});})(map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
], null),"Sweep"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),"Removes all actions and signals resetting the model to initial state",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829));
});})(map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
], null),"Reset"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = ((function (map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__72216(s__72217){
return (new cljs.core.LazySeq(null,((function (map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__72217__$1 = s__72217;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__72217__$1);
if(temp__4425__auto__){
var s__72217__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__72217__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__72217__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__72219 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__72218 = (0);
while(true){
if((i__72218 < size__17522__auto__)){
var vec__72246 = cljs.core._nth.call(null,c__17521__auto__,i__72218);
var signal_id = cljs.core.nth.call(null,vec__72246,(0),null);
var signal = cljs.core.nth.call(null,vec__72246,(1),null);
cljs.core.chunk_append.call(null,b__72219,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__72218,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849),signal_id], null));
});})(i__72218,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (i__72218,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__72216_$_iter__72247(s__72248){
return (new cljs.core.LazySeq(null,((function (i__72218,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__72248__$1 = s__72248;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__72248__$1);
if(temp__4425__auto____$1){
var s__72248__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__72248__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__72248__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__72250 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__72249 = (0);
while(true){
if((i__72249 < size__17522__auto____$1)){
var map__72255 = cljs.core._nth.call(null,c__17521__auto____$1,i__72249);
var map__72255__$1 = ((((!((map__72255 == null)))?((((map__72255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72255):map__72255);
var id = cljs.core.get.call(null,map__72255__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__72255__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__72255__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__72250,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__72249,i__72218,map__72255,map__72255__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__72250,s__72248__$2,temp__4425__auto____$1,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__72249,i__72218,map__72255,map__72255__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__72250,s__72248__$2,temp__4425__auto____$1,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__72249,i__72218,map__72255,map__72255__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__72250,s__72248__$2,temp__4425__auto____$1,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-log-action-result","on-log-action-result",1211018593),id], null));
});})(i__72249,i__72218,map__72255,map__72255__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__72250,s__72248__$2,temp__4425__auto____$1,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__72272 = (i__72249 + (1));
i__72249 = G__72272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__72250),frontend$devtools$_devtools_view_$_iter__72216_$_iter__72247.call(null,cljs.core.chunk_rest.call(null,s__72248__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__72250),null);
}
} else {
var map__72257 = cljs.core.first.call(null,s__72248__$2);
var map__72257__$1 = ((((!((map__72257 == null)))?((((map__72257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72257):map__72257);
var id = cljs.core.get.call(null,map__72257__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__72257__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__72257__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__72218,map__72257,map__72257__$1,id,enabled_QMARK_,action,s__72248__$2,temp__4425__auto____$1,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__72218,map__72257,map__72257__$1,id,enabled_QMARK_,action,s__72248__$2,temp__4425__auto____$1,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__72218,map__72257,map__72257__$1,id,enabled_QMARK_,action,s__72248__$2,temp__4425__auto____$1,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-log-action-result","on-log-action-result",1211018593),id], null));
});})(i__72218,map__72257,map__72257__$1,id,enabled_QMARK_,action,s__72248__$2,temp__4425__auto____$1,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__72216_$_iter__72247.call(null,cljs.core.rest.call(null,s__72248__$2)));
}
} else {
return null;
}
break;
}
});})(i__72218,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(i__72218,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__72218,iter__17523__auto__,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__72154_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__72154_SHARP_),signal_id);
});})(i__72218,iter__17523__auto__,vec__72246,signal_id,signal,c__17521__auto__,size__17522__auto__,b__72219,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__72273 = (i__72218 + (1));
i__72218 = G__72273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__72219),frontend$devtools$_devtools_view_$_iter__72216.call(null,cljs.core.chunk_rest.call(null,s__72217__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__72219),null);
}
} else {
var vec__72259 = cljs.core.first.call(null,s__72217__$2);
var signal_id = cljs.core.nth.call(null,vec__72259,(0),null);
var signal = cljs.core.nth.call(null,vec__72259,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-signal","on-toggle-signal",-331974849),signal_id], null));
});})(vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable all actions dispatched from this signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,signal)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null))], null),(function (){var iter__17523__auto__ = ((function (vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function frontend$devtools$_devtools_view_$_iter__72216_$_iter__72260(s__72261){
return (new cljs.core.LazySeq(null,((function (vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
var s__72261__$1 = s__72261;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__72261__$1);
if(temp__4425__auto____$1){
var s__72261__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__72261__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__72261__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__72263 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__72262 = (0);
while(true){
if((i__72262 < size__17522__auto__)){
var map__72268 = cljs.core._nth.call(null,c__17521__auto__,i__72262);
var map__72268__$1 = ((((!((map__72268 == null)))?((((map__72268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72268):map__72268);
var id = cljs.core.get.call(null,map__72268__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__72268__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__72268__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__72263,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__72262,map__72268,map__72268__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__72263,s__72261__$2,temp__4425__auto____$1,vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__72262,map__72268,map__72268__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__72263,s__72261__$2,temp__4425__auto____$1,vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__72262,map__72268,map__72268__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__72263,s__72261__$2,temp__4425__auto____$1,vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-log-action-result","on-log-action-result",1211018593),id], null));
});})(i__72262,map__72268,map__72268__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__72263,s__72261__$2,temp__4425__auto____$1,vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__72274 = (i__72262 + (1));
i__72262 = G__72274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__72263),frontend$devtools$_devtools_view_$_iter__72216_$_iter__72260.call(null,cljs.core.chunk_rest.call(null,s__72261__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__72263),null);
}
} else {
var map__72270 = cljs.core.first.call(null,s__72261__$2);
var map__72270__$1 = ((((!((map__72270 == null)))?((((map__72270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72270):map__72270);
var id = cljs.core.get.call(null,map__72270__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__72270__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__72270__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(60, 70, 80)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__72270,map__72270__$1,id,enabled_QMARK_,action,s__72261__$2,temp__4425__auto____$1,vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(map__72270,map__72270__$1,id,enabled_QMARK_,action,s__72261__$2,temp__4425__auto____$1,vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.pr_str,cljs.core.rest.call(null,action)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__72270,map__72270__$1,id,enabled_QMARK_,action,s__72261__$2,temp__4425__auto____$1,vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-log-action-result","on-log-action-result",1211018593),id], null));
});})(map__72270,map__72270__$1,id,enabled_QMARK_,action,s__72261__$2,temp__4425__auto____$1,vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,new cljs.core.Keyword(null,"title","title",636505583),"Print model state after this action"], null),"model"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__72216_$_iter__72260.call(null,cljs.core.rest.call(null,s__72261__$2)));
}
} else {
return null;
}
break;
}
});})(vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events){
return (function (p1__72154_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__72154_SHARP_),signal_id);
});})(iter__17523__auto__,vec__72259,signal_id,signal,s__72217__$2,temp__4425__auto__,map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,cljs.core.deref.call(null,action_events)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__72216.call(null,cljs.core.rest.call(null,s__72217__$2)));
}
} else {
return null;
}
break;
}
});})(map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
,null,null));
});})(map__72214,map__72214__$1,_view_model_,persist_QMARK_,initial_model,signal_events,action_events))
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

//# sourceMappingURL=devtools.js.map?rel=1452540795754