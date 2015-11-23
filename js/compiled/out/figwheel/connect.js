// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('frontend.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__44366__delegate = function (x){
if(cljs.core.truth_(frontend.core.on_js_reload)){
return cljs.core.apply.call(null,frontend.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'frontend.core/on-js-reload' is missing");
}
};
var G__44366 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__44367__i = 0, G__44367__a = new Array(arguments.length -  0);
while (G__44367__i < G__44367__a.length) {G__44367__a[G__44367__i] = arguments[G__44367__i + 0]; ++G__44367__i;}
  x = new cljs.core.IndexedSeq(G__44367__a,0);
} 
return G__44366__delegate.call(this,x);};
G__44366.cljs$lang$maxFixedArity = 0;
G__44366.cljs$lang$applyTo = (function (arglist__44368){
var x = cljs.core.seq(arglist__44368);
return G__44366__delegate(x);
});
G__44366.cljs$core$IFn$_invoke$arity$variadic = G__44366__delegate;
return G__44366;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1448242671486