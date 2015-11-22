// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.devtools');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('reagent.core');
goog.require('cljs.core.match');
goog.require('com.rpl.specter');
/**
 * Creates a fresh dev-model instance using wrapped component model.
 */
frontend.devtools.init = (function frontend$devtools$init(component_model){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"component","component",1555936782),component_model,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),component_model,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),(0),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),(0)], null);
});
frontend.devtools._signal_event = (function frontend$devtools$_signal_event(id,signal){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,signal], null);
});
frontend.devtools._action_event = (function frontend$devtools$_action_event(signal_id,id,action){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781),signal_id,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"action","action",-811238024),action], null);
});
frontend.devtools._update_actions_STAR_ = (function frontend$devtools$_update_actions_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___30147 = arguments.length;
var i__17810__auto___30148 = (0);
while(true){
if((i__17810__auto___30148 < len__17809__auto___30147)){
args__17816__auto__.push((arguments[i__17810__auto___30148]));

var G__30149 = (i__17810__auto___30148 + (1));
i__17810__auto___30148 = G__30149;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),com.rpl.specter.ALL,pred], null),(function (p1__30142_SHARP_){
return cljs.core.apply.call(null,f,p1__30142_SHARP_,args);
}),model);
});

frontend.devtools._update_actions_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_actions_STAR_.cljs$lang$applyTo = (function (seq30143){
var G__30144 = cljs.core.first.call(null,seq30143);
var seq30143__$1 = cljs.core.next.call(null,seq30143);
var G__30145 = cljs.core.first.call(null,seq30143__$1);
var seq30143__$2 = cljs.core.next.call(null,seq30143__$1);
var G__30146 = cljs.core.first.call(null,seq30143__$2);
var seq30143__$3 = cljs.core.next.call(null,seq30143__$2);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30144,G__30145,G__30146,seq30143__$3);
});
frontend.devtools._update_action = (function frontend$devtools$_update_action(var_args){
var args__17816__auto__ = [];
var len__17809__auto___30155 = arguments.length;
var i__17810__auto___30156 = (0);
while(true){
if((i__17810__auto___30156 < len__17809__auto___30155)){
args__17816__auto__.push((arguments[i__17810__auto___30156]));

var G__30157 = (i__17810__auto___30156 + (1));
i__17810__auto___30156 = G__30157;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_actions_STAR_,model,(function (p1__30150_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30150_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action.cljs$lang$applyTo = (function (seq30151){
var G__30152 = cljs.core.first.call(null,seq30151);
var seq30151__$1 = cljs.core.next.call(null,seq30151);
var G__30153 = cljs.core.first.call(null,seq30151__$1);
var seq30151__$2 = cljs.core.next.call(null,seq30151__$1);
var G__30154 = cljs.core.first.call(null,seq30151__$2);
var seq30151__$3 = cljs.core.next.call(null,seq30151__$2);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic(G__30152,G__30153,G__30154,seq30151__$3);
});
frontend.devtools.new_control = (function frontend$devtools$new_control(component_control){
return (function frontend$devtools$new_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return frontend$devtools$new_control_$_control.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)], null),dispatch);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30200){if((e30200 instanceof Error)){
var e__21825__auto__ = e30200;
if((e__21825__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__30196 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__30196,new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169))){
var id = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453),id], null));

return dispatch.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389));
} else {
throw cljs.core.match.backtrack;

}
}catch (e30206){if((e30206 instanceof Error)){
var e__21825__auto____$1 = e30206;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$1;
}
} else {
throw e30206;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30201){if((e30201 instanceof Error)){
var e__21825__auto____$1 = e30201;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158))){
return dispatch.call(null,new cljs.core.Keyword(null,"sweep","sweep",-50871214));
} else {
throw cljs.core.match.backtrack;

}
}catch (e30202){if((e30202 instanceof Error)){
var e__21825__auto____$2 = e30202;
if((e__21825__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__30198 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__30198,new cljs.core.Keyword(null,"component","component",1555936782))){
var s = cljs.core.nth.call(null,signal,(1));
var vec__30205 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),s);
var signal_id = cljs.core.nth.call(null,vec__30205,(0),null);
var _ = cljs.core.nth.call(null,vec__30205,(1),null);
var signal_event = vec__30205;
component_control.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model),s,((function (vec__30205,signal_id,_,signal_event,s,signal_0__30198,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__){
return (function (p1__30158_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),signal_id,p1__30158_SHARP_], null));
});})(vec__30205,signal_id,_,signal_event,s,signal_0__30198,e__21825__auto____$2,e__21825__auto____$1,e__21825__auto__))
);

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135),signal_event], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e30204){if((e30204 instanceof Error)){
var e__21825__auto____$3 = e30204;
if((e__21825__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$3;
}
} else {
throw e30204;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30203){if((e30203 instanceof Error)){
var e__21825__auto____$3 = e30203;
if((e__21825__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__21825__auto____$3;
}
} else {
throw e30203;

}
}} else {
throw e__21825__auto____$2;
}
} else {
throw e30202;

}
}} else {
throw e__21825__auto____$1;
}
} else {
throw e30201;

}
}} else {
throw e__21825__auto__;
}
} else {
throw e30200;

}
}});
});
/**
 * Orphaned signal has no actions.
 */
frontend.devtools._orphaned_signal_QMARK_ = (function frontend$devtools$_orphaned_signal_QMARK_(model,p__30208){
var vec__30210 = p__30208;
var signal_id = cljs.core.nth.call(null,vec__30210,(0),null);
var _ = cljs.core.nth.call(null,vec__30210,(1),null);
var _signal_ = vec__30210;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__30210,signal_id,_,_signal_){
return (function (p1__30207_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__30207_SHARP_),signal_id);
});})(vec__30210,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(model)));
});
frontend.devtools.new_reconcile = (function frontend$devtools$new_reconcile(component_reconcile){
return (function frontend$devtools$new_reconcile_$_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__30268 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__30268,new cljs.core.Keyword(null,"record-signal-event","record-signal-event",-1077285135))){
var signal_event = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30283){if((e30283 instanceof Error)){
var e__21825__auto__ = e30283;
if((e__21825__auto__ === cljs.core.match.backtrack)){
try{var action_0__30268 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__30268,new cljs.core.Keyword(null,"toggle-action","toggle-action",1469987453))){
var id = cljs.core.nth.call(null,action,(1));
return frontend.devtools._update_action.call(null,model,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30284){if((e30284 instanceof Error)){
var e__21825__auto____$1 = e30284;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$1;
}
} else {
throw e30284;

}
}} else {
throw e__21825__auto__;
}
} else {
throw e30283;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30275){if((e30275 instanceof Error)){
var e__21825__auto__ = e30275;
if((e__21825__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"replay","replay",-681122389))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.reduce.call(null,component_reconcile,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model),cljs.core.map.call(null,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(model)))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e30276){if((e30276 instanceof Error)){
var e__21825__auto____$1 = e30276;
if((e__21825__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"sweep","sweep",-50871214))){
var m = model;
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"actions","actions",-812656882),((function (m,e__21825__auto____$1,e__21825__auto__){
return (function (p1__30211_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__30211_SHARP_);
});})(m,e__21825__auto____$1,e__21825__auto__))
);
var m__$2 = cljs.core.update.call(null,m__$1,new cljs.core.Keyword(null,"signals","signals",1732137021),((function (m,m__$1,e__21825__auto____$1,e__21825__auto__){
return (function (p1__30212_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,m__$1),p1__30212_SHARP_);
});})(m,m__$1,e__21825__auto____$1,e__21825__auto__))
);
return m__$2;
} else {
throw cljs.core.match.backtrack;

}
}catch (e30277){if((e30277 instanceof Error)){
var e__21825__auto____$2 = e30277;
if((e__21825__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 3))){
try{var action_0__30270 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__30270,new cljs.core.Keyword(null,"component","component",1555936782))){
var signal_id = cljs.core.nth.call(null,action,(1));
var a = cljs.core.nth.call(null,action,(2));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,signal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30282){if((e30282 instanceof Error)){
var e__21825__auto____$3 = e30282;
if((e__21825__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$3;
}
} else {
throw e30282;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30278){if((e30278 instanceof Error)){
var e__21825__auto____$3 = e30278;
if((e__21825__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__30273 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__30273,new cljs.core.Keyword(null,"component","component",1555936782))){
var a = cljs.core.nth.call(null,action,(1));
var vec__30281 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var singal_id = cljs.core.nth.call(null,vec__30281,(0),null);
var _ = cljs.core.nth.call(null,vec__30281,(1),null);
var unknown_signal_event = vec__30281;
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"component","component",1555936782),component_reconcile,a),new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null)),new cljs.core.Keyword(null,"next-signal-id","next-signal-id",757404166),cljs.core.inc),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._action_event.call(null,singal_id,new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492).cljs$core$IFn$_invoke$arity$1(model),a)], null)),new cljs.core.Keyword(null,"next-action-id","next-action-id",1469137492),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30280){if((e30280 instanceof Error)){
var e__21825__auto____$4 = e30280;
if((e__21825__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto____$4;
}
} else {
throw e30280;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30279){if((e30279 instanceof Error)){
var e__21825__auto____$4 = e30279;
if((e__21825__auto____$4 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__21825__auto____$4;
}
} else {
throw e30279;

}
}} else {
throw e__21825__auto____$3;
}
} else {
throw e30278;

}
}} else {
throw e__21825__auto____$2;
}
} else {
throw e30277;

}
}} else {
throw e__21825__auto____$1;
}
} else {
throw e30276;

}
}} else {
throw e__21825__auto__;
}
} else {
throw e30275;

}
}});
});
frontend.devtools.new_view_model = (function frontend$devtools$new_view_model(component_view_model){
return (function frontend$devtools$new_view_model_$_view_model(model){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058),component_view_model.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(model)));
});
});
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(model,dispatch){
return (function (model__$1,dispatch__$1){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#4F5A65"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),"Removes disabled actions and \"orphaned\" signals from history",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch__$1.call(null,new cljs.core.Keyword(null,"on-sweep","on-sweep",1164628158));
})], null),"Sweep"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = (function frontend$devtools$_devtools_view_$_iter__30342(s__30343){
return (new cljs.core.LazySeq(null,(function (){
var s__30343__$1 = s__30343;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30343__$1);
if(temp__4425__auto__){
var s__30343__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30343__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__30343__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__30345 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__30344 = (0);
while(true){
if((i__30344 < size__17522__auto__)){
var vec__30372 = cljs.core._nth.call(null,c__17521__auto__,i__30344);
var signal_id = cljs.core.nth.call(null,vec__30372,(0),null);
var signal = cljs.core.nth.call(null,vec__30372,(1),null);
cljs.core.chunk_append.call(null,b__30345,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (i__30344,vec__30372,signal_id,signal,c__17521__auto__,size__17522__auto__,b__30345,s__30343__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__30342_$_iter__30373(s__30374){
return (new cljs.core.LazySeq(null,((function (i__30344,vec__30372,signal_id,signal,c__17521__auto__,size__17522__auto__,b__30345,s__30343__$2,temp__4425__auto__){
return (function (){
var s__30374__$1 = s__30374;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__30374__$1);
if(temp__4425__auto____$1){
var s__30374__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30374__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__30374__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__30376 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__30375 = (0);
while(true){
if((i__30375 < size__17522__auto____$1)){
var map__30381 = cljs.core._nth.call(null,c__17521__auto____$1,i__30375);
var map__30381__$1 = ((((!((map__30381 == null)))?((((map__30381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30381):map__30381);
var id = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__30376,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30375,i__30344,map__30381,map__30381__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__30376,s__30374__$2,temp__4425__auto____$1,vec__30372,signal_id,signal,c__17521__auto__,size__17522__auto__,b__30345,s__30343__$2,temp__4425__auto__){
return (function (){
return dispatch__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__30375,i__30344,map__30381,map__30381__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__30376,s__30374__$2,temp__4425__auto____$1,vec__30372,signal_id,signal,c__17521__auto__,size__17522__auto__,b__30345,s__30343__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__30398 = (i__30375 + (1));
i__30375 = G__30398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30376),frontend$devtools$_devtools_view_$_iter__30342_$_iter__30373.call(null,cljs.core.chunk_rest.call(null,s__30374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30376),null);
}
} else {
var map__30383 = cljs.core.first.call(null,s__30374__$2);
var map__30383__$1 = ((((!((map__30383 == null)))?((((map__30383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30383):map__30383);
var id = cljs.core.get.call(null,map__30383__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__30383__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__30383__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30344,map__30383,map__30383__$1,id,enabled_QMARK_,action,s__30374__$2,temp__4425__auto____$1,vec__30372,signal_id,signal,c__17521__auto__,size__17522__auto__,b__30345,s__30343__$2,temp__4425__auto__){
return (function (){
return dispatch__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__30344,map__30383,map__30383__$1,id,enabled_QMARK_,action,s__30374__$2,temp__4425__auto____$1,vec__30372,signal_id,signal,c__17521__auto__,size__17522__auto__,b__30345,s__30343__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__30342_$_iter__30373.call(null,cljs.core.rest.call(null,s__30374__$2)));
}
} else {
return null;
}
break;
}
});})(i__30344,vec__30372,signal_id,signal,c__17521__auto__,size__17522__auto__,b__30345,s__30343__$2,temp__4425__auto__))
,null,null));
});})(i__30344,vec__30372,signal_id,signal,c__17521__auto__,size__17522__auto__,b__30345,s__30343__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__30344,iter__17523__auto__,vec__30372,signal_id,signal,c__17521__auto__,size__17522__auto__,b__30345,s__30343__$2,temp__4425__auto__){
return (function (p1__30285_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__30285_SHARP_),signal_id);
});})(i__30344,iter__17523__auto__,vec__30372,signal_id,signal,c__17521__auto__,size__17522__auto__,b__30345,s__30343__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(model__$1)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__30399 = (i__30344 + (1));
i__30344 = G__30399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30345),frontend$devtools$_devtools_view_$_iter__30342.call(null,cljs.core.chunk_rest.call(null,s__30343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30345),null);
}
} else {
var vec__30385 = cljs.core.first.call(null,s__30343__$2);
var signal_id = cljs.core.nth.call(null,vec__30385,(0),null);
var signal = cljs.core.nth.call(null,vec__30385,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (vec__30385,signal_id,signal,s__30343__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__30342_$_iter__30386(s__30387){
return (new cljs.core.LazySeq(null,((function (vec__30385,signal_id,signal,s__30343__$2,temp__4425__auto__){
return (function (){
var s__30387__$1 = s__30387;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__30387__$1);
if(temp__4425__auto____$1){
var s__30387__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30387__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__30387__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__30389 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__30388 = (0);
while(true){
if((i__30388 < size__17522__auto__)){
var map__30394 = cljs.core._nth.call(null,c__17521__auto__,i__30388);
var map__30394__$1 = ((((!((map__30394 == null)))?((((map__30394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30394):map__30394);
var id = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__30389,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30388,map__30394,map__30394__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__30389,s__30387__$2,temp__4425__auto____$1,vec__30385,signal_id,signal,s__30343__$2,temp__4425__auto__){
return (function (){
return dispatch__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(i__30388,map__30394,map__30394__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__30389,s__30387__$2,temp__4425__auto____$1,vec__30385,signal_id,signal,s__30343__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__30400 = (i__30388 + (1));
i__30388 = G__30400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30389),frontend$devtools$_devtools_view_$_iter__30342_$_iter__30386.call(null,cljs.core.chunk_rest.call(null,s__30387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30389),null);
}
} else {
var map__30396 = cljs.core.first.call(null,s__30387__$2);
var map__30396__$1 = ((((!((map__30396 == null)))?((((map__30396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30396):map__30396);
var id = cljs.core.get.call(null,map__30396__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__30396__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__30396__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__30396,map__30396__$1,id,enabled_QMARK_,action,s__30387__$2,temp__4425__auto____$1,vec__30385,signal_id,signal,s__30343__$2,temp__4425__auto__){
return (function (){
return dispatch__$1.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-action","on-toggle-action",1937193169),id], null));
});})(map__30396,map__30396__$1,id,enabled_QMARK_,action,s__30387__$2,temp__4425__auto____$1,vec__30385,signal_id,signal,s__30343__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__30342_$_iter__30386.call(null,cljs.core.rest.call(null,s__30387__$2)));
}
} else {
return null;
}
break;
}
});})(vec__30385,signal_id,signal,s__30343__$2,temp__4425__auto__))
,null,null));
});})(vec__30385,signal_id,signal,s__30343__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__30385,signal_id,signal,s__30343__$2,temp__4425__auto__){
return (function (p1__30285_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signal-id","signal-id",-752993781).cljs$core$IFn$_invoke$arity$1(p1__30285_SHARP_),signal_id);
});})(iter__17523__auto__,vec__30385,signal_id,signal,s__30343__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(model__$1)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__30342.call(null,cljs.core.rest.call(null,s__30343__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"signals","signals",1732137021).cljs$core$IFn$_invoke$arity$1(model__$1)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Initial model:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(model__$1))], null)], null);
});
});
frontend.devtools.new_view = (function frontend$devtools$new_view(component_view){
return (function frontend$devtools$new_view_$_view(model,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_view,new cljs.core.Keyword(null,"component-view-model","component-view-model",-1643578058).cljs$core$IFn$_invoke$arity$1(model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"component","component",1555936782))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-2px 0 7px 0 rgba(0, 0, 0, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._devtools_view,model,dispatch], null)], null)], null);
});
});
/**
 * Given dev-model initial value and the component's parts creates a devtools wrapper for it.
 *   Returns the same structure as ui/connect.
 */
frontend.devtools.connect = (function frontend$devtools$connect(dev_model,component_view_model,component_view,component_control,component_reconcile){
return frontend.ui.connect.call(null,dev_model,frontend.devtools.new_view_model.call(null,component_view_model),frontend.devtools.new_view.call(null,component_view),frontend.ui.wrap_log_signals.call(null,frontend.devtools.new_control.call(null,component_control)),frontend.ui.wrap_log_actions.call(null,frontend.devtools.new_reconcile.call(null,component_reconcile)));
});

//# sourceMappingURL=devtools.js.map?rel=1448218677519