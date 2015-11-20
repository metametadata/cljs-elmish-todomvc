// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.devtools');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.pprint');
goog.require('cljs.core.match');
/**
 * Creates a fresh dev-model instance.
 */
frontend.devtools.init = (function frontend$devtools$init(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.List.EMPTY], null);
});
frontend.devtools._signal_event = (function frontend$devtools$_signal_event(signal){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.random_uuid.call(null),signal], null);
});
frontend.devtools._action_event = (function frontend$devtools$_action_event(source_signal_id,action){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.random_uuid.call(null),source_signal_id,action], null);
});
/**
 * dev-model must be a ratom.
 */
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(dev_model){
return (function (_dev_model_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header>h3","header>h3",-258372613),"devtools log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = (function frontend$devtools$_devtools_view_$_iter__22662(s__22663){
return (new cljs.core.LazySeq(null,(function (){
var s__22663__$1 = s__22663;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22663__$1);
if(temp__4425__auto__){
var s__22663__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22663__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__22663__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__22665 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__22664 = (0);
while(true){
if((i__22664 < size__17522__auto__)){
var vec__22684 = cljs.core._nth.call(null,c__17521__auto__,i__22664);
var signal_id = cljs.core.nth.call(null,vec__22684,(0),null);
var signal = cljs.core.nth.call(null,vec__22684,(1),null);
cljs.core.chunk_append.call(null,b__22665,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2799 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)], null)),(function (){var iter__17523__auto__ = ((function (i__22664,vec__22684,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22665,s__22663__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__22662_$_iter__22685(s__22686){
return (new cljs.core.LazySeq(null,((function (i__22664,vec__22684,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22665,s__22663__$2,temp__4425__auto__){
return (function (){
var s__22686__$1 = s__22686;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__22686__$1);
if(temp__4425__auto____$1){
var s__22686__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22686__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__22686__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__22688 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__22687 = (0);
while(true){
if((i__22687 < size__17522__auto____$1)){
var vec__22691 = cljs.core._nth.call(null,c__17521__auto____$1,i__22687);
var id = cljs.core.nth.call(null,vec__22691,(0),null);
var _signal_id_ = cljs.core.nth.call(null,vec__22691,(1),null);
var action = cljs.core.nth.call(null,vec__22691,(2),null);
cljs.core.chunk_append.call(null,b__22688,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),"\u21E3",((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__22702 = (i__22687 + (1));
i__22687 = G__22702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22688),frontend$devtools$_devtools_view_$_iter__22662_$_iter__22685.call(null,cljs.core.chunk_rest.call(null,s__22686__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22688),null);
}
} else {
var vec__22692 = cljs.core.first.call(null,s__22686__$2);
var id = cljs.core.nth.call(null,vec__22692,(0),null);
var _signal_id_ = cljs.core.nth.call(null,vec__22692,(1),null);
var action = cljs.core.nth.call(null,vec__22692,(2),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),"\u21E3",((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__22662_$_iter__22685.call(null,cljs.core.rest.call(null,s__22686__$2)));
}
} else {
return null;
}
break;
}
});})(i__22664,vec__22684,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22665,s__22663__$2,temp__4425__auto__))
,null,null));
});})(i__22664,vec__22684,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22665,s__22663__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__22664,iter__17523__auto__,vec__22684,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22665,s__22663__$2,temp__4425__auto__){
return (function (p1__22621_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__22621_SHARP_),signal_id);
});})(i__22664,iter__17523__auto__,vec__22684,signal_id,signal,c__17521__auto__,size__17522__auto__,b__22665,s__22663__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__22703 = (i__22664 + (1));
i__22664 = G__22703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22665),frontend$devtools$_devtools_view_$_iter__22662.call(null,cljs.core.chunk_rest.call(null,s__22663__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22665),null);
}
} else {
var vec__22693 = cljs.core.first.call(null,s__22663__$2);
var signal_id = cljs.core.nth.call(null,vec__22693,(0),null);
var signal = cljs.core.nth.call(null,vec__22693,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2799 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)], null)),(function (){var iter__17523__auto__ = ((function (vec__22693,signal_id,signal,s__22663__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__22662_$_iter__22694(s__22695){
return (new cljs.core.LazySeq(null,((function (vec__22693,signal_id,signal,s__22663__$2,temp__4425__auto__){
return (function (){
var s__22695__$1 = s__22695;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__22695__$1);
if(temp__4425__auto____$1){
var s__22695__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22695__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__22695__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__22697 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__22696 = (0);
while(true){
if((i__22696 < size__17522__auto__)){
var vec__22700 = cljs.core._nth.call(null,c__17521__auto__,i__22696);
var id = cljs.core.nth.call(null,vec__22700,(0),null);
var _signal_id_ = cljs.core.nth.call(null,vec__22700,(1),null);
var action = cljs.core.nth.call(null,vec__22700,(2),null);
cljs.core.chunk_append.call(null,b__22697,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),"\u21E3",((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__22704 = (i__22696 + (1));
i__22696 = G__22704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22697),frontend$devtools$_devtools_view_$_iter__22662_$_iter__22694.call(null,cljs.core.chunk_rest.call(null,s__22695__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22697),null);
}
} else {
var vec__22701 = cljs.core.first.call(null,s__22695__$2);
var id = cljs.core.nth.call(null,vec__22701,(0),null);
var _signal_id_ = cljs.core.nth.call(null,vec__22701,(1),null);
var action = cljs.core.nth.call(null,vec__22701,(2),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),"\u21E3",((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__22662_$_iter__22694.call(null,cljs.core.rest.call(null,s__22695__$2)));
}
} else {
return null;
}
break;
}
});})(vec__22693,signal_id,signal,s__22663__$2,temp__4425__auto__))
,null,null));
});})(vec__22693,signal_id,signal,s__22663__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__22693,signal_id,signal,s__22663__$2,temp__4425__auto__){
return (function (p1__22621_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__22621_SHARP_),signal_id);
});})(iter__17523__auto__,vec__22693,signal_id,signal,s__22663__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__22662.call(null,cljs.core.rest.call(null,s__22663__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"signals","signals",1732137021).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})())], null)], null);
});
});
/**
 * Renders app view with devtools. dev-model must be a ratom.
 */
frontend.devtools.view = (function frontend$devtools$view(dev_model,app){
return (function (_dev_model_,_app_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(app)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-2px 0 7px 0 rgba(0, 0, 0, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.devtools._devtools_view,dev_model], null)], null)], null);
});
});
/**
 * Attaches signal source to action.
 */
frontend.devtools.wrap_dispatch_action = (function frontend$devtools$wrap_dispatch_action(dispatch_action,source_signal_id){
return (function frontend$devtools$wrap_dispatch_action_$_wrapped_dispatch_action(action){
return dispatch_action.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780),source_signal_id,new cljs.core.Keyword(null,"action","action",-811238024),action], null));
});
});
/**
 * dev-model must be a ratom.
 */
frontend.devtools.wrap_control = (function frontend$devtools$wrap_control(control,dev_model){
return (function frontend$devtools$wrap_control_$_wrapped_control(model,signal,dispatch){
var vec__22708 = frontend.devtools._signal_event.call(null,signal);
var signal_id = cljs.core.nth.call(null,vec__22708,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__22708,(1),null);
var signal_event = vec__22708;
var wrapped_dispatch = frontend.devtools.wrap_dispatch_action.call(null,dispatch,signal_id);
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_event], null));

return control.call(null,model,signal,wrapped_dispatch);
});
});
/**
 * dev-model must be a ratom.
 */
frontend.devtools.wrap_reconcile = (function frontend$devtools$wrap_reconcile(reconcile,dev_model){
return (function frontend$devtools$wrap_reconcile_$_wrapped_reconcile(model,wrapped_action){
var vec__22745 = (function (){try{if(((!((wrapped_action == null)))?((((wrapped_action.cljs$lang$protocol_mask$partition0$ & (256))) || (wrapped_action.cljs$core$ILookup$))?true:(((!wrapped_action.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,wrapped_action):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,wrapped_action))){
try{var wrapped_action_source_signal_id__22750 = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,wrapped_action_source_signal_id__22750,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var wrapped_action_action__22751 = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,wrapped_action_action__22751,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var action = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"action","action",-811238024));
var signal_id = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_id,action], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e22756){if((e22756 instanceof Error)){
var e__21823__auto__ = e22756;
if((e__21823__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto__;
}
} else {
throw e22756;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22755){if((e22755 instanceof Error)){
var e__21823__auto__ = e22755;
if((e__21823__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21823__auto__;
}
} else {
throw e22755;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e22752){if((e22752 instanceof Error)){
var e__21823__auto__ = e22752;
if((e__21823__auto__ === cljs.core.match.backtrack)){
var action = wrapped_action;
var vec__22753 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var unknown_singal_id = cljs.core.nth.call(null,vec__22753,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__22753,(1),null);
var unknown_signal_event = vec__22753;
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_singal_id,action], null);
} else {
throw e__21823__auto__;
}
} else {
throw e22752;

}
}})();
var source_signal_id = cljs.core.nth.call(null,vec__22745,(0),null);
var unwrapped_action = cljs.core.nth.call(null,vec__22745,(1),null);
var event = frontend.devtools._action_event.call(null,source_signal_id,unwrapped_action);
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));

return reconcile.call(null,model,unwrapped_action);
});
});

//# sourceMappingURL=devtools.js.map?rel=1447986930421