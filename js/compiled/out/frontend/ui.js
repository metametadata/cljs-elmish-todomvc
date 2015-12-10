// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.pprint');
/**
 * Given a component spec map returns a connected component which can be rendered using Reagent.
 * 
 *   :control can be a non-pure function, :init, :view-model, :view and :reconcile must be pure functions.
 * 
 *   init-args will be passed to :init function.
 * 
 *   Dispatches :on-connect signal and returns a map with:
 *    :view (Reagent view function),
 *    :dispatch-signal (it can be used to dispatch signals not only from the view),
 *    :model ratom (this is exposed mainly for debugging),
 *    :dispatch-action (this is exposed mainly for debugging).
 * 
 *   Data flow:
 *   (init)
 *   |
 *   V
 *   model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model -> etc.
 */
frontend.ui.connect_reagent = (function frontend$ui$connect_reagent(p__49335,init_args){
var map__49338 = p__49335;
var map__49338__$1 = ((((!((map__49338 == null)))?((((map__49338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49338):map__49338);
var _spec_ = map__49338__$1;
var init = cljs.core.get.call(null,map__49338__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var view_model = cljs.core.get.call(null,map__49338__$1,new cljs.core.Keyword(null,"view-model","view-model",-895405675));
var view = cljs.core.get.call(null,map__49338__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var control = cljs.core.get.call(null,map__49338__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var reconcile = cljs.core.get.call(null,map__49338__$1,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830));
var model = cljs.core.apply.call(null,init,init_args);
var model_ratom = reagent.core.atom.call(null,model);
var dispatch_action = ((function (model,model_ratom,map__49338,map__49338__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reagent_$_dispatch_action(action){
cljs.core.swap_BANG_.call(null,model_ratom,reconcile,action);

return null;
});})(model,model_ratom,map__49338,map__49338__$1,_spec_,init,view_model,view,control,reconcile))
;
var dispatch_signal = ((function (model,model_ratom,map__49338,map__49338__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reagent_$_dispatch_signal(signal){
control.call(null,cljs.core.deref.call(null,model_ratom),signal,dispatch_action);

return null;
});})(model,model_ratom,map__49338,map__49338__$1,_spec_,init,view_model,view,control,reconcile))
;
var reagent_view = ((function (model,model_ratom,map__49338,map__49338__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reagent_$_reagent_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,view_model.call(null,cljs.core.deref.call(null,model_ratom)),dispatch_signal], null);
});})(model,model_ratom,map__49338,map__49338__$1,_spec_,init,view_model,view,control,reconcile))
;
dispatch_signal.call(null,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"view","view",1247994814),reagent_view,new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591),dispatch_signal,new cljs.core.Keyword(null,"model","model",331153215),model_ratom,new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601),dispatch_action], null);
});
/**
 * Works the same as connect-reagent, but view-model now receives a model ratom and is expected to return Reagent reactions.
 *   Inspired by re-frame subscriptions, see: https://github.com/Day8/re-frame#subscribe
 * 
 *   This approach allows tweaking view-model/view code for better performance.
 */
frontend.ui.connect_reactive_reagent = (function frontend$ui$connect_reactive_reagent(p__49340,init_args){
var map__49343 = p__49340;
var map__49343__$1 = ((((!((map__49343 == null)))?((((map__49343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49343):map__49343);
var _spec_ = map__49343__$1;
var init = cljs.core.get.call(null,map__49343__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var view_model = cljs.core.get.call(null,map__49343__$1,new cljs.core.Keyword(null,"view-model","view-model",-895405675));
var view = cljs.core.get.call(null,map__49343__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var control = cljs.core.get.call(null,map__49343__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var reconcile = cljs.core.get.call(null,map__49343__$1,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830));
var model = cljs.core.apply.call(null,init,init_args);
var model_ratom = reagent.core.atom.call(null,model);
var dispatch_action = ((function (model,model_ratom,map__49343,map__49343__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reactive_reagent_$_dispatch_action(action){
cljs.core.swap_BANG_.call(null,model_ratom,reconcile,action);

return null;
});})(model,model_ratom,map__49343,map__49343__$1,_spec_,init,view_model,view,control,reconcile))
;
var dispatch_signal = ((function (model,model_ratom,map__49343,map__49343__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reactive_reagent_$_dispatch_signal(signal){
control.call(null,cljs.core.deref.call(null,model_ratom),signal,dispatch_action);

return null;
});})(model,model_ratom,map__49343,map__49343__$1,_spec_,init,view_model,view,control,reconcile))
;
var reagent_view = ((function (model,model_ratom,map__49343,map__49343__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reactive_reagent_$_reagent_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,view_model.call(null,model_ratom),dispatch_signal], null);
});})(model,model_ratom,map__49343,map__49343__$1,_spec_,init,view_model,view,control,reconcile))
;
dispatch_signal.call(null,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"view","view",1247994814),reagent_view,new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591),dispatch_signal,new cljs.core.Keyword(null,"model","model",331153215),model_ratom,new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601),dispatch_action], null);
});
/**
 * Function decorator which prepends a tag to the single argument.
 *   I.e. it transforms an arg x to [tag x].
 */
frontend.ui.tagged = (function frontend$ui$tagged(f,tag){
return (function frontend$ui$tagged_$_tagged_fn(x){
return f.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,x], null));
});
});
/**
 * Returns a map containing Reagent reactions to map entries specified by keys.
 */
frontend.ui.track_keys = (function frontend$ui$track_keys(map_ratom,keyseq){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17523__auto__ = (function frontend$ui$track_keys_$_iter__49349(s__49350){
return (new cljs.core.LazySeq(null,(function (){
var s__49350__$1 = s__49350;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__49350__$1);
if(temp__4425__auto__){
var s__49350__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49350__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__49350__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__49352 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__49351 = (0);
while(true){
if((i__49351 < size__17522__auto__)){
var key = cljs.core._nth.call(null,c__17521__auto__,i__49351);
cljs.core.chunk_append.call(null,b__49352,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (i__49351,key,c__17521__auto__,size__17522__auto__,b__49352,s__49350__$2,temp__4425__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(i__49351,key,c__17521__auto__,size__17522__auto__,b__49352,s__49350__$2,temp__4425__auto__))
)], null));

var G__49353 = (i__49351 + (1));
i__49351 = G__49353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49352),frontend$ui$track_keys_$_iter__49349.call(null,cljs.core.chunk_rest.call(null,s__49350__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49352),null);
}
} else {
var key = cljs.core.first.call(null,s__49350__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (key,s__49350__$2,temp__4425__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(key,s__49350__$2,temp__4425__auto__))
)], null),frontend$ui$track_keys_$_iter__49349.call(null,cljs.core.rest.call(null,s__49350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17523__auto__.call(null,keyseq);
})());
});
frontend.ui.wrap_log = (function frontend$ui$wrap_log(spec){
return cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),(function (p1__49354_SHARP_){
return (function frontend$ui$wrap_log_$_control(model,signal,dispatch){
cljs.core.println.call(null,"signal =",signal);

return p1__49354_SHARP_.call(null,model,signal,dispatch);
});
})),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),(function (p1__49355_SHARP_){
return (function frontend$ui$wrap_log_$_reconcile(model,action){
cljs.core.println.call(null,"  action =",action);

var result = p1__49355_SHARP_.call(null,model,action);
return result;
});
}));
});

//# sourceMappingURL=ui.js.map?rel=1449701406350