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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27125_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27125_SHARP_));
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
var seq__27130 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27131 = null;
var count__27132 = (0);
var i__27133 = (0);
while(true){
if((i__27133 < count__27132)){
var n = cljs.core._nth.call(null,chunk__27131,i__27133);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27134 = seq__27130;
var G__27135 = chunk__27131;
var G__27136 = count__27132;
var G__27137 = (i__27133 + (1));
seq__27130 = G__27134;
chunk__27131 = G__27135;
count__27132 = G__27136;
i__27133 = G__27137;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27130);
if(temp__4425__auto__){
var seq__27130__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27130__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27130__$1);
var G__27138 = cljs.core.chunk_rest.call(null,seq__27130__$1);
var G__27139 = c__17554__auto__;
var G__27140 = cljs.core.count.call(null,c__17554__auto__);
var G__27141 = (0);
seq__27130 = G__27138;
chunk__27131 = G__27139;
count__27132 = G__27140;
i__27133 = G__27141;
continue;
} else {
var n = cljs.core.first.call(null,seq__27130__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27142 = cljs.core.next.call(null,seq__27130__$1);
var G__27143 = null;
var G__27144 = (0);
var G__27145 = (0);
seq__27130 = G__27142;
chunk__27131 = G__27143;
count__27132 = G__27144;
i__27133 = G__27145;
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

var seq__27184_27191 = cljs.core.seq.call(null,deps);
var chunk__27185_27192 = null;
var count__27186_27193 = (0);
var i__27187_27194 = (0);
while(true){
if((i__27187_27194 < count__27186_27193)){
var dep_27195 = cljs.core._nth.call(null,chunk__27185_27192,i__27187_27194);
topo_sort_helper_STAR_.call(null,dep_27195,(depth + (1)),state);

var G__27196 = seq__27184_27191;
var G__27197 = chunk__27185_27192;
var G__27198 = count__27186_27193;
var G__27199 = (i__27187_27194 + (1));
seq__27184_27191 = G__27196;
chunk__27185_27192 = G__27197;
count__27186_27193 = G__27198;
i__27187_27194 = G__27199;
continue;
} else {
var temp__4425__auto___27200 = cljs.core.seq.call(null,seq__27184_27191);
if(temp__4425__auto___27200){
var seq__27184_27201__$1 = temp__4425__auto___27200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27184_27201__$1)){
var c__17554__auto___27202 = cljs.core.chunk_first.call(null,seq__27184_27201__$1);
var G__27203 = cljs.core.chunk_rest.call(null,seq__27184_27201__$1);
var G__27204 = c__17554__auto___27202;
var G__27205 = cljs.core.count.call(null,c__17554__auto___27202);
var G__27206 = (0);
seq__27184_27191 = G__27203;
chunk__27185_27192 = G__27204;
count__27186_27193 = G__27205;
i__27187_27194 = G__27206;
continue;
} else {
var dep_27207 = cljs.core.first.call(null,seq__27184_27201__$1);
topo_sort_helper_STAR_.call(null,dep_27207,(depth + (1)),state);

var G__27208 = cljs.core.next.call(null,seq__27184_27201__$1);
var G__27209 = null;
var G__27210 = (0);
var G__27211 = (0);
seq__27184_27191 = G__27208;
chunk__27185_27192 = G__27209;
count__27186_27193 = G__27210;
i__27187_27194 = G__27211;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27188){
var vec__27190 = p__27188;
var x = cljs.core.nth.call(null,vec__27190,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27190,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27190,x,xs,get_deps__$1){
return (function (p1__27146_SHARP_){
return clojure.set.difference.call(null,p1__27146_SHARP_,x);
});})(vec__27190,x,xs,get_deps__$1))
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
var seq__27224 = cljs.core.seq.call(null,provides);
var chunk__27225 = null;
var count__27226 = (0);
var i__27227 = (0);
while(true){
if((i__27227 < count__27226)){
var prov = cljs.core._nth.call(null,chunk__27225,i__27227);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27228_27236 = cljs.core.seq.call(null,requires);
var chunk__27229_27237 = null;
var count__27230_27238 = (0);
var i__27231_27239 = (0);
while(true){
if((i__27231_27239 < count__27230_27238)){
var req_27240 = cljs.core._nth.call(null,chunk__27229_27237,i__27231_27239);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27240,prov);

var G__27241 = seq__27228_27236;
var G__27242 = chunk__27229_27237;
var G__27243 = count__27230_27238;
var G__27244 = (i__27231_27239 + (1));
seq__27228_27236 = G__27241;
chunk__27229_27237 = G__27242;
count__27230_27238 = G__27243;
i__27231_27239 = G__27244;
continue;
} else {
var temp__4425__auto___27245 = cljs.core.seq.call(null,seq__27228_27236);
if(temp__4425__auto___27245){
var seq__27228_27246__$1 = temp__4425__auto___27245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27228_27246__$1)){
var c__17554__auto___27247 = cljs.core.chunk_first.call(null,seq__27228_27246__$1);
var G__27248 = cljs.core.chunk_rest.call(null,seq__27228_27246__$1);
var G__27249 = c__17554__auto___27247;
var G__27250 = cljs.core.count.call(null,c__17554__auto___27247);
var G__27251 = (0);
seq__27228_27236 = G__27248;
chunk__27229_27237 = G__27249;
count__27230_27238 = G__27250;
i__27231_27239 = G__27251;
continue;
} else {
var req_27252 = cljs.core.first.call(null,seq__27228_27246__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27252,prov);

var G__27253 = cljs.core.next.call(null,seq__27228_27246__$1);
var G__27254 = null;
var G__27255 = (0);
var G__27256 = (0);
seq__27228_27236 = G__27253;
chunk__27229_27237 = G__27254;
count__27230_27238 = G__27255;
i__27231_27239 = G__27256;
continue;
}
} else {
}
}
break;
}

var G__27257 = seq__27224;
var G__27258 = chunk__27225;
var G__27259 = count__27226;
var G__27260 = (i__27227 + (1));
seq__27224 = G__27257;
chunk__27225 = G__27258;
count__27226 = G__27259;
i__27227 = G__27260;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27224);
if(temp__4425__auto__){
var seq__27224__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27224__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27224__$1);
var G__27261 = cljs.core.chunk_rest.call(null,seq__27224__$1);
var G__27262 = c__17554__auto__;
var G__27263 = cljs.core.count.call(null,c__17554__auto__);
var G__27264 = (0);
seq__27224 = G__27261;
chunk__27225 = G__27262;
count__27226 = G__27263;
i__27227 = G__27264;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27224__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27232_27265 = cljs.core.seq.call(null,requires);
var chunk__27233_27266 = null;
var count__27234_27267 = (0);
var i__27235_27268 = (0);
while(true){
if((i__27235_27268 < count__27234_27267)){
var req_27269 = cljs.core._nth.call(null,chunk__27233_27266,i__27235_27268);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27269,prov);

var G__27270 = seq__27232_27265;
var G__27271 = chunk__27233_27266;
var G__27272 = count__27234_27267;
var G__27273 = (i__27235_27268 + (1));
seq__27232_27265 = G__27270;
chunk__27233_27266 = G__27271;
count__27234_27267 = G__27272;
i__27235_27268 = G__27273;
continue;
} else {
var temp__4425__auto___27274__$1 = cljs.core.seq.call(null,seq__27232_27265);
if(temp__4425__auto___27274__$1){
var seq__27232_27275__$1 = temp__4425__auto___27274__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27232_27275__$1)){
var c__17554__auto___27276 = cljs.core.chunk_first.call(null,seq__27232_27275__$1);
var G__27277 = cljs.core.chunk_rest.call(null,seq__27232_27275__$1);
var G__27278 = c__17554__auto___27276;
var G__27279 = cljs.core.count.call(null,c__17554__auto___27276);
var G__27280 = (0);
seq__27232_27265 = G__27277;
chunk__27233_27266 = G__27278;
count__27234_27267 = G__27279;
i__27235_27268 = G__27280;
continue;
} else {
var req_27281 = cljs.core.first.call(null,seq__27232_27275__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27281,prov);

var G__27282 = cljs.core.next.call(null,seq__27232_27275__$1);
var G__27283 = null;
var G__27284 = (0);
var G__27285 = (0);
seq__27232_27265 = G__27282;
chunk__27233_27266 = G__27283;
count__27234_27267 = G__27284;
i__27235_27268 = G__27285;
continue;
}
} else {
}
}
break;
}

var G__27286 = cljs.core.next.call(null,seq__27224__$1);
var G__27287 = null;
var G__27288 = (0);
var G__27289 = (0);
seq__27224 = G__27286;
chunk__27225 = G__27287;
count__27226 = G__27288;
i__27227 = G__27289;
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
var seq__27294_27298 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27295_27299 = null;
var count__27296_27300 = (0);
var i__27297_27301 = (0);
while(true){
if((i__27297_27301 < count__27296_27300)){
var ns_27302 = cljs.core._nth.call(null,chunk__27295_27299,i__27297_27301);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27302);

var G__27303 = seq__27294_27298;
var G__27304 = chunk__27295_27299;
var G__27305 = count__27296_27300;
var G__27306 = (i__27297_27301 + (1));
seq__27294_27298 = G__27303;
chunk__27295_27299 = G__27304;
count__27296_27300 = G__27305;
i__27297_27301 = G__27306;
continue;
} else {
var temp__4425__auto___27307 = cljs.core.seq.call(null,seq__27294_27298);
if(temp__4425__auto___27307){
var seq__27294_27308__$1 = temp__4425__auto___27307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27294_27308__$1)){
var c__17554__auto___27309 = cljs.core.chunk_first.call(null,seq__27294_27308__$1);
var G__27310 = cljs.core.chunk_rest.call(null,seq__27294_27308__$1);
var G__27311 = c__17554__auto___27309;
var G__27312 = cljs.core.count.call(null,c__17554__auto___27309);
var G__27313 = (0);
seq__27294_27298 = G__27310;
chunk__27295_27299 = G__27311;
count__27296_27300 = G__27312;
i__27297_27301 = G__27313;
continue;
} else {
var ns_27314 = cljs.core.first.call(null,seq__27294_27308__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27314);

var G__27315 = cljs.core.next.call(null,seq__27294_27308__$1);
var G__27316 = null;
var G__27317 = (0);
var G__27318 = (0);
seq__27294_27298 = G__27315;
chunk__27295_27299 = G__27316;
count__27296_27300 = G__27317;
i__27297_27301 = G__27318;
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
var G__27319__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27320__i = 0, G__27320__a = new Array(arguments.length -  0);
while (G__27320__i < G__27320__a.length) {G__27320__a[G__27320__i] = arguments[G__27320__i + 0]; ++G__27320__i;}
  args = new cljs.core.IndexedSeq(G__27320__a,0);
} 
return G__27319__delegate.call(this,args);};
G__27319.cljs$lang$maxFixedArity = 0;
G__27319.cljs$lang$applyTo = (function (arglist__27321){
var args = cljs.core.seq(arglist__27321);
return G__27319__delegate(args);
});
G__27319.cljs$core$IFn$_invoke$arity$variadic = G__27319__delegate;
return G__27319;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27323 = cljs.core._EQ_;
var expr__27324 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27323.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27324))){
var path_parts = ((function (pred__27323,expr__27324){
return (function (p1__27322_SHARP_){
return clojure.string.split.call(null,p1__27322_SHARP_,/[\/\\]/);
});})(pred__27323,expr__27324))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27323,expr__27324){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27326){if((e27326 instanceof Error)){
var e = e27326;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27326;

}
}})());
});
;})(path_parts,sep,root,pred__27323,expr__27324))
} else {
if(cljs.core.truth_(pred__27323.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27324))){
return ((function (pred__27323,expr__27324){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27323,expr__27324){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27323,expr__27324))
);

return deferred.addErrback(((function (deferred,pred__27323,expr__27324){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27323,expr__27324))
);
});
;})(pred__27323,expr__27324))
} else {
return ((function (pred__27323,expr__27324){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27323,expr__27324))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27327,callback){
var map__27330 = p__27327;
var map__27330__$1 = ((((!((map__27330 == null)))?((((map__27330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27330):map__27330);
var file_msg = map__27330__$1;
var request_url = cljs.core.get.call(null,map__27330__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27330,map__27330__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27330,map__27330__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto__){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto__){
return (function (state_27354){
var state_val_27355 = (state_27354[(1)]);
if((state_val_27355 === (7))){
var inst_27350 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
var statearr_27356_27376 = state_27354__$1;
(statearr_27356_27376[(2)] = inst_27350);

(statearr_27356_27376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (1))){
var state_27354__$1 = state_27354;
var statearr_27357_27377 = state_27354__$1;
(statearr_27357_27377[(2)] = null);

(statearr_27357_27377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (4))){
var inst_27334 = (state_27354[(7)]);
var inst_27334__$1 = (state_27354[(2)]);
var state_27354__$1 = (function (){var statearr_27358 = state_27354;
(statearr_27358[(7)] = inst_27334__$1);

return statearr_27358;
})();
if(cljs.core.truth_(inst_27334__$1)){
var statearr_27359_27378 = state_27354__$1;
(statearr_27359_27378[(1)] = (5));

} else {
var statearr_27360_27379 = state_27354__$1;
(statearr_27360_27379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (6))){
var state_27354__$1 = state_27354;
var statearr_27361_27380 = state_27354__$1;
(statearr_27361_27380[(2)] = null);

(statearr_27361_27380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (3))){
var inst_27352 = (state_27354[(2)]);
var state_27354__$1 = state_27354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27354__$1,inst_27352);
} else {
if((state_val_27355 === (2))){
var state_27354__$1 = state_27354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27354__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27355 === (11))){
var inst_27346 = (state_27354[(2)]);
var state_27354__$1 = (function (){var statearr_27362 = state_27354;
(statearr_27362[(8)] = inst_27346);

return statearr_27362;
})();
var statearr_27363_27381 = state_27354__$1;
(statearr_27363_27381[(2)] = null);

(statearr_27363_27381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (9))){
var inst_27338 = (state_27354[(9)]);
var inst_27340 = (state_27354[(10)]);
var inst_27342 = inst_27340.call(null,inst_27338);
var state_27354__$1 = state_27354;
var statearr_27364_27382 = state_27354__$1;
(statearr_27364_27382[(2)] = inst_27342);

(statearr_27364_27382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (5))){
var inst_27334 = (state_27354[(7)]);
var inst_27336 = figwheel.client.file_reloading.blocking_load.call(null,inst_27334);
var state_27354__$1 = state_27354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27354__$1,(8),inst_27336);
} else {
if((state_val_27355 === (10))){
var inst_27338 = (state_27354[(9)]);
var inst_27344 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27338);
var state_27354__$1 = state_27354;
var statearr_27365_27383 = state_27354__$1;
(statearr_27365_27383[(2)] = inst_27344);

(statearr_27365_27383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27355 === (8))){
var inst_27340 = (state_27354[(10)]);
var inst_27334 = (state_27354[(7)]);
var inst_27338 = (state_27354[(2)]);
var inst_27339 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27340__$1 = cljs.core.get.call(null,inst_27339,inst_27334);
var state_27354__$1 = (function (){var statearr_27366 = state_27354;
(statearr_27366[(9)] = inst_27338);

(statearr_27366[(10)] = inst_27340__$1);

return statearr_27366;
})();
if(cljs.core.truth_(inst_27340__$1)){
var statearr_27367_27384 = state_27354__$1;
(statearr_27367_27384[(1)] = (9));

} else {
var statearr_27368_27385 = state_27354__$1;
(statearr_27368_27385[(1)] = (10));

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
});})(c__24292__auto__))
;
return ((function (switch__24180__auto__,c__24292__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24181__auto__ = null;
var figwheel$client$file_reloading$state_machine__24181__auto____0 = (function (){
var statearr_27372 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27372[(0)] = figwheel$client$file_reloading$state_machine__24181__auto__);

(statearr_27372[(1)] = (1));

return statearr_27372;
});
var figwheel$client$file_reloading$state_machine__24181__auto____1 = (function (state_27354){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_27354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e27373){if((e27373 instanceof Object)){
var ex__24184__auto__ = e27373;
var statearr_27374_27386 = state_27354;
(statearr_27374_27386[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27387 = state_27354;
state_27354 = G__27387;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24181__auto__ = function(state_27354){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24181__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24181__auto____1.call(this,state_27354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24181__auto____0;
figwheel$client$file_reloading$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24181__auto____1;
return figwheel$client$file_reloading$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto__))
})();
var state__24294__auto__ = (function (){var statearr_27375 = f__24293__auto__.call(null);
(statearr_27375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto__);

return statearr_27375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto__))
);

return c__24292__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27388,callback){
var map__27391 = p__27388;
var map__27391__$1 = ((((!((map__27391 == null)))?((((map__27391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27391):map__27391);
var file_msg = map__27391__$1;
var namespace = cljs.core.get.call(null,map__27391__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27391,map__27391__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27391,map__27391__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27393){
var map__27396 = p__27393;
var map__27396__$1 = ((((!((map__27396 == null)))?((((map__27396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27396):map__27396);
var file_msg = map__27396__$1;
var namespace = cljs.core.get.call(null,map__27396__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27398,callback){
var map__27401 = p__27398;
var map__27401__$1 = ((((!((map__27401 == null)))?((((map__27401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27401):map__27401);
var file_msg = map__27401__$1;
var request_url = cljs.core.get.call(null,map__27401__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27401__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24292__auto___27489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___27489,out){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___27489,out){
return (function (state_27471){
var state_val_27472 = (state_27471[(1)]);
if((state_val_27472 === (1))){
var inst_27449 = cljs.core.nth.call(null,files,(0),null);
var inst_27450 = cljs.core.nthnext.call(null,files,(1));
var inst_27451 = files;
var state_27471__$1 = (function (){var statearr_27473 = state_27471;
(statearr_27473[(7)] = inst_27449);

(statearr_27473[(8)] = inst_27450);

(statearr_27473[(9)] = inst_27451);

return statearr_27473;
})();
var statearr_27474_27490 = state_27471__$1;
(statearr_27474_27490[(2)] = null);

(statearr_27474_27490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (2))){
var inst_27451 = (state_27471[(9)]);
var inst_27454 = (state_27471[(10)]);
var inst_27454__$1 = cljs.core.nth.call(null,inst_27451,(0),null);
var inst_27455 = cljs.core.nthnext.call(null,inst_27451,(1));
var inst_27456 = (inst_27454__$1 == null);
var inst_27457 = cljs.core.not.call(null,inst_27456);
var state_27471__$1 = (function (){var statearr_27475 = state_27471;
(statearr_27475[(11)] = inst_27455);

(statearr_27475[(10)] = inst_27454__$1);

return statearr_27475;
})();
if(inst_27457){
var statearr_27476_27491 = state_27471__$1;
(statearr_27476_27491[(1)] = (4));

} else {
var statearr_27477_27492 = state_27471__$1;
(statearr_27477_27492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (3))){
var inst_27469 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27471__$1,inst_27469);
} else {
if((state_val_27472 === (4))){
var inst_27454 = (state_27471[(10)]);
var inst_27459 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27454);
var state_27471__$1 = state_27471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27471__$1,(7),inst_27459);
} else {
if((state_val_27472 === (5))){
var inst_27465 = cljs.core.async.close_BANG_.call(null,out);
var state_27471__$1 = state_27471;
var statearr_27478_27493 = state_27471__$1;
(statearr_27478_27493[(2)] = inst_27465);

(statearr_27478_27493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (6))){
var inst_27467 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
var statearr_27479_27494 = state_27471__$1;
(statearr_27479_27494[(2)] = inst_27467);

(statearr_27479_27494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (7))){
var inst_27455 = (state_27471[(11)]);
var inst_27461 = (state_27471[(2)]);
var inst_27462 = cljs.core.async.put_BANG_.call(null,out,inst_27461);
var inst_27451 = inst_27455;
var state_27471__$1 = (function (){var statearr_27480 = state_27471;
(statearr_27480[(9)] = inst_27451);

(statearr_27480[(12)] = inst_27462);

return statearr_27480;
})();
var statearr_27481_27495 = state_27471__$1;
(statearr_27481_27495[(2)] = null);

(statearr_27481_27495[(1)] = (2));


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
});})(c__24292__auto___27489,out))
;
return ((function (switch__24180__auto__,c__24292__auto___27489,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto____0 = (function (){
var statearr_27485 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27485[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto__);

(statearr_27485[(1)] = (1));

return statearr_27485;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto____1 = (function (state_27471){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_27471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e27486){if((e27486 instanceof Object)){
var ex__24184__auto__ = e27486;
var statearr_27487_27496 = state_27471;
(statearr_27487_27496[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27497 = state_27471;
state_27471 = G__27497;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto__ = function(state_27471){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto____1.call(this,state_27471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___27489,out))
})();
var state__24294__auto__ = (function (){var statearr_27488 = f__24293__auto__.call(null);
(statearr_27488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___27489);

return statearr_27488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___27489,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27498,opts){
var map__27502 = p__27498;
var map__27502__$1 = ((((!((map__27502 == null)))?((((map__27502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27502):map__27502);
var eval_body__$1 = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27504){var e = e27504;
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
return (function (p1__27505_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27505_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27510){
var vec__27511 = p__27510;
var k = cljs.core.nth.call(null,vec__27511,(0),null);
var v = cljs.core.nth.call(null,vec__27511,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27512){
var vec__27513 = p__27512;
var k = cljs.core.nth.call(null,vec__27513,(0),null);
var v = cljs.core.nth.call(null,vec__27513,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27517,p__27518){
var map__27765 = p__27517;
var map__27765__$1 = ((((!((map__27765 == null)))?((((map__27765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27765):map__27765);
var opts = map__27765__$1;
var before_jsload = cljs.core.get.call(null,map__27765__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27765__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27765__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27766 = p__27518;
var map__27766__$1 = ((((!((map__27766 == null)))?((((map__27766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27766):map__27766);
var msg = map__27766__$1;
var files = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27919){
var state_val_27920 = (state_27919[(1)]);
if((state_val_27920 === (7))){
var inst_27781 = (state_27919[(7)]);
var inst_27780 = (state_27919[(8)]);
var inst_27782 = (state_27919[(9)]);
var inst_27783 = (state_27919[(10)]);
var inst_27788 = cljs.core._nth.call(null,inst_27781,inst_27783);
var inst_27789 = figwheel.client.file_reloading.eval_body.call(null,inst_27788,opts);
var inst_27790 = (inst_27783 + (1));
var tmp27921 = inst_27781;
var tmp27922 = inst_27780;
var tmp27923 = inst_27782;
var inst_27780__$1 = tmp27922;
var inst_27781__$1 = tmp27921;
var inst_27782__$1 = tmp27923;
var inst_27783__$1 = inst_27790;
var state_27919__$1 = (function (){var statearr_27924 = state_27919;
(statearr_27924[(7)] = inst_27781__$1);

(statearr_27924[(8)] = inst_27780__$1);

(statearr_27924[(11)] = inst_27789);

(statearr_27924[(9)] = inst_27782__$1);

(statearr_27924[(10)] = inst_27783__$1);

return statearr_27924;
})();
var statearr_27925_28011 = state_27919__$1;
(statearr_27925_28011[(2)] = null);

(statearr_27925_28011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (20))){
var inst_27823 = (state_27919[(12)]);
var inst_27831 = figwheel.client.file_reloading.sort_files.call(null,inst_27823);
var state_27919__$1 = state_27919;
var statearr_27926_28012 = state_27919__$1;
(statearr_27926_28012[(2)] = inst_27831);

(statearr_27926_28012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (27))){
var state_27919__$1 = state_27919;
var statearr_27927_28013 = state_27919__$1;
(statearr_27927_28013[(2)] = null);

(statearr_27927_28013[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (1))){
var inst_27772 = (state_27919[(13)]);
var inst_27769 = before_jsload.call(null,files);
var inst_27770 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27771 = (function (){return ((function (inst_27772,inst_27769,inst_27770,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27514_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27514_SHARP_);
});
;})(inst_27772,inst_27769,inst_27770,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27772__$1 = cljs.core.filter.call(null,inst_27771,files);
var inst_27773 = cljs.core.not_empty.call(null,inst_27772__$1);
var state_27919__$1 = (function (){var statearr_27928 = state_27919;
(statearr_27928[(14)] = inst_27770);

(statearr_27928[(15)] = inst_27769);

(statearr_27928[(13)] = inst_27772__$1);

return statearr_27928;
})();
if(cljs.core.truth_(inst_27773)){
var statearr_27929_28014 = state_27919__$1;
(statearr_27929_28014[(1)] = (2));

} else {
var statearr_27930_28015 = state_27919__$1;
(statearr_27930_28015[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (24))){
var state_27919__$1 = state_27919;
var statearr_27931_28016 = state_27919__$1;
(statearr_27931_28016[(2)] = null);

(statearr_27931_28016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (39))){
var inst_27873 = (state_27919[(16)]);
var state_27919__$1 = state_27919;
var statearr_27932_28017 = state_27919__$1;
(statearr_27932_28017[(2)] = inst_27873);

(statearr_27932_28017[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (46))){
var inst_27914 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27933_28018 = state_27919__$1;
(statearr_27933_28018[(2)] = inst_27914);

(statearr_27933_28018[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (4))){
var inst_27817 = (state_27919[(2)]);
var inst_27818 = cljs.core.List.EMPTY;
var inst_27819 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27818);
var inst_27820 = (function (){return ((function (inst_27817,inst_27818,inst_27819,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27515_SHARP_){
var and__16739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27515_SHARP_);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27515_SHARP_));
} else {
return and__16739__auto__;
}
});
;})(inst_27817,inst_27818,inst_27819,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27821 = cljs.core.filter.call(null,inst_27820,files);
var inst_27822 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27823 = cljs.core.concat.call(null,inst_27821,inst_27822);
var state_27919__$1 = (function (){var statearr_27934 = state_27919;
(statearr_27934[(17)] = inst_27817);

(statearr_27934[(12)] = inst_27823);

(statearr_27934[(18)] = inst_27819);

return statearr_27934;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27935_28019 = state_27919__$1;
(statearr_27935_28019[(1)] = (16));

} else {
var statearr_27936_28020 = state_27919__$1;
(statearr_27936_28020[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (15))){
var inst_27807 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27937_28021 = state_27919__$1;
(statearr_27937_28021[(2)] = inst_27807);

(statearr_27937_28021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (21))){
var inst_27833 = (state_27919[(19)]);
var inst_27833__$1 = (state_27919[(2)]);
var inst_27834 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27833__$1);
var state_27919__$1 = (function (){var statearr_27938 = state_27919;
(statearr_27938[(19)] = inst_27833__$1);

return statearr_27938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27919__$1,(22),inst_27834);
} else {
if((state_val_27920 === (31))){
var inst_27917 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27919__$1,inst_27917);
} else {
if((state_val_27920 === (32))){
var inst_27873 = (state_27919[(16)]);
var inst_27878 = inst_27873.cljs$lang$protocol_mask$partition0$;
var inst_27879 = (inst_27878 & (64));
var inst_27880 = inst_27873.cljs$core$ISeq$;
var inst_27881 = (inst_27879) || (inst_27880);
var state_27919__$1 = state_27919;
if(cljs.core.truth_(inst_27881)){
var statearr_27939_28022 = state_27919__$1;
(statearr_27939_28022[(1)] = (35));

} else {
var statearr_27940_28023 = state_27919__$1;
(statearr_27940_28023[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (40))){
var inst_27894 = (state_27919[(20)]);
var inst_27893 = (state_27919[(2)]);
var inst_27894__$1 = cljs.core.get.call(null,inst_27893,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27895 = cljs.core.get.call(null,inst_27893,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27896 = cljs.core.not_empty.call(null,inst_27894__$1);
var state_27919__$1 = (function (){var statearr_27941 = state_27919;
(statearr_27941[(21)] = inst_27895);

(statearr_27941[(20)] = inst_27894__$1);

return statearr_27941;
})();
if(cljs.core.truth_(inst_27896)){
var statearr_27942_28024 = state_27919__$1;
(statearr_27942_28024[(1)] = (41));

} else {
var statearr_27943_28025 = state_27919__$1;
(statearr_27943_28025[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (33))){
var state_27919__$1 = state_27919;
var statearr_27944_28026 = state_27919__$1;
(statearr_27944_28026[(2)] = false);

(statearr_27944_28026[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (13))){
var inst_27793 = (state_27919[(22)]);
var inst_27797 = cljs.core.chunk_first.call(null,inst_27793);
var inst_27798 = cljs.core.chunk_rest.call(null,inst_27793);
var inst_27799 = cljs.core.count.call(null,inst_27797);
var inst_27780 = inst_27798;
var inst_27781 = inst_27797;
var inst_27782 = inst_27799;
var inst_27783 = (0);
var state_27919__$1 = (function (){var statearr_27945 = state_27919;
(statearr_27945[(7)] = inst_27781);

(statearr_27945[(8)] = inst_27780);

(statearr_27945[(9)] = inst_27782);

(statearr_27945[(10)] = inst_27783);

return statearr_27945;
})();
var statearr_27946_28027 = state_27919__$1;
(statearr_27946_28027[(2)] = null);

(statearr_27946_28027[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (22))){
var inst_27841 = (state_27919[(23)]);
var inst_27836 = (state_27919[(24)]);
var inst_27837 = (state_27919[(25)]);
var inst_27833 = (state_27919[(19)]);
var inst_27836__$1 = (state_27919[(2)]);
var inst_27837__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27836__$1);
var inst_27838 = (function (){var all_files = inst_27833;
var res_SINGLEQUOTE_ = inst_27836__$1;
var res = inst_27837__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27841,inst_27836,inst_27837,inst_27833,inst_27836__$1,inst_27837__$1,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27516_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27516_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27841,inst_27836,inst_27837,inst_27833,inst_27836__$1,inst_27837__$1,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27839 = cljs.core.filter.call(null,inst_27838,inst_27836__$1);
var inst_27840 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27841__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27840);
var inst_27842 = cljs.core.not_empty.call(null,inst_27841__$1);
var state_27919__$1 = (function (){var statearr_27947 = state_27919;
(statearr_27947[(23)] = inst_27841__$1);

(statearr_27947[(24)] = inst_27836__$1);

(statearr_27947[(25)] = inst_27837__$1);

(statearr_27947[(26)] = inst_27839);

return statearr_27947;
})();
if(cljs.core.truth_(inst_27842)){
var statearr_27948_28028 = state_27919__$1;
(statearr_27948_28028[(1)] = (23));

} else {
var statearr_27949_28029 = state_27919__$1;
(statearr_27949_28029[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (36))){
var state_27919__$1 = state_27919;
var statearr_27950_28030 = state_27919__$1;
(statearr_27950_28030[(2)] = false);

(statearr_27950_28030[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (41))){
var inst_27894 = (state_27919[(20)]);
var inst_27898 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27899 = cljs.core.map.call(null,inst_27898,inst_27894);
var inst_27900 = cljs.core.pr_str.call(null,inst_27899);
var inst_27901 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27900)].join('');
var inst_27902 = figwheel.client.utils.log.call(null,inst_27901);
var state_27919__$1 = state_27919;
var statearr_27951_28031 = state_27919__$1;
(statearr_27951_28031[(2)] = inst_27902);

(statearr_27951_28031[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (43))){
var inst_27895 = (state_27919[(21)]);
var inst_27905 = (state_27919[(2)]);
var inst_27906 = cljs.core.not_empty.call(null,inst_27895);
var state_27919__$1 = (function (){var statearr_27952 = state_27919;
(statearr_27952[(27)] = inst_27905);

return statearr_27952;
})();
if(cljs.core.truth_(inst_27906)){
var statearr_27953_28032 = state_27919__$1;
(statearr_27953_28032[(1)] = (44));

} else {
var statearr_27954_28033 = state_27919__$1;
(statearr_27954_28033[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (29))){
var inst_27841 = (state_27919[(23)]);
var inst_27836 = (state_27919[(24)]);
var inst_27837 = (state_27919[(25)]);
var inst_27833 = (state_27919[(19)]);
var inst_27873 = (state_27919[(16)]);
var inst_27839 = (state_27919[(26)]);
var inst_27869 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27872 = (function (){var all_files = inst_27833;
var res_SINGLEQUOTE_ = inst_27836;
var res = inst_27837;
var files_not_loaded = inst_27839;
var dependencies_that_loaded = inst_27841;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27841,inst_27836,inst_27837,inst_27833,inst_27873,inst_27839,inst_27869,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27871){
var map__27955 = p__27871;
var map__27955__$1 = ((((!((map__27955 == null)))?((((map__27955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27955):map__27955);
var namespace = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27841,inst_27836,inst_27837,inst_27833,inst_27873,inst_27839,inst_27869,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27873__$1 = cljs.core.group_by.call(null,inst_27872,inst_27839);
var inst_27875 = (inst_27873__$1 == null);
var inst_27876 = cljs.core.not.call(null,inst_27875);
var state_27919__$1 = (function (){var statearr_27957 = state_27919;
(statearr_27957[(28)] = inst_27869);

(statearr_27957[(16)] = inst_27873__$1);

return statearr_27957;
})();
if(inst_27876){
var statearr_27958_28034 = state_27919__$1;
(statearr_27958_28034[(1)] = (32));

} else {
var statearr_27959_28035 = state_27919__$1;
(statearr_27959_28035[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (44))){
var inst_27895 = (state_27919[(21)]);
var inst_27908 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27895);
var inst_27909 = cljs.core.pr_str.call(null,inst_27908);
var inst_27910 = [cljs.core.str("not required: "),cljs.core.str(inst_27909)].join('');
var inst_27911 = figwheel.client.utils.log.call(null,inst_27910);
var state_27919__$1 = state_27919;
var statearr_27960_28036 = state_27919__$1;
(statearr_27960_28036[(2)] = inst_27911);

(statearr_27960_28036[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (6))){
var inst_27814 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27961_28037 = state_27919__$1;
(statearr_27961_28037[(2)] = inst_27814);

(statearr_27961_28037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (28))){
var inst_27839 = (state_27919[(26)]);
var inst_27866 = (state_27919[(2)]);
var inst_27867 = cljs.core.not_empty.call(null,inst_27839);
var state_27919__$1 = (function (){var statearr_27962 = state_27919;
(statearr_27962[(29)] = inst_27866);

return statearr_27962;
})();
if(cljs.core.truth_(inst_27867)){
var statearr_27963_28038 = state_27919__$1;
(statearr_27963_28038[(1)] = (29));

} else {
var statearr_27964_28039 = state_27919__$1;
(statearr_27964_28039[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (25))){
var inst_27837 = (state_27919[(25)]);
var inst_27853 = (state_27919[(2)]);
var inst_27854 = cljs.core.not_empty.call(null,inst_27837);
var state_27919__$1 = (function (){var statearr_27965 = state_27919;
(statearr_27965[(30)] = inst_27853);

return statearr_27965;
})();
if(cljs.core.truth_(inst_27854)){
var statearr_27966_28040 = state_27919__$1;
(statearr_27966_28040[(1)] = (26));

} else {
var statearr_27967_28041 = state_27919__$1;
(statearr_27967_28041[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (34))){
var inst_27888 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
if(cljs.core.truth_(inst_27888)){
var statearr_27968_28042 = state_27919__$1;
(statearr_27968_28042[(1)] = (38));

} else {
var statearr_27969_28043 = state_27919__$1;
(statearr_27969_28043[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (17))){
var state_27919__$1 = state_27919;
var statearr_27970_28044 = state_27919__$1;
(statearr_27970_28044[(2)] = recompile_dependents);

(statearr_27970_28044[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (3))){
var state_27919__$1 = state_27919;
var statearr_27971_28045 = state_27919__$1;
(statearr_27971_28045[(2)] = null);

(statearr_27971_28045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (12))){
var inst_27810 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27972_28046 = state_27919__$1;
(statearr_27972_28046[(2)] = inst_27810);

(statearr_27972_28046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (2))){
var inst_27772 = (state_27919[(13)]);
var inst_27779 = cljs.core.seq.call(null,inst_27772);
var inst_27780 = inst_27779;
var inst_27781 = null;
var inst_27782 = (0);
var inst_27783 = (0);
var state_27919__$1 = (function (){var statearr_27973 = state_27919;
(statearr_27973[(7)] = inst_27781);

(statearr_27973[(8)] = inst_27780);

(statearr_27973[(9)] = inst_27782);

(statearr_27973[(10)] = inst_27783);

return statearr_27973;
})();
var statearr_27974_28047 = state_27919__$1;
(statearr_27974_28047[(2)] = null);

(statearr_27974_28047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (23))){
var inst_27841 = (state_27919[(23)]);
var inst_27836 = (state_27919[(24)]);
var inst_27837 = (state_27919[(25)]);
var inst_27833 = (state_27919[(19)]);
var inst_27839 = (state_27919[(26)]);
var inst_27844 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27846 = (function (){var all_files = inst_27833;
var res_SINGLEQUOTE_ = inst_27836;
var res = inst_27837;
var files_not_loaded = inst_27839;
var dependencies_that_loaded = inst_27841;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27841,inst_27836,inst_27837,inst_27833,inst_27839,inst_27844,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27845){
var map__27975 = p__27845;
var map__27975__$1 = ((((!((map__27975 == null)))?((((map__27975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27975):map__27975);
var request_url = cljs.core.get.call(null,map__27975__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27841,inst_27836,inst_27837,inst_27833,inst_27839,inst_27844,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27847 = cljs.core.reverse.call(null,inst_27841);
var inst_27848 = cljs.core.map.call(null,inst_27846,inst_27847);
var inst_27849 = cljs.core.pr_str.call(null,inst_27848);
var inst_27850 = figwheel.client.utils.log.call(null,inst_27849);
var state_27919__$1 = (function (){var statearr_27977 = state_27919;
(statearr_27977[(31)] = inst_27844);

return statearr_27977;
})();
var statearr_27978_28048 = state_27919__$1;
(statearr_27978_28048[(2)] = inst_27850);

(statearr_27978_28048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (35))){
var state_27919__$1 = state_27919;
var statearr_27979_28049 = state_27919__$1;
(statearr_27979_28049[(2)] = true);

(statearr_27979_28049[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (19))){
var inst_27823 = (state_27919[(12)]);
var inst_27829 = figwheel.client.file_reloading.expand_files.call(null,inst_27823);
var state_27919__$1 = state_27919;
var statearr_27980_28050 = state_27919__$1;
(statearr_27980_28050[(2)] = inst_27829);

(statearr_27980_28050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (11))){
var state_27919__$1 = state_27919;
var statearr_27981_28051 = state_27919__$1;
(statearr_27981_28051[(2)] = null);

(statearr_27981_28051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (9))){
var inst_27812 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_27982_28052 = state_27919__$1;
(statearr_27982_28052[(2)] = inst_27812);

(statearr_27982_28052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (5))){
var inst_27782 = (state_27919[(9)]);
var inst_27783 = (state_27919[(10)]);
var inst_27785 = (inst_27783 < inst_27782);
var inst_27786 = inst_27785;
var state_27919__$1 = state_27919;
if(cljs.core.truth_(inst_27786)){
var statearr_27983_28053 = state_27919__$1;
(statearr_27983_28053[(1)] = (7));

} else {
var statearr_27984_28054 = state_27919__$1;
(statearr_27984_28054[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (14))){
var inst_27793 = (state_27919[(22)]);
var inst_27802 = cljs.core.first.call(null,inst_27793);
var inst_27803 = figwheel.client.file_reloading.eval_body.call(null,inst_27802,opts);
var inst_27804 = cljs.core.next.call(null,inst_27793);
var inst_27780 = inst_27804;
var inst_27781 = null;
var inst_27782 = (0);
var inst_27783 = (0);
var state_27919__$1 = (function (){var statearr_27985 = state_27919;
(statearr_27985[(7)] = inst_27781);

(statearr_27985[(32)] = inst_27803);

(statearr_27985[(8)] = inst_27780);

(statearr_27985[(9)] = inst_27782);

(statearr_27985[(10)] = inst_27783);

return statearr_27985;
})();
var statearr_27986_28055 = state_27919__$1;
(statearr_27986_28055[(2)] = null);

(statearr_27986_28055[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (45))){
var state_27919__$1 = state_27919;
var statearr_27987_28056 = state_27919__$1;
(statearr_27987_28056[(2)] = null);

(statearr_27987_28056[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (26))){
var inst_27841 = (state_27919[(23)]);
var inst_27836 = (state_27919[(24)]);
var inst_27837 = (state_27919[(25)]);
var inst_27833 = (state_27919[(19)]);
var inst_27839 = (state_27919[(26)]);
var inst_27856 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27858 = (function (){var all_files = inst_27833;
var res_SINGLEQUOTE_ = inst_27836;
var res = inst_27837;
var files_not_loaded = inst_27839;
var dependencies_that_loaded = inst_27841;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27841,inst_27836,inst_27837,inst_27833,inst_27839,inst_27856,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27857){
var map__27988 = p__27857;
var map__27988__$1 = ((((!((map__27988 == null)))?((((map__27988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27988):map__27988);
var namespace = cljs.core.get.call(null,map__27988__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27988__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27841,inst_27836,inst_27837,inst_27833,inst_27839,inst_27856,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27859 = cljs.core.map.call(null,inst_27858,inst_27837);
var inst_27860 = cljs.core.pr_str.call(null,inst_27859);
var inst_27861 = figwheel.client.utils.log.call(null,inst_27860);
var inst_27862 = (function (){var all_files = inst_27833;
var res_SINGLEQUOTE_ = inst_27836;
var res = inst_27837;
var files_not_loaded = inst_27839;
var dependencies_that_loaded = inst_27841;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27841,inst_27836,inst_27837,inst_27833,inst_27839,inst_27856,inst_27858,inst_27859,inst_27860,inst_27861,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27841,inst_27836,inst_27837,inst_27833,inst_27839,inst_27856,inst_27858,inst_27859,inst_27860,inst_27861,state_val_27920,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27863 = setTimeout(inst_27862,(10));
var state_27919__$1 = (function (){var statearr_27990 = state_27919;
(statearr_27990[(33)] = inst_27856);

(statearr_27990[(34)] = inst_27861);

return statearr_27990;
})();
var statearr_27991_28057 = state_27919__$1;
(statearr_27991_28057[(2)] = inst_27863);

(statearr_27991_28057[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (16))){
var state_27919__$1 = state_27919;
var statearr_27992_28058 = state_27919__$1;
(statearr_27992_28058[(2)] = reload_dependents);

(statearr_27992_28058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (38))){
var inst_27873 = (state_27919[(16)]);
var inst_27890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27873);
var state_27919__$1 = state_27919;
var statearr_27993_28059 = state_27919__$1;
(statearr_27993_28059[(2)] = inst_27890);

(statearr_27993_28059[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (30))){
var state_27919__$1 = state_27919;
var statearr_27994_28060 = state_27919__$1;
(statearr_27994_28060[(2)] = null);

(statearr_27994_28060[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (10))){
var inst_27793 = (state_27919[(22)]);
var inst_27795 = cljs.core.chunked_seq_QMARK_.call(null,inst_27793);
var state_27919__$1 = state_27919;
if(inst_27795){
var statearr_27995_28061 = state_27919__$1;
(statearr_27995_28061[(1)] = (13));

} else {
var statearr_27996_28062 = state_27919__$1;
(statearr_27996_28062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (18))){
var inst_27827 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
if(cljs.core.truth_(inst_27827)){
var statearr_27997_28063 = state_27919__$1;
(statearr_27997_28063[(1)] = (19));

} else {
var statearr_27998_28064 = state_27919__$1;
(statearr_27998_28064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (42))){
var state_27919__$1 = state_27919;
var statearr_27999_28065 = state_27919__$1;
(statearr_27999_28065[(2)] = null);

(statearr_27999_28065[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (37))){
var inst_27885 = (state_27919[(2)]);
var state_27919__$1 = state_27919;
var statearr_28000_28066 = state_27919__$1;
(statearr_28000_28066[(2)] = inst_27885);

(statearr_28000_28066[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27920 === (8))){
var inst_27793 = (state_27919[(22)]);
var inst_27780 = (state_27919[(8)]);
var inst_27793__$1 = cljs.core.seq.call(null,inst_27780);
var state_27919__$1 = (function (){var statearr_28001 = state_27919;
(statearr_28001[(22)] = inst_27793__$1);

return statearr_28001;
})();
if(inst_27793__$1){
var statearr_28002_28067 = state_27919__$1;
(statearr_28002_28067[(1)] = (10));

} else {
var statearr_28003_28068 = state_27919__$1;
(statearr_28003_28068[(1)] = (11));

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
});})(c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24180__auto__,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto____0 = (function (){
var statearr_28007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28007[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto__);

(statearr_28007[(1)] = (1));

return statearr_28007;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto____1 = (function (state_27919){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_27919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e28008){if((e28008 instanceof Object)){
var ex__24184__auto__ = e28008;
var statearr_28009_28069 = state_27919;
(statearr_28009_28069[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28070 = state_27919;
state_27919 = G__28070;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto__ = function(state_27919){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto____1.call(this,state_27919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24294__auto__ = (function (){var statearr_28010 = f__24293__auto__.call(null);
(statearr_28010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto__);

return statearr_28010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto__,map__27765,map__27765__$1,opts,before_jsload,on_jsload,reload_dependents,map__27766,map__27766__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24292__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28073,link){
var map__28076 = p__28073;
var map__28076__$1 = ((((!((map__28076 == null)))?((((map__28076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28076):map__28076);
var file = cljs.core.get.call(null,map__28076__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28076,map__28076__$1,file){
return (function (p1__28071_SHARP_,p2__28072_SHARP_){
if(cljs.core._EQ_.call(null,p1__28071_SHARP_,p2__28072_SHARP_)){
return p1__28071_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28076,map__28076__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28082){
var map__28083 = p__28082;
var map__28083__$1 = ((((!((map__28083 == null)))?((((map__28083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28083):map__28083);
var match_length = cljs.core.get.call(null,map__28083__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28083__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28078_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28078_SHARP_);
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
var args28085 = [];
var len__17809__auto___28088 = arguments.length;
var i__17810__auto___28089 = (0);
while(true){
if((i__17810__auto___28089 < len__17809__auto___28088)){
args28085.push((arguments[i__17810__auto___28089]));

var G__28090 = (i__17810__auto___28089 + (1));
i__17810__auto___28089 = G__28090;
continue;
} else {
}
break;
}

var G__28087 = args28085.length;
switch (G__28087) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28085.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28092_SHARP_,p2__28093_SHARP_){
return cljs.core.assoc.call(null,p1__28092_SHARP_,cljs.core.get.call(null,p2__28093_SHARP_,key),p2__28093_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28094){
var map__28097 = p__28094;
var map__28097__$1 = ((((!((map__28097 == null)))?((((map__28097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28097):map__28097);
var f_data = map__28097__$1;
var file = cljs.core.get.call(null,map__28097__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28099,files_msg){
var map__28106 = p__28099;
var map__28106__$1 = ((((!((map__28106 == null)))?((((map__28106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28106):map__28106);
var opts = map__28106__$1;
var on_cssload = cljs.core.get.call(null,map__28106__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28108_28112 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28109_28113 = null;
var count__28110_28114 = (0);
var i__28111_28115 = (0);
while(true){
if((i__28111_28115 < count__28110_28114)){
var f_28116 = cljs.core._nth.call(null,chunk__28109_28113,i__28111_28115);
figwheel.client.file_reloading.reload_css_file.call(null,f_28116);

var G__28117 = seq__28108_28112;
var G__28118 = chunk__28109_28113;
var G__28119 = count__28110_28114;
var G__28120 = (i__28111_28115 + (1));
seq__28108_28112 = G__28117;
chunk__28109_28113 = G__28118;
count__28110_28114 = G__28119;
i__28111_28115 = G__28120;
continue;
} else {
var temp__4425__auto___28121 = cljs.core.seq.call(null,seq__28108_28112);
if(temp__4425__auto___28121){
var seq__28108_28122__$1 = temp__4425__auto___28121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28108_28122__$1)){
var c__17554__auto___28123 = cljs.core.chunk_first.call(null,seq__28108_28122__$1);
var G__28124 = cljs.core.chunk_rest.call(null,seq__28108_28122__$1);
var G__28125 = c__17554__auto___28123;
var G__28126 = cljs.core.count.call(null,c__17554__auto___28123);
var G__28127 = (0);
seq__28108_28112 = G__28124;
chunk__28109_28113 = G__28125;
count__28110_28114 = G__28126;
i__28111_28115 = G__28127;
continue;
} else {
var f_28128 = cljs.core.first.call(null,seq__28108_28122__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28128);

var G__28129 = cljs.core.next.call(null,seq__28108_28122__$1);
var G__28130 = null;
var G__28131 = (0);
var G__28132 = (0);
seq__28108_28112 = G__28129;
chunk__28109_28113 = G__28130;
count__28110_28114 = G__28131;
i__28111_28115 = G__28132;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28106,map__28106__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28106,map__28106__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1452529996451