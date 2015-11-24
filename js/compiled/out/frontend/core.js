// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('hodgepodge.core');
goog.require('frontend.persistence_middleware');
goog.require('goog.history.Html5History');
goog.require('frontend.devtools');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('frontend.todos');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof frontend.core.history !== 'undefined'){
} else {
frontend.core.history = (function (){var G__30933 = (new goog.history.Html5History());
G__30933.setEnabled(true);

return G__30933;
})();
}
frontend.core.main = (function frontend$core$main(){
cljs.core.println.call(null,"Hi.");

var storage = hodgepodge.core.local_storage;
var vec__30936 = frontend.todos.init.call(null);
var _ = cljs.core.nth.call(null,vec__30936,(0),null);
var todos_initial_signal = cljs.core.nth.call(null,vec__30936,(1),null);
var todos_initial = vec__30936;
var app = frontend.devtools.connect.call(null,todos_initial,frontend.todos.view_model,frontend.todos.view,frontend.persistence_middleware.wrap_control.call(null,frontend.todos.new_control.call(null,frontend.core.history),todos_initial_signal,storage,new cljs.core.Keyword(null,"model","model",331153215),null),frontend.persistence_middleware.wrap_reconcile.call(null,frontend.todos.reconcile,storage,new cljs.core.Keyword(null,"model","model",331153215),null),storage);
var dispatch_navigate = ((function (storage,vec__30936,_,todos_initial_signal,todos_initial,app){
return (function frontend$core$main_$_dispatch_navigate(token){
return new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591).cljs$core$IFn$_invoke$arity$1(app).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),token], null)], null));
});})(storage,vec__30936,_,todos_initial_signal,todos_initial,app))
;
goog.events.removeAll(frontend.core.history);

goog.events.listen(frontend.core.history,goog.history.EventType.NAVIGATE,((function (storage,vec__30936,_,todos_initial_signal,todos_initial,app){
return (function (p1__30934_SHARP_){
return dispatch_navigate.call(null,p1__30934_SHARP_.token);
});})(storage,vec__30936,_,todos_initial_signal,todos_initial,app))
);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(app)], null),document.getElementById("root"));

return app;
});
frontend.core.app = frontend.core.main.call(null);
frontend.core.on_js_reload = (function frontend$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1448346832385