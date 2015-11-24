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
frontend.devtools.init = (function frontend$devtools$init(p__26689){
var vec__26691 = p__26689;
var component_model = cljs.core.nth.call(null,vec__26691,(0),null);
var component_signal = cljs.core.nth.call(null,vec__26691,(1),null);
var _component_initial_ = vec__26691;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"component","component",1555936782),component_model,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),component_model,new cljs.core.Keyword(null,"initial-signal","initial-signal",1264328313),component_signal,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),(0),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),(0),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),true], null),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)], null);
});
frontend.devtools._signal_event = (function frontend$devtools$_signal_event(id,signal){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,signal], null);
});
frontend.devtools._action_event = (function frontend$devtools$_action_event(signal_id,id,action){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781),signal_id,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"action","action",-811238024),action], null);
});
frontend.devtools._update_actions_STAR_ = (function frontend$devtools$_update_actions_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___26697 = arguments.length;
var i__17810__auto___26698 = (0);
while(true){
if((i__17810__auto___26698 < len__17809__auto___26697)){
args__17816__auto__.push((arguments[i__17810__auto___26698]));

var G__26699 = (i__17810__auto___26698 + (1));
i__17810__auto___26698 = G__26699;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),com.rpl.specter.ALL,pred], null),(function (p1__26692_SHARP_){
return cljs.core.apply.call(null,f,p1__26692_SHARP_,args);
}),model);
});

frontend.devtools._update_actions_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_actions_STAR_.cljs$lang$applyTo = (function (seq26693){
var G__26694 = cljs.core.first.call(null,seq26693);
var seq26693__$1 = cljs.core.next.call(null,seq26693);
var G__26695 = cljs.core.first.call(null,seq26693__$1);
var seq26693__$2 = cljs.core.next.call(null,seq26693__$1);
var G__26696 = cljs.core.first.call(null,seq26693__$2);
var seq26693__$3 = cljs.core.next.call(null,seq26693__$2);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26694,G__26695,G__26696,seq26693__$3);
});
frontend.devtools._update_action = (function frontend$devtools$_update_action(var_args){
var args__17816__auto__ = [];
var len__17809__auto___26705 = arguments.length;
var i__17810__auto___26706 = (0);
while(true){
if((i__17810__auto___26706 < len__17809__auto___26705)){
args__17816__auto__.push((arguments[i__17810__auto___26706]));

var G__26707 = (i__17810__auto___26706 + (1));
i__17810__auto___26706 = G__26707;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_actions_STAR_,model,(function (p1__26700_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26700_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action.cljs$lang$applyTo = (function (seq26701){
var G__26702 = cljs.core.first.call(null,seq26701);
var seq26701__$1 = cljs.core.next.call(null,seq26701);
var G__26703 = cljs.core.first.call(null,seq26701__$1);
var seq26701__$2 = cljs.core.next.call(null,seq26701__$1);
var G__26704 = cljs.core.first.call(null,seq26701__$2);
var seq26701__$3 = cljs.core.next.call(null,seq26701__$2);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic(G__26702,G__26703,G__26704,seq26701__$3);
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
}catch (e26756){if((e26756 instanceof Error)){
var e__18365__auto__ = e26756;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__26752 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__26752,new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453),id], null));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26764){if((e26764 instanceof Error)){
var e__18365__auto____$1 = e26764;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$1;
}
} else {
throw e26764;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26757){if((e26757 instanceof Error)){
var e__18365__auto____$1 = e26757;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-toggle-persist","on-toggle-persist",264423174))){
return dispatch.call(null,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26758){if((e26758 instanceof Error)){
var e__18365__auto____$2 = e26758;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158))){
return dispatch.call(null,new cljs.core.Keyword(null,"sweep","sweep",-50871214));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26759){if((e26759 instanceof Error)){
var e__18365__auto____$3 = e26759;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829))){
dispatch.call(null,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26760){if((e26760 instanceof Error)){
var e__18365__auto____$4 = e26760;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__26754 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__26754,new cljs.core.Keyword(null,"component","component",1555936782))){
var s = cljs.core.nth.call(null,signal,(1));
var vec__26763 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),s);
var signal_id = cljs.core.nth.call(null,vec__26763,(0),null);
var _ = cljs.core.nth.call(null,vec__26763,(1),null);
var signal_event = vec__26763;
component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model),s,((function (vec__26763,signal_id,_,signal_event,s,signal_0__26754,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__26708_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),signal_id,p1__26708_SHARP_], null));
});})(vec__26763,signal_id,_,signal_event,s,signal_0__26754,e__18365__auto____$4,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135),signal_event], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26762){if((e26762 instanceof Error)){
var e__18365__auto____$5 = e26762;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$5;
}
} else {
throw e26762;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26761){if((e26761 instanceof Error)){
var e__18365__auto____$5 = e26761;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__18365__auto____$5;
}
} else {
throw e26761;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e26760;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e26759;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e26758;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e26757;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e26756;

}
}});
});
/**
 * Orphaned signal has no actions.
 */
frontend.devtools._orphaned_signal_QMARK_ = (function frontend$devtools$_orphaned_signal_QMARK_(model,p__26766){
var vec__26768 = p__26766;
var signal_id = cljs.core.nth.call(null,vec__26768,(0),null);
var _ = cljs.core.nth.call(null,vec__26768,(1),null);
var _signal_ = vec__26768;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__26768,signal_id,_,_signal_){
return (function (p1__26765_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__26765_SHARP_),signal_id);
});})(vec__26768,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools.new_reconcile = (function frontend$devtools$new_reconcile(component_reconcile){
return (function frontend$devtools$new_reconcile_$_reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"clear-history","clear-history",-65593289))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.List.EMPTY);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26839){if((e26839 instanceof Error)){
var e__18365__auto__ = e26839;
if((e__18365__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__26832 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__26832,new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26849){if((e26849 instanceof Error)){
var e__18365__auto____$1 = e26849;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__26832 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__26832,new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.devtools._update_action.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26850){if((e26850 instanceof Error)){
var e__18365__auto____$2 = e26850;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$2;
}
} else {
throw e26850;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e26849;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26840){if((e26840 instanceof Error)){
var e__18365__auto____$1 = e26840;
if((e__18365__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"replay","replay",-681122389))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.reduce.call(null,component_reconcile,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model),cljs.core.map.call(null,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(model)))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e26841){if((e26841 instanceof Error)){
var e__18365__auto____$2 = e26841;
if((e__18365__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"toggle-persist","toggle-persist",1537042042))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26842){if((e26842 instanceof Error)){
var e__18365__auto____$3 = e26842;
if((e__18365__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sweep","sweep",-50871214))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"actions","actions",-812656882),((function (m,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__26769_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__26769_SHARP_);
});})(m,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signals","signals",1732137021),((function (m,m__$1,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__){
return (function (p1__26770_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__26770_SHARP_);
});})(m,m__$1,e__18365__auto____$3,e__18365__auto____$2,e__18365__auto____$1,e__18365__auto__))
);
return m__$2;
} else {
throw cljs.core.match.backtrack;

}
}catch (e26843){if((e26843 instanceof Error)){
var e__18365__auto____$4 = e26843;
if((e__18365__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__26834 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__26834,new cljs.core.Keyword(null,"component","component",1555936782))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26848){if((e26848 instanceof Error)){
var e__18365__auto____$5 = e26848;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$5;
}
} else {
throw e26848;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26844){if((e26844 instanceof Error)){
var e__18365__auto____$5 = e26844;
if((e__18365__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__26837 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__26837,new cljs.core.Keyword(null,"component","component",1555936782))){
var a = cljs.core.nth.call(null,action,(1));
var vec__26847 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var singal_id = cljs.core.nth.call(null,vec__26847,(0),null);
var _ = cljs.core.nth.call(null,vec__26847,(1),null);
var unknown_signal_event = vec__26847;
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,singal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26846){if((e26846 instanceof Error)){
var e__18365__auto____$6 = e26846;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto____$6;
}
} else {
throw e26846;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26845){if((e26845 instanceof Error)){
var e__18365__auto____$6 = e26845;
if((e__18365__auto____$6 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__18365__auto____$6;
}
} else {
throw e26845;

}
}} else {
throw e__18365__auto____$5;
}
} else {
throw e26844;

}
}} else {
throw e__18365__auto____$4;
}
} else {
throw e26843;

}
}} else {
throw e__18365__auto____$3;
}
} else {
throw e26842;

}
}} else {
throw e__18365__auto____$2;
}
} else {
throw e26841;

}
}} else {
throw e__18365__auto____$1;
}
} else {
throw e26840;

}
}} else {
throw e__18365__auto__;
}
} else {
throw e26839;

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
})], null),"Reset"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = (function frontend$devtools$_devtools_view_$_iter__26908(s__26909){
return (new cljs.core.LazySeq(null,(function (){
var s__26909__$1 = s__26909;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26909__$1);
if(temp__4425__auto__){
var s__26909__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26909__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__26909__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__26911 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__26910 = (0);
while(true){
if((i__26910 < size__17522__auto__)){
var vec__26938 = cljs.core._nth.call(null,c__17521__auto__,i__26910);
var signal_id = cljs.core.nth.call(null,vec__26938,(0),null);
var signal = cljs.core.nth.call(null,vec__26938,(1),null);
cljs.core.chunk_append.call(null,b__26911,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (i__26910,vec__26938,signal_id,signal,c__17521__auto__,size__17522__auto__,b__26911,s__26909__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__26908_$_iter__26939(s__26940){
return (new cljs.core.LazySeq(null,((function (i__26910,vec__26938,signal_id,signal,c__17521__auto__,size__17522__auto__,b__26911,s__26909__$2,temp__4425__auto__){
return (function (){
var s__26940__$1 = s__26940;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__26940__$1);
if(temp__4425__auto____$1){
var s__26940__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26940__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__26940__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__26942 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__26941 = (0);
while(true){
if((i__26941 < size__17522__auto____$1)){
var map__26947 = cljs.core._nth.call(null,c__17521__auto____$1,i__26941);
var map__26947__$1 = ((((!((map__26947 == null)))?((((map__26947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26947):map__26947);
var id = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__26942,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26941,i__26910,map__26947,map__26947__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__26942,s__26940__$2,temp__4425__auto____$1,vec__26938,signal_id,signal,c__17521__auto__,size__17522__auto__,b__26911,s__26909__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__26941,i__26910,map__26947,map__26947__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__26942,s__26940__$2,temp__4425__auto____$1,vec__26938,signal_id,signal,c__17521__auto__,size__17522__auto__,b__26911,s__26909__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__26964 = (i__26941 + (1));
i__26941 = G__26964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26942),frontend$devtools$_devtools_view_$_iter__26908_$_iter__26939.call(null,cljs.core.chunk_rest.call(null,s__26940__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26942),null);
}
} else {
var map__26949 = cljs.core.first.call(null,s__26940__$2);
var map__26949__$1 = ((((!((map__26949 == null)))?((((map__26949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26949):map__26949);
var id = cljs.core.get.call(null,map__26949__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__26949__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__26949__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26910,map__26949,map__26949__$1,id,enabled_QMARK_,action,s__26940__$2,temp__4425__auto____$1,vec__26938,signal_id,signal,c__17521__auto__,size__17522__auto__,b__26911,s__26909__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__26910,map__26949,map__26949__$1,id,enabled_QMARK_,action,s__26940__$2,temp__4425__auto____$1,vec__26938,signal_id,signal,c__17521__auto__,size__17522__auto__,b__26911,s__26909__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__26908_$_iter__26939.call(null,cljs.core.rest.call(null,s__26940__$2)));
}
} else {
return null;
}
break;
}
});})(i__26910,vec__26938,signal_id,signal,c__17521__auto__,size__17522__auto__,b__26911,s__26909__$2,temp__4425__auto__))
,null,null));
});})(i__26910,vec__26938,signal_id,signal,c__17521__auto__,size__17522__auto__,b__26911,s__26909__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__26910,iter__17523__auto__,vec__26938,signal_id,signal,c__17521__auto__,size__17522__auto__,b__26911,s__26909__$2,temp__4425__auto__){
return (function (p1__26851_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__26851_SHARP_),signal_id);
});})(i__26910,iter__17523__auto__,vec__26938,signal_id,signal,c__17521__auto__,size__17522__auto__,b__26911,s__26909__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(model)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__26965 = (i__26910 + (1));
i__26910 = G__26965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26911),frontend$devtools$_devtools_view_$_iter__26908.call(null,cljs.core.chunk_rest.call(null,s__26909__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26911),null);
}
} else {
var vec__26951 = cljs.core.first.call(null,s__26909__$2);
var signal_id = cljs.core.nth.call(null,vec__26951,(0),null);
var signal = cljs.core.nth.call(null,vec__26951,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (vec__26951,signal_id,signal,s__26909__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__26908_$_iter__26952(s__26953){
return (new cljs.core.LazySeq(null,((function (vec__26951,signal_id,signal,s__26909__$2,temp__4425__auto__){
return (function (){
var s__26953__$1 = s__26953;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__26953__$1);
if(temp__4425__auto____$1){
var s__26953__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26953__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__26953__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__26955 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__26954 = (0);
while(true){
if((i__26954 < size__17522__auto__)){
var map__26960 = cljs.core._nth.call(null,c__17521__auto__,i__26954);
var map__26960__$1 = ((((!((map__26960 == null)))?((((map__26960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26960):map__26960);
var id = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__26955,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26954,map__26960,map__26960__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__26955,s__26953__$2,temp__4425__auto____$1,vec__26951,signal_id,signal,s__26909__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__26954,map__26960,map__26960__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__26955,s__26953__$2,temp__4425__auto____$1,vec__26951,signal_id,signal,s__26909__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__26966 = (i__26954 + (1));
i__26954 = G__26966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26955),frontend$devtools$_devtools_view_$_iter__26908_$_iter__26952.call(null,cljs.core.chunk_rest.call(null,s__26953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26955),null);
}
} else {
var map__26962 = cljs.core.first.call(null,s__26953__$2);
var map__26962__$1 = ((((!((map__26962 == null)))?((((map__26962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26962):map__26962);
var id = cljs.core.get.call(null,map__26962__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__26962__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__26962__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26962,map__26962__$1,id,enabled_QMARK_,action,s__26953__$2,temp__4425__auto____$1,vec__26951,signal_id,signal,s__26909__$2,temp__4425__auto__){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(map__26962,map__26962__$1,id,enabled_QMARK_,action,s__26953__$2,temp__4425__auto____$1,vec__26951,signal_id,signal,s__26909__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__26908_$_iter__26952.call(null,cljs.core.rest.call(null,s__26953__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26951,signal_id,signal,s__26909__$2,temp__4425__auto__))
,null,null));
});})(vec__26951,signal_id,signal,s__26909__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__26951,signal_id,signal,s__26909__$2,temp__4425__auto__){
return (function (p1__26851_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__26851_SHARP_),signal_id);
});})(iter__17523__auto__,vec__26951,signal_id,signal,s__26909__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(model)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__26908.call(null,cljs.core.rest.call(null,s__26909__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"signals","signals",1732137021).cljs$core$IFn$_invoke$arity$1(model)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Initial model:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model))], null)], null);
});
frontend.devtools.new_view = (function frontend$devtools$new_view(component_view){
return (function frontend$devtools$new_view_$_view(model,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_view,new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058).cljs$core$IFn$_invoke$arity$1(model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"component","component",1555936782))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-2px 0 7px 0 rgba(0, 0, 0, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._devtools_view,model,dispatch], null)], null)], null);
});
});
/**
 * Given component's parts creates a devtools wrapper for it. Returns the same structure as ui/connect.
 */
frontend.devtools.connect = (function frontend$devtools$connect(component_initial,component_view_model,component_view,component_control,component_reconcile,storage){
var non_persisted_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),null,new cljs.core.Keyword(null,"initial-signal","initial-signal",1264328313),null], null), null);
var vec__26968 = frontend.devtools.init.call(null,component_initial);
var _ = cljs.core.nth.call(null,vec__26968,(0),null);
var initial_signal = cljs.core.nth.call(null,vec__26968,(1),null);
var initial = vec__26968;
return frontend.ui.connect.call(null,initial,frontend.devtools.new_view_model.call(null,component_view_model),frontend.devtools.new_view.call(null,component_view),frontend.ui.wrap_log_signals.call(null,frontend.persistence_middleware.wrap_control.call(null,frontend.devtools.new_control.call(null,component_control),initial_signal,storage,new cljs.core.Keyword(null,"devtools","devtools",-1870878518),non_persisted_keys)),frontend.ui.wrap_log_actions.call(null,frontend.persistence_middleware.wrap_reconcile.call(null,frontend.devtools.new_reconcile.call(null,component_reconcile),storage,new cljs.core.Keyword(null,"devtools","devtools",-1870878518),non_persisted_keys)));
});

//# sourceMappingURL=devtools.js.map?rel=1448343226206