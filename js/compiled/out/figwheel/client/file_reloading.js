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
var or__16751__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16751__auto__){
return or__16751__auto__;
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
var or__16751__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26984_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26984_SHARP_));
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
var seq__26989 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26990 = null;
var count__26991 = (0);
var i__26992 = (0);
while(true){
if((i__26992 < count__26991)){
var n = cljs.core._nth.call(null,chunk__26990,i__26992);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26993 = seq__26989;
var G__26994 = chunk__26990;
var G__26995 = count__26991;
var G__26996 = (i__26992 + (1));
seq__26989 = G__26993;
chunk__26990 = G__26994;
count__26991 = G__26995;
i__26992 = G__26996;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26989);
if(temp__4425__auto__){
var seq__26989__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26989__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__26989__$1);
var G__26997 = cljs.core.chunk_rest.call(null,seq__26989__$1);
var G__26998 = c__17554__auto__;
var G__26999 = cljs.core.count.call(null,c__17554__auto__);
var G__27000 = (0);
seq__26989 = G__26997;
chunk__26990 = G__26998;
count__26991 = G__26999;
i__26992 = G__27000;
continue;
} else {
var n = cljs.core.first.call(null,seq__26989__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27001 = cljs.core.next.call(null,seq__26989__$1);
var G__27002 = null;
var G__27003 = (0);
var G__27004 = (0);
seq__26989 = G__27001;
chunk__26990 = G__27002;
count__26991 = G__27003;
i__26992 = G__27004;
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

var seq__27043_27050 = cljs.core.seq.call(null,deps);
var chunk__27044_27051 = null;
var count__27045_27052 = (0);
var i__27046_27053 = (0);
while(true){
if((i__27046_27053 < count__27045_27052)){
var dep_27054 = cljs.core._nth.call(null,chunk__27044_27051,i__27046_27053);
topo_sort_helper_STAR_.call(null,dep_27054,(depth + (1)),state);

var G__27055 = seq__27043_27050;
var G__27056 = chunk__27044_27051;
var G__27057 = count__27045_27052;
var G__27058 = (i__27046_27053 + (1));
seq__27043_27050 = G__27055;
chunk__27044_27051 = G__27056;
count__27045_27052 = G__27057;
i__27046_27053 = G__27058;
continue;
} else {
var temp__4425__auto___27059 = cljs.core.seq.call(null,seq__27043_27050);
if(temp__4425__auto___27059){
var seq__27043_27060__$1 = temp__4425__auto___27059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27043_27060__$1)){
var c__17554__auto___27061 = cljs.core.chunk_first.call(null,seq__27043_27060__$1);
var G__27062 = cljs.core.chunk_rest.call(null,seq__27043_27060__$1);
var G__27063 = c__17554__auto___27061;
var G__27064 = cljs.core.count.call(null,c__17554__auto___27061);
var G__27065 = (0);
seq__27043_27050 = G__27062;
chunk__27044_27051 = G__27063;
count__27045_27052 = G__27064;
i__27046_27053 = G__27065;
continue;
} else {
var dep_27066 = cljs.core.first.call(null,seq__27043_27060__$1);
topo_sort_helper_STAR_.call(null,dep_27066,(depth + (1)),state);

var G__27067 = cljs.core.next.call(null,seq__27043_27060__$1);
var G__27068 = null;
var G__27069 = (0);
var G__27070 = (0);
seq__27043_27050 = G__27067;
chunk__27044_27051 = G__27068;
count__27045_27052 = G__27069;
i__27046_27053 = G__27070;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27047){
var vec__27049 = p__27047;
var x = cljs.core.nth.call(null,vec__27049,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27049,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27049,x,xs,get_deps__$1){
return (function (p1__27005_SHARP_){
return clojure.set.difference.call(null,p1__27005_SHARP_,x);
});})(vec__27049,x,xs,get_deps__$1))
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
var seq__27083 = cljs.core.seq.call(null,provides);
var chunk__27084 = null;
var count__27085 = (0);
var i__27086 = (0);
while(true){
if((i__27086 < count__27085)){
var prov = cljs.core._nth.call(null,chunk__27084,i__27086);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27087_27095 = cljs.core.seq.call(null,requires);
var chunk__27088_27096 = null;
var count__27089_27097 = (0);
var i__27090_27098 = (0);
while(true){
if((i__27090_27098 < count__27089_27097)){
var req_27099 = cljs.core._nth.call(null,chunk__27088_27096,i__27090_27098);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27099,prov);

var G__27100 = seq__27087_27095;
var G__27101 = chunk__27088_27096;
var G__27102 = count__27089_27097;
var G__27103 = (i__27090_27098 + (1));
seq__27087_27095 = G__27100;
chunk__27088_27096 = G__27101;
count__27089_27097 = G__27102;
i__27090_27098 = G__27103;
continue;
} else {
var temp__4425__auto___27104 = cljs.core.seq.call(null,seq__27087_27095);
if(temp__4425__auto___27104){
var seq__27087_27105__$1 = temp__4425__auto___27104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27087_27105__$1)){
var c__17554__auto___27106 = cljs.core.chunk_first.call(null,seq__27087_27105__$1);
var G__27107 = cljs.core.chunk_rest.call(null,seq__27087_27105__$1);
var G__27108 = c__17554__auto___27106;
var G__27109 = cljs.core.count.call(null,c__17554__auto___27106);
var G__27110 = (0);
seq__27087_27095 = G__27107;
chunk__27088_27096 = G__27108;
count__27089_27097 = G__27109;
i__27090_27098 = G__27110;
continue;
} else {
var req_27111 = cljs.core.first.call(null,seq__27087_27105__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27111,prov);

var G__27112 = cljs.core.next.call(null,seq__27087_27105__$1);
var G__27113 = null;
var G__27114 = (0);
var G__27115 = (0);
seq__27087_27095 = G__27112;
chunk__27088_27096 = G__27113;
count__27089_27097 = G__27114;
i__27090_27098 = G__27115;
continue;
}
} else {
}
}
break;
}

var G__27116 = seq__27083;
var G__27117 = chunk__27084;
var G__27118 = count__27085;
var G__27119 = (i__27086 + (1));
seq__27083 = G__27116;
chunk__27084 = G__27117;
count__27085 = G__27118;
i__27086 = G__27119;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27083);
if(temp__4425__auto__){
var seq__27083__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27083__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27083__$1);
var G__27120 = cljs.core.chunk_rest.call(null,seq__27083__$1);
var G__27121 = c__17554__auto__;
var G__27122 = cljs.core.count.call(null,c__17554__auto__);
var G__27123 = (0);
seq__27083 = G__27120;
chunk__27084 = G__27121;
count__27085 = G__27122;
i__27086 = G__27123;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27083__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27091_27124 = cljs.core.seq.call(null,requires);
var chunk__27092_27125 = null;
var count__27093_27126 = (0);
var i__27094_27127 = (0);
while(true){
if((i__27094_27127 < count__27093_27126)){
var req_27128 = cljs.core._nth.call(null,chunk__27092_27125,i__27094_27127);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27128,prov);

var G__27129 = seq__27091_27124;
var G__27130 = chunk__27092_27125;
var G__27131 = count__27093_27126;
var G__27132 = (i__27094_27127 + (1));
seq__27091_27124 = G__27129;
chunk__27092_27125 = G__27130;
count__27093_27126 = G__27131;
i__27094_27127 = G__27132;
continue;
} else {
var temp__4425__auto___27133__$1 = cljs.core.seq.call(null,seq__27091_27124);
if(temp__4425__auto___27133__$1){
var seq__27091_27134__$1 = temp__4425__auto___27133__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27091_27134__$1)){
var c__17554__auto___27135 = cljs.core.chunk_first.call(null,seq__27091_27134__$1);
var G__27136 = cljs.core.chunk_rest.call(null,seq__27091_27134__$1);
var G__27137 = c__17554__auto___27135;
var G__27138 = cljs.core.count.call(null,c__17554__auto___27135);
var G__27139 = (0);
seq__27091_27124 = G__27136;
chunk__27092_27125 = G__27137;
count__27093_27126 = G__27138;
i__27094_27127 = G__27139;
continue;
} else {
var req_27140 = cljs.core.first.call(null,seq__27091_27134__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27140,prov);

var G__27141 = cljs.core.next.call(null,seq__27091_27134__$1);
var G__27142 = null;
var G__27143 = (0);
var G__27144 = (0);
seq__27091_27124 = G__27141;
chunk__27092_27125 = G__27142;
count__27093_27126 = G__27143;
i__27094_27127 = G__27144;
continue;
}
} else {
}
}
break;
}

var G__27145 = cljs.core.next.call(null,seq__27083__$1);
var G__27146 = null;
var G__27147 = (0);
var G__27148 = (0);
seq__27083 = G__27145;
chunk__27084 = G__27146;
count__27085 = G__27147;
i__27086 = G__27148;
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
var seq__27153_27157 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27154_27158 = null;
var count__27155_27159 = (0);
var i__27156_27160 = (0);
while(true){
if((i__27156_27160 < count__27155_27159)){
var ns_27161 = cljs.core._nth.call(null,chunk__27154_27158,i__27156_27160);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27161);

var G__27162 = seq__27153_27157;
var G__27163 = chunk__27154_27158;
var G__27164 = count__27155_27159;
var G__27165 = (i__27156_27160 + (1));
seq__27153_27157 = G__27162;
chunk__27154_27158 = G__27163;
count__27155_27159 = G__27164;
i__27156_27160 = G__27165;
continue;
} else {
var temp__4425__auto___27166 = cljs.core.seq.call(null,seq__27153_27157);
if(temp__4425__auto___27166){
var seq__27153_27167__$1 = temp__4425__auto___27166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27153_27167__$1)){
var c__17554__auto___27168 = cljs.core.chunk_first.call(null,seq__27153_27167__$1);
var G__27169 = cljs.core.chunk_rest.call(null,seq__27153_27167__$1);
var G__27170 = c__17554__auto___27168;
var G__27171 = cljs.core.count.call(null,c__17554__auto___27168);
var G__27172 = (0);
seq__27153_27157 = G__27169;
chunk__27154_27158 = G__27170;
count__27155_27159 = G__27171;
i__27156_27160 = G__27172;
continue;
} else {
var ns_27173 = cljs.core.first.call(null,seq__27153_27167__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27173);

var G__27174 = cljs.core.next.call(null,seq__27153_27167__$1);
var G__27175 = null;
var G__27176 = (0);
var G__27177 = (0);
seq__27153_27157 = G__27174;
chunk__27154_27158 = G__27175;
count__27155_27159 = G__27176;
i__27156_27160 = G__27177;
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
goog.require_figwheel_backup_ = (function (){var or__16751__auto__ = goog.require__;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
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
var G__27178__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27179__i = 0, G__27179__a = new Array(arguments.length -  0);
while (G__27179__i < G__27179__a.length) {G__27179__a[G__27179__i] = arguments[G__27179__i + 0]; ++G__27179__i;}
  args = new cljs.core.IndexedSeq(G__27179__a,0);
} 
return G__27178__delegate.call(this,args);};
G__27178.cljs$lang$maxFixedArity = 0;
G__27178.cljs$lang$applyTo = (function (arglist__27180){
var args = cljs.core.seq(arglist__27180);
return G__27178__delegate(args);
});
G__27178.cljs$core$IFn$_invoke$arity$variadic = G__27178__delegate;
return G__27178;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27182 = cljs.core._EQ_;
var expr__27183 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27182.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27183))){
var path_parts = ((function (pred__27182,expr__27183){
return (function (p1__27181_SHARP_){
return clojure.string.split.call(null,p1__27181_SHARP_,/[\/\\]/);
});})(pred__27182,expr__27183))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27182,expr__27183){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27185){if((e27185 instanceof Error)){
var e = e27185;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27185;

}
}})());
});
;})(path_parts,sep,root,pred__27182,expr__27183))
} else {
if(cljs.core.truth_(pred__27182.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27183))){
return ((function (pred__27182,expr__27183){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27182,expr__27183){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27182,expr__27183))
);

return deferred.addErrback(((function (deferred,pred__27182,expr__27183){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27182,expr__27183))
);
});
;})(pred__27182,expr__27183))
} else {
return ((function (pred__27182,expr__27183){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27182,expr__27183))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27186,callback){
var map__27189 = p__27186;
var map__27189__$1 = ((((!((map__27189 == null)))?((((map__27189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27189):map__27189);
var file_msg = map__27189__$1;
var request_url = cljs.core.get.call(null,map__27189__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27189,map__27189__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27189,map__27189__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto__){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto__){
return (function (state_27213){
var state_val_27214 = (state_27213[(1)]);
if((state_val_27214 === (7))){
var inst_27209 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
var statearr_27215_27235 = state_27213__$1;
(statearr_27215_27235[(2)] = inst_27209);

(statearr_27215_27235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (1))){
var state_27213__$1 = state_27213;
var statearr_27216_27236 = state_27213__$1;
(statearr_27216_27236[(2)] = null);

(statearr_27216_27236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (4))){
var inst_27193 = (state_27213[(7)]);
var inst_27193__$1 = (state_27213[(2)]);
var state_27213__$1 = (function (){var statearr_27217 = state_27213;
(statearr_27217[(7)] = inst_27193__$1);

return statearr_27217;
})();
if(cljs.core.truth_(inst_27193__$1)){
var statearr_27218_27237 = state_27213__$1;
(statearr_27218_27237[(1)] = (5));

} else {
var statearr_27219_27238 = state_27213__$1;
(statearr_27219_27238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (6))){
var state_27213__$1 = state_27213;
var statearr_27220_27239 = state_27213__$1;
(statearr_27220_27239[(2)] = null);

(statearr_27220_27239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (3))){
var inst_27211 = (state_27213[(2)]);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27213__$1,inst_27211);
} else {
if((state_val_27214 === (2))){
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27214 === (11))){
var inst_27205 = (state_27213[(2)]);
var state_27213__$1 = (function (){var statearr_27221 = state_27213;
(statearr_27221[(8)] = inst_27205);

return statearr_27221;
})();
var statearr_27222_27240 = state_27213__$1;
(statearr_27222_27240[(2)] = null);

(statearr_27222_27240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (9))){
var inst_27197 = (state_27213[(9)]);
var inst_27199 = (state_27213[(10)]);
var inst_27201 = inst_27199.call(null,inst_27197);
var state_27213__$1 = state_27213;
var statearr_27223_27241 = state_27213__$1;
(statearr_27223_27241[(2)] = inst_27201);

(statearr_27223_27241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (5))){
var inst_27193 = (state_27213[(7)]);
var inst_27195 = figwheel.client.file_reloading.blocking_load.call(null,inst_27193);
var state_27213__$1 = state_27213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27213__$1,(8),inst_27195);
} else {
if((state_val_27214 === (10))){
var inst_27197 = (state_27213[(9)]);
var inst_27203 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27197);
var state_27213__$1 = state_27213;
var statearr_27224_27242 = state_27213__$1;
(statearr_27224_27242[(2)] = inst_27203);

(statearr_27224_27242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27214 === (8))){
var inst_27193 = (state_27213[(7)]);
var inst_27199 = (state_27213[(10)]);
var inst_27197 = (state_27213[(2)]);
var inst_27198 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27199__$1 = cljs.core.get.call(null,inst_27198,inst_27193);
var state_27213__$1 = (function (){var statearr_27225 = state_27213;
(statearr_27225[(9)] = inst_27197);

(statearr_27225[(10)] = inst_27199__$1);

return statearr_27225;
})();
if(cljs.core.truth_(inst_27199__$1)){
var statearr_27226_27243 = state_27213__$1;
(statearr_27226_27243[(1)] = (9));

} else {
var statearr_27227_27244 = state_27213__$1;
(statearr_27227_27244[(1)] = (10));

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
});})(c__24151__auto__))
;
return ((function (switch__24039__auto__,c__24151__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24040__auto__ = null;
var figwheel$client$file_reloading$state_machine__24040__auto____0 = (function (){
var statearr_27231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27231[(0)] = figwheel$client$file_reloading$state_machine__24040__auto__);

(statearr_27231[(1)] = (1));

return statearr_27231;
});
var figwheel$client$file_reloading$state_machine__24040__auto____1 = (function (state_27213){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_27213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e27232){if((e27232 instanceof Object)){
var ex__24043__auto__ = e27232;
var statearr_27233_27245 = state_27213;
(statearr_27233_27245[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27246 = state_27213;
state_27213 = G__27246;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24040__auto__ = function(state_27213){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24040__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24040__auto____1.call(this,state_27213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24040__auto____0;
figwheel$client$file_reloading$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24040__auto____1;
return figwheel$client$file_reloading$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto__))
})();
var state__24153__auto__ = (function (){var statearr_27234 = f__24152__auto__.call(null);
(statearr_27234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto__);

return statearr_27234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto__))
);

return c__24151__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27247,callback){
var map__27250 = p__27247;
var map__27250__$1 = ((((!((map__27250 == null)))?((((map__27250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27250):map__27250);
var file_msg = map__27250__$1;
var namespace = cljs.core.get.call(null,map__27250__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27250,map__27250__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27250,map__27250__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27252){
var map__27255 = p__27252;
var map__27255__$1 = ((((!((map__27255 == null)))?((((map__27255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27255):map__27255);
var file_msg = map__27255__$1;
var namespace = cljs.core.get.call(null,map__27255__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16739__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16739__auto__){
var or__16751__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
var or__16751__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16751__auto____$1)){
return or__16751__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16739__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27257,callback){
var map__27260 = p__27257;
var map__27260__$1 = ((((!((map__27260 == null)))?((((map__27260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27260):map__27260);
var file_msg = map__27260__$1;
var request_url = cljs.core.get.call(null,map__27260__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27260__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24151__auto___27348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___27348,out){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___27348,out){
return (function (state_27330){
var state_val_27331 = (state_27330[(1)]);
if((state_val_27331 === (1))){
var inst_27308 = cljs.core.nth.call(null,files,(0),null);
var inst_27309 = cljs.core.nthnext.call(null,files,(1));
var inst_27310 = files;
var state_27330__$1 = (function (){var statearr_27332 = state_27330;
(statearr_27332[(7)] = inst_27308);

(statearr_27332[(8)] = inst_27309);

(statearr_27332[(9)] = inst_27310);

return statearr_27332;
})();
var statearr_27333_27349 = state_27330__$1;
(statearr_27333_27349[(2)] = null);

(statearr_27333_27349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (2))){
var inst_27313 = (state_27330[(10)]);
var inst_27310 = (state_27330[(9)]);
var inst_27313__$1 = cljs.core.nth.call(null,inst_27310,(0),null);
var inst_27314 = cljs.core.nthnext.call(null,inst_27310,(1));
var inst_27315 = (inst_27313__$1 == null);
var inst_27316 = cljs.core.not.call(null,inst_27315);
var state_27330__$1 = (function (){var statearr_27334 = state_27330;
(statearr_27334[(10)] = inst_27313__$1);

(statearr_27334[(11)] = inst_27314);

return statearr_27334;
})();
if(inst_27316){
var statearr_27335_27350 = state_27330__$1;
(statearr_27335_27350[(1)] = (4));

} else {
var statearr_27336_27351 = state_27330__$1;
(statearr_27336_27351[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (3))){
var inst_27328 = (state_27330[(2)]);
var state_27330__$1 = state_27330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27330__$1,inst_27328);
} else {
if((state_val_27331 === (4))){
var inst_27313 = (state_27330[(10)]);
var inst_27318 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27313);
var state_27330__$1 = state_27330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27330__$1,(7),inst_27318);
} else {
if((state_val_27331 === (5))){
var inst_27324 = cljs.core.async.close_BANG_.call(null,out);
var state_27330__$1 = state_27330;
var statearr_27337_27352 = state_27330__$1;
(statearr_27337_27352[(2)] = inst_27324);

(statearr_27337_27352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (6))){
var inst_27326 = (state_27330[(2)]);
var state_27330__$1 = state_27330;
var statearr_27338_27353 = state_27330__$1;
(statearr_27338_27353[(2)] = inst_27326);

(statearr_27338_27353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (7))){
var inst_27314 = (state_27330[(11)]);
var inst_27320 = (state_27330[(2)]);
var inst_27321 = cljs.core.async.put_BANG_.call(null,out,inst_27320);
var inst_27310 = inst_27314;
var state_27330__$1 = (function (){var statearr_27339 = state_27330;
(statearr_27339[(12)] = inst_27321);

(statearr_27339[(9)] = inst_27310);

return statearr_27339;
})();
var statearr_27340_27354 = state_27330__$1;
(statearr_27340_27354[(2)] = null);

(statearr_27340_27354[(1)] = (2));


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
});})(c__24151__auto___27348,out))
;
return ((function (switch__24039__auto__,c__24151__auto___27348,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto____0 = (function (){
var statearr_27344 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27344[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto__);

(statearr_27344[(1)] = (1));

return statearr_27344;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto____1 = (function (state_27330){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_27330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e27345){if((e27345 instanceof Object)){
var ex__24043__auto__ = e27345;
var statearr_27346_27355 = state_27330;
(statearr_27346_27355[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27356 = state_27330;
state_27330 = G__27356;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto__ = function(state_27330){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto____1.call(this,state_27330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___27348,out))
})();
var state__24153__auto__ = (function (){var statearr_27347 = f__24152__auto__.call(null);
(statearr_27347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___27348);

return statearr_27347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___27348,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27357,opts){
var map__27361 = p__27357;
var map__27361__$1 = ((((!((map__27361 == null)))?((((map__27361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27361):map__27361);
var eval_body__$1 = cljs.core.get.call(null,map__27361__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27361__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16739__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16739__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16739__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27363){var e = e27363;
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
return (function (p1__27364_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27364_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27369){
var vec__27370 = p__27369;
var k = cljs.core.nth.call(null,vec__27370,(0),null);
var v = cljs.core.nth.call(null,vec__27370,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27371){
var vec__27372 = p__27371;
var k = cljs.core.nth.call(null,vec__27372,(0),null);
var v = cljs.core.nth.call(null,vec__27372,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27376,p__27377){
var map__27624 = p__27376;
var map__27624__$1 = ((((!((map__27624 == null)))?((((map__27624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27624):map__27624);
var opts = map__27624__$1;
var before_jsload = cljs.core.get.call(null,map__27624__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27624__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27624__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27625 = p__27377;
var map__27625__$1 = ((((!((map__27625 == null)))?((((map__27625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27625):map__27625);
var msg = map__27625__$1;
var files = cljs.core.get.call(null,map__27625__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27625__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27625__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27778){
var state_val_27779 = (state_27778[(1)]);
if((state_val_27779 === (7))){
var inst_27642 = (state_27778[(7)]);
var inst_27639 = (state_27778[(8)]);
var inst_27640 = (state_27778[(9)]);
var inst_27641 = (state_27778[(10)]);
var inst_27647 = cljs.core._nth.call(null,inst_27640,inst_27642);
var inst_27648 = figwheel.client.file_reloading.eval_body.call(null,inst_27647,opts);
var inst_27649 = (inst_27642 + (1));
var tmp27780 = inst_27639;
var tmp27781 = inst_27640;
var tmp27782 = inst_27641;
var inst_27639__$1 = tmp27780;
var inst_27640__$1 = tmp27781;
var inst_27641__$1 = tmp27782;
var inst_27642__$1 = inst_27649;
var state_27778__$1 = (function (){var statearr_27783 = state_27778;
(statearr_27783[(7)] = inst_27642__$1);

(statearr_27783[(11)] = inst_27648);

(statearr_27783[(8)] = inst_27639__$1);

(statearr_27783[(9)] = inst_27640__$1);

(statearr_27783[(10)] = inst_27641__$1);

return statearr_27783;
})();
var statearr_27784_27870 = state_27778__$1;
(statearr_27784_27870[(2)] = null);

(statearr_27784_27870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (20))){
var inst_27682 = (state_27778[(12)]);
var inst_27690 = figwheel.client.file_reloading.sort_files.call(null,inst_27682);
var state_27778__$1 = state_27778;
var statearr_27785_27871 = state_27778__$1;
(statearr_27785_27871[(2)] = inst_27690);

(statearr_27785_27871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (27))){
var state_27778__$1 = state_27778;
var statearr_27786_27872 = state_27778__$1;
(statearr_27786_27872[(2)] = null);

(statearr_27786_27872[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (1))){
var inst_27631 = (state_27778[(13)]);
var inst_27628 = before_jsload.call(null,files);
var inst_27629 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27630 = (function (){return ((function (inst_27631,inst_27628,inst_27629,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27373_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27373_SHARP_);
});
;})(inst_27631,inst_27628,inst_27629,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27631__$1 = cljs.core.filter.call(null,inst_27630,files);
var inst_27632 = cljs.core.not_empty.call(null,inst_27631__$1);
var state_27778__$1 = (function (){var statearr_27787 = state_27778;
(statearr_27787[(14)] = inst_27628);

(statearr_27787[(13)] = inst_27631__$1);

(statearr_27787[(15)] = inst_27629);

return statearr_27787;
})();
if(cljs.core.truth_(inst_27632)){
var statearr_27788_27873 = state_27778__$1;
(statearr_27788_27873[(1)] = (2));

} else {
var statearr_27789_27874 = state_27778__$1;
(statearr_27789_27874[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (24))){
var state_27778__$1 = state_27778;
var statearr_27790_27875 = state_27778__$1;
(statearr_27790_27875[(2)] = null);

(statearr_27790_27875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (39))){
var inst_27732 = (state_27778[(16)]);
var state_27778__$1 = state_27778;
var statearr_27791_27876 = state_27778__$1;
(statearr_27791_27876[(2)] = inst_27732);

(statearr_27791_27876[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (46))){
var inst_27773 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
var statearr_27792_27877 = state_27778__$1;
(statearr_27792_27877[(2)] = inst_27773);

(statearr_27792_27877[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (4))){
var inst_27676 = (state_27778[(2)]);
var inst_27677 = cljs.core.List.EMPTY;
var inst_27678 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27677);
var inst_27679 = (function (){return ((function (inst_27676,inst_27677,inst_27678,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27374_SHARP_){
var and__16739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27374_SHARP_);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27374_SHARP_));
} else {
return and__16739__auto__;
}
});
;})(inst_27676,inst_27677,inst_27678,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27680 = cljs.core.filter.call(null,inst_27679,files);
var inst_27681 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27682 = cljs.core.concat.call(null,inst_27680,inst_27681);
var state_27778__$1 = (function (){var statearr_27793 = state_27778;
(statearr_27793[(12)] = inst_27682);

(statearr_27793[(17)] = inst_27676);

(statearr_27793[(18)] = inst_27678);

return statearr_27793;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27794_27878 = state_27778__$1;
(statearr_27794_27878[(1)] = (16));

} else {
var statearr_27795_27879 = state_27778__$1;
(statearr_27795_27879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (15))){
var inst_27666 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
var statearr_27796_27880 = state_27778__$1;
(statearr_27796_27880[(2)] = inst_27666);

(statearr_27796_27880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (21))){
var inst_27692 = (state_27778[(19)]);
var inst_27692__$1 = (state_27778[(2)]);
var inst_27693 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27692__$1);
var state_27778__$1 = (function (){var statearr_27797 = state_27778;
(statearr_27797[(19)] = inst_27692__$1);

return statearr_27797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27778__$1,(22),inst_27693);
} else {
if((state_val_27779 === (31))){
var inst_27776 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27778__$1,inst_27776);
} else {
if((state_val_27779 === (32))){
var inst_27732 = (state_27778[(16)]);
var inst_27737 = inst_27732.cljs$lang$protocol_mask$partition0$;
var inst_27738 = (inst_27737 & (64));
var inst_27739 = inst_27732.cljs$core$ISeq$;
var inst_27740 = (inst_27738) || (inst_27739);
var state_27778__$1 = state_27778;
if(cljs.core.truth_(inst_27740)){
var statearr_27798_27881 = state_27778__$1;
(statearr_27798_27881[(1)] = (35));

} else {
var statearr_27799_27882 = state_27778__$1;
(statearr_27799_27882[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (40))){
var inst_27753 = (state_27778[(20)]);
var inst_27752 = (state_27778[(2)]);
var inst_27753__$1 = cljs.core.get.call(null,inst_27752,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27754 = cljs.core.get.call(null,inst_27752,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27755 = cljs.core.not_empty.call(null,inst_27753__$1);
var state_27778__$1 = (function (){var statearr_27800 = state_27778;
(statearr_27800[(20)] = inst_27753__$1);

(statearr_27800[(21)] = inst_27754);

return statearr_27800;
})();
if(cljs.core.truth_(inst_27755)){
var statearr_27801_27883 = state_27778__$1;
(statearr_27801_27883[(1)] = (41));

} else {
var statearr_27802_27884 = state_27778__$1;
(statearr_27802_27884[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (33))){
var state_27778__$1 = state_27778;
var statearr_27803_27885 = state_27778__$1;
(statearr_27803_27885[(2)] = false);

(statearr_27803_27885[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (13))){
var inst_27652 = (state_27778[(22)]);
var inst_27656 = cljs.core.chunk_first.call(null,inst_27652);
var inst_27657 = cljs.core.chunk_rest.call(null,inst_27652);
var inst_27658 = cljs.core.count.call(null,inst_27656);
var inst_27639 = inst_27657;
var inst_27640 = inst_27656;
var inst_27641 = inst_27658;
var inst_27642 = (0);
var state_27778__$1 = (function (){var statearr_27804 = state_27778;
(statearr_27804[(7)] = inst_27642);

(statearr_27804[(8)] = inst_27639);

(statearr_27804[(9)] = inst_27640);

(statearr_27804[(10)] = inst_27641);

return statearr_27804;
})();
var statearr_27805_27886 = state_27778__$1;
(statearr_27805_27886[(2)] = null);

(statearr_27805_27886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (22))){
var inst_27692 = (state_27778[(19)]);
var inst_27700 = (state_27778[(23)]);
var inst_27696 = (state_27778[(24)]);
var inst_27695 = (state_27778[(25)]);
var inst_27695__$1 = (state_27778[(2)]);
var inst_27696__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27695__$1);
var inst_27697 = (function (){var all_files = inst_27692;
var res_SINGLEQUOTE_ = inst_27695__$1;
var res = inst_27696__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27692,inst_27700,inst_27696,inst_27695,inst_27695__$1,inst_27696__$1,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27375_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27375_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27692,inst_27700,inst_27696,inst_27695,inst_27695__$1,inst_27696__$1,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27698 = cljs.core.filter.call(null,inst_27697,inst_27695__$1);
var inst_27699 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27700__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27699);
var inst_27701 = cljs.core.not_empty.call(null,inst_27700__$1);
var state_27778__$1 = (function (){var statearr_27806 = state_27778;
(statearr_27806[(23)] = inst_27700__$1);

(statearr_27806[(26)] = inst_27698);

(statearr_27806[(24)] = inst_27696__$1);

(statearr_27806[(25)] = inst_27695__$1);

return statearr_27806;
})();
if(cljs.core.truth_(inst_27701)){
var statearr_27807_27887 = state_27778__$1;
(statearr_27807_27887[(1)] = (23));

} else {
var statearr_27808_27888 = state_27778__$1;
(statearr_27808_27888[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (36))){
var state_27778__$1 = state_27778;
var statearr_27809_27889 = state_27778__$1;
(statearr_27809_27889[(2)] = false);

(statearr_27809_27889[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (41))){
var inst_27753 = (state_27778[(20)]);
var inst_27757 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27758 = cljs.core.map.call(null,inst_27757,inst_27753);
var inst_27759 = cljs.core.pr_str.call(null,inst_27758);
var inst_27760 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27759)].join('');
var inst_27761 = figwheel.client.utils.log.call(null,inst_27760);
var state_27778__$1 = state_27778;
var statearr_27810_27890 = state_27778__$1;
(statearr_27810_27890[(2)] = inst_27761);

(statearr_27810_27890[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (43))){
var inst_27754 = (state_27778[(21)]);
var inst_27764 = (state_27778[(2)]);
var inst_27765 = cljs.core.not_empty.call(null,inst_27754);
var state_27778__$1 = (function (){var statearr_27811 = state_27778;
(statearr_27811[(27)] = inst_27764);

return statearr_27811;
})();
if(cljs.core.truth_(inst_27765)){
var statearr_27812_27891 = state_27778__$1;
(statearr_27812_27891[(1)] = (44));

} else {
var statearr_27813_27892 = state_27778__$1;
(statearr_27813_27892[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (29))){
var inst_27692 = (state_27778[(19)]);
var inst_27700 = (state_27778[(23)]);
var inst_27698 = (state_27778[(26)]);
var inst_27696 = (state_27778[(24)]);
var inst_27695 = (state_27778[(25)]);
var inst_27732 = (state_27778[(16)]);
var inst_27728 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27731 = (function (){var all_files = inst_27692;
var res_SINGLEQUOTE_ = inst_27695;
var res = inst_27696;
var files_not_loaded = inst_27698;
var dependencies_that_loaded = inst_27700;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27692,inst_27700,inst_27698,inst_27696,inst_27695,inst_27732,inst_27728,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27730){
var map__27814 = p__27730;
var map__27814__$1 = ((((!((map__27814 == null)))?((((map__27814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27814):map__27814);
var namespace = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27692,inst_27700,inst_27698,inst_27696,inst_27695,inst_27732,inst_27728,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27732__$1 = cljs.core.group_by.call(null,inst_27731,inst_27698);
var inst_27734 = (inst_27732__$1 == null);
var inst_27735 = cljs.core.not.call(null,inst_27734);
var state_27778__$1 = (function (){var statearr_27816 = state_27778;
(statearr_27816[(28)] = inst_27728);

(statearr_27816[(16)] = inst_27732__$1);

return statearr_27816;
})();
if(inst_27735){
var statearr_27817_27893 = state_27778__$1;
(statearr_27817_27893[(1)] = (32));

} else {
var statearr_27818_27894 = state_27778__$1;
(statearr_27818_27894[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (44))){
var inst_27754 = (state_27778[(21)]);
var inst_27767 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27754);
var inst_27768 = cljs.core.pr_str.call(null,inst_27767);
var inst_27769 = [cljs.core.str("not required: "),cljs.core.str(inst_27768)].join('');
var inst_27770 = figwheel.client.utils.log.call(null,inst_27769);
var state_27778__$1 = state_27778;
var statearr_27819_27895 = state_27778__$1;
(statearr_27819_27895[(2)] = inst_27770);

(statearr_27819_27895[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (6))){
var inst_27673 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
var statearr_27820_27896 = state_27778__$1;
(statearr_27820_27896[(2)] = inst_27673);

(statearr_27820_27896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (28))){
var inst_27698 = (state_27778[(26)]);
var inst_27725 = (state_27778[(2)]);
var inst_27726 = cljs.core.not_empty.call(null,inst_27698);
var state_27778__$1 = (function (){var statearr_27821 = state_27778;
(statearr_27821[(29)] = inst_27725);

return statearr_27821;
})();
if(cljs.core.truth_(inst_27726)){
var statearr_27822_27897 = state_27778__$1;
(statearr_27822_27897[(1)] = (29));

} else {
var statearr_27823_27898 = state_27778__$1;
(statearr_27823_27898[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (25))){
var inst_27696 = (state_27778[(24)]);
var inst_27712 = (state_27778[(2)]);
var inst_27713 = cljs.core.not_empty.call(null,inst_27696);
var state_27778__$1 = (function (){var statearr_27824 = state_27778;
(statearr_27824[(30)] = inst_27712);

return statearr_27824;
})();
if(cljs.core.truth_(inst_27713)){
var statearr_27825_27899 = state_27778__$1;
(statearr_27825_27899[(1)] = (26));

} else {
var statearr_27826_27900 = state_27778__$1;
(statearr_27826_27900[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (34))){
var inst_27747 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
if(cljs.core.truth_(inst_27747)){
var statearr_27827_27901 = state_27778__$1;
(statearr_27827_27901[(1)] = (38));

} else {
var statearr_27828_27902 = state_27778__$1;
(statearr_27828_27902[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (17))){
var state_27778__$1 = state_27778;
var statearr_27829_27903 = state_27778__$1;
(statearr_27829_27903[(2)] = recompile_dependents);

(statearr_27829_27903[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (3))){
var state_27778__$1 = state_27778;
var statearr_27830_27904 = state_27778__$1;
(statearr_27830_27904[(2)] = null);

(statearr_27830_27904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (12))){
var inst_27669 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
var statearr_27831_27905 = state_27778__$1;
(statearr_27831_27905[(2)] = inst_27669);

(statearr_27831_27905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (2))){
var inst_27631 = (state_27778[(13)]);
var inst_27638 = cljs.core.seq.call(null,inst_27631);
var inst_27639 = inst_27638;
var inst_27640 = null;
var inst_27641 = (0);
var inst_27642 = (0);
var state_27778__$1 = (function (){var statearr_27832 = state_27778;
(statearr_27832[(7)] = inst_27642);

(statearr_27832[(8)] = inst_27639);

(statearr_27832[(9)] = inst_27640);

(statearr_27832[(10)] = inst_27641);

return statearr_27832;
})();
var statearr_27833_27906 = state_27778__$1;
(statearr_27833_27906[(2)] = null);

(statearr_27833_27906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (23))){
var inst_27692 = (state_27778[(19)]);
var inst_27700 = (state_27778[(23)]);
var inst_27698 = (state_27778[(26)]);
var inst_27696 = (state_27778[(24)]);
var inst_27695 = (state_27778[(25)]);
var inst_27703 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27705 = (function (){var all_files = inst_27692;
var res_SINGLEQUOTE_ = inst_27695;
var res = inst_27696;
var files_not_loaded = inst_27698;
var dependencies_that_loaded = inst_27700;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27692,inst_27700,inst_27698,inst_27696,inst_27695,inst_27703,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27704){
var map__27834 = p__27704;
var map__27834__$1 = ((((!((map__27834 == null)))?((((map__27834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27834):map__27834);
var request_url = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27692,inst_27700,inst_27698,inst_27696,inst_27695,inst_27703,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27706 = cljs.core.reverse.call(null,inst_27700);
var inst_27707 = cljs.core.map.call(null,inst_27705,inst_27706);
var inst_27708 = cljs.core.pr_str.call(null,inst_27707);
var inst_27709 = figwheel.client.utils.log.call(null,inst_27708);
var state_27778__$1 = (function (){var statearr_27836 = state_27778;
(statearr_27836[(31)] = inst_27703);

return statearr_27836;
})();
var statearr_27837_27907 = state_27778__$1;
(statearr_27837_27907[(2)] = inst_27709);

(statearr_27837_27907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (35))){
var state_27778__$1 = state_27778;
var statearr_27838_27908 = state_27778__$1;
(statearr_27838_27908[(2)] = true);

(statearr_27838_27908[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (19))){
var inst_27682 = (state_27778[(12)]);
var inst_27688 = figwheel.client.file_reloading.expand_files.call(null,inst_27682);
var state_27778__$1 = state_27778;
var statearr_27839_27909 = state_27778__$1;
(statearr_27839_27909[(2)] = inst_27688);

(statearr_27839_27909[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (11))){
var state_27778__$1 = state_27778;
var statearr_27840_27910 = state_27778__$1;
(statearr_27840_27910[(2)] = null);

(statearr_27840_27910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (9))){
var inst_27671 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
var statearr_27841_27911 = state_27778__$1;
(statearr_27841_27911[(2)] = inst_27671);

(statearr_27841_27911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (5))){
var inst_27642 = (state_27778[(7)]);
var inst_27641 = (state_27778[(10)]);
var inst_27644 = (inst_27642 < inst_27641);
var inst_27645 = inst_27644;
var state_27778__$1 = state_27778;
if(cljs.core.truth_(inst_27645)){
var statearr_27842_27912 = state_27778__$1;
(statearr_27842_27912[(1)] = (7));

} else {
var statearr_27843_27913 = state_27778__$1;
(statearr_27843_27913[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (14))){
var inst_27652 = (state_27778[(22)]);
var inst_27661 = cljs.core.first.call(null,inst_27652);
var inst_27662 = figwheel.client.file_reloading.eval_body.call(null,inst_27661,opts);
var inst_27663 = cljs.core.next.call(null,inst_27652);
var inst_27639 = inst_27663;
var inst_27640 = null;
var inst_27641 = (0);
var inst_27642 = (0);
var state_27778__$1 = (function (){var statearr_27844 = state_27778;
(statearr_27844[(7)] = inst_27642);

(statearr_27844[(8)] = inst_27639);

(statearr_27844[(9)] = inst_27640);

(statearr_27844[(32)] = inst_27662);

(statearr_27844[(10)] = inst_27641);

return statearr_27844;
})();
var statearr_27845_27914 = state_27778__$1;
(statearr_27845_27914[(2)] = null);

(statearr_27845_27914[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (45))){
var state_27778__$1 = state_27778;
var statearr_27846_27915 = state_27778__$1;
(statearr_27846_27915[(2)] = null);

(statearr_27846_27915[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (26))){
var inst_27692 = (state_27778[(19)]);
var inst_27700 = (state_27778[(23)]);
var inst_27698 = (state_27778[(26)]);
var inst_27696 = (state_27778[(24)]);
var inst_27695 = (state_27778[(25)]);
var inst_27715 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27717 = (function (){var all_files = inst_27692;
var res_SINGLEQUOTE_ = inst_27695;
var res = inst_27696;
var files_not_loaded = inst_27698;
var dependencies_that_loaded = inst_27700;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27692,inst_27700,inst_27698,inst_27696,inst_27695,inst_27715,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27716){
var map__27847 = p__27716;
var map__27847__$1 = ((((!((map__27847 == null)))?((((map__27847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27847):map__27847);
var namespace = cljs.core.get.call(null,map__27847__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27847__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27692,inst_27700,inst_27698,inst_27696,inst_27695,inst_27715,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27718 = cljs.core.map.call(null,inst_27717,inst_27696);
var inst_27719 = cljs.core.pr_str.call(null,inst_27718);
var inst_27720 = figwheel.client.utils.log.call(null,inst_27719);
var inst_27721 = (function (){var all_files = inst_27692;
var res_SINGLEQUOTE_ = inst_27695;
var res = inst_27696;
var files_not_loaded = inst_27698;
var dependencies_that_loaded = inst_27700;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27692,inst_27700,inst_27698,inst_27696,inst_27695,inst_27715,inst_27717,inst_27718,inst_27719,inst_27720,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27692,inst_27700,inst_27698,inst_27696,inst_27695,inst_27715,inst_27717,inst_27718,inst_27719,inst_27720,state_val_27779,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27722 = setTimeout(inst_27721,(10));
var state_27778__$1 = (function (){var statearr_27849 = state_27778;
(statearr_27849[(33)] = inst_27720);

(statearr_27849[(34)] = inst_27715);

return statearr_27849;
})();
var statearr_27850_27916 = state_27778__$1;
(statearr_27850_27916[(2)] = inst_27722);

(statearr_27850_27916[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (16))){
var state_27778__$1 = state_27778;
var statearr_27851_27917 = state_27778__$1;
(statearr_27851_27917[(2)] = reload_dependents);

(statearr_27851_27917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (38))){
var inst_27732 = (state_27778[(16)]);
var inst_27749 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27732);
var state_27778__$1 = state_27778;
var statearr_27852_27918 = state_27778__$1;
(statearr_27852_27918[(2)] = inst_27749);

(statearr_27852_27918[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (30))){
var state_27778__$1 = state_27778;
var statearr_27853_27919 = state_27778__$1;
(statearr_27853_27919[(2)] = null);

(statearr_27853_27919[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (10))){
var inst_27652 = (state_27778[(22)]);
var inst_27654 = cljs.core.chunked_seq_QMARK_.call(null,inst_27652);
var state_27778__$1 = state_27778;
if(inst_27654){
var statearr_27854_27920 = state_27778__$1;
(statearr_27854_27920[(1)] = (13));

} else {
var statearr_27855_27921 = state_27778__$1;
(statearr_27855_27921[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (18))){
var inst_27686 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
if(cljs.core.truth_(inst_27686)){
var statearr_27856_27922 = state_27778__$1;
(statearr_27856_27922[(1)] = (19));

} else {
var statearr_27857_27923 = state_27778__$1;
(statearr_27857_27923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (42))){
var state_27778__$1 = state_27778;
var statearr_27858_27924 = state_27778__$1;
(statearr_27858_27924[(2)] = null);

(statearr_27858_27924[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (37))){
var inst_27744 = (state_27778[(2)]);
var state_27778__$1 = state_27778;
var statearr_27859_27925 = state_27778__$1;
(statearr_27859_27925[(2)] = inst_27744);

(statearr_27859_27925[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27779 === (8))){
var inst_27639 = (state_27778[(8)]);
var inst_27652 = (state_27778[(22)]);
var inst_27652__$1 = cljs.core.seq.call(null,inst_27639);
var state_27778__$1 = (function (){var statearr_27860 = state_27778;
(statearr_27860[(22)] = inst_27652__$1);

return statearr_27860;
})();
if(inst_27652__$1){
var statearr_27861_27926 = state_27778__$1;
(statearr_27861_27926[(1)] = (10));

} else {
var statearr_27862_27927 = state_27778__$1;
(statearr_27862_27927[(1)] = (11));

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
});})(c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24039__auto__,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto____0 = (function (){
var statearr_27866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27866[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto__);

(statearr_27866[(1)] = (1));

return statearr_27866;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto____1 = (function (state_27778){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_27778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e27867){if((e27867 instanceof Object)){
var ex__24043__auto__ = e27867;
var statearr_27868_27928 = state_27778;
(statearr_27868_27928[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27929 = state_27778;
state_27778 = G__27929;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto__ = function(state_27778){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto____1.call(this,state_27778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24153__auto__ = (function (){var statearr_27869 = f__24152__auto__.call(null);
(statearr_27869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto__);

return statearr_27869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto__,map__27624,map__27624__$1,opts,before_jsload,on_jsload,reload_dependents,map__27625,map__27625__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24151__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27932,link){
var map__27935 = p__27932;
var map__27935__$1 = ((((!((map__27935 == null)))?((((map__27935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27935):map__27935);
var file = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27935,map__27935__$1,file){
return (function (p1__27930_SHARP_,p2__27931_SHARP_){
if(cljs.core._EQ_.call(null,p1__27930_SHARP_,p2__27931_SHARP_)){
return p1__27930_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27935,map__27935__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27941){
var map__27942 = p__27941;
var map__27942__$1 = ((((!((map__27942 == null)))?((((map__27942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27942):map__27942);
var match_length = cljs.core.get.call(null,map__27942__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27942__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27937_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27937_SHARP_);
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
var args27944 = [];
var len__17809__auto___27947 = arguments.length;
var i__17810__auto___27948 = (0);
while(true){
if((i__17810__auto___27948 < len__17809__auto___27947)){
args27944.push((arguments[i__17810__auto___27948]));

var G__27949 = (i__17810__auto___27948 + (1));
i__17810__auto___27948 = G__27949;
continue;
} else {
}
break;
}

var G__27946 = args27944.length;
switch (G__27946) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27944.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27951_SHARP_,p2__27952_SHARP_){
return cljs.core.assoc.call(null,p1__27951_SHARP_,cljs.core.get.call(null,p2__27952_SHARP_,key),p2__27952_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27953){
var map__27956 = p__27953;
var map__27956__$1 = ((((!((map__27956 == null)))?((((map__27956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27956):map__27956);
var f_data = map__27956__$1;
var file = cljs.core.get.call(null,map__27956__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27958,files_msg){
var map__27965 = p__27958;
var map__27965__$1 = ((((!((map__27965 == null)))?((((map__27965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27965):map__27965);
var opts = map__27965__$1;
var on_cssload = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27967_27971 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27968_27972 = null;
var count__27969_27973 = (0);
var i__27970_27974 = (0);
while(true){
if((i__27970_27974 < count__27969_27973)){
var f_27975 = cljs.core._nth.call(null,chunk__27968_27972,i__27970_27974);
figwheel.client.file_reloading.reload_css_file.call(null,f_27975);

var G__27976 = seq__27967_27971;
var G__27977 = chunk__27968_27972;
var G__27978 = count__27969_27973;
var G__27979 = (i__27970_27974 + (1));
seq__27967_27971 = G__27976;
chunk__27968_27972 = G__27977;
count__27969_27973 = G__27978;
i__27970_27974 = G__27979;
continue;
} else {
var temp__4425__auto___27980 = cljs.core.seq.call(null,seq__27967_27971);
if(temp__4425__auto___27980){
var seq__27967_27981__$1 = temp__4425__auto___27980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27967_27981__$1)){
var c__17554__auto___27982 = cljs.core.chunk_first.call(null,seq__27967_27981__$1);
var G__27983 = cljs.core.chunk_rest.call(null,seq__27967_27981__$1);
var G__27984 = c__17554__auto___27982;
var G__27985 = cljs.core.count.call(null,c__17554__auto___27982);
var G__27986 = (0);
seq__27967_27971 = G__27983;
chunk__27968_27972 = G__27984;
count__27969_27973 = G__27985;
i__27970_27974 = G__27986;
continue;
} else {
var f_27987 = cljs.core.first.call(null,seq__27967_27981__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27987);

var G__27988 = cljs.core.next.call(null,seq__27967_27981__$1);
var G__27989 = null;
var G__27990 = (0);
var G__27991 = (0);
seq__27967_27971 = G__27988;
chunk__27968_27972 = G__27989;
count__27969_27973 = G__27990;
i__27970_27974 = G__27991;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27965,map__27965__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27965,map__27965__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1448194815245