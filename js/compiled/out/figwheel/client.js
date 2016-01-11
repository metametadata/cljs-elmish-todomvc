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
var pred__28453 = cljs.core._EQ_;
var expr__28454 = (function (){var or__16751__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28453.call(null,"true",expr__28454))){
return true;
} else {
if(cljs.core.truth_(pred__28453.call(null,"false",expr__28454))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28454)].join('')));
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
var G__28456__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28457__i = 0, G__28457__a = new Array(arguments.length -  0);
while (G__28457__i < G__28457__a.length) {G__28457__a[G__28457__i] = arguments[G__28457__i + 0]; ++G__28457__i;}
  args = new cljs.core.IndexedSeq(G__28457__a,0);
} 
return G__28456__delegate.call(this,args);};
G__28456.cljs$lang$maxFixedArity = 0;
G__28456.cljs$lang$applyTo = (function (arglist__28458){
var args = cljs.core.seq(arglist__28458);
return G__28456__delegate(args);
});
G__28456.cljs$core$IFn$_invoke$arity$variadic = G__28456__delegate;
return G__28456;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28459){
var map__28462 = p__28459;
var map__28462__$1 = ((((!((map__28462 == null)))?((((map__28462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28462):map__28462);
var message = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24292__auto___28624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___28624,ch){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___28624,ch){
return (function (state_28593){
var state_val_28594 = (state_28593[(1)]);
if((state_val_28594 === (7))){
var inst_28589 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28595_28625 = state_28593__$1;
(statearr_28595_28625[(2)] = inst_28589);

(statearr_28595_28625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (1))){
var state_28593__$1 = state_28593;
var statearr_28596_28626 = state_28593__$1;
(statearr_28596_28626[(2)] = null);

(statearr_28596_28626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (4))){
var inst_28546 = (state_28593[(7)]);
var inst_28546__$1 = (state_28593[(2)]);
var state_28593__$1 = (function (){var statearr_28597 = state_28593;
(statearr_28597[(7)] = inst_28546__$1);

return statearr_28597;
})();
if(cljs.core.truth_(inst_28546__$1)){
var statearr_28598_28627 = state_28593__$1;
(statearr_28598_28627[(1)] = (5));

} else {
var statearr_28599_28628 = state_28593__$1;
(statearr_28599_28628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (15))){
var inst_28553 = (state_28593[(8)]);
var inst_28568 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28553);
var inst_28569 = cljs.core.first.call(null,inst_28568);
var inst_28570 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28569);
var inst_28571 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28570)].join('');
var inst_28572 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28571);
var state_28593__$1 = state_28593;
var statearr_28600_28629 = state_28593__$1;
(statearr_28600_28629[(2)] = inst_28572);

(statearr_28600_28629[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (13))){
var inst_28577 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28601_28630 = state_28593__$1;
(statearr_28601_28630[(2)] = inst_28577);

(statearr_28601_28630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (6))){
var state_28593__$1 = state_28593;
var statearr_28602_28631 = state_28593__$1;
(statearr_28602_28631[(2)] = null);

(statearr_28602_28631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (17))){
var inst_28575 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28603_28632 = state_28593__$1;
(statearr_28603_28632[(2)] = inst_28575);

(statearr_28603_28632[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (3))){
var inst_28591 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28593__$1,inst_28591);
} else {
if((state_val_28594 === (12))){
var inst_28552 = (state_28593[(9)]);
var inst_28566 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28552,opts);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28566)){
var statearr_28604_28633 = state_28593__$1;
(statearr_28604_28633[(1)] = (15));

} else {
var statearr_28605_28634 = state_28593__$1;
(statearr_28605_28634[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (2))){
var state_28593__$1 = state_28593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28593__$1,(4),ch);
} else {
if((state_val_28594 === (11))){
var inst_28553 = (state_28593[(8)]);
var inst_28558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28559 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28553);
var inst_28560 = cljs.core.async.timeout.call(null,(1000));
var inst_28561 = [inst_28559,inst_28560];
var inst_28562 = (new cljs.core.PersistentVector(null,2,(5),inst_28558,inst_28561,null));
var state_28593__$1 = state_28593;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28593__$1,(14),inst_28562);
} else {
if((state_val_28594 === (9))){
var inst_28553 = (state_28593[(8)]);
var inst_28579 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28580 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28553);
var inst_28581 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28580);
var inst_28582 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28581)].join('');
var inst_28583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28582);
var state_28593__$1 = (function (){var statearr_28606 = state_28593;
(statearr_28606[(10)] = inst_28579);

return statearr_28606;
})();
var statearr_28607_28635 = state_28593__$1;
(statearr_28607_28635[(2)] = inst_28583);

(statearr_28607_28635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (5))){
var inst_28546 = (state_28593[(7)]);
var inst_28548 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28549 = (new cljs.core.PersistentArrayMap(null,2,inst_28548,null));
var inst_28550 = (new cljs.core.PersistentHashSet(null,inst_28549,null));
var inst_28551 = figwheel.client.focus_msgs.call(null,inst_28550,inst_28546);
var inst_28552 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28551);
var inst_28553 = cljs.core.first.call(null,inst_28551);
var inst_28554 = figwheel.client.autoload_QMARK_.call(null);
var state_28593__$1 = (function (){var statearr_28608 = state_28593;
(statearr_28608[(9)] = inst_28552);

(statearr_28608[(8)] = inst_28553);

return statearr_28608;
})();
if(cljs.core.truth_(inst_28554)){
var statearr_28609_28636 = state_28593__$1;
(statearr_28609_28636[(1)] = (8));

} else {
var statearr_28610_28637 = state_28593__$1;
(statearr_28610_28637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (14))){
var inst_28564 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28611_28638 = state_28593__$1;
(statearr_28611_28638[(2)] = inst_28564);

(statearr_28611_28638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (16))){
var state_28593__$1 = state_28593;
var statearr_28612_28639 = state_28593__$1;
(statearr_28612_28639[(2)] = null);

(statearr_28612_28639[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (10))){
var inst_28585 = (state_28593[(2)]);
var state_28593__$1 = (function (){var statearr_28613 = state_28593;
(statearr_28613[(11)] = inst_28585);

return statearr_28613;
})();
var statearr_28614_28640 = state_28593__$1;
(statearr_28614_28640[(2)] = null);

(statearr_28614_28640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (8))){
var inst_28552 = (state_28593[(9)]);
var inst_28556 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28552,opts);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28556)){
var statearr_28615_28641 = state_28593__$1;
(statearr_28615_28641[(1)] = (11));

} else {
var statearr_28616_28642 = state_28593__$1;
(statearr_28616_28642[(1)] = (12));

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
});})(c__24292__auto___28624,ch))
;
return ((function (switch__24180__auto__,c__24292__auto___28624,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24181__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24181__auto____0 = (function (){
var statearr_28620 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28620[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24181__auto__);

(statearr_28620[(1)] = (1));

return statearr_28620;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24181__auto____1 = (function (state_28593){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_28593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e28621){if((e28621 instanceof Object)){
var ex__24184__auto__ = e28621;
var statearr_28622_28643 = state_28593;
(statearr_28622_28643[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28644 = state_28593;
state_28593 = G__28644;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24181__auto__ = function(state_28593){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24181__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24181__auto____1.call(this,state_28593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24181__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24181__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___28624,ch))
})();
var state__24294__auto__ = (function (){var statearr_28623 = f__24293__auto__.call(null);
(statearr_28623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___28624);

return statearr_28623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___28624,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28645_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28645_SHARP_));
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
var base_path_28652 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28652){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28650 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28651 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28650,_STAR_print_newline_STAR_28651,base_path_28652){
return (function() { 
var G__28653__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28654__i = 0, G__28654__a = new Array(arguments.length -  0);
while (G__28654__i < G__28654__a.length) {G__28654__a[G__28654__i] = arguments[G__28654__i + 0]; ++G__28654__i;}
  args = new cljs.core.IndexedSeq(G__28654__a,0);
} 
return G__28653__delegate.call(this,args);};
G__28653.cljs$lang$maxFixedArity = 0;
G__28653.cljs$lang$applyTo = (function (arglist__28655){
var args = cljs.core.seq(arglist__28655);
return G__28653__delegate(args);
});
G__28653.cljs$core$IFn$_invoke$arity$variadic = G__28653__delegate;
return G__28653;
})()
;})(_STAR_print_fn_STAR_28650,_STAR_print_newline_STAR_28651,base_path_28652))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28651;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28650;
}}catch (e28649){if((e28649 instanceof Error)){
var e = e28649;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28652], null));
} else {
var e = e28649;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28652))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28656){
var map__28663 = p__28656;
var map__28663__$1 = ((((!((map__28663 == null)))?((((map__28663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28663):map__28663);
var opts = map__28663__$1;
var build_id = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28663,map__28663__$1,opts,build_id){
return (function (p__28665){
var vec__28666 = p__28665;
var map__28667 = cljs.core.nth.call(null,vec__28666,(0),null);
var map__28667__$1 = ((((!((map__28667 == null)))?((((map__28667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28667):map__28667);
var msg = map__28667__$1;
var msg_name = cljs.core.get.call(null,map__28667__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28666,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28666,map__28667,map__28667__$1,msg,msg_name,_,map__28663,map__28663__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28666,map__28667,map__28667__$1,msg,msg_name,_,map__28663,map__28663__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28663,map__28663__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28673){
var vec__28674 = p__28673;
var map__28675 = cljs.core.nth.call(null,vec__28674,(0),null);
var map__28675__$1 = ((((!((map__28675 == null)))?((((map__28675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28675):map__28675);
var msg = map__28675__$1;
var msg_name = cljs.core.get.call(null,map__28675__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28674,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28677){
var map__28687 = p__28677;
var map__28687__$1 = ((((!((map__28687 == null)))?((((map__28687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28687):map__28687);
var on_compile_warning = cljs.core.get.call(null,map__28687__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28687__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28687,map__28687__$1,on_compile_warning,on_compile_fail){
return (function (p__28689){
var vec__28690 = p__28689;
var map__28691 = cljs.core.nth.call(null,vec__28690,(0),null);
var map__28691__$1 = ((((!((map__28691 == null)))?((((map__28691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28691):map__28691);
var msg = map__28691__$1;
var msg_name = cljs.core.get.call(null,map__28691__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28690,(1));
var pred__28693 = cljs.core._EQ_;
var expr__28694 = msg_name;
if(cljs.core.truth_(pred__28693.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28694))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28693.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28694))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28687,map__28687__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto__,msg_hist,msg_names,msg){
return (function (state_28910){
var state_val_28911 = (state_28910[(1)]);
if((state_val_28911 === (7))){
var inst_28834 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
if(cljs.core.truth_(inst_28834)){
var statearr_28912_28958 = state_28910__$1;
(statearr_28912_28958[(1)] = (8));

} else {
var statearr_28913_28959 = state_28910__$1;
(statearr_28913_28959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (20))){
var inst_28904 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28914_28960 = state_28910__$1;
(statearr_28914_28960[(2)] = inst_28904);

(statearr_28914_28960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (27))){
var inst_28900 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28915_28961 = state_28910__$1;
(statearr_28915_28961[(2)] = inst_28900);

(statearr_28915_28961[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (1))){
var inst_28827 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28910__$1 = state_28910;
if(cljs.core.truth_(inst_28827)){
var statearr_28916_28962 = state_28910__$1;
(statearr_28916_28962[(1)] = (2));

} else {
var statearr_28917_28963 = state_28910__$1;
(statearr_28917_28963[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (24))){
var inst_28902 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28918_28964 = state_28910__$1;
(statearr_28918_28964[(2)] = inst_28902);

(statearr_28918_28964[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (4))){
var inst_28908 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28910__$1,inst_28908);
} else {
if((state_val_28911 === (15))){
var inst_28906 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28919_28965 = state_28910__$1;
(statearr_28919_28965[(2)] = inst_28906);

(statearr_28919_28965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (21))){
var inst_28865 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28920_28966 = state_28910__$1;
(statearr_28920_28966[(2)] = inst_28865);

(statearr_28920_28966[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (31))){
var inst_28889 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28910__$1 = state_28910;
if(cljs.core.truth_(inst_28889)){
var statearr_28921_28967 = state_28910__$1;
(statearr_28921_28967[(1)] = (34));

} else {
var statearr_28922_28968 = state_28910__$1;
(statearr_28922_28968[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (32))){
var inst_28898 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28923_28969 = state_28910__$1;
(statearr_28923_28969[(2)] = inst_28898);

(statearr_28923_28969[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (33))){
var inst_28887 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28924_28970 = state_28910__$1;
(statearr_28924_28970[(2)] = inst_28887);

(statearr_28924_28970[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (13))){
var inst_28848 = figwheel.client.heads_up.clear.call(null);
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28910__$1,(16),inst_28848);
} else {
if((state_val_28911 === (22))){
var inst_28869 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28870 = figwheel.client.heads_up.append_message.call(null,inst_28869);
var state_28910__$1 = state_28910;
var statearr_28925_28971 = state_28910__$1;
(statearr_28925_28971[(2)] = inst_28870);

(statearr_28925_28971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (36))){
var inst_28896 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28926_28972 = state_28910__$1;
(statearr_28926_28972[(2)] = inst_28896);

(statearr_28926_28972[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (29))){
var inst_28880 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28927_28973 = state_28910__$1;
(statearr_28927_28973[(2)] = inst_28880);

(statearr_28927_28973[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (6))){
var inst_28829 = (state_28910[(7)]);
var state_28910__$1 = state_28910;
var statearr_28928_28974 = state_28910__$1;
(statearr_28928_28974[(2)] = inst_28829);

(statearr_28928_28974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (28))){
var inst_28876 = (state_28910[(2)]);
var inst_28877 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28878 = figwheel.client.heads_up.display_warning.call(null,inst_28877);
var state_28910__$1 = (function (){var statearr_28929 = state_28910;
(statearr_28929[(8)] = inst_28876);

return statearr_28929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28910__$1,(29),inst_28878);
} else {
if((state_val_28911 === (25))){
var inst_28874 = figwheel.client.heads_up.clear.call(null);
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28910__$1,(28),inst_28874);
} else {
if((state_val_28911 === (34))){
var inst_28891 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28910__$1,(37),inst_28891);
} else {
if((state_val_28911 === (17))){
var inst_28856 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28930_28975 = state_28910__$1;
(statearr_28930_28975[(2)] = inst_28856);

(statearr_28930_28975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (3))){
var inst_28846 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28910__$1 = state_28910;
if(cljs.core.truth_(inst_28846)){
var statearr_28931_28976 = state_28910__$1;
(statearr_28931_28976[(1)] = (13));

} else {
var statearr_28932_28977 = state_28910__$1;
(statearr_28932_28977[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (12))){
var inst_28842 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28933_28978 = state_28910__$1;
(statearr_28933_28978[(2)] = inst_28842);

(statearr_28933_28978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (2))){
var inst_28829 = (state_28910[(7)]);
var inst_28829__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28910__$1 = (function (){var statearr_28934 = state_28910;
(statearr_28934[(7)] = inst_28829__$1);

return statearr_28934;
})();
if(cljs.core.truth_(inst_28829__$1)){
var statearr_28935_28979 = state_28910__$1;
(statearr_28935_28979[(1)] = (5));

} else {
var statearr_28936_28980 = state_28910__$1;
(statearr_28936_28980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (23))){
var inst_28872 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28910__$1 = state_28910;
if(cljs.core.truth_(inst_28872)){
var statearr_28937_28981 = state_28910__$1;
(statearr_28937_28981[(1)] = (25));

} else {
var statearr_28938_28982 = state_28910__$1;
(statearr_28938_28982[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (35))){
var state_28910__$1 = state_28910;
var statearr_28939_28983 = state_28910__$1;
(statearr_28939_28983[(2)] = null);

(statearr_28939_28983[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (19))){
var inst_28867 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28910__$1 = state_28910;
if(cljs.core.truth_(inst_28867)){
var statearr_28940_28984 = state_28910__$1;
(statearr_28940_28984[(1)] = (22));

} else {
var statearr_28941_28985 = state_28910__$1;
(statearr_28941_28985[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (11))){
var inst_28838 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28942_28986 = state_28910__$1;
(statearr_28942_28986[(2)] = inst_28838);

(statearr_28942_28986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (9))){
var inst_28840 = figwheel.client.heads_up.clear.call(null);
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28910__$1,(12),inst_28840);
} else {
if((state_val_28911 === (5))){
var inst_28831 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28910__$1 = state_28910;
var statearr_28943_28987 = state_28910__$1;
(statearr_28943_28987[(2)] = inst_28831);

(statearr_28943_28987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (14))){
var inst_28858 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28910__$1 = state_28910;
if(cljs.core.truth_(inst_28858)){
var statearr_28944_28988 = state_28910__$1;
(statearr_28944_28988[(1)] = (18));

} else {
var statearr_28945_28989 = state_28910__$1;
(statearr_28945_28989[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (26))){
var inst_28882 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28910__$1 = state_28910;
if(cljs.core.truth_(inst_28882)){
var statearr_28946_28990 = state_28910__$1;
(statearr_28946_28990[(1)] = (30));

} else {
var statearr_28947_28991 = state_28910__$1;
(statearr_28947_28991[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (16))){
var inst_28850 = (state_28910[(2)]);
var inst_28851 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28852 = figwheel.client.format_messages.call(null,inst_28851);
var inst_28853 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28854 = figwheel.client.heads_up.display_error.call(null,inst_28852,inst_28853);
var state_28910__$1 = (function (){var statearr_28948 = state_28910;
(statearr_28948[(9)] = inst_28850);

return statearr_28948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28910__$1,(17),inst_28854);
} else {
if((state_val_28911 === (30))){
var inst_28884 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28885 = figwheel.client.heads_up.display_warning.call(null,inst_28884);
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28910__$1,(33),inst_28885);
} else {
if((state_val_28911 === (10))){
var inst_28844 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28949_28992 = state_28910__$1;
(statearr_28949_28992[(2)] = inst_28844);

(statearr_28949_28992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (18))){
var inst_28860 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28861 = figwheel.client.format_messages.call(null,inst_28860);
var inst_28862 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28863 = figwheel.client.heads_up.display_error.call(null,inst_28861,inst_28862);
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28910__$1,(21),inst_28863);
} else {
if((state_val_28911 === (37))){
var inst_28893 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28950_28993 = state_28910__$1;
(statearr_28950_28993[(2)] = inst_28893);

(statearr_28950_28993[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (8))){
var inst_28836 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28910__$1,(11),inst_28836);
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
});})(c__24292__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24180__auto__,c__24292__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto____0 = (function (){
var statearr_28954 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28954[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto__);

(statearr_28954[(1)] = (1));

return statearr_28954;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto____1 = (function (state_28910){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_28910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e28955){if((e28955 instanceof Object)){
var ex__24184__auto__ = e28955;
var statearr_28956_28994 = state_28910;
(statearr_28956_28994[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28995 = state_28910;
state_28910 = G__28995;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto__ = function(state_28910){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto____1.call(this,state_28910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto__,msg_hist,msg_names,msg))
})();
var state__24294__auto__ = (function (){var statearr_28957 = f__24293__auto__.call(null);
(statearr_28957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto__);

return statearr_28957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto__,msg_hist,msg_names,msg))
);

return c__24292__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24292__auto___29058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___29058,ch){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___29058,ch){
return (function (state_29041){
var state_val_29042 = (state_29041[(1)]);
if((state_val_29042 === (1))){
var state_29041__$1 = state_29041;
var statearr_29043_29059 = state_29041__$1;
(statearr_29043_29059[(2)] = null);

(statearr_29043_29059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (2))){
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29041__$1,(4),ch);
} else {
if((state_val_29042 === (3))){
var inst_29039 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29041__$1,inst_29039);
} else {
if((state_val_29042 === (4))){
var inst_29029 = (state_29041[(7)]);
var inst_29029__$1 = (state_29041[(2)]);
var state_29041__$1 = (function (){var statearr_29044 = state_29041;
(statearr_29044[(7)] = inst_29029__$1);

return statearr_29044;
})();
if(cljs.core.truth_(inst_29029__$1)){
var statearr_29045_29060 = state_29041__$1;
(statearr_29045_29060[(1)] = (5));

} else {
var statearr_29046_29061 = state_29041__$1;
(statearr_29046_29061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (5))){
var inst_29029 = (state_29041[(7)]);
var inst_29031 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29029);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29041__$1,(8),inst_29031);
} else {
if((state_val_29042 === (6))){
var state_29041__$1 = state_29041;
var statearr_29047_29062 = state_29041__$1;
(statearr_29047_29062[(2)] = null);

(statearr_29047_29062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (7))){
var inst_29037 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29048_29063 = state_29041__$1;
(statearr_29048_29063[(2)] = inst_29037);

(statearr_29048_29063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (8))){
var inst_29033 = (state_29041[(2)]);
var state_29041__$1 = (function (){var statearr_29049 = state_29041;
(statearr_29049[(8)] = inst_29033);

return statearr_29049;
})();
var statearr_29050_29064 = state_29041__$1;
(statearr_29050_29064[(2)] = null);

(statearr_29050_29064[(1)] = (2));


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
});})(c__24292__auto___29058,ch))
;
return ((function (switch__24180__auto__,c__24292__auto___29058,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24181__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24181__auto____0 = (function (){
var statearr_29054 = [null,null,null,null,null,null,null,null,null];
(statearr_29054[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24181__auto__);

(statearr_29054[(1)] = (1));

return statearr_29054;
});
var figwheel$client$heads_up_plugin_$_state_machine__24181__auto____1 = (function (state_29041){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_29041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e29055){if((e29055 instanceof Object)){
var ex__24184__auto__ = e29055;
var statearr_29056_29065 = state_29041;
(statearr_29056_29065[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29066 = state_29041;
state_29041 = G__29066;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24181__auto__ = function(state_29041){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24181__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24181__auto____1.call(this,state_29041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24181__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24181__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___29058,ch))
})();
var state__24294__auto__ = (function (){var statearr_29057 = f__24293__auto__.call(null);
(statearr_29057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___29058);

return statearr_29057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___29058,ch))
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
var c__24292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto__){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto__){
return (function (state_29087){
var state_val_29088 = (state_29087[(1)]);
if((state_val_29088 === (1))){
var inst_29082 = cljs.core.async.timeout.call(null,(3000));
var state_29087__$1 = state_29087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29087__$1,(2),inst_29082);
} else {
if((state_val_29088 === (2))){
var inst_29084 = (state_29087[(2)]);
var inst_29085 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29087__$1 = (function (){var statearr_29089 = state_29087;
(statearr_29089[(7)] = inst_29084);

return statearr_29089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29087__$1,inst_29085);
} else {
return null;
}
}
});})(c__24292__auto__))
;
return ((function (switch__24180__auto__,c__24292__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24181__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24181__auto____0 = (function (){
var statearr_29093 = [null,null,null,null,null,null,null,null];
(statearr_29093[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24181__auto__);

(statearr_29093[(1)] = (1));

return statearr_29093;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24181__auto____1 = (function (state_29087){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_29087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e29094){if((e29094 instanceof Object)){
var ex__24184__auto__ = e29094;
var statearr_29095_29097 = state_29087;
(statearr_29095_29097[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29098 = state_29087;
state_29087 = G__29098;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24181__auto__ = function(state_29087){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24181__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24181__auto____1.call(this,state_29087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24181__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24181__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto__))
})();
var state__24294__auto__ = (function (){var statearr_29096 = f__24293__auto__.call(null);
(statearr_29096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto__);

return statearr_29096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto__))
);

return c__24292__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29099){
var map__29106 = p__29099;
var map__29106__$1 = ((((!((map__29106 == null)))?((((map__29106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29106):map__29106);
var ed = map__29106__$1;
var formatted_exception = cljs.core.get.call(null,map__29106__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29106__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29106__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29108_29112 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29109_29113 = null;
var count__29110_29114 = (0);
var i__29111_29115 = (0);
while(true){
if((i__29111_29115 < count__29110_29114)){
var msg_29116 = cljs.core._nth.call(null,chunk__29109_29113,i__29111_29115);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29116);

var G__29117 = seq__29108_29112;
var G__29118 = chunk__29109_29113;
var G__29119 = count__29110_29114;
var G__29120 = (i__29111_29115 + (1));
seq__29108_29112 = G__29117;
chunk__29109_29113 = G__29118;
count__29110_29114 = G__29119;
i__29111_29115 = G__29120;
continue;
} else {
var temp__4425__auto___29121 = cljs.core.seq.call(null,seq__29108_29112);
if(temp__4425__auto___29121){
var seq__29108_29122__$1 = temp__4425__auto___29121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29108_29122__$1)){
var c__17554__auto___29123 = cljs.core.chunk_first.call(null,seq__29108_29122__$1);
var G__29124 = cljs.core.chunk_rest.call(null,seq__29108_29122__$1);
var G__29125 = c__17554__auto___29123;
var G__29126 = cljs.core.count.call(null,c__17554__auto___29123);
var G__29127 = (0);
seq__29108_29112 = G__29124;
chunk__29109_29113 = G__29125;
count__29110_29114 = G__29126;
i__29111_29115 = G__29127;
continue;
} else {
var msg_29128 = cljs.core.first.call(null,seq__29108_29122__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29128);

var G__29129 = cljs.core.next.call(null,seq__29108_29122__$1);
var G__29130 = null;
var G__29131 = (0);
var G__29132 = (0);
seq__29108_29112 = G__29129;
chunk__29109_29113 = G__29130;
count__29110_29114 = G__29131;
i__29111_29115 = G__29132;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29133){
var map__29136 = p__29133;
var map__29136__$1 = ((((!((map__29136 == null)))?((((map__29136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29136):map__29136);
var w = map__29136__$1;
var message = cljs.core.get.call(null,map__29136__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29144 = cljs.core.seq.call(null,plugins);
var chunk__29145 = null;
var count__29146 = (0);
var i__29147 = (0);
while(true){
if((i__29147 < count__29146)){
var vec__29148 = cljs.core._nth.call(null,chunk__29145,i__29147);
var k = cljs.core.nth.call(null,vec__29148,(0),null);
var plugin = cljs.core.nth.call(null,vec__29148,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29150 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29144,chunk__29145,count__29146,i__29147,pl_29150,vec__29148,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29150.call(null,msg_hist);
});})(seq__29144,chunk__29145,count__29146,i__29147,pl_29150,vec__29148,k,plugin))
);
} else {
}

var G__29151 = seq__29144;
var G__29152 = chunk__29145;
var G__29153 = count__29146;
var G__29154 = (i__29147 + (1));
seq__29144 = G__29151;
chunk__29145 = G__29152;
count__29146 = G__29153;
i__29147 = G__29154;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29144);
if(temp__4425__auto__){
var seq__29144__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29144__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__29144__$1);
var G__29155 = cljs.core.chunk_rest.call(null,seq__29144__$1);
var G__29156 = c__17554__auto__;
var G__29157 = cljs.core.count.call(null,c__17554__auto__);
var G__29158 = (0);
seq__29144 = G__29155;
chunk__29145 = G__29156;
count__29146 = G__29157;
i__29147 = G__29158;
continue;
} else {
var vec__29149 = cljs.core.first.call(null,seq__29144__$1);
var k = cljs.core.nth.call(null,vec__29149,(0),null);
var plugin = cljs.core.nth.call(null,vec__29149,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29159 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29144,chunk__29145,count__29146,i__29147,pl_29159,vec__29149,k,plugin,seq__29144__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29159.call(null,msg_hist);
});})(seq__29144,chunk__29145,count__29146,i__29147,pl_29159,vec__29149,k,plugin,seq__29144__$1,temp__4425__auto__))
);
} else {
}

var G__29160 = cljs.core.next.call(null,seq__29144__$1);
var G__29161 = null;
var G__29162 = (0);
var G__29163 = (0);
seq__29144 = G__29160;
chunk__29145 = G__29161;
count__29146 = G__29162;
i__29147 = G__29163;
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
var args29164 = [];
var len__17809__auto___29167 = arguments.length;
var i__17810__auto___29168 = (0);
while(true){
if((i__17810__auto___29168 < len__17809__auto___29167)){
args29164.push((arguments[i__17810__auto___29168]));

var G__29169 = (i__17810__auto___29168 + (1));
i__17810__auto___29168 = G__29169;
continue;
} else {
}
break;
}

var G__29166 = args29164.length;
switch (G__29166) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29164.length)].join('')));

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
var len__17809__auto___29175 = arguments.length;
var i__17810__auto___29176 = (0);
while(true){
if((i__17810__auto___29176 < len__17809__auto___29175)){
args__17816__auto__.push((arguments[i__17810__auto___29176]));

var G__29177 = (i__17810__auto___29176 + (1));
i__17810__auto___29176 = G__29177;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29172){
var map__29173 = p__29172;
var map__29173__$1 = ((((!((map__29173 == null)))?((((map__29173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29173):map__29173);
var opts = map__29173__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29171){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29171));
});

//# sourceMappingURL=client.js.map?rel=1452529997136