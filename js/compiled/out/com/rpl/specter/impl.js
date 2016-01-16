// Compiled by ClojureScript 1.7.170 {}
goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('clojure.walk');
goog.require('clojure.core.reducers');
goog.require('clojure.string');
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.call(null,e);

return e;
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(paths){
if((!((paths == null))) && (!((paths.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1 == null)))){
return paths.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1(paths);
} else {
var x__20845__auto__ = (((paths == null))?null:paths);
var m__20846__auto__ = (com.rpl.specter.impl.comp_paths_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,paths);
} else {
var m__20846__auto____$1 = (com.rpl.specter.impl.comp_paths_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,paths);
} else {
throw cljs.core.missing_protocol.call(null,"PathComposer.comp-paths*",paths);
}
}
}
});

com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__21255__auto__ = [];
var len__21248__auto___22015 = arguments.length;
var i__21249__auto___22016 = (0);
while(true){
if((i__21249__auto___22016 < len__21248__auto___22015)){
args__21255__auto__.push((arguments[i__21249__auto___22016]));

var G__22017 = (i__21249__auto___22016 + (1));
i__21249__auto___22016 = G__22017;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((0) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((0)),(0))):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__21256__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq22014){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22014));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__21118__auto__ = cljs.core.system_time.call(null);
var ret__21119__auto__ = (function (){var n__21093__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__21093__auto__)){
afn.call(null);

var G__22018 = (_ + (1));
_ = G__22018;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__21118__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__21119__auto__;
});

/**
* @constructor
*/
com.rpl.specter.impl.ExecutorFunctions = (function (type,select_executor,transform_executor){
this.type = type;
this.select_executor = select_executor;
this.transform_executor = transform_executor;
})

com.rpl.specter.impl.ExecutorFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"select-executor","select-executor",140452237,null),new cljs.core.Symbol(null,"transform-executor","transform-executor",-31221519,null)], null);
});

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$type = true;

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorStr = "com.rpl.specter.impl/ExecutorFunctions";

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"com.rpl.specter.impl/ExecutorFunctions");
});

com.rpl.specter.impl.__GT_ExecutorFunctions = (function com$rpl$specter$impl$__GT_ExecutorFunctions(type,select_executor,transform_executor){
return (new com.rpl.specter.impl.ExecutorFunctions(type,select_executor,transform_executor));
});

com.rpl.specter.impl.RichPathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"richpath","richpath",-150197948),(function (params,params_idx,selector,structure){
return selector.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if(!(cljs.core.empty_QMARK_.call(null,vals))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,vals,structure__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if(cljs.core.empty_QMARK_.call(null,vals)){
return transform_fn.call(null,structure__$1);
} else {
return cljs.core.apply.call(null,transform_fn,cljs.core.conj.call(null,vals,structure__$1));
}
}));
}));
com.rpl.specter.impl.StructurePathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"spath","spath",-1857758005),(function (params,params_idx,selector,structure){
return selector.call(null,structure,(function (structure__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,structure,transform_fn);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.TransformFunctions = (function (executors,selector,transformer,__meta,__extmap,__hash){
this.executors = executors;
this.selector = selector;
this.transformer = transformer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20804__auto__,k__20805__auto__){
var self__ = this;
var this__20804__auto____$1 = this;
return cljs.core._lookup.call(null,this__20804__auto____$1,k__20805__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20806__auto__,k22020,else__20807__auto__){
var self__ = this;
var this__20806__auto____$1 = this;
var G__22022 = (((k22020 instanceof cljs.core.Keyword))?k22020.fqn:null);
switch (G__22022) {
case "executors":
return self__.executors;

break;
case "selector":
return self__.selector;

break;
case "transformer":
return self__.transformer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22020,else__20807__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20818__auto__,writer__20819__auto__,opts__20820__auto__){
var self__ = this;
var this__20818__auto____$1 = this;
var pr_pair__20821__auto__ = ((function (this__20818__auto____$1){
return (function (keyval__20822__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20819__auto__,cljs.core.pr_writer,""," ","",opts__20820__auto__,keyval__20822__auto__);
});})(this__20818__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20819__auto__,pr_pair__20821__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__20820__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22019){
var self__ = this;
var G__22019__$1 = this;
return (new cljs.core.RecordIter((0),G__22019__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20802__auto__){
var self__ = this;
var this__20802__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20798__auto__){
var self__ = this;
var this__20798__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20808__auto__){
var self__ = this;
var this__20808__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20799__auto__){
var self__ = this;
var this__20799__auto____$1 = this;
var h__20625__auto__ = self__.__hash;
if(!((h__20625__auto__ == null))){
return h__20625__auto__;
} else {
var h__20625__auto____$1 = cljs.core.hash_imap.call(null,this__20799__auto____$1);
self__.__hash = h__20625__auto____$1;

return h__20625__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20800__auto__,other__20801__auto__){
var self__ = this;
var this__20800__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20178__auto__ = other__20801__auto__;
if(cljs.core.truth_(and__20178__auto__)){
var and__20178__auto____$1 = (this__20800__auto____$1.constructor === other__20801__auto__.constructor);
if(and__20178__auto____$1){
return cljs.core.equiv_map.call(null,this__20800__auto____$1,other__20801__auto__);
} else {
return and__20178__auto____$1;
}
} else {
return and__20178__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20813__auto__,k__20814__auto__){
var self__ = this;
var this__20813__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__20814__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20813__auto____$1),self__.__meta),k__20814__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20814__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20811__auto__,k__20812__auto__,G__22019){
var self__ = this;
var this__20811__auto____$1 = this;
var pred__22023 = cljs.core.keyword_identical_QMARK_;
var expr__22024 = k__20812__auto__;
if(cljs.core.truth_(pred__22023.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__22024))){
return (new com.rpl.specter.impl.TransformFunctions(G__22019,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22023.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__22024))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__22019,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22023.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__22024))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__22019,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20812__auto__,G__22019),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20816__auto__){
var self__ = this;
var this__20816__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20803__auto__,G__22019){
var self__ = this;
var this__20803__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__22019,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20809__auto__,entry__20810__auto__){
var self__ = this;
var this__20809__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20810__auto__)){
return cljs.core._assoc.call(null,this__20809__auto____$1,cljs.core._nth.call(null,entry__20810__auto__,(0)),cljs.core._nth.call(null,entry__20810__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20809__auto____$1,entry__20810__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__20838__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__20838__auto__,writer__20839__auto__){
return cljs.core._write.call(null,writer__20839__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__22021){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__22021),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__22021),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__22021),null,cljs.core.dissoc.call(null,G__22021,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CompiledPath = (function (transform_fns,params,params_idx,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.params = params;
this.params_idx = params_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20804__auto__,k__20805__auto__){
var self__ = this;
var this__20804__auto____$1 = this;
return cljs.core._lookup.call(null,this__20804__auto____$1,k__20805__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20806__auto__,k22028,else__20807__auto__){
var self__ = this;
var this__20806__auto____$1 = this;
var G__22030 = (((k22028 instanceof cljs.core.Keyword))?k22028.fqn:null);
switch (G__22030) {
case "transform-fns":
return self__.transform_fns;

break;
case "params":
return self__.params;

break;
case "params-idx":
return self__.params_idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22028,else__20807__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20818__auto__,writer__20819__auto__,opts__20820__auto__){
var self__ = this;
var this__20818__auto____$1 = this;
var pr_pair__20821__auto__ = ((function (this__20818__auto____$1){
return (function (keyval__20822__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20819__auto__,cljs.core.pr_writer,""," ","",opts__20820__auto__,keyval__20822__auto__);
});})(this__20818__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20819__auto__,pr_pair__20821__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__20820__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22027){
var self__ = this;
var G__22027__$1 = this;
return (new cljs.core.RecordIter((0),G__22027__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20802__auto__){
var self__ = this;
var this__20802__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20798__auto__){
var self__ = this;
var this__20798__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20808__auto__){
var self__ = this;
var this__20808__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20799__auto__){
var self__ = this;
var this__20799__auto____$1 = this;
var h__20625__auto__ = self__.__hash;
if(!((h__20625__auto__ == null))){
return h__20625__auto__;
} else {
var h__20625__auto____$1 = cljs.core.hash_imap.call(null,this__20799__auto____$1);
self__.__hash = h__20625__auto____$1;

return h__20625__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20800__auto__,other__20801__auto__){
var self__ = this;
var this__20800__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20178__auto__ = other__20801__auto__;
if(cljs.core.truth_(and__20178__auto__)){
var and__20178__auto____$1 = (this__20800__auto____$1.constructor === other__20801__auto__.constructor);
if(and__20178__auto____$1){
return cljs.core.equiv_map.call(null,this__20800__auto____$1,other__20801__auto__);
} else {
return and__20178__auto____$1;
}
} else {
return and__20178__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20813__auto__,k__20814__auto__){
var self__ = this;
var this__20813__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__20814__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20813__auto____$1),self__.__meta),k__20814__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20814__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20811__auto__,k__20812__auto__,G__22027){
var self__ = this;
var this__20811__auto____$1 = this;
var pred__22031 = cljs.core.keyword_identical_QMARK_;
var expr__22032 = k__20812__auto__;
if(cljs.core.truth_(pred__22031.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__22032))){
return (new com.rpl.specter.impl.CompiledPath(G__22027,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22031.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__22032))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__22027,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22031.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__22032))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__22027,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20812__auto__,G__22027),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20816__auto__){
var self__ = this;
var this__20816__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20803__auto__,G__22027){
var self__ = this;
var this__20803__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__22027,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20809__auto__,entry__20810__auto__){
var self__ = this;
var this__20809__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20810__auto__)){
return cljs.core._assoc.call(null,this__20809__auto____$1,cljs.core._nth.call(null,entry__20810__auto__,(0)),cljs.core._nth.call(null,entry__20810__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20809__auto____$1,entry__20810__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__20838__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__20838__auto__,writer__20839__auto__){
return cljs.core._write.call(null,writer__20839__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__22029){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__22029),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__22029),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__22029),null,cljs.core.dissoc.call(null,G__22029,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
});

com.rpl.specter.impl.compiled_path_QMARK_ = (function com$rpl$specter$impl$compiled_path_QMARK_(o){
return (o instanceof com.rpl.specter.impl.CompiledPath);
});
com.rpl.specter.impl.no_params_compiled_path = (function com$rpl$specter$impl$no_params_compiled_path(transform_fns){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,transform_fns,null,(0));
});
com.rpl.specter.impl.bind_params_STAR_;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.ParamsNeededPath = (function (transform_fns,num_needed_params,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.num_needed_params = num_needed_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20804__auto__,k__20805__auto__){
var self__ = this;
var this__20804__auto____$1 = this;
return cljs.core._lookup.call(null,this__20804__auto____$1,k__20805__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20806__auto__,k22247,else__20807__auto__){
var self__ = this;
var this__20806__auto____$1 = this;
var G__22250 = (((k22247 instanceof cljs.core.Keyword))?k22247.fqn:null);
switch (G__22250) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22247,else__20807__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20818__auto__,writer__20819__auto__,opts__20820__auto__){
var self__ = this;
var this__20818__auto____$1 = this;
var pr_pair__20821__auto__ = ((function (this__20818__auto____$1){
return (function (keyval__20822__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20819__auto__,cljs.core.pr_writer,""," ","",opts__20820__auto__,keyval__20822__auto__);
});})(this__20818__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20819__auto__,pr_pair__20821__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__20820__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22246){
var self__ = this;
var G__22246__$1 = this;
return (new cljs.core.RecordIter((0),G__22246__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__22255 = null;
var G__22255__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__2 = (function (self__,G__22036){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(1));
(array22035[(0)] = G__22036);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__3 = (function (self__,G__22037,G__22038){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(2));
(array22035[(0)] = G__22037);

(array22035[(1)] = G__22038);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__4 = (function (self__,G__22039,G__22040,G__22041){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(3));
(array22035[(0)] = G__22039);

(array22035[(1)] = G__22040);

(array22035[(2)] = G__22041);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__5 = (function (self__,G__22042,G__22043,G__22044,G__22045){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(4));
(array22035[(0)] = G__22042);

(array22035[(1)] = G__22043);

(array22035[(2)] = G__22044);

(array22035[(3)] = G__22045);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__6 = (function (self__,G__22046,G__22047,G__22048,G__22049,G__22050){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(5));
(array22035[(0)] = G__22046);

(array22035[(1)] = G__22047);

(array22035[(2)] = G__22048);

(array22035[(3)] = G__22049);

(array22035[(4)] = G__22050);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__7 = (function (self__,G__22051,G__22052,G__22053,G__22054,G__22055,G__22056){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(6));
(array22035[(0)] = G__22051);

(array22035[(1)] = G__22052);

(array22035[(2)] = G__22053);

(array22035[(3)] = G__22054);

(array22035[(4)] = G__22055);

(array22035[(5)] = G__22056);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__8 = (function (self__,G__22057,G__22058,G__22059,G__22060,G__22061,G__22062,G__22063){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(7));
(array22035[(0)] = G__22057);

(array22035[(1)] = G__22058);

(array22035[(2)] = G__22059);

(array22035[(3)] = G__22060);

(array22035[(4)] = G__22061);

(array22035[(5)] = G__22062);

(array22035[(6)] = G__22063);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__9 = (function (self__,G__22064,G__22065,G__22066,G__22067,G__22068,G__22069,G__22070,G__22071){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(8));
(array22035[(0)] = G__22064);

(array22035[(1)] = G__22065);

(array22035[(2)] = G__22066);

(array22035[(3)] = G__22067);

(array22035[(4)] = G__22068);

(array22035[(5)] = G__22069);

(array22035[(6)] = G__22070);

(array22035[(7)] = G__22071);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__10 = (function (self__,G__22072,G__22073,G__22074,G__22075,G__22076,G__22077,G__22078,G__22079,G__22080){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(9));
(array22035[(0)] = G__22072);

(array22035[(1)] = G__22073);

(array22035[(2)] = G__22074);

(array22035[(3)] = G__22075);

(array22035[(4)] = G__22076);

(array22035[(5)] = G__22077);

(array22035[(6)] = G__22078);

(array22035[(7)] = G__22079);

(array22035[(8)] = G__22080);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__11 = (function (self__,G__22081,G__22082,G__22083,G__22084,G__22085,G__22086,G__22087,G__22088,G__22089,G__22090){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(10));
(array22035[(0)] = G__22081);

(array22035[(1)] = G__22082);

(array22035[(2)] = G__22083);

(array22035[(3)] = G__22084);

(array22035[(4)] = G__22085);

(array22035[(5)] = G__22086);

(array22035[(6)] = G__22087);

(array22035[(7)] = G__22088);

(array22035[(8)] = G__22089);

(array22035[(9)] = G__22090);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__12 = (function (self__,G__22091,G__22092,G__22093,G__22094,G__22095,G__22096,G__22097,G__22098,G__22099,G__22100,G__22101){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(11));
(array22035[(0)] = G__22091);

(array22035[(1)] = G__22092);

(array22035[(2)] = G__22093);

(array22035[(3)] = G__22094);

(array22035[(4)] = G__22095);

(array22035[(5)] = G__22096);

(array22035[(6)] = G__22097);

(array22035[(7)] = G__22098);

(array22035[(8)] = G__22099);

(array22035[(9)] = G__22100);

(array22035[(10)] = G__22101);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__13 = (function (self__,G__22102,G__22103,G__22104,G__22105,G__22106,G__22107,G__22108,G__22109,G__22110,G__22111,G__22112,G__22113){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(12));
(array22035[(0)] = G__22102);

(array22035[(1)] = G__22103);

(array22035[(2)] = G__22104);

(array22035[(3)] = G__22105);

(array22035[(4)] = G__22106);

(array22035[(5)] = G__22107);

(array22035[(6)] = G__22108);

(array22035[(7)] = G__22109);

(array22035[(8)] = G__22110);

(array22035[(9)] = G__22111);

(array22035[(10)] = G__22112);

(array22035[(11)] = G__22113);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__14 = (function (self__,G__22114,G__22115,G__22116,G__22117,G__22118,G__22119,G__22120,G__22121,G__22122,G__22123,G__22124,G__22125,G__22126){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(13));
(array22035[(0)] = G__22114);

(array22035[(1)] = G__22115);

(array22035[(2)] = G__22116);

(array22035[(3)] = G__22117);

(array22035[(4)] = G__22118);

(array22035[(5)] = G__22119);

(array22035[(6)] = G__22120);

(array22035[(7)] = G__22121);

(array22035[(8)] = G__22122);

(array22035[(9)] = G__22123);

(array22035[(10)] = G__22124);

(array22035[(11)] = G__22125);

(array22035[(12)] = G__22126);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__15 = (function (self__,G__22127,G__22128,G__22129,G__22130,G__22131,G__22132,G__22133,G__22134,G__22135,G__22136,G__22137,G__22138,G__22139,G__22140){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(14));
(array22035[(0)] = G__22127);

(array22035[(1)] = G__22128);

(array22035[(2)] = G__22129);

(array22035[(3)] = G__22130);

(array22035[(4)] = G__22131);

(array22035[(5)] = G__22132);

(array22035[(6)] = G__22133);

(array22035[(7)] = G__22134);

(array22035[(8)] = G__22135);

(array22035[(9)] = G__22136);

(array22035[(10)] = G__22137);

(array22035[(11)] = G__22138);

(array22035[(12)] = G__22139);

(array22035[(13)] = G__22140);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__16 = (function (self__,G__22141,G__22142,G__22143,G__22144,G__22145,G__22146,G__22147,G__22148,G__22149,G__22150,G__22151,G__22152,G__22153,G__22154,G__22155){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(15));
(array22035[(0)] = G__22141);

(array22035[(1)] = G__22142);

(array22035[(2)] = G__22143);

(array22035[(3)] = G__22144);

(array22035[(4)] = G__22145);

(array22035[(5)] = G__22146);

(array22035[(6)] = G__22147);

(array22035[(7)] = G__22148);

(array22035[(8)] = G__22149);

(array22035[(9)] = G__22150);

(array22035[(10)] = G__22151);

(array22035[(11)] = G__22152);

(array22035[(12)] = G__22153);

(array22035[(13)] = G__22154);

(array22035[(14)] = G__22155);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__17 = (function (self__,G__22156,G__22157,G__22158,G__22159,G__22160,G__22161,G__22162,G__22163,G__22164,G__22165,G__22166,G__22167,G__22168,G__22169,G__22170,G__22171){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(16));
(array22035[(0)] = G__22156);

(array22035[(1)] = G__22157);

(array22035[(2)] = G__22158);

(array22035[(3)] = G__22159);

(array22035[(4)] = G__22160);

(array22035[(5)] = G__22161);

(array22035[(6)] = G__22162);

(array22035[(7)] = G__22163);

(array22035[(8)] = G__22164);

(array22035[(9)] = G__22165);

(array22035[(10)] = G__22166);

(array22035[(11)] = G__22167);

(array22035[(12)] = G__22168);

(array22035[(13)] = G__22169);

(array22035[(14)] = G__22170);

(array22035[(15)] = G__22171);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__18 = (function (self__,G__22172,G__22173,G__22174,G__22175,G__22176,G__22177,G__22178,G__22179,G__22180,G__22181,G__22182,G__22183,G__22184,G__22185,G__22186,G__22187,G__22188){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(17));
(array22035[(0)] = G__22172);

(array22035[(1)] = G__22173);

(array22035[(2)] = G__22174);

(array22035[(3)] = G__22175);

(array22035[(4)] = G__22176);

(array22035[(5)] = G__22177);

(array22035[(6)] = G__22178);

(array22035[(7)] = G__22179);

(array22035[(8)] = G__22180);

(array22035[(9)] = G__22181);

(array22035[(10)] = G__22182);

(array22035[(11)] = G__22183);

(array22035[(12)] = G__22184);

(array22035[(13)] = G__22185);

(array22035[(14)] = G__22186);

(array22035[(15)] = G__22187);

(array22035[(16)] = G__22188);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__19 = (function (self__,G__22189,G__22190,G__22191,G__22192,G__22193,G__22194,G__22195,G__22196,G__22197,G__22198,G__22199,G__22200,G__22201,G__22202,G__22203,G__22204,G__22205,G__22206){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(18));
(array22035[(0)] = G__22189);

(array22035[(1)] = G__22190);

(array22035[(2)] = G__22191);

(array22035[(3)] = G__22192);

(array22035[(4)] = G__22193);

(array22035[(5)] = G__22194);

(array22035[(6)] = G__22195);

(array22035[(7)] = G__22196);

(array22035[(8)] = G__22197);

(array22035[(9)] = G__22198);

(array22035[(10)] = G__22199);

(array22035[(11)] = G__22200);

(array22035[(12)] = G__22201);

(array22035[(13)] = G__22202);

(array22035[(14)] = G__22203);

(array22035[(15)] = G__22204);

(array22035[(16)] = G__22205);

(array22035[(17)] = G__22206);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__20 = (function (self__,G__22207,G__22208,G__22209,G__22210,G__22211,G__22212,G__22213,G__22214,G__22215,G__22216,G__22217,G__22218,G__22219,G__22220,G__22221,G__22222,G__22223,G__22224,G__22225){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(19));
(array22035[(0)] = G__22207);

(array22035[(1)] = G__22208);

(array22035[(2)] = G__22209);

(array22035[(3)] = G__22210);

(array22035[(4)] = G__22211);

(array22035[(5)] = G__22212);

(array22035[(6)] = G__22213);

(array22035[(7)] = G__22214);

(array22035[(8)] = G__22215);

(array22035[(9)] = G__22216);

(array22035[(10)] = G__22217);

(array22035[(11)] = G__22218);

(array22035[(12)] = G__22219);

(array22035[(13)] = G__22220);

(array22035[(14)] = G__22221);

(array22035[(15)] = G__22222);

(array22035[(16)] = G__22223);

(array22035[(17)] = G__22224);

(array22035[(18)] = G__22225);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__21 = (function (self__,G__22226,G__22227,G__22228,G__22229,G__22230,G__22231,G__22232,G__22233,G__22234,G__22235,G__22236,G__22237,G__22238,G__22239,G__22240,G__22241,G__22242,G__22243,G__22244,G__22245){
var self__ = this;
var self____$1 = this;
var this__21964__auto__ = self____$1;
var array22035 = cljs.core.object_array.call(null,(20));
(array22035[(0)] = G__22226);

(array22035[(1)] = G__22227);

(array22035[(2)] = G__22228);

(array22035[(3)] = G__22229);

(array22035[(4)] = G__22230);

(array22035[(5)] = G__22231);

(array22035[(6)] = G__22232);

(array22035[(7)] = G__22233);

(array22035[(8)] = G__22234);

(array22035[(9)] = G__22235);

(array22035[(10)] = G__22236);

(array22035[(11)] = G__22237);

(array22035[(12)] = G__22238);

(array22035[(13)] = G__22239);

(array22035[(14)] = G__22240);

(array22035[(15)] = G__22241);

(array22035[(16)] = G__22242);

(array22035[(17)] = G__22243);

(array22035[(18)] = G__22244);

(array22035[(19)] = G__22245);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});
var G__22255__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__22255 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__22255__1.call(this,self__);
case 2:
return G__22255__2.call(this,self__,p01);
case 3:
return G__22255__3.call(this,self__,p01,p02);
case 4:
return G__22255__4.call(this,self__,p01,p02,p03);
case 5:
return G__22255__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__22255__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__22255__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__22255__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__22255__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__22255__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__22255__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__22255__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__22255__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__22255__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__22255__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__22255__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__22255__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__22255__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__22255__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__22255__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__22255__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__22255__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22255.cljs$core$IFn$_invoke$arity$1 = G__22255__1;
G__22255.cljs$core$IFn$_invoke$arity$2 = G__22255__2;
G__22255.cljs$core$IFn$_invoke$arity$3 = G__22255__3;
G__22255.cljs$core$IFn$_invoke$arity$4 = G__22255__4;
G__22255.cljs$core$IFn$_invoke$arity$5 = G__22255__5;
G__22255.cljs$core$IFn$_invoke$arity$6 = G__22255__6;
G__22255.cljs$core$IFn$_invoke$arity$7 = G__22255__7;
G__22255.cljs$core$IFn$_invoke$arity$8 = G__22255__8;
G__22255.cljs$core$IFn$_invoke$arity$9 = G__22255__9;
G__22255.cljs$core$IFn$_invoke$arity$10 = G__22255__10;
G__22255.cljs$core$IFn$_invoke$arity$11 = G__22255__11;
G__22255.cljs$core$IFn$_invoke$arity$12 = G__22255__12;
G__22255.cljs$core$IFn$_invoke$arity$13 = G__22255__13;
G__22255.cljs$core$IFn$_invoke$arity$14 = G__22255__14;
G__22255.cljs$core$IFn$_invoke$arity$15 = G__22255__15;
G__22255.cljs$core$IFn$_invoke$arity$16 = G__22255__16;
G__22255.cljs$core$IFn$_invoke$arity$17 = G__22255__17;
G__22255.cljs$core$IFn$_invoke$arity$18 = G__22255__18;
G__22255.cljs$core$IFn$_invoke$arity$19 = G__22255__19;
G__22255.cljs$core$IFn$_invoke$arity$20 = G__22255__20;
G__22255.cljs$core$IFn$_invoke$arity$21 = G__22255__21;
G__22255.cljs$core$IFn$_invoke$arity$22 = G__22255__22;
return G__22255;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args22249){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args22249)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__22036){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(1));
(array22035[(0)] = G__22036);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__22037,G__22038){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(2));
(array22035[(0)] = G__22037);

(array22035[(1)] = G__22038);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__22039,G__22040,G__22041){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(3));
(array22035[(0)] = G__22039);

(array22035[(1)] = G__22040);

(array22035[(2)] = G__22041);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__22042,G__22043,G__22044,G__22045){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(4));
(array22035[(0)] = G__22042);

(array22035[(1)] = G__22043);

(array22035[(2)] = G__22044);

(array22035[(3)] = G__22045);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__22046,G__22047,G__22048,G__22049,G__22050){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(5));
(array22035[(0)] = G__22046);

(array22035[(1)] = G__22047);

(array22035[(2)] = G__22048);

(array22035[(3)] = G__22049);

(array22035[(4)] = G__22050);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__22051,G__22052,G__22053,G__22054,G__22055,G__22056){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(6));
(array22035[(0)] = G__22051);

(array22035[(1)] = G__22052);

(array22035[(2)] = G__22053);

(array22035[(3)] = G__22054);

(array22035[(4)] = G__22055);

(array22035[(5)] = G__22056);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__22057,G__22058,G__22059,G__22060,G__22061,G__22062,G__22063){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(7));
(array22035[(0)] = G__22057);

(array22035[(1)] = G__22058);

(array22035[(2)] = G__22059);

(array22035[(3)] = G__22060);

(array22035[(4)] = G__22061);

(array22035[(5)] = G__22062);

(array22035[(6)] = G__22063);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__22064,G__22065,G__22066,G__22067,G__22068,G__22069,G__22070,G__22071){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(8));
(array22035[(0)] = G__22064);

(array22035[(1)] = G__22065);

(array22035[(2)] = G__22066);

(array22035[(3)] = G__22067);

(array22035[(4)] = G__22068);

(array22035[(5)] = G__22069);

(array22035[(6)] = G__22070);

(array22035[(7)] = G__22071);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__22072,G__22073,G__22074,G__22075,G__22076,G__22077,G__22078,G__22079,G__22080){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(9));
(array22035[(0)] = G__22072);

(array22035[(1)] = G__22073);

(array22035[(2)] = G__22074);

(array22035[(3)] = G__22075);

(array22035[(4)] = G__22076);

(array22035[(5)] = G__22077);

(array22035[(6)] = G__22078);

(array22035[(7)] = G__22079);

(array22035[(8)] = G__22080);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__22081,G__22082,G__22083,G__22084,G__22085,G__22086,G__22087,G__22088,G__22089,G__22090){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(10));
(array22035[(0)] = G__22081);

(array22035[(1)] = G__22082);

(array22035[(2)] = G__22083);

(array22035[(3)] = G__22084);

(array22035[(4)] = G__22085);

(array22035[(5)] = G__22086);

(array22035[(6)] = G__22087);

(array22035[(7)] = G__22088);

(array22035[(8)] = G__22089);

(array22035[(9)] = G__22090);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__22091,G__22092,G__22093,G__22094,G__22095,G__22096,G__22097,G__22098,G__22099,G__22100,G__22101){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(11));
(array22035[(0)] = G__22091);

(array22035[(1)] = G__22092);

(array22035[(2)] = G__22093);

(array22035[(3)] = G__22094);

(array22035[(4)] = G__22095);

(array22035[(5)] = G__22096);

(array22035[(6)] = G__22097);

(array22035[(7)] = G__22098);

(array22035[(8)] = G__22099);

(array22035[(9)] = G__22100);

(array22035[(10)] = G__22101);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__22102,G__22103,G__22104,G__22105,G__22106,G__22107,G__22108,G__22109,G__22110,G__22111,G__22112,G__22113){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(12));
(array22035[(0)] = G__22102);

(array22035[(1)] = G__22103);

(array22035[(2)] = G__22104);

(array22035[(3)] = G__22105);

(array22035[(4)] = G__22106);

(array22035[(5)] = G__22107);

(array22035[(6)] = G__22108);

(array22035[(7)] = G__22109);

(array22035[(8)] = G__22110);

(array22035[(9)] = G__22111);

(array22035[(10)] = G__22112);

(array22035[(11)] = G__22113);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__22114,G__22115,G__22116,G__22117,G__22118,G__22119,G__22120,G__22121,G__22122,G__22123,G__22124,G__22125,G__22126){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(13));
(array22035[(0)] = G__22114);

(array22035[(1)] = G__22115);

(array22035[(2)] = G__22116);

(array22035[(3)] = G__22117);

(array22035[(4)] = G__22118);

(array22035[(5)] = G__22119);

(array22035[(6)] = G__22120);

(array22035[(7)] = G__22121);

(array22035[(8)] = G__22122);

(array22035[(9)] = G__22123);

(array22035[(10)] = G__22124);

(array22035[(11)] = G__22125);

(array22035[(12)] = G__22126);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__22127,G__22128,G__22129,G__22130,G__22131,G__22132,G__22133,G__22134,G__22135,G__22136,G__22137,G__22138,G__22139,G__22140){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(14));
(array22035[(0)] = G__22127);

(array22035[(1)] = G__22128);

(array22035[(2)] = G__22129);

(array22035[(3)] = G__22130);

(array22035[(4)] = G__22131);

(array22035[(5)] = G__22132);

(array22035[(6)] = G__22133);

(array22035[(7)] = G__22134);

(array22035[(8)] = G__22135);

(array22035[(9)] = G__22136);

(array22035[(10)] = G__22137);

(array22035[(11)] = G__22138);

(array22035[(12)] = G__22139);

(array22035[(13)] = G__22140);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__22141,G__22142,G__22143,G__22144,G__22145,G__22146,G__22147,G__22148,G__22149,G__22150,G__22151,G__22152,G__22153,G__22154,G__22155){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(15));
(array22035[(0)] = G__22141);

(array22035[(1)] = G__22142);

(array22035[(2)] = G__22143);

(array22035[(3)] = G__22144);

(array22035[(4)] = G__22145);

(array22035[(5)] = G__22146);

(array22035[(6)] = G__22147);

(array22035[(7)] = G__22148);

(array22035[(8)] = G__22149);

(array22035[(9)] = G__22150);

(array22035[(10)] = G__22151);

(array22035[(11)] = G__22152);

(array22035[(12)] = G__22153);

(array22035[(13)] = G__22154);

(array22035[(14)] = G__22155);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__22156,G__22157,G__22158,G__22159,G__22160,G__22161,G__22162,G__22163,G__22164,G__22165,G__22166,G__22167,G__22168,G__22169,G__22170,G__22171){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(16));
(array22035[(0)] = G__22156);

(array22035[(1)] = G__22157);

(array22035[(2)] = G__22158);

(array22035[(3)] = G__22159);

(array22035[(4)] = G__22160);

(array22035[(5)] = G__22161);

(array22035[(6)] = G__22162);

(array22035[(7)] = G__22163);

(array22035[(8)] = G__22164);

(array22035[(9)] = G__22165);

(array22035[(10)] = G__22166);

(array22035[(11)] = G__22167);

(array22035[(12)] = G__22168);

(array22035[(13)] = G__22169);

(array22035[(14)] = G__22170);

(array22035[(15)] = G__22171);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__22172,G__22173,G__22174,G__22175,G__22176,G__22177,G__22178,G__22179,G__22180,G__22181,G__22182,G__22183,G__22184,G__22185,G__22186,G__22187,G__22188){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(17));
(array22035[(0)] = G__22172);

(array22035[(1)] = G__22173);

(array22035[(2)] = G__22174);

(array22035[(3)] = G__22175);

(array22035[(4)] = G__22176);

(array22035[(5)] = G__22177);

(array22035[(6)] = G__22178);

(array22035[(7)] = G__22179);

(array22035[(8)] = G__22180);

(array22035[(9)] = G__22181);

(array22035[(10)] = G__22182);

(array22035[(11)] = G__22183);

(array22035[(12)] = G__22184);

(array22035[(13)] = G__22185);

(array22035[(14)] = G__22186);

(array22035[(15)] = G__22187);

(array22035[(16)] = G__22188);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__22189,G__22190,G__22191,G__22192,G__22193,G__22194,G__22195,G__22196,G__22197,G__22198,G__22199,G__22200,G__22201,G__22202,G__22203,G__22204,G__22205,G__22206){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(18));
(array22035[(0)] = G__22189);

(array22035[(1)] = G__22190);

(array22035[(2)] = G__22191);

(array22035[(3)] = G__22192);

(array22035[(4)] = G__22193);

(array22035[(5)] = G__22194);

(array22035[(6)] = G__22195);

(array22035[(7)] = G__22196);

(array22035[(8)] = G__22197);

(array22035[(9)] = G__22198);

(array22035[(10)] = G__22199);

(array22035[(11)] = G__22200);

(array22035[(12)] = G__22201);

(array22035[(13)] = G__22202);

(array22035[(14)] = G__22203);

(array22035[(15)] = G__22204);

(array22035[(16)] = G__22205);

(array22035[(17)] = G__22206);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__22207,G__22208,G__22209,G__22210,G__22211,G__22212,G__22213,G__22214,G__22215,G__22216,G__22217,G__22218,G__22219,G__22220,G__22221,G__22222,G__22223,G__22224,G__22225){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(19));
(array22035[(0)] = G__22207);

(array22035[(1)] = G__22208);

(array22035[(2)] = G__22209);

(array22035[(3)] = G__22210);

(array22035[(4)] = G__22211);

(array22035[(5)] = G__22212);

(array22035[(6)] = G__22213);

(array22035[(7)] = G__22214);

(array22035[(8)] = G__22215);

(array22035[(9)] = G__22216);

(array22035[(10)] = G__22217);

(array22035[(11)] = G__22218);

(array22035[(12)] = G__22219);

(array22035[(13)] = G__22220);

(array22035[(14)] = G__22221);

(array22035[(15)] = G__22222);

(array22035[(16)] = G__22223);

(array22035[(17)] = G__22224);

(array22035[(18)] = G__22225);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__22226,G__22227,G__22228,G__22229,G__22230,G__22231,G__22232,G__22233,G__22234,G__22235,G__22236,G__22237,G__22238,G__22239,G__22240,G__22241,G__22242,G__22243,G__22244,G__22245){
var self__ = this;
var this__21964__auto__ = this;
var array22035 = cljs.core.object_array.call(null,(20));
(array22035[(0)] = G__22226);

(array22035[(1)] = G__22227);

(array22035[(2)] = G__22228);

(array22035[(3)] = G__22229);

(array22035[(4)] = G__22230);

(array22035[(5)] = G__22231);

(array22035[(6)] = G__22232);

(array22035[(7)] = G__22233);

(array22035[(8)] = G__22234);

(array22035[(9)] = G__22235);

(array22035[(10)] = G__22236);

(array22035[(11)] = G__22237);

(array22035[(12)] = G__22238);

(array22035[(13)] = G__22239);

(array22035[(14)] = G__22240);

(array22035[(15)] = G__22241);

(array22035[(16)] = G__22242);

(array22035[(17)] = G__22243);

(array22035[(18)] = G__22244);

(array22035[(19)] = G__22245);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__21964__auto__,array22035,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20802__auto__){
var self__ = this;
var this__20802__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20798__auto__){
var self__ = this;
var this__20798__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20808__auto__){
var self__ = this;
var this__20808__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20799__auto__){
var self__ = this;
var this__20799__auto____$1 = this;
var h__20625__auto__ = self__.__hash;
if(!((h__20625__auto__ == null))){
return h__20625__auto__;
} else {
var h__20625__auto____$1 = cljs.core.hash_imap.call(null,this__20799__auto____$1);
self__.__hash = h__20625__auto____$1;

return h__20625__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20800__auto__,other__20801__auto__){
var self__ = this;
var this__20800__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20178__auto__ = other__20801__auto__;
if(cljs.core.truth_(and__20178__auto__)){
var and__20178__auto____$1 = (this__20800__auto____$1.constructor === other__20801__auto__.constructor);
if(and__20178__auto____$1){
return cljs.core.equiv_map.call(null,this__20800__auto____$1,other__20801__auto__);
} else {
return and__20178__auto____$1;
}
} else {
return and__20178__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20813__auto__,k__20814__auto__){
var self__ = this;
var this__20813__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__20814__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20813__auto____$1),self__.__meta),k__20814__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20814__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20811__auto__,k__20812__auto__,G__22246){
var self__ = this;
var this__20811__auto____$1 = this;
var pred__22251 = cljs.core.keyword_identical_QMARK_;
var expr__22252 = k__20812__auto__;
if(cljs.core.truth_(pred__22251.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__22252))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__22246,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22251.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__22252))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__22246,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20812__auto__,G__22246),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20816__auto__){
var self__ = this;
var this__20816__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20803__auto__,G__22246){
var self__ = this;
var this__20803__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__22246,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20809__auto__,entry__20810__auto__){
var self__ = this;
var this__20809__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20810__auto__)){
return cljs.core._assoc.call(null,this__20809__auto____$1,cljs.core._nth.call(null,entry__20810__auto__,(0)),cljs.core._nth.call(null,entry__20810__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20809__auto____$1,entry__20810__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__20838__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__20838__auto__,writer__20839__auto__){
return cljs.core._write.call(null,writer__20839__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__22248){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__22248),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__22248),null,cljs.core.dissoc.call(null,G__22248,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
});

com.rpl.specter.impl.bind_params_STAR_ = (function com$rpl$specter$impl$bind_params_STAR_(params_needed_path,params,idx){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,params_needed_path.transform_fns,params,idx);
});
com.rpl.specter.impl.seq_contains_QMARK_ = (function com$rpl$specter$impl$seq_contains_QMARK_(aseq,val){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,val),aseq)));
});
com.rpl.specter.impl.no_prot_error_str = (function com$rpl$specter$impl$no_prot_error_str(obj){
return [cljs.core.str("Protocol implementation cannot be found for object.\n        Extending Specter protocols should not be done inline in a deftype definition\n        because that prevents Specter from finding the protocol implementations for\n        optimized performance. Instead, you should extend the protocols via an\n        explicit extend-protocol call. \n"),cljs.core.str(obj)].join('');
});
com.rpl.specter.impl.structure_path_impl = (function com$rpl$specter$impl$structure_path_impl(obj){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__22264,G__22265,G__22266){
return com.rpl.specter.protocols.select_STAR_.call(null,G__22264,G__22265,G__22266);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__22268,G__22269,G__22270){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__22268,G__22269,G__22270);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__22275,G__22276){
return com.rpl.specter.protocols.collect_val.call(null,G__22275,G__22276);
}):com.rpl.specter.protocols.collect_val)], null);
});
com.rpl.specter.impl.coerce_collector = (function com$rpl$specter$impl$coerce_collector(this$){
var cfn = new cljs.core.Keyword(null,"collect-val","collect-val",801894069).cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.collector_impl.call(null,this$));
var afn = ((function (cfn){
return (function (params,params_idx,vals,structure,next_fn){
return next_fn.call(null,params,params_idx,cljs.core.conj.call(null,vals,cfn.call(null,this$,structure)),structure);
});})(cfn))
;
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,afn,afn));
});
com.rpl.specter.impl.coerce_structure_path = (function com$rpl$specter$impl$coerce_structure_path(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return selector.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return transformer.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.coerce_structure_path_rich = (function com$rpl$specter$impl$coerce_structure_path_rich(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.structure_path_QMARK_ = (function com$rpl$specter$impl$structure_path_QMARK_(obj){
var or__20190__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__20190__auto__){
return or__20190__auto__;
} else {
if(!((obj == null))){
if((false) || (obj.com$rpl$specter$protocols$StructurePath$)){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.StructurePath,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.StructurePath,obj);
}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((!((this$ == null))) && (!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
var x__20845__auto__ = (((this$ == null))?null:this$);
var m__20846__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,this$);
} else {
var m__20846__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CoercePath.coerce-path",this$);
}
}
}
});

(com.rpl.specter.impl.CoercePath["null"] = true);

(com.rpl.specter.impl.coerce_path["null"] = (function (this$){
return com.rpl.specter.impl.coerce_structure_path.call(null,null);
}));

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.comp_paths_STAR_.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

(com.rpl.specter.impl.CoercePath["_"] = true);

(com.rpl.specter.impl.coerce_path["_"] = (function (this$){
if(cljs.core.truth_(com.rpl.specter.impl.structure_path_QMARK_.call(null,this$))){
return com.rpl.specter.impl.coerce_structure_path.call(null,this$);
} else {
if(((!((this$ == null)))?(((false) || (this$.com$rpl$specter$protocols$Collector$))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$))){
return com.rpl.specter.impl.coerce_collector.call(null,this$);
} else {
return com.rpl.specter.impl.throw_illegal.call(null,com.rpl.specter.impl.no_prot_error_str.call(null,this$));

}
}
}));
com.rpl.specter.impl.extype = (function com$rpl$specter$impl$extype(f){
var exs = f.executors;
return exs.type;
});
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__22283){
var vec__22285 = p__22283;
var f = cljs.core.nth.call(null,vec__22285,(0),null);
var _ = cljs.core.nthnext.call(null,vec__22285,(1));
var all = vec__22285;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__22285,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__22285,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__22285,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__22285,f,_,all))
);
});
;})(exs,t,vec__22285,f,_,all))
});})(exs,t,vec__22285,f,_,all))
:((function (exs,t,vec__22285,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__22285,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__22285,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__22285,f,_,all))
);
});
;})(exs,t,vec__22285,f,_,all))
});})(exs,t,vec__22285,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__22285,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__22285,f,_,all))
,all);
});
com.rpl.specter.impl.coerce_tfns_rich = (function com$rpl$specter$impl$coerce_tfns_rich(tfns){
if(cljs.core._EQ_.call(null,com.rpl.specter.impl.extype.call(null,tfns),new cljs.core.Keyword(null,"richpath","richpath",-150197948))){
return tfns;
} else {
var selector = tfns.selector;
var transformer = tfns.transformer;
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
);
}
});
com.rpl.specter.impl.capture_params_internally = (function com$rpl$specter$impl$capture_params_internally(path){
if(!((path instanceof com.rpl.specter.impl.CompiledPath))){
return path;
} else {
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(path);
var params_idx = new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(path);
var selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
var transformer = new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
if(cljs.core.empty_QMARK_.call(null,params)){
return path;
} else {
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return selector.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return transformer.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
));
}
}
});
(com.rpl.specter.impl.PathComposer["null"] = true);

(com.rpl.specter.impl.comp_paths_STAR_["null"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

(com.rpl.specter.impl.PathComposer["_"] = true);

(com.rpl.specter.impl.comp_paths_STAR_["_"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1 = (function (structure_paths){
var structure_paths__$1 = this;
if(cljs.core.empty_QMARK_.call(null,structure_paths__$1)){
return com.rpl.specter.impl.coerce_path.call(null,null);
} else {
var coerced = cljs.core.map.call(null,com.rpl.specter.impl.capture_params_internally,cljs.core.map.call(null,com.rpl.specter.impl.coerce_path,structure_paths__$1));
var combined = cljs.core.map.call(null,com.rpl.specter.impl.combine_same_types,cljs.core.partition_by.call(null,com.rpl.specter.impl.extype,cljs.core.map.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),coerced)));
var result_tfn = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,combined)))?cljs.core.first.call(null,combined):com.rpl.specter.impl.combine_same_types.call(null,cljs.core.map.call(null,com.rpl.specter.impl.coerce_tfns_rich,combined)));
var needs_params_paths = cljs.core.filter.call(null,((function (coerced,combined,result_tfn,structure_paths__$1){
return (function (p1__22286_SHARP_){
return (p1__22286_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
});})(coerced,combined,result_tfn,structure_paths__$1))
,coerced);
if(cljs.core.empty_QMARK_.call(null,needs_params_paths)){
return com.rpl.specter.impl.no_params_compiled_path.call(null,result_tfn);
} else {
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.coerce_tfns_rich.call(null,result_tfn),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),needs_params_paths)));
}
}
});
com.rpl.specter.impl.num_needed_params = (function com$rpl$specter$impl$num_needed_params(path){
if((path instanceof com.rpl.specter.impl.CompiledPath)){
return (0);
} else {
return new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(path);
}
});

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((!((cell == null))) && (!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
var x__20845__auto__ = (((cell == null))?null:cell);
var m__20846__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,cell,x);
} else {
var m__20846__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,cell,x);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableCell.set_cell",cell);
}
}
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
})
com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = true;

com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

com.rpl.specter.impl.MutableCell.cljs$lang$type = true;

com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell";

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args22287 = [];
var len__21248__auto___22290 = arguments.length;
var i__21249__auto___22291 = (0);
while(true){
if((i__21249__auto___22291 < len__21248__auto___22290)){
args22287.push((arguments[i__21249__auto___22291]));

var G__22292 = (i__21249__auto___22291 + (1));
i__21249__auto___22291 = G__22292;
continue;
} else {
}
break;
}

var G__22289 = args22287.length;
switch (G__22289) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22287.length)].join('')));

}
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.call(null,null);
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
});

com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1;
com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell.call(null,cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = afn.call(null,com.rpl.specter.impl.get_cell.call(null,cell));
com.rpl.specter.impl.set_cell_BANG_.call(null,cell,ret);

return ret;
});
com.rpl.specter.impl.append = (function com$rpl$specter$impl$append(coll,elem){
return cljs.core.conj.call(null,cljs.core.vec.call(null,coll),elem);
});

/**
 * @interface
 */
com.rpl.specter.impl.SetExtremes = function(){};

com.rpl.specter.impl.set_first = (function com$rpl$specter$impl$set_first(s,val){
if((!((s == null))) && (!((s.com$rpl$specter$impl$SetExtremes$set_first$arity$2 == null)))){
return s.com$rpl$specter$impl$SetExtremes$set_first$arity$2(s,val);
} else {
var x__20845__auto__ = (((s == null))?null:s);
var m__20846__auto__ = (com.rpl.specter.impl.set_first[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,s,val);
} else {
var m__20846__auto____$1 = (com.rpl.specter.impl.set_first["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,s,val);
} else {
throw cljs.core.missing_protocol.call(null,"SetExtremes.set-first",s);
}
}
}
});

com.rpl.specter.impl.set_last = (function com$rpl$specter$impl$set_last(s,val){
if((!((s == null))) && (!((s.com$rpl$specter$impl$SetExtremes$set_last$arity$2 == null)))){
return s.com$rpl$specter$impl$SetExtremes$set_last$arity$2(s,val);
} else {
var x__20845__auto__ = (((s == null))?null:s);
var m__20846__auto__ = (com.rpl.specter.impl.set_last[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,s,val);
} else {
var m__20846__auto____$1 = (com.rpl.specter.impl.set_last["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,s,val);
} else {
throw cljs.core.missing_protocol.call(null,"SetExtremes.set-last",s);
}
}
}
});

com.rpl.specter.impl.set_first_list = (function com$rpl$specter$impl$set_first_list(l,v){
return cljs.core.cons.call(null,v,cljs.core.rest.call(null,l));
});
com.rpl.specter.impl.set_last_list = (function com$rpl$specter$impl$set_last_list(l,v){
return com.rpl.specter.impl.append.call(null,cljs.core.butlast.call(null,l),v);
});
cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$set_first$arity$2 = (function (v,val){
var v__$1 = this;
return cljs.core.assoc.call(null,v__$1,(0),val);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$set_last$arity$2 = (function (v,val){
var v__$1 = this;
return cljs.core.assoc.call(null,v__$1,(cljs.core.count.call(null,v__$1) - (1)),val);
});

(com.rpl.specter.impl.SetExtremes["_"] = true);

(com.rpl.specter.impl.set_first["_"] = (function (l,val){
return com.rpl.specter.impl.set_first_list.call(null,l,val);
}));

(com.rpl.specter.impl.set_last["_"] = (function (l,val){
return com.rpl.specter.impl.set_last_list.call(null,l,val);
}));
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
return clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return ((f instanceof clojure.lang.Cons)) || ((f instanceof clojure.lang.LazySeq)) || (cljs.core.list_QMARK_.call(null,f));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
var ret = clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(cljs.core.truth_((function (){var and__20178__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__20178__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__20178__auto__;
}
})())){
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.conj_all_BANG_ = (function com$rpl$specter$impl$conj_all_BANG_(cell,elems){
return com.rpl.specter.impl.set_cell_BANG_.call(null,cell,cljs.core.concat.call(null,com.rpl.specter.impl.get_cell.call(null,cell),elems));
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.select_executor.call(null,path.params,path.params_idx,tfns.selector,structure);
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(path,transform_fn,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.transform_executor.call(null,path.params,path.params_idx,tfns.transformer,transform_fn,structure);
});
com.rpl.specter.impl.not_selected_QMARK__STAR_ = (function com$rpl$specter$impl$not_selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.selected_QMARK__STAR_ = (function com$rpl$specter$impl$selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.not.call(null,com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.PersistentVector.EMPTY);
var walker = ((function (ret){
return (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_(pred.call(null,structure__$1))){
return com.rpl.specter.impl.conj_all_BANG_.call(null,ret,continue_fn.call(null,structure__$1));
} else {
return clojure.walk.walk.call(null,com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});})(ret))
;
walker.call(null,structure);

return com.rpl.specter.impl.get_cell.call(null,ret);
});
com.rpl.specter.impl.filter_PLUS_ancestry = (function com$rpl$specter$impl$filter_PLUS_ancestry(path,aseq){
var aseq__$1 = cljs.core.vec.call(null,aseq);
return cljs.core.reduce.call(null,((function (aseq__$1){
return (function (p__22296,i){
var vec__22297 = p__22296;
var s = cljs.core.nth.call(null,vec__22297,(0),null);
var m = cljs.core.nth.call(null,vec__22297,(1),null);
var orig = vec__22297;
var e = cljs.core.get.call(null,aseq__$1,i);
var pos = cljs.core.count.call(null,s);
if(cljs.core.truth_(com.rpl.specter.impl.selected_QMARK__STAR_.call(null,path,e))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,s,e),cljs.core.assoc.call(null,m,pos,i)], null);
} else {
return orig;
}
});})(aseq__$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.range.call(null,cljs.core.count.call(null,aseq__$1)));
});
com.rpl.specter.impl.key_select = (function com$rpl$specter$impl$key_select(akey,structure,next_fn){
return next_fn.call(null,cljs.core.get.call(null,structure,akey));
});
com.rpl.specter.impl.key_transform = (function com$rpl$specter$impl$key_transform(akey,structure,next_fn){
return cljs.core.assoc.call(null,structure,akey,next_fn.call(null,cljs.core.get.call(null,structure,akey)));
});

/**
* @constructor
*/
com.rpl.specter.impl.AllStructurePath = (function (){
})

com.rpl.specter.impl.AllStructurePath.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.AllStructurePath.cljs$lang$type = true;

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorStr = "com.rpl.specter.impl/AllStructurePath";

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorPrWriter = (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"com.rpl.specter.impl/AllStructurePath");
});

com.rpl.specter.impl.__GT_AllStructurePath = (function com$rpl$specter$impl$__GT_AllStructurePath(){
return (new com.rpl.specter.impl.AllStructurePath());
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$ = true;

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,clojure.core.reducers.mapcat.call(null,next_fn,structure));
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
var empty_structure = cljs.core.empty.call(null,structure);
if(cljs.core.list_QMARK_.call(null,empty_structure)){
return cljs.core.doall.call(null,cljs.core.map.call(null,next_fn,structure));
} else {
return cljs.core.into.call(null,empty_structure,clojure.core.reducers.map.call(null,next_fn,structure));
}
});

/**
* @constructor
*/
com.rpl.specter.impl.ValCollect = (function (){
})

com.rpl.specter.impl.ValCollect.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.ValCollect.cljs$lang$type = true;

com.rpl.specter.impl.ValCollect.cljs$lang$ctorStr = "com.rpl.specter.impl/ValCollect";

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"com.rpl.specter.impl/ValCollect");
});

com.rpl.specter.impl.__GT_ValCollect = (function com$rpl$specter$impl$__GT_ValCollect(){
return (new com.rpl.specter.impl.ValCollect());
});

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$ = true;

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$collect_val$arity$2 = (function (this$,structure){
var this$__$1 = this;
return structure;
});

/**
* @constructor
*/
com.rpl.specter.impl.PosStructurePath = (function (getter,setter){
this.getter = getter;
this.setter = setter;
})

com.rpl.specter.impl.PosStructurePath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

com.rpl.specter.impl.PosStructurePath.cljs$lang$type = true;

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorStr = "com.rpl.specter.impl/PosStructurePath";

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorPrWriter = (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"com.rpl.specter.impl/PosStructurePath");
});

com.rpl.specter.impl.__GT_PosStructurePath = (function com$rpl$specter$impl$__GT_PosStructurePath(getter,setter){
return (new com.rpl.specter.impl.PosStructurePath(getter,setter));
});

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$ = true;

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(!(cljs.core.empty_QMARK_.call(null,structure))){
return next_fn.call(null,this$__$1.getter.call(null,structure));
} else {
return null;
}
});

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(cljs.core.empty_QMARK_.call(null,structure)){
return structure;
} else {
return this$__$1.setter.call(null,structure,next_fn.call(null,this$__$1.getter.call(null,structure)));
}
});
com.rpl.specter.impl.srange_select = (function com$rpl$specter$impl$srange_select(structure,start,end,next_fn){
return next_fn.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,structure),start,end));
});
com.rpl.specter.impl.srange_transform = (function com$rpl$specter$impl$srange_transform(structure,start,end,next_fn){
var structurev = cljs.core.vec.call(null,structure);
var newpart = next_fn.call(null,cljs.core.subvec.call(null,structurev,start,end));
var res = cljs.core.concat.call(null,cljs.core.subvec.call(null,structurev,(0),start),newpart,cljs.core.subvec.call(null,structurev,end,cljs.core.count.call(null,structure)));
if(cljs.core.vector_QMARK_.call(null,structure)){
return cljs.core.vec.call(null,res);
} else {
return res;
}
});
(com.rpl.specter.protocols.StructurePath["null"] = true);

(com.rpl.specter.protocols.select_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));

(com.rpl.specter.protocols.transform_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));
com.rpl.specter.impl.retrieve_cond_selector = (function com$rpl$specter$impl$retrieve_cond_selector(cond_paths,structure){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p__22300){
var vec__22301 = p__22300;
var c_selector = cljs.core.nth.call(null,vec__22301,(0),null);
var _ = cljs.core.nth.call(null,vec__22301,(1),null);
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,c_selector,structure));
}),cljs.core.partition.call(null,(2),cond_paths))));
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return null;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return structure;
}
});

//# sourceMappingURL=impl.js.map?rel=1452962185640