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
var pred__28312 = cljs.core._EQ_;
var expr__28313 = (function (){var or__16751__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28312.call(null,"true",expr__28313))){
return true;
} else {
if(cljs.core.truth_(pred__28312.call(null,"false",expr__28313))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28313)].join('')));
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
var G__28315__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28316__i = 0, G__28316__a = new Array(arguments.length -  0);
while (G__28316__i < G__28316__a.length) {G__28316__a[G__28316__i] = arguments[G__28316__i + 0]; ++G__28316__i;}
  args = new cljs.core.IndexedSeq(G__28316__a,0);
} 
return G__28315__delegate.call(this,args);};
G__28315.cljs$lang$maxFixedArity = 0;
G__28315.cljs$lang$applyTo = (function (arglist__28317){
var args = cljs.core.seq(arglist__28317);
return G__28315__delegate(args);
});
G__28315.cljs$core$IFn$_invoke$arity$variadic = G__28315__delegate;
return G__28315;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28318){
var map__28321 = p__28318;
var map__28321__$1 = ((((!((map__28321 == null)))?((((map__28321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28321):map__28321);
var message = cljs.core.get.call(null,map__28321__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28321__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16751__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16739__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16739__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16739__auto__;
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
var c__24151__auto___28483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___28483,ch){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___28483,ch){
return (function (state_28452){
var state_val_28453 = (state_28452[(1)]);
if((state_val_28453 === (7))){
var inst_28448 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
var statearr_28454_28484 = state_28452__$1;
(statearr_28454_28484[(2)] = inst_28448);

(statearr_28454_28484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (1))){
var state_28452__$1 = state_28452;
var statearr_28455_28485 = state_28452__$1;
(statearr_28455_28485[(2)] = null);

(statearr_28455_28485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (4))){
var inst_28405 = (state_28452[(7)]);
var inst_28405__$1 = (state_28452[(2)]);
var state_28452__$1 = (function (){var statearr_28456 = state_28452;
(statearr_28456[(7)] = inst_28405__$1);

return statearr_28456;
})();
if(cljs.core.truth_(inst_28405__$1)){
var statearr_28457_28486 = state_28452__$1;
(statearr_28457_28486[(1)] = (5));

} else {
var statearr_28458_28487 = state_28452__$1;
(statearr_28458_28487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (15))){
var inst_28412 = (state_28452[(8)]);
var inst_28427 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28412);
var inst_28428 = cljs.core.first.call(null,inst_28427);
var inst_28429 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28428);
var inst_28430 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28429)].join('');
var inst_28431 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28430);
var state_28452__$1 = state_28452;
var statearr_28459_28488 = state_28452__$1;
(statearr_28459_28488[(2)] = inst_28431);

(statearr_28459_28488[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (13))){
var inst_28436 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
var statearr_28460_28489 = state_28452__$1;
(statearr_28460_28489[(2)] = inst_28436);

(statearr_28460_28489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (6))){
var state_28452__$1 = state_28452;
var statearr_28461_28490 = state_28452__$1;
(statearr_28461_28490[(2)] = null);

(statearr_28461_28490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (17))){
var inst_28434 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
var statearr_28462_28491 = state_28452__$1;
(statearr_28462_28491[(2)] = inst_28434);

(statearr_28462_28491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (3))){
var inst_28450 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28452__$1,inst_28450);
} else {
if((state_val_28453 === (12))){
var inst_28411 = (state_28452[(9)]);
var inst_28425 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28411,opts);
var state_28452__$1 = state_28452;
if(cljs.core.truth_(inst_28425)){
var statearr_28463_28492 = state_28452__$1;
(statearr_28463_28492[(1)] = (15));

} else {
var statearr_28464_28493 = state_28452__$1;
(statearr_28464_28493[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (2))){
var state_28452__$1 = state_28452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28452__$1,(4),ch);
} else {
if((state_val_28453 === (11))){
var inst_28412 = (state_28452[(8)]);
var inst_28417 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28418 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28412);
var inst_28419 = cljs.core.async.timeout.call(null,(1000));
var inst_28420 = [inst_28418,inst_28419];
var inst_28421 = (new cljs.core.PersistentVector(null,2,(5),inst_28417,inst_28420,null));
var state_28452__$1 = state_28452;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28452__$1,(14),inst_28421);
} else {
if((state_val_28453 === (9))){
var inst_28412 = (state_28452[(8)]);
var inst_28438 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28439 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28412);
var inst_28440 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28439);
var inst_28441 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28440)].join('');
var inst_28442 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28441);
var state_28452__$1 = (function (){var statearr_28465 = state_28452;
(statearr_28465[(10)] = inst_28438);

return statearr_28465;
})();
var statearr_28466_28494 = state_28452__$1;
(statearr_28466_28494[(2)] = inst_28442);

(statearr_28466_28494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (5))){
var inst_28405 = (state_28452[(7)]);
var inst_28407 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28408 = (new cljs.core.PersistentArrayMap(null,2,inst_28407,null));
var inst_28409 = (new cljs.core.PersistentHashSet(null,inst_28408,null));
var inst_28410 = figwheel.client.focus_msgs.call(null,inst_28409,inst_28405);
var inst_28411 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28410);
var inst_28412 = cljs.core.first.call(null,inst_28410);
var inst_28413 = figwheel.client.autoload_QMARK_.call(null);
var state_28452__$1 = (function (){var statearr_28467 = state_28452;
(statearr_28467[(9)] = inst_28411);

(statearr_28467[(8)] = inst_28412);

return statearr_28467;
})();
if(cljs.core.truth_(inst_28413)){
var statearr_28468_28495 = state_28452__$1;
(statearr_28468_28495[(1)] = (8));

} else {
var statearr_28469_28496 = state_28452__$1;
(statearr_28469_28496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (14))){
var inst_28423 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
var statearr_28470_28497 = state_28452__$1;
(statearr_28470_28497[(2)] = inst_28423);

(statearr_28470_28497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (16))){
var state_28452__$1 = state_28452;
var statearr_28471_28498 = state_28452__$1;
(statearr_28471_28498[(2)] = null);

(statearr_28471_28498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (10))){
var inst_28444 = (state_28452[(2)]);
var state_28452__$1 = (function (){var statearr_28472 = state_28452;
(statearr_28472[(11)] = inst_28444);

return statearr_28472;
})();
var statearr_28473_28499 = state_28452__$1;
(statearr_28473_28499[(2)] = null);

(statearr_28473_28499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (8))){
var inst_28411 = (state_28452[(9)]);
var inst_28415 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28411,opts);
var state_28452__$1 = state_28452;
if(cljs.core.truth_(inst_28415)){
var statearr_28474_28500 = state_28452__$1;
(statearr_28474_28500[(1)] = (11));

} else {
var statearr_28475_28501 = state_28452__$1;
(statearr_28475_28501[(1)] = (12));

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
});})(c__24151__auto___28483,ch))
;
return ((function (switch__24039__auto__,c__24151__auto___28483,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24040__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24040__auto____0 = (function (){
var statearr_28479 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28479[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24040__auto__);

(statearr_28479[(1)] = (1));

return statearr_28479;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24040__auto____1 = (function (state_28452){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_28452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e28480){if((e28480 instanceof Object)){
var ex__24043__auto__ = e28480;
var statearr_28481_28502 = state_28452;
(statearr_28481_28502[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28503 = state_28452;
state_28452 = G__28503;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24040__auto__ = function(state_28452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24040__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24040__auto____1.call(this,state_28452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24040__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24040__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___28483,ch))
})();
var state__24153__auto__ = (function (){var statearr_28482 = f__24152__auto__.call(null);
(statearr_28482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___28483);

return statearr_28482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___28483,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28504_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28504_SHARP_));
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
var base_path_28511 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28511){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28509 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28510 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28509,_STAR_print_newline_STAR_28510,base_path_28511){
return (function() { 
var G__28512__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28513__i = 0, G__28513__a = new Array(arguments.length -  0);
while (G__28513__i < G__28513__a.length) {G__28513__a[G__28513__i] = arguments[G__28513__i + 0]; ++G__28513__i;}
  args = new cljs.core.IndexedSeq(G__28513__a,0);
} 
return G__28512__delegate.call(this,args);};
G__28512.cljs$lang$maxFixedArity = 0;
G__28512.cljs$lang$applyTo = (function (arglist__28514){
var args = cljs.core.seq(arglist__28514);
return G__28512__delegate(args);
});
G__28512.cljs$core$IFn$_invoke$arity$variadic = G__28512__delegate;
return G__28512;
})()
;})(_STAR_print_fn_STAR_28509,_STAR_print_newline_STAR_28510,base_path_28511))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28510;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28509;
}}catch (e28508){if((e28508 instanceof Error)){
var e = e28508;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28511], null));
} else {
var e = e28508;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28511))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28515){
var map__28522 = p__28515;
var map__28522__$1 = ((((!((map__28522 == null)))?((((map__28522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28522):map__28522);
var opts = map__28522__$1;
var build_id = cljs.core.get.call(null,map__28522__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28522,map__28522__$1,opts,build_id){
return (function (p__28524){
var vec__28525 = p__28524;
var map__28526 = cljs.core.nth.call(null,vec__28525,(0),null);
var map__28526__$1 = ((((!((map__28526 == null)))?((((map__28526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28526):map__28526);
var msg = map__28526__$1;
var msg_name = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28525,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28525,map__28526,map__28526__$1,msg,msg_name,_,map__28522,map__28522__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28525,map__28526,map__28526__$1,msg,msg_name,_,map__28522,map__28522__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28522,map__28522__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28532){
var vec__28533 = p__28532;
var map__28534 = cljs.core.nth.call(null,vec__28533,(0),null);
var map__28534__$1 = ((((!((map__28534 == null)))?((((map__28534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28534):map__28534);
var msg = map__28534__$1;
var msg_name = cljs.core.get.call(null,map__28534__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28533,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28536){
var map__28546 = p__28536;
var map__28546__$1 = ((((!((map__28546 == null)))?((((map__28546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28546):map__28546);
var on_compile_warning = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28546,map__28546__$1,on_compile_warning,on_compile_fail){
return (function (p__28548){
var vec__28549 = p__28548;
var map__28550 = cljs.core.nth.call(null,vec__28549,(0),null);
var map__28550__$1 = ((((!((map__28550 == null)))?((((map__28550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28550):map__28550);
var msg = map__28550__$1;
var msg_name = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28549,(1));
var pred__28552 = cljs.core._EQ_;
var expr__28553 = msg_name;
if(cljs.core.truth_(pred__28552.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28553))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28552.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28553))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28546,map__28546__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto__,msg_hist,msg_names,msg){
return (function (state_28769){
var state_val_28770 = (state_28769[(1)]);
if((state_val_28770 === (7))){
var inst_28693 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28693)){
var statearr_28771_28817 = state_28769__$1;
(statearr_28771_28817[(1)] = (8));

} else {
var statearr_28772_28818 = state_28769__$1;
(statearr_28772_28818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (20))){
var inst_28763 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28773_28819 = state_28769__$1;
(statearr_28773_28819[(2)] = inst_28763);

(statearr_28773_28819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (27))){
var inst_28759 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28774_28820 = state_28769__$1;
(statearr_28774_28820[(2)] = inst_28759);

(statearr_28774_28820[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (1))){
var inst_28686 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28686)){
var statearr_28775_28821 = state_28769__$1;
(statearr_28775_28821[(1)] = (2));

} else {
var statearr_28776_28822 = state_28769__$1;
(statearr_28776_28822[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (24))){
var inst_28761 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28777_28823 = state_28769__$1;
(statearr_28777_28823[(2)] = inst_28761);

(statearr_28777_28823[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (4))){
var inst_28767 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28769__$1,inst_28767);
} else {
if((state_val_28770 === (15))){
var inst_28765 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28778_28824 = state_28769__$1;
(statearr_28778_28824[(2)] = inst_28765);

(statearr_28778_28824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (21))){
var inst_28724 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28779_28825 = state_28769__$1;
(statearr_28779_28825[(2)] = inst_28724);

(statearr_28779_28825[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (31))){
var inst_28748 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28748)){
var statearr_28780_28826 = state_28769__$1;
(statearr_28780_28826[(1)] = (34));

} else {
var statearr_28781_28827 = state_28769__$1;
(statearr_28781_28827[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (32))){
var inst_28757 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28782_28828 = state_28769__$1;
(statearr_28782_28828[(2)] = inst_28757);

(statearr_28782_28828[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (33))){
var inst_28746 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28783_28829 = state_28769__$1;
(statearr_28783_28829[(2)] = inst_28746);

(statearr_28783_28829[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (13))){
var inst_28707 = figwheel.client.heads_up.clear.call(null);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(16),inst_28707);
} else {
if((state_val_28770 === (22))){
var inst_28728 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28729 = figwheel.client.heads_up.append_message.call(null,inst_28728);
var state_28769__$1 = state_28769;
var statearr_28784_28830 = state_28769__$1;
(statearr_28784_28830[(2)] = inst_28729);

(statearr_28784_28830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (36))){
var inst_28755 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28785_28831 = state_28769__$1;
(statearr_28785_28831[(2)] = inst_28755);

(statearr_28785_28831[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (29))){
var inst_28739 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28786_28832 = state_28769__$1;
(statearr_28786_28832[(2)] = inst_28739);

(statearr_28786_28832[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (6))){
var inst_28688 = (state_28769[(7)]);
var state_28769__$1 = state_28769;
var statearr_28787_28833 = state_28769__$1;
(statearr_28787_28833[(2)] = inst_28688);

(statearr_28787_28833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (28))){
var inst_28735 = (state_28769[(2)]);
var inst_28736 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28737 = figwheel.client.heads_up.display_warning.call(null,inst_28736);
var state_28769__$1 = (function (){var statearr_28788 = state_28769;
(statearr_28788[(8)] = inst_28735);

return statearr_28788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(29),inst_28737);
} else {
if((state_val_28770 === (25))){
var inst_28733 = figwheel.client.heads_up.clear.call(null);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(28),inst_28733);
} else {
if((state_val_28770 === (34))){
var inst_28750 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(37),inst_28750);
} else {
if((state_val_28770 === (17))){
var inst_28715 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28789_28834 = state_28769__$1;
(statearr_28789_28834[(2)] = inst_28715);

(statearr_28789_28834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (3))){
var inst_28705 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28705)){
var statearr_28790_28835 = state_28769__$1;
(statearr_28790_28835[(1)] = (13));

} else {
var statearr_28791_28836 = state_28769__$1;
(statearr_28791_28836[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (12))){
var inst_28701 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28792_28837 = state_28769__$1;
(statearr_28792_28837[(2)] = inst_28701);

(statearr_28792_28837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (2))){
var inst_28688 = (state_28769[(7)]);
var inst_28688__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28769__$1 = (function (){var statearr_28793 = state_28769;
(statearr_28793[(7)] = inst_28688__$1);

return statearr_28793;
})();
if(cljs.core.truth_(inst_28688__$1)){
var statearr_28794_28838 = state_28769__$1;
(statearr_28794_28838[(1)] = (5));

} else {
var statearr_28795_28839 = state_28769__$1;
(statearr_28795_28839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (23))){
var inst_28731 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28731)){
var statearr_28796_28840 = state_28769__$1;
(statearr_28796_28840[(1)] = (25));

} else {
var statearr_28797_28841 = state_28769__$1;
(statearr_28797_28841[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (35))){
var state_28769__$1 = state_28769;
var statearr_28798_28842 = state_28769__$1;
(statearr_28798_28842[(2)] = null);

(statearr_28798_28842[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (19))){
var inst_28726 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28726)){
var statearr_28799_28843 = state_28769__$1;
(statearr_28799_28843[(1)] = (22));

} else {
var statearr_28800_28844 = state_28769__$1;
(statearr_28800_28844[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (11))){
var inst_28697 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28801_28845 = state_28769__$1;
(statearr_28801_28845[(2)] = inst_28697);

(statearr_28801_28845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (9))){
var inst_28699 = figwheel.client.heads_up.clear.call(null);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(12),inst_28699);
} else {
if((state_val_28770 === (5))){
var inst_28690 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28769__$1 = state_28769;
var statearr_28802_28846 = state_28769__$1;
(statearr_28802_28846[(2)] = inst_28690);

(statearr_28802_28846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (14))){
var inst_28717 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28717)){
var statearr_28803_28847 = state_28769__$1;
(statearr_28803_28847[(1)] = (18));

} else {
var statearr_28804_28848 = state_28769__$1;
(statearr_28804_28848[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (26))){
var inst_28741 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28741)){
var statearr_28805_28849 = state_28769__$1;
(statearr_28805_28849[(1)] = (30));

} else {
var statearr_28806_28850 = state_28769__$1;
(statearr_28806_28850[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (16))){
var inst_28709 = (state_28769[(2)]);
var inst_28710 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28711 = figwheel.client.format_messages.call(null,inst_28710);
var inst_28712 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28713 = figwheel.client.heads_up.display_error.call(null,inst_28711,inst_28712);
var state_28769__$1 = (function (){var statearr_28807 = state_28769;
(statearr_28807[(9)] = inst_28709);

return statearr_28807;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(17),inst_28713);
} else {
if((state_val_28770 === (30))){
var inst_28743 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28744 = figwheel.client.heads_up.display_warning.call(null,inst_28743);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(33),inst_28744);
} else {
if((state_val_28770 === (10))){
var inst_28703 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28808_28851 = state_28769__$1;
(statearr_28808_28851[(2)] = inst_28703);

(statearr_28808_28851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (18))){
var inst_28719 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28720 = figwheel.client.format_messages.call(null,inst_28719);
var inst_28721 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28722 = figwheel.client.heads_up.display_error.call(null,inst_28720,inst_28721);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(21),inst_28722);
} else {
if((state_val_28770 === (37))){
var inst_28752 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28809_28852 = state_28769__$1;
(statearr_28809_28852[(2)] = inst_28752);

(statearr_28809_28852[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (8))){
var inst_28695 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(11),inst_28695);
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
});})(c__24151__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24039__auto__,c__24151__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto____0 = (function (){
var statearr_28813 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28813[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto__);

(statearr_28813[(1)] = (1));

return statearr_28813;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto____1 = (function (state_28769){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_28769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e28814){if((e28814 instanceof Object)){
var ex__24043__auto__ = e28814;
var statearr_28815_28853 = state_28769;
(statearr_28815_28853[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28854 = state_28769;
state_28769 = G__28854;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto__ = function(state_28769){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto____1.call(this,state_28769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto__,msg_hist,msg_names,msg))
})();
var state__24153__auto__ = (function (){var statearr_28816 = f__24152__auto__.call(null);
(statearr_28816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto__);

return statearr_28816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto__,msg_hist,msg_names,msg))
);

return c__24151__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24151__auto___28917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___28917,ch){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___28917,ch){
return (function (state_28900){
var state_val_28901 = (state_28900[(1)]);
if((state_val_28901 === (1))){
var state_28900__$1 = state_28900;
var statearr_28902_28918 = state_28900__$1;
(statearr_28902_28918[(2)] = null);

(statearr_28902_28918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (2))){
var state_28900__$1 = state_28900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28900__$1,(4),ch);
} else {
if((state_val_28901 === (3))){
var inst_28898 = (state_28900[(2)]);
var state_28900__$1 = state_28900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28900__$1,inst_28898);
} else {
if((state_val_28901 === (4))){
var inst_28888 = (state_28900[(7)]);
var inst_28888__$1 = (state_28900[(2)]);
var state_28900__$1 = (function (){var statearr_28903 = state_28900;
(statearr_28903[(7)] = inst_28888__$1);

return statearr_28903;
})();
if(cljs.core.truth_(inst_28888__$1)){
var statearr_28904_28919 = state_28900__$1;
(statearr_28904_28919[(1)] = (5));

} else {
var statearr_28905_28920 = state_28900__$1;
(statearr_28905_28920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (5))){
var inst_28888 = (state_28900[(7)]);
var inst_28890 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28888);
var state_28900__$1 = state_28900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28900__$1,(8),inst_28890);
} else {
if((state_val_28901 === (6))){
var state_28900__$1 = state_28900;
var statearr_28906_28921 = state_28900__$1;
(statearr_28906_28921[(2)] = null);

(statearr_28906_28921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (7))){
var inst_28896 = (state_28900[(2)]);
var state_28900__$1 = state_28900;
var statearr_28907_28922 = state_28900__$1;
(statearr_28907_28922[(2)] = inst_28896);

(statearr_28907_28922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28901 === (8))){
var inst_28892 = (state_28900[(2)]);
var state_28900__$1 = (function (){var statearr_28908 = state_28900;
(statearr_28908[(8)] = inst_28892);

return statearr_28908;
})();
var statearr_28909_28923 = state_28900__$1;
(statearr_28909_28923[(2)] = null);

(statearr_28909_28923[(1)] = (2));


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
});})(c__24151__auto___28917,ch))
;
return ((function (switch__24039__auto__,c__24151__auto___28917,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24040__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24040__auto____0 = (function (){
var statearr_28913 = [null,null,null,null,null,null,null,null,null];
(statearr_28913[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24040__auto__);

(statearr_28913[(1)] = (1));

return statearr_28913;
});
var figwheel$client$heads_up_plugin_$_state_machine__24040__auto____1 = (function (state_28900){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_28900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e28914){if((e28914 instanceof Object)){
var ex__24043__auto__ = e28914;
var statearr_28915_28924 = state_28900;
(statearr_28915_28924[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28925 = state_28900;
state_28900 = G__28925;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24040__auto__ = function(state_28900){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24040__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24040__auto____1.call(this,state_28900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24040__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24040__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___28917,ch))
})();
var state__24153__auto__ = (function (){var statearr_28916 = f__24152__auto__.call(null);
(statearr_28916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___28917);

return statearr_28916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___28917,ch))
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
var c__24151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto__){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto__){
return (function (state_28946){
var state_val_28947 = (state_28946[(1)]);
if((state_val_28947 === (1))){
var inst_28941 = cljs.core.async.timeout.call(null,(3000));
var state_28946__$1 = state_28946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28946__$1,(2),inst_28941);
} else {
if((state_val_28947 === (2))){
var inst_28943 = (state_28946[(2)]);
var inst_28944 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28946__$1 = (function (){var statearr_28948 = state_28946;
(statearr_28948[(7)] = inst_28943);

return statearr_28948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28946__$1,inst_28944);
} else {
return null;
}
}
});})(c__24151__auto__))
;
return ((function (switch__24039__auto__,c__24151__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24040__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24040__auto____0 = (function (){
var statearr_28952 = [null,null,null,null,null,null,null,null];
(statearr_28952[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24040__auto__);

(statearr_28952[(1)] = (1));

return statearr_28952;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24040__auto____1 = (function (state_28946){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_28946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e28953){if((e28953 instanceof Object)){
var ex__24043__auto__ = e28953;
var statearr_28954_28956 = state_28946;
(statearr_28954_28956[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28957 = state_28946;
state_28946 = G__28957;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24040__auto__ = function(state_28946){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24040__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24040__auto____1.call(this,state_28946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24040__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24040__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto__))
})();
var state__24153__auto__ = (function (){var statearr_28955 = f__24152__auto__.call(null);
(statearr_28955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto__);

return statearr_28955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto__))
);

return c__24151__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28958){
var map__28965 = p__28958;
var map__28965__$1 = ((((!((map__28965 == null)))?((((map__28965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28965):map__28965);
var ed = map__28965__$1;
var formatted_exception = cljs.core.get.call(null,map__28965__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28965__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28965__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28967_28971 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28968_28972 = null;
var count__28969_28973 = (0);
var i__28970_28974 = (0);
while(true){
if((i__28970_28974 < count__28969_28973)){
var msg_28975 = cljs.core._nth.call(null,chunk__28968_28972,i__28970_28974);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28975);

var G__28976 = seq__28967_28971;
var G__28977 = chunk__28968_28972;
var G__28978 = count__28969_28973;
var G__28979 = (i__28970_28974 + (1));
seq__28967_28971 = G__28976;
chunk__28968_28972 = G__28977;
count__28969_28973 = G__28978;
i__28970_28974 = G__28979;
continue;
} else {
var temp__4425__auto___28980 = cljs.core.seq.call(null,seq__28967_28971);
if(temp__4425__auto___28980){
var seq__28967_28981__$1 = temp__4425__auto___28980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28967_28981__$1)){
var c__17554__auto___28982 = cljs.core.chunk_first.call(null,seq__28967_28981__$1);
var G__28983 = cljs.core.chunk_rest.call(null,seq__28967_28981__$1);
var G__28984 = c__17554__auto___28982;
var G__28985 = cljs.core.count.call(null,c__17554__auto___28982);
var G__28986 = (0);
seq__28967_28971 = G__28983;
chunk__28968_28972 = G__28984;
count__28969_28973 = G__28985;
i__28970_28974 = G__28986;
continue;
} else {
var msg_28987 = cljs.core.first.call(null,seq__28967_28981__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28987);

var G__28988 = cljs.core.next.call(null,seq__28967_28981__$1);
var G__28989 = null;
var G__28990 = (0);
var G__28991 = (0);
seq__28967_28971 = G__28988;
chunk__28968_28972 = G__28989;
count__28969_28973 = G__28990;
i__28970_28974 = G__28991;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28992){
var map__28995 = p__28992;
var map__28995__$1 = ((((!((map__28995 == null)))?((((map__28995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28995):map__28995);
var w = map__28995__$1;
var message = cljs.core.get.call(null,map__28995__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16739__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16739__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16739__auto__;
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
var seq__29003 = cljs.core.seq.call(null,plugins);
var chunk__29004 = null;
var count__29005 = (0);
var i__29006 = (0);
while(true){
if((i__29006 < count__29005)){
var vec__29007 = cljs.core._nth.call(null,chunk__29004,i__29006);
var k = cljs.core.nth.call(null,vec__29007,(0),null);
var plugin = cljs.core.nth.call(null,vec__29007,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29009 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29003,chunk__29004,count__29005,i__29006,pl_29009,vec__29007,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29009.call(null,msg_hist);
});})(seq__29003,chunk__29004,count__29005,i__29006,pl_29009,vec__29007,k,plugin))
);
} else {
}

var G__29010 = seq__29003;
var G__29011 = chunk__29004;
var G__29012 = count__29005;
var G__29013 = (i__29006 + (1));
seq__29003 = G__29010;
chunk__29004 = G__29011;
count__29005 = G__29012;
i__29006 = G__29013;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29003);
if(temp__4425__auto__){
var seq__29003__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29003__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__29003__$1);
var G__29014 = cljs.core.chunk_rest.call(null,seq__29003__$1);
var G__29015 = c__17554__auto__;
var G__29016 = cljs.core.count.call(null,c__17554__auto__);
var G__29017 = (0);
seq__29003 = G__29014;
chunk__29004 = G__29015;
count__29005 = G__29016;
i__29006 = G__29017;
continue;
} else {
var vec__29008 = cljs.core.first.call(null,seq__29003__$1);
var k = cljs.core.nth.call(null,vec__29008,(0),null);
var plugin = cljs.core.nth.call(null,vec__29008,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29018 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29003,chunk__29004,count__29005,i__29006,pl_29018,vec__29008,k,plugin,seq__29003__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29018.call(null,msg_hist);
});})(seq__29003,chunk__29004,count__29005,i__29006,pl_29018,vec__29008,k,plugin,seq__29003__$1,temp__4425__auto__))
);
} else {
}

var G__29019 = cljs.core.next.call(null,seq__29003__$1);
var G__29020 = null;
var G__29021 = (0);
var G__29022 = (0);
seq__29003 = G__29019;
chunk__29004 = G__29020;
count__29005 = G__29021;
i__29006 = G__29022;
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
var args29023 = [];
var len__17809__auto___29026 = arguments.length;
var i__17810__auto___29027 = (0);
while(true){
if((i__17810__auto___29027 < len__17809__auto___29026)){
args29023.push((arguments[i__17810__auto___29027]));

var G__29028 = (i__17810__auto___29027 + (1));
i__17810__auto___29027 = G__29028;
continue;
} else {
}
break;
}

var G__29025 = args29023.length;
switch (G__29025) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29023.length)].join('')));

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
var args__17816__auto__ = [];
var len__17809__auto___29034 = arguments.length;
var i__17810__auto___29035 = (0);
while(true){
if((i__17810__auto___29035 < len__17809__auto___29034)){
args__17816__auto__.push((arguments[i__17810__auto___29035]));

var G__29036 = (i__17810__auto___29035 + (1));
i__17810__auto___29035 = G__29036;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29031){
var map__29032 = p__29031;
var map__29032__$1 = ((((!((map__29032 == null)))?((((map__29032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29032):map__29032);
var opts = map__29032__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29030){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29030));
});

//# sourceMappingURL=client.js.map?rel=1448194815901