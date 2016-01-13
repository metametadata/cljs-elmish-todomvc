// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.routing');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.history.Html5History');

/**
 * @interface
 */
frontend.routing.HistoryProtocol = function(){};

frontend.routing._start_listening = (function frontend$routing$_start_listening(this$,callback){
if((!((this$ == null))) && (!((this$.frontend$routing$HistoryProtocol$_start_listening$arity$2 == null)))){
return this$.frontend$routing$HistoryProtocol$_start_listening$arity$2(this$,callback);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (frontend.routing._start_listening[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$,callback);
} else {
var m__17407__auto____$1 = (frontend.routing._start_listening["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$,callback);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.-start-listening",this$);
}
}
}
});

frontend.routing.token = (function frontend$routing$token(this$){
if((!((this$ == null))) && (!((this$.frontend$routing$HistoryProtocol$token$arity$1 == null)))){
return this$.frontend$routing$HistoryProtocol$token$arity$1(this$);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (frontend.routing.token[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$);
} else {
var m__17407__auto____$1 = (frontend.routing.token["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.token",this$);
}
}
}
});

frontend.routing.replace_token = (function frontend$routing$replace_token(this$,token){
if((!((this$ == null))) && (!((this$.frontend$routing$HistoryProtocol$replace_token$arity$2 == null)))){
return this$.frontend$routing$HistoryProtocol$replace_token$arity$2(this$,token);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (frontend.routing.replace_token[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$,token);
} else {
var m__17407__auto____$1 = (frontend.routing.replace_token["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.replace-token",this$);
}
}
}
});

if(typeof frontend.routing._history !== 'undefined'){
} else {
frontend.routing._history = (function (){var G__109960 = (new goog.history.Html5History());
G__109960.setEnabled(true);

return G__109960;
})();
}
frontend.routing._STAR__history_events_enabled_QMARK__STAR_ = true;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {frontend.routing.HistoryProtocol}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.routing.History = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
frontend.routing.History.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17365__auto__,k__17366__auto__){
var self__ = this;
var this__17365__auto____$1 = this;
return cljs.core._lookup.call(null,this__17365__auto____$1,k__17366__auto__,null);
});

frontend.routing.History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17367__auto__,k109963,else__17368__auto__){
var self__ = this;
var this__17367__auto____$1 = this;
var G__109965 = k109963;
switch (G__109965) {
default:
return cljs.core.get.call(null,self__.__extmap,k109963,else__17368__auto__);

}
});

frontend.routing.History.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17379__auto__,writer__17380__auto__,opts__17381__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
var pr_pair__17382__auto__ = ((function (this__17379__auto____$1){
return (function (keyval__17383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,cljs.core.pr_writer,""," ","",opts__17381__auto__,keyval__17383__auto__);
});})(this__17379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,pr_pair__17382__auto__,"#frontend.routing.History{",", ","}",opts__17381__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

frontend.routing.History.prototype.cljs$core$IIterable$ = true;

frontend.routing.History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__109962){
var self__ = this;
var G__109962__$1 = this;
return (new cljs.core.RecordIter((0),G__109962__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

frontend.routing.History.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17363__auto__){
var self__ = this;
var this__17363__auto____$1 = this;
return self__.__meta;
});

frontend.routing.History.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17359__auto__){
var self__ = this;
var this__17359__auto____$1 = this;
return (new frontend.routing.History(self__.__meta,self__.__extmap,self__.__hash));
});

frontend.routing.History.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17369__auto__){
var self__ = this;
var this__17369__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

frontend.routing.History.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17360__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var h__17186__auto__ = self__.__hash;
if(!((h__17186__auto__ == null))){
return h__17186__auto__;
} else {
var h__17186__auto____$1 = cljs.core.hash_imap.call(null,this__17360__auto____$1);
self__.__hash = h__17186__auto____$1;

return h__17186__auto____$1;
}
});

frontend.routing.History.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17361__auto__,other__17362__auto__){
var self__ = this;
var this__17361__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16739__auto__ = other__17362__auto__;
if(cljs.core.truth_(and__16739__auto__)){
var and__16739__auto____$1 = (this__17361__auto____$1.constructor === other__17362__auto__.constructor);
if(and__16739__auto____$1){
return cljs.core.equiv_map.call(null,this__17361__auto____$1,other__17362__auto__);
} else {
return and__16739__auto____$1;
}
} else {
return and__16739__auto__;
}
})())){
return true;
} else {
return false;
}
});

frontend.routing.History.prototype.frontend$routing$HistoryProtocol$ = true;

frontend.routing.History.prototype.frontend$routing$HistoryProtocol$_start_listening$arity$2 = (function (this$,callback){
var self__ = this;
var this$__$1 = this;
goog.events.removeAll(frontend.routing._history);

goog.events.listen(frontend.routing._history,goog.history.EventType.NAVIGATE,((function (this$__$1){
return (function (p1__109961_SHARP_){
if(cljs.core.truth_(frontend.routing._STAR__history_events_enabled_QMARK__STAR_)){
return callback.call(null,p1__109961_SHARP_.token);
} else {
return null;
}
});})(this$__$1))
);

return callback.call(null,frontend.routing.token.call(null,this$__$1));
});

frontend.routing.History.prototype.frontend$routing$HistoryProtocol$token$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return frontend.routing._history.getToken();
});

frontend.routing.History.prototype.frontend$routing$HistoryProtocol$replace_token$arity$2 = (function (_this,token){
var self__ = this;
var _this__$1 = this;
var _STAR__history_events_enabled_QMARK__STAR_109966 = frontend.routing._STAR__history_events_enabled_QMARK__STAR_;
frontend.routing._STAR__history_events_enabled_QMARK__STAR_ = false;

try{return frontend.routing._history.replaceToken(token);
}finally {frontend.routing._STAR__history_events_enabled_QMARK__STAR_ = _STAR__history_events_enabled_QMARK__STAR_109966;
}});

frontend.routing.History.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17374__auto__,k__17375__auto__){
var self__ = this;
var this__17374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17374__auto____$1),self__.__meta),k__17375__auto__);
} else {
return (new frontend.routing.History(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17375__auto__)),null));
}
});

frontend.routing.History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17372__auto__,k__17373__auto__,G__109962){
var self__ = this;
var this__17372__auto____$1 = this;
var pred__109967 = cljs.core.keyword_identical_QMARK_;
var expr__109968 = k__17373__auto__;
return (new frontend.routing.History(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17373__auto__,G__109962),null));
});

frontend.routing.History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17377__auto__){
var self__ = this;
var this__17377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

frontend.routing.History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17364__auto__,G__109962){
var self__ = this;
var this__17364__auto____$1 = this;
return (new frontend.routing.History(G__109962,self__.__extmap,self__.__hash));
});

frontend.routing.History.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17370__auto__,entry__17371__auto__){
var self__ = this;
var this__17370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17371__auto__)){
return cljs.core._assoc.call(null,this__17370__auto____$1,cljs.core._nth.call(null,entry__17371__auto__,(0)),cljs.core._nth.call(null,entry__17371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17370__auto____$1,entry__17371__auto__);
}
});

frontend.routing.History.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

frontend.routing.History.cljs$lang$type = true;

frontend.routing.History.cljs$lang$ctorPrSeq = (function (this__17399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"frontend.routing/History");
});

frontend.routing.History.cljs$lang$ctorPrWriter = (function (this__17399__auto__,writer__17400__auto__){
return cljs.core._write.call(null,writer__17400__auto__,"frontend.routing/History");
});

frontend.routing.__GT_History = (function frontend$routing$__GT_History(){
return (new frontend.routing.History(null,null,null));
});

frontend.routing.map__GT_History = (function frontend$routing$map__GT_History(G__109964){
return (new frontend.routing.History(null,cljs.core.dissoc.call(null,G__109964),null));
});

frontend.routing._wrap_control = (function frontend$routing$_wrap_control(control,history){
return (function frontend$routing$_wrap_control_$_wrapped_control(model,signal,dispatch){
if(cljs.core._EQ_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
frontend.routing._start_listening.call(null,history,(function (p1__109971_SHARP_){
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.routing","-replace-token","frontend.routing/-replace-token",2056159483),p1__109971_SHARP_], null));

return control.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.routing","on-navigate","frontend.routing/on-navigate",1475147406),p1__109971_SHARP_], null),dispatch);
}));
} else {
}

return control.call(null,model,signal,dispatch);
});
});
frontend.routing._wrap_reconcile = (function frontend$routing$_wrap_reconcile(reconcile,history){
return (function frontend$routing$_wrap_reconcile_$_wrapped_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__109988 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__109988,new cljs.core.Keyword("frontend.routing","-replace-token","frontend.routing/-replace-token",2056159483))){
var token = cljs.core.nth.call(null,action,(1));
frontend.routing.replace_token.call(null,history,token);

return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e109991){if((e109991 instanceof Error)){
var e__20495__auto__ = e109991;
if((e__20495__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto__;
}
} else {
throw e109991;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e109990){if((e109990 instanceof Error)){
var e__20495__auto__ = e109990;
if((e__20495__auto__ === cljs.core.match.backtrack)){
return reconcile.call(null,model,action);
} else {
throw e__20495__auto__;
}
} else {
throw e109990;

}
}});
});
/**
 * On :on-connect signal middleware starts listening to navigation events and will
 *   dispatch [::on-navigate token] signals to the wrapped component.
 */
frontend.routing.wrap_routing = (function frontend$routing$wrap_routing(spec,history){
return cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),frontend.routing._wrap_control,history),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.routing._wrap_reconcile,history);
});

//# sourceMappingURL=routing.js.map?rel=1452717406959