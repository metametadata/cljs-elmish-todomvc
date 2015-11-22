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
var seq__28008_28022 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28009_28023 = null;
var count__28010_28024 = (0);
var i__28011_28025 = (0);
while(true){
if((i__28011_28025 < count__28010_28024)){
var f_28026 = cljs.core._nth.call(null,chunk__28009_28023,i__28011_28025);
cljs.core.println.call(null,"  ",f_28026);

var G__28027 = seq__28008_28022;
var G__28028 = chunk__28009_28023;
var G__28029 = count__28010_28024;
var G__28030 = (i__28011_28025 + (1));
seq__28008_28022 = G__28027;
chunk__28009_28023 = G__28028;
count__28010_28024 = G__28029;
i__28011_28025 = G__28030;
continue;
} else {
var temp__4425__auto___28031 = cljs.core.seq.call(null,seq__28008_28022);
if(temp__4425__auto___28031){
var seq__28008_28032__$1 = temp__4425__auto___28031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28008_28032__$1)){
var c__17554__auto___28033 = cljs.core.chunk_first.call(null,seq__28008_28032__$1);
var G__28034 = cljs.core.chunk_rest.call(null,seq__28008_28032__$1);
var G__28035 = c__17554__auto___28033;
var G__28036 = cljs.core.count.call(null,c__17554__auto___28033);
var G__28037 = (0);
seq__28008_28022 = G__28034;
chunk__28009_28023 = G__28035;
count__28010_28024 = G__28036;
i__28011_28025 = G__28037;
continue;
} else {
var f_28038 = cljs.core.first.call(null,seq__28008_28032__$1);
cljs.core.println.call(null,"  ",f_28038);

var G__28039 = cljs.core.next.call(null,seq__28008_28032__$1);
var G__28040 = null;
var G__28041 = (0);
var G__28042 = (0);
seq__28008_28022 = G__28039;
chunk__28009_28023 = G__28040;
count__28010_28024 = G__28041;
i__28011_28025 = G__28042;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28043 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28043);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28043)))?cljs.core.second.call(null,arglists_28043):arglists_28043));
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
var seq__28012 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28013 = null;
var count__28014 = (0);
var i__28015 = (0);
while(true){
if((i__28015 < count__28014)){
var vec__28016 = cljs.core._nth.call(null,chunk__28013,i__28015);
var name = cljs.core.nth.call(null,vec__28016,(0),null);
var map__28017 = cljs.core.nth.call(null,vec__28016,(1),null);
var map__28017__$1 = ((((!((map__28017 == null)))?((((map__28017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28017):map__28017);
var doc = cljs.core.get.call(null,map__28017__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28017__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28044 = seq__28012;
var G__28045 = chunk__28013;
var G__28046 = count__28014;
var G__28047 = (i__28015 + (1));
seq__28012 = G__28044;
chunk__28013 = G__28045;
count__28014 = G__28046;
i__28015 = G__28047;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28012);
if(temp__4425__auto__){
var seq__28012__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28012__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__28012__$1);
var G__28048 = cljs.core.chunk_rest.call(null,seq__28012__$1);
var G__28049 = c__17554__auto__;
var G__28050 = cljs.core.count.call(null,c__17554__auto__);
var G__28051 = (0);
seq__28012 = G__28048;
chunk__28013 = G__28049;
count__28014 = G__28050;
i__28015 = G__28051;
continue;
} else {
var vec__28019 = cljs.core.first.call(null,seq__28012__$1);
var name = cljs.core.nth.call(null,vec__28019,(0),null);
var map__28020 = cljs.core.nth.call(null,vec__28019,(1),null);
var map__28020__$1 = ((((!((map__28020 == null)))?((((map__28020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28020):map__28020);
var doc = cljs.core.get.call(null,map__28020__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28020__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28052 = cljs.core.next.call(null,seq__28012__$1);
var G__28053 = null;
var G__28054 = (0);
var G__28055 = (0);
seq__28012 = G__28052;
chunk__28013 = G__28053;
count__28014 = G__28054;
i__28015 = G__28055;
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

//# sourceMappingURL=repl.js.map?rel=1448194815343