// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.devtools');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.pprint');
goog.require('cljs.core.match');
goog.require('com.rpl.specter');
/**
 * Creates a fresh dev-model instance.
 */
frontend.devtools.init = (function frontend$devtools$init(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601),null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),null,new cljs.core.Keyword(null,"initial-model-saved?","initial-model-saved?",402874199),false,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.List.EMPTY], null);
});
frontend.devtools._signal_event = (function frontend$devtools$_signal_event(signal){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.random_uuid.call(null),signal], null);
});
frontend.devtools._action_event = (function frontend$devtools$_action_event(source_signal_id,action){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780),source_signal_id,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"action","action",-811238024),action], null);
});
frontend.devtools._is_action_event_QMARK_ = (function frontend$devtools$_is_action_event_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,x)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780),null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"action","action",-811238024),null], null), null)));
});
/**
 * model must be immutable.
 */
frontend.devtools._update_actions_STAR_ = (function frontend$devtools$_update_actions_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___33939 = arguments.length;
var i__17810__auto___33940 = (0);
while(true){
if((i__17810__auto___33940 < len__17809__auto___33939)){
args__17816__auto__.push((arguments[i__17810__auto___33940]));

var G__33941 = (i__17810__auto___33940 + (1));
i__17810__auto___33940 = G__33941;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),com.rpl.specter.ALL,pred], null),(function (p1__33934_SHARP_){
return cljs.core.apply.call(null,f,p1__33934_SHARP_,args);
}),model);
});

frontend.devtools._update_actions_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_actions_STAR_.cljs$lang$applyTo = (function (seq33935){
var G__33936 = cljs.core.first.call(null,seq33935);
var seq33935__$1 = cljs.core.next.call(null,seq33935);
var G__33937 = cljs.core.first.call(null,seq33935__$1);
var seq33935__$2 = cljs.core.next.call(null,seq33935__$1);
var G__33938 = cljs.core.first.call(null,seq33935__$2);
var seq33935__$3 = cljs.core.next.call(null,seq33935__$2);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33936,G__33937,G__33938,seq33935__$3);
});
/**
 * model must be immutable.
 */
frontend.devtools._update_action = (function frontend$devtools$_update_action(var_args){
var args__17816__auto__ = [];
var len__17809__auto___33947 = arguments.length;
var i__17810__auto___33948 = (0);
while(true){
if((i__17810__auto___33948 < len__17809__auto___33947)){
args__17816__auto__.push((arguments[i__17810__auto___33948]));

var G__33949 = (i__17810__auto___33948 + (1));
i__17810__auto___33948 = G__33949;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_actions_STAR_,model,(function (p1__33942_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33942_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action.cljs$lang$applyTo = (function (seq33943){
var G__33944 = cljs.core.first.call(null,seq33943);
var seq33943__$1 = cljs.core.next.call(null,seq33943);
var G__33945 = cljs.core.first.call(null,seq33943__$1);
var seq33943__$2 = cljs.core.next.call(null,seq33943__$1);
var G__33946 = cljs.core.first.call(null,seq33943__$2);
var seq33943__$3 = cljs.core.next.call(null,seq33943__$2);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic(G__33944,G__33945,G__33946,seq33943__$3);
});
/**
 * dev-model must be a ratom. Sends special devtools action understood by wrapped reconciler.
 */
frontend.devtools._reset_model_to_initial_state = (function frontend$devtools$_reset_model_to_initial_state(dev_model){
return new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)).call(null,new cljs.core.Keyword(null,"-reset-model","-reset-model",-1424578089));
});
/**
 * dev-model must be a ratom. Replays all the enabled actions from the initial model.
 */
frontend.devtools._replay = (function frontend$devtools$_replay(dev_model){
frontend.devtools._reset_model_to_initial_state.call(null,dev_model);

var actions = new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model));
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.assoc,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.List.EMPTY);

var seq__33954 = cljs.core.seq.call(null,actions);
var chunk__33955 = null;
var count__33956 = (0);
var i__33957 = (0);
while(true){
if((i__33957 < count__33956)){
var action = cljs.core._nth.call(null,chunk__33955,i__33957);
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(action))){
new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)).call(null,action);
} else {
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
}

var G__33958 = seq__33954;
var G__33959 = chunk__33955;
var G__33960 = count__33956;
var G__33961 = (i__33957 + (1));
seq__33954 = G__33958;
chunk__33955 = G__33959;
count__33956 = G__33960;
i__33957 = G__33961;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33954);
if(temp__4425__auto__){
var seq__33954__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33954__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__33954__$1);
var G__33962 = cljs.core.chunk_rest.call(null,seq__33954__$1);
var G__33963 = c__17554__auto__;
var G__33964 = cljs.core.count.call(null,c__17554__auto__);
var G__33965 = (0);
seq__33954 = G__33962;
chunk__33955 = G__33963;
count__33956 = G__33964;
i__33957 = G__33965;
continue;
} else {
var action = cljs.core.first.call(null,seq__33954__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(action))){
new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)).call(null,action);
} else {
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
}

var G__33966 = cljs.core.next.call(null,seq__33954__$1);
var G__33967 = null;
var G__33968 = (0);
var G__33969 = (0);
seq__33954 = G__33966;
chunk__33955 = G__33967;
count__33956 = G__33968;
i__33957 = G__33969;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * dev-model is a ratom.
 */
frontend.devtools._toggle_action = (function frontend$devtools$_toggle_action(dev_model,id){
cljs.core.swap_BANG_.call(null,dev_model,frontend.devtools._update_action,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);

return frontend.devtools._replay.call(null,dev_model);
});
frontend.devtools._orphaned_signal_QMARK_ = (function frontend$devtools$_orphaned_signal_QMARK_(dev_model,p__33971){
var vec__33973 = p__33971;
var signal_id = cljs.core.nth.call(null,vec__33973,(0),null);
var _ = cljs.core.nth.call(null,vec__33973,(1),null);
var _signal_ = vec__33973;
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (vec__33973,signal_id,_,_signal_){
return (function (p1__33970_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780).cljs$core$IFn$_invoke$arity$1(p1__33970_SHARP_),signal_id);
});})(vec__33973,signal_id,_,_signal_))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
});
frontend.devtools._sweep = (function frontend$devtools$_sweep(dev_model){
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),(function (p1__33974_SHARP_){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),p1__33974_SHARP_);
}));

return cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"signals","signals",1732137021),(function (p1__33975_SHARP_){
return cljs.core.remove.call(null,cljs.core.partial.call(null,frontend.devtools._orphaned_signal_QMARK_,dev_model),p1__33975_SHARP_);
}));
});
/**
 * dev-model must be a ratom.
 */
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(dev_model){
return (function (_dev_model_){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#4F5A65"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 3px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)"], null),new cljs.core.Keyword(null,"title","title",636505583),"Removes disabled actions and \"orphaned\" signals from history",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.devtools._sweep.call(null,dev_model);
})], null),"Sweep"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = (function frontend$devtools$_devtools_view_$_iter__34033(s__34034){
return (new cljs.core.LazySeq(null,(function (){
var s__34034__$1 = s__34034;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34034__$1);
if(temp__4425__auto__){
var s__34034__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34034__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__34034__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__34036 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__34035 = (0);
while(true){
if((i__34035 < size__17522__auto__)){
var vec__34063 = cljs.core._nth.call(null,c__17521__auto__,i__34035);
var signal_id = cljs.core.nth.call(null,vec__34063,(0),null);
var signal = cljs.core.nth.call(null,vec__34063,(1),null);
cljs.core.chunk_append.call(null,b__34036,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (i__34035,vec__34063,signal_id,signal,c__17521__auto__,size__17522__auto__,b__34036,s__34034__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__34033_$_iter__34064(s__34065){
return (new cljs.core.LazySeq(null,((function (i__34035,vec__34063,signal_id,signal,c__17521__auto__,size__17522__auto__,b__34036,s__34034__$2,temp__4425__auto__){
return (function (){
var s__34065__$1 = s__34065;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__34065__$1);
if(temp__4425__auto____$1){
var s__34065__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34065__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__34065__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__34067 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__34066 = (0);
while(true){
if((i__34066 < size__17522__auto____$1)){
var map__34072 = cljs.core._nth.call(null,c__17521__auto____$1,i__34066);
var map__34072__$1 = ((((!((map__34072 == null)))?((((map__34072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34072):map__34072);
var id = cljs.core.get.call(null,map__34072__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__34072__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__34072__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__34067,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34066,i__34035,map__34072,map__34072__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__34067,s__34065__$2,temp__4425__auto____$1,vec__34063,signal_id,signal,c__17521__auto__,size__17522__auto__,b__34036,s__34034__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__34066,i__34035,map__34072,map__34072__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__34067,s__34065__$2,temp__4425__auto____$1,vec__34063,signal_id,signal,c__17521__auto__,size__17522__auto__,b__34036,s__34034__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__34089 = (i__34066 + (1));
i__34066 = G__34089;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34067),frontend$devtools$_devtools_view_$_iter__34033_$_iter__34064.call(null,cljs.core.chunk_rest.call(null,s__34065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34067),null);
}
} else {
var map__34074 = cljs.core.first.call(null,s__34065__$2);
var map__34074__$1 = ((((!((map__34074 == null)))?((((map__34074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34074):map__34074);
var id = cljs.core.get.call(null,map__34074__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__34074__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__34074__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34035,map__34074,map__34074__$1,id,enabled_QMARK_,action,s__34065__$2,temp__4425__auto____$1,vec__34063,signal_id,signal,c__17521__auto__,size__17522__auto__,b__34036,s__34034__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__34035,map__34074,map__34074__$1,id,enabled_QMARK_,action,s__34065__$2,temp__4425__auto____$1,vec__34063,signal_id,signal,c__17521__auto__,size__17522__auto__,b__34036,s__34034__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__34033_$_iter__34064.call(null,cljs.core.rest.call(null,s__34065__$2)));
}
} else {
return null;
}
break;
}
});})(i__34035,vec__34063,signal_id,signal,c__17521__auto__,size__17522__auto__,b__34036,s__34034__$2,temp__4425__auto__))
,null,null));
});})(i__34035,vec__34063,signal_id,signal,c__17521__auto__,size__17522__auto__,b__34036,s__34034__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__34035,iter__17523__auto__,vec__34063,signal_id,signal,c__17521__auto__,size__17522__auto__,b__34036,s__34034__$2,temp__4425__auto__){
return (function (p1__33976_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780).cljs$core$IFn$_invoke$arity$1(p1__33976_SHARP_),signal_id);
});})(i__34035,iter__17523__auto__,vec__34063,signal_id,signal,c__17521__auto__,size__17522__auto__,b__34036,s__34034__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__34090 = (i__34035 + (1));
i__34035 = G__34090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34036),frontend$devtools$_devtools_view_$_iter__34033.call(null,cljs.core.chunk_rest.call(null,s__34034__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34036),null);
}
} else {
var vec__34076 = cljs.core.first.call(null,s__34034__$2);
var signal_id = cljs.core.nth.call(null,vec__34076,(0),null);
var signal = cljs.core.nth.call(null,vec__34076,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (vec__34076,signal_id,signal,s__34034__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__34033_$_iter__34077(s__34078){
return (new cljs.core.LazySeq(null,((function (vec__34076,signal_id,signal,s__34034__$2,temp__4425__auto__){
return (function (){
var s__34078__$1 = s__34078;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__34078__$1);
if(temp__4425__auto____$1){
var s__34078__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34078__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__34078__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__34080 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__34079 = (0);
while(true){
if((i__34079 < size__17522__auto__)){
var map__34085 = cljs.core._nth.call(null,c__17521__auto__,i__34079);
var map__34085__$1 = ((((!((map__34085 == null)))?((((map__34085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34085):map__34085);
var id = cljs.core.get.call(null,map__34085__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__34085__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__34085__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__34080,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34079,map__34085,map__34085__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__34080,s__34078__$2,temp__4425__auto____$1,vec__34076,signal_id,signal,s__34034__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__34079,map__34085,map__34085__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__34080,s__34078__$2,temp__4425__auto____$1,vec__34076,signal_id,signal,s__34034__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__34091 = (i__34079 + (1));
i__34079 = G__34091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34080),frontend$devtools$_devtools_view_$_iter__34033_$_iter__34077.call(null,cljs.core.chunk_rest.call(null,s__34078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34080),null);
}
} else {
var map__34087 = cljs.core.first.call(null,s__34078__$2);
var map__34087__$1 = ((((!((map__34087 == null)))?((((map__34087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34087):map__34087);
var id = cljs.core.get.call(null,map__34087__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__34087__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__34087__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__34087,map__34087__$1,id,enabled_QMARK_,action,s__34078__$2,temp__4425__auto____$1,vec__34076,signal_id,signal,s__34034__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(map__34087,map__34087__$1,id,enabled_QMARK_,action,s__34078__$2,temp__4425__auto____$1,vec__34076,signal_id,signal,s__34034__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__34033_$_iter__34077.call(null,cljs.core.rest.call(null,s__34078__$2)));
}
} else {
return null;
}
break;
}
});})(vec__34076,signal_id,signal,s__34034__$2,temp__4425__auto__))
,null,null));
});})(vec__34076,signal_id,signal,s__34034__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__34076,signal_id,signal,s__34034__$2,temp__4425__auto__){
return (function (p1__33976_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780).cljs$core$IFn$_invoke$arity$1(p1__33976_SHARP_),signal_id);
});})(iter__17523__auto__,vec__34076,signal_id,signal,s__34034__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__34033.call(null,cljs.core.rest.call(null,s__34034__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"signals","signals",1732137021).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Initial model:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)))], null)], null);
});
});
/**
 * Renders app view with devtools. dev-model must be a ratom.
 */
frontend.devtools.view = (function frontend$devtools$view(dev_model,app){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(app)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-2px 0 7px 0 rgba(0, 0, 0, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._devtools_view,dev_model], null)], null)], null);
})], null);
});
/**
 * Will wrap dispatched actions into action events.
 */
frontend.devtools.wrap_dispatch_action_event = (function frontend$devtools$wrap_dispatch_action_event(dispatch_action,source_signal_id){
return (function frontend$devtools$wrap_dispatch_action_event_$_dispatch_action_event(action){
return dispatch_action.call(null,frontend.devtools._action_event.call(null,source_signal_id,action));
});
});
/**
 * dev-model must be a ratom.
 */
frontend.devtools.wrap_control = (function frontend$devtools$wrap_control(control,dev_model){
return (function frontend$devtools$wrap_control_$_wrapped_control(model,signal,dispatch){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)))){
} else {
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.assoc,new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601),dispatch);
}

var vec__34095 = frontend.devtools._signal_event.call(null,signal);
var signal_id = cljs.core.nth.call(null,vec__34095,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__34095,(1),null);
var signal_event = vec__34095;
var dispatch_action_event = frontend.devtools.wrap_dispatch_action_event.call(null,dispatch,signal_id);
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null));

return control.call(null,model,signal,dispatch_action_event);
});
});
/**
 * dev-model must be a ratom.
 */
frontend.devtools.wrap_reconcile = (function frontend$devtools$wrap_reconcile(reconcile,dev_model){
var wrapped_reconcile = (function frontend$devtools$wrap_reconcile_$_wrapped_reconcile(model,action){
if(cljs.core.truth_(new cljs.core.Keyword(null,"initial-model-saved?","initial-model-saved?",402874199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)))){
} else {
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.assoc,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),model,new cljs.core.Keyword(null,"initial-model-saved?","initial-model-saved?",402874199),true);
}

if(cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"-reset-model","-reset-model",-1424578089))){
return new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model));
} else {
var action_event = (cljs.core.truth_(frontend.devtools._is_action_event_QMARK_.call(null,action))?action:(function (){var vec__34103 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var unknown_singal_id = cljs.core.nth.call(null,vec__34103,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__34103,(1),null);
var unknown_signal_event = vec__34103;
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null));

return frontend.devtools._action_event.call(null,unknown_singal_id,action);
})());
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_event], null));

return reconcile.call(null,model,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(action_event));
}
});
return wrapped_reconcile;
});

//# sourceMappingURL=devtools.js.map?rel=1448143075507