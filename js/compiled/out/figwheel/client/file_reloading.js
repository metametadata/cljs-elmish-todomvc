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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26855_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26855_SHARP_));
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
var seq__26860 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26861 = null;
var count__26862 = (0);
var i__26863 = (0);
while(true){
if((i__26863 < count__26862)){
var n = cljs.core._nth.call(null,chunk__26861,i__26863);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26864 = seq__26860;
var G__26865 = chunk__26861;
var G__26866 = count__26862;
var G__26867 = (i__26863 + (1));
seq__26860 = G__26864;
chunk__26861 = G__26865;
count__26862 = G__26866;
i__26863 = G__26867;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26860);
if(temp__4425__auto__){
var seq__26860__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26860__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__26860__$1);
var G__26868 = cljs.core.chunk_rest.call(null,seq__26860__$1);
var G__26869 = c__17554__auto__;
var G__26870 = cljs.core.count.call(null,c__17554__auto__);
var G__26871 = (0);
seq__26860 = G__26868;
chunk__26861 = G__26869;
count__26862 = G__26870;
i__26863 = G__26871;
continue;
} else {
var n = cljs.core.first.call(null,seq__26860__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26872 = cljs.core.next.call(null,seq__26860__$1);
var G__26873 = null;
var G__26874 = (0);
var G__26875 = (0);
seq__26860 = G__26872;
chunk__26861 = G__26873;
count__26862 = G__26874;
i__26863 = G__26875;
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

var seq__26914_26921 = cljs.core.seq.call(null,deps);
var chunk__26915_26922 = null;
var count__26916_26923 = (0);
var i__26917_26924 = (0);
while(true){
if((i__26917_26924 < count__26916_26923)){
var dep_26925 = cljs.core._nth.call(null,chunk__26915_26922,i__26917_26924);
topo_sort_helper_STAR_.call(null,dep_26925,(depth + (1)),state);

var G__26926 = seq__26914_26921;
var G__26927 = chunk__26915_26922;
var G__26928 = count__26916_26923;
var G__26929 = (i__26917_26924 + (1));
seq__26914_26921 = G__26926;
chunk__26915_26922 = G__26927;
count__26916_26923 = G__26928;
i__26917_26924 = G__26929;
continue;
} else {
var temp__4425__auto___26930 = cljs.core.seq.call(null,seq__26914_26921);
if(temp__4425__auto___26930){
var seq__26914_26931__$1 = temp__4425__auto___26930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26914_26931__$1)){
var c__17554__auto___26932 = cljs.core.chunk_first.call(null,seq__26914_26931__$1);
var G__26933 = cljs.core.chunk_rest.call(null,seq__26914_26931__$1);
var G__26934 = c__17554__auto___26932;
var G__26935 = cljs.core.count.call(null,c__17554__auto___26932);
var G__26936 = (0);
seq__26914_26921 = G__26933;
chunk__26915_26922 = G__26934;
count__26916_26923 = G__26935;
i__26917_26924 = G__26936;
continue;
} else {
var dep_26937 = cljs.core.first.call(null,seq__26914_26931__$1);
topo_sort_helper_STAR_.call(null,dep_26937,(depth + (1)),state);

var G__26938 = cljs.core.next.call(null,seq__26914_26931__$1);
var G__26939 = null;
var G__26940 = (0);
var G__26941 = (0);
seq__26914_26921 = G__26938;
chunk__26915_26922 = G__26939;
count__26916_26923 = G__26940;
i__26917_26924 = G__26941;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26918){
var vec__26920 = p__26918;
var x = cljs.core.nth.call(null,vec__26920,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26920,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26920,x,xs,get_deps__$1){
return (function (p1__26876_SHARP_){
return clojure.set.difference.call(null,p1__26876_SHARP_,x);
});})(vec__26920,x,xs,get_deps__$1))
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
var seq__26954 = cljs.core.seq.call(null,provides);
var chunk__26955 = null;
var count__26956 = (0);
var i__26957 = (0);
while(true){
if((i__26957 < count__26956)){
var prov = cljs.core._nth.call(null,chunk__26955,i__26957);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26958_26966 = cljs.core.seq.call(null,requires);
var chunk__26959_26967 = null;
var count__26960_26968 = (0);
var i__26961_26969 = (0);
while(true){
if((i__26961_26969 < count__26960_26968)){
var req_26970 = cljs.core._nth.call(null,chunk__26959_26967,i__26961_26969);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26970,prov);

var G__26971 = seq__26958_26966;
var G__26972 = chunk__26959_26967;
var G__26973 = count__26960_26968;
var G__26974 = (i__26961_26969 + (1));
seq__26958_26966 = G__26971;
chunk__26959_26967 = G__26972;
count__26960_26968 = G__26973;
i__26961_26969 = G__26974;
continue;
} else {
var temp__4425__auto___26975 = cljs.core.seq.call(null,seq__26958_26966);
if(temp__4425__auto___26975){
var seq__26958_26976__$1 = temp__4425__auto___26975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26958_26976__$1)){
var c__17554__auto___26977 = cljs.core.chunk_first.call(null,seq__26958_26976__$1);
var G__26978 = cljs.core.chunk_rest.call(null,seq__26958_26976__$1);
var G__26979 = c__17554__auto___26977;
var G__26980 = cljs.core.count.call(null,c__17554__auto___26977);
var G__26981 = (0);
seq__26958_26966 = G__26978;
chunk__26959_26967 = G__26979;
count__26960_26968 = G__26980;
i__26961_26969 = G__26981;
continue;
} else {
var req_26982 = cljs.core.first.call(null,seq__26958_26976__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26982,prov);

var G__26983 = cljs.core.next.call(null,seq__26958_26976__$1);
var G__26984 = null;
var G__26985 = (0);
var G__26986 = (0);
seq__26958_26966 = G__26983;
chunk__26959_26967 = G__26984;
count__26960_26968 = G__26985;
i__26961_26969 = G__26986;
continue;
}
} else {
}
}
break;
}

var G__26987 = seq__26954;
var G__26988 = chunk__26955;
var G__26989 = count__26956;
var G__26990 = (i__26957 + (1));
seq__26954 = G__26987;
chunk__26955 = G__26988;
count__26956 = G__26989;
i__26957 = G__26990;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26954);
if(temp__4425__auto__){
var seq__26954__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26954__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__26954__$1);
var G__26991 = cljs.core.chunk_rest.call(null,seq__26954__$1);
var G__26992 = c__17554__auto__;
var G__26993 = cljs.core.count.call(null,c__17554__auto__);
var G__26994 = (0);
seq__26954 = G__26991;
chunk__26955 = G__26992;
count__26956 = G__26993;
i__26957 = G__26994;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26954__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26962_26995 = cljs.core.seq.call(null,requires);
var chunk__26963_26996 = null;
var count__26964_26997 = (0);
var i__26965_26998 = (0);
while(true){
if((i__26965_26998 < count__26964_26997)){
var req_26999 = cljs.core._nth.call(null,chunk__26963_26996,i__26965_26998);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26999,prov);

var G__27000 = seq__26962_26995;
var G__27001 = chunk__26963_26996;
var G__27002 = count__26964_26997;
var G__27003 = (i__26965_26998 + (1));
seq__26962_26995 = G__27000;
chunk__26963_26996 = G__27001;
count__26964_26997 = G__27002;
i__26965_26998 = G__27003;
continue;
} else {
var temp__4425__auto___27004__$1 = cljs.core.seq.call(null,seq__26962_26995);
if(temp__4425__auto___27004__$1){
var seq__26962_27005__$1 = temp__4425__auto___27004__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26962_27005__$1)){
var c__17554__auto___27006 = cljs.core.chunk_first.call(null,seq__26962_27005__$1);
var G__27007 = cljs.core.chunk_rest.call(null,seq__26962_27005__$1);
var G__27008 = c__17554__auto___27006;
var G__27009 = cljs.core.count.call(null,c__17554__auto___27006);
var G__27010 = (0);
seq__26962_26995 = G__27007;
chunk__26963_26996 = G__27008;
count__26964_26997 = G__27009;
i__26965_26998 = G__27010;
continue;
} else {
var req_27011 = cljs.core.first.call(null,seq__26962_27005__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27011,prov);

var G__27012 = cljs.core.next.call(null,seq__26962_27005__$1);
var G__27013 = null;
var G__27014 = (0);
var G__27015 = (0);
seq__26962_26995 = G__27012;
chunk__26963_26996 = G__27013;
count__26964_26997 = G__27014;
i__26965_26998 = G__27015;
continue;
}
} else {
}
}
break;
}

var G__27016 = cljs.core.next.call(null,seq__26954__$1);
var G__27017 = null;
var G__27018 = (0);
var G__27019 = (0);
seq__26954 = G__27016;
chunk__26955 = G__27017;
count__26956 = G__27018;
i__26957 = G__27019;
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
var seq__27024_27028 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27025_27029 = null;
var count__27026_27030 = (0);
var i__27027_27031 = (0);
while(true){
if((i__27027_27031 < count__27026_27030)){
var ns_27032 = cljs.core._nth.call(null,chunk__27025_27029,i__27027_27031);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27032);

var G__27033 = seq__27024_27028;
var G__27034 = chunk__27025_27029;
var G__27035 = count__27026_27030;
var G__27036 = (i__27027_27031 + (1));
seq__27024_27028 = G__27033;
chunk__27025_27029 = G__27034;
count__27026_27030 = G__27035;
i__27027_27031 = G__27036;
continue;
} else {
var temp__4425__auto___27037 = cljs.core.seq.call(null,seq__27024_27028);
if(temp__4425__auto___27037){
var seq__27024_27038__$1 = temp__4425__auto___27037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27024_27038__$1)){
var c__17554__auto___27039 = cljs.core.chunk_first.call(null,seq__27024_27038__$1);
var G__27040 = cljs.core.chunk_rest.call(null,seq__27024_27038__$1);
var G__27041 = c__17554__auto___27039;
var G__27042 = cljs.core.count.call(null,c__17554__auto___27039);
var G__27043 = (0);
seq__27024_27028 = G__27040;
chunk__27025_27029 = G__27041;
count__27026_27030 = G__27042;
i__27027_27031 = G__27043;
continue;
} else {
var ns_27044 = cljs.core.first.call(null,seq__27024_27038__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27044);

var G__27045 = cljs.core.next.call(null,seq__27024_27038__$1);
var G__27046 = null;
var G__27047 = (0);
var G__27048 = (0);
seq__27024_27028 = G__27045;
chunk__27025_27029 = G__27046;
count__27026_27030 = G__27047;
i__27027_27031 = G__27048;
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
var G__27049__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27050__i = 0, G__27050__a = new Array(arguments.length -  0);
while (G__27050__i < G__27050__a.length) {G__27050__a[G__27050__i] = arguments[G__27050__i + 0]; ++G__27050__i;}
  args = new cljs.core.IndexedSeq(G__27050__a,0);
} 
return G__27049__delegate.call(this,args);};
G__27049.cljs$lang$maxFixedArity = 0;
G__27049.cljs$lang$applyTo = (function (arglist__27051){
var args = cljs.core.seq(arglist__27051);
return G__27049__delegate(args);
});
G__27049.cljs$core$IFn$_invoke$arity$variadic = G__27049__delegate;
return G__27049;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27053 = cljs.core._EQ_;
var expr__27054 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27053.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27054))){
var path_parts = ((function (pred__27053,expr__27054){
return (function (p1__27052_SHARP_){
return clojure.string.split.call(null,p1__27052_SHARP_,/[\/\\]/);
});})(pred__27053,expr__27054))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27053,expr__27054){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27056){if((e27056 instanceof Error)){
var e = e27056;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27056;

}
}})());
});
;})(path_parts,sep,root,pred__27053,expr__27054))
} else {
if(cljs.core.truth_(pred__27053.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27054))){
return ((function (pred__27053,expr__27054){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27053,expr__27054){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27053,expr__27054))
);

return deferred.addErrback(((function (deferred,pred__27053,expr__27054){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27053,expr__27054))
);
});
;})(pred__27053,expr__27054))
} else {
return ((function (pred__27053,expr__27054){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27053,expr__27054))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27057,callback){
var map__27060 = p__27057;
var map__27060__$1 = ((((!((map__27060 == null)))?((((map__27060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27060):map__27060);
var file_msg = map__27060__$1;
var request_url = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27060,map__27060__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27060,map__27060__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto__){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto__){
return (function (state_27084){
var state_val_27085 = (state_27084[(1)]);
if((state_val_27085 === (7))){
var inst_27080 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
var statearr_27086_27106 = state_27084__$1;
(statearr_27086_27106[(2)] = inst_27080);

(statearr_27086_27106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (1))){
var state_27084__$1 = state_27084;
var statearr_27087_27107 = state_27084__$1;
(statearr_27087_27107[(2)] = null);

(statearr_27087_27107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (4))){
var inst_27064 = (state_27084[(7)]);
var inst_27064__$1 = (state_27084[(2)]);
var state_27084__$1 = (function (){var statearr_27088 = state_27084;
(statearr_27088[(7)] = inst_27064__$1);

return statearr_27088;
})();
if(cljs.core.truth_(inst_27064__$1)){
var statearr_27089_27108 = state_27084__$1;
(statearr_27089_27108[(1)] = (5));

} else {
var statearr_27090_27109 = state_27084__$1;
(statearr_27090_27109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (6))){
var state_27084__$1 = state_27084;
var statearr_27091_27110 = state_27084__$1;
(statearr_27091_27110[(2)] = null);

(statearr_27091_27110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (3))){
var inst_27082 = (state_27084[(2)]);
var state_27084__$1 = state_27084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27084__$1,inst_27082);
} else {
if((state_val_27085 === (2))){
var state_27084__$1 = state_27084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27084__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27085 === (11))){
var inst_27076 = (state_27084[(2)]);
var state_27084__$1 = (function (){var statearr_27092 = state_27084;
(statearr_27092[(8)] = inst_27076);

return statearr_27092;
})();
var statearr_27093_27111 = state_27084__$1;
(statearr_27093_27111[(2)] = null);

(statearr_27093_27111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (9))){
var inst_27068 = (state_27084[(9)]);
var inst_27070 = (state_27084[(10)]);
var inst_27072 = inst_27070.call(null,inst_27068);
var state_27084__$1 = state_27084;
var statearr_27094_27112 = state_27084__$1;
(statearr_27094_27112[(2)] = inst_27072);

(statearr_27094_27112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (5))){
var inst_27064 = (state_27084[(7)]);
var inst_27066 = figwheel.client.file_reloading.blocking_load.call(null,inst_27064);
var state_27084__$1 = state_27084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27084__$1,(8),inst_27066);
} else {
if((state_val_27085 === (10))){
var inst_27068 = (state_27084[(9)]);
var inst_27074 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27068);
var state_27084__$1 = state_27084;
var statearr_27095_27113 = state_27084__$1;
(statearr_27095_27113[(2)] = inst_27074);

(statearr_27095_27113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27085 === (8))){
var inst_27064 = (state_27084[(7)]);
var inst_27070 = (state_27084[(10)]);
var inst_27068 = (state_27084[(2)]);
var inst_27069 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27070__$1 = cljs.core.get.call(null,inst_27069,inst_27064);
var state_27084__$1 = (function (){var statearr_27096 = state_27084;
(statearr_27096[(9)] = inst_27068);

(statearr_27096[(10)] = inst_27070__$1);

return statearr_27096;
})();
if(cljs.core.truth_(inst_27070__$1)){
var statearr_27097_27114 = state_27084__$1;
(statearr_27097_27114[(1)] = (9));

} else {
var statearr_27098_27115 = state_27084__$1;
(statearr_27098_27115[(1)] = (10));

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
});})(c__24022__auto__))
;
return ((function (switch__23910__auto__,c__24022__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23911__auto__ = null;
var figwheel$client$file_reloading$state_machine__23911__auto____0 = (function (){
var statearr_27102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27102[(0)] = figwheel$client$file_reloading$state_machine__23911__auto__);

(statearr_27102[(1)] = (1));

return statearr_27102;
});
var figwheel$client$file_reloading$state_machine__23911__auto____1 = (function (state_27084){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_27084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e27103){if((e27103 instanceof Object)){
var ex__23914__auto__ = e27103;
var statearr_27104_27116 = state_27084;
(statearr_27104_27116[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27117 = state_27084;
state_27084 = G__27117;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23911__auto__ = function(state_27084){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23911__auto____1.call(this,state_27084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23911__auto____0;
figwheel$client$file_reloading$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23911__auto____1;
return figwheel$client$file_reloading$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto__))
})();
var state__24024__auto__ = (function (){var statearr_27105 = f__24023__auto__.call(null);
(statearr_27105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto__);

return statearr_27105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto__))
);

return c__24022__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27118,callback){
var map__27121 = p__27118;
var map__27121__$1 = ((((!((map__27121 == null)))?((((map__27121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27121):map__27121);
var file_msg = map__27121__$1;
var namespace = cljs.core.get.call(null,map__27121__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27121,map__27121__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27121,map__27121__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27123){
var map__27126 = p__27123;
var map__27126__$1 = ((((!((map__27126 == null)))?((((map__27126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27126):map__27126);
var file_msg = map__27126__$1;
var namespace = cljs.core.get.call(null,map__27126__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27128,callback){
var map__27131 = p__27128;
var map__27131__$1 = ((((!((map__27131 == null)))?((((map__27131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27131):map__27131);
var file_msg = map__27131__$1;
var request_url = cljs.core.get.call(null,map__27131__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27131__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24022__auto___27219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___27219,out){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___27219,out){
return (function (state_27201){
var state_val_27202 = (state_27201[(1)]);
if((state_val_27202 === (1))){
var inst_27179 = cljs.core.nth.call(null,files,(0),null);
var inst_27180 = cljs.core.nthnext.call(null,files,(1));
var inst_27181 = files;
var state_27201__$1 = (function (){var statearr_27203 = state_27201;
(statearr_27203[(7)] = inst_27179);

(statearr_27203[(8)] = inst_27180);

(statearr_27203[(9)] = inst_27181);

return statearr_27203;
})();
var statearr_27204_27220 = state_27201__$1;
(statearr_27204_27220[(2)] = null);

(statearr_27204_27220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (2))){
var inst_27184 = (state_27201[(10)]);
var inst_27181 = (state_27201[(9)]);
var inst_27184__$1 = cljs.core.nth.call(null,inst_27181,(0),null);
var inst_27185 = cljs.core.nthnext.call(null,inst_27181,(1));
var inst_27186 = (inst_27184__$1 == null);
var inst_27187 = cljs.core.not.call(null,inst_27186);
var state_27201__$1 = (function (){var statearr_27205 = state_27201;
(statearr_27205[(11)] = inst_27185);

(statearr_27205[(10)] = inst_27184__$1);

return statearr_27205;
})();
if(inst_27187){
var statearr_27206_27221 = state_27201__$1;
(statearr_27206_27221[(1)] = (4));

} else {
var statearr_27207_27222 = state_27201__$1;
(statearr_27207_27222[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (3))){
var inst_27199 = (state_27201[(2)]);
var state_27201__$1 = state_27201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27201__$1,inst_27199);
} else {
if((state_val_27202 === (4))){
var inst_27184 = (state_27201[(10)]);
var inst_27189 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27184);
var state_27201__$1 = state_27201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27201__$1,(7),inst_27189);
} else {
if((state_val_27202 === (5))){
var inst_27195 = cljs.core.async.close_BANG_.call(null,out);
var state_27201__$1 = state_27201;
var statearr_27208_27223 = state_27201__$1;
(statearr_27208_27223[(2)] = inst_27195);

(statearr_27208_27223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (6))){
var inst_27197 = (state_27201[(2)]);
var state_27201__$1 = state_27201;
var statearr_27209_27224 = state_27201__$1;
(statearr_27209_27224[(2)] = inst_27197);

(statearr_27209_27224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (7))){
var inst_27185 = (state_27201[(11)]);
var inst_27191 = (state_27201[(2)]);
var inst_27192 = cljs.core.async.put_BANG_.call(null,out,inst_27191);
var inst_27181 = inst_27185;
var state_27201__$1 = (function (){var statearr_27210 = state_27201;
(statearr_27210[(12)] = inst_27192);

(statearr_27210[(9)] = inst_27181);

return statearr_27210;
})();
var statearr_27211_27225 = state_27201__$1;
(statearr_27211_27225[(2)] = null);

(statearr_27211_27225[(1)] = (2));


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
});})(c__24022__auto___27219,out))
;
return ((function (switch__23910__auto__,c__24022__auto___27219,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto____0 = (function (){
var statearr_27215 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27215[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto__);

(statearr_27215[(1)] = (1));

return statearr_27215;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto____1 = (function (state_27201){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_27201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e27216){if((e27216 instanceof Object)){
var ex__23914__auto__ = e27216;
var statearr_27217_27226 = state_27201;
(statearr_27217_27226[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27227 = state_27201;
state_27201 = G__27227;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto__ = function(state_27201){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto____1.call(this,state_27201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___27219,out))
})();
var state__24024__auto__ = (function (){var statearr_27218 = f__24023__auto__.call(null);
(statearr_27218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___27219);

return statearr_27218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___27219,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27228,opts){
var map__27232 = p__27228;
var map__27232__$1 = ((((!((map__27232 == null)))?((((map__27232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27232):map__27232);
var eval_body__$1 = cljs.core.get.call(null,map__27232__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27232__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27234){var e = e27234;
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
return (function (p1__27235_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27235_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27240){
var vec__27241 = p__27240;
var k = cljs.core.nth.call(null,vec__27241,(0),null);
var v = cljs.core.nth.call(null,vec__27241,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27242){
var vec__27243 = p__27242;
var k = cljs.core.nth.call(null,vec__27243,(0),null);
var v = cljs.core.nth.call(null,vec__27243,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27247,p__27248){
var map__27495 = p__27247;
var map__27495__$1 = ((((!((map__27495 == null)))?((((map__27495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27495):map__27495);
var opts = map__27495__$1;
var before_jsload = cljs.core.get.call(null,map__27495__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27495__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27495__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27496 = p__27248;
var map__27496__$1 = ((((!((map__27496 == null)))?((((map__27496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27496):map__27496);
var msg = map__27496__$1;
var files = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27649){
var state_val_27650 = (state_27649[(1)]);
if((state_val_27650 === (7))){
var inst_27512 = (state_27649[(7)]);
var inst_27510 = (state_27649[(8)]);
var inst_27511 = (state_27649[(9)]);
var inst_27513 = (state_27649[(10)]);
var inst_27518 = cljs.core._nth.call(null,inst_27511,inst_27513);
var inst_27519 = figwheel.client.file_reloading.eval_body.call(null,inst_27518,opts);
var inst_27520 = (inst_27513 + (1));
var tmp27651 = inst_27512;
var tmp27652 = inst_27510;
var tmp27653 = inst_27511;
var inst_27510__$1 = tmp27652;
var inst_27511__$1 = tmp27653;
var inst_27512__$1 = tmp27651;
var inst_27513__$1 = inst_27520;
var state_27649__$1 = (function (){var statearr_27654 = state_27649;
(statearr_27654[(11)] = inst_27519);

(statearr_27654[(7)] = inst_27512__$1);

(statearr_27654[(8)] = inst_27510__$1);

(statearr_27654[(9)] = inst_27511__$1);

(statearr_27654[(10)] = inst_27513__$1);

return statearr_27654;
})();
var statearr_27655_27741 = state_27649__$1;
(statearr_27655_27741[(2)] = null);

(statearr_27655_27741[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (20))){
var inst_27553 = (state_27649[(12)]);
var inst_27561 = figwheel.client.file_reloading.sort_files.call(null,inst_27553);
var state_27649__$1 = state_27649;
var statearr_27656_27742 = state_27649__$1;
(statearr_27656_27742[(2)] = inst_27561);

(statearr_27656_27742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (27))){
var state_27649__$1 = state_27649;
var statearr_27657_27743 = state_27649__$1;
(statearr_27657_27743[(2)] = null);

(statearr_27657_27743[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (1))){
var inst_27502 = (state_27649[(13)]);
var inst_27499 = before_jsload.call(null,files);
var inst_27500 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27501 = (function (){return ((function (inst_27502,inst_27499,inst_27500,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27244_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27244_SHARP_);
});
;})(inst_27502,inst_27499,inst_27500,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27502__$1 = cljs.core.filter.call(null,inst_27501,files);
var inst_27503 = cljs.core.not_empty.call(null,inst_27502__$1);
var state_27649__$1 = (function (){var statearr_27658 = state_27649;
(statearr_27658[(14)] = inst_27499);

(statearr_27658[(15)] = inst_27500);

(statearr_27658[(13)] = inst_27502__$1);

return statearr_27658;
})();
if(cljs.core.truth_(inst_27503)){
var statearr_27659_27744 = state_27649__$1;
(statearr_27659_27744[(1)] = (2));

} else {
var statearr_27660_27745 = state_27649__$1;
(statearr_27660_27745[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (24))){
var state_27649__$1 = state_27649;
var statearr_27661_27746 = state_27649__$1;
(statearr_27661_27746[(2)] = null);

(statearr_27661_27746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (39))){
var inst_27603 = (state_27649[(16)]);
var state_27649__$1 = state_27649;
var statearr_27662_27747 = state_27649__$1;
(statearr_27662_27747[(2)] = inst_27603);

(statearr_27662_27747[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (46))){
var inst_27644 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
var statearr_27663_27748 = state_27649__$1;
(statearr_27663_27748[(2)] = inst_27644);

(statearr_27663_27748[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (4))){
var inst_27547 = (state_27649[(2)]);
var inst_27548 = cljs.core.List.EMPTY;
var inst_27549 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27548);
var inst_27550 = (function (){return ((function (inst_27547,inst_27548,inst_27549,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27245_SHARP_){
var and__16739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27245_SHARP_);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27245_SHARP_));
} else {
return and__16739__auto__;
}
});
;})(inst_27547,inst_27548,inst_27549,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27551 = cljs.core.filter.call(null,inst_27550,files);
var inst_27552 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27553 = cljs.core.concat.call(null,inst_27551,inst_27552);
var state_27649__$1 = (function (){var statearr_27664 = state_27649;
(statearr_27664[(17)] = inst_27549);

(statearr_27664[(18)] = inst_27547);

(statearr_27664[(12)] = inst_27553);

return statearr_27664;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27665_27749 = state_27649__$1;
(statearr_27665_27749[(1)] = (16));

} else {
var statearr_27666_27750 = state_27649__$1;
(statearr_27666_27750[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (15))){
var inst_27537 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
var statearr_27667_27751 = state_27649__$1;
(statearr_27667_27751[(2)] = inst_27537);

(statearr_27667_27751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (21))){
var inst_27563 = (state_27649[(19)]);
var inst_27563__$1 = (state_27649[(2)]);
var inst_27564 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27563__$1);
var state_27649__$1 = (function (){var statearr_27668 = state_27649;
(statearr_27668[(19)] = inst_27563__$1);

return statearr_27668;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27649__$1,(22),inst_27564);
} else {
if((state_val_27650 === (31))){
var inst_27647 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27649__$1,inst_27647);
} else {
if((state_val_27650 === (32))){
var inst_27603 = (state_27649[(16)]);
var inst_27608 = inst_27603.cljs$lang$protocol_mask$partition0$;
var inst_27609 = (inst_27608 & (64));
var inst_27610 = inst_27603.cljs$core$ISeq$;
var inst_27611 = (inst_27609) || (inst_27610);
var state_27649__$1 = state_27649;
if(cljs.core.truth_(inst_27611)){
var statearr_27669_27752 = state_27649__$1;
(statearr_27669_27752[(1)] = (35));

} else {
var statearr_27670_27753 = state_27649__$1;
(statearr_27670_27753[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (40))){
var inst_27624 = (state_27649[(20)]);
var inst_27623 = (state_27649[(2)]);
var inst_27624__$1 = cljs.core.get.call(null,inst_27623,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27625 = cljs.core.get.call(null,inst_27623,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27626 = cljs.core.not_empty.call(null,inst_27624__$1);
var state_27649__$1 = (function (){var statearr_27671 = state_27649;
(statearr_27671[(20)] = inst_27624__$1);

(statearr_27671[(21)] = inst_27625);

return statearr_27671;
})();
if(cljs.core.truth_(inst_27626)){
var statearr_27672_27754 = state_27649__$1;
(statearr_27672_27754[(1)] = (41));

} else {
var statearr_27673_27755 = state_27649__$1;
(statearr_27673_27755[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (33))){
var state_27649__$1 = state_27649;
var statearr_27674_27756 = state_27649__$1;
(statearr_27674_27756[(2)] = false);

(statearr_27674_27756[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (13))){
var inst_27523 = (state_27649[(22)]);
var inst_27527 = cljs.core.chunk_first.call(null,inst_27523);
var inst_27528 = cljs.core.chunk_rest.call(null,inst_27523);
var inst_27529 = cljs.core.count.call(null,inst_27527);
var inst_27510 = inst_27528;
var inst_27511 = inst_27527;
var inst_27512 = inst_27529;
var inst_27513 = (0);
var state_27649__$1 = (function (){var statearr_27675 = state_27649;
(statearr_27675[(7)] = inst_27512);

(statearr_27675[(8)] = inst_27510);

(statearr_27675[(9)] = inst_27511);

(statearr_27675[(10)] = inst_27513);

return statearr_27675;
})();
var statearr_27676_27757 = state_27649__$1;
(statearr_27676_27757[(2)] = null);

(statearr_27676_27757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (22))){
var inst_27563 = (state_27649[(19)]);
var inst_27567 = (state_27649[(23)]);
var inst_27566 = (state_27649[(24)]);
var inst_27571 = (state_27649[(25)]);
var inst_27566__$1 = (state_27649[(2)]);
var inst_27567__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27566__$1);
var inst_27568 = (function (){var all_files = inst_27563;
var res_SINGLEQUOTE_ = inst_27566__$1;
var res = inst_27567__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27563,inst_27567,inst_27566,inst_27571,inst_27566__$1,inst_27567__$1,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27246_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27246_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27563,inst_27567,inst_27566,inst_27571,inst_27566__$1,inst_27567__$1,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27569 = cljs.core.filter.call(null,inst_27568,inst_27566__$1);
var inst_27570 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27571__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27570);
var inst_27572 = cljs.core.not_empty.call(null,inst_27571__$1);
var state_27649__$1 = (function (){var statearr_27677 = state_27649;
(statearr_27677[(23)] = inst_27567__$1);

(statearr_27677[(26)] = inst_27569);

(statearr_27677[(24)] = inst_27566__$1);

(statearr_27677[(25)] = inst_27571__$1);

return statearr_27677;
})();
if(cljs.core.truth_(inst_27572)){
var statearr_27678_27758 = state_27649__$1;
(statearr_27678_27758[(1)] = (23));

} else {
var statearr_27679_27759 = state_27649__$1;
(statearr_27679_27759[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (36))){
var state_27649__$1 = state_27649;
var statearr_27680_27760 = state_27649__$1;
(statearr_27680_27760[(2)] = false);

(statearr_27680_27760[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (41))){
var inst_27624 = (state_27649[(20)]);
var inst_27628 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27629 = cljs.core.map.call(null,inst_27628,inst_27624);
var inst_27630 = cljs.core.pr_str.call(null,inst_27629);
var inst_27631 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27630)].join('');
var inst_27632 = figwheel.client.utils.log.call(null,inst_27631);
var state_27649__$1 = state_27649;
var statearr_27681_27761 = state_27649__$1;
(statearr_27681_27761[(2)] = inst_27632);

(statearr_27681_27761[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (43))){
var inst_27625 = (state_27649[(21)]);
var inst_27635 = (state_27649[(2)]);
var inst_27636 = cljs.core.not_empty.call(null,inst_27625);
var state_27649__$1 = (function (){var statearr_27682 = state_27649;
(statearr_27682[(27)] = inst_27635);

return statearr_27682;
})();
if(cljs.core.truth_(inst_27636)){
var statearr_27683_27762 = state_27649__$1;
(statearr_27683_27762[(1)] = (44));

} else {
var statearr_27684_27763 = state_27649__$1;
(statearr_27684_27763[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (29))){
var inst_27603 = (state_27649[(16)]);
var inst_27563 = (state_27649[(19)]);
var inst_27567 = (state_27649[(23)]);
var inst_27569 = (state_27649[(26)]);
var inst_27566 = (state_27649[(24)]);
var inst_27571 = (state_27649[(25)]);
var inst_27599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27602 = (function (){var all_files = inst_27563;
var res_SINGLEQUOTE_ = inst_27566;
var res = inst_27567;
var files_not_loaded = inst_27569;
var dependencies_that_loaded = inst_27571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27603,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27599,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27601){
var map__27685 = p__27601;
var map__27685__$1 = ((((!((map__27685 == null)))?((((map__27685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27685):map__27685);
var namespace = cljs.core.get.call(null,map__27685__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27603,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27599,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27603__$1 = cljs.core.group_by.call(null,inst_27602,inst_27569);
var inst_27605 = (inst_27603__$1 == null);
var inst_27606 = cljs.core.not.call(null,inst_27605);
var state_27649__$1 = (function (){var statearr_27687 = state_27649;
(statearr_27687[(16)] = inst_27603__$1);

(statearr_27687[(28)] = inst_27599);

return statearr_27687;
})();
if(inst_27606){
var statearr_27688_27764 = state_27649__$1;
(statearr_27688_27764[(1)] = (32));

} else {
var statearr_27689_27765 = state_27649__$1;
(statearr_27689_27765[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (44))){
var inst_27625 = (state_27649[(21)]);
var inst_27638 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27625);
var inst_27639 = cljs.core.pr_str.call(null,inst_27638);
var inst_27640 = [cljs.core.str("not required: "),cljs.core.str(inst_27639)].join('');
var inst_27641 = figwheel.client.utils.log.call(null,inst_27640);
var state_27649__$1 = state_27649;
var statearr_27690_27766 = state_27649__$1;
(statearr_27690_27766[(2)] = inst_27641);

(statearr_27690_27766[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (6))){
var inst_27544 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
var statearr_27691_27767 = state_27649__$1;
(statearr_27691_27767[(2)] = inst_27544);

(statearr_27691_27767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (28))){
var inst_27569 = (state_27649[(26)]);
var inst_27596 = (state_27649[(2)]);
var inst_27597 = cljs.core.not_empty.call(null,inst_27569);
var state_27649__$1 = (function (){var statearr_27692 = state_27649;
(statearr_27692[(29)] = inst_27596);

return statearr_27692;
})();
if(cljs.core.truth_(inst_27597)){
var statearr_27693_27768 = state_27649__$1;
(statearr_27693_27768[(1)] = (29));

} else {
var statearr_27694_27769 = state_27649__$1;
(statearr_27694_27769[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (25))){
var inst_27567 = (state_27649[(23)]);
var inst_27583 = (state_27649[(2)]);
var inst_27584 = cljs.core.not_empty.call(null,inst_27567);
var state_27649__$1 = (function (){var statearr_27695 = state_27649;
(statearr_27695[(30)] = inst_27583);

return statearr_27695;
})();
if(cljs.core.truth_(inst_27584)){
var statearr_27696_27770 = state_27649__$1;
(statearr_27696_27770[(1)] = (26));

} else {
var statearr_27697_27771 = state_27649__$1;
(statearr_27697_27771[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (34))){
var inst_27618 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
if(cljs.core.truth_(inst_27618)){
var statearr_27698_27772 = state_27649__$1;
(statearr_27698_27772[(1)] = (38));

} else {
var statearr_27699_27773 = state_27649__$1;
(statearr_27699_27773[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (17))){
var state_27649__$1 = state_27649;
var statearr_27700_27774 = state_27649__$1;
(statearr_27700_27774[(2)] = recompile_dependents);

(statearr_27700_27774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (3))){
var state_27649__$1 = state_27649;
var statearr_27701_27775 = state_27649__$1;
(statearr_27701_27775[(2)] = null);

(statearr_27701_27775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (12))){
var inst_27540 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
var statearr_27702_27776 = state_27649__$1;
(statearr_27702_27776[(2)] = inst_27540);

(statearr_27702_27776[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (2))){
var inst_27502 = (state_27649[(13)]);
var inst_27509 = cljs.core.seq.call(null,inst_27502);
var inst_27510 = inst_27509;
var inst_27511 = null;
var inst_27512 = (0);
var inst_27513 = (0);
var state_27649__$1 = (function (){var statearr_27703 = state_27649;
(statearr_27703[(7)] = inst_27512);

(statearr_27703[(8)] = inst_27510);

(statearr_27703[(9)] = inst_27511);

(statearr_27703[(10)] = inst_27513);

return statearr_27703;
})();
var statearr_27704_27777 = state_27649__$1;
(statearr_27704_27777[(2)] = null);

(statearr_27704_27777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (23))){
var inst_27563 = (state_27649[(19)]);
var inst_27567 = (state_27649[(23)]);
var inst_27569 = (state_27649[(26)]);
var inst_27566 = (state_27649[(24)]);
var inst_27571 = (state_27649[(25)]);
var inst_27574 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27576 = (function (){var all_files = inst_27563;
var res_SINGLEQUOTE_ = inst_27566;
var res = inst_27567;
var files_not_loaded = inst_27569;
var dependencies_that_loaded = inst_27571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27574,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27575){
var map__27705 = p__27575;
var map__27705__$1 = ((((!((map__27705 == null)))?((((map__27705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27705):map__27705);
var request_url = cljs.core.get.call(null,map__27705__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27574,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27577 = cljs.core.reverse.call(null,inst_27571);
var inst_27578 = cljs.core.map.call(null,inst_27576,inst_27577);
var inst_27579 = cljs.core.pr_str.call(null,inst_27578);
var inst_27580 = figwheel.client.utils.log.call(null,inst_27579);
var state_27649__$1 = (function (){var statearr_27707 = state_27649;
(statearr_27707[(31)] = inst_27574);

return statearr_27707;
})();
var statearr_27708_27778 = state_27649__$1;
(statearr_27708_27778[(2)] = inst_27580);

(statearr_27708_27778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (35))){
var state_27649__$1 = state_27649;
var statearr_27709_27779 = state_27649__$1;
(statearr_27709_27779[(2)] = true);

(statearr_27709_27779[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (19))){
var inst_27553 = (state_27649[(12)]);
var inst_27559 = figwheel.client.file_reloading.expand_files.call(null,inst_27553);
var state_27649__$1 = state_27649;
var statearr_27710_27780 = state_27649__$1;
(statearr_27710_27780[(2)] = inst_27559);

(statearr_27710_27780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (11))){
var state_27649__$1 = state_27649;
var statearr_27711_27781 = state_27649__$1;
(statearr_27711_27781[(2)] = null);

(statearr_27711_27781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (9))){
var inst_27542 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
var statearr_27712_27782 = state_27649__$1;
(statearr_27712_27782[(2)] = inst_27542);

(statearr_27712_27782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (5))){
var inst_27512 = (state_27649[(7)]);
var inst_27513 = (state_27649[(10)]);
var inst_27515 = (inst_27513 < inst_27512);
var inst_27516 = inst_27515;
var state_27649__$1 = state_27649;
if(cljs.core.truth_(inst_27516)){
var statearr_27713_27783 = state_27649__$1;
(statearr_27713_27783[(1)] = (7));

} else {
var statearr_27714_27784 = state_27649__$1;
(statearr_27714_27784[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (14))){
var inst_27523 = (state_27649[(22)]);
var inst_27532 = cljs.core.first.call(null,inst_27523);
var inst_27533 = figwheel.client.file_reloading.eval_body.call(null,inst_27532,opts);
var inst_27534 = cljs.core.next.call(null,inst_27523);
var inst_27510 = inst_27534;
var inst_27511 = null;
var inst_27512 = (0);
var inst_27513 = (0);
var state_27649__$1 = (function (){var statearr_27715 = state_27649;
(statearr_27715[(7)] = inst_27512);

(statearr_27715[(32)] = inst_27533);

(statearr_27715[(8)] = inst_27510);

(statearr_27715[(9)] = inst_27511);

(statearr_27715[(10)] = inst_27513);

return statearr_27715;
})();
var statearr_27716_27785 = state_27649__$1;
(statearr_27716_27785[(2)] = null);

(statearr_27716_27785[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (45))){
var state_27649__$1 = state_27649;
var statearr_27717_27786 = state_27649__$1;
(statearr_27717_27786[(2)] = null);

(statearr_27717_27786[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (26))){
var inst_27563 = (state_27649[(19)]);
var inst_27567 = (state_27649[(23)]);
var inst_27569 = (state_27649[(26)]);
var inst_27566 = (state_27649[(24)]);
var inst_27571 = (state_27649[(25)]);
var inst_27586 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27588 = (function (){var all_files = inst_27563;
var res_SINGLEQUOTE_ = inst_27566;
var res = inst_27567;
var files_not_loaded = inst_27569;
var dependencies_that_loaded = inst_27571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27586,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27587){
var map__27718 = p__27587;
var map__27718__$1 = ((((!((map__27718 == null)))?((((map__27718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27718):map__27718);
var namespace = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27586,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27589 = cljs.core.map.call(null,inst_27588,inst_27567);
var inst_27590 = cljs.core.pr_str.call(null,inst_27589);
var inst_27591 = figwheel.client.utils.log.call(null,inst_27590);
var inst_27592 = (function (){var all_files = inst_27563;
var res_SINGLEQUOTE_ = inst_27566;
var res = inst_27567;
var files_not_loaded = inst_27569;
var dependencies_that_loaded = inst_27571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27586,inst_27588,inst_27589,inst_27590,inst_27591,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27586,inst_27588,inst_27589,inst_27590,inst_27591,state_val_27650,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27593 = setTimeout(inst_27592,(10));
var state_27649__$1 = (function (){var statearr_27720 = state_27649;
(statearr_27720[(33)] = inst_27591);

(statearr_27720[(34)] = inst_27586);

return statearr_27720;
})();
var statearr_27721_27787 = state_27649__$1;
(statearr_27721_27787[(2)] = inst_27593);

(statearr_27721_27787[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (16))){
var state_27649__$1 = state_27649;
var statearr_27722_27788 = state_27649__$1;
(statearr_27722_27788[(2)] = reload_dependents);

(statearr_27722_27788[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (38))){
var inst_27603 = (state_27649[(16)]);
var inst_27620 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27603);
var state_27649__$1 = state_27649;
var statearr_27723_27789 = state_27649__$1;
(statearr_27723_27789[(2)] = inst_27620);

(statearr_27723_27789[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (30))){
var state_27649__$1 = state_27649;
var statearr_27724_27790 = state_27649__$1;
(statearr_27724_27790[(2)] = null);

(statearr_27724_27790[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (10))){
var inst_27523 = (state_27649[(22)]);
var inst_27525 = cljs.core.chunked_seq_QMARK_.call(null,inst_27523);
var state_27649__$1 = state_27649;
if(inst_27525){
var statearr_27725_27791 = state_27649__$1;
(statearr_27725_27791[(1)] = (13));

} else {
var statearr_27726_27792 = state_27649__$1;
(statearr_27726_27792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (18))){
var inst_27557 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
if(cljs.core.truth_(inst_27557)){
var statearr_27727_27793 = state_27649__$1;
(statearr_27727_27793[(1)] = (19));

} else {
var statearr_27728_27794 = state_27649__$1;
(statearr_27728_27794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (42))){
var state_27649__$1 = state_27649;
var statearr_27729_27795 = state_27649__$1;
(statearr_27729_27795[(2)] = null);

(statearr_27729_27795[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (37))){
var inst_27615 = (state_27649[(2)]);
var state_27649__$1 = state_27649;
var statearr_27730_27796 = state_27649__$1;
(statearr_27730_27796[(2)] = inst_27615);

(statearr_27730_27796[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27650 === (8))){
var inst_27523 = (state_27649[(22)]);
var inst_27510 = (state_27649[(8)]);
var inst_27523__$1 = cljs.core.seq.call(null,inst_27510);
var state_27649__$1 = (function (){var statearr_27731 = state_27649;
(statearr_27731[(22)] = inst_27523__$1);

return statearr_27731;
})();
if(inst_27523__$1){
var statearr_27732_27797 = state_27649__$1;
(statearr_27732_27797[(1)] = (10));

} else {
var statearr_27733_27798 = state_27649__$1;
(statearr_27733_27798[(1)] = (11));

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
});})(c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23910__auto__,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto____0 = (function (){
var statearr_27737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27737[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto__);

(statearr_27737[(1)] = (1));

return statearr_27737;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto____1 = (function (state_27649){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_27649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e27738){if((e27738 instanceof Object)){
var ex__23914__auto__ = e27738;
var statearr_27739_27799 = state_27649;
(statearr_27739_27799[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27800 = state_27649;
state_27649 = G__27800;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto__ = function(state_27649){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto____1.call(this,state_27649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24024__auto__ = (function (){var statearr_27740 = f__24023__auto__.call(null);
(statearr_27740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto__);

return statearr_27740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24022__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27803,link){
var map__27806 = p__27803;
var map__27806__$1 = ((((!((map__27806 == null)))?((((map__27806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27806):map__27806);
var file = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27806,map__27806__$1,file){
return (function (p1__27801_SHARP_,p2__27802_SHARP_){
if(cljs.core._EQ_.call(null,p1__27801_SHARP_,p2__27802_SHARP_)){
return p1__27801_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27806,map__27806__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27812){
var map__27813 = p__27812;
var map__27813__$1 = ((((!((map__27813 == null)))?((((map__27813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27813):map__27813);
var match_length = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27808_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27808_SHARP_);
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
var args27815 = [];
var len__17809__auto___27818 = arguments.length;
var i__17810__auto___27819 = (0);
while(true){
if((i__17810__auto___27819 < len__17809__auto___27818)){
args27815.push((arguments[i__17810__auto___27819]));

var G__27820 = (i__17810__auto___27819 + (1));
i__17810__auto___27819 = G__27820;
continue;
} else {
}
break;
}

var G__27817 = args27815.length;
switch (G__27817) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27815.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27822_SHARP_,p2__27823_SHARP_){
return cljs.core.assoc.call(null,p1__27822_SHARP_,cljs.core.get.call(null,p2__27823_SHARP_,key),p2__27823_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27824){
var map__27827 = p__27824;
var map__27827__$1 = ((((!((map__27827 == null)))?((((map__27827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27827):map__27827);
var f_data = map__27827__$1;
var file = cljs.core.get.call(null,map__27827__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27829,files_msg){
var map__27836 = p__27829;
var map__27836__$1 = ((((!((map__27836 == null)))?((((map__27836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27836):map__27836);
var opts = map__27836__$1;
var on_cssload = cljs.core.get.call(null,map__27836__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27838_27842 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27839_27843 = null;
var count__27840_27844 = (0);
var i__27841_27845 = (0);
while(true){
if((i__27841_27845 < count__27840_27844)){
var f_27846 = cljs.core._nth.call(null,chunk__27839_27843,i__27841_27845);
figwheel.client.file_reloading.reload_css_file.call(null,f_27846);

var G__27847 = seq__27838_27842;
var G__27848 = chunk__27839_27843;
var G__27849 = count__27840_27844;
var G__27850 = (i__27841_27845 + (1));
seq__27838_27842 = G__27847;
chunk__27839_27843 = G__27848;
count__27840_27844 = G__27849;
i__27841_27845 = G__27850;
continue;
} else {
var temp__4425__auto___27851 = cljs.core.seq.call(null,seq__27838_27842);
if(temp__4425__auto___27851){
var seq__27838_27852__$1 = temp__4425__auto___27851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27838_27852__$1)){
var c__17554__auto___27853 = cljs.core.chunk_first.call(null,seq__27838_27852__$1);
var G__27854 = cljs.core.chunk_rest.call(null,seq__27838_27852__$1);
var G__27855 = c__17554__auto___27853;
var G__27856 = cljs.core.count.call(null,c__17554__auto___27853);
var G__27857 = (0);
seq__27838_27842 = G__27854;
chunk__27839_27843 = G__27855;
count__27840_27844 = G__27856;
i__27841_27845 = G__27857;
continue;
} else {
var f_27858 = cljs.core.first.call(null,seq__27838_27852__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27858);

var G__27859 = cljs.core.next.call(null,seq__27838_27852__$1);
var G__27860 = null;
var G__27861 = (0);
var G__27862 = (0);
seq__27838_27842 = G__27859;
chunk__27839_27843 = G__27860;
count__27840_27844 = G__27861;
i__27841_27845 = G__27862;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27836,map__27836__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27836,map__27836__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1447986933289