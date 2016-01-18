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
var seq__28034_28048 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28035_28049 = null;
var count__28036_28050 = (0);
var i__28037_28051 = (0);
while(true){
if((i__28037_28051 < count__28036_28050)){
var f_28052 = cljs.core._nth.call(null,chunk__28035_28049,i__28037_28051);
cljs.core.println.call(null,"  ",f_28052);

var G__28053 = seq__28034_28048;
var G__28054 = chunk__28035_28049;
var G__28055 = count__28036_28050;
var G__28056 = (i__28037_28051 + (1));
seq__28034_28048 = G__28053;
chunk__28035_28049 = G__28054;
count__28036_28050 = G__28055;
i__28037_28051 = G__28056;
continue;
} else {
var temp__4425__auto___28057 = cljs.core.seq.call(null,seq__28034_28048);
if(temp__4425__auto___28057){
var seq__28034_28058__$1 = temp__4425__auto___28057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28034_28058__$1)){
var c__17510__auto___28059 = cljs.core.chunk_first.call(null,seq__28034_28058__$1);
var G__28060 = cljs.core.chunk_rest.call(null,seq__28034_28058__$1);
var G__28061 = c__17510__auto___28059;
var G__28062 = cljs.core.count.call(null,c__17510__auto___28059);
var G__28063 = (0);
seq__28034_28048 = G__28060;
chunk__28035_28049 = G__28061;
count__28036_28050 = G__28062;
i__28037_28051 = G__28063;
continue;
} else {
var f_28064 = cljs.core.first.call(null,seq__28034_28058__$1);
cljs.core.println.call(null,"  ",f_28064);

var G__28065 = cljs.core.next.call(null,seq__28034_28058__$1);
var G__28066 = null;
var G__28067 = (0);
var G__28068 = (0);
seq__28034_28048 = G__28065;
chunk__28035_28049 = G__28066;
count__28036_28050 = G__28067;
i__28037_28051 = G__28068;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28069 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16707__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16707__auto__)){
return or__16707__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28069);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28069)))?cljs.core.second.call(null,arglists_28069):arglists_28069));
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
var seq__28038 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28039 = null;
var count__28040 = (0);
var i__28041 = (0);
while(true){
if((i__28041 < count__28040)){
var vec__28042 = cljs.core._nth.call(null,chunk__28039,i__28041);
var name = cljs.core.nth.call(null,vec__28042,(0),null);
var map__28043 = cljs.core.nth.call(null,vec__28042,(1),null);
var map__28043__$1 = ((((!((map__28043 == null)))?((((map__28043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28043):map__28043);
var doc = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28070 = seq__28038;
var G__28071 = chunk__28039;
var G__28072 = count__28040;
var G__28073 = (i__28041 + (1));
seq__28038 = G__28070;
chunk__28039 = G__28071;
count__28040 = G__28072;
i__28041 = G__28073;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28038);
if(temp__4425__auto__){
var seq__28038__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28038__$1)){
var c__17510__auto__ = cljs.core.chunk_first.call(null,seq__28038__$1);
var G__28074 = cljs.core.chunk_rest.call(null,seq__28038__$1);
var G__28075 = c__17510__auto__;
var G__28076 = cljs.core.count.call(null,c__17510__auto__);
var G__28077 = (0);
seq__28038 = G__28074;
chunk__28039 = G__28075;
count__28040 = G__28076;
i__28041 = G__28077;
continue;
} else {
var vec__28045 = cljs.core.first.call(null,seq__28038__$1);
var name = cljs.core.nth.call(null,vec__28045,(0),null);
var map__28046 = cljs.core.nth.call(null,vec__28045,(1),null);
var map__28046__$1 = ((((!((map__28046 == null)))?((((map__28046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28046):map__28046);
var doc = cljs.core.get.call(null,map__28046__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28046__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28078 = cljs.core.next.call(null,seq__28038__$1);
var G__28079 = null;
var G__28080 = (0);
var G__28081 = (0);
seq__28038 = G__28078;
chunk__28039 = G__28079;
count__28040 = G__28080;
i__28041 = G__28081;
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

//# sourceMappingURL=repl.js.map?rel=1453137583648