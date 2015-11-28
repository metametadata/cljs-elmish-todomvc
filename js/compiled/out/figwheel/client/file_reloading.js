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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27114_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27114_SHARP_));
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
var seq__27119 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27120 = null;
var count__27121 = (0);
var i__27122 = (0);
while(true){
if((i__27122 < count__27121)){
var n = cljs.core._nth.call(null,chunk__27120,i__27122);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27123 = seq__27119;
var G__27124 = chunk__27120;
var G__27125 = count__27121;
var G__27126 = (i__27122 + (1));
seq__27119 = G__27123;
chunk__27120 = G__27124;
count__27121 = G__27125;
i__27122 = G__27126;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27119);
if(temp__4425__auto__){
var seq__27119__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27119__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27119__$1);
var G__27127 = cljs.core.chunk_rest.call(null,seq__27119__$1);
var G__27128 = c__17554__auto__;
var G__27129 = cljs.core.count.call(null,c__17554__auto__);
var G__27130 = (0);
seq__27119 = G__27127;
chunk__27120 = G__27128;
count__27121 = G__27129;
i__27122 = G__27130;
continue;
} else {
var n = cljs.core.first.call(null,seq__27119__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27131 = cljs.core.next.call(null,seq__27119__$1);
var G__27132 = null;
var G__27133 = (0);
var G__27134 = (0);
seq__27119 = G__27131;
chunk__27120 = G__27132;
count__27121 = G__27133;
i__27122 = G__27134;
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

var seq__27173_27180 = cljs.core.seq.call(null,deps);
var chunk__27174_27181 = null;
var count__27175_27182 = (0);
var i__27176_27183 = (0);
while(true){
if((i__27176_27183 < count__27175_27182)){
var dep_27184 = cljs.core._nth.call(null,chunk__27174_27181,i__27176_27183);
topo_sort_helper_STAR_.call(null,dep_27184,(depth + (1)),state);

var G__27185 = seq__27173_27180;
var G__27186 = chunk__27174_27181;
var G__27187 = count__27175_27182;
var G__27188 = (i__27176_27183 + (1));
seq__27173_27180 = G__27185;
chunk__27174_27181 = G__27186;
count__27175_27182 = G__27187;
i__27176_27183 = G__27188;
continue;
} else {
var temp__4425__auto___27189 = cljs.core.seq.call(null,seq__27173_27180);
if(temp__4425__auto___27189){
var seq__27173_27190__$1 = temp__4425__auto___27189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27173_27190__$1)){
var c__17554__auto___27191 = cljs.core.chunk_first.call(null,seq__27173_27190__$1);
var G__27192 = cljs.core.chunk_rest.call(null,seq__27173_27190__$1);
var G__27193 = c__17554__auto___27191;
var G__27194 = cljs.core.count.call(null,c__17554__auto___27191);
var G__27195 = (0);
seq__27173_27180 = G__27192;
chunk__27174_27181 = G__27193;
count__27175_27182 = G__27194;
i__27176_27183 = G__27195;
continue;
} else {
var dep_27196 = cljs.core.first.call(null,seq__27173_27190__$1);
topo_sort_helper_STAR_.call(null,dep_27196,(depth + (1)),state);

var G__27197 = cljs.core.next.call(null,seq__27173_27190__$1);
var G__27198 = null;
var G__27199 = (0);
var G__27200 = (0);
seq__27173_27180 = G__27197;
chunk__27174_27181 = G__27198;
count__27175_27182 = G__27199;
i__27176_27183 = G__27200;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27177){
var vec__27179 = p__27177;
var x = cljs.core.nth.call(null,vec__27179,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27179,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27179,x,xs,get_deps__$1){
return (function (p1__27135_SHARP_){
return clojure.set.difference.call(null,p1__27135_SHARP_,x);
});})(vec__27179,x,xs,get_deps__$1))
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
var seq__27213 = cljs.core.seq.call(null,provides);
var chunk__27214 = null;
var count__27215 = (0);
var i__27216 = (0);
while(true){
if((i__27216 < count__27215)){
var prov = cljs.core._nth.call(null,chunk__27214,i__27216);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27217_27225 = cljs.core.seq.call(null,requires);
var chunk__27218_27226 = null;
var count__27219_27227 = (0);
var i__27220_27228 = (0);
while(true){
if((i__27220_27228 < count__27219_27227)){
var req_27229 = cljs.core._nth.call(null,chunk__27218_27226,i__27220_27228);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27229,prov);

var G__27230 = seq__27217_27225;
var G__27231 = chunk__27218_27226;
var G__27232 = count__27219_27227;
var G__27233 = (i__27220_27228 + (1));
seq__27217_27225 = G__27230;
chunk__27218_27226 = G__27231;
count__27219_27227 = G__27232;
i__27220_27228 = G__27233;
continue;
} else {
var temp__4425__auto___27234 = cljs.core.seq.call(null,seq__27217_27225);
if(temp__4425__auto___27234){
var seq__27217_27235__$1 = temp__4425__auto___27234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27217_27235__$1)){
var c__17554__auto___27236 = cljs.core.chunk_first.call(null,seq__27217_27235__$1);
var G__27237 = cljs.core.chunk_rest.call(null,seq__27217_27235__$1);
var G__27238 = c__17554__auto___27236;
var G__27239 = cljs.core.count.call(null,c__17554__auto___27236);
var G__27240 = (0);
seq__27217_27225 = G__27237;
chunk__27218_27226 = G__27238;
count__27219_27227 = G__27239;
i__27220_27228 = G__27240;
continue;
} else {
var req_27241 = cljs.core.first.call(null,seq__27217_27235__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27241,prov);

var G__27242 = cljs.core.next.call(null,seq__27217_27235__$1);
var G__27243 = null;
var G__27244 = (0);
var G__27245 = (0);
seq__27217_27225 = G__27242;
chunk__27218_27226 = G__27243;
count__27219_27227 = G__27244;
i__27220_27228 = G__27245;
continue;
}
} else {
}
}
break;
}

var G__27246 = seq__27213;
var G__27247 = chunk__27214;
var G__27248 = count__27215;
var G__27249 = (i__27216 + (1));
seq__27213 = G__27246;
chunk__27214 = G__27247;
count__27215 = G__27248;
i__27216 = G__27249;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27213);
if(temp__4425__auto__){
var seq__27213__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27213__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27213__$1);
var G__27250 = cljs.core.chunk_rest.call(null,seq__27213__$1);
var G__27251 = c__17554__auto__;
var G__27252 = cljs.core.count.call(null,c__17554__auto__);
var G__27253 = (0);
seq__27213 = G__27250;
chunk__27214 = G__27251;
count__27215 = G__27252;
i__27216 = G__27253;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27213__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27221_27254 = cljs.core.seq.call(null,requires);
var chunk__27222_27255 = null;
var count__27223_27256 = (0);
var i__27224_27257 = (0);
while(true){
if((i__27224_27257 < count__27223_27256)){
var req_27258 = cljs.core._nth.call(null,chunk__27222_27255,i__27224_27257);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27258,prov);

var G__27259 = seq__27221_27254;
var G__27260 = chunk__27222_27255;
var G__27261 = count__27223_27256;
var G__27262 = (i__27224_27257 + (1));
seq__27221_27254 = G__27259;
chunk__27222_27255 = G__27260;
count__27223_27256 = G__27261;
i__27224_27257 = G__27262;
continue;
} else {
var temp__4425__auto___27263__$1 = cljs.core.seq.call(null,seq__27221_27254);
if(temp__4425__auto___27263__$1){
var seq__27221_27264__$1 = temp__4425__auto___27263__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27221_27264__$1)){
var c__17554__auto___27265 = cljs.core.chunk_first.call(null,seq__27221_27264__$1);
var G__27266 = cljs.core.chunk_rest.call(null,seq__27221_27264__$1);
var G__27267 = c__17554__auto___27265;
var G__27268 = cljs.core.count.call(null,c__17554__auto___27265);
var G__27269 = (0);
seq__27221_27254 = G__27266;
chunk__27222_27255 = G__27267;
count__27223_27256 = G__27268;
i__27224_27257 = G__27269;
continue;
} else {
var req_27270 = cljs.core.first.call(null,seq__27221_27264__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27270,prov);

var G__27271 = cljs.core.next.call(null,seq__27221_27264__$1);
var G__27272 = null;
var G__27273 = (0);
var G__27274 = (0);
seq__27221_27254 = G__27271;
chunk__27222_27255 = G__27272;
count__27223_27256 = G__27273;
i__27224_27257 = G__27274;
continue;
}
} else {
}
}
break;
}

var G__27275 = cljs.core.next.call(null,seq__27213__$1);
var G__27276 = null;
var G__27277 = (0);
var G__27278 = (0);
seq__27213 = G__27275;
chunk__27214 = G__27276;
count__27215 = G__27277;
i__27216 = G__27278;
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
var seq__27283_27287 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27284_27288 = null;
var count__27285_27289 = (0);
var i__27286_27290 = (0);
while(true){
if((i__27286_27290 < count__27285_27289)){
var ns_27291 = cljs.core._nth.call(null,chunk__27284_27288,i__27286_27290);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27291);

var G__27292 = seq__27283_27287;
var G__27293 = chunk__27284_27288;
var G__27294 = count__27285_27289;
var G__27295 = (i__27286_27290 + (1));
seq__27283_27287 = G__27292;
chunk__27284_27288 = G__27293;
count__27285_27289 = G__27294;
i__27286_27290 = G__27295;
continue;
} else {
var temp__4425__auto___27296 = cljs.core.seq.call(null,seq__27283_27287);
if(temp__4425__auto___27296){
var seq__27283_27297__$1 = temp__4425__auto___27296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27283_27297__$1)){
var c__17554__auto___27298 = cljs.core.chunk_first.call(null,seq__27283_27297__$1);
var G__27299 = cljs.core.chunk_rest.call(null,seq__27283_27297__$1);
var G__27300 = c__17554__auto___27298;
var G__27301 = cljs.core.count.call(null,c__17554__auto___27298);
var G__27302 = (0);
seq__27283_27287 = G__27299;
chunk__27284_27288 = G__27300;
count__27285_27289 = G__27301;
i__27286_27290 = G__27302;
continue;
} else {
var ns_27303 = cljs.core.first.call(null,seq__27283_27297__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27303);

var G__27304 = cljs.core.next.call(null,seq__27283_27297__$1);
var G__27305 = null;
var G__27306 = (0);
var G__27307 = (0);
seq__27283_27287 = G__27304;
chunk__27284_27288 = G__27305;
count__27285_27289 = G__27306;
i__27286_27290 = G__27307;
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
var G__27308__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27309__i = 0, G__27309__a = new Array(arguments.length -  0);
while (G__27309__i < G__27309__a.length) {G__27309__a[G__27309__i] = arguments[G__27309__i + 0]; ++G__27309__i;}
  args = new cljs.core.IndexedSeq(G__27309__a,0);
} 
return G__27308__delegate.call(this,args);};
G__27308.cljs$lang$maxFixedArity = 0;
G__27308.cljs$lang$applyTo = (function (arglist__27310){
var args = cljs.core.seq(arglist__27310);
return G__27308__delegate(args);
});
G__27308.cljs$core$IFn$_invoke$arity$variadic = G__27308__delegate;
return G__27308;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27312 = cljs.core._EQ_;
var expr__27313 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27312.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27313))){
var path_parts = ((function (pred__27312,expr__27313){
return (function (p1__27311_SHARP_){
return clojure.string.split.call(null,p1__27311_SHARP_,/[\/\\]/);
});})(pred__27312,expr__27313))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27312,expr__27313){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27315){if((e27315 instanceof Error)){
var e = e27315;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27315;

}
}})());
});
;})(path_parts,sep,root,pred__27312,expr__27313))
} else {
if(cljs.core.truth_(pred__27312.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27313))){
return ((function (pred__27312,expr__27313){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27312,expr__27313){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27312,expr__27313))
);

return deferred.addErrback(((function (deferred,pred__27312,expr__27313){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27312,expr__27313))
);
});
;})(pred__27312,expr__27313))
} else {
return ((function (pred__27312,expr__27313){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27312,expr__27313))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27316,callback){
var map__27319 = p__27316;
var map__27319__$1 = ((((!((map__27319 == null)))?((((map__27319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27319):map__27319);
var file_msg = map__27319__$1;
var request_url = cljs.core.get.call(null,map__27319__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27319,map__27319__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27319,map__27319__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto__){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto__){
return (function (state_27343){
var state_val_27344 = (state_27343[(1)]);
if((state_val_27344 === (7))){
var inst_27339 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
var statearr_27345_27365 = state_27343__$1;
(statearr_27345_27365[(2)] = inst_27339);

(statearr_27345_27365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (1))){
var state_27343__$1 = state_27343;
var statearr_27346_27366 = state_27343__$1;
(statearr_27346_27366[(2)] = null);

(statearr_27346_27366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (4))){
var inst_27323 = (state_27343[(7)]);
var inst_27323__$1 = (state_27343[(2)]);
var state_27343__$1 = (function (){var statearr_27347 = state_27343;
(statearr_27347[(7)] = inst_27323__$1);

return statearr_27347;
})();
if(cljs.core.truth_(inst_27323__$1)){
var statearr_27348_27367 = state_27343__$1;
(statearr_27348_27367[(1)] = (5));

} else {
var statearr_27349_27368 = state_27343__$1;
(statearr_27349_27368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (6))){
var state_27343__$1 = state_27343;
var statearr_27350_27369 = state_27343__$1;
(statearr_27350_27369[(2)] = null);

(statearr_27350_27369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (3))){
var inst_27341 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27343__$1,inst_27341);
} else {
if((state_val_27344 === (2))){
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27343__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27344 === (11))){
var inst_27335 = (state_27343[(2)]);
var state_27343__$1 = (function (){var statearr_27351 = state_27343;
(statearr_27351[(8)] = inst_27335);

return statearr_27351;
})();
var statearr_27352_27370 = state_27343__$1;
(statearr_27352_27370[(2)] = null);

(statearr_27352_27370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (9))){
var inst_27327 = (state_27343[(9)]);
var inst_27329 = (state_27343[(10)]);
var inst_27331 = inst_27329.call(null,inst_27327);
var state_27343__$1 = state_27343;
var statearr_27353_27371 = state_27343__$1;
(statearr_27353_27371[(2)] = inst_27331);

(statearr_27353_27371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (5))){
var inst_27323 = (state_27343[(7)]);
var inst_27325 = figwheel.client.file_reloading.blocking_load.call(null,inst_27323);
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27343__$1,(8),inst_27325);
} else {
if((state_val_27344 === (10))){
var inst_27327 = (state_27343[(9)]);
var inst_27333 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27327);
var state_27343__$1 = state_27343;
var statearr_27354_27372 = state_27343__$1;
(statearr_27354_27372[(2)] = inst_27333);

(statearr_27354_27372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (8))){
var inst_27329 = (state_27343[(10)]);
var inst_27323 = (state_27343[(7)]);
var inst_27327 = (state_27343[(2)]);
var inst_27328 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27329__$1 = cljs.core.get.call(null,inst_27328,inst_27323);
var state_27343__$1 = (function (){var statearr_27355 = state_27343;
(statearr_27355[(9)] = inst_27327);

(statearr_27355[(10)] = inst_27329__$1);

return statearr_27355;
})();
if(cljs.core.truth_(inst_27329__$1)){
var statearr_27356_27373 = state_27343__$1;
(statearr_27356_27373[(1)] = (9));

} else {
var statearr_27357_27374 = state_27343__$1;
(statearr_27357_27374[(1)] = (10));

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
});})(c__24281__auto__))
;
return ((function (switch__24169__auto__,c__24281__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24170__auto__ = null;
var figwheel$client$file_reloading$state_machine__24170__auto____0 = (function (){
var statearr_27361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27361[(0)] = figwheel$client$file_reloading$state_machine__24170__auto__);

(statearr_27361[(1)] = (1));

return statearr_27361;
});
var figwheel$client$file_reloading$state_machine__24170__auto____1 = (function (state_27343){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_27343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e27362){if((e27362 instanceof Object)){
var ex__24173__auto__ = e27362;
var statearr_27363_27375 = state_27343;
(statearr_27363_27375[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27376 = state_27343;
state_27343 = G__27376;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24170__auto__ = function(state_27343){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24170__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24170__auto____1.call(this,state_27343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24170__auto____0;
figwheel$client$file_reloading$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24170__auto____1;
return figwheel$client$file_reloading$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto__))
})();
var state__24283__auto__ = (function (){var statearr_27364 = f__24282__auto__.call(null);
(statearr_27364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto__);

return statearr_27364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto__))
);

return c__24281__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27377,callback){
var map__27380 = p__27377;
var map__27380__$1 = ((((!((map__27380 == null)))?((((map__27380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27380):map__27380);
var file_msg = map__27380__$1;
var namespace = cljs.core.get.call(null,map__27380__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27380,map__27380__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27380,map__27380__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27382){
var map__27385 = p__27382;
var map__27385__$1 = ((((!((map__27385 == null)))?((((map__27385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27385):map__27385);
var file_msg = map__27385__$1;
var namespace = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27387,callback){
var map__27390 = p__27387;
var map__27390__$1 = ((((!((map__27390 == null)))?((((map__27390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27390):map__27390);
var file_msg = map__27390__$1;
var request_url = cljs.core.get.call(null,map__27390__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27390__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24281__auto___27478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___27478,out){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___27478,out){
return (function (state_27460){
var state_val_27461 = (state_27460[(1)]);
if((state_val_27461 === (1))){
var inst_27438 = cljs.core.nth.call(null,files,(0),null);
var inst_27439 = cljs.core.nthnext.call(null,files,(1));
var inst_27440 = files;
var state_27460__$1 = (function (){var statearr_27462 = state_27460;
(statearr_27462[(7)] = inst_27440);

(statearr_27462[(8)] = inst_27438);

(statearr_27462[(9)] = inst_27439);

return statearr_27462;
})();
var statearr_27463_27479 = state_27460__$1;
(statearr_27463_27479[(2)] = null);

(statearr_27463_27479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (2))){
var inst_27443 = (state_27460[(10)]);
var inst_27440 = (state_27460[(7)]);
var inst_27443__$1 = cljs.core.nth.call(null,inst_27440,(0),null);
var inst_27444 = cljs.core.nthnext.call(null,inst_27440,(1));
var inst_27445 = (inst_27443__$1 == null);
var inst_27446 = cljs.core.not.call(null,inst_27445);
var state_27460__$1 = (function (){var statearr_27464 = state_27460;
(statearr_27464[(10)] = inst_27443__$1);

(statearr_27464[(11)] = inst_27444);

return statearr_27464;
})();
if(inst_27446){
var statearr_27465_27480 = state_27460__$1;
(statearr_27465_27480[(1)] = (4));

} else {
var statearr_27466_27481 = state_27460__$1;
(statearr_27466_27481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (3))){
var inst_27458 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27460__$1,inst_27458);
} else {
if((state_val_27461 === (4))){
var inst_27443 = (state_27460[(10)]);
var inst_27448 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27443);
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27460__$1,(7),inst_27448);
} else {
if((state_val_27461 === (5))){
var inst_27454 = cljs.core.async.close_BANG_.call(null,out);
var state_27460__$1 = state_27460;
var statearr_27467_27482 = state_27460__$1;
(statearr_27467_27482[(2)] = inst_27454);

(statearr_27467_27482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (6))){
var inst_27456 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27468_27483 = state_27460__$1;
(statearr_27468_27483[(2)] = inst_27456);

(statearr_27468_27483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (7))){
var inst_27444 = (state_27460[(11)]);
var inst_27450 = (state_27460[(2)]);
var inst_27451 = cljs.core.async.put_BANG_.call(null,out,inst_27450);
var inst_27440 = inst_27444;
var state_27460__$1 = (function (){var statearr_27469 = state_27460;
(statearr_27469[(7)] = inst_27440);

(statearr_27469[(12)] = inst_27451);

return statearr_27469;
})();
var statearr_27470_27484 = state_27460__$1;
(statearr_27470_27484[(2)] = null);

(statearr_27470_27484[(1)] = (2));


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
});})(c__24281__auto___27478,out))
;
return ((function (switch__24169__auto__,c__24281__auto___27478,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto____0 = (function (){
var statearr_27474 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27474[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto__);

(statearr_27474[(1)] = (1));

return statearr_27474;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto____1 = (function (state_27460){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_27460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e27475){if((e27475 instanceof Object)){
var ex__24173__auto__ = e27475;
var statearr_27476_27485 = state_27460;
(statearr_27476_27485[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27486 = state_27460;
state_27460 = G__27486;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto__ = function(state_27460){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto____1.call(this,state_27460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___27478,out))
})();
var state__24283__auto__ = (function (){var statearr_27477 = f__24282__auto__.call(null);
(statearr_27477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___27478);

return statearr_27477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___27478,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27487,opts){
var map__27491 = p__27487;
var map__27491__$1 = ((((!((map__27491 == null)))?((((map__27491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27491):map__27491);
var eval_body__$1 = cljs.core.get.call(null,map__27491__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27491__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27493){var e = e27493;
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
return (function (p1__27494_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27494_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27499){
var vec__27500 = p__27499;
var k = cljs.core.nth.call(null,vec__27500,(0),null);
var v = cljs.core.nth.call(null,vec__27500,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27501){
var vec__27502 = p__27501;
var k = cljs.core.nth.call(null,vec__27502,(0),null);
var v = cljs.core.nth.call(null,vec__27502,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27506,p__27507){
var map__27754 = p__27506;
var map__27754__$1 = ((((!((map__27754 == null)))?((((map__27754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27754):map__27754);
var opts = map__27754__$1;
var before_jsload = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27755 = p__27507;
var map__27755__$1 = ((((!((map__27755 == null)))?((((map__27755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27755):map__27755);
var msg = map__27755__$1;
var files = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27755__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27908){
var state_val_27909 = (state_27908[(1)]);
if((state_val_27909 === (7))){
var inst_27770 = (state_27908[(7)]);
var inst_27771 = (state_27908[(8)]);
var inst_27769 = (state_27908[(9)]);
var inst_27772 = (state_27908[(10)]);
var inst_27777 = cljs.core._nth.call(null,inst_27770,inst_27772);
var inst_27778 = figwheel.client.file_reloading.eval_body.call(null,inst_27777,opts);
var inst_27779 = (inst_27772 + (1));
var tmp27910 = inst_27770;
var tmp27911 = inst_27771;
var tmp27912 = inst_27769;
var inst_27769__$1 = tmp27912;
var inst_27770__$1 = tmp27910;
var inst_27771__$1 = tmp27911;
var inst_27772__$1 = inst_27779;
var state_27908__$1 = (function (){var statearr_27913 = state_27908;
(statearr_27913[(11)] = inst_27778);

(statearr_27913[(7)] = inst_27770__$1);

(statearr_27913[(8)] = inst_27771__$1);

(statearr_27913[(9)] = inst_27769__$1);

(statearr_27913[(10)] = inst_27772__$1);

return statearr_27913;
})();
var statearr_27914_28000 = state_27908__$1;
(statearr_27914_28000[(2)] = null);

(statearr_27914_28000[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (20))){
var inst_27812 = (state_27908[(12)]);
var inst_27820 = figwheel.client.file_reloading.sort_files.call(null,inst_27812);
var state_27908__$1 = state_27908;
var statearr_27915_28001 = state_27908__$1;
(statearr_27915_28001[(2)] = inst_27820);

(statearr_27915_28001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (27))){
var state_27908__$1 = state_27908;
var statearr_27916_28002 = state_27908__$1;
(statearr_27916_28002[(2)] = null);

(statearr_27916_28002[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (1))){
var inst_27761 = (state_27908[(13)]);
var inst_27758 = before_jsload.call(null,files);
var inst_27759 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27760 = (function (){return ((function (inst_27761,inst_27758,inst_27759,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27503_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27503_SHARP_);
});
;})(inst_27761,inst_27758,inst_27759,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27761__$1 = cljs.core.filter.call(null,inst_27760,files);
var inst_27762 = cljs.core.not_empty.call(null,inst_27761__$1);
var state_27908__$1 = (function (){var statearr_27917 = state_27908;
(statearr_27917[(13)] = inst_27761__$1);

(statearr_27917[(14)] = inst_27759);

(statearr_27917[(15)] = inst_27758);

return statearr_27917;
})();
if(cljs.core.truth_(inst_27762)){
var statearr_27918_28003 = state_27908__$1;
(statearr_27918_28003[(1)] = (2));

} else {
var statearr_27919_28004 = state_27908__$1;
(statearr_27919_28004[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (24))){
var state_27908__$1 = state_27908;
var statearr_27920_28005 = state_27908__$1;
(statearr_27920_28005[(2)] = null);

(statearr_27920_28005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (39))){
var inst_27862 = (state_27908[(16)]);
var state_27908__$1 = state_27908;
var statearr_27921_28006 = state_27908__$1;
(statearr_27921_28006[(2)] = inst_27862);

(statearr_27921_28006[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (46))){
var inst_27903 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
var statearr_27922_28007 = state_27908__$1;
(statearr_27922_28007[(2)] = inst_27903);

(statearr_27922_28007[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (4))){
var inst_27806 = (state_27908[(2)]);
var inst_27807 = cljs.core.List.EMPTY;
var inst_27808 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27807);
var inst_27809 = (function (){return ((function (inst_27806,inst_27807,inst_27808,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27504_SHARP_){
var and__16739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27504_SHARP_);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27504_SHARP_));
} else {
return and__16739__auto__;
}
});
;})(inst_27806,inst_27807,inst_27808,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27810 = cljs.core.filter.call(null,inst_27809,files);
var inst_27811 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27812 = cljs.core.concat.call(null,inst_27810,inst_27811);
var state_27908__$1 = (function (){var statearr_27923 = state_27908;
(statearr_27923[(17)] = inst_27806);

(statearr_27923[(12)] = inst_27812);

(statearr_27923[(18)] = inst_27808);

return statearr_27923;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27924_28008 = state_27908__$1;
(statearr_27924_28008[(1)] = (16));

} else {
var statearr_27925_28009 = state_27908__$1;
(statearr_27925_28009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (15))){
var inst_27796 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
var statearr_27926_28010 = state_27908__$1;
(statearr_27926_28010[(2)] = inst_27796);

(statearr_27926_28010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (21))){
var inst_27822 = (state_27908[(19)]);
var inst_27822__$1 = (state_27908[(2)]);
var inst_27823 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27822__$1);
var state_27908__$1 = (function (){var statearr_27927 = state_27908;
(statearr_27927[(19)] = inst_27822__$1);

return statearr_27927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27908__$1,(22),inst_27823);
} else {
if((state_val_27909 === (31))){
var inst_27906 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27908__$1,inst_27906);
} else {
if((state_val_27909 === (32))){
var inst_27862 = (state_27908[(16)]);
var inst_27867 = inst_27862.cljs$lang$protocol_mask$partition0$;
var inst_27868 = (inst_27867 & (64));
var inst_27869 = inst_27862.cljs$core$ISeq$;
var inst_27870 = (inst_27868) || (inst_27869);
var state_27908__$1 = state_27908;
if(cljs.core.truth_(inst_27870)){
var statearr_27928_28011 = state_27908__$1;
(statearr_27928_28011[(1)] = (35));

} else {
var statearr_27929_28012 = state_27908__$1;
(statearr_27929_28012[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (40))){
var inst_27883 = (state_27908[(20)]);
var inst_27882 = (state_27908[(2)]);
var inst_27883__$1 = cljs.core.get.call(null,inst_27882,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27884 = cljs.core.get.call(null,inst_27882,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27885 = cljs.core.not_empty.call(null,inst_27883__$1);
var state_27908__$1 = (function (){var statearr_27930 = state_27908;
(statearr_27930[(21)] = inst_27884);

(statearr_27930[(20)] = inst_27883__$1);

return statearr_27930;
})();
if(cljs.core.truth_(inst_27885)){
var statearr_27931_28013 = state_27908__$1;
(statearr_27931_28013[(1)] = (41));

} else {
var statearr_27932_28014 = state_27908__$1;
(statearr_27932_28014[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (33))){
var state_27908__$1 = state_27908;
var statearr_27933_28015 = state_27908__$1;
(statearr_27933_28015[(2)] = false);

(statearr_27933_28015[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (13))){
var inst_27782 = (state_27908[(22)]);
var inst_27786 = cljs.core.chunk_first.call(null,inst_27782);
var inst_27787 = cljs.core.chunk_rest.call(null,inst_27782);
var inst_27788 = cljs.core.count.call(null,inst_27786);
var inst_27769 = inst_27787;
var inst_27770 = inst_27786;
var inst_27771 = inst_27788;
var inst_27772 = (0);
var state_27908__$1 = (function (){var statearr_27934 = state_27908;
(statearr_27934[(7)] = inst_27770);

(statearr_27934[(8)] = inst_27771);

(statearr_27934[(9)] = inst_27769);

(statearr_27934[(10)] = inst_27772);

return statearr_27934;
})();
var statearr_27935_28016 = state_27908__$1;
(statearr_27935_28016[(2)] = null);

(statearr_27935_28016[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (22))){
var inst_27826 = (state_27908[(23)]);
var inst_27825 = (state_27908[(24)]);
var inst_27830 = (state_27908[(25)]);
var inst_27822 = (state_27908[(19)]);
var inst_27825__$1 = (state_27908[(2)]);
var inst_27826__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27825__$1);
var inst_27827 = (function (){var all_files = inst_27822;
var res_SINGLEQUOTE_ = inst_27825__$1;
var res = inst_27826__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27826,inst_27825,inst_27830,inst_27822,inst_27825__$1,inst_27826__$1,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27505_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27505_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27826,inst_27825,inst_27830,inst_27822,inst_27825__$1,inst_27826__$1,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27828 = cljs.core.filter.call(null,inst_27827,inst_27825__$1);
var inst_27829 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27830__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27829);
var inst_27831 = cljs.core.not_empty.call(null,inst_27830__$1);
var state_27908__$1 = (function (){var statearr_27936 = state_27908;
(statearr_27936[(23)] = inst_27826__$1);

(statearr_27936[(24)] = inst_27825__$1);

(statearr_27936[(25)] = inst_27830__$1);

(statearr_27936[(26)] = inst_27828);

return statearr_27936;
})();
if(cljs.core.truth_(inst_27831)){
var statearr_27937_28017 = state_27908__$1;
(statearr_27937_28017[(1)] = (23));

} else {
var statearr_27938_28018 = state_27908__$1;
(statearr_27938_28018[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (36))){
var state_27908__$1 = state_27908;
var statearr_27939_28019 = state_27908__$1;
(statearr_27939_28019[(2)] = false);

(statearr_27939_28019[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (41))){
var inst_27883 = (state_27908[(20)]);
var inst_27887 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27888 = cljs.core.map.call(null,inst_27887,inst_27883);
var inst_27889 = cljs.core.pr_str.call(null,inst_27888);
var inst_27890 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27889)].join('');
var inst_27891 = figwheel.client.utils.log.call(null,inst_27890);
var state_27908__$1 = state_27908;
var statearr_27940_28020 = state_27908__$1;
(statearr_27940_28020[(2)] = inst_27891);

(statearr_27940_28020[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (43))){
var inst_27884 = (state_27908[(21)]);
var inst_27894 = (state_27908[(2)]);
var inst_27895 = cljs.core.not_empty.call(null,inst_27884);
var state_27908__$1 = (function (){var statearr_27941 = state_27908;
(statearr_27941[(27)] = inst_27894);

return statearr_27941;
})();
if(cljs.core.truth_(inst_27895)){
var statearr_27942_28021 = state_27908__$1;
(statearr_27942_28021[(1)] = (44));

} else {
var statearr_27943_28022 = state_27908__$1;
(statearr_27943_28022[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (29))){
var inst_27826 = (state_27908[(23)]);
var inst_27825 = (state_27908[(24)]);
var inst_27830 = (state_27908[(25)]);
var inst_27828 = (state_27908[(26)]);
var inst_27822 = (state_27908[(19)]);
var inst_27862 = (state_27908[(16)]);
var inst_27858 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27861 = (function (){var all_files = inst_27822;
var res_SINGLEQUOTE_ = inst_27825;
var res = inst_27826;
var files_not_loaded = inst_27828;
var dependencies_that_loaded = inst_27830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27826,inst_27825,inst_27830,inst_27828,inst_27822,inst_27862,inst_27858,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27860){
var map__27944 = p__27860;
var map__27944__$1 = ((((!((map__27944 == null)))?((((map__27944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27944):map__27944);
var namespace = cljs.core.get.call(null,map__27944__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27826,inst_27825,inst_27830,inst_27828,inst_27822,inst_27862,inst_27858,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27862__$1 = cljs.core.group_by.call(null,inst_27861,inst_27828);
var inst_27864 = (inst_27862__$1 == null);
var inst_27865 = cljs.core.not.call(null,inst_27864);
var state_27908__$1 = (function (){var statearr_27946 = state_27908;
(statearr_27946[(28)] = inst_27858);

(statearr_27946[(16)] = inst_27862__$1);

return statearr_27946;
})();
if(inst_27865){
var statearr_27947_28023 = state_27908__$1;
(statearr_27947_28023[(1)] = (32));

} else {
var statearr_27948_28024 = state_27908__$1;
(statearr_27948_28024[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (44))){
var inst_27884 = (state_27908[(21)]);
var inst_27897 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27884);
var inst_27898 = cljs.core.pr_str.call(null,inst_27897);
var inst_27899 = [cljs.core.str("not required: "),cljs.core.str(inst_27898)].join('');
var inst_27900 = figwheel.client.utils.log.call(null,inst_27899);
var state_27908__$1 = state_27908;
var statearr_27949_28025 = state_27908__$1;
(statearr_27949_28025[(2)] = inst_27900);

(statearr_27949_28025[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (6))){
var inst_27803 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
var statearr_27950_28026 = state_27908__$1;
(statearr_27950_28026[(2)] = inst_27803);

(statearr_27950_28026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (28))){
var inst_27828 = (state_27908[(26)]);
var inst_27855 = (state_27908[(2)]);
var inst_27856 = cljs.core.not_empty.call(null,inst_27828);
var state_27908__$1 = (function (){var statearr_27951 = state_27908;
(statearr_27951[(29)] = inst_27855);

return statearr_27951;
})();
if(cljs.core.truth_(inst_27856)){
var statearr_27952_28027 = state_27908__$1;
(statearr_27952_28027[(1)] = (29));

} else {
var statearr_27953_28028 = state_27908__$1;
(statearr_27953_28028[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (25))){
var inst_27826 = (state_27908[(23)]);
var inst_27842 = (state_27908[(2)]);
var inst_27843 = cljs.core.not_empty.call(null,inst_27826);
var state_27908__$1 = (function (){var statearr_27954 = state_27908;
(statearr_27954[(30)] = inst_27842);

return statearr_27954;
})();
if(cljs.core.truth_(inst_27843)){
var statearr_27955_28029 = state_27908__$1;
(statearr_27955_28029[(1)] = (26));

} else {
var statearr_27956_28030 = state_27908__$1;
(statearr_27956_28030[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (34))){
var inst_27877 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
if(cljs.core.truth_(inst_27877)){
var statearr_27957_28031 = state_27908__$1;
(statearr_27957_28031[(1)] = (38));

} else {
var statearr_27958_28032 = state_27908__$1;
(statearr_27958_28032[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (17))){
var state_27908__$1 = state_27908;
var statearr_27959_28033 = state_27908__$1;
(statearr_27959_28033[(2)] = recompile_dependents);

(statearr_27959_28033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (3))){
var state_27908__$1 = state_27908;
var statearr_27960_28034 = state_27908__$1;
(statearr_27960_28034[(2)] = null);

(statearr_27960_28034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (12))){
var inst_27799 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
var statearr_27961_28035 = state_27908__$1;
(statearr_27961_28035[(2)] = inst_27799);

(statearr_27961_28035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (2))){
var inst_27761 = (state_27908[(13)]);
var inst_27768 = cljs.core.seq.call(null,inst_27761);
var inst_27769 = inst_27768;
var inst_27770 = null;
var inst_27771 = (0);
var inst_27772 = (0);
var state_27908__$1 = (function (){var statearr_27962 = state_27908;
(statearr_27962[(7)] = inst_27770);

(statearr_27962[(8)] = inst_27771);

(statearr_27962[(9)] = inst_27769);

(statearr_27962[(10)] = inst_27772);

return statearr_27962;
})();
var statearr_27963_28036 = state_27908__$1;
(statearr_27963_28036[(2)] = null);

(statearr_27963_28036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (23))){
var inst_27826 = (state_27908[(23)]);
var inst_27825 = (state_27908[(24)]);
var inst_27830 = (state_27908[(25)]);
var inst_27828 = (state_27908[(26)]);
var inst_27822 = (state_27908[(19)]);
var inst_27833 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27835 = (function (){var all_files = inst_27822;
var res_SINGLEQUOTE_ = inst_27825;
var res = inst_27826;
var files_not_loaded = inst_27828;
var dependencies_that_loaded = inst_27830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27826,inst_27825,inst_27830,inst_27828,inst_27822,inst_27833,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27834){
var map__27964 = p__27834;
var map__27964__$1 = ((((!((map__27964 == null)))?((((map__27964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27964):map__27964);
var request_url = cljs.core.get.call(null,map__27964__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27826,inst_27825,inst_27830,inst_27828,inst_27822,inst_27833,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27836 = cljs.core.reverse.call(null,inst_27830);
var inst_27837 = cljs.core.map.call(null,inst_27835,inst_27836);
var inst_27838 = cljs.core.pr_str.call(null,inst_27837);
var inst_27839 = figwheel.client.utils.log.call(null,inst_27838);
var state_27908__$1 = (function (){var statearr_27966 = state_27908;
(statearr_27966[(31)] = inst_27833);

return statearr_27966;
})();
var statearr_27967_28037 = state_27908__$1;
(statearr_27967_28037[(2)] = inst_27839);

(statearr_27967_28037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (35))){
var state_27908__$1 = state_27908;
var statearr_27968_28038 = state_27908__$1;
(statearr_27968_28038[(2)] = true);

(statearr_27968_28038[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (19))){
var inst_27812 = (state_27908[(12)]);
var inst_27818 = figwheel.client.file_reloading.expand_files.call(null,inst_27812);
var state_27908__$1 = state_27908;
var statearr_27969_28039 = state_27908__$1;
(statearr_27969_28039[(2)] = inst_27818);

(statearr_27969_28039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (11))){
var state_27908__$1 = state_27908;
var statearr_27970_28040 = state_27908__$1;
(statearr_27970_28040[(2)] = null);

(statearr_27970_28040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (9))){
var inst_27801 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
var statearr_27971_28041 = state_27908__$1;
(statearr_27971_28041[(2)] = inst_27801);

(statearr_27971_28041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (5))){
var inst_27771 = (state_27908[(8)]);
var inst_27772 = (state_27908[(10)]);
var inst_27774 = (inst_27772 < inst_27771);
var inst_27775 = inst_27774;
var state_27908__$1 = state_27908;
if(cljs.core.truth_(inst_27775)){
var statearr_27972_28042 = state_27908__$1;
(statearr_27972_28042[(1)] = (7));

} else {
var statearr_27973_28043 = state_27908__$1;
(statearr_27973_28043[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (14))){
var inst_27782 = (state_27908[(22)]);
var inst_27791 = cljs.core.first.call(null,inst_27782);
var inst_27792 = figwheel.client.file_reloading.eval_body.call(null,inst_27791,opts);
var inst_27793 = cljs.core.next.call(null,inst_27782);
var inst_27769 = inst_27793;
var inst_27770 = null;
var inst_27771 = (0);
var inst_27772 = (0);
var state_27908__$1 = (function (){var statearr_27974 = state_27908;
(statearr_27974[(7)] = inst_27770);

(statearr_27974[(8)] = inst_27771);

(statearr_27974[(9)] = inst_27769);

(statearr_27974[(32)] = inst_27792);

(statearr_27974[(10)] = inst_27772);

return statearr_27974;
})();
var statearr_27975_28044 = state_27908__$1;
(statearr_27975_28044[(2)] = null);

(statearr_27975_28044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (45))){
var state_27908__$1 = state_27908;
var statearr_27976_28045 = state_27908__$1;
(statearr_27976_28045[(2)] = null);

(statearr_27976_28045[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (26))){
var inst_27826 = (state_27908[(23)]);
var inst_27825 = (state_27908[(24)]);
var inst_27830 = (state_27908[(25)]);
var inst_27828 = (state_27908[(26)]);
var inst_27822 = (state_27908[(19)]);
var inst_27845 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27847 = (function (){var all_files = inst_27822;
var res_SINGLEQUOTE_ = inst_27825;
var res = inst_27826;
var files_not_loaded = inst_27828;
var dependencies_that_loaded = inst_27830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27826,inst_27825,inst_27830,inst_27828,inst_27822,inst_27845,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27846){
var map__27977 = p__27846;
var map__27977__$1 = ((((!((map__27977 == null)))?((((map__27977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27977):map__27977);
var namespace = cljs.core.get.call(null,map__27977__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27977__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27826,inst_27825,inst_27830,inst_27828,inst_27822,inst_27845,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27848 = cljs.core.map.call(null,inst_27847,inst_27826);
var inst_27849 = cljs.core.pr_str.call(null,inst_27848);
var inst_27850 = figwheel.client.utils.log.call(null,inst_27849);
var inst_27851 = (function (){var all_files = inst_27822;
var res_SINGLEQUOTE_ = inst_27825;
var res = inst_27826;
var files_not_loaded = inst_27828;
var dependencies_that_loaded = inst_27830;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27826,inst_27825,inst_27830,inst_27828,inst_27822,inst_27845,inst_27847,inst_27848,inst_27849,inst_27850,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27826,inst_27825,inst_27830,inst_27828,inst_27822,inst_27845,inst_27847,inst_27848,inst_27849,inst_27850,state_val_27909,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27852 = setTimeout(inst_27851,(10));
var state_27908__$1 = (function (){var statearr_27979 = state_27908;
(statearr_27979[(33)] = inst_27850);

(statearr_27979[(34)] = inst_27845);

return statearr_27979;
})();
var statearr_27980_28046 = state_27908__$1;
(statearr_27980_28046[(2)] = inst_27852);

(statearr_27980_28046[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (16))){
var state_27908__$1 = state_27908;
var statearr_27981_28047 = state_27908__$1;
(statearr_27981_28047[(2)] = reload_dependents);

(statearr_27981_28047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (38))){
var inst_27862 = (state_27908[(16)]);
var inst_27879 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27862);
var state_27908__$1 = state_27908;
var statearr_27982_28048 = state_27908__$1;
(statearr_27982_28048[(2)] = inst_27879);

(statearr_27982_28048[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (30))){
var state_27908__$1 = state_27908;
var statearr_27983_28049 = state_27908__$1;
(statearr_27983_28049[(2)] = null);

(statearr_27983_28049[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (10))){
var inst_27782 = (state_27908[(22)]);
var inst_27784 = cljs.core.chunked_seq_QMARK_.call(null,inst_27782);
var state_27908__$1 = state_27908;
if(inst_27784){
var statearr_27984_28050 = state_27908__$1;
(statearr_27984_28050[(1)] = (13));

} else {
var statearr_27985_28051 = state_27908__$1;
(statearr_27985_28051[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (18))){
var inst_27816 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
if(cljs.core.truth_(inst_27816)){
var statearr_27986_28052 = state_27908__$1;
(statearr_27986_28052[(1)] = (19));

} else {
var statearr_27987_28053 = state_27908__$1;
(statearr_27987_28053[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (42))){
var state_27908__$1 = state_27908;
var statearr_27988_28054 = state_27908__$1;
(statearr_27988_28054[(2)] = null);

(statearr_27988_28054[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (37))){
var inst_27874 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
var statearr_27989_28055 = state_27908__$1;
(statearr_27989_28055[(2)] = inst_27874);

(statearr_27989_28055[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (8))){
var inst_27769 = (state_27908[(9)]);
var inst_27782 = (state_27908[(22)]);
var inst_27782__$1 = cljs.core.seq.call(null,inst_27769);
var state_27908__$1 = (function (){var statearr_27990 = state_27908;
(statearr_27990[(22)] = inst_27782__$1);

return statearr_27990;
})();
if(inst_27782__$1){
var statearr_27991_28056 = state_27908__$1;
(statearr_27991_28056[(1)] = (10));

} else {
var statearr_27992_28057 = state_27908__$1;
(statearr_27992_28057[(1)] = (11));

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
});})(c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24169__auto__,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto____0 = (function (){
var statearr_27996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27996[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto__);

(statearr_27996[(1)] = (1));

return statearr_27996;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto____1 = (function (state_27908){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_27908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e27997){if((e27997 instanceof Object)){
var ex__24173__auto__ = e27997;
var statearr_27998_28058 = state_27908;
(statearr_27998_28058[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28059 = state_27908;
state_27908 = G__28059;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto__ = function(state_27908){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto____1.call(this,state_27908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24283__auto__ = (function (){var statearr_27999 = f__24282__auto__.call(null);
(statearr_27999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto__);

return statearr_27999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto__,map__27754,map__27754__$1,opts,before_jsload,on_jsload,reload_dependents,map__27755,map__27755__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24281__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28062,link){
var map__28065 = p__28062;
var map__28065__$1 = ((((!((map__28065 == null)))?((((map__28065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28065):map__28065);
var file = cljs.core.get.call(null,map__28065__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28065,map__28065__$1,file){
return (function (p1__28060_SHARP_,p2__28061_SHARP_){
if(cljs.core._EQ_.call(null,p1__28060_SHARP_,p2__28061_SHARP_)){
return p1__28060_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28065,map__28065__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28071){
var map__28072 = p__28071;
var map__28072__$1 = ((((!((map__28072 == null)))?((((map__28072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28072):map__28072);
var match_length = cljs.core.get.call(null,map__28072__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28072__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28067_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28067_SHARP_);
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
var args28074 = [];
var len__17809__auto___28077 = arguments.length;
var i__17810__auto___28078 = (0);
while(true){
if((i__17810__auto___28078 < len__17809__auto___28077)){
args28074.push((arguments[i__17810__auto___28078]));

var G__28079 = (i__17810__auto___28078 + (1));
i__17810__auto___28078 = G__28079;
continue;
} else {
}
break;
}

var G__28076 = args28074.length;
switch (G__28076) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28074.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28081_SHARP_,p2__28082_SHARP_){
return cljs.core.assoc.call(null,p1__28081_SHARP_,cljs.core.get.call(null,p2__28082_SHARP_,key),p2__28082_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28083){
var map__28086 = p__28083;
var map__28086__$1 = ((((!((map__28086 == null)))?((((map__28086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28086):map__28086);
var f_data = map__28086__$1;
var file = cljs.core.get.call(null,map__28086__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28088,files_msg){
var map__28095 = p__28088;
var map__28095__$1 = ((((!((map__28095 == null)))?((((map__28095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28095):map__28095);
var opts = map__28095__$1;
var on_cssload = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28097_28101 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28098_28102 = null;
var count__28099_28103 = (0);
var i__28100_28104 = (0);
while(true){
if((i__28100_28104 < count__28099_28103)){
var f_28105 = cljs.core._nth.call(null,chunk__28098_28102,i__28100_28104);
figwheel.client.file_reloading.reload_css_file.call(null,f_28105);

var G__28106 = seq__28097_28101;
var G__28107 = chunk__28098_28102;
var G__28108 = count__28099_28103;
var G__28109 = (i__28100_28104 + (1));
seq__28097_28101 = G__28106;
chunk__28098_28102 = G__28107;
count__28099_28103 = G__28108;
i__28100_28104 = G__28109;
continue;
} else {
var temp__4425__auto___28110 = cljs.core.seq.call(null,seq__28097_28101);
if(temp__4425__auto___28110){
var seq__28097_28111__$1 = temp__4425__auto___28110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28097_28111__$1)){
var c__17554__auto___28112 = cljs.core.chunk_first.call(null,seq__28097_28111__$1);
var G__28113 = cljs.core.chunk_rest.call(null,seq__28097_28111__$1);
var G__28114 = c__17554__auto___28112;
var G__28115 = cljs.core.count.call(null,c__17554__auto___28112);
var G__28116 = (0);
seq__28097_28101 = G__28113;
chunk__28098_28102 = G__28114;
count__28099_28103 = G__28115;
i__28100_28104 = G__28116;
continue;
} else {
var f_28117 = cljs.core.first.call(null,seq__28097_28111__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28117);

var G__28118 = cljs.core.next.call(null,seq__28097_28111__$1);
var G__28119 = null;
var G__28120 = (0);
var G__28121 = (0);
seq__28097_28101 = G__28118;
chunk__28098_28102 = G__28119;
count__28099_28103 = G__28120;
i__28100_28104 = G__28121;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28095,map__28095__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28095,map__28095__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1448614621495