// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.persistence_middleware');
goog.require('cljs.core');
goog.require('cljs.core.match');
/**
 * On load-signal middleware will load the model from storage and send the signal further to the component.
 */
frontend.persistence_middleware.wrap_control = (function frontend$persistence_middleware$wrap_control(control,load_signal,storage,key){
return (function frontend$persistence_middleware$wrap_control_$_control_reconcile(model,signal,dispatch){
if(cljs.core._EQ_.call(null,load_signal,signal)){
var storage_model_44063 = cljs.core.get.call(null,storage,key,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core._EQ_.call(null,storage_model_44063,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
} else {
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-from-storage","reset-from-storage",844386523),storage_model_44063], null));
}
} else {
}

return control.call(null,model,signal,dispatch);
});
});
frontend.persistence_middleware.wrap_reconcile = (function frontend$persistence_middleware$wrap_reconcile(reconcile,storage,key){
return (function frontend$persistence_middleware$wrap_reconcile_$_wrapped_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__44080 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__44080,new cljs.core.Keyword(null,"reset-from-storage","reset-from-storage",844386523))){
var data = cljs.core.nth.call(null,action,(1));
return data;
} else {
throw cljs.core.match.backtrack;

}
}catch (e44083){if((e44083 instanceof Error)){
var e__21825__auto__ = e44083;
if((e__21825__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto__;
}
} else {
throw e44083;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44082){if((e44082 instanceof Error)){
var e__21825__auto__ = e44082;
if((e__21825__auto__ === cljs.core.match.backtrack)){
var result = reconcile.call(null,model,action);
cljs.core.assoc_BANG_.call(null,storage,key,result);

return result;
} else {
throw e__21825__auto__;
}
} else {
throw e44082;

}
}});
});

//# sourceMappingURL=persistence_middleware.js.map?rel=1448242551419