// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('frontend.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__35246__delegate = function (x){
if(cljs.core.truth_(frontend.core.on_js_reload)){
return cljs.core.apply.call(null,frontend.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'frontend.core/on-js-reload' is missing");
}
};
var G__35246 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__35247__i = 0, G__35247__a = new Array(arguments.length -  0);
while (G__35247__i < G__35247__a.length) {G__35247__a[G__35247__i] = arguments[G__35247__i + 0]; ++G__35247__i;}
  x = new cljs.core.IndexedSeq(G__35247__a,0);
} 
return G__35246__delegate.call(this,x);};
G__35246.cljs$lang$maxFixedArity = 0;
G__35246.cljs$lang$applyTo = (function (arglist__35248){
var x = cljs.core.seq(arglist__35248);
return G__35246__delegate(x);
});
G__35246.cljs$core$IFn$_invoke$arity$variadic = G__35246__delegate;
return G__35246;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1452534004523