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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27090_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27090_SHARP_));
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
var seq__27095 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27096 = null;
var count__27097 = (0);
var i__27098 = (0);
while(true){
if((i__27098 < count__27097)){
var n = cljs.core._nth.call(null,chunk__27096,i__27098);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27099 = seq__27095;
var G__27100 = chunk__27096;
var G__27101 = count__27097;
var G__27102 = (i__27098 + (1));
seq__27095 = G__27099;
chunk__27096 = G__27100;
count__27097 = G__27101;
i__27098 = G__27102;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27095);
if(temp__4425__auto__){
var seq__27095__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27095__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27095__$1);
var G__27103 = cljs.core.chunk_rest.call(null,seq__27095__$1);
var G__27104 = c__17554__auto__;
var G__27105 = cljs.core.count.call(null,c__17554__auto__);
var G__27106 = (0);
seq__27095 = G__27103;
chunk__27096 = G__27104;
count__27097 = G__27105;
i__27098 = G__27106;
continue;
} else {
var n = cljs.core.first.call(null,seq__27095__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27107 = cljs.core.next.call(null,seq__27095__$1);
var G__27108 = null;
var G__27109 = (0);
var G__27110 = (0);
seq__27095 = G__27107;
chunk__27096 = G__27108;
count__27097 = G__27109;
i__27098 = G__27110;
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

var seq__27149_27156 = cljs.core.seq.call(null,deps);
var chunk__27150_27157 = null;
var count__27151_27158 = (0);
var i__27152_27159 = (0);
while(true){
if((i__27152_27159 < count__27151_27158)){
var dep_27160 = cljs.core._nth.call(null,chunk__27150_27157,i__27152_27159);
topo_sort_helper_STAR_.call(null,dep_27160,(depth + (1)),state);

var G__27161 = seq__27149_27156;
var G__27162 = chunk__27150_27157;
var G__27163 = count__27151_27158;
var G__27164 = (i__27152_27159 + (1));
seq__27149_27156 = G__27161;
chunk__27150_27157 = G__27162;
count__27151_27158 = G__27163;
i__27152_27159 = G__27164;
continue;
} else {
var temp__4425__auto___27165 = cljs.core.seq.call(null,seq__27149_27156);
if(temp__4425__auto___27165){
var seq__27149_27166__$1 = temp__4425__auto___27165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27149_27166__$1)){
var c__17554__auto___27167 = cljs.core.chunk_first.call(null,seq__27149_27166__$1);
var G__27168 = cljs.core.chunk_rest.call(null,seq__27149_27166__$1);
var G__27169 = c__17554__auto___27167;
var G__27170 = cljs.core.count.call(null,c__17554__auto___27167);
var G__27171 = (0);
seq__27149_27156 = G__27168;
chunk__27150_27157 = G__27169;
count__27151_27158 = G__27170;
i__27152_27159 = G__27171;
continue;
} else {
var dep_27172 = cljs.core.first.call(null,seq__27149_27166__$1);
topo_sort_helper_STAR_.call(null,dep_27172,(depth + (1)),state);

var G__27173 = cljs.core.next.call(null,seq__27149_27166__$1);
var G__27174 = null;
var G__27175 = (0);
var G__27176 = (0);
seq__27149_27156 = G__27173;
chunk__27150_27157 = G__27174;
count__27151_27158 = G__27175;
i__27152_27159 = G__27176;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27153){
var vec__27155 = p__27153;
var x = cljs.core.nth.call(null,vec__27155,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27155,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27155,x,xs,get_deps__$1){
return (function (p1__27111_SHARP_){
return clojure.set.difference.call(null,p1__27111_SHARP_,x);
});})(vec__27155,x,xs,get_deps__$1))
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
var seq__27189 = cljs.core.seq.call(null,provides);
var chunk__27190 = null;
var count__27191 = (0);
var i__27192 = (0);
while(true){
if((i__27192 < count__27191)){
var prov = cljs.core._nth.call(null,chunk__27190,i__27192);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27193_27201 = cljs.core.seq.call(null,requires);
var chunk__27194_27202 = null;
var count__27195_27203 = (0);
var i__27196_27204 = (0);
while(true){
if((i__27196_27204 < count__27195_27203)){
var req_27205 = cljs.core._nth.call(null,chunk__27194_27202,i__27196_27204);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27205,prov);

var G__27206 = seq__27193_27201;
var G__27207 = chunk__27194_27202;
var G__27208 = count__27195_27203;
var G__27209 = (i__27196_27204 + (1));
seq__27193_27201 = G__27206;
chunk__27194_27202 = G__27207;
count__27195_27203 = G__27208;
i__27196_27204 = G__27209;
continue;
} else {
var temp__4425__auto___27210 = cljs.core.seq.call(null,seq__27193_27201);
if(temp__4425__auto___27210){
var seq__27193_27211__$1 = temp__4425__auto___27210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27193_27211__$1)){
var c__17554__auto___27212 = cljs.core.chunk_first.call(null,seq__27193_27211__$1);
var G__27213 = cljs.core.chunk_rest.call(null,seq__27193_27211__$1);
var G__27214 = c__17554__auto___27212;
var G__27215 = cljs.core.count.call(null,c__17554__auto___27212);
var G__27216 = (0);
seq__27193_27201 = G__27213;
chunk__27194_27202 = G__27214;
count__27195_27203 = G__27215;
i__27196_27204 = G__27216;
continue;
} else {
var req_27217 = cljs.core.first.call(null,seq__27193_27211__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27217,prov);

var G__27218 = cljs.core.next.call(null,seq__27193_27211__$1);
var G__27219 = null;
var G__27220 = (0);
var G__27221 = (0);
seq__27193_27201 = G__27218;
chunk__27194_27202 = G__27219;
count__27195_27203 = G__27220;
i__27196_27204 = G__27221;
continue;
}
} else {
}
}
break;
}

var G__27222 = seq__27189;
var G__27223 = chunk__27190;
var G__27224 = count__27191;
var G__27225 = (i__27192 + (1));
seq__27189 = G__27222;
chunk__27190 = G__27223;
count__27191 = G__27224;
i__27192 = G__27225;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27189);
if(temp__4425__auto__){
var seq__27189__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27189__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27189__$1);
var G__27226 = cljs.core.chunk_rest.call(null,seq__27189__$1);
var G__27227 = c__17554__auto__;
var G__27228 = cljs.core.count.call(null,c__17554__auto__);
var G__27229 = (0);
seq__27189 = G__27226;
chunk__27190 = G__27227;
count__27191 = G__27228;
i__27192 = G__27229;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27189__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27197_27230 = cljs.core.seq.call(null,requires);
var chunk__27198_27231 = null;
var count__27199_27232 = (0);
var i__27200_27233 = (0);
while(true){
if((i__27200_27233 < count__27199_27232)){
var req_27234 = cljs.core._nth.call(null,chunk__27198_27231,i__27200_27233);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27234,prov);

var G__27235 = seq__27197_27230;
var G__27236 = chunk__27198_27231;
var G__27237 = count__27199_27232;
var G__27238 = (i__27200_27233 + (1));
seq__27197_27230 = G__27235;
chunk__27198_27231 = G__27236;
count__27199_27232 = G__27237;
i__27200_27233 = G__27238;
continue;
} else {
var temp__4425__auto___27239__$1 = cljs.core.seq.call(null,seq__27197_27230);
if(temp__4425__auto___27239__$1){
var seq__27197_27240__$1 = temp__4425__auto___27239__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27197_27240__$1)){
var c__17554__auto___27241 = cljs.core.chunk_first.call(null,seq__27197_27240__$1);
var G__27242 = cljs.core.chunk_rest.call(null,seq__27197_27240__$1);
var G__27243 = c__17554__auto___27241;
var G__27244 = cljs.core.count.call(null,c__17554__auto___27241);
var G__27245 = (0);
seq__27197_27230 = G__27242;
chunk__27198_27231 = G__27243;
count__27199_27232 = G__27244;
i__27200_27233 = G__27245;
continue;
} else {
var req_27246 = cljs.core.first.call(null,seq__27197_27240__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27246,prov);

var G__27247 = cljs.core.next.call(null,seq__27197_27240__$1);
var G__27248 = null;
var G__27249 = (0);
var G__27250 = (0);
seq__27197_27230 = G__27247;
chunk__27198_27231 = G__27248;
count__27199_27232 = G__27249;
i__27200_27233 = G__27250;
continue;
}
} else {
}
}
break;
}

var G__27251 = cljs.core.next.call(null,seq__27189__$1);
var G__27252 = null;
var G__27253 = (0);
var G__27254 = (0);
seq__27189 = G__27251;
chunk__27190 = G__27252;
count__27191 = G__27253;
i__27192 = G__27254;
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
var seq__27259_27263 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27260_27264 = null;
var count__27261_27265 = (0);
var i__27262_27266 = (0);
while(true){
if((i__27262_27266 < count__27261_27265)){
var ns_27267 = cljs.core._nth.call(null,chunk__27260_27264,i__27262_27266);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27267);

var G__27268 = seq__27259_27263;
var G__27269 = chunk__27260_27264;
var G__27270 = count__27261_27265;
var G__27271 = (i__27262_27266 + (1));
seq__27259_27263 = G__27268;
chunk__27260_27264 = G__27269;
count__27261_27265 = G__27270;
i__27262_27266 = G__27271;
continue;
} else {
var temp__4425__auto___27272 = cljs.core.seq.call(null,seq__27259_27263);
if(temp__4425__auto___27272){
var seq__27259_27273__$1 = temp__4425__auto___27272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27259_27273__$1)){
var c__17554__auto___27274 = cljs.core.chunk_first.call(null,seq__27259_27273__$1);
var G__27275 = cljs.core.chunk_rest.call(null,seq__27259_27273__$1);
var G__27276 = c__17554__auto___27274;
var G__27277 = cljs.core.count.call(null,c__17554__auto___27274);
var G__27278 = (0);
seq__27259_27263 = G__27275;
chunk__27260_27264 = G__27276;
count__27261_27265 = G__27277;
i__27262_27266 = G__27278;
continue;
} else {
var ns_27279 = cljs.core.first.call(null,seq__27259_27273__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27279);

var G__27280 = cljs.core.next.call(null,seq__27259_27273__$1);
var G__27281 = null;
var G__27282 = (0);
var G__27283 = (0);
seq__27259_27263 = G__27280;
chunk__27260_27264 = G__27281;
count__27261_27265 = G__27282;
i__27262_27266 = G__27283;
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
var G__27284__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27285__i = 0, G__27285__a = new Array(arguments.length -  0);
while (G__27285__i < G__27285__a.length) {G__27285__a[G__27285__i] = arguments[G__27285__i + 0]; ++G__27285__i;}
  args = new cljs.core.IndexedSeq(G__27285__a,0);
} 
return G__27284__delegate.call(this,args);};
G__27284.cljs$lang$maxFixedArity = 0;
G__27284.cljs$lang$applyTo = (function (arglist__27286){
var args = cljs.core.seq(arglist__27286);
return G__27284__delegate(args);
});
G__27284.cljs$core$IFn$_invoke$arity$variadic = G__27284__delegate;
return G__27284;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27288 = cljs.core._EQ_;
var expr__27289 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27288.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27289))){
var path_parts = ((function (pred__27288,expr__27289){
return (function (p1__27287_SHARP_){
return clojure.string.split.call(null,p1__27287_SHARP_,/[\/\\]/);
});})(pred__27288,expr__27289))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27288,expr__27289){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27291){if((e27291 instanceof Error)){
var e = e27291;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27291;

}
}})());
});
;})(path_parts,sep,root,pred__27288,expr__27289))
} else {
if(cljs.core.truth_(pred__27288.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27289))){
return ((function (pred__27288,expr__27289){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27288,expr__27289){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27288,expr__27289))
);

return deferred.addErrback(((function (deferred,pred__27288,expr__27289){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27288,expr__27289))
);
});
;})(pred__27288,expr__27289))
} else {
return ((function (pred__27288,expr__27289){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27288,expr__27289))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27292,callback){
var map__27295 = p__27292;
var map__27295__$1 = ((((!((map__27295 == null)))?((((map__27295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27295):map__27295);
var file_msg = map__27295__$1;
var request_url = cljs.core.get.call(null,map__27295__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27295,map__27295__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27295,map__27295__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto__){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto__){
return (function (state_27319){
var state_val_27320 = (state_27319[(1)]);
if((state_val_27320 === (7))){
var inst_27315 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
var statearr_27321_27341 = state_27319__$1;
(statearr_27321_27341[(2)] = inst_27315);

(statearr_27321_27341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (1))){
var state_27319__$1 = state_27319;
var statearr_27322_27342 = state_27319__$1;
(statearr_27322_27342[(2)] = null);

(statearr_27322_27342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (4))){
var inst_27299 = (state_27319[(7)]);
var inst_27299__$1 = (state_27319[(2)]);
var state_27319__$1 = (function (){var statearr_27323 = state_27319;
(statearr_27323[(7)] = inst_27299__$1);

return statearr_27323;
})();
if(cljs.core.truth_(inst_27299__$1)){
var statearr_27324_27343 = state_27319__$1;
(statearr_27324_27343[(1)] = (5));

} else {
var statearr_27325_27344 = state_27319__$1;
(statearr_27325_27344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (6))){
var state_27319__$1 = state_27319;
var statearr_27326_27345 = state_27319__$1;
(statearr_27326_27345[(2)] = null);

(statearr_27326_27345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (3))){
var inst_27317 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27319__$1,inst_27317);
} else {
if((state_val_27320 === (2))){
var state_27319__$1 = state_27319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27319__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27320 === (11))){
var inst_27311 = (state_27319[(2)]);
var state_27319__$1 = (function (){var statearr_27327 = state_27319;
(statearr_27327[(8)] = inst_27311);

return statearr_27327;
})();
var statearr_27328_27346 = state_27319__$1;
(statearr_27328_27346[(2)] = null);

(statearr_27328_27346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (9))){
var inst_27303 = (state_27319[(9)]);
var inst_27305 = (state_27319[(10)]);
var inst_27307 = inst_27305.call(null,inst_27303);
var state_27319__$1 = state_27319;
var statearr_27329_27347 = state_27319__$1;
(statearr_27329_27347[(2)] = inst_27307);

(statearr_27329_27347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (5))){
var inst_27299 = (state_27319[(7)]);
var inst_27301 = figwheel.client.file_reloading.blocking_load.call(null,inst_27299);
var state_27319__$1 = state_27319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27319__$1,(8),inst_27301);
} else {
if((state_val_27320 === (10))){
var inst_27303 = (state_27319[(9)]);
var inst_27309 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27303);
var state_27319__$1 = state_27319;
var statearr_27330_27348 = state_27319__$1;
(statearr_27330_27348[(2)] = inst_27309);

(statearr_27330_27348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (8))){
var inst_27299 = (state_27319[(7)]);
var inst_27305 = (state_27319[(10)]);
var inst_27303 = (state_27319[(2)]);
var inst_27304 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27305__$1 = cljs.core.get.call(null,inst_27304,inst_27299);
var state_27319__$1 = (function (){var statearr_27331 = state_27319;
(statearr_27331[(9)] = inst_27303);

(statearr_27331[(10)] = inst_27305__$1);

return statearr_27331;
})();
if(cljs.core.truth_(inst_27305__$1)){
var statearr_27332_27349 = state_27319__$1;
(statearr_27332_27349[(1)] = (9));

} else {
var statearr_27333_27350 = state_27319__$1;
(statearr_27333_27350[(1)] = (10));

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
});})(c__24257__auto__))
;
return ((function (switch__24145__auto__,c__24257__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24146__auto__ = null;
var figwheel$client$file_reloading$state_machine__24146__auto____0 = (function (){
var statearr_27337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27337[(0)] = figwheel$client$file_reloading$state_machine__24146__auto__);

(statearr_27337[(1)] = (1));

return statearr_27337;
});
var figwheel$client$file_reloading$state_machine__24146__auto____1 = (function (state_27319){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_27319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e27338){if((e27338 instanceof Object)){
var ex__24149__auto__ = e27338;
var statearr_27339_27351 = state_27319;
(statearr_27339_27351[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27352 = state_27319;
state_27319 = G__27352;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24146__auto__ = function(state_27319){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24146__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24146__auto____1.call(this,state_27319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24146__auto____0;
figwheel$client$file_reloading$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24146__auto____1;
return figwheel$client$file_reloading$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto__))
})();
var state__24259__auto__ = (function (){var statearr_27340 = f__24258__auto__.call(null);
(statearr_27340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto__);

return statearr_27340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto__))
);

return c__24257__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27353,callback){
var map__27356 = p__27353;
var map__27356__$1 = ((((!((map__27356 == null)))?((((map__27356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27356):map__27356);
var file_msg = map__27356__$1;
var namespace = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27356,map__27356__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27356,map__27356__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27358){
var map__27361 = p__27358;
var map__27361__$1 = ((((!((map__27361 == null)))?((((map__27361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27361):map__27361);
var file_msg = map__27361__$1;
var namespace = cljs.core.get.call(null,map__27361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27363,callback){
var map__27366 = p__27363;
var map__27366__$1 = ((((!((map__27366 == null)))?((((map__27366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27366):map__27366);
var file_msg = map__27366__$1;
var request_url = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24257__auto___27454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___27454,out){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___27454,out){
return (function (state_27436){
var state_val_27437 = (state_27436[(1)]);
if((state_val_27437 === (1))){
var inst_27414 = cljs.core.nth.call(null,files,(0),null);
var inst_27415 = cljs.core.nthnext.call(null,files,(1));
var inst_27416 = files;
var state_27436__$1 = (function (){var statearr_27438 = state_27436;
(statearr_27438[(7)] = inst_27415);

(statearr_27438[(8)] = inst_27414);

(statearr_27438[(9)] = inst_27416);

return statearr_27438;
})();
var statearr_27439_27455 = state_27436__$1;
(statearr_27439_27455[(2)] = null);

(statearr_27439_27455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (2))){
var inst_27416 = (state_27436[(9)]);
var inst_27419 = (state_27436[(10)]);
var inst_27419__$1 = cljs.core.nth.call(null,inst_27416,(0),null);
var inst_27420 = cljs.core.nthnext.call(null,inst_27416,(1));
var inst_27421 = (inst_27419__$1 == null);
var inst_27422 = cljs.core.not.call(null,inst_27421);
var state_27436__$1 = (function (){var statearr_27440 = state_27436;
(statearr_27440[(11)] = inst_27420);

(statearr_27440[(10)] = inst_27419__$1);

return statearr_27440;
})();
if(inst_27422){
var statearr_27441_27456 = state_27436__$1;
(statearr_27441_27456[(1)] = (4));

} else {
var statearr_27442_27457 = state_27436__$1;
(statearr_27442_27457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (3))){
var inst_27434 = (state_27436[(2)]);
var state_27436__$1 = state_27436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27436__$1,inst_27434);
} else {
if((state_val_27437 === (4))){
var inst_27419 = (state_27436[(10)]);
var inst_27424 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27419);
var state_27436__$1 = state_27436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27436__$1,(7),inst_27424);
} else {
if((state_val_27437 === (5))){
var inst_27430 = cljs.core.async.close_BANG_.call(null,out);
var state_27436__$1 = state_27436;
var statearr_27443_27458 = state_27436__$1;
(statearr_27443_27458[(2)] = inst_27430);

(statearr_27443_27458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (6))){
var inst_27432 = (state_27436[(2)]);
var state_27436__$1 = state_27436;
var statearr_27444_27459 = state_27436__$1;
(statearr_27444_27459[(2)] = inst_27432);

(statearr_27444_27459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (7))){
var inst_27420 = (state_27436[(11)]);
var inst_27426 = (state_27436[(2)]);
var inst_27427 = cljs.core.async.put_BANG_.call(null,out,inst_27426);
var inst_27416 = inst_27420;
var state_27436__$1 = (function (){var statearr_27445 = state_27436;
(statearr_27445[(12)] = inst_27427);

(statearr_27445[(9)] = inst_27416);

return statearr_27445;
})();
var statearr_27446_27460 = state_27436__$1;
(statearr_27446_27460[(2)] = null);

(statearr_27446_27460[(1)] = (2));


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
});})(c__24257__auto___27454,out))
;
return ((function (switch__24145__auto__,c__24257__auto___27454,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto____0 = (function (){
var statearr_27450 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27450[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto__);

(statearr_27450[(1)] = (1));

return statearr_27450;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto____1 = (function (state_27436){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_27436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e27451){if((e27451 instanceof Object)){
var ex__24149__auto__ = e27451;
var statearr_27452_27461 = state_27436;
(statearr_27452_27461[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27462 = state_27436;
state_27436 = G__27462;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto__ = function(state_27436){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto____1.call(this,state_27436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___27454,out))
})();
var state__24259__auto__ = (function (){var statearr_27453 = f__24258__auto__.call(null);
(statearr_27453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___27454);

return statearr_27453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___27454,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27463,opts){
var map__27467 = p__27463;
var map__27467__$1 = ((((!((map__27467 == null)))?((((map__27467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27467):map__27467);
var eval_body__$1 = cljs.core.get.call(null,map__27467__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27467__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27469){var e = e27469;
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
return (function (p1__27470_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27470_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27475){
var vec__27476 = p__27475;
var k = cljs.core.nth.call(null,vec__27476,(0),null);
var v = cljs.core.nth.call(null,vec__27476,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27477){
var vec__27478 = p__27477;
var k = cljs.core.nth.call(null,vec__27478,(0),null);
var v = cljs.core.nth.call(null,vec__27478,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27482,p__27483){
var map__27730 = p__27482;
var map__27730__$1 = ((((!((map__27730 == null)))?((((map__27730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27730):map__27730);
var opts = map__27730__$1;
var before_jsload = cljs.core.get.call(null,map__27730__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27730__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27730__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27731 = p__27483;
var map__27731__$1 = ((((!((map__27731 == null)))?((((map__27731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27731):map__27731);
var msg = map__27731__$1;
var files = cljs.core.get.call(null,map__27731__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27731__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27731__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27884){
var state_val_27885 = (state_27884[(1)]);
if((state_val_27885 === (7))){
var inst_27746 = (state_27884[(7)]);
var inst_27748 = (state_27884[(8)]);
var inst_27745 = (state_27884[(9)]);
var inst_27747 = (state_27884[(10)]);
var inst_27753 = cljs.core._nth.call(null,inst_27746,inst_27748);
var inst_27754 = figwheel.client.file_reloading.eval_body.call(null,inst_27753,opts);
var inst_27755 = (inst_27748 + (1));
var tmp27886 = inst_27746;
var tmp27887 = inst_27745;
var tmp27888 = inst_27747;
var inst_27745__$1 = tmp27887;
var inst_27746__$1 = tmp27886;
var inst_27747__$1 = tmp27888;
var inst_27748__$1 = inst_27755;
var state_27884__$1 = (function (){var statearr_27889 = state_27884;
(statearr_27889[(7)] = inst_27746__$1);

(statearr_27889[(8)] = inst_27748__$1);

(statearr_27889[(9)] = inst_27745__$1);

(statearr_27889[(10)] = inst_27747__$1);

(statearr_27889[(11)] = inst_27754);

return statearr_27889;
})();
var statearr_27890_27976 = state_27884__$1;
(statearr_27890_27976[(2)] = null);

(statearr_27890_27976[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (20))){
var inst_27788 = (state_27884[(12)]);
var inst_27796 = figwheel.client.file_reloading.sort_files.call(null,inst_27788);
var state_27884__$1 = state_27884;
var statearr_27891_27977 = state_27884__$1;
(statearr_27891_27977[(2)] = inst_27796);

(statearr_27891_27977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (27))){
var state_27884__$1 = state_27884;
var statearr_27892_27978 = state_27884__$1;
(statearr_27892_27978[(2)] = null);

(statearr_27892_27978[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (1))){
var inst_27737 = (state_27884[(13)]);
var inst_27734 = before_jsload.call(null,files);
var inst_27735 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27736 = (function (){return ((function (inst_27737,inst_27734,inst_27735,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27479_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27479_SHARP_);
});
;})(inst_27737,inst_27734,inst_27735,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27737__$1 = cljs.core.filter.call(null,inst_27736,files);
var inst_27738 = cljs.core.not_empty.call(null,inst_27737__$1);
var state_27884__$1 = (function (){var statearr_27893 = state_27884;
(statearr_27893[(14)] = inst_27734);

(statearr_27893[(15)] = inst_27735);

(statearr_27893[(13)] = inst_27737__$1);

return statearr_27893;
})();
if(cljs.core.truth_(inst_27738)){
var statearr_27894_27979 = state_27884__$1;
(statearr_27894_27979[(1)] = (2));

} else {
var statearr_27895_27980 = state_27884__$1;
(statearr_27895_27980[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (24))){
var state_27884__$1 = state_27884;
var statearr_27896_27981 = state_27884__$1;
(statearr_27896_27981[(2)] = null);

(statearr_27896_27981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (39))){
var inst_27838 = (state_27884[(16)]);
var state_27884__$1 = state_27884;
var statearr_27897_27982 = state_27884__$1;
(statearr_27897_27982[(2)] = inst_27838);

(statearr_27897_27982[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (46))){
var inst_27879 = (state_27884[(2)]);
var state_27884__$1 = state_27884;
var statearr_27898_27983 = state_27884__$1;
(statearr_27898_27983[(2)] = inst_27879);

(statearr_27898_27983[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (4))){
var inst_27782 = (state_27884[(2)]);
var inst_27783 = cljs.core.List.EMPTY;
var inst_27784 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27783);
var inst_27785 = (function (){return ((function (inst_27782,inst_27783,inst_27784,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27480_SHARP_){
var and__16739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27480_SHARP_);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27480_SHARP_));
} else {
return and__16739__auto__;
}
});
;})(inst_27782,inst_27783,inst_27784,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27786 = cljs.core.filter.call(null,inst_27785,files);
var inst_27787 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27788 = cljs.core.concat.call(null,inst_27786,inst_27787);
var state_27884__$1 = (function (){var statearr_27899 = state_27884;
(statearr_27899[(17)] = inst_27784);

(statearr_27899[(12)] = inst_27788);

(statearr_27899[(18)] = inst_27782);

return statearr_27899;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27900_27984 = state_27884__$1;
(statearr_27900_27984[(1)] = (16));

} else {
var statearr_27901_27985 = state_27884__$1;
(statearr_27901_27985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (15))){
var inst_27772 = (state_27884[(2)]);
var state_27884__$1 = state_27884;
var statearr_27902_27986 = state_27884__$1;
(statearr_27902_27986[(2)] = inst_27772);

(statearr_27902_27986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (21))){
var inst_27798 = (state_27884[(19)]);
var inst_27798__$1 = (state_27884[(2)]);
var inst_27799 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27798__$1);
var state_27884__$1 = (function (){var statearr_27903 = state_27884;
(statearr_27903[(19)] = inst_27798__$1);

return statearr_27903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27884__$1,(22),inst_27799);
} else {
if((state_val_27885 === (31))){
var inst_27882 = (state_27884[(2)]);
var state_27884__$1 = state_27884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27884__$1,inst_27882);
} else {
if((state_val_27885 === (32))){
var inst_27838 = (state_27884[(16)]);
var inst_27843 = inst_27838.cljs$lang$protocol_mask$partition0$;
var inst_27844 = (inst_27843 & (64));
var inst_27845 = inst_27838.cljs$core$ISeq$;
var inst_27846 = (inst_27844) || (inst_27845);
var state_27884__$1 = state_27884;
if(cljs.core.truth_(inst_27846)){
var statearr_27904_27987 = state_27884__$1;
(statearr_27904_27987[(1)] = (35));

} else {
var statearr_27905_27988 = state_27884__$1;
(statearr_27905_27988[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (40))){
var inst_27859 = (state_27884[(20)]);
var inst_27858 = (state_27884[(2)]);
var inst_27859__$1 = cljs.core.get.call(null,inst_27858,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27860 = cljs.core.get.call(null,inst_27858,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27861 = cljs.core.not_empty.call(null,inst_27859__$1);
var state_27884__$1 = (function (){var statearr_27906 = state_27884;
(statearr_27906[(21)] = inst_27860);

(statearr_27906[(20)] = inst_27859__$1);

return statearr_27906;
})();
if(cljs.core.truth_(inst_27861)){
var statearr_27907_27989 = state_27884__$1;
(statearr_27907_27989[(1)] = (41));

} else {
var statearr_27908_27990 = state_27884__$1;
(statearr_27908_27990[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (33))){
var state_27884__$1 = state_27884;
var statearr_27909_27991 = state_27884__$1;
(statearr_27909_27991[(2)] = false);

(statearr_27909_27991[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (13))){
var inst_27758 = (state_27884[(22)]);
var inst_27762 = cljs.core.chunk_first.call(null,inst_27758);
var inst_27763 = cljs.core.chunk_rest.call(null,inst_27758);
var inst_27764 = cljs.core.count.call(null,inst_27762);
var inst_27745 = inst_27763;
var inst_27746 = inst_27762;
var inst_27747 = inst_27764;
var inst_27748 = (0);
var state_27884__$1 = (function (){var statearr_27910 = state_27884;
(statearr_27910[(7)] = inst_27746);

(statearr_27910[(8)] = inst_27748);

(statearr_27910[(9)] = inst_27745);

(statearr_27910[(10)] = inst_27747);

return statearr_27910;
})();
var statearr_27911_27992 = state_27884__$1;
(statearr_27911_27992[(2)] = null);

(statearr_27911_27992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (22))){
var inst_27802 = (state_27884[(23)]);
var inst_27806 = (state_27884[(24)]);
var inst_27798 = (state_27884[(19)]);
var inst_27801 = (state_27884[(25)]);
var inst_27801__$1 = (state_27884[(2)]);
var inst_27802__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27801__$1);
var inst_27803 = (function (){var all_files = inst_27798;
var res_SINGLEQUOTE_ = inst_27801__$1;
var res = inst_27802__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27802,inst_27806,inst_27798,inst_27801,inst_27801__$1,inst_27802__$1,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27481_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27481_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27802,inst_27806,inst_27798,inst_27801,inst_27801__$1,inst_27802__$1,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27804 = cljs.core.filter.call(null,inst_27803,inst_27801__$1);
var inst_27805 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27806__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27805);
var inst_27807 = cljs.core.not_empty.call(null,inst_27806__$1);
var state_27884__$1 = (function (){var statearr_27912 = state_27884;
(statearr_27912[(26)] = inst_27804);

(statearr_27912[(23)] = inst_27802__$1);

(statearr_27912[(24)] = inst_27806__$1);

(statearr_27912[(25)] = inst_27801__$1);

return statearr_27912;
})();
if(cljs.core.truth_(inst_27807)){
var statearr_27913_27993 = state_27884__$1;
(statearr_27913_27993[(1)] = (23));

} else {
var statearr_27914_27994 = state_27884__$1;
(statearr_27914_27994[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (36))){
var state_27884__$1 = state_27884;
var statearr_27915_27995 = state_27884__$1;
(statearr_27915_27995[(2)] = false);

(statearr_27915_27995[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (41))){
var inst_27859 = (state_27884[(20)]);
var inst_27863 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27864 = cljs.core.map.call(null,inst_27863,inst_27859);
var inst_27865 = cljs.core.pr_str.call(null,inst_27864);
var inst_27866 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27865)].join('');
var inst_27867 = figwheel.client.utils.log.call(null,inst_27866);
var state_27884__$1 = state_27884;
var statearr_27916_27996 = state_27884__$1;
(statearr_27916_27996[(2)] = inst_27867);

(statearr_27916_27996[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (43))){
var inst_27860 = (state_27884[(21)]);
var inst_27870 = (state_27884[(2)]);
var inst_27871 = cljs.core.not_empty.call(null,inst_27860);
var state_27884__$1 = (function (){var statearr_27917 = state_27884;
(statearr_27917[(27)] = inst_27870);

return statearr_27917;
})();
if(cljs.core.truth_(inst_27871)){
var statearr_27918_27997 = state_27884__$1;
(statearr_27918_27997[(1)] = (44));

} else {
var statearr_27919_27998 = state_27884__$1;
(statearr_27919_27998[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (29))){
var inst_27804 = (state_27884[(26)]);
var inst_27838 = (state_27884[(16)]);
var inst_27802 = (state_27884[(23)]);
var inst_27806 = (state_27884[(24)]);
var inst_27798 = (state_27884[(19)]);
var inst_27801 = (state_27884[(25)]);
var inst_27834 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27837 = (function (){var all_files = inst_27798;
var res_SINGLEQUOTE_ = inst_27801;
var res = inst_27802;
var files_not_loaded = inst_27804;
var dependencies_that_loaded = inst_27806;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27804,inst_27838,inst_27802,inst_27806,inst_27798,inst_27801,inst_27834,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27836){
var map__27920 = p__27836;
var map__27920__$1 = ((((!((map__27920 == null)))?((((map__27920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27920):map__27920);
var namespace = cljs.core.get.call(null,map__27920__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27804,inst_27838,inst_27802,inst_27806,inst_27798,inst_27801,inst_27834,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27838__$1 = cljs.core.group_by.call(null,inst_27837,inst_27804);
var inst_27840 = (inst_27838__$1 == null);
var inst_27841 = cljs.core.not.call(null,inst_27840);
var state_27884__$1 = (function (){var statearr_27922 = state_27884;
(statearr_27922[(16)] = inst_27838__$1);

(statearr_27922[(28)] = inst_27834);

return statearr_27922;
})();
if(inst_27841){
var statearr_27923_27999 = state_27884__$1;
(statearr_27923_27999[(1)] = (32));

} else {
var statearr_27924_28000 = state_27884__$1;
(statearr_27924_28000[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (44))){
var inst_27860 = (state_27884[(21)]);
var inst_27873 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27860);
var inst_27874 = cljs.core.pr_str.call(null,inst_27873);
var inst_27875 = [cljs.core.str("not required: "),cljs.core.str(inst_27874)].join('');
var inst_27876 = figwheel.client.utils.log.call(null,inst_27875);
var state_27884__$1 = state_27884;
var statearr_27925_28001 = state_27884__$1;
(statearr_27925_28001[(2)] = inst_27876);

(statearr_27925_28001[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (6))){
var inst_27779 = (state_27884[(2)]);
var state_27884__$1 = state_27884;
var statearr_27926_28002 = state_27884__$1;
(statearr_27926_28002[(2)] = inst_27779);

(statearr_27926_28002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (28))){
var inst_27804 = (state_27884[(26)]);
var inst_27831 = (state_27884[(2)]);
var inst_27832 = cljs.core.not_empty.call(null,inst_27804);
var state_27884__$1 = (function (){var statearr_27927 = state_27884;
(statearr_27927[(29)] = inst_27831);

return statearr_27927;
})();
if(cljs.core.truth_(inst_27832)){
var statearr_27928_28003 = state_27884__$1;
(statearr_27928_28003[(1)] = (29));

} else {
var statearr_27929_28004 = state_27884__$1;
(statearr_27929_28004[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (25))){
var inst_27802 = (state_27884[(23)]);
var inst_27818 = (state_27884[(2)]);
var inst_27819 = cljs.core.not_empty.call(null,inst_27802);
var state_27884__$1 = (function (){var statearr_27930 = state_27884;
(statearr_27930[(30)] = inst_27818);

return statearr_27930;
})();
if(cljs.core.truth_(inst_27819)){
var statearr_27931_28005 = state_27884__$1;
(statearr_27931_28005[(1)] = (26));

} else {
var statearr_27932_28006 = state_27884__$1;
(statearr_27932_28006[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (34))){
var inst_27853 = (state_27884[(2)]);
var state_27884__$1 = state_27884;
if(cljs.core.truth_(inst_27853)){
var statearr_27933_28007 = state_27884__$1;
(statearr_27933_28007[(1)] = (38));

} else {
var statearr_27934_28008 = state_27884__$1;
(statearr_27934_28008[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (17))){
var state_27884__$1 = state_27884;
var statearr_27935_28009 = state_27884__$1;
(statearr_27935_28009[(2)] = recompile_dependents);

(statearr_27935_28009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (3))){
var state_27884__$1 = state_27884;
var statearr_27936_28010 = state_27884__$1;
(statearr_27936_28010[(2)] = null);

(statearr_27936_28010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (12))){
var inst_27775 = (state_27884[(2)]);
var state_27884__$1 = state_27884;
var statearr_27937_28011 = state_27884__$1;
(statearr_27937_28011[(2)] = inst_27775);

(statearr_27937_28011[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (2))){
var inst_27737 = (state_27884[(13)]);
var inst_27744 = cljs.core.seq.call(null,inst_27737);
var inst_27745 = inst_27744;
var inst_27746 = null;
var inst_27747 = (0);
var inst_27748 = (0);
var state_27884__$1 = (function (){var statearr_27938 = state_27884;
(statearr_27938[(7)] = inst_27746);

(statearr_27938[(8)] = inst_27748);

(statearr_27938[(9)] = inst_27745);

(statearr_27938[(10)] = inst_27747);

return statearr_27938;
})();
var statearr_27939_28012 = state_27884__$1;
(statearr_27939_28012[(2)] = null);

(statearr_27939_28012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (23))){
var inst_27804 = (state_27884[(26)]);
var inst_27802 = (state_27884[(23)]);
var inst_27806 = (state_27884[(24)]);
var inst_27798 = (state_27884[(19)]);
var inst_27801 = (state_27884[(25)]);
var inst_27809 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27811 = (function (){var all_files = inst_27798;
var res_SINGLEQUOTE_ = inst_27801;
var res = inst_27802;
var files_not_loaded = inst_27804;
var dependencies_that_loaded = inst_27806;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27804,inst_27802,inst_27806,inst_27798,inst_27801,inst_27809,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27810){
var map__27940 = p__27810;
var map__27940__$1 = ((((!((map__27940 == null)))?((((map__27940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27940):map__27940);
var request_url = cljs.core.get.call(null,map__27940__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27804,inst_27802,inst_27806,inst_27798,inst_27801,inst_27809,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27812 = cljs.core.reverse.call(null,inst_27806);
var inst_27813 = cljs.core.map.call(null,inst_27811,inst_27812);
var inst_27814 = cljs.core.pr_str.call(null,inst_27813);
var inst_27815 = figwheel.client.utils.log.call(null,inst_27814);
var state_27884__$1 = (function (){var statearr_27942 = state_27884;
(statearr_27942[(31)] = inst_27809);

return statearr_27942;
})();
var statearr_27943_28013 = state_27884__$1;
(statearr_27943_28013[(2)] = inst_27815);

(statearr_27943_28013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (35))){
var state_27884__$1 = state_27884;
var statearr_27944_28014 = state_27884__$1;
(statearr_27944_28014[(2)] = true);

(statearr_27944_28014[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (19))){
var inst_27788 = (state_27884[(12)]);
var inst_27794 = figwheel.client.file_reloading.expand_files.call(null,inst_27788);
var state_27884__$1 = state_27884;
var statearr_27945_28015 = state_27884__$1;
(statearr_27945_28015[(2)] = inst_27794);

(statearr_27945_28015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (11))){
var state_27884__$1 = state_27884;
var statearr_27946_28016 = state_27884__$1;
(statearr_27946_28016[(2)] = null);

(statearr_27946_28016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (9))){
var inst_27777 = (state_27884[(2)]);
var state_27884__$1 = state_27884;
var statearr_27947_28017 = state_27884__$1;
(statearr_27947_28017[(2)] = inst_27777);

(statearr_27947_28017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (5))){
var inst_27748 = (state_27884[(8)]);
var inst_27747 = (state_27884[(10)]);
var inst_27750 = (inst_27748 < inst_27747);
var inst_27751 = inst_27750;
var state_27884__$1 = state_27884;
if(cljs.core.truth_(inst_27751)){
var statearr_27948_28018 = state_27884__$1;
(statearr_27948_28018[(1)] = (7));

} else {
var statearr_27949_28019 = state_27884__$1;
(statearr_27949_28019[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (14))){
var inst_27758 = (state_27884[(22)]);
var inst_27767 = cljs.core.first.call(null,inst_27758);
var inst_27768 = figwheel.client.file_reloading.eval_body.call(null,inst_27767,opts);
var inst_27769 = cljs.core.next.call(null,inst_27758);
var inst_27745 = inst_27769;
var inst_27746 = null;
var inst_27747 = (0);
var inst_27748 = (0);
var state_27884__$1 = (function (){var statearr_27950 = state_27884;
(statearr_27950[(7)] = inst_27746);

(statearr_27950[(8)] = inst_27748);

(statearr_27950[(32)] = inst_27768);

(statearr_27950[(9)] = inst_27745);

(statearr_27950[(10)] = inst_27747);

return statearr_27950;
})();
var statearr_27951_28020 = state_27884__$1;
(statearr_27951_28020[(2)] = null);

(statearr_27951_28020[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (45))){
var state_27884__$1 = state_27884;
var statearr_27952_28021 = state_27884__$1;
(statearr_27952_28021[(2)] = null);

(statearr_27952_28021[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (26))){
var inst_27804 = (state_27884[(26)]);
var inst_27802 = (state_27884[(23)]);
var inst_27806 = (state_27884[(24)]);
var inst_27798 = (state_27884[(19)]);
var inst_27801 = (state_27884[(25)]);
var inst_27821 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27823 = (function (){var all_files = inst_27798;
var res_SINGLEQUOTE_ = inst_27801;
var res = inst_27802;
var files_not_loaded = inst_27804;
var dependencies_that_loaded = inst_27806;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27804,inst_27802,inst_27806,inst_27798,inst_27801,inst_27821,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27822){
var map__27953 = p__27822;
var map__27953__$1 = ((((!((map__27953 == null)))?((((map__27953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27953):map__27953);
var namespace = cljs.core.get.call(null,map__27953__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27953__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27804,inst_27802,inst_27806,inst_27798,inst_27801,inst_27821,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27824 = cljs.core.map.call(null,inst_27823,inst_27802);
var inst_27825 = cljs.core.pr_str.call(null,inst_27824);
var inst_27826 = figwheel.client.utils.log.call(null,inst_27825);
var inst_27827 = (function (){var all_files = inst_27798;
var res_SINGLEQUOTE_ = inst_27801;
var res = inst_27802;
var files_not_loaded = inst_27804;
var dependencies_that_loaded = inst_27806;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27804,inst_27802,inst_27806,inst_27798,inst_27801,inst_27821,inst_27823,inst_27824,inst_27825,inst_27826,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27804,inst_27802,inst_27806,inst_27798,inst_27801,inst_27821,inst_27823,inst_27824,inst_27825,inst_27826,state_val_27885,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27828 = setTimeout(inst_27827,(10));
var state_27884__$1 = (function (){var statearr_27955 = state_27884;
(statearr_27955[(33)] = inst_27826);

(statearr_27955[(34)] = inst_27821);

return statearr_27955;
})();
var statearr_27956_28022 = state_27884__$1;
(statearr_27956_28022[(2)] = inst_27828);

(statearr_27956_28022[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (16))){
var state_27884__$1 = state_27884;
var statearr_27957_28023 = state_27884__$1;
(statearr_27957_28023[(2)] = reload_dependents);

(statearr_27957_28023[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (38))){
var inst_27838 = (state_27884[(16)]);
var inst_27855 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27838);
var state_27884__$1 = state_27884;
var statearr_27958_28024 = state_27884__$1;
(statearr_27958_28024[(2)] = inst_27855);

(statearr_27958_28024[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (30))){
var state_27884__$1 = state_27884;
var statearr_27959_28025 = state_27884__$1;
(statearr_27959_28025[(2)] = null);

(statearr_27959_28025[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (10))){
var inst_27758 = (state_27884[(22)]);
var inst_27760 = cljs.core.chunked_seq_QMARK_.call(null,inst_27758);
var state_27884__$1 = state_27884;
if(inst_27760){
var statearr_27960_28026 = state_27884__$1;
(statearr_27960_28026[(1)] = (13));

} else {
var statearr_27961_28027 = state_27884__$1;
(statearr_27961_28027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (18))){
var inst_27792 = (state_27884[(2)]);
var state_27884__$1 = state_27884;
if(cljs.core.truth_(inst_27792)){
var statearr_27962_28028 = state_27884__$1;
(statearr_27962_28028[(1)] = (19));

} else {
var statearr_27963_28029 = state_27884__$1;
(statearr_27963_28029[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (42))){
var state_27884__$1 = state_27884;
var statearr_27964_28030 = state_27884__$1;
(statearr_27964_28030[(2)] = null);

(statearr_27964_28030[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (37))){
var inst_27850 = (state_27884[(2)]);
var state_27884__$1 = state_27884;
var statearr_27965_28031 = state_27884__$1;
(statearr_27965_28031[(2)] = inst_27850);

(statearr_27965_28031[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27885 === (8))){
var inst_27745 = (state_27884[(9)]);
var inst_27758 = (state_27884[(22)]);
var inst_27758__$1 = cljs.core.seq.call(null,inst_27745);
var state_27884__$1 = (function (){var statearr_27966 = state_27884;
(statearr_27966[(22)] = inst_27758__$1);

return statearr_27966;
})();
if(inst_27758__$1){
var statearr_27967_28032 = state_27884__$1;
(statearr_27967_28032[(1)] = (10));

} else {
var statearr_27968_28033 = state_27884__$1;
(statearr_27968_28033[(1)] = (11));

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
});})(c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24145__auto__,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto____0 = (function (){
var statearr_27972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27972[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto__);

(statearr_27972[(1)] = (1));

return statearr_27972;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto____1 = (function (state_27884){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_27884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e27973){if((e27973 instanceof Object)){
var ex__24149__auto__ = e27973;
var statearr_27974_28034 = state_27884;
(statearr_27974_28034[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28035 = state_27884;
state_27884 = G__28035;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto__ = function(state_27884){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto____1.call(this,state_27884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24259__auto__ = (function (){var statearr_27975 = f__24258__auto__.call(null);
(statearr_27975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto__);

return statearr_27975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto__,map__27730,map__27730__$1,opts,before_jsload,on_jsload,reload_dependents,map__27731,map__27731__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24257__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28038,link){
var map__28041 = p__28038;
var map__28041__$1 = ((((!((map__28041 == null)))?((((map__28041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28041):map__28041);
var file = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28041,map__28041__$1,file){
return (function (p1__28036_SHARP_,p2__28037_SHARP_){
if(cljs.core._EQ_.call(null,p1__28036_SHARP_,p2__28037_SHARP_)){
return p1__28036_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28041,map__28041__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28047){
var map__28048 = p__28047;
var map__28048__$1 = ((((!((map__28048 == null)))?((((map__28048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28048):map__28048);
var match_length = cljs.core.get.call(null,map__28048__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28048__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28043_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28043_SHARP_);
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
var args28050 = [];
var len__17809__auto___28053 = arguments.length;
var i__17810__auto___28054 = (0);
while(true){
if((i__17810__auto___28054 < len__17809__auto___28053)){
args28050.push((arguments[i__17810__auto___28054]));

var G__28055 = (i__17810__auto___28054 + (1));
i__17810__auto___28054 = G__28055;
continue;
} else {
}
break;
}

var G__28052 = args28050.length;
switch (G__28052) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28050.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28057_SHARP_,p2__28058_SHARP_){
return cljs.core.assoc.call(null,p1__28057_SHARP_,cljs.core.get.call(null,p2__28058_SHARP_,key),p2__28058_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28059){
var map__28062 = p__28059;
var map__28062__$1 = ((((!((map__28062 == null)))?((((map__28062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28062):map__28062);
var f_data = map__28062__$1;
var file = cljs.core.get.call(null,map__28062__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28064,files_msg){
var map__28071 = p__28064;
var map__28071__$1 = ((((!((map__28071 == null)))?((((map__28071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28071):map__28071);
var opts = map__28071__$1;
var on_cssload = cljs.core.get.call(null,map__28071__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28073_28077 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28074_28078 = null;
var count__28075_28079 = (0);
var i__28076_28080 = (0);
while(true){
if((i__28076_28080 < count__28075_28079)){
var f_28081 = cljs.core._nth.call(null,chunk__28074_28078,i__28076_28080);
figwheel.client.file_reloading.reload_css_file.call(null,f_28081);

var G__28082 = seq__28073_28077;
var G__28083 = chunk__28074_28078;
var G__28084 = count__28075_28079;
var G__28085 = (i__28076_28080 + (1));
seq__28073_28077 = G__28082;
chunk__28074_28078 = G__28083;
count__28075_28079 = G__28084;
i__28076_28080 = G__28085;
continue;
} else {
var temp__4425__auto___28086 = cljs.core.seq.call(null,seq__28073_28077);
if(temp__4425__auto___28086){
var seq__28073_28087__$1 = temp__4425__auto___28086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28073_28087__$1)){
var c__17554__auto___28088 = cljs.core.chunk_first.call(null,seq__28073_28087__$1);
var G__28089 = cljs.core.chunk_rest.call(null,seq__28073_28087__$1);
var G__28090 = c__17554__auto___28088;
var G__28091 = cljs.core.count.call(null,c__17554__auto___28088);
var G__28092 = (0);
seq__28073_28077 = G__28089;
chunk__28074_28078 = G__28090;
count__28075_28079 = G__28091;
i__28076_28080 = G__28092;
continue;
} else {
var f_28093 = cljs.core.first.call(null,seq__28073_28087__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28093);

var G__28094 = cljs.core.next.call(null,seq__28073_28087__$1);
var G__28095 = null;
var G__28096 = (0);
var G__28097 = (0);
seq__28073_28077 = G__28094;
chunk__28074_28078 = G__28095;
count__28075_28079 = G__28096;
i__28076_28080 = G__28097;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28071,map__28071__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28071,map__28071__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1452772208163