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
var pred__31638 = cljs.core._EQ_;
var expr__31639 = (function (){var or__20190__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__20190__auto__)){
return or__20190__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31638.call(null,"true",expr__31639))){
return true;
} else {
if(cljs.core.truth_(pred__31638.call(null,"false",expr__31639))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31639)].join('')));
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
var G__31641__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31642__i = 0, G__31642__a = new Array(arguments.length -  0);
while (G__31642__i < G__31642__a.length) {G__31642__a[G__31642__i] = arguments[G__31642__i + 0]; ++G__31642__i;}
  args = new cljs.core.IndexedSeq(G__31642__a,0);
} 
return G__31641__delegate.call(this,args);};
G__31641.cljs$lang$maxFixedArity = 0;
G__31641.cljs$lang$applyTo = (function (arglist__31643){
var args = cljs.core.seq(arglist__31643);
return G__31641__delegate(args);
});
G__31641.cljs$core$IFn$_invoke$arity$variadic = G__31641__delegate;
return G__31641;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31644){
var map__31647 = p__31644;
var map__31647__$1 = ((((!((map__31647 == null)))?((((map__31647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31647):map__31647);
var message = cljs.core.get.call(null,map__31647__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31647__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20190__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20190__auto__)){
return or__20190__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20178__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20178__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20178__auto__;
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
var c__27477__auto___31809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___31809,ch){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___31809,ch){
return (function (state_31778){
var state_val_31779 = (state_31778[(1)]);
if((state_val_31779 === (7))){
var inst_31774 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31780_31810 = state_31778__$1;
(statearr_31780_31810[(2)] = inst_31774);

(statearr_31780_31810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (1))){
var state_31778__$1 = state_31778;
var statearr_31781_31811 = state_31778__$1;
(statearr_31781_31811[(2)] = null);

(statearr_31781_31811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (4))){
var inst_31731 = (state_31778[(7)]);
var inst_31731__$1 = (state_31778[(2)]);
var state_31778__$1 = (function (){var statearr_31782 = state_31778;
(statearr_31782[(7)] = inst_31731__$1);

return statearr_31782;
})();
if(cljs.core.truth_(inst_31731__$1)){
var statearr_31783_31812 = state_31778__$1;
(statearr_31783_31812[(1)] = (5));

} else {
var statearr_31784_31813 = state_31778__$1;
(statearr_31784_31813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (15))){
var inst_31738 = (state_31778[(8)]);
var inst_31753 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31738);
var inst_31754 = cljs.core.first.call(null,inst_31753);
var inst_31755 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31754);
var inst_31756 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31755)].join('');
var inst_31757 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31756);
var state_31778__$1 = state_31778;
var statearr_31785_31814 = state_31778__$1;
(statearr_31785_31814[(2)] = inst_31757);

(statearr_31785_31814[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (13))){
var inst_31762 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31786_31815 = state_31778__$1;
(statearr_31786_31815[(2)] = inst_31762);

(statearr_31786_31815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (6))){
var state_31778__$1 = state_31778;
var statearr_31787_31816 = state_31778__$1;
(statearr_31787_31816[(2)] = null);

(statearr_31787_31816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (17))){
var inst_31760 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31788_31817 = state_31778__$1;
(statearr_31788_31817[(2)] = inst_31760);

(statearr_31788_31817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (3))){
var inst_31776 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31778__$1,inst_31776);
} else {
if((state_val_31779 === (12))){
var inst_31737 = (state_31778[(9)]);
var inst_31751 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31737,opts);
var state_31778__$1 = state_31778;
if(cljs.core.truth_(inst_31751)){
var statearr_31789_31818 = state_31778__$1;
(statearr_31789_31818[(1)] = (15));

} else {
var statearr_31790_31819 = state_31778__$1;
(statearr_31790_31819[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (2))){
var state_31778__$1 = state_31778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31778__$1,(4),ch);
} else {
if((state_val_31779 === (11))){
var inst_31738 = (state_31778[(8)]);
var inst_31743 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31744 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31738);
var inst_31745 = cljs.core.async.timeout.call(null,(1000));
var inst_31746 = [inst_31744,inst_31745];
var inst_31747 = (new cljs.core.PersistentVector(null,2,(5),inst_31743,inst_31746,null));
var state_31778__$1 = state_31778;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31778__$1,(14),inst_31747);
} else {
if((state_val_31779 === (9))){
var inst_31738 = (state_31778[(8)]);
var inst_31764 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31765 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31738);
var inst_31766 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31765);
var inst_31767 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31766)].join('');
var inst_31768 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31767);
var state_31778__$1 = (function (){var statearr_31791 = state_31778;
(statearr_31791[(10)] = inst_31764);

return statearr_31791;
})();
var statearr_31792_31820 = state_31778__$1;
(statearr_31792_31820[(2)] = inst_31768);

(statearr_31792_31820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (5))){
var inst_31731 = (state_31778[(7)]);
var inst_31733 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31734 = (new cljs.core.PersistentArrayMap(null,2,inst_31733,null));
var inst_31735 = (new cljs.core.PersistentHashSet(null,inst_31734,null));
var inst_31736 = figwheel.client.focus_msgs.call(null,inst_31735,inst_31731);
var inst_31737 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31736);
var inst_31738 = cljs.core.first.call(null,inst_31736);
var inst_31739 = figwheel.client.autoload_QMARK_.call(null);
var state_31778__$1 = (function (){var statearr_31793 = state_31778;
(statearr_31793[(9)] = inst_31737);

(statearr_31793[(8)] = inst_31738);

return statearr_31793;
})();
if(cljs.core.truth_(inst_31739)){
var statearr_31794_31821 = state_31778__$1;
(statearr_31794_31821[(1)] = (8));

} else {
var statearr_31795_31822 = state_31778__$1;
(statearr_31795_31822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (14))){
var inst_31749 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31796_31823 = state_31778__$1;
(statearr_31796_31823[(2)] = inst_31749);

(statearr_31796_31823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (16))){
var state_31778__$1 = state_31778;
var statearr_31797_31824 = state_31778__$1;
(statearr_31797_31824[(2)] = null);

(statearr_31797_31824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (10))){
var inst_31770 = (state_31778[(2)]);
var state_31778__$1 = (function (){var statearr_31798 = state_31778;
(statearr_31798[(11)] = inst_31770);

return statearr_31798;
})();
var statearr_31799_31825 = state_31778__$1;
(statearr_31799_31825[(2)] = null);

(statearr_31799_31825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (8))){
var inst_31737 = (state_31778[(9)]);
var inst_31741 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31737,opts);
var state_31778__$1 = state_31778;
if(cljs.core.truth_(inst_31741)){
var statearr_31800_31826 = state_31778__$1;
(statearr_31800_31826[(1)] = (11));

} else {
var statearr_31801_31827 = state_31778__$1;
(statearr_31801_31827[(1)] = (12));

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
});})(c__27477__auto___31809,ch))
;
return ((function (switch__27365__auto__,c__27477__auto___31809,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27366__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27366__auto____0 = (function (){
var statearr_31805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31805[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27366__auto__);

(statearr_31805[(1)] = (1));

return statearr_31805;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27366__auto____1 = (function (state_31778){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_31778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e31806){if((e31806 instanceof Object)){
var ex__27369__auto__ = e31806;
var statearr_31807_31828 = state_31778;
(statearr_31807_31828[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31829 = state_31778;
state_31778 = G__31829;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27366__auto__ = function(state_31778){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27366__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27366__auto____1.call(this,state_31778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27366__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27366__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___31809,ch))
})();
var state__27479__auto__ = (function (){var statearr_31808 = f__27478__auto__.call(null);
(statearr_31808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___31809);

return statearr_31808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___31809,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31830_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31830_SHARP_));
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
var base_path_31837 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31837){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31835 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31836 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31835,_STAR_print_newline_STAR_31836,base_path_31837){
return (function() { 
var G__31838__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31839__i = 0, G__31839__a = new Array(arguments.length -  0);
while (G__31839__i < G__31839__a.length) {G__31839__a[G__31839__i] = arguments[G__31839__i + 0]; ++G__31839__i;}
  args = new cljs.core.IndexedSeq(G__31839__a,0);
} 
return G__31838__delegate.call(this,args);};
G__31838.cljs$lang$maxFixedArity = 0;
G__31838.cljs$lang$applyTo = (function (arglist__31840){
var args = cljs.core.seq(arglist__31840);
return G__31838__delegate(args);
});
G__31838.cljs$core$IFn$_invoke$arity$variadic = G__31838__delegate;
return G__31838;
})()
;})(_STAR_print_fn_STAR_31835,_STAR_print_newline_STAR_31836,base_path_31837))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31836;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31835;
}}catch (e31834){if((e31834 instanceof Error)){
var e = e31834;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31837], null));
} else {
var e = e31834;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31837))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31841){
var map__31848 = p__31841;
var map__31848__$1 = ((((!((map__31848 == null)))?((((map__31848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31848):map__31848);
var opts = map__31848__$1;
var build_id = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31848,map__31848__$1,opts,build_id){
return (function (p__31850){
var vec__31851 = p__31850;
var map__31852 = cljs.core.nth.call(null,vec__31851,(0),null);
var map__31852__$1 = ((((!((map__31852 == null)))?((((map__31852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31852):map__31852);
var msg = map__31852__$1;
var msg_name = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31851,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31851,map__31852,map__31852__$1,msg,msg_name,_,map__31848,map__31848__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31851,map__31852,map__31852__$1,msg,msg_name,_,map__31848,map__31848__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31848,map__31848__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31858){
var vec__31859 = p__31858;
var map__31860 = cljs.core.nth.call(null,vec__31859,(0),null);
var map__31860__$1 = ((((!((map__31860 == null)))?((((map__31860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31860):map__31860);
var msg = map__31860__$1;
var msg_name = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31859,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31862){
var map__31872 = p__31862;
var map__31872__$1 = ((((!((map__31872 == null)))?((((map__31872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31872):map__31872);
var on_compile_warning = cljs.core.get.call(null,map__31872__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31872__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31872,map__31872__$1,on_compile_warning,on_compile_fail){
return (function (p__31874){
var vec__31875 = p__31874;
var map__31876 = cljs.core.nth.call(null,vec__31875,(0),null);
var map__31876__$1 = ((((!((map__31876 == null)))?((((map__31876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31876):map__31876);
var msg = map__31876__$1;
var msg_name = cljs.core.get.call(null,map__31876__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31875,(1));
var pred__31878 = cljs.core._EQ_;
var expr__31879 = msg_name;
if(cljs.core.truth_(pred__31878.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31879))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31878.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31879))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31872,map__31872__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto__,msg_hist,msg_names,msg){
return (function (state_32095){
var state_val_32096 = (state_32095[(1)]);
if((state_val_32096 === (7))){
var inst_32019 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
if(cljs.core.truth_(inst_32019)){
var statearr_32097_32143 = state_32095__$1;
(statearr_32097_32143[(1)] = (8));

} else {
var statearr_32098_32144 = state_32095__$1;
(statearr_32098_32144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (20))){
var inst_32089 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32099_32145 = state_32095__$1;
(statearr_32099_32145[(2)] = inst_32089);

(statearr_32099_32145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (27))){
var inst_32085 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32100_32146 = state_32095__$1;
(statearr_32100_32146[(2)] = inst_32085);

(statearr_32100_32146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (1))){
var inst_32012 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32095__$1 = state_32095;
if(cljs.core.truth_(inst_32012)){
var statearr_32101_32147 = state_32095__$1;
(statearr_32101_32147[(1)] = (2));

} else {
var statearr_32102_32148 = state_32095__$1;
(statearr_32102_32148[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (24))){
var inst_32087 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32103_32149 = state_32095__$1;
(statearr_32103_32149[(2)] = inst_32087);

(statearr_32103_32149[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (4))){
var inst_32093 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32095__$1,inst_32093);
} else {
if((state_val_32096 === (15))){
var inst_32091 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32104_32150 = state_32095__$1;
(statearr_32104_32150[(2)] = inst_32091);

(statearr_32104_32150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (21))){
var inst_32050 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32105_32151 = state_32095__$1;
(statearr_32105_32151[(2)] = inst_32050);

(statearr_32105_32151[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (31))){
var inst_32074 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32095__$1 = state_32095;
if(cljs.core.truth_(inst_32074)){
var statearr_32106_32152 = state_32095__$1;
(statearr_32106_32152[(1)] = (34));

} else {
var statearr_32107_32153 = state_32095__$1;
(statearr_32107_32153[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (32))){
var inst_32083 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32108_32154 = state_32095__$1;
(statearr_32108_32154[(2)] = inst_32083);

(statearr_32108_32154[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (33))){
var inst_32072 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32109_32155 = state_32095__$1;
(statearr_32109_32155[(2)] = inst_32072);

(statearr_32109_32155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (13))){
var inst_32033 = figwheel.client.heads_up.clear.call(null);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32095__$1,(16),inst_32033);
} else {
if((state_val_32096 === (22))){
var inst_32054 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32055 = figwheel.client.heads_up.append_message.call(null,inst_32054);
var state_32095__$1 = state_32095;
var statearr_32110_32156 = state_32095__$1;
(statearr_32110_32156[(2)] = inst_32055);

(statearr_32110_32156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (36))){
var inst_32081 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32111_32157 = state_32095__$1;
(statearr_32111_32157[(2)] = inst_32081);

(statearr_32111_32157[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (29))){
var inst_32065 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32112_32158 = state_32095__$1;
(statearr_32112_32158[(2)] = inst_32065);

(statearr_32112_32158[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (6))){
var inst_32014 = (state_32095[(7)]);
var state_32095__$1 = state_32095;
var statearr_32113_32159 = state_32095__$1;
(statearr_32113_32159[(2)] = inst_32014);

(statearr_32113_32159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (28))){
var inst_32061 = (state_32095[(2)]);
var inst_32062 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32063 = figwheel.client.heads_up.display_warning.call(null,inst_32062);
var state_32095__$1 = (function (){var statearr_32114 = state_32095;
(statearr_32114[(8)] = inst_32061);

return statearr_32114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32095__$1,(29),inst_32063);
} else {
if((state_val_32096 === (25))){
var inst_32059 = figwheel.client.heads_up.clear.call(null);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32095__$1,(28),inst_32059);
} else {
if((state_val_32096 === (34))){
var inst_32076 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32095__$1,(37),inst_32076);
} else {
if((state_val_32096 === (17))){
var inst_32041 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32115_32160 = state_32095__$1;
(statearr_32115_32160[(2)] = inst_32041);

(statearr_32115_32160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (3))){
var inst_32031 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32095__$1 = state_32095;
if(cljs.core.truth_(inst_32031)){
var statearr_32116_32161 = state_32095__$1;
(statearr_32116_32161[(1)] = (13));

} else {
var statearr_32117_32162 = state_32095__$1;
(statearr_32117_32162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (12))){
var inst_32027 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32118_32163 = state_32095__$1;
(statearr_32118_32163[(2)] = inst_32027);

(statearr_32118_32163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (2))){
var inst_32014 = (state_32095[(7)]);
var inst_32014__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32095__$1 = (function (){var statearr_32119 = state_32095;
(statearr_32119[(7)] = inst_32014__$1);

return statearr_32119;
})();
if(cljs.core.truth_(inst_32014__$1)){
var statearr_32120_32164 = state_32095__$1;
(statearr_32120_32164[(1)] = (5));

} else {
var statearr_32121_32165 = state_32095__$1;
(statearr_32121_32165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (23))){
var inst_32057 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32095__$1 = state_32095;
if(cljs.core.truth_(inst_32057)){
var statearr_32122_32166 = state_32095__$1;
(statearr_32122_32166[(1)] = (25));

} else {
var statearr_32123_32167 = state_32095__$1;
(statearr_32123_32167[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (35))){
var state_32095__$1 = state_32095;
var statearr_32124_32168 = state_32095__$1;
(statearr_32124_32168[(2)] = null);

(statearr_32124_32168[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (19))){
var inst_32052 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32095__$1 = state_32095;
if(cljs.core.truth_(inst_32052)){
var statearr_32125_32169 = state_32095__$1;
(statearr_32125_32169[(1)] = (22));

} else {
var statearr_32126_32170 = state_32095__$1;
(statearr_32126_32170[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (11))){
var inst_32023 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32127_32171 = state_32095__$1;
(statearr_32127_32171[(2)] = inst_32023);

(statearr_32127_32171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (9))){
var inst_32025 = figwheel.client.heads_up.clear.call(null);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32095__$1,(12),inst_32025);
} else {
if((state_val_32096 === (5))){
var inst_32016 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32095__$1 = state_32095;
var statearr_32128_32172 = state_32095__$1;
(statearr_32128_32172[(2)] = inst_32016);

(statearr_32128_32172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (14))){
var inst_32043 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32095__$1 = state_32095;
if(cljs.core.truth_(inst_32043)){
var statearr_32129_32173 = state_32095__$1;
(statearr_32129_32173[(1)] = (18));

} else {
var statearr_32130_32174 = state_32095__$1;
(statearr_32130_32174[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (26))){
var inst_32067 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32095__$1 = state_32095;
if(cljs.core.truth_(inst_32067)){
var statearr_32131_32175 = state_32095__$1;
(statearr_32131_32175[(1)] = (30));

} else {
var statearr_32132_32176 = state_32095__$1;
(statearr_32132_32176[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (16))){
var inst_32035 = (state_32095[(2)]);
var inst_32036 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32037 = figwheel.client.format_messages.call(null,inst_32036);
var inst_32038 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32039 = figwheel.client.heads_up.display_error.call(null,inst_32037,inst_32038);
var state_32095__$1 = (function (){var statearr_32133 = state_32095;
(statearr_32133[(9)] = inst_32035);

return statearr_32133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32095__$1,(17),inst_32039);
} else {
if((state_val_32096 === (30))){
var inst_32069 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32070 = figwheel.client.heads_up.display_warning.call(null,inst_32069);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32095__$1,(33),inst_32070);
} else {
if((state_val_32096 === (10))){
var inst_32029 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32134_32177 = state_32095__$1;
(statearr_32134_32177[(2)] = inst_32029);

(statearr_32134_32177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (18))){
var inst_32045 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32046 = figwheel.client.format_messages.call(null,inst_32045);
var inst_32047 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32048 = figwheel.client.heads_up.display_error.call(null,inst_32046,inst_32047);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32095__$1,(21),inst_32048);
} else {
if((state_val_32096 === (37))){
var inst_32078 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32135_32178 = state_32095__$1;
(statearr_32135_32178[(2)] = inst_32078);

(statearr_32135_32178[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (8))){
var inst_32021 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32095__$1,(11),inst_32021);
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
});})(c__27477__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27365__auto__,c__27477__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto____0 = (function (){
var statearr_32139 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32139[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto__);

(statearr_32139[(1)] = (1));

return statearr_32139;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto____1 = (function (state_32095){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_32095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e32140){if((e32140 instanceof Object)){
var ex__27369__auto__ = e32140;
var statearr_32141_32179 = state_32095;
(statearr_32141_32179[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32180 = state_32095;
state_32095 = G__32180;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto__ = function(state_32095){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto____1.call(this,state_32095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto__,msg_hist,msg_names,msg))
})();
var state__27479__auto__ = (function (){var statearr_32142 = f__27478__auto__.call(null);
(statearr_32142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto__);

return statearr_32142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto__,msg_hist,msg_names,msg))
);

return c__27477__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27477__auto___32243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___32243,ch){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___32243,ch){
return (function (state_32226){
var state_val_32227 = (state_32226[(1)]);
if((state_val_32227 === (1))){
var state_32226__$1 = state_32226;
var statearr_32228_32244 = state_32226__$1;
(statearr_32228_32244[(2)] = null);

(statearr_32228_32244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (2))){
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32226__$1,(4),ch);
} else {
if((state_val_32227 === (3))){
var inst_32224 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32226__$1,inst_32224);
} else {
if((state_val_32227 === (4))){
var inst_32214 = (state_32226[(7)]);
var inst_32214__$1 = (state_32226[(2)]);
var state_32226__$1 = (function (){var statearr_32229 = state_32226;
(statearr_32229[(7)] = inst_32214__$1);

return statearr_32229;
})();
if(cljs.core.truth_(inst_32214__$1)){
var statearr_32230_32245 = state_32226__$1;
(statearr_32230_32245[(1)] = (5));

} else {
var statearr_32231_32246 = state_32226__$1;
(statearr_32231_32246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (5))){
var inst_32214 = (state_32226[(7)]);
var inst_32216 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32214);
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32226__$1,(8),inst_32216);
} else {
if((state_val_32227 === (6))){
var state_32226__$1 = state_32226;
var statearr_32232_32247 = state_32226__$1;
(statearr_32232_32247[(2)] = null);

(statearr_32232_32247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (7))){
var inst_32222 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
var statearr_32233_32248 = state_32226__$1;
(statearr_32233_32248[(2)] = inst_32222);

(statearr_32233_32248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (8))){
var inst_32218 = (state_32226[(2)]);
var state_32226__$1 = (function (){var statearr_32234 = state_32226;
(statearr_32234[(8)] = inst_32218);

return statearr_32234;
})();
var statearr_32235_32249 = state_32226__$1;
(statearr_32235_32249[(2)] = null);

(statearr_32235_32249[(1)] = (2));


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
});})(c__27477__auto___32243,ch))
;
return ((function (switch__27365__auto__,c__27477__auto___32243,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27366__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27366__auto____0 = (function (){
var statearr_32239 = [null,null,null,null,null,null,null,null,null];
(statearr_32239[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27366__auto__);

(statearr_32239[(1)] = (1));

return statearr_32239;
});
var figwheel$client$heads_up_plugin_$_state_machine__27366__auto____1 = (function (state_32226){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_32226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e32240){if((e32240 instanceof Object)){
var ex__27369__auto__ = e32240;
var statearr_32241_32250 = state_32226;
(statearr_32241_32250[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32251 = state_32226;
state_32226 = G__32251;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27366__auto__ = function(state_32226){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27366__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27366__auto____1.call(this,state_32226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27366__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27366__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___32243,ch))
})();
var state__27479__auto__ = (function (){var statearr_32242 = f__27478__auto__.call(null);
(statearr_32242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___32243);

return statearr_32242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___32243,ch))
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
var c__27477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto__){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto__){
return (function (state_32272){
var state_val_32273 = (state_32272[(1)]);
if((state_val_32273 === (1))){
var inst_32267 = cljs.core.async.timeout.call(null,(3000));
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32272__$1,(2),inst_32267);
} else {
if((state_val_32273 === (2))){
var inst_32269 = (state_32272[(2)]);
var inst_32270 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32272__$1 = (function (){var statearr_32274 = state_32272;
(statearr_32274[(7)] = inst_32269);

return statearr_32274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32272__$1,inst_32270);
} else {
return null;
}
}
});})(c__27477__auto__))
;
return ((function (switch__27365__auto__,c__27477__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27366__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27366__auto____0 = (function (){
var statearr_32278 = [null,null,null,null,null,null,null,null];
(statearr_32278[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27366__auto__);

(statearr_32278[(1)] = (1));

return statearr_32278;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27366__auto____1 = (function (state_32272){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_32272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e32279){if((e32279 instanceof Object)){
var ex__27369__auto__ = e32279;
var statearr_32280_32282 = state_32272;
(statearr_32280_32282[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32283 = state_32272;
state_32272 = G__32283;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27366__auto__ = function(state_32272){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27366__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27366__auto____1.call(this,state_32272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27366__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27366__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto__))
})();
var state__27479__auto__ = (function (){var statearr_32281 = f__27478__auto__.call(null);
(statearr_32281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto__);

return statearr_32281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto__))
);

return c__27477__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32284){
var map__32291 = p__32284;
var map__32291__$1 = ((((!((map__32291 == null)))?((((map__32291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32291):map__32291);
var ed = map__32291__$1;
var formatted_exception = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32293_32297 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32294_32298 = null;
var count__32295_32299 = (0);
var i__32296_32300 = (0);
while(true){
if((i__32296_32300 < count__32295_32299)){
var msg_32301 = cljs.core._nth.call(null,chunk__32294_32298,i__32296_32300);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32301);

var G__32302 = seq__32293_32297;
var G__32303 = chunk__32294_32298;
var G__32304 = count__32295_32299;
var G__32305 = (i__32296_32300 + (1));
seq__32293_32297 = G__32302;
chunk__32294_32298 = G__32303;
count__32295_32299 = G__32304;
i__32296_32300 = G__32305;
continue;
} else {
var temp__4425__auto___32306 = cljs.core.seq.call(null,seq__32293_32297);
if(temp__4425__auto___32306){
var seq__32293_32307__$1 = temp__4425__auto___32306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32293_32307__$1)){
var c__20993__auto___32308 = cljs.core.chunk_first.call(null,seq__32293_32307__$1);
var G__32309 = cljs.core.chunk_rest.call(null,seq__32293_32307__$1);
var G__32310 = c__20993__auto___32308;
var G__32311 = cljs.core.count.call(null,c__20993__auto___32308);
var G__32312 = (0);
seq__32293_32297 = G__32309;
chunk__32294_32298 = G__32310;
count__32295_32299 = G__32311;
i__32296_32300 = G__32312;
continue;
} else {
var msg_32313 = cljs.core.first.call(null,seq__32293_32307__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32313);

var G__32314 = cljs.core.next.call(null,seq__32293_32307__$1);
var G__32315 = null;
var G__32316 = (0);
var G__32317 = (0);
seq__32293_32297 = G__32314;
chunk__32294_32298 = G__32315;
count__32295_32299 = G__32316;
i__32296_32300 = G__32317;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32318){
var map__32321 = p__32318;
var map__32321__$1 = ((((!((map__32321 == null)))?((((map__32321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32321):map__32321);
var w = map__32321__$1;
var message = cljs.core.get.call(null,map__32321__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__20178__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20178__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20178__auto__;
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
var seq__32329 = cljs.core.seq.call(null,plugins);
var chunk__32330 = null;
var count__32331 = (0);
var i__32332 = (0);
while(true){
if((i__32332 < count__32331)){
var vec__32333 = cljs.core._nth.call(null,chunk__32330,i__32332);
var k = cljs.core.nth.call(null,vec__32333,(0),null);
var plugin = cljs.core.nth.call(null,vec__32333,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32335 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32329,chunk__32330,count__32331,i__32332,pl_32335,vec__32333,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32335.call(null,msg_hist);
});})(seq__32329,chunk__32330,count__32331,i__32332,pl_32335,vec__32333,k,plugin))
);
} else {
}

var G__32336 = seq__32329;
var G__32337 = chunk__32330;
var G__32338 = count__32331;
var G__32339 = (i__32332 + (1));
seq__32329 = G__32336;
chunk__32330 = G__32337;
count__32331 = G__32338;
i__32332 = G__32339;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32329);
if(temp__4425__auto__){
var seq__32329__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32329__$1)){
var c__20993__auto__ = cljs.core.chunk_first.call(null,seq__32329__$1);
var G__32340 = cljs.core.chunk_rest.call(null,seq__32329__$1);
var G__32341 = c__20993__auto__;
var G__32342 = cljs.core.count.call(null,c__20993__auto__);
var G__32343 = (0);
seq__32329 = G__32340;
chunk__32330 = G__32341;
count__32331 = G__32342;
i__32332 = G__32343;
continue;
} else {
var vec__32334 = cljs.core.first.call(null,seq__32329__$1);
var k = cljs.core.nth.call(null,vec__32334,(0),null);
var plugin = cljs.core.nth.call(null,vec__32334,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32344 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32329,chunk__32330,count__32331,i__32332,pl_32344,vec__32334,k,plugin,seq__32329__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32344.call(null,msg_hist);
});})(seq__32329,chunk__32330,count__32331,i__32332,pl_32344,vec__32334,k,plugin,seq__32329__$1,temp__4425__auto__))
);
} else {
}

var G__32345 = cljs.core.next.call(null,seq__32329__$1);
var G__32346 = null;
var G__32347 = (0);
var G__32348 = (0);
seq__32329 = G__32345;
chunk__32330 = G__32346;
count__32331 = G__32347;
i__32332 = G__32348;
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
var args32349 = [];
var len__21248__auto___32352 = arguments.length;
var i__21249__auto___32353 = (0);
while(true){
if((i__21249__auto___32353 < len__21248__auto___32352)){
args32349.push((arguments[i__21249__auto___32353]));

var G__32354 = (i__21249__auto___32353 + (1));
i__21249__auto___32353 = G__32354;
continue;
} else {
}
break;
}

var G__32351 = args32349.length;
switch (G__32351) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32349.length)].join('')));

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
var args__21255__auto__ = [];
var len__21248__auto___32360 = arguments.length;
var i__21249__auto___32361 = (0);
while(true){
if((i__21249__auto___32361 < len__21248__auto___32360)){
args__21255__auto__.push((arguments[i__21249__auto___32361]));

var G__32362 = (i__21249__auto___32361 + (1));
i__21249__auto___32361 = G__32362;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((0) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21256__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32357){
var map__32358 = p__32357;
var map__32358__$1 = ((((!((map__32358 == null)))?((((map__32358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32358):map__32358);
var opts = map__32358__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32356){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32356));
});

//# sourceMappingURL=client.js.map?rel=1452962193034