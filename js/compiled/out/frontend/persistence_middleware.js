// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.persistence_middleware');
goog.require('cljs.core');
goog.require('cljs.core.match');
frontend.persistence_middleware.wrap_control = (function frontend$persistence_middleware$wrap_control(control,storage){
return (function frontend$persistence_middleware$wrap_control_$_control_reconcile(model,signal,dispatch){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),signal)){
var storage_model_32560 = cljs.core.get.call(null,storage,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core._EQ_.call(null,storage_model_32560,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
} else {
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-from-storage","reset-from-storage",844386523),storage_model_32560], null));
}
} else {
}

return control.call(null,model,signal,dispatch);
});
});
frontend.persistence_middleware.wrap_reconcile = (function frontend$persistence_middleware$wrap_reconcile(reconcile,storage){
return (function frontend$persistence_middleware$wrap_reconcile_$_wrapped_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__32577 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__32577,new cljs.core.Keyword(null,"reset-from-storage","reset-from-storage",844386523))){
var data = cljs.core.nth.call(null,action,(1));
return data;
} else {
throw cljs.core.match.backtrack;

}
}catch (e32580){if((e32580 instanceof Error)){
var e__21825__auto__ = e32580;
if((e__21825__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__21825__auto__;
}
} else {
throw e32580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32579){if((e32579 instanceof Error)){
var e__21825__auto__ = e32579;
if((e__21825__auto__ === cljs.core.match.backtrack)){
var result = reconcile.call(null,model,action);
cljs.core.assoc_BANG_.call(null,storage,new cljs.core.Keyword(null,"model","model",331153215),result);

return result;
} else {
throw e__21825__auto__;
}
} else {
throw e32579;

}
}});
});

//# sourceMappingURL=persistence_middleware.js.map?rel=1448221557537