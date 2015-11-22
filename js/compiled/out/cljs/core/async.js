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
var args24196 = [];
var len__17809__auto___24202 = arguments.length;
var i__17810__auto___24203 = (0);
while(true){
if((i__17810__auto___24203 < len__17809__auto___24202)){
args24196.push((arguments[i__17810__auto___24203]));

var G__24204 = (i__17810__auto___24203 + (1));
i__17810__auto___24203 = G__24204;
continue;
} else {
}
break;
}

var G__24198 = args24196.length;
switch (G__24198) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24196.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24199 = (function (f,blockable,meta24200){
this.f = f;
this.blockable = blockable;
this.meta24200 = meta24200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24201,meta24200__$1){
var self__ = this;
var _24201__$1 = this;
return (new cljs.core.async.t_cljs$core$async24199(self__.f,self__.blockable,meta24200__$1));
});

cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24201){
var self__ = this;
var _24201__$1 = this;
return self__.meta24200;
});

cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24200","meta24200",855388251,null)], null);
});

cljs.core.async.t_cljs$core$async24199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24199";

cljs.core.async.t_cljs$core$async24199.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24199");
});

cljs.core.async.__GT_t_cljs$core$async24199 = (function cljs$core$async$__GT_t_cljs$core$async24199(f__$1,blockable__$1,meta24200){
return (new cljs.core.async.t_cljs$core$async24199(f__$1,blockable__$1,meta24200));
});

}

return (new cljs.core.async.t_cljs$core$async24199(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24208 = [];
var len__17809__auto___24211 = arguments.length;
var i__17810__auto___24212 = (0);
while(true){
if((i__17810__auto___24212 < len__17809__auto___24211)){
args24208.push((arguments[i__17810__auto___24212]));

var G__24213 = (i__17810__auto___24212 + (1));
i__17810__auto___24212 = G__24213;
continue;
} else {
}
break;
}

var G__24210 = args24208.length;
switch (G__24210) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24208.length)].join('')));

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
var args24215 = [];
var len__17809__auto___24218 = arguments.length;
var i__17810__auto___24219 = (0);
while(true){
if((i__17810__auto___24219 < len__17809__auto___24218)){
args24215.push((arguments[i__17810__auto___24219]));

var G__24220 = (i__17810__auto___24219 + (1));
i__17810__auto___24219 = G__24220;
continue;
} else {
}
break;
}

var G__24217 = args24215.length;
switch (G__24217) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24215.length)].join('')));

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
var args24222 = [];
var len__17809__auto___24225 = arguments.length;
var i__17810__auto___24226 = (0);
while(true){
if((i__17810__auto___24226 < len__17809__auto___24225)){
args24222.push((arguments[i__17810__auto___24226]));

var G__24227 = (i__17810__auto___24226 + (1));
i__17810__auto___24226 = G__24227;
continue;
} else {
}
break;
}

var G__24224 = args24222.length;
switch (G__24224) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24222.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24229 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24229);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24229,ret){
return (function (){
return fn1.call(null,val_24229);
});})(val_24229,ret))
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
var args24230 = [];
var len__17809__auto___24233 = arguments.length;
var i__17810__auto___24234 = (0);
while(true){
if((i__17810__auto___24234 < len__17809__auto___24233)){
args24230.push((arguments[i__17810__auto___24234]));

var G__24235 = (i__17810__auto___24234 + (1));
i__17810__auto___24234 = G__24235;
continue;
} else {
}
break;
}

var G__24232 = args24230.length;
switch (G__24232) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24230.length)].join('')));

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
var n__17654__auto___24237 = n;
var x_24238 = (0);
while(true){
if((x_24238 < n__17654__auto___24237)){
(a[x_24238] = (0));

var G__24239 = (x_24238 + (1));
x_24238 = G__24239;
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

var G__24240 = (i + (1));
i = G__24240;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24244 = (function (alt_flag,flag,meta24245){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24245 = meta24245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24246,meta24245__$1){
var self__ = this;
var _24246__$1 = this;
return (new cljs.core.async.t_cljs$core$async24244(self__.alt_flag,self__.flag,meta24245__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24246){
var self__ = this;
var _24246__$1 = this;
return self__.meta24245;
});})(flag))
;

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24244.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24245","meta24245",2039675445,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24244";

cljs.core.async.t_cljs$core$async24244.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24244");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24244 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24244(alt_flag__$1,flag__$1,meta24245){
return (new cljs.core.async.t_cljs$core$async24244(alt_flag__$1,flag__$1,meta24245));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24244(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24250 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24250 = (function (alt_handler,flag,cb,meta24251){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24251 = meta24251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24252,meta24251__$1){
var self__ = this;
var _24252__$1 = this;
return (new cljs.core.async.t_cljs$core$async24250(self__.alt_handler,self__.flag,self__.cb,meta24251__$1));
});

cljs.core.async.t_cljs$core$async24250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24252){
var self__ = this;
var _24252__$1 = this;
return self__.meta24251;
});

cljs.core.async.t_cljs$core$async24250.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24250.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24251","meta24251",-1689573838,null)], null);
});

cljs.core.async.t_cljs$core$async24250.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24250";

cljs.core.async.t_cljs$core$async24250.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24250");
});

cljs.core.async.__GT_t_cljs$core$async24250 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24250(alt_handler__$1,flag__$1,cb__$1,meta24251){
return (new cljs.core.async.t_cljs$core$async24250(alt_handler__$1,flag__$1,cb__$1,meta24251));
});

}

return (new cljs.core.async.t_cljs$core$async24250(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24253_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24253_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24254_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24254_SHARP_,port], null));
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
var G__24255 = (i + (1));
i = G__24255;
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
var len__17809__auto___24261 = arguments.length;
var i__17810__auto___24262 = (0);
while(true){
if((i__17810__auto___24262 < len__17809__auto___24261)){
args__17816__auto__.push((arguments[i__17810__auto___24262]));

var G__24263 = (i__17810__auto___24262 + (1));
i__17810__auto___24262 = G__24263;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((1) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24258){
var map__24259 = p__24258;
var map__24259__$1 = ((((!((map__24259 == null)))?((((map__24259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24259):map__24259);
var opts = map__24259__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24256){
var G__24257 = cljs.core.first.call(null,seq24256);
var seq24256__$1 = cljs.core.next.call(null,seq24256);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24257,seq24256__$1);
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
var args24264 = [];
var len__17809__auto___24314 = arguments.length;
var i__17810__auto___24315 = (0);
while(true){
if((i__17810__auto___24315 < len__17809__auto___24314)){
args24264.push((arguments[i__17810__auto___24315]));

var G__24316 = (i__17810__auto___24315 + (1));
i__17810__auto___24315 = G__24316;
continue;
} else {
}
break;
}

var G__24266 = args24264.length;
switch (G__24266) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24264.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24151__auto___24318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___24318){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___24318){
return (function (state_24290){
var state_val_24291 = (state_24290[(1)]);
if((state_val_24291 === (7))){
var inst_24286 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24292_24319 = state_24290__$1;
(statearr_24292_24319[(2)] = inst_24286);

(statearr_24292_24319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (1))){
var state_24290__$1 = state_24290;
var statearr_24293_24320 = state_24290__$1;
(statearr_24293_24320[(2)] = null);

(statearr_24293_24320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (4))){
var inst_24269 = (state_24290[(7)]);
var inst_24269__$1 = (state_24290[(2)]);
var inst_24270 = (inst_24269__$1 == null);
var state_24290__$1 = (function (){var statearr_24294 = state_24290;
(statearr_24294[(7)] = inst_24269__$1);

return statearr_24294;
})();
if(cljs.core.truth_(inst_24270)){
var statearr_24295_24321 = state_24290__$1;
(statearr_24295_24321[(1)] = (5));

} else {
var statearr_24296_24322 = state_24290__$1;
(statearr_24296_24322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (13))){
var state_24290__$1 = state_24290;
var statearr_24297_24323 = state_24290__$1;
(statearr_24297_24323[(2)] = null);

(statearr_24297_24323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (6))){
var inst_24269 = (state_24290[(7)]);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24290__$1,(11),to,inst_24269);
} else {
if((state_val_24291 === (3))){
var inst_24288 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24290__$1,inst_24288);
} else {
if((state_val_24291 === (12))){
var state_24290__$1 = state_24290;
var statearr_24298_24324 = state_24290__$1;
(statearr_24298_24324[(2)] = null);

(statearr_24298_24324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (2))){
var state_24290__$1 = state_24290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24290__$1,(4),from);
} else {
if((state_val_24291 === (11))){
var inst_24279 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
if(cljs.core.truth_(inst_24279)){
var statearr_24299_24325 = state_24290__$1;
(statearr_24299_24325[(1)] = (12));

} else {
var statearr_24300_24326 = state_24290__$1;
(statearr_24300_24326[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (9))){
var state_24290__$1 = state_24290;
var statearr_24301_24327 = state_24290__$1;
(statearr_24301_24327[(2)] = null);

(statearr_24301_24327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (5))){
var state_24290__$1 = state_24290;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24302_24328 = state_24290__$1;
(statearr_24302_24328[(1)] = (8));

} else {
var statearr_24303_24329 = state_24290__$1;
(statearr_24303_24329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (14))){
var inst_24284 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24304_24330 = state_24290__$1;
(statearr_24304_24330[(2)] = inst_24284);

(statearr_24304_24330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (10))){
var inst_24276 = (state_24290[(2)]);
var state_24290__$1 = state_24290;
var statearr_24305_24331 = state_24290__$1;
(statearr_24305_24331[(2)] = inst_24276);

(statearr_24305_24331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24291 === (8))){
var inst_24273 = cljs.core.async.close_BANG_.call(null,to);
var state_24290__$1 = state_24290;
var statearr_24306_24332 = state_24290__$1;
(statearr_24306_24332[(2)] = inst_24273);

(statearr_24306_24332[(1)] = (10));


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
});})(c__24151__auto___24318))
;
return ((function (switch__24039__auto__,c__24151__auto___24318){
return (function() {
var cljs$core$async$state_machine__24040__auto__ = null;
var cljs$core$async$state_machine__24040__auto____0 = (function (){
var statearr_24310 = [null,null,null,null,null,null,null,null];
(statearr_24310[(0)] = cljs$core$async$state_machine__24040__auto__);

(statearr_24310[(1)] = (1));

return statearr_24310;
});
var cljs$core$async$state_machine__24040__auto____1 = (function (state_24290){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_24290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e24311){if((e24311 instanceof Object)){
var ex__24043__auto__ = e24311;
var statearr_24312_24333 = state_24290;
(statearr_24312_24333[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24334 = state_24290;
state_24290 = G__24334;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$state_machine__24040__auto__ = function(state_24290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24040__auto____1.call(this,state_24290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24040__auto____0;
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24040__auto____1;
return cljs$core$async$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___24318))
})();
var state__24153__auto__ = (function (){var statearr_24313 = f__24152__auto__.call(null);
(statearr_24313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___24318);

return statearr_24313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___24318))
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
return (function (p__24518){
var vec__24519 = p__24518;
var v = cljs.core.nth.call(null,vec__24519,(0),null);
var p = cljs.core.nth.call(null,vec__24519,(1),null);
var job = vec__24519;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24151__auto___24701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___24701,res,vec__24519,v,p,job,jobs,results){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___24701,res,vec__24519,v,p,job,jobs,results){
return (function (state_24524){
var state_val_24525 = (state_24524[(1)]);
if((state_val_24525 === (1))){
var state_24524__$1 = state_24524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24524__$1,(2),res,v);
} else {
if((state_val_24525 === (2))){
var inst_24521 = (state_24524[(2)]);
var inst_24522 = cljs.core.async.close_BANG_.call(null,res);
var state_24524__$1 = (function (){var statearr_24526 = state_24524;
(statearr_24526[(7)] = inst_24521);

return statearr_24526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24524__$1,inst_24522);
} else {
return null;
}
}
});})(c__24151__auto___24701,res,vec__24519,v,p,job,jobs,results))
;
return ((function (switch__24039__auto__,c__24151__auto___24701,res,vec__24519,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0 = (function (){
var statearr_24530 = [null,null,null,null,null,null,null,null];
(statearr_24530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__);

(statearr_24530[(1)] = (1));

return statearr_24530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1 = (function (state_24524){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_24524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e24531){if((e24531 instanceof Object)){
var ex__24043__auto__ = e24531;
var statearr_24532_24702 = state_24524;
(statearr_24532_24702[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24703 = state_24524;
state_24524 = G__24703;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__ = function(state_24524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1.call(this,state_24524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___24701,res,vec__24519,v,p,job,jobs,results))
})();
var state__24153__auto__ = (function (){var statearr_24533 = f__24152__auto__.call(null);
(statearr_24533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___24701);

return statearr_24533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___24701,res,vec__24519,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24534){
var vec__24535 = p__24534;
var v = cljs.core.nth.call(null,vec__24535,(0),null);
var p = cljs.core.nth.call(null,vec__24535,(1),null);
var job = vec__24535;
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
var n__17654__auto___24704 = n;
var __24705 = (0);
while(true){
if((__24705 < n__17654__auto___24704)){
var G__24536_24706 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24536_24706) {
case "compute":
var c__24151__auto___24708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24705,c__24151__auto___24708,G__24536_24706,n__17654__auto___24704,jobs,results,process,async){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (__24705,c__24151__auto___24708,G__24536_24706,n__17654__auto___24704,jobs,results,process,async){
return (function (state_24549){
var state_val_24550 = (state_24549[(1)]);
if((state_val_24550 === (1))){
var state_24549__$1 = state_24549;
var statearr_24551_24709 = state_24549__$1;
(statearr_24551_24709[(2)] = null);

(statearr_24551_24709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (2))){
var state_24549__$1 = state_24549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24549__$1,(4),jobs);
} else {
if((state_val_24550 === (3))){
var inst_24547 = (state_24549[(2)]);
var state_24549__$1 = state_24549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24549__$1,inst_24547);
} else {
if((state_val_24550 === (4))){
var inst_24539 = (state_24549[(2)]);
var inst_24540 = process.call(null,inst_24539);
var state_24549__$1 = state_24549;
if(cljs.core.truth_(inst_24540)){
var statearr_24552_24710 = state_24549__$1;
(statearr_24552_24710[(1)] = (5));

} else {
var statearr_24553_24711 = state_24549__$1;
(statearr_24553_24711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (5))){
var state_24549__$1 = state_24549;
var statearr_24554_24712 = state_24549__$1;
(statearr_24554_24712[(2)] = null);

(statearr_24554_24712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (6))){
var state_24549__$1 = state_24549;
var statearr_24555_24713 = state_24549__$1;
(statearr_24555_24713[(2)] = null);

(statearr_24555_24713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (7))){
var inst_24545 = (state_24549[(2)]);
var state_24549__$1 = state_24549;
var statearr_24556_24714 = state_24549__$1;
(statearr_24556_24714[(2)] = inst_24545);

(statearr_24556_24714[(1)] = (3));


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
});})(__24705,c__24151__auto___24708,G__24536_24706,n__17654__auto___24704,jobs,results,process,async))
;
return ((function (__24705,switch__24039__auto__,c__24151__auto___24708,G__24536_24706,n__17654__auto___24704,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0 = (function (){
var statearr_24560 = [null,null,null,null,null,null,null];
(statearr_24560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__);

(statearr_24560[(1)] = (1));

return statearr_24560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1 = (function (state_24549){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_24549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e24561){if((e24561 instanceof Object)){
var ex__24043__auto__ = e24561;
var statearr_24562_24715 = state_24549;
(statearr_24562_24715[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24716 = state_24549;
state_24549 = G__24716;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__ = function(state_24549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1.call(this,state_24549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__;
})()
;})(__24705,switch__24039__auto__,c__24151__auto___24708,G__24536_24706,n__17654__auto___24704,jobs,results,process,async))
})();
var state__24153__auto__ = (function (){var statearr_24563 = f__24152__auto__.call(null);
(statearr_24563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___24708);

return statearr_24563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(__24705,c__24151__auto___24708,G__24536_24706,n__17654__auto___24704,jobs,results,process,async))
);


break;
case "async":
var c__24151__auto___24717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24705,c__24151__auto___24717,G__24536_24706,n__17654__auto___24704,jobs,results,process,async){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (__24705,c__24151__auto___24717,G__24536_24706,n__17654__auto___24704,jobs,results,process,async){
return (function (state_24576){
var state_val_24577 = (state_24576[(1)]);
if((state_val_24577 === (1))){
var state_24576__$1 = state_24576;
var statearr_24578_24718 = state_24576__$1;
(statearr_24578_24718[(2)] = null);

(statearr_24578_24718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (2))){
var state_24576__$1 = state_24576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24576__$1,(4),jobs);
} else {
if((state_val_24577 === (3))){
var inst_24574 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24576__$1,inst_24574);
} else {
if((state_val_24577 === (4))){
var inst_24566 = (state_24576[(2)]);
var inst_24567 = async.call(null,inst_24566);
var state_24576__$1 = state_24576;
if(cljs.core.truth_(inst_24567)){
var statearr_24579_24719 = state_24576__$1;
(statearr_24579_24719[(1)] = (5));

} else {
var statearr_24580_24720 = state_24576__$1;
(statearr_24580_24720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (5))){
var state_24576__$1 = state_24576;
var statearr_24581_24721 = state_24576__$1;
(statearr_24581_24721[(2)] = null);

(statearr_24581_24721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (6))){
var state_24576__$1 = state_24576;
var statearr_24582_24722 = state_24576__$1;
(statearr_24582_24722[(2)] = null);

(statearr_24582_24722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24577 === (7))){
var inst_24572 = (state_24576[(2)]);
var state_24576__$1 = state_24576;
var statearr_24583_24723 = state_24576__$1;
(statearr_24583_24723[(2)] = inst_24572);

(statearr_24583_24723[(1)] = (3));


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
});})(__24705,c__24151__auto___24717,G__24536_24706,n__17654__auto___24704,jobs,results,process,async))
;
return ((function (__24705,switch__24039__auto__,c__24151__auto___24717,G__24536_24706,n__17654__auto___24704,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0 = (function (){
var statearr_24587 = [null,null,null,null,null,null,null];
(statearr_24587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__);

(statearr_24587[(1)] = (1));

return statearr_24587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1 = (function (state_24576){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_24576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e24588){if((e24588 instanceof Object)){
var ex__24043__auto__ = e24588;
var statearr_24589_24724 = state_24576;
(statearr_24589_24724[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24725 = state_24576;
state_24576 = G__24725;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__ = function(state_24576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1.call(this,state_24576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__;
})()
;})(__24705,switch__24039__auto__,c__24151__auto___24717,G__24536_24706,n__17654__auto___24704,jobs,results,process,async))
})();
var state__24153__auto__ = (function (){var statearr_24590 = f__24152__auto__.call(null);
(statearr_24590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___24717);

return statearr_24590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(__24705,c__24151__auto___24717,G__24536_24706,n__17654__auto___24704,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24726 = (__24705 + (1));
__24705 = G__24726;
continue;
} else {
}
break;
}

var c__24151__auto___24727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___24727,jobs,results,process,async){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___24727,jobs,results,process,async){
return (function (state_24612){
var state_val_24613 = (state_24612[(1)]);
if((state_val_24613 === (1))){
var state_24612__$1 = state_24612;
var statearr_24614_24728 = state_24612__$1;
(statearr_24614_24728[(2)] = null);

(statearr_24614_24728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (2))){
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(4),from);
} else {
if((state_val_24613 === (3))){
var inst_24610 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24612__$1,inst_24610);
} else {
if((state_val_24613 === (4))){
var inst_24593 = (state_24612[(7)]);
var inst_24593__$1 = (state_24612[(2)]);
var inst_24594 = (inst_24593__$1 == null);
var state_24612__$1 = (function (){var statearr_24615 = state_24612;
(statearr_24615[(7)] = inst_24593__$1);

return statearr_24615;
})();
if(cljs.core.truth_(inst_24594)){
var statearr_24616_24729 = state_24612__$1;
(statearr_24616_24729[(1)] = (5));

} else {
var statearr_24617_24730 = state_24612__$1;
(statearr_24617_24730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (5))){
var inst_24596 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24612__$1 = state_24612;
var statearr_24618_24731 = state_24612__$1;
(statearr_24618_24731[(2)] = inst_24596);

(statearr_24618_24731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (6))){
var inst_24598 = (state_24612[(8)]);
var inst_24593 = (state_24612[(7)]);
var inst_24598__$1 = cljs.core.async.chan.call(null,(1));
var inst_24599 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24600 = [inst_24593,inst_24598__$1];
var inst_24601 = (new cljs.core.PersistentVector(null,2,(5),inst_24599,inst_24600,null));
var state_24612__$1 = (function (){var statearr_24619 = state_24612;
(statearr_24619[(8)] = inst_24598__$1);

return statearr_24619;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24612__$1,(8),jobs,inst_24601);
} else {
if((state_val_24613 === (7))){
var inst_24608 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24620_24732 = state_24612__$1;
(statearr_24620_24732[(2)] = inst_24608);

(statearr_24620_24732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (8))){
var inst_24598 = (state_24612[(8)]);
var inst_24603 = (state_24612[(2)]);
var state_24612__$1 = (function (){var statearr_24621 = state_24612;
(statearr_24621[(9)] = inst_24603);

return statearr_24621;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24612__$1,(9),results,inst_24598);
} else {
if((state_val_24613 === (9))){
var inst_24605 = (state_24612[(2)]);
var state_24612__$1 = (function (){var statearr_24622 = state_24612;
(statearr_24622[(10)] = inst_24605);

return statearr_24622;
})();
var statearr_24623_24733 = state_24612__$1;
(statearr_24623_24733[(2)] = null);

(statearr_24623_24733[(1)] = (2));


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
});})(c__24151__auto___24727,jobs,results,process,async))
;
return ((function (switch__24039__auto__,c__24151__auto___24727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0 = (function (){
var statearr_24627 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__);

(statearr_24627[(1)] = (1));

return statearr_24627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1 = (function (state_24612){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_24612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e24628){if((e24628 instanceof Object)){
var ex__24043__auto__ = e24628;
var statearr_24629_24734 = state_24612;
(statearr_24629_24734[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24735 = state_24612;
state_24612 = G__24735;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__ = function(state_24612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1.call(this,state_24612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___24727,jobs,results,process,async))
})();
var state__24153__auto__ = (function (){var statearr_24630 = f__24152__auto__.call(null);
(statearr_24630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___24727);

return statearr_24630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___24727,jobs,results,process,async))
);


var c__24151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto__,jobs,results,process,async){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto__,jobs,results,process,async){
return (function (state_24668){
var state_val_24669 = (state_24668[(1)]);
if((state_val_24669 === (7))){
var inst_24664 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
var statearr_24670_24736 = state_24668__$1;
(statearr_24670_24736[(2)] = inst_24664);

(statearr_24670_24736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (20))){
var state_24668__$1 = state_24668;
var statearr_24671_24737 = state_24668__$1;
(statearr_24671_24737[(2)] = null);

(statearr_24671_24737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (1))){
var state_24668__$1 = state_24668;
var statearr_24672_24738 = state_24668__$1;
(statearr_24672_24738[(2)] = null);

(statearr_24672_24738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (4))){
var inst_24633 = (state_24668[(7)]);
var inst_24633__$1 = (state_24668[(2)]);
var inst_24634 = (inst_24633__$1 == null);
var state_24668__$1 = (function (){var statearr_24673 = state_24668;
(statearr_24673[(7)] = inst_24633__$1);

return statearr_24673;
})();
if(cljs.core.truth_(inst_24634)){
var statearr_24674_24739 = state_24668__$1;
(statearr_24674_24739[(1)] = (5));

} else {
var statearr_24675_24740 = state_24668__$1;
(statearr_24675_24740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (15))){
var inst_24646 = (state_24668[(8)]);
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24668__$1,(18),to,inst_24646);
} else {
if((state_val_24669 === (21))){
var inst_24659 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
var statearr_24676_24741 = state_24668__$1;
(statearr_24676_24741[(2)] = inst_24659);

(statearr_24676_24741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (13))){
var inst_24661 = (state_24668[(2)]);
var state_24668__$1 = (function (){var statearr_24677 = state_24668;
(statearr_24677[(9)] = inst_24661);

return statearr_24677;
})();
var statearr_24678_24742 = state_24668__$1;
(statearr_24678_24742[(2)] = null);

(statearr_24678_24742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (6))){
var inst_24633 = (state_24668[(7)]);
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24668__$1,(11),inst_24633);
} else {
if((state_val_24669 === (17))){
var inst_24654 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
if(cljs.core.truth_(inst_24654)){
var statearr_24679_24743 = state_24668__$1;
(statearr_24679_24743[(1)] = (19));

} else {
var statearr_24680_24744 = state_24668__$1;
(statearr_24680_24744[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (3))){
var inst_24666 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24668__$1,inst_24666);
} else {
if((state_val_24669 === (12))){
var inst_24643 = (state_24668[(10)]);
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24668__$1,(14),inst_24643);
} else {
if((state_val_24669 === (2))){
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24668__$1,(4),results);
} else {
if((state_val_24669 === (19))){
var state_24668__$1 = state_24668;
var statearr_24681_24745 = state_24668__$1;
(statearr_24681_24745[(2)] = null);

(statearr_24681_24745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (11))){
var inst_24643 = (state_24668[(2)]);
var state_24668__$1 = (function (){var statearr_24682 = state_24668;
(statearr_24682[(10)] = inst_24643);

return statearr_24682;
})();
var statearr_24683_24746 = state_24668__$1;
(statearr_24683_24746[(2)] = null);

(statearr_24683_24746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (9))){
var state_24668__$1 = state_24668;
var statearr_24684_24747 = state_24668__$1;
(statearr_24684_24747[(2)] = null);

(statearr_24684_24747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (5))){
var state_24668__$1 = state_24668;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24685_24748 = state_24668__$1;
(statearr_24685_24748[(1)] = (8));

} else {
var statearr_24686_24749 = state_24668__$1;
(statearr_24686_24749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (14))){
var inst_24648 = (state_24668[(11)]);
var inst_24646 = (state_24668[(8)]);
var inst_24646__$1 = (state_24668[(2)]);
var inst_24647 = (inst_24646__$1 == null);
var inst_24648__$1 = cljs.core.not.call(null,inst_24647);
var state_24668__$1 = (function (){var statearr_24687 = state_24668;
(statearr_24687[(11)] = inst_24648__$1);

(statearr_24687[(8)] = inst_24646__$1);

return statearr_24687;
})();
if(inst_24648__$1){
var statearr_24688_24750 = state_24668__$1;
(statearr_24688_24750[(1)] = (15));

} else {
var statearr_24689_24751 = state_24668__$1;
(statearr_24689_24751[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (16))){
var inst_24648 = (state_24668[(11)]);
var state_24668__$1 = state_24668;
var statearr_24690_24752 = state_24668__$1;
(statearr_24690_24752[(2)] = inst_24648);

(statearr_24690_24752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (10))){
var inst_24640 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
var statearr_24691_24753 = state_24668__$1;
(statearr_24691_24753[(2)] = inst_24640);

(statearr_24691_24753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (18))){
var inst_24651 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
var statearr_24692_24754 = state_24668__$1;
(statearr_24692_24754[(2)] = inst_24651);

(statearr_24692_24754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (8))){
var inst_24637 = cljs.core.async.close_BANG_.call(null,to);
var state_24668__$1 = state_24668;
var statearr_24693_24755 = state_24668__$1;
(statearr_24693_24755[(2)] = inst_24637);

(statearr_24693_24755[(1)] = (10));


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
});})(c__24151__auto__,jobs,results,process,async))
;
return ((function (switch__24039__auto__,c__24151__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0 = (function (){
var statearr_24697 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__);

(statearr_24697[(1)] = (1));

return statearr_24697;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1 = (function (state_24668){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_24668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e24698){if((e24698 instanceof Object)){
var ex__24043__auto__ = e24698;
var statearr_24699_24756 = state_24668;
(statearr_24699_24756[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24757 = state_24668;
state_24668 = G__24757;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__ = function(state_24668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1.call(this,state_24668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto__,jobs,results,process,async))
})();
var state__24153__auto__ = (function (){var statearr_24700 = f__24152__auto__.call(null);
(statearr_24700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto__);

return statearr_24700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto__,jobs,results,process,async))
);

return c__24151__auto__;
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
var args24758 = [];
var len__17809__auto___24761 = arguments.length;
var i__17810__auto___24762 = (0);
while(true){
if((i__17810__auto___24762 < len__17809__auto___24761)){
args24758.push((arguments[i__17810__auto___24762]));

var G__24763 = (i__17810__auto___24762 + (1));
i__17810__auto___24762 = G__24763;
continue;
} else {
}
break;
}

var G__24760 = args24758.length;
switch (G__24760) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24758.length)].join('')));

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
var args24765 = [];
var len__17809__auto___24768 = arguments.length;
var i__17810__auto___24769 = (0);
while(true){
if((i__17810__auto___24769 < len__17809__auto___24768)){
args24765.push((arguments[i__17810__auto___24769]));

var G__24770 = (i__17810__auto___24769 + (1));
i__17810__auto___24769 = G__24770;
continue;
} else {
}
break;
}

var G__24767 = args24765.length;
switch (G__24767) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24765.length)].join('')));

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
var args24772 = [];
var len__17809__auto___24825 = arguments.length;
var i__17810__auto___24826 = (0);
while(true){
if((i__17810__auto___24826 < len__17809__auto___24825)){
args24772.push((arguments[i__17810__auto___24826]));

var G__24827 = (i__17810__auto___24826 + (1));
i__17810__auto___24826 = G__24827;
continue;
} else {
}
break;
}

var G__24774 = args24772.length;
switch (G__24774) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24772.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24151__auto___24829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___24829,tc,fc){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___24829,tc,fc){
return (function (state_24800){
var state_val_24801 = (state_24800[(1)]);
if((state_val_24801 === (7))){
var inst_24796 = (state_24800[(2)]);
var state_24800__$1 = state_24800;
var statearr_24802_24830 = state_24800__$1;
(statearr_24802_24830[(2)] = inst_24796);

(statearr_24802_24830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (1))){
var state_24800__$1 = state_24800;
var statearr_24803_24831 = state_24800__$1;
(statearr_24803_24831[(2)] = null);

(statearr_24803_24831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (4))){
var inst_24777 = (state_24800[(7)]);
var inst_24777__$1 = (state_24800[(2)]);
var inst_24778 = (inst_24777__$1 == null);
var state_24800__$1 = (function (){var statearr_24804 = state_24800;
(statearr_24804[(7)] = inst_24777__$1);

return statearr_24804;
})();
if(cljs.core.truth_(inst_24778)){
var statearr_24805_24832 = state_24800__$1;
(statearr_24805_24832[(1)] = (5));

} else {
var statearr_24806_24833 = state_24800__$1;
(statearr_24806_24833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (13))){
var state_24800__$1 = state_24800;
var statearr_24807_24834 = state_24800__$1;
(statearr_24807_24834[(2)] = null);

(statearr_24807_24834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (6))){
var inst_24777 = (state_24800[(7)]);
var inst_24783 = p.call(null,inst_24777);
var state_24800__$1 = state_24800;
if(cljs.core.truth_(inst_24783)){
var statearr_24808_24835 = state_24800__$1;
(statearr_24808_24835[(1)] = (9));

} else {
var statearr_24809_24836 = state_24800__$1;
(statearr_24809_24836[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (3))){
var inst_24798 = (state_24800[(2)]);
var state_24800__$1 = state_24800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24800__$1,inst_24798);
} else {
if((state_val_24801 === (12))){
var state_24800__$1 = state_24800;
var statearr_24810_24837 = state_24800__$1;
(statearr_24810_24837[(2)] = null);

(statearr_24810_24837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (2))){
var state_24800__$1 = state_24800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24800__$1,(4),ch);
} else {
if((state_val_24801 === (11))){
var inst_24777 = (state_24800[(7)]);
var inst_24787 = (state_24800[(2)]);
var state_24800__$1 = state_24800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24800__$1,(8),inst_24787,inst_24777);
} else {
if((state_val_24801 === (9))){
var state_24800__$1 = state_24800;
var statearr_24811_24838 = state_24800__$1;
(statearr_24811_24838[(2)] = tc);

(statearr_24811_24838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (5))){
var inst_24780 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24781 = cljs.core.async.close_BANG_.call(null,fc);
var state_24800__$1 = (function (){var statearr_24812 = state_24800;
(statearr_24812[(8)] = inst_24780);

return statearr_24812;
})();
var statearr_24813_24839 = state_24800__$1;
(statearr_24813_24839[(2)] = inst_24781);

(statearr_24813_24839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (14))){
var inst_24794 = (state_24800[(2)]);
var state_24800__$1 = state_24800;
var statearr_24814_24840 = state_24800__$1;
(statearr_24814_24840[(2)] = inst_24794);

(statearr_24814_24840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (10))){
var state_24800__$1 = state_24800;
var statearr_24815_24841 = state_24800__$1;
(statearr_24815_24841[(2)] = fc);

(statearr_24815_24841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (8))){
var inst_24789 = (state_24800[(2)]);
var state_24800__$1 = state_24800;
if(cljs.core.truth_(inst_24789)){
var statearr_24816_24842 = state_24800__$1;
(statearr_24816_24842[(1)] = (12));

} else {
var statearr_24817_24843 = state_24800__$1;
(statearr_24817_24843[(1)] = (13));

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
});})(c__24151__auto___24829,tc,fc))
;
return ((function (switch__24039__auto__,c__24151__auto___24829,tc,fc){
return (function() {
var cljs$core$async$state_machine__24040__auto__ = null;
var cljs$core$async$state_machine__24040__auto____0 = (function (){
var statearr_24821 = [null,null,null,null,null,null,null,null,null];
(statearr_24821[(0)] = cljs$core$async$state_machine__24040__auto__);

(statearr_24821[(1)] = (1));

return statearr_24821;
});
var cljs$core$async$state_machine__24040__auto____1 = (function (state_24800){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_24800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e24822){if((e24822 instanceof Object)){
var ex__24043__auto__ = e24822;
var statearr_24823_24844 = state_24800;
(statearr_24823_24844[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24845 = state_24800;
state_24800 = G__24845;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$state_machine__24040__auto__ = function(state_24800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24040__auto____1.call(this,state_24800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24040__auto____0;
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24040__auto____1;
return cljs$core$async$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___24829,tc,fc))
})();
var state__24153__auto__ = (function (){var statearr_24824 = f__24152__auto__.call(null);
(statearr_24824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___24829);

return statearr_24824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___24829,tc,fc))
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
var c__24151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto__){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto__){
return (function (state_24909){
var state_val_24910 = (state_24909[(1)]);
if((state_val_24910 === (7))){
var inst_24905 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
var statearr_24911_24932 = state_24909__$1;
(statearr_24911_24932[(2)] = inst_24905);

(statearr_24911_24932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (1))){
var inst_24889 = init;
var state_24909__$1 = (function (){var statearr_24912 = state_24909;
(statearr_24912[(7)] = inst_24889);

return statearr_24912;
})();
var statearr_24913_24933 = state_24909__$1;
(statearr_24913_24933[(2)] = null);

(statearr_24913_24933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (4))){
var inst_24892 = (state_24909[(8)]);
var inst_24892__$1 = (state_24909[(2)]);
var inst_24893 = (inst_24892__$1 == null);
var state_24909__$1 = (function (){var statearr_24914 = state_24909;
(statearr_24914[(8)] = inst_24892__$1);

return statearr_24914;
})();
if(cljs.core.truth_(inst_24893)){
var statearr_24915_24934 = state_24909__$1;
(statearr_24915_24934[(1)] = (5));

} else {
var statearr_24916_24935 = state_24909__$1;
(statearr_24916_24935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (6))){
var inst_24889 = (state_24909[(7)]);
var inst_24896 = (state_24909[(9)]);
var inst_24892 = (state_24909[(8)]);
var inst_24896__$1 = f.call(null,inst_24889,inst_24892);
var inst_24897 = cljs.core.reduced_QMARK_.call(null,inst_24896__$1);
var state_24909__$1 = (function (){var statearr_24917 = state_24909;
(statearr_24917[(9)] = inst_24896__$1);

return statearr_24917;
})();
if(inst_24897){
var statearr_24918_24936 = state_24909__$1;
(statearr_24918_24936[(1)] = (8));

} else {
var statearr_24919_24937 = state_24909__$1;
(statearr_24919_24937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (3))){
var inst_24907 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24909__$1,inst_24907);
} else {
if((state_val_24910 === (2))){
var state_24909__$1 = state_24909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24909__$1,(4),ch);
} else {
if((state_val_24910 === (9))){
var inst_24896 = (state_24909[(9)]);
var inst_24889 = inst_24896;
var state_24909__$1 = (function (){var statearr_24920 = state_24909;
(statearr_24920[(7)] = inst_24889);

return statearr_24920;
})();
var statearr_24921_24938 = state_24909__$1;
(statearr_24921_24938[(2)] = null);

(statearr_24921_24938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (5))){
var inst_24889 = (state_24909[(7)]);
var state_24909__$1 = state_24909;
var statearr_24922_24939 = state_24909__$1;
(statearr_24922_24939[(2)] = inst_24889);

(statearr_24922_24939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (10))){
var inst_24903 = (state_24909[(2)]);
var state_24909__$1 = state_24909;
var statearr_24923_24940 = state_24909__$1;
(statearr_24923_24940[(2)] = inst_24903);

(statearr_24923_24940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24910 === (8))){
var inst_24896 = (state_24909[(9)]);
var inst_24899 = cljs.core.deref.call(null,inst_24896);
var state_24909__$1 = state_24909;
var statearr_24924_24941 = state_24909__$1;
(statearr_24924_24941[(2)] = inst_24899);

(statearr_24924_24941[(1)] = (10));


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
});})(c__24151__auto__))
;
return ((function (switch__24039__auto__,c__24151__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24040__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24040__auto____0 = (function (){
var statearr_24928 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24928[(0)] = cljs$core$async$reduce_$_state_machine__24040__auto__);

(statearr_24928[(1)] = (1));

return statearr_24928;
});
var cljs$core$async$reduce_$_state_machine__24040__auto____1 = (function (state_24909){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_24909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e24929){if((e24929 instanceof Object)){
var ex__24043__auto__ = e24929;
var statearr_24930_24942 = state_24909;
(statearr_24930_24942[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24943 = state_24909;
state_24909 = G__24943;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24040__auto__ = function(state_24909){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24040__auto____1.call(this,state_24909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24040__auto____0;
cljs$core$async$reduce_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24040__auto____1;
return cljs$core$async$reduce_$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto__))
})();
var state__24153__auto__ = (function (){var statearr_24931 = f__24152__auto__.call(null);
(statearr_24931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto__);

return statearr_24931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto__))
);

return c__24151__auto__;
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
var args24944 = [];
var len__17809__auto___24996 = arguments.length;
var i__17810__auto___24997 = (0);
while(true){
if((i__17810__auto___24997 < len__17809__auto___24996)){
args24944.push((arguments[i__17810__auto___24997]));

var G__24998 = (i__17810__auto___24997 + (1));
i__17810__auto___24997 = G__24998;
continue;
} else {
}
break;
}

var G__24946 = args24944.length;
switch (G__24946) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24944.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto__){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto__){
return (function (state_24971){
var state_val_24972 = (state_24971[(1)]);
if((state_val_24972 === (7))){
var inst_24953 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
var statearr_24973_25000 = state_24971__$1;
(statearr_24973_25000[(2)] = inst_24953);

(statearr_24973_25000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (1))){
var inst_24947 = cljs.core.seq.call(null,coll);
var inst_24948 = inst_24947;
var state_24971__$1 = (function (){var statearr_24974 = state_24971;
(statearr_24974[(7)] = inst_24948);

return statearr_24974;
})();
var statearr_24975_25001 = state_24971__$1;
(statearr_24975_25001[(2)] = null);

(statearr_24975_25001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (4))){
var inst_24948 = (state_24971[(7)]);
var inst_24951 = cljs.core.first.call(null,inst_24948);
var state_24971__$1 = state_24971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24971__$1,(7),ch,inst_24951);
} else {
if((state_val_24972 === (13))){
var inst_24965 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
var statearr_24976_25002 = state_24971__$1;
(statearr_24976_25002[(2)] = inst_24965);

(statearr_24976_25002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (6))){
var inst_24956 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
if(cljs.core.truth_(inst_24956)){
var statearr_24977_25003 = state_24971__$1;
(statearr_24977_25003[(1)] = (8));

} else {
var statearr_24978_25004 = state_24971__$1;
(statearr_24978_25004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (3))){
var inst_24969 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24971__$1,inst_24969);
} else {
if((state_val_24972 === (12))){
var state_24971__$1 = state_24971;
var statearr_24979_25005 = state_24971__$1;
(statearr_24979_25005[(2)] = null);

(statearr_24979_25005[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (2))){
var inst_24948 = (state_24971[(7)]);
var state_24971__$1 = state_24971;
if(cljs.core.truth_(inst_24948)){
var statearr_24980_25006 = state_24971__$1;
(statearr_24980_25006[(1)] = (4));

} else {
var statearr_24981_25007 = state_24971__$1;
(statearr_24981_25007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (11))){
var inst_24962 = cljs.core.async.close_BANG_.call(null,ch);
var state_24971__$1 = state_24971;
var statearr_24982_25008 = state_24971__$1;
(statearr_24982_25008[(2)] = inst_24962);

(statearr_24982_25008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (9))){
var state_24971__$1 = state_24971;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24983_25009 = state_24971__$1;
(statearr_24983_25009[(1)] = (11));

} else {
var statearr_24984_25010 = state_24971__$1;
(statearr_24984_25010[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (5))){
var inst_24948 = (state_24971[(7)]);
var state_24971__$1 = state_24971;
var statearr_24985_25011 = state_24971__$1;
(statearr_24985_25011[(2)] = inst_24948);

(statearr_24985_25011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (10))){
var inst_24967 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
var statearr_24986_25012 = state_24971__$1;
(statearr_24986_25012[(2)] = inst_24967);

(statearr_24986_25012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (8))){
var inst_24948 = (state_24971[(7)]);
var inst_24958 = cljs.core.next.call(null,inst_24948);
var inst_24948__$1 = inst_24958;
var state_24971__$1 = (function (){var statearr_24987 = state_24971;
(statearr_24987[(7)] = inst_24948__$1);

return statearr_24987;
})();
var statearr_24988_25013 = state_24971__$1;
(statearr_24988_25013[(2)] = null);

(statearr_24988_25013[(1)] = (2));


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
});})(c__24151__auto__))
;
return ((function (switch__24039__auto__,c__24151__auto__){
return (function() {
var cljs$core$async$state_machine__24040__auto__ = null;
var cljs$core$async$state_machine__24040__auto____0 = (function (){
var statearr_24992 = [null,null,null,null,null,null,null,null];
(statearr_24992[(0)] = cljs$core$async$state_machine__24040__auto__);

(statearr_24992[(1)] = (1));

return statearr_24992;
});
var cljs$core$async$state_machine__24040__auto____1 = (function (state_24971){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_24971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e24993){if((e24993 instanceof Object)){
var ex__24043__auto__ = e24993;
var statearr_24994_25014 = state_24971;
(statearr_24994_25014[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25015 = state_24971;
state_24971 = G__25015;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$state_machine__24040__auto__ = function(state_24971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24040__auto____1.call(this,state_24971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24040__auto____0;
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24040__auto____1;
return cljs$core$async$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto__))
})();
var state__24153__auto__ = (function (){var statearr_24995 = f__24152__auto__.call(null);
(statearr_24995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto__);

return statearr_24995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto__))
);

return c__24151__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25237 = (function (mult,ch,cs,meta25238){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25238 = meta25238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25239,meta25238__$1){
var self__ = this;
var _25239__$1 = this;
return (new cljs.core.async.t_cljs$core$async25237(self__.mult,self__.ch,self__.cs,meta25238__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25239){
var self__ = this;
var _25239__$1 = this;
return self__.meta25238;
});})(cs))
;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25237.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25238","meta25238",680613111,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25237";

cljs.core.async.t_cljs$core$async25237.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25237");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25237 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25237(mult__$1,ch__$1,cs__$1,meta25238){
return (new cljs.core.async.t_cljs$core$async25237(mult__$1,ch__$1,cs__$1,meta25238));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25237(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24151__auto___25458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___25458,cs,m,dchan,dctr,done){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___25458,cs,m,dchan,dctr,done){
return (function (state_25370){
var state_val_25371 = (state_25370[(1)]);
if((state_val_25371 === (7))){
var inst_25366 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25372_25459 = state_25370__$1;
(statearr_25372_25459[(2)] = inst_25366);

(statearr_25372_25459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (20))){
var inst_25271 = (state_25370[(7)]);
var inst_25281 = cljs.core.first.call(null,inst_25271);
var inst_25282 = cljs.core.nth.call(null,inst_25281,(0),null);
var inst_25283 = cljs.core.nth.call(null,inst_25281,(1),null);
var state_25370__$1 = (function (){var statearr_25373 = state_25370;
(statearr_25373[(8)] = inst_25282);

return statearr_25373;
})();
if(cljs.core.truth_(inst_25283)){
var statearr_25374_25460 = state_25370__$1;
(statearr_25374_25460[(1)] = (22));

} else {
var statearr_25375_25461 = state_25370__$1;
(statearr_25375_25461[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (27))){
var inst_25242 = (state_25370[(9)]);
var inst_25318 = (state_25370[(10)]);
var inst_25311 = (state_25370[(11)]);
var inst_25313 = (state_25370[(12)]);
var inst_25318__$1 = cljs.core._nth.call(null,inst_25311,inst_25313);
var inst_25319 = cljs.core.async.put_BANG_.call(null,inst_25318__$1,inst_25242,done);
var state_25370__$1 = (function (){var statearr_25376 = state_25370;
(statearr_25376[(10)] = inst_25318__$1);

return statearr_25376;
})();
if(cljs.core.truth_(inst_25319)){
var statearr_25377_25462 = state_25370__$1;
(statearr_25377_25462[(1)] = (30));

} else {
var statearr_25378_25463 = state_25370__$1;
(statearr_25378_25463[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (1))){
var state_25370__$1 = state_25370;
var statearr_25379_25464 = state_25370__$1;
(statearr_25379_25464[(2)] = null);

(statearr_25379_25464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (24))){
var inst_25271 = (state_25370[(7)]);
var inst_25288 = (state_25370[(2)]);
var inst_25289 = cljs.core.next.call(null,inst_25271);
var inst_25251 = inst_25289;
var inst_25252 = null;
var inst_25253 = (0);
var inst_25254 = (0);
var state_25370__$1 = (function (){var statearr_25380 = state_25370;
(statearr_25380[(13)] = inst_25288);

(statearr_25380[(14)] = inst_25254);

(statearr_25380[(15)] = inst_25252);

(statearr_25380[(16)] = inst_25251);

(statearr_25380[(17)] = inst_25253);

return statearr_25380;
})();
var statearr_25381_25465 = state_25370__$1;
(statearr_25381_25465[(2)] = null);

(statearr_25381_25465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (39))){
var state_25370__$1 = state_25370;
var statearr_25385_25466 = state_25370__$1;
(statearr_25385_25466[(2)] = null);

(statearr_25385_25466[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (4))){
var inst_25242 = (state_25370[(9)]);
var inst_25242__$1 = (state_25370[(2)]);
var inst_25243 = (inst_25242__$1 == null);
var state_25370__$1 = (function (){var statearr_25386 = state_25370;
(statearr_25386[(9)] = inst_25242__$1);

return statearr_25386;
})();
if(cljs.core.truth_(inst_25243)){
var statearr_25387_25467 = state_25370__$1;
(statearr_25387_25467[(1)] = (5));

} else {
var statearr_25388_25468 = state_25370__$1;
(statearr_25388_25468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (15))){
var inst_25254 = (state_25370[(14)]);
var inst_25252 = (state_25370[(15)]);
var inst_25251 = (state_25370[(16)]);
var inst_25253 = (state_25370[(17)]);
var inst_25267 = (state_25370[(2)]);
var inst_25268 = (inst_25254 + (1));
var tmp25382 = inst_25252;
var tmp25383 = inst_25251;
var tmp25384 = inst_25253;
var inst_25251__$1 = tmp25383;
var inst_25252__$1 = tmp25382;
var inst_25253__$1 = tmp25384;
var inst_25254__$1 = inst_25268;
var state_25370__$1 = (function (){var statearr_25389 = state_25370;
(statearr_25389[(18)] = inst_25267);

(statearr_25389[(14)] = inst_25254__$1);

(statearr_25389[(15)] = inst_25252__$1);

(statearr_25389[(16)] = inst_25251__$1);

(statearr_25389[(17)] = inst_25253__$1);

return statearr_25389;
})();
var statearr_25390_25469 = state_25370__$1;
(statearr_25390_25469[(2)] = null);

(statearr_25390_25469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (21))){
var inst_25292 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25394_25470 = state_25370__$1;
(statearr_25394_25470[(2)] = inst_25292);

(statearr_25394_25470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (31))){
var inst_25318 = (state_25370[(10)]);
var inst_25322 = done.call(null,null);
var inst_25323 = cljs.core.async.untap_STAR_.call(null,m,inst_25318);
var state_25370__$1 = (function (){var statearr_25395 = state_25370;
(statearr_25395[(19)] = inst_25322);

return statearr_25395;
})();
var statearr_25396_25471 = state_25370__$1;
(statearr_25396_25471[(2)] = inst_25323);

(statearr_25396_25471[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (32))){
var inst_25310 = (state_25370[(20)]);
var inst_25311 = (state_25370[(11)]);
var inst_25312 = (state_25370[(21)]);
var inst_25313 = (state_25370[(12)]);
var inst_25325 = (state_25370[(2)]);
var inst_25326 = (inst_25313 + (1));
var tmp25391 = inst_25310;
var tmp25392 = inst_25311;
var tmp25393 = inst_25312;
var inst_25310__$1 = tmp25391;
var inst_25311__$1 = tmp25392;
var inst_25312__$1 = tmp25393;
var inst_25313__$1 = inst_25326;
var state_25370__$1 = (function (){var statearr_25397 = state_25370;
(statearr_25397[(22)] = inst_25325);

(statearr_25397[(20)] = inst_25310__$1);

(statearr_25397[(11)] = inst_25311__$1);

(statearr_25397[(21)] = inst_25312__$1);

(statearr_25397[(12)] = inst_25313__$1);

return statearr_25397;
})();
var statearr_25398_25472 = state_25370__$1;
(statearr_25398_25472[(2)] = null);

(statearr_25398_25472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (40))){
var inst_25338 = (state_25370[(23)]);
var inst_25342 = done.call(null,null);
var inst_25343 = cljs.core.async.untap_STAR_.call(null,m,inst_25338);
var state_25370__$1 = (function (){var statearr_25399 = state_25370;
(statearr_25399[(24)] = inst_25342);

return statearr_25399;
})();
var statearr_25400_25473 = state_25370__$1;
(statearr_25400_25473[(2)] = inst_25343);

(statearr_25400_25473[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (33))){
var inst_25329 = (state_25370[(25)]);
var inst_25331 = cljs.core.chunked_seq_QMARK_.call(null,inst_25329);
var state_25370__$1 = state_25370;
if(inst_25331){
var statearr_25401_25474 = state_25370__$1;
(statearr_25401_25474[(1)] = (36));

} else {
var statearr_25402_25475 = state_25370__$1;
(statearr_25402_25475[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (13))){
var inst_25261 = (state_25370[(26)]);
var inst_25264 = cljs.core.async.close_BANG_.call(null,inst_25261);
var state_25370__$1 = state_25370;
var statearr_25403_25476 = state_25370__$1;
(statearr_25403_25476[(2)] = inst_25264);

(statearr_25403_25476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (22))){
var inst_25282 = (state_25370[(8)]);
var inst_25285 = cljs.core.async.close_BANG_.call(null,inst_25282);
var state_25370__$1 = state_25370;
var statearr_25404_25477 = state_25370__$1;
(statearr_25404_25477[(2)] = inst_25285);

(statearr_25404_25477[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (36))){
var inst_25329 = (state_25370[(25)]);
var inst_25333 = cljs.core.chunk_first.call(null,inst_25329);
var inst_25334 = cljs.core.chunk_rest.call(null,inst_25329);
var inst_25335 = cljs.core.count.call(null,inst_25333);
var inst_25310 = inst_25334;
var inst_25311 = inst_25333;
var inst_25312 = inst_25335;
var inst_25313 = (0);
var state_25370__$1 = (function (){var statearr_25405 = state_25370;
(statearr_25405[(20)] = inst_25310);

(statearr_25405[(11)] = inst_25311);

(statearr_25405[(21)] = inst_25312);

(statearr_25405[(12)] = inst_25313);

return statearr_25405;
})();
var statearr_25406_25478 = state_25370__$1;
(statearr_25406_25478[(2)] = null);

(statearr_25406_25478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (41))){
var inst_25329 = (state_25370[(25)]);
var inst_25345 = (state_25370[(2)]);
var inst_25346 = cljs.core.next.call(null,inst_25329);
var inst_25310 = inst_25346;
var inst_25311 = null;
var inst_25312 = (0);
var inst_25313 = (0);
var state_25370__$1 = (function (){var statearr_25407 = state_25370;
(statearr_25407[(27)] = inst_25345);

(statearr_25407[(20)] = inst_25310);

(statearr_25407[(11)] = inst_25311);

(statearr_25407[(21)] = inst_25312);

(statearr_25407[(12)] = inst_25313);

return statearr_25407;
})();
var statearr_25408_25479 = state_25370__$1;
(statearr_25408_25479[(2)] = null);

(statearr_25408_25479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (43))){
var state_25370__$1 = state_25370;
var statearr_25409_25480 = state_25370__$1;
(statearr_25409_25480[(2)] = null);

(statearr_25409_25480[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (29))){
var inst_25354 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25410_25481 = state_25370__$1;
(statearr_25410_25481[(2)] = inst_25354);

(statearr_25410_25481[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (44))){
var inst_25363 = (state_25370[(2)]);
var state_25370__$1 = (function (){var statearr_25411 = state_25370;
(statearr_25411[(28)] = inst_25363);

return statearr_25411;
})();
var statearr_25412_25482 = state_25370__$1;
(statearr_25412_25482[(2)] = null);

(statearr_25412_25482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (6))){
var inst_25302 = (state_25370[(29)]);
var inst_25301 = cljs.core.deref.call(null,cs);
var inst_25302__$1 = cljs.core.keys.call(null,inst_25301);
var inst_25303 = cljs.core.count.call(null,inst_25302__$1);
var inst_25304 = cljs.core.reset_BANG_.call(null,dctr,inst_25303);
var inst_25309 = cljs.core.seq.call(null,inst_25302__$1);
var inst_25310 = inst_25309;
var inst_25311 = null;
var inst_25312 = (0);
var inst_25313 = (0);
var state_25370__$1 = (function (){var statearr_25413 = state_25370;
(statearr_25413[(29)] = inst_25302__$1);

(statearr_25413[(30)] = inst_25304);

(statearr_25413[(20)] = inst_25310);

(statearr_25413[(11)] = inst_25311);

(statearr_25413[(21)] = inst_25312);

(statearr_25413[(12)] = inst_25313);

return statearr_25413;
})();
var statearr_25414_25483 = state_25370__$1;
(statearr_25414_25483[(2)] = null);

(statearr_25414_25483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (28))){
var inst_25310 = (state_25370[(20)]);
var inst_25329 = (state_25370[(25)]);
var inst_25329__$1 = cljs.core.seq.call(null,inst_25310);
var state_25370__$1 = (function (){var statearr_25415 = state_25370;
(statearr_25415[(25)] = inst_25329__$1);

return statearr_25415;
})();
if(inst_25329__$1){
var statearr_25416_25484 = state_25370__$1;
(statearr_25416_25484[(1)] = (33));

} else {
var statearr_25417_25485 = state_25370__$1;
(statearr_25417_25485[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (25))){
var inst_25312 = (state_25370[(21)]);
var inst_25313 = (state_25370[(12)]);
var inst_25315 = (inst_25313 < inst_25312);
var inst_25316 = inst_25315;
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25316)){
var statearr_25418_25486 = state_25370__$1;
(statearr_25418_25486[(1)] = (27));

} else {
var statearr_25419_25487 = state_25370__$1;
(statearr_25419_25487[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (34))){
var state_25370__$1 = state_25370;
var statearr_25420_25488 = state_25370__$1;
(statearr_25420_25488[(2)] = null);

(statearr_25420_25488[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (17))){
var state_25370__$1 = state_25370;
var statearr_25421_25489 = state_25370__$1;
(statearr_25421_25489[(2)] = null);

(statearr_25421_25489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (3))){
var inst_25368 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25370__$1,inst_25368);
} else {
if((state_val_25371 === (12))){
var inst_25297 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25422_25490 = state_25370__$1;
(statearr_25422_25490[(2)] = inst_25297);

(statearr_25422_25490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (2))){
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(4),ch);
} else {
if((state_val_25371 === (23))){
var state_25370__$1 = state_25370;
var statearr_25423_25491 = state_25370__$1;
(statearr_25423_25491[(2)] = null);

(statearr_25423_25491[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (35))){
var inst_25352 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25424_25492 = state_25370__$1;
(statearr_25424_25492[(2)] = inst_25352);

(statearr_25424_25492[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (19))){
var inst_25271 = (state_25370[(7)]);
var inst_25275 = cljs.core.chunk_first.call(null,inst_25271);
var inst_25276 = cljs.core.chunk_rest.call(null,inst_25271);
var inst_25277 = cljs.core.count.call(null,inst_25275);
var inst_25251 = inst_25276;
var inst_25252 = inst_25275;
var inst_25253 = inst_25277;
var inst_25254 = (0);
var state_25370__$1 = (function (){var statearr_25425 = state_25370;
(statearr_25425[(14)] = inst_25254);

(statearr_25425[(15)] = inst_25252);

(statearr_25425[(16)] = inst_25251);

(statearr_25425[(17)] = inst_25253);

return statearr_25425;
})();
var statearr_25426_25493 = state_25370__$1;
(statearr_25426_25493[(2)] = null);

(statearr_25426_25493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (11))){
var inst_25271 = (state_25370[(7)]);
var inst_25251 = (state_25370[(16)]);
var inst_25271__$1 = cljs.core.seq.call(null,inst_25251);
var state_25370__$1 = (function (){var statearr_25427 = state_25370;
(statearr_25427[(7)] = inst_25271__$1);

return statearr_25427;
})();
if(inst_25271__$1){
var statearr_25428_25494 = state_25370__$1;
(statearr_25428_25494[(1)] = (16));

} else {
var statearr_25429_25495 = state_25370__$1;
(statearr_25429_25495[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (9))){
var inst_25299 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25430_25496 = state_25370__$1;
(statearr_25430_25496[(2)] = inst_25299);

(statearr_25430_25496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (5))){
var inst_25249 = cljs.core.deref.call(null,cs);
var inst_25250 = cljs.core.seq.call(null,inst_25249);
var inst_25251 = inst_25250;
var inst_25252 = null;
var inst_25253 = (0);
var inst_25254 = (0);
var state_25370__$1 = (function (){var statearr_25431 = state_25370;
(statearr_25431[(14)] = inst_25254);

(statearr_25431[(15)] = inst_25252);

(statearr_25431[(16)] = inst_25251);

(statearr_25431[(17)] = inst_25253);

return statearr_25431;
})();
var statearr_25432_25497 = state_25370__$1;
(statearr_25432_25497[(2)] = null);

(statearr_25432_25497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (14))){
var state_25370__$1 = state_25370;
var statearr_25433_25498 = state_25370__$1;
(statearr_25433_25498[(2)] = null);

(statearr_25433_25498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (45))){
var inst_25360 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25434_25499 = state_25370__$1;
(statearr_25434_25499[(2)] = inst_25360);

(statearr_25434_25499[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (26))){
var inst_25302 = (state_25370[(29)]);
var inst_25356 = (state_25370[(2)]);
var inst_25357 = cljs.core.seq.call(null,inst_25302);
var state_25370__$1 = (function (){var statearr_25435 = state_25370;
(statearr_25435[(31)] = inst_25356);

return statearr_25435;
})();
if(inst_25357){
var statearr_25436_25500 = state_25370__$1;
(statearr_25436_25500[(1)] = (42));

} else {
var statearr_25437_25501 = state_25370__$1;
(statearr_25437_25501[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (16))){
var inst_25271 = (state_25370[(7)]);
var inst_25273 = cljs.core.chunked_seq_QMARK_.call(null,inst_25271);
var state_25370__$1 = state_25370;
if(inst_25273){
var statearr_25438_25502 = state_25370__$1;
(statearr_25438_25502[(1)] = (19));

} else {
var statearr_25439_25503 = state_25370__$1;
(statearr_25439_25503[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (38))){
var inst_25349 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25440_25504 = state_25370__$1;
(statearr_25440_25504[(2)] = inst_25349);

(statearr_25440_25504[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (30))){
var state_25370__$1 = state_25370;
var statearr_25441_25505 = state_25370__$1;
(statearr_25441_25505[(2)] = null);

(statearr_25441_25505[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (10))){
var inst_25254 = (state_25370[(14)]);
var inst_25252 = (state_25370[(15)]);
var inst_25260 = cljs.core._nth.call(null,inst_25252,inst_25254);
var inst_25261 = cljs.core.nth.call(null,inst_25260,(0),null);
var inst_25262 = cljs.core.nth.call(null,inst_25260,(1),null);
var state_25370__$1 = (function (){var statearr_25442 = state_25370;
(statearr_25442[(26)] = inst_25261);

return statearr_25442;
})();
if(cljs.core.truth_(inst_25262)){
var statearr_25443_25506 = state_25370__$1;
(statearr_25443_25506[(1)] = (13));

} else {
var statearr_25444_25507 = state_25370__$1;
(statearr_25444_25507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (18))){
var inst_25295 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25445_25508 = state_25370__$1;
(statearr_25445_25508[(2)] = inst_25295);

(statearr_25445_25508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (42))){
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(45),dchan);
} else {
if((state_val_25371 === (37))){
var inst_25242 = (state_25370[(9)]);
var inst_25338 = (state_25370[(23)]);
var inst_25329 = (state_25370[(25)]);
var inst_25338__$1 = cljs.core.first.call(null,inst_25329);
var inst_25339 = cljs.core.async.put_BANG_.call(null,inst_25338__$1,inst_25242,done);
var state_25370__$1 = (function (){var statearr_25446 = state_25370;
(statearr_25446[(23)] = inst_25338__$1);

return statearr_25446;
})();
if(cljs.core.truth_(inst_25339)){
var statearr_25447_25509 = state_25370__$1;
(statearr_25447_25509[(1)] = (39));

} else {
var statearr_25448_25510 = state_25370__$1;
(statearr_25448_25510[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (8))){
var inst_25254 = (state_25370[(14)]);
var inst_25253 = (state_25370[(17)]);
var inst_25256 = (inst_25254 < inst_25253);
var inst_25257 = inst_25256;
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25257)){
var statearr_25449_25511 = state_25370__$1;
(statearr_25449_25511[(1)] = (10));

} else {
var statearr_25450_25512 = state_25370__$1;
(statearr_25450_25512[(1)] = (11));

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
});})(c__24151__auto___25458,cs,m,dchan,dctr,done))
;
return ((function (switch__24039__auto__,c__24151__auto___25458,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24040__auto__ = null;
var cljs$core$async$mult_$_state_machine__24040__auto____0 = (function (){
var statearr_25454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25454[(0)] = cljs$core$async$mult_$_state_machine__24040__auto__);

(statearr_25454[(1)] = (1));

return statearr_25454;
});
var cljs$core$async$mult_$_state_machine__24040__auto____1 = (function (state_25370){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_25370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e25455){if((e25455 instanceof Object)){
var ex__24043__auto__ = e25455;
var statearr_25456_25513 = state_25370;
(statearr_25456_25513[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25514 = state_25370;
state_25370 = G__25514;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24040__auto__ = function(state_25370){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24040__auto____1.call(this,state_25370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24040__auto____0;
cljs$core$async$mult_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24040__auto____1;
return cljs$core$async$mult_$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___25458,cs,m,dchan,dctr,done))
})();
var state__24153__auto__ = (function (){var statearr_25457 = f__24152__auto__.call(null);
(statearr_25457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___25458);

return statearr_25457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___25458,cs,m,dchan,dctr,done))
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
var args25515 = [];
var len__17809__auto___25518 = arguments.length;
var i__17810__auto___25519 = (0);
while(true){
if((i__17810__auto___25519 < len__17809__auto___25518)){
args25515.push((arguments[i__17810__auto___25519]));

var G__25520 = (i__17810__auto___25519 + (1));
i__17810__auto___25519 = G__25520;
continue;
} else {
}
break;
}

var G__25517 = args25515.length;
switch (G__25517) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25515.length)].join('')));

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
var len__17809__auto___25532 = arguments.length;
var i__17810__auto___25533 = (0);
while(true){
if((i__17810__auto___25533 < len__17809__auto___25532)){
args__17816__auto__.push((arguments[i__17810__auto___25533]));

var G__25534 = (i__17810__auto___25533 + (1));
i__17810__auto___25533 = G__25534;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25526){
var map__25527 = p__25526;
var map__25527__$1 = ((((!((map__25527 == null)))?((((map__25527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25527):map__25527);
var opts = map__25527__$1;
var statearr_25529_25535 = state;
(statearr_25529_25535[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25527,map__25527__$1,opts){
return (function (val){
var statearr_25530_25536 = state;
(statearr_25530_25536[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25527,map__25527__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25531_25537 = state;
(statearr_25531_25537[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25522){
var G__25523 = cljs.core.first.call(null,seq25522);
var seq25522__$1 = cljs.core.next.call(null,seq25522);
var G__25524 = cljs.core.first.call(null,seq25522__$1);
var seq25522__$2 = cljs.core.next.call(null,seq25522__$1);
var G__25525 = cljs.core.first.call(null,seq25522__$2);
var seq25522__$3 = cljs.core.next.call(null,seq25522__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25523,G__25524,G__25525,seq25522__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25701 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25702){
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
this.meta25702 = meta25702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25703,meta25702__$1){
var self__ = this;
var _25703__$1 = this;
return (new cljs.core.async.t_cljs$core$async25701(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25702__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25703){
var self__ = this;
var _25703__$1 = this;
return self__.meta25702;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25701.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25701.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25702","meta25702",-652480266,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25701";

cljs.core.async.t_cljs$core$async25701.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25701");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25701 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25701(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25702){
return (new cljs.core.async.t_cljs$core$async25701(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25702));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25701(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24151__auto___25864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___25864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___25864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25801){
var state_val_25802 = (state_25801[(1)]);
if((state_val_25802 === (7))){
var inst_25719 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25803_25865 = state_25801__$1;
(statearr_25803_25865[(2)] = inst_25719);

(statearr_25803_25865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (20))){
var inst_25731 = (state_25801[(7)]);
var state_25801__$1 = state_25801;
var statearr_25804_25866 = state_25801__$1;
(statearr_25804_25866[(2)] = inst_25731);

(statearr_25804_25866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (27))){
var state_25801__$1 = state_25801;
var statearr_25805_25867 = state_25801__$1;
(statearr_25805_25867[(2)] = null);

(statearr_25805_25867[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (1))){
var inst_25707 = (state_25801[(8)]);
var inst_25707__$1 = calc_state.call(null);
var inst_25709 = (inst_25707__$1 == null);
var inst_25710 = cljs.core.not.call(null,inst_25709);
var state_25801__$1 = (function (){var statearr_25806 = state_25801;
(statearr_25806[(8)] = inst_25707__$1);

return statearr_25806;
})();
if(inst_25710){
var statearr_25807_25868 = state_25801__$1;
(statearr_25807_25868[(1)] = (2));

} else {
var statearr_25808_25869 = state_25801__$1;
(statearr_25808_25869[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (24))){
var inst_25761 = (state_25801[(9)]);
var inst_25754 = (state_25801[(10)]);
var inst_25775 = (state_25801[(11)]);
var inst_25775__$1 = inst_25754.call(null,inst_25761);
var state_25801__$1 = (function (){var statearr_25809 = state_25801;
(statearr_25809[(11)] = inst_25775__$1);

return statearr_25809;
})();
if(cljs.core.truth_(inst_25775__$1)){
var statearr_25810_25870 = state_25801__$1;
(statearr_25810_25870[(1)] = (29));

} else {
var statearr_25811_25871 = state_25801__$1;
(statearr_25811_25871[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (4))){
var inst_25722 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
if(cljs.core.truth_(inst_25722)){
var statearr_25812_25872 = state_25801__$1;
(statearr_25812_25872[(1)] = (8));

} else {
var statearr_25813_25873 = state_25801__$1;
(statearr_25813_25873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (15))){
var inst_25748 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
if(cljs.core.truth_(inst_25748)){
var statearr_25814_25874 = state_25801__$1;
(statearr_25814_25874[(1)] = (19));

} else {
var statearr_25815_25875 = state_25801__$1;
(statearr_25815_25875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (21))){
var inst_25753 = (state_25801[(12)]);
var inst_25753__$1 = (state_25801[(2)]);
var inst_25754 = cljs.core.get.call(null,inst_25753__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25755 = cljs.core.get.call(null,inst_25753__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25756 = cljs.core.get.call(null,inst_25753__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25801__$1 = (function (){var statearr_25816 = state_25801;
(statearr_25816[(13)] = inst_25755);

(statearr_25816[(12)] = inst_25753__$1);

(statearr_25816[(10)] = inst_25754);

return statearr_25816;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25801__$1,(22),inst_25756);
} else {
if((state_val_25802 === (31))){
var inst_25783 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
if(cljs.core.truth_(inst_25783)){
var statearr_25817_25876 = state_25801__$1;
(statearr_25817_25876[(1)] = (32));

} else {
var statearr_25818_25877 = state_25801__$1;
(statearr_25818_25877[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (32))){
var inst_25760 = (state_25801[(14)]);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25801__$1,(35),out,inst_25760);
} else {
if((state_val_25802 === (33))){
var inst_25753 = (state_25801[(12)]);
var inst_25731 = inst_25753;
var state_25801__$1 = (function (){var statearr_25819 = state_25801;
(statearr_25819[(7)] = inst_25731);

return statearr_25819;
})();
var statearr_25820_25878 = state_25801__$1;
(statearr_25820_25878[(2)] = null);

(statearr_25820_25878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (13))){
var inst_25731 = (state_25801[(7)]);
var inst_25738 = inst_25731.cljs$lang$protocol_mask$partition0$;
var inst_25739 = (inst_25738 & (64));
var inst_25740 = inst_25731.cljs$core$ISeq$;
var inst_25741 = (inst_25739) || (inst_25740);
var state_25801__$1 = state_25801;
if(cljs.core.truth_(inst_25741)){
var statearr_25821_25879 = state_25801__$1;
(statearr_25821_25879[(1)] = (16));

} else {
var statearr_25822_25880 = state_25801__$1;
(statearr_25822_25880[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (22))){
var inst_25761 = (state_25801[(9)]);
var inst_25760 = (state_25801[(14)]);
var inst_25759 = (state_25801[(2)]);
var inst_25760__$1 = cljs.core.nth.call(null,inst_25759,(0),null);
var inst_25761__$1 = cljs.core.nth.call(null,inst_25759,(1),null);
var inst_25762 = (inst_25760__$1 == null);
var inst_25763 = cljs.core._EQ_.call(null,inst_25761__$1,change);
var inst_25764 = (inst_25762) || (inst_25763);
var state_25801__$1 = (function (){var statearr_25823 = state_25801;
(statearr_25823[(9)] = inst_25761__$1);

(statearr_25823[(14)] = inst_25760__$1);

return statearr_25823;
})();
if(cljs.core.truth_(inst_25764)){
var statearr_25824_25881 = state_25801__$1;
(statearr_25824_25881[(1)] = (23));

} else {
var statearr_25825_25882 = state_25801__$1;
(statearr_25825_25882[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (36))){
var inst_25753 = (state_25801[(12)]);
var inst_25731 = inst_25753;
var state_25801__$1 = (function (){var statearr_25826 = state_25801;
(statearr_25826[(7)] = inst_25731);

return statearr_25826;
})();
var statearr_25827_25883 = state_25801__$1;
(statearr_25827_25883[(2)] = null);

(statearr_25827_25883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (29))){
var inst_25775 = (state_25801[(11)]);
var state_25801__$1 = state_25801;
var statearr_25828_25884 = state_25801__$1;
(statearr_25828_25884[(2)] = inst_25775);

(statearr_25828_25884[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (6))){
var state_25801__$1 = state_25801;
var statearr_25829_25885 = state_25801__$1;
(statearr_25829_25885[(2)] = false);

(statearr_25829_25885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (28))){
var inst_25771 = (state_25801[(2)]);
var inst_25772 = calc_state.call(null);
var inst_25731 = inst_25772;
var state_25801__$1 = (function (){var statearr_25830 = state_25801;
(statearr_25830[(7)] = inst_25731);

(statearr_25830[(15)] = inst_25771);

return statearr_25830;
})();
var statearr_25831_25886 = state_25801__$1;
(statearr_25831_25886[(2)] = null);

(statearr_25831_25886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (25))){
var inst_25797 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25832_25887 = state_25801__$1;
(statearr_25832_25887[(2)] = inst_25797);

(statearr_25832_25887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (34))){
var inst_25795 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25833_25888 = state_25801__$1;
(statearr_25833_25888[(2)] = inst_25795);

(statearr_25833_25888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (17))){
var state_25801__$1 = state_25801;
var statearr_25834_25889 = state_25801__$1;
(statearr_25834_25889[(2)] = false);

(statearr_25834_25889[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (3))){
var state_25801__$1 = state_25801;
var statearr_25835_25890 = state_25801__$1;
(statearr_25835_25890[(2)] = false);

(statearr_25835_25890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (12))){
var inst_25799 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25801__$1,inst_25799);
} else {
if((state_val_25802 === (2))){
var inst_25707 = (state_25801[(8)]);
var inst_25712 = inst_25707.cljs$lang$protocol_mask$partition0$;
var inst_25713 = (inst_25712 & (64));
var inst_25714 = inst_25707.cljs$core$ISeq$;
var inst_25715 = (inst_25713) || (inst_25714);
var state_25801__$1 = state_25801;
if(cljs.core.truth_(inst_25715)){
var statearr_25836_25891 = state_25801__$1;
(statearr_25836_25891[(1)] = (5));

} else {
var statearr_25837_25892 = state_25801__$1;
(statearr_25837_25892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (23))){
var inst_25760 = (state_25801[(14)]);
var inst_25766 = (inst_25760 == null);
var state_25801__$1 = state_25801;
if(cljs.core.truth_(inst_25766)){
var statearr_25838_25893 = state_25801__$1;
(statearr_25838_25893[(1)] = (26));

} else {
var statearr_25839_25894 = state_25801__$1;
(statearr_25839_25894[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (35))){
var inst_25786 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
if(cljs.core.truth_(inst_25786)){
var statearr_25840_25895 = state_25801__$1;
(statearr_25840_25895[(1)] = (36));

} else {
var statearr_25841_25896 = state_25801__$1;
(statearr_25841_25896[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (19))){
var inst_25731 = (state_25801[(7)]);
var inst_25750 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25731);
var state_25801__$1 = state_25801;
var statearr_25842_25897 = state_25801__$1;
(statearr_25842_25897[(2)] = inst_25750);

(statearr_25842_25897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (11))){
var inst_25731 = (state_25801[(7)]);
var inst_25735 = (inst_25731 == null);
var inst_25736 = cljs.core.not.call(null,inst_25735);
var state_25801__$1 = state_25801;
if(inst_25736){
var statearr_25843_25898 = state_25801__$1;
(statearr_25843_25898[(1)] = (13));

} else {
var statearr_25844_25899 = state_25801__$1;
(statearr_25844_25899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (9))){
var inst_25707 = (state_25801[(8)]);
var state_25801__$1 = state_25801;
var statearr_25845_25900 = state_25801__$1;
(statearr_25845_25900[(2)] = inst_25707);

(statearr_25845_25900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (5))){
var state_25801__$1 = state_25801;
var statearr_25846_25901 = state_25801__$1;
(statearr_25846_25901[(2)] = true);

(statearr_25846_25901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (14))){
var state_25801__$1 = state_25801;
var statearr_25847_25902 = state_25801__$1;
(statearr_25847_25902[(2)] = false);

(statearr_25847_25902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (26))){
var inst_25761 = (state_25801[(9)]);
var inst_25768 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25761);
var state_25801__$1 = state_25801;
var statearr_25848_25903 = state_25801__$1;
(statearr_25848_25903[(2)] = inst_25768);

(statearr_25848_25903[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (16))){
var state_25801__$1 = state_25801;
var statearr_25849_25904 = state_25801__$1;
(statearr_25849_25904[(2)] = true);

(statearr_25849_25904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (38))){
var inst_25791 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25850_25905 = state_25801__$1;
(statearr_25850_25905[(2)] = inst_25791);

(statearr_25850_25905[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (30))){
var inst_25761 = (state_25801[(9)]);
var inst_25755 = (state_25801[(13)]);
var inst_25754 = (state_25801[(10)]);
var inst_25778 = cljs.core.empty_QMARK_.call(null,inst_25754);
var inst_25779 = inst_25755.call(null,inst_25761);
var inst_25780 = cljs.core.not.call(null,inst_25779);
var inst_25781 = (inst_25778) && (inst_25780);
var state_25801__$1 = state_25801;
var statearr_25851_25906 = state_25801__$1;
(statearr_25851_25906[(2)] = inst_25781);

(statearr_25851_25906[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (10))){
var inst_25707 = (state_25801[(8)]);
var inst_25727 = (state_25801[(2)]);
var inst_25728 = cljs.core.get.call(null,inst_25727,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25729 = cljs.core.get.call(null,inst_25727,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25730 = cljs.core.get.call(null,inst_25727,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25731 = inst_25707;
var state_25801__$1 = (function (){var statearr_25852 = state_25801;
(statearr_25852[(16)] = inst_25728);

(statearr_25852[(7)] = inst_25731);

(statearr_25852[(17)] = inst_25730);

(statearr_25852[(18)] = inst_25729);

return statearr_25852;
})();
var statearr_25853_25907 = state_25801__$1;
(statearr_25853_25907[(2)] = null);

(statearr_25853_25907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (18))){
var inst_25745 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25854_25908 = state_25801__$1;
(statearr_25854_25908[(2)] = inst_25745);

(statearr_25854_25908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (37))){
var state_25801__$1 = state_25801;
var statearr_25855_25909 = state_25801__$1;
(statearr_25855_25909[(2)] = null);

(statearr_25855_25909[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (8))){
var inst_25707 = (state_25801[(8)]);
var inst_25724 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25707);
var state_25801__$1 = state_25801;
var statearr_25856_25910 = state_25801__$1;
(statearr_25856_25910[(2)] = inst_25724);

(statearr_25856_25910[(1)] = (10));


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
});})(c__24151__auto___25864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24039__auto__,c__24151__auto___25864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24040__auto__ = null;
var cljs$core$async$mix_$_state_machine__24040__auto____0 = (function (){
var statearr_25860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25860[(0)] = cljs$core$async$mix_$_state_machine__24040__auto__);

(statearr_25860[(1)] = (1));

return statearr_25860;
});
var cljs$core$async$mix_$_state_machine__24040__auto____1 = (function (state_25801){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_25801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e25861){if((e25861 instanceof Object)){
var ex__24043__auto__ = e25861;
var statearr_25862_25911 = state_25801;
(statearr_25862_25911[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25912 = state_25801;
state_25801 = G__25912;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24040__auto__ = function(state_25801){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24040__auto____1.call(this,state_25801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24040__auto____0;
cljs$core$async$mix_$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24040__auto____1;
return cljs$core$async$mix_$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___25864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24153__auto__ = (function (){var statearr_25863 = f__24152__auto__.call(null);
(statearr_25863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___25864);

return statearr_25863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___25864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25913 = [];
var len__17809__auto___25916 = arguments.length;
var i__17810__auto___25917 = (0);
while(true){
if((i__17810__auto___25917 < len__17809__auto___25916)){
args25913.push((arguments[i__17810__auto___25917]));

var G__25918 = (i__17810__auto___25917 + (1));
i__17810__auto___25917 = G__25918;
continue;
} else {
}
break;
}

var G__25915 = args25913.length;
switch (G__25915) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25913.length)].join('')));

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
var args25921 = [];
var len__17809__auto___26046 = arguments.length;
var i__17810__auto___26047 = (0);
while(true){
if((i__17810__auto___26047 < len__17809__auto___26046)){
args25921.push((arguments[i__17810__auto___26047]));

var G__26048 = (i__17810__auto___26047 + (1));
i__17810__auto___26047 = G__26048;
continue;
} else {
}
break;
}

var G__25923 = args25921.length;
switch (G__25923) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25921.length)].join('')));

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
return (function (p1__25920_SHARP_){
if(cljs.core.truth_(p1__25920_SHARP_.call(null,topic))){
return p1__25920_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25920_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25924 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25925){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25925 = meta25925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25926,meta25925__$1){
var self__ = this;
var _25926__$1 = this;
return (new cljs.core.async.t_cljs$core$async25924(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25925__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25926){
var self__ = this;
var _25926__$1 = this;
return self__.meta25925;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25924.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25924.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25924.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25924.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25924.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25925","meta25925",-2147350579,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25924";

cljs.core.async.t_cljs$core$async25924.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25924");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25924 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25924(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25925){
return (new cljs.core.async.t_cljs$core$async25924(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25925));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25924(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24151__auto___26050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___26050,mults,ensure_mult,p){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___26050,mults,ensure_mult,p){
return (function (state_25998){
var state_val_25999 = (state_25998[(1)]);
if((state_val_25999 === (7))){
var inst_25994 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26000_26051 = state_25998__$1;
(statearr_26000_26051[(2)] = inst_25994);

(statearr_26000_26051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (20))){
var state_25998__$1 = state_25998;
var statearr_26001_26052 = state_25998__$1;
(statearr_26001_26052[(2)] = null);

(statearr_26001_26052[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (1))){
var state_25998__$1 = state_25998;
var statearr_26002_26053 = state_25998__$1;
(statearr_26002_26053[(2)] = null);

(statearr_26002_26053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (24))){
var inst_25977 = (state_25998[(7)]);
var inst_25986 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25977);
var state_25998__$1 = state_25998;
var statearr_26003_26054 = state_25998__$1;
(statearr_26003_26054[(2)] = inst_25986);

(statearr_26003_26054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (4))){
var inst_25929 = (state_25998[(8)]);
var inst_25929__$1 = (state_25998[(2)]);
var inst_25930 = (inst_25929__$1 == null);
var state_25998__$1 = (function (){var statearr_26004 = state_25998;
(statearr_26004[(8)] = inst_25929__$1);

return statearr_26004;
})();
if(cljs.core.truth_(inst_25930)){
var statearr_26005_26055 = state_25998__$1;
(statearr_26005_26055[(1)] = (5));

} else {
var statearr_26006_26056 = state_25998__$1;
(statearr_26006_26056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (15))){
var inst_25971 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26007_26057 = state_25998__$1;
(statearr_26007_26057[(2)] = inst_25971);

(statearr_26007_26057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (21))){
var inst_25991 = (state_25998[(2)]);
var state_25998__$1 = (function (){var statearr_26008 = state_25998;
(statearr_26008[(9)] = inst_25991);

return statearr_26008;
})();
var statearr_26009_26058 = state_25998__$1;
(statearr_26009_26058[(2)] = null);

(statearr_26009_26058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (13))){
var inst_25953 = (state_25998[(10)]);
var inst_25955 = cljs.core.chunked_seq_QMARK_.call(null,inst_25953);
var state_25998__$1 = state_25998;
if(inst_25955){
var statearr_26010_26059 = state_25998__$1;
(statearr_26010_26059[(1)] = (16));

} else {
var statearr_26011_26060 = state_25998__$1;
(statearr_26011_26060[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (22))){
var inst_25983 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
if(cljs.core.truth_(inst_25983)){
var statearr_26012_26061 = state_25998__$1;
(statearr_26012_26061[(1)] = (23));

} else {
var statearr_26013_26062 = state_25998__$1;
(statearr_26013_26062[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (6))){
var inst_25929 = (state_25998[(8)]);
var inst_25979 = (state_25998[(11)]);
var inst_25977 = (state_25998[(7)]);
var inst_25977__$1 = topic_fn.call(null,inst_25929);
var inst_25978 = cljs.core.deref.call(null,mults);
var inst_25979__$1 = cljs.core.get.call(null,inst_25978,inst_25977__$1);
var state_25998__$1 = (function (){var statearr_26014 = state_25998;
(statearr_26014[(11)] = inst_25979__$1);

(statearr_26014[(7)] = inst_25977__$1);

return statearr_26014;
})();
if(cljs.core.truth_(inst_25979__$1)){
var statearr_26015_26063 = state_25998__$1;
(statearr_26015_26063[(1)] = (19));

} else {
var statearr_26016_26064 = state_25998__$1;
(statearr_26016_26064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (25))){
var inst_25988 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26017_26065 = state_25998__$1;
(statearr_26017_26065[(2)] = inst_25988);

(statearr_26017_26065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (17))){
var inst_25953 = (state_25998[(10)]);
var inst_25962 = cljs.core.first.call(null,inst_25953);
var inst_25963 = cljs.core.async.muxch_STAR_.call(null,inst_25962);
var inst_25964 = cljs.core.async.close_BANG_.call(null,inst_25963);
var inst_25965 = cljs.core.next.call(null,inst_25953);
var inst_25939 = inst_25965;
var inst_25940 = null;
var inst_25941 = (0);
var inst_25942 = (0);
var state_25998__$1 = (function (){var statearr_26018 = state_25998;
(statearr_26018[(12)] = inst_25941);

(statearr_26018[(13)] = inst_25964);

(statearr_26018[(14)] = inst_25942);

(statearr_26018[(15)] = inst_25940);

(statearr_26018[(16)] = inst_25939);

return statearr_26018;
})();
var statearr_26019_26066 = state_25998__$1;
(statearr_26019_26066[(2)] = null);

(statearr_26019_26066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (3))){
var inst_25996 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25998__$1,inst_25996);
} else {
if((state_val_25999 === (12))){
var inst_25973 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26020_26067 = state_25998__$1;
(statearr_26020_26067[(2)] = inst_25973);

(statearr_26020_26067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (2))){
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25998__$1,(4),ch);
} else {
if((state_val_25999 === (23))){
var state_25998__$1 = state_25998;
var statearr_26021_26068 = state_25998__$1;
(statearr_26021_26068[(2)] = null);

(statearr_26021_26068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (19))){
var inst_25929 = (state_25998[(8)]);
var inst_25979 = (state_25998[(11)]);
var inst_25981 = cljs.core.async.muxch_STAR_.call(null,inst_25979);
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25998__$1,(22),inst_25981,inst_25929);
} else {
if((state_val_25999 === (11))){
var inst_25939 = (state_25998[(16)]);
var inst_25953 = (state_25998[(10)]);
var inst_25953__$1 = cljs.core.seq.call(null,inst_25939);
var state_25998__$1 = (function (){var statearr_26022 = state_25998;
(statearr_26022[(10)] = inst_25953__$1);

return statearr_26022;
})();
if(inst_25953__$1){
var statearr_26023_26069 = state_25998__$1;
(statearr_26023_26069[(1)] = (13));

} else {
var statearr_26024_26070 = state_25998__$1;
(statearr_26024_26070[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (9))){
var inst_25975 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26025_26071 = state_25998__$1;
(statearr_26025_26071[(2)] = inst_25975);

(statearr_26025_26071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (5))){
var inst_25936 = cljs.core.deref.call(null,mults);
var inst_25937 = cljs.core.vals.call(null,inst_25936);
var inst_25938 = cljs.core.seq.call(null,inst_25937);
var inst_25939 = inst_25938;
var inst_25940 = null;
var inst_25941 = (0);
var inst_25942 = (0);
var state_25998__$1 = (function (){var statearr_26026 = state_25998;
(statearr_26026[(12)] = inst_25941);

(statearr_26026[(14)] = inst_25942);

(statearr_26026[(15)] = inst_25940);

(statearr_26026[(16)] = inst_25939);

return statearr_26026;
})();
var statearr_26027_26072 = state_25998__$1;
(statearr_26027_26072[(2)] = null);

(statearr_26027_26072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (14))){
var state_25998__$1 = state_25998;
var statearr_26031_26073 = state_25998__$1;
(statearr_26031_26073[(2)] = null);

(statearr_26031_26073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (16))){
var inst_25953 = (state_25998[(10)]);
var inst_25957 = cljs.core.chunk_first.call(null,inst_25953);
var inst_25958 = cljs.core.chunk_rest.call(null,inst_25953);
var inst_25959 = cljs.core.count.call(null,inst_25957);
var inst_25939 = inst_25958;
var inst_25940 = inst_25957;
var inst_25941 = inst_25959;
var inst_25942 = (0);
var state_25998__$1 = (function (){var statearr_26032 = state_25998;
(statearr_26032[(12)] = inst_25941);

(statearr_26032[(14)] = inst_25942);

(statearr_26032[(15)] = inst_25940);

(statearr_26032[(16)] = inst_25939);

return statearr_26032;
})();
var statearr_26033_26074 = state_25998__$1;
(statearr_26033_26074[(2)] = null);

(statearr_26033_26074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (10))){
var inst_25941 = (state_25998[(12)]);
var inst_25942 = (state_25998[(14)]);
var inst_25940 = (state_25998[(15)]);
var inst_25939 = (state_25998[(16)]);
var inst_25947 = cljs.core._nth.call(null,inst_25940,inst_25942);
var inst_25948 = cljs.core.async.muxch_STAR_.call(null,inst_25947);
var inst_25949 = cljs.core.async.close_BANG_.call(null,inst_25948);
var inst_25950 = (inst_25942 + (1));
var tmp26028 = inst_25941;
var tmp26029 = inst_25940;
var tmp26030 = inst_25939;
var inst_25939__$1 = tmp26030;
var inst_25940__$1 = tmp26029;
var inst_25941__$1 = tmp26028;
var inst_25942__$1 = inst_25950;
var state_25998__$1 = (function (){var statearr_26034 = state_25998;
(statearr_26034[(12)] = inst_25941__$1);

(statearr_26034[(14)] = inst_25942__$1);

(statearr_26034[(15)] = inst_25940__$1);

(statearr_26034[(16)] = inst_25939__$1);

(statearr_26034[(17)] = inst_25949);

return statearr_26034;
})();
var statearr_26035_26075 = state_25998__$1;
(statearr_26035_26075[(2)] = null);

(statearr_26035_26075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (18))){
var inst_25968 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
var statearr_26036_26076 = state_25998__$1;
(statearr_26036_26076[(2)] = inst_25968);

(statearr_26036_26076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (8))){
var inst_25941 = (state_25998[(12)]);
var inst_25942 = (state_25998[(14)]);
var inst_25944 = (inst_25942 < inst_25941);
var inst_25945 = inst_25944;
var state_25998__$1 = state_25998;
if(cljs.core.truth_(inst_25945)){
var statearr_26037_26077 = state_25998__$1;
(statearr_26037_26077[(1)] = (10));

} else {
var statearr_26038_26078 = state_25998__$1;
(statearr_26038_26078[(1)] = (11));

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
});})(c__24151__auto___26050,mults,ensure_mult,p))
;
return ((function (switch__24039__auto__,c__24151__auto___26050,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24040__auto__ = null;
var cljs$core$async$state_machine__24040__auto____0 = (function (){
var statearr_26042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26042[(0)] = cljs$core$async$state_machine__24040__auto__);

(statearr_26042[(1)] = (1));

return statearr_26042;
});
var cljs$core$async$state_machine__24040__auto____1 = (function (state_25998){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_25998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e26043){if((e26043 instanceof Object)){
var ex__24043__auto__ = e26043;
var statearr_26044_26079 = state_25998;
(statearr_26044_26079[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26080 = state_25998;
state_25998 = G__26080;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$state_machine__24040__auto__ = function(state_25998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24040__auto____1.call(this,state_25998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24040__auto____0;
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24040__auto____1;
return cljs$core$async$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___26050,mults,ensure_mult,p))
})();
var state__24153__auto__ = (function (){var statearr_26045 = f__24152__auto__.call(null);
(statearr_26045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___26050);

return statearr_26045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___26050,mults,ensure_mult,p))
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
var args26081 = [];
var len__17809__auto___26084 = arguments.length;
var i__17810__auto___26085 = (0);
while(true){
if((i__17810__auto___26085 < len__17809__auto___26084)){
args26081.push((arguments[i__17810__auto___26085]));

var G__26086 = (i__17810__auto___26085 + (1));
i__17810__auto___26085 = G__26086;
continue;
} else {
}
break;
}

var G__26083 = args26081.length;
switch (G__26083) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26081.length)].join('')));

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
var args26088 = [];
var len__17809__auto___26091 = arguments.length;
var i__17810__auto___26092 = (0);
while(true){
if((i__17810__auto___26092 < len__17809__auto___26091)){
args26088.push((arguments[i__17810__auto___26092]));

var G__26093 = (i__17810__auto___26092 + (1));
i__17810__auto___26092 = G__26093;
continue;
} else {
}
break;
}

var G__26090 = args26088.length;
switch (G__26090) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26088.length)].join('')));

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
var args26095 = [];
var len__17809__auto___26166 = arguments.length;
var i__17810__auto___26167 = (0);
while(true){
if((i__17810__auto___26167 < len__17809__auto___26166)){
args26095.push((arguments[i__17810__auto___26167]));

var G__26168 = (i__17810__auto___26167 + (1));
i__17810__auto___26167 = G__26168;
continue;
} else {
}
break;
}

var G__26097 = args26095.length;
switch (G__26097) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26095.length)].join('')));

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
var c__24151__auto___26170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___26170,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___26170,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26136){
var state_val_26137 = (state_26136[(1)]);
if((state_val_26137 === (7))){
var state_26136__$1 = state_26136;
var statearr_26138_26171 = state_26136__$1;
(statearr_26138_26171[(2)] = null);

(statearr_26138_26171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (1))){
var state_26136__$1 = state_26136;
var statearr_26139_26172 = state_26136__$1;
(statearr_26139_26172[(2)] = null);

(statearr_26139_26172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (4))){
var inst_26100 = (state_26136[(7)]);
var inst_26102 = (inst_26100 < cnt);
var state_26136__$1 = state_26136;
if(cljs.core.truth_(inst_26102)){
var statearr_26140_26173 = state_26136__$1;
(statearr_26140_26173[(1)] = (6));

} else {
var statearr_26141_26174 = state_26136__$1;
(statearr_26141_26174[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (15))){
var inst_26132 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26142_26175 = state_26136__$1;
(statearr_26142_26175[(2)] = inst_26132);

(statearr_26142_26175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (13))){
var inst_26125 = cljs.core.async.close_BANG_.call(null,out);
var state_26136__$1 = state_26136;
var statearr_26143_26176 = state_26136__$1;
(statearr_26143_26176[(2)] = inst_26125);

(statearr_26143_26176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (6))){
var state_26136__$1 = state_26136;
var statearr_26144_26177 = state_26136__$1;
(statearr_26144_26177[(2)] = null);

(statearr_26144_26177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (3))){
var inst_26134 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26136__$1,inst_26134);
} else {
if((state_val_26137 === (12))){
var inst_26122 = (state_26136[(8)]);
var inst_26122__$1 = (state_26136[(2)]);
var inst_26123 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26122__$1);
var state_26136__$1 = (function (){var statearr_26145 = state_26136;
(statearr_26145[(8)] = inst_26122__$1);

return statearr_26145;
})();
if(cljs.core.truth_(inst_26123)){
var statearr_26146_26178 = state_26136__$1;
(statearr_26146_26178[(1)] = (13));

} else {
var statearr_26147_26179 = state_26136__$1;
(statearr_26147_26179[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (2))){
var inst_26099 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26100 = (0);
var state_26136__$1 = (function (){var statearr_26148 = state_26136;
(statearr_26148[(9)] = inst_26099);

(statearr_26148[(7)] = inst_26100);

return statearr_26148;
})();
var statearr_26149_26180 = state_26136__$1;
(statearr_26149_26180[(2)] = null);

(statearr_26149_26180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (11))){
var inst_26100 = (state_26136[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26136,(10),Object,null,(9));
var inst_26109 = chs__$1.call(null,inst_26100);
var inst_26110 = done.call(null,inst_26100);
var inst_26111 = cljs.core.async.take_BANG_.call(null,inst_26109,inst_26110);
var state_26136__$1 = state_26136;
var statearr_26150_26181 = state_26136__$1;
(statearr_26150_26181[(2)] = inst_26111);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26136__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (9))){
var inst_26100 = (state_26136[(7)]);
var inst_26113 = (state_26136[(2)]);
var inst_26114 = (inst_26100 + (1));
var inst_26100__$1 = inst_26114;
var state_26136__$1 = (function (){var statearr_26151 = state_26136;
(statearr_26151[(10)] = inst_26113);

(statearr_26151[(7)] = inst_26100__$1);

return statearr_26151;
})();
var statearr_26152_26182 = state_26136__$1;
(statearr_26152_26182[(2)] = null);

(statearr_26152_26182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (5))){
var inst_26120 = (state_26136[(2)]);
var state_26136__$1 = (function (){var statearr_26153 = state_26136;
(statearr_26153[(11)] = inst_26120);

return statearr_26153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(12),dchan);
} else {
if((state_val_26137 === (14))){
var inst_26122 = (state_26136[(8)]);
var inst_26127 = cljs.core.apply.call(null,f,inst_26122);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26136__$1,(16),out,inst_26127);
} else {
if((state_val_26137 === (16))){
var inst_26129 = (state_26136[(2)]);
var state_26136__$1 = (function (){var statearr_26154 = state_26136;
(statearr_26154[(12)] = inst_26129);

return statearr_26154;
})();
var statearr_26155_26183 = state_26136__$1;
(statearr_26155_26183[(2)] = null);

(statearr_26155_26183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (10))){
var inst_26104 = (state_26136[(2)]);
var inst_26105 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26136__$1 = (function (){var statearr_26156 = state_26136;
(statearr_26156[(13)] = inst_26104);

return statearr_26156;
})();
var statearr_26157_26184 = state_26136__$1;
(statearr_26157_26184[(2)] = inst_26105);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26136__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (8))){
var inst_26118 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26158_26185 = state_26136__$1;
(statearr_26158_26185[(2)] = inst_26118);

(statearr_26158_26185[(1)] = (5));


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
});})(c__24151__auto___26170,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24039__auto__,c__24151__auto___26170,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24040__auto__ = null;
var cljs$core$async$state_machine__24040__auto____0 = (function (){
var statearr_26162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26162[(0)] = cljs$core$async$state_machine__24040__auto__);

(statearr_26162[(1)] = (1));

return statearr_26162;
});
var cljs$core$async$state_machine__24040__auto____1 = (function (state_26136){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_26136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e26163){if((e26163 instanceof Object)){
var ex__24043__auto__ = e26163;
var statearr_26164_26186 = state_26136;
(statearr_26164_26186[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26187 = state_26136;
state_26136 = G__26187;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$state_machine__24040__auto__ = function(state_26136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24040__auto____1.call(this,state_26136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24040__auto____0;
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24040__auto____1;
return cljs$core$async$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___26170,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24153__auto__ = (function (){var statearr_26165 = f__24152__auto__.call(null);
(statearr_26165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___26170);

return statearr_26165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___26170,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26189 = [];
var len__17809__auto___26245 = arguments.length;
var i__17810__auto___26246 = (0);
while(true){
if((i__17810__auto___26246 < len__17809__auto___26245)){
args26189.push((arguments[i__17810__auto___26246]));

var G__26247 = (i__17810__auto___26246 + (1));
i__17810__auto___26246 = G__26247;
continue;
} else {
}
break;
}

var G__26191 = args26189.length;
switch (G__26191) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26189.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24151__auto___26249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___26249,out){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___26249,out){
return (function (state_26221){
var state_val_26222 = (state_26221[(1)]);
if((state_val_26222 === (7))){
var inst_26200 = (state_26221[(7)]);
var inst_26201 = (state_26221[(8)]);
var inst_26200__$1 = (state_26221[(2)]);
var inst_26201__$1 = cljs.core.nth.call(null,inst_26200__$1,(0),null);
var inst_26202 = cljs.core.nth.call(null,inst_26200__$1,(1),null);
var inst_26203 = (inst_26201__$1 == null);
var state_26221__$1 = (function (){var statearr_26223 = state_26221;
(statearr_26223[(9)] = inst_26202);

(statearr_26223[(7)] = inst_26200__$1);

(statearr_26223[(8)] = inst_26201__$1);

return statearr_26223;
})();
if(cljs.core.truth_(inst_26203)){
var statearr_26224_26250 = state_26221__$1;
(statearr_26224_26250[(1)] = (8));

} else {
var statearr_26225_26251 = state_26221__$1;
(statearr_26225_26251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (1))){
var inst_26192 = cljs.core.vec.call(null,chs);
var inst_26193 = inst_26192;
var state_26221__$1 = (function (){var statearr_26226 = state_26221;
(statearr_26226[(10)] = inst_26193);

return statearr_26226;
})();
var statearr_26227_26252 = state_26221__$1;
(statearr_26227_26252[(2)] = null);

(statearr_26227_26252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (4))){
var inst_26193 = (state_26221[(10)]);
var state_26221__$1 = state_26221;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26221__$1,(7),inst_26193);
} else {
if((state_val_26222 === (6))){
var inst_26217 = (state_26221[(2)]);
var state_26221__$1 = state_26221;
var statearr_26228_26253 = state_26221__$1;
(statearr_26228_26253[(2)] = inst_26217);

(statearr_26228_26253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (3))){
var inst_26219 = (state_26221[(2)]);
var state_26221__$1 = state_26221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26221__$1,inst_26219);
} else {
if((state_val_26222 === (2))){
var inst_26193 = (state_26221[(10)]);
var inst_26195 = cljs.core.count.call(null,inst_26193);
var inst_26196 = (inst_26195 > (0));
var state_26221__$1 = state_26221;
if(cljs.core.truth_(inst_26196)){
var statearr_26230_26254 = state_26221__$1;
(statearr_26230_26254[(1)] = (4));

} else {
var statearr_26231_26255 = state_26221__$1;
(statearr_26231_26255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (11))){
var inst_26193 = (state_26221[(10)]);
var inst_26210 = (state_26221[(2)]);
var tmp26229 = inst_26193;
var inst_26193__$1 = tmp26229;
var state_26221__$1 = (function (){var statearr_26232 = state_26221;
(statearr_26232[(10)] = inst_26193__$1);

(statearr_26232[(11)] = inst_26210);

return statearr_26232;
})();
var statearr_26233_26256 = state_26221__$1;
(statearr_26233_26256[(2)] = null);

(statearr_26233_26256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (9))){
var inst_26201 = (state_26221[(8)]);
var state_26221__$1 = state_26221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26221__$1,(11),out,inst_26201);
} else {
if((state_val_26222 === (5))){
var inst_26215 = cljs.core.async.close_BANG_.call(null,out);
var state_26221__$1 = state_26221;
var statearr_26234_26257 = state_26221__$1;
(statearr_26234_26257[(2)] = inst_26215);

(statearr_26234_26257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (10))){
var inst_26213 = (state_26221[(2)]);
var state_26221__$1 = state_26221;
var statearr_26235_26258 = state_26221__$1;
(statearr_26235_26258[(2)] = inst_26213);

(statearr_26235_26258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (8))){
var inst_26202 = (state_26221[(9)]);
var inst_26193 = (state_26221[(10)]);
var inst_26200 = (state_26221[(7)]);
var inst_26201 = (state_26221[(8)]);
var inst_26205 = (function (){var cs = inst_26193;
var vec__26198 = inst_26200;
var v = inst_26201;
var c = inst_26202;
return ((function (cs,vec__26198,v,c,inst_26202,inst_26193,inst_26200,inst_26201,state_val_26222,c__24151__auto___26249,out){
return (function (p1__26188_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26188_SHARP_);
});
;})(cs,vec__26198,v,c,inst_26202,inst_26193,inst_26200,inst_26201,state_val_26222,c__24151__auto___26249,out))
})();
var inst_26206 = cljs.core.filterv.call(null,inst_26205,inst_26193);
var inst_26193__$1 = inst_26206;
var state_26221__$1 = (function (){var statearr_26236 = state_26221;
(statearr_26236[(10)] = inst_26193__$1);

return statearr_26236;
})();
var statearr_26237_26259 = state_26221__$1;
(statearr_26237_26259[(2)] = null);

(statearr_26237_26259[(1)] = (2));


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
});})(c__24151__auto___26249,out))
;
return ((function (switch__24039__auto__,c__24151__auto___26249,out){
return (function() {
var cljs$core$async$state_machine__24040__auto__ = null;
var cljs$core$async$state_machine__24040__auto____0 = (function (){
var statearr_26241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26241[(0)] = cljs$core$async$state_machine__24040__auto__);

(statearr_26241[(1)] = (1));

return statearr_26241;
});
var cljs$core$async$state_machine__24040__auto____1 = (function (state_26221){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_26221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e26242){if((e26242 instanceof Object)){
var ex__24043__auto__ = e26242;
var statearr_26243_26260 = state_26221;
(statearr_26243_26260[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26261 = state_26221;
state_26221 = G__26261;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$state_machine__24040__auto__ = function(state_26221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24040__auto____1.call(this,state_26221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24040__auto____0;
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24040__auto____1;
return cljs$core$async$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___26249,out))
})();
var state__24153__auto__ = (function (){var statearr_26244 = f__24152__auto__.call(null);
(statearr_26244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___26249);

return statearr_26244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___26249,out))
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
var args26262 = [];
var len__17809__auto___26311 = arguments.length;
var i__17810__auto___26312 = (0);
while(true){
if((i__17810__auto___26312 < len__17809__auto___26311)){
args26262.push((arguments[i__17810__auto___26312]));

var G__26313 = (i__17810__auto___26312 + (1));
i__17810__auto___26312 = G__26313;
continue;
} else {
}
break;
}

var G__26264 = args26262.length;
switch (G__26264) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26262.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24151__auto___26315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___26315,out){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___26315,out){
return (function (state_26288){
var state_val_26289 = (state_26288[(1)]);
if((state_val_26289 === (7))){
var inst_26270 = (state_26288[(7)]);
var inst_26270__$1 = (state_26288[(2)]);
var inst_26271 = (inst_26270__$1 == null);
var inst_26272 = cljs.core.not.call(null,inst_26271);
var state_26288__$1 = (function (){var statearr_26290 = state_26288;
(statearr_26290[(7)] = inst_26270__$1);

return statearr_26290;
})();
if(inst_26272){
var statearr_26291_26316 = state_26288__$1;
(statearr_26291_26316[(1)] = (8));

} else {
var statearr_26292_26317 = state_26288__$1;
(statearr_26292_26317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (1))){
var inst_26265 = (0);
var state_26288__$1 = (function (){var statearr_26293 = state_26288;
(statearr_26293[(8)] = inst_26265);

return statearr_26293;
})();
var statearr_26294_26318 = state_26288__$1;
(statearr_26294_26318[(2)] = null);

(statearr_26294_26318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (4))){
var state_26288__$1 = state_26288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26288__$1,(7),ch);
} else {
if((state_val_26289 === (6))){
var inst_26283 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26295_26319 = state_26288__$1;
(statearr_26295_26319[(2)] = inst_26283);

(statearr_26295_26319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (3))){
var inst_26285 = (state_26288[(2)]);
var inst_26286 = cljs.core.async.close_BANG_.call(null,out);
var state_26288__$1 = (function (){var statearr_26296 = state_26288;
(statearr_26296[(9)] = inst_26285);

return statearr_26296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26288__$1,inst_26286);
} else {
if((state_val_26289 === (2))){
var inst_26265 = (state_26288[(8)]);
var inst_26267 = (inst_26265 < n);
var state_26288__$1 = state_26288;
if(cljs.core.truth_(inst_26267)){
var statearr_26297_26320 = state_26288__$1;
(statearr_26297_26320[(1)] = (4));

} else {
var statearr_26298_26321 = state_26288__$1;
(statearr_26298_26321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (11))){
var inst_26265 = (state_26288[(8)]);
var inst_26275 = (state_26288[(2)]);
var inst_26276 = (inst_26265 + (1));
var inst_26265__$1 = inst_26276;
var state_26288__$1 = (function (){var statearr_26299 = state_26288;
(statearr_26299[(10)] = inst_26275);

(statearr_26299[(8)] = inst_26265__$1);

return statearr_26299;
})();
var statearr_26300_26322 = state_26288__$1;
(statearr_26300_26322[(2)] = null);

(statearr_26300_26322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (9))){
var state_26288__$1 = state_26288;
var statearr_26301_26323 = state_26288__$1;
(statearr_26301_26323[(2)] = null);

(statearr_26301_26323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (5))){
var state_26288__$1 = state_26288;
var statearr_26302_26324 = state_26288__$1;
(statearr_26302_26324[(2)] = null);

(statearr_26302_26324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (10))){
var inst_26280 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26303_26325 = state_26288__$1;
(statearr_26303_26325[(2)] = inst_26280);

(statearr_26303_26325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (8))){
var inst_26270 = (state_26288[(7)]);
var state_26288__$1 = state_26288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26288__$1,(11),out,inst_26270);
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
});})(c__24151__auto___26315,out))
;
return ((function (switch__24039__auto__,c__24151__auto___26315,out){
return (function() {
var cljs$core$async$state_machine__24040__auto__ = null;
var cljs$core$async$state_machine__24040__auto____0 = (function (){
var statearr_26307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26307[(0)] = cljs$core$async$state_machine__24040__auto__);

(statearr_26307[(1)] = (1));

return statearr_26307;
});
var cljs$core$async$state_machine__24040__auto____1 = (function (state_26288){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_26288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e26308){if((e26308 instanceof Object)){
var ex__24043__auto__ = e26308;
var statearr_26309_26326 = state_26288;
(statearr_26309_26326[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26327 = state_26288;
state_26288 = G__26327;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$state_machine__24040__auto__ = function(state_26288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24040__auto____1.call(this,state_26288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24040__auto____0;
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24040__auto____1;
return cljs$core$async$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___26315,out))
})();
var state__24153__auto__ = (function (){var statearr_26310 = f__24152__auto__.call(null);
(statearr_26310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___26315);

return statearr_26310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___26315,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26335 = (function (map_LT_,f,ch,meta26336){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26336 = meta26336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26337,meta26336__$1){
var self__ = this;
var _26337__$1 = this;
return (new cljs.core.async.t_cljs$core$async26335(self__.map_LT_,self__.f,self__.ch,meta26336__$1));
});

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26337){
var self__ = this;
var _26337__$1 = this;
return self__.meta26336;
});

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26338 = (function (map_LT_,f,ch,meta26336,_,fn1,meta26339){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26336 = meta26336;
this._ = _;
this.fn1 = fn1;
this.meta26339 = meta26339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26340,meta26339__$1){
var self__ = this;
var _26340__$1 = this;
return (new cljs.core.async.t_cljs$core$async26338(self__.map_LT_,self__.f,self__.ch,self__.meta26336,self__._,self__.fn1,meta26339__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26340){
var self__ = this;
var _26340__$1 = this;
return self__.meta26339;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26338.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26338.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26328_SHARP_){
return f1.call(null,(((p1__26328_SHARP_ == null))?null:self__.f.call(null,p1__26328_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26338.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26336","meta26336",-1530964584,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26335","cljs.core.async/t_cljs$core$async26335",-868162421,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26339","meta26339",-135819162,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26338";

cljs.core.async.t_cljs$core$async26338.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26338");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26338 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26338(map_LT___$1,f__$1,ch__$1,meta26336__$1,___$2,fn1__$1,meta26339){
return (new cljs.core.async.t_cljs$core$async26338(map_LT___$1,f__$1,ch__$1,meta26336__$1,___$2,fn1__$1,meta26339));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26338(self__.map_LT_,self__.f,self__.ch,self__.meta26336,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26336","meta26336",-1530964584,null)], null);
});

cljs.core.async.t_cljs$core$async26335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26335";

cljs.core.async.t_cljs$core$async26335.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26335");
});

cljs.core.async.__GT_t_cljs$core$async26335 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26335(map_LT___$1,f__$1,ch__$1,meta26336){
return (new cljs.core.async.t_cljs$core$async26335(map_LT___$1,f__$1,ch__$1,meta26336));
});

}

return (new cljs.core.async.t_cljs$core$async26335(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26344 = (function (map_GT_,f,ch,meta26345){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26345 = meta26345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26346,meta26345__$1){
var self__ = this;
var _26346__$1 = this;
return (new cljs.core.async.t_cljs$core$async26344(self__.map_GT_,self__.f,self__.ch,meta26345__$1));
});

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26346){
var self__ = this;
var _26346__$1 = this;
return self__.meta26345;
});

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26345","meta26345",1256183770,null)], null);
});

cljs.core.async.t_cljs$core$async26344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26344";

cljs.core.async.t_cljs$core$async26344.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26344");
});

cljs.core.async.__GT_t_cljs$core$async26344 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26344(map_GT___$1,f__$1,ch__$1,meta26345){
return (new cljs.core.async.t_cljs$core$async26344(map_GT___$1,f__$1,ch__$1,meta26345));
});

}

return (new cljs.core.async.t_cljs$core$async26344(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26350 = (function (filter_GT_,p,ch,meta26351){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26351 = meta26351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26352,meta26351__$1){
var self__ = this;
var _26352__$1 = this;
return (new cljs.core.async.t_cljs$core$async26350(self__.filter_GT_,self__.p,self__.ch,meta26351__$1));
});

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26352){
var self__ = this;
var _26352__$1 = this;
return self__.meta26351;
});

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26351","meta26351",214487558,null)], null);
});

cljs.core.async.t_cljs$core$async26350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26350";

cljs.core.async.t_cljs$core$async26350.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26350");
});

cljs.core.async.__GT_t_cljs$core$async26350 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26350(filter_GT___$1,p__$1,ch__$1,meta26351){
return (new cljs.core.async.t_cljs$core$async26350(filter_GT___$1,p__$1,ch__$1,meta26351));
});

}

return (new cljs.core.async.t_cljs$core$async26350(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26353 = [];
var len__17809__auto___26397 = arguments.length;
var i__17810__auto___26398 = (0);
while(true){
if((i__17810__auto___26398 < len__17809__auto___26397)){
args26353.push((arguments[i__17810__auto___26398]));

var G__26399 = (i__17810__auto___26398 + (1));
i__17810__auto___26398 = G__26399;
continue;
} else {
}
break;
}

var G__26355 = args26353.length;
switch (G__26355) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26353.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24151__auto___26401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___26401,out){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___26401,out){
return (function (state_26376){
var state_val_26377 = (state_26376[(1)]);
if((state_val_26377 === (7))){
var inst_26372 = (state_26376[(2)]);
var state_26376__$1 = state_26376;
var statearr_26378_26402 = state_26376__$1;
(statearr_26378_26402[(2)] = inst_26372);

(statearr_26378_26402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26377 === (1))){
var state_26376__$1 = state_26376;
var statearr_26379_26403 = state_26376__$1;
(statearr_26379_26403[(2)] = null);

(statearr_26379_26403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26377 === (4))){
var inst_26358 = (state_26376[(7)]);
var inst_26358__$1 = (state_26376[(2)]);
var inst_26359 = (inst_26358__$1 == null);
var state_26376__$1 = (function (){var statearr_26380 = state_26376;
(statearr_26380[(7)] = inst_26358__$1);

return statearr_26380;
})();
if(cljs.core.truth_(inst_26359)){
var statearr_26381_26404 = state_26376__$1;
(statearr_26381_26404[(1)] = (5));

} else {
var statearr_26382_26405 = state_26376__$1;
(statearr_26382_26405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26377 === (6))){
var inst_26358 = (state_26376[(7)]);
var inst_26363 = p.call(null,inst_26358);
var state_26376__$1 = state_26376;
if(cljs.core.truth_(inst_26363)){
var statearr_26383_26406 = state_26376__$1;
(statearr_26383_26406[(1)] = (8));

} else {
var statearr_26384_26407 = state_26376__$1;
(statearr_26384_26407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26377 === (3))){
var inst_26374 = (state_26376[(2)]);
var state_26376__$1 = state_26376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26376__$1,inst_26374);
} else {
if((state_val_26377 === (2))){
var state_26376__$1 = state_26376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26376__$1,(4),ch);
} else {
if((state_val_26377 === (11))){
var inst_26366 = (state_26376[(2)]);
var state_26376__$1 = state_26376;
var statearr_26385_26408 = state_26376__$1;
(statearr_26385_26408[(2)] = inst_26366);

(statearr_26385_26408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26377 === (9))){
var state_26376__$1 = state_26376;
var statearr_26386_26409 = state_26376__$1;
(statearr_26386_26409[(2)] = null);

(statearr_26386_26409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26377 === (5))){
var inst_26361 = cljs.core.async.close_BANG_.call(null,out);
var state_26376__$1 = state_26376;
var statearr_26387_26410 = state_26376__$1;
(statearr_26387_26410[(2)] = inst_26361);

(statearr_26387_26410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26377 === (10))){
var inst_26369 = (state_26376[(2)]);
var state_26376__$1 = (function (){var statearr_26388 = state_26376;
(statearr_26388[(8)] = inst_26369);

return statearr_26388;
})();
var statearr_26389_26411 = state_26376__$1;
(statearr_26389_26411[(2)] = null);

(statearr_26389_26411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26377 === (8))){
var inst_26358 = (state_26376[(7)]);
var state_26376__$1 = state_26376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26376__$1,(11),out,inst_26358);
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
});})(c__24151__auto___26401,out))
;
return ((function (switch__24039__auto__,c__24151__auto___26401,out){
return (function() {
var cljs$core$async$state_machine__24040__auto__ = null;
var cljs$core$async$state_machine__24040__auto____0 = (function (){
var statearr_26393 = [null,null,null,null,null,null,null,null,null];
(statearr_26393[(0)] = cljs$core$async$state_machine__24040__auto__);

(statearr_26393[(1)] = (1));

return statearr_26393;
});
var cljs$core$async$state_machine__24040__auto____1 = (function (state_26376){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_26376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e26394){if((e26394 instanceof Object)){
var ex__24043__auto__ = e26394;
var statearr_26395_26412 = state_26376;
(statearr_26395_26412[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26413 = state_26376;
state_26376 = G__26413;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$state_machine__24040__auto__ = function(state_26376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24040__auto____1.call(this,state_26376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24040__auto____0;
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24040__auto____1;
return cljs$core$async$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___26401,out))
})();
var state__24153__auto__ = (function (){var statearr_26396 = f__24152__auto__.call(null);
(statearr_26396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___26401);

return statearr_26396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___26401,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26414 = [];
var len__17809__auto___26417 = arguments.length;
var i__17810__auto___26418 = (0);
while(true){
if((i__17810__auto___26418 < len__17809__auto___26417)){
args26414.push((arguments[i__17810__auto___26418]));

var G__26419 = (i__17810__auto___26418 + (1));
i__17810__auto___26418 = G__26419;
continue;
} else {
}
break;
}

var G__26416 = args26414.length;
switch (G__26416) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26414.length)].join('')));

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
var c__24151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto__){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto__){
return (function (state_26586){
var state_val_26587 = (state_26586[(1)]);
if((state_val_26587 === (7))){
var inst_26582 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26588_26629 = state_26586__$1;
(statearr_26588_26629[(2)] = inst_26582);

(statearr_26588_26629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (20))){
var inst_26552 = (state_26586[(7)]);
var inst_26563 = (state_26586[(2)]);
var inst_26564 = cljs.core.next.call(null,inst_26552);
var inst_26538 = inst_26564;
var inst_26539 = null;
var inst_26540 = (0);
var inst_26541 = (0);
var state_26586__$1 = (function (){var statearr_26589 = state_26586;
(statearr_26589[(8)] = inst_26538);

(statearr_26589[(9)] = inst_26540);

(statearr_26589[(10)] = inst_26563);

(statearr_26589[(11)] = inst_26539);

(statearr_26589[(12)] = inst_26541);

return statearr_26589;
})();
var statearr_26590_26630 = state_26586__$1;
(statearr_26590_26630[(2)] = null);

(statearr_26590_26630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (1))){
var state_26586__$1 = state_26586;
var statearr_26591_26631 = state_26586__$1;
(statearr_26591_26631[(2)] = null);

(statearr_26591_26631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (4))){
var inst_26527 = (state_26586[(13)]);
var inst_26527__$1 = (state_26586[(2)]);
var inst_26528 = (inst_26527__$1 == null);
var state_26586__$1 = (function (){var statearr_26592 = state_26586;
(statearr_26592[(13)] = inst_26527__$1);

return statearr_26592;
})();
if(cljs.core.truth_(inst_26528)){
var statearr_26593_26632 = state_26586__$1;
(statearr_26593_26632[(1)] = (5));

} else {
var statearr_26594_26633 = state_26586__$1;
(statearr_26594_26633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (15))){
var state_26586__$1 = state_26586;
var statearr_26598_26634 = state_26586__$1;
(statearr_26598_26634[(2)] = null);

(statearr_26598_26634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (21))){
var state_26586__$1 = state_26586;
var statearr_26599_26635 = state_26586__$1;
(statearr_26599_26635[(2)] = null);

(statearr_26599_26635[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (13))){
var inst_26538 = (state_26586[(8)]);
var inst_26540 = (state_26586[(9)]);
var inst_26539 = (state_26586[(11)]);
var inst_26541 = (state_26586[(12)]);
var inst_26548 = (state_26586[(2)]);
var inst_26549 = (inst_26541 + (1));
var tmp26595 = inst_26538;
var tmp26596 = inst_26540;
var tmp26597 = inst_26539;
var inst_26538__$1 = tmp26595;
var inst_26539__$1 = tmp26597;
var inst_26540__$1 = tmp26596;
var inst_26541__$1 = inst_26549;
var state_26586__$1 = (function (){var statearr_26600 = state_26586;
(statearr_26600[(8)] = inst_26538__$1);

(statearr_26600[(9)] = inst_26540__$1);

(statearr_26600[(11)] = inst_26539__$1);

(statearr_26600[(12)] = inst_26541__$1);

(statearr_26600[(14)] = inst_26548);

return statearr_26600;
})();
var statearr_26601_26636 = state_26586__$1;
(statearr_26601_26636[(2)] = null);

(statearr_26601_26636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (22))){
var state_26586__$1 = state_26586;
var statearr_26602_26637 = state_26586__$1;
(statearr_26602_26637[(2)] = null);

(statearr_26602_26637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (6))){
var inst_26527 = (state_26586[(13)]);
var inst_26536 = f.call(null,inst_26527);
var inst_26537 = cljs.core.seq.call(null,inst_26536);
var inst_26538 = inst_26537;
var inst_26539 = null;
var inst_26540 = (0);
var inst_26541 = (0);
var state_26586__$1 = (function (){var statearr_26603 = state_26586;
(statearr_26603[(8)] = inst_26538);

(statearr_26603[(9)] = inst_26540);

(statearr_26603[(11)] = inst_26539);

(statearr_26603[(12)] = inst_26541);

return statearr_26603;
})();
var statearr_26604_26638 = state_26586__$1;
(statearr_26604_26638[(2)] = null);

(statearr_26604_26638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (17))){
var inst_26552 = (state_26586[(7)]);
var inst_26556 = cljs.core.chunk_first.call(null,inst_26552);
var inst_26557 = cljs.core.chunk_rest.call(null,inst_26552);
var inst_26558 = cljs.core.count.call(null,inst_26556);
var inst_26538 = inst_26557;
var inst_26539 = inst_26556;
var inst_26540 = inst_26558;
var inst_26541 = (0);
var state_26586__$1 = (function (){var statearr_26605 = state_26586;
(statearr_26605[(8)] = inst_26538);

(statearr_26605[(9)] = inst_26540);

(statearr_26605[(11)] = inst_26539);

(statearr_26605[(12)] = inst_26541);

return statearr_26605;
})();
var statearr_26606_26639 = state_26586__$1;
(statearr_26606_26639[(2)] = null);

(statearr_26606_26639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (3))){
var inst_26584 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26586__$1,inst_26584);
} else {
if((state_val_26587 === (12))){
var inst_26572 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26607_26640 = state_26586__$1;
(statearr_26607_26640[(2)] = inst_26572);

(statearr_26607_26640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (2))){
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26586__$1,(4),in$);
} else {
if((state_val_26587 === (23))){
var inst_26580 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26608_26641 = state_26586__$1;
(statearr_26608_26641[(2)] = inst_26580);

(statearr_26608_26641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (19))){
var inst_26567 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26609_26642 = state_26586__$1;
(statearr_26609_26642[(2)] = inst_26567);

(statearr_26609_26642[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (11))){
var inst_26538 = (state_26586[(8)]);
var inst_26552 = (state_26586[(7)]);
var inst_26552__$1 = cljs.core.seq.call(null,inst_26538);
var state_26586__$1 = (function (){var statearr_26610 = state_26586;
(statearr_26610[(7)] = inst_26552__$1);

return statearr_26610;
})();
if(inst_26552__$1){
var statearr_26611_26643 = state_26586__$1;
(statearr_26611_26643[(1)] = (14));

} else {
var statearr_26612_26644 = state_26586__$1;
(statearr_26612_26644[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (9))){
var inst_26574 = (state_26586[(2)]);
var inst_26575 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26586__$1 = (function (){var statearr_26613 = state_26586;
(statearr_26613[(15)] = inst_26574);

return statearr_26613;
})();
if(cljs.core.truth_(inst_26575)){
var statearr_26614_26645 = state_26586__$1;
(statearr_26614_26645[(1)] = (21));

} else {
var statearr_26615_26646 = state_26586__$1;
(statearr_26615_26646[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (5))){
var inst_26530 = cljs.core.async.close_BANG_.call(null,out);
var state_26586__$1 = state_26586;
var statearr_26616_26647 = state_26586__$1;
(statearr_26616_26647[(2)] = inst_26530);

(statearr_26616_26647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (14))){
var inst_26552 = (state_26586[(7)]);
var inst_26554 = cljs.core.chunked_seq_QMARK_.call(null,inst_26552);
var state_26586__$1 = state_26586;
if(inst_26554){
var statearr_26617_26648 = state_26586__$1;
(statearr_26617_26648[(1)] = (17));

} else {
var statearr_26618_26649 = state_26586__$1;
(statearr_26618_26649[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (16))){
var inst_26570 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26619_26650 = state_26586__$1;
(statearr_26619_26650[(2)] = inst_26570);

(statearr_26619_26650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (10))){
var inst_26539 = (state_26586[(11)]);
var inst_26541 = (state_26586[(12)]);
var inst_26546 = cljs.core._nth.call(null,inst_26539,inst_26541);
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26586__$1,(13),out,inst_26546);
} else {
if((state_val_26587 === (18))){
var inst_26552 = (state_26586[(7)]);
var inst_26561 = cljs.core.first.call(null,inst_26552);
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26586__$1,(20),out,inst_26561);
} else {
if((state_val_26587 === (8))){
var inst_26540 = (state_26586[(9)]);
var inst_26541 = (state_26586[(12)]);
var inst_26543 = (inst_26541 < inst_26540);
var inst_26544 = inst_26543;
var state_26586__$1 = state_26586;
if(cljs.core.truth_(inst_26544)){
var statearr_26620_26651 = state_26586__$1;
(statearr_26620_26651[(1)] = (10));

} else {
var statearr_26621_26652 = state_26586__$1;
(statearr_26621_26652[(1)] = (11));

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
});})(c__24151__auto__))
;
return ((function (switch__24039__auto__,c__24151__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24040__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24040__auto____0 = (function (){
var statearr_26625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26625[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24040__auto__);

(statearr_26625[(1)] = (1));

return statearr_26625;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24040__auto____1 = (function (state_26586){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_26586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e26626){if((e26626 instanceof Object)){
var ex__24043__auto__ = e26626;
var statearr_26627_26653 = state_26586;
(statearr_26627_26653[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26654 = state_26586;
state_26586 = G__26654;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24040__auto__ = function(state_26586){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24040__auto____1.call(this,state_26586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24040__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24040__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto__))
})();
var state__24153__auto__ = (function (){var statearr_26628 = f__24152__auto__.call(null);
(statearr_26628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto__);

return statearr_26628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto__))
);

return c__24151__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26655 = [];
var len__17809__auto___26658 = arguments.length;
var i__17810__auto___26659 = (0);
while(true){
if((i__17810__auto___26659 < len__17809__auto___26658)){
args26655.push((arguments[i__17810__auto___26659]));

var G__26660 = (i__17810__auto___26659 + (1));
i__17810__auto___26659 = G__26660;
continue;
} else {
}
break;
}

var G__26657 = args26655.length;
switch (G__26657) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26655.length)].join('')));

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
var args26662 = [];
var len__17809__auto___26665 = arguments.length;
var i__17810__auto___26666 = (0);
while(true){
if((i__17810__auto___26666 < len__17809__auto___26665)){
args26662.push((arguments[i__17810__auto___26666]));

var G__26667 = (i__17810__auto___26666 + (1));
i__17810__auto___26666 = G__26667;
continue;
} else {
}
break;
}

var G__26664 = args26662.length;
switch (G__26664) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26662.length)].join('')));

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
var args26669 = [];
var len__17809__auto___26720 = arguments.length;
var i__17810__auto___26721 = (0);
while(true){
if((i__17810__auto___26721 < len__17809__auto___26720)){
args26669.push((arguments[i__17810__auto___26721]));

var G__26722 = (i__17810__auto___26721 + (1));
i__17810__auto___26721 = G__26722;
continue;
} else {
}
break;
}

var G__26671 = args26669.length;
switch (G__26671) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26669.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24151__auto___26724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___26724,out){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___26724,out){
return (function (state_26695){
var state_val_26696 = (state_26695[(1)]);
if((state_val_26696 === (7))){
var inst_26690 = (state_26695[(2)]);
var state_26695__$1 = state_26695;
var statearr_26697_26725 = state_26695__$1;
(statearr_26697_26725[(2)] = inst_26690);

(statearr_26697_26725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (1))){
var inst_26672 = null;
var state_26695__$1 = (function (){var statearr_26698 = state_26695;
(statearr_26698[(7)] = inst_26672);

return statearr_26698;
})();
var statearr_26699_26726 = state_26695__$1;
(statearr_26699_26726[(2)] = null);

(statearr_26699_26726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (4))){
var inst_26675 = (state_26695[(8)]);
var inst_26675__$1 = (state_26695[(2)]);
var inst_26676 = (inst_26675__$1 == null);
var inst_26677 = cljs.core.not.call(null,inst_26676);
var state_26695__$1 = (function (){var statearr_26700 = state_26695;
(statearr_26700[(8)] = inst_26675__$1);

return statearr_26700;
})();
if(inst_26677){
var statearr_26701_26727 = state_26695__$1;
(statearr_26701_26727[(1)] = (5));

} else {
var statearr_26702_26728 = state_26695__$1;
(statearr_26702_26728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (6))){
var state_26695__$1 = state_26695;
var statearr_26703_26729 = state_26695__$1;
(statearr_26703_26729[(2)] = null);

(statearr_26703_26729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (3))){
var inst_26692 = (state_26695[(2)]);
var inst_26693 = cljs.core.async.close_BANG_.call(null,out);
var state_26695__$1 = (function (){var statearr_26704 = state_26695;
(statearr_26704[(9)] = inst_26692);

return statearr_26704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26695__$1,inst_26693);
} else {
if((state_val_26696 === (2))){
var state_26695__$1 = state_26695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26695__$1,(4),ch);
} else {
if((state_val_26696 === (11))){
var inst_26675 = (state_26695[(8)]);
var inst_26684 = (state_26695[(2)]);
var inst_26672 = inst_26675;
var state_26695__$1 = (function (){var statearr_26705 = state_26695;
(statearr_26705[(10)] = inst_26684);

(statearr_26705[(7)] = inst_26672);

return statearr_26705;
})();
var statearr_26706_26730 = state_26695__$1;
(statearr_26706_26730[(2)] = null);

(statearr_26706_26730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (9))){
var inst_26675 = (state_26695[(8)]);
var state_26695__$1 = state_26695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26695__$1,(11),out,inst_26675);
} else {
if((state_val_26696 === (5))){
var inst_26675 = (state_26695[(8)]);
var inst_26672 = (state_26695[(7)]);
var inst_26679 = cljs.core._EQ_.call(null,inst_26675,inst_26672);
var state_26695__$1 = state_26695;
if(inst_26679){
var statearr_26708_26731 = state_26695__$1;
(statearr_26708_26731[(1)] = (8));

} else {
var statearr_26709_26732 = state_26695__$1;
(statearr_26709_26732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (10))){
var inst_26687 = (state_26695[(2)]);
var state_26695__$1 = state_26695;
var statearr_26710_26733 = state_26695__$1;
(statearr_26710_26733[(2)] = inst_26687);

(statearr_26710_26733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (8))){
var inst_26672 = (state_26695[(7)]);
var tmp26707 = inst_26672;
var inst_26672__$1 = tmp26707;
var state_26695__$1 = (function (){var statearr_26711 = state_26695;
(statearr_26711[(7)] = inst_26672__$1);

return statearr_26711;
})();
var statearr_26712_26734 = state_26695__$1;
(statearr_26712_26734[(2)] = null);

(statearr_26712_26734[(1)] = (2));


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
});})(c__24151__auto___26724,out))
;
return ((function (switch__24039__auto__,c__24151__auto___26724,out){
return (function() {
var cljs$core$async$state_machine__24040__auto__ = null;
var cljs$core$async$state_machine__24040__auto____0 = (function (){
var statearr_26716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26716[(0)] = cljs$core$async$state_machine__24040__auto__);

(statearr_26716[(1)] = (1));

return statearr_26716;
});
var cljs$core$async$state_machine__24040__auto____1 = (function (state_26695){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_26695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e26717){if((e26717 instanceof Object)){
var ex__24043__auto__ = e26717;
var statearr_26718_26735 = state_26695;
(statearr_26718_26735[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26736 = state_26695;
state_26695 = G__26736;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$state_machine__24040__auto__ = function(state_26695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24040__auto____1.call(this,state_26695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24040__auto____0;
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24040__auto____1;
return cljs$core$async$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___26724,out))
})();
var state__24153__auto__ = (function (){var statearr_26719 = f__24152__auto__.call(null);
(statearr_26719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___26724);

return statearr_26719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___26724,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26737 = [];
var len__17809__auto___26807 = arguments.length;
var i__17810__auto___26808 = (0);
while(true){
if((i__17810__auto___26808 < len__17809__auto___26807)){
args26737.push((arguments[i__17810__auto___26808]));

var G__26809 = (i__17810__auto___26808 + (1));
i__17810__auto___26808 = G__26809;
continue;
} else {
}
break;
}

var G__26739 = args26737.length;
switch (G__26739) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26737.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24151__auto___26811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___26811,out){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___26811,out){
return (function (state_26777){
var state_val_26778 = (state_26777[(1)]);
if((state_val_26778 === (7))){
var inst_26773 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26779_26812 = state_26777__$1;
(statearr_26779_26812[(2)] = inst_26773);

(statearr_26779_26812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (1))){
var inst_26740 = (new Array(n));
var inst_26741 = inst_26740;
var inst_26742 = (0);
var state_26777__$1 = (function (){var statearr_26780 = state_26777;
(statearr_26780[(7)] = inst_26741);

(statearr_26780[(8)] = inst_26742);

return statearr_26780;
})();
var statearr_26781_26813 = state_26777__$1;
(statearr_26781_26813[(2)] = null);

(statearr_26781_26813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (4))){
var inst_26745 = (state_26777[(9)]);
var inst_26745__$1 = (state_26777[(2)]);
var inst_26746 = (inst_26745__$1 == null);
var inst_26747 = cljs.core.not.call(null,inst_26746);
var state_26777__$1 = (function (){var statearr_26782 = state_26777;
(statearr_26782[(9)] = inst_26745__$1);

return statearr_26782;
})();
if(inst_26747){
var statearr_26783_26814 = state_26777__$1;
(statearr_26783_26814[(1)] = (5));

} else {
var statearr_26784_26815 = state_26777__$1;
(statearr_26784_26815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (15))){
var inst_26767 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26785_26816 = state_26777__$1;
(statearr_26785_26816[(2)] = inst_26767);

(statearr_26785_26816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (13))){
var state_26777__$1 = state_26777;
var statearr_26786_26817 = state_26777__$1;
(statearr_26786_26817[(2)] = null);

(statearr_26786_26817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (6))){
var inst_26742 = (state_26777[(8)]);
var inst_26763 = (inst_26742 > (0));
var state_26777__$1 = state_26777;
if(cljs.core.truth_(inst_26763)){
var statearr_26787_26818 = state_26777__$1;
(statearr_26787_26818[(1)] = (12));

} else {
var statearr_26788_26819 = state_26777__$1;
(statearr_26788_26819[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (3))){
var inst_26775 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26777__$1,inst_26775);
} else {
if((state_val_26778 === (12))){
var inst_26741 = (state_26777[(7)]);
var inst_26765 = cljs.core.vec.call(null,inst_26741);
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26777__$1,(15),out,inst_26765);
} else {
if((state_val_26778 === (2))){
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26777__$1,(4),ch);
} else {
if((state_val_26778 === (11))){
var inst_26757 = (state_26777[(2)]);
var inst_26758 = (new Array(n));
var inst_26741 = inst_26758;
var inst_26742 = (0);
var state_26777__$1 = (function (){var statearr_26789 = state_26777;
(statearr_26789[(7)] = inst_26741);

(statearr_26789[(8)] = inst_26742);

(statearr_26789[(10)] = inst_26757);

return statearr_26789;
})();
var statearr_26790_26820 = state_26777__$1;
(statearr_26790_26820[(2)] = null);

(statearr_26790_26820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (9))){
var inst_26741 = (state_26777[(7)]);
var inst_26755 = cljs.core.vec.call(null,inst_26741);
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26777__$1,(11),out,inst_26755);
} else {
if((state_val_26778 === (5))){
var inst_26745 = (state_26777[(9)]);
var inst_26750 = (state_26777[(11)]);
var inst_26741 = (state_26777[(7)]);
var inst_26742 = (state_26777[(8)]);
var inst_26749 = (inst_26741[inst_26742] = inst_26745);
var inst_26750__$1 = (inst_26742 + (1));
var inst_26751 = (inst_26750__$1 < n);
var state_26777__$1 = (function (){var statearr_26791 = state_26777;
(statearr_26791[(11)] = inst_26750__$1);

(statearr_26791[(12)] = inst_26749);

return statearr_26791;
})();
if(cljs.core.truth_(inst_26751)){
var statearr_26792_26821 = state_26777__$1;
(statearr_26792_26821[(1)] = (8));

} else {
var statearr_26793_26822 = state_26777__$1;
(statearr_26793_26822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (14))){
var inst_26770 = (state_26777[(2)]);
var inst_26771 = cljs.core.async.close_BANG_.call(null,out);
var state_26777__$1 = (function (){var statearr_26795 = state_26777;
(statearr_26795[(13)] = inst_26770);

return statearr_26795;
})();
var statearr_26796_26823 = state_26777__$1;
(statearr_26796_26823[(2)] = inst_26771);

(statearr_26796_26823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (10))){
var inst_26761 = (state_26777[(2)]);
var state_26777__$1 = state_26777;
var statearr_26797_26824 = state_26777__$1;
(statearr_26797_26824[(2)] = inst_26761);

(statearr_26797_26824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26778 === (8))){
var inst_26750 = (state_26777[(11)]);
var inst_26741 = (state_26777[(7)]);
var tmp26794 = inst_26741;
var inst_26741__$1 = tmp26794;
var inst_26742 = inst_26750;
var state_26777__$1 = (function (){var statearr_26798 = state_26777;
(statearr_26798[(7)] = inst_26741__$1);

(statearr_26798[(8)] = inst_26742);

return statearr_26798;
})();
var statearr_26799_26825 = state_26777__$1;
(statearr_26799_26825[(2)] = null);

(statearr_26799_26825[(1)] = (2));


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
});})(c__24151__auto___26811,out))
;
return ((function (switch__24039__auto__,c__24151__auto___26811,out){
return (function() {
var cljs$core$async$state_machine__24040__auto__ = null;
var cljs$core$async$state_machine__24040__auto____0 = (function (){
var statearr_26803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26803[(0)] = cljs$core$async$state_machine__24040__auto__);

(statearr_26803[(1)] = (1));

return statearr_26803;
});
var cljs$core$async$state_machine__24040__auto____1 = (function (state_26777){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_26777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e26804){if((e26804 instanceof Object)){
var ex__24043__auto__ = e26804;
var statearr_26805_26826 = state_26777;
(statearr_26805_26826[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26827 = state_26777;
state_26777 = G__26827;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$state_machine__24040__auto__ = function(state_26777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24040__auto____1.call(this,state_26777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24040__auto____0;
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24040__auto____1;
return cljs$core$async$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___26811,out))
})();
var state__24153__auto__ = (function (){var statearr_26806 = f__24152__auto__.call(null);
(statearr_26806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___26811);

return statearr_26806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___26811,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26828 = [];
var len__17809__auto___26902 = arguments.length;
var i__17810__auto___26903 = (0);
while(true){
if((i__17810__auto___26903 < len__17809__auto___26902)){
args26828.push((arguments[i__17810__auto___26903]));

var G__26904 = (i__17810__auto___26903 + (1));
i__17810__auto___26903 = G__26904;
continue;
} else {
}
break;
}

var G__26830 = args26828.length;
switch (G__26830) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26828.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24151__auto___26906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24151__auto___26906,out){
return (function (){
var f__24152__auto__ = (function (){var switch__24039__auto__ = ((function (c__24151__auto___26906,out){
return (function (state_26872){
var state_val_26873 = (state_26872[(1)]);
if((state_val_26873 === (7))){
var inst_26868 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
var statearr_26874_26907 = state_26872__$1;
(statearr_26874_26907[(2)] = inst_26868);

(statearr_26874_26907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (1))){
var inst_26831 = [];
var inst_26832 = inst_26831;
var inst_26833 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26872__$1 = (function (){var statearr_26875 = state_26872;
(statearr_26875[(7)] = inst_26832);

(statearr_26875[(8)] = inst_26833);

return statearr_26875;
})();
var statearr_26876_26908 = state_26872__$1;
(statearr_26876_26908[(2)] = null);

(statearr_26876_26908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (4))){
var inst_26836 = (state_26872[(9)]);
var inst_26836__$1 = (state_26872[(2)]);
var inst_26837 = (inst_26836__$1 == null);
var inst_26838 = cljs.core.not.call(null,inst_26837);
var state_26872__$1 = (function (){var statearr_26877 = state_26872;
(statearr_26877[(9)] = inst_26836__$1);

return statearr_26877;
})();
if(inst_26838){
var statearr_26878_26909 = state_26872__$1;
(statearr_26878_26909[(1)] = (5));

} else {
var statearr_26879_26910 = state_26872__$1;
(statearr_26879_26910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (15))){
var inst_26862 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
var statearr_26880_26911 = state_26872__$1;
(statearr_26880_26911[(2)] = inst_26862);

(statearr_26880_26911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (13))){
var state_26872__$1 = state_26872;
var statearr_26881_26912 = state_26872__$1;
(statearr_26881_26912[(2)] = null);

(statearr_26881_26912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (6))){
var inst_26832 = (state_26872[(7)]);
var inst_26857 = inst_26832.length;
var inst_26858 = (inst_26857 > (0));
var state_26872__$1 = state_26872;
if(cljs.core.truth_(inst_26858)){
var statearr_26882_26913 = state_26872__$1;
(statearr_26882_26913[(1)] = (12));

} else {
var statearr_26883_26914 = state_26872__$1;
(statearr_26883_26914[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (3))){
var inst_26870 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26872__$1,inst_26870);
} else {
if((state_val_26873 === (12))){
var inst_26832 = (state_26872[(7)]);
var inst_26860 = cljs.core.vec.call(null,inst_26832);
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26872__$1,(15),out,inst_26860);
} else {
if((state_val_26873 === (2))){
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26872__$1,(4),ch);
} else {
if((state_val_26873 === (11))){
var inst_26836 = (state_26872[(9)]);
var inst_26840 = (state_26872[(10)]);
var inst_26850 = (state_26872[(2)]);
var inst_26851 = [];
var inst_26852 = inst_26851.push(inst_26836);
var inst_26832 = inst_26851;
var inst_26833 = inst_26840;
var state_26872__$1 = (function (){var statearr_26884 = state_26872;
(statearr_26884[(7)] = inst_26832);

(statearr_26884[(11)] = inst_26850);

(statearr_26884[(12)] = inst_26852);

(statearr_26884[(8)] = inst_26833);

return statearr_26884;
})();
var statearr_26885_26915 = state_26872__$1;
(statearr_26885_26915[(2)] = null);

(statearr_26885_26915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (9))){
var inst_26832 = (state_26872[(7)]);
var inst_26848 = cljs.core.vec.call(null,inst_26832);
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26872__$1,(11),out,inst_26848);
} else {
if((state_val_26873 === (5))){
var inst_26836 = (state_26872[(9)]);
var inst_26840 = (state_26872[(10)]);
var inst_26833 = (state_26872[(8)]);
var inst_26840__$1 = f.call(null,inst_26836);
var inst_26841 = cljs.core._EQ_.call(null,inst_26840__$1,inst_26833);
var inst_26842 = cljs.core.keyword_identical_QMARK_.call(null,inst_26833,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26843 = (inst_26841) || (inst_26842);
var state_26872__$1 = (function (){var statearr_26886 = state_26872;
(statearr_26886[(10)] = inst_26840__$1);

return statearr_26886;
})();
if(cljs.core.truth_(inst_26843)){
var statearr_26887_26916 = state_26872__$1;
(statearr_26887_26916[(1)] = (8));

} else {
var statearr_26888_26917 = state_26872__$1;
(statearr_26888_26917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (14))){
var inst_26865 = (state_26872[(2)]);
var inst_26866 = cljs.core.async.close_BANG_.call(null,out);
var state_26872__$1 = (function (){var statearr_26890 = state_26872;
(statearr_26890[(13)] = inst_26865);

return statearr_26890;
})();
var statearr_26891_26918 = state_26872__$1;
(statearr_26891_26918[(2)] = inst_26866);

(statearr_26891_26918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (10))){
var inst_26855 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
var statearr_26892_26919 = state_26872__$1;
(statearr_26892_26919[(2)] = inst_26855);

(statearr_26892_26919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (8))){
var inst_26832 = (state_26872[(7)]);
var inst_26836 = (state_26872[(9)]);
var inst_26840 = (state_26872[(10)]);
var inst_26845 = inst_26832.push(inst_26836);
var tmp26889 = inst_26832;
var inst_26832__$1 = tmp26889;
var inst_26833 = inst_26840;
var state_26872__$1 = (function (){var statearr_26893 = state_26872;
(statearr_26893[(7)] = inst_26832__$1);

(statearr_26893[(14)] = inst_26845);

(statearr_26893[(8)] = inst_26833);

return statearr_26893;
})();
var statearr_26894_26920 = state_26872__$1;
(statearr_26894_26920[(2)] = null);

(statearr_26894_26920[(1)] = (2));


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
});})(c__24151__auto___26906,out))
;
return ((function (switch__24039__auto__,c__24151__auto___26906,out){
return (function() {
var cljs$core$async$state_machine__24040__auto__ = null;
var cljs$core$async$state_machine__24040__auto____0 = (function (){
var statearr_26898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26898[(0)] = cljs$core$async$state_machine__24040__auto__);

(statearr_26898[(1)] = (1));

return statearr_26898;
});
var cljs$core$async$state_machine__24040__auto____1 = (function (state_26872){
while(true){
var ret_value__24041__auto__ = (function (){try{while(true){
var result__24042__auto__ = switch__24039__auto__.call(null,state_26872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24042__auto__;
}
break;
}
}catch (e26899){if((e26899 instanceof Object)){
var ex__24043__auto__ = e26899;
var statearr_26900_26921 = state_26872;
(statearr_26900_26921[(5)] = ex__24043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26922 = state_26872;
state_26872 = G__26922;
continue;
} else {
return ret_value__24041__auto__;
}
break;
}
});
cljs$core$async$state_machine__24040__auto__ = function(state_26872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24040__auto____1.call(this,state_26872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24040__auto____0;
cljs$core$async$state_machine__24040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24040__auto____1;
return cljs$core$async$state_machine__24040__auto__;
})()
;})(switch__24039__auto__,c__24151__auto___26906,out))
})();
var state__24153__auto__ = (function (){var statearr_26901 = f__24152__auto__.call(null);
(statearr_26901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24151__auto___26906);

return statearr_26901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24153__auto__);
});})(c__24151__auto___26906,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1448194814543