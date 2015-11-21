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
var len__17809__auto___33578 = arguments.length;
var i__17810__auto___33579 = (0);
while(true){
if((i__17810__auto___33579 < len__17809__auto___33578)){
args__17816__auto__.push((arguments[i__17810__auto___33579]));

var G__33580 = (i__17810__auto___33579 + (1));
i__17810__auto___33579 = G__33580;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),com.rpl.specter.ALL,pred], null),(function (p1__33573_SHARP_){
return cljs.core.apply.call(null,f,p1__33573_SHARP_,args);
}),model);
});

frontend.devtools._update_actions_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_actions_STAR_.cljs$lang$applyTo = (function (seq33574){
var G__33575 = cljs.core.first.call(null,seq33574);
var seq33574__$1 = cljs.core.next.call(null,seq33574);
var G__33576 = cljs.core.first.call(null,seq33574__$1);
var seq33574__$2 = cljs.core.next.call(null,seq33574__$1);
var G__33577 = cljs.core.first.call(null,seq33574__$2);
var seq33574__$3 = cljs.core.next.call(null,seq33574__$2);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33575,G__33576,G__33577,seq33574__$3);
});
/**
 * model must be immutable.
 */
frontend.devtools._update_action = (function frontend$devtools$_update_action(var_args){
var args__17816__auto__ = [];
var len__17809__auto___33586 = arguments.length;
var i__17810__auto___33587 = (0);
while(true){
if((i__17810__auto___33587 < len__17809__auto___33586)){
args__17816__auto__.push((arguments[i__17810__auto___33587]));

var G__33588 = (i__17810__auto___33587 + (1));
i__17810__auto___33587 = G__33588;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_actions_STAR_,model,(function (p1__33581_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33581_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action.cljs$lang$applyTo = (function (seq33582){
var G__33583 = cljs.core.first.call(null,seq33582);
var seq33582__$1 = cljs.core.next.call(null,seq33582);
var G__33584 = cljs.core.first.call(null,seq33582__$1);
var seq33582__$2 = cljs.core.next.call(null,seq33582__$1);
var G__33585 = cljs.core.first.call(null,seq33582__$2);
var seq33582__$3 = cljs.core.next.call(null,seq33582__$2);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic(G__33583,G__33584,G__33585,seq33582__$3);
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

var seq__33593 = cljs.core.seq.call(null,actions);
var chunk__33594 = null;
var count__33595 = (0);
var i__33596 = (0);
while(true){
if((i__33596 < count__33595)){
var action = cljs.core._nth.call(null,chunk__33594,i__33596);
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(action))){
new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)).call(null,action);
} else {
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
}

var G__33597 = seq__33593;
var G__33598 = chunk__33594;
var G__33599 = count__33595;
var G__33600 = (i__33596 + (1));
seq__33593 = G__33597;
chunk__33594 = G__33598;
count__33595 = G__33599;
i__33596 = G__33600;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33593);
if(temp__4425__auto__){
var seq__33593__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33593__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__33593__$1);
var G__33601 = cljs.core.chunk_rest.call(null,seq__33593__$1);
var G__33602 = c__17554__auto__;
var G__33603 = cljs.core.count.call(null,c__17554__auto__);
var G__33604 = (0);
seq__33593 = G__33601;
chunk__33594 = G__33602;
count__33595 = G__33603;
i__33596 = G__33604;
continue;
} else {
var action = cljs.core.first.call(null,seq__33593__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(action))){
new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)).call(null,action);
} else {
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action], null));
}

var G__33605 = cljs.core.next.call(null,seq__33593__$1);
var G__33606 = null;
var G__33607 = (0);
var G__33608 = (0);
seq__33593 = G__33605;
chunk__33594 = G__33606;
count__33595 = G__33607;
i__33596 = G__33608;
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
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = (function frontend$devtools$_devtools_view_$_iter__33666(s__33667){
return (new cljs.core.LazySeq(null,(function (){
var s__33667__$1 = s__33667;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33667__$1);
if(temp__4425__auto__){
var s__33667__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33667__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__33667__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__33669 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__33668 = (0);
while(true){
if((i__33668 < size__17522__auto__)){
var vec__33696 = cljs.core._nth.call(null,c__17521__auto__,i__33668);
var signal_id = cljs.core.nth.call(null,vec__33696,(0),null);
var signal = cljs.core.nth.call(null,vec__33696,(1),null);
cljs.core.chunk_append.call(null,b__33669,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (i__33668,vec__33696,signal_id,signal,c__17521__auto__,size__17522__auto__,b__33669,s__33667__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__33666_$_iter__33697(s__33698){
return (new cljs.core.LazySeq(null,((function (i__33668,vec__33696,signal_id,signal,c__17521__auto__,size__17522__auto__,b__33669,s__33667__$2,temp__4425__auto__){
return (function (){
var s__33698__$1 = s__33698;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__33698__$1);
if(temp__4425__auto____$1){
var s__33698__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33698__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__33698__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__33700 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__33699 = (0);
while(true){
if((i__33699 < size__17522__auto____$1)){
var map__33705 = cljs.core._nth.call(null,c__17521__auto____$1,i__33699);
var map__33705__$1 = ((((!((map__33705 == null)))?((((map__33705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33705):map__33705);
var id = cljs.core.get.call(null,map__33705__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__33705__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__33705__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__33700,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33699,i__33668,map__33705,map__33705__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__33700,s__33698__$2,temp__4425__auto____$1,vec__33696,signal_id,signal,c__17521__auto__,size__17522__auto__,b__33669,s__33667__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__33699,i__33668,map__33705,map__33705__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__33700,s__33698__$2,temp__4425__auto____$1,vec__33696,signal_id,signal,c__17521__auto__,size__17522__auto__,b__33669,s__33667__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__33722 = (i__33699 + (1));
i__33699 = G__33722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33700),frontend$devtools$_devtools_view_$_iter__33666_$_iter__33697.call(null,cljs.core.chunk_rest.call(null,s__33698__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33700),null);
}
} else {
var map__33707 = cljs.core.first.call(null,s__33698__$2);
var map__33707__$1 = ((((!((map__33707 == null)))?((((map__33707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33707):map__33707);
var id = cljs.core.get.call(null,map__33707__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__33707__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__33707__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33668,map__33707,map__33707__$1,id,enabled_QMARK_,action,s__33698__$2,temp__4425__auto____$1,vec__33696,signal_id,signal,c__17521__auto__,size__17522__auto__,b__33669,s__33667__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__33668,map__33707,map__33707__$1,id,enabled_QMARK_,action,s__33698__$2,temp__4425__auto____$1,vec__33696,signal_id,signal,c__17521__auto__,size__17522__auto__,b__33669,s__33667__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__33666_$_iter__33697.call(null,cljs.core.rest.call(null,s__33698__$2)));
}
} else {
return null;
}
break;
}
});})(i__33668,vec__33696,signal_id,signal,c__17521__auto__,size__17522__auto__,b__33669,s__33667__$2,temp__4425__auto__))
,null,null));
});})(i__33668,vec__33696,signal_id,signal,c__17521__auto__,size__17522__auto__,b__33669,s__33667__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__33668,iter__17523__auto__,vec__33696,signal_id,signal,c__17521__auto__,size__17522__auto__,b__33669,s__33667__$2,temp__4425__auto__){
return (function (p1__33609_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780).cljs$core$IFn$_invoke$arity$1(p1__33609_SHARP_),signal_id);
});})(i__33668,iter__17523__auto__,vec__33696,signal_id,signal,c__17521__auto__,size__17522__auto__,b__33669,s__33667__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__33723 = (i__33668 + (1));
i__33668 = G__33723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33669),frontend$devtools$_devtools_view_$_iter__33666.call(null,cljs.core.chunk_rest.call(null,s__33667__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33669),null);
}
} else {
var vec__33709 = cljs.core.first.call(null,s__33667__$2);
var signal_id = cljs.core.nth.call(null,vec__33709,(0),null);
var signal = cljs.core.nth.call(null,vec__33709,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Signal"], null),"\u2192 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)),(function (){var iter__17523__auto__ = ((function (vec__33709,signal_id,signal,s__33667__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__33666_$_iter__33710(s__33711){
return (new cljs.core.LazySeq(null,((function (vec__33709,signal_id,signal,s__33667__$2,temp__4425__auto__){
return (function (){
var s__33711__$1 = s__33711;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__33711__$1);
if(temp__4425__auto____$1){
var s__33711__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33711__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__33711__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__33713 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__33712 = (0);
while(true){
if((i__33712 < size__17522__auto__)){
var map__33718 = cljs.core._nth.call(null,c__17521__auto__,i__33712);
var map__33718__$1 = ((((!((map__33718 == null)))?((((map__33718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33718):map__33718);
var id = cljs.core.get.call(null,map__33718__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__33718__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__33718__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__33713,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33712,map__33718,map__33718__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__33713,s__33711__$2,temp__4425__auto____$1,vec__33709,signal_id,signal,s__33667__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__33712,map__33718,map__33718__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__33713,s__33711__$2,temp__4425__auto____$1,vec__33709,signal_id,signal,s__33667__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__33724 = (i__33712 + (1));
i__33712 = G__33724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33713),frontend$devtools$_devtools_view_$_iter__33666_$_iter__33710.call(null,cljs.core.chunk_rest.call(null,s__33711__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33713),null);
}
} else {
var map__33720 = cljs.core.first.call(null,s__33711__$2);
var map__33720__$1 = ((((!((map__33720 == null)))?((((map__33720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33720):map__33720);
var id = cljs.core.get.call(null,map__33720__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__33720__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__33720__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(79, 90, 101)",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__33720,map__33720__$1,id,enabled_QMARK_,action,s__33711__$2,temp__4425__auto____$1,vec__33709,signal_id,signal,s__33667__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(map__33720,map__33720__$1,id,enabled_QMARK_,action,s__33711__$2,temp__4425__auto____$1,vec__33709,signal_id,signal,s__33667__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Click to enable/disable this action"], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,action)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__33666_$_iter__33710.call(null,cljs.core.rest.call(null,s__33711__$2)));
}
} else {
return null;
}
break;
}
});})(vec__33709,signal_id,signal,s__33667__$2,temp__4425__auto__))
,null,null));
});})(vec__33709,signal_id,signal,s__33667__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__33709,signal_id,signal,s__33667__$2,temp__4425__auto__){
return (function (p1__33609_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780).cljs$core$IFn$_invoke$arity$1(p1__33609_SHARP_),signal_id);
});})(iter__17523__auto__,vec__33709,signal_id,signal,s__33667__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__33666.call(null,cljs.core.rest.call(null,s__33667__$2)));
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

var vec__33728 = frontend.devtools._signal_event.call(null,signal);
var signal_id = cljs.core.nth.call(null,vec__33728,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__33728,(1),null);
var signal_event = vec__33728;
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
var action_event = (cljs.core.truth_(frontend.devtools._is_action_event_QMARK_.call(null,action))?action:(function (){var vec__33736 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var unknown_singal_id = cljs.core.nth.call(null,vec__33736,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__33736,(1),null);
var unknown_signal_event = vec__33736;
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null));

return frontend.devtools._action_event.call(null,unknown_singal_id,action);
})());
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_event], null));

return reconcile.call(null,model,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(action_event));
}
});
return wrapped_reconcile;
});

//# sourceMappingURL=devtools.js.map?rel=1448098459548