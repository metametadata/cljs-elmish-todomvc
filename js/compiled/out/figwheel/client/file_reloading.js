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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27106_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27106_SHARP_));
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
var seq__27111 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27112 = null;
var count__27113 = (0);
var i__27114 = (0);
while(true){
if((i__27114 < count__27113)){
var n = cljs.core._nth.call(null,chunk__27112,i__27114);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27115 = seq__27111;
var G__27116 = chunk__27112;
var G__27117 = count__27113;
var G__27118 = (i__27114 + (1));
seq__27111 = G__27115;
chunk__27112 = G__27116;
count__27113 = G__27117;
i__27114 = G__27118;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27111);
if(temp__4425__auto__){
var seq__27111__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27111__$1)){
var c__17555__auto__ = cljs.core.chunk_first.call(null,seq__27111__$1);
var G__27119 = cljs.core.chunk_rest.call(null,seq__27111__$1);
var G__27120 = c__17555__auto__;
var G__27121 = cljs.core.count.call(null,c__17555__auto__);
var G__27122 = (0);
seq__27111 = G__27119;
chunk__27112 = G__27120;
count__27113 = G__27121;
i__27114 = G__27122;
continue;
} else {
var n = cljs.core.first.call(null,seq__27111__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27123 = cljs.core.next.call(null,seq__27111__$1);
var G__27124 = null;
var G__27125 = (0);
var G__27126 = (0);
seq__27111 = G__27123;
chunk__27112 = G__27124;
count__27113 = G__27125;
i__27114 = G__27126;
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

var seq__27165_27172 = cljs.core.seq.call(null,deps);
var chunk__27166_27173 = null;
var count__27167_27174 = (0);
var i__27168_27175 = (0);
while(true){
if((i__27168_27175 < count__27167_27174)){
var dep_27176 = cljs.core._nth.call(null,chunk__27166_27173,i__27168_27175);
topo_sort_helper_STAR_.call(null,dep_27176,(depth + (1)),state);

var G__27177 = seq__27165_27172;
var G__27178 = chunk__27166_27173;
var G__27179 = count__27167_27174;
var G__27180 = (i__27168_27175 + (1));
seq__27165_27172 = G__27177;
chunk__27166_27173 = G__27178;
count__27167_27174 = G__27179;
i__27168_27175 = G__27180;
continue;
} else {
var temp__4425__auto___27181 = cljs.core.seq.call(null,seq__27165_27172);
if(temp__4425__auto___27181){
var seq__27165_27182__$1 = temp__4425__auto___27181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27165_27182__$1)){
var c__17555__auto___27183 = cljs.core.chunk_first.call(null,seq__27165_27182__$1);
var G__27184 = cljs.core.chunk_rest.call(null,seq__27165_27182__$1);
var G__27185 = c__17555__auto___27183;
var G__27186 = cljs.core.count.call(null,c__17555__auto___27183);
var G__27187 = (0);
seq__27165_27172 = G__27184;
chunk__27166_27173 = G__27185;
count__27167_27174 = G__27186;
i__27168_27175 = G__27187;
continue;
} else {
var dep_27188 = cljs.core.first.call(null,seq__27165_27182__$1);
topo_sort_helper_STAR_.call(null,dep_27188,(depth + (1)),state);

var G__27189 = cljs.core.next.call(null,seq__27165_27182__$1);
var G__27190 = null;
var G__27191 = (0);
var G__27192 = (0);
seq__27165_27172 = G__27189;
chunk__27166_27173 = G__27190;
count__27167_27174 = G__27191;
i__27168_27175 = G__27192;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27169){
var vec__27171 = p__27169;
var x = cljs.core.nth.call(null,vec__27171,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27171,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27171,x,xs,get_deps__$1){
return (function (p1__27127_SHARP_){
return clojure.set.difference.call(null,p1__27127_SHARP_,x);
});})(vec__27171,x,xs,get_deps__$1))
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
var seq__27205 = cljs.core.seq.call(null,provides);
var chunk__27206 = null;
var count__27207 = (0);
var i__27208 = (0);
while(true){
if((i__27208 < count__27207)){
var prov = cljs.core._nth.call(null,chunk__27206,i__27208);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27209_27217 = cljs.core.seq.call(null,requires);
var chunk__27210_27218 = null;
var count__27211_27219 = (0);
var i__27212_27220 = (0);
while(true){
if((i__27212_27220 < count__27211_27219)){
var req_27221 = cljs.core._nth.call(null,chunk__27210_27218,i__27212_27220);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27221,prov);

var G__27222 = seq__27209_27217;
var G__27223 = chunk__27210_27218;
var G__27224 = count__27211_27219;
var G__27225 = (i__27212_27220 + (1));
seq__27209_27217 = G__27222;
chunk__27210_27218 = G__27223;
count__27211_27219 = G__27224;
i__27212_27220 = G__27225;
continue;
} else {
var temp__4425__auto___27226 = cljs.core.seq.call(null,seq__27209_27217);
if(temp__4425__auto___27226){
var seq__27209_27227__$1 = temp__4425__auto___27226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27209_27227__$1)){
var c__17555__auto___27228 = cljs.core.chunk_first.call(null,seq__27209_27227__$1);
var G__27229 = cljs.core.chunk_rest.call(null,seq__27209_27227__$1);
var G__27230 = c__17555__auto___27228;
var G__27231 = cljs.core.count.call(null,c__17555__auto___27228);
var G__27232 = (0);
seq__27209_27217 = G__27229;
chunk__27210_27218 = G__27230;
count__27211_27219 = G__27231;
i__27212_27220 = G__27232;
continue;
} else {
var req_27233 = cljs.core.first.call(null,seq__27209_27227__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27233,prov);

var G__27234 = cljs.core.next.call(null,seq__27209_27227__$1);
var G__27235 = null;
var G__27236 = (0);
var G__27237 = (0);
seq__27209_27217 = G__27234;
chunk__27210_27218 = G__27235;
count__27211_27219 = G__27236;
i__27212_27220 = G__27237;
continue;
}
} else {
}
}
break;
}

var G__27238 = seq__27205;
var G__27239 = chunk__27206;
var G__27240 = count__27207;
var G__27241 = (i__27208 + (1));
seq__27205 = G__27238;
chunk__27206 = G__27239;
count__27207 = G__27240;
i__27208 = G__27241;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27205);
if(temp__4425__auto__){
var seq__27205__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27205__$1)){
var c__17555__auto__ = cljs.core.chunk_first.call(null,seq__27205__$1);
var G__27242 = cljs.core.chunk_rest.call(null,seq__27205__$1);
var G__27243 = c__17555__auto__;
var G__27244 = cljs.core.count.call(null,c__17555__auto__);
var G__27245 = (0);
seq__27205 = G__27242;
chunk__27206 = G__27243;
count__27207 = G__27244;
i__27208 = G__27245;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27205__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27213_27246 = cljs.core.seq.call(null,requires);
var chunk__27214_27247 = null;
var count__27215_27248 = (0);
var i__27216_27249 = (0);
while(true){
if((i__27216_27249 < count__27215_27248)){
var req_27250 = cljs.core._nth.call(null,chunk__27214_27247,i__27216_27249);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27250,prov);

var G__27251 = seq__27213_27246;
var G__27252 = chunk__27214_27247;
var G__27253 = count__27215_27248;
var G__27254 = (i__27216_27249 + (1));
seq__27213_27246 = G__27251;
chunk__27214_27247 = G__27252;
count__27215_27248 = G__27253;
i__27216_27249 = G__27254;
continue;
} else {
var temp__4425__auto___27255__$1 = cljs.core.seq.call(null,seq__27213_27246);
if(temp__4425__auto___27255__$1){
var seq__27213_27256__$1 = temp__4425__auto___27255__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27213_27256__$1)){
var c__17555__auto___27257 = cljs.core.chunk_first.call(null,seq__27213_27256__$1);
var G__27258 = cljs.core.chunk_rest.call(null,seq__27213_27256__$1);
var G__27259 = c__17555__auto___27257;
var G__27260 = cljs.core.count.call(null,c__17555__auto___27257);
var G__27261 = (0);
seq__27213_27246 = G__27258;
chunk__27214_27247 = G__27259;
count__27215_27248 = G__27260;
i__27216_27249 = G__27261;
continue;
} else {
var req_27262 = cljs.core.first.call(null,seq__27213_27256__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27262,prov);

var G__27263 = cljs.core.next.call(null,seq__27213_27256__$1);
var G__27264 = null;
var G__27265 = (0);
var G__27266 = (0);
seq__27213_27246 = G__27263;
chunk__27214_27247 = G__27264;
count__27215_27248 = G__27265;
i__27216_27249 = G__27266;
continue;
}
} else {
}
}
break;
}

var G__27267 = cljs.core.next.call(null,seq__27205__$1);
var G__27268 = null;
var G__27269 = (0);
var G__27270 = (0);
seq__27205 = G__27267;
chunk__27206 = G__27268;
count__27207 = G__27269;
i__27208 = G__27270;
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
var seq__27275_27279 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27276_27280 = null;
var count__27277_27281 = (0);
var i__27278_27282 = (0);
while(true){
if((i__27278_27282 < count__27277_27281)){
var ns_27283 = cljs.core._nth.call(null,chunk__27276_27280,i__27278_27282);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27283);

var G__27284 = seq__27275_27279;
var G__27285 = chunk__27276_27280;
var G__27286 = count__27277_27281;
var G__27287 = (i__27278_27282 + (1));
seq__27275_27279 = G__27284;
chunk__27276_27280 = G__27285;
count__27277_27281 = G__27286;
i__27278_27282 = G__27287;
continue;
} else {
var temp__4425__auto___27288 = cljs.core.seq.call(null,seq__27275_27279);
if(temp__4425__auto___27288){
var seq__27275_27289__$1 = temp__4425__auto___27288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27275_27289__$1)){
var c__17555__auto___27290 = cljs.core.chunk_first.call(null,seq__27275_27289__$1);
var G__27291 = cljs.core.chunk_rest.call(null,seq__27275_27289__$1);
var G__27292 = c__17555__auto___27290;
var G__27293 = cljs.core.count.call(null,c__17555__auto___27290);
var G__27294 = (0);
seq__27275_27279 = G__27291;
chunk__27276_27280 = G__27292;
count__27277_27281 = G__27293;
i__27278_27282 = G__27294;
continue;
} else {
var ns_27295 = cljs.core.first.call(null,seq__27275_27289__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27295);

var G__27296 = cljs.core.next.call(null,seq__27275_27289__$1);
var G__27297 = null;
var G__27298 = (0);
var G__27299 = (0);
seq__27275_27279 = G__27296;
chunk__27276_27280 = G__27297;
count__27277_27281 = G__27298;
i__27278_27282 = G__27299;
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
var G__27300__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27301__i = 0, G__27301__a = new Array(arguments.length -  0);
while (G__27301__i < G__27301__a.length) {G__27301__a[G__27301__i] = arguments[G__27301__i + 0]; ++G__27301__i;}
  args = new cljs.core.IndexedSeq(G__27301__a,0);
} 
return G__27300__delegate.call(this,args);};
G__27300.cljs$lang$maxFixedArity = 0;
G__27300.cljs$lang$applyTo = (function (arglist__27302){
var args = cljs.core.seq(arglist__27302);
return G__27300__delegate(args);
});
G__27300.cljs$core$IFn$_invoke$arity$variadic = G__27300__delegate;
return G__27300;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27304 = cljs.core._EQ_;
var expr__27305 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27304.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27305))){
var path_parts = ((function (pred__27304,expr__27305){
return (function (p1__27303_SHARP_){
return clojure.string.split.call(null,p1__27303_SHARP_,/[\/\\]/);
});})(pred__27304,expr__27305))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27304,expr__27305){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27307){if((e27307 instanceof Error)){
var e = e27307;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27307;

}
}})());
});
;})(path_parts,sep,root,pred__27304,expr__27305))
} else {
if(cljs.core.truth_(pred__27304.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27305))){
return ((function (pred__27304,expr__27305){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27304,expr__27305){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27304,expr__27305))
);

return deferred.addErrback(((function (deferred,pred__27304,expr__27305){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27304,expr__27305))
);
});
;})(pred__27304,expr__27305))
} else {
return ((function (pred__27304,expr__27305){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27304,expr__27305))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27308,callback){
var map__27311 = p__27308;
var map__27311__$1 = ((((!((map__27311 == null)))?((((map__27311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27311):map__27311);
var file_msg = map__27311__$1;
var request_url = cljs.core.get.call(null,map__27311__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27311,map__27311__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27311,map__27311__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto__){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto__){
return (function (state_27335){
var state_val_27336 = (state_27335[(1)]);
if((state_val_27336 === (7))){
var inst_27331 = (state_27335[(2)]);
var state_27335__$1 = state_27335;
var statearr_27337_27357 = state_27335__$1;
(statearr_27337_27357[(2)] = inst_27331);

(statearr_27337_27357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27336 === (1))){
var state_27335__$1 = state_27335;
var statearr_27338_27358 = state_27335__$1;
(statearr_27338_27358[(2)] = null);

(statearr_27338_27358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27336 === (4))){
var inst_27315 = (state_27335[(7)]);
var inst_27315__$1 = (state_27335[(2)]);
var state_27335__$1 = (function (){var statearr_27339 = state_27335;
(statearr_27339[(7)] = inst_27315__$1);

return statearr_27339;
})();
if(cljs.core.truth_(inst_27315__$1)){
var statearr_27340_27359 = state_27335__$1;
(statearr_27340_27359[(1)] = (5));

} else {
var statearr_27341_27360 = state_27335__$1;
(statearr_27341_27360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27336 === (6))){
var state_27335__$1 = state_27335;
var statearr_27342_27361 = state_27335__$1;
(statearr_27342_27361[(2)] = null);

(statearr_27342_27361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27336 === (3))){
var inst_27333 = (state_27335[(2)]);
var state_27335__$1 = state_27335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27335__$1,inst_27333);
} else {
if((state_val_27336 === (2))){
var state_27335__$1 = state_27335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27335__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27336 === (11))){
var inst_27327 = (state_27335[(2)]);
var state_27335__$1 = (function (){var statearr_27343 = state_27335;
(statearr_27343[(8)] = inst_27327);

return statearr_27343;
})();
var statearr_27344_27362 = state_27335__$1;
(statearr_27344_27362[(2)] = null);

(statearr_27344_27362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27336 === (9))){
var inst_27319 = (state_27335[(9)]);
var inst_27321 = (state_27335[(10)]);
var inst_27323 = inst_27321.call(null,inst_27319);
var state_27335__$1 = state_27335;
var statearr_27345_27363 = state_27335__$1;
(statearr_27345_27363[(2)] = inst_27323);

(statearr_27345_27363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27336 === (5))){
var inst_27315 = (state_27335[(7)]);
var inst_27317 = figwheel.client.file_reloading.blocking_load.call(null,inst_27315);
var state_27335__$1 = state_27335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27335__$1,(8),inst_27317);
} else {
if((state_val_27336 === (10))){
var inst_27319 = (state_27335[(9)]);
var inst_27325 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27319);
var state_27335__$1 = state_27335;
var statearr_27346_27364 = state_27335__$1;
(statearr_27346_27364[(2)] = inst_27325);

(statearr_27346_27364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27336 === (8))){
var inst_27315 = (state_27335[(7)]);
var inst_27321 = (state_27335[(10)]);
var inst_27319 = (state_27335[(2)]);
var inst_27320 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27321__$1 = cljs.core.get.call(null,inst_27320,inst_27315);
var state_27335__$1 = (function (){var statearr_27347 = state_27335;
(statearr_27347[(9)] = inst_27319);

(statearr_27347[(10)] = inst_27321__$1);

return statearr_27347;
})();
if(cljs.core.truth_(inst_27321__$1)){
var statearr_27348_27365 = state_27335__$1;
(statearr_27348_27365[(1)] = (9));

} else {
var statearr_27349_27366 = state_27335__$1;
(statearr_27349_27366[(1)] = (10));

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
});})(c__24273__auto__))
;
return ((function (switch__24161__auto__,c__24273__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24162__auto__ = null;
var figwheel$client$file_reloading$state_machine__24162__auto____0 = (function (){
var statearr_27353 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27353[(0)] = figwheel$client$file_reloading$state_machine__24162__auto__);

(statearr_27353[(1)] = (1));

return statearr_27353;
});
var figwheel$client$file_reloading$state_machine__24162__auto____1 = (function (state_27335){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_27335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e27354){if((e27354 instanceof Object)){
var ex__24165__auto__ = e27354;
var statearr_27355_27367 = state_27335;
(statearr_27355_27367[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27368 = state_27335;
state_27335 = G__27368;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24162__auto__ = function(state_27335){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24162__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24162__auto____1.call(this,state_27335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24162__auto____0;
figwheel$client$file_reloading$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24162__auto____1;
return figwheel$client$file_reloading$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto__))
})();
var state__24275__auto__ = (function (){var statearr_27356 = f__24274__auto__.call(null);
(statearr_27356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto__);

return statearr_27356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto__))
);

return c__24273__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27369,callback){
var map__27372 = p__27369;
var map__27372__$1 = ((((!((map__27372 == null)))?((((map__27372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27372):map__27372);
var file_msg = map__27372__$1;
var namespace = cljs.core.get.call(null,map__27372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27372,map__27372__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27372,map__27372__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27374){
var map__27377 = p__27374;
var map__27377__$1 = ((((!((map__27377 == null)))?((((map__27377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27377):map__27377);
var file_msg = map__27377__$1;
var namespace = cljs.core.get.call(null,map__27377__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27379,callback){
var map__27382 = p__27379;
var map__27382__$1 = ((((!((map__27382 == null)))?((((map__27382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27382):map__27382);
var file_msg = map__27382__$1;
var request_url = cljs.core.get.call(null,map__27382__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27382__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24273__auto___27470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___27470,out){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___27470,out){
return (function (state_27452){
var state_val_27453 = (state_27452[(1)]);
if((state_val_27453 === (1))){
var inst_27430 = cljs.core.nth.call(null,files,(0),null);
var inst_27431 = cljs.core.nthnext.call(null,files,(1));
var inst_27432 = files;
var state_27452__$1 = (function (){var statearr_27454 = state_27452;
(statearr_27454[(7)] = inst_27430);

(statearr_27454[(8)] = inst_27432);

(statearr_27454[(9)] = inst_27431);

return statearr_27454;
})();
var statearr_27455_27471 = state_27452__$1;
(statearr_27455_27471[(2)] = null);

(statearr_27455_27471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (2))){
var inst_27432 = (state_27452[(8)]);
var inst_27435 = (state_27452[(10)]);
var inst_27435__$1 = cljs.core.nth.call(null,inst_27432,(0),null);
var inst_27436 = cljs.core.nthnext.call(null,inst_27432,(1));
var inst_27437 = (inst_27435__$1 == null);
var inst_27438 = cljs.core.not.call(null,inst_27437);
var state_27452__$1 = (function (){var statearr_27456 = state_27452;
(statearr_27456[(11)] = inst_27436);

(statearr_27456[(10)] = inst_27435__$1);

return statearr_27456;
})();
if(inst_27438){
var statearr_27457_27472 = state_27452__$1;
(statearr_27457_27472[(1)] = (4));

} else {
var statearr_27458_27473 = state_27452__$1;
(statearr_27458_27473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (3))){
var inst_27450 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27452__$1,inst_27450);
} else {
if((state_val_27453 === (4))){
var inst_27435 = (state_27452[(10)]);
var inst_27440 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27435);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27452__$1,(7),inst_27440);
} else {
if((state_val_27453 === (5))){
var inst_27446 = cljs.core.async.close_BANG_.call(null,out);
var state_27452__$1 = state_27452;
var statearr_27459_27474 = state_27452__$1;
(statearr_27459_27474[(2)] = inst_27446);

(statearr_27459_27474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (6))){
var inst_27448 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27460_27475 = state_27452__$1;
(statearr_27460_27475[(2)] = inst_27448);

(statearr_27460_27475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (7))){
var inst_27436 = (state_27452[(11)]);
var inst_27442 = (state_27452[(2)]);
var inst_27443 = cljs.core.async.put_BANG_.call(null,out,inst_27442);
var inst_27432 = inst_27436;
var state_27452__$1 = (function (){var statearr_27461 = state_27452;
(statearr_27461[(12)] = inst_27443);

(statearr_27461[(8)] = inst_27432);

return statearr_27461;
})();
var statearr_27462_27476 = state_27452__$1;
(statearr_27462_27476[(2)] = null);

(statearr_27462_27476[(1)] = (2));


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
});})(c__24273__auto___27470,out))
;
return ((function (switch__24161__auto__,c__24273__auto___27470,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto____0 = (function (){
var statearr_27466 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27466[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto__);

(statearr_27466[(1)] = (1));

return statearr_27466;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto____1 = (function (state_27452){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_27452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e27467){if((e27467 instanceof Object)){
var ex__24165__auto__ = e27467;
var statearr_27468_27477 = state_27452;
(statearr_27468_27477[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27478 = state_27452;
state_27452 = G__27478;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto__ = function(state_27452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto____1.call(this,state_27452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___27470,out))
})();
var state__24275__auto__ = (function (){var statearr_27469 = f__24274__auto__.call(null);
(statearr_27469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___27470);

return statearr_27469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___27470,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27479,opts){
var map__27483 = p__27479;
var map__27483__$1 = ((((!((map__27483 == null)))?((((map__27483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27483):map__27483);
var eval_body__$1 = cljs.core.get.call(null,map__27483__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27485){var e = e27485;
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
return (function (p1__27486_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27486_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27491){
var vec__27492 = p__27491;
var k = cljs.core.nth.call(null,vec__27492,(0),null);
var v = cljs.core.nth.call(null,vec__27492,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27493){
var vec__27494 = p__27493;
var k = cljs.core.nth.call(null,vec__27494,(0),null);
var v = cljs.core.nth.call(null,vec__27494,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27498,p__27499){
var map__27746 = p__27498;
var map__27746__$1 = ((((!((map__27746 == null)))?((((map__27746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27746):map__27746);
var opts = map__27746__$1;
var before_jsload = cljs.core.get.call(null,map__27746__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27746__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27746__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27747 = p__27499;
var map__27747__$1 = ((((!((map__27747 == null)))?((((map__27747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27747):map__27747);
var msg = map__27747__$1;
var files = cljs.core.get.call(null,map__27747__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27747__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27747__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27900){
var state_val_27901 = (state_27900[(1)]);
if((state_val_27901 === (7))){
var inst_27762 = (state_27900[(7)]);
var inst_27761 = (state_27900[(8)]);
var inst_27764 = (state_27900[(9)]);
var inst_27763 = (state_27900[(10)]);
var inst_27769 = cljs.core._nth.call(null,inst_27762,inst_27764);
var inst_27770 = figwheel.client.file_reloading.eval_body.call(null,inst_27769,opts);
var inst_27771 = (inst_27764 + (1));
var tmp27902 = inst_27762;
var tmp27903 = inst_27761;
var tmp27904 = inst_27763;
var inst_27761__$1 = tmp27903;
var inst_27762__$1 = tmp27902;
var inst_27763__$1 = tmp27904;
var inst_27764__$1 = inst_27771;
var state_27900__$1 = (function (){var statearr_27905 = state_27900;
(statearr_27905[(11)] = inst_27770);

(statearr_27905[(7)] = inst_27762__$1);

(statearr_27905[(8)] = inst_27761__$1);

(statearr_27905[(9)] = inst_27764__$1);

(statearr_27905[(10)] = inst_27763__$1);

return statearr_27905;
})();
var statearr_27906_27992 = state_27900__$1;
(statearr_27906_27992[(2)] = null);

(statearr_27906_27992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (20))){
var inst_27804 = (state_27900[(12)]);
var inst_27812 = figwheel.client.file_reloading.sort_files.call(null,inst_27804);
var state_27900__$1 = state_27900;
var statearr_27907_27993 = state_27900__$1;
(statearr_27907_27993[(2)] = inst_27812);

(statearr_27907_27993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (27))){
var state_27900__$1 = state_27900;
var statearr_27908_27994 = state_27900__$1;
(statearr_27908_27994[(2)] = null);

(statearr_27908_27994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (1))){
var inst_27753 = (state_27900[(13)]);
var inst_27750 = before_jsload.call(null,files);
var inst_27751 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27752 = (function (){return ((function (inst_27753,inst_27750,inst_27751,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27495_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27495_SHARP_);
});
;})(inst_27753,inst_27750,inst_27751,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27753__$1 = cljs.core.filter.call(null,inst_27752,files);
var inst_27754 = cljs.core.not_empty.call(null,inst_27753__$1);
var state_27900__$1 = (function (){var statearr_27909 = state_27900;
(statearr_27909[(13)] = inst_27753__$1);

(statearr_27909[(14)] = inst_27750);

(statearr_27909[(15)] = inst_27751);

return statearr_27909;
})();
if(cljs.core.truth_(inst_27754)){
var statearr_27910_27995 = state_27900__$1;
(statearr_27910_27995[(1)] = (2));

} else {
var statearr_27911_27996 = state_27900__$1;
(statearr_27911_27996[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (24))){
var state_27900__$1 = state_27900;
var statearr_27912_27997 = state_27900__$1;
(statearr_27912_27997[(2)] = null);

(statearr_27912_27997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (39))){
var inst_27854 = (state_27900[(16)]);
var state_27900__$1 = state_27900;
var statearr_27913_27998 = state_27900__$1;
(statearr_27913_27998[(2)] = inst_27854);

(statearr_27913_27998[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (46))){
var inst_27895 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27914_27999 = state_27900__$1;
(statearr_27914_27999[(2)] = inst_27895);

(statearr_27914_27999[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (4))){
var inst_27798 = (state_27900[(2)]);
var inst_27799 = cljs.core.List.EMPTY;
var inst_27800 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27799);
var inst_27801 = (function (){return ((function (inst_27798,inst_27799,inst_27800,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27496_SHARP_){
var and__16739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27496_SHARP_);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27496_SHARP_));
} else {
return and__16739__auto__;
}
});
;})(inst_27798,inst_27799,inst_27800,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27802 = cljs.core.filter.call(null,inst_27801,files);
var inst_27803 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27804 = cljs.core.concat.call(null,inst_27802,inst_27803);
var state_27900__$1 = (function (){var statearr_27915 = state_27900;
(statearr_27915[(12)] = inst_27804);

(statearr_27915[(17)] = inst_27800);

(statearr_27915[(18)] = inst_27798);

return statearr_27915;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27916_28000 = state_27900__$1;
(statearr_27916_28000[(1)] = (16));

} else {
var statearr_27917_28001 = state_27900__$1;
(statearr_27917_28001[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (15))){
var inst_27788 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27918_28002 = state_27900__$1;
(statearr_27918_28002[(2)] = inst_27788);

(statearr_27918_28002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (21))){
var inst_27814 = (state_27900[(19)]);
var inst_27814__$1 = (state_27900[(2)]);
var inst_27815 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27814__$1);
var state_27900__$1 = (function (){var statearr_27919 = state_27900;
(statearr_27919[(19)] = inst_27814__$1);

return statearr_27919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27900__$1,(22),inst_27815);
} else {
if((state_val_27901 === (31))){
var inst_27898 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27900__$1,inst_27898);
} else {
if((state_val_27901 === (32))){
var inst_27854 = (state_27900[(16)]);
var inst_27859 = inst_27854.cljs$lang$protocol_mask$partition0$;
var inst_27860 = (inst_27859 & (64));
var inst_27861 = inst_27854.cljs$core$ISeq$;
var inst_27862 = (inst_27860) || (inst_27861);
var state_27900__$1 = state_27900;
if(cljs.core.truth_(inst_27862)){
var statearr_27920_28003 = state_27900__$1;
(statearr_27920_28003[(1)] = (35));

} else {
var statearr_27921_28004 = state_27900__$1;
(statearr_27921_28004[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (40))){
var inst_27875 = (state_27900[(20)]);
var inst_27874 = (state_27900[(2)]);
var inst_27875__$1 = cljs.core.get.call(null,inst_27874,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27876 = cljs.core.get.call(null,inst_27874,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27877 = cljs.core.not_empty.call(null,inst_27875__$1);
var state_27900__$1 = (function (){var statearr_27922 = state_27900;
(statearr_27922[(20)] = inst_27875__$1);

(statearr_27922[(21)] = inst_27876);

return statearr_27922;
})();
if(cljs.core.truth_(inst_27877)){
var statearr_27923_28005 = state_27900__$1;
(statearr_27923_28005[(1)] = (41));

} else {
var statearr_27924_28006 = state_27900__$1;
(statearr_27924_28006[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (33))){
var state_27900__$1 = state_27900;
var statearr_27925_28007 = state_27900__$1;
(statearr_27925_28007[(2)] = false);

(statearr_27925_28007[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (13))){
var inst_27774 = (state_27900[(22)]);
var inst_27778 = cljs.core.chunk_first.call(null,inst_27774);
var inst_27779 = cljs.core.chunk_rest.call(null,inst_27774);
var inst_27780 = cljs.core.count.call(null,inst_27778);
var inst_27761 = inst_27779;
var inst_27762 = inst_27778;
var inst_27763 = inst_27780;
var inst_27764 = (0);
var state_27900__$1 = (function (){var statearr_27926 = state_27900;
(statearr_27926[(7)] = inst_27762);

(statearr_27926[(8)] = inst_27761);

(statearr_27926[(9)] = inst_27764);

(statearr_27926[(10)] = inst_27763);

return statearr_27926;
})();
var statearr_27927_28008 = state_27900__$1;
(statearr_27927_28008[(2)] = null);

(statearr_27927_28008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (22))){
var inst_27817 = (state_27900[(23)]);
var inst_27818 = (state_27900[(24)]);
var inst_27822 = (state_27900[(25)]);
var inst_27814 = (state_27900[(19)]);
var inst_27817__$1 = (state_27900[(2)]);
var inst_27818__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27817__$1);
var inst_27819 = (function (){var all_files = inst_27814;
var res_SINGLEQUOTE_ = inst_27817__$1;
var res = inst_27818__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27817,inst_27818,inst_27822,inst_27814,inst_27817__$1,inst_27818__$1,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27497_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27497_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27817,inst_27818,inst_27822,inst_27814,inst_27817__$1,inst_27818__$1,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27820 = cljs.core.filter.call(null,inst_27819,inst_27817__$1);
var inst_27821 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27822__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27821);
var inst_27823 = cljs.core.not_empty.call(null,inst_27822__$1);
var state_27900__$1 = (function (){var statearr_27928 = state_27900;
(statearr_27928[(26)] = inst_27820);

(statearr_27928[(23)] = inst_27817__$1);

(statearr_27928[(24)] = inst_27818__$1);

(statearr_27928[(25)] = inst_27822__$1);

return statearr_27928;
})();
if(cljs.core.truth_(inst_27823)){
var statearr_27929_28009 = state_27900__$1;
(statearr_27929_28009[(1)] = (23));

} else {
var statearr_27930_28010 = state_27900__$1;
(statearr_27930_28010[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (36))){
var state_27900__$1 = state_27900;
var statearr_27931_28011 = state_27900__$1;
(statearr_27931_28011[(2)] = false);

(statearr_27931_28011[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (41))){
var inst_27875 = (state_27900[(20)]);
var inst_27879 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27880 = cljs.core.map.call(null,inst_27879,inst_27875);
var inst_27881 = cljs.core.pr_str.call(null,inst_27880);
var inst_27882 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27881)].join('');
var inst_27883 = figwheel.client.utils.log.call(null,inst_27882);
var state_27900__$1 = state_27900;
var statearr_27932_28012 = state_27900__$1;
(statearr_27932_28012[(2)] = inst_27883);

(statearr_27932_28012[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (43))){
var inst_27876 = (state_27900[(21)]);
var inst_27886 = (state_27900[(2)]);
var inst_27887 = cljs.core.not_empty.call(null,inst_27876);
var state_27900__$1 = (function (){var statearr_27933 = state_27900;
(statearr_27933[(27)] = inst_27886);

return statearr_27933;
})();
if(cljs.core.truth_(inst_27887)){
var statearr_27934_28013 = state_27900__$1;
(statearr_27934_28013[(1)] = (44));

} else {
var statearr_27935_28014 = state_27900__$1;
(statearr_27935_28014[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (29))){
var inst_27820 = (state_27900[(26)]);
var inst_27817 = (state_27900[(23)]);
var inst_27818 = (state_27900[(24)]);
var inst_27822 = (state_27900[(25)]);
var inst_27854 = (state_27900[(16)]);
var inst_27814 = (state_27900[(19)]);
var inst_27850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27853 = (function (){var all_files = inst_27814;
var res_SINGLEQUOTE_ = inst_27817;
var res = inst_27818;
var files_not_loaded = inst_27820;
var dependencies_that_loaded = inst_27822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27817,inst_27818,inst_27822,inst_27854,inst_27814,inst_27850,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27852){
var map__27936 = p__27852;
var map__27936__$1 = ((((!((map__27936 == null)))?((((map__27936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27936):map__27936);
var namespace = cljs.core.get.call(null,map__27936__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27817,inst_27818,inst_27822,inst_27854,inst_27814,inst_27850,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27854__$1 = cljs.core.group_by.call(null,inst_27853,inst_27820);
var inst_27856 = (inst_27854__$1 == null);
var inst_27857 = cljs.core.not.call(null,inst_27856);
var state_27900__$1 = (function (){var statearr_27938 = state_27900;
(statearr_27938[(28)] = inst_27850);

(statearr_27938[(16)] = inst_27854__$1);

return statearr_27938;
})();
if(inst_27857){
var statearr_27939_28015 = state_27900__$1;
(statearr_27939_28015[(1)] = (32));

} else {
var statearr_27940_28016 = state_27900__$1;
(statearr_27940_28016[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (44))){
var inst_27876 = (state_27900[(21)]);
var inst_27889 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27876);
var inst_27890 = cljs.core.pr_str.call(null,inst_27889);
var inst_27891 = [cljs.core.str("not required: "),cljs.core.str(inst_27890)].join('');
var inst_27892 = figwheel.client.utils.log.call(null,inst_27891);
var state_27900__$1 = state_27900;
var statearr_27941_28017 = state_27900__$1;
(statearr_27941_28017[(2)] = inst_27892);

(statearr_27941_28017[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (6))){
var inst_27795 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27942_28018 = state_27900__$1;
(statearr_27942_28018[(2)] = inst_27795);

(statearr_27942_28018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (28))){
var inst_27820 = (state_27900[(26)]);
var inst_27847 = (state_27900[(2)]);
var inst_27848 = cljs.core.not_empty.call(null,inst_27820);
var state_27900__$1 = (function (){var statearr_27943 = state_27900;
(statearr_27943[(29)] = inst_27847);

return statearr_27943;
})();
if(cljs.core.truth_(inst_27848)){
var statearr_27944_28019 = state_27900__$1;
(statearr_27944_28019[(1)] = (29));

} else {
var statearr_27945_28020 = state_27900__$1;
(statearr_27945_28020[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (25))){
var inst_27818 = (state_27900[(24)]);
var inst_27834 = (state_27900[(2)]);
var inst_27835 = cljs.core.not_empty.call(null,inst_27818);
var state_27900__$1 = (function (){var statearr_27946 = state_27900;
(statearr_27946[(30)] = inst_27834);

return statearr_27946;
})();
if(cljs.core.truth_(inst_27835)){
var statearr_27947_28021 = state_27900__$1;
(statearr_27947_28021[(1)] = (26));

} else {
var statearr_27948_28022 = state_27900__$1;
(statearr_27948_28022[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (34))){
var inst_27869 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
if(cljs.core.truth_(inst_27869)){
var statearr_27949_28023 = state_27900__$1;
(statearr_27949_28023[(1)] = (38));

} else {
var statearr_27950_28024 = state_27900__$1;
(statearr_27950_28024[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (17))){
var state_27900__$1 = state_27900;
var statearr_27951_28025 = state_27900__$1;
(statearr_27951_28025[(2)] = recompile_dependents);

(statearr_27951_28025[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (3))){
var state_27900__$1 = state_27900;
var statearr_27952_28026 = state_27900__$1;
(statearr_27952_28026[(2)] = null);

(statearr_27952_28026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (12))){
var inst_27791 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27953_28027 = state_27900__$1;
(statearr_27953_28027[(2)] = inst_27791);

(statearr_27953_28027[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (2))){
var inst_27753 = (state_27900[(13)]);
var inst_27760 = cljs.core.seq.call(null,inst_27753);
var inst_27761 = inst_27760;
var inst_27762 = null;
var inst_27763 = (0);
var inst_27764 = (0);
var state_27900__$1 = (function (){var statearr_27954 = state_27900;
(statearr_27954[(7)] = inst_27762);

(statearr_27954[(8)] = inst_27761);

(statearr_27954[(9)] = inst_27764);

(statearr_27954[(10)] = inst_27763);

return statearr_27954;
})();
var statearr_27955_28028 = state_27900__$1;
(statearr_27955_28028[(2)] = null);

(statearr_27955_28028[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (23))){
var inst_27820 = (state_27900[(26)]);
var inst_27817 = (state_27900[(23)]);
var inst_27818 = (state_27900[(24)]);
var inst_27822 = (state_27900[(25)]);
var inst_27814 = (state_27900[(19)]);
var inst_27825 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27827 = (function (){var all_files = inst_27814;
var res_SINGLEQUOTE_ = inst_27817;
var res = inst_27818;
var files_not_loaded = inst_27820;
var dependencies_that_loaded = inst_27822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27817,inst_27818,inst_27822,inst_27814,inst_27825,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27826){
var map__27956 = p__27826;
var map__27956__$1 = ((((!((map__27956 == null)))?((((map__27956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27956):map__27956);
var request_url = cljs.core.get.call(null,map__27956__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27817,inst_27818,inst_27822,inst_27814,inst_27825,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27828 = cljs.core.reverse.call(null,inst_27822);
var inst_27829 = cljs.core.map.call(null,inst_27827,inst_27828);
var inst_27830 = cljs.core.pr_str.call(null,inst_27829);
var inst_27831 = figwheel.client.utils.log.call(null,inst_27830);
var state_27900__$1 = (function (){var statearr_27958 = state_27900;
(statearr_27958[(31)] = inst_27825);

return statearr_27958;
})();
var statearr_27959_28029 = state_27900__$1;
(statearr_27959_28029[(2)] = inst_27831);

(statearr_27959_28029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (35))){
var state_27900__$1 = state_27900;
var statearr_27960_28030 = state_27900__$1;
(statearr_27960_28030[(2)] = true);

(statearr_27960_28030[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (19))){
var inst_27804 = (state_27900[(12)]);
var inst_27810 = figwheel.client.file_reloading.expand_files.call(null,inst_27804);
var state_27900__$1 = state_27900;
var statearr_27961_28031 = state_27900__$1;
(statearr_27961_28031[(2)] = inst_27810);

(statearr_27961_28031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (11))){
var state_27900__$1 = state_27900;
var statearr_27962_28032 = state_27900__$1;
(statearr_27962_28032[(2)] = null);

(statearr_27962_28032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (9))){
var inst_27793 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27963_28033 = state_27900__$1;
(statearr_27963_28033[(2)] = inst_27793);

(statearr_27963_28033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (5))){
var inst_27764 = (state_27900[(9)]);
var inst_27763 = (state_27900[(10)]);
var inst_27766 = (inst_27764 < inst_27763);
var inst_27767 = inst_27766;
var state_27900__$1 = state_27900;
if(cljs.core.truth_(inst_27767)){
var statearr_27964_28034 = state_27900__$1;
(statearr_27964_28034[(1)] = (7));

} else {
var statearr_27965_28035 = state_27900__$1;
(statearr_27965_28035[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (14))){
var inst_27774 = (state_27900[(22)]);
var inst_27783 = cljs.core.first.call(null,inst_27774);
var inst_27784 = figwheel.client.file_reloading.eval_body.call(null,inst_27783,opts);
var inst_27785 = cljs.core.next.call(null,inst_27774);
var inst_27761 = inst_27785;
var inst_27762 = null;
var inst_27763 = (0);
var inst_27764 = (0);
var state_27900__$1 = (function (){var statearr_27966 = state_27900;
(statearr_27966[(7)] = inst_27762);

(statearr_27966[(8)] = inst_27761);

(statearr_27966[(32)] = inst_27784);

(statearr_27966[(9)] = inst_27764);

(statearr_27966[(10)] = inst_27763);

return statearr_27966;
})();
var statearr_27967_28036 = state_27900__$1;
(statearr_27967_28036[(2)] = null);

(statearr_27967_28036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (45))){
var state_27900__$1 = state_27900;
var statearr_27968_28037 = state_27900__$1;
(statearr_27968_28037[(2)] = null);

(statearr_27968_28037[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (26))){
var inst_27820 = (state_27900[(26)]);
var inst_27817 = (state_27900[(23)]);
var inst_27818 = (state_27900[(24)]);
var inst_27822 = (state_27900[(25)]);
var inst_27814 = (state_27900[(19)]);
var inst_27837 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27839 = (function (){var all_files = inst_27814;
var res_SINGLEQUOTE_ = inst_27817;
var res = inst_27818;
var files_not_loaded = inst_27820;
var dependencies_that_loaded = inst_27822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27817,inst_27818,inst_27822,inst_27814,inst_27837,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27838){
var map__27969 = p__27838;
var map__27969__$1 = ((((!((map__27969 == null)))?((((map__27969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27969):map__27969);
var namespace = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27817,inst_27818,inst_27822,inst_27814,inst_27837,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27840 = cljs.core.map.call(null,inst_27839,inst_27818);
var inst_27841 = cljs.core.pr_str.call(null,inst_27840);
var inst_27842 = figwheel.client.utils.log.call(null,inst_27841);
var inst_27843 = (function (){var all_files = inst_27814;
var res_SINGLEQUOTE_ = inst_27817;
var res = inst_27818;
var files_not_loaded = inst_27820;
var dependencies_that_loaded = inst_27822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27817,inst_27818,inst_27822,inst_27814,inst_27837,inst_27839,inst_27840,inst_27841,inst_27842,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27817,inst_27818,inst_27822,inst_27814,inst_27837,inst_27839,inst_27840,inst_27841,inst_27842,state_val_27901,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27844 = setTimeout(inst_27843,(10));
var state_27900__$1 = (function (){var statearr_27971 = state_27900;
(statearr_27971[(33)] = inst_27837);

(statearr_27971[(34)] = inst_27842);

return statearr_27971;
})();
var statearr_27972_28038 = state_27900__$1;
(statearr_27972_28038[(2)] = inst_27844);

(statearr_27972_28038[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (16))){
var state_27900__$1 = state_27900;
var statearr_27973_28039 = state_27900__$1;
(statearr_27973_28039[(2)] = reload_dependents);

(statearr_27973_28039[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (38))){
var inst_27854 = (state_27900[(16)]);
var inst_27871 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27854);
var state_27900__$1 = state_27900;
var statearr_27974_28040 = state_27900__$1;
(statearr_27974_28040[(2)] = inst_27871);

(statearr_27974_28040[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (30))){
var state_27900__$1 = state_27900;
var statearr_27975_28041 = state_27900__$1;
(statearr_27975_28041[(2)] = null);

(statearr_27975_28041[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (10))){
var inst_27774 = (state_27900[(22)]);
var inst_27776 = cljs.core.chunked_seq_QMARK_.call(null,inst_27774);
var state_27900__$1 = state_27900;
if(inst_27776){
var statearr_27976_28042 = state_27900__$1;
(statearr_27976_28042[(1)] = (13));

} else {
var statearr_27977_28043 = state_27900__$1;
(statearr_27977_28043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (18))){
var inst_27808 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
if(cljs.core.truth_(inst_27808)){
var statearr_27978_28044 = state_27900__$1;
(statearr_27978_28044[(1)] = (19));

} else {
var statearr_27979_28045 = state_27900__$1;
(statearr_27979_28045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (42))){
var state_27900__$1 = state_27900;
var statearr_27980_28046 = state_27900__$1;
(statearr_27980_28046[(2)] = null);

(statearr_27980_28046[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (37))){
var inst_27866 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27981_28047 = state_27900__$1;
(statearr_27981_28047[(2)] = inst_27866);

(statearr_27981_28047[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (8))){
var inst_27761 = (state_27900[(8)]);
var inst_27774 = (state_27900[(22)]);
var inst_27774__$1 = cljs.core.seq.call(null,inst_27761);
var state_27900__$1 = (function (){var statearr_27982 = state_27900;
(statearr_27982[(22)] = inst_27774__$1);

return statearr_27982;
})();
if(inst_27774__$1){
var statearr_27983_28048 = state_27900__$1;
(statearr_27983_28048[(1)] = (10));

} else {
var statearr_27984_28049 = state_27900__$1;
(statearr_27984_28049[(1)] = (11));

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
});})(c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24161__auto__,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto____0 = (function (){
var statearr_27988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27988[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto__);

(statearr_27988[(1)] = (1));

return statearr_27988;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto____1 = (function (state_27900){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_27900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e27989){if((e27989 instanceof Object)){
var ex__24165__auto__ = e27989;
var statearr_27990_28050 = state_27900;
(statearr_27990_28050[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28051 = state_27900;
state_27900 = G__28051;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto__ = function(state_27900){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto____1.call(this,state_27900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24275__auto__ = (function (){var statearr_27991 = f__24274__auto__.call(null);
(statearr_27991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto__);

return statearr_27991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto__,map__27746,map__27746__$1,opts,before_jsload,on_jsload,reload_dependents,map__27747,map__27747__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24273__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28054,link){
var map__28057 = p__28054;
var map__28057__$1 = ((((!((map__28057 == null)))?((((map__28057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28057):map__28057);
var file = cljs.core.get.call(null,map__28057__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28057,map__28057__$1,file){
return (function (p1__28052_SHARP_,p2__28053_SHARP_){
if(cljs.core._EQ_.call(null,p1__28052_SHARP_,p2__28053_SHARP_)){
return p1__28052_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28057,map__28057__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28063){
var map__28064 = p__28063;
var map__28064__$1 = ((((!((map__28064 == null)))?((((map__28064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28064):map__28064);
var match_length = cljs.core.get.call(null,map__28064__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28064__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28059_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28059_SHARP_);
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
var args28066 = [];
var len__17810__auto___28069 = arguments.length;
var i__17811__auto___28070 = (0);
while(true){
if((i__17811__auto___28070 < len__17810__auto___28069)){
args28066.push((arguments[i__17811__auto___28070]));

var G__28071 = (i__17811__auto___28070 + (1));
i__17811__auto___28070 = G__28071;
continue;
} else {
}
break;
}

var G__28068 = args28066.length;
switch (G__28068) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28066.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28073_SHARP_,p2__28074_SHARP_){
return cljs.core.assoc.call(null,p1__28073_SHARP_,cljs.core.get.call(null,p2__28074_SHARP_,key),p2__28074_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28075){
var map__28078 = p__28075;
var map__28078__$1 = ((((!((map__28078 == null)))?((((map__28078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28078):map__28078);
var f_data = map__28078__$1;
var file = cljs.core.get.call(null,map__28078__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28080,files_msg){
var map__28087 = p__28080;
var map__28087__$1 = ((((!((map__28087 == null)))?((((map__28087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28087):map__28087);
var opts = map__28087__$1;
var on_cssload = cljs.core.get.call(null,map__28087__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28089_28093 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28090_28094 = null;
var count__28091_28095 = (0);
var i__28092_28096 = (0);
while(true){
if((i__28092_28096 < count__28091_28095)){
var f_28097 = cljs.core._nth.call(null,chunk__28090_28094,i__28092_28096);
figwheel.client.file_reloading.reload_css_file.call(null,f_28097);

var G__28098 = seq__28089_28093;
var G__28099 = chunk__28090_28094;
var G__28100 = count__28091_28095;
var G__28101 = (i__28092_28096 + (1));
seq__28089_28093 = G__28098;
chunk__28090_28094 = G__28099;
count__28091_28095 = G__28100;
i__28092_28096 = G__28101;
continue;
} else {
var temp__4425__auto___28102 = cljs.core.seq.call(null,seq__28089_28093);
if(temp__4425__auto___28102){
var seq__28089_28103__$1 = temp__4425__auto___28102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28089_28103__$1)){
var c__17555__auto___28104 = cljs.core.chunk_first.call(null,seq__28089_28103__$1);
var G__28105 = cljs.core.chunk_rest.call(null,seq__28089_28103__$1);
var G__28106 = c__17555__auto___28104;
var G__28107 = cljs.core.count.call(null,c__17555__auto___28104);
var G__28108 = (0);
seq__28089_28093 = G__28105;
chunk__28090_28094 = G__28106;
count__28091_28095 = G__28107;
i__28092_28096 = G__28108;
continue;
} else {
var f_28109 = cljs.core.first.call(null,seq__28089_28103__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28109);

var G__28110 = cljs.core.next.call(null,seq__28089_28103__$1);
var G__28111 = null;
var G__28112 = (0);
var G__28113 = (0);
seq__28089_28093 = G__28110;
chunk__28090_28094 = G__28111;
count__28091_28095 = G__28112;
i__28092_28096 = G__28113;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28087,map__28087__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28087,map__28087__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1449079002313