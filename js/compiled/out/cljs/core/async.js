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
var args24337 = [];
var len__17809__auto___24343 = arguments.length;
var i__17810__auto___24344 = (0);
while(true){
if((i__17810__auto___24344 < len__17809__auto___24343)){
args24337.push((arguments[i__17810__auto___24344]));

var G__24345 = (i__17810__auto___24344 + (1));
i__17810__auto___24344 = G__24345;
continue;
} else {
}
break;
}

var G__24339 = args24337.length;
switch (G__24339) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24337.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24340 = (function (f,blockable,meta24341){
this.f = f;
this.blockable = blockable;
this.meta24341 = meta24341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24342,meta24341__$1){
var self__ = this;
var _24342__$1 = this;
return (new cljs.core.async.t_cljs$core$async24340(self__.f,self__.blockable,meta24341__$1));
});

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24342){
var self__ = this;
var _24342__$1 = this;
return self__.meta24341;
});

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24341","meta24341",-1052095405,null)], null);
});

cljs.core.async.t_cljs$core$async24340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24340";

cljs.core.async.t_cljs$core$async24340.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24340");
});

cljs.core.async.__GT_t_cljs$core$async24340 = (function cljs$core$async$__GT_t_cljs$core$async24340(f__$1,blockable__$1,meta24341){
return (new cljs.core.async.t_cljs$core$async24340(f__$1,blockable__$1,meta24341));
});

}

return (new cljs.core.async.t_cljs$core$async24340(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24349 = [];
var len__17809__auto___24352 = arguments.length;
var i__17810__auto___24353 = (0);
while(true){
if((i__17810__auto___24353 < len__17809__auto___24352)){
args24349.push((arguments[i__17810__auto___24353]));

var G__24354 = (i__17810__auto___24353 + (1));
i__17810__auto___24353 = G__24354;
continue;
} else {
}
break;
}

var G__24351 = args24349.length;
switch (G__24351) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24349.length)].join('')));

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
var args24356 = [];
var len__17809__auto___24359 = arguments.length;
var i__17810__auto___24360 = (0);
while(true){
if((i__17810__auto___24360 < len__17809__auto___24359)){
args24356.push((arguments[i__17810__auto___24360]));

var G__24361 = (i__17810__auto___24360 + (1));
i__17810__auto___24360 = G__24361;
continue;
} else {
}
break;
}

var G__24358 = args24356.length;
switch (G__24358) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24356.length)].join('')));

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
var args24363 = [];
var len__17809__auto___24366 = arguments.length;
var i__17810__auto___24367 = (0);
while(true){
if((i__17810__auto___24367 < len__17809__auto___24366)){
args24363.push((arguments[i__17810__auto___24367]));

var G__24368 = (i__17810__auto___24367 + (1));
i__17810__auto___24367 = G__24368;
continue;
} else {
}
break;
}

var G__24365 = args24363.length;
switch (G__24365) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24363.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24370 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24370);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24370,ret){
return (function (){
return fn1.call(null,val_24370);
});})(val_24370,ret))
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
var args24371 = [];
var len__17809__auto___24374 = arguments.length;
var i__17810__auto___24375 = (0);
while(true){
if((i__17810__auto___24375 < len__17809__auto___24374)){
args24371.push((arguments[i__17810__auto___24375]));

var G__24376 = (i__17810__auto___24375 + (1));
i__17810__auto___24375 = G__24376;
continue;
} else {
}
break;
}

var G__24373 = args24371.length;
switch (G__24373) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24371.length)].join('')));

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
var n__17654__auto___24378 = n;
var x_24379 = (0);
while(true){
if((x_24379 < n__17654__auto___24378)){
(a[x_24379] = (0));

var G__24380 = (x_24379 + (1));
x_24379 = G__24380;
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

var G__24381 = (i + (1));
i = G__24381;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24385 = (function (alt_flag,flag,meta24386){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24386 = meta24386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24387,meta24386__$1){
var self__ = this;
var _24387__$1 = this;
return (new cljs.core.async.t_cljs$core$async24385(self__.alt_flag,self__.flag,meta24386__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24387){
var self__ = this;
var _24387__$1 = this;
return self__.meta24386;
});})(flag))
;

cljs.core.async.t_cljs$core$async24385.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24385.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24385.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24385.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24385.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24386","meta24386",-286632846,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24385";

cljs.core.async.t_cljs$core$async24385.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24385");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24385 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24385(alt_flag__$1,flag__$1,meta24386){
return (new cljs.core.async.t_cljs$core$async24385(alt_flag__$1,flag__$1,meta24386));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24385(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24391 = (function (alt_handler,flag,cb,meta24392){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24392 = meta24392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24393,meta24392__$1){
var self__ = this;
var _24393__$1 = this;
return (new cljs.core.async.t_cljs$core$async24391(self__.alt_handler,self__.flag,self__.cb,meta24392__$1));
});

cljs.core.async.t_cljs$core$async24391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24393){
var self__ = this;
var _24393__$1 = this;
return self__.meta24392;
});

cljs.core.async.t_cljs$core$async24391.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24391.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24392","meta24392",-17546271,null)], null);
});

cljs.core.async.t_cljs$core$async24391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24391";

cljs.core.async.t_cljs$core$async24391.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24391");
});

cljs.core.async.__GT_t_cljs$core$async24391 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24391(alt_handler__$1,flag__$1,cb__$1,meta24392){
return (new cljs.core.async.t_cljs$core$async24391(alt_handler__$1,flag__$1,cb__$1,meta24392));
});

}

return (new cljs.core.async.t_cljs$core$async24391(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24394_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24394_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24395_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24395_SHARP_,port], null));
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
var G__24396 = (i + (1));
i = G__24396;
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
var args__17816__auto__ = [];
var len__17809__auto___24402 = arguments.length;
var i__17810__auto___24403 = (0);
while(true){
if((i__17810__auto___24403 < len__17809__auto___24402)){
args__17816__auto__.push((arguments[i__17810__auto___24403]));

var G__24404 = (i__17810__auto___24403 + (1));
i__17810__auto___24403 = G__24404;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((1) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24399){
var map__24400 = p__24399;
var map__24400__$1 = ((((!((map__24400 == null)))?((((map__24400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24400):map__24400);
var opts = map__24400__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24397){
var G__24398 = cljs.core.first.call(null,seq24397);
var seq24397__$1 = cljs.core.next.call(null,seq24397);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24398,seq24397__$1);
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
var args24405 = [];
var len__17809__auto___24455 = arguments.length;
var i__17810__auto___24456 = (0);
while(true){
if((i__17810__auto___24456 < len__17809__auto___24455)){
args24405.push((arguments[i__17810__auto___24456]));

var G__24457 = (i__17810__auto___24456 + (1));
i__17810__auto___24456 = G__24457;
continue;
} else {
}
break;
}

var G__24407 = args24405.length;
switch (G__24407) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24405.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24292__auto___24459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___24459){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___24459){
return (function (state_24431){
var state_val_24432 = (state_24431[(1)]);
if((state_val_24432 === (7))){
var inst_24427 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
var statearr_24433_24460 = state_24431__$1;
(statearr_24433_24460[(2)] = inst_24427);

(statearr_24433_24460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (1))){
var state_24431__$1 = state_24431;
var statearr_24434_24461 = state_24431__$1;
(statearr_24434_24461[(2)] = null);

(statearr_24434_24461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (4))){
var inst_24410 = (state_24431[(7)]);
var inst_24410__$1 = (state_24431[(2)]);
var inst_24411 = (inst_24410__$1 == null);
var state_24431__$1 = (function (){var statearr_24435 = state_24431;
(statearr_24435[(7)] = inst_24410__$1);

return statearr_24435;
})();
if(cljs.core.truth_(inst_24411)){
var statearr_24436_24462 = state_24431__$1;
(statearr_24436_24462[(1)] = (5));

} else {
var statearr_24437_24463 = state_24431__$1;
(statearr_24437_24463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (13))){
var state_24431__$1 = state_24431;
var statearr_24438_24464 = state_24431__$1;
(statearr_24438_24464[(2)] = null);

(statearr_24438_24464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (6))){
var inst_24410 = (state_24431[(7)]);
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24431__$1,(11),to,inst_24410);
} else {
if((state_val_24432 === (3))){
var inst_24429 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24431__$1,inst_24429);
} else {
if((state_val_24432 === (12))){
var state_24431__$1 = state_24431;
var statearr_24439_24465 = state_24431__$1;
(statearr_24439_24465[(2)] = null);

(statearr_24439_24465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (2))){
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24431__$1,(4),from);
} else {
if((state_val_24432 === (11))){
var inst_24420 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
if(cljs.core.truth_(inst_24420)){
var statearr_24440_24466 = state_24431__$1;
(statearr_24440_24466[(1)] = (12));

} else {
var statearr_24441_24467 = state_24431__$1;
(statearr_24441_24467[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (9))){
var state_24431__$1 = state_24431;
var statearr_24442_24468 = state_24431__$1;
(statearr_24442_24468[(2)] = null);

(statearr_24442_24468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (5))){
var state_24431__$1 = state_24431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24443_24469 = state_24431__$1;
(statearr_24443_24469[(1)] = (8));

} else {
var statearr_24444_24470 = state_24431__$1;
(statearr_24444_24470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (14))){
var inst_24425 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
var statearr_24445_24471 = state_24431__$1;
(statearr_24445_24471[(2)] = inst_24425);

(statearr_24445_24471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (10))){
var inst_24417 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
var statearr_24446_24472 = state_24431__$1;
(statearr_24446_24472[(2)] = inst_24417);

(statearr_24446_24472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (8))){
var inst_24414 = cljs.core.async.close_BANG_.call(null,to);
var state_24431__$1 = state_24431;
var statearr_24447_24473 = state_24431__$1;
(statearr_24447_24473[(2)] = inst_24414);

(statearr_24447_24473[(1)] = (10));


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
});})(c__24292__auto___24459))
;
return ((function (switch__24180__auto__,c__24292__auto___24459){
return (function() {
var cljs$core$async$state_machine__24181__auto__ = null;
var cljs$core$async$state_machine__24181__auto____0 = (function (){
var statearr_24451 = [null,null,null,null,null,null,null,null];
(statearr_24451[(0)] = cljs$core$async$state_machine__24181__auto__);

(statearr_24451[(1)] = (1));

return statearr_24451;
});
var cljs$core$async$state_machine__24181__auto____1 = (function (state_24431){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_24431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e24452){if((e24452 instanceof Object)){
var ex__24184__auto__ = e24452;
var statearr_24453_24474 = state_24431;
(statearr_24453_24474[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24475 = state_24431;
state_24431 = G__24475;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$state_machine__24181__auto__ = function(state_24431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24181__auto____1.call(this,state_24431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24181__auto____0;
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24181__auto____1;
return cljs$core$async$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___24459))
})();
var state__24294__auto__ = (function (){var statearr_24454 = f__24293__auto__.call(null);
(statearr_24454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___24459);

return statearr_24454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___24459))
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
return (function (p__24659){
var vec__24660 = p__24659;
var v = cljs.core.nth.call(null,vec__24660,(0),null);
var p = cljs.core.nth.call(null,vec__24660,(1),null);
var job = vec__24660;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24292__auto___24842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___24842,res,vec__24660,v,p,job,jobs,results){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___24842,res,vec__24660,v,p,job,jobs,results){
return (function (state_24665){
var state_val_24666 = (state_24665[(1)]);
if((state_val_24666 === (1))){
var state_24665__$1 = state_24665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24665__$1,(2),res,v);
} else {
if((state_val_24666 === (2))){
var inst_24662 = (state_24665[(2)]);
var inst_24663 = cljs.core.async.close_BANG_.call(null,res);
var state_24665__$1 = (function (){var statearr_24667 = state_24665;
(statearr_24667[(7)] = inst_24662);

return statearr_24667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24665__$1,inst_24663);
} else {
return null;
}
}
});})(c__24292__auto___24842,res,vec__24660,v,p,job,jobs,results))
;
return ((function (switch__24180__auto__,c__24292__auto___24842,res,vec__24660,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0 = (function (){
var statearr_24671 = [null,null,null,null,null,null,null,null];
(statearr_24671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__);

(statearr_24671[(1)] = (1));

return statearr_24671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1 = (function (state_24665){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_24665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e24672){if((e24672 instanceof Object)){
var ex__24184__auto__ = e24672;
var statearr_24673_24843 = state_24665;
(statearr_24673_24843[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24844 = state_24665;
state_24665 = G__24844;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__ = function(state_24665){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1.call(this,state_24665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___24842,res,vec__24660,v,p,job,jobs,results))
})();
var state__24294__auto__ = (function (){var statearr_24674 = f__24293__auto__.call(null);
(statearr_24674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___24842);

return statearr_24674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___24842,res,vec__24660,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24675){
var vec__24676 = p__24675;
var v = cljs.core.nth.call(null,vec__24676,(0),null);
var p = cljs.core.nth.call(null,vec__24676,(1),null);
var job = vec__24676;
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
var n__17654__auto___24845 = n;
var __24846 = (0);
while(true){
if((__24846 < n__17654__auto___24845)){
var G__24677_24847 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24677_24847) {
case "compute":
var c__24292__auto___24849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24846,c__24292__auto___24849,G__24677_24847,n__17654__auto___24845,jobs,results,process,async){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (__24846,c__24292__auto___24849,G__24677_24847,n__17654__auto___24845,jobs,results,process,async){
return (function (state_24690){
var state_val_24691 = (state_24690[(1)]);
if((state_val_24691 === (1))){
var state_24690__$1 = state_24690;
var statearr_24692_24850 = state_24690__$1;
(statearr_24692_24850[(2)] = null);

(statearr_24692_24850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (2))){
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24690__$1,(4),jobs);
} else {
if((state_val_24691 === (3))){
var inst_24688 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24690__$1,inst_24688);
} else {
if((state_val_24691 === (4))){
var inst_24680 = (state_24690[(2)]);
var inst_24681 = process.call(null,inst_24680);
var state_24690__$1 = state_24690;
if(cljs.core.truth_(inst_24681)){
var statearr_24693_24851 = state_24690__$1;
(statearr_24693_24851[(1)] = (5));

} else {
var statearr_24694_24852 = state_24690__$1;
(statearr_24694_24852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (5))){
var state_24690__$1 = state_24690;
var statearr_24695_24853 = state_24690__$1;
(statearr_24695_24853[(2)] = null);

(statearr_24695_24853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (6))){
var state_24690__$1 = state_24690;
var statearr_24696_24854 = state_24690__$1;
(statearr_24696_24854[(2)] = null);

(statearr_24696_24854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24691 === (7))){
var inst_24686 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24697_24855 = state_24690__$1;
(statearr_24697_24855[(2)] = inst_24686);

(statearr_24697_24855[(1)] = (3));


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
});})(__24846,c__24292__auto___24849,G__24677_24847,n__17654__auto___24845,jobs,results,process,async))
;
return ((function (__24846,switch__24180__auto__,c__24292__auto___24849,G__24677_24847,n__17654__auto___24845,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0 = (function (){
var statearr_24701 = [null,null,null,null,null,null,null];
(statearr_24701[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__);

(statearr_24701[(1)] = (1));

return statearr_24701;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1 = (function (state_24690){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_24690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e24702){if((e24702 instanceof Object)){
var ex__24184__auto__ = e24702;
var statearr_24703_24856 = state_24690;
(statearr_24703_24856[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24857 = state_24690;
state_24690 = G__24857;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__ = function(state_24690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1.call(this,state_24690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__;
})()
;})(__24846,switch__24180__auto__,c__24292__auto___24849,G__24677_24847,n__17654__auto___24845,jobs,results,process,async))
})();
var state__24294__auto__ = (function (){var statearr_24704 = f__24293__auto__.call(null);
(statearr_24704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___24849);

return statearr_24704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(__24846,c__24292__auto___24849,G__24677_24847,n__17654__auto___24845,jobs,results,process,async))
);


break;
case "async":
var c__24292__auto___24858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24846,c__24292__auto___24858,G__24677_24847,n__17654__auto___24845,jobs,results,process,async){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (__24846,c__24292__auto___24858,G__24677_24847,n__17654__auto___24845,jobs,results,process,async){
return (function (state_24717){
var state_val_24718 = (state_24717[(1)]);
if((state_val_24718 === (1))){
var state_24717__$1 = state_24717;
var statearr_24719_24859 = state_24717__$1;
(statearr_24719_24859[(2)] = null);

(statearr_24719_24859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (2))){
var state_24717__$1 = state_24717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24717__$1,(4),jobs);
} else {
if((state_val_24718 === (3))){
var inst_24715 = (state_24717[(2)]);
var state_24717__$1 = state_24717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24717__$1,inst_24715);
} else {
if((state_val_24718 === (4))){
var inst_24707 = (state_24717[(2)]);
var inst_24708 = async.call(null,inst_24707);
var state_24717__$1 = state_24717;
if(cljs.core.truth_(inst_24708)){
var statearr_24720_24860 = state_24717__$1;
(statearr_24720_24860[(1)] = (5));

} else {
var statearr_24721_24861 = state_24717__$1;
(statearr_24721_24861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (5))){
var state_24717__$1 = state_24717;
var statearr_24722_24862 = state_24717__$1;
(statearr_24722_24862[(2)] = null);

(statearr_24722_24862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (6))){
var state_24717__$1 = state_24717;
var statearr_24723_24863 = state_24717__$1;
(statearr_24723_24863[(2)] = null);

(statearr_24723_24863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (7))){
var inst_24713 = (state_24717[(2)]);
var state_24717__$1 = state_24717;
var statearr_24724_24864 = state_24717__$1;
(statearr_24724_24864[(2)] = inst_24713);

(statearr_24724_24864[(1)] = (3));


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
});})(__24846,c__24292__auto___24858,G__24677_24847,n__17654__auto___24845,jobs,results,process,async))
;
return ((function (__24846,switch__24180__auto__,c__24292__auto___24858,G__24677_24847,n__17654__auto___24845,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0 = (function (){
var statearr_24728 = [null,null,null,null,null,null,null];
(statearr_24728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__);

(statearr_24728[(1)] = (1));

return statearr_24728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1 = (function (state_24717){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_24717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e24729){if((e24729 instanceof Object)){
var ex__24184__auto__ = e24729;
var statearr_24730_24865 = state_24717;
(statearr_24730_24865[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24866 = state_24717;
state_24717 = G__24866;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__ = function(state_24717){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1.call(this,state_24717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__;
})()
;})(__24846,switch__24180__auto__,c__24292__auto___24858,G__24677_24847,n__17654__auto___24845,jobs,results,process,async))
})();
var state__24294__auto__ = (function (){var statearr_24731 = f__24293__auto__.call(null);
(statearr_24731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___24858);

return statearr_24731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(__24846,c__24292__auto___24858,G__24677_24847,n__17654__auto___24845,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24867 = (__24846 + (1));
__24846 = G__24867;
continue;
} else {
}
break;
}

var c__24292__auto___24868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___24868,jobs,results,process,async){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___24868,jobs,results,process,async){
return (function (state_24753){
var state_val_24754 = (state_24753[(1)]);
if((state_val_24754 === (1))){
var state_24753__$1 = state_24753;
var statearr_24755_24869 = state_24753__$1;
(statearr_24755_24869[(2)] = null);

(statearr_24755_24869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24754 === (2))){
var state_24753__$1 = state_24753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24753__$1,(4),from);
} else {
if((state_val_24754 === (3))){
var inst_24751 = (state_24753[(2)]);
var state_24753__$1 = state_24753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24753__$1,inst_24751);
} else {
if((state_val_24754 === (4))){
var inst_24734 = (state_24753[(7)]);
var inst_24734__$1 = (state_24753[(2)]);
var inst_24735 = (inst_24734__$1 == null);
var state_24753__$1 = (function (){var statearr_24756 = state_24753;
(statearr_24756[(7)] = inst_24734__$1);

return statearr_24756;
})();
if(cljs.core.truth_(inst_24735)){
var statearr_24757_24870 = state_24753__$1;
(statearr_24757_24870[(1)] = (5));

} else {
var statearr_24758_24871 = state_24753__$1;
(statearr_24758_24871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24754 === (5))){
var inst_24737 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24753__$1 = state_24753;
var statearr_24759_24872 = state_24753__$1;
(statearr_24759_24872[(2)] = inst_24737);

(statearr_24759_24872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24754 === (6))){
var inst_24734 = (state_24753[(7)]);
var inst_24739 = (state_24753[(8)]);
var inst_24739__$1 = cljs.core.async.chan.call(null,(1));
var inst_24740 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24741 = [inst_24734,inst_24739__$1];
var inst_24742 = (new cljs.core.PersistentVector(null,2,(5),inst_24740,inst_24741,null));
var state_24753__$1 = (function (){var statearr_24760 = state_24753;
(statearr_24760[(8)] = inst_24739__$1);

return statearr_24760;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24753__$1,(8),jobs,inst_24742);
} else {
if((state_val_24754 === (7))){
var inst_24749 = (state_24753[(2)]);
var state_24753__$1 = state_24753;
var statearr_24761_24873 = state_24753__$1;
(statearr_24761_24873[(2)] = inst_24749);

(statearr_24761_24873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24754 === (8))){
var inst_24739 = (state_24753[(8)]);
var inst_24744 = (state_24753[(2)]);
var state_24753__$1 = (function (){var statearr_24762 = state_24753;
(statearr_24762[(9)] = inst_24744);

return statearr_24762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24753__$1,(9),results,inst_24739);
} else {
if((state_val_24754 === (9))){
var inst_24746 = (state_24753[(2)]);
var state_24753__$1 = (function (){var statearr_24763 = state_24753;
(statearr_24763[(10)] = inst_24746);

return statearr_24763;
})();
var statearr_24764_24874 = state_24753__$1;
(statearr_24764_24874[(2)] = null);

(statearr_24764_24874[(1)] = (2));


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
});})(c__24292__auto___24868,jobs,results,process,async))
;
return ((function (switch__24180__auto__,c__24292__auto___24868,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0 = (function (){
var statearr_24768 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24768[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__);

(statearr_24768[(1)] = (1));

return statearr_24768;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1 = (function (state_24753){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_24753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e24769){if((e24769 instanceof Object)){
var ex__24184__auto__ = e24769;
var statearr_24770_24875 = state_24753;
(statearr_24770_24875[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24876 = state_24753;
state_24753 = G__24876;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__ = function(state_24753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1.call(this,state_24753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___24868,jobs,results,process,async))
})();
var state__24294__auto__ = (function (){var statearr_24771 = f__24293__auto__.call(null);
(statearr_24771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___24868);

return statearr_24771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___24868,jobs,results,process,async))
);


var c__24292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto__,jobs,results,process,async){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto__,jobs,results,process,async){
return (function (state_24809){
var state_val_24810 = (state_24809[(1)]);
if((state_val_24810 === (7))){
var inst_24805 = (state_24809[(2)]);
var state_24809__$1 = state_24809;
var statearr_24811_24877 = state_24809__$1;
(statearr_24811_24877[(2)] = inst_24805);

(statearr_24811_24877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (20))){
var state_24809__$1 = state_24809;
var statearr_24812_24878 = state_24809__$1;
(statearr_24812_24878[(2)] = null);

(statearr_24812_24878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (1))){
var state_24809__$1 = state_24809;
var statearr_24813_24879 = state_24809__$1;
(statearr_24813_24879[(2)] = null);

(statearr_24813_24879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (4))){
var inst_24774 = (state_24809[(7)]);
var inst_24774__$1 = (state_24809[(2)]);
var inst_24775 = (inst_24774__$1 == null);
var state_24809__$1 = (function (){var statearr_24814 = state_24809;
(statearr_24814[(7)] = inst_24774__$1);

return statearr_24814;
})();
if(cljs.core.truth_(inst_24775)){
var statearr_24815_24880 = state_24809__$1;
(statearr_24815_24880[(1)] = (5));

} else {
var statearr_24816_24881 = state_24809__$1;
(statearr_24816_24881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (15))){
var inst_24787 = (state_24809[(8)]);
var state_24809__$1 = state_24809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24809__$1,(18),to,inst_24787);
} else {
if((state_val_24810 === (21))){
var inst_24800 = (state_24809[(2)]);
var state_24809__$1 = state_24809;
var statearr_24817_24882 = state_24809__$1;
(statearr_24817_24882[(2)] = inst_24800);

(statearr_24817_24882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (13))){
var inst_24802 = (state_24809[(2)]);
var state_24809__$1 = (function (){var statearr_24818 = state_24809;
(statearr_24818[(9)] = inst_24802);

return statearr_24818;
})();
var statearr_24819_24883 = state_24809__$1;
(statearr_24819_24883[(2)] = null);

(statearr_24819_24883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (6))){
var inst_24774 = (state_24809[(7)]);
var state_24809__$1 = state_24809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24809__$1,(11),inst_24774);
} else {
if((state_val_24810 === (17))){
var inst_24795 = (state_24809[(2)]);
var state_24809__$1 = state_24809;
if(cljs.core.truth_(inst_24795)){
var statearr_24820_24884 = state_24809__$1;
(statearr_24820_24884[(1)] = (19));

} else {
var statearr_24821_24885 = state_24809__$1;
(statearr_24821_24885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (3))){
var inst_24807 = (state_24809[(2)]);
var state_24809__$1 = state_24809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24809__$1,inst_24807);
} else {
if((state_val_24810 === (12))){
var inst_24784 = (state_24809[(10)]);
var state_24809__$1 = state_24809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24809__$1,(14),inst_24784);
} else {
if((state_val_24810 === (2))){
var state_24809__$1 = state_24809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24809__$1,(4),results);
} else {
if((state_val_24810 === (19))){
var state_24809__$1 = state_24809;
var statearr_24822_24886 = state_24809__$1;
(statearr_24822_24886[(2)] = null);

(statearr_24822_24886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (11))){
var inst_24784 = (state_24809[(2)]);
var state_24809__$1 = (function (){var statearr_24823 = state_24809;
(statearr_24823[(10)] = inst_24784);

return statearr_24823;
})();
var statearr_24824_24887 = state_24809__$1;
(statearr_24824_24887[(2)] = null);

(statearr_24824_24887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (9))){
var state_24809__$1 = state_24809;
var statearr_24825_24888 = state_24809__$1;
(statearr_24825_24888[(2)] = null);

(statearr_24825_24888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (5))){
var state_24809__$1 = state_24809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24826_24889 = state_24809__$1;
(statearr_24826_24889[(1)] = (8));

} else {
var statearr_24827_24890 = state_24809__$1;
(statearr_24827_24890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (14))){
var inst_24789 = (state_24809[(11)]);
var inst_24787 = (state_24809[(8)]);
var inst_24787__$1 = (state_24809[(2)]);
var inst_24788 = (inst_24787__$1 == null);
var inst_24789__$1 = cljs.core.not.call(null,inst_24788);
var state_24809__$1 = (function (){var statearr_24828 = state_24809;
(statearr_24828[(11)] = inst_24789__$1);

(statearr_24828[(8)] = inst_24787__$1);

return statearr_24828;
})();
if(inst_24789__$1){
var statearr_24829_24891 = state_24809__$1;
(statearr_24829_24891[(1)] = (15));

} else {
var statearr_24830_24892 = state_24809__$1;
(statearr_24830_24892[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (16))){
var inst_24789 = (state_24809[(11)]);
var state_24809__$1 = state_24809;
var statearr_24831_24893 = state_24809__$1;
(statearr_24831_24893[(2)] = inst_24789);

(statearr_24831_24893[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (10))){
var inst_24781 = (state_24809[(2)]);
var state_24809__$1 = state_24809;
var statearr_24832_24894 = state_24809__$1;
(statearr_24832_24894[(2)] = inst_24781);

(statearr_24832_24894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (18))){
var inst_24792 = (state_24809[(2)]);
var state_24809__$1 = state_24809;
var statearr_24833_24895 = state_24809__$1;
(statearr_24833_24895[(2)] = inst_24792);

(statearr_24833_24895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24810 === (8))){
var inst_24778 = cljs.core.async.close_BANG_.call(null,to);
var state_24809__$1 = state_24809;
var statearr_24834_24896 = state_24809__$1;
(statearr_24834_24896[(2)] = inst_24778);

(statearr_24834_24896[(1)] = (10));


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
});})(c__24292__auto__,jobs,results,process,async))
;
return ((function (switch__24180__auto__,c__24292__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0 = (function (){
var statearr_24838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__);

(statearr_24838[(1)] = (1));

return statearr_24838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1 = (function (state_24809){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_24809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e24839){if((e24839 instanceof Object)){
var ex__24184__auto__ = e24839;
var statearr_24840_24897 = state_24809;
(statearr_24840_24897[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24898 = state_24809;
state_24809 = G__24898;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__ = function(state_24809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1.call(this,state_24809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24181__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto__,jobs,results,process,async))
})();
var state__24294__auto__ = (function (){var statearr_24841 = f__24293__auto__.call(null);
(statearr_24841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto__);

return statearr_24841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto__,jobs,results,process,async))
);

return c__24292__auto__;
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
var args24899 = [];
var len__17809__auto___24902 = arguments.length;
var i__17810__auto___24903 = (0);
while(true){
if((i__17810__auto___24903 < len__17809__auto___24902)){
args24899.push((arguments[i__17810__auto___24903]));

var G__24904 = (i__17810__auto___24903 + (1));
i__17810__auto___24903 = G__24904;
continue;
} else {
}
break;
}

var G__24901 = args24899.length;
switch (G__24901) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24899.length)].join('')));

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
var args24906 = [];
var len__17809__auto___24909 = arguments.length;
var i__17810__auto___24910 = (0);
while(true){
if((i__17810__auto___24910 < len__17809__auto___24909)){
args24906.push((arguments[i__17810__auto___24910]));

var G__24911 = (i__17810__auto___24910 + (1));
i__17810__auto___24910 = G__24911;
continue;
} else {
}
break;
}

var G__24908 = args24906.length;
switch (G__24908) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24906.length)].join('')));

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
var args24913 = [];
var len__17809__auto___24966 = arguments.length;
var i__17810__auto___24967 = (0);
while(true){
if((i__17810__auto___24967 < len__17809__auto___24966)){
args24913.push((arguments[i__17810__auto___24967]));

var G__24968 = (i__17810__auto___24967 + (1));
i__17810__auto___24967 = G__24968;
continue;
} else {
}
break;
}

var G__24915 = args24913.length;
switch (G__24915) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24913.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24292__auto___24970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___24970,tc,fc){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___24970,tc,fc){
return (function (state_24941){
var state_val_24942 = (state_24941[(1)]);
if((state_val_24942 === (7))){
var inst_24937 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24943_24971 = state_24941__$1;
(statearr_24943_24971[(2)] = inst_24937);

(statearr_24943_24971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (1))){
var state_24941__$1 = state_24941;
var statearr_24944_24972 = state_24941__$1;
(statearr_24944_24972[(2)] = null);

(statearr_24944_24972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (4))){
var inst_24918 = (state_24941[(7)]);
var inst_24918__$1 = (state_24941[(2)]);
var inst_24919 = (inst_24918__$1 == null);
var state_24941__$1 = (function (){var statearr_24945 = state_24941;
(statearr_24945[(7)] = inst_24918__$1);

return statearr_24945;
})();
if(cljs.core.truth_(inst_24919)){
var statearr_24946_24973 = state_24941__$1;
(statearr_24946_24973[(1)] = (5));

} else {
var statearr_24947_24974 = state_24941__$1;
(statearr_24947_24974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (13))){
var state_24941__$1 = state_24941;
var statearr_24948_24975 = state_24941__$1;
(statearr_24948_24975[(2)] = null);

(statearr_24948_24975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (6))){
var inst_24918 = (state_24941[(7)]);
var inst_24924 = p.call(null,inst_24918);
var state_24941__$1 = state_24941;
if(cljs.core.truth_(inst_24924)){
var statearr_24949_24976 = state_24941__$1;
(statearr_24949_24976[(1)] = (9));

} else {
var statearr_24950_24977 = state_24941__$1;
(statearr_24950_24977[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (3))){
var inst_24939 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24941__$1,inst_24939);
} else {
if((state_val_24942 === (12))){
var state_24941__$1 = state_24941;
var statearr_24951_24978 = state_24941__$1;
(statearr_24951_24978[(2)] = null);

(statearr_24951_24978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (2))){
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24941__$1,(4),ch);
} else {
if((state_val_24942 === (11))){
var inst_24918 = (state_24941[(7)]);
var inst_24928 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24941__$1,(8),inst_24928,inst_24918);
} else {
if((state_val_24942 === (9))){
var state_24941__$1 = state_24941;
var statearr_24952_24979 = state_24941__$1;
(statearr_24952_24979[(2)] = tc);

(statearr_24952_24979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (5))){
var inst_24921 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24922 = cljs.core.async.close_BANG_.call(null,fc);
var state_24941__$1 = (function (){var statearr_24953 = state_24941;
(statearr_24953[(8)] = inst_24921);

return statearr_24953;
})();
var statearr_24954_24980 = state_24941__$1;
(statearr_24954_24980[(2)] = inst_24922);

(statearr_24954_24980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (14))){
var inst_24935 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
var statearr_24955_24981 = state_24941__$1;
(statearr_24955_24981[(2)] = inst_24935);

(statearr_24955_24981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (10))){
var state_24941__$1 = state_24941;
var statearr_24956_24982 = state_24941__$1;
(statearr_24956_24982[(2)] = fc);

(statearr_24956_24982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24942 === (8))){
var inst_24930 = (state_24941[(2)]);
var state_24941__$1 = state_24941;
if(cljs.core.truth_(inst_24930)){
var statearr_24957_24983 = state_24941__$1;
(statearr_24957_24983[(1)] = (12));

} else {
var statearr_24958_24984 = state_24941__$1;
(statearr_24958_24984[(1)] = (13));

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
});})(c__24292__auto___24970,tc,fc))
;
return ((function (switch__24180__auto__,c__24292__auto___24970,tc,fc){
return (function() {
var cljs$core$async$state_machine__24181__auto__ = null;
var cljs$core$async$state_machine__24181__auto____0 = (function (){
var statearr_24962 = [null,null,null,null,null,null,null,null,null];
(statearr_24962[(0)] = cljs$core$async$state_machine__24181__auto__);

(statearr_24962[(1)] = (1));

return statearr_24962;
});
var cljs$core$async$state_machine__24181__auto____1 = (function (state_24941){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_24941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e24963){if((e24963 instanceof Object)){
var ex__24184__auto__ = e24963;
var statearr_24964_24985 = state_24941;
(statearr_24964_24985[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24986 = state_24941;
state_24941 = G__24986;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$state_machine__24181__auto__ = function(state_24941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24181__auto____1.call(this,state_24941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24181__auto____0;
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24181__auto____1;
return cljs$core$async$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___24970,tc,fc))
})();
var state__24294__auto__ = (function (){var statearr_24965 = f__24293__auto__.call(null);
(statearr_24965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___24970);

return statearr_24965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___24970,tc,fc))
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
var c__24292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto__){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto__){
return (function (state_25050){
var state_val_25051 = (state_25050[(1)]);
if((state_val_25051 === (7))){
var inst_25046 = (state_25050[(2)]);
var state_25050__$1 = state_25050;
var statearr_25052_25073 = state_25050__$1;
(statearr_25052_25073[(2)] = inst_25046);

(statearr_25052_25073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25051 === (1))){
var inst_25030 = init;
var state_25050__$1 = (function (){var statearr_25053 = state_25050;
(statearr_25053[(7)] = inst_25030);

return statearr_25053;
})();
var statearr_25054_25074 = state_25050__$1;
(statearr_25054_25074[(2)] = null);

(statearr_25054_25074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25051 === (4))){
var inst_25033 = (state_25050[(8)]);
var inst_25033__$1 = (state_25050[(2)]);
var inst_25034 = (inst_25033__$1 == null);
var state_25050__$1 = (function (){var statearr_25055 = state_25050;
(statearr_25055[(8)] = inst_25033__$1);

return statearr_25055;
})();
if(cljs.core.truth_(inst_25034)){
var statearr_25056_25075 = state_25050__$1;
(statearr_25056_25075[(1)] = (5));

} else {
var statearr_25057_25076 = state_25050__$1;
(statearr_25057_25076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25051 === (6))){
var inst_25030 = (state_25050[(7)]);
var inst_25037 = (state_25050[(9)]);
var inst_25033 = (state_25050[(8)]);
var inst_25037__$1 = f.call(null,inst_25030,inst_25033);
var inst_25038 = cljs.core.reduced_QMARK_.call(null,inst_25037__$1);
var state_25050__$1 = (function (){var statearr_25058 = state_25050;
(statearr_25058[(9)] = inst_25037__$1);

return statearr_25058;
})();
if(inst_25038){
var statearr_25059_25077 = state_25050__$1;
(statearr_25059_25077[(1)] = (8));

} else {
var statearr_25060_25078 = state_25050__$1;
(statearr_25060_25078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25051 === (3))){
var inst_25048 = (state_25050[(2)]);
var state_25050__$1 = state_25050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25050__$1,inst_25048);
} else {
if((state_val_25051 === (2))){
var state_25050__$1 = state_25050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25050__$1,(4),ch);
} else {
if((state_val_25051 === (9))){
var inst_25037 = (state_25050[(9)]);
var inst_25030 = inst_25037;
var state_25050__$1 = (function (){var statearr_25061 = state_25050;
(statearr_25061[(7)] = inst_25030);

return statearr_25061;
})();
var statearr_25062_25079 = state_25050__$1;
(statearr_25062_25079[(2)] = null);

(statearr_25062_25079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25051 === (5))){
var inst_25030 = (state_25050[(7)]);
var state_25050__$1 = state_25050;
var statearr_25063_25080 = state_25050__$1;
(statearr_25063_25080[(2)] = inst_25030);

(statearr_25063_25080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25051 === (10))){
var inst_25044 = (state_25050[(2)]);
var state_25050__$1 = state_25050;
var statearr_25064_25081 = state_25050__$1;
(statearr_25064_25081[(2)] = inst_25044);

(statearr_25064_25081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25051 === (8))){
var inst_25037 = (state_25050[(9)]);
var inst_25040 = cljs.core.deref.call(null,inst_25037);
var state_25050__$1 = state_25050;
var statearr_25065_25082 = state_25050__$1;
(statearr_25065_25082[(2)] = inst_25040);

(statearr_25065_25082[(1)] = (10));


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
});})(c__24292__auto__))
;
return ((function (switch__24180__auto__,c__24292__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24181__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24181__auto____0 = (function (){
var statearr_25069 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25069[(0)] = cljs$core$async$reduce_$_state_machine__24181__auto__);

(statearr_25069[(1)] = (1));

return statearr_25069;
});
var cljs$core$async$reduce_$_state_machine__24181__auto____1 = (function (state_25050){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_25050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e25070){if((e25070 instanceof Object)){
var ex__24184__auto__ = e25070;
var statearr_25071_25083 = state_25050;
(statearr_25071_25083[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25084 = state_25050;
state_25050 = G__25084;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24181__auto__ = function(state_25050){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24181__auto____1.call(this,state_25050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24181__auto____0;
cljs$core$async$reduce_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24181__auto____1;
return cljs$core$async$reduce_$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto__))
})();
var state__24294__auto__ = (function (){var statearr_25072 = f__24293__auto__.call(null);
(statearr_25072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto__);

return statearr_25072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto__))
);

return c__24292__auto__;
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
var args25085 = [];
var len__17809__auto___25137 = arguments.length;
var i__17810__auto___25138 = (0);
while(true){
if((i__17810__auto___25138 < len__17809__auto___25137)){
args25085.push((arguments[i__17810__auto___25138]));

var G__25139 = (i__17810__auto___25138 + (1));
i__17810__auto___25138 = G__25139;
continue;
} else {
}
break;
}

var G__25087 = args25085.length;
switch (G__25087) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25085.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto__){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto__){
return (function (state_25112){
var state_val_25113 = (state_25112[(1)]);
if((state_val_25113 === (7))){
var inst_25094 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
var statearr_25114_25141 = state_25112__$1;
(statearr_25114_25141[(2)] = inst_25094);

(statearr_25114_25141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (1))){
var inst_25088 = cljs.core.seq.call(null,coll);
var inst_25089 = inst_25088;
var state_25112__$1 = (function (){var statearr_25115 = state_25112;
(statearr_25115[(7)] = inst_25089);

return statearr_25115;
})();
var statearr_25116_25142 = state_25112__$1;
(statearr_25116_25142[(2)] = null);

(statearr_25116_25142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (4))){
var inst_25089 = (state_25112[(7)]);
var inst_25092 = cljs.core.first.call(null,inst_25089);
var state_25112__$1 = state_25112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25112__$1,(7),ch,inst_25092);
} else {
if((state_val_25113 === (13))){
var inst_25106 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
var statearr_25117_25143 = state_25112__$1;
(statearr_25117_25143[(2)] = inst_25106);

(statearr_25117_25143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (6))){
var inst_25097 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
if(cljs.core.truth_(inst_25097)){
var statearr_25118_25144 = state_25112__$1;
(statearr_25118_25144[(1)] = (8));

} else {
var statearr_25119_25145 = state_25112__$1;
(statearr_25119_25145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (3))){
var inst_25110 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25112__$1,inst_25110);
} else {
if((state_val_25113 === (12))){
var state_25112__$1 = state_25112;
var statearr_25120_25146 = state_25112__$1;
(statearr_25120_25146[(2)] = null);

(statearr_25120_25146[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (2))){
var inst_25089 = (state_25112[(7)]);
var state_25112__$1 = state_25112;
if(cljs.core.truth_(inst_25089)){
var statearr_25121_25147 = state_25112__$1;
(statearr_25121_25147[(1)] = (4));

} else {
var statearr_25122_25148 = state_25112__$1;
(statearr_25122_25148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (11))){
var inst_25103 = cljs.core.async.close_BANG_.call(null,ch);
var state_25112__$1 = state_25112;
var statearr_25123_25149 = state_25112__$1;
(statearr_25123_25149[(2)] = inst_25103);

(statearr_25123_25149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (9))){
var state_25112__$1 = state_25112;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25124_25150 = state_25112__$1;
(statearr_25124_25150[(1)] = (11));

} else {
var statearr_25125_25151 = state_25112__$1;
(statearr_25125_25151[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (5))){
var inst_25089 = (state_25112[(7)]);
var state_25112__$1 = state_25112;
var statearr_25126_25152 = state_25112__$1;
(statearr_25126_25152[(2)] = inst_25089);

(statearr_25126_25152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (10))){
var inst_25108 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
var statearr_25127_25153 = state_25112__$1;
(statearr_25127_25153[(2)] = inst_25108);

(statearr_25127_25153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (8))){
var inst_25089 = (state_25112[(7)]);
var inst_25099 = cljs.core.next.call(null,inst_25089);
var inst_25089__$1 = inst_25099;
var state_25112__$1 = (function (){var statearr_25128 = state_25112;
(statearr_25128[(7)] = inst_25089__$1);

return statearr_25128;
})();
var statearr_25129_25154 = state_25112__$1;
(statearr_25129_25154[(2)] = null);

(statearr_25129_25154[(1)] = (2));


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
});})(c__24292__auto__))
;
return ((function (switch__24180__auto__,c__24292__auto__){
return (function() {
var cljs$core$async$state_machine__24181__auto__ = null;
var cljs$core$async$state_machine__24181__auto____0 = (function (){
var statearr_25133 = [null,null,null,null,null,null,null,null];
(statearr_25133[(0)] = cljs$core$async$state_machine__24181__auto__);

(statearr_25133[(1)] = (1));

return statearr_25133;
});
var cljs$core$async$state_machine__24181__auto____1 = (function (state_25112){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_25112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e25134){if((e25134 instanceof Object)){
var ex__24184__auto__ = e25134;
var statearr_25135_25155 = state_25112;
(statearr_25135_25155[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25156 = state_25112;
state_25112 = G__25156;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$state_machine__24181__auto__ = function(state_25112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24181__auto____1.call(this,state_25112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24181__auto____0;
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24181__auto____1;
return cljs$core$async$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto__))
})();
var state__24294__auto__ = (function (){var statearr_25136 = f__24293__auto__.call(null);
(statearr_25136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto__);

return statearr_25136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto__))
);

return c__24292__auto__;
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
var x__17406__auto__ = (((_ == null))?null:_);
var m__17407__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,_);
} else {
var m__17407__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,_);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17407__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m);
} else {
var m__17407__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async25378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25378 = (function (mult,ch,cs,meta25379){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25379 = meta25379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25380,meta25379__$1){
var self__ = this;
var _25380__$1 = this;
return (new cljs.core.async.t_cljs$core$async25378(self__.mult,self__.ch,self__.cs,meta25379__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25380){
var self__ = this;
var _25380__$1 = this;
return self__.meta25379;
});})(cs))
;

cljs.core.async.t_cljs$core$async25378.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25378.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25378.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25378.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25378.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25378.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25379","meta25379",-326744932,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25378";

cljs.core.async.t_cljs$core$async25378.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25378");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25378 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25378(mult__$1,ch__$1,cs__$1,meta25379){
return (new cljs.core.async.t_cljs$core$async25378(mult__$1,ch__$1,cs__$1,meta25379));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25378(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24292__auto___25599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___25599,cs,m,dchan,dctr,done){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___25599,cs,m,dchan,dctr,done){
return (function (state_25511){
var state_val_25512 = (state_25511[(1)]);
if((state_val_25512 === (7))){
var inst_25507 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25513_25600 = state_25511__$1;
(statearr_25513_25600[(2)] = inst_25507);

(statearr_25513_25600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (20))){
var inst_25412 = (state_25511[(7)]);
var inst_25422 = cljs.core.first.call(null,inst_25412);
var inst_25423 = cljs.core.nth.call(null,inst_25422,(0),null);
var inst_25424 = cljs.core.nth.call(null,inst_25422,(1),null);
var state_25511__$1 = (function (){var statearr_25514 = state_25511;
(statearr_25514[(8)] = inst_25423);

return statearr_25514;
})();
if(cljs.core.truth_(inst_25424)){
var statearr_25515_25601 = state_25511__$1;
(statearr_25515_25601[(1)] = (22));

} else {
var statearr_25516_25602 = state_25511__$1;
(statearr_25516_25602[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (27))){
var inst_25383 = (state_25511[(9)]);
var inst_25459 = (state_25511[(10)]);
var inst_25454 = (state_25511[(11)]);
var inst_25452 = (state_25511[(12)]);
var inst_25459__$1 = cljs.core._nth.call(null,inst_25452,inst_25454);
var inst_25460 = cljs.core.async.put_BANG_.call(null,inst_25459__$1,inst_25383,done);
var state_25511__$1 = (function (){var statearr_25517 = state_25511;
(statearr_25517[(10)] = inst_25459__$1);

return statearr_25517;
})();
if(cljs.core.truth_(inst_25460)){
var statearr_25518_25603 = state_25511__$1;
(statearr_25518_25603[(1)] = (30));

} else {
var statearr_25519_25604 = state_25511__$1;
(statearr_25519_25604[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (1))){
var state_25511__$1 = state_25511;
var statearr_25520_25605 = state_25511__$1;
(statearr_25520_25605[(2)] = null);

(statearr_25520_25605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (24))){
var inst_25412 = (state_25511[(7)]);
var inst_25429 = (state_25511[(2)]);
var inst_25430 = cljs.core.next.call(null,inst_25412);
var inst_25392 = inst_25430;
var inst_25393 = null;
var inst_25394 = (0);
var inst_25395 = (0);
var state_25511__$1 = (function (){var statearr_25521 = state_25511;
(statearr_25521[(13)] = inst_25392);

(statearr_25521[(14)] = inst_25394);

(statearr_25521[(15)] = inst_25429);

(statearr_25521[(16)] = inst_25395);

(statearr_25521[(17)] = inst_25393);

return statearr_25521;
})();
var statearr_25522_25606 = state_25511__$1;
(statearr_25522_25606[(2)] = null);

(statearr_25522_25606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (39))){
var state_25511__$1 = state_25511;
var statearr_25526_25607 = state_25511__$1;
(statearr_25526_25607[(2)] = null);

(statearr_25526_25607[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (4))){
var inst_25383 = (state_25511[(9)]);
var inst_25383__$1 = (state_25511[(2)]);
var inst_25384 = (inst_25383__$1 == null);
var state_25511__$1 = (function (){var statearr_25527 = state_25511;
(statearr_25527[(9)] = inst_25383__$1);

return statearr_25527;
})();
if(cljs.core.truth_(inst_25384)){
var statearr_25528_25608 = state_25511__$1;
(statearr_25528_25608[(1)] = (5));

} else {
var statearr_25529_25609 = state_25511__$1;
(statearr_25529_25609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (15))){
var inst_25392 = (state_25511[(13)]);
var inst_25394 = (state_25511[(14)]);
var inst_25395 = (state_25511[(16)]);
var inst_25393 = (state_25511[(17)]);
var inst_25408 = (state_25511[(2)]);
var inst_25409 = (inst_25395 + (1));
var tmp25523 = inst_25392;
var tmp25524 = inst_25394;
var tmp25525 = inst_25393;
var inst_25392__$1 = tmp25523;
var inst_25393__$1 = tmp25525;
var inst_25394__$1 = tmp25524;
var inst_25395__$1 = inst_25409;
var state_25511__$1 = (function (){var statearr_25530 = state_25511;
(statearr_25530[(13)] = inst_25392__$1);

(statearr_25530[(18)] = inst_25408);

(statearr_25530[(14)] = inst_25394__$1);

(statearr_25530[(16)] = inst_25395__$1);

(statearr_25530[(17)] = inst_25393__$1);

return statearr_25530;
})();
var statearr_25531_25610 = state_25511__$1;
(statearr_25531_25610[(2)] = null);

(statearr_25531_25610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (21))){
var inst_25433 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25535_25611 = state_25511__$1;
(statearr_25535_25611[(2)] = inst_25433);

(statearr_25535_25611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (31))){
var inst_25459 = (state_25511[(10)]);
var inst_25463 = done.call(null,null);
var inst_25464 = cljs.core.async.untap_STAR_.call(null,m,inst_25459);
var state_25511__$1 = (function (){var statearr_25536 = state_25511;
(statearr_25536[(19)] = inst_25463);

return statearr_25536;
})();
var statearr_25537_25612 = state_25511__$1;
(statearr_25537_25612[(2)] = inst_25464);

(statearr_25537_25612[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (32))){
var inst_25454 = (state_25511[(11)]);
var inst_25453 = (state_25511[(20)]);
var inst_25452 = (state_25511[(12)]);
var inst_25451 = (state_25511[(21)]);
var inst_25466 = (state_25511[(2)]);
var inst_25467 = (inst_25454 + (1));
var tmp25532 = inst_25453;
var tmp25533 = inst_25452;
var tmp25534 = inst_25451;
var inst_25451__$1 = tmp25534;
var inst_25452__$1 = tmp25533;
var inst_25453__$1 = tmp25532;
var inst_25454__$1 = inst_25467;
var state_25511__$1 = (function (){var statearr_25538 = state_25511;
(statearr_25538[(11)] = inst_25454__$1);

(statearr_25538[(20)] = inst_25453__$1);

(statearr_25538[(22)] = inst_25466);

(statearr_25538[(12)] = inst_25452__$1);

(statearr_25538[(21)] = inst_25451__$1);

return statearr_25538;
})();
var statearr_25539_25613 = state_25511__$1;
(statearr_25539_25613[(2)] = null);

(statearr_25539_25613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (40))){
var inst_25479 = (state_25511[(23)]);
var inst_25483 = done.call(null,null);
var inst_25484 = cljs.core.async.untap_STAR_.call(null,m,inst_25479);
var state_25511__$1 = (function (){var statearr_25540 = state_25511;
(statearr_25540[(24)] = inst_25483);

return statearr_25540;
})();
var statearr_25541_25614 = state_25511__$1;
(statearr_25541_25614[(2)] = inst_25484);

(statearr_25541_25614[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (33))){
var inst_25470 = (state_25511[(25)]);
var inst_25472 = cljs.core.chunked_seq_QMARK_.call(null,inst_25470);
var state_25511__$1 = state_25511;
if(inst_25472){
var statearr_25542_25615 = state_25511__$1;
(statearr_25542_25615[(1)] = (36));

} else {
var statearr_25543_25616 = state_25511__$1;
(statearr_25543_25616[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (13))){
var inst_25402 = (state_25511[(26)]);
var inst_25405 = cljs.core.async.close_BANG_.call(null,inst_25402);
var state_25511__$1 = state_25511;
var statearr_25544_25617 = state_25511__$1;
(statearr_25544_25617[(2)] = inst_25405);

(statearr_25544_25617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (22))){
var inst_25423 = (state_25511[(8)]);
var inst_25426 = cljs.core.async.close_BANG_.call(null,inst_25423);
var state_25511__$1 = state_25511;
var statearr_25545_25618 = state_25511__$1;
(statearr_25545_25618[(2)] = inst_25426);

(statearr_25545_25618[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (36))){
var inst_25470 = (state_25511[(25)]);
var inst_25474 = cljs.core.chunk_first.call(null,inst_25470);
var inst_25475 = cljs.core.chunk_rest.call(null,inst_25470);
var inst_25476 = cljs.core.count.call(null,inst_25474);
var inst_25451 = inst_25475;
var inst_25452 = inst_25474;
var inst_25453 = inst_25476;
var inst_25454 = (0);
var state_25511__$1 = (function (){var statearr_25546 = state_25511;
(statearr_25546[(11)] = inst_25454);

(statearr_25546[(20)] = inst_25453);

(statearr_25546[(12)] = inst_25452);

(statearr_25546[(21)] = inst_25451);

return statearr_25546;
})();
var statearr_25547_25619 = state_25511__$1;
(statearr_25547_25619[(2)] = null);

(statearr_25547_25619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (41))){
var inst_25470 = (state_25511[(25)]);
var inst_25486 = (state_25511[(2)]);
var inst_25487 = cljs.core.next.call(null,inst_25470);
var inst_25451 = inst_25487;
var inst_25452 = null;
var inst_25453 = (0);
var inst_25454 = (0);
var state_25511__$1 = (function (){var statearr_25548 = state_25511;
(statearr_25548[(27)] = inst_25486);

(statearr_25548[(11)] = inst_25454);

(statearr_25548[(20)] = inst_25453);

(statearr_25548[(12)] = inst_25452);

(statearr_25548[(21)] = inst_25451);

return statearr_25548;
})();
var statearr_25549_25620 = state_25511__$1;
(statearr_25549_25620[(2)] = null);

(statearr_25549_25620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (43))){
var state_25511__$1 = state_25511;
var statearr_25550_25621 = state_25511__$1;
(statearr_25550_25621[(2)] = null);

(statearr_25550_25621[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (29))){
var inst_25495 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25551_25622 = state_25511__$1;
(statearr_25551_25622[(2)] = inst_25495);

(statearr_25551_25622[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (44))){
var inst_25504 = (state_25511[(2)]);
var state_25511__$1 = (function (){var statearr_25552 = state_25511;
(statearr_25552[(28)] = inst_25504);

return statearr_25552;
})();
var statearr_25553_25623 = state_25511__$1;
(statearr_25553_25623[(2)] = null);

(statearr_25553_25623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (6))){
var inst_25443 = (state_25511[(29)]);
var inst_25442 = cljs.core.deref.call(null,cs);
var inst_25443__$1 = cljs.core.keys.call(null,inst_25442);
var inst_25444 = cljs.core.count.call(null,inst_25443__$1);
var inst_25445 = cljs.core.reset_BANG_.call(null,dctr,inst_25444);
var inst_25450 = cljs.core.seq.call(null,inst_25443__$1);
var inst_25451 = inst_25450;
var inst_25452 = null;
var inst_25453 = (0);
var inst_25454 = (0);
var state_25511__$1 = (function (){var statearr_25554 = state_25511;
(statearr_25554[(11)] = inst_25454);

(statearr_25554[(30)] = inst_25445);

(statearr_25554[(20)] = inst_25453);

(statearr_25554[(12)] = inst_25452);

(statearr_25554[(21)] = inst_25451);

(statearr_25554[(29)] = inst_25443__$1);

return statearr_25554;
})();
var statearr_25555_25624 = state_25511__$1;
(statearr_25555_25624[(2)] = null);

(statearr_25555_25624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (28))){
var inst_25470 = (state_25511[(25)]);
var inst_25451 = (state_25511[(21)]);
var inst_25470__$1 = cljs.core.seq.call(null,inst_25451);
var state_25511__$1 = (function (){var statearr_25556 = state_25511;
(statearr_25556[(25)] = inst_25470__$1);

return statearr_25556;
})();
if(inst_25470__$1){
var statearr_25557_25625 = state_25511__$1;
(statearr_25557_25625[(1)] = (33));

} else {
var statearr_25558_25626 = state_25511__$1;
(statearr_25558_25626[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (25))){
var inst_25454 = (state_25511[(11)]);
var inst_25453 = (state_25511[(20)]);
var inst_25456 = (inst_25454 < inst_25453);
var inst_25457 = inst_25456;
var state_25511__$1 = state_25511;
if(cljs.core.truth_(inst_25457)){
var statearr_25559_25627 = state_25511__$1;
(statearr_25559_25627[(1)] = (27));

} else {
var statearr_25560_25628 = state_25511__$1;
(statearr_25560_25628[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (34))){
var state_25511__$1 = state_25511;
var statearr_25561_25629 = state_25511__$1;
(statearr_25561_25629[(2)] = null);

(statearr_25561_25629[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (17))){
var state_25511__$1 = state_25511;
var statearr_25562_25630 = state_25511__$1;
(statearr_25562_25630[(2)] = null);

(statearr_25562_25630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (3))){
var inst_25509 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25511__$1,inst_25509);
} else {
if((state_val_25512 === (12))){
var inst_25438 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25563_25631 = state_25511__$1;
(statearr_25563_25631[(2)] = inst_25438);

(statearr_25563_25631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (2))){
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25511__$1,(4),ch);
} else {
if((state_val_25512 === (23))){
var state_25511__$1 = state_25511;
var statearr_25564_25632 = state_25511__$1;
(statearr_25564_25632[(2)] = null);

(statearr_25564_25632[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (35))){
var inst_25493 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25565_25633 = state_25511__$1;
(statearr_25565_25633[(2)] = inst_25493);

(statearr_25565_25633[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (19))){
var inst_25412 = (state_25511[(7)]);
var inst_25416 = cljs.core.chunk_first.call(null,inst_25412);
var inst_25417 = cljs.core.chunk_rest.call(null,inst_25412);
var inst_25418 = cljs.core.count.call(null,inst_25416);
var inst_25392 = inst_25417;
var inst_25393 = inst_25416;
var inst_25394 = inst_25418;
var inst_25395 = (0);
var state_25511__$1 = (function (){var statearr_25566 = state_25511;
(statearr_25566[(13)] = inst_25392);

(statearr_25566[(14)] = inst_25394);

(statearr_25566[(16)] = inst_25395);

(statearr_25566[(17)] = inst_25393);

return statearr_25566;
})();
var statearr_25567_25634 = state_25511__$1;
(statearr_25567_25634[(2)] = null);

(statearr_25567_25634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (11))){
var inst_25392 = (state_25511[(13)]);
var inst_25412 = (state_25511[(7)]);
var inst_25412__$1 = cljs.core.seq.call(null,inst_25392);
var state_25511__$1 = (function (){var statearr_25568 = state_25511;
(statearr_25568[(7)] = inst_25412__$1);

return statearr_25568;
})();
if(inst_25412__$1){
var statearr_25569_25635 = state_25511__$1;
(statearr_25569_25635[(1)] = (16));

} else {
var statearr_25570_25636 = state_25511__$1;
(statearr_25570_25636[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (9))){
var inst_25440 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25571_25637 = state_25511__$1;
(statearr_25571_25637[(2)] = inst_25440);

(statearr_25571_25637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (5))){
var inst_25390 = cljs.core.deref.call(null,cs);
var inst_25391 = cljs.core.seq.call(null,inst_25390);
var inst_25392 = inst_25391;
var inst_25393 = null;
var inst_25394 = (0);
var inst_25395 = (0);
var state_25511__$1 = (function (){var statearr_25572 = state_25511;
(statearr_25572[(13)] = inst_25392);

(statearr_25572[(14)] = inst_25394);

(statearr_25572[(16)] = inst_25395);

(statearr_25572[(17)] = inst_25393);

return statearr_25572;
})();
var statearr_25573_25638 = state_25511__$1;
(statearr_25573_25638[(2)] = null);

(statearr_25573_25638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (14))){
var state_25511__$1 = state_25511;
var statearr_25574_25639 = state_25511__$1;
(statearr_25574_25639[(2)] = null);

(statearr_25574_25639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (45))){
var inst_25501 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25575_25640 = state_25511__$1;
(statearr_25575_25640[(2)] = inst_25501);

(statearr_25575_25640[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (26))){
var inst_25443 = (state_25511[(29)]);
var inst_25497 = (state_25511[(2)]);
var inst_25498 = cljs.core.seq.call(null,inst_25443);
var state_25511__$1 = (function (){var statearr_25576 = state_25511;
(statearr_25576[(31)] = inst_25497);

return statearr_25576;
})();
if(inst_25498){
var statearr_25577_25641 = state_25511__$1;
(statearr_25577_25641[(1)] = (42));

} else {
var statearr_25578_25642 = state_25511__$1;
(statearr_25578_25642[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (16))){
var inst_25412 = (state_25511[(7)]);
var inst_25414 = cljs.core.chunked_seq_QMARK_.call(null,inst_25412);
var state_25511__$1 = state_25511;
if(inst_25414){
var statearr_25579_25643 = state_25511__$1;
(statearr_25579_25643[(1)] = (19));

} else {
var statearr_25580_25644 = state_25511__$1;
(statearr_25580_25644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (38))){
var inst_25490 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25581_25645 = state_25511__$1;
(statearr_25581_25645[(2)] = inst_25490);

(statearr_25581_25645[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (30))){
var state_25511__$1 = state_25511;
var statearr_25582_25646 = state_25511__$1;
(statearr_25582_25646[(2)] = null);

(statearr_25582_25646[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (10))){
var inst_25395 = (state_25511[(16)]);
var inst_25393 = (state_25511[(17)]);
var inst_25401 = cljs.core._nth.call(null,inst_25393,inst_25395);
var inst_25402 = cljs.core.nth.call(null,inst_25401,(0),null);
var inst_25403 = cljs.core.nth.call(null,inst_25401,(1),null);
var state_25511__$1 = (function (){var statearr_25583 = state_25511;
(statearr_25583[(26)] = inst_25402);

return statearr_25583;
})();
if(cljs.core.truth_(inst_25403)){
var statearr_25584_25647 = state_25511__$1;
(statearr_25584_25647[(1)] = (13));

} else {
var statearr_25585_25648 = state_25511__$1;
(statearr_25585_25648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (18))){
var inst_25436 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25586_25649 = state_25511__$1;
(statearr_25586_25649[(2)] = inst_25436);

(statearr_25586_25649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (42))){
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25511__$1,(45),dchan);
} else {
if((state_val_25512 === (37))){
var inst_25383 = (state_25511[(9)]);
var inst_25470 = (state_25511[(25)]);
var inst_25479 = (state_25511[(23)]);
var inst_25479__$1 = cljs.core.first.call(null,inst_25470);
var inst_25480 = cljs.core.async.put_BANG_.call(null,inst_25479__$1,inst_25383,done);
var state_25511__$1 = (function (){var statearr_25587 = state_25511;
(statearr_25587[(23)] = inst_25479__$1);

return statearr_25587;
})();
if(cljs.core.truth_(inst_25480)){
var statearr_25588_25650 = state_25511__$1;
(statearr_25588_25650[(1)] = (39));

} else {
var statearr_25589_25651 = state_25511__$1;
(statearr_25589_25651[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (8))){
var inst_25394 = (state_25511[(14)]);
var inst_25395 = (state_25511[(16)]);
var inst_25397 = (inst_25395 < inst_25394);
var inst_25398 = inst_25397;
var state_25511__$1 = state_25511;
if(cljs.core.truth_(inst_25398)){
var statearr_25590_25652 = state_25511__$1;
(statearr_25590_25652[(1)] = (10));

} else {
var statearr_25591_25653 = state_25511__$1;
(statearr_25591_25653[(1)] = (11));

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
});})(c__24292__auto___25599,cs,m,dchan,dctr,done))
;
return ((function (switch__24180__auto__,c__24292__auto___25599,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24181__auto__ = null;
var cljs$core$async$mult_$_state_machine__24181__auto____0 = (function (){
var statearr_25595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25595[(0)] = cljs$core$async$mult_$_state_machine__24181__auto__);

(statearr_25595[(1)] = (1));

return statearr_25595;
});
var cljs$core$async$mult_$_state_machine__24181__auto____1 = (function (state_25511){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_25511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e25596){if((e25596 instanceof Object)){
var ex__24184__auto__ = e25596;
var statearr_25597_25654 = state_25511;
(statearr_25597_25654[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25655 = state_25511;
state_25511 = G__25655;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24181__auto__ = function(state_25511){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24181__auto____1.call(this,state_25511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24181__auto____0;
cljs$core$async$mult_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24181__auto____1;
return cljs$core$async$mult_$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___25599,cs,m,dchan,dctr,done))
})();
var state__24294__auto__ = (function (){var statearr_25598 = f__24293__auto__.call(null);
(statearr_25598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___25599);

return statearr_25598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___25599,cs,m,dchan,dctr,done))
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
var args25656 = [];
var len__17809__auto___25659 = arguments.length;
var i__17810__auto___25660 = (0);
while(true){
if((i__17810__auto___25660 < len__17809__auto___25659)){
args25656.push((arguments[i__17810__auto___25660]));

var G__25661 = (i__17810__auto___25660 + (1));
i__17810__auto___25660 = G__25661;
continue;
} else {
}
break;
}

var G__25658 = args25656.length;
switch (G__25658) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25656.length)].join('')));

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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m);
} else {
var m__17407__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,state_map);
} else {
var m__17407__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,state_map);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,mode);
} else {
var m__17407__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___25673 = arguments.length;
var i__17810__auto___25674 = (0);
while(true){
if((i__17810__auto___25674 < len__17809__auto___25673)){
args__17816__auto__.push((arguments[i__17810__auto___25674]));

var G__25675 = (i__17810__auto___25674 + (1));
i__17810__auto___25674 = G__25675;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25667){
var map__25668 = p__25667;
var map__25668__$1 = ((((!((map__25668 == null)))?((((map__25668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25668):map__25668);
var opts = map__25668__$1;
var statearr_25670_25676 = state;
(statearr_25670_25676[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25668,map__25668__$1,opts){
return (function (val){
var statearr_25671_25677 = state;
(statearr_25671_25677[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25668,map__25668__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25672_25678 = state;
(statearr_25672_25678[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25663){
var G__25664 = cljs.core.first.call(null,seq25663);
var seq25663__$1 = cljs.core.next.call(null,seq25663);
var G__25665 = cljs.core.first.call(null,seq25663__$1);
var seq25663__$2 = cljs.core.next.call(null,seq25663__$1);
var G__25666 = cljs.core.first.call(null,seq25663__$2);
var seq25663__$3 = cljs.core.next.call(null,seq25663__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25664,G__25665,G__25666,seq25663__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25842 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25843){
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
this.meta25843 = meta25843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25844,meta25843__$1){
var self__ = this;
var _25844__$1 = this;
return (new cljs.core.async.t_cljs$core$async25842(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25843__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25844){
var self__ = this;
var _25844__$1 = this;
return self__.meta25843;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25842.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25842.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25842.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25842.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25842.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25842.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25842.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25842.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25843","meta25843",1264782550,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25842";

cljs.core.async.t_cljs$core$async25842.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25842");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25842 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25842(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25843){
return (new cljs.core.async.t_cljs$core$async25842(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25843));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25842(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24292__auto___26005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25942){
var state_val_25943 = (state_25942[(1)]);
if((state_val_25943 === (7))){
var inst_25860 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
var statearr_25944_26006 = state_25942__$1;
(statearr_25944_26006[(2)] = inst_25860);

(statearr_25944_26006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (20))){
var inst_25872 = (state_25942[(7)]);
var state_25942__$1 = state_25942;
var statearr_25945_26007 = state_25942__$1;
(statearr_25945_26007[(2)] = inst_25872);

(statearr_25945_26007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (27))){
var state_25942__$1 = state_25942;
var statearr_25946_26008 = state_25942__$1;
(statearr_25946_26008[(2)] = null);

(statearr_25946_26008[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (1))){
var inst_25848 = (state_25942[(8)]);
var inst_25848__$1 = calc_state.call(null);
var inst_25850 = (inst_25848__$1 == null);
var inst_25851 = cljs.core.not.call(null,inst_25850);
var state_25942__$1 = (function (){var statearr_25947 = state_25942;
(statearr_25947[(8)] = inst_25848__$1);

return statearr_25947;
})();
if(inst_25851){
var statearr_25948_26009 = state_25942__$1;
(statearr_25948_26009[(1)] = (2));

} else {
var statearr_25949_26010 = state_25942__$1;
(statearr_25949_26010[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (24))){
var inst_25902 = (state_25942[(9)]);
var inst_25895 = (state_25942[(10)]);
var inst_25916 = (state_25942[(11)]);
var inst_25916__$1 = inst_25895.call(null,inst_25902);
var state_25942__$1 = (function (){var statearr_25950 = state_25942;
(statearr_25950[(11)] = inst_25916__$1);

return statearr_25950;
})();
if(cljs.core.truth_(inst_25916__$1)){
var statearr_25951_26011 = state_25942__$1;
(statearr_25951_26011[(1)] = (29));

} else {
var statearr_25952_26012 = state_25942__$1;
(statearr_25952_26012[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (4))){
var inst_25863 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
if(cljs.core.truth_(inst_25863)){
var statearr_25953_26013 = state_25942__$1;
(statearr_25953_26013[(1)] = (8));

} else {
var statearr_25954_26014 = state_25942__$1;
(statearr_25954_26014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (15))){
var inst_25889 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
if(cljs.core.truth_(inst_25889)){
var statearr_25955_26015 = state_25942__$1;
(statearr_25955_26015[(1)] = (19));

} else {
var statearr_25956_26016 = state_25942__$1;
(statearr_25956_26016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (21))){
var inst_25894 = (state_25942[(12)]);
var inst_25894__$1 = (state_25942[(2)]);
var inst_25895 = cljs.core.get.call(null,inst_25894__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25896 = cljs.core.get.call(null,inst_25894__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25897 = cljs.core.get.call(null,inst_25894__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25942__$1 = (function (){var statearr_25957 = state_25942;
(statearr_25957[(12)] = inst_25894__$1);

(statearr_25957[(13)] = inst_25896);

(statearr_25957[(10)] = inst_25895);

return statearr_25957;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25942__$1,(22),inst_25897);
} else {
if((state_val_25943 === (31))){
var inst_25924 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
if(cljs.core.truth_(inst_25924)){
var statearr_25958_26017 = state_25942__$1;
(statearr_25958_26017[(1)] = (32));

} else {
var statearr_25959_26018 = state_25942__$1;
(statearr_25959_26018[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (32))){
var inst_25901 = (state_25942[(14)]);
var state_25942__$1 = state_25942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25942__$1,(35),out,inst_25901);
} else {
if((state_val_25943 === (33))){
var inst_25894 = (state_25942[(12)]);
var inst_25872 = inst_25894;
var state_25942__$1 = (function (){var statearr_25960 = state_25942;
(statearr_25960[(7)] = inst_25872);

return statearr_25960;
})();
var statearr_25961_26019 = state_25942__$1;
(statearr_25961_26019[(2)] = null);

(statearr_25961_26019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (13))){
var inst_25872 = (state_25942[(7)]);
var inst_25879 = inst_25872.cljs$lang$protocol_mask$partition0$;
var inst_25880 = (inst_25879 & (64));
var inst_25881 = inst_25872.cljs$core$ISeq$;
var inst_25882 = (inst_25880) || (inst_25881);
var state_25942__$1 = state_25942;
if(cljs.core.truth_(inst_25882)){
var statearr_25962_26020 = state_25942__$1;
(statearr_25962_26020[(1)] = (16));

} else {
var statearr_25963_26021 = state_25942__$1;
(statearr_25963_26021[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (22))){
var inst_25902 = (state_25942[(9)]);
var inst_25901 = (state_25942[(14)]);
var inst_25900 = (state_25942[(2)]);
var inst_25901__$1 = cljs.core.nth.call(null,inst_25900,(0),null);
var inst_25902__$1 = cljs.core.nth.call(null,inst_25900,(1),null);
var inst_25903 = (inst_25901__$1 == null);
var inst_25904 = cljs.core._EQ_.call(null,inst_25902__$1,change);
var inst_25905 = (inst_25903) || (inst_25904);
var state_25942__$1 = (function (){var statearr_25964 = state_25942;
(statearr_25964[(9)] = inst_25902__$1);

(statearr_25964[(14)] = inst_25901__$1);

return statearr_25964;
})();
if(cljs.core.truth_(inst_25905)){
var statearr_25965_26022 = state_25942__$1;
(statearr_25965_26022[(1)] = (23));

} else {
var statearr_25966_26023 = state_25942__$1;
(statearr_25966_26023[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (36))){
var inst_25894 = (state_25942[(12)]);
var inst_25872 = inst_25894;
var state_25942__$1 = (function (){var statearr_25967 = state_25942;
(statearr_25967[(7)] = inst_25872);

return statearr_25967;
})();
var statearr_25968_26024 = state_25942__$1;
(statearr_25968_26024[(2)] = null);

(statearr_25968_26024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (29))){
var inst_25916 = (state_25942[(11)]);
var state_25942__$1 = state_25942;
var statearr_25969_26025 = state_25942__$1;
(statearr_25969_26025[(2)] = inst_25916);

(statearr_25969_26025[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (6))){
var state_25942__$1 = state_25942;
var statearr_25970_26026 = state_25942__$1;
(statearr_25970_26026[(2)] = false);

(statearr_25970_26026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (28))){
var inst_25912 = (state_25942[(2)]);
var inst_25913 = calc_state.call(null);
var inst_25872 = inst_25913;
var state_25942__$1 = (function (){var statearr_25971 = state_25942;
(statearr_25971[(7)] = inst_25872);

(statearr_25971[(15)] = inst_25912);

return statearr_25971;
})();
var statearr_25972_26027 = state_25942__$1;
(statearr_25972_26027[(2)] = null);

(statearr_25972_26027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (25))){
var inst_25938 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
var statearr_25973_26028 = state_25942__$1;
(statearr_25973_26028[(2)] = inst_25938);

(statearr_25973_26028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (34))){
var inst_25936 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
var statearr_25974_26029 = state_25942__$1;
(statearr_25974_26029[(2)] = inst_25936);

(statearr_25974_26029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (17))){
var state_25942__$1 = state_25942;
var statearr_25975_26030 = state_25942__$1;
(statearr_25975_26030[(2)] = false);

(statearr_25975_26030[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (3))){
var state_25942__$1 = state_25942;
var statearr_25976_26031 = state_25942__$1;
(statearr_25976_26031[(2)] = false);

(statearr_25976_26031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (12))){
var inst_25940 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25942__$1,inst_25940);
} else {
if((state_val_25943 === (2))){
var inst_25848 = (state_25942[(8)]);
var inst_25853 = inst_25848.cljs$lang$protocol_mask$partition0$;
var inst_25854 = (inst_25853 & (64));
var inst_25855 = inst_25848.cljs$core$ISeq$;
var inst_25856 = (inst_25854) || (inst_25855);
var state_25942__$1 = state_25942;
if(cljs.core.truth_(inst_25856)){
var statearr_25977_26032 = state_25942__$1;
(statearr_25977_26032[(1)] = (5));

} else {
var statearr_25978_26033 = state_25942__$1;
(statearr_25978_26033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (23))){
var inst_25901 = (state_25942[(14)]);
var inst_25907 = (inst_25901 == null);
var state_25942__$1 = state_25942;
if(cljs.core.truth_(inst_25907)){
var statearr_25979_26034 = state_25942__$1;
(statearr_25979_26034[(1)] = (26));

} else {
var statearr_25980_26035 = state_25942__$1;
(statearr_25980_26035[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (35))){
var inst_25927 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
if(cljs.core.truth_(inst_25927)){
var statearr_25981_26036 = state_25942__$1;
(statearr_25981_26036[(1)] = (36));

} else {
var statearr_25982_26037 = state_25942__$1;
(statearr_25982_26037[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (19))){
var inst_25872 = (state_25942[(7)]);
var inst_25891 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25872);
var state_25942__$1 = state_25942;
var statearr_25983_26038 = state_25942__$1;
(statearr_25983_26038[(2)] = inst_25891);

(statearr_25983_26038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (11))){
var inst_25872 = (state_25942[(7)]);
var inst_25876 = (inst_25872 == null);
var inst_25877 = cljs.core.not.call(null,inst_25876);
var state_25942__$1 = state_25942;
if(inst_25877){
var statearr_25984_26039 = state_25942__$1;
(statearr_25984_26039[(1)] = (13));

} else {
var statearr_25985_26040 = state_25942__$1;
(statearr_25985_26040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (9))){
var inst_25848 = (state_25942[(8)]);
var state_25942__$1 = state_25942;
var statearr_25986_26041 = state_25942__$1;
(statearr_25986_26041[(2)] = inst_25848);

(statearr_25986_26041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (5))){
var state_25942__$1 = state_25942;
var statearr_25987_26042 = state_25942__$1;
(statearr_25987_26042[(2)] = true);

(statearr_25987_26042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (14))){
var state_25942__$1 = state_25942;
var statearr_25988_26043 = state_25942__$1;
(statearr_25988_26043[(2)] = false);

(statearr_25988_26043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (26))){
var inst_25902 = (state_25942[(9)]);
var inst_25909 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25902);
var state_25942__$1 = state_25942;
var statearr_25989_26044 = state_25942__$1;
(statearr_25989_26044[(2)] = inst_25909);

(statearr_25989_26044[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (16))){
var state_25942__$1 = state_25942;
var statearr_25990_26045 = state_25942__$1;
(statearr_25990_26045[(2)] = true);

(statearr_25990_26045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (38))){
var inst_25932 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
var statearr_25991_26046 = state_25942__$1;
(statearr_25991_26046[(2)] = inst_25932);

(statearr_25991_26046[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (30))){
var inst_25902 = (state_25942[(9)]);
var inst_25896 = (state_25942[(13)]);
var inst_25895 = (state_25942[(10)]);
var inst_25919 = cljs.core.empty_QMARK_.call(null,inst_25895);
var inst_25920 = inst_25896.call(null,inst_25902);
var inst_25921 = cljs.core.not.call(null,inst_25920);
var inst_25922 = (inst_25919) && (inst_25921);
var state_25942__$1 = state_25942;
var statearr_25992_26047 = state_25942__$1;
(statearr_25992_26047[(2)] = inst_25922);

(statearr_25992_26047[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (10))){
var inst_25848 = (state_25942[(8)]);
var inst_25868 = (state_25942[(2)]);
var inst_25869 = cljs.core.get.call(null,inst_25868,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25870 = cljs.core.get.call(null,inst_25868,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25871 = cljs.core.get.call(null,inst_25868,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25872 = inst_25848;
var state_25942__$1 = (function (){var statearr_25993 = state_25942;
(statearr_25993[(16)] = inst_25871);

(statearr_25993[(7)] = inst_25872);

(statearr_25993[(17)] = inst_25869);

(statearr_25993[(18)] = inst_25870);

return statearr_25993;
})();
var statearr_25994_26048 = state_25942__$1;
(statearr_25994_26048[(2)] = null);

(statearr_25994_26048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (18))){
var inst_25886 = (state_25942[(2)]);
var state_25942__$1 = state_25942;
var statearr_25995_26049 = state_25942__$1;
(statearr_25995_26049[(2)] = inst_25886);

(statearr_25995_26049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (37))){
var state_25942__$1 = state_25942;
var statearr_25996_26050 = state_25942__$1;
(statearr_25996_26050[(2)] = null);

(statearr_25996_26050[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25943 === (8))){
var inst_25848 = (state_25942[(8)]);
var inst_25865 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25848);
var state_25942__$1 = state_25942;
var statearr_25997_26051 = state_25942__$1;
(statearr_25997_26051[(2)] = inst_25865);

(statearr_25997_26051[(1)] = (10));


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
});})(c__24292__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24180__auto__,c__24292__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24181__auto__ = null;
var cljs$core$async$mix_$_state_machine__24181__auto____0 = (function (){
var statearr_26001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26001[(0)] = cljs$core$async$mix_$_state_machine__24181__auto__);

(statearr_26001[(1)] = (1));

return statearr_26001;
});
var cljs$core$async$mix_$_state_machine__24181__auto____1 = (function (state_25942){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_25942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e26002){if((e26002 instanceof Object)){
var ex__24184__auto__ = e26002;
var statearr_26003_26052 = state_25942;
(statearr_26003_26052[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26053 = state_25942;
state_25942 = G__26053;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24181__auto__ = function(state_25942){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24181__auto____1.call(this,state_25942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24181__auto____0;
cljs$core$async$mix_$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24181__auto____1;
return cljs$core$async$mix_$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24294__auto__ = (function (){var statearr_26004 = f__24293__auto__.call(null);
(statearr_26004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___26005);

return statearr_26004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___26005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17407__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p,v,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26054 = [];
var len__17809__auto___26057 = arguments.length;
var i__17810__auto___26058 = (0);
while(true){
if((i__17810__auto___26058 < len__17809__auto___26057)){
args26054.push((arguments[i__17810__auto___26058]));

var G__26059 = (i__17810__auto___26058 + (1));
i__17810__auto___26058 = G__26059;
continue;
} else {
}
break;
}

var G__26056 = args26054.length;
switch (G__26056) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26054.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p);
} else {
var m__17407__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p);
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
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p,v);
} else {
var m__17407__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p,v);
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
var args26062 = [];
var len__17809__auto___26187 = arguments.length;
var i__17810__auto___26188 = (0);
while(true){
if((i__17810__auto___26188 < len__17809__auto___26187)){
args26062.push((arguments[i__17810__auto___26188]));

var G__26189 = (i__17810__auto___26188 + (1));
i__17810__auto___26188 = G__26189;
continue;
} else {
}
break;
}

var G__26064 = args26062.length;
switch (G__26064) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26062.length)].join('')));

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
return (function (p1__26061_SHARP_){
if(cljs.core.truth_(p1__26061_SHARP_.call(null,topic))){
return p1__26061_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26061_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26065 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26066){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26066 = meta26066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26067,meta26066__$1){
var self__ = this;
var _26067__$1 = this;
return (new cljs.core.async.t_cljs$core$async26065(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26066__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26067){
var self__ = this;
var _26067__$1 = this;
return self__.meta26066;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26066","meta26066",-810905774,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26065";

cljs.core.async.t_cljs$core$async26065.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26065");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26065 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26065(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26066){
return (new cljs.core.async.t_cljs$core$async26065(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26066));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26065(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24292__auto___26191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___26191,mults,ensure_mult,p){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___26191,mults,ensure_mult,p){
return (function (state_26139){
var state_val_26140 = (state_26139[(1)]);
if((state_val_26140 === (7))){
var inst_26135 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26141_26192 = state_26139__$1;
(statearr_26141_26192[(2)] = inst_26135);

(statearr_26141_26192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (20))){
var state_26139__$1 = state_26139;
var statearr_26142_26193 = state_26139__$1;
(statearr_26142_26193[(2)] = null);

(statearr_26142_26193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (1))){
var state_26139__$1 = state_26139;
var statearr_26143_26194 = state_26139__$1;
(statearr_26143_26194[(2)] = null);

(statearr_26143_26194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (24))){
var inst_26118 = (state_26139[(7)]);
var inst_26127 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26118);
var state_26139__$1 = state_26139;
var statearr_26144_26195 = state_26139__$1;
(statearr_26144_26195[(2)] = inst_26127);

(statearr_26144_26195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (4))){
var inst_26070 = (state_26139[(8)]);
var inst_26070__$1 = (state_26139[(2)]);
var inst_26071 = (inst_26070__$1 == null);
var state_26139__$1 = (function (){var statearr_26145 = state_26139;
(statearr_26145[(8)] = inst_26070__$1);

return statearr_26145;
})();
if(cljs.core.truth_(inst_26071)){
var statearr_26146_26196 = state_26139__$1;
(statearr_26146_26196[(1)] = (5));

} else {
var statearr_26147_26197 = state_26139__$1;
(statearr_26147_26197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (15))){
var inst_26112 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26148_26198 = state_26139__$1;
(statearr_26148_26198[(2)] = inst_26112);

(statearr_26148_26198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (21))){
var inst_26132 = (state_26139[(2)]);
var state_26139__$1 = (function (){var statearr_26149 = state_26139;
(statearr_26149[(9)] = inst_26132);

return statearr_26149;
})();
var statearr_26150_26199 = state_26139__$1;
(statearr_26150_26199[(2)] = null);

(statearr_26150_26199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (13))){
var inst_26094 = (state_26139[(10)]);
var inst_26096 = cljs.core.chunked_seq_QMARK_.call(null,inst_26094);
var state_26139__$1 = state_26139;
if(inst_26096){
var statearr_26151_26200 = state_26139__$1;
(statearr_26151_26200[(1)] = (16));

} else {
var statearr_26152_26201 = state_26139__$1;
(statearr_26152_26201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (22))){
var inst_26124 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
if(cljs.core.truth_(inst_26124)){
var statearr_26153_26202 = state_26139__$1;
(statearr_26153_26202[(1)] = (23));

} else {
var statearr_26154_26203 = state_26139__$1;
(statearr_26154_26203[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (6))){
var inst_26120 = (state_26139[(11)]);
var inst_26118 = (state_26139[(7)]);
var inst_26070 = (state_26139[(8)]);
var inst_26118__$1 = topic_fn.call(null,inst_26070);
var inst_26119 = cljs.core.deref.call(null,mults);
var inst_26120__$1 = cljs.core.get.call(null,inst_26119,inst_26118__$1);
var state_26139__$1 = (function (){var statearr_26155 = state_26139;
(statearr_26155[(11)] = inst_26120__$1);

(statearr_26155[(7)] = inst_26118__$1);

return statearr_26155;
})();
if(cljs.core.truth_(inst_26120__$1)){
var statearr_26156_26204 = state_26139__$1;
(statearr_26156_26204[(1)] = (19));

} else {
var statearr_26157_26205 = state_26139__$1;
(statearr_26157_26205[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (25))){
var inst_26129 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26158_26206 = state_26139__$1;
(statearr_26158_26206[(2)] = inst_26129);

(statearr_26158_26206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (17))){
var inst_26094 = (state_26139[(10)]);
var inst_26103 = cljs.core.first.call(null,inst_26094);
var inst_26104 = cljs.core.async.muxch_STAR_.call(null,inst_26103);
var inst_26105 = cljs.core.async.close_BANG_.call(null,inst_26104);
var inst_26106 = cljs.core.next.call(null,inst_26094);
var inst_26080 = inst_26106;
var inst_26081 = null;
var inst_26082 = (0);
var inst_26083 = (0);
var state_26139__$1 = (function (){var statearr_26159 = state_26139;
(statearr_26159[(12)] = inst_26105);

(statearr_26159[(13)] = inst_26082);

(statearr_26159[(14)] = inst_26081);

(statearr_26159[(15)] = inst_26083);

(statearr_26159[(16)] = inst_26080);

return statearr_26159;
})();
var statearr_26160_26207 = state_26139__$1;
(statearr_26160_26207[(2)] = null);

(statearr_26160_26207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (3))){
var inst_26137 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26139__$1,inst_26137);
} else {
if((state_val_26140 === (12))){
var inst_26114 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26161_26208 = state_26139__$1;
(statearr_26161_26208[(2)] = inst_26114);

(statearr_26161_26208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (2))){
var state_26139__$1 = state_26139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26139__$1,(4),ch);
} else {
if((state_val_26140 === (23))){
var state_26139__$1 = state_26139;
var statearr_26162_26209 = state_26139__$1;
(statearr_26162_26209[(2)] = null);

(statearr_26162_26209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (19))){
var inst_26120 = (state_26139[(11)]);
var inst_26070 = (state_26139[(8)]);
var inst_26122 = cljs.core.async.muxch_STAR_.call(null,inst_26120);
var state_26139__$1 = state_26139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26139__$1,(22),inst_26122,inst_26070);
} else {
if((state_val_26140 === (11))){
var inst_26094 = (state_26139[(10)]);
var inst_26080 = (state_26139[(16)]);
var inst_26094__$1 = cljs.core.seq.call(null,inst_26080);
var state_26139__$1 = (function (){var statearr_26163 = state_26139;
(statearr_26163[(10)] = inst_26094__$1);

return statearr_26163;
})();
if(inst_26094__$1){
var statearr_26164_26210 = state_26139__$1;
(statearr_26164_26210[(1)] = (13));

} else {
var statearr_26165_26211 = state_26139__$1;
(statearr_26165_26211[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (9))){
var inst_26116 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26166_26212 = state_26139__$1;
(statearr_26166_26212[(2)] = inst_26116);

(statearr_26166_26212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (5))){
var inst_26077 = cljs.core.deref.call(null,mults);
var inst_26078 = cljs.core.vals.call(null,inst_26077);
var inst_26079 = cljs.core.seq.call(null,inst_26078);
var inst_26080 = inst_26079;
var inst_26081 = null;
var inst_26082 = (0);
var inst_26083 = (0);
var state_26139__$1 = (function (){var statearr_26167 = state_26139;
(statearr_26167[(13)] = inst_26082);

(statearr_26167[(14)] = inst_26081);

(statearr_26167[(15)] = inst_26083);

(statearr_26167[(16)] = inst_26080);

return statearr_26167;
})();
var statearr_26168_26213 = state_26139__$1;
(statearr_26168_26213[(2)] = null);

(statearr_26168_26213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (14))){
var state_26139__$1 = state_26139;
var statearr_26172_26214 = state_26139__$1;
(statearr_26172_26214[(2)] = null);

(statearr_26172_26214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (16))){
var inst_26094 = (state_26139[(10)]);
var inst_26098 = cljs.core.chunk_first.call(null,inst_26094);
var inst_26099 = cljs.core.chunk_rest.call(null,inst_26094);
var inst_26100 = cljs.core.count.call(null,inst_26098);
var inst_26080 = inst_26099;
var inst_26081 = inst_26098;
var inst_26082 = inst_26100;
var inst_26083 = (0);
var state_26139__$1 = (function (){var statearr_26173 = state_26139;
(statearr_26173[(13)] = inst_26082);

(statearr_26173[(14)] = inst_26081);

(statearr_26173[(15)] = inst_26083);

(statearr_26173[(16)] = inst_26080);

return statearr_26173;
})();
var statearr_26174_26215 = state_26139__$1;
(statearr_26174_26215[(2)] = null);

(statearr_26174_26215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (10))){
var inst_26082 = (state_26139[(13)]);
var inst_26081 = (state_26139[(14)]);
var inst_26083 = (state_26139[(15)]);
var inst_26080 = (state_26139[(16)]);
var inst_26088 = cljs.core._nth.call(null,inst_26081,inst_26083);
var inst_26089 = cljs.core.async.muxch_STAR_.call(null,inst_26088);
var inst_26090 = cljs.core.async.close_BANG_.call(null,inst_26089);
var inst_26091 = (inst_26083 + (1));
var tmp26169 = inst_26082;
var tmp26170 = inst_26081;
var tmp26171 = inst_26080;
var inst_26080__$1 = tmp26171;
var inst_26081__$1 = tmp26170;
var inst_26082__$1 = tmp26169;
var inst_26083__$1 = inst_26091;
var state_26139__$1 = (function (){var statearr_26175 = state_26139;
(statearr_26175[(17)] = inst_26090);

(statearr_26175[(13)] = inst_26082__$1);

(statearr_26175[(14)] = inst_26081__$1);

(statearr_26175[(15)] = inst_26083__$1);

(statearr_26175[(16)] = inst_26080__$1);

return statearr_26175;
})();
var statearr_26176_26216 = state_26139__$1;
(statearr_26176_26216[(2)] = null);

(statearr_26176_26216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (18))){
var inst_26109 = (state_26139[(2)]);
var state_26139__$1 = state_26139;
var statearr_26177_26217 = state_26139__$1;
(statearr_26177_26217[(2)] = inst_26109);

(statearr_26177_26217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26140 === (8))){
var inst_26082 = (state_26139[(13)]);
var inst_26083 = (state_26139[(15)]);
var inst_26085 = (inst_26083 < inst_26082);
var inst_26086 = inst_26085;
var state_26139__$1 = state_26139;
if(cljs.core.truth_(inst_26086)){
var statearr_26178_26218 = state_26139__$1;
(statearr_26178_26218[(1)] = (10));

} else {
var statearr_26179_26219 = state_26139__$1;
(statearr_26179_26219[(1)] = (11));

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
});})(c__24292__auto___26191,mults,ensure_mult,p))
;
return ((function (switch__24180__auto__,c__24292__auto___26191,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24181__auto__ = null;
var cljs$core$async$state_machine__24181__auto____0 = (function (){
var statearr_26183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26183[(0)] = cljs$core$async$state_machine__24181__auto__);

(statearr_26183[(1)] = (1));

return statearr_26183;
});
var cljs$core$async$state_machine__24181__auto____1 = (function (state_26139){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_26139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e26184){if((e26184 instanceof Object)){
var ex__24184__auto__ = e26184;
var statearr_26185_26220 = state_26139;
(statearr_26185_26220[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26221 = state_26139;
state_26139 = G__26221;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$state_machine__24181__auto__ = function(state_26139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24181__auto____1.call(this,state_26139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24181__auto____0;
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24181__auto____1;
return cljs$core$async$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___26191,mults,ensure_mult,p))
})();
var state__24294__auto__ = (function (){var statearr_26186 = f__24293__auto__.call(null);
(statearr_26186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___26191);

return statearr_26186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___26191,mults,ensure_mult,p))
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
var args26222 = [];
var len__17809__auto___26225 = arguments.length;
var i__17810__auto___26226 = (0);
while(true){
if((i__17810__auto___26226 < len__17809__auto___26225)){
args26222.push((arguments[i__17810__auto___26226]));

var G__26227 = (i__17810__auto___26226 + (1));
i__17810__auto___26226 = G__26227;
continue;
} else {
}
break;
}

var G__26224 = args26222.length;
switch (G__26224) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26222.length)].join('')));

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
var args26229 = [];
var len__17809__auto___26232 = arguments.length;
var i__17810__auto___26233 = (0);
while(true){
if((i__17810__auto___26233 < len__17809__auto___26232)){
args26229.push((arguments[i__17810__auto___26233]));

var G__26234 = (i__17810__auto___26233 + (1));
i__17810__auto___26233 = G__26234;
continue;
} else {
}
break;
}

var G__26231 = args26229.length;
switch (G__26231) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26229.length)].join('')));

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
var args26236 = [];
var len__17809__auto___26307 = arguments.length;
var i__17810__auto___26308 = (0);
while(true){
if((i__17810__auto___26308 < len__17809__auto___26307)){
args26236.push((arguments[i__17810__auto___26308]));

var G__26309 = (i__17810__auto___26308 + (1));
i__17810__auto___26308 = G__26309;
continue;
} else {
}
break;
}

var G__26238 = args26236.length;
switch (G__26238) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26236.length)].join('')));

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
var c__24292__auto___26311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___26311,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___26311,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26277){
var state_val_26278 = (state_26277[(1)]);
if((state_val_26278 === (7))){
var state_26277__$1 = state_26277;
var statearr_26279_26312 = state_26277__$1;
(statearr_26279_26312[(2)] = null);

(statearr_26279_26312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (1))){
var state_26277__$1 = state_26277;
var statearr_26280_26313 = state_26277__$1;
(statearr_26280_26313[(2)] = null);

(statearr_26280_26313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (4))){
var inst_26241 = (state_26277[(7)]);
var inst_26243 = (inst_26241 < cnt);
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26243)){
var statearr_26281_26314 = state_26277__$1;
(statearr_26281_26314[(1)] = (6));

} else {
var statearr_26282_26315 = state_26277__$1;
(statearr_26282_26315[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (15))){
var inst_26273 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26283_26316 = state_26277__$1;
(statearr_26283_26316[(2)] = inst_26273);

(statearr_26283_26316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (13))){
var inst_26266 = cljs.core.async.close_BANG_.call(null,out);
var state_26277__$1 = state_26277;
var statearr_26284_26317 = state_26277__$1;
(statearr_26284_26317[(2)] = inst_26266);

(statearr_26284_26317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (6))){
var state_26277__$1 = state_26277;
var statearr_26285_26318 = state_26277__$1;
(statearr_26285_26318[(2)] = null);

(statearr_26285_26318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (3))){
var inst_26275 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26277__$1,inst_26275);
} else {
if((state_val_26278 === (12))){
var inst_26263 = (state_26277[(8)]);
var inst_26263__$1 = (state_26277[(2)]);
var inst_26264 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26263__$1);
var state_26277__$1 = (function (){var statearr_26286 = state_26277;
(statearr_26286[(8)] = inst_26263__$1);

return statearr_26286;
})();
if(cljs.core.truth_(inst_26264)){
var statearr_26287_26319 = state_26277__$1;
(statearr_26287_26319[(1)] = (13));

} else {
var statearr_26288_26320 = state_26277__$1;
(statearr_26288_26320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (2))){
var inst_26240 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26241 = (0);
var state_26277__$1 = (function (){var statearr_26289 = state_26277;
(statearr_26289[(9)] = inst_26240);

(statearr_26289[(7)] = inst_26241);

return statearr_26289;
})();
var statearr_26290_26321 = state_26277__$1;
(statearr_26290_26321[(2)] = null);

(statearr_26290_26321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (11))){
var inst_26241 = (state_26277[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26277,(10),Object,null,(9));
var inst_26250 = chs__$1.call(null,inst_26241);
var inst_26251 = done.call(null,inst_26241);
var inst_26252 = cljs.core.async.take_BANG_.call(null,inst_26250,inst_26251);
var state_26277__$1 = state_26277;
var statearr_26291_26322 = state_26277__$1;
(statearr_26291_26322[(2)] = inst_26252);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (9))){
var inst_26241 = (state_26277[(7)]);
var inst_26254 = (state_26277[(2)]);
var inst_26255 = (inst_26241 + (1));
var inst_26241__$1 = inst_26255;
var state_26277__$1 = (function (){var statearr_26292 = state_26277;
(statearr_26292[(10)] = inst_26254);

(statearr_26292[(7)] = inst_26241__$1);

return statearr_26292;
})();
var statearr_26293_26323 = state_26277__$1;
(statearr_26293_26323[(2)] = null);

(statearr_26293_26323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (5))){
var inst_26261 = (state_26277[(2)]);
var state_26277__$1 = (function (){var statearr_26294 = state_26277;
(statearr_26294[(11)] = inst_26261);

return statearr_26294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26277__$1,(12),dchan);
} else {
if((state_val_26278 === (14))){
var inst_26263 = (state_26277[(8)]);
var inst_26268 = cljs.core.apply.call(null,f,inst_26263);
var state_26277__$1 = state_26277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26277__$1,(16),out,inst_26268);
} else {
if((state_val_26278 === (16))){
var inst_26270 = (state_26277[(2)]);
var state_26277__$1 = (function (){var statearr_26295 = state_26277;
(statearr_26295[(12)] = inst_26270);

return statearr_26295;
})();
var statearr_26296_26324 = state_26277__$1;
(statearr_26296_26324[(2)] = null);

(statearr_26296_26324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (10))){
var inst_26245 = (state_26277[(2)]);
var inst_26246 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26277__$1 = (function (){var statearr_26297 = state_26277;
(statearr_26297[(13)] = inst_26245);

return statearr_26297;
})();
var statearr_26298_26325 = state_26277__$1;
(statearr_26298_26325[(2)] = inst_26246);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (8))){
var inst_26259 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26299_26326 = state_26277__$1;
(statearr_26299_26326[(2)] = inst_26259);

(statearr_26299_26326[(1)] = (5));


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
});})(c__24292__auto___26311,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24180__auto__,c__24292__auto___26311,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24181__auto__ = null;
var cljs$core$async$state_machine__24181__auto____0 = (function (){
var statearr_26303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26303[(0)] = cljs$core$async$state_machine__24181__auto__);

(statearr_26303[(1)] = (1));

return statearr_26303;
});
var cljs$core$async$state_machine__24181__auto____1 = (function (state_26277){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_26277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e26304){if((e26304 instanceof Object)){
var ex__24184__auto__ = e26304;
var statearr_26305_26327 = state_26277;
(statearr_26305_26327[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26328 = state_26277;
state_26277 = G__26328;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$state_machine__24181__auto__ = function(state_26277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24181__auto____1.call(this,state_26277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24181__auto____0;
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24181__auto____1;
return cljs$core$async$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___26311,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24294__auto__ = (function (){var statearr_26306 = f__24293__auto__.call(null);
(statearr_26306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___26311);

return statearr_26306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___26311,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26330 = [];
var len__17809__auto___26386 = arguments.length;
var i__17810__auto___26387 = (0);
while(true){
if((i__17810__auto___26387 < len__17809__auto___26386)){
args26330.push((arguments[i__17810__auto___26387]));

var G__26388 = (i__17810__auto___26387 + (1));
i__17810__auto___26387 = G__26388;
continue;
} else {
}
break;
}

var G__26332 = args26330.length;
switch (G__26332) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26330.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24292__auto___26390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___26390,out){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___26390,out){
return (function (state_26362){
var state_val_26363 = (state_26362[(1)]);
if((state_val_26363 === (7))){
var inst_26342 = (state_26362[(7)]);
var inst_26341 = (state_26362[(8)]);
var inst_26341__$1 = (state_26362[(2)]);
var inst_26342__$1 = cljs.core.nth.call(null,inst_26341__$1,(0),null);
var inst_26343 = cljs.core.nth.call(null,inst_26341__$1,(1),null);
var inst_26344 = (inst_26342__$1 == null);
var state_26362__$1 = (function (){var statearr_26364 = state_26362;
(statearr_26364[(7)] = inst_26342__$1);

(statearr_26364[(9)] = inst_26343);

(statearr_26364[(8)] = inst_26341__$1);

return statearr_26364;
})();
if(cljs.core.truth_(inst_26344)){
var statearr_26365_26391 = state_26362__$1;
(statearr_26365_26391[(1)] = (8));

} else {
var statearr_26366_26392 = state_26362__$1;
(statearr_26366_26392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (1))){
var inst_26333 = cljs.core.vec.call(null,chs);
var inst_26334 = inst_26333;
var state_26362__$1 = (function (){var statearr_26367 = state_26362;
(statearr_26367[(10)] = inst_26334);

return statearr_26367;
})();
var statearr_26368_26393 = state_26362__$1;
(statearr_26368_26393[(2)] = null);

(statearr_26368_26393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (4))){
var inst_26334 = (state_26362[(10)]);
var state_26362__$1 = state_26362;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26362__$1,(7),inst_26334);
} else {
if((state_val_26363 === (6))){
var inst_26358 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
var statearr_26369_26394 = state_26362__$1;
(statearr_26369_26394[(2)] = inst_26358);

(statearr_26369_26394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (3))){
var inst_26360 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26362__$1,inst_26360);
} else {
if((state_val_26363 === (2))){
var inst_26334 = (state_26362[(10)]);
var inst_26336 = cljs.core.count.call(null,inst_26334);
var inst_26337 = (inst_26336 > (0));
var state_26362__$1 = state_26362;
if(cljs.core.truth_(inst_26337)){
var statearr_26371_26395 = state_26362__$1;
(statearr_26371_26395[(1)] = (4));

} else {
var statearr_26372_26396 = state_26362__$1;
(statearr_26372_26396[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (11))){
var inst_26334 = (state_26362[(10)]);
var inst_26351 = (state_26362[(2)]);
var tmp26370 = inst_26334;
var inst_26334__$1 = tmp26370;
var state_26362__$1 = (function (){var statearr_26373 = state_26362;
(statearr_26373[(10)] = inst_26334__$1);

(statearr_26373[(11)] = inst_26351);

return statearr_26373;
})();
var statearr_26374_26397 = state_26362__$1;
(statearr_26374_26397[(2)] = null);

(statearr_26374_26397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (9))){
var inst_26342 = (state_26362[(7)]);
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26362__$1,(11),out,inst_26342);
} else {
if((state_val_26363 === (5))){
var inst_26356 = cljs.core.async.close_BANG_.call(null,out);
var state_26362__$1 = state_26362;
var statearr_26375_26398 = state_26362__$1;
(statearr_26375_26398[(2)] = inst_26356);

(statearr_26375_26398[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (10))){
var inst_26354 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
var statearr_26376_26399 = state_26362__$1;
(statearr_26376_26399[(2)] = inst_26354);

(statearr_26376_26399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (8))){
var inst_26334 = (state_26362[(10)]);
var inst_26342 = (state_26362[(7)]);
var inst_26343 = (state_26362[(9)]);
var inst_26341 = (state_26362[(8)]);
var inst_26346 = (function (){var cs = inst_26334;
var vec__26339 = inst_26341;
var v = inst_26342;
var c = inst_26343;
return ((function (cs,vec__26339,v,c,inst_26334,inst_26342,inst_26343,inst_26341,state_val_26363,c__24292__auto___26390,out){
return (function (p1__26329_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26329_SHARP_);
});
;})(cs,vec__26339,v,c,inst_26334,inst_26342,inst_26343,inst_26341,state_val_26363,c__24292__auto___26390,out))
})();
var inst_26347 = cljs.core.filterv.call(null,inst_26346,inst_26334);
var inst_26334__$1 = inst_26347;
var state_26362__$1 = (function (){var statearr_26377 = state_26362;
(statearr_26377[(10)] = inst_26334__$1);

return statearr_26377;
})();
var statearr_26378_26400 = state_26362__$1;
(statearr_26378_26400[(2)] = null);

(statearr_26378_26400[(1)] = (2));


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
});})(c__24292__auto___26390,out))
;
return ((function (switch__24180__auto__,c__24292__auto___26390,out){
return (function() {
var cljs$core$async$state_machine__24181__auto__ = null;
var cljs$core$async$state_machine__24181__auto____0 = (function (){
var statearr_26382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26382[(0)] = cljs$core$async$state_machine__24181__auto__);

(statearr_26382[(1)] = (1));

return statearr_26382;
});
var cljs$core$async$state_machine__24181__auto____1 = (function (state_26362){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_26362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e26383){if((e26383 instanceof Object)){
var ex__24184__auto__ = e26383;
var statearr_26384_26401 = state_26362;
(statearr_26384_26401[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26402 = state_26362;
state_26362 = G__26402;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$state_machine__24181__auto__ = function(state_26362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24181__auto____1.call(this,state_26362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24181__auto____0;
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24181__auto____1;
return cljs$core$async$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___26390,out))
})();
var state__24294__auto__ = (function (){var statearr_26385 = f__24293__auto__.call(null);
(statearr_26385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___26390);

return statearr_26385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___26390,out))
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
var args26403 = [];
var len__17809__auto___26452 = arguments.length;
var i__17810__auto___26453 = (0);
while(true){
if((i__17810__auto___26453 < len__17809__auto___26452)){
args26403.push((arguments[i__17810__auto___26453]));

var G__26454 = (i__17810__auto___26453 + (1));
i__17810__auto___26453 = G__26454;
continue;
} else {
}
break;
}

var G__26405 = args26403.length;
switch (G__26405) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26403.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24292__auto___26456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___26456,out){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___26456,out){
return (function (state_26429){
var state_val_26430 = (state_26429[(1)]);
if((state_val_26430 === (7))){
var inst_26411 = (state_26429[(7)]);
var inst_26411__$1 = (state_26429[(2)]);
var inst_26412 = (inst_26411__$1 == null);
var inst_26413 = cljs.core.not.call(null,inst_26412);
var state_26429__$1 = (function (){var statearr_26431 = state_26429;
(statearr_26431[(7)] = inst_26411__$1);

return statearr_26431;
})();
if(inst_26413){
var statearr_26432_26457 = state_26429__$1;
(statearr_26432_26457[(1)] = (8));

} else {
var statearr_26433_26458 = state_26429__$1;
(statearr_26433_26458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (1))){
var inst_26406 = (0);
var state_26429__$1 = (function (){var statearr_26434 = state_26429;
(statearr_26434[(8)] = inst_26406);

return statearr_26434;
})();
var statearr_26435_26459 = state_26429__$1;
(statearr_26435_26459[(2)] = null);

(statearr_26435_26459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (4))){
var state_26429__$1 = state_26429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26429__$1,(7),ch);
} else {
if((state_val_26430 === (6))){
var inst_26424 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
var statearr_26436_26460 = state_26429__$1;
(statearr_26436_26460[(2)] = inst_26424);

(statearr_26436_26460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (3))){
var inst_26426 = (state_26429[(2)]);
var inst_26427 = cljs.core.async.close_BANG_.call(null,out);
var state_26429__$1 = (function (){var statearr_26437 = state_26429;
(statearr_26437[(9)] = inst_26426);

return statearr_26437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26429__$1,inst_26427);
} else {
if((state_val_26430 === (2))){
var inst_26406 = (state_26429[(8)]);
var inst_26408 = (inst_26406 < n);
var state_26429__$1 = state_26429;
if(cljs.core.truth_(inst_26408)){
var statearr_26438_26461 = state_26429__$1;
(statearr_26438_26461[(1)] = (4));

} else {
var statearr_26439_26462 = state_26429__$1;
(statearr_26439_26462[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (11))){
var inst_26406 = (state_26429[(8)]);
var inst_26416 = (state_26429[(2)]);
var inst_26417 = (inst_26406 + (1));
var inst_26406__$1 = inst_26417;
var state_26429__$1 = (function (){var statearr_26440 = state_26429;
(statearr_26440[(8)] = inst_26406__$1);

(statearr_26440[(10)] = inst_26416);

return statearr_26440;
})();
var statearr_26441_26463 = state_26429__$1;
(statearr_26441_26463[(2)] = null);

(statearr_26441_26463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (9))){
var state_26429__$1 = state_26429;
var statearr_26442_26464 = state_26429__$1;
(statearr_26442_26464[(2)] = null);

(statearr_26442_26464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (5))){
var state_26429__$1 = state_26429;
var statearr_26443_26465 = state_26429__$1;
(statearr_26443_26465[(2)] = null);

(statearr_26443_26465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (10))){
var inst_26421 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
var statearr_26444_26466 = state_26429__$1;
(statearr_26444_26466[(2)] = inst_26421);

(statearr_26444_26466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (8))){
var inst_26411 = (state_26429[(7)]);
var state_26429__$1 = state_26429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26429__$1,(11),out,inst_26411);
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
});})(c__24292__auto___26456,out))
;
return ((function (switch__24180__auto__,c__24292__auto___26456,out){
return (function() {
var cljs$core$async$state_machine__24181__auto__ = null;
var cljs$core$async$state_machine__24181__auto____0 = (function (){
var statearr_26448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26448[(0)] = cljs$core$async$state_machine__24181__auto__);

(statearr_26448[(1)] = (1));

return statearr_26448;
});
var cljs$core$async$state_machine__24181__auto____1 = (function (state_26429){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_26429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e26449){if((e26449 instanceof Object)){
var ex__24184__auto__ = e26449;
var statearr_26450_26467 = state_26429;
(statearr_26450_26467[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26468 = state_26429;
state_26429 = G__26468;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$state_machine__24181__auto__ = function(state_26429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24181__auto____1.call(this,state_26429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24181__auto____0;
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24181__auto____1;
return cljs$core$async$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___26456,out))
})();
var state__24294__auto__ = (function (){var statearr_26451 = f__24293__auto__.call(null);
(statearr_26451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___26456);

return statearr_26451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___26456,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26476 = (function (map_LT_,f,ch,meta26477){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26477 = meta26477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26478,meta26477__$1){
var self__ = this;
var _26478__$1 = this;
return (new cljs.core.async.t_cljs$core$async26476(self__.map_LT_,self__.f,self__.ch,meta26477__$1));
});

cljs.core.async.t_cljs$core$async26476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26478){
var self__ = this;
var _26478__$1 = this;
return self__.meta26477;
});

cljs.core.async.t_cljs$core$async26476.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26476.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26476.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26476.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26476.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26479 = (function (map_LT_,f,ch,meta26477,_,fn1,meta26480){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26477 = meta26477;
this._ = _;
this.fn1 = fn1;
this.meta26480 = meta26480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26481,meta26480__$1){
var self__ = this;
var _26481__$1 = this;
return (new cljs.core.async.t_cljs$core$async26479(self__.map_LT_,self__.f,self__.ch,self__.meta26477,self__._,self__.fn1,meta26480__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26481){
var self__ = this;
var _26481__$1 = this;
return self__.meta26480;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26479.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26469_SHARP_){
return f1.call(null,(((p1__26469_SHARP_ == null))?null:self__.f.call(null,p1__26469_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26479.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26477","meta26477",361714426,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26476","cljs.core.async/t_cljs$core$async26476",-1289197950,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26480","meta26480",964679329,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26479";

cljs.core.async.t_cljs$core$async26479.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26479");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26479 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26479(map_LT___$1,f__$1,ch__$1,meta26477__$1,___$2,fn1__$1,meta26480){
return (new cljs.core.async.t_cljs$core$async26479(map_LT___$1,f__$1,ch__$1,meta26477__$1,___$2,fn1__$1,meta26480));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26479(self__.map_LT_,self__.f,self__.ch,self__.meta26477,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26476.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26476.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26477","meta26477",361714426,null)], null);
});

cljs.core.async.t_cljs$core$async26476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26476";

cljs.core.async.t_cljs$core$async26476.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26476");
});

cljs.core.async.__GT_t_cljs$core$async26476 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26476(map_LT___$1,f__$1,ch__$1,meta26477){
return (new cljs.core.async.t_cljs$core$async26476(map_LT___$1,f__$1,ch__$1,meta26477));
});

}

return (new cljs.core.async.t_cljs$core$async26476(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26485 = (function (map_GT_,f,ch,meta26486){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26486 = meta26486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26487,meta26486__$1){
var self__ = this;
var _26487__$1 = this;
return (new cljs.core.async.t_cljs$core$async26485(self__.map_GT_,self__.f,self__.ch,meta26486__$1));
});

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26487){
var self__ = this;
var _26487__$1 = this;
return self__.meta26486;
});

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26486","meta26486",-1683382261,null)], null);
});

cljs.core.async.t_cljs$core$async26485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26485";

cljs.core.async.t_cljs$core$async26485.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26485");
});

cljs.core.async.__GT_t_cljs$core$async26485 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26485(map_GT___$1,f__$1,ch__$1,meta26486){
return (new cljs.core.async.t_cljs$core$async26485(map_GT___$1,f__$1,ch__$1,meta26486));
});

}

return (new cljs.core.async.t_cljs$core$async26485(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26491 = (function (filter_GT_,p,ch,meta26492){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26492 = meta26492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26493,meta26492__$1){
var self__ = this;
var _26493__$1 = this;
return (new cljs.core.async.t_cljs$core$async26491(self__.filter_GT_,self__.p,self__.ch,meta26492__$1));
});

cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26493){
var self__ = this;
var _26493__$1 = this;
return self__.meta26492;
});

cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26492","meta26492",1404077416,null)], null);
});

cljs.core.async.t_cljs$core$async26491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26491";

cljs.core.async.t_cljs$core$async26491.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26491");
});

cljs.core.async.__GT_t_cljs$core$async26491 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26491(filter_GT___$1,p__$1,ch__$1,meta26492){
return (new cljs.core.async.t_cljs$core$async26491(filter_GT___$1,p__$1,ch__$1,meta26492));
});

}

return (new cljs.core.async.t_cljs$core$async26491(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26494 = [];
var len__17809__auto___26538 = arguments.length;
var i__17810__auto___26539 = (0);
while(true){
if((i__17810__auto___26539 < len__17809__auto___26538)){
args26494.push((arguments[i__17810__auto___26539]));

var G__26540 = (i__17810__auto___26539 + (1));
i__17810__auto___26539 = G__26540;
continue;
} else {
}
break;
}

var G__26496 = args26494.length;
switch (G__26496) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26494.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24292__auto___26542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___26542,out){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___26542,out){
return (function (state_26517){
var state_val_26518 = (state_26517[(1)]);
if((state_val_26518 === (7))){
var inst_26513 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26519_26543 = state_26517__$1;
(statearr_26519_26543[(2)] = inst_26513);

(statearr_26519_26543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (1))){
var state_26517__$1 = state_26517;
var statearr_26520_26544 = state_26517__$1;
(statearr_26520_26544[(2)] = null);

(statearr_26520_26544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (4))){
var inst_26499 = (state_26517[(7)]);
var inst_26499__$1 = (state_26517[(2)]);
var inst_26500 = (inst_26499__$1 == null);
var state_26517__$1 = (function (){var statearr_26521 = state_26517;
(statearr_26521[(7)] = inst_26499__$1);

return statearr_26521;
})();
if(cljs.core.truth_(inst_26500)){
var statearr_26522_26545 = state_26517__$1;
(statearr_26522_26545[(1)] = (5));

} else {
var statearr_26523_26546 = state_26517__$1;
(statearr_26523_26546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (6))){
var inst_26499 = (state_26517[(7)]);
var inst_26504 = p.call(null,inst_26499);
var state_26517__$1 = state_26517;
if(cljs.core.truth_(inst_26504)){
var statearr_26524_26547 = state_26517__$1;
(statearr_26524_26547[(1)] = (8));

} else {
var statearr_26525_26548 = state_26517__$1;
(statearr_26525_26548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (3))){
var inst_26515 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26517__$1,inst_26515);
} else {
if((state_val_26518 === (2))){
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26517__$1,(4),ch);
} else {
if((state_val_26518 === (11))){
var inst_26507 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26526_26549 = state_26517__$1;
(statearr_26526_26549[(2)] = inst_26507);

(statearr_26526_26549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (9))){
var state_26517__$1 = state_26517;
var statearr_26527_26550 = state_26517__$1;
(statearr_26527_26550[(2)] = null);

(statearr_26527_26550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (5))){
var inst_26502 = cljs.core.async.close_BANG_.call(null,out);
var state_26517__$1 = state_26517;
var statearr_26528_26551 = state_26517__$1;
(statearr_26528_26551[(2)] = inst_26502);

(statearr_26528_26551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (10))){
var inst_26510 = (state_26517[(2)]);
var state_26517__$1 = (function (){var statearr_26529 = state_26517;
(statearr_26529[(8)] = inst_26510);

return statearr_26529;
})();
var statearr_26530_26552 = state_26517__$1;
(statearr_26530_26552[(2)] = null);

(statearr_26530_26552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (8))){
var inst_26499 = (state_26517[(7)]);
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26517__$1,(11),out,inst_26499);
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
});})(c__24292__auto___26542,out))
;
return ((function (switch__24180__auto__,c__24292__auto___26542,out){
return (function() {
var cljs$core$async$state_machine__24181__auto__ = null;
var cljs$core$async$state_machine__24181__auto____0 = (function (){
var statearr_26534 = [null,null,null,null,null,null,null,null,null];
(statearr_26534[(0)] = cljs$core$async$state_machine__24181__auto__);

(statearr_26534[(1)] = (1));

return statearr_26534;
});
var cljs$core$async$state_machine__24181__auto____1 = (function (state_26517){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_26517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e26535){if((e26535 instanceof Object)){
var ex__24184__auto__ = e26535;
var statearr_26536_26553 = state_26517;
(statearr_26536_26553[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26554 = state_26517;
state_26517 = G__26554;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$state_machine__24181__auto__ = function(state_26517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24181__auto____1.call(this,state_26517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24181__auto____0;
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24181__auto____1;
return cljs$core$async$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___26542,out))
})();
var state__24294__auto__ = (function (){var statearr_26537 = f__24293__auto__.call(null);
(statearr_26537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___26542);

return statearr_26537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___26542,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26555 = [];
var len__17809__auto___26558 = arguments.length;
var i__17810__auto___26559 = (0);
while(true){
if((i__17810__auto___26559 < len__17809__auto___26558)){
args26555.push((arguments[i__17810__auto___26559]));

var G__26560 = (i__17810__auto___26559 + (1));
i__17810__auto___26559 = G__26560;
continue;
} else {
}
break;
}

var G__26557 = args26555.length;
switch (G__26557) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26555.length)].join('')));

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
var c__24292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto__){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto__){
return (function (state_26727){
var state_val_26728 = (state_26727[(1)]);
if((state_val_26728 === (7))){
var inst_26723 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26729_26770 = state_26727__$1;
(statearr_26729_26770[(2)] = inst_26723);

(statearr_26729_26770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (20))){
var inst_26693 = (state_26727[(7)]);
var inst_26704 = (state_26727[(2)]);
var inst_26705 = cljs.core.next.call(null,inst_26693);
var inst_26679 = inst_26705;
var inst_26680 = null;
var inst_26681 = (0);
var inst_26682 = (0);
var state_26727__$1 = (function (){var statearr_26730 = state_26727;
(statearr_26730[(8)] = inst_26682);

(statearr_26730[(9)] = inst_26681);

(statearr_26730[(10)] = inst_26680);

(statearr_26730[(11)] = inst_26679);

(statearr_26730[(12)] = inst_26704);

return statearr_26730;
})();
var statearr_26731_26771 = state_26727__$1;
(statearr_26731_26771[(2)] = null);

(statearr_26731_26771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (1))){
var state_26727__$1 = state_26727;
var statearr_26732_26772 = state_26727__$1;
(statearr_26732_26772[(2)] = null);

(statearr_26732_26772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (4))){
var inst_26668 = (state_26727[(13)]);
var inst_26668__$1 = (state_26727[(2)]);
var inst_26669 = (inst_26668__$1 == null);
var state_26727__$1 = (function (){var statearr_26733 = state_26727;
(statearr_26733[(13)] = inst_26668__$1);

return statearr_26733;
})();
if(cljs.core.truth_(inst_26669)){
var statearr_26734_26773 = state_26727__$1;
(statearr_26734_26773[(1)] = (5));

} else {
var statearr_26735_26774 = state_26727__$1;
(statearr_26735_26774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (15))){
var state_26727__$1 = state_26727;
var statearr_26739_26775 = state_26727__$1;
(statearr_26739_26775[(2)] = null);

(statearr_26739_26775[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (21))){
var state_26727__$1 = state_26727;
var statearr_26740_26776 = state_26727__$1;
(statearr_26740_26776[(2)] = null);

(statearr_26740_26776[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (13))){
var inst_26682 = (state_26727[(8)]);
var inst_26681 = (state_26727[(9)]);
var inst_26680 = (state_26727[(10)]);
var inst_26679 = (state_26727[(11)]);
var inst_26689 = (state_26727[(2)]);
var inst_26690 = (inst_26682 + (1));
var tmp26736 = inst_26681;
var tmp26737 = inst_26680;
var tmp26738 = inst_26679;
var inst_26679__$1 = tmp26738;
var inst_26680__$1 = tmp26737;
var inst_26681__$1 = tmp26736;
var inst_26682__$1 = inst_26690;
var state_26727__$1 = (function (){var statearr_26741 = state_26727;
(statearr_26741[(8)] = inst_26682__$1);

(statearr_26741[(9)] = inst_26681__$1);

(statearr_26741[(10)] = inst_26680__$1);

(statearr_26741[(14)] = inst_26689);

(statearr_26741[(11)] = inst_26679__$1);

return statearr_26741;
})();
var statearr_26742_26777 = state_26727__$1;
(statearr_26742_26777[(2)] = null);

(statearr_26742_26777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (22))){
var state_26727__$1 = state_26727;
var statearr_26743_26778 = state_26727__$1;
(statearr_26743_26778[(2)] = null);

(statearr_26743_26778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (6))){
var inst_26668 = (state_26727[(13)]);
var inst_26677 = f.call(null,inst_26668);
var inst_26678 = cljs.core.seq.call(null,inst_26677);
var inst_26679 = inst_26678;
var inst_26680 = null;
var inst_26681 = (0);
var inst_26682 = (0);
var state_26727__$1 = (function (){var statearr_26744 = state_26727;
(statearr_26744[(8)] = inst_26682);

(statearr_26744[(9)] = inst_26681);

(statearr_26744[(10)] = inst_26680);

(statearr_26744[(11)] = inst_26679);

return statearr_26744;
})();
var statearr_26745_26779 = state_26727__$1;
(statearr_26745_26779[(2)] = null);

(statearr_26745_26779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (17))){
var inst_26693 = (state_26727[(7)]);
var inst_26697 = cljs.core.chunk_first.call(null,inst_26693);
var inst_26698 = cljs.core.chunk_rest.call(null,inst_26693);
var inst_26699 = cljs.core.count.call(null,inst_26697);
var inst_26679 = inst_26698;
var inst_26680 = inst_26697;
var inst_26681 = inst_26699;
var inst_26682 = (0);
var state_26727__$1 = (function (){var statearr_26746 = state_26727;
(statearr_26746[(8)] = inst_26682);

(statearr_26746[(9)] = inst_26681);

(statearr_26746[(10)] = inst_26680);

(statearr_26746[(11)] = inst_26679);

return statearr_26746;
})();
var statearr_26747_26780 = state_26727__$1;
(statearr_26747_26780[(2)] = null);

(statearr_26747_26780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (3))){
var inst_26725 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26727__$1,inst_26725);
} else {
if((state_val_26728 === (12))){
var inst_26713 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26748_26781 = state_26727__$1;
(statearr_26748_26781[(2)] = inst_26713);

(statearr_26748_26781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (2))){
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26727__$1,(4),in$);
} else {
if((state_val_26728 === (23))){
var inst_26721 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26749_26782 = state_26727__$1;
(statearr_26749_26782[(2)] = inst_26721);

(statearr_26749_26782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (19))){
var inst_26708 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26750_26783 = state_26727__$1;
(statearr_26750_26783[(2)] = inst_26708);

(statearr_26750_26783[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (11))){
var inst_26693 = (state_26727[(7)]);
var inst_26679 = (state_26727[(11)]);
var inst_26693__$1 = cljs.core.seq.call(null,inst_26679);
var state_26727__$1 = (function (){var statearr_26751 = state_26727;
(statearr_26751[(7)] = inst_26693__$1);

return statearr_26751;
})();
if(inst_26693__$1){
var statearr_26752_26784 = state_26727__$1;
(statearr_26752_26784[(1)] = (14));

} else {
var statearr_26753_26785 = state_26727__$1;
(statearr_26753_26785[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (9))){
var inst_26715 = (state_26727[(2)]);
var inst_26716 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26727__$1 = (function (){var statearr_26754 = state_26727;
(statearr_26754[(15)] = inst_26715);

return statearr_26754;
})();
if(cljs.core.truth_(inst_26716)){
var statearr_26755_26786 = state_26727__$1;
(statearr_26755_26786[(1)] = (21));

} else {
var statearr_26756_26787 = state_26727__$1;
(statearr_26756_26787[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (5))){
var inst_26671 = cljs.core.async.close_BANG_.call(null,out);
var state_26727__$1 = state_26727;
var statearr_26757_26788 = state_26727__$1;
(statearr_26757_26788[(2)] = inst_26671);

(statearr_26757_26788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (14))){
var inst_26693 = (state_26727[(7)]);
var inst_26695 = cljs.core.chunked_seq_QMARK_.call(null,inst_26693);
var state_26727__$1 = state_26727;
if(inst_26695){
var statearr_26758_26789 = state_26727__$1;
(statearr_26758_26789[(1)] = (17));

} else {
var statearr_26759_26790 = state_26727__$1;
(statearr_26759_26790[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (16))){
var inst_26711 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26760_26791 = state_26727__$1;
(statearr_26760_26791[(2)] = inst_26711);

(statearr_26760_26791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (10))){
var inst_26682 = (state_26727[(8)]);
var inst_26680 = (state_26727[(10)]);
var inst_26687 = cljs.core._nth.call(null,inst_26680,inst_26682);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26727__$1,(13),out,inst_26687);
} else {
if((state_val_26728 === (18))){
var inst_26693 = (state_26727[(7)]);
var inst_26702 = cljs.core.first.call(null,inst_26693);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26727__$1,(20),out,inst_26702);
} else {
if((state_val_26728 === (8))){
var inst_26682 = (state_26727[(8)]);
var inst_26681 = (state_26727[(9)]);
var inst_26684 = (inst_26682 < inst_26681);
var inst_26685 = inst_26684;
var state_26727__$1 = state_26727;
if(cljs.core.truth_(inst_26685)){
var statearr_26761_26792 = state_26727__$1;
(statearr_26761_26792[(1)] = (10));

} else {
var statearr_26762_26793 = state_26727__$1;
(statearr_26762_26793[(1)] = (11));

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
});})(c__24292__auto__))
;
return ((function (switch__24180__auto__,c__24292__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24181__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24181__auto____0 = (function (){
var statearr_26766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26766[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24181__auto__);

(statearr_26766[(1)] = (1));

return statearr_26766;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24181__auto____1 = (function (state_26727){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_26727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e26767){if((e26767 instanceof Object)){
var ex__24184__auto__ = e26767;
var statearr_26768_26794 = state_26727;
(statearr_26768_26794[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26795 = state_26727;
state_26727 = G__26795;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24181__auto__ = function(state_26727){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24181__auto____1.call(this,state_26727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24181__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24181__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto__))
})();
var state__24294__auto__ = (function (){var statearr_26769 = f__24293__auto__.call(null);
(statearr_26769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto__);

return statearr_26769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto__))
);

return c__24292__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26796 = [];
var len__17809__auto___26799 = arguments.length;
var i__17810__auto___26800 = (0);
while(true){
if((i__17810__auto___26800 < len__17809__auto___26799)){
args26796.push((arguments[i__17810__auto___26800]));

var G__26801 = (i__17810__auto___26800 + (1));
i__17810__auto___26800 = G__26801;
continue;
} else {
}
break;
}

var G__26798 = args26796.length;
switch (G__26798) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26796.length)].join('')));

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
var args26803 = [];
var len__17809__auto___26806 = arguments.length;
var i__17810__auto___26807 = (0);
while(true){
if((i__17810__auto___26807 < len__17809__auto___26806)){
args26803.push((arguments[i__17810__auto___26807]));

var G__26808 = (i__17810__auto___26807 + (1));
i__17810__auto___26807 = G__26808;
continue;
} else {
}
break;
}

var G__26805 = args26803.length;
switch (G__26805) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26803.length)].join('')));

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
var args26810 = [];
var len__17809__auto___26861 = arguments.length;
var i__17810__auto___26862 = (0);
while(true){
if((i__17810__auto___26862 < len__17809__auto___26861)){
args26810.push((arguments[i__17810__auto___26862]));

var G__26863 = (i__17810__auto___26862 + (1));
i__17810__auto___26862 = G__26863;
continue;
} else {
}
break;
}

var G__26812 = args26810.length;
switch (G__26812) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26810.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24292__auto___26865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___26865,out){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___26865,out){
return (function (state_26836){
var state_val_26837 = (state_26836[(1)]);
if((state_val_26837 === (7))){
var inst_26831 = (state_26836[(2)]);
var state_26836__$1 = state_26836;
var statearr_26838_26866 = state_26836__$1;
(statearr_26838_26866[(2)] = inst_26831);

(statearr_26838_26866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26837 === (1))){
var inst_26813 = null;
var state_26836__$1 = (function (){var statearr_26839 = state_26836;
(statearr_26839[(7)] = inst_26813);

return statearr_26839;
})();
var statearr_26840_26867 = state_26836__$1;
(statearr_26840_26867[(2)] = null);

(statearr_26840_26867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26837 === (4))){
var inst_26816 = (state_26836[(8)]);
var inst_26816__$1 = (state_26836[(2)]);
var inst_26817 = (inst_26816__$1 == null);
var inst_26818 = cljs.core.not.call(null,inst_26817);
var state_26836__$1 = (function (){var statearr_26841 = state_26836;
(statearr_26841[(8)] = inst_26816__$1);

return statearr_26841;
})();
if(inst_26818){
var statearr_26842_26868 = state_26836__$1;
(statearr_26842_26868[(1)] = (5));

} else {
var statearr_26843_26869 = state_26836__$1;
(statearr_26843_26869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26837 === (6))){
var state_26836__$1 = state_26836;
var statearr_26844_26870 = state_26836__$1;
(statearr_26844_26870[(2)] = null);

(statearr_26844_26870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26837 === (3))){
var inst_26833 = (state_26836[(2)]);
var inst_26834 = cljs.core.async.close_BANG_.call(null,out);
var state_26836__$1 = (function (){var statearr_26845 = state_26836;
(statearr_26845[(9)] = inst_26833);

return statearr_26845;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26836__$1,inst_26834);
} else {
if((state_val_26837 === (2))){
var state_26836__$1 = state_26836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26836__$1,(4),ch);
} else {
if((state_val_26837 === (11))){
var inst_26816 = (state_26836[(8)]);
var inst_26825 = (state_26836[(2)]);
var inst_26813 = inst_26816;
var state_26836__$1 = (function (){var statearr_26846 = state_26836;
(statearr_26846[(10)] = inst_26825);

(statearr_26846[(7)] = inst_26813);

return statearr_26846;
})();
var statearr_26847_26871 = state_26836__$1;
(statearr_26847_26871[(2)] = null);

(statearr_26847_26871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26837 === (9))){
var inst_26816 = (state_26836[(8)]);
var state_26836__$1 = state_26836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26836__$1,(11),out,inst_26816);
} else {
if((state_val_26837 === (5))){
var inst_26816 = (state_26836[(8)]);
var inst_26813 = (state_26836[(7)]);
var inst_26820 = cljs.core._EQ_.call(null,inst_26816,inst_26813);
var state_26836__$1 = state_26836;
if(inst_26820){
var statearr_26849_26872 = state_26836__$1;
(statearr_26849_26872[(1)] = (8));

} else {
var statearr_26850_26873 = state_26836__$1;
(statearr_26850_26873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26837 === (10))){
var inst_26828 = (state_26836[(2)]);
var state_26836__$1 = state_26836;
var statearr_26851_26874 = state_26836__$1;
(statearr_26851_26874[(2)] = inst_26828);

(statearr_26851_26874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26837 === (8))){
var inst_26813 = (state_26836[(7)]);
var tmp26848 = inst_26813;
var inst_26813__$1 = tmp26848;
var state_26836__$1 = (function (){var statearr_26852 = state_26836;
(statearr_26852[(7)] = inst_26813__$1);

return statearr_26852;
})();
var statearr_26853_26875 = state_26836__$1;
(statearr_26853_26875[(2)] = null);

(statearr_26853_26875[(1)] = (2));


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
});})(c__24292__auto___26865,out))
;
return ((function (switch__24180__auto__,c__24292__auto___26865,out){
return (function() {
var cljs$core$async$state_machine__24181__auto__ = null;
var cljs$core$async$state_machine__24181__auto____0 = (function (){
var statearr_26857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26857[(0)] = cljs$core$async$state_machine__24181__auto__);

(statearr_26857[(1)] = (1));

return statearr_26857;
});
var cljs$core$async$state_machine__24181__auto____1 = (function (state_26836){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_26836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e26858){if((e26858 instanceof Object)){
var ex__24184__auto__ = e26858;
var statearr_26859_26876 = state_26836;
(statearr_26859_26876[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26877 = state_26836;
state_26836 = G__26877;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$state_machine__24181__auto__ = function(state_26836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24181__auto____1.call(this,state_26836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24181__auto____0;
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24181__auto____1;
return cljs$core$async$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___26865,out))
})();
var state__24294__auto__ = (function (){var statearr_26860 = f__24293__auto__.call(null);
(statearr_26860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___26865);

return statearr_26860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___26865,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26878 = [];
var len__17809__auto___26948 = arguments.length;
var i__17810__auto___26949 = (0);
while(true){
if((i__17810__auto___26949 < len__17809__auto___26948)){
args26878.push((arguments[i__17810__auto___26949]));

var G__26950 = (i__17810__auto___26949 + (1));
i__17810__auto___26949 = G__26950;
continue;
} else {
}
break;
}

var G__26880 = args26878.length;
switch (G__26880) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26878.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24292__auto___26952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___26952,out){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___26952,out){
return (function (state_26918){
var state_val_26919 = (state_26918[(1)]);
if((state_val_26919 === (7))){
var inst_26914 = (state_26918[(2)]);
var state_26918__$1 = state_26918;
var statearr_26920_26953 = state_26918__$1;
(statearr_26920_26953[(2)] = inst_26914);

(statearr_26920_26953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (1))){
var inst_26881 = (new Array(n));
var inst_26882 = inst_26881;
var inst_26883 = (0);
var state_26918__$1 = (function (){var statearr_26921 = state_26918;
(statearr_26921[(7)] = inst_26883);

(statearr_26921[(8)] = inst_26882);

return statearr_26921;
})();
var statearr_26922_26954 = state_26918__$1;
(statearr_26922_26954[(2)] = null);

(statearr_26922_26954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (4))){
var inst_26886 = (state_26918[(9)]);
var inst_26886__$1 = (state_26918[(2)]);
var inst_26887 = (inst_26886__$1 == null);
var inst_26888 = cljs.core.not.call(null,inst_26887);
var state_26918__$1 = (function (){var statearr_26923 = state_26918;
(statearr_26923[(9)] = inst_26886__$1);

return statearr_26923;
})();
if(inst_26888){
var statearr_26924_26955 = state_26918__$1;
(statearr_26924_26955[(1)] = (5));

} else {
var statearr_26925_26956 = state_26918__$1;
(statearr_26925_26956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (15))){
var inst_26908 = (state_26918[(2)]);
var state_26918__$1 = state_26918;
var statearr_26926_26957 = state_26918__$1;
(statearr_26926_26957[(2)] = inst_26908);

(statearr_26926_26957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (13))){
var state_26918__$1 = state_26918;
var statearr_26927_26958 = state_26918__$1;
(statearr_26927_26958[(2)] = null);

(statearr_26927_26958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (6))){
var inst_26883 = (state_26918[(7)]);
var inst_26904 = (inst_26883 > (0));
var state_26918__$1 = state_26918;
if(cljs.core.truth_(inst_26904)){
var statearr_26928_26959 = state_26918__$1;
(statearr_26928_26959[(1)] = (12));

} else {
var statearr_26929_26960 = state_26918__$1;
(statearr_26929_26960[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (3))){
var inst_26916 = (state_26918[(2)]);
var state_26918__$1 = state_26918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26918__$1,inst_26916);
} else {
if((state_val_26919 === (12))){
var inst_26882 = (state_26918[(8)]);
var inst_26906 = cljs.core.vec.call(null,inst_26882);
var state_26918__$1 = state_26918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26918__$1,(15),out,inst_26906);
} else {
if((state_val_26919 === (2))){
var state_26918__$1 = state_26918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26918__$1,(4),ch);
} else {
if((state_val_26919 === (11))){
var inst_26898 = (state_26918[(2)]);
var inst_26899 = (new Array(n));
var inst_26882 = inst_26899;
var inst_26883 = (0);
var state_26918__$1 = (function (){var statearr_26930 = state_26918;
(statearr_26930[(7)] = inst_26883);

(statearr_26930[(10)] = inst_26898);

(statearr_26930[(8)] = inst_26882);

return statearr_26930;
})();
var statearr_26931_26961 = state_26918__$1;
(statearr_26931_26961[(2)] = null);

(statearr_26931_26961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (9))){
var inst_26882 = (state_26918[(8)]);
var inst_26896 = cljs.core.vec.call(null,inst_26882);
var state_26918__$1 = state_26918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26918__$1,(11),out,inst_26896);
} else {
if((state_val_26919 === (5))){
var inst_26883 = (state_26918[(7)]);
var inst_26886 = (state_26918[(9)]);
var inst_26891 = (state_26918[(11)]);
var inst_26882 = (state_26918[(8)]);
var inst_26890 = (inst_26882[inst_26883] = inst_26886);
var inst_26891__$1 = (inst_26883 + (1));
var inst_26892 = (inst_26891__$1 < n);
var state_26918__$1 = (function (){var statearr_26932 = state_26918;
(statearr_26932[(12)] = inst_26890);

(statearr_26932[(11)] = inst_26891__$1);

return statearr_26932;
})();
if(cljs.core.truth_(inst_26892)){
var statearr_26933_26962 = state_26918__$1;
(statearr_26933_26962[(1)] = (8));

} else {
var statearr_26934_26963 = state_26918__$1;
(statearr_26934_26963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (14))){
var inst_26911 = (state_26918[(2)]);
var inst_26912 = cljs.core.async.close_BANG_.call(null,out);
var state_26918__$1 = (function (){var statearr_26936 = state_26918;
(statearr_26936[(13)] = inst_26911);

return statearr_26936;
})();
var statearr_26937_26964 = state_26918__$1;
(statearr_26937_26964[(2)] = inst_26912);

(statearr_26937_26964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (10))){
var inst_26902 = (state_26918[(2)]);
var state_26918__$1 = state_26918;
var statearr_26938_26965 = state_26918__$1;
(statearr_26938_26965[(2)] = inst_26902);

(statearr_26938_26965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (8))){
var inst_26891 = (state_26918[(11)]);
var inst_26882 = (state_26918[(8)]);
var tmp26935 = inst_26882;
var inst_26882__$1 = tmp26935;
var inst_26883 = inst_26891;
var state_26918__$1 = (function (){var statearr_26939 = state_26918;
(statearr_26939[(7)] = inst_26883);

(statearr_26939[(8)] = inst_26882__$1);

return statearr_26939;
})();
var statearr_26940_26966 = state_26918__$1;
(statearr_26940_26966[(2)] = null);

(statearr_26940_26966[(1)] = (2));


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
});})(c__24292__auto___26952,out))
;
return ((function (switch__24180__auto__,c__24292__auto___26952,out){
return (function() {
var cljs$core$async$state_machine__24181__auto__ = null;
var cljs$core$async$state_machine__24181__auto____0 = (function (){
var statearr_26944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26944[(0)] = cljs$core$async$state_machine__24181__auto__);

(statearr_26944[(1)] = (1));

return statearr_26944;
});
var cljs$core$async$state_machine__24181__auto____1 = (function (state_26918){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_26918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e26945){if((e26945 instanceof Object)){
var ex__24184__auto__ = e26945;
var statearr_26946_26967 = state_26918;
(statearr_26946_26967[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26968 = state_26918;
state_26918 = G__26968;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$state_machine__24181__auto__ = function(state_26918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24181__auto____1.call(this,state_26918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24181__auto____0;
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24181__auto____1;
return cljs$core$async$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___26952,out))
})();
var state__24294__auto__ = (function (){var statearr_26947 = f__24293__auto__.call(null);
(statearr_26947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___26952);

return statearr_26947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___26952,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26969 = [];
var len__17809__auto___27043 = arguments.length;
var i__17810__auto___27044 = (0);
while(true){
if((i__17810__auto___27044 < len__17809__auto___27043)){
args26969.push((arguments[i__17810__auto___27044]));

var G__27045 = (i__17810__auto___27044 + (1));
i__17810__auto___27044 = G__27045;
continue;
} else {
}
break;
}

var G__26971 = args26969.length;
switch (G__26971) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26969.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24292__auto___27047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___27047,out){
return (function (){
var f__24293__auto__ = (function (){var switch__24180__auto__ = ((function (c__24292__auto___27047,out){
return (function (state_27013){
var state_val_27014 = (state_27013[(1)]);
if((state_val_27014 === (7))){
var inst_27009 = (state_27013[(2)]);
var state_27013__$1 = state_27013;
var statearr_27015_27048 = state_27013__$1;
(statearr_27015_27048[(2)] = inst_27009);

(statearr_27015_27048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (1))){
var inst_26972 = [];
var inst_26973 = inst_26972;
var inst_26974 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27013__$1 = (function (){var statearr_27016 = state_27013;
(statearr_27016[(7)] = inst_26974);

(statearr_27016[(8)] = inst_26973);

return statearr_27016;
})();
var statearr_27017_27049 = state_27013__$1;
(statearr_27017_27049[(2)] = null);

(statearr_27017_27049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (4))){
var inst_26977 = (state_27013[(9)]);
var inst_26977__$1 = (state_27013[(2)]);
var inst_26978 = (inst_26977__$1 == null);
var inst_26979 = cljs.core.not.call(null,inst_26978);
var state_27013__$1 = (function (){var statearr_27018 = state_27013;
(statearr_27018[(9)] = inst_26977__$1);

return statearr_27018;
})();
if(inst_26979){
var statearr_27019_27050 = state_27013__$1;
(statearr_27019_27050[(1)] = (5));

} else {
var statearr_27020_27051 = state_27013__$1;
(statearr_27020_27051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (15))){
var inst_27003 = (state_27013[(2)]);
var state_27013__$1 = state_27013;
var statearr_27021_27052 = state_27013__$1;
(statearr_27021_27052[(2)] = inst_27003);

(statearr_27021_27052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (13))){
var state_27013__$1 = state_27013;
var statearr_27022_27053 = state_27013__$1;
(statearr_27022_27053[(2)] = null);

(statearr_27022_27053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (6))){
var inst_26973 = (state_27013[(8)]);
var inst_26998 = inst_26973.length;
var inst_26999 = (inst_26998 > (0));
var state_27013__$1 = state_27013;
if(cljs.core.truth_(inst_26999)){
var statearr_27023_27054 = state_27013__$1;
(statearr_27023_27054[(1)] = (12));

} else {
var statearr_27024_27055 = state_27013__$1;
(statearr_27024_27055[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (3))){
var inst_27011 = (state_27013[(2)]);
var state_27013__$1 = state_27013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27013__$1,inst_27011);
} else {
if((state_val_27014 === (12))){
var inst_26973 = (state_27013[(8)]);
var inst_27001 = cljs.core.vec.call(null,inst_26973);
var state_27013__$1 = state_27013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27013__$1,(15),out,inst_27001);
} else {
if((state_val_27014 === (2))){
var state_27013__$1 = state_27013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27013__$1,(4),ch);
} else {
if((state_val_27014 === (11))){
var inst_26977 = (state_27013[(9)]);
var inst_26981 = (state_27013[(10)]);
var inst_26991 = (state_27013[(2)]);
var inst_26992 = [];
var inst_26993 = inst_26992.push(inst_26977);
var inst_26973 = inst_26992;
var inst_26974 = inst_26981;
var state_27013__$1 = (function (){var statearr_27025 = state_27013;
(statearr_27025[(7)] = inst_26974);

(statearr_27025[(11)] = inst_26991);

(statearr_27025[(12)] = inst_26993);

(statearr_27025[(8)] = inst_26973);

return statearr_27025;
})();
var statearr_27026_27056 = state_27013__$1;
(statearr_27026_27056[(2)] = null);

(statearr_27026_27056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (9))){
var inst_26973 = (state_27013[(8)]);
var inst_26989 = cljs.core.vec.call(null,inst_26973);
var state_27013__$1 = state_27013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27013__$1,(11),out,inst_26989);
} else {
if((state_val_27014 === (5))){
var inst_26974 = (state_27013[(7)]);
var inst_26977 = (state_27013[(9)]);
var inst_26981 = (state_27013[(10)]);
var inst_26981__$1 = f.call(null,inst_26977);
var inst_26982 = cljs.core._EQ_.call(null,inst_26981__$1,inst_26974);
var inst_26983 = cljs.core.keyword_identical_QMARK_.call(null,inst_26974,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26984 = (inst_26982) || (inst_26983);
var state_27013__$1 = (function (){var statearr_27027 = state_27013;
(statearr_27027[(10)] = inst_26981__$1);

return statearr_27027;
})();
if(cljs.core.truth_(inst_26984)){
var statearr_27028_27057 = state_27013__$1;
(statearr_27028_27057[(1)] = (8));

} else {
var statearr_27029_27058 = state_27013__$1;
(statearr_27029_27058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (14))){
var inst_27006 = (state_27013[(2)]);
var inst_27007 = cljs.core.async.close_BANG_.call(null,out);
var state_27013__$1 = (function (){var statearr_27031 = state_27013;
(statearr_27031[(13)] = inst_27006);

return statearr_27031;
})();
var statearr_27032_27059 = state_27013__$1;
(statearr_27032_27059[(2)] = inst_27007);

(statearr_27032_27059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (10))){
var inst_26996 = (state_27013[(2)]);
var state_27013__$1 = state_27013;
var statearr_27033_27060 = state_27013__$1;
(statearr_27033_27060[(2)] = inst_26996);

(statearr_27033_27060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (8))){
var inst_26977 = (state_27013[(9)]);
var inst_26973 = (state_27013[(8)]);
var inst_26981 = (state_27013[(10)]);
var inst_26986 = inst_26973.push(inst_26977);
var tmp27030 = inst_26973;
var inst_26973__$1 = tmp27030;
var inst_26974 = inst_26981;
var state_27013__$1 = (function (){var statearr_27034 = state_27013;
(statearr_27034[(7)] = inst_26974);

(statearr_27034[(8)] = inst_26973__$1);

(statearr_27034[(14)] = inst_26986);

return statearr_27034;
})();
var statearr_27035_27061 = state_27013__$1;
(statearr_27035_27061[(2)] = null);

(statearr_27035_27061[(1)] = (2));


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
});})(c__24292__auto___27047,out))
;
return ((function (switch__24180__auto__,c__24292__auto___27047,out){
return (function() {
var cljs$core$async$state_machine__24181__auto__ = null;
var cljs$core$async$state_machine__24181__auto____0 = (function (){
var statearr_27039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27039[(0)] = cljs$core$async$state_machine__24181__auto__);

(statearr_27039[(1)] = (1));

return statearr_27039;
});
var cljs$core$async$state_machine__24181__auto____1 = (function (state_27013){
while(true){
var ret_value__24182__auto__ = (function (){try{while(true){
var result__24183__auto__ = switch__24180__auto__.call(null,state_27013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24183__auto__;
}
break;
}
}catch (e27040){if((e27040 instanceof Object)){
var ex__24184__auto__ = e27040;
var statearr_27041_27062 = state_27013;
(statearr_27041_27062[(5)] = ex__24184__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27063 = state_27013;
state_27013 = G__27063;
continue;
} else {
return ret_value__24182__auto__;
}
break;
}
});
cljs$core$async$state_machine__24181__auto__ = function(state_27013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24181__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24181__auto____1.call(this,state_27013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24181__auto____0;
cljs$core$async$state_machine__24181__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24181__auto____1;
return cljs$core$async$state_machine__24181__auto__;
})()
;})(switch__24180__auto__,c__24292__auto___27047,out))
})();
var state__24294__auto__ = (function (){var statearr_27042 = f__24293__auto__.call(null);
(statearr_27042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___27047);

return statearr_27042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___27047,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1452529995776