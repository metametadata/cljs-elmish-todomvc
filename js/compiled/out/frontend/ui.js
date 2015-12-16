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
 *   view-model receives a model ratom and is expected to return Reagent reactions (inspired by re-frame subscriptions,
 *   see: https://github.com/Day8/re-frame#subscribe).
 * 
 *   init-args will be passed to :init function.
 * 
 *   Dispatches :on-connect signal and returns a map with following keys:
 *    :view - Reagent view function
 *    :dispatch-signal - it can be used to dispatch signals not only from the view, always returns nil
 * 
 *    these are exposed mainly for debugging:
 *    :model - Reagent atom
 *    :dispatch-action - the same function which is passed into control, returns a new model
 * 
 *   Data flow:
 *   (init)
 *   |
 *   V
 *   model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model -> etc.
 */
frontend.ui.connect_reactive_reagent = (function frontend$ui$connect_reactive_reagent(p__22082,init_args){
var map__22085 = p__22082;
var map__22085__$1 = ((((!((map__22085 == null)))?((((map__22085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22085):map__22085);
var _spec_ = map__22085__$1;
var init = cljs.core.get.call(null,map__22085__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var view_model = cljs.core.get.call(null,map__22085__$1,new cljs.core.Keyword(null,"view-model","view-model",-895405675));
var view = cljs.core.get.call(null,map__22085__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var control = cljs.core.get.call(null,map__22085__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var reconcile = cljs.core.get.call(null,map__22085__$1,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830));
var model = cljs.core.apply.call(null,init,init_args);
var model_ratom = reagent.core.atom.call(null,model);
var dispatch_action = ((function (model,model_ratom,map__22085,map__22085__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reactive_reagent_$_dispatch_action(action){
return cljs.core.swap_BANG_.call(null,model_ratom,reconcile,action);
});})(model,model_ratom,map__22085,map__22085__$1,_spec_,init,view_model,view,control,reconcile))
;
var dispatch_signal = ((function (model,model_ratom,map__22085,map__22085__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reactive_reagent_$_dispatch_signal(signal){
control.call(null,cljs.core.deref.call(null,model_ratom),signal,dispatch_action);

return null;
});})(model,model_ratom,map__22085,map__22085__$1,_spec_,init,view_model,view,control,reconcile))
;
var reagent_view = ((function (model,model_ratom,map__22085,map__22085__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reactive_reagent_$_reagent_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,view_model.call(null,model_ratom),dispatch_signal], null);
});})(model,model_ratom,map__22085,map__22085__$1,_spec_,init,view_model,view,control,reconcile))
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17523__auto__ = (function frontend$ui$track_keys_$_iter__22091(s__22092){
return (new cljs.core.LazySeq(null,(function (){
var s__22092__$1 = s__22092;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22092__$1);
if(temp__4425__auto__){
var s__22092__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22092__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__22092__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__22094 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__22093 = (0);
while(true){
if((i__22093 < size__17522__auto__)){
var key = cljs.core._nth.call(null,c__17521__auto__,i__22093);
cljs.core.chunk_append.call(null,b__22094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (i__22093,key,c__17521__auto__,size__17522__auto__,b__22094,s__22092__$2,temp__4425__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(i__22093,key,c__17521__auto__,size__17522__auto__,b__22094,s__22092__$2,temp__4425__auto__))
)], null));

var G__22095 = (i__22093 + (1));
i__22093 = G__22095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22094),frontend$ui$track_keys_$_iter__22091.call(null,cljs.core.chunk_rest.call(null,s__22092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22094),null);
}
} else {
var key = cljs.core.first.call(null,s__22092__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (key,s__22092__$2,temp__4425__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(key,s__22092__$2,temp__4425__auto__))
)], null),frontend$ui$track_keys_$_iter__22091.call(null,cljs.core.rest.call(null,s__22092__$2)));
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
return cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),(function (p1__22096_SHARP_){
return (function frontend$ui$wrap_log_$_control(model,signal,dispatch){
cljs.core.println.call(null,"signal =",signal);

return p1__22096_SHARP_.call(null,model,signal,dispatch);
});
})),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),(function (p1__22097_SHARP_){
return (function frontend$ui$wrap_log_$_reconcile(model,action){
cljs.core.println.call(null,"  action =",action);

var result = p1__22097_SHARP_.call(null,model,action);
return result;
});
}));
});

//# sourceMappingURL=ui.js.map?rel=1450213588059