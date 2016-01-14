// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.routing');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('frontend.devtools');
goog.require('goog.history.Html5History');

/**
 * @interface
 */
frontend.routing.HistoryProtocol = function(){};

frontend.routing.start_signaling = (function frontend$routing$start_signaling(this$,app){
if((!((this$ == null))) && (!((this$.frontend$routing$HistoryProtocol$start_signaling$arity$2 == null)))){
return this$.frontend$routing$HistoryProtocol$start_signaling$arity$2(this$,app);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (frontend.routing.start_signaling[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$,app);
} else {
var m__17407__auto____$1 = (frontend.routing.start_signaling["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$,app);
} else {
throw cljs.core.missing_protocol.call(null,"HistoryProtocol.start-signaling",this$);
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

if(typeof frontend.routing._goog_history !== 'undefined'){
} else {
frontend.routing._goog_history = (function (){var G__29481 = (new goog.history.Html5History());
G__29481.setEnabled(true);

return G__29481;
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

frontend.routing.History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17367__auto__,k29484,else__17368__auto__){
var self__ = this;
var this__17367__auto____$1 = this;
var G__29486 = k29484;
switch (G__29486) {
default:
return cljs.core.get.call(null,self__.__extmap,k29484,else__17368__auto__);

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

frontend.routing.History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29483){
var self__ = this;
var G__29483__$1 = this;
return (new cljs.core.RecordIter((0),G__29483__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
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

frontend.routing.History.prototype.frontend$routing$HistoryProtocol$start_signaling$arity$2 = (function (this$,connected_spec){
var self__ = this;
var this$__$1 = this;
goog.events.removeAll(frontend.routing._goog_history);

var callback = ((function (this$__$1){
return (function frontend$routing$callback(token){
return new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591).cljs$core$IFn$_invoke$arity$1(connected_spec).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.devtools","component","frontend.devtools/component",1500514896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.routing","on-navigate","frontend.routing/on-navigate",1475147406),token], null)], null));
});})(this$__$1))
;
goog.events.listen(frontend.routing._goog_history,goog.history.EventType.NAVIGATE,((function (this$__$1){
return (function (p1__29482_SHARP_){
if(cljs.core.truth_(frontend.routing._STAR__history_events_enabled_QMARK__STAR_)){
return callback.call(null,p1__29482_SHARP_.token);
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
return frontend.routing._goog_history.getToken();
});

frontend.routing.History.prototype.frontend$routing$HistoryProtocol$replace_token$arity$2 = (function (_this,token){
var self__ = this;
var _this__$1 = this;
var _STAR__history_events_enabled_QMARK__STAR_29487 = frontend.routing._STAR__history_events_enabled_QMARK__STAR_;
frontend.routing._STAR__history_events_enabled_QMARK__STAR_ = false;

try{return frontend.routing._goog_history.replaceToken(token);
}finally {frontend.routing._STAR__history_events_enabled_QMARK__STAR_ = _STAR__history_events_enabled_QMARK__STAR_29487;
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

frontend.routing.History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17372__auto__,k__17373__auto__,G__29483){
var self__ = this;
var this__17372__auto____$1 = this;
var pred__29488 = cljs.core.keyword_identical_QMARK_;
var expr__29489 = k__17373__auto__;
return (new frontend.routing.History(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17373__auto__,G__29483),null));
});

frontend.routing.History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17377__auto__){
var self__ = this;
var this__17377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

frontend.routing.History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17364__auto__,G__29483){
var self__ = this;
var this__17364__auto____$1 = this;
return (new frontend.routing.History(G__29483,self__.__extmap,self__.__hash));
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

frontend.routing.map__GT_History = (function frontend$routing$map__GT_History(G__29485){
return (new frontend.routing.History(null,cljs.core.dissoc.call(null,G__29485),null));
});

frontend.routing._wrap_control = (function frontend$routing$_wrap_control(control){
return (function frontend$routing$_wrap_control_$_wrapped_control(model,signal,dispatch){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29508 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29508,new cljs.core.Keyword("frontend.routing","on-navigate","frontend.routing/on-navigate",1475147406))){
var _PERCENT_ = cljs.core.nth.call(null,signal,(1));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.routing","-replace-token","frontend.routing/-replace-token",2056159483),_PERCENT_], null));

return control.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.routing","on-navigate","frontend.routing/on-navigate",1475147406),_PERCENT_], null),dispatch);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29511){if((e29511 instanceof Error)){
var e__20495__auto__ = e29511;
if((e__20495__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto__;
}
} else {
throw e29511;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29510){if((e29510 instanceof Error)){
var e__20495__auto__ = e29510;
if((e__20495__auto__ === cljs.core.match.backtrack)){
return control.call(null,model,signal,dispatch);
} else {
throw e__20495__auto__;
}
} else {
throw e29510;

}
}});
});
frontend.routing._wrap_reconcile = (function frontend$routing$_wrap_reconcile(reconcile,history){
return (function frontend$routing$_wrap_reconcile_$_wrapped_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29528 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29528,new cljs.core.Keyword("frontend.routing","-replace-token","frontend.routing/-replace-token",2056159483))){
var token = cljs.core.nth.call(null,action,(1));
frontend.routing.replace_token.call(null,history,token);

return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e29531){if((e29531 instanceof Error)){
var e__20495__auto__ = e29531;
if((e__20495__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20495__auto__;
}
} else {
throw e29531;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29530){if((e29530 instanceof Error)){
var e__20495__auto__ = e29530;
if((e__20495__auto__ === cljs.core.match.backtrack)){
return reconcile.call(null,model,action);
} else {
throw e__20495__auto__;
}
} else {
throw e29530;

}
}});
});
/**
 * Middleware handles [::on-navigate <token>] signal and dispatches it further to the component.
 *   Also allows updating urlbar on devtools replay.
 */
frontend.routing.wrap = (function frontend$routing$wrap(spec,history){
return cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),frontend.routing._wrap_control),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.routing._wrap_reconcile,history);
});

//# sourceMappingURL=routing.js.map?rel=1452772447846