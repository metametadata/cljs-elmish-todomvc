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
var pred__28418 = cljs.core._EQ_;
var expr__28419 = (function (){var or__16751__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28418.call(null,"true",expr__28419))){
return true;
} else {
if(cljs.core.truth_(pred__28418.call(null,"false",expr__28419))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28419)].join('')));
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
var G__28421__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28422__i = 0, G__28422__a = new Array(arguments.length -  0);
while (G__28422__i < G__28422__a.length) {G__28422__a[G__28422__i] = arguments[G__28422__i + 0]; ++G__28422__i;}
  args = new cljs.core.IndexedSeq(G__28422__a,0);
} 
return G__28421__delegate.call(this,args);};
G__28421.cljs$lang$maxFixedArity = 0;
G__28421.cljs$lang$applyTo = (function (arglist__28423){
var args = cljs.core.seq(arglist__28423);
return G__28421__delegate(args);
});
G__28421.cljs$core$IFn$_invoke$arity$variadic = G__28421__delegate;
return G__28421;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28424){
var map__28427 = p__28424;
var map__28427__$1 = ((((!((map__28427 == null)))?((((map__28427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28427):map__28427);
var message = cljs.core.get.call(null,map__28427__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28427__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24257__auto___28589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___28589,ch){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___28589,ch){
return (function (state_28558){
var state_val_28559 = (state_28558[(1)]);
if((state_val_28559 === (7))){
var inst_28554 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
var statearr_28560_28590 = state_28558__$1;
(statearr_28560_28590[(2)] = inst_28554);

(statearr_28560_28590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (1))){
var state_28558__$1 = state_28558;
var statearr_28561_28591 = state_28558__$1;
(statearr_28561_28591[(2)] = null);

(statearr_28561_28591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (4))){
var inst_28511 = (state_28558[(7)]);
var inst_28511__$1 = (state_28558[(2)]);
var state_28558__$1 = (function (){var statearr_28562 = state_28558;
(statearr_28562[(7)] = inst_28511__$1);

return statearr_28562;
})();
if(cljs.core.truth_(inst_28511__$1)){
var statearr_28563_28592 = state_28558__$1;
(statearr_28563_28592[(1)] = (5));

} else {
var statearr_28564_28593 = state_28558__$1;
(statearr_28564_28593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (15))){
var inst_28518 = (state_28558[(8)]);
var inst_28533 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28518);
var inst_28534 = cljs.core.first.call(null,inst_28533);
var inst_28535 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28534);
var inst_28536 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28535)].join('');
var inst_28537 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28536);
var state_28558__$1 = state_28558;
var statearr_28565_28594 = state_28558__$1;
(statearr_28565_28594[(2)] = inst_28537);

(statearr_28565_28594[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (13))){
var inst_28542 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
var statearr_28566_28595 = state_28558__$1;
(statearr_28566_28595[(2)] = inst_28542);

(statearr_28566_28595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (6))){
var state_28558__$1 = state_28558;
var statearr_28567_28596 = state_28558__$1;
(statearr_28567_28596[(2)] = null);

(statearr_28567_28596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (17))){
var inst_28540 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
var statearr_28568_28597 = state_28558__$1;
(statearr_28568_28597[(2)] = inst_28540);

(statearr_28568_28597[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (3))){
var inst_28556 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28558__$1,inst_28556);
} else {
if((state_val_28559 === (12))){
var inst_28517 = (state_28558[(9)]);
var inst_28531 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28517,opts);
var state_28558__$1 = state_28558;
if(cljs.core.truth_(inst_28531)){
var statearr_28569_28598 = state_28558__$1;
(statearr_28569_28598[(1)] = (15));

} else {
var statearr_28570_28599 = state_28558__$1;
(statearr_28570_28599[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (2))){
var state_28558__$1 = state_28558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28558__$1,(4),ch);
} else {
if((state_val_28559 === (11))){
var inst_28518 = (state_28558[(8)]);
var inst_28523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28524 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28518);
var inst_28525 = cljs.core.async.timeout.call(null,(1000));
var inst_28526 = [inst_28524,inst_28525];
var inst_28527 = (new cljs.core.PersistentVector(null,2,(5),inst_28523,inst_28526,null));
var state_28558__$1 = state_28558;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28558__$1,(14),inst_28527);
} else {
if((state_val_28559 === (9))){
var inst_28518 = (state_28558[(8)]);
var inst_28544 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28545 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28518);
var inst_28546 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28545);
var inst_28547 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28546)].join('');
var inst_28548 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28547);
var state_28558__$1 = (function (){var statearr_28571 = state_28558;
(statearr_28571[(10)] = inst_28544);

return statearr_28571;
})();
var statearr_28572_28600 = state_28558__$1;
(statearr_28572_28600[(2)] = inst_28548);

(statearr_28572_28600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (5))){
var inst_28511 = (state_28558[(7)]);
var inst_28513 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28514 = (new cljs.core.PersistentArrayMap(null,2,inst_28513,null));
var inst_28515 = (new cljs.core.PersistentHashSet(null,inst_28514,null));
var inst_28516 = figwheel.client.focus_msgs.call(null,inst_28515,inst_28511);
var inst_28517 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28516);
var inst_28518 = cljs.core.first.call(null,inst_28516);
var inst_28519 = figwheel.client.autoload_QMARK_.call(null);
var state_28558__$1 = (function (){var statearr_28573 = state_28558;
(statearr_28573[(8)] = inst_28518);

(statearr_28573[(9)] = inst_28517);

return statearr_28573;
})();
if(cljs.core.truth_(inst_28519)){
var statearr_28574_28601 = state_28558__$1;
(statearr_28574_28601[(1)] = (8));

} else {
var statearr_28575_28602 = state_28558__$1;
(statearr_28575_28602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (14))){
var inst_28529 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
var statearr_28576_28603 = state_28558__$1;
(statearr_28576_28603[(2)] = inst_28529);

(statearr_28576_28603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (16))){
var state_28558__$1 = state_28558;
var statearr_28577_28604 = state_28558__$1;
(statearr_28577_28604[(2)] = null);

(statearr_28577_28604[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (10))){
var inst_28550 = (state_28558[(2)]);
var state_28558__$1 = (function (){var statearr_28578 = state_28558;
(statearr_28578[(11)] = inst_28550);

return statearr_28578;
})();
var statearr_28579_28605 = state_28558__$1;
(statearr_28579_28605[(2)] = null);

(statearr_28579_28605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (8))){
var inst_28517 = (state_28558[(9)]);
var inst_28521 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28517,opts);
var state_28558__$1 = state_28558;
if(cljs.core.truth_(inst_28521)){
var statearr_28580_28606 = state_28558__$1;
(statearr_28580_28606[(1)] = (11));

} else {
var statearr_28581_28607 = state_28558__$1;
(statearr_28581_28607[(1)] = (12));

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
});})(c__24257__auto___28589,ch))
;
return ((function (switch__24145__auto__,c__24257__auto___28589,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24146__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24146__auto____0 = (function (){
var statearr_28585 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28585[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24146__auto__);

(statearr_28585[(1)] = (1));

return statearr_28585;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24146__auto____1 = (function (state_28558){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_28558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e28586){if((e28586 instanceof Object)){
var ex__24149__auto__ = e28586;
var statearr_28587_28608 = state_28558;
(statearr_28587_28608[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28609 = state_28558;
state_28558 = G__28609;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24146__auto__ = function(state_28558){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24146__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24146__auto____1.call(this,state_28558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24146__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24146__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___28589,ch))
})();
var state__24259__auto__ = (function (){var statearr_28588 = f__24258__auto__.call(null);
(statearr_28588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___28589);

return statearr_28588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___28589,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28610_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28610_SHARP_));
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
var base_path_28617 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28617){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28615 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28616 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28615,_STAR_print_newline_STAR_28616,base_path_28617){
return (function() { 
var G__28618__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28619__i = 0, G__28619__a = new Array(arguments.length -  0);
while (G__28619__i < G__28619__a.length) {G__28619__a[G__28619__i] = arguments[G__28619__i + 0]; ++G__28619__i;}
  args = new cljs.core.IndexedSeq(G__28619__a,0);
} 
return G__28618__delegate.call(this,args);};
G__28618.cljs$lang$maxFixedArity = 0;
G__28618.cljs$lang$applyTo = (function (arglist__28620){
var args = cljs.core.seq(arglist__28620);
return G__28618__delegate(args);
});
G__28618.cljs$core$IFn$_invoke$arity$variadic = G__28618__delegate;
return G__28618;
})()
;})(_STAR_print_fn_STAR_28615,_STAR_print_newline_STAR_28616,base_path_28617))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28616;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28615;
}}catch (e28614){if((e28614 instanceof Error)){
var e = e28614;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28617], null));
} else {
var e = e28614;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28617))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28621){
var map__28628 = p__28621;
var map__28628__$1 = ((((!((map__28628 == null)))?((((map__28628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28628):map__28628);
var opts = map__28628__$1;
var build_id = cljs.core.get.call(null,map__28628__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28628,map__28628__$1,opts,build_id){
return (function (p__28630){
var vec__28631 = p__28630;
var map__28632 = cljs.core.nth.call(null,vec__28631,(0),null);
var map__28632__$1 = ((((!((map__28632 == null)))?((((map__28632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28632):map__28632);
var msg = map__28632__$1;
var msg_name = cljs.core.get.call(null,map__28632__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28631,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28631,map__28632,map__28632__$1,msg,msg_name,_,map__28628,map__28628__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28631,map__28632,map__28632__$1,msg,msg_name,_,map__28628,map__28628__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28628,map__28628__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28638){
var vec__28639 = p__28638;
var map__28640 = cljs.core.nth.call(null,vec__28639,(0),null);
var map__28640__$1 = ((((!((map__28640 == null)))?((((map__28640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28640):map__28640);
var msg = map__28640__$1;
var msg_name = cljs.core.get.call(null,map__28640__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28639,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28642){
var map__28652 = p__28642;
var map__28652__$1 = ((((!((map__28652 == null)))?((((map__28652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28652):map__28652);
var on_compile_warning = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28652,map__28652__$1,on_compile_warning,on_compile_fail){
return (function (p__28654){
var vec__28655 = p__28654;
var map__28656 = cljs.core.nth.call(null,vec__28655,(0),null);
var map__28656__$1 = ((((!((map__28656 == null)))?((((map__28656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28656):map__28656);
var msg = map__28656__$1;
var msg_name = cljs.core.get.call(null,map__28656__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28655,(1));
var pred__28658 = cljs.core._EQ_;
var expr__28659 = msg_name;
if(cljs.core.truth_(pred__28658.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28659))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28658.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28659))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28652,map__28652__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto__,msg_hist,msg_names,msg){
return (function (state_28875){
var state_val_28876 = (state_28875[(1)]);
if((state_val_28876 === (7))){
var inst_28799 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
if(cljs.core.truth_(inst_28799)){
var statearr_28877_28923 = state_28875__$1;
(statearr_28877_28923[(1)] = (8));

} else {
var statearr_28878_28924 = state_28875__$1;
(statearr_28878_28924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (20))){
var inst_28869 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28879_28925 = state_28875__$1;
(statearr_28879_28925[(2)] = inst_28869);

(statearr_28879_28925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (27))){
var inst_28865 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28880_28926 = state_28875__$1;
(statearr_28880_28926[(2)] = inst_28865);

(statearr_28880_28926[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (1))){
var inst_28792 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28875__$1 = state_28875;
if(cljs.core.truth_(inst_28792)){
var statearr_28881_28927 = state_28875__$1;
(statearr_28881_28927[(1)] = (2));

} else {
var statearr_28882_28928 = state_28875__$1;
(statearr_28882_28928[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (24))){
var inst_28867 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28883_28929 = state_28875__$1;
(statearr_28883_28929[(2)] = inst_28867);

(statearr_28883_28929[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (4))){
var inst_28873 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28875__$1,inst_28873);
} else {
if((state_val_28876 === (15))){
var inst_28871 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28884_28930 = state_28875__$1;
(statearr_28884_28930[(2)] = inst_28871);

(statearr_28884_28930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (21))){
var inst_28830 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28885_28931 = state_28875__$1;
(statearr_28885_28931[(2)] = inst_28830);

(statearr_28885_28931[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (31))){
var inst_28854 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28875__$1 = state_28875;
if(cljs.core.truth_(inst_28854)){
var statearr_28886_28932 = state_28875__$1;
(statearr_28886_28932[(1)] = (34));

} else {
var statearr_28887_28933 = state_28875__$1;
(statearr_28887_28933[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (32))){
var inst_28863 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28888_28934 = state_28875__$1;
(statearr_28888_28934[(2)] = inst_28863);

(statearr_28888_28934[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (33))){
var inst_28852 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28889_28935 = state_28875__$1;
(statearr_28889_28935[(2)] = inst_28852);

(statearr_28889_28935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (13))){
var inst_28813 = figwheel.client.heads_up.clear.call(null);
var state_28875__$1 = state_28875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28875__$1,(16),inst_28813);
} else {
if((state_val_28876 === (22))){
var inst_28834 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28835 = figwheel.client.heads_up.append_message.call(null,inst_28834);
var state_28875__$1 = state_28875;
var statearr_28890_28936 = state_28875__$1;
(statearr_28890_28936[(2)] = inst_28835);

(statearr_28890_28936[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (36))){
var inst_28861 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28891_28937 = state_28875__$1;
(statearr_28891_28937[(2)] = inst_28861);

(statearr_28891_28937[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (29))){
var inst_28845 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28892_28938 = state_28875__$1;
(statearr_28892_28938[(2)] = inst_28845);

(statearr_28892_28938[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (6))){
var inst_28794 = (state_28875[(7)]);
var state_28875__$1 = state_28875;
var statearr_28893_28939 = state_28875__$1;
(statearr_28893_28939[(2)] = inst_28794);

(statearr_28893_28939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (28))){
var inst_28841 = (state_28875[(2)]);
var inst_28842 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28843 = figwheel.client.heads_up.display_warning.call(null,inst_28842);
var state_28875__$1 = (function (){var statearr_28894 = state_28875;
(statearr_28894[(8)] = inst_28841);

return statearr_28894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28875__$1,(29),inst_28843);
} else {
if((state_val_28876 === (25))){
var inst_28839 = figwheel.client.heads_up.clear.call(null);
var state_28875__$1 = state_28875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28875__$1,(28),inst_28839);
} else {
if((state_val_28876 === (34))){
var inst_28856 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28875__$1 = state_28875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28875__$1,(37),inst_28856);
} else {
if((state_val_28876 === (17))){
var inst_28821 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28895_28940 = state_28875__$1;
(statearr_28895_28940[(2)] = inst_28821);

(statearr_28895_28940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (3))){
var inst_28811 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28875__$1 = state_28875;
if(cljs.core.truth_(inst_28811)){
var statearr_28896_28941 = state_28875__$1;
(statearr_28896_28941[(1)] = (13));

} else {
var statearr_28897_28942 = state_28875__$1;
(statearr_28897_28942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (12))){
var inst_28807 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28898_28943 = state_28875__$1;
(statearr_28898_28943[(2)] = inst_28807);

(statearr_28898_28943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (2))){
var inst_28794 = (state_28875[(7)]);
var inst_28794__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28875__$1 = (function (){var statearr_28899 = state_28875;
(statearr_28899[(7)] = inst_28794__$1);

return statearr_28899;
})();
if(cljs.core.truth_(inst_28794__$1)){
var statearr_28900_28944 = state_28875__$1;
(statearr_28900_28944[(1)] = (5));

} else {
var statearr_28901_28945 = state_28875__$1;
(statearr_28901_28945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (23))){
var inst_28837 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28875__$1 = state_28875;
if(cljs.core.truth_(inst_28837)){
var statearr_28902_28946 = state_28875__$1;
(statearr_28902_28946[(1)] = (25));

} else {
var statearr_28903_28947 = state_28875__$1;
(statearr_28903_28947[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (35))){
var state_28875__$1 = state_28875;
var statearr_28904_28948 = state_28875__$1;
(statearr_28904_28948[(2)] = null);

(statearr_28904_28948[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (19))){
var inst_28832 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28875__$1 = state_28875;
if(cljs.core.truth_(inst_28832)){
var statearr_28905_28949 = state_28875__$1;
(statearr_28905_28949[(1)] = (22));

} else {
var statearr_28906_28950 = state_28875__$1;
(statearr_28906_28950[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (11))){
var inst_28803 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28907_28951 = state_28875__$1;
(statearr_28907_28951[(2)] = inst_28803);

(statearr_28907_28951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (9))){
var inst_28805 = figwheel.client.heads_up.clear.call(null);
var state_28875__$1 = state_28875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28875__$1,(12),inst_28805);
} else {
if((state_val_28876 === (5))){
var inst_28796 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28875__$1 = state_28875;
var statearr_28908_28952 = state_28875__$1;
(statearr_28908_28952[(2)] = inst_28796);

(statearr_28908_28952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (14))){
var inst_28823 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28875__$1 = state_28875;
if(cljs.core.truth_(inst_28823)){
var statearr_28909_28953 = state_28875__$1;
(statearr_28909_28953[(1)] = (18));

} else {
var statearr_28910_28954 = state_28875__$1;
(statearr_28910_28954[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (26))){
var inst_28847 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28875__$1 = state_28875;
if(cljs.core.truth_(inst_28847)){
var statearr_28911_28955 = state_28875__$1;
(statearr_28911_28955[(1)] = (30));

} else {
var statearr_28912_28956 = state_28875__$1;
(statearr_28912_28956[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (16))){
var inst_28815 = (state_28875[(2)]);
var inst_28816 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28817 = figwheel.client.format_messages.call(null,inst_28816);
var inst_28818 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28819 = figwheel.client.heads_up.display_error.call(null,inst_28817,inst_28818);
var state_28875__$1 = (function (){var statearr_28913 = state_28875;
(statearr_28913[(9)] = inst_28815);

return statearr_28913;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28875__$1,(17),inst_28819);
} else {
if((state_val_28876 === (30))){
var inst_28849 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28850 = figwheel.client.heads_up.display_warning.call(null,inst_28849);
var state_28875__$1 = state_28875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28875__$1,(33),inst_28850);
} else {
if((state_val_28876 === (10))){
var inst_28809 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28914_28957 = state_28875__$1;
(statearr_28914_28957[(2)] = inst_28809);

(statearr_28914_28957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (18))){
var inst_28825 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28826 = figwheel.client.format_messages.call(null,inst_28825);
var inst_28827 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28828 = figwheel.client.heads_up.display_error.call(null,inst_28826,inst_28827);
var state_28875__$1 = state_28875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28875__$1,(21),inst_28828);
} else {
if((state_val_28876 === (37))){
var inst_28858 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28915_28958 = state_28875__$1;
(statearr_28915_28958[(2)] = inst_28858);

(statearr_28915_28958[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (8))){
var inst_28801 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28875__$1 = state_28875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28875__$1,(11),inst_28801);
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
});})(c__24257__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24145__auto__,c__24257__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto____0 = (function (){
var statearr_28919 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28919[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto__);

(statearr_28919[(1)] = (1));

return statearr_28919;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto____1 = (function (state_28875){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_28875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e28920){if((e28920 instanceof Object)){
var ex__24149__auto__ = e28920;
var statearr_28921_28959 = state_28875;
(statearr_28921_28959[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28960 = state_28875;
state_28875 = G__28960;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto__ = function(state_28875){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto____1.call(this,state_28875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto__,msg_hist,msg_names,msg))
})();
var state__24259__auto__ = (function (){var statearr_28922 = f__24258__auto__.call(null);
(statearr_28922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto__);

return statearr_28922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto__,msg_hist,msg_names,msg))
);

return c__24257__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24257__auto___29023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___29023,ch){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___29023,ch){
return (function (state_29006){
var state_val_29007 = (state_29006[(1)]);
if((state_val_29007 === (1))){
var state_29006__$1 = state_29006;
var statearr_29008_29024 = state_29006__$1;
(statearr_29008_29024[(2)] = null);

(statearr_29008_29024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (2))){
var state_29006__$1 = state_29006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29006__$1,(4),ch);
} else {
if((state_val_29007 === (3))){
var inst_29004 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29006__$1,inst_29004);
} else {
if((state_val_29007 === (4))){
var inst_28994 = (state_29006[(7)]);
var inst_28994__$1 = (state_29006[(2)]);
var state_29006__$1 = (function (){var statearr_29009 = state_29006;
(statearr_29009[(7)] = inst_28994__$1);

return statearr_29009;
})();
if(cljs.core.truth_(inst_28994__$1)){
var statearr_29010_29025 = state_29006__$1;
(statearr_29010_29025[(1)] = (5));

} else {
var statearr_29011_29026 = state_29006__$1;
(statearr_29011_29026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (5))){
var inst_28994 = (state_29006[(7)]);
var inst_28996 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28994);
var state_29006__$1 = state_29006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29006__$1,(8),inst_28996);
} else {
if((state_val_29007 === (6))){
var state_29006__$1 = state_29006;
var statearr_29012_29027 = state_29006__$1;
(statearr_29012_29027[(2)] = null);

(statearr_29012_29027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (7))){
var inst_29002 = (state_29006[(2)]);
var state_29006__$1 = state_29006;
var statearr_29013_29028 = state_29006__$1;
(statearr_29013_29028[(2)] = inst_29002);

(statearr_29013_29028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29007 === (8))){
var inst_28998 = (state_29006[(2)]);
var state_29006__$1 = (function (){var statearr_29014 = state_29006;
(statearr_29014[(8)] = inst_28998);

return statearr_29014;
})();
var statearr_29015_29029 = state_29006__$1;
(statearr_29015_29029[(2)] = null);

(statearr_29015_29029[(1)] = (2));


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
});})(c__24257__auto___29023,ch))
;
return ((function (switch__24145__auto__,c__24257__auto___29023,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24146__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24146__auto____0 = (function (){
var statearr_29019 = [null,null,null,null,null,null,null,null,null];
(statearr_29019[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24146__auto__);

(statearr_29019[(1)] = (1));

return statearr_29019;
});
var figwheel$client$heads_up_plugin_$_state_machine__24146__auto____1 = (function (state_29006){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_29006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e29020){if((e29020 instanceof Object)){
var ex__24149__auto__ = e29020;
var statearr_29021_29030 = state_29006;
(statearr_29021_29030[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29031 = state_29006;
state_29006 = G__29031;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24146__auto__ = function(state_29006){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24146__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24146__auto____1.call(this,state_29006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24146__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24146__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___29023,ch))
})();
var state__24259__auto__ = (function (){var statearr_29022 = f__24258__auto__.call(null);
(statearr_29022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___29023);

return statearr_29022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___29023,ch))
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
var c__24257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto__){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto__){
return (function (state_29052){
var state_val_29053 = (state_29052[(1)]);
if((state_val_29053 === (1))){
var inst_29047 = cljs.core.async.timeout.call(null,(3000));
var state_29052__$1 = state_29052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29052__$1,(2),inst_29047);
} else {
if((state_val_29053 === (2))){
var inst_29049 = (state_29052[(2)]);
var inst_29050 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29052__$1 = (function (){var statearr_29054 = state_29052;
(statearr_29054[(7)] = inst_29049);

return statearr_29054;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29052__$1,inst_29050);
} else {
return null;
}
}
});})(c__24257__auto__))
;
return ((function (switch__24145__auto__,c__24257__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24146__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24146__auto____0 = (function (){
var statearr_29058 = [null,null,null,null,null,null,null,null];
(statearr_29058[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24146__auto__);

(statearr_29058[(1)] = (1));

return statearr_29058;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24146__auto____1 = (function (state_29052){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_29052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e29059){if((e29059 instanceof Object)){
var ex__24149__auto__ = e29059;
var statearr_29060_29062 = state_29052;
(statearr_29060_29062[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29063 = state_29052;
state_29052 = G__29063;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24146__auto__ = function(state_29052){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24146__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24146__auto____1.call(this,state_29052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24146__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24146__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto__))
})();
var state__24259__auto__ = (function (){var statearr_29061 = f__24258__auto__.call(null);
(statearr_29061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto__);

return statearr_29061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto__))
);

return c__24257__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29064){
var map__29071 = p__29064;
var map__29071__$1 = ((((!((map__29071 == null)))?((((map__29071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29071):map__29071);
var ed = map__29071__$1;
var formatted_exception = cljs.core.get.call(null,map__29071__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29071__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29071__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29073_29077 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29074_29078 = null;
var count__29075_29079 = (0);
var i__29076_29080 = (0);
while(true){
if((i__29076_29080 < count__29075_29079)){
var msg_29081 = cljs.core._nth.call(null,chunk__29074_29078,i__29076_29080);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29081);

var G__29082 = seq__29073_29077;
var G__29083 = chunk__29074_29078;
var G__29084 = count__29075_29079;
var G__29085 = (i__29076_29080 + (1));
seq__29073_29077 = G__29082;
chunk__29074_29078 = G__29083;
count__29075_29079 = G__29084;
i__29076_29080 = G__29085;
continue;
} else {
var temp__4425__auto___29086 = cljs.core.seq.call(null,seq__29073_29077);
if(temp__4425__auto___29086){
var seq__29073_29087__$1 = temp__4425__auto___29086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29073_29087__$1)){
var c__17554__auto___29088 = cljs.core.chunk_first.call(null,seq__29073_29087__$1);
var G__29089 = cljs.core.chunk_rest.call(null,seq__29073_29087__$1);
var G__29090 = c__17554__auto___29088;
var G__29091 = cljs.core.count.call(null,c__17554__auto___29088);
var G__29092 = (0);
seq__29073_29077 = G__29089;
chunk__29074_29078 = G__29090;
count__29075_29079 = G__29091;
i__29076_29080 = G__29092;
continue;
} else {
var msg_29093 = cljs.core.first.call(null,seq__29073_29087__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29093);

var G__29094 = cljs.core.next.call(null,seq__29073_29087__$1);
var G__29095 = null;
var G__29096 = (0);
var G__29097 = (0);
seq__29073_29077 = G__29094;
chunk__29074_29078 = G__29095;
count__29075_29079 = G__29096;
i__29076_29080 = G__29097;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29098){
var map__29101 = p__29098;
var map__29101__$1 = ((((!((map__29101 == null)))?((((map__29101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29101):map__29101);
var w = map__29101__$1;
var message = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29109 = cljs.core.seq.call(null,plugins);
var chunk__29110 = null;
var count__29111 = (0);
var i__29112 = (0);
while(true){
if((i__29112 < count__29111)){
var vec__29113 = cljs.core._nth.call(null,chunk__29110,i__29112);
var k = cljs.core.nth.call(null,vec__29113,(0),null);
var plugin = cljs.core.nth.call(null,vec__29113,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29115 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29109,chunk__29110,count__29111,i__29112,pl_29115,vec__29113,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29115.call(null,msg_hist);
});})(seq__29109,chunk__29110,count__29111,i__29112,pl_29115,vec__29113,k,plugin))
);
} else {
}

var G__29116 = seq__29109;
var G__29117 = chunk__29110;
var G__29118 = count__29111;
var G__29119 = (i__29112 + (1));
seq__29109 = G__29116;
chunk__29110 = G__29117;
count__29111 = G__29118;
i__29112 = G__29119;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29109);
if(temp__4425__auto__){
var seq__29109__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29109__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__29109__$1);
var G__29120 = cljs.core.chunk_rest.call(null,seq__29109__$1);
var G__29121 = c__17554__auto__;
var G__29122 = cljs.core.count.call(null,c__17554__auto__);
var G__29123 = (0);
seq__29109 = G__29120;
chunk__29110 = G__29121;
count__29111 = G__29122;
i__29112 = G__29123;
continue;
} else {
var vec__29114 = cljs.core.first.call(null,seq__29109__$1);
var k = cljs.core.nth.call(null,vec__29114,(0),null);
var plugin = cljs.core.nth.call(null,vec__29114,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29124 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29109,chunk__29110,count__29111,i__29112,pl_29124,vec__29114,k,plugin,seq__29109__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29124.call(null,msg_hist);
});})(seq__29109,chunk__29110,count__29111,i__29112,pl_29124,vec__29114,k,plugin,seq__29109__$1,temp__4425__auto__))
);
} else {
}

var G__29125 = cljs.core.next.call(null,seq__29109__$1);
var G__29126 = null;
var G__29127 = (0);
var G__29128 = (0);
seq__29109 = G__29125;
chunk__29110 = G__29126;
count__29111 = G__29127;
i__29112 = G__29128;
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
var args29129 = [];
var len__17809__auto___29132 = arguments.length;
var i__17810__auto___29133 = (0);
while(true){
if((i__17810__auto___29133 < len__17809__auto___29132)){
args29129.push((arguments[i__17810__auto___29133]));

var G__29134 = (i__17810__auto___29133 + (1));
i__17810__auto___29133 = G__29134;
continue;
} else {
}
break;
}

var G__29131 = args29129.length;
switch (G__29131) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29129.length)].join('')));

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
var len__17809__auto___29140 = arguments.length;
var i__17810__auto___29141 = (0);
while(true){
if((i__17810__auto___29141 < len__17809__auto___29140)){
args__17816__auto__.push((arguments[i__17810__auto___29141]));

var G__29142 = (i__17810__auto___29141 + (1));
i__17810__auto___29141 = G__29142;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29137){
var map__29138 = p__29137;
var map__29138__$1 = ((((!((map__29138 == null)))?((((map__29138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29138):map__29138);
var opts = map__29138__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29136){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29136));
});

//# sourceMappingURL=client.js.map?rel=1452772208864