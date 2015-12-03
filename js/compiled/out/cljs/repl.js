// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28130_28144 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28131_28145 = null;
var count__28132_28146 = (0);
var i__28133_28147 = (0);
while(true){
if((i__28133_28147 < count__28132_28146)){
var f_28148 = cljs.core._nth.call(null,chunk__28131_28145,i__28133_28147);
cljs.core.println.call(null,"  ",f_28148);

var G__28149 = seq__28130_28144;
var G__28150 = chunk__28131_28145;
var G__28151 = count__28132_28146;
var G__28152 = (i__28133_28147 + (1));
seq__28130_28144 = G__28149;
chunk__28131_28145 = G__28150;
count__28132_28146 = G__28151;
i__28133_28147 = G__28152;
continue;
} else {
var temp__4425__auto___28153 = cljs.core.seq.call(null,seq__28130_28144);
if(temp__4425__auto___28153){
var seq__28130_28154__$1 = temp__4425__auto___28153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28130_28154__$1)){
var c__17555__auto___28155 = cljs.core.chunk_first.call(null,seq__28130_28154__$1);
var G__28156 = cljs.core.chunk_rest.call(null,seq__28130_28154__$1);
var G__28157 = c__17555__auto___28155;
var G__28158 = cljs.core.count.call(null,c__17555__auto___28155);
var G__28159 = (0);
seq__28130_28144 = G__28156;
chunk__28131_28145 = G__28157;
count__28132_28146 = G__28158;
i__28133_28147 = G__28159;
continue;
} else {
var f_28160 = cljs.core.first.call(null,seq__28130_28154__$1);
cljs.core.println.call(null,"  ",f_28160);

var G__28161 = cljs.core.next.call(null,seq__28130_28154__$1);
var G__28162 = null;
var G__28163 = (0);
var G__28164 = (0);
seq__28130_28144 = G__28161;
chunk__28131_28145 = G__28162;
count__28132_28146 = G__28163;
i__28133_28147 = G__28164;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28165 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28165);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28165)))?cljs.core.second.call(null,arglists_28165):arglists_28165));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28134 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28135 = null;
var count__28136 = (0);
var i__28137 = (0);
while(true){
if((i__28137 < count__28136)){
var vec__28138 = cljs.core._nth.call(null,chunk__28135,i__28137);
var name = cljs.core.nth.call(null,vec__28138,(0),null);
var map__28139 = cljs.core.nth.call(null,vec__28138,(1),null);
var map__28139__$1 = ((((!((map__28139 == null)))?((((map__28139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28139):map__28139);
var doc = cljs.core.get.call(null,map__28139__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28139__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28166 = seq__28134;
var G__28167 = chunk__28135;
var G__28168 = count__28136;
var G__28169 = (i__28137 + (1));
seq__28134 = G__28166;
chunk__28135 = G__28167;
count__28136 = G__28168;
i__28137 = G__28169;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28134);
if(temp__4425__auto__){
var seq__28134__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28134__$1)){
var c__17555__auto__ = cljs.core.chunk_first.call(null,seq__28134__$1);
var G__28170 = cljs.core.chunk_rest.call(null,seq__28134__$1);
var G__28171 = c__17555__auto__;
var G__28172 = cljs.core.count.call(null,c__17555__auto__);
var G__28173 = (0);
seq__28134 = G__28170;
chunk__28135 = G__28171;
count__28136 = G__28172;
i__28137 = G__28173;
continue;
} else {
var vec__28141 = cljs.core.first.call(null,seq__28134__$1);
var name = cljs.core.nth.call(null,vec__28141,(0),null);
var map__28142 = cljs.core.nth.call(null,vec__28141,(1),null);
var map__28142__$1 = ((((!((map__28142 == null)))?((((map__28142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28142):map__28142);
var doc = cljs.core.get.call(null,map__28142__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28142__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28174 = cljs.core.next.call(null,seq__28134__$1);
var G__28175 = null;
var G__28176 = (0);
var G__28177 = (0);
seq__28134 = G__28174;
chunk__28135 = G__28175;
count__28136 = G__28176;
i__28137 = G__28177;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1449079002396