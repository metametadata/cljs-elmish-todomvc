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
var pred__28183 = cljs.core._EQ_;
var expr__28184 = (function (){var or__16751__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28183.call(null,"true",expr__28184))){
return true;
} else {
if(cljs.core.truth_(pred__28183.call(null,"false",expr__28184))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28184)].join('')));
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
var G__28186__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28187__i = 0, G__28187__a = new Array(arguments.length -  0);
while (G__28187__i < G__28187__a.length) {G__28187__a[G__28187__i] = arguments[G__28187__i + 0]; ++G__28187__i;}
  args = new cljs.core.IndexedSeq(G__28187__a,0);
} 
return G__28186__delegate.call(this,args);};
G__28186.cljs$lang$maxFixedArity = 0;
G__28186.cljs$lang$applyTo = (function (arglist__28188){
var args = cljs.core.seq(arglist__28188);
return G__28186__delegate(args);
});
G__28186.cljs$core$IFn$_invoke$arity$variadic = G__28186__delegate;
return G__28186;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28189){
var map__28192 = p__28189;
var map__28192__$1 = ((((!((map__28192 == null)))?((((map__28192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28192):map__28192);
var message = cljs.core.get.call(null,map__28192__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28192__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24022__auto___28354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___28354,ch){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___28354,ch){
return (function (state_28323){
var state_val_28324 = (state_28323[(1)]);
if((state_val_28324 === (7))){
var inst_28319 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28325_28355 = state_28323__$1;
(statearr_28325_28355[(2)] = inst_28319);

(statearr_28325_28355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (1))){
var state_28323__$1 = state_28323;
var statearr_28326_28356 = state_28323__$1;
(statearr_28326_28356[(2)] = null);

(statearr_28326_28356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (4))){
var inst_28276 = (state_28323[(7)]);
var inst_28276__$1 = (state_28323[(2)]);
var state_28323__$1 = (function (){var statearr_28327 = state_28323;
(statearr_28327[(7)] = inst_28276__$1);

return statearr_28327;
})();
if(cljs.core.truth_(inst_28276__$1)){
var statearr_28328_28357 = state_28323__$1;
(statearr_28328_28357[(1)] = (5));

} else {
var statearr_28329_28358 = state_28323__$1;
(statearr_28329_28358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (15))){
var inst_28283 = (state_28323[(8)]);
var inst_28298 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28283);
var inst_28299 = cljs.core.first.call(null,inst_28298);
var inst_28300 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28299);
var inst_28301 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28300)].join('');
var inst_28302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28301);
var state_28323__$1 = state_28323;
var statearr_28330_28359 = state_28323__$1;
(statearr_28330_28359[(2)] = inst_28302);

(statearr_28330_28359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (13))){
var inst_28307 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28331_28360 = state_28323__$1;
(statearr_28331_28360[(2)] = inst_28307);

(statearr_28331_28360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (6))){
var state_28323__$1 = state_28323;
var statearr_28332_28361 = state_28323__$1;
(statearr_28332_28361[(2)] = null);

(statearr_28332_28361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (17))){
var inst_28305 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28333_28362 = state_28323__$1;
(statearr_28333_28362[(2)] = inst_28305);

(statearr_28333_28362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (3))){
var inst_28321 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28323__$1,inst_28321);
} else {
if((state_val_28324 === (12))){
var inst_28282 = (state_28323[(9)]);
var inst_28296 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28282,opts);
var state_28323__$1 = state_28323;
if(cljs.core.truth_(inst_28296)){
var statearr_28334_28363 = state_28323__$1;
(statearr_28334_28363[(1)] = (15));

} else {
var statearr_28335_28364 = state_28323__$1;
(statearr_28335_28364[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (2))){
var state_28323__$1 = state_28323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28323__$1,(4),ch);
} else {
if((state_val_28324 === (11))){
var inst_28283 = (state_28323[(8)]);
var inst_28288 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28289 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28283);
var inst_28290 = cljs.core.async.timeout.call(null,(1000));
var inst_28291 = [inst_28289,inst_28290];
var inst_28292 = (new cljs.core.PersistentVector(null,2,(5),inst_28288,inst_28291,null));
var state_28323__$1 = state_28323;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28323__$1,(14),inst_28292);
} else {
if((state_val_28324 === (9))){
var inst_28283 = (state_28323[(8)]);
var inst_28309 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28310 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28283);
var inst_28311 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28310);
var inst_28312 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28311)].join('');
var inst_28313 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28312);
var state_28323__$1 = (function (){var statearr_28336 = state_28323;
(statearr_28336[(10)] = inst_28309);

return statearr_28336;
})();
var statearr_28337_28365 = state_28323__$1;
(statearr_28337_28365[(2)] = inst_28313);

(statearr_28337_28365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (5))){
var inst_28276 = (state_28323[(7)]);
var inst_28278 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28279 = (new cljs.core.PersistentArrayMap(null,2,inst_28278,null));
var inst_28280 = (new cljs.core.PersistentHashSet(null,inst_28279,null));
var inst_28281 = figwheel.client.focus_msgs.call(null,inst_28280,inst_28276);
var inst_28282 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28281);
var inst_28283 = cljs.core.first.call(null,inst_28281);
var inst_28284 = figwheel.client.autoload_QMARK_.call(null);
var state_28323__$1 = (function (){var statearr_28338 = state_28323;
(statearr_28338[(8)] = inst_28283);

(statearr_28338[(9)] = inst_28282);

return statearr_28338;
})();
if(cljs.core.truth_(inst_28284)){
var statearr_28339_28366 = state_28323__$1;
(statearr_28339_28366[(1)] = (8));

} else {
var statearr_28340_28367 = state_28323__$1;
(statearr_28340_28367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (14))){
var inst_28294 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28341_28368 = state_28323__$1;
(statearr_28341_28368[(2)] = inst_28294);

(statearr_28341_28368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (16))){
var state_28323__$1 = state_28323;
var statearr_28342_28369 = state_28323__$1;
(statearr_28342_28369[(2)] = null);

(statearr_28342_28369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (10))){
var inst_28315 = (state_28323[(2)]);
var state_28323__$1 = (function (){var statearr_28343 = state_28323;
(statearr_28343[(11)] = inst_28315);

return statearr_28343;
})();
var statearr_28344_28370 = state_28323__$1;
(statearr_28344_28370[(2)] = null);

(statearr_28344_28370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (8))){
var inst_28282 = (state_28323[(9)]);
var inst_28286 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28282,opts);
var state_28323__$1 = state_28323;
if(cljs.core.truth_(inst_28286)){
var statearr_28345_28371 = state_28323__$1;
(statearr_28345_28371[(1)] = (11));

} else {
var statearr_28346_28372 = state_28323__$1;
(statearr_28346_28372[(1)] = (12));

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
});})(c__24022__auto___28354,ch))
;
return ((function (switch__23910__auto__,c__24022__auto___28354,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23911__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23911__auto____0 = (function (){
var statearr_28350 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28350[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23911__auto__);

(statearr_28350[(1)] = (1));

return statearr_28350;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23911__auto____1 = (function (state_28323){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_28323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e28351){if((e28351 instanceof Object)){
var ex__23914__auto__ = e28351;
var statearr_28352_28373 = state_28323;
(statearr_28352_28373[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28374 = state_28323;
state_28323 = G__28374;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23911__auto__ = function(state_28323){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23911__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23911__auto____1.call(this,state_28323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23911__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23911__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___28354,ch))
})();
var state__24024__auto__ = (function (){var statearr_28353 = f__24023__auto__.call(null);
(statearr_28353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___28354);

return statearr_28353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___28354,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28375_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28375_SHARP_));
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
var base_path_28382 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28382){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28380 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28381 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28380,_STAR_print_newline_STAR_28381,base_path_28382){
return (function() { 
var G__28383__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28384__i = 0, G__28384__a = new Array(arguments.length -  0);
while (G__28384__i < G__28384__a.length) {G__28384__a[G__28384__i] = arguments[G__28384__i + 0]; ++G__28384__i;}
  args = new cljs.core.IndexedSeq(G__28384__a,0);
} 
return G__28383__delegate.call(this,args);};
G__28383.cljs$lang$maxFixedArity = 0;
G__28383.cljs$lang$applyTo = (function (arglist__28385){
var args = cljs.core.seq(arglist__28385);
return G__28383__delegate(args);
});
G__28383.cljs$core$IFn$_invoke$arity$variadic = G__28383__delegate;
return G__28383;
})()
;})(_STAR_print_fn_STAR_28380,_STAR_print_newline_STAR_28381,base_path_28382))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28381;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28380;
}}catch (e28379){if((e28379 instanceof Error)){
var e = e28379;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28382], null));
} else {
var e = e28379;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28382))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28386){
var map__28393 = p__28386;
var map__28393__$1 = ((((!((map__28393 == null)))?((((map__28393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28393):map__28393);
var opts = map__28393__$1;
var build_id = cljs.core.get.call(null,map__28393__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28393,map__28393__$1,opts,build_id){
return (function (p__28395){
var vec__28396 = p__28395;
var map__28397 = cljs.core.nth.call(null,vec__28396,(0),null);
var map__28397__$1 = ((((!((map__28397 == null)))?((((map__28397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28397):map__28397);
var msg = map__28397__$1;
var msg_name = cljs.core.get.call(null,map__28397__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28396,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28396,map__28397,map__28397__$1,msg,msg_name,_,map__28393,map__28393__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28396,map__28397,map__28397__$1,msg,msg_name,_,map__28393,map__28393__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28393,map__28393__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28403){
var vec__28404 = p__28403;
var map__28405 = cljs.core.nth.call(null,vec__28404,(0),null);
var map__28405__$1 = ((((!((map__28405 == null)))?((((map__28405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28405):map__28405);
var msg = map__28405__$1;
var msg_name = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28404,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28407){
var map__28417 = p__28407;
var map__28417__$1 = ((((!((map__28417 == null)))?((((map__28417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28417):map__28417);
var on_compile_warning = cljs.core.get.call(null,map__28417__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28417__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28417,map__28417__$1,on_compile_warning,on_compile_fail){
return (function (p__28419){
var vec__28420 = p__28419;
var map__28421 = cljs.core.nth.call(null,vec__28420,(0),null);
var map__28421__$1 = ((((!((map__28421 == null)))?((((map__28421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28421):map__28421);
var msg = map__28421__$1;
var msg_name = cljs.core.get.call(null,map__28421__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28420,(1));
var pred__28423 = cljs.core._EQ_;
var expr__28424 = msg_name;
if(cljs.core.truth_(pred__28423.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28424))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28423.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28424))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28417,map__28417__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto__,msg_hist,msg_names,msg){
return (function (state_28640){
var state_val_28641 = (state_28640[(1)]);
if((state_val_28641 === (7))){
var inst_28564 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
if(cljs.core.truth_(inst_28564)){
var statearr_28642_28688 = state_28640__$1;
(statearr_28642_28688[(1)] = (8));

} else {
var statearr_28643_28689 = state_28640__$1;
(statearr_28643_28689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (20))){
var inst_28634 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28644_28690 = state_28640__$1;
(statearr_28644_28690[(2)] = inst_28634);

(statearr_28644_28690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (27))){
var inst_28630 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28645_28691 = state_28640__$1;
(statearr_28645_28691[(2)] = inst_28630);

(statearr_28645_28691[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (1))){
var inst_28557 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28640__$1 = state_28640;
if(cljs.core.truth_(inst_28557)){
var statearr_28646_28692 = state_28640__$1;
(statearr_28646_28692[(1)] = (2));

} else {
var statearr_28647_28693 = state_28640__$1;
(statearr_28647_28693[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (24))){
var inst_28632 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28648_28694 = state_28640__$1;
(statearr_28648_28694[(2)] = inst_28632);

(statearr_28648_28694[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (4))){
var inst_28638 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28640__$1,inst_28638);
} else {
if((state_val_28641 === (15))){
var inst_28636 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28649_28695 = state_28640__$1;
(statearr_28649_28695[(2)] = inst_28636);

(statearr_28649_28695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (21))){
var inst_28595 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28650_28696 = state_28640__$1;
(statearr_28650_28696[(2)] = inst_28595);

(statearr_28650_28696[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (31))){
var inst_28619 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28640__$1 = state_28640;
if(cljs.core.truth_(inst_28619)){
var statearr_28651_28697 = state_28640__$1;
(statearr_28651_28697[(1)] = (34));

} else {
var statearr_28652_28698 = state_28640__$1;
(statearr_28652_28698[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (32))){
var inst_28628 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28653_28699 = state_28640__$1;
(statearr_28653_28699[(2)] = inst_28628);

(statearr_28653_28699[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (33))){
var inst_28617 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28654_28700 = state_28640__$1;
(statearr_28654_28700[(2)] = inst_28617);

(statearr_28654_28700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (13))){
var inst_28578 = figwheel.client.heads_up.clear.call(null);
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28640__$1,(16),inst_28578);
} else {
if((state_val_28641 === (22))){
var inst_28599 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28600 = figwheel.client.heads_up.append_message.call(null,inst_28599);
var state_28640__$1 = state_28640;
var statearr_28655_28701 = state_28640__$1;
(statearr_28655_28701[(2)] = inst_28600);

(statearr_28655_28701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (36))){
var inst_28626 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28656_28702 = state_28640__$1;
(statearr_28656_28702[(2)] = inst_28626);

(statearr_28656_28702[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (29))){
var inst_28610 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28657_28703 = state_28640__$1;
(statearr_28657_28703[(2)] = inst_28610);

(statearr_28657_28703[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (6))){
var inst_28559 = (state_28640[(7)]);
var state_28640__$1 = state_28640;
var statearr_28658_28704 = state_28640__$1;
(statearr_28658_28704[(2)] = inst_28559);

(statearr_28658_28704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (28))){
var inst_28606 = (state_28640[(2)]);
var inst_28607 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28608 = figwheel.client.heads_up.display_warning.call(null,inst_28607);
var state_28640__$1 = (function (){var statearr_28659 = state_28640;
(statearr_28659[(8)] = inst_28606);

return statearr_28659;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28640__$1,(29),inst_28608);
} else {
if((state_val_28641 === (25))){
var inst_28604 = figwheel.client.heads_up.clear.call(null);
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28640__$1,(28),inst_28604);
} else {
if((state_val_28641 === (34))){
var inst_28621 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28640__$1,(37),inst_28621);
} else {
if((state_val_28641 === (17))){
var inst_28586 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28660_28705 = state_28640__$1;
(statearr_28660_28705[(2)] = inst_28586);

(statearr_28660_28705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (3))){
var inst_28576 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28640__$1 = state_28640;
if(cljs.core.truth_(inst_28576)){
var statearr_28661_28706 = state_28640__$1;
(statearr_28661_28706[(1)] = (13));

} else {
var statearr_28662_28707 = state_28640__$1;
(statearr_28662_28707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (12))){
var inst_28572 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28663_28708 = state_28640__$1;
(statearr_28663_28708[(2)] = inst_28572);

(statearr_28663_28708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (2))){
var inst_28559 = (state_28640[(7)]);
var inst_28559__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28640__$1 = (function (){var statearr_28664 = state_28640;
(statearr_28664[(7)] = inst_28559__$1);

return statearr_28664;
})();
if(cljs.core.truth_(inst_28559__$1)){
var statearr_28665_28709 = state_28640__$1;
(statearr_28665_28709[(1)] = (5));

} else {
var statearr_28666_28710 = state_28640__$1;
(statearr_28666_28710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (23))){
var inst_28602 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28640__$1 = state_28640;
if(cljs.core.truth_(inst_28602)){
var statearr_28667_28711 = state_28640__$1;
(statearr_28667_28711[(1)] = (25));

} else {
var statearr_28668_28712 = state_28640__$1;
(statearr_28668_28712[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (35))){
var state_28640__$1 = state_28640;
var statearr_28669_28713 = state_28640__$1;
(statearr_28669_28713[(2)] = null);

(statearr_28669_28713[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (19))){
var inst_28597 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28640__$1 = state_28640;
if(cljs.core.truth_(inst_28597)){
var statearr_28670_28714 = state_28640__$1;
(statearr_28670_28714[(1)] = (22));

} else {
var statearr_28671_28715 = state_28640__$1;
(statearr_28671_28715[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (11))){
var inst_28568 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28672_28716 = state_28640__$1;
(statearr_28672_28716[(2)] = inst_28568);

(statearr_28672_28716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (9))){
var inst_28570 = figwheel.client.heads_up.clear.call(null);
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28640__$1,(12),inst_28570);
} else {
if((state_val_28641 === (5))){
var inst_28561 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28640__$1 = state_28640;
var statearr_28673_28717 = state_28640__$1;
(statearr_28673_28717[(2)] = inst_28561);

(statearr_28673_28717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (14))){
var inst_28588 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28640__$1 = state_28640;
if(cljs.core.truth_(inst_28588)){
var statearr_28674_28718 = state_28640__$1;
(statearr_28674_28718[(1)] = (18));

} else {
var statearr_28675_28719 = state_28640__$1;
(statearr_28675_28719[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (26))){
var inst_28612 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28640__$1 = state_28640;
if(cljs.core.truth_(inst_28612)){
var statearr_28676_28720 = state_28640__$1;
(statearr_28676_28720[(1)] = (30));

} else {
var statearr_28677_28721 = state_28640__$1;
(statearr_28677_28721[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (16))){
var inst_28580 = (state_28640[(2)]);
var inst_28581 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28582 = figwheel.client.format_messages.call(null,inst_28581);
var inst_28583 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28584 = figwheel.client.heads_up.display_error.call(null,inst_28582,inst_28583);
var state_28640__$1 = (function (){var statearr_28678 = state_28640;
(statearr_28678[(9)] = inst_28580);

return statearr_28678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28640__$1,(17),inst_28584);
} else {
if((state_val_28641 === (30))){
var inst_28614 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28615 = figwheel.client.heads_up.display_warning.call(null,inst_28614);
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28640__$1,(33),inst_28615);
} else {
if((state_val_28641 === (10))){
var inst_28574 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28679_28722 = state_28640__$1;
(statearr_28679_28722[(2)] = inst_28574);

(statearr_28679_28722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (18))){
var inst_28590 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28591 = figwheel.client.format_messages.call(null,inst_28590);
var inst_28592 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28593 = figwheel.client.heads_up.display_error.call(null,inst_28591,inst_28592);
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28640__$1,(21),inst_28593);
} else {
if((state_val_28641 === (37))){
var inst_28623 = (state_28640[(2)]);
var state_28640__$1 = state_28640;
var statearr_28680_28723 = state_28640__$1;
(statearr_28680_28723[(2)] = inst_28623);

(statearr_28680_28723[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28641 === (8))){
var inst_28566 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28640__$1 = state_28640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28640__$1,(11),inst_28566);
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
});})(c__24022__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23910__auto__,c__24022__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto____0 = (function (){
var statearr_28684 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28684[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto__);

(statearr_28684[(1)] = (1));

return statearr_28684;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto____1 = (function (state_28640){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_28640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e28685){if((e28685 instanceof Object)){
var ex__23914__auto__ = e28685;
var statearr_28686_28724 = state_28640;
(statearr_28686_28724[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28725 = state_28640;
state_28640 = G__28725;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto__ = function(state_28640){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto____1.call(this,state_28640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto__,msg_hist,msg_names,msg))
})();
var state__24024__auto__ = (function (){var statearr_28687 = f__24023__auto__.call(null);
(statearr_28687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto__);

return statearr_28687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto__,msg_hist,msg_names,msg))
);

return c__24022__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24022__auto___28788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___28788,ch){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___28788,ch){
return (function (state_28771){
var state_val_28772 = (state_28771[(1)]);
if((state_val_28772 === (1))){
var state_28771__$1 = state_28771;
var statearr_28773_28789 = state_28771__$1;
(statearr_28773_28789[(2)] = null);

(statearr_28773_28789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (2))){
var state_28771__$1 = state_28771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28771__$1,(4),ch);
} else {
if((state_val_28772 === (3))){
var inst_28769 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28771__$1,inst_28769);
} else {
if((state_val_28772 === (4))){
var inst_28759 = (state_28771[(7)]);
var inst_28759__$1 = (state_28771[(2)]);
var state_28771__$1 = (function (){var statearr_28774 = state_28771;
(statearr_28774[(7)] = inst_28759__$1);

return statearr_28774;
})();
if(cljs.core.truth_(inst_28759__$1)){
var statearr_28775_28790 = state_28771__$1;
(statearr_28775_28790[(1)] = (5));

} else {
var statearr_28776_28791 = state_28771__$1;
(statearr_28776_28791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (5))){
var inst_28759 = (state_28771[(7)]);
var inst_28761 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28759);
var state_28771__$1 = state_28771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28771__$1,(8),inst_28761);
} else {
if((state_val_28772 === (6))){
var state_28771__$1 = state_28771;
var statearr_28777_28792 = state_28771__$1;
(statearr_28777_28792[(2)] = null);

(statearr_28777_28792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (7))){
var inst_28767 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28778_28793 = state_28771__$1;
(statearr_28778_28793[(2)] = inst_28767);

(statearr_28778_28793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (8))){
var inst_28763 = (state_28771[(2)]);
var state_28771__$1 = (function (){var statearr_28779 = state_28771;
(statearr_28779[(8)] = inst_28763);

return statearr_28779;
})();
var statearr_28780_28794 = state_28771__$1;
(statearr_28780_28794[(2)] = null);

(statearr_28780_28794[(1)] = (2));


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
});})(c__24022__auto___28788,ch))
;
return ((function (switch__23910__auto__,c__24022__auto___28788,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23911__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23911__auto____0 = (function (){
var statearr_28784 = [null,null,null,null,null,null,null,null,null];
(statearr_28784[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23911__auto__);

(statearr_28784[(1)] = (1));

return statearr_28784;
});
var figwheel$client$heads_up_plugin_$_state_machine__23911__auto____1 = (function (state_28771){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_28771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e28785){if((e28785 instanceof Object)){
var ex__23914__auto__ = e28785;
var statearr_28786_28795 = state_28771;
(statearr_28786_28795[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28796 = state_28771;
state_28771 = G__28796;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23911__auto__ = function(state_28771){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23911__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23911__auto____1.call(this,state_28771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23911__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23911__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___28788,ch))
})();
var state__24024__auto__ = (function (){var statearr_28787 = f__24023__auto__.call(null);
(statearr_28787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___28788);

return statearr_28787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___28788,ch))
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
var c__24022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto__){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto__){
return (function (state_28817){
var state_val_28818 = (state_28817[(1)]);
if((state_val_28818 === (1))){
var inst_28812 = cljs.core.async.timeout.call(null,(3000));
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28817__$1,(2),inst_28812);
} else {
if((state_val_28818 === (2))){
var inst_28814 = (state_28817[(2)]);
var inst_28815 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28817__$1 = (function (){var statearr_28819 = state_28817;
(statearr_28819[(7)] = inst_28814);

return statearr_28819;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28817__$1,inst_28815);
} else {
return null;
}
}
});})(c__24022__auto__))
;
return ((function (switch__23910__auto__,c__24022__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23911__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23911__auto____0 = (function (){
var statearr_28823 = [null,null,null,null,null,null,null,null];
(statearr_28823[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23911__auto__);

(statearr_28823[(1)] = (1));

return statearr_28823;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23911__auto____1 = (function (state_28817){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_28817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e28824){if((e28824 instanceof Object)){
var ex__23914__auto__ = e28824;
var statearr_28825_28827 = state_28817;
(statearr_28825_28827[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28828 = state_28817;
state_28817 = G__28828;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23911__auto__ = function(state_28817){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23911__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23911__auto____1.call(this,state_28817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23911__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23911__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto__))
})();
var state__24024__auto__ = (function (){var statearr_28826 = f__24023__auto__.call(null);
(statearr_28826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto__);

return statearr_28826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto__))
);

return c__24022__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28829){
var map__28836 = p__28829;
var map__28836__$1 = ((((!((map__28836 == null)))?((((map__28836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28836):map__28836);
var ed = map__28836__$1;
var formatted_exception = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28838_28842 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28839_28843 = null;
var count__28840_28844 = (0);
var i__28841_28845 = (0);
while(true){
if((i__28841_28845 < count__28840_28844)){
var msg_28846 = cljs.core._nth.call(null,chunk__28839_28843,i__28841_28845);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28846);

var G__28847 = seq__28838_28842;
var G__28848 = chunk__28839_28843;
var G__28849 = count__28840_28844;
var G__28850 = (i__28841_28845 + (1));
seq__28838_28842 = G__28847;
chunk__28839_28843 = G__28848;
count__28840_28844 = G__28849;
i__28841_28845 = G__28850;
continue;
} else {
var temp__4425__auto___28851 = cljs.core.seq.call(null,seq__28838_28842);
if(temp__4425__auto___28851){
var seq__28838_28852__$1 = temp__4425__auto___28851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28838_28852__$1)){
var c__17554__auto___28853 = cljs.core.chunk_first.call(null,seq__28838_28852__$1);
var G__28854 = cljs.core.chunk_rest.call(null,seq__28838_28852__$1);
var G__28855 = c__17554__auto___28853;
var G__28856 = cljs.core.count.call(null,c__17554__auto___28853);
var G__28857 = (0);
seq__28838_28842 = G__28854;
chunk__28839_28843 = G__28855;
count__28840_28844 = G__28856;
i__28841_28845 = G__28857;
continue;
} else {
var msg_28858 = cljs.core.first.call(null,seq__28838_28852__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28858);

var G__28859 = cljs.core.next.call(null,seq__28838_28852__$1);
var G__28860 = null;
var G__28861 = (0);
var G__28862 = (0);
seq__28838_28842 = G__28859;
chunk__28839_28843 = G__28860;
count__28840_28844 = G__28861;
i__28841_28845 = G__28862;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28863){
var map__28866 = p__28863;
var map__28866__$1 = ((((!((map__28866 == null)))?((((map__28866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28866):map__28866);
var w = map__28866__$1;
var message = cljs.core.get.call(null,map__28866__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28874 = cljs.core.seq.call(null,plugins);
var chunk__28875 = null;
var count__28876 = (0);
var i__28877 = (0);
while(true){
if((i__28877 < count__28876)){
var vec__28878 = cljs.core._nth.call(null,chunk__28875,i__28877);
var k = cljs.core.nth.call(null,vec__28878,(0),null);
var plugin = cljs.core.nth.call(null,vec__28878,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28880 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28874,chunk__28875,count__28876,i__28877,pl_28880,vec__28878,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28880.call(null,msg_hist);
});})(seq__28874,chunk__28875,count__28876,i__28877,pl_28880,vec__28878,k,plugin))
);
} else {
}

var G__28881 = seq__28874;
var G__28882 = chunk__28875;
var G__28883 = count__28876;
var G__28884 = (i__28877 + (1));
seq__28874 = G__28881;
chunk__28875 = G__28882;
count__28876 = G__28883;
i__28877 = G__28884;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28874);
if(temp__4425__auto__){
var seq__28874__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28874__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__28874__$1);
var G__28885 = cljs.core.chunk_rest.call(null,seq__28874__$1);
var G__28886 = c__17554__auto__;
var G__28887 = cljs.core.count.call(null,c__17554__auto__);
var G__28888 = (0);
seq__28874 = G__28885;
chunk__28875 = G__28886;
count__28876 = G__28887;
i__28877 = G__28888;
continue;
} else {
var vec__28879 = cljs.core.first.call(null,seq__28874__$1);
var k = cljs.core.nth.call(null,vec__28879,(0),null);
var plugin = cljs.core.nth.call(null,vec__28879,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28889 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28874,chunk__28875,count__28876,i__28877,pl_28889,vec__28879,k,plugin,seq__28874__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28889.call(null,msg_hist);
});})(seq__28874,chunk__28875,count__28876,i__28877,pl_28889,vec__28879,k,plugin,seq__28874__$1,temp__4425__auto__))
);
} else {
}

var G__28890 = cljs.core.next.call(null,seq__28874__$1);
var G__28891 = null;
var G__28892 = (0);
var G__28893 = (0);
seq__28874 = G__28890;
chunk__28875 = G__28891;
count__28876 = G__28892;
i__28877 = G__28893;
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
var args28894 = [];
var len__17809__auto___28897 = arguments.length;
var i__17810__auto___28898 = (0);
while(true){
if((i__17810__auto___28898 < len__17809__auto___28897)){
args28894.push((arguments[i__17810__auto___28898]));

var G__28899 = (i__17810__auto___28898 + (1));
i__17810__auto___28898 = G__28899;
continue;
} else {
}
break;
}

var G__28896 = args28894.length;
switch (G__28896) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28894.length)].join('')));

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
var len__17809__auto___28905 = arguments.length;
var i__17810__auto___28906 = (0);
while(true){
if((i__17810__auto___28906 < len__17809__auto___28905)){
args__17816__auto__.push((arguments[i__17810__auto___28906]));

var G__28907 = (i__17810__auto___28906 + (1));
i__17810__auto___28906 = G__28907;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28902){
var map__28903 = p__28902;
var map__28903__$1 = ((((!((map__28903 == null)))?((((map__28903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28903):map__28903);
var opts = map__28903__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28901){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28901));
});

//# sourceMappingURL=client.js.map?rel=1447986933973