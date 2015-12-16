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
goog.require('frontend.ui');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof frontend.core.history !== 'undefined'){
} else {
frontend.core.history = (function (){var G__24940 = (new goog.history.Html5History());
G__24940.setEnabled(true);

return G__24940;
})();
}
frontend.core.main = (function frontend$core$main(){
cljs.core.println.call(null,"Hi.");

goog.events.removeAll(frontend.core.history);

var storage = hodgepodge.core.local_storage;
var app = frontend.ui.connect_reactive_reagent.call(null,frontend.devtools.new_spec.call(null,frontend.persistence_middleware.wrap.call(null,frontend.todos.new_spec.call(null,frontend.core.history),storage,new cljs.core.Keyword(null,"model","model",331153215),null),storage,new cljs.core.Keyword(null,"devtools","devtools",-1870878518)),cljs.core.PersistentVector.EMPTY);
goog.events.listen(frontend.core.history,goog.history.EventType.NAVIGATE,((function (storage,app){
return (function (p1__24941_SHARP_){
return new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591).cljs$core$IFn$_invoke$arity$1(app).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),p1__24941_SHARP_.token], null)], null));
});})(storage,app))
);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(app)], null),document.getElementById("root"));

return app;
});
frontend.core.app = frontend.core.main.call(null);
frontend.core.on_js_reload = (function frontend$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1450294855920