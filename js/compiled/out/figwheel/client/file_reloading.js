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
var or__16707__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16707__auto__){
return or__16707__auto__;
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
var or__16707__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16707__auto__)){
return or__16707__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27010_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27010_SHARP_));
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
var seq__27015 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27016 = null;
var count__27017 = (0);
var i__27018 = (0);
while(true){
if((i__27018 < count__27017)){
var n = cljs.core._nth.call(null,chunk__27016,i__27018);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27019 = seq__27015;
var G__27020 = chunk__27016;
var G__27021 = count__27017;
var G__27022 = (i__27018 + (1));
seq__27015 = G__27019;
chunk__27016 = G__27020;
count__27017 = G__27021;
i__27018 = G__27022;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27015);
if(temp__4425__auto__){
var seq__27015__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27015__$1)){
var c__17510__auto__ = cljs.core.chunk_first.call(null,seq__27015__$1);
var G__27023 = cljs.core.chunk_rest.call(null,seq__27015__$1);
var G__27024 = c__17510__auto__;
var G__27025 = cljs.core.count.call(null,c__17510__auto__);
var G__27026 = (0);
seq__27015 = G__27023;
chunk__27016 = G__27024;
count__27017 = G__27025;
i__27018 = G__27026;
continue;
} else {
var n = cljs.core.first.call(null,seq__27015__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27027 = cljs.core.next.call(null,seq__27015__$1);
var G__27028 = null;
var G__27029 = (0);
var G__27030 = (0);
seq__27015 = G__27027;
chunk__27016 = G__27028;
count__27017 = G__27029;
i__27018 = G__27030;
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

var seq__27069_27076 = cljs.core.seq.call(null,deps);
var chunk__27070_27077 = null;
var count__27071_27078 = (0);
var i__27072_27079 = (0);
while(true){
if((i__27072_27079 < count__27071_27078)){
var dep_27080 = cljs.core._nth.call(null,chunk__27070_27077,i__27072_27079);
topo_sort_helper_STAR_.call(null,dep_27080,(depth + (1)),state);

var G__27081 = seq__27069_27076;
var G__27082 = chunk__27070_27077;
var G__27083 = count__27071_27078;
var G__27084 = (i__27072_27079 + (1));
seq__27069_27076 = G__27081;
chunk__27070_27077 = G__27082;
count__27071_27078 = G__27083;
i__27072_27079 = G__27084;
continue;
} else {
var temp__4425__auto___27085 = cljs.core.seq.call(null,seq__27069_27076);
if(temp__4425__auto___27085){
var seq__27069_27086__$1 = temp__4425__auto___27085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27069_27086__$1)){
var c__17510__auto___27087 = cljs.core.chunk_first.call(null,seq__27069_27086__$1);
var G__27088 = cljs.core.chunk_rest.call(null,seq__27069_27086__$1);
var G__27089 = c__17510__auto___27087;
var G__27090 = cljs.core.count.call(null,c__17510__auto___27087);
var G__27091 = (0);
seq__27069_27076 = G__27088;
chunk__27070_27077 = G__27089;
count__27071_27078 = G__27090;
i__27072_27079 = G__27091;
continue;
} else {
var dep_27092 = cljs.core.first.call(null,seq__27069_27086__$1);
topo_sort_helper_STAR_.call(null,dep_27092,(depth + (1)),state);

var G__27093 = cljs.core.next.call(null,seq__27069_27086__$1);
var G__27094 = null;
var G__27095 = (0);
var G__27096 = (0);
seq__27069_27076 = G__27093;
chunk__27070_27077 = G__27094;
count__27071_27078 = G__27095;
i__27072_27079 = G__27096;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27073){
var vec__27075 = p__27073;
var x = cljs.core.nth.call(null,vec__27075,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27075,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27075,x,xs,get_deps__$1){
return (function (p1__27031_SHARP_){
return clojure.set.difference.call(null,p1__27031_SHARP_,x);
});})(vec__27075,x,xs,get_deps__$1))
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
var seq__27109 = cljs.core.seq.call(null,provides);
var chunk__27110 = null;
var count__27111 = (0);
var i__27112 = (0);
while(true){
if((i__27112 < count__27111)){
var prov = cljs.core._nth.call(null,chunk__27110,i__27112);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27113_27121 = cljs.core.seq.call(null,requires);
var chunk__27114_27122 = null;
var count__27115_27123 = (0);
var i__27116_27124 = (0);
while(true){
if((i__27116_27124 < count__27115_27123)){
var req_27125 = cljs.core._nth.call(null,chunk__27114_27122,i__27116_27124);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27125,prov);

var G__27126 = seq__27113_27121;
var G__27127 = chunk__27114_27122;
var G__27128 = count__27115_27123;
var G__27129 = (i__27116_27124 + (1));
seq__27113_27121 = G__27126;
chunk__27114_27122 = G__27127;
count__27115_27123 = G__27128;
i__27116_27124 = G__27129;
continue;
} else {
var temp__4425__auto___27130 = cljs.core.seq.call(null,seq__27113_27121);
if(temp__4425__auto___27130){
var seq__27113_27131__$1 = temp__4425__auto___27130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27113_27131__$1)){
var c__17510__auto___27132 = cljs.core.chunk_first.call(null,seq__27113_27131__$1);
var G__27133 = cljs.core.chunk_rest.call(null,seq__27113_27131__$1);
var G__27134 = c__17510__auto___27132;
var G__27135 = cljs.core.count.call(null,c__17510__auto___27132);
var G__27136 = (0);
seq__27113_27121 = G__27133;
chunk__27114_27122 = G__27134;
count__27115_27123 = G__27135;
i__27116_27124 = G__27136;
continue;
} else {
var req_27137 = cljs.core.first.call(null,seq__27113_27131__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27137,prov);

var G__27138 = cljs.core.next.call(null,seq__27113_27131__$1);
var G__27139 = null;
var G__27140 = (0);
var G__27141 = (0);
seq__27113_27121 = G__27138;
chunk__27114_27122 = G__27139;
count__27115_27123 = G__27140;
i__27116_27124 = G__27141;
continue;
}
} else {
}
}
break;
}

var G__27142 = seq__27109;
var G__27143 = chunk__27110;
var G__27144 = count__27111;
var G__27145 = (i__27112 + (1));
seq__27109 = G__27142;
chunk__27110 = G__27143;
count__27111 = G__27144;
i__27112 = G__27145;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27109);
if(temp__4425__auto__){
var seq__27109__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27109__$1)){
var c__17510__auto__ = cljs.core.chunk_first.call(null,seq__27109__$1);
var G__27146 = cljs.core.chunk_rest.call(null,seq__27109__$1);
var G__27147 = c__17510__auto__;
var G__27148 = cljs.core.count.call(null,c__17510__auto__);
var G__27149 = (0);
seq__27109 = G__27146;
chunk__27110 = G__27147;
count__27111 = G__27148;
i__27112 = G__27149;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27109__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27117_27150 = cljs.core.seq.call(null,requires);
var chunk__27118_27151 = null;
var count__27119_27152 = (0);
var i__27120_27153 = (0);
while(true){
if((i__27120_27153 < count__27119_27152)){
var req_27154 = cljs.core._nth.call(null,chunk__27118_27151,i__27120_27153);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27154,prov);

var G__27155 = seq__27117_27150;
var G__27156 = chunk__27118_27151;
var G__27157 = count__27119_27152;
var G__27158 = (i__27120_27153 + (1));
seq__27117_27150 = G__27155;
chunk__27118_27151 = G__27156;
count__27119_27152 = G__27157;
i__27120_27153 = G__27158;
continue;
} else {
var temp__4425__auto___27159__$1 = cljs.core.seq.call(null,seq__27117_27150);
if(temp__4425__auto___27159__$1){
var seq__27117_27160__$1 = temp__4425__auto___27159__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27117_27160__$1)){
var c__17510__auto___27161 = cljs.core.chunk_first.call(null,seq__27117_27160__$1);
var G__27162 = cljs.core.chunk_rest.call(null,seq__27117_27160__$1);
var G__27163 = c__17510__auto___27161;
var G__27164 = cljs.core.count.call(null,c__17510__auto___27161);
var G__27165 = (0);
seq__27117_27150 = G__27162;
chunk__27118_27151 = G__27163;
count__27119_27152 = G__27164;
i__27120_27153 = G__27165;
continue;
} else {
var req_27166 = cljs.core.first.call(null,seq__27117_27160__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27166,prov);

var G__27167 = cljs.core.next.call(null,seq__27117_27160__$1);
var G__27168 = null;
var G__27169 = (0);
var G__27170 = (0);
seq__27117_27150 = G__27167;
chunk__27118_27151 = G__27168;
count__27119_27152 = G__27169;
i__27120_27153 = G__27170;
continue;
}
} else {
}
}
break;
}

var G__27171 = cljs.core.next.call(null,seq__27109__$1);
var G__27172 = null;
var G__27173 = (0);
var G__27174 = (0);
seq__27109 = G__27171;
chunk__27110 = G__27172;
count__27111 = G__27173;
i__27112 = G__27174;
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
var seq__27179_27183 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27180_27184 = null;
var count__27181_27185 = (0);
var i__27182_27186 = (0);
while(true){
if((i__27182_27186 < count__27181_27185)){
var ns_27187 = cljs.core._nth.call(null,chunk__27180_27184,i__27182_27186);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27187);

var G__27188 = seq__27179_27183;
var G__27189 = chunk__27180_27184;
var G__27190 = count__27181_27185;
var G__27191 = (i__27182_27186 + (1));
seq__27179_27183 = G__27188;
chunk__27180_27184 = G__27189;
count__27181_27185 = G__27190;
i__27182_27186 = G__27191;
continue;
} else {
var temp__4425__auto___27192 = cljs.core.seq.call(null,seq__27179_27183);
if(temp__4425__auto___27192){
var seq__27179_27193__$1 = temp__4425__auto___27192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27179_27193__$1)){
var c__17510__auto___27194 = cljs.core.chunk_first.call(null,seq__27179_27193__$1);
var G__27195 = cljs.core.chunk_rest.call(null,seq__27179_27193__$1);
var G__27196 = c__17510__auto___27194;
var G__27197 = cljs.core.count.call(null,c__17510__auto___27194);
var G__27198 = (0);
seq__27179_27183 = G__27195;
chunk__27180_27184 = G__27196;
count__27181_27185 = G__27197;
i__27182_27186 = G__27198;
continue;
} else {
var ns_27199 = cljs.core.first.call(null,seq__27179_27193__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27199);

var G__27200 = cljs.core.next.call(null,seq__27179_27193__$1);
var G__27201 = null;
var G__27202 = (0);
var G__27203 = (0);
seq__27179_27183 = G__27200;
chunk__27180_27184 = G__27201;
count__27181_27185 = G__27202;
i__27182_27186 = G__27203;
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
goog.require_figwheel_backup_ = (function (){var or__16707__auto__ = goog.require__;
if(cljs.core.truth_(or__16707__auto__)){
return or__16707__auto__;
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
var G__27204__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27205__i = 0, G__27205__a = new Array(arguments.length -  0);
while (G__27205__i < G__27205__a.length) {G__27205__a[G__27205__i] = arguments[G__27205__i + 0]; ++G__27205__i;}
  args = new cljs.core.IndexedSeq(G__27205__a,0);
} 
return G__27204__delegate.call(this,args);};
G__27204.cljs$lang$maxFixedArity = 0;
G__27204.cljs$lang$applyTo = (function (arglist__27206){
var args = cljs.core.seq(arglist__27206);
return G__27204__delegate(args);
});
G__27204.cljs$core$IFn$_invoke$arity$variadic = G__27204__delegate;
return G__27204;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27208 = cljs.core._EQ_;
var expr__27209 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27208.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27209))){
var path_parts = ((function (pred__27208,expr__27209){
return (function (p1__27207_SHARP_){
return clojure.string.split.call(null,p1__27207_SHARP_,/[\/\\]/);
});})(pred__27208,expr__27209))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27208,expr__27209){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27211){if((e27211 instanceof Error)){
var e = e27211;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27211;

}
}})());
});
;})(path_parts,sep,root,pred__27208,expr__27209))
} else {
if(cljs.core.truth_(pred__27208.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27209))){
return ((function (pred__27208,expr__27209){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27208,expr__27209){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27208,expr__27209))
);

return deferred.addErrback(((function (deferred,pred__27208,expr__27209){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27208,expr__27209))
);
});
;})(pred__27208,expr__27209))
} else {
return ((function (pred__27208,expr__27209){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27208,expr__27209))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27212,callback){
var map__27215 = p__27212;
var map__27215__$1 = ((((!((map__27215 == null)))?((((map__27215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27215):map__27215);
var file_msg = map__27215__$1;
var request_url = cljs.core.get.call(null,map__27215__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27215,map__27215__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27215,map__27215__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto__){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto__){
return (function (state_27239){
var state_val_27240 = (state_27239[(1)]);
if((state_val_27240 === (7))){
var inst_27235 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
var statearr_27241_27261 = state_27239__$1;
(statearr_27241_27261[(2)] = inst_27235);

(statearr_27241_27261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (1))){
var state_27239__$1 = state_27239;
var statearr_27242_27262 = state_27239__$1;
(statearr_27242_27262[(2)] = null);

(statearr_27242_27262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (4))){
var inst_27219 = (state_27239[(7)]);
var inst_27219__$1 = (state_27239[(2)]);
var state_27239__$1 = (function (){var statearr_27243 = state_27239;
(statearr_27243[(7)] = inst_27219__$1);

return statearr_27243;
})();
if(cljs.core.truth_(inst_27219__$1)){
var statearr_27244_27263 = state_27239__$1;
(statearr_27244_27263[(1)] = (5));

} else {
var statearr_27245_27264 = state_27239__$1;
(statearr_27245_27264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (6))){
var state_27239__$1 = state_27239;
var statearr_27246_27265 = state_27239__$1;
(statearr_27246_27265[(2)] = null);

(statearr_27246_27265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (3))){
var inst_27237 = (state_27239[(2)]);
var state_27239__$1 = state_27239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27239__$1,inst_27237);
} else {
if((state_val_27240 === (2))){
var state_27239__$1 = state_27239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27239__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27240 === (11))){
var inst_27231 = (state_27239[(2)]);
var state_27239__$1 = (function (){var statearr_27247 = state_27239;
(statearr_27247[(8)] = inst_27231);

return statearr_27247;
})();
var statearr_27248_27266 = state_27239__$1;
(statearr_27248_27266[(2)] = null);

(statearr_27248_27266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (9))){
var inst_27223 = (state_27239[(9)]);
var inst_27225 = (state_27239[(10)]);
var inst_27227 = inst_27225.call(null,inst_27223);
var state_27239__$1 = state_27239;
var statearr_27249_27267 = state_27239__$1;
(statearr_27249_27267[(2)] = inst_27227);

(statearr_27249_27267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (5))){
var inst_27219 = (state_27239[(7)]);
var inst_27221 = figwheel.client.file_reloading.blocking_load.call(null,inst_27219);
var state_27239__$1 = state_27239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27239__$1,(8),inst_27221);
} else {
if((state_val_27240 === (10))){
var inst_27223 = (state_27239[(9)]);
var inst_27229 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27223);
var state_27239__$1 = state_27239;
var statearr_27250_27268 = state_27239__$1;
(statearr_27250_27268[(2)] = inst_27229);

(statearr_27250_27268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27240 === (8))){
var inst_27219 = (state_27239[(7)]);
var inst_27225 = (state_27239[(10)]);
var inst_27223 = (state_27239[(2)]);
var inst_27224 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27225__$1 = cljs.core.get.call(null,inst_27224,inst_27219);
var state_27239__$1 = (function (){var statearr_27251 = state_27239;
(statearr_27251[(9)] = inst_27223);

(statearr_27251[(10)] = inst_27225__$1);

return statearr_27251;
})();
if(cljs.core.truth_(inst_27225__$1)){
var statearr_27252_27269 = state_27239__$1;
(statearr_27252_27269[(1)] = (9));

} else {
var statearr_27253_27270 = state_27239__$1;
(statearr_27253_27270[(1)] = (10));

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
});})(c__24177__auto__))
;
return ((function (switch__24065__auto__,c__24177__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24066__auto__ = null;
var figwheel$client$file_reloading$state_machine__24066__auto____0 = (function (){
var statearr_27257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27257[(0)] = figwheel$client$file_reloading$state_machine__24066__auto__);

(statearr_27257[(1)] = (1));

return statearr_27257;
});
var figwheel$client$file_reloading$state_machine__24066__auto____1 = (function (state_27239){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_27239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e27258){if((e27258 instanceof Object)){
var ex__24069__auto__ = e27258;
var statearr_27259_27271 = state_27239;
(statearr_27259_27271[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27272 = state_27239;
state_27239 = G__27272;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24066__auto__ = function(state_27239){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24066__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24066__auto____1.call(this,state_27239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24066__auto____0;
figwheel$client$file_reloading$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24066__auto____1;
return figwheel$client$file_reloading$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto__))
})();
var state__24179__auto__ = (function (){var statearr_27260 = f__24178__auto__.call(null);
(statearr_27260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto__);

return statearr_27260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto__))
);

return c__24177__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27273,callback){
var map__27276 = p__27273;
var map__27276__$1 = ((((!((map__27276 == null)))?((((map__27276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27276):map__27276);
var file_msg = map__27276__$1;
var namespace = cljs.core.get.call(null,map__27276__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27276,map__27276__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27276,map__27276__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27278){
var map__27281 = p__27278;
var map__27281__$1 = ((((!((map__27281 == null)))?((((map__27281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27281):map__27281);
var file_msg = map__27281__$1;
var namespace = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16695__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16695__auto__){
var or__16707__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16707__auto__)){
return or__16707__auto__;
} else {
var or__16707__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16707__auto____$1)){
return or__16707__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16695__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27283,callback){
var map__27286 = p__27283;
var map__27286__$1 = ((((!((map__27286 == null)))?((((map__27286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27286):map__27286);
var file_msg = map__27286__$1;
var request_url = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24177__auto___27374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___27374,out){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___27374,out){
return (function (state_27356){
var state_val_27357 = (state_27356[(1)]);
if((state_val_27357 === (1))){
var inst_27334 = cljs.core.nth.call(null,files,(0),null);
var inst_27335 = cljs.core.nthnext.call(null,files,(1));
var inst_27336 = files;
var state_27356__$1 = (function (){var statearr_27358 = state_27356;
(statearr_27358[(7)] = inst_27335);

(statearr_27358[(8)] = inst_27336);

(statearr_27358[(9)] = inst_27334);

return statearr_27358;
})();
var statearr_27359_27375 = state_27356__$1;
(statearr_27359_27375[(2)] = null);

(statearr_27359_27375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (2))){
var inst_27336 = (state_27356[(8)]);
var inst_27339 = (state_27356[(10)]);
var inst_27339__$1 = cljs.core.nth.call(null,inst_27336,(0),null);
var inst_27340 = cljs.core.nthnext.call(null,inst_27336,(1));
var inst_27341 = (inst_27339__$1 == null);
var inst_27342 = cljs.core.not.call(null,inst_27341);
var state_27356__$1 = (function (){var statearr_27360 = state_27356;
(statearr_27360[(11)] = inst_27340);

(statearr_27360[(10)] = inst_27339__$1);

return statearr_27360;
})();
if(inst_27342){
var statearr_27361_27376 = state_27356__$1;
(statearr_27361_27376[(1)] = (4));

} else {
var statearr_27362_27377 = state_27356__$1;
(statearr_27362_27377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (3))){
var inst_27354 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27356__$1,inst_27354);
} else {
if((state_val_27357 === (4))){
var inst_27339 = (state_27356[(10)]);
var inst_27344 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27339);
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27356__$1,(7),inst_27344);
} else {
if((state_val_27357 === (5))){
var inst_27350 = cljs.core.async.close_BANG_.call(null,out);
var state_27356__$1 = state_27356;
var statearr_27363_27378 = state_27356__$1;
(statearr_27363_27378[(2)] = inst_27350);

(statearr_27363_27378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (6))){
var inst_27352 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
var statearr_27364_27379 = state_27356__$1;
(statearr_27364_27379[(2)] = inst_27352);

(statearr_27364_27379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (7))){
var inst_27340 = (state_27356[(11)]);
var inst_27346 = (state_27356[(2)]);
var inst_27347 = cljs.core.async.put_BANG_.call(null,out,inst_27346);
var inst_27336 = inst_27340;
var state_27356__$1 = (function (){var statearr_27365 = state_27356;
(statearr_27365[(8)] = inst_27336);

(statearr_27365[(12)] = inst_27347);

return statearr_27365;
})();
var statearr_27366_27380 = state_27356__$1;
(statearr_27366_27380[(2)] = null);

(statearr_27366_27380[(1)] = (2));


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
});})(c__24177__auto___27374,out))
;
return ((function (switch__24065__auto__,c__24177__auto___27374,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto____0 = (function (){
var statearr_27370 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27370[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto__);

(statearr_27370[(1)] = (1));

return statearr_27370;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto____1 = (function (state_27356){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_27356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e27371){if((e27371 instanceof Object)){
var ex__24069__auto__ = e27371;
var statearr_27372_27381 = state_27356;
(statearr_27372_27381[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27382 = state_27356;
state_27356 = G__27382;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto__ = function(state_27356){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto____1.call(this,state_27356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___27374,out))
})();
var state__24179__auto__ = (function (){var statearr_27373 = f__24178__auto__.call(null);
(statearr_27373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___27374);

return statearr_27373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___27374,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27383,opts){
var map__27387 = p__27383;
var map__27387__$1 = ((((!((map__27387 == null)))?((((map__27387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27387):map__27387);
var eval_body__$1 = cljs.core.get.call(null,map__27387__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27387__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16695__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16695__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16695__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27389){var e = e27389;
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
return (function (p1__27390_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27390_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27395){
var vec__27396 = p__27395;
var k = cljs.core.nth.call(null,vec__27396,(0),null);
var v = cljs.core.nth.call(null,vec__27396,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27397){
var vec__27398 = p__27397;
var k = cljs.core.nth.call(null,vec__27398,(0),null);
var v = cljs.core.nth.call(null,vec__27398,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27402,p__27403){
var map__27650 = p__27402;
var map__27650__$1 = ((((!((map__27650 == null)))?((((map__27650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27650):map__27650);
var opts = map__27650__$1;
var before_jsload = cljs.core.get.call(null,map__27650__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27650__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27650__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27651 = p__27403;
var map__27651__$1 = ((((!((map__27651 == null)))?((((map__27651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27651):map__27651);
var msg = map__27651__$1;
var files = cljs.core.get.call(null,map__27651__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27651__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27651__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27804){
var state_val_27805 = (state_27804[(1)]);
if((state_val_27805 === (7))){
var inst_27665 = (state_27804[(7)]);
var inst_27667 = (state_27804[(8)]);
var inst_27668 = (state_27804[(9)]);
var inst_27666 = (state_27804[(10)]);
var inst_27673 = cljs.core._nth.call(null,inst_27666,inst_27668);
var inst_27674 = figwheel.client.file_reloading.eval_body.call(null,inst_27673,opts);
var inst_27675 = (inst_27668 + (1));
var tmp27806 = inst_27665;
var tmp27807 = inst_27667;
var tmp27808 = inst_27666;
var inst_27665__$1 = tmp27806;
var inst_27666__$1 = tmp27808;
var inst_27667__$1 = tmp27807;
var inst_27668__$1 = inst_27675;
var state_27804__$1 = (function (){var statearr_27809 = state_27804;
(statearr_27809[(7)] = inst_27665__$1);

(statearr_27809[(8)] = inst_27667__$1);

(statearr_27809[(11)] = inst_27674);

(statearr_27809[(9)] = inst_27668__$1);

(statearr_27809[(10)] = inst_27666__$1);

return statearr_27809;
})();
var statearr_27810_27896 = state_27804__$1;
(statearr_27810_27896[(2)] = null);

(statearr_27810_27896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (20))){
var inst_27708 = (state_27804[(12)]);
var inst_27716 = figwheel.client.file_reloading.sort_files.call(null,inst_27708);
var state_27804__$1 = state_27804;
var statearr_27811_27897 = state_27804__$1;
(statearr_27811_27897[(2)] = inst_27716);

(statearr_27811_27897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (27))){
var state_27804__$1 = state_27804;
var statearr_27812_27898 = state_27804__$1;
(statearr_27812_27898[(2)] = null);

(statearr_27812_27898[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (1))){
var inst_27657 = (state_27804[(13)]);
var inst_27654 = before_jsload.call(null,files);
var inst_27655 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27656 = (function (){return ((function (inst_27657,inst_27654,inst_27655,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27399_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27399_SHARP_);
});
;})(inst_27657,inst_27654,inst_27655,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27657__$1 = cljs.core.filter.call(null,inst_27656,files);
var inst_27658 = cljs.core.not_empty.call(null,inst_27657__$1);
var state_27804__$1 = (function (){var statearr_27813 = state_27804;
(statearr_27813[(13)] = inst_27657__$1);

(statearr_27813[(14)] = inst_27655);

(statearr_27813[(15)] = inst_27654);

return statearr_27813;
})();
if(cljs.core.truth_(inst_27658)){
var statearr_27814_27899 = state_27804__$1;
(statearr_27814_27899[(1)] = (2));

} else {
var statearr_27815_27900 = state_27804__$1;
(statearr_27815_27900[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (24))){
var state_27804__$1 = state_27804;
var statearr_27816_27901 = state_27804__$1;
(statearr_27816_27901[(2)] = null);

(statearr_27816_27901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (39))){
var inst_27758 = (state_27804[(16)]);
var state_27804__$1 = state_27804;
var statearr_27817_27902 = state_27804__$1;
(statearr_27817_27902[(2)] = inst_27758);

(statearr_27817_27902[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (46))){
var inst_27799 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27818_27903 = state_27804__$1;
(statearr_27818_27903[(2)] = inst_27799);

(statearr_27818_27903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (4))){
var inst_27702 = (state_27804[(2)]);
var inst_27703 = cljs.core.List.EMPTY;
var inst_27704 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27703);
var inst_27705 = (function (){return ((function (inst_27702,inst_27703,inst_27704,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27400_SHARP_){
var and__16695__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27400_SHARP_);
if(cljs.core.truth_(and__16695__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27400_SHARP_));
} else {
return and__16695__auto__;
}
});
;})(inst_27702,inst_27703,inst_27704,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27706 = cljs.core.filter.call(null,inst_27705,files);
var inst_27707 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27708 = cljs.core.concat.call(null,inst_27706,inst_27707);
var state_27804__$1 = (function (){var statearr_27819 = state_27804;
(statearr_27819[(12)] = inst_27708);

(statearr_27819[(17)] = inst_27702);

(statearr_27819[(18)] = inst_27704);

return statearr_27819;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27820_27904 = state_27804__$1;
(statearr_27820_27904[(1)] = (16));

} else {
var statearr_27821_27905 = state_27804__$1;
(statearr_27821_27905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (15))){
var inst_27692 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27822_27906 = state_27804__$1;
(statearr_27822_27906[(2)] = inst_27692);

(statearr_27822_27906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (21))){
var inst_27718 = (state_27804[(19)]);
var inst_27718__$1 = (state_27804[(2)]);
var inst_27719 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27718__$1);
var state_27804__$1 = (function (){var statearr_27823 = state_27804;
(statearr_27823[(19)] = inst_27718__$1);

return statearr_27823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27804__$1,(22),inst_27719);
} else {
if((state_val_27805 === (31))){
var inst_27802 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27804__$1,inst_27802);
} else {
if((state_val_27805 === (32))){
var inst_27758 = (state_27804[(16)]);
var inst_27763 = inst_27758.cljs$lang$protocol_mask$partition0$;
var inst_27764 = (inst_27763 & (64));
var inst_27765 = inst_27758.cljs$core$ISeq$;
var inst_27766 = (inst_27764) || (inst_27765);
var state_27804__$1 = state_27804;
if(cljs.core.truth_(inst_27766)){
var statearr_27824_27907 = state_27804__$1;
(statearr_27824_27907[(1)] = (35));

} else {
var statearr_27825_27908 = state_27804__$1;
(statearr_27825_27908[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (40))){
var inst_27779 = (state_27804[(20)]);
var inst_27778 = (state_27804[(2)]);
var inst_27779__$1 = cljs.core.get.call(null,inst_27778,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27780 = cljs.core.get.call(null,inst_27778,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27781 = cljs.core.not_empty.call(null,inst_27779__$1);
var state_27804__$1 = (function (){var statearr_27826 = state_27804;
(statearr_27826[(21)] = inst_27780);

(statearr_27826[(20)] = inst_27779__$1);

return statearr_27826;
})();
if(cljs.core.truth_(inst_27781)){
var statearr_27827_27909 = state_27804__$1;
(statearr_27827_27909[(1)] = (41));

} else {
var statearr_27828_27910 = state_27804__$1;
(statearr_27828_27910[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (33))){
var state_27804__$1 = state_27804;
var statearr_27829_27911 = state_27804__$1;
(statearr_27829_27911[(2)] = false);

(statearr_27829_27911[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (13))){
var inst_27678 = (state_27804[(22)]);
var inst_27682 = cljs.core.chunk_first.call(null,inst_27678);
var inst_27683 = cljs.core.chunk_rest.call(null,inst_27678);
var inst_27684 = cljs.core.count.call(null,inst_27682);
var inst_27665 = inst_27683;
var inst_27666 = inst_27682;
var inst_27667 = inst_27684;
var inst_27668 = (0);
var state_27804__$1 = (function (){var statearr_27830 = state_27804;
(statearr_27830[(7)] = inst_27665);

(statearr_27830[(8)] = inst_27667);

(statearr_27830[(9)] = inst_27668);

(statearr_27830[(10)] = inst_27666);

return statearr_27830;
})();
var statearr_27831_27912 = state_27804__$1;
(statearr_27831_27912[(2)] = null);

(statearr_27831_27912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (22))){
var inst_27718 = (state_27804[(19)]);
var inst_27726 = (state_27804[(23)]);
var inst_27721 = (state_27804[(24)]);
var inst_27722 = (state_27804[(25)]);
var inst_27721__$1 = (state_27804[(2)]);
var inst_27722__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27721__$1);
var inst_27723 = (function (){var all_files = inst_27718;
var res_SINGLEQUOTE_ = inst_27721__$1;
var res = inst_27722__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27718,inst_27726,inst_27721,inst_27722,inst_27721__$1,inst_27722__$1,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27401_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27401_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27718,inst_27726,inst_27721,inst_27722,inst_27721__$1,inst_27722__$1,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27724 = cljs.core.filter.call(null,inst_27723,inst_27721__$1);
var inst_27725 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27726__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27725);
var inst_27727 = cljs.core.not_empty.call(null,inst_27726__$1);
var state_27804__$1 = (function (){var statearr_27832 = state_27804;
(statearr_27832[(26)] = inst_27724);

(statearr_27832[(23)] = inst_27726__$1);

(statearr_27832[(24)] = inst_27721__$1);

(statearr_27832[(25)] = inst_27722__$1);

return statearr_27832;
})();
if(cljs.core.truth_(inst_27727)){
var statearr_27833_27913 = state_27804__$1;
(statearr_27833_27913[(1)] = (23));

} else {
var statearr_27834_27914 = state_27804__$1;
(statearr_27834_27914[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (36))){
var state_27804__$1 = state_27804;
var statearr_27835_27915 = state_27804__$1;
(statearr_27835_27915[(2)] = false);

(statearr_27835_27915[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (41))){
var inst_27779 = (state_27804[(20)]);
var inst_27783 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27784 = cljs.core.map.call(null,inst_27783,inst_27779);
var inst_27785 = cljs.core.pr_str.call(null,inst_27784);
var inst_27786 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27785)].join('');
var inst_27787 = figwheel.client.utils.log.call(null,inst_27786);
var state_27804__$1 = state_27804;
var statearr_27836_27916 = state_27804__$1;
(statearr_27836_27916[(2)] = inst_27787);

(statearr_27836_27916[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (43))){
var inst_27780 = (state_27804[(21)]);
var inst_27790 = (state_27804[(2)]);
var inst_27791 = cljs.core.not_empty.call(null,inst_27780);
var state_27804__$1 = (function (){var statearr_27837 = state_27804;
(statearr_27837[(27)] = inst_27790);

return statearr_27837;
})();
if(cljs.core.truth_(inst_27791)){
var statearr_27838_27917 = state_27804__$1;
(statearr_27838_27917[(1)] = (44));

} else {
var statearr_27839_27918 = state_27804__$1;
(statearr_27839_27918[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (29))){
var inst_27724 = (state_27804[(26)]);
var inst_27718 = (state_27804[(19)]);
var inst_27726 = (state_27804[(23)]);
var inst_27721 = (state_27804[(24)]);
var inst_27758 = (state_27804[(16)]);
var inst_27722 = (state_27804[(25)]);
var inst_27754 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27757 = (function (){var all_files = inst_27718;
var res_SINGLEQUOTE_ = inst_27721;
var res = inst_27722;
var files_not_loaded = inst_27724;
var dependencies_that_loaded = inst_27726;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27724,inst_27718,inst_27726,inst_27721,inst_27758,inst_27722,inst_27754,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27756){
var map__27840 = p__27756;
var map__27840__$1 = ((((!((map__27840 == null)))?((((map__27840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27840):map__27840);
var namespace = cljs.core.get.call(null,map__27840__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27724,inst_27718,inst_27726,inst_27721,inst_27758,inst_27722,inst_27754,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27758__$1 = cljs.core.group_by.call(null,inst_27757,inst_27724);
var inst_27760 = (inst_27758__$1 == null);
var inst_27761 = cljs.core.not.call(null,inst_27760);
var state_27804__$1 = (function (){var statearr_27842 = state_27804;
(statearr_27842[(16)] = inst_27758__$1);

(statearr_27842[(28)] = inst_27754);

return statearr_27842;
})();
if(inst_27761){
var statearr_27843_27919 = state_27804__$1;
(statearr_27843_27919[(1)] = (32));

} else {
var statearr_27844_27920 = state_27804__$1;
(statearr_27844_27920[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (44))){
var inst_27780 = (state_27804[(21)]);
var inst_27793 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27780);
var inst_27794 = cljs.core.pr_str.call(null,inst_27793);
var inst_27795 = [cljs.core.str("not required: "),cljs.core.str(inst_27794)].join('');
var inst_27796 = figwheel.client.utils.log.call(null,inst_27795);
var state_27804__$1 = state_27804;
var statearr_27845_27921 = state_27804__$1;
(statearr_27845_27921[(2)] = inst_27796);

(statearr_27845_27921[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (6))){
var inst_27699 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27846_27922 = state_27804__$1;
(statearr_27846_27922[(2)] = inst_27699);

(statearr_27846_27922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (28))){
var inst_27724 = (state_27804[(26)]);
var inst_27751 = (state_27804[(2)]);
var inst_27752 = cljs.core.not_empty.call(null,inst_27724);
var state_27804__$1 = (function (){var statearr_27847 = state_27804;
(statearr_27847[(29)] = inst_27751);

return statearr_27847;
})();
if(cljs.core.truth_(inst_27752)){
var statearr_27848_27923 = state_27804__$1;
(statearr_27848_27923[(1)] = (29));

} else {
var statearr_27849_27924 = state_27804__$1;
(statearr_27849_27924[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (25))){
var inst_27722 = (state_27804[(25)]);
var inst_27738 = (state_27804[(2)]);
var inst_27739 = cljs.core.not_empty.call(null,inst_27722);
var state_27804__$1 = (function (){var statearr_27850 = state_27804;
(statearr_27850[(30)] = inst_27738);

return statearr_27850;
})();
if(cljs.core.truth_(inst_27739)){
var statearr_27851_27925 = state_27804__$1;
(statearr_27851_27925[(1)] = (26));

} else {
var statearr_27852_27926 = state_27804__$1;
(statearr_27852_27926[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (34))){
var inst_27773 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
if(cljs.core.truth_(inst_27773)){
var statearr_27853_27927 = state_27804__$1;
(statearr_27853_27927[(1)] = (38));

} else {
var statearr_27854_27928 = state_27804__$1;
(statearr_27854_27928[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (17))){
var state_27804__$1 = state_27804;
var statearr_27855_27929 = state_27804__$1;
(statearr_27855_27929[(2)] = recompile_dependents);

(statearr_27855_27929[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (3))){
var state_27804__$1 = state_27804;
var statearr_27856_27930 = state_27804__$1;
(statearr_27856_27930[(2)] = null);

(statearr_27856_27930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (12))){
var inst_27695 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27857_27931 = state_27804__$1;
(statearr_27857_27931[(2)] = inst_27695);

(statearr_27857_27931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (2))){
var inst_27657 = (state_27804[(13)]);
var inst_27664 = cljs.core.seq.call(null,inst_27657);
var inst_27665 = inst_27664;
var inst_27666 = null;
var inst_27667 = (0);
var inst_27668 = (0);
var state_27804__$1 = (function (){var statearr_27858 = state_27804;
(statearr_27858[(7)] = inst_27665);

(statearr_27858[(8)] = inst_27667);

(statearr_27858[(9)] = inst_27668);

(statearr_27858[(10)] = inst_27666);

return statearr_27858;
})();
var statearr_27859_27932 = state_27804__$1;
(statearr_27859_27932[(2)] = null);

(statearr_27859_27932[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (23))){
var inst_27724 = (state_27804[(26)]);
var inst_27718 = (state_27804[(19)]);
var inst_27726 = (state_27804[(23)]);
var inst_27721 = (state_27804[(24)]);
var inst_27722 = (state_27804[(25)]);
var inst_27729 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27731 = (function (){var all_files = inst_27718;
var res_SINGLEQUOTE_ = inst_27721;
var res = inst_27722;
var files_not_loaded = inst_27724;
var dependencies_that_loaded = inst_27726;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27724,inst_27718,inst_27726,inst_27721,inst_27722,inst_27729,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27730){
var map__27860 = p__27730;
var map__27860__$1 = ((((!((map__27860 == null)))?((((map__27860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27860):map__27860);
var request_url = cljs.core.get.call(null,map__27860__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27724,inst_27718,inst_27726,inst_27721,inst_27722,inst_27729,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27732 = cljs.core.reverse.call(null,inst_27726);
var inst_27733 = cljs.core.map.call(null,inst_27731,inst_27732);
var inst_27734 = cljs.core.pr_str.call(null,inst_27733);
var inst_27735 = figwheel.client.utils.log.call(null,inst_27734);
var state_27804__$1 = (function (){var statearr_27862 = state_27804;
(statearr_27862[(31)] = inst_27729);

return statearr_27862;
})();
var statearr_27863_27933 = state_27804__$1;
(statearr_27863_27933[(2)] = inst_27735);

(statearr_27863_27933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (35))){
var state_27804__$1 = state_27804;
var statearr_27864_27934 = state_27804__$1;
(statearr_27864_27934[(2)] = true);

(statearr_27864_27934[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (19))){
var inst_27708 = (state_27804[(12)]);
var inst_27714 = figwheel.client.file_reloading.expand_files.call(null,inst_27708);
var state_27804__$1 = state_27804;
var statearr_27865_27935 = state_27804__$1;
(statearr_27865_27935[(2)] = inst_27714);

(statearr_27865_27935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (11))){
var state_27804__$1 = state_27804;
var statearr_27866_27936 = state_27804__$1;
(statearr_27866_27936[(2)] = null);

(statearr_27866_27936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (9))){
var inst_27697 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27867_27937 = state_27804__$1;
(statearr_27867_27937[(2)] = inst_27697);

(statearr_27867_27937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (5))){
var inst_27667 = (state_27804[(8)]);
var inst_27668 = (state_27804[(9)]);
var inst_27670 = (inst_27668 < inst_27667);
var inst_27671 = inst_27670;
var state_27804__$1 = state_27804;
if(cljs.core.truth_(inst_27671)){
var statearr_27868_27938 = state_27804__$1;
(statearr_27868_27938[(1)] = (7));

} else {
var statearr_27869_27939 = state_27804__$1;
(statearr_27869_27939[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (14))){
var inst_27678 = (state_27804[(22)]);
var inst_27687 = cljs.core.first.call(null,inst_27678);
var inst_27688 = figwheel.client.file_reloading.eval_body.call(null,inst_27687,opts);
var inst_27689 = cljs.core.next.call(null,inst_27678);
var inst_27665 = inst_27689;
var inst_27666 = null;
var inst_27667 = (0);
var inst_27668 = (0);
var state_27804__$1 = (function (){var statearr_27870 = state_27804;
(statearr_27870[(32)] = inst_27688);

(statearr_27870[(7)] = inst_27665);

(statearr_27870[(8)] = inst_27667);

(statearr_27870[(9)] = inst_27668);

(statearr_27870[(10)] = inst_27666);

return statearr_27870;
})();
var statearr_27871_27940 = state_27804__$1;
(statearr_27871_27940[(2)] = null);

(statearr_27871_27940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (45))){
var state_27804__$1 = state_27804;
var statearr_27872_27941 = state_27804__$1;
(statearr_27872_27941[(2)] = null);

(statearr_27872_27941[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (26))){
var inst_27724 = (state_27804[(26)]);
var inst_27718 = (state_27804[(19)]);
var inst_27726 = (state_27804[(23)]);
var inst_27721 = (state_27804[(24)]);
var inst_27722 = (state_27804[(25)]);
var inst_27741 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27743 = (function (){var all_files = inst_27718;
var res_SINGLEQUOTE_ = inst_27721;
var res = inst_27722;
var files_not_loaded = inst_27724;
var dependencies_that_loaded = inst_27726;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27724,inst_27718,inst_27726,inst_27721,inst_27722,inst_27741,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27742){
var map__27873 = p__27742;
var map__27873__$1 = ((((!((map__27873 == null)))?((((map__27873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27873):map__27873);
var namespace = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27724,inst_27718,inst_27726,inst_27721,inst_27722,inst_27741,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27744 = cljs.core.map.call(null,inst_27743,inst_27722);
var inst_27745 = cljs.core.pr_str.call(null,inst_27744);
var inst_27746 = figwheel.client.utils.log.call(null,inst_27745);
var inst_27747 = (function (){var all_files = inst_27718;
var res_SINGLEQUOTE_ = inst_27721;
var res = inst_27722;
var files_not_loaded = inst_27724;
var dependencies_that_loaded = inst_27726;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27724,inst_27718,inst_27726,inst_27721,inst_27722,inst_27741,inst_27743,inst_27744,inst_27745,inst_27746,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27724,inst_27718,inst_27726,inst_27721,inst_27722,inst_27741,inst_27743,inst_27744,inst_27745,inst_27746,state_val_27805,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27748 = setTimeout(inst_27747,(10));
var state_27804__$1 = (function (){var statearr_27875 = state_27804;
(statearr_27875[(33)] = inst_27741);

(statearr_27875[(34)] = inst_27746);

return statearr_27875;
})();
var statearr_27876_27942 = state_27804__$1;
(statearr_27876_27942[(2)] = inst_27748);

(statearr_27876_27942[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (16))){
var state_27804__$1 = state_27804;
var statearr_27877_27943 = state_27804__$1;
(statearr_27877_27943[(2)] = reload_dependents);

(statearr_27877_27943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (38))){
var inst_27758 = (state_27804[(16)]);
var inst_27775 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27758);
var state_27804__$1 = state_27804;
var statearr_27878_27944 = state_27804__$1;
(statearr_27878_27944[(2)] = inst_27775);

(statearr_27878_27944[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (30))){
var state_27804__$1 = state_27804;
var statearr_27879_27945 = state_27804__$1;
(statearr_27879_27945[(2)] = null);

(statearr_27879_27945[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (10))){
var inst_27678 = (state_27804[(22)]);
var inst_27680 = cljs.core.chunked_seq_QMARK_.call(null,inst_27678);
var state_27804__$1 = state_27804;
if(inst_27680){
var statearr_27880_27946 = state_27804__$1;
(statearr_27880_27946[(1)] = (13));

} else {
var statearr_27881_27947 = state_27804__$1;
(statearr_27881_27947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (18))){
var inst_27712 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
if(cljs.core.truth_(inst_27712)){
var statearr_27882_27948 = state_27804__$1;
(statearr_27882_27948[(1)] = (19));

} else {
var statearr_27883_27949 = state_27804__$1;
(statearr_27883_27949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (42))){
var state_27804__$1 = state_27804;
var statearr_27884_27950 = state_27804__$1;
(statearr_27884_27950[(2)] = null);

(statearr_27884_27950[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (37))){
var inst_27770 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27885_27951 = state_27804__$1;
(statearr_27885_27951[(2)] = inst_27770);

(statearr_27885_27951[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (8))){
var inst_27665 = (state_27804[(7)]);
var inst_27678 = (state_27804[(22)]);
var inst_27678__$1 = cljs.core.seq.call(null,inst_27665);
var state_27804__$1 = (function (){var statearr_27886 = state_27804;
(statearr_27886[(22)] = inst_27678__$1);

return statearr_27886;
})();
if(inst_27678__$1){
var statearr_27887_27952 = state_27804__$1;
(statearr_27887_27952[(1)] = (10));

} else {
var statearr_27888_27953 = state_27804__$1;
(statearr_27888_27953[(1)] = (11));

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
});})(c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24065__auto__,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto____0 = (function (){
var statearr_27892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27892[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto__);

(statearr_27892[(1)] = (1));

return statearr_27892;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto____1 = (function (state_27804){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_27804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e27893){if((e27893 instanceof Object)){
var ex__24069__auto__ = e27893;
var statearr_27894_27954 = state_27804;
(statearr_27894_27954[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27955 = state_27804;
state_27804 = G__27955;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto__ = function(state_27804){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto____1.call(this,state_27804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24179__auto__ = (function (){var statearr_27895 = f__24178__auto__.call(null);
(statearr_27895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto__);

return statearr_27895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto__,map__27650,map__27650__$1,opts,before_jsload,on_jsload,reload_dependents,map__27651,map__27651__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24177__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27958,link){
var map__27961 = p__27958;
var map__27961__$1 = ((((!((map__27961 == null)))?((((map__27961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27961):map__27961);
var file = cljs.core.get.call(null,map__27961__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27961,map__27961__$1,file){
return (function (p1__27956_SHARP_,p2__27957_SHARP_){
if(cljs.core._EQ_.call(null,p1__27956_SHARP_,p2__27957_SHARP_)){
return p1__27956_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27961,map__27961__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27967){
var map__27968 = p__27967;
var map__27968__$1 = ((((!((map__27968 == null)))?((((map__27968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27968):map__27968);
var match_length = cljs.core.get.call(null,map__27968__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27968__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27963_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27963_SHARP_);
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
var args27970 = [];
var len__17765__auto___27973 = arguments.length;
var i__17766__auto___27974 = (0);
while(true){
if((i__17766__auto___27974 < len__17765__auto___27973)){
args27970.push((arguments[i__17766__auto___27974]));

var G__27975 = (i__17766__auto___27974 + (1));
i__17766__auto___27974 = G__27975;
continue;
} else {
}
break;
}

var G__27972 = args27970.length;
switch (G__27972) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27970.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27977_SHARP_,p2__27978_SHARP_){
return cljs.core.assoc.call(null,p1__27977_SHARP_,cljs.core.get.call(null,p2__27978_SHARP_,key),p2__27978_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27979){
var map__27982 = p__27979;
var map__27982__$1 = ((((!((map__27982 == null)))?((((map__27982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27982):map__27982);
var f_data = map__27982__$1;
var file = cljs.core.get.call(null,map__27982__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27984,files_msg){
var map__27991 = p__27984;
var map__27991__$1 = ((((!((map__27991 == null)))?((((map__27991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27991):map__27991);
var opts = map__27991__$1;
var on_cssload = cljs.core.get.call(null,map__27991__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27993_27997 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27994_27998 = null;
var count__27995_27999 = (0);
var i__27996_28000 = (0);
while(true){
if((i__27996_28000 < count__27995_27999)){
var f_28001 = cljs.core._nth.call(null,chunk__27994_27998,i__27996_28000);
figwheel.client.file_reloading.reload_css_file.call(null,f_28001);

var G__28002 = seq__27993_27997;
var G__28003 = chunk__27994_27998;
var G__28004 = count__27995_27999;
var G__28005 = (i__27996_28000 + (1));
seq__27993_27997 = G__28002;
chunk__27994_27998 = G__28003;
count__27995_27999 = G__28004;
i__27996_28000 = G__28005;
continue;
} else {
var temp__4425__auto___28006 = cljs.core.seq.call(null,seq__27993_27997);
if(temp__4425__auto___28006){
var seq__27993_28007__$1 = temp__4425__auto___28006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27993_28007__$1)){
var c__17510__auto___28008 = cljs.core.chunk_first.call(null,seq__27993_28007__$1);
var G__28009 = cljs.core.chunk_rest.call(null,seq__27993_28007__$1);
var G__28010 = c__17510__auto___28008;
var G__28011 = cljs.core.count.call(null,c__17510__auto___28008);
var G__28012 = (0);
seq__27993_27997 = G__28009;
chunk__27994_27998 = G__28010;
count__27995_27999 = G__28011;
i__27996_28000 = G__28012;
continue;
} else {
var f_28013 = cljs.core.first.call(null,seq__27993_28007__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28013);

var G__28014 = cljs.core.next.call(null,seq__27993_28007__$1);
var G__28015 = null;
var G__28016 = (0);
var G__28017 = (0);
seq__27993_27997 = G__28014;
chunk__27994_27998 = G__28015;
count__27995_27999 = G__28016;
i__27996_28000 = G__28017;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27991,map__27991__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27991,map__27991__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1453137583565