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
var seq__28133_28147 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28134_28148 = null;
var count__28135_28149 = (0);
var i__28136_28150 = (0);
while(true){
if((i__28136_28150 < count__28135_28149)){
var f_28151 = cljs.core._nth.call(null,chunk__28134_28148,i__28136_28150);
cljs.core.println.call(null,"  ",f_28151);

var G__28152 = seq__28133_28147;
var G__28153 = chunk__28134_28148;
var G__28154 = count__28135_28149;
var G__28155 = (i__28136_28150 + (1));
seq__28133_28147 = G__28152;
chunk__28134_28148 = G__28153;
count__28135_28149 = G__28154;
i__28136_28150 = G__28155;
continue;
} else {
var temp__4425__auto___28156 = cljs.core.seq.call(null,seq__28133_28147);
if(temp__4425__auto___28156){
var seq__28133_28157__$1 = temp__4425__auto___28156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28133_28157__$1)){
var c__17554__auto___28158 = cljs.core.chunk_first.call(null,seq__28133_28157__$1);
var G__28159 = cljs.core.chunk_rest.call(null,seq__28133_28157__$1);
var G__28160 = c__17554__auto___28158;
var G__28161 = cljs.core.count.call(null,c__17554__auto___28158);
var G__28162 = (0);
seq__28133_28147 = G__28159;
chunk__28134_28148 = G__28160;
count__28135_28149 = G__28161;
i__28136_28150 = G__28162;
continue;
} else {
var f_28163 = cljs.core.first.call(null,seq__28133_28157__$1);
cljs.core.println.call(null,"  ",f_28163);

var G__28164 = cljs.core.next.call(null,seq__28133_28157__$1);
var G__28165 = null;
var G__28166 = (0);
var G__28167 = (0);
seq__28133_28147 = G__28164;
chunk__28134_28148 = G__28165;
count__28135_28149 = G__28166;
i__28136_28150 = G__28167;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28168 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28168);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28168)))?cljs.core.second.call(null,arglists_28168):arglists_28168));
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
var seq__28137 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28138 = null;
var count__28139 = (0);
var i__28140 = (0);
while(true){
if((i__28140 < count__28139)){
var vec__28141 = cljs.core._nth.call(null,chunk__28138,i__28140);
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

var G__28169 = seq__28137;
var G__28170 = chunk__28138;
var G__28171 = count__28139;
var G__28172 = (i__28140 + (1));
seq__28137 = G__28169;
chunk__28138 = G__28170;
count__28139 = G__28171;
i__28140 = G__28172;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28137);
if(temp__4425__auto__){
var seq__28137__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28137__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__28137__$1);
var G__28173 = cljs.core.chunk_rest.call(null,seq__28137__$1);
var G__28174 = c__17554__auto__;
var G__28175 = cljs.core.count.call(null,c__17554__auto__);
var G__28176 = (0);
seq__28137 = G__28173;
chunk__28138 = G__28174;
count__28139 = G__28175;
i__28140 = G__28176;
continue;
} else {
var vec__28144 = cljs.core.first.call(null,seq__28137__$1);
var name = cljs.core.nth.call(null,vec__28144,(0),null);
var map__28145 = cljs.core.nth.call(null,vec__28144,(1),null);
var map__28145__$1 = ((((!((map__28145 == null)))?((((map__28145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28145):map__28145);
var doc = cljs.core.get.call(null,map__28145__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28145__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28177 = cljs.core.next.call(null,seq__28137__$1);
var G__28178 = null;
var G__28179 = (0);
var G__28180 = (0);
seq__28137 = G__28177;
chunk__28138 = G__28178;
count__28139 = G__28179;
i__28140 = G__28180;
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

//# sourceMappingURL=repl.js.map?rel=1449606076487