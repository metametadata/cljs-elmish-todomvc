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
var len__17809__auto___53016 = arguments.length;
var i__17810__auto___53017 = (0);
while(true){
if((i__17810__auto___53017 < len__17809__auto___53016)){
args__17816__auto__.push((arguments[i__17810__auto___53017]));

var G__53018 = (i__17810__auto___53017 + (1));
i__17810__auto___53017 = G__53018;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),com.rpl.specter.ALL,pred], null),(function (p1__53011_SHARP_){
return cljs.core.apply.call(null,f,p1__53011_SHARP_,args);
}),model);
});

frontend.devtools._update_actions_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_actions_STAR_.cljs$lang$applyTo = (function (seq53012){
var G__53013 = cljs.core.first.call(null,seq53012);
var seq53012__$1 = cljs.core.next.call(null,seq53012);
var G__53014 = cljs.core.first.call(null,seq53012__$1);
var seq53012__$2 = cljs.core.next.call(null,seq53012__$1);
var G__53015 = cljs.core.first.call(null,seq53012__$2);
var seq53012__$3 = cljs.core.next.call(null,seq53012__$2);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53013,G__53014,G__53015,seq53012__$3);
});
/**
 * model must be immutable.
 */
frontend.devtools._update_action = (function frontend$devtools$_update_action(var_args){
var args__17816__auto__ = [];
var len__17809__auto___53024 = arguments.length;
var i__17810__auto___53025 = (0);
while(true){
if((i__17810__auto___53025 < len__17809__auto___53024)){
args__17816__auto__.push((arguments[i__17810__auto___53025]));

var G__53026 = (i__17810__auto___53025 + (1));
i__17810__auto___53025 = G__53026;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_actions_STAR_,model,(function (p1__53019_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53019_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action.cljs$lang$applyTo = (function (seq53020){
var G__53021 = cljs.core.first.call(null,seq53020);
var seq53020__$1 = cljs.core.next.call(null,seq53020);
var G__53022 = cljs.core.first.call(null,seq53020__$1);
var seq53020__$2 = cljs.core.next.call(null,seq53020__$1);
var G__53023 = cljs.core.first.call(null,seq53020__$2);
var seq53020__$3 = cljs.core.next.call(null,seq53020__$2);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic(G__53021,G__53022,G__53023,seq53020__$3);
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

var seq__53031 = cljs.core.seq.call(null,actions);
var chunk__53032 = null;
var count__53033 = (0);
var i__53034 = (0);
while(true){
if((i__53034 < count__53033)){
var action = cljs.core._nth.call(null,chunk__53032,i__53034);
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(action))){
new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)).call(null,action);
} else {
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
}

var G__53035 = seq__53031;
var G__53036 = chunk__53032;
var G__53037 = count__53033;
var G__53038 = (i__53034 + (1));
seq__53031 = G__53035;
chunk__53032 = G__53036;
count__53033 = G__53037;
i__53034 = G__53038;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__53031);
if(temp__4425__auto__){
var seq__53031__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53031__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__53031__$1);
var G__53039 = cljs.core.chunk_rest.call(null,seq__53031__$1);
var G__53040 = c__17554__auto__;
var G__53041 = cljs.core.count.call(null,c__17554__auto__);
var G__53042 = (0);
seq__53031 = G__53039;
chunk__53032 = G__53040;
count__53033 = G__53041;
i__53034 = G__53042;
continue;
} else {
var action = cljs.core.first.call(null,seq__53031__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(action))){
new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)).call(null,action);
} else {
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
}

var G__53043 = cljs.core.next.call(null,seq__53031__$1);
var G__53044 = null;
var G__53045 = (0);
var G__53046 = (0);
seq__53031 = G__53043;
chunk__53032 = G__53044;
count__53033 = G__53045;
i__53034 = G__53046;
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
/**
 * dev-model must be a ratom.
 */
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(dev_model){
return (function (_dev_model_){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = (function frontend$devtools$_devtools_view_$_iter__53104(s__53105){
return (new cljs.core.LazySeq(null,(function (){
var s__53105__$1 = s__53105;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53105__$1);
if(temp__4425__auto__){
var s__53105__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53105__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__53105__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__53107 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__53106 = (0);
while(true){
if((i__53106 < size__17522__auto__)){
var vec__53134 = cljs.core._nth.call(null,c__17521__auto__,i__53106);
var signal_id = cljs.core.nth.call(null,vec__53134,(0),null);
var signal = cljs.core.nth.call(null,vec__53134,(1),null);
cljs.core.chunk_append.call(null,b__53107,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2924 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (i__53106,vec__53134,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53107,s__53105__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__53104_$_iter__53135(s__53136){
return (new cljs.core.LazySeq(null,((function (i__53106,vec__53134,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53107,s__53105__$2,temp__4425__auto__){
return (function (){
var s__53136__$1 = s__53136;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__53136__$1);
if(temp__4425__auto____$1){
var s__53136__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53136__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__53136__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__53138 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__53137 = (0);
while(true){
if((i__53137 < size__17522__auto____$1)){
var map__53143 = cljs.core._nth.call(null,c__17521__auto____$1,i__53137);
var map__53143__$1 = ((((!((map__53143 == null)))?((((map__53143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53143):map__53143);
var id = cljs.core.get.call(null,map__53143__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__53143__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__53143__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__53138,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53137,i__53106,map__53143,map__53143__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__53138,s__53136__$2,temp__4425__auto____$1,vec__53134,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53107,s__53105__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__53137,i__53106,map__53143,map__53143__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__53138,s__53136__$2,temp__4425__auto____$1,vec__53134,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53107,s__53105__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u21E3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u21E3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__53160 = (i__53137 + (1));
i__53137 = G__53160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53138),frontend$devtools$_devtools_view_$_iter__53104_$_iter__53135.call(null,cljs.core.chunk_rest.call(null,s__53136__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53138),null);
}
} else {
var map__53145 = cljs.core.first.call(null,s__53136__$2);
var map__53145__$1 = ((((!((map__53145 == null)))?((((map__53145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53145):map__53145);
var id = cljs.core.get.call(null,map__53145__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__53145__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__53145__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53106,map__53145,map__53145__$1,id,enabled_QMARK_,action,s__53136__$2,temp__4425__auto____$1,vec__53134,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53107,s__53105__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__53106,map__53145,map__53145__$1,id,enabled_QMARK_,action,s__53136__$2,temp__4425__auto____$1,vec__53134,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53107,s__53105__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u21E3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u21E3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__53104_$_iter__53135.call(null,cljs.core.rest.call(null,s__53136__$2)));
}
} else {
return null;
}
break;
}
});})(i__53106,vec__53134,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53107,s__53105__$2,temp__4425__auto__))
,null,null));
});})(i__53106,vec__53134,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53107,s__53105__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__53106,iter__17523__auto__,vec__53134,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53107,s__53105__$2,temp__4425__auto__){
return (function (p1__53047_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780).cljs$core$IFn$_invoke$arity$1(p1__53047_SHARP_),signal_id);
});})(i__53106,iter__17523__auto__,vec__53134,signal_id,signal,c__17521__auto__,size__17522__auto__,b__53107,s__53105__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__53161 = (i__53106 + (1));
i__53106 = G__53161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53107),frontend$devtools$_devtools_view_$_iter__53104.call(null,cljs.core.chunk_rest.call(null,s__53105__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53107),null);
}
} else {
var vec__53147 = cljs.core.first.call(null,s__53105__$2);
var signal_id = cljs.core.nth.call(null,vec__53147,(0),null);
var signal = cljs.core.nth.call(null,vec__53147,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2924 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (vec__53147,signal_id,signal,s__53105__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__53104_$_iter__53148(s__53149){
return (new cljs.core.LazySeq(null,((function (vec__53147,signal_id,signal,s__53105__$2,temp__4425__auto__){
return (function (){
var s__53149__$1 = s__53149;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__53149__$1);
if(temp__4425__auto____$1){
var s__53149__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53149__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__53149__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__53151 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__53150 = (0);
while(true){
if((i__53150 < size__17522__auto__)){
var map__53156 = cljs.core._nth.call(null,c__17521__auto__,i__53150);
var map__53156__$1 = ((((!((map__53156 == null)))?((((map__53156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53156):map__53156);
var id = cljs.core.get.call(null,map__53156__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__53156__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__53156__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__53151,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53150,map__53156,map__53156__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__53151,s__53149__$2,temp__4425__auto____$1,vec__53147,signal_id,signal,s__53105__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__53150,map__53156,map__53156__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__53151,s__53149__$2,temp__4425__auto____$1,vec__53147,signal_id,signal,s__53105__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u21E3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u21E3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__53162 = (i__53150 + (1));
i__53150 = G__53162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53151),frontend$devtools$_devtools_view_$_iter__53104_$_iter__53148.call(null,cljs.core.chunk_rest.call(null,s__53149__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53151),null);
}
} else {
var map__53158 = cljs.core.first.call(null,s__53149__$2);
var map__53158__$1 = ((((!((map__53158 == null)))?((((map__53158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53158):map__53158);
var id = cljs.core.get.call(null,map__53158__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__53158__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__53158__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__53158,map__53158__$1,id,enabled_QMARK_,action,s__53149__$2,temp__4425__auto____$1,vec__53147,signal_id,signal,s__53105__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(map__53158,map__53158__$1,id,enabled_QMARK_,action,s__53149__$2,temp__4425__auto____$1,vec__53147,signal_id,signal,s__53105__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u21E3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u21E3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__53104_$_iter__53148.call(null,cljs.core.rest.call(null,s__53149__$2)));
}
} else {
return null;
}
break;
}
});})(vec__53147,signal_id,signal,s__53105__$2,temp__4425__auto__))
,null,null));
});})(vec__53147,signal_id,signal,s__53105__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__53147,signal_id,signal,s__53105__$2,temp__4425__auto__){
return (function (p1__53047_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780).cljs$core$IFn$_invoke$arity$1(p1__53047_SHARP_),signal_id);
});})(iter__17523__auto__,vec__53147,signal_id,signal,s__53105__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__53104.call(null,cljs.core.rest.call(null,s__53105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"signals","signals",1732137021).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"initial model:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)))], null)], null);
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

var vec__53166 = frontend.devtools._signal_event.call(null,signal);
var signal_id = cljs.core.nth.call(null,vec__53166,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__53166,(1),null);
var signal_event = vec__53166;
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
var action_event = (cljs.core.truth_(frontend.devtools._is_action_event_QMARK_.call(null,action))?action:(function (){var vec__53174 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var unknown_singal_id = cljs.core.nth.call(null,vec__53174,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__53174,(1),null);
var unknown_signal_event = vec__53174;
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null));

return frontend.devtools._action_event.call(null,unknown_singal_id,action);
})());
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_event], null));

return reconcile.call(null,model,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(action_event));
}
});
return wrapped_reconcile;
});

//# sourceMappingURL=devtools.js.map?rel=1448083430077