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
var pred__28442 = cljs.core._EQ_;
var expr__28443 = (function (){var or__16751__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28442.call(null,"true",expr__28443))){
return true;
} else {
if(cljs.core.truth_(pred__28442.call(null,"false",expr__28443))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28443)].join('')));
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
var G__28445__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28446__i = 0, G__28446__a = new Array(arguments.length -  0);
while (G__28446__i < G__28446__a.length) {G__28446__a[G__28446__i] = arguments[G__28446__i + 0]; ++G__28446__i;}
  args = new cljs.core.IndexedSeq(G__28446__a,0);
} 
return G__28445__delegate.call(this,args);};
G__28445.cljs$lang$maxFixedArity = 0;
G__28445.cljs$lang$applyTo = (function (arglist__28447){
var args = cljs.core.seq(arglist__28447);
return G__28445__delegate(args);
});
G__28445.cljs$core$IFn$_invoke$arity$variadic = G__28445__delegate;
return G__28445;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28448){
var map__28451 = p__28448;
var map__28451__$1 = ((((!((map__28451 == null)))?((((map__28451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28451):map__28451);
var message = cljs.core.get.call(null,map__28451__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28451__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24281__auto___28613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___28613,ch){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___28613,ch){
return (function (state_28582){
var state_val_28583 = (state_28582[(1)]);
if((state_val_28583 === (7))){
var inst_28578 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28584_28614 = state_28582__$1;
(statearr_28584_28614[(2)] = inst_28578);

(statearr_28584_28614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (1))){
var state_28582__$1 = state_28582;
var statearr_28585_28615 = state_28582__$1;
(statearr_28585_28615[(2)] = null);

(statearr_28585_28615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (4))){
var inst_28535 = (state_28582[(7)]);
var inst_28535__$1 = (state_28582[(2)]);
var state_28582__$1 = (function (){var statearr_28586 = state_28582;
(statearr_28586[(7)] = inst_28535__$1);

return statearr_28586;
})();
if(cljs.core.truth_(inst_28535__$1)){
var statearr_28587_28616 = state_28582__$1;
(statearr_28587_28616[(1)] = (5));

} else {
var statearr_28588_28617 = state_28582__$1;
(statearr_28588_28617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (15))){
var inst_28542 = (state_28582[(8)]);
var inst_28557 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28542);
var inst_28558 = cljs.core.first.call(null,inst_28557);
var inst_28559 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28558);
var inst_28560 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28559)].join('');
var inst_28561 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28560);
var state_28582__$1 = state_28582;
var statearr_28589_28618 = state_28582__$1;
(statearr_28589_28618[(2)] = inst_28561);

(statearr_28589_28618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (13))){
var inst_28566 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28590_28619 = state_28582__$1;
(statearr_28590_28619[(2)] = inst_28566);

(statearr_28590_28619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (6))){
var state_28582__$1 = state_28582;
var statearr_28591_28620 = state_28582__$1;
(statearr_28591_28620[(2)] = null);

(statearr_28591_28620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (17))){
var inst_28564 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28592_28621 = state_28582__$1;
(statearr_28592_28621[(2)] = inst_28564);

(statearr_28592_28621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (3))){
var inst_28580 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28582__$1,inst_28580);
} else {
if((state_val_28583 === (12))){
var inst_28541 = (state_28582[(9)]);
var inst_28555 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28541,opts);
var state_28582__$1 = state_28582;
if(cljs.core.truth_(inst_28555)){
var statearr_28593_28622 = state_28582__$1;
(statearr_28593_28622[(1)] = (15));

} else {
var statearr_28594_28623 = state_28582__$1;
(statearr_28594_28623[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (2))){
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28582__$1,(4),ch);
} else {
if((state_val_28583 === (11))){
var inst_28542 = (state_28582[(8)]);
var inst_28547 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28548 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28542);
var inst_28549 = cljs.core.async.timeout.call(null,(1000));
var inst_28550 = [inst_28548,inst_28549];
var inst_28551 = (new cljs.core.PersistentVector(null,2,(5),inst_28547,inst_28550,null));
var state_28582__$1 = state_28582;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28582__$1,(14),inst_28551);
} else {
if((state_val_28583 === (9))){
var inst_28542 = (state_28582[(8)]);
var inst_28568 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28569 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28542);
var inst_28570 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28569);
var inst_28571 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28570)].join('');
var inst_28572 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28571);
var state_28582__$1 = (function (){var statearr_28595 = state_28582;
(statearr_28595[(10)] = inst_28568);

return statearr_28595;
})();
var statearr_28596_28624 = state_28582__$1;
(statearr_28596_28624[(2)] = inst_28572);

(statearr_28596_28624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (5))){
var inst_28535 = (state_28582[(7)]);
var inst_28537 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28538 = (new cljs.core.PersistentArrayMap(null,2,inst_28537,null));
var inst_28539 = (new cljs.core.PersistentHashSet(null,inst_28538,null));
var inst_28540 = figwheel.client.focus_msgs.call(null,inst_28539,inst_28535);
var inst_28541 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28540);
var inst_28542 = cljs.core.first.call(null,inst_28540);
var inst_28543 = figwheel.client.autoload_QMARK_.call(null);
var state_28582__$1 = (function (){var statearr_28597 = state_28582;
(statearr_28597[(8)] = inst_28542);

(statearr_28597[(9)] = inst_28541);

return statearr_28597;
})();
if(cljs.core.truth_(inst_28543)){
var statearr_28598_28625 = state_28582__$1;
(statearr_28598_28625[(1)] = (8));

} else {
var statearr_28599_28626 = state_28582__$1;
(statearr_28599_28626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (14))){
var inst_28553 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28600_28627 = state_28582__$1;
(statearr_28600_28627[(2)] = inst_28553);

(statearr_28600_28627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (16))){
var state_28582__$1 = state_28582;
var statearr_28601_28628 = state_28582__$1;
(statearr_28601_28628[(2)] = null);

(statearr_28601_28628[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (10))){
var inst_28574 = (state_28582[(2)]);
var state_28582__$1 = (function (){var statearr_28602 = state_28582;
(statearr_28602[(11)] = inst_28574);

return statearr_28602;
})();
var statearr_28603_28629 = state_28582__$1;
(statearr_28603_28629[(2)] = null);

(statearr_28603_28629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (8))){
var inst_28541 = (state_28582[(9)]);
var inst_28545 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28541,opts);
var state_28582__$1 = state_28582;
if(cljs.core.truth_(inst_28545)){
var statearr_28604_28630 = state_28582__$1;
(statearr_28604_28630[(1)] = (11));

} else {
var statearr_28605_28631 = state_28582__$1;
(statearr_28605_28631[(1)] = (12));

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
});})(c__24281__auto___28613,ch))
;
return ((function (switch__24169__auto__,c__24281__auto___28613,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24170__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24170__auto____0 = (function (){
var statearr_28609 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28609[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24170__auto__);

(statearr_28609[(1)] = (1));

return statearr_28609;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24170__auto____1 = (function (state_28582){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_28582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e28610){if((e28610 instanceof Object)){
var ex__24173__auto__ = e28610;
var statearr_28611_28632 = state_28582;
(statearr_28611_28632[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28633 = state_28582;
state_28582 = G__28633;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24170__auto__ = function(state_28582){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24170__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24170__auto____1.call(this,state_28582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24170__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24170__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___28613,ch))
})();
var state__24283__auto__ = (function (){var statearr_28612 = f__24282__auto__.call(null);
(statearr_28612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___28613);

return statearr_28612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___28613,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28634_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28634_SHARP_));
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
var base_path_28641 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28641){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28639 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28640 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28639,_STAR_print_newline_STAR_28640,base_path_28641){
return (function() { 
var G__28642__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28643__i = 0, G__28643__a = new Array(arguments.length -  0);
while (G__28643__i < G__28643__a.length) {G__28643__a[G__28643__i] = arguments[G__28643__i + 0]; ++G__28643__i;}
  args = new cljs.core.IndexedSeq(G__28643__a,0);
} 
return G__28642__delegate.call(this,args);};
G__28642.cljs$lang$maxFixedArity = 0;
G__28642.cljs$lang$applyTo = (function (arglist__28644){
var args = cljs.core.seq(arglist__28644);
return G__28642__delegate(args);
});
G__28642.cljs$core$IFn$_invoke$arity$variadic = G__28642__delegate;
return G__28642;
})()
;})(_STAR_print_fn_STAR_28639,_STAR_print_newline_STAR_28640,base_path_28641))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28640;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28639;
}}catch (e28638){if((e28638 instanceof Error)){
var e = e28638;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28641], null));
} else {
var e = e28638;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28641))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28645){
var map__28652 = p__28645;
var map__28652__$1 = ((((!((map__28652 == null)))?((((map__28652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28652):map__28652);
var opts = map__28652__$1;
var build_id = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28652,map__28652__$1,opts,build_id){
return (function (p__28654){
var vec__28655 = p__28654;
var map__28656 = cljs.core.nth.call(null,vec__28655,(0),null);
var map__28656__$1 = ((((!((map__28656 == null)))?((((map__28656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28656):map__28656);
var msg = map__28656__$1;
var msg_name = cljs.core.get.call(null,map__28656__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28655,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28655,map__28656,map__28656__$1,msg,msg_name,_,map__28652,map__28652__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28655,map__28656,map__28656__$1,msg,msg_name,_,map__28652,map__28652__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28652,map__28652__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28662){
var vec__28663 = p__28662;
var map__28664 = cljs.core.nth.call(null,vec__28663,(0),null);
var map__28664__$1 = ((((!((map__28664 == null)))?((((map__28664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28664):map__28664);
var msg = map__28664__$1;
var msg_name = cljs.core.get.call(null,map__28664__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28663,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28666){
var map__28676 = p__28666;
var map__28676__$1 = ((((!((map__28676 == null)))?((((map__28676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28676):map__28676);
var on_compile_warning = cljs.core.get.call(null,map__28676__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28676__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28676,map__28676__$1,on_compile_warning,on_compile_fail){
return (function (p__28678){
var vec__28679 = p__28678;
var map__28680 = cljs.core.nth.call(null,vec__28679,(0),null);
var map__28680__$1 = ((((!((map__28680 == null)))?((((map__28680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28680):map__28680);
var msg = map__28680__$1;
var msg_name = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28679,(1));
var pred__28682 = cljs.core._EQ_;
var expr__28683 = msg_name;
if(cljs.core.truth_(pred__28682.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28683))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28682.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28683))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28676,map__28676__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto__,msg_hist,msg_names,msg){
return (function (state_28899){
var state_val_28900 = (state_28899[(1)]);
if((state_val_28900 === (7))){
var inst_28823 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28823)){
var statearr_28901_28947 = state_28899__$1;
(statearr_28901_28947[(1)] = (8));

} else {
var statearr_28902_28948 = state_28899__$1;
(statearr_28902_28948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (20))){
var inst_28893 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28903_28949 = state_28899__$1;
(statearr_28903_28949[(2)] = inst_28893);

(statearr_28903_28949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (27))){
var inst_28889 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28904_28950 = state_28899__$1;
(statearr_28904_28950[(2)] = inst_28889);

(statearr_28904_28950[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (1))){
var inst_28816 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28816)){
var statearr_28905_28951 = state_28899__$1;
(statearr_28905_28951[(1)] = (2));

} else {
var statearr_28906_28952 = state_28899__$1;
(statearr_28906_28952[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (24))){
var inst_28891 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28907_28953 = state_28899__$1;
(statearr_28907_28953[(2)] = inst_28891);

(statearr_28907_28953[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (4))){
var inst_28897 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28899__$1,inst_28897);
} else {
if((state_val_28900 === (15))){
var inst_28895 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28908_28954 = state_28899__$1;
(statearr_28908_28954[(2)] = inst_28895);

(statearr_28908_28954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (21))){
var inst_28854 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28909_28955 = state_28899__$1;
(statearr_28909_28955[(2)] = inst_28854);

(statearr_28909_28955[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (31))){
var inst_28878 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28878)){
var statearr_28910_28956 = state_28899__$1;
(statearr_28910_28956[(1)] = (34));

} else {
var statearr_28911_28957 = state_28899__$1;
(statearr_28911_28957[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (32))){
var inst_28887 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28912_28958 = state_28899__$1;
(statearr_28912_28958[(2)] = inst_28887);

(statearr_28912_28958[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (33))){
var inst_28876 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28913_28959 = state_28899__$1;
(statearr_28913_28959[(2)] = inst_28876);

(statearr_28913_28959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (13))){
var inst_28837 = figwheel.client.heads_up.clear.call(null);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28899__$1,(16),inst_28837);
} else {
if((state_val_28900 === (22))){
var inst_28858 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28859 = figwheel.client.heads_up.append_message.call(null,inst_28858);
var state_28899__$1 = state_28899;
var statearr_28914_28960 = state_28899__$1;
(statearr_28914_28960[(2)] = inst_28859);

(statearr_28914_28960[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (36))){
var inst_28885 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28915_28961 = state_28899__$1;
(statearr_28915_28961[(2)] = inst_28885);

(statearr_28915_28961[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (29))){
var inst_28869 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28916_28962 = state_28899__$1;
(statearr_28916_28962[(2)] = inst_28869);

(statearr_28916_28962[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (6))){
var inst_28818 = (state_28899[(7)]);
var state_28899__$1 = state_28899;
var statearr_28917_28963 = state_28899__$1;
(statearr_28917_28963[(2)] = inst_28818);

(statearr_28917_28963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (28))){
var inst_28865 = (state_28899[(2)]);
var inst_28866 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28867 = figwheel.client.heads_up.display_warning.call(null,inst_28866);
var state_28899__$1 = (function (){var statearr_28918 = state_28899;
(statearr_28918[(8)] = inst_28865);

return statearr_28918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28899__$1,(29),inst_28867);
} else {
if((state_val_28900 === (25))){
var inst_28863 = figwheel.client.heads_up.clear.call(null);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28899__$1,(28),inst_28863);
} else {
if((state_val_28900 === (34))){
var inst_28880 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28899__$1,(37),inst_28880);
} else {
if((state_val_28900 === (17))){
var inst_28845 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28919_28964 = state_28899__$1;
(statearr_28919_28964[(2)] = inst_28845);

(statearr_28919_28964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (3))){
var inst_28835 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28835)){
var statearr_28920_28965 = state_28899__$1;
(statearr_28920_28965[(1)] = (13));

} else {
var statearr_28921_28966 = state_28899__$1;
(statearr_28921_28966[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (12))){
var inst_28831 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28922_28967 = state_28899__$1;
(statearr_28922_28967[(2)] = inst_28831);

(statearr_28922_28967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (2))){
var inst_28818 = (state_28899[(7)]);
var inst_28818__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28899__$1 = (function (){var statearr_28923 = state_28899;
(statearr_28923[(7)] = inst_28818__$1);

return statearr_28923;
})();
if(cljs.core.truth_(inst_28818__$1)){
var statearr_28924_28968 = state_28899__$1;
(statearr_28924_28968[(1)] = (5));

} else {
var statearr_28925_28969 = state_28899__$1;
(statearr_28925_28969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (23))){
var inst_28861 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28861)){
var statearr_28926_28970 = state_28899__$1;
(statearr_28926_28970[(1)] = (25));

} else {
var statearr_28927_28971 = state_28899__$1;
(statearr_28927_28971[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (35))){
var state_28899__$1 = state_28899;
var statearr_28928_28972 = state_28899__$1;
(statearr_28928_28972[(2)] = null);

(statearr_28928_28972[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (19))){
var inst_28856 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28856)){
var statearr_28929_28973 = state_28899__$1;
(statearr_28929_28973[(1)] = (22));

} else {
var statearr_28930_28974 = state_28899__$1;
(statearr_28930_28974[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (11))){
var inst_28827 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28931_28975 = state_28899__$1;
(statearr_28931_28975[(2)] = inst_28827);

(statearr_28931_28975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (9))){
var inst_28829 = figwheel.client.heads_up.clear.call(null);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28899__$1,(12),inst_28829);
} else {
if((state_val_28900 === (5))){
var inst_28820 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28899__$1 = state_28899;
var statearr_28932_28976 = state_28899__$1;
(statearr_28932_28976[(2)] = inst_28820);

(statearr_28932_28976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (14))){
var inst_28847 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28847)){
var statearr_28933_28977 = state_28899__$1;
(statearr_28933_28977[(1)] = (18));

} else {
var statearr_28934_28978 = state_28899__$1;
(statearr_28934_28978[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (26))){
var inst_28871 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28871)){
var statearr_28935_28979 = state_28899__$1;
(statearr_28935_28979[(1)] = (30));

} else {
var statearr_28936_28980 = state_28899__$1;
(statearr_28936_28980[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (16))){
var inst_28839 = (state_28899[(2)]);
var inst_28840 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28841 = figwheel.client.format_messages.call(null,inst_28840);
var inst_28842 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28843 = figwheel.client.heads_up.display_error.call(null,inst_28841,inst_28842);
var state_28899__$1 = (function (){var statearr_28937 = state_28899;
(statearr_28937[(9)] = inst_28839);

return statearr_28937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28899__$1,(17),inst_28843);
} else {
if((state_val_28900 === (30))){
var inst_28873 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28874 = figwheel.client.heads_up.display_warning.call(null,inst_28873);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28899__$1,(33),inst_28874);
} else {
if((state_val_28900 === (10))){
var inst_28833 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28938_28981 = state_28899__$1;
(statearr_28938_28981[(2)] = inst_28833);

(statearr_28938_28981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (18))){
var inst_28849 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28850 = figwheel.client.format_messages.call(null,inst_28849);
var inst_28851 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28852 = figwheel.client.heads_up.display_error.call(null,inst_28850,inst_28851);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28899__$1,(21),inst_28852);
} else {
if((state_val_28900 === (37))){
var inst_28882 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28939_28982 = state_28899__$1;
(statearr_28939_28982[(2)] = inst_28882);

(statearr_28939_28982[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (8))){
var inst_28825 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28899__$1,(11),inst_28825);
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
});})(c__24281__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24169__auto__,c__24281__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto____0 = (function (){
var statearr_28943 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28943[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto__);

(statearr_28943[(1)] = (1));

return statearr_28943;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto____1 = (function (state_28899){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_28899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e28944){if((e28944 instanceof Object)){
var ex__24173__auto__ = e28944;
var statearr_28945_28983 = state_28899;
(statearr_28945_28983[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28984 = state_28899;
state_28899 = G__28984;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto__ = function(state_28899){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto____1.call(this,state_28899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto__,msg_hist,msg_names,msg))
})();
var state__24283__auto__ = (function (){var statearr_28946 = f__24282__auto__.call(null);
(statearr_28946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto__);

return statearr_28946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto__,msg_hist,msg_names,msg))
);

return c__24281__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24281__auto___29047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___29047,ch){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___29047,ch){
return (function (state_29030){
var state_val_29031 = (state_29030[(1)]);
if((state_val_29031 === (1))){
var state_29030__$1 = state_29030;
var statearr_29032_29048 = state_29030__$1;
(statearr_29032_29048[(2)] = null);

(statearr_29032_29048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (2))){
var state_29030__$1 = state_29030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29030__$1,(4),ch);
} else {
if((state_val_29031 === (3))){
var inst_29028 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29030__$1,inst_29028);
} else {
if((state_val_29031 === (4))){
var inst_29018 = (state_29030[(7)]);
var inst_29018__$1 = (state_29030[(2)]);
var state_29030__$1 = (function (){var statearr_29033 = state_29030;
(statearr_29033[(7)] = inst_29018__$1);

return statearr_29033;
})();
if(cljs.core.truth_(inst_29018__$1)){
var statearr_29034_29049 = state_29030__$1;
(statearr_29034_29049[(1)] = (5));

} else {
var statearr_29035_29050 = state_29030__$1;
(statearr_29035_29050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (5))){
var inst_29018 = (state_29030[(7)]);
var inst_29020 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29018);
var state_29030__$1 = state_29030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29030__$1,(8),inst_29020);
} else {
if((state_val_29031 === (6))){
var state_29030__$1 = state_29030;
var statearr_29036_29051 = state_29030__$1;
(statearr_29036_29051[(2)] = null);

(statearr_29036_29051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (7))){
var inst_29026 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29037_29052 = state_29030__$1;
(statearr_29037_29052[(2)] = inst_29026);

(statearr_29037_29052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (8))){
var inst_29022 = (state_29030[(2)]);
var state_29030__$1 = (function (){var statearr_29038 = state_29030;
(statearr_29038[(8)] = inst_29022);

return statearr_29038;
})();
var statearr_29039_29053 = state_29030__$1;
(statearr_29039_29053[(2)] = null);

(statearr_29039_29053[(1)] = (2));


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
});})(c__24281__auto___29047,ch))
;
return ((function (switch__24169__auto__,c__24281__auto___29047,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24170__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24170__auto____0 = (function (){
var statearr_29043 = [null,null,null,null,null,null,null,null,null];
(statearr_29043[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24170__auto__);

(statearr_29043[(1)] = (1));

return statearr_29043;
});
var figwheel$client$heads_up_plugin_$_state_machine__24170__auto____1 = (function (state_29030){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_29030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e29044){if((e29044 instanceof Object)){
var ex__24173__auto__ = e29044;
var statearr_29045_29054 = state_29030;
(statearr_29045_29054[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29055 = state_29030;
state_29030 = G__29055;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24170__auto__ = function(state_29030){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24170__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24170__auto____1.call(this,state_29030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24170__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24170__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___29047,ch))
})();
var state__24283__auto__ = (function (){var statearr_29046 = f__24282__auto__.call(null);
(statearr_29046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___29047);

return statearr_29046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___29047,ch))
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
var c__24281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto__){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto__){
return (function (state_29076){
var state_val_29077 = (state_29076[(1)]);
if((state_val_29077 === (1))){
var inst_29071 = cljs.core.async.timeout.call(null,(3000));
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29076__$1,(2),inst_29071);
} else {
if((state_val_29077 === (2))){
var inst_29073 = (state_29076[(2)]);
var inst_29074 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29076__$1 = (function (){var statearr_29078 = state_29076;
(statearr_29078[(7)] = inst_29073);

return statearr_29078;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29076__$1,inst_29074);
} else {
return null;
}
}
});})(c__24281__auto__))
;
return ((function (switch__24169__auto__,c__24281__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24170__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24170__auto____0 = (function (){
var statearr_29082 = [null,null,null,null,null,null,null,null];
(statearr_29082[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24170__auto__);

(statearr_29082[(1)] = (1));

return statearr_29082;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24170__auto____1 = (function (state_29076){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_29076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e29083){if((e29083 instanceof Object)){
var ex__24173__auto__ = e29083;
var statearr_29084_29086 = state_29076;
(statearr_29084_29086[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29087 = state_29076;
state_29076 = G__29087;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24170__auto__ = function(state_29076){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24170__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24170__auto____1.call(this,state_29076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24170__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24170__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto__))
})();
var state__24283__auto__ = (function (){var statearr_29085 = f__24282__auto__.call(null);
(statearr_29085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto__);

return statearr_29085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto__))
);

return c__24281__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29088){
var map__29095 = p__29088;
var map__29095__$1 = ((((!((map__29095 == null)))?((((map__29095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29095):map__29095);
var ed = map__29095__$1;
var formatted_exception = cljs.core.get.call(null,map__29095__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29095__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29095__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29097_29101 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29098_29102 = null;
var count__29099_29103 = (0);
var i__29100_29104 = (0);
while(true){
if((i__29100_29104 < count__29099_29103)){
var msg_29105 = cljs.core._nth.call(null,chunk__29098_29102,i__29100_29104);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29105);

var G__29106 = seq__29097_29101;
var G__29107 = chunk__29098_29102;
var G__29108 = count__29099_29103;
var G__29109 = (i__29100_29104 + (1));
seq__29097_29101 = G__29106;
chunk__29098_29102 = G__29107;
count__29099_29103 = G__29108;
i__29100_29104 = G__29109;
continue;
} else {
var temp__4425__auto___29110 = cljs.core.seq.call(null,seq__29097_29101);
if(temp__4425__auto___29110){
var seq__29097_29111__$1 = temp__4425__auto___29110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29097_29111__$1)){
var c__17554__auto___29112 = cljs.core.chunk_first.call(null,seq__29097_29111__$1);
var G__29113 = cljs.core.chunk_rest.call(null,seq__29097_29111__$1);
var G__29114 = c__17554__auto___29112;
var G__29115 = cljs.core.count.call(null,c__17554__auto___29112);
var G__29116 = (0);
seq__29097_29101 = G__29113;
chunk__29098_29102 = G__29114;
count__29099_29103 = G__29115;
i__29100_29104 = G__29116;
continue;
} else {
var msg_29117 = cljs.core.first.call(null,seq__29097_29111__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29117);

var G__29118 = cljs.core.next.call(null,seq__29097_29111__$1);
var G__29119 = null;
var G__29120 = (0);
var G__29121 = (0);
seq__29097_29101 = G__29118;
chunk__29098_29102 = G__29119;
count__29099_29103 = G__29120;
i__29100_29104 = G__29121;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29122){
var map__29125 = p__29122;
var map__29125__$1 = ((((!((map__29125 == null)))?((((map__29125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29125):map__29125);
var w = map__29125__$1;
var message = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29133 = cljs.core.seq.call(null,plugins);
var chunk__29134 = null;
var count__29135 = (0);
var i__29136 = (0);
while(true){
if((i__29136 < count__29135)){
var vec__29137 = cljs.core._nth.call(null,chunk__29134,i__29136);
var k = cljs.core.nth.call(null,vec__29137,(0),null);
var plugin = cljs.core.nth.call(null,vec__29137,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29139 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29133,chunk__29134,count__29135,i__29136,pl_29139,vec__29137,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29139.call(null,msg_hist);
});})(seq__29133,chunk__29134,count__29135,i__29136,pl_29139,vec__29137,k,plugin))
);
} else {
}

var G__29140 = seq__29133;
var G__29141 = chunk__29134;
var G__29142 = count__29135;
var G__29143 = (i__29136 + (1));
seq__29133 = G__29140;
chunk__29134 = G__29141;
count__29135 = G__29142;
i__29136 = G__29143;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29133);
if(temp__4425__auto__){
var seq__29133__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29133__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__29133__$1);
var G__29144 = cljs.core.chunk_rest.call(null,seq__29133__$1);
var G__29145 = c__17554__auto__;
var G__29146 = cljs.core.count.call(null,c__17554__auto__);
var G__29147 = (0);
seq__29133 = G__29144;
chunk__29134 = G__29145;
count__29135 = G__29146;
i__29136 = G__29147;
continue;
} else {
var vec__29138 = cljs.core.first.call(null,seq__29133__$1);
var k = cljs.core.nth.call(null,vec__29138,(0),null);
var plugin = cljs.core.nth.call(null,vec__29138,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29148 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29133,chunk__29134,count__29135,i__29136,pl_29148,vec__29138,k,plugin,seq__29133__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29148.call(null,msg_hist);
});})(seq__29133,chunk__29134,count__29135,i__29136,pl_29148,vec__29138,k,plugin,seq__29133__$1,temp__4425__auto__))
);
} else {
}

var G__29149 = cljs.core.next.call(null,seq__29133__$1);
var G__29150 = null;
var G__29151 = (0);
var G__29152 = (0);
seq__29133 = G__29149;
chunk__29134 = G__29150;
count__29135 = G__29151;
i__29136 = G__29152;
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
var args29153 = [];
var len__17809__auto___29156 = arguments.length;
var i__17810__auto___29157 = (0);
while(true){
if((i__17810__auto___29157 < len__17809__auto___29156)){
args29153.push((arguments[i__17810__auto___29157]));

var G__29158 = (i__17810__auto___29157 + (1));
i__17810__auto___29157 = G__29158;
continue;
} else {
}
break;
}

var G__29155 = args29153.length;
switch (G__29155) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29153.length)].join('')));

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
var len__17809__auto___29164 = arguments.length;
var i__17810__auto___29165 = (0);
while(true){
if((i__17810__auto___29165 < len__17809__auto___29164)){
args__17816__auto__.push((arguments[i__17810__auto___29165]));

var G__29166 = (i__17810__auto___29165 + (1));
i__17810__auto___29165 = G__29166;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29161){
var map__29162 = p__29161;
var map__29162__$1 = ((((!((map__29162 == null)))?((((map__29162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29162):map__29162);
var opts = map__29162__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29160){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29160));
});

//# sourceMappingURL=client.js.map?rel=1448614622190