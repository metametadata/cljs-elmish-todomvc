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
var args24302 = [];
var len__17809__auto___24308 = arguments.length;
var i__17810__auto___24309 = (0);
while(true){
if((i__17810__auto___24309 < len__17809__auto___24308)){
args24302.push((arguments[i__17810__auto___24309]));

var G__24310 = (i__17810__auto___24309 + (1));
i__17810__auto___24309 = G__24310;
continue;
} else {
}
break;
}

var G__24304 = args24302.length;
switch (G__24304) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24302.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24305 = (function (f,blockable,meta24306){
this.f = f;
this.blockable = blockable;
this.meta24306 = meta24306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24307,meta24306__$1){
var self__ = this;
var _24307__$1 = this;
return (new cljs.core.async.t_cljs$core$async24305(self__.f,self__.blockable,meta24306__$1));
});

cljs.core.async.t_cljs$core$async24305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24307){
var self__ = this;
var _24307__$1 = this;
return self__.meta24306;
});

cljs.core.async.t_cljs$core$async24305.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24305.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24306","meta24306",1080066056,null)], null);
});

cljs.core.async.t_cljs$core$async24305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24305";

cljs.core.async.t_cljs$core$async24305.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24305");
});

cljs.core.async.__GT_t_cljs$core$async24305 = (function cljs$core$async$__GT_t_cljs$core$async24305(f__$1,blockable__$1,meta24306){
return (new cljs.core.async.t_cljs$core$async24305(f__$1,blockable__$1,meta24306));
});

}

return (new cljs.core.async.t_cljs$core$async24305(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24314 = [];
var len__17809__auto___24317 = arguments.length;
var i__17810__auto___24318 = (0);
while(true){
if((i__17810__auto___24318 < len__17809__auto___24317)){
args24314.push((arguments[i__17810__auto___24318]));

var G__24319 = (i__17810__auto___24318 + (1));
i__17810__auto___24318 = G__24319;
continue;
} else {
}
break;
}

var G__24316 = args24314.length;
switch (G__24316) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24314.length)].join('')));

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
var args24321 = [];
var len__17809__auto___24324 = arguments.length;
var i__17810__auto___24325 = (0);
while(true){
if((i__17810__auto___24325 < len__17809__auto___24324)){
args24321.push((arguments[i__17810__auto___24325]));

var G__24326 = (i__17810__auto___24325 + (1));
i__17810__auto___24325 = G__24326;
continue;
} else {
}
break;
}

var G__24323 = args24321.length;
switch (G__24323) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24321.length)].join('')));

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
var args24328 = [];
var len__17809__auto___24331 = arguments.length;
var i__17810__auto___24332 = (0);
while(true){
if((i__17810__auto___24332 < len__17809__auto___24331)){
args24328.push((arguments[i__17810__auto___24332]));

var G__24333 = (i__17810__auto___24332 + (1));
i__17810__auto___24332 = G__24333;
continue;
} else {
}
break;
}

var G__24330 = args24328.length;
switch (G__24330) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24328.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24335 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24335);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24335,ret){
return (function (){
return fn1.call(null,val_24335);
});})(val_24335,ret))
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
var args24336 = [];
var len__17809__auto___24339 = arguments.length;
var i__17810__auto___24340 = (0);
while(true){
if((i__17810__auto___24340 < len__17809__auto___24339)){
args24336.push((arguments[i__17810__auto___24340]));

var G__24341 = (i__17810__auto___24340 + (1));
i__17810__auto___24340 = G__24341;
continue;
} else {
}
break;
}

var G__24338 = args24336.length;
switch (G__24338) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24336.length)].join('')));

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
var n__17654__auto___24343 = n;
var x_24344 = (0);
while(true){
if((x_24344 < n__17654__auto___24343)){
(a[x_24344] = (0));

var G__24345 = (x_24344 + (1));
x_24344 = G__24345;
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

var G__24346 = (i + (1));
i = G__24346;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24350 = (function (alt_flag,flag,meta24351){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24351 = meta24351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24352,meta24351__$1){
var self__ = this;
var _24352__$1 = this;
return (new cljs.core.async.t_cljs$core$async24350(self__.alt_flag,self__.flag,meta24351__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24352){
var self__ = this;
var _24352__$1 = this;
return self__.meta24351;
});})(flag))
;

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24350.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24351","meta24351",1542069447,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24350";

cljs.core.async.t_cljs$core$async24350.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24350");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24350 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24350(alt_flag__$1,flag__$1,meta24351){
return (new cljs.core.async.t_cljs$core$async24350(alt_flag__$1,flag__$1,meta24351));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24350(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24356 = (function (alt_handler,flag,cb,meta24357){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24357 = meta24357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24358,meta24357__$1){
var self__ = this;
var _24358__$1 = this;
return (new cljs.core.async.t_cljs$core$async24356(self__.alt_handler,self__.flag,self__.cb,meta24357__$1));
});

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24358){
var self__ = this;
var _24358__$1 = this;
return self__.meta24357;
});

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24357","meta24357",-863697096,null)], null);
});

cljs.core.async.t_cljs$core$async24356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24356";

cljs.core.async.t_cljs$core$async24356.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24356");
});

cljs.core.async.__GT_t_cljs$core$async24356 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24356(alt_handler__$1,flag__$1,cb__$1,meta24357){
return (new cljs.core.async.t_cljs$core$async24356(alt_handler__$1,flag__$1,cb__$1,meta24357));
});

}

return (new cljs.core.async.t_cljs$core$async24356(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24359_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24359_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24360_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24360_SHARP_,port], null));
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
var G__24361 = (i + (1));
i = G__24361;
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
var len__17809__auto___24367 = arguments.length;
var i__17810__auto___24368 = (0);
while(true){
if((i__17810__auto___24368 < len__17809__auto___24367)){
args__17816__auto__.push((arguments[i__17810__auto___24368]));

var G__24369 = (i__17810__auto___24368 + (1));
i__17810__auto___24368 = G__24369;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((1) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24364){
var map__24365 = p__24364;
var map__24365__$1 = ((((!((map__24365 == null)))?((((map__24365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24365):map__24365);
var opts = map__24365__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24362){
var G__24363 = cljs.core.first.call(null,seq24362);
var seq24362__$1 = cljs.core.next.call(null,seq24362);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24363,seq24362__$1);
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
var args24370 = [];
var len__17809__auto___24420 = arguments.length;
var i__17810__auto___24421 = (0);
while(true){
if((i__17810__auto___24421 < len__17809__auto___24420)){
args24370.push((arguments[i__17810__auto___24421]));

var G__24422 = (i__17810__auto___24421 + (1));
i__17810__auto___24421 = G__24422;
continue;
} else {
}
break;
}

var G__24372 = args24370.length;
switch (G__24372) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24370.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24257__auto___24424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___24424){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___24424){
return (function (state_24396){
var state_val_24397 = (state_24396[(1)]);
if((state_val_24397 === (7))){
var inst_24392 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24398_24425 = state_24396__$1;
(statearr_24398_24425[(2)] = inst_24392);

(statearr_24398_24425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (1))){
var state_24396__$1 = state_24396;
var statearr_24399_24426 = state_24396__$1;
(statearr_24399_24426[(2)] = null);

(statearr_24399_24426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (4))){
var inst_24375 = (state_24396[(7)]);
var inst_24375__$1 = (state_24396[(2)]);
var inst_24376 = (inst_24375__$1 == null);
var state_24396__$1 = (function (){var statearr_24400 = state_24396;
(statearr_24400[(7)] = inst_24375__$1);

return statearr_24400;
})();
if(cljs.core.truth_(inst_24376)){
var statearr_24401_24427 = state_24396__$1;
(statearr_24401_24427[(1)] = (5));

} else {
var statearr_24402_24428 = state_24396__$1;
(statearr_24402_24428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (13))){
var state_24396__$1 = state_24396;
var statearr_24403_24429 = state_24396__$1;
(statearr_24403_24429[(2)] = null);

(statearr_24403_24429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (6))){
var inst_24375 = (state_24396[(7)]);
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24396__$1,(11),to,inst_24375);
} else {
if((state_val_24397 === (3))){
var inst_24394 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24396__$1,inst_24394);
} else {
if((state_val_24397 === (12))){
var state_24396__$1 = state_24396;
var statearr_24404_24430 = state_24396__$1;
(statearr_24404_24430[(2)] = null);

(statearr_24404_24430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (2))){
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24396__$1,(4),from);
} else {
if((state_val_24397 === (11))){
var inst_24385 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
if(cljs.core.truth_(inst_24385)){
var statearr_24405_24431 = state_24396__$1;
(statearr_24405_24431[(1)] = (12));

} else {
var statearr_24406_24432 = state_24396__$1;
(statearr_24406_24432[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (9))){
var state_24396__$1 = state_24396;
var statearr_24407_24433 = state_24396__$1;
(statearr_24407_24433[(2)] = null);

(statearr_24407_24433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (5))){
var state_24396__$1 = state_24396;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24408_24434 = state_24396__$1;
(statearr_24408_24434[(1)] = (8));

} else {
var statearr_24409_24435 = state_24396__$1;
(statearr_24409_24435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (14))){
var inst_24390 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24410_24436 = state_24396__$1;
(statearr_24410_24436[(2)] = inst_24390);

(statearr_24410_24436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (10))){
var inst_24382 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24411_24437 = state_24396__$1;
(statearr_24411_24437[(2)] = inst_24382);

(statearr_24411_24437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (8))){
var inst_24379 = cljs.core.async.close_BANG_.call(null,to);
var state_24396__$1 = state_24396;
var statearr_24412_24438 = state_24396__$1;
(statearr_24412_24438[(2)] = inst_24379);

(statearr_24412_24438[(1)] = (10));


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
});})(c__24257__auto___24424))
;
return ((function (switch__24145__auto__,c__24257__auto___24424){
return (function() {
var cljs$core$async$state_machine__24146__auto__ = null;
var cljs$core$async$state_machine__24146__auto____0 = (function (){
var statearr_24416 = [null,null,null,null,null,null,null,null];
(statearr_24416[(0)] = cljs$core$async$state_machine__24146__auto__);

(statearr_24416[(1)] = (1));

return statearr_24416;
});
var cljs$core$async$state_machine__24146__auto____1 = (function (state_24396){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_24396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e24417){if((e24417 instanceof Object)){
var ex__24149__auto__ = e24417;
var statearr_24418_24439 = state_24396;
(statearr_24418_24439[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24440 = state_24396;
state_24396 = G__24440;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$state_machine__24146__auto__ = function(state_24396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24146__auto____1.call(this,state_24396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24146__auto____0;
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24146__auto____1;
return cljs$core$async$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___24424))
})();
var state__24259__auto__ = (function (){var statearr_24419 = f__24258__auto__.call(null);
(statearr_24419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___24424);

return statearr_24419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___24424))
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
return (function (p__24624){
var vec__24625 = p__24624;
var v = cljs.core.nth.call(null,vec__24625,(0),null);
var p = cljs.core.nth.call(null,vec__24625,(1),null);
var job = vec__24625;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24257__auto___24807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___24807,res,vec__24625,v,p,job,jobs,results){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___24807,res,vec__24625,v,p,job,jobs,results){
return (function (state_24630){
var state_val_24631 = (state_24630[(1)]);
if((state_val_24631 === (1))){
var state_24630__$1 = state_24630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24630__$1,(2),res,v);
} else {
if((state_val_24631 === (2))){
var inst_24627 = (state_24630[(2)]);
var inst_24628 = cljs.core.async.close_BANG_.call(null,res);
var state_24630__$1 = (function (){var statearr_24632 = state_24630;
(statearr_24632[(7)] = inst_24627);

return statearr_24632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24630__$1,inst_24628);
} else {
return null;
}
}
});})(c__24257__auto___24807,res,vec__24625,v,p,job,jobs,results))
;
return ((function (switch__24145__auto__,c__24257__auto___24807,res,vec__24625,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0 = (function (){
var statearr_24636 = [null,null,null,null,null,null,null,null];
(statearr_24636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__);

(statearr_24636[(1)] = (1));

return statearr_24636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1 = (function (state_24630){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_24630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e24637){if((e24637 instanceof Object)){
var ex__24149__auto__ = e24637;
var statearr_24638_24808 = state_24630;
(statearr_24638_24808[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24809 = state_24630;
state_24630 = G__24809;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__ = function(state_24630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1.call(this,state_24630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___24807,res,vec__24625,v,p,job,jobs,results))
})();
var state__24259__auto__ = (function (){var statearr_24639 = f__24258__auto__.call(null);
(statearr_24639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___24807);

return statearr_24639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___24807,res,vec__24625,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24640){
var vec__24641 = p__24640;
var v = cljs.core.nth.call(null,vec__24641,(0),null);
var p = cljs.core.nth.call(null,vec__24641,(1),null);
var job = vec__24641;
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
var n__17654__auto___24810 = n;
var __24811 = (0);
while(true){
if((__24811 < n__17654__auto___24810)){
var G__24642_24812 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24642_24812) {
case "compute":
var c__24257__auto___24814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24811,c__24257__auto___24814,G__24642_24812,n__17654__auto___24810,jobs,results,process,async){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (__24811,c__24257__auto___24814,G__24642_24812,n__17654__auto___24810,jobs,results,process,async){
return (function (state_24655){
var state_val_24656 = (state_24655[(1)]);
if((state_val_24656 === (1))){
var state_24655__$1 = state_24655;
var statearr_24657_24815 = state_24655__$1;
(statearr_24657_24815[(2)] = null);

(statearr_24657_24815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24656 === (2))){
var state_24655__$1 = state_24655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24655__$1,(4),jobs);
} else {
if((state_val_24656 === (3))){
var inst_24653 = (state_24655[(2)]);
var state_24655__$1 = state_24655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24655__$1,inst_24653);
} else {
if((state_val_24656 === (4))){
var inst_24645 = (state_24655[(2)]);
var inst_24646 = process.call(null,inst_24645);
var state_24655__$1 = state_24655;
if(cljs.core.truth_(inst_24646)){
var statearr_24658_24816 = state_24655__$1;
(statearr_24658_24816[(1)] = (5));

} else {
var statearr_24659_24817 = state_24655__$1;
(statearr_24659_24817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24656 === (5))){
var state_24655__$1 = state_24655;
var statearr_24660_24818 = state_24655__$1;
(statearr_24660_24818[(2)] = null);

(statearr_24660_24818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24656 === (6))){
var state_24655__$1 = state_24655;
var statearr_24661_24819 = state_24655__$1;
(statearr_24661_24819[(2)] = null);

(statearr_24661_24819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24656 === (7))){
var inst_24651 = (state_24655[(2)]);
var state_24655__$1 = state_24655;
var statearr_24662_24820 = state_24655__$1;
(statearr_24662_24820[(2)] = inst_24651);

(statearr_24662_24820[(1)] = (3));


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
});})(__24811,c__24257__auto___24814,G__24642_24812,n__17654__auto___24810,jobs,results,process,async))
;
return ((function (__24811,switch__24145__auto__,c__24257__auto___24814,G__24642_24812,n__17654__auto___24810,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0 = (function (){
var statearr_24666 = [null,null,null,null,null,null,null];
(statearr_24666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__);

(statearr_24666[(1)] = (1));

return statearr_24666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1 = (function (state_24655){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_24655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e24667){if((e24667 instanceof Object)){
var ex__24149__auto__ = e24667;
var statearr_24668_24821 = state_24655;
(statearr_24668_24821[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24822 = state_24655;
state_24655 = G__24822;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__ = function(state_24655){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1.call(this,state_24655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__;
})()
;})(__24811,switch__24145__auto__,c__24257__auto___24814,G__24642_24812,n__17654__auto___24810,jobs,results,process,async))
})();
var state__24259__auto__ = (function (){var statearr_24669 = f__24258__auto__.call(null);
(statearr_24669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___24814);

return statearr_24669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(__24811,c__24257__auto___24814,G__24642_24812,n__17654__auto___24810,jobs,results,process,async))
);


break;
case "async":
var c__24257__auto___24823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24811,c__24257__auto___24823,G__24642_24812,n__17654__auto___24810,jobs,results,process,async){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (__24811,c__24257__auto___24823,G__24642_24812,n__17654__auto___24810,jobs,results,process,async){
return (function (state_24682){
var state_val_24683 = (state_24682[(1)]);
if((state_val_24683 === (1))){
var state_24682__$1 = state_24682;
var statearr_24684_24824 = state_24682__$1;
(statearr_24684_24824[(2)] = null);

(statearr_24684_24824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24683 === (2))){
var state_24682__$1 = state_24682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24682__$1,(4),jobs);
} else {
if((state_val_24683 === (3))){
var inst_24680 = (state_24682[(2)]);
var state_24682__$1 = state_24682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24682__$1,inst_24680);
} else {
if((state_val_24683 === (4))){
var inst_24672 = (state_24682[(2)]);
var inst_24673 = async.call(null,inst_24672);
var state_24682__$1 = state_24682;
if(cljs.core.truth_(inst_24673)){
var statearr_24685_24825 = state_24682__$1;
(statearr_24685_24825[(1)] = (5));

} else {
var statearr_24686_24826 = state_24682__$1;
(statearr_24686_24826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24683 === (5))){
var state_24682__$1 = state_24682;
var statearr_24687_24827 = state_24682__$1;
(statearr_24687_24827[(2)] = null);

(statearr_24687_24827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24683 === (6))){
var state_24682__$1 = state_24682;
var statearr_24688_24828 = state_24682__$1;
(statearr_24688_24828[(2)] = null);

(statearr_24688_24828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24683 === (7))){
var inst_24678 = (state_24682[(2)]);
var state_24682__$1 = state_24682;
var statearr_24689_24829 = state_24682__$1;
(statearr_24689_24829[(2)] = inst_24678);

(statearr_24689_24829[(1)] = (3));


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
});})(__24811,c__24257__auto___24823,G__24642_24812,n__17654__auto___24810,jobs,results,process,async))
;
return ((function (__24811,switch__24145__auto__,c__24257__auto___24823,G__24642_24812,n__17654__auto___24810,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0 = (function (){
var statearr_24693 = [null,null,null,null,null,null,null];
(statearr_24693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__);

(statearr_24693[(1)] = (1));

return statearr_24693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1 = (function (state_24682){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_24682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e24694){if((e24694 instanceof Object)){
var ex__24149__auto__ = e24694;
var statearr_24695_24830 = state_24682;
(statearr_24695_24830[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24831 = state_24682;
state_24682 = G__24831;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__ = function(state_24682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1.call(this,state_24682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__;
})()
;})(__24811,switch__24145__auto__,c__24257__auto___24823,G__24642_24812,n__17654__auto___24810,jobs,results,process,async))
})();
var state__24259__auto__ = (function (){var statearr_24696 = f__24258__auto__.call(null);
(statearr_24696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___24823);

return statearr_24696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(__24811,c__24257__auto___24823,G__24642_24812,n__17654__auto___24810,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24832 = (__24811 + (1));
__24811 = G__24832;
continue;
} else {
}
break;
}

var c__24257__auto___24833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___24833,jobs,results,process,async){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___24833,jobs,results,process,async){
return (function (state_24718){
var state_val_24719 = (state_24718[(1)]);
if((state_val_24719 === (1))){
var state_24718__$1 = state_24718;
var statearr_24720_24834 = state_24718__$1;
(statearr_24720_24834[(2)] = null);

(statearr_24720_24834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (2))){
var state_24718__$1 = state_24718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24718__$1,(4),from);
} else {
if((state_val_24719 === (3))){
var inst_24716 = (state_24718[(2)]);
var state_24718__$1 = state_24718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24718__$1,inst_24716);
} else {
if((state_val_24719 === (4))){
var inst_24699 = (state_24718[(7)]);
var inst_24699__$1 = (state_24718[(2)]);
var inst_24700 = (inst_24699__$1 == null);
var state_24718__$1 = (function (){var statearr_24721 = state_24718;
(statearr_24721[(7)] = inst_24699__$1);

return statearr_24721;
})();
if(cljs.core.truth_(inst_24700)){
var statearr_24722_24835 = state_24718__$1;
(statearr_24722_24835[(1)] = (5));

} else {
var statearr_24723_24836 = state_24718__$1;
(statearr_24723_24836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (5))){
var inst_24702 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24718__$1 = state_24718;
var statearr_24724_24837 = state_24718__$1;
(statearr_24724_24837[(2)] = inst_24702);

(statearr_24724_24837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (6))){
var inst_24699 = (state_24718[(7)]);
var inst_24704 = (state_24718[(8)]);
var inst_24704__$1 = cljs.core.async.chan.call(null,(1));
var inst_24705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24706 = [inst_24699,inst_24704__$1];
var inst_24707 = (new cljs.core.PersistentVector(null,2,(5),inst_24705,inst_24706,null));
var state_24718__$1 = (function (){var statearr_24725 = state_24718;
(statearr_24725[(8)] = inst_24704__$1);

return statearr_24725;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24718__$1,(8),jobs,inst_24707);
} else {
if((state_val_24719 === (7))){
var inst_24714 = (state_24718[(2)]);
var state_24718__$1 = state_24718;
var statearr_24726_24838 = state_24718__$1;
(statearr_24726_24838[(2)] = inst_24714);

(statearr_24726_24838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (8))){
var inst_24704 = (state_24718[(8)]);
var inst_24709 = (state_24718[(2)]);
var state_24718__$1 = (function (){var statearr_24727 = state_24718;
(statearr_24727[(9)] = inst_24709);

return statearr_24727;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24718__$1,(9),results,inst_24704);
} else {
if((state_val_24719 === (9))){
var inst_24711 = (state_24718[(2)]);
var state_24718__$1 = (function (){var statearr_24728 = state_24718;
(statearr_24728[(10)] = inst_24711);

return statearr_24728;
})();
var statearr_24729_24839 = state_24718__$1;
(statearr_24729_24839[(2)] = null);

(statearr_24729_24839[(1)] = (2));


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
});})(c__24257__auto___24833,jobs,results,process,async))
;
return ((function (switch__24145__auto__,c__24257__auto___24833,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0 = (function (){
var statearr_24733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__);

(statearr_24733[(1)] = (1));

return statearr_24733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1 = (function (state_24718){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_24718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e24734){if((e24734 instanceof Object)){
var ex__24149__auto__ = e24734;
var statearr_24735_24840 = state_24718;
(statearr_24735_24840[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24841 = state_24718;
state_24718 = G__24841;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__ = function(state_24718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1.call(this,state_24718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___24833,jobs,results,process,async))
})();
var state__24259__auto__ = (function (){var statearr_24736 = f__24258__auto__.call(null);
(statearr_24736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___24833);

return statearr_24736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___24833,jobs,results,process,async))
);


var c__24257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto__,jobs,results,process,async){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto__,jobs,results,process,async){
return (function (state_24774){
var state_val_24775 = (state_24774[(1)]);
if((state_val_24775 === (7))){
var inst_24770 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
var statearr_24776_24842 = state_24774__$1;
(statearr_24776_24842[(2)] = inst_24770);

(statearr_24776_24842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (20))){
var state_24774__$1 = state_24774;
var statearr_24777_24843 = state_24774__$1;
(statearr_24777_24843[(2)] = null);

(statearr_24777_24843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (1))){
var state_24774__$1 = state_24774;
var statearr_24778_24844 = state_24774__$1;
(statearr_24778_24844[(2)] = null);

(statearr_24778_24844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (4))){
var inst_24739 = (state_24774[(7)]);
var inst_24739__$1 = (state_24774[(2)]);
var inst_24740 = (inst_24739__$1 == null);
var state_24774__$1 = (function (){var statearr_24779 = state_24774;
(statearr_24779[(7)] = inst_24739__$1);

return statearr_24779;
})();
if(cljs.core.truth_(inst_24740)){
var statearr_24780_24845 = state_24774__$1;
(statearr_24780_24845[(1)] = (5));

} else {
var statearr_24781_24846 = state_24774__$1;
(statearr_24781_24846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (15))){
var inst_24752 = (state_24774[(8)]);
var state_24774__$1 = state_24774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24774__$1,(18),to,inst_24752);
} else {
if((state_val_24775 === (21))){
var inst_24765 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
var statearr_24782_24847 = state_24774__$1;
(statearr_24782_24847[(2)] = inst_24765);

(statearr_24782_24847[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (13))){
var inst_24767 = (state_24774[(2)]);
var state_24774__$1 = (function (){var statearr_24783 = state_24774;
(statearr_24783[(9)] = inst_24767);

return statearr_24783;
})();
var statearr_24784_24848 = state_24774__$1;
(statearr_24784_24848[(2)] = null);

(statearr_24784_24848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (6))){
var inst_24739 = (state_24774[(7)]);
var state_24774__$1 = state_24774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24774__$1,(11),inst_24739);
} else {
if((state_val_24775 === (17))){
var inst_24760 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
if(cljs.core.truth_(inst_24760)){
var statearr_24785_24849 = state_24774__$1;
(statearr_24785_24849[(1)] = (19));

} else {
var statearr_24786_24850 = state_24774__$1;
(statearr_24786_24850[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (3))){
var inst_24772 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24774__$1,inst_24772);
} else {
if((state_val_24775 === (12))){
var inst_24749 = (state_24774[(10)]);
var state_24774__$1 = state_24774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24774__$1,(14),inst_24749);
} else {
if((state_val_24775 === (2))){
var state_24774__$1 = state_24774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24774__$1,(4),results);
} else {
if((state_val_24775 === (19))){
var state_24774__$1 = state_24774;
var statearr_24787_24851 = state_24774__$1;
(statearr_24787_24851[(2)] = null);

(statearr_24787_24851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (11))){
var inst_24749 = (state_24774[(2)]);
var state_24774__$1 = (function (){var statearr_24788 = state_24774;
(statearr_24788[(10)] = inst_24749);

return statearr_24788;
})();
var statearr_24789_24852 = state_24774__$1;
(statearr_24789_24852[(2)] = null);

(statearr_24789_24852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (9))){
var state_24774__$1 = state_24774;
var statearr_24790_24853 = state_24774__$1;
(statearr_24790_24853[(2)] = null);

(statearr_24790_24853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (5))){
var state_24774__$1 = state_24774;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24791_24854 = state_24774__$1;
(statearr_24791_24854[(1)] = (8));

} else {
var statearr_24792_24855 = state_24774__$1;
(statearr_24792_24855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (14))){
var inst_24754 = (state_24774[(11)]);
var inst_24752 = (state_24774[(8)]);
var inst_24752__$1 = (state_24774[(2)]);
var inst_24753 = (inst_24752__$1 == null);
var inst_24754__$1 = cljs.core.not.call(null,inst_24753);
var state_24774__$1 = (function (){var statearr_24793 = state_24774;
(statearr_24793[(11)] = inst_24754__$1);

(statearr_24793[(8)] = inst_24752__$1);

return statearr_24793;
})();
if(inst_24754__$1){
var statearr_24794_24856 = state_24774__$1;
(statearr_24794_24856[(1)] = (15));

} else {
var statearr_24795_24857 = state_24774__$1;
(statearr_24795_24857[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (16))){
var inst_24754 = (state_24774[(11)]);
var state_24774__$1 = state_24774;
var statearr_24796_24858 = state_24774__$1;
(statearr_24796_24858[(2)] = inst_24754);

(statearr_24796_24858[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (10))){
var inst_24746 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
var statearr_24797_24859 = state_24774__$1;
(statearr_24797_24859[(2)] = inst_24746);

(statearr_24797_24859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (18))){
var inst_24757 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
var statearr_24798_24860 = state_24774__$1;
(statearr_24798_24860[(2)] = inst_24757);

(statearr_24798_24860[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24775 === (8))){
var inst_24743 = cljs.core.async.close_BANG_.call(null,to);
var state_24774__$1 = state_24774;
var statearr_24799_24861 = state_24774__$1;
(statearr_24799_24861[(2)] = inst_24743);

(statearr_24799_24861[(1)] = (10));


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
});})(c__24257__auto__,jobs,results,process,async))
;
return ((function (switch__24145__auto__,c__24257__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0 = (function (){
var statearr_24803 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__);

(statearr_24803[(1)] = (1));

return statearr_24803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1 = (function (state_24774){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_24774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e24804){if((e24804 instanceof Object)){
var ex__24149__auto__ = e24804;
var statearr_24805_24862 = state_24774;
(statearr_24805_24862[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24863 = state_24774;
state_24774 = G__24863;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__ = function(state_24774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1.call(this,state_24774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24146__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto__,jobs,results,process,async))
})();
var state__24259__auto__ = (function (){var statearr_24806 = f__24258__auto__.call(null);
(statearr_24806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto__);

return statearr_24806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto__,jobs,results,process,async))
);

return c__24257__auto__;
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
var args24864 = [];
var len__17809__auto___24867 = arguments.length;
var i__17810__auto___24868 = (0);
while(true){
if((i__17810__auto___24868 < len__17809__auto___24867)){
args24864.push((arguments[i__17810__auto___24868]));

var G__24869 = (i__17810__auto___24868 + (1));
i__17810__auto___24868 = G__24869;
continue;
} else {
}
break;
}

var G__24866 = args24864.length;
switch (G__24866) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24864.length)].join('')));

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
var args24871 = [];
var len__17809__auto___24874 = arguments.length;
var i__17810__auto___24875 = (0);
while(true){
if((i__17810__auto___24875 < len__17809__auto___24874)){
args24871.push((arguments[i__17810__auto___24875]));

var G__24876 = (i__17810__auto___24875 + (1));
i__17810__auto___24875 = G__24876;
continue;
} else {
}
break;
}

var G__24873 = args24871.length;
switch (G__24873) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24871.length)].join('')));

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
var args24878 = [];
var len__17809__auto___24931 = arguments.length;
var i__17810__auto___24932 = (0);
while(true){
if((i__17810__auto___24932 < len__17809__auto___24931)){
args24878.push((arguments[i__17810__auto___24932]));

var G__24933 = (i__17810__auto___24932 + (1));
i__17810__auto___24932 = G__24933;
continue;
} else {
}
break;
}

var G__24880 = args24878.length;
switch (G__24880) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24878.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24257__auto___24935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___24935,tc,fc){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___24935,tc,fc){
return (function (state_24906){
var state_val_24907 = (state_24906[(1)]);
if((state_val_24907 === (7))){
var inst_24902 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
var statearr_24908_24936 = state_24906__$1;
(statearr_24908_24936[(2)] = inst_24902);

(statearr_24908_24936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (1))){
var state_24906__$1 = state_24906;
var statearr_24909_24937 = state_24906__$1;
(statearr_24909_24937[(2)] = null);

(statearr_24909_24937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (4))){
var inst_24883 = (state_24906[(7)]);
var inst_24883__$1 = (state_24906[(2)]);
var inst_24884 = (inst_24883__$1 == null);
var state_24906__$1 = (function (){var statearr_24910 = state_24906;
(statearr_24910[(7)] = inst_24883__$1);

return statearr_24910;
})();
if(cljs.core.truth_(inst_24884)){
var statearr_24911_24938 = state_24906__$1;
(statearr_24911_24938[(1)] = (5));

} else {
var statearr_24912_24939 = state_24906__$1;
(statearr_24912_24939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (13))){
var state_24906__$1 = state_24906;
var statearr_24913_24940 = state_24906__$1;
(statearr_24913_24940[(2)] = null);

(statearr_24913_24940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (6))){
var inst_24883 = (state_24906[(7)]);
var inst_24889 = p.call(null,inst_24883);
var state_24906__$1 = state_24906;
if(cljs.core.truth_(inst_24889)){
var statearr_24914_24941 = state_24906__$1;
(statearr_24914_24941[(1)] = (9));

} else {
var statearr_24915_24942 = state_24906__$1;
(statearr_24915_24942[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (3))){
var inst_24904 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24906__$1,inst_24904);
} else {
if((state_val_24907 === (12))){
var state_24906__$1 = state_24906;
var statearr_24916_24943 = state_24906__$1;
(statearr_24916_24943[(2)] = null);

(statearr_24916_24943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (2))){
var state_24906__$1 = state_24906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24906__$1,(4),ch);
} else {
if((state_val_24907 === (11))){
var inst_24883 = (state_24906[(7)]);
var inst_24893 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24906__$1,(8),inst_24893,inst_24883);
} else {
if((state_val_24907 === (9))){
var state_24906__$1 = state_24906;
var statearr_24917_24944 = state_24906__$1;
(statearr_24917_24944[(2)] = tc);

(statearr_24917_24944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (5))){
var inst_24886 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24887 = cljs.core.async.close_BANG_.call(null,fc);
var state_24906__$1 = (function (){var statearr_24918 = state_24906;
(statearr_24918[(8)] = inst_24886);

return statearr_24918;
})();
var statearr_24919_24945 = state_24906__$1;
(statearr_24919_24945[(2)] = inst_24887);

(statearr_24919_24945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (14))){
var inst_24900 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
var statearr_24920_24946 = state_24906__$1;
(statearr_24920_24946[(2)] = inst_24900);

(statearr_24920_24946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (10))){
var state_24906__$1 = state_24906;
var statearr_24921_24947 = state_24906__$1;
(statearr_24921_24947[(2)] = fc);

(statearr_24921_24947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (8))){
var inst_24895 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
if(cljs.core.truth_(inst_24895)){
var statearr_24922_24948 = state_24906__$1;
(statearr_24922_24948[(1)] = (12));

} else {
var statearr_24923_24949 = state_24906__$1;
(statearr_24923_24949[(1)] = (13));

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
});})(c__24257__auto___24935,tc,fc))
;
return ((function (switch__24145__auto__,c__24257__auto___24935,tc,fc){
return (function() {
var cljs$core$async$state_machine__24146__auto__ = null;
var cljs$core$async$state_machine__24146__auto____0 = (function (){
var statearr_24927 = [null,null,null,null,null,null,null,null,null];
(statearr_24927[(0)] = cljs$core$async$state_machine__24146__auto__);

(statearr_24927[(1)] = (1));

return statearr_24927;
});
var cljs$core$async$state_machine__24146__auto____1 = (function (state_24906){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_24906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e24928){if((e24928 instanceof Object)){
var ex__24149__auto__ = e24928;
var statearr_24929_24950 = state_24906;
(statearr_24929_24950[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24951 = state_24906;
state_24906 = G__24951;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$state_machine__24146__auto__ = function(state_24906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24146__auto____1.call(this,state_24906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24146__auto____0;
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24146__auto____1;
return cljs$core$async$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___24935,tc,fc))
})();
var state__24259__auto__ = (function (){var statearr_24930 = f__24258__auto__.call(null);
(statearr_24930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___24935);

return statearr_24930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___24935,tc,fc))
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
var c__24257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto__){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto__){
return (function (state_25015){
var state_val_25016 = (state_25015[(1)]);
if((state_val_25016 === (7))){
var inst_25011 = (state_25015[(2)]);
var state_25015__$1 = state_25015;
var statearr_25017_25038 = state_25015__$1;
(statearr_25017_25038[(2)] = inst_25011);

(statearr_25017_25038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (1))){
var inst_24995 = init;
var state_25015__$1 = (function (){var statearr_25018 = state_25015;
(statearr_25018[(7)] = inst_24995);

return statearr_25018;
})();
var statearr_25019_25039 = state_25015__$1;
(statearr_25019_25039[(2)] = null);

(statearr_25019_25039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (4))){
var inst_24998 = (state_25015[(8)]);
var inst_24998__$1 = (state_25015[(2)]);
var inst_24999 = (inst_24998__$1 == null);
var state_25015__$1 = (function (){var statearr_25020 = state_25015;
(statearr_25020[(8)] = inst_24998__$1);

return statearr_25020;
})();
if(cljs.core.truth_(inst_24999)){
var statearr_25021_25040 = state_25015__$1;
(statearr_25021_25040[(1)] = (5));

} else {
var statearr_25022_25041 = state_25015__$1;
(statearr_25022_25041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (6))){
var inst_24995 = (state_25015[(7)]);
var inst_24998 = (state_25015[(8)]);
var inst_25002 = (state_25015[(9)]);
var inst_25002__$1 = f.call(null,inst_24995,inst_24998);
var inst_25003 = cljs.core.reduced_QMARK_.call(null,inst_25002__$1);
var state_25015__$1 = (function (){var statearr_25023 = state_25015;
(statearr_25023[(9)] = inst_25002__$1);

return statearr_25023;
})();
if(inst_25003){
var statearr_25024_25042 = state_25015__$1;
(statearr_25024_25042[(1)] = (8));

} else {
var statearr_25025_25043 = state_25015__$1;
(statearr_25025_25043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (3))){
var inst_25013 = (state_25015[(2)]);
var state_25015__$1 = state_25015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25015__$1,inst_25013);
} else {
if((state_val_25016 === (2))){
var state_25015__$1 = state_25015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25015__$1,(4),ch);
} else {
if((state_val_25016 === (9))){
var inst_25002 = (state_25015[(9)]);
var inst_24995 = inst_25002;
var state_25015__$1 = (function (){var statearr_25026 = state_25015;
(statearr_25026[(7)] = inst_24995);

return statearr_25026;
})();
var statearr_25027_25044 = state_25015__$1;
(statearr_25027_25044[(2)] = null);

(statearr_25027_25044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (5))){
var inst_24995 = (state_25015[(7)]);
var state_25015__$1 = state_25015;
var statearr_25028_25045 = state_25015__$1;
(statearr_25028_25045[(2)] = inst_24995);

(statearr_25028_25045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (10))){
var inst_25009 = (state_25015[(2)]);
var state_25015__$1 = state_25015;
var statearr_25029_25046 = state_25015__$1;
(statearr_25029_25046[(2)] = inst_25009);

(statearr_25029_25046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25016 === (8))){
var inst_25002 = (state_25015[(9)]);
var inst_25005 = cljs.core.deref.call(null,inst_25002);
var state_25015__$1 = state_25015;
var statearr_25030_25047 = state_25015__$1;
(statearr_25030_25047[(2)] = inst_25005);

(statearr_25030_25047[(1)] = (10));


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
});})(c__24257__auto__))
;
return ((function (switch__24145__auto__,c__24257__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24146__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24146__auto____0 = (function (){
var statearr_25034 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25034[(0)] = cljs$core$async$reduce_$_state_machine__24146__auto__);

(statearr_25034[(1)] = (1));

return statearr_25034;
});
var cljs$core$async$reduce_$_state_machine__24146__auto____1 = (function (state_25015){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_25015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e25035){if((e25035 instanceof Object)){
var ex__24149__auto__ = e25035;
var statearr_25036_25048 = state_25015;
(statearr_25036_25048[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25049 = state_25015;
state_25015 = G__25049;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24146__auto__ = function(state_25015){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24146__auto____1.call(this,state_25015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24146__auto____0;
cljs$core$async$reduce_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24146__auto____1;
return cljs$core$async$reduce_$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto__))
})();
var state__24259__auto__ = (function (){var statearr_25037 = f__24258__auto__.call(null);
(statearr_25037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto__);

return statearr_25037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto__))
);

return c__24257__auto__;
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
var args25050 = [];
var len__17809__auto___25102 = arguments.length;
var i__17810__auto___25103 = (0);
while(true){
if((i__17810__auto___25103 < len__17809__auto___25102)){
args25050.push((arguments[i__17810__auto___25103]));

var G__25104 = (i__17810__auto___25103 + (1));
i__17810__auto___25103 = G__25104;
continue;
} else {
}
break;
}

var G__25052 = args25050.length;
switch (G__25052) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25050.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto__){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto__){
return (function (state_25077){
var state_val_25078 = (state_25077[(1)]);
if((state_val_25078 === (7))){
var inst_25059 = (state_25077[(2)]);
var state_25077__$1 = state_25077;
var statearr_25079_25106 = state_25077__$1;
(statearr_25079_25106[(2)] = inst_25059);

(statearr_25079_25106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (1))){
var inst_25053 = cljs.core.seq.call(null,coll);
var inst_25054 = inst_25053;
var state_25077__$1 = (function (){var statearr_25080 = state_25077;
(statearr_25080[(7)] = inst_25054);

return statearr_25080;
})();
var statearr_25081_25107 = state_25077__$1;
(statearr_25081_25107[(2)] = null);

(statearr_25081_25107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (4))){
var inst_25054 = (state_25077[(7)]);
var inst_25057 = cljs.core.first.call(null,inst_25054);
var state_25077__$1 = state_25077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25077__$1,(7),ch,inst_25057);
} else {
if((state_val_25078 === (13))){
var inst_25071 = (state_25077[(2)]);
var state_25077__$1 = state_25077;
var statearr_25082_25108 = state_25077__$1;
(statearr_25082_25108[(2)] = inst_25071);

(statearr_25082_25108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (6))){
var inst_25062 = (state_25077[(2)]);
var state_25077__$1 = state_25077;
if(cljs.core.truth_(inst_25062)){
var statearr_25083_25109 = state_25077__$1;
(statearr_25083_25109[(1)] = (8));

} else {
var statearr_25084_25110 = state_25077__$1;
(statearr_25084_25110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (3))){
var inst_25075 = (state_25077[(2)]);
var state_25077__$1 = state_25077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25077__$1,inst_25075);
} else {
if((state_val_25078 === (12))){
var state_25077__$1 = state_25077;
var statearr_25085_25111 = state_25077__$1;
(statearr_25085_25111[(2)] = null);

(statearr_25085_25111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (2))){
var inst_25054 = (state_25077[(7)]);
var state_25077__$1 = state_25077;
if(cljs.core.truth_(inst_25054)){
var statearr_25086_25112 = state_25077__$1;
(statearr_25086_25112[(1)] = (4));

} else {
var statearr_25087_25113 = state_25077__$1;
(statearr_25087_25113[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (11))){
var inst_25068 = cljs.core.async.close_BANG_.call(null,ch);
var state_25077__$1 = state_25077;
var statearr_25088_25114 = state_25077__$1;
(statearr_25088_25114[(2)] = inst_25068);

(statearr_25088_25114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (9))){
var state_25077__$1 = state_25077;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25089_25115 = state_25077__$1;
(statearr_25089_25115[(1)] = (11));

} else {
var statearr_25090_25116 = state_25077__$1;
(statearr_25090_25116[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (5))){
var inst_25054 = (state_25077[(7)]);
var state_25077__$1 = state_25077;
var statearr_25091_25117 = state_25077__$1;
(statearr_25091_25117[(2)] = inst_25054);

(statearr_25091_25117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (10))){
var inst_25073 = (state_25077[(2)]);
var state_25077__$1 = state_25077;
var statearr_25092_25118 = state_25077__$1;
(statearr_25092_25118[(2)] = inst_25073);

(statearr_25092_25118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25078 === (8))){
var inst_25054 = (state_25077[(7)]);
var inst_25064 = cljs.core.next.call(null,inst_25054);
var inst_25054__$1 = inst_25064;
var state_25077__$1 = (function (){var statearr_25093 = state_25077;
(statearr_25093[(7)] = inst_25054__$1);

return statearr_25093;
})();
var statearr_25094_25119 = state_25077__$1;
(statearr_25094_25119[(2)] = null);

(statearr_25094_25119[(1)] = (2));


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
});})(c__24257__auto__))
;
return ((function (switch__24145__auto__,c__24257__auto__){
return (function() {
var cljs$core$async$state_machine__24146__auto__ = null;
var cljs$core$async$state_machine__24146__auto____0 = (function (){
var statearr_25098 = [null,null,null,null,null,null,null,null];
(statearr_25098[(0)] = cljs$core$async$state_machine__24146__auto__);

(statearr_25098[(1)] = (1));

return statearr_25098;
});
var cljs$core$async$state_machine__24146__auto____1 = (function (state_25077){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_25077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e25099){if((e25099 instanceof Object)){
var ex__24149__auto__ = e25099;
var statearr_25100_25120 = state_25077;
(statearr_25100_25120[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25121 = state_25077;
state_25077 = G__25121;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$state_machine__24146__auto__ = function(state_25077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24146__auto____1.call(this,state_25077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24146__auto____0;
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24146__auto____1;
return cljs$core$async$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto__))
})();
var state__24259__auto__ = (function (){var statearr_25101 = f__24258__auto__.call(null);
(statearr_25101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto__);

return statearr_25101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto__))
);

return c__24257__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25343 = (function (mult,ch,cs,meta25344){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25344 = meta25344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25345,meta25344__$1){
var self__ = this;
var _25345__$1 = this;
return (new cljs.core.async.t_cljs$core$async25343(self__.mult,self__.ch,self__.cs,meta25344__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25345){
var self__ = this;
var _25345__$1 = this;
return self__.meta25344;
});})(cs))
;

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25343.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25343.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25344","meta25344",900865575,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25343";

cljs.core.async.t_cljs$core$async25343.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25343");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25343 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25343(mult__$1,ch__$1,cs__$1,meta25344){
return (new cljs.core.async.t_cljs$core$async25343(mult__$1,ch__$1,cs__$1,meta25344));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25343(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24257__auto___25564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___25564,cs,m,dchan,dctr,done){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___25564,cs,m,dchan,dctr,done){
return (function (state_25476){
var state_val_25477 = (state_25476[(1)]);
if((state_val_25477 === (7))){
var inst_25472 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25478_25565 = state_25476__$1;
(statearr_25478_25565[(2)] = inst_25472);

(statearr_25478_25565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (20))){
var inst_25377 = (state_25476[(7)]);
var inst_25387 = cljs.core.first.call(null,inst_25377);
var inst_25388 = cljs.core.nth.call(null,inst_25387,(0),null);
var inst_25389 = cljs.core.nth.call(null,inst_25387,(1),null);
var state_25476__$1 = (function (){var statearr_25479 = state_25476;
(statearr_25479[(8)] = inst_25388);

return statearr_25479;
})();
if(cljs.core.truth_(inst_25389)){
var statearr_25480_25566 = state_25476__$1;
(statearr_25480_25566[(1)] = (22));

} else {
var statearr_25481_25567 = state_25476__$1;
(statearr_25481_25567[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (27))){
var inst_25417 = (state_25476[(9)]);
var inst_25419 = (state_25476[(10)]);
var inst_25348 = (state_25476[(11)]);
var inst_25424 = (state_25476[(12)]);
var inst_25424__$1 = cljs.core._nth.call(null,inst_25417,inst_25419);
var inst_25425 = cljs.core.async.put_BANG_.call(null,inst_25424__$1,inst_25348,done);
var state_25476__$1 = (function (){var statearr_25482 = state_25476;
(statearr_25482[(12)] = inst_25424__$1);

return statearr_25482;
})();
if(cljs.core.truth_(inst_25425)){
var statearr_25483_25568 = state_25476__$1;
(statearr_25483_25568[(1)] = (30));

} else {
var statearr_25484_25569 = state_25476__$1;
(statearr_25484_25569[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (1))){
var state_25476__$1 = state_25476;
var statearr_25485_25570 = state_25476__$1;
(statearr_25485_25570[(2)] = null);

(statearr_25485_25570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (24))){
var inst_25377 = (state_25476[(7)]);
var inst_25394 = (state_25476[(2)]);
var inst_25395 = cljs.core.next.call(null,inst_25377);
var inst_25357 = inst_25395;
var inst_25358 = null;
var inst_25359 = (0);
var inst_25360 = (0);
var state_25476__$1 = (function (){var statearr_25486 = state_25476;
(statearr_25486[(13)] = inst_25357);

(statearr_25486[(14)] = inst_25358);

(statearr_25486[(15)] = inst_25360);

(statearr_25486[(16)] = inst_25394);

(statearr_25486[(17)] = inst_25359);

return statearr_25486;
})();
var statearr_25487_25571 = state_25476__$1;
(statearr_25487_25571[(2)] = null);

(statearr_25487_25571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (39))){
var state_25476__$1 = state_25476;
var statearr_25491_25572 = state_25476__$1;
(statearr_25491_25572[(2)] = null);

(statearr_25491_25572[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (4))){
var inst_25348 = (state_25476[(11)]);
var inst_25348__$1 = (state_25476[(2)]);
var inst_25349 = (inst_25348__$1 == null);
var state_25476__$1 = (function (){var statearr_25492 = state_25476;
(statearr_25492[(11)] = inst_25348__$1);

return statearr_25492;
})();
if(cljs.core.truth_(inst_25349)){
var statearr_25493_25573 = state_25476__$1;
(statearr_25493_25573[(1)] = (5));

} else {
var statearr_25494_25574 = state_25476__$1;
(statearr_25494_25574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (15))){
var inst_25357 = (state_25476[(13)]);
var inst_25358 = (state_25476[(14)]);
var inst_25360 = (state_25476[(15)]);
var inst_25359 = (state_25476[(17)]);
var inst_25373 = (state_25476[(2)]);
var inst_25374 = (inst_25360 + (1));
var tmp25488 = inst_25357;
var tmp25489 = inst_25358;
var tmp25490 = inst_25359;
var inst_25357__$1 = tmp25488;
var inst_25358__$1 = tmp25489;
var inst_25359__$1 = tmp25490;
var inst_25360__$1 = inst_25374;
var state_25476__$1 = (function (){var statearr_25495 = state_25476;
(statearr_25495[(13)] = inst_25357__$1);

(statearr_25495[(14)] = inst_25358__$1);

(statearr_25495[(15)] = inst_25360__$1);

(statearr_25495[(17)] = inst_25359__$1);

(statearr_25495[(18)] = inst_25373);

return statearr_25495;
})();
var statearr_25496_25575 = state_25476__$1;
(statearr_25496_25575[(2)] = null);

(statearr_25496_25575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (21))){
var inst_25398 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25500_25576 = state_25476__$1;
(statearr_25500_25576[(2)] = inst_25398);

(statearr_25500_25576[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (31))){
var inst_25424 = (state_25476[(12)]);
var inst_25428 = done.call(null,null);
var inst_25429 = cljs.core.async.untap_STAR_.call(null,m,inst_25424);
var state_25476__$1 = (function (){var statearr_25501 = state_25476;
(statearr_25501[(19)] = inst_25428);

return statearr_25501;
})();
var statearr_25502_25577 = state_25476__$1;
(statearr_25502_25577[(2)] = inst_25429);

(statearr_25502_25577[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (32))){
var inst_25418 = (state_25476[(20)]);
var inst_25417 = (state_25476[(9)]);
var inst_25419 = (state_25476[(10)]);
var inst_25416 = (state_25476[(21)]);
var inst_25431 = (state_25476[(2)]);
var inst_25432 = (inst_25419 + (1));
var tmp25497 = inst_25418;
var tmp25498 = inst_25417;
var tmp25499 = inst_25416;
var inst_25416__$1 = tmp25499;
var inst_25417__$1 = tmp25498;
var inst_25418__$1 = tmp25497;
var inst_25419__$1 = inst_25432;
var state_25476__$1 = (function (){var statearr_25503 = state_25476;
(statearr_25503[(22)] = inst_25431);

(statearr_25503[(20)] = inst_25418__$1);

(statearr_25503[(9)] = inst_25417__$1);

(statearr_25503[(10)] = inst_25419__$1);

(statearr_25503[(21)] = inst_25416__$1);

return statearr_25503;
})();
var statearr_25504_25578 = state_25476__$1;
(statearr_25504_25578[(2)] = null);

(statearr_25504_25578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (40))){
var inst_25444 = (state_25476[(23)]);
var inst_25448 = done.call(null,null);
var inst_25449 = cljs.core.async.untap_STAR_.call(null,m,inst_25444);
var state_25476__$1 = (function (){var statearr_25505 = state_25476;
(statearr_25505[(24)] = inst_25448);

return statearr_25505;
})();
var statearr_25506_25579 = state_25476__$1;
(statearr_25506_25579[(2)] = inst_25449);

(statearr_25506_25579[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (33))){
var inst_25435 = (state_25476[(25)]);
var inst_25437 = cljs.core.chunked_seq_QMARK_.call(null,inst_25435);
var state_25476__$1 = state_25476;
if(inst_25437){
var statearr_25507_25580 = state_25476__$1;
(statearr_25507_25580[(1)] = (36));

} else {
var statearr_25508_25581 = state_25476__$1;
(statearr_25508_25581[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (13))){
var inst_25367 = (state_25476[(26)]);
var inst_25370 = cljs.core.async.close_BANG_.call(null,inst_25367);
var state_25476__$1 = state_25476;
var statearr_25509_25582 = state_25476__$1;
(statearr_25509_25582[(2)] = inst_25370);

(statearr_25509_25582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (22))){
var inst_25388 = (state_25476[(8)]);
var inst_25391 = cljs.core.async.close_BANG_.call(null,inst_25388);
var state_25476__$1 = state_25476;
var statearr_25510_25583 = state_25476__$1;
(statearr_25510_25583[(2)] = inst_25391);

(statearr_25510_25583[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (36))){
var inst_25435 = (state_25476[(25)]);
var inst_25439 = cljs.core.chunk_first.call(null,inst_25435);
var inst_25440 = cljs.core.chunk_rest.call(null,inst_25435);
var inst_25441 = cljs.core.count.call(null,inst_25439);
var inst_25416 = inst_25440;
var inst_25417 = inst_25439;
var inst_25418 = inst_25441;
var inst_25419 = (0);
var state_25476__$1 = (function (){var statearr_25511 = state_25476;
(statearr_25511[(20)] = inst_25418);

(statearr_25511[(9)] = inst_25417);

(statearr_25511[(10)] = inst_25419);

(statearr_25511[(21)] = inst_25416);

return statearr_25511;
})();
var statearr_25512_25584 = state_25476__$1;
(statearr_25512_25584[(2)] = null);

(statearr_25512_25584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (41))){
var inst_25435 = (state_25476[(25)]);
var inst_25451 = (state_25476[(2)]);
var inst_25452 = cljs.core.next.call(null,inst_25435);
var inst_25416 = inst_25452;
var inst_25417 = null;
var inst_25418 = (0);
var inst_25419 = (0);
var state_25476__$1 = (function (){var statearr_25513 = state_25476;
(statearr_25513[(20)] = inst_25418);

(statearr_25513[(9)] = inst_25417);

(statearr_25513[(10)] = inst_25419);

(statearr_25513[(21)] = inst_25416);

(statearr_25513[(27)] = inst_25451);

return statearr_25513;
})();
var statearr_25514_25585 = state_25476__$1;
(statearr_25514_25585[(2)] = null);

(statearr_25514_25585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (43))){
var state_25476__$1 = state_25476;
var statearr_25515_25586 = state_25476__$1;
(statearr_25515_25586[(2)] = null);

(statearr_25515_25586[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (29))){
var inst_25460 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25516_25587 = state_25476__$1;
(statearr_25516_25587[(2)] = inst_25460);

(statearr_25516_25587[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (44))){
var inst_25469 = (state_25476[(2)]);
var state_25476__$1 = (function (){var statearr_25517 = state_25476;
(statearr_25517[(28)] = inst_25469);

return statearr_25517;
})();
var statearr_25518_25588 = state_25476__$1;
(statearr_25518_25588[(2)] = null);

(statearr_25518_25588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (6))){
var inst_25408 = (state_25476[(29)]);
var inst_25407 = cljs.core.deref.call(null,cs);
var inst_25408__$1 = cljs.core.keys.call(null,inst_25407);
var inst_25409 = cljs.core.count.call(null,inst_25408__$1);
var inst_25410 = cljs.core.reset_BANG_.call(null,dctr,inst_25409);
var inst_25415 = cljs.core.seq.call(null,inst_25408__$1);
var inst_25416 = inst_25415;
var inst_25417 = null;
var inst_25418 = (0);
var inst_25419 = (0);
var state_25476__$1 = (function (){var statearr_25519 = state_25476;
(statearr_25519[(20)] = inst_25418);

(statearr_25519[(9)] = inst_25417);

(statearr_25519[(10)] = inst_25419);

(statearr_25519[(29)] = inst_25408__$1);

(statearr_25519[(21)] = inst_25416);

(statearr_25519[(30)] = inst_25410);

return statearr_25519;
})();
var statearr_25520_25589 = state_25476__$1;
(statearr_25520_25589[(2)] = null);

(statearr_25520_25589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (28))){
var inst_25416 = (state_25476[(21)]);
var inst_25435 = (state_25476[(25)]);
var inst_25435__$1 = cljs.core.seq.call(null,inst_25416);
var state_25476__$1 = (function (){var statearr_25521 = state_25476;
(statearr_25521[(25)] = inst_25435__$1);

return statearr_25521;
})();
if(inst_25435__$1){
var statearr_25522_25590 = state_25476__$1;
(statearr_25522_25590[(1)] = (33));

} else {
var statearr_25523_25591 = state_25476__$1;
(statearr_25523_25591[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (25))){
var inst_25418 = (state_25476[(20)]);
var inst_25419 = (state_25476[(10)]);
var inst_25421 = (inst_25419 < inst_25418);
var inst_25422 = inst_25421;
var state_25476__$1 = state_25476;
if(cljs.core.truth_(inst_25422)){
var statearr_25524_25592 = state_25476__$1;
(statearr_25524_25592[(1)] = (27));

} else {
var statearr_25525_25593 = state_25476__$1;
(statearr_25525_25593[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (34))){
var state_25476__$1 = state_25476;
var statearr_25526_25594 = state_25476__$1;
(statearr_25526_25594[(2)] = null);

(statearr_25526_25594[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (17))){
var state_25476__$1 = state_25476;
var statearr_25527_25595 = state_25476__$1;
(statearr_25527_25595[(2)] = null);

(statearr_25527_25595[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (3))){
var inst_25474 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25476__$1,inst_25474);
} else {
if((state_val_25477 === (12))){
var inst_25403 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25528_25596 = state_25476__$1;
(statearr_25528_25596[(2)] = inst_25403);

(statearr_25528_25596[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (2))){
var state_25476__$1 = state_25476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25476__$1,(4),ch);
} else {
if((state_val_25477 === (23))){
var state_25476__$1 = state_25476;
var statearr_25529_25597 = state_25476__$1;
(statearr_25529_25597[(2)] = null);

(statearr_25529_25597[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (35))){
var inst_25458 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25530_25598 = state_25476__$1;
(statearr_25530_25598[(2)] = inst_25458);

(statearr_25530_25598[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (19))){
var inst_25377 = (state_25476[(7)]);
var inst_25381 = cljs.core.chunk_first.call(null,inst_25377);
var inst_25382 = cljs.core.chunk_rest.call(null,inst_25377);
var inst_25383 = cljs.core.count.call(null,inst_25381);
var inst_25357 = inst_25382;
var inst_25358 = inst_25381;
var inst_25359 = inst_25383;
var inst_25360 = (0);
var state_25476__$1 = (function (){var statearr_25531 = state_25476;
(statearr_25531[(13)] = inst_25357);

(statearr_25531[(14)] = inst_25358);

(statearr_25531[(15)] = inst_25360);

(statearr_25531[(17)] = inst_25359);

return statearr_25531;
})();
var statearr_25532_25599 = state_25476__$1;
(statearr_25532_25599[(2)] = null);

(statearr_25532_25599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (11))){
var inst_25357 = (state_25476[(13)]);
var inst_25377 = (state_25476[(7)]);
var inst_25377__$1 = cljs.core.seq.call(null,inst_25357);
var state_25476__$1 = (function (){var statearr_25533 = state_25476;
(statearr_25533[(7)] = inst_25377__$1);

return statearr_25533;
})();
if(inst_25377__$1){
var statearr_25534_25600 = state_25476__$1;
(statearr_25534_25600[(1)] = (16));

} else {
var statearr_25535_25601 = state_25476__$1;
(statearr_25535_25601[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (9))){
var inst_25405 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25536_25602 = state_25476__$1;
(statearr_25536_25602[(2)] = inst_25405);

(statearr_25536_25602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (5))){
var inst_25355 = cljs.core.deref.call(null,cs);
var inst_25356 = cljs.core.seq.call(null,inst_25355);
var inst_25357 = inst_25356;
var inst_25358 = null;
var inst_25359 = (0);
var inst_25360 = (0);
var state_25476__$1 = (function (){var statearr_25537 = state_25476;
(statearr_25537[(13)] = inst_25357);

(statearr_25537[(14)] = inst_25358);

(statearr_25537[(15)] = inst_25360);

(statearr_25537[(17)] = inst_25359);

return statearr_25537;
})();
var statearr_25538_25603 = state_25476__$1;
(statearr_25538_25603[(2)] = null);

(statearr_25538_25603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (14))){
var state_25476__$1 = state_25476;
var statearr_25539_25604 = state_25476__$1;
(statearr_25539_25604[(2)] = null);

(statearr_25539_25604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (45))){
var inst_25466 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25540_25605 = state_25476__$1;
(statearr_25540_25605[(2)] = inst_25466);

(statearr_25540_25605[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (26))){
var inst_25408 = (state_25476[(29)]);
var inst_25462 = (state_25476[(2)]);
var inst_25463 = cljs.core.seq.call(null,inst_25408);
var state_25476__$1 = (function (){var statearr_25541 = state_25476;
(statearr_25541[(31)] = inst_25462);

return statearr_25541;
})();
if(inst_25463){
var statearr_25542_25606 = state_25476__$1;
(statearr_25542_25606[(1)] = (42));

} else {
var statearr_25543_25607 = state_25476__$1;
(statearr_25543_25607[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (16))){
var inst_25377 = (state_25476[(7)]);
var inst_25379 = cljs.core.chunked_seq_QMARK_.call(null,inst_25377);
var state_25476__$1 = state_25476;
if(inst_25379){
var statearr_25544_25608 = state_25476__$1;
(statearr_25544_25608[(1)] = (19));

} else {
var statearr_25545_25609 = state_25476__$1;
(statearr_25545_25609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (38))){
var inst_25455 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25546_25610 = state_25476__$1;
(statearr_25546_25610[(2)] = inst_25455);

(statearr_25546_25610[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (30))){
var state_25476__$1 = state_25476;
var statearr_25547_25611 = state_25476__$1;
(statearr_25547_25611[(2)] = null);

(statearr_25547_25611[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (10))){
var inst_25358 = (state_25476[(14)]);
var inst_25360 = (state_25476[(15)]);
var inst_25366 = cljs.core._nth.call(null,inst_25358,inst_25360);
var inst_25367 = cljs.core.nth.call(null,inst_25366,(0),null);
var inst_25368 = cljs.core.nth.call(null,inst_25366,(1),null);
var state_25476__$1 = (function (){var statearr_25548 = state_25476;
(statearr_25548[(26)] = inst_25367);

return statearr_25548;
})();
if(cljs.core.truth_(inst_25368)){
var statearr_25549_25612 = state_25476__$1;
(statearr_25549_25612[(1)] = (13));

} else {
var statearr_25550_25613 = state_25476__$1;
(statearr_25550_25613[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (18))){
var inst_25401 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25551_25614 = state_25476__$1;
(statearr_25551_25614[(2)] = inst_25401);

(statearr_25551_25614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (42))){
var state_25476__$1 = state_25476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25476__$1,(45),dchan);
} else {
if((state_val_25477 === (37))){
var inst_25348 = (state_25476[(11)]);
var inst_25444 = (state_25476[(23)]);
var inst_25435 = (state_25476[(25)]);
var inst_25444__$1 = cljs.core.first.call(null,inst_25435);
var inst_25445 = cljs.core.async.put_BANG_.call(null,inst_25444__$1,inst_25348,done);
var state_25476__$1 = (function (){var statearr_25552 = state_25476;
(statearr_25552[(23)] = inst_25444__$1);

return statearr_25552;
})();
if(cljs.core.truth_(inst_25445)){
var statearr_25553_25615 = state_25476__$1;
(statearr_25553_25615[(1)] = (39));

} else {
var statearr_25554_25616 = state_25476__$1;
(statearr_25554_25616[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (8))){
var inst_25360 = (state_25476[(15)]);
var inst_25359 = (state_25476[(17)]);
var inst_25362 = (inst_25360 < inst_25359);
var inst_25363 = inst_25362;
var state_25476__$1 = state_25476;
if(cljs.core.truth_(inst_25363)){
var statearr_25555_25617 = state_25476__$1;
(statearr_25555_25617[(1)] = (10));

} else {
var statearr_25556_25618 = state_25476__$1;
(statearr_25556_25618[(1)] = (11));

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
});})(c__24257__auto___25564,cs,m,dchan,dctr,done))
;
return ((function (switch__24145__auto__,c__24257__auto___25564,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24146__auto__ = null;
var cljs$core$async$mult_$_state_machine__24146__auto____0 = (function (){
var statearr_25560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25560[(0)] = cljs$core$async$mult_$_state_machine__24146__auto__);

(statearr_25560[(1)] = (1));

return statearr_25560;
});
var cljs$core$async$mult_$_state_machine__24146__auto____1 = (function (state_25476){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_25476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e25561){if((e25561 instanceof Object)){
var ex__24149__auto__ = e25561;
var statearr_25562_25619 = state_25476;
(statearr_25562_25619[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25620 = state_25476;
state_25476 = G__25620;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24146__auto__ = function(state_25476){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24146__auto____1.call(this,state_25476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24146__auto____0;
cljs$core$async$mult_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24146__auto____1;
return cljs$core$async$mult_$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___25564,cs,m,dchan,dctr,done))
})();
var state__24259__auto__ = (function (){var statearr_25563 = f__24258__auto__.call(null);
(statearr_25563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___25564);

return statearr_25563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___25564,cs,m,dchan,dctr,done))
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
var args25621 = [];
var len__17809__auto___25624 = arguments.length;
var i__17810__auto___25625 = (0);
while(true){
if((i__17810__auto___25625 < len__17809__auto___25624)){
args25621.push((arguments[i__17810__auto___25625]));

var G__25626 = (i__17810__auto___25625 + (1));
i__17810__auto___25625 = G__25626;
continue;
} else {
}
break;
}

var G__25623 = args25621.length;
switch (G__25623) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25621.length)].join('')));

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
var len__17809__auto___25638 = arguments.length;
var i__17810__auto___25639 = (0);
while(true){
if((i__17810__auto___25639 < len__17809__auto___25638)){
args__17816__auto__.push((arguments[i__17810__auto___25639]));

var G__25640 = (i__17810__auto___25639 + (1));
i__17810__auto___25639 = G__25640;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25632){
var map__25633 = p__25632;
var map__25633__$1 = ((((!((map__25633 == null)))?((((map__25633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25633):map__25633);
var opts = map__25633__$1;
var statearr_25635_25641 = state;
(statearr_25635_25641[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25633,map__25633__$1,opts){
return (function (val){
var statearr_25636_25642 = state;
(statearr_25636_25642[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25633,map__25633__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25637_25643 = state;
(statearr_25637_25643[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25628){
var G__25629 = cljs.core.first.call(null,seq25628);
var seq25628__$1 = cljs.core.next.call(null,seq25628);
var G__25630 = cljs.core.first.call(null,seq25628__$1);
var seq25628__$2 = cljs.core.next.call(null,seq25628__$1);
var G__25631 = cljs.core.first.call(null,seq25628__$2);
var seq25628__$3 = cljs.core.next.call(null,seq25628__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25629,G__25630,G__25631,seq25628__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25807 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25808){
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
this.meta25808 = meta25808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25809,meta25808__$1){
var self__ = this;
var _25809__$1 = this;
return (new cljs.core.async.t_cljs$core$async25807(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25808__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25809){
var self__ = this;
var _25809__$1 = this;
return self__.meta25808;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25807.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25807.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25808","meta25808",-383097688,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25807";

cljs.core.async.t_cljs$core$async25807.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25807");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25807 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25807(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25808){
return (new cljs.core.async.t_cljs$core$async25807(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25808));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25807(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24257__auto___25970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___25970,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___25970,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25907){
var state_val_25908 = (state_25907[(1)]);
if((state_val_25908 === (7))){
var inst_25825 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25909_25971 = state_25907__$1;
(statearr_25909_25971[(2)] = inst_25825);

(statearr_25909_25971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (20))){
var inst_25837 = (state_25907[(7)]);
var state_25907__$1 = state_25907;
var statearr_25910_25972 = state_25907__$1;
(statearr_25910_25972[(2)] = inst_25837);

(statearr_25910_25972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (27))){
var state_25907__$1 = state_25907;
var statearr_25911_25973 = state_25907__$1;
(statearr_25911_25973[(2)] = null);

(statearr_25911_25973[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (1))){
var inst_25813 = (state_25907[(8)]);
var inst_25813__$1 = calc_state.call(null);
var inst_25815 = (inst_25813__$1 == null);
var inst_25816 = cljs.core.not.call(null,inst_25815);
var state_25907__$1 = (function (){var statearr_25912 = state_25907;
(statearr_25912[(8)] = inst_25813__$1);

return statearr_25912;
})();
if(inst_25816){
var statearr_25913_25974 = state_25907__$1;
(statearr_25913_25974[(1)] = (2));

} else {
var statearr_25914_25975 = state_25907__$1;
(statearr_25914_25975[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (24))){
var inst_25867 = (state_25907[(9)]);
var inst_25881 = (state_25907[(10)]);
var inst_25860 = (state_25907[(11)]);
var inst_25881__$1 = inst_25860.call(null,inst_25867);
var state_25907__$1 = (function (){var statearr_25915 = state_25907;
(statearr_25915[(10)] = inst_25881__$1);

return statearr_25915;
})();
if(cljs.core.truth_(inst_25881__$1)){
var statearr_25916_25976 = state_25907__$1;
(statearr_25916_25976[(1)] = (29));

} else {
var statearr_25917_25977 = state_25907__$1;
(statearr_25917_25977[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (4))){
var inst_25828 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25828)){
var statearr_25918_25978 = state_25907__$1;
(statearr_25918_25978[(1)] = (8));

} else {
var statearr_25919_25979 = state_25907__$1;
(statearr_25919_25979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (15))){
var inst_25854 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25854)){
var statearr_25920_25980 = state_25907__$1;
(statearr_25920_25980[(1)] = (19));

} else {
var statearr_25921_25981 = state_25907__$1;
(statearr_25921_25981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (21))){
var inst_25859 = (state_25907[(12)]);
var inst_25859__$1 = (state_25907[(2)]);
var inst_25860 = cljs.core.get.call(null,inst_25859__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25861 = cljs.core.get.call(null,inst_25859__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25862 = cljs.core.get.call(null,inst_25859__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25907__$1 = (function (){var statearr_25922 = state_25907;
(statearr_25922[(12)] = inst_25859__$1);

(statearr_25922[(11)] = inst_25860);

(statearr_25922[(13)] = inst_25861);

return statearr_25922;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25907__$1,(22),inst_25862);
} else {
if((state_val_25908 === (31))){
var inst_25889 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25889)){
var statearr_25923_25982 = state_25907__$1;
(statearr_25923_25982[(1)] = (32));

} else {
var statearr_25924_25983 = state_25907__$1;
(statearr_25924_25983[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (32))){
var inst_25866 = (state_25907[(14)]);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25907__$1,(35),out,inst_25866);
} else {
if((state_val_25908 === (33))){
var inst_25859 = (state_25907[(12)]);
var inst_25837 = inst_25859;
var state_25907__$1 = (function (){var statearr_25925 = state_25907;
(statearr_25925[(7)] = inst_25837);

return statearr_25925;
})();
var statearr_25926_25984 = state_25907__$1;
(statearr_25926_25984[(2)] = null);

(statearr_25926_25984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (13))){
var inst_25837 = (state_25907[(7)]);
var inst_25844 = inst_25837.cljs$lang$protocol_mask$partition0$;
var inst_25845 = (inst_25844 & (64));
var inst_25846 = inst_25837.cljs$core$ISeq$;
var inst_25847 = (inst_25845) || (inst_25846);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25847)){
var statearr_25927_25985 = state_25907__$1;
(statearr_25927_25985[(1)] = (16));

} else {
var statearr_25928_25986 = state_25907__$1;
(statearr_25928_25986[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (22))){
var inst_25867 = (state_25907[(9)]);
var inst_25866 = (state_25907[(14)]);
var inst_25865 = (state_25907[(2)]);
var inst_25866__$1 = cljs.core.nth.call(null,inst_25865,(0),null);
var inst_25867__$1 = cljs.core.nth.call(null,inst_25865,(1),null);
var inst_25868 = (inst_25866__$1 == null);
var inst_25869 = cljs.core._EQ_.call(null,inst_25867__$1,change);
var inst_25870 = (inst_25868) || (inst_25869);
var state_25907__$1 = (function (){var statearr_25929 = state_25907;
(statearr_25929[(9)] = inst_25867__$1);

(statearr_25929[(14)] = inst_25866__$1);

return statearr_25929;
})();
if(cljs.core.truth_(inst_25870)){
var statearr_25930_25987 = state_25907__$1;
(statearr_25930_25987[(1)] = (23));

} else {
var statearr_25931_25988 = state_25907__$1;
(statearr_25931_25988[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (36))){
var inst_25859 = (state_25907[(12)]);
var inst_25837 = inst_25859;
var state_25907__$1 = (function (){var statearr_25932 = state_25907;
(statearr_25932[(7)] = inst_25837);

return statearr_25932;
})();
var statearr_25933_25989 = state_25907__$1;
(statearr_25933_25989[(2)] = null);

(statearr_25933_25989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (29))){
var inst_25881 = (state_25907[(10)]);
var state_25907__$1 = state_25907;
var statearr_25934_25990 = state_25907__$1;
(statearr_25934_25990[(2)] = inst_25881);

(statearr_25934_25990[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (6))){
var state_25907__$1 = state_25907;
var statearr_25935_25991 = state_25907__$1;
(statearr_25935_25991[(2)] = false);

(statearr_25935_25991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (28))){
var inst_25877 = (state_25907[(2)]);
var inst_25878 = calc_state.call(null);
var inst_25837 = inst_25878;
var state_25907__$1 = (function (){var statearr_25936 = state_25907;
(statearr_25936[(15)] = inst_25877);

(statearr_25936[(7)] = inst_25837);

return statearr_25936;
})();
var statearr_25937_25992 = state_25907__$1;
(statearr_25937_25992[(2)] = null);

(statearr_25937_25992[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (25))){
var inst_25903 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25938_25993 = state_25907__$1;
(statearr_25938_25993[(2)] = inst_25903);

(statearr_25938_25993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (34))){
var inst_25901 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25939_25994 = state_25907__$1;
(statearr_25939_25994[(2)] = inst_25901);

(statearr_25939_25994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (17))){
var state_25907__$1 = state_25907;
var statearr_25940_25995 = state_25907__$1;
(statearr_25940_25995[(2)] = false);

(statearr_25940_25995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (3))){
var state_25907__$1 = state_25907;
var statearr_25941_25996 = state_25907__$1;
(statearr_25941_25996[(2)] = false);

(statearr_25941_25996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (12))){
var inst_25905 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25907__$1,inst_25905);
} else {
if((state_val_25908 === (2))){
var inst_25813 = (state_25907[(8)]);
var inst_25818 = inst_25813.cljs$lang$protocol_mask$partition0$;
var inst_25819 = (inst_25818 & (64));
var inst_25820 = inst_25813.cljs$core$ISeq$;
var inst_25821 = (inst_25819) || (inst_25820);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25821)){
var statearr_25942_25997 = state_25907__$1;
(statearr_25942_25997[(1)] = (5));

} else {
var statearr_25943_25998 = state_25907__$1;
(statearr_25943_25998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (23))){
var inst_25866 = (state_25907[(14)]);
var inst_25872 = (inst_25866 == null);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25872)){
var statearr_25944_25999 = state_25907__$1;
(statearr_25944_25999[(1)] = (26));

} else {
var statearr_25945_26000 = state_25907__$1;
(statearr_25945_26000[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (35))){
var inst_25892 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25892)){
var statearr_25946_26001 = state_25907__$1;
(statearr_25946_26001[(1)] = (36));

} else {
var statearr_25947_26002 = state_25907__$1;
(statearr_25947_26002[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (19))){
var inst_25837 = (state_25907[(7)]);
var inst_25856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25837);
var state_25907__$1 = state_25907;
var statearr_25948_26003 = state_25907__$1;
(statearr_25948_26003[(2)] = inst_25856);

(statearr_25948_26003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (11))){
var inst_25837 = (state_25907[(7)]);
var inst_25841 = (inst_25837 == null);
var inst_25842 = cljs.core.not.call(null,inst_25841);
var state_25907__$1 = state_25907;
if(inst_25842){
var statearr_25949_26004 = state_25907__$1;
(statearr_25949_26004[(1)] = (13));

} else {
var statearr_25950_26005 = state_25907__$1;
(statearr_25950_26005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (9))){
var inst_25813 = (state_25907[(8)]);
var state_25907__$1 = state_25907;
var statearr_25951_26006 = state_25907__$1;
(statearr_25951_26006[(2)] = inst_25813);

(statearr_25951_26006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (5))){
var state_25907__$1 = state_25907;
var statearr_25952_26007 = state_25907__$1;
(statearr_25952_26007[(2)] = true);

(statearr_25952_26007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (14))){
var state_25907__$1 = state_25907;
var statearr_25953_26008 = state_25907__$1;
(statearr_25953_26008[(2)] = false);

(statearr_25953_26008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (26))){
var inst_25867 = (state_25907[(9)]);
var inst_25874 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25867);
var state_25907__$1 = state_25907;
var statearr_25954_26009 = state_25907__$1;
(statearr_25954_26009[(2)] = inst_25874);

(statearr_25954_26009[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (16))){
var state_25907__$1 = state_25907;
var statearr_25955_26010 = state_25907__$1;
(statearr_25955_26010[(2)] = true);

(statearr_25955_26010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (38))){
var inst_25897 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25956_26011 = state_25907__$1;
(statearr_25956_26011[(2)] = inst_25897);

(statearr_25956_26011[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (30))){
var inst_25867 = (state_25907[(9)]);
var inst_25860 = (state_25907[(11)]);
var inst_25861 = (state_25907[(13)]);
var inst_25884 = cljs.core.empty_QMARK_.call(null,inst_25860);
var inst_25885 = inst_25861.call(null,inst_25867);
var inst_25886 = cljs.core.not.call(null,inst_25885);
var inst_25887 = (inst_25884) && (inst_25886);
var state_25907__$1 = state_25907;
var statearr_25957_26012 = state_25907__$1;
(statearr_25957_26012[(2)] = inst_25887);

(statearr_25957_26012[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (10))){
var inst_25813 = (state_25907[(8)]);
var inst_25833 = (state_25907[(2)]);
var inst_25834 = cljs.core.get.call(null,inst_25833,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25835 = cljs.core.get.call(null,inst_25833,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25836 = cljs.core.get.call(null,inst_25833,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25837 = inst_25813;
var state_25907__$1 = (function (){var statearr_25958 = state_25907;
(statearr_25958[(16)] = inst_25836);

(statearr_25958[(17)] = inst_25835);

(statearr_25958[(18)] = inst_25834);

(statearr_25958[(7)] = inst_25837);

return statearr_25958;
})();
var statearr_25959_26013 = state_25907__$1;
(statearr_25959_26013[(2)] = null);

(statearr_25959_26013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (18))){
var inst_25851 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25960_26014 = state_25907__$1;
(statearr_25960_26014[(2)] = inst_25851);

(statearr_25960_26014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (37))){
var state_25907__$1 = state_25907;
var statearr_25961_26015 = state_25907__$1;
(statearr_25961_26015[(2)] = null);

(statearr_25961_26015[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (8))){
var inst_25813 = (state_25907[(8)]);
var inst_25830 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25813);
var state_25907__$1 = state_25907;
var statearr_25962_26016 = state_25907__$1;
(statearr_25962_26016[(2)] = inst_25830);

(statearr_25962_26016[(1)] = (10));


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
});})(c__24257__auto___25970,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24145__auto__,c__24257__auto___25970,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24146__auto__ = null;
var cljs$core$async$mix_$_state_machine__24146__auto____0 = (function (){
var statearr_25966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25966[(0)] = cljs$core$async$mix_$_state_machine__24146__auto__);

(statearr_25966[(1)] = (1));

return statearr_25966;
});
var cljs$core$async$mix_$_state_machine__24146__auto____1 = (function (state_25907){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_25907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e25967){if((e25967 instanceof Object)){
var ex__24149__auto__ = e25967;
var statearr_25968_26017 = state_25907;
(statearr_25968_26017[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26018 = state_25907;
state_25907 = G__26018;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24146__auto__ = function(state_25907){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24146__auto____1.call(this,state_25907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24146__auto____0;
cljs$core$async$mix_$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24146__auto____1;
return cljs$core$async$mix_$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___25970,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24259__auto__ = (function (){var statearr_25969 = f__24258__auto__.call(null);
(statearr_25969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___25970);

return statearr_25969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___25970,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26019 = [];
var len__17809__auto___26022 = arguments.length;
var i__17810__auto___26023 = (0);
while(true){
if((i__17810__auto___26023 < len__17809__auto___26022)){
args26019.push((arguments[i__17810__auto___26023]));

var G__26024 = (i__17810__auto___26023 + (1));
i__17810__auto___26023 = G__26024;
continue;
} else {
}
break;
}

var G__26021 = args26019.length;
switch (G__26021) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26019.length)].join('')));

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
var args26027 = [];
var len__17809__auto___26152 = arguments.length;
var i__17810__auto___26153 = (0);
while(true){
if((i__17810__auto___26153 < len__17809__auto___26152)){
args26027.push((arguments[i__17810__auto___26153]));

var G__26154 = (i__17810__auto___26153 + (1));
i__17810__auto___26153 = G__26154;
continue;
} else {
}
break;
}

var G__26029 = args26027.length;
switch (G__26029) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26027.length)].join('')));

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
return (function (p1__26026_SHARP_){
if(cljs.core.truth_(p1__26026_SHARP_.call(null,topic))){
return p1__26026_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26026_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26030 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26031){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26031 = meta26031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26032,meta26031__$1){
var self__ = this;
var _26032__$1 = this;
return (new cljs.core.async.t_cljs$core$async26030(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26031__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26032){
var self__ = this;
var _26032__$1 = this;
return self__.meta26031;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26030.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26031","meta26031",-741311444,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26030";

cljs.core.async.t_cljs$core$async26030.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26030");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26030 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26030(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26031){
return (new cljs.core.async.t_cljs$core$async26030(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26031));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26030(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24257__auto___26156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___26156,mults,ensure_mult,p){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___26156,mults,ensure_mult,p){
return (function (state_26104){
var state_val_26105 = (state_26104[(1)]);
if((state_val_26105 === (7))){
var inst_26100 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26106_26157 = state_26104__$1;
(statearr_26106_26157[(2)] = inst_26100);

(statearr_26106_26157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (20))){
var state_26104__$1 = state_26104;
var statearr_26107_26158 = state_26104__$1;
(statearr_26107_26158[(2)] = null);

(statearr_26107_26158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (1))){
var state_26104__$1 = state_26104;
var statearr_26108_26159 = state_26104__$1;
(statearr_26108_26159[(2)] = null);

(statearr_26108_26159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (24))){
var inst_26083 = (state_26104[(7)]);
var inst_26092 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26083);
var state_26104__$1 = state_26104;
var statearr_26109_26160 = state_26104__$1;
(statearr_26109_26160[(2)] = inst_26092);

(statearr_26109_26160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (4))){
var inst_26035 = (state_26104[(8)]);
var inst_26035__$1 = (state_26104[(2)]);
var inst_26036 = (inst_26035__$1 == null);
var state_26104__$1 = (function (){var statearr_26110 = state_26104;
(statearr_26110[(8)] = inst_26035__$1);

return statearr_26110;
})();
if(cljs.core.truth_(inst_26036)){
var statearr_26111_26161 = state_26104__$1;
(statearr_26111_26161[(1)] = (5));

} else {
var statearr_26112_26162 = state_26104__$1;
(statearr_26112_26162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (15))){
var inst_26077 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26113_26163 = state_26104__$1;
(statearr_26113_26163[(2)] = inst_26077);

(statearr_26113_26163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (21))){
var inst_26097 = (state_26104[(2)]);
var state_26104__$1 = (function (){var statearr_26114 = state_26104;
(statearr_26114[(9)] = inst_26097);

return statearr_26114;
})();
var statearr_26115_26164 = state_26104__$1;
(statearr_26115_26164[(2)] = null);

(statearr_26115_26164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (13))){
var inst_26059 = (state_26104[(10)]);
var inst_26061 = cljs.core.chunked_seq_QMARK_.call(null,inst_26059);
var state_26104__$1 = state_26104;
if(inst_26061){
var statearr_26116_26165 = state_26104__$1;
(statearr_26116_26165[(1)] = (16));

} else {
var statearr_26117_26166 = state_26104__$1;
(statearr_26117_26166[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (22))){
var inst_26089 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
if(cljs.core.truth_(inst_26089)){
var statearr_26118_26167 = state_26104__$1;
(statearr_26118_26167[(1)] = (23));

} else {
var statearr_26119_26168 = state_26104__$1;
(statearr_26119_26168[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (6))){
var inst_26085 = (state_26104[(11)]);
var inst_26083 = (state_26104[(7)]);
var inst_26035 = (state_26104[(8)]);
var inst_26083__$1 = topic_fn.call(null,inst_26035);
var inst_26084 = cljs.core.deref.call(null,mults);
var inst_26085__$1 = cljs.core.get.call(null,inst_26084,inst_26083__$1);
var state_26104__$1 = (function (){var statearr_26120 = state_26104;
(statearr_26120[(11)] = inst_26085__$1);

(statearr_26120[(7)] = inst_26083__$1);

return statearr_26120;
})();
if(cljs.core.truth_(inst_26085__$1)){
var statearr_26121_26169 = state_26104__$1;
(statearr_26121_26169[(1)] = (19));

} else {
var statearr_26122_26170 = state_26104__$1;
(statearr_26122_26170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (25))){
var inst_26094 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26123_26171 = state_26104__$1;
(statearr_26123_26171[(2)] = inst_26094);

(statearr_26123_26171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (17))){
var inst_26059 = (state_26104[(10)]);
var inst_26068 = cljs.core.first.call(null,inst_26059);
var inst_26069 = cljs.core.async.muxch_STAR_.call(null,inst_26068);
var inst_26070 = cljs.core.async.close_BANG_.call(null,inst_26069);
var inst_26071 = cljs.core.next.call(null,inst_26059);
var inst_26045 = inst_26071;
var inst_26046 = null;
var inst_26047 = (0);
var inst_26048 = (0);
var state_26104__$1 = (function (){var statearr_26124 = state_26104;
(statearr_26124[(12)] = inst_26045);

(statearr_26124[(13)] = inst_26048);

(statearr_26124[(14)] = inst_26070);

(statearr_26124[(15)] = inst_26047);

(statearr_26124[(16)] = inst_26046);

return statearr_26124;
})();
var statearr_26125_26172 = state_26104__$1;
(statearr_26125_26172[(2)] = null);

(statearr_26125_26172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (3))){
var inst_26102 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26104__$1,inst_26102);
} else {
if((state_val_26105 === (12))){
var inst_26079 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26126_26173 = state_26104__$1;
(statearr_26126_26173[(2)] = inst_26079);

(statearr_26126_26173[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (2))){
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26104__$1,(4),ch);
} else {
if((state_val_26105 === (23))){
var state_26104__$1 = state_26104;
var statearr_26127_26174 = state_26104__$1;
(statearr_26127_26174[(2)] = null);

(statearr_26127_26174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (19))){
var inst_26085 = (state_26104[(11)]);
var inst_26035 = (state_26104[(8)]);
var inst_26087 = cljs.core.async.muxch_STAR_.call(null,inst_26085);
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26104__$1,(22),inst_26087,inst_26035);
} else {
if((state_val_26105 === (11))){
var inst_26045 = (state_26104[(12)]);
var inst_26059 = (state_26104[(10)]);
var inst_26059__$1 = cljs.core.seq.call(null,inst_26045);
var state_26104__$1 = (function (){var statearr_26128 = state_26104;
(statearr_26128[(10)] = inst_26059__$1);

return statearr_26128;
})();
if(inst_26059__$1){
var statearr_26129_26175 = state_26104__$1;
(statearr_26129_26175[(1)] = (13));

} else {
var statearr_26130_26176 = state_26104__$1;
(statearr_26130_26176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (9))){
var inst_26081 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26131_26177 = state_26104__$1;
(statearr_26131_26177[(2)] = inst_26081);

(statearr_26131_26177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (5))){
var inst_26042 = cljs.core.deref.call(null,mults);
var inst_26043 = cljs.core.vals.call(null,inst_26042);
var inst_26044 = cljs.core.seq.call(null,inst_26043);
var inst_26045 = inst_26044;
var inst_26046 = null;
var inst_26047 = (0);
var inst_26048 = (0);
var state_26104__$1 = (function (){var statearr_26132 = state_26104;
(statearr_26132[(12)] = inst_26045);

(statearr_26132[(13)] = inst_26048);

(statearr_26132[(15)] = inst_26047);

(statearr_26132[(16)] = inst_26046);

return statearr_26132;
})();
var statearr_26133_26178 = state_26104__$1;
(statearr_26133_26178[(2)] = null);

(statearr_26133_26178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (14))){
var state_26104__$1 = state_26104;
var statearr_26137_26179 = state_26104__$1;
(statearr_26137_26179[(2)] = null);

(statearr_26137_26179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (16))){
var inst_26059 = (state_26104[(10)]);
var inst_26063 = cljs.core.chunk_first.call(null,inst_26059);
var inst_26064 = cljs.core.chunk_rest.call(null,inst_26059);
var inst_26065 = cljs.core.count.call(null,inst_26063);
var inst_26045 = inst_26064;
var inst_26046 = inst_26063;
var inst_26047 = inst_26065;
var inst_26048 = (0);
var state_26104__$1 = (function (){var statearr_26138 = state_26104;
(statearr_26138[(12)] = inst_26045);

(statearr_26138[(13)] = inst_26048);

(statearr_26138[(15)] = inst_26047);

(statearr_26138[(16)] = inst_26046);

return statearr_26138;
})();
var statearr_26139_26180 = state_26104__$1;
(statearr_26139_26180[(2)] = null);

(statearr_26139_26180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (10))){
var inst_26045 = (state_26104[(12)]);
var inst_26048 = (state_26104[(13)]);
var inst_26047 = (state_26104[(15)]);
var inst_26046 = (state_26104[(16)]);
var inst_26053 = cljs.core._nth.call(null,inst_26046,inst_26048);
var inst_26054 = cljs.core.async.muxch_STAR_.call(null,inst_26053);
var inst_26055 = cljs.core.async.close_BANG_.call(null,inst_26054);
var inst_26056 = (inst_26048 + (1));
var tmp26134 = inst_26045;
var tmp26135 = inst_26047;
var tmp26136 = inst_26046;
var inst_26045__$1 = tmp26134;
var inst_26046__$1 = tmp26136;
var inst_26047__$1 = tmp26135;
var inst_26048__$1 = inst_26056;
var state_26104__$1 = (function (){var statearr_26140 = state_26104;
(statearr_26140[(12)] = inst_26045__$1);

(statearr_26140[(13)] = inst_26048__$1);

(statearr_26140[(15)] = inst_26047__$1);

(statearr_26140[(16)] = inst_26046__$1);

(statearr_26140[(17)] = inst_26055);

return statearr_26140;
})();
var statearr_26141_26181 = state_26104__$1;
(statearr_26141_26181[(2)] = null);

(statearr_26141_26181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (18))){
var inst_26074 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26142_26182 = state_26104__$1;
(statearr_26142_26182[(2)] = inst_26074);

(statearr_26142_26182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (8))){
var inst_26048 = (state_26104[(13)]);
var inst_26047 = (state_26104[(15)]);
var inst_26050 = (inst_26048 < inst_26047);
var inst_26051 = inst_26050;
var state_26104__$1 = state_26104;
if(cljs.core.truth_(inst_26051)){
var statearr_26143_26183 = state_26104__$1;
(statearr_26143_26183[(1)] = (10));

} else {
var statearr_26144_26184 = state_26104__$1;
(statearr_26144_26184[(1)] = (11));

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
});})(c__24257__auto___26156,mults,ensure_mult,p))
;
return ((function (switch__24145__auto__,c__24257__auto___26156,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24146__auto__ = null;
var cljs$core$async$state_machine__24146__auto____0 = (function (){
var statearr_26148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26148[(0)] = cljs$core$async$state_machine__24146__auto__);

(statearr_26148[(1)] = (1));

return statearr_26148;
});
var cljs$core$async$state_machine__24146__auto____1 = (function (state_26104){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_26104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e26149){if((e26149 instanceof Object)){
var ex__24149__auto__ = e26149;
var statearr_26150_26185 = state_26104;
(statearr_26150_26185[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26186 = state_26104;
state_26104 = G__26186;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$state_machine__24146__auto__ = function(state_26104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24146__auto____1.call(this,state_26104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24146__auto____0;
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24146__auto____1;
return cljs$core$async$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___26156,mults,ensure_mult,p))
})();
var state__24259__auto__ = (function (){var statearr_26151 = f__24258__auto__.call(null);
(statearr_26151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___26156);

return statearr_26151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___26156,mults,ensure_mult,p))
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
var args26187 = [];
var len__17809__auto___26190 = arguments.length;
var i__17810__auto___26191 = (0);
while(true){
if((i__17810__auto___26191 < len__17809__auto___26190)){
args26187.push((arguments[i__17810__auto___26191]));

var G__26192 = (i__17810__auto___26191 + (1));
i__17810__auto___26191 = G__26192;
continue;
} else {
}
break;
}

var G__26189 = args26187.length;
switch (G__26189) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26187.length)].join('')));

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
var args26194 = [];
var len__17809__auto___26197 = arguments.length;
var i__17810__auto___26198 = (0);
while(true){
if((i__17810__auto___26198 < len__17809__auto___26197)){
args26194.push((arguments[i__17810__auto___26198]));

var G__26199 = (i__17810__auto___26198 + (1));
i__17810__auto___26198 = G__26199;
continue;
} else {
}
break;
}

var G__26196 = args26194.length;
switch (G__26196) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26194.length)].join('')));

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
var args26201 = [];
var len__17809__auto___26272 = arguments.length;
var i__17810__auto___26273 = (0);
while(true){
if((i__17810__auto___26273 < len__17809__auto___26272)){
args26201.push((arguments[i__17810__auto___26273]));

var G__26274 = (i__17810__auto___26273 + (1));
i__17810__auto___26273 = G__26274;
continue;
} else {
}
break;
}

var G__26203 = args26201.length;
switch (G__26203) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26201.length)].join('')));

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
var c__24257__auto___26276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___26276,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___26276,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26242){
var state_val_26243 = (state_26242[(1)]);
if((state_val_26243 === (7))){
var state_26242__$1 = state_26242;
var statearr_26244_26277 = state_26242__$1;
(statearr_26244_26277[(2)] = null);

(statearr_26244_26277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (1))){
var state_26242__$1 = state_26242;
var statearr_26245_26278 = state_26242__$1;
(statearr_26245_26278[(2)] = null);

(statearr_26245_26278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (4))){
var inst_26206 = (state_26242[(7)]);
var inst_26208 = (inst_26206 < cnt);
var state_26242__$1 = state_26242;
if(cljs.core.truth_(inst_26208)){
var statearr_26246_26279 = state_26242__$1;
(statearr_26246_26279[(1)] = (6));

} else {
var statearr_26247_26280 = state_26242__$1;
(statearr_26247_26280[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (15))){
var inst_26238 = (state_26242[(2)]);
var state_26242__$1 = state_26242;
var statearr_26248_26281 = state_26242__$1;
(statearr_26248_26281[(2)] = inst_26238);

(statearr_26248_26281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (13))){
var inst_26231 = cljs.core.async.close_BANG_.call(null,out);
var state_26242__$1 = state_26242;
var statearr_26249_26282 = state_26242__$1;
(statearr_26249_26282[(2)] = inst_26231);

(statearr_26249_26282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (6))){
var state_26242__$1 = state_26242;
var statearr_26250_26283 = state_26242__$1;
(statearr_26250_26283[(2)] = null);

(statearr_26250_26283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (3))){
var inst_26240 = (state_26242[(2)]);
var state_26242__$1 = state_26242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26242__$1,inst_26240);
} else {
if((state_val_26243 === (12))){
var inst_26228 = (state_26242[(8)]);
var inst_26228__$1 = (state_26242[(2)]);
var inst_26229 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26228__$1);
var state_26242__$1 = (function (){var statearr_26251 = state_26242;
(statearr_26251[(8)] = inst_26228__$1);

return statearr_26251;
})();
if(cljs.core.truth_(inst_26229)){
var statearr_26252_26284 = state_26242__$1;
(statearr_26252_26284[(1)] = (13));

} else {
var statearr_26253_26285 = state_26242__$1;
(statearr_26253_26285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (2))){
var inst_26205 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26206 = (0);
var state_26242__$1 = (function (){var statearr_26254 = state_26242;
(statearr_26254[(9)] = inst_26205);

(statearr_26254[(7)] = inst_26206);

return statearr_26254;
})();
var statearr_26255_26286 = state_26242__$1;
(statearr_26255_26286[(2)] = null);

(statearr_26255_26286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (11))){
var inst_26206 = (state_26242[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26242,(10),Object,null,(9));
var inst_26215 = chs__$1.call(null,inst_26206);
var inst_26216 = done.call(null,inst_26206);
var inst_26217 = cljs.core.async.take_BANG_.call(null,inst_26215,inst_26216);
var state_26242__$1 = state_26242;
var statearr_26256_26287 = state_26242__$1;
(statearr_26256_26287[(2)] = inst_26217);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26242__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (9))){
var inst_26206 = (state_26242[(7)]);
var inst_26219 = (state_26242[(2)]);
var inst_26220 = (inst_26206 + (1));
var inst_26206__$1 = inst_26220;
var state_26242__$1 = (function (){var statearr_26257 = state_26242;
(statearr_26257[(10)] = inst_26219);

(statearr_26257[(7)] = inst_26206__$1);

return statearr_26257;
})();
var statearr_26258_26288 = state_26242__$1;
(statearr_26258_26288[(2)] = null);

(statearr_26258_26288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (5))){
var inst_26226 = (state_26242[(2)]);
var state_26242__$1 = (function (){var statearr_26259 = state_26242;
(statearr_26259[(11)] = inst_26226);

return statearr_26259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26242__$1,(12),dchan);
} else {
if((state_val_26243 === (14))){
var inst_26228 = (state_26242[(8)]);
var inst_26233 = cljs.core.apply.call(null,f,inst_26228);
var state_26242__$1 = state_26242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26242__$1,(16),out,inst_26233);
} else {
if((state_val_26243 === (16))){
var inst_26235 = (state_26242[(2)]);
var state_26242__$1 = (function (){var statearr_26260 = state_26242;
(statearr_26260[(12)] = inst_26235);

return statearr_26260;
})();
var statearr_26261_26289 = state_26242__$1;
(statearr_26261_26289[(2)] = null);

(statearr_26261_26289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (10))){
var inst_26210 = (state_26242[(2)]);
var inst_26211 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26242__$1 = (function (){var statearr_26262 = state_26242;
(statearr_26262[(13)] = inst_26210);

return statearr_26262;
})();
var statearr_26263_26290 = state_26242__$1;
(statearr_26263_26290[(2)] = inst_26211);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26242__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26243 === (8))){
var inst_26224 = (state_26242[(2)]);
var state_26242__$1 = state_26242;
var statearr_26264_26291 = state_26242__$1;
(statearr_26264_26291[(2)] = inst_26224);

(statearr_26264_26291[(1)] = (5));


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
});})(c__24257__auto___26276,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24145__auto__,c__24257__auto___26276,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24146__auto__ = null;
var cljs$core$async$state_machine__24146__auto____0 = (function (){
var statearr_26268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26268[(0)] = cljs$core$async$state_machine__24146__auto__);

(statearr_26268[(1)] = (1));

return statearr_26268;
});
var cljs$core$async$state_machine__24146__auto____1 = (function (state_26242){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_26242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e26269){if((e26269 instanceof Object)){
var ex__24149__auto__ = e26269;
var statearr_26270_26292 = state_26242;
(statearr_26270_26292[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26293 = state_26242;
state_26242 = G__26293;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$state_machine__24146__auto__ = function(state_26242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24146__auto____1.call(this,state_26242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24146__auto____0;
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24146__auto____1;
return cljs$core$async$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___26276,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24259__auto__ = (function (){var statearr_26271 = f__24258__auto__.call(null);
(statearr_26271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___26276);

return statearr_26271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___26276,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26295 = [];
var len__17809__auto___26351 = arguments.length;
var i__17810__auto___26352 = (0);
while(true){
if((i__17810__auto___26352 < len__17809__auto___26351)){
args26295.push((arguments[i__17810__auto___26352]));

var G__26353 = (i__17810__auto___26352 + (1));
i__17810__auto___26352 = G__26353;
continue;
} else {
}
break;
}

var G__26297 = args26295.length;
switch (G__26297) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26295.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24257__auto___26355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___26355,out){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___26355,out){
return (function (state_26327){
var state_val_26328 = (state_26327[(1)]);
if((state_val_26328 === (7))){
var inst_26306 = (state_26327[(7)]);
var inst_26307 = (state_26327[(8)]);
var inst_26306__$1 = (state_26327[(2)]);
var inst_26307__$1 = cljs.core.nth.call(null,inst_26306__$1,(0),null);
var inst_26308 = cljs.core.nth.call(null,inst_26306__$1,(1),null);
var inst_26309 = (inst_26307__$1 == null);
var state_26327__$1 = (function (){var statearr_26329 = state_26327;
(statearr_26329[(7)] = inst_26306__$1);

(statearr_26329[(9)] = inst_26308);

(statearr_26329[(8)] = inst_26307__$1);

return statearr_26329;
})();
if(cljs.core.truth_(inst_26309)){
var statearr_26330_26356 = state_26327__$1;
(statearr_26330_26356[(1)] = (8));

} else {
var statearr_26331_26357 = state_26327__$1;
(statearr_26331_26357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (1))){
var inst_26298 = cljs.core.vec.call(null,chs);
var inst_26299 = inst_26298;
var state_26327__$1 = (function (){var statearr_26332 = state_26327;
(statearr_26332[(10)] = inst_26299);

return statearr_26332;
})();
var statearr_26333_26358 = state_26327__$1;
(statearr_26333_26358[(2)] = null);

(statearr_26333_26358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (4))){
var inst_26299 = (state_26327[(10)]);
var state_26327__$1 = state_26327;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26327__$1,(7),inst_26299);
} else {
if((state_val_26328 === (6))){
var inst_26323 = (state_26327[(2)]);
var state_26327__$1 = state_26327;
var statearr_26334_26359 = state_26327__$1;
(statearr_26334_26359[(2)] = inst_26323);

(statearr_26334_26359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (3))){
var inst_26325 = (state_26327[(2)]);
var state_26327__$1 = state_26327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26327__$1,inst_26325);
} else {
if((state_val_26328 === (2))){
var inst_26299 = (state_26327[(10)]);
var inst_26301 = cljs.core.count.call(null,inst_26299);
var inst_26302 = (inst_26301 > (0));
var state_26327__$1 = state_26327;
if(cljs.core.truth_(inst_26302)){
var statearr_26336_26360 = state_26327__$1;
(statearr_26336_26360[(1)] = (4));

} else {
var statearr_26337_26361 = state_26327__$1;
(statearr_26337_26361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (11))){
var inst_26299 = (state_26327[(10)]);
var inst_26316 = (state_26327[(2)]);
var tmp26335 = inst_26299;
var inst_26299__$1 = tmp26335;
var state_26327__$1 = (function (){var statearr_26338 = state_26327;
(statearr_26338[(11)] = inst_26316);

(statearr_26338[(10)] = inst_26299__$1);

return statearr_26338;
})();
var statearr_26339_26362 = state_26327__$1;
(statearr_26339_26362[(2)] = null);

(statearr_26339_26362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (9))){
var inst_26307 = (state_26327[(8)]);
var state_26327__$1 = state_26327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26327__$1,(11),out,inst_26307);
} else {
if((state_val_26328 === (5))){
var inst_26321 = cljs.core.async.close_BANG_.call(null,out);
var state_26327__$1 = state_26327;
var statearr_26340_26363 = state_26327__$1;
(statearr_26340_26363[(2)] = inst_26321);

(statearr_26340_26363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (10))){
var inst_26319 = (state_26327[(2)]);
var state_26327__$1 = state_26327;
var statearr_26341_26364 = state_26327__$1;
(statearr_26341_26364[(2)] = inst_26319);

(statearr_26341_26364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26328 === (8))){
var inst_26306 = (state_26327[(7)]);
var inst_26308 = (state_26327[(9)]);
var inst_26307 = (state_26327[(8)]);
var inst_26299 = (state_26327[(10)]);
var inst_26311 = (function (){var cs = inst_26299;
var vec__26304 = inst_26306;
var v = inst_26307;
var c = inst_26308;
return ((function (cs,vec__26304,v,c,inst_26306,inst_26308,inst_26307,inst_26299,state_val_26328,c__24257__auto___26355,out){
return (function (p1__26294_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26294_SHARP_);
});
;})(cs,vec__26304,v,c,inst_26306,inst_26308,inst_26307,inst_26299,state_val_26328,c__24257__auto___26355,out))
})();
var inst_26312 = cljs.core.filterv.call(null,inst_26311,inst_26299);
var inst_26299__$1 = inst_26312;
var state_26327__$1 = (function (){var statearr_26342 = state_26327;
(statearr_26342[(10)] = inst_26299__$1);

return statearr_26342;
})();
var statearr_26343_26365 = state_26327__$1;
(statearr_26343_26365[(2)] = null);

(statearr_26343_26365[(1)] = (2));


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
});})(c__24257__auto___26355,out))
;
return ((function (switch__24145__auto__,c__24257__auto___26355,out){
return (function() {
var cljs$core$async$state_machine__24146__auto__ = null;
var cljs$core$async$state_machine__24146__auto____0 = (function (){
var statearr_26347 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26347[(0)] = cljs$core$async$state_machine__24146__auto__);

(statearr_26347[(1)] = (1));

return statearr_26347;
});
var cljs$core$async$state_machine__24146__auto____1 = (function (state_26327){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_26327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e26348){if((e26348 instanceof Object)){
var ex__24149__auto__ = e26348;
var statearr_26349_26366 = state_26327;
(statearr_26349_26366[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26367 = state_26327;
state_26327 = G__26367;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$state_machine__24146__auto__ = function(state_26327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24146__auto____1.call(this,state_26327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24146__auto____0;
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24146__auto____1;
return cljs$core$async$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___26355,out))
})();
var state__24259__auto__ = (function (){var statearr_26350 = f__24258__auto__.call(null);
(statearr_26350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___26355);

return statearr_26350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___26355,out))
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
var args26368 = [];
var len__17809__auto___26417 = arguments.length;
var i__17810__auto___26418 = (0);
while(true){
if((i__17810__auto___26418 < len__17809__auto___26417)){
args26368.push((arguments[i__17810__auto___26418]));

var G__26419 = (i__17810__auto___26418 + (1));
i__17810__auto___26418 = G__26419;
continue;
} else {
}
break;
}

var G__26370 = args26368.length;
switch (G__26370) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26368.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24257__auto___26421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___26421,out){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___26421,out){
return (function (state_26394){
var state_val_26395 = (state_26394[(1)]);
if((state_val_26395 === (7))){
var inst_26376 = (state_26394[(7)]);
var inst_26376__$1 = (state_26394[(2)]);
var inst_26377 = (inst_26376__$1 == null);
var inst_26378 = cljs.core.not.call(null,inst_26377);
var state_26394__$1 = (function (){var statearr_26396 = state_26394;
(statearr_26396[(7)] = inst_26376__$1);

return statearr_26396;
})();
if(inst_26378){
var statearr_26397_26422 = state_26394__$1;
(statearr_26397_26422[(1)] = (8));

} else {
var statearr_26398_26423 = state_26394__$1;
(statearr_26398_26423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (1))){
var inst_26371 = (0);
var state_26394__$1 = (function (){var statearr_26399 = state_26394;
(statearr_26399[(8)] = inst_26371);

return statearr_26399;
})();
var statearr_26400_26424 = state_26394__$1;
(statearr_26400_26424[(2)] = null);

(statearr_26400_26424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (4))){
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26394__$1,(7),ch);
} else {
if((state_val_26395 === (6))){
var inst_26389 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26401_26425 = state_26394__$1;
(statearr_26401_26425[(2)] = inst_26389);

(statearr_26401_26425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (3))){
var inst_26391 = (state_26394[(2)]);
var inst_26392 = cljs.core.async.close_BANG_.call(null,out);
var state_26394__$1 = (function (){var statearr_26402 = state_26394;
(statearr_26402[(9)] = inst_26391);

return statearr_26402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26394__$1,inst_26392);
} else {
if((state_val_26395 === (2))){
var inst_26371 = (state_26394[(8)]);
var inst_26373 = (inst_26371 < n);
var state_26394__$1 = state_26394;
if(cljs.core.truth_(inst_26373)){
var statearr_26403_26426 = state_26394__$1;
(statearr_26403_26426[(1)] = (4));

} else {
var statearr_26404_26427 = state_26394__$1;
(statearr_26404_26427[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (11))){
var inst_26371 = (state_26394[(8)]);
var inst_26381 = (state_26394[(2)]);
var inst_26382 = (inst_26371 + (1));
var inst_26371__$1 = inst_26382;
var state_26394__$1 = (function (){var statearr_26405 = state_26394;
(statearr_26405[(8)] = inst_26371__$1);

(statearr_26405[(10)] = inst_26381);

return statearr_26405;
})();
var statearr_26406_26428 = state_26394__$1;
(statearr_26406_26428[(2)] = null);

(statearr_26406_26428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (9))){
var state_26394__$1 = state_26394;
var statearr_26407_26429 = state_26394__$1;
(statearr_26407_26429[(2)] = null);

(statearr_26407_26429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (5))){
var state_26394__$1 = state_26394;
var statearr_26408_26430 = state_26394__$1;
(statearr_26408_26430[(2)] = null);

(statearr_26408_26430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (10))){
var inst_26386 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26409_26431 = state_26394__$1;
(statearr_26409_26431[(2)] = inst_26386);

(statearr_26409_26431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26395 === (8))){
var inst_26376 = (state_26394[(7)]);
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26394__$1,(11),out,inst_26376);
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
});})(c__24257__auto___26421,out))
;
return ((function (switch__24145__auto__,c__24257__auto___26421,out){
return (function() {
var cljs$core$async$state_machine__24146__auto__ = null;
var cljs$core$async$state_machine__24146__auto____0 = (function (){
var statearr_26413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26413[(0)] = cljs$core$async$state_machine__24146__auto__);

(statearr_26413[(1)] = (1));

return statearr_26413;
});
var cljs$core$async$state_machine__24146__auto____1 = (function (state_26394){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_26394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e26414){if((e26414 instanceof Object)){
var ex__24149__auto__ = e26414;
var statearr_26415_26432 = state_26394;
(statearr_26415_26432[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26433 = state_26394;
state_26394 = G__26433;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$state_machine__24146__auto__ = function(state_26394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24146__auto____1.call(this,state_26394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24146__auto____0;
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24146__auto____1;
return cljs$core$async$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___26421,out))
})();
var state__24259__auto__ = (function (){var statearr_26416 = f__24258__auto__.call(null);
(statearr_26416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___26421);

return statearr_26416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___26421,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26441 = (function (map_LT_,f,ch,meta26442){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26442 = meta26442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26443,meta26442__$1){
var self__ = this;
var _26443__$1 = this;
return (new cljs.core.async.t_cljs$core$async26441(self__.map_LT_,self__.f,self__.ch,meta26442__$1));
});

cljs.core.async.t_cljs$core$async26441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26443){
var self__ = this;
var _26443__$1 = this;
return self__.meta26442;
});

cljs.core.async.t_cljs$core$async26441.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26441.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26441.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26441.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26441.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26444 = (function (map_LT_,f,ch,meta26442,_,fn1,meta26445){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26442 = meta26442;
this._ = _;
this.fn1 = fn1;
this.meta26445 = meta26445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26446,meta26445__$1){
var self__ = this;
var _26446__$1 = this;
return (new cljs.core.async.t_cljs$core$async26444(self__.map_LT_,self__.f,self__.ch,self__.meta26442,self__._,self__.fn1,meta26445__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26446){
var self__ = this;
var _26446__$1 = this;
return self__.meta26445;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26444.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26444.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26434_SHARP_){
return f1.call(null,(((p1__26434_SHARP_ == null))?null:self__.f.call(null,p1__26434_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26444.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26442","meta26442",-1581692174,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26441","cljs.core.async/t_cljs$core$async26441",1240681986,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26445","meta26445",501927957,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26444";

cljs.core.async.t_cljs$core$async26444.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26444");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26444 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26444(map_LT___$1,f__$1,ch__$1,meta26442__$1,___$2,fn1__$1,meta26445){
return (new cljs.core.async.t_cljs$core$async26444(map_LT___$1,f__$1,ch__$1,meta26442__$1,___$2,fn1__$1,meta26445));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26444(self__.map_LT_,self__.f,self__.ch,self__.meta26442,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26441.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26441.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26442","meta26442",-1581692174,null)], null);
});

cljs.core.async.t_cljs$core$async26441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26441";

cljs.core.async.t_cljs$core$async26441.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26441");
});

cljs.core.async.__GT_t_cljs$core$async26441 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26441(map_LT___$1,f__$1,ch__$1,meta26442){
return (new cljs.core.async.t_cljs$core$async26441(map_LT___$1,f__$1,ch__$1,meta26442));
});

}

return (new cljs.core.async.t_cljs$core$async26441(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26450 = (function (map_GT_,f,ch,meta26451){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26451 = meta26451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26452,meta26451__$1){
var self__ = this;
var _26452__$1 = this;
return (new cljs.core.async.t_cljs$core$async26450(self__.map_GT_,self__.f,self__.ch,meta26451__$1));
});

cljs.core.async.t_cljs$core$async26450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26452){
var self__ = this;
var _26452__$1 = this;
return self__.meta26451;
});

cljs.core.async.t_cljs$core$async26450.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26450.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26450.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26451","meta26451",-1656747554,null)], null);
});

cljs.core.async.t_cljs$core$async26450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26450";

cljs.core.async.t_cljs$core$async26450.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26450");
});

cljs.core.async.__GT_t_cljs$core$async26450 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26450(map_GT___$1,f__$1,ch__$1,meta26451){
return (new cljs.core.async.t_cljs$core$async26450(map_GT___$1,f__$1,ch__$1,meta26451));
});

}

return (new cljs.core.async.t_cljs$core$async26450(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26456 = (function (filter_GT_,p,ch,meta26457){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26457 = meta26457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26458,meta26457__$1){
var self__ = this;
var _26458__$1 = this;
return (new cljs.core.async.t_cljs$core$async26456(self__.filter_GT_,self__.p,self__.ch,meta26457__$1));
});

cljs.core.async.t_cljs$core$async26456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26458){
var self__ = this;
var _26458__$1 = this;
return self__.meta26457;
});

cljs.core.async.t_cljs$core$async26456.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26456.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26456.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26456.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26457","meta26457",-1380374410,null)], null);
});

cljs.core.async.t_cljs$core$async26456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26456";

cljs.core.async.t_cljs$core$async26456.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26456");
});

cljs.core.async.__GT_t_cljs$core$async26456 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26456(filter_GT___$1,p__$1,ch__$1,meta26457){
return (new cljs.core.async.t_cljs$core$async26456(filter_GT___$1,p__$1,ch__$1,meta26457));
});

}

return (new cljs.core.async.t_cljs$core$async26456(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26459 = [];
var len__17809__auto___26503 = arguments.length;
var i__17810__auto___26504 = (0);
while(true){
if((i__17810__auto___26504 < len__17809__auto___26503)){
args26459.push((arguments[i__17810__auto___26504]));

var G__26505 = (i__17810__auto___26504 + (1));
i__17810__auto___26504 = G__26505;
continue;
} else {
}
break;
}

var G__26461 = args26459.length;
switch (G__26461) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26459.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24257__auto___26507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___26507,out){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___26507,out){
return (function (state_26482){
var state_val_26483 = (state_26482[(1)]);
if((state_val_26483 === (7))){
var inst_26478 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26484_26508 = state_26482__$1;
(statearr_26484_26508[(2)] = inst_26478);

(statearr_26484_26508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (1))){
var state_26482__$1 = state_26482;
var statearr_26485_26509 = state_26482__$1;
(statearr_26485_26509[(2)] = null);

(statearr_26485_26509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (4))){
var inst_26464 = (state_26482[(7)]);
var inst_26464__$1 = (state_26482[(2)]);
var inst_26465 = (inst_26464__$1 == null);
var state_26482__$1 = (function (){var statearr_26486 = state_26482;
(statearr_26486[(7)] = inst_26464__$1);

return statearr_26486;
})();
if(cljs.core.truth_(inst_26465)){
var statearr_26487_26510 = state_26482__$1;
(statearr_26487_26510[(1)] = (5));

} else {
var statearr_26488_26511 = state_26482__$1;
(statearr_26488_26511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (6))){
var inst_26464 = (state_26482[(7)]);
var inst_26469 = p.call(null,inst_26464);
var state_26482__$1 = state_26482;
if(cljs.core.truth_(inst_26469)){
var statearr_26489_26512 = state_26482__$1;
(statearr_26489_26512[(1)] = (8));

} else {
var statearr_26490_26513 = state_26482__$1;
(statearr_26490_26513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (3))){
var inst_26480 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26482__$1,inst_26480);
} else {
if((state_val_26483 === (2))){
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26482__$1,(4),ch);
} else {
if((state_val_26483 === (11))){
var inst_26472 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26491_26514 = state_26482__$1;
(statearr_26491_26514[(2)] = inst_26472);

(statearr_26491_26514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (9))){
var state_26482__$1 = state_26482;
var statearr_26492_26515 = state_26482__$1;
(statearr_26492_26515[(2)] = null);

(statearr_26492_26515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (5))){
var inst_26467 = cljs.core.async.close_BANG_.call(null,out);
var state_26482__$1 = state_26482;
var statearr_26493_26516 = state_26482__$1;
(statearr_26493_26516[(2)] = inst_26467);

(statearr_26493_26516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (10))){
var inst_26475 = (state_26482[(2)]);
var state_26482__$1 = (function (){var statearr_26494 = state_26482;
(statearr_26494[(8)] = inst_26475);

return statearr_26494;
})();
var statearr_26495_26517 = state_26482__$1;
(statearr_26495_26517[(2)] = null);

(statearr_26495_26517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (8))){
var inst_26464 = (state_26482[(7)]);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(11),out,inst_26464);
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
});})(c__24257__auto___26507,out))
;
return ((function (switch__24145__auto__,c__24257__auto___26507,out){
return (function() {
var cljs$core$async$state_machine__24146__auto__ = null;
var cljs$core$async$state_machine__24146__auto____0 = (function (){
var statearr_26499 = [null,null,null,null,null,null,null,null,null];
(statearr_26499[(0)] = cljs$core$async$state_machine__24146__auto__);

(statearr_26499[(1)] = (1));

return statearr_26499;
});
var cljs$core$async$state_machine__24146__auto____1 = (function (state_26482){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_26482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e26500){if((e26500 instanceof Object)){
var ex__24149__auto__ = e26500;
var statearr_26501_26518 = state_26482;
(statearr_26501_26518[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26519 = state_26482;
state_26482 = G__26519;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$state_machine__24146__auto__ = function(state_26482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24146__auto____1.call(this,state_26482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24146__auto____0;
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24146__auto____1;
return cljs$core$async$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___26507,out))
})();
var state__24259__auto__ = (function (){var statearr_26502 = f__24258__auto__.call(null);
(statearr_26502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___26507);

return statearr_26502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___26507,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26520 = [];
var len__17809__auto___26523 = arguments.length;
var i__17810__auto___26524 = (0);
while(true){
if((i__17810__auto___26524 < len__17809__auto___26523)){
args26520.push((arguments[i__17810__auto___26524]));

var G__26525 = (i__17810__auto___26524 + (1));
i__17810__auto___26524 = G__26525;
continue;
} else {
}
break;
}

var G__26522 = args26520.length;
switch (G__26522) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26520.length)].join('')));

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
var c__24257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto__){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto__){
return (function (state_26692){
var state_val_26693 = (state_26692[(1)]);
if((state_val_26693 === (7))){
var inst_26688 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26694_26735 = state_26692__$1;
(statearr_26694_26735[(2)] = inst_26688);

(statearr_26694_26735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (20))){
var inst_26658 = (state_26692[(7)]);
var inst_26669 = (state_26692[(2)]);
var inst_26670 = cljs.core.next.call(null,inst_26658);
var inst_26644 = inst_26670;
var inst_26645 = null;
var inst_26646 = (0);
var inst_26647 = (0);
var state_26692__$1 = (function (){var statearr_26695 = state_26692;
(statearr_26695[(8)] = inst_26644);

(statearr_26695[(9)] = inst_26647);

(statearr_26695[(10)] = inst_26669);

(statearr_26695[(11)] = inst_26645);

(statearr_26695[(12)] = inst_26646);

return statearr_26695;
})();
var statearr_26696_26736 = state_26692__$1;
(statearr_26696_26736[(2)] = null);

(statearr_26696_26736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (1))){
var state_26692__$1 = state_26692;
var statearr_26697_26737 = state_26692__$1;
(statearr_26697_26737[(2)] = null);

(statearr_26697_26737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (4))){
var inst_26633 = (state_26692[(13)]);
var inst_26633__$1 = (state_26692[(2)]);
var inst_26634 = (inst_26633__$1 == null);
var state_26692__$1 = (function (){var statearr_26698 = state_26692;
(statearr_26698[(13)] = inst_26633__$1);

return statearr_26698;
})();
if(cljs.core.truth_(inst_26634)){
var statearr_26699_26738 = state_26692__$1;
(statearr_26699_26738[(1)] = (5));

} else {
var statearr_26700_26739 = state_26692__$1;
(statearr_26700_26739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (15))){
var state_26692__$1 = state_26692;
var statearr_26704_26740 = state_26692__$1;
(statearr_26704_26740[(2)] = null);

(statearr_26704_26740[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (21))){
var state_26692__$1 = state_26692;
var statearr_26705_26741 = state_26692__$1;
(statearr_26705_26741[(2)] = null);

(statearr_26705_26741[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (13))){
var inst_26644 = (state_26692[(8)]);
var inst_26647 = (state_26692[(9)]);
var inst_26645 = (state_26692[(11)]);
var inst_26646 = (state_26692[(12)]);
var inst_26654 = (state_26692[(2)]);
var inst_26655 = (inst_26647 + (1));
var tmp26701 = inst_26644;
var tmp26702 = inst_26645;
var tmp26703 = inst_26646;
var inst_26644__$1 = tmp26701;
var inst_26645__$1 = tmp26702;
var inst_26646__$1 = tmp26703;
var inst_26647__$1 = inst_26655;
var state_26692__$1 = (function (){var statearr_26706 = state_26692;
(statearr_26706[(8)] = inst_26644__$1);

(statearr_26706[(9)] = inst_26647__$1);

(statearr_26706[(14)] = inst_26654);

(statearr_26706[(11)] = inst_26645__$1);

(statearr_26706[(12)] = inst_26646__$1);

return statearr_26706;
})();
var statearr_26707_26742 = state_26692__$1;
(statearr_26707_26742[(2)] = null);

(statearr_26707_26742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (22))){
var state_26692__$1 = state_26692;
var statearr_26708_26743 = state_26692__$1;
(statearr_26708_26743[(2)] = null);

(statearr_26708_26743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (6))){
var inst_26633 = (state_26692[(13)]);
var inst_26642 = f.call(null,inst_26633);
var inst_26643 = cljs.core.seq.call(null,inst_26642);
var inst_26644 = inst_26643;
var inst_26645 = null;
var inst_26646 = (0);
var inst_26647 = (0);
var state_26692__$1 = (function (){var statearr_26709 = state_26692;
(statearr_26709[(8)] = inst_26644);

(statearr_26709[(9)] = inst_26647);

(statearr_26709[(11)] = inst_26645);

(statearr_26709[(12)] = inst_26646);

return statearr_26709;
})();
var statearr_26710_26744 = state_26692__$1;
(statearr_26710_26744[(2)] = null);

(statearr_26710_26744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (17))){
var inst_26658 = (state_26692[(7)]);
var inst_26662 = cljs.core.chunk_first.call(null,inst_26658);
var inst_26663 = cljs.core.chunk_rest.call(null,inst_26658);
var inst_26664 = cljs.core.count.call(null,inst_26662);
var inst_26644 = inst_26663;
var inst_26645 = inst_26662;
var inst_26646 = inst_26664;
var inst_26647 = (0);
var state_26692__$1 = (function (){var statearr_26711 = state_26692;
(statearr_26711[(8)] = inst_26644);

(statearr_26711[(9)] = inst_26647);

(statearr_26711[(11)] = inst_26645);

(statearr_26711[(12)] = inst_26646);

return statearr_26711;
})();
var statearr_26712_26745 = state_26692__$1;
(statearr_26712_26745[(2)] = null);

(statearr_26712_26745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (3))){
var inst_26690 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26692__$1,inst_26690);
} else {
if((state_val_26693 === (12))){
var inst_26678 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26713_26746 = state_26692__$1;
(statearr_26713_26746[(2)] = inst_26678);

(statearr_26713_26746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (2))){
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26692__$1,(4),in$);
} else {
if((state_val_26693 === (23))){
var inst_26686 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26714_26747 = state_26692__$1;
(statearr_26714_26747[(2)] = inst_26686);

(statearr_26714_26747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (19))){
var inst_26673 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26715_26748 = state_26692__$1;
(statearr_26715_26748[(2)] = inst_26673);

(statearr_26715_26748[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (11))){
var inst_26644 = (state_26692[(8)]);
var inst_26658 = (state_26692[(7)]);
var inst_26658__$1 = cljs.core.seq.call(null,inst_26644);
var state_26692__$1 = (function (){var statearr_26716 = state_26692;
(statearr_26716[(7)] = inst_26658__$1);

return statearr_26716;
})();
if(inst_26658__$1){
var statearr_26717_26749 = state_26692__$1;
(statearr_26717_26749[(1)] = (14));

} else {
var statearr_26718_26750 = state_26692__$1;
(statearr_26718_26750[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (9))){
var inst_26680 = (state_26692[(2)]);
var inst_26681 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26692__$1 = (function (){var statearr_26719 = state_26692;
(statearr_26719[(15)] = inst_26680);

return statearr_26719;
})();
if(cljs.core.truth_(inst_26681)){
var statearr_26720_26751 = state_26692__$1;
(statearr_26720_26751[(1)] = (21));

} else {
var statearr_26721_26752 = state_26692__$1;
(statearr_26721_26752[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (5))){
var inst_26636 = cljs.core.async.close_BANG_.call(null,out);
var state_26692__$1 = state_26692;
var statearr_26722_26753 = state_26692__$1;
(statearr_26722_26753[(2)] = inst_26636);

(statearr_26722_26753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (14))){
var inst_26658 = (state_26692[(7)]);
var inst_26660 = cljs.core.chunked_seq_QMARK_.call(null,inst_26658);
var state_26692__$1 = state_26692;
if(inst_26660){
var statearr_26723_26754 = state_26692__$1;
(statearr_26723_26754[(1)] = (17));

} else {
var statearr_26724_26755 = state_26692__$1;
(statearr_26724_26755[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (16))){
var inst_26676 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26725_26756 = state_26692__$1;
(statearr_26725_26756[(2)] = inst_26676);

(statearr_26725_26756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (10))){
var inst_26647 = (state_26692[(9)]);
var inst_26645 = (state_26692[(11)]);
var inst_26652 = cljs.core._nth.call(null,inst_26645,inst_26647);
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26692__$1,(13),out,inst_26652);
} else {
if((state_val_26693 === (18))){
var inst_26658 = (state_26692[(7)]);
var inst_26667 = cljs.core.first.call(null,inst_26658);
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26692__$1,(20),out,inst_26667);
} else {
if((state_val_26693 === (8))){
var inst_26647 = (state_26692[(9)]);
var inst_26646 = (state_26692[(12)]);
var inst_26649 = (inst_26647 < inst_26646);
var inst_26650 = inst_26649;
var state_26692__$1 = state_26692;
if(cljs.core.truth_(inst_26650)){
var statearr_26726_26757 = state_26692__$1;
(statearr_26726_26757[(1)] = (10));

} else {
var statearr_26727_26758 = state_26692__$1;
(statearr_26727_26758[(1)] = (11));

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
});})(c__24257__auto__))
;
return ((function (switch__24145__auto__,c__24257__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24146__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24146__auto____0 = (function (){
var statearr_26731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26731[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24146__auto__);

(statearr_26731[(1)] = (1));

return statearr_26731;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24146__auto____1 = (function (state_26692){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_26692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e26732){if((e26732 instanceof Object)){
var ex__24149__auto__ = e26732;
var statearr_26733_26759 = state_26692;
(statearr_26733_26759[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26760 = state_26692;
state_26692 = G__26760;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24146__auto__ = function(state_26692){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24146__auto____1.call(this,state_26692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24146__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24146__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto__))
})();
var state__24259__auto__ = (function (){var statearr_26734 = f__24258__auto__.call(null);
(statearr_26734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto__);

return statearr_26734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto__))
);

return c__24257__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26761 = [];
var len__17809__auto___26764 = arguments.length;
var i__17810__auto___26765 = (0);
while(true){
if((i__17810__auto___26765 < len__17809__auto___26764)){
args26761.push((arguments[i__17810__auto___26765]));

var G__26766 = (i__17810__auto___26765 + (1));
i__17810__auto___26765 = G__26766;
continue;
} else {
}
break;
}

var G__26763 = args26761.length;
switch (G__26763) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26761.length)].join('')));

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
var args26768 = [];
var len__17809__auto___26771 = arguments.length;
var i__17810__auto___26772 = (0);
while(true){
if((i__17810__auto___26772 < len__17809__auto___26771)){
args26768.push((arguments[i__17810__auto___26772]));

var G__26773 = (i__17810__auto___26772 + (1));
i__17810__auto___26772 = G__26773;
continue;
} else {
}
break;
}

var G__26770 = args26768.length;
switch (G__26770) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26768.length)].join('')));

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
var args26775 = [];
var len__17809__auto___26826 = arguments.length;
var i__17810__auto___26827 = (0);
while(true){
if((i__17810__auto___26827 < len__17809__auto___26826)){
args26775.push((arguments[i__17810__auto___26827]));

var G__26828 = (i__17810__auto___26827 + (1));
i__17810__auto___26827 = G__26828;
continue;
} else {
}
break;
}

var G__26777 = args26775.length;
switch (G__26777) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26775.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24257__auto___26830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___26830,out){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___26830,out){
return (function (state_26801){
var state_val_26802 = (state_26801[(1)]);
if((state_val_26802 === (7))){
var inst_26796 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
var statearr_26803_26831 = state_26801__$1;
(statearr_26803_26831[(2)] = inst_26796);

(statearr_26803_26831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (1))){
var inst_26778 = null;
var state_26801__$1 = (function (){var statearr_26804 = state_26801;
(statearr_26804[(7)] = inst_26778);

return statearr_26804;
})();
var statearr_26805_26832 = state_26801__$1;
(statearr_26805_26832[(2)] = null);

(statearr_26805_26832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (4))){
var inst_26781 = (state_26801[(8)]);
var inst_26781__$1 = (state_26801[(2)]);
var inst_26782 = (inst_26781__$1 == null);
var inst_26783 = cljs.core.not.call(null,inst_26782);
var state_26801__$1 = (function (){var statearr_26806 = state_26801;
(statearr_26806[(8)] = inst_26781__$1);

return statearr_26806;
})();
if(inst_26783){
var statearr_26807_26833 = state_26801__$1;
(statearr_26807_26833[(1)] = (5));

} else {
var statearr_26808_26834 = state_26801__$1;
(statearr_26808_26834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (6))){
var state_26801__$1 = state_26801;
var statearr_26809_26835 = state_26801__$1;
(statearr_26809_26835[(2)] = null);

(statearr_26809_26835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (3))){
var inst_26798 = (state_26801[(2)]);
var inst_26799 = cljs.core.async.close_BANG_.call(null,out);
var state_26801__$1 = (function (){var statearr_26810 = state_26801;
(statearr_26810[(9)] = inst_26798);

return statearr_26810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26801__$1,inst_26799);
} else {
if((state_val_26802 === (2))){
var state_26801__$1 = state_26801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26801__$1,(4),ch);
} else {
if((state_val_26802 === (11))){
var inst_26781 = (state_26801[(8)]);
var inst_26790 = (state_26801[(2)]);
var inst_26778 = inst_26781;
var state_26801__$1 = (function (){var statearr_26811 = state_26801;
(statearr_26811[(10)] = inst_26790);

(statearr_26811[(7)] = inst_26778);

return statearr_26811;
})();
var statearr_26812_26836 = state_26801__$1;
(statearr_26812_26836[(2)] = null);

(statearr_26812_26836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (9))){
var inst_26781 = (state_26801[(8)]);
var state_26801__$1 = state_26801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26801__$1,(11),out,inst_26781);
} else {
if((state_val_26802 === (5))){
var inst_26781 = (state_26801[(8)]);
var inst_26778 = (state_26801[(7)]);
var inst_26785 = cljs.core._EQ_.call(null,inst_26781,inst_26778);
var state_26801__$1 = state_26801;
if(inst_26785){
var statearr_26814_26837 = state_26801__$1;
(statearr_26814_26837[(1)] = (8));

} else {
var statearr_26815_26838 = state_26801__$1;
(statearr_26815_26838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (10))){
var inst_26793 = (state_26801[(2)]);
var state_26801__$1 = state_26801;
var statearr_26816_26839 = state_26801__$1;
(statearr_26816_26839[(2)] = inst_26793);

(statearr_26816_26839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26802 === (8))){
var inst_26778 = (state_26801[(7)]);
var tmp26813 = inst_26778;
var inst_26778__$1 = tmp26813;
var state_26801__$1 = (function (){var statearr_26817 = state_26801;
(statearr_26817[(7)] = inst_26778__$1);

return statearr_26817;
})();
var statearr_26818_26840 = state_26801__$1;
(statearr_26818_26840[(2)] = null);

(statearr_26818_26840[(1)] = (2));


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
});})(c__24257__auto___26830,out))
;
return ((function (switch__24145__auto__,c__24257__auto___26830,out){
return (function() {
var cljs$core$async$state_machine__24146__auto__ = null;
var cljs$core$async$state_machine__24146__auto____0 = (function (){
var statearr_26822 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26822[(0)] = cljs$core$async$state_machine__24146__auto__);

(statearr_26822[(1)] = (1));

return statearr_26822;
});
var cljs$core$async$state_machine__24146__auto____1 = (function (state_26801){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_26801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e26823){if((e26823 instanceof Object)){
var ex__24149__auto__ = e26823;
var statearr_26824_26841 = state_26801;
(statearr_26824_26841[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26842 = state_26801;
state_26801 = G__26842;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$state_machine__24146__auto__ = function(state_26801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24146__auto____1.call(this,state_26801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24146__auto____0;
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24146__auto____1;
return cljs$core$async$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___26830,out))
})();
var state__24259__auto__ = (function (){var statearr_26825 = f__24258__auto__.call(null);
(statearr_26825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___26830);

return statearr_26825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___26830,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26843 = [];
var len__17809__auto___26913 = arguments.length;
var i__17810__auto___26914 = (0);
while(true){
if((i__17810__auto___26914 < len__17809__auto___26913)){
args26843.push((arguments[i__17810__auto___26914]));

var G__26915 = (i__17810__auto___26914 + (1));
i__17810__auto___26914 = G__26915;
continue;
} else {
}
break;
}

var G__26845 = args26843.length;
switch (G__26845) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26843.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24257__auto___26917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___26917,out){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___26917,out){
return (function (state_26883){
var state_val_26884 = (state_26883[(1)]);
if((state_val_26884 === (7))){
var inst_26879 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
var statearr_26885_26918 = state_26883__$1;
(statearr_26885_26918[(2)] = inst_26879);

(statearr_26885_26918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (1))){
var inst_26846 = (new Array(n));
var inst_26847 = inst_26846;
var inst_26848 = (0);
var state_26883__$1 = (function (){var statearr_26886 = state_26883;
(statearr_26886[(7)] = inst_26847);

(statearr_26886[(8)] = inst_26848);

return statearr_26886;
})();
var statearr_26887_26919 = state_26883__$1;
(statearr_26887_26919[(2)] = null);

(statearr_26887_26919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (4))){
var inst_26851 = (state_26883[(9)]);
var inst_26851__$1 = (state_26883[(2)]);
var inst_26852 = (inst_26851__$1 == null);
var inst_26853 = cljs.core.not.call(null,inst_26852);
var state_26883__$1 = (function (){var statearr_26888 = state_26883;
(statearr_26888[(9)] = inst_26851__$1);

return statearr_26888;
})();
if(inst_26853){
var statearr_26889_26920 = state_26883__$1;
(statearr_26889_26920[(1)] = (5));

} else {
var statearr_26890_26921 = state_26883__$1;
(statearr_26890_26921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (15))){
var inst_26873 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
var statearr_26891_26922 = state_26883__$1;
(statearr_26891_26922[(2)] = inst_26873);

(statearr_26891_26922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (13))){
var state_26883__$1 = state_26883;
var statearr_26892_26923 = state_26883__$1;
(statearr_26892_26923[(2)] = null);

(statearr_26892_26923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (6))){
var inst_26848 = (state_26883[(8)]);
var inst_26869 = (inst_26848 > (0));
var state_26883__$1 = state_26883;
if(cljs.core.truth_(inst_26869)){
var statearr_26893_26924 = state_26883__$1;
(statearr_26893_26924[(1)] = (12));

} else {
var statearr_26894_26925 = state_26883__$1;
(statearr_26894_26925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (3))){
var inst_26881 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26883__$1,inst_26881);
} else {
if((state_val_26884 === (12))){
var inst_26847 = (state_26883[(7)]);
var inst_26871 = cljs.core.vec.call(null,inst_26847);
var state_26883__$1 = state_26883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26883__$1,(15),out,inst_26871);
} else {
if((state_val_26884 === (2))){
var state_26883__$1 = state_26883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26883__$1,(4),ch);
} else {
if((state_val_26884 === (11))){
var inst_26863 = (state_26883[(2)]);
var inst_26864 = (new Array(n));
var inst_26847 = inst_26864;
var inst_26848 = (0);
var state_26883__$1 = (function (){var statearr_26895 = state_26883;
(statearr_26895[(10)] = inst_26863);

(statearr_26895[(7)] = inst_26847);

(statearr_26895[(8)] = inst_26848);

return statearr_26895;
})();
var statearr_26896_26926 = state_26883__$1;
(statearr_26896_26926[(2)] = null);

(statearr_26896_26926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (9))){
var inst_26847 = (state_26883[(7)]);
var inst_26861 = cljs.core.vec.call(null,inst_26847);
var state_26883__$1 = state_26883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26883__$1,(11),out,inst_26861);
} else {
if((state_val_26884 === (5))){
var inst_26847 = (state_26883[(7)]);
var inst_26856 = (state_26883[(11)]);
var inst_26851 = (state_26883[(9)]);
var inst_26848 = (state_26883[(8)]);
var inst_26855 = (inst_26847[inst_26848] = inst_26851);
var inst_26856__$1 = (inst_26848 + (1));
var inst_26857 = (inst_26856__$1 < n);
var state_26883__$1 = (function (){var statearr_26897 = state_26883;
(statearr_26897[(12)] = inst_26855);

(statearr_26897[(11)] = inst_26856__$1);

return statearr_26897;
})();
if(cljs.core.truth_(inst_26857)){
var statearr_26898_26927 = state_26883__$1;
(statearr_26898_26927[(1)] = (8));

} else {
var statearr_26899_26928 = state_26883__$1;
(statearr_26899_26928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (14))){
var inst_26876 = (state_26883[(2)]);
var inst_26877 = cljs.core.async.close_BANG_.call(null,out);
var state_26883__$1 = (function (){var statearr_26901 = state_26883;
(statearr_26901[(13)] = inst_26876);

return statearr_26901;
})();
var statearr_26902_26929 = state_26883__$1;
(statearr_26902_26929[(2)] = inst_26877);

(statearr_26902_26929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (10))){
var inst_26867 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
var statearr_26903_26930 = state_26883__$1;
(statearr_26903_26930[(2)] = inst_26867);

(statearr_26903_26930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (8))){
var inst_26847 = (state_26883[(7)]);
var inst_26856 = (state_26883[(11)]);
var tmp26900 = inst_26847;
var inst_26847__$1 = tmp26900;
var inst_26848 = inst_26856;
var state_26883__$1 = (function (){var statearr_26904 = state_26883;
(statearr_26904[(7)] = inst_26847__$1);

(statearr_26904[(8)] = inst_26848);

return statearr_26904;
})();
var statearr_26905_26931 = state_26883__$1;
(statearr_26905_26931[(2)] = null);

(statearr_26905_26931[(1)] = (2));


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
});})(c__24257__auto___26917,out))
;
return ((function (switch__24145__auto__,c__24257__auto___26917,out){
return (function() {
var cljs$core$async$state_machine__24146__auto__ = null;
var cljs$core$async$state_machine__24146__auto____0 = (function (){
var statearr_26909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26909[(0)] = cljs$core$async$state_machine__24146__auto__);

(statearr_26909[(1)] = (1));

return statearr_26909;
});
var cljs$core$async$state_machine__24146__auto____1 = (function (state_26883){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_26883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e26910){if((e26910 instanceof Object)){
var ex__24149__auto__ = e26910;
var statearr_26911_26932 = state_26883;
(statearr_26911_26932[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26933 = state_26883;
state_26883 = G__26933;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$state_machine__24146__auto__ = function(state_26883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24146__auto____1.call(this,state_26883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24146__auto____0;
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24146__auto____1;
return cljs$core$async$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___26917,out))
})();
var state__24259__auto__ = (function (){var statearr_26912 = f__24258__auto__.call(null);
(statearr_26912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___26917);

return statearr_26912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___26917,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26934 = [];
var len__17809__auto___27008 = arguments.length;
var i__17810__auto___27009 = (0);
while(true){
if((i__17810__auto___27009 < len__17809__auto___27008)){
args26934.push((arguments[i__17810__auto___27009]));

var G__27010 = (i__17810__auto___27009 + (1));
i__17810__auto___27009 = G__27010;
continue;
} else {
}
break;
}

var G__26936 = args26934.length;
switch (G__26936) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26934.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24257__auto___27012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24257__auto___27012,out){
return (function (){
var f__24258__auto__ = (function (){var switch__24145__auto__ = ((function (c__24257__auto___27012,out){
return (function (state_26978){
var state_val_26979 = (state_26978[(1)]);
if((state_val_26979 === (7))){
var inst_26974 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
var statearr_26980_27013 = state_26978__$1;
(statearr_26980_27013[(2)] = inst_26974);

(statearr_26980_27013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (1))){
var inst_26937 = [];
var inst_26938 = inst_26937;
var inst_26939 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26978__$1 = (function (){var statearr_26981 = state_26978;
(statearr_26981[(7)] = inst_26939);

(statearr_26981[(8)] = inst_26938);

return statearr_26981;
})();
var statearr_26982_27014 = state_26978__$1;
(statearr_26982_27014[(2)] = null);

(statearr_26982_27014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (4))){
var inst_26942 = (state_26978[(9)]);
var inst_26942__$1 = (state_26978[(2)]);
var inst_26943 = (inst_26942__$1 == null);
var inst_26944 = cljs.core.not.call(null,inst_26943);
var state_26978__$1 = (function (){var statearr_26983 = state_26978;
(statearr_26983[(9)] = inst_26942__$1);

return statearr_26983;
})();
if(inst_26944){
var statearr_26984_27015 = state_26978__$1;
(statearr_26984_27015[(1)] = (5));

} else {
var statearr_26985_27016 = state_26978__$1;
(statearr_26985_27016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (15))){
var inst_26968 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
var statearr_26986_27017 = state_26978__$1;
(statearr_26986_27017[(2)] = inst_26968);

(statearr_26986_27017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (13))){
var state_26978__$1 = state_26978;
var statearr_26987_27018 = state_26978__$1;
(statearr_26987_27018[(2)] = null);

(statearr_26987_27018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (6))){
var inst_26938 = (state_26978[(8)]);
var inst_26963 = inst_26938.length;
var inst_26964 = (inst_26963 > (0));
var state_26978__$1 = state_26978;
if(cljs.core.truth_(inst_26964)){
var statearr_26988_27019 = state_26978__$1;
(statearr_26988_27019[(1)] = (12));

} else {
var statearr_26989_27020 = state_26978__$1;
(statearr_26989_27020[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (3))){
var inst_26976 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26978__$1,inst_26976);
} else {
if((state_val_26979 === (12))){
var inst_26938 = (state_26978[(8)]);
var inst_26966 = cljs.core.vec.call(null,inst_26938);
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26978__$1,(15),out,inst_26966);
} else {
if((state_val_26979 === (2))){
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26978__$1,(4),ch);
} else {
if((state_val_26979 === (11))){
var inst_26942 = (state_26978[(9)]);
var inst_26946 = (state_26978[(10)]);
var inst_26956 = (state_26978[(2)]);
var inst_26957 = [];
var inst_26958 = inst_26957.push(inst_26942);
var inst_26938 = inst_26957;
var inst_26939 = inst_26946;
var state_26978__$1 = (function (){var statearr_26990 = state_26978;
(statearr_26990[(11)] = inst_26958);

(statearr_26990[(7)] = inst_26939);

(statearr_26990[(8)] = inst_26938);

(statearr_26990[(12)] = inst_26956);

return statearr_26990;
})();
var statearr_26991_27021 = state_26978__$1;
(statearr_26991_27021[(2)] = null);

(statearr_26991_27021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (9))){
var inst_26938 = (state_26978[(8)]);
var inst_26954 = cljs.core.vec.call(null,inst_26938);
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26978__$1,(11),out,inst_26954);
} else {
if((state_val_26979 === (5))){
var inst_26942 = (state_26978[(9)]);
var inst_26939 = (state_26978[(7)]);
var inst_26946 = (state_26978[(10)]);
var inst_26946__$1 = f.call(null,inst_26942);
var inst_26947 = cljs.core._EQ_.call(null,inst_26946__$1,inst_26939);
var inst_26948 = cljs.core.keyword_identical_QMARK_.call(null,inst_26939,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26949 = (inst_26947) || (inst_26948);
var state_26978__$1 = (function (){var statearr_26992 = state_26978;
(statearr_26992[(10)] = inst_26946__$1);

return statearr_26992;
})();
if(cljs.core.truth_(inst_26949)){
var statearr_26993_27022 = state_26978__$1;
(statearr_26993_27022[(1)] = (8));

} else {
var statearr_26994_27023 = state_26978__$1;
(statearr_26994_27023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (14))){
var inst_26971 = (state_26978[(2)]);
var inst_26972 = cljs.core.async.close_BANG_.call(null,out);
var state_26978__$1 = (function (){var statearr_26996 = state_26978;
(statearr_26996[(13)] = inst_26971);

return statearr_26996;
})();
var statearr_26997_27024 = state_26978__$1;
(statearr_26997_27024[(2)] = inst_26972);

(statearr_26997_27024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (10))){
var inst_26961 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
var statearr_26998_27025 = state_26978__$1;
(statearr_26998_27025[(2)] = inst_26961);

(statearr_26998_27025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26979 === (8))){
var inst_26942 = (state_26978[(9)]);
var inst_26938 = (state_26978[(8)]);
var inst_26946 = (state_26978[(10)]);
var inst_26951 = inst_26938.push(inst_26942);
var tmp26995 = inst_26938;
var inst_26938__$1 = tmp26995;
var inst_26939 = inst_26946;
var state_26978__$1 = (function (){var statearr_26999 = state_26978;
(statearr_26999[(7)] = inst_26939);

(statearr_26999[(8)] = inst_26938__$1);

(statearr_26999[(14)] = inst_26951);

return statearr_26999;
})();
var statearr_27000_27026 = state_26978__$1;
(statearr_27000_27026[(2)] = null);

(statearr_27000_27026[(1)] = (2));


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
});})(c__24257__auto___27012,out))
;
return ((function (switch__24145__auto__,c__24257__auto___27012,out){
return (function() {
var cljs$core$async$state_machine__24146__auto__ = null;
var cljs$core$async$state_machine__24146__auto____0 = (function (){
var statearr_27004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27004[(0)] = cljs$core$async$state_machine__24146__auto__);

(statearr_27004[(1)] = (1));

return statearr_27004;
});
var cljs$core$async$state_machine__24146__auto____1 = (function (state_26978){
while(true){
var ret_value__24147__auto__ = (function (){try{while(true){
var result__24148__auto__ = switch__24145__auto__.call(null,state_26978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24148__auto__;
}
break;
}
}catch (e27005){if((e27005 instanceof Object)){
var ex__24149__auto__ = e27005;
var statearr_27006_27027 = state_26978;
(statearr_27006_27027[(5)] = ex__24149__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27028 = state_26978;
state_26978 = G__27028;
continue;
} else {
return ret_value__24147__auto__;
}
break;
}
});
cljs$core$async$state_machine__24146__auto__ = function(state_26978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24146__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24146__auto____1.call(this,state_26978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24146__auto____0;
cljs$core$async$state_machine__24146__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24146__auto____1;
return cljs$core$async$state_machine__24146__auto__;
})()
;})(switch__24145__auto__,c__24257__auto___27012,out))
})();
var state__24259__auto__ = (function (){var statearr_27007 = f__24258__auto__.call(null);
(statearr_27007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24257__auto___27012);

return statearr_27007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24259__auto__);
});})(c__24257__auto___27012,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1452772207425