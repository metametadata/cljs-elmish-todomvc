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
var args23928 = [];
var len__17809__auto___23934 = arguments.length;
var i__17810__auto___23935 = (0);
while(true){
if((i__17810__auto___23935 < len__17809__auto___23934)){
args23928.push((arguments[i__17810__auto___23935]));

var G__23936 = (i__17810__auto___23935 + (1));
i__17810__auto___23935 = G__23936;
continue;
} else {
}
break;
}

var G__23930 = args23928.length;
switch (G__23930) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23928.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23931 = (function (f,blockable,meta23932){
this.f = f;
this.blockable = blockable;
this.meta23932 = meta23932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23933,meta23932__$1){
var self__ = this;
var _23933__$1 = this;
return (new cljs.core.async.t_cljs$core$async23931(self__.f,self__.blockable,meta23932__$1));
});

cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23933){
var self__ = this;
var _23933__$1 = this;
return self__.meta23932;
});

cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23932","meta23932",1453453548,null)], null);
});

cljs.core.async.t_cljs$core$async23931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23931";

cljs.core.async.t_cljs$core$async23931.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async23931");
});

cljs.core.async.__GT_t_cljs$core$async23931 = (function cljs$core$async$__GT_t_cljs$core$async23931(f__$1,blockable__$1,meta23932){
return (new cljs.core.async.t_cljs$core$async23931(f__$1,blockable__$1,meta23932));
});

}

return (new cljs.core.async.t_cljs$core$async23931(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args23940 = [];
var len__17809__auto___23943 = arguments.length;
var i__17810__auto___23944 = (0);
while(true){
if((i__17810__auto___23944 < len__17809__auto___23943)){
args23940.push((arguments[i__17810__auto___23944]));

var G__23945 = (i__17810__auto___23944 + (1));
i__17810__auto___23944 = G__23945;
continue;
} else {
}
break;
}

var G__23942 = args23940.length;
switch (G__23942) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23940.length)].join('')));

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
var args23947 = [];
var len__17809__auto___23950 = arguments.length;
var i__17810__auto___23951 = (0);
while(true){
if((i__17810__auto___23951 < len__17809__auto___23950)){
args23947.push((arguments[i__17810__auto___23951]));

var G__23952 = (i__17810__auto___23951 + (1));
i__17810__auto___23951 = G__23952;
continue;
} else {
}
break;
}

var G__23949 = args23947.length;
switch (G__23949) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23947.length)].join('')));

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
var args23954 = [];
var len__17809__auto___23957 = arguments.length;
var i__17810__auto___23958 = (0);
while(true){
if((i__17810__auto___23958 < len__17809__auto___23957)){
args23954.push((arguments[i__17810__auto___23958]));

var G__23959 = (i__17810__auto___23958 + (1));
i__17810__auto___23958 = G__23959;
continue;
} else {
}
break;
}

var G__23956 = args23954.length;
switch (G__23956) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23954.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23961 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23961);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23961,ret){
return (function (){
return fn1.call(null,val_23961);
});})(val_23961,ret))
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
var args23962 = [];
var len__17809__auto___23965 = arguments.length;
var i__17810__auto___23966 = (0);
while(true){
if((i__17810__auto___23966 < len__17809__auto___23965)){
args23962.push((arguments[i__17810__auto___23966]));

var G__23967 = (i__17810__auto___23966 + (1));
i__17810__auto___23966 = G__23967;
continue;
} else {
}
break;
}

var G__23964 = args23962.length;
switch (G__23964) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23962.length)].join('')));

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
var n__17654__auto___23969 = n;
var x_23970 = (0);
while(true){
if((x_23970 < n__17654__auto___23969)){
(a[x_23970] = (0));

var G__23971 = (x_23970 + (1));
x_23970 = G__23971;
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

var G__23972 = (i + (1));
i = G__23972;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23976 = (function (alt_flag,flag,meta23977){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23977 = meta23977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23978,meta23977__$1){
var self__ = this;
var _23978__$1 = this;
return (new cljs.core.async.t_cljs$core$async23976(self__.alt_flag,self__.flag,meta23977__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23978){
var self__ = this;
var _23978__$1 = this;
return self__.meta23977;
});})(flag))
;

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23976.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23977","meta23977",-1301012205,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23976";

cljs.core.async.t_cljs$core$async23976.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async23976");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23976 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23976(alt_flag__$1,flag__$1,meta23977){
return (new cljs.core.async.t_cljs$core$async23976(alt_flag__$1,flag__$1,meta23977));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23976(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23982 = (function (alt_handler,flag,cb,meta23983){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23983 = meta23983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23984,meta23983__$1){
var self__ = this;
var _23984__$1 = this;
return (new cljs.core.async.t_cljs$core$async23982(self__.alt_handler,self__.flag,self__.cb,meta23983__$1));
});

cljs.core.async.t_cljs$core$async23982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23984){
var self__ = this;
var _23984__$1 = this;
return self__.meta23983;
});

cljs.core.async.t_cljs$core$async23982.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23983","meta23983",-2113948978,null)], null);
});

cljs.core.async.t_cljs$core$async23982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23982";

cljs.core.async.t_cljs$core$async23982.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async23982");
});

cljs.core.async.__GT_t_cljs$core$async23982 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23982(alt_handler__$1,flag__$1,cb__$1,meta23983){
return (new cljs.core.async.t_cljs$core$async23982(alt_handler__$1,flag__$1,cb__$1,meta23983));
});

}

return (new cljs.core.async.t_cljs$core$async23982(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23985_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23985_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23986_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23986_SHARP_,port], null));
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
var G__23987 = (i + (1));
i = G__23987;
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
var len__17809__auto___23993 = arguments.length;
var i__17810__auto___23994 = (0);
while(true){
if((i__17810__auto___23994 < len__17809__auto___23993)){
args__17816__auto__.push((arguments[i__17810__auto___23994]));

var G__23995 = (i__17810__auto___23994 + (1));
i__17810__auto___23994 = G__23995;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((1) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23990){
var map__23991 = p__23990;
var map__23991__$1 = ((((!((map__23991 == null)))?((((map__23991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23991):map__23991);
var opts = map__23991__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23988){
var G__23989 = cljs.core.first.call(null,seq23988);
var seq23988__$1 = cljs.core.next.call(null,seq23988);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23989,seq23988__$1);
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
var args23996 = [];
var len__17809__auto___24046 = arguments.length;
var i__17810__auto___24047 = (0);
while(true){
if((i__17810__auto___24047 < len__17809__auto___24046)){
args23996.push((arguments[i__17810__auto___24047]));

var G__24048 = (i__17810__auto___24047 + (1));
i__17810__auto___24047 = G__24048;
continue;
} else {
}
break;
}

var G__23998 = args23996.length;
switch (G__23998) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23996.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23883__auto___24050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___24050){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___24050){
return (function (state_24022){
var state_val_24023 = (state_24022[(1)]);
if((state_val_24023 === (7))){
var inst_24018 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
var statearr_24024_24051 = state_24022__$1;
(statearr_24024_24051[(2)] = inst_24018);

(statearr_24024_24051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (1))){
var state_24022__$1 = state_24022;
var statearr_24025_24052 = state_24022__$1;
(statearr_24025_24052[(2)] = null);

(statearr_24025_24052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (4))){
var inst_24001 = (state_24022[(7)]);
var inst_24001__$1 = (state_24022[(2)]);
var inst_24002 = (inst_24001__$1 == null);
var state_24022__$1 = (function (){var statearr_24026 = state_24022;
(statearr_24026[(7)] = inst_24001__$1);

return statearr_24026;
})();
if(cljs.core.truth_(inst_24002)){
var statearr_24027_24053 = state_24022__$1;
(statearr_24027_24053[(1)] = (5));

} else {
var statearr_24028_24054 = state_24022__$1;
(statearr_24028_24054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (13))){
var state_24022__$1 = state_24022;
var statearr_24029_24055 = state_24022__$1;
(statearr_24029_24055[(2)] = null);

(statearr_24029_24055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (6))){
var inst_24001 = (state_24022[(7)]);
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24022__$1,(11),to,inst_24001);
} else {
if((state_val_24023 === (3))){
var inst_24020 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24022__$1,inst_24020);
} else {
if((state_val_24023 === (12))){
var state_24022__$1 = state_24022;
var statearr_24030_24056 = state_24022__$1;
(statearr_24030_24056[(2)] = null);

(statearr_24030_24056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (2))){
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24022__$1,(4),from);
} else {
if((state_val_24023 === (11))){
var inst_24011 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
if(cljs.core.truth_(inst_24011)){
var statearr_24031_24057 = state_24022__$1;
(statearr_24031_24057[(1)] = (12));

} else {
var statearr_24032_24058 = state_24022__$1;
(statearr_24032_24058[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (9))){
var state_24022__$1 = state_24022;
var statearr_24033_24059 = state_24022__$1;
(statearr_24033_24059[(2)] = null);

(statearr_24033_24059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (5))){
var state_24022__$1 = state_24022;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24034_24060 = state_24022__$1;
(statearr_24034_24060[(1)] = (8));

} else {
var statearr_24035_24061 = state_24022__$1;
(statearr_24035_24061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (14))){
var inst_24016 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
var statearr_24036_24062 = state_24022__$1;
(statearr_24036_24062[(2)] = inst_24016);

(statearr_24036_24062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (10))){
var inst_24008 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
var statearr_24037_24063 = state_24022__$1;
(statearr_24037_24063[(2)] = inst_24008);

(statearr_24037_24063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (8))){
var inst_24005 = cljs.core.async.close_BANG_.call(null,to);
var state_24022__$1 = state_24022;
var statearr_24038_24064 = state_24022__$1;
(statearr_24038_24064[(2)] = inst_24005);

(statearr_24038_24064[(1)] = (10));


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
});})(c__23883__auto___24050))
;
return ((function (switch__23771__auto__,c__23883__auto___24050){
return (function() {
var cljs$core$async$state_machine__23772__auto__ = null;
var cljs$core$async$state_machine__23772__auto____0 = (function (){
var statearr_24042 = [null,null,null,null,null,null,null,null];
(statearr_24042[(0)] = cljs$core$async$state_machine__23772__auto__);

(statearr_24042[(1)] = (1));

return statearr_24042;
});
var cljs$core$async$state_machine__23772__auto____1 = (function (state_24022){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_24022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e24043){if((e24043 instanceof Object)){
var ex__23775__auto__ = e24043;
var statearr_24044_24065 = state_24022;
(statearr_24044_24065[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24066 = state_24022;
state_24022 = G__24066;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$state_machine__23772__auto__ = function(state_24022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23772__auto____1.call(this,state_24022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23772__auto____0;
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23772__auto____1;
return cljs$core$async$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___24050))
})();
var state__23885__auto__ = (function (){var statearr_24045 = f__23884__auto__.call(null);
(statearr_24045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___24050);

return statearr_24045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___24050))
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
return (function (p__24250){
var vec__24251 = p__24250;
var v = cljs.core.nth.call(null,vec__24251,(0),null);
var p = cljs.core.nth.call(null,vec__24251,(1),null);
var job = vec__24251;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23883__auto___24433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___24433,res,vec__24251,v,p,job,jobs,results){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___24433,res,vec__24251,v,p,job,jobs,results){
return (function (state_24256){
var state_val_24257 = (state_24256[(1)]);
if((state_val_24257 === (1))){
var state_24256__$1 = state_24256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24256__$1,(2),res,v);
} else {
if((state_val_24257 === (2))){
var inst_24253 = (state_24256[(2)]);
var inst_24254 = cljs.core.async.close_BANG_.call(null,res);
var state_24256__$1 = (function (){var statearr_24258 = state_24256;
(statearr_24258[(7)] = inst_24253);

return statearr_24258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24256__$1,inst_24254);
} else {
return null;
}
}
});})(c__23883__auto___24433,res,vec__24251,v,p,job,jobs,results))
;
return ((function (switch__23771__auto__,c__23883__auto___24433,res,vec__24251,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0 = (function (){
var statearr_24262 = [null,null,null,null,null,null,null,null];
(statearr_24262[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__);

(statearr_24262[(1)] = (1));

return statearr_24262;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1 = (function (state_24256){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_24256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e24263){if((e24263 instanceof Object)){
var ex__23775__auto__ = e24263;
var statearr_24264_24434 = state_24256;
(statearr_24264_24434[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24435 = state_24256;
state_24256 = G__24435;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__ = function(state_24256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1.call(this,state_24256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___24433,res,vec__24251,v,p,job,jobs,results))
})();
var state__23885__auto__ = (function (){var statearr_24265 = f__23884__auto__.call(null);
(statearr_24265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___24433);

return statearr_24265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___24433,res,vec__24251,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24266){
var vec__24267 = p__24266;
var v = cljs.core.nth.call(null,vec__24267,(0),null);
var p = cljs.core.nth.call(null,vec__24267,(1),null);
var job = vec__24267;
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
var n__17654__auto___24436 = n;
var __24437 = (0);
while(true){
if((__24437 < n__17654__auto___24436)){
var G__24268_24438 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24268_24438) {
case "compute":
var c__23883__auto___24440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24437,c__23883__auto___24440,G__24268_24438,n__17654__auto___24436,jobs,results,process,async){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (__24437,c__23883__auto___24440,G__24268_24438,n__17654__auto___24436,jobs,results,process,async){
return (function (state_24281){
var state_val_24282 = (state_24281[(1)]);
if((state_val_24282 === (1))){
var state_24281__$1 = state_24281;
var statearr_24283_24441 = state_24281__$1;
(statearr_24283_24441[(2)] = null);

(statearr_24283_24441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (2))){
var state_24281__$1 = state_24281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24281__$1,(4),jobs);
} else {
if((state_val_24282 === (3))){
var inst_24279 = (state_24281[(2)]);
var state_24281__$1 = state_24281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24281__$1,inst_24279);
} else {
if((state_val_24282 === (4))){
var inst_24271 = (state_24281[(2)]);
var inst_24272 = process.call(null,inst_24271);
var state_24281__$1 = state_24281;
if(cljs.core.truth_(inst_24272)){
var statearr_24284_24442 = state_24281__$1;
(statearr_24284_24442[(1)] = (5));

} else {
var statearr_24285_24443 = state_24281__$1;
(statearr_24285_24443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (5))){
var state_24281__$1 = state_24281;
var statearr_24286_24444 = state_24281__$1;
(statearr_24286_24444[(2)] = null);

(statearr_24286_24444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (6))){
var state_24281__$1 = state_24281;
var statearr_24287_24445 = state_24281__$1;
(statearr_24287_24445[(2)] = null);

(statearr_24287_24445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (7))){
var inst_24277 = (state_24281[(2)]);
var state_24281__$1 = state_24281;
var statearr_24288_24446 = state_24281__$1;
(statearr_24288_24446[(2)] = inst_24277);

(statearr_24288_24446[(1)] = (3));


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
});})(__24437,c__23883__auto___24440,G__24268_24438,n__17654__auto___24436,jobs,results,process,async))
;
return ((function (__24437,switch__23771__auto__,c__23883__auto___24440,G__24268_24438,n__17654__auto___24436,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0 = (function (){
var statearr_24292 = [null,null,null,null,null,null,null];
(statearr_24292[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__);

(statearr_24292[(1)] = (1));

return statearr_24292;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1 = (function (state_24281){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_24281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e24293){if((e24293 instanceof Object)){
var ex__23775__auto__ = e24293;
var statearr_24294_24447 = state_24281;
(statearr_24294_24447[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24448 = state_24281;
state_24281 = G__24448;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__ = function(state_24281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1.call(this,state_24281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__;
})()
;})(__24437,switch__23771__auto__,c__23883__auto___24440,G__24268_24438,n__17654__auto___24436,jobs,results,process,async))
})();
var state__23885__auto__ = (function (){var statearr_24295 = f__23884__auto__.call(null);
(statearr_24295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___24440);

return statearr_24295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(__24437,c__23883__auto___24440,G__24268_24438,n__17654__auto___24436,jobs,results,process,async))
);


break;
case "async":
var c__23883__auto___24449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24437,c__23883__auto___24449,G__24268_24438,n__17654__auto___24436,jobs,results,process,async){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (__24437,c__23883__auto___24449,G__24268_24438,n__17654__auto___24436,jobs,results,process,async){
return (function (state_24308){
var state_val_24309 = (state_24308[(1)]);
if((state_val_24309 === (1))){
var state_24308__$1 = state_24308;
var statearr_24310_24450 = state_24308__$1;
(statearr_24310_24450[(2)] = null);

(statearr_24310_24450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (2))){
var state_24308__$1 = state_24308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24308__$1,(4),jobs);
} else {
if((state_val_24309 === (3))){
var inst_24306 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24308__$1,inst_24306);
} else {
if((state_val_24309 === (4))){
var inst_24298 = (state_24308[(2)]);
var inst_24299 = async.call(null,inst_24298);
var state_24308__$1 = state_24308;
if(cljs.core.truth_(inst_24299)){
var statearr_24311_24451 = state_24308__$1;
(statearr_24311_24451[(1)] = (5));

} else {
var statearr_24312_24452 = state_24308__$1;
(statearr_24312_24452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (5))){
var state_24308__$1 = state_24308;
var statearr_24313_24453 = state_24308__$1;
(statearr_24313_24453[(2)] = null);

(statearr_24313_24453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (6))){
var state_24308__$1 = state_24308;
var statearr_24314_24454 = state_24308__$1;
(statearr_24314_24454[(2)] = null);

(statearr_24314_24454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (7))){
var inst_24304 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
var statearr_24315_24455 = state_24308__$1;
(statearr_24315_24455[(2)] = inst_24304);

(statearr_24315_24455[(1)] = (3));


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
});})(__24437,c__23883__auto___24449,G__24268_24438,n__17654__auto___24436,jobs,results,process,async))
;
return ((function (__24437,switch__23771__auto__,c__23883__auto___24449,G__24268_24438,n__17654__auto___24436,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0 = (function (){
var statearr_24319 = [null,null,null,null,null,null,null];
(statearr_24319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__);

(statearr_24319[(1)] = (1));

return statearr_24319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1 = (function (state_24308){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_24308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e24320){if((e24320 instanceof Object)){
var ex__23775__auto__ = e24320;
var statearr_24321_24456 = state_24308;
(statearr_24321_24456[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24457 = state_24308;
state_24308 = G__24457;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__ = function(state_24308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1.call(this,state_24308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__;
})()
;})(__24437,switch__23771__auto__,c__23883__auto___24449,G__24268_24438,n__17654__auto___24436,jobs,results,process,async))
})();
var state__23885__auto__ = (function (){var statearr_24322 = f__23884__auto__.call(null);
(statearr_24322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___24449);

return statearr_24322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(__24437,c__23883__auto___24449,G__24268_24438,n__17654__auto___24436,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24458 = (__24437 + (1));
__24437 = G__24458;
continue;
} else {
}
break;
}

var c__23883__auto___24459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___24459,jobs,results,process,async){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___24459,jobs,results,process,async){
return (function (state_24344){
var state_val_24345 = (state_24344[(1)]);
if((state_val_24345 === (1))){
var state_24344__$1 = state_24344;
var statearr_24346_24460 = state_24344__$1;
(statearr_24346_24460[(2)] = null);

(statearr_24346_24460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24345 === (2))){
var state_24344__$1 = state_24344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24344__$1,(4),from);
} else {
if((state_val_24345 === (3))){
var inst_24342 = (state_24344[(2)]);
var state_24344__$1 = state_24344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24344__$1,inst_24342);
} else {
if((state_val_24345 === (4))){
var inst_24325 = (state_24344[(7)]);
var inst_24325__$1 = (state_24344[(2)]);
var inst_24326 = (inst_24325__$1 == null);
var state_24344__$1 = (function (){var statearr_24347 = state_24344;
(statearr_24347[(7)] = inst_24325__$1);

return statearr_24347;
})();
if(cljs.core.truth_(inst_24326)){
var statearr_24348_24461 = state_24344__$1;
(statearr_24348_24461[(1)] = (5));

} else {
var statearr_24349_24462 = state_24344__$1;
(statearr_24349_24462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24345 === (5))){
var inst_24328 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24344__$1 = state_24344;
var statearr_24350_24463 = state_24344__$1;
(statearr_24350_24463[(2)] = inst_24328);

(statearr_24350_24463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24345 === (6))){
var inst_24325 = (state_24344[(7)]);
var inst_24330 = (state_24344[(8)]);
var inst_24330__$1 = cljs.core.async.chan.call(null,(1));
var inst_24331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24332 = [inst_24325,inst_24330__$1];
var inst_24333 = (new cljs.core.PersistentVector(null,2,(5),inst_24331,inst_24332,null));
var state_24344__$1 = (function (){var statearr_24351 = state_24344;
(statearr_24351[(8)] = inst_24330__$1);

return statearr_24351;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24344__$1,(8),jobs,inst_24333);
} else {
if((state_val_24345 === (7))){
var inst_24340 = (state_24344[(2)]);
var state_24344__$1 = state_24344;
var statearr_24352_24464 = state_24344__$1;
(statearr_24352_24464[(2)] = inst_24340);

(statearr_24352_24464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24345 === (8))){
var inst_24330 = (state_24344[(8)]);
var inst_24335 = (state_24344[(2)]);
var state_24344__$1 = (function (){var statearr_24353 = state_24344;
(statearr_24353[(9)] = inst_24335);

return statearr_24353;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24344__$1,(9),results,inst_24330);
} else {
if((state_val_24345 === (9))){
var inst_24337 = (state_24344[(2)]);
var state_24344__$1 = (function (){var statearr_24354 = state_24344;
(statearr_24354[(10)] = inst_24337);

return statearr_24354;
})();
var statearr_24355_24465 = state_24344__$1;
(statearr_24355_24465[(2)] = null);

(statearr_24355_24465[(1)] = (2));


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
});})(c__23883__auto___24459,jobs,results,process,async))
;
return ((function (switch__23771__auto__,c__23883__auto___24459,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0 = (function (){
var statearr_24359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__);

(statearr_24359[(1)] = (1));

return statearr_24359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1 = (function (state_24344){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_24344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e24360){if((e24360 instanceof Object)){
var ex__23775__auto__ = e24360;
var statearr_24361_24466 = state_24344;
(statearr_24361_24466[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24467 = state_24344;
state_24344 = G__24467;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__ = function(state_24344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1.call(this,state_24344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___24459,jobs,results,process,async))
})();
var state__23885__auto__ = (function (){var statearr_24362 = f__23884__auto__.call(null);
(statearr_24362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___24459);

return statearr_24362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___24459,jobs,results,process,async))
);


var c__23883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto__,jobs,results,process,async){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto__,jobs,results,process,async){
return (function (state_24400){
var state_val_24401 = (state_24400[(1)]);
if((state_val_24401 === (7))){
var inst_24396 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
var statearr_24402_24468 = state_24400__$1;
(statearr_24402_24468[(2)] = inst_24396);

(statearr_24402_24468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (20))){
var state_24400__$1 = state_24400;
var statearr_24403_24469 = state_24400__$1;
(statearr_24403_24469[(2)] = null);

(statearr_24403_24469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (1))){
var state_24400__$1 = state_24400;
var statearr_24404_24470 = state_24400__$1;
(statearr_24404_24470[(2)] = null);

(statearr_24404_24470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (4))){
var inst_24365 = (state_24400[(7)]);
var inst_24365__$1 = (state_24400[(2)]);
var inst_24366 = (inst_24365__$1 == null);
var state_24400__$1 = (function (){var statearr_24405 = state_24400;
(statearr_24405[(7)] = inst_24365__$1);

return statearr_24405;
})();
if(cljs.core.truth_(inst_24366)){
var statearr_24406_24471 = state_24400__$1;
(statearr_24406_24471[(1)] = (5));

} else {
var statearr_24407_24472 = state_24400__$1;
(statearr_24407_24472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (15))){
var inst_24378 = (state_24400[(8)]);
var state_24400__$1 = state_24400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24400__$1,(18),to,inst_24378);
} else {
if((state_val_24401 === (21))){
var inst_24391 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
var statearr_24408_24473 = state_24400__$1;
(statearr_24408_24473[(2)] = inst_24391);

(statearr_24408_24473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (13))){
var inst_24393 = (state_24400[(2)]);
var state_24400__$1 = (function (){var statearr_24409 = state_24400;
(statearr_24409[(9)] = inst_24393);

return statearr_24409;
})();
var statearr_24410_24474 = state_24400__$1;
(statearr_24410_24474[(2)] = null);

(statearr_24410_24474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (6))){
var inst_24365 = (state_24400[(7)]);
var state_24400__$1 = state_24400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24400__$1,(11),inst_24365);
} else {
if((state_val_24401 === (17))){
var inst_24386 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
if(cljs.core.truth_(inst_24386)){
var statearr_24411_24475 = state_24400__$1;
(statearr_24411_24475[(1)] = (19));

} else {
var statearr_24412_24476 = state_24400__$1;
(statearr_24412_24476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (3))){
var inst_24398 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24400__$1,inst_24398);
} else {
if((state_val_24401 === (12))){
var inst_24375 = (state_24400[(10)]);
var state_24400__$1 = state_24400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24400__$1,(14),inst_24375);
} else {
if((state_val_24401 === (2))){
var state_24400__$1 = state_24400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24400__$1,(4),results);
} else {
if((state_val_24401 === (19))){
var state_24400__$1 = state_24400;
var statearr_24413_24477 = state_24400__$1;
(statearr_24413_24477[(2)] = null);

(statearr_24413_24477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (11))){
var inst_24375 = (state_24400[(2)]);
var state_24400__$1 = (function (){var statearr_24414 = state_24400;
(statearr_24414[(10)] = inst_24375);

return statearr_24414;
})();
var statearr_24415_24478 = state_24400__$1;
(statearr_24415_24478[(2)] = null);

(statearr_24415_24478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (9))){
var state_24400__$1 = state_24400;
var statearr_24416_24479 = state_24400__$1;
(statearr_24416_24479[(2)] = null);

(statearr_24416_24479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (5))){
var state_24400__$1 = state_24400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24417_24480 = state_24400__$1;
(statearr_24417_24480[(1)] = (8));

} else {
var statearr_24418_24481 = state_24400__$1;
(statearr_24418_24481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (14))){
var inst_24380 = (state_24400[(11)]);
var inst_24378 = (state_24400[(8)]);
var inst_24378__$1 = (state_24400[(2)]);
var inst_24379 = (inst_24378__$1 == null);
var inst_24380__$1 = cljs.core.not.call(null,inst_24379);
var state_24400__$1 = (function (){var statearr_24419 = state_24400;
(statearr_24419[(11)] = inst_24380__$1);

(statearr_24419[(8)] = inst_24378__$1);

return statearr_24419;
})();
if(inst_24380__$1){
var statearr_24420_24482 = state_24400__$1;
(statearr_24420_24482[(1)] = (15));

} else {
var statearr_24421_24483 = state_24400__$1;
(statearr_24421_24483[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (16))){
var inst_24380 = (state_24400[(11)]);
var state_24400__$1 = state_24400;
var statearr_24422_24484 = state_24400__$1;
(statearr_24422_24484[(2)] = inst_24380);

(statearr_24422_24484[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (10))){
var inst_24372 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
var statearr_24423_24485 = state_24400__$1;
(statearr_24423_24485[(2)] = inst_24372);

(statearr_24423_24485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (18))){
var inst_24383 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
var statearr_24424_24486 = state_24400__$1;
(statearr_24424_24486[(2)] = inst_24383);

(statearr_24424_24486[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (8))){
var inst_24369 = cljs.core.async.close_BANG_.call(null,to);
var state_24400__$1 = state_24400;
var statearr_24425_24487 = state_24400__$1;
(statearr_24425_24487[(2)] = inst_24369);

(statearr_24425_24487[(1)] = (10));


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
});})(c__23883__auto__,jobs,results,process,async))
;
return ((function (switch__23771__auto__,c__23883__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0 = (function (){
var statearr_24429 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__);

(statearr_24429[(1)] = (1));

return statearr_24429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1 = (function (state_24400){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_24400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e24430){if((e24430 instanceof Object)){
var ex__23775__auto__ = e24430;
var statearr_24431_24488 = state_24400;
(statearr_24431_24488[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24489 = state_24400;
state_24400 = G__24489;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__ = function(state_24400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1.call(this,state_24400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23772__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto__,jobs,results,process,async))
})();
var state__23885__auto__ = (function (){var statearr_24432 = f__23884__auto__.call(null);
(statearr_24432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto__);

return statearr_24432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto__,jobs,results,process,async))
);

return c__23883__auto__;
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
var args24490 = [];
var len__17809__auto___24493 = arguments.length;
var i__17810__auto___24494 = (0);
while(true){
if((i__17810__auto___24494 < len__17809__auto___24493)){
args24490.push((arguments[i__17810__auto___24494]));

var G__24495 = (i__17810__auto___24494 + (1));
i__17810__auto___24494 = G__24495;
continue;
} else {
}
break;
}

var G__24492 = args24490.length;
switch (G__24492) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24490.length)].join('')));

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
var args24497 = [];
var len__17809__auto___24500 = arguments.length;
var i__17810__auto___24501 = (0);
while(true){
if((i__17810__auto___24501 < len__17809__auto___24500)){
args24497.push((arguments[i__17810__auto___24501]));

var G__24502 = (i__17810__auto___24501 + (1));
i__17810__auto___24501 = G__24502;
continue;
} else {
}
break;
}

var G__24499 = args24497.length;
switch (G__24499) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24497.length)].join('')));

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
var args24504 = [];
var len__17809__auto___24557 = arguments.length;
var i__17810__auto___24558 = (0);
while(true){
if((i__17810__auto___24558 < len__17809__auto___24557)){
args24504.push((arguments[i__17810__auto___24558]));

var G__24559 = (i__17810__auto___24558 + (1));
i__17810__auto___24558 = G__24559;
continue;
} else {
}
break;
}

var G__24506 = args24504.length;
switch (G__24506) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24504.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23883__auto___24561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___24561,tc,fc){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___24561,tc,fc){
return (function (state_24532){
var state_val_24533 = (state_24532[(1)]);
if((state_val_24533 === (7))){
var inst_24528 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
var statearr_24534_24562 = state_24532__$1;
(statearr_24534_24562[(2)] = inst_24528);

(statearr_24534_24562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (1))){
var state_24532__$1 = state_24532;
var statearr_24535_24563 = state_24532__$1;
(statearr_24535_24563[(2)] = null);

(statearr_24535_24563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (4))){
var inst_24509 = (state_24532[(7)]);
var inst_24509__$1 = (state_24532[(2)]);
var inst_24510 = (inst_24509__$1 == null);
var state_24532__$1 = (function (){var statearr_24536 = state_24532;
(statearr_24536[(7)] = inst_24509__$1);

return statearr_24536;
})();
if(cljs.core.truth_(inst_24510)){
var statearr_24537_24564 = state_24532__$1;
(statearr_24537_24564[(1)] = (5));

} else {
var statearr_24538_24565 = state_24532__$1;
(statearr_24538_24565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (13))){
var state_24532__$1 = state_24532;
var statearr_24539_24566 = state_24532__$1;
(statearr_24539_24566[(2)] = null);

(statearr_24539_24566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (6))){
var inst_24509 = (state_24532[(7)]);
var inst_24515 = p.call(null,inst_24509);
var state_24532__$1 = state_24532;
if(cljs.core.truth_(inst_24515)){
var statearr_24540_24567 = state_24532__$1;
(statearr_24540_24567[(1)] = (9));

} else {
var statearr_24541_24568 = state_24532__$1;
(statearr_24541_24568[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (3))){
var inst_24530 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24532__$1,inst_24530);
} else {
if((state_val_24533 === (12))){
var state_24532__$1 = state_24532;
var statearr_24542_24569 = state_24532__$1;
(statearr_24542_24569[(2)] = null);

(statearr_24542_24569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (2))){
var state_24532__$1 = state_24532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24532__$1,(4),ch);
} else {
if((state_val_24533 === (11))){
var inst_24509 = (state_24532[(7)]);
var inst_24519 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24532__$1,(8),inst_24519,inst_24509);
} else {
if((state_val_24533 === (9))){
var state_24532__$1 = state_24532;
var statearr_24543_24570 = state_24532__$1;
(statearr_24543_24570[(2)] = tc);

(statearr_24543_24570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (5))){
var inst_24512 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24513 = cljs.core.async.close_BANG_.call(null,fc);
var state_24532__$1 = (function (){var statearr_24544 = state_24532;
(statearr_24544[(8)] = inst_24512);

return statearr_24544;
})();
var statearr_24545_24571 = state_24532__$1;
(statearr_24545_24571[(2)] = inst_24513);

(statearr_24545_24571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (14))){
var inst_24526 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
var statearr_24546_24572 = state_24532__$1;
(statearr_24546_24572[(2)] = inst_24526);

(statearr_24546_24572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (10))){
var state_24532__$1 = state_24532;
var statearr_24547_24573 = state_24532__$1;
(statearr_24547_24573[(2)] = fc);

(statearr_24547_24573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (8))){
var inst_24521 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
if(cljs.core.truth_(inst_24521)){
var statearr_24548_24574 = state_24532__$1;
(statearr_24548_24574[(1)] = (12));

} else {
var statearr_24549_24575 = state_24532__$1;
(statearr_24549_24575[(1)] = (13));

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
});})(c__23883__auto___24561,tc,fc))
;
return ((function (switch__23771__auto__,c__23883__auto___24561,tc,fc){
return (function() {
var cljs$core$async$state_machine__23772__auto__ = null;
var cljs$core$async$state_machine__23772__auto____0 = (function (){
var statearr_24553 = [null,null,null,null,null,null,null,null,null];
(statearr_24553[(0)] = cljs$core$async$state_machine__23772__auto__);

(statearr_24553[(1)] = (1));

return statearr_24553;
});
var cljs$core$async$state_machine__23772__auto____1 = (function (state_24532){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_24532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e24554){if((e24554 instanceof Object)){
var ex__23775__auto__ = e24554;
var statearr_24555_24576 = state_24532;
(statearr_24555_24576[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24577 = state_24532;
state_24532 = G__24577;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$state_machine__23772__auto__ = function(state_24532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23772__auto____1.call(this,state_24532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23772__auto____0;
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23772__auto____1;
return cljs$core$async$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___24561,tc,fc))
})();
var state__23885__auto__ = (function (){var statearr_24556 = f__23884__auto__.call(null);
(statearr_24556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___24561);

return statearr_24556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___24561,tc,fc))
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
var c__23883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto__){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto__){
return (function (state_24641){
var state_val_24642 = (state_24641[(1)]);
if((state_val_24642 === (7))){
var inst_24637 = (state_24641[(2)]);
var state_24641__$1 = state_24641;
var statearr_24643_24664 = state_24641__$1;
(statearr_24643_24664[(2)] = inst_24637);

(statearr_24643_24664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24642 === (1))){
var inst_24621 = init;
var state_24641__$1 = (function (){var statearr_24644 = state_24641;
(statearr_24644[(7)] = inst_24621);

return statearr_24644;
})();
var statearr_24645_24665 = state_24641__$1;
(statearr_24645_24665[(2)] = null);

(statearr_24645_24665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24642 === (4))){
var inst_24624 = (state_24641[(8)]);
var inst_24624__$1 = (state_24641[(2)]);
var inst_24625 = (inst_24624__$1 == null);
var state_24641__$1 = (function (){var statearr_24646 = state_24641;
(statearr_24646[(8)] = inst_24624__$1);

return statearr_24646;
})();
if(cljs.core.truth_(inst_24625)){
var statearr_24647_24666 = state_24641__$1;
(statearr_24647_24666[(1)] = (5));

} else {
var statearr_24648_24667 = state_24641__$1;
(statearr_24648_24667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24642 === (6))){
var inst_24628 = (state_24641[(9)]);
var inst_24624 = (state_24641[(8)]);
var inst_24621 = (state_24641[(7)]);
var inst_24628__$1 = f.call(null,inst_24621,inst_24624);
var inst_24629 = cljs.core.reduced_QMARK_.call(null,inst_24628__$1);
var state_24641__$1 = (function (){var statearr_24649 = state_24641;
(statearr_24649[(9)] = inst_24628__$1);

return statearr_24649;
})();
if(inst_24629){
var statearr_24650_24668 = state_24641__$1;
(statearr_24650_24668[(1)] = (8));

} else {
var statearr_24651_24669 = state_24641__$1;
(statearr_24651_24669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24642 === (3))){
var inst_24639 = (state_24641[(2)]);
var state_24641__$1 = state_24641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24641__$1,inst_24639);
} else {
if((state_val_24642 === (2))){
var state_24641__$1 = state_24641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24641__$1,(4),ch);
} else {
if((state_val_24642 === (9))){
var inst_24628 = (state_24641[(9)]);
var inst_24621 = inst_24628;
var state_24641__$1 = (function (){var statearr_24652 = state_24641;
(statearr_24652[(7)] = inst_24621);

return statearr_24652;
})();
var statearr_24653_24670 = state_24641__$1;
(statearr_24653_24670[(2)] = null);

(statearr_24653_24670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24642 === (5))){
var inst_24621 = (state_24641[(7)]);
var state_24641__$1 = state_24641;
var statearr_24654_24671 = state_24641__$1;
(statearr_24654_24671[(2)] = inst_24621);

(statearr_24654_24671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24642 === (10))){
var inst_24635 = (state_24641[(2)]);
var state_24641__$1 = state_24641;
var statearr_24655_24672 = state_24641__$1;
(statearr_24655_24672[(2)] = inst_24635);

(statearr_24655_24672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24642 === (8))){
var inst_24628 = (state_24641[(9)]);
var inst_24631 = cljs.core.deref.call(null,inst_24628);
var state_24641__$1 = state_24641;
var statearr_24656_24673 = state_24641__$1;
(statearr_24656_24673[(2)] = inst_24631);

(statearr_24656_24673[(1)] = (10));


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
});})(c__23883__auto__))
;
return ((function (switch__23771__auto__,c__23883__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23772__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23772__auto____0 = (function (){
var statearr_24660 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24660[(0)] = cljs$core$async$reduce_$_state_machine__23772__auto__);

(statearr_24660[(1)] = (1));

return statearr_24660;
});
var cljs$core$async$reduce_$_state_machine__23772__auto____1 = (function (state_24641){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_24641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e24661){if((e24661 instanceof Object)){
var ex__23775__auto__ = e24661;
var statearr_24662_24674 = state_24641;
(statearr_24662_24674[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24675 = state_24641;
state_24641 = G__24675;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23772__auto__ = function(state_24641){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23772__auto____1.call(this,state_24641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23772__auto____0;
cljs$core$async$reduce_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23772__auto____1;
return cljs$core$async$reduce_$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto__))
})();
var state__23885__auto__ = (function (){var statearr_24663 = f__23884__auto__.call(null);
(statearr_24663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto__);

return statearr_24663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto__))
);

return c__23883__auto__;
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
var args24676 = [];
var len__17809__auto___24728 = arguments.length;
var i__17810__auto___24729 = (0);
while(true){
if((i__17810__auto___24729 < len__17809__auto___24728)){
args24676.push((arguments[i__17810__auto___24729]));

var G__24730 = (i__17810__auto___24729 + (1));
i__17810__auto___24729 = G__24730;
continue;
} else {
}
break;
}

var G__24678 = args24676.length;
switch (G__24678) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24676.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto__){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto__){
return (function (state_24703){
var state_val_24704 = (state_24703[(1)]);
if((state_val_24704 === (7))){
var inst_24685 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
var statearr_24705_24732 = state_24703__$1;
(statearr_24705_24732[(2)] = inst_24685);

(statearr_24705_24732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (1))){
var inst_24679 = cljs.core.seq.call(null,coll);
var inst_24680 = inst_24679;
var state_24703__$1 = (function (){var statearr_24706 = state_24703;
(statearr_24706[(7)] = inst_24680);

return statearr_24706;
})();
var statearr_24707_24733 = state_24703__$1;
(statearr_24707_24733[(2)] = null);

(statearr_24707_24733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (4))){
var inst_24680 = (state_24703[(7)]);
var inst_24683 = cljs.core.first.call(null,inst_24680);
var state_24703__$1 = state_24703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24703__$1,(7),ch,inst_24683);
} else {
if((state_val_24704 === (13))){
var inst_24697 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
var statearr_24708_24734 = state_24703__$1;
(statearr_24708_24734[(2)] = inst_24697);

(statearr_24708_24734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (6))){
var inst_24688 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
if(cljs.core.truth_(inst_24688)){
var statearr_24709_24735 = state_24703__$1;
(statearr_24709_24735[(1)] = (8));

} else {
var statearr_24710_24736 = state_24703__$1;
(statearr_24710_24736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (3))){
var inst_24701 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24703__$1,inst_24701);
} else {
if((state_val_24704 === (12))){
var state_24703__$1 = state_24703;
var statearr_24711_24737 = state_24703__$1;
(statearr_24711_24737[(2)] = null);

(statearr_24711_24737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (2))){
var inst_24680 = (state_24703[(7)]);
var state_24703__$1 = state_24703;
if(cljs.core.truth_(inst_24680)){
var statearr_24712_24738 = state_24703__$1;
(statearr_24712_24738[(1)] = (4));

} else {
var statearr_24713_24739 = state_24703__$1;
(statearr_24713_24739[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (11))){
var inst_24694 = cljs.core.async.close_BANG_.call(null,ch);
var state_24703__$1 = state_24703;
var statearr_24714_24740 = state_24703__$1;
(statearr_24714_24740[(2)] = inst_24694);

(statearr_24714_24740[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (9))){
var state_24703__$1 = state_24703;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24715_24741 = state_24703__$1;
(statearr_24715_24741[(1)] = (11));

} else {
var statearr_24716_24742 = state_24703__$1;
(statearr_24716_24742[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (5))){
var inst_24680 = (state_24703[(7)]);
var state_24703__$1 = state_24703;
var statearr_24717_24743 = state_24703__$1;
(statearr_24717_24743[(2)] = inst_24680);

(statearr_24717_24743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (10))){
var inst_24699 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
var statearr_24718_24744 = state_24703__$1;
(statearr_24718_24744[(2)] = inst_24699);

(statearr_24718_24744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (8))){
var inst_24680 = (state_24703[(7)]);
var inst_24690 = cljs.core.next.call(null,inst_24680);
var inst_24680__$1 = inst_24690;
var state_24703__$1 = (function (){var statearr_24719 = state_24703;
(statearr_24719[(7)] = inst_24680__$1);

return statearr_24719;
})();
var statearr_24720_24745 = state_24703__$1;
(statearr_24720_24745[(2)] = null);

(statearr_24720_24745[(1)] = (2));


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
});})(c__23883__auto__))
;
return ((function (switch__23771__auto__,c__23883__auto__){
return (function() {
var cljs$core$async$state_machine__23772__auto__ = null;
var cljs$core$async$state_machine__23772__auto____0 = (function (){
var statearr_24724 = [null,null,null,null,null,null,null,null];
(statearr_24724[(0)] = cljs$core$async$state_machine__23772__auto__);

(statearr_24724[(1)] = (1));

return statearr_24724;
});
var cljs$core$async$state_machine__23772__auto____1 = (function (state_24703){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_24703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e24725){if((e24725 instanceof Object)){
var ex__23775__auto__ = e24725;
var statearr_24726_24746 = state_24703;
(statearr_24726_24746[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24747 = state_24703;
state_24703 = G__24747;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$state_machine__23772__auto__ = function(state_24703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23772__auto____1.call(this,state_24703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23772__auto____0;
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23772__auto____1;
return cljs$core$async$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto__))
})();
var state__23885__auto__ = (function (){var statearr_24727 = f__23884__auto__.call(null);
(statearr_24727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto__);

return statearr_24727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto__))
);

return c__23883__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async24969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24969 = (function (mult,ch,cs,meta24970){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24970 = meta24970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24971,meta24970__$1){
var self__ = this;
var _24971__$1 = this;
return (new cljs.core.async.t_cljs$core$async24969(self__.mult,self__.ch,self__.cs,meta24970__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24971){
var self__ = this;
var _24971__$1 = this;
return self__.meta24970;
});})(cs))
;

cljs.core.async.t_cljs$core$async24969.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24969.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24969.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24969.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24969.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24969.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24970","meta24970",-987264210,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24969";

cljs.core.async.t_cljs$core$async24969.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24969");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24969 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24969(mult__$1,ch__$1,cs__$1,meta24970){
return (new cljs.core.async.t_cljs$core$async24969(mult__$1,ch__$1,cs__$1,meta24970));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24969(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23883__auto___25190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___25190,cs,m,dchan,dctr,done){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___25190,cs,m,dchan,dctr,done){
return (function (state_25102){
var state_val_25103 = (state_25102[(1)]);
if((state_val_25103 === (7))){
var inst_25098 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
var statearr_25104_25191 = state_25102__$1;
(statearr_25104_25191[(2)] = inst_25098);

(statearr_25104_25191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (20))){
var inst_25003 = (state_25102[(7)]);
var inst_25013 = cljs.core.first.call(null,inst_25003);
var inst_25014 = cljs.core.nth.call(null,inst_25013,(0),null);
var inst_25015 = cljs.core.nth.call(null,inst_25013,(1),null);
var state_25102__$1 = (function (){var statearr_25105 = state_25102;
(statearr_25105[(8)] = inst_25014);

return statearr_25105;
})();
if(cljs.core.truth_(inst_25015)){
var statearr_25106_25192 = state_25102__$1;
(statearr_25106_25192[(1)] = (22));

} else {
var statearr_25107_25193 = state_25102__$1;
(statearr_25107_25193[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (27))){
var inst_25050 = (state_25102[(9)]);
var inst_25043 = (state_25102[(10)]);
var inst_25045 = (state_25102[(11)]);
var inst_24974 = (state_25102[(12)]);
var inst_25050__$1 = cljs.core._nth.call(null,inst_25043,inst_25045);
var inst_25051 = cljs.core.async.put_BANG_.call(null,inst_25050__$1,inst_24974,done);
var state_25102__$1 = (function (){var statearr_25108 = state_25102;
(statearr_25108[(9)] = inst_25050__$1);

return statearr_25108;
})();
if(cljs.core.truth_(inst_25051)){
var statearr_25109_25194 = state_25102__$1;
(statearr_25109_25194[(1)] = (30));

} else {
var statearr_25110_25195 = state_25102__$1;
(statearr_25110_25195[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (1))){
var state_25102__$1 = state_25102;
var statearr_25111_25196 = state_25102__$1;
(statearr_25111_25196[(2)] = null);

(statearr_25111_25196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (24))){
var inst_25003 = (state_25102[(7)]);
var inst_25020 = (state_25102[(2)]);
var inst_25021 = cljs.core.next.call(null,inst_25003);
var inst_24983 = inst_25021;
var inst_24984 = null;
var inst_24985 = (0);
var inst_24986 = (0);
var state_25102__$1 = (function (){var statearr_25112 = state_25102;
(statearr_25112[(13)] = inst_25020);

(statearr_25112[(14)] = inst_24984);

(statearr_25112[(15)] = inst_24986);

(statearr_25112[(16)] = inst_24983);

(statearr_25112[(17)] = inst_24985);

return statearr_25112;
})();
var statearr_25113_25197 = state_25102__$1;
(statearr_25113_25197[(2)] = null);

(statearr_25113_25197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (39))){
var state_25102__$1 = state_25102;
var statearr_25117_25198 = state_25102__$1;
(statearr_25117_25198[(2)] = null);

(statearr_25117_25198[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (4))){
var inst_24974 = (state_25102[(12)]);
var inst_24974__$1 = (state_25102[(2)]);
var inst_24975 = (inst_24974__$1 == null);
var state_25102__$1 = (function (){var statearr_25118 = state_25102;
(statearr_25118[(12)] = inst_24974__$1);

return statearr_25118;
})();
if(cljs.core.truth_(inst_24975)){
var statearr_25119_25199 = state_25102__$1;
(statearr_25119_25199[(1)] = (5));

} else {
var statearr_25120_25200 = state_25102__$1;
(statearr_25120_25200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (15))){
var inst_24984 = (state_25102[(14)]);
var inst_24986 = (state_25102[(15)]);
var inst_24983 = (state_25102[(16)]);
var inst_24985 = (state_25102[(17)]);
var inst_24999 = (state_25102[(2)]);
var inst_25000 = (inst_24986 + (1));
var tmp25114 = inst_24984;
var tmp25115 = inst_24983;
var tmp25116 = inst_24985;
var inst_24983__$1 = tmp25115;
var inst_24984__$1 = tmp25114;
var inst_24985__$1 = tmp25116;
var inst_24986__$1 = inst_25000;
var state_25102__$1 = (function (){var statearr_25121 = state_25102;
(statearr_25121[(18)] = inst_24999);

(statearr_25121[(14)] = inst_24984__$1);

(statearr_25121[(15)] = inst_24986__$1);

(statearr_25121[(16)] = inst_24983__$1);

(statearr_25121[(17)] = inst_24985__$1);

return statearr_25121;
})();
var statearr_25122_25201 = state_25102__$1;
(statearr_25122_25201[(2)] = null);

(statearr_25122_25201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (21))){
var inst_25024 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
var statearr_25126_25202 = state_25102__$1;
(statearr_25126_25202[(2)] = inst_25024);

(statearr_25126_25202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (31))){
var inst_25050 = (state_25102[(9)]);
var inst_25054 = done.call(null,null);
var inst_25055 = cljs.core.async.untap_STAR_.call(null,m,inst_25050);
var state_25102__$1 = (function (){var statearr_25127 = state_25102;
(statearr_25127[(19)] = inst_25054);

return statearr_25127;
})();
var statearr_25128_25203 = state_25102__$1;
(statearr_25128_25203[(2)] = inst_25055);

(statearr_25128_25203[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (32))){
var inst_25042 = (state_25102[(20)]);
var inst_25043 = (state_25102[(10)]);
var inst_25044 = (state_25102[(21)]);
var inst_25045 = (state_25102[(11)]);
var inst_25057 = (state_25102[(2)]);
var inst_25058 = (inst_25045 + (1));
var tmp25123 = inst_25042;
var tmp25124 = inst_25043;
var tmp25125 = inst_25044;
var inst_25042__$1 = tmp25123;
var inst_25043__$1 = tmp25124;
var inst_25044__$1 = tmp25125;
var inst_25045__$1 = inst_25058;
var state_25102__$1 = (function (){var statearr_25129 = state_25102;
(statearr_25129[(20)] = inst_25042__$1);

(statearr_25129[(10)] = inst_25043__$1);

(statearr_25129[(22)] = inst_25057);

(statearr_25129[(21)] = inst_25044__$1);

(statearr_25129[(11)] = inst_25045__$1);

return statearr_25129;
})();
var statearr_25130_25204 = state_25102__$1;
(statearr_25130_25204[(2)] = null);

(statearr_25130_25204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (40))){
var inst_25070 = (state_25102[(23)]);
var inst_25074 = done.call(null,null);
var inst_25075 = cljs.core.async.untap_STAR_.call(null,m,inst_25070);
var state_25102__$1 = (function (){var statearr_25131 = state_25102;
(statearr_25131[(24)] = inst_25074);

return statearr_25131;
})();
var statearr_25132_25205 = state_25102__$1;
(statearr_25132_25205[(2)] = inst_25075);

(statearr_25132_25205[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (33))){
var inst_25061 = (state_25102[(25)]);
var inst_25063 = cljs.core.chunked_seq_QMARK_.call(null,inst_25061);
var state_25102__$1 = state_25102;
if(inst_25063){
var statearr_25133_25206 = state_25102__$1;
(statearr_25133_25206[(1)] = (36));

} else {
var statearr_25134_25207 = state_25102__$1;
(statearr_25134_25207[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (13))){
var inst_24993 = (state_25102[(26)]);
var inst_24996 = cljs.core.async.close_BANG_.call(null,inst_24993);
var state_25102__$1 = state_25102;
var statearr_25135_25208 = state_25102__$1;
(statearr_25135_25208[(2)] = inst_24996);

(statearr_25135_25208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (22))){
var inst_25014 = (state_25102[(8)]);
var inst_25017 = cljs.core.async.close_BANG_.call(null,inst_25014);
var state_25102__$1 = state_25102;
var statearr_25136_25209 = state_25102__$1;
(statearr_25136_25209[(2)] = inst_25017);

(statearr_25136_25209[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (36))){
var inst_25061 = (state_25102[(25)]);
var inst_25065 = cljs.core.chunk_first.call(null,inst_25061);
var inst_25066 = cljs.core.chunk_rest.call(null,inst_25061);
var inst_25067 = cljs.core.count.call(null,inst_25065);
var inst_25042 = inst_25066;
var inst_25043 = inst_25065;
var inst_25044 = inst_25067;
var inst_25045 = (0);
var state_25102__$1 = (function (){var statearr_25137 = state_25102;
(statearr_25137[(20)] = inst_25042);

(statearr_25137[(10)] = inst_25043);

(statearr_25137[(21)] = inst_25044);

(statearr_25137[(11)] = inst_25045);

return statearr_25137;
})();
var statearr_25138_25210 = state_25102__$1;
(statearr_25138_25210[(2)] = null);

(statearr_25138_25210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (41))){
var inst_25061 = (state_25102[(25)]);
var inst_25077 = (state_25102[(2)]);
var inst_25078 = cljs.core.next.call(null,inst_25061);
var inst_25042 = inst_25078;
var inst_25043 = null;
var inst_25044 = (0);
var inst_25045 = (0);
var state_25102__$1 = (function (){var statearr_25139 = state_25102;
(statearr_25139[(20)] = inst_25042);

(statearr_25139[(27)] = inst_25077);

(statearr_25139[(10)] = inst_25043);

(statearr_25139[(21)] = inst_25044);

(statearr_25139[(11)] = inst_25045);

return statearr_25139;
})();
var statearr_25140_25211 = state_25102__$1;
(statearr_25140_25211[(2)] = null);

(statearr_25140_25211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (43))){
var state_25102__$1 = state_25102;
var statearr_25141_25212 = state_25102__$1;
(statearr_25141_25212[(2)] = null);

(statearr_25141_25212[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (29))){
var inst_25086 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
var statearr_25142_25213 = state_25102__$1;
(statearr_25142_25213[(2)] = inst_25086);

(statearr_25142_25213[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (44))){
var inst_25095 = (state_25102[(2)]);
var state_25102__$1 = (function (){var statearr_25143 = state_25102;
(statearr_25143[(28)] = inst_25095);

return statearr_25143;
})();
var statearr_25144_25214 = state_25102__$1;
(statearr_25144_25214[(2)] = null);

(statearr_25144_25214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (6))){
var inst_25034 = (state_25102[(29)]);
var inst_25033 = cljs.core.deref.call(null,cs);
var inst_25034__$1 = cljs.core.keys.call(null,inst_25033);
var inst_25035 = cljs.core.count.call(null,inst_25034__$1);
var inst_25036 = cljs.core.reset_BANG_.call(null,dctr,inst_25035);
var inst_25041 = cljs.core.seq.call(null,inst_25034__$1);
var inst_25042 = inst_25041;
var inst_25043 = null;
var inst_25044 = (0);
var inst_25045 = (0);
var state_25102__$1 = (function (){var statearr_25145 = state_25102;
(statearr_25145[(20)] = inst_25042);

(statearr_25145[(10)] = inst_25043);

(statearr_25145[(29)] = inst_25034__$1);

(statearr_25145[(30)] = inst_25036);

(statearr_25145[(21)] = inst_25044);

(statearr_25145[(11)] = inst_25045);

return statearr_25145;
})();
var statearr_25146_25215 = state_25102__$1;
(statearr_25146_25215[(2)] = null);

(statearr_25146_25215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (28))){
var inst_25042 = (state_25102[(20)]);
var inst_25061 = (state_25102[(25)]);
var inst_25061__$1 = cljs.core.seq.call(null,inst_25042);
var state_25102__$1 = (function (){var statearr_25147 = state_25102;
(statearr_25147[(25)] = inst_25061__$1);

return statearr_25147;
})();
if(inst_25061__$1){
var statearr_25148_25216 = state_25102__$1;
(statearr_25148_25216[(1)] = (33));

} else {
var statearr_25149_25217 = state_25102__$1;
(statearr_25149_25217[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (25))){
var inst_25044 = (state_25102[(21)]);
var inst_25045 = (state_25102[(11)]);
var inst_25047 = (inst_25045 < inst_25044);
var inst_25048 = inst_25047;
var state_25102__$1 = state_25102;
if(cljs.core.truth_(inst_25048)){
var statearr_25150_25218 = state_25102__$1;
(statearr_25150_25218[(1)] = (27));

} else {
var statearr_25151_25219 = state_25102__$1;
(statearr_25151_25219[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (34))){
var state_25102__$1 = state_25102;
var statearr_25152_25220 = state_25102__$1;
(statearr_25152_25220[(2)] = null);

(statearr_25152_25220[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (17))){
var state_25102__$1 = state_25102;
var statearr_25153_25221 = state_25102__$1;
(statearr_25153_25221[(2)] = null);

(statearr_25153_25221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (3))){
var inst_25100 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25102__$1,inst_25100);
} else {
if((state_val_25103 === (12))){
var inst_25029 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
var statearr_25154_25222 = state_25102__$1;
(statearr_25154_25222[(2)] = inst_25029);

(statearr_25154_25222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (2))){
var state_25102__$1 = state_25102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25102__$1,(4),ch);
} else {
if((state_val_25103 === (23))){
var state_25102__$1 = state_25102;
var statearr_25155_25223 = state_25102__$1;
(statearr_25155_25223[(2)] = null);

(statearr_25155_25223[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (35))){
var inst_25084 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
var statearr_25156_25224 = state_25102__$1;
(statearr_25156_25224[(2)] = inst_25084);

(statearr_25156_25224[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (19))){
var inst_25003 = (state_25102[(7)]);
var inst_25007 = cljs.core.chunk_first.call(null,inst_25003);
var inst_25008 = cljs.core.chunk_rest.call(null,inst_25003);
var inst_25009 = cljs.core.count.call(null,inst_25007);
var inst_24983 = inst_25008;
var inst_24984 = inst_25007;
var inst_24985 = inst_25009;
var inst_24986 = (0);
var state_25102__$1 = (function (){var statearr_25157 = state_25102;
(statearr_25157[(14)] = inst_24984);

(statearr_25157[(15)] = inst_24986);

(statearr_25157[(16)] = inst_24983);

(statearr_25157[(17)] = inst_24985);

return statearr_25157;
})();
var statearr_25158_25225 = state_25102__$1;
(statearr_25158_25225[(2)] = null);

(statearr_25158_25225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (11))){
var inst_25003 = (state_25102[(7)]);
var inst_24983 = (state_25102[(16)]);
var inst_25003__$1 = cljs.core.seq.call(null,inst_24983);
var state_25102__$1 = (function (){var statearr_25159 = state_25102;
(statearr_25159[(7)] = inst_25003__$1);

return statearr_25159;
})();
if(inst_25003__$1){
var statearr_25160_25226 = state_25102__$1;
(statearr_25160_25226[(1)] = (16));

} else {
var statearr_25161_25227 = state_25102__$1;
(statearr_25161_25227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (9))){
var inst_25031 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
var statearr_25162_25228 = state_25102__$1;
(statearr_25162_25228[(2)] = inst_25031);

(statearr_25162_25228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (5))){
var inst_24981 = cljs.core.deref.call(null,cs);
var inst_24982 = cljs.core.seq.call(null,inst_24981);
var inst_24983 = inst_24982;
var inst_24984 = null;
var inst_24985 = (0);
var inst_24986 = (0);
var state_25102__$1 = (function (){var statearr_25163 = state_25102;
(statearr_25163[(14)] = inst_24984);

(statearr_25163[(15)] = inst_24986);

(statearr_25163[(16)] = inst_24983);

(statearr_25163[(17)] = inst_24985);

return statearr_25163;
})();
var statearr_25164_25229 = state_25102__$1;
(statearr_25164_25229[(2)] = null);

(statearr_25164_25229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (14))){
var state_25102__$1 = state_25102;
var statearr_25165_25230 = state_25102__$1;
(statearr_25165_25230[(2)] = null);

(statearr_25165_25230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (45))){
var inst_25092 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
var statearr_25166_25231 = state_25102__$1;
(statearr_25166_25231[(2)] = inst_25092);

(statearr_25166_25231[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (26))){
var inst_25034 = (state_25102[(29)]);
var inst_25088 = (state_25102[(2)]);
var inst_25089 = cljs.core.seq.call(null,inst_25034);
var state_25102__$1 = (function (){var statearr_25167 = state_25102;
(statearr_25167[(31)] = inst_25088);

return statearr_25167;
})();
if(inst_25089){
var statearr_25168_25232 = state_25102__$1;
(statearr_25168_25232[(1)] = (42));

} else {
var statearr_25169_25233 = state_25102__$1;
(statearr_25169_25233[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (16))){
var inst_25003 = (state_25102[(7)]);
var inst_25005 = cljs.core.chunked_seq_QMARK_.call(null,inst_25003);
var state_25102__$1 = state_25102;
if(inst_25005){
var statearr_25170_25234 = state_25102__$1;
(statearr_25170_25234[(1)] = (19));

} else {
var statearr_25171_25235 = state_25102__$1;
(statearr_25171_25235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (38))){
var inst_25081 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
var statearr_25172_25236 = state_25102__$1;
(statearr_25172_25236[(2)] = inst_25081);

(statearr_25172_25236[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (30))){
var state_25102__$1 = state_25102;
var statearr_25173_25237 = state_25102__$1;
(statearr_25173_25237[(2)] = null);

(statearr_25173_25237[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (10))){
var inst_24984 = (state_25102[(14)]);
var inst_24986 = (state_25102[(15)]);
var inst_24992 = cljs.core._nth.call(null,inst_24984,inst_24986);
var inst_24993 = cljs.core.nth.call(null,inst_24992,(0),null);
var inst_24994 = cljs.core.nth.call(null,inst_24992,(1),null);
var state_25102__$1 = (function (){var statearr_25174 = state_25102;
(statearr_25174[(26)] = inst_24993);

return statearr_25174;
})();
if(cljs.core.truth_(inst_24994)){
var statearr_25175_25238 = state_25102__$1;
(statearr_25175_25238[(1)] = (13));

} else {
var statearr_25176_25239 = state_25102__$1;
(statearr_25176_25239[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (18))){
var inst_25027 = (state_25102[(2)]);
var state_25102__$1 = state_25102;
var statearr_25177_25240 = state_25102__$1;
(statearr_25177_25240[(2)] = inst_25027);

(statearr_25177_25240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (42))){
var state_25102__$1 = state_25102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25102__$1,(45),dchan);
} else {
if((state_val_25103 === (37))){
var inst_25070 = (state_25102[(23)]);
var inst_25061 = (state_25102[(25)]);
var inst_24974 = (state_25102[(12)]);
var inst_25070__$1 = cljs.core.first.call(null,inst_25061);
var inst_25071 = cljs.core.async.put_BANG_.call(null,inst_25070__$1,inst_24974,done);
var state_25102__$1 = (function (){var statearr_25178 = state_25102;
(statearr_25178[(23)] = inst_25070__$1);

return statearr_25178;
})();
if(cljs.core.truth_(inst_25071)){
var statearr_25179_25241 = state_25102__$1;
(statearr_25179_25241[(1)] = (39));

} else {
var statearr_25180_25242 = state_25102__$1;
(statearr_25180_25242[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25103 === (8))){
var inst_24986 = (state_25102[(15)]);
var inst_24985 = (state_25102[(17)]);
var inst_24988 = (inst_24986 < inst_24985);
var inst_24989 = inst_24988;
var state_25102__$1 = state_25102;
if(cljs.core.truth_(inst_24989)){
var statearr_25181_25243 = state_25102__$1;
(statearr_25181_25243[(1)] = (10));

} else {
var statearr_25182_25244 = state_25102__$1;
(statearr_25182_25244[(1)] = (11));

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
});})(c__23883__auto___25190,cs,m,dchan,dctr,done))
;
return ((function (switch__23771__auto__,c__23883__auto___25190,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23772__auto__ = null;
var cljs$core$async$mult_$_state_machine__23772__auto____0 = (function (){
var statearr_25186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25186[(0)] = cljs$core$async$mult_$_state_machine__23772__auto__);

(statearr_25186[(1)] = (1));

return statearr_25186;
});
var cljs$core$async$mult_$_state_machine__23772__auto____1 = (function (state_25102){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_25102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e25187){if((e25187 instanceof Object)){
var ex__23775__auto__ = e25187;
var statearr_25188_25245 = state_25102;
(statearr_25188_25245[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25246 = state_25102;
state_25102 = G__25246;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23772__auto__ = function(state_25102){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23772__auto____1.call(this,state_25102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23772__auto____0;
cljs$core$async$mult_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23772__auto____1;
return cljs$core$async$mult_$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___25190,cs,m,dchan,dctr,done))
})();
var state__23885__auto__ = (function (){var statearr_25189 = f__23884__auto__.call(null);
(statearr_25189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___25190);

return statearr_25189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___25190,cs,m,dchan,dctr,done))
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
var args25247 = [];
var len__17809__auto___25250 = arguments.length;
var i__17810__auto___25251 = (0);
while(true){
if((i__17810__auto___25251 < len__17809__auto___25250)){
args25247.push((arguments[i__17810__auto___25251]));

var G__25252 = (i__17810__auto___25251 + (1));
i__17810__auto___25251 = G__25252;
continue;
} else {
}
break;
}

var G__25249 = args25247.length;
switch (G__25249) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25247.length)].join('')));

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
var len__17809__auto___25264 = arguments.length;
var i__17810__auto___25265 = (0);
while(true){
if((i__17810__auto___25265 < len__17809__auto___25264)){
args__17816__auto__.push((arguments[i__17810__auto___25265]));

var G__25266 = (i__17810__auto___25265 + (1));
i__17810__auto___25265 = G__25266;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25258){
var map__25259 = p__25258;
var map__25259__$1 = ((((!((map__25259 == null)))?((((map__25259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25259):map__25259);
var opts = map__25259__$1;
var statearr_25261_25267 = state;
(statearr_25261_25267[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25259,map__25259__$1,opts){
return (function (val){
var statearr_25262_25268 = state;
(statearr_25262_25268[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25259,map__25259__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25263_25269 = state;
(statearr_25263_25269[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25254){
var G__25255 = cljs.core.first.call(null,seq25254);
var seq25254__$1 = cljs.core.next.call(null,seq25254);
var G__25256 = cljs.core.first.call(null,seq25254__$1);
var seq25254__$2 = cljs.core.next.call(null,seq25254__$1);
var G__25257 = cljs.core.first.call(null,seq25254__$2);
var seq25254__$3 = cljs.core.next.call(null,seq25254__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25255,G__25256,G__25257,seq25254__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25433 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25434){
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
this.meta25434 = meta25434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25435,meta25434__$1){
var self__ = this;
var _25435__$1 = this;
return (new cljs.core.async.t_cljs$core$async25433(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25434__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25435){
var self__ = this;
var _25435__$1 = this;
return self__.meta25434;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25433.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25433.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25433.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25433.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25433.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25433.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25433.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25433.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25434","meta25434",-454793356,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25433";

cljs.core.async.t_cljs$core$async25433.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25433");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25433 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25433(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25434){
return (new cljs.core.async.t_cljs$core$async25433(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25434));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25433(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23883__auto___25596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___25596,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___25596,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25533){
var state_val_25534 = (state_25533[(1)]);
if((state_val_25534 === (7))){
var inst_25451 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25535_25597 = state_25533__$1;
(statearr_25535_25597[(2)] = inst_25451);

(statearr_25535_25597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (20))){
var inst_25463 = (state_25533[(7)]);
var state_25533__$1 = state_25533;
var statearr_25536_25598 = state_25533__$1;
(statearr_25536_25598[(2)] = inst_25463);

(statearr_25536_25598[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (27))){
var state_25533__$1 = state_25533;
var statearr_25537_25599 = state_25533__$1;
(statearr_25537_25599[(2)] = null);

(statearr_25537_25599[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (1))){
var inst_25439 = (state_25533[(8)]);
var inst_25439__$1 = calc_state.call(null);
var inst_25441 = (inst_25439__$1 == null);
var inst_25442 = cljs.core.not.call(null,inst_25441);
var state_25533__$1 = (function (){var statearr_25538 = state_25533;
(statearr_25538[(8)] = inst_25439__$1);

return statearr_25538;
})();
if(inst_25442){
var statearr_25539_25600 = state_25533__$1;
(statearr_25539_25600[(1)] = (2));

} else {
var statearr_25540_25601 = state_25533__$1;
(statearr_25540_25601[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (24))){
var inst_25486 = (state_25533[(9)]);
var inst_25507 = (state_25533[(10)]);
var inst_25493 = (state_25533[(11)]);
var inst_25507__$1 = inst_25486.call(null,inst_25493);
var state_25533__$1 = (function (){var statearr_25541 = state_25533;
(statearr_25541[(10)] = inst_25507__$1);

return statearr_25541;
})();
if(cljs.core.truth_(inst_25507__$1)){
var statearr_25542_25602 = state_25533__$1;
(statearr_25542_25602[(1)] = (29));

} else {
var statearr_25543_25603 = state_25533__$1;
(statearr_25543_25603[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (4))){
var inst_25454 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
if(cljs.core.truth_(inst_25454)){
var statearr_25544_25604 = state_25533__$1;
(statearr_25544_25604[(1)] = (8));

} else {
var statearr_25545_25605 = state_25533__$1;
(statearr_25545_25605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (15))){
var inst_25480 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
if(cljs.core.truth_(inst_25480)){
var statearr_25546_25606 = state_25533__$1;
(statearr_25546_25606[(1)] = (19));

} else {
var statearr_25547_25607 = state_25533__$1;
(statearr_25547_25607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (21))){
var inst_25485 = (state_25533[(12)]);
var inst_25485__$1 = (state_25533[(2)]);
var inst_25486 = cljs.core.get.call(null,inst_25485__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25487 = cljs.core.get.call(null,inst_25485__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25488 = cljs.core.get.call(null,inst_25485__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25533__$1 = (function (){var statearr_25548 = state_25533;
(statearr_25548[(9)] = inst_25486);

(statearr_25548[(12)] = inst_25485__$1);

(statearr_25548[(13)] = inst_25487);

return statearr_25548;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25533__$1,(22),inst_25488);
} else {
if((state_val_25534 === (31))){
var inst_25515 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
if(cljs.core.truth_(inst_25515)){
var statearr_25549_25608 = state_25533__$1;
(statearr_25549_25608[(1)] = (32));

} else {
var statearr_25550_25609 = state_25533__$1;
(statearr_25550_25609[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (32))){
var inst_25492 = (state_25533[(14)]);
var state_25533__$1 = state_25533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25533__$1,(35),out,inst_25492);
} else {
if((state_val_25534 === (33))){
var inst_25485 = (state_25533[(12)]);
var inst_25463 = inst_25485;
var state_25533__$1 = (function (){var statearr_25551 = state_25533;
(statearr_25551[(7)] = inst_25463);

return statearr_25551;
})();
var statearr_25552_25610 = state_25533__$1;
(statearr_25552_25610[(2)] = null);

(statearr_25552_25610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (13))){
var inst_25463 = (state_25533[(7)]);
var inst_25470 = inst_25463.cljs$lang$protocol_mask$partition0$;
var inst_25471 = (inst_25470 & (64));
var inst_25472 = inst_25463.cljs$core$ISeq$;
var inst_25473 = (inst_25471) || (inst_25472);
var state_25533__$1 = state_25533;
if(cljs.core.truth_(inst_25473)){
var statearr_25553_25611 = state_25533__$1;
(statearr_25553_25611[(1)] = (16));

} else {
var statearr_25554_25612 = state_25533__$1;
(statearr_25554_25612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (22))){
var inst_25493 = (state_25533[(11)]);
var inst_25492 = (state_25533[(14)]);
var inst_25491 = (state_25533[(2)]);
var inst_25492__$1 = cljs.core.nth.call(null,inst_25491,(0),null);
var inst_25493__$1 = cljs.core.nth.call(null,inst_25491,(1),null);
var inst_25494 = (inst_25492__$1 == null);
var inst_25495 = cljs.core._EQ_.call(null,inst_25493__$1,change);
var inst_25496 = (inst_25494) || (inst_25495);
var state_25533__$1 = (function (){var statearr_25555 = state_25533;
(statearr_25555[(11)] = inst_25493__$1);

(statearr_25555[(14)] = inst_25492__$1);

return statearr_25555;
})();
if(cljs.core.truth_(inst_25496)){
var statearr_25556_25613 = state_25533__$1;
(statearr_25556_25613[(1)] = (23));

} else {
var statearr_25557_25614 = state_25533__$1;
(statearr_25557_25614[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (36))){
var inst_25485 = (state_25533[(12)]);
var inst_25463 = inst_25485;
var state_25533__$1 = (function (){var statearr_25558 = state_25533;
(statearr_25558[(7)] = inst_25463);

return statearr_25558;
})();
var statearr_25559_25615 = state_25533__$1;
(statearr_25559_25615[(2)] = null);

(statearr_25559_25615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (29))){
var inst_25507 = (state_25533[(10)]);
var state_25533__$1 = state_25533;
var statearr_25560_25616 = state_25533__$1;
(statearr_25560_25616[(2)] = inst_25507);

(statearr_25560_25616[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (6))){
var state_25533__$1 = state_25533;
var statearr_25561_25617 = state_25533__$1;
(statearr_25561_25617[(2)] = false);

(statearr_25561_25617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (28))){
var inst_25503 = (state_25533[(2)]);
var inst_25504 = calc_state.call(null);
var inst_25463 = inst_25504;
var state_25533__$1 = (function (){var statearr_25562 = state_25533;
(statearr_25562[(7)] = inst_25463);

(statearr_25562[(15)] = inst_25503);

return statearr_25562;
})();
var statearr_25563_25618 = state_25533__$1;
(statearr_25563_25618[(2)] = null);

(statearr_25563_25618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (25))){
var inst_25529 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25564_25619 = state_25533__$1;
(statearr_25564_25619[(2)] = inst_25529);

(statearr_25564_25619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (34))){
var inst_25527 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25565_25620 = state_25533__$1;
(statearr_25565_25620[(2)] = inst_25527);

(statearr_25565_25620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (17))){
var state_25533__$1 = state_25533;
var statearr_25566_25621 = state_25533__$1;
(statearr_25566_25621[(2)] = false);

(statearr_25566_25621[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (3))){
var state_25533__$1 = state_25533;
var statearr_25567_25622 = state_25533__$1;
(statearr_25567_25622[(2)] = false);

(statearr_25567_25622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (12))){
var inst_25531 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25533__$1,inst_25531);
} else {
if((state_val_25534 === (2))){
var inst_25439 = (state_25533[(8)]);
var inst_25444 = inst_25439.cljs$lang$protocol_mask$partition0$;
var inst_25445 = (inst_25444 & (64));
var inst_25446 = inst_25439.cljs$core$ISeq$;
var inst_25447 = (inst_25445) || (inst_25446);
var state_25533__$1 = state_25533;
if(cljs.core.truth_(inst_25447)){
var statearr_25568_25623 = state_25533__$1;
(statearr_25568_25623[(1)] = (5));

} else {
var statearr_25569_25624 = state_25533__$1;
(statearr_25569_25624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (23))){
var inst_25492 = (state_25533[(14)]);
var inst_25498 = (inst_25492 == null);
var state_25533__$1 = state_25533;
if(cljs.core.truth_(inst_25498)){
var statearr_25570_25625 = state_25533__$1;
(statearr_25570_25625[(1)] = (26));

} else {
var statearr_25571_25626 = state_25533__$1;
(statearr_25571_25626[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (35))){
var inst_25518 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
if(cljs.core.truth_(inst_25518)){
var statearr_25572_25627 = state_25533__$1;
(statearr_25572_25627[(1)] = (36));

} else {
var statearr_25573_25628 = state_25533__$1;
(statearr_25573_25628[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (19))){
var inst_25463 = (state_25533[(7)]);
var inst_25482 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25463);
var state_25533__$1 = state_25533;
var statearr_25574_25629 = state_25533__$1;
(statearr_25574_25629[(2)] = inst_25482);

(statearr_25574_25629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (11))){
var inst_25463 = (state_25533[(7)]);
var inst_25467 = (inst_25463 == null);
var inst_25468 = cljs.core.not.call(null,inst_25467);
var state_25533__$1 = state_25533;
if(inst_25468){
var statearr_25575_25630 = state_25533__$1;
(statearr_25575_25630[(1)] = (13));

} else {
var statearr_25576_25631 = state_25533__$1;
(statearr_25576_25631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (9))){
var inst_25439 = (state_25533[(8)]);
var state_25533__$1 = state_25533;
var statearr_25577_25632 = state_25533__$1;
(statearr_25577_25632[(2)] = inst_25439);

(statearr_25577_25632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (5))){
var state_25533__$1 = state_25533;
var statearr_25578_25633 = state_25533__$1;
(statearr_25578_25633[(2)] = true);

(statearr_25578_25633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (14))){
var state_25533__$1 = state_25533;
var statearr_25579_25634 = state_25533__$1;
(statearr_25579_25634[(2)] = false);

(statearr_25579_25634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (26))){
var inst_25493 = (state_25533[(11)]);
var inst_25500 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25493);
var state_25533__$1 = state_25533;
var statearr_25580_25635 = state_25533__$1;
(statearr_25580_25635[(2)] = inst_25500);

(statearr_25580_25635[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (16))){
var state_25533__$1 = state_25533;
var statearr_25581_25636 = state_25533__$1;
(statearr_25581_25636[(2)] = true);

(statearr_25581_25636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (38))){
var inst_25523 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25582_25637 = state_25533__$1;
(statearr_25582_25637[(2)] = inst_25523);

(statearr_25582_25637[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (30))){
var inst_25486 = (state_25533[(9)]);
var inst_25493 = (state_25533[(11)]);
var inst_25487 = (state_25533[(13)]);
var inst_25510 = cljs.core.empty_QMARK_.call(null,inst_25486);
var inst_25511 = inst_25487.call(null,inst_25493);
var inst_25512 = cljs.core.not.call(null,inst_25511);
var inst_25513 = (inst_25510) && (inst_25512);
var state_25533__$1 = state_25533;
var statearr_25583_25638 = state_25533__$1;
(statearr_25583_25638[(2)] = inst_25513);

(statearr_25583_25638[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (10))){
var inst_25439 = (state_25533[(8)]);
var inst_25459 = (state_25533[(2)]);
var inst_25460 = cljs.core.get.call(null,inst_25459,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25461 = cljs.core.get.call(null,inst_25459,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25462 = cljs.core.get.call(null,inst_25459,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25463 = inst_25439;
var state_25533__$1 = (function (){var statearr_25584 = state_25533;
(statearr_25584[(16)] = inst_25461);

(statearr_25584[(7)] = inst_25463);

(statearr_25584[(17)] = inst_25460);

(statearr_25584[(18)] = inst_25462);

return statearr_25584;
})();
var statearr_25585_25639 = state_25533__$1;
(statearr_25585_25639[(2)] = null);

(statearr_25585_25639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (18))){
var inst_25477 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25586_25640 = state_25533__$1;
(statearr_25586_25640[(2)] = inst_25477);

(statearr_25586_25640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (37))){
var state_25533__$1 = state_25533;
var statearr_25587_25641 = state_25533__$1;
(statearr_25587_25641[(2)] = null);

(statearr_25587_25641[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (8))){
var inst_25439 = (state_25533[(8)]);
var inst_25456 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25439);
var state_25533__$1 = state_25533;
var statearr_25588_25642 = state_25533__$1;
(statearr_25588_25642[(2)] = inst_25456);

(statearr_25588_25642[(1)] = (10));


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
});})(c__23883__auto___25596,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23771__auto__,c__23883__auto___25596,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23772__auto__ = null;
var cljs$core$async$mix_$_state_machine__23772__auto____0 = (function (){
var statearr_25592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25592[(0)] = cljs$core$async$mix_$_state_machine__23772__auto__);

(statearr_25592[(1)] = (1));

return statearr_25592;
});
var cljs$core$async$mix_$_state_machine__23772__auto____1 = (function (state_25533){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_25533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e25593){if((e25593 instanceof Object)){
var ex__23775__auto__ = e25593;
var statearr_25594_25643 = state_25533;
(statearr_25594_25643[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25644 = state_25533;
state_25533 = G__25644;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23772__auto__ = function(state_25533){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23772__auto____1.call(this,state_25533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23772__auto____0;
cljs$core$async$mix_$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23772__auto____1;
return cljs$core$async$mix_$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___25596,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23885__auto__ = (function (){var statearr_25595 = f__23884__auto__.call(null);
(statearr_25595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___25596);

return statearr_25595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___25596,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25645.length)].join('')));

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
var args25653 = [];
var len__17809__auto___25778 = arguments.length;
var i__17810__auto___25779 = (0);
while(true){
if((i__17810__auto___25779 < len__17809__auto___25778)){
args25653.push((arguments[i__17810__auto___25779]));

var G__25780 = (i__17810__auto___25779 + (1));
i__17810__auto___25779 = G__25780;
continue;
} else {
}
break;
}

var G__25655 = args25653.length;
switch (G__25655) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25653.length)].join('')));

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
return (function (p1__25652_SHARP_){
if(cljs.core.truth_(p1__25652_SHARP_.call(null,topic))){
return p1__25652_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25652_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25656 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25657){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25657 = meta25657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25658,meta25657__$1){
var self__ = this;
var _25658__$1 = this;
return (new cljs.core.async.t_cljs$core$async25656(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25657__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25658){
var self__ = this;
var _25658__$1 = this;
return self__.meta25657;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25656.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25656.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25656.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25656.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25656.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25656.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25656.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25656.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25657","meta25657",-517517281,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25656";

cljs.core.async.t_cljs$core$async25656.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25656");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25656 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25656(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25657){
return (new cljs.core.async.t_cljs$core$async25656(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25657));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25656(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23883__auto___25782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___25782,mults,ensure_mult,p){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___25782,mults,ensure_mult,p){
return (function (state_25730){
var state_val_25731 = (state_25730[(1)]);
if((state_val_25731 === (7))){
var inst_25726 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25732_25783 = state_25730__$1;
(statearr_25732_25783[(2)] = inst_25726);

(statearr_25732_25783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (20))){
var state_25730__$1 = state_25730;
var statearr_25733_25784 = state_25730__$1;
(statearr_25733_25784[(2)] = null);

(statearr_25733_25784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (1))){
var state_25730__$1 = state_25730;
var statearr_25734_25785 = state_25730__$1;
(statearr_25734_25785[(2)] = null);

(statearr_25734_25785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (24))){
var inst_25709 = (state_25730[(7)]);
var inst_25718 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25709);
var state_25730__$1 = state_25730;
var statearr_25735_25786 = state_25730__$1;
(statearr_25735_25786[(2)] = inst_25718);

(statearr_25735_25786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (4))){
var inst_25661 = (state_25730[(8)]);
var inst_25661__$1 = (state_25730[(2)]);
var inst_25662 = (inst_25661__$1 == null);
var state_25730__$1 = (function (){var statearr_25736 = state_25730;
(statearr_25736[(8)] = inst_25661__$1);

return statearr_25736;
})();
if(cljs.core.truth_(inst_25662)){
var statearr_25737_25787 = state_25730__$1;
(statearr_25737_25787[(1)] = (5));

} else {
var statearr_25738_25788 = state_25730__$1;
(statearr_25738_25788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (15))){
var inst_25703 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25739_25789 = state_25730__$1;
(statearr_25739_25789[(2)] = inst_25703);

(statearr_25739_25789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (21))){
var inst_25723 = (state_25730[(2)]);
var state_25730__$1 = (function (){var statearr_25740 = state_25730;
(statearr_25740[(9)] = inst_25723);

return statearr_25740;
})();
var statearr_25741_25790 = state_25730__$1;
(statearr_25741_25790[(2)] = null);

(statearr_25741_25790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (13))){
var inst_25685 = (state_25730[(10)]);
var inst_25687 = cljs.core.chunked_seq_QMARK_.call(null,inst_25685);
var state_25730__$1 = state_25730;
if(inst_25687){
var statearr_25742_25791 = state_25730__$1;
(statearr_25742_25791[(1)] = (16));

} else {
var statearr_25743_25792 = state_25730__$1;
(statearr_25743_25792[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (22))){
var inst_25715 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25715)){
var statearr_25744_25793 = state_25730__$1;
(statearr_25744_25793[(1)] = (23));

} else {
var statearr_25745_25794 = state_25730__$1;
(statearr_25745_25794[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (6))){
var inst_25711 = (state_25730[(11)]);
var inst_25709 = (state_25730[(7)]);
var inst_25661 = (state_25730[(8)]);
var inst_25709__$1 = topic_fn.call(null,inst_25661);
var inst_25710 = cljs.core.deref.call(null,mults);
var inst_25711__$1 = cljs.core.get.call(null,inst_25710,inst_25709__$1);
var state_25730__$1 = (function (){var statearr_25746 = state_25730;
(statearr_25746[(11)] = inst_25711__$1);

(statearr_25746[(7)] = inst_25709__$1);

return statearr_25746;
})();
if(cljs.core.truth_(inst_25711__$1)){
var statearr_25747_25795 = state_25730__$1;
(statearr_25747_25795[(1)] = (19));

} else {
var statearr_25748_25796 = state_25730__$1;
(statearr_25748_25796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (25))){
var inst_25720 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25749_25797 = state_25730__$1;
(statearr_25749_25797[(2)] = inst_25720);

(statearr_25749_25797[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (17))){
var inst_25685 = (state_25730[(10)]);
var inst_25694 = cljs.core.first.call(null,inst_25685);
var inst_25695 = cljs.core.async.muxch_STAR_.call(null,inst_25694);
var inst_25696 = cljs.core.async.close_BANG_.call(null,inst_25695);
var inst_25697 = cljs.core.next.call(null,inst_25685);
var inst_25671 = inst_25697;
var inst_25672 = null;
var inst_25673 = (0);
var inst_25674 = (0);
var state_25730__$1 = (function (){var statearr_25750 = state_25730;
(statearr_25750[(12)] = inst_25673);

(statearr_25750[(13)] = inst_25674);

(statearr_25750[(14)] = inst_25671);

(statearr_25750[(15)] = inst_25696);

(statearr_25750[(16)] = inst_25672);

return statearr_25750;
})();
var statearr_25751_25798 = state_25730__$1;
(statearr_25751_25798[(2)] = null);

(statearr_25751_25798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (3))){
var inst_25728 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25730__$1,inst_25728);
} else {
if((state_val_25731 === (12))){
var inst_25705 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25752_25799 = state_25730__$1;
(statearr_25752_25799[(2)] = inst_25705);

(statearr_25752_25799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (2))){
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(4),ch);
} else {
if((state_val_25731 === (23))){
var state_25730__$1 = state_25730;
var statearr_25753_25800 = state_25730__$1;
(statearr_25753_25800[(2)] = null);

(statearr_25753_25800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (19))){
var inst_25711 = (state_25730[(11)]);
var inst_25661 = (state_25730[(8)]);
var inst_25713 = cljs.core.async.muxch_STAR_.call(null,inst_25711);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25730__$1,(22),inst_25713,inst_25661);
} else {
if((state_val_25731 === (11))){
var inst_25685 = (state_25730[(10)]);
var inst_25671 = (state_25730[(14)]);
var inst_25685__$1 = cljs.core.seq.call(null,inst_25671);
var state_25730__$1 = (function (){var statearr_25754 = state_25730;
(statearr_25754[(10)] = inst_25685__$1);

return statearr_25754;
})();
if(inst_25685__$1){
var statearr_25755_25801 = state_25730__$1;
(statearr_25755_25801[(1)] = (13));

} else {
var statearr_25756_25802 = state_25730__$1;
(statearr_25756_25802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (9))){
var inst_25707 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25757_25803 = state_25730__$1;
(statearr_25757_25803[(2)] = inst_25707);

(statearr_25757_25803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (5))){
var inst_25668 = cljs.core.deref.call(null,mults);
var inst_25669 = cljs.core.vals.call(null,inst_25668);
var inst_25670 = cljs.core.seq.call(null,inst_25669);
var inst_25671 = inst_25670;
var inst_25672 = null;
var inst_25673 = (0);
var inst_25674 = (0);
var state_25730__$1 = (function (){var statearr_25758 = state_25730;
(statearr_25758[(12)] = inst_25673);

(statearr_25758[(13)] = inst_25674);

(statearr_25758[(14)] = inst_25671);

(statearr_25758[(16)] = inst_25672);

return statearr_25758;
})();
var statearr_25759_25804 = state_25730__$1;
(statearr_25759_25804[(2)] = null);

(statearr_25759_25804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (14))){
var state_25730__$1 = state_25730;
var statearr_25763_25805 = state_25730__$1;
(statearr_25763_25805[(2)] = null);

(statearr_25763_25805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (16))){
var inst_25685 = (state_25730[(10)]);
var inst_25689 = cljs.core.chunk_first.call(null,inst_25685);
var inst_25690 = cljs.core.chunk_rest.call(null,inst_25685);
var inst_25691 = cljs.core.count.call(null,inst_25689);
var inst_25671 = inst_25690;
var inst_25672 = inst_25689;
var inst_25673 = inst_25691;
var inst_25674 = (0);
var state_25730__$1 = (function (){var statearr_25764 = state_25730;
(statearr_25764[(12)] = inst_25673);

(statearr_25764[(13)] = inst_25674);

(statearr_25764[(14)] = inst_25671);

(statearr_25764[(16)] = inst_25672);

return statearr_25764;
})();
var statearr_25765_25806 = state_25730__$1;
(statearr_25765_25806[(2)] = null);

(statearr_25765_25806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (10))){
var inst_25673 = (state_25730[(12)]);
var inst_25674 = (state_25730[(13)]);
var inst_25671 = (state_25730[(14)]);
var inst_25672 = (state_25730[(16)]);
var inst_25679 = cljs.core._nth.call(null,inst_25672,inst_25674);
var inst_25680 = cljs.core.async.muxch_STAR_.call(null,inst_25679);
var inst_25681 = cljs.core.async.close_BANG_.call(null,inst_25680);
var inst_25682 = (inst_25674 + (1));
var tmp25760 = inst_25673;
var tmp25761 = inst_25671;
var tmp25762 = inst_25672;
var inst_25671__$1 = tmp25761;
var inst_25672__$1 = tmp25762;
var inst_25673__$1 = tmp25760;
var inst_25674__$1 = inst_25682;
var state_25730__$1 = (function (){var statearr_25766 = state_25730;
(statearr_25766[(12)] = inst_25673__$1);

(statearr_25766[(13)] = inst_25674__$1);

(statearr_25766[(14)] = inst_25671__$1);

(statearr_25766[(17)] = inst_25681);

(statearr_25766[(16)] = inst_25672__$1);

return statearr_25766;
})();
var statearr_25767_25807 = state_25730__$1;
(statearr_25767_25807[(2)] = null);

(statearr_25767_25807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (18))){
var inst_25700 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25768_25808 = state_25730__$1;
(statearr_25768_25808[(2)] = inst_25700);

(statearr_25768_25808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (8))){
var inst_25673 = (state_25730[(12)]);
var inst_25674 = (state_25730[(13)]);
var inst_25676 = (inst_25674 < inst_25673);
var inst_25677 = inst_25676;
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25677)){
var statearr_25769_25809 = state_25730__$1;
(statearr_25769_25809[(1)] = (10));

} else {
var statearr_25770_25810 = state_25730__$1;
(statearr_25770_25810[(1)] = (11));

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
});})(c__23883__auto___25782,mults,ensure_mult,p))
;
return ((function (switch__23771__auto__,c__23883__auto___25782,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23772__auto__ = null;
var cljs$core$async$state_machine__23772__auto____0 = (function (){
var statearr_25774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25774[(0)] = cljs$core$async$state_machine__23772__auto__);

(statearr_25774[(1)] = (1));

return statearr_25774;
});
var cljs$core$async$state_machine__23772__auto____1 = (function (state_25730){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_25730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e25775){if((e25775 instanceof Object)){
var ex__23775__auto__ = e25775;
var statearr_25776_25811 = state_25730;
(statearr_25776_25811[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25812 = state_25730;
state_25730 = G__25812;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$state_machine__23772__auto__ = function(state_25730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23772__auto____1.call(this,state_25730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23772__auto____0;
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23772__auto____1;
return cljs$core$async$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___25782,mults,ensure_mult,p))
})();
var state__23885__auto__ = (function (){var statearr_25777 = f__23884__auto__.call(null);
(statearr_25777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___25782);

return statearr_25777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___25782,mults,ensure_mult,p))
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
var args25813 = [];
var len__17809__auto___25816 = arguments.length;
var i__17810__auto___25817 = (0);
while(true){
if((i__17810__auto___25817 < len__17809__auto___25816)){
args25813.push((arguments[i__17810__auto___25817]));

var G__25818 = (i__17810__auto___25817 + (1));
i__17810__auto___25817 = G__25818;
continue;
} else {
}
break;
}

var G__25815 = args25813.length;
switch (G__25815) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25813.length)].join('')));

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
var args25820 = [];
var len__17809__auto___25823 = arguments.length;
var i__17810__auto___25824 = (0);
while(true){
if((i__17810__auto___25824 < len__17809__auto___25823)){
args25820.push((arguments[i__17810__auto___25824]));

var G__25825 = (i__17810__auto___25824 + (1));
i__17810__auto___25824 = G__25825;
continue;
} else {
}
break;
}

var G__25822 = args25820.length;
switch (G__25822) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25820.length)].join('')));

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
var args25827 = [];
var len__17809__auto___25898 = arguments.length;
var i__17810__auto___25899 = (0);
while(true){
if((i__17810__auto___25899 < len__17809__auto___25898)){
args25827.push((arguments[i__17810__auto___25899]));

var G__25900 = (i__17810__auto___25899 + (1));
i__17810__auto___25899 = G__25900;
continue;
} else {
}
break;
}

var G__25829 = args25827.length;
switch (G__25829) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25827.length)].join('')));

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
var c__23883__auto___25902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___25902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___25902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25868){
var state_val_25869 = (state_25868[(1)]);
if((state_val_25869 === (7))){
var state_25868__$1 = state_25868;
var statearr_25870_25903 = state_25868__$1;
(statearr_25870_25903[(2)] = null);

(statearr_25870_25903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (1))){
var state_25868__$1 = state_25868;
var statearr_25871_25904 = state_25868__$1;
(statearr_25871_25904[(2)] = null);

(statearr_25871_25904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (4))){
var inst_25832 = (state_25868[(7)]);
var inst_25834 = (inst_25832 < cnt);
var state_25868__$1 = state_25868;
if(cljs.core.truth_(inst_25834)){
var statearr_25872_25905 = state_25868__$1;
(statearr_25872_25905[(1)] = (6));

} else {
var statearr_25873_25906 = state_25868__$1;
(statearr_25873_25906[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (15))){
var inst_25864 = (state_25868[(2)]);
var state_25868__$1 = state_25868;
var statearr_25874_25907 = state_25868__$1;
(statearr_25874_25907[(2)] = inst_25864);

(statearr_25874_25907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (13))){
var inst_25857 = cljs.core.async.close_BANG_.call(null,out);
var state_25868__$1 = state_25868;
var statearr_25875_25908 = state_25868__$1;
(statearr_25875_25908[(2)] = inst_25857);

(statearr_25875_25908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (6))){
var state_25868__$1 = state_25868;
var statearr_25876_25909 = state_25868__$1;
(statearr_25876_25909[(2)] = null);

(statearr_25876_25909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (3))){
var inst_25866 = (state_25868[(2)]);
var state_25868__$1 = state_25868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25868__$1,inst_25866);
} else {
if((state_val_25869 === (12))){
var inst_25854 = (state_25868[(8)]);
var inst_25854__$1 = (state_25868[(2)]);
var inst_25855 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25854__$1);
var state_25868__$1 = (function (){var statearr_25877 = state_25868;
(statearr_25877[(8)] = inst_25854__$1);

return statearr_25877;
})();
if(cljs.core.truth_(inst_25855)){
var statearr_25878_25910 = state_25868__$1;
(statearr_25878_25910[(1)] = (13));

} else {
var statearr_25879_25911 = state_25868__$1;
(statearr_25879_25911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (2))){
var inst_25831 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25832 = (0);
var state_25868__$1 = (function (){var statearr_25880 = state_25868;
(statearr_25880[(7)] = inst_25832);

(statearr_25880[(9)] = inst_25831);

return statearr_25880;
})();
var statearr_25881_25912 = state_25868__$1;
(statearr_25881_25912[(2)] = null);

(statearr_25881_25912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (11))){
var inst_25832 = (state_25868[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25868,(10),Object,null,(9));
var inst_25841 = chs__$1.call(null,inst_25832);
var inst_25842 = done.call(null,inst_25832);
var inst_25843 = cljs.core.async.take_BANG_.call(null,inst_25841,inst_25842);
var state_25868__$1 = state_25868;
var statearr_25882_25913 = state_25868__$1;
(statearr_25882_25913[(2)] = inst_25843);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25868__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (9))){
var inst_25832 = (state_25868[(7)]);
var inst_25845 = (state_25868[(2)]);
var inst_25846 = (inst_25832 + (1));
var inst_25832__$1 = inst_25846;
var state_25868__$1 = (function (){var statearr_25883 = state_25868;
(statearr_25883[(7)] = inst_25832__$1);

(statearr_25883[(10)] = inst_25845);

return statearr_25883;
})();
var statearr_25884_25914 = state_25868__$1;
(statearr_25884_25914[(2)] = null);

(statearr_25884_25914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (5))){
var inst_25852 = (state_25868[(2)]);
var state_25868__$1 = (function (){var statearr_25885 = state_25868;
(statearr_25885[(11)] = inst_25852);

return statearr_25885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25868__$1,(12),dchan);
} else {
if((state_val_25869 === (14))){
var inst_25854 = (state_25868[(8)]);
var inst_25859 = cljs.core.apply.call(null,f,inst_25854);
var state_25868__$1 = state_25868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25868__$1,(16),out,inst_25859);
} else {
if((state_val_25869 === (16))){
var inst_25861 = (state_25868[(2)]);
var state_25868__$1 = (function (){var statearr_25886 = state_25868;
(statearr_25886[(12)] = inst_25861);

return statearr_25886;
})();
var statearr_25887_25915 = state_25868__$1;
(statearr_25887_25915[(2)] = null);

(statearr_25887_25915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (10))){
var inst_25836 = (state_25868[(2)]);
var inst_25837 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25868__$1 = (function (){var statearr_25888 = state_25868;
(statearr_25888[(13)] = inst_25836);

return statearr_25888;
})();
var statearr_25889_25916 = state_25868__$1;
(statearr_25889_25916[(2)] = inst_25837);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25868__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25869 === (8))){
var inst_25850 = (state_25868[(2)]);
var state_25868__$1 = state_25868;
var statearr_25890_25917 = state_25868__$1;
(statearr_25890_25917[(2)] = inst_25850);

(statearr_25890_25917[(1)] = (5));


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
});})(c__23883__auto___25902,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23771__auto__,c__23883__auto___25902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23772__auto__ = null;
var cljs$core$async$state_machine__23772__auto____0 = (function (){
var statearr_25894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25894[(0)] = cljs$core$async$state_machine__23772__auto__);

(statearr_25894[(1)] = (1));

return statearr_25894;
});
var cljs$core$async$state_machine__23772__auto____1 = (function (state_25868){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_25868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e25895){if((e25895 instanceof Object)){
var ex__23775__auto__ = e25895;
var statearr_25896_25918 = state_25868;
(statearr_25896_25918[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25919 = state_25868;
state_25868 = G__25919;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$state_machine__23772__auto__ = function(state_25868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23772__auto____1.call(this,state_25868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23772__auto____0;
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23772__auto____1;
return cljs$core$async$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___25902,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23885__auto__ = (function (){var statearr_25897 = f__23884__auto__.call(null);
(statearr_25897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___25902);

return statearr_25897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___25902,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25921 = [];
var len__17809__auto___25977 = arguments.length;
var i__17810__auto___25978 = (0);
while(true){
if((i__17810__auto___25978 < len__17809__auto___25977)){
args25921.push((arguments[i__17810__auto___25978]));

var G__25979 = (i__17810__auto___25978 + (1));
i__17810__auto___25978 = G__25979;
continue;
} else {
}
break;
}

var G__25923 = args25921.length;
switch (G__25923) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25921.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23883__auto___25981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___25981,out){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___25981,out){
return (function (state_25953){
var state_val_25954 = (state_25953[(1)]);
if((state_val_25954 === (7))){
var inst_25932 = (state_25953[(7)]);
var inst_25933 = (state_25953[(8)]);
var inst_25932__$1 = (state_25953[(2)]);
var inst_25933__$1 = cljs.core.nth.call(null,inst_25932__$1,(0),null);
var inst_25934 = cljs.core.nth.call(null,inst_25932__$1,(1),null);
var inst_25935 = (inst_25933__$1 == null);
var state_25953__$1 = (function (){var statearr_25955 = state_25953;
(statearr_25955[(7)] = inst_25932__$1);

(statearr_25955[(9)] = inst_25934);

(statearr_25955[(8)] = inst_25933__$1);

return statearr_25955;
})();
if(cljs.core.truth_(inst_25935)){
var statearr_25956_25982 = state_25953__$1;
(statearr_25956_25982[(1)] = (8));

} else {
var statearr_25957_25983 = state_25953__$1;
(statearr_25957_25983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25954 === (1))){
var inst_25924 = cljs.core.vec.call(null,chs);
var inst_25925 = inst_25924;
var state_25953__$1 = (function (){var statearr_25958 = state_25953;
(statearr_25958[(10)] = inst_25925);

return statearr_25958;
})();
var statearr_25959_25984 = state_25953__$1;
(statearr_25959_25984[(2)] = null);

(statearr_25959_25984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25954 === (4))){
var inst_25925 = (state_25953[(10)]);
var state_25953__$1 = state_25953;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25953__$1,(7),inst_25925);
} else {
if((state_val_25954 === (6))){
var inst_25949 = (state_25953[(2)]);
var state_25953__$1 = state_25953;
var statearr_25960_25985 = state_25953__$1;
(statearr_25960_25985[(2)] = inst_25949);

(statearr_25960_25985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25954 === (3))){
var inst_25951 = (state_25953[(2)]);
var state_25953__$1 = state_25953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25953__$1,inst_25951);
} else {
if((state_val_25954 === (2))){
var inst_25925 = (state_25953[(10)]);
var inst_25927 = cljs.core.count.call(null,inst_25925);
var inst_25928 = (inst_25927 > (0));
var state_25953__$1 = state_25953;
if(cljs.core.truth_(inst_25928)){
var statearr_25962_25986 = state_25953__$1;
(statearr_25962_25986[(1)] = (4));

} else {
var statearr_25963_25987 = state_25953__$1;
(statearr_25963_25987[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25954 === (11))){
var inst_25925 = (state_25953[(10)]);
var inst_25942 = (state_25953[(2)]);
var tmp25961 = inst_25925;
var inst_25925__$1 = tmp25961;
var state_25953__$1 = (function (){var statearr_25964 = state_25953;
(statearr_25964[(11)] = inst_25942);

(statearr_25964[(10)] = inst_25925__$1);

return statearr_25964;
})();
var statearr_25965_25988 = state_25953__$1;
(statearr_25965_25988[(2)] = null);

(statearr_25965_25988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25954 === (9))){
var inst_25933 = (state_25953[(8)]);
var state_25953__$1 = state_25953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25953__$1,(11),out,inst_25933);
} else {
if((state_val_25954 === (5))){
var inst_25947 = cljs.core.async.close_BANG_.call(null,out);
var state_25953__$1 = state_25953;
var statearr_25966_25989 = state_25953__$1;
(statearr_25966_25989[(2)] = inst_25947);

(statearr_25966_25989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25954 === (10))){
var inst_25945 = (state_25953[(2)]);
var state_25953__$1 = state_25953;
var statearr_25967_25990 = state_25953__$1;
(statearr_25967_25990[(2)] = inst_25945);

(statearr_25967_25990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25954 === (8))){
var inst_25932 = (state_25953[(7)]);
var inst_25934 = (state_25953[(9)]);
var inst_25933 = (state_25953[(8)]);
var inst_25925 = (state_25953[(10)]);
var inst_25937 = (function (){var cs = inst_25925;
var vec__25930 = inst_25932;
var v = inst_25933;
var c = inst_25934;
return ((function (cs,vec__25930,v,c,inst_25932,inst_25934,inst_25933,inst_25925,state_val_25954,c__23883__auto___25981,out){
return (function (p1__25920_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25920_SHARP_);
});
;})(cs,vec__25930,v,c,inst_25932,inst_25934,inst_25933,inst_25925,state_val_25954,c__23883__auto___25981,out))
})();
var inst_25938 = cljs.core.filterv.call(null,inst_25937,inst_25925);
var inst_25925__$1 = inst_25938;
var state_25953__$1 = (function (){var statearr_25968 = state_25953;
(statearr_25968[(10)] = inst_25925__$1);

return statearr_25968;
})();
var statearr_25969_25991 = state_25953__$1;
(statearr_25969_25991[(2)] = null);

(statearr_25969_25991[(1)] = (2));


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
});})(c__23883__auto___25981,out))
;
return ((function (switch__23771__auto__,c__23883__auto___25981,out){
return (function() {
var cljs$core$async$state_machine__23772__auto__ = null;
var cljs$core$async$state_machine__23772__auto____0 = (function (){
var statearr_25973 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25973[(0)] = cljs$core$async$state_machine__23772__auto__);

(statearr_25973[(1)] = (1));

return statearr_25973;
});
var cljs$core$async$state_machine__23772__auto____1 = (function (state_25953){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_25953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e25974){if((e25974 instanceof Object)){
var ex__23775__auto__ = e25974;
var statearr_25975_25992 = state_25953;
(statearr_25975_25992[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25993 = state_25953;
state_25953 = G__25993;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$state_machine__23772__auto__ = function(state_25953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23772__auto____1.call(this,state_25953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23772__auto____0;
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23772__auto____1;
return cljs$core$async$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___25981,out))
})();
var state__23885__auto__ = (function (){var statearr_25976 = f__23884__auto__.call(null);
(statearr_25976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___25981);

return statearr_25976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___25981,out))
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
var args25994 = [];
var len__17809__auto___26043 = arguments.length;
var i__17810__auto___26044 = (0);
while(true){
if((i__17810__auto___26044 < len__17809__auto___26043)){
args25994.push((arguments[i__17810__auto___26044]));

var G__26045 = (i__17810__auto___26044 + (1));
i__17810__auto___26044 = G__26045;
continue;
} else {
}
break;
}

var G__25996 = args25994.length;
switch (G__25996) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25994.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23883__auto___26047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___26047,out){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___26047,out){
return (function (state_26020){
var state_val_26021 = (state_26020[(1)]);
if((state_val_26021 === (7))){
var inst_26002 = (state_26020[(7)]);
var inst_26002__$1 = (state_26020[(2)]);
var inst_26003 = (inst_26002__$1 == null);
var inst_26004 = cljs.core.not.call(null,inst_26003);
var state_26020__$1 = (function (){var statearr_26022 = state_26020;
(statearr_26022[(7)] = inst_26002__$1);

return statearr_26022;
})();
if(inst_26004){
var statearr_26023_26048 = state_26020__$1;
(statearr_26023_26048[(1)] = (8));

} else {
var statearr_26024_26049 = state_26020__$1;
(statearr_26024_26049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (1))){
var inst_25997 = (0);
var state_26020__$1 = (function (){var statearr_26025 = state_26020;
(statearr_26025[(8)] = inst_25997);

return statearr_26025;
})();
var statearr_26026_26050 = state_26020__$1;
(statearr_26026_26050[(2)] = null);

(statearr_26026_26050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (4))){
var state_26020__$1 = state_26020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26020__$1,(7),ch);
} else {
if((state_val_26021 === (6))){
var inst_26015 = (state_26020[(2)]);
var state_26020__$1 = state_26020;
var statearr_26027_26051 = state_26020__$1;
(statearr_26027_26051[(2)] = inst_26015);

(statearr_26027_26051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (3))){
var inst_26017 = (state_26020[(2)]);
var inst_26018 = cljs.core.async.close_BANG_.call(null,out);
var state_26020__$1 = (function (){var statearr_26028 = state_26020;
(statearr_26028[(9)] = inst_26017);

return statearr_26028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26020__$1,inst_26018);
} else {
if((state_val_26021 === (2))){
var inst_25997 = (state_26020[(8)]);
var inst_25999 = (inst_25997 < n);
var state_26020__$1 = state_26020;
if(cljs.core.truth_(inst_25999)){
var statearr_26029_26052 = state_26020__$1;
(statearr_26029_26052[(1)] = (4));

} else {
var statearr_26030_26053 = state_26020__$1;
(statearr_26030_26053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (11))){
var inst_25997 = (state_26020[(8)]);
var inst_26007 = (state_26020[(2)]);
var inst_26008 = (inst_25997 + (1));
var inst_25997__$1 = inst_26008;
var state_26020__$1 = (function (){var statearr_26031 = state_26020;
(statearr_26031[(8)] = inst_25997__$1);

(statearr_26031[(10)] = inst_26007);

return statearr_26031;
})();
var statearr_26032_26054 = state_26020__$1;
(statearr_26032_26054[(2)] = null);

(statearr_26032_26054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (9))){
var state_26020__$1 = state_26020;
var statearr_26033_26055 = state_26020__$1;
(statearr_26033_26055[(2)] = null);

(statearr_26033_26055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (5))){
var state_26020__$1 = state_26020;
var statearr_26034_26056 = state_26020__$1;
(statearr_26034_26056[(2)] = null);

(statearr_26034_26056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (10))){
var inst_26012 = (state_26020[(2)]);
var state_26020__$1 = state_26020;
var statearr_26035_26057 = state_26020__$1;
(statearr_26035_26057[(2)] = inst_26012);

(statearr_26035_26057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26021 === (8))){
var inst_26002 = (state_26020[(7)]);
var state_26020__$1 = state_26020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26020__$1,(11),out,inst_26002);
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
});})(c__23883__auto___26047,out))
;
return ((function (switch__23771__auto__,c__23883__auto___26047,out){
return (function() {
var cljs$core$async$state_machine__23772__auto__ = null;
var cljs$core$async$state_machine__23772__auto____0 = (function (){
var statearr_26039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26039[(0)] = cljs$core$async$state_machine__23772__auto__);

(statearr_26039[(1)] = (1));

return statearr_26039;
});
var cljs$core$async$state_machine__23772__auto____1 = (function (state_26020){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_26020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e26040){if((e26040 instanceof Object)){
var ex__23775__auto__ = e26040;
var statearr_26041_26058 = state_26020;
(statearr_26041_26058[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26059 = state_26020;
state_26020 = G__26059;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$state_machine__23772__auto__ = function(state_26020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23772__auto____1.call(this,state_26020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23772__auto____0;
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23772__auto____1;
return cljs$core$async$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___26047,out))
})();
var state__23885__auto__ = (function (){var statearr_26042 = f__23884__auto__.call(null);
(statearr_26042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___26047);

return statearr_26042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___26047,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26067 = (function (map_LT_,f,ch,meta26068){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26068 = meta26068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26069,meta26068__$1){
var self__ = this;
var _26069__$1 = this;
return (new cljs.core.async.t_cljs$core$async26067(self__.map_LT_,self__.f,self__.ch,meta26068__$1));
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26069){
var self__ = this;
var _26069__$1 = this;
return self__.meta26068;
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26070 = (function (map_LT_,f,ch,meta26068,_,fn1,meta26071){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26068 = meta26068;
this._ = _;
this.fn1 = fn1;
this.meta26071 = meta26071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26072,meta26071__$1){
var self__ = this;
var _26072__$1 = this;
return (new cljs.core.async.t_cljs$core$async26070(self__.map_LT_,self__.f,self__.ch,self__.meta26068,self__._,self__.fn1,meta26071__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26072){
var self__ = this;
var _26072__$1 = this;
return self__.meta26071;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26060_SHARP_){
return f1.call(null,(((p1__26060_SHARP_ == null))?null:self__.f.call(null,p1__26060_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26070.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26068","meta26068",1348264285,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26067","cljs.core.async/t_cljs$core$async26067",1538907829,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26071","meta26071",1395940289,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26070";

cljs.core.async.t_cljs$core$async26070.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26070");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26070 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26070(map_LT___$1,f__$1,ch__$1,meta26068__$1,___$2,fn1__$1,meta26071){
return (new cljs.core.async.t_cljs$core$async26070(map_LT___$1,f__$1,ch__$1,meta26068__$1,___$2,fn1__$1,meta26071));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26070(self__.map_LT_,self__.f,self__.ch,self__.meta26068,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26068","meta26068",1348264285,null)], null);
});

cljs.core.async.t_cljs$core$async26067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26067";

cljs.core.async.t_cljs$core$async26067.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26067");
});

cljs.core.async.__GT_t_cljs$core$async26067 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26067(map_LT___$1,f__$1,ch__$1,meta26068){
return (new cljs.core.async.t_cljs$core$async26067(map_LT___$1,f__$1,ch__$1,meta26068));
});

}

return (new cljs.core.async.t_cljs$core$async26067(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26076 = (function (map_GT_,f,ch,meta26077){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26077 = meta26077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26078,meta26077__$1){
var self__ = this;
var _26078__$1 = this;
return (new cljs.core.async.t_cljs$core$async26076(self__.map_GT_,self__.f,self__.ch,meta26077__$1));
});

cljs.core.async.t_cljs$core$async26076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26078){
var self__ = this;
var _26078__$1 = this;
return self__.meta26077;
});

cljs.core.async.t_cljs$core$async26076.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26076.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26076.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26077","meta26077",-1348339930,null)], null);
});

cljs.core.async.t_cljs$core$async26076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26076";

cljs.core.async.t_cljs$core$async26076.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26076");
});

cljs.core.async.__GT_t_cljs$core$async26076 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26076(map_GT___$1,f__$1,ch__$1,meta26077){
return (new cljs.core.async.t_cljs$core$async26076(map_GT___$1,f__$1,ch__$1,meta26077));
});

}

return (new cljs.core.async.t_cljs$core$async26076(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26082 = (function (filter_GT_,p,ch,meta26083){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26083 = meta26083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26084,meta26083__$1){
var self__ = this;
var _26084__$1 = this;
return (new cljs.core.async.t_cljs$core$async26082(self__.filter_GT_,self__.p,self__.ch,meta26083__$1));
});

cljs.core.async.t_cljs$core$async26082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26084){
var self__ = this;
var _26084__$1 = this;
return self__.meta26083;
});

cljs.core.async.t_cljs$core$async26082.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26082.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26082.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26082.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26082.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26082.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26082.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26083","meta26083",1699546935,null)], null);
});

cljs.core.async.t_cljs$core$async26082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26082";

cljs.core.async.t_cljs$core$async26082.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26082");
});

cljs.core.async.__GT_t_cljs$core$async26082 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26082(filter_GT___$1,p__$1,ch__$1,meta26083){
return (new cljs.core.async.t_cljs$core$async26082(filter_GT___$1,p__$1,ch__$1,meta26083));
});

}

return (new cljs.core.async.t_cljs$core$async26082(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26085 = [];
var len__17809__auto___26129 = arguments.length;
var i__17810__auto___26130 = (0);
while(true){
if((i__17810__auto___26130 < len__17809__auto___26129)){
args26085.push((arguments[i__17810__auto___26130]));

var G__26131 = (i__17810__auto___26130 + (1));
i__17810__auto___26130 = G__26131;
continue;
} else {
}
break;
}

var G__26087 = args26085.length;
switch (G__26087) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26085.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23883__auto___26133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___26133,out){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___26133,out){
return (function (state_26108){
var state_val_26109 = (state_26108[(1)]);
if((state_val_26109 === (7))){
var inst_26104 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26110_26134 = state_26108__$1;
(statearr_26110_26134[(2)] = inst_26104);

(statearr_26110_26134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (1))){
var state_26108__$1 = state_26108;
var statearr_26111_26135 = state_26108__$1;
(statearr_26111_26135[(2)] = null);

(statearr_26111_26135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (4))){
var inst_26090 = (state_26108[(7)]);
var inst_26090__$1 = (state_26108[(2)]);
var inst_26091 = (inst_26090__$1 == null);
var state_26108__$1 = (function (){var statearr_26112 = state_26108;
(statearr_26112[(7)] = inst_26090__$1);

return statearr_26112;
})();
if(cljs.core.truth_(inst_26091)){
var statearr_26113_26136 = state_26108__$1;
(statearr_26113_26136[(1)] = (5));

} else {
var statearr_26114_26137 = state_26108__$1;
(statearr_26114_26137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (6))){
var inst_26090 = (state_26108[(7)]);
var inst_26095 = p.call(null,inst_26090);
var state_26108__$1 = state_26108;
if(cljs.core.truth_(inst_26095)){
var statearr_26115_26138 = state_26108__$1;
(statearr_26115_26138[(1)] = (8));

} else {
var statearr_26116_26139 = state_26108__$1;
(statearr_26116_26139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (3))){
var inst_26106 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26108__$1,inst_26106);
} else {
if((state_val_26109 === (2))){
var state_26108__$1 = state_26108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26108__$1,(4),ch);
} else {
if((state_val_26109 === (11))){
var inst_26098 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26117_26140 = state_26108__$1;
(statearr_26117_26140[(2)] = inst_26098);

(statearr_26117_26140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (9))){
var state_26108__$1 = state_26108;
var statearr_26118_26141 = state_26108__$1;
(statearr_26118_26141[(2)] = null);

(statearr_26118_26141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (5))){
var inst_26093 = cljs.core.async.close_BANG_.call(null,out);
var state_26108__$1 = state_26108;
var statearr_26119_26142 = state_26108__$1;
(statearr_26119_26142[(2)] = inst_26093);

(statearr_26119_26142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (10))){
var inst_26101 = (state_26108[(2)]);
var state_26108__$1 = (function (){var statearr_26120 = state_26108;
(statearr_26120[(8)] = inst_26101);

return statearr_26120;
})();
var statearr_26121_26143 = state_26108__$1;
(statearr_26121_26143[(2)] = null);

(statearr_26121_26143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (8))){
var inst_26090 = (state_26108[(7)]);
var state_26108__$1 = state_26108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26108__$1,(11),out,inst_26090);
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
});})(c__23883__auto___26133,out))
;
return ((function (switch__23771__auto__,c__23883__auto___26133,out){
return (function() {
var cljs$core$async$state_machine__23772__auto__ = null;
var cljs$core$async$state_machine__23772__auto____0 = (function (){
var statearr_26125 = [null,null,null,null,null,null,null,null,null];
(statearr_26125[(0)] = cljs$core$async$state_machine__23772__auto__);

(statearr_26125[(1)] = (1));

return statearr_26125;
});
var cljs$core$async$state_machine__23772__auto____1 = (function (state_26108){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_26108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e26126){if((e26126 instanceof Object)){
var ex__23775__auto__ = e26126;
var statearr_26127_26144 = state_26108;
(statearr_26127_26144[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26145 = state_26108;
state_26108 = G__26145;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$state_machine__23772__auto__ = function(state_26108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23772__auto____1.call(this,state_26108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23772__auto____0;
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23772__auto____1;
return cljs$core$async$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___26133,out))
})();
var state__23885__auto__ = (function (){var statearr_26128 = f__23884__auto__.call(null);
(statearr_26128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___26133);

return statearr_26128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___26133,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26146 = [];
var len__17809__auto___26149 = arguments.length;
var i__17810__auto___26150 = (0);
while(true){
if((i__17810__auto___26150 < len__17809__auto___26149)){
args26146.push((arguments[i__17810__auto___26150]));

var G__26151 = (i__17810__auto___26150 + (1));
i__17810__auto___26150 = G__26151;
continue;
} else {
}
break;
}

var G__26148 = args26146.length;
switch (G__26148) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26146.length)].join('')));

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
var c__23883__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto__){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto__){
return (function (state_26318){
var state_val_26319 = (state_26318[(1)]);
if((state_val_26319 === (7))){
var inst_26314 = (state_26318[(2)]);
var state_26318__$1 = state_26318;
var statearr_26320_26361 = state_26318__$1;
(statearr_26320_26361[(2)] = inst_26314);

(statearr_26320_26361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (20))){
var inst_26284 = (state_26318[(7)]);
var inst_26295 = (state_26318[(2)]);
var inst_26296 = cljs.core.next.call(null,inst_26284);
var inst_26270 = inst_26296;
var inst_26271 = null;
var inst_26272 = (0);
var inst_26273 = (0);
var state_26318__$1 = (function (){var statearr_26321 = state_26318;
(statearr_26321[(8)] = inst_26273);

(statearr_26321[(9)] = inst_26270);

(statearr_26321[(10)] = inst_26295);

(statearr_26321[(11)] = inst_26271);

(statearr_26321[(12)] = inst_26272);

return statearr_26321;
})();
var statearr_26322_26362 = state_26318__$1;
(statearr_26322_26362[(2)] = null);

(statearr_26322_26362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (1))){
var state_26318__$1 = state_26318;
var statearr_26323_26363 = state_26318__$1;
(statearr_26323_26363[(2)] = null);

(statearr_26323_26363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (4))){
var inst_26259 = (state_26318[(13)]);
var inst_26259__$1 = (state_26318[(2)]);
var inst_26260 = (inst_26259__$1 == null);
var state_26318__$1 = (function (){var statearr_26324 = state_26318;
(statearr_26324[(13)] = inst_26259__$1);

return statearr_26324;
})();
if(cljs.core.truth_(inst_26260)){
var statearr_26325_26364 = state_26318__$1;
(statearr_26325_26364[(1)] = (5));

} else {
var statearr_26326_26365 = state_26318__$1;
(statearr_26326_26365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (15))){
var state_26318__$1 = state_26318;
var statearr_26330_26366 = state_26318__$1;
(statearr_26330_26366[(2)] = null);

(statearr_26330_26366[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (21))){
var state_26318__$1 = state_26318;
var statearr_26331_26367 = state_26318__$1;
(statearr_26331_26367[(2)] = null);

(statearr_26331_26367[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (13))){
var inst_26273 = (state_26318[(8)]);
var inst_26270 = (state_26318[(9)]);
var inst_26271 = (state_26318[(11)]);
var inst_26272 = (state_26318[(12)]);
var inst_26280 = (state_26318[(2)]);
var inst_26281 = (inst_26273 + (1));
var tmp26327 = inst_26270;
var tmp26328 = inst_26271;
var tmp26329 = inst_26272;
var inst_26270__$1 = tmp26327;
var inst_26271__$1 = tmp26328;
var inst_26272__$1 = tmp26329;
var inst_26273__$1 = inst_26281;
var state_26318__$1 = (function (){var statearr_26332 = state_26318;
(statearr_26332[(8)] = inst_26273__$1);

(statearr_26332[(9)] = inst_26270__$1);

(statearr_26332[(14)] = inst_26280);

(statearr_26332[(11)] = inst_26271__$1);

(statearr_26332[(12)] = inst_26272__$1);

return statearr_26332;
})();
var statearr_26333_26368 = state_26318__$1;
(statearr_26333_26368[(2)] = null);

(statearr_26333_26368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (22))){
var state_26318__$1 = state_26318;
var statearr_26334_26369 = state_26318__$1;
(statearr_26334_26369[(2)] = null);

(statearr_26334_26369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (6))){
var inst_26259 = (state_26318[(13)]);
var inst_26268 = f.call(null,inst_26259);
var inst_26269 = cljs.core.seq.call(null,inst_26268);
var inst_26270 = inst_26269;
var inst_26271 = null;
var inst_26272 = (0);
var inst_26273 = (0);
var state_26318__$1 = (function (){var statearr_26335 = state_26318;
(statearr_26335[(8)] = inst_26273);

(statearr_26335[(9)] = inst_26270);

(statearr_26335[(11)] = inst_26271);

(statearr_26335[(12)] = inst_26272);

return statearr_26335;
})();
var statearr_26336_26370 = state_26318__$1;
(statearr_26336_26370[(2)] = null);

(statearr_26336_26370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (17))){
var inst_26284 = (state_26318[(7)]);
var inst_26288 = cljs.core.chunk_first.call(null,inst_26284);
var inst_26289 = cljs.core.chunk_rest.call(null,inst_26284);
var inst_26290 = cljs.core.count.call(null,inst_26288);
var inst_26270 = inst_26289;
var inst_26271 = inst_26288;
var inst_26272 = inst_26290;
var inst_26273 = (0);
var state_26318__$1 = (function (){var statearr_26337 = state_26318;
(statearr_26337[(8)] = inst_26273);

(statearr_26337[(9)] = inst_26270);

(statearr_26337[(11)] = inst_26271);

(statearr_26337[(12)] = inst_26272);

return statearr_26337;
})();
var statearr_26338_26371 = state_26318__$1;
(statearr_26338_26371[(2)] = null);

(statearr_26338_26371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (3))){
var inst_26316 = (state_26318[(2)]);
var state_26318__$1 = state_26318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26318__$1,inst_26316);
} else {
if((state_val_26319 === (12))){
var inst_26304 = (state_26318[(2)]);
var state_26318__$1 = state_26318;
var statearr_26339_26372 = state_26318__$1;
(statearr_26339_26372[(2)] = inst_26304);

(statearr_26339_26372[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (2))){
var state_26318__$1 = state_26318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26318__$1,(4),in$);
} else {
if((state_val_26319 === (23))){
var inst_26312 = (state_26318[(2)]);
var state_26318__$1 = state_26318;
var statearr_26340_26373 = state_26318__$1;
(statearr_26340_26373[(2)] = inst_26312);

(statearr_26340_26373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (19))){
var inst_26299 = (state_26318[(2)]);
var state_26318__$1 = state_26318;
var statearr_26341_26374 = state_26318__$1;
(statearr_26341_26374[(2)] = inst_26299);

(statearr_26341_26374[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (11))){
var inst_26270 = (state_26318[(9)]);
var inst_26284 = (state_26318[(7)]);
var inst_26284__$1 = cljs.core.seq.call(null,inst_26270);
var state_26318__$1 = (function (){var statearr_26342 = state_26318;
(statearr_26342[(7)] = inst_26284__$1);

return statearr_26342;
})();
if(inst_26284__$1){
var statearr_26343_26375 = state_26318__$1;
(statearr_26343_26375[(1)] = (14));

} else {
var statearr_26344_26376 = state_26318__$1;
(statearr_26344_26376[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (9))){
var inst_26306 = (state_26318[(2)]);
var inst_26307 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26318__$1 = (function (){var statearr_26345 = state_26318;
(statearr_26345[(15)] = inst_26306);

return statearr_26345;
})();
if(cljs.core.truth_(inst_26307)){
var statearr_26346_26377 = state_26318__$1;
(statearr_26346_26377[(1)] = (21));

} else {
var statearr_26347_26378 = state_26318__$1;
(statearr_26347_26378[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (5))){
var inst_26262 = cljs.core.async.close_BANG_.call(null,out);
var state_26318__$1 = state_26318;
var statearr_26348_26379 = state_26318__$1;
(statearr_26348_26379[(2)] = inst_26262);

(statearr_26348_26379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (14))){
var inst_26284 = (state_26318[(7)]);
var inst_26286 = cljs.core.chunked_seq_QMARK_.call(null,inst_26284);
var state_26318__$1 = state_26318;
if(inst_26286){
var statearr_26349_26380 = state_26318__$1;
(statearr_26349_26380[(1)] = (17));

} else {
var statearr_26350_26381 = state_26318__$1;
(statearr_26350_26381[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (16))){
var inst_26302 = (state_26318[(2)]);
var state_26318__$1 = state_26318;
var statearr_26351_26382 = state_26318__$1;
(statearr_26351_26382[(2)] = inst_26302);

(statearr_26351_26382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (10))){
var inst_26273 = (state_26318[(8)]);
var inst_26271 = (state_26318[(11)]);
var inst_26278 = cljs.core._nth.call(null,inst_26271,inst_26273);
var state_26318__$1 = state_26318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26318__$1,(13),out,inst_26278);
} else {
if((state_val_26319 === (18))){
var inst_26284 = (state_26318[(7)]);
var inst_26293 = cljs.core.first.call(null,inst_26284);
var state_26318__$1 = state_26318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26318__$1,(20),out,inst_26293);
} else {
if((state_val_26319 === (8))){
var inst_26273 = (state_26318[(8)]);
var inst_26272 = (state_26318[(12)]);
var inst_26275 = (inst_26273 < inst_26272);
var inst_26276 = inst_26275;
var state_26318__$1 = state_26318;
if(cljs.core.truth_(inst_26276)){
var statearr_26352_26383 = state_26318__$1;
(statearr_26352_26383[(1)] = (10));

} else {
var statearr_26353_26384 = state_26318__$1;
(statearr_26353_26384[(1)] = (11));

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
});})(c__23883__auto__))
;
return ((function (switch__23771__auto__,c__23883__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23772__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23772__auto____0 = (function (){
var statearr_26357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26357[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23772__auto__);

(statearr_26357[(1)] = (1));

return statearr_26357;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23772__auto____1 = (function (state_26318){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_26318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e26358){if((e26358 instanceof Object)){
var ex__23775__auto__ = e26358;
var statearr_26359_26385 = state_26318;
(statearr_26359_26385[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26386 = state_26318;
state_26318 = G__26386;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23772__auto__ = function(state_26318){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23772__auto____1.call(this,state_26318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23772__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23772__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto__))
})();
var state__23885__auto__ = (function (){var statearr_26360 = f__23884__auto__.call(null);
(statearr_26360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto__);

return statearr_26360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto__))
);

return c__23883__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26387 = [];
var len__17809__auto___26390 = arguments.length;
var i__17810__auto___26391 = (0);
while(true){
if((i__17810__auto___26391 < len__17809__auto___26390)){
args26387.push((arguments[i__17810__auto___26391]));

var G__26392 = (i__17810__auto___26391 + (1));
i__17810__auto___26391 = G__26392;
continue;
} else {
}
break;
}

var G__26389 = args26387.length;
switch (G__26389) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26387.length)].join('')));

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
var args26394 = [];
var len__17809__auto___26397 = arguments.length;
var i__17810__auto___26398 = (0);
while(true){
if((i__17810__auto___26398 < len__17809__auto___26397)){
args26394.push((arguments[i__17810__auto___26398]));

var G__26399 = (i__17810__auto___26398 + (1));
i__17810__auto___26398 = G__26399;
continue;
} else {
}
break;
}

var G__26396 = args26394.length;
switch (G__26396) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26394.length)].join('')));

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
var args26401 = [];
var len__17809__auto___26452 = arguments.length;
var i__17810__auto___26453 = (0);
while(true){
if((i__17810__auto___26453 < len__17809__auto___26452)){
args26401.push((arguments[i__17810__auto___26453]));

var G__26454 = (i__17810__auto___26453 + (1));
i__17810__auto___26453 = G__26454;
continue;
} else {
}
break;
}

var G__26403 = args26401.length;
switch (G__26403) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26401.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23883__auto___26456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___26456,out){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___26456,out){
return (function (state_26427){
var state_val_26428 = (state_26427[(1)]);
if((state_val_26428 === (7))){
var inst_26422 = (state_26427[(2)]);
var state_26427__$1 = state_26427;
var statearr_26429_26457 = state_26427__$1;
(statearr_26429_26457[(2)] = inst_26422);

(statearr_26429_26457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26428 === (1))){
var inst_26404 = null;
var state_26427__$1 = (function (){var statearr_26430 = state_26427;
(statearr_26430[(7)] = inst_26404);

return statearr_26430;
})();
var statearr_26431_26458 = state_26427__$1;
(statearr_26431_26458[(2)] = null);

(statearr_26431_26458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26428 === (4))){
var inst_26407 = (state_26427[(8)]);
var inst_26407__$1 = (state_26427[(2)]);
var inst_26408 = (inst_26407__$1 == null);
var inst_26409 = cljs.core.not.call(null,inst_26408);
var state_26427__$1 = (function (){var statearr_26432 = state_26427;
(statearr_26432[(8)] = inst_26407__$1);

return statearr_26432;
})();
if(inst_26409){
var statearr_26433_26459 = state_26427__$1;
(statearr_26433_26459[(1)] = (5));

} else {
var statearr_26434_26460 = state_26427__$1;
(statearr_26434_26460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26428 === (6))){
var state_26427__$1 = state_26427;
var statearr_26435_26461 = state_26427__$1;
(statearr_26435_26461[(2)] = null);

(statearr_26435_26461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26428 === (3))){
var inst_26424 = (state_26427[(2)]);
var inst_26425 = cljs.core.async.close_BANG_.call(null,out);
var state_26427__$1 = (function (){var statearr_26436 = state_26427;
(statearr_26436[(9)] = inst_26424);

return statearr_26436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26427__$1,inst_26425);
} else {
if((state_val_26428 === (2))){
var state_26427__$1 = state_26427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26427__$1,(4),ch);
} else {
if((state_val_26428 === (11))){
var inst_26407 = (state_26427[(8)]);
var inst_26416 = (state_26427[(2)]);
var inst_26404 = inst_26407;
var state_26427__$1 = (function (){var statearr_26437 = state_26427;
(statearr_26437[(10)] = inst_26416);

(statearr_26437[(7)] = inst_26404);

return statearr_26437;
})();
var statearr_26438_26462 = state_26427__$1;
(statearr_26438_26462[(2)] = null);

(statearr_26438_26462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26428 === (9))){
var inst_26407 = (state_26427[(8)]);
var state_26427__$1 = state_26427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26427__$1,(11),out,inst_26407);
} else {
if((state_val_26428 === (5))){
var inst_26407 = (state_26427[(8)]);
var inst_26404 = (state_26427[(7)]);
var inst_26411 = cljs.core._EQ_.call(null,inst_26407,inst_26404);
var state_26427__$1 = state_26427;
if(inst_26411){
var statearr_26440_26463 = state_26427__$1;
(statearr_26440_26463[(1)] = (8));

} else {
var statearr_26441_26464 = state_26427__$1;
(statearr_26441_26464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26428 === (10))){
var inst_26419 = (state_26427[(2)]);
var state_26427__$1 = state_26427;
var statearr_26442_26465 = state_26427__$1;
(statearr_26442_26465[(2)] = inst_26419);

(statearr_26442_26465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26428 === (8))){
var inst_26404 = (state_26427[(7)]);
var tmp26439 = inst_26404;
var inst_26404__$1 = tmp26439;
var state_26427__$1 = (function (){var statearr_26443 = state_26427;
(statearr_26443[(7)] = inst_26404__$1);

return statearr_26443;
})();
var statearr_26444_26466 = state_26427__$1;
(statearr_26444_26466[(2)] = null);

(statearr_26444_26466[(1)] = (2));


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
});})(c__23883__auto___26456,out))
;
return ((function (switch__23771__auto__,c__23883__auto___26456,out){
return (function() {
var cljs$core$async$state_machine__23772__auto__ = null;
var cljs$core$async$state_machine__23772__auto____0 = (function (){
var statearr_26448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26448[(0)] = cljs$core$async$state_machine__23772__auto__);

(statearr_26448[(1)] = (1));

return statearr_26448;
});
var cljs$core$async$state_machine__23772__auto____1 = (function (state_26427){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_26427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e26449){if((e26449 instanceof Object)){
var ex__23775__auto__ = e26449;
var statearr_26450_26467 = state_26427;
(statearr_26450_26467[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26468 = state_26427;
state_26427 = G__26468;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$state_machine__23772__auto__ = function(state_26427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23772__auto____1.call(this,state_26427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23772__auto____0;
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23772__auto____1;
return cljs$core$async$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___26456,out))
})();
var state__23885__auto__ = (function (){var statearr_26451 = f__23884__auto__.call(null);
(statearr_26451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___26456);

return statearr_26451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___26456,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26469 = [];
var len__17809__auto___26539 = arguments.length;
var i__17810__auto___26540 = (0);
while(true){
if((i__17810__auto___26540 < len__17809__auto___26539)){
args26469.push((arguments[i__17810__auto___26540]));

var G__26541 = (i__17810__auto___26540 + (1));
i__17810__auto___26540 = G__26541;
continue;
} else {
}
break;
}

var G__26471 = args26469.length;
switch (G__26471) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26469.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23883__auto___26543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___26543,out){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___26543,out){
return (function (state_26509){
var state_val_26510 = (state_26509[(1)]);
if((state_val_26510 === (7))){
var inst_26505 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
var statearr_26511_26544 = state_26509__$1;
(statearr_26511_26544[(2)] = inst_26505);

(statearr_26511_26544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (1))){
var inst_26472 = (new Array(n));
var inst_26473 = inst_26472;
var inst_26474 = (0);
var state_26509__$1 = (function (){var statearr_26512 = state_26509;
(statearr_26512[(7)] = inst_26473);

(statearr_26512[(8)] = inst_26474);

return statearr_26512;
})();
var statearr_26513_26545 = state_26509__$1;
(statearr_26513_26545[(2)] = null);

(statearr_26513_26545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (4))){
var inst_26477 = (state_26509[(9)]);
var inst_26477__$1 = (state_26509[(2)]);
var inst_26478 = (inst_26477__$1 == null);
var inst_26479 = cljs.core.not.call(null,inst_26478);
var state_26509__$1 = (function (){var statearr_26514 = state_26509;
(statearr_26514[(9)] = inst_26477__$1);

return statearr_26514;
})();
if(inst_26479){
var statearr_26515_26546 = state_26509__$1;
(statearr_26515_26546[(1)] = (5));

} else {
var statearr_26516_26547 = state_26509__$1;
(statearr_26516_26547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (15))){
var inst_26499 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
var statearr_26517_26548 = state_26509__$1;
(statearr_26517_26548[(2)] = inst_26499);

(statearr_26517_26548[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (13))){
var state_26509__$1 = state_26509;
var statearr_26518_26549 = state_26509__$1;
(statearr_26518_26549[(2)] = null);

(statearr_26518_26549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (6))){
var inst_26474 = (state_26509[(8)]);
var inst_26495 = (inst_26474 > (0));
var state_26509__$1 = state_26509;
if(cljs.core.truth_(inst_26495)){
var statearr_26519_26550 = state_26509__$1;
(statearr_26519_26550[(1)] = (12));

} else {
var statearr_26520_26551 = state_26509__$1;
(statearr_26520_26551[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (3))){
var inst_26507 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26509__$1,inst_26507);
} else {
if((state_val_26510 === (12))){
var inst_26473 = (state_26509[(7)]);
var inst_26497 = cljs.core.vec.call(null,inst_26473);
var state_26509__$1 = state_26509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26509__$1,(15),out,inst_26497);
} else {
if((state_val_26510 === (2))){
var state_26509__$1 = state_26509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26509__$1,(4),ch);
} else {
if((state_val_26510 === (11))){
var inst_26489 = (state_26509[(2)]);
var inst_26490 = (new Array(n));
var inst_26473 = inst_26490;
var inst_26474 = (0);
var state_26509__$1 = (function (){var statearr_26521 = state_26509;
(statearr_26521[(7)] = inst_26473);

(statearr_26521[(10)] = inst_26489);

(statearr_26521[(8)] = inst_26474);

return statearr_26521;
})();
var statearr_26522_26552 = state_26509__$1;
(statearr_26522_26552[(2)] = null);

(statearr_26522_26552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (9))){
var inst_26473 = (state_26509[(7)]);
var inst_26487 = cljs.core.vec.call(null,inst_26473);
var state_26509__$1 = state_26509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26509__$1,(11),out,inst_26487);
} else {
if((state_val_26510 === (5))){
var inst_26477 = (state_26509[(9)]);
var inst_26473 = (state_26509[(7)]);
var inst_26482 = (state_26509[(11)]);
var inst_26474 = (state_26509[(8)]);
var inst_26481 = (inst_26473[inst_26474] = inst_26477);
var inst_26482__$1 = (inst_26474 + (1));
var inst_26483 = (inst_26482__$1 < n);
var state_26509__$1 = (function (){var statearr_26523 = state_26509;
(statearr_26523[(12)] = inst_26481);

(statearr_26523[(11)] = inst_26482__$1);

return statearr_26523;
})();
if(cljs.core.truth_(inst_26483)){
var statearr_26524_26553 = state_26509__$1;
(statearr_26524_26553[(1)] = (8));

} else {
var statearr_26525_26554 = state_26509__$1;
(statearr_26525_26554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (14))){
var inst_26502 = (state_26509[(2)]);
var inst_26503 = cljs.core.async.close_BANG_.call(null,out);
var state_26509__$1 = (function (){var statearr_26527 = state_26509;
(statearr_26527[(13)] = inst_26502);

return statearr_26527;
})();
var statearr_26528_26555 = state_26509__$1;
(statearr_26528_26555[(2)] = inst_26503);

(statearr_26528_26555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (10))){
var inst_26493 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
var statearr_26529_26556 = state_26509__$1;
(statearr_26529_26556[(2)] = inst_26493);

(statearr_26529_26556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (8))){
var inst_26473 = (state_26509[(7)]);
var inst_26482 = (state_26509[(11)]);
var tmp26526 = inst_26473;
var inst_26473__$1 = tmp26526;
var inst_26474 = inst_26482;
var state_26509__$1 = (function (){var statearr_26530 = state_26509;
(statearr_26530[(7)] = inst_26473__$1);

(statearr_26530[(8)] = inst_26474);

return statearr_26530;
})();
var statearr_26531_26557 = state_26509__$1;
(statearr_26531_26557[(2)] = null);

(statearr_26531_26557[(1)] = (2));


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
});})(c__23883__auto___26543,out))
;
return ((function (switch__23771__auto__,c__23883__auto___26543,out){
return (function() {
var cljs$core$async$state_machine__23772__auto__ = null;
var cljs$core$async$state_machine__23772__auto____0 = (function (){
var statearr_26535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26535[(0)] = cljs$core$async$state_machine__23772__auto__);

(statearr_26535[(1)] = (1));

return statearr_26535;
});
var cljs$core$async$state_machine__23772__auto____1 = (function (state_26509){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_26509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e26536){if((e26536 instanceof Object)){
var ex__23775__auto__ = e26536;
var statearr_26537_26558 = state_26509;
(statearr_26537_26558[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26559 = state_26509;
state_26509 = G__26559;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$state_machine__23772__auto__ = function(state_26509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23772__auto____1.call(this,state_26509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23772__auto____0;
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23772__auto____1;
return cljs$core$async$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___26543,out))
})();
var state__23885__auto__ = (function (){var statearr_26538 = f__23884__auto__.call(null);
(statearr_26538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___26543);

return statearr_26538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___26543,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26560 = [];
var len__17809__auto___26634 = arguments.length;
var i__17810__auto___26635 = (0);
while(true){
if((i__17810__auto___26635 < len__17809__auto___26634)){
args26560.push((arguments[i__17810__auto___26635]));

var G__26636 = (i__17810__auto___26635 + (1));
i__17810__auto___26635 = G__26636;
continue;
} else {
}
break;
}

var G__26562 = args26560.length;
switch (G__26562) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26560.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23883__auto___26638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23883__auto___26638,out){
return (function (){
var f__23884__auto__ = (function (){var switch__23771__auto__ = ((function (c__23883__auto___26638,out){
return (function (state_26604){
var state_val_26605 = (state_26604[(1)]);
if((state_val_26605 === (7))){
var inst_26600 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
var statearr_26606_26639 = state_26604__$1;
(statearr_26606_26639[(2)] = inst_26600);

(statearr_26606_26639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (1))){
var inst_26563 = [];
var inst_26564 = inst_26563;
var inst_26565 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26604__$1 = (function (){var statearr_26607 = state_26604;
(statearr_26607[(7)] = inst_26564);

(statearr_26607[(8)] = inst_26565);

return statearr_26607;
})();
var statearr_26608_26640 = state_26604__$1;
(statearr_26608_26640[(2)] = null);

(statearr_26608_26640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (4))){
var inst_26568 = (state_26604[(9)]);
var inst_26568__$1 = (state_26604[(2)]);
var inst_26569 = (inst_26568__$1 == null);
var inst_26570 = cljs.core.not.call(null,inst_26569);
var state_26604__$1 = (function (){var statearr_26609 = state_26604;
(statearr_26609[(9)] = inst_26568__$1);

return statearr_26609;
})();
if(inst_26570){
var statearr_26610_26641 = state_26604__$1;
(statearr_26610_26641[(1)] = (5));

} else {
var statearr_26611_26642 = state_26604__$1;
(statearr_26611_26642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (15))){
var inst_26594 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
var statearr_26612_26643 = state_26604__$1;
(statearr_26612_26643[(2)] = inst_26594);

(statearr_26612_26643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (13))){
var state_26604__$1 = state_26604;
var statearr_26613_26644 = state_26604__$1;
(statearr_26613_26644[(2)] = null);

(statearr_26613_26644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (6))){
var inst_26564 = (state_26604[(7)]);
var inst_26589 = inst_26564.length;
var inst_26590 = (inst_26589 > (0));
var state_26604__$1 = state_26604;
if(cljs.core.truth_(inst_26590)){
var statearr_26614_26645 = state_26604__$1;
(statearr_26614_26645[(1)] = (12));

} else {
var statearr_26615_26646 = state_26604__$1;
(statearr_26615_26646[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (3))){
var inst_26602 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26604__$1,inst_26602);
} else {
if((state_val_26605 === (12))){
var inst_26564 = (state_26604[(7)]);
var inst_26592 = cljs.core.vec.call(null,inst_26564);
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26604__$1,(15),out,inst_26592);
} else {
if((state_val_26605 === (2))){
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26604__$1,(4),ch);
} else {
if((state_val_26605 === (11))){
var inst_26568 = (state_26604[(9)]);
var inst_26572 = (state_26604[(10)]);
var inst_26582 = (state_26604[(2)]);
var inst_26583 = [];
var inst_26584 = inst_26583.push(inst_26568);
var inst_26564 = inst_26583;
var inst_26565 = inst_26572;
var state_26604__$1 = (function (){var statearr_26616 = state_26604;
(statearr_26616[(7)] = inst_26564);

(statearr_26616[(8)] = inst_26565);

(statearr_26616[(11)] = inst_26584);

(statearr_26616[(12)] = inst_26582);

return statearr_26616;
})();
var statearr_26617_26647 = state_26604__$1;
(statearr_26617_26647[(2)] = null);

(statearr_26617_26647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (9))){
var inst_26564 = (state_26604[(7)]);
var inst_26580 = cljs.core.vec.call(null,inst_26564);
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26604__$1,(11),out,inst_26580);
} else {
if((state_val_26605 === (5))){
var inst_26565 = (state_26604[(8)]);
var inst_26568 = (state_26604[(9)]);
var inst_26572 = (state_26604[(10)]);
var inst_26572__$1 = f.call(null,inst_26568);
var inst_26573 = cljs.core._EQ_.call(null,inst_26572__$1,inst_26565);
var inst_26574 = cljs.core.keyword_identical_QMARK_.call(null,inst_26565,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26575 = (inst_26573) || (inst_26574);
var state_26604__$1 = (function (){var statearr_26618 = state_26604;
(statearr_26618[(10)] = inst_26572__$1);

return statearr_26618;
})();
if(cljs.core.truth_(inst_26575)){
var statearr_26619_26648 = state_26604__$1;
(statearr_26619_26648[(1)] = (8));

} else {
var statearr_26620_26649 = state_26604__$1;
(statearr_26620_26649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (14))){
var inst_26597 = (state_26604[(2)]);
var inst_26598 = cljs.core.async.close_BANG_.call(null,out);
var state_26604__$1 = (function (){var statearr_26622 = state_26604;
(statearr_26622[(13)] = inst_26597);

return statearr_26622;
})();
var statearr_26623_26650 = state_26604__$1;
(statearr_26623_26650[(2)] = inst_26598);

(statearr_26623_26650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (10))){
var inst_26587 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
var statearr_26624_26651 = state_26604__$1;
(statearr_26624_26651[(2)] = inst_26587);

(statearr_26624_26651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (8))){
var inst_26564 = (state_26604[(7)]);
var inst_26568 = (state_26604[(9)]);
var inst_26572 = (state_26604[(10)]);
var inst_26577 = inst_26564.push(inst_26568);
var tmp26621 = inst_26564;
var inst_26564__$1 = tmp26621;
var inst_26565 = inst_26572;
var state_26604__$1 = (function (){var statearr_26625 = state_26604;
(statearr_26625[(7)] = inst_26564__$1);

(statearr_26625[(8)] = inst_26565);

(statearr_26625[(14)] = inst_26577);

return statearr_26625;
})();
var statearr_26626_26652 = state_26604__$1;
(statearr_26626_26652[(2)] = null);

(statearr_26626_26652[(1)] = (2));


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
});})(c__23883__auto___26638,out))
;
return ((function (switch__23771__auto__,c__23883__auto___26638,out){
return (function() {
var cljs$core$async$state_machine__23772__auto__ = null;
var cljs$core$async$state_machine__23772__auto____0 = (function (){
var statearr_26630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26630[(0)] = cljs$core$async$state_machine__23772__auto__);

(statearr_26630[(1)] = (1));

return statearr_26630;
});
var cljs$core$async$state_machine__23772__auto____1 = (function (state_26604){
while(true){
var ret_value__23773__auto__ = (function (){try{while(true){
var result__23774__auto__ = switch__23771__auto__.call(null,state_26604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23774__auto__;
}
break;
}
}catch (e26631){if((e26631 instanceof Object)){
var ex__23775__auto__ = e26631;
var statearr_26632_26653 = state_26604;
(statearr_26632_26653[(5)] = ex__23775__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26654 = state_26604;
state_26604 = G__26654;
continue;
} else {
return ret_value__23773__auto__;
}
break;
}
});
cljs$core$async$state_machine__23772__auto__ = function(state_26604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23772__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23772__auto____1.call(this,state_26604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23772__auto____0;
cljs$core$async$state_machine__23772__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23772__auto____1;
return cljs$core$async$state_machine__23772__auto__;
})()
;})(switch__23771__auto__,c__23883__auto___26638,out))
})();
var state__23885__auto__ = (function (){var statearr_26633 = f__23884__auto__.call(null);
(statearr_26633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23883__auto___26638);

return statearr_26633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23885__auto__);
});})(c__23883__auto___26638,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1447836356155