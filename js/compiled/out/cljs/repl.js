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
var seq__28114_28128 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28115_28129 = null;
var count__28116_28130 = (0);
var i__28117_28131 = (0);
while(true){
if((i__28117_28131 < count__28116_28130)){
var f_28132 = cljs.core._nth.call(null,chunk__28115_28129,i__28117_28131);
cljs.core.println.call(null,"  ",f_28132);

var G__28133 = seq__28114_28128;
var G__28134 = chunk__28115_28129;
var G__28135 = count__28116_28130;
var G__28136 = (i__28117_28131 + (1));
seq__28114_28128 = G__28133;
chunk__28115_28129 = G__28134;
count__28116_28130 = G__28135;
i__28117_28131 = G__28136;
continue;
} else {
var temp__4425__auto___28137 = cljs.core.seq.call(null,seq__28114_28128);
if(temp__4425__auto___28137){
var seq__28114_28138__$1 = temp__4425__auto___28137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28114_28138__$1)){
var c__17554__auto___28139 = cljs.core.chunk_first.call(null,seq__28114_28138__$1);
var G__28140 = cljs.core.chunk_rest.call(null,seq__28114_28138__$1);
var G__28141 = c__17554__auto___28139;
var G__28142 = cljs.core.count.call(null,c__17554__auto___28139);
var G__28143 = (0);
seq__28114_28128 = G__28140;
chunk__28115_28129 = G__28141;
count__28116_28130 = G__28142;
i__28117_28131 = G__28143;
continue;
} else {
var f_28144 = cljs.core.first.call(null,seq__28114_28138__$1);
cljs.core.println.call(null,"  ",f_28144);

var G__28145 = cljs.core.next.call(null,seq__28114_28138__$1);
var G__28146 = null;
var G__28147 = (0);
var G__28148 = (0);
seq__28114_28128 = G__28145;
chunk__28115_28129 = G__28146;
count__28116_28130 = G__28147;
i__28117_28131 = G__28148;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28149 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28149);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28149)))?cljs.core.second.call(null,arglists_28149):arglists_28149));
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
var seq__28118 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28119 = null;
var count__28120 = (0);
var i__28121 = (0);
while(true){
if((i__28121 < count__28120)){
var vec__28122 = cljs.core._nth.call(null,chunk__28119,i__28121);
var name = cljs.core.nth.call(null,vec__28122,(0),null);
var map__28123 = cljs.core.nth.call(null,vec__28122,(1),null);
var map__28123__$1 = ((((!((map__28123 == null)))?((((map__28123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28123):map__28123);
var doc = cljs.core.get.call(null,map__28123__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28123__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28150 = seq__28118;
var G__28151 = chunk__28119;
var G__28152 = count__28120;
var G__28153 = (i__28121 + (1));
seq__28118 = G__28150;
chunk__28119 = G__28151;
count__28120 = G__28152;
i__28121 = G__28153;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28118);
if(temp__4425__auto__){
var seq__28118__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28118__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__28118__$1);
var G__28154 = cljs.core.chunk_rest.call(null,seq__28118__$1);
var G__28155 = c__17554__auto__;
var G__28156 = cljs.core.count.call(null,c__17554__auto__);
var G__28157 = (0);
seq__28118 = G__28154;
chunk__28119 = G__28155;
count__28120 = G__28156;
i__28121 = G__28157;
continue;
} else {
var vec__28125 = cljs.core.first.call(null,seq__28118__$1);
var name = cljs.core.nth.call(null,vec__28125,(0),null);
var map__28126 = cljs.core.nth.call(null,vec__28125,(1),null);
var map__28126__$1 = ((((!((map__28126 == null)))?((((map__28126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28126):map__28126);
var doc = cljs.core.get.call(null,map__28126__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28126__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28158 = cljs.core.next.call(null,seq__28118__$1);
var G__28159 = null;
var G__28160 = (0);
var G__28161 = (0);
seq__28118 = G__28158;
chunk__28119 = G__28159;
count__28120 = G__28160;
i__28121 = G__28161;
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

//# sourceMappingURL=repl.js.map?rel=1452772208265