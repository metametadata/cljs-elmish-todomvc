// Compiled by ClojureScript 1.7.170 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19888 = arguments.length;
var i__17810__auto___19889 = (0);
while(true){
if((i__17810__auto___19889 < len__17809__auto___19888)){
args__17816__auto__.push((arguments[i__17810__auto___19889]));

var G__19890 = (i__17810__auto___19889 + (1));
i__17810__auto___19889 = G__19890;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,paths));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq19887){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19887));
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
var args__17816__auto__ = [];
var len__17809__auto___19899 = arguments.length;
var i__17810__auto___19900 = (0);
while(true){
if((i__17810__auto___19900 < len__17809__auto___19899)){
args__17816__auto__.push((arguments[i__17810__auto___19900]));

var G__19901 = (i__17810__auto___19900 + (1));
i__17810__auto___19900 = G__19901;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__19895){
var map__19896 = p__19895;
var map__19896__$1 = ((((!((map__19896 == null)))?((((map__19896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19896):map__19896);
var merge_fn = cljs.core.get.call(null,map__19896__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,selector,((function (state,map__19896,map__19896__$1,merge_fn){
return (function (e){
var res = transform_fn.call(null,e);
if(cljs.core.truth_(res)){
var vec__19898 = res;
var ret = cljs.core.nth.call(null,vec__19898,(0),null);
var user_ret = cljs.core.nth.call(null,vec__19898,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return e;
}
});})(state,map__19896,map__19896__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq19891){
var G__19892 = cljs.core.first.call(null,seq19891);
var seq19891__$1 = cljs.core.next.call(null,seq19891);
var G__19893 = cljs.core.first.call(null,seq19891__$1);
var seq19891__$2 = cljs.core.next.call(null,seq19891__$1);
var G__19894 = cljs.core.first.call(null,seq19891__$2);
var seq19891__$3 = cljs.core.next.call(null,seq19891__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__19892,G__19893,G__19894,seq19891__$3);
});
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 *   The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformd in the data structure.
 */
com.rpl.specter.replace_in = (function com$rpl$specter$replace_in(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19909 = arguments.length;
var i__17810__auto___19910 = (0);
while(true){
if((i__17810__auto___19910 < len__17809__auto___19909)){
args__17816__auto__.push((arguments[i__17810__auto___19910]));

var G__19911 = (i__17810__auto___19910 + (1));
i__17810__auto___19910 = G__19911;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__19906){
var map__19907 = p__19906;
var map__19907__$1 = ((((!((map__19907 == null)))?((((map__19907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19907):map__19907);
var merge_fn = cljs.core.get.call(null,map__19907__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq19902){
var G__19903 = cljs.core.first.call(null,seq19902);
var seq19902__$1 = cljs.core.next.call(null,seq19902);
var G__19904 = cljs.core.first.call(null,seq19902__$1);
var seq19902__$2 = cljs.core.next.call(null,seq19902__$1);
var G__19905 = cljs.core.first.call(null,seq19902__$2);
var seq19902__$3 = cljs.core.next.call(null,seq19902__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__19903,G__19904,G__19905,seq19902__$3);
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
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 2),vals__19801__auto__,structure__19803__auto__);
});
var start_fn = (params19799[(params_idx19800 + (0))]);
var end_fn = (params19799[(params_idx19800 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 2),vals__19801__auto__,structure__19803__auto__);
});
var start_fn = (params19799[(params_idx19800 + (0))]);
var end_fn = (params19799[(params_idx19800 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 2),vals__19801__auto__,structure__19803__auto__);
});
var start = (params19799[(params_idx19800 + (0))]);
var end = (params19799[(params_idx19800 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 2),vals__19801__auto__,structure__19803__auto__);
});
var start = (params19799[(params_idx19800 + (0))]);
var end = (params19799[(params_idx19800 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var aset = (params19799[(params_idx19800 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var aset = (params19799[(params_idx19800 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var afn = (params19799[(params_idx19800 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var afn = (params19799[(params_idx19800 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var afn = (params19799[(params_idx19800 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var afn = (params19799[(params_idx19800 + (0))]);
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
var args__17816__auto__ = [];
var len__17809__auto___19921 = arguments.length;
var i__17810__auto___19922 = (0);
while(true){
if((i__17810__auto___19922 < len__17809__auto___19921)){
args__17816__auto__.push((arguments[i__17810__auto___19922]));

var G__19923 = (i__17810__auto___19922 + (1));
i__17810__auto___19922 = G__19923;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19821__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19820__auto__);
var offsets__19822__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19821__auto__));
var num_params19916 = cljs.core.last.call(null,offsets__19822__auto__);
var latefns19914 = cljs.core.map.call(null,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916){
return (function (o__19823__auto__,p__19824__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19824__auto__))){
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916){
return (function (params__19825__auto__,params_idx__19826__auto__){
return p__19824__auto__;
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916))
} else {
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916){
return (function (params__19825__auto__,params_idx__19826__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19824__auto__,params__19825__auto__,(params_idx__19826__auto__ + o__19823__auto__));
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916))
}
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916))
,offsets__19822__auto__,paths__19820__auto__);
var vec__19917 = latefns19914;
var G__19915 = cljs.core.nth.call(null,vec__19917,(0),null);
var ret__19827__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19916),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915))
;
var late = G__19915.call(null,params19799,params_idx19800);
return next_fn.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915){
return (function (p1__19912_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19912_SHARP_);
});})(next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915))
,structure)));
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915))
,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19916),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915))
;
var late = G__19915.call(null,params19799,params_idx19800);
var vec__19918 = com.rpl.specter.impl.filter_PLUS_ancestry.call(null,late,structure);
var filtered = cljs.core.nth.call(null,vec__19918,(0),null);
var ancestry = cljs.core.nth.call(null,vec__19918,(1),null);
var next = cljs.core.vec.call(null,next_fn.call(null,filtered));
return cljs.core.reduce.call(null,((function (vec__19918,filtered,ancestry,next,next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915){
return (function (curr,p__19919){
var vec__19920 = p__19919;
var newi = cljs.core.nth.call(null,vec__19920,(0),null);
var oldi = cljs.core.nth.call(null,vec__19920,(1),null);
return cljs.core.assoc.call(null,curr,oldi,cljs.core.get.call(null,next,newi));
});})(vec__19918,filtered,ancestry,next,next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915))
,cljs.core.vec.call(null,structure),ancestry);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19916,latefns19914,vec__19917,G__19915))
),num_params19916);
if(cljs.core._EQ_.call(null,(0),num_params19916)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19827__auto__,null,(0));
} else {
return ret__19827__auto__;
}
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq19913){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19913));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var key = (params19799[(params_idx19800 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var key = (params19799[(params_idx19800 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var afn = (params19799[(params_idx19800 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var afn = (params19799[(params_idx19800 + (0))]);
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
var args__17816__auto__ = [];
var len__17809__auto___19931 = arguments.length;
var i__17810__auto___19932 = (0);
while(true){
if((i__17810__auto___19932 < len__17809__auto___19931)){
args__17816__auto__.push((arguments[i__17810__auto___19932]));

var G__19933 = (i__17810__auto___19932 + (1));
i__17810__auto___19932 = G__19933;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19821__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19820__auto__);
var offsets__19822__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19821__auto__));
var num_params19929 = cljs.core.last.call(null,offsets__19822__auto__);
var latefns19927 = cljs.core.map.call(null,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929){
return (function (o__19823__auto__,p__19824__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19824__auto__))){
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929){
return (function (params__19825__auto__,params_idx__19826__auto__){
return p__19824__auto__;
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929))
} else {
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929){
return (function (params__19825__auto__,params_idx__19826__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19824__auto__,params__19825__auto__,(params_idx__19826__auto__ + o__19823__auto__));
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929))
}
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929))
,offsets__19822__auto__,paths__19820__auto__);
var vec__19930 = latefns19927;
var G__19928 = cljs.core.nth.call(null,vec__19930,(0),null);
var ret__19827__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19929),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928))
;
var late = G__19928.call(null,params19799,params_idx19800);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928){
return (function (p1__19924_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19924_SHARP_);
});})(next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928))
,structure,next_fn);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928))
,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19929),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928))
;
var late = G__19928.call(null,params19799,params_idx19800);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928){
return (function (p1__19925_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19925_SHARP_);
});})(next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928))
,structure,next_fn);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19929,latefns19927,vec__19930,G__19928))
),num_params19929);
if(cljs.core._EQ_.call(null,(0),num_params19929)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19827__auto__,null,(0));
} else {
return ret__19827__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq19926){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19926));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19941 = arguments.length;
var i__17810__auto___19942 = (0);
while(true){
if((i__17810__auto___19942 < len__17809__auto___19941)){
args__17816__auto__.push((arguments[i__17810__auto___19942]));

var G__19943 = (i__17810__auto___19942 + (1));
i__17810__auto___19942 = G__19943;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19821__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19820__auto__);
var offsets__19822__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19821__auto__));
var num_params19939 = cljs.core.last.call(null,offsets__19822__auto__);
var latefns19937 = cljs.core.map.call(null,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939){
return (function (o__19823__auto__,p__19824__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19824__auto__))){
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939){
return (function (params__19825__auto__,params_idx__19826__auto__){
return p__19824__auto__;
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939))
} else {
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939){
return (function (params__19825__auto__,params_idx__19826__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19824__auto__,params__19825__auto__,(params_idx__19826__auto__ + o__19823__auto__));
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939))
}
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939))
,offsets__19822__auto__,paths__19820__auto__);
var vec__19940 = latefns19937;
var G__19938 = cljs.core.nth.call(null,vec__19940,(0),null);
var ret__19827__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19939),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938))
;
var late = G__19938.call(null,params19799,params_idx19800);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938){
return (function (p1__19934_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__19934_SHARP_);
});})(next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938))
,structure,next_fn);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938))
,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19939),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938))
;
var late = G__19938.call(null,params19799,params_idx19800);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938){
return (function (p1__19935_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__19935_SHARP_);
});})(next_fn,late,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938))
,structure,next_fn);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19939,latefns19937,vec__19940,G__19938))
),num_params19939);
if(cljs.core._EQ_.call(null,(0),num_params19939)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19827__auto__,null,(0));
} else {
return ret__19827__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq19936){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19936));
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
var paths__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19821__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19820__auto__);
var offsets__19822__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19821__auto__));
var num_params19950 = cljs.core.last.call(null,offsets__19822__auto__);
var latefns19948 = cljs.core.map.call(null,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950){
return (function (o__19823__auto__,p__19824__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19824__auto__))){
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950){
return (function (params__19825__auto__,params_idx__19826__auto__){
return p__19824__auto__;
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950))
} else {
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950){
return (function (params__19825__auto__,params_idx__19826__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19824__auto__,params__19825__auto__,(params_idx__19826__auto__ + o__19823__auto__));
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950))
}
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950))
,offsets__19822__auto__,paths__19820__auto__);
var vec__19951 = latefns19948;
var G__19949 = cljs.core.nth.call(null,vec__19951,(0),null);
var ret__19827__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950,latefns19948,vec__19951,G__19949){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950,latefns19948,vec__19951,G__19949){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19950),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950,latefns19948,vec__19951,G__19949))
;
var late = G__19949.call(null,params19799,params_idx19800);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950,latefns19948,vec__19951,G__19949))
,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950,latefns19948,vec__19951,G__19949){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950,latefns19948,vec__19951,G__19949){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19950),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950,latefns19948,vec__19951,G__19949))
;
var late = G__19949.call(null,params19799,params_idx19800);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19950,latefns19948,vec__19951,G__19949))
),num_params19950);
if(cljs.core._EQ_.call(null,(0),num_params19950)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19827__auto__,null,(0));
} else {
return ret__19827__auto__;
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
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var afn = (params19799[(params_idx19800 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var afn = (params19799[(params_idx19800 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var v = (params19799[(params_idx19800 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + 1),vals__19801__auto__,structure__19803__auto__);
});
var v = (params19799[(params_idx19800 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19957 = arguments.length;
var i__17810__auto___19958 = (0);
while(true){
if((i__17810__auto___19958 < len__17809__auto___19957)){
args__17816__auto__.push((arguments[i__17810__auto___19958]));

var G__19959 = (i__17810__auto___19958 + (1));
i__17810__auto___19958 = G__19959;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19821__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19820__auto__);
var offsets__19822__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19821__auto__));
var num_params19955 = cljs.core.last.call(null,offsets__19822__auto__);
var latefns19953 = cljs.core.map.call(null,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19955){
return (function (o__19823__auto__,p__19824__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19824__auto__))){
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19955){
return (function (params__19825__auto__,params_idx__19826__auto__){
return p__19824__auto__;
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19955))
} else {
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19955){
return (function (params__19825__auto__,params_idx__19826__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19824__auto__,params__19825__auto__,(params_idx__19826__auto__ + o__19823__auto__));
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19955))
}
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19955))
,offsets__19822__auto__,paths__19820__auto__);
var vec__19956 = latefns19953;
var latefn19954 = cljs.core.nth.call(null,vec__19956,(0),null);
var ret__19827__auto__ = (function (){var collector__19812__auto__ = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19955,latefns19953,vec__19956,latefn19954){
return (function (params19799,params_idx19800,vals__19813__auto__,structure,next_fn__19814__auto__){
var late = latefn19954.call(null,params19799,params_idx19800);
var c__19815__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__19814__auto__.call(null,params19799,(params_idx19800 + num_params19955),cljs.core.conj.call(null,vals__19813__auto__,c__19815__auto__),structure);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19955,latefns19953,vec__19956,latefn19954))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19812__auto__,collector__19812__auto__),num_params19955);
})();
if(cljs.core._EQ_.call(null,(0),num_params19955)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19827__auto__,null,(0));
} else {
return ret__19827__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq19952){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19952));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19965 = arguments.length;
var i__17810__auto___19966 = (0);
while(true){
if((i__17810__auto___19966 < len__17809__auto___19965)){
args__17816__auto__.push((arguments[i__17810__auto___19966]));

var G__19967 = (i__17810__auto___19966 + (1));
i__17810__auto___19966 = G__19967;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19821__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19820__auto__);
var offsets__19822__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19821__auto__));
var num_params19963 = cljs.core.last.call(null,offsets__19822__auto__);
var latefns19961 = cljs.core.map.call(null,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19963){
return (function (o__19823__auto__,p__19824__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19824__auto__))){
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19963){
return (function (params__19825__auto__,params_idx__19826__auto__){
return p__19824__auto__;
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19963))
} else {
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19963){
return (function (params__19825__auto__,params_idx__19826__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19824__auto__,params__19825__auto__,(params_idx__19826__auto__ + o__19823__auto__));
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19963))
}
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19963))
,offsets__19822__auto__,paths__19820__auto__);
var vec__19964 = latefns19961;
var latefn19962 = cljs.core.nth.call(null,vec__19964,(0),null);
var ret__19827__auto__ = (function (){var collector__19812__auto__ = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19963,latefns19961,vec__19964,latefn19962){
return (function (params19799,params_idx19800,vals__19813__auto__,structure,next_fn__19814__auto__){
var late = latefn19962.call(null,params19799,params_idx19800);
var c__19815__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__19814__auto__.call(null,params19799,(params_idx19800 + num_params19963),cljs.core.conj.call(null,vals__19813__auto__,c__19815__auto__),structure);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19963,latefns19961,vec__19964,latefn19962))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19812__auto__,collector__19812__auto__),num_params19963);
})();
if(cljs.core._EQ_.call(null,(0),num_params19963)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19827__auto__,null,(0));
} else {
return ret__19827__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq19960){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19960));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__19812__auto__ = (function (params19799,params_idx19800,vals__19813__auto__,structure,next_fn__19814__auto__){
var val = (params19799[(params_idx19800 + (0))]);
var c__19815__auto__ = val;
return next_fn__19814__auto__.call(null,params19799,(params_idx19800 + 1),cljs.core.conj.call(null,vals__19813__auto__,c__19815__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19812__auto__,collector__19812__auto__),1);
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
var args__17816__auto__ = [];
var len__17809__auto___19971 = arguments.length;
var i__17810__auto___19972 = (0);
while(true){
if((i__17810__auto___19972 < len__17809__auto___19971)){
args__17816__auto__.push((arguments[i__17810__auto___19972]));

var G__19973 = (i__17810__auto___19972 + (1));
i__17810__auto___19972 = G__19973;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__19821__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19820__auto__);
var offsets__19822__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19821__auto__));
var num_params19970 = cljs.core.last.call(null,offsets__19822__auto__);
var latefns19969 = cljs.core.map.call(null,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970){
return (function (o__19823__auto__,p__19824__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19824__auto__))){
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970){
return (function (params__19825__auto__,params_idx__19826__auto__){
return p__19824__auto__;
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970))
} else {
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970){
return (function (params__19825__auto__,params_idx__19826__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19824__auto__,params__19825__auto__,(params_idx__19826__auto__ + o__19823__auto__));
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970))
}
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970))
,offsets__19822__auto__,paths__19820__auto__);
var ret__19827__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19970),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969){
return (function (l__19870__auto__){
return l__19870__auto__.call(null,params19799,params_idx19800);
});})(next_fn,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969))
,latefns19969);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969))
,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19970),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969){
return (function (l__19870__auto__){
return l__19870__auto__.call(null,params19799,params_idx19800);
});})(next_fn,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969))
,latefns19969);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19970,latefns19969))
),num_params19970);
if(cljs.core._EQ_.call(null,(0),num_params19970)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19827__auto__,null,(0));
} else {
return ret__19827__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq19968){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19968));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args19974 = [];
var len__17809__auto___19977 = arguments.length;
var i__17810__auto___19978 = (0);
while(true){
if((i__17810__auto___19978 < len__17809__auto___19977)){
args19974.push((arguments[i__17810__auto___19978]));

var G__19979 = (i__17810__auto___19978 + (1));
i__17810__auto___19978 = G__19979;
continue;
} else {
}
break;
}

var G__19976 = args19974.length;
switch (G__19976) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19974.length)].join('')));

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
var args__17816__auto__ = [];
var len__17809__auto___19985 = arguments.length;
var i__17810__auto___19986 = (0);
while(true){
if((i__17810__auto___19986 < len__17809__auto___19985)){
args__17816__auto__.push((arguments[i__17810__auto___19986]));

var G__19987 = (i__17810__auto___19986 + (1));
i__17810__auto___19986 = G__19987;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__19821__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19820__auto__);
var offsets__19822__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19821__auto__));
var num_params19984 = cljs.core.last.call(null,offsets__19822__auto__);
var latefns19983 = cljs.core.map.call(null,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984){
return (function (o__19823__auto__,p__19824__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19824__auto__))){
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984){
return (function (params__19825__auto__,params_idx__19826__auto__){
return p__19824__auto__;
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984))
} else {
return ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984){
return (function (params__19825__auto__,params_idx__19826__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19824__auto__,params__19825__auto__,(params_idx__19826__auto__ + o__19823__auto__));
});
;})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984))
}
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984))
,offsets__19822__auto__,paths__19820__auto__);
var ret__19827__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19984),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983){
return (function (l__19870__auto__){
return l__19870__auto__.call(null,params19799,params_idx19800);
});})(next_fn,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983))
,latefns19983);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983){
return (function (p1__19981_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__19981_SHARP_,structure);
});})(next_fn,compiled_paths,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983))
,compiled_paths)));
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983))
,((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983){
return (function (params19799,params_idx19800,vals__19801__auto__,structure,next_fn__19802__auto__){
var next_fn = ((function (paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983){
return (function (structure__19803__auto__){
return next_fn__19802__auto__.call(null,params19799,(params_idx19800 + num_params19984),vals__19801__auto__,structure__19803__auto__);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983){
return (function (l__19870__auto__){
return l__19870__auto__.call(null,params19799,params_idx19800);
});})(next_fn,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983))
,latefns19983);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983){
return (function (structure__$1,selector){
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983))
,structure,compiled_paths);
});})(paths__19820__auto__,needed_params__19821__auto__,offsets__19822__auto__,num_params19984,latefns19983))
),num_params19984);
if(cljs.core._EQ_.call(null,(0),num_params19984)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19827__auto__,null,(0));
} else {
return ret__19827__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq19982){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19982));
});

//# sourceMappingURL=specter.js.map?rel=1448194808928