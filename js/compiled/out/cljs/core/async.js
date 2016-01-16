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
var args27522 = [];
var len__21248__auto___27528 = arguments.length;
var i__21249__auto___27529 = (0);
while(true){
if((i__21249__auto___27529 < len__21248__auto___27528)){
args27522.push((arguments[i__21249__auto___27529]));

var G__27530 = (i__21249__auto___27529 + (1));
i__21249__auto___27529 = G__27530;
continue;
} else {
}
break;
}

var G__27524 = args27522.length;
switch (G__27524) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27522.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27525 = (function (f,blockable,meta27526){
this.f = f;
this.blockable = blockable;
this.meta27526 = meta27526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27527,meta27526__$1){
var self__ = this;
var _27527__$1 = this;
return (new cljs.core.async.t_cljs$core$async27525(self__.f,self__.blockable,meta27526__$1));
});

cljs.core.async.t_cljs$core$async27525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27527){
var self__ = this;
var _27527__$1 = this;
return self__.meta27526;
});

cljs.core.async.t_cljs$core$async27525.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27526","meta27526",1890518016,null)], null);
});

cljs.core.async.t_cljs$core$async27525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27525";

cljs.core.async.t_cljs$core$async27525.cljs$lang$ctorPrWriter = (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"cljs.core.async/t_cljs$core$async27525");
});

cljs.core.async.__GT_t_cljs$core$async27525 = (function cljs$core$async$__GT_t_cljs$core$async27525(f__$1,blockable__$1,meta27526){
return (new cljs.core.async.t_cljs$core$async27525(f__$1,blockable__$1,meta27526));
});

}

return (new cljs.core.async.t_cljs$core$async27525(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27534 = [];
var len__21248__auto___27537 = arguments.length;
var i__21249__auto___27538 = (0);
while(true){
if((i__21249__auto___27538 < len__21248__auto___27537)){
args27534.push((arguments[i__21249__auto___27538]));

var G__27539 = (i__21249__auto___27538 + (1));
i__21249__auto___27538 = G__27539;
continue;
} else {
}
break;
}

var G__27536 = args27534.length;
switch (G__27536) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27534.length)].join('')));

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
var args27541 = [];
var len__21248__auto___27544 = arguments.length;
var i__21249__auto___27545 = (0);
while(true){
if((i__21249__auto___27545 < len__21248__auto___27544)){
args27541.push((arguments[i__21249__auto___27545]));

var G__27546 = (i__21249__auto___27545 + (1));
i__21249__auto___27545 = G__27546;
continue;
} else {
}
break;
}

var G__27543 = args27541.length;
switch (G__27543) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27541.length)].join('')));

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
var args27548 = [];
var len__21248__auto___27551 = arguments.length;
var i__21249__auto___27552 = (0);
while(true){
if((i__21249__auto___27552 < len__21248__auto___27551)){
args27548.push((arguments[i__21249__auto___27552]));

var G__27553 = (i__21249__auto___27552 + (1));
i__21249__auto___27552 = G__27553;
continue;
} else {
}
break;
}

var G__27550 = args27548.length;
switch (G__27550) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27548.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27555 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27555);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27555,ret){
return (function (){
return fn1.call(null,val_27555);
});})(val_27555,ret))
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
var args27556 = [];
var len__21248__auto___27559 = arguments.length;
var i__21249__auto___27560 = (0);
while(true){
if((i__21249__auto___27560 < len__21248__auto___27559)){
args27556.push((arguments[i__21249__auto___27560]));

var G__27561 = (i__21249__auto___27560 + (1));
i__21249__auto___27560 = G__27561;
continue;
} else {
}
break;
}

var G__27558 = args27556.length;
switch (G__27558) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27556.length)].join('')));

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
var n__21093__auto___27563 = n;
var x_27564 = (0);
while(true){
if((x_27564 < n__21093__auto___27563)){
(a[x_27564] = (0));

var G__27565 = (x_27564 + (1));
x_27564 = G__27565;
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

var G__27566 = (i + (1));
i = G__27566;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27570 = (function (alt_flag,flag,meta27571){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27571 = meta27571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27572,meta27571__$1){
var self__ = this;
var _27572__$1 = this;
return (new cljs.core.async.t_cljs$core$async27570(self__.alt_flag,self__.flag,meta27571__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27572){
var self__ = this;
var _27572__$1 = this;
return self__.meta27571;
});})(flag))
;

cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27570.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27571","meta27571",1401867287,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27570";

cljs.core.async.t_cljs$core$async27570.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"cljs.core.async/t_cljs$core$async27570");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27570 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27570(alt_flag__$1,flag__$1,meta27571){
return (new cljs.core.async.t_cljs$core$async27570(alt_flag__$1,flag__$1,meta27571));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27570(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27576 = (function (alt_handler,flag,cb,meta27577){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27577 = meta27577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27578,meta27577__$1){
var self__ = this;
var _27578__$1 = this;
return (new cljs.core.async.t_cljs$core$async27576(self__.alt_handler,self__.flag,self__.cb,meta27577__$1));
});

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27578){
var self__ = this;
var _27578__$1 = this;
return self__.meta27577;
});

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27577","meta27577",-176058009,null)], null);
});

cljs.core.async.t_cljs$core$async27576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27576";

cljs.core.async.t_cljs$core$async27576.cljs$lang$ctorPrWriter = (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"cljs.core.async/t_cljs$core$async27576");
});

cljs.core.async.__GT_t_cljs$core$async27576 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27576(alt_handler__$1,flag__$1,cb__$1,meta27577){
return (new cljs.core.async.t_cljs$core$async27576(alt_handler__$1,flag__$1,cb__$1,meta27577));
});

}

return (new cljs.core.async.t_cljs$core$async27576(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27579_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27579_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27580_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27580_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20190__auto__ = wport;
if(cljs.core.truth_(or__20190__auto__)){
return or__20190__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27581 = (i + (1));
i = G__27581;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20190__auto__ = ret;
if(cljs.core.truth_(or__20190__auto__)){
return or__20190__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__20178__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20178__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20178__auto__;
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
var args__21255__auto__ = [];
var len__21248__auto___27587 = arguments.length;
var i__21249__auto___27588 = (0);
while(true){
if((i__21249__auto___27588 < len__21248__auto___27587)){
args__21255__auto__.push((arguments[i__21249__auto___27588]));

var G__27589 = (i__21249__auto___27588 + (1));
i__21249__auto___27588 = G__27589;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((1) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21256__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27584){
var map__27585 = p__27584;
var map__27585__$1 = ((((!((map__27585 == null)))?((((map__27585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27585):map__27585);
var opts = map__27585__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27582){
var G__27583 = cljs.core.first.call(null,seq27582);
var seq27582__$1 = cljs.core.next.call(null,seq27582);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27583,seq27582__$1);
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
var args27590 = [];
var len__21248__auto___27640 = arguments.length;
var i__21249__auto___27641 = (0);
while(true){
if((i__21249__auto___27641 < len__21248__auto___27640)){
args27590.push((arguments[i__21249__auto___27641]));

var G__27642 = (i__21249__auto___27641 + (1));
i__21249__auto___27641 = G__27642;
continue;
} else {
}
break;
}

var G__27592 = args27590.length;
switch (G__27592) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27590.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27477__auto___27644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___27644){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___27644){
return (function (state_27616){
var state_val_27617 = (state_27616[(1)]);
if((state_val_27617 === (7))){
var inst_27612 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
var statearr_27618_27645 = state_27616__$1;
(statearr_27618_27645[(2)] = inst_27612);

(statearr_27618_27645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (1))){
var state_27616__$1 = state_27616;
var statearr_27619_27646 = state_27616__$1;
(statearr_27619_27646[(2)] = null);

(statearr_27619_27646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (4))){
var inst_27595 = (state_27616[(7)]);
var inst_27595__$1 = (state_27616[(2)]);
var inst_27596 = (inst_27595__$1 == null);
var state_27616__$1 = (function (){var statearr_27620 = state_27616;
(statearr_27620[(7)] = inst_27595__$1);

return statearr_27620;
})();
if(cljs.core.truth_(inst_27596)){
var statearr_27621_27647 = state_27616__$1;
(statearr_27621_27647[(1)] = (5));

} else {
var statearr_27622_27648 = state_27616__$1;
(statearr_27622_27648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (13))){
var state_27616__$1 = state_27616;
var statearr_27623_27649 = state_27616__$1;
(statearr_27623_27649[(2)] = null);

(statearr_27623_27649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (6))){
var inst_27595 = (state_27616[(7)]);
var state_27616__$1 = state_27616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27616__$1,(11),to,inst_27595);
} else {
if((state_val_27617 === (3))){
var inst_27614 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27616__$1,inst_27614);
} else {
if((state_val_27617 === (12))){
var state_27616__$1 = state_27616;
var statearr_27624_27650 = state_27616__$1;
(statearr_27624_27650[(2)] = null);

(statearr_27624_27650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (2))){
var state_27616__$1 = state_27616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27616__$1,(4),from);
} else {
if((state_val_27617 === (11))){
var inst_27605 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
if(cljs.core.truth_(inst_27605)){
var statearr_27625_27651 = state_27616__$1;
(statearr_27625_27651[(1)] = (12));

} else {
var statearr_27626_27652 = state_27616__$1;
(statearr_27626_27652[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (9))){
var state_27616__$1 = state_27616;
var statearr_27627_27653 = state_27616__$1;
(statearr_27627_27653[(2)] = null);

(statearr_27627_27653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (5))){
var state_27616__$1 = state_27616;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27628_27654 = state_27616__$1;
(statearr_27628_27654[(1)] = (8));

} else {
var statearr_27629_27655 = state_27616__$1;
(statearr_27629_27655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (14))){
var inst_27610 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
var statearr_27630_27656 = state_27616__$1;
(statearr_27630_27656[(2)] = inst_27610);

(statearr_27630_27656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (10))){
var inst_27602 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
var statearr_27631_27657 = state_27616__$1;
(statearr_27631_27657[(2)] = inst_27602);

(statearr_27631_27657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (8))){
var inst_27599 = cljs.core.async.close_BANG_.call(null,to);
var state_27616__$1 = state_27616;
var statearr_27632_27658 = state_27616__$1;
(statearr_27632_27658[(2)] = inst_27599);

(statearr_27632_27658[(1)] = (10));


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
});})(c__27477__auto___27644))
;
return ((function (switch__27365__auto__,c__27477__auto___27644){
return (function() {
var cljs$core$async$state_machine__27366__auto__ = null;
var cljs$core$async$state_machine__27366__auto____0 = (function (){
var statearr_27636 = [null,null,null,null,null,null,null,null];
(statearr_27636[(0)] = cljs$core$async$state_machine__27366__auto__);

(statearr_27636[(1)] = (1));

return statearr_27636;
});
var cljs$core$async$state_machine__27366__auto____1 = (function (state_27616){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_27616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e27637){if((e27637 instanceof Object)){
var ex__27369__auto__ = e27637;
var statearr_27638_27659 = state_27616;
(statearr_27638_27659[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27660 = state_27616;
state_27616 = G__27660;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$state_machine__27366__auto__ = function(state_27616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27366__auto____1.call(this,state_27616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27366__auto____0;
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27366__auto____1;
return cljs$core$async$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___27644))
})();
var state__27479__auto__ = (function (){var statearr_27639 = f__27478__auto__.call(null);
(statearr_27639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___27644);

return statearr_27639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___27644))
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
return (function (p__27844){
var vec__27845 = p__27844;
var v = cljs.core.nth.call(null,vec__27845,(0),null);
var p = cljs.core.nth.call(null,vec__27845,(1),null);
var job = vec__27845;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27477__auto___28027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___28027,res,vec__27845,v,p,job,jobs,results){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___28027,res,vec__27845,v,p,job,jobs,results){
return (function (state_27850){
var state_val_27851 = (state_27850[(1)]);
if((state_val_27851 === (1))){
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27850__$1,(2),res,v);
} else {
if((state_val_27851 === (2))){
var inst_27847 = (state_27850[(2)]);
var inst_27848 = cljs.core.async.close_BANG_.call(null,res);
var state_27850__$1 = (function (){var statearr_27852 = state_27850;
(statearr_27852[(7)] = inst_27847);

return statearr_27852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27850__$1,inst_27848);
} else {
return null;
}
}
});})(c__27477__auto___28027,res,vec__27845,v,p,job,jobs,results))
;
return ((function (switch__27365__auto__,c__27477__auto___28027,res,vec__27845,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0 = (function (){
var statearr_27856 = [null,null,null,null,null,null,null,null];
(statearr_27856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__);

(statearr_27856[(1)] = (1));

return statearr_27856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1 = (function (state_27850){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_27850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e27857){if((e27857 instanceof Object)){
var ex__27369__auto__ = e27857;
var statearr_27858_28028 = state_27850;
(statearr_27858_28028[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28029 = state_27850;
state_27850 = G__28029;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__ = function(state_27850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1.call(this,state_27850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___28027,res,vec__27845,v,p,job,jobs,results))
})();
var state__27479__auto__ = (function (){var statearr_27859 = f__27478__auto__.call(null);
(statearr_27859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___28027);

return statearr_27859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___28027,res,vec__27845,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27860){
var vec__27861 = p__27860;
var v = cljs.core.nth.call(null,vec__27861,(0),null);
var p = cljs.core.nth.call(null,vec__27861,(1),null);
var job = vec__27861;
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
var n__21093__auto___28030 = n;
var __28031 = (0);
while(true){
if((__28031 < n__21093__auto___28030)){
var G__27862_28032 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27862_28032) {
case "compute":
var c__27477__auto___28034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28031,c__27477__auto___28034,G__27862_28032,n__21093__auto___28030,jobs,results,process,async){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (__28031,c__27477__auto___28034,G__27862_28032,n__21093__auto___28030,jobs,results,process,async){
return (function (state_27875){
var state_val_27876 = (state_27875[(1)]);
if((state_val_27876 === (1))){
var state_27875__$1 = state_27875;
var statearr_27877_28035 = state_27875__$1;
(statearr_27877_28035[(2)] = null);

(statearr_27877_28035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27876 === (2))){
var state_27875__$1 = state_27875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27875__$1,(4),jobs);
} else {
if((state_val_27876 === (3))){
var inst_27873 = (state_27875[(2)]);
var state_27875__$1 = state_27875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27875__$1,inst_27873);
} else {
if((state_val_27876 === (4))){
var inst_27865 = (state_27875[(2)]);
var inst_27866 = process.call(null,inst_27865);
var state_27875__$1 = state_27875;
if(cljs.core.truth_(inst_27866)){
var statearr_27878_28036 = state_27875__$1;
(statearr_27878_28036[(1)] = (5));

} else {
var statearr_27879_28037 = state_27875__$1;
(statearr_27879_28037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27876 === (5))){
var state_27875__$1 = state_27875;
var statearr_27880_28038 = state_27875__$1;
(statearr_27880_28038[(2)] = null);

(statearr_27880_28038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27876 === (6))){
var state_27875__$1 = state_27875;
var statearr_27881_28039 = state_27875__$1;
(statearr_27881_28039[(2)] = null);

(statearr_27881_28039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27876 === (7))){
var inst_27871 = (state_27875[(2)]);
var state_27875__$1 = state_27875;
var statearr_27882_28040 = state_27875__$1;
(statearr_27882_28040[(2)] = inst_27871);

(statearr_27882_28040[(1)] = (3));


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
});})(__28031,c__27477__auto___28034,G__27862_28032,n__21093__auto___28030,jobs,results,process,async))
;
return ((function (__28031,switch__27365__auto__,c__27477__auto___28034,G__27862_28032,n__21093__auto___28030,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0 = (function (){
var statearr_27886 = [null,null,null,null,null,null,null];
(statearr_27886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__);

(statearr_27886[(1)] = (1));

return statearr_27886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1 = (function (state_27875){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_27875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e27887){if((e27887 instanceof Object)){
var ex__27369__auto__ = e27887;
var statearr_27888_28041 = state_27875;
(statearr_27888_28041[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28042 = state_27875;
state_27875 = G__28042;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__ = function(state_27875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1.call(this,state_27875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__;
})()
;})(__28031,switch__27365__auto__,c__27477__auto___28034,G__27862_28032,n__21093__auto___28030,jobs,results,process,async))
})();
var state__27479__auto__ = (function (){var statearr_27889 = f__27478__auto__.call(null);
(statearr_27889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___28034);

return statearr_27889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(__28031,c__27477__auto___28034,G__27862_28032,n__21093__auto___28030,jobs,results,process,async))
);


break;
case "async":
var c__27477__auto___28043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28031,c__27477__auto___28043,G__27862_28032,n__21093__auto___28030,jobs,results,process,async){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (__28031,c__27477__auto___28043,G__27862_28032,n__21093__auto___28030,jobs,results,process,async){
return (function (state_27902){
var state_val_27903 = (state_27902[(1)]);
if((state_val_27903 === (1))){
var state_27902__$1 = state_27902;
var statearr_27904_28044 = state_27902__$1;
(statearr_27904_28044[(2)] = null);

(statearr_27904_28044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (2))){
var state_27902__$1 = state_27902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27902__$1,(4),jobs);
} else {
if((state_val_27903 === (3))){
var inst_27900 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27902__$1,inst_27900);
} else {
if((state_val_27903 === (4))){
var inst_27892 = (state_27902[(2)]);
var inst_27893 = async.call(null,inst_27892);
var state_27902__$1 = state_27902;
if(cljs.core.truth_(inst_27893)){
var statearr_27905_28045 = state_27902__$1;
(statearr_27905_28045[(1)] = (5));

} else {
var statearr_27906_28046 = state_27902__$1;
(statearr_27906_28046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (5))){
var state_27902__$1 = state_27902;
var statearr_27907_28047 = state_27902__$1;
(statearr_27907_28047[(2)] = null);

(statearr_27907_28047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (6))){
var state_27902__$1 = state_27902;
var statearr_27908_28048 = state_27902__$1;
(statearr_27908_28048[(2)] = null);

(statearr_27908_28048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (7))){
var inst_27898 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
var statearr_27909_28049 = state_27902__$1;
(statearr_27909_28049[(2)] = inst_27898);

(statearr_27909_28049[(1)] = (3));


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
});})(__28031,c__27477__auto___28043,G__27862_28032,n__21093__auto___28030,jobs,results,process,async))
;
return ((function (__28031,switch__27365__auto__,c__27477__auto___28043,G__27862_28032,n__21093__auto___28030,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0 = (function (){
var statearr_27913 = [null,null,null,null,null,null,null];
(statearr_27913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__);

(statearr_27913[(1)] = (1));

return statearr_27913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1 = (function (state_27902){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_27902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e27914){if((e27914 instanceof Object)){
var ex__27369__auto__ = e27914;
var statearr_27915_28050 = state_27902;
(statearr_27915_28050[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28051 = state_27902;
state_27902 = G__28051;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__ = function(state_27902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1.call(this,state_27902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__;
})()
;})(__28031,switch__27365__auto__,c__27477__auto___28043,G__27862_28032,n__21093__auto___28030,jobs,results,process,async))
})();
var state__27479__auto__ = (function (){var statearr_27916 = f__27478__auto__.call(null);
(statearr_27916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___28043);

return statearr_27916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(__28031,c__27477__auto___28043,G__27862_28032,n__21093__auto___28030,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28052 = (__28031 + (1));
__28031 = G__28052;
continue;
} else {
}
break;
}

var c__27477__auto___28053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___28053,jobs,results,process,async){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___28053,jobs,results,process,async){
return (function (state_27938){
var state_val_27939 = (state_27938[(1)]);
if((state_val_27939 === (1))){
var state_27938__$1 = state_27938;
var statearr_27940_28054 = state_27938__$1;
(statearr_27940_28054[(2)] = null);

(statearr_27940_28054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (2))){
var state_27938__$1 = state_27938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27938__$1,(4),from);
} else {
if((state_val_27939 === (3))){
var inst_27936 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27938__$1,inst_27936);
} else {
if((state_val_27939 === (4))){
var inst_27919 = (state_27938[(7)]);
var inst_27919__$1 = (state_27938[(2)]);
var inst_27920 = (inst_27919__$1 == null);
var state_27938__$1 = (function (){var statearr_27941 = state_27938;
(statearr_27941[(7)] = inst_27919__$1);

return statearr_27941;
})();
if(cljs.core.truth_(inst_27920)){
var statearr_27942_28055 = state_27938__$1;
(statearr_27942_28055[(1)] = (5));

} else {
var statearr_27943_28056 = state_27938__$1;
(statearr_27943_28056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (5))){
var inst_27922 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27938__$1 = state_27938;
var statearr_27944_28057 = state_27938__$1;
(statearr_27944_28057[(2)] = inst_27922);

(statearr_27944_28057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (6))){
var inst_27919 = (state_27938[(7)]);
var inst_27924 = (state_27938[(8)]);
var inst_27924__$1 = cljs.core.async.chan.call(null,(1));
var inst_27925 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27926 = [inst_27919,inst_27924__$1];
var inst_27927 = (new cljs.core.PersistentVector(null,2,(5),inst_27925,inst_27926,null));
var state_27938__$1 = (function (){var statearr_27945 = state_27938;
(statearr_27945[(8)] = inst_27924__$1);

return statearr_27945;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27938__$1,(8),jobs,inst_27927);
} else {
if((state_val_27939 === (7))){
var inst_27934 = (state_27938[(2)]);
var state_27938__$1 = state_27938;
var statearr_27946_28058 = state_27938__$1;
(statearr_27946_28058[(2)] = inst_27934);

(statearr_27946_28058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27939 === (8))){
var inst_27924 = (state_27938[(8)]);
var inst_27929 = (state_27938[(2)]);
var state_27938__$1 = (function (){var statearr_27947 = state_27938;
(statearr_27947[(9)] = inst_27929);

return statearr_27947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27938__$1,(9),results,inst_27924);
} else {
if((state_val_27939 === (9))){
var inst_27931 = (state_27938[(2)]);
var state_27938__$1 = (function (){var statearr_27948 = state_27938;
(statearr_27948[(10)] = inst_27931);

return statearr_27948;
})();
var statearr_27949_28059 = state_27938__$1;
(statearr_27949_28059[(2)] = null);

(statearr_27949_28059[(1)] = (2));


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
});})(c__27477__auto___28053,jobs,results,process,async))
;
return ((function (switch__27365__auto__,c__27477__auto___28053,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0 = (function (){
var statearr_27953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__);

(statearr_27953[(1)] = (1));

return statearr_27953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1 = (function (state_27938){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_27938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e27954){if((e27954 instanceof Object)){
var ex__27369__auto__ = e27954;
var statearr_27955_28060 = state_27938;
(statearr_27955_28060[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28061 = state_27938;
state_27938 = G__28061;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__ = function(state_27938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1.call(this,state_27938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___28053,jobs,results,process,async))
})();
var state__27479__auto__ = (function (){var statearr_27956 = f__27478__auto__.call(null);
(statearr_27956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___28053);

return statearr_27956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___28053,jobs,results,process,async))
);


var c__27477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto__,jobs,results,process,async){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto__,jobs,results,process,async){
return (function (state_27994){
var state_val_27995 = (state_27994[(1)]);
if((state_val_27995 === (7))){
var inst_27990 = (state_27994[(2)]);
var state_27994__$1 = state_27994;
var statearr_27996_28062 = state_27994__$1;
(statearr_27996_28062[(2)] = inst_27990);

(statearr_27996_28062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (20))){
var state_27994__$1 = state_27994;
var statearr_27997_28063 = state_27994__$1;
(statearr_27997_28063[(2)] = null);

(statearr_27997_28063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (1))){
var state_27994__$1 = state_27994;
var statearr_27998_28064 = state_27994__$1;
(statearr_27998_28064[(2)] = null);

(statearr_27998_28064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (4))){
var inst_27959 = (state_27994[(7)]);
var inst_27959__$1 = (state_27994[(2)]);
var inst_27960 = (inst_27959__$1 == null);
var state_27994__$1 = (function (){var statearr_27999 = state_27994;
(statearr_27999[(7)] = inst_27959__$1);

return statearr_27999;
})();
if(cljs.core.truth_(inst_27960)){
var statearr_28000_28065 = state_27994__$1;
(statearr_28000_28065[(1)] = (5));

} else {
var statearr_28001_28066 = state_27994__$1;
(statearr_28001_28066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (15))){
var inst_27972 = (state_27994[(8)]);
var state_27994__$1 = state_27994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27994__$1,(18),to,inst_27972);
} else {
if((state_val_27995 === (21))){
var inst_27985 = (state_27994[(2)]);
var state_27994__$1 = state_27994;
var statearr_28002_28067 = state_27994__$1;
(statearr_28002_28067[(2)] = inst_27985);

(statearr_28002_28067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (13))){
var inst_27987 = (state_27994[(2)]);
var state_27994__$1 = (function (){var statearr_28003 = state_27994;
(statearr_28003[(9)] = inst_27987);

return statearr_28003;
})();
var statearr_28004_28068 = state_27994__$1;
(statearr_28004_28068[(2)] = null);

(statearr_28004_28068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (6))){
var inst_27959 = (state_27994[(7)]);
var state_27994__$1 = state_27994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27994__$1,(11),inst_27959);
} else {
if((state_val_27995 === (17))){
var inst_27980 = (state_27994[(2)]);
var state_27994__$1 = state_27994;
if(cljs.core.truth_(inst_27980)){
var statearr_28005_28069 = state_27994__$1;
(statearr_28005_28069[(1)] = (19));

} else {
var statearr_28006_28070 = state_27994__$1;
(statearr_28006_28070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (3))){
var inst_27992 = (state_27994[(2)]);
var state_27994__$1 = state_27994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27994__$1,inst_27992);
} else {
if((state_val_27995 === (12))){
var inst_27969 = (state_27994[(10)]);
var state_27994__$1 = state_27994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27994__$1,(14),inst_27969);
} else {
if((state_val_27995 === (2))){
var state_27994__$1 = state_27994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27994__$1,(4),results);
} else {
if((state_val_27995 === (19))){
var state_27994__$1 = state_27994;
var statearr_28007_28071 = state_27994__$1;
(statearr_28007_28071[(2)] = null);

(statearr_28007_28071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (11))){
var inst_27969 = (state_27994[(2)]);
var state_27994__$1 = (function (){var statearr_28008 = state_27994;
(statearr_28008[(10)] = inst_27969);

return statearr_28008;
})();
var statearr_28009_28072 = state_27994__$1;
(statearr_28009_28072[(2)] = null);

(statearr_28009_28072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (9))){
var state_27994__$1 = state_27994;
var statearr_28010_28073 = state_27994__$1;
(statearr_28010_28073[(2)] = null);

(statearr_28010_28073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (5))){
var state_27994__$1 = state_27994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28011_28074 = state_27994__$1;
(statearr_28011_28074[(1)] = (8));

} else {
var statearr_28012_28075 = state_27994__$1;
(statearr_28012_28075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (14))){
var inst_27974 = (state_27994[(11)]);
var inst_27972 = (state_27994[(8)]);
var inst_27972__$1 = (state_27994[(2)]);
var inst_27973 = (inst_27972__$1 == null);
var inst_27974__$1 = cljs.core.not.call(null,inst_27973);
var state_27994__$1 = (function (){var statearr_28013 = state_27994;
(statearr_28013[(11)] = inst_27974__$1);

(statearr_28013[(8)] = inst_27972__$1);

return statearr_28013;
})();
if(inst_27974__$1){
var statearr_28014_28076 = state_27994__$1;
(statearr_28014_28076[(1)] = (15));

} else {
var statearr_28015_28077 = state_27994__$1;
(statearr_28015_28077[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (16))){
var inst_27974 = (state_27994[(11)]);
var state_27994__$1 = state_27994;
var statearr_28016_28078 = state_27994__$1;
(statearr_28016_28078[(2)] = inst_27974);

(statearr_28016_28078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (10))){
var inst_27966 = (state_27994[(2)]);
var state_27994__$1 = state_27994;
var statearr_28017_28079 = state_27994__$1;
(statearr_28017_28079[(2)] = inst_27966);

(statearr_28017_28079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (18))){
var inst_27977 = (state_27994[(2)]);
var state_27994__$1 = state_27994;
var statearr_28018_28080 = state_27994__$1;
(statearr_28018_28080[(2)] = inst_27977);

(statearr_28018_28080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (8))){
var inst_27963 = cljs.core.async.close_BANG_.call(null,to);
var state_27994__$1 = state_27994;
var statearr_28019_28081 = state_27994__$1;
(statearr_28019_28081[(2)] = inst_27963);

(statearr_28019_28081[(1)] = (10));


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
});})(c__27477__auto__,jobs,results,process,async))
;
return ((function (switch__27365__auto__,c__27477__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0 = (function (){
var statearr_28023 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__);

(statearr_28023[(1)] = (1));

return statearr_28023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1 = (function (state_27994){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_27994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e28024){if((e28024 instanceof Object)){
var ex__27369__auto__ = e28024;
var statearr_28025_28082 = state_27994;
(statearr_28025_28082[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28083 = state_27994;
state_27994 = G__28083;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__ = function(state_27994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1.call(this,state_27994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto__,jobs,results,process,async))
})();
var state__27479__auto__ = (function (){var statearr_28026 = f__27478__auto__.call(null);
(statearr_28026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto__);

return statearr_28026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto__,jobs,results,process,async))
);

return c__27477__auto__;
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
var args28084 = [];
var len__21248__auto___28087 = arguments.length;
var i__21249__auto___28088 = (0);
while(true){
if((i__21249__auto___28088 < len__21248__auto___28087)){
args28084.push((arguments[i__21249__auto___28088]));

var G__28089 = (i__21249__auto___28088 + (1));
i__21249__auto___28088 = G__28089;
continue;
} else {
}
break;
}

var G__28086 = args28084.length;
switch (G__28086) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28084.length)].join('')));

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
var args28091 = [];
var len__21248__auto___28094 = arguments.length;
var i__21249__auto___28095 = (0);
while(true){
if((i__21249__auto___28095 < len__21248__auto___28094)){
args28091.push((arguments[i__21249__auto___28095]));

var G__28096 = (i__21249__auto___28095 + (1));
i__21249__auto___28095 = G__28096;
continue;
} else {
}
break;
}

var G__28093 = args28091.length;
switch (G__28093) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28091.length)].join('')));

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
var args28098 = [];
var len__21248__auto___28151 = arguments.length;
var i__21249__auto___28152 = (0);
while(true){
if((i__21249__auto___28152 < len__21248__auto___28151)){
args28098.push((arguments[i__21249__auto___28152]));

var G__28153 = (i__21249__auto___28152 + (1));
i__21249__auto___28152 = G__28153;
continue;
} else {
}
break;
}

var G__28100 = args28098.length;
switch (G__28100) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28098.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27477__auto___28155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___28155,tc,fc){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___28155,tc,fc){
return (function (state_28126){
var state_val_28127 = (state_28126[(1)]);
if((state_val_28127 === (7))){
var inst_28122 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28128_28156 = state_28126__$1;
(statearr_28128_28156[(2)] = inst_28122);

(statearr_28128_28156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (1))){
var state_28126__$1 = state_28126;
var statearr_28129_28157 = state_28126__$1;
(statearr_28129_28157[(2)] = null);

(statearr_28129_28157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (4))){
var inst_28103 = (state_28126[(7)]);
var inst_28103__$1 = (state_28126[(2)]);
var inst_28104 = (inst_28103__$1 == null);
var state_28126__$1 = (function (){var statearr_28130 = state_28126;
(statearr_28130[(7)] = inst_28103__$1);

return statearr_28130;
})();
if(cljs.core.truth_(inst_28104)){
var statearr_28131_28158 = state_28126__$1;
(statearr_28131_28158[(1)] = (5));

} else {
var statearr_28132_28159 = state_28126__$1;
(statearr_28132_28159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (13))){
var state_28126__$1 = state_28126;
var statearr_28133_28160 = state_28126__$1;
(statearr_28133_28160[(2)] = null);

(statearr_28133_28160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (6))){
var inst_28103 = (state_28126[(7)]);
var inst_28109 = p.call(null,inst_28103);
var state_28126__$1 = state_28126;
if(cljs.core.truth_(inst_28109)){
var statearr_28134_28161 = state_28126__$1;
(statearr_28134_28161[(1)] = (9));

} else {
var statearr_28135_28162 = state_28126__$1;
(statearr_28135_28162[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (3))){
var inst_28124 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28126__$1,inst_28124);
} else {
if((state_val_28127 === (12))){
var state_28126__$1 = state_28126;
var statearr_28136_28163 = state_28126__$1;
(statearr_28136_28163[(2)] = null);

(statearr_28136_28163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (2))){
var state_28126__$1 = state_28126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28126__$1,(4),ch);
} else {
if((state_val_28127 === (11))){
var inst_28103 = (state_28126[(7)]);
var inst_28113 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28126__$1,(8),inst_28113,inst_28103);
} else {
if((state_val_28127 === (9))){
var state_28126__$1 = state_28126;
var statearr_28137_28164 = state_28126__$1;
(statearr_28137_28164[(2)] = tc);

(statearr_28137_28164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (5))){
var inst_28106 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28107 = cljs.core.async.close_BANG_.call(null,fc);
var state_28126__$1 = (function (){var statearr_28138 = state_28126;
(statearr_28138[(8)] = inst_28106);

return statearr_28138;
})();
var statearr_28139_28165 = state_28126__$1;
(statearr_28139_28165[(2)] = inst_28107);

(statearr_28139_28165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (14))){
var inst_28120 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28140_28166 = state_28126__$1;
(statearr_28140_28166[(2)] = inst_28120);

(statearr_28140_28166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (10))){
var state_28126__$1 = state_28126;
var statearr_28141_28167 = state_28126__$1;
(statearr_28141_28167[(2)] = fc);

(statearr_28141_28167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (8))){
var inst_28115 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
if(cljs.core.truth_(inst_28115)){
var statearr_28142_28168 = state_28126__$1;
(statearr_28142_28168[(1)] = (12));

} else {
var statearr_28143_28169 = state_28126__$1;
(statearr_28143_28169[(1)] = (13));

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
});})(c__27477__auto___28155,tc,fc))
;
return ((function (switch__27365__auto__,c__27477__auto___28155,tc,fc){
return (function() {
var cljs$core$async$state_machine__27366__auto__ = null;
var cljs$core$async$state_machine__27366__auto____0 = (function (){
var statearr_28147 = [null,null,null,null,null,null,null,null,null];
(statearr_28147[(0)] = cljs$core$async$state_machine__27366__auto__);

(statearr_28147[(1)] = (1));

return statearr_28147;
});
var cljs$core$async$state_machine__27366__auto____1 = (function (state_28126){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_28126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e28148){if((e28148 instanceof Object)){
var ex__27369__auto__ = e28148;
var statearr_28149_28170 = state_28126;
(statearr_28149_28170[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28171 = state_28126;
state_28126 = G__28171;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$state_machine__27366__auto__ = function(state_28126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27366__auto____1.call(this,state_28126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27366__auto____0;
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27366__auto____1;
return cljs$core$async$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___28155,tc,fc))
})();
var state__27479__auto__ = (function (){var statearr_28150 = f__27478__auto__.call(null);
(statearr_28150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___28155);

return statearr_28150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___28155,tc,fc))
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
var c__27477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto__){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto__){
return (function (state_28235){
var state_val_28236 = (state_28235[(1)]);
if((state_val_28236 === (7))){
var inst_28231 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
var statearr_28237_28258 = state_28235__$1;
(statearr_28237_28258[(2)] = inst_28231);

(statearr_28237_28258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (1))){
var inst_28215 = init;
var state_28235__$1 = (function (){var statearr_28238 = state_28235;
(statearr_28238[(7)] = inst_28215);

return statearr_28238;
})();
var statearr_28239_28259 = state_28235__$1;
(statearr_28239_28259[(2)] = null);

(statearr_28239_28259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (4))){
var inst_28218 = (state_28235[(8)]);
var inst_28218__$1 = (state_28235[(2)]);
var inst_28219 = (inst_28218__$1 == null);
var state_28235__$1 = (function (){var statearr_28240 = state_28235;
(statearr_28240[(8)] = inst_28218__$1);

return statearr_28240;
})();
if(cljs.core.truth_(inst_28219)){
var statearr_28241_28260 = state_28235__$1;
(statearr_28241_28260[(1)] = (5));

} else {
var statearr_28242_28261 = state_28235__$1;
(statearr_28242_28261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (6))){
var inst_28222 = (state_28235[(9)]);
var inst_28218 = (state_28235[(8)]);
var inst_28215 = (state_28235[(7)]);
var inst_28222__$1 = f.call(null,inst_28215,inst_28218);
var inst_28223 = cljs.core.reduced_QMARK_.call(null,inst_28222__$1);
var state_28235__$1 = (function (){var statearr_28243 = state_28235;
(statearr_28243[(9)] = inst_28222__$1);

return statearr_28243;
})();
if(inst_28223){
var statearr_28244_28262 = state_28235__$1;
(statearr_28244_28262[(1)] = (8));

} else {
var statearr_28245_28263 = state_28235__$1;
(statearr_28245_28263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (3))){
var inst_28233 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28235__$1,inst_28233);
} else {
if((state_val_28236 === (2))){
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28235__$1,(4),ch);
} else {
if((state_val_28236 === (9))){
var inst_28222 = (state_28235[(9)]);
var inst_28215 = inst_28222;
var state_28235__$1 = (function (){var statearr_28246 = state_28235;
(statearr_28246[(7)] = inst_28215);

return statearr_28246;
})();
var statearr_28247_28264 = state_28235__$1;
(statearr_28247_28264[(2)] = null);

(statearr_28247_28264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (5))){
var inst_28215 = (state_28235[(7)]);
var state_28235__$1 = state_28235;
var statearr_28248_28265 = state_28235__$1;
(statearr_28248_28265[(2)] = inst_28215);

(statearr_28248_28265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (10))){
var inst_28229 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
var statearr_28249_28266 = state_28235__$1;
(statearr_28249_28266[(2)] = inst_28229);

(statearr_28249_28266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (8))){
var inst_28222 = (state_28235[(9)]);
var inst_28225 = cljs.core.deref.call(null,inst_28222);
var state_28235__$1 = state_28235;
var statearr_28250_28267 = state_28235__$1;
(statearr_28250_28267[(2)] = inst_28225);

(statearr_28250_28267[(1)] = (10));


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
});})(c__27477__auto__))
;
return ((function (switch__27365__auto__,c__27477__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27366__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27366__auto____0 = (function (){
var statearr_28254 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28254[(0)] = cljs$core$async$reduce_$_state_machine__27366__auto__);

(statearr_28254[(1)] = (1));

return statearr_28254;
});
var cljs$core$async$reduce_$_state_machine__27366__auto____1 = (function (state_28235){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_28235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e28255){if((e28255 instanceof Object)){
var ex__27369__auto__ = e28255;
var statearr_28256_28268 = state_28235;
(statearr_28256_28268[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28269 = state_28235;
state_28235 = G__28269;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27366__auto__ = function(state_28235){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27366__auto____1.call(this,state_28235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27366__auto____0;
cljs$core$async$reduce_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27366__auto____1;
return cljs$core$async$reduce_$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto__))
})();
var state__27479__auto__ = (function (){var statearr_28257 = f__27478__auto__.call(null);
(statearr_28257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto__);

return statearr_28257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto__))
);

return c__27477__auto__;
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
var args28270 = [];
var len__21248__auto___28322 = arguments.length;
var i__21249__auto___28323 = (0);
while(true){
if((i__21249__auto___28323 < len__21248__auto___28322)){
args28270.push((arguments[i__21249__auto___28323]));

var G__28324 = (i__21249__auto___28323 + (1));
i__21249__auto___28323 = G__28324;
continue;
} else {
}
break;
}

var G__28272 = args28270.length;
switch (G__28272) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28270.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto__){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto__){
return (function (state_28297){
var state_val_28298 = (state_28297[(1)]);
if((state_val_28298 === (7))){
var inst_28279 = (state_28297[(2)]);
var state_28297__$1 = state_28297;
var statearr_28299_28326 = state_28297__$1;
(statearr_28299_28326[(2)] = inst_28279);

(statearr_28299_28326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (1))){
var inst_28273 = cljs.core.seq.call(null,coll);
var inst_28274 = inst_28273;
var state_28297__$1 = (function (){var statearr_28300 = state_28297;
(statearr_28300[(7)] = inst_28274);

return statearr_28300;
})();
var statearr_28301_28327 = state_28297__$1;
(statearr_28301_28327[(2)] = null);

(statearr_28301_28327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (4))){
var inst_28274 = (state_28297[(7)]);
var inst_28277 = cljs.core.first.call(null,inst_28274);
var state_28297__$1 = state_28297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28297__$1,(7),ch,inst_28277);
} else {
if((state_val_28298 === (13))){
var inst_28291 = (state_28297[(2)]);
var state_28297__$1 = state_28297;
var statearr_28302_28328 = state_28297__$1;
(statearr_28302_28328[(2)] = inst_28291);

(statearr_28302_28328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (6))){
var inst_28282 = (state_28297[(2)]);
var state_28297__$1 = state_28297;
if(cljs.core.truth_(inst_28282)){
var statearr_28303_28329 = state_28297__$1;
(statearr_28303_28329[(1)] = (8));

} else {
var statearr_28304_28330 = state_28297__$1;
(statearr_28304_28330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (3))){
var inst_28295 = (state_28297[(2)]);
var state_28297__$1 = state_28297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28297__$1,inst_28295);
} else {
if((state_val_28298 === (12))){
var state_28297__$1 = state_28297;
var statearr_28305_28331 = state_28297__$1;
(statearr_28305_28331[(2)] = null);

(statearr_28305_28331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (2))){
var inst_28274 = (state_28297[(7)]);
var state_28297__$1 = state_28297;
if(cljs.core.truth_(inst_28274)){
var statearr_28306_28332 = state_28297__$1;
(statearr_28306_28332[(1)] = (4));

} else {
var statearr_28307_28333 = state_28297__$1;
(statearr_28307_28333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (11))){
var inst_28288 = cljs.core.async.close_BANG_.call(null,ch);
var state_28297__$1 = state_28297;
var statearr_28308_28334 = state_28297__$1;
(statearr_28308_28334[(2)] = inst_28288);

(statearr_28308_28334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (9))){
var state_28297__$1 = state_28297;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28309_28335 = state_28297__$1;
(statearr_28309_28335[(1)] = (11));

} else {
var statearr_28310_28336 = state_28297__$1;
(statearr_28310_28336[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (5))){
var inst_28274 = (state_28297[(7)]);
var state_28297__$1 = state_28297;
var statearr_28311_28337 = state_28297__$1;
(statearr_28311_28337[(2)] = inst_28274);

(statearr_28311_28337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (10))){
var inst_28293 = (state_28297[(2)]);
var state_28297__$1 = state_28297;
var statearr_28312_28338 = state_28297__$1;
(statearr_28312_28338[(2)] = inst_28293);

(statearr_28312_28338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (8))){
var inst_28274 = (state_28297[(7)]);
var inst_28284 = cljs.core.next.call(null,inst_28274);
var inst_28274__$1 = inst_28284;
var state_28297__$1 = (function (){var statearr_28313 = state_28297;
(statearr_28313[(7)] = inst_28274__$1);

return statearr_28313;
})();
var statearr_28314_28339 = state_28297__$1;
(statearr_28314_28339[(2)] = null);

(statearr_28314_28339[(1)] = (2));


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
});})(c__27477__auto__))
;
return ((function (switch__27365__auto__,c__27477__auto__){
return (function() {
var cljs$core$async$state_machine__27366__auto__ = null;
var cljs$core$async$state_machine__27366__auto____0 = (function (){
var statearr_28318 = [null,null,null,null,null,null,null,null];
(statearr_28318[(0)] = cljs$core$async$state_machine__27366__auto__);

(statearr_28318[(1)] = (1));

return statearr_28318;
});
var cljs$core$async$state_machine__27366__auto____1 = (function (state_28297){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_28297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e28319){if((e28319 instanceof Object)){
var ex__27369__auto__ = e28319;
var statearr_28320_28340 = state_28297;
(statearr_28320_28340[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28341 = state_28297;
state_28297 = G__28341;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$state_machine__27366__auto__ = function(state_28297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27366__auto____1.call(this,state_28297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27366__auto____0;
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27366__auto____1;
return cljs$core$async$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto__))
})();
var state__27479__auto__ = (function (){var statearr_28321 = f__27478__auto__.call(null);
(statearr_28321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto__);

return statearr_28321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto__))
);

return c__27477__auto__;
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
var x__20845__auto__ = (((_ == null))?null:_);
var m__20846__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,_);
} else {
var m__20846__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,_);
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
var x__20845__auto__ = (((m == null))?null:m);
var m__20846__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20846__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__20845__auto__ = (((m == null))?null:m);
var m__20846__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,m,ch);
} else {
var m__20846__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,m,ch);
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
var x__20845__auto__ = (((m == null))?null:m);
var m__20846__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,m);
} else {
var m__20846__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28563 = (function (mult,ch,cs,meta28564){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28564 = meta28564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28565,meta28564__$1){
var self__ = this;
var _28565__$1 = this;
return (new cljs.core.async.t_cljs$core$async28563(self__.mult,self__.ch,self__.cs,meta28564__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28565){
var self__ = this;
var _28565__$1 = this;
return self__.meta28564;
});})(cs))
;

cljs.core.async.t_cljs$core$async28563.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28563.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28563.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28563.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28563.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28563.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28564","meta28564",1087231660,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28563";

cljs.core.async.t_cljs$core$async28563.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"cljs.core.async/t_cljs$core$async28563");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28563 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28563(mult__$1,ch__$1,cs__$1,meta28564){
return (new cljs.core.async.t_cljs$core$async28563(mult__$1,ch__$1,cs__$1,meta28564));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28563(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27477__auto___28784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___28784,cs,m,dchan,dctr,done){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___28784,cs,m,dchan,dctr,done){
return (function (state_28696){
var state_val_28697 = (state_28696[(1)]);
if((state_val_28697 === (7))){
var inst_28692 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28698_28785 = state_28696__$1;
(statearr_28698_28785[(2)] = inst_28692);

(statearr_28698_28785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (20))){
var inst_28597 = (state_28696[(7)]);
var inst_28607 = cljs.core.first.call(null,inst_28597);
var inst_28608 = cljs.core.nth.call(null,inst_28607,(0),null);
var inst_28609 = cljs.core.nth.call(null,inst_28607,(1),null);
var state_28696__$1 = (function (){var statearr_28699 = state_28696;
(statearr_28699[(8)] = inst_28608);

return statearr_28699;
})();
if(cljs.core.truth_(inst_28609)){
var statearr_28700_28786 = state_28696__$1;
(statearr_28700_28786[(1)] = (22));

} else {
var statearr_28701_28787 = state_28696__$1;
(statearr_28701_28787[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (27))){
var inst_28568 = (state_28696[(9)]);
var inst_28637 = (state_28696[(10)]);
var inst_28639 = (state_28696[(11)]);
var inst_28644 = (state_28696[(12)]);
var inst_28644__$1 = cljs.core._nth.call(null,inst_28637,inst_28639);
var inst_28645 = cljs.core.async.put_BANG_.call(null,inst_28644__$1,inst_28568,done);
var state_28696__$1 = (function (){var statearr_28702 = state_28696;
(statearr_28702[(12)] = inst_28644__$1);

return statearr_28702;
})();
if(cljs.core.truth_(inst_28645)){
var statearr_28703_28788 = state_28696__$1;
(statearr_28703_28788[(1)] = (30));

} else {
var statearr_28704_28789 = state_28696__$1;
(statearr_28704_28789[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (1))){
var state_28696__$1 = state_28696;
var statearr_28705_28790 = state_28696__$1;
(statearr_28705_28790[(2)] = null);

(statearr_28705_28790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (24))){
var inst_28597 = (state_28696[(7)]);
var inst_28614 = (state_28696[(2)]);
var inst_28615 = cljs.core.next.call(null,inst_28597);
var inst_28577 = inst_28615;
var inst_28578 = null;
var inst_28579 = (0);
var inst_28580 = (0);
var state_28696__$1 = (function (){var statearr_28706 = state_28696;
(statearr_28706[(13)] = inst_28614);

(statearr_28706[(14)] = inst_28578);

(statearr_28706[(15)] = inst_28579);

(statearr_28706[(16)] = inst_28577);

(statearr_28706[(17)] = inst_28580);

return statearr_28706;
})();
var statearr_28707_28791 = state_28696__$1;
(statearr_28707_28791[(2)] = null);

(statearr_28707_28791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (39))){
var state_28696__$1 = state_28696;
var statearr_28711_28792 = state_28696__$1;
(statearr_28711_28792[(2)] = null);

(statearr_28711_28792[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (4))){
var inst_28568 = (state_28696[(9)]);
var inst_28568__$1 = (state_28696[(2)]);
var inst_28569 = (inst_28568__$1 == null);
var state_28696__$1 = (function (){var statearr_28712 = state_28696;
(statearr_28712[(9)] = inst_28568__$1);

return statearr_28712;
})();
if(cljs.core.truth_(inst_28569)){
var statearr_28713_28793 = state_28696__$1;
(statearr_28713_28793[(1)] = (5));

} else {
var statearr_28714_28794 = state_28696__$1;
(statearr_28714_28794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (15))){
var inst_28578 = (state_28696[(14)]);
var inst_28579 = (state_28696[(15)]);
var inst_28577 = (state_28696[(16)]);
var inst_28580 = (state_28696[(17)]);
var inst_28593 = (state_28696[(2)]);
var inst_28594 = (inst_28580 + (1));
var tmp28708 = inst_28578;
var tmp28709 = inst_28579;
var tmp28710 = inst_28577;
var inst_28577__$1 = tmp28710;
var inst_28578__$1 = tmp28708;
var inst_28579__$1 = tmp28709;
var inst_28580__$1 = inst_28594;
var state_28696__$1 = (function (){var statearr_28715 = state_28696;
(statearr_28715[(14)] = inst_28578__$1);

(statearr_28715[(15)] = inst_28579__$1);

(statearr_28715[(16)] = inst_28577__$1);

(statearr_28715[(17)] = inst_28580__$1);

(statearr_28715[(18)] = inst_28593);

return statearr_28715;
})();
var statearr_28716_28795 = state_28696__$1;
(statearr_28716_28795[(2)] = null);

(statearr_28716_28795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (21))){
var inst_28618 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28720_28796 = state_28696__$1;
(statearr_28720_28796[(2)] = inst_28618);

(statearr_28720_28796[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (31))){
var inst_28644 = (state_28696[(12)]);
var inst_28648 = done.call(null,null);
var inst_28649 = cljs.core.async.untap_STAR_.call(null,m,inst_28644);
var state_28696__$1 = (function (){var statearr_28721 = state_28696;
(statearr_28721[(19)] = inst_28648);

return statearr_28721;
})();
var statearr_28722_28797 = state_28696__$1;
(statearr_28722_28797[(2)] = inst_28649);

(statearr_28722_28797[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (32))){
var inst_28638 = (state_28696[(20)]);
var inst_28636 = (state_28696[(21)]);
var inst_28637 = (state_28696[(10)]);
var inst_28639 = (state_28696[(11)]);
var inst_28651 = (state_28696[(2)]);
var inst_28652 = (inst_28639 + (1));
var tmp28717 = inst_28638;
var tmp28718 = inst_28636;
var tmp28719 = inst_28637;
var inst_28636__$1 = tmp28718;
var inst_28637__$1 = tmp28719;
var inst_28638__$1 = tmp28717;
var inst_28639__$1 = inst_28652;
var state_28696__$1 = (function (){var statearr_28723 = state_28696;
(statearr_28723[(20)] = inst_28638__$1);

(statearr_28723[(21)] = inst_28636__$1);

(statearr_28723[(10)] = inst_28637__$1);

(statearr_28723[(11)] = inst_28639__$1);

(statearr_28723[(22)] = inst_28651);

return statearr_28723;
})();
var statearr_28724_28798 = state_28696__$1;
(statearr_28724_28798[(2)] = null);

(statearr_28724_28798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (40))){
var inst_28664 = (state_28696[(23)]);
var inst_28668 = done.call(null,null);
var inst_28669 = cljs.core.async.untap_STAR_.call(null,m,inst_28664);
var state_28696__$1 = (function (){var statearr_28725 = state_28696;
(statearr_28725[(24)] = inst_28668);

return statearr_28725;
})();
var statearr_28726_28799 = state_28696__$1;
(statearr_28726_28799[(2)] = inst_28669);

(statearr_28726_28799[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (33))){
var inst_28655 = (state_28696[(25)]);
var inst_28657 = cljs.core.chunked_seq_QMARK_.call(null,inst_28655);
var state_28696__$1 = state_28696;
if(inst_28657){
var statearr_28727_28800 = state_28696__$1;
(statearr_28727_28800[(1)] = (36));

} else {
var statearr_28728_28801 = state_28696__$1;
(statearr_28728_28801[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (13))){
var inst_28587 = (state_28696[(26)]);
var inst_28590 = cljs.core.async.close_BANG_.call(null,inst_28587);
var state_28696__$1 = state_28696;
var statearr_28729_28802 = state_28696__$1;
(statearr_28729_28802[(2)] = inst_28590);

(statearr_28729_28802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (22))){
var inst_28608 = (state_28696[(8)]);
var inst_28611 = cljs.core.async.close_BANG_.call(null,inst_28608);
var state_28696__$1 = state_28696;
var statearr_28730_28803 = state_28696__$1;
(statearr_28730_28803[(2)] = inst_28611);

(statearr_28730_28803[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (36))){
var inst_28655 = (state_28696[(25)]);
var inst_28659 = cljs.core.chunk_first.call(null,inst_28655);
var inst_28660 = cljs.core.chunk_rest.call(null,inst_28655);
var inst_28661 = cljs.core.count.call(null,inst_28659);
var inst_28636 = inst_28660;
var inst_28637 = inst_28659;
var inst_28638 = inst_28661;
var inst_28639 = (0);
var state_28696__$1 = (function (){var statearr_28731 = state_28696;
(statearr_28731[(20)] = inst_28638);

(statearr_28731[(21)] = inst_28636);

(statearr_28731[(10)] = inst_28637);

(statearr_28731[(11)] = inst_28639);

return statearr_28731;
})();
var statearr_28732_28804 = state_28696__$1;
(statearr_28732_28804[(2)] = null);

(statearr_28732_28804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (41))){
var inst_28655 = (state_28696[(25)]);
var inst_28671 = (state_28696[(2)]);
var inst_28672 = cljs.core.next.call(null,inst_28655);
var inst_28636 = inst_28672;
var inst_28637 = null;
var inst_28638 = (0);
var inst_28639 = (0);
var state_28696__$1 = (function (){var statearr_28733 = state_28696;
(statearr_28733[(20)] = inst_28638);

(statearr_28733[(27)] = inst_28671);

(statearr_28733[(21)] = inst_28636);

(statearr_28733[(10)] = inst_28637);

(statearr_28733[(11)] = inst_28639);

return statearr_28733;
})();
var statearr_28734_28805 = state_28696__$1;
(statearr_28734_28805[(2)] = null);

(statearr_28734_28805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (43))){
var state_28696__$1 = state_28696;
var statearr_28735_28806 = state_28696__$1;
(statearr_28735_28806[(2)] = null);

(statearr_28735_28806[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (29))){
var inst_28680 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28736_28807 = state_28696__$1;
(statearr_28736_28807[(2)] = inst_28680);

(statearr_28736_28807[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (44))){
var inst_28689 = (state_28696[(2)]);
var state_28696__$1 = (function (){var statearr_28737 = state_28696;
(statearr_28737[(28)] = inst_28689);

return statearr_28737;
})();
var statearr_28738_28808 = state_28696__$1;
(statearr_28738_28808[(2)] = null);

(statearr_28738_28808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (6))){
var inst_28628 = (state_28696[(29)]);
var inst_28627 = cljs.core.deref.call(null,cs);
var inst_28628__$1 = cljs.core.keys.call(null,inst_28627);
var inst_28629 = cljs.core.count.call(null,inst_28628__$1);
var inst_28630 = cljs.core.reset_BANG_.call(null,dctr,inst_28629);
var inst_28635 = cljs.core.seq.call(null,inst_28628__$1);
var inst_28636 = inst_28635;
var inst_28637 = null;
var inst_28638 = (0);
var inst_28639 = (0);
var state_28696__$1 = (function (){var statearr_28739 = state_28696;
(statearr_28739[(20)] = inst_28638);

(statearr_28739[(21)] = inst_28636);

(statearr_28739[(29)] = inst_28628__$1);

(statearr_28739[(10)] = inst_28637);

(statearr_28739[(30)] = inst_28630);

(statearr_28739[(11)] = inst_28639);

return statearr_28739;
})();
var statearr_28740_28809 = state_28696__$1;
(statearr_28740_28809[(2)] = null);

(statearr_28740_28809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (28))){
var inst_28636 = (state_28696[(21)]);
var inst_28655 = (state_28696[(25)]);
var inst_28655__$1 = cljs.core.seq.call(null,inst_28636);
var state_28696__$1 = (function (){var statearr_28741 = state_28696;
(statearr_28741[(25)] = inst_28655__$1);

return statearr_28741;
})();
if(inst_28655__$1){
var statearr_28742_28810 = state_28696__$1;
(statearr_28742_28810[(1)] = (33));

} else {
var statearr_28743_28811 = state_28696__$1;
(statearr_28743_28811[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (25))){
var inst_28638 = (state_28696[(20)]);
var inst_28639 = (state_28696[(11)]);
var inst_28641 = (inst_28639 < inst_28638);
var inst_28642 = inst_28641;
var state_28696__$1 = state_28696;
if(cljs.core.truth_(inst_28642)){
var statearr_28744_28812 = state_28696__$1;
(statearr_28744_28812[(1)] = (27));

} else {
var statearr_28745_28813 = state_28696__$1;
(statearr_28745_28813[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (34))){
var state_28696__$1 = state_28696;
var statearr_28746_28814 = state_28696__$1;
(statearr_28746_28814[(2)] = null);

(statearr_28746_28814[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (17))){
var state_28696__$1 = state_28696;
var statearr_28747_28815 = state_28696__$1;
(statearr_28747_28815[(2)] = null);

(statearr_28747_28815[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (3))){
var inst_28694 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28696__$1,inst_28694);
} else {
if((state_val_28697 === (12))){
var inst_28623 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28748_28816 = state_28696__$1;
(statearr_28748_28816[(2)] = inst_28623);

(statearr_28748_28816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (2))){
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28696__$1,(4),ch);
} else {
if((state_val_28697 === (23))){
var state_28696__$1 = state_28696;
var statearr_28749_28817 = state_28696__$1;
(statearr_28749_28817[(2)] = null);

(statearr_28749_28817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (35))){
var inst_28678 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28750_28818 = state_28696__$1;
(statearr_28750_28818[(2)] = inst_28678);

(statearr_28750_28818[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (19))){
var inst_28597 = (state_28696[(7)]);
var inst_28601 = cljs.core.chunk_first.call(null,inst_28597);
var inst_28602 = cljs.core.chunk_rest.call(null,inst_28597);
var inst_28603 = cljs.core.count.call(null,inst_28601);
var inst_28577 = inst_28602;
var inst_28578 = inst_28601;
var inst_28579 = inst_28603;
var inst_28580 = (0);
var state_28696__$1 = (function (){var statearr_28751 = state_28696;
(statearr_28751[(14)] = inst_28578);

(statearr_28751[(15)] = inst_28579);

(statearr_28751[(16)] = inst_28577);

(statearr_28751[(17)] = inst_28580);

return statearr_28751;
})();
var statearr_28752_28819 = state_28696__$1;
(statearr_28752_28819[(2)] = null);

(statearr_28752_28819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (11))){
var inst_28577 = (state_28696[(16)]);
var inst_28597 = (state_28696[(7)]);
var inst_28597__$1 = cljs.core.seq.call(null,inst_28577);
var state_28696__$1 = (function (){var statearr_28753 = state_28696;
(statearr_28753[(7)] = inst_28597__$1);

return statearr_28753;
})();
if(inst_28597__$1){
var statearr_28754_28820 = state_28696__$1;
(statearr_28754_28820[(1)] = (16));

} else {
var statearr_28755_28821 = state_28696__$1;
(statearr_28755_28821[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (9))){
var inst_28625 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28756_28822 = state_28696__$1;
(statearr_28756_28822[(2)] = inst_28625);

(statearr_28756_28822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (5))){
var inst_28575 = cljs.core.deref.call(null,cs);
var inst_28576 = cljs.core.seq.call(null,inst_28575);
var inst_28577 = inst_28576;
var inst_28578 = null;
var inst_28579 = (0);
var inst_28580 = (0);
var state_28696__$1 = (function (){var statearr_28757 = state_28696;
(statearr_28757[(14)] = inst_28578);

(statearr_28757[(15)] = inst_28579);

(statearr_28757[(16)] = inst_28577);

(statearr_28757[(17)] = inst_28580);

return statearr_28757;
})();
var statearr_28758_28823 = state_28696__$1;
(statearr_28758_28823[(2)] = null);

(statearr_28758_28823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (14))){
var state_28696__$1 = state_28696;
var statearr_28759_28824 = state_28696__$1;
(statearr_28759_28824[(2)] = null);

(statearr_28759_28824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (45))){
var inst_28686 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28760_28825 = state_28696__$1;
(statearr_28760_28825[(2)] = inst_28686);

(statearr_28760_28825[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (26))){
var inst_28628 = (state_28696[(29)]);
var inst_28682 = (state_28696[(2)]);
var inst_28683 = cljs.core.seq.call(null,inst_28628);
var state_28696__$1 = (function (){var statearr_28761 = state_28696;
(statearr_28761[(31)] = inst_28682);

return statearr_28761;
})();
if(inst_28683){
var statearr_28762_28826 = state_28696__$1;
(statearr_28762_28826[(1)] = (42));

} else {
var statearr_28763_28827 = state_28696__$1;
(statearr_28763_28827[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (16))){
var inst_28597 = (state_28696[(7)]);
var inst_28599 = cljs.core.chunked_seq_QMARK_.call(null,inst_28597);
var state_28696__$1 = state_28696;
if(inst_28599){
var statearr_28764_28828 = state_28696__$1;
(statearr_28764_28828[(1)] = (19));

} else {
var statearr_28765_28829 = state_28696__$1;
(statearr_28765_28829[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (38))){
var inst_28675 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28766_28830 = state_28696__$1;
(statearr_28766_28830[(2)] = inst_28675);

(statearr_28766_28830[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (30))){
var state_28696__$1 = state_28696;
var statearr_28767_28831 = state_28696__$1;
(statearr_28767_28831[(2)] = null);

(statearr_28767_28831[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (10))){
var inst_28578 = (state_28696[(14)]);
var inst_28580 = (state_28696[(17)]);
var inst_28586 = cljs.core._nth.call(null,inst_28578,inst_28580);
var inst_28587 = cljs.core.nth.call(null,inst_28586,(0),null);
var inst_28588 = cljs.core.nth.call(null,inst_28586,(1),null);
var state_28696__$1 = (function (){var statearr_28768 = state_28696;
(statearr_28768[(26)] = inst_28587);

return statearr_28768;
})();
if(cljs.core.truth_(inst_28588)){
var statearr_28769_28832 = state_28696__$1;
(statearr_28769_28832[(1)] = (13));

} else {
var statearr_28770_28833 = state_28696__$1;
(statearr_28770_28833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (18))){
var inst_28621 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28771_28834 = state_28696__$1;
(statearr_28771_28834[(2)] = inst_28621);

(statearr_28771_28834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (42))){
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28696__$1,(45),dchan);
} else {
if((state_val_28697 === (37))){
var inst_28664 = (state_28696[(23)]);
var inst_28568 = (state_28696[(9)]);
var inst_28655 = (state_28696[(25)]);
var inst_28664__$1 = cljs.core.first.call(null,inst_28655);
var inst_28665 = cljs.core.async.put_BANG_.call(null,inst_28664__$1,inst_28568,done);
var state_28696__$1 = (function (){var statearr_28772 = state_28696;
(statearr_28772[(23)] = inst_28664__$1);

return statearr_28772;
})();
if(cljs.core.truth_(inst_28665)){
var statearr_28773_28835 = state_28696__$1;
(statearr_28773_28835[(1)] = (39));

} else {
var statearr_28774_28836 = state_28696__$1;
(statearr_28774_28836[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (8))){
var inst_28579 = (state_28696[(15)]);
var inst_28580 = (state_28696[(17)]);
var inst_28582 = (inst_28580 < inst_28579);
var inst_28583 = inst_28582;
var state_28696__$1 = state_28696;
if(cljs.core.truth_(inst_28583)){
var statearr_28775_28837 = state_28696__$1;
(statearr_28775_28837[(1)] = (10));

} else {
var statearr_28776_28838 = state_28696__$1;
(statearr_28776_28838[(1)] = (11));

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
});})(c__27477__auto___28784,cs,m,dchan,dctr,done))
;
return ((function (switch__27365__auto__,c__27477__auto___28784,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27366__auto__ = null;
var cljs$core$async$mult_$_state_machine__27366__auto____0 = (function (){
var statearr_28780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28780[(0)] = cljs$core$async$mult_$_state_machine__27366__auto__);

(statearr_28780[(1)] = (1));

return statearr_28780;
});
var cljs$core$async$mult_$_state_machine__27366__auto____1 = (function (state_28696){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_28696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e28781){if((e28781 instanceof Object)){
var ex__27369__auto__ = e28781;
var statearr_28782_28839 = state_28696;
(statearr_28782_28839[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28840 = state_28696;
state_28696 = G__28840;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27366__auto__ = function(state_28696){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27366__auto____1.call(this,state_28696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27366__auto____0;
cljs$core$async$mult_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27366__auto____1;
return cljs$core$async$mult_$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___28784,cs,m,dchan,dctr,done))
})();
var state__27479__auto__ = (function (){var statearr_28783 = f__27478__auto__.call(null);
(statearr_28783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___28784);

return statearr_28783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___28784,cs,m,dchan,dctr,done))
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
var args28841 = [];
var len__21248__auto___28844 = arguments.length;
var i__21249__auto___28845 = (0);
while(true){
if((i__21249__auto___28845 < len__21248__auto___28844)){
args28841.push((arguments[i__21249__auto___28845]));

var G__28846 = (i__21249__auto___28845 + (1));
i__21249__auto___28845 = G__28846;
continue;
} else {
}
break;
}

var G__28843 = args28841.length;
switch (G__28843) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28841.length)].join('')));

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
var x__20845__auto__ = (((m == null))?null:m);
var m__20846__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,m,ch);
} else {
var m__20846__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,m,ch);
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
var x__20845__auto__ = (((m == null))?null:m);
var m__20846__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,m,ch);
} else {
var m__20846__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,m,ch);
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
var x__20845__auto__ = (((m == null))?null:m);
var m__20846__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,m);
} else {
var m__20846__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,m);
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
var x__20845__auto__ = (((m == null))?null:m);
var m__20846__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,m,state_map);
} else {
var m__20846__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,m,state_map);
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
var x__20845__auto__ = (((m == null))?null:m);
var m__20846__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,m,mode);
} else {
var m__20846__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21255__auto__ = [];
var len__21248__auto___28858 = arguments.length;
var i__21249__auto___28859 = (0);
while(true){
if((i__21249__auto___28859 < len__21248__auto___28858)){
args__21255__auto__.push((arguments[i__21249__auto___28859]));

var G__28860 = (i__21249__auto___28859 + (1));
i__21249__auto___28859 = G__28860;
continue;
} else {
}
break;
}

var argseq__21256__auto__ = ((((3) < args__21255__auto__.length))?(new cljs.core.IndexedSeq(args__21255__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21256__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28852){
var map__28853 = p__28852;
var map__28853__$1 = ((((!((map__28853 == null)))?((((map__28853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28853):map__28853);
var opts = map__28853__$1;
var statearr_28855_28861 = state;
(statearr_28855_28861[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28853,map__28853__$1,opts){
return (function (val){
var statearr_28856_28862 = state;
(statearr_28856_28862[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28853,map__28853__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28857_28863 = state;
(statearr_28857_28863[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28848){
var G__28849 = cljs.core.first.call(null,seq28848);
var seq28848__$1 = cljs.core.next.call(null,seq28848);
var G__28850 = cljs.core.first.call(null,seq28848__$1);
var seq28848__$2 = cljs.core.next.call(null,seq28848__$1);
var G__28851 = cljs.core.first.call(null,seq28848__$2);
var seq28848__$3 = cljs.core.next.call(null,seq28848__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28849,G__28850,G__28851,seq28848__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29027 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29028){
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
this.meta29028 = meta29028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29029,meta29028__$1){
var self__ = this;
var _29029__$1 = this;
return (new cljs.core.async.t_cljs$core$async29027(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29028__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29029){
var self__ = this;
var _29029__$1 = this;
return self__.meta29028;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29027.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29027.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29027.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29027.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29027.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29027.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29027.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29027.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29028","meta29028",-1275305118,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29027";

cljs.core.async.t_cljs$core$async29027.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"cljs.core.async/t_cljs$core$async29027");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29027 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29027(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29028){
return (new cljs.core.async.t_cljs$core$async29027(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29028));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29027(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27477__auto___29190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___29190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___29190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29127){
var state_val_29128 = (state_29127[(1)]);
if((state_val_29128 === (7))){
var inst_29045 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29129_29191 = state_29127__$1;
(statearr_29129_29191[(2)] = inst_29045);

(statearr_29129_29191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (20))){
var inst_29057 = (state_29127[(7)]);
var state_29127__$1 = state_29127;
var statearr_29130_29192 = state_29127__$1;
(statearr_29130_29192[(2)] = inst_29057);

(statearr_29130_29192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (27))){
var state_29127__$1 = state_29127;
var statearr_29131_29193 = state_29127__$1;
(statearr_29131_29193[(2)] = null);

(statearr_29131_29193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (1))){
var inst_29033 = (state_29127[(8)]);
var inst_29033__$1 = calc_state.call(null);
var inst_29035 = (inst_29033__$1 == null);
var inst_29036 = cljs.core.not.call(null,inst_29035);
var state_29127__$1 = (function (){var statearr_29132 = state_29127;
(statearr_29132[(8)] = inst_29033__$1);

return statearr_29132;
})();
if(inst_29036){
var statearr_29133_29194 = state_29127__$1;
(statearr_29133_29194[(1)] = (2));

} else {
var statearr_29134_29195 = state_29127__$1;
(statearr_29134_29195[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (24))){
var inst_29080 = (state_29127[(9)]);
var inst_29087 = (state_29127[(10)]);
var inst_29101 = (state_29127[(11)]);
var inst_29101__$1 = inst_29080.call(null,inst_29087);
var state_29127__$1 = (function (){var statearr_29135 = state_29127;
(statearr_29135[(11)] = inst_29101__$1);

return statearr_29135;
})();
if(cljs.core.truth_(inst_29101__$1)){
var statearr_29136_29196 = state_29127__$1;
(statearr_29136_29196[(1)] = (29));

} else {
var statearr_29137_29197 = state_29127__$1;
(statearr_29137_29197[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (4))){
var inst_29048 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29048)){
var statearr_29138_29198 = state_29127__$1;
(statearr_29138_29198[(1)] = (8));

} else {
var statearr_29139_29199 = state_29127__$1;
(statearr_29139_29199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (15))){
var inst_29074 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29074)){
var statearr_29140_29200 = state_29127__$1;
(statearr_29140_29200[(1)] = (19));

} else {
var statearr_29141_29201 = state_29127__$1;
(statearr_29141_29201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (21))){
var inst_29079 = (state_29127[(12)]);
var inst_29079__$1 = (state_29127[(2)]);
var inst_29080 = cljs.core.get.call(null,inst_29079__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29081 = cljs.core.get.call(null,inst_29079__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29082 = cljs.core.get.call(null,inst_29079__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29127__$1 = (function (){var statearr_29142 = state_29127;
(statearr_29142[(9)] = inst_29080);

(statearr_29142[(13)] = inst_29081);

(statearr_29142[(12)] = inst_29079__$1);

return statearr_29142;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29127__$1,(22),inst_29082);
} else {
if((state_val_29128 === (31))){
var inst_29109 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29109)){
var statearr_29143_29202 = state_29127__$1;
(statearr_29143_29202[(1)] = (32));

} else {
var statearr_29144_29203 = state_29127__$1;
(statearr_29144_29203[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (32))){
var inst_29086 = (state_29127[(14)]);
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29127__$1,(35),out,inst_29086);
} else {
if((state_val_29128 === (33))){
var inst_29079 = (state_29127[(12)]);
var inst_29057 = inst_29079;
var state_29127__$1 = (function (){var statearr_29145 = state_29127;
(statearr_29145[(7)] = inst_29057);

return statearr_29145;
})();
var statearr_29146_29204 = state_29127__$1;
(statearr_29146_29204[(2)] = null);

(statearr_29146_29204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (13))){
var inst_29057 = (state_29127[(7)]);
var inst_29064 = inst_29057.cljs$lang$protocol_mask$partition0$;
var inst_29065 = (inst_29064 & (64));
var inst_29066 = inst_29057.cljs$core$ISeq$;
var inst_29067 = (inst_29065) || (inst_29066);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29067)){
var statearr_29147_29205 = state_29127__$1;
(statearr_29147_29205[(1)] = (16));

} else {
var statearr_29148_29206 = state_29127__$1;
(statearr_29148_29206[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (22))){
var inst_29086 = (state_29127[(14)]);
var inst_29087 = (state_29127[(10)]);
var inst_29085 = (state_29127[(2)]);
var inst_29086__$1 = cljs.core.nth.call(null,inst_29085,(0),null);
var inst_29087__$1 = cljs.core.nth.call(null,inst_29085,(1),null);
var inst_29088 = (inst_29086__$1 == null);
var inst_29089 = cljs.core._EQ_.call(null,inst_29087__$1,change);
var inst_29090 = (inst_29088) || (inst_29089);
var state_29127__$1 = (function (){var statearr_29149 = state_29127;
(statearr_29149[(14)] = inst_29086__$1);

(statearr_29149[(10)] = inst_29087__$1);

return statearr_29149;
})();
if(cljs.core.truth_(inst_29090)){
var statearr_29150_29207 = state_29127__$1;
(statearr_29150_29207[(1)] = (23));

} else {
var statearr_29151_29208 = state_29127__$1;
(statearr_29151_29208[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (36))){
var inst_29079 = (state_29127[(12)]);
var inst_29057 = inst_29079;
var state_29127__$1 = (function (){var statearr_29152 = state_29127;
(statearr_29152[(7)] = inst_29057);

return statearr_29152;
})();
var statearr_29153_29209 = state_29127__$1;
(statearr_29153_29209[(2)] = null);

(statearr_29153_29209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (29))){
var inst_29101 = (state_29127[(11)]);
var state_29127__$1 = state_29127;
var statearr_29154_29210 = state_29127__$1;
(statearr_29154_29210[(2)] = inst_29101);

(statearr_29154_29210[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (6))){
var state_29127__$1 = state_29127;
var statearr_29155_29211 = state_29127__$1;
(statearr_29155_29211[(2)] = false);

(statearr_29155_29211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (28))){
var inst_29097 = (state_29127[(2)]);
var inst_29098 = calc_state.call(null);
var inst_29057 = inst_29098;
var state_29127__$1 = (function (){var statearr_29156 = state_29127;
(statearr_29156[(7)] = inst_29057);

(statearr_29156[(15)] = inst_29097);

return statearr_29156;
})();
var statearr_29157_29212 = state_29127__$1;
(statearr_29157_29212[(2)] = null);

(statearr_29157_29212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (25))){
var inst_29123 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29158_29213 = state_29127__$1;
(statearr_29158_29213[(2)] = inst_29123);

(statearr_29158_29213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (34))){
var inst_29121 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29159_29214 = state_29127__$1;
(statearr_29159_29214[(2)] = inst_29121);

(statearr_29159_29214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (17))){
var state_29127__$1 = state_29127;
var statearr_29160_29215 = state_29127__$1;
(statearr_29160_29215[(2)] = false);

(statearr_29160_29215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (3))){
var state_29127__$1 = state_29127;
var statearr_29161_29216 = state_29127__$1;
(statearr_29161_29216[(2)] = false);

(statearr_29161_29216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (12))){
var inst_29125 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29127__$1,inst_29125);
} else {
if((state_val_29128 === (2))){
var inst_29033 = (state_29127[(8)]);
var inst_29038 = inst_29033.cljs$lang$protocol_mask$partition0$;
var inst_29039 = (inst_29038 & (64));
var inst_29040 = inst_29033.cljs$core$ISeq$;
var inst_29041 = (inst_29039) || (inst_29040);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29041)){
var statearr_29162_29217 = state_29127__$1;
(statearr_29162_29217[(1)] = (5));

} else {
var statearr_29163_29218 = state_29127__$1;
(statearr_29163_29218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (23))){
var inst_29086 = (state_29127[(14)]);
var inst_29092 = (inst_29086 == null);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29092)){
var statearr_29164_29219 = state_29127__$1;
(statearr_29164_29219[(1)] = (26));

} else {
var statearr_29165_29220 = state_29127__$1;
(statearr_29165_29220[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (35))){
var inst_29112 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29112)){
var statearr_29166_29221 = state_29127__$1;
(statearr_29166_29221[(1)] = (36));

} else {
var statearr_29167_29222 = state_29127__$1;
(statearr_29167_29222[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (19))){
var inst_29057 = (state_29127[(7)]);
var inst_29076 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29057);
var state_29127__$1 = state_29127;
var statearr_29168_29223 = state_29127__$1;
(statearr_29168_29223[(2)] = inst_29076);

(statearr_29168_29223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (11))){
var inst_29057 = (state_29127[(7)]);
var inst_29061 = (inst_29057 == null);
var inst_29062 = cljs.core.not.call(null,inst_29061);
var state_29127__$1 = state_29127;
if(inst_29062){
var statearr_29169_29224 = state_29127__$1;
(statearr_29169_29224[(1)] = (13));

} else {
var statearr_29170_29225 = state_29127__$1;
(statearr_29170_29225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (9))){
var inst_29033 = (state_29127[(8)]);
var state_29127__$1 = state_29127;
var statearr_29171_29226 = state_29127__$1;
(statearr_29171_29226[(2)] = inst_29033);

(statearr_29171_29226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (5))){
var state_29127__$1 = state_29127;
var statearr_29172_29227 = state_29127__$1;
(statearr_29172_29227[(2)] = true);

(statearr_29172_29227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (14))){
var state_29127__$1 = state_29127;
var statearr_29173_29228 = state_29127__$1;
(statearr_29173_29228[(2)] = false);

(statearr_29173_29228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (26))){
var inst_29087 = (state_29127[(10)]);
var inst_29094 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29087);
var state_29127__$1 = state_29127;
var statearr_29174_29229 = state_29127__$1;
(statearr_29174_29229[(2)] = inst_29094);

(statearr_29174_29229[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (16))){
var state_29127__$1 = state_29127;
var statearr_29175_29230 = state_29127__$1;
(statearr_29175_29230[(2)] = true);

(statearr_29175_29230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (38))){
var inst_29117 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29176_29231 = state_29127__$1;
(statearr_29176_29231[(2)] = inst_29117);

(statearr_29176_29231[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (30))){
var inst_29080 = (state_29127[(9)]);
var inst_29087 = (state_29127[(10)]);
var inst_29081 = (state_29127[(13)]);
var inst_29104 = cljs.core.empty_QMARK_.call(null,inst_29080);
var inst_29105 = inst_29081.call(null,inst_29087);
var inst_29106 = cljs.core.not.call(null,inst_29105);
var inst_29107 = (inst_29104) && (inst_29106);
var state_29127__$1 = state_29127;
var statearr_29177_29232 = state_29127__$1;
(statearr_29177_29232[(2)] = inst_29107);

(statearr_29177_29232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (10))){
var inst_29033 = (state_29127[(8)]);
var inst_29053 = (state_29127[(2)]);
var inst_29054 = cljs.core.get.call(null,inst_29053,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29055 = cljs.core.get.call(null,inst_29053,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29056 = cljs.core.get.call(null,inst_29053,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29057 = inst_29033;
var state_29127__$1 = (function (){var statearr_29178 = state_29127;
(statearr_29178[(7)] = inst_29057);

(statearr_29178[(16)] = inst_29056);

(statearr_29178[(17)] = inst_29055);

(statearr_29178[(18)] = inst_29054);

return statearr_29178;
})();
var statearr_29179_29233 = state_29127__$1;
(statearr_29179_29233[(2)] = null);

(statearr_29179_29233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (18))){
var inst_29071 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29180_29234 = state_29127__$1;
(statearr_29180_29234[(2)] = inst_29071);

(statearr_29180_29234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (37))){
var state_29127__$1 = state_29127;
var statearr_29181_29235 = state_29127__$1;
(statearr_29181_29235[(2)] = null);

(statearr_29181_29235[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (8))){
var inst_29033 = (state_29127[(8)]);
var inst_29050 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29033);
var state_29127__$1 = state_29127;
var statearr_29182_29236 = state_29127__$1;
(statearr_29182_29236[(2)] = inst_29050);

(statearr_29182_29236[(1)] = (10));


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
});})(c__27477__auto___29190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27365__auto__,c__27477__auto___29190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27366__auto__ = null;
var cljs$core$async$mix_$_state_machine__27366__auto____0 = (function (){
var statearr_29186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29186[(0)] = cljs$core$async$mix_$_state_machine__27366__auto__);

(statearr_29186[(1)] = (1));

return statearr_29186;
});
var cljs$core$async$mix_$_state_machine__27366__auto____1 = (function (state_29127){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_29127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e29187){if((e29187 instanceof Object)){
var ex__27369__auto__ = e29187;
var statearr_29188_29237 = state_29127;
(statearr_29188_29237[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29238 = state_29127;
state_29127 = G__29238;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27366__auto__ = function(state_29127){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27366__auto____1.call(this,state_29127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27366__auto____0;
cljs$core$async$mix_$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27366__auto____1;
return cljs$core$async$mix_$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___29190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27479__auto__ = (function (){var statearr_29189 = f__27478__auto__.call(null);
(statearr_29189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___29190);

return statearr_29189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___29190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__20845__auto__ = (((p == null))?null:p);
var m__20846__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20846__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__20845__auto__ = (((p == null))?null:p);
var m__20846__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,p,v,ch);
} else {
var m__20846__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29239 = [];
var len__21248__auto___29242 = arguments.length;
var i__21249__auto___29243 = (0);
while(true){
if((i__21249__auto___29243 < len__21248__auto___29242)){
args29239.push((arguments[i__21249__auto___29243]));

var G__29244 = (i__21249__auto___29243 + (1));
i__21249__auto___29243 = G__29244;
continue;
} else {
}
break;
}

var G__29241 = args29239.length;
switch (G__29241) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29239.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20845__auto__ = (((p == null))?null:p);
var m__20846__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,p);
} else {
var m__20846__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,p);
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
var x__20845__auto__ = (((p == null))?null:p);
var m__20846__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20845__auto__)]);
if(!((m__20846__auto__ == null))){
return m__20846__auto__.call(null,p,v);
} else {
var m__20846__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20846__auto____$1 == null))){
return m__20846__auto____$1.call(null,p,v);
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
var args29247 = [];
var len__21248__auto___29372 = arguments.length;
var i__21249__auto___29373 = (0);
while(true){
if((i__21249__auto___29373 < len__21248__auto___29372)){
args29247.push((arguments[i__21249__auto___29373]));

var G__29374 = (i__21249__auto___29373 + (1));
i__21249__auto___29373 = G__29374;
continue;
} else {
}
break;
}

var G__29249 = args29247.length;
switch (G__29249) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29247.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20190__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20190__auto__)){
return or__20190__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20190__auto__,mults){
return (function (p1__29246_SHARP_){
if(cljs.core.truth_(p1__29246_SHARP_.call(null,topic))){
return p1__29246_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29246_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20190__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29250 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29250 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29251){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29251 = meta29251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29252,meta29251__$1){
var self__ = this;
var _29252__$1 = this;
return (new cljs.core.async.t_cljs$core$async29250(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29251__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29252){
var self__ = this;
var _29252__$1 = this;
return self__.meta29251;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29250.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29250.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29251","meta29251",1276169947,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29250.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29250";

cljs.core.async.t_cljs$core$async29250.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"cljs.core.async/t_cljs$core$async29250");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29250 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29250(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29251){
return (new cljs.core.async.t_cljs$core$async29250(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29251));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29250(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27477__auto___29376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___29376,mults,ensure_mult,p){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___29376,mults,ensure_mult,p){
return (function (state_29324){
var state_val_29325 = (state_29324[(1)]);
if((state_val_29325 === (7))){
var inst_29320 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
var statearr_29326_29377 = state_29324__$1;
(statearr_29326_29377[(2)] = inst_29320);

(statearr_29326_29377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (20))){
var state_29324__$1 = state_29324;
var statearr_29327_29378 = state_29324__$1;
(statearr_29327_29378[(2)] = null);

(statearr_29327_29378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (1))){
var state_29324__$1 = state_29324;
var statearr_29328_29379 = state_29324__$1;
(statearr_29328_29379[(2)] = null);

(statearr_29328_29379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (24))){
var inst_29303 = (state_29324[(7)]);
var inst_29312 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29303);
var state_29324__$1 = state_29324;
var statearr_29329_29380 = state_29324__$1;
(statearr_29329_29380[(2)] = inst_29312);

(statearr_29329_29380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (4))){
var inst_29255 = (state_29324[(8)]);
var inst_29255__$1 = (state_29324[(2)]);
var inst_29256 = (inst_29255__$1 == null);
var state_29324__$1 = (function (){var statearr_29330 = state_29324;
(statearr_29330[(8)] = inst_29255__$1);

return statearr_29330;
})();
if(cljs.core.truth_(inst_29256)){
var statearr_29331_29381 = state_29324__$1;
(statearr_29331_29381[(1)] = (5));

} else {
var statearr_29332_29382 = state_29324__$1;
(statearr_29332_29382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (15))){
var inst_29297 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
var statearr_29333_29383 = state_29324__$1;
(statearr_29333_29383[(2)] = inst_29297);

(statearr_29333_29383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (21))){
var inst_29317 = (state_29324[(2)]);
var state_29324__$1 = (function (){var statearr_29334 = state_29324;
(statearr_29334[(9)] = inst_29317);

return statearr_29334;
})();
var statearr_29335_29384 = state_29324__$1;
(statearr_29335_29384[(2)] = null);

(statearr_29335_29384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (13))){
var inst_29279 = (state_29324[(10)]);
var inst_29281 = cljs.core.chunked_seq_QMARK_.call(null,inst_29279);
var state_29324__$1 = state_29324;
if(inst_29281){
var statearr_29336_29385 = state_29324__$1;
(statearr_29336_29385[(1)] = (16));

} else {
var statearr_29337_29386 = state_29324__$1;
(statearr_29337_29386[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (22))){
var inst_29309 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
if(cljs.core.truth_(inst_29309)){
var statearr_29338_29387 = state_29324__$1;
(statearr_29338_29387[(1)] = (23));

} else {
var statearr_29339_29388 = state_29324__$1;
(statearr_29339_29388[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (6))){
var inst_29303 = (state_29324[(7)]);
var inst_29305 = (state_29324[(11)]);
var inst_29255 = (state_29324[(8)]);
var inst_29303__$1 = topic_fn.call(null,inst_29255);
var inst_29304 = cljs.core.deref.call(null,mults);
var inst_29305__$1 = cljs.core.get.call(null,inst_29304,inst_29303__$1);
var state_29324__$1 = (function (){var statearr_29340 = state_29324;
(statearr_29340[(7)] = inst_29303__$1);

(statearr_29340[(11)] = inst_29305__$1);

return statearr_29340;
})();
if(cljs.core.truth_(inst_29305__$1)){
var statearr_29341_29389 = state_29324__$1;
(statearr_29341_29389[(1)] = (19));

} else {
var statearr_29342_29390 = state_29324__$1;
(statearr_29342_29390[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (25))){
var inst_29314 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
var statearr_29343_29391 = state_29324__$1;
(statearr_29343_29391[(2)] = inst_29314);

(statearr_29343_29391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (17))){
var inst_29279 = (state_29324[(10)]);
var inst_29288 = cljs.core.first.call(null,inst_29279);
var inst_29289 = cljs.core.async.muxch_STAR_.call(null,inst_29288);
var inst_29290 = cljs.core.async.close_BANG_.call(null,inst_29289);
var inst_29291 = cljs.core.next.call(null,inst_29279);
var inst_29265 = inst_29291;
var inst_29266 = null;
var inst_29267 = (0);
var inst_29268 = (0);
var state_29324__$1 = (function (){var statearr_29344 = state_29324;
(statearr_29344[(12)] = inst_29267);

(statearr_29344[(13)] = inst_29265);

(statearr_29344[(14)] = inst_29290);

(statearr_29344[(15)] = inst_29266);

(statearr_29344[(16)] = inst_29268);

return statearr_29344;
})();
var statearr_29345_29392 = state_29324__$1;
(statearr_29345_29392[(2)] = null);

(statearr_29345_29392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (3))){
var inst_29322 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29324__$1,inst_29322);
} else {
if((state_val_29325 === (12))){
var inst_29299 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
var statearr_29346_29393 = state_29324__$1;
(statearr_29346_29393[(2)] = inst_29299);

(statearr_29346_29393[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (2))){
var state_29324__$1 = state_29324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29324__$1,(4),ch);
} else {
if((state_val_29325 === (23))){
var state_29324__$1 = state_29324;
var statearr_29347_29394 = state_29324__$1;
(statearr_29347_29394[(2)] = null);

(statearr_29347_29394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (19))){
var inst_29305 = (state_29324[(11)]);
var inst_29255 = (state_29324[(8)]);
var inst_29307 = cljs.core.async.muxch_STAR_.call(null,inst_29305);
var state_29324__$1 = state_29324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29324__$1,(22),inst_29307,inst_29255);
} else {
if((state_val_29325 === (11))){
var inst_29265 = (state_29324[(13)]);
var inst_29279 = (state_29324[(10)]);
var inst_29279__$1 = cljs.core.seq.call(null,inst_29265);
var state_29324__$1 = (function (){var statearr_29348 = state_29324;
(statearr_29348[(10)] = inst_29279__$1);

return statearr_29348;
})();
if(inst_29279__$1){
var statearr_29349_29395 = state_29324__$1;
(statearr_29349_29395[(1)] = (13));

} else {
var statearr_29350_29396 = state_29324__$1;
(statearr_29350_29396[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (9))){
var inst_29301 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
var statearr_29351_29397 = state_29324__$1;
(statearr_29351_29397[(2)] = inst_29301);

(statearr_29351_29397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (5))){
var inst_29262 = cljs.core.deref.call(null,mults);
var inst_29263 = cljs.core.vals.call(null,inst_29262);
var inst_29264 = cljs.core.seq.call(null,inst_29263);
var inst_29265 = inst_29264;
var inst_29266 = null;
var inst_29267 = (0);
var inst_29268 = (0);
var state_29324__$1 = (function (){var statearr_29352 = state_29324;
(statearr_29352[(12)] = inst_29267);

(statearr_29352[(13)] = inst_29265);

(statearr_29352[(15)] = inst_29266);

(statearr_29352[(16)] = inst_29268);

return statearr_29352;
})();
var statearr_29353_29398 = state_29324__$1;
(statearr_29353_29398[(2)] = null);

(statearr_29353_29398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (14))){
var state_29324__$1 = state_29324;
var statearr_29357_29399 = state_29324__$1;
(statearr_29357_29399[(2)] = null);

(statearr_29357_29399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (16))){
var inst_29279 = (state_29324[(10)]);
var inst_29283 = cljs.core.chunk_first.call(null,inst_29279);
var inst_29284 = cljs.core.chunk_rest.call(null,inst_29279);
var inst_29285 = cljs.core.count.call(null,inst_29283);
var inst_29265 = inst_29284;
var inst_29266 = inst_29283;
var inst_29267 = inst_29285;
var inst_29268 = (0);
var state_29324__$1 = (function (){var statearr_29358 = state_29324;
(statearr_29358[(12)] = inst_29267);

(statearr_29358[(13)] = inst_29265);

(statearr_29358[(15)] = inst_29266);

(statearr_29358[(16)] = inst_29268);

return statearr_29358;
})();
var statearr_29359_29400 = state_29324__$1;
(statearr_29359_29400[(2)] = null);

(statearr_29359_29400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (10))){
var inst_29267 = (state_29324[(12)]);
var inst_29265 = (state_29324[(13)]);
var inst_29266 = (state_29324[(15)]);
var inst_29268 = (state_29324[(16)]);
var inst_29273 = cljs.core._nth.call(null,inst_29266,inst_29268);
var inst_29274 = cljs.core.async.muxch_STAR_.call(null,inst_29273);
var inst_29275 = cljs.core.async.close_BANG_.call(null,inst_29274);
var inst_29276 = (inst_29268 + (1));
var tmp29354 = inst_29267;
var tmp29355 = inst_29265;
var tmp29356 = inst_29266;
var inst_29265__$1 = tmp29355;
var inst_29266__$1 = tmp29356;
var inst_29267__$1 = tmp29354;
var inst_29268__$1 = inst_29276;
var state_29324__$1 = (function (){var statearr_29360 = state_29324;
(statearr_29360[(12)] = inst_29267__$1);

(statearr_29360[(13)] = inst_29265__$1);

(statearr_29360[(17)] = inst_29275);

(statearr_29360[(15)] = inst_29266__$1);

(statearr_29360[(16)] = inst_29268__$1);

return statearr_29360;
})();
var statearr_29361_29401 = state_29324__$1;
(statearr_29361_29401[(2)] = null);

(statearr_29361_29401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (18))){
var inst_29294 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
var statearr_29362_29402 = state_29324__$1;
(statearr_29362_29402[(2)] = inst_29294);

(statearr_29362_29402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29325 === (8))){
var inst_29267 = (state_29324[(12)]);
var inst_29268 = (state_29324[(16)]);
var inst_29270 = (inst_29268 < inst_29267);
var inst_29271 = inst_29270;
var state_29324__$1 = state_29324;
if(cljs.core.truth_(inst_29271)){
var statearr_29363_29403 = state_29324__$1;
(statearr_29363_29403[(1)] = (10));

} else {
var statearr_29364_29404 = state_29324__$1;
(statearr_29364_29404[(1)] = (11));

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
});})(c__27477__auto___29376,mults,ensure_mult,p))
;
return ((function (switch__27365__auto__,c__27477__auto___29376,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27366__auto__ = null;
var cljs$core$async$state_machine__27366__auto____0 = (function (){
var statearr_29368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29368[(0)] = cljs$core$async$state_machine__27366__auto__);

(statearr_29368[(1)] = (1));

return statearr_29368;
});
var cljs$core$async$state_machine__27366__auto____1 = (function (state_29324){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_29324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e29369){if((e29369 instanceof Object)){
var ex__27369__auto__ = e29369;
var statearr_29370_29405 = state_29324;
(statearr_29370_29405[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29406 = state_29324;
state_29324 = G__29406;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$state_machine__27366__auto__ = function(state_29324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27366__auto____1.call(this,state_29324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27366__auto____0;
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27366__auto____1;
return cljs$core$async$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___29376,mults,ensure_mult,p))
})();
var state__27479__auto__ = (function (){var statearr_29371 = f__27478__auto__.call(null);
(statearr_29371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___29376);

return statearr_29371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___29376,mults,ensure_mult,p))
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
var args29407 = [];
var len__21248__auto___29410 = arguments.length;
var i__21249__auto___29411 = (0);
while(true){
if((i__21249__auto___29411 < len__21248__auto___29410)){
args29407.push((arguments[i__21249__auto___29411]));

var G__29412 = (i__21249__auto___29411 + (1));
i__21249__auto___29411 = G__29412;
continue;
} else {
}
break;
}

var G__29409 = args29407.length;
switch (G__29409) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29407.length)].join('')));

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
var args29414 = [];
var len__21248__auto___29417 = arguments.length;
var i__21249__auto___29418 = (0);
while(true){
if((i__21249__auto___29418 < len__21248__auto___29417)){
args29414.push((arguments[i__21249__auto___29418]));

var G__29419 = (i__21249__auto___29418 + (1));
i__21249__auto___29418 = G__29419;
continue;
} else {
}
break;
}

var G__29416 = args29414.length;
switch (G__29416) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29414.length)].join('')));

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
var args29421 = [];
var len__21248__auto___29492 = arguments.length;
var i__21249__auto___29493 = (0);
while(true){
if((i__21249__auto___29493 < len__21248__auto___29492)){
args29421.push((arguments[i__21249__auto___29493]));

var G__29494 = (i__21249__auto___29493 + (1));
i__21249__auto___29493 = G__29494;
continue;
} else {
}
break;
}

var G__29423 = args29421.length;
switch (G__29423) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29421.length)].join('')));

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
var c__27477__auto___29496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___29496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___29496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29462){
var state_val_29463 = (state_29462[(1)]);
if((state_val_29463 === (7))){
var state_29462__$1 = state_29462;
var statearr_29464_29497 = state_29462__$1;
(statearr_29464_29497[(2)] = null);

(statearr_29464_29497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (1))){
var state_29462__$1 = state_29462;
var statearr_29465_29498 = state_29462__$1;
(statearr_29465_29498[(2)] = null);

(statearr_29465_29498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (4))){
var inst_29426 = (state_29462[(7)]);
var inst_29428 = (inst_29426 < cnt);
var state_29462__$1 = state_29462;
if(cljs.core.truth_(inst_29428)){
var statearr_29466_29499 = state_29462__$1;
(statearr_29466_29499[(1)] = (6));

} else {
var statearr_29467_29500 = state_29462__$1;
(statearr_29467_29500[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (15))){
var inst_29458 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
var statearr_29468_29501 = state_29462__$1;
(statearr_29468_29501[(2)] = inst_29458);

(statearr_29468_29501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (13))){
var inst_29451 = cljs.core.async.close_BANG_.call(null,out);
var state_29462__$1 = state_29462;
var statearr_29469_29502 = state_29462__$1;
(statearr_29469_29502[(2)] = inst_29451);

(statearr_29469_29502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (6))){
var state_29462__$1 = state_29462;
var statearr_29470_29503 = state_29462__$1;
(statearr_29470_29503[(2)] = null);

(statearr_29470_29503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (3))){
var inst_29460 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29462__$1,inst_29460);
} else {
if((state_val_29463 === (12))){
var inst_29448 = (state_29462[(8)]);
var inst_29448__$1 = (state_29462[(2)]);
var inst_29449 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29448__$1);
var state_29462__$1 = (function (){var statearr_29471 = state_29462;
(statearr_29471[(8)] = inst_29448__$1);

return statearr_29471;
})();
if(cljs.core.truth_(inst_29449)){
var statearr_29472_29504 = state_29462__$1;
(statearr_29472_29504[(1)] = (13));

} else {
var statearr_29473_29505 = state_29462__$1;
(statearr_29473_29505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (2))){
var inst_29425 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29426 = (0);
var state_29462__$1 = (function (){var statearr_29474 = state_29462;
(statearr_29474[(7)] = inst_29426);

(statearr_29474[(9)] = inst_29425);

return statearr_29474;
})();
var statearr_29475_29506 = state_29462__$1;
(statearr_29475_29506[(2)] = null);

(statearr_29475_29506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (11))){
var inst_29426 = (state_29462[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29462,(10),Object,null,(9));
var inst_29435 = chs__$1.call(null,inst_29426);
var inst_29436 = done.call(null,inst_29426);
var inst_29437 = cljs.core.async.take_BANG_.call(null,inst_29435,inst_29436);
var state_29462__$1 = state_29462;
var statearr_29476_29507 = state_29462__$1;
(statearr_29476_29507[(2)] = inst_29437);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29462__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (9))){
var inst_29426 = (state_29462[(7)]);
var inst_29439 = (state_29462[(2)]);
var inst_29440 = (inst_29426 + (1));
var inst_29426__$1 = inst_29440;
var state_29462__$1 = (function (){var statearr_29477 = state_29462;
(statearr_29477[(7)] = inst_29426__$1);

(statearr_29477[(10)] = inst_29439);

return statearr_29477;
})();
var statearr_29478_29508 = state_29462__$1;
(statearr_29478_29508[(2)] = null);

(statearr_29478_29508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (5))){
var inst_29446 = (state_29462[(2)]);
var state_29462__$1 = (function (){var statearr_29479 = state_29462;
(statearr_29479[(11)] = inst_29446);

return statearr_29479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29462__$1,(12),dchan);
} else {
if((state_val_29463 === (14))){
var inst_29448 = (state_29462[(8)]);
var inst_29453 = cljs.core.apply.call(null,f,inst_29448);
var state_29462__$1 = state_29462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29462__$1,(16),out,inst_29453);
} else {
if((state_val_29463 === (16))){
var inst_29455 = (state_29462[(2)]);
var state_29462__$1 = (function (){var statearr_29480 = state_29462;
(statearr_29480[(12)] = inst_29455);

return statearr_29480;
})();
var statearr_29481_29509 = state_29462__$1;
(statearr_29481_29509[(2)] = null);

(statearr_29481_29509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (10))){
var inst_29430 = (state_29462[(2)]);
var inst_29431 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29462__$1 = (function (){var statearr_29482 = state_29462;
(statearr_29482[(13)] = inst_29430);

return statearr_29482;
})();
var statearr_29483_29510 = state_29462__$1;
(statearr_29483_29510[(2)] = inst_29431);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29462__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (8))){
var inst_29444 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
var statearr_29484_29511 = state_29462__$1;
(statearr_29484_29511[(2)] = inst_29444);

(statearr_29484_29511[(1)] = (5));


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
});})(c__27477__auto___29496,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27365__auto__,c__27477__auto___29496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27366__auto__ = null;
var cljs$core$async$state_machine__27366__auto____0 = (function (){
var statearr_29488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29488[(0)] = cljs$core$async$state_machine__27366__auto__);

(statearr_29488[(1)] = (1));

return statearr_29488;
});
var cljs$core$async$state_machine__27366__auto____1 = (function (state_29462){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_29462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e29489){if((e29489 instanceof Object)){
var ex__27369__auto__ = e29489;
var statearr_29490_29512 = state_29462;
(statearr_29490_29512[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29513 = state_29462;
state_29462 = G__29513;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$state_machine__27366__auto__ = function(state_29462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27366__auto____1.call(this,state_29462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27366__auto____0;
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27366__auto____1;
return cljs$core$async$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___29496,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27479__auto__ = (function (){var statearr_29491 = f__27478__auto__.call(null);
(statearr_29491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___29496);

return statearr_29491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___29496,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29515 = [];
var len__21248__auto___29571 = arguments.length;
var i__21249__auto___29572 = (0);
while(true){
if((i__21249__auto___29572 < len__21248__auto___29571)){
args29515.push((arguments[i__21249__auto___29572]));

var G__29573 = (i__21249__auto___29572 + (1));
i__21249__auto___29572 = G__29573;
continue;
} else {
}
break;
}

var G__29517 = args29515.length;
switch (G__29517) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29515.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27477__auto___29575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___29575,out){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___29575,out){
return (function (state_29547){
var state_val_29548 = (state_29547[(1)]);
if((state_val_29548 === (7))){
var inst_29527 = (state_29547[(7)]);
var inst_29526 = (state_29547[(8)]);
var inst_29526__$1 = (state_29547[(2)]);
var inst_29527__$1 = cljs.core.nth.call(null,inst_29526__$1,(0),null);
var inst_29528 = cljs.core.nth.call(null,inst_29526__$1,(1),null);
var inst_29529 = (inst_29527__$1 == null);
var state_29547__$1 = (function (){var statearr_29549 = state_29547;
(statearr_29549[(9)] = inst_29528);

(statearr_29549[(7)] = inst_29527__$1);

(statearr_29549[(8)] = inst_29526__$1);

return statearr_29549;
})();
if(cljs.core.truth_(inst_29529)){
var statearr_29550_29576 = state_29547__$1;
(statearr_29550_29576[(1)] = (8));

} else {
var statearr_29551_29577 = state_29547__$1;
(statearr_29551_29577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29548 === (1))){
var inst_29518 = cljs.core.vec.call(null,chs);
var inst_29519 = inst_29518;
var state_29547__$1 = (function (){var statearr_29552 = state_29547;
(statearr_29552[(10)] = inst_29519);

return statearr_29552;
})();
var statearr_29553_29578 = state_29547__$1;
(statearr_29553_29578[(2)] = null);

(statearr_29553_29578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29548 === (4))){
var inst_29519 = (state_29547[(10)]);
var state_29547__$1 = state_29547;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29547__$1,(7),inst_29519);
} else {
if((state_val_29548 === (6))){
var inst_29543 = (state_29547[(2)]);
var state_29547__$1 = state_29547;
var statearr_29554_29579 = state_29547__$1;
(statearr_29554_29579[(2)] = inst_29543);

(statearr_29554_29579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29548 === (3))){
var inst_29545 = (state_29547[(2)]);
var state_29547__$1 = state_29547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29547__$1,inst_29545);
} else {
if((state_val_29548 === (2))){
var inst_29519 = (state_29547[(10)]);
var inst_29521 = cljs.core.count.call(null,inst_29519);
var inst_29522 = (inst_29521 > (0));
var state_29547__$1 = state_29547;
if(cljs.core.truth_(inst_29522)){
var statearr_29556_29580 = state_29547__$1;
(statearr_29556_29580[(1)] = (4));

} else {
var statearr_29557_29581 = state_29547__$1;
(statearr_29557_29581[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29548 === (11))){
var inst_29519 = (state_29547[(10)]);
var inst_29536 = (state_29547[(2)]);
var tmp29555 = inst_29519;
var inst_29519__$1 = tmp29555;
var state_29547__$1 = (function (){var statearr_29558 = state_29547;
(statearr_29558[(10)] = inst_29519__$1);

(statearr_29558[(11)] = inst_29536);

return statearr_29558;
})();
var statearr_29559_29582 = state_29547__$1;
(statearr_29559_29582[(2)] = null);

(statearr_29559_29582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29548 === (9))){
var inst_29527 = (state_29547[(7)]);
var state_29547__$1 = state_29547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29547__$1,(11),out,inst_29527);
} else {
if((state_val_29548 === (5))){
var inst_29541 = cljs.core.async.close_BANG_.call(null,out);
var state_29547__$1 = state_29547;
var statearr_29560_29583 = state_29547__$1;
(statearr_29560_29583[(2)] = inst_29541);

(statearr_29560_29583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29548 === (10))){
var inst_29539 = (state_29547[(2)]);
var state_29547__$1 = state_29547;
var statearr_29561_29584 = state_29547__$1;
(statearr_29561_29584[(2)] = inst_29539);

(statearr_29561_29584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29548 === (8))){
var inst_29528 = (state_29547[(9)]);
var inst_29519 = (state_29547[(10)]);
var inst_29527 = (state_29547[(7)]);
var inst_29526 = (state_29547[(8)]);
var inst_29531 = (function (){var cs = inst_29519;
var vec__29524 = inst_29526;
var v = inst_29527;
var c = inst_29528;
return ((function (cs,vec__29524,v,c,inst_29528,inst_29519,inst_29527,inst_29526,state_val_29548,c__27477__auto___29575,out){
return (function (p1__29514_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29514_SHARP_);
});
;})(cs,vec__29524,v,c,inst_29528,inst_29519,inst_29527,inst_29526,state_val_29548,c__27477__auto___29575,out))
})();
var inst_29532 = cljs.core.filterv.call(null,inst_29531,inst_29519);
var inst_29519__$1 = inst_29532;
var state_29547__$1 = (function (){var statearr_29562 = state_29547;
(statearr_29562[(10)] = inst_29519__$1);

return statearr_29562;
})();
var statearr_29563_29585 = state_29547__$1;
(statearr_29563_29585[(2)] = null);

(statearr_29563_29585[(1)] = (2));


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
});})(c__27477__auto___29575,out))
;
return ((function (switch__27365__auto__,c__27477__auto___29575,out){
return (function() {
var cljs$core$async$state_machine__27366__auto__ = null;
var cljs$core$async$state_machine__27366__auto____0 = (function (){
var statearr_29567 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29567[(0)] = cljs$core$async$state_machine__27366__auto__);

(statearr_29567[(1)] = (1));

return statearr_29567;
});
var cljs$core$async$state_machine__27366__auto____1 = (function (state_29547){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_29547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e29568){if((e29568 instanceof Object)){
var ex__27369__auto__ = e29568;
var statearr_29569_29586 = state_29547;
(statearr_29569_29586[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29587 = state_29547;
state_29547 = G__29587;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$state_machine__27366__auto__ = function(state_29547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27366__auto____1.call(this,state_29547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27366__auto____0;
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27366__auto____1;
return cljs$core$async$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___29575,out))
})();
var state__27479__auto__ = (function (){var statearr_29570 = f__27478__auto__.call(null);
(statearr_29570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___29575);

return statearr_29570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___29575,out))
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
var args29588 = [];
var len__21248__auto___29637 = arguments.length;
var i__21249__auto___29638 = (0);
while(true){
if((i__21249__auto___29638 < len__21248__auto___29637)){
args29588.push((arguments[i__21249__auto___29638]));

var G__29639 = (i__21249__auto___29638 + (1));
i__21249__auto___29638 = G__29639;
continue;
} else {
}
break;
}

var G__29590 = args29588.length;
switch (G__29590) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29588.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27477__auto___29641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___29641,out){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___29641,out){
return (function (state_29614){
var state_val_29615 = (state_29614[(1)]);
if((state_val_29615 === (7))){
var inst_29596 = (state_29614[(7)]);
var inst_29596__$1 = (state_29614[(2)]);
var inst_29597 = (inst_29596__$1 == null);
var inst_29598 = cljs.core.not.call(null,inst_29597);
var state_29614__$1 = (function (){var statearr_29616 = state_29614;
(statearr_29616[(7)] = inst_29596__$1);

return statearr_29616;
})();
if(inst_29598){
var statearr_29617_29642 = state_29614__$1;
(statearr_29617_29642[(1)] = (8));

} else {
var statearr_29618_29643 = state_29614__$1;
(statearr_29618_29643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (1))){
var inst_29591 = (0);
var state_29614__$1 = (function (){var statearr_29619 = state_29614;
(statearr_29619[(8)] = inst_29591);

return statearr_29619;
})();
var statearr_29620_29644 = state_29614__$1;
(statearr_29620_29644[(2)] = null);

(statearr_29620_29644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (4))){
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29614__$1,(7),ch);
} else {
if((state_val_29615 === (6))){
var inst_29609 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29621_29645 = state_29614__$1;
(statearr_29621_29645[(2)] = inst_29609);

(statearr_29621_29645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (3))){
var inst_29611 = (state_29614[(2)]);
var inst_29612 = cljs.core.async.close_BANG_.call(null,out);
var state_29614__$1 = (function (){var statearr_29622 = state_29614;
(statearr_29622[(9)] = inst_29611);

return statearr_29622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29614__$1,inst_29612);
} else {
if((state_val_29615 === (2))){
var inst_29591 = (state_29614[(8)]);
var inst_29593 = (inst_29591 < n);
var state_29614__$1 = state_29614;
if(cljs.core.truth_(inst_29593)){
var statearr_29623_29646 = state_29614__$1;
(statearr_29623_29646[(1)] = (4));

} else {
var statearr_29624_29647 = state_29614__$1;
(statearr_29624_29647[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (11))){
var inst_29591 = (state_29614[(8)]);
var inst_29601 = (state_29614[(2)]);
var inst_29602 = (inst_29591 + (1));
var inst_29591__$1 = inst_29602;
var state_29614__$1 = (function (){var statearr_29625 = state_29614;
(statearr_29625[(8)] = inst_29591__$1);

(statearr_29625[(10)] = inst_29601);

return statearr_29625;
})();
var statearr_29626_29648 = state_29614__$1;
(statearr_29626_29648[(2)] = null);

(statearr_29626_29648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (9))){
var state_29614__$1 = state_29614;
var statearr_29627_29649 = state_29614__$1;
(statearr_29627_29649[(2)] = null);

(statearr_29627_29649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (5))){
var state_29614__$1 = state_29614;
var statearr_29628_29650 = state_29614__$1;
(statearr_29628_29650[(2)] = null);

(statearr_29628_29650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (10))){
var inst_29606 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29629_29651 = state_29614__$1;
(statearr_29629_29651[(2)] = inst_29606);

(statearr_29629_29651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (8))){
var inst_29596 = (state_29614[(7)]);
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29614__$1,(11),out,inst_29596);
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
});})(c__27477__auto___29641,out))
;
return ((function (switch__27365__auto__,c__27477__auto___29641,out){
return (function() {
var cljs$core$async$state_machine__27366__auto__ = null;
var cljs$core$async$state_machine__27366__auto____0 = (function (){
var statearr_29633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29633[(0)] = cljs$core$async$state_machine__27366__auto__);

(statearr_29633[(1)] = (1));

return statearr_29633;
});
var cljs$core$async$state_machine__27366__auto____1 = (function (state_29614){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_29614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e29634){if((e29634 instanceof Object)){
var ex__27369__auto__ = e29634;
var statearr_29635_29652 = state_29614;
(statearr_29635_29652[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29653 = state_29614;
state_29614 = G__29653;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$state_machine__27366__auto__ = function(state_29614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27366__auto____1.call(this,state_29614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27366__auto____0;
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27366__auto____1;
return cljs$core$async$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___29641,out))
})();
var state__27479__auto__ = (function (){var statearr_29636 = f__27478__auto__.call(null);
(statearr_29636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___29641);

return statearr_29636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___29641,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29661 = (function (map_LT_,f,ch,meta29662){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29662 = meta29662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29663,meta29662__$1){
var self__ = this;
var _29663__$1 = this;
return (new cljs.core.async.t_cljs$core$async29661(self__.map_LT_,self__.f,self__.ch,meta29662__$1));
});

cljs.core.async.t_cljs$core$async29661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29663){
var self__ = this;
var _29663__$1 = this;
return self__.meta29662;
});

cljs.core.async.t_cljs$core$async29661.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29661.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29661.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29664 = (function (map_LT_,f,ch,meta29662,_,fn1,meta29665){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29662 = meta29662;
this._ = _;
this.fn1 = fn1;
this.meta29665 = meta29665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29666,meta29665__$1){
var self__ = this;
var _29666__$1 = this;
return (new cljs.core.async.t_cljs$core$async29664(self__.map_LT_,self__.f,self__.ch,self__.meta29662,self__._,self__.fn1,meta29665__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29666){
var self__ = this;
var _29666__$1 = this;
return self__.meta29665;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29654_SHARP_){
return f1.call(null,(((p1__29654_SHARP_ == null))?null:self__.f.call(null,p1__29654_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29664.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29662","meta29662",876966946,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29661","cljs.core.async/t_cljs$core$async29661",1307485280,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29665","meta29665",364159191,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29664";

cljs.core.async.t_cljs$core$async29664.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"cljs.core.async/t_cljs$core$async29664");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29664 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29664(map_LT___$1,f__$1,ch__$1,meta29662__$1,___$2,fn1__$1,meta29665){
return (new cljs.core.async.t_cljs$core$async29664(map_LT___$1,f__$1,ch__$1,meta29662__$1,___$2,fn1__$1,meta29665));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29664(self__.map_LT_,self__.f,self__.ch,self__.meta29662,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20178__auto__ = ret;
if(cljs.core.truth_(and__20178__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20178__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29661.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29662","meta29662",876966946,null)], null);
});

cljs.core.async.t_cljs$core$async29661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29661";

cljs.core.async.t_cljs$core$async29661.cljs$lang$ctorPrWriter = (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"cljs.core.async/t_cljs$core$async29661");
});

cljs.core.async.__GT_t_cljs$core$async29661 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29661(map_LT___$1,f__$1,ch__$1,meta29662){
return (new cljs.core.async.t_cljs$core$async29661(map_LT___$1,f__$1,ch__$1,meta29662));
});

}

return (new cljs.core.async.t_cljs$core$async29661(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29670 = (function (map_GT_,f,ch,meta29671){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29671 = meta29671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29672,meta29671__$1){
var self__ = this;
var _29672__$1 = this;
return (new cljs.core.async.t_cljs$core$async29670(self__.map_GT_,self__.f,self__.ch,meta29671__$1));
});

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29672){
var self__ = this;
var _29672__$1 = this;
return self__.meta29671;
});

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29671","meta29671",-664441123,null)], null);
});

cljs.core.async.t_cljs$core$async29670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29670";

cljs.core.async.t_cljs$core$async29670.cljs$lang$ctorPrWriter = (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"cljs.core.async/t_cljs$core$async29670");
});

cljs.core.async.__GT_t_cljs$core$async29670 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29670(map_GT___$1,f__$1,ch__$1,meta29671){
return (new cljs.core.async.t_cljs$core$async29670(map_GT___$1,f__$1,ch__$1,meta29671));
});

}

return (new cljs.core.async.t_cljs$core$async29670(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29676 = (function (filter_GT_,p,ch,meta29677){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29677 = meta29677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29678,meta29677__$1){
var self__ = this;
var _29678__$1 = this;
return (new cljs.core.async.t_cljs$core$async29676(self__.filter_GT_,self__.p,self__.ch,meta29677__$1));
});

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29678){
var self__ = this;
var _29678__$1 = this;
return self__.meta29677;
});

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29677","meta29677",1919473920,null)], null);
});

cljs.core.async.t_cljs$core$async29676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29676";

cljs.core.async.t_cljs$core$async29676.cljs$lang$ctorPrWriter = (function (this__20788__auto__,writer__20789__auto__,opt__20790__auto__){
return cljs.core._write.call(null,writer__20789__auto__,"cljs.core.async/t_cljs$core$async29676");
});

cljs.core.async.__GT_t_cljs$core$async29676 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29676(filter_GT___$1,p__$1,ch__$1,meta29677){
return (new cljs.core.async.t_cljs$core$async29676(filter_GT___$1,p__$1,ch__$1,meta29677));
});

}

return (new cljs.core.async.t_cljs$core$async29676(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29679 = [];
var len__21248__auto___29723 = arguments.length;
var i__21249__auto___29724 = (0);
while(true){
if((i__21249__auto___29724 < len__21248__auto___29723)){
args29679.push((arguments[i__21249__auto___29724]));

var G__29725 = (i__21249__auto___29724 + (1));
i__21249__auto___29724 = G__29725;
continue;
} else {
}
break;
}

var G__29681 = args29679.length;
switch (G__29681) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29679.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27477__auto___29727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___29727,out){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___29727,out){
return (function (state_29702){
var state_val_29703 = (state_29702[(1)]);
if((state_val_29703 === (7))){
var inst_29698 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
var statearr_29704_29728 = state_29702__$1;
(statearr_29704_29728[(2)] = inst_29698);

(statearr_29704_29728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (1))){
var state_29702__$1 = state_29702;
var statearr_29705_29729 = state_29702__$1;
(statearr_29705_29729[(2)] = null);

(statearr_29705_29729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (4))){
var inst_29684 = (state_29702[(7)]);
var inst_29684__$1 = (state_29702[(2)]);
var inst_29685 = (inst_29684__$1 == null);
var state_29702__$1 = (function (){var statearr_29706 = state_29702;
(statearr_29706[(7)] = inst_29684__$1);

return statearr_29706;
})();
if(cljs.core.truth_(inst_29685)){
var statearr_29707_29730 = state_29702__$1;
(statearr_29707_29730[(1)] = (5));

} else {
var statearr_29708_29731 = state_29702__$1;
(statearr_29708_29731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (6))){
var inst_29684 = (state_29702[(7)]);
var inst_29689 = p.call(null,inst_29684);
var state_29702__$1 = state_29702;
if(cljs.core.truth_(inst_29689)){
var statearr_29709_29732 = state_29702__$1;
(statearr_29709_29732[(1)] = (8));

} else {
var statearr_29710_29733 = state_29702__$1;
(statearr_29710_29733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (3))){
var inst_29700 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29702__$1,inst_29700);
} else {
if((state_val_29703 === (2))){
var state_29702__$1 = state_29702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29702__$1,(4),ch);
} else {
if((state_val_29703 === (11))){
var inst_29692 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
var statearr_29711_29734 = state_29702__$1;
(statearr_29711_29734[(2)] = inst_29692);

(statearr_29711_29734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (9))){
var state_29702__$1 = state_29702;
var statearr_29712_29735 = state_29702__$1;
(statearr_29712_29735[(2)] = null);

(statearr_29712_29735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (5))){
var inst_29687 = cljs.core.async.close_BANG_.call(null,out);
var state_29702__$1 = state_29702;
var statearr_29713_29736 = state_29702__$1;
(statearr_29713_29736[(2)] = inst_29687);

(statearr_29713_29736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (10))){
var inst_29695 = (state_29702[(2)]);
var state_29702__$1 = (function (){var statearr_29714 = state_29702;
(statearr_29714[(8)] = inst_29695);

return statearr_29714;
})();
var statearr_29715_29737 = state_29702__$1;
(statearr_29715_29737[(2)] = null);

(statearr_29715_29737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (8))){
var inst_29684 = (state_29702[(7)]);
var state_29702__$1 = state_29702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29702__$1,(11),out,inst_29684);
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
});})(c__27477__auto___29727,out))
;
return ((function (switch__27365__auto__,c__27477__auto___29727,out){
return (function() {
var cljs$core$async$state_machine__27366__auto__ = null;
var cljs$core$async$state_machine__27366__auto____0 = (function (){
var statearr_29719 = [null,null,null,null,null,null,null,null,null];
(statearr_29719[(0)] = cljs$core$async$state_machine__27366__auto__);

(statearr_29719[(1)] = (1));

return statearr_29719;
});
var cljs$core$async$state_machine__27366__auto____1 = (function (state_29702){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_29702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e29720){if((e29720 instanceof Object)){
var ex__27369__auto__ = e29720;
var statearr_29721_29738 = state_29702;
(statearr_29721_29738[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29739 = state_29702;
state_29702 = G__29739;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$state_machine__27366__auto__ = function(state_29702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27366__auto____1.call(this,state_29702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27366__auto____0;
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27366__auto____1;
return cljs$core$async$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___29727,out))
})();
var state__27479__auto__ = (function (){var statearr_29722 = f__27478__auto__.call(null);
(statearr_29722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___29727);

return statearr_29722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___29727,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29740 = [];
var len__21248__auto___29743 = arguments.length;
var i__21249__auto___29744 = (0);
while(true){
if((i__21249__auto___29744 < len__21248__auto___29743)){
args29740.push((arguments[i__21249__auto___29744]));

var G__29745 = (i__21249__auto___29744 + (1));
i__21249__auto___29744 = G__29745;
continue;
} else {
}
break;
}

var G__29742 = args29740.length;
switch (G__29742) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29740.length)].join('')));

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
var c__27477__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto__){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto__){
return (function (state_29912){
var state_val_29913 = (state_29912[(1)]);
if((state_val_29913 === (7))){
var inst_29908 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29914_29955 = state_29912__$1;
(statearr_29914_29955[(2)] = inst_29908);

(statearr_29914_29955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (20))){
var inst_29878 = (state_29912[(7)]);
var inst_29889 = (state_29912[(2)]);
var inst_29890 = cljs.core.next.call(null,inst_29878);
var inst_29864 = inst_29890;
var inst_29865 = null;
var inst_29866 = (0);
var inst_29867 = (0);
var state_29912__$1 = (function (){var statearr_29915 = state_29912;
(statearr_29915[(8)] = inst_29867);

(statearr_29915[(9)] = inst_29889);

(statearr_29915[(10)] = inst_29866);

(statearr_29915[(11)] = inst_29864);

(statearr_29915[(12)] = inst_29865);

return statearr_29915;
})();
var statearr_29916_29956 = state_29912__$1;
(statearr_29916_29956[(2)] = null);

(statearr_29916_29956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (1))){
var state_29912__$1 = state_29912;
var statearr_29917_29957 = state_29912__$1;
(statearr_29917_29957[(2)] = null);

(statearr_29917_29957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (4))){
var inst_29853 = (state_29912[(13)]);
var inst_29853__$1 = (state_29912[(2)]);
var inst_29854 = (inst_29853__$1 == null);
var state_29912__$1 = (function (){var statearr_29918 = state_29912;
(statearr_29918[(13)] = inst_29853__$1);

return statearr_29918;
})();
if(cljs.core.truth_(inst_29854)){
var statearr_29919_29958 = state_29912__$1;
(statearr_29919_29958[(1)] = (5));

} else {
var statearr_29920_29959 = state_29912__$1;
(statearr_29920_29959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (15))){
var state_29912__$1 = state_29912;
var statearr_29924_29960 = state_29912__$1;
(statearr_29924_29960[(2)] = null);

(statearr_29924_29960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (21))){
var state_29912__$1 = state_29912;
var statearr_29925_29961 = state_29912__$1;
(statearr_29925_29961[(2)] = null);

(statearr_29925_29961[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (13))){
var inst_29867 = (state_29912[(8)]);
var inst_29866 = (state_29912[(10)]);
var inst_29864 = (state_29912[(11)]);
var inst_29865 = (state_29912[(12)]);
var inst_29874 = (state_29912[(2)]);
var inst_29875 = (inst_29867 + (1));
var tmp29921 = inst_29866;
var tmp29922 = inst_29864;
var tmp29923 = inst_29865;
var inst_29864__$1 = tmp29922;
var inst_29865__$1 = tmp29923;
var inst_29866__$1 = tmp29921;
var inst_29867__$1 = inst_29875;
var state_29912__$1 = (function (){var statearr_29926 = state_29912;
(statearr_29926[(8)] = inst_29867__$1);

(statearr_29926[(14)] = inst_29874);

(statearr_29926[(10)] = inst_29866__$1);

(statearr_29926[(11)] = inst_29864__$1);

(statearr_29926[(12)] = inst_29865__$1);

return statearr_29926;
})();
var statearr_29927_29962 = state_29912__$1;
(statearr_29927_29962[(2)] = null);

(statearr_29927_29962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (22))){
var state_29912__$1 = state_29912;
var statearr_29928_29963 = state_29912__$1;
(statearr_29928_29963[(2)] = null);

(statearr_29928_29963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (6))){
var inst_29853 = (state_29912[(13)]);
var inst_29862 = f.call(null,inst_29853);
var inst_29863 = cljs.core.seq.call(null,inst_29862);
var inst_29864 = inst_29863;
var inst_29865 = null;
var inst_29866 = (0);
var inst_29867 = (0);
var state_29912__$1 = (function (){var statearr_29929 = state_29912;
(statearr_29929[(8)] = inst_29867);

(statearr_29929[(10)] = inst_29866);

(statearr_29929[(11)] = inst_29864);

(statearr_29929[(12)] = inst_29865);

return statearr_29929;
})();
var statearr_29930_29964 = state_29912__$1;
(statearr_29930_29964[(2)] = null);

(statearr_29930_29964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (17))){
var inst_29878 = (state_29912[(7)]);
var inst_29882 = cljs.core.chunk_first.call(null,inst_29878);
var inst_29883 = cljs.core.chunk_rest.call(null,inst_29878);
var inst_29884 = cljs.core.count.call(null,inst_29882);
var inst_29864 = inst_29883;
var inst_29865 = inst_29882;
var inst_29866 = inst_29884;
var inst_29867 = (0);
var state_29912__$1 = (function (){var statearr_29931 = state_29912;
(statearr_29931[(8)] = inst_29867);

(statearr_29931[(10)] = inst_29866);

(statearr_29931[(11)] = inst_29864);

(statearr_29931[(12)] = inst_29865);

return statearr_29931;
})();
var statearr_29932_29965 = state_29912__$1;
(statearr_29932_29965[(2)] = null);

(statearr_29932_29965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (3))){
var inst_29910 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29912__$1,inst_29910);
} else {
if((state_val_29913 === (12))){
var inst_29898 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29933_29966 = state_29912__$1;
(statearr_29933_29966[(2)] = inst_29898);

(statearr_29933_29966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (2))){
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29912__$1,(4),in$);
} else {
if((state_val_29913 === (23))){
var inst_29906 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29934_29967 = state_29912__$1;
(statearr_29934_29967[(2)] = inst_29906);

(statearr_29934_29967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (19))){
var inst_29893 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29935_29968 = state_29912__$1;
(statearr_29935_29968[(2)] = inst_29893);

(statearr_29935_29968[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (11))){
var inst_29878 = (state_29912[(7)]);
var inst_29864 = (state_29912[(11)]);
var inst_29878__$1 = cljs.core.seq.call(null,inst_29864);
var state_29912__$1 = (function (){var statearr_29936 = state_29912;
(statearr_29936[(7)] = inst_29878__$1);

return statearr_29936;
})();
if(inst_29878__$1){
var statearr_29937_29969 = state_29912__$1;
(statearr_29937_29969[(1)] = (14));

} else {
var statearr_29938_29970 = state_29912__$1;
(statearr_29938_29970[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (9))){
var inst_29900 = (state_29912[(2)]);
var inst_29901 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29912__$1 = (function (){var statearr_29939 = state_29912;
(statearr_29939[(15)] = inst_29900);

return statearr_29939;
})();
if(cljs.core.truth_(inst_29901)){
var statearr_29940_29971 = state_29912__$1;
(statearr_29940_29971[(1)] = (21));

} else {
var statearr_29941_29972 = state_29912__$1;
(statearr_29941_29972[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (5))){
var inst_29856 = cljs.core.async.close_BANG_.call(null,out);
var state_29912__$1 = state_29912;
var statearr_29942_29973 = state_29912__$1;
(statearr_29942_29973[(2)] = inst_29856);

(statearr_29942_29973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (14))){
var inst_29878 = (state_29912[(7)]);
var inst_29880 = cljs.core.chunked_seq_QMARK_.call(null,inst_29878);
var state_29912__$1 = state_29912;
if(inst_29880){
var statearr_29943_29974 = state_29912__$1;
(statearr_29943_29974[(1)] = (17));

} else {
var statearr_29944_29975 = state_29912__$1;
(statearr_29944_29975[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (16))){
var inst_29896 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29945_29976 = state_29912__$1;
(statearr_29945_29976[(2)] = inst_29896);

(statearr_29945_29976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (10))){
var inst_29867 = (state_29912[(8)]);
var inst_29865 = (state_29912[(12)]);
var inst_29872 = cljs.core._nth.call(null,inst_29865,inst_29867);
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29912__$1,(13),out,inst_29872);
} else {
if((state_val_29913 === (18))){
var inst_29878 = (state_29912[(7)]);
var inst_29887 = cljs.core.first.call(null,inst_29878);
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29912__$1,(20),out,inst_29887);
} else {
if((state_val_29913 === (8))){
var inst_29867 = (state_29912[(8)]);
var inst_29866 = (state_29912[(10)]);
var inst_29869 = (inst_29867 < inst_29866);
var inst_29870 = inst_29869;
var state_29912__$1 = state_29912;
if(cljs.core.truth_(inst_29870)){
var statearr_29946_29977 = state_29912__$1;
(statearr_29946_29977[(1)] = (10));

} else {
var statearr_29947_29978 = state_29912__$1;
(statearr_29947_29978[(1)] = (11));

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
});})(c__27477__auto__))
;
return ((function (switch__27365__auto__,c__27477__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27366__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27366__auto____0 = (function (){
var statearr_29951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29951[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27366__auto__);

(statearr_29951[(1)] = (1));

return statearr_29951;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27366__auto____1 = (function (state_29912){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_29912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e29952){if((e29952 instanceof Object)){
var ex__27369__auto__ = e29952;
var statearr_29953_29979 = state_29912;
(statearr_29953_29979[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29980 = state_29912;
state_29912 = G__29980;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27366__auto__ = function(state_29912){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27366__auto____1.call(this,state_29912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27366__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27366__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto__))
})();
var state__27479__auto__ = (function (){var statearr_29954 = f__27478__auto__.call(null);
(statearr_29954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto__);

return statearr_29954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto__))
);

return c__27477__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29981 = [];
var len__21248__auto___29984 = arguments.length;
var i__21249__auto___29985 = (0);
while(true){
if((i__21249__auto___29985 < len__21248__auto___29984)){
args29981.push((arguments[i__21249__auto___29985]));

var G__29986 = (i__21249__auto___29985 + (1));
i__21249__auto___29985 = G__29986;
continue;
} else {
}
break;
}

var G__29983 = args29981.length;
switch (G__29983) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29981.length)].join('')));

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
var args29988 = [];
var len__21248__auto___29991 = arguments.length;
var i__21249__auto___29992 = (0);
while(true){
if((i__21249__auto___29992 < len__21248__auto___29991)){
args29988.push((arguments[i__21249__auto___29992]));

var G__29993 = (i__21249__auto___29992 + (1));
i__21249__auto___29992 = G__29993;
continue;
} else {
}
break;
}

var G__29990 = args29988.length;
switch (G__29990) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29988.length)].join('')));

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
var args29995 = [];
var len__21248__auto___30046 = arguments.length;
var i__21249__auto___30047 = (0);
while(true){
if((i__21249__auto___30047 < len__21248__auto___30046)){
args29995.push((arguments[i__21249__auto___30047]));

var G__30048 = (i__21249__auto___30047 + (1));
i__21249__auto___30047 = G__30048;
continue;
} else {
}
break;
}

var G__29997 = args29995.length;
switch (G__29997) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29995.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27477__auto___30050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___30050,out){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___30050,out){
return (function (state_30021){
var state_val_30022 = (state_30021[(1)]);
if((state_val_30022 === (7))){
var inst_30016 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30023_30051 = state_30021__$1;
(statearr_30023_30051[(2)] = inst_30016);

(statearr_30023_30051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (1))){
var inst_29998 = null;
var state_30021__$1 = (function (){var statearr_30024 = state_30021;
(statearr_30024[(7)] = inst_29998);

return statearr_30024;
})();
var statearr_30025_30052 = state_30021__$1;
(statearr_30025_30052[(2)] = null);

(statearr_30025_30052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (4))){
var inst_30001 = (state_30021[(8)]);
var inst_30001__$1 = (state_30021[(2)]);
var inst_30002 = (inst_30001__$1 == null);
var inst_30003 = cljs.core.not.call(null,inst_30002);
var state_30021__$1 = (function (){var statearr_30026 = state_30021;
(statearr_30026[(8)] = inst_30001__$1);

return statearr_30026;
})();
if(inst_30003){
var statearr_30027_30053 = state_30021__$1;
(statearr_30027_30053[(1)] = (5));

} else {
var statearr_30028_30054 = state_30021__$1;
(statearr_30028_30054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (6))){
var state_30021__$1 = state_30021;
var statearr_30029_30055 = state_30021__$1;
(statearr_30029_30055[(2)] = null);

(statearr_30029_30055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (3))){
var inst_30018 = (state_30021[(2)]);
var inst_30019 = cljs.core.async.close_BANG_.call(null,out);
var state_30021__$1 = (function (){var statearr_30030 = state_30021;
(statearr_30030[(9)] = inst_30018);

return statearr_30030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30021__$1,inst_30019);
} else {
if((state_val_30022 === (2))){
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30021__$1,(4),ch);
} else {
if((state_val_30022 === (11))){
var inst_30001 = (state_30021[(8)]);
var inst_30010 = (state_30021[(2)]);
var inst_29998 = inst_30001;
var state_30021__$1 = (function (){var statearr_30031 = state_30021;
(statearr_30031[(10)] = inst_30010);

(statearr_30031[(7)] = inst_29998);

return statearr_30031;
})();
var statearr_30032_30056 = state_30021__$1;
(statearr_30032_30056[(2)] = null);

(statearr_30032_30056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (9))){
var inst_30001 = (state_30021[(8)]);
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30021__$1,(11),out,inst_30001);
} else {
if((state_val_30022 === (5))){
var inst_30001 = (state_30021[(8)]);
var inst_29998 = (state_30021[(7)]);
var inst_30005 = cljs.core._EQ_.call(null,inst_30001,inst_29998);
var state_30021__$1 = state_30021;
if(inst_30005){
var statearr_30034_30057 = state_30021__$1;
(statearr_30034_30057[(1)] = (8));

} else {
var statearr_30035_30058 = state_30021__$1;
(statearr_30035_30058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (10))){
var inst_30013 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30036_30059 = state_30021__$1;
(statearr_30036_30059[(2)] = inst_30013);

(statearr_30036_30059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (8))){
var inst_29998 = (state_30021[(7)]);
var tmp30033 = inst_29998;
var inst_29998__$1 = tmp30033;
var state_30021__$1 = (function (){var statearr_30037 = state_30021;
(statearr_30037[(7)] = inst_29998__$1);

return statearr_30037;
})();
var statearr_30038_30060 = state_30021__$1;
(statearr_30038_30060[(2)] = null);

(statearr_30038_30060[(1)] = (2));


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
});})(c__27477__auto___30050,out))
;
return ((function (switch__27365__auto__,c__27477__auto___30050,out){
return (function() {
var cljs$core$async$state_machine__27366__auto__ = null;
var cljs$core$async$state_machine__27366__auto____0 = (function (){
var statearr_30042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30042[(0)] = cljs$core$async$state_machine__27366__auto__);

(statearr_30042[(1)] = (1));

return statearr_30042;
});
var cljs$core$async$state_machine__27366__auto____1 = (function (state_30021){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_30021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e30043){if((e30043 instanceof Object)){
var ex__27369__auto__ = e30043;
var statearr_30044_30061 = state_30021;
(statearr_30044_30061[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30062 = state_30021;
state_30021 = G__30062;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$state_machine__27366__auto__ = function(state_30021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27366__auto____1.call(this,state_30021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27366__auto____0;
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27366__auto____1;
return cljs$core$async$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___30050,out))
})();
var state__27479__auto__ = (function (){var statearr_30045 = f__27478__auto__.call(null);
(statearr_30045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___30050);

return statearr_30045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___30050,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30063 = [];
var len__21248__auto___30133 = arguments.length;
var i__21249__auto___30134 = (0);
while(true){
if((i__21249__auto___30134 < len__21248__auto___30133)){
args30063.push((arguments[i__21249__auto___30134]));

var G__30135 = (i__21249__auto___30134 + (1));
i__21249__auto___30134 = G__30135;
continue;
} else {
}
break;
}

var G__30065 = args30063.length;
switch (G__30065) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30063.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27477__auto___30137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___30137,out){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___30137,out){
return (function (state_30103){
var state_val_30104 = (state_30103[(1)]);
if((state_val_30104 === (7))){
var inst_30099 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30105_30138 = state_30103__$1;
(statearr_30105_30138[(2)] = inst_30099);

(statearr_30105_30138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (1))){
var inst_30066 = (new Array(n));
var inst_30067 = inst_30066;
var inst_30068 = (0);
var state_30103__$1 = (function (){var statearr_30106 = state_30103;
(statearr_30106[(7)] = inst_30067);

(statearr_30106[(8)] = inst_30068);

return statearr_30106;
})();
var statearr_30107_30139 = state_30103__$1;
(statearr_30107_30139[(2)] = null);

(statearr_30107_30139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (4))){
var inst_30071 = (state_30103[(9)]);
var inst_30071__$1 = (state_30103[(2)]);
var inst_30072 = (inst_30071__$1 == null);
var inst_30073 = cljs.core.not.call(null,inst_30072);
var state_30103__$1 = (function (){var statearr_30108 = state_30103;
(statearr_30108[(9)] = inst_30071__$1);

return statearr_30108;
})();
if(inst_30073){
var statearr_30109_30140 = state_30103__$1;
(statearr_30109_30140[(1)] = (5));

} else {
var statearr_30110_30141 = state_30103__$1;
(statearr_30110_30141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (15))){
var inst_30093 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30111_30142 = state_30103__$1;
(statearr_30111_30142[(2)] = inst_30093);

(statearr_30111_30142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (13))){
var state_30103__$1 = state_30103;
var statearr_30112_30143 = state_30103__$1;
(statearr_30112_30143[(2)] = null);

(statearr_30112_30143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (6))){
var inst_30068 = (state_30103[(8)]);
var inst_30089 = (inst_30068 > (0));
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30089)){
var statearr_30113_30144 = state_30103__$1;
(statearr_30113_30144[(1)] = (12));

} else {
var statearr_30114_30145 = state_30103__$1;
(statearr_30114_30145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (3))){
var inst_30101 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30103__$1,inst_30101);
} else {
if((state_val_30104 === (12))){
var inst_30067 = (state_30103[(7)]);
var inst_30091 = cljs.core.vec.call(null,inst_30067);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30103__$1,(15),out,inst_30091);
} else {
if((state_val_30104 === (2))){
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(4),ch);
} else {
if((state_val_30104 === (11))){
var inst_30083 = (state_30103[(2)]);
var inst_30084 = (new Array(n));
var inst_30067 = inst_30084;
var inst_30068 = (0);
var state_30103__$1 = (function (){var statearr_30115 = state_30103;
(statearr_30115[(10)] = inst_30083);

(statearr_30115[(7)] = inst_30067);

(statearr_30115[(8)] = inst_30068);

return statearr_30115;
})();
var statearr_30116_30146 = state_30103__$1;
(statearr_30116_30146[(2)] = null);

(statearr_30116_30146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (9))){
var inst_30067 = (state_30103[(7)]);
var inst_30081 = cljs.core.vec.call(null,inst_30067);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30103__$1,(11),out,inst_30081);
} else {
if((state_val_30104 === (5))){
var inst_30071 = (state_30103[(9)]);
var inst_30067 = (state_30103[(7)]);
var inst_30068 = (state_30103[(8)]);
var inst_30076 = (state_30103[(11)]);
var inst_30075 = (inst_30067[inst_30068] = inst_30071);
var inst_30076__$1 = (inst_30068 + (1));
var inst_30077 = (inst_30076__$1 < n);
var state_30103__$1 = (function (){var statearr_30117 = state_30103;
(statearr_30117[(11)] = inst_30076__$1);

(statearr_30117[(12)] = inst_30075);

return statearr_30117;
})();
if(cljs.core.truth_(inst_30077)){
var statearr_30118_30147 = state_30103__$1;
(statearr_30118_30147[(1)] = (8));

} else {
var statearr_30119_30148 = state_30103__$1;
(statearr_30119_30148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (14))){
var inst_30096 = (state_30103[(2)]);
var inst_30097 = cljs.core.async.close_BANG_.call(null,out);
var state_30103__$1 = (function (){var statearr_30121 = state_30103;
(statearr_30121[(13)] = inst_30096);

return statearr_30121;
})();
var statearr_30122_30149 = state_30103__$1;
(statearr_30122_30149[(2)] = inst_30097);

(statearr_30122_30149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (10))){
var inst_30087 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30123_30150 = state_30103__$1;
(statearr_30123_30150[(2)] = inst_30087);

(statearr_30123_30150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (8))){
var inst_30067 = (state_30103[(7)]);
var inst_30076 = (state_30103[(11)]);
var tmp30120 = inst_30067;
var inst_30067__$1 = tmp30120;
var inst_30068 = inst_30076;
var state_30103__$1 = (function (){var statearr_30124 = state_30103;
(statearr_30124[(7)] = inst_30067__$1);

(statearr_30124[(8)] = inst_30068);

return statearr_30124;
})();
var statearr_30125_30151 = state_30103__$1;
(statearr_30125_30151[(2)] = null);

(statearr_30125_30151[(1)] = (2));


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
});})(c__27477__auto___30137,out))
;
return ((function (switch__27365__auto__,c__27477__auto___30137,out){
return (function() {
var cljs$core$async$state_machine__27366__auto__ = null;
var cljs$core$async$state_machine__27366__auto____0 = (function (){
var statearr_30129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30129[(0)] = cljs$core$async$state_machine__27366__auto__);

(statearr_30129[(1)] = (1));

return statearr_30129;
});
var cljs$core$async$state_machine__27366__auto____1 = (function (state_30103){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_30103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e30130){if((e30130 instanceof Object)){
var ex__27369__auto__ = e30130;
var statearr_30131_30152 = state_30103;
(statearr_30131_30152[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30153 = state_30103;
state_30103 = G__30153;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$state_machine__27366__auto__ = function(state_30103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27366__auto____1.call(this,state_30103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27366__auto____0;
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27366__auto____1;
return cljs$core$async$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___30137,out))
})();
var state__27479__auto__ = (function (){var statearr_30132 = f__27478__auto__.call(null);
(statearr_30132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___30137);

return statearr_30132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___30137,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30154 = [];
var len__21248__auto___30228 = arguments.length;
var i__21249__auto___30229 = (0);
while(true){
if((i__21249__auto___30229 < len__21248__auto___30228)){
args30154.push((arguments[i__21249__auto___30229]));

var G__30230 = (i__21249__auto___30229 + (1));
i__21249__auto___30229 = G__30230;
continue;
} else {
}
break;
}

var G__30156 = args30154.length;
switch (G__30156) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30154.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27477__auto___30232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27477__auto___30232,out){
return (function (){
var f__27478__auto__ = (function (){var switch__27365__auto__ = ((function (c__27477__auto___30232,out){
return (function (state_30198){
var state_val_30199 = (state_30198[(1)]);
if((state_val_30199 === (7))){
var inst_30194 = (state_30198[(2)]);
var state_30198__$1 = state_30198;
var statearr_30200_30233 = state_30198__$1;
(statearr_30200_30233[(2)] = inst_30194);

(statearr_30200_30233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30199 === (1))){
var inst_30157 = [];
var inst_30158 = inst_30157;
var inst_30159 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30198__$1 = (function (){var statearr_30201 = state_30198;
(statearr_30201[(7)] = inst_30158);

(statearr_30201[(8)] = inst_30159);

return statearr_30201;
})();
var statearr_30202_30234 = state_30198__$1;
(statearr_30202_30234[(2)] = null);

(statearr_30202_30234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30199 === (4))){
var inst_30162 = (state_30198[(9)]);
var inst_30162__$1 = (state_30198[(2)]);
var inst_30163 = (inst_30162__$1 == null);
var inst_30164 = cljs.core.not.call(null,inst_30163);
var state_30198__$1 = (function (){var statearr_30203 = state_30198;
(statearr_30203[(9)] = inst_30162__$1);

return statearr_30203;
})();
if(inst_30164){
var statearr_30204_30235 = state_30198__$1;
(statearr_30204_30235[(1)] = (5));

} else {
var statearr_30205_30236 = state_30198__$1;
(statearr_30205_30236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30199 === (15))){
var inst_30188 = (state_30198[(2)]);
var state_30198__$1 = state_30198;
var statearr_30206_30237 = state_30198__$1;
(statearr_30206_30237[(2)] = inst_30188);

(statearr_30206_30237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30199 === (13))){
var state_30198__$1 = state_30198;
var statearr_30207_30238 = state_30198__$1;
(statearr_30207_30238[(2)] = null);

(statearr_30207_30238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30199 === (6))){
var inst_30158 = (state_30198[(7)]);
var inst_30183 = inst_30158.length;
var inst_30184 = (inst_30183 > (0));
var state_30198__$1 = state_30198;
if(cljs.core.truth_(inst_30184)){
var statearr_30208_30239 = state_30198__$1;
(statearr_30208_30239[(1)] = (12));

} else {
var statearr_30209_30240 = state_30198__$1;
(statearr_30209_30240[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30199 === (3))){
var inst_30196 = (state_30198[(2)]);
var state_30198__$1 = state_30198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30198__$1,inst_30196);
} else {
if((state_val_30199 === (12))){
var inst_30158 = (state_30198[(7)]);
var inst_30186 = cljs.core.vec.call(null,inst_30158);
var state_30198__$1 = state_30198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30198__$1,(15),out,inst_30186);
} else {
if((state_val_30199 === (2))){
var state_30198__$1 = state_30198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30198__$1,(4),ch);
} else {
if((state_val_30199 === (11))){
var inst_30166 = (state_30198[(10)]);
var inst_30162 = (state_30198[(9)]);
var inst_30176 = (state_30198[(2)]);
var inst_30177 = [];
var inst_30178 = inst_30177.push(inst_30162);
var inst_30158 = inst_30177;
var inst_30159 = inst_30166;
var state_30198__$1 = (function (){var statearr_30210 = state_30198;
(statearr_30210[(7)] = inst_30158);

(statearr_30210[(8)] = inst_30159);

(statearr_30210[(11)] = inst_30178);

(statearr_30210[(12)] = inst_30176);

return statearr_30210;
})();
var statearr_30211_30241 = state_30198__$1;
(statearr_30211_30241[(2)] = null);

(statearr_30211_30241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30199 === (9))){
var inst_30158 = (state_30198[(7)]);
var inst_30174 = cljs.core.vec.call(null,inst_30158);
var state_30198__$1 = state_30198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30198__$1,(11),out,inst_30174);
} else {
if((state_val_30199 === (5))){
var inst_30159 = (state_30198[(8)]);
var inst_30166 = (state_30198[(10)]);
var inst_30162 = (state_30198[(9)]);
var inst_30166__$1 = f.call(null,inst_30162);
var inst_30167 = cljs.core._EQ_.call(null,inst_30166__$1,inst_30159);
var inst_30168 = cljs.core.keyword_identical_QMARK_.call(null,inst_30159,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30169 = (inst_30167) || (inst_30168);
var state_30198__$1 = (function (){var statearr_30212 = state_30198;
(statearr_30212[(10)] = inst_30166__$1);

return statearr_30212;
})();
if(cljs.core.truth_(inst_30169)){
var statearr_30213_30242 = state_30198__$1;
(statearr_30213_30242[(1)] = (8));

} else {
var statearr_30214_30243 = state_30198__$1;
(statearr_30214_30243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30199 === (14))){
var inst_30191 = (state_30198[(2)]);
var inst_30192 = cljs.core.async.close_BANG_.call(null,out);
var state_30198__$1 = (function (){var statearr_30216 = state_30198;
(statearr_30216[(13)] = inst_30191);

return statearr_30216;
})();
var statearr_30217_30244 = state_30198__$1;
(statearr_30217_30244[(2)] = inst_30192);

(statearr_30217_30244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30199 === (10))){
var inst_30181 = (state_30198[(2)]);
var state_30198__$1 = state_30198;
var statearr_30218_30245 = state_30198__$1;
(statearr_30218_30245[(2)] = inst_30181);

(statearr_30218_30245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30199 === (8))){
var inst_30158 = (state_30198[(7)]);
var inst_30166 = (state_30198[(10)]);
var inst_30162 = (state_30198[(9)]);
var inst_30171 = inst_30158.push(inst_30162);
var tmp30215 = inst_30158;
var inst_30158__$1 = tmp30215;
var inst_30159 = inst_30166;
var state_30198__$1 = (function (){var statearr_30219 = state_30198;
(statearr_30219[(7)] = inst_30158__$1);

(statearr_30219[(8)] = inst_30159);

(statearr_30219[(14)] = inst_30171);

return statearr_30219;
})();
var statearr_30220_30246 = state_30198__$1;
(statearr_30220_30246[(2)] = null);

(statearr_30220_30246[(1)] = (2));


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
});})(c__27477__auto___30232,out))
;
return ((function (switch__27365__auto__,c__27477__auto___30232,out){
return (function() {
var cljs$core$async$state_machine__27366__auto__ = null;
var cljs$core$async$state_machine__27366__auto____0 = (function (){
var statearr_30224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30224[(0)] = cljs$core$async$state_machine__27366__auto__);

(statearr_30224[(1)] = (1));

return statearr_30224;
});
var cljs$core$async$state_machine__27366__auto____1 = (function (state_30198){
while(true){
var ret_value__27367__auto__ = (function (){try{while(true){
var result__27368__auto__ = switch__27365__auto__.call(null,state_30198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27368__auto__;
}
break;
}
}catch (e30225){if((e30225 instanceof Object)){
var ex__27369__auto__ = e30225;
var statearr_30226_30247 = state_30198;
(statearr_30226_30247[(5)] = ex__27369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30248 = state_30198;
state_30198 = G__30248;
continue;
} else {
return ret_value__27367__auto__;
}
break;
}
});
cljs$core$async$state_machine__27366__auto__ = function(state_30198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27366__auto____1.call(this,state_30198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27366__auto____0;
cljs$core$async$state_machine__27366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27366__auto____1;
return cljs$core$async$state_machine__27366__auto__;
})()
;})(switch__27365__auto__,c__27477__auto___30232,out))
})();
var state__27479__auto__ = (function (){var statearr_30227 = f__27478__auto__.call(null);
(statearr_30227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27477__auto___30232);

return statearr_30227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27479__auto__);
});})(c__27477__auto___30232,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1452962191781