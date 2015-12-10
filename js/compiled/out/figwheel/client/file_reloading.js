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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27109_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27109_SHARP_));
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
var seq__27114 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27115 = null;
var count__27116 = (0);
var i__27117 = (0);
while(true){
if((i__27117 < count__27116)){
var n = cljs.core._nth.call(null,chunk__27115,i__27117);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27118 = seq__27114;
var G__27119 = chunk__27115;
var G__27120 = count__27116;
var G__27121 = (i__27117 + (1));
seq__27114 = G__27118;
chunk__27115 = G__27119;
count__27116 = G__27120;
i__27117 = G__27121;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27114);
if(temp__4425__auto__){
var seq__27114__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27114__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27114__$1);
var G__27122 = cljs.core.chunk_rest.call(null,seq__27114__$1);
var G__27123 = c__17554__auto__;
var G__27124 = cljs.core.count.call(null,c__17554__auto__);
var G__27125 = (0);
seq__27114 = G__27122;
chunk__27115 = G__27123;
count__27116 = G__27124;
i__27117 = G__27125;
continue;
} else {
var n = cljs.core.first.call(null,seq__27114__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27126 = cljs.core.next.call(null,seq__27114__$1);
var G__27127 = null;
var G__27128 = (0);
var G__27129 = (0);
seq__27114 = G__27126;
chunk__27115 = G__27127;
count__27116 = G__27128;
i__27117 = G__27129;
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

var seq__27168_27175 = cljs.core.seq.call(null,deps);
var chunk__27169_27176 = null;
var count__27170_27177 = (0);
var i__27171_27178 = (0);
while(true){
if((i__27171_27178 < count__27170_27177)){
var dep_27179 = cljs.core._nth.call(null,chunk__27169_27176,i__27171_27178);
topo_sort_helper_STAR_.call(null,dep_27179,(depth + (1)),state);

var G__27180 = seq__27168_27175;
var G__27181 = chunk__27169_27176;
var G__27182 = count__27170_27177;
var G__27183 = (i__27171_27178 + (1));
seq__27168_27175 = G__27180;
chunk__27169_27176 = G__27181;
count__27170_27177 = G__27182;
i__27171_27178 = G__27183;
continue;
} else {
var temp__4425__auto___27184 = cljs.core.seq.call(null,seq__27168_27175);
if(temp__4425__auto___27184){
var seq__27168_27185__$1 = temp__4425__auto___27184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27168_27185__$1)){
var c__17554__auto___27186 = cljs.core.chunk_first.call(null,seq__27168_27185__$1);
var G__27187 = cljs.core.chunk_rest.call(null,seq__27168_27185__$1);
var G__27188 = c__17554__auto___27186;
var G__27189 = cljs.core.count.call(null,c__17554__auto___27186);
var G__27190 = (0);
seq__27168_27175 = G__27187;
chunk__27169_27176 = G__27188;
count__27170_27177 = G__27189;
i__27171_27178 = G__27190;
continue;
} else {
var dep_27191 = cljs.core.first.call(null,seq__27168_27185__$1);
topo_sort_helper_STAR_.call(null,dep_27191,(depth + (1)),state);

var G__27192 = cljs.core.next.call(null,seq__27168_27185__$1);
var G__27193 = null;
var G__27194 = (0);
var G__27195 = (0);
seq__27168_27175 = G__27192;
chunk__27169_27176 = G__27193;
count__27170_27177 = G__27194;
i__27171_27178 = G__27195;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27172){
var vec__27174 = p__27172;
var x = cljs.core.nth.call(null,vec__27174,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27174,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27174,x,xs,get_deps__$1){
return (function (p1__27130_SHARP_){
return clojure.set.difference.call(null,p1__27130_SHARP_,x);
});})(vec__27174,x,xs,get_deps__$1))
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
var seq__27208 = cljs.core.seq.call(null,provides);
var chunk__27209 = null;
var count__27210 = (0);
var i__27211 = (0);
while(true){
if((i__27211 < count__27210)){
var prov = cljs.core._nth.call(null,chunk__27209,i__27211);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27212_27220 = cljs.core.seq.call(null,requires);
var chunk__27213_27221 = null;
var count__27214_27222 = (0);
var i__27215_27223 = (0);
while(true){
if((i__27215_27223 < count__27214_27222)){
var req_27224 = cljs.core._nth.call(null,chunk__27213_27221,i__27215_27223);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27224,prov);

var G__27225 = seq__27212_27220;
var G__27226 = chunk__27213_27221;
var G__27227 = count__27214_27222;
var G__27228 = (i__27215_27223 + (1));
seq__27212_27220 = G__27225;
chunk__27213_27221 = G__27226;
count__27214_27222 = G__27227;
i__27215_27223 = G__27228;
continue;
} else {
var temp__4425__auto___27229 = cljs.core.seq.call(null,seq__27212_27220);
if(temp__4425__auto___27229){
var seq__27212_27230__$1 = temp__4425__auto___27229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27212_27230__$1)){
var c__17554__auto___27231 = cljs.core.chunk_first.call(null,seq__27212_27230__$1);
var G__27232 = cljs.core.chunk_rest.call(null,seq__27212_27230__$1);
var G__27233 = c__17554__auto___27231;
var G__27234 = cljs.core.count.call(null,c__17554__auto___27231);
var G__27235 = (0);
seq__27212_27220 = G__27232;
chunk__27213_27221 = G__27233;
count__27214_27222 = G__27234;
i__27215_27223 = G__27235;
continue;
} else {
var req_27236 = cljs.core.first.call(null,seq__27212_27230__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27236,prov);

var G__27237 = cljs.core.next.call(null,seq__27212_27230__$1);
var G__27238 = null;
var G__27239 = (0);
var G__27240 = (0);
seq__27212_27220 = G__27237;
chunk__27213_27221 = G__27238;
count__27214_27222 = G__27239;
i__27215_27223 = G__27240;
continue;
}
} else {
}
}
break;
}

var G__27241 = seq__27208;
var G__27242 = chunk__27209;
var G__27243 = count__27210;
var G__27244 = (i__27211 + (1));
seq__27208 = G__27241;
chunk__27209 = G__27242;
count__27210 = G__27243;
i__27211 = G__27244;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27208);
if(temp__4425__auto__){
var seq__27208__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27208__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27208__$1);
var G__27245 = cljs.core.chunk_rest.call(null,seq__27208__$1);
var G__27246 = c__17554__auto__;
var G__27247 = cljs.core.count.call(null,c__17554__auto__);
var G__27248 = (0);
seq__27208 = G__27245;
chunk__27209 = G__27246;
count__27210 = G__27247;
i__27211 = G__27248;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27208__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27216_27249 = cljs.core.seq.call(null,requires);
var chunk__27217_27250 = null;
var count__27218_27251 = (0);
var i__27219_27252 = (0);
while(true){
if((i__27219_27252 < count__27218_27251)){
var req_27253 = cljs.core._nth.call(null,chunk__27217_27250,i__27219_27252);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27253,prov);

var G__27254 = seq__27216_27249;
var G__27255 = chunk__27217_27250;
var G__27256 = count__27218_27251;
var G__27257 = (i__27219_27252 + (1));
seq__27216_27249 = G__27254;
chunk__27217_27250 = G__27255;
count__27218_27251 = G__27256;
i__27219_27252 = G__27257;
continue;
} else {
var temp__4425__auto___27258__$1 = cljs.core.seq.call(null,seq__27216_27249);
if(temp__4425__auto___27258__$1){
var seq__27216_27259__$1 = temp__4425__auto___27258__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27216_27259__$1)){
var c__17554__auto___27260 = cljs.core.chunk_first.call(null,seq__27216_27259__$1);
var G__27261 = cljs.core.chunk_rest.call(null,seq__27216_27259__$1);
var G__27262 = c__17554__auto___27260;
var G__27263 = cljs.core.count.call(null,c__17554__auto___27260);
var G__27264 = (0);
seq__27216_27249 = G__27261;
chunk__27217_27250 = G__27262;
count__27218_27251 = G__27263;
i__27219_27252 = G__27264;
continue;
} else {
var req_27265 = cljs.core.first.call(null,seq__27216_27259__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27265,prov);

var G__27266 = cljs.core.next.call(null,seq__27216_27259__$1);
var G__27267 = null;
var G__27268 = (0);
var G__27269 = (0);
seq__27216_27249 = G__27266;
chunk__27217_27250 = G__27267;
count__27218_27251 = G__27268;
i__27219_27252 = G__27269;
continue;
}
} else {
}
}
break;
}

var G__27270 = cljs.core.next.call(null,seq__27208__$1);
var G__27271 = null;
var G__27272 = (0);
var G__27273 = (0);
seq__27208 = G__27270;
chunk__27209 = G__27271;
count__27210 = G__27272;
i__27211 = G__27273;
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
var seq__27278_27282 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27279_27283 = null;
var count__27280_27284 = (0);
var i__27281_27285 = (0);
while(true){
if((i__27281_27285 < count__27280_27284)){
var ns_27286 = cljs.core._nth.call(null,chunk__27279_27283,i__27281_27285);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27286);

var G__27287 = seq__27278_27282;
var G__27288 = chunk__27279_27283;
var G__27289 = count__27280_27284;
var G__27290 = (i__27281_27285 + (1));
seq__27278_27282 = G__27287;
chunk__27279_27283 = G__27288;
count__27280_27284 = G__27289;
i__27281_27285 = G__27290;
continue;
} else {
var temp__4425__auto___27291 = cljs.core.seq.call(null,seq__27278_27282);
if(temp__4425__auto___27291){
var seq__27278_27292__$1 = temp__4425__auto___27291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27278_27292__$1)){
var c__17554__auto___27293 = cljs.core.chunk_first.call(null,seq__27278_27292__$1);
var G__27294 = cljs.core.chunk_rest.call(null,seq__27278_27292__$1);
var G__27295 = c__17554__auto___27293;
var G__27296 = cljs.core.count.call(null,c__17554__auto___27293);
var G__27297 = (0);
seq__27278_27282 = G__27294;
chunk__27279_27283 = G__27295;
count__27280_27284 = G__27296;
i__27281_27285 = G__27297;
continue;
} else {
var ns_27298 = cljs.core.first.call(null,seq__27278_27292__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27298);

var G__27299 = cljs.core.next.call(null,seq__27278_27292__$1);
var G__27300 = null;
var G__27301 = (0);
var G__27302 = (0);
seq__27278_27282 = G__27299;
chunk__27279_27283 = G__27300;
count__27280_27284 = G__27301;
i__27281_27285 = G__27302;
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
var G__27303__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27304__i = 0, G__27304__a = new Array(arguments.length -  0);
while (G__27304__i < G__27304__a.length) {G__27304__a[G__27304__i] = arguments[G__27304__i + 0]; ++G__27304__i;}
  args = new cljs.core.IndexedSeq(G__27304__a,0);
} 
return G__27303__delegate.call(this,args);};
G__27303.cljs$lang$maxFixedArity = 0;
G__27303.cljs$lang$applyTo = (function (arglist__27305){
var args = cljs.core.seq(arglist__27305);
return G__27303__delegate(args);
});
G__27303.cljs$core$IFn$_invoke$arity$variadic = G__27303__delegate;
return G__27303;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27307 = cljs.core._EQ_;
var expr__27308 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27307.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27308))){
var path_parts = ((function (pred__27307,expr__27308){
return (function (p1__27306_SHARP_){
return clojure.string.split.call(null,p1__27306_SHARP_,/[\/\\]/);
});})(pred__27307,expr__27308))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27307,expr__27308){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27310){if((e27310 instanceof Error)){
var e = e27310;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27310;

}
}})());
});
;})(path_parts,sep,root,pred__27307,expr__27308))
} else {
if(cljs.core.truth_(pred__27307.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27308))){
return ((function (pred__27307,expr__27308){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27307,expr__27308){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27307,expr__27308))
);

return deferred.addErrback(((function (deferred,pred__27307,expr__27308){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27307,expr__27308))
);
});
;})(pred__27307,expr__27308))
} else {
return ((function (pred__27307,expr__27308){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27307,expr__27308))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27311,callback){
var map__27314 = p__27311;
var map__27314__$1 = ((((!((map__27314 == null)))?((((map__27314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27314):map__27314);
var file_msg = map__27314__$1;
var request_url = cljs.core.get.call(null,map__27314__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27314,map__27314__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27314,map__27314__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto__){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto__){
return (function (state_27338){
var state_val_27339 = (state_27338[(1)]);
if((state_val_27339 === (7))){
var inst_27334 = (state_27338[(2)]);
var state_27338__$1 = state_27338;
var statearr_27340_27360 = state_27338__$1;
(statearr_27340_27360[(2)] = inst_27334);

(statearr_27340_27360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (1))){
var state_27338__$1 = state_27338;
var statearr_27341_27361 = state_27338__$1;
(statearr_27341_27361[(2)] = null);

(statearr_27341_27361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (4))){
var inst_27318 = (state_27338[(7)]);
var inst_27318__$1 = (state_27338[(2)]);
var state_27338__$1 = (function (){var statearr_27342 = state_27338;
(statearr_27342[(7)] = inst_27318__$1);

return statearr_27342;
})();
if(cljs.core.truth_(inst_27318__$1)){
var statearr_27343_27362 = state_27338__$1;
(statearr_27343_27362[(1)] = (5));

} else {
var statearr_27344_27363 = state_27338__$1;
(statearr_27344_27363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (6))){
var state_27338__$1 = state_27338;
var statearr_27345_27364 = state_27338__$1;
(statearr_27345_27364[(2)] = null);

(statearr_27345_27364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (3))){
var inst_27336 = (state_27338[(2)]);
var state_27338__$1 = state_27338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27338__$1,inst_27336);
} else {
if((state_val_27339 === (2))){
var state_27338__$1 = state_27338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27338__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27339 === (11))){
var inst_27330 = (state_27338[(2)]);
var state_27338__$1 = (function (){var statearr_27346 = state_27338;
(statearr_27346[(8)] = inst_27330);

return statearr_27346;
})();
var statearr_27347_27365 = state_27338__$1;
(statearr_27347_27365[(2)] = null);

(statearr_27347_27365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (9))){
var inst_27322 = (state_27338[(9)]);
var inst_27324 = (state_27338[(10)]);
var inst_27326 = inst_27324.call(null,inst_27322);
var state_27338__$1 = state_27338;
var statearr_27348_27366 = state_27338__$1;
(statearr_27348_27366[(2)] = inst_27326);

(statearr_27348_27366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (5))){
var inst_27318 = (state_27338[(7)]);
var inst_27320 = figwheel.client.file_reloading.blocking_load.call(null,inst_27318);
var state_27338__$1 = state_27338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27338__$1,(8),inst_27320);
} else {
if((state_val_27339 === (10))){
var inst_27322 = (state_27338[(9)]);
var inst_27328 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27322);
var state_27338__$1 = state_27338;
var statearr_27349_27367 = state_27338__$1;
(statearr_27349_27367[(2)] = inst_27328);

(statearr_27349_27367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (8))){
var inst_27324 = (state_27338[(10)]);
var inst_27318 = (state_27338[(7)]);
var inst_27322 = (state_27338[(2)]);
var inst_27323 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27324__$1 = cljs.core.get.call(null,inst_27323,inst_27318);
var state_27338__$1 = (function (){var statearr_27350 = state_27338;
(statearr_27350[(9)] = inst_27322);

(statearr_27350[(10)] = inst_27324__$1);

return statearr_27350;
})();
if(cljs.core.truth_(inst_27324__$1)){
var statearr_27351_27368 = state_27338__$1;
(statearr_27351_27368[(1)] = (9));

} else {
var statearr_27352_27369 = state_27338__$1;
(statearr_27352_27369[(1)] = (10));

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
});})(c__24276__auto__))
;
return ((function (switch__24164__auto__,c__24276__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24165__auto__ = null;
var figwheel$client$file_reloading$state_machine__24165__auto____0 = (function (){
var statearr_27356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27356[(0)] = figwheel$client$file_reloading$state_machine__24165__auto__);

(statearr_27356[(1)] = (1));

return statearr_27356;
});
var figwheel$client$file_reloading$state_machine__24165__auto____1 = (function (state_27338){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_27338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e27357){if((e27357 instanceof Object)){
var ex__24168__auto__ = e27357;
var statearr_27358_27370 = state_27338;
(statearr_27358_27370[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27371 = state_27338;
state_27338 = G__27371;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24165__auto__ = function(state_27338){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24165__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24165__auto____1.call(this,state_27338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24165__auto____0;
figwheel$client$file_reloading$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24165__auto____1;
return figwheel$client$file_reloading$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto__))
})();
var state__24278__auto__ = (function (){var statearr_27359 = f__24277__auto__.call(null);
(statearr_27359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto__);

return statearr_27359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto__))
);

return c__24276__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27372,callback){
var map__27375 = p__27372;
var map__27375__$1 = ((((!((map__27375 == null)))?((((map__27375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27375):map__27375);
var file_msg = map__27375__$1;
var namespace = cljs.core.get.call(null,map__27375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27375,map__27375__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27375,map__27375__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27377){
var map__27380 = p__27377;
var map__27380__$1 = ((((!((map__27380 == null)))?((((map__27380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27380):map__27380);
var file_msg = map__27380__$1;
var namespace = cljs.core.get.call(null,map__27380__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27382,callback){
var map__27385 = p__27382;
var map__27385__$1 = ((((!((map__27385 == null)))?((((map__27385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27385):map__27385);
var file_msg = map__27385__$1;
var request_url = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24276__auto___27473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___27473,out){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___27473,out){
return (function (state_27455){
var state_val_27456 = (state_27455[(1)]);
if((state_val_27456 === (1))){
var inst_27433 = cljs.core.nth.call(null,files,(0),null);
var inst_27434 = cljs.core.nthnext.call(null,files,(1));
var inst_27435 = files;
var state_27455__$1 = (function (){var statearr_27457 = state_27455;
(statearr_27457[(7)] = inst_27433);

(statearr_27457[(8)] = inst_27434);

(statearr_27457[(9)] = inst_27435);

return statearr_27457;
})();
var statearr_27458_27474 = state_27455__$1;
(statearr_27458_27474[(2)] = null);

(statearr_27458_27474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (2))){
var inst_27438 = (state_27455[(10)]);
var inst_27435 = (state_27455[(9)]);
var inst_27438__$1 = cljs.core.nth.call(null,inst_27435,(0),null);
var inst_27439 = cljs.core.nthnext.call(null,inst_27435,(1));
var inst_27440 = (inst_27438__$1 == null);
var inst_27441 = cljs.core.not.call(null,inst_27440);
var state_27455__$1 = (function (){var statearr_27459 = state_27455;
(statearr_27459[(10)] = inst_27438__$1);

(statearr_27459[(11)] = inst_27439);

return statearr_27459;
})();
if(inst_27441){
var statearr_27460_27475 = state_27455__$1;
(statearr_27460_27475[(1)] = (4));

} else {
var statearr_27461_27476 = state_27455__$1;
(statearr_27461_27476[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (3))){
var inst_27453 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27455__$1,inst_27453);
} else {
if((state_val_27456 === (4))){
var inst_27438 = (state_27455[(10)]);
var inst_27443 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27438);
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27455__$1,(7),inst_27443);
} else {
if((state_val_27456 === (5))){
var inst_27449 = cljs.core.async.close_BANG_.call(null,out);
var state_27455__$1 = state_27455;
var statearr_27462_27477 = state_27455__$1;
(statearr_27462_27477[(2)] = inst_27449);

(statearr_27462_27477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (6))){
var inst_27451 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27463_27478 = state_27455__$1;
(statearr_27463_27478[(2)] = inst_27451);

(statearr_27463_27478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (7))){
var inst_27439 = (state_27455[(11)]);
var inst_27445 = (state_27455[(2)]);
var inst_27446 = cljs.core.async.put_BANG_.call(null,out,inst_27445);
var inst_27435 = inst_27439;
var state_27455__$1 = (function (){var statearr_27464 = state_27455;
(statearr_27464[(12)] = inst_27446);

(statearr_27464[(9)] = inst_27435);

return statearr_27464;
})();
var statearr_27465_27479 = state_27455__$1;
(statearr_27465_27479[(2)] = null);

(statearr_27465_27479[(1)] = (2));


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
});})(c__24276__auto___27473,out))
;
return ((function (switch__24164__auto__,c__24276__auto___27473,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto____0 = (function (){
var statearr_27469 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27469[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto__);

(statearr_27469[(1)] = (1));

return statearr_27469;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto____1 = (function (state_27455){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_27455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e27470){if((e27470 instanceof Object)){
var ex__24168__auto__ = e27470;
var statearr_27471_27480 = state_27455;
(statearr_27471_27480[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27481 = state_27455;
state_27455 = G__27481;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto__ = function(state_27455){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto____1.call(this,state_27455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___27473,out))
})();
var state__24278__auto__ = (function (){var statearr_27472 = f__24277__auto__.call(null);
(statearr_27472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___27473);

return statearr_27472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___27473,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27482,opts){
var map__27486 = p__27482;
var map__27486__$1 = ((((!((map__27486 == null)))?((((map__27486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27486):map__27486);
var eval_body__$1 = cljs.core.get.call(null,map__27486__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27486__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27488){var e = e27488;
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
return (function (p1__27489_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27489_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27494){
var vec__27495 = p__27494;
var k = cljs.core.nth.call(null,vec__27495,(0),null);
var v = cljs.core.nth.call(null,vec__27495,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27496){
var vec__27497 = p__27496;
var k = cljs.core.nth.call(null,vec__27497,(0),null);
var v = cljs.core.nth.call(null,vec__27497,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27501,p__27502){
var map__27749 = p__27501;
var map__27749__$1 = ((((!((map__27749 == null)))?((((map__27749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27749):map__27749);
var opts = map__27749__$1;
var before_jsload = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27750 = p__27502;
var map__27750__$1 = ((((!((map__27750 == null)))?((((map__27750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27750):map__27750);
var msg = map__27750__$1;
var files = cljs.core.get.call(null,map__27750__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27750__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27750__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27903){
var state_val_27904 = (state_27903[(1)]);
if((state_val_27904 === (7))){
var inst_27764 = (state_27903[(7)]);
var inst_27767 = (state_27903[(8)]);
var inst_27765 = (state_27903[(9)]);
var inst_27766 = (state_27903[(10)]);
var inst_27772 = cljs.core._nth.call(null,inst_27765,inst_27767);
var inst_27773 = figwheel.client.file_reloading.eval_body.call(null,inst_27772,opts);
var inst_27774 = (inst_27767 + (1));
var tmp27905 = inst_27764;
var tmp27906 = inst_27765;
var tmp27907 = inst_27766;
var inst_27764__$1 = tmp27905;
var inst_27765__$1 = tmp27906;
var inst_27766__$1 = tmp27907;
var inst_27767__$1 = inst_27774;
var state_27903__$1 = (function (){var statearr_27908 = state_27903;
(statearr_27908[(7)] = inst_27764__$1);

(statearr_27908[(8)] = inst_27767__$1);

(statearr_27908[(11)] = inst_27773);

(statearr_27908[(9)] = inst_27765__$1);

(statearr_27908[(10)] = inst_27766__$1);

return statearr_27908;
})();
var statearr_27909_27995 = state_27903__$1;
(statearr_27909_27995[(2)] = null);

(statearr_27909_27995[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (20))){
var inst_27807 = (state_27903[(12)]);
var inst_27815 = figwheel.client.file_reloading.sort_files.call(null,inst_27807);
var state_27903__$1 = state_27903;
var statearr_27910_27996 = state_27903__$1;
(statearr_27910_27996[(2)] = inst_27815);

(statearr_27910_27996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (27))){
var state_27903__$1 = state_27903;
var statearr_27911_27997 = state_27903__$1;
(statearr_27911_27997[(2)] = null);

(statearr_27911_27997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (1))){
var inst_27756 = (state_27903[(13)]);
var inst_27753 = before_jsload.call(null,files);
var inst_27754 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27755 = (function (){return ((function (inst_27756,inst_27753,inst_27754,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27498_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27498_SHARP_);
});
;})(inst_27756,inst_27753,inst_27754,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27756__$1 = cljs.core.filter.call(null,inst_27755,files);
var inst_27757 = cljs.core.not_empty.call(null,inst_27756__$1);
var state_27903__$1 = (function (){var statearr_27912 = state_27903;
(statearr_27912[(14)] = inst_27753);

(statearr_27912[(13)] = inst_27756__$1);

(statearr_27912[(15)] = inst_27754);

return statearr_27912;
})();
if(cljs.core.truth_(inst_27757)){
var statearr_27913_27998 = state_27903__$1;
(statearr_27913_27998[(1)] = (2));

} else {
var statearr_27914_27999 = state_27903__$1;
(statearr_27914_27999[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (24))){
var state_27903__$1 = state_27903;
var statearr_27915_28000 = state_27903__$1;
(statearr_27915_28000[(2)] = null);

(statearr_27915_28000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (39))){
var inst_27857 = (state_27903[(16)]);
var state_27903__$1 = state_27903;
var statearr_27916_28001 = state_27903__$1;
(statearr_27916_28001[(2)] = inst_27857);

(statearr_27916_28001[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (46))){
var inst_27898 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27917_28002 = state_27903__$1;
(statearr_27917_28002[(2)] = inst_27898);

(statearr_27917_28002[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (4))){
var inst_27801 = (state_27903[(2)]);
var inst_27802 = cljs.core.List.EMPTY;
var inst_27803 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27802);
var inst_27804 = (function (){return ((function (inst_27801,inst_27802,inst_27803,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27499_SHARP_){
var and__16739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27499_SHARP_);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27499_SHARP_));
} else {
return and__16739__auto__;
}
});
;})(inst_27801,inst_27802,inst_27803,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27805 = cljs.core.filter.call(null,inst_27804,files);
var inst_27806 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27807 = cljs.core.concat.call(null,inst_27805,inst_27806);
var state_27903__$1 = (function (){var statearr_27918 = state_27903;
(statearr_27918[(17)] = inst_27803);

(statearr_27918[(12)] = inst_27807);

(statearr_27918[(18)] = inst_27801);

return statearr_27918;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27919_28003 = state_27903__$1;
(statearr_27919_28003[(1)] = (16));

} else {
var statearr_27920_28004 = state_27903__$1;
(statearr_27920_28004[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (15))){
var inst_27791 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27921_28005 = state_27903__$1;
(statearr_27921_28005[(2)] = inst_27791);

(statearr_27921_28005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (21))){
var inst_27817 = (state_27903[(19)]);
var inst_27817__$1 = (state_27903[(2)]);
var inst_27818 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27817__$1);
var state_27903__$1 = (function (){var statearr_27922 = state_27903;
(statearr_27922[(19)] = inst_27817__$1);

return statearr_27922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27903__$1,(22),inst_27818);
} else {
if((state_val_27904 === (31))){
var inst_27901 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27903__$1,inst_27901);
} else {
if((state_val_27904 === (32))){
var inst_27857 = (state_27903[(16)]);
var inst_27862 = inst_27857.cljs$lang$protocol_mask$partition0$;
var inst_27863 = (inst_27862 & (64));
var inst_27864 = inst_27857.cljs$core$ISeq$;
var inst_27865 = (inst_27863) || (inst_27864);
var state_27903__$1 = state_27903;
if(cljs.core.truth_(inst_27865)){
var statearr_27923_28006 = state_27903__$1;
(statearr_27923_28006[(1)] = (35));

} else {
var statearr_27924_28007 = state_27903__$1;
(statearr_27924_28007[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (40))){
var inst_27878 = (state_27903[(20)]);
var inst_27877 = (state_27903[(2)]);
var inst_27878__$1 = cljs.core.get.call(null,inst_27877,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27879 = cljs.core.get.call(null,inst_27877,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27880 = cljs.core.not_empty.call(null,inst_27878__$1);
var state_27903__$1 = (function (){var statearr_27925 = state_27903;
(statearr_27925[(21)] = inst_27879);

(statearr_27925[(20)] = inst_27878__$1);

return statearr_27925;
})();
if(cljs.core.truth_(inst_27880)){
var statearr_27926_28008 = state_27903__$1;
(statearr_27926_28008[(1)] = (41));

} else {
var statearr_27927_28009 = state_27903__$1;
(statearr_27927_28009[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (33))){
var state_27903__$1 = state_27903;
var statearr_27928_28010 = state_27903__$1;
(statearr_27928_28010[(2)] = false);

(statearr_27928_28010[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (13))){
var inst_27777 = (state_27903[(22)]);
var inst_27781 = cljs.core.chunk_first.call(null,inst_27777);
var inst_27782 = cljs.core.chunk_rest.call(null,inst_27777);
var inst_27783 = cljs.core.count.call(null,inst_27781);
var inst_27764 = inst_27782;
var inst_27765 = inst_27781;
var inst_27766 = inst_27783;
var inst_27767 = (0);
var state_27903__$1 = (function (){var statearr_27929 = state_27903;
(statearr_27929[(7)] = inst_27764);

(statearr_27929[(8)] = inst_27767);

(statearr_27929[(9)] = inst_27765);

(statearr_27929[(10)] = inst_27766);

return statearr_27929;
})();
var statearr_27930_28011 = state_27903__$1;
(statearr_27930_28011[(2)] = null);

(statearr_27930_28011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (22))){
var inst_27820 = (state_27903[(23)]);
var inst_27825 = (state_27903[(24)]);
var inst_27817 = (state_27903[(19)]);
var inst_27821 = (state_27903[(25)]);
var inst_27820__$1 = (state_27903[(2)]);
var inst_27821__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27820__$1);
var inst_27822 = (function (){var all_files = inst_27817;
var res_SINGLEQUOTE_ = inst_27820__$1;
var res = inst_27821__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27820,inst_27825,inst_27817,inst_27821,inst_27820__$1,inst_27821__$1,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27500_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27500_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27820,inst_27825,inst_27817,inst_27821,inst_27820__$1,inst_27821__$1,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27823 = cljs.core.filter.call(null,inst_27822,inst_27820__$1);
var inst_27824 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27825__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27824);
var inst_27826 = cljs.core.not_empty.call(null,inst_27825__$1);
var state_27903__$1 = (function (){var statearr_27931 = state_27903;
(statearr_27931[(23)] = inst_27820__$1);

(statearr_27931[(24)] = inst_27825__$1);

(statearr_27931[(26)] = inst_27823);

(statearr_27931[(25)] = inst_27821__$1);

return statearr_27931;
})();
if(cljs.core.truth_(inst_27826)){
var statearr_27932_28012 = state_27903__$1;
(statearr_27932_28012[(1)] = (23));

} else {
var statearr_27933_28013 = state_27903__$1;
(statearr_27933_28013[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (36))){
var state_27903__$1 = state_27903;
var statearr_27934_28014 = state_27903__$1;
(statearr_27934_28014[(2)] = false);

(statearr_27934_28014[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (41))){
var inst_27878 = (state_27903[(20)]);
var inst_27882 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27883 = cljs.core.map.call(null,inst_27882,inst_27878);
var inst_27884 = cljs.core.pr_str.call(null,inst_27883);
var inst_27885 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27884)].join('');
var inst_27886 = figwheel.client.utils.log.call(null,inst_27885);
var state_27903__$1 = state_27903;
var statearr_27935_28015 = state_27903__$1;
(statearr_27935_28015[(2)] = inst_27886);

(statearr_27935_28015[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (43))){
var inst_27879 = (state_27903[(21)]);
var inst_27889 = (state_27903[(2)]);
var inst_27890 = cljs.core.not_empty.call(null,inst_27879);
var state_27903__$1 = (function (){var statearr_27936 = state_27903;
(statearr_27936[(27)] = inst_27889);

return statearr_27936;
})();
if(cljs.core.truth_(inst_27890)){
var statearr_27937_28016 = state_27903__$1;
(statearr_27937_28016[(1)] = (44));

} else {
var statearr_27938_28017 = state_27903__$1;
(statearr_27938_28017[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (29))){
var inst_27820 = (state_27903[(23)]);
var inst_27825 = (state_27903[(24)]);
var inst_27817 = (state_27903[(19)]);
var inst_27857 = (state_27903[(16)]);
var inst_27823 = (state_27903[(26)]);
var inst_27821 = (state_27903[(25)]);
var inst_27853 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27856 = (function (){var all_files = inst_27817;
var res_SINGLEQUOTE_ = inst_27820;
var res = inst_27821;
var files_not_loaded = inst_27823;
var dependencies_that_loaded = inst_27825;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27825,inst_27817,inst_27857,inst_27823,inst_27821,inst_27853,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27855){
var map__27939 = p__27855;
var map__27939__$1 = ((((!((map__27939 == null)))?((((map__27939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27939):map__27939);
var namespace = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27825,inst_27817,inst_27857,inst_27823,inst_27821,inst_27853,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27857__$1 = cljs.core.group_by.call(null,inst_27856,inst_27823);
var inst_27859 = (inst_27857__$1 == null);
var inst_27860 = cljs.core.not.call(null,inst_27859);
var state_27903__$1 = (function (){var statearr_27941 = state_27903;
(statearr_27941[(16)] = inst_27857__$1);

(statearr_27941[(28)] = inst_27853);

return statearr_27941;
})();
if(inst_27860){
var statearr_27942_28018 = state_27903__$1;
(statearr_27942_28018[(1)] = (32));

} else {
var statearr_27943_28019 = state_27903__$1;
(statearr_27943_28019[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (44))){
var inst_27879 = (state_27903[(21)]);
var inst_27892 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27879);
var inst_27893 = cljs.core.pr_str.call(null,inst_27892);
var inst_27894 = [cljs.core.str("not required: "),cljs.core.str(inst_27893)].join('');
var inst_27895 = figwheel.client.utils.log.call(null,inst_27894);
var state_27903__$1 = state_27903;
var statearr_27944_28020 = state_27903__$1;
(statearr_27944_28020[(2)] = inst_27895);

(statearr_27944_28020[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (6))){
var inst_27798 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27945_28021 = state_27903__$1;
(statearr_27945_28021[(2)] = inst_27798);

(statearr_27945_28021[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (28))){
var inst_27823 = (state_27903[(26)]);
var inst_27850 = (state_27903[(2)]);
var inst_27851 = cljs.core.not_empty.call(null,inst_27823);
var state_27903__$1 = (function (){var statearr_27946 = state_27903;
(statearr_27946[(29)] = inst_27850);

return statearr_27946;
})();
if(cljs.core.truth_(inst_27851)){
var statearr_27947_28022 = state_27903__$1;
(statearr_27947_28022[(1)] = (29));

} else {
var statearr_27948_28023 = state_27903__$1;
(statearr_27948_28023[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (25))){
var inst_27821 = (state_27903[(25)]);
var inst_27837 = (state_27903[(2)]);
var inst_27838 = cljs.core.not_empty.call(null,inst_27821);
var state_27903__$1 = (function (){var statearr_27949 = state_27903;
(statearr_27949[(30)] = inst_27837);

return statearr_27949;
})();
if(cljs.core.truth_(inst_27838)){
var statearr_27950_28024 = state_27903__$1;
(statearr_27950_28024[(1)] = (26));

} else {
var statearr_27951_28025 = state_27903__$1;
(statearr_27951_28025[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (34))){
var inst_27872 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
if(cljs.core.truth_(inst_27872)){
var statearr_27952_28026 = state_27903__$1;
(statearr_27952_28026[(1)] = (38));

} else {
var statearr_27953_28027 = state_27903__$1;
(statearr_27953_28027[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (17))){
var state_27903__$1 = state_27903;
var statearr_27954_28028 = state_27903__$1;
(statearr_27954_28028[(2)] = recompile_dependents);

(statearr_27954_28028[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (3))){
var state_27903__$1 = state_27903;
var statearr_27955_28029 = state_27903__$1;
(statearr_27955_28029[(2)] = null);

(statearr_27955_28029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (12))){
var inst_27794 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27956_28030 = state_27903__$1;
(statearr_27956_28030[(2)] = inst_27794);

(statearr_27956_28030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (2))){
var inst_27756 = (state_27903[(13)]);
var inst_27763 = cljs.core.seq.call(null,inst_27756);
var inst_27764 = inst_27763;
var inst_27765 = null;
var inst_27766 = (0);
var inst_27767 = (0);
var state_27903__$1 = (function (){var statearr_27957 = state_27903;
(statearr_27957[(7)] = inst_27764);

(statearr_27957[(8)] = inst_27767);

(statearr_27957[(9)] = inst_27765);

(statearr_27957[(10)] = inst_27766);

return statearr_27957;
})();
var statearr_27958_28031 = state_27903__$1;
(statearr_27958_28031[(2)] = null);

(statearr_27958_28031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (23))){
var inst_27820 = (state_27903[(23)]);
var inst_27825 = (state_27903[(24)]);
var inst_27817 = (state_27903[(19)]);
var inst_27823 = (state_27903[(26)]);
var inst_27821 = (state_27903[(25)]);
var inst_27828 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27830 = (function (){var all_files = inst_27817;
var res_SINGLEQUOTE_ = inst_27820;
var res = inst_27821;
var files_not_loaded = inst_27823;
var dependencies_that_loaded = inst_27825;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27825,inst_27817,inst_27823,inst_27821,inst_27828,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27829){
var map__27959 = p__27829;
var map__27959__$1 = ((((!((map__27959 == null)))?((((map__27959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27959):map__27959);
var request_url = cljs.core.get.call(null,map__27959__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27825,inst_27817,inst_27823,inst_27821,inst_27828,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27831 = cljs.core.reverse.call(null,inst_27825);
var inst_27832 = cljs.core.map.call(null,inst_27830,inst_27831);
var inst_27833 = cljs.core.pr_str.call(null,inst_27832);
var inst_27834 = figwheel.client.utils.log.call(null,inst_27833);
var state_27903__$1 = (function (){var statearr_27961 = state_27903;
(statearr_27961[(31)] = inst_27828);

return statearr_27961;
})();
var statearr_27962_28032 = state_27903__$1;
(statearr_27962_28032[(2)] = inst_27834);

(statearr_27962_28032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (35))){
var state_27903__$1 = state_27903;
var statearr_27963_28033 = state_27903__$1;
(statearr_27963_28033[(2)] = true);

(statearr_27963_28033[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (19))){
var inst_27807 = (state_27903[(12)]);
var inst_27813 = figwheel.client.file_reloading.expand_files.call(null,inst_27807);
var state_27903__$1 = state_27903;
var statearr_27964_28034 = state_27903__$1;
(statearr_27964_28034[(2)] = inst_27813);

(statearr_27964_28034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (11))){
var state_27903__$1 = state_27903;
var statearr_27965_28035 = state_27903__$1;
(statearr_27965_28035[(2)] = null);

(statearr_27965_28035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (9))){
var inst_27796 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27966_28036 = state_27903__$1;
(statearr_27966_28036[(2)] = inst_27796);

(statearr_27966_28036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (5))){
var inst_27767 = (state_27903[(8)]);
var inst_27766 = (state_27903[(10)]);
var inst_27769 = (inst_27767 < inst_27766);
var inst_27770 = inst_27769;
var state_27903__$1 = state_27903;
if(cljs.core.truth_(inst_27770)){
var statearr_27967_28037 = state_27903__$1;
(statearr_27967_28037[(1)] = (7));

} else {
var statearr_27968_28038 = state_27903__$1;
(statearr_27968_28038[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (14))){
var inst_27777 = (state_27903[(22)]);
var inst_27786 = cljs.core.first.call(null,inst_27777);
var inst_27787 = figwheel.client.file_reloading.eval_body.call(null,inst_27786,opts);
var inst_27788 = cljs.core.next.call(null,inst_27777);
var inst_27764 = inst_27788;
var inst_27765 = null;
var inst_27766 = (0);
var inst_27767 = (0);
var state_27903__$1 = (function (){var statearr_27969 = state_27903;
(statearr_27969[(32)] = inst_27787);

(statearr_27969[(7)] = inst_27764);

(statearr_27969[(8)] = inst_27767);

(statearr_27969[(9)] = inst_27765);

(statearr_27969[(10)] = inst_27766);

return statearr_27969;
})();
var statearr_27970_28039 = state_27903__$1;
(statearr_27970_28039[(2)] = null);

(statearr_27970_28039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (45))){
var state_27903__$1 = state_27903;
var statearr_27971_28040 = state_27903__$1;
(statearr_27971_28040[(2)] = null);

(statearr_27971_28040[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (26))){
var inst_27820 = (state_27903[(23)]);
var inst_27825 = (state_27903[(24)]);
var inst_27817 = (state_27903[(19)]);
var inst_27823 = (state_27903[(26)]);
var inst_27821 = (state_27903[(25)]);
var inst_27840 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27842 = (function (){var all_files = inst_27817;
var res_SINGLEQUOTE_ = inst_27820;
var res = inst_27821;
var files_not_loaded = inst_27823;
var dependencies_that_loaded = inst_27825;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27825,inst_27817,inst_27823,inst_27821,inst_27840,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27841){
var map__27972 = p__27841;
var map__27972__$1 = ((((!((map__27972 == null)))?((((map__27972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27972):map__27972);
var namespace = cljs.core.get.call(null,map__27972__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27972__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27825,inst_27817,inst_27823,inst_27821,inst_27840,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27843 = cljs.core.map.call(null,inst_27842,inst_27821);
var inst_27844 = cljs.core.pr_str.call(null,inst_27843);
var inst_27845 = figwheel.client.utils.log.call(null,inst_27844);
var inst_27846 = (function (){var all_files = inst_27817;
var res_SINGLEQUOTE_ = inst_27820;
var res = inst_27821;
var files_not_loaded = inst_27823;
var dependencies_that_loaded = inst_27825;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27825,inst_27817,inst_27823,inst_27821,inst_27840,inst_27842,inst_27843,inst_27844,inst_27845,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27820,inst_27825,inst_27817,inst_27823,inst_27821,inst_27840,inst_27842,inst_27843,inst_27844,inst_27845,state_val_27904,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27847 = setTimeout(inst_27846,(10));
var state_27903__$1 = (function (){var statearr_27974 = state_27903;
(statearr_27974[(33)] = inst_27845);

(statearr_27974[(34)] = inst_27840);

return statearr_27974;
})();
var statearr_27975_28041 = state_27903__$1;
(statearr_27975_28041[(2)] = inst_27847);

(statearr_27975_28041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (16))){
var state_27903__$1 = state_27903;
var statearr_27976_28042 = state_27903__$1;
(statearr_27976_28042[(2)] = reload_dependents);

(statearr_27976_28042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (38))){
var inst_27857 = (state_27903[(16)]);
var inst_27874 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27857);
var state_27903__$1 = state_27903;
var statearr_27977_28043 = state_27903__$1;
(statearr_27977_28043[(2)] = inst_27874);

(statearr_27977_28043[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (30))){
var state_27903__$1 = state_27903;
var statearr_27978_28044 = state_27903__$1;
(statearr_27978_28044[(2)] = null);

(statearr_27978_28044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (10))){
var inst_27777 = (state_27903[(22)]);
var inst_27779 = cljs.core.chunked_seq_QMARK_.call(null,inst_27777);
var state_27903__$1 = state_27903;
if(inst_27779){
var statearr_27979_28045 = state_27903__$1;
(statearr_27979_28045[(1)] = (13));

} else {
var statearr_27980_28046 = state_27903__$1;
(statearr_27980_28046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (18))){
var inst_27811 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
if(cljs.core.truth_(inst_27811)){
var statearr_27981_28047 = state_27903__$1;
(statearr_27981_28047[(1)] = (19));

} else {
var statearr_27982_28048 = state_27903__$1;
(statearr_27982_28048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (42))){
var state_27903__$1 = state_27903;
var statearr_27983_28049 = state_27903__$1;
(statearr_27983_28049[(2)] = null);

(statearr_27983_28049[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (37))){
var inst_27869 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27984_28050 = state_27903__$1;
(statearr_27984_28050[(2)] = inst_27869);

(statearr_27984_28050[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (8))){
var inst_27764 = (state_27903[(7)]);
var inst_27777 = (state_27903[(22)]);
var inst_27777__$1 = cljs.core.seq.call(null,inst_27764);
var state_27903__$1 = (function (){var statearr_27985 = state_27903;
(statearr_27985[(22)] = inst_27777__$1);

return statearr_27985;
})();
if(inst_27777__$1){
var statearr_27986_28051 = state_27903__$1;
(statearr_27986_28051[(1)] = (10));

} else {
var statearr_27987_28052 = state_27903__$1;
(statearr_27987_28052[(1)] = (11));

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
});})(c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24164__auto__,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto____0 = (function (){
var statearr_27991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27991[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto__);

(statearr_27991[(1)] = (1));

return statearr_27991;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto____1 = (function (state_27903){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_27903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e27992){if((e27992 instanceof Object)){
var ex__24168__auto__ = e27992;
var statearr_27993_28053 = state_27903;
(statearr_27993_28053[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28054 = state_27903;
state_27903 = G__28054;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto__ = function(state_27903){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto____1.call(this,state_27903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24278__auto__ = (function (){var statearr_27994 = f__24277__auto__.call(null);
(statearr_27994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto__);

return statearr_27994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto__,map__27749,map__27749__$1,opts,before_jsload,on_jsload,reload_dependents,map__27750,map__27750__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24276__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28057,link){
var map__28060 = p__28057;
var map__28060__$1 = ((((!((map__28060 == null)))?((((map__28060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28060):map__28060);
var file = cljs.core.get.call(null,map__28060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28060,map__28060__$1,file){
return (function (p1__28055_SHARP_,p2__28056_SHARP_){
if(cljs.core._EQ_.call(null,p1__28055_SHARP_,p2__28056_SHARP_)){
return p1__28055_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28060,map__28060__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28066){
var map__28067 = p__28066;
var map__28067__$1 = ((((!((map__28067 == null)))?((((map__28067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28067):map__28067);
var match_length = cljs.core.get.call(null,map__28067__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28067__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28062_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28062_SHARP_);
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
var args28069 = [];
var len__17809__auto___28072 = arguments.length;
var i__17810__auto___28073 = (0);
while(true){
if((i__17810__auto___28073 < len__17809__auto___28072)){
args28069.push((arguments[i__17810__auto___28073]));

var G__28074 = (i__17810__auto___28073 + (1));
i__17810__auto___28073 = G__28074;
continue;
} else {
}
break;
}

var G__28071 = args28069.length;
switch (G__28071) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28069.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28076_SHARP_,p2__28077_SHARP_){
return cljs.core.assoc.call(null,p1__28076_SHARP_,cljs.core.get.call(null,p2__28077_SHARP_,key),p2__28077_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28078){
var map__28081 = p__28078;
var map__28081__$1 = ((((!((map__28081 == null)))?((((map__28081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28081):map__28081);
var f_data = map__28081__$1;
var file = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28083,files_msg){
var map__28090 = p__28083;
var map__28090__$1 = ((((!((map__28090 == null)))?((((map__28090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28090):map__28090);
var opts = map__28090__$1;
var on_cssload = cljs.core.get.call(null,map__28090__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28092_28096 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28093_28097 = null;
var count__28094_28098 = (0);
var i__28095_28099 = (0);
while(true){
if((i__28095_28099 < count__28094_28098)){
var f_28100 = cljs.core._nth.call(null,chunk__28093_28097,i__28095_28099);
figwheel.client.file_reloading.reload_css_file.call(null,f_28100);

var G__28101 = seq__28092_28096;
var G__28102 = chunk__28093_28097;
var G__28103 = count__28094_28098;
var G__28104 = (i__28095_28099 + (1));
seq__28092_28096 = G__28101;
chunk__28093_28097 = G__28102;
count__28094_28098 = G__28103;
i__28095_28099 = G__28104;
continue;
} else {
var temp__4425__auto___28105 = cljs.core.seq.call(null,seq__28092_28096);
if(temp__4425__auto___28105){
var seq__28092_28106__$1 = temp__4425__auto___28105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28092_28106__$1)){
var c__17554__auto___28107 = cljs.core.chunk_first.call(null,seq__28092_28106__$1);
var G__28108 = cljs.core.chunk_rest.call(null,seq__28092_28106__$1);
var G__28109 = c__17554__auto___28107;
var G__28110 = cljs.core.count.call(null,c__17554__auto___28107);
var G__28111 = (0);
seq__28092_28096 = G__28108;
chunk__28093_28097 = G__28109;
count__28094_28098 = G__28110;
i__28095_28099 = G__28111;
continue;
} else {
var f_28112 = cljs.core.first.call(null,seq__28092_28106__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28112);

var G__28113 = cljs.core.next.call(null,seq__28092_28106__$1);
var G__28114 = null;
var G__28115 = (0);
var G__28116 = (0);
seq__28092_28096 = G__28113;
chunk__28093_28097 = G__28114;
count__28094_28098 = G__28115;
i__28095_28099 = G__28116;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28090,map__28090__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28090,map__28090__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1449606076402