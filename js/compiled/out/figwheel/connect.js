// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('frontend.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21436__delegate = function (x){
if(cljs.core.truth_(frontend.core.on_js_reload)){
return cljs.core.apply.call(null,frontend.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'frontend.core/on-js-reload' is missing");
}
};
var G__21436 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21437__i = 0, G__21437__a = new Array(arguments.length -  0);
while (G__21437__i < G__21437__a.length) {G__21437__a[G__21437__i] = arguments[G__21437__i + 0]; ++G__21437__i;}
  x = new cljs.core.IndexedSeq(G__21437__a,0);
} 
return G__21436__delegate.call(this,x);};
G__21436.cljs$lang$maxFixedArity = 0;
G__21436.cljs$lang$applyTo = (function (arglist__21438){
var x = cljs.core.seq(arglist__21438);
return G__21436__delegate(x);
});
G__21436.cljs$core$IFn$_invoke$arity$variadic = G__21436__delegate;
return G__21436;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1452800084064