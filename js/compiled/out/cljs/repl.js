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
var seq__28138_28152 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28139_28153 = null;
var count__28140_28154 = (0);
var i__28141_28155 = (0);
while(true){
if((i__28141_28155 < count__28140_28154)){
var f_28156 = cljs.core._nth.call(null,chunk__28139_28153,i__28141_28155);
cljs.core.println.call(null,"  ",f_28156);

var G__28157 = seq__28138_28152;
var G__28158 = chunk__28139_28153;
var G__28159 = count__28140_28154;
var G__28160 = (i__28141_28155 + (1));
seq__28138_28152 = G__28157;
chunk__28139_28153 = G__28158;
count__28140_28154 = G__28159;
i__28141_28155 = G__28160;
continue;
} else {
var temp__4425__auto___28161 = cljs.core.seq.call(null,seq__28138_28152);
if(temp__4425__auto___28161){
var seq__28138_28162__$1 = temp__4425__auto___28161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28138_28162__$1)){
var c__17554__auto___28163 = cljs.core.chunk_first.call(null,seq__28138_28162__$1);
var G__28164 = cljs.core.chunk_rest.call(null,seq__28138_28162__$1);
var G__28165 = c__17554__auto___28163;
var G__28166 = cljs.core.count.call(null,c__17554__auto___28163);
var G__28167 = (0);
seq__28138_28152 = G__28164;
chunk__28139_28153 = G__28165;
count__28140_28154 = G__28166;
i__28141_28155 = G__28167;
continue;
} else {
var f_28168 = cljs.core.first.call(null,seq__28138_28162__$1);
cljs.core.println.call(null,"  ",f_28168);

var G__28169 = cljs.core.next.call(null,seq__28138_28162__$1);
var G__28170 = null;
var G__28171 = (0);
var G__28172 = (0);
seq__28138_28152 = G__28169;
chunk__28139_28153 = G__28170;
count__28140_28154 = G__28171;
i__28141_28155 = G__28172;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28173 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28173);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28173)))?cljs.core.second.call(null,arglists_28173):arglists_28173));
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
var seq__28142 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28143 = null;
var count__28144 = (0);
var i__28145 = (0);
while(true){
if((i__28145 < count__28144)){
var vec__28146 = cljs.core._nth.call(null,chunk__28143,i__28145);
var name = cljs.core.nth.call(null,vec__28146,(0),null);
var map__28147 = cljs.core.nth.call(null,vec__28146,(1),null);
var map__28147__$1 = ((((!((map__28147 == null)))?((((map__28147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28147):map__28147);
var doc = cljs.core.get.call(null,map__28147__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28147__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28174 = seq__28142;
var G__28175 = chunk__28143;
var G__28176 = count__28144;
var G__28177 = (i__28145 + (1));
seq__28142 = G__28174;
chunk__28143 = G__28175;
count__28144 = G__28176;
i__28145 = G__28177;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28142);
if(temp__4425__auto__){
var seq__28142__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28142__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__28142__$1);
var G__28178 = cljs.core.chunk_rest.call(null,seq__28142__$1);
var G__28179 = c__17554__auto__;
var G__28180 = cljs.core.count.call(null,c__17554__auto__);
var G__28181 = (0);
seq__28142 = G__28178;
chunk__28143 = G__28179;
count__28144 = G__28180;
i__28145 = G__28181;
continue;
} else {
var vec__28149 = cljs.core.first.call(null,seq__28142__$1);
var name = cljs.core.nth.call(null,vec__28149,(0),null);
var map__28150 = cljs.core.nth.call(null,vec__28149,(1),null);
var map__28150__$1 = ((((!((map__28150 == null)))?((((map__28150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28150):map__28150);
var doc = cljs.core.get.call(null,map__28150__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28150__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28182 = cljs.core.next.call(null,seq__28142__$1);
var G__28183 = null;
var G__28184 = (0);
var G__28185 = (0);
seq__28142 = G__28182;
chunk__28143 = G__28183;
count__28144 = G__28184;
i__28145 = G__28185;
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

//# sourceMappingURL=repl.js.map?rel=1448614621583