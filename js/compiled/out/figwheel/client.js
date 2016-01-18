// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28338 = cljs.core._EQ_;
var expr__28339 = (function (){var or__16707__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16707__auto__)){
return or__16707__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28338.call(null,"true",expr__28339))){
return true;
} else {
if(cljs.core.truth_(pred__28338.call(null,"false",expr__28339))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28339)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28341__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28342__i = 0, G__28342__a = new Array(arguments.length -  0);
while (G__28342__i < G__28342__a.length) {G__28342__a[G__28342__i] = arguments[G__28342__i + 0]; ++G__28342__i;}
  args = new cljs.core.IndexedSeq(G__28342__a,0);
} 
return G__28341__delegate.call(this,args);};
G__28341.cljs$lang$maxFixedArity = 0;
G__28341.cljs$lang$applyTo = (function (arglist__28343){
var args = cljs.core.seq(arglist__28343);
return G__28341__delegate(args);
});
G__28341.cljs$core$IFn$_invoke$arity$variadic = G__28341__delegate;
return G__28341;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28344){
var map__28347 = p__28344;
var map__28347__$1 = ((((!((map__28347 == null)))?((((map__28347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28347):map__28347);
var message = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16707__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16707__auto__)){
return or__16707__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16695__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16695__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16695__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24177__auto___28509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___28509,ch){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___28509,ch){
return (function (state_28478){
var state_val_28479 = (state_28478[(1)]);
if((state_val_28479 === (7))){
var inst_28474 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28480_28510 = state_28478__$1;
(statearr_28480_28510[(2)] = inst_28474);

(statearr_28480_28510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (1))){
var state_28478__$1 = state_28478;
var statearr_28481_28511 = state_28478__$1;
(statearr_28481_28511[(2)] = null);

(statearr_28481_28511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (4))){
var inst_28431 = (state_28478[(7)]);
var inst_28431__$1 = (state_28478[(2)]);
var state_28478__$1 = (function (){var statearr_28482 = state_28478;
(statearr_28482[(7)] = inst_28431__$1);

return statearr_28482;
})();
if(cljs.core.truth_(inst_28431__$1)){
var statearr_28483_28512 = state_28478__$1;
(statearr_28483_28512[(1)] = (5));

} else {
var statearr_28484_28513 = state_28478__$1;
(statearr_28484_28513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (15))){
var inst_28438 = (state_28478[(8)]);
var inst_28453 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28438);
var inst_28454 = cljs.core.first.call(null,inst_28453);
var inst_28455 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28454);
var inst_28456 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28455)].join('');
var inst_28457 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28456);
var state_28478__$1 = state_28478;
var statearr_28485_28514 = state_28478__$1;
(statearr_28485_28514[(2)] = inst_28457);

(statearr_28485_28514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (13))){
var inst_28462 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28486_28515 = state_28478__$1;
(statearr_28486_28515[(2)] = inst_28462);

(statearr_28486_28515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (6))){
var state_28478__$1 = state_28478;
var statearr_28487_28516 = state_28478__$1;
(statearr_28487_28516[(2)] = null);

(statearr_28487_28516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (17))){
var inst_28460 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28488_28517 = state_28478__$1;
(statearr_28488_28517[(2)] = inst_28460);

(statearr_28488_28517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (3))){
var inst_28476 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28478__$1,inst_28476);
} else {
if((state_val_28479 === (12))){
var inst_28437 = (state_28478[(9)]);
var inst_28451 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28437,opts);
var state_28478__$1 = state_28478;
if(cljs.core.truth_(inst_28451)){
var statearr_28489_28518 = state_28478__$1;
(statearr_28489_28518[(1)] = (15));

} else {
var statearr_28490_28519 = state_28478__$1;
(statearr_28490_28519[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (2))){
var state_28478__$1 = state_28478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28478__$1,(4),ch);
} else {
if((state_val_28479 === (11))){
var inst_28438 = (state_28478[(8)]);
var inst_28443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28444 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28438);
var inst_28445 = cljs.core.async.timeout.call(null,(1000));
var inst_28446 = [inst_28444,inst_28445];
var inst_28447 = (new cljs.core.PersistentVector(null,2,(5),inst_28443,inst_28446,null));
var state_28478__$1 = state_28478;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28478__$1,(14),inst_28447);
} else {
if((state_val_28479 === (9))){
var inst_28438 = (state_28478[(8)]);
var inst_28464 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28465 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28438);
var inst_28466 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28465);
var inst_28467 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28466)].join('');
var inst_28468 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28467);
var state_28478__$1 = (function (){var statearr_28491 = state_28478;
(statearr_28491[(10)] = inst_28464);

return statearr_28491;
})();
var statearr_28492_28520 = state_28478__$1;
(statearr_28492_28520[(2)] = inst_28468);

(statearr_28492_28520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (5))){
var inst_28431 = (state_28478[(7)]);
var inst_28433 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28434 = (new cljs.core.PersistentArrayMap(null,2,inst_28433,null));
var inst_28435 = (new cljs.core.PersistentHashSet(null,inst_28434,null));
var inst_28436 = figwheel.client.focus_msgs.call(null,inst_28435,inst_28431);
var inst_28437 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28436);
var inst_28438 = cljs.core.first.call(null,inst_28436);
var inst_28439 = figwheel.client.autoload_QMARK_.call(null);
var state_28478__$1 = (function (){var statearr_28493 = state_28478;
(statearr_28493[(8)] = inst_28438);

(statearr_28493[(9)] = inst_28437);

return statearr_28493;
})();
if(cljs.core.truth_(inst_28439)){
var statearr_28494_28521 = state_28478__$1;
(statearr_28494_28521[(1)] = (8));

} else {
var statearr_28495_28522 = state_28478__$1;
(statearr_28495_28522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (14))){
var inst_28449 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28496_28523 = state_28478__$1;
(statearr_28496_28523[(2)] = inst_28449);

(statearr_28496_28523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (16))){
var state_28478__$1 = state_28478;
var statearr_28497_28524 = state_28478__$1;
(statearr_28497_28524[(2)] = null);

(statearr_28497_28524[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (10))){
var inst_28470 = (state_28478[(2)]);
var state_28478__$1 = (function (){var statearr_28498 = state_28478;
(statearr_28498[(11)] = inst_28470);

return statearr_28498;
})();
var statearr_28499_28525 = state_28478__$1;
(statearr_28499_28525[(2)] = null);

(statearr_28499_28525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (8))){
var inst_28437 = (state_28478[(9)]);
var inst_28441 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28437,opts);
var state_28478__$1 = state_28478;
if(cljs.core.truth_(inst_28441)){
var statearr_28500_28526 = state_28478__$1;
(statearr_28500_28526[(1)] = (11));

} else {
var statearr_28501_28527 = state_28478__$1;
(statearr_28501_28527[(1)] = (12));

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
});})(c__24177__auto___28509,ch))
;
return ((function (switch__24065__auto__,c__24177__auto___28509,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24066__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24066__auto____0 = (function (){
var statearr_28505 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28505[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24066__auto__);

(statearr_28505[(1)] = (1));

return statearr_28505;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24066__auto____1 = (function (state_28478){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_28478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e28506){if((e28506 instanceof Object)){
var ex__24069__auto__ = e28506;
var statearr_28507_28528 = state_28478;
(statearr_28507_28528[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28529 = state_28478;
state_28478 = G__28529;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24066__auto__ = function(state_28478){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24066__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24066__auto____1.call(this,state_28478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24066__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24066__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___28509,ch))
})();
var state__24179__auto__ = (function (){var statearr_28508 = f__24178__auto__.call(null);
(statearr_28508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___28509);

return statearr_28508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___28509,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28530_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28530_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28537 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28537){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28535 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28536 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28535,_STAR_print_newline_STAR_28536,base_path_28537){
return (function() { 
var G__28538__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28539__i = 0, G__28539__a = new Array(arguments.length -  0);
while (G__28539__i < G__28539__a.length) {G__28539__a[G__28539__i] = arguments[G__28539__i + 0]; ++G__28539__i;}
  args = new cljs.core.IndexedSeq(G__28539__a,0);
} 
return G__28538__delegate.call(this,args);};
G__28538.cljs$lang$maxFixedArity = 0;
G__28538.cljs$lang$applyTo = (function (arglist__28540){
var args = cljs.core.seq(arglist__28540);
return G__28538__delegate(args);
});
G__28538.cljs$core$IFn$_invoke$arity$variadic = G__28538__delegate;
return G__28538;
})()
;})(_STAR_print_fn_STAR_28535,_STAR_print_newline_STAR_28536,base_path_28537))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28536;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28535;
}}catch (e28534){if((e28534 instanceof Error)){
var e = e28534;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28537], null));
} else {
var e = e28534;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28537))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28541){
var map__28548 = p__28541;
var map__28548__$1 = ((((!((map__28548 == null)))?((((map__28548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28548):map__28548);
var opts = map__28548__$1;
var build_id = cljs.core.get.call(null,map__28548__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28548,map__28548__$1,opts,build_id){
return (function (p__28550){
var vec__28551 = p__28550;
var map__28552 = cljs.core.nth.call(null,vec__28551,(0),null);
var map__28552__$1 = ((((!((map__28552 == null)))?((((map__28552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28552):map__28552);
var msg = map__28552__$1;
var msg_name = cljs.core.get.call(null,map__28552__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28551,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28551,map__28552,map__28552__$1,msg,msg_name,_,map__28548,map__28548__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28551,map__28552,map__28552__$1,msg,msg_name,_,map__28548,map__28548__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28548,map__28548__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28558){
var vec__28559 = p__28558;
var map__28560 = cljs.core.nth.call(null,vec__28559,(0),null);
var map__28560__$1 = ((((!((map__28560 == null)))?((((map__28560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28560):map__28560);
var msg = map__28560__$1;
var msg_name = cljs.core.get.call(null,map__28560__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28559,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28562){
var map__28572 = p__28562;
var map__28572__$1 = ((((!((map__28572 == null)))?((((map__28572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28572):map__28572);
var on_compile_warning = cljs.core.get.call(null,map__28572__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28572__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28572,map__28572__$1,on_compile_warning,on_compile_fail){
return (function (p__28574){
var vec__28575 = p__28574;
var map__28576 = cljs.core.nth.call(null,vec__28575,(0),null);
var map__28576__$1 = ((((!((map__28576 == null)))?((((map__28576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28576):map__28576);
var msg = map__28576__$1;
var msg_name = cljs.core.get.call(null,map__28576__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28575,(1));
var pred__28578 = cljs.core._EQ_;
var expr__28579 = msg_name;
if(cljs.core.truth_(pred__28578.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28579))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28578.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28579))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28572,map__28572__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto__,msg_hist,msg_names,msg){
return (function (state_28795){
var state_val_28796 = (state_28795[(1)]);
if((state_val_28796 === (7))){
var inst_28719 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
if(cljs.core.truth_(inst_28719)){
var statearr_28797_28843 = state_28795__$1;
(statearr_28797_28843[(1)] = (8));

} else {
var statearr_28798_28844 = state_28795__$1;
(statearr_28798_28844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (20))){
var inst_28789 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28799_28845 = state_28795__$1;
(statearr_28799_28845[(2)] = inst_28789);

(statearr_28799_28845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (27))){
var inst_28785 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28800_28846 = state_28795__$1;
(statearr_28800_28846[(2)] = inst_28785);

(statearr_28800_28846[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (1))){
var inst_28712 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28795__$1 = state_28795;
if(cljs.core.truth_(inst_28712)){
var statearr_28801_28847 = state_28795__$1;
(statearr_28801_28847[(1)] = (2));

} else {
var statearr_28802_28848 = state_28795__$1;
(statearr_28802_28848[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (24))){
var inst_28787 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28803_28849 = state_28795__$1;
(statearr_28803_28849[(2)] = inst_28787);

(statearr_28803_28849[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (4))){
var inst_28793 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28795__$1,inst_28793);
} else {
if((state_val_28796 === (15))){
var inst_28791 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28804_28850 = state_28795__$1;
(statearr_28804_28850[(2)] = inst_28791);

(statearr_28804_28850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (21))){
var inst_28750 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28805_28851 = state_28795__$1;
(statearr_28805_28851[(2)] = inst_28750);

(statearr_28805_28851[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (31))){
var inst_28774 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28795__$1 = state_28795;
if(cljs.core.truth_(inst_28774)){
var statearr_28806_28852 = state_28795__$1;
(statearr_28806_28852[(1)] = (34));

} else {
var statearr_28807_28853 = state_28795__$1;
(statearr_28807_28853[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (32))){
var inst_28783 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28808_28854 = state_28795__$1;
(statearr_28808_28854[(2)] = inst_28783);

(statearr_28808_28854[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (33))){
var inst_28772 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28809_28855 = state_28795__$1;
(statearr_28809_28855[(2)] = inst_28772);

(statearr_28809_28855[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (13))){
var inst_28733 = figwheel.client.heads_up.clear.call(null);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28795__$1,(16),inst_28733);
} else {
if((state_val_28796 === (22))){
var inst_28754 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28755 = figwheel.client.heads_up.append_message.call(null,inst_28754);
var state_28795__$1 = state_28795;
var statearr_28810_28856 = state_28795__$1;
(statearr_28810_28856[(2)] = inst_28755);

(statearr_28810_28856[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (36))){
var inst_28781 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28811_28857 = state_28795__$1;
(statearr_28811_28857[(2)] = inst_28781);

(statearr_28811_28857[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (29))){
var inst_28765 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28812_28858 = state_28795__$1;
(statearr_28812_28858[(2)] = inst_28765);

(statearr_28812_28858[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (6))){
var inst_28714 = (state_28795[(7)]);
var state_28795__$1 = state_28795;
var statearr_28813_28859 = state_28795__$1;
(statearr_28813_28859[(2)] = inst_28714);

(statearr_28813_28859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (28))){
var inst_28761 = (state_28795[(2)]);
var inst_28762 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28763 = figwheel.client.heads_up.display_warning.call(null,inst_28762);
var state_28795__$1 = (function (){var statearr_28814 = state_28795;
(statearr_28814[(8)] = inst_28761);

return statearr_28814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28795__$1,(29),inst_28763);
} else {
if((state_val_28796 === (25))){
var inst_28759 = figwheel.client.heads_up.clear.call(null);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28795__$1,(28),inst_28759);
} else {
if((state_val_28796 === (34))){
var inst_28776 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28795__$1,(37),inst_28776);
} else {
if((state_val_28796 === (17))){
var inst_28741 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28815_28860 = state_28795__$1;
(statearr_28815_28860[(2)] = inst_28741);

(statearr_28815_28860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (3))){
var inst_28731 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28795__$1 = state_28795;
if(cljs.core.truth_(inst_28731)){
var statearr_28816_28861 = state_28795__$1;
(statearr_28816_28861[(1)] = (13));

} else {
var statearr_28817_28862 = state_28795__$1;
(statearr_28817_28862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (12))){
var inst_28727 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28818_28863 = state_28795__$1;
(statearr_28818_28863[(2)] = inst_28727);

(statearr_28818_28863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (2))){
var inst_28714 = (state_28795[(7)]);
var inst_28714__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28795__$1 = (function (){var statearr_28819 = state_28795;
(statearr_28819[(7)] = inst_28714__$1);

return statearr_28819;
})();
if(cljs.core.truth_(inst_28714__$1)){
var statearr_28820_28864 = state_28795__$1;
(statearr_28820_28864[(1)] = (5));

} else {
var statearr_28821_28865 = state_28795__$1;
(statearr_28821_28865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (23))){
var inst_28757 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28795__$1 = state_28795;
if(cljs.core.truth_(inst_28757)){
var statearr_28822_28866 = state_28795__$1;
(statearr_28822_28866[(1)] = (25));

} else {
var statearr_28823_28867 = state_28795__$1;
(statearr_28823_28867[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (35))){
var state_28795__$1 = state_28795;
var statearr_28824_28868 = state_28795__$1;
(statearr_28824_28868[(2)] = null);

(statearr_28824_28868[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (19))){
var inst_28752 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28795__$1 = state_28795;
if(cljs.core.truth_(inst_28752)){
var statearr_28825_28869 = state_28795__$1;
(statearr_28825_28869[(1)] = (22));

} else {
var statearr_28826_28870 = state_28795__$1;
(statearr_28826_28870[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (11))){
var inst_28723 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28827_28871 = state_28795__$1;
(statearr_28827_28871[(2)] = inst_28723);

(statearr_28827_28871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (9))){
var inst_28725 = figwheel.client.heads_up.clear.call(null);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28795__$1,(12),inst_28725);
} else {
if((state_val_28796 === (5))){
var inst_28716 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28795__$1 = state_28795;
var statearr_28828_28872 = state_28795__$1;
(statearr_28828_28872[(2)] = inst_28716);

(statearr_28828_28872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (14))){
var inst_28743 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28795__$1 = state_28795;
if(cljs.core.truth_(inst_28743)){
var statearr_28829_28873 = state_28795__$1;
(statearr_28829_28873[(1)] = (18));

} else {
var statearr_28830_28874 = state_28795__$1;
(statearr_28830_28874[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (26))){
var inst_28767 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28795__$1 = state_28795;
if(cljs.core.truth_(inst_28767)){
var statearr_28831_28875 = state_28795__$1;
(statearr_28831_28875[(1)] = (30));

} else {
var statearr_28832_28876 = state_28795__$1;
(statearr_28832_28876[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (16))){
var inst_28735 = (state_28795[(2)]);
var inst_28736 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28737 = figwheel.client.format_messages.call(null,inst_28736);
var inst_28738 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28739 = figwheel.client.heads_up.display_error.call(null,inst_28737,inst_28738);
var state_28795__$1 = (function (){var statearr_28833 = state_28795;
(statearr_28833[(9)] = inst_28735);

return statearr_28833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28795__$1,(17),inst_28739);
} else {
if((state_val_28796 === (30))){
var inst_28769 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28770 = figwheel.client.heads_up.display_warning.call(null,inst_28769);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28795__$1,(33),inst_28770);
} else {
if((state_val_28796 === (10))){
var inst_28729 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28834_28877 = state_28795__$1;
(statearr_28834_28877[(2)] = inst_28729);

(statearr_28834_28877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (18))){
var inst_28745 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28746 = figwheel.client.format_messages.call(null,inst_28745);
var inst_28747 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28748 = figwheel.client.heads_up.display_error.call(null,inst_28746,inst_28747);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28795__$1,(21),inst_28748);
} else {
if((state_val_28796 === (37))){
var inst_28778 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28835_28878 = state_28795__$1;
(statearr_28835_28878[(2)] = inst_28778);

(statearr_28835_28878[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (8))){
var inst_28721 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28795__$1,(11),inst_28721);
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
});})(c__24177__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24065__auto__,c__24177__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto____0 = (function (){
var statearr_28839 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28839[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto__);

(statearr_28839[(1)] = (1));

return statearr_28839;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto____1 = (function (state_28795){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_28795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e28840){if((e28840 instanceof Object)){
var ex__24069__auto__ = e28840;
var statearr_28841_28879 = state_28795;
(statearr_28841_28879[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28880 = state_28795;
state_28795 = G__28880;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto__ = function(state_28795){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto____1.call(this,state_28795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto__,msg_hist,msg_names,msg))
})();
var state__24179__auto__ = (function (){var statearr_28842 = f__24178__auto__.call(null);
(statearr_28842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto__);

return statearr_28842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto__,msg_hist,msg_names,msg))
);

return c__24177__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24177__auto___28943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___28943,ch){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___28943,ch){
return (function (state_28926){
var state_val_28927 = (state_28926[(1)]);
if((state_val_28927 === (1))){
var state_28926__$1 = state_28926;
var statearr_28928_28944 = state_28926__$1;
(statearr_28928_28944[(2)] = null);

(statearr_28928_28944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (2))){
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28926__$1,(4),ch);
} else {
if((state_val_28927 === (3))){
var inst_28924 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28926__$1,inst_28924);
} else {
if((state_val_28927 === (4))){
var inst_28914 = (state_28926[(7)]);
var inst_28914__$1 = (state_28926[(2)]);
var state_28926__$1 = (function (){var statearr_28929 = state_28926;
(statearr_28929[(7)] = inst_28914__$1);

return statearr_28929;
})();
if(cljs.core.truth_(inst_28914__$1)){
var statearr_28930_28945 = state_28926__$1;
(statearr_28930_28945[(1)] = (5));

} else {
var statearr_28931_28946 = state_28926__$1;
(statearr_28931_28946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (5))){
var inst_28914 = (state_28926[(7)]);
var inst_28916 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28914);
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28926__$1,(8),inst_28916);
} else {
if((state_val_28927 === (6))){
var state_28926__$1 = state_28926;
var statearr_28932_28947 = state_28926__$1;
(statearr_28932_28947[(2)] = null);

(statearr_28932_28947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (7))){
var inst_28922 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28933_28948 = state_28926__$1;
(statearr_28933_28948[(2)] = inst_28922);

(statearr_28933_28948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (8))){
var inst_28918 = (state_28926[(2)]);
var state_28926__$1 = (function (){var statearr_28934 = state_28926;
(statearr_28934[(8)] = inst_28918);

return statearr_28934;
})();
var statearr_28935_28949 = state_28926__$1;
(statearr_28935_28949[(2)] = null);

(statearr_28935_28949[(1)] = (2));


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
});})(c__24177__auto___28943,ch))
;
return ((function (switch__24065__auto__,c__24177__auto___28943,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24066__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24066__auto____0 = (function (){
var statearr_28939 = [null,null,null,null,null,null,null,null,null];
(statearr_28939[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24066__auto__);

(statearr_28939[(1)] = (1));

return statearr_28939;
});
var figwheel$client$heads_up_plugin_$_state_machine__24066__auto____1 = (function (state_28926){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_28926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e28940){if((e28940 instanceof Object)){
var ex__24069__auto__ = e28940;
var statearr_28941_28950 = state_28926;
(statearr_28941_28950[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28951 = state_28926;
state_28926 = G__28951;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24066__auto__ = function(state_28926){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24066__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24066__auto____1.call(this,state_28926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24066__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24066__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___28943,ch))
})();
var state__24179__auto__ = (function (){var statearr_28942 = f__24178__auto__.call(null);
(statearr_28942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___28943);

return statearr_28942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___28943,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto__){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto__){
return (function (state_28972){
var state_val_28973 = (state_28972[(1)]);
if((state_val_28973 === (1))){
var inst_28967 = cljs.core.async.timeout.call(null,(3000));
var state_28972__$1 = state_28972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28972__$1,(2),inst_28967);
} else {
if((state_val_28973 === (2))){
var inst_28969 = (state_28972[(2)]);
var inst_28970 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28972__$1 = (function (){var statearr_28974 = state_28972;
(statearr_28974[(7)] = inst_28969);

return statearr_28974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28972__$1,inst_28970);
} else {
return null;
}
}
});})(c__24177__auto__))
;
return ((function (switch__24065__auto__,c__24177__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24066__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24066__auto____0 = (function (){
var statearr_28978 = [null,null,null,null,null,null,null,null];
(statearr_28978[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24066__auto__);

(statearr_28978[(1)] = (1));

return statearr_28978;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24066__auto____1 = (function (state_28972){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_28972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e28979){if((e28979 instanceof Object)){
var ex__24069__auto__ = e28979;
var statearr_28980_28982 = state_28972;
(statearr_28980_28982[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28983 = state_28972;
state_28972 = G__28983;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24066__auto__ = function(state_28972){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24066__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24066__auto____1.call(this,state_28972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24066__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24066__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto__))
})();
var state__24179__auto__ = (function (){var statearr_28981 = f__24178__auto__.call(null);
(statearr_28981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto__);

return statearr_28981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto__))
);

return c__24177__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28984){
var map__28991 = p__28984;
var map__28991__$1 = ((((!((map__28991 == null)))?((((map__28991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28991):map__28991);
var ed = map__28991__$1;
var formatted_exception = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28993_28997 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28994_28998 = null;
var count__28995_28999 = (0);
var i__28996_29000 = (0);
while(true){
if((i__28996_29000 < count__28995_28999)){
var msg_29001 = cljs.core._nth.call(null,chunk__28994_28998,i__28996_29000);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29001);

var G__29002 = seq__28993_28997;
var G__29003 = chunk__28994_28998;
var G__29004 = count__28995_28999;
var G__29005 = (i__28996_29000 + (1));
seq__28993_28997 = G__29002;
chunk__28994_28998 = G__29003;
count__28995_28999 = G__29004;
i__28996_29000 = G__29005;
continue;
} else {
var temp__4425__auto___29006 = cljs.core.seq.call(null,seq__28993_28997);
if(temp__4425__auto___29006){
var seq__28993_29007__$1 = temp__4425__auto___29006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28993_29007__$1)){
var c__17510__auto___29008 = cljs.core.chunk_first.call(null,seq__28993_29007__$1);
var G__29009 = cljs.core.chunk_rest.call(null,seq__28993_29007__$1);
var G__29010 = c__17510__auto___29008;
var G__29011 = cljs.core.count.call(null,c__17510__auto___29008);
var G__29012 = (0);
seq__28993_28997 = G__29009;
chunk__28994_28998 = G__29010;
count__28995_28999 = G__29011;
i__28996_29000 = G__29012;
continue;
} else {
var msg_29013 = cljs.core.first.call(null,seq__28993_29007__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29013);

var G__29014 = cljs.core.next.call(null,seq__28993_29007__$1);
var G__29015 = null;
var G__29016 = (0);
var G__29017 = (0);
seq__28993_28997 = G__29014;
chunk__28994_28998 = G__29015;
count__28995_28999 = G__29016;
i__28996_29000 = G__29017;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29018){
var map__29021 = p__29018;
var map__29021__$1 = ((((!((map__29021 == null)))?((((map__29021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29021):map__29021);
var w = map__29021__$1;
var message = cljs.core.get.call(null,map__29021__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16695__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16695__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16695__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29029 = cljs.core.seq.call(null,plugins);
var chunk__29030 = null;
var count__29031 = (0);
var i__29032 = (0);
while(true){
if((i__29032 < count__29031)){
var vec__29033 = cljs.core._nth.call(null,chunk__29030,i__29032);
var k = cljs.core.nth.call(null,vec__29033,(0),null);
var plugin = cljs.core.nth.call(null,vec__29033,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29035 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29029,chunk__29030,count__29031,i__29032,pl_29035,vec__29033,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29035.call(null,msg_hist);
});})(seq__29029,chunk__29030,count__29031,i__29032,pl_29035,vec__29033,k,plugin))
);
} else {
}

var G__29036 = seq__29029;
var G__29037 = chunk__29030;
var G__29038 = count__29031;
var G__29039 = (i__29032 + (1));
seq__29029 = G__29036;
chunk__29030 = G__29037;
count__29031 = G__29038;
i__29032 = G__29039;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29029);
if(temp__4425__auto__){
var seq__29029__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29029__$1)){
var c__17510__auto__ = cljs.core.chunk_first.call(null,seq__29029__$1);
var G__29040 = cljs.core.chunk_rest.call(null,seq__29029__$1);
var G__29041 = c__17510__auto__;
var G__29042 = cljs.core.count.call(null,c__17510__auto__);
var G__29043 = (0);
seq__29029 = G__29040;
chunk__29030 = G__29041;
count__29031 = G__29042;
i__29032 = G__29043;
continue;
} else {
var vec__29034 = cljs.core.first.call(null,seq__29029__$1);
var k = cljs.core.nth.call(null,vec__29034,(0),null);
var plugin = cljs.core.nth.call(null,vec__29034,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29044 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29029,chunk__29030,count__29031,i__29032,pl_29044,vec__29034,k,plugin,seq__29029__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29044.call(null,msg_hist);
});})(seq__29029,chunk__29030,count__29031,i__29032,pl_29044,vec__29034,k,plugin,seq__29029__$1,temp__4425__auto__))
);
} else {
}

var G__29045 = cljs.core.next.call(null,seq__29029__$1);
var G__29046 = null;
var G__29047 = (0);
var G__29048 = (0);
seq__29029 = G__29045;
chunk__29030 = G__29046;
count__29031 = G__29047;
i__29032 = G__29048;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29049 = [];
var len__17765__auto___29052 = arguments.length;
var i__17766__auto___29053 = (0);
while(true){
if((i__17766__auto___29053 < len__17765__auto___29052)){
args29049.push((arguments[i__17766__auto___29053]));

var G__29054 = (i__17766__auto___29053 + (1));
i__17766__auto___29053 = G__29054;
continue;
} else {
}
break;
}

var G__29051 = args29049.length;
switch (G__29051) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29049.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17772__auto__ = [];
var len__17765__auto___29060 = arguments.length;
var i__17766__auto___29061 = (0);
while(true){
if((i__17766__auto___29061 < len__17765__auto___29060)){
args__17772__auto__.push((arguments[i__17766__auto___29061]));

var G__29062 = (i__17766__auto___29061 + (1));
i__17766__auto___29061 = G__29062;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((0) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17773__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29057){
var map__29058 = p__29057;
var map__29058__$1 = ((((!((map__29058 == null)))?((((map__29058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29058):map__29058);
var opts = map__29058__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29056){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29056));
});

//# sourceMappingURL=client.js.map?rel=1453137584200