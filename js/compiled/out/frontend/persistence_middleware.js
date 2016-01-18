// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.persistence_middleware');
goog.require('cljs.core');
goog.require('cljs.core.match');
frontend.persistence_middleware._wrap_control = (function frontend$persistence_middleware$_wrap_control(component_control,storage,key,blacklist){
return (function frontend$persistence_middleware$_wrap_control_$_control(model,signal,dispatch){
var save = (function frontend$persistence_middleware$_wrap_control_$_control_$_save(result){
var save_whitelist = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,result)),blacklist);
return cljs.core.assoc_BANG_.call(null,storage,key,cljs.core.select_keys.call(null,result,save_whitelist));
});
var dispatch_and_save = (function frontend$persistence_middleware$_wrap_control_$_control_$_dispatch_and_save(action){
var result = dispatch.call(null,action);
save.call(null,result);

return result;
});
var save_and_control = (function frontend$persistence_middleware$_wrap_control_$_control_$_save_and_control(model__$1,signal__$1){
save.call(null,model__$1);

return component_control.call(null,model__$1,signal__$1,dispatch_and_save);
});
if(!(cljs.core._EQ_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)))){
return save_and_control.call(null,model,signal);
} else {
var storage_model = cljs.core.get.call(null,storage,key,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core._EQ_.call(null,storage_model,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
return save_and_control.call(null,model,signal);
} else {
var new_model = cljs.core.merge.call(null,storage_model,cljs.core.select_keys.call(null,model,blacklist));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.persistence-middleware","-reset-from-storage","frontend.persistence-middleware/-reset-from-storage",635771804),new_model], null));

return component_control.call(null,new_model,signal,dispatch_and_save);
}
}
});
});
frontend.persistence_middleware._wrap_reconcile = (function frontend$persistence_middleware$_wrap_reconcile(component_reconcile){
return (function frontend$persistence_middleware$_wrap_reconcile_$_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__21265 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21265,new cljs.core.Keyword("frontend.persistence-middleware","-reset-from-storage","frontend.persistence-middleware/-reset-from-storage",635771804))){
var data = cljs.core.nth.call(null,action,(1));
return data;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21268){if((e21268 instanceof Error)){
var e__20451__auto__ = e21268;
if((e__20451__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20451__auto__;
}
} else {
throw e21268;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21267){if((e21267 instanceof Error)){
var e__20451__auto__ = e21267;
if((e__20451__auto__ === cljs.core.match.backtrack)){
return component_reconcile.call(null,model,action);
} else {
throw e__20451__auto__;
}
} else {
throw e21267;

}
}});
});
/**
 * On :on-connect signal middleware will load the model from storage and send the signal further with updated model to the component.
 *   Blacklist should contain model keys which will not be saved and loaded.
 */
frontend.persistence_middleware.wrap = (function frontend$persistence_middleware$wrap(spec,storage,key,blacklist){
return cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),frontend.persistence_middleware._wrap_control,storage,key,blacklist),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.persistence_middleware._wrap_reconcile);
});

//# sourceMappingURL=persistence_middleware.js.map?rel=1453137577093