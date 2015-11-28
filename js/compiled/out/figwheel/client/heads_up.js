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
var args__17816__auto__ = [];
var len__17809__auto___28208 = arguments.length;
var i__17810__auto___28209 = (0);
while(true){
if((i__17810__auto___28209 < len__17809__auto___28208)){
args__17816__auto__.push((arguments[i__17810__auto___28209]));

var G__28210 = (i__17810__auto___28209 + (1));
i__17810__auto___28209 = G__28210;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28200_28211 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28201_28212 = null;
var count__28202_28213 = (0);
var i__28203_28214 = (0);
while(true){
if((i__28203_28214 < count__28202_28213)){
var k_28215 = cljs.core._nth.call(null,chunk__28201_28212,i__28203_28214);
e.setAttribute(cljs.core.name.call(null,k_28215),cljs.core.get.call(null,attrs,k_28215));

var G__28216 = seq__28200_28211;
var G__28217 = chunk__28201_28212;
var G__28218 = count__28202_28213;
var G__28219 = (i__28203_28214 + (1));
seq__28200_28211 = G__28216;
chunk__28201_28212 = G__28217;
count__28202_28213 = G__28218;
i__28203_28214 = G__28219;
continue;
} else {
var temp__4425__auto___28220 = cljs.core.seq.call(null,seq__28200_28211);
if(temp__4425__auto___28220){
var seq__28200_28221__$1 = temp__4425__auto___28220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28200_28221__$1)){
var c__17554__auto___28222 = cljs.core.chunk_first.call(null,seq__28200_28221__$1);
var G__28223 = cljs.core.chunk_rest.call(null,seq__28200_28221__$1);
var G__28224 = c__17554__auto___28222;
var G__28225 = cljs.core.count.call(null,c__17554__auto___28222);
var G__28226 = (0);
seq__28200_28211 = G__28223;
chunk__28201_28212 = G__28224;
count__28202_28213 = G__28225;
i__28203_28214 = G__28226;
continue;
} else {
var k_28227 = cljs.core.first.call(null,seq__28200_28221__$1);
e.setAttribute(cljs.core.name.call(null,k_28227),cljs.core.get.call(null,attrs,k_28227));

var G__28228 = cljs.core.next.call(null,seq__28200_28221__$1);
var G__28229 = null;
var G__28230 = (0);
var G__28231 = (0);
seq__28200_28211 = G__28228;
chunk__28201_28212 = G__28229;
count__28202_28213 = G__28230;
i__28203_28214 = G__28231;
continue;
}
} else {
}
}
break;
}

var seq__28204_28232 = cljs.core.seq.call(null,children);
var chunk__28205_28233 = null;
var count__28206_28234 = (0);
var i__28207_28235 = (0);
while(true){
if((i__28207_28235 < count__28206_28234)){
var ch_28236 = cljs.core._nth.call(null,chunk__28205_28233,i__28207_28235);
e.appendChild(ch_28236);

var G__28237 = seq__28204_28232;
var G__28238 = chunk__28205_28233;
var G__28239 = count__28206_28234;
var G__28240 = (i__28207_28235 + (1));
seq__28204_28232 = G__28237;
chunk__28205_28233 = G__28238;
count__28206_28234 = G__28239;
i__28207_28235 = G__28240;
continue;
} else {
var temp__4425__auto___28241 = cljs.core.seq.call(null,seq__28204_28232);
if(temp__4425__auto___28241){
var seq__28204_28242__$1 = temp__4425__auto___28241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28204_28242__$1)){
var c__17554__auto___28243 = cljs.core.chunk_first.call(null,seq__28204_28242__$1);
var G__28244 = cljs.core.chunk_rest.call(null,seq__28204_28242__$1);
var G__28245 = c__17554__auto___28243;
var G__28246 = cljs.core.count.call(null,c__17554__auto___28243);
var G__28247 = (0);
seq__28204_28232 = G__28244;
chunk__28205_28233 = G__28245;
count__28206_28234 = G__28246;
i__28207_28235 = G__28247;
continue;
} else {
var ch_28248 = cljs.core.first.call(null,seq__28204_28242__$1);
e.appendChild(ch_28248);

var G__28249 = cljs.core.next.call(null,seq__28204_28242__$1);
var G__28250 = null;
var G__28251 = (0);
var G__28252 = (0);
seq__28204_28232 = G__28249;
chunk__28205_28233 = G__28250;
count__28206_28234 = G__28251;
i__28207_28235 = G__28252;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28197){
var G__28198 = cljs.core.first.call(null,seq28197);
var seq28197__$1 = cljs.core.next.call(null,seq28197);
var G__28199 = cljs.core.first.call(null,seq28197__$1);
var seq28197__$2 = cljs.core.next.call(null,seq28197__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28198,G__28199,seq28197__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17665__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17666__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17667__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17668__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17664__auto__,prefer_table__17665__auto__,method_cache__17666__auto__,cached_hierarchy__17667__auto__,hierarchy__17668__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17664__auto__,prefer_table__17665__auto__,method_cache__17666__auto__,cached_hierarchy__17667__auto__,hierarchy__17668__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17668__auto__,method_table__17664__auto__,prefer_table__17665__auto__,method_cache__17666__auto__,cached_hierarchy__17667__auto__));
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
var el_28253 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28253.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28253.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28253.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28253);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28254,st_map){
var map__28259 = p__28254;
var map__28259__$1 = ((((!((map__28259 == null)))?((((map__28259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28259):map__28259);
var container_el = cljs.core.get.call(null,map__28259__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28259,map__28259__$1,container_el){
return (function (p__28261){
var vec__28262 = p__28261;
var k = cljs.core.nth.call(null,vec__28262,(0),null);
var v = cljs.core.nth.call(null,vec__28262,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28259,map__28259__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28263,dom_str){
var map__28266 = p__28263;
var map__28266__$1 = ((((!((map__28266 == null)))?((((map__28266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28266):map__28266);
var c = map__28266__$1;
var content_area_el = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28268){
var map__28271 = p__28268;
var map__28271__$1 = ((((!((map__28271 == null)))?((((map__28271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28271):map__28271);
var content_area_el = cljs.core.get.call(null,map__28271__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto__){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto__){
return (function (state_28314){
var state_val_28315 = (state_28314[(1)]);
if((state_val_28315 === (1))){
var inst_28299 = (state_28314[(7)]);
var inst_28299__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28300 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28301 = ["10px","10px","100%","68px","1.0"];
var inst_28302 = cljs.core.PersistentHashMap.fromArrays(inst_28300,inst_28301);
var inst_28303 = cljs.core.merge.call(null,inst_28302,style);
var inst_28304 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28299__$1,inst_28303);
var inst_28305 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28299__$1,msg);
var inst_28306 = cljs.core.async.timeout.call(null,(300));
var state_28314__$1 = (function (){var statearr_28316 = state_28314;
(statearr_28316[(8)] = inst_28304);

(statearr_28316[(7)] = inst_28299__$1);

(statearr_28316[(9)] = inst_28305);

return statearr_28316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28314__$1,(2),inst_28306);
} else {
if((state_val_28315 === (2))){
var inst_28299 = (state_28314[(7)]);
var inst_28308 = (state_28314[(2)]);
var inst_28309 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28310 = ["auto"];
var inst_28311 = cljs.core.PersistentHashMap.fromArrays(inst_28309,inst_28310);
var inst_28312 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28299,inst_28311);
var state_28314__$1 = (function (){var statearr_28317 = state_28314;
(statearr_28317[(10)] = inst_28308);

return statearr_28317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28314__$1,inst_28312);
} else {
return null;
}
}
});})(c__24281__auto__))
;
return ((function (switch__24169__auto__,c__24281__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto____0 = (function (){
var statearr_28321 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28321[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto__);

(statearr_28321[(1)] = (1));

return statearr_28321;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto____1 = (function (state_28314){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_28314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e28322){if((e28322 instanceof Object)){
var ex__24173__auto__ = e28322;
var statearr_28323_28325 = state_28314;
(statearr_28323_28325[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28326 = state_28314;
state_28314 = G__28326;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto__ = function(state_28314){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto____1.call(this,state_28314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto__))
})();
var state__24283__auto__ = (function (){var statearr_28324 = f__24282__auto__.call(null);
(statearr_28324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto__);

return statearr_28324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto__))
);

return c__24281__auto__;
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
var vec__28328 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28328,(0),null);
var ln = cljs.core.nth.call(null,vec__28328,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28331 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28331,(0),null);
var file_line = cljs.core.nth.call(null,vec__28331,(1),null);
var file_column = cljs.core.nth.call(null,vec__28331,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28331,file_name,file_line,file_column){
return (function (p1__28329_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28329_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28331,file_name,file_line,file_column))
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
var map__28334 = figwheel.client.heads_up.ensure_container.call(null);
var map__28334__$1 = ((((!((map__28334 == null)))?((((map__28334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28334):map__28334);
var content_area_el = cljs.core.get.call(null,map__28334__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto__){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto__){
return (function (state_28382){
var state_val_28383 = (state_28382[(1)]);
if((state_val_28383 === (1))){
var inst_28365 = (state_28382[(7)]);
var inst_28365__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28366 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28367 = ["0.0"];
var inst_28368 = cljs.core.PersistentHashMap.fromArrays(inst_28366,inst_28367);
var inst_28369 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28365__$1,inst_28368);
var inst_28370 = cljs.core.async.timeout.call(null,(300));
var state_28382__$1 = (function (){var statearr_28384 = state_28382;
(statearr_28384[(7)] = inst_28365__$1);

(statearr_28384[(8)] = inst_28369);

return statearr_28384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28382__$1,(2),inst_28370);
} else {
if((state_val_28383 === (2))){
var inst_28365 = (state_28382[(7)]);
var inst_28372 = (state_28382[(2)]);
var inst_28373 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28374 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28375 = cljs.core.PersistentHashMap.fromArrays(inst_28373,inst_28374);
var inst_28376 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28365,inst_28375);
var inst_28377 = cljs.core.async.timeout.call(null,(200));
var state_28382__$1 = (function (){var statearr_28385 = state_28382;
(statearr_28385[(9)] = inst_28372);

(statearr_28385[(10)] = inst_28376);

return statearr_28385;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28382__$1,(3),inst_28377);
} else {
if((state_val_28383 === (3))){
var inst_28365 = (state_28382[(7)]);
var inst_28379 = (state_28382[(2)]);
var inst_28380 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28365,"");
var state_28382__$1 = (function (){var statearr_28386 = state_28382;
(statearr_28386[(11)] = inst_28379);

return statearr_28386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28382__$1,inst_28380);
} else {
return null;
}
}
}
});})(c__24281__auto__))
;
return ((function (switch__24169__auto__,c__24281__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24170__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24170__auto____0 = (function (){
var statearr_28390 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28390[(0)] = figwheel$client$heads_up$clear_$_state_machine__24170__auto__);

(statearr_28390[(1)] = (1));

return statearr_28390;
});
var figwheel$client$heads_up$clear_$_state_machine__24170__auto____1 = (function (state_28382){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_28382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e28391){if((e28391 instanceof Object)){
var ex__24173__auto__ = e28391;
var statearr_28392_28394 = state_28382;
(statearr_28392_28394[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28395 = state_28382;
state_28382 = G__28395;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24170__auto__ = function(state_28382){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24170__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24170__auto____1.call(this,state_28382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24170__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24170__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto__))
})();
var state__24283__auto__ = (function (){var statearr_28393 = f__24282__auto__.call(null);
(statearr_28393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto__);

return statearr_28393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto__))
);

return c__24281__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto__){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto__){
return (function (state_28427){
var state_val_28428 = (state_28427[(1)]);
if((state_val_28428 === (1))){
var inst_28417 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28427__$1 = state_28427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28427__$1,(2),inst_28417);
} else {
if((state_val_28428 === (2))){
var inst_28419 = (state_28427[(2)]);
var inst_28420 = cljs.core.async.timeout.call(null,(400));
var state_28427__$1 = (function (){var statearr_28429 = state_28427;
(statearr_28429[(7)] = inst_28419);

return statearr_28429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28427__$1,(3),inst_28420);
} else {
if((state_val_28428 === (3))){
var inst_28422 = (state_28427[(2)]);
var inst_28423 = figwheel.client.heads_up.clear.call(null);
var state_28427__$1 = (function (){var statearr_28430 = state_28427;
(statearr_28430[(8)] = inst_28422);

return statearr_28430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28427__$1,(4),inst_28423);
} else {
if((state_val_28428 === (4))){
var inst_28425 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28427__$1,inst_28425);
} else {
return null;
}
}
}
}
});})(c__24281__auto__))
;
return ((function (switch__24169__auto__,c__24281__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto____0 = (function (){
var statearr_28434 = [null,null,null,null,null,null,null,null,null];
(statearr_28434[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto__);

(statearr_28434[(1)] = (1));

return statearr_28434;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto____1 = (function (state_28427){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_28427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e28435){if((e28435 instanceof Object)){
var ex__24173__auto__ = e28435;
var statearr_28436_28438 = state_28427;
(statearr_28436_28438[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28439 = state_28427;
state_28427 = G__28439;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto__ = function(state_28427){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto____1.call(this,state_28427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto__))
})();
var state__24283__auto__ = (function (){var statearr_28437 = f__24282__auto__.call(null);
(statearr_28437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto__);

return statearr_28437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto__))
);

return c__24281__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1448614621792