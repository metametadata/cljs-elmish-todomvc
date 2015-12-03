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
var args__17817__auto__ = [];
var len__17810__auto___28200 = arguments.length;
var i__17811__auto___28201 = (0);
while(true){
if((i__17811__auto___28201 < len__17810__auto___28200)){
args__17817__auto__.push((arguments[i__17811__auto___28201]));

var G__28202 = (i__17811__auto___28201 + (1));
i__17811__auto___28201 = G__28202;
continue;
} else {
}
break;
}

var argseq__17818__auto__ = ((((2) < args__17817__auto__.length))?(new cljs.core.IndexedSeq(args__17817__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17818__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28192_28203 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28193_28204 = null;
var count__28194_28205 = (0);
var i__28195_28206 = (0);
while(true){
if((i__28195_28206 < count__28194_28205)){
var k_28207 = cljs.core._nth.call(null,chunk__28193_28204,i__28195_28206);
e.setAttribute(cljs.core.name.call(null,k_28207),cljs.core.get.call(null,attrs,k_28207));

var G__28208 = seq__28192_28203;
var G__28209 = chunk__28193_28204;
var G__28210 = count__28194_28205;
var G__28211 = (i__28195_28206 + (1));
seq__28192_28203 = G__28208;
chunk__28193_28204 = G__28209;
count__28194_28205 = G__28210;
i__28195_28206 = G__28211;
continue;
} else {
var temp__4425__auto___28212 = cljs.core.seq.call(null,seq__28192_28203);
if(temp__4425__auto___28212){
var seq__28192_28213__$1 = temp__4425__auto___28212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28192_28213__$1)){
var c__17555__auto___28214 = cljs.core.chunk_first.call(null,seq__28192_28213__$1);
var G__28215 = cljs.core.chunk_rest.call(null,seq__28192_28213__$1);
var G__28216 = c__17555__auto___28214;
var G__28217 = cljs.core.count.call(null,c__17555__auto___28214);
var G__28218 = (0);
seq__28192_28203 = G__28215;
chunk__28193_28204 = G__28216;
count__28194_28205 = G__28217;
i__28195_28206 = G__28218;
continue;
} else {
var k_28219 = cljs.core.first.call(null,seq__28192_28213__$1);
e.setAttribute(cljs.core.name.call(null,k_28219),cljs.core.get.call(null,attrs,k_28219));

var G__28220 = cljs.core.next.call(null,seq__28192_28213__$1);
var G__28221 = null;
var G__28222 = (0);
var G__28223 = (0);
seq__28192_28203 = G__28220;
chunk__28193_28204 = G__28221;
count__28194_28205 = G__28222;
i__28195_28206 = G__28223;
continue;
}
} else {
}
}
break;
}

var seq__28196_28224 = cljs.core.seq.call(null,children);
var chunk__28197_28225 = null;
var count__28198_28226 = (0);
var i__28199_28227 = (0);
while(true){
if((i__28199_28227 < count__28198_28226)){
var ch_28228 = cljs.core._nth.call(null,chunk__28197_28225,i__28199_28227);
e.appendChild(ch_28228);

var G__28229 = seq__28196_28224;
var G__28230 = chunk__28197_28225;
var G__28231 = count__28198_28226;
var G__28232 = (i__28199_28227 + (1));
seq__28196_28224 = G__28229;
chunk__28197_28225 = G__28230;
count__28198_28226 = G__28231;
i__28199_28227 = G__28232;
continue;
} else {
var temp__4425__auto___28233 = cljs.core.seq.call(null,seq__28196_28224);
if(temp__4425__auto___28233){
var seq__28196_28234__$1 = temp__4425__auto___28233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28196_28234__$1)){
var c__17555__auto___28235 = cljs.core.chunk_first.call(null,seq__28196_28234__$1);
var G__28236 = cljs.core.chunk_rest.call(null,seq__28196_28234__$1);
var G__28237 = c__17555__auto___28235;
var G__28238 = cljs.core.count.call(null,c__17555__auto___28235);
var G__28239 = (0);
seq__28196_28224 = G__28236;
chunk__28197_28225 = G__28237;
count__28198_28226 = G__28238;
i__28199_28227 = G__28239;
continue;
} else {
var ch_28240 = cljs.core.first.call(null,seq__28196_28234__$1);
e.appendChild(ch_28240);

var G__28241 = cljs.core.next.call(null,seq__28196_28234__$1);
var G__28242 = null;
var G__28243 = (0);
var G__28244 = (0);
seq__28196_28224 = G__28241;
chunk__28197_28225 = G__28242;
count__28198_28226 = G__28243;
i__28199_28227 = G__28244;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28189){
var G__28190 = cljs.core.first.call(null,seq28189);
var seq28189__$1 = cljs.core.next.call(null,seq28189);
var G__28191 = cljs.core.first.call(null,seq28189__$1);
var seq28189__$2 = cljs.core.next.call(null,seq28189__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28190,G__28191,seq28189__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17665__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17666__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17667__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17668__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17669__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17665__auto__,prefer_table__17666__auto__,method_cache__17667__auto__,cached_hierarchy__17668__auto__,hierarchy__17669__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17665__auto__,prefer_table__17666__auto__,method_cache__17667__auto__,cached_hierarchy__17668__auto__,hierarchy__17669__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17669__auto__,method_table__17665__auto__,prefer_table__17666__auto__,method_cache__17667__auto__,cached_hierarchy__17668__auto__));
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
var el_28245 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28245.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28245.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28245.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28245);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28246,st_map){
var map__28251 = p__28246;
var map__28251__$1 = ((((!((map__28251 == null)))?((((map__28251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28251):map__28251);
var container_el = cljs.core.get.call(null,map__28251__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28251,map__28251__$1,container_el){
return (function (p__28253){
var vec__28254 = p__28253;
var k = cljs.core.nth.call(null,vec__28254,(0),null);
var v = cljs.core.nth.call(null,vec__28254,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28251,map__28251__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28255,dom_str){
var map__28258 = p__28255;
var map__28258__$1 = ((((!((map__28258 == null)))?((((map__28258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28258):map__28258);
var c = map__28258__$1;
var content_area_el = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28260){
var map__28263 = p__28260;
var map__28263__$1 = ((((!((map__28263 == null)))?((((map__28263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28263):map__28263);
var content_area_el = cljs.core.get.call(null,map__28263__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto__){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto__){
return (function (state_28306){
var state_val_28307 = (state_28306[(1)]);
if((state_val_28307 === (1))){
var inst_28291 = (state_28306[(7)]);
var inst_28291__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28292 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28293 = ["10px","10px","100%","68px","1.0"];
var inst_28294 = cljs.core.PersistentHashMap.fromArrays(inst_28292,inst_28293);
var inst_28295 = cljs.core.merge.call(null,inst_28294,style);
var inst_28296 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28291__$1,inst_28295);
var inst_28297 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28291__$1,msg);
var inst_28298 = cljs.core.async.timeout.call(null,(300));
var state_28306__$1 = (function (){var statearr_28308 = state_28306;
(statearr_28308[(8)] = inst_28296);

(statearr_28308[(9)] = inst_28297);

(statearr_28308[(7)] = inst_28291__$1);

return statearr_28308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28306__$1,(2),inst_28298);
} else {
if((state_val_28307 === (2))){
var inst_28291 = (state_28306[(7)]);
var inst_28300 = (state_28306[(2)]);
var inst_28301 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28302 = ["auto"];
var inst_28303 = cljs.core.PersistentHashMap.fromArrays(inst_28301,inst_28302);
var inst_28304 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28291,inst_28303);
var state_28306__$1 = (function (){var statearr_28309 = state_28306;
(statearr_28309[(10)] = inst_28300);

return statearr_28309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28306__$1,inst_28304);
} else {
return null;
}
}
});})(c__24273__auto__))
;
return ((function (switch__24161__auto__,c__24273__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto____0 = (function (){
var statearr_28313 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28313[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto__);

(statearr_28313[(1)] = (1));

return statearr_28313;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto____1 = (function (state_28306){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_28306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e28314){if((e28314 instanceof Object)){
var ex__24165__auto__ = e28314;
var statearr_28315_28317 = state_28306;
(statearr_28315_28317[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28318 = state_28306;
state_28306 = G__28318;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto__ = function(state_28306){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto____1.call(this,state_28306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto__))
})();
var state__24275__auto__ = (function (){var statearr_28316 = f__24274__auto__.call(null);
(statearr_28316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto__);

return statearr_28316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto__))
);

return c__24273__auto__;
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
var vec__28320 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28320,(0),null);
var ln = cljs.core.nth.call(null,vec__28320,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28323 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28323,(0),null);
var file_line = cljs.core.nth.call(null,vec__28323,(1),null);
var file_column = cljs.core.nth.call(null,vec__28323,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28323,file_name,file_line,file_column){
return (function (p1__28321_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28321_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28323,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16751__auto__ = file_line;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
var and__16739__auto__ = cause;
if(cljs.core.truth_(and__16739__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16739__auto__;
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
var map__28326 = figwheel.client.heads_up.ensure_container.call(null);
var map__28326__$1 = ((((!((map__28326 == null)))?((((map__28326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28326):map__28326);
var content_area_el = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto__){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto__){
return (function (state_28374){
var state_val_28375 = (state_28374[(1)]);
if((state_val_28375 === (1))){
var inst_28357 = (state_28374[(7)]);
var inst_28357__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28358 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28359 = ["0.0"];
var inst_28360 = cljs.core.PersistentHashMap.fromArrays(inst_28358,inst_28359);
var inst_28361 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28357__$1,inst_28360);
var inst_28362 = cljs.core.async.timeout.call(null,(300));
var state_28374__$1 = (function (){var statearr_28376 = state_28374;
(statearr_28376[(8)] = inst_28361);

(statearr_28376[(7)] = inst_28357__$1);

return statearr_28376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28374__$1,(2),inst_28362);
} else {
if((state_val_28375 === (2))){
var inst_28357 = (state_28374[(7)]);
var inst_28364 = (state_28374[(2)]);
var inst_28365 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28366 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28367 = cljs.core.PersistentHashMap.fromArrays(inst_28365,inst_28366);
var inst_28368 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28357,inst_28367);
var inst_28369 = cljs.core.async.timeout.call(null,(200));
var state_28374__$1 = (function (){var statearr_28377 = state_28374;
(statearr_28377[(9)] = inst_28368);

(statearr_28377[(10)] = inst_28364);

return statearr_28377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28374__$1,(3),inst_28369);
} else {
if((state_val_28375 === (3))){
var inst_28357 = (state_28374[(7)]);
var inst_28371 = (state_28374[(2)]);
var inst_28372 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28357,"");
var state_28374__$1 = (function (){var statearr_28378 = state_28374;
(statearr_28378[(11)] = inst_28371);

return statearr_28378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28374__$1,inst_28372);
} else {
return null;
}
}
}
});})(c__24273__auto__))
;
return ((function (switch__24161__auto__,c__24273__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24162__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24162__auto____0 = (function (){
var statearr_28382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28382[(0)] = figwheel$client$heads_up$clear_$_state_machine__24162__auto__);

(statearr_28382[(1)] = (1));

return statearr_28382;
});
var figwheel$client$heads_up$clear_$_state_machine__24162__auto____1 = (function (state_28374){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_28374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e28383){if((e28383 instanceof Object)){
var ex__24165__auto__ = e28383;
var statearr_28384_28386 = state_28374;
(statearr_28384_28386[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28387 = state_28374;
state_28374 = G__28387;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24162__auto__ = function(state_28374){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24162__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24162__auto____1.call(this,state_28374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24162__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24162__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto__))
})();
var state__24275__auto__ = (function (){var statearr_28385 = f__24274__auto__.call(null);
(statearr_28385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto__);

return statearr_28385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto__))
);

return c__24273__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto__){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto__){
return (function (state_28419){
var state_val_28420 = (state_28419[(1)]);
if((state_val_28420 === (1))){
var inst_28409 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28419__$1 = state_28419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28419__$1,(2),inst_28409);
} else {
if((state_val_28420 === (2))){
var inst_28411 = (state_28419[(2)]);
var inst_28412 = cljs.core.async.timeout.call(null,(400));
var state_28419__$1 = (function (){var statearr_28421 = state_28419;
(statearr_28421[(7)] = inst_28411);

return statearr_28421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28419__$1,(3),inst_28412);
} else {
if((state_val_28420 === (3))){
var inst_28414 = (state_28419[(2)]);
var inst_28415 = figwheel.client.heads_up.clear.call(null);
var state_28419__$1 = (function (){var statearr_28422 = state_28419;
(statearr_28422[(8)] = inst_28414);

return statearr_28422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28419__$1,(4),inst_28415);
} else {
if((state_val_28420 === (4))){
var inst_28417 = (state_28419[(2)]);
var state_28419__$1 = state_28419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28419__$1,inst_28417);
} else {
return null;
}
}
}
}
});})(c__24273__auto__))
;
return ((function (switch__24161__auto__,c__24273__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto____0 = (function (){
var statearr_28426 = [null,null,null,null,null,null,null,null,null];
(statearr_28426[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto__);

(statearr_28426[(1)] = (1));

return statearr_28426;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto____1 = (function (state_28419){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_28419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e28427){if((e28427 instanceof Object)){
var ex__24165__auto__ = e28427;
var statearr_28428_28430 = state_28419;
(statearr_28428_28430[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28431 = state_28419;
state_28419 = G__28431;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto__ = function(state_28419){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto____1.call(this,state_28419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto__))
})();
var state__24275__auto__ = (function (){var statearr_28429 = f__24274__auto__.call(null);
(statearr_28429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto__);

return statearr_28429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto__))
);

return c__24273__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1449079002596