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
var pred__28437 = cljs.core._EQ_;
var expr__28438 = (function (){var or__16751__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28437.call(null,"true",expr__28438))){
return true;
} else {
if(cljs.core.truth_(pred__28437.call(null,"false",expr__28438))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28438)].join('')));
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
var G__28440__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28441__i = 0, G__28441__a = new Array(arguments.length -  0);
while (G__28441__i < G__28441__a.length) {G__28441__a[G__28441__i] = arguments[G__28441__i + 0]; ++G__28441__i;}
  args = new cljs.core.IndexedSeq(G__28441__a,0);
} 
return G__28440__delegate.call(this,args);};
G__28440.cljs$lang$maxFixedArity = 0;
G__28440.cljs$lang$applyTo = (function (arglist__28442){
var args = cljs.core.seq(arglist__28442);
return G__28440__delegate(args);
});
G__28440.cljs$core$IFn$_invoke$arity$variadic = G__28440__delegate;
return G__28440;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28443){
var map__28446 = p__28443;
var map__28446__$1 = ((((!((map__28446 == null)))?((((map__28446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28446):map__28446);
var message = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24276__auto___28608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___28608,ch){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___28608,ch){
return (function (state_28577){
var state_val_28578 = (state_28577[(1)]);
if((state_val_28578 === (7))){
var inst_28573 = (state_28577[(2)]);
var state_28577__$1 = state_28577;
var statearr_28579_28609 = state_28577__$1;
(statearr_28579_28609[(2)] = inst_28573);

(statearr_28579_28609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (1))){
var state_28577__$1 = state_28577;
var statearr_28580_28610 = state_28577__$1;
(statearr_28580_28610[(2)] = null);

(statearr_28580_28610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (4))){
var inst_28530 = (state_28577[(7)]);
var inst_28530__$1 = (state_28577[(2)]);
var state_28577__$1 = (function (){var statearr_28581 = state_28577;
(statearr_28581[(7)] = inst_28530__$1);

return statearr_28581;
})();
if(cljs.core.truth_(inst_28530__$1)){
var statearr_28582_28611 = state_28577__$1;
(statearr_28582_28611[(1)] = (5));

} else {
var statearr_28583_28612 = state_28577__$1;
(statearr_28583_28612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (15))){
var inst_28537 = (state_28577[(8)]);
var inst_28552 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28537);
var inst_28553 = cljs.core.first.call(null,inst_28552);
var inst_28554 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28553);
var inst_28555 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28554)].join('');
var inst_28556 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28555);
var state_28577__$1 = state_28577;
var statearr_28584_28613 = state_28577__$1;
(statearr_28584_28613[(2)] = inst_28556);

(statearr_28584_28613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (13))){
var inst_28561 = (state_28577[(2)]);
var state_28577__$1 = state_28577;
var statearr_28585_28614 = state_28577__$1;
(statearr_28585_28614[(2)] = inst_28561);

(statearr_28585_28614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (6))){
var state_28577__$1 = state_28577;
var statearr_28586_28615 = state_28577__$1;
(statearr_28586_28615[(2)] = null);

(statearr_28586_28615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (17))){
var inst_28559 = (state_28577[(2)]);
var state_28577__$1 = state_28577;
var statearr_28587_28616 = state_28577__$1;
(statearr_28587_28616[(2)] = inst_28559);

(statearr_28587_28616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (3))){
var inst_28575 = (state_28577[(2)]);
var state_28577__$1 = state_28577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28577__$1,inst_28575);
} else {
if((state_val_28578 === (12))){
var inst_28536 = (state_28577[(9)]);
var inst_28550 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28536,opts);
var state_28577__$1 = state_28577;
if(cljs.core.truth_(inst_28550)){
var statearr_28588_28617 = state_28577__$1;
(statearr_28588_28617[(1)] = (15));

} else {
var statearr_28589_28618 = state_28577__$1;
(statearr_28589_28618[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (2))){
var state_28577__$1 = state_28577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28577__$1,(4),ch);
} else {
if((state_val_28578 === (11))){
var inst_28537 = (state_28577[(8)]);
var inst_28542 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28543 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28537);
var inst_28544 = cljs.core.async.timeout.call(null,(1000));
var inst_28545 = [inst_28543,inst_28544];
var inst_28546 = (new cljs.core.PersistentVector(null,2,(5),inst_28542,inst_28545,null));
var state_28577__$1 = state_28577;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28577__$1,(14),inst_28546);
} else {
if((state_val_28578 === (9))){
var inst_28537 = (state_28577[(8)]);
var inst_28563 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28564 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28537);
var inst_28565 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28564);
var inst_28566 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28565)].join('');
var inst_28567 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28566);
var state_28577__$1 = (function (){var statearr_28590 = state_28577;
(statearr_28590[(10)] = inst_28563);

return statearr_28590;
})();
var statearr_28591_28619 = state_28577__$1;
(statearr_28591_28619[(2)] = inst_28567);

(statearr_28591_28619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (5))){
var inst_28530 = (state_28577[(7)]);
var inst_28532 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28533 = (new cljs.core.PersistentArrayMap(null,2,inst_28532,null));
var inst_28534 = (new cljs.core.PersistentHashSet(null,inst_28533,null));
var inst_28535 = figwheel.client.focus_msgs.call(null,inst_28534,inst_28530);
var inst_28536 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28535);
var inst_28537 = cljs.core.first.call(null,inst_28535);
var inst_28538 = figwheel.client.autoload_QMARK_.call(null);
var state_28577__$1 = (function (){var statearr_28592 = state_28577;
(statearr_28592[(8)] = inst_28537);

(statearr_28592[(9)] = inst_28536);

return statearr_28592;
})();
if(cljs.core.truth_(inst_28538)){
var statearr_28593_28620 = state_28577__$1;
(statearr_28593_28620[(1)] = (8));

} else {
var statearr_28594_28621 = state_28577__$1;
(statearr_28594_28621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (14))){
var inst_28548 = (state_28577[(2)]);
var state_28577__$1 = state_28577;
var statearr_28595_28622 = state_28577__$1;
(statearr_28595_28622[(2)] = inst_28548);

(statearr_28595_28622[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (16))){
var state_28577__$1 = state_28577;
var statearr_28596_28623 = state_28577__$1;
(statearr_28596_28623[(2)] = null);

(statearr_28596_28623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (10))){
var inst_28569 = (state_28577[(2)]);
var state_28577__$1 = (function (){var statearr_28597 = state_28577;
(statearr_28597[(11)] = inst_28569);

return statearr_28597;
})();
var statearr_28598_28624 = state_28577__$1;
(statearr_28598_28624[(2)] = null);

(statearr_28598_28624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28578 === (8))){
var inst_28536 = (state_28577[(9)]);
var inst_28540 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28536,opts);
var state_28577__$1 = state_28577;
if(cljs.core.truth_(inst_28540)){
var statearr_28599_28625 = state_28577__$1;
(statearr_28599_28625[(1)] = (11));

} else {
var statearr_28600_28626 = state_28577__$1;
(statearr_28600_28626[(1)] = (12));

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
});})(c__24276__auto___28608,ch))
;
return ((function (switch__24164__auto__,c__24276__auto___28608,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24165__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24165__auto____0 = (function (){
var statearr_28604 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28604[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24165__auto__);

(statearr_28604[(1)] = (1));

return statearr_28604;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24165__auto____1 = (function (state_28577){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_28577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e28605){if((e28605 instanceof Object)){
var ex__24168__auto__ = e28605;
var statearr_28606_28627 = state_28577;
(statearr_28606_28627[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28628 = state_28577;
state_28577 = G__28628;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24165__auto__ = function(state_28577){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24165__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24165__auto____1.call(this,state_28577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24165__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24165__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___28608,ch))
})();
var state__24278__auto__ = (function (){var statearr_28607 = f__24277__auto__.call(null);
(statearr_28607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___28608);

return statearr_28607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___28608,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28629_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28629_SHARP_));
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
var base_path_28636 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28636){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28634 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28635 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28634,_STAR_print_newline_STAR_28635,base_path_28636){
return (function() { 
var G__28637__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28638__i = 0, G__28638__a = new Array(arguments.length -  0);
while (G__28638__i < G__28638__a.length) {G__28638__a[G__28638__i] = arguments[G__28638__i + 0]; ++G__28638__i;}
  args = new cljs.core.IndexedSeq(G__28638__a,0);
} 
return G__28637__delegate.call(this,args);};
G__28637.cljs$lang$maxFixedArity = 0;
G__28637.cljs$lang$applyTo = (function (arglist__28639){
var args = cljs.core.seq(arglist__28639);
return G__28637__delegate(args);
});
G__28637.cljs$core$IFn$_invoke$arity$variadic = G__28637__delegate;
return G__28637;
})()
;})(_STAR_print_fn_STAR_28634,_STAR_print_newline_STAR_28635,base_path_28636))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28635;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28634;
}}catch (e28633){if((e28633 instanceof Error)){
var e = e28633;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28636], null));
} else {
var e = e28633;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28636))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28640){
var map__28647 = p__28640;
var map__28647__$1 = ((((!((map__28647 == null)))?((((map__28647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28647):map__28647);
var opts = map__28647__$1;
var build_id = cljs.core.get.call(null,map__28647__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28647,map__28647__$1,opts,build_id){
return (function (p__28649){
var vec__28650 = p__28649;
var map__28651 = cljs.core.nth.call(null,vec__28650,(0),null);
var map__28651__$1 = ((((!((map__28651 == null)))?((((map__28651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28651):map__28651);
var msg = map__28651__$1;
var msg_name = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28650,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28650,map__28651,map__28651__$1,msg,msg_name,_,map__28647,map__28647__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28650,map__28651,map__28651__$1,msg,msg_name,_,map__28647,map__28647__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28647,map__28647__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28657){
var vec__28658 = p__28657;
var map__28659 = cljs.core.nth.call(null,vec__28658,(0),null);
var map__28659__$1 = ((((!((map__28659 == null)))?((((map__28659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28659):map__28659);
var msg = map__28659__$1;
var msg_name = cljs.core.get.call(null,map__28659__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28658,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28661){
var map__28671 = p__28661;
var map__28671__$1 = ((((!((map__28671 == null)))?((((map__28671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28671):map__28671);
var on_compile_warning = cljs.core.get.call(null,map__28671__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28671__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28671,map__28671__$1,on_compile_warning,on_compile_fail){
return (function (p__28673){
var vec__28674 = p__28673;
var map__28675 = cljs.core.nth.call(null,vec__28674,(0),null);
var map__28675__$1 = ((((!((map__28675 == null)))?((((map__28675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28675):map__28675);
var msg = map__28675__$1;
var msg_name = cljs.core.get.call(null,map__28675__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28674,(1));
var pred__28677 = cljs.core._EQ_;
var expr__28678 = msg_name;
if(cljs.core.truth_(pred__28677.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28678))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28677.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28678))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28671,map__28671__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto__,msg_hist,msg_names,msg){
return (function (state_28894){
var state_val_28895 = (state_28894[(1)]);
if((state_val_28895 === (7))){
var inst_28818 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
if(cljs.core.truth_(inst_28818)){
var statearr_28896_28942 = state_28894__$1;
(statearr_28896_28942[(1)] = (8));

} else {
var statearr_28897_28943 = state_28894__$1;
(statearr_28897_28943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (20))){
var inst_28888 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28898_28944 = state_28894__$1;
(statearr_28898_28944[(2)] = inst_28888);

(statearr_28898_28944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (27))){
var inst_28884 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28899_28945 = state_28894__$1;
(statearr_28899_28945[(2)] = inst_28884);

(statearr_28899_28945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (1))){
var inst_28811 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28894__$1 = state_28894;
if(cljs.core.truth_(inst_28811)){
var statearr_28900_28946 = state_28894__$1;
(statearr_28900_28946[(1)] = (2));

} else {
var statearr_28901_28947 = state_28894__$1;
(statearr_28901_28947[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (24))){
var inst_28886 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28902_28948 = state_28894__$1;
(statearr_28902_28948[(2)] = inst_28886);

(statearr_28902_28948[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (4))){
var inst_28892 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28894__$1,inst_28892);
} else {
if((state_val_28895 === (15))){
var inst_28890 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28903_28949 = state_28894__$1;
(statearr_28903_28949[(2)] = inst_28890);

(statearr_28903_28949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (21))){
var inst_28849 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28904_28950 = state_28894__$1;
(statearr_28904_28950[(2)] = inst_28849);

(statearr_28904_28950[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (31))){
var inst_28873 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28894__$1 = state_28894;
if(cljs.core.truth_(inst_28873)){
var statearr_28905_28951 = state_28894__$1;
(statearr_28905_28951[(1)] = (34));

} else {
var statearr_28906_28952 = state_28894__$1;
(statearr_28906_28952[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (32))){
var inst_28882 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28907_28953 = state_28894__$1;
(statearr_28907_28953[(2)] = inst_28882);

(statearr_28907_28953[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (33))){
var inst_28871 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28908_28954 = state_28894__$1;
(statearr_28908_28954[(2)] = inst_28871);

(statearr_28908_28954[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (13))){
var inst_28832 = figwheel.client.heads_up.clear.call(null);
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(16),inst_28832);
} else {
if((state_val_28895 === (22))){
var inst_28853 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28854 = figwheel.client.heads_up.append_message.call(null,inst_28853);
var state_28894__$1 = state_28894;
var statearr_28909_28955 = state_28894__$1;
(statearr_28909_28955[(2)] = inst_28854);

(statearr_28909_28955[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (36))){
var inst_28880 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28910_28956 = state_28894__$1;
(statearr_28910_28956[(2)] = inst_28880);

(statearr_28910_28956[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (29))){
var inst_28864 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28911_28957 = state_28894__$1;
(statearr_28911_28957[(2)] = inst_28864);

(statearr_28911_28957[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (6))){
var inst_28813 = (state_28894[(7)]);
var state_28894__$1 = state_28894;
var statearr_28912_28958 = state_28894__$1;
(statearr_28912_28958[(2)] = inst_28813);

(statearr_28912_28958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (28))){
var inst_28860 = (state_28894[(2)]);
var inst_28861 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28862 = figwheel.client.heads_up.display_warning.call(null,inst_28861);
var state_28894__$1 = (function (){var statearr_28913 = state_28894;
(statearr_28913[(8)] = inst_28860);

return statearr_28913;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(29),inst_28862);
} else {
if((state_val_28895 === (25))){
var inst_28858 = figwheel.client.heads_up.clear.call(null);
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(28),inst_28858);
} else {
if((state_val_28895 === (34))){
var inst_28875 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(37),inst_28875);
} else {
if((state_val_28895 === (17))){
var inst_28840 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28914_28959 = state_28894__$1;
(statearr_28914_28959[(2)] = inst_28840);

(statearr_28914_28959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (3))){
var inst_28830 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28894__$1 = state_28894;
if(cljs.core.truth_(inst_28830)){
var statearr_28915_28960 = state_28894__$1;
(statearr_28915_28960[(1)] = (13));

} else {
var statearr_28916_28961 = state_28894__$1;
(statearr_28916_28961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (12))){
var inst_28826 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28917_28962 = state_28894__$1;
(statearr_28917_28962[(2)] = inst_28826);

(statearr_28917_28962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (2))){
var inst_28813 = (state_28894[(7)]);
var inst_28813__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28894__$1 = (function (){var statearr_28918 = state_28894;
(statearr_28918[(7)] = inst_28813__$1);

return statearr_28918;
})();
if(cljs.core.truth_(inst_28813__$1)){
var statearr_28919_28963 = state_28894__$1;
(statearr_28919_28963[(1)] = (5));

} else {
var statearr_28920_28964 = state_28894__$1;
(statearr_28920_28964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (23))){
var inst_28856 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28894__$1 = state_28894;
if(cljs.core.truth_(inst_28856)){
var statearr_28921_28965 = state_28894__$1;
(statearr_28921_28965[(1)] = (25));

} else {
var statearr_28922_28966 = state_28894__$1;
(statearr_28922_28966[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (35))){
var state_28894__$1 = state_28894;
var statearr_28923_28967 = state_28894__$1;
(statearr_28923_28967[(2)] = null);

(statearr_28923_28967[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (19))){
var inst_28851 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28894__$1 = state_28894;
if(cljs.core.truth_(inst_28851)){
var statearr_28924_28968 = state_28894__$1;
(statearr_28924_28968[(1)] = (22));

} else {
var statearr_28925_28969 = state_28894__$1;
(statearr_28925_28969[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (11))){
var inst_28822 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28926_28970 = state_28894__$1;
(statearr_28926_28970[(2)] = inst_28822);

(statearr_28926_28970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (9))){
var inst_28824 = figwheel.client.heads_up.clear.call(null);
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(12),inst_28824);
} else {
if((state_val_28895 === (5))){
var inst_28815 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28894__$1 = state_28894;
var statearr_28927_28971 = state_28894__$1;
(statearr_28927_28971[(2)] = inst_28815);

(statearr_28927_28971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (14))){
var inst_28842 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28894__$1 = state_28894;
if(cljs.core.truth_(inst_28842)){
var statearr_28928_28972 = state_28894__$1;
(statearr_28928_28972[(1)] = (18));

} else {
var statearr_28929_28973 = state_28894__$1;
(statearr_28929_28973[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (26))){
var inst_28866 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28894__$1 = state_28894;
if(cljs.core.truth_(inst_28866)){
var statearr_28930_28974 = state_28894__$1;
(statearr_28930_28974[(1)] = (30));

} else {
var statearr_28931_28975 = state_28894__$1;
(statearr_28931_28975[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (16))){
var inst_28834 = (state_28894[(2)]);
var inst_28835 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28836 = figwheel.client.format_messages.call(null,inst_28835);
var inst_28837 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28838 = figwheel.client.heads_up.display_error.call(null,inst_28836,inst_28837);
var state_28894__$1 = (function (){var statearr_28932 = state_28894;
(statearr_28932[(9)] = inst_28834);

return statearr_28932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(17),inst_28838);
} else {
if((state_val_28895 === (30))){
var inst_28868 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28869 = figwheel.client.heads_up.display_warning.call(null,inst_28868);
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(33),inst_28869);
} else {
if((state_val_28895 === (10))){
var inst_28828 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28933_28976 = state_28894__$1;
(statearr_28933_28976[(2)] = inst_28828);

(statearr_28933_28976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (18))){
var inst_28844 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28845 = figwheel.client.format_messages.call(null,inst_28844);
var inst_28846 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28847 = figwheel.client.heads_up.display_error.call(null,inst_28845,inst_28846);
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(21),inst_28847);
} else {
if((state_val_28895 === (37))){
var inst_28877 = (state_28894[(2)]);
var state_28894__$1 = state_28894;
var statearr_28934_28977 = state_28894__$1;
(statearr_28934_28977[(2)] = inst_28877);

(statearr_28934_28977[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28895 === (8))){
var inst_28820 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28894__$1 = state_28894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28894__$1,(11),inst_28820);
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
});})(c__24276__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24164__auto__,c__24276__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto____0 = (function (){
var statearr_28938 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28938[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto__);

(statearr_28938[(1)] = (1));

return statearr_28938;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto____1 = (function (state_28894){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_28894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e28939){if((e28939 instanceof Object)){
var ex__24168__auto__ = e28939;
var statearr_28940_28978 = state_28894;
(statearr_28940_28978[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28979 = state_28894;
state_28894 = G__28979;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto__ = function(state_28894){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto____1.call(this,state_28894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto__,msg_hist,msg_names,msg))
})();
var state__24278__auto__ = (function (){var statearr_28941 = f__24277__auto__.call(null);
(statearr_28941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto__);

return statearr_28941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto__,msg_hist,msg_names,msg))
);

return c__24276__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24276__auto___29042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___29042,ch){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___29042,ch){
return (function (state_29025){
var state_val_29026 = (state_29025[(1)]);
if((state_val_29026 === (1))){
var state_29025__$1 = state_29025;
var statearr_29027_29043 = state_29025__$1;
(statearr_29027_29043[(2)] = null);

(statearr_29027_29043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (2))){
var state_29025__$1 = state_29025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29025__$1,(4),ch);
} else {
if((state_val_29026 === (3))){
var inst_29023 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29025__$1,inst_29023);
} else {
if((state_val_29026 === (4))){
var inst_29013 = (state_29025[(7)]);
var inst_29013__$1 = (state_29025[(2)]);
var state_29025__$1 = (function (){var statearr_29028 = state_29025;
(statearr_29028[(7)] = inst_29013__$1);

return statearr_29028;
})();
if(cljs.core.truth_(inst_29013__$1)){
var statearr_29029_29044 = state_29025__$1;
(statearr_29029_29044[(1)] = (5));

} else {
var statearr_29030_29045 = state_29025__$1;
(statearr_29030_29045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (5))){
var inst_29013 = (state_29025[(7)]);
var inst_29015 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29013);
var state_29025__$1 = state_29025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29025__$1,(8),inst_29015);
} else {
if((state_val_29026 === (6))){
var state_29025__$1 = state_29025;
var statearr_29031_29046 = state_29025__$1;
(statearr_29031_29046[(2)] = null);

(statearr_29031_29046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (7))){
var inst_29021 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
var statearr_29032_29047 = state_29025__$1;
(statearr_29032_29047[(2)] = inst_29021);

(statearr_29032_29047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (8))){
var inst_29017 = (state_29025[(2)]);
var state_29025__$1 = (function (){var statearr_29033 = state_29025;
(statearr_29033[(8)] = inst_29017);

return statearr_29033;
})();
var statearr_29034_29048 = state_29025__$1;
(statearr_29034_29048[(2)] = null);

(statearr_29034_29048[(1)] = (2));


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
});})(c__24276__auto___29042,ch))
;
return ((function (switch__24164__auto__,c__24276__auto___29042,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24165__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24165__auto____0 = (function (){
var statearr_29038 = [null,null,null,null,null,null,null,null,null];
(statearr_29038[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24165__auto__);

(statearr_29038[(1)] = (1));

return statearr_29038;
});
var figwheel$client$heads_up_plugin_$_state_machine__24165__auto____1 = (function (state_29025){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_29025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e29039){if((e29039 instanceof Object)){
var ex__24168__auto__ = e29039;
var statearr_29040_29049 = state_29025;
(statearr_29040_29049[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29050 = state_29025;
state_29025 = G__29050;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24165__auto__ = function(state_29025){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24165__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24165__auto____1.call(this,state_29025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24165__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24165__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___29042,ch))
})();
var state__24278__auto__ = (function (){var statearr_29041 = f__24277__auto__.call(null);
(statearr_29041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___29042);

return statearr_29041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___29042,ch))
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
var c__24276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto__){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto__){
return (function (state_29071){
var state_val_29072 = (state_29071[(1)]);
if((state_val_29072 === (1))){
var inst_29066 = cljs.core.async.timeout.call(null,(3000));
var state_29071__$1 = state_29071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29071__$1,(2),inst_29066);
} else {
if((state_val_29072 === (2))){
var inst_29068 = (state_29071[(2)]);
var inst_29069 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29071__$1 = (function (){var statearr_29073 = state_29071;
(statearr_29073[(7)] = inst_29068);

return statearr_29073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29071__$1,inst_29069);
} else {
return null;
}
}
});})(c__24276__auto__))
;
return ((function (switch__24164__auto__,c__24276__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24165__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24165__auto____0 = (function (){
var statearr_29077 = [null,null,null,null,null,null,null,null];
(statearr_29077[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24165__auto__);

(statearr_29077[(1)] = (1));

return statearr_29077;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24165__auto____1 = (function (state_29071){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_29071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e29078){if((e29078 instanceof Object)){
var ex__24168__auto__ = e29078;
var statearr_29079_29081 = state_29071;
(statearr_29079_29081[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29082 = state_29071;
state_29071 = G__29082;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24165__auto__ = function(state_29071){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24165__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24165__auto____1.call(this,state_29071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24165__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24165__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto__))
})();
var state__24278__auto__ = (function (){var statearr_29080 = f__24277__auto__.call(null);
(statearr_29080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto__);

return statearr_29080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto__))
);

return c__24276__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29083){
var map__29090 = p__29083;
var map__29090__$1 = ((((!((map__29090 == null)))?((((map__29090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29090):map__29090);
var ed = map__29090__$1;
var formatted_exception = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29092_29096 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29093_29097 = null;
var count__29094_29098 = (0);
var i__29095_29099 = (0);
while(true){
if((i__29095_29099 < count__29094_29098)){
var msg_29100 = cljs.core._nth.call(null,chunk__29093_29097,i__29095_29099);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29100);

var G__29101 = seq__29092_29096;
var G__29102 = chunk__29093_29097;
var G__29103 = count__29094_29098;
var G__29104 = (i__29095_29099 + (1));
seq__29092_29096 = G__29101;
chunk__29093_29097 = G__29102;
count__29094_29098 = G__29103;
i__29095_29099 = G__29104;
continue;
} else {
var temp__4425__auto___29105 = cljs.core.seq.call(null,seq__29092_29096);
if(temp__4425__auto___29105){
var seq__29092_29106__$1 = temp__4425__auto___29105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29092_29106__$1)){
var c__17554__auto___29107 = cljs.core.chunk_first.call(null,seq__29092_29106__$1);
var G__29108 = cljs.core.chunk_rest.call(null,seq__29092_29106__$1);
var G__29109 = c__17554__auto___29107;
var G__29110 = cljs.core.count.call(null,c__17554__auto___29107);
var G__29111 = (0);
seq__29092_29096 = G__29108;
chunk__29093_29097 = G__29109;
count__29094_29098 = G__29110;
i__29095_29099 = G__29111;
continue;
} else {
var msg_29112 = cljs.core.first.call(null,seq__29092_29106__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29112);

var G__29113 = cljs.core.next.call(null,seq__29092_29106__$1);
var G__29114 = null;
var G__29115 = (0);
var G__29116 = (0);
seq__29092_29096 = G__29113;
chunk__29093_29097 = G__29114;
count__29094_29098 = G__29115;
i__29095_29099 = G__29116;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29117){
var map__29120 = p__29117;
var map__29120__$1 = ((((!((map__29120 == null)))?((((map__29120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29120):map__29120);
var w = map__29120__$1;
var message = cljs.core.get.call(null,map__29120__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29128 = cljs.core.seq.call(null,plugins);
var chunk__29129 = null;
var count__29130 = (0);
var i__29131 = (0);
while(true){
if((i__29131 < count__29130)){
var vec__29132 = cljs.core._nth.call(null,chunk__29129,i__29131);
var k = cljs.core.nth.call(null,vec__29132,(0),null);
var plugin = cljs.core.nth.call(null,vec__29132,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29134 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29128,chunk__29129,count__29130,i__29131,pl_29134,vec__29132,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29134.call(null,msg_hist);
});})(seq__29128,chunk__29129,count__29130,i__29131,pl_29134,vec__29132,k,plugin))
);
} else {
}

var G__29135 = seq__29128;
var G__29136 = chunk__29129;
var G__29137 = count__29130;
var G__29138 = (i__29131 + (1));
seq__29128 = G__29135;
chunk__29129 = G__29136;
count__29130 = G__29137;
i__29131 = G__29138;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29128);
if(temp__4425__auto__){
var seq__29128__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29128__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__29128__$1);
var G__29139 = cljs.core.chunk_rest.call(null,seq__29128__$1);
var G__29140 = c__17554__auto__;
var G__29141 = cljs.core.count.call(null,c__17554__auto__);
var G__29142 = (0);
seq__29128 = G__29139;
chunk__29129 = G__29140;
count__29130 = G__29141;
i__29131 = G__29142;
continue;
} else {
var vec__29133 = cljs.core.first.call(null,seq__29128__$1);
var k = cljs.core.nth.call(null,vec__29133,(0),null);
var plugin = cljs.core.nth.call(null,vec__29133,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29143 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29128,chunk__29129,count__29130,i__29131,pl_29143,vec__29133,k,plugin,seq__29128__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29143.call(null,msg_hist);
});})(seq__29128,chunk__29129,count__29130,i__29131,pl_29143,vec__29133,k,plugin,seq__29128__$1,temp__4425__auto__))
);
} else {
}

var G__29144 = cljs.core.next.call(null,seq__29128__$1);
var G__29145 = null;
var G__29146 = (0);
var G__29147 = (0);
seq__29128 = G__29144;
chunk__29129 = G__29145;
count__29130 = G__29146;
i__29131 = G__29147;
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
var args29148 = [];
var len__17809__auto___29151 = arguments.length;
var i__17810__auto___29152 = (0);
while(true){
if((i__17810__auto___29152 < len__17809__auto___29151)){
args29148.push((arguments[i__17810__auto___29152]));

var G__29153 = (i__17810__auto___29152 + (1));
i__17810__auto___29152 = G__29153;
continue;
} else {
}
break;
}

var G__29150 = args29148.length;
switch (G__29150) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29148.length)].join('')));

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
var len__17809__auto___29159 = arguments.length;
var i__17810__auto___29160 = (0);
while(true){
if((i__17810__auto___29160 < len__17809__auto___29159)){
args__17816__auto__.push((arguments[i__17810__auto___29160]));

var G__29161 = (i__17810__auto___29160 + (1));
i__17810__auto___29160 = G__29161;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29156){
var map__29157 = p__29156;
var map__29157__$1 = ((((!((map__29157 == null)))?((((map__29157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29157):map__29157);
var opts = map__29157__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29155){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29155));
});

//# sourceMappingURL=client.js.map?rel=1449606077029