	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
		definePlugin("plugin://wxd2b7347d6983b041", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages) {			/*v0.5vv_20181016_syb_scopedata*/global.__wcc_version__='v0.5vv_20181016_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wxd2b7347d6983b041=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wxd2b7347d6983b041:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_wxd2b7347d6983b041 || [];
function gz$gwx_wxd2b7347d6983b041_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxd2b7347d6983b041_1)return __WXML_GLOBAL__.ops_cached.$gwx_wxd2b7347d6983b041_1
__WXML_GLOBAL__.ops_cached.$gwx_wxd2b7347d6983b041_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'autoplay']])
Z([3,'_bindended'])
Z([3,'_binderror'])
Z([3,'_bindfullscreenchange'])
Z([3,'_bindpause'])
Z([3,'_bindplay'])
Z([3,'_bindtimeupdate'])
Z([3,'_bindwaiting'])
Z([[7],[3,'xclass']])
Z([[7],[3,'controls']])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[7],[3,'direction']])
Z([[7],[3,'duration']])
Z([[7],[3,'enableDanmu']])
Z([[7],[3,'enableProgressGesture']])
Z([[7],[3,'xid']])
Z([[7],[3,'initialTime']])
Z([[7],[3,'loop']])
Z([[7],[3,'muted']])
Z([[7],[3,'objectFit']])
Z([[7],[3,'pageGesture']])
Z([[7],[3,'poster']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'showFullscreenBtn']])
Z([[7],[3,'showPlayBtn']])
Z([[7],[3,'showProgress']])
Z([[7],[3,'src']])
Z([a,[3,'width:'],[[7],[3,'width']],[3,';height:'],[[7],[3,'height']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxd2b7347d6983b041_1);return __WXML_GLOBAL__.ops_cached.$gwx_wxd2b7347d6983b041_1
}
__WXML_GLOBAL__.ops_set.$gwx_wxd2b7347d6983b041=z;
__WXML_GLOBAL__.ops_init.$gwx_wxd2b7347d6983b041=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/xvideo/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wxd2b7347d6983b041_1()
var oB=_mz(z,'video',['autoplay',0,'bindended',1,'binderror',1,'bindfullscreenchange',2,'bindpause',3,'bindplay',4,'bindtimeupdate',5,'bindwaiting',6,'class',7,'controls',8,'danmuBtn',9,'danmuList',10,'direction',11,'duration',12,'enableDanmu',13,'enableProgressGesture',14,'id',15,'initialTime',16,'loop',17,'muted',18,'objectFit',19,'pageGesture',20,'poster',21,'showCenterPlayBtn',22,'showFullscreenBtn',23,'showPlayBtn',24,'showProgress',25,'src',26,'style',27],[],e,s,gg)
var xC=_n('slot')
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}

				global.__wxAppCode__['plugin-private://wxd2b7347d6983b041/components/xvideo/index.json'] = {"component":true};
		global.__wxAppCode__['plugin-private://wxd2b7347d6983b041/components/xvideo/index.wxml'] = $gwx_wxd2b7347d6983b041( './components/xvideo/index.wxml' );
		global.__wxAppCode__['plugin-private://wxd2b7347d6983b041/plugin.json'] = {
  "publicComponents": {
    "xvideo": "components/xvideo/index"
  },
  "main": "index.js"
};
		global.__wxAppCode__['plugin-private://wxd2b7347d6983b041/plugin.wxml'] = $gwx_wxd2b7347d6983b041( './plugin.wxml' );
	
				define("api/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t={},e={};module.exports={getData:function(e){return t[e]},setData:function(e,n){t[e]=n},getVideo:function(t){return e[t]},setVideo:function(t,n){e[t]=n}}; 
 			}); 
		define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("./api/data.js");module.exports={getData:t.getData,setData:t.setData,getVideoContext:t.getVideo}; 
 			}); 
		global.__wxAppCurrentFile__ = 'plugin-private://wxd2b7347d6983b041/components/xvideo/index.js';global.__wxRouteBegin = true; 	define("components/xvideo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../api/data.js");Component({options:{addGlobalClass:!0},properties:{xid:{type:String,value:""},xclass:{type:String,value:""},width:{type:String,value:""},height:{type:String,value:""},src:{type:String,value:"",observer:function(e,t,n){}},initialTime:{type:Number,value:""},duration:{type:Number,value:""},controls:{type:Boolean,value:!0},danmuList:{type:Array,value:[]},danmuBtn:{type:Boolean,value:!1},enableDanmu:{type:Boolean,value:!1},autoplay:{type:Boolean,value:!1},loop:{type:Boolean,value:!1},muted:{type:Boolean,value:!1},pageGesture:{type:Boolean,value:!1},direction:{type:Number,value:0},showProgress:{type:Boolean,value:!0},showFullscreenBtn:{type:Boolean,value:!0},showPlayBtn:{type:Boolean,value:!0},showCenterPlayBtn:{type:Boolean,value:!0},enableProgressGesture:{type:Boolean,value:!0},objectFit:{type:String,value:"contain"},poster:{type:String,value:""}},behaviors:[],data:{},methods:{_bindplay:function(e){this.triggerEvent("statechange",e.type),this.triggerEvent("play",e)},_bindpause:function(e){this.triggerEvent("statechange",e.type),this.triggerEvent("pause",e)},_bindended:function(e){this.triggerEvent("statechange",e.type),this.triggerEvent("ended",e)},_bindtimeupdate:function(e){this.triggerEvent("timeupdate",e)},_bindfullscreenchange:function(e){this.triggerEvent("fullscreenchange",e)},_bindwaiting:function(e){this.triggerEvent("waiting",e)},_binderror:function(e){this.triggerEvent("statechange",e.type),this.triggerEvent("error",e)}},lifetimes:{attached:function(){var t=this.data.xid;if(!t)throw new Error("xid is not defined, 必须设置xid");var n=wx.createVideoContext(t,this);e.setVideo(t,n)},moved:function(){},detached:function(){e.setVideo(this.data.xid,null)}},ready:function(){this.triggerEvent("statechange","ready",this.data.state)}}); 
 			}); 	require("components/xvideo/index.js");
 	
				global.publishDomainComponents({
			"plugin://wxd2b7347d6983b041/xvideo":"plugin-private://wxd2b7347d6983b041/components/xvideo/index"
	})
				module.exports = function() {
		return require('index.js')
	}
			});
	requirePlugin("plugin://wxd2b7347d6983b041");
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0564e31f'])
Z([[7],[3,'showOpenNewsApp']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f0e44fac'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'f02b268e'])
Z([3,'handleProxy'])
Z([3,'_form data-v-3df85608'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'true'])
Z([a,[3,'_div data-v-3df85608 '],[[4],[[5],[[5],[1,'bottom-bar']],[[4],[[5],[[2,'?:'],[[6],[[7],[3,'deviceInfo']],[3,'isIphoneX']],[1,'bottom-bar-iphoneX'],[1,'']]]]]]])
Z([[7],[3,'showCommentIcon']])
Z([[2,'!=='],[[7],[3,'commentNumb']],[1,0]])
Z([[7],[3,'showCollectionIcon']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f3341ba2'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'submit'])
Z([3,'7a638217'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'b4a15b2a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7df86200'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'f3341ba2'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1ca23c7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7f61f3a6'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'021675ae'])
Z([3,'3'])
Z([3,'true'])
Z([3,'hotList'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'021675ae'])
Z([3,'_div data-v-6c4f473d comment-list'])
Z([[2,'&&'],[[7],[3,'showTitle']],[[2,'>'],[[7],[3,'idsLength']],[1,0]]])
Z([[2,'&&'],[[7],[3,'isEmpty']],[[7],[3,'needLazyLoad']]])
Z([[2,'&&'],[[7],[3,'isAll']],[[7],[3,'needLazyLoad']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'nextPage']],[[2,'!'],[[7],[3,'isAll']]]],[[7],[3,'needLazyLoad']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ccb7467a'])
Z([[7],[3,'active']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0885c3b4'])
Z([[7],[3,'showDownloadModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7cc6b6fe'])
Z([[7],[3,'hideMoreContent']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4ed2acd0'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listArray']])
Z([3,'item.docid'])
Z([[6],[[7],[3,'item']],[3,'docid']])
Z([3,'handleProxy'])
Z([3,'_div data-v-906a44be list-news-view clearfix'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'0-'],[[7],[3,'index']]])
Z(z[5])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'skipType']])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([3,'true'])
Z([3,'list-news-view-hover'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'modeType']],[1,0]])
Z([[6],[[7],[3,'item']],[3,'itemTag']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'modeType']],[1,1]])
Z(z[17])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'modeType']],[1,2]])
Z(z[17])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'modeType']],[1,3]])
Z([3,'_div data-v-906a44be'])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'imgLength']],[1,0]])
Z(z[17])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'modeType']],[1,4]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'modeType']],[1,5]])
Z(z[17])
Z([[2,'==='],[[2,'%'],[[7],[3,'index']],[1,5]],[1,4]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'index']],[1,4]],[[7],[3,'currentNavLink']]])
Z(z[6])
Z(z[7])
Z([[6],[[7],[3,'currentNavLink']],[3,'appId']])
Z(z[8])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'currentNavLink']],[3,'url']])
Z([3,'miniProgram'])
Z(z[17])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'02a4b1ec'])
Z([3,'_div data-v-9688df4e page-error'])
Z([[2,'==='],[[7],[3,'type']],[1,'dataError']])
Z([[2,'==='],[[7],[3,'type']],[1,'emptyComment']])
Z([[2,'==='],[[7],[3,'type']],[1,'netError']])
Z([[7],[3,'clickbtn']])
Z([[2,'==='],[[7],[3,'type']],[1,'netLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1b78c4c6'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listArray']])
Z([3,'item.contentId'])
Z([[6],[[7],[3,'item']],[3,'fCommentContent']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'d7d95cc0'])
Z([[2,'>'],[[6],[[7],[3,'dataList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dataList']])
Z([3,'\x27-\x27+index'])
Z([3,'handleProxy'])
Z([3,'_div data-v-535dfb6f news-item'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'0-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'item']],[3,'docid']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'type']])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'788fb753'])
Z([[7],[3,'showShareModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'56b7e65c'])
Z([[7],[3,'showSub']])
Z([3,'handleProxy'])
Z([3,'_form data-v-339946ad'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'true'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'data-v-339946ad-default-0']]])
Z([3,'submit'])
Z([3,'1ca23c7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'44c5e47d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'63f14b6e'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7a638217'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ebc4463e'])
Z([3,'_div data-v-5bc4acb2 toolbar'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f3341ba2'])
Z([3,'video'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1']]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'data-v-5bc4acb2-default-1']]])
Z([3,'1ca23c7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'f0e44fac'])
Z([[7],[3,'launchPath']])
Z([3,'handleProxy'])
Z([3,'_button data-v-9ccf2f8a launch-btn'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'launchApp'])
Z([3,'default'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1ca23c7c'])
Z([3,'handleProxy'])
Z([3,'_button data-v-9e0ce8de login-btn'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([[7],[3,'formType']])
Z([3,'none'])
Z([3,'getUserInfo'])
Z([3,'default'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7a638217'])
Z([a,[3,'_div data-v-b723dbb0 '],[[4],[[5],[[5],[1,'share-btns']],[[4],[[5],[[2,'?:'],[[2,'==='],[[7],[3,'styleType']],[1,'block']],[1,'share-btns-block'],[1,'']]]]]]])
Z([3,'handleProxy'])
Z([3,'_button data-v-b723dbb0 item'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([[7],[3,'formType']])
Z([3,'share'])
Z([[2,'==='],[[7],[3,'styleType']],[1,'block']])
Z(z[8])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'data-v-b723dbb0-default-0']]])
Z([3,'1ca23c7c'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1']]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'data-v-b723dbb0-default-1']]])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-49937570-default-0'])
Z([3,'data-v-cb6f091a-default-2'])
Z([3,'data-v-45ee0c8a-default-4'])
Z([3,'data-v-267dd169-default-4'])
Z([3,'data-v-5bc4acb2-default-1'])
Z([3,'data-v-339946ad-default-0'])
Z([3,'data-v-b723dbb0-default-0'])
Z([3,'data-v-b723dbb0-default-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'9b33ffd8'])
Z([a,[3,'_div data-v-f6cd1fba '],[[4],[[5],[[5],[[5],[1,'home']],[[4],[[5],[[2,'?:'],[[6],[[7],[3,'deviceInfo']],[3,'hasFringe']],[1,'home-fringe'],[1,'']]]]],[[4],[[5],[[2,'?:'],[[6],[[7],[3,'deviceInfo']],[3,'statusBar24']],[1,'home-24'],[1,'']]]]]]])
Z([3,'_div data-v-f6cd1fba home-topbar'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'locationAuthorizeState']],[1,'unused']],[[7],[3,'showColumnHint']]])
Z([[7],[3,'showCahnnelPanel']])
Z([3,'handleProxy'])
Z(z[5])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'3'])
Z([3,'7df86200'])
Z([a,z[1][1],[[4],[[5],[[5],[1,'home-main']],[[2,'?:'],[[7],[3,'showCahnnelPanel']],[1,'no-scroll'],[1,'']]]]])
Z([3,'main'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'56b7e65c'])
Z([[2,'==='],[[7],[3,'pageError']],[1,0]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'currentTab']],[1,4]],[[2,'==='],[[7],[3,'locationAuthorizeState']],[1,'unauthorized']]])
Z([[2,'&&'],[[7],[3,'showWeather']],[[2,'==='],[[7],[3,'currentTab']],[1,4]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listcache']])
Z(z[18])
Z([a,[3,'_div data-v-f6cd1fba tab-content '],[[4],[[5],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'currentTab']]],[1,'active'],[1,'']]]]])
Z([[7],[3,'index']])
Z([[2,'==='],[[7],[3,'index']],[1,0]])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'2-']],[[7],[3,'index']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1b78c4c6'])
Z(z[5])
Z(z[5])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'3-']],[[7],[3,'index']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[8])
Z([[2,'+'],[1,'5-'],[[7],[3,'index']]])
Z([3,'4ed2acd0'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'02a4b1ec'])
Z(z[5])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'5']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[8])
Z([1,'7'])
Z([3,'ccb7467a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'9b33ffd8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'af1564be'])
Z([a,[3,'_div data-v-49937570 '],[[4],[[5],[[5],[[5],[1,'app-my']],[[4],[[5],[[2,'?:'],[[6],[[7],[3,'deviceInfo']],[3,'hasFringe']],[1,'app-my-fringe'],[1,'']]]]],[[4],[[5],[[2,'?:'],[[6],[[7],[3,'deviceInfo']],[3,'statusBar24']],[1,'app-my-24'],[1,'']]]]]]])
Z([3,'_div data-v-49937570 banner'])
Z([[7],[3,'isLogin']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'data-v-49937570-default-0']]])
Z([3,'1ca23c7c'])
Z([3,'handleProxy'])
Z([3,'_scroll-view data-v-49937570 content'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'true'])
Z([[7],[3,'totalNum']])
Z([3,'_div data-v-49937570 list-content'])
Z([[2,'==='],[[7],[3,'pageError']],[1,0]])
Z([[2,'!'],[[7],[3,'isLogin']]])
Z([[2,'==='],[[6],[[7],[3,'articleList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'articleList']])
Z(z[16])
Z([[7],[3,'index']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'skipType']],[1,'video']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'skipType']],[1,'photoset']])
Z([[6],[[7],[3,'item']],[3,'imgsrc']])
Z(z[23])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'02a4b1ec'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'af1564be'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5b060ecd'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'pageError']],[1,0]],[[6],[[7],[3,'videoList']],[3,'length']]])
Z([a,[3,'_div data-v-6e1db71c container '],[[4],[[5],[[5],[[5],[1,'videos']],[[4],[[5],[[2,'?:'],[[6],[[7],[3,'deviceInfo']],[3,'hasFringe']],[1,'videos-fringe'],[1,'']]]]],[[4],[[5],[[2,'?:'],[[6],[[7],[3,'deviceInfo']],[3,'statusBar24']],[1,'videos-24'],[1,'']]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'videoList']])
Z([3,'item.vid'])
Z([3,'handleProxy'])
Z([3,'_div data-v-6e1db71c list-item video-holder'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'0-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'item']],[3,'vid']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'0-']],[[7],[3,'index']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'ebc4463e'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'788fb753'])
Z([[2,'==='],[[7],[3,'pageError']],[1,'netLoading']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'2']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'02a4b1ec'])
Z([3,'netLoading'])
Z([[2,'==='],[[7],[3,'pageError']],[1,'netError']])
Z([3,'true'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[18])
Z([3,'netError'])
Z([[2,'==='],[[7],[3,'pageError']],[1,'dataError']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[18])
Z([3,'dataError'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5b060ecd'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1ace90d8'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'44c5e47d'])
Z([[2,'==='],[[7],[3,'pageError']],[1,0]])
Z([3,'_div data-v-267dd169 app-article'])
Z([[7],[3,'showOpenNewsApp']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f0e44fac'])
Z([a,[3,'_div data-v-267dd169 '],[[2,'?:'],[[7],[3,'hideMoreContent']],[1,'article-wrapper backflow-fixed-height'],[1,'article-wrapper']]])
Z([3,'article'])
Z([[6],[[7],[3,'article']],[3,'desc']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'2']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'497cab34'])
Z([3,'handleProxy'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'7cc6b6fe'])
Z(z[5])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4']]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'data-v-267dd169-default-4']]])
Z(z[7])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'5']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7a638217'])
Z([3,'block'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[22])
Z(z[23])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'56b7e65c'])
Z([3,'true'])
Z([[2,'>'],[[7],[3,'recommendLength']],[1,0]])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7f61f3a6'])
Z(z[13])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'10']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[15])
Z([1,'1'])
Z([3,'d7d95cc0'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'11']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0564e31f'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'12']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'b4a15b2a'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'13']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f02b268e'])
Z([3,'doc'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'14']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'788fb753'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'15']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0885c3b4'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'16']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'02a4b1ec'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1ace90d8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'f1d942fc'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'photoset']])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'photosetID']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'img']])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6494dbd9'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'video']])
Z([3,'_xvideo data-v-3b9acaea'])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'cover']])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'src']])
Z([3,'currentVideo'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'497cab34'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'nodes']])
Z(z[1])
Z([[7],[3,'index']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'video']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'0-']],[[7],[3,'index']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6494dbd9'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'audio']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'1-']],[[7],[3,'index']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[8])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'photoset']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'2-']],[[7],[3,'index']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f1d942fc'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'img']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'3-']],[[7],[3,'index']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[14])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4408bdea'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'44c5e47d'])
Z([3,'_div data-v-20ea1e3b comments'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'021675ae'])
Z([3,'true'])
Z([3,'hotList'])
Z([3,'handleProxy'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'2']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'0'])
Z(z[5])
Z(z[6])
Z([3,'newList'])
Z([[2,'!=='],[[7],[3,'pageError']],[1,0]])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'02a4b1ec'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4408bdea'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0027996a'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'44c5e47d'])
Z([[2,'==='],[[7],[3,'pageError']],[1,0]])
Z([3,'_div data-v-45ee0c8a photoset'])
Z([[7],[3,'showOpenNewsApp']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f0e44fac'])
Z([3,'handleProxy'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'2']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'1'])
Z([3,'7cc6b6fe'])
Z([[7],[3,'showSlidePhotoset']])
Z(z[5])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4']]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'data-v-45ee0c8a-default-4']]])
Z(z[7])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'5']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7a638217'])
Z([3,'block'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[18])
Z(z[19])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'56b7e65c'])
Z([3,'true'])
Z([[6],[[7],[3,'article']],[3,'postid']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7f61f3a6'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'10']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'d7d95cc0'])
Z([3,'photoset'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'11']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0564e31f'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'12']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'b4a15b2a'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'13']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f02b268e'])
Z(z[31])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'14']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'788fb753'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'15']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0885c3b4'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'16']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'02a4b1ec'])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0027996a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'22084a62'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'44c5e47d'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'pageError']],[1,0]],[[7],[3,'vid']]])
Z([3,'_div data-v-cb6f091a video-detail'])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'contentHeight']]],[1,';']]])
Z([3,'_div data-v-cb6f091a grid-const video-holder'])
Z([[2,'||'],[[7],[3,'isWifi']],[[7],[3,'allowMobileDataPlay']]])
Z([3,'handleProxy'])
Z([3,'_xvideo data-v-cb6f091a'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([[6],[[7],[3,'currentVideo']],[3,'fCover']])
Z([[6],[[7],[3,'currentVideo']],[3,'mp4_url']])
Z([[7],[3,'xvclass']])
Z([[7],[3,'xvid']])
Z([[7],[3,'showOpenNewsApp']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'2']]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'data-v-cb6f091a-default-2']]])
Z([3,'f0e44fac'])
Z([a,[3,'_scroll-view data-v-cb6f091a '],[[4],[[5],[[5],[1,'content']],[[2,'?:'],[[7],[3,'showOpenNewsApp']],[1,'content-backflow'],[1,'']]]]])
Z([[2,'!'],[[7],[3,'showDownloadModal']]])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'63f14b6e'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'videoList']])
Z([3,'item.docid'])
Z([[6],[[7],[3,'item']],[3,'docid']])
Z(z[8])
Z([a,[3,'_div data-v-cb6f091a related-item related-video-item '],[[4],[[5],[[5],[[5],[[5],[[5],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'item']],[3,'docid']],[[7],[3,'vid']]],[1,'active'],[1,'']]],[[2,'?:'],[[2,'==='],[[7],[3,'playStatus']],[1,'ended']],[1,'play-status-ended'],[1,'']]],[[2,'?:'],[[2,'==='],[[7],[3,'playStatus']],[1,'beforestart']],[1,'play-status-beforestart'],[1,'']]],[[2,'?:'],[[2,'==='],[[7],[3,'playStatus']],[1,'paused']],[1,'play-status-paused'],[1,'']]],[[2,'?:'],[[2,'==='],[[7],[3,'playStatus']],[1,'playing']],[1,'play-status-playing'],[1,'']]]]])
Z(z[10])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z(z[27])
Z([3,'navigator-hover'])
Z([[6],[[7],[3,'item']],[3,'pvCount']])
Z([[2,'=='],[[2,'%'],[[7],[3,'index']],[1,5]],[1,4]])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'5']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0564e31f'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'b4a15b2a'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f02b268e'])
Z([3,'video'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'8']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'788fb753'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0885c3b4'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'10']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'02a4b1ec'])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'22084a62'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/BackflowBottom.vue.wxml','/components/base/LaunchBtn.vue.wxml','./components/BottomBar.vue.wxml','/components/CollectionBtn.vue.wxml','/components/base/ShareBtns.vue.wxml','./components/BottomBarFixed.vue.wxml','./components/ChannelPanel.vue.wxml','./components/CollectionBtn.vue.wxml','/components/base/LoginBtn.vue.wxml','./components/CommentBlock.vue.wxml','/components/CommentList.vue.wxml','./components/CommentList.vue.wxml','./components/FirstOpenTips.vue.wxml','./components/ModalDownload.vue.wxml','./components/MoreContentMask.vue.wxml','./components/NewsList.vue.wxml','./components/PageError.vue.wxml','./components/PostList.vue.wxml','./components/RecommendPart.vue.wxml','./components/ShareMoments.vue.wxml','./components/Subscription.vue.wxml','./components/TopBar.vue.wxml','./components/VideoInfoBar.vue.wxml','./components/VideolistToolbar.vue.wxml','./components/base/LaunchBtn.vue.wxml','/components/slots','./components/base/LoginBtn.vue.wxml','./components/base/ShareBtns.vue.wxml','./components/slots.wxml','/components/TopBar.vue.wxml','/components/PageError.vue.wxml','/components/VideolistToolbar.vue.wxml','/components/ShareMoments.vue.wxml','/components/VideoInfoBar.vue.wxml','/components/BackflowBottom.vue.wxml','/components/BottomBarFixed.vue.wxml','/components/BottomBar.vue.wxml','/components/ModalDownload.vue.wxml','/components/MoreContentMask.vue.wxml','/components/Subscription.vue.wxml','/components/CommentBlock.vue.wxml','/components/RecommendPart.vue.wxml','/pages/article/components/tmplt.vue.wxml','/components/ChannelPanel.vue.wxml','/components/PostList.vue.wxml','/components/NewsList.vue.wxml','/components/FirstOpenTips.vue.wxml','/pages/article/components/MediaMod.vue.wxml','/pages/article/components/ImageMod.vue.wxml','./pages/Home.vue.wxml','./pages/Home.wxml','/pages/Home.vue.wxml','./pages/My.vue.wxml','./pages/My.wxml','/pages/My.vue.wxml','./pages/Videos.vue.wxml','./pages/Videos.wxml','/pages/Videos.vue.wxml','./pages/article/article.vue.wxml','./pages/article/article.wxml','/pages/article/article.vue.wxml','./pages/article/components/ImageMod.vue.wxml','./pages/article/components/MediaMod.vue.wxml','./pages/article/components/tmplt.vue.wxml','./pages/comments/comments.vue.wxml','./pages/comments/comments.wxml','/pages/comments/comments.vue.wxml','./pages/photoset/photoset.vue.wxml','./pages/photoset/photoset.wxml','/pages/photoset/photoset.vue.wxml','./pages/video/video.vue.wxml','./pages/video/video.wxml','/pages/video/video.vue.wxml'];d_[x[0]]={}
d_[x[0]]["0564e31f"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':0564e31f'
r.wxVkey=b
gg.f=$gdc(f_["./components/BackflowBottom.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[0],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[0],3,192)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
d_[x[2]]["f02b268e"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':f02b268e'
r.wxVkey=b
gg.f=$gdc(f_["./components/BottomBar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
var oB=_mz(z,'form',['bindsubmit',1,'class',1,'data-comkey',2,'data-eventid',3,'reportSubmit',4],[],e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',6,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
var cF=_v()
_(oD,cF)
if(_oz(z,8,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,9,e,s,gg)){fE.wxVkey=1
var hG=_v()
_(fE,hG)
var oH=_oz(z,11,e,s,gg)
var cI=_gd(x[2],oH,e_,d_)
if(cI){
var oJ=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[2],5,94)
}
var lK=_v()
_(xC,lK)
var aL=_oz(z,14,e,s,gg)
var tM=_gd(x[2],aL,e_,d_)
if(tM){
var eN=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[2],5,192)
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=e_[x[2]].i
_ai(oD,x[3],e_,x[2],1,1)
_ai(oD,x[4],e_,x[2],2,2)
oD.pop()
oD.pop()
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[x[3],x[4]],ic:[]}
d_[x[5]]={}
d_[x[5]]["b4a15b2a"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[5]+':b4a15b2a'
r.wxVkey=b
gg.f=$gdc(f_["./components/BottomBarFixed.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[5]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[5]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
d_[x[6]]["7df86200"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[6]+':7df86200'
r.wxVkey=b
gg.f=$gdc(f_["./components/ChannelPanel.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[6]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
d_[x[7]]["f3341ba2"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[7]+':f3341ba2'
r.wxVkey=b
gg.f=$gdc(f_["./components/CollectionBtn.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[7],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[7],3,171)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oH=e_[x[7]].i
_ai(oH,x[8],e_,x[7],1,1)
oH.pop()
return r
}
e_[x[7]]={f:m4,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[9]]={}
d_[x[9]]["7f61f3a6"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[9]+':7f61f3a6'
r.wxVkey=b
gg.f=$gdc(f_["./components/CommentBlock.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[9],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[9],2,143)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oJ=e_[x[9]].i
_ai(oJ,x[10],e_,x[9],1,1)
oJ.pop()
return r
}
e_[x[9]]={f:m5,j:[],i:[],ti:[x[10]],ic:[]}
d_[x[11]]={}
d_[x[11]]["021675ae"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[11]+':021675ae'
r.wxVkey=b
gg.f=$gdc(f_["./components/CommentList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[11]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oB,cF)
if(_oz(z,5,e,s,gg)){cF.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[11]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
d_[x[12]]["ccb7467a"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[12]+':ccb7467a'
r.wxVkey=b
gg.f=$gdc(f_["./components/FirstOpenTips.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[12]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
d_[x[13]]["0885c3b4"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[13]+':0885c3b4'
r.wxVkey=b
gg.f=$gdc(f_["./components/ModalDownload.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[13]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
d_[x[14]]["7cc6b6fe"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[14]+':7cc6b6fe'
r.wxVkey=b
gg.f=$gdc(f_["./components/MoreContentMask.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[14]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[14]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
d_[x[15]]["4ed2acd0"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[15]+':4ed2acd0'
r.wxVkey=b
gg.f=$gdc(f_["./components/NewsList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oJ=_mz(z,'view',['bindtap',6,'class',1,'data-comkey',2,'data-eventid',3,'data-id',4,'data-index',5,'data-skipType',6,'data-url',7,'hover',8,'hoverClass',9],[],fE,oD,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,16,fE,oD,gg)){lK.wxVkey=1
var aL=_v()
_(lK,aL)
if(_oz(z,17,fE,oD,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
}
else if(_oz(z,18,fE,oD,gg)){lK.wxVkey=2
var tM=_v()
_(lK,tM)
if(_oz(z,19,fE,oD,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
}
else if(_oz(z,20,fE,oD,gg)){lK.wxVkey=3
var eN=_v()
_(lK,eN)
if(_oz(z,21,fE,oD,gg)){eN.wxVkey=1
}
eN.wxXCkey=1
}
else if(_oz(z,22,fE,oD,gg)){lK.wxVkey=4
var bO=_n('view')
_rz(z,bO,'class',23,fE,oD,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,24,fE,oD,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,25,fE,oD,gg)){xQ.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
_(lK,bO)
}
else if(_oz(z,26,fE,oD,gg)){lK.wxVkey=5
}
else if(_oz(z,27,fE,oD,gg)){lK.wxVkey=6
var oR=_v()
_(lK,oR)
if(_oz(z,28,fE,oD,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
}
else{lK.wxVkey=7
}
lK.wxXCkey=1
_(cF,oJ)
var oH=_v()
_(cF,oH)
if(_oz(z,29,fE,oD,gg)){oH.wxVkey=1
}
var cI=_v()
_(cF,cI)
if(_oz(z,30,fE,oD,gg)){cI.wxVkey=1
var fS=_mz(z,'view',['bindtap',31,'class',1,'data-appid',2,'data-comkey',3,'data-eventid',4,'data-path',5,'target',6],[],fE,oD,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,38,fE,oD,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
_(cI,fS)
}
oH.wxXCkey=1
cI.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'item','index','item.docid')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[15]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
d_[x[16]]["02a4b1ec"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[16]+':02a4b1ec'
r.wxVkey=b
gg.f=$gdc(f_["./components/PageError.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
else if(_oz(z,4,e,s,gg)){oD.wxVkey=2
var fE=_v()
_(oD,fE)
if(_oz(z,5,e,s,gg)){fE.wxVkey=1
}
fE.wxXCkey=1
}
else if(_oz(z,6,e,s,gg)){oD.wxVkey=3
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
d_[x[17]]["1b78c4c6"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[17]+':1b78c4c6'
r.wxVkey=b
gg.f=$gdc(f_["./components/PostList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[17]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
if(_oz(z,5,fE,oD,gg)){oH.wxVkey=1
}
oH.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'item','index','item.contentId')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[17]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
d_[x[18]]["d7d95cc0"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[18]+':d7d95cc0'
r.wxVkey=b
gg.f=$gdc(f_["./components/RecommendPart.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[18]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_mz(z,'view',['bindtap',6,'class',1,'data-comkey',2,'data-eventid',3,'data-id',4,'data-index',5,'data-type',6,'data-url',7],[],cF,fE,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,14,cF,fE,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,4,oD,e,s,gg,xC,'item','index',''-'+index')
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[18]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
d_[x[19]]["788fb753"]=function(e,s,r,gg){
var z=gz$gwx_15()
var b=x[19]+':788fb753'
r.wxVkey=b
gg.f=$gdc(f_["./components/ShareMoments.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[19]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
d_[x[20]]["56b7e65c"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[20]+':56b7e65c'
r.wxVkey=b
gg.f=$gdc(f_["./components/Subscription.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[20]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'form',['bindsubmit',2,'class',1,'data-comkey',2,'data-eventid',3,'reportSubmit',4],[],e,s,gg)
var oD=_v()
_(xC,oD)
var fE=_oz(z,9,e,s,gg)
var cF=_gd(x[20],fE,e_,d_)
if(cF){
var hG=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[20],5,159)
_(oB,xC)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var hU=e_[x[20]].i
_ai(hU,x[8],e_,x[20],1,1)
hU.pop()
return r
}
e_[x[20]]={f:m15,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[21]]={}
d_[x[21]]["44c5e47d"]=function(e,s,r,gg){
var z=gz$gwx_17()
var b=x[21]+':44c5e47d'
r.wxVkey=b
gg.f=$gdc(f_["./components/TopBar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[21]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[21]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
d_[x[22]]["63f14b6e"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[22]+':63f14b6e'
r.wxVkey=b
gg.f=$gdc(f_["./components/VideoInfoBar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[22],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[22],6,147)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oX=e_[x[22]].i
_ai(oX,x[4],e_,x[22],1,1)
oX.pop()
return r
}
e_[x[22]]={f:m17,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[23]]={}
d_[x[23]]["ebc4463e"]=function(e,s,r,gg){
var z=gz$gwx_19()
var b=x[23]+':ebc4463e'
r.wxVkey=b
gg.f=$gdc(f_["./components/VideolistToolbar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[23]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[23],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[23],8,115)
var hG=_v()
_(oB,hG)
var oH=_oz(z,6,e,s,gg)
var cI=_gd(x[23],oH,e_,d_)
if(cI){
var oJ=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[23],10,147)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var aZ=e_[x[23]].i
_ai(aZ,x[3],e_,x[23],1,1)
_ai(aZ,x[8],e_,x[23],2,2)
aZ.pop()
aZ.pop()
return r
}
e_[x[23]]={f:m18,j:[],i:[],ti:[x[3],x[8]],ic:[]}
d_[x[24]]={}
d_[x[24]]["f0e44fac"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[24]+':f0e44fac'
r.wxVkey=b
gg.f=$gdc(f_["./components/base/LaunchBtn.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
var oB=_mz(z,'button',['appParameter',1,'binderror',1,'class',2,'data-comkey',3,'data-eventid',4,'openType',5],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,9,e,s,gg)
var fE=_gd(x[24],oD,e_,d_)
if(fE){
var cF=_1z(z,8,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[24],1,312)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[24]]["default"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[24]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/base/LaunchBtn.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var e2=e_[x[24]].i
_ai(e2,x[25],e_,x[24],1,1)
e2.pop()
return r
}
e_[x[24]]={f:m19,j:[],i:[],ti:[x[25]],ic:[]}
d_[x[26]]={}
d_[x[26]]["1ca23c7c"]=function(e,s,r,gg){
var z=gz$gwx_21()
var b=x[26]+':1ca23c7c'
r.wxVkey=b
gg.f=$gdc(f_["./components/base/LoginBtn.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[26]);return}
p_[b]=true
try{
var oB=_mz(z,'button',['bindgetuserinfo',1,'class',1,'data-comkey',2,'data-eventid',3,'formType',4,'hoverClass',5,'openType',6],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,10,e,s,gg)
var fE=_gd(x[26],oD,e_,d_)
if(fE){
var cF=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[26],1,331)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[26]]["default"]=function(e,s,r,gg){
var z=gz$gwx_21()
var b=x[26]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/base/LoginBtn.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[26]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var o4=e_[x[26]].i
_ai(o4,x[25],e_,x[26],1,1)
o4.pop()
return r
}
e_[x[26]]={f:m20,j:[],i:[],ti:[x[25]],ic:[]}
d_[x[27]]={}
d_[x[27]]["7a638217"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[27]+':7a638217'
r.wxVkey=b
gg.f=$gdc(f_["./components/base/ShareBtns.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_mz(z,'button',['bindtap',2,'class',1,'data-comkey',2,'data-eventid',3,'formType',4,'openType',5],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,8,e,s,gg)){fE.wxVkey=1
}
fE.wxXCkey=1
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,9,e,s,gg)){xC.wxVkey=1
var cF=_v()
_(xC,cF)
var hG=_oz(z,11,e,s,gg)
var oH=_gd(x[27],hG,e_,d_)
if(oH){
var cI=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[27],4,170)
}
else{xC.wxVkey=2
var oJ=_v()
_(xC,oJ)
var lK=_oz(z,13,e,s,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],5,146)
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var o6=e_[x[27]].i
_ai(o6,x[8],e_,x[27],1,1)
o6.pop()
return r
}
e_[x[27]]={f:m21,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[28]]={}
d_[x[28]]["data-v-49937570-default-0"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[28]+':data-v-49937570-default-0'
r.wxVkey=b
gg.f=$gdc(f_["./components/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[28]]["data-v-cb6f091a-default-2"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[28]+':data-v-cb6f091a-default-2'
r.wxVkey=b
gg.f=$gdc(f_["./components/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[28]]["data-v-45ee0c8a-default-4"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[28]+':data-v-45ee0c8a-default-4'
r.wxVkey=b
gg.f=$gdc(f_["./components/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[28]]["data-v-267dd169-default-4"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[28]+':data-v-267dd169-default-4'
r.wxVkey=b
gg.f=$gdc(f_["./components/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[28]]["data-v-5bc4acb2-default-1"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[28]+':data-v-5bc4acb2-default-1'
r.wxVkey=b
gg.f=$gdc(f_["./components/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[28]]["data-v-339946ad-default-0"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[28]+':data-v-339946ad-default-0'
r.wxVkey=b
gg.f=$gdc(f_["./components/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[28]]["data-v-b723dbb0-default-0"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[28]+':data-v-b723dbb0-default-0'
r.wxVkey=b
gg.f=$gdc(f_["./components/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[28]]["data-v-b723dbb0-default-1"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[28]+':data-v-b723dbb0-default-1'
r.wxVkey=b
gg.f=$gdc(f_["./components/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var c8=e_[x[28]].i
_ai(c8,x[29],e_,x[28],1,1)
_ai(c8,x[10],e_,x[28],2,2)
_ai(c8,x[30],e_,x[28],3,2)
_ai(c8,x[8],e_,x[28],4,2)
_ai(c8,x[30],e_,x[28],5,2)
_ai(c8,x[31],e_,x[28],6,2)
_ai(c8,x[32],e_,x[28],7,2)
_ai(c8,x[30],e_,x[28],8,2)
_ai(c8,x[29],e_,x[28],9,2)
_ai(c8,x[1],e_,x[28],10,2)
_ai(c8,x[33],e_,x[28],11,2)
_ai(c8,x[34],e_,x[28],12,2)
_ai(c8,x[35],e_,x[28],13,2)
_ai(c8,x[36],e_,x[28],14,2)
_ai(c8,x[32],e_,x[28],15,2)
_ai(c8,x[37],e_,x[28],16,2)
_ai(c8,x[30],e_,x[28],17,2)
_ai(c8,x[29],e_,x[28],18,2)
_ai(c8,x[1],e_,x[28],19,2)
_ai(c8,x[38],e_,x[28],20,2)
_ai(c8,x[4],e_,x[28],21,2)
_ai(c8,x[39],e_,x[28],22,2)
_ai(c8,x[40],e_,x[28],23,2)
_ai(c8,x[41],e_,x[28],24,2)
_ai(c8,x[34],e_,x[28],25,2)
_ai(c8,x[35],e_,x[28],26,2)
_ai(c8,x[36],e_,x[28],27,2)
_ai(c8,x[32],e_,x[28],28,2)
_ai(c8,x[37],e_,x[28],29,2)
_ai(c8,x[30],e_,x[28],30,2)
_ai(c8,x[29],e_,x[28],31,2)
_ai(c8,x[1],e_,x[28],32,2)
_ai(c8,x[42],e_,x[28],33,2)
_ai(c8,x[38],e_,x[28],34,2)
_ai(c8,x[4],e_,x[28],35,2)
_ai(c8,x[39],e_,x[28],36,2)
_ai(c8,x[40],e_,x[28],37,2)
_ai(c8,x[41],e_,x[28],38,2)
_ai(c8,x[34],e_,x[28],39,2)
_ai(c8,x[35],e_,x[28],40,2)
_ai(c8,x[36],e_,x[28],41,2)
_ai(c8,x[32],e_,x[28],42,2)
_ai(c8,x[37],e_,x[28],43,2)
_ai(c8,x[30],e_,x[28],44,2)
_ai(c8,x[43],e_,x[28],45,2)
_ai(c8,x[39],e_,x[28],46,2)
_ai(c8,x[44],e_,x[28],47,2)
_ai(c8,x[45],e_,x[28],48,2)
_ai(c8,x[30],e_,x[28],49,2)
_ai(c8,x[46],e_,x[28],50,2)
_ai(c8,x[3],e_,x[28],51,2)
_ai(c8,x[8],e_,x[28],52,2)
_ai(c8,x[3],e_,x[28],53,2)
_ai(c8,x[4],e_,x[28],54,2)
_ai(c8,x[1],e_,x[28],55,2)
_ai(c8,x[4],e_,x[28],56,2)
_ai(c8,x[8],e_,x[28],57,2)
_ai(c8,x[10],e_,x[28],58,2)
_ai(c8,x[47],e_,x[28],59,2)
_ai(c8,x[48],e_,x[28],60,2)
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
c8.pop()
return r
}
e_[x[28]]={f:m22,j:[],i:[],ti:[x[29],x[10],x[30],x[8],x[30],x[31],x[32],x[30],x[29],x[1],x[33],x[34],x[35],x[36],x[32],x[37],x[30],x[29],x[1],x[38],x[4],x[39],x[40],x[41],x[34],x[35],x[36],x[32],x[37],x[30],x[29],x[1],x[42],x[38],x[4],x[39],x[40],x[41],x[34],x[35],x[36],x[32],x[37],x[30],x[43],x[39],x[44],x[45],x[30],x[46],x[3],x[8],x[3],x[4],x[1],x[4],x[8],x[10],x[47],x[48]],ic:[]}
d_[x[49]]={}
d_[x[49]]["9b33ffd8"]=function(e,s,r,gg){
var z=gz$gwx_24()
var b=x[49]+':9b33ffd8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/Home.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[49]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
var cF=_v()
_(fE,cF)
var hG=_oz(z,10,e,s,gg)
var oH=_gd(x[49],hG,e_,d_)
if(oH){
var cI=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[49],20,190)
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
var oJ=_mz(z,'view',['class',11,'id',1],[],e,s,gg)
var aL=_v()
_(oJ,aL)
var tM=_oz(z,14,e,s,gg)
var eN=_gd(x[49],tM,e_,d_)
if(eN){
var bO=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[49],22,154)
var lK=_v()
_(oJ,lK)
if(_oz(z,15,e,s,gg)){lK.wxVkey=1
var oP=_v()
_(lK,oP)
if(_oz(z,16,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(lK,xQ)
if(_oz(z,17,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(lK,oR)
var fS=function(hU,cT,oV,gg){
var oX=_mz(z,'view',['class',22,'key',1],[],hU,cT,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,24,hU,cT,gg)){lY.wxVkey=1
var aZ=_v()
_(lY,aZ)
var t1=_oz(z,26,hU,cT,gg)
var e2=_gd(x[49],t1,e_,d_)
if(e2){
var b3=_1z(z,25,hU,cT,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[49],46,96)
}
else{lY.wxVkey=2
var o4=_v()
_(lY,o4)
var x5=_oz(z,32,hU,cT,gg)
var o6=_gd(x[49],x5,e_,d_)
if(o6){
var f7=_1z(z,29,hU,cT,gg) || {}
var cur_globalf=gg.f
o4.wxXCkey=3
o6(f7,f7,o4,gg)
gg.f=cur_globalf
}
else _w(x5,x[49],47,187)
}
lY.wxXCkey=1
_(oV,oX)
return oV
}
oR.wxXCkey=2
_2z(z,20,fS,e,s,gg,oR,'item','index','index')
oP.wxXCkey=1
xQ.wxXCkey=1
}
else{lK.wxVkey=2
var c8=_v()
_(lK,c8)
var h9=_oz(z,34,e,s,gg)
var o0=_gd(x[49],h9,e_,d_)
if(o0){
var cAB=_1z(z,33,e,s,gg) || {}
var cur_globalf=gg.f
c8.wxXCkey=3
o0(cAB,cAB,c8,gg)
gg.f=cur_globalf
}
else _w(h9,x[49],58,71)
}
lK.wxXCkey=1
_(oB,oJ)
var oBB=_v()
_(oB,oBB)
var lCB=_oz(z,39,e,s,gg)
var aDB=_gd(x[49],lCB,e_,d_)
if(aDB){
var tEB=_1z(z,36,e,s,gg) || {}
var cur_globalf=gg.f
oBB.wxXCkey=3
aDB(tEB,tEB,oBB,gg)
gg.f=cur_globalf
}
else _w(lCB,x[49],59,143)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var o0=e_[x[49]].i
_ai(o0,x[43],e_,x[49],1,1)
_ai(o0,x[39],e_,x[49],2,2)
_ai(o0,x[44],e_,x[49],3,2)
_ai(o0,x[45],e_,x[49],4,2)
_ai(o0,x[30],e_,x[49],5,2)
_ai(o0,x[46],e_,x[49],6,2)
o0.pop()
o0.pop()
o0.pop()
o0.pop()
o0.pop()
o0.pop()
return r
}
e_[x[49]]={f:m23,j:[],i:[],ti:[x[43],x[39],x[44],x[45],x[30],x[46]],ic:[]}
d_[x[50]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var oBB=e_[x[50]].i
_ai(oBB,x[51],e_,x[50],1,1)
var lCB=_v()
_(r,lCB)
var aDB=_oz(z,1,e,s,gg)
var tEB=_gd(x[50],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[50],1,50)
oBB.pop()
return r
}
e_[x[50]]={f:m24,j:[],i:[],ti:[x[51]],ic:[]}
d_[x[52]]={}
d_[x[52]]["af1564be"]=function(e,s,r,gg){
var z=gz$gwx_26()
var b=x[52]+':af1564be'
r.wxVkey=b
gg.f=$gdc(f_["./pages/My.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[52]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
else{oD.wxVkey=2
var fE=_v()
_(oD,fE)
var cF=_oz(z,5,e,s,gg)
var hG=_gd(x[52],cF,e_,d_)
if(hG){
var oH=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[52],9,113)
}
oD.wxXCkey=1
_(oB,xC)
var cI=_mz(z,'scroll-view',['bindscrolltolower',6,'class',1,'data-comkey',2,'data-eventid',3,'scrollY',4],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,11,e,s,gg)){oJ.wxVkey=1
}
var lK=_n('view')
_rz(z,lK,'class',12,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,13,e,s,gg)){aL.wxVkey=1
var tM=_v()
_(aL,tM)
if(_oz(z,14,e,s,gg)){tM.wxVkey=1
}
else if(_oz(z,15,e,s,gg)){tM.wxVkey=2
}
else{tM.wxVkey=3
var eN=_v()
_(tM,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
if(_oz(z,21,xQ,oP,gg)){cT.wxVkey=1
}
else if(_oz(z,22,xQ,oP,gg)){cT.wxVkey=2
var hU=_v()
_(cT,hU)
if(_oz(z,23,xQ,oP,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
}
else{cT.wxVkey=3
var oV=_v()
_(cT,oV)
if(_oz(z,24,xQ,oP,gg)){oV.wxVkey=1
}
oV.wxXCkey=1
}
cT.wxXCkey=1
return oR
}
eN.wxXCkey=2
_2z(z,18,bO,e,s,gg,eN,'item','index','index')
}
tM.wxXCkey=1
}
else{aL.wxVkey=2
var cW=_v()
_(aL,cW)
var oX=_oz(z,26,e,s,gg)
var lY=_gd(x[52],oX,e_,d_)
if(lY){
var aZ=_1z(z,25,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[52],66,73)
}
aL.wxXCkey=1
_(cI,lK)
oJ.wxXCkey=1
_(oB,cI)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var oHB=e_[x[52]].i
_ai(oHB,x[8],e_,x[52],1,1)
_ai(oHB,x[30],e_,x[52],2,2)
oHB.pop()
oHB.pop()
return r
}
e_[x[52]]={f:m25,j:[],i:[],ti:[x[8],x[30]],ic:[]}
d_[x[53]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var oJB=e_[x[53]].i
_ai(oJB,x[54],e_,x[53],1,1)
var fKB=_v()
_(r,fKB)
var cLB=_oz(z,1,e,s,gg)
var hMB=_gd(x[53],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[53],1,48)
oJB.pop()
return r
}
e_[x[53]]={f:m26,j:[],i:[],ti:[x[54]],ic:[]}
d_[x[55]]={}
d_[x[55]]["5b060ecd"]=function(e,s,r,gg){
var z=gz$gwx_28()
var b=x[55]+':5b060ecd'
r.wxVkey=b
gg.f=$gdc(f_["./pages/Videos.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[55]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_mz(z,'view',['bindtap',7,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],hG,cF,gg)
var lK=_v()
_(oJ,lK)
var aL=_oz(z,13,hG,cF,gg)
var tM=_gd(x[55],aL,e_,d_)
if(tM){
var eN=_1z(z,12,hG,cF,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[55],23,76)
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,5,fE,e,s,gg,oD,'item','index','item.vid')
var bO=_v()
_(xC,bO)
var oP=_oz(z,15,e,s,gg)
var xQ=_gd(x[55],oP,e_,d_)
if(xQ){
var oR=_1z(z,14,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[55],32,62)
_(oB,xC)
}
else if(_oz(z,16,e,s,gg)){oB.wxVkey=2
var fS=_v()
_(oB,fS)
var cT=_oz(z,18,e,s,gg)
var hU=_gd(x[55],cT,e_,d_)
if(hU){
var oV=_1z(z,17,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[55],34,116)
}
else if(_oz(z,20,e,s,gg)){oB.wxVkey=3
var cW=_v()
_(oB,cW)
var oX=_oz(z,23,e,s,gg)
var lY=_gd(x[55],oX,e_,d_)
if(lY){
var aZ=_1z(z,22,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[55],35,128)
}
else if(_oz(z,25,e,s,gg)){oB.wxVkey=4
var t1=_v()
_(oB,t1)
var e2=_oz(z,27,e,s,gg)
var b3=_gd(x[55],e2,e_,d_)
if(b3){
var o4=_1z(z,26,e,s,gg) || {}
var cur_globalf=gg.f
t1.wxXCkey=3
b3(o4,o4,t1,gg)
gg.f=cur_globalf
}
else _w(e2,x[55],36,114)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var oPB=e_[x[55]].i
_ai(oPB,x[31],e_,x[55],1,1)
_ai(oPB,x[32],e_,x[55],2,2)
_ai(oPB,x[30],e_,x[55],3,2)
oPB.pop()
oPB.pop()
oPB.pop()
return r
}
e_[x[55]]={f:m27,j:[],i:[],ti:[x[31],x[32],x[30]],ic:[]}
d_[x[56]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var aRB=e_[x[56]].i
_ai(aRB,x[57],e_,x[56],1,1)
var tSB=_v()
_(r,tSB)
var eTB=_oz(z,1,e,s,gg)
var bUB=_gd(x[56],eTB,e_,d_)
if(bUB){
var oVB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tSB.wxXCkey=3
bUB(oVB,oVB,tSB,gg)
gg.f=cur_globalf
}
else _w(eTB,x[56],1,52)
aRB.pop()
return r
}
e_[x[56]]={f:m28,j:[],i:[],ti:[x[57]],ic:[]}
d_[x[58]]={}
d_[x[58]]["1ace90d8"]=function(e,s,r,gg){
var z=gz$gwx_30()
var b=x[58]+':1ace90d8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/article/article.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[58]);return}
p_[b]=true
try{
var xC=_v()
_(r,xC)
var oD=_oz(z,2,e,s,gg)
var fE=_gd(x[58],oD,e_,d_)
if(fE){
var cF=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[58],15,59)
var oB=_v()
_(r,oB)
if(_oz(z,3,e,s,gg)){oB.wxVkey=1
var hG=_n('view')
_rz(z,hG,'class',4,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,5,e,s,gg)){oH.wxVkey=1
var lK=_v()
_(oH,lK)
var aL=_oz(z,7,e,s,gg)
var tM=_gd(x[58],aL,e_,d_)
if(tM){
var eN=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[58],17,132)
}
var bO=_mz(z,'view',['class',8,'id',1],[],e,s,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,10,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
var oR=_oz(z,12,e,s,gg)
var fS=_gd(x[58],oR,e_,d_)
if(fS){
var cT=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
xQ.wxXCkey=3
fS(cT,cT,xQ,gg)
gg.f=cur_globalf
}
else _w(oR,x[58],27,66)
var hU=_v()
_(bO,hU)
var oV=_oz(z,17,e,s,gg)
var cW=_gd(x[58],oV,e_,d_)
if(cW){
var oX=_1z(z,14,e,s,gg) || {}
var cur_globalf=gg.f
hU.wxXCkey=3
cW(oX,oX,hU,gg)
gg.f=cur_globalf
}
else _w(oV,x[58],27,209)
oP.wxXCkey=1
_(hG,bO)
var cI=_v()
_(hG,cI)
if(_oz(z,18,e,s,gg)){cI.wxVkey=1
var lY=_v()
_(cI,lY)
var aZ=_oz(z,20,e,s,gg)
var t1=_gd(x[58],aZ,e_,d_)
if(t1){
var e2=_1z(z,19,e,s,gg) || {}
var cur_globalf=gg.f
lY.wxXCkey=3
t1(e2,e2,lY,gg)
gg.f=cur_globalf
}
else _w(aZ,x[58],30,156)
var b3=_v()
_(cI,b3)
var o4=_oz(z,22,e,s,gg)
var x5=_gd(x[58],o4,e_,d_)
if(x5){
var o6=_1z(z,21,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[58],30,253)
}
else{cI.wxVkey=2
var f7=_v()
_(cI,f7)
var c8=_oz(z,25,e,s,gg)
var h9=_gd(x[58],c8,e_,d_)
if(h9){
var o0=_1z(z,24,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[58],32,89)
var cAB=_v()
_(cI,cAB)
var oBB=_oz(z,28,e,s,gg)
var lCB=_gd(x[58],oBB,e_,d_)
if(lCB){
var aDB=_1z(z,27,e,s,gg) || {}
var cur_globalf=gg.f
cAB.wxXCkey=3
lCB(aDB,aDB,cAB,gg)
gg.f=cur_globalf
}
else _w(oBB,x[58],32,179)
}
var oJ=_v()
_(hG,oJ)
if(_oz(z,30,e,s,gg)){oJ.wxVkey=1
}
var tEB=_v()
_(hG,tEB)
var eFB=_oz(z,32,e,s,gg)
var bGB=_gd(x[58],eFB,e_,d_)
if(bGB){
var oHB=_1z(z,31,e,s,gg) || {}
var cur_globalf=gg.f
tEB.wxXCkey=3
bGB(oHB,oHB,tEB,gg)
gg.f=cur_globalf
}
else _w(eFB,x[58],35,65)
var xIB=_v()
_(hG,xIB)
var oJB=_oz(z,37,e,s,gg)
var fKB=_gd(x[58],oJB,e_,d_)
if(fKB){
var cLB=_1z(z,34,e,s,gg) || {}
var cur_globalf=gg.f
xIB.wxXCkey=3
fKB(cLB,cLB,xIB,gg)
gg.f=cur_globalf
}
else _w(oJB,x[58],35,210)
var hMB=_v()
_(hG,hMB)
var oNB=_oz(z,39,e,s,gg)
var cOB=_gd(x[58],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,38,e,s,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[58],35,283)
var lQB=_v()
_(hG,lQB)
var aRB=_oz(z,41,e,s,gg)
var tSB=_gd(x[58],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,40,e,s,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[58],35,356)
var bUB=_v()
_(hG,bUB)
var oVB=_oz(z,43,e,s,gg)
var xWB=_gd(x[58],oVB,e_,d_)
if(xWB){
var oXB=_1z(z,42,e,s,gg) || {}
var cur_globalf=gg.f
bUB.wxXCkey=3
xWB(oXB,oXB,bUB,gg)
gg.f=cur_globalf
}
else _w(oVB,x[58],35,440)
var fYB=_v()
_(hG,fYB)
var cZB=_oz(z,46,e,s,gg)
var h1B=_gd(x[58],cZB,e_,d_)
if(h1B){
var o2B=_1z(z,45,e,s,gg) || {}
var cur_globalf=gg.f
fYB.wxXCkey=3
h1B(o2B,o2B,fYB,gg)
gg.f=cur_globalf
}
else _w(cZB,x[58],35,513)
var c3B=_v()
_(hG,c3B)
var o4B=_oz(z,48,e,s,gg)
var l5B=_gd(x[58],o4B,e_,d_)
if(l5B){
var a6B=_1z(z,47,e,s,gg) || {}
var cur_globalf=gg.f
c3B.wxXCkey=3
l5B(a6B,a6B,c3B,gg)
gg.f=cur_globalf
}
else _w(o4B,x[58],35,586)
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
_(oB,hG)
}
else{oB.wxVkey=2
var t7B=_v()
_(oB,t7B)
var e8B=_oz(z,50,e,s,gg)
var b9B=_gd(x[58],e8B,e_,d_)
if(b9B){
var o0B=_1z(z,49,e,s,gg) || {}
var cur_globalf=gg.f
t7B.wxXCkey=3
b9B(o0B,o0B,t7B,gg)
gg.f=cur_globalf
}
else _w(e8B,x[58],37,70)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var oXB=e_[x[58]].i
_ai(oXB,x[29],e_,x[58],1,1)
_ai(oXB,x[1],e_,x[58],2,2)
_ai(oXB,x[42],e_,x[58],3,2)
_ai(oXB,x[38],e_,x[58],4,2)
_ai(oXB,x[4],e_,x[58],5,2)
_ai(oXB,x[39],e_,x[58],6,2)
_ai(oXB,x[40],e_,x[58],7,2)
_ai(oXB,x[41],e_,x[58],8,2)
_ai(oXB,x[34],e_,x[58],9,2)
_ai(oXB,x[35],e_,x[58],10,2)
_ai(oXB,x[36],e_,x[58],11,2)
_ai(oXB,x[32],e_,x[58],12,2)
_ai(oXB,x[37],e_,x[58],13,2)
_ai(oXB,x[30],e_,x[58],14,2)
oXB.pop()
oXB.pop()
oXB.pop()
oXB.pop()
oXB.pop()
oXB.pop()
oXB.pop()
oXB.pop()
oXB.pop()
oXB.pop()
oXB.pop()
oXB.pop()
oXB.pop()
oXB.pop()
return r
}
e_[x[58]]={f:m29,j:[],i:[],ti:[x[29],x[1],x[42],x[38],x[4],x[39],x[40],x[41],x[34],x[35],x[36],x[32],x[37],x[30]],ic:[]}
d_[x[59]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var cZB=e_[x[59]].i
_ai(cZB,x[60],e_,x[59],1,1)
var h1B=_v()
_(r,h1B)
var o2B=_oz(z,1,e,s,gg)
var c3B=_gd(x[59],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[59],1,61)
cZB.pop()
return r
}
e_[x[59]]={f:m30,j:[],i:[],ti:[x[60]],ic:[]}
d_[x[61]]={}
d_[x[61]]["f1d942fc"]=function(e,s,r,gg){
var z=gz$gwx_32()
var b=x[61]+':f1d942fc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/article/components/ImageMod.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[61]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
}
else if(_oz(z,3,e,s,gg)){oB.wxVkey=2
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
return r
}
e_[x[61]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[62]]={}
d_[x[62]]["6494dbd9"]=function(e,s,r,gg){
var z=gz$gwx_33()
var b=x[62]+':6494dbd9'
r.wxVkey=b
gg.f=$gdc(f_["./pages/article/components/MediaMod.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[62]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'xvideo',['controls',-1,'class',2,'poster',1,'src',2,'xid',3],[],e,s,gg)
_(oB,xC)
}
oB.wxXCkey=1
oB.wxXCkey=3
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[62]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
d_[x[63]]["497cab34"]=function(e,s,r,gg){
var z=gz$gwx_34()
var b=x[63]+':497cab34'
r.wxVkey=b
gg.f=$gdc(f_["./pages/article/components/tmplt.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[63]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
if(_oz(z,6,fE,oD,gg)){oH.wxVkey=1
var cI=_v()
_(oH,cI)
var oJ=_oz(z,8,fE,oD,gg)
var lK=_gd(x[63],oJ,e_,d_)
if(lK){
var aL=_1z(z,7,fE,oD,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[63],5,101)
}
else if(_oz(z,9,fE,oD,gg)){oH.wxVkey=2
var tM=_v()
_(oH,tM)
var eN=_oz(z,11,fE,oD,gg)
var bO=_gd(x[63],eN,e_,d_)
if(bO){
var oP=_1z(z,10,fE,oD,gg) || {}
var cur_globalf=gg.f
tM.wxXCkey=3
bO(oP,oP,tM,gg)
gg.f=cur_globalf
}
else _w(eN,x[63],6,103)
}
else if(_oz(z,12,fE,oD,gg)){oH.wxVkey=3
var xQ=_v()
_(oH,xQ)
var oR=_oz(z,14,fE,oD,gg)
var fS=_gd(x[63],oR,e_,d_)
if(fS){
var cT=_1z(z,13,fE,oD,gg) || {}
var cur_globalf=gg.f
xQ.wxXCkey=3
fS(cT,cT,xQ,gg)
gg.f=cur_globalf
}
else _w(oR,x[63],7,106)
}
else if(_oz(z,15,fE,oD,gg)){oH.wxVkey=4
var hU=_v()
_(oH,hU)
var oV=_oz(z,17,fE,oD,gg)
var cW=_gd(x[63],oV,e_,d_)
if(cW){
var oX=_1z(z,16,fE,oD,gg) || {}
var cur_globalf=gg.f
hU.wxXCkey=3
cW(oX,oX,hU,gg)
gg.f=cur_globalf
}
else _w(oV,x[63],8,101)
}
else if(_oz(z,18,fE,oD,gg)){oH.wxVkey=5
}
oH.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'item','index','index')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var e8B=e_[x[63]].i
_ai(e8B,x[47],e_,x[63],1,1)
_ai(e8B,x[48],e_,x[63],2,2)
e8B.pop()
e8B.pop()
return r
}
e_[x[63]]={f:m33,j:[],i:[],ti:[x[47],x[48]],ic:[]}
d_[x[64]]={}
d_[x[64]]["4408bdea"]=function(e,s,r,gg){
var z=gz$gwx_35()
var b=x[64]+':4408bdea'
r.wxVkey=b
gg.f=$gdc(f_["./pages/comments/comments.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[64]);return}
p_[b]=true
try{
var xC=_v()
_(r,xC)
var oD=_oz(z,2,e,s,gg)
var fE=_gd(x[64],oD,e_,d_)
if(fE){
var cF=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[64],4,59)
var hG=_n('view')
_rz(z,hG,'class',3,e,s,gg)
var oH=_v()
_(hG,oH)
var cI=_oz(z,5,e,s,gg)
var oJ=_gd(x[64],cI,e_,d_)
if(oJ){
var lK=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[64],5,130)
var aL=_v()
_(hG,aL)
var tM=_oz(z,12,e,s,gg)
var eN=_gd(x[64],tM,e_,d_)
if(eN){
var bO=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[64],5,310)
_(r,hG)
var oB=_v()
_(r,oB)
if(_oz(z,15,e,s,gg)){oB.wxVkey=1
var oP=_v()
_(oB,oP)
var xQ=_oz(z,17,e,s,gg)
var oR=_gd(x[64],xQ,e_,d_)
if(oR){
var fS=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[64],11,89)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var o0B=e_[x[64]].i
_ai(o0B,x[29],e_,x[64],1,1)
_ai(o0B,x[10],e_,x[64],2,2)
_ai(o0B,x[30],e_,x[64],3,2)
o0B.pop()
o0B.pop()
o0B.pop()
return r
}
e_[x[64]]={f:m34,j:[],i:[],ti:[x[29],x[10],x[30]],ic:[]}
d_[x[65]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var oBC=e_[x[65]].i
_ai(oBC,x[66],e_,x[65],1,1)
var fCC=_v()
_(r,fCC)
var cDC=_oz(z,1,e,s,gg)
var hEC=_gd(x[65],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[65],1,63)
oBC.pop()
return r
}
e_[x[65]]={f:m35,j:[],i:[],ti:[x[66]],ic:[]}
d_[x[67]]={}
d_[x[67]]["0027996a"]=function(e,s,r,gg){
var z=gz$gwx_37()
var b=x[67]+':0027996a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/photoset/photoset.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[67]);return}
p_[b]=true
try{
var xC=_v()
_(r,xC)
var oD=_oz(z,2,e,s,gg)
var fE=_gd(x[67],oD,e_,d_)
if(fE){
var cF=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[67],14,59)
var oB=_v()
_(r,oB)
if(_oz(z,3,e,s,gg)){oB.wxVkey=1
var hG=_n('view')
_rz(z,hG,'class',4,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,5,e,s,gg)){oH.wxVkey=1
var aL=_v()
_(oH,aL)
var tM=_oz(z,7,e,s,gg)
var eN=_gd(x[67],tM,e_,d_)
if(eN){
var bO=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[67],16,132)
}
var oP=_v()
_(hG,oP)
var xQ=_oz(z,12,e,s,gg)
var oR=_gd(x[67],xQ,e_,d_)
if(oR){
var fS=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[67],25,137)
var cI=_v()
_(hG,cI)
if(_oz(z,13,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(hG,oJ)
if(_oz(z,14,e,s,gg)){oJ.wxVkey=1
var cT=_v()
_(oJ,cT)
var hU=_oz(z,16,e,s,gg)
var oV=_gd(x[67],hU,e_,d_)
if(oV){
var cW=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[67],38,156)
var oX=_v()
_(oJ,oX)
var lY=_oz(z,18,e,s,gg)
var aZ=_gd(x[67],lY,e_,d_)
if(aZ){
var t1=_1z(z,17,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[67],38,253)
}
else{oJ.wxVkey=2
var e2=_v()
_(oJ,e2)
var b3=_oz(z,21,e,s,gg)
var o4=_gd(x[67],b3,e_,d_)
if(o4){
var x5=_1z(z,20,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[67],40,89)
var o6=_v()
_(oJ,o6)
var f7=_oz(z,24,e,s,gg)
var c8=_gd(x[67],f7,e_,d_)
if(c8){
var h9=_1z(z,23,e,s,gg) || {}
var cur_globalf=gg.f
o6.wxXCkey=3
c8(h9,h9,o6,gg)
gg.f=cur_globalf
}
else _w(f7,x[67],40,179)
}
var lK=_v()
_(hG,lK)
if(_oz(z,26,e,s,gg)){lK.wxVkey=1
var o0=_v()
_(lK,o0)
var cAB=_oz(z,28,e,s,gg)
var oBB=_gd(x[67],cAB,e_,d_)
if(oBB){
var lCB=_1z(z,27,e,s,gg) || {}
var cur_globalf=gg.f
o0.wxXCkey=3
oBB(lCB,lCB,o0,gg)
gg.f=cur_globalf
}
else _w(cAB,x[67],41,155)
}
var aDB=_v()
_(hG,aDB)
var tEB=_oz(z,30,e,s,gg)
var eFB=_gd(x[67],tEB,e_,d_)
if(eFB){
var bGB=_1z(z,29,e,s,gg) || {}
var cur_globalf=gg.f
aDB.wxXCkey=3
eFB(bGB,bGB,aDB,gg)
gg.f=cur_globalf
}
else _w(tEB,x[67],41,244)
var oHB=_v()
_(hG,oHB)
var xIB=_oz(z,33,e,s,gg)
var oJB=_gd(x[67],xIB,e_,d_)
if(oJB){
var fKB=_1z(z,32,e,s,gg) || {}
var cur_globalf=gg.f
oHB.wxXCkey=3
oJB(fKB,fKB,oHB,gg)
gg.f=cur_globalf
}
else _w(xIB,x[67],41,317)
var cLB=_v()
_(hG,cLB)
var hMB=_oz(z,35,e,s,gg)
var oNB=_gd(x[67],hMB,e_,d_)
if(oNB){
var cOB=_1z(z,34,e,s,gg) || {}
var cur_globalf=gg.f
cLB.wxXCkey=3
oNB(cOB,cOB,cLB,gg)
gg.f=cur_globalf
}
else _w(hMB,x[67],41,390)
var oPB=_v()
_(hG,oPB)
var lQB=_oz(z,37,e,s,gg)
var aRB=_gd(x[67],lQB,e_,d_)
if(aRB){
var tSB=_1z(z,36,e,s,gg) || {}
var cur_globalf=gg.f
oPB.wxXCkey=3
aRB(tSB,tSB,oPB,gg)
gg.f=cur_globalf
}
else _w(lQB,x[67],41,479)
var eTB=_v()
_(hG,eTB)
var bUB=_oz(z,40,e,s,gg)
var oVB=_gd(x[67],bUB,e_,d_)
if(oVB){
var xWB=_1z(z,39,e,s,gg) || {}
var cur_globalf=gg.f
eTB.wxXCkey=3
oVB(xWB,xWB,eTB,gg)
gg.f=cur_globalf
}
else _w(bUB,x[67],41,552)
var oXB=_v()
_(hG,oXB)
var fYB=_oz(z,42,e,s,gg)
var cZB=_gd(x[67],fYB,e_,d_)
if(cZB){
var h1B=_1z(z,41,e,s,gg) || {}
var cur_globalf=gg.f
oXB.wxXCkey=3
cZB(h1B,h1B,oXB,gg)
gg.f=cur_globalf
}
else _w(fYB,x[67],41,625)
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
_(oB,hG)
}
else{oB.wxVkey=2
var o2B=_v()
_(oB,o2B)
var c3B=_oz(z,44,e,s,gg)
var o4B=_gd(x[67],c3B,e_,d_)
if(o4B){
var l5B=_1z(z,43,e,s,gg) || {}
var cur_globalf=gg.f
o2B.wxXCkey=3
o4B(l5B,l5B,o2B,gg)
gg.f=cur_globalf
}
else _w(c3B,x[67],43,70)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var oHC=e_[x[67]].i
_ai(oHC,x[29],e_,x[67],1,1)
_ai(oHC,x[1],e_,x[67],2,2)
_ai(oHC,x[38],e_,x[67],3,2)
_ai(oHC,x[4],e_,x[67],4,2)
_ai(oHC,x[39],e_,x[67],5,2)
_ai(oHC,x[40],e_,x[67],6,2)
_ai(oHC,x[41],e_,x[67],7,2)
_ai(oHC,x[34],e_,x[67],8,2)
_ai(oHC,x[35],e_,x[67],9,2)
_ai(oHC,x[36],e_,x[67],10,2)
_ai(oHC,x[32],e_,x[67],11,2)
_ai(oHC,x[37],e_,x[67],12,2)
_ai(oHC,x[30],e_,x[67],13,2)
oHC.pop()
oHC.pop()
oHC.pop()
oHC.pop()
oHC.pop()
oHC.pop()
oHC.pop()
oHC.pop()
oHC.pop()
oHC.pop()
oHC.pop()
oHC.pop()
oHC.pop()
return r
}
e_[x[67]]={f:m36,j:[],i:[],ti:[x[29],x[1],x[38],x[4],x[39],x[40],x[41],x[34],x[35],x[36],x[32],x[37],x[30]],ic:[]}
d_[x[68]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var aJC=e_[x[68]].i
_ai(aJC,x[69],e_,x[68],1,1)
var tKC=_v()
_(r,tKC)
var eLC=_oz(z,1,e,s,gg)
var bMC=_gd(x[68],eLC,e_,d_)
if(bMC){
var oNC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tKC.wxXCkey=3
bMC(oNC,oNC,tKC,gg)
gg.f=cur_globalf
}
else _w(eLC,x[68],1,63)
aJC.pop()
return r
}
e_[x[68]]={f:m37,j:[],i:[],ti:[x[69]],ic:[]}
d_[x[70]]={}
d_[x[70]]["22084a62"]=function(e,s,r,gg){
var z=gz$gwx_39()
var b=x[70]+':22084a62'
r.wxVkey=b
gg.f=$gdc(f_["./pages/video/video.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[70]);return}
p_[b]=true
try{
var xC=_v()
_(r,xC)
var oD=_oz(z,2,e,s,gg)
var fE=_gd(x[70],oD,e_,d_)
if(fE){
var cF=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[70],10,59)
var oB=_v()
_(r,oB)
if(_oz(z,3,e,s,gg)){oB.wxVkey=1
var hG=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var oH=_n('view')
_rz(z,oH,'class',6,e,s,gg)
var oJ=_mz(z,'xvideo',['autoplay',7,'bindstatechange',1,'class',2,'data-comkey',3,'data-eventid',4,'poster',5,'src',6,'xclass',7,'xid',8],[],e,s,gg)
_(oH,oJ)
var cI=_v()
_(oH,cI)
if(_oz(z,16,e,s,gg)){cI.wxVkey=1
var lK=_v()
_(cI,lK)
var aL=_oz(z,18,e,s,gg)
var tM=_gd(x[70],aL,e_,d_)
if(tM){
var eN=_1z(z,17,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[70],38,135)
}
cI.wxXCkey=1
_(hG,oH)
var bO=_mz(z,'scroll-view',['class',19,'scrollY',1],[],e,s,gg)
var oP=_v()
_(bO,oP)
var xQ=_oz(z,22,e,s,gg)
var oR=_gd(x[70],xQ,e_,d_)
if(oR){
var fS=_1z(z,21,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[70],40,199)
var cT=_v()
_(bO,cT)
var hU=function(cW,oV,oX,gg){
var t1=_mz(z,'view',['bindtap',28,'class',1,'data-comkey',2,'data-eventid',3,'data-id',4,'hoverClass',5],[],cW,oV,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,34,cW,oV,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
_(oX,t1)
var aZ=_v()
_(oX,aZ)
if(_oz(z,35,cW,oV,gg)){aZ.wxVkey=1
}
aZ.wxXCkey=1
return oX
}
cT.wxXCkey=2
_2z(z,25,hU,e,s,gg,cT,'item','index','item.docid')
var b3=_v()
_(bO,b3)
var o4=_oz(z,37,e,s,gg)
var x5=_gd(x[70],o4,e_,d_)
if(x5){
var o6=_1z(z,36,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[70],76,66)
var f7=_v()
_(bO,f7)
var c8=_oz(z,39,e,s,gg)
var h9=_gd(x[70],c8,e_,d_)
if(h9){
var o0=_1z(z,38,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[70],76,138)
_(hG,bO)
var cAB=_v()
_(hG,cAB)
var oBB=_oz(z,41,e,s,gg)
var lCB=_gd(x[70],oBB,e_,d_)
if(lCB){
var aDB=_1z(z,40,e,s,gg) || {}
var cur_globalf=gg.f
cAB.wxXCkey=3
lCB(aDB,aDB,cAB,gg)
gg.f=cur_globalf
}
else _w(oBB,x[70],77,84)
var tEB=_v()
_(hG,tEB)
var eFB=_oz(z,44,e,s,gg)
var bGB=_gd(x[70],eFB,e_,d_)
if(bGB){
var oHB=_1z(z,43,e,s,gg) || {}
var cur_globalf=gg.f
tEB.wxXCkey=3
bGB(oHB,oHB,tEB,gg)
gg.f=cur_globalf
}
else _w(eFB,x[70],77,156)
var xIB=_v()
_(hG,xIB)
var oJB=_oz(z,46,e,s,gg)
var fKB=_gd(x[70],oJB,e_,d_)
if(fKB){
var cLB=_1z(z,45,e,s,gg) || {}
var cur_globalf=gg.f
xIB.wxXCkey=3
fKB(cLB,cLB,xIB,gg)
gg.f=cur_globalf
}
else _w(oJB,x[70],77,228)
_(oB,hG)
}
else{oB.wxVkey=2
var hMB=_v()
_(oB,hMB)
var oNB=_oz(z,48,e,s,gg)
var cOB=_gd(x[70],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,47,e,s,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[70],79,70)
}
oB.wxXCkey=1
oB.wxXCkey=3
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var oPC=e_[x[70]].i
_ai(oPC,x[29],e_,x[70],1,1)
_ai(oPC,x[1],e_,x[70],2,2)
_ai(oPC,x[33],e_,x[70],3,2)
_ai(oPC,x[34],e_,x[70],4,2)
_ai(oPC,x[35],e_,x[70],5,2)
_ai(oPC,x[36],e_,x[70],6,2)
_ai(oPC,x[32],e_,x[70],7,2)
_ai(oPC,x[37],e_,x[70],8,2)
_ai(oPC,x[30],e_,x[70],9,2)
oPC.pop()
oPC.pop()
oPC.pop()
oPC.pop()
oPC.pop()
oPC.pop()
oPC.pop()
oPC.pop()
oPC.pop()
return r
}
e_[x[70]]={f:m38,j:[],i:[],ti:[x[29],x[1],x[33],x[34],x[35],x[36],x[32],x[37],x[30]],ic:[]}
d_[x[71]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var cRC=e_[x[71]].i
_ai(cRC,x[72],e_,x[71],1,1)
var hSC=_v()
_(r,hSC)
var oTC=_oz(z,1,e,s,gg)
var cUC=_gd(x[71],oTC,e_,d_)
if(cUC){
var oVC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hSC.wxXCkey=3
cUC(oVC,oVC,hSC,gg)
gg.f=cur_globalf
}
else _w(oTC,x[71],1,57)
cRC.pop()
return r
}
e_[x[71]]={f:m39,j:[],i:[],ti:[x[72]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['pages/Videos.json'] = {"navigationBarTitleText":"视频","enablePullDownRefresh":true,"usingComponents":{"xvideo":"plugin://wxd2b7347d6983b041/xvideo"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/Videos.wxml'] = [$gwx, './pages/Videos.wxml'];else __wxAppCode__['pages/Videos.wxml'] = $gwx( './pages/Videos.wxml' );
		__wxAppCode__['pages/article/article.json'] = {"navigationBarTitleText":"文章详情","usingComponents":{"xvideo":"plugin://wxd2b7347d6983b041/xvideo"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/article/article.wxml'] = [$gwx, './pages/article/article.wxml'];else __wxAppCode__['pages/article/article.wxml'] = $gwx( './pages/article/article.wxml' );
		__wxAppCode__['pages/video/video.json'] = {"navigationBarTitleText":"视频详情","disableScroll":true,"usingComponents":{"xvideo":"plugin://wxd2b7347d6983b041/xvideo"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/video/video.wxml'] = [$gwx, './pages/video/video.wxml'];else __wxAppCode__['pages/video/video.wxml'] = $gwx( './pages/video/video.wxml' );
	
	define("9FA2E4459104369CF9C48C4278C17C83.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=global.webpackJsonp;global.webpackJsonp=function(r,i,a){for(var s,c,u,f=0,l=[];f<r.length;f++)c=r[f],o[c]&&l.push(o[c][0]),o[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);for(n&&n(r,i,a);l.length;)l.shift()();if(a)for(f=0;f<a.length;f++)u=e(e.s=a[f]);return u};var r={},o={8:0};e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="http://localhost:3200/",e.oe=function(t){throw console.error(t),t}}({0:function(e,n){e.exports=function(e,n,r,o,i){var a,s=e=e||{},c=t(e.default);"object"!==c&&"function"!==c||(a=e,s=e.default);var u="function"==typeof s?s.options:s;n&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns),o&&(u._scopeId=o);var f;if(i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=f):r&&(f=r),f){var l=u.functional,p=l?u.render:u.beforeCreate;l?u.render=function(t,e){return f.call(e),p(t,e)}:u.beforeCreate=p?[].concat(p,f):[f]}return{esModule:a,exports:s,options:u}}},1:function(e,n,r){function o(t){j&&(t._devtoolHook=j,j.emit("vuex:init",t),j.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){j.emit("vuex:mutation",t,e)}))}function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function a(e){return null!==e&&"object"===(void 0===e?"undefined":t(e))}function s(t){return t&&"function"==typeof t.then}function c(t,e){if(!t)throw new Error("[vuex] "+e)}function u(t,e,n){if(f(t,n),e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");u(t.concat(r),e.getChild(r),n.modules[r])}}function f(t,e){Object.keys(I).forEach(function(n){if(e[n]){var r=I[n];i(e[n],function(e,o){c(r.assert(e),l(t,n,o,e,r.expected))})}})}function l(t,e,n,r,o){var i=e+" should be "+o+' but "'+e+"."+n+'"';return t.length>0&&(i+=' in module "'+t.join(".")+'"'),i+=" is "+JSON.stringify(r)+"."}function p(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;v(t,n,[],t._modules.root,!0),h(t,n,e)}function h(t,e,n){var r=t._vm;t.getters={};var o={};i(t._wrappedGetters,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=T.config.silent;T.config.silent=!0,t._vm=new T({data:{$$state:e},computed:o}),T.config.silent=a,t.strict&&w(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),T.nextTick(function(){return r.$destroy()}))}function v(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=x(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){T.set(s,c,r.state)})}var u=r.context=y(t,a,n);r.forEachMutation(function(e,n){m(t,a+n,e,u)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;_(t,r,o,u)}),r.forEachGetter(function(e,n){b(t,a+n,e,u)}),r.forEachChild(function(r,i){v(t,e,n.concat(i),r,o)})}function y(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=k(n,r,o),a=i.payload,s=i.options,c=i.type;if(s&&s.root||(c=e+c,t._actions[c]))return t.dispatch(c,a);console.error("[vuex] unknown local action type: "+i.type+", global type: "+c)},commit:r?t.commit:function(n,r,o){var i=k(n,r,o),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c,t._mutations[c])?t.commit(c,a,s):console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+c)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return g(t,e)}},state:{get:function(){return x(t.state,n)}}}),o}function g(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function m(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,r.state,e)})}function _(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return s(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function b(t,e,n,r){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}function w(t){t._vm.$watch(function(){return this._data.$$state},function(){c(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function x(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function k(e,n,r){return a(e)&&e.type&&(r=n,n=e,e=e.type),c("string"==typeof e,"Expects string as the type, but found "+(void 0===e?"undefined":t(e))+"."),{type:e,payload:n,options:r}}function O(t){T&&t===T?console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):C(T=t)}function A(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function S(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function $(t,e,n){var r=t._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r}r.d(n,"d",function(){return L}),r.d(n,"c",function(){return N}),r.d(n,"b",function(){return F});var C=function(t){function e(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:e});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,n.call(this,t)}}},j="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,E=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},M={namespaced:{configurable:!0}};M.namespaced.get=function(){return!!this._rawModule.namespaced},E.prototype.addChild=function(t,e){this._children[t]=e},E.prototype.removeChild=function(t){delete this._children[t]},E.prototype.getChild=function(t){return this._children[t]},E.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},E.prototype.forEachChild=function(t){i(this._children,t)},E.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},E.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},E.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(E.prototype,M);var P=function(t){this.register([],t,!1)};P.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},P.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},P.prototype.update=function(t){u([],this.root,t)},P.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0),f(t,e);var o=new E(e,n);0===t.length?this.root=o:this.get(t.slice(0,-1)).addChild(t[t.length-1],o),e.modules&&i(e.modules,function(e,o){r.register(t.concat(o),e,n)})},P.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var T,D={assert:function(t){return"function"==typeof t},expected:"function"},I={getters:D,mutations:D,actions:{assert:function(e){return"function"==typeof e||"object"===(void 0===e?"undefined":t(e))&&"function"==typeof e.handler},expected:'function or object with "handler" function'}},B=function t(e){var n=this;void 0===e&&(e={}),!T&&"undefined"!=typeof window&&window.Vue&&O(window.Vue),c(T,"must call Vue.use(Vuex) before creating a store instance."),c("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser."),c(this instanceof t,"Store must be called with the new operator.");var r=e.plugins;void 0===r&&(r=[]);var i=e.strict;void 0===i&&(i=!1);var a=e.state;void 0===a&&(a={}),"function"==typeof a&&(a=a()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new P(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new T;var s=this,u=this,f=u.dispatch,l=u.commit;this.dispatch=function(t,e){return f.call(s,t,e)},this.commit=function(t,e,n){return l.call(s,t,e,n)},this.strict=i,v(this,a,[],this._modules.root),h(this,a),r.forEach(function(t){return t(n)}),T.config.devtools&&o(this)},R={state:{configurable:!0}};R.state.get=function(){return this._vm._data.$$state},R.state.set=function(t){c(!1,"Use store.replaceState() to explicit replace store state.")},B.prototype.commit=function(t,e,n){var r=this,o=k(t,e,n),i=o.type,a=o.payload,s=o.options,c={type:i,payload:a},u=this._mutations[i];u?(this._withCommit(function(){u.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(c,r.state)}),s&&s.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+i)},B.prototype.dispatch=function(t,e){var n=this,r=k(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i);console.error("[vuex] unknown action type: "+o)},B.prototype.subscribe=function(t){return p(t,this._subscribers)},B.prototype.subscribeAction=function(t){return p(t,this._actionSubscribers)},B.prototype.watch=function(t,e,n){var r=this;return c("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},B.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},B.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),c(Array.isArray(t),"module path must be a string or an Array."),c(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),n.preserveState),h(this,this.state)},B.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),c(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=x(e.state,t.slice(0,-1));T.delete(n,t[t.length-1])}),d(this)},B.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},B.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(B.prototype,R);var L=S(function(t,e){var n={};return A(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=$(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),N=S(function(t,e){var n={};return A(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=$(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),U=S(function(t,e){var n={};return A(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||$(this.$store,"mapGetters",t)){if(o in this.$store.getters)return this.$store.getters[o];console.error("[vuex] unknown getter: "+o)}},n[r].vuex=!0}),n}),F=S(function(t,e){var n={};return A(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=$(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),z={Store:B,install:O,version:"3.0.1",mapState:L,mapMutations:N,mapGetters:U,mapActions:F,createNamespacedHelpers:function(t){return{mapState:L.bind(null,t),mapGetters:U.bind(null,t),mapMutations:N.bind(null,t),mapActions:F.bind(null,t)}}};n.a=z},167:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},168:function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o),a=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# "+("sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t)))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},169:function(e,n,r){function o(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=y[r.id];if(o){o.refs++;for(a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(p(r.parts[a],e))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(p(r.parts[a],e));y[r.id]={id:r.id,refs:1,parts:i}}}}function i(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function a(e,n){var r=_(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?r.insertBefore(n,o.nextSibling):r.appendChild(n):r.insertBefore(n,r.firstChild),x.push(n);else if("bottom"===e.insertAt)r.appendChild(n);else{if("object"!==t(e.insertAt)||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=_(e.insertAt.before,r);r.insertBefore(n,i)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function c(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=l();n&&(t.attrs.nonce=n)}return f(e,t.attrs),a(t,e),e}function u(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",f(e,t.attrs),a(t,e),e}function f(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function l(){return r.nc}function p(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=w++;n=b||(b=c(e)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),r=v.bind(null,n,e),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(e),r=h.bind(null,n),o=function(){s(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function d(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=O(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function h(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function v(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=k(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var y={},g=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t,e){return e?e.querySelector(t):document.querySelector(t)},_=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=m.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),b=null,w=0,x=[],k=r(95);e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!==("undefined"==typeof document?"undefined":t(document)))throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"===t(n.attrs)?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=g()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var r=i(e,n);return o(r,n),function(t){for(var e=[],a=0;a<r.length;a++){var s=r[a];(c=y[s.id]).refs--,e.push(c)}t&&o(i(t,n),n);for(a=0;a<e.length;a++){var c=e[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete y[c.id]}}}};var O=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},170:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),o=(n.n(r),n(6)),i=n(7),a=n(3),s=n.n(a),c=n(100),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};new s.a(u({router:o.a,store:i.a},c.a)).$mount()},171:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),o=(n.n(r),n(6)),i=n(7),a=n(3),s=n.n(a),c=n(122),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};new s.a(u({router:o.a,store:i.a},c.a)).$mount()},172:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),o=(n.n(r),n(6)),i=n(7),a=n(3),s=n.n(a),c=n(130),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};new s.a(u({router:o.a,store:i.a},c.a)).$mount()},173:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),o=(n.n(r),n(6)),i=n(7),a=n(3),s=n.n(a),c=n(138),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};new s.a(u({router:o.a,store:i.a},c.a)).$mount()},174:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),o=(n.n(r),n(6)),i=n(7),a=n(3),s=n.n(a),c=n(142),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};new s.a(u({router:o.a,store:i.a},c.a)).$mount()},175:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),o=(n.n(r),n(6)),i=n(7),a=n(3),s=n.n(a),c=n(159),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};new s.a(u({router:o.a,store:i.a},c.a)).$mount()},176:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),o=(n.n(r),n(6)),i=n(7),a=n(3),s=n.n(a),c=n(163),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};new s.a(u({router:o.a,store:i.a},c.a)).$mount()},21:function(t,e,n){!function(n,r){t.exports=e=r()}(0,function(){var t=t||function(t,e){var n=Object.create||function(){function t(){}return function(e){var n;return t.prototype=e,n=new t,t.prototype=null,n}}(),r={},o=r.lib={},i=o.Base={extend:function(t){var e=n(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},a=o.WordArray=i.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=void 0!=e?e:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes,o=t.sigBytes;if(this.clamp(),r%4)for(a=0;a<o;a++){var i=n[a>>>2]>>>24-a%4*8&255;e[r+a>>>2]|=i<<24-(r+a)%4*8}else for(var a=0;a<o;a+=4)e[r+a>>>2]=n[a>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var n,r=[],o=0;o<e;o+=4){var i=function(e){var e=e,n=987654321,r=4294967295;return function(){var o=((n=36969*(65535&n)+(n>>16)&r)<<16)+(e=18e3*(65535&e)+(e>>16)&r)&r;return o/=4294967296,(o+=.5)*(t.random()>.5?1:-1)}}(4294967296*(n||t.random()));n=987654071*i(),r.push(4294967296*i()|0)}return new a.init(r,e)}}),s=r.enc={},c=s.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],o=0;o<n;o++){var i=e[o>>>2]>>>24-o%4*8&255;r.push((i>>>4).toString(16)),r.push((15&i).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new a.init(n,e/2)}},u=s.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],o=0;o<n;o++){var i=e[o>>>2]>>>24-o%4*8&255;r.push(String.fromCharCode(i))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new a.init(n,e)}},f=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},l=o.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n=this._data,r=n.words,o=n.sigBytes,i=this.blockSize,s=o/(4*i),c=(s=e?t.ceil(s):t.max((0|s)-this._minBufferSize,0))*i,u=t.min(4*c,o);if(c){for(var f=0;f<c;f+=i)this._doProcessBlock(r,f);var l=r.splice(0,c);n.sigBytes-=u}return new a.init(l,u)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(o.Hasher=l.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new p.HMAC.init(t,n).finalize(e)}}}),r.algo={});return r}(Math);return t})},24:function(e,n,r){!function(t,n){e.exports=n()}(0,function(){function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function n(t,e){return e={exports:{}},t(e,e.exports),e.exports}function r(t,e){return Object.keys(e).reduce(function(t,n){return t[n]=e[n],t},t)}function o(t){return"string"==typeof t&&!!t.trim()}function i(t,e){var n=t.split(";").filter(o),r=n.shift().split("="),i=r.shift(),a=r.join("="),s={name:i,value:e.decodeValues?decodeURIComponent(a):a};return n.forEach(function(t){var e=t.split("="),n=e.shift().trimLeft().toLowerCase(),r=e.join("=");"expires"===n?s.expires=new Date(r):"max-age"===n?s.maxAge=parseInt(r,10):"secure"===n?s.secure=!0:"httponly"===n?s.httpOnly=!0:"samesite"===n?s.sameSite=r:s[n]=r}),s}function a(t,e){if(!t)return[];t.headers&&(t=t.headers["set-cookie"]),Array.isArray(t)||(t=[t]);var n=r({},Ce);return e=e?r(n,e):n,t.filter(o).map(function(t){return i(t,e)})}var s=n(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),c=n(function(t){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)}),u=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},f=function(t,e,n){if(u(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},l=function(e){return"object"===(void 0===e?"undefined":t(e))?null!==e:"function"==typeof e},p=function(t){if(!l(t))throw TypeError(t+" is not an object!");return t},d=function(t){try{return!!t()}catch(t){return!0}},h=!d(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),v=s.document,y=l(v)&&l(v.createElement),g=function(t){return y?v.createElement(t):{}},m=!h&&!d(function(){return 7!=Object.defineProperty(g("div"),"a",{get:function(){return 7}}).a}),_=function(t,e){if(!l(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!l(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!l(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!l(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},b=Object.defineProperty,w={f:h?Object.defineProperty:function(t,e,n){if(p(t),e=_(e,!0),p(n),m)try{return b(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},x=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},k=h?function(t,e,n){return w.f(t,e,x(1,n))}:function(t,e,n){return t[e]=n,t},O={}.hasOwnProperty,A=function(t,e){return O.call(t,e)},S=function t(e,n,r){var o,i,a,u=e&t.F,l=e&t.G,p=e&t.S,d=e&t.P,h=e&t.B,v=e&t.W,y=l?c:c[n]||(c[n]={}),g=y.prototype,m=l?s:p?s[n]:(s[n]||{}).prototype;l&&(r=n);for(o in r)(i=!u&&m&&void 0!==m[o])&&A(y,o)||(a=i?m[o]:r[o],y[o]=l&&"function"!=typeof m[o]?r[o]:h&&i?f(a,s):v&&m[o]==a?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(a):d&&"function"==typeof a?f(Function.call,a):a,d&&((y.virtual||(y.virtual={}))[o]=a,e&t.R&&g&&!g[o]&&k(g,o,a)))};S.F=1,S.G=2,S.S=4,S.P=8,S.B=16,S.W=32,S.U=64,S.R=128;var $=S,C={}.toString,j=function(t){return C.call(t).slice(8,-1)},E=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==j(t)?t.split(""):Object(t)},M=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},P=function(t){return E(M(t))},T=Math.ceil,D=Math.floor,I=function(t){return isNaN(t=+t)?0:(t>0?D:T)(t)},B=Math.min,R=function(t){return t>0?B(I(t),9007199254740991):0},L=Math.max,N=Math.min,U=function(t,e){return(t=I(t))<0?L(t+e,0):N(t,e)},F=n(function(t){var e=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:c.version,mode:"pure",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),z=0,H=Math.random(),V=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++z+H).toString(36))},q=F("keys"),G=function(t){return q[t]||(q[t]=V(t))},K=function(t){return function(e,n,r){var o,i=P(e),a=R(i.length),s=U(r,a);if(t&&n!=n){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((t||s in i)&&i[s]===n)return t||s||0;return!t&&-1}}(!1),W=G("IE_PROTO"),J=function(t,e){var n,r=P(t),o=0,i=[];for(n in r)n!=W&&A(r,n)&&i.push(n);for(;e.length>o;)A(r,n=e[o++])&&(~K(i,n)||i.push(n));return i},X="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Z=Object.keys||function(t){return J(t,X)},Y=h?Object.defineProperties:function(t,e){p(t);for(var n,r=Z(e),o=r.length,i=0;o>i;)w.f(t,n=r[i++],e[n]);return t};$($.S+$.F*!h,"Object",{defineProperties:Y});var Q=c.Object,tt=function(t,e){return Q.defineProperties(t,e)},et=e(n(function(t){t.exports={default:tt,__esModule:!0}})),nt=function(){},rt=function(t,e){return{value:e,done:!!t}},ot={},it=k,at=s.document,st=at&&at.documentElement,ct=G("IE_PROTO"),ut=function(){},ft=function(){var t,e=g("iframe"),n=X.length;for(e.style.display="none",st.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),ft=t.F;n--;)delete ft.prototype[X[n]];return ft()},lt=Object.create||function(t,e){var n;return null!==t?(ut.prototype=p(t),n=new ut,ut.prototype=null,n[ct]=t):n=ft(),void 0===e?n:Y(n,e)},pt=n(function(t){var e=F("wks"),n=s.Symbol,r="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=r&&n[t]||(r?n:V)("Symbol."+t))}).store=e}),dt=w.f,ht=pt("toStringTag"),vt=function(t,e,n){t&&!A(t=n?t:t.prototype,ht)&&dt(t,ht,{configurable:!0,value:e})},yt={};k(yt,pt("iterator"),function(){return this});var gt=function(t,e,n){t.prototype=lt(yt,{next:x(1,n)}),vt(t,e+" Iterator")},mt=function(t){return Object(M(t))},_t=G("IE_PROTO"),bt=Object.prototype,wt=Object.getPrototypeOf||function(t){return t=mt(t),A(t,_t)?t[_t]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?bt:null},xt=pt("iterator"),kt=!([].keys&&"next"in[].keys()),Ot=function(){return this},At=function(t,e,n,r,o,i,a){gt(n,e,r);var s,c,u,f=function(t){if(!kt&&t in h)return h[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},l=e+" Iterator",p="values"==o,d=!1,h=t.prototype,v=h[xt]||h["@@iterator"]||o&&h[o],y=v||f(o),g=o?p?f("entries"):y:void 0,m="Array"==e?h.entries||v:v;if(m&&(u=wt(m.call(new t)))!==Object.prototype&&u.next&&vt(u,l,!0),p&&v&&"values"!==v.name&&(d=!0,y=function(){return v.call(this)}),a&&(kt||d||!h[xt])&&k(h,xt,y),ot[e]=y,ot[l]=Ot,o)if(s={values:p?y:f("values"),keys:i?y:f("keys"),entries:g},a)for(c in s)c in h||it(h,c,s[c]);else $($.P+$.F*(kt||d),e,s);return s};At(Array,"Array",function(t,e){this._t=P(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,rt(1)):"keys"==e?rt(0,n):"values"==e?rt(0,t[n]):rt(0,[n,t[n]])},"values");ot.Arguments=ot.Array,nt(),nt(),nt();for(var St=pt("toStringTag"),$t="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),Ct=0;Ct<$t.length;Ct++){var jt=$t[Ct],Et=s[jt],Mt=Et&&Et.prototype;Mt&&!Mt[St]&&k(Mt,St,jt),ot[jt]=ot.Array}var Pt=function(t){return function(e,n){var r,o,i=String(M(e)),a=I(n),s=i.length;return a<0||a>=s?t?"":void 0:(r=i.charCodeAt(a))<55296||r>56319||a+1===s||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):r:t?i.slice(a,a+2):o-56320+(r-55296<<10)+65536}}(!0);At(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=Pt(e,n),this._i+=t.length,{value:t,done:!1})});var Tt=pt("toStringTag"),Dt="Arguments"==j(function(){return arguments}()),It=function(t,e){try{return t[e]}catch(t){}},Bt=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=It(e=Object(t),Tt))?n:Dt?j(e):"Object"==(r=j(e))&&"function"==typeof e.callee?"Arguments":r},Rt=pt("iterator"),Lt=c.isIterable=function(t){var e=Object(t);return void 0!==e[Rt]||"@@iterator"in e||ot.hasOwnProperty(Bt(e))},Nt=n(function(t){t.exports={default:Lt,__esModule:!0}});e(Nt);var Ut=pt("iterator"),Ft=c.getIteratorMethod=function(t){if(void 0!=t)return t[Ut]||t["@@iterator"]||ot[Bt(t)]},zt=c.getIterator=function(t){var e=Ft(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return p(e.call(t))},Ht=n(function(t){t.exports={default:zt,__esModule:!0}}),Vt=e(Ht),qt=e(n(function(t,e){function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(Nt),o=n(Ht);e.default=function(){function t(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var s,c=(0,o.default)(t);!(r=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,r.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()})),Gt=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:k(t,r,e[r]);return t},Kt=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t},Wt=function(t,e,n,r){try{return r?e(p(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&p(o.call(t)),e}},Jt=pt("iterator"),Xt=Array.prototype,Zt=function(t){return void 0!==t&&(ot.Array===t||Xt[Jt]===t)},Yt=n(function(t){var e={},n={},r=t.exports=function(t,r,o,i,a){var s,c,u,l,d=a?function(){return t}:Ft(t),h=f(o,i,r?2:1),v=0;if("function"!=typeof d)throw TypeError(t+" is not iterable!");if(Zt(d)){for(s=R(t.length);s>v;v++)if((l=r?h(p(c=t[v])[0],c[1]):h(t[v]))===e||l===n)return l}else for(u=d.call(t);!(c=u.next()).done;)if((l=Wt(u,h,c.value,r))===e||l===n)return l};r.BREAK=e,r.RETURN=n}),Qt=pt("species"),te=function(t){var e="function"==typeof c[t]?c[t]:s[t];h&&e&&!e[Qt]&&w.f(e,Qt,{configurable:!0,get:function(){return this}})},ee=n(function(e){var n=V("meta"),r=w.f,o=0,i=Object.isExtensible||function(){return!0},a=!d(function(){return i(Object.preventExtensions({}))}),s=function(t){r(t,n,{value:{i:"O"+ ++o,w:{}}})},c=e.exports={KEY:n,NEED:!1,fastKey:function(e,r){if(!l(e))return"symbol"==(void 0===e?"undefined":t(e))?e:("string"==typeof e?"S":"P")+e;if(!A(e,n)){if(!i(e))return"F";if(!r)return"E";s(e)}return e[n].i},getWeak:function(t,e){if(!A(t,n)){if(!i(t))return!0;if(!e)return!1;s(t)}return t[n].w},onFreeze:function(t){return a&&c.NEED&&i(t)&&!A(t,n)&&s(t),t}}}),ne=function(t,e){if(!l(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t},re=w.f,oe=ee.fastKey,ie=h?"_s":"size",ae=function(t,e){var n,r=oe(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n},se={getConstructor:function(t,e,n,r){var o=t(function(t,i){Kt(t,o,e,"_i"),t._t=e,t._i=lt(null),t._f=void 0,t._l=void 0,t[ie]=0,void 0!=i&&Yt(i,n,t[r],t)});return Gt(o.prototype,{clear:function(){for(var t=ne(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[ie]=0},delete:function(t){var n=ne(this,e),r=ae(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[ie]--}return!!r},forEach:function(t){ne(this,e);for(var n,r=f(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!ae(ne(this,e),t)}}),h&&re(o.prototype,"size",{get:function(){return ne(this,e)[ie]}}),o},def:function(t,e,n){var r,o,i=ae(t,e);return i?i.v=n:(t._l=i={i:o=oe(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[ie]++,"F"!==o&&(t._i[o]=i)),t},getEntry:ae,setStrong:function(t,e,n){At(t,e,function(t,n){this._t=ne(t,e),this._k=n,this._l=void 0},function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?"keys"==e?rt(0,n.k):"values"==e?rt(0,n.v):rt(0,[n.k,n.v]):(t._t=void 0,rt(1))},n?"entries":"values",!n,!0),te(e)}},ce=Array.isArray||function(t){return"Array"==j(t)},ue=pt("species"),fe=function(t){var e;return ce(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!ce(e.prototype)||(e=void 0),l(e)&&null===(e=e[ue])&&(e=void 0)),void 0===e?Array:e},le=function(t,e){return new(fe(t))(e)},pe=w.f,de=function(t,e){var n=1==t,r=2==t,o=3==t,i=4==t,a=6==t,s=5==t||a,c=e||le;return function(e,u,l){for(var p,d,h=mt(e),v=E(h),y=f(u,l,3),g=R(v.length),m=0,_=n?c(e,g):r?c(e,0):void 0;g>m;m++)if((s||m in v)&&(p=v[m],d=y(p,m,h),t))if(n)_[m]=d;else if(d)switch(t){case 3:return!0;case 5:return p;case 6:return m;case 2:_.push(p)}else if(i)return!1;return a?-1:o||i?i:_}}(0),he=(function(t,e,n,r,o,i){var a=s[t],c=a,u=o?"set":"add",f=c&&c.prototype,p={};h&&"function"==typeof c&&(i||f.forEach&&!d(function(){(new c).entries().next()}))?(c=e(function(e,n){Kt(e,c,t,"_c"),e._c=new a,void 0!=n&&Yt(n,o,e[u],e)}),de("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in f&&(!i||"clear"!=t)&&k(c.prototype,t,function(n,r){if(Kt(this,c,t),!e&&i&&!l(n))return"get"==t&&void 0;var o=this._c[t](0===n?0:n,r);return e?this:o})}),i||pe(c.prototype,"size",{get:function(){return this._c.size}})):(c=r.getConstructor(e,t,o,u),Gt(c.prototype,n),ee.NEED=!0),vt(c,t),p[t]=c,$($.G+$.W+$.F,p),i||r.setStrong(c,t,o)}("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=se.getEntry(ne(this,"Map"),t);return e&&e.v},set:function(t,e){return se.def(ne(this,"Map"),0===t?0:t,e)}},se,!0),function(t,e){var n=[];return Yt(t,!1,n.push,n,e),n});$($.P+$.R,"Map",{toJSON:function(t){return function(){if(Bt(this)!=t)throw TypeError(t+"#toJSON isn't generic");return he(this)}}("Map")});!function(t){$($.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}("Map");!function(t){$($.S,t,{from:function(t){var e,n,r,o,i=arguments[1];return u(this),(e=void 0!==i)&&u(i),void 0==t?new this:(n=[],e?(r=0,o=f(i,arguments[2],2),Yt(t,!1,function(t){n.push(o(t,r++))})):Yt(t,!1,n.push,n),new this(n))}})}("Map");var ve=c.Map,ye=e(n(function(t){t.exports={default:ve,__esModule:!0}})),ge={f:Object.getOwnPropertySymbols},me={f:{}.propertyIsEnumerable},_e=Object.assign,be=!_e||d(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=_e({},t)[n]||Object.keys(_e({},e)).join("")!=r})?function(t,e){for(var n=mt(t),r=arguments.length,o=1,i=ge.f,a=me.f;r>o;)for(var s,c=E(arguments[o++]),u=i?Z(c).concat(i(c)):Z(c),f=u.length,l=0;f>l;)a.call(c,s=u[l++])&&(n[s]=c[s]);return n}:_e;$($.S+$.F,"Object",{assign:be});var we=c.Object.assign,xe=e(n(function(t){t.exports={default:we,__esModule:!0}})),ke=e(n(function(t,e){e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}}));$($.S+$.F*!h,"Object",{defineProperty:w.f});var Oe=c.Object,Ae=function(t,e,n){return Oe.defineProperty(t,e,n)},Se=n(function(t){t.exports={default:Ae,__esModule:!0}});e(Se);var $e=e(n(function(t,e){e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(Se);e.default=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,n.default)(t,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()})),Ce={decodeValues:!0},je=a,Ee=a;je.parse=Ee,je.splitCookiesString=function(t){function e(){for(;c<t.length&&/\s/.test(t.charAt(c));)c+=1;return c<t.length}if(Array.isArray(t))return t;if("string"!=typeof t)return[];for(var n,r,o,i,a,s=[],c=0;c<t.length;){for(n=c,a=!1;e();)if(","===(r=t.charAt(c))){for(o=c,c+=1,e(),i=c;c<t.length&&"="!==(r=t.charAt(c))&&";"!==r&&","!==r;)c+=1;c<t.length&&"="===t.charAt(c)?(a=!0,c=i,s.push(t.substring(n,o)),n=c):c=o+1}else c+=1;(!a||c>=t.length)&&s.push(t.substring(n,t.length))}return s};var Me=new(function(){function t(){ke(this,t)}return $e(t,[{key:"getCookieScopeDomain",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!t)return[];var e=(t=t.replace(/^\.+/gi,"")).split(".").map(function(e){return[".",t.slice(t.indexOf(e))].join("")});return[t].concat(e)}}]),t}()),Pe=function(){function t(e){ke(this,t),this.name=e.name||"",this.value=e.value||"",this.domain=e.domain||"",this.path=e.path||"/",this.expires=e.expires?new Date(e.expires):null,this.maxAge=e.maxAge?parseInt(e.maxAge):null,this.httpOnly=!!e.httpOnly,this.dateTime=e.dateTime?new Date(e.dateTime):new Date}return $e(t,[{key:"set",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=je.parse(t)[0];return e&&(xe(this,e),this.dateTime=new Date),this}},{key:"merge",value:function(t){return Object(this,t)}},{key:"isExpired",value:function(){return 0===this.maxAge||(this.maxAge>0?(Date.now()-this.dateTime.getTime())/1e3>this.maxAge:!!(this.expires&&this.expires<new Date))}},{key:"isPersistence",value:function(){return!this.maxAge||this.maxAge>0}},{key:"isInDomain",value:function(t){return Me.getCookieScopeDomain(t).indexOf(this.domain)>=0}},{key:"isInPath",value:function(t){return 0===t.indexOf(this.path)||this.path.replace(/\/$/,"")===t}},{key:"toString",value:function(){return[this.name,this.value].join("=")}}]),t}(),Te=function(){function t(){ke(this,t),this.__storageKey="__cookie_store__",this.__cookiesMap=this.__readFromStorage()}return $e(t,[{key:"has",value:function(t,e,n){return void 0!==this.getCookie(t,e,n)}},{key:"get",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",r=this.getCookie(t,e,n);return r?r.value:void 0}},{key:"set",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.domain;if(!r||!t)throw new Error("name 和 options.domain 值不正确！");var o=new Pe(xe(n,{name:t,value:e})),i=this.__cookiesMap.get(r)||new ye;return i.set(t,o),this.__cookiesMap.set(r,i),this.__saveToStorage(),o}},{key:"dir",value:function(){var t={},e=!0,n=!1,r=void 0;try{for(var o,i=Vt(this.__cookiesMap.keys());!(e=(o=i.next()).done);e=!0){var a=o.value;t[a]=this.getCookies(a)}}catch(t){n=!0,r=t}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}return t}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e){var n=this.__cookiesMap.get(e);n&&n.delete(t)}else{var r=!0,o=!1,i=void 0;try{for(var a,s=Vt(this.__cookiesMap.values());!(r=(a=s.next()).done);r=!0)a.value.delete(t)}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}}return this.__saveToStorage(),!0}},{key:"getCookie",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",r=void 0,o=Me.getCookieScopeDomain(e),i=!0,a=!1,s=void 0;try{for(var c,u=Vt(this.__cookiesMap.entries());!(i=(c=u.next()).done);i=!0){var f=qt(c.value,2),l=f[0],p=f[1];if(!(e&&o.indexOf(l)<0)){if((r=p.get(t))&&r.isInPath(n)&&!r.isExpired())break;r=void 0}}}catch(t){a=!0,s=t}finally{try{!i&&u.return&&u.return()}finally{if(a)throw s}}return r}},{key:"getCookies",value:function(t,e){var n={};return this.getCookiesArray(t,e).forEach(function(t){n[t.name]=t.value}),n}},{key:"getCookiesArray",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=[],r=Me.getCookieScopeDomain(t),o=!0,i=!1,a=void 0;try{for(var s,c=Vt(this.__cookiesMap.entries());!(o=(s=c.next()).done);o=!0){var u=qt(s.value,2),f=u[0],l=u[1];if(!(t&&r.indexOf(f)<0)){var p=!0,d=!1,h=void 0;try{for(var v,y=Vt(l.values());!(p=(v=y.next()).done);p=!0){var g=v.value;g.isInPath(e)&&!g.isExpired()&&n.push(g)}}catch(t){d=!0,h=t}finally{try{!p&&y.return&&y.return()}finally{if(d)throw h}}}}}catch(t){i=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(i)throw a}}return n}},{key:"setCookiesArray",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.__cookiesMap=this.__cookiesMap||new ye,e.forEach(function(e){var n=t.__cookiesMap.get(e.domain);n||(n=new ye,t.__cookiesMap.set(e.domain,n)),n.set(e.name,e)}),this.__saveToStorage(),this.__cookiesMap}},{key:"clearCookies",value:function(t){if(t){var e=this.__cookiesMap.get(t);e&&e.clear()}else this.__cookiesMap.clear();return this.__saveToStorage(),!0}},{key:"getRequestCookies",value:function(t,e){var n=this.getCookiesArray(t,e);return this.stringify(n)}},{key:"setResponseCookies",value:function(t,e){var n=this.parse(t,e);return this.setCookiesArray(n)}},{key:"parse",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1];return je.parse(je.splitCookiesString(t)).map(function(t){return t.domain||(t.domain=e),new Pe(t)})}},{key:"stringify",value:function(t){return t.map(function(t){return t.toString()}).join("; ")}},{key:"__saveToStorage",value:function(){var t=[],e=!0,n=!1,r=void 0;try{for(var o,i=Vt(this.__cookiesMap.values());!(e=(o=i.next()).done);e=!0){var a=o.value,s=!0,c=!1,u=void 0;try{for(var f,l=Vt(a.values());!(s=(f=l.next()).done);s=!0){var p=f.value;p.isExpired()?a.delete(p.name):p.isPersistence()&&t.push(p)}}catch(t){c=!0,u=t}finally{try{!s&&l.return&&l.return()}finally{if(c)throw u}}}}catch(t){n=!0,r=t}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}wx.setStorageSync(this.__storageKey,t)}},{key:"__readFromStorage",value:function(){var t=wx.getStorageSync(this.__storageKey)||[];return t=t.map(function(t){return new Pe(t)}),this.setCookiesArray(t)}}]),t}();return function(t,e){var n=new Te;return et(t,{requestWithCookie:{value:function(t){if(t.cookie=void 0===t.cookie||!!t.cookie,t.dataType=t.dataType||"json",t.cookie){var r=(t.url||"").split("/")[2],o=t.url.split(r).pop(),i=n.getRequestCookies(r,o);t.header=t.header||{},t.header.Cookie=i,t.header["X-Requested-With"]="XMLHttpRequest","json"===t.dataType&&(t.header.Accept="application/json, text/plain, */*");var a=t.success;t.success=function(t){var e=t.header["Set-Cookie"]||t.header["set-cookie"]||"";n.setResponseCookies(e,r),a&&a(t)}}e(t)}}}),n}(wx,wx.request)})},25:function(e,n,r){function o(t,e,n,r){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===(void 0===t?"undefined":l(t))?Object.keys(t).map(function(r){var o=p(r)+n;return Array.isArray(t[r])?t[r].map(function(t){return o+p(t)}).join(e):o+p(t[r])}).filter(Boolean).join(e):r?p(r)+n+p(t):""}function i(t){if("string"==typeof t)return t;var e=t.path,n=o(t.query);return n?e+"?"+n:e}function a(t){var e=t||{},n=e.page&&e.page.route;return{path:"/"+n,params:{},query:e.query,hash:"",fullPath:i({path:"/"+n,query:e.query}),name:n&&n.replace(/\/(\w)/g,function(t,e){return e.toUpperCase()})}}function s(t,e,n,r){var o={url:i(t),complete:e,fail:n,success:r};t.isTab?wx.switchTab(o):t.reLaunch?wx.reLaunch(o):wx.navigateTo(o)}function c(t,e,n,r){var o=i(t);wx.redirectTo({url:o,complete:e,fail:n,success:r})}function u(t){wx.navigateBack({delta:t})}function f(){wx.navigateBack()}var l="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)},p=function(t){switch(void 0===t?"undefined":l(t)){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},d=void 0,h={install:function(t){if(!this.installed||d!==t){this.installed=!0,d=t;var e={mode:"history",push:s,replace:c,go:u,back:f};t.mixin({onLoad:function(){var t=this.$root.$mp;this._route=a(t)},onShow:function(){e.app=this,e.currentRoute=this._route}}),Object.defineProperty(t.prototype,"$router",{get:function(){return e}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._route}})}}};n.a=h},26:function(t,e,n){!function(r,o){t.exports=e=o(n(21))}(0,function(t){return function(){function e(t,e,n){for(var o=[],i=0,a=0;a<e;a++)if(a%4){var s=n[t.charCodeAt(a-1)]<<a%4*2,c=n[t.charCodeAt(a)]>>>6-a%4*2;o[i>>>2]|=(s|c)<<24-i%4*8,i++}return r.create(o,i)}var n=t,r=n.lib.WordArray;n.enc.Base64={stringify:function(t){var e=t.words,n=t.sigBytes,r=this._map;t.clamp();for(var o=[],i=0;i<n;i+=3)for(var a=(e[i>>>2]>>>24-i%4*8&255)<<16|(e[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|e[i+2>>>2]>>>24-(i+2)%4*8&255,s=0;s<4&&i+.75*s<n;s++)o.push(r.charAt(a>>>6*(3-s)&63));var c=r.charAt(64);if(c)for(;o.length%4;)o.push(c);return o.join("")},parse:function(t){var n=t.length,r=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var i=0;i<r.length;i++)o[r.charCodeAt(i)]=i}var a=r.charAt(64);if(a){var s=t.indexOf(a);-1!==s&&(n=s)}return e(t,n,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),t.enc.Base64})},29:function(t,e,n){!function(t,n){n(e)}(0,function(t){var e=function(){if("undefined"==typeof document)return!1;var t=document.createElement("canvas");return!!(t&&t.getContext&&t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}();t.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:750,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2147483647,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75;if(!t)return"";var i="jpg";return t.match(/\.png/)&&(i="png"),e&&(i="webp"),t.match(/\.gif/)&&(i="gif"),"//nimg.ws.126.net/?url="+encodeURIComponent(t)+"&thumbnail="+n+"x"+r+"&quality="+o+"&type="+i},Object.defineProperty(t,"__esModule",{value:!0})})},3:function(e,n,r){(function(n){try{n||(n={}),n.process=n.process||{},n.process.env=n.process.env||{},n.App=n.App||App,n.Page=n.Page||Page,n.Component=n.Component||Component,n.getApp=n.getApp||getApp}catch(t){}!function(t,n){e.exports=n()}(0,function(){function e(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function i(t){return!1===t}function a(t){return"string"==typeof t||"number"==typeof t}function s(e){return null!==e&&"object"===(void 0===e?"undefined":t(e))}function c(t){return"[object Object]"===Je.call(t)}function u(t){return"[object RegExp]"===Je.call(t)}function f(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function l(e){return null==e?"":"object"===(void 0===e?"undefined":t(e))?JSON.stringify(e,null,2):String(e)}function p(t){var e=parseFloat(t);return isNaN(e)?t:e}function d(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}function h(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function v(t,e){return Ze.call(t,e)}function y(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}function g(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function m(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function _(t,e){for(var n in e)t[n]=e[n];return t}function b(t){for(var e={},n=0;n<t.length;n++)t[n]&&_(e,t[n]);return e}function w(t,e,n){}function x(t,e){var n=s(t),r=s(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function k(t,e){for(var n=0;n<t.length;n++)if(x(t[n],e))return n;return-1}function O(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function A(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function S(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function $(t){if(!ln.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}function C(t,e,n){if(un.errorHandler)un.errorHandler.call(null,t,e,n);else{if(!hn||"undefined"==typeof console)throw t;console.error(t)}}function j(t){return"function"==typeof t&&/native code/.test(t.toString())}function E(t){Cn.target&&jn.push(Cn.target),Cn.target=t}function M(){Cn.target=jn.pop()}function P(t,e,n){t.__proto__=e}function T(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];S(t,i,e[i])}}function D(t,e){if(s(t)){var n;return v(t,"__ob__")&&t.__ob__ instanceof Dn?n=t.__ob__:Tn.shouldConvert&&!kn()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Dn(t)),e&&n&&n.vmCount++,n}}function I(t,e,n,r,o){var i=new Cn,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&D(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return Cn.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&L(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&D(e),i.notify())}})}}function B(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(v(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(I(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function R(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||v(t,e)&&(delete t[e],n&&n.dep.notify())}}function L(t){for(var e=void 0,n=0,r=t.length;n<r;n++)(e=t[n])&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&L(e)}function N(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)r=t[n=i[a]],o=e[n],v(t,n)?c(r)&&c(o)&&N(r,o):B(t,n,o);return t}function U(t,e,n){return n?t||e?function(){var r="function"==typeof e?e.call(n):e,o="function"==typeof t?t.call(n):void 0;return r?N(r,o):o}:void 0:e?t?function(){return N("function"==typeof e?e.call(this):e,t.call(this))}:e:t}function F(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function z(t,e){var n=Object.create(t||null);return e?_(n,e):n}function H(t){var e=t.props;if(e){var n,r,o={};if(Array.isArray(e))for(n=e.length;n--;)"string"==typeof(r=e[n])&&(o[Qe(r)]={type:null});else if(c(e))for(var i in e)r=e[i],o[Qe(i)]=c(r)?r:{type:r};t.props=o}}function V(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function q(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}function G(t,e,n){function r(r){var o=In[r]||Bn;c[r]=o(t[r],e[r],n,r)}"function"==typeof e&&(e=e.options),H(e),V(e),q(e);var o=e.extends;if(o&&(t=G(t,o,n)),e.mixins)for(var i=0,a=e.mixins.length;i<a;i++)t=G(t,e.mixins[i],n);var s,c={};for(s in t)r(s);for(s in e)v(t,s)||r(s);return c}function K(t,e,n,r){if("string"==typeof n){var o=t[e];if(v(o,n))return o[n];var i=Qe(n);if(v(o,i))return o[i];var a=tn(i);return v(o,a)?o[a]:o[n]||o[i]||o[a]}}function W(t,e,n,r){var o=e[t],i=!v(n,t),a=n[t];if(Z(Boolean,o.type)&&(i&&!v(o,"default")?a=!1:Z(String,o.type)||""!==a&&a!==nn(t)||(a=!0)),void 0===a){a=J(r,o,t);var s=Tn.shouldConvert;Tn.shouldConvert=!0,D(a),Tn.shouldConvert=s}return a}function J(t,e,n){if(v(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"==typeof r&&"Function"!==X(e.type)?r.call(t):r}}function X(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Z(t,e){if(!Array.isArray(e))return X(e)===X(t);for(var n=0,r=e.length;n<r;n++)if(X(e[n])===X(t))return!0;return!1}function Y(t){return new Rn(void 0,void 0,void 0,String(t))}function Q(t){var e=new Rn(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function tt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Q(t[r]);return n}function et(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function nt(t,n,r,o,i){var a,s,c,u;for(a in t)s=t[a],c=n[a],u=Fn(a),e(s)||(e(c)?(e(s.fns)&&(s=t[a]=et(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in n)e(t[a])&&o((u=Fn(a)).name,n[a],u.capture)}function rt(t,n,o){var i=n.options.props;if(!e(i)){var a={},s=t.attrs,c=t.props;if(r(s)||r(c))for(var u in i){var f=nn(u);ot(a,c,u,f,!0)||ot(a,s,u,f,!1)}return a}}function ot(t,e,n,o,i){if(r(e)){if(v(e,n))return t[n]=e[n],i||delete e[n],!0;if(v(e,o))return t[n]=e[o],i||delete e[o],!0}return!1}function it(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function at(t){return a(t)?[Y(t)]:Array.isArray(t)?ct(t):void 0}function st(t){return r(t)&&r(t.text)&&i(t.isComment)}function ct(t,n){var i,s,c,u=[];for(i=0;i<t.length;i++)e(s=t[i])||"boolean"==typeof s||(c=u[u.length-1],Array.isArray(s)?u.push.apply(u,ct(s,(n||"")+"_"+i)):a(s)?st(c)?c.text+=String(s):""!==s&&u.push(Y(s)):st(s)&&st(c)?u[u.length-1]=Y(c.text+s.text):(o(t._isVList)&&r(s.tag)&&e(s.key)&&r(n)&&(s.key="__vlist"+n+"_"+i+"__"),u.push(s)));return u}function ut(t,e){return t.__esModule&&t.default&&(t=t.default),s(t)?e.extend(t):t}function ft(t,e,n,r,o){var i=Un();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function lt(t,n,i){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;if(o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(!r(t.contexts)){var a=t.contexts=[i],c=!0,u=function(){for(var t=0,e=a.length;t<e;t++)a[t].$forceUpdate()},f=O(function(e){t.resolved=ut(e,n),c||u()}),l=O(function(e){r(t.errorComp)&&(t.error=!0,u())}),p=t(f,l);return s(p)&&("function"==typeof p.then?e(t.resolved)&&p.then(f,l):r(p.component)&&"function"==typeof p.component.then&&(p.component.then(f,l),r(p.error)&&(t.errorComp=ut(p.error,n)),r(p.loading)&&(t.loadingComp=ut(p.loading,n),0===p.delay?t.loading=!0:setTimeout(function(){e(t.resolved)&&e(t.error)&&(t.loading=!0,u())},p.delay||200)),r(p.timeout)&&setTimeout(function(){e(t.resolved)&&l(null)},p.timeout))),c=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(i)}function pt(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&r(n.componentOptions))return n}}function dt(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&yt(t,e)}function ht(t,e,n){n?Nn.$once(t,e):Nn.$on(t,e)}function vt(t,e){Nn.$off(t,e)}function yt(t,e,n){Nn=t,nt(e,n||{},ht,vt,t)}function gt(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(mt)||(n.default=r),n}function mt(t){return t.isComment||" "===t.text}function _t(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?_t(t[n],e):e[t[n].key]=t[n].fn;return e}function bt(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function wt(t,e,n){t.$el=e,t.$options.render||(t.$options.render=Un),St(t,"beforeMount");var r;return r=function(){t._update(t._render(),n)},t._watcher=new Xn(t,r,w),n=!1,null==t.$vnode&&(t._isMounted=!0,St(t,"mounted")),t}function xt(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==fn);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){Tn.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=W(u,t.$options.props,e,t)}Tn.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,yt(t,n,f)}i&&(t.$slots=gt(o,r.context),t.$forceUpdate())}function kt(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function Ot(t,e){if(e){if(t._directInactive=!1,kt(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Ot(t.$children[n]);St(t,"activated")}}function At(t,e){if(!(e&&(t._directInactive=!0,kt(t))||t._inactive)){t._inactive=!0;for(var n=0;n<t.$children.length;n++)At(t.$children[n]);St(t,"deactivated")}}function St(t,e){var n=t.$options[e];if(n)for(var r=0,o=n.length;r<o;r++)try{n[r].call(t)}catch(n){C(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}function $t(){Wn=Hn.length=Vn.length=0,qn={},Gn=Kn=!1}function Ct(){Kn=!0;var t,e;for(Hn.sort(function(t,e){return t.id-e.id}),Wn=0;Wn<Hn.length;Wn++)e=(t=Hn[Wn]).id,qn[e]=null,t.run();var n=Vn.slice(),r=Hn.slice();$t(),Mt(n),jt(r),On&&un.devtools&&On.emit("flush")}function jt(t){for(var e=t.length;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&St(r,"updated")}}function Et(t){t._inactive=!1,Vn.push(t)}function Mt(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Ot(t[e],!0)}function Pt(t){var e=t.id;if(null==qn[e]){if(qn[e]=!0,Kn){for(var n=Hn.length-1;n>Wn&&Hn[n].id>t.id;)n--;Hn.splice(n+1,0,t)}else Hn.push(t);Gn||(Gn=!0,Sn(Ct))}}function Tt(t){Zn.clear(),Dt(t,Zn)}function Dt(t,e){var n,r,o=Array.isArray(t);if((o||s(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o)for(n=t.length;n--;)Dt(t[n],e);else for(n=(r=Object.keys(t)).length;n--;)Dt(t[r[n]],e)}}function It(t,e,n){Yn.get=function(){return this[e][n]},Yn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Yn)}function Bt(t){t._watchers=[];var e=t.$options;e.props&&Rt(t,e.props),e.methods&&Ht(t,e.methods),e.data?Lt(t):D(t._data={},!0),e.computed&&Ut(t,e.computed),e.watch&&e.watch!==mn&&Vt(t,e.watch)}function Rt(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;Tn.shouldConvert=i;for(var a in e)!function(i){o.push(i);var a=W(i,e,n,t);I(r,i,a),i in t||It(t,"_props",i)}(a);Tn.shouldConvert=!0}function Lt(t){var e=t.$options.data;c(e=t._data="function"==typeof e?Nt(e,t):e||{})||(e={});for(var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);o--;){var i=n[o];r&&v(r,i)||A(i)||It(t,"_data",i)}D(e,!0)}function Nt(t,e){try{return t.call(e)}catch(t){return C(t,e,"data()"),{}}}function Ut(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"==typeof o?o:o.get;n[r]=new Xn(t,i,w,Qn),r in t||Ft(t,r,o)}}function Ft(t,e,n){"function"==typeof n?(Yn.get=zt(e),Yn.set=w):(Yn.get=n.get?!1!==n.cache?zt(e):n.get:w,Yn.set=n.set?n.set:w),Object.defineProperty(t,e,Yn)}function zt(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Cn.target&&e.depend(),e.value}}function Ht(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?w:g(e[n],t)}function Vt(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)qt(t,n,r[o]);else qt(t,n,r)}}function qt(t,e,n,r){return c(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function Gt(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}function Kt(t){var e=Wt(t.$options.inject,t);e&&(Tn.shouldConvert=!1,Object.keys(e).forEach(function(n){I(t,n,e[n])}),Tn.shouldConvert=!0)}function Wt(t,e){if(t){for(var n=Object.create(null),r=An?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++)for(var i=r[o],a=t[i],s=e;s;){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}return n}}function Jt(t,e,n,o,i){var a={},s=t.options.props;if(r(s))for(var c in s)a[c]=W(c,s,e||{});else r(n.attrs)&&Xt(a,n.attrs),r(n.props)&&Xt(a,n.props);var u=Object.create(o),f=t.options.render.call(null,function(t,e,n,r){return ne(u,t,e,n,r,!0)},{data:n,props:a,children:i,parent:o,listeners:n.on||{},injections:Wt(t.options.inject,o),slots:function(){return gt(i,o)}});return f instanceof Rn&&(f.functionalContext=o,f.functionalOptions=t.options,n.slot&&((f.data||(f.data={})).slot=n.slot)),f}function Xt(t,e){for(var n in e)t[Qe(n)]=e[n]}function Zt(t,n,i,a,c){if(!e(t)){var u=i.$options._base;if(s(t)&&(t=u.extend(t)),"function"==typeof t){var f;if(e(t.cid)&&(f=t,void 0===(t=lt(f,u,i))))return ft(f,n,i,a,c);n=n||{},ge(t),r(n.model)&&ee(t.options,n);var l=rt(n,t,c);if(o(t.options.functional))return Jt(t,l,n,i,a);var p=n.on;if(o(t.options.abstract)){var d=n.slot;n={},d&&(n.slot=d)}Qt(n);var h=t.options.name||c;return new Rn("vue-component-"+t.cid+(h?"-"+h:""),n,void 0,void 0,void 0,i,{Ctor:t,propsData:l,listeners:p,tag:c,children:a},f)}}}function Yt(t,e,n,o){var i=t.componentOptions,a={_isComponent:!0,parent:e,propsData:i.propsData,_componentTag:i.tag,_parentVnode:t,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:o||null},s=t.data.inlineTemplate;return r(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new i.Ctor(a)}function Qt(t){t.hook||(t.hook={});for(var e=0;e<er.length;e++){var n=er[e],r=t.hook[n],o=tr[n];t.hook[n]=r?te(o,r):o}}function te(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function ee(t,e){var n=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var i=e.on||(e.on={});r(i[o])?i[o]=[e.model.callback].concat(i[o]):i[o]=e.model.callback}function ne(t,e,n,r,i,s){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o(s)&&(i=rr),re(t,e,n,r,i)}function re(t,e,n,o,i){if(r(n)&&r(n.__ob__))return Un();if(r(n)&&r(n.is)&&(e=n.is),!e)return Un();Array.isArray(o)&&"function"==typeof o[0]&&((n=n||{}).scopedSlots={default:o[0]},o.length=0),i===rr?o=at(o):i===nr&&(o=it(o));var a,s;if("string"==typeof e){var c;s=un.getTagNamespace(e),a=un.isReservedTag(e)?new Rn(un.parsePlatformTagName(e),n,o,void 0,void 0,t):r(c=K(t.$options,"components",e))?Zt(c,n,t,o,e):new Rn(e,n,o,void 0,void 0,t)}else a=Zt(e,n,t,o);return r(a)?(s&&oe(a,s),a):Un()}function oe(t,n){if(t.ns=n,"foreignObject"!==t.tag&&r(t.children))for(var o=0,i=t.children.length;o<i;o++){var a=t.children[o];r(a.tag)&&e(a.ns)&&oe(a,n)}}function ie(t,e){var n,o,i,a,c;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),o=0,i=t.length;o<i;o++)n[o]=e(t[o],o);else if("number"==typeof t)for(n=new Array(t),o=0;o<t;o++)n[o]=e(o+1,o);else if(s(t))for(a=Object.keys(t),n=new Array(a.length),o=0,i=a.length;o<i;o++)c=a[o],n[o]=e(t[c],c,o);return r(n)&&(n._isVList=!0),n}function ae(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=_(_({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function se(t){return K(this.$options,"filters",t,!0)||on}function ce(t,e,n){var r=un.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function ue(t,e,n,r,o){if(n)if(s(n)){Array.isArray(n)&&(n=b(n));var i;for(var a in n)!function(a){if("class"===a||"style"===a||Xe(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||un.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}a in i||(i[a]=n[a],o&&((t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}))}(a)}else;return t}function fe(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?tt(n):Q(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),pe(n,"__static__"+t,!1),n)}function le(t,e,n){return pe(t,"__once__"+e+(n?"_"+n:""),!0),t}function pe(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&de(t[r],e+"_"+r,n);else de(t,e,n)}function de(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function he(t,e){if(e)if(c(e)){var n=t.on=t.on?_({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function ve(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=gt(t.$options._renderChildren,n),t.$scopedSlots=fn,t._c=function(e,n,r,o){return ne(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return ne(t,e,n,r,o,!0)};var r=e&&e.data;I(t,"$attrs",r&&r.attrs,null,!0),I(t,"$listeners",r&&r.on,null,!0)}function ye(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function ge(t){var e=t.options;if(t.super){var n=ge(t.super);if(n!==t.superOptions){t.superOptions=n;var r=me(t);r&&_(t.extendOptions,r),(e=t.options=G(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function me(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=_e(n[i],r[i],o[i]));return e}function _e(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function be(t){this._init(t)}function we(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=m(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}function xe(t){t.mixin=function(t){return this.options=G(this.options,t),this}}function ke(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=G(n.options,t),a.super=n,a.options.props&&Oe(a),a.options.computed&&Ae(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,sn.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=_({},a.options),o[r]=a,a}}function Oe(t){var e=t.options.props;for(var n in e)It(t.prototype,"_props",n)}function Ae(t){var e=t.options.computed;for(var n in e)Ft(t.prototype,n,e[n])}function Se(t){sn.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function $e(t){return t&&(t.Ctor.options.name||t.tag)}function Ce(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!u(t)&&t.test(e)}function je(t,e,n){for(var r in t){var o=t[r];if(o){var i=$e(o.componentOptions);i&&!n(i)&&(o!==e&&Ee(o),t[r]=null)}}}function Ee(t){t&&t.componentInstance.$destroy()}function Me(t){return t&&t.$attrs?t.$attrs.mpcomid:"0"}function Pe(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?h(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}function Te(t,n){return t.key===n.key&&(t.tag===n.tag&&t.isComment===n.isComment&&r(t.data)===r(n.data)&&De(t,n)||o(t.isAsyncPlaceholder)&&t.asyncFactory===n.asyncFactory&&e(n.asyncFactory.error))}function De(t,e){if("input"!==t.tag)return!0;var n;return(r(n=t.data)&&r(n=n.attrs)&&n.type)===(r(n=e.data)&&r(n=n.attrs)&&n.type)}function Ie(t,e,n){var o,i,a={};for(o=e;o<=n;++o)r(i=t[o].key)&&(a[i]=o);return a}function Be(t,e,n){var r=t.$options[e];"onError"===e&&r&&(r=[r]);var o;if(r)for(var i=0,a=r.length;i<a;i++)try{o=r[i].call(t,n)}catch(n){C(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Be(t,e,n)}),o}function Re(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Le(t,e,n){if(t){var r,o,i;if(Array.isArray(t))for(r=t.length;r--;)"string"==typeof(o=t[r])&&(e[i=Qe(o)]={type:null});else if(c(t))for(var a in t)o=t[a],e[i=Qe(a)]=c(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var u=e[s];u.default&&(u.value=u.default);var f=u.observer;u.observer=function(t,e){n[i]=t,"function"==typeof f&&f.call(n,t,e)}}return e}}function Ne(t){var e=t.$options.properties,n=t.$options.props,r={};return Le(e,r,t),Le(n,r,t),r}function Ue(t){var e=t._mpProps={};Object.keys(t.$options.properties||{}).forEach(function(n){n in t||(It(t,"_mpProps",n),e[n]=void 0)}),D(e,!0)}function Fe(t){return[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{})).reduce(function(e,n){return e[n]=t[n],e},{})}function ze(t,e){void 0===e&&(e=[]);var n=(t||{}).$parent;return n?(e.unshift(Me(n)),n.$parent?ze(n,e):e):e}function He(t){var e=ze(t).join(","),n=e+(e?",":"")+Me(t),r=Object.assign(Fe(t),{$k:n,$kk:n+",",$p:e}),o={};return o["$root."+n]=r,o}function Ve(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Ve(t,e)}),Object.assign(e,He(t))}function qe(t){var e=t.$root.$mp||{},n=e.mpType;void 0===n&&(n="");var r=e.page;if("app"!==n&&r&&"function"==typeof r.setData)return r}function Ge(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r];if(Me(o)===e)return t=o}return t},t):t}function Ke(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t];(Array.isArray(o)?o:[o]).forEach(function(t){r=r.concat(Ke(t,e,n))})}):a.forEach(function(t){r=r.concat(Ke(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c.eventid===e?(n.forEach(function(t){var e=u[t];"function"==typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function We(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s={mp:t,type:e,timeStamp:n,x:o.x,y:o.y,target:Object.assign({},i,o),currentTarget:a,stopPropagation:w,preventDefault:w};return r&&r.length&&(Object.assign(s,r[0]),s.touches=r),s}var Je=Object.prototype.toString,Xe=(d("slot,component",!0),d("key,ref,slot,is")),Ze=Object.prototype.hasOwnProperty,Ye=/-(\w)/g,Qe=y(function(t){return t.replace(Ye,function(t,e){return e?e.toUpperCase():""})}),tn=y(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),en=/([^-])([A-Z])/g,nn=y(function(t){return t.replace(en,"$1-$2").replace(en,"$1-$2").toLowerCase()}),rn=function(t,e,n){return!1},on=function(t){return t},an="data-server-rendered",sn=["component","directive","filter"],cn=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached"],un={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:rn,isReservedAttr:rn,isUnknownElement:rn,getTagNamespace:w,parsePlatformTagName:on,mustUseProp:rn,_lifecycleHooks:cn},fn=Object.freeze({}),ln=/[^\w.$]/,pn=w,dn="__proto__"in{},hn="undefined"!=typeof window,vn=["mpvue-runtime"].join(),yn=(vn&&/msie|trident/.test(vn),vn&&vn.indexOf("msie 9.0"),vn&&vn.indexOf("edge/")>0),gn=(vn&&vn.indexOf("android"),vn&&/iphone|ipad|ipod|ios/.test(vn)),mn=(vn&&/chrome\/\d+/.test(vn),{}.watch),_n=!1;if(hn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){_n=!0}}),window.addEventListener("test-passive",null,bn)}catch(t){}var wn,xn,kn=function(){return void 0===wn&&(wn=!hn&&void 0!==n&&"server"===n.process.env.VUE_ENV),wn},On=hn&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,An="undefined"!=typeof Symbol&&j(Symbol)&&"undefined"!=typeof Reflect&&j(Reflect.ownKeys),Sn=function(){function t(){r=!1;var t=n.slice(0);n.length=0;for(var e=0;e<t.length;e++)t[e]()}var e,n=[],r=!1;if("undefined"!=typeof Promise&&j(Promise)){var o=Promise.resolve(),i=function(t){console.error(t)};e=function(){o.then(t).catch(i),gn&&setTimeout(w)}}else e=function(){setTimeout(t,0)};return function(t,o){var i;if(n.push(function(){if(t)try{t.call(o)}catch(t){C(t,o,"nextTick")}else i&&i(o)}),r||(r=!0,e()),!t&&"undefined"!=typeof Promise)return new Promise(function(t,e){i=t})}}();xn="undefined"!=typeof Set&&j(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var $n=0,Cn=function(){this.id=$n++,this.subs=[]};Cn.prototype.addSub=function(t){this.subs.push(t)},Cn.prototype.removeSub=function(t){h(this.subs,t)},Cn.prototype.depend=function(){Cn.target&&Cn.target.addDep(this)},Cn.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},Cn.target=null;var jn=[],En=Array.prototype,Mn=Object.create(En);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=En[t];S(Mn,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2)}return o&&a.observeArray(o),a.dep.notify(),i})});var Pn=Object.getOwnPropertyNames(Mn),Tn={shouldConvert:!0},Dn=function(t){this.value=t,this.dep=new Cn,this.vmCount=0,S(t,"__ob__",this),Array.isArray(t)?((dn?P:T)(t,Mn,Pn),this.observeArray(t)):this.walk(t)};Dn.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)I(t,e[n],t[e[n]])},Dn.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)D(t[e])};var In=un.optionMergeStrategies;In.data=function(t,e,n){return n?U(t,e,n):e&&"function"!=typeof e?t:U.call(this,t,e)},cn.forEach(function(t){In[t]=F}),sn.forEach(function(t){In[t+"s"]=z}),In.watch=function(t,e){if(t===mn&&(t=void 0),e===mn&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};_(n,t);for(var r in e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},In.props=In.methods=In.inject=In.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return _(n,t),_(n,e),n},In.provide=U;var Bn=function(t,e){return void 0===e?t:e},Rn=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ln={child:{}};Ln.child.get=function(){return this.componentInstance},Object.defineProperties(Rn.prototype,Ln);var Nn,Un=function(t){void 0===t&&(t="");var e=new Rn;return e.text=t,e.isComment=!0,e},Fn=y(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}),zn=null,Hn=[],Vn=[],qn={},Gn=!1,Kn=!1,Wn=0,Jn=0,Xn=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Jn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new xn,this.newDepIds=new xn,this.expression="","function"==typeof e?this.getter=e:(this.getter=$(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Xn.prototype.get=function(){E(this);var t,e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;C(t,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Tt(t),M(),this.cleanupDeps()}return t},Xn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Xn.prototype.cleanupDeps=function(){for(var t=this,e=this.deps.length;e--;){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Xn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Pt(this)},Xn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||s(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){C(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Xn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Xn.prototype.depend=function(){for(var t=this,e=this.deps.length;e--;)t.deps[e].depend()},Xn.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var e=this.deps.length;e--;)t.deps[e].removeSub(t);this.active=!1}};var Zn=new xn,Yn={enumerable:!0,configurable:!0,get:w,set:w},Qn={lazy:!0},tr={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=Yt(t,zn,n,r)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var o=t;tr.prepatch(o,o)}},prepatch:function(t,e){var n=e.componentOptions;xt(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,St(n,"mounted")),t.data.keepAlive&&(e._isMounted?Et(n):Ot(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?At(e,!0):e.$destroy())}},er=Object.keys(tr),nr=1,rr=2,or=0;!function(t){t.prototype._init=function(t){var e=this;e._uid=or++,e._isVue=!0,t&&t._isComponent?ye(e,t):e.$options=G(ge(e.constructor),t||{},e),e._renderProxy=e,e._self=e,bt(e),dt(e),ve(e),St(e,"beforeCreate"),Kt(e),Bt(e),Gt(e),St(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}(be),function(t){var e={};e.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=B,t.prototype.$delete=R,t.prototype.$watch=function(t,e,n){var r=this;if(c(e))return qt(r,t,e,n);(n=n||{}).user=!0;var o=new Xn(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}(be),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){function n(){r.$off(t,n),e.apply(r,arguments)}var r=this;return n.fn=e,r.$on(t,n),r},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a=r._events[t];if(!a)return r;if(1===arguments.length)return r._events[t]=null,r;for(var s,c=a.length;c--;)if((s=a[c])===e||s.fn===e){a.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?m(n):n;for(var r=m(arguments,1),o=0,i=n.length;o<i;o++)try{n[o].apply(e,r)}catch(n){C(n,e,'event handler for "'+t+'"')}}return e}}(be),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&St(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=zn;zn=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),zn=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){St(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||h(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),St(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}(be),function(t){t.prototype.$nextTick=function(t){return Sn(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,r=e.staticRenderFns,o=e._parentVnode;if(t._isMounted)for(var i in t.$slots)t.$slots[i]=tt(t.$slots[i]);t.$scopedSlots=o&&o.data.scopedSlots||fn,r&&!t._staticTrees&&(t._staticTrees=[]),t.$vnode=o;var a;try{a=n.call(t._renderProxy,t.$createElement)}catch(e){C(e,t,"render function"),a=t._vnode}return a instanceof Rn||(a=Un()),a.parent=o,a},t.prototype._o=le,t.prototype._n=p,t.prototype._s=l,t.prototype._l=ie,t.prototype._t=ae,t.prototype._q=x,t.prototype._i=k,t.prototype._m=fe,t.prototype._f=se,t.prototype._k=ce,t.prototype._b=ue,t.prototype._v=Y,t.prototype._e=Un,t.prototype._u=_t,t.prototype._g=he}(be);var ir=[String,RegExp,Array],ar={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:ir,exclude:ir},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)Ee(t.cache[e])},watch:{include:function(t){je(this.cache,this._vnode,function(e){return Ce(t,e)})},exclude:function(t){je(this.cache,this._vnode,function(e){return!Ce(t,e)})}},render:function(){var t=pt(this.$slots.default),e=t&&t.componentOptions;if(e){var n=$e(e);if(n&&(this.include&&!Ce(this.include,n)||this.exclude&&Ce(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}}};!function(t){var e={};e.get=function(){return un},Object.defineProperty(t,"config",e),t.util={warn:pn,extend:_,mergeOptions:G,defineReactive:I},t.set=B,t.delete=R,t.nextTick=Sn,t.options=Object.create(null),sn.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,_(t.options.components,ar),we(t),xe(t),ke(t),Se(t)}(be),Object.defineProperty(be.prototype,"$isServer",{get:kn}),Object.defineProperty(be.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),be.version="2.4.1",be.mpvueVersion="1.0.12";var sr=d("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),cr=d("style,class"),ur=(d("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),d("embed,img,image,input,link,meta",!0),{tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]}),fr={},lr=Object.freeze({createElement:function(t,e){return fr},createElementNS:function(t,e){return fr},createTextNode:function(t){return fr},createComment:function(t){return fr},insertBefore:function(t,e,n){},removeChild:function(t,e){},appendChild:function(t,e){},parentNode:function(t){return fr},nextSibling:function(t){return fr},tagName:function(t){return"div"},setTextContent:function(t,e){return fr},setAttribute:function(t,e,n){return fr}}),pr={create:function(t,e){Pe(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Pe(t,!0),Pe(e))},destroy:function(t){Pe(t,!0)}},dr=new Rn("",{},[]),hr=["create","activate","update","remove","destroy"],vr=function(t){function n(t){return new Rn(E.tagName(t).toLowerCase(),{},[],void 0,t)}function i(t,e){function n(){0==--n.listeners&&s(t)}return n.listeners=e,n}function s(t){var e=E.parentNode(t);r(e)&&E.removeChild(e,t)}function c(t,e,n,i,a){if(t.isRootInsert=!a,!u(t,e,n,i)){var s=t.data,c=t.children,f=t.tag;r(f)?(t.elm=t.ns?E.createElementNS(t.ns,f):E.createElement(f,t),g(t),h(t,c,e),r(s)&&y(t,e),p(n,t.elm,i)):o(t.isComment)?(t.elm=E.createComment(t.text),p(n,t.elm,i)):(t.elm=E.createTextNode(t.text),p(n,t.elm,i))}}function u(t,e,n,i){var a=t.data;if(r(a)){var s=r(t.componentInstance)&&a.keepAlive;if(r(a=a.hook)&&r(a=a.init)&&a(t,!1,n,i),r(t.componentInstance))return f(t,e),o(s)&&l(t,e,n,i),!0}}function f(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,v(t)?(y(t,e),g(t)):(Pe(t),e.push(t))}function l(t,e,n,o){for(var i,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,r(i=a.data)&&r(i=i.transition)){for(i=0;i<C.activate.length;++i)C.activate[i](dr,a);e.push(a);break}p(n,t.elm,o)}function p(t,e,n){r(t)&&(r(n)?n.parentNode===t&&E.insertBefore(t,e,n):E.appendChild(t,e))}function h(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)c(e[r],n,t.elm,null,!0);else a(t.text)&&E.appendChild(t.elm,E.createTextNode(t.text))}function v(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return r(t.tag)}function y(t,e){for(var n=0;n<C.create.length;++n)C.create[n](dr,t);r(S=t.data.hook)&&(r(S.create)&&S.create(dr,t),r(S.insert)&&e.push(t))}function g(t){for(var e,n=t;n;)r(e=n.context)&&r(e=e.$options._scopeId)&&E.setAttribute(t.elm,e,""),n=n.parent;r(e=zn)&&e!==t.context&&r(e=e.$options._scopeId)&&E.setAttribute(t.elm,e,"")}function m(t,e,n,r,o,i){for(;r<=o;++r)c(n[r],i,t,e)}function _(t){var e,n,o=t.data;if(r(o))for(r(e=o.hook)&&r(e=e.destroy)&&e(t),e=0;e<C.destroy.length;++e)C.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)_(t.children[n])}function b(t,e,n,o){for(;n<=o;++n){var i=e[n];r(i)&&(r(i.tag)?(w(i),_(i)):s(i.elm))}}function w(t,e){if(r(e)||r(t.data)){var n,o=C.remove.length+1;for(r(e)?e.listeners+=o:e=i(t.elm,o),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&w(n,e),n=0;n<C.remove.length;++n)C.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else s(t.elm)}function x(t,n,o,i,a){for(var s,u,f,l=0,p=0,d=n.length-1,h=n[0],v=n[d],y=o.length-1,g=o[0],_=o[y],w=!a;l<=d&&p<=y;)e(h)?h=n[++l]:e(v)?v=n[--d]:Te(h,g)?(k(h,g,i),h=n[++l],g=o[++p]):Te(v,_)?(k(v,_,i),v=n[--d],_=o[--y]):Te(h,_)?(k(h,_,i),w&&E.insertBefore(t,h.elm,E.nextSibling(v.elm)),h=n[++l],_=o[--y]):Te(v,g)?(k(v,g,i),w&&E.insertBefore(t,v.elm,h.elm),v=n[--d],g=o[++p]):(e(s)&&(s=Ie(n,l,d)),e(u=r(g.key)?s[g.key]:null)?(c(g,i,t,h.elm),g=o[++p]):Te(f=n[u],g)?(k(f,g,i),n[u]=void 0,w&&E.insertBefore(t,f.elm,h.elm),g=o[++p]):(c(g,i,t,h.elm),g=o[++p]));l>d?m(t,e(o[y+1])?null:o[y+1].elm,o,p,y,i):p>y&&b(t,n,l,d)}function k(t,n,i,a){if(t!==n){var s=n.elm=t.elm;if(o(t.isAsyncPlaceholder))r(n.asyncFactory.resolved)?A(t.elm,n,i):n.isAsyncPlaceholder=!0;else if(o(n.isStatic)&&o(t.isStatic)&&n.key===t.key&&(o(n.isCloned)||o(n.isOnce)))n.componentInstance=t.componentInstance;else{var c,u=n.data;r(u)&&r(c=u.hook)&&r(c=c.prepatch)&&c(t,n);var f=t.children,l=n.children;if(r(u)&&v(n)){for(c=0;c<C.update.length;++c)C.update[c](t,n);r(c=u.hook)&&r(c=c.update)&&c(t,n)}e(n.text)?r(f)&&r(l)?f!==l&&x(s,f,l,i,a):r(l)?(r(t.text)&&E.setTextContent(s,""),m(s,null,l,0,l.length-1,i)):r(f)?b(s,f,0,f.length-1):r(t.text)&&E.setTextContent(s,""):t.text!==n.text&&E.setTextContent(s,n.text),r(u)&&r(c=u.hook)&&r(c=c.postpatch)&&c(t,n)}}}function O(t,e,n){if(o(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}function A(t,e,n){if(o(e.isComment)&&r(e.asyncFactory))return e.elm=t,e.isAsyncPlaceholder=!0,!0;e.elm=t;var i=e.tag,a=e.data,s=e.children;if(r(a)&&(r(S=a.hook)&&r(S=S.init)&&S(e,!0),r(S=e.componentInstance)))return f(e,n),!0;if(r(i)){if(r(s))if(t.hasChildNodes()){for(var c=!0,u=t.firstChild,l=0;l<s.length;l++){if(!u||!A(u,s[l],n)){c=!1;break}u=u.nextSibling}if(!c||u)return!1}else h(e,s,n);if(r(a))for(var p in a)if(!M(p)){y(e,n);break}}else t.data!==e.text&&(t.data=e.text);return!0}var S,$,C={},j=t.modules,E=t.nodeOps;for(S=0;S<hr.length;++S)for(C[hr[S]]=[],$=0;$<j.length;++$)r(j[$][hr[S]])&&C[hr[S]].push(j[$][hr[S]]);var M=d("attrs,style,class,staticClass,staticStyle,key");return function(t,i,a,s,u,f){if(!e(i)){var l=!1,p=[];if(e(t))l=!0,c(i,p,u,f);else{var d=r(t.nodeType);if(!d&&Te(t,i))k(t,i,p,s);else{if(d){if(1===t.nodeType&&t.hasAttribute(an)&&(t.removeAttribute(an),a=!0),o(a)&&A(t,i,p))return O(i,p,!0),t;t=n(t)}var h=t.elm,y=E.parentNode(h);if(c(i,p,h._leaveCb?null:y,E.nextSibling(h)),r(i.parent)){for(var g=i.parent;g;)g.elm=i.elm,g=g.parent;if(v(i))for(var m=0;m<C.create.length;++m)C.create[m](dr,i.parent)}r(y)?b(y,[t],0,0):r(t.tag)&&_(t)}}return O(i,p,l),i.elm}r(t)&&_(t)}}({nodeOps:lr,modules:[pr]}),yr=function(t,e,n){function r(){c=!1===n.leading?0:Date.now(),s=null,a=t.apply(o,i),s||(o=i=null)}var o,i,a,s=null,c=0;return n||(n={}),function(u,f){var l=Date.now();c||!1!==n.leading||(c=l);var p=e-(l-c);return o=this,i=i?[u,Object.assign(i[1],f)]:[u,f],p<=0||p>e?(clearTimeout(s),s=null,c=l,a=t.apply(o,i),s||(o=i=null)):s||!1===n.trailing||(s=setTimeout(r,p)),a}}(function(t,e){t(e)},50);return be.config.mustUseProp=function(){},be.config.isReservedTag=sr,be.config.isReservedAttr=cr,be.config.getTagNamespace=function(){},be.config.isUnknownElement=function(){},be.prototype.__patch__=function(){vr.apply(this,arguments),this.$updateDataToMP()},be.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return wt(n,void 0,void 0)})}return wt(this,void 0,void 0)},be.prototype._initMP=function(t,e){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?Be(this,"onLaunch",o.appOptions):(Be(this,"onLoad",o.query),Be(this,"onReady")),e();if(o.mpType=t,o.status="register","app"===t)n.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,Be(r,"onLaunch",t),e()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,Be(r,"onShow",t)},onHide:function(){o.status="hide",Be(r,"onHide")},onError:function(t){Be(r,"onError",t)}});else if("component"===t)Ue(r),n.Component({properties:Ne(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",Be(r,"attached")},ready:function(){o.status="ready",Be(r,"ready"),e(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Be(r,"moved")},detached:function(){o.status="detached",Be(r,"detached")}});else{var i=n.getApp();n.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){o.page=this,o.query=t,o.status="load",Re(i,r),Be(r,"onLoad",t)},onShow:function(){o.page=this,o.status="show",Be(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",Be(r,"onReady"),e()},onHide:function(){o.status="hide",Be(r,"onHide"),o.page=null},onUnload:function(){o.status="unload",Be(r,"onUnload"),o.page=null},onPullDownRefresh:function(){Be(r,"onPullDownRefresh")},onReachBottom:function(){Be(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Be(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Be(r,"onPageScroll",t)},onTabItemTap:function(t){Be(r,"onTabItemTap",t)}})}},be.prototype.$updateDataToMP=function(){var t=qe(this);if(t){var e=He(this);yr(t.setData.bind(t),e)}},be.prototype._initDataToMP=function(){var t=qe(this);if(t){var e=Ve(this.$root);t.setData(e)}},be.prototype.$handleProxyWithVue=function(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=(t.currentTarget||r).dataset;void 0===o&&(o={});var i=o.comkey;void 0===i&&(i="");var a=o.eventid,s=Ge(e,i.split(","));if(s){var c=ur[n]||[n],u=Ke(s._vnode,a,c);if(u.length){var f=We(t);if(1===u.length)return u[0](f);u.forEach(function(t){return t(f)})}}},be})}).call(n,r(92))},30:function(t,e,n){!function(r,o){t.exports=e=o(n(21))}(0,function(t){return t.enc.Utf8})},42:function(t,e,n){!function(r,o,i){t.exports=e=o(n(21),n(26),n(97),n(90),n(77))}(0,function(t){return function(){var e=t,n=e.lib.BlockCipher,r=e.algo,o=[],i=[],a=[],s=[],c=[],u=[],f=[],l=[],p=[],d=[];!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;for(var n=0,r=0,e=0;e<256;e++){var h=r^r<<1^r<<2^r<<3^r<<4;h=h>>>8^255&h^99,o[n]=h,i[h]=n;var v=t[n],y=t[v],g=t[y],m=257*t[h]^16843008*h;a[n]=m<<24|m>>>8,s[n]=m<<16|m>>>16,c[n]=m<<8|m>>>24,u[n]=m;m=16843009*g^65537*y^257*v^16843008*n;f[h]=m<<24|m>>>8,l[h]=m<<16|m>>>16,p[h]=m<<8|m>>>24,d[h]=m,n?(n=v^t[t[t[g^v]]],r^=t[t[r]]):n=r=1}}();var h=[0,1,2,4,8,16,32,64,128,27,54],v=r.AES=n.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,n=t.sigBytes/4,r=4*((this._nRounds=n+6)+1),i=this._keySchedule=[],a=0;a<r;a++)if(a<n)i[a]=e[a];else{u=i[a-1];a%n?n>6&&a%n==4&&(u=o[u>>>24]<<24|o[u>>>16&255]<<16|o[u>>>8&255]<<8|o[255&u]):(u=o[(u=u<<8|u>>>24)>>>24]<<24|o[u>>>16&255]<<16|o[u>>>8&255]<<8|o[255&u],u^=h[a/n|0]<<24),i[a]=i[a-n]^u}for(var s=this._invKeySchedule=[],c=0;c<r;c++){a=r-c;if(c%4)u=i[a];else var u=i[a-4];s[c]=c<4||a<=4?u:f[o[u>>>24]]^l[o[u>>>16&255]]^p[o[u>>>8&255]]^d[o[255&u]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,a,s,c,u,o)},decryptBlock:function(t,e){n=t[e+1];t[e+1]=t[e+3],t[e+3]=n,this._doCryptBlock(t,e,this._invKeySchedule,f,l,p,d,i);var n=t[e+1];t[e+1]=t[e+3],t[e+3]=n},_doCryptBlock:function(t,e,n,r,o,i,a,s){for(var c=this._nRounds,u=t[e]^n[0],f=t[e+1]^n[1],l=t[e+2]^n[2],p=t[e+3]^n[3],d=4,h=1;h<c;h++){var v=r[u>>>24]^o[f>>>16&255]^i[l>>>8&255]^a[255&p]^n[d++],y=r[f>>>24]^o[l>>>16&255]^i[p>>>8&255]^a[255&u]^n[d++],g=r[l>>>24]^o[p>>>16&255]^i[u>>>8&255]^a[255&f]^n[d++],m=r[p>>>24]^o[u>>>16&255]^i[f>>>8&255]^a[255&l]^n[d++];u=v,f=y,l=g,p=m}var v=(s[u>>>24]<<24|s[f>>>16&255]<<16|s[l>>>8&255]<<8|s[255&p])^n[d++],y=(s[f>>>24]<<24|s[l>>>16&255]<<16|s[p>>>8&255]<<8|s[255&u])^n[d++],g=(s[l>>>24]<<24|s[p>>>16&255]<<16|s[u>>>8&255]<<8|s[255&f])^n[d++],m=(s[p>>>24]<<24|s[u>>>16&255]<<16|s[f>>>8&255]<<8|s[255&l])^n[d++];t[e]=v,t[e+1]=y,t[e+2]=g,t[e+3]=m},keySize:8});e.AES=n._createHelper(v)}(),t.AES})},43:function(t,e,n){!function(r,o,i){t.exports=e=o(n(21),n(77))}(0,function(t){return t.mode.ECB=function(){var e=t.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),e.Decryptor=e.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),e}(),t.mode.ECB})},44:function(t,e,n){!function(r,o,i){t.exports=e=o(n(21),n(77))}(0,function(t){return t.pad.Pkcs7})},77:function(t,e,n){!function(r,o,i){t.exports=e=o(n(21),n(90))}(0,function(t){t.lib.Cipher||function(e){var n=t,r=n.lib,o=r.Base,i=r.WordArray,a=r.BufferedBlockAlgorithm,s=n.enc,c=(s.Utf8,s.Base64),u=n.algo.EvpKDF,f=r.Cipher=a.extend({cfg:o.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,n){this.cfg=this.cfg.extend(n),this._xformMode=t,this._key=e,this.reset()},reset:function(){a.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?_:g}return function(e){return{encrypt:function(n,r,o){return t(r).encrypt(e,n,r,o)},decrypt:function(n,r,o){return t(r).decrypt(e,n,r,o)}}}}()}),l=(r.StreamCipher=f.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),n.mode={}),p=r.BlockCipherMode=o.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),d=l.CBC=function(){function t(t,n,r){var o=this._iv;if(o){i=o;this._iv=e}else var i=this._prevBlock;for(var a=0;a<r;a++)t[n+a]^=i[a]}var n=p.extend();return n.Encryptor=n.extend({processBlock:function(e,n){var r=this._cipher,o=r.blockSize;t.call(this,e,n,o),r.encryptBlock(e,n),this._prevBlock=e.slice(n,n+o)}}),n.Decryptor=n.extend({processBlock:function(e,n){var r=this._cipher,o=r.blockSize,i=e.slice(n,n+o);r.decryptBlock(e,n),t.call(this,e,n,o),this._prevBlock=i}}),n}(),h=(n.pad={}).Pkcs7={pad:function(t,e){for(var n=4*e,r=n-t.sigBytes%n,o=r<<24|r<<16|r<<8|r,a=[],s=0;s<r;s+=4)a.push(o);var c=i.create(a,r);t.concat(c)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},v=(r.BlockCipher=f.extend({cfg:f.cfg.extend({mode:d,padding:h}),reset:function(){f.reset.call(this);var t=this.cfg,e=t.iv,n=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)r=n.createEncryptor;else{var r=n.createDecryptor;this._minBufferSize=1}this._mode&&this._mode.__creator==r?this._mode.init(this,e&&e.words):(this._mode=r.call(n,this,e&&e.words),this._mode.__creator=r)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);e=this._process(!0)}else{var e=this._process(!0);t.unpad(e)}return e},blockSize:4}),r.CipherParams=o.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),y=(n.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,n=t.salt;if(n)r=i.create([1398893684,1701076831]).concat(n).concat(e);else var r=e;return r.toString(c)},parse:function(t){var e=c.parse(t),n=e.words;if(1398893684==n[0]&&1701076831==n[1]){var r=i.create(n.slice(2,4));n.splice(0,4),e.sigBytes-=16}return v.create({ciphertext:e,salt:r})}},g=r.SerializableCipher=o.extend({cfg:o.extend({format:y}),encrypt:function(t,e,n,r){r=this.cfg.extend(r);var o=t.createEncryptor(n,r),i=o.finalize(e),a=o.cfg;return v.create({ciphertext:i,key:n,iv:a.iv,algorithm:t,mode:a.mode,padding:a.padding,blockSize:t.blockSize,formatter:r.format})},decrypt:function(t,e,n,r){return r=this.cfg.extend(r),e=this._parse(e,r.format),t.createDecryptor(n,r).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),m=(n.kdf={}).OpenSSL={execute:function(t,e,n,r){r||(r=i.random(8));var o=u.create({keySize:e+n}).compute(t,r),a=i.create(o.words.slice(e),4*n);return o.sigBytes=4*e,v.create({key:o,iv:a,salt:r})}},_=r.PasswordBasedCipher=g.extend({cfg:g.cfg.extend({kdf:m}),encrypt:function(t,e,n,r){var o=(r=this.cfg.extend(r)).kdf.execute(n,t.keySize,t.ivSize);r.iv=o.iv;var i=g.encrypt.call(this,t,e,o.key,r);return i.mixIn(o),i},decrypt:function(t,e,n,r){r=this.cfg.extend(r),e=this._parse(e,r.format);var o=r.kdf.execute(n,t.keySize,t.ivSize,e.salt);return r.iv=o.iv,g.decrypt.call(this,t,e,o.key,r)}})}()})},9:function(t,e,n){function r(t){if(!(t=t||{}).url)throw new Error("参数不合法");t.callback=t.callback||"callback",t.callbackName=t.callbackName||("jsonp_"+Math.random()).replace(".",""),t.data=t.data||{},t.data[t.callback]=t.callbackName;var e=document.getElementsByTagName("head")[0],n=document.createElement("script");e.appendChild(n),window[t.callbackName]=function(o){clearTimeout(r),e.removeChild(n),window[t.callbackName]=null,t.success&&t.success(o)};var r;t.timeout&&(r=setTimeout(function(){e.removeChild(n),window[t.callbackName]=null,t.fail&&t.fail({message:"超时"})},t.timeout)),n.src=t.url+"?"+function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}(t.data)}function o(t){var e=new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$");return decodeURIComponent(document.cookie.replace(e,"$1"))||""}function i(t){var e=wx.getStorageSync("__cookie_store__");if(e){var n=e.find(function(e){return e.name===t});return n&&n.value}}function a(){return o("P_OINFO").split("|")[0]}function s(){return!!o("S_OINFO")}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};wx.getSetting({success:function(n){n.authSetting["scope.userInfo"]?wx.getUserInfo({withCredentials:!0,success:function(e){var n=e.userInfo,r=e.encryptedData,o=e.iv;t.call(this,n,r,o)},fail:e}):e.call(this)},fail:e})}var u={appid:"wx48a26249513fd3a2",product:"newsapp_163"},f={config:function(t){u.appid=t.appid||u.appid,u.product=t.product||u.product},login:function(t){t=t||window.location.href;var e="https://reg.163.com/outerLogin/oauth2/weixin_connect.do?product="+u.product+"&url="+encodeURIComponent(t),n="https://c.m.163.com/nc/wechat/oauth/response.html?url="+encodeURIComponent(e);window.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid="+u.appid+"&redirect_uri="+encodeURIComponent(n)+"&response_type=code&scope=snsapi_userinfo#wechat_redirect")},logout:function(t){t=t||window.location.href,window.location.replace("https://reg.163.com/Logout.jsp?url="+encodeURIComponent(t))},getUserInfo:function(t){s()?r({url:"https://c.m.163.com/nc/wechat/user/info.html",data:{username:a()},success:function(e){e.openid?(t.call(this,e),window.NTESAntAnalysis&&window.NTESAntAnalysis.sendData({projectid:"NTM-BXR8M5Z5-2",val_nm:"weixinLogin",val_act:"weixinUserInfo",info:e})):t.call(this)},fail:function(){t.call(this)}}):t.call(this)},getPassport:a,checkLogin:s},l={product:"newsapp_weapp",loginUrl:"https://taidu.3g.163.com/news-support/weixin/miniprogram/login",request:!window&&wx.request},p={config:function(t){l.product=t.product||l.product,l.loginUrl=t.loginUrl||l.loginUrl,l.request=t.request||l.request},login:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};wx.login({success:function(n){var r=this,o=n.code;c(function(n,i,a){l.request({url:l.loginUrl,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},data:{product:l.product,code:o,encryptedData:i,iv:a},success:function(o){var i=o.statusCode,a=o.data;200===i&&200===a.code?t.call(r,n):e.call(r,a)},fail:e})},e)},fail:e})},logout:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};l.request({url:"https://reg.163.com/clearcookie.jsp",data:{domain:"163.com"},success:t,fail:e})},getUserInfo:c,getPassport:function(){return i("P_OINFO").split("|")[0]},getOpenId:function(){return i("MINI_PROGRAM_OPENID")},checkLogin:function(){return!!i("S_OINFO")}},d=void 0,h=d=window?f:p;e.a=h},90:function(t,e,n){!function(r,o,i){t.exports=e=o(n(21),n(98),n(99))}(0,function(t){return function(){var e=t,n=e.lib,r=n.Base,o=n.WordArray,i=e.algo,a=i.MD5,s=i.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:a,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var n=this.cfg,r=n.hasher.create(),i=o.create(),a=i.words,s=n.keySize,c=n.iterations;a.length<s;){u&&r.update(u);var u=r.update(t).finalize(e);r.reset();for(var f=1;f<c;f++)u=r.finalize(u),r.reset();i.concat(u)}return i.sigBytes=4*s,i}});e.EvpKDF=function(t,e,n){return s.create(n).compute(t,e)}}(),t.EvpKDF})},92:function(e,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":t(window))&&(r=window)}e.exports=r},95:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},97:function(t,e,n){!function(r,o){t.exports=e=o(n(21))}(0,function(t){return function(e){function n(t,e,n,r,o,i,a){var s=t+(e&n|~e&r)+o+a;return(s<<i|s>>>32-i)+e}function r(t,e,n,r,o,i,a){var s=t+(e&r|n&~r)+o+a;return(s<<i|s>>>32-i)+e}function o(t,e,n,r,o,i,a){var s=t+(e^n^r)+o+a;return(s<<i|s>>>32-i)+e}function i(t,e,n,r,o,i,a){var s=t+(n^(e|~r))+o+a;return(s<<i|s>>>32-i)+e}var a=t,s=a.lib,c=s.WordArray,u=s.Hasher,f=a.algo,l=[];!function(){for(var t=0;t<64;t++)l[t]=4294967296*e.abs(e.sin(t+1))|0}();var p=f.MD5=u.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var a=0;a<16;a++){var s=e+a,c=t[s];t[s]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var u=this._hash.words,f=t[e+0],p=t[e+1],d=t[e+2],h=t[e+3],v=t[e+4],y=t[e+5],g=t[e+6],m=t[e+7],_=t[e+8],b=t[e+9],w=t[e+10],x=t[e+11],k=t[e+12],O=t[e+13],A=t[e+14],S=t[e+15],$=u[0],C=u[1],j=u[2],E=u[3];C=i(C=i(C=i(C=i(C=o(C=o(C=o(C=o(C=r(C=r(C=r(C=r(C=n(C=n(C=n(C=n(C,j=n(j,E=n(E,$=n($,C,j,E,f,7,l[0]),C,j,p,12,l[1]),$,C,d,17,l[2]),E,$,h,22,l[3]),j=n(j,E=n(E,$=n($,C,j,E,v,7,l[4]),C,j,y,12,l[5]),$,C,g,17,l[6]),E,$,m,22,l[7]),j=n(j,E=n(E,$=n($,C,j,E,_,7,l[8]),C,j,b,12,l[9]),$,C,w,17,l[10]),E,$,x,22,l[11]),j=n(j,E=n(E,$=n($,C,j,E,k,7,l[12]),C,j,O,12,l[13]),$,C,A,17,l[14]),E,$,S,22,l[15]),j=r(j,E=r(E,$=r($,C,j,E,p,5,l[16]),C,j,g,9,l[17]),$,C,x,14,l[18]),E,$,f,20,l[19]),j=r(j,E=r(E,$=r($,C,j,E,y,5,l[20]),C,j,w,9,l[21]),$,C,S,14,l[22]),E,$,v,20,l[23]),j=r(j,E=r(E,$=r($,C,j,E,b,5,l[24]),C,j,A,9,l[25]),$,C,h,14,l[26]),E,$,_,20,l[27]),j=r(j,E=r(E,$=r($,C,j,E,O,5,l[28]),C,j,d,9,l[29]),$,C,m,14,l[30]),E,$,k,20,l[31]),j=o(j,E=o(E,$=o($,C,j,E,y,4,l[32]),C,j,_,11,l[33]),$,C,x,16,l[34]),E,$,A,23,l[35]),j=o(j,E=o(E,$=o($,C,j,E,p,4,l[36]),C,j,v,11,l[37]),$,C,m,16,l[38]),E,$,w,23,l[39]),j=o(j,E=o(E,$=o($,C,j,E,O,4,l[40]),C,j,f,11,l[41]),$,C,h,16,l[42]),E,$,g,23,l[43]),j=o(j,E=o(E,$=o($,C,j,E,b,4,l[44]),C,j,k,11,l[45]),$,C,S,16,l[46]),E,$,d,23,l[47]),j=i(j,E=i(E,$=i($,C,j,E,f,6,l[48]),C,j,m,10,l[49]),$,C,A,15,l[50]),E,$,y,21,l[51]),j=i(j,E=i(E,$=i($,C,j,E,k,6,l[52]),C,j,h,10,l[53]),$,C,w,15,l[54]),E,$,p,21,l[55]),j=i(j,E=i(E,$=i($,C,j,E,_,6,l[56]),C,j,S,10,l[57]),$,C,g,15,l[58]),E,$,O,21,l[59]),j=i(j,E=i(E,$=i($,C,j,E,v,6,l[60]),C,j,x,10,l[61]),$,C,d,15,l[62]),E,$,b,21,l[63]),u[0]=u[0]+$|0,u[1]=u[1]+C|0,u[2]=u[2]+j|0,u[3]=u[3]+E|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,o=8*t.sigBytes;n[o>>>5]|=128<<24-o%32;var i=e.floor(r/4294967296),a=r;n[15+(o+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),n[14+(o+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),t.sigBytes=4*(n.length+1),this._process();for(var s=this._hash,c=s.words,u=0;u<4;u++){var f=c[u];c[u]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return s},clone:function(){var t=u.clone.call(this);return t._hash=this._hash.clone(),t}});a.MD5=u._createHelper(p),a.HmacMD5=u._createHmacHelper(p)}(Math),t.MD5})},98:function(t,e,n){!function(r,o){t.exports=e=o(n(21))}(0,function(t){return function(){var e=t,n=e.lib,r=n.WordArray,o=n.Hasher,i=[],a=e.algo.SHA1=o.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var n=this._hash.words,r=n[0],o=n[1],a=n[2],s=n[3],c=n[4],u=0;u<80;u++){if(u<16)i[u]=0|t[e+u];else{var f=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=f<<1|f>>>31}var l=(r<<5|r>>>27)+c+i[u];l+=u<20?1518500249+(o&a|~o&s):u<40?1859775393+(o^a^s):u<60?(o&a|o&s|a&s)-1894007588:(o^a^s)-899497514,c=s,s=a,a=o<<30|o>>>2,o=r,r=l}n[0]=n[0]+r|0,n[1]=n[1]+o|0,n[2]=n[2]+a|0,n[3]=n[3]+s|0,n[4]=n[4]+c|0},_doFinalize:function(){var t=this._data,e=t.words,n=8*this._nDataBytes,r=8*t.sigBytes;return e[r>>>5]|=128<<24-r%32,e[14+(r+64>>>9<<4)]=Math.floor(n/4294967296),e[15+(r+64>>>9<<4)]=n,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA1=o._createHelper(a),e.HmacSHA1=o._createHmacHelper(a)}(),t.SHA1})},99:function(t,e,n){!function(r,o){t.exports=e=o(n(21))}(0,function(t){!function(){var e=t,n=e.lib.Base,r=e.enc.Utf8;e.algo.HMAC=n.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=r.parse(e));var n=t.blockSize,o=4*n;e.sigBytes>o&&(e=t.finalize(e)),e.clamp();for(var i=this._oKey=e.clone(),a=this._iKey=e.clone(),s=i.words,c=a.words,u=0;u<n;u++)s[u]^=1549556828,c[u]^=909522486;i.sigBytes=a.sigBytes=o,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,n=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(n))}})}()})}}); 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("9FA2E4459104369CF9C48C4278C17C83.js"),global.webpackJsonp([7],{16:function(t,n,e){function a(){var t=wx.getStorageSync("deviceId");if(!t){var n=s.a.parse((new Date).getTime().toString()+Math.random().toString());t=u.a.stringify(n),wx.setStorageSync("deviceId",t)}return t}var o=e(29),r=e.n(o),i=e(30),s=e.n(i),c=e(26),u=e.n(c),l=e(42),p=e.n(l),d=e(43),h=e.n(d),f=e(44),g=e.n(f),v=a(),w=function(){var t=wx.getStorageSync("AESDeviceId");if(!t){t=(new Date).getTime().toString()+Math.random().toString();var n=s.a.parse("neteasenewsboard");t=(t=p.a.encrypt(t,n,{mode:h.a,padding:g.a}).toString()).replace(/\+/g,"%2B"),wx.setStorageSync("AESDeviceId",t)}return t}(),m={request:function(t,n,e){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(a||o){var r=o?w:v;-1===t.indexOf("?")?t+="?devId="+r:"?"===t.slice(-1)?t+="devId="+r:t+="&devId="+r}o?wx.requestWithCookie({url:t,success:function(t){n&&n(t)},fail:function(){e&&e()}}):wx.requestWithCookie({url:t,header:{"content-type":"application/json","User-D":v,"User-DID":v},success:function(t){n&&n(t)},fail:function(){e&&e()}})},timeFormat:function(t){var n=Math.floor(t/60),e=t%60;return n=n<10?"0"+n:n,e=e<10?"0"+e:e,n+":"+e},getDeviceId:a,optImage:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:750,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2147483647,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75;return t?r()(t,n,e,a):"static.ws.126.net/163/frontend/newsapp-wxmp/static/bg-ntease.png"}};n.a=m},2:function(t,n){function e(t){wx.getNetworkType({success:function(n){t(n.networkType)}})}function a(){var t=wx.getSystemInfoSync();return{adt:encodeURIComponent(t.model),scl:t.pixelRatio,scr:t.windowWidth+"x"+t.windowHeight,lg:t.language,fl:t.version,jv:encodeURIComponent(t.system),tz:encodeURIComponent(t.platform)}}function o(){try{return wx.getStorageSync(h.prefix+"auid")}catch(t){}}function r(){try{var t=c();return wx.setStorageSync(h.prefix+"auid",t),t}catch(t){}}function i(){try{return wx.getStorageSync(h.prefix+"ssid")}catch(t){}}function s(){try{var t="s"+c();return wx.setStorageSync(h.prefix+"ssid",t),t}catch(t){}}function c(t){for(var n=[0,1,2,3,4,5,6,7,8,9],e=10;1<e;e--){var a=Math.floor(10*Math.random()),o=n[a];n[a]=n[e-1],n[e-1]=o}for(e=a=0;5>e;e++)a=10*a+n[e];return(t||"")+(a+"")+ +new Date}function u(){try{var t=getCurrentPages(),n="/";return 0<t.length&&(n=t.pop().__route__),n}catch(t){console.log("get current page path error:"+t)}}function l(){var t={dm:"wechat.apps.xx",url:u(),pvi:"",si:"",ty:0};return t.pvi=function(){var n=o();return n||(n=r(),t.ty=1),n}(),t.si=function(){var t=i();return t||(t=s()),t}(),t}function p(){var t=a();return e(function(t){try{wx.setStorageSync(h.prefix+"ntdata",t)}catch(t){}}),t.ct=wx.getStorageSync(h.prefix+"ntdata")||"4g",t}function d(){var t,n=f.Data.userInfo,e=[];for(t in n)n.hasOwnProperty(t)&&e.push(t+"="+n[t]);return n=e.join(";"),{r2:h.app_id,r4:"wx",ext:"v="+h.version+(null!==n&&""!==n?";ui="+encodeURIComponent(n):"")}}var h={app_id:"",event_id:"",api_base:"https://pingtas.qq.com/pingd",prefix:"_mta_",version:"1.3.5",stat_share_app:!1,stat_pull_down_fresh:!1,stat_reach_bottom:!1},f={App:{init:function(t){"appID"in t&&(h.app_id=t.appID),"eventID"in t&&(h.event_id=t.eventID),"statShareApp"in t&&(h.stat_share_app=t.statShareApp),"statPullDownFresh"in t&&(h.stat_pull_down_fresh=t.statPullDownFresh),"statReachBottom"in t&&(h.stat_reach_bottom=t.statReachBottom),s(),"lauchOpts"in t&&(f.Data.lanchInfo=t.lauchOpts,f.Data.lanchInfo.landing=1)}},Page:{init:function(){var t=getCurrentPages()[getCurrentPages().length-1];t.onShow&&function(){var n=t.onShow;t.onShow=function(){f.Page.stat(),n.call(this,arguments)}}(),h.stat_pull_down_fresh&&t.onPullDownRefresh&&function(){var n=t.onPullDownRefresh;t.onPullDownRefresh=function(){f.Event.stat(h.prefix+"pulldownfresh",{url:t.__route__}),n.call(this,arguments)}}(),h.stat_reach_bottom&&t.onReachBottom&&function(){var n=t.onReachBottom;t.onReachBottom=function(){f.Event.stat(h.prefix+"reachbottom",{url:t.__route__}),n.call(this,arguments)}}(),h.stat_share_app&&t.onShareAppMessage&&function(){var n=t.onShareAppMessage;t.onShareAppMessage=function(){return f.Event.stat(h.prefix+"shareapp",{url:t.__route__}),n.call(this,arguments)}}()},stat:function(){if(""!=h.app_id){var t=[],n=d(),e=[l(),n,p()];f.Data.lanchInfo&&(e.push({ht:f.Data.lanchInfo.scene,rdm:"/",rurl:f.Data.lanchInfo.path}),f.Data.lanchInfo.query&&f.Data.lanchInfo.query._mta_ref_id&&e.push({rarg:f.Data.lanchInfo.query._mta_ref_id}),1==f.Data.lanchInfo.landing&&(n.ext+=";lp=1",f.Data.lanchInfo.landing=0)),e.push({rand:+new Date}),n=0;for(var a=e.length;n<a;n++)for(var o in e[n])e[n].hasOwnProperty(o)&&t.push(o+"="+(void 0===e[n][o]?"":e[n][o]));wx.request({url:h.api_base+"?"+t.join("&").toLowerCase()})}}},Event:{stat:function(t,n){if(""!=h.event_id){var e=[],a=l(),o=d();a.dm="wxapps.click",a.url=t,o.r2=h.event_id;var r,i=void 0===n?{}:n,s=[];for(r in i)i.hasOwnProperty(r)&&s.push(encodeURIComponent(r)+"="+encodeURIComponent(i[r]));for(i=s.join(";"),o.r5=i,i=0,o=(a=[a,o,p(),{rand:+new Date}]).length;i<o;i++)for(var c in a[i])a[i].hasOwnProperty(c)&&e.push(c+"="+(void 0===a[i][c]?"":a[i][c]));wx.request({url:h.api_base+"?"+e.join("&").toLowerCase()})}}},Data:{userInfo:null,lanchInfo:null}};t.exports=f},4:function(t,n,e){n.a=function(t,n){function e(t,n){var e={small:"234x146",normal:"330x2147483647",large:"320x120",articleNormal:s,largeCover:"750x318",littleCover:"375x288"};n?(r=e[n].split("x")[0],i=e[n].split("x")[1]):(r=320,i=260);var a=void 0,o=t?t.split("*")[0]:r,c=void 0,u=t?t.split("*")[1]:i;return o/u>r/i?(a=r,c=Math.round(r/o*u)):o/u<r/i?(a=r,c=Math.round(r/o*u)):(c=i,a=r),a+"x"+c}t&&""!=t.src||(t={src:"http://static.ws.126.net/utf8/3g/touch/images/share-logo.png"});var a=["s.cimg.163.com","nimg.ws.126.net"],o=/(\.jpg)|(\.jpeg)|(\.webp)|(\.png)/i,r=void 0,i=void 0,s="346x260";wx.getSystemInfo({success:function(t){var n=t.windowWidth;s=n-30*n/375+"x260"}});var c=void 0,u=t.imgsrc?t.imgsrc.replace(/\s/g,""):t.src,l=t.pixel,p=e(l,n).split("x"),d=u.match(o)?u.match(o)[0].replace(".",""):"jpg",h=a.indexOf(u.match(/http:\/\/(.*?)\//)[1]),f="articleNormal"==n?"640x10000":e(l,n);return c=-1==h&&d?"http://nimg.ws.126.net/?url="+u+"&thumbnail="+f+"&quality=95&type="+d:u,{alt:t.alt,src:c,width:p[0],height:p[1]}}},6:function(t,n,e){var a=e(3),o=e.n(a),r=e(25);o.a.use(r.a),n.a={}},7:function(t,n,e){var a=e(3),o=e.n(a),r=e(1),i=e(8),s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};o.a.use(r.a);var c=new r.a.Store(s({strict:!0},i.a));n.a=c},8:function(t,n,e){function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}var r,i=e(9),s=e(4),c={state:{showOpenNewsApp:!1,deviceInfo:{isIOS:!1,isIphoneX:!1,hasFringe:!1,statusBar24:!0,windowHeight:0,windowWidth:0},user:{isLogin:"",provinceChinese:"北京",cityChinese:"北京",lastVisitTime:0},needRefreshCollection:!1,showDownloadModal:!1,showShareModal:!1,navLinkData:{toutiao:[],yule:[],tiyu:[],bendi:[],caijin:[],keji:[],fangchan:[],dujia:[],lishi:[],xiangguantuijian:[]},markReadDocIds:[]},mutations:(r={},a(r,"SHOW_OPEN_NEWS_APP",function(t,n){var e=[1036,1069];t.showOpenNewsApp=-1!==e.indexOf(n.scene)}),a(r,"DEVICE_INFO",function(t,n){t.deviceInfo=n.data}),a(r,"USER",function(t,n){t.user=Object.assign(t.user,n.user),console.log(t.user)}),a(r,"REFRESH_COLLECTION",function(t,n){t.needRefreshCollection=n.needRefreshCollection}),a(r,"MODAL_DOWNLOAD",function(t,n){t.showDownloadModal=n.showDownloadModal}),a(r,"MODAL_SHARE",function(t,n){t.showShareModal=n.showShareModal}),a(r,"NAVLINK_CLASS",function(t,n){t.navLinkData=n.data}),a(r,"MARK_READ",function(t,n){"String"===n.type?!t.markReadDocIds.indexOf(n.data)>-1&&(t.markReadDocIds=[].concat(o(t.markReadDocIds),[n.data]).slice(-200)):t.markReadDocIds=[].concat(o(new Set([].concat(o(t.markReadDocIds),o(n.data))))).slice(-200)}),r),actions:{initLoginData:function(t){var n=t.commit;return new Promise(function(t){i.a.login(function(t){console.log("login success "),n({type:"USER",user:{isLogin:!0,avatarUrl:t.avatarUrl,nickName:t.nickName}})},function(){n({type:"USER",user:{isLogin:!1}}),t(),console.log("login failure")})})},getDeviceInfo:function(t){var n=t.commit,e=t.state;return new Promise(function(t){var a=wx.getSystemInfoSync();e.deviceInfo.windowHeight===a.windowHeight?t():(console.log("设备信息"),console.log(a)),n(/IOS/gi.test(a.system)?{type:"DEVICE_INFO",data:{isIOS:!0,isIphoneX:/iPhone X/gi.test(a.model),windowHeight:a.windowHeight,windowWidth:a.windowWidth,hasFringe:a.statusBarHeight>24,statusBar24:24===a.statusBarHeight}}:{type:"DEVICE_INFO",data:{isIOS:!1,windowHeight:a.windowHeight,windowWidth:a.windowWidth,hasFringe:a.statusBarHeight>26,statusBar24:a.statusBarHeight>=22&&a.statusBarHeight<=26}}),t()})},getNavLinkData:function(t){var n=t.commit;wx.requestWithCookie({url:"https://c.m.163.com/ug/api/happynuts/app/advert/app-info",success:function(t){var e=t.data.data;for(var a in e)e[a].map(function(t){t.appId=t.appId?t.appId:"wx6664983624b1a9aa",t.url=t.url,t.imgsrc=Object(s.a)({src:t.imgSrc},"normal").src,t.type="nav_link"});n({type:"NAVLINK_CLASS",data:e})}})}}};n.a=c},91:function(t,n,e){Object.defineProperty(n,"__esModule",{value:!0});var a=e(24),o=(e.n(a),e(6)),r=e(7),i=e(3),s=e.n(i),c=e(93),u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};new s.a(u({router:o.a,store:r.a},c.a)).$mount()},93:function(t,n,e){var a=e(96),o=!1,r=e(0)(a.a,null,function(t){o||e(94)},null,null);r.options.__file="src/App.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.a=r.exports},94:function(t,n){},96:function(t,n,e){var a=e(1),o=e(9),r=e(2),i=e.n(r),s=(e(16),Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t});n.a={mpType:"app",computed:s({},Object(a.d)(["deviceInfo","markReadDocIds"])),created:function(){o.a.config({product:"newsapp_weapp",request:wx.requestWithCookie}),this.initLoginData().then(function(){console.log("app init login state end")})},onLaunch:function(t){i.a.App.init({appID:"500623997",eventID:"500623999",lauchOpts:t,statPullDownFresh:!0,statShareApp:!0,statReachBottom:!0})},onShow:function(t){if(this.SHOW_OPEN_NEWS_APP({scene:t.scene}),this.getDeviceInfo().then(function(){}),!this.markReadDocIds.length){var n=wx.getStorageSync("markReadDocIds");this.MARK_READ({type:"Array",data:n})}},onHide:function(){wx.setStorage({key:"markReadDocIds",data:this.markReadDocIds})},methods:s({},Object(a.c)(["SHOW_OPEN_NEWS_APP","USER","MARK_READ"]),Object(a.b)(["initLoginData","getNavLinkData","getDeviceInfo"]))}}},[91]); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/Home';__wxRouteBegin = true; 	define("pages/Home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};require("../9FA2E4459104369CF9C48C4278C17C83.js"),global.webpackJsonp([3],[,,function(t,e){function n(t){wx.getNetworkType({success:function(e){t(e.networkType)}})}function i(){var t=wx.getSystemInfoSync();return{adt:encodeURIComponent(t.model),scl:t.pixelRatio,scr:t.windowWidth+"x"+t.windowHeight,lg:t.language,fl:t.version,jv:encodeURIComponent(t.system),tz:encodeURIComponent(t.platform)}}function s(){try{return wx.getStorageSync(d.prefix+"auid")}catch(t){}}function a(){try{var t=c();return wx.setStorageSync(d.prefix+"auid",t),t}catch(t){}}function o(){try{return wx.getStorageSync(d.prefix+"ssid")}catch(t){}}function r(){try{var t="s"+c();return wx.setStorageSync(d.prefix+"ssid",t),t}catch(t){}}function c(t){for(var e=[0,1,2,3,4,5,6,7,8,9],n=10;1<n;n--){var i=Math.floor(10*Math.random()),s=e[i];e[i]=e[n-1],e[n-1]=s}for(n=i=0;5>n;n++)i=10*i+e[n];return(t||"")+(i+"")+ +new Date}function l(){try{var t=getCurrentPages(),e="/";return 0<t.length&&(e=t.pop().__route__),e}catch(t){console.log("get current page path error:"+t)}}function u(){var t={dm:"wechat.apps.xx",url:l(),pvi:"",si:"",ty:0};return t.pvi=function(){var e=s();return e||(e=a(),t.ty=1),e}(),t.si=function(){var t=o();return t||(t=r()),t}(),t}function p(){var t=i();return n(function(t){try{wx.setStorageSync(d.prefix+"ntdata",t)}catch(t){}}),t.ct=wx.getStorageSync(d.prefix+"ntdata")||"4g",t}function h(){var t,e=f.Data.userInfo,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t+"="+e[t]);return e=n.join(";"),{r2:d.app_id,r4:"wx",ext:"v="+d.version+(null!==e&&""!==e?";ui="+encodeURIComponent(e):"")}}var d={app_id:"",event_id:"",api_base:"https://pingtas.qq.com/pingd",prefix:"_mta_",version:"1.3.5",stat_share_app:!1,stat_pull_down_fresh:!1,stat_reach_bottom:!1},f={App:{init:function(t){"appID"in t&&(d.app_id=t.appID),"eventID"in t&&(d.event_id=t.eventID),"statShareApp"in t&&(d.stat_share_app=t.statShareApp),"statPullDownFresh"in t&&(d.stat_pull_down_fresh=t.statPullDownFresh),"statReachBottom"in t&&(d.stat_reach_bottom=t.statReachBottom),r(),"lauchOpts"in t&&(f.Data.lanchInfo=t.lauchOpts,f.Data.lanchInfo.landing=1)}},Page:{init:function(){var t=getCurrentPages()[getCurrentPages().length-1];t.onShow&&function(){var e=t.onShow;t.onShow=function(){f.Page.stat(),e.call(this,arguments)}}(),d.stat_pull_down_fresh&&t.onPullDownRefresh&&function(){var e=t.onPullDownRefresh;t.onPullDownRefresh=function(){f.Event.stat(d.prefix+"pulldownfresh",{url:t.__route__}),e.call(this,arguments)}}(),d.stat_reach_bottom&&t.onReachBottom&&function(){var e=t.onReachBottom;t.onReachBottom=function(){f.Event.stat(d.prefix+"reachbottom",{url:t.__route__}),e.call(this,arguments)}}(),d.stat_share_app&&t.onShareAppMessage&&function(){var e=t.onShareAppMessage;t.onShareAppMessage=function(){return f.Event.stat(d.prefix+"shareapp",{url:t.__route__}),e.call(this,arguments)}}()},stat:function(){if(""!=d.app_id){var t=[],e=h(),n=[u(),e,p()];f.Data.lanchInfo&&(n.push({ht:f.Data.lanchInfo.scene,rdm:"/",rurl:f.Data.lanchInfo.path}),f.Data.lanchInfo.query&&f.Data.lanchInfo.query._mta_ref_id&&n.push({rarg:f.Data.lanchInfo.query._mta_ref_id}),1==f.Data.lanchInfo.landing&&(e.ext+=";lp=1",f.Data.lanchInfo.landing=0)),n.push({rand:+new Date}),e=0;for(var i=n.length;e<i;e++)for(var s in n[e])n[e].hasOwnProperty(s)&&t.push(s+"="+(void 0===n[e][s]?"":n[e][s]));wx.request({url:d.api_base+"?"+t.join("&").toLowerCase()})}}},Event:{stat:function(t,e){if(""!=d.event_id){var n=[],i=u(),s=h();i.dm="wxapps.click",i.url=t,s.r2=d.event_id;var a,o=void 0===e?{}:e,r=[];for(a in o)o.hasOwnProperty(a)&&r.push(encodeURIComponent(a)+"="+encodeURIComponent(o[a]));for(o=r.join(";"),s.r5=o,o=0,s=(i=[i,s,p(),{rand:+new Date}]).length;o<s;o++)for(var c in i[o])i[o].hasOwnProperty(c)&&n.push(c+"="+(void 0===i[o][c]?"":i[o][c]));wx.request({url:d.api_base+"?"+n.join("&").toLowerCase()})}}},Data:{userInfo:null,lanchInfo:null}};t.exports=f},,function(t,e,n){e.a=function(t,e){function n(t,e){var n={small:"234x146",normal:"330x2147483647",large:"320x120",articleNormal:r,largeCover:"750x318",littleCover:"375x288"};e?(a=n[e].split("x")[0],o=n[e].split("x")[1]):(a=320,o=260);var i=void 0,s=t?t.split("*")[0]:a,c=void 0,l=t?t.split("*")[1]:o;return s/l>a/o?(i=a,c=Math.round(a/s*l)):s/l<a/o?(i=a,c=Math.round(a/s*l)):(c=o,i=a),i+"x"+c}t&&""!=t.src||(t={src:"http://static.ws.126.net/utf8/3g/touch/images/share-logo.png"});var i=["s.cimg.163.com","nimg.ws.126.net"],s=/(\.jpg)|(\.jpeg)|(\.webp)|(\.png)/i,a=void 0,o=void 0,r="346x260";wx.getSystemInfo({success:function(t){var e=t.windowWidth;r=e-30*e/375+"x260"}});var c=void 0,l=t.imgsrc?t.imgsrc.replace(/\s/g,""):t.src,u=t.pixel,p=n(u,e).split("x"),h=l.match(s)?l.match(s)[0].replace(".",""):"jpg",d=i.indexOf(l.match(/http:\/\/(.*?)\//)[1]),f="articleNormal"==e?"640x10000":n(u,e);return c=-1==d&&h?"http://nimg.ws.126.net/?url="+l+"&thumbnail="+f+"&quality=95&type="+h:l,{alt:t.alt,src:c,width:p[0],height:p[1]}}},function(t,e,n){var i=n(18),s=n(19),a=!1,o=n(0)(i.a,s.a,function(t){a||n(17)},"data-v-9e0ce8de",null);o.options.__file="src/components/base/LoginBtn.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] LoginBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=o.exports},function(t,e,n){var i=n(3),s=n.n(i),a=n(25);s.a.use(a.a),e.a={}},function(t,e,n){var i=n(3),s=n.n(i),a=n(1),o=n(8),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};s.a.use(a.a);var c=new a.a.Store(r({strict:!0},o.a));e.a=c},function(t,e,n){function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var a,o=n(9),r=n(4),c={state:{showOpenNewsApp:!1,deviceInfo:{isIOS:!1,isIphoneX:!1,hasFringe:!1,statusBar24:!0,windowHeight:0,windowWidth:0},user:{isLogin:"",provinceChinese:"北京",cityChinese:"北京",lastVisitTime:0},needRefreshCollection:!1,showDownloadModal:!1,showShareModal:!1,navLinkData:{toutiao:[],yule:[],tiyu:[],bendi:[],caijin:[],keji:[],fangchan:[],dujia:[],lishi:[],xiangguantuijian:[]},markReadDocIds:[]},mutations:(a={},i(a,"SHOW_OPEN_NEWS_APP",function(t,e){var n=[1036,1069];t.showOpenNewsApp=-1!==n.indexOf(e.scene)}),i(a,"DEVICE_INFO",function(t,e){t.deviceInfo=e.data}),i(a,"USER",function(t,e){t.user=Object.assign(t.user,e.user),console.log(t.user)}),i(a,"REFRESH_COLLECTION",function(t,e){t.needRefreshCollection=e.needRefreshCollection}),i(a,"MODAL_DOWNLOAD",function(t,e){t.showDownloadModal=e.showDownloadModal}),i(a,"MODAL_SHARE",function(t,e){t.showShareModal=e.showShareModal}),i(a,"NAVLINK_CLASS",function(t,e){t.navLinkData=e.data}),i(a,"MARK_READ",function(t,e){"String"===e.type?!t.markReadDocIds.indexOf(e.data)>-1&&(t.markReadDocIds=[].concat(s(t.markReadDocIds),[e.data]).slice(-200)):t.markReadDocIds=[].concat(s(new Set([].concat(s(t.markReadDocIds),s(e.data))))).slice(-200)}),a),actions:{initLoginData:function(t){var e=t.commit;return new Promise(function(t){o.a.login(function(t){console.log("login success "),e({type:"USER",user:{isLogin:!0,avatarUrl:t.avatarUrl,nickName:t.nickName}})},function(){e({type:"USER",user:{isLogin:!1}}),t(),console.log("login failure")})})},getDeviceInfo:function(t){var e=t.commit,n=t.state;return new Promise(function(t){var i=wx.getSystemInfoSync();n.deviceInfo.windowHeight===i.windowHeight?t():(console.log("设备信息"),console.log(i)),e(/IOS/gi.test(i.system)?{type:"DEVICE_INFO",data:{isIOS:!0,isIphoneX:/iPhone X/gi.test(i.model),windowHeight:i.windowHeight,windowWidth:i.windowWidth,hasFringe:i.statusBarHeight>24,statusBar24:24===i.statusBarHeight}}:{type:"DEVICE_INFO",data:{isIOS:!1,windowHeight:i.windowHeight,windowWidth:i.windowWidth,hasFringe:i.statusBarHeight>26,statusBar24:i.statusBarHeight>=22&&i.statusBarHeight<=26}}),t()})},getNavLinkData:function(t){var e=t.commit;wx.requestWithCookie({url:"https://c.m.163.com/ug/api/happynuts/app/advert/app-info",success:function(t){var n=t.data.data;for(var i in n)n[i].map(function(t){t.appId=t.appId?t.appId:"wx6664983624b1a9aa",t.url=t.url,t.imgsrc=Object(r.a)({src:t.imgSrc},"normal").src,t.type="nav_link"});e({type:"NAVLINK_CLASS",data:n})}})}}};e.a=c},,function(t,e){t.exports={tabs:[{name:"热榜",tid:"hotpost"},{name:"头条",tid:"toutiao"},{name:"娱乐",url:"",tid:"T1348648517839"},{name:"体育",url:"",tid:"T1348649079062"},{name:"本地",url:""},{name:"科技",tid:"T1348649580692",url:""},{name:"财经",tid:"T1348648756099",url:""},{name:"独家",type:"common",tid:"T1370583240249",url:""},{name:"历史",type:"common",tid:"T1368497029546"},{name:"军事",type:"common",tid:"T1348648141035",url:""},{name:"汽车",type:"common",tid:"T1348654060988",url:""},{name:"房产",type:"common",tid:"T1348654085632",url:""},{name:"数码",type:"common",tid:"T1348649776727",url:""}],api:{article:"https://c.m.163.com/nc/article/{{docid}}/full.html",video:"https://c.m.163.com/nc/video/detail/{{id}}.html",photo:"https://c.m.163.com/photo/api/set/{{cid}}/{{sid}}.json",commonlist:"https://c.m.163.com/nc/article/list/{{tid}}/{{start}}-10.html",dynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/headline-list",channeldynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/normal-list",localList:"https://c.m.163.com/dlist/article/local/dynamic",video_list:"https://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&subtab={{subtab}}&size={{pageSize}}&offset={{offset}}",video_related_list:"https://c.m.163.com/releate/video/dynamic?videoid={{id}}&appname=xiaochengxu",favorite_list:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite?pageNo={{pageNo}}",favorite_add:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/add",favorite_cancel:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/cancel",favorite_check:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/check",hot_postlist:"https://taidu.3g.163.com/news-support/weixin/miniprogram/comment/hotList"},allowType:["video","article","doc"],topNewsTag:"S",topNewsTag2:"S+"}},function(t,e,n){e.a=function(t){try{var e=new Date(t.replace(/-/g,"/")),n=new Date,o=n-e;if(o<i)return"刚刚";if(o<s)return Math.floor(o/i)+"分钟前";if(o<a)return Math.floor(o/s)+"小时前";var r=t.split(" "),c=/(\S+):\d{2}/.exec(r[1])[1],l=n-new Date(r[0]);return l<2*a?"昨天"+c:l<3*a?"前天"+c:e.getFullYear()===n.getFullYear()?/-(\S+)/.exec(r[0])[1]:r[0]}catch(e){return t}};var i=6e4,s=36e5,a=864e5},function(t,e,n){var i=n(14),s=n(15),a=!1,o=n(0)(i.a,s.a,function(t){a||n(13)},null,null);o.options.__file="src/components/PageError.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] PageError.vue: functional components are not supported with templates, they should use render functions."),e.a=o.exports},function(t,e){},function(t,e,n){e.a={name:"page-error",props:{type:String,clickfun:Function,clickbtn:Boolean},methods:{back:function(){getCurrentPages().length<2?wx.switchTab({url:"/pages/Home"}):wx.navigateBack()}}}},function(t,e,n){var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-error"},["dataError"===t.type?n("block",[n("div",{staticClass:"empty"}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("此页面内容没有了")]),t._v(" "),n("div",{staticClass:"error-btn",attrs:{eventid:"0"},on:{click:t.back}},[t._v("返回")])]):t._e(),t._v(" "),"emptyComment"===t.type?n("block",[n("div",{staticClass:"empty-comment"}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("暂无跟贴")]),t._v(" "),n("div",{staticClass:"error-btn",attrs:{eventid:"1"},on:{click:t.back}},[t._v("返回")])]):"netError"===t.type?n("block",[n("image",{staticClass:"net-error",attrs:{src:"/static/net-error.png"}}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("你的网络出现问题啦")]),t._v(" "),t.clickbtn?n("block",[n("div",{staticClass:"error-btn",attrs:{eventid:"2"},on:{click:t.clickfun}},[t._v("重新加载")])]):t._e()],1):"netLoading"===t.type?n("block",[n("div",{staticClass:"loading"},[n("div",{staticClass:"loader-spin center"},[n("span")]),t._v(" "),n("image",{staticClass:"loading-img",attrs:{src:"/static/bg-ntease.png"}})])]):t._e()],1)},s=[];i._withStripped=!0;var a={render:i,staticRenderFns:s};e.a=a},function(t,e,n){function i(){var t=wx.getStorageSync("deviceId");if(!t){var e=r.a.parse((new Date).getTime().toString()+Math.random().toString());t=l.a.stringify(e),wx.setStorageSync("deviceId",t)}return t}var s=n(29),a=n.n(s),o=n(30),r=n.n(o),c=n(26),l=n.n(c),u=n(42),p=n.n(u),h=n(43),d=n.n(h),f=n(44),m=n.n(f),v=i(),g=function(){var t=wx.getStorageSync("AESDeviceId");if(!t){t=(new Date).getTime().toString()+Math.random().toString();var e=r.a.parse("neteasenewsboard");t=(t=p.a.encrypt(t,e,{mode:d.a,padding:m.a}).toString()).replace(/\+/g,"%2B"),wx.setStorageSync("AESDeviceId",t)}return t}(),_={request:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(i||s){var a=s?g:v;-1===t.indexOf("?")?t+="?devId="+a:"?"===t.slice(-1)?t+="devId="+a:t+="&devId="+a}s?wx.requestWithCookie({url:t,success:function(t){e&&e(t)},fail:function(){n&&n()}}):wx.requestWithCookie({url:t,header:{"content-type":"application/json","User-D":v,"User-DID":v},success:function(t){e&&e(t)},fail:function(){n&&n()}})},timeFormat:function(t){var e=Math.floor(t/60),n=t%60;return e=e<10?"0"+e:e,n=n<10?"0"+n:n,e+":"+n},getDeviceId:i,optImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:750,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2147483647,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75;return t?a()(t,e,n,i):"static.ws.126.net/163/frontend/newsapp-wxmp/static/bg-ntease.png"}};e.a=_},function(t,e){},function(t,e,n){var i=n(1),s=n(9),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};e.a={name:"login-btn",props:["callback","formType"],computed:a({},Object(i.d)(["user"]),{isLogin:function(){return this.user.isLogin}}),methods:a({},Object(i.c)(["USER"]),{doLogin:function(t){var e=this;this.isLogin?(console.log("已登录"),!this.user.nickname&&this.USER({user:t.target.userInfo}),this.callback&&this.callback()):t.target.userInfo?(wx.showLoading(),console.log("授权"),s.a.login(function(){console.log("login success"),e.USER({user:a({},t.target.userInfo,{isLogin:!0})}),wx.hideLoading(),e.callback&&e.callback()},function(){console.log("login failed"),e.USER({user:a({},t.target.userInfo,{isLogin:!1})}),wx.hideLoading(),e.callback&&e.callback()})):console.log("拒绝授权")}})}},function(t,e,n){var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"login-btn",attrs:{"open-type":"getUserInfo","hover-class":"none",formType:t.formType,eventid:"0"},on:{getuserinfo:t.doLogin}},[t._t("default",null,{mpcomid:"0"})],2)},s=[];i._withStripped=!0;var a={render:i,staticRenderFns:s};e.a=a},,,,,,,,,,,,function(t,e,n){var i={"微笑":"https://static.ws.126.net/3g/emoticon/1000_weixiao.png","可怜":"https://static.ws.126.net/3g/emoticon/1000_kelian.png","被黑":"https://static.ws.126.net/3g/emoticon/1000_beihei.png","色色":"https://static.ws.126.net/3g/emoticon/1000_sese.png","羞羞":"https://static.ws.126.net/3g/emoticon/1000_xiuxiu.png","窃笑":"https://static.ws.126.net/3g/emoticon/1000_qiexiao.png","惊讶":"https://static.ws.126.net/3g/emoticon/1000_jingxia.png","疑问":"https://static.ws.126.net/3g/emoticon/1000_yiwen.png","疲惫":"https://static.ws.126.net/3g/emoticon/1000_pibei.png","喷水":"https://static.ws.126.net/3g/emoticon/1000_penshui.png","狗":"https://static.ws.126.net/3g/emoticon/1000_gou.png","鄙视":"https://static.ws.126.net/3g/emoticon/1000_bishi.png","挨揍":"https://static.ws.126.net/3g/emoticon/1000_aizou.png","骷髅":"https://static.ws.126.net/3g/emoticon/1000_kulou.png","不屑":"https://static.ws.126.net/3g/emoticon/1000_buxie.png","大笑":"https://static.ws.126.net/3g/emoticon/1000_daxiao.png","晕":"https://static.ws.126.net/3g/emoticon/1000_yun.png","大哭":"https://static.ws.126.net/3g/emoticon/1000_daku.png","暴怒":"https://static.ws.126.net/3g/emoticon/1000_baonu.png","石化":"https://static.ws.126.net/3g/emoticon/1000_shihua.png","鼓掌":"https://static.ws.126.net/3g/emoticon/1000_guzhang.png","抱抱":"https://static.ws.126.net/3g/emoticon/1000_baobao.png","比心":"https://static.ws.126.net/3g/emoticon/1000_bixin.png","污":"https://static.ws.126.net/3g/emoticon/1000_wu.png","老司机":"https://static.ws.126.net/3g/emoticon/1000_laosiji.png","大师":"https://static.ws.126.net/3g/emoticon/1000_dashi.png","二楼":"https://static.ws.126.net/3g/emoticon/1000_erlou.png"};e.a=function(t){return t.replace(/\[(.*?)\]/g,function(t){var e=t.match(/\[(.*)\]/)[1],n=i[e];return n?'<img class="emoji" src="'+n+'" />':t})}},,,,,,,,,,,,,,function(t,e,n){var i=n(47),s=n(48),a=!1,o=n(0)(i.a,s.a,function(t){a||n(46)},"data-v-339946ad",null);o.options.__file="src/components/Subscription.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Subscription.vue: functional components are not supported with templates, they should use render functions."),e.a=o.exports},function(t,e){},function(t,e,n){var i=n(5);e.a={name:"subscription",data:function(){return{showSub:!1,formId:"",isRequesting:!1}},props:["pageRefresh","needMargin"],watch:{pageRefresh:function(t){t&&this.close()}},components:{LoginBtn:i.a},onShow:function(){this.setShowState()},onLoad:function(){this.setShowState()},methods:{setShowState:function(){var t=wx.getStorageSync("subscription");!t||Date.now()-t>6048e5?this.showSub=!0:this.showSub=!1},formSubmit:function(t){this.formId=t.mp.detail.formId},sendSub:function(){if(!this.isRequesting){this.isRequesting=!0;var t=this;wx.requestWithCookie({url:"https://c.m.163.com/uc/activity/miniapp/subscribe",data:{form_id:this.formId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){200===e.data.code?(console.log("开启成功"),wx.showToast({title:"开启成功",icon:"success",duration:2e3}),t.close()):wx.showToast({title:"开启失败",icon:"none",duration:2e3}),t.isRequesting=!1},fail:function(){wx.showToast({title:"开启失败",icon:"none",duration:2e3}),t.isRequesting=!1}})}},close:function(){this.showSub=!1,wx.setStorageSync("subscription",Date.now())}}}},function(t,e,n){var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showSub?n("div",{class:t.needMargin?"subscription subscription-margin":"subscription"},[n("p",{staticClass:"info"},[t._v("开启通知，时刻关注精选资讯")]),t._v(" "),n("form",{attrs:{"report-submit":"true",eventid:"0"},on:{submit:t.formSubmit}},[n("div",{staticClass:"sub-btn"},[n("login-btn",{attrs:{callback:t.sendSub,formType:"submit",mpcomid:"0"}},[t._v("开启")])],1)]),t._v(" "),n("div",{staticClass:"close",attrs:{eventid:"1"},on:{click:t.close}})],1):t._e()},s=[];i._withStripped=!0;var a={render:i,staticRenderFns:s};e.a=a},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){e.a=function(t){var e={"　　":"","&hellip;":"...","&quot;":'"',"&lt;":"<","&gt;":">","&acute;":"´","&copy;":"©","&nbsp;":" ","&prime;":"″","&Prime;":"″","&lsquo;":"“","&rsquo;":"”","&darr;":"↓","&amp;":"&","&deg;":"°"};return function(t){return t.replace(/((!?　　)|(&deg;)|(!?&hellip;)|(!?&quot;)|(!?&lt;)|(!?&gt;)|(!?&acute;)|(!?&copy;)|(!?&nbsp;)|(!?&prime;)|(!?&lsquo;)|(!?&rsquo;)|(!?&darr;))/gi,function(t,n,i,s){return e[n]})}(t=t.replace(/<noscript>.*?<\/noscript>/gi,"").replace(/\n/gi,"").replace(/<(\w+)\s+style=["'](.*?)["'].*?>/gi,"<$1>\x3c!--style#$2--\x3e").replace(/<font\scolor=["'](.*?)['"].*?>(.*?)<\/font>/gi,"<span style='color:$1;'>$2</span>"))}},,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var i=n(102),s=n(121),a=!1,o=n(0)(i.a,s.a,function(t){a||n(101)},null,null);o.options.__file="src/pages/Home.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions."),e.a=o.exports},function(t,e){},function(e,n,i){function s(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var a=i(1),o=i(30),r=i.n(o),c=i(26),l=i.n(c),u=i(10),p=i.n(u),h=i(16),d=i(103),f=i(104),m=i(105),v=i(109),g=i(113),_=i(12),w=i(117),b=i(45),y=i(2),T=i.n(y),C="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)},x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},S=["rebang","toutiao","yule","tiyu","bendi","keji","caijin","dujia","lishi","junshi","qiche","fangchan","dujia","shuma"],k={"晴":0,"阴":1,"多云":2,"阵雨":3,"小雨":4,"中雨":5,"冻雨":5,"小到中雨":5,"大雨":6,"中到大雨":6,"阵雪":7,"雷阵雨":8,"暴雨":9,"大到暴雨":9,"大暴雨":10,"特大暴雨":11,"雷阵雨伴有冰雹":12,"小雪":13,"中雪":14,"小到中雪":14,"大雪":15,"中到大雪":15,"暴雪":16,"大到暴雪":16,"雨夹雪":17,"雾":18,"沙尘暴":19,"霾":20};n.a={components:{PostList:v.a,NewsList:m.a,ChannelPanel:g.a,PageError:_.a,FirstOpenTips:w.a,Subscription:b.a},computed:x({},Object(a.d)(["navLinkData","markReadDocIds","deviceInfo","user"]),{currentPosition:function(){return this.positionCache[this.currentTab]}}),data:function(){return{scrollTop:0,scrollLeft:0,currentTab:1,listcache:[],positionCache:Array.from({length:p.a.tabs.length}).fill(0),fnList:[],offsetList:[],pageRefresh:!1,config:{fn:0,offset:0,lastMode:{},dynamic_url:p.a.api.dynamiclist,channel_url:p.a.api.channeldynamiclist,common_url:p.a.api.commonlist,local_url:p.a.api.localList,tabsInfo:p.a.tabs},fullRefreshTimes:0,tabLists:p.a.tabs,refreshingFinish:!1,showTopTip:!1,showTopTipTimer:null,refreshing:!1,refreshingError:!1,pageError:"netLoading",pageSize:10,offset:0,showCahnnelPanel:!1,tabWidth:0,refreshLength:10,topTipContent:"",currentNavLink:"",weather:{aqi:"",desc:"",currentT:0,temperature:"",climate:"",wind:""},locationAuthorizeState:"",showColumnHint:!1,showWeather:!1,homeShowTime:0}},watch:{fullRefreshTimes:function(){this.getCurrentNavLink()},currentTab:function(){this.getCurrentNavLink()}},created:function(){var t=wx.getStorageSync("user");t&&(this.USER({user:t}),this.user.cityChinese&&this.user.cityChinese!==this.tabLists[4]&&this.tabLists.splice(4,1,{name:this.user.cityChinese}))},mounted:function(){var t=this;wx.createSelectorQuery().select(".nav-item").boundingClientRect(function(e){t.tabWidth=e&&e.width}).exec()},onLoad:function(){var t=this;T.a.Page.init(),this.listcache=new Array(p.a.tabs.length),this.fnList=new Array(p.a.tabs.length).fill(1),this.offsetList=new Array(p.a.tabs.length).fill(0),this.get_data(0),!this.deviceInfo.isIOS&&wx.canIUse("setBackgroundColor")&&(wx.setBackgroundColor({backgroundColor:"#E22829"}),wx.setBackgroundTextStyle({textStyle:"light"})),this.getLocAuthState().then(function(){console.log("位置授权状态"+t.locationAuthorizeState)})},onShow:function(){this.homeShowTime=Date.now()},onTabItemTap:function(){!this.showCahnnelPanel&&Date.now()-this.homeShowTime>500&&(this.get_data(1),this.pageRefresh=!0)},onShareAppMessage:function(){return{title:"网易新闻精选-各有态度的新闻头条热点资讯",path:"/pages/Home?spss=screenshot"}},onReachBottom:function(t){0!==this.currentTab&&(this.showCahnnelPanel||(T.a.Event.stat("event_home_reachbottom",{index:this.currentTab,name:this.config.tabsInfo[this.currentTab].name}),this.get_data(2),this.pageRefresh=!0))},onPullDownRefresh:function(){this.showCahnnelPanel||(T.a.Event.stat("event_home_pulldownrefresh",{index:this.currentTab,name:this.config.tabsInfo[this.currentTab].name}),this.get_data(1),this.pageRefresh=!0)},methods:x({},Object(a.c)(["USER"]),{setColumnHint:function(t){var e=this;this.showColumnHint=t,setTimeout(function(){e.showColumnHint=!1},4e3)},get_data:function(t,e){var n=this;if(!this.refreshing){switch(this.refreshing=!0,t){case 0:++this.fullRefreshTimes;break;case 1:++this.fullRefreshTimes,this.fnList[this.currentTab]+=1,this.offsetList[this.currentTab]=0,wx.pageScrollTo({scrollTop:0,duration:0});break;case 2:this.offsetList[this.currentTab]+=1;break;case 3:this.offsetList[this.currentTab]=0,this.fnList[this.currentTab]+=1}if(0===this.currentTab)h.a.request(p.a.api.hot_postlist,function(i){200===i.data.code?(n.render_data(i.data.data,t),n.request_success(t),e&&e()):n.request_data_error(t),n.request_complete(t)},function(){n.request_failed(t),n.request_complete(t)},!0);else if(this.currentTab>=7){var i=n.config.common_url.replace("{{tid}}",n.config.tabsInfo[this.currentTab].tid).replace("{{start}}",10*this.offsetList[this.currentTab]);h.a.request(i,function(i){n.render_data(i,t),n.request_success(t),n.request_complete(t),e&&e(),"object"===C(n.listcache[n.currentTab])&&n.listcache[n.currentTab].length<10&&n.get_data(2)},function(){n.request_failed(t),n.request_complete(t)})}else{var s=+new Date,a="";if(4===this.currentTab){var o=r.a.parse(this.user.cityChinese),c=l.a.stringify(o).replace("+","%2B");a=n.config.local_url+"?fn="+this.fnList[4]+"&from="+c+"&offset="+10*this.offsetList[4]+"&ts="+s+"&size=10&req_platform=xiaochengxu",(!n.listcache[4]||n.listcache[4].length<20)&&1===this.fnList[4]?n.getWeather(this.user.provinceChinese,this.user.cityChinese):n.showWeather&&(n.showWeather=!1)}else{var u=1==this.currentTab?n.config.dynamic_url+"?tid=T1348647909107&channel=T1348647909107&":n.config.channel_url+"?";a=u+"fn="+this.fnList[this.currentTab]+"&from="+n.config.tabsInfo[this.currentTab].tid+"&offset="+10*this.offsetList[this.currentTab]+"&ts="+s+"&size=10&req_platform=xiaochengxu",console.log(u,a)}h.a.request(a,function(i){200===i.statusCode?(4===n.currentTab?n.render_data(i.data[n.user.cityChinese],t):n.render_data(i.data.data.items,t),n.request_success(t),n.request_complete(t),e&&e(),"object"===C(n.listcache[n.currentTab])&&n.listcache[n.currentTab].length<10&&n.get_data(2)):(n.pageError="dataError",n.request_complete(t))},function(){n.request_failed(t),n.request_complete(t)},!0,4===this.currentTab)}}},request_complete:function(t){this.refreshing=!1,this.refreshingFinish=!0},request_success:function(t){this.refreshingError=!1,this.pageError=0,1===t&&(wx.stopPullDownRefresh(),this.currentTab>0&&this.currentTab<7&&this.show_top_tip("成功为您推荐"+this.refreshLength+"条新内容"))},request_data_error:function(t){this.refreshingError=!0,0!==t&&1!==t&&3!==t||(this.pageError="dataError")},request_failed:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"netError";this.refreshingError=!0,0!==t&&1!==t&&3!==t||(this.pageError=e)},reload_get_data:function(){this.get_data(2)},navlinkAnalysis:function(t){var e=t.appid,n=t.path,i=this;console.log("navlink_analysis",e),wx.navigateToMiniProgram({appId:e,path:n,success:function(){console.log(i),T.a.Event.stat("nav_mp",{appid:e,name:i.config.tabsInfo[i.currentTab].name}),console.log("跳转mp成功")},fail:function(){T.a.Event.stat("nav_mp_fail",{appid:e,name:i.config.tabsInfo[i.currentTab].name}),console.log("跳转mp失败")}})},open_channel_panel:function(){this.showCahnnelPanel=!this.showCahnnelPanel,this.showCahnnelPanel&&T.a.Event.stat("event_home_tabmore",{})},scroll_into_current:function(){this.currentTab>2?this.scrollLeft=this.tabWidth*(this.currentTab-2.5):this.scrollLeft=0},switch_tab:function(t){var e=t.mp.currentTarget.dataset.current;if(T.a.Event.stat("event_home_tab",{index:e,name:this.config.tabsInfo[e].name}),this.currentTab===e)this.get_data(1),this.scroll_into_current();else{var n=this;wx.createSelectorQuery().select("#main").boundingClientRect(function(t){var i=0;t&&(i=t.top),n.positionCache.splice(n.currentTab,1,i),n.currentTab=e,n.switch_tab_content(e,!1),n.scroll_into_current(),wx.canIUse("nextTick")?wx.nextTick(function(){wx.pageScrollTo({scrollTop:-n.positionCache[n.currentTab],duration:0})}):wx.pageScrollTo({scrollTop:-n.positionCache[n.currentTab],duration:0})}).exec()}},switch_tab_content:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.showTopTip=!1,clearTimeout(this.showTopTipTimer),this.currentTab=t,this.listcache[this.currentTab]?this.pageError=0:(this.pageError="netLoading",n||4===t&&Date.now()-this.user.lastVisitTime>864e5&&"authorized"===this.locationAuthorizeState||4===t&&"unused"===this.locationAuthorizeState?this.getLocation().then(function(t){var n=e.user.cityChinese;e.USER({user:x({lastVisitTime:Date.now()},t)}),e.get_data(0,function(){n&&t.cityChinese!==n&&e.show_top_tip("已为您切换为当前地理位置的资讯")}),wx.setStorage({key:"user",data:x({lastVisitTime:Date.now()},t)}),e.tabLists.splice(4,1,{name:e.user.cityChinese})},function(t){e.locationAuthorizeState="unauthorized",2===t.type?wx.showToast({title:"请先开启微信位置授权",icon:"none",duration:2e3}):wx.showToast({title:"位置获取失败",icon:"none",duration:2e3}),e.USER({user:{lastVisitTime:Date.now(),provinceChinese:"北京",cityChinese:"北京"}}),wx.setStorage({key:"user",data:{lastVisitTime:Date.now(),provinceChinese:"北京",cityChinese:"北京"}}),e.tabLists.splice(4,1,{name:e.user.cityChinese}),e.get_data(0)}):this.get_data(0))},render_data:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this.currentNavLink&&this.getCurrentNavLink(),t){T.a.Event.stat("pv_home",{index:this.currentTab,name:this.config.tabsInfo[this.currentTab].name});var n=[],i=this;n=4===this.currentTab?Object(d.a)(t,this.markReadDocIds):0===this.currentTab?Object(f.a)(t.items):this.currentTab>=7?Object(d.a)(t.data[this.config.tabsInfo[this.currentTab].tid],this.markReadDocIds):Object(d.a)(t,this.markReadDocIds),this.listcache[this.currentTab]&&1!=e?this.listcache[this.currentTab]=this.listcache[this.currentTab].concat(n):this.listcache[this.currentTab]=n;var s=n;1===e&&(this.refreshLength=s.length),s.concat(i.listcache[i.currentTab]),this.config.offset+=s.length}},show_top_tip:function(t){var e=this;clearTimeout(this.showTopTipTimer),this.topTipContent=t,this.showTopTip=!0,this.showTopTipTimer=setTimeout(function(){e.showTopTip=!1,e.refreshLength=0},1500)},getCurrentNavLink:function(){var t=this.navLinkData[S[this.currentTab]];if(t){var e=t.length;this.currentNavLink=t[Math.floor(Math.random()*e)]}else this.currentNavLink=""},updateMark:function(t){var e=t.tabIndex,n=t.index,i=[].concat(s(this.listcache));i[e][n].isRead=!0,this.listcache=i},getWeather:function(t,e){var n=this,i=r.a.parse(t+"|"+e),s=l.a.stringify(i);wx.request({url:"https://c.m.163.com/nc/weather/"+s+".html",success:function(t){try{var e=t.data;for(var i in e)if(Array.isArray(e[i])){var s=e[i][0];return n.weather={aqi:e.pm2d5.aqi,desc:n.getWeatherQuality(e.pm2d5.aqi),currentT:e.rt_temperature,temperature:s.temperature.replace(/°C\//," ~ "),climate:s.climate,wind:s.wind,img:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/weather/"+k[s.climate]+".png"},void(n.showWeather=!0)}}catch(t){console.log(t)}}})},getWeatherQuality:function(t){return t<=50?"优":t<=100?"良":t<=200?"轻度污染":t<=300?"中度污染":"重度污染"},reloadLLocalColumn:function(t){var e=this;if(t.mp.detail.authSetting["scope.userLocation"]){this.locationAuthorizeState="authorized";var n=[].concat(s(this.listcache));n[this.currentTab]=void 0,this.listcache=n,this.fnList[4]=1,this.offsetList[4]=0,this.showWeather=!1,this.pageError="netLoading",setTimeout(function(){e.switch_tab_content(4,!0)},300)}},getLocAuthState:function(){var t=this;return new Promise(function(e){var n=t;wx.getSetting({success:function(t){Object.keys(t.authSetting).indexOf("scope.userLocation")>-1?t.authSetting["scope.userLocation"]?n.locationAuthorizeState="authorized":n.locationAuthorizeState="unauthorized":n.locationAuthorizeState="unused",e()},fail:function(){e()}})})},getLocation:function(){return new Promise(function(t,e){wx.getLocation({success:function(n){wx.request({url:"https://api.map.baidu.com/geocoder/v2/?location="+n.latitude+","+n.longitude+"&output=json&ak=bk24jf7cyS5Gz7QZhzsSeAsQBkbOiHlE",success:function(n){if(0===n.data.status){var i=n.data.result.addressComponent,s={provinceChinese:i.province.replace(/[省|市]/,""),cityChinese:i.city.replace("市","")};t(s)}else e({type:0}),console.log("百度接口返回失败"),4===n.data.status&&(console.log("接口调用超出次数"),T.a.Event.stat("baidu_api_threshold",{}))},fail:function(){e({type:0}),console.log("百度接口获取失败")}})},fail:function(t){e("getLocation:fail 1"===t.errMsg?{type:2}:{type:1})}})})}})}},function(t,e,n){e.a=function(t,e){var n=[],o=r.a.allowType,c=[];return t.forEach(function(t){if(!t.skipType||o.indexOf(t.skipType)>=0){var l,u=0,p=t.skipType?"doc"==t.skipType?"Article":t.skipType:"Article",h=[];if("video"==p)u=1!=t.imgType?5:4;else if(null==t.imgsrc||""==t.imgsrc)u=0;else if(t.imgnewextra&&2==t.imgnewextra.length||t.imgextra&&2==t.imgextra.length){u=3;var d=[];d.push({imgsrc:t.imgsrc}),t.imgnewextra?d=d.concat(t.imgnewextra.slice(0,2)):t.imgextra&&(d=d.concat(t.imgextra.slice(0,2))),d.forEach(function(t){h.push({imgsrc:Object(s.a)(t,"small").src,isLoad:!1})})}else!t.imgType||t.imgType&&0==t.imgType?u=1:t.imgType&&1==t.imgType&&(u=2,l=t.imgsrc);var f=t.skipType&&"doc"!=t.skipType?t.skipID:t.docid,m=t.source&&t.source.replace(/\$/g,""),v={id:f,title:Object(a.a)(t.title),docid:f,source:m,url:p+"?docid="+f,skipType:p,replyCount:t.replyCount,imgsrc:t.hasOwnProperty("imgsrc")&&""!=t.imgsrc?l||Object(s.a)({imgsrc:t.imgsrc},"small").src:"",modeType:u,multiImg:h,imgLength:t.imgsum||0,fromNow:t.ptime&&Object(i.a)(t.ptime),isRead:e.indexOf(f)>-1,isLoad:!1,interest:t.interest};t.interest===r.a.topNewsTag||t.interest===r.a.topNewsTag2?(v.itemTag="置顶",c.push(v)):n.push(v)}}),c.concat(n)};var i=n(11),s=n(4),a=n(76),o=n(10),r=n.n(o)},function(t,e,n){e.a=function(t){return t.map(function(t){var e=t.comment&&t.comment.commentNum;t.fPtime=Object(i.a)(t.ptime),t.fCommentCount=e>1e4?(e/1e4).toFixed(1)+"万":e,t.fImgsrc="https:"+a()(t.imgsrc,750),t.fCommentAvatar="https:"+a()(t.comment.avatar,80);var n=t.comment&&t.comment.content;return t.fCommentContent=n?'<p class="comment-text">'+Object(o.a)(n)+"</p>":"",t})};var i=n(11),s=n(29),a=n.n(s),o=n(31)},function(t,e,n){var i=n(107),s=n(108),a=!1,o=n(0)(i.a,s.a,function(t){a||n(106)},null,null);o.options.__file="src/components/NewsList.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] NewsList.vue: functional components are not supported with templates, they should use render functions."),e.a=o.exports},function(t,e){},function(t,e,n){e.a={name:"news-list",props:["listArray","currentNavLink","tabIndex"],data:function(){return{skiptypeObj:{Article:"Article",video:"VideoDetail"}}},methods:{doRead:function(t){var e="",n=t.currentTarget.dataset;"Article"===n.skiptype||"doc"===n.skiptype?e="article/article?docid="+n.id:"video"===n.skiptype&&(e="video/video?docid="+n.id),this.$router.push(e),this.$emit("markRead",{tabIndex:this.tabIndex,index:n.index})},navlinkAnalysis:function(t){console.log(t);var e=t.currentTarget.dataset;this.$emit("analysis",{appid:e.appid,path:e.path})}}}},function(t,e,n){var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-list"},t._l(t.listArray,function(e,i){return n("block",{key:e.docid},[n("div",{staticClass:"list-news-view clearfix",attrs:{"data-id":e.docid,"data-index":i,"data-url":e.url,"data-skipType":e.skipType,hover:"true","hover-class":"list-news-view-hover",eventid:"0-"+i},on:{click:t.doRead}},[0==e.modeType?n("div",[e.isRead?n("div",[n("div",{staticClass:"news-view-title read"},[t._v(t._s(e.title))])]):n("div",[n("div",{staticClass:"news-view-title"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"news-view-info"},[e.itemTag?n("div",{staticClass:"news-view-tag"},[t._v(t._s(e.itemTag))]):t._e(),t._v(" "),n("span",[t._v(t._s(e.source))]),t._v(t._s(e.fromNow)+"\n        ")])]):1==e.modeType?n("div",[n("div",{staticClass:"news-view-thumb common-img-default--sm"},[n("image",{attrs:{mode:"aspectFill","data-id":e.docid,src:e.imgsrc}})]),t._v(" "),e.isRead?n("div",[n("div",{staticClass:"news-view-title read"},[t._v(t._s(e.title))])]):n("div",[n("div",{staticClass:"news-view-title"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"news-view-fixinfo"},[e.itemTag?n("div",{staticClass:"news-view-tag"},[t._v(t._s(e.itemTag))]):t._e(),t._v(" "),n("p",[n("span",[t._v(t._s(e.source))]),t._v(t._s(e.fromNow))])],1)]):2==e.modeType?n("div",[e.isRead?n("div",[n("div",{staticClass:"news-view-title read"},[t._v(t._s(e.title))])]):n("div",[n("div",{staticClass:"news-view-title"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"news-bigThumb-flex"},[n("image",{staticClass:"news-view-bigThumb common-img-default",attrs:{mode:"aspectFill","data-id":"item.docid",src:e.imgsrc}})]),t._v(" "),n("div",{staticClass:"news-view-info"},[e.itemTag?n("div",{staticClass:"news-view-tag"},[t._v(t._s(e.itemTag))]):t._e(),t._v(" "),n("span",[t._v(t._s(e.source))]),t._v(t._s(e.fromNow)+"\n        ")])]):3==e.modeType?n("div",[e.isRead?n("div",[n("div",{staticClass:"news-view-title read"},[t._v(t._s(e.title))])]):n("div",[n("div",{staticClass:"news-view-title"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"news-view-flex"},[t._l(e.multiImg,function(t,e){return n("image",{key:e,staticClass:"news-view-flex-item common-img-default--sm",attrs:{mode:"aspectFill","data-imgsrc":t.imgsrc,src:t.imgsrc}})}),t._v(" "),e.imgLength>0?n("div",{staticClass:"pic-tag"},[n("div",{staticClass:"pic"}),t._v(" "),n("div",{staticClass:"imgsum"},[t._v(t._s(e.imgLength))])]):t._e()],2),t._v(" "),n("div",{staticClass:"news-view-info"},[e.itemTag?n("div",{staticClass:"news-view-tag"},[t._v(t._s(e.itemTag))]):t._e(),t._v(" "),n("span",[t._v(t._s(e.source))]),t._v(t._s(e.fromNow)+"\n        ")])]):4==e.modeType?n("div",[e.isRead?n("div",[n("div",{staticClass:"news-view-title read"},[t._v(t._s(e.title))])]):n("div",[n("div",{staticClass:"news-view-title"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"news-bigThumb-flex"},[n("img",{staticClass:"news-view-bigThumb common-img-default",attrs:{src:e.imgsrc}}),t._v(" "),n("div",{staticClass:"news-view-bigThumb-video"})]),t._v(" "),n("div",{staticClass:"news-view-info"},[n("span",[t._v(t._s(e.source))]),t._v(t._s(e.fromNow))])]):5==e.modeType?n("div",[n("div",{staticClass:"news-view-thumb common-img-default--sm"},[n("image",{attrs:{mode:"aspectFill","data-id":e.docid,src:e.imgsrc}}),t._v(" "),n("div",{staticClass:"news-view-thumb-video img"})]),t._v(" "),e.isRead?n("div",[n("div",{staticClass:"news-view-title read"},[t._v(t._s(e.title))])]):n("div",[n("div",{staticClass:"news-view-title"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"news-view-fixinfo"},[e.itemTag?n("div",{staticClass:"news-view-tag"},[t._v(t._s(e.itemTag))]):t._e(),t._v(" "),n("p",[n("span",[t._v(t._s(e.source))]),t._v(t._s(e.fromNow))])],1)]):n("div",[t._v("\n        未分类\n      ")])]),t._v(" "),i%5==4?n("div",{staticClass:"list-news-view clearfix"},[n("ad",{attrs:{"unit-id":"adunit-1bd005fb4c7f8aef",mpcomid:"0-"+i}})],1):t._e(),t._v(" "),4===i&&t.currentNavLink?n("div",{staticClass:"list-news-view clearfix",attrs:{target:"miniProgram","data-appid":t.currentNavLink.appId,"data-path":t.currentNavLink.url,eventid:"1-"+i},on:{click:t.navlinkAnalysis}},[n("div",{staticClass:"news-view-thumb common-img-default--sm"},[n("image",{attrs:{mode:"aspectFill",src:t.currentNavLink.imgsrc}})]),t._v(" "),n("div",[n("div",{staticClass:"news-view-title"},[t._v(t._s(t.currentNavLink.title)+t._s(t.currentTab))])]),t._v(" "),n("div",{staticClass:"news-view-fixinfo"},[e.itemTag?n("div",{staticClass:"news-view-tag"},[t._v(t._s(t.currentNavLink.itemTag))]):t._e()])]):t._e()])}))},s=[];i._withStripped=!0;var a={render:i,staticRenderFns:s};e.a=a},function(t,e,n){var i=n(111),s=n(112),a=!1,o=n(0)(i.a,s.a,function(t){a||n(110)},null,null);o.options.__file="src/components/PostList.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] PostList.vue: functional components are not supported with templates, they should use render functions."),e.a=o.exports},function(t,e){},function(t,e,n){e.a={name:"PostList",props:{listArray:Array,tabIndex:Number}}},function(t,e,n){var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-list"},[t._l(t.listArray,function(e,i){return n("block",{key:e.contentId},[n("section",{staticClass:"post-item",attrs:{"data-id":e.contentId,"data-index":i}},[n("navigator",{staticClass:"article",attrs:{"hover-class":"none",url:"/pages/article/article?docid="+e.contentId}},[n("image",{attrs:{src:e.fImgsrc,alt:"banner",mode:"aspectFill"}}),t._v(" "),n("div",{staticClass:"badge"},[t._v("No."+t._s(i+1))]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"subtitle"},[n("span",[t._v(t._s(e.fCommentCount)+"跟贴")]),t._v(" "),n("span",[t._v(t._s(e.fPtime))])])]),t._v(" "),e.fCommentContent?n("navigator",{staticClass:"comment",attrs:{"hover-class":"none",url:"/pages/comments/comments?from=hotpostlist&docid="+e.contentId}},[n("div",{staticClass:"icon"},[t._v("\n                    热贴\n                ")]),t._v(" "),n("rich-text",{staticClass:"content",attrs:{nodes:e.fCommentContent,mpcomid:"0-"+i}})],1):t._e()],1)],1)}),t._v(" "),n("div",{staticClass:"no-more"},[t._v("已无更多数据")])],2)},s=[];i._withStripped=!0;var a={render:i,staticRenderFns:s};e.a=a},function(t,e,n){var i=n(115),s=n(116),a=!1,o=n(0)(i.a,s.a,function(t){a||n(114)},null,null);o.options.__file="src/components/ChannelPanel.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] ChannelPanel.vue: functional components are not supported with templates, they should use render functions."),e.a=o.exports},function(t,e){},function(t,e,n){var i=n(10),s=n.n(i);e.a={name:"channel-panel",props:{currentTab:{default:0}},data:function(){return{tabLists:s.a.tabs}},methods:{close:function(){this.isShow=!1}}}},function(t,e,n){var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-panel",attrs:{eventid:"2"},on:{click:function(e){e.stopPropagation(),t.$emit("close")}}},[n("div",{staticClass:"panel-head"},[t._v("\n    点击进入栏目\n    "),n("div",{staticClass:"panel-close icon-arrow-up",attrs:{eventid:"0"},on:{click:function(e){e.stopPropagation(),t.$emit("close")}}})]),t._v(" "),n("div",{staticClass:"panel-list"},t._l(t.tabLists,function(e,i){return n("div",{key:i,class:i==t.currentTab?"panel-tab active":"panel-tab",attrs:{"data-current":i,hover:"true","hover-class":"panel-tab-hover",eventid:"1-"+i},on:{click:function(e){e.stopPropagation(),t.$emit("switch_tab",e),t.$emit("close")}}},[t._v(t._s(e.name)+"\n    ")])}))])},s=[];i._withStripped=!0;var a={render:i,staticRenderFns:s};e.a=a},function(t,e,n){var i=n(119),s=n(120),a=!1,o=n(0)(i.a,s.a,function(t){a||n(118)},null,null);o.options.__file="src/components/FirstOpenTips.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] FirstOpenTips.vue: functional components are not supported with templates, they should use render functions."),e.a=o.exports},function(t,e){},function(t,e,n){var i=n(1),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};e.a={name:"FirstOpenTips",data:function(){return{active:!1,hasEmited:!1}},computed:s({},Object(i.d)(["deviceInfo"])),onLoad:function(){var t=this;this.isFirstOpened()?this.emitEvent():(this.active=!0,setTimeout(function(){t.active=!1,t.emitEvent()},5e3))},methods:{hide:function(){this.active=!1,this.emitEvent()},emitEvent:function(){this.hasEmited||(this.hasEmited=!0,this.$emit("firstOpenTipClosed",!0))},isFirstOpened:function(){var t=wx.getStorageSync("opened");return t||wx.setStorageSync("opened",!0),t}}}},function(t,e,n){var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.active?n("div",{class:["first-open-tips",{"first-open-tips-fringe":t.deviceInfo.hasFringe},{"first-open-tips-24":t.deviceInfo.statusBar24}],attrs:{eventid:"0"},on:{touchstart:t.hide}},[n("image",{staticClass:"close-icon",attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/close-icon.png"}}),t._v(" "),n("image",{staticClass:"desc",attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/first-open-desc.png"}}),t._v(" "),n("image",{staticClass:"img",attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/first-open-tips-phone.png"}})]):t._e()},s=[];i._withStripped=!0;var a={render:i,staticRenderFns:s};e.a=a},function(t,e,n){var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["home",{"home-fringe":t.deviceInfo.hasFringe},{"home-24":t.deviceInfo.statusBar24}]},[n("div",{staticClass:"home-navigator-bar"},[t._v("\n    网易新闻精选\n  ")]),t._v(" "),n("div",{staticClass:"home-topbar"},[n("div",{staticClass:"nav"},[n("scroll-view",{attrs:{"scroll-x":"","scroll-with-animation":"","scroll-left":t.scrollLeft}},[n("div",{staticClass:"nav-wrapper"},t._l(t.tabLists,function(e,i){return n("a",{key:i,class:i==t.currentTab?"nav-item active":"nav-item",attrs:{"data-current":i,eventid:"0-"+i},on:{click:t.switch_tab}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))]),t._v(" "),n("div",{staticClass:"nav-btn icon-arrow-up",attrs:{eventid:"1"},on:{click:t.open_channel_panel}}),t._v(" "),"unused"===t.locationAuthorizeState&&t.showColumnHint?n("div",{staticClass:"pop-column",attrs:{"data-current":4,eventid:"2"},on:{click:t.switch_tab}}):t._e()],1),t._v(" "),t.showCahnnelPanel?n("channel-panel",{attrs:{currentTab:t.currentTab,eventid:"3",mpcomid:"0"},on:{close:t.open_channel_panel,switch_tab:t.switch_tab}}):t._e()],1),t._v(" "),n("div",{class:["home-main",t.showCahnnelPanel?"no-scroll":""],attrs:{id:"main"}},[n("subscription",{attrs:{pageRefresh:t.pageRefresh,mpcomid:"1"}}),t._v(" "),0===t.pageError?n("block",[n("div",{class:["topRefreshTip",{refreshAnimation:t.showTopTip}]},[t._v("\n        "+t._s(t.topTipContent)+"\n      ")]),t._v(" "),4===t.currentTab&&"unauthorized"===t.locationAuthorizeState?n("button",{staticClass:"box-location-hint",attrs:{"open-type":"openSetting",eventid:"4"},on:{opensetting:t.reloadLLocalColumn}},[n("i",{staticClass:"icon-map"}),n("span",[t._v("开启位置权限，获取本地资讯")])],1):t._e(),t._v(" "),t.showWeather&&4===t.currentTab?n("div",{staticClass:"box-weather"},[n("div",{staticClass:"left"},[n("p",[n("span",[t._v(t._s(t.user.cityChinese))]),n("i",{staticClass:"icon-location"})],1),t._v(" "),n("p",{class:[t.weather.aqi<100?"cl-green":"cl-orange"]},[t._v("空气 "+t._s(t.weather.aqi)+t._s(t.weather.desc))])],1),t._v(" "),n("div",{staticClass:"right"},[n("image",{attrs:{src:t.weather.img}}),t._v(" "),n("p",{staticClass:"temperature-current"},[t._v(t._s(t.weather.currentT)+"°")]),t._v(" "),n("div",{staticClass:"rightmost"},[n("p",[t._v(t._s(t.weather.temperature))]),t._v(" "),n("p",[t._v(t._s(t.weather.climate)+" "+t._s(t.weather.wind))])],1)],1)]):t._e(),t._v(" "),t._l(t.listcache,function(e,i){return n("div",{key:i,staticClass:"tab-content",class:{active:i===t.currentTab}},[0===i?n("block",[n("post-list",{attrs:{listArray:e,tabIndex:i,mpcomid:"2-"+i}})],1):n("block",[n("news-list",{attrs:{listArray:e,currentNavLink:t.currentNavLink,tabIndex:i,eventid:"5-"+i,mpcomid:"3-"+i},on:{markRead:t.updateMark,analysis:t.navlinkAnalysis}})],1)],1)}),t._v(" "),t.refreshing?n("div",{staticClass:"refreshing-tip"},[n("div",{staticClass:"refreshing-tip-loading spin-anime-infinite"}),t._v(" "),n("div",[t._v("正在载入")])]):t.refreshingError?n("div",{staticClass:"refreshing-tip",attrs:{eventid:"6"},on:{click:t.reload_get_data}},[n("div",{staticClass:"refreshing-tip-loading"}),t._v(" "),n("div",[t._v("重新加载")])]):t._e()],2):n("block",[n("page-error",{attrs:{type:t.pageError,clickbtn:"netError"===t.pageError,clickfun:t.get_data,mpcomid:"4"}})],1)],1),t._v(" "),n("first-open-tips",{attrs:{eventid:"7",mpcomid:"5"},on:{firstOpenTipClosed:t.setColumnHint}})],1)},s=[];i._withStripped=!0;var a={render:i,staticRenderFns:s};e.a=a}],[170]); 
 			}); 	require("pages/Home.js");
 		__wxRoute = 'pages/Videos';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/Videos.js';	define("pages/Videos.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};require("../9FA2E4459104369CF9C48C4278C17C83.js"),global.webpackJsonp([4],{10:function(t,e){t.exports={tabs:[{name:"热榜",tid:"hotpost"},{name:"头条",tid:"toutiao"},{name:"娱乐",url:"",tid:"T1348648517839"},{name:"体育",url:"",tid:"T1348649079062"},{name:"本地",url:""},{name:"科技",tid:"T1348649580692",url:""},{name:"财经",tid:"T1348648756099",url:""},{name:"独家",type:"common",tid:"T1370583240249",url:""},{name:"历史",type:"common",tid:"T1368497029546"},{name:"军事",type:"common",tid:"T1348648141035",url:""},{name:"汽车",type:"common",tid:"T1348654060988",url:""},{name:"房产",type:"common",tid:"T1348654085632",url:""},{name:"数码",type:"common",tid:"T1348649776727",url:""}],api:{article:"https://c.m.163.com/nc/article/{{docid}}/full.html",video:"https://c.m.163.com/nc/video/detail/{{id}}.html",photo:"https://c.m.163.com/photo/api/set/{{cid}}/{{sid}}.json",commonlist:"https://c.m.163.com/nc/article/list/{{tid}}/{{start}}-10.html",dynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/headline-list",channeldynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/normal-list",localList:"https://c.m.163.com/dlist/article/local/dynamic",video_list:"https://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&subtab={{subtab}}&size={{pageSize}}&offset={{offset}}",video_related_list:"https://c.m.163.com/releate/video/dynamic?videoid={{id}}&appname=xiaochengxu",favorite_list:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite?pageNo={{pageNo}}",favorite_add:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/add",favorite_cancel:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/cancel",favorite_check:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/check",hot_postlist:"https://taidu.3g.163.com/news-support/weixin/miniprogram/comment/hotList"},allowType:["video","article","doc"],topNewsTag:"S",topNewsTag2:"S+"}},12:function(t,e,n){var a=n(14),o=n(15),i=!1,s=n(0)(a.a,o.a,function(t){i||n(13)},null,null);s.options.__file="src/components/PageError.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] PageError.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},122:function(t,e,n){var a=n(124),o=n(129),i=!1,s=n(0)(a.a,o.a,function(t){i||n(123)},"data-v-6e1db71c",null);s.options.__file="src/pages/Videos.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Videos.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},123:function(t,e){},124:function(t,e,n){var a=n(1),o=n(16),i=n(20),s=n(12),r=n(125),c=n(10),l=n.n(c),d=n(2),u=n.n(d),h=n(22),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.a={name:"Videos",components:{PageError:s.a,VideolistToolbar:r.a,ShareMoments:h.a},computed:p({},Object(a.d)(["deviceInfo"])),data:function(){return{videoList:[],favoredList:1,refreshingFinish:!1,showRefreshTip:!1,refreshing:!1,refreshingError:!1,pageError:"netLoading",refreshLength:10,lastShowTime:0,pageSize:10,offset:0,subtab:"Video_Recom",shareData:{title:"11",path:"Videos"},currentVideo:{},defaultTabs:[{name:"推荐",value:"Video_Recom"},{name:"搞笑",value:"Video_Recom"}]}},onReady:function(){},onLoad:function(){this.get_data(0),u.a.Event.stat("pv_videolist",{}),u.a.Page.init()},onShow:function(){this.lastShowTime=Date.now()},onTabItemTap:function(){Date.now()-this.lastShowTime>500&&this.get_data(1)},onPullDownRefresh:function(){this.get_data(1)},onReachBottom:function(){this.get_data(2)},onShareAppMessage:function(t){var e=t[0]?t[0].target:t.target;if(e){var n=e.dataset,a=n.title,o=n.cover;return{title:"视频："+a,path:"/pages/video/video?docid="+n.id,imageUrl:o+"?imageView&thumbnail=340y270"}}return{title:"网易新闻精选-各有态度的新闻头条热点资讯",path:"/pages/Videos"}},methods:{get_data:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments[1],a=this;if(!this.refreshing){this.refreshing=!0,0!==e&&1!==e||(this.offset=0);var s=l.a.api.video_list.replace("{{subtab}}",a.subtab).replace("{{pageSize}}",a.pageSize).replace("{{offset}}",a.offset);o.a.request(s,function(s){var r=s&&s.data&&s.data["视频"];r&&(r.forEach(function(t){t.fLength=o.a.timeFormat(t.length),t.fCover="https:"+o.a.optImage(t.cover,750,422),t.fTopicImg="https:"+o.a.optImage(t.videoTopic.topic_icons,40,40),t.fPlayCount=Object(i.a)(t.playCount),t.favored=!1}),a.videoList=0===e||1===e?r:a.videoList.concat(r),t.offset+=10,a.request_success(e,r.length),a.request_complete(e),n&&n())},function(){t.request_failed(e),t.request_complete(e)},!0)}},request_complete:function(t){this.refreshing=!1,this.refreshingFinish=!0},request_success:function(t,e){this.refreshLength=e,this.refreshingError=!1,this.pageError=0,1===t&&(wx.stopPullDownRefresh(),this.show_refresh_tip(),wx.pageScrollTo({scrollTop:0,duration:0}))},request_failed:function(t){this.refreshingError=!0,0!==t&&1!==t||(wx.pageScrollTo({scrollTop:0,duration:300}),this.pageError="netError")},reload_get_data:function(){this.get_data(2)},show_refresh_tip:function(){var t=this;this.showRefreshTip=!0,setTimeout(function(){t.showRefreshTip=!1},3e3)},page_click_delegate:function(t){this.currentVideo=t},do_favor:function(t){t.favored?wx.request({url:l.a.api.favorite_cancel,data:{contentType:"video",contentId:t.vid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.favored=!1}}):wx.request({url:l.a.api.favorite_add,data:{contentType:"video",contentId:t.vid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.favored=!0}})}}}},125:function(t,e,n){var a=n(127),o=n(128),i=!1,s=n(0)(a.a,o.a,function(t){i||n(126)},"data-v-5bc4acb2",null);s.options.__file="src/components/VideolistToolbar.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] VideolistToolbar.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},126:function(t,e){},127:function(t,e,n){var a=n(1),o=n(2),i=n.n(o),s=n(27),r=n(5),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.a={name:"videolist-toolbar",props:["item"],components:{CollectionBtn:s.a,LoginBtn:r.a},methods:c({},Object(a.c)(["MODAL_SHARE"]),{dealWechatIconClick:function(){i.a.Event.stat("btn_share_platform",{platform:"wx-personal"})},dealmomentsIconClick:function(){i.a.Event.stat("btn_share_platform",{platform:"wx-friend"}),this.MODAL_SHARE({showShareModal:!0})}})}},128:function(t,e,n){var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"videolist-toolbar"},[n("div",{staticClass:"author"},[n("img",{attrs:{src:t.item.videoTopic&&t.item.videoTopic.topic_icons,alt:""}}),t._v(" "),n("span",[t._v(t._s(t.item.topicName))])]),t._v(" "),n("div",{staticClass:"toolbar"},[n("div",{staticClass:"collection"},[n("collection-btn",{attrs:{id:t.item.vid,type:"video",mpcomid:"0"}})],1),t._v(" "),n("div",{staticClass:"share-chat"},[n("button",{attrs:{"open-type":"share","data-title":t.item.title,"data-id":t.item.vid,"data-cover":t.item.cover,eventid:"0"},on:{click:t.dealWechatIconClick}},[n("span",{staticClass:"icon-wechat"})])],1),t._v(" "),n("div",{staticClass:"share-moments"},[n("login-btn",{attrs:{callback:t.dealmomentsIconClick,mpcomid:"1"}},[n("span",{staticClass:"icon-moments"})])],1)])])},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.a=i},129:function(t,e,n){var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0===t.pageError&&t.videoList.length?n("div",{staticClass:"container",class:["videos",{"videos-fringe":t.deviceInfo.hasFringe},{"videos-24":t.deviceInfo.statusBar24}]},[n("div",{staticClass:"videos-navigator-bar"},[t._v("\n    精彩推荐\n  ")]),t._v(" "),n("div",{class:[{refreshAnimation:t.showRefreshTip},"topRefreshTip"]},[t.refreshingError?n("block",[t._v("\n      网络不给力，请稍后重试\n    ")]):n("block",[t._v("\n      成功为您推荐"+t._s(t.refreshLength)+"条新内容\n    ")])],1),t._v(" "),t._l(t.videoList,function(e,a){return n("div",{key:e.vid,staticClass:"list-item video-holder",attrs:{eventid:"0-"+a},on:{click:function(n){t.page_click_delegate(e)}}},[n("navigator",{attrs:{url:"/pages/video/video?docid="+e.vid,"hover-class":"navigator-hover"}},[n("div",{staticClass:"m-video-player",style:"background-image: url("+e.fCover+")"},[n("div",{staticClass:"mask"},[n("div",{staticClass:"mask-top"}),t._v(" "),n("div",{staticClass:"mask-corner"}),t._v(" "),n("image",{attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/play-gray.png"}})]),t._v(" "),n("div",{staticClass:"info"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.fPlayCount)+"次播放")]),t._v(" "),n("span",[t._v(t._s(e.fLength))])],1)])]),t._v(" "),n("videolist-toolbar",{attrs:{item:e,mpcomid:"0-"+a}})],1)}),t._v(" "),t.refreshing?n("div",{staticClass:"refreshing-tip"},[n("div",{staticClass:"refreshing-tip-loading spin-anime-infinite"}),t._v(" "),n("div",[t._v("正在载入")])]):t.refreshingError?n("div",{staticClass:"refreshing-tip",attrs:{eventid:"1"},on:{click:t.reload_get_data}},[n("div",{staticClass:"refreshing-tip-loading"}),t._v(" "),n("div",[t._v("重新加载")])]):t._e(),t._v(" "),n("share-moments",{attrs:{headImg:t.currentVideo.cover,title:t.currentVideo.title,docid:t.currentVideo.vid,mpcomid:"1"}})],2):"netLoading"===t.pageError?n("block",[n("page-error",{attrs:{type:"netLoading",mpcomid:"2"}})],1):"netError"===t.pageError?n("block",[n("page-error",{attrs:{type:"netError",clickbtn:"true",clickfun:t.get_data,mpcomid:"3"}})],1):"dataError"===t.pageError?n("block",[n("page-error",{attrs:{type:"dataError",mpcomid:"4"}})],1):t._e()},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.a=i},13:function(t,e){},14:function(t,e,n){e.a={name:"page-error",props:{type:String,clickfun:Function,clickbtn:Boolean},methods:{back:function(){getCurrentPages().length<2?wx.switchTab({url:"/pages/Home"}):wx.navigateBack()}}}},15:function(t,e,n){var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-error"},["dataError"===t.type?n("block",[n("div",{staticClass:"empty"}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("此页面内容没有了")]),t._v(" "),n("div",{staticClass:"error-btn",attrs:{eventid:"0"},on:{click:t.back}},[t._v("返回")])]):t._e(),t._v(" "),"emptyComment"===t.type?n("block",[n("div",{staticClass:"empty-comment"}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("暂无跟贴")]),t._v(" "),n("div",{staticClass:"error-btn",attrs:{eventid:"1"},on:{click:t.back}},[t._v("返回")])]):"netError"===t.type?n("block",[n("image",{staticClass:"net-error",attrs:{src:"/static/net-error.png"}}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("你的网络出现问题啦")]),t._v(" "),t.clickbtn?n("block",[n("div",{staticClass:"error-btn",attrs:{eventid:"2"},on:{click:t.clickfun}},[t._v("重新加载")])]):t._e()],1):"netLoading"===t.type?n("block",[n("div",{staticClass:"loading"},[n("div",{staticClass:"loader-spin center"},[n("span")]),t._v(" "),n("image",{staticClass:"loading-img",attrs:{src:"/static/bg-ntease.png"}})])]):t._e()],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.a=i},16:function(t,e,n){function a(){var t=wx.getStorageSync("deviceId");if(!t){var e=r.a.parse((new Date).getTime().toString()+Math.random().toString());t=l.a.stringify(e),wx.setStorageSync("deviceId",t)}return t}var o=n(29),i=n.n(o),s=n(30),r=n.n(s),c=n(26),l=n.n(c),d=n(42),u=n.n(d),h=n(43),p=n.n(h),f=n(44),v=n.n(f),m=a(),g=function(){var t=wx.getStorageSync("AESDeviceId");if(!t){t=(new Date).getTime().toString()+Math.random().toString();var e=r.a.parse("neteasenewsboard");t=(t=u.a.encrypt(t,e,{mode:p.a,padding:v.a}).toString()).replace(/\+/g,"%2B"),wx.setStorageSync("AESDeviceId",t)}return t}(),w={request:function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(a||o){var i=o?g:m;-1===t.indexOf("?")?t+="?devId="+i:"?"===t.slice(-1)?t+="devId="+i:t+="&devId="+i}o?wx.requestWithCookie({url:t,success:function(t){e&&e(t)},fail:function(){n&&n()}}):wx.requestWithCookie({url:t,header:{"content-type":"application/json","User-D":m,"User-DID":m},success:function(t){e&&e(t)},fail:function(){n&&n()}})},timeFormat:function(t){var e=Math.floor(t/60),n=t%60;return e=e<10?"0"+e:e,n=n<10?"0"+n:n,e+":"+n},getDeviceId:a,optImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:750,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2147483647,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75;return t?i()(t,e,n,a):"static.ws.126.net/163/frontend/newsapp-wxmp/static/bg-ntease.png"}};e.a=w},17:function(t,e){},18:function(t,e,n){var a=n(1),o=n(9),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.a={name:"login-btn",props:["callback","formType"],computed:i({},Object(a.d)(["user"]),{isLogin:function(){return this.user.isLogin}}),methods:i({},Object(a.c)(["USER"]),{doLogin:function(t){var e=this;this.isLogin?(console.log("已登录"),!this.user.nickname&&this.USER({user:t.target.userInfo}),this.callback&&this.callback()):t.target.userInfo?(wx.showLoading(),console.log("授权"),o.a.login(function(){console.log("login success"),e.USER({user:i({},t.target.userInfo,{isLogin:!0})}),wx.hideLoading(),e.callback&&e.callback()},function(){console.log("login failed"),e.USER({user:i({},t.target.userInfo,{isLogin:!1})}),wx.hideLoading(),e.callback&&e.callback()})):console.log("拒绝授权")}})}},19:function(t,e,n){var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"login-btn",attrs:{"open-type":"getUserInfo","hover-class":"none",formType:t.formType,eventid:"0"},on:{getuserinfo:t.doLogin}},[t._t("default",null,{mpcomid:"0"})],2)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.a=i},2:function(t,e){function n(t){wx.getNetworkType({success:function(e){t(e.networkType)}})}function a(){var t=wx.getSystemInfoSync();return{adt:encodeURIComponent(t.model),scl:t.pixelRatio,scr:t.windowWidth+"x"+t.windowHeight,lg:t.language,fl:t.version,jv:encodeURIComponent(t.system),tz:encodeURIComponent(t.platform)}}function o(){try{return wx.getStorageSync(p.prefix+"auid")}catch(t){}}function i(){try{var t=c();return wx.setStorageSync(p.prefix+"auid",t),t}catch(t){}}function s(){try{return wx.getStorageSync(p.prefix+"ssid")}catch(t){}}function r(){try{var t="s"+c();return wx.setStorageSync(p.prefix+"ssid",t),t}catch(t){}}function c(t){for(var e=[0,1,2,3,4,5,6,7,8,9],n=10;1<n;n--){var a=Math.floor(10*Math.random()),o=e[a];e[a]=e[n-1],e[n-1]=o}for(n=a=0;5>n;n++)a=10*a+e[n];return(t||"")+(a+"")+ +new Date}function l(){try{var t=getCurrentPages(),e="/";return 0<t.length&&(e=t.pop().__route__),e}catch(t){console.log("get current page path error:"+t)}}function d(){var t={dm:"wechat.apps.xx",url:l(),pvi:"",si:"",ty:0};return t.pvi=function(){var e=o();return e||(e=i(),t.ty=1),e}(),t.si=function(){var t=s();return t||(t=r()),t}(),t}function u(){var t=a();return n(function(t){try{wx.setStorageSync(p.prefix+"ntdata",t)}catch(t){}}),t.ct=wx.getStorageSync(p.prefix+"ntdata")||"4g",t}function h(){var t,e=f.Data.userInfo,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t+"="+e[t]);return e=n.join(";"),{r2:p.app_id,r4:"wx",ext:"v="+p.version+(null!==e&&""!==e?";ui="+encodeURIComponent(e):"")}}var p={app_id:"",event_id:"",api_base:"https://pingtas.qq.com/pingd",prefix:"_mta_",version:"1.3.5",stat_share_app:!1,stat_pull_down_fresh:!1,stat_reach_bottom:!1},f={App:{init:function(t){"appID"in t&&(p.app_id=t.appID),"eventID"in t&&(p.event_id=t.eventID),"statShareApp"in t&&(p.stat_share_app=t.statShareApp),"statPullDownFresh"in t&&(p.stat_pull_down_fresh=t.statPullDownFresh),"statReachBottom"in t&&(p.stat_reach_bottom=t.statReachBottom),r(),"lauchOpts"in t&&(f.Data.lanchInfo=t.lauchOpts,f.Data.lanchInfo.landing=1)}},Page:{init:function(){var t=getCurrentPages()[getCurrentPages().length-1];t.onShow&&function(){var e=t.onShow;t.onShow=function(){f.Page.stat(),e.call(this,arguments)}}(),p.stat_pull_down_fresh&&t.onPullDownRefresh&&function(){var e=t.onPullDownRefresh;t.onPullDownRefresh=function(){f.Event.stat(p.prefix+"pulldownfresh",{url:t.__route__}),e.call(this,arguments)}}(),p.stat_reach_bottom&&t.onReachBottom&&function(){var e=t.onReachBottom;t.onReachBottom=function(){f.Event.stat(p.prefix+"reachbottom",{url:t.__route__}),e.call(this,arguments)}}(),p.stat_share_app&&t.onShareAppMessage&&function(){var e=t.onShareAppMessage;t.onShareAppMessage=function(){return f.Event.stat(p.prefix+"shareapp",{url:t.__route__}),e.call(this,arguments)}}()},stat:function(){if(""!=p.app_id){var t=[],e=h(),n=[d(),e,u()];f.Data.lanchInfo&&(n.push({ht:f.Data.lanchInfo.scene,rdm:"/",rurl:f.Data.lanchInfo.path}),f.Data.lanchInfo.query&&f.Data.lanchInfo.query._mta_ref_id&&n.push({rarg:f.Data.lanchInfo.query._mta_ref_id}),1==f.Data.lanchInfo.landing&&(e.ext+=";lp=1",f.Data.lanchInfo.landing=0)),n.push({rand:+new Date}),e=0;for(var a=n.length;e<a;e++)for(var o in n[e])n[e].hasOwnProperty(o)&&t.push(o+"="+(void 0===n[e][o]?"":n[e][o]));wx.request({url:p.api_base+"?"+t.join("&").toLowerCase()})}}},Event:{stat:function(t,e){if(""!=p.event_id){var n=[],a=d(),o=h();a.dm="wxapps.click",a.url=t,o.r2=p.event_id;var i,s=void 0===e?{}:e,r=[];for(i in s)s.hasOwnProperty(i)&&r.push(encodeURIComponent(i)+"="+encodeURIComponent(s[i]));for(s=r.join(";"),o.r5=s,s=0,o=(a=[a,o,u(),{rand:+new Date}]).length;s<o;s++)for(var c in a[s])a[s].hasOwnProperty(c)&&n.push(c+"="+(void 0===a[s][c]?"":a[s][c]));wx.request({url:p.api_base+"?"+n.join("&").toLowerCase()})}}},Data:{userInfo:null,lanchInfo:null}};t.exports=f},20:function(t,e,n){e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=t/1e4;return e>1?e>1e4?(e/1e4).toFixed(1)+"亿":e.toFixed(1)+"万":t}},22:function(t,e,n){var a=n(36),o=n(37),i=!1,s=n(0)(a.a,o.a,function(t){i||n(35)},null,null);s.options.__file="src/components/ShareMoments.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] ShareMoments.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},27:function(t,e,n){var a=n(33),o=n(34),i=!1,s=n(0)(a.a,o.a,function(t){i||n(32)},null,null);s.options.__file="src/components/CollectionBtn.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] CollectionBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},32:function(t,e){},33:function(t,e,n){var a=n(1),o=n(5),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.a={name:"collection-btn",props:{id:{default:""},type:{default:"doc"}},data:function(){return{hasCollected:!1}},watch:{id:function(){this.checkState()}},components:{LoginBtn:o.a},mounted:function(){this.checkState()},computed:i({},Object(a.d)(["user"])),methods:i({},Object(a.c)(["REFRESH_COLLECTION"]),{checkState:function(){if(this.user.isLogin){var t=this;wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/check",data:{contentType:this.type,contentId:this.id},method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){try{t.hasCollected=e.data.data.hasAddFavorite}catch(e){t.hasCollected=!1}}})}},dealCollectionClick:function(){var t=this;this.REFRESH_COLLECTION({needRefreshCollection:!0}),this.hasCollected?wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/cancel",data:{contentType:this.type,contentId:this.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data.data.result&&(t.hasCollected=!1,wx.showToast({title:"已取消收藏",icon:"success",duration:2e3}))},fail:function(){wx.showToast({title:"取消收藏失败",icon:"none",duration:2e3})}}):wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/add",data:{contentType:this.type,contentId:this.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data.data.result&&(t.hasCollected=!0,wx.showToast({title:"收藏成功",icon:"success",duration:2e3}))},fail:function(){wx.showToast({title:"收藏失败",icon:"none",duration:2e3})}})}})}},34:function(t,e,n){var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collection-btn"},[n("div",{class:["icon-star",t.hasCollected?"icon-star-yellow":"icon-star-border"]}),t._v(" "),n("login-btn",{attrs:{callback:t.dealCollectionClick,mpcomid:"0"}})],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.a=i},35:function(t,e){},36:function(e,n,a){var o=a(1),i=a(5),s=a(2),r=a.n(s),c="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)},l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};n.a={name:"share-moments",props:["headImg","title","docid"],data:function(){return{shareDOM:"",saveBtn:{openType:"",state:"",text:"保存"},chosenIndex:void 0,scaleDOMRatio:0,showChoiceBlock:!1,tags:["https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag0.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag1.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag2.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag3.png"]}},computed:l({},Object(o.d)(["deviceInfo","showShareModal","user"])),watch:{showShareModal:function(){this.showShareModal&&(this.resetData(),this.dealShareMomentsClick())}},components:{LoginBtn:i.a},onReady:function(){this.shareDOM=wx.createCanvasContext("share")},onPageScroll:function(){this.showShareModal&&this.closeModal()},methods:l({},Object(o.c)(["MODAL_SHARE"]),Object(o.b)(["getDeviceInfo"]),{dealShareMomentsClick:function(){var t=this,e=this;wx.showLoading({title:"正在生成图片"}),this.getDeviceInfo().then(function(){t.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),t.shareDOM.fillRect(0,0,t.deviceInfo.windowWidth,t.deviceInfo.windowHeight),t.shareDOM.draw()});var n=[this.getHeadImgAsync(this.headImg).then(function(e){return t.getImgCachePath(e)}),this.getImgCachePath(this.user.avatarUrl||"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/default-avatar-new.png"),this.getImgCachePath(this.getQrCodeUrl()),this.getImgCachePath("https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/icon-logo.png")];Promise.all(n).then(function(e){wx.hideLoading(),t.drawCanvasContent({headImg:e[0],avatarImg:e[1],qrCode:e[2],logo:e[3]}),t.showChoiceBlock=!0}).catch(function(t){console.log(t),r.a.Event.stat("error_generate_img",{error:t}),e.showShareModal&&wx.showToast({title:"获取图片失败",icon:"none",duration:1500,success:function(){setTimeout(function(){e.closeModal()},1500)}})})},getQrCodeUrl:function(){var t=getCurrentPages(),e=t[t.length-1],n=this.docid?this.docid:e.options.docid;if(!n){var a=decodeURIComponent(e.options.scene);n=a&&a.split("=")[1]}return"https://taidu.3g.163.com/news-support/weixin/miniprogram/api/getwxacode?scene=docid="+n.replace("|","/")+"&page="+e.route},getHeadImgAsync:function(t){var e="https://static.ws.126.net/163/frontend/newsapp-wxmp/static/common/default-share-img.png";return t?(t=t.replace("http://","https://"),new Promise(function(n){wx.getImageInfo({src:t,success:function(a){if(a.width>=400&&a.width/a.height<=2&&a.width/a.height>=16/15){var o=Math.round(a.width>=750?750:a.width),i=Math.round(o/16*10);n(t+"?imageView&thumbnail="+o+"y"+i)}else n(e)},fail:function(){n(e)}})})):Promise.resolve(e)},getImgCachePath:function(t){return new Promise(function(e,n){wx.downloadFile({url:t,success:function(a){200===a.statusCode?e(a.tempFilePath):(r.a.Event.stat("error_request",{url:t,msg:"非200",filename:t.substring(t.lastIndexOf("/")+1)}),n("请求服务器图片"+t+"出错"))},fail:function(){r.a.Event.stat("error_request",{url:t,msg:"请求失败",filename:t.substring(t.lastIndexOf("/")+1)}),n("微信下载"+t+"失败")}})})},closeModal:function(t){if(this.showShareModal){try{var e=t.mp.currentTarget.dataset.event||"closeModal",n=t.mp.currentTarget.dataset.platform||"";r.a.Event.stat(e,{platform:n})}catch(t){r.a.Event.stat("closeModal",{})}this.MODAL_SHARE({showShareModal:!1}),wx.hideLoading()}},drawCanvasContent:function(t){var e=t.headImg,n=t.avatarImg,a=t.qrCode,o=t.logo;this.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),this.shareDOM.fillRect(0,0,this.deviceInfo.windowWidth,this.deviceInfo.windowHeight),this.shareDOM.draw();var i=this.shareDOM,s=this.deviceInfo.windowWidth/750*1/2;this.scaleDOMRatio=s,i.scale(s,s);var r=this.deviceInfo.windowHeight/s-1884;i.translate(0,r),i.setFillStyle("white"),i.fillRect(32,0,1436,36),i.fillRect(0,32,1500,1852),i.arc(1472,32,32,0,2*Math.PI),i.fill(),i.arc(32,32,32,0,2*Math.PI),i.fill(),i.drawImage(e,310,80,880,550),i.save(),i.beginPath(),i.arc(550,922,30,0,2*Math.PI),i.clip(),i.drawImage(n,520,892,60,60),i.restore(),i.draw(!0),i.setFontSize(52),i.setFillStyle("#333333");var c=this.getTextArr(i,this.title,832);c.length>3?(i.fillText(c[0],334,716,832),i.fillText(c[1].slice(0,-1)+"...",334,794,832)):(i.fillText(c[0],334,716,832),c[1]&&i.fillText(c[1],334,794,832)),i.drawImage(a,334,872,160,160),i.drawImage(o,964,104,206,54),i.setFontSize(36),i.setFillStyle("#000000");var l=i.measureText(this.user.nickName).width;l<288?(i.fillText(this.user.nickName,592,936,l),i.setFillStyle("#666666"),i.fillText("正在读这篇文章",600+l,936,308)):(i.fillText(this.user.nickName.slice(0,7)+"...",592,936,288),i.setFillStyle("#666666"),i.fillText("正在读这篇文章",888,936,308)),i.fillText("长按小程序码，进入",520,1012,336),i.setFillStyle("#EE1A1A"),i.fillText("网易新闻",856,1012,144),i.setFillStyle("#666666"),i.fillText("查看详情",1008,1012,156),i.draw(!0)},saveImg:function(){if("success"!==this.saveBtn.state){r.a.Event.stat("btn_share_save",{});var t=this;this.shareDOM.draw(!0,setTimeout(function(){wx.canvasToTempFilePath({x:155*t.scaleDOMRatio*2,y:t.deviceInfo.windowHeight-902*t.scaleDOMRatio*2,width:440*t.scaleDOMRatio*2,height:501*t.scaleDOMRatio*2,destWidth:750,destHeight:885,canvasId:"share",success:function(e){t.saveImageToPhotos(e.tempFilePath)},fail:function(){r.a.Event.stat("btn_share_save_fail",{}),t.saveBtn={text:"点击重试",state:"fail",openType:""},wx.showToast({title:"保存图片失败",icon:"none",duration:1500}),console.log("canvasToTempFilePath failed")}})},100))}else this.closeModal()},saveImgLater:function(){var t=this;setTimeout(function(){t.saveImg()},300)},saveImageToPhotos:function(t){var e=this;wx.saveImageToPhotosAlbum({filePath:t,success:function(){r.a.Event.stat("btn_share_done",{}),e.saveBtn={text:"我知道了",state:"success"}},fail:function(){r.a.Event.stat("btn_share_fail",{}),!e.saveBtn.openType&&wx.showToast({title:"保存图片失败",icon:"none",duration:1500}),e.saveBtn={text:"点击重试",state:"fail",openType:"openSetting"},console.log("saveImageToPhotosAlbum failed")}})},chooseTag:function(t){var e=this,n=t.mp.target.dataset.index;if(void 0!==n&&parseInt(n,10)!==this.chosenIndex){this.chosenIndex=parseInt(n,10);var a="https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag"+n+".png";this.getImgCachePath(a).then(function(t){e.shareDOM.drawImage(t,914,426,260,260),e.shareDOM.draw(!0)})}},resetData:function(){this.saveBtn={openType:"",state:"",text:"保存"},this.showChoiceBlock=!1,this.chosenIndex=void 0,this.shareDOM&&(this.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),this.shareDOM.fillRect(0,0,this.deviceInfo.windowWidth,this.deviceInfo.windowHeight),this.shareDOM.draw())},getTextArr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments[2];console.log("分享标题类型："+(void 0===e?"undefined":c(e)));for(var a=e.split(""),o=a.length,i=[],s="",r=0;r<o;r++)t.measureText(s).width<n?s+=a[r]:(i.push(s),s=a[r]);return s&&i.push(s),i}})}},37:function(t,e,n){var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showShareModal?n("div",{staticClass:"bottom-share"},[n("canvas",{staticClass:"canvas",attrs:{"canvas-id":"share","data-event":"btn-share-close",eventid:"5"},on:{touchmove:t.closeModal}},["success"===t.saveBtn.state?n("cover-view",{staticClass:"img-part",attrs:{mpcomid:"11"}},[n("cover-image",{staticClass:"close",attrs:{src:"/static/icon-close.png",eventid:"0",mpcomid:"0"},on:{click:t.closeModal}}),t._v(" "),n("cover-image",{staticClass:"img-rect",attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/share-border1.png",mpcomid:"1"}}),t._v(" "),n("cover-view",{staticClass:"success-hint",attrs:{mpcomid:"2"}},[t._v("已保存至相册，快去分享吧")]),t._v(" "),n("button",{staticClass:"btn-red",attrs:{"hover-class":"none",eventid:"1"},on:{click:t.closeModal}},[t._v("我知道了")])],1):t.showChoiceBlock?n("cover-view",{staticClass:"img-part",attrs:{mpcomid:"10"}},[n("cover-image",{staticClass:"close",attrs:{src:"/static/icon-close.png",eventid:"2",mpcomid:"3"},on:{click:function(e){e.preventDefault(),t.closeModal(e)}}}),t._v(" "),n("cover-image",{staticClass:"img-rect",attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/share-border1.png",mpcomid:"4"}}),t._v(" "),n("cover-view",{staticClass:"hint",attrs:{mpcomid:"5"}},[t._v("点击标签，为你的分享加个态度吧!")]),t._v(" "),n("cover-view",{staticClass:"choices",attrs:{eventid:"3",mpcomid:"7"},on:{click:t.chooseTag}},t._l(t.tags,function(t,e){return n("cover-image",{key:e,attrs:{src:t,"data-index":e,mpcomid:"6-"+e}})})),t._v(" "),n("cover-image",{class:"chosen chosen-"+t.chosenIndex,attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/icon-chosen.png",mpcomid:"8"}}),t._v(" "),n("button",{staticClass:"btn-red",attrs:{"hover-class":"none","open-type":t.saveBtn.openType,eventid:"4"},on:{click:t.saveImg,opensetting:t.saveImgLater}},[n("cover-view",{attrs:{mpcomid:"9"}},[t._v(t._s(t.saveBtn.text))])],1)],1):t._e()],1)]):t._e()},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.a=i},4:function(t,e,n){e.a=function(t,e){function n(t,e){var n={small:"234x146",normal:"330x2147483647",large:"320x120",articleNormal:r,largeCover:"750x318",littleCover:"375x288"};e?(i=n[e].split("x")[0],s=n[e].split("x")[1]):(i=320,s=260);var a=void 0,o=t?t.split("*")[0]:i,c=void 0,l=t?t.split("*")[1]:s;return o/l>i/s?(a=i,c=Math.round(i/o*l)):o/l<i/s?(a=i,c=Math.round(i/o*l)):(c=s,a=i),a+"x"+c}t&&""!=t.src||(t={src:"http://static.ws.126.net/utf8/3g/touch/images/share-logo.png"});var a=["s.cimg.163.com","nimg.ws.126.net"],o=/(\.jpg)|(\.jpeg)|(\.webp)|(\.png)/i,i=void 0,s=void 0,r="346x260";wx.getSystemInfo({success:function(t){var e=t.windowWidth;r=e-30*e/375+"x260"}});var c=void 0,l=t.imgsrc?t.imgsrc.replace(/\s/g,""):t.src,d=t.pixel,u=n(d,e).split("x"),h=l.match(o)?l.match(o)[0].replace(".",""):"jpg",p=a.indexOf(l.match(/http:\/\/(.*?)\//)[1]),f="articleNormal"==e?"640x10000":n(d,e);return c=-1==p&&h?"http://nimg.ws.126.net/?url="+l+"&thumbnail="+f+"&quality=95&type="+h:l,{alt:t.alt,src:c,width:u[0],height:u[1]}}},5:function(t,e,n){var a=n(18),o=n(19),i=!1,s=n(0)(a.a,o.a,function(t){i||n(17)},"data-v-9e0ce8de",null);s.options.__file="src/components/base/LoginBtn.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] LoginBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},6:function(t,e,n){var a=n(3),o=n.n(a),i=n(25);o.a.use(i.a),e.a={}},7:function(t,e,n){var a=n(3),o=n.n(a),i=n(1),s=n(8),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};o.a.use(i.a);var c=new i.a.Store(r({strict:!0},s.a));e.a=c},8:function(t,e,n){function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var i,s=n(9),r=n(4),c={state:{showOpenNewsApp:!1,deviceInfo:{isIOS:!1,isIphoneX:!1,hasFringe:!1,statusBar24:!0,windowHeight:0,windowWidth:0},user:{isLogin:"",provinceChinese:"北京",cityChinese:"北京",lastVisitTime:0},needRefreshCollection:!1,showDownloadModal:!1,showShareModal:!1,navLinkData:{toutiao:[],yule:[],tiyu:[],bendi:[],caijin:[],keji:[],fangchan:[],dujia:[],lishi:[],xiangguantuijian:[]},markReadDocIds:[]},mutations:(i={},a(i,"SHOW_OPEN_NEWS_APP",function(t,e){var n=[1036,1069];t.showOpenNewsApp=-1!==n.indexOf(e.scene)}),a(i,"DEVICE_INFO",function(t,e){t.deviceInfo=e.data}),a(i,"USER",function(t,e){t.user=Object.assign(t.user,e.user),console.log(t.user)}),a(i,"REFRESH_COLLECTION",function(t,e){t.needRefreshCollection=e.needRefreshCollection}),a(i,"MODAL_DOWNLOAD",function(t,e){t.showDownloadModal=e.showDownloadModal}),a(i,"MODAL_SHARE",function(t,e){t.showShareModal=e.showShareModal}),a(i,"NAVLINK_CLASS",function(t,e){t.navLinkData=e.data}),a(i,"MARK_READ",function(t,e){"String"===e.type?!t.markReadDocIds.indexOf(e.data)>-1&&(t.markReadDocIds=[].concat(o(t.markReadDocIds),[e.data]).slice(-200)):t.markReadDocIds=[].concat(o(new Set([].concat(o(t.markReadDocIds),o(e.data))))).slice(-200)}),i),actions:{initLoginData:function(t){var e=t.commit;return new Promise(function(t){s.a.login(function(t){console.log("login success "),e({type:"USER",user:{isLogin:!0,avatarUrl:t.avatarUrl,nickName:t.nickName}})},function(){e({type:"USER",user:{isLogin:!1}}),t(),console.log("login failure")})})},getDeviceInfo:function(t){var e=t.commit,n=t.state;return new Promise(function(t){var a=wx.getSystemInfoSync();n.deviceInfo.windowHeight===a.windowHeight?t():(console.log("设备信息"),console.log(a)),e(/IOS/gi.test(a.system)?{type:"DEVICE_INFO",data:{isIOS:!0,isIphoneX:/iPhone X/gi.test(a.model),windowHeight:a.windowHeight,windowWidth:a.windowWidth,hasFringe:a.statusBarHeight>24,statusBar24:24===a.statusBarHeight}}:{type:"DEVICE_INFO",data:{isIOS:!1,windowHeight:a.windowHeight,windowWidth:a.windowWidth,hasFringe:a.statusBarHeight>26,statusBar24:a.statusBarHeight>=22&&a.statusBarHeight<=26}}),t()})},getNavLinkData:function(t){var e=t.commit;wx.requestWithCookie({url:"https://c.m.163.com/ug/api/happynuts/app/advert/app-info",success:function(t){var n=t.data.data;for(var a in n)n[a].map(function(t){t.appId=t.appId?t.appId:"wx6664983624b1a9aa",t.url=t.url,t.imgsrc=Object(r.a)({src:t.imgSrc},"normal").src,t.type="nav_link"});e({type:"NAVLINK_CLASS",data:n})}})}}};e.a=c}},[171]); 
 			}); 	require("pages/Videos.js");
 		__wxRoute = 'pages/video/video';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/video/video.js';	define("pages/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};require("../../9FA2E4459104369CF9C48C4278C17C83.js"),global.webpackJsonp([2],[,,function(t,e){function o(t){wx.getNetworkType({success:function(e){t(e.networkType)}})}function n(){var t=wx.getSystemInfoSync();return{adt:encodeURIComponent(t.model),scl:t.pixelRatio,scr:t.windowWidth+"x"+t.windowHeight,lg:t.language,fl:t.version,jv:encodeURIComponent(t.system),tz:encodeURIComponent(t.platform)}}function a(){try{return wx.getStorageSync(h.prefix+"auid")}catch(t){}}function s(){try{var t=c();return wx.setStorageSync(h.prefix+"auid",t),t}catch(t){}}function i(){try{return wx.getStorageSync(h.prefix+"ssid")}catch(t){}}function r(){try{var t="s"+c();return wx.setStorageSync(h.prefix+"ssid",t),t}catch(t){}}function c(t){for(var e=[0,1,2,3,4,5,6,7,8,9],o=10;1<o;o--){var n=Math.floor(10*Math.random()),a=e[n];e[n]=e[o-1],e[o-1]=a}for(o=n=0;5>o;o++)n=10*n+e[o];return(t||"")+(n+"")+ +new Date}function l(){try{var t=getCurrentPages(),e="/";return 0<t.length&&(e=t.pop().__route__),e}catch(t){console.log("get current page path error:"+t)}}function d(){var t={dm:"wechat.apps.xx",url:l(),pvi:"",si:"",ty:0};return t.pvi=function(){var e=a();return e||(e=s(),t.ty=1),e}(),t.si=function(){var t=i();return t||(t=r()),t}(),t}function u(){var t=n();return o(function(t){try{wx.setStorageSync(h.prefix+"ntdata",t)}catch(t){}}),t.ct=wx.getStorageSync(h.prefix+"ntdata")||"4g",t}function p(){var t,e=f.Data.userInfo,o=[];for(t in e)e.hasOwnProperty(t)&&o.push(t+"="+e[t]);return e=o.join(";"),{r2:h.app_id,r4:"wx",ext:"v="+h.version+(null!==e&&""!==e?";ui="+encodeURIComponent(e):"")}}var h={app_id:"",event_id:"",api_base:"https://pingtas.qq.com/pingd",prefix:"_mta_",version:"1.3.5",stat_share_app:!1,stat_pull_down_fresh:!1,stat_reach_bottom:!1},f={App:{init:function(t){"appID"in t&&(h.app_id=t.appID),"eventID"in t&&(h.event_id=t.eventID),"statShareApp"in t&&(h.stat_share_app=t.statShareApp),"statPullDownFresh"in t&&(h.stat_pull_down_fresh=t.statPullDownFresh),"statReachBottom"in t&&(h.stat_reach_bottom=t.statReachBottom),r(),"lauchOpts"in t&&(f.Data.lanchInfo=t.lauchOpts,f.Data.lanchInfo.landing=1)}},Page:{init:function(){var t=getCurrentPages()[getCurrentPages().length-1];t.onShow&&function(){var e=t.onShow;t.onShow=function(){f.Page.stat(),e.call(this,arguments)}}(),h.stat_pull_down_fresh&&t.onPullDownRefresh&&function(){var e=t.onPullDownRefresh;t.onPullDownRefresh=function(){f.Event.stat(h.prefix+"pulldownfresh",{url:t.__route__}),e.call(this,arguments)}}(),h.stat_reach_bottom&&t.onReachBottom&&function(){var e=t.onReachBottom;t.onReachBottom=function(){f.Event.stat(h.prefix+"reachbottom",{url:t.__route__}),e.call(this,arguments)}}(),h.stat_share_app&&t.onShareAppMessage&&function(){var e=t.onShareAppMessage;t.onShareAppMessage=function(){return f.Event.stat(h.prefix+"shareapp",{url:t.__route__}),e.call(this,arguments)}}()},stat:function(){if(""!=h.app_id){var t=[],e=p(),o=[d(),e,u()];f.Data.lanchInfo&&(o.push({ht:f.Data.lanchInfo.scene,rdm:"/",rurl:f.Data.lanchInfo.path}),f.Data.lanchInfo.query&&f.Data.lanchInfo.query._mta_ref_id&&o.push({rarg:f.Data.lanchInfo.query._mta_ref_id}),1==f.Data.lanchInfo.landing&&(e.ext+=";lp=1",f.Data.lanchInfo.landing=0)),o.push({rand:+new Date}),e=0;for(var n=o.length;e<n;e++)for(var a in o[e])o[e].hasOwnProperty(a)&&t.push(a+"="+(void 0===o[e][a]?"":o[e][a]));wx.request({url:h.api_base+"?"+t.join("&").toLowerCase()})}}},Event:{stat:function(t,e){if(""!=h.event_id){var o=[],n=d(),a=p();n.dm="wxapps.click",n.url=t,a.r2=h.event_id;var s,i=void 0===e?{}:e,r=[];for(s in i)i.hasOwnProperty(s)&&r.push(encodeURIComponent(s)+"="+encodeURIComponent(i[s]));for(i=r.join(";"),a.r5=i,i=0,a=(n=[n,a,u(),{rand:+new Date}]).length;i<a;i++)for(var c in n[i])n[i].hasOwnProperty(c)&&o.push(c+"="+(void 0===n[i][c]?"":n[i][c]));wx.request({url:h.api_base+"?"+o.join("&").toLowerCase()})}}},Data:{userInfo:null,lanchInfo:null}};t.exports=f},,function(t,e,o){e.a=function(t,e){function o(t,e){var o={small:"234x146",normal:"330x2147483647",large:"320x120",articleNormal:r,largeCover:"750x318",littleCover:"375x288"};e?(s=o[e].split("x")[0],i=o[e].split("x")[1]):(s=320,i=260);var n=void 0,a=t?t.split("*")[0]:s,c=void 0,l=t?t.split("*")[1]:i;return a/l>s/i?(n=s,c=Math.round(s/a*l)):a/l<s/i?(n=s,c=Math.round(s/a*l)):(c=i,n=s),n+"x"+c}t&&""!=t.src||(t={src:"http://static.ws.126.net/utf8/3g/touch/images/share-logo.png"});var n=["s.cimg.163.com","nimg.ws.126.net"],a=/(\.jpg)|(\.jpeg)|(\.webp)|(\.png)/i,s=void 0,i=void 0,r="346x260";wx.getSystemInfo({success:function(t){var e=t.windowWidth;r=e-30*e/375+"x260"}});var c=void 0,l=t.imgsrc?t.imgsrc.replace(/\s/g,""):t.src,d=t.pixel,u=o(d,e).split("x"),p=l.match(a)?l.match(a)[0].replace(".",""):"jpg",h=n.indexOf(l.match(/http:\/\/(.*?)\//)[1]),f="articleNormal"==e?"640x10000":o(d,e);return c=-1==h&&p?"http://nimg.ws.126.net/?url="+l+"&thumbnail="+f+"&quality=95&type="+p:l,{alt:t.alt,src:c,width:u[0],height:u[1]}}},function(t,e,o){var n=o(18),a=o(19),s=!1,i=o(0)(n.a,a.a,function(t){s||o(17)},"data-v-9e0ce8de",null);i.options.__file="src/components/base/LoginBtn.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] LoginBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e,o){var n=o(3),a=o.n(n),s=o(25);a.a.use(s.a),e.a={}},function(t,e,o){var n=o(3),a=o.n(n),s=o(1),i=o(8),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};a.a.use(s.a);var c=new s.a.Store(r({strict:!0},i.a));e.a=c},function(t,e,o){function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}var s,i=o(9),r=o(4),c={state:{showOpenNewsApp:!1,deviceInfo:{isIOS:!1,isIphoneX:!1,hasFringe:!1,statusBar24:!0,windowHeight:0,windowWidth:0},user:{isLogin:"",provinceChinese:"北京",cityChinese:"北京",lastVisitTime:0},needRefreshCollection:!1,showDownloadModal:!1,showShareModal:!1,navLinkData:{toutiao:[],yule:[],tiyu:[],bendi:[],caijin:[],keji:[],fangchan:[],dujia:[],lishi:[],xiangguantuijian:[]},markReadDocIds:[]},mutations:(s={},n(s,"SHOW_OPEN_NEWS_APP",function(t,e){var o=[1036,1069];t.showOpenNewsApp=-1!==o.indexOf(e.scene)}),n(s,"DEVICE_INFO",function(t,e){t.deviceInfo=e.data}),n(s,"USER",function(t,e){t.user=Object.assign(t.user,e.user),console.log(t.user)}),n(s,"REFRESH_COLLECTION",function(t,e){t.needRefreshCollection=e.needRefreshCollection}),n(s,"MODAL_DOWNLOAD",function(t,e){t.showDownloadModal=e.showDownloadModal}),n(s,"MODAL_SHARE",function(t,e){t.showShareModal=e.showShareModal}),n(s,"NAVLINK_CLASS",function(t,e){t.navLinkData=e.data}),n(s,"MARK_READ",function(t,e){"String"===e.type?!t.markReadDocIds.indexOf(e.data)>-1&&(t.markReadDocIds=[].concat(a(t.markReadDocIds),[e.data]).slice(-200)):t.markReadDocIds=[].concat(a(new Set([].concat(a(t.markReadDocIds),a(e.data))))).slice(-200)}),s),actions:{initLoginData:function(t){var e=t.commit;return new Promise(function(t){i.a.login(function(t){console.log("login success "),e({type:"USER",user:{isLogin:!0,avatarUrl:t.avatarUrl,nickName:t.nickName}})},function(){e({type:"USER",user:{isLogin:!1}}),t(),console.log("login failure")})})},getDeviceInfo:function(t){var e=t.commit,o=t.state;return new Promise(function(t){var n=wx.getSystemInfoSync();o.deviceInfo.windowHeight===n.windowHeight?t():(console.log("设备信息"),console.log(n)),e(/IOS/gi.test(n.system)?{type:"DEVICE_INFO",data:{isIOS:!0,isIphoneX:/iPhone X/gi.test(n.model),windowHeight:n.windowHeight,windowWidth:n.windowWidth,hasFringe:n.statusBarHeight>24,statusBar24:24===n.statusBarHeight}}:{type:"DEVICE_INFO",data:{isIOS:!1,windowHeight:n.windowHeight,windowWidth:n.windowWidth,hasFringe:n.statusBarHeight>26,statusBar24:n.statusBarHeight>=22&&n.statusBarHeight<=26}}),t()})},getNavLinkData:function(t){var e=t.commit;wx.requestWithCookie({url:"https://c.m.163.com/ug/api/happynuts/app/advert/app-info",success:function(t){var o=t.data.data;for(var n in o)o[n].map(function(t){t.appId=t.appId?t.appId:"wx6664983624b1a9aa",t.url=t.url,t.imgsrc=Object(r.a)({src:t.imgSrc},"normal").src,t.type="nav_link"});e({type:"NAVLINK_CLASS",data:o})}})}}};e.a=c},,function(t,e){t.exports={tabs:[{name:"热榜",tid:"hotpost"},{name:"头条",tid:"toutiao"},{name:"娱乐",url:"",tid:"T1348648517839"},{name:"体育",url:"",tid:"T1348649079062"},{name:"本地",url:""},{name:"科技",tid:"T1348649580692",url:""},{name:"财经",tid:"T1348648756099",url:""},{name:"独家",type:"common",tid:"T1370583240249",url:""},{name:"历史",type:"common",tid:"T1368497029546"},{name:"军事",type:"common",tid:"T1348648141035",url:""},{name:"汽车",type:"common",tid:"T1348654060988",url:""},{name:"房产",type:"common",tid:"T1348654085632",url:""},{name:"数码",type:"common",tid:"T1348649776727",url:""}],api:{article:"https://c.m.163.com/nc/article/{{docid}}/full.html",video:"https://c.m.163.com/nc/video/detail/{{id}}.html",photo:"https://c.m.163.com/photo/api/set/{{cid}}/{{sid}}.json",commonlist:"https://c.m.163.com/nc/article/list/{{tid}}/{{start}}-10.html",dynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/headline-list",channeldynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/normal-list",localList:"https://c.m.163.com/dlist/article/local/dynamic",video_list:"https://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&subtab={{subtab}}&size={{pageSize}}&offset={{offset}}",video_related_list:"https://c.m.163.com/releate/video/dynamic?videoid={{id}}&appname=xiaochengxu",favorite_list:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite?pageNo={{pageNo}}",favorite_add:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/add",favorite_cancel:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/cancel",favorite_check:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/check",hot_postlist:"https://taidu.3g.163.com/news-support/weixin/miniprogram/comment/hotList"},allowType:["video","article","doc"],topNewsTag:"S",topNewsTag2:"S+"}},,function(t,e,o){var n=o(14),a=o(15),s=!1,i=o(0)(n.a,a.a,function(t){s||o(13)},null,null);i.options.__file="src/components/PageError.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] PageError.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,o){e.a={name:"page-error",props:{type:String,clickfun:Function,clickbtn:Boolean},methods:{back:function(){getCurrentPages().length<2?wx.switchTab({url:"/pages/Home"}):wx.navigateBack()}}}},function(t,e,o){var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-error"},["dataError"===t.type?o("block",[o("div",{staticClass:"empty"}),t._v(" "),o("div",{staticClass:"error-info"},[t._v("此页面内容没有了")]),t._v(" "),o("div",{staticClass:"error-btn",attrs:{eventid:"0"},on:{click:t.back}},[t._v("返回")])]):t._e(),t._v(" "),"emptyComment"===t.type?o("block",[o("div",{staticClass:"empty-comment"}),t._v(" "),o("div",{staticClass:"error-info"},[t._v("暂无跟贴")]),t._v(" "),o("div",{staticClass:"error-btn",attrs:{eventid:"1"},on:{click:t.back}},[t._v("返回")])]):"netError"===t.type?o("block",[o("image",{staticClass:"net-error",attrs:{src:"/static/net-error.png"}}),t._v(" "),o("div",{staticClass:"error-info"},[t._v("你的网络出现问题啦")]),t._v(" "),t.clickbtn?o("block",[o("div",{staticClass:"error-btn",attrs:{eventid:"2"},on:{click:t.clickfun}},[t._v("重新加载")])]):t._e()],1):"netLoading"===t.type?o("block",[o("div",{staticClass:"loading"},[o("div",{staticClass:"loader-spin center"},[o("span")]),t._v(" "),o("image",{staticClass:"loading-img",attrs:{src:"/static/bg-ntease.png"}})])]):t._e()],1)},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},function(t,e,o){function n(){var t=wx.getStorageSync("deviceId");if(!t){var e=r.a.parse((new Date).getTime().toString()+Math.random().toString());t=l.a.stringify(e),wx.setStorageSync("deviceId",t)}return t}var a=o(29),s=o.n(a),i=o(30),r=o.n(i),c=o(26),l=o.n(c),d=o(42),u=o.n(d),p=o(43),h=o.n(p),f=o(44),v=o.n(f),m=n(),g=function(){var t=wx.getStorageSync("AESDeviceId");if(!t){t=(new Date).getTime().toString()+Math.random().toString();var e=r.a.parse("neteasenewsboard");t=(t=u.a.encrypt(t,e,{mode:h.a,padding:v.a}).toString()).replace(/\+/g,"%2B"),wx.setStorageSync("AESDeviceId",t)}return t}(),w={request:function(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(n||a){var s=a?g:m;-1===t.indexOf("?")?t+="?devId="+s:"?"===t.slice(-1)?t+="devId="+s:t+="&devId="+s}a?wx.requestWithCookie({url:t,success:function(t){e&&e(t)},fail:function(){o&&o()}}):wx.requestWithCookie({url:t,header:{"content-type":"application/json","User-D":m,"User-DID":m},success:function(t){e&&e(t)},fail:function(){o&&o()}})},timeFormat:function(t){var e=Math.floor(t/60),o=t%60;return e=e<10?"0"+e:e,o=o<10?"0"+o:o,e+":"+o},getDeviceId:n,optImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:750,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2147483647,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75;return t?s()(t,e,o,n):"static.ws.126.net/163/frontend/newsapp-wxmp/static/bg-ntease.png"}};e.a=w},function(t,e){},function(t,e,o){var n=o(1),a=o(9),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};e.a={name:"login-btn",props:["callback","formType"],computed:s({},Object(n.d)(["user"]),{isLogin:function(){return this.user.isLogin}}),methods:s({},Object(n.c)(["USER"]),{doLogin:function(t){var e=this;this.isLogin?(console.log("已登录"),!this.user.nickname&&this.USER({user:t.target.userInfo}),this.callback&&this.callback()):t.target.userInfo?(wx.showLoading(),console.log("授权"),a.a.login(function(){console.log("login success"),e.USER({user:s({},t.target.userInfo,{isLogin:!0})}),wx.hideLoading(),e.callback&&e.callback()},function(){console.log("login failed"),e.USER({user:s({},t.target.userInfo,{isLogin:!1})}),wx.hideLoading(),e.callback&&e.callback()})):console.log("拒绝授权")}})}},function(t,e,o){var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"login-btn",attrs:{"open-type":"getUserInfo","hover-class":"none",formType:t.formType,eventid:"0"},on:{getuserinfo:t.doLogin}},[t._t("default",null,{mpcomid:"0"})],2)},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},function(t,e,o){e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=t/1e4;return e>1?e>1e4?(e/1e4).toFixed(1)+"亿":e.toFixed(1)+"万":t}},,function(t,e,o){var n=o(36),a=o(37),s=!1,i=o(0)(n.a,a.a,function(t){s||o(35)},null,null);i.options.__file="src/components/ShareMoments.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] ShareMoments.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e,o){var n=o(53),a=o(54),s=!1,i=o(0)(n.a,a.a,function(t){s||o(52)},"data-v-b723dbb0",null);i.options.__file="src/components/base/ShareBtns.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] ShareBtns.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},,,,function(t,e,o){var n=o(33),a=o(34),s=!1,i=o(0)(n.a,a.a,function(t){s||o(32)},null,null);i.options.__file="src/components/CollectionBtn.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] CollectionBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e,o){var n=o(57),a=o(58),s=!1,i=o(0)(n.a,a.a,function(t){s||o(56)},null,null);i.options.__file="src/components/base/LaunchBtn.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] LaunchBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},,,,function(t,e){},function(t,e,o){var n=o(1),a=o(5),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};e.a={name:"collection-btn",props:{id:{default:""},type:{default:"doc"}},data:function(){return{hasCollected:!1}},watch:{id:function(){this.checkState()}},components:{LoginBtn:a.a},mounted:function(){this.checkState()},computed:s({},Object(n.d)(["user"])),methods:s({},Object(n.c)(["REFRESH_COLLECTION"]),{checkState:function(){if(this.user.isLogin){var t=this;wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/check",data:{contentType:this.type,contentId:this.id},method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){try{t.hasCollected=e.data.data.hasAddFavorite}catch(e){t.hasCollected=!1}}})}},dealCollectionClick:function(){var t=this;this.REFRESH_COLLECTION({needRefreshCollection:!0}),this.hasCollected?wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/cancel",data:{contentType:this.type,contentId:this.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data.data.result&&(t.hasCollected=!1,wx.showToast({title:"已取消收藏",icon:"success",duration:2e3}))},fail:function(){wx.showToast({title:"取消收藏失败",icon:"none",duration:2e3})}}):wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/add",data:{contentType:this.type,contentId:this.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data.data.result&&(t.hasCollected=!0,wx.showToast({title:"收藏成功",icon:"success",duration:2e3}))},fail:function(){wx.showToast({title:"收藏失败",icon:"none",duration:2e3})}})}})}},function(t,e,o){var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"collection-btn"},[o("div",{class:["icon-star",t.hasCollected?"icon-star-yellow":"icon-star-border"]}),t._v(" "),o("login-btn",{attrs:{callback:t.dealCollectionClick,mpcomid:"0"}})],1)},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},function(t,e){},function(e,o,n){var a=n(1),s=n(5),i=n(2),r=n.n(i),c="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)},l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};o.a={name:"share-moments",props:["headImg","title","docid"],data:function(){return{shareDOM:"",saveBtn:{openType:"",state:"",text:"保存"},chosenIndex:void 0,scaleDOMRatio:0,showChoiceBlock:!1,tags:["https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag0.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag1.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag2.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag3.png"]}},computed:l({},Object(a.d)(["deviceInfo","showShareModal","user"])),watch:{showShareModal:function(){this.showShareModal&&(this.resetData(),this.dealShareMomentsClick())}},components:{LoginBtn:s.a},onReady:function(){this.shareDOM=wx.createCanvasContext("share")},onPageScroll:function(){this.showShareModal&&this.closeModal()},methods:l({},Object(a.c)(["MODAL_SHARE"]),Object(a.b)(["getDeviceInfo"]),{dealShareMomentsClick:function(){var t=this,e=this;wx.showLoading({title:"正在生成图片"}),this.getDeviceInfo().then(function(){t.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),t.shareDOM.fillRect(0,0,t.deviceInfo.windowWidth,t.deviceInfo.windowHeight),t.shareDOM.draw()});var o=[this.getHeadImgAsync(this.headImg).then(function(e){return t.getImgCachePath(e)}),this.getImgCachePath(this.user.avatarUrl||"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/default-avatar-new.png"),this.getImgCachePath(this.getQrCodeUrl()),this.getImgCachePath("https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/icon-logo.png")];Promise.all(o).then(function(e){wx.hideLoading(),t.drawCanvasContent({headImg:e[0],avatarImg:e[1],qrCode:e[2],logo:e[3]}),t.showChoiceBlock=!0}).catch(function(t){console.log(t),r.a.Event.stat("error_generate_img",{error:t}),e.showShareModal&&wx.showToast({title:"获取图片失败",icon:"none",duration:1500,success:function(){setTimeout(function(){e.closeModal()},1500)}})})},getQrCodeUrl:function(){var t=getCurrentPages(),e=t[t.length-1],o=this.docid?this.docid:e.options.docid;if(!o){var n=decodeURIComponent(e.options.scene);o=n&&n.split("=")[1]}return"https://taidu.3g.163.com/news-support/weixin/miniprogram/api/getwxacode?scene=docid="+o.replace("|","/")+"&page="+e.route},getHeadImgAsync:function(t){var e="https://static.ws.126.net/163/frontend/newsapp-wxmp/static/common/default-share-img.png";return t?(t=t.replace("http://","https://"),new Promise(function(o){wx.getImageInfo({src:t,success:function(n){if(n.width>=400&&n.width/n.height<=2&&n.width/n.height>=16/15){var a=Math.round(n.width>=750?750:n.width),s=Math.round(a/16*10);o(t+"?imageView&thumbnail="+a+"y"+s)}else o(e)},fail:function(){o(e)}})})):Promise.resolve(e)},getImgCachePath:function(t){return new Promise(function(e,o){wx.downloadFile({url:t,success:function(n){200===n.statusCode?e(n.tempFilePath):(r.a.Event.stat("error_request",{url:t,msg:"非200",filename:t.substring(t.lastIndexOf("/")+1)}),o("请求服务器图片"+t+"出错"))},fail:function(){r.a.Event.stat("error_request",{url:t,msg:"请求失败",filename:t.substring(t.lastIndexOf("/")+1)}),o("微信下载"+t+"失败")}})})},closeModal:function(t){if(this.showShareModal){try{var e=t.mp.currentTarget.dataset.event||"closeModal",o=t.mp.currentTarget.dataset.platform||"";r.a.Event.stat(e,{platform:o})}catch(t){r.a.Event.stat("closeModal",{})}this.MODAL_SHARE({showShareModal:!1}),wx.hideLoading()}},drawCanvasContent:function(t){var e=t.headImg,o=t.avatarImg,n=t.qrCode,a=t.logo;this.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),this.shareDOM.fillRect(0,0,this.deviceInfo.windowWidth,this.deviceInfo.windowHeight),this.shareDOM.draw();var s=this.shareDOM,i=this.deviceInfo.windowWidth/750*1/2;this.scaleDOMRatio=i,s.scale(i,i);var r=this.deviceInfo.windowHeight/i-1884;s.translate(0,r),s.setFillStyle("white"),s.fillRect(32,0,1436,36),s.fillRect(0,32,1500,1852),s.arc(1472,32,32,0,2*Math.PI),s.fill(),s.arc(32,32,32,0,2*Math.PI),s.fill(),s.drawImage(e,310,80,880,550),s.save(),s.beginPath(),s.arc(550,922,30,0,2*Math.PI),s.clip(),s.drawImage(o,520,892,60,60),s.restore(),s.draw(!0),s.setFontSize(52),s.setFillStyle("#333333");var c=this.getTextArr(s,this.title,832);c.length>3?(s.fillText(c[0],334,716,832),s.fillText(c[1].slice(0,-1)+"...",334,794,832)):(s.fillText(c[0],334,716,832),c[1]&&s.fillText(c[1],334,794,832)),s.drawImage(n,334,872,160,160),s.drawImage(a,964,104,206,54),s.setFontSize(36),s.setFillStyle("#000000");var l=s.measureText(this.user.nickName).width;l<288?(s.fillText(this.user.nickName,592,936,l),s.setFillStyle("#666666"),s.fillText("正在读这篇文章",600+l,936,308)):(s.fillText(this.user.nickName.slice(0,7)+"...",592,936,288),s.setFillStyle("#666666"),s.fillText("正在读这篇文章",888,936,308)),s.fillText("长按小程序码，进入",520,1012,336),s.setFillStyle("#EE1A1A"),s.fillText("网易新闻",856,1012,144),s.setFillStyle("#666666"),s.fillText("查看详情",1008,1012,156),s.draw(!0)},saveImg:function(){if("success"!==this.saveBtn.state){r.a.Event.stat("btn_share_save",{});var t=this;this.shareDOM.draw(!0,setTimeout(function(){wx.canvasToTempFilePath({x:155*t.scaleDOMRatio*2,y:t.deviceInfo.windowHeight-902*t.scaleDOMRatio*2,width:440*t.scaleDOMRatio*2,height:501*t.scaleDOMRatio*2,destWidth:750,destHeight:885,canvasId:"share",success:function(e){t.saveImageToPhotos(e.tempFilePath)},fail:function(){r.a.Event.stat("btn_share_save_fail",{}),t.saveBtn={text:"点击重试",state:"fail",openType:""},wx.showToast({title:"保存图片失败",icon:"none",duration:1500}),console.log("canvasToTempFilePath failed")}})},100))}else this.closeModal()},saveImgLater:function(){var t=this;setTimeout(function(){t.saveImg()},300)},saveImageToPhotos:function(t){var e=this;wx.saveImageToPhotosAlbum({filePath:t,success:function(){r.a.Event.stat("btn_share_done",{}),e.saveBtn={text:"我知道了",state:"success"}},fail:function(){r.a.Event.stat("btn_share_fail",{}),!e.saveBtn.openType&&wx.showToast({title:"保存图片失败",icon:"none",duration:1500}),e.saveBtn={text:"点击重试",state:"fail",openType:"openSetting"},console.log("saveImageToPhotosAlbum failed")}})},chooseTag:function(t){var e=this,o=t.mp.target.dataset.index;if(void 0!==o&&parseInt(o,10)!==this.chosenIndex){this.chosenIndex=parseInt(o,10);var n="https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag"+o+".png";this.getImgCachePath(n).then(function(t){e.shareDOM.drawImage(t,914,426,260,260),e.shareDOM.draw(!0)})}},resetData:function(){this.saveBtn={openType:"",state:"",text:"保存"},this.showChoiceBlock=!1,this.chosenIndex=void 0,this.shareDOM&&(this.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),this.shareDOM.fillRect(0,0,this.deviceInfo.windowWidth,this.deviceInfo.windowHeight),this.shareDOM.draw())},getTextArr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments[2];console.log("分享标题类型："+(void 0===e?"undefined":c(e)));for(var n=e.split(""),a=n.length,s=[],i="",r=0;r<a;r++)t.measureText(i).width<o?i+=n[r]:(s.push(i),i=n[r]);return i&&s.push(i),s}})}},function(t,e,o){var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showShareModal?o("div",{staticClass:"bottom-share"},[o("canvas",{staticClass:"canvas",attrs:{"canvas-id":"share","data-event":"btn-share-close",eventid:"5"},on:{touchmove:t.closeModal}},["success"===t.saveBtn.state?o("cover-view",{staticClass:"img-part",attrs:{mpcomid:"11"}},[o("cover-image",{staticClass:"close",attrs:{src:"/static/icon-close.png",eventid:"0",mpcomid:"0"},on:{click:t.closeModal}}),t._v(" "),o("cover-image",{staticClass:"img-rect",attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/share-border1.png",mpcomid:"1"}}),t._v(" "),o("cover-view",{staticClass:"success-hint",attrs:{mpcomid:"2"}},[t._v("已保存至相册，快去分享吧")]),t._v(" "),o("button",{staticClass:"btn-red",attrs:{"hover-class":"none",eventid:"1"},on:{click:t.closeModal}},[t._v("我知道了")])],1):t.showChoiceBlock?o("cover-view",{staticClass:"img-part",attrs:{mpcomid:"10"}},[o("cover-image",{staticClass:"close",attrs:{src:"/static/icon-close.png",eventid:"2",mpcomid:"3"},on:{click:function(e){e.preventDefault(),t.closeModal(e)}}}),t._v(" "),o("cover-image",{staticClass:"img-rect",attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/share-border1.png",mpcomid:"4"}}),t._v(" "),o("cover-view",{staticClass:"hint",attrs:{mpcomid:"5"}},[t._v("点击标签，为你的分享加个态度吧!")]),t._v(" "),o("cover-view",{staticClass:"choices",attrs:{eventid:"3",mpcomid:"7"},on:{click:t.chooseTag}},t._l(t.tags,function(t,e){return o("cover-image",{key:e,attrs:{src:t,"data-index":e,mpcomid:"6-"+e}})})),t._v(" "),o("cover-image",{class:"chosen chosen-"+t.chosenIndex,attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/icon-chosen.png",mpcomid:"8"}}),t._v(" "),o("button",{staticClass:"btn-red",attrs:{"hover-class":"none","open-type":t.saveBtn.openType,eventid:"4"},on:{click:t.saveImg,opensetting:t.saveImgLater}},[o("cover-view",{attrs:{mpcomid:"9"}},[t._v(t._s(t.saveBtn.text))])],1)],1):t._e()],1)]):t._e()},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},function(t,e,o){var n=o(40),a=o(41),s=!1,i=o(0)(n.a,a.a,function(t){s||o(39)},null,null);i.options.__file="src/components/TopBar.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] TopBar.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,o){var n=o(1),a=o(2),s=o.n(a),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};e.a={name:"top-bar",data:function(){return{returnable:!1,show:!1}},props:{darkMode:{default:!1}},computed:i({},Object(n.d)(["deviceInfo"])),watch:{darkMode:function(){var t=this.darkMode?"#ffffff":"#000000";wx.setNavigationBarColor({frontColor:t,backgroundColor:t})}},onLoad:function(){var t=getCurrentPages();this.returnable=t.length>1,this.show=!0},methods:{formSubmit:function(t){var e=t.mp.detail;wx.requestWithCookie({url:"https://c.m.163.com/uc/activity/miniapp/subscribe",data:{form_id:e.formId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){200===t.data.code&&(s.a.Event.stat("event_push_request",{}),console.log("已订阅"))}});var o=e.target.dataset.name;"back"===o?this.returnable&&(wx.navigateBack(),s.a.Event.stat("btn_topback",{})):"home"===o&&(wx.switchTab({url:"/pages/Home"}),s.a.Event.stat("btn_top2index",{}))}}}},function(t,e,o){var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{class:["top-bar",{"top-bar-fringe":t.deviceInfo.hasFringe},{"top-bar-24":t.deviceInfo.statusBar24},{"top-bar-dark":t.darkMode}],attrs:{"report-submit":"true",eventid:"0"},on:{submit:t.formSubmit}},[o("div",{class:["main",{visible:t.show}]},[o("button",{class:["icon-back",{"icon-back-gray":!t.returnable}],attrs:{formType:"submit","data-name":"back"}}),t._v(" "),o("span",{staticClass:"vertical-line"}),t._v(" "),o("button",{staticClass:"icon-home",attrs:{formType:"submit","data-name":"home"}})],1)])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},,,,,,,,function(t,e,o){var n=o(51),a=o(55),s=!1,i=o(0)(n.a,a.a,function(t){s||o(50)},null,null);i.options.__file="src/components/BottomBar.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] BottomBar.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,o){var n=o(1),a=o(2),s=o.n(a),i=o(27),r=o(23),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};e.a={name:"BottomBar",computed:c({},Object(n.d)(["deviceInfo","showOpenNewsApp"])),props:{id:{},docid:"",postid:"",type:{default:"doc"},commentNumb:{default:0},showCommentIcon:{default:!0},showCollectionIcon:{default:!0}},components:{CollectionBtn:i.a,ShareBtns:r.a},methods:c({},Object(n.c)(["MODAL_SHARE"]),{formSubmit:function(t){var e=t.mp.detail;if(wx.requestWithCookie({url:"https://c.m.163.com/uc/activity/miniapp/subscribe",data:{form_id:e.formId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){200===t.data.code&&(s.a.Event.stat("event_push_request",{}),console.log("已订阅"))}}),"comment"===e.target.dataset.name){var o="photoset"===this.type?this.postid:this.docid;wx.navigateTo({url:"/pages/comments/comments?docid="+o})}}})}},function(t,e){},function(t,e,o){var n=o(1),a=o(2),s=o.n(a),i=o(22),r=o(5),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};e.a={name:"share-btns",props:{styleType:{default:""},formType:{default:""}},components:{ShareMoments:i.a,LoginBtn:r.a},methods:c({},Object(n.c)(["MODAL_SHARE"]),{dealWechatIconClick:function(){s.a.Event.stat("btn_share_platform",{platform:"wx-personal"})},dealmomentsIconClick:function(){s.a.Event.stat("btn_share_platform",{platform:"wx-friend"}),this.MODAL_SHARE({showShareModal:!0})}})}},function(t,e,o){var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("block",[o("div",{class:["share-btns",{"share-btns-block":"block"===t.styleType}]},[o("button",{staticClass:"item",attrs:{formType:t.formType,"open-type":"share",eventid:"0"},on:{click:t.dealWechatIconClick}},[o("span",{staticClass:"icon-wechat"}),"block"===t.styleType?o("span",{staticClass:"text"},[t._v("微信")]):t._e()]),t._v(" "),"block"===t.styleType?o("div",{staticClass:"item"},[o("login-btn",{attrs:{callback:t.dealmomentsIconClick,formType:t.formType,mpcomid:"0"}},[o("span",{staticClass:"icon-moments"}),o("span",{staticClass:"text"},[t._v("朋友圈")])])],1):o("div",{staticClass:"item"},[o("login-btn",{attrs:{callback:t.dealmomentsIconClick,formType:t.formType,mpcomid:"1"}},[o("span",{staticClass:"icon-moments"})])],1)],1)])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},function(t,e,o){var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{attrs:{"report-submit":"true",eventid:"0"},on:{submit:t.formSubmit}},[o("div",{class:["bottom-bar",{"bottom-bar-iphoneX":t.deviceInfo.isIphoneX}]},[t.showCommentIcon?o("button",{staticClass:"icon-comment",attrs:{formType:"submit","data-name":"comment"}},[0!==t.commentNumb?o("span",{staticClass:"sub-numb"},[t._v(t._s(t.commentNumb))]):t._e()]):t._e(),t._v(" "),t.showCollectionIcon?o("block",[o("collection-btn",{attrs:{id:t.id,type:t.type,mpcomid:"0"}})],1):t._e(),t._v(" "),o("share-btns",{attrs:{formType:"submit",mpcomid:"1"}})],1)])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},function(t,e){},function(t,e,o){var n=o(1),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};e.a={name:"launch-btn",props:["launchPath"],methods:a({},Object(n.c)(["MODAL_DOWNLOAD"]),{launchError:function(){this.MODAL_DOWNLOAD({showDownloadModal:!0})}})}},function(t,e,o){var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"launch-btn",attrs:{"open-type":"launchApp","app-parameter":t.launchPath,eventid:"0"},on:{error:t.launchError}},[t._t("default",null,{mpcomid:"0"})],2)},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},function(t,e,o){var n=o(61),a=o(62),s=!1,i=o(0)(n.a,a.a,function(t){s||o(60)},null,null);i.options.__file="src/components/BackflowBottom.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] BackflowBottom.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,o){var n=o(1),a=o(28),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};e.a={name:"backflow-bottom",props:["launchPath"],computed:s({},Object(n.d)(["showOpenNewsApp"])),components:{LaunchBtn:a.a}}},function(t,e,o){var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showOpenNewsApp?o("div",{staticClass:"backflow-bottom"},[o("p",[t._v("没有找到想要的？打开"),o("span",[t._v("网易新闻")]),t._v("看看吧~")]),t._v(" "),o("launch-btn",{attrs:{launchPath:t.launchPath,mpcomid:"0"}})],1):t._e()},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},function(t,e,o){var n=o(65),a=o(66),s=!1,i=o(0)(n.a,a.a,function(t){s||o(64)},"data-v-608c3b08",null);i.options.__file="src/components/BottomBarFixed.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] BottomBarFixed.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,o){var n=o(1),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};e.a={name:"bottom-bar-fixed",computed:a({},Object(n.d)(["deviceInfo"]))}},function(t,e,o){var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.deviceInfo.isIphoneX?"bottom-bar-fixed bottom-bar-fixed-iphoneX":"bottom-bar-fixed"]})},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},function(t,e,o){var n=o(69),a=o(70),s=!1,i=o(0)(n.a,a.a,function(t){s||o(68)},"data-v-89f07016",null);i.options.__file="src/components/ModalDownload.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] ModalDownload.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,o){var n=o(1),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};e.a={name:"modal-download",computed:a({},Object(n.d)(["showDownloadModal"])),methods:a({},Object(n.c)(["MODAL_DOWNLOAD"]),{close:function(){this.MODAL_DOWNLOAD({showDownloadModal:!1})}})}},function(t,e,o){var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showDownloadModal?o("div",{staticClass:"modal-download"},[o("div",{staticClass:"modal-content"},[o("p",[t._v("回复数字“1”，获取下载链接")]),t._v(" "),o("button",{attrs:{"open-type":"contact",eventid:"0"},on:{click:t.close}},[t._v("去下载")])],1),t._v(" "),o("div",{staticClass:"close",attrs:{eventid:"1"},on:{click:t.close}})]):t._e()},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,o){var n=o(132),a=o(137),s=!1,i=o(0)(n.a,a.a,function(t){s||o(131)},null,null);i.options.__file="src/pages/video/video.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] video.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,o){var n=o(1),a=o(16),s=o(20),i=o(49),r=o(12),c=o(28),l=o(59),d=o(63),u=o(27),p=o(133),h=o(67),f=o(23),v=o(22),m=o(38),g=o(10),w=o.n(g),_=o(2),y=o.n(_),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},x=requirePlugin("ntesmp");e.a={name:"VideoDetail",components:{BottomBar:i.a,PageError:r.a,LaunchBtn:c.a,BackflowBottom:l.a,BottomBarFixed:d.a,CollectionBtn:u.a,VideoInfoBar:p.a,ModalDownload:h.a,ShareBtns:f.a,ShareMoments:v.a,TopBar:m.a},data:function(){return{xvid:"currentVideo",xvclass:"xvideo",vid:void 0,currentVideo:{},videoContext:void 0,videoList:[],playIndex:0,allEnded:!1,isWifi:!1,favored:!1,allowMobileDataPlay:!1,playStatus:"beforestart",pageError:"netLoading",lauchPath:"",docid:"",contentHeight:"100vh"}},computed:b({},Object(n.d)(["showOpenNewsApp","showDownloadModal","showShareModal","deviceInfo"])),watch:{showDownloadModal:function(){this.showDownloadModal&&this.getCurrentVideoContext().pause()},showShareModal:function(){var t=this.getCurrentVideoContext();this.showShareModal?t&&t.pause():t&&t.play()}},onReady:function(){this.calcHeight()},onUnload:function(){this.vid=void 0,this.currentVideo={},this.videoList=[],this.playStatus="beforestart",this.playIndex=0,this.allEnded=!1,this.MODAL_SHARE({showShareModal:!1})},onShow:function(){},onLoad:function(t){if(y.a.Event.stat("pv_video",{}),y.a.Page.init(),this.docid=t.docid,!this.docid){var e=decodeURIComponent(t.scene);this.docid=e&&e.split("=")[1].replace("/","|")}this.launchPath="video/"+this.docid+"?spss=newsapp_xcx";var o=this;wx.getNetworkType({success:function(t){"wifi"===t.networkType?o.isWifi=!0:o.isWifi=!1}}),wx.onNetworkStatusChange(function(t){console.log(t.isConnected),console.log(t.networkType)}),this.getData()},onShareAppMessage:function(){var t=this.currentVideo;return{title:"视频："+t.title,imageUrl:t.cover+"?imageView&thumbnail=340y270",path:"/pages/video/video?docid="+t.vid}},methods:b({},Object(n.c)(["MODAL_SHARE"]),{calcHeight:function(){var t=128;this.deviceInfo.hasFringe?t=178:this.deviceInfo.statusBar24&&(t=150),this.contentHeight=this.deviceInfo.windowHeight-t/2+"px"},getVideoInfo:function(t,e){var o=this,n=this;a.a.request(w.a.api.video.replace("{{id}}",t),function(t){var o=t&&t.data;o&&(o.sCover=o.cover,o.replyid=o.replyid,o.fCover="https:"+a.a.optImage(o.cover,750,422),o.fSize=n.kiloBytesToMegaBytes(o.sizeSD,1),o.fTopicImg="https:"+a.a.optImage(o.videoTopic&&o.videoTopic.topic_icons||o.topicImg,40,40),void 0==n.vid&&(o.pvCount=0,o.docid=o.vid,o.replyid=o.replyid,o.source=o.videosource,o.imgsrc=o.cover,o.fImgsrc=o.fCover,o.fLength=a.a.timeFormat(o.length),n.videoList.unshift(o)),n.vid=o.vid,n.currentVideo=o,n.pageError=0,n.isWifi?n.playStatus="playing":n.playStatus="beforestart",e&&e())},function(){o.pageError="netError"})},getVideoList:function(t){var e=this;a.a.request(w.a.api.video_related_list.replace("{{id}}",t),function(t){var o=t&&t.data;Array.isArray(o)&&(o.forEach(function(t){t.fImgsrc="https:"+a.a.optImage(t.imgsrc,234,146),t.fLength=a.a.timeFormat(t.videoLength),t.fCount=Object(s.a)(t.pvCount)}),e.videoList=e.videoList.concat(o).slice(0,20))},null,!0)},getData:function(){this.getVideoInfo(this.docid),this.getVideoList(this.docid)},switch_play:function(t,e){var o=this;this.getVideoInfo(t,function(){o.playIndex=e})},video_ended:function(){var t=this;if(this.videoList.length<=this.playIndex+1)return this.allEnded=!0,this.playStatus="ended",void this.getCurrentVideoContext().exitFullScreen();var e=this.videoList[this.playIndex+1].docid;this.getVideoInfo(e,function(){t.playIndex+=1})},video_statechange:function(t){switch(t.mp.detail){case"play":this.playStatus="playing";break;case"pause":this.playStatus="paused";break;case"ended":this.video_ended();break;default:this.playStatus="beforestart"}},play:function(){this.playStatus="playing",this.allowMobileDataPlay=!0,this.getCurrentVideoContext().play()},replay:function(){this.playStatus="playing",this.getCurrentVideoContext().play()},kiloBytesToMegaBytes:function(t,e){return isNaN(t)?t:(t/1024).toFixed(e)},getCurrentVideoContext:function(){return this.videoContext||(this.videoContext=x.getVideoContext("currentVideo")),this.videoContext}})}},function(t,e,o){var n=o(135),a=o(136),s=!1,i=o(0)(n.a,a.a,function(t){s||o(134)},null,null);i.options.__file="src/components/VideoInfoBar.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] VideoInfoBar.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,o){var n=o(23);e.a={name:"video-info-bar",props:["topicImg","topicName","vid"],components:{ShareBtns:n.a}}},function(t,e,o){var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"video-info-bar"},[o("div",{staticClass:"author"},[o("img",{attrs:{src:t.topicImg,alt:""}}),t._v(" "),o("span",[t._v(t._s(t.topicName))])]),t._v(" "),o("div",{staticClass:"share"},[o("span",[t._v("分享")]),t._v(" "),o("share-btns",{attrs:{mpcomid:"0"}})],1)])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s},function(t,e,o){var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("block",[o("top-bar",{attrs:{mpcomid:"0"}}),t._v(" "),0===t.pageError&&t.vid?o("div",{staticClass:"video-detail",style:{height:t.contentHeight}},[o("div",{staticClass:"grid-const video-holder"},[o("div",{staticClass:"m-video-player",class:{"not-wifi":!t.isWifi&&!t.allowMobileDataPlay,"on-mask-open":t.showDownloadModal,"play-status-ended":"ended"===t.playStatus,"play-status-beforestart":"beforestart"===t.playStatus,"play-status-paused":"paused"===t.playStatus,"play-status-playing":"playing"===t.playStatus}},[o("xvideo",{attrs:{xid:t.xvid,xclass:t.xvclass,src:t.currentVideo.mp4_url,autoplay:t.isWifi||t.allowMobileDataPlay,poster:t.currentVideo.fCover,eventid:"0",mpcomid:"1"},on:{statechange:t.video_statechange}}),t._v(" "),o("div",{staticClass:"mask"},[o("div",{staticClass:"cover common-img-default"},[o("image",{attrs:{src:t.currentVideo.fCover}})]),t._v(" "),o("div",{staticClass:"mask-bg"}),t._v(" "),o("div",{staticClass:"not-wifi-tips"},[o("p",[t._v("播放将消耗 "+t._s(t.currentVideo.fSize)+" M 流量")]),t._v(" "),o("button",{staticClass:"js-play-btn",attrs:{eventid:"1"},on:{click:t.play}},[t._v("继续播放")])],1),t._v(" "),o("div",{staticClass:"replay-tips"},[o("div",{staticClass:"title"},[t._v(t._s(t.currentVideo.title))]),t._v(" "),o("div",{staticClass:"center"},[o("div",{staticClass:"replay tool-icon",attrs:{eventid:"2"},on:{click:t.replay}},[o("image",{attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/palyer-replay.png"}}),t._v(" "),o("span",[t._v("重播")])]),t._v(" "),o("div",{staticClass:"divide"},[o("image",{attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/player-mask-divide.png"}})]),t._v(" "),o("button",{staticClass:"share tool-icon",attrs:{"open-type":"share"}},[o("image",{attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share-white.png"}}),t._v(" "),o("span",[t._v("分享")])])],1)])])],1),t._v(" "),t.showOpenNewsApp?o("block",[o("launch-btn",{attrs:{launchPath:t.launchPath,mpcomid:"2"}},[t._v("\n          打开网易新闻，阅读更佳"),o("span",{staticClass:"backflow-arrow-right"})])],1):t._e()],1),t._v(" "),o("scroll-view",{class:["content",t.showOpenNewsApp?"content-backflow":""],attrs:{"scroll-y":!t.showDownloadModal}},[o("video-info-bar",{attrs:{topicImg:t.currentVideo.fTopicImg,topicName:t.currentVideo.topicName,vid:t.vid,mpcomid:"3"}}),t._v(" "),o("div",{staticClass:"related-videos-header"},[t._v("相关推荐")]),t._v(" "),o("div",{staticClass:"related-videos"},t._l(t.videoList,function(e,n){return o("block",{key:e.docid},[o("div",{staticClass:"related-item related-video-item",class:{active:e.docid===t.vid,"play-status-ended":"ended"===t.playStatus,"play-status-beforestart":"beforestart"===t.playStatus,"play-status-paused":"paused"===t.playStatus,"play-status-playing":"playing"===t.playStatus},attrs:{"data-id":e.docid,"hover-class":"navigator-hover",eventid:"3-"+n},on:{click:function(o){t.switch_play(e.docid,n)}}},[o("div",{staticClass:"digest"},[o("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"source"},[t._v(t._s(e.source)+"\n                "),e.pvCount?o("block",[t._v("\n                  "+t._s(e.fCount)+"次播放\n                ")]):t._e()],1)]),t._v(" "),o("div",{staticClass:"cover common-img-default"},[o("div",{staticClass:"mask"},[o("div",{staticClass:"mask-corner"})]),t._v(" "),o("image",{attrs:{src:e.fImgsrc}}),t._v(" "),o("div",{staticClass:"playing"},[o("div",{staticClass:"icon-playing"},[o("div",{staticClass:"bar"}),t._v(" "),o("div",{staticClass:"bar"}),t._v(" "),o("div",{staticClass:"bar"})]),t._v(" "),o("div",{staticClass:"text-tip text-beforestart"},[t._v("未开始")]),t._v(" "),o("div",{staticClass:"text-tip text-playing"},[t._v("播放中")]),t._v(" "),o("div",{staticClass:"text-tip text-paused"},[t._v("暂停中")]),t._v(" "),o("div",{staticClass:"text-tip text-ended"},[t._v("播放完")])]),t._v(" "),o("span",{staticClass:"time"},[t._v(t._s(e.fLength))])])]),t._v(" "),n%5==4?o("block",[o("div",{staticClass:"related-video-item"},[o("ad",{attrs:{"unit-id":"adunit-c67bc47ece681e5b",mpcomid:"4-"+n}})],1)]):t._e()],1)})),t._v(" "),o("backflow-bottom",{attrs:{launchPath:t.launchPath,mpcomid:"5"}}),t._v(" "),o("bottom-bar-fixed",{attrs:{mpcomid:"6"}})],1),t._v(" "),o("bottom-bar",{attrs:{id:t.currentVideo.vid,type:"video",showCommentIcon:!1,mpcomid:"7"}}),t._v(" "),o("share-moments",{attrs:{headImg:t.currentVideo.sCover,title:t.currentVideo.title,docid:t.currentVideo.vid,mpcomid:"8"}}),t._v(" "),o("modal-download",{attrs:{mpcomid:"9"}})],1):o("block",[o("page-error",{attrs:{type:t.pageError,clickbtn:"netError"===t.pageError,clickfun:t.getData,mpcomid:"10"}})],1)],1)},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};e.a=s}],[172]); 
 			}); 	require("pages/video/video.js");
 		__wxRoute = 'pages/My';__wxRouteBegin = true; 	define("pages/My.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../9FA2E4459104369CF9C48C4278C17C83.js"),global.webpackJsonp([6],{10:function(t,e){t.exports={tabs:[{name:"热榜",tid:"hotpost"},{name:"头条",tid:"toutiao"},{name:"娱乐",url:"",tid:"T1348648517839"},{name:"体育",url:"",tid:"T1348649079062"},{name:"本地",url:""},{name:"科技",tid:"T1348649580692",url:""},{name:"财经",tid:"T1348648756099",url:""},{name:"独家",type:"common",tid:"T1370583240249",url:""},{name:"历史",type:"common",tid:"T1368497029546"},{name:"军事",type:"common",tid:"T1348648141035",url:""},{name:"汽车",type:"common",tid:"T1348654060988",url:""},{name:"房产",type:"common",tid:"T1348654085632",url:""},{name:"数码",type:"common",tid:"T1348649776727",url:""}],api:{article:"https://c.m.163.com/nc/article/{{docid}}/full.html",video:"https://c.m.163.com/nc/video/detail/{{id}}.html",photo:"https://c.m.163.com/photo/api/set/{{cid}}/{{sid}}.json",commonlist:"https://c.m.163.com/nc/article/list/{{tid}}/{{start}}-10.html",dynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/headline-list",channeldynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/normal-list",localList:"https://c.m.163.com/dlist/article/local/dynamic",video_list:"https://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&subtab={{subtab}}&size={{pageSize}}&offset={{offset}}",video_related_list:"https://c.m.163.com/releate/video/dynamic?videoid={{id}}&appname=xiaochengxu",favorite_list:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite?pageNo={{pageNo}}",favorite_add:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/add",favorite_cancel:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/cancel",favorite_check:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/check",hot_postlist:"https://taidu.3g.163.com/news-support/weixin/miniprogram/comment/hotList"},allowType:["video","article","doc"],topNewsTag:"S",topNewsTag2:"S+"}},11:function(t,e,a){e.a=function(t){try{var e=new Date(t.replace(/-/g,"/")),a=new Date,r=a-e;if(r<n)return"刚刚";if(r<i)return Math.floor(r/n)+"分钟前";if(r<o)return Math.floor(r/i)+"小时前";var s=t.split(" "),c=/(\S+):\d{2}/.exec(s[1])[1],l=a-new Date(s[0]);return l<2*o?"昨天"+c:l<3*o?"前天"+c:e.getFullYear()===a.getFullYear()?/-(\S+)/.exec(s[0])[1]:s[0]}catch(e){return t}};var n=6e4,i=36e5,o=864e5},12:function(t,e,a){var n=a(14),i=a(15),o=!1,r=a(0)(n.a,i.a,function(t){o||a(13)},null,null);r.options.__file="src/components/PageError.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] PageError.vue: functional components are not supported with templates, they should use render functions."),e.a=r.exports},13:function(t,e){},138:function(t,e,a){var n=a(140),i=a(141),o=!1,r=a(0)(n.a,i.a,function(t){o||a(139)},null,null);r.options.__file="src/pages/My.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] My.vue: functional components are not supported with templates, they should use render functions."),e.a=r.exports},139:function(t,e){},14:function(t,e,a){e.a={name:"page-error",props:{type:String,clickfun:Function,clickbtn:Boolean},methods:{back:function(){getCurrentPages().length<2?wx.switchTab({url:"/pages/Home"}):wx.navigateBack()}}}},140:function(t,e,a){var n=a(1),i=a(16),o=a(11),r=a(10),s=a.n(r),c=a(12),l=a(5),u=a(2),d=a.n(u),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};e.a={name:"My",components:{PageError:c.a,LoginBtn:l.a},data:function(){return{articleList:[],totalNum:"",hasMore:!0,pageNo:1,refreshingFinish:!1,showRefreshTip:!1,refreshing:!1,refreshingError:!1,pageError:"netLoading"}},computed:p({},Object(n.d)(["user","needRefreshCollection","deviceInfo"]),{isLogin:function(){return this.user.isLogin}}),onLoad:function(){d.a.Page.init(),d.a.Event.stat("pv_my",{}),this.resetData(),this.REFRESH_COLLECTION({needRefreshCollection:!1})},onShow:function(){this.needRefreshCollection&&(console.log("刷新我的收藏"),this.resetData(),this.get_data(),this.REFRESH_COLLECTION({needRefreshCollection:!1}))},mounted:function(){var t=this;this.isLogin?this.get_data():this.initLoginData().then(function(){if(t.isLogin)t.get_data();else{var e=t;wx.getNetworkType({success:function(t){"none"===t.networkType?e.pageError="netError":e.pageError=0},fail:function(){e.pageError=0}})}})},methods:p({},Object(n.c)(["REFRESH_COLLECTION"]),Object(n.b)(["initLoginData"]),{get_data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1],a=this;this.refreshing||!1===this.hasMore||(this.refreshing=!0,0!==t&&1!==t||(this.offset=0,this.pageError="netLoading"),wx.requestWithCookie({url:s.a.api.favorite_list.replace("{{pageNo}}",this.pageNo),method:"GET",success:function(n){var r=n&&n.data&&n.data.data;r&&(r.items.forEach(function(t){/\.gif$/.test(t.imgsrc)?t.fImgsrc=t.imgsrc:t.fImgsrc="https:"+i.a.optImage(t.imgsrc,330),t.fAddTime=Object(o.a)(t.addTime),t.fLength=i.a.timeFormat(t.length)}),a.hasMore=r.hasMore,a.pageNo+=1,a.articleList=0===t||1===t?r.items:a.articleList.concat(r.items),r.totalNum&&(a.totalNum=r.totalNum)),a.request_success(t),e&&e()},fail:function(){a.request_failed(t)},complete:function(){a.request_complete(t)}}))},request_complete:function(t){this.refreshing=!1,this.refreshingFinish=!0},request_success:function(t){this.refreshingError=!1,this.pageError=0,1===t&&(wx.stopPullDownRefresh(),this.show_refresh_tip())},request_failed:function(t){console.log("request failed",t),this.refreshingError=!0,0!==t&&1!==t||(wx.pageScrollTo({scrollTop:0,duration:300}),this.pageError="netError")},resetData:function(){this.articleList=[],this.totalNum="",this.hasMore=!0,this.pageNo=1,this.refreshingFinish=!1,this.showRefreshTip=!1,this.refreshing=!1,this.refreshingError=!1,this.pageError="netLoading"},updateDate:function(){this.get_data(2)}})}},141:function(t,e,a){var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["app-my",{"app-my-fringe":t.deviceInfo.hasFringe},{"app-my-24":t.deviceInfo.statusBar24}]},[a("div",{staticClass:"banner"},[t.isLogin?a("div",{staticClass:"login-btn"},[a("img",{staticClass:"default-img",attrs:{src:t.user.avatarUrl,alt:""}}),t._v(" "),a("p",[t._v(t._s(t.user.nickName))])],1):a("block",[a("login-btn",{attrs:{callback:t.get_data,mpcomid:"0"}},[a("img",{staticClass:"default-img",attrs:{alt:""}}),t._v(" "),a("p",[t._v(t._s("未登录，点击登录"))])],1)],1),t._v(" "),a("div",{staticClass:"feedback"},[a("div",{staticClass:"feedback-icon"}),t._v(" "),a("button",{attrs:{"open-type":"contact"}},[t._v("意见反馈")])],1)],1),t._v(" "),a("scroll-view",{staticClass:"content",attrs:{"scroll-y":"true",eventid:"0"},on:{scrolltolower:t.updateDate}},[a("div",{staticClass:"header"},[t._v("\n      我的收藏\n      "),t.totalNum?a("block",[t._v("("+t._s(t.totalNum)+")")]):t._e()],1),t._v(" "),a("div",{staticClass:"list-content"},[0===t.pageError?a("block",[t.isLogin?0===t.articleList.length?a("div",{staticClass:"empty"},[a("div",{staticClass:"empty-bg"}),t._v(" "),a("div",{staticClass:"empty-desc"},[t._v("\n            吼吼~你还没有收藏的内容\n          ")])]):a("block",t._l(t.articleList,function(e,n){return a("block",{key:n},["video"===e.skipType?a("navigator",{staticClass:"related-video-item related-item",attrs:{url:"/pages/video/video?docid="+e.vid,"data-id":e.docid,"hover-class":"navigator-hover"}},[a("div",{staticClass:"digest"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"source"},[t._v(t._s(e.source)+"\n                  收藏于"+t._s(e.fAddTime)+"\n                ")])]),t._v(" "),a("div",{staticClass:"cover common-img-default--sm"},[a("div",{staticClass:"mask"},[a("div",{staticClass:"mask-corner"})]),t._v(" "),a("div",{staticClass:"play-icon"}),t._v(" "),a("image",{attrs:{mode:"aspectFill",src:e.fImgsrc}}),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(e.fLength))])])]):"photoset"===e.skipType?a("navigator",{staticClass:"related-doc-item related-item",attrs:{url:"/pages/photoset/photoset?docid="+e.photosetID,"data-id":e.photosetID,"hover-class":"navigator-hover"}},[a("div",{staticClass:"digest",class:{"long-digest":!e.imgsrc}},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"source"},[t._v(t._s(e.source)+"\n                  收藏于"+t._s(e.fAddTime)+"\n                ")])]),t._v(" "),e.imgsrc?a("div",{staticClass:"cover common-img-default--sm"},[a("image",{attrs:{mode:"aspectFill",src:e.fImgsrc}})]):t._e()]):a("navigator",{staticClass:"related-doc-item related-item",attrs:{url:"/pages/article/article?docid="+e.docid,"data-id":e.docid,"hover-class":"navigator-hover"}},[a("div",{staticClass:"digest",class:{"long-digest":!e.imgsrc}},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"source"},[t._v(t._s(e.source)+"\n                  收藏于"+t._s(e.fAddTime)+"\n                ")])]),t._v(" "),e.imgsrc?a("div",{staticClass:"cover common-img-default--sm"},[a("image",{attrs:{mode:"aspectFill",src:e.fImgsrc}})]):t._e()])],1)})):a("div",{staticClass:"empty"},[a("div",{staticClass:"empty-bg"}),t._v(" "),a("div",{staticClass:"empty-desc"},[t._v("\n            点击登录，获取专属你的收藏列表吧\n          ")])])],1):a("block",[a("page-error",{attrs:{type:t.pageError,clickbtn:"netError"===t.pageError,clickfun:t.get_data,mpcomid:"1"}})],1)],1)])],1)},i=[];n._withStripped=!0;var o={render:n,staticRenderFns:i};e.a=o},15:function(t,e,a){var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-error"},["dataError"===t.type?a("block",[a("div",{staticClass:"empty"}),t._v(" "),a("div",{staticClass:"error-info"},[t._v("此页面内容没有了")]),t._v(" "),a("div",{staticClass:"error-btn",attrs:{eventid:"0"},on:{click:t.back}},[t._v("返回")])]):t._e(),t._v(" "),"emptyComment"===t.type?a("block",[a("div",{staticClass:"empty-comment"}),t._v(" "),a("div",{staticClass:"error-info"},[t._v("暂无跟贴")]),t._v(" "),a("div",{staticClass:"error-btn",attrs:{eventid:"1"},on:{click:t.back}},[t._v("返回")])]):"netError"===t.type?a("block",[a("image",{staticClass:"net-error",attrs:{src:"/static/net-error.png"}}),t._v(" "),a("div",{staticClass:"error-info"},[t._v("你的网络出现问题啦")]),t._v(" "),t.clickbtn?a("block",[a("div",{staticClass:"error-btn",attrs:{eventid:"2"},on:{click:t.clickfun}},[t._v("重新加载")])]):t._e()],1):"netLoading"===t.type?a("block",[a("div",{staticClass:"loading"},[a("div",{staticClass:"loader-spin center"},[a("span")]),t._v(" "),a("image",{staticClass:"loading-img",attrs:{src:"/static/bg-ntease.png"}})])]):t._e()],1)},i=[];n._withStripped=!0;var o={render:n,staticRenderFns:i};e.a=o},16:function(t,e,a){function n(){var t=wx.getStorageSync("deviceId");if(!t){var e=s.a.parse((new Date).getTime().toString()+Math.random().toString());t=l.a.stringify(e),wx.setStorageSync("deviceId",t)}return t}var i=a(29),o=a.n(i),r=a(30),s=a.n(r),c=a(26),l=a.n(c),u=a(42),d=a.n(u),p=a(43),f=a.n(p),g=a(44),h=a.n(g),v=n(),m=function(){var t=wx.getStorageSync("AESDeviceId");if(!t){t=(new Date).getTime().toString()+Math.random().toString();var e=s.a.parse("neteasenewsboard");t=(t=d.a.encrypt(t,e,{mode:f.a,padding:h.a}).toString()).replace(/\+/g,"%2B"),wx.setStorageSync("AESDeviceId",t)}return t}(),_={request:function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(n||i){var o=i?m:v;-1===t.indexOf("?")?t+="?devId="+o:"?"===t.slice(-1)?t+="devId="+o:t+="&devId="+o}i?wx.requestWithCookie({url:t,success:function(t){e&&e(t)},fail:function(){a&&a()}}):wx.requestWithCookie({url:t,header:{"content-type":"application/json","User-D":v,"User-DID":v},success:function(t){e&&e(t)},fail:function(){a&&a()}})},timeFormat:function(t){var e=Math.floor(t/60),a=t%60;return e=e<10?"0"+e:e,a=a<10?"0"+a:a,e+":"+a},getDeviceId:n,optImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:750,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2147483647,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75;return t?o()(t,e,a,n):"static.ws.126.net/163/frontend/newsapp-wxmp/static/bg-ntease.png"}};e.a=_},17:function(t,e){},18:function(t,e,a){var n=a(1),i=a(9),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};e.a={name:"login-btn",props:["callback","formType"],computed:o({},Object(n.d)(["user"]),{isLogin:function(){return this.user.isLogin}}),methods:o({},Object(n.c)(["USER"]),{doLogin:function(t){var e=this;this.isLogin?(console.log("已登录"),!this.user.nickname&&this.USER({user:t.target.userInfo}),this.callback&&this.callback()):t.target.userInfo?(wx.showLoading(),console.log("授权"),i.a.login(function(){console.log("login success"),e.USER({user:o({},t.target.userInfo,{isLogin:!0})}),wx.hideLoading(),e.callback&&e.callback()},function(){console.log("login failed"),e.USER({user:o({},t.target.userInfo,{isLogin:!1})}),wx.hideLoading(),e.callback&&e.callback()})):console.log("拒绝授权")}})}},19:function(t,e,a){var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"login-btn",attrs:{"open-type":"getUserInfo","hover-class":"none",formType:t.formType,eventid:"0"},on:{getuserinfo:t.doLogin}},[t._t("default",null,{mpcomid:"0"})],2)},i=[];n._withStripped=!0;var o={render:n,staticRenderFns:i};e.a=o},2:function(t,e){function a(t){wx.getNetworkType({success:function(e){t(e.networkType)}})}function n(){var t=wx.getSystemInfoSync();return{adt:encodeURIComponent(t.model),scl:t.pixelRatio,scr:t.windowWidth+"x"+t.windowHeight,lg:t.language,fl:t.version,jv:encodeURIComponent(t.system),tz:encodeURIComponent(t.platform)}}function i(){try{return wx.getStorageSync(f.prefix+"auid")}catch(t){}}function o(){try{var t=c();return wx.setStorageSync(f.prefix+"auid",t),t}catch(t){}}function r(){try{return wx.getStorageSync(f.prefix+"ssid")}catch(t){}}function s(){try{var t="s"+c();return wx.setStorageSync(f.prefix+"ssid",t),t}catch(t){}}function c(t){for(var e=[0,1,2,3,4,5,6,7,8,9],a=10;1<a;a--){var n=Math.floor(10*Math.random()),i=e[n];e[n]=e[a-1],e[a-1]=i}for(a=n=0;5>a;a++)n=10*n+e[a];return(t||"")+(n+"")+ +new Date}function l(){try{var t=getCurrentPages(),e="/";return 0<t.length&&(e=t.pop().__route__),e}catch(t){console.log("get current page path error:"+t)}}function u(){var t={dm:"wechat.apps.xx",url:l(),pvi:"",si:"",ty:0};return t.pvi=function(){var e=i();return e||(e=o(),t.ty=1),e}(),t.si=function(){var t=r();return t||(t=s()),t}(),t}function d(){var t=n();return a(function(t){try{wx.setStorageSync(f.prefix+"ntdata",t)}catch(t){}}),t.ct=wx.getStorageSync(f.prefix+"ntdata")||"4g",t}function p(){var t,e=g.Data.userInfo,a=[];for(t in e)e.hasOwnProperty(t)&&a.push(t+"="+e[t]);return e=a.join(";"),{r2:f.app_id,r4:"wx",ext:"v="+f.version+(null!==e&&""!==e?";ui="+encodeURIComponent(e):"")}}var f={app_id:"",event_id:"",api_base:"https://pingtas.qq.com/pingd",prefix:"_mta_",version:"1.3.5",stat_share_app:!1,stat_pull_down_fresh:!1,stat_reach_bottom:!1},g={App:{init:function(t){"appID"in t&&(f.app_id=t.appID),"eventID"in t&&(f.event_id=t.eventID),"statShareApp"in t&&(f.stat_share_app=t.statShareApp),"statPullDownFresh"in t&&(f.stat_pull_down_fresh=t.statPullDownFresh),"statReachBottom"in t&&(f.stat_reach_bottom=t.statReachBottom),s(),"lauchOpts"in t&&(g.Data.lanchInfo=t.lauchOpts,g.Data.lanchInfo.landing=1)}},Page:{init:function(){var t=getCurrentPages()[getCurrentPages().length-1];t.onShow&&function(){var e=t.onShow;t.onShow=function(){g.Page.stat(),e.call(this,arguments)}}(),f.stat_pull_down_fresh&&t.onPullDownRefresh&&function(){var e=t.onPullDownRefresh;t.onPullDownRefresh=function(){g.Event.stat(f.prefix+"pulldownfresh",{url:t.__route__}),e.call(this,arguments)}}(),f.stat_reach_bottom&&t.onReachBottom&&function(){var e=t.onReachBottom;t.onReachBottom=function(){g.Event.stat(f.prefix+"reachbottom",{url:t.__route__}),e.call(this,arguments)}}(),f.stat_share_app&&t.onShareAppMessage&&function(){var e=t.onShareAppMessage;t.onShareAppMessage=function(){return g.Event.stat(f.prefix+"shareapp",{url:t.__route__}),e.call(this,arguments)}}()},stat:function(){if(""!=f.app_id){var t=[],e=p(),a=[u(),e,d()];g.Data.lanchInfo&&(a.push({ht:g.Data.lanchInfo.scene,rdm:"/",rurl:g.Data.lanchInfo.path}),g.Data.lanchInfo.query&&g.Data.lanchInfo.query._mta_ref_id&&a.push({rarg:g.Data.lanchInfo.query._mta_ref_id}),1==g.Data.lanchInfo.landing&&(e.ext+=";lp=1",g.Data.lanchInfo.landing=0)),a.push({rand:+new Date}),e=0;for(var n=a.length;e<n;e++)for(var i in a[e])a[e].hasOwnProperty(i)&&t.push(i+"="+(void 0===a[e][i]?"":a[e][i]));wx.request({url:f.api_base+"?"+t.join("&").toLowerCase()})}}},Event:{stat:function(t,e){if(""!=f.event_id){var a=[],n=u(),i=p();n.dm="wxapps.click",n.url=t,i.r2=f.event_id;var o,r=void 0===e?{}:e,s=[];for(o in r)r.hasOwnProperty(o)&&s.push(encodeURIComponent(o)+"="+encodeURIComponent(r[o]));for(r=s.join(";"),i.r5=r,r=0,i=(n=[n,i,d(),{rand:+new Date}]).length;r<i;r++)for(var c in n[r])n[r].hasOwnProperty(c)&&a.push(c+"="+(void 0===n[r][c]?"":n[r][c]));wx.request({url:f.api_base+"?"+a.join("&").toLowerCase()})}}},Data:{userInfo:null,lanchInfo:null}};t.exports=g},4:function(t,e,a){e.a=function(t,e){function a(t,e){var a={small:"234x146",normal:"330x2147483647",large:"320x120",articleNormal:s,largeCover:"750x318",littleCover:"375x288"};e?(o=a[e].split("x")[0],r=a[e].split("x")[1]):(o=320,r=260);var n=void 0,i=t?t.split("*")[0]:o,c=void 0,l=t?t.split("*")[1]:r;return i/l>o/r?(n=o,c=Math.round(o/i*l)):i/l<o/r?(n=o,c=Math.round(o/i*l)):(c=r,n=o),n+"x"+c}t&&""!=t.src||(t={src:"http://static.ws.126.net/utf8/3g/touch/images/share-logo.png"});var n=["s.cimg.163.com","nimg.ws.126.net"],i=/(\.jpg)|(\.jpeg)|(\.webp)|(\.png)/i,o=void 0,r=void 0,s="346x260";wx.getSystemInfo({success:function(t){var e=t.windowWidth;s=e-30*e/375+"x260"}});var c=void 0,l=t.imgsrc?t.imgsrc.replace(/\s/g,""):t.src,u=t.pixel,d=a(u,e).split("x"),p=l.match(i)?l.match(i)[0].replace(".",""):"jpg",f=n.indexOf(l.match(/http:\/\/(.*?)\//)[1]),g="articleNormal"==e?"640x10000":a(u,e);return c=-1==f&&p?"http://nimg.ws.126.net/?url="+l+"&thumbnail="+g+"&quality=95&type="+p:l,{alt:t.alt,src:c,width:d[0],height:d[1]}}},5:function(t,e,a){var n=a(18),i=a(19),o=!1,r=a(0)(n.a,i.a,function(t){o||a(17)},"data-v-9e0ce8de",null);r.options.__file="src/components/base/LoginBtn.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] LoginBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=r.exports},6:function(t,e,a){var n=a(3),i=a.n(n),o=a(25);i.a.use(o.a),e.a={}},7:function(t,e,a){var n=a(3),i=a.n(n),o=a(1),r=a(8),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};i.a.use(o.a);var c=new o.a.Store(s({strict:!0},r.a));e.a=c},8:function(t,e,a){function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}var o,r=a(9),s=a(4),c={state:{showOpenNewsApp:!1,deviceInfo:{isIOS:!1,isIphoneX:!1,hasFringe:!1,statusBar24:!0,windowHeight:0,windowWidth:0},user:{isLogin:"",provinceChinese:"北京",cityChinese:"北京",lastVisitTime:0},needRefreshCollection:!1,showDownloadModal:!1,showShareModal:!1,navLinkData:{toutiao:[],yule:[],tiyu:[],bendi:[],caijin:[],keji:[],fangchan:[],dujia:[],lishi:[],xiangguantuijian:[]},markReadDocIds:[]},mutations:(o={},n(o,"SHOW_OPEN_NEWS_APP",function(t,e){var a=[1036,1069];t.showOpenNewsApp=-1!==a.indexOf(e.scene)}),n(o,"DEVICE_INFO",function(t,e){t.deviceInfo=e.data}),n(o,"USER",function(t,e){t.user=Object.assign(t.user,e.user),console.log(t.user)}),n(o,"REFRESH_COLLECTION",function(t,e){t.needRefreshCollection=e.needRefreshCollection}),n(o,"MODAL_DOWNLOAD",function(t,e){t.showDownloadModal=e.showDownloadModal}),n(o,"MODAL_SHARE",function(t,e){t.showShareModal=e.showShareModal}),n(o,"NAVLINK_CLASS",function(t,e){t.navLinkData=e.data}),n(o,"MARK_READ",function(t,e){"String"===e.type?!t.markReadDocIds.indexOf(e.data)>-1&&(t.markReadDocIds=[].concat(i(t.markReadDocIds),[e.data]).slice(-200)):t.markReadDocIds=[].concat(i(new Set([].concat(i(t.markReadDocIds),i(e.data))))).slice(-200)}),o),actions:{initLoginData:function(t){var e=t.commit;return new Promise(function(t){r.a.login(function(t){console.log("login success "),e({type:"USER",user:{isLogin:!0,avatarUrl:t.avatarUrl,nickName:t.nickName}})},function(){e({type:"USER",user:{isLogin:!1}}),t(),console.log("login failure")})})},getDeviceInfo:function(t){var e=t.commit,a=t.state;return new Promise(function(t){var n=wx.getSystemInfoSync();a.deviceInfo.windowHeight===n.windowHeight?t():(console.log("设备信息"),console.log(n)),e(/IOS/gi.test(n.system)?{type:"DEVICE_INFO",data:{isIOS:!0,isIphoneX:/iPhone X/gi.test(n.model),windowHeight:n.windowHeight,windowWidth:n.windowWidth,hasFringe:n.statusBarHeight>24,statusBar24:24===n.statusBarHeight}}:{type:"DEVICE_INFO",data:{isIOS:!1,windowHeight:n.windowHeight,windowWidth:n.windowWidth,hasFringe:n.statusBarHeight>26,statusBar24:n.statusBarHeight>=22&&n.statusBarHeight<=26}}),t()})},getNavLinkData:function(t){var e=t.commit;wx.requestWithCookie({url:"https://c.m.163.com/ug/api/happynuts/app/advert/app-info",success:function(t){var a=t.data.data;for(var n in a)a[n].map(function(t){t.appId=t.appId?t.appId:"wx6664983624b1a9aa",t.url=t.url,t.imgsrc=Object(s.a)({src:t.imgSrc},"normal").src,t.type="nav_link"});e({type:"NAVLINK_CLASS",data:a})}})}}};e.a=c}},[173]); 
 			}); 	require("pages/My.js");
 		__wxRoute = 'pages/article/article';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/article/article.js';	define("pages/article/article.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};require("../../9FA2E4459104369CF9C48C4278C17C83.js"),global.webpackJsonp([0],[,,function(t,e){function n(t){wx.getNetworkType({success:function(e){t(e.networkType)}})}function o(){var t=wx.getSystemInfoSync();return{adt:encodeURIComponent(t.model),scl:t.pixelRatio,scr:t.windowWidth+"x"+t.windowHeight,lg:t.language,fl:t.version,jv:encodeURIComponent(t.system),tz:encodeURIComponent(t.platform)}}function a(){try{return wx.getStorageSync(m.prefix+"auid")}catch(t){}}function i(){try{var t=c();return wx.setStorageSync(m.prefix+"auid",t),t}catch(t){}}function s(){try{return wx.getStorageSync(m.prefix+"ssid")}catch(t){}}function r(){try{var t="s"+c();return wx.setStorageSync(m.prefix+"ssid",t),t}catch(t){}}function c(t){for(var e=[0,1,2,3,4,5,6,7,8,9],n=10;1<n;n--){var o=Math.floor(10*Math.random()),a=e[o];e[o]=e[n-1],e[n-1]=a}for(n=o=0;5>n;n++)o=10*o+e[n];return(t||"")+(o+"")+ +new Date}function l(){try{var t=getCurrentPages(),e="/";return 0<t.length&&(e=t.pop().__route__),e}catch(t){console.log("get current page path error:"+t)}}function d(){var t={dm:"wechat.apps.xx",url:l(),pvi:"",si:"",ty:0};return t.pvi=function(){var e=a();return e||(e=i(),t.ty=1),e}(),t.si=function(){var t=s();return t||(t=r()),t}(),t}function u(){var t=o();return n(function(t){try{wx.setStorageSync(m.prefix+"ntdata",t)}catch(t){}}),t.ct=wx.getStorageSync(m.prefix+"ntdata")||"4g",t}function p(){var t,e=h.Data.userInfo,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t+"="+e[t]);return e=n.join(";"),{r2:m.app_id,r4:"wx",ext:"v="+m.version+(null!==e&&""!==e?";ui="+encodeURIComponent(e):"")}}var m={app_id:"",event_id:"",api_base:"https://pingtas.qq.com/pingd",prefix:"_mta_",version:"1.3.5",stat_share_app:!1,stat_pull_down_fresh:!1,stat_reach_bottom:!1},h={App:{init:function(t){"appID"in t&&(m.app_id=t.appID),"eventID"in t&&(m.event_id=t.eventID),"statShareApp"in t&&(m.stat_share_app=t.statShareApp),"statPullDownFresh"in t&&(m.stat_pull_down_fresh=t.statPullDownFresh),"statReachBottom"in t&&(m.stat_reach_bottom=t.statReachBottom),r(),"lauchOpts"in t&&(h.Data.lanchInfo=t.lauchOpts,h.Data.lanchInfo.landing=1)}},Page:{init:function(){var t=getCurrentPages()[getCurrentPages().length-1];t.onShow&&function(){var e=t.onShow;t.onShow=function(){h.Page.stat(),e.call(this,arguments)}}(),m.stat_pull_down_fresh&&t.onPullDownRefresh&&function(){var e=t.onPullDownRefresh;t.onPullDownRefresh=function(){h.Event.stat(m.prefix+"pulldownfresh",{url:t.__route__}),e.call(this,arguments)}}(),m.stat_reach_bottom&&t.onReachBottom&&function(){var e=t.onReachBottom;t.onReachBottom=function(){h.Event.stat(m.prefix+"reachbottom",{url:t.__route__}),e.call(this,arguments)}}(),m.stat_share_app&&t.onShareAppMessage&&function(){var e=t.onShareAppMessage;t.onShareAppMessage=function(){return h.Event.stat(m.prefix+"shareapp",{url:t.__route__}),e.call(this,arguments)}}()},stat:function(){if(""!=m.app_id){var t=[],e=p(),n=[d(),e,u()];h.Data.lanchInfo&&(n.push({ht:h.Data.lanchInfo.scene,rdm:"/",rurl:h.Data.lanchInfo.path}),h.Data.lanchInfo.query&&h.Data.lanchInfo.query._mta_ref_id&&n.push({rarg:h.Data.lanchInfo.query._mta_ref_id}),1==h.Data.lanchInfo.landing&&(e.ext+=";lp=1",h.Data.lanchInfo.landing=0)),n.push({rand:+new Date}),e=0;for(var o=n.length;e<o;e++)for(var a in n[e])n[e].hasOwnProperty(a)&&t.push(a+"="+(void 0===n[e][a]?"":n[e][a]));wx.request({url:m.api_base+"?"+t.join("&").toLowerCase()})}}},Event:{stat:function(t,e){if(""!=m.event_id){var n=[],o=d(),a=p();o.dm="wxapps.click",o.url=t,a.r2=m.event_id;var i,s=void 0===e?{}:e,r=[];for(i in s)s.hasOwnProperty(i)&&r.push(encodeURIComponent(i)+"="+encodeURIComponent(s[i]));for(s=r.join(";"),a.r5=s,s=0,a=(o=[o,a,u(),{rand:+new Date}]).length;s<a;s++)for(var c in o[s])o[s].hasOwnProperty(c)&&n.push(c+"="+(void 0===o[s][c]?"":o[s][c]));wx.request({url:m.api_base+"?"+n.join("&").toLowerCase()})}}},Data:{userInfo:null,lanchInfo:null}};t.exports=h},,function(t,e,n){e.a=function(t,e){function n(t,e){var n={small:"234x146",normal:"330x2147483647",large:"320x120",articleNormal:r,largeCover:"750x318",littleCover:"375x288"};e?(i=n[e].split("x")[0],s=n[e].split("x")[1]):(i=320,s=260);var o=void 0,a=t?t.split("*")[0]:i,c=void 0,l=t?t.split("*")[1]:s;return a/l>i/s?(o=i,c=Math.round(i/a*l)):a/l<i/s?(o=i,c=Math.round(i/a*l)):(c=s,o=i),o+"x"+c}t&&""!=t.src||(t={src:"http://static.ws.126.net/utf8/3g/touch/images/share-logo.png"});var o=["s.cimg.163.com","nimg.ws.126.net"],a=/(\.jpg)|(\.jpeg)|(\.webp)|(\.png)/i,i=void 0,s=void 0,r="346x260";wx.getSystemInfo({success:function(t){var e=t.windowWidth;r=e-30*e/375+"x260"}});var c=void 0,l=t.imgsrc?t.imgsrc.replace(/\s/g,""):t.src,d=t.pixel,u=n(d,e).split("x"),p=l.match(a)?l.match(a)[0].replace(".",""):"jpg",m=o.indexOf(l.match(/http:\/\/(.*?)\//)[1]),h="articleNormal"==e?"640x10000":n(d,e);return c=-1==m&&p?"http://nimg.ws.126.net/?url="+l+"&thumbnail="+h+"&quality=95&type="+p:l,{alt:t.alt,src:c,width:u[0],height:u[1]}}},function(t,e,n){var o=n(18),a=n(19),i=!1,s=n(0)(o.a,a.a,function(t){i||n(17)},"data-v-9e0ce8de",null);s.options.__file="src/components/base/LoginBtn.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] LoginBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e,n){var o=n(3),a=n.n(o),i=n(25);a.a.use(i.a),e.a={}},function(t,e,n){var o=n(3),a=n.n(o),i=n(1),s=n(8),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};a.a.use(i.a);var c=new i.a.Store(r({strict:!0},s.a));e.a=c},function(t,e,n){function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var i,s=n(9),r=n(4),c={state:{showOpenNewsApp:!1,deviceInfo:{isIOS:!1,isIphoneX:!1,hasFringe:!1,statusBar24:!0,windowHeight:0,windowWidth:0},user:{isLogin:"",provinceChinese:"北京",cityChinese:"北京",lastVisitTime:0},needRefreshCollection:!1,showDownloadModal:!1,showShareModal:!1,navLinkData:{toutiao:[],yule:[],tiyu:[],bendi:[],caijin:[],keji:[],fangchan:[],dujia:[],lishi:[],xiangguantuijian:[]},markReadDocIds:[]},mutations:(i={},o(i,"SHOW_OPEN_NEWS_APP",function(t,e){var n=[1036,1069];t.showOpenNewsApp=-1!==n.indexOf(e.scene)}),o(i,"DEVICE_INFO",function(t,e){t.deviceInfo=e.data}),o(i,"USER",function(t,e){t.user=Object.assign(t.user,e.user),console.log(t.user)}),o(i,"REFRESH_COLLECTION",function(t,e){t.needRefreshCollection=e.needRefreshCollection}),o(i,"MODAL_DOWNLOAD",function(t,e){t.showDownloadModal=e.showDownloadModal}),o(i,"MODAL_SHARE",function(t,e){t.showShareModal=e.showShareModal}),o(i,"NAVLINK_CLASS",function(t,e){t.navLinkData=e.data}),o(i,"MARK_READ",function(t,e){"String"===e.type?!t.markReadDocIds.indexOf(e.data)>-1&&(t.markReadDocIds=[].concat(a(t.markReadDocIds),[e.data]).slice(-200)):t.markReadDocIds=[].concat(a(new Set([].concat(a(t.markReadDocIds),a(e.data))))).slice(-200)}),i),actions:{initLoginData:function(t){var e=t.commit;return new Promise(function(t){s.a.login(function(t){console.log("login success "),e({type:"USER",user:{isLogin:!0,avatarUrl:t.avatarUrl,nickName:t.nickName}})},function(){e({type:"USER",user:{isLogin:!1}}),t(),console.log("login failure")})})},getDeviceInfo:function(t){var e=t.commit,n=t.state;return new Promise(function(t){var o=wx.getSystemInfoSync();n.deviceInfo.windowHeight===o.windowHeight?t():(console.log("设备信息"),console.log(o)),e(/IOS/gi.test(o.system)?{type:"DEVICE_INFO",data:{isIOS:!0,isIphoneX:/iPhone X/gi.test(o.model),windowHeight:o.windowHeight,windowWidth:o.windowWidth,hasFringe:o.statusBarHeight>24,statusBar24:24===o.statusBarHeight}}:{type:"DEVICE_INFO",data:{isIOS:!1,windowHeight:o.windowHeight,windowWidth:o.windowWidth,hasFringe:o.statusBarHeight>26,statusBar24:o.statusBarHeight>=22&&o.statusBarHeight<=26}}),t()})},getNavLinkData:function(t){var e=t.commit;wx.requestWithCookie({url:"https://c.m.163.com/ug/api/happynuts/app/advert/app-info",success:function(t){var n=t.data.data;for(var o in n)n[o].map(function(t){t.appId=t.appId?t.appId:"wx6664983624b1a9aa",t.url=t.url,t.imgsrc=Object(r.a)({src:t.imgSrc},"normal").src,t.type="nav_link"});e({type:"NAVLINK_CLASS",data:n})}})}}};e.a=c},,function(t,e){t.exports={tabs:[{name:"热榜",tid:"hotpost"},{name:"头条",tid:"toutiao"},{name:"娱乐",url:"",tid:"T1348648517839"},{name:"体育",url:"",tid:"T1348649079062"},{name:"本地",url:""},{name:"科技",tid:"T1348649580692",url:""},{name:"财经",tid:"T1348648756099",url:""},{name:"独家",type:"common",tid:"T1370583240249",url:""},{name:"历史",type:"common",tid:"T1368497029546"},{name:"军事",type:"common",tid:"T1348648141035",url:""},{name:"汽车",type:"common",tid:"T1348654060988",url:""},{name:"房产",type:"common",tid:"T1348654085632",url:""},{name:"数码",type:"common",tid:"T1348649776727",url:""}],api:{article:"https://c.m.163.com/nc/article/{{docid}}/full.html",video:"https://c.m.163.com/nc/video/detail/{{id}}.html",photo:"https://c.m.163.com/photo/api/set/{{cid}}/{{sid}}.json",commonlist:"https://c.m.163.com/nc/article/list/{{tid}}/{{start}}-10.html",dynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/headline-list",channeldynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/normal-list",localList:"https://c.m.163.com/dlist/article/local/dynamic",video_list:"https://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&subtab={{subtab}}&size={{pageSize}}&offset={{offset}}",video_related_list:"https://c.m.163.com/releate/video/dynamic?videoid={{id}}&appname=xiaochengxu",favorite_list:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite?pageNo={{pageNo}}",favorite_add:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/add",favorite_cancel:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/cancel",favorite_check:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/check",hot_postlist:"https://taidu.3g.163.com/news-support/weixin/miniprogram/comment/hotList"},allowType:["video","article","doc"],topNewsTag:"S",topNewsTag2:"S+"}},function(t,e,n){e.a=function(t){try{var e=new Date(t.replace(/-/g,"/")),n=new Date,s=n-e;if(s<o)return"刚刚";if(s<a)return Math.floor(s/o)+"分钟前";if(s<i)return Math.floor(s/a)+"小时前";var r=t.split(" "),c=/(\S+):\d{2}/.exec(r[1])[1],l=n-new Date(r[0]);return l<2*i?"昨天"+c:l<3*i?"前天"+c:e.getFullYear()===n.getFullYear()?/-(\S+)/.exec(r[0])[1]:r[0]}catch(e){return t}};var o=6e4,a=36e5,i=864e5},function(t,e,n){var o=n(14),a=n(15),i=!1,s=n(0)(o.a,a.a,function(t){i||n(13)},null,null);s.options.__file="src/components/PageError.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] PageError.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){e.a={name:"page-error",props:{type:String,clickfun:Function,clickbtn:Boolean},methods:{back:function(){getCurrentPages().length<2?wx.switchTab({url:"/pages/Home"}):wx.navigateBack()}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-error"},["dataError"===t.type?n("block",[n("div",{staticClass:"empty"}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("此页面内容没有了")]),t._v(" "),n("div",{staticClass:"error-btn",attrs:{eventid:"0"},on:{click:t.back}},[t._v("返回")])]):t._e(),t._v(" "),"emptyComment"===t.type?n("block",[n("div",{staticClass:"empty-comment"}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("暂无跟贴")]),t._v(" "),n("div",{staticClass:"error-btn",attrs:{eventid:"1"},on:{click:t.back}},[t._v("返回")])]):"netError"===t.type?n("block",[n("image",{staticClass:"net-error",attrs:{src:"/static/net-error.png"}}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("你的网络出现问题啦")]),t._v(" "),t.clickbtn?n("block",[n("div",{staticClass:"error-btn",attrs:{eventid:"2"},on:{click:t.clickfun}},[t._v("重新加载")])]):t._e()],1):"netLoading"===t.type?n("block",[n("div",{staticClass:"loading"},[n("div",{staticClass:"loader-spin center"},[n("span")]),t._v(" "),n("image",{staticClass:"loading-img",attrs:{src:"/static/bg-ntease.png"}})])]):t._e()],1)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){function o(){var t=wx.getStorageSync("deviceId");if(!t){var e=r.a.parse((new Date).getTime().toString()+Math.random().toString());t=l.a.stringify(e),wx.setStorageSync("deviceId",t)}return t}var a=n(29),i=n.n(a),s=n(30),r=n.n(s),c=n(26),l=n.n(c),d=n(42),u=n.n(d),p=n(43),m=n.n(p),h=n(44),f=n.n(h),v=o(),g=function(){var t=wx.getStorageSync("AESDeviceId");if(!t){t=(new Date).getTime().toString()+Math.random().toString();var e=r.a.parse("neteasenewsboard");t=(t=u.a.encrypt(t,e,{mode:m.a,padding:f.a}).toString()).replace(/\+/g,"%2B"),wx.setStorageSync("AESDeviceId",t)}return t}(),w={request:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(o||a){var i=a?g:v;-1===t.indexOf("?")?t+="?devId="+i:"?"===t.slice(-1)?t+="devId="+i:t+="&devId="+i}a?wx.requestWithCookie({url:t,success:function(t){e&&e(t)},fail:function(){n&&n()}}):wx.requestWithCookie({url:t,header:{"content-type":"application/json","User-D":v,"User-DID":v},success:function(t){e&&e(t)},fail:function(){n&&n()}})},timeFormat:function(t){var e=Math.floor(t/60),n=t%60;return e=e<10?"0"+e:e,n=n<10?"0"+n:n,e+":"+n},getDeviceId:o,optImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:750,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2147483647,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75;return t?i()(t,e,n,o):"static.ws.126.net/163/frontend/newsapp-wxmp/static/bg-ntease.png"}};e.a=w},function(t,e){},function(t,e,n){var o=n(1),a=n(9),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"login-btn",props:["callback","formType"],computed:i({},Object(o.d)(["user"]),{isLogin:function(){return this.user.isLogin}}),methods:i({},Object(o.c)(["USER"]),{doLogin:function(t){var e=this;this.isLogin?(console.log("已登录"),!this.user.nickname&&this.USER({user:t.target.userInfo}),this.callback&&this.callback()):t.target.userInfo?(wx.showLoading(),console.log("授权"),a.a.login(function(){console.log("login success"),e.USER({user:i({},t.target.userInfo,{isLogin:!0})}),wx.hideLoading(),e.callback&&e.callback()},function(){console.log("login failed"),e.USER({user:i({},t.target.userInfo,{isLogin:!1})}),wx.hideLoading(),e.callback&&e.callback()})):console.log("拒绝授权")}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"login-btn",attrs:{"open-type":"getUserInfo","hover-class":"none",formType:t.formType,eventid:"0"},on:{getuserinfo:t.doLogin}},[t._t("default",null,{mpcomid:"0"})],2)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=t/1e4;return e>1?e>1e4?(e/1e4).toFixed(1)+"亿":e.toFixed(1)+"万":t}},,function(t,e,n){var o=n(36),a=n(37),i=!1,s=n(0)(o.a,a.a,function(t){i||n(35)},null,null);s.options.__file="src/components/ShareMoments.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] ShareMoments.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e,n){var o=n(53),a=n(54),i=!1,s=n(0)(o.a,a.a,function(t){i||n(52)},"data-v-b723dbb0",null);s.options.__file="src/components/base/ShareBtns.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] ShareBtns.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},,,,function(t,e,n){var o=n(33),a=n(34),i=!1,s=n(0)(o.a,a.a,function(t){i||n(32)},null,null);s.options.__file="src/components/CollectionBtn.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] CollectionBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e,n){var o=n(57),a=n(58),i=!1,s=n(0)(o.a,a.a,function(t){i||n(56)},null,null);s.options.__file="src/components/base/LaunchBtn.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] LaunchBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},,,function(t,e,n){var o={"微笑":"https://static.ws.126.net/3g/emoticon/1000_weixiao.png","可怜":"https://static.ws.126.net/3g/emoticon/1000_kelian.png","被黑":"https://static.ws.126.net/3g/emoticon/1000_beihei.png","色色":"https://static.ws.126.net/3g/emoticon/1000_sese.png","羞羞":"https://static.ws.126.net/3g/emoticon/1000_xiuxiu.png","窃笑":"https://static.ws.126.net/3g/emoticon/1000_qiexiao.png","惊讶":"https://static.ws.126.net/3g/emoticon/1000_jingxia.png","疑问":"https://static.ws.126.net/3g/emoticon/1000_yiwen.png","疲惫":"https://static.ws.126.net/3g/emoticon/1000_pibei.png","喷水":"https://static.ws.126.net/3g/emoticon/1000_penshui.png","狗":"https://static.ws.126.net/3g/emoticon/1000_gou.png","鄙视":"https://static.ws.126.net/3g/emoticon/1000_bishi.png","挨揍":"https://static.ws.126.net/3g/emoticon/1000_aizou.png","骷髅":"https://static.ws.126.net/3g/emoticon/1000_kulou.png","不屑":"https://static.ws.126.net/3g/emoticon/1000_buxie.png","大笑":"https://static.ws.126.net/3g/emoticon/1000_daxiao.png","晕":"https://static.ws.126.net/3g/emoticon/1000_yun.png","大哭":"https://static.ws.126.net/3g/emoticon/1000_daku.png","暴怒":"https://static.ws.126.net/3g/emoticon/1000_baonu.png","石化":"https://static.ws.126.net/3g/emoticon/1000_shihua.png","鼓掌":"https://static.ws.126.net/3g/emoticon/1000_guzhang.png","抱抱":"https://static.ws.126.net/3g/emoticon/1000_baobao.png","比心":"https://static.ws.126.net/3g/emoticon/1000_bixin.png","污":"https://static.ws.126.net/3g/emoticon/1000_wu.png","老司机":"https://static.ws.126.net/3g/emoticon/1000_laosiji.png","大师":"https://static.ws.126.net/3g/emoticon/1000_dashi.png","二楼":"https://static.ws.126.net/3g/emoticon/1000_erlou.png"};e.a=function(t){return t.replace(/\[(.*?)\]/g,function(t){var e=t.match(/\[(.*)\]/)[1],n=o[e];return n?'<img class="emoji" src="'+n+'" />':t})}},function(t,e){},function(t,e,n){var o=n(1),a=n(5),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"collection-btn",props:{id:{default:""},type:{default:"doc"}},data:function(){return{hasCollected:!1}},watch:{id:function(){this.checkState()}},components:{LoginBtn:a.a},mounted:function(){this.checkState()},computed:i({},Object(o.d)(["user"])),methods:i({},Object(o.c)(["REFRESH_COLLECTION"]),{checkState:function(){if(this.user.isLogin){var t=this;wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/check",data:{contentType:this.type,contentId:this.id},method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){try{t.hasCollected=e.data.data.hasAddFavorite}catch(e){t.hasCollected=!1}}})}},dealCollectionClick:function(){var t=this;this.REFRESH_COLLECTION({needRefreshCollection:!0}),this.hasCollected?wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/cancel",data:{contentType:this.type,contentId:this.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data.data.result&&(t.hasCollected=!1,wx.showToast({title:"已取消收藏",icon:"success",duration:2e3}))},fail:function(){wx.showToast({title:"取消收藏失败",icon:"none",duration:2e3})}}):wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/add",data:{contentType:this.type,contentId:this.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data.data.result&&(t.hasCollected=!0,wx.showToast({title:"收藏成功",icon:"success",duration:2e3}))},fail:function(){wx.showToast({title:"收藏失败",icon:"none",duration:2e3})}})}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collection-btn"},[n("div",{class:["icon-star",t.hasCollected?"icon-star-yellow":"icon-star-border"]}),t._v(" "),n("login-btn",{attrs:{callback:t.dealCollectionClick,mpcomid:"0"}})],1)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e){},function(e,n,o){var a=o(1),i=o(5),s=o(2),r=o.n(s),c="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)},l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};n.a={name:"share-moments",props:["headImg","title","docid"],data:function(){return{shareDOM:"",saveBtn:{openType:"",state:"",text:"保存"},chosenIndex:void 0,scaleDOMRatio:0,showChoiceBlock:!1,tags:["https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag0.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag1.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag2.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag3.png"]}},computed:l({},Object(a.d)(["deviceInfo","showShareModal","user"])),watch:{showShareModal:function(){this.showShareModal&&(this.resetData(),this.dealShareMomentsClick())}},components:{LoginBtn:i.a},onReady:function(){this.shareDOM=wx.createCanvasContext("share")},onPageScroll:function(){this.showShareModal&&this.closeModal()},methods:l({},Object(a.c)(["MODAL_SHARE"]),Object(a.b)(["getDeviceInfo"]),{dealShareMomentsClick:function(){var t=this,e=this;wx.showLoading({title:"正在生成图片"}),this.getDeviceInfo().then(function(){t.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),t.shareDOM.fillRect(0,0,t.deviceInfo.windowWidth,t.deviceInfo.windowHeight),t.shareDOM.draw()});var n=[this.getHeadImgAsync(this.headImg).then(function(e){return t.getImgCachePath(e)}),this.getImgCachePath(this.user.avatarUrl||"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/default-avatar-new.png"),this.getImgCachePath(this.getQrCodeUrl()),this.getImgCachePath("https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/icon-logo.png")];Promise.all(n).then(function(e){wx.hideLoading(),t.drawCanvasContent({headImg:e[0],avatarImg:e[1],qrCode:e[2],logo:e[3]}),t.showChoiceBlock=!0}).catch(function(t){console.log(t),r.a.Event.stat("error_generate_img",{error:t}),e.showShareModal&&wx.showToast({title:"获取图片失败",icon:"none",duration:1500,success:function(){setTimeout(function(){e.closeModal()},1500)}})})},getQrCodeUrl:function(){var t=getCurrentPages(),e=t[t.length-1],n=this.docid?this.docid:e.options.docid;if(!n){var o=decodeURIComponent(e.options.scene);n=o&&o.split("=")[1]}return"https://taidu.3g.163.com/news-support/weixin/miniprogram/api/getwxacode?scene=docid="+n.replace("|","/")+"&page="+e.route},getHeadImgAsync:function(t){var e="https://static.ws.126.net/163/frontend/newsapp-wxmp/static/common/default-share-img.png";return t?(t=t.replace("http://","https://"),new Promise(function(n){wx.getImageInfo({src:t,success:function(o){if(o.width>=400&&o.width/o.height<=2&&o.width/o.height>=16/15){var a=Math.round(o.width>=750?750:o.width),i=Math.round(a/16*10);n(t+"?imageView&thumbnail="+a+"y"+i)}else n(e)},fail:function(){n(e)}})})):Promise.resolve(e)},getImgCachePath:function(t){return new Promise(function(e,n){wx.downloadFile({url:t,success:function(o){200===o.statusCode?e(o.tempFilePath):(r.a.Event.stat("error_request",{url:t,msg:"非200",filename:t.substring(t.lastIndexOf("/")+1)}),n("请求服务器图片"+t+"出错"))},fail:function(){r.a.Event.stat("error_request",{url:t,msg:"请求失败",filename:t.substring(t.lastIndexOf("/")+1)}),n("微信下载"+t+"失败")}})})},closeModal:function(t){if(this.showShareModal){try{var e=t.mp.currentTarget.dataset.event||"closeModal",n=t.mp.currentTarget.dataset.platform||"";r.a.Event.stat(e,{platform:n})}catch(t){r.a.Event.stat("closeModal",{})}this.MODAL_SHARE({showShareModal:!1}),wx.hideLoading()}},drawCanvasContent:function(t){var e=t.headImg,n=t.avatarImg,o=t.qrCode,a=t.logo;this.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),this.shareDOM.fillRect(0,0,this.deviceInfo.windowWidth,this.deviceInfo.windowHeight),this.shareDOM.draw();var i=this.shareDOM,s=this.deviceInfo.windowWidth/750*1/2;this.scaleDOMRatio=s,i.scale(s,s);var r=this.deviceInfo.windowHeight/s-1884;i.translate(0,r),i.setFillStyle("white"),i.fillRect(32,0,1436,36),i.fillRect(0,32,1500,1852),i.arc(1472,32,32,0,2*Math.PI),i.fill(),i.arc(32,32,32,0,2*Math.PI),i.fill(),i.drawImage(e,310,80,880,550),i.save(),i.beginPath(),i.arc(550,922,30,0,2*Math.PI),i.clip(),i.drawImage(n,520,892,60,60),i.restore(),i.draw(!0),i.setFontSize(52),i.setFillStyle("#333333");var c=this.getTextArr(i,this.title,832);c.length>3?(i.fillText(c[0],334,716,832),i.fillText(c[1].slice(0,-1)+"...",334,794,832)):(i.fillText(c[0],334,716,832),c[1]&&i.fillText(c[1],334,794,832)),i.drawImage(o,334,872,160,160),i.drawImage(a,964,104,206,54),i.setFontSize(36),i.setFillStyle("#000000");var l=i.measureText(this.user.nickName).width;l<288?(i.fillText(this.user.nickName,592,936,l),i.setFillStyle("#666666"),i.fillText("正在读这篇文章",600+l,936,308)):(i.fillText(this.user.nickName.slice(0,7)+"...",592,936,288),i.setFillStyle("#666666"),i.fillText("正在读这篇文章",888,936,308)),i.fillText("长按小程序码，进入",520,1012,336),i.setFillStyle("#EE1A1A"),i.fillText("网易新闻",856,1012,144),i.setFillStyle("#666666"),i.fillText("查看详情",1008,1012,156),i.draw(!0)},saveImg:function(){if("success"!==this.saveBtn.state){r.a.Event.stat("btn_share_save",{});var t=this;this.shareDOM.draw(!0,setTimeout(function(){wx.canvasToTempFilePath({x:155*t.scaleDOMRatio*2,y:t.deviceInfo.windowHeight-902*t.scaleDOMRatio*2,width:440*t.scaleDOMRatio*2,height:501*t.scaleDOMRatio*2,destWidth:750,destHeight:885,canvasId:"share",success:function(e){t.saveImageToPhotos(e.tempFilePath)},fail:function(){r.a.Event.stat("btn_share_save_fail",{}),t.saveBtn={text:"点击重试",state:"fail",openType:""},wx.showToast({title:"保存图片失败",icon:"none",duration:1500}),console.log("canvasToTempFilePath failed")}})},100))}else this.closeModal()},saveImgLater:function(){var t=this;setTimeout(function(){t.saveImg()},300)},saveImageToPhotos:function(t){var e=this;wx.saveImageToPhotosAlbum({filePath:t,success:function(){r.a.Event.stat("btn_share_done",{}),e.saveBtn={text:"我知道了",state:"success"}},fail:function(){r.a.Event.stat("btn_share_fail",{}),!e.saveBtn.openType&&wx.showToast({title:"保存图片失败",icon:"none",duration:1500}),e.saveBtn={text:"点击重试",state:"fail",openType:"openSetting"},console.log("saveImageToPhotosAlbum failed")}})},chooseTag:function(t){var e=this,n=t.mp.target.dataset.index;if(void 0!==n&&parseInt(n,10)!==this.chosenIndex){this.chosenIndex=parseInt(n,10);var o="https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag"+n+".png";this.getImgCachePath(o).then(function(t){e.shareDOM.drawImage(t,914,426,260,260),e.shareDOM.draw(!0)})}},resetData:function(){this.saveBtn={openType:"",state:"",text:"保存"},this.showChoiceBlock=!1,this.chosenIndex=void 0,this.shareDOM&&(this.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),this.shareDOM.fillRect(0,0,this.deviceInfo.windowWidth,this.deviceInfo.windowHeight),this.shareDOM.draw())},getTextArr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments[2];console.log("分享标题类型："+(void 0===e?"undefined":c(e)));for(var o=e.split(""),a=o.length,i=[],s="",r=0;r<a;r++)t.measureText(s).width<n?s+=o[r]:(i.push(s),s=o[r]);return s&&i.push(s),i}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showShareModal?n("div",{staticClass:"bottom-share"},[n("canvas",{staticClass:"canvas",attrs:{"canvas-id":"share","data-event":"btn-share-close",eventid:"5"},on:{touchmove:t.closeModal}},["success"===t.saveBtn.state?n("cover-view",{staticClass:"img-part",attrs:{mpcomid:"11"}},[n("cover-image",{staticClass:"close",attrs:{src:"/static/icon-close.png",eventid:"0",mpcomid:"0"},on:{click:t.closeModal}}),t._v(" "),n("cover-image",{staticClass:"img-rect",attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/share-border1.png",mpcomid:"1"}}),t._v(" "),n("cover-view",{staticClass:"success-hint",attrs:{mpcomid:"2"}},[t._v("已保存至相册，快去分享吧")]),t._v(" "),n("button",{staticClass:"btn-red",attrs:{"hover-class":"none",eventid:"1"},on:{click:t.closeModal}},[t._v("我知道了")])],1):t.showChoiceBlock?n("cover-view",{staticClass:"img-part",attrs:{mpcomid:"10"}},[n("cover-image",{staticClass:"close",attrs:{src:"/static/icon-close.png",eventid:"2",mpcomid:"3"},on:{click:function(e){e.preventDefault(),t.closeModal(e)}}}),t._v(" "),n("cover-image",{staticClass:"img-rect",attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/share-border1.png",mpcomid:"4"}}),t._v(" "),n("cover-view",{staticClass:"hint",attrs:{mpcomid:"5"}},[t._v("点击标签，为你的分享加个态度吧!")]),t._v(" "),n("cover-view",{staticClass:"choices",attrs:{eventid:"3",mpcomid:"7"},on:{click:t.chooseTag}},t._l(t.tags,function(t,e){return n("cover-image",{key:e,attrs:{src:t,"data-index":e,mpcomid:"6-"+e}})})),t._v(" "),n("cover-image",{class:"chosen chosen-"+t.chosenIndex,attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/icon-chosen.png",mpcomid:"8"}}),t._v(" "),n("button",{staticClass:"btn-red",attrs:{"hover-class":"none","open-type":t.saveBtn.openType,eventid:"4"},on:{click:t.saveImg,opensetting:t.saveImgLater}},[n("cover-view",{attrs:{mpcomid:"9"}},[t._v(t._s(t.saveBtn.text))])],1)],1):t._e()],1)]):t._e()},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){var o=n(40),a=n(41),i=!1,s=n(0)(o.a,a.a,function(t){i||n(39)},null,null);s.options.__file="src/components/TopBar.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] TopBar.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){var o=n(1),a=n(2),i=n.n(a),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"top-bar",data:function(){return{returnable:!1,show:!1}},props:{darkMode:{default:!1}},computed:s({},Object(o.d)(["deviceInfo"])),watch:{darkMode:function(){var t=this.darkMode?"#ffffff":"#000000";wx.setNavigationBarColor({frontColor:t,backgroundColor:t})}},onLoad:function(){var t=getCurrentPages();this.returnable=t.length>1,this.show=!0},methods:{formSubmit:function(t){var e=t.mp.detail;wx.requestWithCookie({url:"https://c.m.163.com/uc/activity/miniapp/subscribe",data:{form_id:e.formId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){200===t.data.code&&(i.a.Event.stat("event_push_request",{}),console.log("已订阅"))}});var n=e.target.dataset.name;"back"===n?this.returnable&&(wx.navigateBack(),i.a.Event.stat("btn_topback",{})):"home"===n&&(wx.switchTab({url:"/pages/Home"}),i.a.Event.stat("btn_top2index",{}))}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{class:["top-bar",{"top-bar-fringe":t.deviceInfo.hasFringe},{"top-bar-24":t.deviceInfo.statusBar24},{"top-bar-dark":t.darkMode}],attrs:{"report-submit":"true",eventid:"0"},on:{submit:t.formSubmit}},[n("div",{class:["main",{visible:t.show}]},[n("button",{class:["icon-back",{"icon-back-gray":!t.returnable}],attrs:{formType:"submit","data-name":"back"}}),t._v(" "),n("span",{staticClass:"vertical-line"}),t._v(" "),n("button",{staticClass:"icon-home",attrs:{formType:"submit","data-name":"home"}})],1)])},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},,,,function(t,e,n){var o=n(47),a=n(48),i=!1,s=n(0)(o.a,a.a,function(t){i||n(46)},"data-v-339946ad",null);s.options.__file="src/components/Subscription.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Subscription.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){var o=n(5);e.a={name:"subscription",data:function(){return{showSub:!1,formId:"",isRequesting:!1}},props:["pageRefresh","needMargin"],watch:{pageRefresh:function(t){t&&this.close()}},components:{LoginBtn:o.a},onShow:function(){this.setShowState()},onLoad:function(){this.setShowState()},methods:{setShowState:function(){var t=wx.getStorageSync("subscription");!t||Date.now()-t>6048e5?this.showSub=!0:this.showSub=!1},formSubmit:function(t){this.formId=t.mp.detail.formId},sendSub:function(){if(!this.isRequesting){this.isRequesting=!0;var t=this;wx.requestWithCookie({url:"https://c.m.163.com/uc/activity/miniapp/subscribe",data:{form_id:this.formId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){200===e.data.code?(console.log("开启成功"),wx.showToast({title:"开启成功",icon:"success",duration:2e3}),t.close()):wx.showToast({title:"开启失败",icon:"none",duration:2e3}),t.isRequesting=!1},fail:function(){wx.showToast({title:"开启失败",icon:"none",duration:2e3}),t.isRequesting=!1}})}},close:function(){this.showSub=!1,wx.setStorageSync("subscription",Date.now())}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showSub?n("div",{class:t.needMargin?"subscription subscription-margin":"subscription"},[n("p",{staticClass:"info"},[t._v("开启通知，时刻关注精选资讯")]),t._v(" "),n("form",{attrs:{"report-submit":"true",eventid:"0"},on:{submit:t.formSubmit}},[n("div",{staticClass:"sub-btn"},[n("login-btn",{attrs:{callback:t.sendSub,formType:"submit",mpcomid:"0"}},[t._v("开启")])],1)]),t._v(" "),n("div",{staticClass:"close",attrs:{eventid:"1"},on:{click:t.close}})],1):t._e()},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){var o=n(51),a=n(55),i=!1,s=n(0)(o.a,a.a,function(t){i||n(50)},null,null);s.options.__file="src/components/BottomBar.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] BottomBar.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){var o=n(1),a=n(2),i=n.n(a),s=n(27),r=n(23),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"BottomBar",computed:c({},Object(o.d)(["deviceInfo","showOpenNewsApp"])),props:{id:{},docid:"",postid:"",type:{default:"doc"},commentNumb:{default:0},showCommentIcon:{default:!0},showCollectionIcon:{default:!0}},components:{CollectionBtn:s.a,ShareBtns:r.a},methods:c({},Object(o.c)(["MODAL_SHARE"]),{formSubmit:function(t){var e=t.mp.detail;if(wx.requestWithCookie({url:"https://c.m.163.com/uc/activity/miniapp/subscribe",data:{form_id:e.formId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){200===t.data.code&&(i.a.Event.stat("event_push_request",{}),console.log("已订阅"))}}),"comment"===e.target.dataset.name){var n="photoset"===this.type?this.postid:this.docid;wx.navigateTo({url:"/pages/comments/comments?docid="+n})}}})}},function(t,e){},function(t,e,n){var o=n(1),a=n(2),i=n.n(a),s=n(22),r=n(5),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"share-btns",props:{styleType:{default:""},formType:{default:""}},components:{ShareMoments:s.a,LoginBtn:r.a},methods:c({},Object(o.c)(["MODAL_SHARE"]),{dealWechatIconClick:function(){i.a.Event.stat("btn_share_platform",{platform:"wx-personal"})},dealmomentsIconClick:function(){i.a.Event.stat("btn_share_platform",{platform:"wx-friend"}),this.MODAL_SHARE({showShareModal:!0})}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("block",[n("div",{class:["share-btns",{"share-btns-block":"block"===t.styleType}]},[n("button",{staticClass:"item",attrs:{formType:t.formType,"open-type":"share",eventid:"0"},on:{click:t.dealWechatIconClick}},[n("span",{staticClass:"icon-wechat"}),"block"===t.styleType?n("span",{staticClass:"text"},[t._v("微信")]):t._e()]),t._v(" "),"block"===t.styleType?n("div",{staticClass:"item"},[n("login-btn",{attrs:{callback:t.dealmomentsIconClick,formType:t.formType,mpcomid:"0"}},[n("span",{staticClass:"icon-moments"}),n("span",{staticClass:"text"},[t._v("朋友圈")])])],1):n("div",{staticClass:"item"},[n("login-btn",{attrs:{callback:t.dealmomentsIconClick,formType:t.formType,mpcomid:"1"}},[n("span",{staticClass:"icon-moments"})])],1)],1)])},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{"report-submit":"true",eventid:"0"},on:{submit:t.formSubmit}},[n("div",{class:["bottom-bar",{"bottom-bar-iphoneX":t.deviceInfo.isIphoneX}]},[t.showCommentIcon?n("button",{staticClass:"icon-comment",attrs:{formType:"submit","data-name":"comment"}},[0!==t.commentNumb?n("span",{staticClass:"sub-numb"},[t._v(t._s(t.commentNumb))]):t._e()]):t._e(),t._v(" "),t.showCollectionIcon?n("block",[n("collection-btn",{attrs:{id:t.id,type:t.type,mpcomid:"0"}})],1):t._e(),t._v(" "),n("share-btns",{attrs:{formType:"submit",mpcomid:"1"}})],1)])},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e){},function(t,e,n){var o=n(1),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"launch-btn",props:["launchPath"],methods:a({},Object(o.c)(["MODAL_DOWNLOAD"]),{launchError:function(){this.MODAL_DOWNLOAD({showDownloadModal:!0})}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"launch-btn",attrs:{"open-type":"launchApp","app-parameter":t.launchPath,eventid:"0"},on:{error:t.launchError}},[t._t("default",null,{mpcomid:"0"})],2)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){var o=n(61),a=n(62),i=!1,s=n(0)(o.a,a.a,function(t){i||n(60)},null,null);s.options.__file="src/components/BackflowBottom.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] BackflowBottom.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){var o=n(1),a=n(28),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"backflow-bottom",props:["launchPath"],computed:i({},Object(o.d)(["showOpenNewsApp"])),components:{LaunchBtn:a.a}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showOpenNewsApp?n("div",{staticClass:"backflow-bottom"},[n("p",[t._v("没有找到想要的？打开"),n("span",[t._v("网易新闻")]),t._v("看看吧~")]),t._v(" "),n("launch-btn",{attrs:{launchPath:t.launchPath,mpcomid:"0"}})],1):t._e()},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){var o=n(65),a=n(66),i=!1,s=n(0)(o.a,a.a,function(t){i||n(64)},"data-v-608c3b08",null);s.options.__file="src/components/BottomBarFixed.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] BottomBarFixed.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){var o=n(1),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"bottom-bar-fixed",computed:a({},Object(o.d)(["deviceInfo"]))}},function(t,e,n){var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.deviceInfo.isIphoneX?"bottom-bar-fixed bottom-bar-fixed-iphoneX":"bottom-bar-fixed"]})},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){var o=n(69),a=n(70),i=!1,s=n(0)(o.a,a.a,function(t){i||n(68)},"data-v-89f07016",null);s.options.__file="src/components/ModalDownload.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] ModalDownload.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){var o=n(1),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"modal-download",computed:a({},Object(o.d)(["showDownloadModal"])),methods:a({},Object(o.c)(["MODAL_DOWNLOAD"]),{close:function(){this.MODAL_DOWNLOAD({showDownloadModal:!1})}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showDownloadModal?n("div",{staticClass:"modal-download"},[n("div",{staticClass:"modal-content"},[n("p",[t._v("回复数字“1”，获取下载链接")]),t._v(" "),n("button",{attrs:{"open-type":"contact",eventid:"0"},on:{click:t.close}},[t._v("去下载")])],1),t._v(" "),n("div",{staticClass:"close",attrs:{eventid:"1"},on:{click:t.close}})]):t._e()},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){var o=n(73),a=n(75),i=!1,s=n(0)(o.a,a.a,function(t){i||n(72)},null,null);s.options.__file="src/components/CommentList.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] CommentList.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var a=n(74),i=n(31),s=n(4),r=(n(20),n(11));e.a={name:"comment-list",data:function(){return{nextPage:0,isEmpty:!1,isAll:!1,isRequesting:!1,requestFailed:!1,commentIds:[],comments:{},totalComments:0,showComment:!0,docid:"",unfoldedIds:[]}},computed:{idsLength:function(){return this.commentIds.length},lastComments:function(){for(var t=[],e=0;e<this.idsLength;e++){var n=this.commentIds[e].split(","),o=n[n.length-1];this.needFold(n)&&(n=[n[0],n[1],"",n[n.length-2],o]),n.pop(),this.comments[o].ids=n,t.push(this.comments[o])}return t}},props:{type:{default:"hotList"},limit:{default:10},needLazyLoad:{default:!1},showEmptyHint:{default:!1},showTitle:{default:!0},id:{default:""}},onReady:function(){this.docid=this.id,this.updateData()},onUnload:function(){this.resetData()},onReachBottom:function(){this.needLazyLoad&&this.updateData()},methods:{updateData:function(){var t=this;if(!this.isRequesting){this.isRequesting=!0;var e=a.a+"/threads/"+this.docid+"/app/comments/"+this.type+"?limit="+this.limit+"&offset="+this.nextPage*this.limit+"&headLimit=3&ibc=newsapp";wx.requestWithCookie({url:e,header:{"content-type":"application/json"},success:function(e){if(200===e.statusCode){t.requestFailed=!1;var n=e.data;if(n.code)t.nextPage||(t.isEmpty=!0);else{var o=t.commentIds.indexOf(n.commentIds[0]);t.idsLength>0&&-1!==o&&t.commentIds.splice(o);var a=t.commentIds.concat(n.commentIds),i=Object.assign(t.comments,n.comments);t.nextPage=t.nextPage+1,t.isRequesting=!1,t.commentIds=t.deleteEmpty(a),t.comments=t.formatComments(i),t.totalComments=n.newListSize;var s=n.commentIds.length;0===s?1===t.nextPage?t.isEmpty=!0:(t.isEmpty=!1,t.isAll=!0):s<t.limit&&(t.isEmpty=!1,t.isAll=!0),1===t.nextPage&&(t.showEmptyHint&&t.isEmpty?t.$emit("commentLoaded",{pageError:"emptyComment"}):t.$emit("commentLoaded",{pageError:0}))}}else t.$emit("commentLoaded",{pageError:"dataError"})},fail:function(){t.isRequesting=!1,t.requestFailed=!0,console.log("请求失败，刷新试试"),t.$emit("commentLoaded",{pageError:"netError",func:t.updateData})}})}},requestComment:function(t){var e=t.mp.target.dataset.commentid,n=this;if(!n.isRequesting){n.isRequesting=!0,wx.showLoading();var i=a.a+"/app/threads/"+n.docid+"/comments/"+e+"?ibc=newsapp";wx.requestWithCookie({url:i,header:{"content-type":"application/json"},success:function(t){n.isRequesting=!1,wx.hideLoading();var a=Object.assign(t.data.comments,n.comments);n.comments=n.formatComments(a),n.unfoldedIds=[].concat(o(n.unfoldedIds),[e.toString()])},fail:function(){n.isRequesting=!1,wx.hideLoading(),console.log("展开隐藏跟贴失败")}})}},formatComments:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={};for(var n in t)t[n].user=Object.assign({},t[n].user),e[n]={buildLevel:t[n].buildLevel,content:t[n].content,commentId:t[n].commentId,user:{},deviceInfo:t[n].deviceInfo||{deviceName:""}},e[n].user.nickname=t[n].user.nickname&&t[n].user.nickname.slice(0,10)||"火星网友",e[n].user.avatar=t[n].user.avatar&&Object(s.a)({src:t[n].user.avatar},"small").src||"",e[n].user.location=t[n].user.location,e[n].createTime=t[n].createTime&&Object(r.a)(t[n].createTime),e[n].content=e[n].content.indexOf("</p>")>-1?e[n].content:'<p class="comment-text">'+Object(i.a)(e[n].content)+"</p>";return e},resetData:function(){this.commentIds=[],this.comments={},this.nextPage=0,this.isEmpty="",this.isAll=!1,this.isRequesting=!1,this.showComment=!0,this.docid=""},needFold:function(t){var e=t.length;return!(e<=1)&&(!(this.unfoldedIds.indexOf(t[e-1])>-1)&&e>6)},showMoreGailou:function(){this.$emit("showDetail")},deleteEmpty:function(t){for(var e=[],n=t.length,o=0;o<n;o++)t[o]&&e.push(t[o]);return e}}}},function(t,e,n){n.d(e,"a",function(){return o});var o="https://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856"},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-list"},[t.showTitle&&t.idsLength>0?n("p",{class:"comments-title comments-title-"+t.type}):t._e(),t._v(" "),t._l(t.lastComments,function(e,o){return n("div",{key:e,staticClass:"comment-item"},[n("div",{staticClass:"comment-left"},["火星网友"===e.user.nickname?n("span",{staticClass:"comment-avatar"}):e.user.avatar?n("span",{staticClass:"comment-avatar",style:{backgroundImage:"url("+e.user.avatar+")"}}):n("span",{staticClass:"comment-avatar comment-avatar-noImg"})]),t._v(" "),n("div",{staticClass:"comment-right"},[n("p",{staticClass:"name"},[t._v(t._s(e.user.nickname))]),t._v(" "),n("p",{staticClass:"info"},[t._v(t._s(e.user.location)+"  "+t._s(e.deviceInfo.deviceName)+"  "+t._s(e.createTime))]),t._v(" "),t._l(e.ids,function(a,i){return n("div",{key:e+"-"+o+"-"+i,staticClass:"comment-gailou"},[t.comments[a]?n("div",{staticClass:"gailou-content"},[n("p",{staticClass:"comment-left"},[t._v(t._s(t.comments[a].buildLevel))]),t._v(" "),n("div",{staticClass:"comment-right"},[n("p",{staticClass:"name"},[t._v(t._s(t.comments[a].user.nickname))]),t._v(" "),n("p",{staticClass:"info"},[t._v(t._s(t.comments[a].user.location)+"  "+t._s(t.comments[a].deviceInfo.deviceName)+"  "+t._s(t.comments[a].createTime))]),t._v(" "),n("rich-text",{attrs:{nodes:t.comments[a].content,mpcomid:"0-"+o+"-"+i}})],1)],1):n("div",{staticClass:"gailou-more",attrs:{"data-commentid":e.commentId,eventid:"0-"+o+"-"+i},on:{click:t.requestComment}},[t._v("展开隐藏楼层 "),n("i",{staticClass:"icon-arrow"})],1)])}),t._v(" "),n("rich-text",{attrs:{nodes:e.content,mpcomid:"1-"+o}})],2)])}),t._v(" "),t.isEmpty&&t.needLazyLoad?n("div",{staticClass:"bottom-hint"}):t._e(),t._v(" "),t.isAll&&t.needLazyLoad?n("div",{staticClass:"bottom-hint"},[t._v("已无更多数据")]):t._e(),t._v(" "),"3"===t.limit&&t.idsLength>0?n("navigator",{staticClass:"btn-circle",attrs:{"hover-class":"none",url:"/pages/comments/comments?docid="+t.docid}},[t._v("\n    更多跟贴\n  ")]):"oneWonderfulBuilding"===t.type&&t.idsLength>0?n("navigator",{staticClass:"btn-gailou",attrs:{url:"/pages/comments/comments?type=buildingList&docid="+t.docid}},[t._v("查看更多精彩盖楼\n  ")]):t._e(),t._v(" "),t.nextPage&&!t.isAll&&t.needLazyLoad?n("block",[t.isRequesting?n("div",{staticClass:"refreshing-tip"},[n("div",{staticClass:"refreshing-tip-loading spin-anime-infinite"}),t._v(" "),n("div",[t._v("正在载入")])]):t.requestFailed?n("div",{staticClass:"refreshing-tip",attrs:{eventid:"1"},on:{click:t.updateData}},[n("div",{staticClass:"refreshing-tip-loading"}),t._v(" "),n("div",[t._v("重新加载")])]):t._e()]):t._e()],2)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){e.a=function(t){var e={"　　":"","&hellip;":"...","&quot;":'"',"&lt;":"<","&gt;":">","&acute;":"´","&copy;":"©","&nbsp;":" ","&prime;":"″","&Prime;":"″","&lsquo;":"“","&rsquo;":"”","&darr;":"↓","&amp;":"&","&deg;":"°"};return function(t){return t.replace(/((!?　　)|(&deg;)|(!?&hellip;)|(!?&quot;)|(!?&lt;)|(!?&gt;)|(!?&acute;)|(!?&copy;)|(!?&nbsp;)|(!?&prime;)|(!?&lsquo;)|(!?&rsquo;)|(!?&darr;))/gi,function(t,n,o,a){return e[n]})}(t=t.replace(/<noscript>.*?<\/noscript>/gi,"").replace(/\n/gi,"").replace(/<(\w+)\s+style=["'](.*?)["'].*?>/gi,"<$1>\x3c!--style#$2--\x3e").replace(/<font\scolor=["'](.*?)['"].*?>(.*?)<\/font>/gi,"<span style='color:$1;'>$2</span>"))}},,function(t,e,n){var o=n(80),a=n(81),i=!1,s=n(0)(o.a,a.a,function(t){i||n(79)},null,null);s.options.__file="src/components/CommentBlock.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] CommentBlock.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){var o=n(71);e.a={name:"comment-block",props:["id"],components:{CommentList:o.a}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-block"},[n("comment-list",{attrs:{type:"hotList",limit:"3",showTitle:"true",id:t.id,mpcomid:"0"}})],1)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){var o=n(84),a=n(85),i=!1,s=n(0)(o.a,a.a,function(t){i||n(83)},null,null);s.options.__file="src/components/MoreContentMask.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] MoreContentMask.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){e.a={name:"more-content-mask",props:["hideMoreContent"],methods:{showMore:function(){this.$emit("showMore")}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hideMoreContent?n("div",{staticClass:"more-content-mask",attrs:{eventid:"0"},on:{click:t.showMore}},[n("div",{staticClass:"backflow-arrow-down"})]):t._e()},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){var o=n(88),a=n(89),i=!1,s=n(0)(o.a,a.a,function(t){i||n(87)},null,null);s.options.__file="src/components/RecommendPart.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] RecommendPart.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){var o=n(1),a=n(11),i=n(4),s=n(2),r=n.n(s),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"recommend-part",data:function(){return{dataList:[]}},props:{type:{default:"doc"},docid:{}},computed:c({},Object(o.d)(["navLinkData"])),watch:{dataList:function(){var t=this.dataList.length;this.$emit("recommend",t)}},mounted:function(){this.getRecommend()},methods:{getRecommend:function(){return"photoset"===this.type?this.getRecommendPhotoset():this.getRecommendArticle()},getRecommendArticle:function(){var t=this;wx.requestWithCookie({url:"https://c.m.163.com/hzrelatedoc/xcx/relatedoc?docid="+this.docid,success:function(e){if(e.data.forEach(function(t){t.ptime=Object(a.a)(t.publishTime),t.imgsrc=Object(i.a)({src:t.imgsrc},"small").src}),e.data.length>0){var n=t.getOneRandomNavLink(t.navLinkData.xiangguantuijian);n?(e.data.splice(1,0,n),t.dataList=e.data.slice(0,21)):t.dataList=e.data.slice(0,20)}}})},getRecommendPhotoset:function(){var t=this,e=this.docid.split("|")[0].substr(-4,4),n=this.docid.split("|")[1];wx.requestWithCookie({url:"https://c.m.163.com/photo/api/related/"+e+"/"+n+".json",success:function(n){var o=[],s=!0,r=!1,c=void 0;try{for(var l,d=n.data[Symbol.iterator]();!(s=(l=d.next()).done);s=!0){var u=l.value;o.push({title:u.setname,ptime:Object(a.a)(u.createdate),imgsrc:Object(i.a)({src:u.tcover},"normal").src,docid:e+"|"+u.setid,type:"photoset"})}}catch(t){r=!0,c=t}finally{try{!s&&d.return&&d.return()}finally{if(r)throw c}}t.dataList=o.slice(0,20)}})},readItem:function(t){r.a.Event.stat("event_recommend",{page:this.type,index:t.mp.currentTarget.dataset.index});var e="",n=t.currentTarget.dataset;switch(n.type){case"video":e="/pages/video/video?docid="+n.id;break;case"photoset":e="/pages/photoset/photoset?docid="+n.id;break;default:e="/pages/article/article?docid="+n.id}"nav_link"===n.type?wx.navigateToMiniProgram({appId:""+n.appId,path:""+n.url,success:function(){console.log(),r.a.Event.stat("nav_mp",{appid:""+n.appId,name:"article"}),console.log("跳转公开课成功")},fail:function(){r.a.Event.stat("nav_mp_fail",{appid:""+n.appId,name:"article"}),console.log("跳转公开课失败")}}):wx.redirectTo({url:e})},getOneRandomNavLink:function(t){if(t)return t[Math.floor(Math.random()*t.length)]}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.dataList.length>0?n("div",{staticClass:"recommend-part"},[n("p",{staticClass:"title"},[t._v("相关推荐")]),t._v(" "),t._l(t.dataList,function(e,o){return n("block",{key:"-"+o},[n("div",{staticClass:"news-item",attrs:{"data-id":e.docid,"data-type":e.type,"data-url":e.url,"data-index":o,eventid:"0-"+o},on:{click:t.readItem}},[n("div",{staticClass:"left"},[n("p",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.source)+" "+t._s(e.ptime))])],1),t._v(" "),n("div",{staticClass:"right common-img-default--sm"},[n("img",{attrs:{src:e.imgsrc,mode:"aspectFill"}}),t._v(" "),"video"===e.type?n("div",{staticClass:"icon-play"}):t._e()])])])})],2):t._e()},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var o=n(144),a=n(158),i=!1,s=n(0)(o.a,a.a,function(t){i||n(143)},null,null);s.options.__file="src/pages/article/article.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] article.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){var o=n(1),a=n(16),i=(n(11),n(20)),s=n(76),r=n(10),c=n.n(r),l=n(145),d=n(157),u=n(49),p=n(12),m=n(78),h=n(45),f=n(28),v=n(59),g=n(63),w=n(23),_=n(82),b=n(86),y=n(67),x=n(38),C=n(22),I=n(2),O=n.n(I),k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"app-article",data:function(){return{docid:"",launchPath:"",article:{title:"",desc:"",public:"",body:""},replyCount:0,shareImg:null,pageError:"netLoading",hideMoreContent:!1,recommendLength:0,articleHeight:0}},computed:k({},Object(o.d)(["deviceInfo","showOpenNewsApp","showDownloadModal"]),{windowHeight:function(){return this.deviceInfo.windowHeight}}),components:{AppDoc:l.a,BottomBar:u.a,PageError:p.a,CommentBlock:m.a,Subscription:h.a,LaunchBtn:f.a,BackflowBottom:v.a,BottomBarFixed:g.a,MoreContentMask:_.a,RecommendPart:b.a,ModalDownload:y.a,ShareBtns:w.a,ShareMoments:C.a,TopBar:x.a},onLoad:function(t){if(this.resetData(),this.docid=t.docid,console.log(t),!this.docid){var e=decodeURIComponent(t.scene);console.log("来自二维码:"),console.log(e),this.docid=e&&e.split("=")[1].replace()}this.launchPath="doc/"+this.docid+"?spss=newsapp_xcx",O.a.Page.init(),O.a.Event.stat("pv_article",{docid:this.docid}),this.MARK_READ({type:"String",data:this.docid})},mounted:function(){this.getData()},onUnload:function(){console.log("unload"),this.MODAL_SHARE({showShareModal:!1})},onShareAppMessage:function(){var t=this.article.title||"网易新闻",e=this.docid,n="/static/default-share-banner.png";return this.shareImg&&(n=this.shareImg+"?imageView&thumbnail=340y270"),this.deviceInfo.isIOS?{path:"/pages/article/article?docid="+e+"&spss=screenshot"}:{title:t,path:"/pages/article/article?docid="+e+"&spss=screenshot",imageUrl:n}},methods:k({},Object(o.c)(["MARK_READ","MODAL_SHARE"]),{tapEvent:function(t){console.log(t)},getData:function(){var t=this,e=void 0;a.a.request(c.a.api.article.replace("{{docid}}",this.docid),function(n){var o=n.data[t.docid];if(o){var a=o.title,r=o.digest?Object(s.a)(o.digest):"",c="";if(c=o.ptime?o.source+" "+o.ptime.split(" ")[0]:""+o.source,"webview"===o.template)t.article={title:a,desc:r,public:c,body:[{node:"element",tag:"view",class:"common-p clearfix",content:"内容格式不兼容，请使用网易新闻客户端查看"}]};else{for(var l=[],u=(e=d.a.formatBody(o)).arr_body.length,p=0;p<u;p++)-1!=["video","audio","img","photoset"].indexOf(e.arr_body[p].name)?l.push(e.arr_body[p]):(0!=l.length&&"text"==l[l.length-1].name||l.push({name:"text",nodes:[]}),l[l.length-1].nodes.push(e.arr_body[p]));t.article={title:a,desc:r,public:c,body:l},t.hideMoreContent=t.showOpenNewsApp&&e.mediaHeight>=1.5*t.windowHeight}t.pageError=0,t.get_share_img(o.img),t.hideMoreContent?(t.articleHeight=1.3*t.windowHeight,console.log("文章高度："+t.articleHeight)):setTimeout(function(){try{var e=wx.createSelectorQuery();e.select("#article").boundingClientRect(),e.exec(function(e){e[0]?(t.showOpenNewsApp&&e[0].height>=1.5*t.windowHeight?(t.hideMoreContent=!0,t.articleHeight=1.3*t.windowHeight):(t.hideMoreContent=!1,t.articleHeight=e[0].height),console.log("文章高度："+t.articleHeight)):console.log("haven't got article height")})}catch(t){console.error(t)}},500),wx.request({url:"https://comment.api.163.com/batapi/v1/products/a2869674571f77b5a0867c3d71db5856/thread/app/summary/"+t.docid+"?ibc=newsapp",success:function(e){t.replyCount=Object(i.a)(e.data.cmtCount)}})}else t.pageError="dataError"},function(){t.pageError="netError"})},get_share_img:function(t){var e=Array.isArray(t)&&t[0];if(e){var n=e.pixel,o=void 0===n?"":n,a=e.src,i=o.split("*")[0],s=o.split("*")[1];if(!i||!s)return;Math.round(i/s)*Math.round(s/i)==0||i<=200||s<=200?this.shareImg=null:this.shareImg=a}else this.shareImg=null},showMore:function(){this.hideMoreContent=!1},checkRecommendLength:function(t){this.recommendLength=t},resetData:function(){this.pageError="netLoading",this.article={title:"",desc:"",public:"",body:""},this.replyCount=0,this.articleHeight=0}})}},function(t,e,n){var o=n(147),a=n(156),i=!1,s=n(0)(o.a,a.a,function(t){i||n(146)},null,null);s.options.__file="src/pages/article/components/tmplt.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] tmplt.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){var o=n(148),a=n(152);e.a={name:"AppDoc",props:{nodes:{}},components:{ImageMod:o.a,MediaMod:a.a},data:function(){return{}},computed:{}}},function(t,e,n){var o=n(150),a=n(151),i=!1,s=n(0)(o.a,a.a,function(t){i||n(149)},"data-v-5e194d93",null);s.options.__file="src/pages/article/components/ImageMod.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] ImageMod.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){e.a={name:"image-mod",props:{item:{}},data:function(){return{}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"photoset"==t.item.name?n("div",[t.item.attrs.photosetID?n("view",{staticClass:"m-photo"},[n("navigator",{staticClass:"m-photo",attrs:{url:"../photoset/photoset?docid="+t.item.attrs.photosetID}},[n("img",{staticClass:"common-img-default",class:t.item.attrs.class,style:[{width:t.item.attrs.width+"px",height:t.item.attrs.height+"px"}],attrs:{id:t.item.id,src:t.item.attrs.src,mode:"aspectFit"}}),t._v(" "),n("i",{staticClass:"photo-tag"})],1)],1):t._e()]):"img"==t.item.name?n("div",[n("view",{staticClass:"m-photo"},[n("img",{staticClass:"common-img-default",class:t.item.attrs.class,style:[{width:t.item.attrs.width+"px",height:t.item.attrs.height+"px"}],attrs:{id:t.item.attrs.id,src:t.item.attrs.src,mode:"aspectFit"}})])]):t._e()},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){var o=n(154),a=n(155),i=!1,s=n(0)(o.a,a.a,function(t){i||n(153)},null,null);s.options.__file="src/pages/article/components/MediaMod.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] MediaMod.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},function(t,e){},function(t,e,n){var o=n(1),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=requirePlugin("ntesmp");e.a={name:"media-mod",props:{item:{}},data:function(){return{videoContext:void 0,isPlaying:!1}},computed:a({},Object(o.d)(["showDownloadModal","showOpenNewsApp"])),watch:{showDownloadModal:function(){if(this.showDownloadModal){var t=this.getCurrentVideoContext();t&&t.pause()}},showShareModal:function(){var t=this.getCurrentVideoContext();this.showShareModal?t&&t.pause():t&&t.play()}},mounted:function(){"video"===this.item.tag&&(this.videoContext=i.getVideoContext("video"))},methods:{play:function(){this.isPlaying=!0,this.getCurrentVideoContext().play()},getCurrentVideoContext:function(){return this.videoContext||(this.videoContext=i.getVideoContext("currentVideo")),this.videoContext}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"video"==t.item.name?n("block",[n("view",{class:[t.item.attrs.class,t.item.attrs.class+"-video"]},[n("xvideo",{attrs:{poster:t.item.attrs.cover,src:t.item.attrs.src,controls:"",xid:"currentVideo",mpcomid:"0"}})],1)]):t._e()},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"body clearfix"},t._l(t.nodes,function(e,o){return n("block",{key:o},["video"==e.name?n("block",[n("media-mod",{attrs:{item:e,mpcomid:"0-"+o}})],1):"audio"==e.name?n("block",[n("media-mod",{attrs:{item:e,mpcomid:"1-"+o}})],1):"photoset"==e.name?n("block",[n("image-mod",{attrs:{item:e,mpcomid:"2-"+o}})],1):"img"==e.name?n("block",[n("image-mod",{attrs:{item:e,mpcomid:"3-"+o}})],1):"text"==e.name?n("block",[n("rich-text",{attrs:{nodes:e.nodes,mpcomid:"4-"+o}})],1):t._e()],1)}))},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i},function(e,n,o){var a=o(4),i=o(76),s="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)},r={config:{tags:["strong","b","em","del","span","p"],re:{p:/<\/?p.*?>|<\/?div.*?>|<\/?br\/?>/gi,image:/<!--IMG#\d+-->/g,image_num:/<!--IMG#(\d+)-->/g,video:/<!--VIDEO#\d+-->/g,tagtxt:/<\/?\w+\s?>/gi,tag:/<\/?[\s\w\"\'=\-\:#;]+(?!\/)>/gi,ntag:/<.*?>/g,tagname:/<\/?(\w+)\s?.*?>/gi,ltag:/<\w+\s?.*?>/gi,rtag:/<\/\w+>/gi,spinfo:/<!--SPINFO#\d+-->/g,br:/<br\/>/g}},formatObj:function(t){function e(t){if(""===t||null===t||void 0===t)return!0;if("object"===(void 0===t?"undefined":s(t))){if(Array.isArray(t)){if(0==t.length)return!0;for(var e in t)if(""===t[e]||null===t[e]||void 0===t[e])return!0}}else for(var e in t)if(""===e||null===e||void 0===e)return!0}function n(t){for(var o in t)e(t[o])&&"children"!=o?delete t[o]:"object"===s(t[o])&&n(t[o])}return n(t),t},formatBody:function(t){for(var e=this,n=this.config.re.p,o=this.config.re.image,a=(this.config.re.image_num,this.config.re.video),s=(this.config.re.tagtxt,this.config.re.tag),r=this.config.re.spinfo,c=this.config.re.br,l=t.img&&t.img||"null",d=t.video&&t.video||"null",u=Object(i.a)(t.body).split(n).filter(function(t){return t}),p=[],m=0,h=0,f=t.ec?"[责任编辑："+t.ec+"]":"",v="网易号"==t.articleTags?t.statement:"",g=t.spinfo&&t.spinfo||"null",w=0,_=0,b=0,y=u.length;b<y;b++){if(u[b].match(o))for(var x=u[b].match(o).length,C=0;C<x;C++){var I=this.outputImage(l,m);_+=parseInt(I.height),p.push(I),m+=1}else if(u[b].match(a))for(var O=u[b].match(a).length,C=0;C<O;C++){var k=this.outputVideo(d,h);p.push(k),h+=1}else u[b].match(s)?p=p.concat(this.outputTag(u[b])):p.push(this.outputText(u[b]));if(u[b].match(r))for(var S=u[b].match(r).length,C=0;C<S;C++){var M=g[w].spcontent;Object(i.a)(M).split(c).filter(function(t){return t}).forEach(function(t){p.push(e.outputText(t))}),w+=1}}return f&&p.push({name:"div",attrs:{class:"common-p body-ec clearfix"},children:[{type:"text",text:"[责任编辑："+t.ec+"]"}]}),v&&p.push({name:"div",attrs:{class:"common-p body-state clearfix"},children:[{type:"text",text:v}]}),{mediaHeight:_,arr_body:p}},replaceBody:function(t){var e=this.config.re.ntag;return t=t.replace(/^<!--link.*/gi,"").replace(/<!--link.*?>/gi,"").replace(/<!--.*?>/gi,"").replace(e,"").replace(/[A-Za-z]+:\/\/[A-Za-z0-9\-\_]+\\.[A-Za-z0-9\-\_\%\&\?\/.=]+/,"")},outputImage:function(t,e){var n=Object(a.a)(t[e],"articleNormal"),o=t[e].photosetID?"photoset":"img";return/\.gif$/.test(t[e].src)&&(n.src=t[e].src),{name:o,attrs:{alt:n.alt,height:n.height,width:n.width,src:n.src,class:"img-class perload",photosetID:t[e].photosetID||""}}},outputVideo:function(t,e){return t[e].url_mp4.match(/\.mp4/)?{name:"video",attrs:{src:t[e].url_mp4,class:"media-class",cover:t[e].cover}}:t[e].url_mp4.match(/\.mp3/)?{name:"audio",attrs:{class:"media-class",name:t[e].alt,author:"",poster:t[e].cover,src:t[e].url_mp4}}:{name:"text",class:"common-error",text:"不支持的视频格式"}},outputText:function(t){var e="";return t.match(/<!--style#(.*?)-->/)&&(e=t.match(/<!--style#(.*?)-->/)[1]),this.formatObj({name:"div",attrs:{class:"common-p",style:e},children:[{type:"text",text:this.replaceBody(t)}]})},outputTag:function(t){var e=this.config.re.tag,n=(this.config.re.ntag,this.config.re.tagname,this.config.re.ltag),o=this.config.re.rtag,a=/style=["'](.*?)["']/i,i=t.match(e),s=t.split(e),r=0,c=void 0,l=void 0,d=void 0,u=0,p=void 0,m=void 0,h=void 0,f=i[0].match(a)?i[0].match(a)[1]:"",v=[],g=this.config.tags,w=0!=s[0].length?this.replaceBody(s[0]):"";v.push(this.formatObj({name:"div",attrs:{style:f,class:"inlinebody tag1"},children:[{type:"text",text:w}]}));for(var _=0,b=i.length;_<b;_++){switch(m=i[_].match(/<\/?(\w+)\s?.*?>/i)[1],h="",f="",i[_].match(n)&&-1!=g.indexOf(m)?(f=i[_].match(a)?i[_].match(a)[1]:"",h=m,u=1):u=(i[_].match(o)&&g.indexOf(m),-1),r){case 0:p=c=v[0];break;case 1:l=c.children[c.children.length-1],p=r>0?l:c;break;case 2:d=l.children[l.children.length-1],p=r>0?d:l}if(0!=s[_+1].length){var y=!!i[_+1]&&i[_+1].match(o);!i[_+1]||y||r>2?p.children.push(this.formatObj({name:"span",attrs:{chass:"tag2",style:f,class:h&&"common-"+h},children:[{type:"text",text:this.replaceBody(s[_+1])}]})):(r=u+r>=0?u+r:0,p.children.push(this.formatObj({name:"span",attrs:{style:f,dataset:"1",class:h&&"common-"+h},children:[{type:"text",text:this.replaceBody(s[_+1])}]})))}}return v},post:function(t){var e=this,n=[];return t.forEach(function(t){var o=[];for(var a in t){var i=t[a];if("NON"===a)return;var s=i.f.trim().replace("：","").split("&nbsp;"),r=s[1]?"["+s[1]+"]":"";o.push({headImg:i.timg,name:""+s[0]+r,good:i.v,text:e.replaceBody(i.b)})}n.push(o)}),n}};n.a=r},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("block",[n("top-bar",{attrs:{mpcomid:"0"}}),t._v(" "),0===t.pageError?n("div",{staticClass:"app-article"},[t.showOpenNewsApp?n("div",{staticClass:"backflow-top"},[n("launch-btn",{attrs:{launchPath:t.launchPath,mpcomid:"1"}})],1):t._e(),t._v(" "),n("div",{class:t.hideMoreContent?"article-wrapper backflow-fixed-height":"article-wrapper",attrs:{id:"article"}},[n("div",{staticClass:"endpage-title"},[n("p",[t._v(t._s(t.article.title))])],1),t._v(" "),n("div",{staticClass:"endpage-public"},[n("p",[t._v(t._s(t.article.public))])],1),t._v(" "),t.article.desc?n("div",{staticClass:"endpage-desc"},[n("p",[t._v(t._s(t.article.desc))])],1):t._e(),t._v(" "),n("AppDoc",{attrs:{nodes:t.article.body,mpcomid:"2"}}),t._v(" "),n("more-content-mask",{attrs:{hideMoreContent:t.hideMoreContent,eventid:"0",mpcomid:"3"},on:{showMore:t.showMore}})],1),t._v(" "),t.showOpenNewsApp?n("block",[n("div",{staticClass:"common-launch-circle"},[n("launch-btn",{attrs:{launchPath:t.launchPath,mpcomid:"4"}},[t._v("\n          打开网易新闻，阅读更佳\n        ")])],1),t._v(" "),n("share-btns",{attrs:{styleType:"block",mpcomid:"5"}})],1):n("block",[n("share-btns",{attrs:{styleType:"block",mpcomid:"6"}}),t._v(" "),n("subscription",{attrs:{needMargin:"true",mpcomid:"7"}})],1),t._v(" "),t.recommendLength>0?n("block",[n("ad",{attrs:{"unit-id":"adunit-81631da33bad4d4a",mpcomid:"8"}})],1):t._e(),t._v(" "),n("comment-block",{attrs:{id:t.docid,mpcomid:"9"}}),t._v(" "),n("recommend-part",{attrs:{type:t.doc,docid:t.docid,eventid:"1",mpcomid:"10"},on:{recommend:t.checkRecommendLength}}),t._v(" "),n("backflow-bottom",{attrs:{launchPath:t.launchPath,mpcomid:"11"}}),t._v(" "),n("bottom-bar-fixed",{attrs:{mpcomid:"12"}}),t._v(" "),n("bottom-bar",{attrs:{id:t.docid,type:"doc",commentNumb:t.replyCount,docid:t.docid,mpcomid:"13"}}),t._v(" "),n("share-moments",{attrs:{headImg:t.shareImg,title:t.article.title,docid:t.docid,mpcomid:"14"}}),t._v(" "),n("modal-download",{attrs:{mpcomid:"15"}})],1):n("block",[n("page-error",{attrs:{type:t.pageError,clickbtn:"netError"===t.pageError,clickfun:t.getData,mpcomid:"16"}})],1)],1)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.a=i}],[174]); 
 			}); 	require("pages/article/article.js");
 		__wxRoute = 'pages/photoset/photoset';__wxRouteBegin = true; 	define("pages/photoset/photoset.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};require("../../9FA2E4459104369CF9C48C4278C17C83.js"),global.webpackJsonp([1],[,,function(t,e){function n(t){wx.getNetworkType({success:function(e){t(e.networkType)}})}function o(){var t=wx.getSystemInfoSync();return{adt:encodeURIComponent(t.model),scl:t.pixelRatio,scr:t.windowWidth+"x"+t.windowHeight,lg:t.language,fl:t.version,jv:encodeURIComponent(t.system),tz:encodeURIComponent(t.platform)}}function a(){try{return wx.getStorageSync(m.prefix+"auid")}catch(t){}}function s(){try{var t=c();return wx.setStorageSync(m.prefix+"auid",t),t}catch(t){}}function i(){try{return wx.getStorageSync(m.prefix+"ssid")}catch(t){}}function r(){try{var t="s"+c();return wx.setStorageSync(m.prefix+"ssid",t),t}catch(t){}}function c(t){for(var e=[0,1,2,3,4,5,6,7,8,9],n=10;1<n;n--){var o=Math.floor(10*Math.random()),a=e[o];e[o]=e[n-1],e[n-1]=a}for(n=o=0;5>n;n++)o=10*o+e[n];return(t||"")+(o+"")+ +new Date}function l(){try{var t=getCurrentPages(),e="/";return 0<t.length&&(e=t.pop().__route__),e}catch(t){console.log("get current page path error:"+t)}}function d(){var t={dm:"wechat.apps.xx",url:l(),pvi:"",si:"",ty:0};return t.pvi=function(){var e=a();return e||(e=s(),t.ty=1),e}(),t.si=function(){var t=i();return t||(t=r()),t}(),t}function u(){var t=o();return n(function(t){try{wx.setStorageSync(m.prefix+"ntdata",t)}catch(t){}}),t.ct=wx.getStorageSync(m.prefix+"ntdata")||"4g",t}function p(){var t,e=h.Data.userInfo,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t+"="+e[t]);return e=n.join(";"),{r2:m.app_id,r4:"wx",ext:"v="+m.version+(null!==e&&""!==e?";ui="+encodeURIComponent(e):"")}}var m={app_id:"",event_id:"",api_base:"https://pingtas.qq.com/pingd",prefix:"_mta_",version:"1.3.5",stat_share_app:!1,stat_pull_down_fresh:!1,stat_reach_bottom:!1},h={App:{init:function(t){"appID"in t&&(m.app_id=t.appID),"eventID"in t&&(m.event_id=t.eventID),"statShareApp"in t&&(m.stat_share_app=t.statShareApp),"statPullDownFresh"in t&&(m.stat_pull_down_fresh=t.statPullDownFresh),"statReachBottom"in t&&(m.stat_reach_bottom=t.statReachBottom),r(),"lauchOpts"in t&&(h.Data.lanchInfo=t.lauchOpts,h.Data.lanchInfo.landing=1)}},Page:{init:function(){var t=getCurrentPages()[getCurrentPages().length-1];t.onShow&&function(){var e=t.onShow;t.onShow=function(){h.Page.stat(),e.call(this,arguments)}}(),m.stat_pull_down_fresh&&t.onPullDownRefresh&&function(){var e=t.onPullDownRefresh;t.onPullDownRefresh=function(){h.Event.stat(m.prefix+"pulldownfresh",{url:t.__route__}),e.call(this,arguments)}}(),m.stat_reach_bottom&&t.onReachBottom&&function(){var e=t.onReachBottom;t.onReachBottom=function(){h.Event.stat(m.prefix+"reachbottom",{url:t.__route__}),e.call(this,arguments)}}(),m.stat_share_app&&t.onShareAppMessage&&function(){var e=t.onShareAppMessage;t.onShareAppMessage=function(){return h.Event.stat(m.prefix+"shareapp",{url:t.__route__}),e.call(this,arguments)}}()},stat:function(){if(""!=m.app_id){var t=[],e=p(),n=[d(),e,u()];h.Data.lanchInfo&&(n.push({ht:h.Data.lanchInfo.scene,rdm:"/",rurl:h.Data.lanchInfo.path}),h.Data.lanchInfo.query&&h.Data.lanchInfo.query._mta_ref_id&&n.push({rarg:h.Data.lanchInfo.query._mta_ref_id}),1==h.Data.lanchInfo.landing&&(e.ext+=";lp=1",h.Data.lanchInfo.landing=0)),n.push({rand:+new Date}),e=0;for(var o=n.length;e<o;e++)for(var a in n[e])n[e].hasOwnProperty(a)&&t.push(a+"="+(void 0===n[e][a]?"":n[e][a]));wx.request({url:m.api_base+"?"+t.join("&").toLowerCase()})}}},Event:{stat:function(t,e){if(""!=m.event_id){var n=[],o=d(),a=p();o.dm="wxapps.click",o.url=t,a.r2=m.event_id;var s,i=void 0===e?{}:e,r=[];for(s in i)i.hasOwnProperty(s)&&r.push(encodeURIComponent(s)+"="+encodeURIComponent(i[s]));for(i=r.join(";"),a.r5=i,i=0,a=(o=[o,a,u(),{rand:+new Date}]).length;i<a;i++)for(var c in o[i])o[i].hasOwnProperty(c)&&n.push(c+"="+(void 0===o[i][c]?"":o[i][c]));wx.request({url:m.api_base+"?"+n.join("&").toLowerCase()})}}},Data:{userInfo:null,lanchInfo:null}};t.exports=h},,function(t,e,n){e.a=function(t,e){function n(t,e){var n={small:"234x146",normal:"330x2147483647",large:"320x120",articleNormal:r,largeCover:"750x318",littleCover:"375x288"};e?(s=n[e].split("x")[0],i=n[e].split("x")[1]):(s=320,i=260);var o=void 0,a=t?t.split("*")[0]:s,c=void 0,l=t?t.split("*")[1]:i;return a/l>s/i?(o=s,c=Math.round(s/a*l)):a/l<s/i?(o=s,c=Math.round(s/a*l)):(c=i,o=s),o+"x"+c}t&&""!=t.src||(t={src:"http://static.ws.126.net/utf8/3g/touch/images/share-logo.png"});var o=["s.cimg.163.com","nimg.ws.126.net"],a=/(\.jpg)|(\.jpeg)|(\.webp)|(\.png)/i,s=void 0,i=void 0,r="346x260";wx.getSystemInfo({success:function(t){var e=t.windowWidth;r=e-30*e/375+"x260"}});var c=void 0,l=t.imgsrc?t.imgsrc.replace(/\s/g,""):t.src,d=t.pixel,u=n(d,e).split("x"),p=l.match(a)?l.match(a)[0].replace(".",""):"jpg",m=o.indexOf(l.match(/http:\/\/(.*?)\//)[1]),h="articleNormal"==e?"640x10000":n(d,e);return c=-1==m&&p?"http://nimg.ws.126.net/?url="+l+"&thumbnail="+h+"&quality=95&type="+p:l,{alt:t.alt,src:c,width:u[0],height:u[1]}}},function(t,e,n){var o=n(18),a=n(19),s=!1,i=n(0)(o.a,a.a,function(t){s||n(17)},"data-v-9e0ce8de",null);i.options.__file="src/components/base/LoginBtn.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] LoginBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e,n){var o=n(3),a=n.n(o),s=n(25);a.a.use(s.a),e.a={}},function(t,e,n){var o=n(3),a=n.n(o),s=n(1),i=n(8),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};a.a.use(s.a);var c=new s.a.Store(r({strict:!0},i.a));e.a=c},function(t,e,n){function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var s,i=n(9),r=n(4),c={state:{showOpenNewsApp:!1,deviceInfo:{isIOS:!1,isIphoneX:!1,hasFringe:!1,statusBar24:!0,windowHeight:0,windowWidth:0},user:{isLogin:"",provinceChinese:"北京",cityChinese:"北京",lastVisitTime:0},needRefreshCollection:!1,showDownloadModal:!1,showShareModal:!1,navLinkData:{toutiao:[],yule:[],tiyu:[],bendi:[],caijin:[],keji:[],fangchan:[],dujia:[],lishi:[],xiangguantuijian:[]},markReadDocIds:[]},mutations:(s={},o(s,"SHOW_OPEN_NEWS_APP",function(t,e){var n=[1036,1069];t.showOpenNewsApp=-1!==n.indexOf(e.scene)}),o(s,"DEVICE_INFO",function(t,e){t.deviceInfo=e.data}),o(s,"USER",function(t,e){t.user=Object.assign(t.user,e.user),console.log(t.user)}),o(s,"REFRESH_COLLECTION",function(t,e){t.needRefreshCollection=e.needRefreshCollection}),o(s,"MODAL_DOWNLOAD",function(t,e){t.showDownloadModal=e.showDownloadModal}),o(s,"MODAL_SHARE",function(t,e){t.showShareModal=e.showShareModal}),o(s,"NAVLINK_CLASS",function(t,e){t.navLinkData=e.data}),o(s,"MARK_READ",function(t,e){"String"===e.type?!t.markReadDocIds.indexOf(e.data)>-1&&(t.markReadDocIds=[].concat(a(t.markReadDocIds),[e.data]).slice(-200)):t.markReadDocIds=[].concat(a(new Set([].concat(a(t.markReadDocIds),a(e.data))))).slice(-200)}),s),actions:{initLoginData:function(t){var e=t.commit;return new Promise(function(t){i.a.login(function(t){console.log("login success "),e({type:"USER",user:{isLogin:!0,avatarUrl:t.avatarUrl,nickName:t.nickName}})},function(){e({type:"USER",user:{isLogin:!1}}),t(),console.log("login failure")})})},getDeviceInfo:function(t){var e=t.commit,n=t.state;return new Promise(function(t){var o=wx.getSystemInfoSync();n.deviceInfo.windowHeight===o.windowHeight?t():(console.log("设备信息"),console.log(o)),e(/IOS/gi.test(o.system)?{type:"DEVICE_INFO",data:{isIOS:!0,isIphoneX:/iPhone X/gi.test(o.model),windowHeight:o.windowHeight,windowWidth:o.windowWidth,hasFringe:o.statusBarHeight>24,statusBar24:24===o.statusBarHeight}}:{type:"DEVICE_INFO",data:{isIOS:!1,windowHeight:o.windowHeight,windowWidth:o.windowWidth,hasFringe:o.statusBarHeight>26,statusBar24:o.statusBarHeight>=22&&o.statusBarHeight<=26}}),t()})},getNavLinkData:function(t){var e=t.commit;wx.requestWithCookie({url:"https://c.m.163.com/ug/api/happynuts/app/advert/app-info",success:function(t){var n=t.data.data;for(var o in n)n[o].map(function(t){t.appId=t.appId?t.appId:"wx6664983624b1a9aa",t.url=t.url,t.imgsrc=Object(r.a)({src:t.imgSrc},"normal").src,t.type="nav_link"});e({type:"NAVLINK_CLASS",data:n})}})}}};e.a=c},,function(t,e){t.exports={tabs:[{name:"热榜",tid:"hotpost"},{name:"头条",tid:"toutiao"},{name:"娱乐",url:"",tid:"T1348648517839"},{name:"体育",url:"",tid:"T1348649079062"},{name:"本地",url:""},{name:"科技",tid:"T1348649580692",url:""},{name:"财经",tid:"T1348648756099",url:""},{name:"独家",type:"common",tid:"T1370583240249",url:""},{name:"历史",type:"common",tid:"T1368497029546"},{name:"军事",type:"common",tid:"T1348648141035",url:""},{name:"汽车",type:"common",tid:"T1348654060988",url:""},{name:"房产",type:"common",tid:"T1348654085632",url:""},{name:"数码",type:"common",tid:"T1348649776727",url:""}],api:{article:"https://c.m.163.com/nc/article/{{docid}}/full.html",video:"https://c.m.163.com/nc/video/detail/{{id}}.html",photo:"https://c.m.163.com/photo/api/set/{{cid}}/{{sid}}.json",commonlist:"https://c.m.163.com/nc/article/list/{{tid}}/{{start}}-10.html",dynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/headline-list",channeldynamiclist:"https://gw.m.163.com/nc/api/v1/feed/dynamic/normal-list",localList:"https://c.m.163.com/dlist/article/local/dynamic",video_list:"https://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&subtab={{subtab}}&size={{pageSize}}&offset={{offset}}",video_related_list:"https://c.m.163.com/releate/video/dynamic?videoid={{id}}&appname=xiaochengxu",favorite_list:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite?pageNo={{pageNo}}",favorite_add:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/add",favorite_cancel:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/cancel",favorite_check:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/check",hot_postlist:"https://taidu.3g.163.com/news-support/weixin/miniprogram/comment/hotList"},allowType:["video","article","doc"],topNewsTag:"S",topNewsTag2:"S+"}},function(t,e,n){e.a=function(t){try{var e=new Date(t.replace(/-/g,"/")),n=new Date,i=n-e;if(i<o)return"刚刚";if(i<a)return Math.floor(i/o)+"分钟前";if(i<s)return Math.floor(i/a)+"小时前";var r=t.split(" "),c=/(\S+):\d{2}/.exec(r[1])[1],l=n-new Date(r[0]);return l<2*s?"昨天"+c:l<3*s?"前天"+c:e.getFullYear()===n.getFullYear()?/-(\S+)/.exec(r[0])[1]:r[0]}catch(e){return t}};var o=6e4,a=36e5,s=864e5},function(t,e,n){var o=n(14),a=n(15),s=!1,i=n(0)(o.a,a.a,function(t){s||n(13)},null,null);i.options.__file="src/components/PageError.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] PageError.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){e.a={name:"page-error",props:{type:String,clickfun:Function,clickbtn:Boolean},methods:{back:function(){getCurrentPages().length<2?wx.switchTab({url:"/pages/Home"}):wx.navigateBack()}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-error"},["dataError"===t.type?n("block",[n("div",{staticClass:"empty"}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("此页面内容没有了")]),t._v(" "),n("div",{staticClass:"error-btn",attrs:{eventid:"0"},on:{click:t.back}},[t._v("返回")])]):t._e(),t._v(" "),"emptyComment"===t.type?n("block",[n("div",{staticClass:"empty-comment"}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("暂无跟贴")]),t._v(" "),n("div",{staticClass:"error-btn",attrs:{eventid:"1"},on:{click:t.back}},[t._v("返回")])]):"netError"===t.type?n("block",[n("image",{staticClass:"net-error",attrs:{src:"/static/net-error.png"}}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("你的网络出现问题啦")]),t._v(" "),t.clickbtn?n("block",[n("div",{staticClass:"error-btn",attrs:{eventid:"2"},on:{click:t.clickfun}},[t._v("重新加载")])]):t._e()],1):"netLoading"===t.type?n("block",[n("div",{staticClass:"loading"},[n("div",{staticClass:"loader-spin center"},[n("span")]),t._v(" "),n("image",{staticClass:"loading-img",attrs:{src:"/static/bg-ntease.png"}})])]):t._e()],1)},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},,function(t,e){},function(t,e,n){var o=n(1),a=n(9),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"login-btn",props:["callback","formType"],computed:s({},Object(o.d)(["user"]),{isLogin:function(){return this.user.isLogin}}),methods:s({},Object(o.c)(["USER"]),{doLogin:function(t){var e=this;this.isLogin?(console.log("已登录"),!this.user.nickname&&this.USER({user:t.target.userInfo}),this.callback&&this.callback()):t.target.userInfo?(wx.showLoading(),console.log("授权"),a.a.login(function(){console.log("login success"),e.USER({user:s({},t.target.userInfo,{isLogin:!0})}),wx.hideLoading(),e.callback&&e.callback()},function(){console.log("login failed"),e.USER({user:s({},t.target.userInfo,{isLogin:!1})}),wx.hideLoading(),e.callback&&e.callback()})):console.log("拒绝授权")}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"login-btn",attrs:{"open-type":"getUserInfo","hover-class":"none",formType:t.formType,eventid:"0"},on:{getuserinfo:t.doLogin}},[t._t("default",null,{mpcomid:"0"})],2)},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=t/1e4;return e>1?e>1e4?(e/1e4).toFixed(1)+"亿":e.toFixed(1)+"万":t}},,function(t,e,n){var o=n(36),a=n(37),s=!1,i=n(0)(o.a,a.a,function(t){s||n(35)},null,null);i.options.__file="src/components/ShareMoments.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] ShareMoments.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e,n){var o=n(53),a=n(54),s=!1,i=n(0)(o.a,a.a,function(t){s||n(52)},"data-v-b723dbb0",null);i.options.__file="src/components/base/ShareBtns.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] ShareBtns.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},,,,function(t,e,n){var o=n(33),a=n(34),s=!1,i=n(0)(o.a,a.a,function(t){s||n(32)},null,null);i.options.__file="src/components/CollectionBtn.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] CollectionBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e,n){var o=n(57),a=n(58),s=!1,i=n(0)(o.a,a.a,function(t){s||n(56)},null,null);i.options.__file="src/components/base/LaunchBtn.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] LaunchBtn.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},,,function(t,e,n){var o={"微笑":"https://static.ws.126.net/3g/emoticon/1000_weixiao.png","可怜":"https://static.ws.126.net/3g/emoticon/1000_kelian.png","被黑":"https://static.ws.126.net/3g/emoticon/1000_beihei.png","色色":"https://static.ws.126.net/3g/emoticon/1000_sese.png","羞羞":"https://static.ws.126.net/3g/emoticon/1000_xiuxiu.png","窃笑":"https://static.ws.126.net/3g/emoticon/1000_qiexiao.png","惊讶":"https://static.ws.126.net/3g/emoticon/1000_jingxia.png","疑问":"https://static.ws.126.net/3g/emoticon/1000_yiwen.png","疲惫":"https://static.ws.126.net/3g/emoticon/1000_pibei.png","喷水":"https://static.ws.126.net/3g/emoticon/1000_penshui.png","狗":"https://static.ws.126.net/3g/emoticon/1000_gou.png","鄙视":"https://static.ws.126.net/3g/emoticon/1000_bishi.png","挨揍":"https://static.ws.126.net/3g/emoticon/1000_aizou.png","骷髅":"https://static.ws.126.net/3g/emoticon/1000_kulou.png","不屑":"https://static.ws.126.net/3g/emoticon/1000_buxie.png","大笑":"https://static.ws.126.net/3g/emoticon/1000_daxiao.png","晕":"https://static.ws.126.net/3g/emoticon/1000_yun.png","大哭":"https://static.ws.126.net/3g/emoticon/1000_daku.png","暴怒":"https://static.ws.126.net/3g/emoticon/1000_baonu.png","石化":"https://static.ws.126.net/3g/emoticon/1000_shihua.png","鼓掌":"https://static.ws.126.net/3g/emoticon/1000_guzhang.png","抱抱":"https://static.ws.126.net/3g/emoticon/1000_baobao.png","比心":"https://static.ws.126.net/3g/emoticon/1000_bixin.png","污":"https://static.ws.126.net/3g/emoticon/1000_wu.png","老司机":"https://static.ws.126.net/3g/emoticon/1000_laosiji.png","大师":"https://static.ws.126.net/3g/emoticon/1000_dashi.png","二楼":"https://static.ws.126.net/3g/emoticon/1000_erlou.png"};e.a=function(t){return t.replace(/\[(.*?)\]/g,function(t){var e=t.match(/\[(.*)\]/)[1],n=o[e];return n?'<img class="emoji" src="'+n+'" />':t})}},function(t,e){},function(t,e,n){var o=n(1),a=n(5),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"collection-btn",props:{id:{default:""},type:{default:"doc"}},data:function(){return{hasCollected:!1}},watch:{id:function(){this.checkState()}},components:{LoginBtn:a.a},mounted:function(){this.checkState()},computed:s({},Object(o.d)(["user"])),methods:s({},Object(o.c)(["REFRESH_COLLECTION"]),{checkState:function(){if(this.user.isLogin){var t=this;wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/check",data:{contentType:this.type,contentId:this.id},method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){try{t.hasCollected=e.data.data.hasAddFavorite}catch(e){t.hasCollected=!1}}})}},dealCollectionClick:function(){var t=this;this.REFRESH_COLLECTION({needRefreshCollection:!0}),this.hasCollected?wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/cancel",data:{contentType:this.type,contentId:this.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data.data.result&&(t.hasCollected=!1,wx.showToast({title:"已取消收藏",icon:"success",duration:2e3}))},fail:function(){wx.showToast({title:"取消收藏失败",icon:"none",duration:2e3})}}):wx.requestWithCookie({url:"https://taidu.3g.163.com/news-support/weixin/miniprogram/favorite/add",data:{contentType:this.type,contentId:this.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data.data.result&&(t.hasCollected=!0,wx.showToast({title:"收藏成功",icon:"success",duration:2e3}))},fail:function(){wx.showToast({title:"收藏失败",icon:"none",duration:2e3})}})}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collection-btn"},[n("div",{class:["icon-star",t.hasCollected?"icon-star-yellow":"icon-star-border"]}),t._v(" "),n("login-btn",{attrs:{callback:t.dealCollectionClick,mpcomid:"0"}})],1)},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e){},function(e,n,o){var a=o(1),s=o(5),i=o(2),r=o.n(i),c="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)},l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};n.a={name:"share-moments",props:["headImg","title","docid"],data:function(){return{shareDOM:"",saveBtn:{openType:"",state:"",text:"保存"},chosenIndex:void 0,scaleDOMRatio:0,showChoiceBlock:!1,tags:["https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag0.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag1.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag2.png","https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag3.png"]}},computed:l({},Object(a.d)(["deviceInfo","showShareModal","user"])),watch:{showShareModal:function(){this.showShareModal&&(this.resetData(),this.dealShareMomentsClick())}},components:{LoginBtn:s.a},onReady:function(){this.shareDOM=wx.createCanvasContext("share")},onPageScroll:function(){this.showShareModal&&this.closeModal()},methods:l({},Object(a.c)(["MODAL_SHARE"]),Object(a.b)(["getDeviceInfo"]),{dealShareMomentsClick:function(){var t=this,e=this;wx.showLoading({title:"正在生成图片"}),this.getDeviceInfo().then(function(){t.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),t.shareDOM.fillRect(0,0,t.deviceInfo.windowWidth,t.deviceInfo.windowHeight),t.shareDOM.draw()});var n=[this.getHeadImgAsync(this.headImg).then(function(e){return t.getImgCachePath(e)}),this.getImgCachePath(this.user.avatarUrl||"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/default-avatar-new.png"),this.getImgCachePath(this.getQrCodeUrl()),this.getImgCachePath("https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/icon-logo.png")];Promise.all(n).then(function(e){wx.hideLoading(),t.drawCanvasContent({headImg:e[0],avatarImg:e[1],qrCode:e[2],logo:e[3]}),t.showChoiceBlock=!0}).catch(function(t){console.log(t),r.a.Event.stat("error_generate_img",{error:t}),e.showShareModal&&wx.showToast({title:"获取图片失败",icon:"none",duration:1500,success:function(){setTimeout(function(){e.closeModal()},1500)}})})},getQrCodeUrl:function(){var t=getCurrentPages(),e=t[t.length-1],n=this.docid?this.docid:e.options.docid;if(!n){var o=decodeURIComponent(e.options.scene);n=o&&o.split("=")[1]}return"https://taidu.3g.163.com/news-support/weixin/miniprogram/api/getwxacode?scene=docid="+n.replace("|","/")+"&page="+e.route},getHeadImgAsync:function(t){var e="https://static.ws.126.net/163/frontend/newsapp-wxmp/static/common/default-share-img.png";return t?(t=t.replace("http://","https://"),new Promise(function(n){wx.getImageInfo({src:t,success:function(o){if(o.width>=400&&o.width/o.height<=2&&o.width/o.height>=16/15){var a=Math.round(o.width>=750?750:o.width),s=Math.round(a/16*10);n(t+"?imageView&thumbnail="+a+"y"+s)}else n(e)},fail:function(){n(e)}})})):Promise.resolve(e)},getImgCachePath:function(t){return new Promise(function(e,n){wx.downloadFile({url:t,success:function(o){200===o.statusCode?e(o.tempFilePath):(r.a.Event.stat("error_request",{url:t,msg:"非200",filename:t.substring(t.lastIndexOf("/")+1)}),n("请求服务器图片"+t+"出错"))},fail:function(){r.a.Event.stat("error_request",{url:t,msg:"请求失败",filename:t.substring(t.lastIndexOf("/")+1)}),n("微信下载"+t+"失败")}})})},closeModal:function(t){if(this.showShareModal){try{var e=t.mp.currentTarget.dataset.event||"closeModal",n=t.mp.currentTarget.dataset.platform||"";r.a.Event.stat(e,{platform:n})}catch(t){r.a.Event.stat("closeModal",{})}this.MODAL_SHARE({showShareModal:!1}),wx.hideLoading()}},drawCanvasContent:function(t){var e=t.headImg,n=t.avatarImg,o=t.qrCode,a=t.logo;this.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),this.shareDOM.fillRect(0,0,this.deviceInfo.windowWidth,this.deviceInfo.windowHeight),this.shareDOM.draw();var s=this.shareDOM,i=this.deviceInfo.windowWidth/750*1/2;this.scaleDOMRatio=i,s.scale(i,i);var r=this.deviceInfo.windowHeight/i-1884;s.translate(0,r),s.setFillStyle("white"),s.fillRect(32,0,1436,36),s.fillRect(0,32,1500,1852),s.arc(1472,32,32,0,2*Math.PI),s.fill(),s.arc(32,32,32,0,2*Math.PI),s.fill(),s.drawImage(e,310,80,880,550),s.save(),s.beginPath(),s.arc(550,922,30,0,2*Math.PI),s.clip(),s.drawImage(n,520,892,60,60),s.restore(),s.draw(!0),s.setFontSize(52),s.setFillStyle("#333333");var c=this.getTextArr(s,this.title,832);c.length>3?(s.fillText(c[0],334,716,832),s.fillText(c[1].slice(0,-1)+"...",334,794,832)):(s.fillText(c[0],334,716,832),c[1]&&s.fillText(c[1],334,794,832)),s.drawImage(o,334,872,160,160),s.drawImage(a,964,104,206,54),s.setFontSize(36),s.setFillStyle("#000000");var l=s.measureText(this.user.nickName).width;l<288?(s.fillText(this.user.nickName,592,936,l),s.setFillStyle("#666666"),s.fillText("正在读这篇文章",600+l,936,308)):(s.fillText(this.user.nickName.slice(0,7)+"...",592,936,288),s.setFillStyle("#666666"),s.fillText("正在读这篇文章",888,936,308)),s.fillText("长按小程序码，进入",520,1012,336),s.setFillStyle("#EE1A1A"),s.fillText("网易新闻",856,1012,144),s.setFillStyle("#666666"),s.fillText("查看详情",1008,1012,156),s.draw(!0)},saveImg:function(){if("success"!==this.saveBtn.state){r.a.Event.stat("btn_share_save",{});var t=this;this.shareDOM.draw(!0,setTimeout(function(){wx.canvasToTempFilePath({x:155*t.scaleDOMRatio*2,y:t.deviceInfo.windowHeight-902*t.scaleDOMRatio*2,width:440*t.scaleDOMRatio*2,height:501*t.scaleDOMRatio*2,destWidth:750,destHeight:885,canvasId:"share",success:function(e){t.saveImageToPhotos(e.tempFilePath)},fail:function(){r.a.Event.stat("btn_share_save_fail",{}),t.saveBtn={text:"点击重试",state:"fail",openType:""},wx.showToast({title:"保存图片失败",icon:"none",duration:1500}),console.log("canvasToTempFilePath failed")}})},100))}else this.closeModal()},saveImgLater:function(){var t=this;setTimeout(function(){t.saveImg()},300)},saveImageToPhotos:function(t){var e=this;wx.saveImageToPhotosAlbum({filePath:t,success:function(){r.a.Event.stat("btn_share_done",{}),e.saveBtn={text:"我知道了",state:"success"}},fail:function(){r.a.Event.stat("btn_share_fail",{}),!e.saveBtn.openType&&wx.showToast({title:"保存图片失败",icon:"none",duration:1500}),e.saveBtn={text:"点击重试",state:"fail",openType:"openSetting"},console.log("saveImageToPhotosAlbum failed")}})},chooseTag:function(t){var e=this,n=t.mp.target.dataset.index;if(void 0!==n&&parseInt(n,10)!==this.chosenIndex){this.chosenIndex=parseInt(n,10);var o="https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/tag"+n+".png";this.getImgCachePath(o).then(function(t){e.shareDOM.drawImage(t,914,426,260,260),e.shareDOM.draw(!0)})}},resetData:function(){this.saveBtn={openType:"",state:"",text:"保存"},this.showChoiceBlock=!1,this.chosenIndex=void 0,this.shareDOM&&(this.shareDOM.setFillStyle("rgba(0,0,0,0.5)"),this.shareDOM.fillRect(0,0,this.deviceInfo.windowWidth,this.deviceInfo.windowHeight),this.shareDOM.draw())},getTextArr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments[2];console.log("分享标题类型："+(void 0===e?"undefined":c(e)));for(var o=e.split(""),a=o.length,s=[],i="",r=0;r<a;r++)t.measureText(i).width<n?i+=o[r]:(s.push(i),i=o[r]);return i&&s.push(i),s}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showShareModal?n("div",{staticClass:"bottom-share"},[n("canvas",{staticClass:"canvas",attrs:{"canvas-id":"share","data-event":"btn-share-close",eventid:"5"},on:{touchmove:t.closeModal}},["success"===t.saveBtn.state?n("cover-view",{staticClass:"img-part",attrs:{mpcomid:"11"}},[n("cover-image",{staticClass:"close",attrs:{src:"/static/icon-close.png",eventid:"0",mpcomid:"0"},on:{click:t.closeModal}}),t._v(" "),n("cover-image",{staticClass:"img-rect",attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/share-border1.png",mpcomid:"1"}}),t._v(" "),n("cover-view",{staticClass:"success-hint",attrs:{mpcomid:"2"}},[t._v("已保存至相册，快去分享吧")]),t._v(" "),n("button",{staticClass:"btn-red",attrs:{"hover-class":"none",eventid:"1"},on:{click:t.closeModal}},[t._v("我知道了")])],1):t.showChoiceBlock?n("cover-view",{staticClass:"img-part",attrs:{mpcomid:"10"}},[n("cover-image",{staticClass:"close",attrs:{src:"/static/icon-close.png",eventid:"2",mpcomid:"3"},on:{click:function(e){e.preventDefault(),t.closeModal(e)}}}),t._v(" "),n("cover-image",{staticClass:"img-rect",attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/share-border1.png",mpcomid:"4"}}),t._v(" "),n("cover-view",{staticClass:"hint",attrs:{mpcomid:"5"}},[t._v("点击标签，为你的分享加个态度吧!")]),t._v(" "),n("cover-view",{staticClass:"choices",attrs:{eventid:"3",mpcomid:"7"},on:{click:t.chooseTag}},t._l(t.tags,function(t,e){return n("cover-image",{key:e,attrs:{src:t,"data-index":e,mpcomid:"6-"+e}})})),t._v(" "),n("cover-image",{class:"chosen chosen-"+t.chosenIndex,attrs:{src:"https://static.ws.126.net/163/frontend/newsapp-wxmp/static/share/icon-chosen.png",mpcomid:"8"}}),t._v(" "),n("button",{staticClass:"btn-red",attrs:{"hover-class":"none","open-type":t.saveBtn.openType,eventid:"4"},on:{click:t.saveImg,opensetting:t.saveImgLater}},[n("cover-view",{attrs:{mpcomid:"9"}},[t._v(t._s(t.saveBtn.text))])],1)],1):t._e()],1)]):t._e()},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){var o=n(40),a=n(41),s=!1,i=n(0)(o.a,a.a,function(t){s||n(39)},null,null);i.options.__file="src/components/TopBar.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] TopBar.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){var o=n(1),a=n(2),s=n.n(a),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"top-bar",data:function(){return{returnable:!1,show:!1}},props:{darkMode:{default:!1}},computed:i({},Object(o.d)(["deviceInfo"])),watch:{darkMode:function(){var t=this.darkMode?"#ffffff":"#000000";wx.setNavigationBarColor({frontColor:t,backgroundColor:t})}},onLoad:function(){var t=getCurrentPages();this.returnable=t.length>1,this.show=!0},methods:{formSubmit:function(t){var e=t.mp.detail;wx.requestWithCookie({url:"https://c.m.163.com/uc/activity/miniapp/subscribe",data:{form_id:e.formId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){200===t.data.code&&(s.a.Event.stat("event_push_request",{}),console.log("已订阅"))}});var n=e.target.dataset.name;"back"===n?this.returnable&&(wx.navigateBack(),s.a.Event.stat("btn_topback",{})):"home"===n&&(wx.switchTab({url:"/pages/Home"}),s.a.Event.stat("btn_top2index",{}))}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{class:["top-bar",{"top-bar-fringe":t.deviceInfo.hasFringe},{"top-bar-24":t.deviceInfo.statusBar24},{"top-bar-dark":t.darkMode}],attrs:{"report-submit":"true",eventid:"0"},on:{submit:t.formSubmit}},[n("div",{class:["main",{visible:t.show}]},[n("button",{class:["icon-back",{"icon-back-gray":!t.returnable}],attrs:{formType:"submit","data-name":"back"}}),t._v(" "),n("span",{staticClass:"vertical-line"}),t._v(" "),n("button",{staticClass:"icon-home",attrs:{formType:"submit","data-name":"home"}})],1)])},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},,,,function(t,e,n){var o=n(47),a=n(48),s=!1,i=n(0)(o.a,a.a,function(t){s||n(46)},"data-v-339946ad",null);i.options.__file="src/components/Subscription.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] Subscription.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){var o=n(5);e.a={name:"subscription",data:function(){return{showSub:!1,formId:"",isRequesting:!1}},props:["pageRefresh","needMargin"],watch:{pageRefresh:function(t){t&&this.close()}},components:{LoginBtn:o.a},onShow:function(){this.setShowState()},onLoad:function(){this.setShowState()},methods:{setShowState:function(){var t=wx.getStorageSync("subscription");!t||Date.now()-t>6048e5?this.showSub=!0:this.showSub=!1},formSubmit:function(t){this.formId=t.mp.detail.formId},sendSub:function(){if(!this.isRequesting){this.isRequesting=!0;var t=this;wx.requestWithCookie({url:"https://c.m.163.com/uc/activity/miniapp/subscribe",data:{form_id:this.formId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){200===e.data.code?(console.log("开启成功"),wx.showToast({title:"开启成功",icon:"success",duration:2e3}),t.close()):wx.showToast({title:"开启失败",icon:"none",duration:2e3}),t.isRequesting=!1},fail:function(){wx.showToast({title:"开启失败",icon:"none",duration:2e3}),t.isRequesting=!1}})}},close:function(){this.showSub=!1,wx.setStorageSync("subscription",Date.now())}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showSub?n("div",{class:t.needMargin?"subscription subscription-margin":"subscription"},[n("p",{staticClass:"info"},[t._v("开启通知，时刻关注精选资讯")]),t._v(" "),n("form",{attrs:{"report-submit":"true",eventid:"0"},on:{submit:t.formSubmit}},[n("div",{staticClass:"sub-btn"},[n("login-btn",{attrs:{callback:t.sendSub,formType:"submit",mpcomid:"0"}},[t._v("开启")])],1)]),t._v(" "),n("div",{staticClass:"close",attrs:{eventid:"1"},on:{click:t.close}})],1):t._e()},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){var o=n(51),a=n(55),s=!1,i=n(0)(o.a,a.a,function(t){s||n(50)},null,null);i.options.__file="src/components/BottomBar.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] BottomBar.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){var o=n(1),a=n(2),s=n.n(a),i=n(27),r=n(23),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"BottomBar",computed:c({},Object(o.d)(["deviceInfo","showOpenNewsApp"])),props:{id:{},docid:"",postid:"",type:{default:"doc"},commentNumb:{default:0},showCommentIcon:{default:!0},showCollectionIcon:{default:!0}},components:{CollectionBtn:i.a,ShareBtns:r.a},methods:c({},Object(o.c)(["MODAL_SHARE"]),{formSubmit:function(t){var e=t.mp.detail;if(wx.requestWithCookie({url:"https://c.m.163.com/uc/activity/miniapp/subscribe",data:{form_id:e.formId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){200===t.data.code&&(s.a.Event.stat("event_push_request",{}),console.log("已订阅"))}}),"comment"===e.target.dataset.name){var n="photoset"===this.type?this.postid:this.docid;wx.navigateTo({url:"/pages/comments/comments?docid="+n})}}})}},function(t,e){},function(t,e,n){var o=n(1),a=n(2),s=n.n(a),i=n(22),r=n(5),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"share-btns",props:{styleType:{default:""},formType:{default:""}},components:{ShareMoments:i.a,LoginBtn:r.a},methods:c({},Object(o.c)(["MODAL_SHARE"]),{dealWechatIconClick:function(){s.a.Event.stat("btn_share_platform",{platform:"wx-personal"})},dealmomentsIconClick:function(){s.a.Event.stat("btn_share_platform",{platform:"wx-friend"}),this.MODAL_SHARE({showShareModal:!0})}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("block",[n("div",{class:["share-btns",{"share-btns-block":"block"===t.styleType}]},[n("button",{staticClass:"item",attrs:{formType:t.formType,"open-type":"share",eventid:"0"},on:{click:t.dealWechatIconClick}},[n("span",{staticClass:"icon-wechat"}),"block"===t.styleType?n("span",{staticClass:"text"},[t._v("微信")]):t._e()]),t._v(" "),"block"===t.styleType?n("div",{staticClass:"item"},[n("login-btn",{attrs:{callback:t.dealmomentsIconClick,formType:t.formType,mpcomid:"0"}},[n("span",{staticClass:"icon-moments"}),n("span",{staticClass:"text"},[t._v("朋友圈")])])],1):n("div",{staticClass:"item"},[n("login-btn",{attrs:{callback:t.dealmomentsIconClick,formType:t.formType,mpcomid:"1"}},[n("span",{staticClass:"icon-moments"})])],1)],1)])},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{"report-submit":"true",eventid:"0"},on:{submit:t.formSubmit}},[n("div",{class:["bottom-bar",{"bottom-bar-iphoneX":t.deviceInfo.isIphoneX}]},[t.showCommentIcon?n("button",{staticClass:"icon-comment",attrs:{formType:"submit","data-name":"comment"}},[0!==t.commentNumb?n("span",{staticClass:"sub-numb"},[t._v(t._s(t.commentNumb))]):t._e()]):t._e(),t._v(" "),t.showCollectionIcon?n("block",[n("collection-btn",{attrs:{id:t.id,type:t.type,mpcomid:"0"}})],1):t._e(),t._v(" "),n("share-btns",{attrs:{formType:"submit",mpcomid:"1"}})],1)])},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e){},function(t,e,n){var o=n(1),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"launch-btn",props:["launchPath"],methods:a({},Object(o.c)(["MODAL_DOWNLOAD"]),{launchError:function(){this.MODAL_DOWNLOAD({showDownloadModal:!0})}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"launch-btn",attrs:{"open-type":"launchApp","app-parameter":t.launchPath,eventid:"0"},on:{error:t.launchError}},[t._t("default",null,{mpcomid:"0"})],2)},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){var o=n(61),a=n(62),s=!1,i=n(0)(o.a,a.a,function(t){s||n(60)},null,null);i.options.__file="src/components/BackflowBottom.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] BackflowBottom.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){var o=n(1),a=n(28),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"backflow-bottom",props:["launchPath"],computed:s({},Object(o.d)(["showOpenNewsApp"])),components:{LaunchBtn:a.a}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showOpenNewsApp?n("div",{staticClass:"backflow-bottom"},[n("p",[t._v("没有找到想要的？打开"),n("span",[t._v("网易新闻")]),t._v("看看吧~")]),t._v(" "),n("launch-btn",{attrs:{launchPath:t.launchPath,mpcomid:"0"}})],1):t._e()},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){var o=n(65),a=n(66),s=!1,i=n(0)(o.a,a.a,function(t){s||n(64)},"data-v-608c3b08",null);i.options.__file="src/components/BottomBarFixed.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] BottomBarFixed.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){var o=n(1),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"bottom-bar-fixed",computed:a({},Object(o.d)(["deviceInfo"]))}},function(t,e,n){var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.deviceInfo.isIphoneX?"bottom-bar-fixed bottom-bar-fixed-iphoneX":"bottom-bar-fixed"]})},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){var o=n(69),a=n(70),s=!1,i=n(0)(o.a,a.a,function(t){s||n(68)},"data-v-89f07016",null);i.options.__file="src/components/ModalDownload.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] ModalDownload.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){var o=n(1),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"modal-download",computed:a({},Object(o.d)(["showDownloadModal"])),methods:a({},Object(o.c)(["MODAL_DOWNLOAD"]),{close:function(){this.MODAL_DOWNLOAD({showDownloadModal:!1})}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showDownloadModal?n("div",{staticClass:"modal-download"},[n("div",{staticClass:"modal-content"},[n("p",[t._v("回复数字“1”，获取下载链接")]),t._v(" "),n("button",{attrs:{"open-type":"contact",eventid:"0"},on:{click:t.close}},[t._v("去下载")])],1),t._v(" "),n("div",{staticClass:"close",attrs:{eventid:"1"},on:{click:t.close}})]):t._e()},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){var o=n(73),a=n(75),s=!1,i=n(0)(o.a,a.a,function(t){s||n(72)},null,null);i.options.__file="src/components/CommentList.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] CommentList.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var a=n(74),s=n(31),i=n(4),r=(n(20),n(11));e.a={name:"comment-list",data:function(){return{nextPage:0,isEmpty:!1,isAll:!1,isRequesting:!1,requestFailed:!1,commentIds:[],comments:{},totalComments:0,showComment:!0,docid:"",unfoldedIds:[]}},computed:{idsLength:function(){return this.commentIds.length},lastComments:function(){for(var t=[],e=0;e<this.idsLength;e++){var n=this.commentIds[e].split(","),o=n[n.length-1];this.needFold(n)&&(n=[n[0],n[1],"",n[n.length-2],o]),n.pop(),this.comments[o].ids=n,t.push(this.comments[o])}return t}},props:{type:{default:"hotList"},limit:{default:10},needLazyLoad:{default:!1},showEmptyHint:{default:!1},showTitle:{default:!0},id:{default:""}},onReady:function(){this.docid=this.id,this.updateData()},onUnload:function(){this.resetData()},onReachBottom:function(){this.needLazyLoad&&this.updateData()},methods:{updateData:function(){var t=this;if(!this.isRequesting){this.isRequesting=!0;var e=a.a+"/threads/"+this.docid+"/app/comments/"+this.type+"?limit="+this.limit+"&offset="+this.nextPage*this.limit+"&headLimit=3&ibc=newsapp";wx.requestWithCookie({url:e,header:{"content-type":"application/json"},success:function(e){if(200===e.statusCode){t.requestFailed=!1;var n=e.data;if(n.code)t.nextPage||(t.isEmpty=!0);else{var o=t.commentIds.indexOf(n.commentIds[0]);t.idsLength>0&&-1!==o&&t.commentIds.splice(o);var a=t.commentIds.concat(n.commentIds),s=Object.assign(t.comments,n.comments);t.nextPage=t.nextPage+1,t.isRequesting=!1,t.commentIds=t.deleteEmpty(a),t.comments=t.formatComments(s),t.totalComments=n.newListSize;var i=n.commentIds.length;0===i?1===t.nextPage?t.isEmpty=!0:(t.isEmpty=!1,t.isAll=!0):i<t.limit&&(t.isEmpty=!1,t.isAll=!0),1===t.nextPage&&(t.showEmptyHint&&t.isEmpty?t.$emit("commentLoaded",{pageError:"emptyComment"}):t.$emit("commentLoaded",{pageError:0}))}}else t.$emit("commentLoaded",{pageError:"dataError"})},fail:function(){t.isRequesting=!1,t.requestFailed=!0,console.log("请求失败，刷新试试"),t.$emit("commentLoaded",{pageError:"netError",func:t.updateData})}})}},requestComment:function(t){var e=t.mp.target.dataset.commentid,n=this;if(!n.isRequesting){n.isRequesting=!0,wx.showLoading();var s=a.a+"/app/threads/"+n.docid+"/comments/"+e+"?ibc=newsapp";wx.requestWithCookie({url:s,header:{"content-type":"application/json"},success:function(t){n.isRequesting=!1,wx.hideLoading();var a=Object.assign(t.data.comments,n.comments);n.comments=n.formatComments(a),n.unfoldedIds=[].concat(o(n.unfoldedIds),[e.toString()])},fail:function(){n.isRequesting=!1,wx.hideLoading(),console.log("展开隐藏跟贴失败")}})}},formatComments:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={};for(var n in t)t[n].user=Object.assign({},t[n].user),e[n]={buildLevel:t[n].buildLevel,content:t[n].content,commentId:t[n].commentId,user:{},deviceInfo:t[n].deviceInfo||{deviceName:""}},e[n].user.nickname=t[n].user.nickname&&t[n].user.nickname.slice(0,10)||"火星网友",e[n].user.avatar=t[n].user.avatar&&Object(i.a)({src:t[n].user.avatar},"small").src||"",e[n].user.location=t[n].user.location,e[n].createTime=t[n].createTime&&Object(r.a)(t[n].createTime),e[n].content=e[n].content.indexOf("</p>")>-1?e[n].content:'<p class="comment-text">'+Object(s.a)(e[n].content)+"</p>";return e},resetData:function(){this.commentIds=[],this.comments={},this.nextPage=0,this.isEmpty="",this.isAll=!1,this.isRequesting=!1,this.showComment=!0,this.docid=""},needFold:function(t){var e=t.length;return!(e<=1)&&(!(this.unfoldedIds.indexOf(t[e-1])>-1)&&e>6)},showMoreGailou:function(){this.$emit("showDetail")},deleteEmpty:function(t){for(var e=[],n=t.length,o=0;o<n;o++)t[o]&&e.push(t[o]);return e}}}},function(t,e,n){n.d(e,"a",function(){return o});var o="https://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856"},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-list"},[t.showTitle&&t.idsLength>0?n("p",{class:"comments-title comments-title-"+t.type}):t._e(),t._v(" "),t._l(t.lastComments,function(e,o){return n("div",{key:e,staticClass:"comment-item"},[n("div",{staticClass:"comment-left"},["火星网友"===e.user.nickname?n("span",{staticClass:"comment-avatar"}):e.user.avatar?n("span",{staticClass:"comment-avatar",style:{backgroundImage:"url("+e.user.avatar+")"}}):n("span",{staticClass:"comment-avatar comment-avatar-noImg"})]),t._v(" "),n("div",{staticClass:"comment-right"},[n("p",{staticClass:"name"},[t._v(t._s(e.user.nickname))]),t._v(" "),n("p",{staticClass:"info"},[t._v(t._s(e.user.location)+"  "+t._s(e.deviceInfo.deviceName)+"  "+t._s(e.createTime))]),t._v(" "),t._l(e.ids,function(a,s){return n("div",{key:e+"-"+o+"-"+s,staticClass:"comment-gailou"},[t.comments[a]?n("div",{staticClass:"gailou-content"},[n("p",{staticClass:"comment-left"},[t._v(t._s(t.comments[a].buildLevel))]),t._v(" "),n("div",{staticClass:"comment-right"},[n("p",{staticClass:"name"},[t._v(t._s(t.comments[a].user.nickname))]),t._v(" "),n("p",{staticClass:"info"},[t._v(t._s(t.comments[a].user.location)+"  "+t._s(t.comments[a].deviceInfo.deviceName)+"  "+t._s(t.comments[a].createTime))]),t._v(" "),n("rich-text",{attrs:{nodes:t.comments[a].content,mpcomid:"0-"+o+"-"+s}})],1)],1):n("div",{staticClass:"gailou-more",attrs:{"data-commentid":e.commentId,eventid:"0-"+o+"-"+s},on:{click:t.requestComment}},[t._v("展开隐藏楼层 "),n("i",{staticClass:"icon-arrow"})],1)])}),t._v(" "),n("rich-text",{attrs:{nodes:e.content,mpcomid:"1-"+o}})],2)])}),t._v(" "),t.isEmpty&&t.needLazyLoad?n("div",{staticClass:"bottom-hint"}):t._e(),t._v(" "),t.isAll&&t.needLazyLoad?n("div",{staticClass:"bottom-hint"},[t._v("已无更多数据")]):t._e(),t._v(" "),"3"===t.limit&&t.idsLength>0?n("navigator",{staticClass:"btn-circle",attrs:{"hover-class":"none",url:"/pages/comments/comments?docid="+t.docid}},[t._v("\n    更多跟贴\n  ")]):"oneWonderfulBuilding"===t.type&&t.idsLength>0?n("navigator",{staticClass:"btn-gailou",attrs:{url:"/pages/comments/comments?type=buildingList&docid="+t.docid}},[t._v("查看更多精彩盖楼\n  ")]):t._e(),t._v(" "),t.nextPage&&!t.isAll&&t.needLazyLoad?n("block",[t.isRequesting?n("div",{staticClass:"refreshing-tip"},[n("div",{staticClass:"refreshing-tip-loading spin-anime-infinite"}),t._v(" "),n("div",[t._v("正在载入")])]):t.requestFailed?n("div",{staticClass:"refreshing-tip",attrs:{eventid:"1"},on:{click:t.updateData}},[n("div",{staticClass:"refreshing-tip-loading"}),t._v(" "),n("div",[t._v("重新加载")])]):t._e()]):t._e()],2)},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},,,function(t,e,n){var o=n(80),a=n(81),s=!1,i=n(0)(o.a,a.a,function(t){s||n(79)},null,null);i.options.__file="src/components/CommentBlock.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] CommentBlock.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){var o=n(71);e.a={name:"comment-block",props:["id"],components:{CommentList:o.a}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-block"},[n("comment-list",{attrs:{type:"hotList",limit:"3",showTitle:"true",id:t.id,mpcomid:"0"}})],1)},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){var o=n(84),a=n(85),s=!1,i=n(0)(o.a,a.a,function(t){s||n(83)},null,null);i.options.__file="src/components/MoreContentMask.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] MoreContentMask.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){e.a={name:"more-content-mask",props:["hideMoreContent"],methods:{showMore:function(){this.$emit("showMore")}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hideMoreContent?n("div",{staticClass:"more-content-mask",attrs:{eventid:"0"},on:{click:t.showMore}},[n("div",{staticClass:"backflow-arrow-down"})]):t._e()},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},function(t,e,n){var o=n(88),a=n(89),s=!1,i=n(0)(o.a,a.a,function(t){s||n(87)},null,null);i.options.__file="src/components/RecommendPart.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] RecommendPart.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){var o=n(1),a=n(11),s=n(4),i=n(2),r=n.n(i),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"recommend-part",data:function(){return{dataList:[]}},props:{type:{default:"doc"},docid:{}},computed:c({},Object(o.d)(["navLinkData"])),watch:{dataList:function(){var t=this.dataList.length;this.$emit("recommend",t)}},mounted:function(){this.getRecommend()},methods:{getRecommend:function(){return"photoset"===this.type?this.getRecommendPhotoset():this.getRecommendArticle()},getRecommendArticle:function(){var t=this;wx.requestWithCookie({url:"https://c.m.163.com/hzrelatedoc/xcx/relatedoc?docid="+this.docid,success:function(e){if(e.data.forEach(function(t){t.ptime=Object(a.a)(t.publishTime),t.imgsrc=Object(s.a)({src:t.imgsrc},"small").src}),e.data.length>0){var n=t.getOneRandomNavLink(t.navLinkData.xiangguantuijian);n?(e.data.splice(1,0,n),t.dataList=e.data.slice(0,21)):t.dataList=e.data.slice(0,20)}}})},getRecommendPhotoset:function(){var t=this,e=this.docid.split("|")[0].substr(-4,4),n=this.docid.split("|")[1];wx.requestWithCookie({url:"https://c.m.163.com/photo/api/related/"+e+"/"+n+".json",success:function(n){var o=[],i=!0,r=!1,c=void 0;try{for(var l,d=n.data[Symbol.iterator]();!(i=(l=d.next()).done);i=!0){var u=l.value;o.push({title:u.setname,ptime:Object(a.a)(u.createdate),imgsrc:Object(s.a)({src:u.tcover},"normal").src,docid:e+"|"+u.setid,type:"photoset"})}}catch(t){r=!0,c=t}finally{try{!i&&d.return&&d.return()}finally{if(r)throw c}}t.dataList=o.slice(0,20)}})},readItem:function(t){r.a.Event.stat("event_recommend",{page:this.type,index:t.mp.currentTarget.dataset.index});var e="",n=t.currentTarget.dataset;switch(n.type){case"video":e="/pages/video/video?docid="+n.id;break;case"photoset":e="/pages/photoset/photoset?docid="+n.id;break;default:e="/pages/article/article?docid="+n.id}"nav_link"===n.type?wx.navigateToMiniProgram({appId:""+n.appId,path:""+n.url,success:function(){console.log(),r.a.Event.stat("nav_mp",{appid:""+n.appId,name:"article"}),console.log("跳转公开课成功")},fail:function(){r.a.Event.stat("nav_mp_fail",{appid:""+n.appId,name:"article"}),console.log("跳转公开课失败")}}):wx.redirectTo({url:e})},getOneRandomNavLink:function(t){if(t)return t[Math.floor(Math.random()*t.length)]}}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.dataList.length>0?n("div",{staticClass:"recommend-part"},[n("p",{staticClass:"title"},[t._v("相关推荐")]),t._v(" "),t._l(t.dataList,function(e,o){return n("block",{key:"-"+o},[n("div",{staticClass:"news-item",attrs:{"data-id":e.docid,"data-type":e.type,"data-url":e.url,"data-index":o,eventid:"0-"+o},on:{click:t.readItem}},[n("div",{staticClass:"left"},[n("p",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.source)+" "+t._s(e.ptime))])],1),t._v(" "),n("div",{staticClass:"right common-img-default--sm"},[n("img",{attrs:{src:e.imgsrc,mode:"aspectFill"}}),t._v(" "),"video"===e.type?n("div",{staticClass:"icon-play"}):t._e()])])])})],2):t._e()},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var o=n(161),a=n(162),s=!1,i=n(0)(o.a,a.a,function(t){s||n(160)},"data-v-45ee0c8a",null);i.options.__file="src/pages/photoset/photoset.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] photoset.vue: functional components are not supported with templates, they should use render functions."),e.a=i.exports},function(t,e){},function(t,e,n){var o=n(1),a=n(10),s=n.n(a),i=(n(20),n(12)),r=n(49),c=n(78),l=n(45),d=n(28),u=n(59),p=n(63),m=n(86),h=n(82),f=n(67),v=n(23),g=n(22),w=n(38),_=n(2),b=n.n(_),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"photoset",data:function(){return{docid:"",pageError:"netLoading",showSlidePhotoset:!1,article:{setname:"",desc:"",cover:"",createdate:"",photos:[],imgsum:"",source:"",postid:""},replyCount:0,currentIndex:0,hideMoreContent:!0,articleHeight:0}},computed:y({},Object(o.d)(["showOpenNewsApp","showDownloadModal","deviceInfo"]),{swiperImgUrls:function(){var t=[],e=!0,n=!1,o=void 0;try{for(var a,s=this.article.photos[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var i=a.value;t.push(i.imgurl)}}catch(t){n=!0,o=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw o}}return t},launchPath:function(){return"photo/"+this.docid.replace("|","/")},windowHeight:function(){return this.deviceInfo.windowHeight}}),components:{PageError:i.a,BottomBar:r.a,CommentBlock:c.a,Subscription:l.a,LaunchBtn:d.a,BackflowBottom:u.a,BottomBarFixed:p.a,RecommendPart:m.a,MoreContentMask:h.a,ModalDownload:f.a,TopBar:w.a,ShareBtns:v.a,ShareMoments:g.a},onLoad:function(t){if(this.resetData(),this.docid=t.docid,!this.docid){var e=decodeURIComponent(t.scene);this.docid=e&&e.split("=")[1].replace("/","|"),console.log(this.docid)}b.a.Page.init(),b.a.Event.stat("pv_photoset",{}),this.MARK_READ({type:"String",data:this.docid})},mounted:function(){this.getData()},onUnload:function(){console.log("unload"),this.checkPageScroll=null},onShareAppMessage:function(){return{title:"图片："+this.article.setname,imageUrl:this.article.cover+"?imageView&thumbnail=340y270",path:"pages/photoset/photoset?share=true&docid="+this.docid}},methods:y({},Object(o.c)(["MARK_READ"]),{getData:function(){var t=this,e=this.docid.split("|")[0].substr(-4,4),n=this.docid.split("|")[1];wx.requestWithCookie({url:s.a.api.photo.replace("{{cid}}",e).replace("{{sid}}",n),success:function(e){var n=e.data,o=n.setname,a=n.desc,s=n.createdate,i=n.photos,r=n.imgsum,c=n.source,l=n.cover,d=n.postid;if(t.article={source:c,setname:o,desc:a,createdate:s,photos:i,imgsum:r,cover:l,postid:d},!t.article.photos)return t.article.photos=t.article.photos||[],void(t.pageError="dataError");var u=!0,p=!1,m=void 0;try{for(var h,f=t.article.photos[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var v=h.value;v.imgurl=v.imgurl+"?imageView&thumbnail=750x2147483647"}}catch(t){p=!0,m=t}finally{try{!u&&f.return&&f.return()}finally{if(p)throw m}}t.pageError=0,t.hideMoreContent=t.showOpenNewsApp,t.hideMoreContent?t.articleHeight=1.3*t.windowHeight:setTimeout(function(){var e=wx.createSelectorQuery();e.select("#photoset").boundingClientRect(),e.exec(function(e){e[0]?(t.articleHeight=e[0].height,console.log("文章高度："+t.articleHeight)):console.log("haven't got article height")})},500),wx.request({url:"https://comment.api.163.com/batapi/v1/products/a2869674571f77b5a0867c3d71db5856/thread/app/summary/"+t.article.postid+"?ibc=newsapp",success:function(e){t.replyCount=e.data.cmtCount}})},fail:function(){console.log("获取数据失败")}})},openPhotoset:function(t){var e=t.mp.target.dataset.index||0;this.currentIndex=e,this.showSlidePhotoset=!0},closeSwiper:function(){this.showSlidePhotoset=!1},swiperChange:function(t){this.currentIndex=t.target.current},showMore:function(){this.hideMoreContent=!1},resetData:function(){this.pageError="netLoading",this.article={setname:"",desc:"",cover:"",createdate:"",photos:[],imgsum:"",source:"",postid:""},this.replyCount=0,this.hideMoreContent=!0,this.articleHeight=0}})}},function(t,e,n){var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("block",[n("top-bar",{attrs:{darkMode:t.showSlidePhotoset,mpcomid:"0"}}),t._v(" "),0===t.pageError?n("div",{staticClass:"photoset"},[t.showOpenNewsApp?n("div",{staticClass:"backflow-top"},[n("launch-btn",{attrs:{launchPath:t.launchPath,mpcomid:"1"}})],1):t._e(),t._v(" "),n("div",{class:t.showOpenNewsApp&&t.hideMoreContent?"photoset-wrap backflow-fixed-height":"photoset-wrap",attrs:{id:"photoset"}},[n("p",{staticClass:"title"},[t._v(t._s(t.article.setname))]),t._v(" "),n("p",{staticClass:"info"},[t._v(t._s(t.article.source)+"   "+t._s(t.article.createdate))]),t._v(" "),t._l(t.article.photos,function(e,o){return n("div",{key:o,staticClass:"section"},[n("div",{staticClass:"img",attrs:{"data-index":o,eventid:"0-"+o},on:{click:t.openPhotoset}},[n("image",{staticClass:"common-img-default",attrs:{src:e.imgurl,mode:"widthFix",alt:""}}),t._v(" "),n("span",[t._v(t._s(o+1)+"/"+t._s(t.article.imgsum))])]),t._v(" "),n("p",[t._v(t._s(e.note))])],1)}),t._v(" "),n("more-content-mask",{attrs:{hideMoreContent:t.hideMoreContent,eventid:"1",mpcomid:"2"},on:{showMore:t.showMore}})],2),t._v(" "),t.showSlidePhotoset?n("div",{staticClass:"photoset-swiper"},[n("swiper",{attrs:{current:t.currentIndex,eventid:"2"},on:{change:t.swiperChange,click:t.closeSwiper}},t._l(t.swiperImgUrls,function(t,e){return n("swiper-item",{key:e,attrs:{mpcomid:"3-"+e}},[n("image",{attrs:{src:t,mode:"aspectFit"}})])})),t._v(" "),n("div",{staticClass:"swiper-info"},[n("p",[n("span",[t._v(t._s(t.currentIndex+1))]),t._v(" / "+t._s(t.article.imgsum))])],1)],1):t._e(),t._v(" "),t.showOpenNewsApp?n("block",[n("div",{staticClass:"common-launch-circle"},[n("launch-btn",{attrs:{launchPath:t.launchPath,mpcomid:"4"}},[t._v("\n          打开网易新闻，阅读更佳\n        ")])],1),t._v(" "),n("share-btns",{attrs:{styleType:"block",mpcomid:"5"}})],1):n("block",[n("share-btns",{attrs:{styleType:"block",mpcomid:"6"}}),t._v(" "),n("subscription",{attrs:{needMargin:"true",mpcomid:"7"}})],1),t._v(" "),n("ad",{attrs:{"unit-id":"adunit-81631da33bad4d4a",mpcomid:"8"}}),t._v(" "),t.article.postid?n("comment-block",{attrs:{id:t.article.postid,mpcomid:"9"}}):t._e(),t._v(" "),n("recommend-part",{attrs:{type:"photoset",docid:t.docid,mpcomid:"10"}}),t._v(" "),n("backflow-bottom",{attrs:{launchPath:t.launchPath,mpcomid:"11"}}),t._v(" "),n("bottom-bar-fixed",{attrs:{mpcomid:"12"}}),t._v(" "),n("bottom-bar",{attrs:{id:t.docid,type:"photoset",commentNumb:t.replyCount,docid:t.docid,postid:t.article.postid,mpcomid:"13"}}),t._v(" "),n("share-moments",{attrs:{headImg:t.article.cover,title:t.article.setname,docid:t.docid,mpcomid:"14"}}),t._v(" "),n("modal-download",{attrs:{mpcomid:"15"}})],1):n("block",[n("page-error",{attrs:{type:t.pageError,clickbtn:"netError"===t.pageError,clickfun:t.getData,mpcomid:"16"}})],1)],1)},a=[];o._withStripped=!0;var s={render:o,staticRenderFns:a};e.a=s}],[175]); 
 			}); 	require("pages/photoset/photoset.js");
 		__wxRoute = 'pages/comments/comments';__wxRouteBegin = true; 	define("pages/comments/comments.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../9FA2E4459104369CF9C48C4278C17C83.js"),global.webpackJsonp([5],{11:function(t,e,n){e.a=function(t){try{var e=new Date(t.replace(/-/g,"/")),n=new Date,s=n-e;if(s<a)return"刚刚";if(s<o)return Math.floor(s/a)+"分钟前";if(s<i)return Math.floor(s/o)+"小时前";var r=t.split(" "),c=/(\S+):\d{2}/.exec(r[1])[1],u=n-new Date(r[0]);return u<2*i?"昨天"+c:u<3*i?"前天"+c:e.getFullYear()===n.getFullYear()?/-(\S+)/.exec(r[0])[1]:r[0]}catch(e){return t}};var a=6e4,o=36e5,i=864e5},12:function(t,e,n){var a=n(14),o=n(15),i=!1,s=n(0)(a.a,o.a,function(t){i||n(13)},null,null);s.options.__file="src/components/PageError.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] PageError.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},13:function(t,e){},14:function(t,e,n){e.a={name:"page-error",props:{type:String,clickfun:Function,clickbtn:Boolean},methods:{back:function(){getCurrentPages().length<2?wx.switchTab({url:"/pages/Home"}):wx.navigateBack()}}}},15:function(t,e,n){var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-error"},["dataError"===t.type?n("block",[n("div",{staticClass:"empty"}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("此页面内容没有了")]),t._v(" "),n("div",{staticClass:"error-btn",attrs:{eventid:"0"},on:{click:t.back}},[t._v("返回")])]):t._e(),t._v(" "),"emptyComment"===t.type?n("block",[n("div",{staticClass:"empty-comment"}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("暂无跟贴")]),t._v(" "),n("div",{staticClass:"error-btn",attrs:{eventid:"1"},on:{click:t.back}},[t._v("返回")])]):"netError"===t.type?n("block",[n("image",{staticClass:"net-error",attrs:{src:"/static/net-error.png"}}),t._v(" "),n("div",{staticClass:"error-info"},[t._v("你的网络出现问题啦")]),t._v(" "),t.clickbtn?n("block",[n("div",{staticClass:"error-btn",attrs:{eventid:"2"},on:{click:t.clickfun}},[t._v("重新加载")])]):t._e()],1):"netLoading"===t.type?n("block",[n("div",{staticClass:"loading"},[n("div",{staticClass:"loader-spin center"},[n("span")]),t._v(" "),n("image",{staticClass:"loading-img",attrs:{src:"/static/bg-ntease.png"}})])]):t._e()],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.a=i},163:function(t,e,n){var a=n(165),o=n(166),i=!1,s=n(0)(a.a,o.a,function(t){i||n(164)},null,null);s.options.__file="src/pages/comments/comments.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] comments.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},164:function(t,e){},165:function(t,e,n){var a=n(71),o=n(12),i=n(38),s=n(2),r=n.n(s);e.a={name:"comments",data:function(){return{pageError:"netLoading",docid:"",getData:"",fromHotPostList:!1}},components:{CommentList:a.a,PageError:o.a,TopBar:i.a},onLoad:function(t){if(this.docid=t.docid,!this.docid){var e=decodeURIComponent(t.scene);this.docid=e&&e.split("=")[1].replace("/","|")}this.fromHotPostList="hotpostlist"===t.from,r.a.Page.init(),r.a.Event.stat("pv_comment",{}),this.pageError="netLoading"},methods:{contentLoaded:function(t){this.pageError=t.pageError,this.getData=t.func}}}},166:function(t,e,n){var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("block",[n("top-bar",{attrs:{mpcomid:"0"}}),t._v(" "),n("div",{staticClass:"comments"},[n("comment-list",{attrs:{type:"hotList",showTitle:"true",id:t.docid,mpcomid:"1"}}),t._v(" "),n("comment-list",{attrs:{type:"newList",needLazyLoad:!0,showTitle:"true",id:t.docid,showEmptyHint:!0,eventid:"0",mpcomid:"2"},on:{commentLoaded:t.contentLoaded}}),t._v(" "),n("navigator",{staticClass:"read-article-btn",class:{active:t.fromHotPostList},attrs:{"open-type":"redirect","hover-class":"none",url:"/pages/article/article?docid="+t.docid}},[n("p",[t._v("查看")]),n("p",[t._v("原文")])],1)],1),t._v(" "),0!==t.pageError?n("block",[n("page-error",{attrs:{type:t.pageError,clickbtn:"netError"===t.pageError,clickfun:t.getData,mpcomid:"3"}})],1):t._e()],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.a=i},2:function(t,e){function n(t){wx.getNetworkType({success:function(e){t(e.networkType)}})}function a(){var t=wx.getSystemInfoSync();return{adt:encodeURIComponent(t.model),scl:t.pixelRatio,scr:t.windowWidth+"x"+t.windowHeight,lg:t.language,fl:t.version,jv:encodeURIComponent(t.system),tz:encodeURIComponent(t.platform)}}function o(){try{return wx.getStorageSync(p.prefix+"auid")}catch(t){}}function i(){try{var t=c();return wx.setStorageSync(p.prefix+"auid",t),t}catch(t){}}function s(){try{return wx.getStorageSync(p.prefix+"ssid")}catch(t){}}function r(){try{var t="s"+c();return wx.setStorageSync(p.prefix+"ssid",t),t}catch(t){}}function c(t){for(var e=[0,1,2,3,4,5,6,7,8,9],n=10;1<n;n--){var a=Math.floor(10*Math.random()),o=e[a];e[a]=e[n-1],e[n-1]=o}for(n=a=0;5>n;n++)a=10*a+e[n];return(t||"")+(a+"")+ +new Date}function u(){try{var t=getCurrentPages(),e="/";return 0<t.length&&(e=t.pop().__route__),e}catch(t){console.log("get current page path error:"+t)}}function l(){var t={dm:"wechat.apps.xx",url:u(),pvi:"",si:"",ty:0};return t.pvi=function(){var e=o();return e||(e=i(),t.ty=1),e}(),t.si=function(){var t=s();return t||(t=r()),t}(),t}function d(){var t=a();return n(function(t){try{wx.setStorageSync(p.prefix+"ntdata",t)}catch(t){}}),t.ct=wx.getStorageSync(p.prefix+"ntdata")||"4g",t}function m(){var t,e=h.Data.userInfo,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t+"="+e[t]);return e=n.join(";"),{r2:p.app_id,r4:"wx",ext:"v="+p.version+(null!==e&&""!==e?";ui="+encodeURIComponent(e):"")}}var p={app_id:"",event_id:"",api_base:"https://pingtas.qq.com/pingd",prefix:"_mta_",version:"1.3.5",stat_share_app:!1,stat_pull_down_fresh:!1,stat_reach_bottom:!1},h={App:{init:function(t){"appID"in t&&(p.app_id=t.appID),"eventID"in t&&(p.event_id=t.eventID),"statShareApp"in t&&(p.stat_share_app=t.statShareApp),"statPullDownFresh"in t&&(p.stat_pull_down_fresh=t.statPullDownFresh),"statReachBottom"in t&&(p.stat_reach_bottom=t.statReachBottom),r(),"lauchOpts"in t&&(h.Data.lanchInfo=t.lauchOpts,h.Data.lanchInfo.landing=1)}},Page:{init:function(){var t=getCurrentPages()[getCurrentPages().length-1];t.onShow&&function(){var e=t.onShow;t.onShow=function(){h.Page.stat(),e.call(this,arguments)}}(),p.stat_pull_down_fresh&&t.onPullDownRefresh&&function(){var e=t.onPullDownRefresh;t.onPullDownRefresh=function(){h.Event.stat(p.prefix+"pulldownfresh",{url:t.__route__}),e.call(this,arguments)}}(),p.stat_reach_bottom&&t.onReachBottom&&function(){var e=t.onReachBottom;t.onReachBottom=function(){h.Event.stat(p.prefix+"reachbottom",{url:t.__route__}),e.call(this,arguments)}}(),p.stat_share_app&&t.onShareAppMessage&&function(){var e=t.onShareAppMessage;t.onShareAppMessage=function(){return h.Event.stat(p.prefix+"shareapp",{url:t.__route__}),e.call(this,arguments)}}()},stat:function(){if(""!=p.app_id){var t=[],e=m(),n=[l(),e,d()];h.Data.lanchInfo&&(n.push({ht:h.Data.lanchInfo.scene,rdm:"/",rurl:h.Data.lanchInfo.path}),h.Data.lanchInfo.query&&h.Data.lanchInfo.query._mta_ref_id&&n.push({rarg:h.Data.lanchInfo.query._mta_ref_id}),1==h.Data.lanchInfo.landing&&(e.ext+=";lp=1",h.Data.lanchInfo.landing=0)),n.push({rand:+new Date}),e=0;for(var a=n.length;e<a;e++)for(var o in n[e])n[e].hasOwnProperty(o)&&t.push(o+"="+(void 0===n[e][o]?"":n[e][o]));wx.request({url:p.api_base+"?"+t.join("&").toLowerCase()})}}},Event:{stat:function(t,e){if(""!=p.event_id){var n=[],a=l(),o=m();a.dm="wxapps.click",a.url=t,o.r2=p.event_id;var i,s=void 0===e?{}:e,r=[];for(i in s)s.hasOwnProperty(i)&&r.push(encodeURIComponent(i)+"="+encodeURIComponent(s[i]));for(s=r.join(";"),o.r5=s,s=0,o=(a=[a,o,d(),{rand:+new Date}]).length;s<o;s++)for(var c in a[s])a[s].hasOwnProperty(c)&&n.push(c+"="+(void 0===a[s][c]?"":a[s][c]));wx.request({url:p.api_base+"?"+n.join("&").toLowerCase()})}}},Data:{userInfo:null,lanchInfo:null}};t.exports=h},20:function(t,e,n){e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=t/1e4;return e>1?e>1e4?(e/1e4).toFixed(1)+"亿":e.toFixed(1)+"万":t}},31:function(t,e,n){var a={"微笑":"https://static.ws.126.net/3g/emoticon/1000_weixiao.png","可怜":"https://static.ws.126.net/3g/emoticon/1000_kelian.png","被黑":"https://static.ws.126.net/3g/emoticon/1000_beihei.png","色色":"https://static.ws.126.net/3g/emoticon/1000_sese.png","羞羞":"https://static.ws.126.net/3g/emoticon/1000_xiuxiu.png","窃笑":"https://static.ws.126.net/3g/emoticon/1000_qiexiao.png","惊讶":"https://static.ws.126.net/3g/emoticon/1000_jingxia.png","疑问":"https://static.ws.126.net/3g/emoticon/1000_yiwen.png","疲惫":"https://static.ws.126.net/3g/emoticon/1000_pibei.png","喷水":"https://static.ws.126.net/3g/emoticon/1000_penshui.png","狗":"https://static.ws.126.net/3g/emoticon/1000_gou.png","鄙视":"https://static.ws.126.net/3g/emoticon/1000_bishi.png","挨揍":"https://static.ws.126.net/3g/emoticon/1000_aizou.png","骷髅":"https://static.ws.126.net/3g/emoticon/1000_kulou.png","不屑":"https://static.ws.126.net/3g/emoticon/1000_buxie.png","大笑":"https://static.ws.126.net/3g/emoticon/1000_daxiao.png","晕":"https://static.ws.126.net/3g/emoticon/1000_yun.png","大哭":"https://static.ws.126.net/3g/emoticon/1000_daku.png","暴怒":"https://static.ws.126.net/3g/emoticon/1000_baonu.png","石化":"https://static.ws.126.net/3g/emoticon/1000_shihua.png","鼓掌":"https://static.ws.126.net/3g/emoticon/1000_guzhang.png","抱抱":"https://static.ws.126.net/3g/emoticon/1000_baobao.png","比心":"https://static.ws.126.net/3g/emoticon/1000_bixin.png","污":"https://static.ws.126.net/3g/emoticon/1000_wu.png","老司机":"https://static.ws.126.net/3g/emoticon/1000_laosiji.png","大师":"https://static.ws.126.net/3g/emoticon/1000_dashi.png","二楼":"https://static.ws.126.net/3g/emoticon/1000_erlou.png"};e.a=function(t){return t.replace(/\[(.*?)\]/g,function(t){var e=t.match(/\[(.*)\]/)[1],n=a[e];return n?'<img class="emoji" src="'+n+'" />':t})}},38:function(t,e,n){var a=n(40),o=n(41),i=!1,s=n(0)(a.a,o.a,function(t){i||n(39)},null,null);s.options.__file="src/components/TopBar.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] TopBar.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},39:function(t,e){},4:function(t,e,n){e.a=function(t,e){function n(t,e){var n={small:"234x146",normal:"330x2147483647",large:"320x120",articleNormal:r,largeCover:"750x318",littleCover:"375x288"};e?(i=n[e].split("x")[0],s=n[e].split("x")[1]):(i=320,s=260);var a=void 0,o=t?t.split("*")[0]:i,c=void 0,u=t?t.split("*")[1]:s;return o/u>i/s?(a=i,c=Math.round(i/o*u)):o/u<i/s?(a=i,c=Math.round(i/o*u)):(c=s,a=i),a+"x"+c}t&&""!=t.src||(t={src:"http://static.ws.126.net/utf8/3g/touch/images/share-logo.png"});var a=["s.cimg.163.com","nimg.ws.126.net"],o=/(\.jpg)|(\.jpeg)|(\.webp)|(\.png)/i,i=void 0,s=void 0,r="346x260";wx.getSystemInfo({success:function(t){var e=t.windowWidth;r=e-30*e/375+"x260"}});var c=void 0,u=t.imgsrc?t.imgsrc.replace(/\s/g,""):t.src,l=t.pixel,d=n(l,e).split("x"),m=u.match(o)?u.match(o)[0].replace(".",""):"jpg",p=a.indexOf(u.match(/http:\/\/(.*?)\//)[1]),h="articleNormal"==e?"640x10000":n(l,e);return c=-1==p&&m?"http://nimg.ws.126.net/?url="+u+"&thumbnail="+h+"&quality=95&type="+m:u,{alt:t.alt,src:c,width:d[0],height:d[1]}}},40:function(t,e,n){var a=n(1),o=n(2),i=n.n(o),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.a={name:"top-bar",data:function(){return{returnable:!1,show:!1}},props:{darkMode:{default:!1}},computed:s({},Object(a.d)(["deviceInfo"])),watch:{darkMode:function(){var t=this.darkMode?"#ffffff":"#000000";wx.setNavigationBarColor({frontColor:t,backgroundColor:t})}},onLoad:function(){var t=getCurrentPages();this.returnable=t.length>1,this.show=!0},methods:{formSubmit:function(t){var e=t.mp.detail;wx.requestWithCookie({url:"https://c.m.163.com/uc/activity/miniapp/subscribe",data:{form_id:e.formId},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){200===t.data.code&&(i.a.Event.stat("event_push_request",{}),console.log("已订阅"))}});var n=e.target.dataset.name;"back"===n?this.returnable&&(wx.navigateBack(),i.a.Event.stat("btn_topback",{})):"home"===n&&(wx.switchTab({url:"/pages/Home"}),i.a.Event.stat("btn_top2index",{}))}}}},41:function(t,e,n){var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{class:["top-bar",{"top-bar-fringe":t.deviceInfo.hasFringe},{"top-bar-24":t.deviceInfo.statusBar24},{"top-bar-dark":t.darkMode}],attrs:{"report-submit":"true",eventid:"0"},on:{submit:t.formSubmit}},[n("div",{class:["main",{visible:t.show}]},[n("button",{class:["icon-back",{"icon-back-gray":!t.returnable}],attrs:{formType:"submit","data-name":"back"}}),t._v(" "),n("span",{staticClass:"vertical-line"}),t._v(" "),n("button",{staticClass:"icon-home",attrs:{formType:"submit","data-name":"home"}})],1)])},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.a=i},6:function(t,e,n){var a=n(3),o=n.n(a),i=n(25);o.a.use(i.a),e.a={}},7:function(t,e,n){var a=n(3),o=n.n(a),i=n(1),s=n(8),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};o.a.use(i.a);var c=new i.a.Store(r({strict:!0},s.a));e.a=c},71:function(t,e,n){var a=n(73),o=n(75),i=!1,s=n(0)(a.a,o.a,function(t){i||n(72)},null,null);s.options.__file="src/components/CommentList.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] CommentList.vue: functional components are not supported with templates, they should use render functions."),e.a=s.exports},72:function(t,e){},73:function(t,e,n){function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var o=n(74),i=n(31),s=n(4),r=(n(20),n(11));e.a={name:"comment-list",data:function(){return{nextPage:0,isEmpty:!1,isAll:!1,isRequesting:!1,requestFailed:!1,commentIds:[],comments:{},totalComments:0,showComment:!0,docid:"",unfoldedIds:[]}},computed:{idsLength:function(){return this.commentIds.length},lastComments:function(){for(var t=[],e=0;e<this.idsLength;e++){var n=this.commentIds[e].split(","),a=n[n.length-1];this.needFold(n)&&(n=[n[0],n[1],"",n[n.length-2],a]),n.pop(),this.comments[a].ids=n,t.push(this.comments[a])}return t}},props:{type:{default:"hotList"},limit:{default:10},needLazyLoad:{default:!1},showEmptyHint:{default:!1},showTitle:{default:!0},id:{default:""}},onReady:function(){this.docid=this.id,this.updateData()},onUnload:function(){this.resetData()},onReachBottom:function(){this.needLazyLoad&&this.updateData()},methods:{updateData:function(){var t=this;if(!this.isRequesting){this.isRequesting=!0;var e=o.a+"/threads/"+this.docid+"/app/comments/"+this.type+"?limit="+this.limit+"&offset="+this.nextPage*this.limit+"&headLimit=3&ibc=newsapp";wx.requestWithCookie({url:e,header:{"content-type":"application/json"},success:function(e){if(200===e.statusCode){t.requestFailed=!1;var n=e.data;if(n.code)t.nextPage||(t.isEmpty=!0);else{var a=t.commentIds.indexOf(n.commentIds[0]);t.idsLength>0&&-1!==a&&t.commentIds.splice(a);var o=t.commentIds.concat(n.commentIds),i=Object.assign(t.comments,n.comments);t.nextPage=t.nextPage+1,t.isRequesting=!1,t.commentIds=t.deleteEmpty(o),t.comments=t.formatComments(i),t.totalComments=n.newListSize;var s=n.commentIds.length;0===s?1===t.nextPage?t.isEmpty=!0:(t.isEmpty=!1,t.isAll=!0):s<t.limit&&(t.isEmpty=!1,t.isAll=!0),1===t.nextPage&&(t.showEmptyHint&&t.isEmpty?t.$emit("commentLoaded",{pageError:"emptyComment"}):t.$emit("commentLoaded",{pageError:0}))}}else t.$emit("commentLoaded",{pageError:"dataError"})},fail:function(){t.isRequesting=!1,t.requestFailed=!0,console.log("请求失败，刷新试试"),t.$emit("commentLoaded",{pageError:"netError",func:t.updateData})}})}},requestComment:function(t){var e=t.mp.target.dataset.commentid,n=this;if(!n.isRequesting){n.isRequesting=!0,wx.showLoading();var i=o.a+"/app/threads/"+n.docid+"/comments/"+e+"?ibc=newsapp";wx.requestWithCookie({url:i,header:{"content-type":"application/json"},success:function(t){n.isRequesting=!1,wx.hideLoading();var o=Object.assign(t.data.comments,n.comments);n.comments=n.formatComments(o),n.unfoldedIds=[].concat(a(n.unfoldedIds),[e.toString()])},fail:function(){n.isRequesting=!1,wx.hideLoading(),console.log("展开隐藏跟贴失败")}})}},formatComments:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={};for(var n in t)t[n].user=Object.assign({},t[n].user),e[n]={buildLevel:t[n].buildLevel,content:t[n].content,commentId:t[n].commentId,user:{},deviceInfo:t[n].deviceInfo||{deviceName:""}},e[n].user.nickname=t[n].user.nickname&&t[n].user.nickname.slice(0,10)||"火星网友",e[n].user.avatar=t[n].user.avatar&&Object(s.a)({src:t[n].user.avatar},"small").src||"",e[n].user.location=t[n].user.location,e[n].createTime=t[n].createTime&&Object(r.a)(t[n].createTime),e[n].content=e[n].content.indexOf("</p>")>-1?e[n].content:'<p class="comment-text">'+Object(i.a)(e[n].content)+"</p>";return e},resetData:function(){this.commentIds=[],this.comments={},this.nextPage=0,this.isEmpty="",this.isAll=!1,this.isRequesting=!1,this.showComment=!0,this.docid=""},needFold:function(t){var e=t.length;return!(e<=1)&&(!(this.unfoldedIds.indexOf(t[e-1])>-1)&&e>6)},showMoreGailou:function(){this.$emit("showDetail")},deleteEmpty:function(t){for(var e=[],n=t.length,a=0;a<n;a++)t[a]&&e.push(t[a]);return e}}}},74:function(t,e,n){n.d(e,"a",function(){return a});var a="https://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856"},75:function(t,e,n){var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-list"},[t.showTitle&&t.idsLength>0?n("p",{class:"comments-title comments-title-"+t.type}):t._e(),t._v(" "),t._l(t.lastComments,function(e,a){return n("div",{key:e,staticClass:"comment-item"},[n("div",{staticClass:"comment-left"},["火星网友"===e.user.nickname?n("span",{staticClass:"comment-avatar"}):e.user.avatar?n("span",{staticClass:"comment-avatar",style:{backgroundImage:"url("+e.user.avatar+")"}}):n("span",{staticClass:"comment-avatar comment-avatar-noImg"})]),t._v(" "),n("div",{staticClass:"comment-right"},[n("p",{staticClass:"name"},[t._v(t._s(e.user.nickname))]),t._v(" "),n("p",{staticClass:"info"},[t._v(t._s(e.user.location)+"  "+t._s(e.deviceInfo.deviceName)+"  "+t._s(e.createTime))]),t._v(" "),t._l(e.ids,function(o,i){return n("div",{key:e+"-"+a+"-"+i,staticClass:"comment-gailou"},[t.comments[o]?n("div",{staticClass:"gailou-content"},[n("p",{staticClass:"comment-left"},[t._v(t._s(t.comments[o].buildLevel))]),t._v(" "),n("div",{staticClass:"comment-right"},[n("p",{staticClass:"name"},[t._v(t._s(t.comments[o].user.nickname))]),t._v(" "),n("p",{staticClass:"info"},[t._v(t._s(t.comments[o].user.location)+"  "+t._s(t.comments[o].deviceInfo.deviceName)+"  "+t._s(t.comments[o].createTime))]),t._v(" "),n("rich-text",{attrs:{nodes:t.comments[o].content,mpcomid:"0-"+a+"-"+i}})],1)],1):n("div",{staticClass:"gailou-more",attrs:{"data-commentid":e.commentId,eventid:"0-"+a+"-"+i},on:{click:t.requestComment}},[t._v("展开隐藏楼层 "),n("i",{staticClass:"icon-arrow"})],1)])}),t._v(" "),n("rich-text",{attrs:{nodes:e.content,mpcomid:"1-"+a}})],2)])}),t._v(" "),t.isEmpty&&t.needLazyLoad?n("div",{staticClass:"bottom-hint"}):t._e(),t._v(" "),t.isAll&&t.needLazyLoad?n("div",{staticClass:"bottom-hint"},[t._v("已无更多数据")]):t._e(),t._v(" "),"3"===t.limit&&t.idsLength>0?n("navigator",{staticClass:"btn-circle",attrs:{"hover-class":"none",url:"/pages/comments/comments?docid="+t.docid}},[t._v("\n    更多跟贴\n  ")]):"oneWonderfulBuilding"===t.type&&t.idsLength>0?n("navigator",{staticClass:"btn-gailou",attrs:{url:"/pages/comments/comments?type=buildingList&docid="+t.docid}},[t._v("查看更多精彩盖楼\n  ")]):t._e(),t._v(" "),t.nextPage&&!t.isAll&&t.needLazyLoad?n("block",[t.isRequesting?n("div",{staticClass:"refreshing-tip"},[n("div",{staticClass:"refreshing-tip-loading spin-anime-infinite"}),t._v(" "),n("div",[t._v("正在载入")])]):t.requestFailed?n("div",{staticClass:"refreshing-tip",attrs:{eventid:"1"},on:{click:t.updateData}},[n("div",{staticClass:"refreshing-tip-loading"}),t._v(" "),n("div",[t._v("重新加载")])]):t._e()]):t._e()],2)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.a=i},8:function(t,e,n){function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var i,s=n(9),r=n(4),c={state:{showOpenNewsApp:!1,deviceInfo:{isIOS:!1,isIphoneX:!1,hasFringe:!1,statusBar24:!0,windowHeight:0,windowWidth:0},user:{isLogin:"",provinceChinese:"北京",cityChinese:"北京",lastVisitTime:0},needRefreshCollection:!1,showDownloadModal:!1,showShareModal:!1,navLinkData:{toutiao:[],yule:[],tiyu:[],bendi:[],caijin:[],keji:[],fangchan:[],dujia:[],lishi:[],xiangguantuijian:[]},markReadDocIds:[]},mutations:(i={},a(i,"SHOW_OPEN_NEWS_APP",function(t,e){var n=[1036,1069];t.showOpenNewsApp=-1!==n.indexOf(e.scene)}),a(i,"DEVICE_INFO",function(t,e){t.deviceInfo=e.data}),a(i,"USER",function(t,e){t.user=Object.assign(t.user,e.user),console.log(t.user)}),a(i,"REFRESH_COLLECTION",function(t,e){t.needRefreshCollection=e.needRefreshCollection}),a(i,"MODAL_DOWNLOAD",function(t,e){t.showDownloadModal=e.showDownloadModal}),a(i,"MODAL_SHARE",function(t,e){t.showShareModal=e.showShareModal}),a(i,"NAVLINK_CLASS",function(t,e){t.navLinkData=e.data}),a(i,"MARK_READ",function(t,e){"String"===e.type?!t.markReadDocIds.indexOf(e.data)>-1&&(t.markReadDocIds=[].concat(o(t.markReadDocIds),[e.data]).slice(-200)):t.markReadDocIds=[].concat(o(new Set([].concat(o(t.markReadDocIds),o(e.data))))).slice(-200)}),i),actions:{initLoginData:function(t){var e=t.commit;return new Promise(function(t){s.a.login(function(t){console.log("login success "),e({type:"USER",user:{isLogin:!0,avatarUrl:t.avatarUrl,nickName:t.nickName}})},function(){e({type:"USER",user:{isLogin:!1}}),t(),console.log("login failure")})})},getDeviceInfo:function(t){var e=t.commit,n=t.state;return new Promise(function(t){var a=wx.getSystemInfoSync();n.deviceInfo.windowHeight===a.windowHeight?t():(console.log("设备信息"),console.log(a)),e(/IOS/gi.test(a.system)?{type:"DEVICE_INFO",data:{isIOS:!0,isIphoneX:/iPhone X/gi.test(a.model),windowHeight:a.windowHeight,windowWidth:a.windowWidth,hasFringe:a.statusBarHeight>24,statusBar24:24===a.statusBarHeight}}:{type:"DEVICE_INFO",data:{isIOS:!1,windowHeight:a.windowHeight,windowWidth:a.windowWidth,hasFringe:a.statusBarHeight>26,statusBar24:a.statusBarHeight>=22&&a.statusBarHeight<=26}}),t()})},getNavLinkData:function(t){var e=t.commit;wx.requestWithCookie({url:"https://c.m.163.com/ug/api/happynuts/app/advert/app-info",success:function(t){var n=t.data.data;for(var a in n)n[a].map(function(t){t.appId=t.appId?t.appId:"wx6664983624b1a9aa",t.url=t.url,t.imgsrc=Object(r.a)({src:t.imgSrc},"normal").src,t.type="nav_link"});e({type:"NAVLINK_CLASS",data:n})}})}}};e.a=c}},[176]); 
 			}); 	require("pages/comments/comments.js");
 	