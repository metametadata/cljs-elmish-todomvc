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
var seq__31334_31348 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31335_31349 = null;
var count__31336_31350 = (0);
var i__31337_31351 = (0);
while(true){
if((i__31337_31351 < count__31336_31350)){
var f_31352 = cljs.core._nth.call(null,chunk__31335_31349,i__31337_31351);
cljs.core.println.call(null,"  ",f_31352);

var G__31353 = seq__31334_31348;
var G__31354 = chunk__31335_31349;
var G__31355 = count__31336_31350;
var G__31356 = (i__31337_31351 + (1));
seq__31334_31348 = G__31353;
chunk__31335_31349 = G__31354;
count__31336_31350 = G__31355;
i__31337_31351 = G__31356;
continue;
} else {
var temp__4425__auto___31357 = cljs.core.seq.call(null,seq__31334_31348);
if(temp__4425__auto___31357){
var seq__31334_31358__$1 = temp__4425__auto___31357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31334_31358__$1)){
var c__20993__auto___31359 = cljs.core.chunk_first.call(null,seq__31334_31358__$1);
var G__31360 = cljs.core.chunk_rest.call(null,seq__31334_31358__$1);
var G__31361 = c__20993__auto___31359;
var G__31362 = cljs.core.count.call(null,c__20993__auto___31359);
var G__31363 = (0);
seq__31334_31348 = G__31360;
chunk__31335_31349 = G__31361;
count__31336_31350 = G__31362;
i__31337_31351 = G__31363;
continue;
} else {
var f_31364 = cljs.core.first.call(null,seq__31334_31358__$1);
cljs.core.println.call(null,"  ",f_31364);

var G__31365 = cljs.core.next.call(null,seq__31334_31358__$1);
var G__31366 = null;
var G__31367 = (0);
var G__31368 = (0);
seq__31334_31348 = G__31365;
chunk__31335_31349 = G__31366;
count__31336_31350 = G__31367;
i__31337_31351 = G__31368;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31369 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20190__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20190__auto__)){
return or__20190__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31369);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31369)))?cljs.core.second.call(null,arglists_31369):arglists_31369));
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
var seq__31338 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31339 = null;
var count__31340 = (0);
var i__31341 = (0);
while(true){
if((i__31341 < count__31340)){
var vec__31342 = cljs.core._nth.call(null,chunk__31339,i__31341);
var name = cljs.core.nth.call(null,vec__31342,(0),null);
var map__31343 = cljs.core.nth.call(null,vec__31342,(1),null);
var map__31343__$1 = ((((!((map__31343 == null)))?((((map__31343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31343):map__31343);
var doc = cljs.core.get.call(null,map__31343__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31343__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31370 = seq__31338;
var G__31371 = chunk__31339;
var G__31372 = count__31340;
var G__31373 = (i__31341 + (1));
seq__31338 = G__31370;
chunk__31339 = G__31371;
count__31340 = G__31372;
i__31341 = G__31373;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31338);
if(temp__4425__auto__){
var seq__31338__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31338__$1)){
var c__20993__auto__ = cljs.core.chunk_first.call(null,seq__31338__$1);
var G__31374 = cljs.core.chunk_rest.call(null,seq__31338__$1);
var G__31375 = c__20993__auto__;
var G__31376 = cljs.core.count.call(null,c__20993__auto__);
var G__31377 = (0);
seq__31338 = G__31374;
chunk__31339 = G__31375;
count__31340 = G__31376;
i__31341 = G__31377;
continue;
} else {
var vec__31345 = cljs.core.first.call(null,seq__31338__$1);
var name = cljs.core.nth.call(null,vec__31345,(0),null);
var map__31346 = cljs.core.nth.call(null,vec__31345,(1),null);
var map__31346__$1 = ((((!((map__31346 == null)))?((((map__31346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31346):map__31346);
var doc = cljs.core.get.call(null,map__31346__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31346__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31378 = cljs.core.next.call(null,seq__31338__$1);
var G__31379 = null;
var G__31380 = (0);
var G__31381 = (0);
seq__31338 = G__31378;
chunk__31339 = G__31379;
count__31340 = G__31380;
i__31341 = G__31381;
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

//# sourceMappingURL=repl.js.map?rel=1452962192518