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
var pred__28434 = cljs.core._EQ_;
var expr__28435 = (function (){var or__16751__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28434.call(null,"true",expr__28435))){
return true;
} else {
if(cljs.core.truth_(pred__28434.call(null,"false",expr__28435))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28435)].join('')));
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
var G__28437__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28438__i = 0, G__28438__a = new Array(arguments.length -  0);
while (G__28438__i < G__28438__a.length) {G__28438__a[G__28438__i] = arguments[G__28438__i + 0]; ++G__28438__i;}
  args = new cljs.core.IndexedSeq(G__28438__a,0);
} 
return G__28437__delegate.call(this,args);};
G__28437.cljs$lang$maxFixedArity = 0;
G__28437.cljs$lang$applyTo = (function (arglist__28439){
var args = cljs.core.seq(arglist__28439);
return G__28437__delegate(args);
});
G__28437.cljs$core$IFn$_invoke$arity$variadic = G__28437__delegate;
return G__28437;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28440){
var map__28443 = p__28440;
var map__28443__$1 = ((((!((map__28443 == null)))?((((map__28443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28443):map__28443);
var message = cljs.core.get.call(null,map__28443__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28443__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24273__auto___28605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___28605,ch){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___28605,ch){
return (function (state_28574){
var state_val_28575 = (state_28574[(1)]);
if((state_val_28575 === (7))){
var inst_28570 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28576_28606 = state_28574__$1;
(statearr_28576_28606[(2)] = inst_28570);

(statearr_28576_28606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (1))){
var state_28574__$1 = state_28574;
var statearr_28577_28607 = state_28574__$1;
(statearr_28577_28607[(2)] = null);

(statearr_28577_28607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (4))){
var inst_28527 = (state_28574[(7)]);
var inst_28527__$1 = (state_28574[(2)]);
var state_28574__$1 = (function (){var statearr_28578 = state_28574;
(statearr_28578[(7)] = inst_28527__$1);

return statearr_28578;
})();
if(cljs.core.truth_(inst_28527__$1)){
var statearr_28579_28608 = state_28574__$1;
(statearr_28579_28608[(1)] = (5));

} else {
var statearr_28580_28609 = state_28574__$1;
(statearr_28580_28609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (15))){
var inst_28534 = (state_28574[(8)]);
var inst_28549 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28534);
var inst_28550 = cljs.core.first.call(null,inst_28549);
var inst_28551 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28550);
var inst_28552 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28551)].join('');
var inst_28553 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28552);
var state_28574__$1 = state_28574;
var statearr_28581_28610 = state_28574__$1;
(statearr_28581_28610[(2)] = inst_28553);

(statearr_28581_28610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (13))){
var inst_28558 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28582_28611 = state_28574__$1;
(statearr_28582_28611[(2)] = inst_28558);

(statearr_28582_28611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (6))){
var state_28574__$1 = state_28574;
var statearr_28583_28612 = state_28574__$1;
(statearr_28583_28612[(2)] = null);

(statearr_28583_28612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (17))){
var inst_28556 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28584_28613 = state_28574__$1;
(statearr_28584_28613[(2)] = inst_28556);

(statearr_28584_28613[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (3))){
var inst_28572 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28574__$1,inst_28572);
} else {
if((state_val_28575 === (12))){
var inst_28533 = (state_28574[(9)]);
var inst_28547 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28533,opts);
var state_28574__$1 = state_28574;
if(cljs.core.truth_(inst_28547)){
var statearr_28585_28614 = state_28574__$1;
(statearr_28585_28614[(1)] = (15));

} else {
var statearr_28586_28615 = state_28574__$1;
(statearr_28586_28615[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (2))){
var state_28574__$1 = state_28574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28574__$1,(4),ch);
} else {
if((state_val_28575 === (11))){
var inst_28534 = (state_28574[(8)]);
var inst_28539 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28540 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28534);
var inst_28541 = cljs.core.async.timeout.call(null,(1000));
var inst_28542 = [inst_28540,inst_28541];
var inst_28543 = (new cljs.core.PersistentVector(null,2,(5),inst_28539,inst_28542,null));
var state_28574__$1 = state_28574;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28574__$1,(14),inst_28543);
} else {
if((state_val_28575 === (9))){
var inst_28534 = (state_28574[(8)]);
var inst_28560 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28561 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28534);
var inst_28562 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28561);
var inst_28563 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28562)].join('');
var inst_28564 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28563);
var state_28574__$1 = (function (){var statearr_28587 = state_28574;
(statearr_28587[(10)] = inst_28560);

return statearr_28587;
})();
var statearr_28588_28616 = state_28574__$1;
(statearr_28588_28616[(2)] = inst_28564);

(statearr_28588_28616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (5))){
var inst_28527 = (state_28574[(7)]);
var inst_28529 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28530 = (new cljs.core.PersistentArrayMap(null,2,inst_28529,null));
var inst_28531 = (new cljs.core.PersistentHashSet(null,inst_28530,null));
var inst_28532 = figwheel.client.focus_msgs.call(null,inst_28531,inst_28527);
var inst_28533 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28532);
var inst_28534 = cljs.core.first.call(null,inst_28532);
var inst_28535 = figwheel.client.autoload_QMARK_.call(null);
var state_28574__$1 = (function (){var statearr_28589 = state_28574;
(statearr_28589[(8)] = inst_28534);

(statearr_28589[(9)] = inst_28533);

return statearr_28589;
})();
if(cljs.core.truth_(inst_28535)){
var statearr_28590_28617 = state_28574__$1;
(statearr_28590_28617[(1)] = (8));

} else {
var statearr_28591_28618 = state_28574__$1;
(statearr_28591_28618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (14))){
var inst_28545 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28592_28619 = state_28574__$1;
(statearr_28592_28619[(2)] = inst_28545);

(statearr_28592_28619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (16))){
var state_28574__$1 = state_28574;
var statearr_28593_28620 = state_28574__$1;
(statearr_28593_28620[(2)] = null);

(statearr_28593_28620[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (10))){
var inst_28566 = (state_28574[(2)]);
var state_28574__$1 = (function (){var statearr_28594 = state_28574;
(statearr_28594[(11)] = inst_28566);

return statearr_28594;
})();
var statearr_28595_28621 = state_28574__$1;
(statearr_28595_28621[(2)] = null);

(statearr_28595_28621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (8))){
var inst_28533 = (state_28574[(9)]);
var inst_28537 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28533,opts);
var state_28574__$1 = state_28574;
if(cljs.core.truth_(inst_28537)){
var statearr_28596_28622 = state_28574__$1;
(statearr_28596_28622[(1)] = (11));

} else {
var statearr_28597_28623 = state_28574__$1;
(statearr_28597_28623[(1)] = (12));

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
});})(c__24273__auto___28605,ch))
;
return ((function (switch__24161__auto__,c__24273__auto___28605,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24162__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24162__auto____0 = (function (){
var statearr_28601 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28601[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24162__auto__);

(statearr_28601[(1)] = (1));

return statearr_28601;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24162__auto____1 = (function (state_28574){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_28574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e28602){if((e28602 instanceof Object)){
var ex__24165__auto__ = e28602;
var statearr_28603_28624 = state_28574;
(statearr_28603_28624[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28625 = state_28574;
state_28574 = G__28625;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24162__auto__ = function(state_28574){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24162__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24162__auto____1.call(this,state_28574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24162__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24162__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___28605,ch))
})();
var state__24275__auto__ = (function (){var statearr_28604 = f__24274__auto__.call(null);
(statearr_28604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___28605);

return statearr_28604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___28605,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28626_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28626_SHARP_));
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
var base_path_28633 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28633){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28631 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28632 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28631,_STAR_print_newline_STAR_28632,base_path_28633){
return (function() { 
var G__28634__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28635__i = 0, G__28635__a = new Array(arguments.length -  0);
while (G__28635__i < G__28635__a.length) {G__28635__a[G__28635__i] = arguments[G__28635__i + 0]; ++G__28635__i;}
  args = new cljs.core.IndexedSeq(G__28635__a,0);
} 
return G__28634__delegate.call(this,args);};
G__28634.cljs$lang$maxFixedArity = 0;
G__28634.cljs$lang$applyTo = (function (arglist__28636){
var args = cljs.core.seq(arglist__28636);
return G__28634__delegate(args);
});
G__28634.cljs$core$IFn$_invoke$arity$variadic = G__28634__delegate;
return G__28634;
})()
;})(_STAR_print_fn_STAR_28631,_STAR_print_newline_STAR_28632,base_path_28633))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28632;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28631;
}}catch (e28630){if((e28630 instanceof Error)){
var e = e28630;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28633], null));
} else {
var e = e28630;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28633))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28637){
var map__28644 = p__28637;
var map__28644__$1 = ((((!((map__28644 == null)))?((((map__28644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28644):map__28644);
var opts = map__28644__$1;
var build_id = cljs.core.get.call(null,map__28644__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28644,map__28644__$1,opts,build_id){
return (function (p__28646){
var vec__28647 = p__28646;
var map__28648 = cljs.core.nth.call(null,vec__28647,(0),null);
var map__28648__$1 = ((((!((map__28648 == null)))?((((map__28648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28648):map__28648);
var msg = map__28648__$1;
var msg_name = cljs.core.get.call(null,map__28648__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28647,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28647,map__28648,map__28648__$1,msg,msg_name,_,map__28644,map__28644__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28647,map__28648,map__28648__$1,msg,msg_name,_,map__28644,map__28644__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28644,map__28644__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28654){
var vec__28655 = p__28654;
var map__28656 = cljs.core.nth.call(null,vec__28655,(0),null);
var map__28656__$1 = ((((!((map__28656 == null)))?((((map__28656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28656):map__28656);
var msg = map__28656__$1;
var msg_name = cljs.core.get.call(null,map__28656__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28655,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28658){
var map__28668 = p__28658;
var map__28668__$1 = ((((!((map__28668 == null)))?((((map__28668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28668):map__28668);
var on_compile_warning = cljs.core.get.call(null,map__28668__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28668__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28668,map__28668__$1,on_compile_warning,on_compile_fail){
return (function (p__28670){
var vec__28671 = p__28670;
var map__28672 = cljs.core.nth.call(null,vec__28671,(0),null);
var map__28672__$1 = ((((!((map__28672 == null)))?((((map__28672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28672):map__28672);
var msg = map__28672__$1;
var msg_name = cljs.core.get.call(null,map__28672__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28671,(1));
var pred__28674 = cljs.core._EQ_;
var expr__28675 = msg_name;
if(cljs.core.truth_(pred__28674.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28675))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28674.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28675))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28668,map__28668__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto__,msg_hist,msg_names,msg){
return (function (state_28891){
var state_val_28892 = (state_28891[(1)]);
if((state_val_28892 === (7))){
var inst_28815 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28815)){
var statearr_28893_28939 = state_28891__$1;
(statearr_28893_28939[(1)] = (8));

} else {
var statearr_28894_28940 = state_28891__$1;
(statearr_28894_28940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (20))){
var inst_28885 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28895_28941 = state_28891__$1;
(statearr_28895_28941[(2)] = inst_28885);

(statearr_28895_28941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (27))){
var inst_28881 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28896_28942 = state_28891__$1;
(statearr_28896_28942[(2)] = inst_28881);

(statearr_28896_28942[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (1))){
var inst_28808 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28808)){
var statearr_28897_28943 = state_28891__$1;
(statearr_28897_28943[(1)] = (2));

} else {
var statearr_28898_28944 = state_28891__$1;
(statearr_28898_28944[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (24))){
var inst_28883 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28899_28945 = state_28891__$1;
(statearr_28899_28945[(2)] = inst_28883);

(statearr_28899_28945[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (4))){
var inst_28889 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28891__$1,inst_28889);
} else {
if((state_val_28892 === (15))){
var inst_28887 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28900_28946 = state_28891__$1;
(statearr_28900_28946[(2)] = inst_28887);

(statearr_28900_28946[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (21))){
var inst_28846 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28901_28947 = state_28891__$1;
(statearr_28901_28947[(2)] = inst_28846);

(statearr_28901_28947[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (31))){
var inst_28870 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28870)){
var statearr_28902_28948 = state_28891__$1;
(statearr_28902_28948[(1)] = (34));

} else {
var statearr_28903_28949 = state_28891__$1;
(statearr_28903_28949[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (32))){
var inst_28879 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28904_28950 = state_28891__$1;
(statearr_28904_28950[(2)] = inst_28879);

(statearr_28904_28950[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (33))){
var inst_28868 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28905_28951 = state_28891__$1;
(statearr_28905_28951[(2)] = inst_28868);

(statearr_28905_28951[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (13))){
var inst_28829 = figwheel.client.heads_up.clear.call(null);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(16),inst_28829);
} else {
if((state_val_28892 === (22))){
var inst_28850 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28851 = figwheel.client.heads_up.append_message.call(null,inst_28850);
var state_28891__$1 = state_28891;
var statearr_28906_28952 = state_28891__$1;
(statearr_28906_28952[(2)] = inst_28851);

(statearr_28906_28952[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (36))){
var inst_28877 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28907_28953 = state_28891__$1;
(statearr_28907_28953[(2)] = inst_28877);

(statearr_28907_28953[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (29))){
var inst_28861 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28908_28954 = state_28891__$1;
(statearr_28908_28954[(2)] = inst_28861);

(statearr_28908_28954[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (6))){
var inst_28810 = (state_28891[(7)]);
var state_28891__$1 = state_28891;
var statearr_28909_28955 = state_28891__$1;
(statearr_28909_28955[(2)] = inst_28810);

(statearr_28909_28955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (28))){
var inst_28857 = (state_28891[(2)]);
var inst_28858 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28859 = figwheel.client.heads_up.display_warning.call(null,inst_28858);
var state_28891__$1 = (function (){var statearr_28910 = state_28891;
(statearr_28910[(8)] = inst_28857);

return statearr_28910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(29),inst_28859);
} else {
if((state_val_28892 === (25))){
var inst_28855 = figwheel.client.heads_up.clear.call(null);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(28),inst_28855);
} else {
if((state_val_28892 === (34))){
var inst_28872 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(37),inst_28872);
} else {
if((state_val_28892 === (17))){
var inst_28837 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28911_28956 = state_28891__$1;
(statearr_28911_28956[(2)] = inst_28837);

(statearr_28911_28956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (3))){
var inst_28827 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28827)){
var statearr_28912_28957 = state_28891__$1;
(statearr_28912_28957[(1)] = (13));

} else {
var statearr_28913_28958 = state_28891__$1;
(statearr_28913_28958[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (12))){
var inst_28823 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28914_28959 = state_28891__$1;
(statearr_28914_28959[(2)] = inst_28823);

(statearr_28914_28959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (2))){
var inst_28810 = (state_28891[(7)]);
var inst_28810__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28891__$1 = (function (){var statearr_28915 = state_28891;
(statearr_28915[(7)] = inst_28810__$1);

return statearr_28915;
})();
if(cljs.core.truth_(inst_28810__$1)){
var statearr_28916_28960 = state_28891__$1;
(statearr_28916_28960[(1)] = (5));

} else {
var statearr_28917_28961 = state_28891__$1;
(statearr_28917_28961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (23))){
var inst_28853 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28853)){
var statearr_28918_28962 = state_28891__$1;
(statearr_28918_28962[(1)] = (25));

} else {
var statearr_28919_28963 = state_28891__$1;
(statearr_28919_28963[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (35))){
var state_28891__$1 = state_28891;
var statearr_28920_28964 = state_28891__$1;
(statearr_28920_28964[(2)] = null);

(statearr_28920_28964[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (19))){
var inst_28848 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28848)){
var statearr_28921_28965 = state_28891__$1;
(statearr_28921_28965[(1)] = (22));

} else {
var statearr_28922_28966 = state_28891__$1;
(statearr_28922_28966[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (11))){
var inst_28819 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28923_28967 = state_28891__$1;
(statearr_28923_28967[(2)] = inst_28819);

(statearr_28923_28967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (9))){
var inst_28821 = figwheel.client.heads_up.clear.call(null);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(12),inst_28821);
} else {
if((state_val_28892 === (5))){
var inst_28812 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28891__$1 = state_28891;
var statearr_28924_28968 = state_28891__$1;
(statearr_28924_28968[(2)] = inst_28812);

(statearr_28924_28968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (14))){
var inst_28839 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28839)){
var statearr_28925_28969 = state_28891__$1;
(statearr_28925_28969[(1)] = (18));

} else {
var statearr_28926_28970 = state_28891__$1;
(statearr_28926_28970[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (26))){
var inst_28863 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28891__$1 = state_28891;
if(cljs.core.truth_(inst_28863)){
var statearr_28927_28971 = state_28891__$1;
(statearr_28927_28971[(1)] = (30));

} else {
var statearr_28928_28972 = state_28891__$1;
(statearr_28928_28972[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (16))){
var inst_28831 = (state_28891[(2)]);
var inst_28832 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28833 = figwheel.client.format_messages.call(null,inst_28832);
var inst_28834 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28835 = figwheel.client.heads_up.display_error.call(null,inst_28833,inst_28834);
var state_28891__$1 = (function (){var statearr_28929 = state_28891;
(statearr_28929[(9)] = inst_28831);

return statearr_28929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(17),inst_28835);
} else {
if((state_val_28892 === (30))){
var inst_28865 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28866 = figwheel.client.heads_up.display_warning.call(null,inst_28865);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(33),inst_28866);
} else {
if((state_val_28892 === (10))){
var inst_28825 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28930_28973 = state_28891__$1;
(statearr_28930_28973[(2)] = inst_28825);

(statearr_28930_28973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (18))){
var inst_28841 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28842 = figwheel.client.format_messages.call(null,inst_28841);
var inst_28843 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28844 = figwheel.client.heads_up.display_error.call(null,inst_28842,inst_28843);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(21),inst_28844);
} else {
if((state_val_28892 === (37))){
var inst_28874 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28931_28974 = state_28891__$1;
(statearr_28931_28974[(2)] = inst_28874);

(statearr_28931_28974[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (8))){
var inst_28817 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(11),inst_28817);
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
});})(c__24273__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24161__auto__,c__24273__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto____0 = (function (){
var statearr_28935 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28935[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto__);

(statearr_28935[(1)] = (1));

return statearr_28935;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto____1 = (function (state_28891){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_28891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e28936){if((e28936 instanceof Object)){
var ex__24165__auto__ = e28936;
var statearr_28937_28975 = state_28891;
(statearr_28937_28975[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28976 = state_28891;
state_28891 = G__28976;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto__ = function(state_28891){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto____1.call(this,state_28891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto__,msg_hist,msg_names,msg))
})();
var state__24275__auto__ = (function (){var statearr_28938 = f__24274__auto__.call(null);
(statearr_28938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto__);

return statearr_28938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto__,msg_hist,msg_names,msg))
);

return c__24273__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24273__auto___29039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___29039,ch){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___29039,ch){
return (function (state_29022){
var state_val_29023 = (state_29022[(1)]);
if((state_val_29023 === (1))){
var state_29022__$1 = state_29022;
var statearr_29024_29040 = state_29022__$1;
(statearr_29024_29040[(2)] = null);

(statearr_29024_29040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29023 === (2))){
var state_29022__$1 = state_29022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29022__$1,(4),ch);
} else {
if((state_val_29023 === (3))){
var inst_29020 = (state_29022[(2)]);
var state_29022__$1 = state_29022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29022__$1,inst_29020);
} else {
if((state_val_29023 === (4))){
var inst_29010 = (state_29022[(7)]);
var inst_29010__$1 = (state_29022[(2)]);
var state_29022__$1 = (function (){var statearr_29025 = state_29022;
(statearr_29025[(7)] = inst_29010__$1);

return statearr_29025;
})();
if(cljs.core.truth_(inst_29010__$1)){
var statearr_29026_29041 = state_29022__$1;
(statearr_29026_29041[(1)] = (5));

} else {
var statearr_29027_29042 = state_29022__$1;
(statearr_29027_29042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29023 === (5))){
var inst_29010 = (state_29022[(7)]);
var inst_29012 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29010);
var state_29022__$1 = state_29022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29022__$1,(8),inst_29012);
} else {
if((state_val_29023 === (6))){
var state_29022__$1 = state_29022;
var statearr_29028_29043 = state_29022__$1;
(statearr_29028_29043[(2)] = null);

(statearr_29028_29043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29023 === (7))){
var inst_29018 = (state_29022[(2)]);
var state_29022__$1 = state_29022;
var statearr_29029_29044 = state_29022__$1;
(statearr_29029_29044[(2)] = inst_29018);

(statearr_29029_29044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29023 === (8))){
var inst_29014 = (state_29022[(2)]);
var state_29022__$1 = (function (){var statearr_29030 = state_29022;
(statearr_29030[(8)] = inst_29014);

return statearr_29030;
})();
var statearr_29031_29045 = state_29022__$1;
(statearr_29031_29045[(2)] = null);

(statearr_29031_29045[(1)] = (2));


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
});})(c__24273__auto___29039,ch))
;
return ((function (switch__24161__auto__,c__24273__auto___29039,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24162__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24162__auto____0 = (function (){
var statearr_29035 = [null,null,null,null,null,null,null,null,null];
(statearr_29035[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24162__auto__);

(statearr_29035[(1)] = (1));

return statearr_29035;
});
var figwheel$client$heads_up_plugin_$_state_machine__24162__auto____1 = (function (state_29022){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_29022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e29036){if((e29036 instanceof Object)){
var ex__24165__auto__ = e29036;
var statearr_29037_29046 = state_29022;
(statearr_29037_29046[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29047 = state_29022;
state_29022 = G__29047;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24162__auto__ = function(state_29022){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24162__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24162__auto____1.call(this,state_29022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24162__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24162__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___29039,ch))
})();
var state__24275__auto__ = (function (){var statearr_29038 = f__24274__auto__.call(null);
(statearr_29038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___29039);

return statearr_29038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___29039,ch))
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
var c__24273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto__){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto__){
return (function (state_29068){
var state_val_29069 = (state_29068[(1)]);
if((state_val_29069 === (1))){
var inst_29063 = cljs.core.async.timeout.call(null,(3000));
var state_29068__$1 = state_29068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29068__$1,(2),inst_29063);
} else {
if((state_val_29069 === (2))){
var inst_29065 = (state_29068[(2)]);
var inst_29066 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29068__$1 = (function (){var statearr_29070 = state_29068;
(statearr_29070[(7)] = inst_29065);

return statearr_29070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29068__$1,inst_29066);
} else {
return null;
}
}
});})(c__24273__auto__))
;
return ((function (switch__24161__auto__,c__24273__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24162__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24162__auto____0 = (function (){
var statearr_29074 = [null,null,null,null,null,null,null,null];
(statearr_29074[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24162__auto__);

(statearr_29074[(1)] = (1));

return statearr_29074;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24162__auto____1 = (function (state_29068){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_29068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e29075){if((e29075 instanceof Object)){
var ex__24165__auto__ = e29075;
var statearr_29076_29078 = state_29068;
(statearr_29076_29078[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29079 = state_29068;
state_29068 = G__29079;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24162__auto__ = function(state_29068){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24162__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24162__auto____1.call(this,state_29068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24162__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24162__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto__))
})();
var state__24275__auto__ = (function (){var statearr_29077 = f__24274__auto__.call(null);
(statearr_29077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto__);

return statearr_29077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto__))
);

return c__24273__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29080){
var map__29087 = p__29080;
var map__29087__$1 = ((((!((map__29087 == null)))?((((map__29087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29087):map__29087);
var ed = map__29087__$1;
var formatted_exception = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29089_29093 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29090_29094 = null;
var count__29091_29095 = (0);
var i__29092_29096 = (0);
while(true){
if((i__29092_29096 < count__29091_29095)){
var msg_29097 = cljs.core._nth.call(null,chunk__29090_29094,i__29092_29096);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29097);

var G__29098 = seq__29089_29093;
var G__29099 = chunk__29090_29094;
var G__29100 = count__29091_29095;
var G__29101 = (i__29092_29096 + (1));
seq__29089_29093 = G__29098;
chunk__29090_29094 = G__29099;
count__29091_29095 = G__29100;
i__29092_29096 = G__29101;
continue;
} else {
var temp__4425__auto___29102 = cljs.core.seq.call(null,seq__29089_29093);
if(temp__4425__auto___29102){
var seq__29089_29103__$1 = temp__4425__auto___29102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29089_29103__$1)){
var c__17555__auto___29104 = cljs.core.chunk_first.call(null,seq__29089_29103__$1);
var G__29105 = cljs.core.chunk_rest.call(null,seq__29089_29103__$1);
var G__29106 = c__17555__auto___29104;
var G__29107 = cljs.core.count.call(null,c__17555__auto___29104);
var G__29108 = (0);
seq__29089_29093 = G__29105;
chunk__29090_29094 = G__29106;
count__29091_29095 = G__29107;
i__29092_29096 = G__29108;
continue;
} else {
var msg_29109 = cljs.core.first.call(null,seq__29089_29103__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29109);

var G__29110 = cljs.core.next.call(null,seq__29089_29103__$1);
var G__29111 = null;
var G__29112 = (0);
var G__29113 = (0);
seq__29089_29093 = G__29110;
chunk__29090_29094 = G__29111;
count__29091_29095 = G__29112;
i__29092_29096 = G__29113;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29114){
var map__29117 = p__29114;
var map__29117__$1 = ((((!((map__29117 == null)))?((((map__29117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29117):map__29117);
var w = map__29117__$1;
var message = cljs.core.get.call(null,map__29117__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29125 = cljs.core.seq.call(null,plugins);
var chunk__29126 = null;
var count__29127 = (0);
var i__29128 = (0);
while(true){
if((i__29128 < count__29127)){
var vec__29129 = cljs.core._nth.call(null,chunk__29126,i__29128);
var k = cljs.core.nth.call(null,vec__29129,(0),null);
var plugin = cljs.core.nth.call(null,vec__29129,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29131 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29125,chunk__29126,count__29127,i__29128,pl_29131,vec__29129,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29131.call(null,msg_hist);
});})(seq__29125,chunk__29126,count__29127,i__29128,pl_29131,vec__29129,k,plugin))
);
} else {
}

var G__29132 = seq__29125;
var G__29133 = chunk__29126;
var G__29134 = count__29127;
var G__29135 = (i__29128 + (1));
seq__29125 = G__29132;
chunk__29126 = G__29133;
count__29127 = G__29134;
i__29128 = G__29135;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29125);
if(temp__4425__auto__){
var seq__29125__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29125__$1)){
var c__17555__auto__ = cljs.core.chunk_first.call(null,seq__29125__$1);
var G__29136 = cljs.core.chunk_rest.call(null,seq__29125__$1);
var G__29137 = c__17555__auto__;
var G__29138 = cljs.core.count.call(null,c__17555__auto__);
var G__29139 = (0);
seq__29125 = G__29136;
chunk__29126 = G__29137;
count__29127 = G__29138;
i__29128 = G__29139;
continue;
} else {
var vec__29130 = cljs.core.first.call(null,seq__29125__$1);
var k = cljs.core.nth.call(null,vec__29130,(0),null);
var plugin = cljs.core.nth.call(null,vec__29130,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29140 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29125,chunk__29126,count__29127,i__29128,pl_29140,vec__29130,k,plugin,seq__29125__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29140.call(null,msg_hist);
});})(seq__29125,chunk__29126,count__29127,i__29128,pl_29140,vec__29130,k,plugin,seq__29125__$1,temp__4425__auto__))
);
} else {
}

var G__29141 = cljs.core.next.call(null,seq__29125__$1);
var G__29142 = null;
var G__29143 = (0);
var G__29144 = (0);
seq__29125 = G__29141;
chunk__29126 = G__29142;
count__29127 = G__29143;
i__29128 = G__29144;
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
var args29145 = [];
var len__17810__auto___29148 = arguments.length;
var i__17811__auto___29149 = (0);
while(true){
if((i__17811__auto___29149 < len__17810__auto___29148)){
args29145.push((arguments[i__17811__auto___29149]));

var G__29150 = (i__17811__auto___29149 + (1));
i__17811__auto___29149 = G__29150;
continue;
} else {
}
break;
}

var G__29147 = args29145.length;
switch (G__29147) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29145.length)].join('')));

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
var args__17817__auto__ = [];
var len__17810__auto___29156 = arguments.length;
var i__17811__auto___29157 = (0);
while(true){
if((i__17811__auto___29157 < len__17810__auto___29156)){
args__17817__auto__.push((arguments[i__17811__auto___29157]));

var G__29158 = (i__17811__auto___29157 + (1));
i__17811__auto___29157 = G__29158;
continue;
} else {
}
break;
}

var argseq__17818__auto__ = ((((0) < args__17817__auto__.length))?(new cljs.core.IndexedSeq(args__17817__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17818__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29153){
var map__29154 = p__29153;
var map__29154__$1 = ((((!((map__29154 == null)))?((((map__29154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29154):map__29154);
var opts = map__29154__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29152){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29152));
});

//# sourceMappingURL=client.js.map?rel=1449079003021