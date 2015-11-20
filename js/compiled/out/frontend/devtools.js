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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),null,new cljs.core.Keyword(null,"initial-model-saved?","initial-model-saved?",402874199),false,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.List.EMPTY], null);
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header>h3","header>h3",-258372613),"devtools log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = (function frontend$devtools$_devtools_view_$_iter__27104(s__27105){
return (new cljs.core.LazySeq(null,(function (){
var s__27105__$1 = s__27105;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27105__$1);
if(temp__4425__auto__){
var s__27105__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27105__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__27105__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__27107 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__27106 = (0);
while(true){
if((i__27106 < size__17522__auto__)){
var vec__27126 = cljs.core._nth.call(null,c__17521__auto__,i__27106);
var signal_id = cljs.core.nth.call(null,vec__27126,(0),null);
var signal = cljs.core.nth.call(null,vec__27126,(1),null);
cljs.core.chunk_append.call(null,b__27107,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2799 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)], null)),(function (){var iter__17523__auto__ = ((function (i__27106,vec__27126,signal_id,signal,c__17521__auto__,size__17522__auto__,b__27107,s__27105__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__27104_$_iter__27127(s__27128){
return (new cljs.core.LazySeq(null,((function (i__27106,vec__27126,signal_id,signal,c__17521__auto__,size__17522__auto__,b__27107,s__27105__$2,temp__4425__auto__){
return (function (){
var s__27128__$1 = s__27128;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27128__$1);
if(temp__4425__auto____$1){
var s__27128__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27128__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__27128__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__27130 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__27129 = (0);
while(true){
if((i__27129 < size__17522__auto____$1)){
var vec__27133 = cljs.core._nth.call(null,c__17521__auto____$1,i__27129);
var id = cljs.core.nth.call(null,vec__27133,(0),null);
var _signal_id_ = cljs.core.nth.call(null,vec__27133,(1),null);
var action = cljs.core.nth.call(null,vec__27133,(2),null);
cljs.core.chunk_append.call(null,b__27130,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),"\u21E3",((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__27144 = (i__27129 + (1));
i__27129 = G__27144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27130),frontend$devtools$_devtools_view_$_iter__27104_$_iter__27127.call(null,cljs.core.chunk_rest.call(null,s__27128__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27130),null);
}
} else {
var vec__27134 = cljs.core.first.call(null,s__27128__$2);
var id = cljs.core.nth.call(null,vec__27134,(0),null);
var _signal_id_ = cljs.core.nth.call(null,vec__27134,(1),null);
var action = cljs.core.nth.call(null,vec__27134,(2),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),"\u21E3",((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__27104_$_iter__27127.call(null,cljs.core.rest.call(null,s__27128__$2)));
}
} else {
return null;
}
break;
}
});})(i__27106,vec__27126,signal_id,signal,c__17521__auto__,size__17522__auto__,b__27107,s__27105__$2,temp__4425__auto__))
,null,null));
});})(i__27106,vec__27126,signal_id,signal,c__17521__auto__,size__17522__auto__,b__27107,s__27105__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__27106,iter__17523__auto__,vec__27126,signal_id,signal,c__17521__auto__,size__17522__auto__,b__27107,s__27105__$2,temp__4425__auto__){
return (function (p1__27063_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__27063_SHARP_),signal_id);
});})(i__27106,iter__17523__auto__,vec__27126,signal_id,signal,c__17521__auto__,size__17522__auto__,b__27107,s__27105__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__27145 = (i__27106 + (1));
i__27106 = G__27145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27107),frontend$devtools$_devtools_view_$_iter__27104.call(null,cljs.core.chunk_rest.call(null,s__27105__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27107),null);
}
} else {
var vec__27135 = cljs.core.first.call(null,s__27105__$2);
var signal_id = cljs.core.nth.call(null,vec__27135,(0),null);
var signal = cljs.core.nth.call(null,vec__27135,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2799 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)], null)),(function (){var iter__17523__auto__ = ((function (vec__27135,signal_id,signal,s__27105__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__27104_$_iter__27136(s__27137){
return (new cljs.core.LazySeq(null,((function (vec__27135,signal_id,signal,s__27105__$2,temp__4425__auto__){
return (function (){
var s__27137__$1 = s__27137;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27137__$1);
if(temp__4425__auto____$1){
var s__27137__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27137__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__27137__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__27139 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__27138 = (0);
while(true){
if((i__27138 < size__17522__auto__)){
var vec__27142 = cljs.core._nth.call(null,c__17521__auto__,i__27138);
var id = cljs.core.nth.call(null,vec__27142,(0),null);
var _signal_id_ = cljs.core.nth.call(null,vec__27142,(1),null);
var action = cljs.core.nth.call(null,vec__27142,(2),null);
cljs.core.chunk_append.call(null,b__27139,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),"\u21E3",((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__27146 = (i__27138 + (1));
i__27138 = G__27146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27139),frontend$devtools$_devtools_view_$_iter__27104_$_iter__27136.call(null,cljs.core.chunk_rest.call(null,s__27137__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27139),null);
}
} else {
var vec__27143 = cljs.core.first.call(null,s__27137__$2);
var id = cljs.core.nth.call(null,vec__27143,(0),null);
var _signal_id_ = cljs.core.nth.call(null,vec__27143,(1),null);
var action = cljs.core.nth.call(null,vec__27143,(2),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),"\u21E3",((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__27104_$_iter__27136.call(null,cljs.core.rest.call(null,s__27137__$2)));
}
} else {
return null;
}
break;
}
});})(vec__27135,signal_id,signal,s__27105__$2,temp__4425__auto__))
,null,null));
});})(vec__27135,signal_id,signal,s__27105__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__27135,signal_id,signal,s__27105__$2,temp__4425__auto__){
return (function (p1__27063_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__27063_SHARP_),signal_id);
});})(iter__17523__auto__,vec__27135,signal_id,signal,s__27105__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__27104.call(null,cljs.core.rest.call(null,s__27105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"signals","signals",1732137021).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"initial model:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)))], null)], null);
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
var vec__27150 = frontend.devtools._signal_event.call(null,signal);
var signal_id = cljs.core.nth.call(null,vec__27150,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__27150,(1),null);
var signal_event = vec__27150;
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
if(cljs.core.truth_(new cljs.core.Keyword(null,"initial-model-saved?","initial-model-saved?",402874199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model)))){
} else {
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.assoc,new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),model,new cljs.core.Keyword(null,"initial-model-saved?","initial-model-saved?",402874199),true);
}

var vec__27187 = (function (){try{if(((!((wrapped_action == null)))?((((wrapped_action.cljs$lang$protocol_mask$partition0$ & (256))) || (wrapped_action.cljs$core$ILookup$))?true:(((!wrapped_action.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,wrapped_action):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,wrapped_action))){
try{var wrapped_action_source_signal_id__27192 = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,wrapped_action_source_signal_id__27192,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var wrapped_action_action__27193 = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,wrapped_action_action__27193,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var action = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"action","action",-811238024));
var signal_id = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_id,action], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27198){if((e27198 instanceof Error)){
var e__18550__auto__ = e27198;
if((e__18550__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto__;
}
} else {
throw e27198;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27197){if((e27197 instanceof Error)){
var e__18550__auto__ = e27197;
if((e__18550__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto__;
}
} else {
throw e27197;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27194){if((e27194 instanceof Error)){
var e__18550__auto__ = e27194;
if((e__18550__auto__ === cljs.core.match.backtrack)){
var action = wrapped_action;
var vec__27195 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var unknown_singal_id = cljs.core.nth.call(null,vec__27195,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__27195,(1),null);
var unknown_signal_event = vec__27195;
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_singal_id,action], null);
} else {
throw e__18550__auto__;
}
} else {
throw e27194;

}
}})();
var source_signal_id = cljs.core.nth.call(null,vec__27187,(0),null);
var unwrapped_action = cljs.core.nth.call(null,vec__27187,(1),null);
var event = frontend.devtools._action_event.call(null,source_signal_id,unwrapped_action);
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));

return reconcile.call(null,model,unwrapped_action);
});
});

//# sourceMappingURL=devtools.js.map?rel=1448046309144