// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('hodgepodge.core');
goog.require('frontend.persistence_middleware');
goog.require('frontend.routing');
goog.require('frontend.devtools');
goog.require('reagent.core');
goog.require('frontend.todos');
goog.require('frontend.ui');
cljs.core.enable_console_print_BANG_.call(null);
frontend.core.main = (function frontend$core$main(){
cljs.core.println.call(null,"Hi.");

var history = frontend.routing.__GT_History.call(null);
var storage = hodgepodge.core.local_storage;
var app = frontend.ui.connect_reactive_reagent.call(null,frontend.ui.wrap_log.call(null,frontend.devtools.wrap.call(null,frontend.ui.wrap_log.call(null,frontend.persistence_middleware.wrap.call(null,frontend.routing.wrap.call(null,frontend.todos.spec,history),storage,new cljs.core.Keyword(null,"model","model",331153215),null),"   [app]"),storage,new cljs.core.Keyword(null,"devtools","devtools",-1870878518)),"[devtools]"),cljs.core.PersistentVector.EMPTY);
frontend.routing.start_signaling.call(null,history,app);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(app)], null),document.getElementById("root"));

return app;
});
frontend.core.app = frontend.core.main.call(null);
frontend.core.on_js_reload = (function frontend$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1452772448153