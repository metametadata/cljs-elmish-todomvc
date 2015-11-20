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
var seq__27879_27893 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27880_27894 = null;
var count__27881_27895 = (0);
var i__27882_27896 = (0);
while(true){
if((i__27882_27896 < count__27881_27895)){
var f_27897 = cljs.core._nth.call(null,chunk__27880_27894,i__27882_27896);
cljs.core.println.call(null,"  ",f_27897);

var G__27898 = seq__27879_27893;
var G__27899 = chunk__27880_27894;
var G__27900 = count__27881_27895;
var G__27901 = (i__27882_27896 + (1));
seq__27879_27893 = G__27898;
chunk__27880_27894 = G__27899;
count__27881_27895 = G__27900;
i__27882_27896 = G__27901;
continue;
} else {
var temp__4425__auto___27902 = cljs.core.seq.call(null,seq__27879_27893);
if(temp__4425__auto___27902){
var seq__27879_27903__$1 = temp__4425__auto___27902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27879_27903__$1)){
var c__17554__auto___27904 = cljs.core.chunk_first.call(null,seq__27879_27903__$1);
var G__27905 = cljs.core.chunk_rest.call(null,seq__27879_27903__$1);
var G__27906 = c__17554__auto___27904;
var G__27907 = cljs.core.count.call(null,c__17554__auto___27904);
var G__27908 = (0);
seq__27879_27893 = G__27905;
chunk__27880_27894 = G__27906;
count__27881_27895 = G__27907;
i__27882_27896 = G__27908;
continue;
} else {
var f_27909 = cljs.core.first.call(null,seq__27879_27903__$1);
cljs.core.println.call(null,"  ",f_27909);

var G__27910 = cljs.core.next.call(null,seq__27879_27903__$1);
var G__27911 = null;
var G__27912 = (0);
var G__27913 = (0);
seq__27879_27893 = G__27910;
chunk__27880_27894 = G__27911;
count__27881_27895 = G__27912;
i__27882_27896 = G__27913;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27914 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27914);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27914)))?cljs.core.second.call(null,arglists_27914):arglists_27914));
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
var seq__27883 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27884 = null;
var count__27885 = (0);
var i__27886 = (0);
while(true){
if((i__27886 < count__27885)){
var vec__27887 = cljs.core._nth.call(null,chunk__27884,i__27886);
var name = cljs.core.nth.call(null,vec__27887,(0),null);
var map__27888 = cljs.core.nth.call(null,vec__27887,(1),null);
var map__27888__$1 = ((((!((map__27888 == null)))?((((map__27888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27888):map__27888);
var doc = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27915 = seq__27883;
var G__27916 = chunk__27884;
var G__27917 = count__27885;
var G__27918 = (i__27886 + (1));
seq__27883 = G__27915;
chunk__27884 = G__27916;
count__27885 = G__27917;
i__27886 = G__27918;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27883);
if(temp__4425__auto__){
var seq__27883__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27883__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27883__$1);
var G__27919 = cljs.core.chunk_rest.call(null,seq__27883__$1);
var G__27920 = c__17554__auto__;
var G__27921 = cljs.core.count.call(null,c__17554__auto__);
var G__27922 = (0);
seq__27883 = G__27919;
chunk__27884 = G__27920;
count__27885 = G__27921;
i__27886 = G__27922;
continue;
} else {
var vec__27890 = cljs.core.first.call(null,seq__27883__$1);
var name = cljs.core.nth.call(null,vec__27890,(0),null);
var map__27891 = cljs.core.nth.call(null,vec__27890,(1),null);
var map__27891__$1 = ((((!((map__27891 == null)))?((((map__27891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27891):map__27891);
var doc = cljs.core.get.call(null,map__27891__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27891__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27923 = cljs.core.next.call(null,seq__27883__$1);
var G__27924 = null;
var G__27925 = (0);
var G__27926 = (0);
seq__27883 = G__27923;
chunk__27884 = G__27924;
count__27885 = G__27925;
i__27886 = G__27926;
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

//# sourceMappingURL=repl.js.map?rel=1447986933371