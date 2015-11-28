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
var args24326 = [];
var len__17809__auto___24332 = arguments.length;
var i__17810__auto___24333 = (0);
while(true){
if((i__17810__auto___24333 < len__17809__auto___24332)){
args24326.push((arguments[i__17810__auto___24333]));

var G__24334 = (i__17810__auto___24333 + (1));
i__17810__auto___24333 = G__24334;
continue;
} else {
}
break;
}

var G__24328 = args24326.length;
switch (G__24328) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24326.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24329 = (function (f,blockable,meta24330){
this.f = f;
this.blockable = blockable;
this.meta24330 = meta24330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24331,meta24330__$1){
var self__ = this;
var _24331__$1 = this;
return (new cljs.core.async.t_cljs$core$async24329(self__.f,self__.blockable,meta24330__$1));
});

cljs.core.async.t_cljs$core$async24329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24331){
var self__ = this;
var _24331__$1 = this;
return self__.meta24330;
});

cljs.core.async.t_cljs$core$async24329.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24329.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24330","meta24330",675263397,null)], null);
});

cljs.core.async.t_cljs$core$async24329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24329";

cljs.core.async.t_cljs$core$async24329.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24329");
});

cljs.core.async.__GT_t_cljs$core$async24329 = (function cljs$core$async$__GT_t_cljs$core$async24329(f__$1,blockable__$1,meta24330){
return (new cljs.core.async.t_cljs$core$async24329(f__$1,blockable__$1,meta24330));
});

}

return (new cljs.core.async.t_cljs$core$async24329(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24338 = [];
var len__17809__auto___24341 = arguments.length;
var i__17810__auto___24342 = (0);
while(true){
if((i__17810__auto___24342 < len__17809__auto___24341)){
args24338.push((arguments[i__17810__auto___24342]));

var G__24343 = (i__17810__auto___24342 + (1));
i__17810__auto___24342 = G__24343;
continue;
} else {
}
break;
}

var G__24340 = args24338.length;
switch (G__24340) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24338.length)].join('')));

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
var args24345 = [];
var len__17809__auto___24348 = arguments.length;
var i__17810__auto___24349 = (0);
while(true){
if((i__17810__auto___24349 < len__17809__auto___24348)){
args24345.push((arguments[i__17810__auto___24349]));

var G__24350 = (i__17810__auto___24349 + (1));
i__17810__auto___24349 = G__24350;
continue;
} else {
}
break;
}

var G__24347 = args24345.length;
switch (G__24347) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24345.length)].join('')));

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
var args24352 = [];
var len__17809__auto___24355 = arguments.length;
var i__17810__auto___24356 = (0);
while(true){
if((i__17810__auto___24356 < len__17809__auto___24355)){
args24352.push((arguments[i__17810__auto___24356]));

var G__24357 = (i__17810__auto___24356 + (1));
i__17810__auto___24356 = G__24357;
continue;
} else {
}
break;
}

var G__24354 = args24352.length;
switch (G__24354) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24352.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24359 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24359);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24359,ret){
return (function (){
return fn1.call(null,val_24359);
});})(val_24359,ret))
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
var args24360 = [];
var len__17809__auto___24363 = arguments.length;
var i__17810__auto___24364 = (0);
while(true){
if((i__17810__auto___24364 < len__17809__auto___24363)){
args24360.push((arguments[i__17810__auto___24364]));

var G__24365 = (i__17810__auto___24364 + (1));
i__17810__auto___24364 = G__24365;
continue;
} else {
}
break;
}

var G__24362 = args24360.length;
switch (G__24362) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24360.length)].join('')));

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
var n__17654__auto___24367 = n;
var x_24368 = (0);
while(true){
if((x_24368 < n__17654__auto___24367)){
(a[x_24368] = (0));

var G__24369 = (x_24368 + (1));
x_24368 = G__24369;
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

var G__24370 = (i + (1));
i = G__24370;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24374 = (function (alt_flag,flag,meta24375){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24375 = meta24375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24376,meta24375__$1){
var self__ = this;
var _24376__$1 = this;
return (new cljs.core.async.t_cljs$core$async24374(self__.alt_flag,self__.flag,meta24375__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24376){
var self__ = this;
var _24376__$1 = this;
return self__.meta24375;
});})(flag))
;

cljs.core.async.t_cljs$core$async24374.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24374.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24375","meta24375",-1588500442,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24374";

cljs.core.async.t_cljs$core$async24374.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24374");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24374 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24374(alt_flag__$1,flag__$1,meta24375){
return (new cljs.core.async.t_cljs$core$async24374(alt_flag__$1,flag__$1,meta24375));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24374(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24380 = (function (alt_handler,flag,cb,meta24381){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24381 = meta24381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24382,meta24381__$1){
var self__ = this;
var _24382__$1 = this;
return (new cljs.core.async.t_cljs$core$async24380(self__.alt_handler,self__.flag,self__.cb,meta24381__$1));
});

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24382){
var self__ = this;
var _24382__$1 = this;
return self__.meta24381;
});

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24381","meta24381",1011429741,null)], null);
});

cljs.core.async.t_cljs$core$async24380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24380";

cljs.core.async.t_cljs$core$async24380.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24380");
});

cljs.core.async.__GT_t_cljs$core$async24380 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24380(alt_handler__$1,flag__$1,cb__$1,meta24381){
return (new cljs.core.async.t_cljs$core$async24380(alt_handler__$1,flag__$1,cb__$1,meta24381));
});

}

return (new cljs.core.async.t_cljs$core$async24380(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24383_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24383_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24384_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24384_SHARP_,port], null));
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
var G__24385 = (i + (1));
i = G__24385;
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
var len__17809__auto___24391 = arguments.length;
var i__17810__auto___24392 = (0);
while(true){
if((i__17810__auto___24392 < len__17809__auto___24391)){
args__17816__auto__.push((arguments[i__17810__auto___24392]));

var G__24393 = (i__17810__auto___24392 + (1));
i__17810__auto___24392 = G__24393;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((1) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24388){
var map__24389 = p__24388;
var map__24389__$1 = ((((!((map__24389 == null)))?((((map__24389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24389):map__24389);
var opts = map__24389__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24386){
var G__24387 = cljs.core.first.call(null,seq24386);
var seq24386__$1 = cljs.core.next.call(null,seq24386);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24387,seq24386__$1);
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
var args24394 = [];
var len__17809__auto___24444 = arguments.length;
var i__17810__auto___24445 = (0);
while(true){
if((i__17810__auto___24445 < len__17809__auto___24444)){
args24394.push((arguments[i__17810__auto___24445]));

var G__24446 = (i__17810__auto___24445 + (1));
i__17810__auto___24445 = G__24446;
continue;
} else {
}
break;
}

var G__24396 = args24394.length;
switch (G__24396) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24394.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24281__auto___24448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___24448){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___24448){
return (function (state_24420){
var state_val_24421 = (state_24420[(1)]);
if((state_val_24421 === (7))){
var inst_24416 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
var statearr_24422_24449 = state_24420__$1;
(statearr_24422_24449[(2)] = inst_24416);

(statearr_24422_24449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (1))){
var state_24420__$1 = state_24420;
var statearr_24423_24450 = state_24420__$1;
(statearr_24423_24450[(2)] = null);

(statearr_24423_24450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (4))){
var inst_24399 = (state_24420[(7)]);
var inst_24399__$1 = (state_24420[(2)]);
var inst_24400 = (inst_24399__$1 == null);
var state_24420__$1 = (function (){var statearr_24424 = state_24420;
(statearr_24424[(7)] = inst_24399__$1);

return statearr_24424;
})();
if(cljs.core.truth_(inst_24400)){
var statearr_24425_24451 = state_24420__$1;
(statearr_24425_24451[(1)] = (5));

} else {
var statearr_24426_24452 = state_24420__$1;
(statearr_24426_24452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (13))){
var state_24420__$1 = state_24420;
var statearr_24427_24453 = state_24420__$1;
(statearr_24427_24453[(2)] = null);

(statearr_24427_24453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (6))){
var inst_24399 = (state_24420[(7)]);
var state_24420__$1 = state_24420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24420__$1,(11),to,inst_24399);
} else {
if((state_val_24421 === (3))){
var inst_24418 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24420__$1,inst_24418);
} else {
if((state_val_24421 === (12))){
var state_24420__$1 = state_24420;
var statearr_24428_24454 = state_24420__$1;
(statearr_24428_24454[(2)] = null);

(statearr_24428_24454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (2))){
var state_24420__$1 = state_24420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24420__$1,(4),from);
} else {
if((state_val_24421 === (11))){
var inst_24409 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
if(cljs.core.truth_(inst_24409)){
var statearr_24429_24455 = state_24420__$1;
(statearr_24429_24455[(1)] = (12));

} else {
var statearr_24430_24456 = state_24420__$1;
(statearr_24430_24456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (9))){
var state_24420__$1 = state_24420;
var statearr_24431_24457 = state_24420__$1;
(statearr_24431_24457[(2)] = null);

(statearr_24431_24457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (5))){
var state_24420__$1 = state_24420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24432_24458 = state_24420__$1;
(statearr_24432_24458[(1)] = (8));

} else {
var statearr_24433_24459 = state_24420__$1;
(statearr_24433_24459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (14))){
var inst_24414 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
var statearr_24434_24460 = state_24420__$1;
(statearr_24434_24460[(2)] = inst_24414);

(statearr_24434_24460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (10))){
var inst_24406 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
var statearr_24435_24461 = state_24420__$1;
(statearr_24435_24461[(2)] = inst_24406);

(statearr_24435_24461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (8))){
var inst_24403 = cljs.core.async.close_BANG_.call(null,to);
var state_24420__$1 = state_24420;
var statearr_24436_24462 = state_24420__$1;
(statearr_24436_24462[(2)] = inst_24403);

(statearr_24436_24462[(1)] = (10));


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
});})(c__24281__auto___24448))
;
return ((function (switch__24169__auto__,c__24281__auto___24448){
return (function() {
var cljs$core$async$state_machine__24170__auto__ = null;
var cljs$core$async$state_machine__24170__auto____0 = (function (){
var statearr_24440 = [null,null,null,null,null,null,null,null];
(statearr_24440[(0)] = cljs$core$async$state_machine__24170__auto__);

(statearr_24440[(1)] = (1));

return statearr_24440;
});
var cljs$core$async$state_machine__24170__auto____1 = (function (state_24420){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_24420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e24441){if((e24441 instanceof Object)){
var ex__24173__auto__ = e24441;
var statearr_24442_24463 = state_24420;
(statearr_24442_24463[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24464 = state_24420;
state_24420 = G__24464;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$state_machine__24170__auto__ = function(state_24420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24170__auto____1.call(this,state_24420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24170__auto____0;
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24170__auto____1;
return cljs$core$async$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___24448))
})();
var state__24283__auto__ = (function (){var statearr_24443 = f__24282__auto__.call(null);
(statearr_24443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___24448);

return statearr_24443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___24448))
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
return (function (p__24648){
var vec__24649 = p__24648;
var v = cljs.core.nth.call(null,vec__24649,(0),null);
var p = cljs.core.nth.call(null,vec__24649,(1),null);
var job = vec__24649;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24281__auto___24831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___24831,res,vec__24649,v,p,job,jobs,results){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___24831,res,vec__24649,v,p,job,jobs,results){
return (function (state_24654){
var state_val_24655 = (state_24654[(1)]);
if((state_val_24655 === (1))){
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24654__$1,(2),res,v);
} else {
if((state_val_24655 === (2))){
var inst_24651 = (state_24654[(2)]);
var inst_24652 = cljs.core.async.close_BANG_.call(null,res);
var state_24654__$1 = (function (){var statearr_24656 = state_24654;
(statearr_24656[(7)] = inst_24651);

return statearr_24656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24654__$1,inst_24652);
} else {
return null;
}
}
});})(c__24281__auto___24831,res,vec__24649,v,p,job,jobs,results))
;
return ((function (switch__24169__auto__,c__24281__auto___24831,res,vec__24649,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0 = (function (){
var statearr_24660 = [null,null,null,null,null,null,null,null];
(statearr_24660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__);

(statearr_24660[(1)] = (1));

return statearr_24660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1 = (function (state_24654){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_24654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e24661){if((e24661 instanceof Object)){
var ex__24173__auto__ = e24661;
var statearr_24662_24832 = state_24654;
(statearr_24662_24832[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24833 = state_24654;
state_24654 = G__24833;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__ = function(state_24654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1.call(this,state_24654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___24831,res,vec__24649,v,p,job,jobs,results))
})();
var state__24283__auto__ = (function (){var statearr_24663 = f__24282__auto__.call(null);
(statearr_24663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___24831);

return statearr_24663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___24831,res,vec__24649,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24664){
var vec__24665 = p__24664;
var v = cljs.core.nth.call(null,vec__24665,(0),null);
var p = cljs.core.nth.call(null,vec__24665,(1),null);
var job = vec__24665;
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
var n__17654__auto___24834 = n;
var __24835 = (0);
while(true){
if((__24835 < n__17654__auto___24834)){
var G__24666_24836 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24666_24836) {
case "compute":
var c__24281__auto___24838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24835,c__24281__auto___24838,G__24666_24836,n__17654__auto___24834,jobs,results,process,async){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (__24835,c__24281__auto___24838,G__24666_24836,n__17654__auto___24834,jobs,results,process,async){
return (function (state_24679){
var state_val_24680 = (state_24679[(1)]);
if((state_val_24680 === (1))){
var state_24679__$1 = state_24679;
var statearr_24681_24839 = state_24679__$1;
(statearr_24681_24839[(2)] = null);

(statearr_24681_24839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (2))){
var state_24679__$1 = state_24679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24679__$1,(4),jobs);
} else {
if((state_val_24680 === (3))){
var inst_24677 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24679__$1,inst_24677);
} else {
if((state_val_24680 === (4))){
var inst_24669 = (state_24679[(2)]);
var inst_24670 = process.call(null,inst_24669);
var state_24679__$1 = state_24679;
if(cljs.core.truth_(inst_24670)){
var statearr_24682_24840 = state_24679__$1;
(statearr_24682_24840[(1)] = (5));

} else {
var statearr_24683_24841 = state_24679__$1;
(statearr_24683_24841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (5))){
var state_24679__$1 = state_24679;
var statearr_24684_24842 = state_24679__$1;
(statearr_24684_24842[(2)] = null);

(statearr_24684_24842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (6))){
var state_24679__$1 = state_24679;
var statearr_24685_24843 = state_24679__$1;
(statearr_24685_24843[(2)] = null);

(statearr_24685_24843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24680 === (7))){
var inst_24675 = (state_24679[(2)]);
var state_24679__$1 = state_24679;
var statearr_24686_24844 = state_24679__$1;
(statearr_24686_24844[(2)] = inst_24675);

(statearr_24686_24844[(1)] = (3));


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
});})(__24835,c__24281__auto___24838,G__24666_24836,n__17654__auto___24834,jobs,results,process,async))
;
return ((function (__24835,switch__24169__auto__,c__24281__auto___24838,G__24666_24836,n__17654__auto___24834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0 = (function (){
var statearr_24690 = [null,null,null,null,null,null,null];
(statearr_24690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__);

(statearr_24690[(1)] = (1));

return statearr_24690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1 = (function (state_24679){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_24679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e24691){if((e24691 instanceof Object)){
var ex__24173__auto__ = e24691;
var statearr_24692_24845 = state_24679;
(statearr_24692_24845[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24846 = state_24679;
state_24679 = G__24846;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__ = function(state_24679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1.call(this,state_24679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__;
})()
;})(__24835,switch__24169__auto__,c__24281__auto___24838,G__24666_24836,n__17654__auto___24834,jobs,results,process,async))
})();
var state__24283__auto__ = (function (){var statearr_24693 = f__24282__auto__.call(null);
(statearr_24693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___24838);

return statearr_24693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(__24835,c__24281__auto___24838,G__24666_24836,n__17654__auto___24834,jobs,results,process,async))
);


break;
case "async":
var c__24281__auto___24847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24835,c__24281__auto___24847,G__24666_24836,n__17654__auto___24834,jobs,results,process,async){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (__24835,c__24281__auto___24847,G__24666_24836,n__17654__auto___24834,jobs,results,process,async){
return (function (state_24706){
var state_val_24707 = (state_24706[(1)]);
if((state_val_24707 === (1))){
var state_24706__$1 = state_24706;
var statearr_24708_24848 = state_24706__$1;
(statearr_24708_24848[(2)] = null);

(statearr_24708_24848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (2))){
var state_24706__$1 = state_24706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24706__$1,(4),jobs);
} else {
if((state_val_24707 === (3))){
var inst_24704 = (state_24706[(2)]);
var state_24706__$1 = state_24706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24706__$1,inst_24704);
} else {
if((state_val_24707 === (4))){
var inst_24696 = (state_24706[(2)]);
var inst_24697 = async.call(null,inst_24696);
var state_24706__$1 = state_24706;
if(cljs.core.truth_(inst_24697)){
var statearr_24709_24849 = state_24706__$1;
(statearr_24709_24849[(1)] = (5));

} else {
var statearr_24710_24850 = state_24706__$1;
(statearr_24710_24850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (5))){
var state_24706__$1 = state_24706;
var statearr_24711_24851 = state_24706__$1;
(statearr_24711_24851[(2)] = null);

(statearr_24711_24851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (6))){
var state_24706__$1 = state_24706;
var statearr_24712_24852 = state_24706__$1;
(statearr_24712_24852[(2)] = null);

(statearr_24712_24852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (7))){
var inst_24702 = (state_24706[(2)]);
var state_24706__$1 = state_24706;
var statearr_24713_24853 = state_24706__$1;
(statearr_24713_24853[(2)] = inst_24702);

(statearr_24713_24853[(1)] = (3));


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
});})(__24835,c__24281__auto___24847,G__24666_24836,n__17654__auto___24834,jobs,results,process,async))
;
return ((function (__24835,switch__24169__auto__,c__24281__auto___24847,G__24666_24836,n__17654__auto___24834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0 = (function (){
var statearr_24717 = [null,null,null,null,null,null,null];
(statearr_24717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__);

(statearr_24717[(1)] = (1));

return statearr_24717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1 = (function (state_24706){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_24706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e24718){if((e24718 instanceof Object)){
var ex__24173__auto__ = e24718;
var statearr_24719_24854 = state_24706;
(statearr_24719_24854[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24855 = state_24706;
state_24706 = G__24855;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__ = function(state_24706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1.call(this,state_24706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__;
})()
;})(__24835,switch__24169__auto__,c__24281__auto___24847,G__24666_24836,n__17654__auto___24834,jobs,results,process,async))
})();
var state__24283__auto__ = (function (){var statearr_24720 = f__24282__auto__.call(null);
(statearr_24720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___24847);

return statearr_24720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(__24835,c__24281__auto___24847,G__24666_24836,n__17654__auto___24834,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24856 = (__24835 + (1));
__24835 = G__24856;
continue;
} else {
}
break;
}

var c__24281__auto___24857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___24857,jobs,results,process,async){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___24857,jobs,results,process,async){
return (function (state_24742){
var state_val_24743 = (state_24742[(1)]);
if((state_val_24743 === (1))){
var state_24742__$1 = state_24742;
var statearr_24744_24858 = state_24742__$1;
(statearr_24744_24858[(2)] = null);

(statearr_24744_24858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (2))){
var state_24742__$1 = state_24742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24742__$1,(4),from);
} else {
if((state_val_24743 === (3))){
var inst_24740 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24742__$1,inst_24740);
} else {
if((state_val_24743 === (4))){
var inst_24723 = (state_24742[(7)]);
var inst_24723__$1 = (state_24742[(2)]);
var inst_24724 = (inst_24723__$1 == null);
var state_24742__$1 = (function (){var statearr_24745 = state_24742;
(statearr_24745[(7)] = inst_24723__$1);

return statearr_24745;
})();
if(cljs.core.truth_(inst_24724)){
var statearr_24746_24859 = state_24742__$1;
(statearr_24746_24859[(1)] = (5));

} else {
var statearr_24747_24860 = state_24742__$1;
(statearr_24747_24860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (5))){
var inst_24726 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24742__$1 = state_24742;
var statearr_24748_24861 = state_24742__$1;
(statearr_24748_24861[(2)] = inst_24726);

(statearr_24748_24861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (6))){
var inst_24723 = (state_24742[(7)]);
var inst_24728 = (state_24742[(8)]);
var inst_24728__$1 = cljs.core.async.chan.call(null,(1));
var inst_24729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24730 = [inst_24723,inst_24728__$1];
var inst_24731 = (new cljs.core.PersistentVector(null,2,(5),inst_24729,inst_24730,null));
var state_24742__$1 = (function (){var statearr_24749 = state_24742;
(statearr_24749[(8)] = inst_24728__$1);

return statearr_24749;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24742__$1,(8),jobs,inst_24731);
} else {
if((state_val_24743 === (7))){
var inst_24738 = (state_24742[(2)]);
var state_24742__$1 = state_24742;
var statearr_24750_24862 = state_24742__$1;
(statearr_24750_24862[(2)] = inst_24738);

(statearr_24750_24862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24743 === (8))){
var inst_24728 = (state_24742[(8)]);
var inst_24733 = (state_24742[(2)]);
var state_24742__$1 = (function (){var statearr_24751 = state_24742;
(statearr_24751[(9)] = inst_24733);

return statearr_24751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24742__$1,(9),results,inst_24728);
} else {
if((state_val_24743 === (9))){
var inst_24735 = (state_24742[(2)]);
var state_24742__$1 = (function (){var statearr_24752 = state_24742;
(statearr_24752[(10)] = inst_24735);

return statearr_24752;
})();
var statearr_24753_24863 = state_24742__$1;
(statearr_24753_24863[(2)] = null);

(statearr_24753_24863[(1)] = (2));


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
});})(c__24281__auto___24857,jobs,results,process,async))
;
return ((function (switch__24169__auto__,c__24281__auto___24857,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0 = (function (){
var statearr_24757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__);

(statearr_24757[(1)] = (1));

return statearr_24757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1 = (function (state_24742){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_24742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e24758){if((e24758 instanceof Object)){
var ex__24173__auto__ = e24758;
var statearr_24759_24864 = state_24742;
(statearr_24759_24864[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24865 = state_24742;
state_24742 = G__24865;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__ = function(state_24742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1.call(this,state_24742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___24857,jobs,results,process,async))
})();
var state__24283__auto__ = (function (){var statearr_24760 = f__24282__auto__.call(null);
(statearr_24760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___24857);

return statearr_24760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___24857,jobs,results,process,async))
);


var c__24281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto__,jobs,results,process,async){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto__,jobs,results,process,async){
return (function (state_24798){
var state_val_24799 = (state_24798[(1)]);
if((state_val_24799 === (7))){
var inst_24794 = (state_24798[(2)]);
var state_24798__$1 = state_24798;
var statearr_24800_24866 = state_24798__$1;
(statearr_24800_24866[(2)] = inst_24794);

(statearr_24800_24866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (20))){
var state_24798__$1 = state_24798;
var statearr_24801_24867 = state_24798__$1;
(statearr_24801_24867[(2)] = null);

(statearr_24801_24867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (1))){
var state_24798__$1 = state_24798;
var statearr_24802_24868 = state_24798__$1;
(statearr_24802_24868[(2)] = null);

(statearr_24802_24868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (4))){
var inst_24763 = (state_24798[(7)]);
var inst_24763__$1 = (state_24798[(2)]);
var inst_24764 = (inst_24763__$1 == null);
var state_24798__$1 = (function (){var statearr_24803 = state_24798;
(statearr_24803[(7)] = inst_24763__$1);

return statearr_24803;
})();
if(cljs.core.truth_(inst_24764)){
var statearr_24804_24869 = state_24798__$1;
(statearr_24804_24869[(1)] = (5));

} else {
var statearr_24805_24870 = state_24798__$1;
(statearr_24805_24870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (15))){
var inst_24776 = (state_24798[(8)]);
var state_24798__$1 = state_24798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24798__$1,(18),to,inst_24776);
} else {
if((state_val_24799 === (21))){
var inst_24789 = (state_24798[(2)]);
var state_24798__$1 = state_24798;
var statearr_24806_24871 = state_24798__$1;
(statearr_24806_24871[(2)] = inst_24789);

(statearr_24806_24871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (13))){
var inst_24791 = (state_24798[(2)]);
var state_24798__$1 = (function (){var statearr_24807 = state_24798;
(statearr_24807[(9)] = inst_24791);

return statearr_24807;
})();
var statearr_24808_24872 = state_24798__$1;
(statearr_24808_24872[(2)] = null);

(statearr_24808_24872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (6))){
var inst_24763 = (state_24798[(7)]);
var state_24798__$1 = state_24798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24798__$1,(11),inst_24763);
} else {
if((state_val_24799 === (17))){
var inst_24784 = (state_24798[(2)]);
var state_24798__$1 = state_24798;
if(cljs.core.truth_(inst_24784)){
var statearr_24809_24873 = state_24798__$1;
(statearr_24809_24873[(1)] = (19));

} else {
var statearr_24810_24874 = state_24798__$1;
(statearr_24810_24874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (3))){
var inst_24796 = (state_24798[(2)]);
var state_24798__$1 = state_24798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24798__$1,inst_24796);
} else {
if((state_val_24799 === (12))){
var inst_24773 = (state_24798[(10)]);
var state_24798__$1 = state_24798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24798__$1,(14),inst_24773);
} else {
if((state_val_24799 === (2))){
var state_24798__$1 = state_24798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24798__$1,(4),results);
} else {
if((state_val_24799 === (19))){
var state_24798__$1 = state_24798;
var statearr_24811_24875 = state_24798__$1;
(statearr_24811_24875[(2)] = null);

(statearr_24811_24875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (11))){
var inst_24773 = (state_24798[(2)]);
var state_24798__$1 = (function (){var statearr_24812 = state_24798;
(statearr_24812[(10)] = inst_24773);

return statearr_24812;
})();
var statearr_24813_24876 = state_24798__$1;
(statearr_24813_24876[(2)] = null);

(statearr_24813_24876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (9))){
var state_24798__$1 = state_24798;
var statearr_24814_24877 = state_24798__$1;
(statearr_24814_24877[(2)] = null);

(statearr_24814_24877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (5))){
var state_24798__$1 = state_24798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24815_24878 = state_24798__$1;
(statearr_24815_24878[(1)] = (8));

} else {
var statearr_24816_24879 = state_24798__$1;
(statearr_24816_24879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (14))){
var inst_24778 = (state_24798[(11)]);
var inst_24776 = (state_24798[(8)]);
var inst_24776__$1 = (state_24798[(2)]);
var inst_24777 = (inst_24776__$1 == null);
var inst_24778__$1 = cljs.core.not.call(null,inst_24777);
var state_24798__$1 = (function (){var statearr_24817 = state_24798;
(statearr_24817[(11)] = inst_24778__$1);

(statearr_24817[(8)] = inst_24776__$1);

return statearr_24817;
})();
if(inst_24778__$1){
var statearr_24818_24880 = state_24798__$1;
(statearr_24818_24880[(1)] = (15));

} else {
var statearr_24819_24881 = state_24798__$1;
(statearr_24819_24881[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (16))){
var inst_24778 = (state_24798[(11)]);
var state_24798__$1 = state_24798;
var statearr_24820_24882 = state_24798__$1;
(statearr_24820_24882[(2)] = inst_24778);

(statearr_24820_24882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (10))){
var inst_24770 = (state_24798[(2)]);
var state_24798__$1 = state_24798;
var statearr_24821_24883 = state_24798__$1;
(statearr_24821_24883[(2)] = inst_24770);

(statearr_24821_24883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (18))){
var inst_24781 = (state_24798[(2)]);
var state_24798__$1 = state_24798;
var statearr_24822_24884 = state_24798__$1;
(statearr_24822_24884[(2)] = inst_24781);

(statearr_24822_24884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (8))){
var inst_24767 = cljs.core.async.close_BANG_.call(null,to);
var state_24798__$1 = state_24798;
var statearr_24823_24885 = state_24798__$1;
(statearr_24823_24885[(2)] = inst_24767);

(statearr_24823_24885[(1)] = (10));


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
});})(c__24281__auto__,jobs,results,process,async))
;
return ((function (switch__24169__auto__,c__24281__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0 = (function (){
var statearr_24827 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__);

(statearr_24827[(1)] = (1));

return statearr_24827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1 = (function (state_24798){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_24798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e24828){if((e24828 instanceof Object)){
var ex__24173__auto__ = e24828;
var statearr_24829_24886 = state_24798;
(statearr_24829_24886[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24887 = state_24798;
state_24798 = G__24887;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__ = function(state_24798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1.call(this,state_24798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto__,jobs,results,process,async))
})();
var state__24283__auto__ = (function (){var statearr_24830 = f__24282__auto__.call(null);
(statearr_24830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto__);

return statearr_24830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto__,jobs,results,process,async))
);

return c__24281__auto__;
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
var args24888 = [];
var len__17809__auto___24891 = arguments.length;
var i__17810__auto___24892 = (0);
while(true){
if((i__17810__auto___24892 < len__17809__auto___24891)){
args24888.push((arguments[i__17810__auto___24892]));

var G__24893 = (i__17810__auto___24892 + (1));
i__17810__auto___24892 = G__24893;
continue;
} else {
}
break;
}

var G__24890 = args24888.length;
switch (G__24890) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24888.length)].join('')));

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
var args24895 = [];
var len__17809__auto___24898 = arguments.length;
var i__17810__auto___24899 = (0);
while(true){
if((i__17810__auto___24899 < len__17809__auto___24898)){
args24895.push((arguments[i__17810__auto___24899]));

var G__24900 = (i__17810__auto___24899 + (1));
i__17810__auto___24899 = G__24900;
continue;
} else {
}
break;
}

var G__24897 = args24895.length;
switch (G__24897) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24895.length)].join('')));

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
var args24902 = [];
var len__17809__auto___24955 = arguments.length;
var i__17810__auto___24956 = (0);
while(true){
if((i__17810__auto___24956 < len__17809__auto___24955)){
args24902.push((arguments[i__17810__auto___24956]));

var G__24957 = (i__17810__auto___24956 + (1));
i__17810__auto___24956 = G__24957;
continue;
} else {
}
break;
}

var G__24904 = args24902.length;
switch (G__24904) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24902.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24281__auto___24959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___24959,tc,fc){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___24959,tc,fc){
return (function (state_24930){
var state_val_24931 = (state_24930[(1)]);
if((state_val_24931 === (7))){
var inst_24926 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
var statearr_24932_24960 = state_24930__$1;
(statearr_24932_24960[(2)] = inst_24926);

(statearr_24932_24960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (1))){
var state_24930__$1 = state_24930;
var statearr_24933_24961 = state_24930__$1;
(statearr_24933_24961[(2)] = null);

(statearr_24933_24961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (4))){
var inst_24907 = (state_24930[(7)]);
var inst_24907__$1 = (state_24930[(2)]);
var inst_24908 = (inst_24907__$1 == null);
var state_24930__$1 = (function (){var statearr_24934 = state_24930;
(statearr_24934[(7)] = inst_24907__$1);

return statearr_24934;
})();
if(cljs.core.truth_(inst_24908)){
var statearr_24935_24962 = state_24930__$1;
(statearr_24935_24962[(1)] = (5));

} else {
var statearr_24936_24963 = state_24930__$1;
(statearr_24936_24963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (13))){
var state_24930__$1 = state_24930;
var statearr_24937_24964 = state_24930__$1;
(statearr_24937_24964[(2)] = null);

(statearr_24937_24964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (6))){
var inst_24907 = (state_24930[(7)]);
var inst_24913 = p.call(null,inst_24907);
var state_24930__$1 = state_24930;
if(cljs.core.truth_(inst_24913)){
var statearr_24938_24965 = state_24930__$1;
(statearr_24938_24965[(1)] = (9));

} else {
var statearr_24939_24966 = state_24930__$1;
(statearr_24939_24966[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (3))){
var inst_24928 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24930__$1,inst_24928);
} else {
if((state_val_24931 === (12))){
var state_24930__$1 = state_24930;
var statearr_24940_24967 = state_24930__$1;
(statearr_24940_24967[(2)] = null);

(statearr_24940_24967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (2))){
var state_24930__$1 = state_24930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24930__$1,(4),ch);
} else {
if((state_val_24931 === (11))){
var inst_24907 = (state_24930[(7)]);
var inst_24917 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24930__$1,(8),inst_24917,inst_24907);
} else {
if((state_val_24931 === (9))){
var state_24930__$1 = state_24930;
var statearr_24941_24968 = state_24930__$1;
(statearr_24941_24968[(2)] = tc);

(statearr_24941_24968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (5))){
var inst_24910 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24911 = cljs.core.async.close_BANG_.call(null,fc);
var state_24930__$1 = (function (){var statearr_24942 = state_24930;
(statearr_24942[(8)] = inst_24910);

return statearr_24942;
})();
var statearr_24943_24969 = state_24930__$1;
(statearr_24943_24969[(2)] = inst_24911);

(statearr_24943_24969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (14))){
var inst_24924 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
var statearr_24944_24970 = state_24930__$1;
(statearr_24944_24970[(2)] = inst_24924);

(statearr_24944_24970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (10))){
var state_24930__$1 = state_24930;
var statearr_24945_24971 = state_24930__$1;
(statearr_24945_24971[(2)] = fc);

(statearr_24945_24971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24931 === (8))){
var inst_24919 = (state_24930[(2)]);
var state_24930__$1 = state_24930;
if(cljs.core.truth_(inst_24919)){
var statearr_24946_24972 = state_24930__$1;
(statearr_24946_24972[(1)] = (12));

} else {
var statearr_24947_24973 = state_24930__$1;
(statearr_24947_24973[(1)] = (13));

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
});})(c__24281__auto___24959,tc,fc))
;
return ((function (switch__24169__auto__,c__24281__auto___24959,tc,fc){
return (function() {
var cljs$core$async$state_machine__24170__auto__ = null;
var cljs$core$async$state_machine__24170__auto____0 = (function (){
var statearr_24951 = [null,null,null,null,null,null,null,null,null];
(statearr_24951[(0)] = cljs$core$async$state_machine__24170__auto__);

(statearr_24951[(1)] = (1));

return statearr_24951;
});
var cljs$core$async$state_machine__24170__auto____1 = (function (state_24930){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_24930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e24952){if((e24952 instanceof Object)){
var ex__24173__auto__ = e24952;
var statearr_24953_24974 = state_24930;
(statearr_24953_24974[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24975 = state_24930;
state_24930 = G__24975;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$state_machine__24170__auto__ = function(state_24930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24170__auto____1.call(this,state_24930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24170__auto____0;
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24170__auto____1;
return cljs$core$async$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___24959,tc,fc))
})();
var state__24283__auto__ = (function (){var statearr_24954 = f__24282__auto__.call(null);
(statearr_24954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___24959);

return statearr_24954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___24959,tc,fc))
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
var c__24281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto__){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto__){
return (function (state_25039){
var state_val_25040 = (state_25039[(1)]);
if((state_val_25040 === (7))){
var inst_25035 = (state_25039[(2)]);
var state_25039__$1 = state_25039;
var statearr_25041_25062 = state_25039__$1;
(statearr_25041_25062[(2)] = inst_25035);

(statearr_25041_25062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25040 === (1))){
var inst_25019 = init;
var state_25039__$1 = (function (){var statearr_25042 = state_25039;
(statearr_25042[(7)] = inst_25019);

return statearr_25042;
})();
var statearr_25043_25063 = state_25039__$1;
(statearr_25043_25063[(2)] = null);

(statearr_25043_25063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25040 === (4))){
var inst_25022 = (state_25039[(8)]);
var inst_25022__$1 = (state_25039[(2)]);
var inst_25023 = (inst_25022__$1 == null);
var state_25039__$1 = (function (){var statearr_25044 = state_25039;
(statearr_25044[(8)] = inst_25022__$1);

return statearr_25044;
})();
if(cljs.core.truth_(inst_25023)){
var statearr_25045_25064 = state_25039__$1;
(statearr_25045_25064[(1)] = (5));

} else {
var statearr_25046_25065 = state_25039__$1;
(statearr_25046_25065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25040 === (6))){
var inst_25022 = (state_25039[(8)]);
var inst_25019 = (state_25039[(7)]);
var inst_25026 = (state_25039[(9)]);
var inst_25026__$1 = f.call(null,inst_25019,inst_25022);
var inst_25027 = cljs.core.reduced_QMARK_.call(null,inst_25026__$1);
var state_25039__$1 = (function (){var statearr_25047 = state_25039;
(statearr_25047[(9)] = inst_25026__$1);

return statearr_25047;
})();
if(inst_25027){
var statearr_25048_25066 = state_25039__$1;
(statearr_25048_25066[(1)] = (8));

} else {
var statearr_25049_25067 = state_25039__$1;
(statearr_25049_25067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25040 === (3))){
var inst_25037 = (state_25039[(2)]);
var state_25039__$1 = state_25039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25039__$1,inst_25037);
} else {
if((state_val_25040 === (2))){
var state_25039__$1 = state_25039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25039__$1,(4),ch);
} else {
if((state_val_25040 === (9))){
var inst_25026 = (state_25039[(9)]);
var inst_25019 = inst_25026;
var state_25039__$1 = (function (){var statearr_25050 = state_25039;
(statearr_25050[(7)] = inst_25019);

return statearr_25050;
})();
var statearr_25051_25068 = state_25039__$1;
(statearr_25051_25068[(2)] = null);

(statearr_25051_25068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25040 === (5))){
var inst_25019 = (state_25039[(7)]);
var state_25039__$1 = state_25039;
var statearr_25052_25069 = state_25039__$1;
(statearr_25052_25069[(2)] = inst_25019);

(statearr_25052_25069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25040 === (10))){
var inst_25033 = (state_25039[(2)]);
var state_25039__$1 = state_25039;
var statearr_25053_25070 = state_25039__$1;
(statearr_25053_25070[(2)] = inst_25033);

(statearr_25053_25070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25040 === (8))){
var inst_25026 = (state_25039[(9)]);
var inst_25029 = cljs.core.deref.call(null,inst_25026);
var state_25039__$1 = state_25039;
var statearr_25054_25071 = state_25039__$1;
(statearr_25054_25071[(2)] = inst_25029);

(statearr_25054_25071[(1)] = (10));


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
});})(c__24281__auto__))
;
return ((function (switch__24169__auto__,c__24281__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24170__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24170__auto____0 = (function (){
var statearr_25058 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25058[(0)] = cljs$core$async$reduce_$_state_machine__24170__auto__);

(statearr_25058[(1)] = (1));

return statearr_25058;
});
var cljs$core$async$reduce_$_state_machine__24170__auto____1 = (function (state_25039){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_25039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e25059){if((e25059 instanceof Object)){
var ex__24173__auto__ = e25059;
var statearr_25060_25072 = state_25039;
(statearr_25060_25072[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25073 = state_25039;
state_25039 = G__25073;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24170__auto__ = function(state_25039){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24170__auto____1.call(this,state_25039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24170__auto____0;
cljs$core$async$reduce_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24170__auto____1;
return cljs$core$async$reduce_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto__))
})();
var state__24283__auto__ = (function (){var statearr_25061 = f__24282__auto__.call(null);
(statearr_25061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto__);

return statearr_25061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto__))
);

return c__24281__auto__;
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
var args25074 = [];
var len__17809__auto___25126 = arguments.length;
var i__17810__auto___25127 = (0);
while(true){
if((i__17810__auto___25127 < len__17809__auto___25126)){
args25074.push((arguments[i__17810__auto___25127]));

var G__25128 = (i__17810__auto___25127 + (1));
i__17810__auto___25127 = G__25128;
continue;
} else {
}
break;
}

var G__25076 = args25074.length;
switch (G__25076) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25074.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto__){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto__){
return (function (state_25101){
var state_val_25102 = (state_25101[(1)]);
if((state_val_25102 === (7))){
var inst_25083 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
var statearr_25103_25130 = state_25101__$1;
(statearr_25103_25130[(2)] = inst_25083);

(statearr_25103_25130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (1))){
var inst_25077 = cljs.core.seq.call(null,coll);
var inst_25078 = inst_25077;
var state_25101__$1 = (function (){var statearr_25104 = state_25101;
(statearr_25104[(7)] = inst_25078);

return statearr_25104;
})();
var statearr_25105_25131 = state_25101__$1;
(statearr_25105_25131[(2)] = null);

(statearr_25105_25131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (4))){
var inst_25078 = (state_25101[(7)]);
var inst_25081 = cljs.core.first.call(null,inst_25078);
var state_25101__$1 = state_25101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25101__$1,(7),ch,inst_25081);
} else {
if((state_val_25102 === (13))){
var inst_25095 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
var statearr_25106_25132 = state_25101__$1;
(statearr_25106_25132[(2)] = inst_25095);

(statearr_25106_25132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (6))){
var inst_25086 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
if(cljs.core.truth_(inst_25086)){
var statearr_25107_25133 = state_25101__$1;
(statearr_25107_25133[(1)] = (8));

} else {
var statearr_25108_25134 = state_25101__$1;
(statearr_25108_25134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (3))){
var inst_25099 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25101__$1,inst_25099);
} else {
if((state_val_25102 === (12))){
var state_25101__$1 = state_25101;
var statearr_25109_25135 = state_25101__$1;
(statearr_25109_25135[(2)] = null);

(statearr_25109_25135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (2))){
var inst_25078 = (state_25101[(7)]);
var state_25101__$1 = state_25101;
if(cljs.core.truth_(inst_25078)){
var statearr_25110_25136 = state_25101__$1;
(statearr_25110_25136[(1)] = (4));

} else {
var statearr_25111_25137 = state_25101__$1;
(statearr_25111_25137[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (11))){
var inst_25092 = cljs.core.async.close_BANG_.call(null,ch);
var state_25101__$1 = state_25101;
var statearr_25112_25138 = state_25101__$1;
(statearr_25112_25138[(2)] = inst_25092);

(statearr_25112_25138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (9))){
var state_25101__$1 = state_25101;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25113_25139 = state_25101__$1;
(statearr_25113_25139[(1)] = (11));

} else {
var statearr_25114_25140 = state_25101__$1;
(statearr_25114_25140[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (5))){
var inst_25078 = (state_25101[(7)]);
var state_25101__$1 = state_25101;
var statearr_25115_25141 = state_25101__$1;
(statearr_25115_25141[(2)] = inst_25078);

(statearr_25115_25141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (10))){
var inst_25097 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
var statearr_25116_25142 = state_25101__$1;
(statearr_25116_25142[(2)] = inst_25097);

(statearr_25116_25142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (8))){
var inst_25078 = (state_25101[(7)]);
var inst_25088 = cljs.core.next.call(null,inst_25078);
var inst_25078__$1 = inst_25088;
var state_25101__$1 = (function (){var statearr_25117 = state_25101;
(statearr_25117[(7)] = inst_25078__$1);

return statearr_25117;
})();
var statearr_25118_25143 = state_25101__$1;
(statearr_25118_25143[(2)] = null);

(statearr_25118_25143[(1)] = (2));


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
});})(c__24281__auto__))
;
return ((function (switch__24169__auto__,c__24281__auto__){
return (function() {
var cljs$core$async$state_machine__24170__auto__ = null;
var cljs$core$async$state_machine__24170__auto____0 = (function (){
var statearr_25122 = [null,null,null,null,null,null,null,null];
(statearr_25122[(0)] = cljs$core$async$state_machine__24170__auto__);

(statearr_25122[(1)] = (1));

return statearr_25122;
});
var cljs$core$async$state_machine__24170__auto____1 = (function (state_25101){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_25101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e25123){if((e25123 instanceof Object)){
var ex__24173__auto__ = e25123;
var statearr_25124_25144 = state_25101;
(statearr_25124_25144[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25145 = state_25101;
state_25101 = G__25145;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$state_machine__24170__auto__ = function(state_25101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24170__auto____1.call(this,state_25101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24170__auto____0;
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24170__auto____1;
return cljs$core$async$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto__))
})();
var state__24283__auto__ = (function (){var statearr_25125 = f__24282__auto__.call(null);
(statearr_25125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto__);

return statearr_25125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto__))
);

return c__24281__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25367 = (function (mult,ch,cs,meta25368){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25368 = meta25368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25369,meta25368__$1){
var self__ = this;
var _25369__$1 = this;
return (new cljs.core.async.t_cljs$core$async25367(self__.mult,self__.ch,self__.cs,meta25368__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25369){
var self__ = this;
var _25369__$1 = this;
return self__.meta25368;
});})(cs))
;

cljs.core.async.t_cljs$core$async25367.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25367.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25367.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25367.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25367.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25367.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25368","meta25368",-1623960462,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25367";

cljs.core.async.t_cljs$core$async25367.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25367");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25367 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25367(mult__$1,ch__$1,cs__$1,meta25368){
return (new cljs.core.async.t_cljs$core$async25367(mult__$1,ch__$1,cs__$1,meta25368));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25367(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24281__auto___25588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___25588,cs,m,dchan,dctr,done){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___25588,cs,m,dchan,dctr,done){
return (function (state_25500){
var state_val_25501 = (state_25500[(1)]);
if((state_val_25501 === (7))){
var inst_25496 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25502_25589 = state_25500__$1;
(statearr_25502_25589[(2)] = inst_25496);

(statearr_25502_25589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (20))){
var inst_25401 = (state_25500[(7)]);
var inst_25411 = cljs.core.first.call(null,inst_25401);
var inst_25412 = cljs.core.nth.call(null,inst_25411,(0),null);
var inst_25413 = cljs.core.nth.call(null,inst_25411,(1),null);
var state_25500__$1 = (function (){var statearr_25503 = state_25500;
(statearr_25503[(8)] = inst_25412);

return statearr_25503;
})();
if(cljs.core.truth_(inst_25413)){
var statearr_25504_25590 = state_25500__$1;
(statearr_25504_25590[(1)] = (22));

} else {
var statearr_25505_25591 = state_25500__$1;
(statearr_25505_25591[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (27))){
var inst_25441 = (state_25500[(9)]);
var inst_25448 = (state_25500[(10)]);
var inst_25372 = (state_25500[(11)]);
var inst_25443 = (state_25500[(12)]);
var inst_25448__$1 = cljs.core._nth.call(null,inst_25441,inst_25443);
var inst_25449 = cljs.core.async.put_BANG_.call(null,inst_25448__$1,inst_25372,done);
var state_25500__$1 = (function (){var statearr_25506 = state_25500;
(statearr_25506[(10)] = inst_25448__$1);

return statearr_25506;
})();
if(cljs.core.truth_(inst_25449)){
var statearr_25507_25592 = state_25500__$1;
(statearr_25507_25592[(1)] = (30));

} else {
var statearr_25508_25593 = state_25500__$1;
(statearr_25508_25593[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (1))){
var state_25500__$1 = state_25500;
var statearr_25509_25594 = state_25500__$1;
(statearr_25509_25594[(2)] = null);

(statearr_25509_25594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (24))){
var inst_25401 = (state_25500[(7)]);
var inst_25418 = (state_25500[(2)]);
var inst_25419 = cljs.core.next.call(null,inst_25401);
var inst_25381 = inst_25419;
var inst_25382 = null;
var inst_25383 = (0);
var inst_25384 = (0);
var state_25500__$1 = (function (){var statearr_25510 = state_25500;
(statearr_25510[(13)] = inst_25384);

(statearr_25510[(14)] = inst_25383);

(statearr_25510[(15)] = inst_25418);

(statearr_25510[(16)] = inst_25382);

(statearr_25510[(17)] = inst_25381);

return statearr_25510;
})();
var statearr_25511_25595 = state_25500__$1;
(statearr_25511_25595[(2)] = null);

(statearr_25511_25595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (39))){
var state_25500__$1 = state_25500;
var statearr_25515_25596 = state_25500__$1;
(statearr_25515_25596[(2)] = null);

(statearr_25515_25596[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (4))){
var inst_25372 = (state_25500[(11)]);
var inst_25372__$1 = (state_25500[(2)]);
var inst_25373 = (inst_25372__$1 == null);
var state_25500__$1 = (function (){var statearr_25516 = state_25500;
(statearr_25516[(11)] = inst_25372__$1);

return statearr_25516;
})();
if(cljs.core.truth_(inst_25373)){
var statearr_25517_25597 = state_25500__$1;
(statearr_25517_25597[(1)] = (5));

} else {
var statearr_25518_25598 = state_25500__$1;
(statearr_25518_25598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (15))){
var inst_25384 = (state_25500[(13)]);
var inst_25383 = (state_25500[(14)]);
var inst_25382 = (state_25500[(16)]);
var inst_25381 = (state_25500[(17)]);
var inst_25397 = (state_25500[(2)]);
var inst_25398 = (inst_25384 + (1));
var tmp25512 = inst_25383;
var tmp25513 = inst_25382;
var tmp25514 = inst_25381;
var inst_25381__$1 = tmp25514;
var inst_25382__$1 = tmp25513;
var inst_25383__$1 = tmp25512;
var inst_25384__$1 = inst_25398;
var state_25500__$1 = (function (){var statearr_25519 = state_25500;
(statearr_25519[(13)] = inst_25384__$1);

(statearr_25519[(14)] = inst_25383__$1);

(statearr_25519[(18)] = inst_25397);

(statearr_25519[(16)] = inst_25382__$1);

(statearr_25519[(17)] = inst_25381__$1);

return statearr_25519;
})();
var statearr_25520_25599 = state_25500__$1;
(statearr_25520_25599[(2)] = null);

(statearr_25520_25599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (21))){
var inst_25422 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25524_25600 = state_25500__$1;
(statearr_25524_25600[(2)] = inst_25422);

(statearr_25524_25600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (31))){
var inst_25448 = (state_25500[(10)]);
var inst_25452 = done.call(null,null);
var inst_25453 = cljs.core.async.untap_STAR_.call(null,m,inst_25448);
var state_25500__$1 = (function (){var statearr_25525 = state_25500;
(statearr_25525[(19)] = inst_25452);

return statearr_25525;
})();
var statearr_25526_25601 = state_25500__$1;
(statearr_25526_25601[(2)] = inst_25453);

(statearr_25526_25601[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (32))){
var inst_25441 = (state_25500[(9)]);
var inst_25440 = (state_25500[(20)]);
var inst_25442 = (state_25500[(21)]);
var inst_25443 = (state_25500[(12)]);
var inst_25455 = (state_25500[(2)]);
var inst_25456 = (inst_25443 + (1));
var tmp25521 = inst_25441;
var tmp25522 = inst_25440;
var tmp25523 = inst_25442;
var inst_25440__$1 = tmp25522;
var inst_25441__$1 = tmp25521;
var inst_25442__$1 = tmp25523;
var inst_25443__$1 = inst_25456;
var state_25500__$1 = (function (){var statearr_25527 = state_25500;
(statearr_25527[(9)] = inst_25441__$1);

(statearr_25527[(22)] = inst_25455);

(statearr_25527[(20)] = inst_25440__$1);

(statearr_25527[(21)] = inst_25442__$1);

(statearr_25527[(12)] = inst_25443__$1);

return statearr_25527;
})();
var statearr_25528_25602 = state_25500__$1;
(statearr_25528_25602[(2)] = null);

(statearr_25528_25602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (40))){
var inst_25468 = (state_25500[(23)]);
var inst_25472 = done.call(null,null);
var inst_25473 = cljs.core.async.untap_STAR_.call(null,m,inst_25468);
var state_25500__$1 = (function (){var statearr_25529 = state_25500;
(statearr_25529[(24)] = inst_25472);

return statearr_25529;
})();
var statearr_25530_25603 = state_25500__$1;
(statearr_25530_25603[(2)] = inst_25473);

(statearr_25530_25603[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (33))){
var inst_25459 = (state_25500[(25)]);
var inst_25461 = cljs.core.chunked_seq_QMARK_.call(null,inst_25459);
var state_25500__$1 = state_25500;
if(inst_25461){
var statearr_25531_25604 = state_25500__$1;
(statearr_25531_25604[(1)] = (36));

} else {
var statearr_25532_25605 = state_25500__$1;
(statearr_25532_25605[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (13))){
var inst_25391 = (state_25500[(26)]);
var inst_25394 = cljs.core.async.close_BANG_.call(null,inst_25391);
var state_25500__$1 = state_25500;
var statearr_25533_25606 = state_25500__$1;
(statearr_25533_25606[(2)] = inst_25394);

(statearr_25533_25606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (22))){
var inst_25412 = (state_25500[(8)]);
var inst_25415 = cljs.core.async.close_BANG_.call(null,inst_25412);
var state_25500__$1 = state_25500;
var statearr_25534_25607 = state_25500__$1;
(statearr_25534_25607[(2)] = inst_25415);

(statearr_25534_25607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (36))){
var inst_25459 = (state_25500[(25)]);
var inst_25463 = cljs.core.chunk_first.call(null,inst_25459);
var inst_25464 = cljs.core.chunk_rest.call(null,inst_25459);
var inst_25465 = cljs.core.count.call(null,inst_25463);
var inst_25440 = inst_25464;
var inst_25441 = inst_25463;
var inst_25442 = inst_25465;
var inst_25443 = (0);
var state_25500__$1 = (function (){var statearr_25535 = state_25500;
(statearr_25535[(9)] = inst_25441);

(statearr_25535[(20)] = inst_25440);

(statearr_25535[(21)] = inst_25442);

(statearr_25535[(12)] = inst_25443);

return statearr_25535;
})();
var statearr_25536_25608 = state_25500__$1;
(statearr_25536_25608[(2)] = null);

(statearr_25536_25608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (41))){
var inst_25459 = (state_25500[(25)]);
var inst_25475 = (state_25500[(2)]);
var inst_25476 = cljs.core.next.call(null,inst_25459);
var inst_25440 = inst_25476;
var inst_25441 = null;
var inst_25442 = (0);
var inst_25443 = (0);
var state_25500__$1 = (function (){var statearr_25537 = state_25500;
(statearr_25537[(9)] = inst_25441);

(statearr_25537[(27)] = inst_25475);

(statearr_25537[(20)] = inst_25440);

(statearr_25537[(21)] = inst_25442);

(statearr_25537[(12)] = inst_25443);

return statearr_25537;
})();
var statearr_25538_25609 = state_25500__$1;
(statearr_25538_25609[(2)] = null);

(statearr_25538_25609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (43))){
var state_25500__$1 = state_25500;
var statearr_25539_25610 = state_25500__$1;
(statearr_25539_25610[(2)] = null);

(statearr_25539_25610[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (29))){
var inst_25484 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25540_25611 = state_25500__$1;
(statearr_25540_25611[(2)] = inst_25484);

(statearr_25540_25611[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (44))){
var inst_25493 = (state_25500[(2)]);
var state_25500__$1 = (function (){var statearr_25541 = state_25500;
(statearr_25541[(28)] = inst_25493);

return statearr_25541;
})();
var statearr_25542_25612 = state_25500__$1;
(statearr_25542_25612[(2)] = null);

(statearr_25542_25612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (6))){
var inst_25432 = (state_25500[(29)]);
var inst_25431 = cljs.core.deref.call(null,cs);
var inst_25432__$1 = cljs.core.keys.call(null,inst_25431);
var inst_25433 = cljs.core.count.call(null,inst_25432__$1);
var inst_25434 = cljs.core.reset_BANG_.call(null,dctr,inst_25433);
var inst_25439 = cljs.core.seq.call(null,inst_25432__$1);
var inst_25440 = inst_25439;
var inst_25441 = null;
var inst_25442 = (0);
var inst_25443 = (0);
var state_25500__$1 = (function (){var statearr_25543 = state_25500;
(statearr_25543[(9)] = inst_25441);

(statearr_25543[(29)] = inst_25432__$1);

(statearr_25543[(30)] = inst_25434);

(statearr_25543[(20)] = inst_25440);

(statearr_25543[(21)] = inst_25442);

(statearr_25543[(12)] = inst_25443);

return statearr_25543;
})();
var statearr_25544_25613 = state_25500__$1;
(statearr_25544_25613[(2)] = null);

(statearr_25544_25613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (28))){
var inst_25459 = (state_25500[(25)]);
var inst_25440 = (state_25500[(20)]);
var inst_25459__$1 = cljs.core.seq.call(null,inst_25440);
var state_25500__$1 = (function (){var statearr_25545 = state_25500;
(statearr_25545[(25)] = inst_25459__$1);

return statearr_25545;
})();
if(inst_25459__$1){
var statearr_25546_25614 = state_25500__$1;
(statearr_25546_25614[(1)] = (33));

} else {
var statearr_25547_25615 = state_25500__$1;
(statearr_25547_25615[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (25))){
var inst_25442 = (state_25500[(21)]);
var inst_25443 = (state_25500[(12)]);
var inst_25445 = (inst_25443 < inst_25442);
var inst_25446 = inst_25445;
var state_25500__$1 = state_25500;
if(cljs.core.truth_(inst_25446)){
var statearr_25548_25616 = state_25500__$1;
(statearr_25548_25616[(1)] = (27));

} else {
var statearr_25549_25617 = state_25500__$1;
(statearr_25549_25617[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (34))){
var state_25500__$1 = state_25500;
var statearr_25550_25618 = state_25500__$1;
(statearr_25550_25618[(2)] = null);

(statearr_25550_25618[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (17))){
var state_25500__$1 = state_25500;
var statearr_25551_25619 = state_25500__$1;
(statearr_25551_25619[(2)] = null);

(statearr_25551_25619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (3))){
var inst_25498 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25500__$1,inst_25498);
} else {
if((state_val_25501 === (12))){
var inst_25427 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25552_25620 = state_25500__$1;
(statearr_25552_25620[(2)] = inst_25427);

(statearr_25552_25620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (2))){
var state_25500__$1 = state_25500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25500__$1,(4),ch);
} else {
if((state_val_25501 === (23))){
var state_25500__$1 = state_25500;
var statearr_25553_25621 = state_25500__$1;
(statearr_25553_25621[(2)] = null);

(statearr_25553_25621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (35))){
var inst_25482 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25554_25622 = state_25500__$1;
(statearr_25554_25622[(2)] = inst_25482);

(statearr_25554_25622[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (19))){
var inst_25401 = (state_25500[(7)]);
var inst_25405 = cljs.core.chunk_first.call(null,inst_25401);
var inst_25406 = cljs.core.chunk_rest.call(null,inst_25401);
var inst_25407 = cljs.core.count.call(null,inst_25405);
var inst_25381 = inst_25406;
var inst_25382 = inst_25405;
var inst_25383 = inst_25407;
var inst_25384 = (0);
var state_25500__$1 = (function (){var statearr_25555 = state_25500;
(statearr_25555[(13)] = inst_25384);

(statearr_25555[(14)] = inst_25383);

(statearr_25555[(16)] = inst_25382);

(statearr_25555[(17)] = inst_25381);

return statearr_25555;
})();
var statearr_25556_25623 = state_25500__$1;
(statearr_25556_25623[(2)] = null);

(statearr_25556_25623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (11))){
var inst_25381 = (state_25500[(17)]);
var inst_25401 = (state_25500[(7)]);
var inst_25401__$1 = cljs.core.seq.call(null,inst_25381);
var state_25500__$1 = (function (){var statearr_25557 = state_25500;
(statearr_25557[(7)] = inst_25401__$1);

return statearr_25557;
})();
if(inst_25401__$1){
var statearr_25558_25624 = state_25500__$1;
(statearr_25558_25624[(1)] = (16));

} else {
var statearr_25559_25625 = state_25500__$1;
(statearr_25559_25625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (9))){
var inst_25429 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25560_25626 = state_25500__$1;
(statearr_25560_25626[(2)] = inst_25429);

(statearr_25560_25626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (5))){
var inst_25379 = cljs.core.deref.call(null,cs);
var inst_25380 = cljs.core.seq.call(null,inst_25379);
var inst_25381 = inst_25380;
var inst_25382 = null;
var inst_25383 = (0);
var inst_25384 = (0);
var state_25500__$1 = (function (){var statearr_25561 = state_25500;
(statearr_25561[(13)] = inst_25384);

(statearr_25561[(14)] = inst_25383);

(statearr_25561[(16)] = inst_25382);

(statearr_25561[(17)] = inst_25381);

return statearr_25561;
})();
var statearr_25562_25627 = state_25500__$1;
(statearr_25562_25627[(2)] = null);

(statearr_25562_25627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (14))){
var state_25500__$1 = state_25500;
var statearr_25563_25628 = state_25500__$1;
(statearr_25563_25628[(2)] = null);

(statearr_25563_25628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (45))){
var inst_25490 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25564_25629 = state_25500__$1;
(statearr_25564_25629[(2)] = inst_25490);

(statearr_25564_25629[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (26))){
var inst_25432 = (state_25500[(29)]);
var inst_25486 = (state_25500[(2)]);
var inst_25487 = cljs.core.seq.call(null,inst_25432);
var state_25500__$1 = (function (){var statearr_25565 = state_25500;
(statearr_25565[(31)] = inst_25486);

return statearr_25565;
})();
if(inst_25487){
var statearr_25566_25630 = state_25500__$1;
(statearr_25566_25630[(1)] = (42));

} else {
var statearr_25567_25631 = state_25500__$1;
(statearr_25567_25631[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (16))){
var inst_25401 = (state_25500[(7)]);
var inst_25403 = cljs.core.chunked_seq_QMARK_.call(null,inst_25401);
var state_25500__$1 = state_25500;
if(inst_25403){
var statearr_25568_25632 = state_25500__$1;
(statearr_25568_25632[(1)] = (19));

} else {
var statearr_25569_25633 = state_25500__$1;
(statearr_25569_25633[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (38))){
var inst_25479 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25570_25634 = state_25500__$1;
(statearr_25570_25634[(2)] = inst_25479);

(statearr_25570_25634[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (30))){
var state_25500__$1 = state_25500;
var statearr_25571_25635 = state_25500__$1;
(statearr_25571_25635[(2)] = null);

(statearr_25571_25635[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (10))){
var inst_25384 = (state_25500[(13)]);
var inst_25382 = (state_25500[(16)]);
var inst_25390 = cljs.core._nth.call(null,inst_25382,inst_25384);
var inst_25391 = cljs.core.nth.call(null,inst_25390,(0),null);
var inst_25392 = cljs.core.nth.call(null,inst_25390,(1),null);
var state_25500__$1 = (function (){var statearr_25572 = state_25500;
(statearr_25572[(26)] = inst_25391);

return statearr_25572;
})();
if(cljs.core.truth_(inst_25392)){
var statearr_25573_25636 = state_25500__$1;
(statearr_25573_25636[(1)] = (13));

} else {
var statearr_25574_25637 = state_25500__$1;
(statearr_25574_25637[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (18))){
var inst_25425 = (state_25500[(2)]);
var state_25500__$1 = state_25500;
var statearr_25575_25638 = state_25500__$1;
(statearr_25575_25638[(2)] = inst_25425);

(statearr_25575_25638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (42))){
var state_25500__$1 = state_25500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25500__$1,(45),dchan);
} else {
if((state_val_25501 === (37))){
var inst_25459 = (state_25500[(25)]);
var inst_25372 = (state_25500[(11)]);
var inst_25468 = (state_25500[(23)]);
var inst_25468__$1 = cljs.core.first.call(null,inst_25459);
var inst_25469 = cljs.core.async.put_BANG_.call(null,inst_25468__$1,inst_25372,done);
var state_25500__$1 = (function (){var statearr_25576 = state_25500;
(statearr_25576[(23)] = inst_25468__$1);

return statearr_25576;
})();
if(cljs.core.truth_(inst_25469)){
var statearr_25577_25639 = state_25500__$1;
(statearr_25577_25639[(1)] = (39));

} else {
var statearr_25578_25640 = state_25500__$1;
(statearr_25578_25640[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25501 === (8))){
var inst_25384 = (state_25500[(13)]);
var inst_25383 = (state_25500[(14)]);
var inst_25386 = (inst_25384 < inst_25383);
var inst_25387 = inst_25386;
var state_25500__$1 = state_25500;
if(cljs.core.truth_(inst_25387)){
var statearr_25579_25641 = state_25500__$1;
(statearr_25579_25641[(1)] = (10));

} else {
var statearr_25580_25642 = state_25500__$1;
(statearr_25580_25642[(1)] = (11));

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
});})(c__24281__auto___25588,cs,m,dchan,dctr,done))
;
return ((function (switch__24169__auto__,c__24281__auto___25588,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24170__auto__ = null;
var cljs$core$async$mult_$_state_machine__24170__auto____0 = (function (){
var statearr_25584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25584[(0)] = cljs$core$async$mult_$_state_machine__24170__auto__);

(statearr_25584[(1)] = (1));

return statearr_25584;
});
var cljs$core$async$mult_$_state_machine__24170__auto____1 = (function (state_25500){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_25500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e25585){if((e25585 instanceof Object)){
var ex__24173__auto__ = e25585;
var statearr_25586_25643 = state_25500;
(statearr_25586_25643[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25644 = state_25500;
state_25500 = G__25644;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24170__auto__ = function(state_25500){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24170__auto____1.call(this,state_25500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24170__auto____0;
cljs$core$async$mult_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24170__auto____1;
return cljs$core$async$mult_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___25588,cs,m,dchan,dctr,done))
})();
var state__24283__auto__ = (function (){var statearr_25587 = f__24282__auto__.call(null);
(statearr_25587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___25588);

return statearr_25587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___25588,cs,m,dchan,dctr,done))
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
var args25645 = [];
var len__17809__auto___25648 = arguments.length;
var i__17810__auto___25649 = (0);
while(true){
if((i__17810__auto___25649 < len__17809__auto___25648)){
args25645.push((arguments[i__17810__auto___25649]));

var G__25650 = (i__17810__auto___25649 + (1));
i__17810__auto___25649 = G__25650;
continue;
} else {
}
break;
}

var G__25647 = args25645.length;
switch (G__25647) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25645.length)].join('')));

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
var len__17809__auto___25662 = arguments.length;
var i__17810__auto___25663 = (0);
while(true){
if((i__17810__auto___25663 < len__17809__auto___25662)){
args__17816__auto__.push((arguments[i__17810__auto___25663]));

var G__25664 = (i__17810__auto___25663 + (1));
i__17810__auto___25663 = G__25664;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25656){
var map__25657 = p__25656;
var map__25657__$1 = ((((!((map__25657 == null)))?((((map__25657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25657):map__25657);
var opts = map__25657__$1;
var statearr_25659_25665 = state;
(statearr_25659_25665[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25657,map__25657__$1,opts){
return (function (val){
var statearr_25660_25666 = state;
(statearr_25660_25666[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25657,map__25657__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25661_25667 = state;
(statearr_25661_25667[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25652){
var G__25653 = cljs.core.first.call(null,seq25652);
var seq25652__$1 = cljs.core.next.call(null,seq25652);
var G__25654 = cljs.core.first.call(null,seq25652__$1);
var seq25652__$2 = cljs.core.next.call(null,seq25652__$1);
var G__25655 = cljs.core.first.call(null,seq25652__$2);
var seq25652__$3 = cljs.core.next.call(null,seq25652__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25653,G__25654,G__25655,seq25652__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25831 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25832){
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
this.meta25832 = meta25832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25833,meta25832__$1){
var self__ = this;
var _25833__$1 = this;
return (new cljs.core.async.t_cljs$core$async25831(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25832__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25833){
var self__ = this;
var _25833__$1 = this;
return self__.meta25832;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25831.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25831.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25831.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25831.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25831.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25831.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25831.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25831.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25832","meta25832",147231258,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25831";

cljs.core.async.t_cljs$core$async25831.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25831");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25831 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25831(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25832){
return (new cljs.core.async.t_cljs$core$async25831(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25832));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25831(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24281__auto___25994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___25994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___25994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25931){
var state_val_25932 = (state_25931[(1)]);
if((state_val_25932 === (7))){
var inst_25849 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25933_25995 = state_25931__$1;
(statearr_25933_25995[(2)] = inst_25849);

(statearr_25933_25995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (20))){
var inst_25861 = (state_25931[(7)]);
var state_25931__$1 = state_25931;
var statearr_25934_25996 = state_25931__$1;
(statearr_25934_25996[(2)] = inst_25861);

(statearr_25934_25996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (27))){
var state_25931__$1 = state_25931;
var statearr_25935_25997 = state_25931__$1;
(statearr_25935_25997[(2)] = null);

(statearr_25935_25997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (1))){
var inst_25837 = (state_25931[(8)]);
var inst_25837__$1 = calc_state.call(null);
var inst_25839 = (inst_25837__$1 == null);
var inst_25840 = cljs.core.not.call(null,inst_25839);
var state_25931__$1 = (function (){var statearr_25936 = state_25931;
(statearr_25936[(8)] = inst_25837__$1);

return statearr_25936;
})();
if(inst_25840){
var statearr_25937_25998 = state_25931__$1;
(statearr_25937_25998[(1)] = (2));

} else {
var statearr_25938_25999 = state_25931__$1;
(statearr_25938_25999[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (24))){
var inst_25884 = (state_25931[(9)]);
var inst_25905 = (state_25931[(10)]);
var inst_25891 = (state_25931[(11)]);
var inst_25905__$1 = inst_25884.call(null,inst_25891);
var state_25931__$1 = (function (){var statearr_25939 = state_25931;
(statearr_25939[(10)] = inst_25905__$1);

return statearr_25939;
})();
if(cljs.core.truth_(inst_25905__$1)){
var statearr_25940_26000 = state_25931__$1;
(statearr_25940_26000[(1)] = (29));

} else {
var statearr_25941_26001 = state_25931__$1;
(statearr_25941_26001[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (4))){
var inst_25852 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25852)){
var statearr_25942_26002 = state_25931__$1;
(statearr_25942_26002[(1)] = (8));

} else {
var statearr_25943_26003 = state_25931__$1;
(statearr_25943_26003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (15))){
var inst_25878 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25878)){
var statearr_25944_26004 = state_25931__$1;
(statearr_25944_26004[(1)] = (19));

} else {
var statearr_25945_26005 = state_25931__$1;
(statearr_25945_26005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (21))){
var inst_25883 = (state_25931[(12)]);
var inst_25883__$1 = (state_25931[(2)]);
var inst_25884 = cljs.core.get.call(null,inst_25883__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25885 = cljs.core.get.call(null,inst_25883__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25886 = cljs.core.get.call(null,inst_25883__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25931__$1 = (function (){var statearr_25946 = state_25931;
(statearr_25946[(13)] = inst_25885);

(statearr_25946[(9)] = inst_25884);

(statearr_25946[(12)] = inst_25883__$1);

return statearr_25946;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25931__$1,(22),inst_25886);
} else {
if((state_val_25932 === (31))){
var inst_25913 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25913)){
var statearr_25947_26006 = state_25931__$1;
(statearr_25947_26006[(1)] = (32));

} else {
var statearr_25948_26007 = state_25931__$1;
(statearr_25948_26007[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (32))){
var inst_25890 = (state_25931[(14)]);
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25931__$1,(35),out,inst_25890);
} else {
if((state_val_25932 === (33))){
var inst_25883 = (state_25931[(12)]);
var inst_25861 = inst_25883;
var state_25931__$1 = (function (){var statearr_25949 = state_25931;
(statearr_25949[(7)] = inst_25861);

return statearr_25949;
})();
var statearr_25950_26008 = state_25931__$1;
(statearr_25950_26008[(2)] = null);

(statearr_25950_26008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (13))){
var inst_25861 = (state_25931[(7)]);
var inst_25868 = inst_25861.cljs$lang$protocol_mask$partition0$;
var inst_25869 = (inst_25868 & (64));
var inst_25870 = inst_25861.cljs$core$ISeq$;
var inst_25871 = (inst_25869) || (inst_25870);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25871)){
var statearr_25951_26009 = state_25931__$1;
(statearr_25951_26009[(1)] = (16));

} else {
var statearr_25952_26010 = state_25931__$1;
(statearr_25952_26010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (22))){
var inst_25890 = (state_25931[(14)]);
var inst_25891 = (state_25931[(11)]);
var inst_25889 = (state_25931[(2)]);
var inst_25890__$1 = cljs.core.nth.call(null,inst_25889,(0),null);
var inst_25891__$1 = cljs.core.nth.call(null,inst_25889,(1),null);
var inst_25892 = (inst_25890__$1 == null);
var inst_25893 = cljs.core._EQ_.call(null,inst_25891__$1,change);
var inst_25894 = (inst_25892) || (inst_25893);
var state_25931__$1 = (function (){var statearr_25953 = state_25931;
(statearr_25953[(14)] = inst_25890__$1);

(statearr_25953[(11)] = inst_25891__$1);

return statearr_25953;
})();
if(cljs.core.truth_(inst_25894)){
var statearr_25954_26011 = state_25931__$1;
(statearr_25954_26011[(1)] = (23));

} else {
var statearr_25955_26012 = state_25931__$1;
(statearr_25955_26012[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (36))){
var inst_25883 = (state_25931[(12)]);
var inst_25861 = inst_25883;
var state_25931__$1 = (function (){var statearr_25956 = state_25931;
(statearr_25956[(7)] = inst_25861);

return statearr_25956;
})();
var statearr_25957_26013 = state_25931__$1;
(statearr_25957_26013[(2)] = null);

(statearr_25957_26013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (29))){
var inst_25905 = (state_25931[(10)]);
var state_25931__$1 = state_25931;
var statearr_25958_26014 = state_25931__$1;
(statearr_25958_26014[(2)] = inst_25905);

(statearr_25958_26014[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (6))){
var state_25931__$1 = state_25931;
var statearr_25959_26015 = state_25931__$1;
(statearr_25959_26015[(2)] = false);

(statearr_25959_26015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (28))){
var inst_25901 = (state_25931[(2)]);
var inst_25902 = calc_state.call(null);
var inst_25861 = inst_25902;
var state_25931__$1 = (function (){var statearr_25960 = state_25931;
(statearr_25960[(15)] = inst_25901);

(statearr_25960[(7)] = inst_25861);

return statearr_25960;
})();
var statearr_25961_26016 = state_25931__$1;
(statearr_25961_26016[(2)] = null);

(statearr_25961_26016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (25))){
var inst_25927 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25962_26017 = state_25931__$1;
(statearr_25962_26017[(2)] = inst_25927);

(statearr_25962_26017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (34))){
var inst_25925 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25963_26018 = state_25931__$1;
(statearr_25963_26018[(2)] = inst_25925);

(statearr_25963_26018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (17))){
var state_25931__$1 = state_25931;
var statearr_25964_26019 = state_25931__$1;
(statearr_25964_26019[(2)] = false);

(statearr_25964_26019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (3))){
var state_25931__$1 = state_25931;
var statearr_25965_26020 = state_25931__$1;
(statearr_25965_26020[(2)] = false);

(statearr_25965_26020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (12))){
var inst_25929 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25931__$1,inst_25929);
} else {
if((state_val_25932 === (2))){
var inst_25837 = (state_25931[(8)]);
var inst_25842 = inst_25837.cljs$lang$protocol_mask$partition0$;
var inst_25843 = (inst_25842 & (64));
var inst_25844 = inst_25837.cljs$core$ISeq$;
var inst_25845 = (inst_25843) || (inst_25844);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25845)){
var statearr_25966_26021 = state_25931__$1;
(statearr_25966_26021[(1)] = (5));

} else {
var statearr_25967_26022 = state_25931__$1;
(statearr_25967_26022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (23))){
var inst_25890 = (state_25931[(14)]);
var inst_25896 = (inst_25890 == null);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25896)){
var statearr_25968_26023 = state_25931__$1;
(statearr_25968_26023[(1)] = (26));

} else {
var statearr_25969_26024 = state_25931__$1;
(statearr_25969_26024[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (35))){
var inst_25916 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25916)){
var statearr_25970_26025 = state_25931__$1;
(statearr_25970_26025[(1)] = (36));

} else {
var statearr_25971_26026 = state_25931__$1;
(statearr_25971_26026[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (19))){
var inst_25861 = (state_25931[(7)]);
var inst_25880 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25861);
var state_25931__$1 = state_25931;
var statearr_25972_26027 = state_25931__$1;
(statearr_25972_26027[(2)] = inst_25880);

(statearr_25972_26027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (11))){
var inst_25861 = (state_25931[(7)]);
var inst_25865 = (inst_25861 == null);
var inst_25866 = cljs.core.not.call(null,inst_25865);
var state_25931__$1 = state_25931;
if(inst_25866){
var statearr_25973_26028 = state_25931__$1;
(statearr_25973_26028[(1)] = (13));

} else {
var statearr_25974_26029 = state_25931__$1;
(statearr_25974_26029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (9))){
var inst_25837 = (state_25931[(8)]);
var state_25931__$1 = state_25931;
var statearr_25975_26030 = state_25931__$1;
(statearr_25975_26030[(2)] = inst_25837);

(statearr_25975_26030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (5))){
var state_25931__$1 = state_25931;
var statearr_25976_26031 = state_25931__$1;
(statearr_25976_26031[(2)] = true);

(statearr_25976_26031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (14))){
var state_25931__$1 = state_25931;
var statearr_25977_26032 = state_25931__$1;
(statearr_25977_26032[(2)] = false);

(statearr_25977_26032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (26))){
var inst_25891 = (state_25931[(11)]);
var inst_25898 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25891);
var state_25931__$1 = state_25931;
var statearr_25978_26033 = state_25931__$1;
(statearr_25978_26033[(2)] = inst_25898);

(statearr_25978_26033[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (16))){
var state_25931__$1 = state_25931;
var statearr_25979_26034 = state_25931__$1;
(statearr_25979_26034[(2)] = true);

(statearr_25979_26034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (38))){
var inst_25921 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25980_26035 = state_25931__$1;
(statearr_25980_26035[(2)] = inst_25921);

(statearr_25980_26035[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (30))){
var inst_25885 = (state_25931[(13)]);
var inst_25884 = (state_25931[(9)]);
var inst_25891 = (state_25931[(11)]);
var inst_25908 = cljs.core.empty_QMARK_.call(null,inst_25884);
var inst_25909 = inst_25885.call(null,inst_25891);
var inst_25910 = cljs.core.not.call(null,inst_25909);
var inst_25911 = (inst_25908) && (inst_25910);
var state_25931__$1 = state_25931;
var statearr_25981_26036 = state_25931__$1;
(statearr_25981_26036[(2)] = inst_25911);

(statearr_25981_26036[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (10))){
var inst_25837 = (state_25931[(8)]);
var inst_25857 = (state_25931[(2)]);
var inst_25858 = cljs.core.get.call(null,inst_25857,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25859 = cljs.core.get.call(null,inst_25857,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25860 = cljs.core.get.call(null,inst_25857,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25861 = inst_25837;
var state_25931__$1 = (function (){var statearr_25982 = state_25931;
(statearr_25982[(16)] = inst_25859);

(statearr_25982[(17)] = inst_25858);

(statearr_25982[(18)] = inst_25860);

(statearr_25982[(7)] = inst_25861);

return statearr_25982;
})();
var statearr_25983_26037 = state_25931__$1;
(statearr_25983_26037[(2)] = null);

(statearr_25983_26037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (18))){
var inst_25875 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25984_26038 = state_25931__$1;
(statearr_25984_26038[(2)] = inst_25875);

(statearr_25984_26038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (37))){
var state_25931__$1 = state_25931;
var statearr_25985_26039 = state_25931__$1;
(statearr_25985_26039[(2)] = null);

(statearr_25985_26039[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (8))){
var inst_25837 = (state_25931[(8)]);
var inst_25854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25837);
var state_25931__$1 = state_25931;
var statearr_25986_26040 = state_25931__$1;
(statearr_25986_26040[(2)] = inst_25854);

(statearr_25986_26040[(1)] = (10));


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
});})(c__24281__auto___25994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24169__auto__,c__24281__auto___25994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24170__auto__ = null;
var cljs$core$async$mix_$_state_machine__24170__auto____0 = (function (){
var statearr_25990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25990[(0)] = cljs$core$async$mix_$_state_machine__24170__auto__);

(statearr_25990[(1)] = (1));

return statearr_25990;
});
var cljs$core$async$mix_$_state_machine__24170__auto____1 = (function (state_25931){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_25931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e25991){if((e25991 instanceof Object)){
var ex__24173__auto__ = e25991;
var statearr_25992_26041 = state_25931;
(statearr_25992_26041[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26042 = state_25931;
state_25931 = G__26042;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24170__auto__ = function(state_25931){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24170__auto____1.call(this,state_25931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24170__auto____0;
cljs$core$async$mix_$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24170__auto____1;
return cljs$core$async$mix_$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___25994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24283__auto__ = (function (){var statearr_25993 = f__24282__auto__.call(null);
(statearr_25993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___25994);

return statearr_25993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___25994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26043 = [];
var len__17809__auto___26046 = arguments.length;
var i__17810__auto___26047 = (0);
while(true){
if((i__17810__auto___26047 < len__17809__auto___26046)){
args26043.push((arguments[i__17810__auto___26047]));

var G__26048 = (i__17810__auto___26047 + (1));
i__17810__auto___26047 = G__26048;
continue;
} else {
}
break;
}

var G__26045 = args26043.length;
switch (G__26045) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26043.length)].join('')));

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
var args26051 = [];
var len__17809__auto___26176 = arguments.length;
var i__17810__auto___26177 = (0);
while(true){
if((i__17810__auto___26177 < len__17809__auto___26176)){
args26051.push((arguments[i__17810__auto___26177]));

var G__26178 = (i__17810__auto___26177 + (1));
i__17810__auto___26177 = G__26178;
continue;
} else {
}
break;
}

var G__26053 = args26051.length;
switch (G__26053) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26051.length)].join('')));

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
return (function (p1__26050_SHARP_){
if(cljs.core.truth_(p1__26050_SHARP_.call(null,topic))){
return p1__26050_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26050_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26054 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26055){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26055 = meta26055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26056,meta26055__$1){
var self__ = this;
var _26056__$1 = this;
return (new cljs.core.async.t_cljs$core$async26054(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26055__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26056){
var self__ = this;
var _26056__$1 = this;
return self__.meta26055;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26054.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26054.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26054.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26054.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26054.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26054.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26054.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26054.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26055","meta26055",-562425111,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26054";

cljs.core.async.t_cljs$core$async26054.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26054");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26054 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26054(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26055){
return (new cljs.core.async.t_cljs$core$async26054(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26055));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26054(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24281__auto___26180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___26180,mults,ensure_mult,p){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___26180,mults,ensure_mult,p){
return (function (state_26128){
var state_val_26129 = (state_26128[(1)]);
if((state_val_26129 === (7))){
var inst_26124 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26130_26181 = state_26128__$1;
(statearr_26130_26181[(2)] = inst_26124);

(statearr_26130_26181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (20))){
var state_26128__$1 = state_26128;
var statearr_26131_26182 = state_26128__$1;
(statearr_26131_26182[(2)] = null);

(statearr_26131_26182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (1))){
var state_26128__$1 = state_26128;
var statearr_26132_26183 = state_26128__$1;
(statearr_26132_26183[(2)] = null);

(statearr_26132_26183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (24))){
var inst_26107 = (state_26128[(7)]);
var inst_26116 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26107);
var state_26128__$1 = state_26128;
var statearr_26133_26184 = state_26128__$1;
(statearr_26133_26184[(2)] = inst_26116);

(statearr_26133_26184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (4))){
var inst_26059 = (state_26128[(8)]);
var inst_26059__$1 = (state_26128[(2)]);
var inst_26060 = (inst_26059__$1 == null);
var state_26128__$1 = (function (){var statearr_26134 = state_26128;
(statearr_26134[(8)] = inst_26059__$1);

return statearr_26134;
})();
if(cljs.core.truth_(inst_26060)){
var statearr_26135_26185 = state_26128__$1;
(statearr_26135_26185[(1)] = (5));

} else {
var statearr_26136_26186 = state_26128__$1;
(statearr_26136_26186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (15))){
var inst_26101 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26137_26187 = state_26128__$1;
(statearr_26137_26187[(2)] = inst_26101);

(statearr_26137_26187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (21))){
var inst_26121 = (state_26128[(2)]);
var state_26128__$1 = (function (){var statearr_26138 = state_26128;
(statearr_26138[(9)] = inst_26121);

return statearr_26138;
})();
var statearr_26139_26188 = state_26128__$1;
(statearr_26139_26188[(2)] = null);

(statearr_26139_26188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (13))){
var inst_26083 = (state_26128[(10)]);
var inst_26085 = cljs.core.chunked_seq_QMARK_.call(null,inst_26083);
var state_26128__$1 = state_26128;
if(inst_26085){
var statearr_26140_26189 = state_26128__$1;
(statearr_26140_26189[(1)] = (16));

} else {
var statearr_26141_26190 = state_26128__$1;
(statearr_26141_26190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (22))){
var inst_26113 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
if(cljs.core.truth_(inst_26113)){
var statearr_26142_26191 = state_26128__$1;
(statearr_26142_26191[(1)] = (23));

} else {
var statearr_26143_26192 = state_26128__$1;
(statearr_26143_26192[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (6))){
var inst_26107 = (state_26128[(7)]);
var inst_26059 = (state_26128[(8)]);
var inst_26109 = (state_26128[(11)]);
var inst_26107__$1 = topic_fn.call(null,inst_26059);
var inst_26108 = cljs.core.deref.call(null,mults);
var inst_26109__$1 = cljs.core.get.call(null,inst_26108,inst_26107__$1);
var state_26128__$1 = (function (){var statearr_26144 = state_26128;
(statearr_26144[(7)] = inst_26107__$1);

(statearr_26144[(11)] = inst_26109__$1);

return statearr_26144;
})();
if(cljs.core.truth_(inst_26109__$1)){
var statearr_26145_26193 = state_26128__$1;
(statearr_26145_26193[(1)] = (19));

} else {
var statearr_26146_26194 = state_26128__$1;
(statearr_26146_26194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (25))){
var inst_26118 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26147_26195 = state_26128__$1;
(statearr_26147_26195[(2)] = inst_26118);

(statearr_26147_26195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (17))){
var inst_26083 = (state_26128[(10)]);
var inst_26092 = cljs.core.first.call(null,inst_26083);
var inst_26093 = cljs.core.async.muxch_STAR_.call(null,inst_26092);
var inst_26094 = cljs.core.async.close_BANG_.call(null,inst_26093);
var inst_26095 = cljs.core.next.call(null,inst_26083);
var inst_26069 = inst_26095;
var inst_26070 = null;
var inst_26071 = (0);
var inst_26072 = (0);
var state_26128__$1 = (function (){var statearr_26148 = state_26128;
(statearr_26148[(12)] = inst_26071);

(statearr_26148[(13)] = inst_26094);

(statearr_26148[(14)] = inst_26070);

(statearr_26148[(15)] = inst_26069);

(statearr_26148[(16)] = inst_26072);

return statearr_26148;
})();
var statearr_26149_26196 = state_26128__$1;
(statearr_26149_26196[(2)] = null);

(statearr_26149_26196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (3))){
var inst_26126 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26128__$1,inst_26126);
} else {
if((state_val_26129 === (12))){
var inst_26103 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26150_26197 = state_26128__$1;
(statearr_26150_26197[(2)] = inst_26103);

(statearr_26150_26197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (2))){
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26128__$1,(4),ch);
} else {
if((state_val_26129 === (23))){
var state_26128__$1 = state_26128;
var statearr_26151_26198 = state_26128__$1;
(statearr_26151_26198[(2)] = null);

(statearr_26151_26198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (19))){
var inst_26059 = (state_26128[(8)]);
var inst_26109 = (state_26128[(11)]);
var inst_26111 = cljs.core.async.muxch_STAR_.call(null,inst_26109);
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26128__$1,(22),inst_26111,inst_26059);
} else {
if((state_val_26129 === (11))){
var inst_26083 = (state_26128[(10)]);
var inst_26069 = (state_26128[(15)]);
var inst_26083__$1 = cljs.core.seq.call(null,inst_26069);
var state_26128__$1 = (function (){var statearr_26152 = state_26128;
(statearr_26152[(10)] = inst_26083__$1);

return statearr_26152;
})();
if(inst_26083__$1){
var statearr_26153_26199 = state_26128__$1;
(statearr_26153_26199[(1)] = (13));

} else {
var statearr_26154_26200 = state_26128__$1;
(statearr_26154_26200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (9))){
var inst_26105 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26155_26201 = state_26128__$1;
(statearr_26155_26201[(2)] = inst_26105);

(statearr_26155_26201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (5))){
var inst_26066 = cljs.core.deref.call(null,mults);
var inst_26067 = cljs.core.vals.call(null,inst_26066);
var inst_26068 = cljs.core.seq.call(null,inst_26067);
var inst_26069 = inst_26068;
var inst_26070 = null;
var inst_26071 = (0);
var inst_26072 = (0);
var state_26128__$1 = (function (){var statearr_26156 = state_26128;
(statearr_26156[(12)] = inst_26071);

(statearr_26156[(14)] = inst_26070);

(statearr_26156[(15)] = inst_26069);

(statearr_26156[(16)] = inst_26072);

return statearr_26156;
})();
var statearr_26157_26202 = state_26128__$1;
(statearr_26157_26202[(2)] = null);

(statearr_26157_26202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (14))){
var state_26128__$1 = state_26128;
var statearr_26161_26203 = state_26128__$1;
(statearr_26161_26203[(2)] = null);

(statearr_26161_26203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (16))){
var inst_26083 = (state_26128[(10)]);
var inst_26087 = cljs.core.chunk_first.call(null,inst_26083);
var inst_26088 = cljs.core.chunk_rest.call(null,inst_26083);
var inst_26089 = cljs.core.count.call(null,inst_26087);
var inst_26069 = inst_26088;
var inst_26070 = inst_26087;
var inst_26071 = inst_26089;
var inst_26072 = (0);
var state_26128__$1 = (function (){var statearr_26162 = state_26128;
(statearr_26162[(12)] = inst_26071);

(statearr_26162[(14)] = inst_26070);

(statearr_26162[(15)] = inst_26069);

(statearr_26162[(16)] = inst_26072);

return statearr_26162;
})();
var statearr_26163_26204 = state_26128__$1;
(statearr_26163_26204[(2)] = null);

(statearr_26163_26204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (10))){
var inst_26071 = (state_26128[(12)]);
var inst_26070 = (state_26128[(14)]);
var inst_26069 = (state_26128[(15)]);
var inst_26072 = (state_26128[(16)]);
var inst_26077 = cljs.core._nth.call(null,inst_26070,inst_26072);
var inst_26078 = cljs.core.async.muxch_STAR_.call(null,inst_26077);
var inst_26079 = cljs.core.async.close_BANG_.call(null,inst_26078);
var inst_26080 = (inst_26072 + (1));
var tmp26158 = inst_26071;
var tmp26159 = inst_26070;
var tmp26160 = inst_26069;
var inst_26069__$1 = tmp26160;
var inst_26070__$1 = tmp26159;
var inst_26071__$1 = tmp26158;
var inst_26072__$1 = inst_26080;
var state_26128__$1 = (function (){var statearr_26164 = state_26128;
(statearr_26164[(12)] = inst_26071__$1);

(statearr_26164[(14)] = inst_26070__$1);

(statearr_26164[(17)] = inst_26079);

(statearr_26164[(15)] = inst_26069__$1);

(statearr_26164[(16)] = inst_26072__$1);

return statearr_26164;
})();
var statearr_26165_26205 = state_26128__$1;
(statearr_26165_26205[(2)] = null);

(statearr_26165_26205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (18))){
var inst_26098 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26166_26206 = state_26128__$1;
(statearr_26166_26206[(2)] = inst_26098);

(statearr_26166_26206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (8))){
var inst_26071 = (state_26128[(12)]);
var inst_26072 = (state_26128[(16)]);
var inst_26074 = (inst_26072 < inst_26071);
var inst_26075 = inst_26074;
var state_26128__$1 = state_26128;
if(cljs.core.truth_(inst_26075)){
var statearr_26167_26207 = state_26128__$1;
(statearr_26167_26207[(1)] = (10));

} else {
var statearr_26168_26208 = state_26128__$1;
(statearr_26168_26208[(1)] = (11));

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
});})(c__24281__auto___26180,mults,ensure_mult,p))
;
return ((function (switch__24169__auto__,c__24281__auto___26180,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24170__auto__ = null;
var cljs$core$async$state_machine__24170__auto____0 = (function (){
var statearr_26172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26172[(0)] = cljs$core$async$state_machine__24170__auto__);

(statearr_26172[(1)] = (1));

return statearr_26172;
});
var cljs$core$async$state_machine__24170__auto____1 = (function (state_26128){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_26128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e26173){if((e26173 instanceof Object)){
var ex__24173__auto__ = e26173;
var statearr_26174_26209 = state_26128;
(statearr_26174_26209[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26210 = state_26128;
state_26128 = G__26210;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$state_machine__24170__auto__ = function(state_26128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24170__auto____1.call(this,state_26128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24170__auto____0;
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24170__auto____1;
return cljs$core$async$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___26180,mults,ensure_mult,p))
})();
var state__24283__auto__ = (function (){var statearr_26175 = f__24282__auto__.call(null);
(statearr_26175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___26180);

return statearr_26175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___26180,mults,ensure_mult,p))
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
var args26211 = [];
var len__17809__auto___26214 = arguments.length;
var i__17810__auto___26215 = (0);
while(true){
if((i__17810__auto___26215 < len__17809__auto___26214)){
args26211.push((arguments[i__17810__auto___26215]));

var G__26216 = (i__17810__auto___26215 + (1));
i__17810__auto___26215 = G__26216;
continue;
} else {
}
break;
}

var G__26213 = args26211.length;
switch (G__26213) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26211.length)].join('')));

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
var args26218 = [];
var len__17809__auto___26221 = arguments.length;
var i__17810__auto___26222 = (0);
while(true){
if((i__17810__auto___26222 < len__17809__auto___26221)){
args26218.push((arguments[i__17810__auto___26222]));

var G__26223 = (i__17810__auto___26222 + (1));
i__17810__auto___26222 = G__26223;
continue;
} else {
}
break;
}

var G__26220 = args26218.length;
switch (G__26220) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26218.length)].join('')));

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
var args26225 = [];
var len__17809__auto___26296 = arguments.length;
var i__17810__auto___26297 = (0);
while(true){
if((i__17810__auto___26297 < len__17809__auto___26296)){
args26225.push((arguments[i__17810__auto___26297]));

var G__26298 = (i__17810__auto___26297 + (1));
i__17810__auto___26297 = G__26298;
continue;
} else {
}
break;
}

var G__26227 = args26225.length;
switch (G__26227) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26225.length)].join('')));

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
var c__24281__auto___26300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___26300,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___26300,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26266){
var state_val_26267 = (state_26266[(1)]);
if((state_val_26267 === (7))){
var state_26266__$1 = state_26266;
var statearr_26268_26301 = state_26266__$1;
(statearr_26268_26301[(2)] = null);

(statearr_26268_26301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (1))){
var state_26266__$1 = state_26266;
var statearr_26269_26302 = state_26266__$1;
(statearr_26269_26302[(2)] = null);

(statearr_26269_26302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (4))){
var inst_26230 = (state_26266[(7)]);
var inst_26232 = (inst_26230 < cnt);
var state_26266__$1 = state_26266;
if(cljs.core.truth_(inst_26232)){
var statearr_26270_26303 = state_26266__$1;
(statearr_26270_26303[(1)] = (6));

} else {
var statearr_26271_26304 = state_26266__$1;
(statearr_26271_26304[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (15))){
var inst_26262 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
var statearr_26272_26305 = state_26266__$1;
(statearr_26272_26305[(2)] = inst_26262);

(statearr_26272_26305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (13))){
var inst_26255 = cljs.core.async.close_BANG_.call(null,out);
var state_26266__$1 = state_26266;
var statearr_26273_26306 = state_26266__$1;
(statearr_26273_26306[(2)] = inst_26255);

(statearr_26273_26306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (6))){
var state_26266__$1 = state_26266;
var statearr_26274_26307 = state_26266__$1;
(statearr_26274_26307[(2)] = null);

(statearr_26274_26307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (3))){
var inst_26264 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26266__$1,inst_26264);
} else {
if((state_val_26267 === (12))){
var inst_26252 = (state_26266[(8)]);
var inst_26252__$1 = (state_26266[(2)]);
var inst_26253 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26252__$1);
var state_26266__$1 = (function (){var statearr_26275 = state_26266;
(statearr_26275[(8)] = inst_26252__$1);

return statearr_26275;
})();
if(cljs.core.truth_(inst_26253)){
var statearr_26276_26308 = state_26266__$1;
(statearr_26276_26308[(1)] = (13));

} else {
var statearr_26277_26309 = state_26266__$1;
(statearr_26277_26309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (2))){
var inst_26229 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26230 = (0);
var state_26266__$1 = (function (){var statearr_26278 = state_26266;
(statearr_26278[(7)] = inst_26230);

(statearr_26278[(9)] = inst_26229);

return statearr_26278;
})();
var statearr_26279_26310 = state_26266__$1;
(statearr_26279_26310[(2)] = null);

(statearr_26279_26310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (11))){
var inst_26230 = (state_26266[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26266,(10),Object,null,(9));
var inst_26239 = chs__$1.call(null,inst_26230);
var inst_26240 = done.call(null,inst_26230);
var inst_26241 = cljs.core.async.take_BANG_.call(null,inst_26239,inst_26240);
var state_26266__$1 = state_26266;
var statearr_26280_26311 = state_26266__$1;
(statearr_26280_26311[(2)] = inst_26241);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (9))){
var inst_26230 = (state_26266[(7)]);
var inst_26243 = (state_26266[(2)]);
var inst_26244 = (inst_26230 + (1));
var inst_26230__$1 = inst_26244;
var state_26266__$1 = (function (){var statearr_26281 = state_26266;
(statearr_26281[(7)] = inst_26230__$1);

(statearr_26281[(10)] = inst_26243);

return statearr_26281;
})();
var statearr_26282_26312 = state_26266__$1;
(statearr_26282_26312[(2)] = null);

(statearr_26282_26312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (5))){
var inst_26250 = (state_26266[(2)]);
var state_26266__$1 = (function (){var statearr_26283 = state_26266;
(statearr_26283[(11)] = inst_26250);

return statearr_26283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26266__$1,(12),dchan);
} else {
if((state_val_26267 === (14))){
var inst_26252 = (state_26266[(8)]);
var inst_26257 = cljs.core.apply.call(null,f,inst_26252);
var state_26266__$1 = state_26266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26266__$1,(16),out,inst_26257);
} else {
if((state_val_26267 === (16))){
var inst_26259 = (state_26266[(2)]);
var state_26266__$1 = (function (){var statearr_26284 = state_26266;
(statearr_26284[(12)] = inst_26259);

return statearr_26284;
})();
var statearr_26285_26313 = state_26266__$1;
(statearr_26285_26313[(2)] = null);

(statearr_26285_26313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (10))){
var inst_26234 = (state_26266[(2)]);
var inst_26235 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26266__$1 = (function (){var statearr_26286 = state_26266;
(statearr_26286[(13)] = inst_26234);

return statearr_26286;
})();
var statearr_26287_26314 = state_26266__$1;
(statearr_26287_26314[(2)] = inst_26235);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26267 === (8))){
var inst_26248 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
var statearr_26288_26315 = state_26266__$1;
(statearr_26288_26315[(2)] = inst_26248);

(statearr_26288_26315[(1)] = (5));


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
});})(c__24281__auto___26300,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24169__auto__,c__24281__auto___26300,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24170__auto__ = null;
var cljs$core$async$state_machine__24170__auto____0 = (function (){
var statearr_26292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26292[(0)] = cljs$core$async$state_machine__24170__auto__);

(statearr_26292[(1)] = (1));

return statearr_26292;
});
var cljs$core$async$state_machine__24170__auto____1 = (function (state_26266){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_26266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e26293){if((e26293 instanceof Object)){
var ex__24173__auto__ = e26293;
var statearr_26294_26316 = state_26266;
(statearr_26294_26316[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26317 = state_26266;
state_26266 = G__26317;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$state_machine__24170__auto__ = function(state_26266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24170__auto____1.call(this,state_26266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24170__auto____0;
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24170__auto____1;
return cljs$core$async$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___26300,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24283__auto__ = (function (){var statearr_26295 = f__24282__auto__.call(null);
(statearr_26295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___26300);

return statearr_26295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___26300,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26319 = [];
var len__17809__auto___26375 = arguments.length;
var i__17810__auto___26376 = (0);
while(true){
if((i__17810__auto___26376 < len__17809__auto___26375)){
args26319.push((arguments[i__17810__auto___26376]));

var G__26377 = (i__17810__auto___26376 + (1));
i__17810__auto___26376 = G__26377;
continue;
} else {
}
break;
}

var G__26321 = args26319.length;
switch (G__26321) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26319.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24281__auto___26379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___26379,out){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___26379,out){
return (function (state_26351){
var state_val_26352 = (state_26351[(1)]);
if((state_val_26352 === (7))){
var inst_26331 = (state_26351[(7)]);
var inst_26330 = (state_26351[(8)]);
var inst_26330__$1 = (state_26351[(2)]);
var inst_26331__$1 = cljs.core.nth.call(null,inst_26330__$1,(0),null);
var inst_26332 = cljs.core.nth.call(null,inst_26330__$1,(1),null);
var inst_26333 = (inst_26331__$1 == null);
var state_26351__$1 = (function (){var statearr_26353 = state_26351;
(statearr_26353[(7)] = inst_26331__$1);

(statearr_26353[(8)] = inst_26330__$1);

(statearr_26353[(9)] = inst_26332);

return statearr_26353;
})();
if(cljs.core.truth_(inst_26333)){
var statearr_26354_26380 = state_26351__$1;
(statearr_26354_26380[(1)] = (8));

} else {
var statearr_26355_26381 = state_26351__$1;
(statearr_26355_26381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (1))){
var inst_26322 = cljs.core.vec.call(null,chs);
var inst_26323 = inst_26322;
var state_26351__$1 = (function (){var statearr_26356 = state_26351;
(statearr_26356[(10)] = inst_26323);

return statearr_26356;
})();
var statearr_26357_26382 = state_26351__$1;
(statearr_26357_26382[(2)] = null);

(statearr_26357_26382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (4))){
var inst_26323 = (state_26351[(10)]);
var state_26351__$1 = state_26351;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26351__$1,(7),inst_26323);
} else {
if((state_val_26352 === (6))){
var inst_26347 = (state_26351[(2)]);
var state_26351__$1 = state_26351;
var statearr_26358_26383 = state_26351__$1;
(statearr_26358_26383[(2)] = inst_26347);

(statearr_26358_26383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (3))){
var inst_26349 = (state_26351[(2)]);
var state_26351__$1 = state_26351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26351__$1,inst_26349);
} else {
if((state_val_26352 === (2))){
var inst_26323 = (state_26351[(10)]);
var inst_26325 = cljs.core.count.call(null,inst_26323);
var inst_26326 = (inst_26325 > (0));
var state_26351__$1 = state_26351;
if(cljs.core.truth_(inst_26326)){
var statearr_26360_26384 = state_26351__$1;
(statearr_26360_26384[(1)] = (4));

} else {
var statearr_26361_26385 = state_26351__$1;
(statearr_26361_26385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (11))){
var inst_26323 = (state_26351[(10)]);
var inst_26340 = (state_26351[(2)]);
var tmp26359 = inst_26323;
var inst_26323__$1 = tmp26359;
var state_26351__$1 = (function (){var statearr_26362 = state_26351;
(statearr_26362[(10)] = inst_26323__$1);

(statearr_26362[(11)] = inst_26340);

return statearr_26362;
})();
var statearr_26363_26386 = state_26351__$1;
(statearr_26363_26386[(2)] = null);

(statearr_26363_26386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (9))){
var inst_26331 = (state_26351[(7)]);
var state_26351__$1 = state_26351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26351__$1,(11),out,inst_26331);
} else {
if((state_val_26352 === (5))){
var inst_26345 = cljs.core.async.close_BANG_.call(null,out);
var state_26351__$1 = state_26351;
var statearr_26364_26387 = state_26351__$1;
(statearr_26364_26387[(2)] = inst_26345);

(statearr_26364_26387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (10))){
var inst_26343 = (state_26351[(2)]);
var state_26351__$1 = state_26351;
var statearr_26365_26388 = state_26351__$1;
(statearr_26365_26388[(2)] = inst_26343);

(statearr_26365_26388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26352 === (8))){
var inst_26323 = (state_26351[(10)]);
var inst_26331 = (state_26351[(7)]);
var inst_26330 = (state_26351[(8)]);
var inst_26332 = (state_26351[(9)]);
var inst_26335 = (function (){var cs = inst_26323;
var vec__26328 = inst_26330;
var v = inst_26331;
var c = inst_26332;
return ((function (cs,vec__26328,v,c,inst_26323,inst_26331,inst_26330,inst_26332,state_val_26352,c__24281__auto___26379,out){
return (function (p1__26318_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26318_SHARP_);
});
;})(cs,vec__26328,v,c,inst_26323,inst_26331,inst_26330,inst_26332,state_val_26352,c__24281__auto___26379,out))
})();
var inst_26336 = cljs.core.filterv.call(null,inst_26335,inst_26323);
var inst_26323__$1 = inst_26336;
var state_26351__$1 = (function (){var statearr_26366 = state_26351;
(statearr_26366[(10)] = inst_26323__$1);

return statearr_26366;
})();
var statearr_26367_26389 = state_26351__$1;
(statearr_26367_26389[(2)] = null);

(statearr_26367_26389[(1)] = (2));


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
});})(c__24281__auto___26379,out))
;
return ((function (switch__24169__auto__,c__24281__auto___26379,out){
return (function() {
var cljs$core$async$state_machine__24170__auto__ = null;
var cljs$core$async$state_machine__24170__auto____0 = (function (){
var statearr_26371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26371[(0)] = cljs$core$async$state_machine__24170__auto__);

(statearr_26371[(1)] = (1));

return statearr_26371;
});
var cljs$core$async$state_machine__24170__auto____1 = (function (state_26351){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_26351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e26372){if((e26372 instanceof Object)){
var ex__24173__auto__ = e26372;
var statearr_26373_26390 = state_26351;
(statearr_26373_26390[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26391 = state_26351;
state_26351 = G__26391;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$state_machine__24170__auto__ = function(state_26351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24170__auto____1.call(this,state_26351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24170__auto____0;
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24170__auto____1;
return cljs$core$async$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___26379,out))
})();
var state__24283__auto__ = (function (){var statearr_26374 = f__24282__auto__.call(null);
(statearr_26374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___26379);

return statearr_26374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___26379,out))
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
var args26392 = [];
var len__17809__auto___26441 = arguments.length;
var i__17810__auto___26442 = (0);
while(true){
if((i__17810__auto___26442 < len__17809__auto___26441)){
args26392.push((arguments[i__17810__auto___26442]));

var G__26443 = (i__17810__auto___26442 + (1));
i__17810__auto___26442 = G__26443;
continue;
} else {
}
break;
}

var G__26394 = args26392.length;
switch (G__26394) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26392.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24281__auto___26445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___26445,out){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___26445,out){
return (function (state_26418){
var state_val_26419 = (state_26418[(1)]);
if((state_val_26419 === (7))){
var inst_26400 = (state_26418[(7)]);
var inst_26400__$1 = (state_26418[(2)]);
var inst_26401 = (inst_26400__$1 == null);
var inst_26402 = cljs.core.not.call(null,inst_26401);
var state_26418__$1 = (function (){var statearr_26420 = state_26418;
(statearr_26420[(7)] = inst_26400__$1);

return statearr_26420;
})();
if(inst_26402){
var statearr_26421_26446 = state_26418__$1;
(statearr_26421_26446[(1)] = (8));

} else {
var statearr_26422_26447 = state_26418__$1;
(statearr_26422_26447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (1))){
var inst_26395 = (0);
var state_26418__$1 = (function (){var statearr_26423 = state_26418;
(statearr_26423[(8)] = inst_26395);

return statearr_26423;
})();
var statearr_26424_26448 = state_26418__$1;
(statearr_26424_26448[(2)] = null);

(statearr_26424_26448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (4))){
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26418__$1,(7),ch);
} else {
if((state_val_26419 === (6))){
var inst_26413 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26425_26449 = state_26418__$1;
(statearr_26425_26449[(2)] = inst_26413);

(statearr_26425_26449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (3))){
var inst_26415 = (state_26418[(2)]);
var inst_26416 = cljs.core.async.close_BANG_.call(null,out);
var state_26418__$1 = (function (){var statearr_26426 = state_26418;
(statearr_26426[(9)] = inst_26415);

return statearr_26426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26418__$1,inst_26416);
} else {
if((state_val_26419 === (2))){
var inst_26395 = (state_26418[(8)]);
var inst_26397 = (inst_26395 < n);
var state_26418__$1 = state_26418;
if(cljs.core.truth_(inst_26397)){
var statearr_26427_26450 = state_26418__$1;
(statearr_26427_26450[(1)] = (4));

} else {
var statearr_26428_26451 = state_26418__$1;
(statearr_26428_26451[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (11))){
var inst_26395 = (state_26418[(8)]);
var inst_26405 = (state_26418[(2)]);
var inst_26406 = (inst_26395 + (1));
var inst_26395__$1 = inst_26406;
var state_26418__$1 = (function (){var statearr_26429 = state_26418;
(statearr_26429[(10)] = inst_26405);

(statearr_26429[(8)] = inst_26395__$1);

return statearr_26429;
})();
var statearr_26430_26452 = state_26418__$1;
(statearr_26430_26452[(2)] = null);

(statearr_26430_26452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (9))){
var state_26418__$1 = state_26418;
var statearr_26431_26453 = state_26418__$1;
(statearr_26431_26453[(2)] = null);

(statearr_26431_26453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (5))){
var state_26418__$1 = state_26418;
var statearr_26432_26454 = state_26418__$1;
(statearr_26432_26454[(2)] = null);

(statearr_26432_26454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (10))){
var inst_26410 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26433_26455 = state_26418__$1;
(statearr_26433_26455[(2)] = inst_26410);

(statearr_26433_26455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (8))){
var inst_26400 = (state_26418[(7)]);
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26418__$1,(11),out,inst_26400);
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
});})(c__24281__auto___26445,out))
;
return ((function (switch__24169__auto__,c__24281__auto___26445,out){
return (function() {
var cljs$core$async$state_machine__24170__auto__ = null;
var cljs$core$async$state_machine__24170__auto____0 = (function (){
var statearr_26437 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26437[(0)] = cljs$core$async$state_machine__24170__auto__);

(statearr_26437[(1)] = (1));

return statearr_26437;
});
var cljs$core$async$state_machine__24170__auto____1 = (function (state_26418){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_26418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e26438){if((e26438 instanceof Object)){
var ex__24173__auto__ = e26438;
var statearr_26439_26456 = state_26418;
(statearr_26439_26456[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26457 = state_26418;
state_26418 = G__26457;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$state_machine__24170__auto__ = function(state_26418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24170__auto____1.call(this,state_26418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24170__auto____0;
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24170__auto____1;
return cljs$core$async$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___26445,out))
})();
var state__24283__auto__ = (function (){var statearr_26440 = f__24282__auto__.call(null);
(statearr_26440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___26445);

return statearr_26440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___26445,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26465 = (function (map_LT_,f,ch,meta26466){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26466 = meta26466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26467,meta26466__$1){
var self__ = this;
var _26467__$1 = this;
return (new cljs.core.async.t_cljs$core$async26465(self__.map_LT_,self__.f,self__.ch,meta26466__$1));
});

cljs.core.async.t_cljs$core$async26465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26467){
var self__ = this;
var _26467__$1 = this;
return self__.meta26466;
});

cljs.core.async.t_cljs$core$async26465.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26465.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26465.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26468 = (function (map_LT_,f,ch,meta26466,_,fn1,meta26469){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26466 = meta26466;
this._ = _;
this.fn1 = fn1;
this.meta26469 = meta26469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26470,meta26469__$1){
var self__ = this;
var _26470__$1 = this;
return (new cljs.core.async.t_cljs$core$async26468(self__.map_LT_,self__.f,self__.ch,self__.meta26466,self__._,self__.fn1,meta26469__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26470){
var self__ = this;
var _26470__$1 = this;
return self__.meta26469;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26468.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26458_SHARP_){
return f1.call(null,(((p1__26458_SHARP_ == null))?null:self__.f.call(null,p1__26458_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26468.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26466","meta26466",-555034049,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26465","cljs.core.async/t_cljs$core$async26465",503222009,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26469","meta26469",79624902,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26468";

cljs.core.async.t_cljs$core$async26468.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26468");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26468 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26468(map_LT___$1,f__$1,ch__$1,meta26466__$1,___$2,fn1__$1,meta26469){
return (new cljs.core.async.t_cljs$core$async26468(map_LT___$1,f__$1,ch__$1,meta26466__$1,___$2,fn1__$1,meta26469));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26468(self__.map_LT_,self__.f,self__.ch,self__.meta26466,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26465.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26466","meta26466",-555034049,null)], null);
});

cljs.core.async.t_cljs$core$async26465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26465";

cljs.core.async.t_cljs$core$async26465.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26465");
});

cljs.core.async.__GT_t_cljs$core$async26465 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26465(map_LT___$1,f__$1,ch__$1,meta26466){
return (new cljs.core.async.t_cljs$core$async26465(map_LT___$1,f__$1,ch__$1,meta26466));
});

}

return (new cljs.core.async.t_cljs$core$async26465(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26474 = (function (map_GT_,f,ch,meta26475){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26475 = meta26475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26476,meta26475__$1){
var self__ = this;
var _26476__$1 = this;
return (new cljs.core.async.t_cljs$core$async26474(self__.map_GT_,self__.f,self__.ch,meta26475__$1));
});

cljs.core.async.t_cljs$core$async26474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26476){
var self__ = this;
var _26476__$1 = this;
return self__.meta26475;
});

cljs.core.async.t_cljs$core$async26474.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26474.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26474.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26475","meta26475",-421623457,null)], null);
});

cljs.core.async.t_cljs$core$async26474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26474";

cljs.core.async.t_cljs$core$async26474.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26474");
});

cljs.core.async.__GT_t_cljs$core$async26474 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26474(map_GT___$1,f__$1,ch__$1,meta26475){
return (new cljs.core.async.t_cljs$core$async26474(map_GT___$1,f__$1,ch__$1,meta26475));
});

}

return (new cljs.core.async.t_cljs$core$async26474(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26480 = (function (filter_GT_,p,ch,meta26481){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26481 = meta26481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26482,meta26481__$1){
var self__ = this;
var _26482__$1 = this;
return (new cljs.core.async.t_cljs$core$async26480(self__.filter_GT_,self__.p,self__.ch,meta26481__$1));
});

cljs.core.async.t_cljs$core$async26480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26482){
var self__ = this;
var _26482__$1 = this;
return self__.meta26481;
});

cljs.core.async.t_cljs$core$async26480.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26480.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26480.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26480.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26480.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26480.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26480.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26481","meta26481",1944312562,null)], null);
});

cljs.core.async.t_cljs$core$async26480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26480";

cljs.core.async.t_cljs$core$async26480.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26480");
});

cljs.core.async.__GT_t_cljs$core$async26480 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26480(filter_GT___$1,p__$1,ch__$1,meta26481){
return (new cljs.core.async.t_cljs$core$async26480(filter_GT___$1,p__$1,ch__$1,meta26481));
});

}

return (new cljs.core.async.t_cljs$core$async26480(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26483 = [];
var len__17809__auto___26527 = arguments.length;
var i__17810__auto___26528 = (0);
while(true){
if((i__17810__auto___26528 < len__17809__auto___26527)){
args26483.push((arguments[i__17810__auto___26528]));

var G__26529 = (i__17810__auto___26528 + (1));
i__17810__auto___26528 = G__26529;
continue;
} else {
}
break;
}

var G__26485 = args26483.length;
switch (G__26485) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26483.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24281__auto___26531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___26531,out){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___26531,out){
return (function (state_26506){
var state_val_26507 = (state_26506[(1)]);
if((state_val_26507 === (7))){
var inst_26502 = (state_26506[(2)]);
var state_26506__$1 = state_26506;
var statearr_26508_26532 = state_26506__$1;
(statearr_26508_26532[(2)] = inst_26502);

(statearr_26508_26532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26507 === (1))){
var state_26506__$1 = state_26506;
var statearr_26509_26533 = state_26506__$1;
(statearr_26509_26533[(2)] = null);

(statearr_26509_26533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26507 === (4))){
var inst_26488 = (state_26506[(7)]);
var inst_26488__$1 = (state_26506[(2)]);
var inst_26489 = (inst_26488__$1 == null);
var state_26506__$1 = (function (){var statearr_26510 = state_26506;
(statearr_26510[(7)] = inst_26488__$1);

return statearr_26510;
})();
if(cljs.core.truth_(inst_26489)){
var statearr_26511_26534 = state_26506__$1;
(statearr_26511_26534[(1)] = (5));

} else {
var statearr_26512_26535 = state_26506__$1;
(statearr_26512_26535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26507 === (6))){
var inst_26488 = (state_26506[(7)]);
var inst_26493 = p.call(null,inst_26488);
var state_26506__$1 = state_26506;
if(cljs.core.truth_(inst_26493)){
var statearr_26513_26536 = state_26506__$1;
(statearr_26513_26536[(1)] = (8));

} else {
var statearr_26514_26537 = state_26506__$1;
(statearr_26514_26537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26507 === (3))){
var inst_26504 = (state_26506[(2)]);
var state_26506__$1 = state_26506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26506__$1,inst_26504);
} else {
if((state_val_26507 === (2))){
var state_26506__$1 = state_26506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26506__$1,(4),ch);
} else {
if((state_val_26507 === (11))){
var inst_26496 = (state_26506[(2)]);
var state_26506__$1 = state_26506;
var statearr_26515_26538 = state_26506__$1;
(statearr_26515_26538[(2)] = inst_26496);

(statearr_26515_26538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26507 === (9))){
var state_26506__$1 = state_26506;
var statearr_26516_26539 = state_26506__$1;
(statearr_26516_26539[(2)] = null);

(statearr_26516_26539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26507 === (5))){
var inst_26491 = cljs.core.async.close_BANG_.call(null,out);
var state_26506__$1 = state_26506;
var statearr_26517_26540 = state_26506__$1;
(statearr_26517_26540[(2)] = inst_26491);

(statearr_26517_26540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26507 === (10))){
var inst_26499 = (state_26506[(2)]);
var state_26506__$1 = (function (){var statearr_26518 = state_26506;
(statearr_26518[(8)] = inst_26499);

return statearr_26518;
})();
var statearr_26519_26541 = state_26506__$1;
(statearr_26519_26541[(2)] = null);

(statearr_26519_26541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26507 === (8))){
var inst_26488 = (state_26506[(7)]);
var state_26506__$1 = state_26506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26506__$1,(11),out,inst_26488);
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
});})(c__24281__auto___26531,out))
;
return ((function (switch__24169__auto__,c__24281__auto___26531,out){
return (function() {
var cljs$core$async$state_machine__24170__auto__ = null;
var cljs$core$async$state_machine__24170__auto____0 = (function (){
var statearr_26523 = [null,null,null,null,null,null,null,null,null];
(statearr_26523[(0)] = cljs$core$async$state_machine__24170__auto__);

(statearr_26523[(1)] = (1));

return statearr_26523;
});
var cljs$core$async$state_machine__24170__auto____1 = (function (state_26506){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_26506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e26524){if((e26524 instanceof Object)){
var ex__24173__auto__ = e26524;
var statearr_26525_26542 = state_26506;
(statearr_26525_26542[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26543 = state_26506;
state_26506 = G__26543;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$state_machine__24170__auto__ = function(state_26506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24170__auto____1.call(this,state_26506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24170__auto____0;
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24170__auto____1;
return cljs$core$async$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___26531,out))
})();
var state__24283__auto__ = (function (){var statearr_26526 = f__24282__auto__.call(null);
(statearr_26526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___26531);

return statearr_26526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___26531,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26544 = [];
var len__17809__auto___26547 = arguments.length;
var i__17810__auto___26548 = (0);
while(true){
if((i__17810__auto___26548 < len__17809__auto___26547)){
args26544.push((arguments[i__17810__auto___26548]));

var G__26549 = (i__17810__auto___26548 + (1));
i__17810__auto___26548 = G__26549;
continue;
} else {
}
break;
}

var G__26546 = args26544.length;
switch (G__26546) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26544.length)].join('')));

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
var c__24281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto__){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto__){
return (function (state_26716){
var state_val_26717 = (state_26716[(1)]);
if((state_val_26717 === (7))){
var inst_26712 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26718_26759 = state_26716__$1;
(statearr_26718_26759[(2)] = inst_26712);

(statearr_26718_26759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (20))){
var inst_26682 = (state_26716[(7)]);
var inst_26693 = (state_26716[(2)]);
var inst_26694 = cljs.core.next.call(null,inst_26682);
var inst_26668 = inst_26694;
var inst_26669 = null;
var inst_26670 = (0);
var inst_26671 = (0);
var state_26716__$1 = (function (){var statearr_26719 = state_26716;
(statearr_26719[(8)] = inst_26668);

(statearr_26719[(9)] = inst_26693);

(statearr_26719[(10)] = inst_26671);

(statearr_26719[(11)] = inst_26670);

(statearr_26719[(12)] = inst_26669);

return statearr_26719;
})();
var statearr_26720_26760 = state_26716__$1;
(statearr_26720_26760[(2)] = null);

(statearr_26720_26760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (1))){
var state_26716__$1 = state_26716;
var statearr_26721_26761 = state_26716__$1;
(statearr_26721_26761[(2)] = null);

(statearr_26721_26761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (4))){
var inst_26657 = (state_26716[(13)]);
var inst_26657__$1 = (state_26716[(2)]);
var inst_26658 = (inst_26657__$1 == null);
var state_26716__$1 = (function (){var statearr_26722 = state_26716;
(statearr_26722[(13)] = inst_26657__$1);

return statearr_26722;
})();
if(cljs.core.truth_(inst_26658)){
var statearr_26723_26762 = state_26716__$1;
(statearr_26723_26762[(1)] = (5));

} else {
var statearr_26724_26763 = state_26716__$1;
(statearr_26724_26763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (15))){
var state_26716__$1 = state_26716;
var statearr_26728_26764 = state_26716__$1;
(statearr_26728_26764[(2)] = null);

(statearr_26728_26764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (21))){
var state_26716__$1 = state_26716;
var statearr_26729_26765 = state_26716__$1;
(statearr_26729_26765[(2)] = null);

(statearr_26729_26765[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (13))){
var inst_26668 = (state_26716[(8)]);
var inst_26671 = (state_26716[(10)]);
var inst_26670 = (state_26716[(11)]);
var inst_26669 = (state_26716[(12)]);
var inst_26678 = (state_26716[(2)]);
var inst_26679 = (inst_26671 + (1));
var tmp26725 = inst_26668;
var tmp26726 = inst_26670;
var tmp26727 = inst_26669;
var inst_26668__$1 = tmp26725;
var inst_26669__$1 = tmp26727;
var inst_26670__$1 = tmp26726;
var inst_26671__$1 = inst_26679;
var state_26716__$1 = (function (){var statearr_26730 = state_26716;
(statearr_26730[(8)] = inst_26668__$1);

(statearr_26730[(14)] = inst_26678);

(statearr_26730[(10)] = inst_26671__$1);

(statearr_26730[(11)] = inst_26670__$1);

(statearr_26730[(12)] = inst_26669__$1);

return statearr_26730;
})();
var statearr_26731_26766 = state_26716__$1;
(statearr_26731_26766[(2)] = null);

(statearr_26731_26766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (22))){
var state_26716__$1 = state_26716;
var statearr_26732_26767 = state_26716__$1;
(statearr_26732_26767[(2)] = null);

(statearr_26732_26767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (6))){
var inst_26657 = (state_26716[(13)]);
var inst_26666 = f.call(null,inst_26657);
var inst_26667 = cljs.core.seq.call(null,inst_26666);
var inst_26668 = inst_26667;
var inst_26669 = null;
var inst_26670 = (0);
var inst_26671 = (0);
var state_26716__$1 = (function (){var statearr_26733 = state_26716;
(statearr_26733[(8)] = inst_26668);

(statearr_26733[(10)] = inst_26671);

(statearr_26733[(11)] = inst_26670);

(statearr_26733[(12)] = inst_26669);

return statearr_26733;
})();
var statearr_26734_26768 = state_26716__$1;
(statearr_26734_26768[(2)] = null);

(statearr_26734_26768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (17))){
var inst_26682 = (state_26716[(7)]);
var inst_26686 = cljs.core.chunk_first.call(null,inst_26682);
var inst_26687 = cljs.core.chunk_rest.call(null,inst_26682);
var inst_26688 = cljs.core.count.call(null,inst_26686);
var inst_26668 = inst_26687;
var inst_26669 = inst_26686;
var inst_26670 = inst_26688;
var inst_26671 = (0);
var state_26716__$1 = (function (){var statearr_26735 = state_26716;
(statearr_26735[(8)] = inst_26668);

(statearr_26735[(10)] = inst_26671);

(statearr_26735[(11)] = inst_26670);

(statearr_26735[(12)] = inst_26669);

return statearr_26735;
})();
var statearr_26736_26769 = state_26716__$1;
(statearr_26736_26769[(2)] = null);

(statearr_26736_26769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (3))){
var inst_26714 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26716__$1,inst_26714);
} else {
if((state_val_26717 === (12))){
var inst_26702 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26737_26770 = state_26716__$1;
(statearr_26737_26770[(2)] = inst_26702);

(statearr_26737_26770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (2))){
var state_26716__$1 = state_26716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26716__$1,(4),in$);
} else {
if((state_val_26717 === (23))){
var inst_26710 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26738_26771 = state_26716__$1;
(statearr_26738_26771[(2)] = inst_26710);

(statearr_26738_26771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (19))){
var inst_26697 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26739_26772 = state_26716__$1;
(statearr_26739_26772[(2)] = inst_26697);

(statearr_26739_26772[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (11))){
var inst_26668 = (state_26716[(8)]);
var inst_26682 = (state_26716[(7)]);
var inst_26682__$1 = cljs.core.seq.call(null,inst_26668);
var state_26716__$1 = (function (){var statearr_26740 = state_26716;
(statearr_26740[(7)] = inst_26682__$1);

return statearr_26740;
})();
if(inst_26682__$1){
var statearr_26741_26773 = state_26716__$1;
(statearr_26741_26773[(1)] = (14));

} else {
var statearr_26742_26774 = state_26716__$1;
(statearr_26742_26774[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (9))){
var inst_26704 = (state_26716[(2)]);
var inst_26705 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26716__$1 = (function (){var statearr_26743 = state_26716;
(statearr_26743[(15)] = inst_26704);

return statearr_26743;
})();
if(cljs.core.truth_(inst_26705)){
var statearr_26744_26775 = state_26716__$1;
(statearr_26744_26775[(1)] = (21));

} else {
var statearr_26745_26776 = state_26716__$1;
(statearr_26745_26776[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (5))){
var inst_26660 = cljs.core.async.close_BANG_.call(null,out);
var state_26716__$1 = state_26716;
var statearr_26746_26777 = state_26716__$1;
(statearr_26746_26777[(2)] = inst_26660);

(statearr_26746_26777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (14))){
var inst_26682 = (state_26716[(7)]);
var inst_26684 = cljs.core.chunked_seq_QMARK_.call(null,inst_26682);
var state_26716__$1 = state_26716;
if(inst_26684){
var statearr_26747_26778 = state_26716__$1;
(statearr_26747_26778[(1)] = (17));

} else {
var statearr_26748_26779 = state_26716__$1;
(statearr_26748_26779[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (16))){
var inst_26700 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26749_26780 = state_26716__$1;
(statearr_26749_26780[(2)] = inst_26700);

(statearr_26749_26780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (10))){
var inst_26671 = (state_26716[(10)]);
var inst_26669 = (state_26716[(12)]);
var inst_26676 = cljs.core._nth.call(null,inst_26669,inst_26671);
var state_26716__$1 = state_26716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26716__$1,(13),out,inst_26676);
} else {
if((state_val_26717 === (18))){
var inst_26682 = (state_26716[(7)]);
var inst_26691 = cljs.core.first.call(null,inst_26682);
var state_26716__$1 = state_26716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26716__$1,(20),out,inst_26691);
} else {
if((state_val_26717 === (8))){
var inst_26671 = (state_26716[(10)]);
var inst_26670 = (state_26716[(11)]);
var inst_26673 = (inst_26671 < inst_26670);
var inst_26674 = inst_26673;
var state_26716__$1 = state_26716;
if(cljs.core.truth_(inst_26674)){
var statearr_26750_26781 = state_26716__$1;
(statearr_26750_26781[(1)] = (10));

} else {
var statearr_26751_26782 = state_26716__$1;
(statearr_26751_26782[(1)] = (11));

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
});})(c__24281__auto__))
;
return ((function (switch__24169__auto__,c__24281__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24170__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24170__auto____0 = (function (){
var statearr_26755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26755[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24170__auto__);

(statearr_26755[(1)] = (1));

return statearr_26755;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24170__auto____1 = (function (state_26716){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_26716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e26756){if((e26756 instanceof Object)){
var ex__24173__auto__ = e26756;
var statearr_26757_26783 = state_26716;
(statearr_26757_26783[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26784 = state_26716;
state_26716 = G__26784;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24170__auto__ = function(state_26716){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24170__auto____1.call(this,state_26716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24170__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24170__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto__))
})();
var state__24283__auto__ = (function (){var statearr_26758 = f__24282__auto__.call(null);
(statearr_26758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto__);

return statearr_26758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto__))
);

return c__24281__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26785 = [];
var len__17809__auto___26788 = arguments.length;
var i__17810__auto___26789 = (0);
while(true){
if((i__17810__auto___26789 < len__17809__auto___26788)){
args26785.push((arguments[i__17810__auto___26789]));

var G__26790 = (i__17810__auto___26789 + (1));
i__17810__auto___26789 = G__26790;
continue;
} else {
}
break;
}

var G__26787 = args26785.length;
switch (G__26787) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26785.length)].join('')));

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
var args26792 = [];
var len__17809__auto___26795 = arguments.length;
var i__17810__auto___26796 = (0);
while(true){
if((i__17810__auto___26796 < len__17809__auto___26795)){
args26792.push((arguments[i__17810__auto___26796]));

var G__26797 = (i__17810__auto___26796 + (1));
i__17810__auto___26796 = G__26797;
continue;
} else {
}
break;
}

var G__26794 = args26792.length;
switch (G__26794) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26792.length)].join('')));

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
var args26799 = [];
var len__17809__auto___26850 = arguments.length;
var i__17810__auto___26851 = (0);
while(true){
if((i__17810__auto___26851 < len__17809__auto___26850)){
args26799.push((arguments[i__17810__auto___26851]));

var G__26852 = (i__17810__auto___26851 + (1));
i__17810__auto___26851 = G__26852;
continue;
} else {
}
break;
}

var G__26801 = args26799.length;
switch (G__26801) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26799.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24281__auto___26854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___26854,out){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___26854,out){
return (function (state_26825){
var state_val_26826 = (state_26825[(1)]);
if((state_val_26826 === (7))){
var inst_26820 = (state_26825[(2)]);
var state_26825__$1 = state_26825;
var statearr_26827_26855 = state_26825__$1;
(statearr_26827_26855[(2)] = inst_26820);

(statearr_26827_26855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (1))){
var inst_26802 = null;
var state_26825__$1 = (function (){var statearr_26828 = state_26825;
(statearr_26828[(7)] = inst_26802);

return statearr_26828;
})();
var statearr_26829_26856 = state_26825__$1;
(statearr_26829_26856[(2)] = null);

(statearr_26829_26856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (4))){
var inst_26805 = (state_26825[(8)]);
var inst_26805__$1 = (state_26825[(2)]);
var inst_26806 = (inst_26805__$1 == null);
var inst_26807 = cljs.core.not.call(null,inst_26806);
var state_26825__$1 = (function (){var statearr_26830 = state_26825;
(statearr_26830[(8)] = inst_26805__$1);

return statearr_26830;
})();
if(inst_26807){
var statearr_26831_26857 = state_26825__$1;
(statearr_26831_26857[(1)] = (5));

} else {
var statearr_26832_26858 = state_26825__$1;
(statearr_26832_26858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (6))){
var state_26825__$1 = state_26825;
var statearr_26833_26859 = state_26825__$1;
(statearr_26833_26859[(2)] = null);

(statearr_26833_26859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (3))){
var inst_26822 = (state_26825[(2)]);
var inst_26823 = cljs.core.async.close_BANG_.call(null,out);
var state_26825__$1 = (function (){var statearr_26834 = state_26825;
(statearr_26834[(9)] = inst_26822);

return statearr_26834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26825__$1,inst_26823);
} else {
if((state_val_26826 === (2))){
var state_26825__$1 = state_26825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26825__$1,(4),ch);
} else {
if((state_val_26826 === (11))){
var inst_26805 = (state_26825[(8)]);
var inst_26814 = (state_26825[(2)]);
var inst_26802 = inst_26805;
var state_26825__$1 = (function (){var statearr_26835 = state_26825;
(statearr_26835[(10)] = inst_26814);

(statearr_26835[(7)] = inst_26802);

return statearr_26835;
})();
var statearr_26836_26860 = state_26825__$1;
(statearr_26836_26860[(2)] = null);

(statearr_26836_26860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (9))){
var inst_26805 = (state_26825[(8)]);
var state_26825__$1 = state_26825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26825__$1,(11),out,inst_26805);
} else {
if((state_val_26826 === (5))){
var inst_26802 = (state_26825[(7)]);
var inst_26805 = (state_26825[(8)]);
var inst_26809 = cljs.core._EQ_.call(null,inst_26805,inst_26802);
var state_26825__$1 = state_26825;
if(inst_26809){
var statearr_26838_26861 = state_26825__$1;
(statearr_26838_26861[(1)] = (8));

} else {
var statearr_26839_26862 = state_26825__$1;
(statearr_26839_26862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (10))){
var inst_26817 = (state_26825[(2)]);
var state_26825__$1 = state_26825;
var statearr_26840_26863 = state_26825__$1;
(statearr_26840_26863[(2)] = inst_26817);

(statearr_26840_26863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (8))){
var inst_26802 = (state_26825[(7)]);
var tmp26837 = inst_26802;
var inst_26802__$1 = tmp26837;
var state_26825__$1 = (function (){var statearr_26841 = state_26825;
(statearr_26841[(7)] = inst_26802__$1);

return statearr_26841;
})();
var statearr_26842_26864 = state_26825__$1;
(statearr_26842_26864[(2)] = null);

(statearr_26842_26864[(1)] = (2));


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
});})(c__24281__auto___26854,out))
;
return ((function (switch__24169__auto__,c__24281__auto___26854,out){
return (function() {
var cljs$core$async$state_machine__24170__auto__ = null;
var cljs$core$async$state_machine__24170__auto____0 = (function (){
var statearr_26846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26846[(0)] = cljs$core$async$state_machine__24170__auto__);

(statearr_26846[(1)] = (1));

return statearr_26846;
});
var cljs$core$async$state_machine__24170__auto____1 = (function (state_26825){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_26825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e26847){if((e26847 instanceof Object)){
var ex__24173__auto__ = e26847;
var statearr_26848_26865 = state_26825;
(statearr_26848_26865[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26866 = state_26825;
state_26825 = G__26866;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$state_machine__24170__auto__ = function(state_26825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24170__auto____1.call(this,state_26825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24170__auto____0;
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24170__auto____1;
return cljs$core$async$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___26854,out))
})();
var state__24283__auto__ = (function (){var statearr_26849 = f__24282__auto__.call(null);
(statearr_26849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___26854);

return statearr_26849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___26854,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26867 = [];
var len__17809__auto___26937 = arguments.length;
var i__17810__auto___26938 = (0);
while(true){
if((i__17810__auto___26938 < len__17809__auto___26937)){
args26867.push((arguments[i__17810__auto___26938]));

var G__26939 = (i__17810__auto___26938 + (1));
i__17810__auto___26938 = G__26939;
continue;
} else {
}
break;
}

var G__26869 = args26867.length;
switch (G__26869) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26867.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24281__auto___26941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___26941,out){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___26941,out){
return (function (state_26907){
var state_val_26908 = (state_26907[(1)]);
if((state_val_26908 === (7))){
var inst_26903 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26909_26942 = state_26907__$1;
(statearr_26909_26942[(2)] = inst_26903);

(statearr_26909_26942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (1))){
var inst_26870 = (new Array(n));
var inst_26871 = inst_26870;
var inst_26872 = (0);
var state_26907__$1 = (function (){var statearr_26910 = state_26907;
(statearr_26910[(7)] = inst_26872);

(statearr_26910[(8)] = inst_26871);

return statearr_26910;
})();
var statearr_26911_26943 = state_26907__$1;
(statearr_26911_26943[(2)] = null);

(statearr_26911_26943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (4))){
var inst_26875 = (state_26907[(9)]);
var inst_26875__$1 = (state_26907[(2)]);
var inst_26876 = (inst_26875__$1 == null);
var inst_26877 = cljs.core.not.call(null,inst_26876);
var state_26907__$1 = (function (){var statearr_26912 = state_26907;
(statearr_26912[(9)] = inst_26875__$1);

return statearr_26912;
})();
if(inst_26877){
var statearr_26913_26944 = state_26907__$1;
(statearr_26913_26944[(1)] = (5));

} else {
var statearr_26914_26945 = state_26907__$1;
(statearr_26914_26945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (15))){
var inst_26897 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26915_26946 = state_26907__$1;
(statearr_26915_26946[(2)] = inst_26897);

(statearr_26915_26946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (13))){
var state_26907__$1 = state_26907;
var statearr_26916_26947 = state_26907__$1;
(statearr_26916_26947[(2)] = null);

(statearr_26916_26947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (6))){
var inst_26872 = (state_26907[(7)]);
var inst_26893 = (inst_26872 > (0));
var state_26907__$1 = state_26907;
if(cljs.core.truth_(inst_26893)){
var statearr_26917_26948 = state_26907__$1;
(statearr_26917_26948[(1)] = (12));

} else {
var statearr_26918_26949 = state_26907__$1;
(statearr_26918_26949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (3))){
var inst_26905 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26907__$1,inst_26905);
} else {
if((state_val_26908 === (12))){
var inst_26871 = (state_26907[(8)]);
var inst_26895 = cljs.core.vec.call(null,inst_26871);
var state_26907__$1 = state_26907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26907__$1,(15),out,inst_26895);
} else {
if((state_val_26908 === (2))){
var state_26907__$1 = state_26907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26907__$1,(4),ch);
} else {
if((state_val_26908 === (11))){
var inst_26887 = (state_26907[(2)]);
var inst_26888 = (new Array(n));
var inst_26871 = inst_26888;
var inst_26872 = (0);
var state_26907__$1 = (function (){var statearr_26919 = state_26907;
(statearr_26919[(10)] = inst_26887);

(statearr_26919[(7)] = inst_26872);

(statearr_26919[(8)] = inst_26871);

return statearr_26919;
})();
var statearr_26920_26950 = state_26907__$1;
(statearr_26920_26950[(2)] = null);

(statearr_26920_26950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (9))){
var inst_26871 = (state_26907[(8)]);
var inst_26885 = cljs.core.vec.call(null,inst_26871);
var state_26907__$1 = state_26907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26907__$1,(11),out,inst_26885);
} else {
if((state_val_26908 === (5))){
var inst_26875 = (state_26907[(9)]);
var inst_26872 = (state_26907[(7)]);
var inst_26871 = (state_26907[(8)]);
var inst_26880 = (state_26907[(11)]);
var inst_26879 = (inst_26871[inst_26872] = inst_26875);
var inst_26880__$1 = (inst_26872 + (1));
var inst_26881 = (inst_26880__$1 < n);
var state_26907__$1 = (function (){var statearr_26921 = state_26907;
(statearr_26921[(12)] = inst_26879);

(statearr_26921[(11)] = inst_26880__$1);

return statearr_26921;
})();
if(cljs.core.truth_(inst_26881)){
var statearr_26922_26951 = state_26907__$1;
(statearr_26922_26951[(1)] = (8));

} else {
var statearr_26923_26952 = state_26907__$1;
(statearr_26923_26952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (14))){
var inst_26900 = (state_26907[(2)]);
var inst_26901 = cljs.core.async.close_BANG_.call(null,out);
var state_26907__$1 = (function (){var statearr_26925 = state_26907;
(statearr_26925[(13)] = inst_26900);

return statearr_26925;
})();
var statearr_26926_26953 = state_26907__$1;
(statearr_26926_26953[(2)] = inst_26901);

(statearr_26926_26953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (10))){
var inst_26891 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26927_26954 = state_26907__$1;
(statearr_26927_26954[(2)] = inst_26891);

(statearr_26927_26954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (8))){
var inst_26871 = (state_26907[(8)]);
var inst_26880 = (state_26907[(11)]);
var tmp26924 = inst_26871;
var inst_26871__$1 = tmp26924;
var inst_26872 = inst_26880;
var state_26907__$1 = (function (){var statearr_26928 = state_26907;
(statearr_26928[(7)] = inst_26872);

(statearr_26928[(8)] = inst_26871__$1);

return statearr_26928;
})();
var statearr_26929_26955 = state_26907__$1;
(statearr_26929_26955[(2)] = null);

(statearr_26929_26955[(1)] = (2));


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
});})(c__24281__auto___26941,out))
;
return ((function (switch__24169__auto__,c__24281__auto___26941,out){
return (function() {
var cljs$core$async$state_machine__24170__auto__ = null;
var cljs$core$async$state_machine__24170__auto____0 = (function (){
var statearr_26933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26933[(0)] = cljs$core$async$state_machine__24170__auto__);

(statearr_26933[(1)] = (1));

return statearr_26933;
});
var cljs$core$async$state_machine__24170__auto____1 = (function (state_26907){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_26907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e26934){if((e26934 instanceof Object)){
var ex__24173__auto__ = e26934;
var statearr_26935_26956 = state_26907;
(statearr_26935_26956[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26957 = state_26907;
state_26907 = G__26957;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$state_machine__24170__auto__ = function(state_26907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24170__auto____1.call(this,state_26907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24170__auto____0;
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24170__auto____1;
return cljs$core$async$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___26941,out))
})();
var state__24283__auto__ = (function (){var statearr_26936 = f__24282__auto__.call(null);
(statearr_26936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___26941);

return statearr_26936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___26941,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26958 = [];
var len__17809__auto___27032 = arguments.length;
var i__17810__auto___27033 = (0);
while(true){
if((i__17810__auto___27033 < len__17809__auto___27032)){
args26958.push((arguments[i__17810__auto___27033]));

var G__27034 = (i__17810__auto___27033 + (1));
i__17810__auto___27033 = G__27034;
continue;
} else {
}
break;
}

var G__26960 = args26958.length;
switch (G__26960) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26958.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24281__auto___27036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24281__auto___27036,out){
return (function (){
var f__24282__auto__ = (function (){var switch__24169__auto__ = ((function (c__24281__auto___27036,out){
return (function (state_27002){
var state_val_27003 = (state_27002[(1)]);
if((state_val_27003 === (7))){
var inst_26998 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27004_27037 = state_27002__$1;
(statearr_27004_27037[(2)] = inst_26998);

(statearr_27004_27037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (1))){
var inst_26961 = [];
var inst_26962 = inst_26961;
var inst_26963 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27002__$1 = (function (){var statearr_27005 = state_27002;
(statearr_27005[(7)] = inst_26962);

(statearr_27005[(8)] = inst_26963);

return statearr_27005;
})();
var statearr_27006_27038 = state_27002__$1;
(statearr_27006_27038[(2)] = null);

(statearr_27006_27038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (4))){
var inst_26966 = (state_27002[(9)]);
var inst_26966__$1 = (state_27002[(2)]);
var inst_26967 = (inst_26966__$1 == null);
var inst_26968 = cljs.core.not.call(null,inst_26967);
var state_27002__$1 = (function (){var statearr_27007 = state_27002;
(statearr_27007[(9)] = inst_26966__$1);

return statearr_27007;
})();
if(inst_26968){
var statearr_27008_27039 = state_27002__$1;
(statearr_27008_27039[(1)] = (5));

} else {
var statearr_27009_27040 = state_27002__$1;
(statearr_27009_27040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (15))){
var inst_26992 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27010_27041 = state_27002__$1;
(statearr_27010_27041[(2)] = inst_26992);

(statearr_27010_27041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (13))){
var state_27002__$1 = state_27002;
var statearr_27011_27042 = state_27002__$1;
(statearr_27011_27042[(2)] = null);

(statearr_27011_27042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (6))){
var inst_26962 = (state_27002[(7)]);
var inst_26987 = inst_26962.length;
var inst_26988 = (inst_26987 > (0));
var state_27002__$1 = state_27002;
if(cljs.core.truth_(inst_26988)){
var statearr_27012_27043 = state_27002__$1;
(statearr_27012_27043[(1)] = (12));

} else {
var statearr_27013_27044 = state_27002__$1;
(statearr_27013_27044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (3))){
var inst_27000 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27002__$1,inst_27000);
} else {
if((state_val_27003 === (12))){
var inst_26962 = (state_27002[(7)]);
var inst_26990 = cljs.core.vec.call(null,inst_26962);
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27002__$1,(15),out,inst_26990);
} else {
if((state_val_27003 === (2))){
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27002__$1,(4),ch);
} else {
if((state_val_27003 === (11))){
var inst_26970 = (state_27002[(10)]);
var inst_26966 = (state_27002[(9)]);
var inst_26980 = (state_27002[(2)]);
var inst_26981 = [];
var inst_26982 = inst_26981.push(inst_26966);
var inst_26962 = inst_26981;
var inst_26963 = inst_26970;
var state_27002__$1 = (function (){var statearr_27014 = state_27002;
(statearr_27014[(7)] = inst_26962);

(statearr_27014[(11)] = inst_26982);

(statearr_27014[(8)] = inst_26963);

(statearr_27014[(12)] = inst_26980);

return statearr_27014;
})();
var statearr_27015_27045 = state_27002__$1;
(statearr_27015_27045[(2)] = null);

(statearr_27015_27045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (9))){
var inst_26962 = (state_27002[(7)]);
var inst_26978 = cljs.core.vec.call(null,inst_26962);
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27002__$1,(11),out,inst_26978);
} else {
if((state_val_27003 === (5))){
var inst_26970 = (state_27002[(10)]);
var inst_26966 = (state_27002[(9)]);
var inst_26963 = (state_27002[(8)]);
var inst_26970__$1 = f.call(null,inst_26966);
var inst_26971 = cljs.core._EQ_.call(null,inst_26970__$1,inst_26963);
var inst_26972 = cljs.core.keyword_identical_QMARK_.call(null,inst_26963,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26973 = (inst_26971) || (inst_26972);
var state_27002__$1 = (function (){var statearr_27016 = state_27002;
(statearr_27016[(10)] = inst_26970__$1);

return statearr_27016;
})();
if(cljs.core.truth_(inst_26973)){
var statearr_27017_27046 = state_27002__$1;
(statearr_27017_27046[(1)] = (8));

} else {
var statearr_27018_27047 = state_27002__$1;
(statearr_27018_27047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (14))){
var inst_26995 = (state_27002[(2)]);
var inst_26996 = cljs.core.async.close_BANG_.call(null,out);
var state_27002__$1 = (function (){var statearr_27020 = state_27002;
(statearr_27020[(13)] = inst_26995);

return statearr_27020;
})();
var statearr_27021_27048 = state_27002__$1;
(statearr_27021_27048[(2)] = inst_26996);

(statearr_27021_27048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (10))){
var inst_26985 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27022_27049 = state_27002__$1;
(statearr_27022_27049[(2)] = inst_26985);

(statearr_27022_27049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (8))){
var inst_26962 = (state_27002[(7)]);
var inst_26970 = (state_27002[(10)]);
var inst_26966 = (state_27002[(9)]);
var inst_26975 = inst_26962.push(inst_26966);
var tmp27019 = inst_26962;
var inst_26962__$1 = tmp27019;
var inst_26963 = inst_26970;
var state_27002__$1 = (function (){var statearr_27023 = state_27002;
(statearr_27023[(7)] = inst_26962__$1);

(statearr_27023[(14)] = inst_26975);

(statearr_27023[(8)] = inst_26963);

return statearr_27023;
})();
var statearr_27024_27050 = state_27002__$1;
(statearr_27024_27050[(2)] = null);

(statearr_27024_27050[(1)] = (2));


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
});})(c__24281__auto___27036,out))
;
return ((function (switch__24169__auto__,c__24281__auto___27036,out){
return (function() {
var cljs$core$async$state_machine__24170__auto__ = null;
var cljs$core$async$state_machine__24170__auto____0 = (function (){
var statearr_27028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27028[(0)] = cljs$core$async$state_machine__24170__auto__);

(statearr_27028[(1)] = (1));

return statearr_27028;
});
var cljs$core$async$state_machine__24170__auto____1 = (function (state_27002){
while(true){
var ret_value__24171__auto__ = (function (){try{while(true){
var result__24172__auto__ = switch__24169__auto__.call(null,state_27002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24172__auto__;
}
break;
}
}catch (e27029){if((e27029 instanceof Object)){
var ex__24173__auto__ = e27029;
var statearr_27030_27051 = state_27002;
(statearr_27030_27051[(5)] = ex__24173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27052 = state_27002;
state_27002 = G__27052;
continue;
} else {
return ret_value__24171__auto__;
}
break;
}
});
cljs$core$async$state_machine__24170__auto__ = function(state_27002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24170__auto____1.call(this,state_27002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24170__auto____0;
cljs$core$async$state_machine__24170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24170__auto____1;
return cljs$core$async$state_machine__24170__auto__;
})()
;})(switch__24169__auto__,c__24281__auto___27036,out))
})();
var state__24283__auto__ = (function (){var statearr_27031 = f__24282__auto__.call(null);
(statearr_27031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24281__auto___27036);

return statearr_27031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24283__auto__);
});})(c__24281__auto___27036,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1448614620718