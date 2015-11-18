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
var pred__28044 = cljs.core._EQ_;
var expr__28045 = (function (){var or__16751__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28044.call(null,"true",expr__28045))){
return true;
} else {
if(cljs.core.truth_(pred__28044.call(null,"false",expr__28045))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28045)].join('')));
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
var G__28047__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28048__i = 0, G__28048__a = new Array(arguments.length -  0);
while (G__28048__i < G__28048__a.length) {G__28048__a[G__28048__i] = arguments[G__28048__i + 0]; ++G__28048__i;}
  args = new cljs.core.IndexedSeq(G__28048__a,0);
} 
return G__28047__delegate.call(this,args);};
G__28047.cljs$lang$maxFixedArity = 0;
G__28047.cljs$lang$applyTo = (function (arglist__28049){
var args = cljs.core.seq(arglist__28049);
return G__28047__delegate(args);
});
G__28047.cljs$core$IFn$_invoke$arity$variadic = G__28047__delegate;
return G__28047;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28050){
var map__28053 = p__28050;
var map__28053__$1 = ((((!((map__28053 == null)))?((((map__28053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28053):map__28053);
var message = cljs.core.get.call(null,map__28053__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28053__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__23883__auto___28215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___28215,ch){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___28215,ch){
return (function (state_28184){
var state_val_28185 = (state_28184[(1)]);
if((state_val_28185 === (7))){
var inst_28180 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28186_28216 = state_28184__$1;
(statearr_28186_28216[(2)] = inst_28180);

(statearr_28186_28216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (1))){
var state_28184__$1 = state_28184;
var statearr_28187_28217 = state_28184__$1;
(statearr_28187_28217[(2)] = null);

(statearr_28187_28217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (4))){
var inst_28137 = (state_28184[(7)]);
var inst_28137__$1 = (state_28184[(2)]);
var state_28184__$1 = (function (){var statearr_28188 = state_28184;
(statearr_28188[(7)] = inst_28137__$1);

return statearr_28188;
})();
if(cljs.core.truth_(inst_28137__$1)){
var statearr_28189_28218 = state_28184__$1;
(statearr_28189_28218[(1)] = (5));

} else {
var statearr_28190_28219 = state_28184__$1;
(statearr_28190_28219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (15))){
var inst_28144 = (state_28184[(8)]);
var inst_28159 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28144);
var inst_28160 = cljs.core.first.call(null,inst_28159);
var inst_28161 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28160);
var inst_28162 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28161)].join('');
var inst_28163 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28162);
var state_28184__$1 = state_28184;
var statearr_28191_28220 = state_28184__$1;
(statearr_28191_28220[(2)] = inst_28163);

(statearr_28191_28220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (13))){
var inst_28168 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28192_28221 = state_28184__$1;
(statearr_28192_28221[(2)] = inst_28168);

(statearr_28192_28221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (6))){
var state_28184__$1 = state_28184;
var statearr_28193_28222 = state_28184__$1;
(statearr_28193_28222[(2)] = null);

(statearr_28193_28222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (17))){
var inst_28166 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28194_28223 = state_28184__$1;
(statearr_28194_28223[(2)] = inst_28166);

(statearr_28194_28223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (3))){
var inst_28182 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28184__$1,inst_28182);
} else {
if((state_val_28185 === (12))){
var inst_28143 = (state_28184[(9)]);
var inst_28157 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28143,opts);
var state_28184__$1 = state_28184;
if(cljs.core.truth_(inst_28157)){
var statearr_28195_28224 = state_28184__$1;
(statearr_28195_28224[(1)] = (15));

} else {
var statearr_28196_28225 = state_28184__$1;
(statearr_28196_28225[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (2))){
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28184__$1,(4),ch);
} else {
if((state_val_28185 === (11))){
var inst_28144 = (state_28184[(8)]);
var inst_28149 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28150 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28144);
var inst_28151 = cljs.core.async.timeout.call(null,(1000));
var inst_28152 = [inst_28150,inst_28151];
var inst_28153 = (new cljs.core.PersistentVector(null,2,(5),inst_28149,inst_28152,null));
var state_28184__$1 = state_28184;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28184__$1,(14),inst_28153);
} else {
if((state_val_28185 === (9))){
var inst_28144 = (state_28184[(8)]);
var inst_28170 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28171 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28144);
var inst_28172 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28171);
var inst_28173 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28172)].join('');
var inst_28174 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28173);
var state_28184__$1 = (function (){var statearr_28197 = state_28184;
(statearr_28197[(10)] = inst_28170);

return statearr_28197;
})();
var statearr_28198_28226 = state_28184__$1;
(statearr_28198_28226[(2)] = inst_28174);

(statearr_28198_28226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (5))){
var inst_28137 = (state_28184[(7)]);
var inst_28139 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28140 = (new cljs.core.PersistentArrayMap(null,2,inst_28139,null));
var inst_28141 = (new cljs.core.PersistentHashSet(null,inst_28140,null));
var inst_28142 = figwheel.client.focus_msgs.call(null,inst_28141,inst_28137);
var inst_28143 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28142);
var inst_28144 = cljs.core.first.call(null,inst_28142);
var inst_28145 = figwheel.client.autoload_QMARK_.call(null);
var state_28184__$1 = (function (){var statearr_28199 = state_28184;
(statearr_28199[(9)] = inst_28143);

(statearr_28199[(8)] = inst_28144);

return statearr_28199;
})();
if(cljs.core.truth_(inst_28145)){
var statearr_28200_28227 = state_28184__$1;
(statearr_28200_28227[(1)] = (8));

} else {
var statearr_28201_28228 = state_28184__$1;
(statearr_28201_28228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (14))){
var inst_28155 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28202_28229 = state_28184__$1;
(statearr_28202_28229[(2)] = inst_28155);

(statearr_28202_28229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (16))){
var state_28184__$1 = state_28184;
var statearr_28203_28230 = state_28184__$1;
(statearr_28203_28230[(2)] = null);

(statearr_28203_28230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (10))){
var inst_28176 = (state_28184[(2)]);
var state_28184__$1 = (function (){var statearr_28204 = state_28184;
(statearr_28204[(11)] = inst_28176);

return statearr_28204;
})();
var statearr_28205_28231 = state_28184__$1;
(statearr_28205_28231[(2)] = null);

(statearr_28205_28231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (8))){
var inst_28143 = (state_28184[(9)]);
var inst_28147 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28143,opts);
var state_28184__$1 = state_28184;
if(cljs.core.truth_(inst_28147)){
var statearr_28206_28232 = state_28184__$1;
(statearr_28206_28232[(1)] = (11));

} else {
var statearr_28207_28233 = state_28184__$1;
(statearr_28207_28233[(1)] = (12));

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
});})(c__23883__auto___28215,ch))
;
return ((function (switch__23771__auto__,c__23883__auto___28215,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23772__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23772__auto____0 = (function (){
var statearr_28211 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28211[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23772__auto__);

(statearr_28211[(1)] = (1));

return statearr_28211;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23772__auto____1 = (function (state_28184){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_28184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e28212){if((e28212 instanceof Object)){
var ex__23775__auto__ = e28212;
var statearr_28213_28234 = state_28184;
(statearr_28213_28234[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28235 = state_28184;
state_28184 = G__28235;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23772__auto__ = function(state_28184){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23772__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23772__auto____1.call(this,state_28184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23772__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23772__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___28215,ch))
})();
var state__23885__auto__ = (function (){var statearr_28214 = f__23884__auto__.call(null);
(statearr_28214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___28215);

return statearr_28214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___28215,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28236_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28236_SHARP_));
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
var base_path_28243 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28243){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28241 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28242 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28241,_STAR_print_newline_STAR_28242,base_path_28243){
return (function() { 
var G__28244__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28245__i = 0, G__28245__a = new Array(arguments.length -  0);
while (G__28245__i < G__28245__a.length) {G__28245__a[G__28245__i] = arguments[G__28245__i + 0]; ++G__28245__i;}
  args = new cljs.core.IndexedSeq(G__28245__a,0);
} 
return G__28244__delegate.call(this,args);};
G__28244.cljs$lang$maxFixedArity = 0;
G__28244.cljs$lang$applyTo = (function (arglist__28246){
var args = cljs.core.seq(arglist__28246);
return G__28244__delegate(args);
});
G__28244.cljs$core$IFn$_invoke$arity$variadic = G__28244__delegate;
return G__28244;
})()
;})(_STAR_print_fn_STAR_28241,_STAR_print_newline_STAR_28242,base_path_28243))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28242;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28241;
}}catch (e28240){if((e28240 instanceof Error)){
var e = e28240;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28243], null));
} else {
var e = e28240;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28243))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28247){
var map__28254 = p__28247;
var map__28254__$1 = ((((!((map__28254 == null)))?((((map__28254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28254):map__28254);
var opts = map__28254__$1;
var build_id = cljs.core.get.call(null,map__28254__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28254,map__28254__$1,opts,build_id){
return (function (p__28256){
var vec__28257 = p__28256;
var map__28258 = cljs.core.nth.call(null,vec__28257,(0),null);
var map__28258__$1 = ((((!((map__28258 == null)))?((((map__28258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28258):map__28258);
var msg = map__28258__$1;
var msg_name = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28257,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28257,map__28258,map__28258__$1,msg,msg_name,_,map__28254,map__28254__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28257,map__28258,map__28258__$1,msg,msg_name,_,map__28254,map__28254__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28254,map__28254__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28264){
var vec__28265 = p__28264;
var map__28266 = cljs.core.nth.call(null,vec__28265,(0),null);
var map__28266__$1 = ((((!((map__28266 == null)))?((((map__28266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28266):map__28266);
var msg = map__28266__$1;
var msg_name = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28265,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28268){
var map__28278 = p__28268;
var map__28278__$1 = ((((!((map__28278 == null)))?((((map__28278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28278):map__28278);
var on_compile_warning = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28278,map__28278__$1,on_compile_warning,on_compile_fail){
return (function (p__28280){
var vec__28281 = p__28280;
var map__28282 = cljs.core.nth.call(null,vec__28281,(0),null);
var map__28282__$1 = ((((!((map__28282 == null)))?((((map__28282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28282):map__28282);
var msg = map__28282__$1;
var msg_name = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28281,(1));
var pred__28284 = cljs.core._EQ_;
var expr__28285 = msg_name;
if(cljs.core.truth_(pred__28284.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28285))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28284.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28285))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28278,map__28278__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto__,msg_hist,msg_names,msg){
return (function (state_28501){
var state_val_28502 = (state_28501[(1)]);
if((state_val_28502 === (7))){
var inst_28425 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
if(cljs.core.truth_(inst_28425)){
var statearr_28503_28549 = state_28501__$1;
(statearr_28503_28549[(1)] = (8));

} else {
var statearr_28504_28550 = state_28501__$1;
(statearr_28504_28550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (20))){
var inst_28495 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28505_28551 = state_28501__$1;
(statearr_28505_28551[(2)] = inst_28495);

(statearr_28505_28551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (27))){
var inst_28491 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28506_28552 = state_28501__$1;
(statearr_28506_28552[(2)] = inst_28491);

(statearr_28506_28552[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (1))){
var inst_28418 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28501__$1 = state_28501;
if(cljs.core.truth_(inst_28418)){
var statearr_28507_28553 = state_28501__$1;
(statearr_28507_28553[(1)] = (2));

} else {
var statearr_28508_28554 = state_28501__$1;
(statearr_28508_28554[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (24))){
var inst_28493 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28509_28555 = state_28501__$1;
(statearr_28509_28555[(2)] = inst_28493);

(statearr_28509_28555[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (4))){
var inst_28499 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28501__$1,inst_28499);
} else {
if((state_val_28502 === (15))){
var inst_28497 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28510_28556 = state_28501__$1;
(statearr_28510_28556[(2)] = inst_28497);

(statearr_28510_28556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (21))){
var inst_28456 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28511_28557 = state_28501__$1;
(statearr_28511_28557[(2)] = inst_28456);

(statearr_28511_28557[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (31))){
var inst_28480 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28501__$1 = state_28501;
if(cljs.core.truth_(inst_28480)){
var statearr_28512_28558 = state_28501__$1;
(statearr_28512_28558[(1)] = (34));

} else {
var statearr_28513_28559 = state_28501__$1;
(statearr_28513_28559[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (32))){
var inst_28489 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28514_28560 = state_28501__$1;
(statearr_28514_28560[(2)] = inst_28489);

(statearr_28514_28560[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (33))){
var inst_28478 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28515_28561 = state_28501__$1;
(statearr_28515_28561[(2)] = inst_28478);

(statearr_28515_28561[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (13))){
var inst_28439 = figwheel.client.heads_up.clear.call(null);
var state_28501__$1 = state_28501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28501__$1,(16),inst_28439);
} else {
if((state_val_28502 === (22))){
var inst_28460 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28461 = figwheel.client.heads_up.append_message.call(null,inst_28460);
var state_28501__$1 = state_28501;
var statearr_28516_28562 = state_28501__$1;
(statearr_28516_28562[(2)] = inst_28461);

(statearr_28516_28562[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (36))){
var inst_28487 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28517_28563 = state_28501__$1;
(statearr_28517_28563[(2)] = inst_28487);

(statearr_28517_28563[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (29))){
var inst_28471 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28518_28564 = state_28501__$1;
(statearr_28518_28564[(2)] = inst_28471);

(statearr_28518_28564[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (6))){
var inst_28420 = (state_28501[(7)]);
var state_28501__$1 = state_28501;
var statearr_28519_28565 = state_28501__$1;
(statearr_28519_28565[(2)] = inst_28420);

(statearr_28519_28565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (28))){
var inst_28467 = (state_28501[(2)]);
var inst_28468 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28469 = figwheel.client.heads_up.display_warning.call(null,inst_28468);
var state_28501__$1 = (function (){var statearr_28520 = state_28501;
(statearr_28520[(8)] = inst_28467);

return statearr_28520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28501__$1,(29),inst_28469);
} else {
if((state_val_28502 === (25))){
var inst_28465 = figwheel.client.heads_up.clear.call(null);
var state_28501__$1 = state_28501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28501__$1,(28),inst_28465);
} else {
if((state_val_28502 === (34))){
var inst_28482 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28501__$1 = state_28501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28501__$1,(37),inst_28482);
} else {
if((state_val_28502 === (17))){
var inst_28447 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28521_28566 = state_28501__$1;
(statearr_28521_28566[(2)] = inst_28447);

(statearr_28521_28566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (3))){
var inst_28437 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28501__$1 = state_28501;
if(cljs.core.truth_(inst_28437)){
var statearr_28522_28567 = state_28501__$1;
(statearr_28522_28567[(1)] = (13));

} else {
var statearr_28523_28568 = state_28501__$1;
(statearr_28523_28568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (12))){
var inst_28433 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28524_28569 = state_28501__$1;
(statearr_28524_28569[(2)] = inst_28433);

(statearr_28524_28569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (2))){
var inst_28420 = (state_28501[(7)]);
var inst_28420__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28501__$1 = (function (){var statearr_28525 = state_28501;
(statearr_28525[(7)] = inst_28420__$1);

return statearr_28525;
})();
if(cljs.core.truth_(inst_28420__$1)){
var statearr_28526_28570 = state_28501__$1;
(statearr_28526_28570[(1)] = (5));

} else {
var statearr_28527_28571 = state_28501__$1;
(statearr_28527_28571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (23))){
var inst_28463 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28501__$1 = state_28501;
if(cljs.core.truth_(inst_28463)){
var statearr_28528_28572 = state_28501__$1;
(statearr_28528_28572[(1)] = (25));

} else {
var statearr_28529_28573 = state_28501__$1;
(statearr_28529_28573[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (35))){
var state_28501__$1 = state_28501;
var statearr_28530_28574 = state_28501__$1;
(statearr_28530_28574[(2)] = null);

(statearr_28530_28574[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (19))){
var inst_28458 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28501__$1 = state_28501;
if(cljs.core.truth_(inst_28458)){
var statearr_28531_28575 = state_28501__$1;
(statearr_28531_28575[(1)] = (22));

} else {
var statearr_28532_28576 = state_28501__$1;
(statearr_28532_28576[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (11))){
var inst_28429 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28533_28577 = state_28501__$1;
(statearr_28533_28577[(2)] = inst_28429);

(statearr_28533_28577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (9))){
var inst_28431 = figwheel.client.heads_up.clear.call(null);
var state_28501__$1 = state_28501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28501__$1,(12),inst_28431);
} else {
if((state_val_28502 === (5))){
var inst_28422 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28501__$1 = state_28501;
var statearr_28534_28578 = state_28501__$1;
(statearr_28534_28578[(2)] = inst_28422);

(statearr_28534_28578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (14))){
var inst_28449 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28501__$1 = state_28501;
if(cljs.core.truth_(inst_28449)){
var statearr_28535_28579 = state_28501__$1;
(statearr_28535_28579[(1)] = (18));

} else {
var statearr_28536_28580 = state_28501__$1;
(statearr_28536_28580[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (26))){
var inst_28473 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28501__$1 = state_28501;
if(cljs.core.truth_(inst_28473)){
var statearr_28537_28581 = state_28501__$1;
(statearr_28537_28581[(1)] = (30));

} else {
var statearr_28538_28582 = state_28501__$1;
(statearr_28538_28582[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (16))){
var inst_28441 = (state_28501[(2)]);
var inst_28442 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28443 = figwheel.client.format_messages.call(null,inst_28442);
var inst_28444 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28445 = figwheel.client.heads_up.display_error.call(null,inst_28443,inst_28444);
var state_28501__$1 = (function (){var statearr_28539 = state_28501;
(statearr_28539[(9)] = inst_28441);

return statearr_28539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28501__$1,(17),inst_28445);
} else {
if((state_val_28502 === (30))){
var inst_28475 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28476 = figwheel.client.heads_up.display_warning.call(null,inst_28475);
var state_28501__$1 = state_28501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28501__$1,(33),inst_28476);
} else {
if((state_val_28502 === (10))){
var inst_28435 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28540_28583 = state_28501__$1;
(statearr_28540_28583[(2)] = inst_28435);

(statearr_28540_28583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (18))){
var inst_28451 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28452 = figwheel.client.format_messages.call(null,inst_28451);
var inst_28453 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28454 = figwheel.client.heads_up.display_error.call(null,inst_28452,inst_28453);
var state_28501__$1 = state_28501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28501__$1,(21),inst_28454);
} else {
if((state_val_28502 === (37))){
var inst_28484 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
var statearr_28541_28584 = state_28501__$1;
(statearr_28541_28584[(2)] = inst_28484);

(statearr_28541_28584[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (8))){
var inst_28427 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28501__$1 = state_28501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28501__$1,(11),inst_28427);
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
});})(c__23883__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23771__auto__,c__23883__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto____0 = (function (){
var statearr_28545 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28545[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto__);

(statearr_28545[(1)] = (1));

return statearr_28545;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto____1 = (function (state_28501){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_28501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e28546){if((e28546 instanceof Object)){
var ex__23775__auto__ = e28546;
var statearr_28547_28585 = state_28501;
(statearr_28547_28585[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28586 = state_28501;
state_28501 = G__28586;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto__ = function(state_28501){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto____1.call(this,state_28501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto__,msg_hist,msg_names,msg))
})();
var state__23885__auto__ = (function (){var statearr_28548 = f__23884__auto__.call(null);
(statearr_28548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto__);

return statearr_28548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto__,msg_hist,msg_names,msg))
);

return c__23883__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23883__auto___28649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___28649,ch){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___28649,ch){
return (function (state_28632){
var state_val_28633 = (state_28632[(1)]);
if((state_val_28633 === (1))){
var state_28632__$1 = state_28632;
var statearr_28634_28650 = state_28632__$1;
(statearr_28634_28650[(2)] = null);

(statearr_28634_28650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (2))){
var state_28632__$1 = state_28632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28632__$1,(4),ch);
} else {
if((state_val_28633 === (3))){
var inst_28630 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28632__$1,inst_28630);
} else {
if((state_val_28633 === (4))){
var inst_28620 = (state_28632[(7)]);
var inst_28620__$1 = (state_28632[(2)]);
var state_28632__$1 = (function (){var statearr_28635 = state_28632;
(statearr_28635[(7)] = inst_28620__$1);

return statearr_28635;
})();
if(cljs.core.truth_(inst_28620__$1)){
var statearr_28636_28651 = state_28632__$1;
(statearr_28636_28651[(1)] = (5));

} else {
var statearr_28637_28652 = state_28632__$1;
(statearr_28637_28652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (5))){
var inst_28620 = (state_28632[(7)]);
var inst_28622 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28620);
var state_28632__$1 = state_28632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28632__$1,(8),inst_28622);
} else {
if((state_val_28633 === (6))){
var state_28632__$1 = state_28632;
var statearr_28638_28653 = state_28632__$1;
(statearr_28638_28653[(2)] = null);

(statearr_28638_28653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (7))){
var inst_28628 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28639_28654 = state_28632__$1;
(statearr_28639_28654[(2)] = inst_28628);

(statearr_28639_28654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (8))){
var inst_28624 = (state_28632[(2)]);
var state_28632__$1 = (function (){var statearr_28640 = state_28632;
(statearr_28640[(8)] = inst_28624);

return statearr_28640;
})();
var statearr_28641_28655 = state_28632__$1;
(statearr_28641_28655[(2)] = null);

(statearr_28641_28655[(1)] = (2));


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
});})(c__23883__auto___28649,ch))
;
return ((function (switch__23771__auto__,c__23883__auto___28649,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23772__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23772__auto____0 = (function (){
var statearr_28645 = [null,null,null,null,null,null,null,null,null];
(statearr_28645[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23772__auto__);

(statearr_28645[(1)] = (1));

return statearr_28645;
});
var figwheel$client$heads_up_plugin_$_state_machine__23772__auto____1 = (function (state_28632){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_28632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e28646){if((e28646 instanceof Object)){
var ex__23775__auto__ = e28646;
var statearr_28647_28656 = state_28632;
(statearr_28647_28656[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28657 = state_28632;
state_28632 = G__28657;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23772__auto__ = function(state_28632){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23772__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23772__auto____1.call(this,state_28632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23772__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23772__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___28649,ch))
})();
var state__23885__auto__ = (function (){var statearr_28648 = f__23884__auto__.call(null);
(statearr_28648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___28649);

return statearr_28648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___28649,ch))
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
var c__23883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto__){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto__){
return (function (state_28678){
var state_val_28679 = (state_28678[(1)]);
if((state_val_28679 === (1))){
var inst_28673 = cljs.core.async.timeout.call(null,(3000));
var state_28678__$1 = state_28678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28678__$1,(2),inst_28673);
} else {
if((state_val_28679 === (2))){
var inst_28675 = (state_28678[(2)]);
var inst_28676 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28678__$1 = (function (){var statearr_28680 = state_28678;
(statearr_28680[(7)] = inst_28675);

return statearr_28680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28678__$1,inst_28676);
} else {
return null;
}
}
});})(c__23883__auto__))
;
return ((function (switch__23771__auto__,c__23883__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23772__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23772__auto____0 = (function (){
var statearr_28684 = [null,null,null,null,null,null,null,null];
(statearr_28684[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23772__auto__);

(statearr_28684[(1)] = (1));

return statearr_28684;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23772__auto____1 = (function (state_28678){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_28678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e28685){if((e28685 instanceof Object)){
var ex__23775__auto__ = e28685;
var statearr_28686_28688 = state_28678;
(statearr_28686_28688[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28689 = state_28678;
state_28678 = G__28689;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23772__auto__ = function(state_28678){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23772__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23772__auto____1.call(this,state_28678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23772__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23772__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto__))
})();
var state__23885__auto__ = (function (){var statearr_28687 = f__23884__auto__.call(null);
(statearr_28687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto__);

return statearr_28687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto__))
);

return c__23883__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28690){
var map__28697 = p__28690;
var map__28697__$1 = ((((!((map__28697 == null)))?((((map__28697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28697):map__28697);
var ed = map__28697__$1;
var formatted_exception = cljs.core.get.call(null,map__28697__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28697__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28697__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28699_28703 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28700_28704 = null;
var count__28701_28705 = (0);
var i__28702_28706 = (0);
while(true){
if((i__28702_28706 < count__28701_28705)){
var msg_28707 = cljs.core._nth.call(null,chunk__28700_28704,i__28702_28706);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28707);

var G__28708 = seq__28699_28703;
var G__28709 = chunk__28700_28704;
var G__28710 = count__28701_28705;
var G__28711 = (i__28702_28706 + (1));
seq__28699_28703 = G__28708;
chunk__28700_28704 = G__28709;
count__28701_28705 = G__28710;
i__28702_28706 = G__28711;
continue;
} else {
var temp__4425__auto___28712 = cljs.core.seq.call(null,seq__28699_28703);
if(temp__4425__auto___28712){
var seq__28699_28713__$1 = temp__4425__auto___28712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28699_28713__$1)){
var c__17554__auto___28714 = cljs.core.chunk_first.call(null,seq__28699_28713__$1);
var G__28715 = cljs.core.chunk_rest.call(null,seq__28699_28713__$1);
var G__28716 = c__17554__auto___28714;
var G__28717 = cljs.core.count.call(null,c__17554__auto___28714);
var G__28718 = (0);
seq__28699_28703 = G__28715;
chunk__28700_28704 = G__28716;
count__28701_28705 = G__28717;
i__28702_28706 = G__28718;
continue;
} else {
var msg_28719 = cljs.core.first.call(null,seq__28699_28713__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28719);

var G__28720 = cljs.core.next.call(null,seq__28699_28713__$1);
var G__28721 = null;
var G__28722 = (0);
var G__28723 = (0);
seq__28699_28703 = G__28720;
chunk__28700_28704 = G__28721;
count__28701_28705 = G__28722;
i__28702_28706 = G__28723;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28724){
var map__28727 = p__28724;
var map__28727__$1 = ((((!((map__28727 == null)))?((((map__28727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28727):map__28727);
var w = map__28727__$1;
var message = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28735 = cljs.core.seq.call(null,plugins);
var chunk__28736 = null;
var count__28737 = (0);
var i__28738 = (0);
while(true){
if((i__28738 < count__28737)){
var vec__28739 = cljs.core._nth.call(null,chunk__28736,i__28738);
var k = cljs.core.nth.call(null,vec__28739,(0),null);
var plugin = cljs.core.nth.call(null,vec__28739,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28741 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28735,chunk__28736,count__28737,i__28738,pl_28741,vec__28739,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28741.call(null,msg_hist);
});})(seq__28735,chunk__28736,count__28737,i__28738,pl_28741,vec__28739,k,plugin))
);
} else {
}

var G__28742 = seq__28735;
var G__28743 = chunk__28736;
var G__28744 = count__28737;
var G__28745 = (i__28738 + (1));
seq__28735 = G__28742;
chunk__28736 = G__28743;
count__28737 = G__28744;
i__28738 = G__28745;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28735);
if(temp__4425__auto__){
var seq__28735__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28735__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__28735__$1);
var G__28746 = cljs.core.chunk_rest.call(null,seq__28735__$1);
var G__28747 = c__17554__auto__;
var G__28748 = cljs.core.count.call(null,c__17554__auto__);
var G__28749 = (0);
seq__28735 = G__28746;
chunk__28736 = G__28747;
count__28737 = G__28748;
i__28738 = G__28749;
continue;
} else {
var vec__28740 = cljs.core.first.call(null,seq__28735__$1);
var k = cljs.core.nth.call(null,vec__28740,(0),null);
var plugin = cljs.core.nth.call(null,vec__28740,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28750 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28735,chunk__28736,count__28737,i__28738,pl_28750,vec__28740,k,plugin,seq__28735__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28750.call(null,msg_hist);
});})(seq__28735,chunk__28736,count__28737,i__28738,pl_28750,vec__28740,k,plugin,seq__28735__$1,temp__4425__auto__))
);
} else {
}

var G__28751 = cljs.core.next.call(null,seq__28735__$1);
var G__28752 = null;
var G__28753 = (0);
var G__28754 = (0);
seq__28735 = G__28751;
chunk__28736 = G__28752;
count__28737 = G__28753;
i__28738 = G__28754;
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
var args28755 = [];
var len__17809__auto___28758 = arguments.length;
var i__17810__auto___28759 = (0);
while(true){
if((i__17810__auto___28759 < len__17809__auto___28758)){
args28755.push((arguments[i__17810__auto___28759]));

var G__28760 = (i__17810__auto___28759 + (1));
i__17810__auto___28759 = G__28760;
continue;
} else {
}
break;
}

var G__28757 = args28755.length;
switch (G__28757) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28755.length)].join('')));

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
var len__17809__auto___28766 = arguments.length;
var i__17810__auto___28767 = (0);
while(true){
if((i__17810__auto___28767 < len__17809__auto___28766)){
args__17816__auto__.push((arguments[i__17810__auto___28767]));

var G__28768 = (i__17810__auto___28767 + (1));
i__17810__auto___28767 = G__28768;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28763){
var map__28764 = p__28763;
var map__28764__$1 = ((((!((map__28764 == null)))?((((map__28764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28764):map__28764);
var opts = map__28764__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28762){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28762));
});

//# sourceMappingURL=client.js.map?rel=1447836357505