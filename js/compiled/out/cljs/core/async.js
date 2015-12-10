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
var args24321 = [];
var len__17809__auto___24327 = arguments.length;
var i__17810__auto___24328 = (0);
while(true){
if((i__17810__auto___24328 < len__17809__auto___24327)){
args24321.push((arguments[i__17810__auto___24328]));

var G__24329 = (i__17810__auto___24328 + (1));
i__17810__auto___24328 = G__24329;
continue;
} else {
}
break;
}

var G__24323 = args24321.length;
switch (G__24323) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24321.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24324 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24324 = (function (f,blockable,meta24325){
this.f = f;
this.blockable = blockable;
this.meta24325 = meta24325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24326,meta24325__$1){
var self__ = this;
var _24326__$1 = this;
return (new cljs.core.async.t_cljs$core$async24324(self__.f,self__.blockable,meta24325__$1));
});

cljs.core.async.t_cljs$core$async24324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24326){
var self__ = this;
var _24326__$1 = this;
return self__.meta24325;
});

cljs.core.async.t_cljs$core$async24324.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24324.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24325","meta24325",1256866342,null)], null);
});

cljs.core.async.t_cljs$core$async24324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24324";

cljs.core.async.t_cljs$core$async24324.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24324");
});

cljs.core.async.__GT_t_cljs$core$async24324 = (function cljs$core$async$__GT_t_cljs$core$async24324(f__$1,blockable__$1,meta24325){
return (new cljs.core.async.t_cljs$core$async24324(f__$1,blockable__$1,meta24325));
});

}

return (new cljs.core.async.t_cljs$core$async24324(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24333 = [];
var len__17809__auto___24336 = arguments.length;
var i__17810__auto___24337 = (0);
while(true){
if((i__17810__auto___24337 < len__17809__auto___24336)){
args24333.push((arguments[i__17810__auto___24337]));

var G__24338 = (i__17810__auto___24337 + (1));
i__17810__auto___24337 = G__24338;
continue;
} else {
}
break;
}

var G__24335 = args24333.length;
switch (G__24335) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24333.length)].join('')));

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
var args24340 = [];
var len__17809__auto___24343 = arguments.length;
var i__17810__auto___24344 = (0);
while(true){
if((i__17810__auto___24344 < len__17809__auto___24343)){
args24340.push((arguments[i__17810__auto___24344]));

var G__24345 = (i__17810__auto___24344 + (1));
i__17810__auto___24344 = G__24345;
continue;
} else {
}
break;
}

var G__24342 = args24340.length;
switch (G__24342) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24340.length)].join('')));

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
var args24347 = [];
var len__17809__auto___24350 = arguments.length;
var i__17810__auto___24351 = (0);
while(true){
if((i__17810__auto___24351 < len__17809__auto___24350)){
args24347.push((arguments[i__17810__auto___24351]));

var G__24352 = (i__17810__auto___24351 + (1));
i__17810__auto___24351 = G__24352;
continue;
} else {
}
break;
}

var G__24349 = args24347.length;
switch (G__24349) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24347.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24354 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24354);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24354,ret){
return (function (){
return fn1.call(null,val_24354);
});})(val_24354,ret))
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
var args24355 = [];
var len__17809__auto___24358 = arguments.length;
var i__17810__auto___24359 = (0);
while(true){
if((i__17810__auto___24359 < len__17809__auto___24358)){
args24355.push((arguments[i__17810__auto___24359]));

var G__24360 = (i__17810__auto___24359 + (1));
i__17810__auto___24359 = G__24360;
continue;
} else {
}
break;
}

var G__24357 = args24355.length;
switch (G__24357) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24355.length)].join('')));

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
var n__17654__auto___24362 = n;
var x_24363 = (0);
while(true){
if((x_24363 < n__17654__auto___24362)){
(a[x_24363] = (0));

var G__24364 = (x_24363 + (1));
x_24363 = G__24364;
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

var G__24365 = (i + (1));
i = G__24365;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24369 = (function (alt_flag,flag,meta24370){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24370 = meta24370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24371,meta24370__$1){
var self__ = this;
var _24371__$1 = this;
return (new cljs.core.async.t_cljs$core$async24369(self__.alt_flag,self__.flag,meta24370__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24371){
var self__ = this;
var _24371__$1 = this;
return self__.meta24370;
});})(flag))
;

cljs.core.async.t_cljs$core$async24369.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24369.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24369.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24370","meta24370",1362340953,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24369.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24369";

cljs.core.async.t_cljs$core$async24369.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24369");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24369 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24369(alt_flag__$1,flag__$1,meta24370){
return (new cljs.core.async.t_cljs$core$async24369(alt_flag__$1,flag__$1,meta24370));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24369(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24375 = (function (alt_handler,flag,cb,meta24376){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24376 = meta24376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24377,meta24376__$1){
var self__ = this;
var _24377__$1 = this;
return (new cljs.core.async.t_cljs$core$async24375(self__.alt_handler,self__.flag,self__.cb,meta24376__$1));
});

cljs.core.async.t_cljs$core$async24375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24377){
var self__ = this;
var _24377__$1 = this;
return self__.meta24376;
});

cljs.core.async.t_cljs$core$async24375.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24376","meta24376",-420419330,null)], null);
});

cljs.core.async.t_cljs$core$async24375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24375";

cljs.core.async.t_cljs$core$async24375.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24375");
});

cljs.core.async.__GT_t_cljs$core$async24375 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24375(alt_handler__$1,flag__$1,cb__$1,meta24376){
return (new cljs.core.async.t_cljs$core$async24375(alt_handler__$1,flag__$1,cb__$1,meta24376));
});

}

return (new cljs.core.async.t_cljs$core$async24375(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24378_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24378_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24379_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24379_SHARP_,port], null));
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
var G__24380 = (i + (1));
i = G__24380;
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
var len__17809__auto___24386 = arguments.length;
var i__17810__auto___24387 = (0);
while(true){
if((i__17810__auto___24387 < len__17809__auto___24386)){
args__17816__auto__.push((arguments[i__17810__auto___24387]));

var G__24388 = (i__17810__auto___24387 + (1));
i__17810__auto___24387 = G__24388;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((1) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24383){
var map__24384 = p__24383;
var map__24384__$1 = ((((!((map__24384 == null)))?((((map__24384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24384):map__24384);
var opts = map__24384__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24381){
var G__24382 = cljs.core.first.call(null,seq24381);
var seq24381__$1 = cljs.core.next.call(null,seq24381);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24382,seq24381__$1);
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
var args24389 = [];
var len__17809__auto___24439 = arguments.length;
var i__17810__auto___24440 = (0);
while(true){
if((i__17810__auto___24440 < len__17809__auto___24439)){
args24389.push((arguments[i__17810__auto___24440]));

var G__24441 = (i__17810__auto___24440 + (1));
i__17810__auto___24440 = G__24441;
continue;
} else {
}
break;
}

var G__24391 = args24389.length;
switch (G__24391) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24389.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24276__auto___24443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___24443){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___24443){
return (function (state_24415){
var state_val_24416 = (state_24415[(1)]);
if((state_val_24416 === (7))){
var inst_24411 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
var statearr_24417_24444 = state_24415__$1;
(statearr_24417_24444[(2)] = inst_24411);

(statearr_24417_24444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (1))){
var state_24415__$1 = state_24415;
var statearr_24418_24445 = state_24415__$1;
(statearr_24418_24445[(2)] = null);

(statearr_24418_24445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (4))){
var inst_24394 = (state_24415[(7)]);
var inst_24394__$1 = (state_24415[(2)]);
var inst_24395 = (inst_24394__$1 == null);
var state_24415__$1 = (function (){var statearr_24419 = state_24415;
(statearr_24419[(7)] = inst_24394__$1);

return statearr_24419;
})();
if(cljs.core.truth_(inst_24395)){
var statearr_24420_24446 = state_24415__$1;
(statearr_24420_24446[(1)] = (5));

} else {
var statearr_24421_24447 = state_24415__$1;
(statearr_24421_24447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (13))){
var state_24415__$1 = state_24415;
var statearr_24422_24448 = state_24415__$1;
(statearr_24422_24448[(2)] = null);

(statearr_24422_24448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (6))){
var inst_24394 = (state_24415[(7)]);
var state_24415__$1 = state_24415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24415__$1,(11),to,inst_24394);
} else {
if((state_val_24416 === (3))){
var inst_24413 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24415__$1,inst_24413);
} else {
if((state_val_24416 === (12))){
var state_24415__$1 = state_24415;
var statearr_24423_24449 = state_24415__$1;
(statearr_24423_24449[(2)] = null);

(statearr_24423_24449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (2))){
var state_24415__$1 = state_24415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24415__$1,(4),from);
} else {
if((state_val_24416 === (11))){
var inst_24404 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
if(cljs.core.truth_(inst_24404)){
var statearr_24424_24450 = state_24415__$1;
(statearr_24424_24450[(1)] = (12));

} else {
var statearr_24425_24451 = state_24415__$1;
(statearr_24425_24451[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (9))){
var state_24415__$1 = state_24415;
var statearr_24426_24452 = state_24415__$1;
(statearr_24426_24452[(2)] = null);

(statearr_24426_24452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (5))){
var state_24415__$1 = state_24415;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24427_24453 = state_24415__$1;
(statearr_24427_24453[(1)] = (8));

} else {
var statearr_24428_24454 = state_24415__$1;
(statearr_24428_24454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (14))){
var inst_24409 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
var statearr_24429_24455 = state_24415__$1;
(statearr_24429_24455[(2)] = inst_24409);

(statearr_24429_24455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (10))){
var inst_24401 = (state_24415[(2)]);
var state_24415__$1 = state_24415;
var statearr_24430_24456 = state_24415__$1;
(statearr_24430_24456[(2)] = inst_24401);

(statearr_24430_24456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24416 === (8))){
var inst_24398 = cljs.core.async.close_BANG_.call(null,to);
var state_24415__$1 = state_24415;
var statearr_24431_24457 = state_24415__$1;
(statearr_24431_24457[(2)] = inst_24398);

(statearr_24431_24457[(1)] = (10));


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
});})(c__24276__auto___24443))
;
return ((function (switch__24164__auto__,c__24276__auto___24443){
return (function() {
var cljs$core$async$state_machine__24165__auto__ = null;
var cljs$core$async$state_machine__24165__auto____0 = (function (){
var statearr_24435 = [null,null,null,null,null,null,null,null];
(statearr_24435[(0)] = cljs$core$async$state_machine__24165__auto__);

(statearr_24435[(1)] = (1));

return statearr_24435;
});
var cljs$core$async$state_machine__24165__auto____1 = (function (state_24415){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_24415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e24436){if((e24436 instanceof Object)){
var ex__24168__auto__ = e24436;
var statearr_24437_24458 = state_24415;
(statearr_24437_24458[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24459 = state_24415;
state_24415 = G__24459;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$state_machine__24165__auto__ = function(state_24415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24165__auto____1.call(this,state_24415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24165__auto____0;
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24165__auto____1;
return cljs$core$async$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___24443))
})();
var state__24278__auto__ = (function (){var statearr_24438 = f__24277__auto__.call(null);
(statearr_24438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___24443);

return statearr_24438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___24443))
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
return (function (p__24643){
var vec__24644 = p__24643;
var v = cljs.core.nth.call(null,vec__24644,(0),null);
var p = cljs.core.nth.call(null,vec__24644,(1),null);
var job = vec__24644;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24276__auto___24826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___24826,res,vec__24644,v,p,job,jobs,results){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___24826,res,vec__24644,v,p,job,jobs,results){
return (function (state_24649){
var state_val_24650 = (state_24649[(1)]);
if((state_val_24650 === (1))){
var state_24649__$1 = state_24649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24649__$1,(2),res,v);
} else {
if((state_val_24650 === (2))){
var inst_24646 = (state_24649[(2)]);
var inst_24647 = cljs.core.async.close_BANG_.call(null,res);
var state_24649__$1 = (function (){var statearr_24651 = state_24649;
(statearr_24651[(7)] = inst_24646);

return statearr_24651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24649__$1,inst_24647);
} else {
return null;
}
}
});})(c__24276__auto___24826,res,vec__24644,v,p,job,jobs,results))
;
return ((function (switch__24164__auto__,c__24276__auto___24826,res,vec__24644,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0 = (function (){
var statearr_24655 = [null,null,null,null,null,null,null,null];
(statearr_24655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__);

(statearr_24655[(1)] = (1));

return statearr_24655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1 = (function (state_24649){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_24649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e24656){if((e24656 instanceof Object)){
var ex__24168__auto__ = e24656;
var statearr_24657_24827 = state_24649;
(statearr_24657_24827[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24828 = state_24649;
state_24649 = G__24828;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__ = function(state_24649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1.call(this,state_24649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___24826,res,vec__24644,v,p,job,jobs,results))
})();
var state__24278__auto__ = (function (){var statearr_24658 = f__24277__auto__.call(null);
(statearr_24658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___24826);

return statearr_24658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___24826,res,vec__24644,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24659){
var vec__24660 = p__24659;
var v = cljs.core.nth.call(null,vec__24660,(0),null);
var p = cljs.core.nth.call(null,vec__24660,(1),null);
var job = vec__24660;
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
var n__17654__auto___24829 = n;
var __24830 = (0);
while(true){
if((__24830 < n__17654__auto___24829)){
var G__24661_24831 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24661_24831) {
case "compute":
var c__24276__auto___24833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24830,c__24276__auto___24833,G__24661_24831,n__17654__auto___24829,jobs,results,process,async){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (__24830,c__24276__auto___24833,G__24661_24831,n__17654__auto___24829,jobs,results,process,async){
return (function (state_24674){
var state_val_24675 = (state_24674[(1)]);
if((state_val_24675 === (1))){
var state_24674__$1 = state_24674;
var statearr_24676_24834 = state_24674__$1;
(statearr_24676_24834[(2)] = null);

(statearr_24676_24834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24675 === (2))){
var state_24674__$1 = state_24674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24674__$1,(4),jobs);
} else {
if((state_val_24675 === (3))){
var inst_24672 = (state_24674[(2)]);
var state_24674__$1 = state_24674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24674__$1,inst_24672);
} else {
if((state_val_24675 === (4))){
var inst_24664 = (state_24674[(2)]);
var inst_24665 = process.call(null,inst_24664);
var state_24674__$1 = state_24674;
if(cljs.core.truth_(inst_24665)){
var statearr_24677_24835 = state_24674__$1;
(statearr_24677_24835[(1)] = (5));

} else {
var statearr_24678_24836 = state_24674__$1;
(statearr_24678_24836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24675 === (5))){
var state_24674__$1 = state_24674;
var statearr_24679_24837 = state_24674__$1;
(statearr_24679_24837[(2)] = null);

(statearr_24679_24837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24675 === (6))){
var state_24674__$1 = state_24674;
var statearr_24680_24838 = state_24674__$1;
(statearr_24680_24838[(2)] = null);

(statearr_24680_24838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24675 === (7))){
var inst_24670 = (state_24674[(2)]);
var state_24674__$1 = state_24674;
var statearr_24681_24839 = state_24674__$1;
(statearr_24681_24839[(2)] = inst_24670);

(statearr_24681_24839[(1)] = (3));


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
});})(__24830,c__24276__auto___24833,G__24661_24831,n__17654__auto___24829,jobs,results,process,async))
;
return ((function (__24830,switch__24164__auto__,c__24276__auto___24833,G__24661_24831,n__17654__auto___24829,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0 = (function (){
var statearr_24685 = [null,null,null,null,null,null,null];
(statearr_24685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__);

(statearr_24685[(1)] = (1));

return statearr_24685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1 = (function (state_24674){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_24674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e24686){if((e24686 instanceof Object)){
var ex__24168__auto__ = e24686;
var statearr_24687_24840 = state_24674;
(statearr_24687_24840[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24841 = state_24674;
state_24674 = G__24841;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__ = function(state_24674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1.call(this,state_24674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__;
})()
;})(__24830,switch__24164__auto__,c__24276__auto___24833,G__24661_24831,n__17654__auto___24829,jobs,results,process,async))
})();
var state__24278__auto__ = (function (){var statearr_24688 = f__24277__auto__.call(null);
(statearr_24688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___24833);

return statearr_24688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(__24830,c__24276__auto___24833,G__24661_24831,n__17654__auto___24829,jobs,results,process,async))
);


break;
case "async":
var c__24276__auto___24842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24830,c__24276__auto___24842,G__24661_24831,n__17654__auto___24829,jobs,results,process,async){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (__24830,c__24276__auto___24842,G__24661_24831,n__17654__auto___24829,jobs,results,process,async){
return (function (state_24701){
var state_val_24702 = (state_24701[(1)]);
if((state_val_24702 === (1))){
var state_24701__$1 = state_24701;
var statearr_24703_24843 = state_24701__$1;
(statearr_24703_24843[(2)] = null);

(statearr_24703_24843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (2))){
var state_24701__$1 = state_24701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24701__$1,(4),jobs);
} else {
if((state_val_24702 === (3))){
var inst_24699 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24701__$1,inst_24699);
} else {
if((state_val_24702 === (4))){
var inst_24691 = (state_24701[(2)]);
var inst_24692 = async.call(null,inst_24691);
var state_24701__$1 = state_24701;
if(cljs.core.truth_(inst_24692)){
var statearr_24704_24844 = state_24701__$1;
(statearr_24704_24844[(1)] = (5));

} else {
var statearr_24705_24845 = state_24701__$1;
(statearr_24705_24845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (5))){
var state_24701__$1 = state_24701;
var statearr_24706_24846 = state_24701__$1;
(statearr_24706_24846[(2)] = null);

(statearr_24706_24846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (6))){
var state_24701__$1 = state_24701;
var statearr_24707_24847 = state_24701__$1;
(statearr_24707_24847[(2)] = null);

(statearr_24707_24847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (7))){
var inst_24697 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24708_24848 = state_24701__$1;
(statearr_24708_24848[(2)] = inst_24697);

(statearr_24708_24848[(1)] = (3));


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
});})(__24830,c__24276__auto___24842,G__24661_24831,n__17654__auto___24829,jobs,results,process,async))
;
return ((function (__24830,switch__24164__auto__,c__24276__auto___24842,G__24661_24831,n__17654__auto___24829,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0 = (function (){
var statearr_24712 = [null,null,null,null,null,null,null];
(statearr_24712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__);

(statearr_24712[(1)] = (1));

return statearr_24712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1 = (function (state_24701){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_24701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e24713){if((e24713 instanceof Object)){
var ex__24168__auto__ = e24713;
var statearr_24714_24849 = state_24701;
(statearr_24714_24849[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24850 = state_24701;
state_24701 = G__24850;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__ = function(state_24701){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1.call(this,state_24701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__;
})()
;})(__24830,switch__24164__auto__,c__24276__auto___24842,G__24661_24831,n__17654__auto___24829,jobs,results,process,async))
})();
var state__24278__auto__ = (function (){var statearr_24715 = f__24277__auto__.call(null);
(statearr_24715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___24842);

return statearr_24715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(__24830,c__24276__auto___24842,G__24661_24831,n__17654__auto___24829,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24851 = (__24830 + (1));
__24830 = G__24851;
continue;
} else {
}
break;
}

var c__24276__auto___24852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___24852,jobs,results,process,async){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___24852,jobs,results,process,async){
return (function (state_24737){
var state_val_24738 = (state_24737[(1)]);
if((state_val_24738 === (1))){
var state_24737__$1 = state_24737;
var statearr_24739_24853 = state_24737__$1;
(statearr_24739_24853[(2)] = null);

(statearr_24739_24853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (2))){
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24737__$1,(4),from);
} else {
if((state_val_24738 === (3))){
var inst_24735 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24737__$1,inst_24735);
} else {
if((state_val_24738 === (4))){
var inst_24718 = (state_24737[(7)]);
var inst_24718__$1 = (state_24737[(2)]);
var inst_24719 = (inst_24718__$1 == null);
var state_24737__$1 = (function (){var statearr_24740 = state_24737;
(statearr_24740[(7)] = inst_24718__$1);

return statearr_24740;
})();
if(cljs.core.truth_(inst_24719)){
var statearr_24741_24854 = state_24737__$1;
(statearr_24741_24854[(1)] = (5));

} else {
var statearr_24742_24855 = state_24737__$1;
(statearr_24742_24855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (5))){
var inst_24721 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24737__$1 = state_24737;
var statearr_24743_24856 = state_24737__$1;
(statearr_24743_24856[(2)] = inst_24721);

(statearr_24743_24856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (6))){
var inst_24718 = (state_24737[(7)]);
var inst_24723 = (state_24737[(8)]);
var inst_24723__$1 = cljs.core.async.chan.call(null,(1));
var inst_24724 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24725 = [inst_24718,inst_24723__$1];
var inst_24726 = (new cljs.core.PersistentVector(null,2,(5),inst_24724,inst_24725,null));
var state_24737__$1 = (function (){var statearr_24744 = state_24737;
(statearr_24744[(8)] = inst_24723__$1);

return statearr_24744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24737__$1,(8),jobs,inst_24726);
} else {
if((state_val_24738 === (7))){
var inst_24733 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
var statearr_24745_24857 = state_24737__$1;
(statearr_24745_24857[(2)] = inst_24733);

(statearr_24745_24857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (8))){
var inst_24723 = (state_24737[(8)]);
var inst_24728 = (state_24737[(2)]);
var state_24737__$1 = (function (){var statearr_24746 = state_24737;
(statearr_24746[(9)] = inst_24728);

return statearr_24746;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24737__$1,(9),results,inst_24723);
} else {
if((state_val_24738 === (9))){
var inst_24730 = (state_24737[(2)]);
var state_24737__$1 = (function (){var statearr_24747 = state_24737;
(statearr_24747[(10)] = inst_24730);

return statearr_24747;
})();
var statearr_24748_24858 = state_24737__$1;
(statearr_24748_24858[(2)] = null);

(statearr_24748_24858[(1)] = (2));


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
});})(c__24276__auto___24852,jobs,results,process,async))
;
return ((function (switch__24164__auto__,c__24276__auto___24852,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0 = (function (){
var statearr_24752 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24752[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__);

(statearr_24752[(1)] = (1));

return statearr_24752;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1 = (function (state_24737){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_24737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e24753){if((e24753 instanceof Object)){
var ex__24168__auto__ = e24753;
var statearr_24754_24859 = state_24737;
(statearr_24754_24859[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24860 = state_24737;
state_24737 = G__24860;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__ = function(state_24737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1.call(this,state_24737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___24852,jobs,results,process,async))
})();
var state__24278__auto__ = (function (){var statearr_24755 = f__24277__auto__.call(null);
(statearr_24755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___24852);

return statearr_24755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___24852,jobs,results,process,async))
);


var c__24276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto__,jobs,results,process,async){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto__,jobs,results,process,async){
return (function (state_24793){
var state_val_24794 = (state_24793[(1)]);
if((state_val_24794 === (7))){
var inst_24789 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
var statearr_24795_24861 = state_24793__$1;
(statearr_24795_24861[(2)] = inst_24789);

(statearr_24795_24861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (20))){
var state_24793__$1 = state_24793;
var statearr_24796_24862 = state_24793__$1;
(statearr_24796_24862[(2)] = null);

(statearr_24796_24862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (1))){
var state_24793__$1 = state_24793;
var statearr_24797_24863 = state_24793__$1;
(statearr_24797_24863[(2)] = null);

(statearr_24797_24863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (4))){
var inst_24758 = (state_24793[(7)]);
var inst_24758__$1 = (state_24793[(2)]);
var inst_24759 = (inst_24758__$1 == null);
var state_24793__$1 = (function (){var statearr_24798 = state_24793;
(statearr_24798[(7)] = inst_24758__$1);

return statearr_24798;
})();
if(cljs.core.truth_(inst_24759)){
var statearr_24799_24864 = state_24793__$1;
(statearr_24799_24864[(1)] = (5));

} else {
var statearr_24800_24865 = state_24793__$1;
(statearr_24800_24865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (15))){
var inst_24771 = (state_24793[(8)]);
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24793__$1,(18),to,inst_24771);
} else {
if((state_val_24794 === (21))){
var inst_24784 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
var statearr_24801_24866 = state_24793__$1;
(statearr_24801_24866[(2)] = inst_24784);

(statearr_24801_24866[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (13))){
var inst_24786 = (state_24793[(2)]);
var state_24793__$1 = (function (){var statearr_24802 = state_24793;
(statearr_24802[(9)] = inst_24786);

return statearr_24802;
})();
var statearr_24803_24867 = state_24793__$1;
(statearr_24803_24867[(2)] = null);

(statearr_24803_24867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (6))){
var inst_24758 = (state_24793[(7)]);
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24793__$1,(11),inst_24758);
} else {
if((state_val_24794 === (17))){
var inst_24779 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
if(cljs.core.truth_(inst_24779)){
var statearr_24804_24868 = state_24793__$1;
(statearr_24804_24868[(1)] = (19));

} else {
var statearr_24805_24869 = state_24793__$1;
(statearr_24805_24869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (3))){
var inst_24791 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24793__$1,inst_24791);
} else {
if((state_val_24794 === (12))){
var inst_24768 = (state_24793[(10)]);
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24793__$1,(14),inst_24768);
} else {
if((state_val_24794 === (2))){
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24793__$1,(4),results);
} else {
if((state_val_24794 === (19))){
var state_24793__$1 = state_24793;
var statearr_24806_24870 = state_24793__$1;
(statearr_24806_24870[(2)] = null);

(statearr_24806_24870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (11))){
var inst_24768 = (state_24793[(2)]);
var state_24793__$1 = (function (){var statearr_24807 = state_24793;
(statearr_24807[(10)] = inst_24768);

return statearr_24807;
})();
var statearr_24808_24871 = state_24793__$1;
(statearr_24808_24871[(2)] = null);

(statearr_24808_24871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (9))){
var state_24793__$1 = state_24793;
var statearr_24809_24872 = state_24793__$1;
(statearr_24809_24872[(2)] = null);

(statearr_24809_24872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (5))){
var state_24793__$1 = state_24793;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24810_24873 = state_24793__$1;
(statearr_24810_24873[(1)] = (8));

} else {
var statearr_24811_24874 = state_24793__$1;
(statearr_24811_24874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (14))){
var inst_24771 = (state_24793[(8)]);
var inst_24773 = (state_24793[(11)]);
var inst_24771__$1 = (state_24793[(2)]);
var inst_24772 = (inst_24771__$1 == null);
var inst_24773__$1 = cljs.core.not.call(null,inst_24772);
var state_24793__$1 = (function (){var statearr_24812 = state_24793;
(statearr_24812[(8)] = inst_24771__$1);

(statearr_24812[(11)] = inst_24773__$1);

return statearr_24812;
})();
if(inst_24773__$1){
var statearr_24813_24875 = state_24793__$1;
(statearr_24813_24875[(1)] = (15));

} else {
var statearr_24814_24876 = state_24793__$1;
(statearr_24814_24876[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (16))){
var inst_24773 = (state_24793[(11)]);
var state_24793__$1 = state_24793;
var statearr_24815_24877 = state_24793__$1;
(statearr_24815_24877[(2)] = inst_24773);

(statearr_24815_24877[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (10))){
var inst_24765 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
var statearr_24816_24878 = state_24793__$1;
(statearr_24816_24878[(2)] = inst_24765);

(statearr_24816_24878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (18))){
var inst_24776 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
var statearr_24817_24879 = state_24793__$1;
(statearr_24817_24879[(2)] = inst_24776);

(statearr_24817_24879[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (8))){
var inst_24762 = cljs.core.async.close_BANG_.call(null,to);
var state_24793__$1 = state_24793;
var statearr_24818_24880 = state_24793__$1;
(statearr_24818_24880[(2)] = inst_24762);

(statearr_24818_24880[(1)] = (10));


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
});})(c__24276__auto__,jobs,results,process,async))
;
return ((function (switch__24164__auto__,c__24276__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0 = (function (){
var statearr_24822 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__);

(statearr_24822[(1)] = (1));

return statearr_24822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1 = (function (state_24793){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_24793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e24823){if((e24823 instanceof Object)){
var ex__24168__auto__ = e24823;
var statearr_24824_24881 = state_24793;
(statearr_24824_24881[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24882 = state_24793;
state_24793 = G__24882;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__ = function(state_24793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1.call(this,state_24793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto__,jobs,results,process,async))
})();
var state__24278__auto__ = (function (){var statearr_24825 = f__24277__auto__.call(null);
(statearr_24825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto__);

return statearr_24825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto__,jobs,results,process,async))
);

return c__24276__auto__;
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
var args24883 = [];
var len__17809__auto___24886 = arguments.length;
var i__17810__auto___24887 = (0);
while(true){
if((i__17810__auto___24887 < len__17809__auto___24886)){
args24883.push((arguments[i__17810__auto___24887]));

var G__24888 = (i__17810__auto___24887 + (1));
i__17810__auto___24887 = G__24888;
continue;
} else {
}
break;
}

var G__24885 = args24883.length;
switch (G__24885) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24883.length)].join('')));

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
var args24890 = [];
var len__17809__auto___24893 = arguments.length;
var i__17810__auto___24894 = (0);
while(true){
if((i__17810__auto___24894 < len__17809__auto___24893)){
args24890.push((arguments[i__17810__auto___24894]));

var G__24895 = (i__17810__auto___24894 + (1));
i__17810__auto___24894 = G__24895;
continue;
} else {
}
break;
}

var G__24892 = args24890.length;
switch (G__24892) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24890.length)].join('')));

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
var args24897 = [];
var len__17809__auto___24950 = arguments.length;
var i__17810__auto___24951 = (0);
while(true){
if((i__17810__auto___24951 < len__17809__auto___24950)){
args24897.push((arguments[i__17810__auto___24951]));

var G__24952 = (i__17810__auto___24951 + (1));
i__17810__auto___24951 = G__24952;
continue;
} else {
}
break;
}

var G__24899 = args24897.length;
switch (G__24899) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24897.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24276__auto___24954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___24954,tc,fc){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___24954,tc,fc){
return (function (state_24925){
var state_val_24926 = (state_24925[(1)]);
if((state_val_24926 === (7))){
var inst_24921 = (state_24925[(2)]);
var state_24925__$1 = state_24925;
var statearr_24927_24955 = state_24925__$1;
(statearr_24927_24955[(2)] = inst_24921);

(statearr_24927_24955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (1))){
var state_24925__$1 = state_24925;
var statearr_24928_24956 = state_24925__$1;
(statearr_24928_24956[(2)] = null);

(statearr_24928_24956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (4))){
var inst_24902 = (state_24925[(7)]);
var inst_24902__$1 = (state_24925[(2)]);
var inst_24903 = (inst_24902__$1 == null);
var state_24925__$1 = (function (){var statearr_24929 = state_24925;
(statearr_24929[(7)] = inst_24902__$1);

return statearr_24929;
})();
if(cljs.core.truth_(inst_24903)){
var statearr_24930_24957 = state_24925__$1;
(statearr_24930_24957[(1)] = (5));

} else {
var statearr_24931_24958 = state_24925__$1;
(statearr_24931_24958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (13))){
var state_24925__$1 = state_24925;
var statearr_24932_24959 = state_24925__$1;
(statearr_24932_24959[(2)] = null);

(statearr_24932_24959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (6))){
var inst_24902 = (state_24925[(7)]);
var inst_24908 = p.call(null,inst_24902);
var state_24925__$1 = state_24925;
if(cljs.core.truth_(inst_24908)){
var statearr_24933_24960 = state_24925__$1;
(statearr_24933_24960[(1)] = (9));

} else {
var statearr_24934_24961 = state_24925__$1;
(statearr_24934_24961[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (3))){
var inst_24923 = (state_24925[(2)]);
var state_24925__$1 = state_24925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24925__$1,inst_24923);
} else {
if((state_val_24926 === (12))){
var state_24925__$1 = state_24925;
var statearr_24935_24962 = state_24925__$1;
(statearr_24935_24962[(2)] = null);

(statearr_24935_24962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (2))){
var state_24925__$1 = state_24925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24925__$1,(4),ch);
} else {
if((state_val_24926 === (11))){
var inst_24902 = (state_24925[(7)]);
var inst_24912 = (state_24925[(2)]);
var state_24925__$1 = state_24925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24925__$1,(8),inst_24912,inst_24902);
} else {
if((state_val_24926 === (9))){
var state_24925__$1 = state_24925;
var statearr_24936_24963 = state_24925__$1;
(statearr_24936_24963[(2)] = tc);

(statearr_24936_24963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (5))){
var inst_24905 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24906 = cljs.core.async.close_BANG_.call(null,fc);
var state_24925__$1 = (function (){var statearr_24937 = state_24925;
(statearr_24937[(8)] = inst_24905);

return statearr_24937;
})();
var statearr_24938_24964 = state_24925__$1;
(statearr_24938_24964[(2)] = inst_24906);

(statearr_24938_24964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (14))){
var inst_24919 = (state_24925[(2)]);
var state_24925__$1 = state_24925;
var statearr_24939_24965 = state_24925__$1;
(statearr_24939_24965[(2)] = inst_24919);

(statearr_24939_24965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (10))){
var state_24925__$1 = state_24925;
var statearr_24940_24966 = state_24925__$1;
(statearr_24940_24966[(2)] = fc);

(statearr_24940_24966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (8))){
var inst_24914 = (state_24925[(2)]);
var state_24925__$1 = state_24925;
if(cljs.core.truth_(inst_24914)){
var statearr_24941_24967 = state_24925__$1;
(statearr_24941_24967[(1)] = (12));

} else {
var statearr_24942_24968 = state_24925__$1;
(statearr_24942_24968[(1)] = (13));

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
});})(c__24276__auto___24954,tc,fc))
;
return ((function (switch__24164__auto__,c__24276__auto___24954,tc,fc){
return (function() {
var cljs$core$async$state_machine__24165__auto__ = null;
var cljs$core$async$state_machine__24165__auto____0 = (function (){
var statearr_24946 = [null,null,null,null,null,null,null,null,null];
(statearr_24946[(0)] = cljs$core$async$state_machine__24165__auto__);

(statearr_24946[(1)] = (1));

return statearr_24946;
});
var cljs$core$async$state_machine__24165__auto____1 = (function (state_24925){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_24925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e24947){if((e24947 instanceof Object)){
var ex__24168__auto__ = e24947;
var statearr_24948_24969 = state_24925;
(statearr_24948_24969[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24970 = state_24925;
state_24925 = G__24970;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$state_machine__24165__auto__ = function(state_24925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24165__auto____1.call(this,state_24925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24165__auto____0;
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24165__auto____1;
return cljs$core$async$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___24954,tc,fc))
})();
var state__24278__auto__ = (function (){var statearr_24949 = f__24277__auto__.call(null);
(statearr_24949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___24954);

return statearr_24949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___24954,tc,fc))
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
var c__24276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto__){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto__){
return (function (state_25034){
var state_val_25035 = (state_25034[(1)]);
if((state_val_25035 === (7))){
var inst_25030 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25036_25057 = state_25034__$1;
(statearr_25036_25057[(2)] = inst_25030);

(statearr_25036_25057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (1))){
var inst_25014 = init;
var state_25034__$1 = (function (){var statearr_25037 = state_25034;
(statearr_25037[(7)] = inst_25014);

return statearr_25037;
})();
var statearr_25038_25058 = state_25034__$1;
(statearr_25038_25058[(2)] = null);

(statearr_25038_25058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (4))){
var inst_25017 = (state_25034[(8)]);
var inst_25017__$1 = (state_25034[(2)]);
var inst_25018 = (inst_25017__$1 == null);
var state_25034__$1 = (function (){var statearr_25039 = state_25034;
(statearr_25039[(8)] = inst_25017__$1);

return statearr_25039;
})();
if(cljs.core.truth_(inst_25018)){
var statearr_25040_25059 = state_25034__$1;
(statearr_25040_25059[(1)] = (5));

} else {
var statearr_25041_25060 = state_25034__$1;
(statearr_25041_25060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (6))){
var inst_25014 = (state_25034[(7)]);
var inst_25017 = (state_25034[(8)]);
var inst_25021 = (state_25034[(9)]);
var inst_25021__$1 = f.call(null,inst_25014,inst_25017);
var inst_25022 = cljs.core.reduced_QMARK_.call(null,inst_25021__$1);
var state_25034__$1 = (function (){var statearr_25042 = state_25034;
(statearr_25042[(9)] = inst_25021__$1);

return statearr_25042;
})();
if(inst_25022){
var statearr_25043_25061 = state_25034__$1;
(statearr_25043_25061[(1)] = (8));

} else {
var statearr_25044_25062 = state_25034__$1;
(statearr_25044_25062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (3))){
var inst_25032 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25034__$1,inst_25032);
} else {
if((state_val_25035 === (2))){
var state_25034__$1 = state_25034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25034__$1,(4),ch);
} else {
if((state_val_25035 === (9))){
var inst_25021 = (state_25034[(9)]);
var inst_25014 = inst_25021;
var state_25034__$1 = (function (){var statearr_25045 = state_25034;
(statearr_25045[(7)] = inst_25014);

return statearr_25045;
})();
var statearr_25046_25063 = state_25034__$1;
(statearr_25046_25063[(2)] = null);

(statearr_25046_25063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (5))){
var inst_25014 = (state_25034[(7)]);
var state_25034__$1 = state_25034;
var statearr_25047_25064 = state_25034__$1;
(statearr_25047_25064[(2)] = inst_25014);

(statearr_25047_25064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (10))){
var inst_25028 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25048_25065 = state_25034__$1;
(statearr_25048_25065[(2)] = inst_25028);

(statearr_25048_25065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (8))){
var inst_25021 = (state_25034[(9)]);
var inst_25024 = cljs.core.deref.call(null,inst_25021);
var state_25034__$1 = state_25034;
var statearr_25049_25066 = state_25034__$1;
(statearr_25049_25066[(2)] = inst_25024);

(statearr_25049_25066[(1)] = (10));


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
});})(c__24276__auto__))
;
return ((function (switch__24164__auto__,c__24276__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24165__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24165__auto____0 = (function (){
var statearr_25053 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25053[(0)] = cljs$core$async$reduce_$_state_machine__24165__auto__);

(statearr_25053[(1)] = (1));

return statearr_25053;
});
var cljs$core$async$reduce_$_state_machine__24165__auto____1 = (function (state_25034){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_25034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e25054){if((e25054 instanceof Object)){
var ex__24168__auto__ = e25054;
var statearr_25055_25067 = state_25034;
(statearr_25055_25067[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25068 = state_25034;
state_25034 = G__25068;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24165__auto__ = function(state_25034){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24165__auto____1.call(this,state_25034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24165__auto____0;
cljs$core$async$reduce_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24165__auto____1;
return cljs$core$async$reduce_$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto__))
})();
var state__24278__auto__ = (function (){var statearr_25056 = f__24277__auto__.call(null);
(statearr_25056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto__);

return statearr_25056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto__))
);

return c__24276__auto__;
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
var args25069 = [];
var len__17809__auto___25121 = arguments.length;
var i__17810__auto___25122 = (0);
while(true){
if((i__17810__auto___25122 < len__17809__auto___25121)){
args25069.push((arguments[i__17810__auto___25122]));

var G__25123 = (i__17810__auto___25122 + (1));
i__17810__auto___25122 = G__25123;
continue;
} else {
}
break;
}

var G__25071 = args25069.length;
switch (G__25071) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25069.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto__){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto__){
return (function (state_25096){
var state_val_25097 = (state_25096[(1)]);
if((state_val_25097 === (7))){
var inst_25078 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25098_25125 = state_25096__$1;
(statearr_25098_25125[(2)] = inst_25078);

(statearr_25098_25125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (1))){
var inst_25072 = cljs.core.seq.call(null,coll);
var inst_25073 = inst_25072;
var state_25096__$1 = (function (){var statearr_25099 = state_25096;
(statearr_25099[(7)] = inst_25073);

return statearr_25099;
})();
var statearr_25100_25126 = state_25096__$1;
(statearr_25100_25126[(2)] = null);

(statearr_25100_25126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (4))){
var inst_25073 = (state_25096[(7)]);
var inst_25076 = cljs.core.first.call(null,inst_25073);
var state_25096__$1 = state_25096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25096__$1,(7),ch,inst_25076);
} else {
if((state_val_25097 === (13))){
var inst_25090 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25101_25127 = state_25096__$1;
(statearr_25101_25127[(2)] = inst_25090);

(statearr_25101_25127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (6))){
var inst_25081 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
if(cljs.core.truth_(inst_25081)){
var statearr_25102_25128 = state_25096__$1;
(statearr_25102_25128[(1)] = (8));

} else {
var statearr_25103_25129 = state_25096__$1;
(statearr_25103_25129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (3))){
var inst_25094 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25096__$1,inst_25094);
} else {
if((state_val_25097 === (12))){
var state_25096__$1 = state_25096;
var statearr_25104_25130 = state_25096__$1;
(statearr_25104_25130[(2)] = null);

(statearr_25104_25130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (2))){
var inst_25073 = (state_25096[(7)]);
var state_25096__$1 = state_25096;
if(cljs.core.truth_(inst_25073)){
var statearr_25105_25131 = state_25096__$1;
(statearr_25105_25131[(1)] = (4));

} else {
var statearr_25106_25132 = state_25096__$1;
(statearr_25106_25132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (11))){
var inst_25087 = cljs.core.async.close_BANG_.call(null,ch);
var state_25096__$1 = state_25096;
var statearr_25107_25133 = state_25096__$1;
(statearr_25107_25133[(2)] = inst_25087);

(statearr_25107_25133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (9))){
var state_25096__$1 = state_25096;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25108_25134 = state_25096__$1;
(statearr_25108_25134[(1)] = (11));

} else {
var statearr_25109_25135 = state_25096__$1;
(statearr_25109_25135[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (5))){
var inst_25073 = (state_25096[(7)]);
var state_25096__$1 = state_25096;
var statearr_25110_25136 = state_25096__$1;
(statearr_25110_25136[(2)] = inst_25073);

(statearr_25110_25136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (10))){
var inst_25092 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25111_25137 = state_25096__$1;
(statearr_25111_25137[(2)] = inst_25092);

(statearr_25111_25137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (8))){
var inst_25073 = (state_25096[(7)]);
var inst_25083 = cljs.core.next.call(null,inst_25073);
var inst_25073__$1 = inst_25083;
var state_25096__$1 = (function (){var statearr_25112 = state_25096;
(statearr_25112[(7)] = inst_25073__$1);

return statearr_25112;
})();
var statearr_25113_25138 = state_25096__$1;
(statearr_25113_25138[(2)] = null);

(statearr_25113_25138[(1)] = (2));


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
});})(c__24276__auto__))
;
return ((function (switch__24164__auto__,c__24276__auto__){
return (function() {
var cljs$core$async$state_machine__24165__auto__ = null;
var cljs$core$async$state_machine__24165__auto____0 = (function (){
var statearr_25117 = [null,null,null,null,null,null,null,null];
(statearr_25117[(0)] = cljs$core$async$state_machine__24165__auto__);

(statearr_25117[(1)] = (1));

return statearr_25117;
});
var cljs$core$async$state_machine__24165__auto____1 = (function (state_25096){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_25096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e25118){if((e25118 instanceof Object)){
var ex__24168__auto__ = e25118;
var statearr_25119_25139 = state_25096;
(statearr_25119_25139[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25140 = state_25096;
state_25096 = G__25140;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$state_machine__24165__auto__ = function(state_25096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24165__auto____1.call(this,state_25096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24165__auto____0;
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24165__auto____1;
return cljs$core$async$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto__))
})();
var state__24278__auto__ = (function (){var statearr_25120 = f__24277__auto__.call(null);
(statearr_25120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto__);

return statearr_25120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto__))
);

return c__24276__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25362 = (function (mult,ch,cs,meta25363){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25363 = meta25363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25364,meta25363__$1){
var self__ = this;
var _25364__$1 = this;
return (new cljs.core.async.t_cljs$core$async25362(self__.mult,self__.ch,self__.cs,meta25363__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25362.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25364){
var self__ = this;
var _25364__$1 = this;
return self__.meta25363;
});})(cs))
;

cljs.core.async.t_cljs$core$async25362.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25362.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25362.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25362.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25362.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25362.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25362.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25363","meta25363",356881096,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25362";

cljs.core.async.t_cljs$core$async25362.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25362");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25362 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25362(mult__$1,ch__$1,cs__$1,meta25363){
return (new cljs.core.async.t_cljs$core$async25362(mult__$1,ch__$1,cs__$1,meta25363));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25362(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24276__auto___25583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___25583,cs,m,dchan,dctr,done){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___25583,cs,m,dchan,dctr,done){
return (function (state_25495){
var state_val_25496 = (state_25495[(1)]);
if((state_val_25496 === (7))){
var inst_25491 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25497_25584 = state_25495__$1;
(statearr_25497_25584[(2)] = inst_25491);

(statearr_25497_25584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (20))){
var inst_25396 = (state_25495[(7)]);
var inst_25406 = cljs.core.first.call(null,inst_25396);
var inst_25407 = cljs.core.nth.call(null,inst_25406,(0),null);
var inst_25408 = cljs.core.nth.call(null,inst_25406,(1),null);
var state_25495__$1 = (function (){var statearr_25498 = state_25495;
(statearr_25498[(8)] = inst_25407);

return statearr_25498;
})();
if(cljs.core.truth_(inst_25408)){
var statearr_25499_25585 = state_25495__$1;
(statearr_25499_25585[(1)] = (22));

} else {
var statearr_25500_25586 = state_25495__$1;
(statearr_25500_25586[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (27))){
var inst_25436 = (state_25495[(9)]);
var inst_25443 = (state_25495[(10)]);
var inst_25367 = (state_25495[(11)]);
var inst_25438 = (state_25495[(12)]);
var inst_25443__$1 = cljs.core._nth.call(null,inst_25436,inst_25438);
var inst_25444 = cljs.core.async.put_BANG_.call(null,inst_25443__$1,inst_25367,done);
var state_25495__$1 = (function (){var statearr_25501 = state_25495;
(statearr_25501[(10)] = inst_25443__$1);

return statearr_25501;
})();
if(cljs.core.truth_(inst_25444)){
var statearr_25502_25587 = state_25495__$1;
(statearr_25502_25587[(1)] = (30));

} else {
var statearr_25503_25588 = state_25495__$1;
(statearr_25503_25588[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (1))){
var state_25495__$1 = state_25495;
var statearr_25504_25589 = state_25495__$1;
(statearr_25504_25589[(2)] = null);

(statearr_25504_25589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (24))){
var inst_25396 = (state_25495[(7)]);
var inst_25413 = (state_25495[(2)]);
var inst_25414 = cljs.core.next.call(null,inst_25396);
var inst_25376 = inst_25414;
var inst_25377 = null;
var inst_25378 = (0);
var inst_25379 = (0);
var state_25495__$1 = (function (){var statearr_25505 = state_25495;
(statearr_25505[(13)] = inst_25379);

(statearr_25505[(14)] = inst_25378);

(statearr_25505[(15)] = inst_25376);

(statearr_25505[(16)] = inst_25413);

(statearr_25505[(17)] = inst_25377);

return statearr_25505;
})();
var statearr_25506_25590 = state_25495__$1;
(statearr_25506_25590[(2)] = null);

(statearr_25506_25590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (39))){
var state_25495__$1 = state_25495;
var statearr_25510_25591 = state_25495__$1;
(statearr_25510_25591[(2)] = null);

(statearr_25510_25591[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (4))){
var inst_25367 = (state_25495[(11)]);
var inst_25367__$1 = (state_25495[(2)]);
var inst_25368 = (inst_25367__$1 == null);
var state_25495__$1 = (function (){var statearr_25511 = state_25495;
(statearr_25511[(11)] = inst_25367__$1);

return statearr_25511;
})();
if(cljs.core.truth_(inst_25368)){
var statearr_25512_25592 = state_25495__$1;
(statearr_25512_25592[(1)] = (5));

} else {
var statearr_25513_25593 = state_25495__$1;
(statearr_25513_25593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (15))){
var inst_25379 = (state_25495[(13)]);
var inst_25378 = (state_25495[(14)]);
var inst_25376 = (state_25495[(15)]);
var inst_25377 = (state_25495[(17)]);
var inst_25392 = (state_25495[(2)]);
var inst_25393 = (inst_25379 + (1));
var tmp25507 = inst_25378;
var tmp25508 = inst_25376;
var tmp25509 = inst_25377;
var inst_25376__$1 = tmp25508;
var inst_25377__$1 = tmp25509;
var inst_25378__$1 = tmp25507;
var inst_25379__$1 = inst_25393;
var state_25495__$1 = (function (){var statearr_25514 = state_25495;
(statearr_25514[(13)] = inst_25379__$1);

(statearr_25514[(14)] = inst_25378__$1);

(statearr_25514[(15)] = inst_25376__$1);

(statearr_25514[(18)] = inst_25392);

(statearr_25514[(17)] = inst_25377__$1);

return statearr_25514;
})();
var statearr_25515_25594 = state_25495__$1;
(statearr_25515_25594[(2)] = null);

(statearr_25515_25594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (21))){
var inst_25417 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25519_25595 = state_25495__$1;
(statearr_25519_25595[(2)] = inst_25417);

(statearr_25519_25595[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (31))){
var inst_25443 = (state_25495[(10)]);
var inst_25447 = done.call(null,null);
var inst_25448 = cljs.core.async.untap_STAR_.call(null,m,inst_25443);
var state_25495__$1 = (function (){var statearr_25520 = state_25495;
(statearr_25520[(19)] = inst_25447);

return statearr_25520;
})();
var statearr_25521_25596 = state_25495__$1;
(statearr_25521_25596[(2)] = inst_25448);

(statearr_25521_25596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (32))){
var inst_25437 = (state_25495[(20)]);
var inst_25436 = (state_25495[(9)]);
var inst_25438 = (state_25495[(12)]);
var inst_25435 = (state_25495[(21)]);
var inst_25450 = (state_25495[(2)]);
var inst_25451 = (inst_25438 + (1));
var tmp25516 = inst_25437;
var tmp25517 = inst_25436;
var tmp25518 = inst_25435;
var inst_25435__$1 = tmp25518;
var inst_25436__$1 = tmp25517;
var inst_25437__$1 = tmp25516;
var inst_25438__$1 = inst_25451;
var state_25495__$1 = (function (){var statearr_25522 = state_25495;
(statearr_25522[(20)] = inst_25437__$1);

(statearr_25522[(22)] = inst_25450);

(statearr_25522[(9)] = inst_25436__$1);

(statearr_25522[(12)] = inst_25438__$1);

(statearr_25522[(21)] = inst_25435__$1);

return statearr_25522;
})();
var statearr_25523_25597 = state_25495__$1;
(statearr_25523_25597[(2)] = null);

(statearr_25523_25597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (40))){
var inst_25463 = (state_25495[(23)]);
var inst_25467 = done.call(null,null);
var inst_25468 = cljs.core.async.untap_STAR_.call(null,m,inst_25463);
var state_25495__$1 = (function (){var statearr_25524 = state_25495;
(statearr_25524[(24)] = inst_25467);

return statearr_25524;
})();
var statearr_25525_25598 = state_25495__$1;
(statearr_25525_25598[(2)] = inst_25468);

(statearr_25525_25598[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (33))){
var inst_25454 = (state_25495[(25)]);
var inst_25456 = cljs.core.chunked_seq_QMARK_.call(null,inst_25454);
var state_25495__$1 = state_25495;
if(inst_25456){
var statearr_25526_25599 = state_25495__$1;
(statearr_25526_25599[(1)] = (36));

} else {
var statearr_25527_25600 = state_25495__$1;
(statearr_25527_25600[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (13))){
var inst_25386 = (state_25495[(26)]);
var inst_25389 = cljs.core.async.close_BANG_.call(null,inst_25386);
var state_25495__$1 = state_25495;
var statearr_25528_25601 = state_25495__$1;
(statearr_25528_25601[(2)] = inst_25389);

(statearr_25528_25601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (22))){
var inst_25407 = (state_25495[(8)]);
var inst_25410 = cljs.core.async.close_BANG_.call(null,inst_25407);
var state_25495__$1 = state_25495;
var statearr_25529_25602 = state_25495__$1;
(statearr_25529_25602[(2)] = inst_25410);

(statearr_25529_25602[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (36))){
var inst_25454 = (state_25495[(25)]);
var inst_25458 = cljs.core.chunk_first.call(null,inst_25454);
var inst_25459 = cljs.core.chunk_rest.call(null,inst_25454);
var inst_25460 = cljs.core.count.call(null,inst_25458);
var inst_25435 = inst_25459;
var inst_25436 = inst_25458;
var inst_25437 = inst_25460;
var inst_25438 = (0);
var state_25495__$1 = (function (){var statearr_25530 = state_25495;
(statearr_25530[(20)] = inst_25437);

(statearr_25530[(9)] = inst_25436);

(statearr_25530[(12)] = inst_25438);

(statearr_25530[(21)] = inst_25435);

return statearr_25530;
})();
var statearr_25531_25603 = state_25495__$1;
(statearr_25531_25603[(2)] = null);

(statearr_25531_25603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (41))){
var inst_25454 = (state_25495[(25)]);
var inst_25470 = (state_25495[(2)]);
var inst_25471 = cljs.core.next.call(null,inst_25454);
var inst_25435 = inst_25471;
var inst_25436 = null;
var inst_25437 = (0);
var inst_25438 = (0);
var state_25495__$1 = (function (){var statearr_25532 = state_25495;
(statearr_25532[(20)] = inst_25437);

(statearr_25532[(9)] = inst_25436);

(statearr_25532[(27)] = inst_25470);

(statearr_25532[(12)] = inst_25438);

(statearr_25532[(21)] = inst_25435);

return statearr_25532;
})();
var statearr_25533_25604 = state_25495__$1;
(statearr_25533_25604[(2)] = null);

(statearr_25533_25604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (43))){
var state_25495__$1 = state_25495;
var statearr_25534_25605 = state_25495__$1;
(statearr_25534_25605[(2)] = null);

(statearr_25534_25605[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (29))){
var inst_25479 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25535_25606 = state_25495__$1;
(statearr_25535_25606[(2)] = inst_25479);

(statearr_25535_25606[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (44))){
var inst_25488 = (state_25495[(2)]);
var state_25495__$1 = (function (){var statearr_25536 = state_25495;
(statearr_25536[(28)] = inst_25488);

return statearr_25536;
})();
var statearr_25537_25607 = state_25495__$1;
(statearr_25537_25607[(2)] = null);

(statearr_25537_25607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (6))){
var inst_25427 = (state_25495[(29)]);
var inst_25426 = cljs.core.deref.call(null,cs);
var inst_25427__$1 = cljs.core.keys.call(null,inst_25426);
var inst_25428 = cljs.core.count.call(null,inst_25427__$1);
var inst_25429 = cljs.core.reset_BANG_.call(null,dctr,inst_25428);
var inst_25434 = cljs.core.seq.call(null,inst_25427__$1);
var inst_25435 = inst_25434;
var inst_25436 = null;
var inst_25437 = (0);
var inst_25438 = (0);
var state_25495__$1 = (function (){var statearr_25538 = state_25495;
(statearr_25538[(20)] = inst_25437);

(statearr_25538[(9)] = inst_25436);

(statearr_25538[(29)] = inst_25427__$1);

(statearr_25538[(30)] = inst_25429);

(statearr_25538[(12)] = inst_25438);

(statearr_25538[(21)] = inst_25435);

return statearr_25538;
})();
var statearr_25539_25608 = state_25495__$1;
(statearr_25539_25608[(2)] = null);

(statearr_25539_25608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (28))){
var inst_25454 = (state_25495[(25)]);
var inst_25435 = (state_25495[(21)]);
var inst_25454__$1 = cljs.core.seq.call(null,inst_25435);
var state_25495__$1 = (function (){var statearr_25540 = state_25495;
(statearr_25540[(25)] = inst_25454__$1);

return statearr_25540;
})();
if(inst_25454__$1){
var statearr_25541_25609 = state_25495__$1;
(statearr_25541_25609[(1)] = (33));

} else {
var statearr_25542_25610 = state_25495__$1;
(statearr_25542_25610[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (25))){
var inst_25437 = (state_25495[(20)]);
var inst_25438 = (state_25495[(12)]);
var inst_25440 = (inst_25438 < inst_25437);
var inst_25441 = inst_25440;
var state_25495__$1 = state_25495;
if(cljs.core.truth_(inst_25441)){
var statearr_25543_25611 = state_25495__$1;
(statearr_25543_25611[(1)] = (27));

} else {
var statearr_25544_25612 = state_25495__$1;
(statearr_25544_25612[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (34))){
var state_25495__$1 = state_25495;
var statearr_25545_25613 = state_25495__$1;
(statearr_25545_25613[(2)] = null);

(statearr_25545_25613[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (17))){
var state_25495__$1 = state_25495;
var statearr_25546_25614 = state_25495__$1;
(statearr_25546_25614[(2)] = null);

(statearr_25546_25614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (3))){
var inst_25493 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25495__$1,inst_25493);
} else {
if((state_val_25496 === (12))){
var inst_25422 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25547_25615 = state_25495__$1;
(statearr_25547_25615[(2)] = inst_25422);

(statearr_25547_25615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (2))){
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(4),ch);
} else {
if((state_val_25496 === (23))){
var state_25495__$1 = state_25495;
var statearr_25548_25616 = state_25495__$1;
(statearr_25548_25616[(2)] = null);

(statearr_25548_25616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (35))){
var inst_25477 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25549_25617 = state_25495__$1;
(statearr_25549_25617[(2)] = inst_25477);

(statearr_25549_25617[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (19))){
var inst_25396 = (state_25495[(7)]);
var inst_25400 = cljs.core.chunk_first.call(null,inst_25396);
var inst_25401 = cljs.core.chunk_rest.call(null,inst_25396);
var inst_25402 = cljs.core.count.call(null,inst_25400);
var inst_25376 = inst_25401;
var inst_25377 = inst_25400;
var inst_25378 = inst_25402;
var inst_25379 = (0);
var state_25495__$1 = (function (){var statearr_25550 = state_25495;
(statearr_25550[(13)] = inst_25379);

(statearr_25550[(14)] = inst_25378);

(statearr_25550[(15)] = inst_25376);

(statearr_25550[(17)] = inst_25377);

return statearr_25550;
})();
var statearr_25551_25618 = state_25495__$1;
(statearr_25551_25618[(2)] = null);

(statearr_25551_25618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (11))){
var inst_25396 = (state_25495[(7)]);
var inst_25376 = (state_25495[(15)]);
var inst_25396__$1 = cljs.core.seq.call(null,inst_25376);
var state_25495__$1 = (function (){var statearr_25552 = state_25495;
(statearr_25552[(7)] = inst_25396__$1);

return statearr_25552;
})();
if(inst_25396__$1){
var statearr_25553_25619 = state_25495__$1;
(statearr_25553_25619[(1)] = (16));

} else {
var statearr_25554_25620 = state_25495__$1;
(statearr_25554_25620[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (9))){
var inst_25424 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25555_25621 = state_25495__$1;
(statearr_25555_25621[(2)] = inst_25424);

(statearr_25555_25621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (5))){
var inst_25374 = cljs.core.deref.call(null,cs);
var inst_25375 = cljs.core.seq.call(null,inst_25374);
var inst_25376 = inst_25375;
var inst_25377 = null;
var inst_25378 = (0);
var inst_25379 = (0);
var state_25495__$1 = (function (){var statearr_25556 = state_25495;
(statearr_25556[(13)] = inst_25379);

(statearr_25556[(14)] = inst_25378);

(statearr_25556[(15)] = inst_25376);

(statearr_25556[(17)] = inst_25377);

return statearr_25556;
})();
var statearr_25557_25622 = state_25495__$1;
(statearr_25557_25622[(2)] = null);

(statearr_25557_25622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (14))){
var state_25495__$1 = state_25495;
var statearr_25558_25623 = state_25495__$1;
(statearr_25558_25623[(2)] = null);

(statearr_25558_25623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (45))){
var inst_25485 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25559_25624 = state_25495__$1;
(statearr_25559_25624[(2)] = inst_25485);

(statearr_25559_25624[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (26))){
var inst_25427 = (state_25495[(29)]);
var inst_25481 = (state_25495[(2)]);
var inst_25482 = cljs.core.seq.call(null,inst_25427);
var state_25495__$1 = (function (){var statearr_25560 = state_25495;
(statearr_25560[(31)] = inst_25481);

return statearr_25560;
})();
if(inst_25482){
var statearr_25561_25625 = state_25495__$1;
(statearr_25561_25625[(1)] = (42));

} else {
var statearr_25562_25626 = state_25495__$1;
(statearr_25562_25626[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (16))){
var inst_25396 = (state_25495[(7)]);
var inst_25398 = cljs.core.chunked_seq_QMARK_.call(null,inst_25396);
var state_25495__$1 = state_25495;
if(inst_25398){
var statearr_25563_25627 = state_25495__$1;
(statearr_25563_25627[(1)] = (19));

} else {
var statearr_25564_25628 = state_25495__$1;
(statearr_25564_25628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (38))){
var inst_25474 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25565_25629 = state_25495__$1;
(statearr_25565_25629[(2)] = inst_25474);

(statearr_25565_25629[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (30))){
var state_25495__$1 = state_25495;
var statearr_25566_25630 = state_25495__$1;
(statearr_25566_25630[(2)] = null);

(statearr_25566_25630[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (10))){
var inst_25379 = (state_25495[(13)]);
var inst_25377 = (state_25495[(17)]);
var inst_25385 = cljs.core._nth.call(null,inst_25377,inst_25379);
var inst_25386 = cljs.core.nth.call(null,inst_25385,(0),null);
var inst_25387 = cljs.core.nth.call(null,inst_25385,(1),null);
var state_25495__$1 = (function (){var statearr_25567 = state_25495;
(statearr_25567[(26)] = inst_25386);

return statearr_25567;
})();
if(cljs.core.truth_(inst_25387)){
var statearr_25568_25631 = state_25495__$1;
(statearr_25568_25631[(1)] = (13));

} else {
var statearr_25569_25632 = state_25495__$1;
(statearr_25569_25632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (18))){
var inst_25420 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25570_25633 = state_25495__$1;
(statearr_25570_25633[(2)] = inst_25420);

(statearr_25570_25633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (42))){
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(45),dchan);
} else {
if((state_val_25496 === (37))){
var inst_25463 = (state_25495[(23)]);
var inst_25454 = (state_25495[(25)]);
var inst_25367 = (state_25495[(11)]);
var inst_25463__$1 = cljs.core.first.call(null,inst_25454);
var inst_25464 = cljs.core.async.put_BANG_.call(null,inst_25463__$1,inst_25367,done);
var state_25495__$1 = (function (){var statearr_25571 = state_25495;
(statearr_25571[(23)] = inst_25463__$1);

return statearr_25571;
})();
if(cljs.core.truth_(inst_25464)){
var statearr_25572_25634 = state_25495__$1;
(statearr_25572_25634[(1)] = (39));

} else {
var statearr_25573_25635 = state_25495__$1;
(statearr_25573_25635[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (8))){
var inst_25379 = (state_25495[(13)]);
var inst_25378 = (state_25495[(14)]);
var inst_25381 = (inst_25379 < inst_25378);
var inst_25382 = inst_25381;
var state_25495__$1 = state_25495;
if(cljs.core.truth_(inst_25382)){
var statearr_25574_25636 = state_25495__$1;
(statearr_25574_25636[(1)] = (10));

} else {
var statearr_25575_25637 = state_25495__$1;
(statearr_25575_25637[(1)] = (11));

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
});})(c__24276__auto___25583,cs,m,dchan,dctr,done))
;
return ((function (switch__24164__auto__,c__24276__auto___25583,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24165__auto__ = null;
var cljs$core$async$mult_$_state_machine__24165__auto____0 = (function (){
var statearr_25579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25579[(0)] = cljs$core$async$mult_$_state_machine__24165__auto__);

(statearr_25579[(1)] = (1));

return statearr_25579;
});
var cljs$core$async$mult_$_state_machine__24165__auto____1 = (function (state_25495){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_25495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e25580){if((e25580 instanceof Object)){
var ex__24168__auto__ = e25580;
var statearr_25581_25638 = state_25495;
(statearr_25581_25638[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25639 = state_25495;
state_25495 = G__25639;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24165__auto__ = function(state_25495){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24165__auto____1.call(this,state_25495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24165__auto____0;
cljs$core$async$mult_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24165__auto____1;
return cljs$core$async$mult_$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___25583,cs,m,dchan,dctr,done))
})();
var state__24278__auto__ = (function (){var statearr_25582 = f__24277__auto__.call(null);
(statearr_25582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___25583);

return statearr_25582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___25583,cs,m,dchan,dctr,done))
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
var args25640 = [];
var len__17809__auto___25643 = arguments.length;
var i__17810__auto___25644 = (0);
while(true){
if((i__17810__auto___25644 < len__17809__auto___25643)){
args25640.push((arguments[i__17810__auto___25644]));

var G__25645 = (i__17810__auto___25644 + (1));
i__17810__auto___25644 = G__25645;
continue;
} else {
}
break;
}

var G__25642 = args25640.length;
switch (G__25642) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25640.length)].join('')));

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
var len__17809__auto___25657 = arguments.length;
var i__17810__auto___25658 = (0);
while(true){
if((i__17810__auto___25658 < len__17809__auto___25657)){
args__17816__auto__.push((arguments[i__17810__auto___25658]));

var G__25659 = (i__17810__auto___25658 + (1));
i__17810__auto___25658 = G__25659;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25651){
var map__25652 = p__25651;
var map__25652__$1 = ((((!((map__25652 == null)))?((((map__25652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25652):map__25652);
var opts = map__25652__$1;
var statearr_25654_25660 = state;
(statearr_25654_25660[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25652,map__25652__$1,opts){
return (function (val){
var statearr_25655_25661 = state;
(statearr_25655_25661[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25652,map__25652__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25656_25662 = state;
(statearr_25656_25662[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25647){
var G__25648 = cljs.core.first.call(null,seq25647);
var seq25647__$1 = cljs.core.next.call(null,seq25647);
var G__25649 = cljs.core.first.call(null,seq25647__$1);
var seq25647__$2 = cljs.core.next.call(null,seq25647__$1);
var G__25650 = cljs.core.first.call(null,seq25647__$2);
var seq25647__$3 = cljs.core.next.call(null,seq25647__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25648,G__25649,G__25650,seq25647__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25826 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25827){
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
this.meta25827 = meta25827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25828,meta25827__$1){
var self__ = this;
var _25828__$1 = this;
return (new cljs.core.async.t_cljs$core$async25826(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25827__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25828){
var self__ = this;
var _25828__$1 = this;
return self__.meta25827;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25826.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25826.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25826.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25826.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25826.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25826.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25826.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25826.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25826.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25827","meta25827",1305556880,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25826";

cljs.core.async.t_cljs$core$async25826.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25826");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25826 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25826(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25827){
return (new cljs.core.async.t_cljs$core$async25826(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25827));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25826(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24276__auto___25989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___25989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___25989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25926){
var state_val_25927 = (state_25926[(1)]);
if((state_val_25927 === (7))){
var inst_25844 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
var statearr_25928_25990 = state_25926__$1;
(statearr_25928_25990[(2)] = inst_25844);

(statearr_25928_25990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (20))){
var inst_25856 = (state_25926[(7)]);
var state_25926__$1 = state_25926;
var statearr_25929_25991 = state_25926__$1;
(statearr_25929_25991[(2)] = inst_25856);

(statearr_25929_25991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (27))){
var state_25926__$1 = state_25926;
var statearr_25930_25992 = state_25926__$1;
(statearr_25930_25992[(2)] = null);

(statearr_25930_25992[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (1))){
var inst_25832 = (state_25926[(8)]);
var inst_25832__$1 = calc_state.call(null);
var inst_25834 = (inst_25832__$1 == null);
var inst_25835 = cljs.core.not.call(null,inst_25834);
var state_25926__$1 = (function (){var statearr_25931 = state_25926;
(statearr_25931[(8)] = inst_25832__$1);

return statearr_25931;
})();
if(inst_25835){
var statearr_25932_25993 = state_25926__$1;
(statearr_25932_25993[(1)] = (2));

} else {
var statearr_25933_25994 = state_25926__$1;
(statearr_25933_25994[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (24))){
var inst_25886 = (state_25926[(9)]);
var inst_25879 = (state_25926[(10)]);
var inst_25900 = (state_25926[(11)]);
var inst_25900__$1 = inst_25879.call(null,inst_25886);
var state_25926__$1 = (function (){var statearr_25934 = state_25926;
(statearr_25934[(11)] = inst_25900__$1);

return statearr_25934;
})();
if(cljs.core.truth_(inst_25900__$1)){
var statearr_25935_25995 = state_25926__$1;
(statearr_25935_25995[(1)] = (29));

} else {
var statearr_25936_25996 = state_25926__$1;
(statearr_25936_25996[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (4))){
var inst_25847 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
if(cljs.core.truth_(inst_25847)){
var statearr_25937_25997 = state_25926__$1;
(statearr_25937_25997[(1)] = (8));

} else {
var statearr_25938_25998 = state_25926__$1;
(statearr_25938_25998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (15))){
var inst_25873 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
if(cljs.core.truth_(inst_25873)){
var statearr_25939_25999 = state_25926__$1;
(statearr_25939_25999[(1)] = (19));

} else {
var statearr_25940_26000 = state_25926__$1;
(statearr_25940_26000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (21))){
var inst_25878 = (state_25926[(12)]);
var inst_25878__$1 = (state_25926[(2)]);
var inst_25879 = cljs.core.get.call(null,inst_25878__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25880 = cljs.core.get.call(null,inst_25878__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25881 = cljs.core.get.call(null,inst_25878__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25926__$1 = (function (){var statearr_25941 = state_25926;
(statearr_25941[(13)] = inst_25880);

(statearr_25941[(12)] = inst_25878__$1);

(statearr_25941[(10)] = inst_25879);

return statearr_25941;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25926__$1,(22),inst_25881);
} else {
if((state_val_25927 === (31))){
var inst_25908 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
if(cljs.core.truth_(inst_25908)){
var statearr_25942_26001 = state_25926__$1;
(statearr_25942_26001[(1)] = (32));

} else {
var statearr_25943_26002 = state_25926__$1;
(statearr_25943_26002[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (32))){
var inst_25885 = (state_25926[(14)]);
var state_25926__$1 = state_25926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25926__$1,(35),out,inst_25885);
} else {
if((state_val_25927 === (33))){
var inst_25878 = (state_25926[(12)]);
var inst_25856 = inst_25878;
var state_25926__$1 = (function (){var statearr_25944 = state_25926;
(statearr_25944[(7)] = inst_25856);

return statearr_25944;
})();
var statearr_25945_26003 = state_25926__$1;
(statearr_25945_26003[(2)] = null);

(statearr_25945_26003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (13))){
var inst_25856 = (state_25926[(7)]);
var inst_25863 = inst_25856.cljs$lang$protocol_mask$partition0$;
var inst_25864 = (inst_25863 & (64));
var inst_25865 = inst_25856.cljs$core$ISeq$;
var inst_25866 = (inst_25864) || (inst_25865);
var state_25926__$1 = state_25926;
if(cljs.core.truth_(inst_25866)){
var statearr_25946_26004 = state_25926__$1;
(statearr_25946_26004[(1)] = (16));

} else {
var statearr_25947_26005 = state_25926__$1;
(statearr_25947_26005[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (22))){
var inst_25886 = (state_25926[(9)]);
var inst_25885 = (state_25926[(14)]);
var inst_25884 = (state_25926[(2)]);
var inst_25885__$1 = cljs.core.nth.call(null,inst_25884,(0),null);
var inst_25886__$1 = cljs.core.nth.call(null,inst_25884,(1),null);
var inst_25887 = (inst_25885__$1 == null);
var inst_25888 = cljs.core._EQ_.call(null,inst_25886__$1,change);
var inst_25889 = (inst_25887) || (inst_25888);
var state_25926__$1 = (function (){var statearr_25948 = state_25926;
(statearr_25948[(9)] = inst_25886__$1);

(statearr_25948[(14)] = inst_25885__$1);

return statearr_25948;
})();
if(cljs.core.truth_(inst_25889)){
var statearr_25949_26006 = state_25926__$1;
(statearr_25949_26006[(1)] = (23));

} else {
var statearr_25950_26007 = state_25926__$1;
(statearr_25950_26007[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (36))){
var inst_25878 = (state_25926[(12)]);
var inst_25856 = inst_25878;
var state_25926__$1 = (function (){var statearr_25951 = state_25926;
(statearr_25951[(7)] = inst_25856);

return statearr_25951;
})();
var statearr_25952_26008 = state_25926__$1;
(statearr_25952_26008[(2)] = null);

(statearr_25952_26008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (29))){
var inst_25900 = (state_25926[(11)]);
var state_25926__$1 = state_25926;
var statearr_25953_26009 = state_25926__$1;
(statearr_25953_26009[(2)] = inst_25900);

(statearr_25953_26009[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (6))){
var state_25926__$1 = state_25926;
var statearr_25954_26010 = state_25926__$1;
(statearr_25954_26010[(2)] = false);

(statearr_25954_26010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (28))){
var inst_25896 = (state_25926[(2)]);
var inst_25897 = calc_state.call(null);
var inst_25856 = inst_25897;
var state_25926__$1 = (function (){var statearr_25955 = state_25926;
(statearr_25955[(15)] = inst_25896);

(statearr_25955[(7)] = inst_25856);

return statearr_25955;
})();
var statearr_25956_26011 = state_25926__$1;
(statearr_25956_26011[(2)] = null);

(statearr_25956_26011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (25))){
var inst_25922 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
var statearr_25957_26012 = state_25926__$1;
(statearr_25957_26012[(2)] = inst_25922);

(statearr_25957_26012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (34))){
var inst_25920 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
var statearr_25958_26013 = state_25926__$1;
(statearr_25958_26013[(2)] = inst_25920);

(statearr_25958_26013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (17))){
var state_25926__$1 = state_25926;
var statearr_25959_26014 = state_25926__$1;
(statearr_25959_26014[(2)] = false);

(statearr_25959_26014[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (3))){
var state_25926__$1 = state_25926;
var statearr_25960_26015 = state_25926__$1;
(statearr_25960_26015[(2)] = false);

(statearr_25960_26015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (12))){
var inst_25924 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25926__$1,inst_25924);
} else {
if((state_val_25927 === (2))){
var inst_25832 = (state_25926[(8)]);
var inst_25837 = inst_25832.cljs$lang$protocol_mask$partition0$;
var inst_25838 = (inst_25837 & (64));
var inst_25839 = inst_25832.cljs$core$ISeq$;
var inst_25840 = (inst_25838) || (inst_25839);
var state_25926__$1 = state_25926;
if(cljs.core.truth_(inst_25840)){
var statearr_25961_26016 = state_25926__$1;
(statearr_25961_26016[(1)] = (5));

} else {
var statearr_25962_26017 = state_25926__$1;
(statearr_25962_26017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (23))){
var inst_25885 = (state_25926[(14)]);
var inst_25891 = (inst_25885 == null);
var state_25926__$1 = state_25926;
if(cljs.core.truth_(inst_25891)){
var statearr_25963_26018 = state_25926__$1;
(statearr_25963_26018[(1)] = (26));

} else {
var statearr_25964_26019 = state_25926__$1;
(statearr_25964_26019[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (35))){
var inst_25911 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
if(cljs.core.truth_(inst_25911)){
var statearr_25965_26020 = state_25926__$1;
(statearr_25965_26020[(1)] = (36));

} else {
var statearr_25966_26021 = state_25926__$1;
(statearr_25966_26021[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (19))){
var inst_25856 = (state_25926[(7)]);
var inst_25875 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25856);
var state_25926__$1 = state_25926;
var statearr_25967_26022 = state_25926__$1;
(statearr_25967_26022[(2)] = inst_25875);

(statearr_25967_26022[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (11))){
var inst_25856 = (state_25926[(7)]);
var inst_25860 = (inst_25856 == null);
var inst_25861 = cljs.core.not.call(null,inst_25860);
var state_25926__$1 = state_25926;
if(inst_25861){
var statearr_25968_26023 = state_25926__$1;
(statearr_25968_26023[(1)] = (13));

} else {
var statearr_25969_26024 = state_25926__$1;
(statearr_25969_26024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (9))){
var inst_25832 = (state_25926[(8)]);
var state_25926__$1 = state_25926;
var statearr_25970_26025 = state_25926__$1;
(statearr_25970_26025[(2)] = inst_25832);

(statearr_25970_26025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (5))){
var state_25926__$1 = state_25926;
var statearr_25971_26026 = state_25926__$1;
(statearr_25971_26026[(2)] = true);

(statearr_25971_26026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (14))){
var state_25926__$1 = state_25926;
var statearr_25972_26027 = state_25926__$1;
(statearr_25972_26027[(2)] = false);

(statearr_25972_26027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (26))){
var inst_25886 = (state_25926[(9)]);
var inst_25893 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25886);
var state_25926__$1 = state_25926;
var statearr_25973_26028 = state_25926__$1;
(statearr_25973_26028[(2)] = inst_25893);

(statearr_25973_26028[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (16))){
var state_25926__$1 = state_25926;
var statearr_25974_26029 = state_25926__$1;
(statearr_25974_26029[(2)] = true);

(statearr_25974_26029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (38))){
var inst_25916 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
var statearr_25975_26030 = state_25926__$1;
(statearr_25975_26030[(2)] = inst_25916);

(statearr_25975_26030[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (30))){
var inst_25886 = (state_25926[(9)]);
var inst_25880 = (state_25926[(13)]);
var inst_25879 = (state_25926[(10)]);
var inst_25903 = cljs.core.empty_QMARK_.call(null,inst_25879);
var inst_25904 = inst_25880.call(null,inst_25886);
var inst_25905 = cljs.core.not.call(null,inst_25904);
var inst_25906 = (inst_25903) && (inst_25905);
var state_25926__$1 = state_25926;
var statearr_25976_26031 = state_25926__$1;
(statearr_25976_26031[(2)] = inst_25906);

(statearr_25976_26031[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (10))){
var inst_25832 = (state_25926[(8)]);
var inst_25852 = (state_25926[(2)]);
var inst_25853 = cljs.core.get.call(null,inst_25852,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25854 = cljs.core.get.call(null,inst_25852,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25855 = cljs.core.get.call(null,inst_25852,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25856 = inst_25832;
var state_25926__$1 = (function (){var statearr_25977 = state_25926;
(statearr_25977[(16)] = inst_25855);

(statearr_25977[(17)] = inst_25853);

(statearr_25977[(7)] = inst_25856);

(statearr_25977[(18)] = inst_25854);

return statearr_25977;
})();
var statearr_25978_26032 = state_25926__$1;
(statearr_25978_26032[(2)] = null);

(statearr_25978_26032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (18))){
var inst_25870 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
var statearr_25979_26033 = state_25926__$1;
(statearr_25979_26033[(2)] = inst_25870);

(statearr_25979_26033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (37))){
var state_25926__$1 = state_25926;
var statearr_25980_26034 = state_25926__$1;
(statearr_25980_26034[(2)] = null);

(statearr_25980_26034[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (8))){
var inst_25832 = (state_25926[(8)]);
var inst_25849 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25832);
var state_25926__$1 = state_25926;
var statearr_25981_26035 = state_25926__$1;
(statearr_25981_26035[(2)] = inst_25849);

(statearr_25981_26035[(1)] = (10));


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
});})(c__24276__auto___25989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24164__auto__,c__24276__auto___25989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24165__auto__ = null;
var cljs$core$async$mix_$_state_machine__24165__auto____0 = (function (){
var statearr_25985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25985[(0)] = cljs$core$async$mix_$_state_machine__24165__auto__);

(statearr_25985[(1)] = (1));

return statearr_25985;
});
var cljs$core$async$mix_$_state_machine__24165__auto____1 = (function (state_25926){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_25926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e25986){if((e25986 instanceof Object)){
var ex__24168__auto__ = e25986;
var statearr_25987_26036 = state_25926;
(statearr_25987_26036[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26037 = state_25926;
state_25926 = G__26037;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24165__auto__ = function(state_25926){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24165__auto____1.call(this,state_25926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24165__auto____0;
cljs$core$async$mix_$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24165__auto____1;
return cljs$core$async$mix_$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___25989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24278__auto__ = (function (){var statearr_25988 = f__24277__auto__.call(null);
(statearr_25988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___25989);

return statearr_25988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___25989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26038 = [];
var len__17809__auto___26041 = arguments.length;
var i__17810__auto___26042 = (0);
while(true){
if((i__17810__auto___26042 < len__17809__auto___26041)){
args26038.push((arguments[i__17810__auto___26042]));

var G__26043 = (i__17810__auto___26042 + (1));
i__17810__auto___26042 = G__26043;
continue;
} else {
}
break;
}

var G__26040 = args26038.length;
switch (G__26040) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26038.length)].join('')));

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
var args26046 = [];
var len__17809__auto___26171 = arguments.length;
var i__17810__auto___26172 = (0);
while(true){
if((i__17810__auto___26172 < len__17809__auto___26171)){
args26046.push((arguments[i__17810__auto___26172]));

var G__26173 = (i__17810__auto___26172 + (1));
i__17810__auto___26172 = G__26173;
continue;
} else {
}
break;
}

var G__26048 = args26046.length;
switch (G__26048) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26046.length)].join('')));

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
return (function (p1__26045_SHARP_){
if(cljs.core.truth_(p1__26045_SHARP_.call(null,topic))){
return p1__26045_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26045_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26049 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26050){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26050 = meta26050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26051,meta26050__$1){
var self__ = this;
var _26051__$1 = this;
return (new cljs.core.async.t_cljs$core$async26049(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26050__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26051){
var self__ = this;
var _26051__$1 = this;
return self__.meta26050;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26049.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26050","meta26050",-1813340745,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26049";

cljs.core.async.t_cljs$core$async26049.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26049");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26049 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26049(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26050){
return (new cljs.core.async.t_cljs$core$async26049(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26050));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26049(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24276__auto___26175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___26175,mults,ensure_mult,p){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___26175,mults,ensure_mult,p){
return (function (state_26123){
var state_val_26124 = (state_26123[(1)]);
if((state_val_26124 === (7))){
var inst_26119 = (state_26123[(2)]);
var state_26123__$1 = state_26123;
var statearr_26125_26176 = state_26123__$1;
(statearr_26125_26176[(2)] = inst_26119);

(statearr_26125_26176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (20))){
var state_26123__$1 = state_26123;
var statearr_26126_26177 = state_26123__$1;
(statearr_26126_26177[(2)] = null);

(statearr_26126_26177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (1))){
var state_26123__$1 = state_26123;
var statearr_26127_26178 = state_26123__$1;
(statearr_26127_26178[(2)] = null);

(statearr_26127_26178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (24))){
var inst_26102 = (state_26123[(7)]);
var inst_26111 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26102);
var state_26123__$1 = state_26123;
var statearr_26128_26179 = state_26123__$1;
(statearr_26128_26179[(2)] = inst_26111);

(statearr_26128_26179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (4))){
var inst_26054 = (state_26123[(8)]);
var inst_26054__$1 = (state_26123[(2)]);
var inst_26055 = (inst_26054__$1 == null);
var state_26123__$1 = (function (){var statearr_26129 = state_26123;
(statearr_26129[(8)] = inst_26054__$1);

return statearr_26129;
})();
if(cljs.core.truth_(inst_26055)){
var statearr_26130_26180 = state_26123__$1;
(statearr_26130_26180[(1)] = (5));

} else {
var statearr_26131_26181 = state_26123__$1;
(statearr_26131_26181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (15))){
var inst_26096 = (state_26123[(2)]);
var state_26123__$1 = state_26123;
var statearr_26132_26182 = state_26123__$1;
(statearr_26132_26182[(2)] = inst_26096);

(statearr_26132_26182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (21))){
var inst_26116 = (state_26123[(2)]);
var state_26123__$1 = (function (){var statearr_26133 = state_26123;
(statearr_26133[(9)] = inst_26116);

return statearr_26133;
})();
var statearr_26134_26183 = state_26123__$1;
(statearr_26134_26183[(2)] = null);

(statearr_26134_26183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (13))){
var inst_26078 = (state_26123[(10)]);
var inst_26080 = cljs.core.chunked_seq_QMARK_.call(null,inst_26078);
var state_26123__$1 = state_26123;
if(inst_26080){
var statearr_26135_26184 = state_26123__$1;
(statearr_26135_26184[(1)] = (16));

} else {
var statearr_26136_26185 = state_26123__$1;
(statearr_26136_26185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (22))){
var inst_26108 = (state_26123[(2)]);
var state_26123__$1 = state_26123;
if(cljs.core.truth_(inst_26108)){
var statearr_26137_26186 = state_26123__$1;
(statearr_26137_26186[(1)] = (23));

} else {
var statearr_26138_26187 = state_26123__$1;
(statearr_26138_26187[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (6))){
var inst_26054 = (state_26123[(8)]);
var inst_26104 = (state_26123[(11)]);
var inst_26102 = (state_26123[(7)]);
var inst_26102__$1 = topic_fn.call(null,inst_26054);
var inst_26103 = cljs.core.deref.call(null,mults);
var inst_26104__$1 = cljs.core.get.call(null,inst_26103,inst_26102__$1);
var state_26123__$1 = (function (){var statearr_26139 = state_26123;
(statearr_26139[(11)] = inst_26104__$1);

(statearr_26139[(7)] = inst_26102__$1);

return statearr_26139;
})();
if(cljs.core.truth_(inst_26104__$1)){
var statearr_26140_26188 = state_26123__$1;
(statearr_26140_26188[(1)] = (19));

} else {
var statearr_26141_26189 = state_26123__$1;
(statearr_26141_26189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (25))){
var inst_26113 = (state_26123[(2)]);
var state_26123__$1 = state_26123;
var statearr_26142_26190 = state_26123__$1;
(statearr_26142_26190[(2)] = inst_26113);

(statearr_26142_26190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (17))){
var inst_26078 = (state_26123[(10)]);
var inst_26087 = cljs.core.first.call(null,inst_26078);
var inst_26088 = cljs.core.async.muxch_STAR_.call(null,inst_26087);
var inst_26089 = cljs.core.async.close_BANG_.call(null,inst_26088);
var inst_26090 = cljs.core.next.call(null,inst_26078);
var inst_26064 = inst_26090;
var inst_26065 = null;
var inst_26066 = (0);
var inst_26067 = (0);
var state_26123__$1 = (function (){var statearr_26143 = state_26123;
(statearr_26143[(12)] = inst_26066);

(statearr_26143[(13)] = inst_26067);

(statearr_26143[(14)] = inst_26089);

(statearr_26143[(15)] = inst_26065);

(statearr_26143[(16)] = inst_26064);

return statearr_26143;
})();
var statearr_26144_26191 = state_26123__$1;
(statearr_26144_26191[(2)] = null);

(statearr_26144_26191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (3))){
var inst_26121 = (state_26123[(2)]);
var state_26123__$1 = state_26123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26123__$1,inst_26121);
} else {
if((state_val_26124 === (12))){
var inst_26098 = (state_26123[(2)]);
var state_26123__$1 = state_26123;
var statearr_26145_26192 = state_26123__$1;
(statearr_26145_26192[(2)] = inst_26098);

(statearr_26145_26192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (2))){
var state_26123__$1 = state_26123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26123__$1,(4),ch);
} else {
if((state_val_26124 === (23))){
var state_26123__$1 = state_26123;
var statearr_26146_26193 = state_26123__$1;
(statearr_26146_26193[(2)] = null);

(statearr_26146_26193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (19))){
var inst_26054 = (state_26123[(8)]);
var inst_26104 = (state_26123[(11)]);
var inst_26106 = cljs.core.async.muxch_STAR_.call(null,inst_26104);
var state_26123__$1 = state_26123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26123__$1,(22),inst_26106,inst_26054);
} else {
if((state_val_26124 === (11))){
var inst_26078 = (state_26123[(10)]);
var inst_26064 = (state_26123[(16)]);
var inst_26078__$1 = cljs.core.seq.call(null,inst_26064);
var state_26123__$1 = (function (){var statearr_26147 = state_26123;
(statearr_26147[(10)] = inst_26078__$1);

return statearr_26147;
})();
if(inst_26078__$1){
var statearr_26148_26194 = state_26123__$1;
(statearr_26148_26194[(1)] = (13));

} else {
var statearr_26149_26195 = state_26123__$1;
(statearr_26149_26195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (9))){
var inst_26100 = (state_26123[(2)]);
var state_26123__$1 = state_26123;
var statearr_26150_26196 = state_26123__$1;
(statearr_26150_26196[(2)] = inst_26100);

(statearr_26150_26196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (5))){
var inst_26061 = cljs.core.deref.call(null,mults);
var inst_26062 = cljs.core.vals.call(null,inst_26061);
var inst_26063 = cljs.core.seq.call(null,inst_26062);
var inst_26064 = inst_26063;
var inst_26065 = null;
var inst_26066 = (0);
var inst_26067 = (0);
var state_26123__$1 = (function (){var statearr_26151 = state_26123;
(statearr_26151[(12)] = inst_26066);

(statearr_26151[(13)] = inst_26067);

(statearr_26151[(15)] = inst_26065);

(statearr_26151[(16)] = inst_26064);

return statearr_26151;
})();
var statearr_26152_26197 = state_26123__$1;
(statearr_26152_26197[(2)] = null);

(statearr_26152_26197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (14))){
var state_26123__$1 = state_26123;
var statearr_26156_26198 = state_26123__$1;
(statearr_26156_26198[(2)] = null);

(statearr_26156_26198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (16))){
var inst_26078 = (state_26123[(10)]);
var inst_26082 = cljs.core.chunk_first.call(null,inst_26078);
var inst_26083 = cljs.core.chunk_rest.call(null,inst_26078);
var inst_26084 = cljs.core.count.call(null,inst_26082);
var inst_26064 = inst_26083;
var inst_26065 = inst_26082;
var inst_26066 = inst_26084;
var inst_26067 = (0);
var state_26123__$1 = (function (){var statearr_26157 = state_26123;
(statearr_26157[(12)] = inst_26066);

(statearr_26157[(13)] = inst_26067);

(statearr_26157[(15)] = inst_26065);

(statearr_26157[(16)] = inst_26064);

return statearr_26157;
})();
var statearr_26158_26199 = state_26123__$1;
(statearr_26158_26199[(2)] = null);

(statearr_26158_26199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (10))){
var inst_26066 = (state_26123[(12)]);
var inst_26067 = (state_26123[(13)]);
var inst_26065 = (state_26123[(15)]);
var inst_26064 = (state_26123[(16)]);
var inst_26072 = cljs.core._nth.call(null,inst_26065,inst_26067);
var inst_26073 = cljs.core.async.muxch_STAR_.call(null,inst_26072);
var inst_26074 = cljs.core.async.close_BANG_.call(null,inst_26073);
var inst_26075 = (inst_26067 + (1));
var tmp26153 = inst_26066;
var tmp26154 = inst_26065;
var tmp26155 = inst_26064;
var inst_26064__$1 = tmp26155;
var inst_26065__$1 = tmp26154;
var inst_26066__$1 = tmp26153;
var inst_26067__$1 = inst_26075;
var state_26123__$1 = (function (){var statearr_26159 = state_26123;
(statearr_26159[(12)] = inst_26066__$1);

(statearr_26159[(13)] = inst_26067__$1);

(statearr_26159[(15)] = inst_26065__$1);

(statearr_26159[(17)] = inst_26074);

(statearr_26159[(16)] = inst_26064__$1);

return statearr_26159;
})();
var statearr_26160_26200 = state_26123__$1;
(statearr_26160_26200[(2)] = null);

(statearr_26160_26200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (18))){
var inst_26093 = (state_26123[(2)]);
var state_26123__$1 = state_26123;
var statearr_26161_26201 = state_26123__$1;
(statearr_26161_26201[(2)] = inst_26093);

(statearr_26161_26201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (8))){
var inst_26066 = (state_26123[(12)]);
var inst_26067 = (state_26123[(13)]);
var inst_26069 = (inst_26067 < inst_26066);
var inst_26070 = inst_26069;
var state_26123__$1 = state_26123;
if(cljs.core.truth_(inst_26070)){
var statearr_26162_26202 = state_26123__$1;
(statearr_26162_26202[(1)] = (10));

} else {
var statearr_26163_26203 = state_26123__$1;
(statearr_26163_26203[(1)] = (11));

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
});})(c__24276__auto___26175,mults,ensure_mult,p))
;
return ((function (switch__24164__auto__,c__24276__auto___26175,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24165__auto__ = null;
var cljs$core$async$state_machine__24165__auto____0 = (function (){
var statearr_26167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26167[(0)] = cljs$core$async$state_machine__24165__auto__);

(statearr_26167[(1)] = (1));

return statearr_26167;
});
var cljs$core$async$state_machine__24165__auto____1 = (function (state_26123){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_26123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e26168){if((e26168 instanceof Object)){
var ex__24168__auto__ = e26168;
var statearr_26169_26204 = state_26123;
(statearr_26169_26204[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26205 = state_26123;
state_26123 = G__26205;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$state_machine__24165__auto__ = function(state_26123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24165__auto____1.call(this,state_26123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24165__auto____0;
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24165__auto____1;
return cljs$core$async$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___26175,mults,ensure_mult,p))
})();
var state__24278__auto__ = (function (){var statearr_26170 = f__24277__auto__.call(null);
(statearr_26170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___26175);

return statearr_26170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___26175,mults,ensure_mult,p))
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
var args26206 = [];
var len__17809__auto___26209 = arguments.length;
var i__17810__auto___26210 = (0);
while(true){
if((i__17810__auto___26210 < len__17809__auto___26209)){
args26206.push((arguments[i__17810__auto___26210]));

var G__26211 = (i__17810__auto___26210 + (1));
i__17810__auto___26210 = G__26211;
continue;
} else {
}
break;
}

var G__26208 = args26206.length;
switch (G__26208) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26206.length)].join('')));

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
var args26213 = [];
var len__17809__auto___26216 = arguments.length;
var i__17810__auto___26217 = (0);
while(true){
if((i__17810__auto___26217 < len__17809__auto___26216)){
args26213.push((arguments[i__17810__auto___26217]));

var G__26218 = (i__17810__auto___26217 + (1));
i__17810__auto___26217 = G__26218;
continue;
} else {
}
break;
}

var G__26215 = args26213.length;
switch (G__26215) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26213.length)].join('')));

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
var args26220 = [];
var len__17809__auto___26291 = arguments.length;
var i__17810__auto___26292 = (0);
while(true){
if((i__17810__auto___26292 < len__17809__auto___26291)){
args26220.push((arguments[i__17810__auto___26292]));

var G__26293 = (i__17810__auto___26292 + (1));
i__17810__auto___26292 = G__26293;
continue;
} else {
}
break;
}

var G__26222 = args26220.length;
switch (G__26222) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26220.length)].join('')));

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
var c__24276__auto___26295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___26295,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___26295,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26261){
var state_val_26262 = (state_26261[(1)]);
if((state_val_26262 === (7))){
var state_26261__$1 = state_26261;
var statearr_26263_26296 = state_26261__$1;
(statearr_26263_26296[(2)] = null);

(statearr_26263_26296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (1))){
var state_26261__$1 = state_26261;
var statearr_26264_26297 = state_26261__$1;
(statearr_26264_26297[(2)] = null);

(statearr_26264_26297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (4))){
var inst_26225 = (state_26261[(7)]);
var inst_26227 = (inst_26225 < cnt);
var state_26261__$1 = state_26261;
if(cljs.core.truth_(inst_26227)){
var statearr_26265_26298 = state_26261__$1;
(statearr_26265_26298[(1)] = (6));

} else {
var statearr_26266_26299 = state_26261__$1;
(statearr_26266_26299[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (15))){
var inst_26257 = (state_26261[(2)]);
var state_26261__$1 = state_26261;
var statearr_26267_26300 = state_26261__$1;
(statearr_26267_26300[(2)] = inst_26257);

(statearr_26267_26300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (13))){
var inst_26250 = cljs.core.async.close_BANG_.call(null,out);
var state_26261__$1 = state_26261;
var statearr_26268_26301 = state_26261__$1;
(statearr_26268_26301[(2)] = inst_26250);

(statearr_26268_26301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (6))){
var state_26261__$1 = state_26261;
var statearr_26269_26302 = state_26261__$1;
(statearr_26269_26302[(2)] = null);

(statearr_26269_26302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (3))){
var inst_26259 = (state_26261[(2)]);
var state_26261__$1 = state_26261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26261__$1,inst_26259);
} else {
if((state_val_26262 === (12))){
var inst_26247 = (state_26261[(8)]);
var inst_26247__$1 = (state_26261[(2)]);
var inst_26248 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26247__$1);
var state_26261__$1 = (function (){var statearr_26270 = state_26261;
(statearr_26270[(8)] = inst_26247__$1);

return statearr_26270;
})();
if(cljs.core.truth_(inst_26248)){
var statearr_26271_26303 = state_26261__$1;
(statearr_26271_26303[(1)] = (13));

} else {
var statearr_26272_26304 = state_26261__$1;
(statearr_26272_26304[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (2))){
var inst_26224 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26225 = (0);
var state_26261__$1 = (function (){var statearr_26273 = state_26261;
(statearr_26273[(7)] = inst_26225);

(statearr_26273[(9)] = inst_26224);

return statearr_26273;
})();
var statearr_26274_26305 = state_26261__$1;
(statearr_26274_26305[(2)] = null);

(statearr_26274_26305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (11))){
var inst_26225 = (state_26261[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26261,(10),Object,null,(9));
var inst_26234 = chs__$1.call(null,inst_26225);
var inst_26235 = done.call(null,inst_26225);
var inst_26236 = cljs.core.async.take_BANG_.call(null,inst_26234,inst_26235);
var state_26261__$1 = state_26261;
var statearr_26275_26306 = state_26261__$1;
(statearr_26275_26306[(2)] = inst_26236);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26261__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (9))){
var inst_26225 = (state_26261[(7)]);
var inst_26238 = (state_26261[(2)]);
var inst_26239 = (inst_26225 + (1));
var inst_26225__$1 = inst_26239;
var state_26261__$1 = (function (){var statearr_26276 = state_26261;
(statearr_26276[(10)] = inst_26238);

(statearr_26276[(7)] = inst_26225__$1);

return statearr_26276;
})();
var statearr_26277_26307 = state_26261__$1;
(statearr_26277_26307[(2)] = null);

(statearr_26277_26307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (5))){
var inst_26245 = (state_26261[(2)]);
var state_26261__$1 = (function (){var statearr_26278 = state_26261;
(statearr_26278[(11)] = inst_26245);

return statearr_26278;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26261__$1,(12),dchan);
} else {
if((state_val_26262 === (14))){
var inst_26247 = (state_26261[(8)]);
var inst_26252 = cljs.core.apply.call(null,f,inst_26247);
var state_26261__$1 = state_26261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26261__$1,(16),out,inst_26252);
} else {
if((state_val_26262 === (16))){
var inst_26254 = (state_26261[(2)]);
var state_26261__$1 = (function (){var statearr_26279 = state_26261;
(statearr_26279[(12)] = inst_26254);

return statearr_26279;
})();
var statearr_26280_26308 = state_26261__$1;
(statearr_26280_26308[(2)] = null);

(statearr_26280_26308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (10))){
var inst_26229 = (state_26261[(2)]);
var inst_26230 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26261__$1 = (function (){var statearr_26281 = state_26261;
(statearr_26281[(13)] = inst_26229);

return statearr_26281;
})();
var statearr_26282_26309 = state_26261__$1;
(statearr_26282_26309[(2)] = inst_26230);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26261__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (8))){
var inst_26243 = (state_26261[(2)]);
var state_26261__$1 = state_26261;
var statearr_26283_26310 = state_26261__$1;
(statearr_26283_26310[(2)] = inst_26243);

(statearr_26283_26310[(1)] = (5));


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
});})(c__24276__auto___26295,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24164__auto__,c__24276__auto___26295,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24165__auto__ = null;
var cljs$core$async$state_machine__24165__auto____0 = (function (){
var statearr_26287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26287[(0)] = cljs$core$async$state_machine__24165__auto__);

(statearr_26287[(1)] = (1));

return statearr_26287;
});
var cljs$core$async$state_machine__24165__auto____1 = (function (state_26261){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_26261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e26288){if((e26288 instanceof Object)){
var ex__24168__auto__ = e26288;
var statearr_26289_26311 = state_26261;
(statearr_26289_26311[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26312 = state_26261;
state_26261 = G__26312;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$state_machine__24165__auto__ = function(state_26261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24165__auto____1.call(this,state_26261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24165__auto____0;
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24165__auto____1;
return cljs$core$async$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___26295,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24278__auto__ = (function (){var statearr_26290 = f__24277__auto__.call(null);
(statearr_26290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___26295);

return statearr_26290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___26295,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26314 = [];
var len__17809__auto___26370 = arguments.length;
var i__17810__auto___26371 = (0);
while(true){
if((i__17810__auto___26371 < len__17809__auto___26370)){
args26314.push((arguments[i__17810__auto___26371]));

var G__26372 = (i__17810__auto___26371 + (1));
i__17810__auto___26371 = G__26372;
continue;
} else {
}
break;
}

var G__26316 = args26314.length;
switch (G__26316) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26314.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24276__auto___26374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___26374,out){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___26374,out){
return (function (state_26346){
var state_val_26347 = (state_26346[(1)]);
if((state_val_26347 === (7))){
var inst_26326 = (state_26346[(7)]);
var inst_26325 = (state_26346[(8)]);
var inst_26325__$1 = (state_26346[(2)]);
var inst_26326__$1 = cljs.core.nth.call(null,inst_26325__$1,(0),null);
var inst_26327 = cljs.core.nth.call(null,inst_26325__$1,(1),null);
var inst_26328 = (inst_26326__$1 == null);
var state_26346__$1 = (function (){var statearr_26348 = state_26346;
(statearr_26348[(9)] = inst_26327);

(statearr_26348[(7)] = inst_26326__$1);

(statearr_26348[(8)] = inst_26325__$1);

return statearr_26348;
})();
if(cljs.core.truth_(inst_26328)){
var statearr_26349_26375 = state_26346__$1;
(statearr_26349_26375[(1)] = (8));

} else {
var statearr_26350_26376 = state_26346__$1;
(statearr_26350_26376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (1))){
var inst_26317 = cljs.core.vec.call(null,chs);
var inst_26318 = inst_26317;
var state_26346__$1 = (function (){var statearr_26351 = state_26346;
(statearr_26351[(10)] = inst_26318);

return statearr_26351;
})();
var statearr_26352_26377 = state_26346__$1;
(statearr_26352_26377[(2)] = null);

(statearr_26352_26377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (4))){
var inst_26318 = (state_26346[(10)]);
var state_26346__$1 = state_26346;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26346__$1,(7),inst_26318);
} else {
if((state_val_26347 === (6))){
var inst_26342 = (state_26346[(2)]);
var state_26346__$1 = state_26346;
var statearr_26353_26378 = state_26346__$1;
(statearr_26353_26378[(2)] = inst_26342);

(statearr_26353_26378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (3))){
var inst_26344 = (state_26346[(2)]);
var state_26346__$1 = state_26346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26346__$1,inst_26344);
} else {
if((state_val_26347 === (2))){
var inst_26318 = (state_26346[(10)]);
var inst_26320 = cljs.core.count.call(null,inst_26318);
var inst_26321 = (inst_26320 > (0));
var state_26346__$1 = state_26346;
if(cljs.core.truth_(inst_26321)){
var statearr_26355_26379 = state_26346__$1;
(statearr_26355_26379[(1)] = (4));

} else {
var statearr_26356_26380 = state_26346__$1;
(statearr_26356_26380[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (11))){
var inst_26318 = (state_26346[(10)]);
var inst_26335 = (state_26346[(2)]);
var tmp26354 = inst_26318;
var inst_26318__$1 = tmp26354;
var state_26346__$1 = (function (){var statearr_26357 = state_26346;
(statearr_26357[(10)] = inst_26318__$1);

(statearr_26357[(11)] = inst_26335);

return statearr_26357;
})();
var statearr_26358_26381 = state_26346__$1;
(statearr_26358_26381[(2)] = null);

(statearr_26358_26381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (9))){
var inst_26326 = (state_26346[(7)]);
var state_26346__$1 = state_26346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26346__$1,(11),out,inst_26326);
} else {
if((state_val_26347 === (5))){
var inst_26340 = cljs.core.async.close_BANG_.call(null,out);
var state_26346__$1 = state_26346;
var statearr_26359_26382 = state_26346__$1;
(statearr_26359_26382[(2)] = inst_26340);

(statearr_26359_26382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (10))){
var inst_26338 = (state_26346[(2)]);
var state_26346__$1 = state_26346;
var statearr_26360_26383 = state_26346__$1;
(statearr_26360_26383[(2)] = inst_26338);

(statearr_26360_26383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (8))){
var inst_26327 = (state_26346[(9)]);
var inst_26318 = (state_26346[(10)]);
var inst_26326 = (state_26346[(7)]);
var inst_26325 = (state_26346[(8)]);
var inst_26330 = (function (){var cs = inst_26318;
var vec__26323 = inst_26325;
var v = inst_26326;
var c = inst_26327;
return ((function (cs,vec__26323,v,c,inst_26327,inst_26318,inst_26326,inst_26325,state_val_26347,c__24276__auto___26374,out){
return (function (p1__26313_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26313_SHARP_);
});
;})(cs,vec__26323,v,c,inst_26327,inst_26318,inst_26326,inst_26325,state_val_26347,c__24276__auto___26374,out))
})();
var inst_26331 = cljs.core.filterv.call(null,inst_26330,inst_26318);
var inst_26318__$1 = inst_26331;
var state_26346__$1 = (function (){var statearr_26361 = state_26346;
(statearr_26361[(10)] = inst_26318__$1);

return statearr_26361;
})();
var statearr_26362_26384 = state_26346__$1;
(statearr_26362_26384[(2)] = null);

(statearr_26362_26384[(1)] = (2));


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
});})(c__24276__auto___26374,out))
;
return ((function (switch__24164__auto__,c__24276__auto___26374,out){
return (function() {
var cljs$core$async$state_machine__24165__auto__ = null;
var cljs$core$async$state_machine__24165__auto____0 = (function (){
var statearr_26366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26366[(0)] = cljs$core$async$state_machine__24165__auto__);

(statearr_26366[(1)] = (1));

return statearr_26366;
});
var cljs$core$async$state_machine__24165__auto____1 = (function (state_26346){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_26346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e26367){if((e26367 instanceof Object)){
var ex__24168__auto__ = e26367;
var statearr_26368_26385 = state_26346;
(statearr_26368_26385[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26386 = state_26346;
state_26346 = G__26386;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$state_machine__24165__auto__ = function(state_26346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24165__auto____1.call(this,state_26346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24165__auto____0;
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24165__auto____1;
return cljs$core$async$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___26374,out))
})();
var state__24278__auto__ = (function (){var statearr_26369 = f__24277__auto__.call(null);
(statearr_26369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___26374);

return statearr_26369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___26374,out))
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
var args26387 = [];
var len__17809__auto___26436 = arguments.length;
var i__17810__auto___26437 = (0);
while(true){
if((i__17810__auto___26437 < len__17809__auto___26436)){
args26387.push((arguments[i__17810__auto___26437]));

var G__26438 = (i__17810__auto___26437 + (1));
i__17810__auto___26437 = G__26438;
continue;
} else {
}
break;
}

var G__26389 = args26387.length;
switch (G__26389) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26387.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24276__auto___26440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___26440,out){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___26440,out){
return (function (state_26413){
var state_val_26414 = (state_26413[(1)]);
if((state_val_26414 === (7))){
var inst_26395 = (state_26413[(7)]);
var inst_26395__$1 = (state_26413[(2)]);
var inst_26396 = (inst_26395__$1 == null);
var inst_26397 = cljs.core.not.call(null,inst_26396);
var state_26413__$1 = (function (){var statearr_26415 = state_26413;
(statearr_26415[(7)] = inst_26395__$1);

return statearr_26415;
})();
if(inst_26397){
var statearr_26416_26441 = state_26413__$1;
(statearr_26416_26441[(1)] = (8));

} else {
var statearr_26417_26442 = state_26413__$1;
(statearr_26417_26442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26414 === (1))){
var inst_26390 = (0);
var state_26413__$1 = (function (){var statearr_26418 = state_26413;
(statearr_26418[(8)] = inst_26390);

return statearr_26418;
})();
var statearr_26419_26443 = state_26413__$1;
(statearr_26419_26443[(2)] = null);

(statearr_26419_26443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26414 === (4))){
var state_26413__$1 = state_26413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26413__$1,(7),ch);
} else {
if((state_val_26414 === (6))){
var inst_26408 = (state_26413[(2)]);
var state_26413__$1 = state_26413;
var statearr_26420_26444 = state_26413__$1;
(statearr_26420_26444[(2)] = inst_26408);

(statearr_26420_26444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26414 === (3))){
var inst_26410 = (state_26413[(2)]);
var inst_26411 = cljs.core.async.close_BANG_.call(null,out);
var state_26413__$1 = (function (){var statearr_26421 = state_26413;
(statearr_26421[(9)] = inst_26410);

return statearr_26421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26413__$1,inst_26411);
} else {
if((state_val_26414 === (2))){
var inst_26390 = (state_26413[(8)]);
var inst_26392 = (inst_26390 < n);
var state_26413__$1 = state_26413;
if(cljs.core.truth_(inst_26392)){
var statearr_26422_26445 = state_26413__$1;
(statearr_26422_26445[(1)] = (4));

} else {
var statearr_26423_26446 = state_26413__$1;
(statearr_26423_26446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26414 === (11))){
var inst_26390 = (state_26413[(8)]);
var inst_26400 = (state_26413[(2)]);
var inst_26401 = (inst_26390 + (1));
var inst_26390__$1 = inst_26401;
var state_26413__$1 = (function (){var statearr_26424 = state_26413;
(statearr_26424[(8)] = inst_26390__$1);

(statearr_26424[(10)] = inst_26400);

return statearr_26424;
})();
var statearr_26425_26447 = state_26413__$1;
(statearr_26425_26447[(2)] = null);

(statearr_26425_26447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26414 === (9))){
var state_26413__$1 = state_26413;
var statearr_26426_26448 = state_26413__$1;
(statearr_26426_26448[(2)] = null);

(statearr_26426_26448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26414 === (5))){
var state_26413__$1 = state_26413;
var statearr_26427_26449 = state_26413__$1;
(statearr_26427_26449[(2)] = null);

(statearr_26427_26449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26414 === (10))){
var inst_26405 = (state_26413[(2)]);
var state_26413__$1 = state_26413;
var statearr_26428_26450 = state_26413__$1;
(statearr_26428_26450[(2)] = inst_26405);

(statearr_26428_26450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26414 === (8))){
var inst_26395 = (state_26413[(7)]);
var state_26413__$1 = state_26413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26413__$1,(11),out,inst_26395);
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
});})(c__24276__auto___26440,out))
;
return ((function (switch__24164__auto__,c__24276__auto___26440,out){
return (function() {
var cljs$core$async$state_machine__24165__auto__ = null;
var cljs$core$async$state_machine__24165__auto____0 = (function (){
var statearr_26432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26432[(0)] = cljs$core$async$state_machine__24165__auto__);

(statearr_26432[(1)] = (1));

return statearr_26432;
});
var cljs$core$async$state_machine__24165__auto____1 = (function (state_26413){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_26413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e26433){if((e26433 instanceof Object)){
var ex__24168__auto__ = e26433;
var statearr_26434_26451 = state_26413;
(statearr_26434_26451[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26452 = state_26413;
state_26413 = G__26452;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$state_machine__24165__auto__ = function(state_26413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24165__auto____1.call(this,state_26413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24165__auto____0;
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24165__auto____1;
return cljs$core$async$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___26440,out))
})();
var state__24278__auto__ = (function (){var statearr_26435 = f__24277__auto__.call(null);
(statearr_26435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___26440);

return statearr_26435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___26440,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26460 = (function (map_LT_,f,ch,meta26461){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26461 = meta26461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26462,meta26461__$1){
var self__ = this;
var _26462__$1 = this;
return (new cljs.core.async.t_cljs$core$async26460(self__.map_LT_,self__.f,self__.ch,meta26461__$1));
});

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26462){
var self__ = this;
var _26462__$1 = this;
return self__.meta26461;
});

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26463 = (function (map_LT_,f,ch,meta26461,_,fn1,meta26464){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26461 = meta26461;
this._ = _;
this.fn1 = fn1;
this.meta26464 = meta26464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26465,meta26464__$1){
var self__ = this;
var _26465__$1 = this;
return (new cljs.core.async.t_cljs$core$async26463(self__.map_LT_,self__.f,self__.ch,self__.meta26461,self__._,self__.fn1,meta26464__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26465){
var self__ = this;
var _26465__$1 = this;
return self__.meta26464;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26463.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26453_SHARP_){
return f1.call(null,(((p1__26453_SHARP_ == null))?null:self__.f.call(null,p1__26453_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26463.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26461","meta26461",1919319078,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26460","cljs.core.async/t_cljs$core$async26460",-2048407565,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26464","meta26464",2094440861,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26463";

cljs.core.async.t_cljs$core$async26463.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26463");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26463 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26463(map_LT___$1,f__$1,ch__$1,meta26461__$1,___$2,fn1__$1,meta26464){
return (new cljs.core.async.t_cljs$core$async26463(map_LT___$1,f__$1,ch__$1,meta26461__$1,___$2,fn1__$1,meta26464));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26463(self__.map_LT_,self__.f,self__.ch,self__.meta26461,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26461","meta26461",1919319078,null)], null);
});

cljs.core.async.t_cljs$core$async26460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26460";

cljs.core.async.t_cljs$core$async26460.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26460");
});

cljs.core.async.__GT_t_cljs$core$async26460 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26460(map_LT___$1,f__$1,ch__$1,meta26461){
return (new cljs.core.async.t_cljs$core$async26460(map_LT___$1,f__$1,ch__$1,meta26461));
});

}

return (new cljs.core.async.t_cljs$core$async26460(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26469 = (function (map_GT_,f,ch,meta26470){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26470 = meta26470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26471,meta26470__$1){
var self__ = this;
var _26471__$1 = this;
return (new cljs.core.async.t_cljs$core$async26469(self__.map_GT_,self__.f,self__.ch,meta26470__$1));
});

cljs.core.async.t_cljs$core$async26469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26471){
var self__ = this;
var _26471__$1 = this;
return self__.meta26470;
});

cljs.core.async.t_cljs$core$async26469.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26469.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26469.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26470","meta26470",813251281,null)], null);
});

cljs.core.async.t_cljs$core$async26469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26469";

cljs.core.async.t_cljs$core$async26469.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26469");
});

cljs.core.async.__GT_t_cljs$core$async26469 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26469(map_GT___$1,f__$1,ch__$1,meta26470){
return (new cljs.core.async.t_cljs$core$async26469(map_GT___$1,f__$1,ch__$1,meta26470));
});

}

return (new cljs.core.async.t_cljs$core$async26469(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26475 = (function (filter_GT_,p,ch,meta26476){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26476 = meta26476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26477,meta26476__$1){
var self__ = this;
var _26477__$1 = this;
return (new cljs.core.async.t_cljs$core$async26475(self__.filter_GT_,self__.p,self__.ch,meta26476__$1));
});

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26477){
var self__ = this;
var _26477__$1 = this;
return self__.meta26476;
});

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26476","meta26476",-1361506077,null)], null);
});

cljs.core.async.t_cljs$core$async26475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26475";

cljs.core.async.t_cljs$core$async26475.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26475");
});

cljs.core.async.__GT_t_cljs$core$async26475 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26475(filter_GT___$1,p__$1,ch__$1,meta26476){
return (new cljs.core.async.t_cljs$core$async26475(filter_GT___$1,p__$1,ch__$1,meta26476));
});

}

return (new cljs.core.async.t_cljs$core$async26475(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26478 = [];
var len__17809__auto___26522 = arguments.length;
var i__17810__auto___26523 = (0);
while(true){
if((i__17810__auto___26523 < len__17809__auto___26522)){
args26478.push((arguments[i__17810__auto___26523]));

var G__26524 = (i__17810__auto___26523 + (1));
i__17810__auto___26523 = G__26524;
continue;
} else {
}
break;
}

var G__26480 = args26478.length;
switch (G__26480) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26478.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24276__auto___26526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___26526,out){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___26526,out){
return (function (state_26501){
var state_val_26502 = (state_26501[(1)]);
if((state_val_26502 === (7))){
var inst_26497 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26503_26527 = state_26501__$1;
(statearr_26503_26527[(2)] = inst_26497);

(statearr_26503_26527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (1))){
var state_26501__$1 = state_26501;
var statearr_26504_26528 = state_26501__$1;
(statearr_26504_26528[(2)] = null);

(statearr_26504_26528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (4))){
var inst_26483 = (state_26501[(7)]);
var inst_26483__$1 = (state_26501[(2)]);
var inst_26484 = (inst_26483__$1 == null);
var state_26501__$1 = (function (){var statearr_26505 = state_26501;
(statearr_26505[(7)] = inst_26483__$1);

return statearr_26505;
})();
if(cljs.core.truth_(inst_26484)){
var statearr_26506_26529 = state_26501__$1;
(statearr_26506_26529[(1)] = (5));

} else {
var statearr_26507_26530 = state_26501__$1;
(statearr_26507_26530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (6))){
var inst_26483 = (state_26501[(7)]);
var inst_26488 = p.call(null,inst_26483);
var state_26501__$1 = state_26501;
if(cljs.core.truth_(inst_26488)){
var statearr_26508_26531 = state_26501__$1;
(statearr_26508_26531[(1)] = (8));

} else {
var statearr_26509_26532 = state_26501__$1;
(statearr_26509_26532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (3))){
var inst_26499 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26501__$1,inst_26499);
} else {
if((state_val_26502 === (2))){
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26501__$1,(4),ch);
} else {
if((state_val_26502 === (11))){
var inst_26491 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26510_26533 = state_26501__$1;
(statearr_26510_26533[(2)] = inst_26491);

(statearr_26510_26533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (9))){
var state_26501__$1 = state_26501;
var statearr_26511_26534 = state_26501__$1;
(statearr_26511_26534[(2)] = null);

(statearr_26511_26534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (5))){
var inst_26486 = cljs.core.async.close_BANG_.call(null,out);
var state_26501__$1 = state_26501;
var statearr_26512_26535 = state_26501__$1;
(statearr_26512_26535[(2)] = inst_26486);

(statearr_26512_26535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (10))){
var inst_26494 = (state_26501[(2)]);
var state_26501__$1 = (function (){var statearr_26513 = state_26501;
(statearr_26513[(8)] = inst_26494);

return statearr_26513;
})();
var statearr_26514_26536 = state_26501__$1;
(statearr_26514_26536[(2)] = null);

(statearr_26514_26536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (8))){
var inst_26483 = (state_26501[(7)]);
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26501__$1,(11),out,inst_26483);
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
});})(c__24276__auto___26526,out))
;
return ((function (switch__24164__auto__,c__24276__auto___26526,out){
return (function() {
var cljs$core$async$state_machine__24165__auto__ = null;
var cljs$core$async$state_machine__24165__auto____0 = (function (){
var statearr_26518 = [null,null,null,null,null,null,null,null,null];
(statearr_26518[(0)] = cljs$core$async$state_machine__24165__auto__);

(statearr_26518[(1)] = (1));

return statearr_26518;
});
var cljs$core$async$state_machine__24165__auto____1 = (function (state_26501){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_26501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e26519){if((e26519 instanceof Object)){
var ex__24168__auto__ = e26519;
var statearr_26520_26537 = state_26501;
(statearr_26520_26537[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26538 = state_26501;
state_26501 = G__26538;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$state_machine__24165__auto__ = function(state_26501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24165__auto____1.call(this,state_26501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24165__auto____0;
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24165__auto____1;
return cljs$core$async$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___26526,out))
})();
var state__24278__auto__ = (function (){var statearr_26521 = f__24277__auto__.call(null);
(statearr_26521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___26526);

return statearr_26521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___26526,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26539 = [];
var len__17809__auto___26542 = arguments.length;
var i__17810__auto___26543 = (0);
while(true){
if((i__17810__auto___26543 < len__17809__auto___26542)){
args26539.push((arguments[i__17810__auto___26543]));

var G__26544 = (i__17810__auto___26543 + (1));
i__17810__auto___26543 = G__26544;
continue;
} else {
}
break;
}

var G__26541 = args26539.length;
switch (G__26541) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26539.length)].join('')));

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
var c__24276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto__){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto__){
return (function (state_26711){
var state_val_26712 = (state_26711[(1)]);
if((state_val_26712 === (7))){
var inst_26707 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26713_26754 = state_26711__$1;
(statearr_26713_26754[(2)] = inst_26707);

(statearr_26713_26754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (20))){
var inst_26677 = (state_26711[(7)]);
var inst_26688 = (state_26711[(2)]);
var inst_26689 = cljs.core.next.call(null,inst_26677);
var inst_26663 = inst_26689;
var inst_26664 = null;
var inst_26665 = (0);
var inst_26666 = (0);
var state_26711__$1 = (function (){var statearr_26714 = state_26711;
(statearr_26714[(8)] = inst_26664);

(statearr_26714[(9)] = inst_26665);

(statearr_26714[(10)] = inst_26663);

(statearr_26714[(11)] = inst_26666);

(statearr_26714[(12)] = inst_26688);

return statearr_26714;
})();
var statearr_26715_26755 = state_26711__$1;
(statearr_26715_26755[(2)] = null);

(statearr_26715_26755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (1))){
var state_26711__$1 = state_26711;
var statearr_26716_26756 = state_26711__$1;
(statearr_26716_26756[(2)] = null);

(statearr_26716_26756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (4))){
var inst_26652 = (state_26711[(13)]);
var inst_26652__$1 = (state_26711[(2)]);
var inst_26653 = (inst_26652__$1 == null);
var state_26711__$1 = (function (){var statearr_26717 = state_26711;
(statearr_26717[(13)] = inst_26652__$1);

return statearr_26717;
})();
if(cljs.core.truth_(inst_26653)){
var statearr_26718_26757 = state_26711__$1;
(statearr_26718_26757[(1)] = (5));

} else {
var statearr_26719_26758 = state_26711__$1;
(statearr_26719_26758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (15))){
var state_26711__$1 = state_26711;
var statearr_26723_26759 = state_26711__$1;
(statearr_26723_26759[(2)] = null);

(statearr_26723_26759[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (21))){
var state_26711__$1 = state_26711;
var statearr_26724_26760 = state_26711__$1;
(statearr_26724_26760[(2)] = null);

(statearr_26724_26760[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (13))){
var inst_26664 = (state_26711[(8)]);
var inst_26665 = (state_26711[(9)]);
var inst_26663 = (state_26711[(10)]);
var inst_26666 = (state_26711[(11)]);
var inst_26673 = (state_26711[(2)]);
var inst_26674 = (inst_26666 + (1));
var tmp26720 = inst_26664;
var tmp26721 = inst_26665;
var tmp26722 = inst_26663;
var inst_26663__$1 = tmp26722;
var inst_26664__$1 = tmp26720;
var inst_26665__$1 = tmp26721;
var inst_26666__$1 = inst_26674;
var state_26711__$1 = (function (){var statearr_26725 = state_26711;
(statearr_26725[(8)] = inst_26664__$1);

(statearr_26725[(14)] = inst_26673);

(statearr_26725[(9)] = inst_26665__$1);

(statearr_26725[(10)] = inst_26663__$1);

(statearr_26725[(11)] = inst_26666__$1);

return statearr_26725;
})();
var statearr_26726_26761 = state_26711__$1;
(statearr_26726_26761[(2)] = null);

(statearr_26726_26761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (22))){
var state_26711__$1 = state_26711;
var statearr_26727_26762 = state_26711__$1;
(statearr_26727_26762[(2)] = null);

(statearr_26727_26762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (6))){
var inst_26652 = (state_26711[(13)]);
var inst_26661 = f.call(null,inst_26652);
var inst_26662 = cljs.core.seq.call(null,inst_26661);
var inst_26663 = inst_26662;
var inst_26664 = null;
var inst_26665 = (0);
var inst_26666 = (0);
var state_26711__$1 = (function (){var statearr_26728 = state_26711;
(statearr_26728[(8)] = inst_26664);

(statearr_26728[(9)] = inst_26665);

(statearr_26728[(10)] = inst_26663);

(statearr_26728[(11)] = inst_26666);

return statearr_26728;
})();
var statearr_26729_26763 = state_26711__$1;
(statearr_26729_26763[(2)] = null);

(statearr_26729_26763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (17))){
var inst_26677 = (state_26711[(7)]);
var inst_26681 = cljs.core.chunk_first.call(null,inst_26677);
var inst_26682 = cljs.core.chunk_rest.call(null,inst_26677);
var inst_26683 = cljs.core.count.call(null,inst_26681);
var inst_26663 = inst_26682;
var inst_26664 = inst_26681;
var inst_26665 = inst_26683;
var inst_26666 = (0);
var state_26711__$1 = (function (){var statearr_26730 = state_26711;
(statearr_26730[(8)] = inst_26664);

(statearr_26730[(9)] = inst_26665);

(statearr_26730[(10)] = inst_26663);

(statearr_26730[(11)] = inst_26666);

return statearr_26730;
})();
var statearr_26731_26764 = state_26711__$1;
(statearr_26731_26764[(2)] = null);

(statearr_26731_26764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (3))){
var inst_26709 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26711__$1,inst_26709);
} else {
if((state_val_26712 === (12))){
var inst_26697 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26732_26765 = state_26711__$1;
(statearr_26732_26765[(2)] = inst_26697);

(statearr_26732_26765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (2))){
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26711__$1,(4),in$);
} else {
if((state_val_26712 === (23))){
var inst_26705 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26733_26766 = state_26711__$1;
(statearr_26733_26766[(2)] = inst_26705);

(statearr_26733_26766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (19))){
var inst_26692 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26734_26767 = state_26711__$1;
(statearr_26734_26767[(2)] = inst_26692);

(statearr_26734_26767[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (11))){
var inst_26677 = (state_26711[(7)]);
var inst_26663 = (state_26711[(10)]);
var inst_26677__$1 = cljs.core.seq.call(null,inst_26663);
var state_26711__$1 = (function (){var statearr_26735 = state_26711;
(statearr_26735[(7)] = inst_26677__$1);

return statearr_26735;
})();
if(inst_26677__$1){
var statearr_26736_26768 = state_26711__$1;
(statearr_26736_26768[(1)] = (14));

} else {
var statearr_26737_26769 = state_26711__$1;
(statearr_26737_26769[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (9))){
var inst_26699 = (state_26711[(2)]);
var inst_26700 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26711__$1 = (function (){var statearr_26738 = state_26711;
(statearr_26738[(15)] = inst_26699);

return statearr_26738;
})();
if(cljs.core.truth_(inst_26700)){
var statearr_26739_26770 = state_26711__$1;
(statearr_26739_26770[(1)] = (21));

} else {
var statearr_26740_26771 = state_26711__$1;
(statearr_26740_26771[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (5))){
var inst_26655 = cljs.core.async.close_BANG_.call(null,out);
var state_26711__$1 = state_26711;
var statearr_26741_26772 = state_26711__$1;
(statearr_26741_26772[(2)] = inst_26655);

(statearr_26741_26772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (14))){
var inst_26677 = (state_26711[(7)]);
var inst_26679 = cljs.core.chunked_seq_QMARK_.call(null,inst_26677);
var state_26711__$1 = state_26711;
if(inst_26679){
var statearr_26742_26773 = state_26711__$1;
(statearr_26742_26773[(1)] = (17));

} else {
var statearr_26743_26774 = state_26711__$1;
(statearr_26743_26774[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (16))){
var inst_26695 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26744_26775 = state_26711__$1;
(statearr_26744_26775[(2)] = inst_26695);

(statearr_26744_26775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (10))){
var inst_26664 = (state_26711[(8)]);
var inst_26666 = (state_26711[(11)]);
var inst_26671 = cljs.core._nth.call(null,inst_26664,inst_26666);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26711__$1,(13),out,inst_26671);
} else {
if((state_val_26712 === (18))){
var inst_26677 = (state_26711[(7)]);
var inst_26686 = cljs.core.first.call(null,inst_26677);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26711__$1,(20),out,inst_26686);
} else {
if((state_val_26712 === (8))){
var inst_26665 = (state_26711[(9)]);
var inst_26666 = (state_26711[(11)]);
var inst_26668 = (inst_26666 < inst_26665);
var inst_26669 = inst_26668;
var state_26711__$1 = state_26711;
if(cljs.core.truth_(inst_26669)){
var statearr_26745_26776 = state_26711__$1;
(statearr_26745_26776[(1)] = (10));

} else {
var statearr_26746_26777 = state_26711__$1;
(statearr_26746_26777[(1)] = (11));

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
});})(c__24276__auto__))
;
return ((function (switch__24164__auto__,c__24276__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24165__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24165__auto____0 = (function (){
var statearr_26750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26750[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24165__auto__);

(statearr_26750[(1)] = (1));

return statearr_26750;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24165__auto____1 = (function (state_26711){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_26711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e26751){if((e26751 instanceof Object)){
var ex__24168__auto__ = e26751;
var statearr_26752_26778 = state_26711;
(statearr_26752_26778[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26779 = state_26711;
state_26711 = G__26779;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24165__auto__ = function(state_26711){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24165__auto____1.call(this,state_26711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24165__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24165__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto__))
})();
var state__24278__auto__ = (function (){var statearr_26753 = f__24277__auto__.call(null);
(statearr_26753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto__);

return statearr_26753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto__))
);

return c__24276__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26780 = [];
var len__17809__auto___26783 = arguments.length;
var i__17810__auto___26784 = (0);
while(true){
if((i__17810__auto___26784 < len__17809__auto___26783)){
args26780.push((arguments[i__17810__auto___26784]));

var G__26785 = (i__17810__auto___26784 + (1));
i__17810__auto___26784 = G__26785;
continue;
} else {
}
break;
}

var G__26782 = args26780.length;
switch (G__26782) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26780.length)].join('')));

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
var args26787 = [];
var len__17809__auto___26790 = arguments.length;
var i__17810__auto___26791 = (0);
while(true){
if((i__17810__auto___26791 < len__17809__auto___26790)){
args26787.push((arguments[i__17810__auto___26791]));

var G__26792 = (i__17810__auto___26791 + (1));
i__17810__auto___26791 = G__26792;
continue;
} else {
}
break;
}

var G__26789 = args26787.length;
switch (G__26789) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26787.length)].join('')));

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
var args26794 = [];
var len__17809__auto___26845 = arguments.length;
var i__17810__auto___26846 = (0);
while(true){
if((i__17810__auto___26846 < len__17809__auto___26845)){
args26794.push((arguments[i__17810__auto___26846]));

var G__26847 = (i__17810__auto___26846 + (1));
i__17810__auto___26846 = G__26847;
continue;
} else {
}
break;
}

var G__26796 = args26794.length;
switch (G__26796) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26794.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24276__auto___26849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___26849,out){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___26849,out){
return (function (state_26820){
var state_val_26821 = (state_26820[(1)]);
if((state_val_26821 === (7))){
var inst_26815 = (state_26820[(2)]);
var state_26820__$1 = state_26820;
var statearr_26822_26850 = state_26820__$1;
(statearr_26822_26850[(2)] = inst_26815);

(statearr_26822_26850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26821 === (1))){
var inst_26797 = null;
var state_26820__$1 = (function (){var statearr_26823 = state_26820;
(statearr_26823[(7)] = inst_26797);

return statearr_26823;
})();
var statearr_26824_26851 = state_26820__$1;
(statearr_26824_26851[(2)] = null);

(statearr_26824_26851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26821 === (4))){
var inst_26800 = (state_26820[(8)]);
var inst_26800__$1 = (state_26820[(2)]);
var inst_26801 = (inst_26800__$1 == null);
var inst_26802 = cljs.core.not.call(null,inst_26801);
var state_26820__$1 = (function (){var statearr_26825 = state_26820;
(statearr_26825[(8)] = inst_26800__$1);

return statearr_26825;
})();
if(inst_26802){
var statearr_26826_26852 = state_26820__$1;
(statearr_26826_26852[(1)] = (5));

} else {
var statearr_26827_26853 = state_26820__$1;
(statearr_26827_26853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26821 === (6))){
var state_26820__$1 = state_26820;
var statearr_26828_26854 = state_26820__$1;
(statearr_26828_26854[(2)] = null);

(statearr_26828_26854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26821 === (3))){
var inst_26817 = (state_26820[(2)]);
var inst_26818 = cljs.core.async.close_BANG_.call(null,out);
var state_26820__$1 = (function (){var statearr_26829 = state_26820;
(statearr_26829[(9)] = inst_26817);

return statearr_26829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26820__$1,inst_26818);
} else {
if((state_val_26821 === (2))){
var state_26820__$1 = state_26820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26820__$1,(4),ch);
} else {
if((state_val_26821 === (11))){
var inst_26800 = (state_26820[(8)]);
var inst_26809 = (state_26820[(2)]);
var inst_26797 = inst_26800;
var state_26820__$1 = (function (){var statearr_26830 = state_26820;
(statearr_26830[(7)] = inst_26797);

(statearr_26830[(10)] = inst_26809);

return statearr_26830;
})();
var statearr_26831_26855 = state_26820__$1;
(statearr_26831_26855[(2)] = null);

(statearr_26831_26855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26821 === (9))){
var inst_26800 = (state_26820[(8)]);
var state_26820__$1 = state_26820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26820__$1,(11),out,inst_26800);
} else {
if((state_val_26821 === (5))){
var inst_26797 = (state_26820[(7)]);
var inst_26800 = (state_26820[(8)]);
var inst_26804 = cljs.core._EQ_.call(null,inst_26800,inst_26797);
var state_26820__$1 = state_26820;
if(inst_26804){
var statearr_26833_26856 = state_26820__$1;
(statearr_26833_26856[(1)] = (8));

} else {
var statearr_26834_26857 = state_26820__$1;
(statearr_26834_26857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26821 === (10))){
var inst_26812 = (state_26820[(2)]);
var state_26820__$1 = state_26820;
var statearr_26835_26858 = state_26820__$1;
(statearr_26835_26858[(2)] = inst_26812);

(statearr_26835_26858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26821 === (8))){
var inst_26797 = (state_26820[(7)]);
var tmp26832 = inst_26797;
var inst_26797__$1 = tmp26832;
var state_26820__$1 = (function (){var statearr_26836 = state_26820;
(statearr_26836[(7)] = inst_26797__$1);

return statearr_26836;
})();
var statearr_26837_26859 = state_26820__$1;
(statearr_26837_26859[(2)] = null);

(statearr_26837_26859[(1)] = (2));


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
});})(c__24276__auto___26849,out))
;
return ((function (switch__24164__auto__,c__24276__auto___26849,out){
return (function() {
var cljs$core$async$state_machine__24165__auto__ = null;
var cljs$core$async$state_machine__24165__auto____0 = (function (){
var statearr_26841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26841[(0)] = cljs$core$async$state_machine__24165__auto__);

(statearr_26841[(1)] = (1));

return statearr_26841;
});
var cljs$core$async$state_machine__24165__auto____1 = (function (state_26820){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_26820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e26842){if((e26842 instanceof Object)){
var ex__24168__auto__ = e26842;
var statearr_26843_26860 = state_26820;
(statearr_26843_26860[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26861 = state_26820;
state_26820 = G__26861;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$state_machine__24165__auto__ = function(state_26820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24165__auto____1.call(this,state_26820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24165__auto____0;
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24165__auto____1;
return cljs$core$async$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___26849,out))
})();
var state__24278__auto__ = (function (){var statearr_26844 = f__24277__auto__.call(null);
(statearr_26844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___26849);

return statearr_26844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___26849,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26862 = [];
var len__17809__auto___26932 = arguments.length;
var i__17810__auto___26933 = (0);
while(true){
if((i__17810__auto___26933 < len__17809__auto___26932)){
args26862.push((arguments[i__17810__auto___26933]));

var G__26934 = (i__17810__auto___26933 + (1));
i__17810__auto___26933 = G__26934;
continue;
} else {
}
break;
}

var G__26864 = args26862.length;
switch (G__26864) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26862.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24276__auto___26936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___26936,out){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___26936,out){
return (function (state_26902){
var state_val_26903 = (state_26902[(1)]);
if((state_val_26903 === (7))){
var inst_26898 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
var statearr_26904_26937 = state_26902__$1;
(statearr_26904_26937[(2)] = inst_26898);

(statearr_26904_26937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (1))){
var inst_26865 = (new Array(n));
var inst_26866 = inst_26865;
var inst_26867 = (0);
var state_26902__$1 = (function (){var statearr_26905 = state_26902;
(statearr_26905[(7)] = inst_26866);

(statearr_26905[(8)] = inst_26867);

return statearr_26905;
})();
var statearr_26906_26938 = state_26902__$1;
(statearr_26906_26938[(2)] = null);

(statearr_26906_26938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (4))){
var inst_26870 = (state_26902[(9)]);
var inst_26870__$1 = (state_26902[(2)]);
var inst_26871 = (inst_26870__$1 == null);
var inst_26872 = cljs.core.not.call(null,inst_26871);
var state_26902__$1 = (function (){var statearr_26907 = state_26902;
(statearr_26907[(9)] = inst_26870__$1);

return statearr_26907;
})();
if(inst_26872){
var statearr_26908_26939 = state_26902__$1;
(statearr_26908_26939[(1)] = (5));

} else {
var statearr_26909_26940 = state_26902__$1;
(statearr_26909_26940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (15))){
var inst_26892 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
var statearr_26910_26941 = state_26902__$1;
(statearr_26910_26941[(2)] = inst_26892);

(statearr_26910_26941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (13))){
var state_26902__$1 = state_26902;
var statearr_26911_26942 = state_26902__$1;
(statearr_26911_26942[(2)] = null);

(statearr_26911_26942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (6))){
var inst_26867 = (state_26902[(8)]);
var inst_26888 = (inst_26867 > (0));
var state_26902__$1 = state_26902;
if(cljs.core.truth_(inst_26888)){
var statearr_26912_26943 = state_26902__$1;
(statearr_26912_26943[(1)] = (12));

} else {
var statearr_26913_26944 = state_26902__$1;
(statearr_26913_26944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (3))){
var inst_26900 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26902__$1,inst_26900);
} else {
if((state_val_26903 === (12))){
var inst_26866 = (state_26902[(7)]);
var inst_26890 = cljs.core.vec.call(null,inst_26866);
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26902__$1,(15),out,inst_26890);
} else {
if((state_val_26903 === (2))){
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26902__$1,(4),ch);
} else {
if((state_val_26903 === (11))){
var inst_26882 = (state_26902[(2)]);
var inst_26883 = (new Array(n));
var inst_26866 = inst_26883;
var inst_26867 = (0);
var state_26902__$1 = (function (){var statearr_26914 = state_26902;
(statearr_26914[(10)] = inst_26882);

(statearr_26914[(7)] = inst_26866);

(statearr_26914[(8)] = inst_26867);

return statearr_26914;
})();
var statearr_26915_26945 = state_26902__$1;
(statearr_26915_26945[(2)] = null);

(statearr_26915_26945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (9))){
var inst_26866 = (state_26902[(7)]);
var inst_26880 = cljs.core.vec.call(null,inst_26866);
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26902__$1,(11),out,inst_26880);
} else {
if((state_val_26903 === (5))){
var inst_26875 = (state_26902[(11)]);
var inst_26866 = (state_26902[(7)]);
var inst_26867 = (state_26902[(8)]);
var inst_26870 = (state_26902[(9)]);
var inst_26874 = (inst_26866[inst_26867] = inst_26870);
var inst_26875__$1 = (inst_26867 + (1));
var inst_26876 = (inst_26875__$1 < n);
var state_26902__$1 = (function (){var statearr_26916 = state_26902;
(statearr_26916[(11)] = inst_26875__$1);

(statearr_26916[(12)] = inst_26874);

return statearr_26916;
})();
if(cljs.core.truth_(inst_26876)){
var statearr_26917_26946 = state_26902__$1;
(statearr_26917_26946[(1)] = (8));

} else {
var statearr_26918_26947 = state_26902__$1;
(statearr_26918_26947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (14))){
var inst_26895 = (state_26902[(2)]);
var inst_26896 = cljs.core.async.close_BANG_.call(null,out);
var state_26902__$1 = (function (){var statearr_26920 = state_26902;
(statearr_26920[(13)] = inst_26895);

return statearr_26920;
})();
var statearr_26921_26948 = state_26902__$1;
(statearr_26921_26948[(2)] = inst_26896);

(statearr_26921_26948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (10))){
var inst_26886 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
var statearr_26922_26949 = state_26902__$1;
(statearr_26922_26949[(2)] = inst_26886);

(statearr_26922_26949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (8))){
var inst_26875 = (state_26902[(11)]);
var inst_26866 = (state_26902[(7)]);
var tmp26919 = inst_26866;
var inst_26866__$1 = tmp26919;
var inst_26867 = inst_26875;
var state_26902__$1 = (function (){var statearr_26923 = state_26902;
(statearr_26923[(7)] = inst_26866__$1);

(statearr_26923[(8)] = inst_26867);

return statearr_26923;
})();
var statearr_26924_26950 = state_26902__$1;
(statearr_26924_26950[(2)] = null);

(statearr_26924_26950[(1)] = (2));


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
});})(c__24276__auto___26936,out))
;
return ((function (switch__24164__auto__,c__24276__auto___26936,out){
return (function() {
var cljs$core$async$state_machine__24165__auto__ = null;
var cljs$core$async$state_machine__24165__auto____0 = (function (){
var statearr_26928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26928[(0)] = cljs$core$async$state_machine__24165__auto__);

(statearr_26928[(1)] = (1));

return statearr_26928;
});
var cljs$core$async$state_machine__24165__auto____1 = (function (state_26902){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_26902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e26929){if((e26929 instanceof Object)){
var ex__24168__auto__ = e26929;
var statearr_26930_26951 = state_26902;
(statearr_26930_26951[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26952 = state_26902;
state_26902 = G__26952;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$state_machine__24165__auto__ = function(state_26902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24165__auto____1.call(this,state_26902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24165__auto____0;
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24165__auto____1;
return cljs$core$async$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___26936,out))
})();
var state__24278__auto__ = (function (){var statearr_26931 = f__24277__auto__.call(null);
(statearr_26931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___26936);

return statearr_26931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___26936,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26953 = [];
var len__17809__auto___27027 = arguments.length;
var i__17810__auto___27028 = (0);
while(true){
if((i__17810__auto___27028 < len__17809__auto___27027)){
args26953.push((arguments[i__17810__auto___27028]));

var G__27029 = (i__17810__auto___27028 + (1));
i__17810__auto___27028 = G__27029;
continue;
} else {
}
break;
}

var G__26955 = args26953.length;
switch (G__26955) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26953.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24276__auto___27031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24276__auto___27031,out){
return (function (){
var f__24277__auto__ = (function (){var switch__24164__auto__ = ((function (c__24276__auto___27031,out){
return (function (state_26997){
var state_val_26998 = (state_26997[(1)]);
if((state_val_26998 === (7))){
var inst_26993 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
var statearr_26999_27032 = state_26997__$1;
(statearr_26999_27032[(2)] = inst_26993);

(statearr_26999_27032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (1))){
var inst_26956 = [];
var inst_26957 = inst_26956;
var inst_26958 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26997__$1 = (function (){var statearr_27000 = state_26997;
(statearr_27000[(7)] = inst_26958);

(statearr_27000[(8)] = inst_26957);

return statearr_27000;
})();
var statearr_27001_27033 = state_26997__$1;
(statearr_27001_27033[(2)] = null);

(statearr_27001_27033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (4))){
var inst_26961 = (state_26997[(9)]);
var inst_26961__$1 = (state_26997[(2)]);
var inst_26962 = (inst_26961__$1 == null);
var inst_26963 = cljs.core.not.call(null,inst_26962);
var state_26997__$1 = (function (){var statearr_27002 = state_26997;
(statearr_27002[(9)] = inst_26961__$1);

return statearr_27002;
})();
if(inst_26963){
var statearr_27003_27034 = state_26997__$1;
(statearr_27003_27034[(1)] = (5));

} else {
var statearr_27004_27035 = state_26997__$1;
(statearr_27004_27035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (15))){
var inst_26987 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
var statearr_27005_27036 = state_26997__$1;
(statearr_27005_27036[(2)] = inst_26987);

(statearr_27005_27036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (13))){
var state_26997__$1 = state_26997;
var statearr_27006_27037 = state_26997__$1;
(statearr_27006_27037[(2)] = null);

(statearr_27006_27037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (6))){
var inst_26957 = (state_26997[(8)]);
var inst_26982 = inst_26957.length;
var inst_26983 = (inst_26982 > (0));
var state_26997__$1 = state_26997;
if(cljs.core.truth_(inst_26983)){
var statearr_27007_27038 = state_26997__$1;
(statearr_27007_27038[(1)] = (12));

} else {
var statearr_27008_27039 = state_26997__$1;
(statearr_27008_27039[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (3))){
var inst_26995 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26997__$1,inst_26995);
} else {
if((state_val_26998 === (12))){
var inst_26957 = (state_26997[(8)]);
var inst_26985 = cljs.core.vec.call(null,inst_26957);
var state_26997__$1 = state_26997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26997__$1,(15),out,inst_26985);
} else {
if((state_val_26998 === (2))){
var state_26997__$1 = state_26997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26997__$1,(4),ch);
} else {
if((state_val_26998 === (11))){
var inst_26965 = (state_26997[(10)]);
var inst_26961 = (state_26997[(9)]);
var inst_26975 = (state_26997[(2)]);
var inst_26976 = [];
var inst_26977 = inst_26976.push(inst_26961);
var inst_26957 = inst_26976;
var inst_26958 = inst_26965;
var state_26997__$1 = (function (){var statearr_27009 = state_26997;
(statearr_27009[(7)] = inst_26958);

(statearr_27009[(11)] = inst_26975);

(statearr_27009[(12)] = inst_26977);

(statearr_27009[(8)] = inst_26957);

return statearr_27009;
})();
var statearr_27010_27040 = state_26997__$1;
(statearr_27010_27040[(2)] = null);

(statearr_27010_27040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (9))){
var inst_26957 = (state_26997[(8)]);
var inst_26973 = cljs.core.vec.call(null,inst_26957);
var state_26997__$1 = state_26997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26997__$1,(11),out,inst_26973);
} else {
if((state_val_26998 === (5))){
var inst_26958 = (state_26997[(7)]);
var inst_26965 = (state_26997[(10)]);
var inst_26961 = (state_26997[(9)]);
var inst_26965__$1 = f.call(null,inst_26961);
var inst_26966 = cljs.core._EQ_.call(null,inst_26965__$1,inst_26958);
var inst_26967 = cljs.core.keyword_identical_QMARK_.call(null,inst_26958,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26968 = (inst_26966) || (inst_26967);
var state_26997__$1 = (function (){var statearr_27011 = state_26997;
(statearr_27011[(10)] = inst_26965__$1);

return statearr_27011;
})();
if(cljs.core.truth_(inst_26968)){
var statearr_27012_27041 = state_26997__$1;
(statearr_27012_27041[(1)] = (8));

} else {
var statearr_27013_27042 = state_26997__$1;
(statearr_27013_27042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (14))){
var inst_26990 = (state_26997[(2)]);
var inst_26991 = cljs.core.async.close_BANG_.call(null,out);
var state_26997__$1 = (function (){var statearr_27015 = state_26997;
(statearr_27015[(13)] = inst_26990);

return statearr_27015;
})();
var statearr_27016_27043 = state_26997__$1;
(statearr_27016_27043[(2)] = inst_26991);

(statearr_27016_27043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (10))){
var inst_26980 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
var statearr_27017_27044 = state_26997__$1;
(statearr_27017_27044[(2)] = inst_26980);

(statearr_27017_27044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (8))){
var inst_26965 = (state_26997[(10)]);
var inst_26957 = (state_26997[(8)]);
var inst_26961 = (state_26997[(9)]);
var inst_26970 = inst_26957.push(inst_26961);
var tmp27014 = inst_26957;
var inst_26957__$1 = tmp27014;
var inst_26958 = inst_26965;
var state_26997__$1 = (function (){var statearr_27018 = state_26997;
(statearr_27018[(7)] = inst_26958);

(statearr_27018[(14)] = inst_26970);

(statearr_27018[(8)] = inst_26957__$1);

return statearr_27018;
})();
var statearr_27019_27045 = state_26997__$1;
(statearr_27019_27045[(2)] = null);

(statearr_27019_27045[(1)] = (2));


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
});})(c__24276__auto___27031,out))
;
return ((function (switch__24164__auto__,c__24276__auto___27031,out){
return (function() {
var cljs$core$async$state_machine__24165__auto__ = null;
var cljs$core$async$state_machine__24165__auto____0 = (function (){
var statearr_27023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27023[(0)] = cljs$core$async$state_machine__24165__auto__);

(statearr_27023[(1)] = (1));

return statearr_27023;
});
var cljs$core$async$state_machine__24165__auto____1 = (function (state_26997){
while(true){
var ret_value__24166__auto__ = (function (){try{while(true){
var result__24167__auto__ = switch__24164__auto__.call(null,state_26997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24167__auto__;
}
break;
}
}catch (e27024){if((e27024 instanceof Object)){
var ex__24168__auto__ = e27024;
var statearr_27025_27046 = state_26997;
(statearr_27025_27046[(5)] = ex__24168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27047 = state_26997;
state_26997 = G__27047;
continue;
} else {
return ret_value__24166__auto__;
}
break;
}
});
cljs$core$async$state_machine__24165__auto__ = function(state_26997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24165__auto____1.call(this,state_26997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24165__auto____0;
cljs$core$async$state_machine__24165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24165__auto____1;
return cljs$core$async$state_machine__24165__auto__;
})()
;})(switch__24164__auto__,c__24276__auto___27031,out))
})();
var state__24278__auto__ = (function (){var statearr_27026 = f__24277__auto__.call(null);
(statearr_27026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24276__auto___27031);

return statearr_27026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24278__auto__);
});})(c__24276__auto___27031,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1449606075734