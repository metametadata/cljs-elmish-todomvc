// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24318 = [];
var len__17810__auto___24324 = arguments.length;
var i__17811__auto___24325 = (0);
while(true){
if((i__17811__auto___24325 < len__17810__auto___24324)){
args24318.push((arguments[i__17811__auto___24325]));

var G__24326 = (i__17811__auto___24325 + (1));
i__17811__auto___24325 = G__24326;
continue;
} else {
}
break;
}

var G__24320 = args24318.length;
switch (G__24320) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24318.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24321 = (function (f,blockable,meta24322){
this.f = f;
this.blockable = blockable;
this.meta24322 = meta24322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24323,meta24322__$1){
var self__ = this;
var _24323__$1 = this;
return (new cljs.core.async.t_cljs$core$async24321(self__.f,self__.blockable,meta24322__$1));
});

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24323){
var self__ = this;
var _24323__$1 = this;
return self__.meta24322;
});

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24322","meta24322",1854836484,null)], null);
});

cljs.core.async.t_cljs$core$async24321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24321";

cljs.core.async.t_cljs$core$async24321.cljs$lang$ctorPrWriter = (function (this__17350__auto__,writer__17351__auto__,opt__17352__auto__){
return cljs.core._write.call(null,writer__17351__auto__,"cljs.core.async/t_cljs$core$async24321");
});

cljs.core.async.__GT_t_cljs$core$async24321 = (function cljs$core$async$__GT_t_cljs$core$async24321(f__$1,blockable__$1,meta24322){
return (new cljs.core.async.t_cljs$core$async24321(f__$1,blockable__$1,meta24322));
});

}

return (new cljs.core.async.t_cljs$core$async24321(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24330 = [];
var len__17810__auto___24333 = arguments.length;
var i__17811__auto___24334 = (0);
while(true){
if((i__17811__auto___24334 < len__17810__auto___24333)){
args24330.push((arguments[i__17811__auto___24334]));

var G__24335 = (i__17811__auto___24334 + (1));
i__17811__auto___24334 = G__24335;
continue;
} else {
}
break;
}

var G__24332 = args24330.length;
switch (G__24332) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24330.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24337 = [];
var len__17810__auto___24340 = arguments.length;
var i__17811__auto___24341 = (0);
while(true){
if((i__17811__auto___24341 < len__17810__auto___24340)){
args24337.push((arguments[i__17811__auto___24341]));

var G__24342 = (i__17811__auto___24341 + (1));
i__17811__auto___24341 = G__24342;
continue;
} else {
}
break;
}

var G__24339 = args24337.length;
switch (G__24339) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24337.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24344 = [];
var len__17810__auto___24347 = arguments.length;
var i__17811__auto___24348 = (0);
while(true){
if((i__17811__auto___24348 < len__17810__auto___24347)){
args24344.push((arguments[i__17811__auto___24348]));

var G__24349 = (i__17811__auto___24348 + (1));
i__17811__auto___24348 = G__24349;
continue;
} else {
}
break;
}

var G__24346 = args24344.length;
switch (G__24346) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24344.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24351 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24351);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24351,ret){
return (function (){
return fn1.call(null,val_24351);
});})(val_24351,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24352 = [];
var len__17810__auto___24355 = arguments.length;
var i__17811__auto___24356 = (0);
while(true){
if((i__17811__auto___24356 < len__17810__auto___24355)){
args24352.push((arguments[i__17811__auto___24356]));

var G__24357 = (i__17811__auto___24356 + (1));
i__17811__auto___24356 = G__24357;
continue;
} else {
}
break;
}

var G__24354 = args24352.length;
switch (G__24354) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24352.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17655__auto___24359 = n;
var x_24360 = (0);
while(true){
if((x_24360 < n__17655__auto___24359)){
(a[x_24360] = (0));

var G__24361 = (x_24360 + (1));
x_24360 = G__24361;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24362 = (i + (1));
i = G__24362;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24366 = (function (alt_flag,flag,meta24367){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24367 = meta24367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24368,meta24367__$1){
var self__ = this;
var _24368__$1 = this;
return (new cljs.core.async.t_cljs$core$async24366(self__.alt_flag,self__.flag,meta24367__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24368){
var self__ = this;
var _24368__$1 = this;
return self__.meta24367;
});})(flag))
;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24366.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24367","meta24367",-2084688094,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24366";

cljs.core.async.t_cljs$core$async24366.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17350__auto__,writer__17351__auto__,opt__17352__auto__){
return cljs.core._write.call(null,writer__17351__auto__,"cljs.core.async/t_cljs$core$async24366");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24366 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24366(alt_flag__$1,flag__$1,meta24367){
return (new cljs.core.async.t_cljs$core$async24366(alt_flag__$1,flag__$1,meta24367));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24366(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24372 = (function (alt_handler,flag,cb,meta24373){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24373 = meta24373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24374,meta24373__$1){
var self__ = this;
var _24374__$1 = this;
return (new cljs.core.async.t_cljs$core$async24372(self__.alt_handler,self__.flag,self__.cb,meta24373__$1));
});

cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24374){
var self__ = this;
var _24374__$1 = this;
return self__.meta24373;
});

cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24373","meta24373",1438986967,null)], null);
});

cljs.core.async.t_cljs$core$async24372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24372";

cljs.core.async.t_cljs$core$async24372.cljs$lang$ctorPrWriter = (function (this__17350__auto__,writer__17351__auto__,opt__17352__auto__){
return cljs.core._write.call(null,writer__17351__auto__,"cljs.core.async/t_cljs$core$async24372");
});

cljs.core.async.__GT_t_cljs$core$async24372 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24372(alt_handler__$1,flag__$1,cb__$1,meta24373){
return (new cljs.core.async.t_cljs$core$async24372(alt_handler__$1,flag__$1,cb__$1,meta24373));
});

}

return (new cljs.core.async.t_cljs$core$async24372(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24375_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24375_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24376_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24376_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16751__auto__ = wport;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24377 = (i + (1));
i = G__24377;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16751__auto__ = ret;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16739__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16739__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17817__auto__ = [];
var len__17810__auto___24383 = arguments.length;
var i__17811__auto___24384 = (0);
while(true){
if((i__17811__auto___24384 < len__17810__auto___24383)){
args__17817__auto__.push((arguments[i__17811__auto___24384]));

var G__24385 = (i__17811__auto___24384 + (1));
i__17811__auto___24384 = G__24385;
continue;
} else {
}
break;
}

var argseq__17818__auto__ = ((((1) < args__17817__auto__.length))?(new cljs.core.IndexedSeq(args__17817__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17818__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24380){
var map__24381 = p__24380;
var map__24381__$1 = ((((!((map__24381 == null)))?((((map__24381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24381):map__24381);
var opts = map__24381__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24378){
var G__24379 = cljs.core.first.call(null,seq24378);
var seq24378__$1 = cljs.core.next.call(null,seq24378);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24379,seq24378__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24386 = [];
var len__17810__auto___24436 = arguments.length;
var i__17811__auto___24437 = (0);
while(true){
if((i__17811__auto___24437 < len__17810__auto___24436)){
args24386.push((arguments[i__17811__auto___24437]));

var G__24438 = (i__17811__auto___24437 + (1));
i__17811__auto___24437 = G__24438;
continue;
} else {
}
break;
}

var G__24388 = args24386.length;
switch (G__24388) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24386.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24273__auto___24440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___24440){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___24440){
return (function (state_24412){
var state_val_24413 = (state_24412[(1)]);
if((state_val_24413 === (7))){
var inst_24408 = (state_24412[(2)]);
var state_24412__$1 = state_24412;
var statearr_24414_24441 = state_24412__$1;
(statearr_24414_24441[(2)] = inst_24408);

(statearr_24414_24441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24413 === (1))){
var state_24412__$1 = state_24412;
var statearr_24415_24442 = state_24412__$1;
(statearr_24415_24442[(2)] = null);

(statearr_24415_24442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24413 === (4))){
var inst_24391 = (state_24412[(7)]);
var inst_24391__$1 = (state_24412[(2)]);
var inst_24392 = (inst_24391__$1 == null);
var state_24412__$1 = (function (){var statearr_24416 = state_24412;
(statearr_24416[(7)] = inst_24391__$1);

return statearr_24416;
})();
if(cljs.core.truth_(inst_24392)){
var statearr_24417_24443 = state_24412__$1;
(statearr_24417_24443[(1)] = (5));

} else {
var statearr_24418_24444 = state_24412__$1;
(statearr_24418_24444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24413 === (13))){
var state_24412__$1 = state_24412;
var statearr_24419_24445 = state_24412__$1;
(statearr_24419_24445[(2)] = null);

(statearr_24419_24445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24413 === (6))){
var inst_24391 = (state_24412[(7)]);
var state_24412__$1 = state_24412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24412__$1,(11),to,inst_24391);
} else {
if((state_val_24413 === (3))){
var inst_24410 = (state_24412[(2)]);
var state_24412__$1 = state_24412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24412__$1,inst_24410);
} else {
if((state_val_24413 === (12))){
var state_24412__$1 = state_24412;
var statearr_24420_24446 = state_24412__$1;
(statearr_24420_24446[(2)] = null);

(statearr_24420_24446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24413 === (2))){
var state_24412__$1 = state_24412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24412__$1,(4),from);
} else {
if((state_val_24413 === (11))){
var inst_24401 = (state_24412[(2)]);
var state_24412__$1 = state_24412;
if(cljs.core.truth_(inst_24401)){
var statearr_24421_24447 = state_24412__$1;
(statearr_24421_24447[(1)] = (12));

} else {
var statearr_24422_24448 = state_24412__$1;
(statearr_24422_24448[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24413 === (9))){
var state_24412__$1 = state_24412;
var statearr_24423_24449 = state_24412__$1;
(statearr_24423_24449[(2)] = null);

(statearr_24423_24449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24413 === (5))){
var state_24412__$1 = state_24412;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24424_24450 = state_24412__$1;
(statearr_24424_24450[(1)] = (8));

} else {
var statearr_24425_24451 = state_24412__$1;
(statearr_24425_24451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24413 === (14))){
var inst_24406 = (state_24412[(2)]);
var state_24412__$1 = state_24412;
var statearr_24426_24452 = state_24412__$1;
(statearr_24426_24452[(2)] = inst_24406);

(statearr_24426_24452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24413 === (10))){
var inst_24398 = (state_24412[(2)]);
var state_24412__$1 = state_24412;
var statearr_24427_24453 = state_24412__$1;
(statearr_24427_24453[(2)] = inst_24398);

(statearr_24427_24453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24413 === (8))){
var inst_24395 = cljs.core.async.close_BANG_.call(null,to);
var state_24412__$1 = state_24412;
var statearr_24428_24454 = state_24412__$1;
(statearr_24428_24454[(2)] = inst_24395);

(statearr_24428_24454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___24440))
;
return ((function (switch__24161__auto__,c__24273__auto___24440){
return (function() {
var cljs$core$async$state_machine__24162__auto__ = null;
var cljs$core$async$state_machine__24162__auto____0 = (function (){
var statearr_24432 = [null,null,null,null,null,null,null,null];
(statearr_24432[(0)] = cljs$core$async$state_machine__24162__auto__);

(statearr_24432[(1)] = (1));

return statearr_24432;
});
var cljs$core$async$state_machine__24162__auto____1 = (function (state_24412){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_24412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e24433){if((e24433 instanceof Object)){
var ex__24165__auto__ = e24433;
var statearr_24434_24455 = state_24412;
(statearr_24434_24455[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24456 = state_24412;
state_24412 = G__24456;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$state_machine__24162__auto__ = function(state_24412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24162__auto____1.call(this,state_24412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24162__auto____0;
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24162__auto____1;
return cljs$core$async$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___24440))
})();
var state__24275__auto__ = (function (){var statearr_24435 = f__24274__auto__.call(null);
(statearr_24435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___24440);

return statearr_24435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___24440))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24640){
var vec__24641 = p__24640;
var v = cljs.core.nth.call(null,vec__24641,(0),null);
var p = cljs.core.nth.call(null,vec__24641,(1),null);
var job = vec__24641;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24273__auto___24823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___24823,res,vec__24641,v,p,job,jobs,results){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___24823,res,vec__24641,v,p,job,jobs,results){
return (function (state_24646){
var state_val_24647 = (state_24646[(1)]);
if((state_val_24647 === (1))){
var state_24646__$1 = state_24646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24646__$1,(2),res,v);
} else {
if((state_val_24647 === (2))){
var inst_24643 = (state_24646[(2)]);
var inst_24644 = cljs.core.async.close_BANG_.call(null,res);
var state_24646__$1 = (function (){var statearr_24648 = state_24646;
(statearr_24648[(7)] = inst_24643);

return statearr_24648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24646__$1,inst_24644);
} else {
return null;
}
}
});})(c__24273__auto___24823,res,vec__24641,v,p,job,jobs,results))
;
return ((function (switch__24161__auto__,c__24273__auto___24823,res,vec__24641,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0 = (function (){
var statearr_24652 = [null,null,null,null,null,null,null,null];
(statearr_24652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__);

(statearr_24652[(1)] = (1));

return statearr_24652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1 = (function (state_24646){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_24646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e24653){if((e24653 instanceof Object)){
var ex__24165__auto__ = e24653;
var statearr_24654_24824 = state_24646;
(statearr_24654_24824[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24825 = state_24646;
state_24646 = G__24825;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__ = function(state_24646){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1.call(this,state_24646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___24823,res,vec__24641,v,p,job,jobs,results))
})();
var state__24275__auto__ = (function (){var statearr_24655 = f__24274__auto__.call(null);
(statearr_24655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___24823);

return statearr_24655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___24823,res,vec__24641,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24656){
var vec__24657 = p__24656;
var v = cljs.core.nth.call(null,vec__24657,(0),null);
var p = cljs.core.nth.call(null,vec__24657,(1),null);
var job = vec__24657;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17655__auto___24826 = n;
var __24827 = (0);
while(true){
if((__24827 < n__17655__auto___24826)){
var G__24658_24828 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24658_24828) {
case "compute":
var c__24273__auto___24830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24827,c__24273__auto___24830,G__24658_24828,n__17655__auto___24826,jobs,results,process,async){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (__24827,c__24273__auto___24830,G__24658_24828,n__17655__auto___24826,jobs,results,process,async){
return (function (state_24671){
var state_val_24672 = (state_24671[(1)]);
if((state_val_24672 === (1))){
var state_24671__$1 = state_24671;
var statearr_24673_24831 = state_24671__$1;
(statearr_24673_24831[(2)] = null);

(statearr_24673_24831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (2))){
var state_24671__$1 = state_24671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24671__$1,(4),jobs);
} else {
if((state_val_24672 === (3))){
var inst_24669 = (state_24671[(2)]);
var state_24671__$1 = state_24671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24671__$1,inst_24669);
} else {
if((state_val_24672 === (4))){
var inst_24661 = (state_24671[(2)]);
var inst_24662 = process.call(null,inst_24661);
var state_24671__$1 = state_24671;
if(cljs.core.truth_(inst_24662)){
var statearr_24674_24832 = state_24671__$1;
(statearr_24674_24832[(1)] = (5));

} else {
var statearr_24675_24833 = state_24671__$1;
(statearr_24675_24833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (5))){
var state_24671__$1 = state_24671;
var statearr_24676_24834 = state_24671__$1;
(statearr_24676_24834[(2)] = null);

(statearr_24676_24834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (6))){
var state_24671__$1 = state_24671;
var statearr_24677_24835 = state_24671__$1;
(statearr_24677_24835[(2)] = null);

(statearr_24677_24835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (7))){
var inst_24667 = (state_24671[(2)]);
var state_24671__$1 = state_24671;
var statearr_24678_24836 = state_24671__$1;
(statearr_24678_24836[(2)] = inst_24667);

(statearr_24678_24836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24827,c__24273__auto___24830,G__24658_24828,n__17655__auto___24826,jobs,results,process,async))
;
return ((function (__24827,switch__24161__auto__,c__24273__auto___24830,G__24658_24828,n__17655__auto___24826,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0 = (function (){
var statearr_24682 = [null,null,null,null,null,null,null];
(statearr_24682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__);

(statearr_24682[(1)] = (1));

return statearr_24682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1 = (function (state_24671){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_24671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e24683){if((e24683 instanceof Object)){
var ex__24165__auto__ = e24683;
var statearr_24684_24837 = state_24671;
(statearr_24684_24837[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24838 = state_24671;
state_24671 = G__24838;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__ = function(state_24671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1.call(this,state_24671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__;
})()
;})(__24827,switch__24161__auto__,c__24273__auto___24830,G__24658_24828,n__17655__auto___24826,jobs,results,process,async))
})();
var state__24275__auto__ = (function (){var statearr_24685 = f__24274__auto__.call(null);
(statearr_24685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___24830);

return statearr_24685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(__24827,c__24273__auto___24830,G__24658_24828,n__17655__auto___24826,jobs,results,process,async))
);


break;
case "async":
var c__24273__auto___24839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24827,c__24273__auto___24839,G__24658_24828,n__17655__auto___24826,jobs,results,process,async){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (__24827,c__24273__auto___24839,G__24658_24828,n__17655__auto___24826,jobs,results,process,async){
return (function (state_24698){
var state_val_24699 = (state_24698[(1)]);
if((state_val_24699 === (1))){
var state_24698__$1 = state_24698;
var statearr_24700_24840 = state_24698__$1;
(statearr_24700_24840[(2)] = null);

(statearr_24700_24840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (2))){
var state_24698__$1 = state_24698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24698__$1,(4),jobs);
} else {
if((state_val_24699 === (3))){
var inst_24696 = (state_24698[(2)]);
var state_24698__$1 = state_24698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24698__$1,inst_24696);
} else {
if((state_val_24699 === (4))){
var inst_24688 = (state_24698[(2)]);
var inst_24689 = async.call(null,inst_24688);
var state_24698__$1 = state_24698;
if(cljs.core.truth_(inst_24689)){
var statearr_24701_24841 = state_24698__$1;
(statearr_24701_24841[(1)] = (5));

} else {
var statearr_24702_24842 = state_24698__$1;
(statearr_24702_24842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (5))){
var state_24698__$1 = state_24698;
var statearr_24703_24843 = state_24698__$1;
(statearr_24703_24843[(2)] = null);

(statearr_24703_24843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (6))){
var state_24698__$1 = state_24698;
var statearr_24704_24844 = state_24698__$1;
(statearr_24704_24844[(2)] = null);

(statearr_24704_24844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (7))){
var inst_24694 = (state_24698[(2)]);
var state_24698__$1 = state_24698;
var statearr_24705_24845 = state_24698__$1;
(statearr_24705_24845[(2)] = inst_24694);

(statearr_24705_24845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24827,c__24273__auto___24839,G__24658_24828,n__17655__auto___24826,jobs,results,process,async))
;
return ((function (__24827,switch__24161__auto__,c__24273__auto___24839,G__24658_24828,n__17655__auto___24826,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0 = (function (){
var statearr_24709 = [null,null,null,null,null,null,null];
(statearr_24709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__);

(statearr_24709[(1)] = (1));

return statearr_24709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1 = (function (state_24698){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_24698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e24710){if((e24710 instanceof Object)){
var ex__24165__auto__ = e24710;
var statearr_24711_24846 = state_24698;
(statearr_24711_24846[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24847 = state_24698;
state_24698 = G__24847;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__ = function(state_24698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1.call(this,state_24698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__;
})()
;})(__24827,switch__24161__auto__,c__24273__auto___24839,G__24658_24828,n__17655__auto___24826,jobs,results,process,async))
})();
var state__24275__auto__ = (function (){var statearr_24712 = f__24274__auto__.call(null);
(statearr_24712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___24839);

return statearr_24712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(__24827,c__24273__auto___24839,G__24658_24828,n__17655__auto___24826,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24848 = (__24827 + (1));
__24827 = G__24848;
continue;
} else {
}
break;
}

var c__24273__auto___24849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___24849,jobs,results,process,async){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___24849,jobs,results,process,async){
return (function (state_24734){
var state_val_24735 = (state_24734[(1)]);
if((state_val_24735 === (1))){
var state_24734__$1 = state_24734;
var statearr_24736_24850 = state_24734__$1;
(statearr_24736_24850[(2)] = null);

(statearr_24736_24850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (2))){
var state_24734__$1 = state_24734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24734__$1,(4),from);
} else {
if((state_val_24735 === (3))){
var inst_24732 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24734__$1,inst_24732);
} else {
if((state_val_24735 === (4))){
var inst_24715 = (state_24734[(7)]);
var inst_24715__$1 = (state_24734[(2)]);
var inst_24716 = (inst_24715__$1 == null);
var state_24734__$1 = (function (){var statearr_24737 = state_24734;
(statearr_24737[(7)] = inst_24715__$1);

return statearr_24737;
})();
if(cljs.core.truth_(inst_24716)){
var statearr_24738_24851 = state_24734__$1;
(statearr_24738_24851[(1)] = (5));

} else {
var statearr_24739_24852 = state_24734__$1;
(statearr_24739_24852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (5))){
var inst_24718 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24734__$1 = state_24734;
var statearr_24740_24853 = state_24734__$1;
(statearr_24740_24853[(2)] = inst_24718);

(statearr_24740_24853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (6))){
var inst_24720 = (state_24734[(8)]);
var inst_24715 = (state_24734[(7)]);
var inst_24720__$1 = cljs.core.async.chan.call(null,(1));
var inst_24721 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24722 = [inst_24715,inst_24720__$1];
var inst_24723 = (new cljs.core.PersistentVector(null,2,(5),inst_24721,inst_24722,null));
var state_24734__$1 = (function (){var statearr_24741 = state_24734;
(statearr_24741[(8)] = inst_24720__$1);

return statearr_24741;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24734__$1,(8),jobs,inst_24723);
} else {
if((state_val_24735 === (7))){
var inst_24730 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
var statearr_24742_24854 = state_24734__$1;
(statearr_24742_24854[(2)] = inst_24730);

(statearr_24742_24854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (8))){
var inst_24720 = (state_24734[(8)]);
var inst_24725 = (state_24734[(2)]);
var state_24734__$1 = (function (){var statearr_24743 = state_24734;
(statearr_24743[(9)] = inst_24725);

return statearr_24743;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24734__$1,(9),results,inst_24720);
} else {
if((state_val_24735 === (9))){
var inst_24727 = (state_24734[(2)]);
var state_24734__$1 = (function (){var statearr_24744 = state_24734;
(statearr_24744[(10)] = inst_24727);

return statearr_24744;
})();
var statearr_24745_24855 = state_24734__$1;
(statearr_24745_24855[(2)] = null);

(statearr_24745_24855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___24849,jobs,results,process,async))
;
return ((function (switch__24161__auto__,c__24273__auto___24849,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0 = (function (){
var statearr_24749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__);

(statearr_24749[(1)] = (1));

return statearr_24749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1 = (function (state_24734){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_24734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e24750){if((e24750 instanceof Object)){
var ex__24165__auto__ = e24750;
var statearr_24751_24856 = state_24734;
(statearr_24751_24856[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24857 = state_24734;
state_24734 = G__24857;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__ = function(state_24734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1.call(this,state_24734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___24849,jobs,results,process,async))
})();
var state__24275__auto__ = (function (){var statearr_24752 = f__24274__auto__.call(null);
(statearr_24752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___24849);

return statearr_24752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___24849,jobs,results,process,async))
);


var c__24273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto__,jobs,results,process,async){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto__,jobs,results,process,async){
return (function (state_24790){
var state_val_24791 = (state_24790[(1)]);
if((state_val_24791 === (7))){
var inst_24786 = (state_24790[(2)]);
var state_24790__$1 = state_24790;
var statearr_24792_24858 = state_24790__$1;
(statearr_24792_24858[(2)] = inst_24786);

(statearr_24792_24858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (20))){
var state_24790__$1 = state_24790;
var statearr_24793_24859 = state_24790__$1;
(statearr_24793_24859[(2)] = null);

(statearr_24793_24859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (1))){
var state_24790__$1 = state_24790;
var statearr_24794_24860 = state_24790__$1;
(statearr_24794_24860[(2)] = null);

(statearr_24794_24860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (4))){
var inst_24755 = (state_24790[(7)]);
var inst_24755__$1 = (state_24790[(2)]);
var inst_24756 = (inst_24755__$1 == null);
var state_24790__$1 = (function (){var statearr_24795 = state_24790;
(statearr_24795[(7)] = inst_24755__$1);

return statearr_24795;
})();
if(cljs.core.truth_(inst_24756)){
var statearr_24796_24861 = state_24790__$1;
(statearr_24796_24861[(1)] = (5));

} else {
var statearr_24797_24862 = state_24790__$1;
(statearr_24797_24862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (15))){
var inst_24768 = (state_24790[(8)]);
var state_24790__$1 = state_24790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24790__$1,(18),to,inst_24768);
} else {
if((state_val_24791 === (21))){
var inst_24781 = (state_24790[(2)]);
var state_24790__$1 = state_24790;
var statearr_24798_24863 = state_24790__$1;
(statearr_24798_24863[(2)] = inst_24781);

(statearr_24798_24863[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (13))){
var inst_24783 = (state_24790[(2)]);
var state_24790__$1 = (function (){var statearr_24799 = state_24790;
(statearr_24799[(9)] = inst_24783);

return statearr_24799;
})();
var statearr_24800_24864 = state_24790__$1;
(statearr_24800_24864[(2)] = null);

(statearr_24800_24864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (6))){
var inst_24755 = (state_24790[(7)]);
var state_24790__$1 = state_24790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24790__$1,(11),inst_24755);
} else {
if((state_val_24791 === (17))){
var inst_24776 = (state_24790[(2)]);
var state_24790__$1 = state_24790;
if(cljs.core.truth_(inst_24776)){
var statearr_24801_24865 = state_24790__$1;
(statearr_24801_24865[(1)] = (19));

} else {
var statearr_24802_24866 = state_24790__$1;
(statearr_24802_24866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (3))){
var inst_24788 = (state_24790[(2)]);
var state_24790__$1 = state_24790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24790__$1,inst_24788);
} else {
if((state_val_24791 === (12))){
var inst_24765 = (state_24790[(10)]);
var state_24790__$1 = state_24790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24790__$1,(14),inst_24765);
} else {
if((state_val_24791 === (2))){
var state_24790__$1 = state_24790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24790__$1,(4),results);
} else {
if((state_val_24791 === (19))){
var state_24790__$1 = state_24790;
var statearr_24803_24867 = state_24790__$1;
(statearr_24803_24867[(2)] = null);

(statearr_24803_24867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (11))){
var inst_24765 = (state_24790[(2)]);
var state_24790__$1 = (function (){var statearr_24804 = state_24790;
(statearr_24804[(10)] = inst_24765);

return statearr_24804;
})();
var statearr_24805_24868 = state_24790__$1;
(statearr_24805_24868[(2)] = null);

(statearr_24805_24868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (9))){
var state_24790__$1 = state_24790;
var statearr_24806_24869 = state_24790__$1;
(statearr_24806_24869[(2)] = null);

(statearr_24806_24869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (5))){
var state_24790__$1 = state_24790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24807_24870 = state_24790__$1;
(statearr_24807_24870[(1)] = (8));

} else {
var statearr_24808_24871 = state_24790__$1;
(statearr_24808_24871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (14))){
var inst_24768 = (state_24790[(8)]);
var inst_24770 = (state_24790[(11)]);
var inst_24768__$1 = (state_24790[(2)]);
var inst_24769 = (inst_24768__$1 == null);
var inst_24770__$1 = cljs.core.not.call(null,inst_24769);
var state_24790__$1 = (function (){var statearr_24809 = state_24790;
(statearr_24809[(8)] = inst_24768__$1);

(statearr_24809[(11)] = inst_24770__$1);

return statearr_24809;
})();
if(inst_24770__$1){
var statearr_24810_24872 = state_24790__$1;
(statearr_24810_24872[(1)] = (15));

} else {
var statearr_24811_24873 = state_24790__$1;
(statearr_24811_24873[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (16))){
var inst_24770 = (state_24790[(11)]);
var state_24790__$1 = state_24790;
var statearr_24812_24874 = state_24790__$1;
(statearr_24812_24874[(2)] = inst_24770);

(statearr_24812_24874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (10))){
var inst_24762 = (state_24790[(2)]);
var state_24790__$1 = state_24790;
var statearr_24813_24875 = state_24790__$1;
(statearr_24813_24875[(2)] = inst_24762);

(statearr_24813_24875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (18))){
var inst_24773 = (state_24790[(2)]);
var state_24790__$1 = state_24790;
var statearr_24814_24876 = state_24790__$1;
(statearr_24814_24876[(2)] = inst_24773);

(statearr_24814_24876[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24791 === (8))){
var inst_24759 = cljs.core.async.close_BANG_.call(null,to);
var state_24790__$1 = state_24790;
var statearr_24815_24877 = state_24790__$1;
(statearr_24815_24877[(2)] = inst_24759);

(statearr_24815_24877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto__,jobs,results,process,async))
;
return ((function (switch__24161__auto__,c__24273__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0 = (function (){
var statearr_24819 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__);

(statearr_24819[(1)] = (1));

return statearr_24819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1 = (function (state_24790){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_24790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e24820){if((e24820 instanceof Object)){
var ex__24165__auto__ = e24820;
var statearr_24821_24878 = state_24790;
(statearr_24821_24878[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24879 = state_24790;
state_24790 = G__24879;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__ = function(state_24790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1.call(this,state_24790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto__,jobs,results,process,async))
})();
var state__24275__auto__ = (function (){var statearr_24822 = f__24274__auto__.call(null);
(statearr_24822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto__);

return statearr_24822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto__,jobs,results,process,async))
);

return c__24273__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24880 = [];
var len__17810__auto___24883 = arguments.length;
var i__17811__auto___24884 = (0);
while(true){
if((i__17811__auto___24884 < len__17810__auto___24883)){
args24880.push((arguments[i__17811__auto___24884]));

var G__24885 = (i__17811__auto___24884 + (1));
i__17811__auto___24884 = G__24885;
continue;
} else {
}
break;
}

var G__24882 = args24880.length;
switch (G__24882) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24880.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24887 = [];
var len__17810__auto___24890 = arguments.length;
var i__17811__auto___24891 = (0);
while(true){
if((i__17811__auto___24891 < len__17810__auto___24890)){
args24887.push((arguments[i__17811__auto___24891]));

var G__24892 = (i__17811__auto___24891 + (1));
i__17811__auto___24891 = G__24892;
continue;
} else {
}
break;
}

var G__24889 = args24887.length;
switch (G__24889) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24887.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24894 = [];
var len__17810__auto___24947 = arguments.length;
var i__17811__auto___24948 = (0);
while(true){
if((i__17811__auto___24948 < len__17810__auto___24947)){
args24894.push((arguments[i__17811__auto___24948]));

var G__24949 = (i__17811__auto___24948 + (1));
i__17811__auto___24948 = G__24949;
continue;
} else {
}
break;
}

var G__24896 = args24894.length;
switch (G__24896) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24894.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24273__auto___24951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___24951,tc,fc){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___24951,tc,fc){
return (function (state_24922){
var state_val_24923 = (state_24922[(1)]);
if((state_val_24923 === (7))){
var inst_24918 = (state_24922[(2)]);
var state_24922__$1 = state_24922;
var statearr_24924_24952 = state_24922__$1;
(statearr_24924_24952[(2)] = inst_24918);

(statearr_24924_24952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24923 === (1))){
var state_24922__$1 = state_24922;
var statearr_24925_24953 = state_24922__$1;
(statearr_24925_24953[(2)] = null);

(statearr_24925_24953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24923 === (4))){
var inst_24899 = (state_24922[(7)]);
var inst_24899__$1 = (state_24922[(2)]);
var inst_24900 = (inst_24899__$1 == null);
var state_24922__$1 = (function (){var statearr_24926 = state_24922;
(statearr_24926[(7)] = inst_24899__$1);

return statearr_24926;
})();
if(cljs.core.truth_(inst_24900)){
var statearr_24927_24954 = state_24922__$1;
(statearr_24927_24954[(1)] = (5));

} else {
var statearr_24928_24955 = state_24922__$1;
(statearr_24928_24955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24923 === (13))){
var state_24922__$1 = state_24922;
var statearr_24929_24956 = state_24922__$1;
(statearr_24929_24956[(2)] = null);

(statearr_24929_24956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24923 === (6))){
var inst_24899 = (state_24922[(7)]);
var inst_24905 = p.call(null,inst_24899);
var state_24922__$1 = state_24922;
if(cljs.core.truth_(inst_24905)){
var statearr_24930_24957 = state_24922__$1;
(statearr_24930_24957[(1)] = (9));

} else {
var statearr_24931_24958 = state_24922__$1;
(statearr_24931_24958[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24923 === (3))){
var inst_24920 = (state_24922[(2)]);
var state_24922__$1 = state_24922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24922__$1,inst_24920);
} else {
if((state_val_24923 === (12))){
var state_24922__$1 = state_24922;
var statearr_24932_24959 = state_24922__$1;
(statearr_24932_24959[(2)] = null);

(statearr_24932_24959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24923 === (2))){
var state_24922__$1 = state_24922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24922__$1,(4),ch);
} else {
if((state_val_24923 === (11))){
var inst_24899 = (state_24922[(7)]);
var inst_24909 = (state_24922[(2)]);
var state_24922__$1 = state_24922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24922__$1,(8),inst_24909,inst_24899);
} else {
if((state_val_24923 === (9))){
var state_24922__$1 = state_24922;
var statearr_24933_24960 = state_24922__$1;
(statearr_24933_24960[(2)] = tc);

(statearr_24933_24960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24923 === (5))){
var inst_24902 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24903 = cljs.core.async.close_BANG_.call(null,fc);
var state_24922__$1 = (function (){var statearr_24934 = state_24922;
(statearr_24934[(8)] = inst_24902);

return statearr_24934;
})();
var statearr_24935_24961 = state_24922__$1;
(statearr_24935_24961[(2)] = inst_24903);

(statearr_24935_24961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24923 === (14))){
var inst_24916 = (state_24922[(2)]);
var state_24922__$1 = state_24922;
var statearr_24936_24962 = state_24922__$1;
(statearr_24936_24962[(2)] = inst_24916);

(statearr_24936_24962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24923 === (10))){
var state_24922__$1 = state_24922;
var statearr_24937_24963 = state_24922__$1;
(statearr_24937_24963[(2)] = fc);

(statearr_24937_24963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24923 === (8))){
var inst_24911 = (state_24922[(2)]);
var state_24922__$1 = state_24922;
if(cljs.core.truth_(inst_24911)){
var statearr_24938_24964 = state_24922__$1;
(statearr_24938_24964[(1)] = (12));

} else {
var statearr_24939_24965 = state_24922__$1;
(statearr_24939_24965[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___24951,tc,fc))
;
return ((function (switch__24161__auto__,c__24273__auto___24951,tc,fc){
return (function() {
var cljs$core$async$state_machine__24162__auto__ = null;
var cljs$core$async$state_machine__24162__auto____0 = (function (){
var statearr_24943 = [null,null,null,null,null,null,null,null,null];
(statearr_24943[(0)] = cljs$core$async$state_machine__24162__auto__);

(statearr_24943[(1)] = (1));

return statearr_24943;
});
var cljs$core$async$state_machine__24162__auto____1 = (function (state_24922){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_24922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e24944){if((e24944 instanceof Object)){
var ex__24165__auto__ = e24944;
var statearr_24945_24966 = state_24922;
(statearr_24945_24966[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24967 = state_24922;
state_24922 = G__24967;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$state_machine__24162__auto__ = function(state_24922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24162__auto____1.call(this,state_24922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24162__auto____0;
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24162__auto____1;
return cljs$core$async$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___24951,tc,fc))
})();
var state__24275__auto__ = (function (){var statearr_24946 = f__24274__auto__.call(null);
(statearr_24946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___24951);

return statearr_24946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___24951,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto__){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto__){
return (function (state_25031){
var state_val_25032 = (state_25031[(1)]);
if((state_val_25032 === (7))){
var inst_25027 = (state_25031[(2)]);
var state_25031__$1 = state_25031;
var statearr_25033_25054 = state_25031__$1;
(statearr_25033_25054[(2)] = inst_25027);

(statearr_25033_25054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25032 === (1))){
var inst_25011 = init;
var state_25031__$1 = (function (){var statearr_25034 = state_25031;
(statearr_25034[(7)] = inst_25011);

return statearr_25034;
})();
var statearr_25035_25055 = state_25031__$1;
(statearr_25035_25055[(2)] = null);

(statearr_25035_25055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25032 === (4))){
var inst_25014 = (state_25031[(8)]);
var inst_25014__$1 = (state_25031[(2)]);
var inst_25015 = (inst_25014__$1 == null);
var state_25031__$1 = (function (){var statearr_25036 = state_25031;
(statearr_25036[(8)] = inst_25014__$1);

return statearr_25036;
})();
if(cljs.core.truth_(inst_25015)){
var statearr_25037_25056 = state_25031__$1;
(statearr_25037_25056[(1)] = (5));

} else {
var statearr_25038_25057 = state_25031__$1;
(statearr_25038_25057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25032 === (6))){
var inst_25018 = (state_25031[(9)]);
var inst_25014 = (state_25031[(8)]);
var inst_25011 = (state_25031[(7)]);
var inst_25018__$1 = f.call(null,inst_25011,inst_25014);
var inst_25019 = cljs.core.reduced_QMARK_.call(null,inst_25018__$1);
var state_25031__$1 = (function (){var statearr_25039 = state_25031;
(statearr_25039[(9)] = inst_25018__$1);

return statearr_25039;
})();
if(inst_25019){
var statearr_25040_25058 = state_25031__$1;
(statearr_25040_25058[(1)] = (8));

} else {
var statearr_25041_25059 = state_25031__$1;
(statearr_25041_25059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25032 === (3))){
var inst_25029 = (state_25031[(2)]);
var state_25031__$1 = state_25031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25031__$1,inst_25029);
} else {
if((state_val_25032 === (2))){
var state_25031__$1 = state_25031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25031__$1,(4),ch);
} else {
if((state_val_25032 === (9))){
var inst_25018 = (state_25031[(9)]);
var inst_25011 = inst_25018;
var state_25031__$1 = (function (){var statearr_25042 = state_25031;
(statearr_25042[(7)] = inst_25011);

return statearr_25042;
})();
var statearr_25043_25060 = state_25031__$1;
(statearr_25043_25060[(2)] = null);

(statearr_25043_25060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25032 === (5))){
var inst_25011 = (state_25031[(7)]);
var state_25031__$1 = state_25031;
var statearr_25044_25061 = state_25031__$1;
(statearr_25044_25061[(2)] = inst_25011);

(statearr_25044_25061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25032 === (10))){
var inst_25025 = (state_25031[(2)]);
var state_25031__$1 = state_25031;
var statearr_25045_25062 = state_25031__$1;
(statearr_25045_25062[(2)] = inst_25025);

(statearr_25045_25062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25032 === (8))){
var inst_25018 = (state_25031[(9)]);
var inst_25021 = cljs.core.deref.call(null,inst_25018);
var state_25031__$1 = state_25031;
var statearr_25046_25063 = state_25031__$1;
(statearr_25046_25063[(2)] = inst_25021);

(statearr_25046_25063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto__))
;
return ((function (switch__24161__auto__,c__24273__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24162__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24162__auto____0 = (function (){
var statearr_25050 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25050[(0)] = cljs$core$async$reduce_$_state_machine__24162__auto__);

(statearr_25050[(1)] = (1));

return statearr_25050;
});
var cljs$core$async$reduce_$_state_machine__24162__auto____1 = (function (state_25031){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_25031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e25051){if((e25051 instanceof Object)){
var ex__24165__auto__ = e25051;
var statearr_25052_25064 = state_25031;
(statearr_25052_25064[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25065 = state_25031;
state_25031 = G__25065;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24162__auto__ = function(state_25031){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24162__auto____1.call(this,state_25031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24162__auto____0;
cljs$core$async$reduce_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24162__auto____1;
return cljs$core$async$reduce_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto__))
})();
var state__24275__auto__ = (function (){var statearr_25053 = f__24274__auto__.call(null);
(statearr_25053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto__);

return statearr_25053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto__))
);

return c__24273__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25066 = [];
var len__17810__auto___25118 = arguments.length;
var i__17811__auto___25119 = (0);
while(true){
if((i__17811__auto___25119 < len__17810__auto___25118)){
args25066.push((arguments[i__17811__auto___25119]));

var G__25120 = (i__17811__auto___25119 + (1));
i__17811__auto___25119 = G__25120;
continue;
} else {
}
break;
}

var G__25068 = args25066.length;
switch (G__25068) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25066.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto__){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto__){
return (function (state_25093){
var state_val_25094 = (state_25093[(1)]);
if((state_val_25094 === (7))){
var inst_25075 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25095_25122 = state_25093__$1;
(statearr_25095_25122[(2)] = inst_25075);

(statearr_25095_25122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (1))){
var inst_25069 = cljs.core.seq.call(null,coll);
var inst_25070 = inst_25069;
var state_25093__$1 = (function (){var statearr_25096 = state_25093;
(statearr_25096[(7)] = inst_25070);

return statearr_25096;
})();
var statearr_25097_25123 = state_25093__$1;
(statearr_25097_25123[(2)] = null);

(statearr_25097_25123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (4))){
var inst_25070 = (state_25093[(7)]);
var inst_25073 = cljs.core.first.call(null,inst_25070);
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25093__$1,(7),ch,inst_25073);
} else {
if((state_val_25094 === (13))){
var inst_25087 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25098_25124 = state_25093__$1;
(statearr_25098_25124[(2)] = inst_25087);

(statearr_25098_25124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (6))){
var inst_25078 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
if(cljs.core.truth_(inst_25078)){
var statearr_25099_25125 = state_25093__$1;
(statearr_25099_25125[(1)] = (8));

} else {
var statearr_25100_25126 = state_25093__$1;
(statearr_25100_25126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (3))){
var inst_25091 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25093__$1,inst_25091);
} else {
if((state_val_25094 === (12))){
var state_25093__$1 = state_25093;
var statearr_25101_25127 = state_25093__$1;
(statearr_25101_25127[(2)] = null);

(statearr_25101_25127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (2))){
var inst_25070 = (state_25093[(7)]);
var state_25093__$1 = state_25093;
if(cljs.core.truth_(inst_25070)){
var statearr_25102_25128 = state_25093__$1;
(statearr_25102_25128[(1)] = (4));

} else {
var statearr_25103_25129 = state_25093__$1;
(statearr_25103_25129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (11))){
var inst_25084 = cljs.core.async.close_BANG_.call(null,ch);
var state_25093__$1 = state_25093;
var statearr_25104_25130 = state_25093__$1;
(statearr_25104_25130[(2)] = inst_25084);

(statearr_25104_25130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (9))){
var state_25093__$1 = state_25093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25105_25131 = state_25093__$1;
(statearr_25105_25131[(1)] = (11));

} else {
var statearr_25106_25132 = state_25093__$1;
(statearr_25106_25132[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (5))){
var inst_25070 = (state_25093[(7)]);
var state_25093__$1 = state_25093;
var statearr_25107_25133 = state_25093__$1;
(statearr_25107_25133[(2)] = inst_25070);

(statearr_25107_25133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (10))){
var inst_25089 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25108_25134 = state_25093__$1;
(statearr_25108_25134[(2)] = inst_25089);

(statearr_25108_25134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (8))){
var inst_25070 = (state_25093[(7)]);
var inst_25080 = cljs.core.next.call(null,inst_25070);
var inst_25070__$1 = inst_25080;
var state_25093__$1 = (function (){var statearr_25109 = state_25093;
(statearr_25109[(7)] = inst_25070__$1);

return statearr_25109;
})();
var statearr_25110_25135 = state_25093__$1;
(statearr_25110_25135[(2)] = null);

(statearr_25110_25135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto__))
;
return ((function (switch__24161__auto__,c__24273__auto__){
return (function() {
var cljs$core$async$state_machine__24162__auto__ = null;
var cljs$core$async$state_machine__24162__auto____0 = (function (){
var statearr_25114 = [null,null,null,null,null,null,null,null];
(statearr_25114[(0)] = cljs$core$async$state_machine__24162__auto__);

(statearr_25114[(1)] = (1));

return statearr_25114;
});
var cljs$core$async$state_machine__24162__auto____1 = (function (state_25093){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_25093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e25115){if((e25115 instanceof Object)){
var ex__24165__auto__ = e25115;
var statearr_25116_25136 = state_25093;
(statearr_25116_25136[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25137 = state_25093;
state_25093 = G__25137;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$state_machine__24162__auto__ = function(state_25093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24162__auto____1.call(this,state_25093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24162__auto____0;
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24162__auto____1;
return cljs$core$async$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto__))
})();
var state__24275__auto__ = (function (){var statearr_25117 = f__24274__auto__.call(null);
(statearr_25117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto__);

return statearr_25117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto__))
);

return c__24273__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17407__auto__ = (((_ == null))?null:_);
var m__17408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,_);
} else {
var m__17408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17407__auto__ = (((m == null))?null:m);
var m__17408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17407__auto__ = (((m == null))?null:m);
var m__17408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,m,ch);
} else {
var m__17408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17407__auto__ = (((m == null))?null:m);
var m__17408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,m);
} else {
var m__17408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25359 = (function (mult,ch,cs,meta25360){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25360 = meta25360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25361,meta25360__$1){
var self__ = this;
var _25361__$1 = this;
return (new cljs.core.async.t_cljs$core$async25359(self__.mult,self__.ch,self__.cs,meta25360__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25359.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25361){
var self__ = this;
var _25361__$1 = this;
return self__.meta25360;
});})(cs))
;

cljs.core.async.t_cljs$core$async25359.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25359.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25359.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25359.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25359.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25359.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25359.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25360","meta25360",294511137,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25359";

cljs.core.async.t_cljs$core$async25359.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17350__auto__,writer__17351__auto__,opt__17352__auto__){
return cljs.core._write.call(null,writer__17351__auto__,"cljs.core.async/t_cljs$core$async25359");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25359 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25359(mult__$1,ch__$1,cs__$1,meta25360){
return (new cljs.core.async.t_cljs$core$async25359(mult__$1,ch__$1,cs__$1,meta25360));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25359(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24273__auto___25580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___25580,cs,m,dchan,dctr,done){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___25580,cs,m,dchan,dctr,done){
return (function (state_25492){
var state_val_25493 = (state_25492[(1)]);
if((state_val_25493 === (7))){
var inst_25488 = (state_25492[(2)]);
var state_25492__$1 = state_25492;
var statearr_25494_25581 = state_25492__$1;
(statearr_25494_25581[(2)] = inst_25488);

(statearr_25494_25581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (20))){
var inst_25393 = (state_25492[(7)]);
var inst_25403 = cljs.core.first.call(null,inst_25393);
var inst_25404 = cljs.core.nth.call(null,inst_25403,(0),null);
var inst_25405 = cljs.core.nth.call(null,inst_25403,(1),null);
var state_25492__$1 = (function (){var statearr_25495 = state_25492;
(statearr_25495[(8)] = inst_25404);

return statearr_25495;
})();
if(cljs.core.truth_(inst_25405)){
var statearr_25496_25582 = state_25492__$1;
(statearr_25496_25582[(1)] = (22));

} else {
var statearr_25497_25583 = state_25492__$1;
(statearr_25497_25583[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (27))){
var inst_25433 = (state_25492[(9)]);
var inst_25364 = (state_25492[(10)]);
var inst_25440 = (state_25492[(11)]);
var inst_25435 = (state_25492[(12)]);
var inst_25440__$1 = cljs.core._nth.call(null,inst_25433,inst_25435);
var inst_25441 = cljs.core.async.put_BANG_.call(null,inst_25440__$1,inst_25364,done);
var state_25492__$1 = (function (){var statearr_25498 = state_25492;
(statearr_25498[(11)] = inst_25440__$1);

return statearr_25498;
})();
if(cljs.core.truth_(inst_25441)){
var statearr_25499_25584 = state_25492__$1;
(statearr_25499_25584[(1)] = (30));

} else {
var statearr_25500_25585 = state_25492__$1;
(statearr_25500_25585[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (1))){
var state_25492__$1 = state_25492;
var statearr_25501_25586 = state_25492__$1;
(statearr_25501_25586[(2)] = null);

(statearr_25501_25586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (24))){
var inst_25393 = (state_25492[(7)]);
var inst_25410 = (state_25492[(2)]);
var inst_25411 = cljs.core.next.call(null,inst_25393);
var inst_25373 = inst_25411;
var inst_25374 = null;
var inst_25375 = (0);
var inst_25376 = (0);
var state_25492__$1 = (function (){var statearr_25502 = state_25492;
(statearr_25502[(13)] = inst_25375);

(statearr_25502[(14)] = inst_25374);

(statearr_25502[(15)] = inst_25376);

(statearr_25502[(16)] = inst_25410);

(statearr_25502[(17)] = inst_25373);

return statearr_25502;
})();
var statearr_25503_25587 = state_25492__$1;
(statearr_25503_25587[(2)] = null);

(statearr_25503_25587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (39))){
var state_25492__$1 = state_25492;
var statearr_25507_25588 = state_25492__$1;
(statearr_25507_25588[(2)] = null);

(statearr_25507_25588[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (4))){
var inst_25364 = (state_25492[(10)]);
var inst_25364__$1 = (state_25492[(2)]);
var inst_25365 = (inst_25364__$1 == null);
var state_25492__$1 = (function (){var statearr_25508 = state_25492;
(statearr_25508[(10)] = inst_25364__$1);

return statearr_25508;
})();
if(cljs.core.truth_(inst_25365)){
var statearr_25509_25589 = state_25492__$1;
(statearr_25509_25589[(1)] = (5));

} else {
var statearr_25510_25590 = state_25492__$1;
(statearr_25510_25590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (15))){
var inst_25375 = (state_25492[(13)]);
var inst_25374 = (state_25492[(14)]);
var inst_25376 = (state_25492[(15)]);
var inst_25373 = (state_25492[(17)]);
var inst_25389 = (state_25492[(2)]);
var inst_25390 = (inst_25376 + (1));
var tmp25504 = inst_25375;
var tmp25505 = inst_25374;
var tmp25506 = inst_25373;
var inst_25373__$1 = tmp25506;
var inst_25374__$1 = tmp25505;
var inst_25375__$1 = tmp25504;
var inst_25376__$1 = inst_25390;
var state_25492__$1 = (function (){var statearr_25511 = state_25492;
(statearr_25511[(13)] = inst_25375__$1);

(statearr_25511[(14)] = inst_25374__$1);

(statearr_25511[(15)] = inst_25376__$1);

(statearr_25511[(18)] = inst_25389);

(statearr_25511[(17)] = inst_25373__$1);

return statearr_25511;
})();
var statearr_25512_25591 = state_25492__$1;
(statearr_25512_25591[(2)] = null);

(statearr_25512_25591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (21))){
var inst_25414 = (state_25492[(2)]);
var state_25492__$1 = state_25492;
var statearr_25516_25592 = state_25492__$1;
(statearr_25516_25592[(2)] = inst_25414);

(statearr_25516_25592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (31))){
var inst_25440 = (state_25492[(11)]);
var inst_25444 = done.call(null,null);
var inst_25445 = cljs.core.async.untap_STAR_.call(null,m,inst_25440);
var state_25492__$1 = (function (){var statearr_25517 = state_25492;
(statearr_25517[(19)] = inst_25444);

return statearr_25517;
})();
var statearr_25518_25593 = state_25492__$1;
(statearr_25518_25593[(2)] = inst_25445);

(statearr_25518_25593[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (32))){
var inst_25433 = (state_25492[(9)]);
var inst_25432 = (state_25492[(20)]);
var inst_25434 = (state_25492[(21)]);
var inst_25435 = (state_25492[(12)]);
var inst_25447 = (state_25492[(2)]);
var inst_25448 = (inst_25435 + (1));
var tmp25513 = inst_25433;
var tmp25514 = inst_25432;
var tmp25515 = inst_25434;
var inst_25432__$1 = tmp25514;
var inst_25433__$1 = tmp25513;
var inst_25434__$1 = tmp25515;
var inst_25435__$1 = inst_25448;
var state_25492__$1 = (function (){var statearr_25519 = state_25492;
(statearr_25519[(9)] = inst_25433__$1);

(statearr_25519[(20)] = inst_25432__$1);

(statearr_25519[(22)] = inst_25447);

(statearr_25519[(21)] = inst_25434__$1);

(statearr_25519[(12)] = inst_25435__$1);

return statearr_25519;
})();
var statearr_25520_25594 = state_25492__$1;
(statearr_25520_25594[(2)] = null);

(statearr_25520_25594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (40))){
var inst_25460 = (state_25492[(23)]);
var inst_25464 = done.call(null,null);
var inst_25465 = cljs.core.async.untap_STAR_.call(null,m,inst_25460);
var state_25492__$1 = (function (){var statearr_25521 = state_25492;
(statearr_25521[(24)] = inst_25464);

return statearr_25521;
})();
var statearr_25522_25595 = state_25492__$1;
(statearr_25522_25595[(2)] = inst_25465);

(statearr_25522_25595[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (33))){
var inst_25451 = (state_25492[(25)]);
var inst_25453 = cljs.core.chunked_seq_QMARK_.call(null,inst_25451);
var state_25492__$1 = state_25492;
if(inst_25453){
var statearr_25523_25596 = state_25492__$1;
(statearr_25523_25596[(1)] = (36));

} else {
var statearr_25524_25597 = state_25492__$1;
(statearr_25524_25597[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (13))){
var inst_25383 = (state_25492[(26)]);
var inst_25386 = cljs.core.async.close_BANG_.call(null,inst_25383);
var state_25492__$1 = state_25492;
var statearr_25525_25598 = state_25492__$1;
(statearr_25525_25598[(2)] = inst_25386);

(statearr_25525_25598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (22))){
var inst_25404 = (state_25492[(8)]);
var inst_25407 = cljs.core.async.close_BANG_.call(null,inst_25404);
var state_25492__$1 = state_25492;
var statearr_25526_25599 = state_25492__$1;
(statearr_25526_25599[(2)] = inst_25407);

(statearr_25526_25599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (36))){
var inst_25451 = (state_25492[(25)]);
var inst_25455 = cljs.core.chunk_first.call(null,inst_25451);
var inst_25456 = cljs.core.chunk_rest.call(null,inst_25451);
var inst_25457 = cljs.core.count.call(null,inst_25455);
var inst_25432 = inst_25456;
var inst_25433 = inst_25455;
var inst_25434 = inst_25457;
var inst_25435 = (0);
var state_25492__$1 = (function (){var statearr_25527 = state_25492;
(statearr_25527[(9)] = inst_25433);

(statearr_25527[(20)] = inst_25432);

(statearr_25527[(21)] = inst_25434);

(statearr_25527[(12)] = inst_25435);

return statearr_25527;
})();
var statearr_25528_25600 = state_25492__$1;
(statearr_25528_25600[(2)] = null);

(statearr_25528_25600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (41))){
var inst_25451 = (state_25492[(25)]);
var inst_25467 = (state_25492[(2)]);
var inst_25468 = cljs.core.next.call(null,inst_25451);
var inst_25432 = inst_25468;
var inst_25433 = null;
var inst_25434 = (0);
var inst_25435 = (0);
var state_25492__$1 = (function (){var statearr_25529 = state_25492;
(statearr_25529[(9)] = inst_25433);

(statearr_25529[(20)] = inst_25432);

(statearr_25529[(21)] = inst_25434);

(statearr_25529[(27)] = inst_25467);

(statearr_25529[(12)] = inst_25435);

return statearr_25529;
})();
var statearr_25530_25601 = state_25492__$1;
(statearr_25530_25601[(2)] = null);

(statearr_25530_25601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (43))){
var state_25492__$1 = state_25492;
var statearr_25531_25602 = state_25492__$1;
(statearr_25531_25602[(2)] = null);

(statearr_25531_25602[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (29))){
var inst_25476 = (state_25492[(2)]);
var state_25492__$1 = state_25492;
var statearr_25532_25603 = state_25492__$1;
(statearr_25532_25603[(2)] = inst_25476);

(statearr_25532_25603[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (44))){
var inst_25485 = (state_25492[(2)]);
var state_25492__$1 = (function (){var statearr_25533 = state_25492;
(statearr_25533[(28)] = inst_25485);

return statearr_25533;
})();
var statearr_25534_25604 = state_25492__$1;
(statearr_25534_25604[(2)] = null);

(statearr_25534_25604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (6))){
var inst_25424 = (state_25492[(29)]);
var inst_25423 = cljs.core.deref.call(null,cs);
var inst_25424__$1 = cljs.core.keys.call(null,inst_25423);
var inst_25425 = cljs.core.count.call(null,inst_25424__$1);
var inst_25426 = cljs.core.reset_BANG_.call(null,dctr,inst_25425);
var inst_25431 = cljs.core.seq.call(null,inst_25424__$1);
var inst_25432 = inst_25431;
var inst_25433 = null;
var inst_25434 = (0);
var inst_25435 = (0);
var state_25492__$1 = (function (){var statearr_25535 = state_25492;
(statearr_25535[(9)] = inst_25433);

(statearr_25535[(20)] = inst_25432);

(statearr_25535[(21)] = inst_25434);

(statearr_25535[(29)] = inst_25424__$1);

(statearr_25535[(12)] = inst_25435);

(statearr_25535[(30)] = inst_25426);

return statearr_25535;
})();
var statearr_25536_25605 = state_25492__$1;
(statearr_25536_25605[(2)] = null);

(statearr_25536_25605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (28))){
var inst_25432 = (state_25492[(20)]);
var inst_25451 = (state_25492[(25)]);
var inst_25451__$1 = cljs.core.seq.call(null,inst_25432);
var state_25492__$1 = (function (){var statearr_25537 = state_25492;
(statearr_25537[(25)] = inst_25451__$1);

return statearr_25537;
})();
if(inst_25451__$1){
var statearr_25538_25606 = state_25492__$1;
(statearr_25538_25606[(1)] = (33));

} else {
var statearr_25539_25607 = state_25492__$1;
(statearr_25539_25607[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (25))){
var inst_25434 = (state_25492[(21)]);
var inst_25435 = (state_25492[(12)]);
var inst_25437 = (inst_25435 < inst_25434);
var inst_25438 = inst_25437;
var state_25492__$1 = state_25492;
if(cljs.core.truth_(inst_25438)){
var statearr_25540_25608 = state_25492__$1;
(statearr_25540_25608[(1)] = (27));

} else {
var statearr_25541_25609 = state_25492__$1;
(statearr_25541_25609[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (34))){
var state_25492__$1 = state_25492;
var statearr_25542_25610 = state_25492__$1;
(statearr_25542_25610[(2)] = null);

(statearr_25542_25610[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (17))){
var state_25492__$1 = state_25492;
var statearr_25543_25611 = state_25492__$1;
(statearr_25543_25611[(2)] = null);

(statearr_25543_25611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (3))){
var inst_25490 = (state_25492[(2)]);
var state_25492__$1 = state_25492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25492__$1,inst_25490);
} else {
if((state_val_25493 === (12))){
var inst_25419 = (state_25492[(2)]);
var state_25492__$1 = state_25492;
var statearr_25544_25612 = state_25492__$1;
(statearr_25544_25612[(2)] = inst_25419);

(statearr_25544_25612[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (2))){
var state_25492__$1 = state_25492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25492__$1,(4),ch);
} else {
if((state_val_25493 === (23))){
var state_25492__$1 = state_25492;
var statearr_25545_25613 = state_25492__$1;
(statearr_25545_25613[(2)] = null);

(statearr_25545_25613[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (35))){
var inst_25474 = (state_25492[(2)]);
var state_25492__$1 = state_25492;
var statearr_25546_25614 = state_25492__$1;
(statearr_25546_25614[(2)] = inst_25474);

(statearr_25546_25614[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (19))){
var inst_25393 = (state_25492[(7)]);
var inst_25397 = cljs.core.chunk_first.call(null,inst_25393);
var inst_25398 = cljs.core.chunk_rest.call(null,inst_25393);
var inst_25399 = cljs.core.count.call(null,inst_25397);
var inst_25373 = inst_25398;
var inst_25374 = inst_25397;
var inst_25375 = inst_25399;
var inst_25376 = (0);
var state_25492__$1 = (function (){var statearr_25547 = state_25492;
(statearr_25547[(13)] = inst_25375);

(statearr_25547[(14)] = inst_25374);

(statearr_25547[(15)] = inst_25376);

(statearr_25547[(17)] = inst_25373);

return statearr_25547;
})();
var statearr_25548_25615 = state_25492__$1;
(statearr_25548_25615[(2)] = null);

(statearr_25548_25615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (11))){
var inst_25393 = (state_25492[(7)]);
var inst_25373 = (state_25492[(17)]);
var inst_25393__$1 = cljs.core.seq.call(null,inst_25373);
var state_25492__$1 = (function (){var statearr_25549 = state_25492;
(statearr_25549[(7)] = inst_25393__$1);

return statearr_25549;
})();
if(inst_25393__$1){
var statearr_25550_25616 = state_25492__$1;
(statearr_25550_25616[(1)] = (16));

} else {
var statearr_25551_25617 = state_25492__$1;
(statearr_25551_25617[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (9))){
var inst_25421 = (state_25492[(2)]);
var state_25492__$1 = state_25492;
var statearr_25552_25618 = state_25492__$1;
(statearr_25552_25618[(2)] = inst_25421);

(statearr_25552_25618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (5))){
var inst_25371 = cljs.core.deref.call(null,cs);
var inst_25372 = cljs.core.seq.call(null,inst_25371);
var inst_25373 = inst_25372;
var inst_25374 = null;
var inst_25375 = (0);
var inst_25376 = (0);
var state_25492__$1 = (function (){var statearr_25553 = state_25492;
(statearr_25553[(13)] = inst_25375);

(statearr_25553[(14)] = inst_25374);

(statearr_25553[(15)] = inst_25376);

(statearr_25553[(17)] = inst_25373);

return statearr_25553;
})();
var statearr_25554_25619 = state_25492__$1;
(statearr_25554_25619[(2)] = null);

(statearr_25554_25619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (14))){
var state_25492__$1 = state_25492;
var statearr_25555_25620 = state_25492__$1;
(statearr_25555_25620[(2)] = null);

(statearr_25555_25620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (45))){
var inst_25482 = (state_25492[(2)]);
var state_25492__$1 = state_25492;
var statearr_25556_25621 = state_25492__$1;
(statearr_25556_25621[(2)] = inst_25482);

(statearr_25556_25621[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (26))){
var inst_25424 = (state_25492[(29)]);
var inst_25478 = (state_25492[(2)]);
var inst_25479 = cljs.core.seq.call(null,inst_25424);
var state_25492__$1 = (function (){var statearr_25557 = state_25492;
(statearr_25557[(31)] = inst_25478);

return statearr_25557;
})();
if(inst_25479){
var statearr_25558_25622 = state_25492__$1;
(statearr_25558_25622[(1)] = (42));

} else {
var statearr_25559_25623 = state_25492__$1;
(statearr_25559_25623[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (16))){
var inst_25393 = (state_25492[(7)]);
var inst_25395 = cljs.core.chunked_seq_QMARK_.call(null,inst_25393);
var state_25492__$1 = state_25492;
if(inst_25395){
var statearr_25560_25624 = state_25492__$1;
(statearr_25560_25624[(1)] = (19));

} else {
var statearr_25561_25625 = state_25492__$1;
(statearr_25561_25625[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (38))){
var inst_25471 = (state_25492[(2)]);
var state_25492__$1 = state_25492;
var statearr_25562_25626 = state_25492__$1;
(statearr_25562_25626[(2)] = inst_25471);

(statearr_25562_25626[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (30))){
var state_25492__$1 = state_25492;
var statearr_25563_25627 = state_25492__$1;
(statearr_25563_25627[(2)] = null);

(statearr_25563_25627[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (10))){
var inst_25374 = (state_25492[(14)]);
var inst_25376 = (state_25492[(15)]);
var inst_25382 = cljs.core._nth.call(null,inst_25374,inst_25376);
var inst_25383 = cljs.core.nth.call(null,inst_25382,(0),null);
var inst_25384 = cljs.core.nth.call(null,inst_25382,(1),null);
var state_25492__$1 = (function (){var statearr_25564 = state_25492;
(statearr_25564[(26)] = inst_25383);

return statearr_25564;
})();
if(cljs.core.truth_(inst_25384)){
var statearr_25565_25628 = state_25492__$1;
(statearr_25565_25628[(1)] = (13));

} else {
var statearr_25566_25629 = state_25492__$1;
(statearr_25566_25629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (18))){
var inst_25417 = (state_25492[(2)]);
var state_25492__$1 = state_25492;
var statearr_25567_25630 = state_25492__$1;
(statearr_25567_25630[(2)] = inst_25417);

(statearr_25567_25630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (42))){
var state_25492__$1 = state_25492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25492__$1,(45),dchan);
} else {
if((state_val_25493 === (37))){
var inst_25364 = (state_25492[(10)]);
var inst_25460 = (state_25492[(23)]);
var inst_25451 = (state_25492[(25)]);
var inst_25460__$1 = cljs.core.first.call(null,inst_25451);
var inst_25461 = cljs.core.async.put_BANG_.call(null,inst_25460__$1,inst_25364,done);
var state_25492__$1 = (function (){var statearr_25568 = state_25492;
(statearr_25568[(23)] = inst_25460__$1);

return statearr_25568;
})();
if(cljs.core.truth_(inst_25461)){
var statearr_25569_25631 = state_25492__$1;
(statearr_25569_25631[(1)] = (39));

} else {
var statearr_25570_25632 = state_25492__$1;
(statearr_25570_25632[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25493 === (8))){
var inst_25375 = (state_25492[(13)]);
var inst_25376 = (state_25492[(15)]);
var inst_25378 = (inst_25376 < inst_25375);
var inst_25379 = inst_25378;
var state_25492__$1 = state_25492;
if(cljs.core.truth_(inst_25379)){
var statearr_25571_25633 = state_25492__$1;
(statearr_25571_25633[(1)] = (10));

} else {
var statearr_25572_25634 = state_25492__$1;
(statearr_25572_25634[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___25580,cs,m,dchan,dctr,done))
;
return ((function (switch__24161__auto__,c__24273__auto___25580,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24162__auto__ = null;
var cljs$core$async$mult_$_state_machine__24162__auto____0 = (function (){
var statearr_25576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25576[(0)] = cljs$core$async$mult_$_state_machine__24162__auto__);

(statearr_25576[(1)] = (1));

return statearr_25576;
});
var cljs$core$async$mult_$_state_machine__24162__auto____1 = (function (state_25492){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_25492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e25577){if((e25577 instanceof Object)){
var ex__24165__auto__ = e25577;
var statearr_25578_25635 = state_25492;
(statearr_25578_25635[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25636 = state_25492;
state_25492 = G__25636;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24162__auto__ = function(state_25492){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24162__auto____1.call(this,state_25492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24162__auto____0;
cljs$core$async$mult_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24162__auto____1;
return cljs$core$async$mult_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___25580,cs,m,dchan,dctr,done))
})();
var state__24275__auto__ = (function (){var statearr_25579 = f__24274__auto__.call(null);
(statearr_25579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___25580);

return statearr_25579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___25580,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25637 = [];
var len__17810__auto___25640 = arguments.length;
var i__17811__auto___25641 = (0);
while(true){
if((i__17811__auto___25641 < len__17810__auto___25640)){
args25637.push((arguments[i__17811__auto___25641]));

var G__25642 = (i__17811__auto___25641 + (1));
i__17811__auto___25641 = G__25642;
continue;
} else {
}
break;
}

var G__25639 = args25637.length;
switch (G__25639) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25637.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17407__auto__ = (((m == null))?null:m);
var m__17408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,m,ch);
} else {
var m__17408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17407__auto__ = (((m == null))?null:m);
var m__17408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,m,ch);
} else {
var m__17408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17407__auto__ = (((m == null))?null:m);
var m__17408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,m);
} else {
var m__17408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17407__auto__ = (((m == null))?null:m);
var m__17408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,m,state_map);
} else {
var m__17408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17407__auto__ = (((m == null))?null:m);
var m__17408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,m,mode);
} else {
var m__17408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17817__auto__ = [];
var len__17810__auto___25654 = arguments.length;
var i__17811__auto___25655 = (0);
while(true){
if((i__17811__auto___25655 < len__17810__auto___25654)){
args__17817__auto__.push((arguments[i__17811__auto___25655]));

var G__25656 = (i__17811__auto___25655 + (1));
i__17811__auto___25655 = G__25656;
continue;
} else {
}
break;
}

var argseq__17818__auto__ = ((((3) < args__17817__auto__.length))?(new cljs.core.IndexedSeq(args__17817__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17818__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25648){
var map__25649 = p__25648;
var map__25649__$1 = ((((!((map__25649 == null)))?((((map__25649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25649):map__25649);
var opts = map__25649__$1;
var statearr_25651_25657 = state;
(statearr_25651_25657[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25649,map__25649__$1,opts){
return (function (val){
var statearr_25652_25658 = state;
(statearr_25652_25658[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25649,map__25649__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25653_25659 = state;
(statearr_25653_25659[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25644){
var G__25645 = cljs.core.first.call(null,seq25644);
var seq25644__$1 = cljs.core.next.call(null,seq25644);
var G__25646 = cljs.core.first.call(null,seq25644__$1);
var seq25644__$2 = cljs.core.next.call(null,seq25644__$1);
var G__25647 = cljs.core.first.call(null,seq25644__$2);
var seq25644__$3 = cljs.core.next.call(null,seq25644__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25645,G__25646,G__25647,seq25644__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25823 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25824){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25824 = meta25824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25825,meta25824__$1){
var self__ = this;
var _25825__$1 = this;
return (new cljs.core.async.t_cljs$core$async25823(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25824__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25825){
var self__ = this;
var _25825__$1 = this;
return self__.meta25824;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25823.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25823.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25823.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25823.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25823.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25823.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25823.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25823.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25823.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25824","meta25824",-499602001,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25823";

cljs.core.async.t_cljs$core$async25823.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17350__auto__,writer__17351__auto__,opt__17352__auto__){
return cljs.core._write.call(null,writer__17351__auto__,"cljs.core.async/t_cljs$core$async25823");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25823 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25823(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25824){
return (new cljs.core.async.t_cljs$core$async25823(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25824));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25823(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24273__auto___25986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___25986,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___25986,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25923){
var state_val_25924 = (state_25923[(1)]);
if((state_val_25924 === (7))){
var inst_25841 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25925_25987 = state_25923__$1;
(statearr_25925_25987[(2)] = inst_25841);

(statearr_25925_25987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (20))){
var inst_25853 = (state_25923[(7)]);
var state_25923__$1 = state_25923;
var statearr_25926_25988 = state_25923__$1;
(statearr_25926_25988[(2)] = inst_25853);

(statearr_25926_25988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (27))){
var state_25923__$1 = state_25923;
var statearr_25927_25989 = state_25923__$1;
(statearr_25927_25989[(2)] = null);

(statearr_25927_25989[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (1))){
var inst_25829 = (state_25923[(8)]);
var inst_25829__$1 = calc_state.call(null);
var inst_25831 = (inst_25829__$1 == null);
var inst_25832 = cljs.core.not.call(null,inst_25831);
var state_25923__$1 = (function (){var statearr_25928 = state_25923;
(statearr_25928[(8)] = inst_25829__$1);

return statearr_25928;
})();
if(inst_25832){
var statearr_25929_25990 = state_25923__$1;
(statearr_25929_25990[(1)] = (2));

} else {
var statearr_25930_25991 = state_25923__$1;
(statearr_25930_25991[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (24))){
var inst_25897 = (state_25923[(9)]);
var inst_25883 = (state_25923[(10)]);
var inst_25876 = (state_25923[(11)]);
var inst_25897__$1 = inst_25876.call(null,inst_25883);
var state_25923__$1 = (function (){var statearr_25931 = state_25923;
(statearr_25931[(9)] = inst_25897__$1);

return statearr_25931;
})();
if(cljs.core.truth_(inst_25897__$1)){
var statearr_25932_25992 = state_25923__$1;
(statearr_25932_25992[(1)] = (29));

} else {
var statearr_25933_25993 = state_25923__$1;
(statearr_25933_25993[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (4))){
var inst_25844 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
if(cljs.core.truth_(inst_25844)){
var statearr_25934_25994 = state_25923__$1;
(statearr_25934_25994[(1)] = (8));

} else {
var statearr_25935_25995 = state_25923__$1;
(statearr_25935_25995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (15))){
var inst_25870 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
if(cljs.core.truth_(inst_25870)){
var statearr_25936_25996 = state_25923__$1;
(statearr_25936_25996[(1)] = (19));

} else {
var statearr_25937_25997 = state_25923__$1;
(statearr_25937_25997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (21))){
var inst_25875 = (state_25923[(12)]);
var inst_25875__$1 = (state_25923[(2)]);
var inst_25876 = cljs.core.get.call(null,inst_25875__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25877 = cljs.core.get.call(null,inst_25875__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25878 = cljs.core.get.call(null,inst_25875__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25923__$1 = (function (){var statearr_25938 = state_25923;
(statearr_25938[(12)] = inst_25875__$1);

(statearr_25938[(11)] = inst_25876);

(statearr_25938[(13)] = inst_25877);

return statearr_25938;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25923__$1,(22),inst_25878);
} else {
if((state_val_25924 === (31))){
var inst_25905 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
if(cljs.core.truth_(inst_25905)){
var statearr_25939_25998 = state_25923__$1;
(statearr_25939_25998[(1)] = (32));

} else {
var statearr_25940_25999 = state_25923__$1;
(statearr_25940_25999[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (32))){
var inst_25882 = (state_25923[(14)]);
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25923__$1,(35),out,inst_25882);
} else {
if((state_val_25924 === (33))){
var inst_25875 = (state_25923[(12)]);
var inst_25853 = inst_25875;
var state_25923__$1 = (function (){var statearr_25941 = state_25923;
(statearr_25941[(7)] = inst_25853);

return statearr_25941;
})();
var statearr_25942_26000 = state_25923__$1;
(statearr_25942_26000[(2)] = null);

(statearr_25942_26000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (13))){
var inst_25853 = (state_25923[(7)]);
var inst_25860 = inst_25853.cljs$lang$protocol_mask$partition0$;
var inst_25861 = (inst_25860 & (64));
var inst_25862 = inst_25853.cljs$core$ISeq$;
var inst_25863 = (inst_25861) || (inst_25862);
var state_25923__$1 = state_25923;
if(cljs.core.truth_(inst_25863)){
var statearr_25943_26001 = state_25923__$1;
(statearr_25943_26001[(1)] = (16));

} else {
var statearr_25944_26002 = state_25923__$1;
(statearr_25944_26002[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (22))){
var inst_25883 = (state_25923[(10)]);
var inst_25882 = (state_25923[(14)]);
var inst_25881 = (state_25923[(2)]);
var inst_25882__$1 = cljs.core.nth.call(null,inst_25881,(0),null);
var inst_25883__$1 = cljs.core.nth.call(null,inst_25881,(1),null);
var inst_25884 = (inst_25882__$1 == null);
var inst_25885 = cljs.core._EQ_.call(null,inst_25883__$1,change);
var inst_25886 = (inst_25884) || (inst_25885);
var state_25923__$1 = (function (){var statearr_25945 = state_25923;
(statearr_25945[(10)] = inst_25883__$1);

(statearr_25945[(14)] = inst_25882__$1);

return statearr_25945;
})();
if(cljs.core.truth_(inst_25886)){
var statearr_25946_26003 = state_25923__$1;
(statearr_25946_26003[(1)] = (23));

} else {
var statearr_25947_26004 = state_25923__$1;
(statearr_25947_26004[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (36))){
var inst_25875 = (state_25923[(12)]);
var inst_25853 = inst_25875;
var state_25923__$1 = (function (){var statearr_25948 = state_25923;
(statearr_25948[(7)] = inst_25853);

return statearr_25948;
})();
var statearr_25949_26005 = state_25923__$1;
(statearr_25949_26005[(2)] = null);

(statearr_25949_26005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (29))){
var inst_25897 = (state_25923[(9)]);
var state_25923__$1 = state_25923;
var statearr_25950_26006 = state_25923__$1;
(statearr_25950_26006[(2)] = inst_25897);

(statearr_25950_26006[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (6))){
var state_25923__$1 = state_25923;
var statearr_25951_26007 = state_25923__$1;
(statearr_25951_26007[(2)] = false);

(statearr_25951_26007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (28))){
var inst_25893 = (state_25923[(2)]);
var inst_25894 = calc_state.call(null);
var inst_25853 = inst_25894;
var state_25923__$1 = (function (){var statearr_25952 = state_25923;
(statearr_25952[(7)] = inst_25853);

(statearr_25952[(15)] = inst_25893);

return statearr_25952;
})();
var statearr_25953_26008 = state_25923__$1;
(statearr_25953_26008[(2)] = null);

(statearr_25953_26008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (25))){
var inst_25919 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25954_26009 = state_25923__$1;
(statearr_25954_26009[(2)] = inst_25919);

(statearr_25954_26009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (34))){
var inst_25917 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25955_26010 = state_25923__$1;
(statearr_25955_26010[(2)] = inst_25917);

(statearr_25955_26010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (17))){
var state_25923__$1 = state_25923;
var statearr_25956_26011 = state_25923__$1;
(statearr_25956_26011[(2)] = false);

(statearr_25956_26011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (3))){
var state_25923__$1 = state_25923;
var statearr_25957_26012 = state_25923__$1;
(statearr_25957_26012[(2)] = false);

(statearr_25957_26012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (12))){
var inst_25921 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25923__$1,inst_25921);
} else {
if((state_val_25924 === (2))){
var inst_25829 = (state_25923[(8)]);
var inst_25834 = inst_25829.cljs$lang$protocol_mask$partition0$;
var inst_25835 = (inst_25834 & (64));
var inst_25836 = inst_25829.cljs$core$ISeq$;
var inst_25837 = (inst_25835) || (inst_25836);
var state_25923__$1 = state_25923;
if(cljs.core.truth_(inst_25837)){
var statearr_25958_26013 = state_25923__$1;
(statearr_25958_26013[(1)] = (5));

} else {
var statearr_25959_26014 = state_25923__$1;
(statearr_25959_26014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (23))){
var inst_25882 = (state_25923[(14)]);
var inst_25888 = (inst_25882 == null);
var state_25923__$1 = state_25923;
if(cljs.core.truth_(inst_25888)){
var statearr_25960_26015 = state_25923__$1;
(statearr_25960_26015[(1)] = (26));

} else {
var statearr_25961_26016 = state_25923__$1;
(statearr_25961_26016[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (35))){
var inst_25908 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
if(cljs.core.truth_(inst_25908)){
var statearr_25962_26017 = state_25923__$1;
(statearr_25962_26017[(1)] = (36));

} else {
var statearr_25963_26018 = state_25923__$1;
(statearr_25963_26018[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (19))){
var inst_25853 = (state_25923[(7)]);
var inst_25872 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25853);
var state_25923__$1 = state_25923;
var statearr_25964_26019 = state_25923__$1;
(statearr_25964_26019[(2)] = inst_25872);

(statearr_25964_26019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (11))){
var inst_25853 = (state_25923[(7)]);
var inst_25857 = (inst_25853 == null);
var inst_25858 = cljs.core.not.call(null,inst_25857);
var state_25923__$1 = state_25923;
if(inst_25858){
var statearr_25965_26020 = state_25923__$1;
(statearr_25965_26020[(1)] = (13));

} else {
var statearr_25966_26021 = state_25923__$1;
(statearr_25966_26021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (9))){
var inst_25829 = (state_25923[(8)]);
var state_25923__$1 = state_25923;
var statearr_25967_26022 = state_25923__$1;
(statearr_25967_26022[(2)] = inst_25829);

(statearr_25967_26022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (5))){
var state_25923__$1 = state_25923;
var statearr_25968_26023 = state_25923__$1;
(statearr_25968_26023[(2)] = true);

(statearr_25968_26023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (14))){
var state_25923__$1 = state_25923;
var statearr_25969_26024 = state_25923__$1;
(statearr_25969_26024[(2)] = false);

(statearr_25969_26024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (26))){
var inst_25883 = (state_25923[(10)]);
var inst_25890 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25883);
var state_25923__$1 = state_25923;
var statearr_25970_26025 = state_25923__$1;
(statearr_25970_26025[(2)] = inst_25890);

(statearr_25970_26025[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (16))){
var state_25923__$1 = state_25923;
var statearr_25971_26026 = state_25923__$1;
(statearr_25971_26026[(2)] = true);

(statearr_25971_26026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (38))){
var inst_25913 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25972_26027 = state_25923__$1;
(statearr_25972_26027[(2)] = inst_25913);

(statearr_25972_26027[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (30))){
var inst_25883 = (state_25923[(10)]);
var inst_25876 = (state_25923[(11)]);
var inst_25877 = (state_25923[(13)]);
var inst_25900 = cljs.core.empty_QMARK_.call(null,inst_25876);
var inst_25901 = inst_25877.call(null,inst_25883);
var inst_25902 = cljs.core.not.call(null,inst_25901);
var inst_25903 = (inst_25900) && (inst_25902);
var state_25923__$1 = state_25923;
var statearr_25973_26028 = state_25923__$1;
(statearr_25973_26028[(2)] = inst_25903);

(statearr_25973_26028[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (10))){
var inst_25829 = (state_25923[(8)]);
var inst_25849 = (state_25923[(2)]);
var inst_25850 = cljs.core.get.call(null,inst_25849,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25851 = cljs.core.get.call(null,inst_25849,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25852 = cljs.core.get.call(null,inst_25849,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25853 = inst_25829;
var state_25923__$1 = (function (){var statearr_25974 = state_25923;
(statearr_25974[(7)] = inst_25853);

(statearr_25974[(16)] = inst_25851);

(statearr_25974[(17)] = inst_25852);

(statearr_25974[(18)] = inst_25850);

return statearr_25974;
})();
var statearr_25975_26029 = state_25923__$1;
(statearr_25975_26029[(2)] = null);

(statearr_25975_26029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (18))){
var inst_25867 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25976_26030 = state_25923__$1;
(statearr_25976_26030[(2)] = inst_25867);

(statearr_25976_26030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (37))){
var state_25923__$1 = state_25923;
var statearr_25977_26031 = state_25923__$1;
(statearr_25977_26031[(2)] = null);

(statearr_25977_26031[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (8))){
var inst_25829 = (state_25923[(8)]);
var inst_25846 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25829);
var state_25923__$1 = state_25923;
var statearr_25978_26032 = state_25923__$1;
(statearr_25978_26032[(2)] = inst_25846);

(statearr_25978_26032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___25986,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24161__auto__,c__24273__auto___25986,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24162__auto__ = null;
var cljs$core$async$mix_$_state_machine__24162__auto____0 = (function (){
var statearr_25982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25982[(0)] = cljs$core$async$mix_$_state_machine__24162__auto__);

(statearr_25982[(1)] = (1));

return statearr_25982;
});
var cljs$core$async$mix_$_state_machine__24162__auto____1 = (function (state_25923){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_25923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e25983){if((e25983 instanceof Object)){
var ex__24165__auto__ = e25983;
var statearr_25984_26033 = state_25923;
(statearr_25984_26033[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26034 = state_25923;
state_25923 = G__26034;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24162__auto__ = function(state_25923){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24162__auto____1.call(this,state_25923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24162__auto____0;
cljs$core$async$mix_$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24162__auto____1;
return cljs$core$async$mix_$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___25986,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24275__auto__ = (function (){var statearr_25985 = f__24274__auto__.call(null);
(statearr_25985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___25986);

return statearr_25985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___25986,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17407__auto__ = (((p == null))?null:p);
var m__17408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17407__auto__ = (((p == null))?null:p);
var m__17408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,p,v,ch);
} else {
var m__17408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26035 = [];
var len__17810__auto___26038 = arguments.length;
var i__17811__auto___26039 = (0);
while(true){
if((i__17811__auto___26039 < len__17810__auto___26038)){
args26035.push((arguments[i__17811__auto___26039]));

var G__26040 = (i__17811__auto___26039 + (1));
i__17811__auto___26039 = G__26040;
continue;
} else {
}
break;
}

var G__26037 = args26035.length;
switch (G__26037) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26035.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17407__auto__ = (((p == null))?null:p);
var m__17408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,p);
} else {
var m__17408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17407__auto__ = (((p == null))?null:p);
var m__17408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17407__auto__)]);
if(!((m__17408__auto__ == null))){
return m__17408__auto__.call(null,p,v);
} else {
var m__17408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17408__auto____$1 == null))){
return m__17408__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26043 = [];
var len__17810__auto___26168 = arguments.length;
var i__17811__auto___26169 = (0);
while(true){
if((i__17811__auto___26169 < len__17810__auto___26168)){
args26043.push((arguments[i__17811__auto___26169]));

var G__26170 = (i__17811__auto___26169 + (1));
i__17811__auto___26169 = G__26170;
continue;
} else {
}
break;
}

var G__26045 = args26043.length;
switch (G__26045) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26043.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16751__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16751__auto__,mults){
return (function (p1__26042_SHARP_){
if(cljs.core.truth_(p1__26042_SHARP_.call(null,topic))){
return p1__26042_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26042_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26046 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26047){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26047 = meta26047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26048,meta26047__$1){
var self__ = this;
var _26048__$1 = this;
return (new cljs.core.async.t_cljs$core$async26046(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26047__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26048){
var self__ = this;
var _26048__$1 = this;
return self__.meta26047;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26046.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26046.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26046.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26046.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26046.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26047","meta26047",-1137362442,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26046";

cljs.core.async.t_cljs$core$async26046.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17350__auto__,writer__17351__auto__,opt__17352__auto__){
return cljs.core._write.call(null,writer__17351__auto__,"cljs.core.async/t_cljs$core$async26046");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26046 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26046(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26047){
return (new cljs.core.async.t_cljs$core$async26046(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26047));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26046(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24273__auto___26172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___26172,mults,ensure_mult,p){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___26172,mults,ensure_mult,p){
return (function (state_26120){
var state_val_26121 = (state_26120[(1)]);
if((state_val_26121 === (7))){
var inst_26116 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26122_26173 = state_26120__$1;
(statearr_26122_26173[(2)] = inst_26116);

(statearr_26122_26173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (20))){
var state_26120__$1 = state_26120;
var statearr_26123_26174 = state_26120__$1;
(statearr_26123_26174[(2)] = null);

(statearr_26123_26174[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (1))){
var state_26120__$1 = state_26120;
var statearr_26124_26175 = state_26120__$1;
(statearr_26124_26175[(2)] = null);

(statearr_26124_26175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (24))){
var inst_26099 = (state_26120[(7)]);
var inst_26108 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26099);
var state_26120__$1 = state_26120;
var statearr_26125_26176 = state_26120__$1;
(statearr_26125_26176[(2)] = inst_26108);

(statearr_26125_26176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (4))){
var inst_26051 = (state_26120[(8)]);
var inst_26051__$1 = (state_26120[(2)]);
var inst_26052 = (inst_26051__$1 == null);
var state_26120__$1 = (function (){var statearr_26126 = state_26120;
(statearr_26126[(8)] = inst_26051__$1);

return statearr_26126;
})();
if(cljs.core.truth_(inst_26052)){
var statearr_26127_26177 = state_26120__$1;
(statearr_26127_26177[(1)] = (5));

} else {
var statearr_26128_26178 = state_26120__$1;
(statearr_26128_26178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (15))){
var inst_26093 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26129_26179 = state_26120__$1;
(statearr_26129_26179[(2)] = inst_26093);

(statearr_26129_26179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (21))){
var inst_26113 = (state_26120[(2)]);
var state_26120__$1 = (function (){var statearr_26130 = state_26120;
(statearr_26130[(9)] = inst_26113);

return statearr_26130;
})();
var statearr_26131_26180 = state_26120__$1;
(statearr_26131_26180[(2)] = null);

(statearr_26131_26180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (13))){
var inst_26075 = (state_26120[(10)]);
var inst_26077 = cljs.core.chunked_seq_QMARK_.call(null,inst_26075);
var state_26120__$1 = state_26120;
if(inst_26077){
var statearr_26132_26181 = state_26120__$1;
(statearr_26132_26181[(1)] = (16));

} else {
var statearr_26133_26182 = state_26120__$1;
(statearr_26133_26182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (22))){
var inst_26105 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
if(cljs.core.truth_(inst_26105)){
var statearr_26134_26183 = state_26120__$1;
(statearr_26134_26183[(1)] = (23));

} else {
var statearr_26135_26184 = state_26120__$1;
(statearr_26135_26184[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (6))){
var inst_26051 = (state_26120[(8)]);
var inst_26101 = (state_26120[(11)]);
var inst_26099 = (state_26120[(7)]);
var inst_26099__$1 = topic_fn.call(null,inst_26051);
var inst_26100 = cljs.core.deref.call(null,mults);
var inst_26101__$1 = cljs.core.get.call(null,inst_26100,inst_26099__$1);
var state_26120__$1 = (function (){var statearr_26136 = state_26120;
(statearr_26136[(11)] = inst_26101__$1);

(statearr_26136[(7)] = inst_26099__$1);

return statearr_26136;
})();
if(cljs.core.truth_(inst_26101__$1)){
var statearr_26137_26185 = state_26120__$1;
(statearr_26137_26185[(1)] = (19));

} else {
var statearr_26138_26186 = state_26120__$1;
(statearr_26138_26186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (25))){
var inst_26110 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26139_26187 = state_26120__$1;
(statearr_26139_26187[(2)] = inst_26110);

(statearr_26139_26187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (17))){
var inst_26075 = (state_26120[(10)]);
var inst_26084 = cljs.core.first.call(null,inst_26075);
var inst_26085 = cljs.core.async.muxch_STAR_.call(null,inst_26084);
var inst_26086 = cljs.core.async.close_BANG_.call(null,inst_26085);
var inst_26087 = cljs.core.next.call(null,inst_26075);
var inst_26061 = inst_26087;
var inst_26062 = null;
var inst_26063 = (0);
var inst_26064 = (0);
var state_26120__$1 = (function (){var statearr_26140 = state_26120;
(statearr_26140[(12)] = inst_26061);

(statearr_26140[(13)] = inst_26086);

(statearr_26140[(14)] = inst_26062);

(statearr_26140[(15)] = inst_26064);

(statearr_26140[(16)] = inst_26063);

return statearr_26140;
})();
var statearr_26141_26188 = state_26120__$1;
(statearr_26141_26188[(2)] = null);

(statearr_26141_26188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (3))){
var inst_26118 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26120__$1,inst_26118);
} else {
if((state_val_26121 === (12))){
var inst_26095 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26142_26189 = state_26120__$1;
(statearr_26142_26189[(2)] = inst_26095);

(statearr_26142_26189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (2))){
var state_26120__$1 = state_26120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26120__$1,(4),ch);
} else {
if((state_val_26121 === (23))){
var state_26120__$1 = state_26120;
var statearr_26143_26190 = state_26120__$1;
(statearr_26143_26190[(2)] = null);

(statearr_26143_26190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (19))){
var inst_26051 = (state_26120[(8)]);
var inst_26101 = (state_26120[(11)]);
var inst_26103 = cljs.core.async.muxch_STAR_.call(null,inst_26101);
var state_26120__$1 = state_26120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26120__$1,(22),inst_26103,inst_26051);
} else {
if((state_val_26121 === (11))){
var inst_26061 = (state_26120[(12)]);
var inst_26075 = (state_26120[(10)]);
var inst_26075__$1 = cljs.core.seq.call(null,inst_26061);
var state_26120__$1 = (function (){var statearr_26144 = state_26120;
(statearr_26144[(10)] = inst_26075__$1);

return statearr_26144;
})();
if(inst_26075__$1){
var statearr_26145_26191 = state_26120__$1;
(statearr_26145_26191[(1)] = (13));

} else {
var statearr_26146_26192 = state_26120__$1;
(statearr_26146_26192[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (9))){
var inst_26097 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26147_26193 = state_26120__$1;
(statearr_26147_26193[(2)] = inst_26097);

(statearr_26147_26193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (5))){
var inst_26058 = cljs.core.deref.call(null,mults);
var inst_26059 = cljs.core.vals.call(null,inst_26058);
var inst_26060 = cljs.core.seq.call(null,inst_26059);
var inst_26061 = inst_26060;
var inst_26062 = null;
var inst_26063 = (0);
var inst_26064 = (0);
var state_26120__$1 = (function (){var statearr_26148 = state_26120;
(statearr_26148[(12)] = inst_26061);

(statearr_26148[(14)] = inst_26062);

(statearr_26148[(15)] = inst_26064);

(statearr_26148[(16)] = inst_26063);

return statearr_26148;
})();
var statearr_26149_26194 = state_26120__$1;
(statearr_26149_26194[(2)] = null);

(statearr_26149_26194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (14))){
var state_26120__$1 = state_26120;
var statearr_26153_26195 = state_26120__$1;
(statearr_26153_26195[(2)] = null);

(statearr_26153_26195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (16))){
var inst_26075 = (state_26120[(10)]);
var inst_26079 = cljs.core.chunk_first.call(null,inst_26075);
var inst_26080 = cljs.core.chunk_rest.call(null,inst_26075);
var inst_26081 = cljs.core.count.call(null,inst_26079);
var inst_26061 = inst_26080;
var inst_26062 = inst_26079;
var inst_26063 = inst_26081;
var inst_26064 = (0);
var state_26120__$1 = (function (){var statearr_26154 = state_26120;
(statearr_26154[(12)] = inst_26061);

(statearr_26154[(14)] = inst_26062);

(statearr_26154[(15)] = inst_26064);

(statearr_26154[(16)] = inst_26063);

return statearr_26154;
})();
var statearr_26155_26196 = state_26120__$1;
(statearr_26155_26196[(2)] = null);

(statearr_26155_26196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (10))){
var inst_26061 = (state_26120[(12)]);
var inst_26062 = (state_26120[(14)]);
var inst_26064 = (state_26120[(15)]);
var inst_26063 = (state_26120[(16)]);
var inst_26069 = cljs.core._nth.call(null,inst_26062,inst_26064);
var inst_26070 = cljs.core.async.muxch_STAR_.call(null,inst_26069);
var inst_26071 = cljs.core.async.close_BANG_.call(null,inst_26070);
var inst_26072 = (inst_26064 + (1));
var tmp26150 = inst_26061;
var tmp26151 = inst_26062;
var tmp26152 = inst_26063;
var inst_26061__$1 = tmp26150;
var inst_26062__$1 = tmp26151;
var inst_26063__$1 = tmp26152;
var inst_26064__$1 = inst_26072;
var state_26120__$1 = (function (){var statearr_26156 = state_26120;
(statearr_26156[(12)] = inst_26061__$1);

(statearr_26156[(17)] = inst_26071);

(statearr_26156[(14)] = inst_26062__$1);

(statearr_26156[(15)] = inst_26064__$1);

(statearr_26156[(16)] = inst_26063__$1);

return statearr_26156;
})();
var statearr_26157_26197 = state_26120__$1;
(statearr_26157_26197[(2)] = null);

(statearr_26157_26197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (18))){
var inst_26090 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26158_26198 = state_26120__$1;
(statearr_26158_26198[(2)] = inst_26090);

(statearr_26158_26198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (8))){
var inst_26064 = (state_26120[(15)]);
var inst_26063 = (state_26120[(16)]);
var inst_26066 = (inst_26064 < inst_26063);
var inst_26067 = inst_26066;
var state_26120__$1 = state_26120;
if(cljs.core.truth_(inst_26067)){
var statearr_26159_26199 = state_26120__$1;
(statearr_26159_26199[(1)] = (10));

} else {
var statearr_26160_26200 = state_26120__$1;
(statearr_26160_26200[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___26172,mults,ensure_mult,p))
;
return ((function (switch__24161__auto__,c__24273__auto___26172,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24162__auto__ = null;
var cljs$core$async$state_machine__24162__auto____0 = (function (){
var statearr_26164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26164[(0)] = cljs$core$async$state_machine__24162__auto__);

(statearr_26164[(1)] = (1));

return statearr_26164;
});
var cljs$core$async$state_machine__24162__auto____1 = (function (state_26120){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_26120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e26165){if((e26165 instanceof Object)){
var ex__24165__auto__ = e26165;
var statearr_26166_26201 = state_26120;
(statearr_26166_26201[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26202 = state_26120;
state_26120 = G__26202;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$state_machine__24162__auto__ = function(state_26120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24162__auto____1.call(this,state_26120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24162__auto____0;
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24162__auto____1;
return cljs$core$async$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___26172,mults,ensure_mult,p))
})();
var state__24275__auto__ = (function (){var statearr_26167 = f__24274__auto__.call(null);
(statearr_26167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___26172);

return statearr_26167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___26172,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26203 = [];
var len__17810__auto___26206 = arguments.length;
var i__17811__auto___26207 = (0);
while(true){
if((i__17811__auto___26207 < len__17810__auto___26206)){
args26203.push((arguments[i__17811__auto___26207]));

var G__26208 = (i__17811__auto___26207 + (1));
i__17811__auto___26207 = G__26208;
continue;
} else {
}
break;
}

var G__26205 = args26203.length;
switch (G__26205) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26203.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26210 = [];
var len__17810__auto___26213 = arguments.length;
var i__17811__auto___26214 = (0);
while(true){
if((i__17811__auto___26214 < len__17810__auto___26213)){
args26210.push((arguments[i__17811__auto___26214]));

var G__26215 = (i__17811__auto___26214 + (1));
i__17811__auto___26214 = G__26215;
continue;
} else {
}
break;
}

var G__26212 = args26210.length;
switch (G__26212) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26210.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26217 = [];
var len__17810__auto___26288 = arguments.length;
var i__17811__auto___26289 = (0);
while(true){
if((i__17811__auto___26289 < len__17810__auto___26288)){
args26217.push((arguments[i__17811__auto___26289]));

var G__26290 = (i__17811__auto___26289 + (1));
i__17811__auto___26289 = G__26290;
continue;
} else {
}
break;
}

var G__26219 = args26217.length;
switch (G__26219) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26217.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24273__auto___26292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___26292,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___26292,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26258){
var state_val_26259 = (state_26258[(1)]);
if((state_val_26259 === (7))){
var state_26258__$1 = state_26258;
var statearr_26260_26293 = state_26258__$1;
(statearr_26260_26293[(2)] = null);

(statearr_26260_26293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (1))){
var state_26258__$1 = state_26258;
var statearr_26261_26294 = state_26258__$1;
(statearr_26261_26294[(2)] = null);

(statearr_26261_26294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (4))){
var inst_26222 = (state_26258[(7)]);
var inst_26224 = (inst_26222 < cnt);
var state_26258__$1 = state_26258;
if(cljs.core.truth_(inst_26224)){
var statearr_26262_26295 = state_26258__$1;
(statearr_26262_26295[(1)] = (6));

} else {
var statearr_26263_26296 = state_26258__$1;
(statearr_26263_26296[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (15))){
var inst_26254 = (state_26258[(2)]);
var state_26258__$1 = state_26258;
var statearr_26264_26297 = state_26258__$1;
(statearr_26264_26297[(2)] = inst_26254);

(statearr_26264_26297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (13))){
var inst_26247 = cljs.core.async.close_BANG_.call(null,out);
var state_26258__$1 = state_26258;
var statearr_26265_26298 = state_26258__$1;
(statearr_26265_26298[(2)] = inst_26247);

(statearr_26265_26298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (6))){
var state_26258__$1 = state_26258;
var statearr_26266_26299 = state_26258__$1;
(statearr_26266_26299[(2)] = null);

(statearr_26266_26299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (3))){
var inst_26256 = (state_26258[(2)]);
var state_26258__$1 = state_26258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26258__$1,inst_26256);
} else {
if((state_val_26259 === (12))){
var inst_26244 = (state_26258[(8)]);
var inst_26244__$1 = (state_26258[(2)]);
var inst_26245 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26244__$1);
var state_26258__$1 = (function (){var statearr_26267 = state_26258;
(statearr_26267[(8)] = inst_26244__$1);

return statearr_26267;
})();
if(cljs.core.truth_(inst_26245)){
var statearr_26268_26300 = state_26258__$1;
(statearr_26268_26300[(1)] = (13));

} else {
var statearr_26269_26301 = state_26258__$1;
(statearr_26269_26301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (2))){
var inst_26221 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26222 = (0);
var state_26258__$1 = (function (){var statearr_26270 = state_26258;
(statearr_26270[(7)] = inst_26222);

(statearr_26270[(9)] = inst_26221);

return statearr_26270;
})();
var statearr_26271_26302 = state_26258__$1;
(statearr_26271_26302[(2)] = null);

(statearr_26271_26302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (11))){
var inst_26222 = (state_26258[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26258,(10),Object,null,(9));
var inst_26231 = chs__$1.call(null,inst_26222);
var inst_26232 = done.call(null,inst_26222);
var inst_26233 = cljs.core.async.take_BANG_.call(null,inst_26231,inst_26232);
var state_26258__$1 = state_26258;
var statearr_26272_26303 = state_26258__$1;
(statearr_26272_26303[(2)] = inst_26233);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26258__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (9))){
var inst_26222 = (state_26258[(7)]);
var inst_26235 = (state_26258[(2)]);
var inst_26236 = (inst_26222 + (1));
var inst_26222__$1 = inst_26236;
var state_26258__$1 = (function (){var statearr_26273 = state_26258;
(statearr_26273[(10)] = inst_26235);

(statearr_26273[(7)] = inst_26222__$1);

return statearr_26273;
})();
var statearr_26274_26304 = state_26258__$1;
(statearr_26274_26304[(2)] = null);

(statearr_26274_26304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (5))){
var inst_26242 = (state_26258[(2)]);
var state_26258__$1 = (function (){var statearr_26275 = state_26258;
(statearr_26275[(11)] = inst_26242);

return statearr_26275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26258__$1,(12),dchan);
} else {
if((state_val_26259 === (14))){
var inst_26244 = (state_26258[(8)]);
var inst_26249 = cljs.core.apply.call(null,f,inst_26244);
var state_26258__$1 = state_26258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26258__$1,(16),out,inst_26249);
} else {
if((state_val_26259 === (16))){
var inst_26251 = (state_26258[(2)]);
var state_26258__$1 = (function (){var statearr_26276 = state_26258;
(statearr_26276[(12)] = inst_26251);

return statearr_26276;
})();
var statearr_26277_26305 = state_26258__$1;
(statearr_26277_26305[(2)] = null);

(statearr_26277_26305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (10))){
var inst_26226 = (state_26258[(2)]);
var inst_26227 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26258__$1 = (function (){var statearr_26278 = state_26258;
(statearr_26278[(13)] = inst_26226);

return statearr_26278;
})();
var statearr_26279_26306 = state_26258__$1;
(statearr_26279_26306[(2)] = inst_26227);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26258__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (8))){
var inst_26240 = (state_26258[(2)]);
var state_26258__$1 = state_26258;
var statearr_26280_26307 = state_26258__$1;
(statearr_26280_26307[(2)] = inst_26240);

(statearr_26280_26307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___26292,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24161__auto__,c__24273__auto___26292,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24162__auto__ = null;
var cljs$core$async$state_machine__24162__auto____0 = (function (){
var statearr_26284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26284[(0)] = cljs$core$async$state_machine__24162__auto__);

(statearr_26284[(1)] = (1));

return statearr_26284;
});
var cljs$core$async$state_machine__24162__auto____1 = (function (state_26258){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_26258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e26285){if((e26285 instanceof Object)){
var ex__24165__auto__ = e26285;
var statearr_26286_26308 = state_26258;
(statearr_26286_26308[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26309 = state_26258;
state_26258 = G__26309;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$state_machine__24162__auto__ = function(state_26258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24162__auto____1.call(this,state_26258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24162__auto____0;
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24162__auto____1;
return cljs$core$async$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___26292,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24275__auto__ = (function (){var statearr_26287 = f__24274__auto__.call(null);
(statearr_26287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___26292);

return statearr_26287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___26292,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26311 = [];
var len__17810__auto___26367 = arguments.length;
var i__17811__auto___26368 = (0);
while(true){
if((i__17811__auto___26368 < len__17810__auto___26367)){
args26311.push((arguments[i__17811__auto___26368]));

var G__26369 = (i__17811__auto___26368 + (1));
i__17811__auto___26368 = G__26369;
continue;
} else {
}
break;
}

var G__26313 = args26311.length;
switch (G__26313) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26311.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24273__auto___26371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___26371,out){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___26371,out){
return (function (state_26343){
var state_val_26344 = (state_26343[(1)]);
if((state_val_26344 === (7))){
var inst_26323 = (state_26343[(7)]);
var inst_26322 = (state_26343[(8)]);
var inst_26322__$1 = (state_26343[(2)]);
var inst_26323__$1 = cljs.core.nth.call(null,inst_26322__$1,(0),null);
var inst_26324 = cljs.core.nth.call(null,inst_26322__$1,(1),null);
var inst_26325 = (inst_26323__$1 == null);
var state_26343__$1 = (function (){var statearr_26345 = state_26343;
(statearr_26345[(7)] = inst_26323__$1);

(statearr_26345[(8)] = inst_26322__$1);

(statearr_26345[(9)] = inst_26324);

return statearr_26345;
})();
if(cljs.core.truth_(inst_26325)){
var statearr_26346_26372 = state_26343__$1;
(statearr_26346_26372[(1)] = (8));

} else {
var statearr_26347_26373 = state_26343__$1;
(statearr_26347_26373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (1))){
var inst_26314 = cljs.core.vec.call(null,chs);
var inst_26315 = inst_26314;
var state_26343__$1 = (function (){var statearr_26348 = state_26343;
(statearr_26348[(10)] = inst_26315);

return statearr_26348;
})();
var statearr_26349_26374 = state_26343__$1;
(statearr_26349_26374[(2)] = null);

(statearr_26349_26374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (4))){
var inst_26315 = (state_26343[(10)]);
var state_26343__$1 = state_26343;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26343__$1,(7),inst_26315);
} else {
if((state_val_26344 === (6))){
var inst_26339 = (state_26343[(2)]);
var state_26343__$1 = state_26343;
var statearr_26350_26375 = state_26343__$1;
(statearr_26350_26375[(2)] = inst_26339);

(statearr_26350_26375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (3))){
var inst_26341 = (state_26343[(2)]);
var state_26343__$1 = state_26343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26343__$1,inst_26341);
} else {
if((state_val_26344 === (2))){
var inst_26315 = (state_26343[(10)]);
var inst_26317 = cljs.core.count.call(null,inst_26315);
var inst_26318 = (inst_26317 > (0));
var state_26343__$1 = state_26343;
if(cljs.core.truth_(inst_26318)){
var statearr_26352_26376 = state_26343__$1;
(statearr_26352_26376[(1)] = (4));

} else {
var statearr_26353_26377 = state_26343__$1;
(statearr_26353_26377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (11))){
var inst_26315 = (state_26343[(10)]);
var inst_26332 = (state_26343[(2)]);
var tmp26351 = inst_26315;
var inst_26315__$1 = tmp26351;
var state_26343__$1 = (function (){var statearr_26354 = state_26343;
(statearr_26354[(10)] = inst_26315__$1);

(statearr_26354[(11)] = inst_26332);

return statearr_26354;
})();
var statearr_26355_26378 = state_26343__$1;
(statearr_26355_26378[(2)] = null);

(statearr_26355_26378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (9))){
var inst_26323 = (state_26343[(7)]);
var state_26343__$1 = state_26343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26343__$1,(11),out,inst_26323);
} else {
if((state_val_26344 === (5))){
var inst_26337 = cljs.core.async.close_BANG_.call(null,out);
var state_26343__$1 = state_26343;
var statearr_26356_26379 = state_26343__$1;
(statearr_26356_26379[(2)] = inst_26337);

(statearr_26356_26379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (10))){
var inst_26335 = (state_26343[(2)]);
var state_26343__$1 = state_26343;
var statearr_26357_26380 = state_26343__$1;
(statearr_26357_26380[(2)] = inst_26335);

(statearr_26357_26380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (8))){
var inst_26315 = (state_26343[(10)]);
var inst_26323 = (state_26343[(7)]);
var inst_26322 = (state_26343[(8)]);
var inst_26324 = (state_26343[(9)]);
var inst_26327 = (function (){var cs = inst_26315;
var vec__26320 = inst_26322;
var v = inst_26323;
var c = inst_26324;
return ((function (cs,vec__26320,v,c,inst_26315,inst_26323,inst_26322,inst_26324,state_val_26344,c__24273__auto___26371,out){
return (function (p1__26310_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26310_SHARP_);
});
;})(cs,vec__26320,v,c,inst_26315,inst_26323,inst_26322,inst_26324,state_val_26344,c__24273__auto___26371,out))
})();
var inst_26328 = cljs.core.filterv.call(null,inst_26327,inst_26315);
var inst_26315__$1 = inst_26328;
var state_26343__$1 = (function (){var statearr_26358 = state_26343;
(statearr_26358[(10)] = inst_26315__$1);

return statearr_26358;
})();
var statearr_26359_26381 = state_26343__$1;
(statearr_26359_26381[(2)] = null);

(statearr_26359_26381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___26371,out))
;
return ((function (switch__24161__auto__,c__24273__auto___26371,out){
return (function() {
var cljs$core$async$state_machine__24162__auto__ = null;
var cljs$core$async$state_machine__24162__auto____0 = (function (){
var statearr_26363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26363[(0)] = cljs$core$async$state_machine__24162__auto__);

(statearr_26363[(1)] = (1));

return statearr_26363;
});
var cljs$core$async$state_machine__24162__auto____1 = (function (state_26343){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_26343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e26364){if((e26364 instanceof Object)){
var ex__24165__auto__ = e26364;
var statearr_26365_26382 = state_26343;
(statearr_26365_26382[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26383 = state_26343;
state_26343 = G__26383;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$state_machine__24162__auto__ = function(state_26343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24162__auto____1.call(this,state_26343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24162__auto____0;
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24162__auto____1;
return cljs$core$async$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___26371,out))
})();
var state__24275__auto__ = (function (){var statearr_26366 = f__24274__auto__.call(null);
(statearr_26366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___26371);

return statearr_26366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___26371,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26384 = [];
var len__17810__auto___26433 = arguments.length;
var i__17811__auto___26434 = (0);
while(true){
if((i__17811__auto___26434 < len__17810__auto___26433)){
args26384.push((arguments[i__17811__auto___26434]));

var G__26435 = (i__17811__auto___26434 + (1));
i__17811__auto___26434 = G__26435;
continue;
} else {
}
break;
}

var G__26386 = args26384.length;
switch (G__26386) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26384.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24273__auto___26437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___26437,out){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___26437,out){
return (function (state_26410){
var state_val_26411 = (state_26410[(1)]);
if((state_val_26411 === (7))){
var inst_26392 = (state_26410[(7)]);
var inst_26392__$1 = (state_26410[(2)]);
var inst_26393 = (inst_26392__$1 == null);
var inst_26394 = cljs.core.not.call(null,inst_26393);
var state_26410__$1 = (function (){var statearr_26412 = state_26410;
(statearr_26412[(7)] = inst_26392__$1);

return statearr_26412;
})();
if(inst_26394){
var statearr_26413_26438 = state_26410__$1;
(statearr_26413_26438[(1)] = (8));

} else {
var statearr_26414_26439 = state_26410__$1;
(statearr_26414_26439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (1))){
var inst_26387 = (0);
var state_26410__$1 = (function (){var statearr_26415 = state_26410;
(statearr_26415[(8)] = inst_26387);

return statearr_26415;
})();
var statearr_26416_26440 = state_26410__$1;
(statearr_26416_26440[(2)] = null);

(statearr_26416_26440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (4))){
var state_26410__$1 = state_26410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26410__$1,(7),ch);
} else {
if((state_val_26411 === (6))){
var inst_26405 = (state_26410[(2)]);
var state_26410__$1 = state_26410;
var statearr_26417_26441 = state_26410__$1;
(statearr_26417_26441[(2)] = inst_26405);

(statearr_26417_26441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (3))){
var inst_26407 = (state_26410[(2)]);
var inst_26408 = cljs.core.async.close_BANG_.call(null,out);
var state_26410__$1 = (function (){var statearr_26418 = state_26410;
(statearr_26418[(9)] = inst_26407);

return statearr_26418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26410__$1,inst_26408);
} else {
if((state_val_26411 === (2))){
var inst_26387 = (state_26410[(8)]);
var inst_26389 = (inst_26387 < n);
var state_26410__$1 = state_26410;
if(cljs.core.truth_(inst_26389)){
var statearr_26419_26442 = state_26410__$1;
(statearr_26419_26442[(1)] = (4));

} else {
var statearr_26420_26443 = state_26410__$1;
(statearr_26420_26443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (11))){
var inst_26387 = (state_26410[(8)]);
var inst_26397 = (state_26410[(2)]);
var inst_26398 = (inst_26387 + (1));
var inst_26387__$1 = inst_26398;
var state_26410__$1 = (function (){var statearr_26421 = state_26410;
(statearr_26421[(8)] = inst_26387__$1);

(statearr_26421[(10)] = inst_26397);

return statearr_26421;
})();
var statearr_26422_26444 = state_26410__$1;
(statearr_26422_26444[(2)] = null);

(statearr_26422_26444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (9))){
var state_26410__$1 = state_26410;
var statearr_26423_26445 = state_26410__$1;
(statearr_26423_26445[(2)] = null);

(statearr_26423_26445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (5))){
var state_26410__$1 = state_26410;
var statearr_26424_26446 = state_26410__$1;
(statearr_26424_26446[(2)] = null);

(statearr_26424_26446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (10))){
var inst_26402 = (state_26410[(2)]);
var state_26410__$1 = state_26410;
var statearr_26425_26447 = state_26410__$1;
(statearr_26425_26447[(2)] = inst_26402);

(statearr_26425_26447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26411 === (8))){
var inst_26392 = (state_26410[(7)]);
var state_26410__$1 = state_26410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26410__$1,(11),out,inst_26392);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___26437,out))
;
return ((function (switch__24161__auto__,c__24273__auto___26437,out){
return (function() {
var cljs$core$async$state_machine__24162__auto__ = null;
var cljs$core$async$state_machine__24162__auto____0 = (function (){
var statearr_26429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26429[(0)] = cljs$core$async$state_machine__24162__auto__);

(statearr_26429[(1)] = (1));

return statearr_26429;
});
var cljs$core$async$state_machine__24162__auto____1 = (function (state_26410){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_26410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e26430){if((e26430 instanceof Object)){
var ex__24165__auto__ = e26430;
var statearr_26431_26448 = state_26410;
(statearr_26431_26448[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26449 = state_26410;
state_26410 = G__26449;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$state_machine__24162__auto__ = function(state_26410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24162__auto____1.call(this,state_26410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24162__auto____0;
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24162__auto____1;
return cljs$core$async$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___26437,out))
})();
var state__24275__auto__ = (function (){var statearr_26432 = f__24274__auto__.call(null);
(statearr_26432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___26437);

return statearr_26432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___26437,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26457 = (function (map_LT_,f,ch,meta26458){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26458 = meta26458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26459,meta26458__$1){
var self__ = this;
var _26459__$1 = this;
return (new cljs.core.async.t_cljs$core$async26457(self__.map_LT_,self__.f,self__.ch,meta26458__$1));
});

cljs.core.async.t_cljs$core$async26457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26459){
var self__ = this;
var _26459__$1 = this;
return self__.meta26458;
});

cljs.core.async.t_cljs$core$async26457.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26457.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26457.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26460 = (function (map_LT_,f,ch,meta26458,_,fn1,meta26461){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26458 = meta26458;
this._ = _;
this.fn1 = fn1;
this.meta26461 = meta26461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26462,meta26461__$1){
var self__ = this;
var _26462__$1 = this;
return (new cljs.core.async.t_cljs$core$async26460(self__.map_LT_,self__.f,self__.ch,self__.meta26458,self__._,self__.fn1,meta26461__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26462){
var self__ = this;
var _26462__$1 = this;
return self__.meta26461;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26450_SHARP_){
return f1.call(null,(((p1__26450_SHARP_ == null))?null:self__.f.call(null,p1__26450_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26460.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26458","meta26458",1589175565,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26457","cljs.core.async/t_cljs$core$async26457",-1285841064,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26461","meta26461",1919319078,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26460";

cljs.core.async.t_cljs$core$async26460.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17350__auto__,writer__17351__auto__,opt__17352__auto__){
return cljs.core._write.call(null,writer__17351__auto__,"cljs.core.async/t_cljs$core$async26460");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26460 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26460(map_LT___$1,f__$1,ch__$1,meta26458__$1,___$2,fn1__$1,meta26461){
return (new cljs.core.async.t_cljs$core$async26460(map_LT___$1,f__$1,ch__$1,meta26458__$1,___$2,fn1__$1,meta26461));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26460(self__.map_LT_,self__.f,self__.ch,self__.meta26458,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16739__auto__ = ret;
if(cljs.core.truth_(and__16739__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16739__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26457.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26458","meta26458",1589175565,null)], null);
});

cljs.core.async.t_cljs$core$async26457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26457";

cljs.core.async.t_cljs$core$async26457.cljs$lang$ctorPrWriter = (function (this__17350__auto__,writer__17351__auto__,opt__17352__auto__){
return cljs.core._write.call(null,writer__17351__auto__,"cljs.core.async/t_cljs$core$async26457");
});

cljs.core.async.__GT_t_cljs$core$async26457 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26457(map_LT___$1,f__$1,ch__$1,meta26458){
return (new cljs.core.async.t_cljs$core$async26457(map_LT___$1,f__$1,ch__$1,meta26458));
});

}

return (new cljs.core.async.t_cljs$core$async26457(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26466 = (function (map_GT_,f,ch,meta26467){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26467 = meta26467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26468,meta26467__$1){
var self__ = this;
var _26468__$1 = this;
return (new cljs.core.async.t_cljs$core$async26466(self__.map_GT_,self__.f,self__.ch,meta26467__$1));
});

cljs.core.async.t_cljs$core$async26466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26468){
var self__ = this;
var _26468__$1 = this;
return self__.meta26467;
});

cljs.core.async.t_cljs$core$async26466.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26466.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26466.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26467","meta26467",-884919268,null)], null);
});

cljs.core.async.t_cljs$core$async26466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26466";

cljs.core.async.t_cljs$core$async26466.cljs$lang$ctorPrWriter = (function (this__17350__auto__,writer__17351__auto__,opt__17352__auto__){
return cljs.core._write.call(null,writer__17351__auto__,"cljs.core.async/t_cljs$core$async26466");
});

cljs.core.async.__GT_t_cljs$core$async26466 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26466(map_GT___$1,f__$1,ch__$1,meta26467){
return (new cljs.core.async.t_cljs$core$async26466(map_GT___$1,f__$1,ch__$1,meta26467));
});

}

return (new cljs.core.async.t_cljs$core$async26466(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26472 = (function (filter_GT_,p,ch,meta26473){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26473 = meta26473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26474,meta26473__$1){
var self__ = this;
var _26474__$1 = this;
return (new cljs.core.async.t_cljs$core$async26472(self__.filter_GT_,self__.p,self__.ch,meta26473__$1));
});

cljs.core.async.t_cljs$core$async26472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26474){
var self__ = this;
var _26474__$1 = this;
return self__.meta26473;
});

cljs.core.async.t_cljs$core$async26472.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26472.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26472.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26472.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26473","meta26473",-1846318299,null)], null);
});

cljs.core.async.t_cljs$core$async26472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26472";

cljs.core.async.t_cljs$core$async26472.cljs$lang$ctorPrWriter = (function (this__17350__auto__,writer__17351__auto__,opt__17352__auto__){
return cljs.core._write.call(null,writer__17351__auto__,"cljs.core.async/t_cljs$core$async26472");
});

cljs.core.async.__GT_t_cljs$core$async26472 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26472(filter_GT___$1,p__$1,ch__$1,meta26473){
return (new cljs.core.async.t_cljs$core$async26472(filter_GT___$1,p__$1,ch__$1,meta26473));
});

}

return (new cljs.core.async.t_cljs$core$async26472(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26475 = [];
var len__17810__auto___26519 = arguments.length;
var i__17811__auto___26520 = (0);
while(true){
if((i__17811__auto___26520 < len__17810__auto___26519)){
args26475.push((arguments[i__17811__auto___26520]));

var G__26521 = (i__17811__auto___26520 + (1));
i__17811__auto___26520 = G__26521;
continue;
} else {
}
break;
}

var G__26477 = args26475.length;
switch (G__26477) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26475.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24273__auto___26523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___26523,out){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___26523,out){
return (function (state_26498){
var state_val_26499 = (state_26498[(1)]);
if((state_val_26499 === (7))){
var inst_26494 = (state_26498[(2)]);
var state_26498__$1 = state_26498;
var statearr_26500_26524 = state_26498__$1;
(statearr_26500_26524[(2)] = inst_26494);

(statearr_26500_26524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (1))){
var state_26498__$1 = state_26498;
var statearr_26501_26525 = state_26498__$1;
(statearr_26501_26525[(2)] = null);

(statearr_26501_26525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (4))){
var inst_26480 = (state_26498[(7)]);
var inst_26480__$1 = (state_26498[(2)]);
var inst_26481 = (inst_26480__$1 == null);
var state_26498__$1 = (function (){var statearr_26502 = state_26498;
(statearr_26502[(7)] = inst_26480__$1);

return statearr_26502;
})();
if(cljs.core.truth_(inst_26481)){
var statearr_26503_26526 = state_26498__$1;
(statearr_26503_26526[(1)] = (5));

} else {
var statearr_26504_26527 = state_26498__$1;
(statearr_26504_26527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (6))){
var inst_26480 = (state_26498[(7)]);
var inst_26485 = p.call(null,inst_26480);
var state_26498__$1 = state_26498;
if(cljs.core.truth_(inst_26485)){
var statearr_26505_26528 = state_26498__$1;
(statearr_26505_26528[(1)] = (8));

} else {
var statearr_26506_26529 = state_26498__$1;
(statearr_26506_26529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (3))){
var inst_26496 = (state_26498[(2)]);
var state_26498__$1 = state_26498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26498__$1,inst_26496);
} else {
if((state_val_26499 === (2))){
var state_26498__$1 = state_26498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26498__$1,(4),ch);
} else {
if((state_val_26499 === (11))){
var inst_26488 = (state_26498[(2)]);
var state_26498__$1 = state_26498;
var statearr_26507_26530 = state_26498__$1;
(statearr_26507_26530[(2)] = inst_26488);

(statearr_26507_26530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (9))){
var state_26498__$1 = state_26498;
var statearr_26508_26531 = state_26498__$1;
(statearr_26508_26531[(2)] = null);

(statearr_26508_26531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (5))){
var inst_26483 = cljs.core.async.close_BANG_.call(null,out);
var state_26498__$1 = state_26498;
var statearr_26509_26532 = state_26498__$1;
(statearr_26509_26532[(2)] = inst_26483);

(statearr_26509_26532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (10))){
var inst_26491 = (state_26498[(2)]);
var state_26498__$1 = (function (){var statearr_26510 = state_26498;
(statearr_26510[(8)] = inst_26491);

return statearr_26510;
})();
var statearr_26511_26533 = state_26498__$1;
(statearr_26511_26533[(2)] = null);

(statearr_26511_26533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (8))){
var inst_26480 = (state_26498[(7)]);
var state_26498__$1 = state_26498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26498__$1,(11),out,inst_26480);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___26523,out))
;
return ((function (switch__24161__auto__,c__24273__auto___26523,out){
return (function() {
var cljs$core$async$state_machine__24162__auto__ = null;
var cljs$core$async$state_machine__24162__auto____0 = (function (){
var statearr_26515 = [null,null,null,null,null,null,null,null,null];
(statearr_26515[(0)] = cljs$core$async$state_machine__24162__auto__);

(statearr_26515[(1)] = (1));

return statearr_26515;
});
var cljs$core$async$state_machine__24162__auto____1 = (function (state_26498){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_26498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e26516){if((e26516 instanceof Object)){
var ex__24165__auto__ = e26516;
var statearr_26517_26534 = state_26498;
(statearr_26517_26534[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26535 = state_26498;
state_26498 = G__26535;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$state_machine__24162__auto__ = function(state_26498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24162__auto____1.call(this,state_26498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24162__auto____0;
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24162__auto____1;
return cljs$core$async$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___26523,out))
})();
var state__24275__auto__ = (function (){var statearr_26518 = f__24274__auto__.call(null);
(statearr_26518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___26523);

return statearr_26518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___26523,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26536 = [];
var len__17810__auto___26539 = arguments.length;
var i__17811__auto___26540 = (0);
while(true){
if((i__17811__auto___26540 < len__17810__auto___26539)){
args26536.push((arguments[i__17811__auto___26540]));

var G__26541 = (i__17811__auto___26540 + (1));
i__17811__auto___26540 = G__26541;
continue;
} else {
}
break;
}

var G__26538 = args26536.length;
switch (G__26538) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26536.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto__){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto__){
return (function (state_26708){
var state_val_26709 = (state_26708[(1)]);
if((state_val_26709 === (7))){
var inst_26704 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26710_26751 = state_26708__$1;
(statearr_26710_26751[(2)] = inst_26704);

(statearr_26710_26751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (20))){
var inst_26674 = (state_26708[(7)]);
var inst_26685 = (state_26708[(2)]);
var inst_26686 = cljs.core.next.call(null,inst_26674);
var inst_26660 = inst_26686;
var inst_26661 = null;
var inst_26662 = (0);
var inst_26663 = (0);
var state_26708__$1 = (function (){var statearr_26711 = state_26708;
(statearr_26711[(8)] = inst_26660);

(statearr_26711[(9)] = inst_26661);

(statearr_26711[(10)] = inst_26685);

(statearr_26711[(11)] = inst_26663);

(statearr_26711[(12)] = inst_26662);

return statearr_26711;
})();
var statearr_26712_26752 = state_26708__$1;
(statearr_26712_26752[(2)] = null);

(statearr_26712_26752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (1))){
var state_26708__$1 = state_26708;
var statearr_26713_26753 = state_26708__$1;
(statearr_26713_26753[(2)] = null);

(statearr_26713_26753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (4))){
var inst_26649 = (state_26708[(13)]);
var inst_26649__$1 = (state_26708[(2)]);
var inst_26650 = (inst_26649__$1 == null);
var state_26708__$1 = (function (){var statearr_26714 = state_26708;
(statearr_26714[(13)] = inst_26649__$1);

return statearr_26714;
})();
if(cljs.core.truth_(inst_26650)){
var statearr_26715_26754 = state_26708__$1;
(statearr_26715_26754[(1)] = (5));

} else {
var statearr_26716_26755 = state_26708__$1;
(statearr_26716_26755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (15))){
var state_26708__$1 = state_26708;
var statearr_26720_26756 = state_26708__$1;
(statearr_26720_26756[(2)] = null);

(statearr_26720_26756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (21))){
var state_26708__$1 = state_26708;
var statearr_26721_26757 = state_26708__$1;
(statearr_26721_26757[(2)] = null);

(statearr_26721_26757[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (13))){
var inst_26660 = (state_26708[(8)]);
var inst_26661 = (state_26708[(9)]);
var inst_26663 = (state_26708[(11)]);
var inst_26662 = (state_26708[(12)]);
var inst_26670 = (state_26708[(2)]);
var inst_26671 = (inst_26663 + (1));
var tmp26717 = inst_26660;
var tmp26718 = inst_26661;
var tmp26719 = inst_26662;
var inst_26660__$1 = tmp26717;
var inst_26661__$1 = tmp26718;
var inst_26662__$1 = tmp26719;
var inst_26663__$1 = inst_26671;
var state_26708__$1 = (function (){var statearr_26722 = state_26708;
(statearr_26722[(8)] = inst_26660__$1);

(statearr_26722[(9)] = inst_26661__$1);

(statearr_26722[(14)] = inst_26670);

(statearr_26722[(11)] = inst_26663__$1);

(statearr_26722[(12)] = inst_26662__$1);

return statearr_26722;
})();
var statearr_26723_26758 = state_26708__$1;
(statearr_26723_26758[(2)] = null);

(statearr_26723_26758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (22))){
var state_26708__$1 = state_26708;
var statearr_26724_26759 = state_26708__$1;
(statearr_26724_26759[(2)] = null);

(statearr_26724_26759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (6))){
var inst_26649 = (state_26708[(13)]);
var inst_26658 = f.call(null,inst_26649);
var inst_26659 = cljs.core.seq.call(null,inst_26658);
var inst_26660 = inst_26659;
var inst_26661 = null;
var inst_26662 = (0);
var inst_26663 = (0);
var state_26708__$1 = (function (){var statearr_26725 = state_26708;
(statearr_26725[(8)] = inst_26660);

(statearr_26725[(9)] = inst_26661);

(statearr_26725[(11)] = inst_26663);

(statearr_26725[(12)] = inst_26662);

return statearr_26725;
})();
var statearr_26726_26760 = state_26708__$1;
(statearr_26726_26760[(2)] = null);

(statearr_26726_26760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (17))){
var inst_26674 = (state_26708[(7)]);
var inst_26678 = cljs.core.chunk_first.call(null,inst_26674);
var inst_26679 = cljs.core.chunk_rest.call(null,inst_26674);
var inst_26680 = cljs.core.count.call(null,inst_26678);
var inst_26660 = inst_26679;
var inst_26661 = inst_26678;
var inst_26662 = inst_26680;
var inst_26663 = (0);
var state_26708__$1 = (function (){var statearr_26727 = state_26708;
(statearr_26727[(8)] = inst_26660);

(statearr_26727[(9)] = inst_26661);

(statearr_26727[(11)] = inst_26663);

(statearr_26727[(12)] = inst_26662);

return statearr_26727;
})();
var statearr_26728_26761 = state_26708__$1;
(statearr_26728_26761[(2)] = null);

(statearr_26728_26761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (3))){
var inst_26706 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26708__$1,inst_26706);
} else {
if((state_val_26709 === (12))){
var inst_26694 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26729_26762 = state_26708__$1;
(statearr_26729_26762[(2)] = inst_26694);

(statearr_26729_26762[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (2))){
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26708__$1,(4),in$);
} else {
if((state_val_26709 === (23))){
var inst_26702 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26730_26763 = state_26708__$1;
(statearr_26730_26763[(2)] = inst_26702);

(statearr_26730_26763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (19))){
var inst_26689 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26731_26764 = state_26708__$1;
(statearr_26731_26764[(2)] = inst_26689);

(statearr_26731_26764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (11))){
var inst_26660 = (state_26708[(8)]);
var inst_26674 = (state_26708[(7)]);
var inst_26674__$1 = cljs.core.seq.call(null,inst_26660);
var state_26708__$1 = (function (){var statearr_26732 = state_26708;
(statearr_26732[(7)] = inst_26674__$1);

return statearr_26732;
})();
if(inst_26674__$1){
var statearr_26733_26765 = state_26708__$1;
(statearr_26733_26765[(1)] = (14));

} else {
var statearr_26734_26766 = state_26708__$1;
(statearr_26734_26766[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (9))){
var inst_26696 = (state_26708[(2)]);
var inst_26697 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26708__$1 = (function (){var statearr_26735 = state_26708;
(statearr_26735[(15)] = inst_26696);

return statearr_26735;
})();
if(cljs.core.truth_(inst_26697)){
var statearr_26736_26767 = state_26708__$1;
(statearr_26736_26767[(1)] = (21));

} else {
var statearr_26737_26768 = state_26708__$1;
(statearr_26737_26768[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (5))){
var inst_26652 = cljs.core.async.close_BANG_.call(null,out);
var state_26708__$1 = state_26708;
var statearr_26738_26769 = state_26708__$1;
(statearr_26738_26769[(2)] = inst_26652);

(statearr_26738_26769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (14))){
var inst_26674 = (state_26708[(7)]);
var inst_26676 = cljs.core.chunked_seq_QMARK_.call(null,inst_26674);
var state_26708__$1 = state_26708;
if(inst_26676){
var statearr_26739_26770 = state_26708__$1;
(statearr_26739_26770[(1)] = (17));

} else {
var statearr_26740_26771 = state_26708__$1;
(statearr_26740_26771[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (16))){
var inst_26692 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26741_26772 = state_26708__$1;
(statearr_26741_26772[(2)] = inst_26692);

(statearr_26741_26772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (10))){
var inst_26661 = (state_26708[(9)]);
var inst_26663 = (state_26708[(11)]);
var inst_26668 = cljs.core._nth.call(null,inst_26661,inst_26663);
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26708__$1,(13),out,inst_26668);
} else {
if((state_val_26709 === (18))){
var inst_26674 = (state_26708[(7)]);
var inst_26683 = cljs.core.first.call(null,inst_26674);
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26708__$1,(20),out,inst_26683);
} else {
if((state_val_26709 === (8))){
var inst_26663 = (state_26708[(11)]);
var inst_26662 = (state_26708[(12)]);
var inst_26665 = (inst_26663 < inst_26662);
var inst_26666 = inst_26665;
var state_26708__$1 = state_26708;
if(cljs.core.truth_(inst_26666)){
var statearr_26742_26773 = state_26708__$1;
(statearr_26742_26773[(1)] = (10));

} else {
var statearr_26743_26774 = state_26708__$1;
(statearr_26743_26774[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto__))
;
return ((function (switch__24161__auto__,c__24273__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24162__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24162__auto____0 = (function (){
var statearr_26747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26747[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24162__auto__);

(statearr_26747[(1)] = (1));

return statearr_26747;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24162__auto____1 = (function (state_26708){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_26708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e26748){if((e26748 instanceof Object)){
var ex__24165__auto__ = e26748;
var statearr_26749_26775 = state_26708;
(statearr_26749_26775[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26776 = state_26708;
state_26708 = G__26776;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24162__auto__ = function(state_26708){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24162__auto____1.call(this,state_26708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24162__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24162__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto__))
})();
var state__24275__auto__ = (function (){var statearr_26750 = f__24274__auto__.call(null);
(statearr_26750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto__);

return statearr_26750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto__))
);

return c__24273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26777 = [];
var len__17810__auto___26780 = arguments.length;
var i__17811__auto___26781 = (0);
while(true){
if((i__17811__auto___26781 < len__17810__auto___26780)){
args26777.push((arguments[i__17811__auto___26781]));

var G__26782 = (i__17811__auto___26781 + (1));
i__17811__auto___26781 = G__26782;
continue;
} else {
}
break;
}

var G__26779 = args26777.length;
switch (G__26779) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26777.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26784 = [];
var len__17810__auto___26787 = arguments.length;
var i__17811__auto___26788 = (0);
while(true){
if((i__17811__auto___26788 < len__17810__auto___26787)){
args26784.push((arguments[i__17811__auto___26788]));

var G__26789 = (i__17811__auto___26788 + (1));
i__17811__auto___26788 = G__26789;
continue;
} else {
}
break;
}

var G__26786 = args26784.length;
switch (G__26786) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26784.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26791 = [];
var len__17810__auto___26842 = arguments.length;
var i__17811__auto___26843 = (0);
while(true){
if((i__17811__auto___26843 < len__17810__auto___26842)){
args26791.push((arguments[i__17811__auto___26843]));

var G__26844 = (i__17811__auto___26843 + (1));
i__17811__auto___26843 = G__26844;
continue;
} else {
}
break;
}

var G__26793 = args26791.length;
switch (G__26793) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26791.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24273__auto___26846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___26846,out){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___26846,out){
return (function (state_26817){
var state_val_26818 = (state_26817[(1)]);
if((state_val_26818 === (7))){
var inst_26812 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26819_26847 = state_26817__$1;
(statearr_26819_26847[(2)] = inst_26812);

(statearr_26819_26847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (1))){
var inst_26794 = null;
var state_26817__$1 = (function (){var statearr_26820 = state_26817;
(statearr_26820[(7)] = inst_26794);

return statearr_26820;
})();
var statearr_26821_26848 = state_26817__$1;
(statearr_26821_26848[(2)] = null);

(statearr_26821_26848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (4))){
var inst_26797 = (state_26817[(8)]);
var inst_26797__$1 = (state_26817[(2)]);
var inst_26798 = (inst_26797__$1 == null);
var inst_26799 = cljs.core.not.call(null,inst_26798);
var state_26817__$1 = (function (){var statearr_26822 = state_26817;
(statearr_26822[(8)] = inst_26797__$1);

return statearr_26822;
})();
if(inst_26799){
var statearr_26823_26849 = state_26817__$1;
(statearr_26823_26849[(1)] = (5));

} else {
var statearr_26824_26850 = state_26817__$1;
(statearr_26824_26850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (6))){
var state_26817__$1 = state_26817;
var statearr_26825_26851 = state_26817__$1;
(statearr_26825_26851[(2)] = null);

(statearr_26825_26851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (3))){
var inst_26814 = (state_26817[(2)]);
var inst_26815 = cljs.core.async.close_BANG_.call(null,out);
var state_26817__$1 = (function (){var statearr_26826 = state_26817;
(statearr_26826[(9)] = inst_26814);

return statearr_26826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26817__$1,inst_26815);
} else {
if((state_val_26818 === (2))){
var state_26817__$1 = state_26817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26817__$1,(4),ch);
} else {
if((state_val_26818 === (11))){
var inst_26797 = (state_26817[(8)]);
var inst_26806 = (state_26817[(2)]);
var inst_26794 = inst_26797;
var state_26817__$1 = (function (){var statearr_26827 = state_26817;
(statearr_26827[(10)] = inst_26806);

(statearr_26827[(7)] = inst_26794);

return statearr_26827;
})();
var statearr_26828_26852 = state_26817__$1;
(statearr_26828_26852[(2)] = null);

(statearr_26828_26852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (9))){
var inst_26797 = (state_26817[(8)]);
var state_26817__$1 = state_26817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26817__$1,(11),out,inst_26797);
} else {
if((state_val_26818 === (5))){
var inst_26797 = (state_26817[(8)]);
var inst_26794 = (state_26817[(7)]);
var inst_26801 = cljs.core._EQ_.call(null,inst_26797,inst_26794);
var state_26817__$1 = state_26817;
if(inst_26801){
var statearr_26830_26853 = state_26817__$1;
(statearr_26830_26853[(1)] = (8));

} else {
var statearr_26831_26854 = state_26817__$1;
(statearr_26831_26854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (10))){
var inst_26809 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26832_26855 = state_26817__$1;
(statearr_26832_26855[(2)] = inst_26809);

(statearr_26832_26855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (8))){
var inst_26794 = (state_26817[(7)]);
var tmp26829 = inst_26794;
var inst_26794__$1 = tmp26829;
var state_26817__$1 = (function (){var statearr_26833 = state_26817;
(statearr_26833[(7)] = inst_26794__$1);

return statearr_26833;
})();
var statearr_26834_26856 = state_26817__$1;
(statearr_26834_26856[(2)] = null);

(statearr_26834_26856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___26846,out))
;
return ((function (switch__24161__auto__,c__24273__auto___26846,out){
return (function() {
var cljs$core$async$state_machine__24162__auto__ = null;
var cljs$core$async$state_machine__24162__auto____0 = (function (){
var statearr_26838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26838[(0)] = cljs$core$async$state_machine__24162__auto__);

(statearr_26838[(1)] = (1));

return statearr_26838;
});
var cljs$core$async$state_machine__24162__auto____1 = (function (state_26817){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_26817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e26839){if((e26839 instanceof Object)){
var ex__24165__auto__ = e26839;
var statearr_26840_26857 = state_26817;
(statearr_26840_26857[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26858 = state_26817;
state_26817 = G__26858;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$state_machine__24162__auto__ = function(state_26817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24162__auto____1.call(this,state_26817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24162__auto____0;
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24162__auto____1;
return cljs$core$async$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___26846,out))
})();
var state__24275__auto__ = (function (){var statearr_26841 = f__24274__auto__.call(null);
(statearr_26841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___26846);

return statearr_26841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___26846,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26859 = [];
var len__17810__auto___26929 = arguments.length;
var i__17811__auto___26930 = (0);
while(true){
if((i__17811__auto___26930 < len__17810__auto___26929)){
args26859.push((arguments[i__17811__auto___26930]));

var G__26931 = (i__17811__auto___26930 + (1));
i__17811__auto___26930 = G__26931;
continue;
} else {
}
break;
}

var G__26861 = args26859.length;
switch (G__26861) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26859.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24273__auto___26933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___26933,out){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___26933,out){
return (function (state_26899){
var state_val_26900 = (state_26899[(1)]);
if((state_val_26900 === (7))){
var inst_26895 = (state_26899[(2)]);
var state_26899__$1 = state_26899;
var statearr_26901_26934 = state_26899__$1;
(statearr_26901_26934[(2)] = inst_26895);

(statearr_26901_26934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (1))){
var inst_26862 = (new Array(n));
var inst_26863 = inst_26862;
var inst_26864 = (0);
var state_26899__$1 = (function (){var statearr_26902 = state_26899;
(statearr_26902[(7)] = inst_26863);

(statearr_26902[(8)] = inst_26864);

return statearr_26902;
})();
var statearr_26903_26935 = state_26899__$1;
(statearr_26903_26935[(2)] = null);

(statearr_26903_26935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (4))){
var inst_26867 = (state_26899[(9)]);
var inst_26867__$1 = (state_26899[(2)]);
var inst_26868 = (inst_26867__$1 == null);
var inst_26869 = cljs.core.not.call(null,inst_26868);
var state_26899__$1 = (function (){var statearr_26904 = state_26899;
(statearr_26904[(9)] = inst_26867__$1);

return statearr_26904;
})();
if(inst_26869){
var statearr_26905_26936 = state_26899__$1;
(statearr_26905_26936[(1)] = (5));

} else {
var statearr_26906_26937 = state_26899__$1;
(statearr_26906_26937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (15))){
var inst_26889 = (state_26899[(2)]);
var state_26899__$1 = state_26899;
var statearr_26907_26938 = state_26899__$1;
(statearr_26907_26938[(2)] = inst_26889);

(statearr_26907_26938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (13))){
var state_26899__$1 = state_26899;
var statearr_26908_26939 = state_26899__$1;
(statearr_26908_26939[(2)] = null);

(statearr_26908_26939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (6))){
var inst_26864 = (state_26899[(8)]);
var inst_26885 = (inst_26864 > (0));
var state_26899__$1 = state_26899;
if(cljs.core.truth_(inst_26885)){
var statearr_26909_26940 = state_26899__$1;
(statearr_26909_26940[(1)] = (12));

} else {
var statearr_26910_26941 = state_26899__$1;
(statearr_26910_26941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (3))){
var inst_26897 = (state_26899[(2)]);
var state_26899__$1 = state_26899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26899__$1,inst_26897);
} else {
if((state_val_26900 === (12))){
var inst_26863 = (state_26899[(7)]);
var inst_26887 = cljs.core.vec.call(null,inst_26863);
var state_26899__$1 = state_26899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26899__$1,(15),out,inst_26887);
} else {
if((state_val_26900 === (2))){
var state_26899__$1 = state_26899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26899__$1,(4),ch);
} else {
if((state_val_26900 === (11))){
var inst_26879 = (state_26899[(2)]);
var inst_26880 = (new Array(n));
var inst_26863 = inst_26880;
var inst_26864 = (0);
var state_26899__$1 = (function (){var statearr_26911 = state_26899;
(statearr_26911[(7)] = inst_26863);

(statearr_26911[(10)] = inst_26879);

(statearr_26911[(8)] = inst_26864);

return statearr_26911;
})();
var statearr_26912_26942 = state_26899__$1;
(statearr_26912_26942[(2)] = null);

(statearr_26912_26942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (9))){
var inst_26863 = (state_26899[(7)]);
var inst_26877 = cljs.core.vec.call(null,inst_26863);
var state_26899__$1 = state_26899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26899__$1,(11),out,inst_26877);
} else {
if((state_val_26900 === (5))){
var inst_26863 = (state_26899[(7)]);
var inst_26872 = (state_26899[(11)]);
var inst_26867 = (state_26899[(9)]);
var inst_26864 = (state_26899[(8)]);
var inst_26871 = (inst_26863[inst_26864] = inst_26867);
var inst_26872__$1 = (inst_26864 + (1));
var inst_26873 = (inst_26872__$1 < n);
var state_26899__$1 = (function (){var statearr_26913 = state_26899;
(statearr_26913[(11)] = inst_26872__$1);

(statearr_26913[(12)] = inst_26871);

return statearr_26913;
})();
if(cljs.core.truth_(inst_26873)){
var statearr_26914_26943 = state_26899__$1;
(statearr_26914_26943[(1)] = (8));

} else {
var statearr_26915_26944 = state_26899__$1;
(statearr_26915_26944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (14))){
var inst_26892 = (state_26899[(2)]);
var inst_26893 = cljs.core.async.close_BANG_.call(null,out);
var state_26899__$1 = (function (){var statearr_26917 = state_26899;
(statearr_26917[(13)] = inst_26892);

return statearr_26917;
})();
var statearr_26918_26945 = state_26899__$1;
(statearr_26918_26945[(2)] = inst_26893);

(statearr_26918_26945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (10))){
var inst_26883 = (state_26899[(2)]);
var state_26899__$1 = state_26899;
var statearr_26919_26946 = state_26899__$1;
(statearr_26919_26946[(2)] = inst_26883);

(statearr_26919_26946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (8))){
var inst_26863 = (state_26899[(7)]);
var inst_26872 = (state_26899[(11)]);
var tmp26916 = inst_26863;
var inst_26863__$1 = tmp26916;
var inst_26864 = inst_26872;
var state_26899__$1 = (function (){var statearr_26920 = state_26899;
(statearr_26920[(7)] = inst_26863__$1);

(statearr_26920[(8)] = inst_26864);

return statearr_26920;
})();
var statearr_26921_26947 = state_26899__$1;
(statearr_26921_26947[(2)] = null);

(statearr_26921_26947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___26933,out))
;
return ((function (switch__24161__auto__,c__24273__auto___26933,out){
return (function() {
var cljs$core$async$state_machine__24162__auto__ = null;
var cljs$core$async$state_machine__24162__auto____0 = (function (){
var statearr_26925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26925[(0)] = cljs$core$async$state_machine__24162__auto__);

(statearr_26925[(1)] = (1));

return statearr_26925;
});
var cljs$core$async$state_machine__24162__auto____1 = (function (state_26899){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_26899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e26926){if((e26926 instanceof Object)){
var ex__24165__auto__ = e26926;
var statearr_26927_26948 = state_26899;
(statearr_26927_26948[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26949 = state_26899;
state_26899 = G__26949;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$state_machine__24162__auto__ = function(state_26899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24162__auto____1.call(this,state_26899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24162__auto____0;
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24162__auto____1;
return cljs$core$async$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___26933,out))
})();
var state__24275__auto__ = (function (){var statearr_26928 = f__24274__auto__.call(null);
(statearr_26928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___26933);

return statearr_26928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___26933,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26950 = [];
var len__17810__auto___27024 = arguments.length;
var i__17811__auto___27025 = (0);
while(true){
if((i__17811__auto___27025 < len__17810__auto___27024)){
args26950.push((arguments[i__17811__auto___27025]));

var G__27026 = (i__17811__auto___27025 + (1));
i__17811__auto___27025 = G__27026;
continue;
} else {
}
break;
}

var G__26952 = args26950.length;
switch (G__26952) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26950.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24273__auto___27028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24273__auto___27028,out){
return (function (){
var f__24274__auto__ = (function (){var switch__24161__auto__ = ((function (c__24273__auto___27028,out){
return (function (state_26994){
var state_val_26995 = (state_26994[(1)]);
if((state_val_26995 === (7))){
var inst_26990 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
var statearr_26996_27029 = state_26994__$1;
(statearr_26996_27029[(2)] = inst_26990);

(statearr_26996_27029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (1))){
var inst_26953 = [];
var inst_26954 = inst_26953;
var inst_26955 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26994__$1 = (function (){var statearr_26997 = state_26994;
(statearr_26997[(7)] = inst_26954);

(statearr_26997[(8)] = inst_26955);

return statearr_26997;
})();
var statearr_26998_27030 = state_26994__$1;
(statearr_26998_27030[(2)] = null);

(statearr_26998_27030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (4))){
var inst_26958 = (state_26994[(9)]);
var inst_26958__$1 = (state_26994[(2)]);
var inst_26959 = (inst_26958__$1 == null);
var inst_26960 = cljs.core.not.call(null,inst_26959);
var state_26994__$1 = (function (){var statearr_26999 = state_26994;
(statearr_26999[(9)] = inst_26958__$1);

return statearr_26999;
})();
if(inst_26960){
var statearr_27000_27031 = state_26994__$1;
(statearr_27000_27031[(1)] = (5));

} else {
var statearr_27001_27032 = state_26994__$1;
(statearr_27001_27032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (15))){
var inst_26984 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
var statearr_27002_27033 = state_26994__$1;
(statearr_27002_27033[(2)] = inst_26984);

(statearr_27002_27033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (13))){
var state_26994__$1 = state_26994;
var statearr_27003_27034 = state_26994__$1;
(statearr_27003_27034[(2)] = null);

(statearr_27003_27034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (6))){
var inst_26954 = (state_26994[(7)]);
var inst_26979 = inst_26954.length;
var inst_26980 = (inst_26979 > (0));
var state_26994__$1 = state_26994;
if(cljs.core.truth_(inst_26980)){
var statearr_27004_27035 = state_26994__$1;
(statearr_27004_27035[(1)] = (12));

} else {
var statearr_27005_27036 = state_26994__$1;
(statearr_27005_27036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (3))){
var inst_26992 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26994__$1,inst_26992);
} else {
if((state_val_26995 === (12))){
var inst_26954 = (state_26994[(7)]);
var inst_26982 = cljs.core.vec.call(null,inst_26954);
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26994__$1,(15),out,inst_26982);
} else {
if((state_val_26995 === (2))){
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26994__$1,(4),ch);
} else {
if((state_val_26995 === (11))){
var inst_26958 = (state_26994[(9)]);
var inst_26962 = (state_26994[(10)]);
var inst_26972 = (state_26994[(2)]);
var inst_26973 = [];
var inst_26974 = inst_26973.push(inst_26958);
var inst_26954 = inst_26973;
var inst_26955 = inst_26962;
var state_26994__$1 = (function (){var statearr_27006 = state_26994;
(statearr_27006[(11)] = inst_26974);

(statearr_27006[(7)] = inst_26954);

(statearr_27006[(8)] = inst_26955);

(statearr_27006[(12)] = inst_26972);

return statearr_27006;
})();
var statearr_27007_27037 = state_26994__$1;
(statearr_27007_27037[(2)] = null);

(statearr_27007_27037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (9))){
var inst_26954 = (state_26994[(7)]);
var inst_26970 = cljs.core.vec.call(null,inst_26954);
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26994__$1,(11),out,inst_26970);
} else {
if((state_val_26995 === (5))){
var inst_26958 = (state_26994[(9)]);
var inst_26962 = (state_26994[(10)]);
var inst_26955 = (state_26994[(8)]);
var inst_26962__$1 = f.call(null,inst_26958);
var inst_26963 = cljs.core._EQ_.call(null,inst_26962__$1,inst_26955);
var inst_26964 = cljs.core.keyword_identical_QMARK_.call(null,inst_26955,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26965 = (inst_26963) || (inst_26964);
var state_26994__$1 = (function (){var statearr_27008 = state_26994;
(statearr_27008[(10)] = inst_26962__$1);

return statearr_27008;
})();
if(cljs.core.truth_(inst_26965)){
var statearr_27009_27038 = state_26994__$1;
(statearr_27009_27038[(1)] = (8));

} else {
var statearr_27010_27039 = state_26994__$1;
(statearr_27010_27039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (14))){
var inst_26987 = (state_26994[(2)]);
var inst_26988 = cljs.core.async.close_BANG_.call(null,out);
var state_26994__$1 = (function (){var statearr_27012 = state_26994;
(statearr_27012[(13)] = inst_26987);

return statearr_27012;
})();
var statearr_27013_27040 = state_26994__$1;
(statearr_27013_27040[(2)] = inst_26988);

(statearr_27013_27040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (10))){
var inst_26977 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
var statearr_27014_27041 = state_26994__$1;
(statearr_27014_27041[(2)] = inst_26977);

(statearr_27014_27041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (8))){
var inst_26958 = (state_26994[(9)]);
var inst_26954 = (state_26994[(7)]);
var inst_26962 = (state_26994[(10)]);
var inst_26967 = inst_26954.push(inst_26958);
var tmp27011 = inst_26954;
var inst_26954__$1 = tmp27011;
var inst_26955 = inst_26962;
var state_26994__$1 = (function (){var statearr_27015 = state_26994;
(statearr_27015[(7)] = inst_26954__$1);

(statearr_27015[(14)] = inst_26967);

(statearr_27015[(8)] = inst_26955);

return statearr_27015;
})();
var statearr_27016_27042 = state_26994__$1;
(statearr_27016_27042[(2)] = null);

(statearr_27016_27042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24273__auto___27028,out))
;
return ((function (switch__24161__auto__,c__24273__auto___27028,out){
return (function() {
var cljs$core$async$state_machine__24162__auto__ = null;
var cljs$core$async$state_machine__24162__auto____0 = (function (){
var statearr_27020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27020[(0)] = cljs$core$async$state_machine__24162__auto__);

(statearr_27020[(1)] = (1));

return statearr_27020;
});
var cljs$core$async$state_machine__24162__auto____1 = (function (state_26994){
while(true){
var ret_value__24163__auto__ = (function (){try{while(true){
var result__24164__auto__ = switch__24161__auto__.call(null,state_26994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24164__auto__;
}
break;
}
}catch (e27021){if((e27021 instanceof Object)){
var ex__24165__auto__ = e27021;
var statearr_27022_27043 = state_26994;
(statearr_27022_27043[(5)] = ex__24165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27044 = state_26994;
state_26994 = G__27044;
continue;
} else {
return ret_value__24163__auto__;
}
break;
}
});
cljs$core$async$state_machine__24162__auto__ = function(state_26994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24162__auto____1.call(this,state_26994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24162__auto____0;
cljs$core$async$state_machine__24162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24162__auto____1;
return cljs$core$async$state_machine__24162__auto__;
})()
;})(switch__24161__auto__,c__24273__auto___27028,out))
})();
var state__24275__auto__ = (function (){var statearr_27023 = f__24274__auto__.call(null);
(statearr_27023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24273__auto___27028);

return statearr_27023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24275__auto__);
});})(c__24273__auto___27028,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1449079001604