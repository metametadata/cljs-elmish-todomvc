// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('hodgepodge.core');
goog.require('frontend.persistence_middleware');
goog.require('frontend.router');
goog.require('frontend.devtools');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('frontend.todos');
goog.require('frontend.ui');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
frontend.core.main = (function frontend$core$main(){
cljs.core.println.call(null,"Hi.");

goog.events.removeAll(frontend.router.history);

var storage = hodgepodge.core.local_storage;
var app = frontend.ui.connect_reactive_reagent.call(null,frontend.ui.wrap_log.call(null,frontend.devtools.new_spec.call(null,frontend.ui.wrap_log.call(null,frontend.persistence_middleware.wrap.call(null,frontend.todos.new_spec.call(null,frontend.router.history),storage,new cljs.core.Keyword(null,"model","model",331153215),null),"   [app]"),storage,new cljs.core.Keyword(null,"devtools","devtools",-1870878518)),"[devtools]"),cljs.core.PersistentVector.EMPTY);
goog.events.listen(frontend.router.history,goog.history.EventType.NAVIGATE,((function (storage,app){
return (function (p1__84228_SHARP_){
if(cljs.core.truth_(frontend.router._STAR_history_events_enabled_QMARK__STAR_)){
return new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591).cljs$core$IFn$_invoke$arity$1(app).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),p1__84228_SHARP_.token], null)], null));
} else {
return null;
}
});})(storage,app))
);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(app)], null),document.getElementById("root"));

return app;
});
frontend.core.app = frontend.core.main.call(null);
frontend.core.on_js_reload = (function frontend$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1452597653474