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
var args24067 = [];
var len__17809__auto___24073 = arguments.length;
var i__17810__auto___24074 = (0);
while(true){
if((i__17810__auto___24074 < len__17809__auto___24073)){
args24067.push((arguments[i__17810__auto___24074]));

var G__24075 = (i__17810__auto___24074 + (1));
i__17810__auto___24074 = G__24075;
continue;
} else {
}
break;
}

var G__24069 = args24067.length;
switch (G__24069) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24067.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24070 = (function (f,blockable,meta24071){
this.f = f;
this.blockable = blockable;
this.meta24071 = meta24071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24072,meta24071__$1){
var self__ = this;
var _24072__$1 = this;
return (new cljs.core.async.t_cljs$core$async24070(self__.f,self__.blockable,meta24071__$1));
});

cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24072){
var self__ = this;
var _24072__$1 = this;
return self__.meta24071;
});

cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24071","meta24071",889682794,null)], null);
});

cljs.core.async.t_cljs$core$async24070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24070";

cljs.core.async.t_cljs$core$async24070.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24070");
});

cljs.core.async.__GT_t_cljs$core$async24070 = (function cljs$core$async$__GT_t_cljs$core$async24070(f__$1,blockable__$1,meta24071){
return (new cljs.core.async.t_cljs$core$async24070(f__$1,blockable__$1,meta24071));
});

}

return (new cljs.core.async.t_cljs$core$async24070(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args24079 = [];
var len__17809__auto___24082 = arguments.length;
var i__17810__auto___24083 = (0);
while(true){
if((i__17810__auto___24083 < len__17809__auto___24082)){
args24079.push((arguments[i__17810__auto___24083]));

var G__24084 = (i__17810__auto___24083 + (1));
i__17810__auto___24083 = G__24084;
continue;
} else {
}
break;
}

var G__24081 = args24079.length;
switch (G__24081) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24079.length)].join('')));

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
var args24086 = [];
var len__17809__auto___24089 = arguments.length;
var i__17810__auto___24090 = (0);
while(true){
if((i__17810__auto___24090 < len__17809__auto___24089)){
args24086.push((arguments[i__17810__auto___24090]));

var G__24091 = (i__17810__auto___24090 + (1));
i__17810__auto___24090 = G__24091;
continue;
} else {
}
break;
}

var G__24088 = args24086.length;
switch (G__24088) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24086.length)].join('')));

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
var args24093 = [];
var len__17809__auto___24096 = arguments.length;
var i__17810__auto___24097 = (0);
while(true){
if((i__17810__auto___24097 < len__17809__auto___24096)){
args24093.push((arguments[i__17810__auto___24097]));

var G__24098 = (i__17810__auto___24097 + (1));
i__17810__auto___24097 = G__24098;
continue;
} else {
}
break;
}

var G__24095 = args24093.length;
switch (G__24095) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24093.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24100 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24100);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24100,ret){
return (function (){
return fn1.call(null,val_24100);
});})(val_24100,ret))
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
var args24101 = [];
var len__17809__auto___24104 = arguments.length;
var i__17810__auto___24105 = (0);
while(true){
if((i__17810__auto___24105 < len__17809__auto___24104)){
args24101.push((arguments[i__17810__auto___24105]));

var G__24106 = (i__17810__auto___24105 + (1));
i__17810__auto___24105 = G__24106;
continue;
} else {
}
break;
}

var G__24103 = args24101.length;
switch (G__24103) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24101.length)].join('')));

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
var n__17654__auto___24108 = n;
var x_24109 = (0);
while(true){
if((x_24109 < n__17654__auto___24108)){
(a[x_24109] = (0));

var G__24110 = (x_24109 + (1));
x_24109 = G__24110;
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

var G__24111 = (i + (1));
i = G__24111;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24115 = (function (alt_flag,flag,meta24116){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24116 = meta24116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24117,meta24116__$1){
var self__ = this;
var _24117__$1 = this;
return (new cljs.core.async.t_cljs$core$async24115(self__.alt_flag,self__.flag,meta24116__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24117){
var self__ = this;
var _24117__$1 = this;
return self__.meta24116;
});})(flag))
;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24115.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24116","meta24116",-129899139,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24115";

cljs.core.async.t_cljs$core$async24115.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24115");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24115 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24115(alt_flag__$1,flag__$1,meta24116){
return (new cljs.core.async.t_cljs$core$async24115(alt_flag__$1,flag__$1,meta24116));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24115(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24121 = (function (alt_handler,flag,cb,meta24122){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24122 = meta24122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24123,meta24122__$1){
var self__ = this;
var _24123__$1 = this;
return (new cljs.core.async.t_cljs$core$async24121(self__.alt_handler,self__.flag,self__.cb,meta24122__$1));
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24123){
var self__ = this;
var _24123__$1 = this;
return self__.meta24122;
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24122","meta24122",353845817,null)], null);
});

cljs.core.async.t_cljs$core$async24121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24121";

cljs.core.async.t_cljs$core$async24121.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24121");
});

cljs.core.async.__GT_t_cljs$core$async24121 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24121(alt_handler__$1,flag__$1,cb__$1,meta24122){
return (new cljs.core.async.t_cljs$core$async24121(alt_handler__$1,flag__$1,cb__$1,meta24122));
});

}

return (new cljs.core.async.t_cljs$core$async24121(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24124_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24124_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24125_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24125_SHARP_,port], null));
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
var G__24126 = (i + (1));
i = G__24126;
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
var len__17809__auto___24132 = arguments.length;
var i__17810__auto___24133 = (0);
while(true){
if((i__17810__auto___24133 < len__17809__auto___24132)){
args__17816__auto__.push((arguments[i__17810__auto___24133]));

var G__24134 = (i__17810__auto___24133 + (1));
i__17810__auto___24133 = G__24134;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((1) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24129){
var map__24130 = p__24129;
var map__24130__$1 = ((((!((map__24130 == null)))?((((map__24130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24130):map__24130);
var opts = map__24130__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24127){
var G__24128 = cljs.core.first.call(null,seq24127);
var seq24127__$1 = cljs.core.next.call(null,seq24127);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24128,seq24127__$1);
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
var args24135 = [];
var len__17809__auto___24185 = arguments.length;
var i__17810__auto___24186 = (0);
while(true){
if((i__17810__auto___24186 < len__17809__auto___24185)){
args24135.push((arguments[i__17810__auto___24186]));

var G__24187 = (i__17810__auto___24186 + (1));
i__17810__auto___24186 = G__24187;
continue;
} else {
}
break;
}

var G__24137 = args24135.length;
switch (G__24137) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24135.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24022__auto___24189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___24189){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___24189){
return (function (state_24161){
var state_val_24162 = (state_24161[(1)]);
if((state_val_24162 === (7))){
var inst_24157 = (state_24161[(2)]);
var state_24161__$1 = state_24161;
var statearr_24163_24190 = state_24161__$1;
(statearr_24163_24190[(2)] = inst_24157);

(statearr_24163_24190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24162 === (1))){
var state_24161__$1 = state_24161;
var statearr_24164_24191 = state_24161__$1;
(statearr_24164_24191[(2)] = null);

(statearr_24164_24191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24162 === (4))){
var inst_24140 = (state_24161[(7)]);
var inst_24140__$1 = (state_24161[(2)]);
var inst_24141 = (inst_24140__$1 == null);
var state_24161__$1 = (function (){var statearr_24165 = state_24161;
(statearr_24165[(7)] = inst_24140__$1);

return statearr_24165;
})();
if(cljs.core.truth_(inst_24141)){
var statearr_24166_24192 = state_24161__$1;
(statearr_24166_24192[(1)] = (5));

} else {
var statearr_24167_24193 = state_24161__$1;
(statearr_24167_24193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24162 === (13))){
var state_24161__$1 = state_24161;
var statearr_24168_24194 = state_24161__$1;
(statearr_24168_24194[(2)] = null);

(statearr_24168_24194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24162 === (6))){
var inst_24140 = (state_24161[(7)]);
var state_24161__$1 = state_24161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24161__$1,(11),to,inst_24140);
} else {
if((state_val_24162 === (3))){
var inst_24159 = (state_24161[(2)]);
var state_24161__$1 = state_24161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24161__$1,inst_24159);
} else {
if((state_val_24162 === (12))){
var state_24161__$1 = state_24161;
var statearr_24169_24195 = state_24161__$1;
(statearr_24169_24195[(2)] = null);

(statearr_24169_24195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24162 === (2))){
var state_24161__$1 = state_24161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24161__$1,(4),from);
} else {
if((state_val_24162 === (11))){
var inst_24150 = (state_24161[(2)]);
var state_24161__$1 = state_24161;
if(cljs.core.truth_(inst_24150)){
var statearr_24170_24196 = state_24161__$1;
(statearr_24170_24196[(1)] = (12));

} else {
var statearr_24171_24197 = state_24161__$1;
(statearr_24171_24197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24162 === (9))){
var state_24161__$1 = state_24161;
var statearr_24172_24198 = state_24161__$1;
(statearr_24172_24198[(2)] = null);

(statearr_24172_24198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24162 === (5))){
var state_24161__$1 = state_24161;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24173_24199 = state_24161__$1;
(statearr_24173_24199[(1)] = (8));

} else {
var statearr_24174_24200 = state_24161__$1;
(statearr_24174_24200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24162 === (14))){
var inst_24155 = (state_24161[(2)]);
var state_24161__$1 = state_24161;
var statearr_24175_24201 = state_24161__$1;
(statearr_24175_24201[(2)] = inst_24155);

(statearr_24175_24201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24162 === (10))){
var inst_24147 = (state_24161[(2)]);
var state_24161__$1 = state_24161;
var statearr_24176_24202 = state_24161__$1;
(statearr_24176_24202[(2)] = inst_24147);

(statearr_24176_24202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24162 === (8))){
var inst_24144 = cljs.core.async.close_BANG_.call(null,to);
var state_24161__$1 = state_24161;
var statearr_24177_24203 = state_24161__$1;
(statearr_24177_24203[(2)] = inst_24144);

(statearr_24177_24203[(1)] = (10));


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
});})(c__24022__auto___24189))
;
return ((function (switch__23910__auto__,c__24022__auto___24189){
return (function() {
var cljs$core$async$state_machine__23911__auto__ = null;
var cljs$core$async$state_machine__23911__auto____0 = (function (){
var statearr_24181 = [null,null,null,null,null,null,null,null];
(statearr_24181[(0)] = cljs$core$async$state_machine__23911__auto__);

(statearr_24181[(1)] = (1));

return statearr_24181;
});
var cljs$core$async$state_machine__23911__auto____1 = (function (state_24161){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_24161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e24182){if((e24182 instanceof Object)){
var ex__23914__auto__ = e24182;
var statearr_24183_24204 = state_24161;
(statearr_24183_24204[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24205 = state_24161;
state_24161 = G__24205;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$state_machine__23911__auto__ = function(state_24161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23911__auto____1.call(this,state_24161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23911__auto____0;
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23911__auto____1;
return cljs$core$async$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___24189))
})();
var state__24024__auto__ = (function (){var statearr_24184 = f__24023__auto__.call(null);
(statearr_24184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___24189);

return statearr_24184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___24189))
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
return (function (p__24389){
var vec__24390 = p__24389;
var v = cljs.core.nth.call(null,vec__24390,(0),null);
var p = cljs.core.nth.call(null,vec__24390,(1),null);
var job = vec__24390;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24022__auto___24572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___24572,res,vec__24390,v,p,job,jobs,results){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___24572,res,vec__24390,v,p,job,jobs,results){
return (function (state_24395){
var state_val_24396 = (state_24395[(1)]);
if((state_val_24396 === (1))){
var state_24395__$1 = state_24395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24395__$1,(2),res,v);
} else {
if((state_val_24396 === (2))){
var inst_24392 = (state_24395[(2)]);
var inst_24393 = cljs.core.async.close_BANG_.call(null,res);
var state_24395__$1 = (function (){var statearr_24397 = state_24395;
(statearr_24397[(7)] = inst_24392);

return statearr_24397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24395__$1,inst_24393);
} else {
return null;
}
}
});})(c__24022__auto___24572,res,vec__24390,v,p,job,jobs,results))
;
return ((function (switch__23910__auto__,c__24022__auto___24572,res,vec__24390,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0 = (function (){
var statearr_24401 = [null,null,null,null,null,null,null,null];
(statearr_24401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__);

(statearr_24401[(1)] = (1));

return statearr_24401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1 = (function (state_24395){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_24395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e24402){if((e24402 instanceof Object)){
var ex__23914__auto__ = e24402;
var statearr_24403_24573 = state_24395;
(statearr_24403_24573[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24574 = state_24395;
state_24395 = G__24574;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__ = function(state_24395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1.call(this,state_24395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___24572,res,vec__24390,v,p,job,jobs,results))
})();
var state__24024__auto__ = (function (){var statearr_24404 = f__24023__auto__.call(null);
(statearr_24404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___24572);

return statearr_24404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___24572,res,vec__24390,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24405){
var vec__24406 = p__24405;
var v = cljs.core.nth.call(null,vec__24406,(0),null);
var p = cljs.core.nth.call(null,vec__24406,(1),null);
var job = vec__24406;
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
var n__17654__auto___24575 = n;
var __24576 = (0);
while(true){
if((__24576 < n__17654__auto___24575)){
var G__24407_24577 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24407_24577) {
case "compute":
var c__24022__auto___24579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24576,c__24022__auto___24579,G__24407_24577,n__17654__auto___24575,jobs,results,process,async){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (__24576,c__24022__auto___24579,G__24407_24577,n__17654__auto___24575,jobs,results,process,async){
return (function (state_24420){
var state_val_24421 = (state_24420[(1)]);
if((state_val_24421 === (1))){
var state_24420__$1 = state_24420;
var statearr_24422_24580 = state_24420__$1;
(statearr_24422_24580[(2)] = null);

(statearr_24422_24580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (2))){
var state_24420__$1 = state_24420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24420__$1,(4),jobs);
} else {
if((state_val_24421 === (3))){
var inst_24418 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24420__$1,inst_24418);
} else {
if((state_val_24421 === (4))){
var inst_24410 = (state_24420[(2)]);
var inst_24411 = process.call(null,inst_24410);
var state_24420__$1 = state_24420;
if(cljs.core.truth_(inst_24411)){
var statearr_24423_24581 = state_24420__$1;
(statearr_24423_24581[(1)] = (5));

} else {
var statearr_24424_24582 = state_24420__$1;
(statearr_24424_24582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (5))){
var state_24420__$1 = state_24420;
var statearr_24425_24583 = state_24420__$1;
(statearr_24425_24583[(2)] = null);

(statearr_24425_24583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (6))){
var state_24420__$1 = state_24420;
var statearr_24426_24584 = state_24420__$1;
(statearr_24426_24584[(2)] = null);

(statearr_24426_24584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24421 === (7))){
var inst_24416 = (state_24420[(2)]);
var state_24420__$1 = state_24420;
var statearr_24427_24585 = state_24420__$1;
(statearr_24427_24585[(2)] = inst_24416);

(statearr_24427_24585[(1)] = (3));


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
});})(__24576,c__24022__auto___24579,G__24407_24577,n__17654__auto___24575,jobs,results,process,async))
;
return ((function (__24576,switch__23910__auto__,c__24022__auto___24579,G__24407_24577,n__17654__auto___24575,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0 = (function (){
var statearr_24431 = [null,null,null,null,null,null,null];
(statearr_24431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__);

(statearr_24431[(1)] = (1));

return statearr_24431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1 = (function (state_24420){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_24420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e24432){if((e24432 instanceof Object)){
var ex__23914__auto__ = e24432;
var statearr_24433_24586 = state_24420;
(statearr_24433_24586[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24587 = state_24420;
state_24420 = G__24587;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__ = function(state_24420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1.call(this,state_24420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__;
})()
;})(__24576,switch__23910__auto__,c__24022__auto___24579,G__24407_24577,n__17654__auto___24575,jobs,results,process,async))
})();
var state__24024__auto__ = (function (){var statearr_24434 = f__24023__auto__.call(null);
(statearr_24434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___24579);

return statearr_24434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(__24576,c__24022__auto___24579,G__24407_24577,n__17654__auto___24575,jobs,results,process,async))
);


break;
case "async":
var c__24022__auto___24588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24576,c__24022__auto___24588,G__24407_24577,n__17654__auto___24575,jobs,results,process,async){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (__24576,c__24022__auto___24588,G__24407_24577,n__17654__auto___24575,jobs,results,process,async){
return (function (state_24447){
var state_val_24448 = (state_24447[(1)]);
if((state_val_24448 === (1))){
var state_24447__$1 = state_24447;
var statearr_24449_24589 = state_24447__$1;
(statearr_24449_24589[(2)] = null);

(statearr_24449_24589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (2))){
var state_24447__$1 = state_24447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24447__$1,(4),jobs);
} else {
if((state_val_24448 === (3))){
var inst_24445 = (state_24447[(2)]);
var state_24447__$1 = state_24447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24447__$1,inst_24445);
} else {
if((state_val_24448 === (4))){
var inst_24437 = (state_24447[(2)]);
var inst_24438 = async.call(null,inst_24437);
var state_24447__$1 = state_24447;
if(cljs.core.truth_(inst_24438)){
var statearr_24450_24590 = state_24447__$1;
(statearr_24450_24590[(1)] = (5));

} else {
var statearr_24451_24591 = state_24447__$1;
(statearr_24451_24591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (5))){
var state_24447__$1 = state_24447;
var statearr_24452_24592 = state_24447__$1;
(statearr_24452_24592[(2)] = null);

(statearr_24452_24592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (6))){
var state_24447__$1 = state_24447;
var statearr_24453_24593 = state_24447__$1;
(statearr_24453_24593[(2)] = null);

(statearr_24453_24593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24448 === (7))){
var inst_24443 = (state_24447[(2)]);
var state_24447__$1 = state_24447;
var statearr_24454_24594 = state_24447__$1;
(statearr_24454_24594[(2)] = inst_24443);

(statearr_24454_24594[(1)] = (3));


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
});})(__24576,c__24022__auto___24588,G__24407_24577,n__17654__auto___24575,jobs,results,process,async))
;
return ((function (__24576,switch__23910__auto__,c__24022__auto___24588,G__24407_24577,n__17654__auto___24575,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0 = (function (){
var statearr_24458 = [null,null,null,null,null,null,null];
(statearr_24458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__);

(statearr_24458[(1)] = (1));

return statearr_24458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1 = (function (state_24447){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_24447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e24459){if((e24459 instanceof Object)){
var ex__23914__auto__ = e24459;
var statearr_24460_24595 = state_24447;
(statearr_24460_24595[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24596 = state_24447;
state_24447 = G__24596;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__ = function(state_24447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1.call(this,state_24447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__;
})()
;})(__24576,switch__23910__auto__,c__24022__auto___24588,G__24407_24577,n__17654__auto___24575,jobs,results,process,async))
})();
var state__24024__auto__ = (function (){var statearr_24461 = f__24023__auto__.call(null);
(statearr_24461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___24588);

return statearr_24461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(__24576,c__24022__auto___24588,G__24407_24577,n__17654__auto___24575,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24597 = (__24576 + (1));
__24576 = G__24597;
continue;
} else {
}
break;
}

var c__24022__auto___24598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___24598,jobs,results,process,async){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___24598,jobs,results,process,async){
return (function (state_24483){
var state_val_24484 = (state_24483[(1)]);
if((state_val_24484 === (1))){
var state_24483__$1 = state_24483;
var statearr_24485_24599 = state_24483__$1;
(statearr_24485_24599[(2)] = null);

(statearr_24485_24599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (2))){
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24483__$1,(4),from);
} else {
if((state_val_24484 === (3))){
var inst_24481 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24483__$1,inst_24481);
} else {
if((state_val_24484 === (4))){
var inst_24464 = (state_24483[(7)]);
var inst_24464__$1 = (state_24483[(2)]);
var inst_24465 = (inst_24464__$1 == null);
var state_24483__$1 = (function (){var statearr_24486 = state_24483;
(statearr_24486[(7)] = inst_24464__$1);

return statearr_24486;
})();
if(cljs.core.truth_(inst_24465)){
var statearr_24487_24600 = state_24483__$1;
(statearr_24487_24600[(1)] = (5));

} else {
var statearr_24488_24601 = state_24483__$1;
(statearr_24488_24601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (5))){
var inst_24467 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24483__$1 = state_24483;
var statearr_24489_24602 = state_24483__$1;
(statearr_24489_24602[(2)] = inst_24467);

(statearr_24489_24602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (6))){
var inst_24469 = (state_24483[(8)]);
var inst_24464 = (state_24483[(7)]);
var inst_24469__$1 = cljs.core.async.chan.call(null,(1));
var inst_24470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24471 = [inst_24464,inst_24469__$1];
var inst_24472 = (new cljs.core.PersistentVector(null,2,(5),inst_24470,inst_24471,null));
var state_24483__$1 = (function (){var statearr_24490 = state_24483;
(statearr_24490[(8)] = inst_24469__$1);

return statearr_24490;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24483__$1,(8),jobs,inst_24472);
} else {
if((state_val_24484 === (7))){
var inst_24479 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24491_24603 = state_24483__$1;
(statearr_24491_24603[(2)] = inst_24479);

(statearr_24491_24603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (8))){
var inst_24469 = (state_24483[(8)]);
var inst_24474 = (state_24483[(2)]);
var state_24483__$1 = (function (){var statearr_24492 = state_24483;
(statearr_24492[(9)] = inst_24474);

return statearr_24492;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24483__$1,(9),results,inst_24469);
} else {
if((state_val_24484 === (9))){
var inst_24476 = (state_24483[(2)]);
var state_24483__$1 = (function (){var statearr_24493 = state_24483;
(statearr_24493[(10)] = inst_24476);

return statearr_24493;
})();
var statearr_24494_24604 = state_24483__$1;
(statearr_24494_24604[(2)] = null);

(statearr_24494_24604[(1)] = (2));


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
});})(c__24022__auto___24598,jobs,results,process,async))
;
return ((function (switch__23910__auto__,c__24022__auto___24598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0 = (function (){
var statearr_24498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__);

(statearr_24498[(1)] = (1));

return statearr_24498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1 = (function (state_24483){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_24483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e24499){if((e24499 instanceof Object)){
var ex__23914__auto__ = e24499;
var statearr_24500_24605 = state_24483;
(statearr_24500_24605[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24606 = state_24483;
state_24483 = G__24606;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__ = function(state_24483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1.call(this,state_24483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___24598,jobs,results,process,async))
})();
var state__24024__auto__ = (function (){var statearr_24501 = f__24023__auto__.call(null);
(statearr_24501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___24598);

return statearr_24501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___24598,jobs,results,process,async))
);


var c__24022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto__,jobs,results,process,async){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto__,jobs,results,process,async){
return (function (state_24539){
var state_val_24540 = (state_24539[(1)]);
if((state_val_24540 === (7))){
var inst_24535 = (state_24539[(2)]);
var state_24539__$1 = state_24539;
var statearr_24541_24607 = state_24539__$1;
(statearr_24541_24607[(2)] = inst_24535);

(statearr_24541_24607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (20))){
var state_24539__$1 = state_24539;
var statearr_24542_24608 = state_24539__$1;
(statearr_24542_24608[(2)] = null);

(statearr_24542_24608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (1))){
var state_24539__$1 = state_24539;
var statearr_24543_24609 = state_24539__$1;
(statearr_24543_24609[(2)] = null);

(statearr_24543_24609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (4))){
var inst_24504 = (state_24539[(7)]);
var inst_24504__$1 = (state_24539[(2)]);
var inst_24505 = (inst_24504__$1 == null);
var state_24539__$1 = (function (){var statearr_24544 = state_24539;
(statearr_24544[(7)] = inst_24504__$1);

return statearr_24544;
})();
if(cljs.core.truth_(inst_24505)){
var statearr_24545_24610 = state_24539__$1;
(statearr_24545_24610[(1)] = (5));

} else {
var statearr_24546_24611 = state_24539__$1;
(statearr_24546_24611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (15))){
var inst_24517 = (state_24539[(8)]);
var state_24539__$1 = state_24539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24539__$1,(18),to,inst_24517);
} else {
if((state_val_24540 === (21))){
var inst_24530 = (state_24539[(2)]);
var state_24539__$1 = state_24539;
var statearr_24547_24612 = state_24539__$1;
(statearr_24547_24612[(2)] = inst_24530);

(statearr_24547_24612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (13))){
var inst_24532 = (state_24539[(2)]);
var state_24539__$1 = (function (){var statearr_24548 = state_24539;
(statearr_24548[(9)] = inst_24532);

return statearr_24548;
})();
var statearr_24549_24613 = state_24539__$1;
(statearr_24549_24613[(2)] = null);

(statearr_24549_24613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (6))){
var inst_24504 = (state_24539[(7)]);
var state_24539__$1 = state_24539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24539__$1,(11),inst_24504);
} else {
if((state_val_24540 === (17))){
var inst_24525 = (state_24539[(2)]);
var state_24539__$1 = state_24539;
if(cljs.core.truth_(inst_24525)){
var statearr_24550_24614 = state_24539__$1;
(statearr_24550_24614[(1)] = (19));

} else {
var statearr_24551_24615 = state_24539__$1;
(statearr_24551_24615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (3))){
var inst_24537 = (state_24539[(2)]);
var state_24539__$1 = state_24539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24539__$1,inst_24537);
} else {
if((state_val_24540 === (12))){
var inst_24514 = (state_24539[(10)]);
var state_24539__$1 = state_24539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24539__$1,(14),inst_24514);
} else {
if((state_val_24540 === (2))){
var state_24539__$1 = state_24539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24539__$1,(4),results);
} else {
if((state_val_24540 === (19))){
var state_24539__$1 = state_24539;
var statearr_24552_24616 = state_24539__$1;
(statearr_24552_24616[(2)] = null);

(statearr_24552_24616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (11))){
var inst_24514 = (state_24539[(2)]);
var state_24539__$1 = (function (){var statearr_24553 = state_24539;
(statearr_24553[(10)] = inst_24514);

return statearr_24553;
})();
var statearr_24554_24617 = state_24539__$1;
(statearr_24554_24617[(2)] = null);

(statearr_24554_24617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (9))){
var state_24539__$1 = state_24539;
var statearr_24555_24618 = state_24539__$1;
(statearr_24555_24618[(2)] = null);

(statearr_24555_24618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (5))){
var state_24539__$1 = state_24539;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24556_24619 = state_24539__$1;
(statearr_24556_24619[(1)] = (8));

} else {
var statearr_24557_24620 = state_24539__$1;
(statearr_24557_24620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (14))){
var inst_24517 = (state_24539[(8)]);
var inst_24519 = (state_24539[(11)]);
var inst_24517__$1 = (state_24539[(2)]);
var inst_24518 = (inst_24517__$1 == null);
var inst_24519__$1 = cljs.core.not.call(null,inst_24518);
var state_24539__$1 = (function (){var statearr_24558 = state_24539;
(statearr_24558[(8)] = inst_24517__$1);

(statearr_24558[(11)] = inst_24519__$1);

return statearr_24558;
})();
if(inst_24519__$1){
var statearr_24559_24621 = state_24539__$1;
(statearr_24559_24621[(1)] = (15));

} else {
var statearr_24560_24622 = state_24539__$1;
(statearr_24560_24622[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (16))){
var inst_24519 = (state_24539[(11)]);
var state_24539__$1 = state_24539;
var statearr_24561_24623 = state_24539__$1;
(statearr_24561_24623[(2)] = inst_24519);

(statearr_24561_24623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (10))){
var inst_24511 = (state_24539[(2)]);
var state_24539__$1 = state_24539;
var statearr_24562_24624 = state_24539__$1;
(statearr_24562_24624[(2)] = inst_24511);

(statearr_24562_24624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (18))){
var inst_24522 = (state_24539[(2)]);
var state_24539__$1 = state_24539;
var statearr_24563_24625 = state_24539__$1;
(statearr_24563_24625[(2)] = inst_24522);

(statearr_24563_24625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24540 === (8))){
var inst_24508 = cljs.core.async.close_BANG_.call(null,to);
var state_24539__$1 = state_24539;
var statearr_24564_24626 = state_24539__$1;
(statearr_24564_24626[(2)] = inst_24508);

(statearr_24564_24626[(1)] = (10));


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
});})(c__24022__auto__,jobs,results,process,async))
;
return ((function (switch__23910__auto__,c__24022__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0 = (function (){
var statearr_24568 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__);

(statearr_24568[(1)] = (1));

return statearr_24568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1 = (function (state_24539){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_24539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e24569){if((e24569 instanceof Object)){
var ex__23914__auto__ = e24569;
var statearr_24570_24627 = state_24539;
(statearr_24570_24627[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24628 = state_24539;
state_24539 = G__24628;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__ = function(state_24539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1.call(this,state_24539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23911__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto__,jobs,results,process,async))
})();
var state__24024__auto__ = (function (){var statearr_24571 = f__24023__auto__.call(null);
(statearr_24571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto__);

return statearr_24571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto__,jobs,results,process,async))
);

return c__24022__auto__;
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
var args24629 = [];
var len__17809__auto___24632 = arguments.length;
var i__17810__auto___24633 = (0);
while(true){
if((i__17810__auto___24633 < len__17809__auto___24632)){
args24629.push((arguments[i__17810__auto___24633]));

var G__24634 = (i__17810__auto___24633 + (1));
i__17810__auto___24633 = G__24634;
continue;
} else {
}
break;
}

var G__24631 = args24629.length;
switch (G__24631) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24629.length)].join('')));

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
var args24636 = [];
var len__17809__auto___24639 = arguments.length;
var i__17810__auto___24640 = (0);
while(true){
if((i__17810__auto___24640 < len__17809__auto___24639)){
args24636.push((arguments[i__17810__auto___24640]));

var G__24641 = (i__17810__auto___24640 + (1));
i__17810__auto___24640 = G__24641;
continue;
} else {
}
break;
}

var G__24638 = args24636.length;
switch (G__24638) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24636.length)].join('')));

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
var args24643 = [];
var len__17809__auto___24696 = arguments.length;
var i__17810__auto___24697 = (0);
while(true){
if((i__17810__auto___24697 < len__17809__auto___24696)){
args24643.push((arguments[i__17810__auto___24697]));

var G__24698 = (i__17810__auto___24697 + (1));
i__17810__auto___24697 = G__24698;
continue;
} else {
}
break;
}

var G__24645 = args24643.length;
switch (G__24645) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24643.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24022__auto___24700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___24700,tc,fc){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___24700,tc,fc){
return (function (state_24671){
var state_val_24672 = (state_24671[(1)]);
if((state_val_24672 === (7))){
var inst_24667 = (state_24671[(2)]);
var state_24671__$1 = state_24671;
var statearr_24673_24701 = state_24671__$1;
(statearr_24673_24701[(2)] = inst_24667);

(statearr_24673_24701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (1))){
var state_24671__$1 = state_24671;
var statearr_24674_24702 = state_24671__$1;
(statearr_24674_24702[(2)] = null);

(statearr_24674_24702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (4))){
var inst_24648 = (state_24671[(7)]);
var inst_24648__$1 = (state_24671[(2)]);
var inst_24649 = (inst_24648__$1 == null);
var state_24671__$1 = (function (){var statearr_24675 = state_24671;
(statearr_24675[(7)] = inst_24648__$1);

return statearr_24675;
})();
if(cljs.core.truth_(inst_24649)){
var statearr_24676_24703 = state_24671__$1;
(statearr_24676_24703[(1)] = (5));

} else {
var statearr_24677_24704 = state_24671__$1;
(statearr_24677_24704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (13))){
var state_24671__$1 = state_24671;
var statearr_24678_24705 = state_24671__$1;
(statearr_24678_24705[(2)] = null);

(statearr_24678_24705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (6))){
var inst_24648 = (state_24671[(7)]);
var inst_24654 = p.call(null,inst_24648);
var state_24671__$1 = state_24671;
if(cljs.core.truth_(inst_24654)){
var statearr_24679_24706 = state_24671__$1;
(statearr_24679_24706[(1)] = (9));

} else {
var statearr_24680_24707 = state_24671__$1;
(statearr_24680_24707[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (3))){
var inst_24669 = (state_24671[(2)]);
var state_24671__$1 = state_24671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24671__$1,inst_24669);
} else {
if((state_val_24672 === (12))){
var state_24671__$1 = state_24671;
var statearr_24681_24708 = state_24671__$1;
(statearr_24681_24708[(2)] = null);

(statearr_24681_24708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (2))){
var state_24671__$1 = state_24671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24671__$1,(4),ch);
} else {
if((state_val_24672 === (11))){
var inst_24648 = (state_24671[(7)]);
var inst_24658 = (state_24671[(2)]);
var state_24671__$1 = state_24671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24671__$1,(8),inst_24658,inst_24648);
} else {
if((state_val_24672 === (9))){
var state_24671__$1 = state_24671;
var statearr_24682_24709 = state_24671__$1;
(statearr_24682_24709[(2)] = tc);

(statearr_24682_24709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (5))){
var inst_24651 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24652 = cljs.core.async.close_BANG_.call(null,fc);
var state_24671__$1 = (function (){var statearr_24683 = state_24671;
(statearr_24683[(8)] = inst_24651);

return statearr_24683;
})();
var statearr_24684_24710 = state_24671__$1;
(statearr_24684_24710[(2)] = inst_24652);

(statearr_24684_24710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (14))){
var inst_24665 = (state_24671[(2)]);
var state_24671__$1 = state_24671;
var statearr_24685_24711 = state_24671__$1;
(statearr_24685_24711[(2)] = inst_24665);

(statearr_24685_24711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (10))){
var state_24671__$1 = state_24671;
var statearr_24686_24712 = state_24671__$1;
(statearr_24686_24712[(2)] = fc);

(statearr_24686_24712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (8))){
var inst_24660 = (state_24671[(2)]);
var state_24671__$1 = state_24671;
if(cljs.core.truth_(inst_24660)){
var statearr_24687_24713 = state_24671__$1;
(statearr_24687_24713[(1)] = (12));

} else {
var statearr_24688_24714 = state_24671__$1;
(statearr_24688_24714[(1)] = (13));

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
});})(c__24022__auto___24700,tc,fc))
;
return ((function (switch__23910__auto__,c__24022__auto___24700,tc,fc){
return (function() {
var cljs$core$async$state_machine__23911__auto__ = null;
var cljs$core$async$state_machine__23911__auto____0 = (function (){
var statearr_24692 = [null,null,null,null,null,null,null,null,null];
(statearr_24692[(0)] = cljs$core$async$state_machine__23911__auto__);

(statearr_24692[(1)] = (1));

return statearr_24692;
});
var cljs$core$async$state_machine__23911__auto____1 = (function (state_24671){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_24671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e24693){if((e24693 instanceof Object)){
var ex__23914__auto__ = e24693;
var statearr_24694_24715 = state_24671;
(statearr_24694_24715[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24716 = state_24671;
state_24671 = G__24716;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$state_machine__23911__auto__ = function(state_24671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23911__auto____1.call(this,state_24671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23911__auto____0;
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23911__auto____1;
return cljs$core$async$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___24700,tc,fc))
})();
var state__24024__auto__ = (function (){var statearr_24695 = f__24023__auto__.call(null);
(statearr_24695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___24700);

return statearr_24695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___24700,tc,fc))
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
var c__24022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto__){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto__){
return (function (state_24780){
var state_val_24781 = (state_24780[(1)]);
if((state_val_24781 === (7))){
var inst_24776 = (state_24780[(2)]);
var state_24780__$1 = state_24780;
var statearr_24782_24803 = state_24780__$1;
(statearr_24782_24803[(2)] = inst_24776);

(statearr_24782_24803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (1))){
var inst_24760 = init;
var state_24780__$1 = (function (){var statearr_24783 = state_24780;
(statearr_24783[(7)] = inst_24760);

return statearr_24783;
})();
var statearr_24784_24804 = state_24780__$1;
(statearr_24784_24804[(2)] = null);

(statearr_24784_24804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (4))){
var inst_24763 = (state_24780[(8)]);
var inst_24763__$1 = (state_24780[(2)]);
var inst_24764 = (inst_24763__$1 == null);
var state_24780__$1 = (function (){var statearr_24785 = state_24780;
(statearr_24785[(8)] = inst_24763__$1);

return statearr_24785;
})();
if(cljs.core.truth_(inst_24764)){
var statearr_24786_24805 = state_24780__$1;
(statearr_24786_24805[(1)] = (5));

} else {
var statearr_24787_24806 = state_24780__$1;
(statearr_24787_24806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (6))){
var inst_24763 = (state_24780[(8)]);
var inst_24760 = (state_24780[(7)]);
var inst_24767 = (state_24780[(9)]);
var inst_24767__$1 = f.call(null,inst_24760,inst_24763);
var inst_24768 = cljs.core.reduced_QMARK_.call(null,inst_24767__$1);
var state_24780__$1 = (function (){var statearr_24788 = state_24780;
(statearr_24788[(9)] = inst_24767__$1);

return statearr_24788;
})();
if(inst_24768){
var statearr_24789_24807 = state_24780__$1;
(statearr_24789_24807[(1)] = (8));

} else {
var statearr_24790_24808 = state_24780__$1;
(statearr_24790_24808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (3))){
var inst_24778 = (state_24780[(2)]);
var state_24780__$1 = state_24780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24780__$1,inst_24778);
} else {
if((state_val_24781 === (2))){
var state_24780__$1 = state_24780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24780__$1,(4),ch);
} else {
if((state_val_24781 === (9))){
var inst_24767 = (state_24780[(9)]);
var inst_24760 = inst_24767;
var state_24780__$1 = (function (){var statearr_24791 = state_24780;
(statearr_24791[(7)] = inst_24760);

return statearr_24791;
})();
var statearr_24792_24809 = state_24780__$1;
(statearr_24792_24809[(2)] = null);

(statearr_24792_24809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (5))){
var inst_24760 = (state_24780[(7)]);
var state_24780__$1 = state_24780;
var statearr_24793_24810 = state_24780__$1;
(statearr_24793_24810[(2)] = inst_24760);

(statearr_24793_24810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (10))){
var inst_24774 = (state_24780[(2)]);
var state_24780__$1 = state_24780;
var statearr_24794_24811 = state_24780__$1;
(statearr_24794_24811[(2)] = inst_24774);

(statearr_24794_24811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24781 === (8))){
var inst_24767 = (state_24780[(9)]);
var inst_24770 = cljs.core.deref.call(null,inst_24767);
var state_24780__$1 = state_24780;
var statearr_24795_24812 = state_24780__$1;
(statearr_24795_24812[(2)] = inst_24770);

(statearr_24795_24812[(1)] = (10));


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
});})(c__24022__auto__))
;
return ((function (switch__23910__auto__,c__24022__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23911__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23911__auto____0 = (function (){
var statearr_24799 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24799[(0)] = cljs$core$async$reduce_$_state_machine__23911__auto__);

(statearr_24799[(1)] = (1));

return statearr_24799;
});
var cljs$core$async$reduce_$_state_machine__23911__auto____1 = (function (state_24780){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_24780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e24800){if((e24800 instanceof Object)){
var ex__23914__auto__ = e24800;
var statearr_24801_24813 = state_24780;
(statearr_24801_24813[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24814 = state_24780;
state_24780 = G__24814;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23911__auto__ = function(state_24780){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23911__auto____1.call(this,state_24780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23911__auto____0;
cljs$core$async$reduce_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23911__auto____1;
return cljs$core$async$reduce_$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto__))
})();
var state__24024__auto__ = (function (){var statearr_24802 = f__24023__auto__.call(null);
(statearr_24802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto__);

return statearr_24802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto__))
);

return c__24022__auto__;
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
var args24815 = [];
var len__17809__auto___24867 = arguments.length;
var i__17810__auto___24868 = (0);
while(true){
if((i__17810__auto___24868 < len__17809__auto___24867)){
args24815.push((arguments[i__17810__auto___24868]));

var G__24869 = (i__17810__auto___24868 + (1));
i__17810__auto___24868 = G__24869;
continue;
} else {
}
break;
}

var G__24817 = args24815.length;
switch (G__24817) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24815.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto__){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto__){
return (function (state_24842){
var state_val_24843 = (state_24842[(1)]);
if((state_val_24843 === (7))){
var inst_24824 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24844_24871 = state_24842__$1;
(statearr_24844_24871[(2)] = inst_24824);

(statearr_24844_24871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (1))){
var inst_24818 = cljs.core.seq.call(null,coll);
var inst_24819 = inst_24818;
var state_24842__$1 = (function (){var statearr_24845 = state_24842;
(statearr_24845[(7)] = inst_24819);

return statearr_24845;
})();
var statearr_24846_24872 = state_24842__$1;
(statearr_24846_24872[(2)] = null);

(statearr_24846_24872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (4))){
var inst_24819 = (state_24842[(7)]);
var inst_24822 = cljs.core.first.call(null,inst_24819);
var state_24842__$1 = state_24842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24842__$1,(7),ch,inst_24822);
} else {
if((state_val_24843 === (13))){
var inst_24836 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24847_24873 = state_24842__$1;
(statearr_24847_24873[(2)] = inst_24836);

(statearr_24847_24873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (6))){
var inst_24827 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
if(cljs.core.truth_(inst_24827)){
var statearr_24848_24874 = state_24842__$1;
(statearr_24848_24874[(1)] = (8));

} else {
var statearr_24849_24875 = state_24842__$1;
(statearr_24849_24875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (3))){
var inst_24840 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24842__$1,inst_24840);
} else {
if((state_val_24843 === (12))){
var state_24842__$1 = state_24842;
var statearr_24850_24876 = state_24842__$1;
(statearr_24850_24876[(2)] = null);

(statearr_24850_24876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (2))){
var inst_24819 = (state_24842[(7)]);
var state_24842__$1 = state_24842;
if(cljs.core.truth_(inst_24819)){
var statearr_24851_24877 = state_24842__$1;
(statearr_24851_24877[(1)] = (4));

} else {
var statearr_24852_24878 = state_24842__$1;
(statearr_24852_24878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (11))){
var inst_24833 = cljs.core.async.close_BANG_.call(null,ch);
var state_24842__$1 = state_24842;
var statearr_24853_24879 = state_24842__$1;
(statearr_24853_24879[(2)] = inst_24833);

(statearr_24853_24879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (9))){
var state_24842__$1 = state_24842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24854_24880 = state_24842__$1;
(statearr_24854_24880[(1)] = (11));

} else {
var statearr_24855_24881 = state_24842__$1;
(statearr_24855_24881[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (5))){
var inst_24819 = (state_24842[(7)]);
var state_24842__$1 = state_24842;
var statearr_24856_24882 = state_24842__$1;
(statearr_24856_24882[(2)] = inst_24819);

(statearr_24856_24882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (10))){
var inst_24838 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24857_24883 = state_24842__$1;
(statearr_24857_24883[(2)] = inst_24838);

(statearr_24857_24883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (8))){
var inst_24819 = (state_24842[(7)]);
var inst_24829 = cljs.core.next.call(null,inst_24819);
var inst_24819__$1 = inst_24829;
var state_24842__$1 = (function (){var statearr_24858 = state_24842;
(statearr_24858[(7)] = inst_24819__$1);

return statearr_24858;
})();
var statearr_24859_24884 = state_24842__$1;
(statearr_24859_24884[(2)] = null);

(statearr_24859_24884[(1)] = (2));


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
});})(c__24022__auto__))
;
return ((function (switch__23910__auto__,c__24022__auto__){
return (function() {
var cljs$core$async$state_machine__23911__auto__ = null;
var cljs$core$async$state_machine__23911__auto____0 = (function (){
var statearr_24863 = [null,null,null,null,null,null,null,null];
(statearr_24863[(0)] = cljs$core$async$state_machine__23911__auto__);

(statearr_24863[(1)] = (1));

return statearr_24863;
});
var cljs$core$async$state_machine__23911__auto____1 = (function (state_24842){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_24842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e24864){if((e24864 instanceof Object)){
var ex__23914__auto__ = e24864;
var statearr_24865_24885 = state_24842;
(statearr_24865_24885[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24886 = state_24842;
state_24842 = G__24886;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$state_machine__23911__auto__ = function(state_24842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23911__auto____1.call(this,state_24842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23911__auto____0;
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23911__auto____1;
return cljs$core$async$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto__))
})();
var state__24024__auto__ = (function (){var statearr_24866 = f__24023__auto__.call(null);
(statearr_24866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto__);

return statearr_24866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto__))
);

return c__24022__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25108 = (function (mult,ch,cs,meta25109){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25109 = meta25109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25110,meta25109__$1){
var self__ = this;
var _25110__$1 = this;
return (new cljs.core.async.t_cljs$core$async25108(self__.mult,self__.ch,self__.cs,meta25109__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25110){
var self__ = this;
var _25110__$1 = this;
return self__.meta25109;
});})(cs))
;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25108.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25109","meta25109",1027740073,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25108";

cljs.core.async.t_cljs$core$async25108.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25108");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25108 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25108(mult__$1,ch__$1,cs__$1,meta25109){
return (new cljs.core.async.t_cljs$core$async25108(mult__$1,ch__$1,cs__$1,meta25109));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25108(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24022__auto___25329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___25329,cs,m,dchan,dctr,done){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___25329,cs,m,dchan,dctr,done){
return (function (state_25241){
var state_val_25242 = (state_25241[(1)]);
if((state_val_25242 === (7))){
var inst_25237 = (state_25241[(2)]);
var state_25241__$1 = state_25241;
var statearr_25243_25330 = state_25241__$1;
(statearr_25243_25330[(2)] = inst_25237);

(statearr_25243_25330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (20))){
var inst_25142 = (state_25241[(7)]);
var inst_25152 = cljs.core.first.call(null,inst_25142);
var inst_25153 = cljs.core.nth.call(null,inst_25152,(0),null);
var inst_25154 = cljs.core.nth.call(null,inst_25152,(1),null);
var state_25241__$1 = (function (){var statearr_25244 = state_25241;
(statearr_25244[(8)] = inst_25153);

return statearr_25244;
})();
if(cljs.core.truth_(inst_25154)){
var statearr_25245_25331 = state_25241__$1;
(statearr_25245_25331[(1)] = (22));

} else {
var statearr_25246_25332 = state_25241__$1;
(statearr_25246_25332[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (27))){
var inst_25184 = (state_25241[(9)]);
var inst_25182 = (state_25241[(10)]);
var inst_25189 = (state_25241[(11)]);
var inst_25113 = (state_25241[(12)]);
var inst_25189__$1 = cljs.core._nth.call(null,inst_25182,inst_25184);
var inst_25190 = cljs.core.async.put_BANG_.call(null,inst_25189__$1,inst_25113,done);
var state_25241__$1 = (function (){var statearr_25247 = state_25241;
(statearr_25247[(11)] = inst_25189__$1);

return statearr_25247;
})();
if(cljs.core.truth_(inst_25190)){
var statearr_25248_25333 = state_25241__$1;
(statearr_25248_25333[(1)] = (30));

} else {
var statearr_25249_25334 = state_25241__$1;
(statearr_25249_25334[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (1))){
var state_25241__$1 = state_25241;
var statearr_25250_25335 = state_25241__$1;
(statearr_25250_25335[(2)] = null);

(statearr_25250_25335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (24))){
var inst_25142 = (state_25241[(7)]);
var inst_25159 = (state_25241[(2)]);
var inst_25160 = cljs.core.next.call(null,inst_25142);
var inst_25122 = inst_25160;
var inst_25123 = null;
var inst_25124 = (0);
var inst_25125 = (0);
var state_25241__$1 = (function (){var statearr_25251 = state_25241;
(statearr_25251[(13)] = inst_25159);

(statearr_25251[(14)] = inst_25124);

(statearr_25251[(15)] = inst_25125);

(statearr_25251[(16)] = inst_25123);

(statearr_25251[(17)] = inst_25122);

return statearr_25251;
})();
var statearr_25252_25336 = state_25241__$1;
(statearr_25252_25336[(2)] = null);

(statearr_25252_25336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (39))){
var state_25241__$1 = state_25241;
var statearr_25256_25337 = state_25241__$1;
(statearr_25256_25337[(2)] = null);

(statearr_25256_25337[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (4))){
var inst_25113 = (state_25241[(12)]);
var inst_25113__$1 = (state_25241[(2)]);
var inst_25114 = (inst_25113__$1 == null);
var state_25241__$1 = (function (){var statearr_25257 = state_25241;
(statearr_25257[(12)] = inst_25113__$1);

return statearr_25257;
})();
if(cljs.core.truth_(inst_25114)){
var statearr_25258_25338 = state_25241__$1;
(statearr_25258_25338[(1)] = (5));

} else {
var statearr_25259_25339 = state_25241__$1;
(statearr_25259_25339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (15))){
var inst_25124 = (state_25241[(14)]);
var inst_25125 = (state_25241[(15)]);
var inst_25123 = (state_25241[(16)]);
var inst_25122 = (state_25241[(17)]);
var inst_25138 = (state_25241[(2)]);
var inst_25139 = (inst_25125 + (1));
var tmp25253 = inst_25124;
var tmp25254 = inst_25123;
var tmp25255 = inst_25122;
var inst_25122__$1 = tmp25255;
var inst_25123__$1 = tmp25254;
var inst_25124__$1 = tmp25253;
var inst_25125__$1 = inst_25139;
var state_25241__$1 = (function (){var statearr_25260 = state_25241;
(statearr_25260[(14)] = inst_25124__$1);

(statearr_25260[(18)] = inst_25138);

(statearr_25260[(15)] = inst_25125__$1);

(statearr_25260[(16)] = inst_25123__$1);

(statearr_25260[(17)] = inst_25122__$1);

return statearr_25260;
})();
var statearr_25261_25340 = state_25241__$1;
(statearr_25261_25340[(2)] = null);

(statearr_25261_25340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (21))){
var inst_25163 = (state_25241[(2)]);
var state_25241__$1 = state_25241;
var statearr_25265_25341 = state_25241__$1;
(statearr_25265_25341[(2)] = inst_25163);

(statearr_25265_25341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (31))){
var inst_25189 = (state_25241[(11)]);
var inst_25193 = done.call(null,null);
var inst_25194 = cljs.core.async.untap_STAR_.call(null,m,inst_25189);
var state_25241__$1 = (function (){var statearr_25266 = state_25241;
(statearr_25266[(19)] = inst_25193);

return statearr_25266;
})();
var statearr_25267_25342 = state_25241__$1;
(statearr_25267_25342[(2)] = inst_25194);

(statearr_25267_25342[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (32))){
var inst_25181 = (state_25241[(20)]);
var inst_25184 = (state_25241[(9)]);
var inst_25182 = (state_25241[(10)]);
var inst_25183 = (state_25241[(21)]);
var inst_25196 = (state_25241[(2)]);
var inst_25197 = (inst_25184 + (1));
var tmp25262 = inst_25181;
var tmp25263 = inst_25182;
var tmp25264 = inst_25183;
var inst_25181__$1 = tmp25262;
var inst_25182__$1 = tmp25263;
var inst_25183__$1 = tmp25264;
var inst_25184__$1 = inst_25197;
var state_25241__$1 = (function (){var statearr_25268 = state_25241;
(statearr_25268[(20)] = inst_25181__$1);

(statearr_25268[(9)] = inst_25184__$1);

(statearr_25268[(22)] = inst_25196);

(statearr_25268[(10)] = inst_25182__$1);

(statearr_25268[(21)] = inst_25183__$1);

return statearr_25268;
})();
var statearr_25269_25343 = state_25241__$1;
(statearr_25269_25343[(2)] = null);

(statearr_25269_25343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (40))){
var inst_25209 = (state_25241[(23)]);
var inst_25213 = done.call(null,null);
var inst_25214 = cljs.core.async.untap_STAR_.call(null,m,inst_25209);
var state_25241__$1 = (function (){var statearr_25270 = state_25241;
(statearr_25270[(24)] = inst_25213);

return statearr_25270;
})();
var statearr_25271_25344 = state_25241__$1;
(statearr_25271_25344[(2)] = inst_25214);

(statearr_25271_25344[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (33))){
var inst_25200 = (state_25241[(25)]);
var inst_25202 = cljs.core.chunked_seq_QMARK_.call(null,inst_25200);
var state_25241__$1 = state_25241;
if(inst_25202){
var statearr_25272_25345 = state_25241__$1;
(statearr_25272_25345[(1)] = (36));

} else {
var statearr_25273_25346 = state_25241__$1;
(statearr_25273_25346[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (13))){
var inst_25132 = (state_25241[(26)]);
var inst_25135 = cljs.core.async.close_BANG_.call(null,inst_25132);
var state_25241__$1 = state_25241;
var statearr_25274_25347 = state_25241__$1;
(statearr_25274_25347[(2)] = inst_25135);

(statearr_25274_25347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (22))){
var inst_25153 = (state_25241[(8)]);
var inst_25156 = cljs.core.async.close_BANG_.call(null,inst_25153);
var state_25241__$1 = state_25241;
var statearr_25275_25348 = state_25241__$1;
(statearr_25275_25348[(2)] = inst_25156);

(statearr_25275_25348[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (36))){
var inst_25200 = (state_25241[(25)]);
var inst_25204 = cljs.core.chunk_first.call(null,inst_25200);
var inst_25205 = cljs.core.chunk_rest.call(null,inst_25200);
var inst_25206 = cljs.core.count.call(null,inst_25204);
var inst_25181 = inst_25205;
var inst_25182 = inst_25204;
var inst_25183 = inst_25206;
var inst_25184 = (0);
var state_25241__$1 = (function (){var statearr_25276 = state_25241;
(statearr_25276[(20)] = inst_25181);

(statearr_25276[(9)] = inst_25184);

(statearr_25276[(10)] = inst_25182);

(statearr_25276[(21)] = inst_25183);

return statearr_25276;
})();
var statearr_25277_25349 = state_25241__$1;
(statearr_25277_25349[(2)] = null);

(statearr_25277_25349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (41))){
var inst_25200 = (state_25241[(25)]);
var inst_25216 = (state_25241[(2)]);
var inst_25217 = cljs.core.next.call(null,inst_25200);
var inst_25181 = inst_25217;
var inst_25182 = null;
var inst_25183 = (0);
var inst_25184 = (0);
var state_25241__$1 = (function (){var statearr_25278 = state_25241;
(statearr_25278[(27)] = inst_25216);

(statearr_25278[(20)] = inst_25181);

(statearr_25278[(9)] = inst_25184);

(statearr_25278[(10)] = inst_25182);

(statearr_25278[(21)] = inst_25183);

return statearr_25278;
})();
var statearr_25279_25350 = state_25241__$1;
(statearr_25279_25350[(2)] = null);

(statearr_25279_25350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (43))){
var state_25241__$1 = state_25241;
var statearr_25280_25351 = state_25241__$1;
(statearr_25280_25351[(2)] = null);

(statearr_25280_25351[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (29))){
var inst_25225 = (state_25241[(2)]);
var state_25241__$1 = state_25241;
var statearr_25281_25352 = state_25241__$1;
(statearr_25281_25352[(2)] = inst_25225);

(statearr_25281_25352[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (44))){
var inst_25234 = (state_25241[(2)]);
var state_25241__$1 = (function (){var statearr_25282 = state_25241;
(statearr_25282[(28)] = inst_25234);

return statearr_25282;
})();
var statearr_25283_25353 = state_25241__$1;
(statearr_25283_25353[(2)] = null);

(statearr_25283_25353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (6))){
var inst_25173 = (state_25241[(29)]);
var inst_25172 = cljs.core.deref.call(null,cs);
var inst_25173__$1 = cljs.core.keys.call(null,inst_25172);
var inst_25174 = cljs.core.count.call(null,inst_25173__$1);
var inst_25175 = cljs.core.reset_BANG_.call(null,dctr,inst_25174);
var inst_25180 = cljs.core.seq.call(null,inst_25173__$1);
var inst_25181 = inst_25180;
var inst_25182 = null;
var inst_25183 = (0);
var inst_25184 = (0);
var state_25241__$1 = (function (){var statearr_25284 = state_25241;
(statearr_25284[(20)] = inst_25181);

(statearr_25284[(29)] = inst_25173__$1);

(statearr_25284[(9)] = inst_25184);

(statearr_25284[(30)] = inst_25175);

(statearr_25284[(10)] = inst_25182);

(statearr_25284[(21)] = inst_25183);

return statearr_25284;
})();
var statearr_25285_25354 = state_25241__$1;
(statearr_25285_25354[(2)] = null);

(statearr_25285_25354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (28))){
var inst_25181 = (state_25241[(20)]);
var inst_25200 = (state_25241[(25)]);
var inst_25200__$1 = cljs.core.seq.call(null,inst_25181);
var state_25241__$1 = (function (){var statearr_25286 = state_25241;
(statearr_25286[(25)] = inst_25200__$1);

return statearr_25286;
})();
if(inst_25200__$1){
var statearr_25287_25355 = state_25241__$1;
(statearr_25287_25355[(1)] = (33));

} else {
var statearr_25288_25356 = state_25241__$1;
(statearr_25288_25356[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (25))){
var inst_25184 = (state_25241[(9)]);
var inst_25183 = (state_25241[(21)]);
var inst_25186 = (inst_25184 < inst_25183);
var inst_25187 = inst_25186;
var state_25241__$1 = state_25241;
if(cljs.core.truth_(inst_25187)){
var statearr_25289_25357 = state_25241__$1;
(statearr_25289_25357[(1)] = (27));

} else {
var statearr_25290_25358 = state_25241__$1;
(statearr_25290_25358[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (34))){
var state_25241__$1 = state_25241;
var statearr_25291_25359 = state_25241__$1;
(statearr_25291_25359[(2)] = null);

(statearr_25291_25359[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (17))){
var state_25241__$1 = state_25241;
var statearr_25292_25360 = state_25241__$1;
(statearr_25292_25360[(2)] = null);

(statearr_25292_25360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (3))){
var inst_25239 = (state_25241[(2)]);
var state_25241__$1 = state_25241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25241__$1,inst_25239);
} else {
if((state_val_25242 === (12))){
var inst_25168 = (state_25241[(2)]);
var state_25241__$1 = state_25241;
var statearr_25293_25361 = state_25241__$1;
(statearr_25293_25361[(2)] = inst_25168);

(statearr_25293_25361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (2))){
var state_25241__$1 = state_25241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25241__$1,(4),ch);
} else {
if((state_val_25242 === (23))){
var state_25241__$1 = state_25241;
var statearr_25294_25362 = state_25241__$1;
(statearr_25294_25362[(2)] = null);

(statearr_25294_25362[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (35))){
var inst_25223 = (state_25241[(2)]);
var state_25241__$1 = state_25241;
var statearr_25295_25363 = state_25241__$1;
(statearr_25295_25363[(2)] = inst_25223);

(statearr_25295_25363[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (19))){
var inst_25142 = (state_25241[(7)]);
var inst_25146 = cljs.core.chunk_first.call(null,inst_25142);
var inst_25147 = cljs.core.chunk_rest.call(null,inst_25142);
var inst_25148 = cljs.core.count.call(null,inst_25146);
var inst_25122 = inst_25147;
var inst_25123 = inst_25146;
var inst_25124 = inst_25148;
var inst_25125 = (0);
var state_25241__$1 = (function (){var statearr_25296 = state_25241;
(statearr_25296[(14)] = inst_25124);

(statearr_25296[(15)] = inst_25125);

(statearr_25296[(16)] = inst_25123);

(statearr_25296[(17)] = inst_25122);

return statearr_25296;
})();
var statearr_25297_25364 = state_25241__$1;
(statearr_25297_25364[(2)] = null);

(statearr_25297_25364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (11))){
var inst_25142 = (state_25241[(7)]);
var inst_25122 = (state_25241[(17)]);
var inst_25142__$1 = cljs.core.seq.call(null,inst_25122);
var state_25241__$1 = (function (){var statearr_25298 = state_25241;
(statearr_25298[(7)] = inst_25142__$1);

return statearr_25298;
})();
if(inst_25142__$1){
var statearr_25299_25365 = state_25241__$1;
(statearr_25299_25365[(1)] = (16));

} else {
var statearr_25300_25366 = state_25241__$1;
(statearr_25300_25366[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (9))){
var inst_25170 = (state_25241[(2)]);
var state_25241__$1 = state_25241;
var statearr_25301_25367 = state_25241__$1;
(statearr_25301_25367[(2)] = inst_25170);

(statearr_25301_25367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (5))){
var inst_25120 = cljs.core.deref.call(null,cs);
var inst_25121 = cljs.core.seq.call(null,inst_25120);
var inst_25122 = inst_25121;
var inst_25123 = null;
var inst_25124 = (0);
var inst_25125 = (0);
var state_25241__$1 = (function (){var statearr_25302 = state_25241;
(statearr_25302[(14)] = inst_25124);

(statearr_25302[(15)] = inst_25125);

(statearr_25302[(16)] = inst_25123);

(statearr_25302[(17)] = inst_25122);

return statearr_25302;
})();
var statearr_25303_25368 = state_25241__$1;
(statearr_25303_25368[(2)] = null);

(statearr_25303_25368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (14))){
var state_25241__$1 = state_25241;
var statearr_25304_25369 = state_25241__$1;
(statearr_25304_25369[(2)] = null);

(statearr_25304_25369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (45))){
var inst_25231 = (state_25241[(2)]);
var state_25241__$1 = state_25241;
var statearr_25305_25370 = state_25241__$1;
(statearr_25305_25370[(2)] = inst_25231);

(statearr_25305_25370[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (26))){
var inst_25173 = (state_25241[(29)]);
var inst_25227 = (state_25241[(2)]);
var inst_25228 = cljs.core.seq.call(null,inst_25173);
var state_25241__$1 = (function (){var statearr_25306 = state_25241;
(statearr_25306[(31)] = inst_25227);

return statearr_25306;
})();
if(inst_25228){
var statearr_25307_25371 = state_25241__$1;
(statearr_25307_25371[(1)] = (42));

} else {
var statearr_25308_25372 = state_25241__$1;
(statearr_25308_25372[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (16))){
var inst_25142 = (state_25241[(7)]);
var inst_25144 = cljs.core.chunked_seq_QMARK_.call(null,inst_25142);
var state_25241__$1 = state_25241;
if(inst_25144){
var statearr_25309_25373 = state_25241__$1;
(statearr_25309_25373[(1)] = (19));

} else {
var statearr_25310_25374 = state_25241__$1;
(statearr_25310_25374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (38))){
var inst_25220 = (state_25241[(2)]);
var state_25241__$1 = state_25241;
var statearr_25311_25375 = state_25241__$1;
(statearr_25311_25375[(2)] = inst_25220);

(statearr_25311_25375[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (30))){
var state_25241__$1 = state_25241;
var statearr_25312_25376 = state_25241__$1;
(statearr_25312_25376[(2)] = null);

(statearr_25312_25376[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (10))){
var inst_25125 = (state_25241[(15)]);
var inst_25123 = (state_25241[(16)]);
var inst_25131 = cljs.core._nth.call(null,inst_25123,inst_25125);
var inst_25132 = cljs.core.nth.call(null,inst_25131,(0),null);
var inst_25133 = cljs.core.nth.call(null,inst_25131,(1),null);
var state_25241__$1 = (function (){var statearr_25313 = state_25241;
(statearr_25313[(26)] = inst_25132);

return statearr_25313;
})();
if(cljs.core.truth_(inst_25133)){
var statearr_25314_25377 = state_25241__$1;
(statearr_25314_25377[(1)] = (13));

} else {
var statearr_25315_25378 = state_25241__$1;
(statearr_25315_25378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (18))){
var inst_25166 = (state_25241[(2)]);
var state_25241__$1 = state_25241;
var statearr_25316_25379 = state_25241__$1;
(statearr_25316_25379[(2)] = inst_25166);

(statearr_25316_25379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (42))){
var state_25241__$1 = state_25241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25241__$1,(45),dchan);
} else {
if((state_val_25242 === (37))){
var inst_25113 = (state_25241[(12)]);
var inst_25209 = (state_25241[(23)]);
var inst_25200 = (state_25241[(25)]);
var inst_25209__$1 = cljs.core.first.call(null,inst_25200);
var inst_25210 = cljs.core.async.put_BANG_.call(null,inst_25209__$1,inst_25113,done);
var state_25241__$1 = (function (){var statearr_25317 = state_25241;
(statearr_25317[(23)] = inst_25209__$1);

return statearr_25317;
})();
if(cljs.core.truth_(inst_25210)){
var statearr_25318_25380 = state_25241__$1;
(statearr_25318_25380[(1)] = (39));

} else {
var statearr_25319_25381 = state_25241__$1;
(statearr_25319_25381[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25242 === (8))){
var inst_25124 = (state_25241[(14)]);
var inst_25125 = (state_25241[(15)]);
var inst_25127 = (inst_25125 < inst_25124);
var inst_25128 = inst_25127;
var state_25241__$1 = state_25241;
if(cljs.core.truth_(inst_25128)){
var statearr_25320_25382 = state_25241__$1;
(statearr_25320_25382[(1)] = (10));

} else {
var statearr_25321_25383 = state_25241__$1;
(statearr_25321_25383[(1)] = (11));

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
});})(c__24022__auto___25329,cs,m,dchan,dctr,done))
;
return ((function (switch__23910__auto__,c__24022__auto___25329,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23911__auto__ = null;
var cljs$core$async$mult_$_state_machine__23911__auto____0 = (function (){
var statearr_25325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25325[(0)] = cljs$core$async$mult_$_state_machine__23911__auto__);

(statearr_25325[(1)] = (1));

return statearr_25325;
});
var cljs$core$async$mult_$_state_machine__23911__auto____1 = (function (state_25241){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_25241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e25326){if((e25326 instanceof Object)){
var ex__23914__auto__ = e25326;
var statearr_25327_25384 = state_25241;
(statearr_25327_25384[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25385 = state_25241;
state_25241 = G__25385;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23911__auto__ = function(state_25241){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23911__auto____1.call(this,state_25241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23911__auto____0;
cljs$core$async$mult_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23911__auto____1;
return cljs$core$async$mult_$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___25329,cs,m,dchan,dctr,done))
})();
var state__24024__auto__ = (function (){var statearr_25328 = f__24023__auto__.call(null);
(statearr_25328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___25329);

return statearr_25328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___25329,cs,m,dchan,dctr,done))
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
var args25386 = [];
var len__17809__auto___25389 = arguments.length;
var i__17810__auto___25390 = (0);
while(true){
if((i__17810__auto___25390 < len__17809__auto___25389)){
args25386.push((arguments[i__17810__auto___25390]));

var G__25391 = (i__17810__auto___25390 + (1));
i__17810__auto___25390 = G__25391;
continue;
} else {
}
break;
}

var G__25388 = args25386.length;
switch (G__25388) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25386.length)].join('')));

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
var len__17809__auto___25403 = arguments.length;
var i__17810__auto___25404 = (0);
while(true){
if((i__17810__auto___25404 < len__17809__auto___25403)){
args__17816__auto__.push((arguments[i__17810__auto___25404]));

var G__25405 = (i__17810__auto___25404 + (1));
i__17810__auto___25404 = G__25405;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25397){
var map__25398 = p__25397;
var map__25398__$1 = ((((!((map__25398 == null)))?((((map__25398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25398):map__25398);
var opts = map__25398__$1;
var statearr_25400_25406 = state;
(statearr_25400_25406[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25398,map__25398__$1,opts){
return (function (val){
var statearr_25401_25407 = state;
(statearr_25401_25407[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25398,map__25398__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25402_25408 = state;
(statearr_25402_25408[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25393){
var G__25394 = cljs.core.first.call(null,seq25393);
var seq25393__$1 = cljs.core.next.call(null,seq25393);
var G__25395 = cljs.core.first.call(null,seq25393__$1);
var seq25393__$2 = cljs.core.next.call(null,seq25393__$1);
var G__25396 = cljs.core.first.call(null,seq25393__$2);
var seq25393__$3 = cljs.core.next.call(null,seq25393__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25394,G__25395,G__25396,seq25393__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25572 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25573){
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
this.meta25573 = meta25573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25574,meta25573__$1){
var self__ = this;
var _25574__$1 = this;
return (new cljs.core.async.t_cljs$core$async25572(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25573__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25574){
var self__ = this;
var _25574__$1 = this;
return self__.meta25573;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25572.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25573","meta25573",-479512866,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25572";

cljs.core.async.t_cljs$core$async25572.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25572");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25572 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25572(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25573){
return (new cljs.core.async.t_cljs$core$async25572(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25573));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25572(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24022__auto___25735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___25735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___25735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25672){
var state_val_25673 = (state_25672[(1)]);
if((state_val_25673 === (7))){
var inst_25590 = (state_25672[(2)]);
var state_25672__$1 = state_25672;
var statearr_25674_25736 = state_25672__$1;
(statearr_25674_25736[(2)] = inst_25590);

(statearr_25674_25736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (20))){
var inst_25602 = (state_25672[(7)]);
var state_25672__$1 = state_25672;
var statearr_25675_25737 = state_25672__$1;
(statearr_25675_25737[(2)] = inst_25602);

(statearr_25675_25737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (27))){
var state_25672__$1 = state_25672;
var statearr_25676_25738 = state_25672__$1;
(statearr_25676_25738[(2)] = null);

(statearr_25676_25738[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (1))){
var inst_25578 = (state_25672[(8)]);
var inst_25578__$1 = calc_state.call(null);
var inst_25580 = (inst_25578__$1 == null);
var inst_25581 = cljs.core.not.call(null,inst_25580);
var state_25672__$1 = (function (){var statearr_25677 = state_25672;
(statearr_25677[(8)] = inst_25578__$1);

return statearr_25677;
})();
if(inst_25581){
var statearr_25678_25739 = state_25672__$1;
(statearr_25678_25739[(1)] = (2));

} else {
var statearr_25679_25740 = state_25672__$1;
(statearr_25679_25740[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (24))){
var inst_25632 = (state_25672[(9)]);
var inst_25646 = (state_25672[(10)]);
var inst_25625 = (state_25672[(11)]);
var inst_25646__$1 = inst_25625.call(null,inst_25632);
var state_25672__$1 = (function (){var statearr_25680 = state_25672;
(statearr_25680[(10)] = inst_25646__$1);

return statearr_25680;
})();
if(cljs.core.truth_(inst_25646__$1)){
var statearr_25681_25741 = state_25672__$1;
(statearr_25681_25741[(1)] = (29));

} else {
var statearr_25682_25742 = state_25672__$1;
(statearr_25682_25742[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (4))){
var inst_25593 = (state_25672[(2)]);
var state_25672__$1 = state_25672;
if(cljs.core.truth_(inst_25593)){
var statearr_25683_25743 = state_25672__$1;
(statearr_25683_25743[(1)] = (8));

} else {
var statearr_25684_25744 = state_25672__$1;
(statearr_25684_25744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (15))){
var inst_25619 = (state_25672[(2)]);
var state_25672__$1 = state_25672;
if(cljs.core.truth_(inst_25619)){
var statearr_25685_25745 = state_25672__$1;
(statearr_25685_25745[(1)] = (19));

} else {
var statearr_25686_25746 = state_25672__$1;
(statearr_25686_25746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (21))){
var inst_25624 = (state_25672[(12)]);
var inst_25624__$1 = (state_25672[(2)]);
var inst_25625 = cljs.core.get.call(null,inst_25624__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25626 = cljs.core.get.call(null,inst_25624__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25627 = cljs.core.get.call(null,inst_25624__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25672__$1 = (function (){var statearr_25687 = state_25672;
(statearr_25687[(12)] = inst_25624__$1);

(statearr_25687[(13)] = inst_25626);

(statearr_25687[(11)] = inst_25625);

return statearr_25687;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25672__$1,(22),inst_25627);
} else {
if((state_val_25673 === (31))){
var inst_25654 = (state_25672[(2)]);
var state_25672__$1 = state_25672;
if(cljs.core.truth_(inst_25654)){
var statearr_25688_25747 = state_25672__$1;
(statearr_25688_25747[(1)] = (32));

} else {
var statearr_25689_25748 = state_25672__$1;
(statearr_25689_25748[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (32))){
var inst_25631 = (state_25672[(14)]);
var state_25672__$1 = state_25672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25672__$1,(35),out,inst_25631);
} else {
if((state_val_25673 === (33))){
var inst_25624 = (state_25672[(12)]);
var inst_25602 = inst_25624;
var state_25672__$1 = (function (){var statearr_25690 = state_25672;
(statearr_25690[(7)] = inst_25602);

return statearr_25690;
})();
var statearr_25691_25749 = state_25672__$1;
(statearr_25691_25749[(2)] = null);

(statearr_25691_25749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (13))){
var inst_25602 = (state_25672[(7)]);
var inst_25609 = inst_25602.cljs$lang$protocol_mask$partition0$;
var inst_25610 = (inst_25609 & (64));
var inst_25611 = inst_25602.cljs$core$ISeq$;
var inst_25612 = (inst_25610) || (inst_25611);
var state_25672__$1 = state_25672;
if(cljs.core.truth_(inst_25612)){
var statearr_25692_25750 = state_25672__$1;
(statearr_25692_25750[(1)] = (16));

} else {
var statearr_25693_25751 = state_25672__$1;
(statearr_25693_25751[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (22))){
var inst_25631 = (state_25672[(14)]);
var inst_25632 = (state_25672[(9)]);
var inst_25630 = (state_25672[(2)]);
var inst_25631__$1 = cljs.core.nth.call(null,inst_25630,(0),null);
var inst_25632__$1 = cljs.core.nth.call(null,inst_25630,(1),null);
var inst_25633 = (inst_25631__$1 == null);
var inst_25634 = cljs.core._EQ_.call(null,inst_25632__$1,change);
var inst_25635 = (inst_25633) || (inst_25634);
var state_25672__$1 = (function (){var statearr_25694 = state_25672;
(statearr_25694[(14)] = inst_25631__$1);

(statearr_25694[(9)] = inst_25632__$1);

return statearr_25694;
})();
if(cljs.core.truth_(inst_25635)){
var statearr_25695_25752 = state_25672__$1;
(statearr_25695_25752[(1)] = (23));

} else {
var statearr_25696_25753 = state_25672__$1;
(statearr_25696_25753[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (36))){
var inst_25624 = (state_25672[(12)]);
var inst_25602 = inst_25624;
var state_25672__$1 = (function (){var statearr_25697 = state_25672;
(statearr_25697[(7)] = inst_25602);

return statearr_25697;
})();
var statearr_25698_25754 = state_25672__$1;
(statearr_25698_25754[(2)] = null);

(statearr_25698_25754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (29))){
var inst_25646 = (state_25672[(10)]);
var state_25672__$1 = state_25672;
var statearr_25699_25755 = state_25672__$1;
(statearr_25699_25755[(2)] = inst_25646);

(statearr_25699_25755[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (6))){
var state_25672__$1 = state_25672;
var statearr_25700_25756 = state_25672__$1;
(statearr_25700_25756[(2)] = false);

(statearr_25700_25756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (28))){
var inst_25642 = (state_25672[(2)]);
var inst_25643 = calc_state.call(null);
var inst_25602 = inst_25643;
var state_25672__$1 = (function (){var statearr_25701 = state_25672;
(statearr_25701[(7)] = inst_25602);

(statearr_25701[(15)] = inst_25642);

return statearr_25701;
})();
var statearr_25702_25757 = state_25672__$1;
(statearr_25702_25757[(2)] = null);

(statearr_25702_25757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (25))){
var inst_25668 = (state_25672[(2)]);
var state_25672__$1 = state_25672;
var statearr_25703_25758 = state_25672__$1;
(statearr_25703_25758[(2)] = inst_25668);

(statearr_25703_25758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (34))){
var inst_25666 = (state_25672[(2)]);
var state_25672__$1 = state_25672;
var statearr_25704_25759 = state_25672__$1;
(statearr_25704_25759[(2)] = inst_25666);

(statearr_25704_25759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (17))){
var state_25672__$1 = state_25672;
var statearr_25705_25760 = state_25672__$1;
(statearr_25705_25760[(2)] = false);

(statearr_25705_25760[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (3))){
var state_25672__$1 = state_25672;
var statearr_25706_25761 = state_25672__$1;
(statearr_25706_25761[(2)] = false);

(statearr_25706_25761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (12))){
var inst_25670 = (state_25672[(2)]);
var state_25672__$1 = state_25672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25672__$1,inst_25670);
} else {
if((state_val_25673 === (2))){
var inst_25578 = (state_25672[(8)]);
var inst_25583 = inst_25578.cljs$lang$protocol_mask$partition0$;
var inst_25584 = (inst_25583 & (64));
var inst_25585 = inst_25578.cljs$core$ISeq$;
var inst_25586 = (inst_25584) || (inst_25585);
var state_25672__$1 = state_25672;
if(cljs.core.truth_(inst_25586)){
var statearr_25707_25762 = state_25672__$1;
(statearr_25707_25762[(1)] = (5));

} else {
var statearr_25708_25763 = state_25672__$1;
(statearr_25708_25763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (23))){
var inst_25631 = (state_25672[(14)]);
var inst_25637 = (inst_25631 == null);
var state_25672__$1 = state_25672;
if(cljs.core.truth_(inst_25637)){
var statearr_25709_25764 = state_25672__$1;
(statearr_25709_25764[(1)] = (26));

} else {
var statearr_25710_25765 = state_25672__$1;
(statearr_25710_25765[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (35))){
var inst_25657 = (state_25672[(2)]);
var state_25672__$1 = state_25672;
if(cljs.core.truth_(inst_25657)){
var statearr_25711_25766 = state_25672__$1;
(statearr_25711_25766[(1)] = (36));

} else {
var statearr_25712_25767 = state_25672__$1;
(statearr_25712_25767[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (19))){
var inst_25602 = (state_25672[(7)]);
var inst_25621 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25602);
var state_25672__$1 = state_25672;
var statearr_25713_25768 = state_25672__$1;
(statearr_25713_25768[(2)] = inst_25621);

(statearr_25713_25768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (11))){
var inst_25602 = (state_25672[(7)]);
var inst_25606 = (inst_25602 == null);
var inst_25607 = cljs.core.not.call(null,inst_25606);
var state_25672__$1 = state_25672;
if(inst_25607){
var statearr_25714_25769 = state_25672__$1;
(statearr_25714_25769[(1)] = (13));

} else {
var statearr_25715_25770 = state_25672__$1;
(statearr_25715_25770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (9))){
var inst_25578 = (state_25672[(8)]);
var state_25672__$1 = state_25672;
var statearr_25716_25771 = state_25672__$1;
(statearr_25716_25771[(2)] = inst_25578);

(statearr_25716_25771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (5))){
var state_25672__$1 = state_25672;
var statearr_25717_25772 = state_25672__$1;
(statearr_25717_25772[(2)] = true);

(statearr_25717_25772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (14))){
var state_25672__$1 = state_25672;
var statearr_25718_25773 = state_25672__$1;
(statearr_25718_25773[(2)] = false);

(statearr_25718_25773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (26))){
var inst_25632 = (state_25672[(9)]);
var inst_25639 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25632);
var state_25672__$1 = state_25672;
var statearr_25719_25774 = state_25672__$1;
(statearr_25719_25774[(2)] = inst_25639);

(statearr_25719_25774[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (16))){
var state_25672__$1 = state_25672;
var statearr_25720_25775 = state_25672__$1;
(statearr_25720_25775[(2)] = true);

(statearr_25720_25775[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (38))){
var inst_25662 = (state_25672[(2)]);
var state_25672__$1 = state_25672;
var statearr_25721_25776 = state_25672__$1;
(statearr_25721_25776[(2)] = inst_25662);

(statearr_25721_25776[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (30))){
var inst_25626 = (state_25672[(13)]);
var inst_25632 = (state_25672[(9)]);
var inst_25625 = (state_25672[(11)]);
var inst_25649 = cljs.core.empty_QMARK_.call(null,inst_25625);
var inst_25650 = inst_25626.call(null,inst_25632);
var inst_25651 = cljs.core.not.call(null,inst_25650);
var inst_25652 = (inst_25649) && (inst_25651);
var state_25672__$1 = state_25672;
var statearr_25722_25777 = state_25672__$1;
(statearr_25722_25777[(2)] = inst_25652);

(statearr_25722_25777[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (10))){
var inst_25578 = (state_25672[(8)]);
var inst_25598 = (state_25672[(2)]);
var inst_25599 = cljs.core.get.call(null,inst_25598,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25600 = cljs.core.get.call(null,inst_25598,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25601 = cljs.core.get.call(null,inst_25598,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25602 = inst_25578;
var state_25672__$1 = (function (){var statearr_25723 = state_25672;
(statearr_25723[(7)] = inst_25602);

(statearr_25723[(16)] = inst_25600);

(statearr_25723[(17)] = inst_25601);

(statearr_25723[(18)] = inst_25599);

return statearr_25723;
})();
var statearr_25724_25778 = state_25672__$1;
(statearr_25724_25778[(2)] = null);

(statearr_25724_25778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (18))){
var inst_25616 = (state_25672[(2)]);
var state_25672__$1 = state_25672;
var statearr_25725_25779 = state_25672__$1;
(statearr_25725_25779[(2)] = inst_25616);

(statearr_25725_25779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (37))){
var state_25672__$1 = state_25672;
var statearr_25726_25780 = state_25672__$1;
(statearr_25726_25780[(2)] = null);

(statearr_25726_25780[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25673 === (8))){
var inst_25578 = (state_25672[(8)]);
var inst_25595 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25578);
var state_25672__$1 = state_25672;
var statearr_25727_25781 = state_25672__$1;
(statearr_25727_25781[(2)] = inst_25595);

(statearr_25727_25781[(1)] = (10));


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
});})(c__24022__auto___25735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23910__auto__,c__24022__auto___25735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23911__auto__ = null;
var cljs$core$async$mix_$_state_machine__23911__auto____0 = (function (){
var statearr_25731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25731[(0)] = cljs$core$async$mix_$_state_machine__23911__auto__);

(statearr_25731[(1)] = (1));

return statearr_25731;
});
var cljs$core$async$mix_$_state_machine__23911__auto____1 = (function (state_25672){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_25672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e25732){if((e25732 instanceof Object)){
var ex__23914__auto__ = e25732;
var statearr_25733_25782 = state_25672;
(statearr_25733_25782[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25783 = state_25672;
state_25672 = G__25783;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23911__auto__ = function(state_25672){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23911__auto____1.call(this,state_25672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23911__auto____0;
cljs$core$async$mix_$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23911__auto____1;
return cljs$core$async$mix_$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___25735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24024__auto__ = (function (){var statearr_25734 = f__24023__auto__.call(null);
(statearr_25734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___25735);

return statearr_25734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___25735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25784 = [];
var len__17809__auto___25787 = arguments.length;
var i__17810__auto___25788 = (0);
while(true){
if((i__17810__auto___25788 < len__17809__auto___25787)){
args25784.push((arguments[i__17810__auto___25788]));

var G__25789 = (i__17810__auto___25788 + (1));
i__17810__auto___25788 = G__25789;
continue;
} else {
}
break;
}

var G__25786 = args25784.length;
switch (G__25786) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25784.length)].join('')));

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
var args25792 = [];
var len__17809__auto___25917 = arguments.length;
var i__17810__auto___25918 = (0);
while(true){
if((i__17810__auto___25918 < len__17809__auto___25917)){
args25792.push((arguments[i__17810__auto___25918]));

var G__25919 = (i__17810__auto___25918 + (1));
i__17810__auto___25918 = G__25919;
continue;
} else {
}
break;
}

var G__25794 = args25792.length;
switch (G__25794) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25792.length)].join('')));

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
return (function (p1__25791_SHARP_){
if(cljs.core.truth_(p1__25791_SHARP_.call(null,topic))){
return p1__25791_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25791_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25795 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25796){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25796 = meta25796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25797,meta25796__$1){
var self__ = this;
var _25797__$1 = this;
return (new cljs.core.async.t_cljs$core$async25795(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25796__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25797){
var self__ = this;
var _25797__$1 = this;
return self__.meta25796;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25795.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25795.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25796","meta25796",-614663461,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25795";

cljs.core.async.t_cljs$core$async25795.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25795");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25795 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25795(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25796){
return (new cljs.core.async.t_cljs$core$async25795(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25796));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25795(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24022__auto___25921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___25921,mults,ensure_mult,p){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___25921,mults,ensure_mult,p){
return (function (state_25869){
var state_val_25870 = (state_25869[(1)]);
if((state_val_25870 === (7))){
var inst_25865 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
var statearr_25871_25922 = state_25869__$1;
(statearr_25871_25922[(2)] = inst_25865);

(statearr_25871_25922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (20))){
var state_25869__$1 = state_25869;
var statearr_25872_25923 = state_25869__$1;
(statearr_25872_25923[(2)] = null);

(statearr_25872_25923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (1))){
var state_25869__$1 = state_25869;
var statearr_25873_25924 = state_25869__$1;
(statearr_25873_25924[(2)] = null);

(statearr_25873_25924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (24))){
var inst_25848 = (state_25869[(7)]);
var inst_25857 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25848);
var state_25869__$1 = state_25869;
var statearr_25874_25925 = state_25869__$1;
(statearr_25874_25925[(2)] = inst_25857);

(statearr_25874_25925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (4))){
var inst_25800 = (state_25869[(8)]);
var inst_25800__$1 = (state_25869[(2)]);
var inst_25801 = (inst_25800__$1 == null);
var state_25869__$1 = (function (){var statearr_25875 = state_25869;
(statearr_25875[(8)] = inst_25800__$1);

return statearr_25875;
})();
if(cljs.core.truth_(inst_25801)){
var statearr_25876_25926 = state_25869__$1;
(statearr_25876_25926[(1)] = (5));

} else {
var statearr_25877_25927 = state_25869__$1;
(statearr_25877_25927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (15))){
var inst_25842 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
var statearr_25878_25928 = state_25869__$1;
(statearr_25878_25928[(2)] = inst_25842);

(statearr_25878_25928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (21))){
var inst_25862 = (state_25869[(2)]);
var state_25869__$1 = (function (){var statearr_25879 = state_25869;
(statearr_25879[(9)] = inst_25862);

return statearr_25879;
})();
var statearr_25880_25929 = state_25869__$1;
(statearr_25880_25929[(2)] = null);

(statearr_25880_25929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (13))){
var inst_25824 = (state_25869[(10)]);
var inst_25826 = cljs.core.chunked_seq_QMARK_.call(null,inst_25824);
var state_25869__$1 = state_25869;
if(inst_25826){
var statearr_25881_25930 = state_25869__$1;
(statearr_25881_25930[(1)] = (16));

} else {
var statearr_25882_25931 = state_25869__$1;
(statearr_25882_25931[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (22))){
var inst_25854 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
if(cljs.core.truth_(inst_25854)){
var statearr_25883_25932 = state_25869__$1;
(statearr_25883_25932[(1)] = (23));

} else {
var statearr_25884_25933 = state_25869__$1;
(statearr_25884_25933[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (6))){
var inst_25800 = (state_25869[(8)]);
var inst_25848 = (state_25869[(7)]);
var inst_25850 = (state_25869[(11)]);
var inst_25848__$1 = topic_fn.call(null,inst_25800);
var inst_25849 = cljs.core.deref.call(null,mults);
var inst_25850__$1 = cljs.core.get.call(null,inst_25849,inst_25848__$1);
var state_25869__$1 = (function (){var statearr_25885 = state_25869;
(statearr_25885[(7)] = inst_25848__$1);

(statearr_25885[(11)] = inst_25850__$1);

return statearr_25885;
})();
if(cljs.core.truth_(inst_25850__$1)){
var statearr_25886_25934 = state_25869__$1;
(statearr_25886_25934[(1)] = (19));

} else {
var statearr_25887_25935 = state_25869__$1;
(statearr_25887_25935[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (25))){
var inst_25859 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
var statearr_25888_25936 = state_25869__$1;
(statearr_25888_25936[(2)] = inst_25859);

(statearr_25888_25936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (17))){
var inst_25824 = (state_25869[(10)]);
var inst_25833 = cljs.core.first.call(null,inst_25824);
var inst_25834 = cljs.core.async.muxch_STAR_.call(null,inst_25833);
var inst_25835 = cljs.core.async.close_BANG_.call(null,inst_25834);
var inst_25836 = cljs.core.next.call(null,inst_25824);
var inst_25810 = inst_25836;
var inst_25811 = null;
var inst_25812 = (0);
var inst_25813 = (0);
var state_25869__$1 = (function (){var statearr_25889 = state_25869;
(statearr_25889[(12)] = inst_25811);

(statearr_25889[(13)] = inst_25810);

(statearr_25889[(14)] = inst_25812);

(statearr_25889[(15)] = inst_25813);

(statearr_25889[(16)] = inst_25835);

return statearr_25889;
})();
var statearr_25890_25937 = state_25869__$1;
(statearr_25890_25937[(2)] = null);

(statearr_25890_25937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (3))){
var inst_25867 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25869__$1,inst_25867);
} else {
if((state_val_25870 === (12))){
var inst_25844 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
var statearr_25891_25938 = state_25869__$1;
(statearr_25891_25938[(2)] = inst_25844);

(statearr_25891_25938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (2))){
var state_25869__$1 = state_25869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25869__$1,(4),ch);
} else {
if((state_val_25870 === (23))){
var state_25869__$1 = state_25869;
var statearr_25892_25939 = state_25869__$1;
(statearr_25892_25939[(2)] = null);

(statearr_25892_25939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (19))){
var inst_25800 = (state_25869[(8)]);
var inst_25850 = (state_25869[(11)]);
var inst_25852 = cljs.core.async.muxch_STAR_.call(null,inst_25850);
var state_25869__$1 = state_25869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25869__$1,(22),inst_25852,inst_25800);
} else {
if((state_val_25870 === (11))){
var inst_25810 = (state_25869[(13)]);
var inst_25824 = (state_25869[(10)]);
var inst_25824__$1 = cljs.core.seq.call(null,inst_25810);
var state_25869__$1 = (function (){var statearr_25893 = state_25869;
(statearr_25893[(10)] = inst_25824__$1);

return statearr_25893;
})();
if(inst_25824__$1){
var statearr_25894_25940 = state_25869__$1;
(statearr_25894_25940[(1)] = (13));

} else {
var statearr_25895_25941 = state_25869__$1;
(statearr_25895_25941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (9))){
var inst_25846 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
var statearr_25896_25942 = state_25869__$1;
(statearr_25896_25942[(2)] = inst_25846);

(statearr_25896_25942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (5))){
var inst_25807 = cljs.core.deref.call(null,mults);
var inst_25808 = cljs.core.vals.call(null,inst_25807);
var inst_25809 = cljs.core.seq.call(null,inst_25808);
var inst_25810 = inst_25809;
var inst_25811 = null;
var inst_25812 = (0);
var inst_25813 = (0);
var state_25869__$1 = (function (){var statearr_25897 = state_25869;
(statearr_25897[(12)] = inst_25811);

(statearr_25897[(13)] = inst_25810);

(statearr_25897[(14)] = inst_25812);

(statearr_25897[(15)] = inst_25813);

return statearr_25897;
})();
var statearr_25898_25943 = state_25869__$1;
(statearr_25898_25943[(2)] = null);

(statearr_25898_25943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (14))){
var state_25869__$1 = state_25869;
var statearr_25902_25944 = state_25869__$1;
(statearr_25902_25944[(2)] = null);

(statearr_25902_25944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (16))){
var inst_25824 = (state_25869[(10)]);
var inst_25828 = cljs.core.chunk_first.call(null,inst_25824);
var inst_25829 = cljs.core.chunk_rest.call(null,inst_25824);
var inst_25830 = cljs.core.count.call(null,inst_25828);
var inst_25810 = inst_25829;
var inst_25811 = inst_25828;
var inst_25812 = inst_25830;
var inst_25813 = (0);
var state_25869__$1 = (function (){var statearr_25903 = state_25869;
(statearr_25903[(12)] = inst_25811);

(statearr_25903[(13)] = inst_25810);

(statearr_25903[(14)] = inst_25812);

(statearr_25903[(15)] = inst_25813);

return statearr_25903;
})();
var statearr_25904_25945 = state_25869__$1;
(statearr_25904_25945[(2)] = null);

(statearr_25904_25945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (10))){
var inst_25811 = (state_25869[(12)]);
var inst_25810 = (state_25869[(13)]);
var inst_25812 = (state_25869[(14)]);
var inst_25813 = (state_25869[(15)]);
var inst_25818 = cljs.core._nth.call(null,inst_25811,inst_25813);
var inst_25819 = cljs.core.async.muxch_STAR_.call(null,inst_25818);
var inst_25820 = cljs.core.async.close_BANG_.call(null,inst_25819);
var inst_25821 = (inst_25813 + (1));
var tmp25899 = inst_25811;
var tmp25900 = inst_25810;
var tmp25901 = inst_25812;
var inst_25810__$1 = tmp25900;
var inst_25811__$1 = tmp25899;
var inst_25812__$1 = tmp25901;
var inst_25813__$1 = inst_25821;
var state_25869__$1 = (function (){var statearr_25905 = state_25869;
(statearr_25905[(12)] = inst_25811__$1);

(statearr_25905[(13)] = inst_25810__$1);

(statearr_25905[(14)] = inst_25812__$1);

(statearr_25905[(15)] = inst_25813__$1);

(statearr_25905[(17)] = inst_25820);

return statearr_25905;
})();
var statearr_25906_25946 = state_25869__$1;
(statearr_25906_25946[(2)] = null);

(statearr_25906_25946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (18))){
var inst_25839 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
var statearr_25907_25947 = state_25869__$1;
(statearr_25907_25947[(2)] = inst_25839);

(statearr_25907_25947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (8))){
var inst_25812 = (state_25869[(14)]);
var inst_25813 = (state_25869[(15)]);
var inst_25815 = (inst_25813 < inst_25812);
var inst_25816 = inst_25815;
var state_25869__$1 = state_25869;
if(cljs.core.truth_(inst_25816)){
var statearr_25908_25948 = state_25869__$1;
(statearr_25908_25948[(1)] = (10));

} else {
var statearr_25909_25949 = state_25869__$1;
(statearr_25909_25949[(1)] = (11));

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
});})(c__24022__auto___25921,mults,ensure_mult,p))
;
return ((function (switch__23910__auto__,c__24022__auto___25921,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23911__auto__ = null;
var cljs$core$async$state_machine__23911__auto____0 = (function (){
var statearr_25913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25913[(0)] = cljs$core$async$state_machine__23911__auto__);

(statearr_25913[(1)] = (1));

return statearr_25913;
});
var cljs$core$async$state_machine__23911__auto____1 = (function (state_25869){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_25869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e25914){if((e25914 instanceof Object)){
var ex__23914__auto__ = e25914;
var statearr_25915_25950 = state_25869;
(statearr_25915_25950[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25951 = state_25869;
state_25869 = G__25951;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$state_machine__23911__auto__ = function(state_25869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23911__auto____1.call(this,state_25869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23911__auto____0;
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23911__auto____1;
return cljs$core$async$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___25921,mults,ensure_mult,p))
})();
var state__24024__auto__ = (function (){var statearr_25916 = f__24023__auto__.call(null);
(statearr_25916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___25921);

return statearr_25916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___25921,mults,ensure_mult,p))
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
var args25952 = [];
var len__17809__auto___25955 = arguments.length;
var i__17810__auto___25956 = (0);
while(true){
if((i__17810__auto___25956 < len__17809__auto___25955)){
args25952.push((arguments[i__17810__auto___25956]));

var G__25957 = (i__17810__auto___25956 + (1));
i__17810__auto___25956 = G__25957;
continue;
} else {
}
break;
}

var G__25954 = args25952.length;
switch (G__25954) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25952.length)].join('')));

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
var args25959 = [];
var len__17809__auto___25962 = arguments.length;
var i__17810__auto___25963 = (0);
while(true){
if((i__17810__auto___25963 < len__17809__auto___25962)){
args25959.push((arguments[i__17810__auto___25963]));

var G__25964 = (i__17810__auto___25963 + (1));
i__17810__auto___25963 = G__25964;
continue;
} else {
}
break;
}

var G__25961 = args25959.length;
switch (G__25961) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25959.length)].join('')));

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
var args25966 = [];
var len__17809__auto___26037 = arguments.length;
var i__17810__auto___26038 = (0);
while(true){
if((i__17810__auto___26038 < len__17809__auto___26037)){
args25966.push((arguments[i__17810__auto___26038]));

var G__26039 = (i__17810__auto___26038 + (1));
i__17810__auto___26038 = G__26039;
continue;
} else {
}
break;
}

var G__25968 = args25966.length;
switch (G__25968) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25966.length)].join('')));

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
var c__24022__auto___26041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___26041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___26041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26007){
var state_val_26008 = (state_26007[(1)]);
if((state_val_26008 === (7))){
var state_26007__$1 = state_26007;
var statearr_26009_26042 = state_26007__$1;
(statearr_26009_26042[(2)] = null);

(statearr_26009_26042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (1))){
var state_26007__$1 = state_26007;
var statearr_26010_26043 = state_26007__$1;
(statearr_26010_26043[(2)] = null);

(statearr_26010_26043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (4))){
var inst_25971 = (state_26007[(7)]);
var inst_25973 = (inst_25971 < cnt);
var state_26007__$1 = state_26007;
if(cljs.core.truth_(inst_25973)){
var statearr_26011_26044 = state_26007__$1;
(statearr_26011_26044[(1)] = (6));

} else {
var statearr_26012_26045 = state_26007__$1;
(statearr_26012_26045[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (15))){
var inst_26003 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26013_26046 = state_26007__$1;
(statearr_26013_26046[(2)] = inst_26003);

(statearr_26013_26046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (13))){
var inst_25996 = cljs.core.async.close_BANG_.call(null,out);
var state_26007__$1 = state_26007;
var statearr_26014_26047 = state_26007__$1;
(statearr_26014_26047[(2)] = inst_25996);

(statearr_26014_26047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (6))){
var state_26007__$1 = state_26007;
var statearr_26015_26048 = state_26007__$1;
(statearr_26015_26048[(2)] = null);

(statearr_26015_26048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (3))){
var inst_26005 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26007__$1,inst_26005);
} else {
if((state_val_26008 === (12))){
var inst_25993 = (state_26007[(8)]);
var inst_25993__$1 = (state_26007[(2)]);
var inst_25994 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25993__$1);
var state_26007__$1 = (function (){var statearr_26016 = state_26007;
(statearr_26016[(8)] = inst_25993__$1);

return statearr_26016;
})();
if(cljs.core.truth_(inst_25994)){
var statearr_26017_26049 = state_26007__$1;
(statearr_26017_26049[(1)] = (13));

} else {
var statearr_26018_26050 = state_26007__$1;
(statearr_26018_26050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (2))){
var inst_25970 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25971 = (0);
var state_26007__$1 = (function (){var statearr_26019 = state_26007;
(statearr_26019[(9)] = inst_25970);

(statearr_26019[(7)] = inst_25971);

return statearr_26019;
})();
var statearr_26020_26051 = state_26007__$1;
(statearr_26020_26051[(2)] = null);

(statearr_26020_26051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (11))){
var inst_25971 = (state_26007[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26007,(10),Object,null,(9));
var inst_25980 = chs__$1.call(null,inst_25971);
var inst_25981 = done.call(null,inst_25971);
var inst_25982 = cljs.core.async.take_BANG_.call(null,inst_25980,inst_25981);
var state_26007__$1 = state_26007;
var statearr_26021_26052 = state_26007__$1;
(statearr_26021_26052[(2)] = inst_25982);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26007__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (9))){
var inst_25971 = (state_26007[(7)]);
var inst_25984 = (state_26007[(2)]);
var inst_25985 = (inst_25971 + (1));
var inst_25971__$1 = inst_25985;
var state_26007__$1 = (function (){var statearr_26022 = state_26007;
(statearr_26022[(10)] = inst_25984);

(statearr_26022[(7)] = inst_25971__$1);

return statearr_26022;
})();
var statearr_26023_26053 = state_26007__$1;
(statearr_26023_26053[(2)] = null);

(statearr_26023_26053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (5))){
var inst_25991 = (state_26007[(2)]);
var state_26007__$1 = (function (){var statearr_26024 = state_26007;
(statearr_26024[(11)] = inst_25991);

return statearr_26024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26007__$1,(12),dchan);
} else {
if((state_val_26008 === (14))){
var inst_25993 = (state_26007[(8)]);
var inst_25998 = cljs.core.apply.call(null,f,inst_25993);
var state_26007__$1 = state_26007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26007__$1,(16),out,inst_25998);
} else {
if((state_val_26008 === (16))){
var inst_26000 = (state_26007[(2)]);
var state_26007__$1 = (function (){var statearr_26025 = state_26007;
(statearr_26025[(12)] = inst_26000);

return statearr_26025;
})();
var statearr_26026_26054 = state_26007__$1;
(statearr_26026_26054[(2)] = null);

(statearr_26026_26054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (10))){
var inst_25975 = (state_26007[(2)]);
var inst_25976 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26007__$1 = (function (){var statearr_26027 = state_26007;
(statearr_26027[(13)] = inst_25975);

return statearr_26027;
})();
var statearr_26028_26055 = state_26007__$1;
(statearr_26028_26055[(2)] = inst_25976);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26007__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26008 === (8))){
var inst_25989 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26029_26056 = state_26007__$1;
(statearr_26029_26056[(2)] = inst_25989);

(statearr_26029_26056[(1)] = (5));


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
});})(c__24022__auto___26041,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23910__auto__,c__24022__auto___26041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23911__auto__ = null;
var cljs$core$async$state_machine__23911__auto____0 = (function (){
var statearr_26033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26033[(0)] = cljs$core$async$state_machine__23911__auto__);

(statearr_26033[(1)] = (1));

return statearr_26033;
});
var cljs$core$async$state_machine__23911__auto____1 = (function (state_26007){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_26007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e26034){if((e26034 instanceof Object)){
var ex__23914__auto__ = e26034;
var statearr_26035_26057 = state_26007;
(statearr_26035_26057[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26058 = state_26007;
state_26007 = G__26058;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$state_machine__23911__auto__ = function(state_26007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23911__auto____1.call(this,state_26007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23911__auto____0;
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23911__auto____1;
return cljs$core$async$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___26041,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24024__auto__ = (function (){var statearr_26036 = f__24023__auto__.call(null);
(statearr_26036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___26041);

return statearr_26036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___26041,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26060 = [];
var len__17809__auto___26116 = arguments.length;
var i__17810__auto___26117 = (0);
while(true){
if((i__17810__auto___26117 < len__17809__auto___26116)){
args26060.push((arguments[i__17810__auto___26117]));

var G__26118 = (i__17810__auto___26117 + (1));
i__17810__auto___26117 = G__26118;
continue;
} else {
}
break;
}

var G__26062 = args26060.length;
switch (G__26062) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26060.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24022__auto___26120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___26120,out){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___26120,out){
return (function (state_26092){
var state_val_26093 = (state_26092[(1)]);
if((state_val_26093 === (7))){
var inst_26071 = (state_26092[(7)]);
var inst_26072 = (state_26092[(8)]);
var inst_26071__$1 = (state_26092[(2)]);
var inst_26072__$1 = cljs.core.nth.call(null,inst_26071__$1,(0),null);
var inst_26073 = cljs.core.nth.call(null,inst_26071__$1,(1),null);
var inst_26074 = (inst_26072__$1 == null);
var state_26092__$1 = (function (){var statearr_26094 = state_26092;
(statearr_26094[(9)] = inst_26073);

(statearr_26094[(7)] = inst_26071__$1);

(statearr_26094[(8)] = inst_26072__$1);

return statearr_26094;
})();
if(cljs.core.truth_(inst_26074)){
var statearr_26095_26121 = state_26092__$1;
(statearr_26095_26121[(1)] = (8));

} else {
var statearr_26096_26122 = state_26092__$1;
(statearr_26096_26122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26093 === (1))){
var inst_26063 = cljs.core.vec.call(null,chs);
var inst_26064 = inst_26063;
var state_26092__$1 = (function (){var statearr_26097 = state_26092;
(statearr_26097[(10)] = inst_26064);

return statearr_26097;
})();
var statearr_26098_26123 = state_26092__$1;
(statearr_26098_26123[(2)] = null);

(statearr_26098_26123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26093 === (4))){
var inst_26064 = (state_26092[(10)]);
var state_26092__$1 = state_26092;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26092__$1,(7),inst_26064);
} else {
if((state_val_26093 === (6))){
var inst_26088 = (state_26092[(2)]);
var state_26092__$1 = state_26092;
var statearr_26099_26124 = state_26092__$1;
(statearr_26099_26124[(2)] = inst_26088);

(statearr_26099_26124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26093 === (3))){
var inst_26090 = (state_26092[(2)]);
var state_26092__$1 = state_26092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26092__$1,inst_26090);
} else {
if((state_val_26093 === (2))){
var inst_26064 = (state_26092[(10)]);
var inst_26066 = cljs.core.count.call(null,inst_26064);
var inst_26067 = (inst_26066 > (0));
var state_26092__$1 = state_26092;
if(cljs.core.truth_(inst_26067)){
var statearr_26101_26125 = state_26092__$1;
(statearr_26101_26125[(1)] = (4));

} else {
var statearr_26102_26126 = state_26092__$1;
(statearr_26102_26126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26093 === (11))){
var inst_26064 = (state_26092[(10)]);
var inst_26081 = (state_26092[(2)]);
var tmp26100 = inst_26064;
var inst_26064__$1 = tmp26100;
var state_26092__$1 = (function (){var statearr_26103 = state_26092;
(statearr_26103[(11)] = inst_26081);

(statearr_26103[(10)] = inst_26064__$1);

return statearr_26103;
})();
var statearr_26104_26127 = state_26092__$1;
(statearr_26104_26127[(2)] = null);

(statearr_26104_26127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26093 === (9))){
var inst_26072 = (state_26092[(8)]);
var state_26092__$1 = state_26092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26092__$1,(11),out,inst_26072);
} else {
if((state_val_26093 === (5))){
var inst_26086 = cljs.core.async.close_BANG_.call(null,out);
var state_26092__$1 = state_26092;
var statearr_26105_26128 = state_26092__$1;
(statearr_26105_26128[(2)] = inst_26086);

(statearr_26105_26128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26093 === (10))){
var inst_26084 = (state_26092[(2)]);
var state_26092__$1 = state_26092;
var statearr_26106_26129 = state_26092__$1;
(statearr_26106_26129[(2)] = inst_26084);

(statearr_26106_26129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26093 === (8))){
var inst_26073 = (state_26092[(9)]);
var inst_26071 = (state_26092[(7)]);
var inst_26072 = (state_26092[(8)]);
var inst_26064 = (state_26092[(10)]);
var inst_26076 = (function (){var cs = inst_26064;
var vec__26069 = inst_26071;
var v = inst_26072;
var c = inst_26073;
return ((function (cs,vec__26069,v,c,inst_26073,inst_26071,inst_26072,inst_26064,state_val_26093,c__24022__auto___26120,out){
return (function (p1__26059_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26059_SHARP_);
});
;})(cs,vec__26069,v,c,inst_26073,inst_26071,inst_26072,inst_26064,state_val_26093,c__24022__auto___26120,out))
})();
var inst_26077 = cljs.core.filterv.call(null,inst_26076,inst_26064);
var inst_26064__$1 = inst_26077;
var state_26092__$1 = (function (){var statearr_26107 = state_26092;
(statearr_26107[(10)] = inst_26064__$1);

return statearr_26107;
})();
var statearr_26108_26130 = state_26092__$1;
(statearr_26108_26130[(2)] = null);

(statearr_26108_26130[(1)] = (2));


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
});})(c__24022__auto___26120,out))
;
return ((function (switch__23910__auto__,c__24022__auto___26120,out){
return (function() {
var cljs$core$async$state_machine__23911__auto__ = null;
var cljs$core$async$state_machine__23911__auto____0 = (function (){
var statearr_26112 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26112[(0)] = cljs$core$async$state_machine__23911__auto__);

(statearr_26112[(1)] = (1));

return statearr_26112;
});
var cljs$core$async$state_machine__23911__auto____1 = (function (state_26092){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_26092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e26113){if((e26113 instanceof Object)){
var ex__23914__auto__ = e26113;
var statearr_26114_26131 = state_26092;
(statearr_26114_26131[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26132 = state_26092;
state_26092 = G__26132;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$state_machine__23911__auto__ = function(state_26092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23911__auto____1.call(this,state_26092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23911__auto____0;
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23911__auto____1;
return cljs$core$async$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___26120,out))
})();
var state__24024__auto__ = (function (){var statearr_26115 = f__24023__auto__.call(null);
(statearr_26115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___26120);

return statearr_26115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___26120,out))
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
var args26133 = [];
var len__17809__auto___26182 = arguments.length;
var i__17810__auto___26183 = (0);
while(true){
if((i__17810__auto___26183 < len__17809__auto___26182)){
args26133.push((arguments[i__17810__auto___26183]));

var G__26184 = (i__17810__auto___26183 + (1));
i__17810__auto___26183 = G__26184;
continue;
} else {
}
break;
}

var G__26135 = args26133.length;
switch (G__26135) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26133.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24022__auto___26186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___26186,out){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___26186,out){
return (function (state_26159){
var state_val_26160 = (state_26159[(1)]);
if((state_val_26160 === (7))){
var inst_26141 = (state_26159[(7)]);
var inst_26141__$1 = (state_26159[(2)]);
var inst_26142 = (inst_26141__$1 == null);
var inst_26143 = cljs.core.not.call(null,inst_26142);
var state_26159__$1 = (function (){var statearr_26161 = state_26159;
(statearr_26161[(7)] = inst_26141__$1);

return statearr_26161;
})();
if(inst_26143){
var statearr_26162_26187 = state_26159__$1;
(statearr_26162_26187[(1)] = (8));

} else {
var statearr_26163_26188 = state_26159__$1;
(statearr_26163_26188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (1))){
var inst_26136 = (0);
var state_26159__$1 = (function (){var statearr_26164 = state_26159;
(statearr_26164[(8)] = inst_26136);

return statearr_26164;
})();
var statearr_26165_26189 = state_26159__$1;
(statearr_26165_26189[(2)] = null);

(statearr_26165_26189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (4))){
var state_26159__$1 = state_26159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26159__$1,(7),ch);
} else {
if((state_val_26160 === (6))){
var inst_26154 = (state_26159[(2)]);
var state_26159__$1 = state_26159;
var statearr_26166_26190 = state_26159__$1;
(statearr_26166_26190[(2)] = inst_26154);

(statearr_26166_26190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (3))){
var inst_26156 = (state_26159[(2)]);
var inst_26157 = cljs.core.async.close_BANG_.call(null,out);
var state_26159__$1 = (function (){var statearr_26167 = state_26159;
(statearr_26167[(9)] = inst_26156);

return statearr_26167;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26159__$1,inst_26157);
} else {
if((state_val_26160 === (2))){
var inst_26136 = (state_26159[(8)]);
var inst_26138 = (inst_26136 < n);
var state_26159__$1 = state_26159;
if(cljs.core.truth_(inst_26138)){
var statearr_26168_26191 = state_26159__$1;
(statearr_26168_26191[(1)] = (4));

} else {
var statearr_26169_26192 = state_26159__$1;
(statearr_26169_26192[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (11))){
var inst_26136 = (state_26159[(8)]);
var inst_26146 = (state_26159[(2)]);
var inst_26147 = (inst_26136 + (1));
var inst_26136__$1 = inst_26147;
var state_26159__$1 = (function (){var statearr_26170 = state_26159;
(statearr_26170[(10)] = inst_26146);

(statearr_26170[(8)] = inst_26136__$1);

return statearr_26170;
})();
var statearr_26171_26193 = state_26159__$1;
(statearr_26171_26193[(2)] = null);

(statearr_26171_26193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (9))){
var state_26159__$1 = state_26159;
var statearr_26172_26194 = state_26159__$1;
(statearr_26172_26194[(2)] = null);

(statearr_26172_26194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (5))){
var state_26159__$1 = state_26159;
var statearr_26173_26195 = state_26159__$1;
(statearr_26173_26195[(2)] = null);

(statearr_26173_26195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (10))){
var inst_26151 = (state_26159[(2)]);
var state_26159__$1 = state_26159;
var statearr_26174_26196 = state_26159__$1;
(statearr_26174_26196[(2)] = inst_26151);

(statearr_26174_26196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26160 === (8))){
var inst_26141 = (state_26159[(7)]);
var state_26159__$1 = state_26159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26159__$1,(11),out,inst_26141);
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
});})(c__24022__auto___26186,out))
;
return ((function (switch__23910__auto__,c__24022__auto___26186,out){
return (function() {
var cljs$core$async$state_machine__23911__auto__ = null;
var cljs$core$async$state_machine__23911__auto____0 = (function (){
var statearr_26178 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26178[(0)] = cljs$core$async$state_machine__23911__auto__);

(statearr_26178[(1)] = (1));

return statearr_26178;
});
var cljs$core$async$state_machine__23911__auto____1 = (function (state_26159){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_26159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e26179){if((e26179 instanceof Object)){
var ex__23914__auto__ = e26179;
var statearr_26180_26197 = state_26159;
(statearr_26180_26197[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26198 = state_26159;
state_26159 = G__26198;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$state_machine__23911__auto__ = function(state_26159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23911__auto____1.call(this,state_26159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23911__auto____0;
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23911__auto____1;
return cljs$core$async$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___26186,out))
})();
var state__24024__auto__ = (function (){var statearr_26181 = f__24023__auto__.call(null);
(statearr_26181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___26186);

return statearr_26181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___26186,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26206 = (function (map_LT_,f,ch,meta26207){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26207 = meta26207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26208,meta26207__$1){
var self__ = this;
var _26208__$1 = this;
return (new cljs.core.async.t_cljs$core$async26206(self__.map_LT_,self__.f,self__.ch,meta26207__$1));
});

cljs.core.async.t_cljs$core$async26206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26208){
var self__ = this;
var _26208__$1 = this;
return self__.meta26207;
});

cljs.core.async.t_cljs$core$async26206.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26206.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26206.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26209 = (function (map_LT_,f,ch,meta26207,_,fn1,meta26210){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26207 = meta26207;
this._ = _;
this.fn1 = fn1;
this.meta26210 = meta26210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26211,meta26210__$1){
var self__ = this;
var _26211__$1 = this;
return (new cljs.core.async.t_cljs$core$async26209(self__.map_LT_,self__.f,self__.ch,self__.meta26207,self__._,self__.fn1,meta26210__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26211){
var self__ = this;
var _26211__$1 = this;
return self__.meta26210;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26199_SHARP_){
return f1.call(null,(((p1__26199_SHARP_ == null))?null:self__.f.call(null,p1__26199_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26209.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26207","meta26207",488768215,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26206","cljs.core.async/t_cljs$core$async26206",2073010863,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26210","meta26210",1267560916,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26209";

cljs.core.async.t_cljs$core$async26209.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26209");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26209 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26209(map_LT___$1,f__$1,ch__$1,meta26207__$1,___$2,fn1__$1,meta26210){
return (new cljs.core.async.t_cljs$core$async26209(map_LT___$1,f__$1,ch__$1,meta26207__$1,___$2,fn1__$1,meta26210));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26209(self__.map_LT_,self__.f,self__.ch,self__.meta26207,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26206.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26207","meta26207",488768215,null)], null);
});

cljs.core.async.t_cljs$core$async26206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26206";

cljs.core.async.t_cljs$core$async26206.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26206");
});

cljs.core.async.__GT_t_cljs$core$async26206 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26206(map_LT___$1,f__$1,ch__$1,meta26207){
return (new cljs.core.async.t_cljs$core$async26206(map_LT___$1,f__$1,ch__$1,meta26207));
});

}

return (new cljs.core.async.t_cljs$core$async26206(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26215 = (function (map_GT_,f,ch,meta26216){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26216 = meta26216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26217,meta26216__$1){
var self__ = this;
var _26217__$1 = this;
return (new cljs.core.async.t_cljs$core$async26215(self__.map_GT_,self__.f,self__.ch,meta26216__$1));
});

cljs.core.async.t_cljs$core$async26215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26217){
var self__ = this;
var _26217__$1 = this;
return self__.meta26216;
});

cljs.core.async.t_cljs$core$async26215.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26215.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26215.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26216","meta26216",-1359964351,null)], null);
});

cljs.core.async.t_cljs$core$async26215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26215";

cljs.core.async.t_cljs$core$async26215.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26215");
});

cljs.core.async.__GT_t_cljs$core$async26215 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26215(map_GT___$1,f__$1,ch__$1,meta26216){
return (new cljs.core.async.t_cljs$core$async26215(map_GT___$1,f__$1,ch__$1,meta26216));
});

}

return (new cljs.core.async.t_cljs$core$async26215(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26221 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26221 = (function (filter_GT_,p,ch,meta26222){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26222 = meta26222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26223,meta26222__$1){
var self__ = this;
var _26223__$1 = this;
return (new cljs.core.async.t_cljs$core$async26221(self__.filter_GT_,self__.p,self__.ch,meta26222__$1));
});

cljs.core.async.t_cljs$core$async26221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26223){
var self__ = this;
var _26223__$1 = this;
return self__.meta26222;
});

cljs.core.async.t_cljs$core$async26221.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26221.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26221.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26221.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26221.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26221.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26221.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26222","meta26222",-2007926490,null)], null);
});

cljs.core.async.t_cljs$core$async26221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26221";

cljs.core.async.t_cljs$core$async26221.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26221");
});

cljs.core.async.__GT_t_cljs$core$async26221 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26221(filter_GT___$1,p__$1,ch__$1,meta26222){
return (new cljs.core.async.t_cljs$core$async26221(filter_GT___$1,p__$1,ch__$1,meta26222));
});

}

return (new cljs.core.async.t_cljs$core$async26221(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26224 = [];
var len__17809__auto___26268 = arguments.length;
var i__17810__auto___26269 = (0);
while(true){
if((i__17810__auto___26269 < len__17809__auto___26268)){
args26224.push((arguments[i__17810__auto___26269]));

var G__26270 = (i__17810__auto___26269 + (1));
i__17810__auto___26269 = G__26270;
continue;
} else {
}
break;
}

var G__26226 = args26224.length;
switch (G__26226) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26224.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24022__auto___26272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___26272,out){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___26272,out){
return (function (state_26247){
var state_val_26248 = (state_26247[(1)]);
if((state_val_26248 === (7))){
var inst_26243 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
var statearr_26249_26273 = state_26247__$1;
(statearr_26249_26273[(2)] = inst_26243);

(statearr_26249_26273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (1))){
var state_26247__$1 = state_26247;
var statearr_26250_26274 = state_26247__$1;
(statearr_26250_26274[(2)] = null);

(statearr_26250_26274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (4))){
var inst_26229 = (state_26247[(7)]);
var inst_26229__$1 = (state_26247[(2)]);
var inst_26230 = (inst_26229__$1 == null);
var state_26247__$1 = (function (){var statearr_26251 = state_26247;
(statearr_26251[(7)] = inst_26229__$1);

return statearr_26251;
})();
if(cljs.core.truth_(inst_26230)){
var statearr_26252_26275 = state_26247__$1;
(statearr_26252_26275[(1)] = (5));

} else {
var statearr_26253_26276 = state_26247__$1;
(statearr_26253_26276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (6))){
var inst_26229 = (state_26247[(7)]);
var inst_26234 = p.call(null,inst_26229);
var state_26247__$1 = state_26247;
if(cljs.core.truth_(inst_26234)){
var statearr_26254_26277 = state_26247__$1;
(statearr_26254_26277[(1)] = (8));

} else {
var statearr_26255_26278 = state_26247__$1;
(statearr_26255_26278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (3))){
var inst_26245 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26247__$1,inst_26245);
} else {
if((state_val_26248 === (2))){
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26247__$1,(4),ch);
} else {
if((state_val_26248 === (11))){
var inst_26237 = (state_26247[(2)]);
var state_26247__$1 = state_26247;
var statearr_26256_26279 = state_26247__$1;
(statearr_26256_26279[(2)] = inst_26237);

(statearr_26256_26279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (9))){
var state_26247__$1 = state_26247;
var statearr_26257_26280 = state_26247__$1;
(statearr_26257_26280[(2)] = null);

(statearr_26257_26280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (5))){
var inst_26232 = cljs.core.async.close_BANG_.call(null,out);
var state_26247__$1 = state_26247;
var statearr_26258_26281 = state_26247__$1;
(statearr_26258_26281[(2)] = inst_26232);

(statearr_26258_26281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (10))){
var inst_26240 = (state_26247[(2)]);
var state_26247__$1 = (function (){var statearr_26259 = state_26247;
(statearr_26259[(8)] = inst_26240);

return statearr_26259;
})();
var statearr_26260_26282 = state_26247__$1;
(statearr_26260_26282[(2)] = null);

(statearr_26260_26282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26248 === (8))){
var inst_26229 = (state_26247[(7)]);
var state_26247__$1 = state_26247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26247__$1,(11),out,inst_26229);
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
});})(c__24022__auto___26272,out))
;
return ((function (switch__23910__auto__,c__24022__auto___26272,out){
return (function() {
var cljs$core$async$state_machine__23911__auto__ = null;
var cljs$core$async$state_machine__23911__auto____0 = (function (){
var statearr_26264 = [null,null,null,null,null,null,null,null,null];
(statearr_26264[(0)] = cljs$core$async$state_machine__23911__auto__);

(statearr_26264[(1)] = (1));

return statearr_26264;
});
var cljs$core$async$state_machine__23911__auto____1 = (function (state_26247){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_26247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e26265){if((e26265 instanceof Object)){
var ex__23914__auto__ = e26265;
var statearr_26266_26283 = state_26247;
(statearr_26266_26283[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26284 = state_26247;
state_26247 = G__26284;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$state_machine__23911__auto__ = function(state_26247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23911__auto____1.call(this,state_26247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23911__auto____0;
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23911__auto____1;
return cljs$core$async$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___26272,out))
})();
var state__24024__auto__ = (function (){var statearr_26267 = f__24023__auto__.call(null);
(statearr_26267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___26272);

return statearr_26267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___26272,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26285 = [];
var len__17809__auto___26288 = arguments.length;
var i__17810__auto___26289 = (0);
while(true){
if((i__17810__auto___26289 < len__17809__auto___26288)){
args26285.push((arguments[i__17810__auto___26289]));

var G__26290 = (i__17810__auto___26289 + (1));
i__17810__auto___26289 = G__26290;
continue;
} else {
}
break;
}

var G__26287 = args26285.length;
switch (G__26287) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26285.length)].join('')));

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
var c__24022__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto__){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto__){
return (function (state_26457){
var state_val_26458 = (state_26457[(1)]);
if((state_val_26458 === (7))){
var inst_26453 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26459_26500 = state_26457__$1;
(statearr_26459_26500[(2)] = inst_26453);

(statearr_26459_26500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (20))){
var inst_26423 = (state_26457[(7)]);
var inst_26434 = (state_26457[(2)]);
var inst_26435 = cljs.core.next.call(null,inst_26423);
var inst_26409 = inst_26435;
var inst_26410 = null;
var inst_26411 = (0);
var inst_26412 = (0);
var state_26457__$1 = (function (){var statearr_26460 = state_26457;
(statearr_26460[(8)] = inst_26412);

(statearr_26460[(9)] = inst_26411);

(statearr_26460[(10)] = inst_26409);

(statearr_26460[(11)] = inst_26434);

(statearr_26460[(12)] = inst_26410);

return statearr_26460;
})();
var statearr_26461_26501 = state_26457__$1;
(statearr_26461_26501[(2)] = null);

(statearr_26461_26501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (1))){
var state_26457__$1 = state_26457;
var statearr_26462_26502 = state_26457__$1;
(statearr_26462_26502[(2)] = null);

(statearr_26462_26502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (4))){
var inst_26398 = (state_26457[(13)]);
var inst_26398__$1 = (state_26457[(2)]);
var inst_26399 = (inst_26398__$1 == null);
var state_26457__$1 = (function (){var statearr_26463 = state_26457;
(statearr_26463[(13)] = inst_26398__$1);

return statearr_26463;
})();
if(cljs.core.truth_(inst_26399)){
var statearr_26464_26503 = state_26457__$1;
(statearr_26464_26503[(1)] = (5));

} else {
var statearr_26465_26504 = state_26457__$1;
(statearr_26465_26504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (15))){
var state_26457__$1 = state_26457;
var statearr_26469_26505 = state_26457__$1;
(statearr_26469_26505[(2)] = null);

(statearr_26469_26505[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (21))){
var state_26457__$1 = state_26457;
var statearr_26470_26506 = state_26457__$1;
(statearr_26470_26506[(2)] = null);

(statearr_26470_26506[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (13))){
var inst_26412 = (state_26457[(8)]);
var inst_26411 = (state_26457[(9)]);
var inst_26409 = (state_26457[(10)]);
var inst_26410 = (state_26457[(12)]);
var inst_26419 = (state_26457[(2)]);
var inst_26420 = (inst_26412 + (1));
var tmp26466 = inst_26411;
var tmp26467 = inst_26409;
var tmp26468 = inst_26410;
var inst_26409__$1 = tmp26467;
var inst_26410__$1 = tmp26468;
var inst_26411__$1 = tmp26466;
var inst_26412__$1 = inst_26420;
var state_26457__$1 = (function (){var statearr_26471 = state_26457;
(statearr_26471[(8)] = inst_26412__$1);

(statearr_26471[(9)] = inst_26411__$1);

(statearr_26471[(10)] = inst_26409__$1);

(statearr_26471[(14)] = inst_26419);

(statearr_26471[(12)] = inst_26410__$1);

return statearr_26471;
})();
var statearr_26472_26507 = state_26457__$1;
(statearr_26472_26507[(2)] = null);

(statearr_26472_26507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (22))){
var state_26457__$1 = state_26457;
var statearr_26473_26508 = state_26457__$1;
(statearr_26473_26508[(2)] = null);

(statearr_26473_26508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (6))){
var inst_26398 = (state_26457[(13)]);
var inst_26407 = f.call(null,inst_26398);
var inst_26408 = cljs.core.seq.call(null,inst_26407);
var inst_26409 = inst_26408;
var inst_26410 = null;
var inst_26411 = (0);
var inst_26412 = (0);
var state_26457__$1 = (function (){var statearr_26474 = state_26457;
(statearr_26474[(8)] = inst_26412);

(statearr_26474[(9)] = inst_26411);

(statearr_26474[(10)] = inst_26409);

(statearr_26474[(12)] = inst_26410);

return statearr_26474;
})();
var statearr_26475_26509 = state_26457__$1;
(statearr_26475_26509[(2)] = null);

(statearr_26475_26509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (17))){
var inst_26423 = (state_26457[(7)]);
var inst_26427 = cljs.core.chunk_first.call(null,inst_26423);
var inst_26428 = cljs.core.chunk_rest.call(null,inst_26423);
var inst_26429 = cljs.core.count.call(null,inst_26427);
var inst_26409 = inst_26428;
var inst_26410 = inst_26427;
var inst_26411 = inst_26429;
var inst_26412 = (0);
var state_26457__$1 = (function (){var statearr_26476 = state_26457;
(statearr_26476[(8)] = inst_26412);

(statearr_26476[(9)] = inst_26411);

(statearr_26476[(10)] = inst_26409);

(statearr_26476[(12)] = inst_26410);

return statearr_26476;
})();
var statearr_26477_26510 = state_26457__$1;
(statearr_26477_26510[(2)] = null);

(statearr_26477_26510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (3))){
var inst_26455 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26457__$1,inst_26455);
} else {
if((state_val_26458 === (12))){
var inst_26443 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26478_26511 = state_26457__$1;
(statearr_26478_26511[(2)] = inst_26443);

(statearr_26478_26511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (2))){
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26457__$1,(4),in$);
} else {
if((state_val_26458 === (23))){
var inst_26451 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26479_26512 = state_26457__$1;
(statearr_26479_26512[(2)] = inst_26451);

(statearr_26479_26512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (19))){
var inst_26438 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26480_26513 = state_26457__$1;
(statearr_26480_26513[(2)] = inst_26438);

(statearr_26480_26513[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (11))){
var inst_26423 = (state_26457[(7)]);
var inst_26409 = (state_26457[(10)]);
var inst_26423__$1 = cljs.core.seq.call(null,inst_26409);
var state_26457__$1 = (function (){var statearr_26481 = state_26457;
(statearr_26481[(7)] = inst_26423__$1);

return statearr_26481;
})();
if(inst_26423__$1){
var statearr_26482_26514 = state_26457__$1;
(statearr_26482_26514[(1)] = (14));

} else {
var statearr_26483_26515 = state_26457__$1;
(statearr_26483_26515[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (9))){
var inst_26445 = (state_26457[(2)]);
var inst_26446 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26457__$1 = (function (){var statearr_26484 = state_26457;
(statearr_26484[(15)] = inst_26445);

return statearr_26484;
})();
if(cljs.core.truth_(inst_26446)){
var statearr_26485_26516 = state_26457__$1;
(statearr_26485_26516[(1)] = (21));

} else {
var statearr_26486_26517 = state_26457__$1;
(statearr_26486_26517[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (5))){
var inst_26401 = cljs.core.async.close_BANG_.call(null,out);
var state_26457__$1 = state_26457;
var statearr_26487_26518 = state_26457__$1;
(statearr_26487_26518[(2)] = inst_26401);

(statearr_26487_26518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (14))){
var inst_26423 = (state_26457[(7)]);
var inst_26425 = cljs.core.chunked_seq_QMARK_.call(null,inst_26423);
var state_26457__$1 = state_26457;
if(inst_26425){
var statearr_26488_26519 = state_26457__$1;
(statearr_26488_26519[(1)] = (17));

} else {
var statearr_26489_26520 = state_26457__$1;
(statearr_26489_26520[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (16))){
var inst_26441 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26490_26521 = state_26457__$1;
(statearr_26490_26521[(2)] = inst_26441);

(statearr_26490_26521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (10))){
var inst_26412 = (state_26457[(8)]);
var inst_26410 = (state_26457[(12)]);
var inst_26417 = cljs.core._nth.call(null,inst_26410,inst_26412);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26457__$1,(13),out,inst_26417);
} else {
if((state_val_26458 === (18))){
var inst_26423 = (state_26457[(7)]);
var inst_26432 = cljs.core.first.call(null,inst_26423);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26457__$1,(20),out,inst_26432);
} else {
if((state_val_26458 === (8))){
var inst_26412 = (state_26457[(8)]);
var inst_26411 = (state_26457[(9)]);
var inst_26414 = (inst_26412 < inst_26411);
var inst_26415 = inst_26414;
var state_26457__$1 = state_26457;
if(cljs.core.truth_(inst_26415)){
var statearr_26491_26522 = state_26457__$1;
(statearr_26491_26522[(1)] = (10));

} else {
var statearr_26492_26523 = state_26457__$1;
(statearr_26492_26523[(1)] = (11));

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
});})(c__24022__auto__))
;
return ((function (switch__23910__auto__,c__24022__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23911__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23911__auto____0 = (function (){
var statearr_26496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26496[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23911__auto__);

(statearr_26496[(1)] = (1));

return statearr_26496;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23911__auto____1 = (function (state_26457){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_26457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e26497){if((e26497 instanceof Object)){
var ex__23914__auto__ = e26497;
var statearr_26498_26524 = state_26457;
(statearr_26498_26524[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26525 = state_26457;
state_26457 = G__26525;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23911__auto__ = function(state_26457){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23911__auto____1.call(this,state_26457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23911__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23911__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto__))
})();
var state__24024__auto__ = (function (){var statearr_26499 = f__24023__auto__.call(null);
(statearr_26499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto__);

return statearr_26499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto__))
);

return c__24022__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26526 = [];
var len__17809__auto___26529 = arguments.length;
var i__17810__auto___26530 = (0);
while(true){
if((i__17810__auto___26530 < len__17809__auto___26529)){
args26526.push((arguments[i__17810__auto___26530]));

var G__26531 = (i__17810__auto___26530 + (1));
i__17810__auto___26530 = G__26531;
continue;
} else {
}
break;
}

var G__26528 = args26526.length;
switch (G__26528) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26526.length)].join('')));

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
var args26533 = [];
var len__17809__auto___26536 = arguments.length;
var i__17810__auto___26537 = (0);
while(true){
if((i__17810__auto___26537 < len__17809__auto___26536)){
args26533.push((arguments[i__17810__auto___26537]));

var G__26538 = (i__17810__auto___26537 + (1));
i__17810__auto___26537 = G__26538;
continue;
} else {
}
break;
}

var G__26535 = args26533.length;
switch (G__26535) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26533.length)].join('')));

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
var args26540 = [];
var len__17809__auto___26591 = arguments.length;
var i__17810__auto___26592 = (0);
while(true){
if((i__17810__auto___26592 < len__17809__auto___26591)){
args26540.push((arguments[i__17810__auto___26592]));

var G__26593 = (i__17810__auto___26592 + (1));
i__17810__auto___26592 = G__26593;
continue;
} else {
}
break;
}

var G__26542 = args26540.length;
switch (G__26542) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26540.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24022__auto___26595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___26595,out){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___26595,out){
return (function (state_26566){
var state_val_26567 = (state_26566[(1)]);
if((state_val_26567 === (7))){
var inst_26561 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
var statearr_26568_26596 = state_26566__$1;
(statearr_26568_26596[(2)] = inst_26561);

(statearr_26568_26596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (1))){
var inst_26543 = null;
var state_26566__$1 = (function (){var statearr_26569 = state_26566;
(statearr_26569[(7)] = inst_26543);

return statearr_26569;
})();
var statearr_26570_26597 = state_26566__$1;
(statearr_26570_26597[(2)] = null);

(statearr_26570_26597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (4))){
var inst_26546 = (state_26566[(8)]);
var inst_26546__$1 = (state_26566[(2)]);
var inst_26547 = (inst_26546__$1 == null);
var inst_26548 = cljs.core.not.call(null,inst_26547);
var state_26566__$1 = (function (){var statearr_26571 = state_26566;
(statearr_26571[(8)] = inst_26546__$1);

return statearr_26571;
})();
if(inst_26548){
var statearr_26572_26598 = state_26566__$1;
(statearr_26572_26598[(1)] = (5));

} else {
var statearr_26573_26599 = state_26566__$1;
(statearr_26573_26599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (6))){
var state_26566__$1 = state_26566;
var statearr_26574_26600 = state_26566__$1;
(statearr_26574_26600[(2)] = null);

(statearr_26574_26600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (3))){
var inst_26563 = (state_26566[(2)]);
var inst_26564 = cljs.core.async.close_BANG_.call(null,out);
var state_26566__$1 = (function (){var statearr_26575 = state_26566;
(statearr_26575[(9)] = inst_26563);

return statearr_26575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26566__$1,inst_26564);
} else {
if((state_val_26567 === (2))){
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26566__$1,(4),ch);
} else {
if((state_val_26567 === (11))){
var inst_26546 = (state_26566[(8)]);
var inst_26555 = (state_26566[(2)]);
var inst_26543 = inst_26546;
var state_26566__$1 = (function (){var statearr_26576 = state_26566;
(statearr_26576[(7)] = inst_26543);

(statearr_26576[(10)] = inst_26555);

return statearr_26576;
})();
var statearr_26577_26601 = state_26566__$1;
(statearr_26577_26601[(2)] = null);

(statearr_26577_26601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (9))){
var inst_26546 = (state_26566[(8)]);
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26566__$1,(11),out,inst_26546);
} else {
if((state_val_26567 === (5))){
var inst_26543 = (state_26566[(7)]);
var inst_26546 = (state_26566[(8)]);
var inst_26550 = cljs.core._EQ_.call(null,inst_26546,inst_26543);
var state_26566__$1 = state_26566;
if(inst_26550){
var statearr_26579_26602 = state_26566__$1;
(statearr_26579_26602[(1)] = (8));

} else {
var statearr_26580_26603 = state_26566__$1;
(statearr_26580_26603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (10))){
var inst_26558 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
var statearr_26581_26604 = state_26566__$1;
(statearr_26581_26604[(2)] = inst_26558);

(statearr_26581_26604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (8))){
var inst_26543 = (state_26566[(7)]);
var tmp26578 = inst_26543;
var inst_26543__$1 = tmp26578;
var state_26566__$1 = (function (){var statearr_26582 = state_26566;
(statearr_26582[(7)] = inst_26543__$1);

return statearr_26582;
})();
var statearr_26583_26605 = state_26566__$1;
(statearr_26583_26605[(2)] = null);

(statearr_26583_26605[(1)] = (2));


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
});})(c__24022__auto___26595,out))
;
return ((function (switch__23910__auto__,c__24022__auto___26595,out){
return (function() {
var cljs$core$async$state_machine__23911__auto__ = null;
var cljs$core$async$state_machine__23911__auto____0 = (function (){
var statearr_26587 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26587[(0)] = cljs$core$async$state_machine__23911__auto__);

(statearr_26587[(1)] = (1));

return statearr_26587;
});
var cljs$core$async$state_machine__23911__auto____1 = (function (state_26566){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_26566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e26588){if((e26588 instanceof Object)){
var ex__23914__auto__ = e26588;
var statearr_26589_26606 = state_26566;
(statearr_26589_26606[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26607 = state_26566;
state_26566 = G__26607;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$state_machine__23911__auto__ = function(state_26566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23911__auto____1.call(this,state_26566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23911__auto____0;
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23911__auto____1;
return cljs$core$async$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___26595,out))
})();
var state__24024__auto__ = (function (){var statearr_26590 = f__24023__auto__.call(null);
(statearr_26590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___26595);

return statearr_26590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___26595,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26608 = [];
var len__17809__auto___26678 = arguments.length;
var i__17810__auto___26679 = (0);
while(true){
if((i__17810__auto___26679 < len__17809__auto___26678)){
args26608.push((arguments[i__17810__auto___26679]));

var G__26680 = (i__17810__auto___26679 + (1));
i__17810__auto___26679 = G__26680;
continue;
} else {
}
break;
}

var G__26610 = args26608.length;
switch (G__26610) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26608.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24022__auto___26682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___26682,out){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___26682,out){
return (function (state_26648){
var state_val_26649 = (state_26648[(1)]);
if((state_val_26649 === (7))){
var inst_26644 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
var statearr_26650_26683 = state_26648__$1;
(statearr_26650_26683[(2)] = inst_26644);

(statearr_26650_26683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (1))){
var inst_26611 = (new Array(n));
var inst_26612 = inst_26611;
var inst_26613 = (0);
var state_26648__$1 = (function (){var statearr_26651 = state_26648;
(statearr_26651[(7)] = inst_26613);

(statearr_26651[(8)] = inst_26612);

return statearr_26651;
})();
var statearr_26652_26684 = state_26648__$1;
(statearr_26652_26684[(2)] = null);

(statearr_26652_26684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (4))){
var inst_26616 = (state_26648[(9)]);
var inst_26616__$1 = (state_26648[(2)]);
var inst_26617 = (inst_26616__$1 == null);
var inst_26618 = cljs.core.not.call(null,inst_26617);
var state_26648__$1 = (function (){var statearr_26653 = state_26648;
(statearr_26653[(9)] = inst_26616__$1);

return statearr_26653;
})();
if(inst_26618){
var statearr_26654_26685 = state_26648__$1;
(statearr_26654_26685[(1)] = (5));

} else {
var statearr_26655_26686 = state_26648__$1;
(statearr_26655_26686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (15))){
var inst_26638 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
var statearr_26656_26687 = state_26648__$1;
(statearr_26656_26687[(2)] = inst_26638);

(statearr_26656_26687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (13))){
var state_26648__$1 = state_26648;
var statearr_26657_26688 = state_26648__$1;
(statearr_26657_26688[(2)] = null);

(statearr_26657_26688[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (6))){
var inst_26613 = (state_26648[(7)]);
var inst_26634 = (inst_26613 > (0));
var state_26648__$1 = state_26648;
if(cljs.core.truth_(inst_26634)){
var statearr_26658_26689 = state_26648__$1;
(statearr_26658_26689[(1)] = (12));

} else {
var statearr_26659_26690 = state_26648__$1;
(statearr_26659_26690[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (3))){
var inst_26646 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26648__$1,inst_26646);
} else {
if((state_val_26649 === (12))){
var inst_26612 = (state_26648[(8)]);
var inst_26636 = cljs.core.vec.call(null,inst_26612);
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26648__$1,(15),out,inst_26636);
} else {
if((state_val_26649 === (2))){
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26648__$1,(4),ch);
} else {
if((state_val_26649 === (11))){
var inst_26628 = (state_26648[(2)]);
var inst_26629 = (new Array(n));
var inst_26612 = inst_26629;
var inst_26613 = (0);
var state_26648__$1 = (function (){var statearr_26660 = state_26648;
(statearr_26660[(10)] = inst_26628);

(statearr_26660[(7)] = inst_26613);

(statearr_26660[(8)] = inst_26612);

return statearr_26660;
})();
var statearr_26661_26691 = state_26648__$1;
(statearr_26661_26691[(2)] = null);

(statearr_26661_26691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (9))){
var inst_26612 = (state_26648[(8)]);
var inst_26626 = cljs.core.vec.call(null,inst_26612);
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26648__$1,(11),out,inst_26626);
} else {
if((state_val_26649 === (5))){
var inst_26613 = (state_26648[(7)]);
var inst_26616 = (state_26648[(9)]);
var inst_26621 = (state_26648[(11)]);
var inst_26612 = (state_26648[(8)]);
var inst_26620 = (inst_26612[inst_26613] = inst_26616);
var inst_26621__$1 = (inst_26613 + (1));
var inst_26622 = (inst_26621__$1 < n);
var state_26648__$1 = (function (){var statearr_26662 = state_26648;
(statearr_26662[(12)] = inst_26620);

(statearr_26662[(11)] = inst_26621__$1);

return statearr_26662;
})();
if(cljs.core.truth_(inst_26622)){
var statearr_26663_26692 = state_26648__$1;
(statearr_26663_26692[(1)] = (8));

} else {
var statearr_26664_26693 = state_26648__$1;
(statearr_26664_26693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (14))){
var inst_26641 = (state_26648[(2)]);
var inst_26642 = cljs.core.async.close_BANG_.call(null,out);
var state_26648__$1 = (function (){var statearr_26666 = state_26648;
(statearr_26666[(13)] = inst_26641);

return statearr_26666;
})();
var statearr_26667_26694 = state_26648__$1;
(statearr_26667_26694[(2)] = inst_26642);

(statearr_26667_26694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (10))){
var inst_26632 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
var statearr_26668_26695 = state_26648__$1;
(statearr_26668_26695[(2)] = inst_26632);

(statearr_26668_26695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (8))){
var inst_26621 = (state_26648[(11)]);
var inst_26612 = (state_26648[(8)]);
var tmp26665 = inst_26612;
var inst_26612__$1 = tmp26665;
var inst_26613 = inst_26621;
var state_26648__$1 = (function (){var statearr_26669 = state_26648;
(statearr_26669[(7)] = inst_26613);

(statearr_26669[(8)] = inst_26612__$1);

return statearr_26669;
})();
var statearr_26670_26696 = state_26648__$1;
(statearr_26670_26696[(2)] = null);

(statearr_26670_26696[(1)] = (2));


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
});})(c__24022__auto___26682,out))
;
return ((function (switch__23910__auto__,c__24022__auto___26682,out){
return (function() {
var cljs$core$async$state_machine__23911__auto__ = null;
var cljs$core$async$state_machine__23911__auto____0 = (function (){
var statearr_26674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26674[(0)] = cljs$core$async$state_machine__23911__auto__);

(statearr_26674[(1)] = (1));

return statearr_26674;
});
var cljs$core$async$state_machine__23911__auto____1 = (function (state_26648){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_26648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e26675){if((e26675 instanceof Object)){
var ex__23914__auto__ = e26675;
var statearr_26676_26697 = state_26648;
(statearr_26676_26697[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26698 = state_26648;
state_26648 = G__26698;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$state_machine__23911__auto__ = function(state_26648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23911__auto____1.call(this,state_26648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23911__auto____0;
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23911__auto____1;
return cljs$core$async$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___26682,out))
})();
var state__24024__auto__ = (function (){var statearr_26677 = f__24023__auto__.call(null);
(statearr_26677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___26682);

return statearr_26677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___26682,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26699 = [];
var len__17809__auto___26773 = arguments.length;
var i__17810__auto___26774 = (0);
while(true){
if((i__17810__auto___26774 < len__17809__auto___26773)){
args26699.push((arguments[i__17810__auto___26774]));

var G__26775 = (i__17810__auto___26774 + (1));
i__17810__auto___26774 = G__26775;
continue;
} else {
}
break;
}

var G__26701 = args26699.length;
switch (G__26701) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26699.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24022__auto___26777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24022__auto___26777,out){
return (function (){
var f__24023__auto__ = (function (){var switch__23910__auto__ = ((function (c__24022__auto___26777,out){
return (function (state_26743){
var state_val_26744 = (state_26743[(1)]);
if((state_val_26744 === (7))){
var inst_26739 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26745_26778 = state_26743__$1;
(statearr_26745_26778[(2)] = inst_26739);

(statearr_26745_26778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (1))){
var inst_26702 = [];
var inst_26703 = inst_26702;
var inst_26704 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26743__$1 = (function (){var statearr_26746 = state_26743;
(statearr_26746[(7)] = inst_26703);

(statearr_26746[(8)] = inst_26704);

return statearr_26746;
})();
var statearr_26747_26779 = state_26743__$1;
(statearr_26747_26779[(2)] = null);

(statearr_26747_26779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (4))){
var inst_26707 = (state_26743[(9)]);
var inst_26707__$1 = (state_26743[(2)]);
var inst_26708 = (inst_26707__$1 == null);
var inst_26709 = cljs.core.not.call(null,inst_26708);
var state_26743__$1 = (function (){var statearr_26748 = state_26743;
(statearr_26748[(9)] = inst_26707__$1);

return statearr_26748;
})();
if(inst_26709){
var statearr_26749_26780 = state_26743__$1;
(statearr_26749_26780[(1)] = (5));

} else {
var statearr_26750_26781 = state_26743__$1;
(statearr_26750_26781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (15))){
var inst_26733 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26751_26782 = state_26743__$1;
(statearr_26751_26782[(2)] = inst_26733);

(statearr_26751_26782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (13))){
var state_26743__$1 = state_26743;
var statearr_26752_26783 = state_26743__$1;
(statearr_26752_26783[(2)] = null);

(statearr_26752_26783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (6))){
var inst_26703 = (state_26743[(7)]);
var inst_26728 = inst_26703.length;
var inst_26729 = (inst_26728 > (0));
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26729)){
var statearr_26753_26784 = state_26743__$1;
(statearr_26753_26784[(1)] = (12));

} else {
var statearr_26754_26785 = state_26743__$1;
(statearr_26754_26785[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (3))){
var inst_26741 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26743__$1,inst_26741);
} else {
if((state_val_26744 === (12))){
var inst_26703 = (state_26743[(7)]);
var inst_26731 = cljs.core.vec.call(null,inst_26703);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26743__$1,(15),out,inst_26731);
} else {
if((state_val_26744 === (2))){
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(4),ch);
} else {
if((state_val_26744 === (11))){
var inst_26707 = (state_26743[(9)]);
var inst_26711 = (state_26743[(10)]);
var inst_26721 = (state_26743[(2)]);
var inst_26722 = [];
var inst_26723 = inst_26722.push(inst_26707);
var inst_26703 = inst_26722;
var inst_26704 = inst_26711;
var state_26743__$1 = (function (){var statearr_26755 = state_26743;
(statearr_26755[(11)] = inst_26723);

(statearr_26755[(12)] = inst_26721);

(statearr_26755[(7)] = inst_26703);

(statearr_26755[(8)] = inst_26704);

return statearr_26755;
})();
var statearr_26756_26786 = state_26743__$1;
(statearr_26756_26786[(2)] = null);

(statearr_26756_26786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (9))){
var inst_26703 = (state_26743[(7)]);
var inst_26719 = cljs.core.vec.call(null,inst_26703);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26743__$1,(11),out,inst_26719);
} else {
if((state_val_26744 === (5))){
var inst_26707 = (state_26743[(9)]);
var inst_26711 = (state_26743[(10)]);
var inst_26704 = (state_26743[(8)]);
var inst_26711__$1 = f.call(null,inst_26707);
var inst_26712 = cljs.core._EQ_.call(null,inst_26711__$1,inst_26704);
var inst_26713 = cljs.core.keyword_identical_QMARK_.call(null,inst_26704,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26714 = (inst_26712) || (inst_26713);
var state_26743__$1 = (function (){var statearr_26757 = state_26743;
(statearr_26757[(10)] = inst_26711__$1);

return statearr_26757;
})();
if(cljs.core.truth_(inst_26714)){
var statearr_26758_26787 = state_26743__$1;
(statearr_26758_26787[(1)] = (8));

} else {
var statearr_26759_26788 = state_26743__$1;
(statearr_26759_26788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (14))){
var inst_26736 = (state_26743[(2)]);
var inst_26737 = cljs.core.async.close_BANG_.call(null,out);
var state_26743__$1 = (function (){var statearr_26761 = state_26743;
(statearr_26761[(13)] = inst_26736);

return statearr_26761;
})();
var statearr_26762_26789 = state_26743__$1;
(statearr_26762_26789[(2)] = inst_26737);

(statearr_26762_26789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (10))){
var inst_26726 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26763_26790 = state_26743__$1;
(statearr_26763_26790[(2)] = inst_26726);

(statearr_26763_26790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (8))){
var inst_26707 = (state_26743[(9)]);
var inst_26711 = (state_26743[(10)]);
var inst_26703 = (state_26743[(7)]);
var inst_26716 = inst_26703.push(inst_26707);
var tmp26760 = inst_26703;
var inst_26703__$1 = tmp26760;
var inst_26704 = inst_26711;
var state_26743__$1 = (function (){var statearr_26764 = state_26743;
(statearr_26764[(14)] = inst_26716);

(statearr_26764[(7)] = inst_26703__$1);

(statearr_26764[(8)] = inst_26704);

return statearr_26764;
})();
var statearr_26765_26791 = state_26743__$1;
(statearr_26765_26791[(2)] = null);

(statearr_26765_26791[(1)] = (2));


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
});})(c__24022__auto___26777,out))
;
return ((function (switch__23910__auto__,c__24022__auto___26777,out){
return (function() {
var cljs$core$async$state_machine__23911__auto__ = null;
var cljs$core$async$state_machine__23911__auto____0 = (function (){
var statearr_26769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26769[(0)] = cljs$core$async$state_machine__23911__auto__);

(statearr_26769[(1)] = (1));

return statearr_26769;
});
var cljs$core$async$state_machine__23911__auto____1 = (function (state_26743){
while(true){
var ret_value__23912__auto__ = (function (){try{while(true){
var result__23913__auto__ = switch__23910__auto__.call(null,state_26743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23913__auto__;
}
break;
}
}catch (e26770){if((e26770 instanceof Object)){
var ex__23914__auto__ = e26770;
var statearr_26771_26792 = state_26743;
(statearr_26771_26792[(5)] = ex__23914__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23912__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26793 = state_26743;
state_26743 = G__26793;
continue;
} else {
return ret_value__23912__auto__;
}
break;
}
});
cljs$core$async$state_machine__23911__auto__ = function(state_26743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23911__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23911__auto____1.call(this,state_26743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23911__auto____0;
cljs$core$async$state_machine__23911__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23911__auto____1;
return cljs$core$async$state_machine__23911__auto__;
})()
;})(switch__23910__auto__,c__24022__auto___26777,out))
})();
var state__24024__auto__ = (function (){var statearr_26772 = f__24023__auto__.call(null);
(statearr_26772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24022__auto___26777);

return statearr_26772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24024__auto__);
});})(c__24022__auto___26777,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1447986932644