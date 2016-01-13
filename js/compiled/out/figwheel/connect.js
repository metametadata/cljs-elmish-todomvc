// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('frontend.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__103385__delegate = function (x){
if(cljs.core.truth_(frontend.core.on_js_reload)){
return cljs.core.apply.call(null,frontend.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'frontend.core/on-js-reload' is missing");
}
};
var G__103385 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__103386__i = 0, G__103386__a = new Array(arguments.length -  0);
while (G__103386__i < G__103386__a.length) {G__103386__a[G__103386__i] = arguments[G__103386__i + 0]; ++G__103386__i;}
  x = new cljs.core.IndexedSeq(G__103386__a,0);
} 
return G__103385__delegate.call(this,x);};
G__103385.cljs$lang$maxFixedArity = 0;
G__103385.cljs$lang$applyTo = (function (arglist__103387){
var x = cljs.core.seq(arglist__103387);
return G__103385__delegate(x);
});
G__103385.cljs$core$IFn$_invoke$arity$variadic = G__103385__delegate;
return G__103385;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1452715031543