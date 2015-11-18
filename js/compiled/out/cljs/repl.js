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
var seq__27740_27754 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27741_27755 = null;
var count__27742_27756 = (0);
var i__27743_27757 = (0);
while(true){
if((i__27743_27757 < count__27742_27756)){
var f_27758 = cljs.core._nth.call(null,chunk__27741_27755,i__27743_27757);
cljs.core.println.call(null,"  ",f_27758);

var G__27759 = seq__27740_27754;
var G__27760 = chunk__27741_27755;
var G__27761 = count__27742_27756;
var G__27762 = (i__27743_27757 + (1));
seq__27740_27754 = G__27759;
chunk__27741_27755 = G__27760;
count__27742_27756 = G__27761;
i__27743_27757 = G__27762;
continue;
} else {
var temp__4425__auto___27763 = cljs.core.seq.call(null,seq__27740_27754);
if(temp__4425__auto___27763){
var seq__27740_27764__$1 = temp__4425__auto___27763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27740_27764__$1)){
var c__17554__auto___27765 = cljs.core.chunk_first.call(null,seq__27740_27764__$1);
var G__27766 = cljs.core.chunk_rest.call(null,seq__27740_27764__$1);
var G__27767 = c__17554__auto___27765;
var G__27768 = cljs.core.count.call(null,c__17554__auto___27765);
var G__27769 = (0);
seq__27740_27754 = G__27766;
chunk__27741_27755 = G__27767;
count__27742_27756 = G__27768;
i__27743_27757 = G__27769;
continue;
} else {
var f_27770 = cljs.core.first.call(null,seq__27740_27764__$1);
cljs.core.println.call(null,"  ",f_27770);

var G__27771 = cljs.core.next.call(null,seq__27740_27764__$1);
var G__27772 = null;
var G__27773 = (0);
var G__27774 = (0);
seq__27740_27754 = G__27771;
chunk__27741_27755 = G__27772;
count__27742_27756 = G__27773;
i__27743_27757 = G__27774;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27775 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27775);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27775)))?cljs.core.second.call(null,arglists_27775):arglists_27775));
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
var seq__27744 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27745 = null;
var count__27746 = (0);
var i__27747 = (0);
while(true){
if((i__27747 < count__27746)){
var vec__27748 = cljs.core._nth.call(null,chunk__27745,i__27747);
var name = cljs.core.nth.call(null,vec__27748,(0),null);
var map__27749 = cljs.core.nth.call(null,vec__27748,(1),null);
var map__27749__$1 = ((((!((map__27749 == null)))?((((map__27749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27749):map__27749);
var doc = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27776 = seq__27744;
var G__27777 = chunk__27745;
var G__27778 = count__27746;
var G__27779 = (i__27747 + (1));
seq__27744 = G__27776;
chunk__27745 = G__27777;
count__27746 = G__27778;
i__27747 = G__27779;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27744);
if(temp__4425__auto__){
var seq__27744__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27744__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27744__$1);
var G__27780 = cljs.core.chunk_rest.call(null,seq__27744__$1);
var G__27781 = c__17554__auto__;
var G__27782 = cljs.core.count.call(null,c__17554__auto__);
var G__27783 = (0);
seq__27744 = G__27780;
chunk__27745 = G__27781;
count__27746 = G__27782;
i__27747 = G__27783;
continue;
} else {
var vec__27751 = cljs.core.first.call(null,seq__27744__$1);
var name = cljs.core.nth.call(null,vec__27751,(0),null);
var map__27752 = cljs.core.nth.call(null,vec__27751,(1),null);
var map__27752__$1 = ((((!((map__27752 == null)))?((((map__27752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27752):map__27752);
var doc = cljs.core.get.call(null,map__27752__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27752__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27784 = cljs.core.next.call(null,seq__27744__$1);
var G__27785 = null;
var G__27786 = (0);
var G__27787 = (0);
seq__27744 = G__27784;
chunk__27745 = G__27785;
count__27746 = G__27786;
i__27747 = G__27787;
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

//# sourceMappingURL=repl.js.map?rel=1447836356946