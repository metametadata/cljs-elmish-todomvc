// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('prod.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21391__delegate = function (x){
if(cljs.core.truth_(prod.core.on_js_reload)){
return cljs.core.apply.call(null,prod.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'prod.core/on-js-reload' is missing");
}
};
var G__21391 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21392__i = 0, G__21392__a = new Array(arguments.length -  0);
while (G__21392__i < G__21392__a.length) {G__21392__a[G__21392__i] = arguments[G__21392__i + 0]; ++G__21392__i;}
  x = new cljs.core.IndexedSeq(G__21392__a,0);
} 
return G__21391__delegate.call(this,x);};
G__21391.cljs$lang$maxFixedArity = 0;
G__21391.cljs$lang$applyTo = (function (arglist__21393){
var x = cljs.core.seq(arglist__21393);
return G__21391__delegate(x);
});
G__21391.cljs$core$IFn$_invoke$arity$variadic = G__21391__delegate;
return G__21391;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1453137990134