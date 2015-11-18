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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26716_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26716_SHARP_));
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
var seq__26721 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26722 = null;
var count__26723 = (0);
var i__26724 = (0);
while(true){
if((i__26724 < count__26723)){
var n = cljs.core._nth.call(null,chunk__26722,i__26724);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26725 = seq__26721;
var G__26726 = chunk__26722;
var G__26727 = count__26723;
var G__26728 = (i__26724 + (1));
seq__26721 = G__26725;
chunk__26722 = G__26726;
count__26723 = G__26727;
i__26724 = G__26728;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26721);
if(temp__4425__auto__){
var seq__26721__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26721__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__26721__$1);
var G__26729 = cljs.core.chunk_rest.call(null,seq__26721__$1);
var G__26730 = c__17554__auto__;
var G__26731 = cljs.core.count.call(null,c__17554__auto__);
var G__26732 = (0);
seq__26721 = G__26729;
chunk__26722 = G__26730;
count__26723 = G__26731;
i__26724 = G__26732;
continue;
} else {
var n = cljs.core.first.call(null,seq__26721__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26733 = cljs.core.next.call(null,seq__26721__$1);
var G__26734 = null;
var G__26735 = (0);
var G__26736 = (0);
seq__26721 = G__26733;
chunk__26722 = G__26734;
count__26723 = G__26735;
i__26724 = G__26736;
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

var seq__26775_26782 = cljs.core.seq.call(null,deps);
var chunk__26776_26783 = null;
var count__26777_26784 = (0);
var i__26778_26785 = (0);
while(true){
if((i__26778_26785 < count__26777_26784)){
var dep_26786 = cljs.core._nth.call(null,chunk__26776_26783,i__26778_26785);
topo_sort_helper_STAR_.call(null,dep_26786,(depth + (1)),state);

var G__26787 = seq__26775_26782;
var G__26788 = chunk__26776_26783;
var G__26789 = count__26777_26784;
var G__26790 = (i__26778_26785 + (1));
seq__26775_26782 = G__26787;
chunk__26776_26783 = G__26788;
count__26777_26784 = G__26789;
i__26778_26785 = G__26790;
continue;
} else {
var temp__4425__auto___26791 = cljs.core.seq.call(null,seq__26775_26782);
if(temp__4425__auto___26791){
var seq__26775_26792__$1 = temp__4425__auto___26791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26775_26792__$1)){
var c__17554__auto___26793 = cljs.core.chunk_first.call(null,seq__26775_26792__$1);
var G__26794 = cljs.core.chunk_rest.call(null,seq__26775_26792__$1);
var G__26795 = c__17554__auto___26793;
var G__26796 = cljs.core.count.call(null,c__17554__auto___26793);
var G__26797 = (0);
seq__26775_26782 = G__26794;
chunk__26776_26783 = G__26795;
count__26777_26784 = G__26796;
i__26778_26785 = G__26797;
continue;
} else {
var dep_26798 = cljs.core.first.call(null,seq__26775_26792__$1);
topo_sort_helper_STAR_.call(null,dep_26798,(depth + (1)),state);

var G__26799 = cljs.core.next.call(null,seq__26775_26792__$1);
var G__26800 = null;
var G__26801 = (0);
var G__26802 = (0);
seq__26775_26782 = G__26799;
chunk__26776_26783 = G__26800;
count__26777_26784 = G__26801;
i__26778_26785 = G__26802;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26779){
var vec__26781 = p__26779;
var x = cljs.core.nth.call(null,vec__26781,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26781,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26781,x,xs,get_deps__$1){
return (function (p1__26737_SHARP_){
return clojure.set.difference.call(null,p1__26737_SHARP_,x);
});})(vec__26781,x,xs,get_deps__$1))
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
var seq__26815 = cljs.core.seq.call(null,provides);
var chunk__26816 = null;
var count__26817 = (0);
var i__26818 = (0);
while(true){
if((i__26818 < count__26817)){
var prov = cljs.core._nth.call(null,chunk__26816,i__26818);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26819_26827 = cljs.core.seq.call(null,requires);
var chunk__26820_26828 = null;
var count__26821_26829 = (0);
var i__26822_26830 = (0);
while(true){
if((i__26822_26830 < count__26821_26829)){
var req_26831 = cljs.core._nth.call(null,chunk__26820_26828,i__26822_26830);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26831,prov);

var G__26832 = seq__26819_26827;
var G__26833 = chunk__26820_26828;
var G__26834 = count__26821_26829;
var G__26835 = (i__26822_26830 + (1));
seq__26819_26827 = G__26832;
chunk__26820_26828 = G__26833;
count__26821_26829 = G__26834;
i__26822_26830 = G__26835;
continue;
} else {
var temp__4425__auto___26836 = cljs.core.seq.call(null,seq__26819_26827);
if(temp__4425__auto___26836){
var seq__26819_26837__$1 = temp__4425__auto___26836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26819_26837__$1)){
var c__17554__auto___26838 = cljs.core.chunk_first.call(null,seq__26819_26837__$1);
var G__26839 = cljs.core.chunk_rest.call(null,seq__26819_26837__$1);
var G__26840 = c__17554__auto___26838;
var G__26841 = cljs.core.count.call(null,c__17554__auto___26838);
var G__26842 = (0);
seq__26819_26827 = G__26839;
chunk__26820_26828 = G__26840;
count__26821_26829 = G__26841;
i__26822_26830 = G__26842;
continue;
} else {
var req_26843 = cljs.core.first.call(null,seq__26819_26837__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26843,prov);

var G__26844 = cljs.core.next.call(null,seq__26819_26837__$1);
var G__26845 = null;
var G__26846 = (0);
var G__26847 = (0);
seq__26819_26827 = G__26844;
chunk__26820_26828 = G__26845;
count__26821_26829 = G__26846;
i__26822_26830 = G__26847;
continue;
}
} else {
}
}
break;
}

var G__26848 = seq__26815;
var G__26849 = chunk__26816;
var G__26850 = count__26817;
var G__26851 = (i__26818 + (1));
seq__26815 = G__26848;
chunk__26816 = G__26849;
count__26817 = G__26850;
i__26818 = G__26851;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26815);
if(temp__4425__auto__){
var seq__26815__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26815__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__26815__$1);
var G__26852 = cljs.core.chunk_rest.call(null,seq__26815__$1);
var G__26853 = c__17554__auto__;
var G__26854 = cljs.core.count.call(null,c__17554__auto__);
var G__26855 = (0);
seq__26815 = G__26852;
chunk__26816 = G__26853;
count__26817 = G__26854;
i__26818 = G__26855;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26815__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26823_26856 = cljs.core.seq.call(null,requires);
var chunk__26824_26857 = null;
var count__26825_26858 = (0);
var i__26826_26859 = (0);
while(true){
if((i__26826_26859 < count__26825_26858)){
var req_26860 = cljs.core._nth.call(null,chunk__26824_26857,i__26826_26859);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26860,prov);

var G__26861 = seq__26823_26856;
var G__26862 = chunk__26824_26857;
var G__26863 = count__26825_26858;
var G__26864 = (i__26826_26859 + (1));
seq__26823_26856 = G__26861;
chunk__26824_26857 = G__26862;
count__26825_26858 = G__26863;
i__26826_26859 = G__26864;
continue;
} else {
var temp__4425__auto___26865__$1 = cljs.core.seq.call(null,seq__26823_26856);
if(temp__4425__auto___26865__$1){
var seq__26823_26866__$1 = temp__4425__auto___26865__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26823_26866__$1)){
var c__17554__auto___26867 = cljs.core.chunk_first.call(null,seq__26823_26866__$1);
var G__26868 = cljs.core.chunk_rest.call(null,seq__26823_26866__$1);
var G__26869 = c__17554__auto___26867;
var G__26870 = cljs.core.count.call(null,c__17554__auto___26867);
var G__26871 = (0);
seq__26823_26856 = G__26868;
chunk__26824_26857 = G__26869;
count__26825_26858 = G__26870;
i__26826_26859 = G__26871;
continue;
} else {
var req_26872 = cljs.core.first.call(null,seq__26823_26866__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26872,prov);

var G__26873 = cljs.core.next.call(null,seq__26823_26866__$1);
var G__26874 = null;
var G__26875 = (0);
var G__26876 = (0);
seq__26823_26856 = G__26873;
chunk__26824_26857 = G__26874;
count__26825_26858 = G__26875;
i__26826_26859 = G__26876;
continue;
}
} else {
}
}
break;
}

var G__26877 = cljs.core.next.call(null,seq__26815__$1);
var G__26878 = null;
var G__26879 = (0);
var G__26880 = (0);
seq__26815 = G__26877;
chunk__26816 = G__26878;
count__26817 = G__26879;
i__26818 = G__26880;
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
var seq__26885_26889 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26886_26890 = null;
var count__26887_26891 = (0);
var i__26888_26892 = (0);
while(true){
if((i__26888_26892 < count__26887_26891)){
var ns_26893 = cljs.core._nth.call(null,chunk__26886_26890,i__26888_26892);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26893);

var G__26894 = seq__26885_26889;
var G__26895 = chunk__26886_26890;
var G__26896 = count__26887_26891;
var G__26897 = (i__26888_26892 + (1));
seq__26885_26889 = G__26894;
chunk__26886_26890 = G__26895;
count__26887_26891 = G__26896;
i__26888_26892 = G__26897;
continue;
} else {
var temp__4425__auto___26898 = cljs.core.seq.call(null,seq__26885_26889);
if(temp__4425__auto___26898){
var seq__26885_26899__$1 = temp__4425__auto___26898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26885_26899__$1)){
var c__17554__auto___26900 = cljs.core.chunk_first.call(null,seq__26885_26899__$1);
var G__26901 = cljs.core.chunk_rest.call(null,seq__26885_26899__$1);
var G__26902 = c__17554__auto___26900;
var G__26903 = cljs.core.count.call(null,c__17554__auto___26900);
var G__26904 = (0);
seq__26885_26889 = G__26901;
chunk__26886_26890 = G__26902;
count__26887_26891 = G__26903;
i__26888_26892 = G__26904;
continue;
} else {
var ns_26905 = cljs.core.first.call(null,seq__26885_26899__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26905);

var G__26906 = cljs.core.next.call(null,seq__26885_26899__$1);
var G__26907 = null;
var G__26908 = (0);
var G__26909 = (0);
seq__26885_26889 = G__26906;
chunk__26886_26890 = G__26907;
count__26887_26891 = G__26908;
i__26888_26892 = G__26909;
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
var G__26910__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26911__i = 0, G__26911__a = new Array(arguments.length -  0);
while (G__26911__i < G__26911__a.length) {G__26911__a[G__26911__i] = arguments[G__26911__i + 0]; ++G__26911__i;}
  args = new cljs.core.IndexedSeq(G__26911__a,0);
} 
return G__26910__delegate.call(this,args);};
G__26910.cljs$lang$maxFixedArity = 0;
G__26910.cljs$lang$applyTo = (function (arglist__26912){
var args = cljs.core.seq(arglist__26912);
return G__26910__delegate(args);
});
G__26910.cljs$core$IFn$_invoke$arity$variadic = G__26910__delegate;
return G__26910;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26914 = cljs.core._EQ_;
var expr__26915 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26914.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26915))){
var path_parts = ((function (pred__26914,expr__26915){
return (function (p1__26913_SHARP_){
return clojure.string.split.call(null,p1__26913_SHARP_,/[\/\\]/);
});})(pred__26914,expr__26915))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26914,expr__26915){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26917){if((e26917 instanceof Error)){
var e = e26917;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26917;

}
}})());
});
;})(path_parts,sep,root,pred__26914,expr__26915))
} else {
if(cljs.core.truth_(pred__26914.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26915))){
return ((function (pred__26914,expr__26915){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26914,expr__26915){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26914,expr__26915))
);

return deferred.addErrback(((function (deferred,pred__26914,expr__26915){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26914,expr__26915))
);
});
;})(pred__26914,expr__26915))
} else {
return ((function (pred__26914,expr__26915){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26914,expr__26915))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26918,callback){
var map__26921 = p__26918;
var map__26921__$1 = ((((!((map__26921 == null)))?((((map__26921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26921):map__26921);
var file_msg = map__26921__$1;
var request_url = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26921,map__26921__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26921,map__26921__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto__){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto__){
return (function (state_26945){
var state_val_26946 = (state_26945[(1)]);
if((state_val_26946 === (7))){
var inst_26941 = (state_26945[(2)]);
var state_26945__$1 = state_26945;
var statearr_26947_26967 = state_26945__$1;
(statearr_26947_26967[(2)] = inst_26941);

(statearr_26947_26967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26946 === (1))){
var state_26945__$1 = state_26945;
var statearr_26948_26968 = state_26945__$1;
(statearr_26948_26968[(2)] = null);

(statearr_26948_26968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26946 === (4))){
var inst_26925 = (state_26945[(7)]);
var inst_26925__$1 = (state_26945[(2)]);
var state_26945__$1 = (function (){var statearr_26949 = state_26945;
(statearr_26949[(7)] = inst_26925__$1);

return statearr_26949;
})();
if(cljs.core.truth_(inst_26925__$1)){
var statearr_26950_26969 = state_26945__$1;
(statearr_26950_26969[(1)] = (5));

} else {
var statearr_26951_26970 = state_26945__$1;
(statearr_26951_26970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26946 === (6))){
var state_26945__$1 = state_26945;
var statearr_26952_26971 = state_26945__$1;
(statearr_26952_26971[(2)] = null);

(statearr_26952_26971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26946 === (3))){
var inst_26943 = (state_26945[(2)]);
var state_26945__$1 = state_26945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26945__$1,inst_26943);
} else {
if((state_val_26946 === (2))){
var state_26945__$1 = state_26945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26945__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26946 === (11))){
var inst_26937 = (state_26945[(2)]);
var state_26945__$1 = (function (){var statearr_26953 = state_26945;
(statearr_26953[(8)] = inst_26937);

return statearr_26953;
})();
var statearr_26954_26972 = state_26945__$1;
(statearr_26954_26972[(2)] = null);

(statearr_26954_26972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26946 === (9))){
var inst_26931 = (state_26945[(9)]);
var inst_26929 = (state_26945[(10)]);
var inst_26933 = inst_26931.call(null,inst_26929);
var state_26945__$1 = state_26945;
var statearr_26955_26973 = state_26945__$1;
(statearr_26955_26973[(2)] = inst_26933);

(statearr_26955_26973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26946 === (5))){
var inst_26925 = (state_26945[(7)]);
var inst_26927 = figwheel.client.file_reloading.blocking_load.call(null,inst_26925);
var state_26945__$1 = state_26945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26945__$1,(8),inst_26927);
} else {
if((state_val_26946 === (10))){
var inst_26929 = (state_26945[(10)]);
var inst_26935 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26929);
var state_26945__$1 = state_26945;
var statearr_26956_26974 = state_26945__$1;
(statearr_26956_26974[(2)] = inst_26935);

(statearr_26956_26974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26946 === (8))){
var inst_26931 = (state_26945[(9)]);
var inst_26925 = (state_26945[(7)]);
var inst_26929 = (state_26945[(2)]);
var inst_26930 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26931__$1 = cljs.core.get.call(null,inst_26930,inst_26925);
var state_26945__$1 = (function (){var statearr_26957 = state_26945;
(statearr_26957[(9)] = inst_26931__$1);

(statearr_26957[(10)] = inst_26929);

return statearr_26957;
})();
if(cljs.core.truth_(inst_26931__$1)){
var statearr_26958_26975 = state_26945__$1;
(statearr_26958_26975[(1)] = (9));

} else {
var statearr_26959_26976 = state_26945__$1;
(statearr_26959_26976[(1)] = (10));

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
});})(c__23883__auto__))
;
return ((function (switch__23771__auto__,c__23883__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23772__auto__ = null;
var figwheel$client$file_reloading$state_machine__23772__auto____0 = (function (){
var statearr_26963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26963[(0)] = figwheel$client$file_reloading$state_machine__23772__auto__);

(statearr_26963[(1)] = (1));

return statearr_26963;
});
var figwheel$client$file_reloading$state_machine__23772__auto____1 = (function (state_26945){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_26945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e26964){if((e26964 instanceof Object)){
var ex__23775__auto__ = e26964;
var statearr_26965_26977 = state_26945;
(statearr_26965_26977[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26978 = state_26945;
state_26945 = G__26978;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23772__auto__ = function(state_26945){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23772__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23772__auto____1.call(this,state_26945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23772__auto____0;
figwheel$client$file_reloading$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23772__auto____1;
return figwheel$client$file_reloading$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto__))
})();
var state__23885__auto__ = (function (){var statearr_26966 = f__23884__auto__.call(null);
(statearr_26966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto__);

return statearr_26966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto__))
);

return c__23883__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26979,callback){
var map__26982 = p__26979;
var map__26982__$1 = ((((!((map__26982 == null)))?((((map__26982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26982):map__26982);
var file_msg = map__26982__$1;
var namespace = cljs.core.get.call(null,map__26982__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26982,map__26982__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26982,map__26982__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26984){
var map__26987 = p__26984;
var map__26987__$1 = ((((!((map__26987 == null)))?((((map__26987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26987):map__26987);
var file_msg = map__26987__$1;
var namespace = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26989,callback){
var map__26992 = p__26989;
var map__26992__$1 = ((((!((map__26992 == null)))?((((map__26992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26992):map__26992);
var file_msg = map__26992__$1;
var request_url = cljs.core.get.call(null,map__26992__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26992__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23883__auto___27080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___27080,out){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___27080,out){
return (function (state_27062){
var state_val_27063 = (state_27062[(1)]);
if((state_val_27063 === (1))){
var inst_27040 = cljs.core.nth.call(null,files,(0),null);
var inst_27041 = cljs.core.nthnext.call(null,files,(1));
var inst_27042 = files;
var state_27062__$1 = (function (){var statearr_27064 = state_27062;
(statearr_27064[(7)] = inst_27042);

(statearr_27064[(8)] = inst_27040);

(statearr_27064[(9)] = inst_27041);

return statearr_27064;
})();
var statearr_27065_27081 = state_27062__$1;
(statearr_27065_27081[(2)] = null);

(statearr_27065_27081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (2))){
var inst_27042 = (state_27062[(7)]);
var inst_27045 = (state_27062[(10)]);
var inst_27045__$1 = cljs.core.nth.call(null,inst_27042,(0),null);
var inst_27046 = cljs.core.nthnext.call(null,inst_27042,(1));
var inst_27047 = (inst_27045__$1 == null);
var inst_27048 = cljs.core.not.call(null,inst_27047);
var state_27062__$1 = (function (){var statearr_27066 = state_27062;
(statearr_27066[(11)] = inst_27046);

(statearr_27066[(10)] = inst_27045__$1);

return statearr_27066;
})();
if(inst_27048){
var statearr_27067_27082 = state_27062__$1;
(statearr_27067_27082[(1)] = (4));

} else {
var statearr_27068_27083 = state_27062__$1;
(statearr_27068_27083[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (3))){
var inst_27060 = (state_27062[(2)]);
var state_27062__$1 = state_27062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27062__$1,inst_27060);
} else {
if((state_val_27063 === (4))){
var inst_27045 = (state_27062[(10)]);
var inst_27050 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27045);
var state_27062__$1 = state_27062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27062__$1,(7),inst_27050);
} else {
if((state_val_27063 === (5))){
var inst_27056 = cljs.core.async.close_BANG_.call(null,out);
var state_27062__$1 = state_27062;
var statearr_27069_27084 = state_27062__$1;
(statearr_27069_27084[(2)] = inst_27056);

(statearr_27069_27084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (6))){
var inst_27058 = (state_27062[(2)]);
var state_27062__$1 = state_27062;
var statearr_27070_27085 = state_27062__$1;
(statearr_27070_27085[(2)] = inst_27058);

(statearr_27070_27085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27063 === (7))){
var inst_27046 = (state_27062[(11)]);
var inst_27052 = (state_27062[(2)]);
var inst_27053 = cljs.core.async.put_BANG_.call(null,out,inst_27052);
var inst_27042 = inst_27046;
var state_27062__$1 = (function (){var statearr_27071 = state_27062;
(statearr_27071[(7)] = inst_27042);

(statearr_27071[(12)] = inst_27053);

return statearr_27071;
})();
var statearr_27072_27086 = state_27062__$1;
(statearr_27072_27086[(2)] = null);

(statearr_27072_27086[(1)] = (2));


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
});})(c__23883__auto___27080,out))
;
return ((function (switch__23771__auto__,c__23883__auto___27080,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto____0 = (function (){
var statearr_27076 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27076[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto__);

(statearr_27076[(1)] = (1));

return statearr_27076;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto____1 = (function (state_27062){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_27062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e27077){if((e27077 instanceof Object)){
var ex__23775__auto__ = e27077;
var statearr_27078_27087 = state_27062;
(statearr_27078_27087[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27088 = state_27062;
state_27062 = G__27088;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto__ = function(state_27062){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto____1.call(this,state_27062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___27080,out))
})();
var state__23885__auto__ = (function (){var statearr_27079 = f__23884__auto__.call(null);
(statearr_27079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___27080);

return statearr_27079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___27080,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27089,opts){
var map__27093 = p__27089;
var map__27093__$1 = ((((!((map__27093 == null)))?((((map__27093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27093):map__27093);
var eval_body__$1 = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27095){var e = e27095;
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
return (function (p1__27096_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27096_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27101){
var vec__27102 = p__27101;
var k = cljs.core.nth.call(null,vec__27102,(0),null);
var v = cljs.core.nth.call(null,vec__27102,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27103){
var vec__27104 = p__27103;
var k = cljs.core.nth.call(null,vec__27104,(0),null);
var v = cljs.core.nth.call(null,vec__27104,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27108,p__27109){
var map__27356 = p__27108;
var map__27356__$1 = ((((!((map__27356 == null)))?((((map__27356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27356):map__27356);
var opts = map__27356__$1;
var before_jsload = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27357 = p__27109;
var map__27357__$1 = ((((!((map__27357 == null)))?((((map__27357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27357):map__27357);
var msg = map__27357__$1;
var files = cljs.core.get.call(null,map__27357__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27357__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27357__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27510){
var state_val_27511 = (state_27510[(1)]);
if((state_val_27511 === (7))){
var inst_27374 = (state_27510[(7)]);
var inst_27373 = (state_27510[(8)]);
var inst_27371 = (state_27510[(9)]);
var inst_27372 = (state_27510[(10)]);
var inst_27379 = cljs.core._nth.call(null,inst_27372,inst_27374);
var inst_27380 = figwheel.client.file_reloading.eval_body.call(null,inst_27379,opts);
var inst_27381 = (inst_27374 + (1));
var tmp27512 = inst_27373;
var tmp27513 = inst_27371;
var tmp27514 = inst_27372;
var inst_27371__$1 = tmp27513;
var inst_27372__$1 = tmp27514;
var inst_27373__$1 = tmp27512;
var inst_27374__$1 = inst_27381;
var state_27510__$1 = (function (){var statearr_27515 = state_27510;
(statearr_27515[(7)] = inst_27374__$1);

(statearr_27515[(8)] = inst_27373__$1);

(statearr_27515[(9)] = inst_27371__$1);

(statearr_27515[(11)] = inst_27380);

(statearr_27515[(10)] = inst_27372__$1);

return statearr_27515;
})();
var statearr_27516_27602 = state_27510__$1;
(statearr_27516_27602[(2)] = null);

(statearr_27516_27602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (20))){
var inst_27414 = (state_27510[(12)]);
var inst_27422 = figwheel.client.file_reloading.sort_files.call(null,inst_27414);
var state_27510__$1 = state_27510;
var statearr_27517_27603 = state_27510__$1;
(statearr_27517_27603[(2)] = inst_27422);

(statearr_27517_27603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (27))){
var state_27510__$1 = state_27510;
var statearr_27518_27604 = state_27510__$1;
(statearr_27518_27604[(2)] = null);

(statearr_27518_27604[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (1))){
var inst_27363 = (state_27510[(13)]);
var inst_27360 = before_jsload.call(null,files);
var inst_27361 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27362 = (function (){return ((function (inst_27363,inst_27360,inst_27361,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27105_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27105_SHARP_);
});
;})(inst_27363,inst_27360,inst_27361,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27363__$1 = cljs.core.filter.call(null,inst_27362,files);
var inst_27364 = cljs.core.not_empty.call(null,inst_27363__$1);
var state_27510__$1 = (function (){var statearr_27519 = state_27510;
(statearr_27519[(13)] = inst_27363__$1);

(statearr_27519[(14)] = inst_27361);

(statearr_27519[(15)] = inst_27360);

return statearr_27519;
})();
if(cljs.core.truth_(inst_27364)){
var statearr_27520_27605 = state_27510__$1;
(statearr_27520_27605[(1)] = (2));

} else {
var statearr_27521_27606 = state_27510__$1;
(statearr_27521_27606[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (24))){
var state_27510__$1 = state_27510;
var statearr_27522_27607 = state_27510__$1;
(statearr_27522_27607[(2)] = null);

(statearr_27522_27607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (39))){
var inst_27464 = (state_27510[(16)]);
var state_27510__$1 = state_27510;
var statearr_27523_27608 = state_27510__$1;
(statearr_27523_27608[(2)] = inst_27464);

(statearr_27523_27608[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (46))){
var inst_27505 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27524_27609 = state_27510__$1;
(statearr_27524_27609[(2)] = inst_27505);

(statearr_27524_27609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (4))){
var inst_27408 = (state_27510[(2)]);
var inst_27409 = cljs.core.List.EMPTY;
var inst_27410 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27409);
var inst_27411 = (function (){return ((function (inst_27408,inst_27409,inst_27410,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27106_SHARP_){
var and__16739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27106_SHARP_);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27106_SHARP_));
} else {
return and__16739__auto__;
}
});
;})(inst_27408,inst_27409,inst_27410,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27412 = cljs.core.filter.call(null,inst_27411,files);
var inst_27413 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27414 = cljs.core.concat.call(null,inst_27412,inst_27413);
var state_27510__$1 = (function (){var statearr_27525 = state_27510;
(statearr_27525[(12)] = inst_27414);

(statearr_27525[(17)] = inst_27410);

(statearr_27525[(18)] = inst_27408);

return statearr_27525;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27526_27610 = state_27510__$1;
(statearr_27526_27610[(1)] = (16));

} else {
var statearr_27527_27611 = state_27510__$1;
(statearr_27527_27611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (15))){
var inst_27398 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27528_27612 = state_27510__$1;
(statearr_27528_27612[(2)] = inst_27398);

(statearr_27528_27612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (21))){
var inst_27424 = (state_27510[(19)]);
var inst_27424__$1 = (state_27510[(2)]);
var inst_27425 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27424__$1);
var state_27510__$1 = (function (){var statearr_27529 = state_27510;
(statearr_27529[(19)] = inst_27424__$1);

return statearr_27529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27510__$1,(22),inst_27425);
} else {
if((state_val_27511 === (31))){
var inst_27508 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27510__$1,inst_27508);
} else {
if((state_val_27511 === (32))){
var inst_27464 = (state_27510[(16)]);
var inst_27469 = inst_27464.cljs$lang$protocol_mask$partition0$;
var inst_27470 = (inst_27469 & (64));
var inst_27471 = inst_27464.cljs$core$ISeq$;
var inst_27472 = (inst_27470) || (inst_27471);
var state_27510__$1 = state_27510;
if(cljs.core.truth_(inst_27472)){
var statearr_27530_27613 = state_27510__$1;
(statearr_27530_27613[(1)] = (35));

} else {
var statearr_27531_27614 = state_27510__$1;
(statearr_27531_27614[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (40))){
var inst_27485 = (state_27510[(20)]);
var inst_27484 = (state_27510[(2)]);
var inst_27485__$1 = cljs.core.get.call(null,inst_27484,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27486 = cljs.core.get.call(null,inst_27484,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27487 = cljs.core.not_empty.call(null,inst_27485__$1);
var state_27510__$1 = (function (){var statearr_27532 = state_27510;
(statearr_27532[(20)] = inst_27485__$1);

(statearr_27532[(21)] = inst_27486);

return statearr_27532;
})();
if(cljs.core.truth_(inst_27487)){
var statearr_27533_27615 = state_27510__$1;
(statearr_27533_27615[(1)] = (41));

} else {
var statearr_27534_27616 = state_27510__$1;
(statearr_27534_27616[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (33))){
var state_27510__$1 = state_27510;
var statearr_27535_27617 = state_27510__$1;
(statearr_27535_27617[(2)] = false);

(statearr_27535_27617[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (13))){
var inst_27384 = (state_27510[(22)]);
var inst_27388 = cljs.core.chunk_first.call(null,inst_27384);
var inst_27389 = cljs.core.chunk_rest.call(null,inst_27384);
var inst_27390 = cljs.core.count.call(null,inst_27388);
var inst_27371 = inst_27389;
var inst_27372 = inst_27388;
var inst_27373 = inst_27390;
var inst_27374 = (0);
var state_27510__$1 = (function (){var statearr_27536 = state_27510;
(statearr_27536[(7)] = inst_27374);

(statearr_27536[(8)] = inst_27373);

(statearr_27536[(9)] = inst_27371);

(statearr_27536[(10)] = inst_27372);

return statearr_27536;
})();
var statearr_27537_27618 = state_27510__$1;
(statearr_27537_27618[(2)] = null);

(statearr_27537_27618[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (22))){
var inst_27428 = (state_27510[(23)]);
var inst_27427 = (state_27510[(24)]);
var inst_27432 = (state_27510[(25)]);
var inst_27424 = (state_27510[(19)]);
var inst_27427__$1 = (state_27510[(2)]);
var inst_27428__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27427__$1);
var inst_27429 = (function (){var all_files = inst_27424;
var res_SINGLEQUOTE_ = inst_27427__$1;
var res = inst_27428__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27428,inst_27427,inst_27432,inst_27424,inst_27427__$1,inst_27428__$1,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27107_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27107_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27428,inst_27427,inst_27432,inst_27424,inst_27427__$1,inst_27428__$1,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27430 = cljs.core.filter.call(null,inst_27429,inst_27427__$1);
var inst_27431 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27432__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27431);
var inst_27433 = cljs.core.not_empty.call(null,inst_27432__$1);
var state_27510__$1 = (function (){var statearr_27538 = state_27510;
(statearr_27538[(23)] = inst_27428__$1);

(statearr_27538[(24)] = inst_27427__$1);

(statearr_27538[(26)] = inst_27430);

(statearr_27538[(25)] = inst_27432__$1);

return statearr_27538;
})();
if(cljs.core.truth_(inst_27433)){
var statearr_27539_27619 = state_27510__$1;
(statearr_27539_27619[(1)] = (23));

} else {
var statearr_27540_27620 = state_27510__$1;
(statearr_27540_27620[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (36))){
var state_27510__$1 = state_27510;
var statearr_27541_27621 = state_27510__$1;
(statearr_27541_27621[(2)] = false);

(statearr_27541_27621[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (41))){
var inst_27485 = (state_27510[(20)]);
var inst_27489 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27490 = cljs.core.map.call(null,inst_27489,inst_27485);
var inst_27491 = cljs.core.pr_str.call(null,inst_27490);
var inst_27492 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27491)].join('');
var inst_27493 = figwheel.client.utils.log.call(null,inst_27492);
var state_27510__$1 = state_27510;
var statearr_27542_27622 = state_27510__$1;
(statearr_27542_27622[(2)] = inst_27493);

(statearr_27542_27622[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (43))){
var inst_27486 = (state_27510[(21)]);
var inst_27496 = (state_27510[(2)]);
var inst_27497 = cljs.core.not_empty.call(null,inst_27486);
var state_27510__$1 = (function (){var statearr_27543 = state_27510;
(statearr_27543[(27)] = inst_27496);

return statearr_27543;
})();
if(cljs.core.truth_(inst_27497)){
var statearr_27544_27623 = state_27510__$1;
(statearr_27544_27623[(1)] = (44));

} else {
var statearr_27545_27624 = state_27510__$1;
(statearr_27545_27624[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (29))){
var inst_27428 = (state_27510[(23)]);
var inst_27427 = (state_27510[(24)]);
var inst_27430 = (state_27510[(26)]);
var inst_27432 = (state_27510[(25)]);
var inst_27464 = (state_27510[(16)]);
var inst_27424 = (state_27510[(19)]);
var inst_27460 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27463 = (function (){var all_files = inst_27424;
var res_SINGLEQUOTE_ = inst_27427;
var res = inst_27428;
var files_not_loaded = inst_27430;
var dependencies_that_loaded = inst_27432;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27428,inst_27427,inst_27430,inst_27432,inst_27464,inst_27424,inst_27460,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27462){
var map__27546 = p__27462;
var map__27546__$1 = ((((!((map__27546 == null)))?((((map__27546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27546):map__27546);
var namespace = cljs.core.get.call(null,map__27546__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27428,inst_27427,inst_27430,inst_27432,inst_27464,inst_27424,inst_27460,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27464__$1 = cljs.core.group_by.call(null,inst_27463,inst_27430);
var inst_27466 = (inst_27464__$1 == null);
var inst_27467 = cljs.core.not.call(null,inst_27466);
var state_27510__$1 = (function (){var statearr_27548 = state_27510;
(statearr_27548[(16)] = inst_27464__$1);

(statearr_27548[(28)] = inst_27460);

return statearr_27548;
})();
if(inst_27467){
var statearr_27549_27625 = state_27510__$1;
(statearr_27549_27625[(1)] = (32));

} else {
var statearr_27550_27626 = state_27510__$1;
(statearr_27550_27626[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (44))){
var inst_27486 = (state_27510[(21)]);
var inst_27499 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27486);
var inst_27500 = cljs.core.pr_str.call(null,inst_27499);
var inst_27501 = [cljs.core.str("not required: "),cljs.core.str(inst_27500)].join('');
var inst_27502 = figwheel.client.utils.log.call(null,inst_27501);
var state_27510__$1 = state_27510;
var statearr_27551_27627 = state_27510__$1;
(statearr_27551_27627[(2)] = inst_27502);

(statearr_27551_27627[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (6))){
var inst_27405 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27552_27628 = state_27510__$1;
(statearr_27552_27628[(2)] = inst_27405);

(statearr_27552_27628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (28))){
var inst_27430 = (state_27510[(26)]);
var inst_27457 = (state_27510[(2)]);
var inst_27458 = cljs.core.not_empty.call(null,inst_27430);
var state_27510__$1 = (function (){var statearr_27553 = state_27510;
(statearr_27553[(29)] = inst_27457);

return statearr_27553;
})();
if(cljs.core.truth_(inst_27458)){
var statearr_27554_27629 = state_27510__$1;
(statearr_27554_27629[(1)] = (29));

} else {
var statearr_27555_27630 = state_27510__$1;
(statearr_27555_27630[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (25))){
var inst_27428 = (state_27510[(23)]);
var inst_27444 = (state_27510[(2)]);
var inst_27445 = cljs.core.not_empty.call(null,inst_27428);
var state_27510__$1 = (function (){var statearr_27556 = state_27510;
(statearr_27556[(30)] = inst_27444);

return statearr_27556;
})();
if(cljs.core.truth_(inst_27445)){
var statearr_27557_27631 = state_27510__$1;
(statearr_27557_27631[(1)] = (26));

} else {
var statearr_27558_27632 = state_27510__$1;
(statearr_27558_27632[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (34))){
var inst_27479 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
if(cljs.core.truth_(inst_27479)){
var statearr_27559_27633 = state_27510__$1;
(statearr_27559_27633[(1)] = (38));

} else {
var statearr_27560_27634 = state_27510__$1;
(statearr_27560_27634[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (17))){
var state_27510__$1 = state_27510;
var statearr_27561_27635 = state_27510__$1;
(statearr_27561_27635[(2)] = recompile_dependents);

(statearr_27561_27635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (3))){
var state_27510__$1 = state_27510;
var statearr_27562_27636 = state_27510__$1;
(statearr_27562_27636[(2)] = null);

(statearr_27562_27636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (12))){
var inst_27401 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27563_27637 = state_27510__$1;
(statearr_27563_27637[(2)] = inst_27401);

(statearr_27563_27637[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (2))){
var inst_27363 = (state_27510[(13)]);
var inst_27370 = cljs.core.seq.call(null,inst_27363);
var inst_27371 = inst_27370;
var inst_27372 = null;
var inst_27373 = (0);
var inst_27374 = (0);
var state_27510__$1 = (function (){var statearr_27564 = state_27510;
(statearr_27564[(7)] = inst_27374);

(statearr_27564[(8)] = inst_27373);

(statearr_27564[(9)] = inst_27371);

(statearr_27564[(10)] = inst_27372);

return statearr_27564;
})();
var statearr_27565_27638 = state_27510__$1;
(statearr_27565_27638[(2)] = null);

(statearr_27565_27638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (23))){
var inst_27428 = (state_27510[(23)]);
var inst_27427 = (state_27510[(24)]);
var inst_27430 = (state_27510[(26)]);
var inst_27432 = (state_27510[(25)]);
var inst_27424 = (state_27510[(19)]);
var inst_27435 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27437 = (function (){var all_files = inst_27424;
var res_SINGLEQUOTE_ = inst_27427;
var res = inst_27428;
var files_not_loaded = inst_27430;
var dependencies_that_loaded = inst_27432;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27428,inst_27427,inst_27430,inst_27432,inst_27424,inst_27435,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27436){
var map__27566 = p__27436;
var map__27566__$1 = ((((!((map__27566 == null)))?((((map__27566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27566):map__27566);
var request_url = cljs.core.get.call(null,map__27566__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27428,inst_27427,inst_27430,inst_27432,inst_27424,inst_27435,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27438 = cljs.core.reverse.call(null,inst_27432);
var inst_27439 = cljs.core.map.call(null,inst_27437,inst_27438);
var inst_27440 = cljs.core.pr_str.call(null,inst_27439);
var inst_27441 = figwheel.client.utils.log.call(null,inst_27440);
var state_27510__$1 = (function (){var statearr_27568 = state_27510;
(statearr_27568[(31)] = inst_27435);

return statearr_27568;
})();
var statearr_27569_27639 = state_27510__$1;
(statearr_27569_27639[(2)] = inst_27441);

(statearr_27569_27639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (35))){
var state_27510__$1 = state_27510;
var statearr_27570_27640 = state_27510__$1;
(statearr_27570_27640[(2)] = true);

(statearr_27570_27640[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (19))){
var inst_27414 = (state_27510[(12)]);
var inst_27420 = figwheel.client.file_reloading.expand_files.call(null,inst_27414);
var state_27510__$1 = state_27510;
var statearr_27571_27641 = state_27510__$1;
(statearr_27571_27641[(2)] = inst_27420);

(statearr_27571_27641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (11))){
var state_27510__$1 = state_27510;
var statearr_27572_27642 = state_27510__$1;
(statearr_27572_27642[(2)] = null);

(statearr_27572_27642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (9))){
var inst_27403 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27573_27643 = state_27510__$1;
(statearr_27573_27643[(2)] = inst_27403);

(statearr_27573_27643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (5))){
var inst_27374 = (state_27510[(7)]);
var inst_27373 = (state_27510[(8)]);
var inst_27376 = (inst_27374 < inst_27373);
var inst_27377 = inst_27376;
var state_27510__$1 = state_27510;
if(cljs.core.truth_(inst_27377)){
var statearr_27574_27644 = state_27510__$1;
(statearr_27574_27644[(1)] = (7));

} else {
var statearr_27575_27645 = state_27510__$1;
(statearr_27575_27645[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (14))){
var inst_27384 = (state_27510[(22)]);
var inst_27393 = cljs.core.first.call(null,inst_27384);
var inst_27394 = figwheel.client.file_reloading.eval_body.call(null,inst_27393,opts);
var inst_27395 = cljs.core.next.call(null,inst_27384);
var inst_27371 = inst_27395;
var inst_27372 = null;
var inst_27373 = (0);
var inst_27374 = (0);
var state_27510__$1 = (function (){var statearr_27576 = state_27510;
(statearr_27576[(32)] = inst_27394);

(statearr_27576[(7)] = inst_27374);

(statearr_27576[(8)] = inst_27373);

(statearr_27576[(9)] = inst_27371);

(statearr_27576[(10)] = inst_27372);

return statearr_27576;
})();
var statearr_27577_27646 = state_27510__$1;
(statearr_27577_27646[(2)] = null);

(statearr_27577_27646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (45))){
var state_27510__$1 = state_27510;
var statearr_27578_27647 = state_27510__$1;
(statearr_27578_27647[(2)] = null);

(statearr_27578_27647[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (26))){
var inst_27428 = (state_27510[(23)]);
var inst_27427 = (state_27510[(24)]);
var inst_27430 = (state_27510[(26)]);
var inst_27432 = (state_27510[(25)]);
var inst_27424 = (state_27510[(19)]);
var inst_27447 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27449 = (function (){var all_files = inst_27424;
var res_SINGLEQUOTE_ = inst_27427;
var res = inst_27428;
var files_not_loaded = inst_27430;
var dependencies_that_loaded = inst_27432;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27428,inst_27427,inst_27430,inst_27432,inst_27424,inst_27447,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27448){
var map__27579 = p__27448;
var map__27579__$1 = ((((!((map__27579 == null)))?((((map__27579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27579):map__27579);
var namespace = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27428,inst_27427,inst_27430,inst_27432,inst_27424,inst_27447,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27450 = cljs.core.map.call(null,inst_27449,inst_27428);
var inst_27451 = cljs.core.pr_str.call(null,inst_27450);
var inst_27452 = figwheel.client.utils.log.call(null,inst_27451);
var inst_27453 = (function (){var all_files = inst_27424;
var res_SINGLEQUOTE_ = inst_27427;
var res = inst_27428;
var files_not_loaded = inst_27430;
var dependencies_that_loaded = inst_27432;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27428,inst_27427,inst_27430,inst_27432,inst_27424,inst_27447,inst_27449,inst_27450,inst_27451,inst_27452,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27428,inst_27427,inst_27430,inst_27432,inst_27424,inst_27447,inst_27449,inst_27450,inst_27451,inst_27452,state_val_27511,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27454 = setTimeout(inst_27453,(10));
var state_27510__$1 = (function (){var statearr_27581 = state_27510;
(statearr_27581[(33)] = inst_27452);

(statearr_27581[(34)] = inst_27447);

return statearr_27581;
})();
var statearr_27582_27648 = state_27510__$1;
(statearr_27582_27648[(2)] = inst_27454);

(statearr_27582_27648[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (16))){
var state_27510__$1 = state_27510;
var statearr_27583_27649 = state_27510__$1;
(statearr_27583_27649[(2)] = reload_dependents);

(statearr_27583_27649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (38))){
var inst_27464 = (state_27510[(16)]);
var inst_27481 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27464);
var state_27510__$1 = state_27510;
var statearr_27584_27650 = state_27510__$1;
(statearr_27584_27650[(2)] = inst_27481);

(statearr_27584_27650[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (30))){
var state_27510__$1 = state_27510;
var statearr_27585_27651 = state_27510__$1;
(statearr_27585_27651[(2)] = null);

(statearr_27585_27651[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (10))){
var inst_27384 = (state_27510[(22)]);
var inst_27386 = cljs.core.chunked_seq_QMARK_.call(null,inst_27384);
var state_27510__$1 = state_27510;
if(inst_27386){
var statearr_27586_27652 = state_27510__$1;
(statearr_27586_27652[(1)] = (13));

} else {
var statearr_27587_27653 = state_27510__$1;
(statearr_27587_27653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (18))){
var inst_27418 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
if(cljs.core.truth_(inst_27418)){
var statearr_27588_27654 = state_27510__$1;
(statearr_27588_27654[(1)] = (19));

} else {
var statearr_27589_27655 = state_27510__$1;
(statearr_27589_27655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (42))){
var state_27510__$1 = state_27510;
var statearr_27590_27656 = state_27510__$1;
(statearr_27590_27656[(2)] = null);

(statearr_27590_27656[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (37))){
var inst_27476 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27591_27657 = state_27510__$1;
(statearr_27591_27657[(2)] = inst_27476);

(statearr_27591_27657[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (8))){
var inst_27384 = (state_27510[(22)]);
var inst_27371 = (state_27510[(9)]);
var inst_27384__$1 = cljs.core.seq.call(null,inst_27371);
var state_27510__$1 = (function (){var statearr_27592 = state_27510;
(statearr_27592[(22)] = inst_27384__$1);

return statearr_27592;
})();
if(inst_27384__$1){
var statearr_27593_27658 = state_27510__$1;
(statearr_27593_27658[(1)] = (10));

} else {
var statearr_27594_27659 = state_27510__$1;
(statearr_27594_27659[(1)] = (11));

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
});})(c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23771__auto__,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto____0 = (function (){
var statearr_27598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27598[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto__);

(statearr_27598[(1)] = (1));

return statearr_27598;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto____1 = (function (state_27510){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_27510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e27599){if((e27599 instanceof Object)){
var ex__23775__auto__ = e27599;
var statearr_27600_27660 = state_27510;
(statearr_27600_27660[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27661 = state_27510;
state_27510 = G__27661;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto__ = function(state_27510){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto____1.call(this,state_27510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23885__auto__ = (function (){var statearr_27601 = f__23884__auto__.call(null);
(statearr_27601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto__);

return statearr_27601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto__,map__27356,map__27356__$1,opts,before_jsload,on_jsload,reload_dependents,map__27357,map__27357__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23883__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27664,link){
var map__27667 = p__27664;
var map__27667__$1 = ((((!((map__27667 == null)))?((((map__27667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27667):map__27667);
var file = cljs.core.get.call(null,map__27667__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27667,map__27667__$1,file){
return (function (p1__27662_SHARP_,p2__27663_SHARP_){
if(cljs.core._EQ_.call(null,p1__27662_SHARP_,p2__27663_SHARP_)){
return p1__27662_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27667,map__27667__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27673){
var map__27674 = p__27673;
var map__27674__$1 = ((((!((map__27674 == null)))?((((map__27674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27674):map__27674);
var match_length = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27669_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27669_SHARP_);
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
var args27676 = [];
var len__17809__auto___27679 = arguments.length;
var i__17810__auto___27680 = (0);
while(true){
if((i__17810__auto___27680 < len__17809__auto___27679)){
args27676.push((arguments[i__17810__auto___27680]));

var G__27681 = (i__17810__auto___27680 + (1));
i__17810__auto___27680 = G__27681;
continue;
} else {
}
break;
}

var G__27678 = args27676.length;
switch (G__27678) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27676.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27683_SHARP_,p2__27684_SHARP_){
return cljs.core.assoc.call(null,p1__27683_SHARP_,cljs.core.get.call(null,p2__27684_SHARP_,key),p2__27684_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27685){
var map__27688 = p__27685;
var map__27688__$1 = ((((!((map__27688 == null)))?((((map__27688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27688):map__27688);
var f_data = map__27688__$1;
var file = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27690,files_msg){
var map__27697 = p__27690;
var map__27697__$1 = ((((!((map__27697 == null)))?((((map__27697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27697):map__27697);
var opts = map__27697__$1;
var on_cssload = cljs.core.get.call(null,map__27697__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27699_27703 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27700_27704 = null;
var count__27701_27705 = (0);
var i__27702_27706 = (0);
while(true){
if((i__27702_27706 < count__27701_27705)){
var f_27707 = cljs.core._nth.call(null,chunk__27700_27704,i__27702_27706);
figwheel.client.file_reloading.reload_css_file.call(null,f_27707);

var G__27708 = seq__27699_27703;
var G__27709 = chunk__27700_27704;
var G__27710 = count__27701_27705;
var G__27711 = (i__27702_27706 + (1));
seq__27699_27703 = G__27708;
chunk__27700_27704 = G__27709;
count__27701_27705 = G__27710;
i__27702_27706 = G__27711;
continue;
} else {
var temp__4425__auto___27712 = cljs.core.seq.call(null,seq__27699_27703);
if(temp__4425__auto___27712){
var seq__27699_27713__$1 = temp__4425__auto___27712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27699_27713__$1)){
var c__17554__auto___27714 = cljs.core.chunk_first.call(null,seq__27699_27713__$1);
var G__27715 = cljs.core.chunk_rest.call(null,seq__27699_27713__$1);
var G__27716 = c__17554__auto___27714;
var G__27717 = cljs.core.count.call(null,c__17554__auto___27714);
var G__27718 = (0);
seq__27699_27703 = G__27715;
chunk__27700_27704 = G__27716;
count__27701_27705 = G__27717;
i__27702_27706 = G__27718;
continue;
} else {
var f_27719 = cljs.core.first.call(null,seq__27699_27713__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27719);

var G__27720 = cljs.core.next.call(null,seq__27699_27713__$1);
var G__27721 = null;
var G__27722 = (0);
var G__27723 = (0);
seq__27699_27703 = G__27720;
chunk__27700_27704 = G__27721;
count__27701_27705 = G__27722;
i__27702_27706 = G__27723;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27697,map__27697__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27697,map__27697__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1447836356855