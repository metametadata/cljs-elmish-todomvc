// Compiled by ClojureScript 1.7.170 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__17772__auto__ = [];
var len__17765__auto___19843 = arguments.length;
var i__17766__auto___19844 = (0);
while(true){
if((i__17766__auto___19844 < len__17765__auto___19843)){
args__17772__auto__.push((arguments[i__17766__auto___19844]));

var G__19845 = (i__17766__auto___19844 + (1));
i__17766__auto___19844 = G__19845;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((0) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((0)),(0))):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__17773__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,paths));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq19842){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19842));
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
var args__17772__auto__ = [];
var len__17765__auto___19854 = arguments.length;
var i__17766__auto___19855 = (0);
while(true){
if((i__17766__auto___19855 < len__17765__auto___19854)){
args__17772__auto__.push((arguments[i__17766__auto___19855]));

var G__19856 = (i__17766__auto___19855 + (1));
i__17766__auto___19855 = G__19856;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((3) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17773__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__19850){
var map__19851 = p__19850;
var map__19851__$1 = ((((!((map__19851 == null)))?((((map__19851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19851):map__19851);
var merge_fn = cljs.core.get.call(null,map__19851__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,selector,((function (state,map__19851,map__19851__$1,merge_fn){
return (function (e){
var res = transform_fn.call(null,e);
if(cljs.core.truth_(res)){
var vec__19853 = res;
var ret = cljs.core.nth.call(null,vec__19853,(0),null);
var user_ret = cljs.core.nth.call(null,vec__19853,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return e;
}
});})(state,map__19851,map__19851__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq19846){
var G__19847 = cljs.core.first.call(null,seq19846);
var seq19846__$1 = cljs.core.next.call(null,seq19846);
var G__19848 = cljs.core.first.call(null,seq19846__$1);
var seq19846__$2 = cljs.core.next.call(null,seq19846__$1);
var G__19849 = cljs.core.first.call(null,seq19846__$2);
var seq19846__$3 = cljs.core.next.call(null,seq19846__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__19847,G__19848,G__19849,seq19846__$3);
});
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 *   The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformd in the data structure.
 */
com.rpl.specter.replace_in = (function com$rpl$specter$replace_in(var_args){
var args__17772__auto__ = [];
var len__17765__auto___19864 = arguments.length;
var i__17766__auto___19865 = (0);
while(true){
if((i__17766__auto___19865 < len__17765__auto___19864)){
args__17772__auto__.push((arguments[i__17766__auto___19865]));

var G__19866 = (i__17766__auto___19865 + (1));
i__17766__auto___19865 = G__19866;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((3) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17773__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__19861){
var map__19862 = p__19861;
var map__19862__$1 = ((((!((map__19862 == null)))?((((map__19862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19862):map__19862);
var merge_fn = cljs.core.get.call(null,map__19862__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq19857){
var G__19858 = cljs.core.first.call(null,seq19857);
var seq19857__$1 = cljs.core.next.call(null,seq19857);
var G__19859 = cljs.core.first.call(null,seq19857__$1);
var seq19857__$2 = cljs.core.next.call(null,seq19857__$1);
var G__19860 = cljs.core.first.call(null,seq19857__$2);
var seq19857__$3 = cljs.core.next.call(null,seq19857__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__19858,G__19859,G__19860,seq19857__$3);
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
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 2),vals__19756__auto__,structure__19758__auto__);
});
var start_fn = (params19754[(params_idx19755 + (0))]);
var end_fn = (params19754[(params_idx19755 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 2),vals__19756__auto__,structure__19758__auto__);
});
var start_fn = (params19754[(params_idx19755 + (0))]);
var end_fn = (params19754[(params_idx19755 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 2),vals__19756__auto__,structure__19758__auto__);
});
var start = (params19754[(params_idx19755 + (0))]);
var end = (params19754[(params_idx19755 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 2),vals__19756__auto__,structure__19758__auto__);
});
var start = (params19754[(params_idx19755 + (0))]);
var end = (params19754[(params_idx19755 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var aset = (params19754[(params_idx19755 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var aset = (params19754[(params_idx19755 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var afn = (params19754[(params_idx19755 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var afn = (params19754[(params_idx19755 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var afn = (params19754[(params_idx19755 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var afn = (params19754[(params_idx19755 + (0))]);
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
var args__17772__auto__ = [];
var len__17765__auto___19876 = arguments.length;
var i__17766__auto___19877 = (0);
while(true){
if((i__17766__auto___19877 < len__17765__auto___19876)){
args__17772__auto__.push((arguments[i__17766__auto___19877]));

var G__19878 = (i__17766__auto___19877 + (1));
i__17766__auto___19877 = G__19878;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((0) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((0)),(0))):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__17773__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19775__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19776__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19775__auto__);
var offsets__19777__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19776__auto__));
var num_params19871 = cljs.core.last.call(null,offsets__19777__auto__);
var latefns19869 = cljs.core.map.call(null,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871){
return (function (o__19778__auto__,p__19779__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19779__auto__))){
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871){
return (function (params__19780__auto__,params_idx__19781__auto__){
return p__19779__auto__;
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871))
} else {
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871){
return (function (params__19780__auto__,params_idx__19781__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19779__auto__,params__19780__auto__,(params_idx__19781__auto__ + o__19778__auto__));
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871))
}
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871))
,offsets__19777__auto__,paths__19775__auto__);
var vec__19872 = latefns19869;
var G__19870 = cljs.core.nth.call(null,vec__19872,(0),null);
var ret__19782__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19871),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870))
;
var late = G__19870.call(null,params19754,params_idx19755);
return next_fn.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870){
return (function (p1__19867_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19867_SHARP_);
});})(next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870))
,structure)));
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870))
,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19871),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870))
;
var late = G__19870.call(null,params19754,params_idx19755);
var vec__19873 = com.rpl.specter.impl.filter_PLUS_ancestry.call(null,late,structure);
var filtered = cljs.core.nth.call(null,vec__19873,(0),null);
var ancestry = cljs.core.nth.call(null,vec__19873,(1),null);
var next = cljs.core.vec.call(null,next_fn.call(null,filtered));
return cljs.core.reduce.call(null,((function (vec__19873,filtered,ancestry,next,next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870){
return (function (curr,p__19874){
var vec__19875 = p__19874;
var newi = cljs.core.nth.call(null,vec__19875,(0),null);
var oldi = cljs.core.nth.call(null,vec__19875,(1),null);
return cljs.core.assoc.call(null,curr,oldi,cljs.core.get.call(null,next,newi));
});})(vec__19873,filtered,ancestry,next,next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870))
,cljs.core.vec.call(null,structure),ancestry);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19871,latefns19869,vec__19872,G__19870))
),num_params19871);
if(cljs.core._EQ_.call(null,(0),num_params19871)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19782__auto__,null,(0));
} else {
return ret__19782__auto__;
}
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq19868){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19868));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var key = (params19754[(params_idx19755 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var key = (params19754[(params_idx19755 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var afn = (params19754[(params_idx19755 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var afn = (params19754[(params_idx19755 + (0))]);
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
var args__17772__auto__ = [];
var len__17765__auto___19886 = arguments.length;
var i__17766__auto___19887 = (0);
while(true){
if((i__17766__auto___19887 < len__17765__auto___19886)){
args__17772__auto__.push((arguments[i__17766__auto___19887]));

var G__19888 = (i__17766__auto___19887 + (1));
i__17766__auto___19887 = G__19888;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((0) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17773__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19775__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19776__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19775__auto__);
var offsets__19777__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19776__auto__));
var num_params19884 = cljs.core.last.call(null,offsets__19777__auto__);
var latefns19882 = cljs.core.map.call(null,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884){
return (function (o__19778__auto__,p__19779__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19779__auto__))){
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884){
return (function (params__19780__auto__,params_idx__19781__auto__){
return p__19779__auto__;
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884))
} else {
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884){
return (function (params__19780__auto__,params_idx__19781__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19779__auto__,params__19780__auto__,(params_idx__19781__auto__ + o__19778__auto__));
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884))
}
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884))
,offsets__19777__auto__,paths__19775__auto__);
var vec__19885 = latefns19882;
var G__19883 = cljs.core.nth.call(null,vec__19885,(0),null);
var ret__19782__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19884),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883))
;
var late = G__19883.call(null,params19754,params_idx19755);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883){
return (function (p1__19879_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19879_SHARP_);
});})(next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883))
,structure,next_fn);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883))
,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19884),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883))
;
var late = G__19883.call(null,params19754,params_idx19755);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883){
return (function (p1__19880_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19880_SHARP_);
});})(next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883))
,structure,next_fn);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19884,latefns19882,vec__19885,G__19883))
),num_params19884);
if(cljs.core._EQ_.call(null,(0),num_params19884)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19782__auto__,null,(0));
} else {
return ret__19782__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq19881){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19881));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__17772__auto__ = [];
var len__17765__auto___19896 = arguments.length;
var i__17766__auto___19897 = (0);
while(true){
if((i__17766__auto___19897 < len__17765__auto___19896)){
args__17772__auto__.push((arguments[i__17766__auto___19897]));

var G__19898 = (i__17766__auto___19897 + (1));
i__17766__auto___19897 = G__19898;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((0) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17773__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19775__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19776__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19775__auto__);
var offsets__19777__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19776__auto__));
var num_params19894 = cljs.core.last.call(null,offsets__19777__auto__);
var latefns19892 = cljs.core.map.call(null,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894){
return (function (o__19778__auto__,p__19779__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19779__auto__))){
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894){
return (function (params__19780__auto__,params_idx__19781__auto__){
return p__19779__auto__;
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894))
} else {
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894){
return (function (params__19780__auto__,params_idx__19781__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19779__auto__,params__19780__auto__,(params_idx__19781__auto__ + o__19778__auto__));
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894))
}
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894))
,offsets__19777__auto__,paths__19775__auto__);
var vec__19895 = latefns19892;
var G__19893 = cljs.core.nth.call(null,vec__19895,(0),null);
var ret__19782__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19894),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893))
;
var late = G__19893.call(null,params19754,params_idx19755);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893){
return (function (p1__19889_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__19889_SHARP_);
});})(next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893))
,structure,next_fn);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893))
,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19894),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893))
;
var late = G__19893.call(null,params19754,params_idx19755);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893){
return (function (p1__19890_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__19890_SHARP_);
});})(next_fn,late,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893))
,structure,next_fn);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19894,latefns19892,vec__19895,G__19893))
),num_params19894);
if(cljs.core._EQ_.call(null,(0),num_params19894)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19782__auto__,null,(0));
} else {
return ret__19782__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq19891){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19891));
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
var paths__19775__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19776__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19775__auto__);
var offsets__19777__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19776__auto__));
var num_params19905 = cljs.core.last.call(null,offsets__19777__auto__);
var latefns19903 = cljs.core.map.call(null,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905){
return (function (o__19778__auto__,p__19779__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19779__auto__))){
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905){
return (function (params__19780__auto__,params_idx__19781__auto__){
return p__19779__auto__;
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905))
} else {
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905){
return (function (params__19780__auto__,params_idx__19781__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19779__auto__,params__19780__auto__,(params_idx__19781__auto__ + o__19778__auto__));
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905))
}
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905))
,offsets__19777__auto__,paths__19775__auto__);
var vec__19906 = latefns19903;
var G__19904 = cljs.core.nth.call(null,vec__19906,(0),null);
var ret__19782__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905,latefns19903,vec__19906,G__19904){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905,latefns19903,vec__19906,G__19904){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19905),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905,latefns19903,vec__19906,G__19904))
;
var late = G__19904.call(null,params19754,params_idx19755);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905,latefns19903,vec__19906,G__19904))
,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905,latefns19903,vec__19906,G__19904){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905,latefns19903,vec__19906,G__19904){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19905),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905,latefns19903,vec__19906,G__19904))
;
var late = G__19904.call(null,params19754,params_idx19755);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19905,latefns19903,vec__19906,G__19904))
),num_params19905);
if(cljs.core._EQ_.call(null,(0),num_params19905)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19782__auto__,null,(0));
} else {
return ret__19782__auto__;
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
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var afn = (params19754[(params_idx19755 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var afn = (params19754[(params_idx19755 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var v = (params19754[(params_idx19755 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + 1),vals__19756__auto__,structure__19758__auto__);
});
var v = (params19754[(params_idx19755 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__17772__auto__ = [];
var len__17765__auto___19912 = arguments.length;
var i__17766__auto___19913 = (0);
while(true){
if((i__17766__auto___19913 < len__17765__auto___19912)){
args__17772__auto__.push((arguments[i__17766__auto___19913]));

var G__19914 = (i__17766__auto___19913 + (1));
i__17766__auto___19913 = G__19914;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((0) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__17773__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19775__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19776__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19775__auto__);
var offsets__19777__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19776__auto__));
var num_params19910 = cljs.core.last.call(null,offsets__19777__auto__);
var latefns19908 = cljs.core.map.call(null,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19910){
return (function (o__19778__auto__,p__19779__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19779__auto__))){
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19910){
return (function (params__19780__auto__,params_idx__19781__auto__){
return p__19779__auto__;
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19910))
} else {
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19910){
return (function (params__19780__auto__,params_idx__19781__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19779__auto__,params__19780__auto__,(params_idx__19781__auto__ + o__19778__auto__));
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19910))
}
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19910))
,offsets__19777__auto__,paths__19775__auto__);
var vec__19911 = latefns19908;
var latefn19909 = cljs.core.nth.call(null,vec__19911,(0),null);
var ret__19782__auto__ = (function (){var collector__19767__auto__ = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19910,latefns19908,vec__19911,latefn19909){
return (function (params19754,params_idx19755,vals__19768__auto__,structure,next_fn__19769__auto__){
var late = latefn19909.call(null,params19754,params_idx19755);
var c__19770__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__19769__auto__.call(null,params19754,(params_idx19755 + num_params19910),cljs.core.conj.call(null,vals__19768__auto__,c__19770__auto__),structure);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19910,latefns19908,vec__19911,latefn19909))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19767__auto__,collector__19767__auto__),num_params19910);
})();
if(cljs.core._EQ_.call(null,(0),num_params19910)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19782__auto__,null,(0));
} else {
return ret__19782__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq19907){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19907));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__17772__auto__ = [];
var len__17765__auto___19920 = arguments.length;
var i__17766__auto___19921 = (0);
while(true){
if((i__17766__auto___19921 < len__17765__auto___19920)){
args__17772__auto__.push((arguments[i__17766__auto___19921]));

var G__19922 = (i__17766__auto___19921 + (1));
i__17766__auto___19921 = G__19922;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((0) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__17773__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19775__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19776__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19775__auto__);
var offsets__19777__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19776__auto__));
var num_params19918 = cljs.core.last.call(null,offsets__19777__auto__);
var latefns19916 = cljs.core.map.call(null,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19918){
return (function (o__19778__auto__,p__19779__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19779__auto__))){
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19918){
return (function (params__19780__auto__,params_idx__19781__auto__){
return p__19779__auto__;
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19918))
} else {
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19918){
return (function (params__19780__auto__,params_idx__19781__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19779__auto__,params__19780__auto__,(params_idx__19781__auto__ + o__19778__auto__));
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19918))
}
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19918))
,offsets__19777__auto__,paths__19775__auto__);
var vec__19919 = latefns19916;
var latefn19917 = cljs.core.nth.call(null,vec__19919,(0),null);
var ret__19782__auto__ = (function (){var collector__19767__auto__ = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19918,latefns19916,vec__19919,latefn19917){
return (function (params19754,params_idx19755,vals__19768__auto__,structure,next_fn__19769__auto__){
var late = latefn19917.call(null,params19754,params_idx19755);
var c__19770__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__19769__auto__.call(null,params19754,(params_idx19755 + num_params19918),cljs.core.conj.call(null,vals__19768__auto__,c__19770__auto__),structure);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19918,latefns19916,vec__19919,latefn19917))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19767__auto__,collector__19767__auto__),num_params19918);
})();
if(cljs.core._EQ_.call(null,(0),num_params19918)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19782__auto__,null,(0));
} else {
return ret__19782__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq19915){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19915));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__19767__auto__ = (function (params19754,params_idx19755,vals__19768__auto__,structure,next_fn__19769__auto__){
var val = (params19754[(params_idx19755 + (0))]);
var c__19770__auto__ = val;
return next_fn__19769__auto__.call(null,params19754,(params_idx19755 + 1),cljs.core.conj.call(null,vals__19768__auto__,c__19770__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19767__auto__,collector__19767__auto__),1);
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
var args__17772__auto__ = [];
var len__17765__auto___19926 = arguments.length;
var i__17766__auto___19927 = (0);
while(true){
if((i__17766__auto___19927 < len__17765__auto___19926)){
args__17772__auto__.push((arguments[i__17766__auto___19927]));

var G__19928 = (i__17766__auto___19927 + (1));
i__17766__auto___19927 = G__19928;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((0) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17773__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__19775__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__19776__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19775__auto__);
var offsets__19777__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19776__auto__));
var num_params19925 = cljs.core.last.call(null,offsets__19777__auto__);
var latefns19924 = cljs.core.map.call(null,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925){
return (function (o__19778__auto__,p__19779__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19779__auto__))){
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925){
return (function (params__19780__auto__,params_idx__19781__auto__){
return p__19779__auto__;
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925))
} else {
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925){
return (function (params__19780__auto__,params_idx__19781__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19779__auto__,params__19780__auto__,(params_idx__19781__auto__ + o__19778__auto__));
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925))
}
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925))
,offsets__19777__auto__,paths__19775__auto__);
var ret__19782__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19925),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924){
return (function (l__19825__auto__){
return l__19825__auto__.call(null,params19754,params_idx19755);
});})(next_fn,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924))
,latefns19924);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924))
,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19925),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924){
return (function (l__19825__auto__){
return l__19825__auto__.call(null,params19754,params_idx19755);
});})(next_fn,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924))
,latefns19924);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19925,latefns19924))
),num_params19925);
if(cljs.core._EQ_.call(null,(0),num_params19925)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19782__auto__,null,(0));
} else {
return ret__19782__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq19923){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19923));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args19929 = [];
var len__17765__auto___19932 = arguments.length;
var i__17766__auto___19933 = (0);
while(true){
if((i__17766__auto___19933 < len__17765__auto___19932)){
args19929.push((arguments[i__17766__auto___19933]));

var G__19934 = (i__17766__auto___19933 + (1));
i__17766__auto___19933 = G__19934;
continue;
} else {
}
break;
}

var G__19931 = args19929.length;
switch (G__19931) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19929.length)].join('')));

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
var args__17772__auto__ = [];
var len__17765__auto___19940 = arguments.length;
var i__17766__auto___19941 = (0);
while(true){
if((i__17766__auto___19941 < len__17765__auto___19940)){
args__17772__auto__.push((arguments[i__17766__auto___19941]));

var G__19942 = (i__17766__auto___19941 + (1));
i__17766__auto___19941 = G__19942;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((0) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17773__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__19775__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__19776__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19775__auto__);
var offsets__19777__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19776__auto__));
var num_params19939 = cljs.core.last.call(null,offsets__19777__auto__);
var latefns19938 = cljs.core.map.call(null,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939){
return (function (o__19778__auto__,p__19779__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19779__auto__))){
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939){
return (function (params__19780__auto__,params_idx__19781__auto__){
return p__19779__auto__;
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939))
} else {
return ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939){
return (function (params__19780__auto__,params_idx__19781__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19779__auto__,params__19780__auto__,(params_idx__19781__auto__ + o__19778__auto__));
});
;})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939))
}
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939))
,offsets__19777__auto__,paths__19775__auto__);
var ret__19782__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19939),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938){
return (function (l__19825__auto__){
return l__19825__auto__.call(null,params19754,params_idx19755);
});})(next_fn,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938))
,latefns19938);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938){
return (function (p1__19936_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__19936_SHARP_,structure);
});})(next_fn,compiled_paths,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938))
,compiled_paths)));
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938))
,((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938){
return (function (params19754,params_idx19755,vals__19756__auto__,structure,next_fn__19757__auto__){
var next_fn = ((function (paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938){
return (function (structure__19758__auto__){
return next_fn__19757__auto__.call(null,params19754,(params_idx19755 + num_params19939),vals__19756__auto__,structure__19758__auto__);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938){
return (function (l__19825__auto__){
return l__19825__auto__.call(null,params19754,params_idx19755);
});})(next_fn,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938))
,latefns19938);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938){
return (function (structure__$1,selector){
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938))
,structure,compiled_paths);
});})(paths__19775__auto__,needed_params__19776__auto__,offsets__19777__auto__,num_params19939,latefns19938))
),num_params19939);
if(cljs.core._EQ_.call(null,(0),num_params19939)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19782__auto__,null,(0));
} else {
return ret__19782__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq19937){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19937));
});

//# sourceMappingURL=specter.js.map?rel=1453137576582