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
 *   Dispatches :on-connect signal and returns a "connected spec" map with following keys:
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
frontend.ui.connect_reactive_reagent = (function frontend$ui$connect_reactive_reagent(p__113940,init_args){
var map__113943 = p__113940;
var map__113943__$1 = ((((!((map__113943 == null)))?((((map__113943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__113943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__113943):map__113943);
var _spec_ = map__113943__$1;
var init = cljs.core.get.call(null,map__113943__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var view_model = cljs.core.get.call(null,map__113943__$1,new cljs.core.Keyword(null,"view-model","view-model",-895405675));
var view = cljs.core.get.call(null,map__113943__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var control = cljs.core.get.call(null,map__113943__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var reconcile = cljs.core.get.call(null,map__113943__$1,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830));
var model = cljs.core.apply.call(null,init,init_args);
var model_ratom = reagent.core.atom.call(null,model);
var dispatch_action = ((function (model,model_ratom,map__113943,map__113943__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reactive_reagent_$_dispatch_action(action){
return cljs.core.swap_BANG_.call(null,model_ratom,reconcile,action);
});})(model,model_ratom,map__113943,map__113943__$1,_spec_,init,view_model,view,control,reconcile))
;
var dispatch_signal = ((function (model,model_ratom,map__113943,map__113943__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reactive_reagent_$_dispatch_signal(signal){
control.call(null,cljs.core.deref.call(null,model_ratom),signal,dispatch_action);

return null;
});})(model,model_ratom,map__113943,map__113943__$1,_spec_,init,view_model,view,control,reconcile))
;
var reagent_view = ((function (model,model_ratom,map__113943,map__113943__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reactive_reagent_$_reagent_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,view_model.call(null,model_ratom),dispatch_signal], null);
});})(model,model_ratom,map__113943,map__113943__$1,_spec_,init,view_model,view,control,reconcile))
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17523__auto__ = (function frontend$ui$track_keys_$_iter__113949(s__113950){
return (new cljs.core.LazySeq(null,(function (){
var s__113950__$1 = s__113950;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__113950__$1);
if(temp__4425__auto__){
var s__113950__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__113950__$2)){
var c__17521__auto__ = cljs.core.chunk_first.call(null,s__113950__$2);
var size__17522__auto__ = cljs.core.count.call(null,c__17521__auto__);
var b__113952 = cljs.core.chunk_buffer.call(null,size__17522__auto__);
if((function (){var i__113951 = (0);
while(true){
if((i__113951 < size__17522__auto__)){
var key = cljs.core._nth.call(null,c__17521__auto__,i__113951);
cljs.core.chunk_append.call(null,b__113952,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (i__113951,key,c__17521__auto__,size__17522__auto__,b__113952,s__113950__$2,temp__4425__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(i__113951,key,c__17521__auto__,size__17522__auto__,b__113952,s__113950__$2,temp__4425__auto__))
)], null));

var G__113953 = (i__113951 + (1));
i__113951 = G__113953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__113952),frontend$ui$track_keys_$_iter__113949.call(null,cljs.core.chunk_rest.call(null,s__113950__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__113952),null);
}
} else {
var key = cljs.core.first.call(null,s__113950__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,reagent.ratom.make_reaction.call(null,((function (key,s__113950__$2,temp__4425__auto__){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,map_ratom),key);
});})(key,s__113950__$2,temp__4425__auto__))
)], null),frontend$ui$track_keys_$_iter__113949.call(null,cljs.core.rest.call(null,s__113950__$2)));
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
frontend.ui.wrap_log = (function frontend$ui$wrap_log(var_args){
var args113956 = [];
var len__17809__auto___113959 = arguments.length;
var i__17810__auto___113960 = (0);
while(true){
if((i__17810__auto___113960 < len__17809__auto___113959)){
args113956.push((arguments[i__17810__auto___113960]));

var G__113961 = (i__17810__auto___113960 + (1));
i__17810__auto___113960 = G__113961;
continue;
} else {
}
break;
}

var G__113958 = args113956.length;
switch (G__113958) {
case 1:
return frontend.ui.wrap_log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.ui.wrap_log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args113956.length)].join('')));

}
});

frontend.ui.wrap_log.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return frontend.ui.wrap_log.call(null,spec,"");
});

frontend.ui.wrap_log.cljs$core$IFn$_invoke$arity$2 = (function (spec,prefix){
return cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),(function (p1__113954_SHARP_){
return (function frontend$ui$control(model,signal,dispatch){
cljs.core.println.call(null,prefix,"signal =",cljs.core.pr_str.call(null,signal));

return p1__113954_SHARP_.call(null,model,signal,dispatch);
});
})),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),(function (p1__113955_SHARP_){
return (function frontend$ui$reconcile(model,action){
cljs.core.println.call(null,prefix,"  action =",cljs.core.pr_str.call(null,action));

var result = p1__113955_SHARP_.call(null,model,action);
return result;
});
}));
});

frontend.ui.wrap_log.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=ui.js.map?rel=1452763858069