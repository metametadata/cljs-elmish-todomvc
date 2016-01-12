// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.router');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.history.Html5History');

/**
 * @interface
 */
frontend.router.RouterProtocol = function(){};

frontend.router.set_listener = (function frontend$router$set_listener(this$,callback){
if((!((this$ == null))) && (!((this$.frontend$router$RouterProtocol$set_listener$arity$2 == null)))){
return this$.frontend$router$RouterProtocol$set_listener$arity$2(this$,callback);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (frontend.router.set_listener[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$,callback);
} else {
var m__17407__auto____$1 = (frontend.router.set_listener["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$,callback);
} else {
throw cljs.core.missing_protocol.call(null,"RouterProtocol.set-listener",this$);
}
}
}
});

frontend.router.token = (function frontend$router$token(this$){
if((!((this$ == null))) && (!((this$.frontend$router$RouterProtocol$token$arity$1 == null)))){
return this$.frontend$router$RouterProtocol$token$arity$1(this$);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (frontend.router.token[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$);
} else {
var m__17407__auto____$1 = (frontend.router.token["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"RouterProtocol.token",this$);
}
}
}
});

frontend.router.replace_token = (function frontend$router$replace_token(this$,token){
if((!((this$ == null))) && (!((this$.frontend$router$RouterProtocol$replace_token$arity$2 == null)))){
return this$.frontend$router$RouterProtocol$replace_token$arity$2(this$,token);
} else {
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (frontend.router.replace_token[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$,token);
} else {
var m__17407__auto____$1 = (frontend.router.replace_token["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"RouterProtocol.replace-token",this$);
}
}
}
});

if(typeof frontend.router._history !== 'undefined'){
} else {
frontend.router._history = (function (){var G__86992 = (new goog.history.Html5History());
G__86992.setEnabled(true);

return G__86992;
})();
}
frontend.router._STAR__history_events_enabled_QMARK__STAR_ = true;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {frontend.router.RouterProtocol}
 * @implements {cljs.core.ICounted}
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
frontend.router.Router = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
frontend.router.Router.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17365__auto__,k__17366__auto__){
var self__ = this;
var this__17365__auto____$1 = this;
return cljs.core._lookup.call(null,this__17365__auto____$1,k__17366__auto__,null);
});

frontend.router.Router.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17367__auto__,k86995,else__17368__auto__){
var self__ = this;
var this__17367__auto____$1 = this;
var G__86997 = k86995;
switch (G__86997) {
default:
return cljs.core.get.call(null,self__.__extmap,k86995,else__17368__auto__);

}
});

frontend.router.Router.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17379__auto__,writer__17380__auto__,opts__17381__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
var pr_pair__17382__auto__ = ((function (this__17379__auto____$1){
return (function (keyval__17383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,cljs.core.pr_writer,""," ","",opts__17381__auto__,keyval__17383__auto__);
});})(this__17379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,pr_pair__17382__auto__,"#frontend.router.Router{",", ","}",opts__17381__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

frontend.router.Router.prototype.cljs$core$IIterable$ = true;

frontend.router.Router.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__86994){
var self__ = this;
var G__86994__$1 = this;
return (new cljs.core.RecordIter((0),G__86994__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

frontend.router.Router.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17363__auto__){
var self__ = this;
var this__17363__auto____$1 = this;
return self__.__meta;
});

frontend.router.Router.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17359__auto__){
var self__ = this;
var this__17359__auto____$1 = this;
return (new frontend.router.Router(self__.__meta,self__.__extmap,self__.__hash));
});

frontend.router.Router.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17369__auto__){
var self__ = this;
var this__17369__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

frontend.router.Router.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17360__auto__){
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

frontend.router.Router.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17361__auto__,other__17362__auto__){
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

frontend.router.Router.prototype.frontend$router$RouterProtocol$ = true;

frontend.router.Router.prototype.frontend$router$RouterProtocol$set_listener$arity$2 = (function (_this,callback){
var self__ = this;
var _this__$1 = this;
goog.events.removeAll(frontend.router._history);

return goog.events.listen(frontend.router._history,goog.history.EventType.NAVIGATE,((function (_this__$1){
return (function (p1__86993_SHARP_){
if(cljs.core.truth_(frontend.router._STAR__history_events_enabled_QMARK__STAR_)){
return callback.call(null,p1__86993_SHARP_.token);
} else {
return null;
}
});})(_this__$1))
);
});

frontend.router.Router.prototype.frontend$router$RouterProtocol$token$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return frontend.router._history.getToken();
});

frontend.router.Router.prototype.frontend$router$RouterProtocol$replace_token$arity$2 = (function (_this,token){
var self__ = this;
var _this__$1 = this;
var _STAR__history_events_enabled_QMARK__STAR_86998 = frontend.router._STAR__history_events_enabled_QMARK__STAR_;
frontend.router._STAR__history_events_enabled_QMARK__STAR_ = false;

try{return frontend.router._history.replaceToken(token);
}finally {frontend.router._STAR__history_events_enabled_QMARK__STAR_ = _STAR__history_events_enabled_QMARK__STAR_86998;
}});

frontend.router.Router.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17374__auto__,k__17375__auto__){
var self__ = this;
var this__17374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17374__auto____$1),self__.__meta),k__17375__auto__);
} else {
return (new frontend.router.Router(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17375__auto__)),null));
}
});

frontend.router.Router.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17372__auto__,k__17373__auto__,G__86994){
var self__ = this;
var this__17372__auto____$1 = this;
var pred__86999 = cljs.core.keyword_identical_QMARK_;
var expr__87000 = k__17373__auto__;
return (new frontend.router.Router(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17373__auto__,G__86994),null));
});

frontend.router.Router.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17377__auto__){
var self__ = this;
var this__17377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

frontend.router.Router.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17364__auto__,G__86994){
var self__ = this;
var this__17364__auto____$1 = this;
return (new frontend.router.Router(G__86994,self__.__extmap,self__.__hash));
});

frontend.router.Router.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17370__auto__,entry__17371__auto__){
var self__ = this;
var this__17370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17371__auto__)){
return cljs.core._assoc.call(null,this__17370__auto____$1,cljs.core._nth.call(null,entry__17371__auto__,(0)),cljs.core._nth.call(null,entry__17371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17370__auto____$1,entry__17371__auto__);
}
});

frontend.router.Router.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

frontend.router.Router.cljs$lang$type = true;

frontend.router.Router.cljs$lang$ctorPrSeq = (function (this__17399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"frontend.router/Router");
});

frontend.router.Router.cljs$lang$ctorPrWriter = (function (this__17399__auto__,writer__17400__auto__){
return cljs.core._write.call(null,writer__17400__auto__,"frontend.router/Router");
});

frontend.router.__GT_Router = (function frontend$router$__GT_Router(){
return (new frontend.router.Router(null,null,null));
});

frontend.router.map__GT_Router = (function frontend$router$map__GT_Router(G__86996){
return (new frontend.router.Router(null,cljs.core.dissoc.call(null,G__86996),null));
});


//# sourceMappingURL=router.js.map?rel=1452600243717