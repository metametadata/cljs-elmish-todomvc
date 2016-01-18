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
var args24222 = [];
var len__17765__auto___24228 = arguments.length;
var i__17766__auto___24229 = (0);
while(true){
if((i__17766__auto___24229 < len__17765__auto___24228)){
args24222.push((arguments[i__17766__auto___24229]));

var G__24230 = (i__17766__auto___24229 + (1));
i__17766__auto___24229 = G__24230;
continue;
} else {
}
break;
}

var G__24224 = args24222.length;
switch (G__24224) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24222.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24225 = (function (f,blockable,meta24226){
this.f = f;
this.blockable = blockable;
this.meta24226 = meta24226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24227,meta24226__$1){
var self__ = this;
var _24227__$1 = this;
return (new cljs.core.async.t_cljs$core$async24225(self__.f,self__.blockable,meta24226__$1));
});

cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24227){
var self__ = this;
var _24227__$1 = this;
return self__.meta24226;
});

cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24225.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24226","meta24226",-1456231942,null)], null);
});

cljs.core.async.t_cljs$core$async24225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24225";

cljs.core.async.t_cljs$core$async24225.cljs$lang$ctorPrWriter = (function (this__17305__auto__,writer__17306__auto__,opt__17307__auto__){
return cljs.core._write.call(null,writer__17306__auto__,"cljs.core.async/t_cljs$core$async24225");
});

cljs.core.async.__GT_t_cljs$core$async24225 = (function cljs$core$async$__GT_t_cljs$core$async24225(f__$1,blockable__$1,meta24226){
return (new cljs.core.async.t_cljs$core$async24225(f__$1,blockable__$1,meta24226));
});

}

return (new cljs.core.async.t_cljs$core$async24225(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24234 = [];
var len__17765__auto___24237 = arguments.length;
var i__17766__auto___24238 = (0);
while(true){
if((i__17766__auto___24238 < len__17765__auto___24237)){
args24234.push((arguments[i__17766__auto___24238]));

var G__24239 = (i__17766__auto___24238 + (1));
i__17766__auto___24238 = G__24239;
continue;
} else {
}
break;
}

var G__24236 = args24234.length;
switch (G__24236) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24234.length)].join('')));

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
var args24241 = [];
var len__17765__auto___24244 = arguments.length;
var i__17766__auto___24245 = (0);
while(true){
if((i__17766__auto___24245 < len__17765__auto___24244)){
args24241.push((arguments[i__17766__auto___24245]));

var G__24246 = (i__17766__auto___24245 + (1));
i__17766__auto___24245 = G__24246;
continue;
} else {
}
break;
}

var G__24243 = args24241.length;
switch (G__24243) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24241.length)].join('')));

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
var args24248 = [];
var len__17765__auto___24251 = arguments.length;
var i__17766__auto___24252 = (0);
while(true){
if((i__17766__auto___24252 < len__17765__auto___24251)){
args24248.push((arguments[i__17766__auto___24252]));

var G__24253 = (i__17766__auto___24252 + (1));
i__17766__auto___24252 = G__24253;
continue;
} else {
}
break;
}

var G__24250 = args24248.length;
switch (G__24250) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24248.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24255 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24255);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24255,ret){
return (function (){
return fn1.call(null,val_24255);
});})(val_24255,ret))
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
var args24256 = [];
var len__17765__auto___24259 = arguments.length;
var i__17766__auto___24260 = (0);
while(true){
if((i__17766__auto___24260 < len__17765__auto___24259)){
args24256.push((arguments[i__17766__auto___24260]));

var G__24261 = (i__17766__auto___24260 + (1));
i__17766__auto___24260 = G__24261;
continue;
} else {
}
break;
}

var G__24258 = args24256.length;
switch (G__24258) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24256.length)].join('')));

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
var n__17610__auto___24263 = n;
var x_24264 = (0);
while(true){
if((x_24264 < n__17610__auto___24263)){
(a[x_24264] = (0));

var G__24265 = (x_24264 + (1));
x_24264 = G__24265;
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

var G__24266 = (i + (1));
i = G__24266;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24270 = (function (alt_flag,flag,meta24271){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24271 = meta24271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24272,meta24271__$1){
var self__ = this;
var _24272__$1 = this;
return (new cljs.core.async.t_cljs$core$async24270(self__.alt_flag,self__.flag,meta24271__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24272){
var self__ = this;
var _24272__$1 = this;
return self__.meta24271;
});})(flag))
;

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24270.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24271","meta24271",-969990743,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24270";

cljs.core.async.t_cljs$core$async24270.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17305__auto__,writer__17306__auto__,opt__17307__auto__){
return cljs.core._write.call(null,writer__17306__auto__,"cljs.core.async/t_cljs$core$async24270");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24270 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24270(alt_flag__$1,flag__$1,meta24271){
return (new cljs.core.async.t_cljs$core$async24270(alt_flag__$1,flag__$1,meta24271));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24270(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24276 = (function (alt_handler,flag,cb,meta24277){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24277 = meta24277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24278,meta24277__$1){
var self__ = this;
var _24278__$1 = this;
return (new cljs.core.async.t_cljs$core$async24276(self__.alt_handler,self__.flag,self__.cb,meta24277__$1));
});

cljs.core.async.t_cljs$core$async24276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24278){
var self__ = this;
var _24278__$1 = this;
return self__.meta24277;
});

cljs.core.async.t_cljs$core$async24276.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24277","meta24277",-355725222,null)], null);
});

cljs.core.async.t_cljs$core$async24276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24276";

cljs.core.async.t_cljs$core$async24276.cljs$lang$ctorPrWriter = (function (this__17305__auto__,writer__17306__auto__,opt__17307__auto__){
return cljs.core._write.call(null,writer__17306__auto__,"cljs.core.async/t_cljs$core$async24276");
});

cljs.core.async.__GT_t_cljs$core$async24276 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24276(alt_handler__$1,flag__$1,cb__$1,meta24277){
return (new cljs.core.async.t_cljs$core$async24276(alt_handler__$1,flag__$1,cb__$1,meta24277));
});

}

return (new cljs.core.async.t_cljs$core$async24276(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24279_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24279_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24280_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24280_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16707__auto__ = wport;
if(cljs.core.truth_(or__16707__auto__)){
return or__16707__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24281 = (i + (1));
i = G__24281;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16707__auto__ = ret;
if(cljs.core.truth_(or__16707__auto__)){
return or__16707__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16695__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16695__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16695__auto__;
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
var args__17772__auto__ = [];
var len__17765__auto___24287 = arguments.length;
var i__17766__auto___24288 = (0);
while(true){
if((i__17766__auto___24288 < len__17765__auto___24287)){
args__17772__auto__.push((arguments[i__17766__auto___24288]));

var G__24289 = (i__17766__auto___24288 + (1));
i__17766__auto___24288 = G__24289;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((1) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17773__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24284){
var map__24285 = p__24284;
var map__24285__$1 = ((((!((map__24285 == null)))?((((map__24285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24285):map__24285);
var opts = map__24285__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24282){
var G__24283 = cljs.core.first.call(null,seq24282);
var seq24282__$1 = cljs.core.next.call(null,seq24282);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24283,seq24282__$1);
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
var args24290 = [];
var len__17765__auto___24340 = arguments.length;
var i__17766__auto___24341 = (0);
while(true){
if((i__17766__auto___24341 < len__17765__auto___24340)){
args24290.push((arguments[i__17766__auto___24341]));

var G__24342 = (i__17766__auto___24341 + (1));
i__17766__auto___24341 = G__24342;
continue;
} else {
}
break;
}

var G__24292 = args24290.length;
switch (G__24292) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24290.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24177__auto___24344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___24344){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___24344){
return (function (state_24316){
var state_val_24317 = (state_24316[(1)]);
if((state_val_24317 === (7))){
var inst_24312 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
var statearr_24318_24345 = state_24316__$1;
(statearr_24318_24345[(2)] = inst_24312);

(statearr_24318_24345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (1))){
var state_24316__$1 = state_24316;
var statearr_24319_24346 = state_24316__$1;
(statearr_24319_24346[(2)] = null);

(statearr_24319_24346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (4))){
var inst_24295 = (state_24316[(7)]);
var inst_24295__$1 = (state_24316[(2)]);
var inst_24296 = (inst_24295__$1 == null);
var state_24316__$1 = (function (){var statearr_24320 = state_24316;
(statearr_24320[(7)] = inst_24295__$1);

return statearr_24320;
})();
if(cljs.core.truth_(inst_24296)){
var statearr_24321_24347 = state_24316__$1;
(statearr_24321_24347[(1)] = (5));

} else {
var statearr_24322_24348 = state_24316__$1;
(statearr_24322_24348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (13))){
var state_24316__$1 = state_24316;
var statearr_24323_24349 = state_24316__$1;
(statearr_24323_24349[(2)] = null);

(statearr_24323_24349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (6))){
var inst_24295 = (state_24316[(7)]);
var state_24316__$1 = state_24316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24316__$1,(11),to,inst_24295);
} else {
if((state_val_24317 === (3))){
var inst_24314 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24316__$1,inst_24314);
} else {
if((state_val_24317 === (12))){
var state_24316__$1 = state_24316;
var statearr_24324_24350 = state_24316__$1;
(statearr_24324_24350[(2)] = null);

(statearr_24324_24350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (2))){
var state_24316__$1 = state_24316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24316__$1,(4),from);
} else {
if((state_val_24317 === (11))){
var inst_24305 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
if(cljs.core.truth_(inst_24305)){
var statearr_24325_24351 = state_24316__$1;
(statearr_24325_24351[(1)] = (12));

} else {
var statearr_24326_24352 = state_24316__$1;
(statearr_24326_24352[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (9))){
var state_24316__$1 = state_24316;
var statearr_24327_24353 = state_24316__$1;
(statearr_24327_24353[(2)] = null);

(statearr_24327_24353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (5))){
var state_24316__$1 = state_24316;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24328_24354 = state_24316__$1;
(statearr_24328_24354[(1)] = (8));

} else {
var statearr_24329_24355 = state_24316__$1;
(statearr_24329_24355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (14))){
var inst_24310 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
var statearr_24330_24356 = state_24316__$1;
(statearr_24330_24356[(2)] = inst_24310);

(statearr_24330_24356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (10))){
var inst_24302 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
var statearr_24331_24357 = state_24316__$1;
(statearr_24331_24357[(2)] = inst_24302);

(statearr_24331_24357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (8))){
var inst_24299 = cljs.core.async.close_BANG_.call(null,to);
var state_24316__$1 = state_24316;
var statearr_24332_24358 = state_24316__$1;
(statearr_24332_24358[(2)] = inst_24299);

(statearr_24332_24358[(1)] = (10));


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
});})(c__24177__auto___24344))
;
return ((function (switch__24065__auto__,c__24177__auto___24344){
return (function() {
var cljs$core$async$state_machine__24066__auto__ = null;
var cljs$core$async$state_machine__24066__auto____0 = (function (){
var statearr_24336 = [null,null,null,null,null,null,null,null];
(statearr_24336[(0)] = cljs$core$async$state_machine__24066__auto__);

(statearr_24336[(1)] = (1));

return statearr_24336;
});
var cljs$core$async$state_machine__24066__auto____1 = (function (state_24316){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_24316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e24337){if((e24337 instanceof Object)){
var ex__24069__auto__ = e24337;
var statearr_24338_24359 = state_24316;
(statearr_24338_24359[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24360 = state_24316;
state_24316 = G__24360;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$state_machine__24066__auto__ = function(state_24316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24066__auto____1.call(this,state_24316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24066__auto____0;
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24066__auto____1;
return cljs$core$async$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___24344))
})();
var state__24179__auto__ = (function (){var statearr_24339 = f__24178__auto__.call(null);
(statearr_24339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___24344);

return statearr_24339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___24344))
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
return (function (p__24544){
var vec__24545 = p__24544;
var v = cljs.core.nth.call(null,vec__24545,(0),null);
var p = cljs.core.nth.call(null,vec__24545,(1),null);
var job = vec__24545;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24177__auto___24727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___24727,res,vec__24545,v,p,job,jobs,results){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___24727,res,vec__24545,v,p,job,jobs,results){
return (function (state_24550){
var state_val_24551 = (state_24550[(1)]);
if((state_val_24551 === (1))){
var state_24550__$1 = state_24550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24550__$1,(2),res,v);
} else {
if((state_val_24551 === (2))){
var inst_24547 = (state_24550[(2)]);
var inst_24548 = cljs.core.async.close_BANG_.call(null,res);
var state_24550__$1 = (function (){var statearr_24552 = state_24550;
(statearr_24552[(7)] = inst_24547);

return statearr_24552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24550__$1,inst_24548);
} else {
return null;
}
}
});})(c__24177__auto___24727,res,vec__24545,v,p,job,jobs,results))
;
return ((function (switch__24065__auto__,c__24177__auto___24727,res,vec__24545,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0 = (function (){
var statearr_24556 = [null,null,null,null,null,null,null,null];
(statearr_24556[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__);

(statearr_24556[(1)] = (1));

return statearr_24556;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1 = (function (state_24550){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_24550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e24557){if((e24557 instanceof Object)){
var ex__24069__auto__ = e24557;
var statearr_24558_24728 = state_24550;
(statearr_24558_24728[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24729 = state_24550;
state_24550 = G__24729;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__ = function(state_24550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1.call(this,state_24550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___24727,res,vec__24545,v,p,job,jobs,results))
})();
var state__24179__auto__ = (function (){var statearr_24559 = f__24178__auto__.call(null);
(statearr_24559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___24727);

return statearr_24559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___24727,res,vec__24545,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24560){
var vec__24561 = p__24560;
var v = cljs.core.nth.call(null,vec__24561,(0),null);
var p = cljs.core.nth.call(null,vec__24561,(1),null);
var job = vec__24561;
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
var n__17610__auto___24730 = n;
var __24731 = (0);
while(true){
if((__24731 < n__17610__auto___24730)){
var G__24562_24732 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24562_24732) {
case "compute":
var c__24177__auto___24734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24731,c__24177__auto___24734,G__24562_24732,n__17610__auto___24730,jobs,results,process,async){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (__24731,c__24177__auto___24734,G__24562_24732,n__17610__auto___24730,jobs,results,process,async){
return (function (state_24575){
var state_val_24576 = (state_24575[(1)]);
if((state_val_24576 === (1))){
var state_24575__$1 = state_24575;
var statearr_24577_24735 = state_24575__$1;
(statearr_24577_24735[(2)] = null);

(statearr_24577_24735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24576 === (2))){
var state_24575__$1 = state_24575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24575__$1,(4),jobs);
} else {
if((state_val_24576 === (3))){
var inst_24573 = (state_24575[(2)]);
var state_24575__$1 = state_24575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24575__$1,inst_24573);
} else {
if((state_val_24576 === (4))){
var inst_24565 = (state_24575[(2)]);
var inst_24566 = process.call(null,inst_24565);
var state_24575__$1 = state_24575;
if(cljs.core.truth_(inst_24566)){
var statearr_24578_24736 = state_24575__$1;
(statearr_24578_24736[(1)] = (5));

} else {
var statearr_24579_24737 = state_24575__$1;
(statearr_24579_24737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24576 === (5))){
var state_24575__$1 = state_24575;
var statearr_24580_24738 = state_24575__$1;
(statearr_24580_24738[(2)] = null);

(statearr_24580_24738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24576 === (6))){
var state_24575__$1 = state_24575;
var statearr_24581_24739 = state_24575__$1;
(statearr_24581_24739[(2)] = null);

(statearr_24581_24739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24576 === (7))){
var inst_24571 = (state_24575[(2)]);
var state_24575__$1 = state_24575;
var statearr_24582_24740 = state_24575__$1;
(statearr_24582_24740[(2)] = inst_24571);

(statearr_24582_24740[(1)] = (3));


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
});})(__24731,c__24177__auto___24734,G__24562_24732,n__17610__auto___24730,jobs,results,process,async))
;
return ((function (__24731,switch__24065__auto__,c__24177__auto___24734,G__24562_24732,n__17610__auto___24730,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0 = (function (){
var statearr_24586 = [null,null,null,null,null,null,null];
(statearr_24586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__);

(statearr_24586[(1)] = (1));

return statearr_24586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1 = (function (state_24575){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_24575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e24587){if((e24587 instanceof Object)){
var ex__24069__auto__ = e24587;
var statearr_24588_24741 = state_24575;
(statearr_24588_24741[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24742 = state_24575;
state_24575 = G__24742;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__ = function(state_24575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1.call(this,state_24575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__;
})()
;})(__24731,switch__24065__auto__,c__24177__auto___24734,G__24562_24732,n__17610__auto___24730,jobs,results,process,async))
})();
var state__24179__auto__ = (function (){var statearr_24589 = f__24178__auto__.call(null);
(statearr_24589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___24734);

return statearr_24589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(__24731,c__24177__auto___24734,G__24562_24732,n__17610__auto___24730,jobs,results,process,async))
);


break;
case "async":
var c__24177__auto___24743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24731,c__24177__auto___24743,G__24562_24732,n__17610__auto___24730,jobs,results,process,async){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (__24731,c__24177__auto___24743,G__24562_24732,n__17610__auto___24730,jobs,results,process,async){
return (function (state_24602){
var state_val_24603 = (state_24602[(1)]);
if((state_val_24603 === (1))){
var state_24602__$1 = state_24602;
var statearr_24604_24744 = state_24602__$1;
(statearr_24604_24744[(2)] = null);

(statearr_24604_24744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24603 === (2))){
var state_24602__$1 = state_24602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24602__$1,(4),jobs);
} else {
if((state_val_24603 === (3))){
var inst_24600 = (state_24602[(2)]);
var state_24602__$1 = state_24602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24602__$1,inst_24600);
} else {
if((state_val_24603 === (4))){
var inst_24592 = (state_24602[(2)]);
var inst_24593 = async.call(null,inst_24592);
var state_24602__$1 = state_24602;
if(cljs.core.truth_(inst_24593)){
var statearr_24605_24745 = state_24602__$1;
(statearr_24605_24745[(1)] = (5));

} else {
var statearr_24606_24746 = state_24602__$1;
(statearr_24606_24746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24603 === (5))){
var state_24602__$1 = state_24602;
var statearr_24607_24747 = state_24602__$1;
(statearr_24607_24747[(2)] = null);

(statearr_24607_24747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24603 === (6))){
var state_24602__$1 = state_24602;
var statearr_24608_24748 = state_24602__$1;
(statearr_24608_24748[(2)] = null);

(statearr_24608_24748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24603 === (7))){
var inst_24598 = (state_24602[(2)]);
var state_24602__$1 = state_24602;
var statearr_24609_24749 = state_24602__$1;
(statearr_24609_24749[(2)] = inst_24598);

(statearr_24609_24749[(1)] = (3));


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
});})(__24731,c__24177__auto___24743,G__24562_24732,n__17610__auto___24730,jobs,results,process,async))
;
return ((function (__24731,switch__24065__auto__,c__24177__auto___24743,G__24562_24732,n__17610__auto___24730,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0 = (function (){
var statearr_24613 = [null,null,null,null,null,null,null];
(statearr_24613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__);

(statearr_24613[(1)] = (1));

return statearr_24613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1 = (function (state_24602){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_24602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e24614){if((e24614 instanceof Object)){
var ex__24069__auto__ = e24614;
var statearr_24615_24750 = state_24602;
(statearr_24615_24750[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24751 = state_24602;
state_24602 = G__24751;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__ = function(state_24602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1.call(this,state_24602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__;
})()
;})(__24731,switch__24065__auto__,c__24177__auto___24743,G__24562_24732,n__17610__auto___24730,jobs,results,process,async))
})();
var state__24179__auto__ = (function (){var statearr_24616 = f__24178__auto__.call(null);
(statearr_24616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___24743);

return statearr_24616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(__24731,c__24177__auto___24743,G__24562_24732,n__17610__auto___24730,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24752 = (__24731 + (1));
__24731 = G__24752;
continue;
} else {
}
break;
}

var c__24177__auto___24753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___24753,jobs,results,process,async){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___24753,jobs,results,process,async){
return (function (state_24638){
var state_val_24639 = (state_24638[(1)]);
if((state_val_24639 === (1))){
var state_24638__$1 = state_24638;
var statearr_24640_24754 = state_24638__$1;
(statearr_24640_24754[(2)] = null);

(statearr_24640_24754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (2))){
var state_24638__$1 = state_24638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24638__$1,(4),from);
} else {
if((state_val_24639 === (3))){
var inst_24636 = (state_24638[(2)]);
var state_24638__$1 = state_24638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24638__$1,inst_24636);
} else {
if((state_val_24639 === (4))){
var inst_24619 = (state_24638[(7)]);
var inst_24619__$1 = (state_24638[(2)]);
var inst_24620 = (inst_24619__$1 == null);
var state_24638__$1 = (function (){var statearr_24641 = state_24638;
(statearr_24641[(7)] = inst_24619__$1);

return statearr_24641;
})();
if(cljs.core.truth_(inst_24620)){
var statearr_24642_24755 = state_24638__$1;
(statearr_24642_24755[(1)] = (5));

} else {
var statearr_24643_24756 = state_24638__$1;
(statearr_24643_24756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (5))){
var inst_24622 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24638__$1 = state_24638;
var statearr_24644_24757 = state_24638__$1;
(statearr_24644_24757[(2)] = inst_24622);

(statearr_24644_24757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (6))){
var inst_24619 = (state_24638[(7)]);
var inst_24624 = (state_24638[(8)]);
var inst_24624__$1 = cljs.core.async.chan.call(null,(1));
var inst_24625 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24626 = [inst_24619,inst_24624__$1];
var inst_24627 = (new cljs.core.PersistentVector(null,2,(5),inst_24625,inst_24626,null));
var state_24638__$1 = (function (){var statearr_24645 = state_24638;
(statearr_24645[(8)] = inst_24624__$1);

return statearr_24645;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24638__$1,(8),jobs,inst_24627);
} else {
if((state_val_24639 === (7))){
var inst_24634 = (state_24638[(2)]);
var state_24638__$1 = state_24638;
var statearr_24646_24758 = state_24638__$1;
(statearr_24646_24758[(2)] = inst_24634);

(statearr_24646_24758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (8))){
var inst_24624 = (state_24638[(8)]);
var inst_24629 = (state_24638[(2)]);
var state_24638__$1 = (function (){var statearr_24647 = state_24638;
(statearr_24647[(9)] = inst_24629);

return statearr_24647;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24638__$1,(9),results,inst_24624);
} else {
if((state_val_24639 === (9))){
var inst_24631 = (state_24638[(2)]);
var state_24638__$1 = (function (){var statearr_24648 = state_24638;
(statearr_24648[(10)] = inst_24631);

return statearr_24648;
})();
var statearr_24649_24759 = state_24638__$1;
(statearr_24649_24759[(2)] = null);

(statearr_24649_24759[(1)] = (2));


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
});})(c__24177__auto___24753,jobs,results,process,async))
;
return ((function (switch__24065__auto__,c__24177__auto___24753,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0 = (function (){
var statearr_24653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__);

(statearr_24653[(1)] = (1));

return statearr_24653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1 = (function (state_24638){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_24638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e24654){if((e24654 instanceof Object)){
var ex__24069__auto__ = e24654;
var statearr_24655_24760 = state_24638;
(statearr_24655_24760[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24761 = state_24638;
state_24638 = G__24761;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__ = function(state_24638){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1.call(this,state_24638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___24753,jobs,results,process,async))
})();
var state__24179__auto__ = (function (){var statearr_24656 = f__24178__auto__.call(null);
(statearr_24656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___24753);

return statearr_24656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___24753,jobs,results,process,async))
);


var c__24177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto__,jobs,results,process,async){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto__,jobs,results,process,async){
return (function (state_24694){
var state_val_24695 = (state_24694[(1)]);
if((state_val_24695 === (7))){
var inst_24690 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
var statearr_24696_24762 = state_24694__$1;
(statearr_24696_24762[(2)] = inst_24690);

(statearr_24696_24762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (20))){
var state_24694__$1 = state_24694;
var statearr_24697_24763 = state_24694__$1;
(statearr_24697_24763[(2)] = null);

(statearr_24697_24763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (1))){
var state_24694__$1 = state_24694;
var statearr_24698_24764 = state_24694__$1;
(statearr_24698_24764[(2)] = null);

(statearr_24698_24764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (4))){
var inst_24659 = (state_24694[(7)]);
var inst_24659__$1 = (state_24694[(2)]);
var inst_24660 = (inst_24659__$1 == null);
var state_24694__$1 = (function (){var statearr_24699 = state_24694;
(statearr_24699[(7)] = inst_24659__$1);

return statearr_24699;
})();
if(cljs.core.truth_(inst_24660)){
var statearr_24700_24765 = state_24694__$1;
(statearr_24700_24765[(1)] = (5));

} else {
var statearr_24701_24766 = state_24694__$1;
(statearr_24701_24766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (15))){
var inst_24672 = (state_24694[(8)]);
var state_24694__$1 = state_24694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24694__$1,(18),to,inst_24672);
} else {
if((state_val_24695 === (21))){
var inst_24685 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
var statearr_24702_24767 = state_24694__$1;
(statearr_24702_24767[(2)] = inst_24685);

(statearr_24702_24767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (13))){
var inst_24687 = (state_24694[(2)]);
var state_24694__$1 = (function (){var statearr_24703 = state_24694;
(statearr_24703[(9)] = inst_24687);

return statearr_24703;
})();
var statearr_24704_24768 = state_24694__$1;
(statearr_24704_24768[(2)] = null);

(statearr_24704_24768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (6))){
var inst_24659 = (state_24694[(7)]);
var state_24694__$1 = state_24694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24694__$1,(11),inst_24659);
} else {
if((state_val_24695 === (17))){
var inst_24680 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
if(cljs.core.truth_(inst_24680)){
var statearr_24705_24769 = state_24694__$1;
(statearr_24705_24769[(1)] = (19));

} else {
var statearr_24706_24770 = state_24694__$1;
(statearr_24706_24770[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (3))){
var inst_24692 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24694__$1,inst_24692);
} else {
if((state_val_24695 === (12))){
var inst_24669 = (state_24694[(10)]);
var state_24694__$1 = state_24694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24694__$1,(14),inst_24669);
} else {
if((state_val_24695 === (2))){
var state_24694__$1 = state_24694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24694__$1,(4),results);
} else {
if((state_val_24695 === (19))){
var state_24694__$1 = state_24694;
var statearr_24707_24771 = state_24694__$1;
(statearr_24707_24771[(2)] = null);

(statearr_24707_24771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (11))){
var inst_24669 = (state_24694[(2)]);
var state_24694__$1 = (function (){var statearr_24708 = state_24694;
(statearr_24708[(10)] = inst_24669);

return statearr_24708;
})();
var statearr_24709_24772 = state_24694__$1;
(statearr_24709_24772[(2)] = null);

(statearr_24709_24772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (9))){
var state_24694__$1 = state_24694;
var statearr_24710_24773 = state_24694__$1;
(statearr_24710_24773[(2)] = null);

(statearr_24710_24773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (5))){
var state_24694__$1 = state_24694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24711_24774 = state_24694__$1;
(statearr_24711_24774[(1)] = (8));

} else {
var statearr_24712_24775 = state_24694__$1;
(statearr_24712_24775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (14))){
var inst_24672 = (state_24694[(8)]);
var inst_24674 = (state_24694[(11)]);
var inst_24672__$1 = (state_24694[(2)]);
var inst_24673 = (inst_24672__$1 == null);
var inst_24674__$1 = cljs.core.not.call(null,inst_24673);
var state_24694__$1 = (function (){var statearr_24713 = state_24694;
(statearr_24713[(8)] = inst_24672__$1);

(statearr_24713[(11)] = inst_24674__$1);

return statearr_24713;
})();
if(inst_24674__$1){
var statearr_24714_24776 = state_24694__$1;
(statearr_24714_24776[(1)] = (15));

} else {
var statearr_24715_24777 = state_24694__$1;
(statearr_24715_24777[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (16))){
var inst_24674 = (state_24694[(11)]);
var state_24694__$1 = state_24694;
var statearr_24716_24778 = state_24694__$1;
(statearr_24716_24778[(2)] = inst_24674);

(statearr_24716_24778[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (10))){
var inst_24666 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
var statearr_24717_24779 = state_24694__$1;
(statearr_24717_24779[(2)] = inst_24666);

(statearr_24717_24779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (18))){
var inst_24677 = (state_24694[(2)]);
var state_24694__$1 = state_24694;
var statearr_24718_24780 = state_24694__$1;
(statearr_24718_24780[(2)] = inst_24677);

(statearr_24718_24780[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24695 === (8))){
var inst_24663 = cljs.core.async.close_BANG_.call(null,to);
var state_24694__$1 = state_24694;
var statearr_24719_24781 = state_24694__$1;
(statearr_24719_24781[(2)] = inst_24663);

(statearr_24719_24781[(1)] = (10));


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
});})(c__24177__auto__,jobs,results,process,async))
;
return ((function (switch__24065__auto__,c__24177__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0 = (function (){
var statearr_24723 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__);

(statearr_24723[(1)] = (1));

return statearr_24723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1 = (function (state_24694){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_24694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e24724){if((e24724 instanceof Object)){
var ex__24069__auto__ = e24724;
var statearr_24725_24782 = state_24694;
(statearr_24725_24782[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24783 = state_24694;
state_24694 = G__24783;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__ = function(state_24694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1.call(this,state_24694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24066__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto__,jobs,results,process,async))
})();
var state__24179__auto__ = (function (){var statearr_24726 = f__24178__auto__.call(null);
(statearr_24726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto__);

return statearr_24726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto__,jobs,results,process,async))
);

return c__24177__auto__;
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
var args24784 = [];
var len__17765__auto___24787 = arguments.length;
var i__17766__auto___24788 = (0);
while(true){
if((i__17766__auto___24788 < len__17765__auto___24787)){
args24784.push((arguments[i__17766__auto___24788]));

var G__24789 = (i__17766__auto___24788 + (1));
i__17766__auto___24788 = G__24789;
continue;
} else {
}
break;
}

var G__24786 = args24784.length;
switch (G__24786) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24784.length)].join('')));

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
var args24791 = [];
var len__17765__auto___24794 = arguments.length;
var i__17766__auto___24795 = (0);
while(true){
if((i__17766__auto___24795 < len__17765__auto___24794)){
args24791.push((arguments[i__17766__auto___24795]));

var G__24796 = (i__17766__auto___24795 + (1));
i__17766__auto___24795 = G__24796;
continue;
} else {
}
break;
}

var G__24793 = args24791.length;
switch (G__24793) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24791.length)].join('')));

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
var args24798 = [];
var len__17765__auto___24851 = arguments.length;
var i__17766__auto___24852 = (0);
while(true){
if((i__17766__auto___24852 < len__17765__auto___24851)){
args24798.push((arguments[i__17766__auto___24852]));

var G__24853 = (i__17766__auto___24852 + (1));
i__17766__auto___24852 = G__24853;
continue;
} else {
}
break;
}

var G__24800 = args24798.length;
switch (G__24800) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24798.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24177__auto___24855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___24855,tc,fc){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___24855,tc,fc){
return (function (state_24826){
var state_val_24827 = (state_24826[(1)]);
if((state_val_24827 === (7))){
var inst_24822 = (state_24826[(2)]);
var state_24826__$1 = state_24826;
var statearr_24828_24856 = state_24826__$1;
(statearr_24828_24856[(2)] = inst_24822);

(statearr_24828_24856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (1))){
var state_24826__$1 = state_24826;
var statearr_24829_24857 = state_24826__$1;
(statearr_24829_24857[(2)] = null);

(statearr_24829_24857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (4))){
var inst_24803 = (state_24826[(7)]);
var inst_24803__$1 = (state_24826[(2)]);
var inst_24804 = (inst_24803__$1 == null);
var state_24826__$1 = (function (){var statearr_24830 = state_24826;
(statearr_24830[(7)] = inst_24803__$1);

return statearr_24830;
})();
if(cljs.core.truth_(inst_24804)){
var statearr_24831_24858 = state_24826__$1;
(statearr_24831_24858[(1)] = (5));

} else {
var statearr_24832_24859 = state_24826__$1;
(statearr_24832_24859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (13))){
var state_24826__$1 = state_24826;
var statearr_24833_24860 = state_24826__$1;
(statearr_24833_24860[(2)] = null);

(statearr_24833_24860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (6))){
var inst_24803 = (state_24826[(7)]);
var inst_24809 = p.call(null,inst_24803);
var state_24826__$1 = state_24826;
if(cljs.core.truth_(inst_24809)){
var statearr_24834_24861 = state_24826__$1;
(statearr_24834_24861[(1)] = (9));

} else {
var statearr_24835_24862 = state_24826__$1;
(statearr_24835_24862[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (3))){
var inst_24824 = (state_24826[(2)]);
var state_24826__$1 = state_24826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24826__$1,inst_24824);
} else {
if((state_val_24827 === (12))){
var state_24826__$1 = state_24826;
var statearr_24836_24863 = state_24826__$1;
(statearr_24836_24863[(2)] = null);

(statearr_24836_24863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (2))){
var state_24826__$1 = state_24826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24826__$1,(4),ch);
} else {
if((state_val_24827 === (11))){
var inst_24803 = (state_24826[(7)]);
var inst_24813 = (state_24826[(2)]);
var state_24826__$1 = state_24826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24826__$1,(8),inst_24813,inst_24803);
} else {
if((state_val_24827 === (9))){
var state_24826__$1 = state_24826;
var statearr_24837_24864 = state_24826__$1;
(statearr_24837_24864[(2)] = tc);

(statearr_24837_24864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (5))){
var inst_24806 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24807 = cljs.core.async.close_BANG_.call(null,fc);
var state_24826__$1 = (function (){var statearr_24838 = state_24826;
(statearr_24838[(8)] = inst_24806);

return statearr_24838;
})();
var statearr_24839_24865 = state_24826__$1;
(statearr_24839_24865[(2)] = inst_24807);

(statearr_24839_24865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (14))){
var inst_24820 = (state_24826[(2)]);
var state_24826__$1 = state_24826;
var statearr_24840_24866 = state_24826__$1;
(statearr_24840_24866[(2)] = inst_24820);

(statearr_24840_24866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (10))){
var state_24826__$1 = state_24826;
var statearr_24841_24867 = state_24826__$1;
(statearr_24841_24867[(2)] = fc);

(statearr_24841_24867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24827 === (8))){
var inst_24815 = (state_24826[(2)]);
var state_24826__$1 = state_24826;
if(cljs.core.truth_(inst_24815)){
var statearr_24842_24868 = state_24826__$1;
(statearr_24842_24868[(1)] = (12));

} else {
var statearr_24843_24869 = state_24826__$1;
(statearr_24843_24869[(1)] = (13));

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
});})(c__24177__auto___24855,tc,fc))
;
return ((function (switch__24065__auto__,c__24177__auto___24855,tc,fc){
return (function() {
var cljs$core$async$state_machine__24066__auto__ = null;
var cljs$core$async$state_machine__24066__auto____0 = (function (){
var statearr_24847 = [null,null,null,null,null,null,null,null,null];
(statearr_24847[(0)] = cljs$core$async$state_machine__24066__auto__);

(statearr_24847[(1)] = (1));

return statearr_24847;
});
var cljs$core$async$state_machine__24066__auto____1 = (function (state_24826){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_24826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e24848){if((e24848 instanceof Object)){
var ex__24069__auto__ = e24848;
var statearr_24849_24870 = state_24826;
(statearr_24849_24870[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24871 = state_24826;
state_24826 = G__24871;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$state_machine__24066__auto__ = function(state_24826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24066__auto____1.call(this,state_24826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24066__auto____0;
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24066__auto____1;
return cljs$core$async$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___24855,tc,fc))
})();
var state__24179__auto__ = (function (){var statearr_24850 = f__24178__auto__.call(null);
(statearr_24850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___24855);

return statearr_24850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___24855,tc,fc))
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
var c__24177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto__){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto__){
return (function (state_24935){
var state_val_24936 = (state_24935[(1)]);
if((state_val_24936 === (7))){
var inst_24931 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
var statearr_24937_24958 = state_24935__$1;
(statearr_24937_24958[(2)] = inst_24931);

(statearr_24937_24958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (1))){
var inst_24915 = init;
var state_24935__$1 = (function (){var statearr_24938 = state_24935;
(statearr_24938[(7)] = inst_24915);

return statearr_24938;
})();
var statearr_24939_24959 = state_24935__$1;
(statearr_24939_24959[(2)] = null);

(statearr_24939_24959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (4))){
var inst_24918 = (state_24935[(8)]);
var inst_24918__$1 = (state_24935[(2)]);
var inst_24919 = (inst_24918__$1 == null);
var state_24935__$1 = (function (){var statearr_24940 = state_24935;
(statearr_24940[(8)] = inst_24918__$1);

return statearr_24940;
})();
if(cljs.core.truth_(inst_24919)){
var statearr_24941_24960 = state_24935__$1;
(statearr_24941_24960[(1)] = (5));

} else {
var statearr_24942_24961 = state_24935__$1;
(statearr_24942_24961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (6))){
var inst_24918 = (state_24935[(8)]);
var inst_24922 = (state_24935[(9)]);
var inst_24915 = (state_24935[(7)]);
var inst_24922__$1 = f.call(null,inst_24915,inst_24918);
var inst_24923 = cljs.core.reduced_QMARK_.call(null,inst_24922__$1);
var state_24935__$1 = (function (){var statearr_24943 = state_24935;
(statearr_24943[(9)] = inst_24922__$1);

return statearr_24943;
})();
if(inst_24923){
var statearr_24944_24962 = state_24935__$1;
(statearr_24944_24962[(1)] = (8));

} else {
var statearr_24945_24963 = state_24935__$1;
(statearr_24945_24963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (3))){
var inst_24933 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24935__$1,inst_24933);
} else {
if((state_val_24936 === (2))){
var state_24935__$1 = state_24935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24935__$1,(4),ch);
} else {
if((state_val_24936 === (9))){
var inst_24922 = (state_24935[(9)]);
var inst_24915 = inst_24922;
var state_24935__$1 = (function (){var statearr_24946 = state_24935;
(statearr_24946[(7)] = inst_24915);

return statearr_24946;
})();
var statearr_24947_24964 = state_24935__$1;
(statearr_24947_24964[(2)] = null);

(statearr_24947_24964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (5))){
var inst_24915 = (state_24935[(7)]);
var state_24935__$1 = state_24935;
var statearr_24948_24965 = state_24935__$1;
(statearr_24948_24965[(2)] = inst_24915);

(statearr_24948_24965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (10))){
var inst_24929 = (state_24935[(2)]);
var state_24935__$1 = state_24935;
var statearr_24949_24966 = state_24935__$1;
(statearr_24949_24966[(2)] = inst_24929);

(statearr_24949_24966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24936 === (8))){
var inst_24922 = (state_24935[(9)]);
var inst_24925 = cljs.core.deref.call(null,inst_24922);
var state_24935__$1 = state_24935;
var statearr_24950_24967 = state_24935__$1;
(statearr_24950_24967[(2)] = inst_24925);

(statearr_24950_24967[(1)] = (10));


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
});})(c__24177__auto__))
;
return ((function (switch__24065__auto__,c__24177__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24066__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24066__auto____0 = (function (){
var statearr_24954 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24954[(0)] = cljs$core$async$reduce_$_state_machine__24066__auto__);

(statearr_24954[(1)] = (1));

return statearr_24954;
});
var cljs$core$async$reduce_$_state_machine__24066__auto____1 = (function (state_24935){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_24935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e24955){if((e24955 instanceof Object)){
var ex__24069__auto__ = e24955;
var statearr_24956_24968 = state_24935;
(statearr_24956_24968[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24969 = state_24935;
state_24935 = G__24969;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24066__auto__ = function(state_24935){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24066__auto____1.call(this,state_24935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24066__auto____0;
cljs$core$async$reduce_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24066__auto____1;
return cljs$core$async$reduce_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto__))
})();
var state__24179__auto__ = (function (){var statearr_24957 = f__24178__auto__.call(null);
(statearr_24957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto__);

return statearr_24957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto__))
);

return c__24177__auto__;
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
var args24970 = [];
var len__17765__auto___25022 = arguments.length;
var i__17766__auto___25023 = (0);
while(true){
if((i__17766__auto___25023 < len__17765__auto___25022)){
args24970.push((arguments[i__17766__auto___25023]));

var G__25024 = (i__17766__auto___25023 + (1));
i__17766__auto___25023 = G__25024;
continue;
} else {
}
break;
}

var G__24972 = args24970.length;
switch (G__24972) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24970.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto__){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto__){
return (function (state_24997){
var state_val_24998 = (state_24997[(1)]);
if((state_val_24998 === (7))){
var inst_24979 = (state_24997[(2)]);
var state_24997__$1 = state_24997;
var statearr_24999_25026 = state_24997__$1;
(statearr_24999_25026[(2)] = inst_24979);

(statearr_24999_25026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24998 === (1))){
var inst_24973 = cljs.core.seq.call(null,coll);
var inst_24974 = inst_24973;
var state_24997__$1 = (function (){var statearr_25000 = state_24997;
(statearr_25000[(7)] = inst_24974);

return statearr_25000;
})();
var statearr_25001_25027 = state_24997__$1;
(statearr_25001_25027[(2)] = null);

(statearr_25001_25027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24998 === (4))){
var inst_24974 = (state_24997[(7)]);
var inst_24977 = cljs.core.first.call(null,inst_24974);
var state_24997__$1 = state_24997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24997__$1,(7),ch,inst_24977);
} else {
if((state_val_24998 === (13))){
var inst_24991 = (state_24997[(2)]);
var state_24997__$1 = state_24997;
var statearr_25002_25028 = state_24997__$1;
(statearr_25002_25028[(2)] = inst_24991);

(statearr_25002_25028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24998 === (6))){
var inst_24982 = (state_24997[(2)]);
var state_24997__$1 = state_24997;
if(cljs.core.truth_(inst_24982)){
var statearr_25003_25029 = state_24997__$1;
(statearr_25003_25029[(1)] = (8));

} else {
var statearr_25004_25030 = state_24997__$1;
(statearr_25004_25030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24998 === (3))){
var inst_24995 = (state_24997[(2)]);
var state_24997__$1 = state_24997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24997__$1,inst_24995);
} else {
if((state_val_24998 === (12))){
var state_24997__$1 = state_24997;
var statearr_25005_25031 = state_24997__$1;
(statearr_25005_25031[(2)] = null);

(statearr_25005_25031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24998 === (2))){
var inst_24974 = (state_24997[(7)]);
var state_24997__$1 = state_24997;
if(cljs.core.truth_(inst_24974)){
var statearr_25006_25032 = state_24997__$1;
(statearr_25006_25032[(1)] = (4));

} else {
var statearr_25007_25033 = state_24997__$1;
(statearr_25007_25033[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24998 === (11))){
var inst_24988 = cljs.core.async.close_BANG_.call(null,ch);
var state_24997__$1 = state_24997;
var statearr_25008_25034 = state_24997__$1;
(statearr_25008_25034[(2)] = inst_24988);

(statearr_25008_25034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24998 === (9))){
var state_24997__$1 = state_24997;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25009_25035 = state_24997__$1;
(statearr_25009_25035[(1)] = (11));

} else {
var statearr_25010_25036 = state_24997__$1;
(statearr_25010_25036[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24998 === (5))){
var inst_24974 = (state_24997[(7)]);
var state_24997__$1 = state_24997;
var statearr_25011_25037 = state_24997__$1;
(statearr_25011_25037[(2)] = inst_24974);

(statearr_25011_25037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24998 === (10))){
var inst_24993 = (state_24997[(2)]);
var state_24997__$1 = state_24997;
var statearr_25012_25038 = state_24997__$1;
(statearr_25012_25038[(2)] = inst_24993);

(statearr_25012_25038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24998 === (8))){
var inst_24974 = (state_24997[(7)]);
var inst_24984 = cljs.core.next.call(null,inst_24974);
var inst_24974__$1 = inst_24984;
var state_24997__$1 = (function (){var statearr_25013 = state_24997;
(statearr_25013[(7)] = inst_24974__$1);

return statearr_25013;
})();
var statearr_25014_25039 = state_24997__$1;
(statearr_25014_25039[(2)] = null);

(statearr_25014_25039[(1)] = (2));


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
});})(c__24177__auto__))
;
return ((function (switch__24065__auto__,c__24177__auto__){
return (function() {
var cljs$core$async$state_machine__24066__auto__ = null;
var cljs$core$async$state_machine__24066__auto____0 = (function (){
var statearr_25018 = [null,null,null,null,null,null,null,null];
(statearr_25018[(0)] = cljs$core$async$state_machine__24066__auto__);

(statearr_25018[(1)] = (1));

return statearr_25018;
});
var cljs$core$async$state_machine__24066__auto____1 = (function (state_24997){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_24997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e25019){if((e25019 instanceof Object)){
var ex__24069__auto__ = e25019;
var statearr_25020_25040 = state_24997;
(statearr_25020_25040[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25041 = state_24997;
state_24997 = G__25041;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$state_machine__24066__auto__ = function(state_24997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24066__auto____1.call(this,state_24997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24066__auto____0;
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24066__auto____1;
return cljs$core$async$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto__))
})();
var state__24179__auto__ = (function (){var statearr_25021 = f__24178__auto__.call(null);
(statearr_25021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto__);

return statearr_25021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto__))
);

return c__24177__auto__;
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
var x__17362__auto__ = (((_ == null))?null:_);
var m__17363__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,_);
} else {
var m__17363__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,_);
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
var x__17362__auto__ = (((m == null))?null:m);
var m__17363__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17363__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17362__auto__ = (((m == null))?null:m);
var m__17363__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,m,ch);
} else {
var m__17363__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,m,ch);
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
var x__17362__auto__ = (((m == null))?null:m);
var m__17363__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,m);
} else {
var m__17363__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async25263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25263 = (function (mult,ch,cs,meta25264){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25264 = meta25264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25265,meta25264__$1){
var self__ = this;
var _25265__$1 = this;
return (new cljs.core.async.t_cljs$core$async25263(self__.mult,self__.ch,self__.cs,meta25264__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25265){
var self__ = this;
var _25265__$1 = this;
return self__.meta25264;
});})(cs))
;

cljs.core.async.t_cljs$core$async25263.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25263.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25263.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25263.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25263.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25263.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25263.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25264","meta25264",-1350536794,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25263";

cljs.core.async.t_cljs$core$async25263.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17305__auto__,writer__17306__auto__,opt__17307__auto__){
return cljs.core._write.call(null,writer__17306__auto__,"cljs.core.async/t_cljs$core$async25263");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25263 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25263(mult__$1,ch__$1,cs__$1,meta25264){
return (new cljs.core.async.t_cljs$core$async25263(mult__$1,ch__$1,cs__$1,meta25264));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25263(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24177__auto___25484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___25484,cs,m,dchan,dctr,done){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___25484,cs,m,dchan,dctr,done){
return (function (state_25396){
var state_val_25397 = (state_25396[(1)]);
if((state_val_25397 === (7))){
var inst_25392 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25398_25485 = state_25396__$1;
(statearr_25398_25485[(2)] = inst_25392);

(statearr_25398_25485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (20))){
var inst_25297 = (state_25396[(7)]);
var inst_25307 = cljs.core.first.call(null,inst_25297);
var inst_25308 = cljs.core.nth.call(null,inst_25307,(0),null);
var inst_25309 = cljs.core.nth.call(null,inst_25307,(1),null);
var state_25396__$1 = (function (){var statearr_25399 = state_25396;
(statearr_25399[(8)] = inst_25308);

return statearr_25399;
})();
if(cljs.core.truth_(inst_25309)){
var statearr_25400_25486 = state_25396__$1;
(statearr_25400_25486[(1)] = (22));

} else {
var statearr_25401_25487 = state_25396__$1;
(statearr_25401_25487[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (27))){
var inst_25339 = (state_25396[(9)]);
var inst_25337 = (state_25396[(10)]);
var inst_25268 = (state_25396[(11)]);
var inst_25344 = (state_25396[(12)]);
var inst_25344__$1 = cljs.core._nth.call(null,inst_25337,inst_25339);
var inst_25345 = cljs.core.async.put_BANG_.call(null,inst_25344__$1,inst_25268,done);
var state_25396__$1 = (function (){var statearr_25402 = state_25396;
(statearr_25402[(12)] = inst_25344__$1);

return statearr_25402;
})();
if(cljs.core.truth_(inst_25345)){
var statearr_25403_25488 = state_25396__$1;
(statearr_25403_25488[(1)] = (30));

} else {
var statearr_25404_25489 = state_25396__$1;
(statearr_25404_25489[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (1))){
var state_25396__$1 = state_25396;
var statearr_25405_25490 = state_25396__$1;
(statearr_25405_25490[(2)] = null);

(statearr_25405_25490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (24))){
var inst_25297 = (state_25396[(7)]);
var inst_25314 = (state_25396[(2)]);
var inst_25315 = cljs.core.next.call(null,inst_25297);
var inst_25277 = inst_25315;
var inst_25278 = null;
var inst_25279 = (0);
var inst_25280 = (0);
var state_25396__$1 = (function (){var statearr_25406 = state_25396;
(statearr_25406[(13)] = inst_25279);

(statearr_25406[(14)] = inst_25280);

(statearr_25406[(15)] = inst_25278);

(statearr_25406[(16)] = inst_25314);

(statearr_25406[(17)] = inst_25277);

return statearr_25406;
})();
var statearr_25407_25491 = state_25396__$1;
(statearr_25407_25491[(2)] = null);

(statearr_25407_25491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (39))){
var state_25396__$1 = state_25396;
var statearr_25411_25492 = state_25396__$1;
(statearr_25411_25492[(2)] = null);

(statearr_25411_25492[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (4))){
var inst_25268 = (state_25396[(11)]);
var inst_25268__$1 = (state_25396[(2)]);
var inst_25269 = (inst_25268__$1 == null);
var state_25396__$1 = (function (){var statearr_25412 = state_25396;
(statearr_25412[(11)] = inst_25268__$1);

return statearr_25412;
})();
if(cljs.core.truth_(inst_25269)){
var statearr_25413_25493 = state_25396__$1;
(statearr_25413_25493[(1)] = (5));

} else {
var statearr_25414_25494 = state_25396__$1;
(statearr_25414_25494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (15))){
var inst_25279 = (state_25396[(13)]);
var inst_25280 = (state_25396[(14)]);
var inst_25278 = (state_25396[(15)]);
var inst_25277 = (state_25396[(17)]);
var inst_25293 = (state_25396[(2)]);
var inst_25294 = (inst_25280 + (1));
var tmp25408 = inst_25279;
var tmp25409 = inst_25278;
var tmp25410 = inst_25277;
var inst_25277__$1 = tmp25410;
var inst_25278__$1 = tmp25409;
var inst_25279__$1 = tmp25408;
var inst_25280__$1 = inst_25294;
var state_25396__$1 = (function (){var statearr_25415 = state_25396;
(statearr_25415[(13)] = inst_25279__$1);

(statearr_25415[(14)] = inst_25280__$1);

(statearr_25415[(15)] = inst_25278__$1);

(statearr_25415[(18)] = inst_25293);

(statearr_25415[(17)] = inst_25277__$1);

return statearr_25415;
})();
var statearr_25416_25495 = state_25396__$1;
(statearr_25416_25495[(2)] = null);

(statearr_25416_25495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (21))){
var inst_25318 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25420_25496 = state_25396__$1;
(statearr_25420_25496[(2)] = inst_25318);

(statearr_25420_25496[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (31))){
var inst_25344 = (state_25396[(12)]);
var inst_25348 = done.call(null,null);
var inst_25349 = cljs.core.async.untap_STAR_.call(null,m,inst_25344);
var state_25396__$1 = (function (){var statearr_25421 = state_25396;
(statearr_25421[(19)] = inst_25348);

return statearr_25421;
})();
var statearr_25422_25497 = state_25396__$1;
(statearr_25422_25497[(2)] = inst_25349);

(statearr_25422_25497[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (32))){
var inst_25339 = (state_25396[(9)]);
var inst_25336 = (state_25396[(20)]);
var inst_25338 = (state_25396[(21)]);
var inst_25337 = (state_25396[(10)]);
var inst_25351 = (state_25396[(2)]);
var inst_25352 = (inst_25339 + (1));
var tmp25417 = inst_25336;
var tmp25418 = inst_25338;
var tmp25419 = inst_25337;
var inst_25336__$1 = tmp25417;
var inst_25337__$1 = tmp25419;
var inst_25338__$1 = tmp25418;
var inst_25339__$1 = inst_25352;
var state_25396__$1 = (function (){var statearr_25423 = state_25396;
(statearr_25423[(9)] = inst_25339__$1);

(statearr_25423[(20)] = inst_25336__$1);

(statearr_25423[(21)] = inst_25338__$1);

(statearr_25423[(10)] = inst_25337__$1);

(statearr_25423[(22)] = inst_25351);

return statearr_25423;
})();
var statearr_25424_25498 = state_25396__$1;
(statearr_25424_25498[(2)] = null);

(statearr_25424_25498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (40))){
var inst_25364 = (state_25396[(23)]);
var inst_25368 = done.call(null,null);
var inst_25369 = cljs.core.async.untap_STAR_.call(null,m,inst_25364);
var state_25396__$1 = (function (){var statearr_25425 = state_25396;
(statearr_25425[(24)] = inst_25368);

return statearr_25425;
})();
var statearr_25426_25499 = state_25396__$1;
(statearr_25426_25499[(2)] = inst_25369);

(statearr_25426_25499[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (33))){
var inst_25355 = (state_25396[(25)]);
var inst_25357 = cljs.core.chunked_seq_QMARK_.call(null,inst_25355);
var state_25396__$1 = state_25396;
if(inst_25357){
var statearr_25427_25500 = state_25396__$1;
(statearr_25427_25500[(1)] = (36));

} else {
var statearr_25428_25501 = state_25396__$1;
(statearr_25428_25501[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (13))){
var inst_25287 = (state_25396[(26)]);
var inst_25290 = cljs.core.async.close_BANG_.call(null,inst_25287);
var state_25396__$1 = state_25396;
var statearr_25429_25502 = state_25396__$1;
(statearr_25429_25502[(2)] = inst_25290);

(statearr_25429_25502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (22))){
var inst_25308 = (state_25396[(8)]);
var inst_25311 = cljs.core.async.close_BANG_.call(null,inst_25308);
var state_25396__$1 = state_25396;
var statearr_25430_25503 = state_25396__$1;
(statearr_25430_25503[(2)] = inst_25311);

(statearr_25430_25503[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (36))){
var inst_25355 = (state_25396[(25)]);
var inst_25359 = cljs.core.chunk_first.call(null,inst_25355);
var inst_25360 = cljs.core.chunk_rest.call(null,inst_25355);
var inst_25361 = cljs.core.count.call(null,inst_25359);
var inst_25336 = inst_25360;
var inst_25337 = inst_25359;
var inst_25338 = inst_25361;
var inst_25339 = (0);
var state_25396__$1 = (function (){var statearr_25431 = state_25396;
(statearr_25431[(9)] = inst_25339);

(statearr_25431[(20)] = inst_25336);

(statearr_25431[(21)] = inst_25338);

(statearr_25431[(10)] = inst_25337);

return statearr_25431;
})();
var statearr_25432_25504 = state_25396__$1;
(statearr_25432_25504[(2)] = null);

(statearr_25432_25504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (41))){
var inst_25355 = (state_25396[(25)]);
var inst_25371 = (state_25396[(2)]);
var inst_25372 = cljs.core.next.call(null,inst_25355);
var inst_25336 = inst_25372;
var inst_25337 = null;
var inst_25338 = (0);
var inst_25339 = (0);
var state_25396__$1 = (function (){var statearr_25433 = state_25396;
(statearr_25433[(9)] = inst_25339);

(statearr_25433[(20)] = inst_25336);

(statearr_25433[(21)] = inst_25338);

(statearr_25433[(27)] = inst_25371);

(statearr_25433[(10)] = inst_25337);

return statearr_25433;
})();
var statearr_25434_25505 = state_25396__$1;
(statearr_25434_25505[(2)] = null);

(statearr_25434_25505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (43))){
var state_25396__$1 = state_25396;
var statearr_25435_25506 = state_25396__$1;
(statearr_25435_25506[(2)] = null);

(statearr_25435_25506[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (29))){
var inst_25380 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25436_25507 = state_25396__$1;
(statearr_25436_25507[(2)] = inst_25380);

(statearr_25436_25507[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (44))){
var inst_25389 = (state_25396[(2)]);
var state_25396__$1 = (function (){var statearr_25437 = state_25396;
(statearr_25437[(28)] = inst_25389);

return statearr_25437;
})();
var statearr_25438_25508 = state_25396__$1;
(statearr_25438_25508[(2)] = null);

(statearr_25438_25508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (6))){
var inst_25328 = (state_25396[(29)]);
var inst_25327 = cljs.core.deref.call(null,cs);
var inst_25328__$1 = cljs.core.keys.call(null,inst_25327);
var inst_25329 = cljs.core.count.call(null,inst_25328__$1);
var inst_25330 = cljs.core.reset_BANG_.call(null,dctr,inst_25329);
var inst_25335 = cljs.core.seq.call(null,inst_25328__$1);
var inst_25336 = inst_25335;
var inst_25337 = null;
var inst_25338 = (0);
var inst_25339 = (0);
var state_25396__$1 = (function (){var statearr_25439 = state_25396;
(statearr_25439[(9)] = inst_25339);

(statearr_25439[(20)] = inst_25336);

(statearr_25439[(21)] = inst_25338);

(statearr_25439[(10)] = inst_25337);

(statearr_25439[(30)] = inst_25330);

(statearr_25439[(29)] = inst_25328__$1);

return statearr_25439;
})();
var statearr_25440_25509 = state_25396__$1;
(statearr_25440_25509[(2)] = null);

(statearr_25440_25509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (28))){
var inst_25336 = (state_25396[(20)]);
var inst_25355 = (state_25396[(25)]);
var inst_25355__$1 = cljs.core.seq.call(null,inst_25336);
var state_25396__$1 = (function (){var statearr_25441 = state_25396;
(statearr_25441[(25)] = inst_25355__$1);

return statearr_25441;
})();
if(inst_25355__$1){
var statearr_25442_25510 = state_25396__$1;
(statearr_25442_25510[(1)] = (33));

} else {
var statearr_25443_25511 = state_25396__$1;
(statearr_25443_25511[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (25))){
var inst_25339 = (state_25396[(9)]);
var inst_25338 = (state_25396[(21)]);
var inst_25341 = (inst_25339 < inst_25338);
var inst_25342 = inst_25341;
var state_25396__$1 = state_25396;
if(cljs.core.truth_(inst_25342)){
var statearr_25444_25512 = state_25396__$1;
(statearr_25444_25512[(1)] = (27));

} else {
var statearr_25445_25513 = state_25396__$1;
(statearr_25445_25513[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (34))){
var state_25396__$1 = state_25396;
var statearr_25446_25514 = state_25396__$1;
(statearr_25446_25514[(2)] = null);

(statearr_25446_25514[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (17))){
var state_25396__$1 = state_25396;
var statearr_25447_25515 = state_25396__$1;
(statearr_25447_25515[(2)] = null);

(statearr_25447_25515[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (3))){
var inst_25394 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25396__$1,inst_25394);
} else {
if((state_val_25397 === (12))){
var inst_25323 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25448_25516 = state_25396__$1;
(statearr_25448_25516[(2)] = inst_25323);

(statearr_25448_25516[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (2))){
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(4),ch);
} else {
if((state_val_25397 === (23))){
var state_25396__$1 = state_25396;
var statearr_25449_25517 = state_25396__$1;
(statearr_25449_25517[(2)] = null);

(statearr_25449_25517[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (35))){
var inst_25378 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25450_25518 = state_25396__$1;
(statearr_25450_25518[(2)] = inst_25378);

(statearr_25450_25518[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (19))){
var inst_25297 = (state_25396[(7)]);
var inst_25301 = cljs.core.chunk_first.call(null,inst_25297);
var inst_25302 = cljs.core.chunk_rest.call(null,inst_25297);
var inst_25303 = cljs.core.count.call(null,inst_25301);
var inst_25277 = inst_25302;
var inst_25278 = inst_25301;
var inst_25279 = inst_25303;
var inst_25280 = (0);
var state_25396__$1 = (function (){var statearr_25451 = state_25396;
(statearr_25451[(13)] = inst_25279);

(statearr_25451[(14)] = inst_25280);

(statearr_25451[(15)] = inst_25278);

(statearr_25451[(17)] = inst_25277);

return statearr_25451;
})();
var statearr_25452_25519 = state_25396__$1;
(statearr_25452_25519[(2)] = null);

(statearr_25452_25519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (11))){
var inst_25297 = (state_25396[(7)]);
var inst_25277 = (state_25396[(17)]);
var inst_25297__$1 = cljs.core.seq.call(null,inst_25277);
var state_25396__$1 = (function (){var statearr_25453 = state_25396;
(statearr_25453[(7)] = inst_25297__$1);

return statearr_25453;
})();
if(inst_25297__$1){
var statearr_25454_25520 = state_25396__$1;
(statearr_25454_25520[(1)] = (16));

} else {
var statearr_25455_25521 = state_25396__$1;
(statearr_25455_25521[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (9))){
var inst_25325 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25456_25522 = state_25396__$1;
(statearr_25456_25522[(2)] = inst_25325);

(statearr_25456_25522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (5))){
var inst_25275 = cljs.core.deref.call(null,cs);
var inst_25276 = cljs.core.seq.call(null,inst_25275);
var inst_25277 = inst_25276;
var inst_25278 = null;
var inst_25279 = (0);
var inst_25280 = (0);
var state_25396__$1 = (function (){var statearr_25457 = state_25396;
(statearr_25457[(13)] = inst_25279);

(statearr_25457[(14)] = inst_25280);

(statearr_25457[(15)] = inst_25278);

(statearr_25457[(17)] = inst_25277);

return statearr_25457;
})();
var statearr_25458_25523 = state_25396__$1;
(statearr_25458_25523[(2)] = null);

(statearr_25458_25523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (14))){
var state_25396__$1 = state_25396;
var statearr_25459_25524 = state_25396__$1;
(statearr_25459_25524[(2)] = null);

(statearr_25459_25524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (45))){
var inst_25386 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25460_25525 = state_25396__$1;
(statearr_25460_25525[(2)] = inst_25386);

(statearr_25460_25525[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (26))){
var inst_25328 = (state_25396[(29)]);
var inst_25382 = (state_25396[(2)]);
var inst_25383 = cljs.core.seq.call(null,inst_25328);
var state_25396__$1 = (function (){var statearr_25461 = state_25396;
(statearr_25461[(31)] = inst_25382);

return statearr_25461;
})();
if(inst_25383){
var statearr_25462_25526 = state_25396__$1;
(statearr_25462_25526[(1)] = (42));

} else {
var statearr_25463_25527 = state_25396__$1;
(statearr_25463_25527[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (16))){
var inst_25297 = (state_25396[(7)]);
var inst_25299 = cljs.core.chunked_seq_QMARK_.call(null,inst_25297);
var state_25396__$1 = state_25396;
if(inst_25299){
var statearr_25464_25528 = state_25396__$1;
(statearr_25464_25528[(1)] = (19));

} else {
var statearr_25465_25529 = state_25396__$1;
(statearr_25465_25529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (38))){
var inst_25375 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25466_25530 = state_25396__$1;
(statearr_25466_25530[(2)] = inst_25375);

(statearr_25466_25530[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (30))){
var state_25396__$1 = state_25396;
var statearr_25467_25531 = state_25396__$1;
(statearr_25467_25531[(2)] = null);

(statearr_25467_25531[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (10))){
var inst_25280 = (state_25396[(14)]);
var inst_25278 = (state_25396[(15)]);
var inst_25286 = cljs.core._nth.call(null,inst_25278,inst_25280);
var inst_25287 = cljs.core.nth.call(null,inst_25286,(0),null);
var inst_25288 = cljs.core.nth.call(null,inst_25286,(1),null);
var state_25396__$1 = (function (){var statearr_25468 = state_25396;
(statearr_25468[(26)] = inst_25287);

return statearr_25468;
})();
if(cljs.core.truth_(inst_25288)){
var statearr_25469_25532 = state_25396__$1;
(statearr_25469_25532[(1)] = (13));

} else {
var statearr_25470_25533 = state_25396__$1;
(statearr_25470_25533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (18))){
var inst_25321 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25471_25534 = state_25396__$1;
(statearr_25471_25534[(2)] = inst_25321);

(statearr_25471_25534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (42))){
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(45),dchan);
} else {
if((state_val_25397 === (37))){
var inst_25364 = (state_25396[(23)]);
var inst_25268 = (state_25396[(11)]);
var inst_25355 = (state_25396[(25)]);
var inst_25364__$1 = cljs.core.first.call(null,inst_25355);
var inst_25365 = cljs.core.async.put_BANG_.call(null,inst_25364__$1,inst_25268,done);
var state_25396__$1 = (function (){var statearr_25472 = state_25396;
(statearr_25472[(23)] = inst_25364__$1);

return statearr_25472;
})();
if(cljs.core.truth_(inst_25365)){
var statearr_25473_25535 = state_25396__$1;
(statearr_25473_25535[(1)] = (39));

} else {
var statearr_25474_25536 = state_25396__$1;
(statearr_25474_25536[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (8))){
var inst_25279 = (state_25396[(13)]);
var inst_25280 = (state_25396[(14)]);
var inst_25282 = (inst_25280 < inst_25279);
var inst_25283 = inst_25282;
var state_25396__$1 = state_25396;
if(cljs.core.truth_(inst_25283)){
var statearr_25475_25537 = state_25396__$1;
(statearr_25475_25537[(1)] = (10));

} else {
var statearr_25476_25538 = state_25396__$1;
(statearr_25476_25538[(1)] = (11));

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
});})(c__24177__auto___25484,cs,m,dchan,dctr,done))
;
return ((function (switch__24065__auto__,c__24177__auto___25484,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24066__auto__ = null;
var cljs$core$async$mult_$_state_machine__24066__auto____0 = (function (){
var statearr_25480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25480[(0)] = cljs$core$async$mult_$_state_machine__24066__auto__);

(statearr_25480[(1)] = (1));

return statearr_25480;
});
var cljs$core$async$mult_$_state_machine__24066__auto____1 = (function (state_25396){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_25396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e25481){if((e25481 instanceof Object)){
var ex__24069__auto__ = e25481;
var statearr_25482_25539 = state_25396;
(statearr_25482_25539[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25540 = state_25396;
state_25396 = G__25540;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24066__auto__ = function(state_25396){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24066__auto____1.call(this,state_25396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24066__auto____0;
cljs$core$async$mult_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24066__auto____1;
return cljs$core$async$mult_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___25484,cs,m,dchan,dctr,done))
})();
var state__24179__auto__ = (function (){var statearr_25483 = f__24178__auto__.call(null);
(statearr_25483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___25484);

return statearr_25483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___25484,cs,m,dchan,dctr,done))
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
var args25541 = [];
var len__17765__auto___25544 = arguments.length;
var i__17766__auto___25545 = (0);
while(true){
if((i__17766__auto___25545 < len__17765__auto___25544)){
args25541.push((arguments[i__17766__auto___25545]));

var G__25546 = (i__17766__auto___25545 + (1));
i__17766__auto___25545 = G__25546;
continue;
} else {
}
break;
}

var G__25543 = args25541.length;
switch (G__25543) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25541.length)].join('')));

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
var x__17362__auto__ = (((m == null))?null:m);
var m__17363__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,m,ch);
} else {
var m__17363__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,m,ch);
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
var x__17362__auto__ = (((m == null))?null:m);
var m__17363__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,m,ch);
} else {
var m__17363__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,m,ch);
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
var x__17362__auto__ = (((m == null))?null:m);
var m__17363__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,m);
} else {
var m__17363__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,m);
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
var x__17362__auto__ = (((m == null))?null:m);
var m__17363__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,m,state_map);
} else {
var m__17363__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,m,state_map);
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
var x__17362__auto__ = (((m == null))?null:m);
var m__17363__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,m,mode);
} else {
var m__17363__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17772__auto__ = [];
var len__17765__auto___25558 = arguments.length;
var i__17766__auto___25559 = (0);
while(true){
if((i__17766__auto___25559 < len__17765__auto___25558)){
args__17772__auto__.push((arguments[i__17766__auto___25559]));

var G__25560 = (i__17766__auto___25559 + (1));
i__17766__auto___25559 = G__25560;
continue;
} else {
}
break;
}

var argseq__17773__auto__ = ((((3) < args__17772__auto__.length))?(new cljs.core.IndexedSeq(args__17772__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17773__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25552){
var map__25553 = p__25552;
var map__25553__$1 = ((((!((map__25553 == null)))?((((map__25553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25553):map__25553);
var opts = map__25553__$1;
var statearr_25555_25561 = state;
(statearr_25555_25561[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25553,map__25553__$1,opts){
return (function (val){
var statearr_25556_25562 = state;
(statearr_25556_25562[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25553,map__25553__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25557_25563 = state;
(statearr_25557_25563[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25548){
var G__25549 = cljs.core.first.call(null,seq25548);
var seq25548__$1 = cljs.core.next.call(null,seq25548);
var G__25550 = cljs.core.first.call(null,seq25548__$1);
var seq25548__$2 = cljs.core.next.call(null,seq25548__$1);
var G__25551 = cljs.core.first.call(null,seq25548__$2);
var seq25548__$3 = cljs.core.next.call(null,seq25548__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25549,G__25550,G__25551,seq25548__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25727 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25728){
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
this.meta25728 = meta25728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25729,meta25728__$1){
var self__ = this;
var _25729__$1 = this;
return (new cljs.core.async.t_cljs$core$async25727(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25728__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25729){
var self__ = this;
var _25729__$1 = this;
return self__.meta25728;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25727.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25727.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25727.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25727.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25727.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25727.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25727.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25727.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25727.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25728","meta25728",501940243,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25727";

cljs.core.async.t_cljs$core$async25727.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17305__auto__,writer__17306__auto__,opt__17307__auto__){
return cljs.core._write.call(null,writer__17306__auto__,"cljs.core.async/t_cljs$core$async25727");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25727 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25727(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25728){
return (new cljs.core.async.t_cljs$core$async25727(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25728));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25727(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24177__auto___25890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___25890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___25890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25827){
var state_val_25828 = (state_25827[(1)]);
if((state_val_25828 === (7))){
var inst_25745 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25829_25891 = state_25827__$1;
(statearr_25829_25891[(2)] = inst_25745);

(statearr_25829_25891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (20))){
var inst_25757 = (state_25827[(7)]);
var state_25827__$1 = state_25827;
var statearr_25830_25892 = state_25827__$1;
(statearr_25830_25892[(2)] = inst_25757);

(statearr_25830_25892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (27))){
var state_25827__$1 = state_25827;
var statearr_25831_25893 = state_25827__$1;
(statearr_25831_25893[(2)] = null);

(statearr_25831_25893[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (1))){
var inst_25733 = (state_25827[(8)]);
var inst_25733__$1 = calc_state.call(null);
var inst_25735 = (inst_25733__$1 == null);
var inst_25736 = cljs.core.not.call(null,inst_25735);
var state_25827__$1 = (function (){var statearr_25832 = state_25827;
(statearr_25832[(8)] = inst_25733__$1);

return statearr_25832;
})();
if(inst_25736){
var statearr_25833_25894 = state_25827__$1;
(statearr_25833_25894[(1)] = (2));

} else {
var statearr_25834_25895 = state_25827__$1;
(statearr_25834_25895[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (24))){
var inst_25780 = (state_25827[(9)]);
var inst_25801 = (state_25827[(10)]);
var inst_25787 = (state_25827[(11)]);
var inst_25801__$1 = inst_25780.call(null,inst_25787);
var state_25827__$1 = (function (){var statearr_25835 = state_25827;
(statearr_25835[(10)] = inst_25801__$1);

return statearr_25835;
})();
if(cljs.core.truth_(inst_25801__$1)){
var statearr_25836_25896 = state_25827__$1;
(statearr_25836_25896[(1)] = (29));

} else {
var statearr_25837_25897 = state_25827__$1;
(statearr_25837_25897[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (4))){
var inst_25748 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
if(cljs.core.truth_(inst_25748)){
var statearr_25838_25898 = state_25827__$1;
(statearr_25838_25898[(1)] = (8));

} else {
var statearr_25839_25899 = state_25827__$1;
(statearr_25839_25899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (15))){
var inst_25774 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
if(cljs.core.truth_(inst_25774)){
var statearr_25840_25900 = state_25827__$1;
(statearr_25840_25900[(1)] = (19));

} else {
var statearr_25841_25901 = state_25827__$1;
(statearr_25841_25901[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (21))){
var inst_25779 = (state_25827[(12)]);
var inst_25779__$1 = (state_25827[(2)]);
var inst_25780 = cljs.core.get.call(null,inst_25779__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25781 = cljs.core.get.call(null,inst_25779__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25782 = cljs.core.get.call(null,inst_25779__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25827__$1 = (function (){var statearr_25842 = state_25827;
(statearr_25842[(9)] = inst_25780);

(statearr_25842[(13)] = inst_25781);

(statearr_25842[(12)] = inst_25779__$1);

return statearr_25842;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25827__$1,(22),inst_25782);
} else {
if((state_val_25828 === (31))){
var inst_25809 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
if(cljs.core.truth_(inst_25809)){
var statearr_25843_25902 = state_25827__$1;
(statearr_25843_25902[(1)] = (32));

} else {
var statearr_25844_25903 = state_25827__$1;
(statearr_25844_25903[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (32))){
var inst_25786 = (state_25827[(14)]);
var state_25827__$1 = state_25827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25827__$1,(35),out,inst_25786);
} else {
if((state_val_25828 === (33))){
var inst_25779 = (state_25827[(12)]);
var inst_25757 = inst_25779;
var state_25827__$1 = (function (){var statearr_25845 = state_25827;
(statearr_25845[(7)] = inst_25757);

return statearr_25845;
})();
var statearr_25846_25904 = state_25827__$1;
(statearr_25846_25904[(2)] = null);

(statearr_25846_25904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (13))){
var inst_25757 = (state_25827[(7)]);
var inst_25764 = inst_25757.cljs$lang$protocol_mask$partition0$;
var inst_25765 = (inst_25764 & (64));
var inst_25766 = inst_25757.cljs$core$ISeq$;
var inst_25767 = (inst_25765) || (inst_25766);
var state_25827__$1 = state_25827;
if(cljs.core.truth_(inst_25767)){
var statearr_25847_25905 = state_25827__$1;
(statearr_25847_25905[(1)] = (16));

} else {
var statearr_25848_25906 = state_25827__$1;
(statearr_25848_25906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (22))){
var inst_25787 = (state_25827[(11)]);
var inst_25786 = (state_25827[(14)]);
var inst_25785 = (state_25827[(2)]);
var inst_25786__$1 = cljs.core.nth.call(null,inst_25785,(0),null);
var inst_25787__$1 = cljs.core.nth.call(null,inst_25785,(1),null);
var inst_25788 = (inst_25786__$1 == null);
var inst_25789 = cljs.core._EQ_.call(null,inst_25787__$1,change);
var inst_25790 = (inst_25788) || (inst_25789);
var state_25827__$1 = (function (){var statearr_25849 = state_25827;
(statearr_25849[(11)] = inst_25787__$1);

(statearr_25849[(14)] = inst_25786__$1);

return statearr_25849;
})();
if(cljs.core.truth_(inst_25790)){
var statearr_25850_25907 = state_25827__$1;
(statearr_25850_25907[(1)] = (23));

} else {
var statearr_25851_25908 = state_25827__$1;
(statearr_25851_25908[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (36))){
var inst_25779 = (state_25827[(12)]);
var inst_25757 = inst_25779;
var state_25827__$1 = (function (){var statearr_25852 = state_25827;
(statearr_25852[(7)] = inst_25757);

return statearr_25852;
})();
var statearr_25853_25909 = state_25827__$1;
(statearr_25853_25909[(2)] = null);

(statearr_25853_25909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (29))){
var inst_25801 = (state_25827[(10)]);
var state_25827__$1 = state_25827;
var statearr_25854_25910 = state_25827__$1;
(statearr_25854_25910[(2)] = inst_25801);

(statearr_25854_25910[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (6))){
var state_25827__$1 = state_25827;
var statearr_25855_25911 = state_25827__$1;
(statearr_25855_25911[(2)] = false);

(statearr_25855_25911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (28))){
var inst_25797 = (state_25827[(2)]);
var inst_25798 = calc_state.call(null);
var inst_25757 = inst_25798;
var state_25827__$1 = (function (){var statearr_25856 = state_25827;
(statearr_25856[(15)] = inst_25797);

(statearr_25856[(7)] = inst_25757);

return statearr_25856;
})();
var statearr_25857_25912 = state_25827__$1;
(statearr_25857_25912[(2)] = null);

(statearr_25857_25912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (25))){
var inst_25823 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25858_25913 = state_25827__$1;
(statearr_25858_25913[(2)] = inst_25823);

(statearr_25858_25913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (34))){
var inst_25821 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25859_25914 = state_25827__$1;
(statearr_25859_25914[(2)] = inst_25821);

(statearr_25859_25914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (17))){
var state_25827__$1 = state_25827;
var statearr_25860_25915 = state_25827__$1;
(statearr_25860_25915[(2)] = false);

(statearr_25860_25915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (3))){
var state_25827__$1 = state_25827;
var statearr_25861_25916 = state_25827__$1;
(statearr_25861_25916[(2)] = false);

(statearr_25861_25916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (12))){
var inst_25825 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25827__$1,inst_25825);
} else {
if((state_val_25828 === (2))){
var inst_25733 = (state_25827[(8)]);
var inst_25738 = inst_25733.cljs$lang$protocol_mask$partition0$;
var inst_25739 = (inst_25738 & (64));
var inst_25740 = inst_25733.cljs$core$ISeq$;
var inst_25741 = (inst_25739) || (inst_25740);
var state_25827__$1 = state_25827;
if(cljs.core.truth_(inst_25741)){
var statearr_25862_25917 = state_25827__$1;
(statearr_25862_25917[(1)] = (5));

} else {
var statearr_25863_25918 = state_25827__$1;
(statearr_25863_25918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (23))){
var inst_25786 = (state_25827[(14)]);
var inst_25792 = (inst_25786 == null);
var state_25827__$1 = state_25827;
if(cljs.core.truth_(inst_25792)){
var statearr_25864_25919 = state_25827__$1;
(statearr_25864_25919[(1)] = (26));

} else {
var statearr_25865_25920 = state_25827__$1;
(statearr_25865_25920[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (35))){
var inst_25812 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
if(cljs.core.truth_(inst_25812)){
var statearr_25866_25921 = state_25827__$1;
(statearr_25866_25921[(1)] = (36));

} else {
var statearr_25867_25922 = state_25827__$1;
(statearr_25867_25922[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (19))){
var inst_25757 = (state_25827[(7)]);
var inst_25776 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25757);
var state_25827__$1 = state_25827;
var statearr_25868_25923 = state_25827__$1;
(statearr_25868_25923[(2)] = inst_25776);

(statearr_25868_25923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (11))){
var inst_25757 = (state_25827[(7)]);
var inst_25761 = (inst_25757 == null);
var inst_25762 = cljs.core.not.call(null,inst_25761);
var state_25827__$1 = state_25827;
if(inst_25762){
var statearr_25869_25924 = state_25827__$1;
(statearr_25869_25924[(1)] = (13));

} else {
var statearr_25870_25925 = state_25827__$1;
(statearr_25870_25925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (9))){
var inst_25733 = (state_25827[(8)]);
var state_25827__$1 = state_25827;
var statearr_25871_25926 = state_25827__$1;
(statearr_25871_25926[(2)] = inst_25733);

(statearr_25871_25926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (5))){
var state_25827__$1 = state_25827;
var statearr_25872_25927 = state_25827__$1;
(statearr_25872_25927[(2)] = true);

(statearr_25872_25927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (14))){
var state_25827__$1 = state_25827;
var statearr_25873_25928 = state_25827__$1;
(statearr_25873_25928[(2)] = false);

(statearr_25873_25928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (26))){
var inst_25787 = (state_25827[(11)]);
var inst_25794 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25787);
var state_25827__$1 = state_25827;
var statearr_25874_25929 = state_25827__$1;
(statearr_25874_25929[(2)] = inst_25794);

(statearr_25874_25929[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (16))){
var state_25827__$1 = state_25827;
var statearr_25875_25930 = state_25827__$1;
(statearr_25875_25930[(2)] = true);

(statearr_25875_25930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (38))){
var inst_25817 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25876_25931 = state_25827__$1;
(statearr_25876_25931[(2)] = inst_25817);

(statearr_25876_25931[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (30))){
var inst_25780 = (state_25827[(9)]);
var inst_25781 = (state_25827[(13)]);
var inst_25787 = (state_25827[(11)]);
var inst_25804 = cljs.core.empty_QMARK_.call(null,inst_25780);
var inst_25805 = inst_25781.call(null,inst_25787);
var inst_25806 = cljs.core.not.call(null,inst_25805);
var inst_25807 = (inst_25804) && (inst_25806);
var state_25827__$1 = state_25827;
var statearr_25877_25932 = state_25827__$1;
(statearr_25877_25932[(2)] = inst_25807);

(statearr_25877_25932[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (10))){
var inst_25733 = (state_25827[(8)]);
var inst_25753 = (state_25827[(2)]);
var inst_25754 = cljs.core.get.call(null,inst_25753,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25755 = cljs.core.get.call(null,inst_25753,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25756 = cljs.core.get.call(null,inst_25753,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25757 = inst_25733;
var state_25827__$1 = (function (){var statearr_25878 = state_25827;
(statearr_25878[(16)] = inst_25756);

(statearr_25878[(17)] = inst_25755);

(statearr_25878[(7)] = inst_25757);

(statearr_25878[(18)] = inst_25754);

return statearr_25878;
})();
var statearr_25879_25933 = state_25827__$1;
(statearr_25879_25933[(2)] = null);

(statearr_25879_25933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (18))){
var inst_25771 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25880_25934 = state_25827__$1;
(statearr_25880_25934[(2)] = inst_25771);

(statearr_25880_25934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (37))){
var state_25827__$1 = state_25827;
var statearr_25881_25935 = state_25827__$1;
(statearr_25881_25935[(2)] = null);

(statearr_25881_25935[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (8))){
var inst_25733 = (state_25827[(8)]);
var inst_25750 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25733);
var state_25827__$1 = state_25827;
var statearr_25882_25936 = state_25827__$1;
(statearr_25882_25936[(2)] = inst_25750);

(statearr_25882_25936[(1)] = (10));


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
});})(c__24177__auto___25890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24065__auto__,c__24177__auto___25890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24066__auto__ = null;
var cljs$core$async$mix_$_state_machine__24066__auto____0 = (function (){
var statearr_25886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25886[(0)] = cljs$core$async$mix_$_state_machine__24066__auto__);

(statearr_25886[(1)] = (1));

return statearr_25886;
});
var cljs$core$async$mix_$_state_machine__24066__auto____1 = (function (state_25827){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_25827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e25887){if((e25887 instanceof Object)){
var ex__24069__auto__ = e25887;
var statearr_25888_25937 = state_25827;
(statearr_25888_25937[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25938 = state_25827;
state_25827 = G__25938;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24066__auto__ = function(state_25827){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24066__auto____1.call(this,state_25827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24066__auto____0;
cljs$core$async$mix_$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24066__auto____1;
return cljs$core$async$mix_$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___25890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24179__auto__ = (function (){var statearr_25889 = f__24178__auto__.call(null);
(statearr_25889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___25890);

return statearr_25889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___25890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17362__auto__ = (((p == null))?null:p);
var m__17363__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17363__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17362__auto__ = (((p == null))?null:p);
var m__17363__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,p,v,ch);
} else {
var m__17363__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25939 = [];
var len__17765__auto___25942 = arguments.length;
var i__17766__auto___25943 = (0);
while(true){
if((i__17766__auto___25943 < len__17765__auto___25942)){
args25939.push((arguments[i__17766__auto___25943]));

var G__25944 = (i__17766__auto___25943 + (1));
i__17766__auto___25943 = G__25944;
continue;
} else {
}
break;
}

var G__25941 = args25939.length;
switch (G__25941) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25939.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17362__auto__ = (((p == null))?null:p);
var m__17363__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,p);
} else {
var m__17363__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,p);
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
var x__17362__auto__ = (((p == null))?null:p);
var m__17363__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17362__auto__)]);
if(!((m__17363__auto__ == null))){
return m__17363__auto__.call(null,p,v);
} else {
var m__17363__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17363__auto____$1 == null))){
return m__17363__auto____$1.call(null,p,v);
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
var args25947 = [];
var len__17765__auto___26072 = arguments.length;
var i__17766__auto___26073 = (0);
while(true){
if((i__17766__auto___26073 < len__17765__auto___26072)){
args25947.push((arguments[i__17766__auto___26073]));

var G__26074 = (i__17766__auto___26073 + (1));
i__17766__auto___26073 = G__26074;
continue;
} else {
}
break;
}

var G__25949 = args25947.length;
switch (G__25949) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25947.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16707__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16707__auto__)){
return or__16707__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16707__auto__,mults){
return (function (p1__25946_SHARP_){
if(cljs.core.truth_(p1__25946_SHARP_.call(null,topic))){
return p1__25946_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25946_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16707__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25950 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25951){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25951 = meta25951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25952,meta25951__$1){
var self__ = this;
var _25952__$1 = this;
return (new cljs.core.async.t_cljs$core$async25950(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25951__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25952){
var self__ = this;
var _25952__$1 = this;
return self__.meta25951;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25950.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25950.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25950.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25950.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25950.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25951","meta25951",-964763306,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25950";

cljs.core.async.t_cljs$core$async25950.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17305__auto__,writer__17306__auto__,opt__17307__auto__){
return cljs.core._write.call(null,writer__17306__auto__,"cljs.core.async/t_cljs$core$async25950");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25950 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25950(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25951){
return (new cljs.core.async.t_cljs$core$async25950(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25951));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25950(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24177__auto___26076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___26076,mults,ensure_mult,p){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___26076,mults,ensure_mult,p){
return (function (state_26024){
var state_val_26025 = (state_26024[(1)]);
if((state_val_26025 === (7))){
var inst_26020 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26026_26077 = state_26024__$1;
(statearr_26026_26077[(2)] = inst_26020);

(statearr_26026_26077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (20))){
var state_26024__$1 = state_26024;
var statearr_26027_26078 = state_26024__$1;
(statearr_26027_26078[(2)] = null);

(statearr_26027_26078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (1))){
var state_26024__$1 = state_26024;
var statearr_26028_26079 = state_26024__$1;
(statearr_26028_26079[(2)] = null);

(statearr_26028_26079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (24))){
var inst_26003 = (state_26024[(7)]);
var inst_26012 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26003);
var state_26024__$1 = state_26024;
var statearr_26029_26080 = state_26024__$1;
(statearr_26029_26080[(2)] = inst_26012);

(statearr_26029_26080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (4))){
var inst_25955 = (state_26024[(8)]);
var inst_25955__$1 = (state_26024[(2)]);
var inst_25956 = (inst_25955__$1 == null);
var state_26024__$1 = (function (){var statearr_26030 = state_26024;
(statearr_26030[(8)] = inst_25955__$1);

return statearr_26030;
})();
if(cljs.core.truth_(inst_25956)){
var statearr_26031_26081 = state_26024__$1;
(statearr_26031_26081[(1)] = (5));

} else {
var statearr_26032_26082 = state_26024__$1;
(statearr_26032_26082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (15))){
var inst_25997 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26033_26083 = state_26024__$1;
(statearr_26033_26083[(2)] = inst_25997);

(statearr_26033_26083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (21))){
var inst_26017 = (state_26024[(2)]);
var state_26024__$1 = (function (){var statearr_26034 = state_26024;
(statearr_26034[(9)] = inst_26017);

return statearr_26034;
})();
var statearr_26035_26084 = state_26024__$1;
(statearr_26035_26084[(2)] = null);

(statearr_26035_26084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (13))){
var inst_25979 = (state_26024[(10)]);
var inst_25981 = cljs.core.chunked_seq_QMARK_.call(null,inst_25979);
var state_26024__$1 = state_26024;
if(inst_25981){
var statearr_26036_26085 = state_26024__$1;
(statearr_26036_26085[(1)] = (16));

} else {
var statearr_26037_26086 = state_26024__$1;
(statearr_26037_26086[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (22))){
var inst_26009 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_26009)){
var statearr_26038_26087 = state_26024__$1;
(statearr_26038_26087[(1)] = (23));

} else {
var statearr_26039_26088 = state_26024__$1;
(statearr_26039_26088[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (6))){
var inst_26005 = (state_26024[(11)]);
var inst_26003 = (state_26024[(7)]);
var inst_25955 = (state_26024[(8)]);
var inst_26003__$1 = topic_fn.call(null,inst_25955);
var inst_26004 = cljs.core.deref.call(null,mults);
var inst_26005__$1 = cljs.core.get.call(null,inst_26004,inst_26003__$1);
var state_26024__$1 = (function (){var statearr_26040 = state_26024;
(statearr_26040[(11)] = inst_26005__$1);

(statearr_26040[(7)] = inst_26003__$1);

return statearr_26040;
})();
if(cljs.core.truth_(inst_26005__$1)){
var statearr_26041_26089 = state_26024__$1;
(statearr_26041_26089[(1)] = (19));

} else {
var statearr_26042_26090 = state_26024__$1;
(statearr_26042_26090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (25))){
var inst_26014 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26043_26091 = state_26024__$1;
(statearr_26043_26091[(2)] = inst_26014);

(statearr_26043_26091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (17))){
var inst_25979 = (state_26024[(10)]);
var inst_25988 = cljs.core.first.call(null,inst_25979);
var inst_25989 = cljs.core.async.muxch_STAR_.call(null,inst_25988);
var inst_25990 = cljs.core.async.close_BANG_.call(null,inst_25989);
var inst_25991 = cljs.core.next.call(null,inst_25979);
var inst_25965 = inst_25991;
var inst_25966 = null;
var inst_25967 = (0);
var inst_25968 = (0);
var state_26024__$1 = (function (){var statearr_26044 = state_26024;
(statearr_26044[(12)] = inst_25968);

(statearr_26044[(13)] = inst_25990);

(statearr_26044[(14)] = inst_25966);

(statearr_26044[(15)] = inst_25967);

(statearr_26044[(16)] = inst_25965);

return statearr_26044;
})();
var statearr_26045_26092 = state_26024__$1;
(statearr_26045_26092[(2)] = null);

(statearr_26045_26092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (3))){
var inst_26022 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26024__$1,inst_26022);
} else {
if((state_val_26025 === (12))){
var inst_25999 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26046_26093 = state_26024__$1;
(statearr_26046_26093[(2)] = inst_25999);

(statearr_26046_26093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (2))){
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(4),ch);
} else {
if((state_val_26025 === (23))){
var state_26024__$1 = state_26024;
var statearr_26047_26094 = state_26024__$1;
(statearr_26047_26094[(2)] = null);

(statearr_26047_26094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (19))){
var inst_26005 = (state_26024[(11)]);
var inst_25955 = (state_26024[(8)]);
var inst_26007 = cljs.core.async.muxch_STAR_.call(null,inst_26005);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26024__$1,(22),inst_26007,inst_25955);
} else {
if((state_val_26025 === (11))){
var inst_25979 = (state_26024[(10)]);
var inst_25965 = (state_26024[(16)]);
var inst_25979__$1 = cljs.core.seq.call(null,inst_25965);
var state_26024__$1 = (function (){var statearr_26048 = state_26024;
(statearr_26048[(10)] = inst_25979__$1);

return statearr_26048;
})();
if(inst_25979__$1){
var statearr_26049_26095 = state_26024__$1;
(statearr_26049_26095[(1)] = (13));

} else {
var statearr_26050_26096 = state_26024__$1;
(statearr_26050_26096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (9))){
var inst_26001 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26051_26097 = state_26024__$1;
(statearr_26051_26097[(2)] = inst_26001);

(statearr_26051_26097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (5))){
var inst_25962 = cljs.core.deref.call(null,mults);
var inst_25963 = cljs.core.vals.call(null,inst_25962);
var inst_25964 = cljs.core.seq.call(null,inst_25963);
var inst_25965 = inst_25964;
var inst_25966 = null;
var inst_25967 = (0);
var inst_25968 = (0);
var state_26024__$1 = (function (){var statearr_26052 = state_26024;
(statearr_26052[(12)] = inst_25968);

(statearr_26052[(14)] = inst_25966);

(statearr_26052[(15)] = inst_25967);

(statearr_26052[(16)] = inst_25965);

return statearr_26052;
})();
var statearr_26053_26098 = state_26024__$1;
(statearr_26053_26098[(2)] = null);

(statearr_26053_26098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (14))){
var state_26024__$1 = state_26024;
var statearr_26057_26099 = state_26024__$1;
(statearr_26057_26099[(2)] = null);

(statearr_26057_26099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (16))){
var inst_25979 = (state_26024[(10)]);
var inst_25983 = cljs.core.chunk_first.call(null,inst_25979);
var inst_25984 = cljs.core.chunk_rest.call(null,inst_25979);
var inst_25985 = cljs.core.count.call(null,inst_25983);
var inst_25965 = inst_25984;
var inst_25966 = inst_25983;
var inst_25967 = inst_25985;
var inst_25968 = (0);
var state_26024__$1 = (function (){var statearr_26058 = state_26024;
(statearr_26058[(12)] = inst_25968);

(statearr_26058[(14)] = inst_25966);

(statearr_26058[(15)] = inst_25967);

(statearr_26058[(16)] = inst_25965);

return statearr_26058;
})();
var statearr_26059_26100 = state_26024__$1;
(statearr_26059_26100[(2)] = null);

(statearr_26059_26100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (10))){
var inst_25968 = (state_26024[(12)]);
var inst_25966 = (state_26024[(14)]);
var inst_25967 = (state_26024[(15)]);
var inst_25965 = (state_26024[(16)]);
var inst_25973 = cljs.core._nth.call(null,inst_25966,inst_25968);
var inst_25974 = cljs.core.async.muxch_STAR_.call(null,inst_25973);
var inst_25975 = cljs.core.async.close_BANG_.call(null,inst_25974);
var inst_25976 = (inst_25968 + (1));
var tmp26054 = inst_25966;
var tmp26055 = inst_25967;
var tmp26056 = inst_25965;
var inst_25965__$1 = tmp26056;
var inst_25966__$1 = tmp26054;
var inst_25967__$1 = tmp26055;
var inst_25968__$1 = inst_25976;
var state_26024__$1 = (function (){var statearr_26060 = state_26024;
(statearr_26060[(12)] = inst_25968__$1);

(statearr_26060[(14)] = inst_25966__$1);

(statearr_26060[(15)] = inst_25967__$1);

(statearr_26060[(16)] = inst_25965__$1);

(statearr_26060[(17)] = inst_25975);

return statearr_26060;
})();
var statearr_26061_26101 = state_26024__$1;
(statearr_26061_26101[(2)] = null);

(statearr_26061_26101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (18))){
var inst_25994 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26062_26102 = state_26024__$1;
(statearr_26062_26102[(2)] = inst_25994);

(statearr_26062_26102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (8))){
var inst_25968 = (state_26024[(12)]);
var inst_25967 = (state_26024[(15)]);
var inst_25970 = (inst_25968 < inst_25967);
var inst_25971 = inst_25970;
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_25971)){
var statearr_26063_26103 = state_26024__$1;
(statearr_26063_26103[(1)] = (10));

} else {
var statearr_26064_26104 = state_26024__$1;
(statearr_26064_26104[(1)] = (11));

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
});})(c__24177__auto___26076,mults,ensure_mult,p))
;
return ((function (switch__24065__auto__,c__24177__auto___26076,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24066__auto__ = null;
var cljs$core$async$state_machine__24066__auto____0 = (function (){
var statearr_26068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26068[(0)] = cljs$core$async$state_machine__24066__auto__);

(statearr_26068[(1)] = (1));

return statearr_26068;
});
var cljs$core$async$state_machine__24066__auto____1 = (function (state_26024){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_26024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e26069){if((e26069 instanceof Object)){
var ex__24069__auto__ = e26069;
var statearr_26070_26105 = state_26024;
(statearr_26070_26105[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26106 = state_26024;
state_26024 = G__26106;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$state_machine__24066__auto__ = function(state_26024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24066__auto____1.call(this,state_26024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24066__auto____0;
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24066__auto____1;
return cljs$core$async$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___26076,mults,ensure_mult,p))
})();
var state__24179__auto__ = (function (){var statearr_26071 = f__24178__auto__.call(null);
(statearr_26071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___26076);

return statearr_26071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___26076,mults,ensure_mult,p))
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
var args26107 = [];
var len__17765__auto___26110 = arguments.length;
var i__17766__auto___26111 = (0);
while(true){
if((i__17766__auto___26111 < len__17765__auto___26110)){
args26107.push((arguments[i__17766__auto___26111]));

var G__26112 = (i__17766__auto___26111 + (1));
i__17766__auto___26111 = G__26112;
continue;
} else {
}
break;
}

var G__26109 = args26107.length;
switch (G__26109) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26107.length)].join('')));

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
var args26114 = [];
var len__17765__auto___26117 = arguments.length;
var i__17766__auto___26118 = (0);
while(true){
if((i__17766__auto___26118 < len__17765__auto___26117)){
args26114.push((arguments[i__17766__auto___26118]));

var G__26119 = (i__17766__auto___26118 + (1));
i__17766__auto___26118 = G__26119;
continue;
} else {
}
break;
}

var G__26116 = args26114.length;
switch (G__26116) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26114.length)].join('')));

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
var args26121 = [];
var len__17765__auto___26192 = arguments.length;
var i__17766__auto___26193 = (0);
while(true){
if((i__17766__auto___26193 < len__17765__auto___26192)){
args26121.push((arguments[i__17766__auto___26193]));

var G__26194 = (i__17766__auto___26193 + (1));
i__17766__auto___26193 = G__26194;
continue;
} else {
}
break;
}

var G__26123 = args26121.length;
switch (G__26123) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26121.length)].join('')));

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
var c__24177__auto___26196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___26196,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___26196,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26162){
var state_val_26163 = (state_26162[(1)]);
if((state_val_26163 === (7))){
var state_26162__$1 = state_26162;
var statearr_26164_26197 = state_26162__$1;
(statearr_26164_26197[(2)] = null);

(statearr_26164_26197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (1))){
var state_26162__$1 = state_26162;
var statearr_26165_26198 = state_26162__$1;
(statearr_26165_26198[(2)] = null);

(statearr_26165_26198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (4))){
var inst_26126 = (state_26162[(7)]);
var inst_26128 = (inst_26126 < cnt);
var state_26162__$1 = state_26162;
if(cljs.core.truth_(inst_26128)){
var statearr_26166_26199 = state_26162__$1;
(statearr_26166_26199[(1)] = (6));

} else {
var statearr_26167_26200 = state_26162__$1;
(statearr_26167_26200[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (15))){
var inst_26158 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26168_26201 = state_26162__$1;
(statearr_26168_26201[(2)] = inst_26158);

(statearr_26168_26201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (13))){
var inst_26151 = cljs.core.async.close_BANG_.call(null,out);
var state_26162__$1 = state_26162;
var statearr_26169_26202 = state_26162__$1;
(statearr_26169_26202[(2)] = inst_26151);

(statearr_26169_26202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (6))){
var state_26162__$1 = state_26162;
var statearr_26170_26203 = state_26162__$1;
(statearr_26170_26203[(2)] = null);

(statearr_26170_26203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (3))){
var inst_26160 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26162__$1,inst_26160);
} else {
if((state_val_26163 === (12))){
var inst_26148 = (state_26162[(8)]);
var inst_26148__$1 = (state_26162[(2)]);
var inst_26149 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26148__$1);
var state_26162__$1 = (function (){var statearr_26171 = state_26162;
(statearr_26171[(8)] = inst_26148__$1);

return statearr_26171;
})();
if(cljs.core.truth_(inst_26149)){
var statearr_26172_26204 = state_26162__$1;
(statearr_26172_26204[(1)] = (13));

} else {
var statearr_26173_26205 = state_26162__$1;
(statearr_26173_26205[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (2))){
var inst_26125 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26126 = (0);
var state_26162__$1 = (function (){var statearr_26174 = state_26162;
(statearr_26174[(7)] = inst_26126);

(statearr_26174[(9)] = inst_26125);

return statearr_26174;
})();
var statearr_26175_26206 = state_26162__$1;
(statearr_26175_26206[(2)] = null);

(statearr_26175_26206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (11))){
var inst_26126 = (state_26162[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26162,(10),Object,null,(9));
var inst_26135 = chs__$1.call(null,inst_26126);
var inst_26136 = done.call(null,inst_26126);
var inst_26137 = cljs.core.async.take_BANG_.call(null,inst_26135,inst_26136);
var state_26162__$1 = state_26162;
var statearr_26176_26207 = state_26162__$1;
(statearr_26176_26207[(2)] = inst_26137);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (9))){
var inst_26126 = (state_26162[(7)]);
var inst_26139 = (state_26162[(2)]);
var inst_26140 = (inst_26126 + (1));
var inst_26126__$1 = inst_26140;
var state_26162__$1 = (function (){var statearr_26177 = state_26162;
(statearr_26177[(7)] = inst_26126__$1);

(statearr_26177[(10)] = inst_26139);

return statearr_26177;
})();
var statearr_26178_26208 = state_26162__$1;
(statearr_26178_26208[(2)] = null);

(statearr_26178_26208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (5))){
var inst_26146 = (state_26162[(2)]);
var state_26162__$1 = (function (){var statearr_26179 = state_26162;
(statearr_26179[(11)] = inst_26146);

return statearr_26179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26162__$1,(12),dchan);
} else {
if((state_val_26163 === (14))){
var inst_26148 = (state_26162[(8)]);
var inst_26153 = cljs.core.apply.call(null,f,inst_26148);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26162__$1,(16),out,inst_26153);
} else {
if((state_val_26163 === (16))){
var inst_26155 = (state_26162[(2)]);
var state_26162__$1 = (function (){var statearr_26180 = state_26162;
(statearr_26180[(12)] = inst_26155);

return statearr_26180;
})();
var statearr_26181_26209 = state_26162__$1;
(statearr_26181_26209[(2)] = null);

(statearr_26181_26209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (10))){
var inst_26130 = (state_26162[(2)]);
var inst_26131 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26162__$1 = (function (){var statearr_26182 = state_26162;
(statearr_26182[(13)] = inst_26130);

return statearr_26182;
})();
var statearr_26183_26210 = state_26162__$1;
(statearr_26183_26210[(2)] = inst_26131);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (8))){
var inst_26144 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26184_26211 = state_26162__$1;
(statearr_26184_26211[(2)] = inst_26144);

(statearr_26184_26211[(1)] = (5));


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
});})(c__24177__auto___26196,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24065__auto__,c__24177__auto___26196,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24066__auto__ = null;
var cljs$core$async$state_machine__24066__auto____0 = (function (){
var statearr_26188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26188[(0)] = cljs$core$async$state_machine__24066__auto__);

(statearr_26188[(1)] = (1));

return statearr_26188;
});
var cljs$core$async$state_machine__24066__auto____1 = (function (state_26162){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_26162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e26189){if((e26189 instanceof Object)){
var ex__24069__auto__ = e26189;
var statearr_26190_26212 = state_26162;
(statearr_26190_26212[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26213 = state_26162;
state_26162 = G__26213;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$state_machine__24066__auto__ = function(state_26162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24066__auto____1.call(this,state_26162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24066__auto____0;
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24066__auto____1;
return cljs$core$async$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___26196,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24179__auto__ = (function (){var statearr_26191 = f__24178__auto__.call(null);
(statearr_26191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___26196);

return statearr_26191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___26196,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26215 = [];
var len__17765__auto___26271 = arguments.length;
var i__17766__auto___26272 = (0);
while(true){
if((i__17766__auto___26272 < len__17765__auto___26271)){
args26215.push((arguments[i__17766__auto___26272]));

var G__26273 = (i__17766__auto___26272 + (1));
i__17766__auto___26272 = G__26273;
continue;
} else {
}
break;
}

var G__26217 = args26215.length;
switch (G__26217) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26215.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24177__auto___26275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___26275,out){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___26275,out){
return (function (state_26247){
var state_val_26248 = (state_26247[(1)]);
if((state_val_26248 === (7))){
var inst_26227 = (state_26247[(7)]);
var inst_26226 = (state_26247[(8)]);
var inst_26226__$1 = (state_26247[(2)]);
var inst_26227__$1 = cljs.core.nth.call(null,inst_26226__$1,(0),null);
var inst_26228 = cljs.core.nth.call(null,inst_26226__$1,(1),null);
var inst_26229 = (inst_26227__$1 == null);
var state_26247__$1 = (function (){var statearr_26249 = state_26247;
(statearr_26249[(9)] = inst_26228);

(statearr_26249[(7)] = inst_26227__$1);

(statearr_26249[(8)] = inst_26226__$1);

return statearr_26249;
})();
if(cljs.core.truth_(inst_26229)){
var statearr_26250_26276 = state_26247__$1;
(statearr_26250_26276[(1)] = (8));

} else {
var statearr_26251_26277 = state_26247__$1;
(statearr_26251_26277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (1))){
var inst_26218 = cljs.core.vec.call(null,chs);
var inst_26219 = inst_26218;
var state_26247__$1 = (function (){var statearr_26252 = state_26247;
(statearr_26252[(10)] = inst_26219);

return statearr_26252;
})();
var statearr_26253_26278 = state_26247__$1;
(statearr_26253_26278[(2)] = null);

(statearr_26253_26278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (4))){
var inst_26219 = (state_26247[(10)]);
var state_26247__$1 = state_26247;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26247__$1,(7),inst_26219);
} else {
if((state_val_26248 === (6))){
var inst_26243 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
var statearr_26254_26279 = state_26247__$1;
(statearr_26254_26279[(2)] = inst_26243);

(statearr_26254_26279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (3))){
var inst_26245 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26247__$1,inst_26245);
} else {
if((state_val_26248 === (2))){
var inst_26219 = (state_26247[(10)]);
var inst_26221 = cljs.core.count.call(null,inst_26219);
var inst_26222 = (inst_26221 > (0));
var state_26247__$1 = state_26247;
if(cljs.core.truth_(inst_26222)){
var statearr_26256_26280 = state_26247__$1;
(statearr_26256_26280[(1)] = (4));

} else {
var statearr_26257_26281 = state_26247__$1;
(statearr_26257_26281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (11))){
var inst_26219 = (state_26247[(10)]);
var inst_26236 = (state_26247[(2)]);
var tmp26255 = inst_26219;
var inst_26219__$1 = tmp26255;
var state_26247__$1 = (function (){var statearr_26258 = state_26247;
(statearr_26258[(10)] = inst_26219__$1);

(statearr_26258[(11)] = inst_26236);

return statearr_26258;
})();
var statearr_26259_26282 = state_26247__$1;
(statearr_26259_26282[(2)] = null);

(statearr_26259_26282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (9))){
var inst_26227 = (state_26247[(7)]);
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26247__$1,(11),out,inst_26227);
} else {
if((state_val_26248 === (5))){
var inst_26241 = cljs.core.async.close_BANG_.call(null,out);
var state_26247__$1 = state_26247;
var statearr_26260_26283 = state_26247__$1;
(statearr_26260_26283[(2)] = inst_26241);

(statearr_26260_26283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (10))){
var inst_26239 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
var statearr_26261_26284 = state_26247__$1;
(statearr_26261_26284[(2)] = inst_26239);

(statearr_26261_26284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (8))){
var inst_26219 = (state_26247[(10)]);
var inst_26228 = (state_26247[(9)]);
var inst_26227 = (state_26247[(7)]);
var inst_26226 = (state_26247[(8)]);
var inst_26231 = (function (){var cs = inst_26219;
var vec__26224 = inst_26226;
var v = inst_26227;
var c = inst_26228;
return ((function (cs,vec__26224,v,c,inst_26219,inst_26228,inst_26227,inst_26226,state_val_26248,c__24177__auto___26275,out){
return (function (p1__26214_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26214_SHARP_);
});
;})(cs,vec__26224,v,c,inst_26219,inst_26228,inst_26227,inst_26226,state_val_26248,c__24177__auto___26275,out))
})();
var inst_26232 = cljs.core.filterv.call(null,inst_26231,inst_26219);
var inst_26219__$1 = inst_26232;
var state_26247__$1 = (function (){var statearr_26262 = state_26247;
(statearr_26262[(10)] = inst_26219__$1);

return statearr_26262;
})();
var statearr_26263_26285 = state_26247__$1;
(statearr_26263_26285[(2)] = null);

(statearr_26263_26285[(1)] = (2));


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
});})(c__24177__auto___26275,out))
;
return ((function (switch__24065__auto__,c__24177__auto___26275,out){
return (function() {
var cljs$core$async$state_machine__24066__auto__ = null;
var cljs$core$async$state_machine__24066__auto____0 = (function (){
var statearr_26267 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26267[(0)] = cljs$core$async$state_machine__24066__auto__);

(statearr_26267[(1)] = (1));

return statearr_26267;
});
var cljs$core$async$state_machine__24066__auto____1 = (function (state_26247){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_26247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e26268){if((e26268 instanceof Object)){
var ex__24069__auto__ = e26268;
var statearr_26269_26286 = state_26247;
(statearr_26269_26286[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26287 = state_26247;
state_26247 = G__26287;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$state_machine__24066__auto__ = function(state_26247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24066__auto____1.call(this,state_26247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24066__auto____0;
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24066__auto____1;
return cljs$core$async$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___26275,out))
})();
var state__24179__auto__ = (function (){var statearr_26270 = f__24178__auto__.call(null);
(statearr_26270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___26275);

return statearr_26270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___26275,out))
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
var args26288 = [];
var len__17765__auto___26337 = arguments.length;
var i__17766__auto___26338 = (0);
while(true){
if((i__17766__auto___26338 < len__17765__auto___26337)){
args26288.push((arguments[i__17766__auto___26338]));

var G__26339 = (i__17766__auto___26338 + (1));
i__17766__auto___26338 = G__26339;
continue;
} else {
}
break;
}

var G__26290 = args26288.length;
switch (G__26290) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26288.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24177__auto___26341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___26341,out){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___26341,out){
return (function (state_26314){
var state_val_26315 = (state_26314[(1)]);
if((state_val_26315 === (7))){
var inst_26296 = (state_26314[(7)]);
var inst_26296__$1 = (state_26314[(2)]);
var inst_26297 = (inst_26296__$1 == null);
var inst_26298 = cljs.core.not.call(null,inst_26297);
var state_26314__$1 = (function (){var statearr_26316 = state_26314;
(statearr_26316[(7)] = inst_26296__$1);

return statearr_26316;
})();
if(inst_26298){
var statearr_26317_26342 = state_26314__$1;
(statearr_26317_26342[(1)] = (8));

} else {
var statearr_26318_26343 = state_26314__$1;
(statearr_26318_26343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (1))){
var inst_26291 = (0);
var state_26314__$1 = (function (){var statearr_26319 = state_26314;
(statearr_26319[(8)] = inst_26291);

return statearr_26319;
})();
var statearr_26320_26344 = state_26314__$1;
(statearr_26320_26344[(2)] = null);

(statearr_26320_26344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (4))){
var state_26314__$1 = state_26314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26314__$1,(7),ch);
} else {
if((state_val_26315 === (6))){
var inst_26309 = (state_26314[(2)]);
var state_26314__$1 = state_26314;
var statearr_26321_26345 = state_26314__$1;
(statearr_26321_26345[(2)] = inst_26309);

(statearr_26321_26345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (3))){
var inst_26311 = (state_26314[(2)]);
var inst_26312 = cljs.core.async.close_BANG_.call(null,out);
var state_26314__$1 = (function (){var statearr_26322 = state_26314;
(statearr_26322[(9)] = inst_26311);

return statearr_26322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26314__$1,inst_26312);
} else {
if((state_val_26315 === (2))){
var inst_26291 = (state_26314[(8)]);
var inst_26293 = (inst_26291 < n);
var state_26314__$1 = state_26314;
if(cljs.core.truth_(inst_26293)){
var statearr_26323_26346 = state_26314__$1;
(statearr_26323_26346[(1)] = (4));

} else {
var statearr_26324_26347 = state_26314__$1;
(statearr_26324_26347[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (11))){
var inst_26291 = (state_26314[(8)]);
var inst_26301 = (state_26314[(2)]);
var inst_26302 = (inst_26291 + (1));
var inst_26291__$1 = inst_26302;
var state_26314__$1 = (function (){var statearr_26325 = state_26314;
(statearr_26325[(10)] = inst_26301);

(statearr_26325[(8)] = inst_26291__$1);

return statearr_26325;
})();
var statearr_26326_26348 = state_26314__$1;
(statearr_26326_26348[(2)] = null);

(statearr_26326_26348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (9))){
var state_26314__$1 = state_26314;
var statearr_26327_26349 = state_26314__$1;
(statearr_26327_26349[(2)] = null);

(statearr_26327_26349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (5))){
var state_26314__$1 = state_26314;
var statearr_26328_26350 = state_26314__$1;
(statearr_26328_26350[(2)] = null);

(statearr_26328_26350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (10))){
var inst_26306 = (state_26314[(2)]);
var state_26314__$1 = state_26314;
var statearr_26329_26351 = state_26314__$1;
(statearr_26329_26351[(2)] = inst_26306);

(statearr_26329_26351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (8))){
var inst_26296 = (state_26314[(7)]);
var state_26314__$1 = state_26314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26314__$1,(11),out,inst_26296);
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
});})(c__24177__auto___26341,out))
;
return ((function (switch__24065__auto__,c__24177__auto___26341,out){
return (function() {
var cljs$core$async$state_machine__24066__auto__ = null;
var cljs$core$async$state_machine__24066__auto____0 = (function (){
var statearr_26333 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26333[(0)] = cljs$core$async$state_machine__24066__auto__);

(statearr_26333[(1)] = (1));

return statearr_26333;
});
var cljs$core$async$state_machine__24066__auto____1 = (function (state_26314){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_26314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e26334){if((e26334 instanceof Object)){
var ex__24069__auto__ = e26334;
var statearr_26335_26352 = state_26314;
(statearr_26335_26352[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26353 = state_26314;
state_26314 = G__26353;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$state_machine__24066__auto__ = function(state_26314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24066__auto____1.call(this,state_26314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24066__auto____0;
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24066__auto____1;
return cljs$core$async$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___26341,out))
})();
var state__24179__auto__ = (function (){var statearr_26336 = f__24178__auto__.call(null);
(statearr_26336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___26341);

return statearr_26336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___26341,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26361 = (function (map_LT_,f,ch,meta26362){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26362 = meta26362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26363,meta26362__$1){
var self__ = this;
var _26363__$1 = this;
return (new cljs.core.async.t_cljs$core$async26361(self__.map_LT_,self__.f,self__.ch,meta26362__$1));
});

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26363){
var self__ = this;
var _26363__$1 = this;
return self__.meta26362;
});

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26364 = (function (map_LT_,f,ch,meta26362,_,fn1,meta26365){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26362 = meta26362;
this._ = _;
this.fn1 = fn1;
this.meta26365 = meta26365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26366,meta26365__$1){
var self__ = this;
var _26366__$1 = this;
return (new cljs.core.async.t_cljs$core$async26364(self__.map_LT_,self__.f,self__.ch,self__.meta26362,self__._,self__.fn1,meta26365__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26366){
var self__ = this;
var _26366__$1 = this;
return self__.meta26365;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26354_SHARP_){
return f1.call(null,(((p1__26354_SHARP_ == null))?null:self__.f.call(null,p1__26354_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26364.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26362","meta26362",1820502249,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26361","cljs.core.async/t_cljs$core$async26361",-1165431330,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26365","meta26365",1940771259,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26364";

cljs.core.async.t_cljs$core$async26364.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17305__auto__,writer__17306__auto__,opt__17307__auto__){
return cljs.core._write.call(null,writer__17306__auto__,"cljs.core.async/t_cljs$core$async26364");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26364 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26364(map_LT___$1,f__$1,ch__$1,meta26362__$1,___$2,fn1__$1,meta26365){
return (new cljs.core.async.t_cljs$core$async26364(map_LT___$1,f__$1,ch__$1,meta26362__$1,___$2,fn1__$1,meta26365));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26364(self__.map_LT_,self__.f,self__.ch,self__.meta26362,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16695__auto__ = ret;
if(cljs.core.truth_(and__16695__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16695__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26362","meta26362",1820502249,null)], null);
});

cljs.core.async.t_cljs$core$async26361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26361";

cljs.core.async.t_cljs$core$async26361.cljs$lang$ctorPrWriter = (function (this__17305__auto__,writer__17306__auto__,opt__17307__auto__){
return cljs.core._write.call(null,writer__17306__auto__,"cljs.core.async/t_cljs$core$async26361");
});

cljs.core.async.__GT_t_cljs$core$async26361 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26361(map_LT___$1,f__$1,ch__$1,meta26362){
return (new cljs.core.async.t_cljs$core$async26361(map_LT___$1,f__$1,ch__$1,meta26362));
});

}

return (new cljs.core.async.t_cljs$core$async26361(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26370 = (function (map_GT_,f,ch,meta26371){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26371 = meta26371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26372,meta26371__$1){
var self__ = this;
var _26372__$1 = this;
return (new cljs.core.async.t_cljs$core$async26370(self__.map_GT_,self__.f,self__.ch,meta26371__$1));
});

cljs.core.async.t_cljs$core$async26370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26372){
var self__ = this;
var _26372__$1 = this;
return self__.meta26371;
});

cljs.core.async.t_cljs$core$async26370.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26370.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26370.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26371","meta26371",-1470178877,null)], null);
});

cljs.core.async.t_cljs$core$async26370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26370";

cljs.core.async.t_cljs$core$async26370.cljs$lang$ctorPrWriter = (function (this__17305__auto__,writer__17306__auto__,opt__17307__auto__){
return cljs.core._write.call(null,writer__17306__auto__,"cljs.core.async/t_cljs$core$async26370");
});

cljs.core.async.__GT_t_cljs$core$async26370 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26370(map_GT___$1,f__$1,ch__$1,meta26371){
return (new cljs.core.async.t_cljs$core$async26370(map_GT___$1,f__$1,ch__$1,meta26371));
});

}

return (new cljs.core.async.t_cljs$core$async26370(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26376 = (function (filter_GT_,p,ch,meta26377){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26377 = meta26377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26378,meta26377__$1){
var self__ = this;
var _26378__$1 = this;
return (new cljs.core.async.t_cljs$core$async26376(self__.filter_GT_,self__.p,self__.ch,meta26377__$1));
});

cljs.core.async.t_cljs$core$async26376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26378){
var self__ = this;
var _26378__$1 = this;
return self__.meta26377;
});

cljs.core.async.t_cljs$core$async26376.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26376.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26376.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26376.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26377","meta26377",-1845564313,null)], null);
});

cljs.core.async.t_cljs$core$async26376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26376";

cljs.core.async.t_cljs$core$async26376.cljs$lang$ctorPrWriter = (function (this__17305__auto__,writer__17306__auto__,opt__17307__auto__){
return cljs.core._write.call(null,writer__17306__auto__,"cljs.core.async/t_cljs$core$async26376");
});

cljs.core.async.__GT_t_cljs$core$async26376 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26376(filter_GT___$1,p__$1,ch__$1,meta26377){
return (new cljs.core.async.t_cljs$core$async26376(filter_GT___$1,p__$1,ch__$1,meta26377));
});

}

return (new cljs.core.async.t_cljs$core$async26376(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26379 = [];
var len__17765__auto___26423 = arguments.length;
var i__17766__auto___26424 = (0);
while(true){
if((i__17766__auto___26424 < len__17765__auto___26423)){
args26379.push((arguments[i__17766__auto___26424]));

var G__26425 = (i__17766__auto___26424 + (1));
i__17766__auto___26424 = G__26425;
continue;
} else {
}
break;
}

var G__26381 = args26379.length;
switch (G__26381) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26379.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24177__auto___26427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___26427,out){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___26427,out){
return (function (state_26402){
var state_val_26403 = (state_26402[(1)]);
if((state_val_26403 === (7))){
var inst_26398 = (state_26402[(2)]);
var state_26402__$1 = state_26402;
var statearr_26404_26428 = state_26402__$1;
(statearr_26404_26428[(2)] = inst_26398);

(statearr_26404_26428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (1))){
var state_26402__$1 = state_26402;
var statearr_26405_26429 = state_26402__$1;
(statearr_26405_26429[(2)] = null);

(statearr_26405_26429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (4))){
var inst_26384 = (state_26402[(7)]);
var inst_26384__$1 = (state_26402[(2)]);
var inst_26385 = (inst_26384__$1 == null);
var state_26402__$1 = (function (){var statearr_26406 = state_26402;
(statearr_26406[(7)] = inst_26384__$1);

return statearr_26406;
})();
if(cljs.core.truth_(inst_26385)){
var statearr_26407_26430 = state_26402__$1;
(statearr_26407_26430[(1)] = (5));

} else {
var statearr_26408_26431 = state_26402__$1;
(statearr_26408_26431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (6))){
var inst_26384 = (state_26402[(7)]);
var inst_26389 = p.call(null,inst_26384);
var state_26402__$1 = state_26402;
if(cljs.core.truth_(inst_26389)){
var statearr_26409_26432 = state_26402__$1;
(statearr_26409_26432[(1)] = (8));

} else {
var statearr_26410_26433 = state_26402__$1;
(statearr_26410_26433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (3))){
var inst_26400 = (state_26402[(2)]);
var state_26402__$1 = state_26402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26402__$1,inst_26400);
} else {
if((state_val_26403 === (2))){
var state_26402__$1 = state_26402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26402__$1,(4),ch);
} else {
if((state_val_26403 === (11))){
var inst_26392 = (state_26402[(2)]);
var state_26402__$1 = state_26402;
var statearr_26411_26434 = state_26402__$1;
(statearr_26411_26434[(2)] = inst_26392);

(statearr_26411_26434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (9))){
var state_26402__$1 = state_26402;
var statearr_26412_26435 = state_26402__$1;
(statearr_26412_26435[(2)] = null);

(statearr_26412_26435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (5))){
var inst_26387 = cljs.core.async.close_BANG_.call(null,out);
var state_26402__$1 = state_26402;
var statearr_26413_26436 = state_26402__$1;
(statearr_26413_26436[(2)] = inst_26387);

(statearr_26413_26436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (10))){
var inst_26395 = (state_26402[(2)]);
var state_26402__$1 = (function (){var statearr_26414 = state_26402;
(statearr_26414[(8)] = inst_26395);

return statearr_26414;
})();
var statearr_26415_26437 = state_26402__$1;
(statearr_26415_26437[(2)] = null);

(statearr_26415_26437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (8))){
var inst_26384 = (state_26402[(7)]);
var state_26402__$1 = state_26402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26402__$1,(11),out,inst_26384);
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
});})(c__24177__auto___26427,out))
;
return ((function (switch__24065__auto__,c__24177__auto___26427,out){
return (function() {
var cljs$core$async$state_machine__24066__auto__ = null;
var cljs$core$async$state_machine__24066__auto____0 = (function (){
var statearr_26419 = [null,null,null,null,null,null,null,null,null];
(statearr_26419[(0)] = cljs$core$async$state_machine__24066__auto__);

(statearr_26419[(1)] = (1));

return statearr_26419;
});
var cljs$core$async$state_machine__24066__auto____1 = (function (state_26402){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_26402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e26420){if((e26420 instanceof Object)){
var ex__24069__auto__ = e26420;
var statearr_26421_26438 = state_26402;
(statearr_26421_26438[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26439 = state_26402;
state_26402 = G__26439;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$state_machine__24066__auto__ = function(state_26402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24066__auto____1.call(this,state_26402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24066__auto____0;
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24066__auto____1;
return cljs$core$async$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___26427,out))
})();
var state__24179__auto__ = (function (){var statearr_26422 = f__24178__auto__.call(null);
(statearr_26422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___26427);

return statearr_26422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___26427,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26440 = [];
var len__17765__auto___26443 = arguments.length;
var i__17766__auto___26444 = (0);
while(true){
if((i__17766__auto___26444 < len__17765__auto___26443)){
args26440.push((arguments[i__17766__auto___26444]));

var G__26445 = (i__17766__auto___26444 + (1));
i__17766__auto___26444 = G__26445;
continue;
} else {
}
break;
}

var G__26442 = args26440.length;
switch (G__26442) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26440.length)].join('')));

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
var c__24177__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto__){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto__){
return (function (state_26612){
var state_val_26613 = (state_26612[(1)]);
if((state_val_26613 === (7))){
var inst_26608 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26614_26655 = state_26612__$1;
(statearr_26614_26655[(2)] = inst_26608);

(statearr_26614_26655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (20))){
var inst_26578 = (state_26612[(7)]);
var inst_26589 = (state_26612[(2)]);
var inst_26590 = cljs.core.next.call(null,inst_26578);
var inst_26564 = inst_26590;
var inst_26565 = null;
var inst_26566 = (0);
var inst_26567 = (0);
var state_26612__$1 = (function (){var statearr_26615 = state_26612;
(statearr_26615[(8)] = inst_26589);

(statearr_26615[(9)] = inst_26564);

(statearr_26615[(10)] = inst_26567);

(statearr_26615[(11)] = inst_26566);

(statearr_26615[(12)] = inst_26565);

return statearr_26615;
})();
var statearr_26616_26656 = state_26612__$1;
(statearr_26616_26656[(2)] = null);

(statearr_26616_26656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (1))){
var state_26612__$1 = state_26612;
var statearr_26617_26657 = state_26612__$1;
(statearr_26617_26657[(2)] = null);

(statearr_26617_26657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (4))){
var inst_26553 = (state_26612[(13)]);
var inst_26553__$1 = (state_26612[(2)]);
var inst_26554 = (inst_26553__$1 == null);
var state_26612__$1 = (function (){var statearr_26618 = state_26612;
(statearr_26618[(13)] = inst_26553__$1);

return statearr_26618;
})();
if(cljs.core.truth_(inst_26554)){
var statearr_26619_26658 = state_26612__$1;
(statearr_26619_26658[(1)] = (5));

} else {
var statearr_26620_26659 = state_26612__$1;
(statearr_26620_26659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (15))){
var state_26612__$1 = state_26612;
var statearr_26624_26660 = state_26612__$1;
(statearr_26624_26660[(2)] = null);

(statearr_26624_26660[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (21))){
var state_26612__$1 = state_26612;
var statearr_26625_26661 = state_26612__$1;
(statearr_26625_26661[(2)] = null);

(statearr_26625_26661[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (13))){
var inst_26564 = (state_26612[(9)]);
var inst_26567 = (state_26612[(10)]);
var inst_26566 = (state_26612[(11)]);
var inst_26565 = (state_26612[(12)]);
var inst_26574 = (state_26612[(2)]);
var inst_26575 = (inst_26567 + (1));
var tmp26621 = inst_26564;
var tmp26622 = inst_26566;
var tmp26623 = inst_26565;
var inst_26564__$1 = tmp26621;
var inst_26565__$1 = tmp26623;
var inst_26566__$1 = tmp26622;
var inst_26567__$1 = inst_26575;
var state_26612__$1 = (function (){var statearr_26626 = state_26612;
(statearr_26626[(9)] = inst_26564__$1);

(statearr_26626[(10)] = inst_26567__$1);

(statearr_26626[(11)] = inst_26566__$1);

(statearr_26626[(12)] = inst_26565__$1);

(statearr_26626[(14)] = inst_26574);

return statearr_26626;
})();
var statearr_26627_26662 = state_26612__$1;
(statearr_26627_26662[(2)] = null);

(statearr_26627_26662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (22))){
var state_26612__$1 = state_26612;
var statearr_26628_26663 = state_26612__$1;
(statearr_26628_26663[(2)] = null);

(statearr_26628_26663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (6))){
var inst_26553 = (state_26612[(13)]);
var inst_26562 = f.call(null,inst_26553);
var inst_26563 = cljs.core.seq.call(null,inst_26562);
var inst_26564 = inst_26563;
var inst_26565 = null;
var inst_26566 = (0);
var inst_26567 = (0);
var state_26612__$1 = (function (){var statearr_26629 = state_26612;
(statearr_26629[(9)] = inst_26564);

(statearr_26629[(10)] = inst_26567);

(statearr_26629[(11)] = inst_26566);

(statearr_26629[(12)] = inst_26565);

return statearr_26629;
})();
var statearr_26630_26664 = state_26612__$1;
(statearr_26630_26664[(2)] = null);

(statearr_26630_26664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (17))){
var inst_26578 = (state_26612[(7)]);
var inst_26582 = cljs.core.chunk_first.call(null,inst_26578);
var inst_26583 = cljs.core.chunk_rest.call(null,inst_26578);
var inst_26584 = cljs.core.count.call(null,inst_26582);
var inst_26564 = inst_26583;
var inst_26565 = inst_26582;
var inst_26566 = inst_26584;
var inst_26567 = (0);
var state_26612__$1 = (function (){var statearr_26631 = state_26612;
(statearr_26631[(9)] = inst_26564);

(statearr_26631[(10)] = inst_26567);

(statearr_26631[(11)] = inst_26566);

(statearr_26631[(12)] = inst_26565);

return statearr_26631;
})();
var statearr_26632_26665 = state_26612__$1;
(statearr_26632_26665[(2)] = null);

(statearr_26632_26665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (3))){
var inst_26610 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26612__$1,inst_26610);
} else {
if((state_val_26613 === (12))){
var inst_26598 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26633_26666 = state_26612__$1;
(statearr_26633_26666[(2)] = inst_26598);

(statearr_26633_26666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (2))){
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26612__$1,(4),in$);
} else {
if((state_val_26613 === (23))){
var inst_26606 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26634_26667 = state_26612__$1;
(statearr_26634_26667[(2)] = inst_26606);

(statearr_26634_26667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (19))){
var inst_26593 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26635_26668 = state_26612__$1;
(statearr_26635_26668[(2)] = inst_26593);

(statearr_26635_26668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (11))){
var inst_26564 = (state_26612[(9)]);
var inst_26578 = (state_26612[(7)]);
var inst_26578__$1 = cljs.core.seq.call(null,inst_26564);
var state_26612__$1 = (function (){var statearr_26636 = state_26612;
(statearr_26636[(7)] = inst_26578__$1);

return statearr_26636;
})();
if(inst_26578__$1){
var statearr_26637_26669 = state_26612__$1;
(statearr_26637_26669[(1)] = (14));

} else {
var statearr_26638_26670 = state_26612__$1;
(statearr_26638_26670[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (9))){
var inst_26600 = (state_26612[(2)]);
var inst_26601 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26612__$1 = (function (){var statearr_26639 = state_26612;
(statearr_26639[(15)] = inst_26600);

return statearr_26639;
})();
if(cljs.core.truth_(inst_26601)){
var statearr_26640_26671 = state_26612__$1;
(statearr_26640_26671[(1)] = (21));

} else {
var statearr_26641_26672 = state_26612__$1;
(statearr_26641_26672[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (5))){
var inst_26556 = cljs.core.async.close_BANG_.call(null,out);
var state_26612__$1 = state_26612;
var statearr_26642_26673 = state_26612__$1;
(statearr_26642_26673[(2)] = inst_26556);

(statearr_26642_26673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (14))){
var inst_26578 = (state_26612[(7)]);
var inst_26580 = cljs.core.chunked_seq_QMARK_.call(null,inst_26578);
var state_26612__$1 = state_26612;
if(inst_26580){
var statearr_26643_26674 = state_26612__$1;
(statearr_26643_26674[(1)] = (17));

} else {
var statearr_26644_26675 = state_26612__$1;
(statearr_26644_26675[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (16))){
var inst_26596 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26645_26676 = state_26612__$1;
(statearr_26645_26676[(2)] = inst_26596);

(statearr_26645_26676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (10))){
var inst_26567 = (state_26612[(10)]);
var inst_26565 = (state_26612[(12)]);
var inst_26572 = cljs.core._nth.call(null,inst_26565,inst_26567);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26612__$1,(13),out,inst_26572);
} else {
if((state_val_26613 === (18))){
var inst_26578 = (state_26612[(7)]);
var inst_26587 = cljs.core.first.call(null,inst_26578);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26612__$1,(20),out,inst_26587);
} else {
if((state_val_26613 === (8))){
var inst_26567 = (state_26612[(10)]);
var inst_26566 = (state_26612[(11)]);
var inst_26569 = (inst_26567 < inst_26566);
var inst_26570 = inst_26569;
var state_26612__$1 = state_26612;
if(cljs.core.truth_(inst_26570)){
var statearr_26646_26677 = state_26612__$1;
(statearr_26646_26677[(1)] = (10));

} else {
var statearr_26647_26678 = state_26612__$1;
(statearr_26647_26678[(1)] = (11));

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
});})(c__24177__auto__))
;
return ((function (switch__24065__auto__,c__24177__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24066__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24066__auto____0 = (function (){
var statearr_26651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26651[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24066__auto__);

(statearr_26651[(1)] = (1));

return statearr_26651;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24066__auto____1 = (function (state_26612){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_26612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e26652){if((e26652 instanceof Object)){
var ex__24069__auto__ = e26652;
var statearr_26653_26679 = state_26612;
(statearr_26653_26679[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26680 = state_26612;
state_26612 = G__26680;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24066__auto__ = function(state_26612){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24066__auto____1.call(this,state_26612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24066__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24066__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto__))
})();
var state__24179__auto__ = (function (){var statearr_26654 = f__24178__auto__.call(null);
(statearr_26654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto__);

return statearr_26654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto__))
);

return c__24177__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26681 = [];
var len__17765__auto___26684 = arguments.length;
var i__17766__auto___26685 = (0);
while(true){
if((i__17766__auto___26685 < len__17765__auto___26684)){
args26681.push((arguments[i__17766__auto___26685]));

var G__26686 = (i__17766__auto___26685 + (1));
i__17766__auto___26685 = G__26686;
continue;
} else {
}
break;
}

var G__26683 = args26681.length;
switch (G__26683) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26681.length)].join('')));

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
var args26688 = [];
var len__17765__auto___26691 = arguments.length;
var i__17766__auto___26692 = (0);
while(true){
if((i__17766__auto___26692 < len__17765__auto___26691)){
args26688.push((arguments[i__17766__auto___26692]));

var G__26693 = (i__17766__auto___26692 + (1));
i__17766__auto___26692 = G__26693;
continue;
} else {
}
break;
}

var G__26690 = args26688.length;
switch (G__26690) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26688.length)].join('')));

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
var args26695 = [];
var len__17765__auto___26746 = arguments.length;
var i__17766__auto___26747 = (0);
while(true){
if((i__17766__auto___26747 < len__17765__auto___26746)){
args26695.push((arguments[i__17766__auto___26747]));

var G__26748 = (i__17766__auto___26747 + (1));
i__17766__auto___26747 = G__26748;
continue;
} else {
}
break;
}

var G__26697 = args26695.length;
switch (G__26697) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26695.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24177__auto___26750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___26750,out){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___26750,out){
return (function (state_26721){
var state_val_26722 = (state_26721[(1)]);
if((state_val_26722 === (7))){
var inst_26716 = (state_26721[(2)]);
var state_26721__$1 = state_26721;
var statearr_26723_26751 = state_26721__$1;
(statearr_26723_26751[(2)] = inst_26716);

(statearr_26723_26751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (1))){
var inst_26698 = null;
var state_26721__$1 = (function (){var statearr_26724 = state_26721;
(statearr_26724[(7)] = inst_26698);

return statearr_26724;
})();
var statearr_26725_26752 = state_26721__$1;
(statearr_26725_26752[(2)] = null);

(statearr_26725_26752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (4))){
var inst_26701 = (state_26721[(8)]);
var inst_26701__$1 = (state_26721[(2)]);
var inst_26702 = (inst_26701__$1 == null);
var inst_26703 = cljs.core.not.call(null,inst_26702);
var state_26721__$1 = (function (){var statearr_26726 = state_26721;
(statearr_26726[(8)] = inst_26701__$1);

return statearr_26726;
})();
if(inst_26703){
var statearr_26727_26753 = state_26721__$1;
(statearr_26727_26753[(1)] = (5));

} else {
var statearr_26728_26754 = state_26721__$1;
(statearr_26728_26754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (6))){
var state_26721__$1 = state_26721;
var statearr_26729_26755 = state_26721__$1;
(statearr_26729_26755[(2)] = null);

(statearr_26729_26755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (3))){
var inst_26718 = (state_26721[(2)]);
var inst_26719 = cljs.core.async.close_BANG_.call(null,out);
var state_26721__$1 = (function (){var statearr_26730 = state_26721;
(statearr_26730[(9)] = inst_26718);

return statearr_26730;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26721__$1,inst_26719);
} else {
if((state_val_26722 === (2))){
var state_26721__$1 = state_26721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26721__$1,(4),ch);
} else {
if((state_val_26722 === (11))){
var inst_26701 = (state_26721[(8)]);
var inst_26710 = (state_26721[(2)]);
var inst_26698 = inst_26701;
var state_26721__$1 = (function (){var statearr_26731 = state_26721;
(statearr_26731[(7)] = inst_26698);

(statearr_26731[(10)] = inst_26710);

return statearr_26731;
})();
var statearr_26732_26756 = state_26721__$1;
(statearr_26732_26756[(2)] = null);

(statearr_26732_26756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (9))){
var inst_26701 = (state_26721[(8)]);
var state_26721__$1 = state_26721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26721__$1,(11),out,inst_26701);
} else {
if((state_val_26722 === (5))){
var inst_26698 = (state_26721[(7)]);
var inst_26701 = (state_26721[(8)]);
var inst_26705 = cljs.core._EQ_.call(null,inst_26701,inst_26698);
var state_26721__$1 = state_26721;
if(inst_26705){
var statearr_26734_26757 = state_26721__$1;
(statearr_26734_26757[(1)] = (8));

} else {
var statearr_26735_26758 = state_26721__$1;
(statearr_26735_26758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (10))){
var inst_26713 = (state_26721[(2)]);
var state_26721__$1 = state_26721;
var statearr_26736_26759 = state_26721__$1;
(statearr_26736_26759[(2)] = inst_26713);

(statearr_26736_26759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26722 === (8))){
var inst_26698 = (state_26721[(7)]);
var tmp26733 = inst_26698;
var inst_26698__$1 = tmp26733;
var state_26721__$1 = (function (){var statearr_26737 = state_26721;
(statearr_26737[(7)] = inst_26698__$1);

return statearr_26737;
})();
var statearr_26738_26760 = state_26721__$1;
(statearr_26738_26760[(2)] = null);

(statearr_26738_26760[(1)] = (2));


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
});})(c__24177__auto___26750,out))
;
return ((function (switch__24065__auto__,c__24177__auto___26750,out){
return (function() {
var cljs$core$async$state_machine__24066__auto__ = null;
var cljs$core$async$state_machine__24066__auto____0 = (function (){
var statearr_26742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26742[(0)] = cljs$core$async$state_machine__24066__auto__);

(statearr_26742[(1)] = (1));

return statearr_26742;
});
var cljs$core$async$state_machine__24066__auto____1 = (function (state_26721){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_26721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e26743){if((e26743 instanceof Object)){
var ex__24069__auto__ = e26743;
var statearr_26744_26761 = state_26721;
(statearr_26744_26761[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26762 = state_26721;
state_26721 = G__26762;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$state_machine__24066__auto__ = function(state_26721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24066__auto____1.call(this,state_26721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24066__auto____0;
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24066__auto____1;
return cljs$core$async$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___26750,out))
})();
var state__24179__auto__ = (function (){var statearr_26745 = f__24178__auto__.call(null);
(statearr_26745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___26750);

return statearr_26745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___26750,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26763 = [];
var len__17765__auto___26833 = arguments.length;
var i__17766__auto___26834 = (0);
while(true){
if((i__17766__auto___26834 < len__17765__auto___26833)){
args26763.push((arguments[i__17766__auto___26834]));

var G__26835 = (i__17766__auto___26834 + (1));
i__17766__auto___26834 = G__26835;
continue;
} else {
}
break;
}

var G__26765 = args26763.length;
switch (G__26765) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26763.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24177__auto___26837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___26837,out){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___26837,out){
return (function (state_26803){
var state_val_26804 = (state_26803[(1)]);
if((state_val_26804 === (7))){
var inst_26799 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26805_26838 = state_26803__$1;
(statearr_26805_26838[(2)] = inst_26799);

(statearr_26805_26838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (1))){
var inst_26766 = (new Array(n));
var inst_26767 = inst_26766;
var inst_26768 = (0);
var state_26803__$1 = (function (){var statearr_26806 = state_26803;
(statearr_26806[(7)] = inst_26768);

(statearr_26806[(8)] = inst_26767);

return statearr_26806;
})();
var statearr_26807_26839 = state_26803__$1;
(statearr_26807_26839[(2)] = null);

(statearr_26807_26839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (4))){
var inst_26771 = (state_26803[(9)]);
var inst_26771__$1 = (state_26803[(2)]);
var inst_26772 = (inst_26771__$1 == null);
var inst_26773 = cljs.core.not.call(null,inst_26772);
var state_26803__$1 = (function (){var statearr_26808 = state_26803;
(statearr_26808[(9)] = inst_26771__$1);

return statearr_26808;
})();
if(inst_26773){
var statearr_26809_26840 = state_26803__$1;
(statearr_26809_26840[(1)] = (5));

} else {
var statearr_26810_26841 = state_26803__$1;
(statearr_26810_26841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (15))){
var inst_26793 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26811_26842 = state_26803__$1;
(statearr_26811_26842[(2)] = inst_26793);

(statearr_26811_26842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (13))){
var state_26803__$1 = state_26803;
var statearr_26812_26843 = state_26803__$1;
(statearr_26812_26843[(2)] = null);

(statearr_26812_26843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (6))){
var inst_26768 = (state_26803[(7)]);
var inst_26789 = (inst_26768 > (0));
var state_26803__$1 = state_26803;
if(cljs.core.truth_(inst_26789)){
var statearr_26813_26844 = state_26803__$1;
(statearr_26813_26844[(1)] = (12));

} else {
var statearr_26814_26845 = state_26803__$1;
(statearr_26814_26845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (3))){
var inst_26801 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26803__$1,inst_26801);
} else {
if((state_val_26804 === (12))){
var inst_26767 = (state_26803[(8)]);
var inst_26791 = cljs.core.vec.call(null,inst_26767);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26803__$1,(15),out,inst_26791);
} else {
if((state_val_26804 === (2))){
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26803__$1,(4),ch);
} else {
if((state_val_26804 === (11))){
var inst_26783 = (state_26803[(2)]);
var inst_26784 = (new Array(n));
var inst_26767 = inst_26784;
var inst_26768 = (0);
var state_26803__$1 = (function (){var statearr_26815 = state_26803;
(statearr_26815[(7)] = inst_26768);

(statearr_26815[(8)] = inst_26767);

(statearr_26815[(10)] = inst_26783);

return statearr_26815;
})();
var statearr_26816_26846 = state_26803__$1;
(statearr_26816_26846[(2)] = null);

(statearr_26816_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (9))){
var inst_26767 = (state_26803[(8)]);
var inst_26781 = cljs.core.vec.call(null,inst_26767);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26803__$1,(11),out,inst_26781);
} else {
if((state_val_26804 === (5))){
var inst_26776 = (state_26803[(11)]);
var inst_26768 = (state_26803[(7)]);
var inst_26767 = (state_26803[(8)]);
var inst_26771 = (state_26803[(9)]);
var inst_26775 = (inst_26767[inst_26768] = inst_26771);
var inst_26776__$1 = (inst_26768 + (1));
var inst_26777 = (inst_26776__$1 < n);
var state_26803__$1 = (function (){var statearr_26817 = state_26803;
(statearr_26817[(11)] = inst_26776__$1);

(statearr_26817[(12)] = inst_26775);

return statearr_26817;
})();
if(cljs.core.truth_(inst_26777)){
var statearr_26818_26847 = state_26803__$1;
(statearr_26818_26847[(1)] = (8));

} else {
var statearr_26819_26848 = state_26803__$1;
(statearr_26819_26848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (14))){
var inst_26796 = (state_26803[(2)]);
var inst_26797 = cljs.core.async.close_BANG_.call(null,out);
var state_26803__$1 = (function (){var statearr_26821 = state_26803;
(statearr_26821[(13)] = inst_26796);

return statearr_26821;
})();
var statearr_26822_26849 = state_26803__$1;
(statearr_26822_26849[(2)] = inst_26797);

(statearr_26822_26849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (10))){
var inst_26787 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26823_26850 = state_26803__$1;
(statearr_26823_26850[(2)] = inst_26787);

(statearr_26823_26850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (8))){
var inst_26776 = (state_26803[(11)]);
var inst_26767 = (state_26803[(8)]);
var tmp26820 = inst_26767;
var inst_26767__$1 = tmp26820;
var inst_26768 = inst_26776;
var state_26803__$1 = (function (){var statearr_26824 = state_26803;
(statearr_26824[(7)] = inst_26768);

(statearr_26824[(8)] = inst_26767__$1);

return statearr_26824;
})();
var statearr_26825_26851 = state_26803__$1;
(statearr_26825_26851[(2)] = null);

(statearr_26825_26851[(1)] = (2));


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
});})(c__24177__auto___26837,out))
;
return ((function (switch__24065__auto__,c__24177__auto___26837,out){
return (function() {
var cljs$core$async$state_machine__24066__auto__ = null;
var cljs$core$async$state_machine__24066__auto____0 = (function (){
var statearr_26829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26829[(0)] = cljs$core$async$state_machine__24066__auto__);

(statearr_26829[(1)] = (1));

return statearr_26829;
});
var cljs$core$async$state_machine__24066__auto____1 = (function (state_26803){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_26803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e26830){if((e26830 instanceof Object)){
var ex__24069__auto__ = e26830;
var statearr_26831_26852 = state_26803;
(statearr_26831_26852[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26853 = state_26803;
state_26803 = G__26853;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$state_machine__24066__auto__ = function(state_26803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24066__auto____1.call(this,state_26803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24066__auto____0;
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24066__auto____1;
return cljs$core$async$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___26837,out))
})();
var state__24179__auto__ = (function (){var statearr_26832 = f__24178__auto__.call(null);
(statearr_26832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___26837);

return statearr_26832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___26837,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26854 = [];
var len__17765__auto___26928 = arguments.length;
var i__17766__auto___26929 = (0);
while(true){
if((i__17766__auto___26929 < len__17765__auto___26928)){
args26854.push((arguments[i__17766__auto___26929]));

var G__26930 = (i__17766__auto___26929 + (1));
i__17766__auto___26929 = G__26930;
continue;
} else {
}
break;
}

var G__26856 = args26854.length;
switch (G__26856) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26854.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24177__auto___26932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24177__auto___26932,out){
return (function (){
var f__24178__auto__ = (function (){var switch__24065__auto__ = ((function (c__24177__auto___26932,out){
return (function (state_26898){
var state_val_26899 = (state_26898[(1)]);
if((state_val_26899 === (7))){
var inst_26894 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26900_26933 = state_26898__$1;
(statearr_26900_26933[(2)] = inst_26894);

(statearr_26900_26933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (1))){
var inst_26857 = [];
var inst_26858 = inst_26857;
var inst_26859 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26898__$1 = (function (){var statearr_26901 = state_26898;
(statearr_26901[(7)] = inst_26859);

(statearr_26901[(8)] = inst_26858);

return statearr_26901;
})();
var statearr_26902_26934 = state_26898__$1;
(statearr_26902_26934[(2)] = null);

(statearr_26902_26934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (4))){
var inst_26862 = (state_26898[(9)]);
var inst_26862__$1 = (state_26898[(2)]);
var inst_26863 = (inst_26862__$1 == null);
var inst_26864 = cljs.core.not.call(null,inst_26863);
var state_26898__$1 = (function (){var statearr_26903 = state_26898;
(statearr_26903[(9)] = inst_26862__$1);

return statearr_26903;
})();
if(inst_26864){
var statearr_26904_26935 = state_26898__$1;
(statearr_26904_26935[(1)] = (5));

} else {
var statearr_26905_26936 = state_26898__$1;
(statearr_26905_26936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (15))){
var inst_26888 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26906_26937 = state_26898__$1;
(statearr_26906_26937[(2)] = inst_26888);

(statearr_26906_26937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (13))){
var state_26898__$1 = state_26898;
var statearr_26907_26938 = state_26898__$1;
(statearr_26907_26938[(2)] = null);

(statearr_26907_26938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (6))){
var inst_26858 = (state_26898[(8)]);
var inst_26883 = inst_26858.length;
var inst_26884 = (inst_26883 > (0));
var state_26898__$1 = state_26898;
if(cljs.core.truth_(inst_26884)){
var statearr_26908_26939 = state_26898__$1;
(statearr_26908_26939[(1)] = (12));

} else {
var statearr_26909_26940 = state_26898__$1;
(statearr_26909_26940[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (3))){
var inst_26896 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26898__$1,inst_26896);
} else {
if((state_val_26899 === (12))){
var inst_26858 = (state_26898[(8)]);
var inst_26886 = cljs.core.vec.call(null,inst_26858);
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26898__$1,(15),out,inst_26886);
} else {
if((state_val_26899 === (2))){
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26898__$1,(4),ch);
} else {
if((state_val_26899 === (11))){
var inst_26862 = (state_26898[(9)]);
var inst_26866 = (state_26898[(10)]);
var inst_26876 = (state_26898[(2)]);
var inst_26877 = [];
var inst_26878 = inst_26877.push(inst_26862);
var inst_26858 = inst_26877;
var inst_26859 = inst_26866;
var state_26898__$1 = (function (){var statearr_26910 = state_26898;
(statearr_26910[(7)] = inst_26859);

(statearr_26910[(11)] = inst_26876);

(statearr_26910[(8)] = inst_26858);

(statearr_26910[(12)] = inst_26878);

return statearr_26910;
})();
var statearr_26911_26941 = state_26898__$1;
(statearr_26911_26941[(2)] = null);

(statearr_26911_26941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (9))){
var inst_26858 = (state_26898[(8)]);
var inst_26874 = cljs.core.vec.call(null,inst_26858);
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26898__$1,(11),out,inst_26874);
} else {
if((state_val_26899 === (5))){
var inst_26862 = (state_26898[(9)]);
var inst_26859 = (state_26898[(7)]);
var inst_26866 = (state_26898[(10)]);
var inst_26866__$1 = f.call(null,inst_26862);
var inst_26867 = cljs.core._EQ_.call(null,inst_26866__$1,inst_26859);
var inst_26868 = cljs.core.keyword_identical_QMARK_.call(null,inst_26859,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26869 = (inst_26867) || (inst_26868);
var state_26898__$1 = (function (){var statearr_26912 = state_26898;
(statearr_26912[(10)] = inst_26866__$1);

return statearr_26912;
})();
if(cljs.core.truth_(inst_26869)){
var statearr_26913_26942 = state_26898__$1;
(statearr_26913_26942[(1)] = (8));

} else {
var statearr_26914_26943 = state_26898__$1;
(statearr_26914_26943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (14))){
var inst_26891 = (state_26898[(2)]);
var inst_26892 = cljs.core.async.close_BANG_.call(null,out);
var state_26898__$1 = (function (){var statearr_26916 = state_26898;
(statearr_26916[(13)] = inst_26891);

return statearr_26916;
})();
var statearr_26917_26944 = state_26898__$1;
(statearr_26917_26944[(2)] = inst_26892);

(statearr_26917_26944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (10))){
var inst_26881 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26918_26945 = state_26898__$1;
(statearr_26918_26945[(2)] = inst_26881);

(statearr_26918_26945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (8))){
var inst_26862 = (state_26898[(9)]);
var inst_26858 = (state_26898[(8)]);
var inst_26866 = (state_26898[(10)]);
var inst_26871 = inst_26858.push(inst_26862);
var tmp26915 = inst_26858;
var inst_26858__$1 = tmp26915;
var inst_26859 = inst_26866;
var state_26898__$1 = (function (){var statearr_26919 = state_26898;
(statearr_26919[(7)] = inst_26859);

(statearr_26919[(8)] = inst_26858__$1);

(statearr_26919[(14)] = inst_26871);

return statearr_26919;
})();
var statearr_26920_26946 = state_26898__$1;
(statearr_26920_26946[(2)] = null);

(statearr_26920_26946[(1)] = (2));


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
});})(c__24177__auto___26932,out))
;
return ((function (switch__24065__auto__,c__24177__auto___26932,out){
return (function() {
var cljs$core$async$state_machine__24066__auto__ = null;
var cljs$core$async$state_machine__24066__auto____0 = (function (){
var statearr_26924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26924[(0)] = cljs$core$async$state_machine__24066__auto__);

(statearr_26924[(1)] = (1));

return statearr_26924;
});
var cljs$core$async$state_machine__24066__auto____1 = (function (state_26898){
while(true){
var ret_value__24067__auto__ = (function (){try{while(true){
var result__24068__auto__ = switch__24065__auto__.call(null,state_26898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24068__auto__;
}
break;
}
}catch (e26925){if((e26925 instanceof Object)){
var ex__24069__auto__ = e26925;
var statearr_26926_26947 = state_26898;
(statearr_26926_26947[(5)] = ex__24069__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26948 = state_26898;
state_26898 = G__26948;
continue;
} else {
return ret_value__24067__auto__;
}
break;
}
});
cljs$core$async$state_machine__24066__auto__ = function(state_26898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24066__auto____1.call(this,state_26898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24066__auto____0;
cljs$core$async$state_machine__24066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24066__auto____1;
return cljs$core$async$state_machine__24066__auto__;
})()
;})(switch__24065__auto__,c__24177__auto___26932,out))
})();
var state__24179__auto__ = (function (){var statearr_26927 = f__24178__auto__.call(null);
(statearr_26927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24177__auto___26932);

return statearr_26927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24179__auto__);
});})(c__24177__auto___26932,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1453137582868