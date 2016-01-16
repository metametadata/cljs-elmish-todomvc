// Compiled by ClojureScript 1.7.170 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__21255__auto__ = [];
var len__21248__auto___23144 = arguments.length;
var i__21249__auto___23145 = (0);
while(true){
if((i__21249__auto___23145 < len__21248__auto___23144)){
args__21255__auto__.push((arguments[i__21249__auto___23145]));

var G__23146 = (i__21249__auto___23145 + (1));
i__21249__auto___23145 = G__23146;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((0) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((0)),(0))):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__21256__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,paths));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq23143){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23143));
});
/**
 * Version of select that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the selector.
 */
com.rpl.specter.select = (function com$rpl$specter$select(selector,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-one that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one = (function com$rpl$specter$compiled_select_one(selector,structure){
var res = com.rpl.specter.compiled_select.call(null,selector,structure);
if((cljs.core.count.call(null,res) > (1))){
com.rpl.specter.impl.throw_illegal.call(null,"More than one element found for params: ",selector,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one = (function com$rpl$specter$select_one(selector,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-one! that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = (function com$rpl$specter$compiled_select_one_BANG_(selector,structure){
var res = com.rpl.specter.compiled_select.call(null,selector,structure);
if(cljs.core.not_EQ_.call(null,(1),cljs.core.count.call(null,res))){
com.rpl.specter.impl.throw_illegal.call(null,"Expected exactly one element for params: ",selector,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG_ = (function com$rpl$specter$select_one_BANG_(selector,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-first that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_first = (function com$rpl$specter$compiled_select_first(selector,structure){
return cljs.core.first.call(null,com.rpl.specter.compiled_select.call(null,selector,structure));
});
/**
 * Returns first element found. Not any more efficient than select, just a convenience
 */
com.rpl.specter.select_first = (function com$rpl$specter$select_first(selector,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of transform that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the selector and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform = (function com$rpl$specter$transform(selector,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure);
});
/**
 * Version of setval that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_setval = (function com$rpl$specter$compiled_setval(selector,val,structure){
return com.rpl.specter.compiled_transform.call(null,selector,(function (_){
return val;
}),structure);
});
/**
 * Navigates to each value specified by the selector and replaces it by val
 */
com.rpl.specter.setval = (function com$rpl$specter$setval(selector,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),val,structure);
});
/**
 * Version of replace-in that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = (function com$rpl$specter$compiled_replace_in(var_args){
var args__21255__auto__ = [];
var len__21248__auto___23155 = arguments.length;
var i__21249__auto___23156 = (0);
while(true){
if((i__21249__auto___23156 < len__21248__auto___23155)){
args__21255__auto__.push((arguments[i__21249__auto___23156]));

var G__23157 = (i__21249__auto___23156 + (1));
i__21249__auto___23156 = G__23157;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((3) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21256__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__23151){
var map__23152 = p__23151;
var map__23152__$1 = ((((!((map__23152 == null)))?((((map__23152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23152):map__23152);
var merge_fn = cljs.core.get.call(null,map__23152__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,selector,((function (state,map__23152,map__23152__$1,merge_fn){
return (function (e){
var res = transform_fn.call(null,e);
if(cljs.core.truth_(res)){
var vec__23154 = res;
var ret = cljs.core.nth.call(null,vec__23154,(0),null);
var user_ret = cljs.core.nth.call(null,vec__23154,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return e;
}
});})(state,map__23152,map__23152__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq23147){
var G__23148 = cljs.core.first.call(null,seq23147);
var seq23147__$1 = cljs.core.next.call(null,seq23147);
var G__23149 = cljs.core.first.call(null,seq23147__$1);
var seq23147__$2 = cljs.core.next.call(null,seq23147__$1);
var G__23150 = cljs.core.first.call(null,seq23147__$2);
var seq23147__$3 = cljs.core.next.call(null,seq23147__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__23148,G__23149,G__23150,seq23147__$3);
});
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 *   The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformd in the data structure.
 */
com.rpl.specter.replace_in = (function com$rpl$specter$replace_in(var_args){
var args__21255__auto__ = [];
var len__21248__auto___23165 = arguments.length;
var i__21249__auto___23166 = (0);
while(true){
if((i__21249__auto___23166 < len__21248__auto___23165)){
args__21255__auto__.push((arguments[i__21249__auto___23166]));

var G__23167 = (i__21249__auto___23166 + (1));
i__21249__auto___23166 = G__23167;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((3) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21256__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__23162){
var map__23163 = p__23162;
var map__23163__$1 = ((((!((map__23163 == null)))?((((map__23163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23163):map__23163);
var merge_fn = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq23158){
var G__23159 = cljs.core.first.call(null,seq23158);
var seq23158__$1 = cljs.core.next.call(null,seq23158);
var G__23160 = cljs.core.first.call(null,seq23158__$1);
var seq23158__$2 = cljs.core.next.call(null,seq23158__$1);
var G__23161 = cljs.core.first.call(null,seq23158__$2);
var seq23158__$3 = cljs.core.next.call(null,seq23158__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__23159,G__23160,G__23161,seq23158__$3);
});
/**
 * Takes a compiled selector that needs late-bound params and supplies it with
 *           an array of params and a position in the array from which to begin reading
 *           params. The return value is an executable selector.
 */
com.rpl.specter.bind_params_STAR_ = com.rpl.specter.impl.bind_params_STAR_;
com.rpl.specter.ALL = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_AllStructurePath.call(null));
com.rpl.specter.VAL = com.rpl.specter.impl.__GT_ValCollect.call(null);
com.rpl.specter.LAST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.last,com.rpl.specter.impl.set_last));
com.rpl.specter.FIRST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.first,com.rpl.specter.impl.set_first));
/**
 * Uses start-fn and end-fn to determine the bounds of the subsequence
 *        to select when navigating. Each function takes in the structure as input.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 2),vals__23057__auto__,structure__23059__auto__);
});
var start_fn = (params23055[(params_idx23056 + (0))]);
var end_fn = (params23055[(params_idx23056 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 2),vals__23057__auto__,structure__23059__auto__);
});
var start_fn = (params23055[(params_idx23056 + (0))]);
var end_fn = (params23055[(params_idx23056 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 2),vals__23057__auto__,structure__23059__auto__);
});
var start = (params23055[(params_idx23056 + (0))]);
var end = (params23055[(params_idx23056 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 2),vals__23057__auto__,structure__23059__auto__);
});
var start = (params23055[(params_idx23056 + (0))]);
var end = (params23055[(params_idx23056 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var aset = (params23055[(params_idx23056 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var aset = (params23055[(params_idx23056 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var afn = (params23055[(params_idx23056 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var afn = (params23055[(params_idx23056 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var afn = (params23055[(params_idx23056 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var afn = (params23055[(params_idx23056 + (0))]);
return com.rpl.specter.impl.codewalk_until.call(null,afn,next_fn,structure);
})),1);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given selector path. An element matches the selector path if calling select
 *   on that element with the selector path yields anything other than an empty sequence.
 * 
 * The input path may be parameterized, in which case the result of filterer
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.filterer = (function com$rpl$specter$filterer(var_args){
var args__21255__auto__ = [];
var len__21248__auto___23177 = arguments.length;
var i__21249__auto___23178 = (0);
while(true){
if((i__21249__auto___23178 < len__21248__auto___23177)){
args__21255__auto__.push((arguments[i__21249__auto___23178]));

var G__23179 = (i__21249__auto___23178 + (1));
i__21249__auto___23178 = G__23179;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((0) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((0)),(0))):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__21256__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__23076__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__23077__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__23076__auto__);
var offsets__23078__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__23077__auto__));
var num_params23172 = cljs.core.last.call(null,offsets__23078__auto__);
var latefns23170 = cljs.core.map.call(null,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172){
return (function (o__23079__auto__,p__23080__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__23080__auto__))){
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172){
return (function (params__23081__auto__,params_idx__23082__auto__){
return p__23080__auto__;
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172))
} else {
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172){
return (function (params__23081__auto__,params_idx__23082__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__23080__auto__,params__23081__auto__,(params_idx__23082__auto__ + o__23079__auto__));
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172))
}
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172))
,offsets__23078__auto__,paths__23076__auto__);
var vec__23173 = latefns23170;
var G__23171 = cljs.core.nth.call(null,vec__23173,(0),null);
var ret__23083__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23172),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171))
;
var late = G__23171.call(null,params23055,params_idx23056);
return next_fn.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171){
return (function (p1__23168_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__23168_SHARP_);
});})(next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171))
,structure)));
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171))
,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23172),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171))
;
var late = G__23171.call(null,params23055,params_idx23056);
var vec__23174 = com.rpl.specter.impl.filter_PLUS_ancestry.call(null,late,structure);
var filtered = cljs.core.nth.call(null,vec__23174,(0),null);
var ancestry = cljs.core.nth.call(null,vec__23174,(1),null);
var next = cljs.core.vec.call(null,next_fn.call(null,filtered));
return cljs.core.reduce.call(null,((function (vec__23174,filtered,ancestry,next,next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171){
return (function (curr,p__23175){
var vec__23176 = p__23175;
var newi = cljs.core.nth.call(null,vec__23176,(0),null);
var oldi = cljs.core.nth.call(null,vec__23176,(1),null);
return cljs.core.assoc.call(null,curr,oldi,cljs.core.get.call(null,next,newi));
});})(vec__23174,filtered,ancestry,next,next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171))
,cljs.core.vec.call(null,structure),ancestry);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23172,latefns23170,vec__23173,G__23171))
),num_params23172);
if(cljs.core._EQ_.call(null,(0),num_params23172)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__23083__auto__,null,(0));
} else {
return ret__23083__auto__;
}
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq23169){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23169));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var key = (params23055[(params_idx23056 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var key = (params23055[(params_idx23056 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var afn = (params23055[(params_idx23056 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var afn = (params23055[(params_idx23056 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
/**
 * Filters the current value based on whether a selector finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 * 
 *   The input path may be parameterized, in which case the result of selected?
 *   will be parameterized in the order of which the parameterized selectors
 *   were declared.
 */
com.rpl.specter.selected_QMARK_ = (function com$rpl$specter$selected_QMARK_(var_args){
var args__21255__auto__ = [];
var len__21248__auto___23187 = arguments.length;
var i__21249__auto___23188 = (0);
while(true){
if((i__21249__auto___23188 < len__21248__auto___23187)){
args__21255__auto__.push((arguments[i__21249__auto___23188]));

var G__23189 = (i__21249__auto___23188 + (1));
i__21249__auto___23188 = G__23189;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((0) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__21256__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__23076__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__23077__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__23076__auto__);
var offsets__23078__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__23077__auto__));
var num_params23185 = cljs.core.last.call(null,offsets__23078__auto__);
var latefns23183 = cljs.core.map.call(null,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185){
return (function (o__23079__auto__,p__23080__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__23080__auto__))){
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185){
return (function (params__23081__auto__,params_idx__23082__auto__){
return p__23080__auto__;
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185))
} else {
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185){
return (function (params__23081__auto__,params_idx__23082__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__23080__auto__,params__23081__auto__,(params_idx__23082__auto__ + o__23079__auto__));
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185))
}
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185))
,offsets__23078__auto__,paths__23076__auto__);
var vec__23186 = latefns23183;
var G__23184 = cljs.core.nth.call(null,vec__23186,(0),null);
var ret__23083__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23185),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184))
;
var late = G__23184.call(null,params23055,params_idx23056);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184){
return (function (p1__23180_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__23180_SHARP_);
});})(next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184))
,structure,next_fn);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184))
,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23185),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184))
;
var late = G__23184.call(null,params23055,params_idx23056);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184){
return (function (p1__23181_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__23181_SHARP_);
});})(next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184))
,structure,next_fn);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23185,latefns23183,vec__23186,G__23184))
),num_params23185);
if(cljs.core._EQ_.call(null,(0),num_params23185)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__23083__auto__,null,(0));
} else {
return ret__23083__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq23182){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23182));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__21255__auto__ = [];
var len__21248__auto___23197 = arguments.length;
var i__21249__auto___23198 = (0);
while(true){
if((i__21249__auto___23198 < len__21248__auto___23197)){
args__21255__auto__.push((arguments[i__21249__auto___23198]));

var G__23199 = (i__21249__auto___23198 + (1));
i__21249__auto___23198 = G__23199;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((0) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__21256__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__23076__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__23077__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__23076__auto__);
var offsets__23078__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__23077__auto__));
var num_params23195 = cljs.core.last.call(null,offsets__23078__auto__);
var latefns23193 = cljs.core.map.call(null,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195){
return (function (o__23079__auto__,p__23080__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__23080__auto__))){
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195){
return (function (params__23081__auto__,params_idx__23082__auto__){
return p__23080__auto__;
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195))
} else {
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195){
return (function (params__23081__auto__,params_idx__23082__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__23080__auto__,params__23081__auto__,(params_idx__23082__auto__ + o__23079__auto__));
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195))
}
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195))
,offsets__23078__auto__,paths__23076__auto__);
var vec__23196 = latefns23193;
var G__23194 = cljs.core.nth.call(null,vec__23196,(0),null);
var ret__23083__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23195),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194))
;
var late = G__23194.call(null,params23055,params_idx23056);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194){
return (function (p1__23190_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__23190_SHARP_);
});})(next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194))
,structure,next_fn);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194))
,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23195),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194))
;
var late = G__23194.call(null,params23055,params_idx23056);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194){
return (function (p1__23191_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__23191_SHARP_);
});})(next_fn,late,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194))
,structure,next_fn);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23195,latefns23193,vec__23196,G__23194))
),num_params23195);
if(cljs.core._EQ_.call(null,(0),num_params23195)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__23083__auto__,null,(0));
} else {
return ret__23083__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq23192){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23192));
});
/**
 * Navigates to a view of the current value by transforming it with the
 * specified selector and update-fn.
 * 
 * The input path may be parameterized, in which case the result of transformed
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.transformed = (function com$rpl$specter$transformed(path,update_fn){
var paths__23076__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__23077__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__23076__auto__);
var offsets__23078__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__23077__auto__));
var num_params23206 = cljs.core.last.call(null,offsets__23078__auto__);
var latefns23204 = cljs.core.map.call(null,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206){
return (function (o__23079__auto__,p__23080__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__23080__auto__))){
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206){
return (function (params__23081__auto__,params_idx__23082__auto__){
return p__23080__auto__;
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206))
} else {
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206){
return (function (params__23081__auto__,params_idx__23082__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__23080__auto__,params__23081__auto__,(params_idx__23082__auto__ + o__23079__auto__));
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206))
}
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206))
,offsets__23078__auto__,paths__23076__auto__);
var vec__23207 = latefns23204;
var G__23205 = cljs.core.nth.call(null,vec__23207,(0),null);
var ret__23083__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206,latefns23204,vec__23207,G__23205){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206,latefns23204,vec__23207,G__23205){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23206),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206,latefns23204,vec__23207,G__23205))
;
var late = G__23205.call(null,params23055,params_idx23056);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206,latefns23204,vec__23207,G__23205))
,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206,latefns23204,vec__23207,G__23205){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206,latefns23204,vec__23207,G__23205){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23206),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206,latefns23204,vec__23207,G__23205))
;
var late = G__23205.call(null,params23055,params_idx23056);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23206,latefns23204,vec__23207,G__23205))
),num_params23206);
if(cljs.core._EQ_.call(null,(0),num_params23206)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__23083__auto__,null,(0));
} else {
return ret__23083__auto__;
}
});
cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$ = true;

cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return next_fn.call(null,cljs.core.get.call(null,structure,kw__$1));
});

cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return cljs.core.assoc.call(null,structure,kw__$1,next_fn.call(null,cljs.core.get.call(null,structure,kw__$1)));
});
(com.rpl.specter.protocols.StructurePath["function"] = true);

(com.rpl.specter.protocols.select_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}));

(com.rpl.specter.protocols.transform_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
}));
cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$ = true;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,aset__$1,structure,next_fn);
});

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,aset__$1,structure,next_fn);
});
/**
 * Keeps the element only if it matches the supplied predicate. This is the
 *        late-bound parameterized version of using a function directly in a path.
 */
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var afn = (params23055[(params_idx23056 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var afn = (params23055[(params_idx23056 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var v = (params23055[(params_idx23056 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + 1),vals__23057__auto__,structure__23059__auto__);
});
var v = (params23055[(params_idx23056 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__21255__auto__ = [];
var len__21248__auto___23213 = arguments.length;
var i__21249__auto___23214 = (0);
while(true){
if((i__21249__auto___23214 < len__21248__auto___23213)){
args__21255__auto__.push((arguments[i__21249__auto___23214]));

var G__23215 = (i__21249__auto___23214 + (1));
i__21249__auto___23214 = G__23215;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((0) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__21256__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__23076__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__23077__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__23076__auto__);
var offsets__23078__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__23077__auto__));
var num_params23211 = cljs.core.last.call(null,offsets__23078__auto__);
var latefns23209 = cljs.core.map.call(null,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23211){
return (function (o__23079__auto__,p__23080__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__23080__auto__))){
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23211){
return (function (params__23081__auto__,params_idx__23082__auto__){
return p__23080__auto__;
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23211))
} else {
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23211){
return (function (params__23081__auto__,params_idx__23082__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__23080__auto__,params__23081__auto__,(params_idx__23082__auto__ + o__23079__auto__));
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23211))
}
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23211))
,offsets__23078__auto__,paths__23076__auto__);
var vec__23212 = latefns23209;
var latefn23210 = cljs.core.nth.call(null,vec__23212,(0),null);
var ret__23083__auto__ = (function (){var collector__23068__auto__ = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23211,latefns23209,vec__23212,latefn23210){
return (function (params23055,params_idx23056,vals__23069__auto__,structure,next_fn__23070__auto__){
var late = latefn23210.call(null,params23055,params_idx23056);
var c__23071__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__23070__auto__.call(null,params23055,(params_idx23056 + num_params23211),cljs.core.conj.call(null,vals__23069__auto__,c__23071__auto__),structure);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23211,latefns23209,vec__23212,latefn23210))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__23068__auto__,collector__23068__auto__),num_params23211);
})();
if(cljs.core._EQ_.call(null,(0),num_params23211)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__23083__auto__,null,(0));
} else {
return ret__23083__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq23208){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23208));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__21255__auto__ = [];
var len__21248__auto___23221 = arguments.length;
var i__21249__auto___23222 = (0);
while(true){
if((i__21249__auto___23222 < len__21248__auto___23221)){
args__21255__auto__.push((arguments[i__21249__auto___23222]));

var G__23223 = (i__21249__auto___23222 + (1));
i__21249__auto___23222 = G__23223;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((0) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__21256__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__23076__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__23077__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__23076__auto__);
var offsets__23078__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__23077__auto__));
var num_params23219 = cljs.core.last.call(null,offsets__23078__auto__);
var latefns23217 = cljs.core.map.call(null,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23219){
return (function (o__23079__auto__,p__23080__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__23080__auto__))){
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23219){
return (function (params__23081__auto__,params_idx__23082__auto__){
return p__23080__auto__;
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23219))
} else {
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23219){
return (function (params__23081__auto__,params_idx__23082__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__23080__auto__,params__23081__auto__,(params_idx__23082__auto__ + o__23079__auto__));
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23219))
}
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23219))
,offsets__23078__auto__,paths__23076__auto__);
var vec__23220 = latefns23217;
var latefn23218 = cljs.core.nth.call(null,vec__23220,(0),null);
var ret__23083__auto__ = (function (){var collector__23068__auto__ = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23219,latefns23217,vec__23220,latefn23218){
return (function (params23055,params_idx23056,vals__23069__auto__,structure,next_fn__23070__auto__){
var late = latefn23218.call(null,params23055,params_idx23056);
var c__23071__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__23070__auto__.call(null,params23055,(params_idx23056 + num_params23219),cljs.core.conj.call(null,vals__23069__auto__,c__23071__auto__),structure);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23219,latefns23217,vec__23220,latefn23218))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__23068__auto__,collector__23068__auto__),num_params23219);
})();
if(cljs.core._EQ_.call(null,(0),num_params23219)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__23083__auto__,null,(0));
} else {
return ret__23083__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq23216){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23216));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__23068__auto__ = (function (params23055,params_idx23056,vals__23069__auto__,structure,next_fn__23070__auto__){
var val = (params23055[(params_idx23056 + (0))]);
var c__23071__auto__ = val;
return next_fn__23070__auto__.call(null,params23055,(params_idx23056 + 1),cljs.core.conj.call(null,vals__23069__auto__,c__23071__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__23068__auto__,collector__23068__auto__),1);
})();
/**
 * Takes in alternating cond-path selector cond-path selector...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following selector for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 * 
 * The input paths may be parameterized, in which case the result of cond-path
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.cond_path = (function com$rpl$specter$cond_path(var_args){
var args__21255__auto__ = [];
var len__21248__auto___23227 = arguments.length;
var i__21249__auto___23228 = (0);
while(true){
if((i__21249__auto___23228 < len__21248__auto___23227)){
args__21255__auto__.push((arguments[i__21249__auto___23228]));

var G__23229 = (i__21249__auto___23228 + (1));
i__21249__auto___23228 = G__23229;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((0) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__21256__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__23076__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__23077__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__23076__auto__);
var offsets__23078__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__23077__auto__));
var num_params23226 = cljs.core.last.call(null,offsets__23078__auto__);
var latefns23225 = cljs.core.map.call(null,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226){
return (function (o__23079__auto__,p__23080__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__23080__auto__))){
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226){
return (function (params__23081__auto__,params_idx__23082__auto__){
return p__23080__auto__;
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226))
} else {
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226){
return (function (params__23081__auto__,params_idx__23082__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__23080__auto__,params__23081__auto__,(params_idx__23082__auto__ + o__23079__auto__));
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226))
}
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226))
,offsets__23078__auto__,paths__23076__auto__);
var ret__23083__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23226),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225){
return (function (l__23126__auto__){
return l__23126__auto__.call(null,params23055,params_idx23056);
});})(next_fn,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225))
,latefns23225);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225))
,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23226),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225){
return (function (l__23126__auto__){
return l__23126__auto__.call(null,params23055,params_idx23056);
});})(next_fn,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225))
,latefns23225);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23226,latefns23225))
),num_params23226);
if(cljs.core._EQ_.call(null,(0),num_params23226)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__23083__auto__,null,(0));
} else {
return ret__23083__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq23224){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23224));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args23230 = [];
var len__21248__auto___23233 = arguments.length;
var i__21249__auto___23234 = (0);
while(true){
if((i__21249__auto___23234 < len__21248__auto___23233)){
args23230.push((arguments[i__21249__auto___23234]));

var G__23235 = (i__21249__auto___23234 + (1));
i__21249__auto___23234 = G__23235;
continue;
} else {
}
break;
}

var G__23232 = args23230.length;
switch (G__23232) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23230.length)].join('')));

}
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 = (function (cond_p,if_path){
return com.rpl.specter.cond_path.call(null,cond_p,if_path);
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 = (function (cond_p,if_path,else_path){
return com.rpl.specter.cond_path.call(null,cond_p,if_path,null,else_path);
});

com.rpl.specter.if_path.cljs$lang$maxFixedArity = 3;
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = (function com$rpl$specter$multi_path(var_args){
var args__21255__auto__ = [];
var len__21248__auto___23241 = arguments.length;
var i__21249__auto___23242 = (0);
while(true){
if((i__21249__auto___23242 < len__21248__auto___23241)){
args__21255__auto__.push((arguments[i__21249__auto___23242]));

var G__23243 = (i__21249__auto___23242 + (1));
i__21249__auto___23242 = G__23243;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((0) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__21256__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__23076__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__23077__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__23076__auto__);
var offsets__23078__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__23077__auto__));
var num_params23240 = cljs.core.last.call(null,offsets__23078__auto__);
var latefns23239 = cljs.core.map.call(null,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240){
return (function (o__23079__auto__,p__23080__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__23080__auto__))){
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240){
return (function (params__23081__auto__,params_idx__23082__auto__){
return p__23080__auto__;
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240))
} else {
return ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240){
return (function (params__23081__auto__,params_idx__23082__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__23080__auto__,params__23081__auto__,(params_idx__23082__auto__ + o__23079__auto__));
});
;})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240))
}
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240))
,offsets__23078__auto__,paths__23076__auto__);
var ret__23083__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23240),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239){
return (function (l__23126__auto__){
return l__23126__auto__.call(null,params23055,params_idx23056);
});})(next_fn,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239))
,latefns23239);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239){
return (function (p1__23237_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__23237_SHARP_,structure);
});})(next_fn,compiled_paths,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239))
,compiled_paths)));
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239))
,((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239){
return (function (params23055,params_idx23056,vals__23057__auto__,structure,next_fn__23058__auto__){
var next_fn = ((function (paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239){
return (function (structure__23059__auto__){
return next_fn__23058__auto__.call(null,params23055,(params_idx23056 + num_params23240),vals__23057__auto__,structure__23059__auto__);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239){
return (function (l__23126__auto__){
return l__23126__auto__.call(null,params23055,params_idx23056);
});})(next_fn,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239))
,latefns23239);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239){
return (function (structure__$1,selector){
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239))
,structure,compiled_paths);
});})(paths__23076__auto__,needed_params__23077__auto__,offsets__23078__auto__,num_params23240,latefns23239))
),num_params23240);
if(cljs.core._EQ_.call(null,(0),num_params23240)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__23083__auto__,null,(0));
} else {
return ret__23083__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq23238){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23238));
});

//# sourceMappingURL=specter.js.map?rel=1452962186091