// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20190__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20190__auto__){
return or__20190__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20190__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20190__auto__)){
return or__20190__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30310_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30310_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30315 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30316 = null;
var count__30317 = (0);
var i__30318 = (0);
while(true){
if((i__30318 < count__30317)){
var n = cljs.core._nth.call(null,chunk__30316,i__30318);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30319 = seq__30315;
var G__30320 = chunk__30316;
var G__30321 = count__30317;
var G__30322 = (i__30318 + (1));
seq__30315 = G__30319;
chunk__30316 = G__30320;
count__30317 = G__30321;
i__30318 = G__30322;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30315);
if(temp__4425__auto__){
var seq__30315__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30315__$1)){
var c__20993__auto__ = cljs.core.chunk_first.call(null,seq__30315__$1);
var G__30323 = cljs.core.chunk_rest.call(null,seq__30315__$1);
var G__30324 = c__20993__auto__;
var G__30325 = cljs.core.count.call(null,c__20993__auto__);
var G__30326 = (0);
seq__30315 = G__30323;
chunk__30316 = G__30324;
count__30317 = G__30325;
i__30318 = G__30326;
continue;
} else {
var n = cljs.core.first.call(null,seq__30315__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30327 = cljs.core.next.call(null,seq__30315__$1);
var G__30328 = null;
var G__30329 = (0);
var G__30330 = (0);
seq__30315 = G__30327;
chunk__30316 = G__30328;
count__30317 = G__30329;
i__30318 = G__30330;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30369_30376 = cljs.core.seq.call(null,deps);
var chunk__30370_30377 = null;
var count__30371_30378 = (0);
var i__30372_30379 = (0);
while(true){
if((i__30372_30379 < count__30371_30378)){
var dep_30380 = cljs.core._nth.call(null,chunk__30370_30377,i__30372_30379);
topo_sort_helper_STAR_.call(null,dep_30380,(depth + (1)),state);

var G__30381 = seq__30369_30376;
var G__30382 = chunk__30370_30377;
var G__30383 = count__30371_30378;
var G__30384 = (i__30372_30379 + (1));
seq__30369_30376 = G__30381;
chunk__30370_30377 = G__30382;
count__30371_30378 = G__30383;
i__30372_30379 = G__30384;
continue;
} else {
var temp__4425__auto___30385 = cljs.core.seq.call(null,seq__30369_30376);
if(temp__4425__auto___30385){
var seq__30369_30386__$1 = temp__4425__auto___30385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30369_30386__$1)){
var c__20993__auto___30387 = cljs.core.chunk_first.call(null,seq__30369_30386__$1);
var G__30388 = cljs.core.chunk_rest.call(null,seq__30369_30386__$1);
var G__30389 = c__20993__auto___30387;
var G__30390 = cljs.core.count.call(null,c__20993__auto___30387);
var G__30391 = (0);
seq__30369_30376 = G__30388;
chunk__30370_30377 = G__30389;
count__30371_30378 = G__30390;
i__30372_30379 = G__30391;
continue;
} else {
var dep_30392 = cljs.core.first.call(null,seq__30369_30386__$1);
topo_sort_helper_STAR_.call(null,dep_30392,(depth + (1)),state);

var G__30393 = cljs.core.next.call(null,seq__30369_30386__$1);
var G__30394 = null;
var G__30395 = (0);
var G__30396 = (0);
seq__30369_30376 = G__30393;
chunk__30370_30377 = G__30394;
count__30371_30378 = G__30395;
i__30372_30379 = G__30396;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30373){
var vec__30375 = p__30373;
var x = cljs.core.nth.call(null,vec__30375,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30375,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30375,x,xs,get_deps__$1){
return (function (p1__30331_SHARP_){
return clojure.set.difference.call(null,p1__30331_SHARP_,x);
});})(vec__30375,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30409 = cljs.core.seq.call(null,provides);
var chunk__30410 = null;
var count__30411 = (0);
var i__30412 = (0);
while(true){
if((i__30412 < count__30411)){
var prov = cljs.core._nth.call(null,chunk__30410,i__30412);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30413_30421 = cljs.core.seq.call(null,requires);
var chunk__30414_30422 = null;
var count__30415_30423 = (0);
var i__30416_30424 = (0);
while(true){
if((i__30416_30424 < count__30415_30423)){
var req_30425 = cljs.core._nth.call(null,chunk__30414_30422,i__30416_30424);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30425,prov);

var G__30426 = seq__30413_30421;
var G__30427 = chunk__30414_30422;
var G__30428 = count__30415_30423;
var G__30429 = (i__30416_30424 + (1));
seq__30413_30421 = G__30426;
chunk__30414_30422 = G__30427;
count__30415_30423 = G__30428;
i__30416_30424 = G__30429;
continue;
} else {
var temp__4425__auto___30430 = cljs.core.seq.call(null,seq__30413_30421);
if(temp__4425__auto___30430){
var seq__30413_30431__$1 = temp__4425__auto___30430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30413_30431__$1)){
var c__20993__auto___30432 = cljs.core.chunk_first.call(null,seq__30413_30431__$1);
var G__30433 = cljs.core.chunk_rest.call(null,seq__30413_30431__$1);
var G__30434 = c__20993__auto___30432;
var G__30435 = cljs.core.count.call(null,c__20993__auto___30432);
var G__30436 = (0);
seq__30413_30421 = G__30433;
chunk__30414_30422 = G__30434;
count__30415_30423 = G__30435;
i__30416_30424 = G__30436;
continue;
} else {
var req_30437 = cljs.core.first.call(null,seq__30413_30431__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30437,prov);

var G__30438 = cljs.core.next.call(null,seq__30413_30431__$1);
var G__30439 = null;
var G__30440 = (0);
var G__30441 = (0);
seq__30413_30421 = G__30438;
chunk__30414_30422 = G__30439;
count__30415_30423 = G__30440;
i__30416_30424 = G__30441;
continue;
}
} else {
}
}
break;
}

var G__30442 = seq__30409;
var G__30443 = chunk__30410;
var G__30444 = count__30411;
var G__30445 = (i__30412 + (1));
seq__30409 = G__30442;
chunk__30410 = G__30443;
count__30411 = G__30444;
i__30412 = G__30445;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30409);
if(temp__4425__auto__){
var seq__30409__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30409__$1)){
var c__20993__auto__ = cljs.core.chunk_first.call(null,seq__30409__$1);
var G__30446 = cljs.core.chunk_rest.call(null,seq__30409__$1);
var G__30447 = c__20993__auto__;
var G__30448 = cljs.core.count.call(null,c__20993__auto__);
var G__30449 = (0);
seq__30409 = G__30446;
chunk__30410 = G__30447;
count__30411 = G__30448;
i__30412 = G__30449;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30409__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30417_30450 = cljs.core.seq.call(null,requires);
var chunk__30418_30451 = null;
var count__30419_30452 = (0);
var i__30420_30453 = (0);
while(true){
if((i__30420_30453 < count__30419_30452)){
var req_30454 = cljs.core._nth.call(null,chunk__30418_30451,i__30420_30453);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30454,prov);

var G__30455 = seq__30417_30450;
var G__30456 = chunk__30418_30451;
var G__30457 = count__30419_30452;
var G__30458 = (i__30420_30453 + (1));
seq__30417_30450 = G__30455;
chunk__30418_30451 = G__30456;
count__30419_30452 = G__30457;
i__30420_30453 = G__30458;
continue;
} else {
var temp__4425__auto___30459__$1 = cljs.core.seq.call(null,seq__30417_30450);
if(temp__4425__auto___30459__$1){
var seq__30417_30460__$1 = temp__4425__auto___30459__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30417_30460__$1)){
var c__20993__auto___30461 = cljs.core.chunk_first.call(null,seq__30417_30460__$1);
var G__30462 = cljs.core.chunk_rest.call(null,seq__30417_30460__$1);
var G__30463 = c__20993__auto___30461;
var G__30464 = cljs.core.count.call(null,c__20993__auto___30461);
var G__30465 = (0);
seq__30417_30450 = G__30462;
chunk__30418_30451 = G__30463;
count__30419_30452 = G__30464;
i__30420_30453 = G__30465;
continue;
} else {
var req_30466 = cljs.core.first.call(null,seq__30417_30460__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30466,prov);

var G__30467 = cljs.core.next.call(null,seq__30417_30460__$1);
var G__30468 = null;
var G__30469 = (0);
var G__30470 = (0);
seq__30417_30450 = G__30467;
chunk__30418_30451 = G__30468;
count__30419_30452 = G__30469;
i__30420_30453 = G__30470;
continue;
}
} else {
}
}
break;
}

var G__30471 = cljs.core.next.call(null,seq__30409__$1);
var G__30472 = null;
var G__30473 = (0);
var G__30474 = (0);
seq__30409 = G__30471;
chunk__30410 = G__30472;
count__30411 = G__30473;
i__30412 = G__30474;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30479_30483 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30480_30484 = null;
var count__30481_30485 = (0);
var i__30482_30486 = (0);
while(true){
if((i__30482_30486 < count__30481_30485)){
var ns_30487 = cljs.core._nth.call(null,chunk__30480_30484,i__30482_30486);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30487);

var G__30488 = seq__30479_30483;
var G__30489 = chunk__30480_30484;
var G__30490 = count__30481_30485;
var G__30491 = (i__30482_30486 + (1));
seq__30479_30483 = G__30488;
chunk__30480_30484 = G__30489;
count__30481_30485 = G__30490;
i__30482_30486 = G__30491;
continue;
} else {
var temp__4425__auto___30492 = cljs.core.seq.call(null,seq__30479_30483);
if(temp__4425__auto___30492){
var seq__30479_30493__$1 = temp__4425__auto___30492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30479_30493__$1)){
var c__20993__auto___30494 = cljs.core.chunk_first.call(null,seq__30479_30493__$1);
var G__30495 = cljs.core.chunk_rest.call(null,seq__30479_30493__$1);
var G__30496 = c__20993__auto___30494;
var G__30497 = cljs.core.count.call(null,c__20993__auto___30494);
var G__30498 = (0);
seq__30479_30483 = G__30495;
chunk__30480_30484 = G__30496;
count__30481_30485 = G__30497;
i__30482_30486 = G__30498;
continue;
} else {
var ns_30499 = cljs.core.first.call(null,seq__30479_30493__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30499);

var G__30500 = cljs.core.next.call(null,seq__30479_30493__$1);
var G__30501 = null;
var G__30502 = (0);
var G__30503 = (0);
seq__30479_30483 = G__30500;
chunk__30480_30484 = G__30501;
count__30481_30485 = G__30502;
i__30482_30486 = G__30503;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20190__auto__ = goog.require__;
if(cljs.core.truth_(or__20190__auto__)){
return or__20190__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30504__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30505__i = 0, G__30505__a = new Array(arguments.length -  0);
while (G__30505__i < G__30505__a.length) {G__30505__a[G__30505__i] = arguments[G__30505__i + 0]; ++G__30505__i;}
  args = new cljs.core.IndexedSeq(G__30505__a,0);
} 
return G__30504__delegate.call(this,args);};
G__30504.cljs$lang$maxFixedArity = 0;
G__30504.cljs$lang$applyTo = (function (arglist__30506){
var args = cljs.core.seq(arglist__30506);
return G__30504__delegate(args);
});
G__30504.cljs$core$IFn$_invoke$arity$variadic = G__30504__delegate;
return G__30504;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30508 = cljs.core._EQ_;
var expr__30509 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30508.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30509))){
var path_parts = ((function (pred__30508,expr__30509){
return (function (p1__30507_SHARP_){
return clojure.string.split.call(null,p1__30507_SHARP_,/[\/\\]/);
});})(pred__30508,expr__30509))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30508,expr__30509){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30511){if((e30511 instanceof Error)){
var e = e30511;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30511;

}
}})());
});
;})(path_parts,sep,root,pred__30508,expr__30509))
} else {
if(cljs.core.truth_(pred__30508.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30509))){
return ((function (pred__30508,expr__30509){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30508,expr__30509){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30508,expr__30509))
);

return deferred.addErrback(((function (deferred,pred__30508,expr__30509){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30508,expr__30509))
);
});
;})(pred__30508,expr__30509))
} else {
return ((function (pred__30508,expr__30509){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30508,expr__30509))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30512,callback){
var map__30515 = p__30512;
var map__30515__$1 = ((((!((map__30515 == null)))?((((map__30515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30515):map__30515);
var file_msg = map__30515__$1;
var request_url = cljs.core.get.call(null,map__30515__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30515,map__30515__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30515,map__30515__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto__){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto__){
return (function (state_30539){
var state_val_30540 = (state_30539[(1)]);
if((state_val_30540 === (7))){
var inst_30535 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
var statearr_30541_30561 = state_30539__$1;
(statearr_30541_30561[(2)] = inst_30535);

(statearr_30541_30561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (1))){
var state_30539__$1 = state_30539;
var statearr_30542_30562 = state_30539__$1;
(statearr_30542_30562[(2)] = null);

(statearr_30542_30562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (4))){
var inst_30519 = (state_30539[(7)]);
var inst_30519__$1 = (state_30539[(2)]);
var state_30539__$1 = (function (){var statearr_30543 = state_30539;
(statearr_30543[(7)] = inst_30519__$1);

return statearr_30543;
})();
if(cljs.core.truth_(inst_30519__$1)){
var statearr_30544_30563 = state_30539__$1;
(statearr_30544_30563[(1)] = (5));

} else {
var statearr_30545_30564 = state_30539__$1;
(statearr_30545_30564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (6))){
var state_30539__$1 = state_30539;
var statearr_30546_30565 = state_30539__$1;
(statearr_30546_30565[(2)] = null);

(statearr_30546_30565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (3))){
var inst_30537 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30539__$1,inst_30537);
} else {
if((state_val_30540 === (2))){
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30539__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30540 === (11))){
var inst_30531 = (state_30539[(2)]);
var state_30539__$1 = (function (){var statearr_30547 = state_30539;
(statearr_30547[(8)] = inst_30531);

return statearr_30547;
})();
var statearr_30548_30566 = state_30539__$1;
(statearr_30548_30566[(2)] = null);

(statearr_30548_30566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (9))){
var inst_30523 = (state_30539[(9)]);
var inst_30525 = (state_30539[(10)]);
var inst_30527 = inst_30525.call(null,inst_30523);
var state_30539__$1 = state_30539;
var statearr_30549_30567 = state_30539__$1;
(statearr_30549_30567[(2)] = inst_30527);

(statearr_30549_30567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (5))){
var inst_30519 = (state_30539[(7)]);
var inst_30521 = figwheel.client.file_reloading.blocking_load.call(null,inst_30519);
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30539__$1,(8),inst_30521);
} else {
if((state_val_30540 === (10))){
var inst_30523 = (state_30539[(9)]);
var inst_30529 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30523);
var state_30539__$1 = state_30539;
var statearr_30550_30568 = state_30539__$1;
(statearr_30550_30568[(2)] = inst_30529);

(statearr_30550_30568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (8))){
var inst_30519 = (state_30539[(7)]);
var inst_30525 = (state_30539[(10)]);
var inst_30523 = (state_30539[(2)]);
var inst_30524 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30525__$1 = cljs.core.get.call(null,inst_30524,inst_30519);
var state_30539__$1 = (function (){var statearr_30551 = state_30539;
(statearr_30551[(9)] = inst_30523);

(statearr_30551[(10)] = inst_30525__$1);

return statearr_30551;
})();
if(cljs.core.truth_(inst_30525__$1)){
var statearr_30552_30569 = state_30539__$1;
(statearr_30552_30569[(1)] = (9));

} else {
var statearr_30553_30570 = state_30539__$1;
(statearr_30553_30570[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27477__auto__))
;
return ((function (switch__27365__auto__,c__27477__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27366__auto__ = null;
var figwheel$client$file_reloading$state_machine__27366__auto____0 = (function (){
var statearr_30557 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30557[(0)] = figwheel$client$file_reloading$state_machine__27366__auto__);

(statearr_30557[(1)] = (1));

return statearr_30557;
});
var figwheel$client$file_reloading$state_machine__27366__auto____1 = (function (state_30539){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_30539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e30558){if((e30558 instanceof Object)){
var ex__27369__auto__ = e30558;
var statearr_30559_30571 = state_30539;
(statearr_30559_30571[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30572 = state_30539;
state_30539 = G__30572;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27366__auto__ = function(state_30539){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27366__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27366__auto____1.call(this,state_30539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27366__auto____0;
figwheel$client$file_reloading$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27366__auto____1;
return figwheel$client$file_reloading$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto__))
})();
var state__27479__auto__ = (function (){var statearr_30560 = f__27478__auto__.call(null);
(statearr_30560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto__);

return statearr_30560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto__))
);

return c__27477__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30573,callback){
var map__30576 = p__30573;
var map__30576__$1 = ((((!((map__30576 == null)))?((((map__30576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30576):map__30576);
var file_msg = map__30576__$1;
var namespace = cljs.core.get.call(null,map__30576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30576,map__30576__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30576,map__30576__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30578){
var map__30581 = p__30578;
var map__30581__$1 = ((((!((map__30581 == null)))?((((map__30581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30581):map__30581);
var file_msg = map__30581__$1;
var namespace = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20178__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20178__auto__){
var or__20190__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20190__auto__)){
return or__20190__auto__;
} else {
var or__20190__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20190__auto____$1)){
return or__20190__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20178__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30583,callback){
var map__30586 = p__30583;
var map__30586__$1 = ((((!((map__30586 == null)))?((((map__30586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30586):map__30586);
var file_msg = map__30586__$1;
var request_url = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27477__auto___30674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___30674,out){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___30674,out){
return (function (state_30656){
var state_val_30657 = (state_30656[(1)]);
if((state_val_30657 === (1))){
var inst_30634 = cljs.core.nth.call(null,files,(0),null);
var inst_30635 = cljs.core.nthnext.call(null,files,(1));
var inst_30636 = files;
var state_30656__$1 = (function (){var statearr_30658 = state_30656;
(statearr_30658[(7)] = inst_30636);

(statearr_30658[(8)] = inst_30635);

(statearr_30658[(9)] = inst_30634);

return statearr_30658;
})();
var statearr_30659_30675 = state_30656__$1;
(statearr_30659_30675[(2)] = null);

(statearr_30659_30675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (2))){
var inst_30639 = (state_30656[(10)]);
var inst_30636 = (state_30656[(7)]);
var inst_30639__$1 = cljs.core.nth.call(null,inst_30636,(0),null);
var inst_30640 = cljs.core.nthnext.call(null,inst_30636,(1));
var inst_30641 = (inst_30639__$1 == null);
var inst_30642 = cljs.core.not.call(null,inst_30641);
var state_30656__$1 = (function (){var statearr_30660 = state_30656;
(statearr_30660[(10)] = inst_30639__$1);

(statearr_30660[(11)] = inst_30640);

return statearr_30660;
})();
if(inst_30642){
var statearr_30661_30676 = state_30656__$1;
(statearr_30661_30676[(1)] = (4));

} else {
var statearr_30662_30677 = state_30656__$1;
(statearr_30662_30677[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (3))){
var inst_30654 = (state_30656[(2)]);
var state_30656__$1 = state_30656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30656__$1,inst_30654);
} else {
if((state_val_30657 === (4))){
var inst_30639 = (state_30656[(10)]);
var inst_30644 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30639);
var state_30656__$1 = state_30656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30656__$1,(7),inst_30644);
} else {
if((state_val_30657 === (5))){
var inst_30650 = cljs.core.async.close_BANG_.call(null,out);
var state_30656__$1 = state_30656;
var statearr_30663_30678 = state_30656__$1;
(statearr_30663_30678[(2)] = inst_30650);

(statearr_30663_30678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (6))){
var inst_30652 = (state_30656[(2)]);
var state_30656__$1 = state_30656;
var statearr_30664_30679 = state_30656__$1;
(statearr_30664_30679[(2)] = inst_30652);

(statearr_30664_30679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (7))){
var inst_30640 = (state_30656[(11)]);
var inst_30646 = (state_30656[(2)]);
var inst_30647 = cljs.core.async.put_BANG_.call(null,out,inst_30646);
var inst_30636 = inst_30640;
var state_30656__$1 = (function (){var statearr_30665 = state_30656;
(statearr_30665[(12)] = inst_30647);

(statearr_30665[(7)] = inst_30636);

return statearr_30665;
})();
var statearr_30666_30680 = state_30656__$1;
(statearr_30666_30680[(2)] = null);

(statearr_30666_30680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27477__auto___30674,out))
;
return ((function (switch__27365__auto__,c__27477__auto___30674,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto____0 = (function (){
var statearr_30670 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30670[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto__);

(statearr_30670[(1)] = (1));

return statearr_30670;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto____1 = (function (state_30656){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_30656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e30671){if((e30671 instanceof Object)){
var ex__27369__auto__ = e30671;
var statearr_30672_30681 = state_30656;
(statearr_30672_30681[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30682 = state_30656;
state_30656 = G__30682;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto__ = function(state_30656){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto____1.call(this,state_30656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___30674,out))
})();
var state__27479__auto__ = (function (){var statearr_30673 = f__27478__auto__.call(null);
(statearr_30673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___30674);

return statearr_30673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___30674,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30683,opts){
var map__30687 = p__30683;
var map__30687__$1 = ((((!((map__30687 == null)))?((((map__30687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30687):map__30687);
var eval_body__$1 = cljs.core.get.call(null,map__30687__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30687__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20178__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20178__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20178__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30689){var e = e30689;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30690_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30690_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30695){
var vec__30696 = p__30695;
var k = cljs.core.nth.call(null,vec__30696,(0),null);
var v = cljs.core.nth.call(null,vec__30696,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30697){
var vec__30698 = p__30697;
var k = cljs.core.nth.call(null,vec__30698,(0),null);
var v = cljs.core.nth.call(null,vec__30698,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30702,p__30703){
var map__30950 = p__30702;
var map__30950__$1 = ((((!((map__30950 == null)))?((((map__30950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30950):map__30950);
var opts = map__30950__$1;
var before_jsload = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30951 = p__30703;
var map__30951__$1 = ((((!((map__30951 == null)))?((((map__30951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30951):map__30951);
var msg = map__30951__$1;
var files = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31104){
var state_val_31105 = (state_31104[(1)]);
if((state_val_31105 === (7))){
var inst_30968 = (state_31104[(7)]);
var inst_30966 = (state_31104[(8)]);
var inst_30965 = (state_31104[(9)]);
var inst_30967 = (state_31104[(10)]);
var inst_30973 = cljs.core._nth.call(null,inst_30966,inst_30968);
var inst_30974 = figwheel.client.file_reloading.eval_body.call(null,inst_30973,opts);
var inst_30975 = (inst_30968 + (1));
var tmp31106 = inst_30966;
var tmp31107 = inst_30965;
var tmp31108 = inst_30967;
var inst_30965__$1 = tmp31107;
var inst_30966__$1 = tmp31106;
var inst_30967__$1 = tmp31108;
var inst_30968__$1 = inst_30975;
var state_31104__$1 = (function (){var statearr_31109 = state_31104;
(statearr_31109[(7)] = inst_30968__$1);

(statearr_31109[(8)] = inst_30966__$1);

(statearr_31109[(9)] = inst_30965__$1);

(statearr_31109[(10)] = inst_30967__$1);

(statearr_31109[(11)] = inst_30974);

return statearr_31109;
})();
var statearr_31110_31196 = state_31104__$1;
(statearr_31110_31196[(2)] = null);

(statearr_31110_31196[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (20))){
var inst_31008 = (state_31104[(12)]);
var inst_31016 = figwheel.client.file_reloading.sort_files.call(null,inst_31008);
var state_31104__$1 = state_31104;
var statearr_31111_31197 = state_31104__$1;
(statearr_31111_31197[(2)] = inst_31016);

(statearr_31111_31197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (27))){
var state_31104__$1 = state_31104;
var statearr_31112_31198 = state_31104__$1;
(statearr_31112_31198[(2)] = null);

(statearr_31112_31198[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (1))){
var inst_30957 = (state_31104[(13)]);
var inst_30954 = before_jsload.call(null,files);
var inst_30955 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30956 = (function (){return ((function (inst_30957,inst_30954,inst_30955,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30699_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30699_SHARP_);
});
;})(inst_30957,inst_30954,inst_30955,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30957__$1 = cljs.core.filter.call(null,inst_30956,files);
var inst_30958 = cljs.core.not_empty.call(null,inst_30957__$1);
var state_31104__$1 = (function (){var statearr_31113 = state_31104;
(statearr_31113[(14)] = inst_30954);

(statearr_31113[(13)] = inst_30957__$1);

(statearr_31113[(15)] = inst_30955);

return statearr_31113;
})();
if(cljs.core.truth_(inst_30958)){
var statearr_31114_31199 = state_31104__$1;
(statearr_31114_31199[(1)] = (2));

} else {
var statearr_31115_31200 = state_31104__$1;
(statearr_31115_31200[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (24))){
var state_31104__$1 = state_31104;
var statearr_31116_31201 = state_31104__$1;
(statearr_31116_31201[(2)] = null);

(statearr_31116_31201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (39))){
var inst_31058 = (state_31104[(16)]);
var state_31104__$1 = state_31104;
var statearr_31117_31202 = state_31104__$1;
(statearr_31117_31202[(2)] = inst_31058);

(statearr_31117_31202[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (46))){
var inst_31099 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
var statearr_31118_31203 = state_31104__$1;
(statearr_31118_31203[(2)] = inst_31099);

(statearr_31118_31203[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (4))){
var inst_31002 = (state_31104[(2)]);
var inst_31003 = cljs.core.List.EMPTY;
var inst_31004 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31003);
var inst_31005 = (function (){return ((function (inst_31002,inst_31003,inst_31004,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30700_SHARP_){
var and__20178__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30700_SHARP_);
if(cljs.core.truth_(and__20178__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30700_SHARP_));
} else {
return and__20178__auto__;
}
});
;})(inst_31002,inst_31003,inst_31004,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31006 = cljs.core.filter.call(null,inst_31005,files);
var inst_31007 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31008 = cljs.core.concat.call(null,inst_31006,inst_31007);
var state_31104__$1 = (function (){var statearr_31119 = state_31104;
(statearr_31119[(17)] = inst_31004);

(statearr_31119[(18)] = inst_31002);

(statearr_31119[(12)] = inst_31008);

return statearr_31119;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31120_31204 = state_31104__$1;
(statearr_31120_31204[(1)] = (16));

} else {
var statearr_31121_31205 = state_31104__$1;
(statearr_31121_31205[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (15))){
var inst_30992 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
var statearr_31122_31206 = state_31104__$1;
(statearr_31122_31206[(2)] = inst_30992);

(statearr_31122_31206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (21))){
var inst_31018 = (state_31104[(19)]);
var inst_31018__$1 = (state_31104[(2)]);
var inst_31019 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31018__$1);
var state_31104__$1 = (function (){var statearr_31123 = state_31104;
(statearr_31123[(19)] = inst_31018__$1);

return statearr_31123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31104__$1,(22),inst_31019);
} else {
if((state_val_31105 === (31))){
var inst_31102 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31104__$1,inst_31102);
} else {
if((state_val_31105 === (32))){
var inst_31058 = (state_31104[(16)]);
var inst_31063 = inst_31058.cljs$lang$protocol_mask$partition0$;
var inst_31064 = (inst_31063 & (64));
var inst_31065 = inst_31058.cljs$core$ISeq$;
var inst_31066 = (inst_31064) || (inst_31065);
var state_31104__$1 = state_31104;
if(cljs.core.truth_(inst_31066)){
var statearr_31124_31207 = state_31104__$1;
(statearr_31124_31207[(1)] = (35));

} else {
var statearr_31125_31208 = state_31104__$1;
(statearr_31125_31208[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (40))){
var inst_31079 = (state_31104[(20)]);
var inst_31078 = (state_31104[(2)]);
var inst_31079__$1 = cljs.core.get.call(null,inst_31078,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31080 = cljs.core.get.call(null,inst_31078,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31081 = cljs.core.not_empty.call(null,inst_31079__$1);
var state_31104__$1 = (function (){var statearr_31126 = state_31104;
(statearr_31126[(20)] = inst_31079__$1);

(statearr_31126[(21)] = inst_31080);

return statearr_31126;
})();
if(cljs.core.truth_(inst_31081)){
var statearr_31127_31209 = state_31104__$1;
(statearr_31127_31209[(1)] = (41));

} else {
var statearr_31128_31210 = state_31104__$1;
(statearr_31128_31210[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (33))){
var state_31104__$1 = state_31104;
var statearr_31129_31211 = state_31104__$1;
(statearr_31129_31211[(2)] = false);

(statearr_31129_31211[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (13))){
var inst_30978 = (state_31104[(22)]);
var inst_30982 = cljs.core.chunk_first.call(null,inst_30978);
var inst_30983 = cljs.core.chunk_rest.call(null,inst_30978);
var inst_30984 = cljs.core.count.call(null,inst_30982);
var inst_30965 = inst_30983;
var inst_30966 = inst_30982;
var inst_30967 = inst_30984;
var inst_30968 = (0);
var state_31104__$1 = (function (){var statearr_31130 = state_31104;
(statearr_31130[(7)] = inst_30968);

(statearr_31130[(8)] = inst_30966);

(statearr_31130[(9)] = inst_30965);

(statearr_31130[(10)] = inst_30967);

return statearr_31130;
})();
var statearr_31131_31212 = state_31104__$1;
(statearr_31131_31212[(2)] = null);

(statearr_31131_31212[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (22))){
var inst_31018 = (state_31104[(19)]);
var inst_31021 = (state_31104[(23)]);
var inst_31022 = (state_31104[(24)]);
var inst_31026 = (state_31104[(25)]);
var inst_31021__$1 = (state_31104[(2)]);
var inst_31022__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31021__$1);
var inst_31023 = (function (){var all_files = inst_31018;
var res_SINGLEQUOTE_ = inst_31021__$1;
var res = inst_31022__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31018,inst_31021,inst_31022,inst_31026,inst_31021__$1,inst_31022__$1,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30701_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30701_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31018,inst_31021,inst_31022,inst_31026,inst_31021__$1,inst_31022__$1,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31024 = cljs.core.filter.call(null,inst_31023,inst_31021__$1);
var inst_31025 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31026__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31025);
var inst_31027 = cljs.core.not_empty.call(null,inst_31026__$1);
var state_31104__$1 = (function (){var statearr_31132 = state_31104;
(statearr_31132[(23)] = inst_31021__$1);

(statearr_31132[(26)] = inst_31024);

(statearr_31132[(24)] = inst_31022__$1);

(statearr_31132[(25)] = inst_31026__$1);

return statearr_31132;
})();
if(cljs.core.truth_(inst_31027)){
var statearr_31133_31213 = state_31104__$1;
(statearr_31133_31213[(1)] = (23));

} else {
var statearr_31134_31214 = state_31104__$1;
(statearr_31134_31214[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (36))){
var state_31104__$1 = state_31104;
var statearr_31135_31215 = state_31104__$1;
(statearr_31135_31215[(2)] = false);

(statearr_31135_31215[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (41))){
var inst_31079 = (state_31104[(20)]);
var inst_31083 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31084 = cljs.core.map.call(null,inst_31083,inst_31079);
var inst_31085 = cljs.core.pr_str.call(null,inst_31084);
var inst_31086 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31085)].join('');
var inst_31087 = figwheel.client.utils.log.call(null,inst_31086);
var state_31104__$1 = state_31104;
var statearr_31136_31216 = state_31104__$1;
(statearr_31136_31216[(2)] = inst_31087);

(statearr_31136_31216[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (43))){
var inst_31080 = (state_31104[(21)]);
var inst_31090 = (state_31104[(2)]);
var inst_31091 = cljs.core.not_empty.call(null,inst_31080);
var state_31104__$1 = (function (){var statearr_31137 = state_31104;
(statearr_31137[(27)] = inst_31090);

return statearr_31137;
})();
if(cljs.core.truth_(inst_31091)){
var statearr_31138_31217 = state_31104__$1;
(statearr_31138_31217[(1)] = (44));

} else {
var statearr_31139_31218 = state_31104__$1;
(statearr_31139_31218[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (29))){
var inst_31058 = (state_31104[(16)]);
var inst_31018 = (state_31104[(19)]);
var inst_31021 = (state_31104[(23)]);
var inst_31024 = (state_31104[(26)]);
var inst_31022 = (state_31104[(24)]);
var inst_31026 = (state_31104[(25)]);
var inst_31054 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31057 = (function (){var all_files = inst_31018;
var res_SINGLEQUOTE_ = inst_31021;
var res = inst_31022;
var files_not_loaded = inst_31024;
var dependencies_that_loaded = inst_31026;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31058,inst_31018,inst_31021,inst_31024,inst_31022,inst_31026,inst_31054,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31056){
var map__31140 = p__31056;
var map__31140__$1 = ((((!((map__31140 == null)))?((((map__31140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31140):map__31140);
var namespace = cljs.core.get.call(null,map__31140__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31058,inst_31018,inst_31021,inst_31024,inst_31022,inst_31026,inst_31054,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31058__$1 = cljs.core.group_by.call(null,inst_31057,inst_31024);
var inst_31060 = (inst_31058__$1 == null);
var inst_31061 = cljs.core.not.call(null,inst_31060);
var state_31104__$1 = (function (){var statearr_31142 = state_31104;
(statearr_31142[(16)] = inst_31058__$1);

(statearr_31142[(28)] = inst_31054);

return statearr_31142;
})();
if(inst_31061){
var statearr_31143_31219 = state_31104__$1;
(statearr_31143_31219[(1)] = (32));

} else {
var statearr_31144_31220 = state_31104__$1;
(statearr_31144_31220[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (44))){
var inst_31080 = (state_31104[(21)]);
var inst_31093 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31080);
var inst_31094 = cljs.core.pr_str.call(null,inst_31093);
var inst_31095 = [cljs.core.str("not required: "),cljs.core.str(inst_31094)].join('');
var inst_31096 = figwheel.client.utils.log.call(null,inst_31095);
var state_31104__$1 = state_31104;
var statearr_31145_31221 = state_31104__$1;
(statearr_31145_31221[(2)] = inst_31096);

(statearr_31145_31221[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (6))){
var inst_30999 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
var statearr_31146_31222 = state_31104__$1;
(statearr_31146_31222[(2)] = inst_30999);

(statearr_31146_31222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (28))){
var inst_31024 = (state_31104[(26)]);
var inst_31051 = (state_31104[(2)]);
var inst_31052 = cljs.core.not_empty.call(null,inst_31024);
var state_31104__$1 = (function (){var statearr_31147 = state_31104;
(statearr_31147[(29)] = inst_31051);

return statearr_31147;
})();
if(cljs.core.truth_(inst_31052)){
var statearr_31148_31223 = state_31104__$1;
(statearr_31148_31223[(1)] = (29));

} else {
var statearr_31149_31224 = state_31104__$1;
(statearr_31149_31224[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (25))){
var inst_31022 = (state_31104[(24)]);
var inst_31038 = (state_31104[(2)]);
var inst_31039 = cljs.core.not_empty.call(null,inst_31022);
var state_31104__$1 = (function (){var statearr_31150 = state_31104;
(statearr_31150[(30)] = inst_31038);

return statearr_31150;
})();
if(cljs.core.truth_(inst_31039)){
var statearr_31151_31225 = state_31104__$1;
(statearr_31151_31225[(1)] = (26));

} else {
var statearr_31152_31226 = state_31104__$1;
(statearr_31152_31226[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (34))){
var inst_31073 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
if(cljs.core.truth_(inst_31073)){
var statearr_31153_31227 = state_31104__$1;
(statearr_31153_31227[(1)] = (38));

} else {
var statearr_31154_31228 = state_31104__$1;
(statearr_31154_31228[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (17))){
var state_31104__$1 = state_31104;
var statearr_31155_31229 = state_31104__$1;
(statearr_31155_31229[(2)] = recompile_dependents);

(statearr_31155_31229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (3))){
var state_31104__$1 = state_31104;
var statearr_31156_31230 = state_31104__$1;
(statearr_31156_31230[(2)] = null);

(statearr_31156_31230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (12))){
var inst_30995 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
var statearr_31157_31231 = state_31104__$1;
(statearr_31157_31231[(2)] = inst_30995);

(statearr_31157_31231[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (2))){
var inst_30957 = (state_31104[(13)]);
var inst_30964 = cljs.core.seq.call(null,inst_30957);
var inst_30965 = inst_30964;
var inst_30966 = null;
var inst_30967 = (0);
var inst_30968 = (0);
var state_31104__$1 = (function (){var statearr_31158 = state_31104;
(statearr_31158[(7)] = inst_30968);

(statearr_31158[(8)] = inst_30966);

(statearr_31158[(9)] = inst_30965);

(statearr_31158[(10)] = inst_30967);

return statearr_31158;
})();
var statearr_31159_31232 = state_31104__$1;
(statearr_31159_31232[(2)] = null);

(statearr_31159_31232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (23))){
var inst_31018 = (state_31104[(19)]);
var inst_31021 = (state_31104[(23)]);
var inst_31024 = (state_31104[(26)]);
var inst_31022 = (state_31104[(24)]);
var inst_31026 = (state_31104[(25)]);
var inst_31029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31031 = (function (){var all_files = inst_31018;
var res_SINGLEQUOTE_ = inst_31021;
var res = inst_31022;
var files_not_loaded = inst_31024;
var dependencies_that_loaded = inst_31026;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31018,inst_31021,inst_31024,inst_31022,inst_31026,inst_31029,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31030){
var map__31160 = p__31030;
var map__31160__$1 = ((((!((map__31160 == null)))?((((map__31160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31160):map__31160);
var request_url = cljs.core.get.call(null,map__31160__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31018,inst_31021,inst_31024,inst_31022,inst_31026,inst_31029,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31032 = cljs.core.reverse.call(null,inst_31026);
var inst_31033 = cljs.core.map.call(null,inst_31031,inst_31032);
var inst_31034 = cljs.core.pr_str.call(null,inst_31033);
var inst_31035 = figwheel.client.utils.log.call(null,inst_31034);
var state_31104__$1 = (function (){var statearr_31162 = state_31104;
(statearr_31162[(31)] = inst_31029);

return statearr_31162;
})();
var statearr_31163_31233 = state_31104__$1;
(statearr_31163_31233[(2)] = inst_31035);

(statearr_31163_31233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (35))){
var state_31104__$1 = state_31104;
var statearr_31164_31234 = state_31104__$1;
(statearr_31164_31234[(2)] = true);

(statearr_31164_31234[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (19))){
var inst_31008 = (state_31104[(12)]);
var inst_31014 = figwheel.client.file_reloading.expand_files.call(null,inst_31008);
var state_31104__$1 = state_31104;
var statearr_31165_31235 = state_31104__$1;
(statearr_31165_31235[(2)] = inst_31014);

(statearr_31165_31235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (11))){
var state_31104__$1 = state_31104;
var statearr_31166_31236 = state_31104__$1;
(statearr_31166_31236[(2)] = null);

(statearr_31166_31236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (9))){
var inst_30997 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
var statearr_31167_31237 = state_31104__$1;
(statearr_31167_31237[(2)] = inst_30997);

(statearr_31167_31237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (5))){
var inst_30968 = (state_31104[(7)]);
var inst_30967 = (state_31104[(10)]);
var inst_30970 = (inst_30968 < inst_30967);
var inst_30971 = inst_30970;
var state_31104__$1 = state_31104;
if(cljs.core.truth_(inst_30971)){
var statearr_31168_31238 = state_31104__$1;
(statearr_31168_31238[(1)] = (7));

} else {
var statearr_31169_31239 = state_31104__$1;
(statearr_31169_31239[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (14))){
var inst_30978 = (state_31104[(22)]);
var inst_30987 = cljs.core.first.call(null,inst_30978);
var inst_30988 = figwheel.client.file_reloading.eval_body.call(null,inst_30987,opts);
var inst_30989 = cljs.core.next.call(null,inst_30978);
var inst_30965 = inst_30989;
var inst_30966 = null;
var inst_30967 = (0);
var inst_30968 = (0);
var state_31104__$1 = (function (){var statearr_31170 = state_31104;
(statearr_31170[(7)] = inst_30968);

(statearr_31170[(8)] = inst_30966);

(statearr_31170[(9)] = inst_30965);

(statearr_31170[(10)] = inst_30967);

(statearr_31170[(32)] = inst_30988);

return statearr_31170;
})();
var statearr_31171_31240 = state_31104__$1;
(statearr_31171_31240[(2)] = null);

(statearr_31171_31240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (45))){
var state_31104__$1 = state_31104;
var statearr_31172_31241 = state_31104__$1;
(statearr_31172_31241[(2)] = null);

(statearr_31172_31241[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (26))){
var inst_31018 = (state_31104[(19)]);
var inst_31021 = (state_31104[(23)]);
var inst_31024 = (state_31104[(26)]);
var inst_31022 = (state_31104[(24)]);
var inst_31026 = (state_31104[(25)]);
var inst_31041 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31043 = (function (){var all_files = inst_31018;
var res_SINGLEQUOTE_ = inst_31021;
var res = inst_31022;
var files_not_loaded = inst_31024;
var dependencies_that_loaded = inst_31026;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31018,inst_31021,inst_31024,inst_31022,inst_31026,inst_31041,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31042){
var map__31173 = p__31042;
var map__31173__$1 = ((((!((map__31173 == null)))?((((map__31173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31173):map__31173);
var namespace = cljs.core.get.call(null,map__31173__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31173__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31018,inst_31021,inst_31024,inst_31022,inst_31026,inst_31041,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31044 = cljs.core.map.call(null,inst_31043,inst_31022);
var inst_31045 = cljs.core.pr_str.call(null,inst_31044);
var inst_31046 = figwheel.client.utils.log.call(null,inst_31045);
var inst_31047 = (function (){var all_files = inst_31018;
var res_SINGLEQUOTE_ = inst_31021;
var res = inst_31022;
var files_not_loaded = inst_31024;
var dependencies_that_loaded = inst_31026;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31018,inst_31021,inst_31024,inst_31022,inst_31026,inst_31041,inst_31043,inst_31044,inst_31045,inst_31046,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31018,inst_31021,inst_31024,inst_31022,inst_31026,inst_31041,inst_31043,inst_31044,inst_31045,inst_31046,state_val_31105,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31048 = setTimeout(inst_31047,(10));
var state_31104__$1 = (function (){var statearr_31175 = state_31104;
(statearr_31175[(33)] = inst_31046);

(statearr_31175[(34)] = inst_31041);

return statearr_31175;
})();
var statearr_31176_31242 = state_31104__$1;
(statearr_31176_31242[(2)] = inst_31048);

(statearr_31176_31242[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (16))){
var state_31104__$1 = state_31104;
var statearr_31177_31243 = state_31104__$1;
(statearr_31177_31243[(2)] = reload_dependents);

(statearr_31177_31243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (38))){
var inst_31058 = (state_31104[(16)]);
var inst_31075 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31058);
var state_31104__$1 = state_31104;
var statearr_31178_31244 = state_31104__$1;
(statearr_31178_31244[(2)] = inst_31075);

(statearr_31178_31244[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (30))){
var state_31104__$1 = state_31104;
var statearr_31179_31245 = state_31104__$1;
(statearr_31179_31245[(2)] = null);

(statearr_31179_31245[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (10))){
var inst_30978 = (state_31104[(22)]);
var inst_30980 = cljs.core.chunked_seq_QMARK_.call(null,inst_30978);
var state_31104__$1 = state_31104;
if(inst_30980){
var statearr_31180_31246 = state_31104__$1;
(statearr_31180_31246[(1)] = (13));

} else {
var statearr_31181_31247 = state_31104__$1;
(statearr_31181_31247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (18))){
var inst_31012 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
if(cljs.core.truth_(inst_31012)){
var statearr_31182_31248 = state_31104__$1;
(statearr_31182_31248[(1)] = (19));

} else {
var statearr_31183_31249 = state_31104__$1;
(statearr_31183_31249[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (42))){
var state_31104__$1 = state_31104;
var statearr_31184_31250 = state_31104__$1;
(statearr_31184_31250[(2)] = null);

(statearr_31184_31250[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (37))){
var inst_31070 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
var statearr_31185_31251 = state_31104__$1;
(statearr_31185_31251[(2)] = inst_31070);

(statearr_31185_31251[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (8))){
var inst_30978 = (state_31104[(22)]);
var inst_30965 = (state_31104[(9)]);
var inst_30978__$1 = cljs.core.seq.call(null,inst_30965);
var state_31104__$1 = (function (){var statearr_31186 = state_31104;
(statearr_31186[(22)] = inst_30978__$1);

return statearr_31186;
})();
if(inst_30978__$1){
var statearr_31187_31252 = state_31104__$1;
(statearr_31187_31252[(1)] = (10));

} else {
var statearr_31188_31253 = state_31104__$1;
(statearr_31188_31253[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27365__auto__,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto____0 = (function (){
var statearr_31192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31192[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto__);

(statearr_31192[(1)] = (1));

return statearr_31192;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto____1 = (function (state_31104){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_31104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e31193){if((e31193 instanceof Object)){
var ex__27369__auto__ = e31193;
var statearr_31194_31254 = state_31104;
(statearr_31194_31254[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31255 = state_31104;
state_31104 = G__31255;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto__ = function(state_31104){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto____1.call(this,state_31104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27479__auto__ = (function (){var statearr_31195 = f__27478__auto__.call(null);
(statearr_31195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto__);

return statearr_31195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto__,map__30950,map__30950__$1,opts,before_jsload,on_jsload,reload_dependents,map__30951,map__30951__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27477__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31258,link){
var map__31261 = p__31258;
var map__31261__$1 = ((((!((map__31261 == null)))?((((map__31261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31261):map__31261);
var file = cljs.core.get.call(null,map__31261__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31261,map__31261__$1,file){
return (function (p1__31256_SHARP_,p2__31257_SHARP_){
if(cljs.core._EQ_.call(null,p1__31256_SHARP_,p2__31257_SHARP_)){
return p1__31256_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31261,map__31261__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31267){
var map__31268 = p__31267;
var map__31268__$1 = ((((!((map__31268 == null)))?((((map__31268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31268):map__31268);
var match_length = cljs.core.get.call(null,map__31268__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31268__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31263_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31263_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31270 = [];
var len__21248__auto___31273 = arguments.length;
var i__21249__auto___31274 = (0);
while(true){
if((i__21249__auto___31274 < len__21248__auto___31273)){
args31270.push((arguments[i__21249__auto___31274]));

var G__31275 = (i__21249__auto___31274 + (1));
i__21249__auto___31274 = G__31275;
continue;
} else {
}
break;
}

var G__31272 = args31270.length;
switch (G__31272) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31270.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31277_SHARP_,p2__31278_SHARP_){
return cljs.core.assoc.call(null,p1__31277_SHARP_,cljs.core.get.call(null,p2__31278_SHARP_,key),p2__31278_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31279){
var map__31282 = p__31279;
var map__31282__$1 = ((((!((map__31282 == null)))?((((map__31282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31282):map__31282);
var f_data = map__31282__$1;
var file = cljs.core.get.call(null,map__31282__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31284,files_msg){
var map__31291 = p__31284;
var map__31291__$1 = ((((!((map__31291 == null)))?((((map__31291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31291):map__31291);
var opts = map__31291__$1;
var on_cssload = cljs.core.get.call(null,map__31291__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31293_31297 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31294_31298 = null;
var count__31295_31299 = (0);
var i__31296_31300 = (0);
while(true){
if((i__31296_31300 < count__31295_31299)){
var f_31301 = cljs.core._nth.call(null,chunk__31294_31298,i__31296_31300);
figwheel.client.file_reloading.reload_css_file.call(null,f_31301);

var G__31302 = seq__31293_31297;
var G__31303 = chunk__31294_31298;
var G__31304 = count__31295_31299;
var G__31305 = (i__31296_31300 + (1));
seq__31293_31297 = G__31302;
chunk__31294_31298 = G__31303;
count__31295_31299 = G__31304;
i__31296_31300 = G__31305;
continue;
} else {
var temp__4425__auto___31306 = cljs.core.seq.call(null,seq__31293_31297);
if(temp__4425__auto___31306){
var seq__31293_31307__$1 = temp__4425__auto___31306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31293_31307__$1)){
var c__20993__auto___31308 = cljs.core.chunk_first.call(null,seq__31293_31307__$1);
var G__31309 = cljs.core.chunk_rest.call(null,seq__31293_31307__$1);
var G__31310 = c__20993__auto___31308;
var G__31311 = cljs.core.count.call(null,c__20993__auto___31308);
var G__31312 = (0);
seq__31293_31297 = G__31309;
chunk__31294_31298 = G__31310;
count__31295_31299 = G__31311;
i__31296_31300 = G__31312;
continue;
} else {
var f_31313 = cljs.core.first.call(null,seq__31293_31307__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31313);

var G__31314 = cljs.core.next.call(null,seq__31293_31307__$1);
var G__31315 = null;
var G__31316 = (0);
var G__31317 = (0);
seq__31293_31297 = G__31314;
chunk__31294_31298 = G__31315;
count__31295_31299 = G__31316;
i__31296_31300 = G__31317;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31291,map__31291__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31291,map__31291__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1452962192441