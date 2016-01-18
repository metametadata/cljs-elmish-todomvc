// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17772__auto__ = [];
var len__17765__auto___28104 = arguments.length;
var i__17766__auto___28105 = (0);
while(true){
if((i__17766__auto___28105 < len__17765__auto___28104)){
args__17772__auto__.push((arguments[i__17766__auto___28105]));

var G__28106 = (i__17766__auto___28105 + (1));
i__17766__auto___28105 = G__28106;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((2) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17773__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28096_28107 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28097_28108 = null;
var count__28098_28109 = (0);
var i__28099_28110 = (0);
while(true){
if((i__28099_28110 < count__28098_28109)){
var k_28111 = cljs.core._nth.call(null,chunk__28097_28108,i__28099_28110);
e.setAttribute(cljs.core.name.call(null,k_28111),cljs.core.get.call(null,attrs,k_28111));

var G__28112 = seq__28096_28107;
var G__28113 = chunk__28097_28108;
var G__28114 = count__28098_28109;
var G__28115 = (i__28099_28110 + (1));
seq__28096_28107 = G__28112;
chunk__28097_28108 = G__28113;
count__28098_28109 = G__28114;
i__28099_28110 = G__28115;
continue;
} else {
var temp__4425__auto___28116 = cljs.core.seq.call(null,seq__28096_28107);
if(temp__4425__auto___28116){
var seq__28096_28117__$1 = temp__4425__auto___28116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28096_28117__$1)){
var c__17510__auto___28118 = cljs.core.chunk_first.call(null,seq__28096_28117__$1);
var G__28119 = cljs.core.chunk_rest.call(null,seq__28096_28117__$1);
var G__28120 = c__17510__auto___28118;
var G__28121 = cljs.core.count.call(null,c__17510__auto___28118);
var G__28122 = (0);
seq__28096_28107 = G__28119;
chunk__28097_28108 = G__28120;
count__28098_28109 = G__28121;
i__28099_28110 = G__28122;
continue;
} else {
var k_28123 = cljs.core.first.call(null,seq__28096_28117__$1);
e.setAttribute(cljs.core.name.call(null,k_28123),cljs.core.get.call(null,attrs,k_28123));

var G__28124 = cljs.core.next.call(null,seq__28096_28117__$1);
var G__28125 = null;
var G__28126 = (0);
var G__28127 = (0);
seq__28096_28107 = G__28124;
chunk__28097_28108 = G__28125;
count__28098_28109 = G__28126;
i__28099_28110 = G__28127;
continue;
}
} else {
}
}
break;
}

var seq__28100_28128 = cljs.core.seq.call(null,children);
var chunk__28101_28129 = null;
var count__28102_28130 = (0);
var i__28103_28131 = (0);
while(true){
if((i__28103_28131 < count__28102_28130)){
var ch_28132 = cljs.core._nth.call(null,chunk__28101_28129,i__28103_28131);
e.appendChild(ch_28132);

var G__28133 = seq__28100_28128;
var G__28134 = chunk__28101_28129;
var G__28135 = count__28102_28130;
var G__28136 = (i__28103_28131 + (1));
seq__28100_28128 = G__28133;
chunk__28101_28129 = G__28134;
count__28102_28130 = G__28135;
i__28103_28131 = G__28136;
continue;
} else {
var temp__4425__auto___28137 = cljs.core.seq.call(null,seq__28100_28128);
if(temp__4425__auto___28137){
var seq__28100_28138__$1 = temp__4425__auto___28137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28100_28138__$1)){
var c__17510__auto___28139 = cljs.core.chunk_first.call(null,seq__28100_28138__$1);
var G__28140 = cljs.core.chunk_rest.call(null,seq__28100_28138__$1);
var G__28141 = c__17510__auto___28139;
var G__28142 = cljs.core.count.call(null,c__17510__auto___28139);
var G__28143 = (0);
seq__28100_28128 = G__28140;
chunk__28101_28129 = G__28141;
count__28102_28130 = G__28142;
i__28103_28131 = G__28143;
continue;
} else {
var ch_28144 = cljs.core.first.call(null,seq__28100_28138__$1);
e.appendChild(ch_28144);

var G__28145 = cljs.core.next.call(null,seq__28100_28138__$1);
var G__28146 = null;
var G__28147 = (0);
var G__28148 = (0);
seq__28100_28128 = G__28145;
chunk__28101_28129 = G__28146;
count__28102_28130 = G__28147;
i__28103_28131 = G__28148;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28093){
var G__28094 = cljs.core.first.call(null,seq28093);
var seq28093__$1 = cljs.core.next.call(null,seq28093);
var G__28095 = cljs.core.first.call(null,seq28093__$1);
var seq28093__$2 = cljs.core.next.call(null,seq28093__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28094,G__28095,seq28093__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17624__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17620__auto__,prefer_table__17621__auto__,method_cache__17622__auto__,cached_hierarchy__17623__auto__,hierarchy__17624__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17620__auto__,prefer_table__17621__auto__,method_cache__17622__auto__,cached_hierarchy__17623__auto__,hierarchy__17624__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17624__auto__,method_table__17620__auto__,prefer_table__17621__auto__,method_cache__17622__auto__,cached_hierarchy__17623__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28149 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28149.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28149.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28149.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28149);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28150,st_map){
var map__28155 = p__28150;
var map__28155__$1 = ((((!((map__28155 == null)))?((((map__28155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28155):map__28155);
var container_el = cljs.core.get.call(null,map__28155__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28155,map__28155__$1,container_el){
return (function (p__28157){
var vec__28158 = p__28157;
var k = cljs.core.nth.call(null,vec__28158,(0),null);
var v = cljs.core.nth.call(null,vec__28158,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28155,map__28155__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28159,dom_str){
var map__28162 = p__28159;
var map__28162__$1 = ((((!((map__28162 == null)))?((((map__28162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28162):map__28162);
var c = map__28162__$1;
var content_area_el = cljs.core.get.call(null,map__28162__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28164){
var map__28167 = p__28164;
var map__28167__$1 = ((((!((map__28167 == null)))?((((map__28167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28167):map__28167);
var content_area_el = cljs.core.get.call(null,map__28167__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto__){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto__){
return (function (state_28210){
var state_val_28211 = (state_28210[(1)]);
if((state_val_28211 === (1))){
var inst_28195 = (state_28210[(7)]);
var inst_28195__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28196 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28197 = ["10px","10px","100%","68px","1.0"];
var inst_28198 = cljs.core.PersistentHashMap.fromArrays(inst_28196,inst_28197);
var inst_28199 = cljs.core.merge.call(null,inst_28198,style);
var inst_28200 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28195__$1,inst_28199);
var inst_28201 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28195__$1,msg);
var inst_28202 = cljs.core.async.timeout.call(null,(300));
var state_28210__$1 = (function (){var statearr_28212 = state_28210;
(statearr_28212[(8)] = inst_28200);

(statearr_28212[(7)] = inst_28195__$1);

(statearr_28212[(9)] = inst_28201);

return statearr_28212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28210__$1,(2),inst_28202);
} else {
if((state_val_28211 === (2))){
var inst_28195 = (state_28210[(7)]);
var inst_28204 = (state_28210[(2)]);
var inst_28205 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28206 = ["auto"];
var inst_28207 = cljs.core.PersistentHashMap.fromArrays(inst_28205,inst_28206);
var inst_28208 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28195,inst_28207);
var state_28210__$1 = (function (){var statearr_28213 = state_28210;
(statearr_28213[(10)] = inst_28204);

return statearr_28213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28210__$1,inst_28208);
} else {
return null;
}
}
});})(c__24177__auto__))
;
return ((function (switch__24065__auto__,c__24177__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto____0 = (function (){
var statearr_28217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28217[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto__);

(statearr_28217[(1)] = (1));

return statearr_28217;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto____1 = (function (state_28210){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_28210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e28218){if((e28218 instanceof Object)){
var ex__24069__auto__ = e28218;
var statearr_28219_28221 = state_28210;
(statearr_28219_28221[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28222 = state_28210;
state_28210 = G__28222;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto__ = function(state_28210){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto____1.call(this,state_28210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto__))
})();
var state__24179__auto__ = (function (){var statearr_28220 = f__24178__auto__.call(null);
(statearr_28220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto__);

return statearr_28220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto__))
);

return c__24177__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28224 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28224,(0),null);
var ln = cljs.core.nth.call(null,vec__28224,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28227 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28227,(0),null);
var file_line = cljs.core.nth.call(null,vec__28227,(1),null);
var file_column = cljs.core.nth.call(null,vec__28227,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28227,file_name,file_line,file_column){
return (function (p1__28225_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28225_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28227,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16707__auto__ = file_line;
if(cljs.core.truth_(or__16707__auto__)){
return or__16707__auto__;
} else {
var and__16695__auto__ = cause;
if(cljs.core.truth_(and__16695__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16695__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28230 = figwheel.client.heads_up.ensure_container.call(null);
var map__28230__$1 = ((((!((map__28230 == null)))?((((map__28230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28230):map__28230);
var content_area_el = cljs.core.get.call(null,map__28230__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto__){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto__){
return (function (state_28278){
var state_val_28279 = (state_28278[(1)]);
if((state_val_28279 === (1))){
var inst_28261 = (state_28278[(7)]);
var inst_28261__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28262 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28263 = ["0.0"];
var inst_28264 = cljs.core.PersistentHashMap.fromArrays(inst_28262,inst_28263);
var inst_28265 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28261__$1,inst_28264);
var inst_28266 = cljs.core.async.timeout.call(null,(300));
var state_28278__$1 = (function (){var statearr_28280 = state_28278;
(statearr_28280[(7)] = inst_28261__$1);

(statearr_28280[(8)] = inst_28265);

return statearr_28280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28278__$1,(2),inst_28266);
} else {
if((state_val_28279 === (2))){
var inst_28261 = (state_28278[(7)]);
var inst_28268 = (state_28278[(2)]);
var inst_28269 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28270 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28271 = cljs.core.PersistentHashMap.fromArrays(inst_28269,inst_28270);
var inst_28272 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28261,inst_28271);
var inst_28273 = cljs.core.async.timeout.call(null,(200));
var state_28278__$1 = (function (){var statearr_28281 = state_28278;
(statearr_28281[(9)] = inst_28268);

(statearr_28281[(10)] = inst_28272);

return statearr_28281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28278__$1,(3),inst_28273);
} else {
if((state_val_28279 === (3))){
var inst_28261 = (state_28278[(7)]);
var inst_28275 = (state_28278[(2)]);
var inst_28276 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28261,"");
var state_28278__$1 = (function (){var statearr_28282 = state_28278;
(statearr_28282[(11)] = inst_28275);

return statearr_28282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28278__$1,inst_28276);
} else {
return null;
}
}
}
});})(c__24177__auto__))
;
return ((function (switch__24065__auto__,c__24177__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24066__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24066__auto____0 = (function (){
var statearr_28286 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28286[(0)] = figwheel$client$heads_up$clear_$_state_machine__24066__auto__);

(statearr_28286[(1)] = (1));

return statearr_28286;
});
var figwheel$client$heads_up$clear_$_state_machine__24066__auto____1 = (function (state_28278){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_28278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e28287){if((e28287 instanceof Object)){
var ex__24069__auto__ = e28287;
var statearr_28288_28290 = state_28278;
(statearr_28288_28290[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28291 = state_28278;
state_28278 = G__28291;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24066__auto__ = function(state_28278){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24066__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24066__auto____1.call(this,state_28278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24066__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24066__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto__))
})();
var state__24179__auto__ = (function (){var statearr_28289 = f__24178__auto__.call(null);
(statearr_28289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto__);

return statearr_28289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto__))
);

return c__24177__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto__){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto__){
return (function (state_28323){
var state_val_28324 = (state_28323[(1)]);
if((state_val_28324 === (1))){
var inst_28313 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28323__$1 = state_28323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28323__$1,(2),inst_28313);
} else {
if((state_val_28324 === (2))){
var inst_28315 = (state_28323[(2)]);
var inst_28316 = cljs.core.async.timeout.call(null,(400));
var state_28323__$1 = (function (){var statearr_28325 = state_28323;
(statearr_28325[(7)] = inst_28315);

return statearr_28325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28323__$1,(3),inst_28316);
} else {
if((state_val_28324 === (3))){
var inst_28318 = (state_28323[(2)]);
var inst_28319 = figwheel.client.heads_up.clear.call(null);
var state_28323__$1 = (function (){var statearr_28326 = state_28323;
(statearr_28326[(8)] = inst_28318);

return statearr_28326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28323__$1,(4),inst_28319);
} else {
if((state_val_28324 === (4))){
var inst_28321 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28323__$1,inst_28321);
} else {
return null;
}
}
}
}
});})(c__24177__auto__))
;
return ((function (switch__24065__auto__,c__24177__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto____0 = (function (){
var statearr_28330 = [null,null,null,null,null,null,null,null,null];
(statearr_28330[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto__);

(statearr_28330[(1)] = (1));

return statearr_28330;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto____1 = (function (state_28323){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_28323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e28331){if((e28331 instanceof Object)){
var ex__24069__auto__ = e28331;
var statearr_28332_28334 = state_28323;
(statearr_28332_28334[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28335 = state_28323;
state_28323 = G__28335;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto__ = function(state_28323){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto____1.call(this,state_28323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto__))
})();
var state__24179__auto__ = (function (){var statearr_28333 = f__24178__auto__.call(null);
(statearr_28333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto__);

return statearr_28333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto__))
);

return c__24177__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1453137583841