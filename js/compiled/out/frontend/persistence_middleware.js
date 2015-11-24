// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.persistence_middleware');
goog.require('cljs.core');
goog.require('cljs.core.match');
/**
 * On load-signal middleware will load the model from storage and send the signal further with updated model to the component.
 *   Blacklist should contain model keys which will not be loaded from storage.
 */
frontend.persistence_middleware.wrap_control = (function frontend$persistence_middleware$wrap_control(control,load_signal,storage,key,load_blacklist){
return (function frontend$persistence_middleware$wrap_control_$_wrapped_control(model,signal,dispatch){
if(cljs.core._EQ_.call(null,load_signal,signal)){
var storage_model = cljs.core.get.call(null,storage,key,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core.not_EQ_.call(null,storage_model,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
var new_model = cljs.core.merge.call(null,storage_model,cljs.core.select_keys.call(null,model,load_blacklist));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-from-storage","reset-from-storage",844386523),new_model], null));

return control.call(null,new_model,signal,dispatch);
} else {
return control.call(null,model,signal,dispatch);
}
} else {
return control.call(null,model,signal,dispatch);
}
});
});
/**
 * Blacklist should contain model keys which will not be saved to storage.
 */
frontend.persistence_middleware.wrap_reconcile = (function frontend$persistence_middleware$wrap_reconcile(reconcile,storage,key,save_blacklist){
return (function frontend$persistence_middleware$wrap_reconcile_$_wrapped_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__26384 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__26384,new cljs.core.Keyword(null,"reset-from-storage","reset-from-storage",844386523))){
var data = cljs.core.nth.call(null,action,(1));
return data;
} else {
throw cljs.core.match.backtrack;

}
}catch (e26387){if((e26387 instanceof Error)){
var e__18365__auto__ = e26387;
if((e__18365__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__18365__auto__;
}
} else {
throw e26387;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26386){if((e26386 instanceof Error)){
var e__18365__auto__ = e26386;
if((e__18365__auto__ === cljs.core.match.backtrack)){
var result = reconcile.call(null,model,action);
var whitelist = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,result)),save_blacklist);
cljs.core.assoc_BANG_.call(null,storage,key,cljs.core.select_keys.call(null,result,whitelist));

return result;
} else {
throw e__18365__auto__;
}
} else {
throw e26386;

}
}});
});

//# sourceMappingURL=persistence_middleware.js.map?rel=1448343158823