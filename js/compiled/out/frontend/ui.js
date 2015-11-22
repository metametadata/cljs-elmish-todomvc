// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.pprint');
/**
 * Model must be immutable.
 *   Control can be a non-pure function.
 *   View-model, view and reconcile must be pure functions.
 *   Returns a map with:
 *    :view,
 *    :dispatch-signal (it can be used to dispatch signal not only from the view),
 *    :model ratom (this is exposed mainly for debugging),
 *    :dispatch-action (this is exposed mainly for debugging).
 * 
 *   Automatically fires an :on-connect signal.
 * 
 *   Data flow:
 *   model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model -> etc.
 */
frontend.ui.connect = (function frontend$ui$connect(model,view_model,view,control,reconcile){
var model_atom = reagent.core.atom.call(null,model);
var dispatch_action = ((function (model_atom){
return (function (a){
cljs.core.swap_BANG_.call(null,model_atom,reconcile,a);

return null;
});})(model_atom))
;
var dispatch_signal = ((function (model_atom,dispatch_action){
return (function (s){
control.call(null,cljs.core.deref.call(null,model_atom),s,dispatch_action);

return null;
});})(model_atom,dispatch_action))
;
var connected_view = ((function (model_atom,dispatch_action,dispatch_signal){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,view_model.call(null,cljs.core.deref.call(null,model_atom)),dispatch_signal], null);
});})(model_atom,dispatch_action,dispatch_signal))
;
dispatch_signal.call(null,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"view","view",1247994814),connected_view,new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591),dispatch_signal,new cljs.core.Keyword(null,"model","model",331153215),model_atom,new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601),dispatch_action], null);
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
frontend.ui.wrap_log_signals = (function frontend$ui$wrap_log_signals(control){
return (function frontend$ui$wrap_log_signals_$_wrapped_control(model,signal,dispatch){
cljs.core.println.call(null,"signal =",signal);

return control.call(null,model,signal,dispatch);
});
});
frontend.ui.wrap_log_actions = (function frontend$ui$wrap_log_actions(reconcile){
return (function frontend$ui$wrap_log_actions_$_wrapped_reconcile(model,action){
cljs.core.println.call(null,"  action =",action);

var result = reconcile.call(null,model,action);
return result;
});
});

//# sourceMappingURL=ui.js.map?rel=1448218677274