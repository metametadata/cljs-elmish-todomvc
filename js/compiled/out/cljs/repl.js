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
var seq__28149_28163 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28150_28164 = null;
var count__28151_28165 = (0);
var i__28152_28166 = (0);
while(true){
if((i__28152_28166 < count__28151_28165)){
var f_28167 = cljs.core._nth.call(null,chunk__28150_28164,i__28152_28166);
cljs.core.println.call(null,"  ",f_28167);

var G__28168 = seq__28149_28163;
var G__28169 = chunk__28150_28164;
var G__28170 = count__28151_28165;
var G__28171 = (i__28152_28166 + (1));
seq__28149_28163 = G__28168;
chunk__28150_28164 = G__28169;
count__28151_28165 = G__28170;
i__28152_28166 = G__28171;
continue;
} else {
var temp__4425__auto___28172 = cljs.core.seq.call(null,seq__28149_28163);
if(temp__4425__auto___28172){
var seq__28149_28173__$1 = temp__4425__auto___28172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28149_28173__$1)){
var c__17554__auto___28174 = cljs.core.chunk_first.call(null,seq__28149_28173__$1);
var G__28175 = cljs.core.chunk_rest.call(null,seq__28149_28173__$1);
var G__28176 = c__17554__auto___28174;
var G__28177 = cljs.core.count.call(null,c__17554__auto___28174);
var G__28178 = (0);
seq__28149_28163 = G__28175;
chunk__28150_28164 = G__28176;
count__28151_28165 = G__28177;
i__28152_28166 = G__28178;
continue;
} else {
var f_28179 = cljs.core.first.call(null,seq__28149_28173__$1);
cljs.core.println.call(null,"  ",f_28179);

var G__28180 = cljs.core.next.call(null,seq__28149_28173__$1);
var G__28181 = null;
var G__28182 = (0);
var G__28183 = (0);
seq__28149_28163 = G__28180;
chunk__28150_28164 = G__28181;
count__28151_28165 = G__28182;
i__28152_28166 = G__28183;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28184 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28184);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28184)))?cljs.core.second.call(null,arglists_28184):arglists_28184));
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
var seq__28153 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28154 = null;
var count__28155 = (0);
var i__28156 = (0);
while(true){
if((i__28156 < count__28155)){
var vec__28157 = cljs.core._nth.call(null,chunk__28154,i__28156);
var name = cljs.core.nth.call(null,vec__28157,(0),null);
var map__28158 = cljs.core.nth.call(null,vec__28157,(1),null);
var map__28158__$1 = ((((!((map__28158 == null)))?((((map__28158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28158):map__28158);
var doc = cljs.core.get.call(null,map__28158__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28158__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28185 = seq__28153;
var G__28186 = chunk__28154;
var G__28187 = count__28155;
var G__28188 = (i__28156 + (1));
seq__28153 = G__28185;
chunk__28154 = G__28186;
count__28155 = G__28187;
i__28156 = G__28188;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28153);
if(temp__4425__auto__){
var seq__28153__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28153__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__28153__$1);
var G__28189 = cljs.core.chunk_rest.call(null,seq__28153__$1);
var G__28190 = c__17554__auto__;
var G__28191 = cljs.core.count.call(null,c__17554__auto__);
var G__28192 = (0);
seq__28153 = G__28189;
chunk__28154 = G__28190;
count__28155 = G__28191;
i__28156 = G__28192;
continue;
} else {
var vec__28160 = cljs.core.first.call(null,seq__28153__$1);
var name = cljs.core.nth.call(null,vec__28160,(0),null);
var map__28161 = cljs.core.nth.call(null,vec__28160,(1),null);
var map__28161__$1 = ((((!((map__28161 == null)))?((((map__28161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28161):map__28161);
var doc = cljs.core.get.call(null,map__28161__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28161__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28193 = cljs.core.next.call(null,seq__28153__$1);
var G__28194 = null;
var G__28195 = (0);
var G__28196 = (0);
seq__28153 = G__28193;
chunk__28154 = G__28194;
count__28155 = G__28195;
i__28156 = G__28196;
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

//# sourceMappingURL=repl.js.map?rel=1452529996560