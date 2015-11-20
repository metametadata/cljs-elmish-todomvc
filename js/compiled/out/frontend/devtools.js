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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-model","initial-model",1236232487),null,new cljs.core.Keyword(null,"initial-model-saved?","initial-model-saved?",402874199),false,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.List.EMPTY], null);
});
frontend.devtools._signal_event = (function frontend$devtools$_signal_event(signal){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.random_uuid.call(null),signal], null);
});
frontend.devtools._action_event = (function frontend$devtools$_action_event(source_signal_id,action){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780),source_signal_id,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"action","action",-811238024),action], null);
});
/**
 * model must be immutable.
 */
frontend.devtools._update_actions_STAR_ = (function frontend$devtools$_update_actions_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___32802 = arguments.length;
var i__17810__auto___32803 = (0);
while(true){
if((i__17810__auto___32803 < len__17809__auto___32802)){
args__17816__auto__.push((arguments[i__17810__auto___32803]));

var G__32804 = (i__17810__auto___32803 + (1));
i__17810__auto___32803 = G__32804;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),com.rpl.specter.ALL,pred], null),(function (p1__32797_SHARP_){
return cljs.core.apply.call(null,f,p1__32797_SHARP_,args);
}),model);
});

frontend.devtools._update_actions_STAR_.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_actions_STAR_.cljs$lang$applyTo = (function (seq32798){
var G__32799 = cljs.core.first.call(null,seq32798);
var seq32798__$1 = cljs.core.next.call(null,seq32798);
var G__32800 = cljs.core.first.call(null,seq32798__$1);
var seq32798__$2 = cljs.core.next.call(null,seq32798__$1);
var G__32801 = cljs.core.first.call(null,seq32798__$2);
var seq32798__$3 = cljs.core.next.call(null,seq32798__$2);
return frontend.devtools._update_actions_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__32799,G__32800,G__32801,seq32798__$3);
});
/**
 * model must be immutable.
 */
frontend.devtools._update_action = (function frontend$devtools$_update_action(var_args){
var args__17816__auto__ = [];
var len__17809__auto___32810 = arguments.length;
var i__17810__auto___32811 = (0);
while(true){
if((i__17810__auto___32811 < len__17809__auto___32810)){
args__17816__auto__.push((arguments[i__17810__auto___32811]));

var G__32812 = (i__17810__auto___32811 + (1));
i__17810__auto___32811 = G__32812;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.devtools._update_actions_STAR_,model,(function (p1__32805_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__32805_SHARP_),id);
}),f,args);
});

frontend.devtools._update_action.cljs$lang$maxFixedArity = (3);

frontend.devtools._update_action.cljs$lang$applyTo = (function (seq32806){
var G__32807 = cljs.core.first.call(null,seq32806);
var seq32806__$1 = cljs.core.next.call(null,seq32806);
var G__32808 = cljs.core.first.call(null,seq32806__$1);
var seq32806__$2 = cljs.core.next.call(null,seq32806__$1);
var G__32809 = cljs.core.first.call(null,seq32806__$2);
var seq32806__$3 = cljs.core.next.call(null,seq32806__$2);
return frontend.devtools._update_action.cljs$core$IFn$_invoke$arity$variadic(G__32807,G__32808,G__32809,seq32806__$3);
});
/**
 * dev-model is a ratom.
 */
frontend.devtools._toggle_action = (function frontend$devtools$_toggle_action(dev_model,id){
return cljs.core.swap_BANG_.call(null,dev_model,frontend.devtools._update_action,id,cljs.core.update,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),cljs.core.not);
});
/**
 * dev-model must be a ratom.
 */
frontend.devtools._devtools_view = (function frontend$devtools$_devtools_view(dev_model){
return (function (_dev_model_){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#2A2F3A",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header>h3","header>h3",-258372613),"devtools log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__17523__auto__ = (function frontend$devtools$_devtools_view_$_iter__32870(s__32871){
return (new cljs.core.LazySeq(null,(function (){
var s__32871__$1 = s__32871;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__32871__$1);
if(temp__4425__auto__){
var s__32871__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32871__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__32871__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__32873 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__32872 = (0);
while(true){
if((i__32872 < size__17522__auto__)){
var vec__32900 = cljs.core._nth.call(null,c__17521__auto__,i__32872);
var signal_id = cljs.core.nth.call(null,vec__32900,(0),null);
var signal = cljs.core.nth.call(null,vec__32900,(1),null);
cljs.core.chunk_append.call(null,b__32873,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2799 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)], null)),(function (){var iter__17523__auto__ = ((function (i__32872,vec__32900,signal_id,signal,c__17521__auto__,size__17522__auto__,b__32873,s__32871__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__32870_$_iter__32901(s__32902){
return (new cljs.core.LazySeq(null,((function (i__32872,vec__32900,signal_id,signal,c__17521__auto__,size__17522__auto__,b__32873,s__32871__$2,temp__4425__auto__){
return (function (){
var s__32902__$1 = s__32902;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__32902__$1);
if(temp__4425__auto____$1){
var s__32902__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32902__$2)){
var c__17521__auto____$1 = cljs.core.chunk_first.call(null,s__32902__$2);
var size__17522__auto____$1 = cljs.core.count.call(null,c__17521__auto____$1);
var b__32904 = cljs.core.chunk_buffer.call(null,size__17522__auto____$1);
if((function (){var i__32903 = (0);
while(true){
if((i__32903 < size__17522__auto____$1)){
var map__32909 = cljs.core._nth.call(null,c__17521__auto____$1,i__32903);
var map__32909__$1 = ((((!((map__32909 == null)))?((((map__32909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32909):map__32909);
var id = cljs.core.get.call(null,map__32909__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__32909__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__32909__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__32904,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),"\u21E3",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32903,i__32872,map__32909,map__32909__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__32904,s__32902__$2,temp__4425__auto____$1,vec__32900,signal_id,signal,c__17521__auto__,size__17522__auto__,b__32873,s__32871__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__32903,i__32872,map__32909,map__32909__$1,id,enabled_QMARK_,action,c__17521__auto____$1,size__17522__auto____$1,b__32904,s__32902__$2,temp__4425__auto____$1,vec__32900,signal_id,signal,c__17521__auto__,size__17522__auto__,b__32873,s__32871__$2,temp__4425__auto__))
], null),(cljs.core.truth_(enabled_QMARK_)?"OFF":"ON")], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__32926 = (i__32903 + (1));
i__32903 = G__32926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32904),frontend$devtools$_devtools_view_$_iter__32870_$_iter__32901.call(null,cljs.core.chunk_rest.call(null,s__32902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32904),null);
}
} else {
var map__32911 = cljs.core.first.call(null,s__32902__$2);
var map__32911__$1 = ((((!((map__32911 == null)))?((((map__32911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32911):map__32911);
var id = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),"\u21E3",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32872,map__32911,map__32911__$1,id,enabled_QMARK_,action,s__32902__$2,temp__4425__auto____$1,vec__32900,signal_id,signal,c__17521__auto__,size__17522__auto__,b__32873,s__32871__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__32872,map__32911,map__32911__$1,id,enabled_QMARK_,action,s__32902__$2,temp__4425__auto____$1,vec__32900,signal_id,signal,c__17521__auto__,size__17522__auto__,b__32873,s__32871__$2,temp__4425__auto__))
], null),(cljs.core.truth_(enabled_QMARK_)?"OFF":"ON")], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__32870_$_iter__32901.call(null,cljs.core.rest.call(null,s__32902__$2)));
}
} else {
return null;
}
break;
}
});})(i__32872,vec__32900,signal_id,signal,c__17521__auto__,size__17522__auto__,b__32873,s__32871__$2,temp__4425__auto__))
,null,null));
});})(i__32872,vec__32900,signal_id,signal,c__17521__auto__,size__17522__auto__,b__32873,s__32871__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (i__32872,iter__17523__auto__,vec__32900,signal_id,signal,c__17521__auto__,size__17522__auto__,b__32873,s__32871__$2,temp__4425__auto__){
return (function (p1__32813_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780).cljs$core$IFn$_invoke$arity$1(p1__32813_SHARP_),signal_id);
});})(i__32872,iter__17523__auto__,vec__32900,signal_id,signal,c__17521__auto__,size__17522__auto__,b__32873,s__32871__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)));

var G__32927 = (i__32872 + (1));
i__32872 = G__32927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32873),frontend$devtools$_devtools_view_$_iter__32870.call(null,cljs.core.chunk_rest.call(null,s__32871__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32873),null);
}
} else {
var vec__32913 = cljs.core.first.call(null,s__32871__$2);
var signal_id = cljs.core.nth.call(null,vec__32913,(0),null);
var signal = cljs.core.nth.call(null,vec__32913,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2799 ",((cljs.core.coll_QMARK_.call(null,signal))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,signal))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,signal))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,signal)], null)], null)),(function (){var iter__17523__auto__ = ((function (vec__32913,signal_id,signal,s__32871__$2,temp__4425__auto__){
return (function frontend$devtools$_devtools_view_$_iter__32870_$_iter__32914(s__32915){
return (new cljs.core.LazySeq(null,((function (vec__32913,signal_id,signal,s__32871__$2,temp__4425__auto__){
return (function (){
var s__32915__$1 = s__32915;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__32915__$1);
if(temp__4425__auto____$1){
var s__32915__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32915__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__32915__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__32917 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__32916 = (0);
while(true){
if((i__32916 < size__17522__auto__)){
var map__32922 = cljs.core._nth.call(null,c__17521__auto__,i__32916);
var map__32922__$1 = ((((!((map__32922 == null)))?((((map__32922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32922):map__32922);
var id = cljs.core.get.call(null,map__32922__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__32922__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__32922__$1,new cljs.core.Keyword(null,"action","action",-811238024));
cljs.core.chunk_append.call(null,b__32917,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),"\u21E3",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32916,map__32922,map__32922__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__32917,s__32915__$2,temp__4425__auto____$1,vec__32913,signal_id,signal,s__32871__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(i__32916,map__32922,map__32922__$1,id,enabled_QMARK_,action,c__17521__auto__,size__17522__auto__,b__32917,s__32915__$2,temp__4425__auto____$1,vec__32913,signal_id,signal,s__32871__$2,temp__4425__auto__))
], null),(cljs.core.truth_(enabled_QMARK_)?"OFF":"ON")], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__32928 = (i__32916 + (1));
i__32916 = G__32928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32917),frontend$devtools$_devtools_view_$_iter__32870_$_iter__32914.call(null,cljs.core.chunk_rest.call(null,s__32915__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32917),null);
}
} else {
var map__32924 = cljs.core.first.call(null,s__32915__$2);
var map__32924__$1 = ((((!((map__32924 == null)))?((((map__32924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32924):map__32924);
var id = cljs.core.get.call(null,map__32924__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var enabled_QMARK_ = cljs.core.get.call(null,map__32924__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var action = cljs.core.get.call(null,map__32924__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(enabled_QMARK_)?"inherit":"grey")], null)], null),"\u21E3",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__32924,map__32924__$1,id,enabled_QMARK_,action,s__32915__$2,temp__4425__auto____$1,vec__32913,signal_id,signal,s__32871__$2,temp__4425__auto__){
return (function (){
return frontend.devtools._toggle_action.call(null,dev_model,id);
});})(map__32924,map__32924__$1,id,enabled_QMARK_,action,s__32915__$2,temp__4425__auto____$1,vec__32913,signal_id,signal,s__32871__$2,temp__4425__auto__))
], null),(cljs.core.truth_(enabled_QMARK_)?"OFF":"ON")], null),((cljs.core.coll_QMARK_.call(null,action))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.pr_str.call(null,cljs.core.first.call(null,action))], null)," ",clojure.string.join.call(null," ",cljs.core.rest.call(null,action))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div>strong","div>strong",-1402673352),cljs.core.pr_str.call(null,action)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$devtools$_devtools_view_$_iter__32870_$_iter__32914.call(null,cljs.core.rest.call(null,s__32915__$2)));
}
} else {
return null;
}
break;
}
});})(vec__32913,signal_id,signal,s__32871__$2,temp__4425__auto__))
,null,null));
});})(vec__32913,signal_id,signal,s__32871__$2,temp__4425__auto__))
;
return iter__17523__auto__.call(null,cljs.core.filter.call(null,((function (iter__17523__auto__,vec__32913,signal_id,signal,s__32871__$2,temp__4425__auto__){
return (function (p1__32813_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780).cljs$core$IFn$_invoke$arity$1(p1__32813_SHARP_),signal_id);
});})(iter__17523__auto__,vec__32913,signal_id,signal,s__32871__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dev_model))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),signal_id], null)),frontend$devtools$_devtools_view_$_iter__32870.call(null,cljs.core.rest.call(null,s__32871__$2)));
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
var vec__32932 = frontend.devtools._signal_event.call(null,signal);
var signal_id = cljs.core.nth.call(null,vec__32932,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__32932,(1),null);
var signal_event = vec__32932;
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

var vec__32969 = (function (){try{if(((!((wrapped_action == null)))?((((wrapped_action.cljs$lang$protocol_mask$partition0$ & (256))) || (wrapped_action.cljs$core$ILookup$))?true:(((!wrapped_action.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,wrapped_action):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,wrapped_action))){
try{var wrapped_action_source_signal_id__32974 = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,wrapped_action_source_signal_id__32974,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var wrapped_action_action__32975 = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,wrapped_action_action__32975,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var action = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"action","action",-811238024));
var signal_id = cljs.core.get.call(null,wrapped_action,new cljs.core.Keyword(null,"source-signal-id","source-signal-id",-1081022780));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [signal_id,action], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e32980){if((e32980 instanceof Error)){
var e__18550__auto__ = e32980;
if((e__18550__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto__;
}
} else {
throw e32980;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32979){if((e32979 instanceof Error)){
var e__18550__auto__ = e32979;
if((e__18550__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18550__auto__;
}
} else {
throw e32979;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32976){if((e32976 instanceof Error)){
var e__18550__auto__ = e32976;
if((e__18550__auto__ === cljs.core.match.backtrack)){
var action = wrapped_action;
var vec__32977 = frontend.devtools._signal_event.call(null,new cljs.core.Keyword(null,"-unknown-signal","-unknown-signal",-191937911));
var unknown_singal_id = cljs.core.nth.call(null,vec__32977,(0),null);
var _signal_ = cljs.core.nth.call(null,vec__32977,(1),null);
var unknown_signal_event = vec__32977;
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"signals","signals",1732137021),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_signal_event], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unknown_singal_id,action], null);
} else {
throw e__18550__auto__;
}
} else {
throw e32976;

}
}})();
var source_signal_id = cljs.core.nth.call(null,vec__32969,(0),null);
var unwrapped_action = cljs.core.nth.call(null,vec__32969,(1),null);
var event = frontend.devtools._action_event.call(null,source_signal_id,unwrapped_action);
cljs.core.swap_BANG_.call(null,dev_model,cljs.core.update,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));

return reconcile.call(null,model,unwrapped_action);
});
});

//# sourceMappingURL=devtools.js.map?rel=1448051382732