/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx14=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx14:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx14 || [];
function gz$gwx14_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_1)return __WXML_GLOBAL__.ops_cached.$gwx14_1
__WXML_GLOBAL__.ops_cached.$gwx14_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visible']])
Z([3,'coupon-float'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'tips']]],[[7],[3,'coupon']]])
Z([[7],[3,'tips']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_1);return __WXML_GLOBAL__.ops_cached.$gwx14_1
}
function gz$gwx14_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_2)return __WXML_GLOBAL__.ops_cached.$gwx14_2
__WXML_GLOBAL__.ops_cached.$gwx14_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'&&'],[[7],[3,'canShowCouponBtn']],[[7],[3,'couponBtnVisible']]],[[2,'&&'],[[7],[3,'act']],[[6],[[7],[3,'act']],[3,'logo']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_2);return __WXML_GLOBAL__.ops_cached.$gwx14_2
}
function gz$gwx14_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_3)return __WXML_GLOBAL__.ops_cached.$gwx14_3
__WXML_GLOBAL__.ops_cached.$gwx14_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'height: 80px;'])
Z([3,'filterbar'])
Z([[2,'!'],[[7],[3,'activeTab']]])
Z([[6],[[7],[3,'dropdown']],[3,'visible']])
Z([3,'onCancel'])
Z([3,'filter-dropdown'])
Z([[6],[[7],[3,'dropdown']],[3,'style']])
Z([[2,'!='],[[6],[[7],[3,'dropdown']],[3,'type']],[1,'sort']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_3);return __WXML_GLOBAL__.ops_cached.$gwx14_3
}
function gz$gwx14_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_4)return __WXML_GLOBAL__.ops_cached.$gwx14_4
__WXML_GLOBAL__.ops_cached.$gwx14_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[7],[3,'visible']],[[7],[3,'hideDelay']]])
Z([3,'panel-main'])
Z([[7],[3,'orderView']])
Z([3,'title'])
Z([3,'panel-section'])
Z([[2,'>='],[[6],[[7],[3,'item']],[3,'currentNum']],[1,3]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'list']],[3,'length']],[1,9]])
Z([[6],[[7],[3,'morePanel']],[3,'visible']])
Z([a,[3,'panel-page level2 '],[[6],[[7],[3,'morePanel']],[3,'type']]])
Z([[2,'>='],[[6],[[7],[3,'moreHead']],[3,'count']],[1,3]])
Z([[2,'=='],[[6],[[7],[3,'morePanel']],[3,'type']],[1,'brand']])
Z([[2,'=='],[[6],[[7],[3,'morePanel']],[3,'tab']],[1,'abcList']])
Z(z[11])
Z([3,'onLv2Scroll'])
Z([3,'panel-list'])
Z([[6],[[7],[3,'morePanel']],[3,'scrollTop']])
Z([[2,'=='],[[6],[[7],[3,'morePanel']],[3,'type']],[1,'category']])
Z([[7],[3,'moreList']])
Z([3,'id'])
Z([[2,'=='],[[6],[[7],[3,'morePanel']],[3,'cid2']],[[6],[[7],[3,'item']],[3,'id']]])
Z(z[10])
Z([3,'panel-btns'])
Z([[2,'!'],[[6],[[7],[3,'morePanel']],[3,'visible']]])
Z([[2,'!='],[[6],[[7],[3,'morePanel']],[3,'type']],[1,'category']])
Z([[6],[[7],[3,'addressPanel']],[3,'visible']])
Z([[6],[[7],[3,'addressPanel']],[3,'addressId']])
Z([[6],[[7],[3,'addressPanel']],[3,'areaId']])
Z([3,'onHideAddress'])
Z([1,true])
Z(z[28])
Z([1,false])
Z(z[28])
})(__WXML_GLOBAL__.ops_cached.$gwx14_4);return __WXML_GLOBAL__.ops_cached.$gwx14_4
}
function gz$gwx14_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_5)return __WXML_GLOBAL__.ops_cached.$gwx14_5
__WXML_GLOBAL__.ops_cached.$gwx14_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'order'])
Z([[7],[3,'list']])
Z([3,''])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'iType']],[1,'autorank']],[[2,'=='],[[6],[[7],[3,'item']],[3,'iType']],[1,'topic']]])
Z([[7],[3,'item']])
Z([[7],[3,'listMode']])
Z([[7],[3,'longImgMode']])
Z([3,'onToItem'])
Z([a,[3,'goods-item '],[[2,'?:'],[[7],[3,'longImgMode']],[1,'goods-item-long-cover'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'activeItem']],[[6],[[7],[3,'item']],[3,'id']]],[1,'active'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[2,'+'],[1,'goods-item-'],[[6],[[7],[3,'item']],[3,'id']]])
Z([3,'tag'])
Z([[6],[[6],[[7],[3,'item']],[3,'tags']],[3,'picture']])
Z([3,'name'])
Z([[2,'=='],[[6],[[7],[3,'tag']],[3,'type']],[1,'normal']])
Z([[2,'=='],[[6],[[7],[3,'tag']],[3,'type']],[1,'special-belt']])
Z([[2,'=='],[[6],[[7],[3,'tag']],[3,'type']],[1,'special-price']])
Z([[6],[[7],[3,'tag']],[3,'image']])
Z([3,'goods-item-info'])
Z(z[11])
Z([[6],[[6],[[7],[3,'item']],[3,'tags']],[3,'title']])
Z(z[13])
Z(z[17])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'isGaiya']],[[2,'=='],[[7],[3,'listMode']],[1,1]]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'item']],[3,'attrs']],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'length']]],[[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'listMode']],[1,2]],[[2,'=='],[[6],[[7],[3,'item']],[3,'tlineimg']],[1,1]]],[[2,'!='],[[7],[3,'listMode']],[1,2]]]])
Z([[6],[[7],[3,'item']],[3,'isBook']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'book']],[[6],[[6],[[7],[3,'item']],[3,'book']],[3,'ad']]])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'book']],[[6],[[6],[[7],[3,'item']],[3,'book']],[3,'author']]])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'book']],[[6],[[6],[[7],[3,'item']],[3,'book']],[3,'award']]])
Z([3,'goods-item-area-price'])
Z([3,'item-price'])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'price']],[3,'type']],[1,'hide']])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'price']],[3,'type']],[1,'lease']])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'price']],[3,'type']],[1,'pingou']])
Z([[6],[[6],[[7],[3,'item']],[3,'price']],[3,'condition']])
Z([[6],[[6],[[7],[3,'item']],[3,'price']],[3,'original']])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'price']],[3,'_value']],[1,0]])
Z(z[11])
Z([[6],[[6],[[7],[3,'item']],[3,'tags']],[3,'price']])
Z(z[13])
Z([[2,'=='],[[6],[[7],[3,'tag']],[3,'type']],[1,'complex']])
Z([[2,'=='],[[6],[[7],[3,'tag']],[3,'type']],[1,'special-lineation']])
Z([[2,'=='],[[6],[[7],[3,'tag']],[3,'type']],[1,'text']])
Z([[2,'=='],[[6],[[7],[3,'tag']],[3,'type']],[1,'image']])
Z(z[11])
Z([[6],[[6],[[7],[3,'item']],[3,'tags']],[3,'price_bottom']])
Z(z[13])
Z(z[42])
Z(z[43])
Z([[2,'||'],[[6],[[7],[3,'item']],[3,'comment']],[[6],[[7],[3,'item']],[3,'goodrate']]])
Z([[6],[[7],[3,'item']],[3,'shop_name']])
Z([3,'goods-item-area-others'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'shop_id']],[1,0]],[[6],[[7],[3,'item']],[3,'MultiSuppliers']]],[[6],[[6],[[7],[3,'item']],[3,'MultiSuppliers']],[3,'supplier_count']]],[[6],[[6],[[7],[3,'item']],[3,'MultiSuppliers']],[3,'min_price']]])
Z(z[11])
Z([[6],[[6],[[7],[3,'item']],[3,'tags']],[3,'bottom']])
Z(z[13])
Z(z[17])
Z([[6],[[7],[3,'item']],[3,'showSimilar']])
Z([[2,'&&'],[[7],[3,'hasInterlude']],[[6],[[7],[3,'interlude']],[[2,'+'],[[7],[3,'order']],[1,1]]]])
Z([[6],[[7],[3,'interlude']],[[2,'+'],[[7],[3,'order']],[1,1]]])
Z([3,'iType'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'iType']],[1,'tags']])
Z([3,'bubble'])
Z(z[62])
Z(z[4])
Z(z[5])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'iType']],[1,'banner']])
Z(z[4])
Z(z[5])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'iType']],[1,'coupon']])
Z(z[4])
Z(z[5])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'iType']],[1,'adshop']])
Z(z[4])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx14_5);return __WXML_GLOBAL__.ops_cached.$gwx14_5
}
function gz$gwx14_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_6)return __WXML_GLOBAL__.ops_cached.$gwx14_6
__WXML_GLOBAL__.ops_cached.$gwx14_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visible']])
Z([[2,'=='],[[6],[[7],[3,'hongbaoEgg']],[3,'type']],[1,'HONGBAO_NEW_USER']])
Z([[2,'>='],[[7],[3,'step']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_6);return __WXML_GLOBAL__.ops_cached.$gwx14_6
}
function gz$gwx14_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_7)return __WXML_GLOBAL__.ops_cached.$gwx14_7
__WXML_GLOBAL__.ops_cached.$gwx14_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx14_7);return __WXML_GLOBAL__.ops_cached.$gwx14_7
}
function gz$gwx14_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_8)return __WXML_GLOBAL__.ops_cached.$gwx14_8
__WXML_GLOBAL__.ops_cached.$gwx14_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx14_8);return __WXML_GLOBAL__.ops_cached.$gwx14_8
}
function gz$gwx14_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_9)return __WXML_GLOBAL__.ops_cached.$gwx14_9
__WXML_GLOBAL__.ops_cached.$gwx14_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx14_9);return __WXML_GLOBAL__.ops_cached.$gwx14_9
}
function gz$gwx14_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_10)return __WXML_GLOBAL__.ops_cached.$gwx14_10
__WXML_GLOBAL__.ops_cached.$gwx14_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'coupons']])
Z([3,'activeId'])
Z([3,'onTap'])
Z([a,[3,'coupon type-dong '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'isBingo']],[1,'disabled'],[1,'']]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'isBingo']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_10);return __WXML_GLOBAL__.ops_cached.$gwx14_10
}
function gz$gwx14_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_11)return __WXML_GLOBAL__.ops_cached.$gwx14_11
__WXML_GLOBAL__.ops_cached.$gwx14_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'floor']],[3,'floor_name']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_11);return __WXML_GLOBAL__.ops_cached.$gwx14_11
}
function gz$gwx14_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_12)return __WXML_GLOBAL__.ops_cached.$gwx14_12
__WXML_GLOBAL__.ops_cached.$gwx14_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'modal']],[3,'visible']])
Z([[6],[[7],[3,'modal']],[3,'showCancel']])
Z([[6],[[7],[3,'toast']],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_12);return __WXML_GLOBAL__.ops_cached.$gwx14_12
}
function gz$gwx14_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_13)return __WXML_GLOBAL__.ops_cached.$gwx14_13
__WXML_GLOBAL__.ops_cached.$gwx14_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx14_13);return __WXML_GLOBAL__.ops_cached.$gwx14_13
}
function gz$gwx14_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_14)return __WXML_GLOBAL__.ops_cached.$gwx14_14
__WXML_GLOBAL__.ops_cached.$gwx14_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'?:'],[[2,'>'],[[7],[3,'navHeight']],[1,0]],[1,'height: 100%'],[1,'']])
Z([a,[3,'searchbar '],[[7],[3,'specialStyle']],[3,' '],[[2,'?:'],[[2,'>'],[[7],[3,'navHeight']],[1,0]],[1,'in-nav'],[1,'']]])
Z([3,'searchbar-extra'])
Z([3,'searchbar-box'])
Z([[2,'?:'],[[2,'&&'],[[2,'>'],[[7],[3,'navHeight']],[1,0]],[[7],[3,'isIOS']]],[1,'margin-top: -3px;'],[1,'']])
Z([[7],[3,'isActive']])
Z([[2,'&&'],[[7],[3,'isActive']],[[7],[3,'keyword']]])
Z([[2,'!'],[[7],[3,'isActive']]])
Z([3,'searchbar-act'])
Z([[2,'&&'],[[7],[3,'isActive']],[[2,'!'],[[2,'>'],[[7],[3,'navHeight']],[1,0]]]])
Z(z[8])
Z([3,'bubble'])
Z(z[11])
Z(z[5])
Z([[7],[3,'keyword']])
Z([[7],[3,'navHeight']])
Z([3,'onQuickInput'])
Z([3,'onPvidChange'])
Z(z[11])
Z([3,'onVersionChange'])
Z(z[5])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx14_14);return __WXML_GLOBAL__.ops_cached.$gwx14_14
}
function gz$gwx14_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_15)return __WXML_GLOBAL__.ops_cached.$gwx14_15
__WXML_GLOBAL__.ops_cached.$gwx14_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shopIndex'])
Z([3,'shop'])
Z([[7],[3,'shops']])
Z([3,'shopId'])
Z(z[1])
Z([3,'onShop'])
Z([3,'shop-header'])
Z([[6],[[6],[[7],[3,'shop']],[3,'shopInfo']],[3,'venderId']])
Z([[6],[[7],[3,'shop']],[3,'logo']])
Z([3,'shop-desc'])
Z([[6],[[7],[3,'shop']],[3,'isZy']])
Z([[6],[[7],[3,'shop']],[3,'evaluate']])
Z([3,''])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'tag']])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'stars']],[[6],[[7],[3,'item']],[3,'stars']]],[[6],[[6],[[7],[3,'item']],[3,'stars']],[3,'length']]])
Z([[6],[[7],[3,'shop']],[3,'fans']])
Z([[2,'&&'],[[6],[[7],[3,'shop']],[3,'skus']],[[6],[[6],[[7],[3,'shop']],[3,'skus']],[3,'length']]])
Z([3,'skuIndex'])
Z([[6],[[7],[3,'shop']],[3,'skus']])
Z([3,'skuId'])
Z([3,'onItem'])
Z([3,'shop-product'])
Z([[7],[3,'shopIndex']])
Z([[7],[3,'skuIndex']])
Z([[6],[[7],[3,'item']],[3,'price']])
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'shop']],[3,'tags']],[[6],[[6],[[7],[3,'shop']],[3,'tags']],[3,'length']]],[[6],[[7],[3,'shop']],[3,'skuTotal']]])
Z([3,'shop-aside'])
Z([[2,'&&'],[[6],[[7],[3,'shop']],[3,'tags']],[[6],[[6],[[7],[3,'shop']],[3,'tags']],[3,'length']]])
Z([[6],[[7],[3,'shop']],[3,'skuTotal']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_15);return __WXML_GLOBAL__.ops_cached.$gwx14_15
}
function gz$gwx14_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_16)return __WXML_GLOBAL__.ops_cached.$gwx14_16
__WXML_GLOBAL__.ops_cached.$gwx14_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
Z([3,'onTouchEnd'])
Z([3,'onTouchStart'])
Z([3,'onTouchMove'])
Z([a,[3,'sku-switch '],[[7],[3,'animate']]])
Z([[2,'+'],[[2,'+'],[1,'top: '],[[2,'?:'],[[2,'>'],[[7],[3,'navHeight']],[1,0]],[[7],[3,'navHeight']],[1,0]]],[1,'px;']])
Z([[7],[3,'list']])
Z([3,'sku'])
Z([3,'onAnimateEnd'])
Z([3,'switch-card'])
Z([3,'onToItem'])
Z([3,'switch-img'])
Z([[7],[3,'index']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'stockStatus']],[1,'无货']])
Z([3,'switch-ctrl'])
Z([3,'onAddCart'])
Z([a,[3,'switch-btn cart '],[[2,'?:'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'stockStatus']],[1,'无货']],[[2,'>='],[[6],[[7],[3,'item']],[3,'cartNumber']],[1,200]]],[1,'disabled'],[1,'']]])
Z(z[12])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'cartNumber']],[1,0]])
Z([[6],[[7],[3,'item']],[3,'hasSimilar']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_16);return __WXML_GLOBAL__.ops_cached.$gwx14_16
}
function gz$gwx14_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_17)return __WXML_GLOBAL__.ops_cached.$gwx14_17
__WXML_GLOBAL__.ops_cached.$gwx14_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'smartbox'])
Z([[2,'!'],[[7],[3,'isActive']]])
Z([[2,'+'],[[2,'?:'],[[2,'>'],[[7],[3,'navHeight']],[1,0]],[[2,'+'],[[2,'+'],[1,'top:'],[[7],[3,'navHeight']]],[1,'px;']],[1,'']],[[2,'?:'],[[2,'!'],[[7],[3,'keyword']]],[[7],[3,'atmosphereStyle']],[1,'']]])
Z([[2,'!'],[[7],[3,'keyword']]])
Z([3,'smart-panel'])
Z([[2,'&&'],[[7],[3,'historyWords']],[[6],[[7],[3,'historyWords']],[3,'length']]])
Z([[7],[3,'historyWords']])
Z([3,'text'])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'foldIndex']],[[7],[3,'index']]],[[7],[3,'isFold']]],[[2,'&&'],[[2,'&&'],[[2,'>'],[[7],[3,'foldIndex']],[[2,'-'],[1,1]]],[[2,'=='],[[2,'+'],[[7],[3,'index']],[1,1]],[[6],[[7],[3,'historyWords']],[3,'length']]]],[[2,'!'],[[7],[3,'isFold']]]]])
Z([[2,'&&'],[[7],[3,'hotWords']],[[6],[[7],[3,'hotWords']],[3,'length']]])
Z([a,[3,'panel-content '],[[2,'?:'],[[7],[3,'isLessI7ScreenHeight']],[1,'rows-3'],[1,'rows-5']]])
Z([[7],[3,'showHotWords']])
Z([[7],[3,'hotWords']])
Z([3,'id'])
Z([3,'onHot'])
Z([3,'tag'])
Z([[6],[[7],[3,'item']],[3,'active_url']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'key']])
Z([[6],[[7],[3,'item']],[3,'pps']])
Z([[6],[[7],[3,'item']],[3,'corner_img']])
Z([[2,'&&'],[[7],[3,'activity']],[[6],[[7],[3,'activity']],[3,'length']]])
Z([[7],[3,'activity']])
Z([3,'name'])
Z([3,'act-item'])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'icon']],[[6],[[7],[3,'item']],[3,'iconWidth']]])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'moreText']],[[6],[[7],[3,'item']],[3,'moreLink']]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_17);return __WXML_GLOBAL__.ops_cached.$gwx14_17
}
function gz$gwx14_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_18)return __WXML_GLOBAL__.ops_cached.$gwx14_18
__WXML_GLOBAL__.ops_cached.$gwx14_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'keyword']])
Z([[7],[3,'extList']])
Z([3,'iftp'])
Z([3,'onTapExtension'])
Z([3,'smart-item extend'])
Z([[6],[[7],[3,'item']],[3,'acq']])
Z([[6],[[7],[3,'item']],[3,'ftt']])
Z([[6],[[7],[3,'item']],[3,'ico']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'shq']])
Z([[6],[[7],[3,'item']],[3,'iftp']])
Z([[6],[[7],[3,'item']],[3,'pru']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'iftp']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'iftp']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'iftp']],[1,2]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'iftp']],[1,3]])
Z([[6],[[7],[3,'item']],[3,'prp']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'iftp']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_18);return __WXML_GLOBAL__.ops_cached.$gwx14_18
}
function gz$gwx14_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_19)return __WXML_GLOBAL__.ops_cached.$gwx14_19
__WXML_GLOBAL__.ops_cached.$gwx14_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'shop']],[[6],[[7],[3,'shop']],[3,'shop_name']]])
Z([3,'top-adshop'])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,1]],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,2]]],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,5]]])
Z([3,'onToShop'])
Z([3,'shop-main'])
Z([[6],[[7],[3,'shop']],[3,'logo_url']])
Z([[2,'=='],[[6],[[7],[3,'shop']],[3,'vender_type']],[1,1]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,1]],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,2]]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,1]],[[6],[[7],[3,'shop']],[3,'child_link']]],[[2,'=='],[[6],[[6],[[7],[3,'shop']],[3,'child_link']],[3,'length']],[1,4]]])
Z([[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,5]])
Z([a,[3,'immersive '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,7]],[1,'with-carousel'],[1,'']],[3,' '],[[2,'?:'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,8]],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,10]]],[1,'with-banner'],[1,'']],[3,' '],[[2,'?:'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,9]],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,10]]],[1,'with-coupon'],[1,'']]])
Z([[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,7]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,8]],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,10]]])
Z([3,'content'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,6]],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,9]]])
Z([[2,'&&'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,9]],[[2,'=='],[[6],[[7],[3,'shop']],[3,'style_type']],[1,10]]],[[6],[[7],[3,'shop']],[3,'coupon_info']]])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx14_19);return __WXML_GLOBAL__.ops_cached.$gwx14_19
}
function gz$gwx14_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_20)return __WXML_GLOBAL__.ops_cached.$gwx14_20
__WXML_GLOBAL__.ops_cached.$gwx14_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'banner']],[[6],[[7],[3,'banner']],[3,'image']]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_20);return __WXML_GLOBAL__.ops_cached.$gwx14_20
}
function gz$gwx14_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_21)return __WXML_GLOBAL__.ops_cached.$gwx14_21
__WXML_GLOBAL__.ops_cached.$gwx14_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'car']],[[2,'||'],[[6],[[7],[3,'car']],[3,'tips']],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'car']],[3,'info']],[[6],[[7],[3,'car']],[3,'list']]],[[6],[[6],[[7],[3,'car']],[3,'list']],[3,'length']]]]])
Z([3,'top-car'])
Z([[6],[[7],[3,'car']],[3,'tips']])
Z([[6],[[7],[3,'car']],[3,'info']])
Z([3,'onFillInfo'])
Z([3,'car-remark'])
Z([[2,'=='],[[6],[[6],[[7],[3,'car']],[3,'info']],[3,'needAdd']],[1,1]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'car']],[3,'list']],[[6],[[6],[[7],[3,'car']],[3,'list']],[3,'length']]],[[7],[3,'isOpen']]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_21);return __WXML_GLOBAL__.ops_cached.$gwx14_21
}
function gz$gwx14_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_22)return __WXML_GLOBAL__.ops_cached.$gwx14_22
__WXML_GLOBAL__.ops_cached.$gwx14_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'category']],[[6],[[7],[3,'category']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_22);return __WXML_GLOBAL__.ops_cached.$gwx14_22
}
function gz$gwx14_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_23)return __WXML_GLOBAL__.ops_cached.$gwx14_23
__WXML_GLOBAL__.ops_cached.$gwx14_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'coupons']],[[6],[[7],[3,'coupons']],[3,'length']]])
Z([[7],[3,'coupons']])
Z([3,''])
Z([3,'onTap'])
Z([a,[3,'coupon '],[[6],[[7],[3,'item']],[3,'typeClass']],[3,' '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'isBingo']],[1,'disabled'],[1,'']]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'isBingo']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_23);return __WXML_GLOBAL__.ops_cached.$gwx14_23
}
function gz$gwx14_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_24)return __WXML_GLOBAL__.ops_cached.$gwx14_24
__WXML_GLOBAL__.ops_cached.$gwx14_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[7],[3,'notice']],[[6],[[7],[3,'notice']],[3,'title']]],[[6],[[7],[3,'notice']],[3,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_24);return __WXML_GLOBAL__.ops_cached.$gwx14_24
}
function gz$gwx14_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_25)return __WXML_GLOBAL__.ops_cached.$gwx14_25
__WXML_GLOBAL__.ops_cached.$gwx14_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[7],[3,'portal']],[[6],[[7],[3,'portal']],[3,'name']]],[[6],[[7],[3,'portal']],[3,'toUrl']]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_25);return __WXML_GLOBAL__.ops_cached.$gwx14_25
}
function gz$gwx14_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_26)return __WXML_GLOBAL__.ops_cached.$gwx14_26
__WXML_GLOBAL__.ops_cached.$gwx14_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'shops']],[[6],[[7],[3,'shops']],[3,'length']]])
Z([3,'onTap'])
Z([3,'top-shop'])
Z([[7],[3,'shops']])
Z([3,''])
Z([[2,'=='],[[6],[[7],[3,'shops']],[3,'length']],[1,1]])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'shop'])
Z([[7],[3,'item']])
Z(z[7])
Z([3,'./shop.tpl.wxml'])
Z([[2,'>'],[[6],[[7],[3,'shops']],[3,'length']],[1,1]])
Z([1,true])
Z([3,'onChange'])
Z(z[12])
Z([[7],[3,'current']])
Z([1,8000])
Z([3,'height: 140px;'])
Z(z[3])
Z(z[4])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[7])
Z(z[10])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx14_26);return __WXML_GLOBAL__.ops_cached.$gwx14_26
}
function gz$gwx14_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_27)return __WXML_GLOBAL__.ops_cached.$gwx14_27
__WXML_GLOBAL__.ops_cached.$gwx14_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shop'])
Z(z[0])
Z([3,'shop-main'])
Z([[6],[[7],[3,'item']],[3,'logo']])
Z([3,'info'])
Z([[6],[[7],[3,'item']],[3,'isZy']])
Z([[6],[[7],[3,'item']],[3,'desc']])
Z([[6],[[7],[3,'item']],[3,'banner']])
Z([3,'text'])
Z(z[5])
Z([3,'it'])
Z([[6],[[7],[3,'item']],[3,'evaluate']])
Z([3,''])
Z([[2,'=='],[[6],[[7],[3,'it']],[3,'type']],[1,'tag']])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'it']],[3,'type']],[1,'stars']],[[6],[[7],[3,'it']],[3,'stars']]],[[6],[[6],[[7],[3,'it']],[3,'stars']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_27);return __WXML_GLOBAL__.ops_cached.$gwx14_27
}
function gz$gwx14_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_28)return __WXML_GLOBAL__.ops_cached.$gwx14_28
__WXML_GLOBAL__.ops_cached.$gwx14_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[7],[3,'writer']],[[6],[[7],[3,'writer']],[3,'id']]],[[6],[[7],[3,'writer']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_28);return __WXML_GLOBAL__.ops_cached.$gwx14_28
}
function gz$gwx14_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_29)return __WXML_GLOBAL__.ops_cached.$gwx14_29
__WXML_GLOBAL__.ops_cached.$gwx14_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'cartTotal']])
Z([[7],[3,'prevParams']])
Z([[7],[3,'unfold']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_29);return __WXML_GLOBAL__.ops_cached.$gwx14_29
}
function gz$gwx14_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_30)return __WXML_GLOBAL__.ops_cached.$gwx14_30
__WXML_GLOBAL__.ops_cached.$gwx14_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'shopList']],[1,0]]],[[8],'idx',[1,0]]])
Z([3,'base__shop--short'])
})(__WXML_GLOBAL__.ops_cached.$gwx14_30);return __WXML_GLOBAL__.ops_cached.$gwx14_30
}
function gz$gwx14_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_31)return __WXML_GLOBAL__.ops_cached.$gwx14_31
__WXML_GLOBAL__.ops_cached.$gwx14_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'base__shop--short'])
Z([3,'gotoShop'])
Z([3,'shop_entrance'])
Z([[7],[3,'click_url']])
Z([[7],[3,'id']])
Z([[7],[3,'idx']])
Z([[7],[3,'name']])
Z([[7],[3,'stype']])
Z([[7],[3,'brand']])
Z([[2,'>'],[[6],[[7],[3,'titleTags']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_31);return __WXML_GLOBAL__.ops_cached.$gwx14_31
}
function gz$gwx14_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_32)return __WXML_GLOBAL__.ops_cached.$gwx14_32
__WXML_GLOBAL__.ops_cached.$gwx14_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'filter-panel'])
Z([3,'onChangeFold'])
Z([a,[3,'panel_title '],[[2,'?:'],[[2,'!'],[[7],[3,'overview_hide']]],[1,'has_fold'],[1,'']]])
Z([[2,'!'],[[7],[3,'overview_hide']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'overview_hide']]],[[2,'>'],[[6],[[7],[3,'checked_list']],[3,'length']],[1,2]]])
Z(z[3])
Z([[2,'||'],[[7],[3,'overview_hide']],[[7],[3,'fold_status']]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_32);return __WXML_GLOBAL__.ops_cached.$gwx14_32
}
function gz$gwx14_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_33)return __WXML_GLOBAL__.ops_cached.$gwx14_33
__WXML_GLOBAL__.ops_cached.$gwx14_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx14_33);return __WXML_GLOBAL__.ops_cached.$gwx14_33
}
function gz$gwx14_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_34)return __WXML_GLOBAL__.ops_cached.$gwx14_34
__WXML_GLOBAL__.ops_cached.$gwx14_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx14_34);return __WXML_GLOBAL__.ops_cached.$gwx14_34
}
function gz$gwx14_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_35)return __WXML_GLOBAL__.ops_cached.$gwx14_35
__WXML_GLOBAL__.ops_cached.$gwx14_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx14_35);return __WXML_GLOBAL__.ops_cached.$gwx14_35
}
function gz$gwx14_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_36)return __WXML_GLOBAL__.ops_cached.$gwx14_36
__WXML_GLOBAL__.ops_cached.$gwx14_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'good-count_wrap'])
Z([[2,'>'],[[6],[[7],[3,'addProducts']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'products']],[3,'length']],[1,0]])
Z([[7],[3,'showPay']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_36);return __WXML_GLOBAL__.ops_cached.$gwx14_36
}
function gz$gwx14_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_37)return __WXML_GLOBAL__.ops_cached.$gwx14_37
__WXML_GLOBAL__.ops_cached.$gwx14_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'search_bar '],[[2,'?:'],[[7],[3,'isSupportNav']],[1,'search_bar_slot'],[1,'']]])
Z([3,'onTapSearchBar'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'type']],[1,'search']],[1,'search_bar_box search_bar_box_hack'],[1,'search_bar_box']])
Z([[2,'!='],[[7],[3,'type']],[1,'search']])
Z([[2,'!'],[[7],[3,'isSupportNav']]])
Z([[7],[3,'isFocus']])
Z([[2,'=='],[[7],[3,'type']],[1,'search']])
Z([3,'gotoCart'])
Z([3,'search_bar__cart'])
Z([[7],[3,'cartMark']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_37);return __WXML_GLOBAL__.ops_cached.$gwx14_37
}
function gz$gwx14_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_38)return __WXML_GLOBAL__.ops_cached.$gwx14_38
__WXML_GLOBAL__.ops_cached.$gwx14_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'overflowHide']])
Z([[7],[3,'isSupportNav']])
Z([3,'onSetNavInfo'])
Z([[7],[3,'navBarData']])
Z([3,'onSearchBarActive'])
Z([3,'onExtraKeyRemove'])
Z([3,'onHotWordReady'])
Z([3,'onKeywordChange'])
Z([3,'onSearch'])
Z([3,'onVersionChange'])
Z([[6],[[7],[3,'searchbar']],[3,'category']])
Z([[6],[[7],[3,'searchbar']],[3,'darkList']])
Z([[6],[[7],[3,'searchbar']],[3,'extraKeys']])
Z([[6],[[7],[3,'searchbar']],[3,'isActive']])
Z([[7],[3,'keyword']])
Z([[7],[3,'navBarHeight']])
Z([[2,'?:'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'header']],[3,'fixed']]],[[2,'!'],[[6],[[7],[3,'searchbar']],[3,'isActive']]]],[[6],[[7],[3,'searchbar']],[3,'specialStyle']],[1,'']])
Z([[2,'?:'],[[6],[[7],[3,'header']],[3,'fixed']],[1,'header-fixed'],[1,'']])
Z([3,'search-header'])
Z([[2,'+'],[[6],[[7],[3,'header']],[3,'style']],[[2,'+'],[[2,'+'],[1,'margin-top:'],[[7],[3,'navBarHeight']]],[1,'px;']]])
Z([[2,'!'],[[7],[3,'isSupportNav']]])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[16])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'header']],[3,'prelude']],[[2,'!'],[[6],[[7],[3,'shop']],[3,'visible']]]],[[2,'!'],[[7],[3,'hideTopArea']]]])
Z([3,'top-area'])
Z([3,'onDrawAdShopCoupon'])
Z([[6],[[7],[3,'prelude']],[3,'shop_ad']])
Z([[2,'||'],[[6],[[7],[3,'prelude']],[3,'shop_loop']],[[6],[[7],[3,'prelude']],[3,'shop_plain']]])
Z([3,'onTopFilter'])
Z([[6],[[7],[3,'prelude']],[3,'category']])
Z([[6],[[7],[3,'prelude']],[3,'writer']])
Z([3,'onCarSearch'])
Z([3,'onCalcHeader'])
Z([[6],[[7],[3,'prelude']],[3,'car']])
Z([[6],[[7],[3,'prelude']],[3,'portal']])
Z([3,'onDrawTopCoupon'])
Z([[2,'||'],[[6],[[7],[3,'prelude']],[3,'coupon_precise']],[[6],[[7],[3,'prelude']],[3,'coupon_ppms']]])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[6],[[7],[3,'prelude']],[3,'banner_ppms']],[[6],[[7],[3,'prelude']],[3,'banner_hongbao']]],[[6],[[7],[3,'prelude']],[3,'banner_jingang']]],[[6],[[7],[3,'prelude']],[3,'banner_188']]])
Z([[6],[[7],[3,'prelude']],[3,'notice']])
Z([[7],[3,'isReady']])
Z([3,'onFilter'])
Z([3,'onShowFilterPanel'])
Z([3,'onPartialPanel'])
Z([3,'onTab'])
Z([[7],[3,'extraTabs']])
Z([[7],[3,'filterPanel']])
Z(z[1])
Z(z[50])
Z([3,'onHideFilterPanel'])
Z(z[52])
Z(z[55])
Z(z[14])
Z(z[15])
Z([[7],[3,'filterPanelVisible']])
Z([[2,'&&'],[[6],[[7],[3,'header']],[3,'fixed']],[[2,'!'],[[7],[3,'overflowHide']]]])
Z([[2,'!'],[[6],[[7],[3,'shop']],[3,'visible']]])
Z(z[50])
Z([[7],[3,'floatCoupon']])
Z(z[55])
Z([[2,'&&'],[[7],[3,'searchTips']],[[6],[[7],[3,'searchTips']],[3,'type']]])
Z([3,'search-tips'])
Z([[2,'=='],[[6],[[7],[3,'searchTips']],[3,'type']],[1,'replace']])
Z([[2,'=='],[[6],[[7],[3,'searchTips']],[3,'type']],[1,'suggest']])
Z([[2,'=='],[[6],[[7],[3,'searchTips']],[3,'type']],[1,'hidden']])
Z([[2,'=='],[[6],[[7],[3,'searchTips']],[3,'type']],[1,'recommend']])
Z([[2,'&&'],[[6],[[7],[3,'searchTips']],[3,'others']],[[6],[[6],[[7],[3,'searchTips']],[3,'others']],[3,'length']]])
Z([[2,'=='],[[6],[[7],[3,'searchTips']],[3,'type']],[1,'fallback']])
Z([3,'onAddCart'])
Z([3,'onMidFilter'])
Z([3,'onMidSearch'])
Z([3,'onShowSkuSwitch'])
Z([[2,'<='],[[2,'/'],[[6],[[7],[3,'pageInfo']],[3,'page']],[[6],[[7],[3,'pageInfo']],[3,'span']]],[1,1]])
Z([[7],[3,'interlude']])
Z([[7],[3,'viewList']])
Z([[7],[3,'listMode']])
Z([[7],[3,'longImgMode']])
Z([[7],[3,'pseudoItem']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'loading']]],[[7],[3,'loaded']]],[[2,'>='],[[6],[[7],[3,'pageInfo']],[3,'page']],[[6],[[7],[3,'pageInfo']],[3,'pageCount']]]],[[7],[3,'list']]],[[6],[[7],[3,'list']],[3,'length']]],[[2,'!'],[[2,'&&'],[[7],[3,'relatedKeys']],[[6],[[7],[3,'relatedKeys']],[3,'length']]]]])
Z([[7],[3,'loading']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'loading']]],[[2,'||'],[[2,'=='],[[2,'%'],[[6],[[7],[3,'pageInfo']],[3,'page']],[[6],[[7],[3,'pageInfo']],[3,'span']]],[1,0]],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'pageInfo']],[3,'page']],[1,1]],[[2,'>='],[[6],[[7],[3,'pageInfo']],[3,'page']],[[6],[[7],[3,'pageInfo']],[3,'pageCount']]]]]])
Z([[6],[[7],[3,'pageInfo']],[3,'bigPageSize']])
Z([3,'onPageChange'])
Z([[6],[[7],[3,'pageInfo']],[3,'page']])
Z([[6],[[7],[3,'pageInfo']],[3,'pageSize']])
Z([[6],[[7],[3,'pageInfo']],[3,'resultCount']])
Z([[6],[[7],[3,'searchError']],[3,'status']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'searchError']],[3,'status']]],[[2,'!'],[[7],[3,'loading']]]],[[7],[3,'loaded']]],[[2,'||'],[[2,'!'],[[7],[3,'list']]],[[2,'!'],[[6],[[7],[3,'list']],[3,'length']]]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'isMedicineSearch']],[[2,'!'],[[6],[[7],[3,'searchError']],[3,'status']]]],[[2,'!'],[[7],[3,'loading']]]],[[7],[3,'loaded']]],[[2,'||'],[[2,'!'],[[7],[3,'list']]],[[2,'!'],[[6],[[7],[3,'list']],[3,'length']]]]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'loading']]],[[7],[3,'relatedKeys']]],[[6],[[7],[3,'relatedKeys']],[3,'length']]])
Z([[6],[[7],[3,'shop']],[3,'visible']])
Z([[6],[[7],[3,'shop']],[3,'list']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'shop']],[3,'loading']]],[[6],[[7],[3,'shop']],[3,'loaded']]],[[2,'>='],[[6],[[7],[3,'shop']],[3,'page']],[[6],[[7],[3,'shop']],[3,'pageCount']]]],[[6],[[7],[3,'shop']],[3,'list']]],[[6],[[6],[[7],[3,'shop']],[3,'list']],[3,'length']]])
Z([[6],[[7],[3,'shop']],[3,'loading']])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'shop']],[3,'loading']]],[[6],[[7],[3,'shop']],[3,'loaded']]],[[2,'||'],[[2,'!'],[[6],[[7],[3,'shop']],[3,'list']]],[[2,'!'],[[6],[[6],[[7],[3,'shop']],[3,'list']],[3,'length']]]]])
Z(z[20])
Z([3,'62'])
Z([3,'search'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'cartInfo']],[3,'canShow']],[[6],[[7],[3,'cartInfo']],[3,'count']]],[[2,'!'],[[6],[[7],[3,'shop']],[3,'visible']]]],[[7],[3,'isSupportNav']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'loaded']],[[2,'||'],[[2,'!'],[[7],[3,'isNewSearch']]],[[2,'!'],[[7],[3,'loading']]]]],[[2,'!'],[[6],[[7],[3,'shop']],[3,'visible']]]],[[7],[3,'isSupportNav']]])
Z([[7],[3,'showBackToTop']])
Z([3,'onHideSkuSwitch'])
Z([[6],[[7],[3,'skuSwitch']],[3,'item']])
Z(z[14])
Z(z[15])
Z([[6],[[7],[3,'skuSwitch']],[3,'similar']])
Z([[6],[[7],[3,'skuSwitch']],[3,'visible']])
Z([[7],[3,'hongbaoEgg']])
Z([3,'onDrawFloatCoupon'])
Z(z[67])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx14_38);return __WXML_GLOBAL__.ops_cached.$gwx14_38
}
function gz$gwx14_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_39)return __WXML_GLOBAL__.ops_cached.$gwx14_39
__WXML_GLOBAL__.ops_cached.$gwx14_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'addressList']],[3,'length']],[1,0]])
Z([[7],[3,'addressList']])
Z([3,'checkAddress'])
Z([3,'item xlist_item'])
Z([[7],[3,'index']])
Z([[2,'!='],[[7],[3,'from']],[1,'my']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'label']],[[2,'!='],[[6],[[7],[3,'item']],[3,'label']],[[6],[[7],[3,'item']],[3,'name']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx14_39);return __WXML_GLOBAL__.ops_cached.$gwx14_39
}
function gz$gwx14_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_40)return __WXML_GLOBAL__.ops_cached.$gwx14_40
__WXML_GLOBAL__.ops_cached.$gwx14_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'brand_header'])
Z([1,false])
Z([[2,'!'],[[6],[[7],[3,'selected']],[3,'length']]])
Z([[2,'>'],[[6],[[7],[3,'selected_text']],[3,'length']],[1,20]])
Z([[2,'=='],[[7],[3,'type']],[1,'brand']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'type']],[1,'brand']],[[2,'=='],[[7],[3,'modType']],[1,0]]])
Z([3,'bindscroll'])
Z([a,[3,'brand_list '],[[2,'?:'],[[2,'=='],[[7],[3,'type']],[1,'brand']],[1,'skin'],[1,'']]])
Z([[7],[3,'top']])
Z([3,'true'])
Z(z[5])
Z([3,'i'])
Z([3,'code'])
Z([[7],[3,'letterList']])
Z([[2,'!='],[[7],[3,'i']],[1,0]])
Z([3,'idx'])
Z([3,'item'])
Z([[7],[3,'list']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'letter']],[[7],[3,'code']]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'type']],[1,'brand']],[[2,'=='],[[7],[3,'modType']],[1,0]]],[[2,'>='],[[6],[[7],[3,'list']],[3,'length']],[1,10]]])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx14_40);return __WXML_GLOBAL__.ops_cached.$gwx14_40
}
function gz$gwx14_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_41)return __WXML_GLOBAL__.ops_cached.$gwx14_41
__WXML_GLOBAL__.ops_cached.$gwx14_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'item'])
Z([[7],[3,'list']])
Z([3,'onTapCate'])
Z([a,[3,'category_item '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'active']],[1,'active'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'sub_item'])
Z([[6],[[7],[3,'item']],[3,'childs']])
Z([[6],[[7],[3,'item']],[3,'active']])
})(__WXML_GLOBAL__.ops_cached.$gwx14_41);return __WXML_GLOBAL__.ops_cached.$gwx14_41
}
function gz$gwx14_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_42)return __WXML_GLOBAL__.ops_cached.$gwx14_42
__WXML_GLOBAL__.ops_cached.$gwx14_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrap'])
Z([[7],[3,'loading']])
Z([[7],[3,'SEARCH_BAR_PTAG']])
Z([[7],[3,'addMark']])
Z([3,'onInputFocus'])
Z([3,'onSearchKeyChange'])
Z([3,'onToSearch'])
Z([[6],[[7],[3,'isFocus']],[3,'status']])
Z([[6],[[7],[3,'keyInfo']],[3,'value']])
Z([3,'搜索该优惠券适用商品'])
Z([3,'cart'])
Z([[7],[3,'venderId']])
Z(z[11])
Z([[7],[3,'FILTER_SORT_PTAG']])
Z([[7],[3,'actived']])
Z([3,'onChangeSort'])
Z([3,'filter-sort'])
Z([[7],[3,'hasFilter']])
Z([[7],[3,'isFilterSortFixed']])
Z(z[8])
Z([[2,'!='],[[7],[3,'_status']],[1,'empty']])
Z([3,'list__wrapper'])
Z([3,'page_num'])
Z([3,'page_list'])
Z([[7],[3,'list']])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'page_list']])
Z([3,'img'])
Z([3,'onTapGoodsItem'])
Z([[12],[[6],[[7],[3,'utils']],[3,'visitStyle']],[[5],[[5],[[6],[[7],[3,'item']],[3,'id']]],[[7],[3,'_last_visited']]]])
Z([[7],[3,'i']])
Z([[7],[3,'page_num']])
Z([[6],[[7],[3,'item']],[3,'seckill']])
Z([3,'goods_item_info'])
Z([3,'ttag'])
Z([[6],[[7],[3,'item']],[3,'titlePrefix']])
Z([3,'src'])
Z([[6],[[6],[[7],[3,'ttag']],[3,'size']],[1,0]])
Z([[6],[[7],[3,'item']],[3,'attrs']])
Z(z[39])
Z([3,'goods_item_price'])
Z([3,'goods_item_price_amount'])
Z([[6],[[7],[3,'item']],[3,'yuYueHiddenPrice']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'yuYue']],[[6],[[6],[[7],[3,'item']],[3,'yuYue']],[1,1]]])
Z([[2,'||'],[[2,'>'],[[2,'*'],[[6],[[6],[[7],[3,'item']],[3,'price']],[1,0]],[1,1]],[1,0]],[[2,'>'],[[2,'*'],[[6],[[6],[[7],[3,'item']],[3,'price']],[1,1]],[1,1]],[1,0]]])
Z([[2,'<'],[[2,'-'],[[2,'*'],[[6],[[6],[[7],[3,'item']],[3,'price']],[1,0]],[1,1]],[1,10000]],[1,0]])
Z([3,'goods_item_price_mark'])
Z([[6],[[7],[3,'item']],[3,'isPingou']])
Z([3,'mark'])
Z([[6],[[7],[3,'item']],[3,'priceAffix']])
Z([3,'name'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'mark']],[3,'type']],[1,'image']],[[2,'>'],[[6],[[6],[[7],[3,'mark']],[3,'size']],[1,0]],[1,0]]])
Z([[12],[[6],[[7],[3,'utils']],[3,'getPriceAffixType']],[[5],[[5],[[6],[[7],[3,'mark']],[3,'name']]],[[4],[[5],[[5],[[5],[[5],[1,'专属价']],[1,'山姆价']],[1,'学生价']],[1,'PLUS价']]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'mark']],[3,'size']],[1,0]],[1,0]])
Z(z[26])
Z([[6],[[7],[3,'mark']],[3,'items']])
Z(z[26])
Z([[12],[[6],[[7],[3,'utils']],[3,'getPriceAffixType']],[[5],[[5],[[6],[[7],[3,'mark']],[3,'name']]],[[4],[[5],[[5],[1,'券促销']],[1,'满减详细']]]]])
Z([3,'ctag'])
Z([[6],[[7],[3,'item']],[3,'commentPrefix']])
Z(z[37])
Z([[2,'>'],[[6],[[6],[[7],[3,'ctag']],[3,'size']],[1,0]],[1,0]])
Z([[6],[[7],[3,'item']],[3,'showCart']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'_currentScreen']],[[7],[3,'max_screen']]],[[7],[3,'isFinished']]])
Z([[12],[[6],[[7],[3,'utils']],[3,'isDisplayPageMod']],[[5],[[5],[[5],[[5],[[5],[[5],[[7],[3,'list']]],[[7],[3,'max_page']]],[[7],[3,'_currentScreen']]],[[7],[3,'MAX_PAGE_SCREEN']]],[[7],[3,'_isDisplayPage']]],[[7],[3,'max_screen']]]])
Z([[7],[3,'showBack']])
Z([[2,'!'],[[7],[3,'expired']]])
Z([[7],[3,'COUPON_COUNT_PTAG']])
Z([[7],[3,'batch']])
Z([3,'onInitCart'])
Z([[7],[3,'discountInfo']])
Z([[7],[3,'from']])
Z([[7],[3,'isInitCart']])
Z([[7],[3,'isZheKou']])
Z([[7],[3,'kind']])
Z(z[11])
Z([[7],[3,'zheKouInfo']])
Z([[7],[3,'zheKouObj']])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx14_42);return __WXML_GLOBAL__.ops_cached.$gwx14_42
}
function gz$gwx14_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_43)return __WXML_GLOBAL__.ops_cached.$gwx14_43
__WXML_GLOBAL__.ops_cached.$gwx14_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[10],[[7],[3,'modal']]])
Z([3,'modal'])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
Z([[7],[3,'loading']])
Z([[2,'!'],[[7],[3,'loading']]])
Z([3,'exchange'])
Z([3,'onScrollBottom'])
Z([3,'exchange__wrap'])
Z([3,'true'])
Z([3,'110'])
Z([3,'false'])
Z(z[9])
Z([[7],[3,'itemList']])
Z([3,'wareid'])
Z([3,'checkGoods'])
Z([3,'exchange__list_item'])
Z([[6],[[7],[3,'item']],[3,'checked']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'wareid']])
Z([[6],[[7],[3,'item']],[3,'stock']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'stock']]])
Z([3,'exchange__list_item_info'])
Z(z[20])
Z([3,'exchange__list_item_price'])
Z([[6],[[6],[[7],[3,'item']],[3,'eredisprice']],[1,1]])
Z([[6],[[7],[3,'item']],[3,'showDredisprice']])
Z([[7],[3,'showLayer']])
Z([[7],[3,'checkGoodsList']])
Z(z[19])
Z([3,'checkGoodsWithList'])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[19])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx14_43);return __WXML_GLOBAL__.ops_cached.$gwx14_43
}
function gz$gwx14_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_44)return __WXML_GLOBAL__.ops_cached.$gwx14_44
__WXML_GLOBAL__.ops_cached.$gwx14_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-box'])
Z([3,'xlist'])
Z([3,'onFilterPanel'])
Z([[7],[3,'filters']])
Z([[7],[3,'service']])
Z([[7],[3,'source']])
Z([3,'onInputPrice'])
Z([3,'onTapInterval'])
Z([[7],[3,'priceIntervals']])
Z([[7],[3,'price']])
Z(z[5])
Z([3,'idx'])
Z([3,'item'])
Z([[7],[3,'extendFields']])
Z([[7],[3,'idx']])
Z([[2,'||'],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'valueitem']],[3,'length']],[1,0]],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'selected']],[3,'length']],[1,0]]])
Z([3,'xlist_group--items'])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'selected']],[3,'length']],[1,2]])
Z([3,'j'])
Z([3,'jitem'])
Z([[6],[[7],[3,'item']],[3,'valueitem']])
Z([[7],[3,'j']])
Z([[2,'<'],[[7],[3,'j']],[1,9]])
Z([3,'onCheckValueItem'])
Z([a,[3,'xlist_items__info line1 '],[[12],[[7],[3,'getExtendFiledsLastStyle']],[[5],[[5],[[7],[3,'j']]],[[6],[[7],[3,'item']],[3,'valueitem']]]],[3,' '],[[12],[[7],[3,'getSelectedStyle']],[[5],[[5],[[5],[[5],[[6],[[7],[3,'item']],[3,'selected']]],[[7],[3,'jitem']]],[[7],[3,'j']]],[[6],[[6],[[7],[3,'item']],[3,'valueitem']],[3,'length']]]]])
Z(z[14])
Z(z[21])
Z([[2,'<'],[[7],[3,'j']],[1,8]])
Z([[2,'=='],[[7],[3,'j']],[1,8]])
Z([3,'onConfirm'])
Z([3,'btn_confirm'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'type']],[1,'search']],[[2,'!'],[[7],[3,'totalError']]]])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx14_44);return __WXML_GLOBAL__.ops_cached.$gwx14_44
}
function gz$gwx14_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx14_45)return __WXML_GLOBAL__.ops_cached.$gwx14_45
__WXML_GLOBAL__.ops_cached.$gwx14_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrap'])
Z([[7],[3,'loading']])
Z([[7],[3,'searchBarPtagMap']])
Z([[7],[3,'addMark']])
Z([3,'onInputFocus'])
Z([3,'onSearchKeyChange'])
Z([3,'onToSearch'])
Z([[6],[[7],[3,'isFocus']],[3,'status']])
Z([[6],[[7],[3,'keyInfo']],[3,'value']])
Z([3,'搜索该活动适用商品'])
Z([3,'cart'])
Z([[7],[3,'filterSortPtagMap']])
Z([[7],[3,'actived']])
Z([3,'onSortEvent'])
Z([3,'filter-sort'])
Z([[7],[3,'hasFilter']])
Z([[7],[3,'isfilterSortFixed']])
Z(z[8])
Z([[2,'!='],[[7],[3,'_status']],[1,'empty']])
Z([3,'list__wrapper'])
Z([[2,'?:'],[[7],[3,'isHiddenSubtotal']],[1,'padding-bottom: 0'],[1,'padding-bottom: 42px']])
Z([3,'page_num'])
Z([3,'page_list'])
Z([[7],[3,'list']])
Z([[7],[3,'page_list']])
Z([3,'i'])
Z([3,'item'])
Z(z[24])
Z([3,'img'])
Z([3,'onTapGoodsItem'])
Z([[12],[[6],[[7],[3,'utils']],[3,'visitStyle']],[[5],[[5],[[6],[[7],[3,'item']],[3,'id']]],[[7],[3,'_last_visited']]]])
Z([[7],[3,'i']])
Z([[6],[[7],[3,'item']],[3,'isjx']])
Z([[7],[3,'page_num']])
Z([[6],[[7],[3,'item']],[3,'isRecipe']])
Z([[6],[[7],[3,'item']],[3,'isSign']])
Z([[6],[[7],[3,'item']],[3,'yuYue']])
Z([[6],[[7],[3,'item']],[3,'isVideo']])
Z([3,'goods_item_info'])
Z([3,'ttag'])
Z([[6],[[7],[3,'item']],[3,'titlePrefix']])
Z([3,'src'])
Z([[6],[[6],[[7],[3,'ttag']],[3,'size']],[1,0]])
Z([[6],[[7],[3,'item']],[3,'attrs']])
Z(z[43])
Z([3,'goods_item_price'])
Z([3,'goods_item_price_amount'])
Z([[6],[[7],[3,'item']],[3,'yuYueHiddenPrice']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'yuYue']],[[6],[[6],[[7],[3,'item']],[3,'yuYue']],[1,1]]])
Z([[2,'||'],[[2,'>'],[[2,'*'],[[6],[[6],[[7],[3,'item']],[3,'price']],[1,0]],[1,1]],[1,0]],[[2,'>'],[[2,'*'],[[6],[[6],[[7],[3,'item']],[3,'price']],[1,1]],[1,1]],[1,0]]])
Z([[2,'<'],[[2,'-'],[[2,'*'],[[6],[[6],[[7],[3,'item']],[3,'price']],[1,0]],[1,1]],[1,10000]],[1,0]])
Z([3,'goods_item_price_mark'])
Z([[6],[[7],[3,'item']],[3,'isPingou']])
Z([3,'mark'])
Z([[6],[[7],[3,'item']],[3,'priceAffix']])
Z([3,'name'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'mark']],[3,'type']],[1,'image']],[[2,'>'],[[6],[[6],[[7],[3,'mark']],[3,'size']],[1,0]],[1,0]]])
Z([[12],[[6],[[7],[3,'utils']],[3,'getPriceAffixType']],[[5],[[5],[[6],[[7],[3,'mark']],[3,'name']]],[[4],[[5],[[5],[[5],[[5],[1,'专属价']],[1,'山姆价']],[1,'学生价']],[1,'PLUS价']]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'mark']],[3,'size']],[1,0]],[1,0]])
Z(z[26])
Z([[6],[[7],[3,'mark']],[3,'items']])
Z(z[26])
Z([[12],[[6],[[7],[3,'utils']],[3,'getPriceAffixType']],[[5],[[5],[[6],[[7],[3,'mark']],[3,'name']]],[[4],[[5],[[5],[1,'券促销']],[1,'满减详细']]]]])
Z([3,'ctag'])
Z([[6],[[7],[3,'item']],[3,'commentPrefix']])
Z(z[41])
Z([[2,'>'],[[6],[[6],[[7],[3,'ctag']],[3,'size']],[1,0]],[1,0]])
Z([[6],[[7],[3,'item']],[3,'showCart']])
Z([3,'list__loading'])
Z([[2,'=='],[[7],[3,'_status']],[1,'error']])
Z([[12],[[6],[[7],[3,'utils']],[3,'isDisplayLoad']],[[5],[[5],[[5],[[5],[[7],[3,'list']]],[[7],[3,'max_page']]],[[7],[3,'_loadPage']]],[[7],[3,'_max_page_screen']]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'_loadPage']],[[7],[3,'max_screen']]],[[2,'>='],[[2,'+'],[[2,'*'],[[2,'-'],[[7],[3,'_loadPage']],[1,1]],[[7],[3,'_max_page_screen']]],[[6],[[7],[3,'list']],[3,'length']]],[[7],[3,'max_page']]]])
Z([[12],[[6],[[7],[3,'utils']],[3,'isDisplayPageMod']],[[5],[[5],[[5],[[5],[[5],[[5],[[7],[3,'list']]],[[7],[3,'max_page']]],[[7],[3,'_loadPage']]],[[7],[3,'_max_page_screen']]],[[7],[3,'_isDisplayPage']]],[[7],[3,'max_screen']]]])
Z([[7],[3,'showBack']])
Z([1,false])
Z([3,'updateHiddenSubtotal'])
Z([[7],[3,'cartTotal']])
Z([[7],[3,'isHiddenSubtotal']])
Z([[7],[3,'prevParams']])
Z([[7],[3,'promoType']])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx14_45);return __WXML_GLOBAL__.ops_cached.$gwx14_45
}
__WXML_GLOBAL__.ops_set.$gwx14=z;
__WXML_GLOBAL__.ops_init.$gwx14=true;
var nv_require=function(){var nnm={"m_./pages/search/components_old/filter-sort/index.wxml:getFilterImage":np_0,"m_./pages/search/components_old/gift-panel/index.wxml:getAdditionalItemStyle":np_1,"m_./pages/search/components_old/gift-panel/index.wxml:getTestArr":np_2,"m_./pages/search/subPackages/filter/index.wxml:getExtendFiledsLastStyle":np_5,"m_./pages/search/subPackages/filter/index.wxml:getSelectedStyle":np_6,"m_./pages/search/subPackages/filter/index.wxml:getTotal":np_4,"p_./pages/search/list_old/templates/utils.wxs":np_3,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/search/components_old/filter-sort/index.wxml']={};
f_['./pages/search/components_old/filter-sort/index.wxml']['getFilterImage'] =nv_require("m_./pages/search/components_old/filter-sort/index.wxml:getFilterImage");
function np_0(){var nv_module={nv_exports:{}};nv_module.nv_exports = (function (nv_isChecked){var nv_src1 = "https://img11.360buyimg.com/jdphoto/s26x26_jfs/t17671/197/2458412976/190/fc0a4abe/5afbd2daN39c16474.png";var nv_src2 = "https://img11.360buyimg.com/jdphoto/s26x26_jfs/t20707/21/61490426/190/ec759fe4/5afbd2daNa1e03acc.png";return(nv_isChecked ? nv_src1:nv_src2)});return nv_module.nv_exports;}

f_['./pages/search/components_old/gift-panel/index.wxml']={};
f_['./pages/search/components_old/gift-panel/index.wxml']['getAdditionalItemStyle'] =nv_require("m_./pages/search/components_old/gift-panel/index.wxml:getAdditionalItemStyle");
function np_1(){var nv_module={nv_exports:{}};nv_module.nv_exports = (function (nv_limited,nv_soldOut,nv_isAchieved){return((nv_limited || nv_soldOut || nv_isAchieved == 0) ? 'forbid':'')});return nv_module.nv_exports;}
f_['./pages/search/components_old/gift-panel/index.wxml']['getTestArr'] =nv_require("m_./pages/search/components_old/gift-panel/index.wxml:getTestArr");
function np_2(){var nv_module={nv_exports:{}};nv_module.nv_exports = (function (nv_manGiftSkus){return(nv_manGiftSkus)});return nv_module.nv_exports;}

f_['./pages/search/list_old/templates/utils.wxs'] = nv_require("p_./pages/search/list_old/templates/utils.wxs");
function np_3(){var nv_module={nv_exports:{}};var nv_getComments = (function (nv_comments,nv_commentStr){if (nv_commentStr && nv_commentStr != 0)return(nv_commentStr + '条评价');;nv_comments = nv_comments || 0;if (nv_comments <= 0){return('暂无评价')} else {var nv_str;nv_str = nv_comments >= 10000 ? Math.nv_floor(nv_comments / 10000) + '万条评价':nv_comments + '条评价';return(nv_str)}});var nv_getPriceAffixStyle = (function (nv_name){var nv_objSty = ({'nv_学生价':'stp','nv_专属价':'tpk','nv_山姆价':'sam','nv_PLUS价':'plus','nv_券促销':'coupon','nv_满减详细':'discount','nv_新人价':'new-user','nv_商品限时限量抢购':'sku-limit',});return(nv_objSty[((nt_0=(nv_name),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))])});var nv_getPriceAffixType = (function (nv_name,nv_tagArr){var nv_flag = false;var nv_len = nv_tagArr.nv_length;for(var nv_i = 0;nv_i < nv_len;nv_i++){if (nv_tagArr[((nt_1=(nv_i),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))] == nv_name){nv_flag = true;break}};return(nv_flag)});var nv_isDisplaySimilarStyle = (function (nv_isDisplaySimilar){return(nv_isDisplaySimilar ? 'goods_item_similarbtn on':'goods_item_similarbtn')});var nv_isStock = (function (nv_stock,nv_type,nv_beltInfoShow,nv_ygInfoShow){return(nv_stock && nv_type != 'ad' && !nv_beltInfoShow && !nv_ygInfoShow)});var nv_visitStyle = (function (nv_id,nv__last_visited,nv_type,nv_loadPage,nv_page,nv_num){var nv_adCls = 'goods_ad_' + nv_loadPage + '_' + nv_page + '_' + nv_num;var nv_cls = nv_id == nv__last_visited ? 'goods_item visited':'goods_item';if (nv_type === 'ad')nv_cls += ' ' + nv_adCls;;return(nv_cls)});var nv_visitColumnStyle = (function (nv_isFullItem,nv_id,nv__last_visited,nv_type,nv_loadPage,nv_page,nv_num){var nv_adCls = 'goods_ad_' + nv_loadPage + '_' + nv_page + '_' + nv_num;var nv_cls = nv_id == nv__last_visited ? 'goods_column_item visited':'goods_column_item';if (nv_type === 'ad')nv_cls += ' ' + nv_adCls;;return(nv_isFullItem ? 'fulled goods_item':nv_cls)});var nv_isDisplayPageMod = (function (nv_list,nv_max_page,nv__loadPage,nv__max_page_screen,nv__isDisplayPage,nv_max_screen){if (nv__loadPage < nv_max_screen){if (nv__isDisplayPage && nv_list.nv_length == nv__max_page_screen)return(true);} else {if (nv__isDisplayPage && nv_max_page > nv__max_page_screen && nv_max_page == (nv__loadPage - 1) * nv__max_page_screen + nv_list.nv_length)return(true);}});var nv_isDisplayLoad = (function (nv_list,nv_max_page,nv__loadPage,nv__max_page_screen){nv_list = nv_list || [];return(!(nv_list.nv_length == nv__max_page_screen || nv_max_page == (nv__loadPage - 1) * nv__max_page_screen + nv_list.nv_length))});var nv_getInitPrice = (function (nv_price){if (nv_price < 0)nv_price = 0;;return((nv_price - 10000) >= 0 ? Math.nv_floor(nv_price):nv_price)});nv_module.nv_exports = ({nv_getComments:nv_getComments,nv_getPriceAffixStyle:nv_getPriceAffixStyle,nv_getPriceAffixType:nv_getPriceAffixType,nv_isDisplaySimilarStyle:nv_isDisplaySimilarStyle,nv_isStock:nv_isStock,nv_visitStyle:nv_visitStyle,nv_isDisplayPageMod:nv_isDisplayPageMod,nv_isDisplayLoad:nv_isDisplayLoad,nv_getInitPrice:nv_getInitPrice,nv_visitColumnStyle:nv_visitColumnStyle,});return nv_module.nv_exports;}

f_['./pages/search/subPackages/coupon/coupon.wxml']={};
f_['./pages/search/subPackages/coupon/coupon.wxml']['utils'] =f_['./pages/search/list_old/templates/utils.wxs'] || nv_require("p_./pages/search/list_old/templates/utils.wxs");
f_['./pages/search/subPackages/coupon/coupon.wxml']['utils']();

f_['./pages/search/subPackages/filter/index.wxml']={};
f_['./pages/search/subPackages/filter/index.wxml']['getTotal'] =nv_require("m_./pages/search/subPackages/filter/index.wxml:getTotal");
function np_4(){var nv_module={nv_exports:{}};nv_module.nv_exports = (function (nv_total){if (!nv_total){return(0)};var nv_totalStr = nv_total.nv_toString();var nv_length = nv_totalStr.nv_length;if (nv_length == 1){return(nv_total)};if (nv_length == 2 || nv_length == 3){return(nv_totalStr[(0)] * Math.nv_pow(10,nv_length - 1) + '+')};if (nv_length == 4){return((nv_totalStr[(0)] + '' + nv_totalStr[(1)]) * Math.nv_pow(10,2) + '+')};if (nv_length == 5){return(nv_totalStr[(0)] + '.' + nv_totalStr[(1)] + '万+')};return(Math.nv_floor(nv_total / 10000) + '万+')});return nv_module.nv_exports;}
f_['./pages/search/subPackages/filter/index.wxml']['getExtendFiledsLastStyle'] =nv_require("m_./pages/search/subPackages/filter/index.wxml:getExtendFiledsLastStyle");
function np_5(){var nv_module={nv_exports:{}};nv_module.nv_exports = (function (nv_idx,nv_valueitem){if (nv_valueitem.nv_length - 1 == nv_idx && nv_idx == 8){return('')} else if (nv_idx == 8){return('arrow')} else {return('')}});return nv_module.nv_exports;}
f_['./pages/search/subPackages/filter/index.wxml']['getSelectedStyle'] =nv_require("m_./pages/search/subPackages/filter/index.wxml:getSelectedStyle");
function np_6(){var nv_module={nv_exports:{}};nv_module.nv_exports = (function (nv_selectedArr,nv_jitem,nv_idx,nv_sourceCount){if (nv_selectedArr.nv_length == 0)return('');;var nv_active = false;var nv_len = nv_selectedArr.nv_length;for(var nv_i = 0;nv_i < nv_len;nv_i++){if (nv_selectedArr[((nt_0=(nv_i),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_valuename == nv_jitem.nv_valuename){nv_active = true}};if (nv_active && nv_idx == 8 && nv_sourceCount == 9)return('selected');;return(nv_active && nv_idx != 8 ? 'selected':'')});return nv_module.nv_exports;}

f_['./pages/search/subPackages/sales/sales.wxml']={};
f_['./pages/search/subPackages/sales/sales.wxml']['utils'] =f_['./pages/search/list_old/templates/utils.wxs'] || nv_require("p_./pages/search/list_old/templates/utils.wxs");
f_['./pages/search/subPackages/sales/sales.wxml']['utils']();

var x=['./pages/search/components/coupon-float/index.wxml','./pages/search/components/filter-act/index.wxml','./pages/search/components/filter-bar/index.wxml','./pages/search/components/filter-panel/index.wxml','./pages/search/components/goods-list/index.wxml','./pages/search/components/hongbao-egg/index.wxml','./pages/search/components/item-mcoss/index.wxml','./pages/search/components/mid-adshop/index.wxml','./pages/search/components/mid-banner/index.wxml','./pages/search/components/mid-coupon/index.wxml','./pages/search/components/mid-tags/index.wxml','./pages/search/components/modal/index.wxml','./pages/search/components/pagination/index.wxml','./pages/search/components/search-bar/index.wxml','./pages/search/components/shop-list/index.wxml','./pages/search/components/sku-switch/index.wxml','./pages/search/components/smart-box/index.wxml','./pages/search/components/smart-list/index.wxml','./pages/search/components/top-adshop/index.wxml','./pages/search/components/top-banner/index.wxml','./pages/search/components/top-car/index.wxml','./pages/search/components/top-category/index.wxml','./pages/search/components/top-coupon/index.wxml','./pages/search/components/top-notice/index.wxml','./pages/search/components/top-portal/index.wxml','./pages/search/components/top-shop/index.wxml','./shop.tpl.wxml','./pages/search/components/top-shop/shop.tpl.wxml','./pages/search/components/top-writer/index.wxml','./pages/search/components_old/cart-subtotal/index.wxml','./pages/search/components_old/exhibition/index.wxml','./template/shop.wxml','./pages/search/components_old/exhibition/template/shop.wxml','./pages/search/components_old/filter-panel/index.wxml','./pages/search/components_old/filter-price/index.wxml','./pages/search/components_old/filter-sort/index.wxml','./pages/search/components_old/gift-panel/index.wxml','../../../../common/toast/toast.wxml','./pages/search/components_old/good-count/index.wxml','./pages/search/components_old/search-bar/index.wxml','./pages/search/list/list.wxml','./pages/search/subPackages/address/address.wxml','./pages/search/subPackages/brand/brand.wxml','/common/toast/toast.wxml','./pages/search/subPackages/category/category.wxml','./pages/search/subPackages/coupon/coupon.wxml','./pages/search/subPackages/exchange/index.wxml','/common/modal/modal.wxml','./pages/search/subPackages/filter/index.wxml','./pages/search/subPackages/sales/sales.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx14_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx14_2()
var hG=_v()
_(r,hG)
if(_oz(z,0,e,s,gg)){hG.wxVkey=1
}
hG.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx14_3()
var cI=_n('view')
_rz(z,cI,'style',0,e,s,gg)
var lK=_n('view')
_rz(z,lK,'class',1,e,s,gg)
var tM=_n('slot')
_(lK,tM)
var aL=_v()
_(lK,aL)
if(_oz(z,2,e,s,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
_(cI,lK)
var oJ=_v()
_(cI,oJ)
if(_oz(z,3,e,s,gg)){oJ.wxVkey=1
var eN=_mz(z,'view',['bindtap',4,'class',1,'style',2],[],e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,7,e,s,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
_(oJ,eN)
}
oJ.wxXCkey=1
_(r,cI)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx14_4()
var xQ=_v()
_(r,xQ)
if(_oz(z,0,e,s,gg)){xQ.wxVkey=1
var oR=_n('view')
_rz(z,oR,'class',1,e,s,gg)
var hU=_v()
_(oR,hU)
var oV=function(oX,cW,lY,gg){
var t1=_n('view')
_rz(z,t1,'class',4,oX,cW,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,5,oX,cW,gg)){e2.wxVkey=1
}
var b3=_v()
_(t1,b3)
if(_oz(z,6,oX,cW,gg)){b3.wxVkey=1
}
e2.wxXCkey=1
b3.wxXCkey=1
_(lY,t1)
return lY
}
hU.wxXCkey=2
_2z(z,2,oV,e,s,gg,hU,'item','index','title')
var fS=_v()
_(oR,fS)
if(_oz(z,7,e,s,gg)){fS.wxVkey=1
var o4=_n('view')
_rz(z,o4,'class',8,e,s,gg)
var x5=_v()
_(o4,x5)
if(_oz(z,9,e,s,gg)){x5.wxVkey=1
}
var o6=_v()
_(o4,o6)
if(_oz(z,10,e,s,gg)){o6.wxVkey=1
var f7=_v()
_(o6,f7)
if(_oz(z,11,e,s,gg)){f7.wxVkey=1
}
var c8=_v()
_(o6,c8)
if(_oz(z,12,e,s,gg)){c8.wxVkey=1
}
f7.wxXCkey=1
c8.wxXCkey=1
}
var h9=_mz(z,'scroll-view',['scrollY',-1,'catchscroll',13,'class',1,'scrollTop',2],[],e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,16,e,s,gg)){o0.wxVkey=1
var cAB=_v()
_(o0,cAB)
var oBB=function(aDB,lCB,tEB,gg){
var bGB=_v()
_(tEB,bGB)
if(_oz(z,19,aDB,lCB,gg)){bGB.wxVkey=1
}
bGB.wxXCkey=1
return tEB
}
cAB.wxXCkey=2
_2z(z,17,oBB,e,s,gg,cAB,'item','index','id')
}
else if(_oz(z,20,e,s,gg)){o0.wxVkey=2
}
else{o0.wxVkey=3
}
o0.wxXCkey=1
_(o4,h9)
x5.wxXCkey=1
o6.wxXCkey=1
_(fS,o4)
}
var oHB=_n('view')
_rz(z,oHB,'class',21,e,s,gg)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,22,e,s,gg)){xIB.wxVkey=1
}
else{xIB.wxVkey=2
var oJB=_v()
_(xIB,oJB)
if(_oz(z,23,e,s,gg)){oJB.wxVkey=1
}
oJB.wxXCkey=1
}
xIB.wxXCkey=1
_(oR,oHB)
var cT=_v()
_(oR,cT)
if(_oz(z,24,e,s,gg)){cT.wxVkey=1
var fKB=_mz(z,'address-layer',['isDIYLayout',-1,'loadAddressList',-1,'adid',25,'areaid',1,'bind:closeAddress',2,'showAddressLayerFlag',3,'showBack',4,'showClose',5,'showOverseaTabBar',6],[],e,s,gg)
_(cT,fKB)
}
fS.wxXCkey=1
cT.wxXCkey=1
cT.wxXCkey=3
_(xQ,oR)
}
xQ.wxXCkey=1
xQ.wxXCkey=3
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx14_5()
var hMB=_v()
_(r,hMB)
var oNB=function(oPB,cOB,lQB,gg){
var tSB=_v()
_(lQB,tSB)
if(_oz(z,3,oPB,cOB,gg)){tSB.wxVkey=1
var bUB=_mz(z,'item-mcoss',['item',4,'listMode',1,'longImgMode',2],[],oPB,cOB,gg)
_(tSB,bUB)
}
else{tSB.wxVkey=2
var oVB=_mz(z,'view',['bindtap',7,'class',1,'data-id',2,'id',3],[],oPB,cOB,gg)
var xWB=_v()
_(oVB,xWB)
var oXB=function(cZB,fYB,h1B,gg){
var c3B=_v()
_(h1B,c3B)
if(_oz(z,14,cZB,fYB,gg)){c3B.wxVkey=1
}
else if(_oz(z,15,cZB,fYB,gg)){c3B.wxVkey=2
}
else if(_oz(z,16,cZB,fYB,gg)){c3B.wxVkey=3
var o4B=_v()
_(c3B,o4B)
if(_oz(z,17,cZB,fYB,gg)){o4B.wxVkey=1
}
o4B.wxXCkey=1
}
c3B.wxXCkey=1
return h1B
}
xWB.wxXCkey=2
_2z(z,12,oXB,oPB,cOB,gg,xWB,'tag','index','name')
var l5B=_n('view')
_rz(z,l5B,'class',18,oPB,cOB,gg)
var oBC=_v()
_(l5B,oBC)
var fCC=function(hEC,cDC,oFC,gg){
var oHC=_v()
_(oFC,oHC)
if(_oz(z,22,hEC,cDC,gg)){oHC.wxVkey=1
}
oHC.wxXCkey=1
return oFC
}
oBC.wxXCkey=2
_2z(z,20,fCC,oPB,cOB,gg,oBC,'tag','index','name')
var a6B=_v()
_(l5B,a6B)
if(_oz(z,23,oPB,cOB,gg)){a6B.wxVkey=1
}
var t7B=_v()
_(l5B,t7B)
if(_oz(z,24,oPB,cOB,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(l5B,e8B)
if(_oz(z,25,oPB,cOB,gg)){e8B.wxVkey=1
var lIC=_v()
_(e8B,lIC)
if(_oz(z,26,oPB,cOB,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(e8B,aJC)
if(_oz(z,27,oPB,cOB,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(e8B,tKC)
if(_oz(z,28,oPB,cOB,gg)){tKC.wxVkey=1
}
lIC.wxXCkey=1
aJC.wxXCkey=1
tKC.wxXCkey=1
}
var eLC=_n('view')
_rz(z,eLC,'class',29,oPB,cOB,gg)
var bMC=_n('view')
_rz(z,bMC,'class',30,oPB,cOB,gg)
var oNC=_v()
_(bMC,oNC)
if(_oz(z,31,oPB,cOB,gg)){oNC.wxVkey=1
}
else if(_oz(z,32,oPB,cOB,gg)){oNC.wxVkey=2
}
else if(_oz(z,33,oPB,cOB,gg)){oNC.wxVkey=3
var xOC=_v()
_(oNC,xOC)
if(_oz(z,34,oPB,cOB,gg)){xOC.wxVkey=1
}
var oPC=_v()
_(oNC,oPC)
if(_oz(z,35,oPB,cOB,gg)){oPC.wxVkey=1
}
xOC.wxXCkey=1
oPC.wxXCkey=1
}
else if(_oz(z,36,oPB,cOB,gg)){oNC.wxVkey=4
}
else{oNC.wxVkey=5
}
oNC.wxXCkey=1
_(eLC,bMC)
var fQC=_v()
_(eLC,fQC)
var cRC=function(oTC,hSC,cUC,gg){
var lWC=_v()
_(cUC,lWC)
if(_oz(z,40,oTC,hSC,gg)){lWC.wxVkey=1
}
var aXC=_v()
_(cUC,aXC)
if(_oz(z,41,oTC,hSC,gg)){aXC.wxVkey=1
}
var tYC=_v()
_(cUC,tYC)
if(_oz(z,42,oTC,hSC,gg)){tYC.wxVkey=1
}
var eZC=_v()
_(cUC,eZC)
if(_oz(z,43,oTC,hSC,gg)){eZC.wxVkey=1
}
lWC.wxXCkey=1
aXC.wxXCkey=1
tYC.wxXCkey=1
eZC.wxXCkey=1
return cUC
}
fQC.wxXCkey=2
_2z(z,38,cRC,oPB,cOB,gg,fQC,'tag','index','name')
_(l5B,eLC)
var b1C=_v()
_(l5B,b1C)
var o2C=function(o4C,x3C,f5C,gg){
var h7C=_v()
_(f5C,h7C)
if(_oz(z,47,o4C,x3C,gg)){h7C.wxVkey=1
}
var o8C=_v()
_(f5C,o8C)
if(_oz(z,48,o4C,x3C,gg)){o8C.wxVkey=1
}
h7C.wxXCkey=1
o8C.wxXCkey=1
return f5C
}
b1C.wxXCkey=2
_2z(z,45,o2C,oPB,cOB,gg,b1C,'tag','index','name')
var b9B=_v()
_(l5B,b9B)
if(_oz(z,49,oPB,cOB,gg)){b9B.wxVkey=1
}
var o0B=_v()
_(l5B,o0B)
if(_oz(z,50,oPB,cOB,gg)){o0B.wxVkey=1
}
var c9C=_n('view')
_rz(z,c9C,'class',51,oPB,cOB,gg)
var o0C=_v()
_(c9C,o0C)
if(_oz(z,52,oPB,cOB,gg)){o0C.wxVkey=1
}
else{o0C.wxVkey=2
var lAD=_v()
_(o0C,lAD)
var aBD=function(eDD,tCD,bED,gg){
var xGD=_v()
_(bED,xGD)
if(_oz(z,56,eDD,tCD,gg)){xGD.wxVkey=1
}
xGD.wxXCkey=1
return bED
}
lAD.wxXCkey=2
_2z(z,54,aBD,oPB,cOB,gg,lAD,'tag','index','name')
}
o0C.wxXCkey=1
_(l5B,c9C)
var xAC=_v()
_(l5B,xAC)
if(_oz(z,57,oPB,cOB,gg)){xAC.wxVkey=1
}
a6B.wxXCkey=1
t7B.wxXCkey=1
e8B.wxXCkey=1
b9B.wxXCkey=1
o0B.wxXCkey=1
xAC.wxXCkey=1
_(oVB,l5B)
_(tSB,oVB)
}
var eTB=_v()
_(lQB,eTB)
if(_oz(z,58,oPB,cOB,gg)){eTB.wxVkey=1
var oHD=_v()
_(eTB,oHD)
var fID=function(hKD,cJD,oLD,gg){
var oND=_v()
_(oLD,oND)
if(_oz(z,61,hKD,cJD,gg)){oND.wxVkey=1
var lOD=_mz(z,'mid-tags',['bind:mid-filter',62,'bind:mid-search',1,'floor',2,'listMode',3],[],hKD,cJD,gg)
_(oND,lOD)
}
else if(_oz(z,66,hKD,cJD,gg)){oND.wxVkey=2
var aPD=_mz(z,'mid-banner',['banner',67,'listMode',1],[],hKD,cJD,gg)
_(oND,aPD)
}
else if(_oz(z,69,hKD,cJD,gg)){oND.wxVkey=3
var tQD=_mz(z,'mid-coupon',['coupon',70,'listMode',1],[],hKD,cJD,gg)
_(oND,tQD)
}
else if(_oz(z,72,hKD,cJD,gg)){oND.wxVkey=4
var eRD=_mz(z,'mid-adshop',['adshop',73,'listMode',1],[],hKD,cJD,gg)
_(oND,eRD)
}
oND.wxXCkey=1
oND.wxXCkey=3
oND.wxXCkey=3
oND.wxXCkey=3
oND.wxXCkey=3
return oLD
}
oHD.wxXCkey=4
_2z(z,59,fID,oPB,cOB,gg,oHD,'item','index','iType')
}
tSB.wxXCkey=1
tSB.wxXCkey=3
eTB.wxXCkey=1
eTB.wxXCkey=3
return lQB
}
hMB.wxXCkey=4
_2z(z,1,oNB,e,s,gg,hMB,'item','order','')
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx14_6()
var oTD=_v()
_(r,oTD)
if(_oz(z,0,e,s,gg)){oTD.wxVkey=1
var xUD=_v()
_(oTD,xUD)
if(_oz(z,1,e,s,gg)){xUD.wxVkey=1
var oVD=_v()
_(xUD,oVD)
if(_oz(z,2,e,s,gg)){oVD.wxVkey=1
}
oVD.wxXCkey=1
}
xUD.wxXCkey=1
}
oTD.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx14_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx14_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx14_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx14_10()
var c1D=_v()
_(r,c1D)
var o2D=function(a4D,l3D,t5D,gg){
var b7D=_mz(z,'view',['bindtap',2,'class',1,'data-index',2],[],a4D,l3D,gg)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,5,a4D,l3D,gg)){o8D.wxVkey=1
}
o8D.wxXCkey=1
_(t5D,b7D)
return t5D
}
c1D.wxXCkey=2
_2z(z,0,o2D,e,s,gg,c1D,'item','index','activeId')
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx14_11()
var o0D=_v()
_(r,o0D)
if(_oz(z,0,e,s,gg)){o0D.wxVkey=1
}
o0D.wxXCkey=1
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx14_12()
var cBE=_n('view')
var hCE=_v()
_(cBE,hCE)
if(_oz(z,0,e,s,gg)){hCE.wxVkey=1
var cEE=_v()
_(hCE,cEE)
if(_oz(z,1,e,s,gg)){cEE.wxVkey=1
}
cEE.wxXCkey=1
}
var oDE=_v()
_(cBE,oDE)
if(_oz(z,2,e,s,gg)){oDE.wxVkey=1
}
hCE.wxXCkey=1
oDE.wxXCkey=1
_(r,cBE)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx14_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx14_14()
var aHE=_n('view')
_rz(z,aHE,'style',0,e,s,gg)
var tIE=_n('view')
_rz(z,tIE,'class',1,e,s,gg)
var eJE=_n('slot')
_rz(z,eJE,'name',2,e,s,gg)
_(tIE,eJE)
var bKE=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var oLE=_v()
_(bKE,oLE)
if(_oz(z,5,e,s,gg)){oLE.wxVkey=1
}
var xME=_v()
_(bKE,xME)
if(_oz(z,6,e,s,gg)){xME.wxVkey=1
}
var oNE=_v()
_(bKE,oNE)
if(_oz(z,7,e,s,gg)){oNE.wxVkey=1
}
oLE.wxXCkey=1
xME.wxXCkey=1
oNE.wxXCkey=1
_(tIE,bKE)
var fOE=_n('view')
_rz(z,fOE,'class',8,e,s,gg)
var cPE=_v()
_(fOE,cPE)
if(_oz(z,9,e,s,gg)){cPE.wxVkey=1
}
else{cPE.wxVkey=2
var hQE=_n('slot')
_rz(z,hQE,'name',10,e,s,gg)
_(cPE,hQE)
}
cPE.wxXCkey=1
_(tIE,fOE)
_(aHE,tIE)
var oRE=_mz(z,'smart-box',['bind:hot-word-ready',11,'bind:search',1,'isActive',2,'keyword',3,'navHeight',4],[],e,s,gg)
var cSE=_mz(z,'smart-list',['bind:keyword-change',16,'bind:pvid-change',1,'bind:search',2,'bind:version-change',3,'isActive',4,'keyword',5],[],e,s,gg)
_(oRE,cSE)
_(aHE,oRE)
_(r,aHE)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx14_15()
var lUE=_v()
_(r,lUE)
var aVE=function(eXE,tWE,bYE,gg){
var x1E=_n('view')
_rz(z,x1E,'class',4,eXE,tWE,gg)
var c4E=_mz(z,'view',['bind:tap',5,'class',1,'data-vender-id',2],[],eXE,tWE,gg)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,8,eXE,tWE,gg)){h5E.wxVkey=1
}
var o6E=_n('view')
_rz(z,o6E,'class',9,eXE,tWE,gg)
var c7E=_v()
_(o6E,c7E)
if(_oz(z,10,eXE,tWE,gg)){c7E.wxVkey=1
}
var l9E=_v()
_(o6E,l9E)
var a0E=function(eBF,tAF,bCF,gg){
var xEF=_v()
_(bCF,xEF)
if(_oz(z,13,eBF,tAF,gg)){xEF.wxVkey=1
}
var oFF=_v()
_(bCF,oFF)
if(_oz(z,14,eBF,tAF,gg)){oFF.wxVkey=1
}
xEF.wxXCkey=1
oFF.wxXCkey=1
return bCF
}
l9E.wxXCkey=2
_2z(z,11,a0E,eXE,tWE,gg,l9E,'item','index','')
var o8E=_v()
_(o6E,o8E)
if(_oz(z,15,eXE,tWE,gg)){o8E.wxVkey=1
}
c7E.wxXCkey=1
o8E.wxXCkey=1
_(c4E,o6E)
h5E.wxXCkey=1
_(x1E,c4E)
var o2E=_v()
_(x1E,o2E)
if(_oz(z,16,eXE,tWE,gg)){o2E.wxVkey=1
var fGF=_v()
_(o2E,fGF)
var cHF=function(oJF,hIF,cKF,gg){
var lMF=_mz(z,'view',['bind:tap',20,'class',1,'data-shop-index',2,'data-sku-index',3],[],oJF,hIF,gg)
var aNF=_v()
_(lMF,aNF)
if(_oz(z,24,oJF,hIF,gg)){aNF.wxVkey=1
}
aNF.wxXCkey=1
_(cKF,lMF)
return cKF
}
fGF.wxXCkey=2
_2z(z,18,cHF,eXE,tWE,gg,fGF,'item','skuIndex','skuId')
}
var f3E=_v()
_(x1E,f3E)
if(_oz(z,25,eXE,tWE,gg)){f3E.wxVkey=1
var tOF=_n('view')
_rz(z,tOF,'class',26,eXE,tWE,gg)
var ePF=_v()
_(tOF,ePF)
if(_oz(z,27,eXE,tWE,gg)){ePF.wxVkey=1
}
var bQF=_v()
_(tOF,bQF)
if(_oz(z,28,eXE,tWE,gg)){bQF.wxVkey=1
}
ePF.wxXCkey=1
bQF.wxXCkey=1
_(f3E,tOF)
}
o2E.wxXCkey=1
f3E.wxXCkey=1
_(bYE,x1E)
return bYE
}
lUE.wxXCkey=2
_2z(z,2,aVE,e,s,gg,lUE,'shop','shopIndex','shopId')
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx14_16()
var xSF=_v()
_(r,xSF)
if(_oz(z,0,e,s,gg)){xSF.wxVkey=1
var oTF=_mz(z,'view',['bind:touchend',1,'bind:touchstart',1,'catch:touchmove',2,'class',3,'style',4],[],e,s,gg)
var fUF=_v()
_(oTF,fUF)
var cVF=function(oXF,hWF,cYF,gg){
var l1F=_mz(z,'view',['catch:transitionend',8,'class',1],[],oXF,hWF,gg)
var a2F=_mz(z,'view',['catch:tap',10,'class',1,'data-index',2],[],oXF,hWF,gg)
var t3F=_v()
_(a2F,t3F)
if(_oz(z,13,oXF,hWF,gg)){t3F.wxVkey=1
}
t3F.wxXCkey=1
_(l1F,a2F)
var e4F=_n('view')
_rz(z,e4F,'class',14,oXF,hWF,gg)
var o6F=_mz(z,'view',['catch:tap',15,'class',1,'data-index',2],[],oXF,hWF,gg)
var x7F=_v()
_(o6F,x7F)
if(_oz(z,18,oXF,hWF,gg)){x7F.wxVkey=1
}
x7F.wxXCkey=1
_(e4F,o6F)
var b5F=_v()
_(e4F,b5F)
if(_oz(z,19,oXF,hWF,gg)){b5F.wxVkey=1
}
b5F.wxXCkey=1
_(l1F,e4F)
_(cYF,l1F)
return cYF
}
fUF.wxXCkey=2
_2z(z,6,cVF,e,s,gg,fUF,'item','index','sku')
_(xSF,oTF)
}
xSF.wxXCkey=1
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx14_17()
var f9F=_mz(z,'view',['class',0,'hidden',1,'style',1],[],e,s,gg)
var c0F=_v()
_(f9F,c0F)
if(_oz(z,3,e,s,gg)){c0F.wxVkey=1
var hAG=_n('view')
_rz(z,hAG,'class',4,e,s,gg)
var oBG=_v()
_(hAG,oBG)
if(_oz(z,5,e,s,gg)){oBG.wxVkey=1
var lEG=_v()
_(oBG,lEG)
var aFG=function(eHG,tGG,bIG,gg){
var xKG=_v()
_(bIG,xKG)
if(_oz(z,8,eHG,tGG,gg)){xKG.wxVkey=1
}
xKG.wxXCkey=1
return bIG
}
lEG.wxXCkey=2
_2z(z,6,aFG,e,s,gg,lEG,'item','index','text')
}
var cCG=_v()
_(hAG,cCG)
if(_oz(z,9,e,s,gg)){cCG.wxVkey=1
var oLG=_n('view')
_rz(z,oLG,'class',10,e,s,gg)
var fMG=_v()
_(oLG,fMG)
if(_oz(z,11,e,s,gg)){fMG.wxVkey=1
var cNG=_v()
_(fMG,cNG)
var hOG=function(cQG,oPG,oRG,gg){
var aTG=_mz(z,'view',['bindtap',14,'class',1,'data-active-url',2,'data-index',3,'data-key',4,'data-pps',5],[],cQG,oPG,gg)
var tUG=_v()
_(aTG,tUG)
if(_oz(z,20,cQG,oPG,gg)){tUG.wxVkey=1
}
tUG.wxXCkey=1
_(oRG,aTG)
return oRG
}
cNG.wxXCkey=2
_2z(z,12,hOG,e,s,gg,cNG,'item','index','id')
}
else{fMG.wxVkey=2
}
fMG.wxXCkey=1
_(cCG,oLG)
}
var oDG=_v()
_(hAG,oDG)
if(_oz(z,21,e,s,gg)){oDG.wxVkey=1
var eVG=_v()
_(oDG,eVG)
var bWG=function(xYG,oXG,oZG,gg){
var c2G=_n('view')
_rz(z,c2G,'class',24,xYG,oXG,gg)
var h3G=_v()
_(c2G,h3G)
if(_oz(z,25,xYG,oXG,gg)){h3G.wxVkey=1
}
var o4G=_v()
_(c2G,o4G)
if(_oz(z,26,xYG,oXG,gg)){o4G.wxVkey=1
}
h3G.wxXCkey=1
o4G.wxXCkey=1
_(oZG,c2G)
return oZG
}
eVG.wxXCkey=2
_2z(z,22,bWG,e,s,gg,eVG,'item','index','name')
}
oBG.wxXCkey=1
cCG.wxXCkey=1
oDG.wxXCkey=1
_(c0F,hAG)
}
var c5G=_n('slot')
_(f9F,c5G)
c0F.wxXCkey=1
_(r,f9F)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx14_18()
var l7G=_v()
_(r,l7G)
if(_oz(z,0,e,s,gg)){l7G.wxVkey=1
var a8G=_v()
_(l7G,a8G)
var t9G=function(bAH,e0G,oBH,gg){
var oDH=_mz(z,'view',['bindtap',3,'class',1,'data-desc',2,'data-filter',3,'data-ico',4,'data-index',5,'data-key',6,'data-type',7,'data-url',8],[],bAH,e0G,gg)
var fEH=_v()
_(oDH,fEH)
if(_oz(z,12,bAH,e0G,gg)){fEH.wxVkey=1
}
var cFH=_v()
_(oDH,cFH)
if(_oz(z,13,bAH,e0G,gg)){cFH.wxVkey=1
}
var hGH=_v()
_(oDH,hGH)
if(_oz(z,14,bAH,e0G,gg)){hGH.wxVkey=1
}
var oHH=_v()
_(oDH,oHH)
if(_oz(z,15,bAH,e0G,gg)){oHH.wxVkey=1
var oJH=_v()
_(oHH,oJH)
if(_oz(z,16,bAH,e0G,gg)){oJH.wxVkey=1
}
oJH.wxXCkey=1
}
var cIH=_v()
_(oDH,cIH)
if(_oz(z,17,bAH,e0G,gg)){cIH.wxVkey=1
}
fEH.wxXCkey=1
cFH.wxXCkey=1
hGH.wxXCkey=1
oHH.wxXCkey=1
cIH.wxXCkey=1
_(oBH,oDH)
return oBH
}
a8G.wxXCkey=2
_2z(z,1,t9G,e,s,gg,a8G,'item','index','iftp')
}
l7G.wxXCkey=1
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx14_19()
var aLH=_v()
_(r,aLH)
if(_oz(z,0,e,s,gg)){aLH.wxVkey=1
var tMH=_n('view')
_rz(z,tMH,'class',1,e,s,gg)
var eNH=_v()
_(tMH,eNH)
if(_oz(z,2,e,s,gg)){eNH.wxVkey=1
var xQH=_mz(z,'view',['bindtap',3,'class',1],[],e,s,gg)
var oRH=_v()
_(xQH,oRH)
if(_oz(z,5,e,s,gg)){oRH.wxVkey=1
}
var fSH=_v()
_(xQH,fSH)
if(_oz(z,6,e,s,gg)){fSH.wxVkey=1
}
oRH.wxXCkey=1
fSH.wxXCkey=1
_(eNH,xQH)
var bOH=_v()
_(eNH,bOH)
if(_oz(z,7,e,s,gg)){bOH.wxVkey=1
var cTH=_v()
_(bOH,cTH)
if(_oz(z,8,e,s,gg)){cTH.wxVkey=1
}
cTH.wxXCkey=1
}
var oPH=_v()
_(eNH,oPH)
if(_oz(z,9,e,s,gg)){oPH.wxVkey=1
}
bOH.wxXCkey=1
oPH.wxXCkey=1
}
else{eNH.wxVkey=2
var hUH=_n('view')
_rz(z,hUH,'class',10,e,s,gg)
var oVH=_v()
_(hUH,oVH)
if(_oz(z,11,e,s,gg)){oVH.wxVkey=1
}
var cWH=_v()
_(hUH,cWH)
if(_oz(z,12,e,s,gg)){cWH.wxVkey=1
}
var oXH=_n('view')
_rz(z,oXH,'class',13,e,s,gg)
var lYH=_v()
_(oXH,lYH)
if(_oz(z,14,e,s,gg)){lYH.wxVkey=1
}
var aZH=_v()
_(oXH,aZH)
if(_oz(z,15,e,s,gg)){aZH.wxVkey=1
}
var t1H=_mz(z,'view',['bindtap',16,'class',1],[],e,s,gg)
var e2H=_v()
_(t1H,e2H)
if(_oz(z,18,e,s,gg)){e2H.wxVkey=1
}
var b3H=_v()
_(t1H,b3H)
if(_oz(z,19,e,s,gg)){b3H.wxVkey=1
}
e2H.wxXCkey=1
b3H.wxXCkey=1
_(oXH,t1H)
lYH.wxXCkey=1
aZH.wxXCkey=1
_(hUH,oXH)
oVH.wxXCkey=1
cWH.wxXCkey=1
_(eNH,hUH)
}
eNH.wxXCkey=1
_(aLH,tMH)
}
aLH.wxXCkey=1
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx14_20()
var x5H=_v()
_(r,x5H)
if(_oz(z,0,e,s,gg)){x5H.wxVkey=1
}
x5H.wxXCkey=1
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx14_21()
var f7H=_v()
_(r,f7H)
if(_oz(z,0,e,s,gg)){f7H.wxVkey=1
var c8H=_n('view')
_rz(z,c8H,'class',1,e,s,gg)
var h9H=_v()
_(c8H,h9H)
if(_oz(z,2,e,s,gg)){h9H.wxVkey=1
}
var o0H=_v()
_(c8H,o0H)
if(_oz(z,3,e,s,gg)){o0H.wxVkey=1
var oBI=_mz(z,'view',['catch:tap',4,'class',1],[],e,s,gg)
var lCI=_v()
_(oBI,lCI)
if(_oz(z,6,e,s,gg)){lCI.wxVkey=1
}
lCI.wxXCkey=1
_(o0H,oBI)
}
var cAI=_v()
_(c8H,cAI)
if(_oz(z,7,e,s,gg)){cAI.wxVkey=1
}
h9H.wxXCkey=1
o0H.wxXCkey=1
cAI.wxXCkey=1
_(f7H,c8H)
}
f7H.wxXCkey=1
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx14_22()
var tEI=_v()
_(r,tEI)
if(_oz(z,0,e,s,gg)){tEI.wxVkey=1
}
tEI.wxXCkey=1
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx14_23()
var bGI=_v()
_(r,bGI)
if(_oz(z,0,e,s,gg)){bGI.wxVkey=1
var oHI=_v()
_(bGI,oHI)
var xII=function(fKI,oJI,cLI,gg){
var oNI=_mz(z,'view',['bindtap',3,'class',1,'data-index',2],[],fKI,oJI,gg)
var cOI=_v()
_(oNI,cOI)
if(_oz(z,6,fKI,oJI,gg)){cOI.wxVkey=1
}
cOI.wxXCkey=1
_(cLI,oNI)
return cLI
}
oHI.wxXCkey=2
_2z(z,1,xII,e,s,gg,oHI,'item','index','')
}
bGI.wxXCkey=1
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx14_24()
var lQI=_v()
_(r,lQI)
if(_oz(z,0,e,s,gg)){lQI.wxVkey=1
}
lQI.wxXCkey=1
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx14_25()
var tSI=_v()
_(r,tSI)
if(_oz(z,0,e,s,gg)){tSI.wxVkey=1
}
tSI.wxXCkey=1
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx14_26()
var bUI=_v()
_(r,bUI)
if(_oz(z,0,e,s,gg)){bUI.wxVkey=1
var oVI=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var xWI=e_[x[25]].i
_ai(xWI,x[26],e_,x[25],3,6)
var cZI=_v()
_(oVI,cZI)
var h1I=function(c3I,o2I,o4I,gg){
var a6I=_v()
_(o4I,a6I)
if(_oz(z,5,c3I,o2I,gg)){a6I.wxVkey=1
var t7I=_v()
_(a6I,t7I)
var e8I=_oz(z,7,c3I,o2I,gg)
var b9I=_gd(x[25],e8I,e_,d_)
if(b9I){
var o0I=_1z(z,6,c3I,o2I,gg) || {}
var cur_globalf=gg.f
t7I.wxXCkey=3
b9I(o0I,o0I,t7I,gg)
gg.f=cur_globalf
}
else _w(e8I,x[25],6,22)
}
a6I.wxXCkey=1
return o4I
}
cZI.wxXCkey=2
_2z(z,3,h1I,e,s,gg,cZI,'item','index','')
var oXI=_v()
_(oVI,oXI)
if(_oz(z,11,e,s,gg)){oXI.wxVkey=1
var xAJ=_mz(z,'swiper',['autoplay',12,'bindchange',1,'circular',2,'current',3,'interval',4,'style',5],[],e,s,gg)
var oBJ=_v()
_(xAJ,oBJ)
var fCJ=function(hEJ,cDJ,oFJ,gg){
var oHJ=_v()
_(oFJ,oHJ)
var lIJ=_oz(z,21,hEJ,cDJ,gg)
var aJJ=_gd(x[25],lIJ,e_,d_)
if(aJJ){
var tKJ=_1z(z,20,hEJ,cDJ,gg) || {}
var cur_globalf=gg.f
oHJ.wxXCkey=3
aJJ(tKJ,tKJ,oHJ,gg)
gg.f=cur_globalf
}
else _w(lIJ,x[25],12,30)
return oFJ
}
oBJ.wxXCkey=2
_2z(z,18,fCJ,e,s,gg,oBJ,'item','index','')
_(oXI,xAJ)
}
var fYI=_v()
_(oVI,fYI)
if(_oz(z,25,e,s,gg)){fYI.wxVkey=1
}
oXI.wxXCkey=1
fYI.wxXCkey=1
xWI.pop()
_(bUI,oVI)
}
bUI.wxXCkey=1
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
d_[x[27]]["shop"]=function(e,s,r,gg){
var z=gz$gwx14_27()
var b=x[27]+':shop'
r.wxVkey=b
gg.f=$gdc(f_["./pages/search/components/top-shop/shop.tpl.wxml"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
}
var cF=_n('view')
_rz(z,cF,'class',4,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,5,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(cF,oH)
if(_oz(z,6,e,s,gg)){oH.wxVkey=1
}
hG.wxXCkey=1
oH.wxXCkey=1
_(oD,cF)
fE.wxXCkey=1
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,7,e,s,gg)){xC.wxVkey=1
var cI=_n('view')
_rz(z,cI,'class',8,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,9,e,s,gg)){oJ.wxVkey=1
}
else{oJ.wxVkey=2
var lK=_v()
_(oJ,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_v()
_(bO,xQ)
if(_oz(z,13,eN,tM,gg)){xQ.wxVkey=1
}
var oR=_v()
_(bO,oR)
if(_oz(z,14,eN,tM,gg)){oR.wxVkey=1
}
xQ.wxXCkey=1
oR.wxXCkey=1
return bO
}
lK.wxXCkey=2
_2z(z,11,aL,e,s,gg,lK,'it','index','')
}
oJ.wxXCkey=1
_(xC,cI)
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
var m26=function(e,s,r,gg){
var z=gz$gwx14_27()
return r
}
e_[x[27]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx14_28()
var oNJ=_v()
_(r,oNJ)
if(_oz(z,0,e,s,gg)){oNJ.wxVkey=1
}
oNJ.wxXCkey=1
return r
}
e_[x[28]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx14_29()
var oPJ=_mz(z,'gift-panel',['cartTotal',0,'prevParams',1,'unfold',1],[],e,s,gg)
_(r,oPJ)
return r
}
e_[x[29]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx14_30()
var cRJ=e_[x[30]].i
_ai(cRJ,x[31],e_,x[30],2,2)
var hSJ=_v()
_(r,hSJ)
var oTJ=_oz(z,1,e,s,gg)
var cUJ=_gd(x[30],oTJ,e_,d_)
if(cUJ){
var oVJ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hSJ.wxXCkey=3
cUJ(oVJ,oVJ,hSJ,gg)
gg.f=cur_globalf
}
else _w(oTJ,x[30],6,22)
cRJ.pop()
return r
}
e_[x[30]]={f:m29,j:[],i:[],ti:[x[31]],ic:[]}
d_[x[32]]={}
d_[x[32]]["base__shop--short"]=function(e,s,r,gg){
var z=gz$gwx14_31()
var b=x[32]+':base__shop--short'
r.wxVkey=b
gg.f=$gdc(f_["./pages/search/components_old/exhibition/template/shop.wxml"],"",1)
if(p_[b]){_wl(b,x[32]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bind:tap',1,'class',1,'data-clickurl',2,'data-id',3,'data-index',4,'data-name',5,'data-stype',6],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,8,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,9,e,s,gg)){oD.wxVkey=1
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
var m30=function(e,s,r,gg){
var z=gz$gwx14_31()
return r
}
e_[x[32]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx14_32()
var tYJ=_n('view')
_rz(z,tYJ,'class',0,e,s,gg)
var b1J=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var o2J=_v()
_(b1J,o2J)
if(_oz(z,3,e,s,gg)){o2J.wxVkey=1
}
var x3J=_v()
_(b1J,x3J)
if(_oz(z,4,e,s,gg)){x3J.wxVkey=1
}
var o4J=_v()
_(b1J,o4J)
if(_oz(z,5,e,s,gg)){o4J.wxVkey=1
}
o2J.wxXCkey=1
x3J.wxXCkey=1
o4J.wxXCkey=1
_(tYJ,b1J)
var eZJ=_v()
_(tYJ,eZJ)
if(_oz(z,6,e,s,gg)){eZJ.wxVkey=1
}
eZJ.wxXCkey=1
_(r,tYJ)
return r
}
e_[x[33]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx14_33()
return r
}
e_[x[34]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx14_34()
return r
}
e_[x[35]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx14_35()
var o8J=e_[x[36]].i
_ai(o8J,x[37],e_,x[36],54,2)
var c9J=_v()
_(r,c9J)
var o0J=_oz(z,1,e,s,gg)
var lAK=_gd(x[36],o0J,e_,d_)
if(lAK){
var aBK=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
c9J.wxXCkey=3
lAK(aBK,aBK,c9J,gg)
gg.f=cur_globalf
}
else _w(o0J,x[36],55,14)
o8J.pop()
return r
}
e_[x[36]]={f:m34,j:[],i:[],ti:[x[37]],ic:[]}
d_[x[38]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx14_36()
var bEK=_n('view')
_rz(z,bEK,'class',0,e,s,gg)
var oFK=_v()
_(bEK,oFK)
if(_oz(z,1,e,s,gg)){oFK.wxVkey=1
}
var xGK=_v()
_(bEK,xGK)
if(_oz(z,2,e,s,gg)){xGK.wxVkey=1
}
oFK.wxXCkey=1
xGK.wxXCkey=1
_(r,bEK)
var eDK=_v()
_(r,eDK)
if(_oz(z,3,e,s,gg)){eDK.wxVkey=1
}
eDK.wxXCkey=1
return r
}
e_[x[38]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx14_37()
var fIK=_n('view')
_rz(z,fIK,'class',0,e,s,gg)
var hKK=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var oLK=_v()
_(hKK,oLK)
if(_oz(z,3,e,s,gg)){oLK.wxVkey=1
}
oLK.wxXCkey=1
_(fIK,hKK)
var cJK=_v()
_(fIK,cJK)
if(_oz(z,4,e,s,gg)){cJK.wxVkey=1
var cMK=_v()
_(cJK,cMK)
if(_oz(z,5,e,s,gg)){cMK.wxVkey=1
}
else{cMK.wxVkey=2
var oNK=_v()
_(cMK,oNK)
if(_oz(z,6,e,s,gg)){oNK.wxVkey=1
}
else{oNK.wxVkey=2
var lOK=_mz(z,'view',['bind:tap',7,'class',1],[],e,s,gg)
var aPK=_v()
_(lOK,aPK)
if(_oz(z,9,e,s,gg)){aPK.wxVkey=1
}
aPK.wxXCkey=1
_(oNK,lOK)
}
oNK.wxXCkey=1
}
cMK.wxXCkey=1
}
cJK.wxXCkey=1
_(r,fIK)
return r
}
e_[x[39]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx14_38()
var eRK=_n('view')
_rz(z,eRK,'class',0,e,s,gg)
var bSK=_v()
_(eRK,bSK)
if(_oz(z,1,e,s,gg)){bSK.wxVkey=1
var c1K=_mz(z,'nav-bar',['bindgetnavinfo',2,'navBarData',1],[],e,s,gg)
var o2K=_mz(z,'search-bar',['bind:active',4,'bind:extra-key-remove',1,'bind:hot-word-ready',2,'bind:keyword-change',3,'bind:search',4,'bind:version-change',5,'category',6,'darkList',7,'extraKeys',8,'isActive',9,'keyword',10,'navHeight',11,'specialStyle',12],[],e,s,gg)
_(c1K,o2K)
_(bSK,c1K)
}
var l3K=_mz(z,'view',['class',17,'id',1,'style',2],[],e,s,gg)
var a4K=_v()
_(l3K,a4K)
if(_oz(z,20,e,s,gg)){a4K.wxVkey=1
var b7K=_mz(z,'search-bar',['bind:active',21,'bind:extra-key-remove',1,'bind:hot-word-ready',2,'bind:keyword-change',3,'bind:search',4,'bind:version-change',5,'category',6,'darkList',7,'extraKeys',8,'isActive',9,'keyword',10,'specialStyle',11],[],e,s,gg)
_(a4K,b7K)
}
var t5K=_v()
_(l3K,t5K)
if(_oz(z,33,e,s,gg)){t5K.wxVkey=1
var o8K=_n('view')
_rz(z,o8K,'class',34,e,s,gg)
var x9K=_mz(z,'top-adshop',['bind:draw-coupon',35,'shop',1],[],e,s,gg)
_(o8K,x9K)
var o0K=_n('top-shop')
_rz(z,o0K,'shops',37,e,s,gg)
_(o8K,o0K)
var fAL=_mz(z,'top-category',['bind:top-filter',38,'category',1],[],e,s,gg)
_(o8K,fAL)
var cBL=_n('top-writer')
_rz(z,cBL,'writer',40,e,s,gg)
_(o8K,cBL)
var hCL=_mz(z,'top-car',['bind:car-search',41,'bind:toggle-recommend',1,'car',2],[],e,s,gg)
_(o8K,hCL)
var oDL=_n('top-portal')
_rz(z,oDL,'portal',44,e,s,gg)
_(o8K,oDL)
var cEL=_mz(z,'top-coupon',['bind:draw-coupon',45,'coupons',1],[],e,s,gg)
_(o8K,cEL)
var oFL=_n('top-banner')
_rz(z,oFL,'banner',47,e,s,gg)
_(o8K,oFL)
var lGL=_n('top-notice')
_rz(z,lGL,'notice',48,e,s,gg)
_(o8K,lGL)
_(t5K,o8K)
}
var e6K=_v()
_(l3K,e6K)
if(_oz(z,49,e,s,gg)){e6K.wxVkey=1
var aHL=_mz(z,'filter-bar',['bind:filter',50,'bind:more-filter',1,'bind:partial-panel',2,'bind:tab',3,'extraTabs',4,'filterPanel',5],[],e,s,gg)
var tIL=_v()
_(aHL,tIL)
if(_oz(z,56,e,s,gg)){tIL.wxVkey=1
}
tIL.wxXCkey=1
_(e6K,aHL)
}
a4K.wxXCkey=1
a4K.wxXCkey=3
t5K.wxXCkey=1
t5K.wxXCkey=3
e6K.wxXCkey=1
e6K.wxXCkey=3
_(eRK,l3K)
var eJL=_mz(z,'filter-panel',['bind:filter',57,'bind:hide',1,'bind:partial-panel',2,'filterPanel',3,'keyword',4,'navHeight',5,'visible',6],[],e,s,gg)
_(eRK,eJL)
var oTK=_v()
_(eRK,oTK)
if(_oz(z,64,e,s,gg)){oTK.wxVkey=1
}
var xUK=_v()
_(eRK,xUK)
if(_oz(z,65,e,s,gg)){xUK.wxVkey=1
var cSL=_mz(z,'filter-act',['bind:filter',66,'coupon',1,'filterPanel',2],[],e,s,gg)
_(xUK,cSL)
var bKL=_v()
_(xUK,bKL)
if(_oz(z,69,e,s,gg)){bKL.wxVkey=1
var oTL=_n('view')
_rz(z,oTL,'class',70,e,s,gg)
var lUL=_v()
_(oTL,lUL)
if(_oz(z,71,e,s,gg)){lUL.wxVkey=1
}
var aVL=_v()
_(oTL,aVL)
if(_oz(z,72,e,s,gg)){aVL.wxVkey=1
}
var tWL=_v()
_(oTL,tWL)
if(_oz(z,73,e,s,gg)){tWL.wxVkey=1
}
var eXL=_v()
_(oTL,eXL)
if(_oz(z,74,e,s,gg)){eXL.wxVkey=1
var oZL=_v()
_(eXL,oZL)
if(_oz(z,75,e,s,gg)){oZL.wxVkey=1
}
oZL.wxXCkey=1
}
var bYL=_v()
_(oTL,bYL)
if(_oz(z,76,e,s,gg)){bYL.wxVkey=1
}
lUL.wxXCkey=1
aVL.wxXCkey=1
tWL.wxXCkey=1
eXL.wxXCkey=1
bYL.wxXCkey=1
_(bKL,oTL)
}
var x1L=_mz(z,'goods-list',['bind:add-cart',77,'bind:mid-filter',1,'bind:mid-search',2,'bind:sku-switch',3,'hasInterlude',4,'interlude',5,'list',6,'listMode',7,'longImgMode',8,'pseudoItem',9],[],e,s,gg)
_(xUK,x1L)
var oLL=_v()
_(xUK,oLL)
if(_oz(z,87,e,s,gg)){oLL.wxVkey=1
}
var xML=_v()
_(xUK,xML)
if(_oz(z,88,e,s,gg)){xML.wxVkey=1
}
var oNL=_v()
_(xUK,oNL)
if(_oz(z,89,e,s,gg)){oNL.wxVkey=1
var o2L=_mz(z,'pagination',['bigPageSize',90,'bind:page-change',1,'page',2,'pageSize',3,'resultCount',4],[],e,s,gg)
_(oNL,o2L)
}
var fOL=_v()
_(xUK,fOL)
if(_oz(z,95,e,s,gg)){fOL.wxVkey=1
}
var cPL=_v()
_(xUK,cPL)
if(_oz(z,96,e,s,gg)){cPL.wxVkey=1
}
var hQL=_v()
_(xUK,hQL)
if(_oz(z,97,e,s,gg)){hQL.wxVkey=1
}
var oRL=_v()
_(xUK,oRL)
if(_oz(z,98,e,s,gg)){oRL.wxVkey=1
}
bKL.wxXCkey=1
oLL.wxXCkey=1
xML.wxXCkey=1
oNL.wxXCkey=1
oNL.wxXCkey=3
fOL.wxXCkey=1
cPL.wxXCkey=1
hQL.wxXCkey=1
oRL.wxXCkey=1
}
var oVK=_v()
_(eRK,oVK)
if(_oz(z,99,e,s,gg)){oVK.wxVkey=1
var o6L=_n('shop-list')
_rz(z,o6L,'shops',100,e,s,gg)
_(oVK,o6L)
var f3L=_v()
_(oVK,f3L)
if(_oz(z,101,e,s,gg)){f3L.wxVkey=1
}
var c4L=_v()
_(oVK,c4L)
if(_oz(z,102,e,s,gg)){c4L.wxVkey=1
}
var h5L=_v()
_(oVK,h5L)
if(_oz(z,103,e,s,gg)){h5L.wxVkey=1
}
f3L.wxXCkey=1
c4L.wxXCkey=1
h5L.wxXCkey=1
}
var fWK=_v()
_(eRK,fWK)
if(_oz(z,104,e,s,gg)){fWK.wxVkey=1
var c7L=_mz(z,'quick-nav',['bottom',105,'wxappPageUrl',1],[],e,s,gg)
_(fWK,c7L)
}
var cXK=_v()
_(eRK,cXK)
if(_oz(z,107,e,s,gg)){cXK.wxVkey=1
}
var hYK=_v()
_(eRK,hYK)
if(_oz(z,108,e,s,gg)){hYK.wxVkey=1
}
var oZK=_v()
_(eRK,oZK)
if(_oz(z,109,e,s,gg)){oZK.wxVkey=1
}
var o8L=_mz(z,'sku-switch',['catch:hide',110,'item',1,'keyword',2,'navHeight',3,'similar',4,'visible',5],[],e,s,gg)
_(eRK,o8L)
var l9L=_n('hongbao-egg')
_rz(z,l9L,'hongbaoEgg',116,e,s,gg)
_(eRK,l9L)
var a0L=_mz(z,'coupon-float',['bind:draw-coupon',117,'coupon',1,'keyword',2],[],e,s,gg)
_(eRK,a0L)
var tAM=_n('modal')
_(eRK,tAM)
bSK.wxXCkey=1
bSK.wxXCkey=3
oTK.wxXCkey=1
xUK.wxXCkey=1
xUK.wxXCkey=3
oVK.wxXCkey=1
oVK.wxXCkey=3
fWK.wxXCkey=1
fWK.wxXCkey=3
cXK.wxXCkey=1
hYK.wxXCkey=1
oZK.wxXCkey=1
_(r,eRK)
return r
}
e_[x[40]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx14_39()
var bCM=_v()
_(r,bCM)
if(_oz(z,0,e,s,gg)){bCM.wxVkey=1
var oDM=_v()
_(bCM,oDM)
var xEM=function(fGM,oFM,cHM,gg){
var oJM=_mz(z,'view',['bindtap',2,'class',1,'data-index',2],[],fGM,oFM,gg)
var cKM=_v()
_(oJM,cKM)
if(_oz(z,5,fGM,oFM,gg)){cKM.wxVkey=1
}
var oLM=_v()
_(oJM,oLM)
if(_oz(z,6,fGM,oFM,gg)){oLM.wxVkey=1
}
cKM.wxXCkey=1
oLM.wxXCkey=1
_(cHM,oJM)
return cHM
}
oDM.wxXCkey=2
_2z(z,1,xEM,e,s,gg,oDM,'item','index','')
}
bCM.wxXCkey=1
return r
}
e_[x[41]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx14_40()
var aNM=e_[x[42]].i
_ai(aNM,x[43],e_,x[42],1,1)
var oRM=_n('view')
_rz(z,oRM,'class',0,e,s,gg)
var xSM=_v()
_(oRM,xSM)
if(_oz(z,1,e,s,gg)){xSM.wxVkey=1
var fUM=_v()
_(xSM,fUM)
if(_oz(z,2,e,s,gg)){fUM.wxVkey=1
}
fUM.wxXCkey=1
}
var oTM=_v()
_(oRM,oTM)
if(_oz(z,3,e,s,gg)){oTM.wxVkey=1
}
xSM.wxXCkey=1
oTM.wxXCkey=1
_(r,oRM)
var tOM=_v()
_(r,tOM)
if(_oz(z,4,e,s,gg)){tOM.wxVkey=1
}
var ePM=_v()
_(r,ePM)
if(_oz(z,5,e,s,gg)){ePM.wxVkey=1
}
var cVM=_mz(z,'scroll-view',['bindscroll',6,'class',1,'scrollTop',2,'scrollY',3],[],e,s,gg)
var hWM=_v()
_(cVM,hWM)
if(_oz(z,10,e,s,gg)){hWM.wxVkey=1
var oXM=_v()
_(hWM,oXM)
var cYM=function(l1M,oZM,a2M,gg){
var e4M=_v()
_(a2M,e4M)
if(_oz(z,14,l1M,oZM,gg)){e4M.wxVkey=1
}
var b5M=_v()
_(a2M,b5M)
var o6M=function(o8M,x7M,f9M,gg){
var hAN=_v()
_(f9M,hAN)
if(_oz(z,18,o8M,x7M,gg)){hAN.wxVkey=1
}
hAN.wxXCkey=1
return f9M
}
b5M.wxXCkey=2
_2z(z,17,o6M,l1M,oZM,gg,b5M,'item','idx','')
e4M.wxXCkey=1
return a2M
}
oXM.wxXCkey=2
_2z(z,13,cYM,e,s,gg,oXM,'code','i','')
}
else{hWM.wxVkey=2
}
hWM.wxXCkey=1
_(r,cVM)
var bQM=_v()
_(r,bQM)
if(_oz(z,19,e,s,gg)){bQM.wxVkey=1
}
var oBN=_v()
_(r,oBN)
var cCN=_oz(z,21,e,s,gg)
var oDN=_gd(x[42],cCN,e_,d_)
if(oDN){
var lEN=_1z(z,20,e,s,gg) || {}
var cur_globalf=gg.f
oBN.wxXCkey=3
oDN(lEN,lEN,oBN,gg)
gg.f=cur_globalf
}
else _w(cCN,x[42],62,14)
tOM.wxXCkey=1
ePM.wxXCkey=1
bQM.wxXCkey=1
aNM.pop()
return r
}
e_[x[42]]={f:m39,j:[],i:[],ti:[x[43]],ic:[]}
d_[x[44]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx14_41()
var tGN=_v()
_(r,tGN)
var eHN=function(oJN,bIN,xKN,gg){
var fMN=_mz(z,'view',['bindtap',2,'class',1,'data-id',2],[],oJN,bIN,gg)
var cNN=_v()
_(fMN,cNN)
var hON=function(cQN,oPN,oRN,gg){
var aTN=_v()
_(oRN,aTN)
if(_oz(z,7,cQN,oPN,gg)){aTN.wxVkey=1
}
aTN.wxXCkey=1
return oRN
}
cNN.wxXCkey=2
_2z(z,6,hON,oJN,bIN,gg,cNN,'sub_item','index','')
_(xKN,fMN)
return xKN
}
tGN.wxXCkey=2
_2z(z,1,eHN,e,s,gg,tGN,'item','index','')
return r
}
e_[x[44]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx14_42()
var eVN=e_[x[45]].i
_ai(eVN,x[43],e_,x[45],3,2)
var bWN=_n('view')
_rz(z,bWN,'class',0,e,s,gg)
var oXN=_v()
_(bWN,oXN)
if(_oz(z,1,e,s,gg)){oXN.wxVkey=1
}
else{oXN.wxVkey=2
var c2N=_mz(z,'search-bar',['PtagMap',2,'addMark',1,'bind:inputFocus',2,'bind:searchKeyChange',3,'bind:toSearch',4,'isFocus',5,'key',6,'placeholder',7,'type',8],[],e,s,gg)
_(oXN,c2N)
var xYN=_v()
_(oXN,xYN)
if(_oz(z,11,e,s,gg)){xYN.wxVkey=1
var h3N=_n('exhibition')
_rz(z,h3N,'venderId',12,e,s,gg)
_(xYN,h3N)
}
var o4N=_mz(z,'filter-sort',['PtagMap',13,'actived',1,'bind:sortevent',2,'class',3,'hasFilter',4,'isfilterSortFixed',5,'key',6],[],e,s,gg)
_(oXN,o4N)
var oZN=_v()
_(oXN,oZN)
if(_oz(z,20,e,s,gg)){oZN.wxVkey=1
var o6N=_n('view')
_rz(z,o6N,'class',21,e,s,gg)
var t9N=_v()
_(o6N,t9N)
var e0N=function(oBO,bAO,xCO,gg){
var fEO=_v()
_(xCO,fEO)
var cFO=function(oHO,hGO,cIO,gg){
var lKO=_mz(z,'view',['bindtap',29,'class',1,'data-index',2,'data-page',3],[],oHO,hGO,gg)
var aLO=_v()
_(lKO,aLO)
if(_oz(z,33,oHO,hGO,gg)){aLO.wxVkey=1
}
var tMO=_n('view')
_rz(z,tMO,'class',34,oHO,hGO,gg)
var oPO=_v()
_(tMO,oPO)
var xQO=function(fSO,oRO,cTO,gg){
var oVO=_v()
_(cTO,oVO)
if(_oz(z,38,fSO,oRO,gg)){oVO.wxVkey=1
}
oVO.wxXCkey=1
return cTO
}
oPO.wxXCkey=2
_2z(z,36,xQO,oHO,hGO,gg,oPO,'ttag','index','src')
var eNO=_v()
_(tMO,eNO)
if(_oz(z,39,oHO,hGO,gg)){eNO.wxVkey=1
var cWO=_v()
_(eNO,cWO)
if(_oz(z,40,oHO,hGO,gg)){cWO.wxVkey=1
}
cWO.wxXCkey=1
}
var oXO=_n('view')
_rz(z,oXO,'class',41,oHO,hGO,gg)
var lYO=_n('view')
_rz(z,lYO,'class',42,oHO,hGO,gg)
var aZO=_v()
_(lYO,aZO)
if(_oz(z,43,oHO,hGO,gg)){aZO.wxVkey=1
}
else if(_oz(z,44,oHO,hGO,gg)){aZO.wxVkey=2
}
else{aZO.wxVkey=3
var t1O=_v()
_(aZO,t1O)
if(_oz(z,45,oHO,hGO,gg)){t1O.wxVkey=1
var e2O=_v()
_(t1O,e2O)
if(_oz(z,46,oHO,hGO,gg)){e2O.wxVkey=1
}
e2O.wxXCkey=1
}
else{t1O.wxVkey=2
}
t1O.wxXCkey=1
}
aZO.wxXCkey=1
_(oXO,lYO)
var b3O=_n('view')
_rz(z,b3O,'class',47,oHO,hGO,gg)
var o4O=_v()
_(b3O,o4O)
if(_oz(z,48,oHO,hGO,gg)){o4O.wxVkey=1
}
var x5O=_v()
_(b3O,x5O)
var o6O=function(c8O,f7O,h9O,gg){
var cAP=_v()
_(h9O,cAP)
if(_oz(z,52,c8O,f7O,gg)){cAP.wxVkey=1
}
var oBP=_v()
_(h9O,oBP)
if(_oz(z,53,c8O,f7O,gg)){oBP.wxVkey=1
var lCP=_v()
_(oBP,lCP)
if(_oz(z,54,c8O,f7O,gg)){lCP.wxVkey=1
}
lCP.wxXCkey=1
}
var aDP=_v()
_(h9O,aDP)
var tEP=function(bGP,eFP,oHP,gg){
var oJP=_v()
_(oHP,oJP)
if(_oz(z,58,bGP,eFP,gg)){oJP.wxVkey=1
}
oJP.wxXCkey=1
return oHP
}
aDP.wxXCkey=2
_2z(z,56,tEP,c8O,f7O,gg,aDP,'item','index','item')
cAP.wxXCkey=1
oBP.wxXCkey=1
return h9O
}
x5O.wxXCkey=2
_2z(z,50,o6O,oHO,hGO,gg,x5O,'mark','index','name')
o4O.wxXCkey=1
_(oXO,b3O)
_(tMO,oXO)
var fKP=_v()
_(tMO,fKP)
var cLP=function(oNP,hMP,cOP,gg){
var lQP=_v()
_(cOP,lQP)
if(_oz(z,62,oNP,hMP,gg)){lQP.wxVkey=1
}
lQP.wxXCkey=1
return cOP
}
fKP.wxXCkey=2
_2z(z,60,cLP,oHO,hGO,gg,fKP,'ctag','index','src')
var bOO=_v()
_(tMO,bOO)
if(_oz(z,63,oHO,hGO,gg)){bOO.wxVkey=1
}
eNO.wxXCkey=1
bOO.wxXCkey=1
_(lKO,tMO)
aLO.wxXCkey=1
_(cIO,lKO)
return cIO
}
fEO.wxXCkey=2
_2z(z,27,cFO,oBO,bAO,gg,fEO,'item','i','img')
return xCO
}
t9N.wxXCkey=2
_2z(z,24,e0N,e,s,gg,t9N,'page_list','page_num','')
var l7N=_v()
_(o6N,l7N)
if(_oz(z,64,e,s,gg)){l7N.wxVkey=1
}
var a8N=_v()
_(o6N,a8N)
if(_oz(z,65,e,s,gg)){a8N.wxVkey=1
}
l7N.wxXCkey=1
a8N.wxXCkey=1
_(oZN,o6N)
var c5N=_v()
_(oZN,c5N)
if(_oz(z,66,e,s,gg)){c5N.wxVkey=1
}
c5N.wxXCkey=1
}
else{oZN.wxVkey=2
}
var f1N=_v()
_(oXN,f1N)
if(_oz(z,67,e,s,gg)){f1N.wxVkey=1
var aRP=_mz(z,'good-count',['PtagMap',68,'batch',1,'bind:initCart',2,'discountInfo',3,'from',4,'isInitCart',5,'isZheKou',6,'kind',7,'venderId',8,'zheKouInfo',9,'zheKouObj',10],[],e,s,gg)
_(f1N,aRP)
}
xYN.wxXCkey=1
xYN.wxXCkey=3
oZN.wxXCkey=1
f1N.wxXCkey=1
f1N.wxXCkey=3
}
oXN.wxXCkey=1
oXN.wxXCkey=3
_(r,bWN)
var tSP=_v()
_(r,tSP)
var eTP=_oz(z,80,e,s,gg)
var bUP=_gd(x[45],eTP,e_,d_)
if(bUP){
var oVP=_1z(z,79,e,s,gg) || {}
var cur_globalf=gg.f
tSP.wxXCkey=3
bUP(oVP,oVP,tSP,gg)
gg.f=cur_globalf
}
else _w(eTP,x[45],157,14)
eVN.pop()
return r
}
e_[x[45]]={f:m41,j:[],i:[],ti:[x[43]],ic:[]}
d_[x[46]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx14_43()
var oXP=e_[x[46]].i
_ai(oXP,x[47],e_,x[46],2,2)
_ai(oXP,x[43],e_,x[46],3,2)
var h1P=_v()
_(r,h1P)
var o2P=_oz(z,1,e,s,gg)
var c3P=_gd(x[46],o2P,e_,d_)
if(c3P){
var o4P=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
h1P.wxXCkey=3
c3P(o4P,o4P,h1P,gg)
gg.f=cur_globalf
}
else _w(o2P,x[46],4,14)
var l5P=_v()
_(r,l5P)
var a6P=_oz(z,3,e,s,gg)
var t7P=_gd(x[46],a6P,e_,d_)
if(t7P){
var e8P=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
l5P.wxXCkey=3
t7P(e8P,e8P,l5P,gg)
gg.f=cur_globalf
}
else _w(a6P,x[46],5,14)
var fYP=_v()
_(r,fYP)
if(_oz(z,4,e,s,gg)){fYP.wxVkey=1
}
var cZP=_v()
_(r,cZP)
if(_oz(z,5,e,s,gg)){cZP.wxVkey=1
var b9P=_n('view')
_rz(z,b9P,'class',6,e,s,gg)
var xAQ=_mz(z,'scroll-view',['bindscrolltolower',7,'class',1,'enableBackToTop',2,'lowerThreshold',3,'scrollX',4,'scrollY',5],[],e,s,gg)
var oBQ=_v()
_(xAQ,oBQ)
var fCQ=function(hEQ,cDQ,oFQ,gg){
var oHQ=_mz(z,'view',['bindtap',15,'class',1,'data-checked',2,'data-idx',3,'data-sku',4,'data-stock',5],[],hEQ,cDQ,gg)
var lIQ=_v()
_(oHQ,lIQ)
if(_oz(z,21,hEQ,cDQ,gg)){lIQ.wxVkey=1
}
var aJQ=_n('view')
_rz(z,aJQ,'class',22,hEQ,cDQ,gg)
var tKQ=_v()
_(aJQ,tKQ)
if(_oz(z,23,hEQ,cDQ,gg)){tKQ.wxVkey=1
var eLQ=_n('view')
_rz(z,eLQ,'class',24,hEQ,cDQ,gg)
var bMQ=_v()
_(eLQ,bMQ)
if(_oz(z,25,hEQ,cDQ,gg)){bMQ.wxVkey=1
}
var oNQ=_v()
_(eLQ,oNQ)
if(_oz(z,26,hEQ,cDQ,gg)){oNQ.wxVkey=1
}
bMQ.wxXCkey=1
oNQ.wxXCkey=1
_(tKQ,eLQ)
}
else{tKQ.wxVkey=2
}
tKQ.wxXCkey=1
_(oHQ,aJQ)
lIQ.wxXCkey=1
_(oFQ,oHQ)
return oFQ
}
oBQ.wxXCkey=2
_2z(z,13,fCQ,e,s,gg,oBQ,'item','index','wareid')
_(b9P,xAQ)
var o0P=_v()
_(b9P,o0P)
if(_oz(z,27,e,s,gg)){o0P.wxVkey=1
var xOQ=_v()
_(o0P,xOQ)
var oPQ=function(cRQ,fQQ,hSQ,gg){
var cUQ=_mz(z,'view',['bindtap',30,'class',1,'data-checked',2,'data-idx',3,'data-sku',4],[],cRQ,fQQ,gg)
var oVQ=_v()
_(cUQ,oVQ)
if(_oz(z,35,cRQ,fQQ,gg)){oVQ.wxVkey=1
}
oVQ.wxXCkey=1
_(hSQ,cUQ)
return hSQ
}
xOQ.wxXCkey=2
_2z(z,28,oPQ,e,s,gg,xOQ,'item','index','{{ item.wareid }}')
}
o0P.wxXCkey=1
_(cZP,b9P)
}
fYP.wxXCkey=1
cZP.wxXCkey=1
oXP.pop()
oXP.pop()
return r
}
e_[x[46]]={f:m42,j:[],i:[],ti:[x[47],x[43]],ic:[]}
d_[x[48]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx14_44()
var aXQ=e_[x[48]].i
_ai(aXQ,x[43],e_,x[48],1,1)
var tYQ=_n('view')
_rz(z,tYQ,'class',0,e,s,gg)
var eZQ=_mz(z,'scroll-view',['scrollY',-1,'class',1],[],e,s,gg)
var b1Q=_mz(z,'filter-panel',['bind:filterPanel',2,'filters',1,'service',2,'source',3],[],e,s,gg)
_(eZQ,b1Q)
var o2Q=_mz(z,'filter-price',['bind:inputPrice',6,'bind:tapInterval',1,'intervals',2,'price',3,'source',4],[],e,s,gg)
_(eZQ,o2Q)
var x3Q=_v()
_(eZQ,x3Q)
var o4Q=function(c6Q,f5Q,h7Q,gg){
var c9Q=_v()
_(h7Q,c9Q)
if(_oz(z,15,c6Q,f5Q,gg)){c9Q.wxVkey=1
var o0Q=_n('view')
_rz(z,o0Q,'class',16,c6Q,f5Q,gg)
var lAR=_v()
_(o0Q,lAR)
if(_oz(z,17,c6Q,f5Q,gg)){lAR.wxVkey=1
}
var aBR=_v()
_(o0Q,aBR)
var tCR=function(bER,eDR,oFR,gg){
var oHR=_v()
_(oFR,oHR)
if(_oz(z,22,bER,eDR,gg)){oHR.wxVkey=1
var fIR=_mz(z,'view',['bindtap',23,'class',1,'data-item-index',2,'data-valueitem-index',3],[],bER,eDR,gg)
var cJR=_v()
_(fIR,cJR)
if(_oz(z,27,bER,eDR,gg)){cJR.wxVkey=1
}
var hKR=_v()
_(fIR,hKR)
if(_oz(z,28,bER,eDR,gg)){hKR.wxVkey=1
}
cJR.wxXCkey=1
hKR.wxXCkey=1
_(oHR,fIR)
}
oHR.wxXCkey=1
return oFR
}
aBR.wxXCkey=2
_2z(z,20,tCR,c6Q,f5Q,gg,aBR,'jitem','j','{{j}}')
lAR.wxXCkey=1
_(c9Q,o0Q)
}
c9Q.wxXCkey=1
return h7Q
}
x3Q.wxXCkey=2
_2z(z,13,o4Q,e,s,gg,x3Q,'item','idx','{{idx}}')
_(tYQ,eZQ)
var oLR=_mz(z,'view',['bindtap',29,'class',1],[],e,s,gg)
var cMR=_v()
_(oLR,cMR)
if(_oz(z,31,e,s,gg)){cMR.wxVkey=1
}
cMR.wxXCkey=1
_(tYQ,oLR)
_(r,tYQ)
var oNR=_v()
_(r,oNR)
var lOR=_oz(z,33,e,s,gg)
var aPR=_gd(x[48],lOR,e_,d_)
if(aPR){
var tQR=_1z(z,32,e,s,gg) || {}
var cur_globalf=gg.f
oNR.wxXCkey=3
aPR(tQR,tQR,oNR,gg)
gg.f=cur_globalf
}
else _w(lOR,x[48],128,14)
aXQ.pop()
return r
}
e_[x[48]]={f:m43,j:[],i:[],ti:[x[43]],ic:[]}
d_[x[49]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx14_45()
var bSR=e_[x[49]].i
_ai(bSR,x[43],e_,x[49],3,2)
var oTR=_n('view')
_rz(z,oTR,'class',0,e,s,gg)
var xUR=_v()
_(oTR,xUR)
if(_oz(z,1,e,s,gg)){xUR.wxVkey=1
}
else{xUR.wxVkey=2
var fWR=_mz(z,'search-bar',['PtagMap',2,'addMark',1,'bind:inputFocus',2,'bind:searchKeyChange',3,'bind:toSearch',4,'isFocus',5,'key',6,'placeholder',7,'type',8],[],e,s,gg)
_(xUR,fWR)
var cXR=_mz(z,'filter-sort',['PtagMap',11,'actived',1,'bindsortevent',2,'class',3,'hasFilter',4,'isfilterSortFixed',5,'key',6],[],e,s,gg)
_(xUR,cXR)
var oVR=_v()
_(xUR,oVR)
if(_oz(z,18,e,s,gg)){oVR.wxVkey=1
var oZR=_mz(z,'view',['class',19,'style',1],[],e,s,gg)
var l3R=_v()
_(oZR,l3R)
var a4R=function(e6R,t5R,b7R,gg){
var x9R=_v()
_(b7R,x9R)
if(_oz(z,24,e6R,t5R,gg)){x9R.wxVkey=1
var o0R=_v()
_(x9R,o0R)
var fAS=function(hCS,cBS,oDS,gg){
var oFS=_mz(z,'view',['bindtap',29,'class',1,'data-index',2,'data-isjx',3,'data-page',4,'data-recipe',5,'data-sign',6,'data-yuyue',7],[],hCS,cBS,gg)
var lGS=_v()
_(oFS,lGS)
if(_oz(z,37,hCS,cBS,gg)){lGS.wxVkey=1
}
var aHS=_n('view')
_rz(z,aHS,'class',38,hCS,cBS,gg)
var bKS=_v()
_(aHS,bKS)
var oLS=function(oNS,xMS,fOS,gg){
var hQS=_v()
_(fOS,hQS)
if(_oz(z,42,oNS,xMS,gg)){hQS.wxVkey=1
}
hQS.wxXCkey=1
return fOS
}
bKS.wxXCkey=2
_2z(z,40,oLS,hCS,cBS,gg,bKS,'ttag','index','src')
var tIS=_v()
_(aHS,tIS)
if(_oz(z,43,hCS,cBS,gg)){tIS.wxVkey=1
var oRS=_v()
_(tIS,oRS)
if(_oz(z,44,hCS,cBS,gg)){oRS.wxVkey=1
}
oRS.wxXCkey=1
}
var cSS=_n('view')
_rz(z,cSS,'class',45,hCS,cBS,gg)
var oTS=_n('view')
_rz(z,oTS,'class',46,hCS,cBS,gg)
var lUS=_v()
_(oTS,lUS)
if(_oz(z,47,hCS,cBS,gg)){lUS.wxVkey=1
}
else if(_oz(z,48,hCS,cBS,gg)){lUS.wxVkey=2
}
else{lUS.wxVkey=3
var aVS=_v()
_(lUS,aVS)
if(_oz(z,49,hCS,cBS,gg)){aVS.wxVkey=1
var tWS=_v()
_(aVS,tWS)
if(_oz(z,50,hCS,cBS,gg)){tWS.wxVkey=1
}
tWS.wxXCkey=1
}
else{aVS.wxVkey=2
}
aVS.wxXCkey=1
}
lUS.wxXCkey=1
_(cSS,oTS)
var eXS=_n('view')
_rz(z,eXS,'class',51,hCS,cBS,gg)
var bYS=_v()
_(eXS,bYS)
if(_oz(z,52,hCS,cBS,gg)){bYS.wxVkey=1
}
var oZS=_v()
_(eXS,oZS)
var x1S=function(f3S,o2S,c4S,gg){
var o6S=_v()
_(c4S,o6S)
if(_oz(z,56,f3S,o2S,gg)){o6S.wxVkey=1
}
var c7S=_v()
_(c4S,c7S)
if(_oz(z,57,f3S,o2S,gg)){c7S.wxVkey=1
var o8S=_v()
_(c7S,o8S)
if(_oz(z,58,f3S,o2S,gg)){o8S.wxVkey=1
}
o8S.wxXCkey=1
}
var l9S=_v()
_(c4S,l9S)
var a0S=function(eBT,tAT,bCT,gg){
var xET=_v()
_(bCT,xET)
if(_oz(z,62,eBT,tAT,gg)){xET.wxVkey=1
}
xET.wxXCkey=1
return bCT
}
l9S.wxXCkey=2
_2z(z,60,a0S,f3S,o2S,gg,l9S,'item','index','item')
o6S.wxXCkey=1
c7S.wxXCkey=1
return c4S
}
oZS.wxXCkey=2
_2z(z,54,x1S,hCS,cBS,gg,oZS,'mark','index','name')
bYS.wxXCkey=1
_(cSS,eXS)
_(aHS,cSS)
var oFT=_v()
_(aHS,oFT)
var fGT=function(hIT,cHT,oJT,gg){
var oLT=_v()
_(oJT,oLT)
if(_oz(z,66,hIT,cHT,gg)){oLT.wxVkey=1
}
oLT.wxXCkey=1
return oJT
}
oFT.wxXCkey=2
_2z(z,64,fGT,hCS,cBS,gg,oFT,'ctag','index','src')
var eJS=_v()
_(aHS,eJS)
if(_oz(z,67,hCS,cBS,gg)){eJS.wxVkey=1
}
tIS.wxXCkey=1
eJS.wxXCkey=1
_(oFS,aHS)
lGS.wxXCkey=1
_(oDS,oFS)
return oDS
}
o0R.wxXCkey=2
_2z(z,27,fAS,e6R,t5R,gg,o0R,'item','i','img')
}
x9R.wxXCkey=1
return b7R
}
l3R.wxXCkey=2
_2z(z,23,a4R,e,s,gg,l3R,'page_list','page_num','')
var lMT=_n('view')
_rz(z,lMT,'class',68,e,s,gg)
var aNT=_v()
_(lMT,aNT)
if(_oz(z,69,e,s,gg)){aNT.wxVkey=1
}
else{aNT.wxVkey=2
var tOT=_v()
_(aNT,tOT)
if(_oz(z,70,e,s,gg)){tOT.wxVkey=1
}
tOT.wxXCkey=1
}
aNT.wxXCkey=1
_(oZR,lMT)
var c1R=_v()
_(oZR,c1R)
if(_oz(z,71,e,s,gg)){c1R.wxVkey=1
}
var o2R=_v()
_(oZR,o2R)
if(_oz(z,72,e,s,gg)){o2R.wxVkey=1
}
c1R.wxXCkey=1
o2R.wxXCkey=1
_(oVR,oZR)
var hYR=_v()
_(oVR,hYR)
if(_oz(z,73,e,s,gg)){hYR.wxVkey=1
var ePT=_v()
_(hYR,ePT)
if(_oz(z,74,e,s,gg)){ePT.wxVkey=1
}
ePT.wxXCkey=1
}
hYR.wxXCkey=1
}
oVR.wxXCkey=1
}
xUR.wxXCkey=1
xUR.wxXCkey=3
_(r,oTR)
var bQT=_mz(z,'cart-subtotal',['bind:updateHiddenSubtotal',75,'cartTotal',1,'isHiddenSubtotal',2,'prevParams',3,'type',4],[],e,s,gg)
_(r,bQT)
var oRT=_v()
_(r,oRT)
var xST=_oz(z,81,e,s,gg)
var oTT=_gd(x[49],xST,e_,d_)
if(oTT){
var fUT=_1z(z,80,e,s,gg) || {}
var cur_globalf=gg.f
oRT.wxXCkey=3
oTT(fUT,fUT,oRT,gg)
gg.f=cur_globalf
}
else _w(xST,x[49],147,14)
bSR.pop()
return r
}
e_[x[49]]={f:m44,j:[],i:[],ti:[x[43]],ic:[]}
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
	__wxAppCode__['pages/search/components/coupon-float/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/coupon-float/index.wxml'] = [$gwx14, './pages/search/components/coupon-float/index.wxml'];else __wxAppCode__['pages/search/components/coupon-float/index.wxml'] = $gwx14( './pages/search/components/coupon-float/index.wxml' );
		__wxAppCode__['pages/search/components/filter-act/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/filter-act/index.wxml'] = [$gwx14, './pages/search/components/filter-act/index.wxml'];else __wxAppCode__['pages/search/components/filter-act/index.wxml'] = $gwx14( './pages/search/components/filter-act/index.wxml' );
		__wxAppCode__['pages/search/components/filter-bar/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/filter-bar/index.wxml'] = [$gwx14, './pages/search/components/filter-bar/index.wxml'];else __wxAppCode__['pages/search/components/filter-bar/index.wxml'] = $gwx14( './pages/search/components/filter-bar/index.wxml' );
		__wxAppCode__['pages/search/components/filter-panel/index.json'] = {"component":true,"usingComponents":{"address-layer":"/components/address-layer/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/filter-panel/index.wxml'] = [$gwx14, './pages/search/components/filter-panel/index.wxml'];else __wxAppCode__['pages/search/components/filter-panel/index.wxml'] = $gwx14( './pages/search/components/filter-panel/index.wxml' );
		__wxAppCode__['pages/search/components/goods-list/index.json'] = {"component":true,"usingComponents":{"item-mcoss":"../item-mcoss/index","mid-tags":"../mid-tags/index","mid-banner":"../mid-banner/index","mid-coupon":"../mid-coupon/index","mid-adshop":"../mid-adshop/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/goods-list/index.wxml'] = [$gwx14, './pages/search/components/goods-list/index.wxml'];else __wxAppCode__['pages/search/components/goods-list/index.wxml'] = $gwx14( './pages/search/components/goods-list/index.wxml' );
		__wxAppCode__['pages/search/components/hongbao-egg/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/hongbao-egg/index.wxml'] = [$gwx14, './pages/search/components/hongbao-egg/index.wxml'];else __wxAppCode__['pages/search/components/hongbao-egg/index.wxml'] = $gwx14( './pages/search/components/hongbao-egg/index.wxml' );
		__wxAppCode__['pages/search/components/item-mcoss/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/item-mcoss/index.wxml'] = [$gwx14, './pages/search/components/item-mcoss/index.wxml'];else __wxAppCode__['pages/search/components/item-mcoss/index.wxml'] = $gwx14( './pages/search/components/item-mcoss/index.wxml' );
		__wxAppCode__['pages/search/components/mid-adshop/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/mid-adshop/index.wxml'] = [$gwx14, './pages/search/components/mid-adshop/index.wxml'];else __wxAppCode__['pages/search/components/mid-adshop/index.wxml'] = $gwx14( './pages/search/components/mid-adshop/index.wxml' );
		__wxAppCode__['pages/search/components/mid-banner/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/mid-banner/index.wxml'] = [$gwx14, './pages/search/components/mid-banner/index.wxml'];else __wxAppCode__['pages/search/components/mid-banner/index.wxml'] = $gwx14( './pages/search/components/mid-banner/index.wxml' );
		__wxAppCode__['pages/search/components/mid-coupon/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/mid-coupon/index.wxml'] = [$gwx14, './pages/search/components/mid-coupon/index.wxml'];else __wxAppCode__['pages/search/components/mid-coupon/index.wxml'] = $gwx14( './pages/search/components/mid-coupon/index.wxml' );
		__wxAppCode__['pages/search/components/mid-tags/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/mid-tags/index.wxml'] = [$gwx14, './pages/search/components/mid-tags/index.wxml'];else __wxAppCode__['pages/search/components/mid-tags/index.wxml'] = $gwx14( './pages/search/components/mid-tags/index.wxml' );
		__wxAppCode__['pages/search/components/modal/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/modal/index.wxml'] = [$gwx14, './pages/search/components/modal/index.wxml'];else __wxAppCode__['pages/search/components/modal/index.wxml'] = $gwx14( './pages/search/components/modal/index.wxml' );
		__wxAppCode__['pages/search/components/pagination/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/pagination/index.wxml'] = [$gwx14, './pages/search/components/pagination/index.wxml'];else __wxAppCode__['pages/search/components/pagination/index.wxml'] = $gwx14( './pages/search/components/pagination/index.wxml' );
		__wxAppCode__['pages/search/components/search-bar/index.json'] = {"component":true,"usingComponents":{"smart-box":"../smart-box/index","smart-list":"../smart-list/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/search-bar/index.wxml'] = [$gwx14, './pages/search/components/search-bar/index.wxml'];else __wxAppCode__['pages/search/components/search-bar/index.wxml'] = $gwx14( './pages/search/components/search-bar/index.wxml' );
		__wxAppCode__['pages/search/components/shop-list/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/shop-list/index.wxml'] = [$gwx14, './pages/search/components/shop-list/index.wxml'];else __wxAppCode__['pages/search/components/shop-list/index.wxml'] = $gwx14( './pages/search/components/shop-list/index.wxml' );
		__wxAppCode__['pages/search/components/sku-switch/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/sku-switch/index.wxml'] = [$gwx14, './pages/search/components/sku-switch/index.wxml'];else __wxAppCode__['pages/search/components/sku-switch/index.wxml'] = $gwx14( './pages/search/components/sku-switch/index.wxml' );
		__wxAppCode__['pages/search/components/smart-box/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/smart-box/index.wxml'] = [$gwx14, './pages/search/components/smart-box/index.wxml'];else __wxAppCode__['pages/search/components/smart-box/index.wxml'] = $gwx14( './pages/search/components/smart-box/index.wxml' );
		__wxAppCode__['pages/search/components/smart-list/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/smart-list/index.wxml'] = [$gwx14, './pages/search/components/smart-list/index.wxml'];else __wxAppCode__['pages/search/components/smart-list/index.wxml'] = $gwx14( './pages/search/components/smart-list/index.wxml' );
		__wxAppCode__['pages/search/components/top-adshop/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/top-adshop/index.wxml'] = [$gwx14, './pages/search/components/top-adshop/index.wxml'];else __wxAppCode__['pages/search/components/top-adshop/index.wxml'] = $gwx14( './pages/search/components/top-adshop/index.wxml' );
		__wxAppCode__['pages/search/components/top-banner/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/top-banner/index.wxml'] = [$gwx14, './pages/search/components/top-banner/index.wxml'];else __wxAppCode__['pages/search/components/top-banner/index.wxml'] = $gwx14( './pages/search/components/top-banner/index.wxml' );
		__wxAppCode__['pages/search/components/top-car/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/top-car/index.wxml'] = [$gwx14, './pages/search/components/top-car/index.wxml'];else __wxAppCode__['pages/search/components/top-car/index.wxml'] = $gwx14( './pages/search/components/top-car/index.wxml' );
		__wxAppCode__['pages/search/components/top-category/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/top-category/index.wxml'] = [$gwx14, './pages/search/components/top-category/index.wxml'];else __wxAppCode__['pages/search/components/top-category/index.wxml'] = $gwx14( './pages/search/components/top-category/index.wxml' );
		__wxAppCode__['pages/search/components/top-coupon/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/top-coupon/index.wxml'] = [$gwx14, './pages/search/components/top-coupon/index.wxml'];else __wxAppCode__['pages/search/components/top-coupon/index.wxml'] = $gwx14( './pages/search/components/top-coupon/index.wxml' );
		__wxAppCode__['pages/search/components/top-notice/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/top-notice/index.wxml'] = [$gwx14, './pages/search/components/top-notice/index.wxml'];else __wxAppCode__['pages/search/components/top-notice/index.wxml'] = $gwx14( './pages/search/components/top-notice/index.wxml' );
		__wxAppCode__['pages/search/components/top-portal/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/top-portal/index.wxml'] = [$gwx14, './pages/search/components/top-portal/index.wxml'];else __wxAppCode__['pages/search/components/top-portal/index.wxml'] = $gwx14( './pages/search/components/top-portal/index.wxml' );
		__wxAppCode__['pages/search/components/top-shop/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/top-shop/index.wxml'] = [$gwx14, './pages/search/components/top-shop/index.wxml'];else __wxAppCode__['pages/search/components/top-shop/index.wxml'] = $gwx14( './pages/search/components/top-shop/index.wxml' );
		__wxAppCode__['pages/search/components/top-writer/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components/top-writer/index.wxml'] = [$gwx14, './pages/search/components/top-writer/index.wxml'];else __wxAppCode__['pages/search/components/top-writer/index.wxml'] = $gwx14( './pages/search/components/top-writer/index.wxml' );
		__wxAppCode__['pages/search/components_old/cart-subtotal/index.json'] = {"component":true,"usingComponents":{"gift-panel":"../gift-panel/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components_old/cart-subtotal/index.wxml'] = [$gwx14, './pages/search/components_old/cart-subtotal/index.wxml'];else __wxAppCode__['pages/search/components_old/cart-subtotal/index.wxml'] = $gwx14( './pages/search/components_old/cart-subtotal/index.wxml' );
		__wxAppCode__['pages/search/components_old/exhibition/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components_old/exhibition/index.wxml'] = [$gwx14, './pages/search/components_old/exhibition/index.wxml'];else __wxAppCode__['pages/search/components_old/exhibition/index.wxml'] = $gwx14( './pages/search/components_old/exhibition/index.wxml' );
		__wxAppCode__['pages/search/components_old/filter-panel/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components_old/filter-panel/index.wxml'] = [$gwx14, './pages/search/components_old/filter-panel/index.wxml'];else __wxAppCode__['pages/search/components_old/filter-panel/index.wxml'] = $gwx14( './pages/search/components_old/filter-panel/index.wxml' );
		__wxAppCode__['pages/search/components_old/filter-price/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components_old/filter-price/index.wxml'] = [$gwx14, './pages/search/components_old/filter-price/index.wxml'];else __wxAppCode__['pages/search/components_old/filter-price/index.wxml'] = $gwx14( './pages/search/components_old/filter-price/index.wxml' );
		__wxAppCode__['pages/search/components_old/filter-sort/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components_old/filter-sort/index.wxml'] = [$gwx14, './pages/search/components_old/filter-sort/index.wxml'];else __wxAppCode__['pages/search/components_old/filter-sort/index.wxml'] = $gwx14( './pages/search/components_old/filter-sort/index.wxml' );
		__wxAppCode__['pages/search/components_old/gift-panel/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components_old/gift-panel/index.wxml'] = [$gwx14, './pages/search/components_old/gift-panel/index.wxml'];else __wxAppCode__['pages/search/components_old/gift-panel/index.wxml'] = $gwx14( './pages/search/components_old/gift-panel/index.wxml' );
		__wxAppCode__['pages/search/components_old/good-count/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components_old/good-count/index.wxml'] = [$gwx14, './pages/search/components_old/good-count/index.wxml'];else __wxAppCode__['pages/search/components_old/good-count/index.wxml'] = $gwx14( './pages/search/components_old/good-count/index.wxml' );
		__wxAppCode__['pages/search/components_old/search-bar/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/components_old/search-bar/index.wxml'] = [$gwx14, './pages/search/components_old/search-bar/index.wxml'];else __wxAppCode__['pages/search/components_old/search-bar/index.wxml'] = $gwx14( './pages/search/components_old/search-bar/index.wxml' );
		__wxAppCode__['pages/search/list/list.json'] = {"navigationBarTitleText":"搜索","onReachBottomDistance":1800,"navigationStyle":"custom","usingComponents":{"nav-bar":"/components/nav-bar/nav-bar","quick-nav":"/components/quick-nav/quick-nav","search-bar":"../components/search-bar/index","top-adshop":"../components/top-adshop/index","top-shop":"../components/top-shop/index","top-writer":"../components/top-writer/index","top-car":"../components/top-car/index","top-category":"../components/top-category/index","top-portal":"../components/top-portal/index","top-coupon":"../components/top-coupon/index","top-banner":"../components/top-banner/index","top-notice":"../components/top-notice/index","filter-bar":"../components/filter-bar/index","filter-panel":"../components/filter-panel/index","filter-act":"../components/filter-act/index","goods-list":"../components/goods-list/index","pagination":"../components/pagination/index","shop-list":"../components/shop-list/index","sku-switch":"../components/sku-switch/index","hongbao-egg":"../components/hongbao-egg/index","coupon-float":"../components/coupon-float/index","modal":"../components/modal/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/list/list.wxml'] = [$gwx14, './pages/search/list/list.wxml'];else __wxAppCode__['pages/search/list/list.wxml'] = $gwx14( './pages/search/list/list.wxml' );
		__wxAppCode__['pages/search/subPackages/address/address.json'] = {"navigationBarTitleText":"配送地址","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/subPackages/address/address.wxml'] = [$gwx14, './pages/search/subPackages/address/address.wxml'];else __wxAppCode__['pages/search/subPackages/address/address.wxml'] = $gwx14( './pages/search/subPackages/address/address.wxml' );
		__wxAppCode__['pages/search/subPackages/brand/brand.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/subPackages/brand/brand.wxml'] = [$gwx14, './pages/search/subPackages/brand/brand.wxml'];else __wxAppCode__['pages/search/subPackages/brand/brand.wxml'] = $gwx14( './pages/search/subPackages/brand/brand.wxml' );
		__wxAppCode__['pages/search/subPackages/category/category.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/subPackages/category/category.wxml'] = [$gwx14, './pages/search/subPackages/category/category.wxml'];else __wxAppCode__['pages/search/subPackages/category/category.wxml'] = $gwx14( './pages/search/subPackages/category/category.wxml' );
		__wxAppCode__['pages/search/subPackages/coupon/coupon.json'] = {"navigationBarTitleText":"券购搜索","onReachBottomDistance":500,"usingComponents":{"filter-sort":"../../components_old/filter-sort/index","search-bar":"../../components_old/search-bar/index","exhibition":"../../components_old/exhibition/index","good-count":"../../components_old/good-count/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/subPackages/coupon/coupon.wxml'] = [$gwx14, './pages/search/subPackages/coupon/coupon.wxml'];else __wxAppCode__['pages/search/subPackages/coupon/coupon.wxml'] = $gwx14( './pages/search/subPackages/coupon/coupon.wxml' );
		__wxAppCode__['pages/search/subPackages/exchange/index.json'] = {"navigationBarTitleText":"换购商品","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/subPackages/exchange/index.wxml'] = [$gwx14, './pages/search/subPackages/exchange/index.wxml'];else __wxAppCode__['pages/search/subPackages/exchange/index.wxml'] = $gwx14( './pages/search/subPackages/exchange/index.wxml' );
		__wxAppCode__['pages/search/subPackages/filter/index.json'] = {"navigationBarTitleText":"筛选","usingComponents":{"filter-panel":"../../components_old/filter-panel/index","filter-price":"../../components_old/filter-price/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/subPackages/filter/index.wxml'] = [$gwx14, './pages/search/subPackages/filter/index.wxml'];else __wxAppCode__['pages/search/subPackages/filter/index.wxml'] = $gwx14( './pages/search/subPackages/filter/index.wxml' );
		__wxAppCode__['pages/search/subPackages/sales/sales.json'] = {"navigationBarTitleText":"促销搜索","onReachBottomDistance":500,"usingComponents":{"filter-sort":"../../components_old/filter-sort/index","search-bar":"../../components_old/search-bar/index","cart-subtotal":"../../components_old/cart-subtotal/index","gift-panel":"../../components_old/gift-panel/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/subPackages/sales/sales.wxml'] = [$gwx14, './pages/search/subPackages/sales/sales.wxml'];else __wxAppCode__['pages/search/subPackages/sales/sales.wxml'] = $gwx14( './pages/search/subPackages/sales/sales.wxml' );
	
	define("pages/search/api_old/Ptag_constants.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.CART_MH_PV="7014.18.21",exports.CART_MH_SUBMIT="7014.18.22",exports.CART_MH_SELECTION="7014.18.24",exports.CART_MH_SWITCH="7014.18.23",exports.SEARCH_INPUT_FOCUS="7429.4.1",exports.SEARCH_INPUT_CANCEL="7429.4.2",exports.SEARCH_INPUT_SEARCH="7429.4.3",exports.SEARCH_INPUT_X="7429.4.4",exports.SEARCH_HISTORY_CLICK="7429.4.5",exports.SEARCH_HISTORY_CLEAR="7429.4.6",exports.SEARCH_HOT_CLICK="7429.4.7",exports.SEARCH_HOT_REFRESH="7429.4.8",exports.SEARCH_HOT_CLICK_SHOW="7092.8.37",exports.SEARCH_HOT_CLICK_HIDDEN="7092.8.36",exports.SEARCH_SALES_INTO_LEFT="7429.4.19",exports.SEARCH_SALES_INTO_RIGHT="7429.4.20",exports.SEARCH_SMART_CLICK="7429.4.9",exports.SEARCH_SMART_LIST_FILTER="7429.4.14",exports.SEARCH_SMART_LIST_GLOBAL="7429.4.15",exports.SEARCH_SMART_LIST_ART="7429.4.16",exports.SEARCH_SMART_LIST_URL="7429.4.17",exports.SEARCH_SMART_TAG_CLICK="7429.4.10",exports.SEARCH_SMART_SHOP_CLICK="7429.4.11",exports.SEARCH_SIZE_CLICK="7429.4.12",exports.SEARCH_SIMILAR_BTN_CLICK="7429.6.4",exports.SEARCH_SIMILAR_MASK_CLICK="7429.6.5",exports.SEARCH_CLICK_KINGKONG="7429.6.9",exports.SEARCH_HIDDEN_WORD="138067.2.5",exports.EXP_SEARCH_HIDDEN_WORD="7562.1.1",exports.SEARCH_CLICK_ADDCART="7429.6.8",exports.SEARCH_SHOP_CATE_CLICK="7429.8.2",exports.SEARCH_SHOP_CLICK="7429.8.1",exports.SEARCH_SHOP_CLICKEND="7562.2.1",exports.SEARCH_ADVERT_SHOP_CLICK="7562.2.2",exports.SEARCH_ADVERT_PRODUCT_EXPOSE="7562.2.8",exports.SEARCH_ADVERT_SHOP_BIG_CLICK="7429.8.3",exports.SEARCH_ADVERT_SHOP_LINK_CLICK="7429.8.4",exports.SEARCH_SPEEDCHECK_CLICK="7429.4.13",exports.SEARCH_PPMS_SHOP_CLICK="7092.17.27",exports.EXP_SEARCH_PPMS_SHOP="37024.12.7",exports.SEARCH_CLICK_SHOP_TAB="7429.5.16",exports.EXP_SEARCH_RECOMMAND_WORD="7562.3.1",exports.EXP_SEARCH_AUTOFIX_WORD="7562.3.2",exports.EXP_SEARCH_ROLLBACK_FILTER="7562.3.3",exports.SEARCH_RECOMMAND_WORD_1="7429.7.3",exports.SEARCH_RECOMMAND_WORD_2="7429.7.4",exports.SEARCH_RECOMMAND_WORD_PRODUCT="7429.7.5",exports.SEARCH_AUTOFIX_WORD="7429.7.6",exports.SEARCH_TAB1_CLICK="7429.5.6",exports.SEARCH_TAB2_CLICK="7429.5.2",exports.SEARCH_TAB3_CLICK="7429.5.11",exports.SEARCH_TAB4_CLICK="7429.5.5",exports.SEARCH_ORDER_DEFAULT="7429.5.1",exports.SEARCH_ORDER_TIME="7429.5.7",exports.SEARCH_ORDER_PRICE_ASC="7429.5.8",exports.SEARCH_ORDER_PRICE_DESC="7429.5.9",exports.SEARCH_ORDER_COMMENT="7429.5.10",exports.SERCH_SERVICE_CHECKED="7429.5.12",exports.SERCH_SERVICE_UNCHECKED="7429.5.13",exports.SERCH_SERVICE_RESET="7429.5.14",exports.SERCH_SERVICE_CONFIRM="7429.5.15",exports.SEARCH_GOODS_ITEM="7429.6.1",exports.SEARCH_BACK_TOP="7429.6.2",exports.SEARCH_FILTER_ADDRESS="7430.10.1",exports.SEARCH_FILTER_ADDRESS_SELECT="7430.8.1",exports.SEARCH_FILTER_ADDRESS_EDITSELECT="7430.8.2",exports.EXP_SEARCH_OUTSIDE_FILTER_PINGGOU="7562.2.10",exports.SEARCH_OUTSIDE_FILTER_PINGGOU="7429.9.27",exports.EXP_SEARCH_OUTSIDE_FILTER_NEW="7562.2.20",exports.SEARCH_OUTSIDE_FILTER_NEW="7429.9.29",exports.EXP_SEARCH_OUTSIDE_FILTER_EXPRESS="7562.2.21",exports.SEARCH_OUTSIDE_FILTER_EXPRESS="7429.9.30",exports.EXP_SEARCH_OUTSIDE_FILTER_USED="7562.2.29",exports.SEARCH_OUTSIDE_FILTER_USED="7429.5.22",exports.SEARCH_OUTSIDE_FILTER_RESET="7429.9.5",exports.SEARCH_OUTSIDE_FILTER_COMFRIM="7429.9.6",exports.SEARCH_OUTSIDE_FILTER_TAB1_UNFLOD="7429.9.1",exports.SEARCH_OUTSIDE_FILTER_TAB1_FLOD="7429.9.2",exports.SEARCH_OUTSIDE_FILTER_OPTIONED1="7429.9.3",exports.SEARCH_OUTSIDE_FILTER_OPTION1="7429.9.4",exports.SEARCH_OUTSIDE_FILTER_TAB2_UNFLOD="7429.9.7",exports.SEARCH_OUTSIDE_FILTER_TAB2_FLOD="7429.9.8",exports.SEARCH_OUTSIDE_FILTER_OPTIONED2="7429.9.9",exports.SEARCH_OUTSIDE_FILTER_OPTION2="7429.9.10",exports.SEARCH_OUTSIDE_FILTER_TAB3_UNFLOD="7429.9.13",exports.SEARCH_OUTSIDE_FILTER_TAB3_FLOD="7429.9.14",exports.SEARCH_OUTSIDE_FILTER_OPTIONED3="7429.9.15",exports.SEARCH_OUTSIDE_FILTER_OPTION3="7429.9.16",exports.SEARCH_OUTSIDE_FILTER_TAB4_UNFLOD="7429.9.19",exports.SEARCH_OUTSIDE_FILTER_TAB4_FLOD="7429.9.20",exports.SEARCH_OUTSIDE_FILTER_OPTIONED4="7429.9.21",exports.SEARCH_OUTSIDE_FILTER_OPTION4="7429.9.22",exports.SEARCH_SALES_INPUT_FOCUS="7465.1.1",exports.SEARCH_SALES_INPUT_CANCEL="7465.1.3",exports.SEARCH_SALES_INPUT_SEARCH="7465.1.2",exports.SEARCH_SALES_GOTO_CART="7465.1.4",exports.SEARCH_SALES_TAB_DEFAULT="7465.3.1",exports.SEARCH_SALES_TAB_SALE="7465.3.2",exports.SEARCH_SALES_TAB_PRICE_ASC="7465.3.3",exports.SEARCH_SALES_TAB_PRICE_DESC="7465.3.4",exports.SEARCH_SALES_TAB_FILTER="7465.3.5",exports.SEARCH_SALES_GOODS_ITEM="7465.4.1",exports.SEARCH_SALES_ADD_CART="7465.4.2",exports.SEARCH_SALES_BACK_TOP="7465.4.3",exports.SEARCH_SALES_SUBTOTAL_CONFORM="7465.5.1",exports.SEARCH_SALES_SUBTOTAL_CLOSE="7465.5.2",exports.SEARCH_SALES_SUBTOTAL_ITEM_ONSELECT="7465.5.3",exports.SEARCH_SALES_SUBTOTAL_ITEM_OFFSELECT="7465.5.4",exports.SEARCH_SALES_SUBTOTAL_ITEM_GOEXCHANGE="7465.5.5",exports.SEARCH_SALES_SUBTOTAL_JJGTOCART="7465.5.6",exports.SEARCH_SALES_SUBTOTAL_MZTOCART="7465.5.7",exports.SEARCH_SALES_SUBTOTAL_MJTOCART="7465.5.8",exports.SEARCH_COUPON_INPUT_FOCUS="7466.1.1",exports.SEARCH_COUPON_INPUT_CANCEL="7466.1.3",exports.SEARCH_COUPON_INPUT_SEARCH="7466.1.2",exports.SEARCH_COUPON_GOTO_CART="7466.1.4",exports.SEARCH_COUPON_TAB_DEFAULT="7466.3.1",exports.SEARCH_COUPON_TAB_SALE="7466.3.2",exports.SEARCH_COUPON_TAB_PRICE_ASC="7466.3.3",exports.SEARCH_COUPON_TAB_PRICE_DESC="7466.3.4",exports.SEARCH_COUPON_TAB_FILTER="7466.3.5",exports.SEARCH_COUPON_GOODS_ITEM="7466.4.1",exports.SEARCH_COUPON_ADD_CART="7466.4.2",exports.SEARCH_COUPON_BACK_TOP="7466.4.3",exports.SEARCH_COUNT_CLOSE="7466.5.1",exports.SEARCH_COUNT_CHECKED="7466.5.2",exports.SEARCH_COUNT_UNCHECKED="7466.5.3",exports.SEARCH_COUNT_FOLD="7466.5.4",exports.SEARCH_COUNT_UNFOLD="7466.5.5",exports.SEARCH_COUNT_CART="7466.5.6",exports.SEARCH_COUNT_PAY="7466.5.7",exports.SEARCH_COUNT_BACK="7466.6.1",exports.SEARCH_COUNT_APAY="7466.6.2",exports.SEARCH_COUNT_OVERSEA="7466.6.3",exports.SEARCH_COUNT_NORMAL="7466.6.4",exports.FILTER_PRICE_INPUT_START="7430.5.1",exports.FILTER_PRICE_INPUT_END="7430.5.2",exports.FILTER_PRICE_SALES_INPUT_START="7465.3.8",exports.FILTER_PRICE_SALES_INPUT_END="7465.3.9",exports.FILTER_PRICE_COUPON_INPUT_START="7466.3.8",exports.FILTER_PRICE_COUPON_INPUT_END="7466.3.9",exports.FILTER_PRICE_FIRST_ACTIVE="7430.5.3",exports.FILTER_PRICE_FIRST_INACTIVE="7430.5.4",exports.FILTER_PRICE_SECOND_ACTIVE="7430.5.5",exports.FILTER_PRICE_SECOND_INACTIVE="7430.5.6",exports.FILTER_PRICE_THIRD_ACTIVE="7430.5.7",exports.FILTER_PRICE_THIRD_INACTIVE="7430.5.8",exports.FILTER_SERVICE_DEFAULT_PINGGOU="7430.2.13",exports.EXP_FILTER_SERVICE_DEFAULT_PINGGOU="7562.2.11",exports.FILTER_SERVICE_DEFAULT_JDEXPRESS="7430.2.1",exports.FILTER_SERVICE_DEFAULT_YOUHUO="7430.2.11",exports.FILTER_SERVICE_DEFAULT_HDFK="7430.2.12",exports.FILTER_SERVICE_DEFAULT_ZY="7430.2.4",exports.FILTER_SERVICE_DEFAULT_XINPIN="7430.2.5",exports.FILTER_SERVICE_DEFAULT_QQG="7430.2.6",exports.FILTER_SERVICE_DEFAULT_PLUS="7430.2.7",exports.FILTER_SERVICE_DEFAULT_SALESGOODS="7430.2.8",exports.FILTER_SERVICE_DEFAULT_JZD="7430.2.9",exports.FILTER_SERVICE_DEFAULT_ART="7430.2.2",exports.FILTER_ART_UNCHECK="7430.2.3",exports.FILTER_USED_UNCHECK="7430.2.15",exports.FILTER_SERVICE_DEFAULT_CONFIRM="7430.1.1",exports.FILTER_SERVICE_DEFAULT_RESET="7430.1.2",exports.FILTER_SERVICE_DEFAULT_IN="7430.6.1",exports.FILTER_SERVICE_DEFAULT_IN_CHECK="7430.6.2",exports.FILTER_SERVICE_SALES_CONFIRM="7465.3.6",exports.FILTER_SERVICE_SALES_RESET="7465.3.7",exports.FILTER_SERVICE_SALES_JDEXPRESS="7465.3.10",exports.FILTER_SERVICE_SALES_YOUHUO="7465.3.11",exports.FILTER_SERVICE_SALES_HDFK="7465.3.12",exports.FILTER_SERVICE_SALES_QQG="7465.3.13",exports.FILTER_SERVICE_SALES_SALESGOODS="7465.3.14",exports.FILTER_SERVICE_SALES_IN="7465.3.1",exports.FILTER_SERVICE_COUPON_CONFIRM="7466.3.6",exports.FILTER_SERVICE_COUPON_RESET="7466.3.7",exports.FILTER_SERVICE_COUPON_JDEXPRESS="7466.3.10",exports.FILTER_SERVICE_COUPON_YOUHUO="7466.3.11",exports.FILTER_SERVICE_COUPON_HDFK="7466.3.12",exports.FILTER_SERVICE_COUPON_QQG="7466.3.13",exports.FILTER_SERVICE_COUPON_SALESGOODS="7466.3.14",exports.FILTER_SERVICE_COUPON_IN="7466.3.1",exports.TAB_LIST_CLICK_SHOP="7429.9.25",exports.TAB_LIST_CLICK_SHOP_SKU="7429.9.26",exports.CLOSE_SIMILAR_MASK="7429.6.12",exports.CLICK_SIMILAR_MASK_SKU="7429.6.13",exports.CLICK_SIMILAR_MASK_MORE="7429.6.14",exports.EXPOSE_EMOJI="7562.2.3",exports.EXPOSE_BOX="7562.2.4",exports.CLOSE_BOXE_TAB="7429.6.19",exports.CLICK_BOXE_TAB="7429.6.20",exports.EXPOSE_FULL_SCREEN="7562.2.5",exports.CLOSE_FULL_SCREEN_EGG="7429.6.21",exports.CLICK_FULL_SCREEN_TAB="7429.6.22",exports.EXPOSE_NEWER_REDPACKET="7562.2.27",exports.CLICK_NEWER_REDPACKET="7429.6.28",exports.EXPOSE_EXHIBITION_COUPON="7562.2.6",exports.CLICK_EXHIBITION_COUPON="7429.8.5",exports.EXPOSE_EXHIBITION_LINKCOUPON="7562.2.29",exports.CLICK_EXHIBITION_LINKCOUPON="7429.8.18",exports.EXPOSE_EXHIBITION_AUTHOR="7562.2.7",exports.CLICK_EXHIBITION_AUTHOR="7429.8.6",exports.EXPOSE_TOPIC="7562.2.9",exports.CLICK_TOPIC="7429.6.23",exports.CLICK_SKU_SHOP="7429.6.24",exports.CLICK_SHOP_ON_HORIZONTAL="7429.6.15",exports.CLICK_SKU_ON_HORIZONTAL="7429.6.16",exports.CLICK_SHOP_ON_VERTICAL="7429.6.17",exports.CLICK_SKU_ON_VERTICAL="7429.6.18",exports.EXPOSE_SHOP_BELT="7562.2.12",exports.EXPOSE_RANK_CATEGORY="7562.2.18",exports.EXPOSE_RANK_ATTR="7562.2.19",exports.CLICK_RANK_CATEGORY="7429.6.25",exports.CLICK_RANK_ATTR="7429.6.26"; 
 			}); 
		define("pages/search/api_old/sf_constants.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.SF_RELATED_WORD=8,exports.SF_SEARCH_BAR=11,exports.SF_LIST_TEXT=12,exports.SF_LIST_TAG=13,exports.SF_HISTORY=14,exports.SF_HOT_WORD=15,exports.SF_SEARCH_SHOP=16,exports.SF_GLOBAL=17,exports.SF_ACTIVITY=19,exports.SF_SEARCH_NAME=20,exports.SF_SEARCH_REPLACE=31,exports.SF_SEARCH_SUGGEST=32,exports.SF_SEARCH_RECOMMEND=33,exports.SF_SEARCH_ACTURL=61,exports.SF_SEARCH_ART=62; 
 			}); 
		define("pages/search/common/js/base.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e){var o=Object.keys(t).map(function(e){return e+"="+t[e]}).join("&");return o&&(e+=(-1==e.indexOf("?")?"?":"&")+o),e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.observe=exports.reportSpeed=exports.meridianReport=exports.ptagReport=exports.request=exports.xgoto=exports.gotoItem=exports.toMiniProgram=exports.pageScrollTo=exports.JD=exports.event=exports.app=void 0;var o=require("./utils.js"),r=e(require("../../../../libs/emitter.js")),n=e(require("../../../../common/wxcontext.js")),i=require("../../../../common/request/request.js"),p=e(require("../../../../api/Ptag/report_manager_wqvue.js")),s=e(require("../../../../api/JDReport/weixinAppReport.js")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(require("../../../../common/navigator.js")),a=require("../../../../common/fe_report/speed.js"),c=exports.app=o.ENV.isXcx&&"function"==typeof getApp&&getApp()||{event:new r.default};exports.event=c.event,exports.JD=n.default.JD||{},exports.pageScrollTo=n.default.pageScrollTo,exports.toMiniProgram=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.ENV.isXcx&&"function"==typeof n.default.navigateToMiniProgram&&n.default.navigateToMiniProgram(e)},exports.gotoItem=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o.ENV.isXcx)u&&"function"==typeof u.gotoItem&&u.gotoItem(e,t);else{var r="//wqitem.jd.com/item/view?sku="+e.sku+"&price="+e.price;r="function"==typeof window.getItemLink?window.getItemLink(r):r;for(var n in e)-1==["sku","price"].indexOf(n)&&(r+="&"+n+"="+e[n]);window.location.href=r}},exports.xgoto=function(e){var r=e.xcx,n=void 0===r?null:r,i=e.h5,p=void 0===i?null:i;if(n="string"==typeof n?{url:n}:n,p="string"==typeof p?{url:p}:p,o.ENV.isXcx){var s="",a={},c="";if(!n&&p&&p.url)s="/pages/h5/index",a={url:t(p.url,p.params)},c=p.method||"";else{if(!n||!n.url)return;s=n.url,a=n.params||{},c=n.method||""}u&&"function"==typeof u.goto&&u.goto(s,a,{method:c})}else{if(!p||!p.url)return;var f=t(p.url,p.params);"redirectTo"===p.method?window.location.replace(f):window.location.href=f}};exports.request=i.request,exports.ptagReport=p.default,exports.meridianReport=s.default,exports.reportSpeed=function(e,t){o.ENV.isXcx&&a.Speed&&"function"==typeof a.Speed.reportAlone&&a.Speed.reportAlone(e,t)},exports.observe=function(e,t,r){var n=void 0,i=function(){},p=function(){"function"==typeof r&&r(),i()};if(o.ENV.isXcx){n=e.createIntersectionObserver(),i=function(){n&&("function"==typeof n.disconnect&&n.disconnect(),n=null)};try{n.relativeToViewport().observe(t,p)}catch(e){p()}}return{disconnect:i}}; 
 			}); 
		define("pages/search/common/js/fetch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e,o){var r={};for(var t in e)o.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r}function o(i){var d=i.url,s=i.data,c=void 0===s?{}:s,l=i.autoLogin,v=void 0!==l&&l,m=i.codeName,g=void 0===m?"errCode":m,p=i.loginCode,f=void 0===p?13:p,j=e(i,["url","data","autoLogin","codeName","loginCode"]);u.ENV.isM&&(c.sceneval=2);var y={url:d,data:c,dataType:j.dataType||(u.ENV.isXcx?"json":"jsonp")};return j.ump&&(y.ump=j.ump),j.timeout&&(y.timeout=j.timeout),n.request.get(y).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.body;return v&&t[g]==f?(0,a.doLogin)().then(function(){return o(r({url:d,data:c,autoLogin:!1,codeName:g,loginCode:f},j))}):e}).catch(function(e){var o=e.code,r=e.message;return console.warn(d+" 获取失败，code:"+o+"，message:"+r),t.default.reject({code:o,message:r})})}Object.defineProperty(exports,"__esModule",{value:!0});var r=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e};exports.default=o;var t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../libs/promise.min")),n=require("../../../../common/request/request.js"),a=require("../../../../common/login/loginv1"),u=require("./utils.js"); 
 			}); 
		define("pages/search/common/js/helper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.gotoItem=void 0;var e=require("./base.js"),s=require("../../list/stores/filter.store.js"),i=require("../../list/managers/report.manager.js"),r=require("./utils.js");exports.gotoItem=function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t)if(t.tourl&&(t.isPaimai||t.isEstate||t.isPopLease||t.isQiyeyanji))(0,e.xgoto)({h5:t.tourl});else{var a={sku:o.sku||t.wareid,price:o.price||t.price&&Array.isArray(t.price.value)&&t.price.value.join(".")||"",pos:t.cgind,csid:t.csid};(0,s.getFilter)("col_type")&&(a.dist="jd");var p=(0,i.getReportInfo)()||{};p.mtest&&(a.ss_mtest=p.mtest),t.pps&&(a.pps=t.pps),a.key=t.keyword||"";var u=15294==t.catid,n={isPingou:t.isPingou,useH5:t.isYushou||u,isJx:t.isJx};r.ENV.isXcx&&(a.cover=o.image||t.Content.imageurl,a.name=t.Content.warename,a.report={as:t.as,csid:t.csid}),(0,e.gotoItem)(a,n)}}; 
 			}); 
		define("pages/search/common/js/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.systemInfo=exports.ENV=void 0;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.throttle=function(e,t){var n=0;return function(){var o=Date.now();if(!(o-n<t)){n=o;for(var r=arguments.length,u=Array(r),i=0;i<r;i++)u[i]=arguments[i];return e.apply(this,u)}}},exports.debounce=function(e,t){var n=null;return function(){for(var o=this,r=arguments.length,u=Array(r),i=0;i<r;i++)u[i]=arguments[i];n&&clearTimeout(n),n=setTimeout(function(){n=null,e.apply(o,u)},t)}},exports.decode=function(e){try{return decodeURIComponent(e)}catch(t){return e}},exports.formatDate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=arguments[1],n=new Date;n.setTime(e);var o={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};/(y+)/i.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in o)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?o[r]:("00"+o[r]).substr((""+o[r]).length)));return t},exports.getImg=function(e,n,o){for(var r,u=arguments.length,i=Array(u>3?u-3:0),s=3;s<u;s++)i[s-3]=arguments[s];return(r=t.default.JD.img).getImgUrl.apply(r,[e,n,o].concat(i)).replace(/^http:/,"https:")},exports.htmlDecode=function(e){var t={"&lt;":"<","&gt;":">","&quot;":'"',"&nbsp;":" ","&#39;":"'","&apos;":"'","&amp;":"&"},n=new RegExp("("+Object.keys(t).join("|")+")","g");return"string"!=typeof e?"":e.replace(n,function(e){return t[e]||e})},exports.htmlEncode=function(e){var t={"<":"&lt;",">":"&gt;"," ":"&nbsp;",'"':"&quot;","'":"&apos;","&":"&amp;"},n=new RegExp("("+Object.keys(t).join("|")+")","g");return"string"!=typeof e?"":e.replace(n,function(e){return t[e]||e})},exports.getProp=function(e,t){if(!e||!t)return e;for(var n=t.split("."),o=e,r="",u=0;u<n.length;u++)if(r=n[u],!(o=o[r]))return;return o};var t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../common/wxcontext"));exports.ENV={isWx:"weixin"==t.default.JD.device.scene,isSq:"qq"==t.default.JD.device.scene,isM:!t.default.isXCX&&"object"==("undefined"==typeof location?"undefined":e(location))&&/(^|[&|?])sceneval=2([&|#]|$)/.test(location.search)||"object"==("undefined"==typeof document?"undefined":e(document))&&-1!=(document.domain||"").indexOf("m.jd.com"),isXcx:t.default.isXCX},exports.systemInfo=t.default.getSystemInfoSync()||{}; 
 			}); 
		define("pages/search/components/modal/modal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},o={};exports.install=function(t){o=t},exports.confirm=function(n){n="string"==typeof n?{content:n}:n,o._showModal(t({},n,{showCancel:!0}))},exports.alert=function(n){n="string"==typeof n?{content:n}:n,o._showModal(t({},n,{showCancel:!1}))},exports.toast=function(t){t="string"==typeof t?{content:t}:t,o._showToast(t)}; 
 			}); 
		define("pages/search/components/search-bar/commands.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function t(e){var t=e.title,o=void 0===t?"":t,n=e.content,s=void 0===n?"":n,c=e.confirmText,i=void 0===c?"知道了":c,a=e.callback;wx.showModal({title:o,content:s,showCancel:!1,confirmText:i,success:function(e){e.confirm?(a&&a(),console.log("用户点击确定")):e.cancel&&console.log("用户点击取消")}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.cmdProcessHandle=exports.getArrayCommand=exports.isCommandCode=exports.commandLists=void 0;var o=e(require("../../../../common/cookie-v2/cookie.js")),n=e(require("../../../../common/navigator.js")),s=getApp(),c={"//getsysinfo":"系统信息","//getsys":"系统信息","//getNetwork":"网络类型","//getNet":"网络类型","//getLocation":"当前的地理位置、速度","//clearStorage":"清除本地缓存","//cls":"清除本地缓存","//clskey":"清除本地缓存cookies字段wq_skey值字段","//mdfskey":"模拟登录态过期","//rmPPMS":"清除本地缓存ppms数据","//getvk":"获取cookie里的visitkey"},i={"手机品牌":"brand","手机型号":"model","设备像素比":"pixelRatio","屏幕宽度":"screenWidth","屏幕高度":"screenHeight","可使用窗口宽度":"windowWidth","可使用窗口高度":"windowHeight","微信设置的语言":"language","微信版本号":"version","操作系统版本":"system","客户端平台":"platform","用户字体大小设置":"fontSizeSetting","客户端基础库版本":"SDKVersion"};exports.commandLists=c,exports.isCommandCode=function(e){return c.hasOwnProperty(e)},exports.getArrayCommand=function(){var e=[];return Object.keys(c).map(function(t){e.push({cmd:t,info:c[t]})}),e},exports.cmdProcessHandle=function(e){var a=void 0,r="";if(a=""+c[e],/^\/\/goto\s(http|https:\/\/\w+)/.test(e)){var l=e.replace(/^\/\/goto\s(http|https:\/\/\w+)/,function(e,t){return t});t({title:"跳转H5",content:"将要跳转到 "+l+" ",callback:function(){n.goto("/pages/h5/index",{url:l})}})}else switch(e){case"//getsysinfo":case"//getsys":wx.getSystemInfo({success:function(e){Object.values(i).map(function(t){t in e&&(r+=t+": \t\t "+e[t]+"\r\n")}),r+="version: \t\t "+s.version+"\r\n",t({title:a,content:r})},fail:function(){wx.showToast({title:"获取"+a,icon:"none",duration:2e3})}});break;case"//getNetwork":case"//getNet":wx.getNetworkType({success:function(e){var o={"网络类型":"networkType"};Object.values(o).map(function(t){t in e&&(r+=t+": \t\t "+e[t]+"\n")}),t({title:a,content:r})},fail:function(){wx.showToast({title:"获取"+a,icon:"none",duration:2e3})}});break;case"//getLocation":wx.getLocation({success:function(e){var o={"纬度":"latitude","经度":"longitude","速度":"speed","位置的精确度":"accuracy","高度":"altitude","垂直精度":"verticalAccuracy","水平精度":"horizontalAccuracy"};Object.values(o).map(function(t){t in e&&(r+=t+": \t\t "+e[t]+"\n")}),t({title:a,content:r})},fail:function(){wx.showToast({title:"获取"+a,icon:"none",duration:2e3})}});break;case"//clearStorage":case"//cls":try{wx.clearStorageSync(),t({title:"本地缓存清除成功"})}catch(e){wx.showToast({title:"清理失败",icon:"none",duration:2e3})}break;case"//clskey":try{o.removeCookie(["wq_skey"]),t({title:"本地缓存cookies字段wq_skey值清除成功"})}catch(e){wx.showToast({title:"清理wq_skey值失败",icon:"none",duration:2e3})}break;case"//mdfskey":try{o.setCookie({data:{wq_skey:{key:"wq_skey",value:"1234",maxAge:2592e6}}}),t({title:"模拟登录态过期已设置成功"})}catch(e){wx.showToast({title:"模拟登录态过期失败",icon:"none",duration:2e3})}break;case"//rmPPMS":try{var u=wx.getStorageInfoSync();u.keys&&u.keys.map(function(e){/Request_https/.test(e)&&wx.removeStorageSync(e)}),t({title:"本地缓存PPMS数据清除成功"})}catch(e){wx.showToast({title:"清理ppms数据失败",icon:"none",duration:2e3})}break;case"//getvk":try{t({content:"获取到cookie中visitkey为"+o.getCookie("visitkey")})}catch(e){wx.showToast({title:"获取cookie里的visitkey失败",icon:"none",duration:2e3})}}}; 
 			}); 
		define("pages/search/components_old/filter_status_ptag.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return 0!=n.length&&(n=new Map(n.map(function(e){return[e.name,"FILTER_SERVICE_"+t.toUpperCase()+"_"+e.key]}))).get(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.FilterStatusPtag=void 0;var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),a=require("../path.js"),r=require("../../../api/Ptag/Ptag_utils.js"),i={serviceNameList:[{name:"京东物流",key:"JDEXPRESS"},{name:"有货优先",key:"YOUHUO"},{name:"货到付款",key:"HDFK"},{name:"全球购商品",key:"QQG"},{name:"促销商品",key:"SALESGOODS"},{name:"211限时达",key:"ZY"},{name:"新品",key:"XINPIN"},{name:"PLUS专享价",key:"PLUS"},{name:"京尊达",key:"JZD"},{name:"艺术品",key:"ART"}],btnNameList:[{name:"确定",key:"CONFIRM"},{name:"重置",key:"RESET"},{name:"分类",key:"IN"}]},u=function(){function u(){e(this,u)}return n(u,null,[{key:"reportServicePtag",value:function(e,n,u){var o=t(e,n,i[u]);o&&r.PtagUtils.addPtag(a.Ptag[o])}}]),u}();exports.FilterStatusPtag=u; 
 			}); 
		define("pages/search/components_old/search-bar/commands.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function t(e){var t=e.title,o=void 0===t?"":t,n=e.content,s=void 0===n?"":n,c=e.confirmText,i=void 0===c?"知道了":c,a=e.callback;wx.showModal({title:o,content:s,showCancel:!1,confirmText:i,success:function(e){e.confirm?(a&&a(),console.log("用户点击确定")):e.cancel&&console.log("用户点击取消")}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.cmdProcessHandle=exports.getArrayCommand=exports.isCommandCode=exports.commandLists=void 0;var o=e(require("../../../../common/cookie-v2/cookie.js")),n=e(require("../../../../common/navigator.js")),s=getApp(),c={"//getsysinfo":"系统信息","//getsys":"系统信息","//getNetwork":"网络类型","//getNet":"网络类型","//getLocation":"当前的地理位置、速度","//clearStorage":"清除本地缓存","//cls":"清除本地缓存","//clskey":"清除本地缓存cookies字段wq_skey值字段","//mdfskey":"模拟登录态过期","//rmPPMS":"清除本地缓存ppms数据","//getvk":"获取cookie里的visitkey"},i={"手机品牌":"brand","手机型号":"model","设备像素比":"pixelRatio","屏幕宽度":"screenWidth","屏幕高度":"screenHeight","可使用窗口宽度":"windowWidth","可使用窗口高度":"windowHeight","微信设置的语言":"language","微信版本号":"version","操作系统版本":"system","客户端平台":"platform","用户字体大小设置":"fontSizeSetting","客户端基础库版本":"SDKVersion"};exports.commandLists=c,exports.isCommandCode=function(e){return c.hasOwnProperty(e)},exports.getArrayCommand=function(){var e=[];return Object.keys(c).map(function(t){e.push({cmd:t,info:c[t]})}),e},exports.cmdProcessHandle=function(e){var a=void 0,r="";if(a=""+c[e],/^\/\/goto\s(http|https:\/\/\w+)/.test(e)){var l=e.replace(/^\/\/goto\s(http|https:\/\/\w+)/,function(e,t){return t});t({title:"跳转H5",content:"将要跳转到 "+l+" ",callback:function(){n.goto("/pages/h5/index",{url:l})}})}else switch(e){case"//getsysinfo":case"//getsys":wx.getSystemInfo({success:function(e){Object.values(i).map(function(t){t in e&&(r+=t+": \t\t "+e[t]+"\r\n")}),r+="version: \t\t "+s.version+"\r\n",t({title:a,content:r})},fail:function(){wx.showToast({title:"获取"+a,icon:"none",duration:2e3})}});break;case"//getNetwork":case"//getNet":wx.getNetworkType({success:function(e){var o={"网络类型":"networkType"};Object.values(o).map(function(t){t in e&&(r+=t+": \t\t "+e[t]+"\n")}),t({title:a,content:r})},fail:function(){wx.showToast({title:"获取"+a,icon:"none",duration:2e3})}});break;case"//getLocation":wx.getLocation({success:function(e){var o={"纬度":"latitude","经度":"longitude","速度":"speed","位置的精确度":"accuracy","高度":"altitude","垂直精度":"verticalAccuracy","水平精度":"horizontalAccuracy"};Object.values(o).map(function(t){t in e&&(r+=t+": \t\t "+e[t]+"\n")}),t({title:a,content:r})},fail:function(){wx.showToast({title:"获取"+a,icon:"none",duration:2e3})}});break;case"//clearStorage":case"//cls":try{wx.clearStorageSync(),t({title:"本地缓存清除成功"})}catch(e){wx.showToast({title:"清理失败",icon:"none",duration:2e3})}break;case"//clskey":try{o.removeCookie(["wq_skey"]),t({title:"本地缓存cookies字段wq_skey值清除成功"})}catch(e){wx.showToast({title:"清理wq_skey值失败",icon:"none",duration:2e3})}break;case"//mdfskey":try{o.setCookie({data:{wq_skey:{key:"wq_skey",value:"1234",maxAge:2592e6}}}),t({title:"模拟登录态过期已设置成功"})}catch(e){wx.showToast({title:"模拟登录态过期失败",icon:"none",duration:2e3})}break;case"//rmPPMS":try{var u=wx.getStorageInfoSync();u.keys&&u.keys.map(function(e){/Request_https/.test(e)&&wx.removeStorageSync(e)}),t({title:"本地缓存PPMS数据清除成功"})}catch(e){wx.showToast({title:"清理ppms数据失败",icon:"none",duration:2e3})}break;case"//getvk":try{t({content:"获取到cookie中visitkey为"+o.getCookie("visitkey")})}catch(e){wx.showToast({title:"获取cookie里的visitkey失败",icon:"none",duration:2e3})}}}; 
 			}); 
		define("pages/search/constants/meridian.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.CLICK_SMARTBOX_ACTIVE="JDShopping_SearchResult_SearchArea",exports.CLICK_SMARTBOX_DELETE="JDShopping_SearchResult_SearchKeyDelete",exports.CLICK_SMARTBOX_SEARCH="JDShopping_Search_Search",exports.CLICK_SMARTBOX_SEARCH_DARK="JDShopping_Search_Search",exports.CLICK_SMARTBOX_CLEAR="JDShopping_Search_DeleteKey",exports.CLICK_SMARTBOX_HISTORY="JDShopping_Search_LastSearch",exports.CLICK_SMARTBOX_HISTORY_CLEAR="JDShopping_Search_ClearLastSearch",exports.CLICK_SMARTBOX_HOT="JDShopping_Search_HotSearchKey",exports.CLICK_SMARTBOX_HOT_RRESH="JDShopping_Search_HotSearchChange",exports.CLICK_SMARTBOX_HOT_SHOW="JDShopping_Search_HotSearchHide",exports.CLICK_SMARTBOX_HOT_HIDE="JDShopping_Search_HotSearchHide",exports.CLICK_SMARTBOX_ACT="JDShopping_Search_ActivityList",exports.CLICK_SMARTBOX_ACT_MORE="JDShopping_Search_ActivityList",exports.CLICK_SMARTBOX_LIST="JDShopping_Search_SmartboxRecommendLeft",exports.CLICK_SMARTBOX_LIST_TAG="JDShopping_Search_SmartboxRecommendRight",exports.CLICK_SMARTBOX_LIST_QUICK="JDShopping_Search_SmartboxRecommendRightArrow",exports.CLICK_SMARTBOX_LIST_SHOP="JDShopping_Search_SmartboxRecommend",exports.CLICK_SMARTBOX_LIST_GLOBAL="JDShopping_Search_SmartboxRecommend",exports.CLICK_SMARTBOX_LIST_ACT="JDShopping_Search_SmartboxRecommend",exports.CLICK_SMARTBOX_LIST_ART="JDShopping_Search_SmartboxRecommend",exports.CLICK_SMARTBOX_LIST_URL="JDShopping_Search_SmartboxRecommend",exports.CLICK_TOP_CATEGORY="JDShopping_SearchResult_CategoryFloor",exports.CLICK_TOP_SHOP="JDShopping_SearchResult_CarouselShopFloor",exports.CLICK_TOP_SHOP_SLIP="JDShopping_SearchResult_CarouselShopFloorSlip",exports.CLICK_TOP_AD_SHOP_JINGXUAN_IMAGE="JDShopping_SearchResult_AdvertiseShopFloor",exports.CLICK_TOP_AD_SHOP_JINGXUAN_LINK="JDShopping_SearchResult_AdvertiseShopFloor",exports.CLICK_TOP_AD_SHOP_JINGXUAN_LINK_BTN="JDShopping_SearchResult_AdvertiseShopFloor4Btn",exports.CLICK_TOP_COUPON_PRECISE="JDShopping_SearchResult_CouponFloor",exports.CLICK_TOP_COUPON_PPMS="JDShopping_SearchResult_CouponFloorPPMS",exports.CLICK_TOP_WRITER="JDShopping_SearchResult_BookAuthorFloor",exports.CLICK_TOP_PORTAL="JDShopping_SearchResult_LibraryAreaFloor",exports.EXPOSE_TOP="JDShopping_SearchResult_TopActivityExpo",exports.CLICK_BAR_MODE_CHANGE="JDShopping_SearchResult_SearchTab",exports.CLICK_BAR_TAB_SHOP="JDShopping_SearchResult_SearchTab",exports.CLICK_BAR_SORT="JDShopping_SearchResult_SearchTab",exports.CLICK_BAR_SORT_SALE="JDShopping_SearchResult_SearchTab",exports.CLICK_BAR_SERVICE="JDShopping_SearchResult_SearchTab",exports.CLICK_BAR_FILTER="JDShopping_SearchResult_SearchTab",exports.CLICK_DROP_SORT_COMPREHENSIVE="JDShopping_SearchResult_ComprehensiveList",exports.CLICK_DROP_SORT_WINSDATE_DESC="JDShopping_SearchResult_ComprehensiveList",exports.CLICK_DROP_SORT_PRICE_ASC="JDShopping_SearchResult_ComprehensiveList",exports.CLICK_DROP_SORT_PRICE_DESC="JDShopping_SearchResult_ComprehensiveList",exports.CLICK_DROP_SORT_COMMENT_DESC="JDShopping_SearchResult_ComprehensiveList",exports.CLICK_DROP_SERVICE_RESET="JDShopping_SearchResult_ListReset",exports.CLICK_DROP_SERVICE_CONFIRM="JDShopping_SearchResult_ListCommit",exports.CLICK_BAR_QUICK="JDShopping_SearchResult_SearchSecondTab",exports.CLICK_DROP_FILTER_QUICK_RESET="JDShopping_SearchResult_ListReset",exports.CLICK_DROP_FILTER_QUICK_COMFRIM="JDShopping_SearchResult_ListCommit",exports.CLICK_BAR_FILTER_BANNER_ACT_CHECK="JDShopping_SearchResult_SearchThirdTab",exports.CLICK_BAR_FILTER_BANNER_ACT_UNCHECK="JDShopping_SearchResult_SearchThirdTab",exports.CLICK_FILTER_CONFIRM="JDShopping_SearchResult_FilterConfirm",exports.CLICK_FILTER_RESET="JDShopping_SearchResult_FilterReset",exports.CLICK_FILTER_CANCEL="JDShopping_SearchResult_FilterXClose",exports.CLICK_FILTER_CANCEL_BG="JDShopping_SearchResult_FilterEmptyClose",exports.EXPOSE_ITEM="JDShopping_SearchResult_ProductExpo",exports.CLICK_ITEM="JDShopping_SearchResult_Product",exports.CLICK_ITEM_SHOP="JDShopping_SearchResult_ProductGoShop",exports.CLICK_ITEM_ADDCART="JDShopping_SearchResult_ProductGoCart",exports.CLICK_MIDDLE_ADSHOP_IN_LIST="JDShopping_SearchResult_AdvertiseInFloor",exports.CLICK_MIDDLE_ADSHOP_SKU_IN_LIST="JDShopping_SearchResult_AdvertiseInFloor",exports.CLICK_MIDDLE_ADSHOP_IN_IMAGE="JDShopping_SearchResult_AdvertiseInFloor",exports.CLICK_MIDDLE_ADSHOP_SKU_IN_IMAGE="JDShopping_SearchResult_AdvertiseInFloor",exports.CLICK_MIDDLE_COUPON="JDShopping_SearchResult_CouponInFloor",exports.CLICK_MIDDLE_BANNER="JDShopping_SearchResult_BannerInFloor",exports.CLICK_MIDDLE_TAG_JINGXUAN="JDShopping_SearchResult_KeyWordsInFloor",exports.CLICK_MIDDLE_TAG_SMART="JDShopping_SearchResult_KeyWordsInFloor",exports.CLICK_PSEUDO_TOPIC="JDShopping_SearchResult_TalkInFloor",exports.CLICK_PSEUDO_RANK="JDShopping_SearchResult_SmartListInFloor",exports.CLICK_PSEUDO_RANK_ATTR="JDShopping_SearchResult_SmartListInFloor",exports.EXPOSE_MIDDLE="JDShopping_Search_InFloorExpo",exports.CLICK_OTHER_BACK_TOP="JDShopping_SearchResult_ProductGoTop",exports.CLICK_SC_SMARTBOX_FOCUS="JDS_CoupSearch_SearchFocus",exports.CLICK_SC_SMARTBOX_SEARCH="JDS_CoupSearch_Search",exports.CLICK_SC_SMARTBOX_CART="JDS_CoupSearch_CartIcon",exports.CLICK_SC_SMARTBOX_DELETE="JDS_CoupSearch_SearchDelete",exports.CLICK_SC_BAR_DEFAULT="JDS_CoupSearch_Tab",exports.CLICK_SC_BAR_SALE="JDS_CoupSearch_Tab",exports.CLICK_SC_BAR_PRICE_ASC="JDS_CoupSearch_Tab",exports.CLICK_SC_BAR_PRICE_DESC="JDS_CoupSearch_Tab",exports.CLICK_SC_BAR_FILTER="JDS_CoupSearch_Tab",exports.CLICK_SC_FILTER_CONFIRM="JDS_CoupSearch_FilterCommit",exports.CLICK_SC_FILTER_RESET="JDS_CoupSearch_FilterReset",exports.CLICK_SC_ITEM="JDS_CoupSearch_Product",exports.CLICK_SC_ITEM_CART="JDS_CoupSearch_ProductCart",exports.CLICK_SC_OTHER_BACK_TOP="JDS_CoupSearch_ProductTop",exports.CLICK_SC_COUNT_CART="JDS_CoupSearch_BackCart",exports.CLICK_SP_SMARTBOX_FOCUS="JDS_PromSearch_SearchFocus",exports.CLICK_SP_SMARTBOX_SEARCH="JDS_PromSearch_Search",exports.CLICK_SP_SMARTBOX_CART="JDS_PromSearch_CartIcon",exports.CLICK_SP_SMARTBOX_DELETE="JDS_PromSearch_SearchDelete",exports.CLICK_SP_BAR_DEFAULT="JDS_PromSearch_Tab",exports.CLICK_SP_BAR_SALE="JDS_PromSearch_Tab",exports.CLICK_SP_BAR_PRICE_ASC="JDS_PromSearch_Tab",exports.CLICK_SP_BAR_PRICE_DESC="JDS_PromSearch_Tab",exports.CLICK_SP_BAR_FILTER="JDS_PromSearch_Tab",exports.CLICK_SP_FILTER_CONFIRM="JDS_PromSearch_FilterCommit",exports.CLICK_SP_FILTER_RESET="JDS_PromSearch_FilterReset",exports.CLICK_SP_ITEM="JDS_PromSearch_Product",exports.CLICK_SP_ITEM_CART="JDS_PromSearch_ProductCart",exports.CLICK_SP_OTHER_BACK_TOP="JDS_PromSearch_ProductTop",exports.CLICK_SP_COUNT_CART_JJG="JDS_PromSearch_BackCart",exports.CLICK_SP_COUNT_CART_MZ="JDS_PromSearch_BackCart",exports.CLICK_SP_COUNT_CART_MJ="JDS_PromSearch_BackCart",exports.CLICK_EX_CATEGORY="JDS_ProExchange_FilterItem",exports.CLICK_EX_ITEM_TOGGLE="JDS_ProExchange_Choose",exports.CLICK_EX_SUBMIT="JDS_ProExchange_ConfirmExch",exports.CLICK_EX_COUNT_MODAL_SHOW="JDS_ProExchange_ViewSubtotal",exports.CLICK_EX_COUNT_MODAL_HIDE="JDS_ProExchange_ViewSubtotal_Close",exports.CLICK_EX_COUNT_MODAL_CONFIRM="JDS_ProExchange_ViewSubtotal_Confirm",exports.CLICK_EX_COUNT_MODAL_TOGGLE="JDS_ProExchange_ViewSubtotal_Choose"; 
 			}); 
		define("pages/search/constants/ppms.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e,r,P){return r in e?Object.defineProperty(e,r,{value:P,enumerable:!0,configurable:!0,writable:!0}):e[r]=P,e}Object.defineProperty(exports,"__esModule",{value:!0});var r,P=exports.PPMS_ACT=27706,o=exports.PPMS_CATEGORY=28246,_=exports.PPMS_SHARE=28442,t=exports.PPMS_EGG=28950,s=exports.PPMS_HONGBAO=30628,M=exports.PPMS_CAR=35596,a=exports.PPMS_TOP_COUPON=36532,A=exports.PPMS_SMARTBOX_ATMOSPHERE=36546,S=exports.PPMS_SMARTBOX_ACTIVITY=36548,p=exports.PPMS_KEYWORDS=36780,T=exports.PPMS_FLOAT_COUPON=36872,O=exports.PPMS_TOP_BANNER=36960;exports.PPMS_MAP=(r={},e(r,P,"_actInfo"),e(r,o,"_categoryInfo"),e(r,_,"searchShareCon"),e(r,t,"_searchEggs"),e(r,s,"_searchHbEggs"),e(r,M,"_searchCarData"),e(r,a,"_searchTopCoupon"),e(r,A,"_smartboxAtmosphere"),e(r,S,"_smartboxActivity"),e(r,p,"_searchKeywords"),e(r,T,"_searchFloatCoupon"),e(r,O,"_searchTopBanner"),r),exports.PPMS_CATEGORY_MAP={CART:0,BELT:1,SHORT_TITLE:2,CAR:3,BABY:4,AUCTION:5,COMMENT:6,RANKING:7,ESTATE:8,ART:9},exports.PPMS_KEYWORDS_MAP={MEDICINE:0}; 
 			}); 
		define("pages/search/constants/ptag.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.CLICK_SMARTBOX_FOCUS="7429.4.1",exports.CLICK_SMARTBOX_CANCEL="7429.4.2",exports.CLICK_SMARTBOX_SEARCH="138926.1.2",exports.CLICK_SMARTBOX_SEARCH_DARK="138926.1.1",exports.CLICK_SMARTBOX_SEARCH_DARK_URL="138926.1.5",exports.CLICK_SMARTBOX_CLEAR="7429.4.4",exports.CLICK_SMARTBOX_HISTORY="138926.2.1",exports.CLICK_SMARTBOX_HISTORY_CLEAR="7429.4.6",exports.CLICK_SMARTBOX_HISTORY_FOLD="7429.4.22",exports.CLICK_SMARTBOX_HISTORY_UNFOLD="7429.4.21",exports.EXPOSE_SMARTBOX_HISTORY_UNFOLD="7562.1.2",exports.CLICK_SMARTBOX_HOT="138926.3.xxx",exports.CLICK_SMARTBOX_HOT_RRESH="7429.4.8",exports.CLICK_SMARTBOX_HOT_SHOW="7092.8.37",exports.CLICK_SMARTBOX_HOT_HIDE="7092.8.36",exports.CLICK_SMARTBOX_ACT="7429.4.19",exports.CLICK_SMARTBOX_ACT_MORE="7429.4.20",exports.CLICK_SMARTBOX_LIST="7429.4.9",exports.CLICK_SMARTBOX_LIST_TAG="7429.4.10",exports.CLICK_SMARTBOX_LIST_QUICK="7429.4.13",exports.CLICK_SMARTBOX_LIST_SHOP="7429.4.11",exports.CLICK_SMARTBOX_LIST_GLOBAL="7429.4.15",exports.CLICK_SMARTBOX_LIST_ACT="7429.4.14",exports.CLICK_SMARTBOX_LIST_ART="7429.4.16",exports.CLICK_SMARTBOX_LIST_URL="7429.4.17",exports.EXPOSE_SMARTBOX_DARKTEXT="7562.1.1",exports.CLICK_TOP_CATEGORY="7429.8.2",exports.EXPOSE_TOP_LOOP_SHOP="7562.2.1",exports.CLICK_TOP_SHOP="7429.8.1",exports.EXPOSE_TOP_AD_SHOP_JINGXUAN="7562.2.2",exports.CLICK_TOP_AD_SHOP_JINGXUAN_IMAGE="7429.8.3",exports.CLICK_TOP_AD_SHOP_JINGXUAN_LINK="7429.8.4",exports.EXPOSE_TOP_COUPON_PRECISE="7562.2.6",exports.CLICK_TOP_COUPON_PRECISE="7429.8.5",exports.EXPOSE_TOP_COUPON_PPMS="7562.2.29",exports.CLICK_TOP_COUPON_PPMS="7429.8.18",exports.EXPOSE_TOP_WRITER="7562.2.7",exports.CLICK_TOP_WRITER="7429.8.6",exports.EXPOSE_TOP_PORTAL="37024.12.7",exports.CLICK_TOP_PORTAL="7092.17.27",exports.CLICK_BAR_MODE_CHANGE="7429.4.12",exports.CLICK_BAR_TAB_SHOP="7429.5.16",exports.CLICK_BAR_SORT="7429.5.6",exports.CLICK_BAR_SORT_SALE="7429.5.2",exports.CLICK_BAR_SERVICE="7429.5.11",exports.CLICK_BAR_FILTER="7429.5.5",exports.CLICK_DROP_SORT_COMPREHENSIVE="7429.5.1",exports.CLICK_DROP_SORT_WINSDATE_DESC="7429.5.7",exports.CLICK_DROP_SORT_PRICE_ASC="7429.5.8",exports.CLICK_DROP_SORT_PRICE_DESC="7429.5.9",exports.CLICK_DROP_SORT_COMMENT_DESC="7429.5.10",exports.CLICK_DROP_SERVICE_CHECKED="7429.5.12",exports.CLICK_DROP_SERVICE_UNCHECKED="7429.5.13",exports.CLICK_DROP_SERVICE_RESET="7429.5.14",exports.CLICK_DROP_SERVICE_CONFIRM="7429.5.15",exports.EXPOSE_BAR_SERVICE_PINGOU="7562.2.10",exports.CLICK_BAR_SERVICE_PINGOU="7429.9.27",exports.EXPOSE_BAR_SERVICE_XINPIN="7562.2.20",exports.CLICK_BAR_SERVICE_XINPIN="7429.9.29",exports.EXPOSE_BAR_SERVICE_JINGDONGWULIU="7562.2.21",exports.CLICK_BAR_SERVICE_JINGDONGWULIU="7429.9.30",exports.CLICK_DROP_FILTER_QUICK_RESET="7429.9.5",exports.CLICK_DROP_FILTER_QUICK_COMFRIM="7429.9.6",exports.CLICK_BAR_FILTER_QUICK_1_UNFLOD="7429.9.1",exports.CLICK_BAR_FILTER_QUICK_1_FLOD="7429.9.2",exports.CLICK_DROP_FILTER_QUICK_1_CHECK="7429.9.3",exports.CLICK_DROP_FILTER_QUICK_1_UNCHECK="7429.9.4",exports.CLICK_BAR_FILTER_QUICK_2_UNFLOD="7429.9.7",exports.CLICK_BAR_FILTER_QUICK_2_FLOD="7429.9.8",exports.CLICK_DROP_FILTER_QUICK_2_CHECK="7429.9.9",exports.CLICK_DROP_FILTER_QUICK_2_UNCHECK="7429.9.10",exports.CLICK_BAR_FILTER_QUICK_3_UNFLOD="7429.9.13",exports.CLICK_BAR_FILTER_QUICK_3_FLOD="7429.9.14",exports.CLICK_DROP_FILTER_QUICK_3_CHECK="7429.9.15",exports.CLICK_DROP_FILTER_QUICK_3_UNCHECK="7429.9.16",exports.CLICK_BAR_FILTER_QUICK_4_UNFLOD="7429.9.19",exports.CLICK_BAR_FILTER_QUICK_4_FLOD="7429.9.20",exports.CLICK_DROP_FILTER_QUICK_4_CHECK="7429.9.21",exports.CLICK_DROP_FILTER_QUICK_4_UNCHECK="7429.9.22",exports.EXPOSE_BAR_FILTER_BANNER_ACT="7562.2.26",exports.CLICK_BAR_FILTER_BANNER_ACT_CHECK="7429.5.20",exports.CLICK_BAR_FILTER_BANNER_ACT_UNCHECK="7429.5.21",exports.EXPOSE_FILTER_SERVICE_PINGOU="7562.2.11",exports.CLICK_FILTER_SERVICE_PINGGOU="7430.2.13",exports.CLICK_FILTER_SERVICE_JINGDONGWULIU="7430.2.1",exports.CLICKFILTER_SERVICE_JINGZUNDAO="7430.2.9",exports.CLICK_FILTER_SERVICE_YOUHUOYOUXIAN="7430.2.11",exports.CLICK_FILTER_SERVICE_HUODAOFUKUAN="7430.2.12",exports.CLICK_FILTER_SERVICE_211="7430.2.4",exports.CLICK_FILTER_SERVICE_XINPIN="7430.2.5",exports.CLICK_FILTER_SERVICE_GLOBAL="7430.2.6",exports.CLICK_FILTER_SERVICE_PLUS="7430.2.7",exports.CLICK_FILTER_SERVICE_SALESGOODS="7430.2.8",exports.CLICK_FILTER_SERVICE_ART="7430.2.2",exports.CLICK_FILTER_SERVICE_ART_UNCHECK="7430.2.3",exports.CLICK_FILTER_CONFIRM="7430.1.1",exports.CLICK_FILTER_RESET="7430.1.2",exports.CLICK_FILTER_CATEGORY_ENTER="7430.6.1",exports.CLICK_FILTER_CATEGORY_CHECK="7430.6.2",exports.CLICK_FILTER_PRICE_INPUT_MIN="7430.5.1",exports.CLICK_FILTER_PRICE_INPUT_MAX="7430.5.2",exports.CLICK_FILTER_PRICE_1_ACTIVE="7430.5.3",exports.CLICK_FILTER_PRICE_1_INACTIVE="7430.5.4",exports.CLICK_FILTER_PRICE_2_ACTIVE="7430.5.5",exports.CLICK_FILTER_PRICE_2_INACTIVE="7430.5.6",exports.CLICK_FILTER_PRICE_3_ACTIVE="7430.5.7",exports.CLICK_FILTER_PRICE_3_INACTIVE="7430.5.8",exports.EXPOSE_AD_ITEM="7562.2.8",exports.CLICK_ITEM="7429.6.1",exports.CLICK_ITEM_SHOP="7429.6.24",exports.CLICK_ITEM_ADDCART="7429.6.8",exports.CLICK_ITEM_SIMILAR_BTN="7429.6.4",exports.CLICK_ITEM_SIMILAR_MASK="7429.6.5",exports.EXPOSE_NORESULT_RECOMMAND="7562.3.1",exports.EXPOSE_NORESULT_AUTOFIX="7562.3.2",exports.EXPOSE_NORESULT_FALLBACK="7562.3.3",exports.CLICK_NORESULT_AUTOFIX="7429.7.6",exports.CLICK_NORESULT_RECOMMAND_1="7429.7.3",exports.CLICK_NORESULT_RECOMMAND_2="7429.7.4",exports.EXPOSE_NORESULT_TO_YIYAO="137886.7.1",exports.CLICK_NORESULT_TO_YIYAO="7429.7.7",exports.EXPOSE_MIDDLE_ADSHOP="7562.2.12",exports.CLICK_MIDDLE_ADSHOP_IN_LIST="7429.6.15",exports.CLICK_MIDDLE_ADSHOP_SKU_IN_LIST="7429.6.16",exports.CLICK_MIDDLE_ADSHOP_IN_IMAGE="7429.6.17",exports.CLICK_MIDDLE_ADSHOP_SKU_IN_IMAGE="7429.6.18",exports.CLICK_MIDDLE_BANNER="7429.6.9",exports.CLICK_MIDDLE_TAG_JINGXUAN="7429.6.35",exports.CLICK_MIDDLE_TAG_SMART="7429.6.36",exports.EXPOSE_PSEUDO_TOPIC="7562.2.9",exports.CLICK_PSEUDO_TOPIC="7429.6.23",exports.EXPOSE_PSEUDO_RANK="7562.2.18",exports.EXPOSE_PSEUDO_RANK_ATTR="7562.2.19",exports.CLICK_PSEUDO_RANK="7429.6.25",exports.CLICK_PSEUDO_RANK_ATTR="7429.6.26",exports.CLICK_SHOP_ENTER="7429.9.25",exports.CLICK_SHOP_SKU="7429.9.26",exports.EXPOSE_HONGBAO_NEWER="7562.2.27",exports.CLICK_HONGBAO_NEWER="7429.6.28",exports.EXPOSE_FLOAT_COUPON="7562.2.30",exports.CLICK_FLOAT_COUPON_DRAW="7429.6.30",exports.CLICK_FLOAT_COUPON_CLOSE="7429.6.31",exports.EXPOSE_FLOAT_COUPON_SUCCESS="7562.2.32",exports.EXPOSE_FLOAT_COUPON_FAIL="7562.2.33",exports.EXPOSE_FLOAT_COUPON_ENTER="7562.2.31",exports.CLICK_FLOAT_COUPON_ENTER="7429.6.33",exports.CLICK_FLOAT_COUPON_ENTER_CLOSE="7429.6.34",exports.CLICK_OTHER_BACK_TOP="7429.6.2",exports.CLICK_OTHER_TO_FOOTPRINT="7429.6.32",exports.CLICK_SC_SMARTBOX_FOCUS="7466.1.1",exports.CLICK_SC_SMARTBOX_CANCEL="7466.1.3",exports.CLICK_SC_SMARTBOX_SEARCH="7466.1.2",exports.CLICK_SC_SMARTBOX_CART="7466.1.4",exports.CLICK_SC_BAR_DEFAULT="7466.3.1",exports.CLICK_SC_BAR_SALE="7466.3.2",exports.CLICK_SC_BAR_PRICE_ASC="7466.3.3",exports.CLICK_SC_BAR_PRICE_DESC="7466.3.4",exports.CLICK_SC_BAR_FILTER="7466.3.5",exports.CLICK_SC_ITEM="7466.4.1",exports.CLICK_SC_ITEM_CART="7466.4.2",exports.CLICK_SC_OTHER_BACK_TOP="7466.4.3",exports.CLICK_SC_COUNT_CART="7466.5.6",exports.CLICK_SC_COUNT_PAY="7466.5.7",exports.CLICK_SC_COUNT_CLOSE="7466.5.1",exports.CLICK_SC_COUNT_CHECKED="7466.5.2",exports.CLICK_SC_COUNT_UNCHECKED="7466.5.3",exports.CLICK_SC_COUNT_FOLD="7466.5.4",exports.CLICK_SC_COUNT_UNFOLD="7466.5.5",exports.CLICK_SC_COUNT_BACK="7466.6.1",exports.CLICK_SC_COUNT_APAY="7466.6.2",exports.CLICK_SC_COUNT_OVERSEA="7466.6.3",exports.CLICK_SC_COUNT_NORMAL="7466.6.4",exports.CLICK_SP_SMARTBOX_FOCUS="7465.1.1",exports.CLICK_SP_SMARTBOX_CANCEL="7465.1.3",exports.CLICK_SP_SMARTBOX_SEARCH="7465.1.2",exports.CLICK_SP_SMARTBOX_CART="7465.1.4",exports.CLICK_SP_BAR_DEFAULT="7465.3.1",exports.CLICK_SP_BAR_SALE="7465.3.2",exports.CLICK_SP_BAR_PRICE_ASC="7465.3.3",exports.CLICK_SP_BAR_PRICE_DESC="7465.3.4",exports.CLICK_SP_BAR_FILTER="7465.3.5",exports.CLICK_SP_ITEM="7465.4.1",exports.CLICK_SP_ITEM_CART="7465.4.2",exports.CLICK_SP_OTHER_BACK_TOP="7465.4.3",exports.CLICK_SP_COUNT_CART_JJG="7465.5.6",exports.CLICK_SP_COUNT_CART_MZ="7465.5.7",exports.CLICK_SP_COUNT_CART_MJ="7465.5.8",exports.CLICK_SP_COUNT_EXCHANGE="7465.5.5",exports.CLICK_SP_COUNT_MODAL_CONFIRM="7465.5.1",exports.CLICK_SP_COUNT_MODAL_CLOSE="7465.5.2",exports.CLICK_SP_COUNT_MODAL_SELECT="7465.5.3",exports.CLICK_SP_COUNT_MODAL_UNSELECT="7465.5.4",exports.EXPOSE_EX_PAGE="7014.18.21",exports.CLICK_EX_CATEGORY="7014.18.23",exports.CLICK_EX_SUBMIT="7014.18.22",exports.CLICK_EX_COUNT_MODAL_SHOW="7014.18.24",exports.SEARCH_HIDDEN_WORD="138067.2.5",exports.SEARCH_RECOMMAND_WORD_PRODUCT="7429.7.5",exports.SEARCH_FILTER_ADDRESS="7430.10.1",exports.SEARCH_FILTER_ADDRESS_SELECT="7430.8.1",exports.SEARCH_FILTER_ADDRESS_EDITSELECT="7430.8.2",exports.FILTER_PRICE_SALES_INPUT_START="7465.3.8",exports.FILTER_PRICE_SALES_INPUT_END="7465.3.9",exports.FILTER_PRICE_COUPON_INPUT_START="7466.3.8",exports.FILTER_PRICE_COUPON_INPUT_END="7466.3.9",exports.FILTER_SERVICE_SALES_CONFIRM="7465.3.6",exports.FILTER_SERVICE_SALES_RESET="7465.3.7",exports.FILTER_SERVICE_SALES_JDEXPRESS="7465.3.10",exports.FILTER_SERVICE_SALES_YOUHUO="7465.3.11",exports.FILTER_SERVICE_SALES_HDFK="7465.3.12",exports.FILTER_SERVICE_SALES_QQG="7465.3.13",exports.FILTER_SERVICE_SALES_SALESGOODS="7465.3.14",exports.FILTER_SERVICE_SALES_IN="7465.3.1",exports.FILTER_SERVICE_COUPON_CONFIRM="7466.3.6",exports.FILTER_SERVICE_COUPON_RESET="7466.3.7",exports.FILTER_SERVICE_COUPON_JDEXPRESS="7466.3.10",exports.FILTER_SERVICE_COUPON_YOUHUO="7466.3.11",exports.FILTER_SERVICE_COUPON_HDFK="7466.3.12",exports.FILTER_SERVICE_COUPON_QQG="7466.3.13",exports.FILTER_SERVICE_COUPON_SALESGOODS="7466.3.14",exports.FILTER_SERVICE_COUPON_IN="7466.3.1",exports.CLOSE_SIMILAR_MASK="7429.6.12",exports.CLICK_SIMILAR_MASK_SKU="7429.6.13",exports.CLICK_SIMILAR_MASK_MORE="7429.6.14",exports.EXPOSE_EMOJI="7562.2.3",exports.EXPOSE_BOX="7562.2.4",exports.CLOSE_BOXE_TAB="7429.6.19",exports.CLICK_BOXE_TAB="7429.6.20",exports.EXPOSE_FULL_SCREEN="7562.2.5",exports.CLOSE_FULL_SCREEN_EGG="7429.6.21",exports.CLICK_FULL_SCREEN_TAB="7429.6.22"; 
 			}); 
		define("pages/search/constants/sf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.SF_RELATED_WORD=8,exports.SF_SEARCH_BAR=11,exports.SF_LIST_TEXT=12,exports.SF_LIST_TAG=13,exports.SF_HISTORY=14,exports.SF_HOT_WORD=15,exports.SF_SEARCH_SHOP=16,exports.SF_GLOBAL=17,exports.SF_ACTIVITY=19,exports.SF_SEARCH_NAME=20,exports.SF_SEARCH_REPLACE=31,exports.SF_SEARCH_SUGGEST=32,exports.SF_SEARCH_RECOMMEND=33,exports.SF_SEARCH_ACTURL=61,exports.SF_SEARCH_ART=62; 
 			}); 
		define("pages/search/list/managers/ppms.manager.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return(e||Date.now()-c<f)&&u?u:(c=Date.now(),u=(0,n.getMultiPPMS)([a.PPMS_ACT,a.PPMS_CATEGORY,a.PPMS_CAR,a.PPMS_HONGBAO,a.PPMS_EGG,a.PPMS_TOP_COUPON,a.PPMS_SMARTBOX_ATMOSPHERE,a.PPMS_SMARTBOX_ACTIVITY,a.PPMS_KEYWORDS,a.PPMS_FLOAT_COUPON,a.PPMS_TOP_BANNER]).then(function(e){s.act=(e[a.PPMS_ACT]||[]).filter(function(e){var t=(e.channel||"").indexOf("jd")>-1,r=new Date,n=e.startTime||e.stime,o=e.endTime||e.etime;return n=n?new Date(n):0,o=o?new Date(o):0,e.cid2s=(e.cid2s||"").split("|").filter(function(e){return e}),e.catids=(e.catids||"").split("|").filter(function(e){return e}),t&&e.actid&&e.name&&r>=n&&(0==o||r<=o)}).sort(function(e,t){return t.qt-e.qt}),s.category=(e[a.PPMS_CATEGORY]||[]).map(function(e){return[(e.cid1s||"").split("|").filter(function(e){return e}),(e.cid2s||"").split("|").filter(function(e){return e}),(e.cid3s||"").split("|").filter(function(e){return e})]}),s.car=e[a.PPMS_CAR]||[],s.hongbao=(e[a.PPMS_HONGBAO]||[]).filter(function(e){var t=!0;switch(parseInt(e.chanle)){case 1:t=i.ENV.isWx;break;case 2:t=i.ENV.isSq;break;case 3:t=i.ENV.isXcx}var r=!1;if(e.btime&&e.etime2){var n=Date.now(),o=Date.parse(e.btime),a=Date.parse(e.etime2);r=n>=o&&n<=a}return e.isNewUserHongbao=["newUserCoupon","newUserRedEnvelope"].indexOf(e.tplName)>=0,e.activeid=i.ENV.isXcx||i.ENV.isWx?e.activeidwx:e.activeidsq,t&&r}).sort(function(e){return e.isNewUserHongbao?-1:1}),s.egg=(e[a.PPMS_EGG]||[]).filter(function(e){var t=!0;switch(parseInt(e.chanle)){case 1:t=i.ENV.isWx;break;case 2:t=i.ENV.isSq;break;case 3:t=i.ENV.isXcx}var r=!1;if(e.type&&e.btime&&e.etime&&e.etime2){var n=Date.now(),o=Date.parse(e.btime),a=Date.parse(2==e.type?e.etime2:e.etime);r=n>=o&&n<=a}return t&&r}),s.top_coupon=(e[a.PPMS_TOP_COUPON]||[]).filter(function(e){var t=Date.now();return Date.parse(e.constraintBeginTime)<=t&&Date.parse(e.constraintEndTime)>=t&&Date.parse(e.couponEndTime)>=t}),s.smartbox_atmosphere=(e[a.PPMS_SMARTBOX_ATMOSPHERE]||[]).filter(function(e){var t=Date.now();return Date.parse(e.startTime)<=t&&Date.parse(e.endTime)>=t&&(e.bg_top||e.bg_bottom)}),s.smartbox_activity=(e[a.PPMS_SMARTBOX_ACTIVITY]||[]).filter(function(e){var t=Date.now();return Date.parse(e.startTime)<=t&&Date.parse(e.endTime)>=t&&e.name&&e.url}),s.keywords=(e[a.PPMS_KEYWORDS]||[]).map(function(e){return e.keywords.split("|").filter(function(e){return e})}),s.float_coupon=(e[a.PPMS_FLOAT_COUPON]||[]).filter(function(e){var t=Date.now(),r=Date.parse(e.startTime)<=t&&Date.parse(e.endTime)>=t&&Date.parse(e.couponEndTime)>=t;return e.text&&e.keys&&(e.roleId&&e.couponKey||e.couponPutkey)&&r}),s.top_banner=(e[a.PPMS_TOP_BANNER]||[]).filter(function(e){var t=Date.now(),r=Date.parse(e.startTime)<=t&&Date.parse(e.endTime)>=t,n=(e.channel||"").indexOf("0")>-1;return r&&n})}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTopBanner=exports.getFloatCoupon=exports.getKeywords=exports.getSmartboxActivity=exports.getSmartboxAtmosphere=exports.getTopCoupon=exports.getEgg=exports.getHongbao=exports.getCarInfo=exports.inCategory=exports.getAct=exports.initPPMS=void 0;var t=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../libs/promise.min")),n=require("../../model/ppms.js"),o=require("../../model/search-index.js"),i=require("../../common/js/utils.js"),a=require("../../constants/ppms.js"),s={act:[],category:[],car:[],hongbao:[],egg:[],top_coupon:[],smartbox_atmosphere:[],smartbox_activity:[],keywords:[],float_coupon:[],top_banner:[]},u=null,c=null,f=6e5;exports.initPPMS=e,exports.getAct=function(e,t){return(s.act||[]).filter(function(r){if(0==r.cid2s.length&&0==r.catids.length)return!0;for(var n=0;n<r.cid2s.length;n++){var o=r.cid2s[n];if(e.indexOf(o)>-1)return!0}for(var i=0;i<r.catids.length;i++){var a=r.catids[i];if(t.indexOf(a)>-1)return!0}return!1})},exports.inCategory=function(e){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t(r,3),o=n[0],i=void 0===o?"":o,a=n[1],u=void 0===a?"":a,c=n[2],f=[i,u,void 0===c?"":c],p=s.category[e]||[],l=0;l<p.length;l++)if(-1!=p[l].indexOf(f[l]))return!0;return!1},exports.getCarInfo=function(){var e=s.car&&s.car[0];if(e){var t=[],r={},n={},o={};return(e.keywords?e.keywords.split("|"):[]).forEach(function(e){e&&!o[e]&&(o[e]=!0,t.push({keyword:e,mark:1,type:"default"}))}),(e.map||{}).forEach(function(e){r[e.key]=(0,i.getImg)(e.url),n[e.key]=e.text}),{keys:t,imgMap:r,descMap:n}}},exports.getHongbao=function(t){return e(!0).then(function(){return s.hongbao.find(function(e){return e.isNewUserHongbao})?(0,o.checkIsNewUser)():r.default.resolve()}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return s.hongbao.filter(function(r){return r.isNewUserHongbao?e:1==r.ematch?r.keys.split("|").indexOf(t)>=0:new RegExp(r.keys,"i").test(t)})[0]})},exports.getEgg=function(t){return e(!0).then(function(){return s.egg.filter(function(e){return 1==e.ematch?e.keys.split("|").indexOf(t)>=0:new RegExp(e.keys,"i").test(t)})[0]})},exports.getTopCoupon=function(e){return(s.top_coupon||[]).filter(function(t){return e&&-1!=t.keys.split("|").indexOf(e)})},exports.getSmartboxAtmosphere=function(){return e().then(function(){return(s.smartbox_atmosphere||[])[0]})},exports.getSmartboxActivity=function(){return e().then(function(){return s.smartbox_activity||[]})},exports.getKeywords=function(e){return(s.keywords||[])[e]},exports.getFloatCoupon=function(t){return e(!0).then(function(){return(s.float_coupon||[]).filter(function(e){return t&&-1!=e.keys.split("|").indexOf(t)})[0]})},exports.getTopBanner=function(e){return(s.top_banner||[]).find(function(t){return e&&-1!=t.keys.split("|").indexOf(e)})}; 
 			}); 
		define("pages/search/list/managers/report.manager.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function t(){return{source:"wqvue",sf:h.sf||"",search_kwd:encodeURIComponent(h.keyword||""),ss_hccid1s:h.hcCid1s||"",ss_hccid2s:h.hcCid2s||"",ss_hccid3s:h.hcCid3s||"",ss_mtest:h.mtest}}function o(e,o,r){e&&(d[e]&&(o=Object.assign({},t(),o),p.ptagReport.addPtagExposure(d[e],o)),c[e]&&(r=Object.assign({eid:c[e]},r),g.exposure(r)))}function r(e,o,r){if(e){var i=d[e];i&&(o&&o.realPtag&&(i=i.replace("xxx",o.realPtag),delete o.realPtag),o=Object.assign({},t(),o),p.ptagReport.addPtag(i,o)),c[e]&&(r=Object.assign({eid:c[e]},r),g.click(r))}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1],o=arguments[2];e&&p.request.get({url:e,data:t,ump:o,dataType:"text",priority:"REPORT"}).catch(function(e){console.error(e)})}function s(e){return e?{skuid:e.wareid,pos:e.cgind,ss_page:e.page||1,ss_price:parseFloat(e.price._value).toFixed(2)||"",ss_pos_type:e.isAd?"ad":"normal",ss_ver:e.ver,ifad:e.ifad,event_id:e.eventid,csid:e.csid,pingou:e.isPingou?1:""}:{}}function n(e){if(!e)return{};var t=e.tags||{};return{eparam:[e.wareid,e.cgind-1,e.isAd?1:0,(t.title||[]).map(function(e){return e&&e.name||""}).join("#")||-1,(t.price||[]).map(function(e){return e&&e.name||""}).join("#")||-1,(t.comment||[]).concat(t.price_bottom).map(function(e){return e&&e.name||""}).join("#")||-1,(t.shop||[]).map(function(e){return e&&e.name||""}).join("#")||-1,(0,u.genMeridianReportParams)()].join("_")}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.reportItemExposureToMeridian=exports.collectExposureItem=exports.getItemClickMeridianParams=exports.getMeridian=exports.initMeridian=exports.reportItemToAd=exports.reportItemClick=exports.reportAdItemExposure=exports.reportItemExposure=exports.reportPv=exports.reportPPS=exports.reportAd=exports.reportClick=exports.reportExposure=exports.getReportInfo=exports.initReportInfo=void 0;var p=require("../../common/js/base.js"),a=require("../../common/js/utils.js"),d=e(require("../../constants/ptag.js")),c=e(require("../../constants/meridian.js")),u=require("../stores/filter.store.js"),l=759,g=p.meridianReport.init(),_=[],h={};exports.initReportInfo=function(e){var t=e.keyword,o=void 0===t?"":t,r=e.sf,i=void 0===r?"":r,s=e.mtest,n=void 0===s?"":s,p=e.upf,a=void 0===p?"":p,d=e.act,c=void 0===d?"":d,u=e.hcCid1s,l=void 0===u?"":u,g=e.hcCid2s,_=void 0===g?"":g,f=e.hcCid3s,m=void 0===f?"":f,x=e.rewrite,v=void 0===x?{}:x,j=e.requerySearch;h={keyword:o,sf:i,mtest:n,upf:a,act:c,hcCid1s:l,hcCid2s:_,hcCid3s:m,rewrite:v,requerySearch:void 0===j?"":j}},exports.getReportInfo=function(){return h},exports.reportExposure=o,exports.reportClick=r,exports.reportAd=i,exports.reportPPS=function(e){p.request.get({url:"https://wq.jd.com/mcoss/rpds/report",data:{pps:(0,a.decode)(e)},priority:"REPORT"}).then(function(e){console.log("pps 点击上报成功")}).catch(function(e){console.warn("pps 点击上报失败")})},exports.reportPv=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments[1],o=arguments[2],r=arguments[3];p.ptagReport.addSearchPagePv("http://wq.jd.com/wxapp/pages/search/list/list",encodeURIComponent(h.keyword),0==e?0:1,r.sf||"",h.hcCid1s||"",h.hcCid2s||"",h.hcCid3s||"",h.mtest||"",r.projectId||"",t,o),g.pv()},exports.reportItemExposure=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments[2],r=arguments[3],i=arguments[4],s=arguments[5],n=arguments[6],a=arguments[7],d=[],c=[],u=[],l=[],g=[],_=[];(e||[]).forEach(function(e,t){e.isAd?(c.push(e.wareid),u.push(e.wareid+"|"+(t+1)),g.push(e.wareid+",0,0,0,0,0,0,0,0"),l.push(e.flow_order)):(d.push(e.wareid),g.push(e.showlog_new+","+(e.wareInStock||"0")+",0,0"),e.isPingou&&_.push(e.wareid))});var f=((h.hcCid3s||"").split(";")||[])[0]||"",m={source:"wqvue",sf:n.sf,ss_exp_type:1,search_kwd:encodeURIComponent(h.keyword),intenid:f,actid:n.as||0,exp_sku_list:d.join("_"),exp_sku_qtty:d.length,ad_sku_list:u.join(","),wids_info:g.length>0?g.join(";")+";":"",pg_sku_list:_.join(","),ifad:a.ifad,event_id:a.eventid,csid:a.csid||"",ss_page:t||1,user_psn_flag:h.upf||"",ss_act:h.act||"",ss_hccid1s:h.hcCid1s||"",ss_hccid2s:h.hcCid2s||"",ss_hccid3s:h.hcCid3s||"",ss_mtest:h.mtest||""},x=null;if(c.length&&(x=Object.assign({},m,{ss_exp_type:2,exp_sku_list:c.join("_"),exp_sku_qtty:c.length,flow_order:l.join("_")})),o){var v=o.child_link||[];m.belt_adshop_skus=v.map(function(e){return e.sku_id}).join(",")}if(r&&r.length){var j=[];r.forEach(function(){((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).tag_list||[]).forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.taglog&&j.push(e.taglog)})}),m.exp_attr_cou="b_"+j.length,m.exp_attr_log=j.join("_")}i&&(m.exp_cate_log=i.map(function(e){return e.taglog}).join("|")),s&&(m.ss_recword="1",m.ss_reqsea=h.requerySearch),d.length&&p.ptagReport.addSearchPageExposure(m),c.length&&p.ptagReport.addSearchPageExposure(x)},exports.reportAdItemExposure=function(e,t){e&&(p.ptagReport.addPtag(d.EXPOSE_AD_ITEM,{csid:t}),i(e,{csid:t}))},exports.reportItemClick=function(e){e&&(e.isAd&&i(e.click_url,{csid:e.csid},{bizId:l,opId:11}),r("CLICK_ITEM",s(e),n(e)))},exports.reportItemToAd=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";if(e&&e.length&&r){var n=(e||[]).map(function(e){return{sku_id:e.wareid,spu_id:e.product_id,order:e.ind+"",source_sys:e.isAd?"1":"0"}}),a={device_id:"",pos_id:r||"",keyword:o,page:t+"",csid:s,session_id:i,uuid:p.JD.cookie.get("visitkey")||"",wechat_union_id:p.JD.cookie.get("unionid")||"",wechat_open_id:p.JD.cookie.get("wxapp_openid")||"",jda:p.JD.cookie.get("__jda")||"",value:{skus:n}};p.request.post({url:"http://xlog.jd.com/v1/ael",data:a,header:{"Content-Type":"application/json"},channel:"http-direct",priority:"REPORT"}).then(function(){}).catch(function(){})}},exports.initMeridian=function(e){var t=e.pageId,o=void 0===t?"":t,r=e.pparam,i=void 0===r?"":r,s=e.url,n=void 0===s?"":s,a=e.urlParam,d=void 0===a?"":a,c=e.loadtime,u=void 0===c?"":c;return g.set({url:n||"http://wq.jd.com/wxapp/pages/search/list/list",urlParam:d,title:"搜索",siteId:"JA2019_5112348",account:p.JD.cookie.get("pin")||"",loadtime:u,pname:"",pparam:i,pageId:o,openid:p.JD.cookie.get("wxapp_openid")||"",unionid:p.JD.cookie.get("unionid")||"",appid:p.app.appId||""}),g},exports.getMeridian=function(){return g},exports.getItemClickMeridianParams=n,exports.collectExposureItem=function(e){if(e&&!_.find(function(t){return t.wareid===e.wareid})){var t=e.tags||{};_.push([e.wareid,e.cgind-1,e.isAd?1:0,(t.title||[]).map(function(e){return e&&e.name||""}).join("|")||-1,(t.price||[]).map(function(e){return e&&e.name||""}).join("|")||-1,(t.comment||[]).concat(t.price_bottom).map(function(e){return e&&e.name||""}).join("|")||-1,(t.shop||[]).map(function(e){return e&&e.name||""}).join("|")||-1].join("#"))}},exports.reportItemExposureToMeridian=function(){_&&_.length&&(o("EXPOSE_ITEM",{},{eparam:_.join("_")}),_=[])}; 
 			}); 
		define("pages/search/list/stores/filter.store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function r(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments[2];if(!r)return[];var n=[],i=void 0,a=void 0;if("yes"==t){i=new RegExp("\\[[(|]\\]"+e+",,([^[]*)","g");do{(a=i.exec(r))&&n.push(a[1])}while(a)}else i=new RegExp(e+",,([^;]*)"),(a=r.match(i))&&n.push(a[1]);return n}function n(){var e=[];return S.forEach(function(r){var t=P[r];if(t&&t.length){var n=t.reduce(function(e,t,n,i){return 1==i.length?r+",,"+t+";;":n==i.length-1?""+e+r+",,"+t+"[)]":""+e+r+",,"+t+"[|]"},"[(]");e.push(n)}}),e.join("[+]")}function i(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").indexOf("[|]")>-1}function a(e,r){var t=new RegExp(e+",([^;]*)"),n=r.match(t),i=n&&n[1]?n[1]:"",a=void 0,c=void 0,o=void 0;switch(e){case"expand_name":if(a={},i){var s=new RegExp("([^:@^]*)(?:::|@@)([^^;]*)","g"),u=void 0;do{(u=s.exec(i))&&(a[u[2]]=u[1].split("||"))}while(u)}return a;case"redisstore":case"delivertime":case"car_model_id":case"plus_promotion":return i;case"promotion_address":case"promotion_type":case"product_ext":case"productext2":return c=[],i&&i.split("||").forEach(function(e){var r=e.match(/b(\d+)v(\d+)/i);r&&c.push(r[1])}),c;case"ico":return c=[],i&&i.split("||").forEach(function(e){var r=e.match(/L(\d+)M(\d+)/i);r&&c.push(r[1])}),c;case"pingou_price":case"dredisprice":return i&&(o=i.match(/(?:L(\d+))?(?:M(\d+))?/i)),o?[o[2],o[1]]:[];default:return i&&(o=i.match(/L(\d+)M(\d+)/i)),o?o[1]:""}}function c(){var e=[];return b.forEach(function(t){var n=P[t];if(n){var i="",a=[];switch(t){case"expand_name":for(var c in n){var o=n[c];o&&o.length&&a.push(o.join("||")+"@@"+c)}i=a.length?a.join("^^"):"";break;case"redisstore":break;case"delivertime":case"car_model_id":case"plus_promotion":i=n||"";break;case"promotion_address":case"promotion_type":case"product_ext":case"productext2":i=n.length?n.map(function(e){return"b"+e+"v1"}).join("||"):"";break;case"ico":i=n.length?n.map(function(e){return"L"+e+"M"+e}).join("||"):"";break;case"pingou_price":case"dredisprice":i=(n=n.slice(0,2).map(function(e){return parseInt(e)}))[0]>=0&&n[1]>=0&&"L"+Math.max.apply(Math,r(n))+"M"+Math.min.apply(Math,r(n))||n[0]>=0&&"M"+n[0]||n[1]>=0&&"L"+n[1]||"";break;default:i=n?"L"+n+"M"+n:""}i&&e.push(t+","+i+";")}}),e.join("")}function o(){return P.sort_type||""}function s(e){var r=e.split("/");e=r[0]||"";var t=r[1]||"",n=P[e]||"";return t?n[t]||"":n}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments[1],t=arguments[2],n=e.split("/");e=n[0]||"";var i=void 0,a=P[e];switch(e){case"expand_name":if(!(i=n[1]||""))break;a[i]=a[i]||[],l(a[i],r,t);break;case"pingou_price":case"dredisprice":P[e]="uncheck"===t?[]:Array.isArray(r)?Object.assign([],r):[];break;default:Array.isArray(a)?Array.isArray(r)?r.forEach(function(e){return l(a,e,t)}):l(a,r,t):P[e]="uncheck"===t?"":r}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments[1],t=arguments[2],n=e.indexOf(r);"check"===t?-1==n&&e.push(r):"uncheck"===t&&-1!=n&&e.splice(n,1)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.ObjExist_Statistic,t=e.ObjB_TextCollection,n=e.ObjCollection,i=e.Interval_Price,a=e.ObjExtAttrCollection,c=e.ObjB_OmsAttrCollection,o=e.Head,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=s.activity,l=s.hasArt,d=s.yhyx,x={sort:p(),service:f(r,u,l,d),category:v(n),price:h(i),brand:k(t,(0,E.getProp)(o,"Query.QueryProcessor.ExpressionKey")),exp_color:_("exp_color",t),exp_size:_("exp_size",t),quick:null},g=["brand","exp_color","exp_size"],S=m(a);Object.keys(S).forEach(function(e){x[e]=S[e],g.push(e)}),g=g.filter(function(e){return x[e]&&x[e].list&&x[e].list.length}).sort(function(e,r){return x[e].order>x[r].order?1:-1});var b=y(c);return Object.keys(b).forEach(function(e){x[e]=b[e],g.push(e)}),x.orderView=g,console.log("%c-> ","color: #dd4a68",x),x}function p(){return{list:A.map(function(e,r){var t=Object.assign({},e);return t.id=r,t.checked=P.sort_type===t.value,t})}}function f(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];1==arguments[3]&&u("redisstore","1","check");var i=M.find(function(e){return"ico"==e.key})||{};i.name=t.name||"活动",i.logo=(0,E.getImg)(t.logo1)||"",i.value=(t.actid||"").split("|").filter(function(e){return e}),i.view=1==t.isFilterInTop?"banner":"quick";var a=e({"211限时达":!!(r.Delivertime||[]).find(function(e){return"1"==e.type}),"京尊达":"1"==r.HasVIPware,"PLUS专享":"1"==r.HasPLUSware,"新品":"1"==r.HasFZXPware||-1!=(P.product_ext||[]).indexOf("26"),"艺术品":n||-1!=(P.productext2||[]).indexOf("5"),"拍拍二手":"1"==r.HasSecondware||"13765"==P.cid1},i.name,i.value&&i.value.length>0);return{list:M.filter(function(e){return void 0===a[e.name]||a[e.name]}).map(function(e,r){var t=Object.assign({},e);t.id=r;var n=t.key,i=t.value,a=P[n];if(Array.isArray(a))if(Array.isArray(i)){var c=a.filter(function(e){return-1!=i.indexOf(e)});t.checked=c.length===i.length}else t.checked=-1!=a.indexOf(i);else t.checked=a==i;return t})}}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.cid2||[],t=e.catid||[],n={},i=[],a="";return r.forEach(function(e){var r={id:e.Classification,name:e.Name,value:e.Classification,key:e.Field,checked:e.Classification==P.cid2,children:[]};r.value&&r.name&&(r.checked&&(a=r.name),n[e.Classification]=r,i.push(r))}),t.forEach(function(e){var r={id:e.Classification,name:e.Name,value:e.Classification,key:e.Field,checked:e.Classification==P.catid,parent:e.FClassification};if(r.value&&r.name){r.checked&&(a=r.name);var t=n[e.FClassification];t&&t.children.push(r)}}),{list:i,current:a,associate:["cid1","cid2","catid"]}}function h(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=[],t=P.dredisprice.join("-"),n=0;n<e.length;n++){var i=e[n]||{},a=i.start,c=i.end,o=i.percent;if(a&&c&&o){var s=a+"-"+c,u=s===t;r.push({name:s,value:[a,c],key:"dredisprice",checked:u,id:n,percent:o})}}return{list:r,current:t,editable:!0}}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e.brand||{},n=parseInt(t.sortorder),i=(t.value||"").replace(/(\|=\|)$/,"").split("|=|"),a=(t.id||"").replace(/;$/,"").split(";"),c=(t.pinyin||"").replace(/;$/,"").split(";");if(r){var o=r.match(/brand,,([^;]*)/);if(o=o&&o[1]){var s=i.indexOf(o);-1!=s?(i=i.splice(s,1),a=a.splice(s,1),c=c.splice(s,1)):(i=[o],a=[""],c=["#"]),u("brand",o,"check")}}for(var l=[],d=[],p=[],f=0;f<i.length&&f<200;f++){var v=i[f],h=a[f],k=(c[f]||"").toUpperCase();if(v&&h&&k){var _=(P.brand||[]).indexOf(v)>-1;_&&p.push(v),d.push({name:v,value:v,key:"brand",checked:_,id:h,pinyin:k}),-1==l.indexOf(k)&&l.push(k)}}return l.sort(),{list:d,current:p,order:n,title:"品牌",type:"brand",alphabet:l}}function _(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})[e]||{},t=parseInt(r.sortorder),n={exp_color:"颜色",exp_size:"尺码"},i=[],a=[];return(r.value||"").replace(/;$/,"").split(";").forEach(function(r,t){if(r){var n=(P[e]||[]).indexOf(r)>-1;n&&a.push(r),i.push({name:r,value:r,key:e,checked:n,id:t})}}),{list:i,current:a,order:t,title:n[e],type:e}}function m(){var e={};return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(r){if(r&&r.expandsortid&&r.expandsortname){for(var t="expand_name/"+r.expandsortid,n=r.expandsortname,i=parseInt(r.sortorder),a=[],c=[],o=(r.valueid||"").replace(/;$/,"").split(";"),s=(r.valuename||"").replace(/;$/,"").split(";"),u=0;u<o.length;u++){var l=o[u],d=s[u];if(l&&d){var p=(P.expand_name[r.expandsortid]||[]).indexOf(l)>-1;p&&c.push(d),a.push({name:d,value:l,key:t,checked:p,id:l})}}e[t]={list:a,current:c,order:i,title:n,type:t}}}),e}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r={},t={publishers:"出版社",package:"包装",dregion:"地区",media:"介质",packstate:"是否套装"};return Object.keys(t).forEach(function(n,i){var a=e[n];if((a=Array.isArray(a)?a:a&&a.value)&&a.length){var c=t[n],o=100+i,s=[],u=[];if("packstate"===n){s.push({name:"是",value:"1",key:"packnum",checked:1===parseInt(P.packnum),id:1},{name:"否",value:"0",key:"packnum",checked:0===parseInt(P.packnum),id:2});var l=s.find(function(e){return e.checked});u=l?l.name:""}else a.forEach(function(e,r){if(e){var t=(P[n]||[]).indexOf(e)>-1;t&&u.push(e),s.push({name:e,value:e,key:n,checked:t,id:r})}});r[n]={list:s,current:u,order:o,title:c,type:n}}}),r}function x(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).car_model_id,r=[];if(e){var t=j.find(function(e){return e&&"car_model_id"===e.key});t&&(t.value=e,t.checked=P.car_model_id==t.value,r.push(t))}return r=r.map(function(e,r){return e.id=r,e.type="quick",e}),{list:r}}function g(){var e=[],t={brand:"exbrand",exp_color:"excolor",exp_size:"exsize"};["brand","exp_color","exp_size"].forEach(function(r){var n=P[r];n&&n.length&&e.push(t[r]+"_"+n.join("||"))});var n=(P.dredisprice||[]).slice(0,2).map(function(e){return parseInt(e)});if(n&&n.length){var i=n[0]>=0&&n[1]>=0&&Math.min.apply(Math,r(n))||n[0]||0,a=n[0]>=0&&n[1]>=0&&Math.max.apply(Math,r(n))||n[1]||1e9;e.push("exprice_"+i+"-"+a)}var c=P.expand_name||{};for(var o in c){var s=c[o];c.hasOwnProperty(o)&&s&&s.length&&e.push(o+"_"+s.join("||"))}return e.join("@")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.genMeridianReportParams=exports.getFilterParams=exports.genSortType=exports.genFilterType=exports.isMultiSelect=exports.genExpressionKey=exports.getFilter=exports.store=void 0;var E=require("../../common/js/utils.js"),S=["brand","exp_color","exp_size","publishers","package","dregion","media"],b=["delivertime","redisstore","col_type","cod","ico","cid1","cid2","catid","virtual_categorys","product_ext","productext2","promotion_type","plus_promotion","promotion_address","pingou_price","dredisprice","expand_name","car_model_id","packnum"],O={COMPREHENSIVE:"",PRICE_ASC:"sort_dredisprice_asc",PRICE_DESC:"sort_dredisprice_desc",SALE_DESC:"sort_totalsales15_desc",SALE_3D_DESC:"sort_redissale_desc",COMMENT_DESC:"sort_commentcount_desc",GOOD_DESC:"sort_good_desc",WINSDATE_DESC:"sort_winsdate_desc",PINGOU_NUM_DESC:"sort_pingou_num_desc"},C={default:O.COMPREHENSIVE,sales:O.SALE_DESC,price_desc:O.PRICE_DESC,price_asc:O.PRICE_ASC,winsdate_desc:O.WINSDATE_DESC,commentcount_desc:O.COMMENT_DESC},w={"京东物流":{key:"col_type",value:"0"},"货到付款":{key:"cod",value:"1"},"促销商品":{key:"promotion_address",value:["2","7"]},"211限时达":{key:"delivertime",value:"1"},"新品":{key:"product_ext",value:"26"},"京尊达":{key:"product_ext",value:"3"},"京东国际":{key:"product_ext",value:"11"},"PLUS专享价":{key:"promotion_type",value:"4"},"PLUS专享":{key:"plus_promotion",value:"1"},"艺术品":{key:"productext2",value:"5"},"拼购商品":{key:"productext2",value:"12"}},P={},A=[{name:"综合",value:O.COMPREHENSIVE,key:"sort_type",checked:!1},{name:"最新上架",value:O.WINSDATE_DESC,key:"sort_type",checked:!1},{name:"价格最低",value:O.PRICE_ASC,key:"sort_type",checked:!1},{name:"价格最高",value:O.PRICE_DESC,key:"sort_type",checked:!1},{name:"评价最多",value:O.COMMENT_DESC,key:"sort_type",checked:!1},{name:"销量",value:O.SALE_DESC,key:"sort_type",checked:!1}],M=[{name:"京东物流",value:"0",key:"col_type",checked:!1,view:"quick",order:2},{name:"京尊达",value:"3",key:"product_ext",checked:!1,view:"fixed"},{name:"有货优先",value:"1",key:"redisstore",checked:!1,view:""},{name:"货到付款",value:"1",key:"cod",checked:!1,view:"fixed"},{name:"211限时达",value:"1",key:"delivertime",checked:!1,view:"fixed"},{name:"新品",value:"26",key:"product_ext",checked:!1,view:"quick",order:3},{name:"京东国际",value:"11",key:"product_ext",checked:!1,view:"fixed"},{name:"PLUS专享",value:"1",key:"plus_promotion",checked:!1,view:"fixed"},{name:"促销商品",value:["2","7"],key:"promotion_address",checked:!1,view:"fixed"},{name:"艺术品",value:"5",key:"productext2",checked:!1,view:"fixed"},{name:"拍拍二手",value:"13765",key:"cid1",checked:!1,view:"quick",order:5},{name:"活动",value:[],key:"ico",checked:!1,logo:"",view:"quick",order:1}],j=[{name:"匹配爱车",value:"",key:"car_model_id",checked:!1,order:2}],I={single:function(){function e(e,r,t,n){var i=r==e.id&&"check"===t;if(e.checked!=i&&(e.checked=i),r==e.id)return u(e.key,e.value,t),"check"===t&&{key:e.key,name:(n?n.name+"/":"")+e.name}}function r(e,r){return e&&e.name&&e.key?e:r}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"check",a={name:"",key:""};(t.list||[]).forEach(function(t){a=r(e(t,n,i),a),t.children&&t.children.forEach(function(c){return a=r(e(c,n,i,t),a)})}),(t.associate||[]).filter(function(e){return e!=a.key}).forEach(function(e){return u(e,"","uncheck")}),t.current=a.name},multiple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1],t=arguments[2],n=(e.list||[]).find(function(e){return r==e.id});if(n){n.checked="check"===t,u(n.key,n.value,t);var i=e.current||[],a=i.indexOf(n.name);n.checked?-1==a&&i.push(n.name):a>-1&&i.splice(a,1),e.current=i}},reset:function(){function e(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(e.checked||r)&&(e.checked=!1,u(e.key,e.value,"uncheck"))}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(r.list||[]).forEach(function(n,i){t&&n.view!==t||(e(n,r.editable&&0==i),n.children&&n.children.forEach(function(r){return e(r)}))}),(r.associate||[]).forEach(function(e){return u(e,"","uncheck")}),r.current=Array.isArray(r.current)?[]:""},edit:function(){function e(e,t){var n=r(e.value,t);return e.checked!=n&&(e.checked=n),n&&e.name}function r(e,r){return e.toString()===r.toString()}function t(e,r){return e||r}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],a=arguments[2],c=arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"single";u(i,a,"check");var s=n.list||[];if("single"===o)s.forEach(function(r){c=t(e(r,a),c),r.children&&r.children.forEach(function(r){return c=t(e(r,a),c)})}),(n.associate||[]).filter(function(e){return e!=i}).forEach(function(e){return u(e,"","uncheck")}),n.current=c;else{var l=s.find(function(e){return r(e.value,a)});l&&(l.checked=!0,c=l.name);var d=n.current||[];-1==d.indexOf(c)&&d.push(c),n.current=d}}},F=function(){var e=[],r={exist:function(){return!!e.length},save:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.push(JSON.stringify({filter:r,panel:t}))},restore:function(){if(r.exist()){var t=JSON.parse(e[0]);return r.clear(),t}},pop:function(){if(r.exist())return JSON.parse(e.pop())},clear:function(){e=[]}};return r}(),D=function(){var e=null;return{pushState:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=JSON.stringify({filter:r,panel:t})},popState:function(){var r=JSON.parse(e);return e=null,r}}}(),N=function(){function e(e){var n={},i=r.orderView||[];for(var a in r)if(r.hasOwnProperty(a)){var c=r[a]||{},o=c;c.list&&c.list.length&&(o=Object.assign({},c),-1==t.indexOf(a)&&a!==e&&(o.list=-1==i.indexOf(a)?[]:c.list.slice(0,24))),n[a]=o}return n}var r={},t=["sort","service","price"];return{init:function(t,n){return r=d(t,n),e()},update:function(t,n){switch(t){case"quick":r[t]=x(n);break;case"service":r[t]=f(n.ObjExist_Statistic,n.activity,n.hasArt,n.yhyx)}return e()},reset:function(t){return r=t,e()},partial:e,full:function(){return r||{}},prop:function(e){return r[e]||{}}}}();exports.store={state:{filterPanel:{}},actions:{_initFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.yhyx,n=void 0===r?1:r,i=e.sort_type,c=void 0===i?"":i,o=e.filt_type,s=void 0===o?"":o,l=e.expression_key,d=void 0===l?"":l,p=e.multi_select,f=void 0===p?"":p,v=e.service,h=void 0===v?"":v,k=e.brand,_=void 0===k?"":k,m=e.price,y=void 0===m?"":m,x=e.cid1,g=void 0===x?"":x,O=e.catid,A=void 0===O?"":O,M=e.sort,j=void 0===M?"":M;return P={},S.forEach(function(e){P[e]=t(e,d,f)}),b.forEach(function(e){P[e]=a(e,s)}),P.sort_type=c,E.ENV.isXcx&&((_=_.split(",").filter(function(e){return e})).forEach(function(e){return u("brand",e,"check")}),(h=h.split(",").filter(function(e){return e})).forEach(function(e){var r=w[e];r&&u(r.key,r.value,"check")}),(y=y.match(/L(\d+)M(\d+)/i))&&u("dredisprice",[y[2],y[1]]||[],"check"),(A=A.split("|")).length&&u("catid",A[0],"check"),g&&u("cid1",g,"check"),(j=C[j])&&u("sort_type",j,"check")),1==n&&u("redisstore","1","check"),console.log("%c-> ","color: #dd4a68",P),P},_initFilterPanel:function(e,r){N.init(e,r)},_renderFilterPanel:function(){var e=this;setTimeout(function(){e.filterPanel=N.partial()},50)},_updateFilterPanel:function(e,r){this.filterPanel=N.update(e,r)},_partialFilterPanel:function(e){this.filterPanel=N.partial(e)},_hasServiceFilter:function(e){return!!(N.prop("service").list||[]).find(function(r){return r.name===e})},_getFilterItem:function(e,r){function t(e,r){return e.toString()===r.toString()}if(e){var n=null;return(N.prop(e).list||[]).find(function(e){if(t(e.value,r))return n=e,!0;if(e.children){var i=e.children.find(function(e){return t(e.value,r)});if(i)return n=i,!0}}),n}},_setFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.cmd,t=e.type,n=e.id,i=e.key,a=e.value,c=e.name,o=e.view,s=N.full(),l=void 0;switch(r){case"confirm":return F.clear();case"cancel":case"snapshot-pop":if(!(l="cancel"===r?F.restore():F.pop()))return;return P=l.filter,void(this.filterPanel=N.reset(l.panel));case"snapshot-drop":return F.pop();case"snapshot-save":return F.save(P,s);default:F.exist()||F.save(P,s)}if(t){var d=t.split("/"),p=s[t];switch(d[0]){case"sort":case"category":case"packstate":case"price":"edit"===r?I.edit(p,i,a,c,"single"):I.single(p,n,r);break;case"service":case"brand":case"exp_color":case"exp_size":case"expand_name":case"publishers":case"package":case"dregion":case"media":case"quick":-1!=["check","uncheck"].indexOf(r)?I.multiple(p,n,r):"reset"===r?I.reset(p,o):"edit"===r&&I.edit(p,i,a,c,"multiple");break;case"all":if("reset"===r)for(var f in s)if(s.hasOwnProperty(f)){var v=s[f];v&&v.list&&I.reset(v)}break;default:"edit"===r&&i&&u(i,a)}this.filterPanel=N.partial(t)}},_saveFilterState:function(){D.pushState(P,N.full())},_restoreFilterState:function(){var e=D.popState();return!!e&&(P=e.filter,this.filterPanel=N.reset(e.panel),!0)}}};exports.getFilter=s,exports.genExpressionKey=n,exports.isMultiSelect=i,exports.genFilterType=c,exports.genSortType=o,exports.getFilterParams=function(){var e={};e.sort_type=o(),e.filt_type=c(),e.expression_key=n(),e.multi_select=i(e.expression_key)?"yes":"";var r=s("car_model_id");return r&&(e.car_model_id=r),e.ev=g(),e},exports.genMeridianReportParams=function(){var e=N.full(),r={sort:"排序",service:"服务",category:"分类",price:"价格"},t=[];return["sort","service","category","price"].concat(e.orderView||[]).forEach(function(n){var i=e[n]||{},a=(i.title||r[n])+"^"+n,c=void 0;c="sort"===n||"service"===n?(i.list||[]).filter(function(e){return e.checked}).map(function(e){return e.name}):Array.isArray(i.current)?i.current:[i.current+""],t.push(a+":"+(c.join("|")||-1))}),t.join("#")}; 
 			}); 
		define("pages/search/list/stores/float.store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){return(0,c.getHongbao)(t).then(function(t){return t?a.get("SEARCH_HONGBAO_"+t.mark).catch(function(){}).then(function(e){return e?o.default.reject():t}):o.default.reject()}).then(function(t){if("newUserRedEnvelope"==t.tplName)return(0,l.queryHongbaoActive)(t.activeid).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(0==e.ret&&1==e.godraw&&1==e.newer)return t.type="HONGBAO_NEW_USER",t.floatType="hongbao",t})}).catch(function(){})}function e(t){var e=void 0;return(0,c.getEgg)(t).then(function(t){return t?(e="SEARCH_EGG_"+t.mark,a.get(e).catch(function(){}).then(function(e){return e?o.default.reject():t})):o.default.reject()}).then(function(t){}).catch(function(){})}function n(t){return(0,c.getFloatCoupon)(t).then(function(t){return t?o.default.all([a.get("SEARCH_FLOAT_COUPON_"+t.roleId).catch(function(){}),a.get("SEARCH_FLOAT_COUPON").catch(function(){})]).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=r(e,2),a=n[0],u=n[1];return a||u?o.default.reject():t}):o.default.reject()}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(e.roleId&&e.couponKey||e.couponPutkey)&&e.text?(0,l.getShopCouponStatus)(e.roleId,e.couponKey).then(function(){if(999!=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).resultCode)return o.default.reject();var n=e.text.split("{#keyword#}").map(function(t){return{type:"",text:t}});n.length>1&&n.splice(1,0,{type:"em",text:t});var r=Date.parse(e.couponBeginTime),a=Date.parse(e.couponEndTime),i=Date.now(),c=(0,u.formatDate)(r,"M.dd"),l=(0,u.formatDate)(a,"M.dd");if(0==e.limitType)c=(0,u.formatDate)(i,"M.dd");else if(1==e.limitType){c=(0,u.formatDate)(i,"M.dd");var f=i+864e5*e.addDays;l=(0,u.formatDate)(f>a?a:f,"M.dd")}var d=c+"-"+l,s="东券";switch(parseInt(e.couponType)){case 0:s="京券";break;case 1:s="东券";break;case 2:s="运费券"}return{floatType:"float_coupon",batchId:e.batchId,putkey:e.couponPutkey,roleId:e.roleId,key:e.couponKey,avatar:e.avatar||"",text:n.filter(function(t){return t.text}),discount:e.discount,quota:e.quota,date:d,limit:e.limitStr,type:s,hasDraw:!1,keyword:t}}):o.default.reject()}).catch(function(){})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.store=void 0;var r=function(){function t(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=t[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../libs/promise.min")),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(require("../../../../common/localStorage.js")),u=require("../../common/js/utils.js"),i=require("../managers/report.manager.js"),c=require("../managers/ppms.manager.js"),l=require("../../model/search-index.js"),f=void 0;exports.store={state:{hongbaoEgg:null,floatCoupon:null},actions:{_initFloat:function(r){this._resetFloat(),f=o.default.all([e(r),t(r),n(r)])},_renderFloat:function(){var t=this;f.then(function(e){var n=r(e,3),o=n[0],u=n[1],c=n[2];o?t.hongbaoEgg=o:u?(t.hongbaoEgg=u,a.set("SEARCH_HONGBAO_"+u.mark,!0,{expire:(u.inter||1440)+"m"})):c&&(setTimeout(function(){t.floatCoupon=c},1e3),a.set("SEARCH_FLOAT_COUPON",!0,{expire:"1440m"}),a.set("SEARCH_FLOAT_COUPON_"+c.roleId,!0,{expire:"15d"}),(0,i.reportExposure)("EXPOSE_FLOAT_COUPON"))})},_resetFloat:function(){this.hongbaoEgg=null,this.floatCoupon=null},_drawFloatCoupon:function(){(this.floatCoupon||{}).hasDraw=!0}}}; 
 			}); 
		define("pages/search/list/stores/header.store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.store=void 0,exports.initHeader=function(e){i=e?t:s};var e=require("../../common/js/utils.js"),t=80,s=44+t,i=s,h=0,r=0;exports.store={state:{header:{fixed:!1,prelude:!0,height:s,style:""},extraTabs:[]},actions:{_calcHeader:function(){var t=this;if(e.ENV.isXcx){var s=this.createSelectorQuery();s.select("#search-header").boundingClientRect(function(e){e=e||{},t.header.height=e.height||i}),s.exec()}else{var h=document.querySelector("#search-header").getBoundingClientRect();this.header.height=h.height||i}},_scrollHeader:function(e){var s=this.header;h>e?e>s.height-i+2?2!=r&&(r=2,s.style=""):3!=r&&(r=3,s.fixed=!1,s.prelude=!0,s.style=""):e>s.height-t&&1!=r&&(r=1,s.fixed=!0,s.prelude=!1,s.style="transform: translateY(-"+(i-t)+"px);"),h=e},_initExtraTabs:function(e){var t=e.showShopTab,s=[];void 0!==t&&t&&s.push({type:"shop",text:"店铺",checked:!1}),this.extraTabs=s},_toggleExtraTab:function(e){var t=e.cmd,s=void 0===t?"check":t,i=e.type,h={};switch(this.extraTabs.forEach(function(e){e.checked=e.type===i&&"check"===s,e.checked&&(h=e)}),h.type){case"shop":this.shop.visible=h.checked;break;default:this.shop.visible=!1}this.shop.visible&&this._getShops(this.keyword,1)}}}; 
 			}); 
		define("pages/search/list/stores/interlude.store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)}function r(){var e={};return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(r){if(1==r.floor_type){var n=Array.isArray(r.tag_list)?r.tag_list.length:0;if(!(n<4)){r.tag_list=r.tag_list.slice(0,n<8&&n>=4?4:8);var i=parseInt(r.floor_position);r.iType="tags",r.order=i,e[i]=(e[i]||[]).concat(r)}}}),l.default.resolve(e)}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r={};return e.adPicUrl&&e.toUrl&&(e.iType="banner",e.order=10,e.adPicUrl=e.adPicUrl.replace(/^https?:/,""),r[10]=(r[10]||[]).concat(e)),l.default.resolve(r)}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r={},n=e.map(function(e){return e.activeId}),i=[(0,c.getPrizesStatus)(n),(0,u.isLogin)()?(0,c.getBingoList)(n):l.default.resolve([])];return l.default.all(i).then(function(n){var i=a(n,2),t=i[0],o=void 0===t?[]:t,l=i[1],u=void 0===l?[]:l,s={};return o.forEach(function(e){var r=[];if(e.prizes&&e.prizes.length){var n=u.find(function(r){return r.active==e.active}),i=n&&n.bingos||[];r=e.prizes.map(function(e){var r=e.TotalBingos>=e.MaxBingos,n=e.DailyBingos>=e.MaxDailyBingos,t=e.HourBingos>=e.MaxHourBingos;return{name:e.PrizeName,level:e.Level,isBingo:!(!i[0]||i[0].level!=e.Level),isOver:r||n||t,isValid:e.TotalBingos<e.MaxBingos}})}s[e.active]=r}),(e=e.map(function(e){var r=(s[e.activeId]||[]).find(function(r){return r.level==e.levelId});return r?(e.isBingo=r.isBingo,e.isOver=r.isOver,e.isValid=r.isValid):e.isValid=!0,e}).filter(function(e){return!e.isOver&&e.isValid&&e.couponInfo&&e.couponInfo[0]})).length&&(r[10]=(r[10]||[]).concat({iType:"coupon",order:10,coupons:e.slice(0,4)})),r})}function t(e){if(!e||!e.shop_name||!e.child_link||e.child_link.length<3)return l.default.resolve();if(e.child_link=e.child_link.filter(function(e){return e.image_url&&e.sku_price}).map(function(e){return e.image_url=(0,s.getImg)(e.image_url,230,230),e}).slice(0,3),e.child_link.length<3)return l.default.resolve();var r={};return e.iType="adshop",e.order=20,r[20]=(r[20]||[]).concat(e),l.default.resolve(r)}function o(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.forEach(function(r){if(r)for(var n in r)r.hasOwnProperty(n)&&r[n]&&(e[n]=(e[n]||[]).concat(r[n]))}),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.store=void 0;var a=function(){function e(e,r){var n=[],i=!0,t=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!r||n.length!==r);i=!0);}catch(e){t=!0,o=e}finally{try{!i&&l.return&&l.return()}finally{if(t)throw o}}return n}return function(r,n){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../libs/promise.min")),u=require("../../../../common/login/loginv1.js"),s=require("../../common/js/utils.js"),c=require("../../model/search-index.js");exports.store={state:{interlude:{}},actions:{_initInterlude:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=a.tags,s=void 0===u?[]:u,c=a.banner,f=void 0===c?{}:c,d=a.coupon,v=void 0===d?[]:d;this.interlude={},l.default.all([r(s),n(f),i(v)]).then(function(r){t.interlude=o.apply(void 0,[{},t.interlude].concat(e(r)))})},_updateInterlude:function(r){var n=this,i=r.adshop,a=void 0===i?{}:i;l.default.all([t(a)]).then(function(r){r.find(function(e){return e&&Object.keys(e).length})&&(n.interlude=o.apply(void 0,[{},n.interlude].concat(e(r))))})}}}; 
 			}); 
		define("pages/search/list/stores/prelude.store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return e.image=(0,O.getImg)(e.imgurl,130,130),e});return e.length&&{type:"category",data:e}}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.name&&e.toUrl&&e.adPicUrl)return e.adPicUrl=(0,O.getImg)(e.adPicUrl,60,60),e.toUrl=e.toUrl.replace("{#keyword#}",e.keyword?encodeURIComponent(e.keyword):""),{type:"portal",data:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.id&&e.name&&e.photo&&e.brief)return{type:"writer",data:e}}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.venderId&&e.name)return{type:"shop_plain",data:[{venderId:e.venderId,name:e.name,desc:e.inShort,logo:(0,O.getImg)(e.shopLogoUrl,420,170),isSquareLogo:!1}]}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.shop_list,r=void 0===t?[]:t,n=e.vender_id,o=void 0===n?0:n,a=e.isCarousel,i=void 0===a||a,u=r.map(function(e){return e.vender_id});return(u=u.length&&u||0!=o&&[o])?(0,C.getShopByVenderId)(u).then(function(){var e=[];if((arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(t){if(0!=t.shopId){var r=t.shopInfo;if(r.shopName&&r.venderId){(-1!=r.fPicUrl.indexOf("/cube_template/template2/img/")||-1!=r.fPicUrl.indexOf("//img11.360buyimg.com/jshopm/jfs/t1198/177/246925151/74805/ab73d78b/550ffd76Nf0a0bb07.png"))&&(r.fPicUrl="");var n=!(0!=t.isDefaultSquareLogo||!t.squareLogo),o=1==r.isZy,a=parseInt(r.shopFansNum,10);a=a?(a>=1e4?(a/1e4).toFixed(1)+"万":a)+"人关注":"暂无人关注";var i=[];if(!o)if(1==t.commonGoodShopCode)i.push({type:"tag",width:56,url:"https://img11.360buyimg.com/jdphoto/s112x28_jfs/t14554/205/1842763392/2625/f44cdabc/5a5c7090Ne9b78604.png"});else if(1002==t.categoryGoodShopCode)i.push({type:"tag",width:56,url:"https://img11.360buyimg.com/jdphoto/s112x28_jfs/t15673/79/1640911352/5197/3171e6ff/5a5c7076N82df55a4.png"});else if(t.scoreRankRateGrade){var u=parseInt(100*t.scoreRankRateGrade);if(-1!=[250,300,350,400,450,490].indexOf(u)){for(var s=[],l=0;l<5;l++)s.push(u>=100&&100||(90==u||50==u)&&u||0),u-=100;i.push({type:"stars",stars:s})}}e.push({venderId:r.venderId,name:r.shopName,desc:"",logo:(0,O.getImg)(n?t.squareLogo:t.rectLogo),isSquareLogo:n,isZy:o,banner:(0,O.getImg)(r.fPicUrl),fans:a,brief:r.brief,evaluate:i,moreTags:[]})}}}),e.length){var t=e.filter(function(e){return e.banner});return e=i?t.length?t:e.slice(0,1):t.length?t.slice(0,1):e.slice(0,1),(0,C.getShopTags)(e.map(function(e){return e.venderId})).then(function(t){e.forEach(function(e){var r=t[e.venderId]||[];e.moreTags=r.map(function(e){return{type:"tag",text:e}})})}),(0,N.reportExposure)("EXPOSE_TOP_LOOP_SHOP",{scroll:e.length,venderid:e.map(function(e){return e.venderId}).join(",")}),{type:"shop_loop",data:e}}}):I.default.resolve()}function a(e){if(e&&!/^\s*$/.test(e.shop_name)){var t=void 0;switch(parseInt(e.style_type,10)){case 1:case 2:t=i(e);break;case 5:case 6:case 7:case 8:case 9:case 10:t=u(e)}if(t){var r=parseInt(t.follow_count,10)||0;t.inShort=0===r?"":r>=1e4?(r/1e4).toFixed(1)+"万人关注":r+"人关注";var n=[];return 1==t.has_newware&&n.push("上新"),1==t.has_promotion&&n.push("满减"),1==t.has_coupon&&n.push("优惠券"),t.tags=n.map(function(e){return{type:"tag",text:e}}),{type:"shop_ad",data:t}}}}function i(e){if(-1!=[1,2].indexOf(parseInt(e.style_type))&&e.image_url){e.image_url=(0,O.getImg)(e.image_url,710,334);var t=1;if(1==e.style_type&&e.child_link){if(e.child_link=e.child_link.filter(function(t){return 2==t.link_type&&t.anchor_text&&(t.link_url="//wq.jd.com/mshop/searchlist?keyword="+encodeURIComponent(t.anchor_text)+"&shopId="+e.shop_id+"&venderId="+e.vender_id),t.anchor_text&&t.link_url&&t.click_url}).slice(0,4),e.child_link.length<4)return;t=2}return(0,N.reportExposure)("EXPOSE_TOP_AD_SHOP_JINGXUAN",{stype:t}),(0,N.reportAd)(e.exposal_url),e}}function u(e){if(!O.ENV.isXcx&&-1!=[5,6,7,8,9,10].indexOf(parseInt(e.style_type))){var t={5:[710,490],6:[750,596],7:[710,335],8:[710,335],9:[750,596],10:[710,335]}[e.style_type];if(5==e.style_type||7==e.style_type){if(e.carousel_images=(e.carousel_images||[]).filter(function(e){return e.image_url=(0,O.getImg)(e.image_url,t[0],t[1]),e.anchor_text&&e.image_url&&e.link_url&&e.click_url}).slice(0,5),e.carousel_images.length<3)return}else{if(!e.image_url)return;e.image_url=(0,O.getImg)(e.image_url,t[0],t[1])}return-1!=[9,10].indexOf(parseInt(e.style_type))&&R.init(e),e}}function s(){return(0,E.isLogin)()?w.get("SEARCH_COUPON_PROMOTION").catch(function(){return null}).then(function(e){var t=new Date;return e&&e.day==t.getDate()?I.default.reject():(0,C.getUserStatus)()}).then(function(e){if(!e)return I.default.reject();var t="";return 2==e.status5&&21==e.status2&&(t="wqsxfq_laxin201710"),t?(0,C.getActiveInfo)(t):I.default.reject()}).then(function(e){if(!e)return I.default.reject();var t=[];(e.bingos||[]).forEach(function(e){e.Level&&t.push(parseInt(e.Level))});var r=(new Date).getTime(),n=(e.prizes||[]).filter(function(n){var o=(n.ConstraintTime||"").split(","),a=(n.PrizeTime||"").split(","),i=(n.DiscountQuota||"").split(",");return n.discount=i[0],n.quota=i[1],n.active=e.active,n.description="全品类(特例商品除外)",0==n.Status&&n.discount&&n.quota&&1e3*o[0]<=r&&1e3*o[1]>=r&&1e3*a[0]<=r&&1e3*a[1]>=r&&-1==t.indexOf(parseInt(n.Level))}).map(function(e){var t="type-dong",r="东券";switch(parseInt(e.Vender)){case 1:t="type-jing",r="京券";break;case 2:t="type-freight",r="运费券";break;case 3:t="type-pay",r="京东支付券";break;case 4:t="type-pay",r="白条券";break;default:t="type-dong",r="东券"}return{type:"coupon_precise",typeClass:t,typeName:r,isBingo:!1,discount:e.discount,quota:e.quota,description:e.description,level:e.Level,active:e.active}}).slice(0,3);return n.length?{type:"coupon_precise",data:n}:I.default.reject()}).catch(function(){return null}):I.default.resolve()}function l(e){e&&(0,C.activeDraw)(e.active,e.level).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};0==t.ret?((0,S.toast)("领取成功"),e.isBingo=!0):-1!=[3,4].indexOf(parseInt(t.ret))?((0,S.toast)("已领取过优惠券"),e.isBingo=!0):(0,S.toast)("领取失败")}).catch(function(){return null})}function p(){var e=new Date;w.set("SEARCH_COUPON_PROMOTION",{day:e.getDate()},{expire:"1d"})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length&&(0,E.isLogin)()?I.default.resolve().then(function(){var t=e.map(function(e){var t="type-dong",r="东券";switch(parseInt(e.couponType)){case 0:t="type-jing",r="京券";break;case 1:t="type-dong",r="东券";break;case 2:t="type-freight",r="运费券"}return{type:"coupon_ppms",typeClass:t,typeName:r,isBingo:!1,discount:e.discount,quota:e.quota,description:e.limitStr,roleId:e.roleId,key:e.couponKey}}).slice(0,3);return t.length?{type:"coupon_ppms",data:t}:null}):I.default.resolve()}function d(e){e&&(0,C.drawShopCoupon)(e.roleId,e.key).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};999==t.code?((0,S.toast)("领取成功"),e.isBingo=!0):(0,S.toast)(t.message||"领取失败")})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(!O.ENV.isWx||!O.ENV.isSq)return I.default.resolve();if("6728"!=e[0])return I.default.resolve();var r=(0,P.getCarInfo)()||{};return r.imgMap?(0,E.isLogin)()?(0,C.getCars)().then(function(e){if(!e||0!=e.errcode)return I.default.reject(!0);var t=e.data&&e.data.model;return t&&t.modelId&&t.logoUrl&&t.brandName?(t.logo=(0,O.getImg)(t.logoUrl,100,100),I.default.all([I.default.resolve(t),(0,C.getCarRecommend)(t.modelId,t.mileage,t.registrationDate)])):I.default.reject(!1)}).then(function(e){var n=x(e,2),o=n[0],a=n[1],i=[],u=[],s={};(void 0===a?[]:a).forEach(function(e){s[e.keyword]||(s[e.keyword]=!0,2==e.mark?i.push(e):u.push(e))});var l=[];r.keys.forEach(function(e){s[e.keyword]||(s[e.keyword]=!0,l.push(e))});for(var p=[].concat(i,u,l),c=[],d=0,f=0;d<p.length;d++){var g=p[d],h=r.imgMap[g.keyword];if("default"===g.type&&c.length>=5)break;if(h){var v=3,_="0-17-17";(o.registrationDate||o.mileage)&&"default"!=g.type&&(2==g.mark&&c.length<3?(v=1,_="0-17-15"):f++<3&&(v=2,_="0-17-16")),c.push({keyword:g.keyword,img:(0,O.getImg)(h,150,150),active:t==g.keyword?1:0,tag:v,rd:_})}if(c.length>=30)break}if(!(c.length<5)){for(var m=[],y=0;y<c.length;y++){var b=r.descMap[c[y].keyword];if(b&&(-1==m.indexOf(b)&&m.push(b),m.length>=6))break}var I=Date.now()-new Date(o.registrationDate||""),E=parseInt(I/2592e6);return E>=0?o.recommend="车龄"+(E>0?E:"小于1")+"个月，建议做保养，"+m.join("、"):o.mileage?o.recommend="行车里程"+o.mileage+"km,建议做保养，"+m.join("、"):(o.recommend="完善您的车龄信息，将为您推荐更精准的保养信息",o.needAdd=1),{type:"car",data:{info:o,list:c}}}}).catch(function(){return{type:"car",data:{tips:{needLogin:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}}}):I.default.resolve({type:"car",data:{tips:{needLogin:!0}}}):I.default.resolve()}function g(e){if(e&&e.adPicUrl&&e.toUrl)return{type:"banner_jingang",data:{type:"banner_jingang",image:e.adPicUrl,url:e.toUrl}}}function h(){return O.ENV.isWx&&O.ENV.isSq?w.get("SEARCH_BANNER_188").catch(function(){return null}).then(function(e){return e?I.default.reject():(0,C.get188Gift)()}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0!=e.ret&&101!=e.ret&&103!=e.ret&&104!=e.ret?(w.set("SEARCH_BANNER_188",!0,{expire:"30m"}),I.default.reject()):1==e.isnew?3!=e.newgift&&0==e.ret?(0,j.getPPMS)(32268).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];w.set("SEARCH_BANNER_188",!0,{expire:"1d"});var t=e[0];if(t)return{type:"banner_188",data:{type:"banner_188",image:t.branner,url:O.ENV.isWx?t.wxurl:t.squrl}}}):v():void w.set("SEARCH_BANNER_188",!0,{expire:"1d"})}).catch(function(){return null}):I.default.resolve()}function v(){return(0,C.getUserCoupon)().then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(0==e.ret){var t=Date.now(),r=new Date,n=null;if((e.allkinds_coupon||[]).forEach(function(e){r.setTime(e.beginTime),2==e.state&&0==e.cstyle&&e.ctype<2&&t>=r.getTime()&&(n?parseInt(n.parvalue)<parseInt(e.parvalue)&&(n=e):n=e)}),n){var o=parseInt(n.parvalue),a=parseInt(n.quota);if(!o)return;var i=a>0?"满"+a+"减"+o:o+"元";i="您有一张"+i+"的优惠券，下单后可直接使用！",console.warn(i),w.set("SEARCH_BANNER_188",!0,{expire:"1d"})}else w.set("SEARCH_BANNER_188",!0,{expire:"30m"})}else w.set("SEARCH_BANNER_188",!0,{expire:"30m"})})}function _(e){if(e&&e.image)return{type:"banner_ppms",data:{type:"banner_ppms",image:e.image,url:e.url}}}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[];return q.forEach(function(r){var n=e.find(function(e){return e&&e.type==r.type});n&&(n.coexist=r.coexist||[],n.order=r.order,t.push(n))}),t}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!t||!t.length)return!0;var r=t[0],n=q.find(function(t){return t.type==e});return n.order<=r.order||-1!=(r.coexist||[]).indexOf(n.type)}function b(e){if(!Array.isArray(e)||!e.length)return[];var t=e.shift(),r=e.filter(function(e){return-1!=(t.coexist||[]).indexOf(e.type)}).slice(0,1);return[t].concat(r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.store=void 0;var x=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),I=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../libs/promise.min")),E=require("../../../../common/login/loginv1.js"),w=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(require("../../../../common/localStorage.js")),k=require("../../common/js/base.js"),O=require("../../common/js/utils.js"),S=require("../../components/modal/modal.js"),P=require("../managers/ppms.manager.js"),j=require("../../model/ppms.js"),N=require("../managers/report.manager.js"),C=require("../../model/search-index.js"),R=function(){var e=!1;return{init:function(e){var t=e.coupon_info||{};e.coupon_info=null;var r=k.JD.url.getUrlParam("key",t.mobile_link),n=k.JD.url.getUrlParam("roleId",t.mobile_link);r&&n&&t.bind_type&&t.coupon_desc&&t.discount&&I.default.all([(0,C.getShopFav)(e.shop_id,e.vender_id),(0,C.getShopCouponStatus)(n,r)]).then(function(o){var a=x(o,2),i=a[0],u=void 0!==i&&i,s=a[1],l=(s=void 0===s?{}:s).resultCode,p=0,c=u?"领券":"关注并领取";14==l||15==l?(p=1,c="立即使用"):16!=l&&17!=l||(p=2,c="已领完"),t.btnText=c,t.couponState=p,t.hasFav=u,t.key=r,t.roleId=n,e.coupon_info=t}).catch(function(){return null})},draw:function(t){if(t&&!e){e=!0;var r=t.coupon_info||{};I.default.all([r.hasFav?I.default.resolve(!0):(0,C.addShopFav)(t.shop_id,t.vender_id),(0,C.drawShopCoupon)(r.roleId,r.key)]).then(function(t){var n=x(t,2),o=n[0],a=void 0!==o&&o,i=n[1],u=(i=void 0===i?{}:i).code;e=!1;var s="领取失败",l=a?"领券":"关注并领取",p=0;999==u?(p=1,s=!r.hasFav&&a?"已关注领取":"领取成功",l="立即使用"):-1!=[1003,8,11,16,17].indexOf(u)&&(p=2,s="抱歉，优惠券已失效",l="已领完"),(0,S.toast)(s),r.btnText=l,r.couponState=p,r.hasFav=a})}}}}(),q=[{type:"banner_ppms"},{type:"shop_ad"},{type:"shop_loop"},{type:"writer"},{type:"car"},{type:"category",coexist:["shop_plain","portal","banner_hongbao","banner_jingang","banner_188"]},{type:"shop_plain",coexist:["portal","banner_hongbao","banner_jingang"]},{type:"portal"},{type:"banner_hongbao"},{type:"banner_jingang"},{type:"banner_188"},{type:"coupon_precise"},{type:"coupon_ppms"},{type:"ecar"}].map(function(e,t){return e.coexist=e.coexist||[],e.order=t,e});exports.store={state:{prelude:{}},actions:{_initPrelude:function(i){var u=this,l=i.shop_ad,d=void 0===l?{}:l,v=i.shop_loop,x=void 0===v?{}:v,E=i.shop_plain,w=void 0===E?{}:E,k=i.banner_ppms,O=void 0===k?{}:k,S=i.writer,P=void 0===S?{}:S,j=i.car,C=void 0===j?{}:j,R=i.category,q=void 0===R?[]:R,U=i.portal,A=void 0===U?{}:U,T=i.banner_jingang,D=void 0===T?{}:T,L=i.coupon_ppms,B=void 0===L?{}:L,H=m([a(d),_(O),r(P),e(q),n(w),t(A),g(D)]);return I.default.all([y("shop_loop",H)?o(x):I.default.resolve(),y("car",H)?f(C.hcCid1s,C.keyword):I.default.resolve(),y("banner_188",H)?h():I.default.resolve(),y("coupon_precise",H)?s():I.default.resolve(),y("coupon_ppms",H)?c(B):I.default.resolve()]).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],r={};return b(H=m(H.concat(e))).forEach(function(e){e&&e.type&&e.data&&(r[e.type]=e.data,"coupon_precise"===e.type?(p(),(0,N.reportExposure)("EXPOSE_TOP_COUPON_PRECISE")):"coupon_ppms"===e.type?(0,N.reportExposure)("EXPOSE_TOP_COUPON_PPMS"):"writer"===e.type?(0,N.reportExposure)("EXPOSE_TOP_WRITER"):"portal"==e.type&&(0,N.reportExposure)("EXPOSE_TOP_PORTAL"),t.push(e.type))}),u.prelude=r,t.length&&(0,N.reportExposure)("EXPOSE_TOP",{},{eparam:u.keyword+"-"+t.join("#")}),u.prelude})},_resetPrelude:function(){this.prelude={}},_drawAdShopCoupon:function(){R.draw(this.prelude.shop_ad)},_drawTopCoupon:function(e,t){var r=this.prelude[e];if(r&&r.length){var n=r[t];n&&("coupon_precise"===e?l(n):"coupon_ppms"===e&&d(n))}}}}; 
 			}); 
		define("pages/search/list/stores/pseudo_item.store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.store=void 0;var e=require("../../model/search-index.js");exports.store={state:{pseudoItem:[]},actions:{_initPseudoItem:function(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];o&&o.length&&(this.pseudoItem=[],(0,e.getAutoRank)(o[0]).then(function(e){e&&(e.iType="autorank",e.order=13,e.btnText="去看看",t.pseudoItem.push(e))}))}}}; 
 			}); 
		define("pages/search/list/stores/search.store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function t(e,t){re=t?re:{},["sf","as","projectId","hiddenid","version","qp_disable","qp_exclude"].forEach(function(t){re[t]=e[t]||""})}function i(){var e="",t=(0,L.getFilter)("brand")||[];return oe.ExpressionKey&&0==t.length&&(e=31),e}function a(e,t){var i=e.data||{},a=(0,M.getProp)(i,"rewrite.hasSkuTop"),r=(0,M.getProp)(i,"searchm.Head.Summary")||{},o=(0,M.getProp)(i,"searchm.Paragraph")||[];if(o.length>0&&1==a){var n=o[0];n.wareid==t&&(n.isFsku=!0),0==(0,M.getProp)(r,"Page.PageSize")&&(r.Page={PageCount:"1",PageIndex:"1",PageSize:"10"}),r.OrgSkuCount=parseInt(r.OrgSkuCount,10)+1,r.ResultCount=parseInt(r.ResultCount,10)+1}return e}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(arguments[1])return(0,D.reportExposure)("EXPOSE_NORESULT_FALLBACK"),{type:"fallback"};var t={type:"",key:"",others:[]},i=(0,D.getReportInfo)(),a=e.QueryProcessor||{},r=a.ExpandQueryStatus,o=a.ExpandQuery;"replace"==r?(t.type="replace",t.key=o,(0,D.reportExposure)("EXPOSE_NORESULT_AUTOFIX",{eq_type:1,eq_key:i.keyword,eq_tar:t.key})):"suggest"==r?(t.type="suggest",t.key=o,(0,D.reportExposure)("EXPOSE_NORESULT_AUTOFIX",{eq_type:2,eq_key:i.keyword,eq_tar:t.key})):"hidden"==r&&1==a.ShowHiddenInfo&&(t.type="hidden",t.key=o);var n=e.WordSearchInfo||{};if("true"==e.isWordSearch&&n.showWordOne){t.type="recommend",t.key=n.showWordOne;var s=(n.showWordOther||"").split(";").filter(function(e){return e});if(s.length){var p=s.indexOf(t.key);-1!=p&&s.splice(p,1),t.others=s,(0,D.reportExposure)("EXPOSE_NORESULT_RECOMMAND",{ss_reqsea:e.requerySearch||"",ss_key:i.keyword,ss_onkey:t.key,ss_otherkey:t.others.join(";")})}}return t}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],i=e.csid||"",a=e.PosAdInfo&&e.PosAdInfo.event_id||"0",r=0,o=0;0!=(a&Z.events.eff)&&(o=1,0!=(a&Z.events.gray)&&(o=2),0!=(a&Z.events.ads)&&(r=1)),Z.ver="ad-"+o,Z.verval=o,Z.ifad=r,Z.eventid=a,Z.csid=i,t&&(Z.t1=i.split("_")[1]||"")}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.filter(function(e){return e}).forEach(function(e){e.isAd=!0,e.wareid=e.sku_id,e.product_id=e.spu_id,e.catid=e.sku_cid3,e.dredisprice=e.strSku_price||e.ad_price,e.commentcount=e.comment_num,e.good=e.good_rate;var i=e.shop_link||{};e.shop_name=i.shop_name||"",e.good_shop=i.good_shop||"",e.Content={imageurl:e.image_url,long_image_url:e.long_image_url||e.image_url,warename:e.ad_title,shortWarename:e.strAsg_title||e.ad_smart_title,extname:e.strAsg_highlight||e.ad_highlight,CustomAttrList:(e.strAsg_attribute||e.ad_attribute||"").replace("|","^")},e.Content.gaiyawarename=e.Content.extname?e.Content.shortWarename||e.Content.warename:"";var a=e.sku_benefit||{};e.pf=(0,M.getProp)(a,"b4.0.desc")?["5"]:[],e.secKill=(0,M.getProp)(a,"b32.0.desc")?{status:"1"}:{status:""},e.ico=(0,M.getProp)(a,"b256.0.icon_id")||"",e.pfex=(0,M.getProp)(a,"b2048.0.desc")?{plus95:"1"}:{plus95:""};var r=t.find(function(t){return t.wareid==e.wareid});r&&(e.userPsnProductNew=r.userPsnProductNew)}),e}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=[],a=1,r={};return e.forEach(function(e){e&&e.wareid&&(t.forEach(function(e){e&&e.wareid&&(r[e.wareid]||parseInt(e.flow_order,10)!=a||(r[e.wareid]=2,i.push(e)))}),r[e.wareid]||(r[e.wareid]=1,i.push(e),a+=1))}),i}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]?arguments[2]:0),i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments[4];return e.forEach(function(e,r){e.id=i+"-"+r+"-"+e.wareid,e.ind=r+1,e.page=i,e.cgind=t+r+1,e.ifad=Z.ifad,e.ver=Z.verval,e.eventid=Z.eventid,e.csid=Z.csid,e.as=re.as||"0",e.tline=2,e.tlineimg=2,e.Content.imageurl=(0,M.getImg)(e.Content.imageurl,372,372);var o=e.Content.long_image_url||e.Content.imageurl;e.Content.long_image_url=(0,M.getImg)(o,372,478).replace(/(\.(jpg|jpeg))/,"$1!cc_372x478"),((0,R.inCategory)(F.PPMS_CATEGORY_MAP.SHORT_TITLE,[$[0],Q[0],V[0]])||e.Content.shortWarename&&e.Content.CustomAttrList)&&(e.tlineimg=1),e.Content.gaiyawarename&&e.Content.extname&&(e.isGaiya=!0,e.tline=1,e.Content.gaiyaAttrs=e.Content.extname.split(/[|丨｜︱]/).filter(function(e){return e.trim()}).slice(0,3));var n=[];1==e.carTag&&n.push({type:"tag",name:"原配"}),1==e.isbjp&&n.push("保健食品"),e.sxzz?n=n.concat(e.sxzz.split("^").filter(function(e){return e.trim()})):e.Content.CustomAttrList&&(n=n.concat(e.Content.CustomAttrList.split("^").filter(function(e){return e.trim()}))),e.attrs=n.slice(0,3),q.cid1s.indexOf(e.cid1)>-1&&(e.tline=1,e.isBook=!0,e.isOverseaBook=q.cid2s.indexOf(e.cid2)>-1,e.book={ad:"",author:e.Content.author,award:v(e.award)});var s=e.MultiSuppliers;0!=e.shop_id&&s&&s.supplier_count&&s.min_price&&(s.min_price_text=(s.min_price/100).toFixed(2)),(0,R.inCategory)(F.PPMS_CATEGORY_MAP.AUCTION,[e.cid1,e.cid2,e.catid])&&(e.isPaimai=!0),(0,R.inCategory)(F.PPMS_CATEGORY_MAP.ESTATE,[e.cid1,e.cid2,e.catid])&&(e.isEstate=!0,e.tourl="//realestate.m.jd.com/single/"+e.wareid),1==e.usedSPLX&&(e.isQiyeyanji=!0,e.tourl="//paipai.m.jd.com/direct/goodsDetail?skuId="+e.wareid+"&entryid=p005ppyj0jdwq7"),e.isJx=0!=(8388608&e.productext),e.isYushou=0!=(4096&e.sku_mark),e.isPopLease=3==e.lease_type,e.isYushou||0==(2048&e.productext2)||(e.isPingou=!0),e.price={type:"jd",_value:parseFloat(e.dredisprice),value:d(e.dredisprice)},e._comment=m(e.commentcount),e._goodrate=e._comment&&parseInt(e.good)>0?e.good:"",e.comment="",e.goodrate="",e.tags={},e.isAd||(e.showSimilar=-1!=X.indexOf($[0]),e.showSkuSwitch=-1!=K.cid1s.indexOf($[0])||-1!=K.cid2s.indexOf(Q[0])||-1!=K.cid3s.indexOf(V[0]),e.showCart=!e.isYushou&&!e.isPingou&&(0,R.inCategory)(F.PPMS_CATEGORY_MAP.CART,[e.cid1,e.cid2,e.catid])&&!(1==e.isPlusLimit&&!G)&&!(1==e.plusVender&&!G)),e.keyword=a}),e}function c(){var e=["id","wareid","product_id","cid1","cid2","catid","vender_id","shop_id","shop_name","lowestbuy","showlog_new","wareInStock","isAd","exposal_url","click_url","flow_order","ind","page","cgind","as","pps","ifad","ver","eventid","csid","tline","tlineimg","Content","attrs","tags","isBook","book","MultiSuppliers","tourl","isGaiya","isPaimai","isEstate","isQiyeyanji","isPopLease","isJx","isYushou","isPingou","price","comment","goodrate","showSimilar","showSkuSwitch","showCart","keyword"];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(t){var i={};return e.forEach(function(e){return void 0!==t[e]&&(i[e]=t[e])}),i})}function d(e){if(!(e&&parseFloat(e)>0))return[];var t=e.toString().split(".").filter(function(e){return e}),i=parseInt(t[0]);return i>=1e4?t[1]="":i>0&&(t[1]=((t[1]||"")+"00").slice(0,2)),t}function m(e,t){var i="";return(e=parseInt(e))>0&&(i=e>=1e8?parseInt(e/1e8)+"亿":e>=1e5?parseInt(e/1e4)+"万":e>=1e4?(e/1e4).toFixed(1)+"万":e+"",t&&(i+=i.length>1?"+":""),i+="条评价"),i}function u(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments[3];e&&t&&(1!=a?i.error||2!=i.type||!i.ret?e.price={type:"jd",_value:parseFloat(t.p),value:d(t.p)}:1==i.ret.hideRealPrice?e.price={type:"hide",value:"待发布"}:i.ret.cp>0&&(e.price={type:"yushou",_value:parseFloat(i.ret.cp),value:d(i.ret.cp)}):e.price={type:"hide",value:"待发布"})}function g(e,t,i){if(e&&t&&1!=i){var a=[],r=[],o=t.up&&t.up.split(",")[0];"tkp"===o&&t.tkp>0?a.push({name:"专属价",text:t.tkp}):"sp"===o&&t.sp>0&&-1!=U.indexOf(e.shop_id)?a.push({name:"山姆价",text:t.sp}):"nup"===o&&t.nup>0?a.push({name:"新人价",text:t.nup}):"stp"===o&&t.stp>0?a.push({name:"学生价",text:t.stp}):"pp"===o&&t.pp>0||"tpp"===o&&t.tpp>0?a.push({name:"PLUS价",text:t.pp>0?t.pp:t.tpp}):e.isBook&&!e.isOverseaBook&&t.m>0&&a.push({name:"划线价",text:t.m});var n=Date.now(),s=t.np||{};return(1==s.type||2==s.type)&&s.s<n&&s.e>n&&(1==s.type&&s.m>0?r.push({name:"限时限量抢购",text:"限"+s.m+"件"}):2==s.type&&s.s>0&&s.e>s.s&&r.push({name:"限时限量抢购",text:"限"+((s.e-s.s)/36e5).toFixed(1)+"小时"})),{price:a,price_bottom:r}}}function f(e,t){if(e&&t){var i=[];if(34==t.a)i.push({name:"无货"});else if(36==t.a)i.push({name:"预订"});else{var a=parseInt(t.c)||0,r=parseInt(e.lowestbuy)||0;r>1?a>0&&a<r?i.push({name:"库存不足"}):i.push({name:"x件起售",text:r+"件起售"}):a>0&&a<=5&&i.push({name:"仅剩x件",text:"仅剩"+a+"件"})}return{picture:i}}}function l(e,t){if(e&&!e.error){var i=[];if(1==e.state||2==e.state){i.push({name:"预约"});var a=t&&t.np||{};if(1==e.showPromoPrice&&3==a.type&&1==a.t){var r=_(t);r&&i.push(r)}}else 3==e.state||4==e.state?i.push({name:"抢购"}):i.push({name:"预售"});return{picture:i}}}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return void 0===t.SkuId?(e.comment=e._comment,void(e.goodrate=e._goodrate)):1==t.SensitiveBook?(e.comment="",void(e.goodrate="")):void(t.CommentCount>0?(e.comment=m(t.CommentCount,i),e.goodrate=t.GoodRateShow>0?t.GoodRateShow:""):(e.comment="暂无评论",e.goodrate=""))}function y(e,t){var i=t&&t.np||{},a=0!=i.type||1!=i.t&&2!=i.t?null:_(t),r=null;if(e&&e.startDate&&e.endDate&&e.forecastDate&&e.forecastDate<=Date.now()){var o=null,n=(0,M.formatDate)(e.startDate,"yyyy.MM.dd"),s=(0,M.formatDate)(e.endDate-1e3,"yyyy.MM.dd");o=n==s?(0,M.formatDate)(e.startDate,"MM月dd日"):(0,M.formatDate)(e.startDate,"MM.dd")+"-"+(0,M.formatDate)(e.endDate,"MM.dd");var p=(e.waistBandContent||"").trim(),c=(e.waistBandUrl||"").split(",");r={name:"腰带",date:o,text:p,startDate:n,endDate:s,bgImgs:c,bigImg:(0,M.getImg)(c[3])||"https://img30.360buyimg.com/jgsq-productsoa/jfs/t14332/56/2342045055/8025/c40894c7/5a990af1N2719ee6f.png",smallImg:(0,M.getImg)(c[4])||"https://img30.360buyimg.com/jgsq-productsoa/jfs/t18370/238/573389987/5920/39b8d114/5a990afdNe1820d1f.png",style:"text-align: center;"}}var d=[];return a&&r?a.startDate==r.startDate&&a.endDate==r.endDate?(r.bgImgs[6]&&r.bgImgs[7]&&(r.bigImg=(0,M.getImg)(r.bgImgs[6]),r.smallImg=(0,M.getImg)(r.bgImgs[7]),a.image=""),r.style="text-align: left; padding-right: 30%;",d.push(r,a)):(r.text+="("+r.date+")",d.push(r)):r?(r.text+="("+r.date+")",d.push(r)):a&&d.push(a),{picture:d}}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.np||{};if(t.s>0&&t.e>0){var i=null,a=(0,M.formatDate)(t.s,"yyyy.MM.dd"),r=(0,M.formatDate)(t.e-1e3,"yyyy.MM.dd");return i=a==r?(0,M.formatDate)(t.s,"MM月dd日"):(0,M.formatDate)(t.s,"MM.dd")+"-"+(0,M.formatDate)(t.e,"MM.dd"),{name:0==t.type?"预告价":"预约期可抢购",price:(1==t.t?t.p:e.p).replace(/(\d{4,})\.\d*/,"$1").replace(/\.0+$/,""),date:i,text:t.c.slice(0,3),image:"https://img11.360buyimg.com/jdphoto/s102x108_jfs/t19636/82/591116592/3613/b726a458/5a97a5ffNe1113ec5.png",startDate:a,endDate:r}}}function b(e,t){e&&t&&(e.book.ad=(t.ad||"").replace(/<[^>].*?>/g,""))}function v(e){var t=["一","二","三","四","五","六","七","八","九"],i="";if(e){var a=parseInt(e.substr(0,1))-1,r=e.substr(1,3);a>=0&&r&&(i="第"+t[a]+"届京东文学奖"+("st"==r?"获奖作品":"入围作品"))}return i}function x(e,t){e&&t&&(t.price>0&&(e.price={type:"paimai",_value:t.price/100,value:d(t.price/100)}),9==t.paimaitype?e.tourl="//wqs.jd.com/order/auction_detail.shtml?login=1&auction="+t.paimaiid+"&r="+Math.random():6==t.paimaitype||7==t.paimaitype?e.tourl="//mpaimai.jd.com/man/"+t.skuid:5==t.paimaitype&&(e.tourl="//mpaimai.jd.com/"+t.paimaiid))}function j(e){if(e)return{price_bottom:["分期免息"]}}function P(e,t){if(e&&t){var i={1:"天",2:"周",3:"月"}[parseInt(t.leaseUnit)],a=parseFloat(t.unitRent);a>0&&i&&(e.price={type:"lease",_value:a,value:d(t.unitRent),unit:i},e.tourl="//poplease.jd.com/d/goods_detail_rent.html?usedNo="+e.wareid)}}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e.pinGou&&e.pinGou.bp>0&&e.pinGou.count>0&&t.p){var i=e.pinGou.count+"人拼",a="单买 ¥"+t.p;e.price={type:"pingou",_value:e.pinGou.bp,value:d(e.pinGou.bp),condition:i,original:a}}}function S(e){if(e){var t=[];return e.find(function(e){return 1==e.flag})&&t.push("本地仓"),{price_bottom:t}}}function k(e){var t=[],i=J.find(function(t){return e.ico&&t&&-1!=(t.actid||"").split("|").filter(function(e){return e}).indexOf(e.ico)});if(i){var a=(i.icons||[]).find(function(t){return e.ico===t.actid}),r=a&&a.url||i.logo2,o=r&&r.match(/\/s(\d+)x(\d+)_jfs\//)||[],n=parseInt(o[1])/2||"";r&&n&&t.push({name:"活动",image:(0,M.getImg)(r),width:n})}return{title:t}}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=[],a=0!=(4096&e.productext),r=1==e.isnoZY,o=0!=(4096&e.flags),n=100==e.venderType,s=110==e.venderType,p=e.isAd?1==e.self_run:!(a&&r)&&(o||n||s);p&&i.push("自营"),0!=(1&e.property_flag)&&i.push("京东物流"),e.isFsku&&i.push("sku直搜"),1==e.isPlusLimit&&i.push("PLUS专享购"),0!=(8388608&e.productext)&&i.push("精选"),"10123029"==e.vender_id&&i.push("FARFETCH"),0!=(e.productext2&Math.pow(2,30))&&i.push("京品家电"),"computer"==e.jpLabel&&i.push("京品电脑"),"digital"==e.jpLabel&&i.push("京品数码"),"stationery"==e.jpLabel&&i.push("京品文具"),"phone"==e.jpLabel&&i.push("京品手机"),"13765"==e.cid1&&i.push("二手拍拍"),0!=(16&e.productext2)&&i.push("艺术品"),0!=(1024&e.productext)&&i.push("京东国际"),0!=(262144&e.productext)&&i.push("京东超市"),"299330"==e.brand_id&&i.push("京造"),1==e.jzfp&&i.push("扶贫特产"),3==e.isNSNGgoods&&i.push("京鱼智能"),1==e.isStoreOnSale&&i.push("门店有售"),1==e.isfanbox&&i.push("FANBOX"),1==e.xxtk&&i.push("线下同款"),1==e.fxg&&i.push("放心购"),0!=(4&e.productext2)&&i.push("到店自取"),(0!=(33554432&e.productext)||0!=(512&e.productext))&&i.push("新品"),!!!(t.price||[]).find(function(e){return"PLUS价"===e.name})&&G&&e.pfex&&1==e.pfex.plus95&&i.push("PLUS95折("+(p?"自营":"POP")+")"),e.secKill&&1==e.secKill.status&&i.push("秒杀"),0!=(1024&e.productext)&&0!=(4096&e.flags)&&1==e.isOverSea&&i.push("全球购自营包税");var c=e.pfdt,d=e.pf;if(c&&c.t){var m="";switch(c.t){case"1":m="每满"+c.m+"减"+c.j;break;case"2":case"25":m="满"+c.m+"减"+c.j;break;case"3":case"26":m=c.m+"免"+c.j;break;case"4":m=c.m+"元"+c.j+"件";break;case"5":case"27":m=c.m+"件"+c.j+"折"}m&&i.push({name:"满减详细",text:m})}else d&&d.length>0&&d.forEach(function(e){var t="";switch(e){case"4":t="赠豆";break;case"5":t="赠品";break;case"58":t="满赠"}t&&-1==i.indexOf(t)&&i.push(t)});var u=e.coupon||{};if(0==u.t)u.j>0&&i.push({name:"券促销",text:u.j+"元京券"});else if(1==u.t)u.m>0&&u.j>0&&i.push({name:"券促销",text:"领券满"+u.m+"减"+u.j});else if(3==u.t){var g=u.d&&u.d.info||[];if(1==g.length){var f=g[0],l=((10*f.discount).toFixed(1)+"").replace(/\.0$/,"");i.push({name:"券促销",text:"领券满"+f.quota+"享"+l+"折"})}else if(g.length>1){var h=g.map(function(e){return((10*e.discount).toFixed(1)+"").replace(/\.0$/,"")});h=h.sort(function(e,t){return e-t}).slice(0,3),i.push({name:"券促销",text:"领券"+h.join("/")+"折"})}}else 4==u.t&&u.m>0&&u.j>0&&i.push({name:"券促销",text:"领券每满"+u.m+"减"+u.j});return o&&0==(32&e.sku_mark)&&a&&i.push("厂商配送"),3==e.freeMark&&i.push("商家免邮"),1==e.sendService&&i.push("京尊达"),"1000076153"==e.shop_id&&0!=(131072&e.productext2)&&i.push("京瞬达"),1==e.bjssy&&i.push("价保"),1==e.freeMark&&i.push("免费送装"),2==e.freeMark&&i.push("送货上门"),1==e.isFreeServ?i.push("免费安装"):(1==e.isActualServ||2==e.isFreeLoad)&&i.push("安装服务"),0!=(8&e.productext)&&i.push("到店服务"),{price_bottom:i}}function I(e){var t=[];return 1==e.plusVender&&t.push("PLUS会员店"),110!=e.venderType&&(1==e.decoration&&t.push("装修联盟"),1==e.good_shop&&t.push("京东好店"),2==e.good_shop&&t.push("海囤优选店")),{shop:t}}function C(e){var t=[],i=Number(e.userPsnProductNew).toString(2);return 0!=(32&e.userPsnProductNew)?t.push("已买过"):0!=(64&e.userPsnProductNew)?t.push("已关注"):i.length>=33&&1==i.substr(-33,1)?t.push("最近常看"):i.length>=34&&1==i.substr(-34,1)?t.push("近期加车"):i.length>=35&&1==i.substr(-35,1)&&t.push("经常购买"),{bottom:t}}function O(e){var t=[];return 1!=e.is_video||e.isEstate||0!=(8388608&e.productext)||e.isPingou||t.push("视频"),{picture_upper:t}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.store=void 0;var N=function(){function e(e,t){var i=[],a=!0,r=!1,o=void 0;try{for(var n,s=e[Symbol.iterator]();!(a=(n=s.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),T=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(require("../../model/search-index.js")),A=require("../../common/js/base.js"),M=require("../../common/js/utils.js"),F=require("../../constants/ppms.js"),R=require("../managers/ppms.manager.js"),D=require("../managers/report.manager.js"),L=require("./filter.store.js"),B="1129"==A.app.scene,z=["1315","1316","1319","1672","1318","6144","11729"],q={cid1s:["1713"],cid2s:["4855","6929"]},U=["598847","680887"],G=!1,H=["737","655","652","670","9987"],Y=!1,X=["1315","1318","1672","11729"],K={cid1s:["1315"],cid2s:["11842","14941"],cid3s:["4999","12199","7062","5001","4998"]},J=[],W=!1,$=void 0,Q=void 0,V=void 0,Z={events:{eff:"1",ads:"2",gray:"4"},ifad:"0",ver:"ad-0",verval:"0",eventid:"0",csid:"",t1:""},ee=function(){function e(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return e.image&&(e.width=parseInt(e.image.match(/\/s(\d+)x(\d+)_jfs\//)[1])/2,e.image=e.image.replace(/^\/\//,"https://")),e})}function t(e,t){var i=[];return e.forEach(function(e){var a=t.find(function(t){return"string"==typeof t?e.name===t:e.name===t.name});a&&(a="string"==typeof a?{name:a}:a,i.push(Object.assign({},e,a)))}),i}var i=[{name:"预售",type:"normal",class:"red",text:"预售"},{name:"抢购",type:"normal",class:"red",text:"抢购"},{name:"预约",type:"normal",class:"red",text:"预约",coexist:["预约期可抢购"]},{name:"预约期可抢购",type:"special-price"},{name:"预订",type:"normal",class:"red",text:"预订"},{name:"无货",type:"normal",text:"无货"},{name:"腰带",type:"special-belt",coexist:["预告价"]},{name:"预告价",type:"special-price"},{name:"仅剩x件",type:"normal",text:""},{name:"x件起售",type:"normal",text:""},{name:"库存不足",type:"normal",text:"库存不足"}],a=e([{name:"视频",image:""}]),r=e([{name:"活动",image:""}]),o=e([{name:"专属价",type:"complex",class:"price-token",text:"",image:"//img11.360buyimg.com/jdphoto/s59x22_jfs/t5812/358/4307623656/1656/b618d6ef/594a3b93N00874224.png"},{name:"山姆价",type:"complex",class:"price-sams",text:"",image:"//img11.360buyimg.com/jdphoto/s56x28_jfs/t7711/149/2077694997/15813/ed60c12c/59a784b3N9089ca4d.png"},{name:"新人价",type:"complex",class:"price-newcomer",text:"",image:"//img11.360buyimg.com/jdphoto/s60x28_jfs/t27901/66/265530648/1420/692fd3e3/5b8ce64aNf6f71e9b.png"},{name:"学生价",type:"complex",class:"price-student",text:"",image:"//img11.360buyimg.com/jdphoto/s60x28_jfs/t1/28916/11/8483/1391/5c762b79E99def58d/fc187d0de0f92504.png"},{name:"PLUS价",type:"complex",class:"price-plus",text:"",image:"//img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"},{name:"划线价",type:"special-lineation",text:""}]),n=[{priority:e([{name:"自营",type:"image",image:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png"},{name:"京东物流",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/15952/7/2003/5832/5c185dd7E3a752a62/00dfa8da23f5a1fd.png"}]),limit:1},{priority:e([{name:"sku直搜",type:"image",image:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t5734/347/3788600457/2211/93387e46/59423aeeN58b9ce25.png"},{name:"PLUS专享购",type:"image",image:"//img11.360buyimg.com/jdphoto/s107x28_jfs/t1/110556/14/832/6729/5df87e02E37ad3e0e/d29f42393e157f7e.png"},{name:"精选",type:"image",image:"//img11.360buyimg.com/jdphoto/s100x28_jfs/t7597/78/1439801434/2667/5d29b409/599cf128N4a0d891e.png"},{name:"FARFETCH",type:"image",image:"//img11.360buyimg.com/jdphoto/s114x28_jfs/t1/41343/24/1504/775/5cc69fe3E9bd162d8/337aa4419111166d.png"},{name:"京品家电",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/11729/32/11364/2221/5c88a62fEc88eef70/17001da46b88f252.png"},{name:"京品电脑",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t28402/133/1181098409/2147/8fbd61fa/5ce24709Nfc8c3b24.png"},{name:"京品数码",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/53625/20/595/2529/5ce24700E1c3c7127/19b0623cc6a7b5da.png"},{name:"京品文具",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t28012/170/1498540272/2023/186f2658/5ce24705Nb0711465.png"},{name:"京品手机",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/66511/3/2872/1955/5d118f22Edc5c0ea0/dd426d77193773bc.png"},{name:"二手拍拍",type:"image",image:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t27154/326/2525821085/883/401fa607/5c04f3acN34087c51.png"},{name:"艺术品",type:"image",image:"//img11.360buyimg.com/jdphoto/s68x28_jfs/t10540/240/2161662372/1576/bf008be1/59eff91eNf0ba4ba6.png"},{name:"京东国际",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/66045/37/15279/2314/5dca584eEebf2921b/22ae3979a32c3834.png"},{name:"京东超市",type:"image",image:"//img11.360buyimg.com/jdphoto/s102x28_jfs/t8488/217/823821809/2368/8468a10d/59af6602N66a24418.png"},{name:"京造",type:"image",image:"//img11.360buyimg.com/jdphoto/s61x35_jfs/t11623/159/1253379604/2040/77aae356/5a41b795N0be954ef.png"},{name:"扶贫特产",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t15094/106/2539531431/2519/73b32d3f/5aa74c0bN677991b0.png"},{name:"京鱼智能",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t29836/348/856399196/2556/ca0d3c54/5c00a6f2Nd2ee8b91.png"},{name:"拍卖",type:"image",image:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t7426/125/1486234607/1414/b8ce405e/599cf0e6N0b9f60af.png"},{name:"门店有售",type:"image",image:"//img11.360buyimg.com/jdphoto/s115x28_jfs/t1/31201/10/3489/2187/5c7502a0E717299d6/d3d1a72108fd9c2e.png"},{name:"FANBOX",type:"image",image:"//img11.360buyimg.com/jdphoto/s91x28_jfs/t1/30141/7/2413/2381/5c6a54cfE42fed22f/3e3cc92acb4cbf0b.png"},{name:"线下同款",type:"image",image:"//img12.360buyimg.com/img/s94x28_jfs/t1/103690/4/16665/5579/5e7da94fE121bf2cc/46fec299c7e8db8b.png"}]),limit:1},{priority:e([{name:"放心购",type:"image",image:"//img11.360buyimg.com/jdphoto/s68x28_jfs/t28474/79/699858248/2214/bced3f94/5bfb58faNfdbaaf9e.png"},{name:"到店自取",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t8227/250/760846646/2232/aff6a742/59ae3ca2N71dc8645.png"},{name:"新品",type:"image",image:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t7378/78/1450098580/1414/a8e80023/599cf490N8eaf23f7.png"}]),limit:2},{priority:e([{name:"PLUS95折(POP)",type:"image",image:"//img11.360buyimg.com/jdphoto/s106x28_jfs/t30550/48/1317820002/2737/f89267f5/5cdcfc02Na7d8136e.png"},{name:"PLUS95折(自营)",type:"image",image:"//img11.360buyimg.com/jdphoto/s106x28_jfs/t30550/48/1317820002/2737/f89267f5/5cdcfc02Na7d8136e.png"},{name:"限时限量抢购",type:"text",text:""},{name:"秒杀",type:"image",image:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t7867/19/1452018090/1756/1c57bcf8/599cf3f5N7dbe95e5.png"},{name:"满减详细",type:"text",text:"",class:"reduction"},{name:"券促销",type:"text",text:"",class:"coupon"},{name:"全球购自营包税",type:"image",image:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t12559/358/5333293/1594/c1d92f2f/5a0174ccN4a86d74d.png"},{name:"分期免息",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7702/51/1390972217/2695/d56f9fc/599cf425Ne2ced732.png"},{name:"赠品",type:"image",image:"//img11.360buyimg.com/jdphoto/s28x28_jfs/t13501/220/748441324/1050/f2add5a2/5a128a72N857b1c57.png"},{name:"满赠",type:"image",image:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t14293/213/327359722/1869/c992a068/5a2a340aNb1e0aa8f.png"},{name:"赠豆",type:"image",image:"//img11.360buyimg.com/jdphoto/s28x28_jfs/t12904/231/705484511/705/5ad9e04c/5a128a62Nd05d709b.png"}]),limit:2},{priority:e([{name:"厂商配送",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7891/226/1723911960/2312/c37c6a26/599fdc0eNe3e4977d.png"},{name:"本地仓",type:"image",image:"//img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png"},{name:"商家免邮",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7318/163/1463112656/2654/47848ed8/599cf40eN04d1e4f1.png"},{name:"京尊达",type:"image",image:"//img11.360buyimg.com/jdphoto/s68x28_jfs/t7276/241/1505050742/1966/f1337e08/599cf586Ne5cb3dd6.png"},{name:"京瞬达",type:"image",image:"//img11.360buyimg.com/jdphoto/s68x28_jfs/t22360/254/2192420554/2143/df52c275/5b4c3d8cN6b0e7b3a.png"}]),limit:2},{priority:e([{name:"价保",type:"image",image:"//img11.360buyimg.com/jdphoto/s86x28_jfs/t10087/205/1719717382/1704/5cce1bf0/59e566f0Nfcb46a11.png"},{name:"免费送装",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7969/213/1437419868/2878/5de8c14b/599cf4f9N1e125e9a.png"},{name:"送货上门",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7681/173/1432154683/2027/cf5d60d8/599cf4d1N7f441fb1.png"},{name:"免费安装",type:"image",image:"//img12.360buyimg.com/img/s88x28_jfs/t1/109196/10/8275/2778/5e6767e8E8746c2d2/c7ac7add9197bf65.png"},{name:"安装服务",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7066/233/2178766698/2704/e4a77d51/5992b593N7a4cda24.png"},{name:"到店服务",type:"image",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/83937/20/6664/3749/5d4a9f49Eca02f127/19e871ac77922bf2.png"}]),limit:1}],s=e([{name:"PLUS会员店",class:"icon-plus-shop"},{name:"装修联盟",image:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/24919/12/3295/2568/5c25d067Ea0f4e690/9e94e17f36f626d9.png"},{name:"京东好店",class:"icon-good-shop"},{name:"海囤优选店",image:"//img11.360buyimg.com/jdphoto/s68x28_jfs/t1/38357/5/9891/1684/5d118f8aE058324aa/41ad2127f9e45057.png"}]),p=e([{name:"已看过",image:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t12106/279/1935318217/2914/3852d57b/5a2e281cNce54829f.png"},{name:"已买过",image:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t16111/321/257108586/2906/71d79d89/5a2e282eN1153a330.png"},{name:"已关注",image:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t16186/178/326016442/2909/4c8c0be7/5a2e282eN83fcafb8.png"},{name:"最近常看",image:"//img11.360buyimg.com/jdphoto/s148x28_jfs/t14152/70/1924097622/3758/671576e3/5a2e282fN2e35172e.png"},{name:"近期加车",image:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t13570/114/1947915845/2815/bd22145d/5a2e282fNafa8838d.png"},{name:"经常购买",image:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t15436/327/473650211/3067/5a88ddba/5a2e282fN90b2b7e5.png"}]);return{sortPicture:function(e){var a=[],r=t(i,e),o=r[0];if(o){a.push(o);for(var n=1;n<r.length;n++)-1!=(o.coexist||[]).indexOf(r[n].name)&&a.push(r[n])}return a},sortPictureUpper:function(e){return t(a,e).slice(0,1)},sortTitle:function(e){return t(r,e).slice(0,2)},sortPrice:function(e){return t(o,e).slice(0,2)},sortPriceBottom:function(e){return n.reduce(function(i,a){return i.concat(t(a.priority,e).slice(0,a.limit))},[])},sortShop:function(e){return t(s,e).slice(0,1)},sortBottom:function(e){return t(p,e).slice(0,1)},merge:function(e){var t={picture:[],picture_upper:[],title:[],price:[],price_bottom:[],shop:[],bottom:[]};return Object.keys(t).forEach(function(i){e.forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e[i]&&t[i]&&(t[i]=t[i].concat(e[i]))});var a=ee["sort"+i.replace(/(?:^|_)(\w)/g,function(e,t){return t.toUpperCase()})];"function"==typeof a&&(t[i]=a.call(ee,t[i]))}),t}}}(),te={data:null,isFallback:!1,check:function(e){return te.isFallback=(e.filt_type||e.expression_key)&&te.data,te.isFallback},save:function(e){te.data=e,te.isFallback=!1}},ie="",ae=null,re={},oe={ExpressionKey:""};exports.store={state:{searchTips:{type:"",key:"",others:[]},pageInfo:{page:1,pageSize:20,pageCount:1,resultCount:0,bigPageSize:200,span:20},isMedicineSearch:!1,searchError:{status:!1,reqParams:{}},isNewSearch:!1,loading:!1,loaded:!1,listMode:1,longImgMode:!1,list:[],relatedKeys:[]},actions:{_refresh:function(e,i,a){var r=this;e.yhyx=1,oe={},t(e,"noresult"===i),this._initFilter(e);var o=!!["cid1","cid2","catid"].find(function(e){return(0,L.getFilter)(e)});return e.key||o?(this._resetShops(),this._resetPrelude(),this._initFloat(e.key),this._search({key:e.key,isRefresh:!0,ppmsPromise:a}).then(function(){r._renderFloat()})):Promise.resolve()},_search:function(){var t=this,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},m=d.key,_=d.isRefresh,v=d.page,q=d.isReset,U=d.isFallback,X=d.ppmsPromise,K=_||!v||1==v;if(this.isNewSearch=K,this.loading&&!K&&!U)return Promise.resolve();var ne=!!["cid1","cid2","catid"].find(function(e){return(0,L.getFilter)(e)});if(!m&&!ne)return Promise.resolve();v&&1!=v&&v%2!=0||(0,D.reportItemExposureToMeridian)();var se={key:m,yhyx:1==(0,L.getFilter)("redisstore")?1:0,t1:v>=2?Z.t1:"",pagesize:this.pageInfo.pageSize};_||(this.pageInfo.page=v||this.pageInfo.page,se.page=this.pageInfo.page);var pe=(0,L.getFilterParams)();re.qp_exclude=i(),Object.assign(se,re,pe),console.log("%c-> ","color: #dd4a68",se),ae=se,se.page&&1!=se.page&&!q||(this.list=[],this.searchTips={},this.relatedKeys=[],this.showBackToTop=!1,se.page&&1!=se.page||(this.cartInfo.canShow=!1)),this.loading=!0;var ce=function(){t.loading=!1,t.loaded=!0};this.searchError.status=!1;var de={},me="",ue="",ge=Date.now();return Promise.all([T.doSearch(se),X]).then(function(e){var i=N(e,1)[0],c=void 0===i?{}:i;if((0,A.reportSpeed)(1742,{s9:Date.now()-ge}),B?A.JD.report.umpBiz({bizid:759,operation:25,result:0,message:"spider search success"}):A.JD.report.umpBiz({bizid:759,operation:8,result:0,message:"search json success"}),ae!==se)return Promise.reject({isInvalid:!0});if(0!=c.retcode)return se.page&&1!=se.page||!B&&A.JD.report.umpBiz({bizid:759,operation:1,result:1,message:"search api fail"}),Promise.reject();/^\d{5,}$/.test(m)&&(c=a(c,m));var d=c.data||{},u=d.searchm||{};if(d.oneboxurl&&(!se.page||1==se.page)&&_){var g=d.oneboxurl.match(/^https?:\/\/wq.jd.com\/wxapp(\/pages\/.*)$/);g&&g[1]?(0,A.xgoto)({xcx:{url:g[1],method:"redirectTo"}}):(0,A.xgoto)({h5:{url:d.oneboxurl,method:"redirectTo"}})}if(de.beltShop=d.beltAdpos&&d.beltAdpos[0],me=d.adPosId||"",ue=d.session_id||"",!se.page||1==se.page){var f=(0,M.getProp)(u,"Head.Query")||{};$=(f.HcCid1s||"").split(";").filter(function(e){return e}),Q=(f.HcCid2s||"").split(";").filter(function(e){return e}),V=(f.HcCid3s||"").split(";").filter(function(e){return e}),Y=-1!=H.indexOf($[0]),G=1==d.plusMemberType,(0,D.initReportInfo)({keyword:t._getCategoryName()||se.key,sf:se.sf,mtest:f.Mtest,upf:(0,M.getProp)(f,"Sort.UPF")||"",act:(0,M.getProp)(f,"Sort.ACT")||"",hcCid1s:f.HcCid1s||"",hcCid2s:f.HcCid2s||"",hcCid3s:f.HcCid3s||"",rewrite:d.rewrite||{},requerySearch:f.requerySearch}),(0,D.initMeridian)({pageId:"JDShopping_SearchResult",pparam:se.key||""}),de.category=u.ObjPicTag,de.midTags=u.ObjMidTag,(0,D.reportPv)((0,M.getProp)(u,"Head.Summary.ResultCount"),se.filt_type,se.sort_type,re),!B&&A.JD.report.umpBiz({bizid:759,operation:1,result:0,message:"search api success"}),_?(t._setCategoryName(u.ObjCollection),J=(0,R.getAct)(Q,V),W=(0,R.inCategory)(F.PPMS_CATEGORY_MAP.ART,[$[0],Q[0],V[0]]),t._initFilterPanel(u,{activity:J[0],hasArt:W,yhyx:d.yhyx}),ie=(0,M.getProp)(u,"ObjExist_Statistic.HasSecondware")||"",t.listMode=-1!=z.indexOf($[0])?2:1,t.longImgMode=1==f.longType,t.cartInfo.count=0,A.event.emit("search-refresh")):t._updateFilterPanel("service",{ObjExist_Statistic:Object.assign(u.ObjExist_Statistic,{HasSecondware:ie}),activity:J[0],hasArt:W,yhyx:d.yhyx}),oe={ExpressionKey:(0,M.getProp)(f,"QueryProcessor.ExpressionKey")},((t.filterPanel.service||{}).list||[]).forEach(function(e){if("quick"===e.view)switch(e.name){case"京东物流":(0,D.reportExposure)("EXPOSE_BAR_SERVICE_JINGDONGWULIU");break;case"新品":(0,D.reportExposure)("EXPOSE_BAR_SERVICE_XINPIN");break;case"拼购商品":(0,D.reportExposure)("EXPOSE_BAR_SERVICE_PINGOU")}"banner"===e.view&&"ico"===e.key&&(0,D.reportExposure)("EXPOSE_BAR_FILTER_BANNER_ACT")}),t._initExtraTabs({showShopTab:1==f.showShopTab});var l=(0,M.getProp)(d,"keyad.data")||[];t._initPrelude({shop_ad:d.shopadpos&&d.shopadpos.length?d.shopadpos[0]:null,shop_loop:Object.assign({},u.ObjC_NumberCollection,{isCarousel:1==f.shopShowCarousel}),shop_plain:l.find(function(e){return 1==e.type}),writer:d.writerBrief||{},car:{hcCid1s:$,keyword:se.key},category:u.ObjPicTag||[],portal:Object.assign({},l.find(function(e){return 5==e.type}),{keyword:se.key}),banner_jingang:l.find(function(e){return 2==e.type&&1==e.isTop}),coupon_ppms:(0,R.getTopCoupon)(se.key),banner_ppms:(0,R.getTopBanner)(se.key)}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.car;i&&i.info&&i.list&&i.list.length&&t._updateFilterPanel("quick",{car_model_id:i.info.modelId});var a=e.shop_ad,r=a&&-1!=[6,7,8,9,10].indexOf(parseInt(a.style_type))?"immersive":"";t._setSmartboxStyle(r),t.$nextTick(function(){setTimeout(function(){t._calcHeader()},50)})}),t._initInterlude({tags:u.ObjMidTag||[],banner:l.find(function(e){return 2==e.type&&1!=e.isTop}),coupon:l.filter(function(e){return 3==e.type})}),t.searchTips=r(f,te.isFallback),t.searchTips&&"recommend"===t.searchTips.type&&(de.isRecommend=1);var h=(0,M.getProp)(u,"Head.Summary")||{},y=h.Page||{};if(t.pageInfo=Object.assign({},t.pageInfo,{page:parseInt(y.PageIndex)||1,pageSize:parseInt(y.PageSize)||10,pageCount:parseInt(y.PageCount)||1,resultCount:parseInt(h.ResultCount)||0}),t.pageInfo.span=parseInt(t.pageInfo.bigPageSize/t.pageInfo.pageSize),0==h.ResultCount||h.ResultCount<=t.pageInfo.pageSize?T.relationalSearch(se.key).then(function(e){t.relatedKeys=e||[]}):t.relatedKeys=[],0==h.ResultCount){if(te.check(se)){var b=void 0;return t._restoreFilterState()?(t._search(Object.assign({isFallback:!0},te.data)),b={isFallback:!0}):(te.isFallback=!1,t.searchTips={}),Promise.reject(b)}var x=(0,R.getKeywords)(F.PPMS_KEYWORDS_MAP.MEDICINE);return t.isMedicineSearch=-1!=x.indexOf(se.key),t.isMedicineSearch&&(0,D.reportExposure)("EXPOSE_NORESULT_TO_YIYAO"),t.searchTips={},t.list=[],_&&t._renderFilterPanel(),t._saveFilterState(),te.save({key:m,page:v}),!B&&A.JD.report.umpBiz({bizid:759,operation:9,result:0,message:"search empty"}),Promise.reject()}t._saveFilterState(),te.save({key:m,page:v}),t._initPseudoItem(V);var j=!!(u.Paragraph||[]).find(function(e){return(0,R.inCategory)(F.PPMS_CATEGORY_MAP.CART,[e.cid1,e.cid2,e.catid])});t.cartInfo.canShow=j}t._updateInterlude({adshop:d.beltAdpos&&d.beltAdpos[0]||{}});var P=d.adpos||{};o(P,!se.page||1==se.page);var w=u.Paragraph||[],S=s(w,n(P.data,w));return S=p(S,d.rewrite,t.list.length,t.pageInfo.page,se.key)}).then(function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(0,A.reportSpeed)(1742,{s10:Date.now()-ge});var a=[],r=[],o=[],n=[],s=[],p=[],d=[],m=[],v=t._hasServiceFilter("211限时达");return i.forEach(function(e){a.push(e.wareid),(0!=(2&e.productext)||e.isYushou)&&r.push(e.wareid),o.push([e.wareid,0!=(8192&e.productext)?1:0,0!=(16384&e.productext)?1:0,0!=(1024&e.productext)?1:0,e.catid,e.vender_id||0,parseInt(e.ico)||0].join("_")),e.isBook&&n.push(e.wareid),e.isPaimai&&s.push(e.wareid),e.cid2&&e.catid&&e.vender_id&&p.push([e.wareid,e.cid2,e.catid,e.vender_id,0!=(1024&e.productext)?1:0].join(",")),e.isPopLease&&d.push(e.wareid)}),Promise.all([T.getPriceAndStock(a),T.getComments(a,Y),T.getYuyueOrYushou(r),T.getHidePrice(r),T.getBeltInfo(o),T.getBookAdInfo(n),T.getPaimaiInfo(s),T.getBaitiaoInfo(p),T.getPopLease(d)]).then(function(e){var t=N(e,9),a=t[0],r=(a=void 0===a?{}:a).price,o=void 0===r?{}:r,n=a.stock,s=void 0===n?{}:n,p=t[1],d=void 0===p?{}:p,_=t[2],S=void 0===_?{}:_,T=t[3],M=void 0===T?{}:T,F=t[4],R=void 0===F?{}:F,D=t[5],L=void 0===D?{}:D,z=t[6],q=void 0===z?{}:z,U=t[7],G=void 0===U?{}:U,H=t[8],X=void 0===H?{}:H;return!B&&A.JD.report.umpBiz({bizid:759,operation:18,result:0,message:"search product attr success"}),i.forEach(function(e){var t=void 0,i=ee.merge([e.tags,t=g(e,o[e.wareid],M[e.wareid]),f(e,s[e.wareid]),l(S[e.wareid],o[e.wareid]),y(R[e.wareid],o[e.wareid]),j(G[e.wareid]),O(e),k(e),E(e,t),I(e),C(e)]);if(u(e,o[e.wareid],S[e.wareid],M[e.wareid]),h(e,d[e.wareid],Y),b(e,L[e.wareid]),["hide","yushou"].indexOf(e.price.type)>-1||(e.isPopLease?(i.price=[],P(e,X[e.wareid])):e.isPaimai?(i.price=[],i.price_bottom=ee.sortPriceBottom(["拍卖"]),e.comment="",e.goodrate="",x(e,q[e.wareid])):e.isPingou&&(i.price=[],w(e,o[e.wareid]))),e.tags=i,v){var a=s[e.wareid]||{};m.push([e.wareid,e.wareWeight,a.d||"-1",a.e||"-1"].join("|"))}}),c(i)}).then(function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!se.page||1==se.page||q)t.list=i.slice(0,6),t.$nextTick(function(){var a;(a=t.list).push.apply(a,e(i.slice(6)))});else{var a;(a=t.list).push.apply(a,e(i))}return t.$nextTick(function(){se.page&&1!=se.page||!_||t._renderFilterPanel(),A.event.emit("list-rendered",i),setTimeout(function(){ce()},300),(0,A.reportSpeed)(1742,{s12:Date.now()-ge})}),m.length&&T.getBendicang(m).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i.forEach(function(t){if(e[t.wareid]){var i=S(e[t.wareid]);t.tags.comment=ee.sortComment([].concat(t.tags.comment,i.comment))}})}),(0,A.reportSpeed)(1742,{s11:Date.now()-ge}),i})}).catch(function(e){return e&&(e.isInvalid||e.isFallback)?Promise.reject():(ce(),e&&e.error?(t.searchError={status:!0,reqParams:{key:m,isRefresh:_,page:v,isReset:q,isFallback:U}},B?A.JD.report.umpBiz({bizid:759,operation:25,result:1,message:"spider search fail"}):A.JD.report.umpBiz({bizid:759,operation:8,result:1,message:"search json fail"}),Promise.reject()):void 0)}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(0,D.reportItemExposure)(e,se.page,de.beltShop,de.midTags,de.category,de.isRecommend,re,Z),(0,D.reportItemToAd)(e,se.page,se.key,me,ue,Z.csid)}).catch(function(){return null})}}}; 
 			}); 
		define("pages/search/list/stores/shop.store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.store=void 0;var e=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../libs/promise.min")),t=require("../../model/search-index.js"),o=require("../../common/js/utils.js");exports.store={state:{shop:{visible:!1,list:[],page:1,pageSize:5,pageCount:1,loading:!1,loaded:!1}},actions:{_getShops:function(s,n){var i=this;this.shop.loading||(1==n&&(this.shop.list=[]),this.shop.loading=!0,(0,t.getShops)(s,n,this.shop.pageSize).then(function(s){if(!s)return e.default.reject();i.shop.pageCount=parseInt((0,o.getProp)(s,"summary.page.page_count"),10)||1;var n=s.shops||[];if(n.length<=0)return e.default.reject();var r=n.map(function(e){return e.vender_id});return(0,t.getShopByVenderId)(r)}).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.length?(i.shop.loading=!1,i.shop.loaded=!0,i.shop.page=n,t.forEach(function(e){var t=e.shopInfo,s=parseInt(t.shopFansNum,10);e.fans=s?s>=1e4?(s/1e4).toFixed(1)+"万":s:"";var n=!(0!=e.isDefaultSquareLogo||!e.squareLogo);e.isSquareLogo=n,e.logo=(0,o.getImg)(n?e.squareLogo:e.rectLogo);var i=1==t.isZy;e.isZy=i;var r=[];if(!i)if(1==e.commonGoodShopCode)r.push({type:"tag",width:56,url:"https://img11.360buyimg.com/jdphoto/s112x28_jfs/t14554/205/1842763392/2625/f44cdabc/5a5c7090Ne9b78604.png"});else if(1002==e.categoryGoodShopCode)r.push({type:"tag",width:56,url:"https://img11.360buyimg.com/jdphoto/s112x28_jfs/t15673/79/1640911352/5197/3171e6ff/5a5c7076N82df55a4.png"});else if(e.scoreRankRateGrade){var u=parseInt(100*e.scoreRankRateGrade);if(-1!=[250,300,350,400,450,490].indexOf(u)){for(var a=[],p=0;p<5;p++)a.push(u>=100&&100||(90==u||50==u)&&u||0),u-=100;r.push({type:"stars",stars:a})}}e.evaluate=r,e.skus=[],e.skuTotal=0,e.tags=[]}),i.shop.list=i.shop.list.concat(t),t):e.default.reject()}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=[],i=0,r=[];e.forEach(function(u){r.push(u.shopInfo.venderId),(0,t.getShopSkus)(s,u.shopId).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i+=1;var t=e.total||0,s=(e.list||[]).map(function(e){return{shopId:e.shop_id,skuId:e.wareid,imgUrl:e.Content.imageurl,fullImgUrl:(0,o.getImg)(e.Content.imageurl,290,290),isPingou:e.pinGou&&e.pinGou.bp&&e.pinGou.count,isSaishi:15294==e.catid,isJx:0!=(8388608&e.productext),price:""}}).filter(function(e){return e.imgUrl&&e.skuId});s.length<3&&(u.skuInfo.forEach(function(e){s.length>=3||s.find(function(t){return t.skuId==e.skuId})||e.imgUrl&&e.skuId&&s.push({shopId:u.shopId,skuId:e.skuId,imgUrl:e.imgUrl,fullImgUrl:(0,o.getImg)(e.imgUrl,290,290),isPingou:!1,price:""})}),s.length<3?s=[]:t=3),u.skus=s,u.skuTotal=t,n=n.concat(u.skus)}).then(function(){if(i===e.length){var o=n.map(function(e){return e.skuId});(0,t.getPriceAndStock)(o,2).then(function(e){var t=e.price,o=void 0===t?{}:t;n.forEach(function(e){var t=o[e.skuId]||{};e.price=t.p||""})})}})}),(0,t.getShopTags)(r).then(function(t){e.forEach(function(e){e.tags=t[e.shopInfo.venderId]||[]})})}).catch(function(){i.shop.loading=!1}))},_resetShops:function(){this.shop.visible=!1,this.shop.list=[]}}}; 
 			}); 
		define("pages/search/list/stores/smartbox.store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.store=void 0;var e=require("./filter.store.js"),r=require("../managers/report.manager.js");exports.store={state:{searchbar:{isActive:!1,darkList:[],extraKeys:[],specialStyle:"",category:{id:"",name:""},version:""}},actions:{_initSmartbox:function(e){if(!e&&!this.searchbar.category.id)return this._showSmartbox(),!0},_updateCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.searchbar.category.id=e,this.searchbar.category.name=r},_setCategoryName:function(e){var r=this.searchbar.category.id;if(r&&e)for(var t="",a=[e.cid1||[],e.cid2||[],e.catid||[]],i=0;i<a.length;i++)if(t=a[i].find(function(e){return e.Classification==r}))return void(this.searchbar.category.name=t.Name)},_getCategoryName:function(){var e=this.searchbar.category||{};if(e.id)return e.name},_handleDarkText:function(e){e&&"string"==typeof e&&(this.searchbar.darkList=e.split("|").map(function(e){var r=(e||"").split("^");return{searchKey:(r[0]||"").trim(),showKey:(r[1]||r[0]||"").trim(),pps:(r[2]||"").trim(),url:(r[3]||"").trim()}}).filter(function(e){return e.searchKey&&e.showKey}),(0,r.reportExposure)("EXPOSE_SMARTBOX_DARKTEXT"))},_addExtraKey:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.type,t=e.key,a=e.value,i=e.name,s=e.tagname;r&&t&&a&&s&&this.searchbar.extraKeys.push({type:r,key:t,value:a,name:i,tagname:s})},_delExtraKey:function(e){return this.searchbar.extraKeys.splice(e,1)[0]},_clearExtraKeys:function(){this.searchbar.extraKeys=[]},_reviewExtraKeys:function(){var r=this.searchbar.extraKeys;if(r&&r.length){var t=[];r.forEach(function(r){(0,e.getFilter)(r.key).toString().indexOf(r.value)>-1&&t.push(r)}),this.searchbar.extraKeys=t}},_showSmartbox:function(){this.searchbar.category.id&&(this.keyword=""),this.searchbar.isActive=!0,this.$nextTick(function(){(0,r.initMeridian)({pageId:"JDShopping_Search"}).pv()})},_hideSmartbox:function(){this.searchbar.isActive=!1},_setSmartboxStyle:function(e){this.searchbar.specialStyle=e}}}; 
 			}); 
		define("pages/search/list_old/sopMark.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){var s=/s\d+x\d+_jfs/.exec(e),i=[];return s&&s[0].replace(/s(\d+)x(\d+)_jfs/,function(e,s,c){i=[s/2,c/2]}),i}function s(e,s){var i=e.pfdt,c=e.pf;if(i&&i.t){var a="";switch(i.t){case"1":a="每满"+i.m+"减"+i.j;break;case"2":a="满"+i.m+"减"+i.j;break;case"3":a=i.m+"免"+i.j;break;case"4":a=i.m+"元"+i.j+"件";break;case"5":a=i.m+"件"+i.j+"折"}a&&(s["满减详细"].items.push(a),s["满减详细"].flag=!0)}else if(c&&c.length>0)for(var t=(c=c.filter(function(e){return 4==e||5==e||58==e})).length-1;t>=0;--t)switch(c[t]){case"4":s["赠豆"].flag=!0;break;case"5":s["赠品"].flag=!0;break;case"58":s["满赠"].flag=!0}}function i(e,s){var i=e.coupon;if(i){var c=s["券促销"];if(0==i.t)i.j>0&&(c.items.push(i.j+"元京券"),c.flag=!0);else if(1==i.t)i.m>0&&i.j>0&&(c.items.push("领券满"+i.m+"减"+i.j),c.flag=!0);else if(3==i.t){var a=i.d.info||[];if(1==a.length){var t=a[0],o=((10*t.discount).toFixed(1)+"").replace(/\.0$/,"");c.items.push("领券满"+t.quota+"享"+o+"折"),c.flag=!0}else if(a.length>1){var p=a.map(function(e){return((10*e.discount).toFixed(1)+"").replace(/\.0$/,"")}).sort(function(e,s){return e-s}).slice(0,3);c.items.push("领券"+p.join("/")+"折"),c.flag=!0}}else 4==i.t&&i.m>0&&i.j>0&&(c.items.push("领券每满"+i.m+"减"+i.j),c.flag=!0)}}Object.defineProperty(exports,"__esModule",{value:!0});var c={bigPicModeCids:"|1315|1316|1319|1672|1318|6144|11729|",findSimilarCid1s:"|1315|1318|1672|11729|",samShopids:"|598847|680887|",samCardShopids:"|141955|"},a=[],t={};exports.sopMark=function(a,o,p){var f=[],m=[],d=[],g=void 0;(2&a.productext||4096&a.sku_mark||a.isFsku)&&(g=!0);var r=0;if((0==(4096&a.flags)&&100!=a.venderType&&110!=a.venderType||1==a.isnoZY&&0!=(4096&a.productext))&&1!=a.self_run){if(0!=(1&a.property_flag)){var n="//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/15952/7/2003/5832/5c185dd7E3a752a62/00dfa8da23f5a1fd.png",u=e(n);m.push({src:n,size:u})}}else{var b="//img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png",j=e(b);m.push({src:b,size:j}),r=1}var h=function(){if(a.pfex&&1==a.pfex.plus95&&1==p){var s="//img11.360buyimg.com/jdphoto/s106x28_jfs/t30550/48/1317820002/2737/f89267f5/5cdcfc02Na7d8136e.png",i=e(s);m.push({src:s,size:i,name:"plus专属95折"})}};if(1!==r&&h(),1==a.fxg){var x="//img11.360buyimg.com/jdphoto/s68x28_jfs/t1/20597/24/8/837/5c064d64E0bcfa199/f77e134f6616182c.png",y=e(x);m.push({src:x,size:y})}if(1==a.axg){var l="//img11.360buyimg.com/jdphoto/s68x28_jfs/t1/67443/8/1207/2047/5cf7593dE0e649309/fe036f976c4fcd7b.png",_=e(l);m.push({src:l,size:_})}if(1===r&&h(),1==a.sendService){var v="//img11.360buyimg.com/jdphoto/s68x28_jfs/t7276/241/1505050742/1966/f1337e08/599cf586Ne5cb3dd6.png",N=e(v);m.push({src:v,size:N})}if(0!=(4096&a.flags)&&0==(32&a.sku_mark)&&0!=(4096&a.productext)){var z="//img11.360buyimg.com/jdphoto/s88x28_jfs/t7891/226/1723911960/2312/c37c6a26/599fdc0eNe3e4977d.png",k=e(z);m.push({src:z,size:k})}if("1000076153"==a.shop_id&&0!=(131072&a.productext2)){var E="//img11.360buyimg.com/jdphoto/s68x28_jfs/t22360/254/2192420554/2143/df52c275/5b4c3d8cN6b0e7b3a.png",w=e(E);m.push({src:E,size:w})}var P=0;if(o){var S=t[a.ico];if(S){var T=o[S];if(P<2&&T){var M=void 0,L=e(M=T.logo2?T.logo2:T.cname);f.push({src:M,size:L}),P++}}}if(P<2&&0!=(8388608&a.productext)){var q="//img11.360buyimg.com/jdphoto/s100x28_jfs/t7597/78/1439801434/2667/5d29b409/599cf128N4a0d891e.png",F=e(q);f.push({src:q,size:F}),P++}if(P<2&&"10123029"==a.vender_id){var U="//img11.360buyimg.com/jdphoto/s114x28_jfs/t1/41343/24/1504/775/5cc69fe3E9bd162d8/337aa4419111166d.png",I=e(U);f.push({src:U,size:I}),P++}if(P<2&&a.jpLabel){var A=void 0;switch(a.jpLabel){case"stationery":A="//img11.360buyimg.com/jdphoto/s88x28_jfs/t28012/170/1498540272/2023/186f2658/5ce24705Nb0711465.png";break;case"computer":A="//img11.360buyimg.com/jdphoto/s88x28_jfs/t28402/133/1181098409/2147/8fbd61fa/5ce24709Nfc8c3b24.png";break;case"digital":A="//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/53625/20/595/2529/5ce24700E1c3c7127/19b0623cc6a7b5da.png";break;case"phone":A="//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/66511/3/2872/1955/5d118f22Edc5c0ea0/dd426d77193773bc.png";break;default:A=""}if(A){var C=e(A);f.push({src:A,size:C}),P++}}if(P<2&&0!=(16&a.productext2)){var O="//img11.360buyimg.com/jdphoto/s68x28_jfs/t10540/240/2161662372/1576/bf008be1/59eff91eNf0ba4ba6.png",D=e(O);f.push({src:O,size:D}),P++}if(P<2&&"13765"==a.cid1){var Y="//img11.360buyimg.com/jdphoto/s48x28_jfs/t27154/326/2525821085/883/401fa607/5c04f3acN34087c51.png",$=e(Y);f.push({src:Y,size:$}),P++}if(P<2&&0!=(1024&a.productext)){var G="//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/86034/31/2611/755/5dd20a29Ea1281eee/72ed62f404d433e7.png",H=e(G);f.push({src:G,size:H}),P++}if(a.worldwide&&2==a.worldwide){var J="//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/86034/31/2611/755/5dd20a29Ea1281eee/72ed62f404d433e7.png",Z=e(J);f.push({src:J,size:Z}),P++}if(P<2&&0!=(1073741824&a.productext2)){var B="//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/17614/7/11567/855/5c9054f5E476f96ed/a47f42e498f5d6ba.png",K=e(B);f.push({src:B,size:K}),P++}if(P<2&&0!=(262144&a.productext)){var Q="//img11.360buyimg.com/jdphoto/s102x28_jfs/t1/7237/27/10037/2368/5c1cb3e3E351596ba/e7ee3657381004a5.png",R=e(Q);f.push({src:Q,size:R}),P++}if(P<2&&3==a.isNSNGgoods){var V="//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/15798/3/2236/912/5c1b4d16Efb81ec7c/a280c671eda26a8d.png",W=e(V);f.push({src:V,size:W}),P++}if(P<2&&"1"==a.jzfp){var X="//img11.360buyimg.com/jdphoto/s88x28_jfs/t15094/106/2539531431/2519/73b32d3f/5aa74c0bN677991b0.png",ee=e(X);f.push({src:X,size:ee}),P++}if(P<2&&"299330"==a.brand_id){var se="//img11.360buyimg.com/jdphoto/s61x35_jfs/t11623/159/1253379604/2040/77aae356/5a41b795N0be954ef.png",ie=e(se);f.push({src:se,size:ie}),P++}if(P<2&&~c.samShopids.indexOf("|"+a.shop_id+"|")){var ce="//img11.360buyimg.com/jdphoto/s56x18_jfs/t1/9726/39/10090/1364/5c1cb3e3E5b91a8be/3fa2d1cde70c7fcc.png",ae=e(ce);f.push({src:ce,size:ae}),P++}if(P<2&&"663284"==a.vender_id){var te="//img11.360buyimg.com/jdphoto/s90x28_jfs/t7945/259/1414728762/2793/9402ea84/599cf0fdNd5cb04aa.png",oe=e(te);f.push({src:te,size:oe}),P++}if(P<2&&1==a.isStoreOnSale){var pe="//img11.360buyimg.com/jdphoto/s115x28_jfs/t1/14943/2/13774/852/5ca1ae72Eb787a259/99fd54e8761f2eac.png",fe=e(pe);f.push({src:pe,size:fe}),P++}if(P<2&&1==a.fqy&&"13765"!=a.cid1){var me="//img11.360buyimg.com/jdphoto/s48x28_jfs/t27154/326/2525821085/883/401fa607/5c04f3acN34087c51.png",de=e(me);f.push({src:me,size:de}),P++}if(P<2&&1==a.isfanbox){var ge="//img11.360buyimg.com/jdphoto/s91x28_jfs/t1/20788/33/7727/1023/5c6e1369E8176d900/8b9506885739bb10.png",re=e(ge);f.push({src:ge,size:re}),P++}var ne={};if([{type:"image",name:"sku直搜",src:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t5734/347/3788600457/2211/93387e46/59423aeeN58b9ce25.png"},{type:"dom",name:"分期用",src:""},{type:"dom",name:"专属价",src:"//img11.360buyimg.com/jdphoto/s59x22_jfs/t5812/358/4307623656/1656/b618d6ef/594a3b93N00874224.png"},{type:"dom",name:"山姆价",src:"//img11.360buyimg.com/jdphoto/s56x28_jfs/t7711/149/2077694997/15813/ed60c12c/59a784b3N9089ca4d.png"},{type:"dom",name:"学生价",src:"//img11.360buyimg.com/jdphoto/s60x22_jfs/t1/32026/2/2776/998/5c6e950aE1e2b1aa9/fdae324dc26fbd9f.png"},{type:"dom",name:"新人价",src:"//img11.360buyimg.com/jdphoto/s60x28_jfs/t27901/66/265530648/1420/692fd3e3/5b8ce64aNf6f71e9b.png"},{type:"dom",name:"PLUS价",src:"//img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"},{type:"image",name:"价保",src:"//img11.360buyimg.com/jdphoto/s86x28_jfs/t10087/205/1719717382/1704/5cce1bf0/59e566f0Nfcb46a11.png"},{type:"image",name:"安装服务",src:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7066/233/2178766698/2704/e4a77d51/5992b593N7a4cda24.png"},{type:"image",name:"免费送装",src:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7969/213/1437419868/2878/5de8c14b/599cf4f9N1e125e9a.png"},{type:"image",name:"送货上门",src:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7681/173/1432154683/2027/cf5d60d8/599cf4d1N7f441fb1.png"},{type:"image",name:"商家免邮",src:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7318/163/1463112656/2654/47848ed8/599cf40eN04d1e4f1.png"},{type:"dom",name:"券促销",src:"",items:[]},{type:"dom",name:"满减详细",src:"",items:[]},{type:"dom",name:"商品限时限量抢购",src:"",items:[]},{type:"image",name:"秒杀",src:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t7867/19/1452018090/1756/1c57bcf8/599cf3f5N7dbe95e5.png"},{type:"image",name:"赠品",src:"//img11.360buyimg.com/jdphoto/s28x28_jfs/t13501/220/748441324/1050/f2add5a2/5a128a72N857b1c57.png"},{type:"image",name:"满赠",src:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t14293/213/327359722/1869/c992a068/5a2a340aNb1e0aa8f.png"},{type:"image",name:"赠豆",src:"//img11.360buyimg.com/jdphoto/s28x28_jfs/t12904/231/705484511/705/5ad9e04c/5a128a62Nd05d709b.png"},{type:"image",name:"全球购自营包税",src:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t12559/358/5333293/1594/c1d92f2f/5a0174ccN4a86d74d.png"},{type:"image",name:"分期免息",src:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7702/51/1390972217/2695/d56f9fc/599cf425Ne2ced732.png"},{type:"image",name:"到店自取",src:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t8227/250/760846646/2232/aff6a742/59ae3ca2N71dc8645.png"},{type:"image",name:"商场同款",src:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7711/124/1421338369/2548/ac71213f/599cf47eN55c9cbb5.png"},{type:"image",name:"新品",src:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t7378/78/1450098580/1414/a8e80023/599cf490N8eaf23f7.png"},{type:"image",name:"安装服务",src:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t7066/233/2178766698/2704/e4a77d51/5992b593N7a4cda24.png"}].map(function(s){if(s.flag=!1,s.src){var i=e(s.src);s.size=i}ne[""+s.name]=s}),"1"!=a.isActualServ&&2!=a.isFreeLoad||(ne["安装服务"].flag=!0),1==a.freeMark?ne["免费送装"].flag=!0:2==a.freeMark&&(ne["送货上门"].flag=!0),3==a.freeMark&&(ne["商家免邮"].flag=!0),i(a,ne),s(a,ne),0!=(33554432&a.productext)||0!=(512&a.productext)){var ue="//img11.360buyimg.com/jdphoto/s48x28_jfs/t7378/78/1450098580/1414/a8e80023/599cf490N8eaf23f7.png",be=e(ue);d.push({src:ue,size:be}),ne["新品"].flag=!0}if(0!=(4&a.productext2)&&(ne["到店自取"].flag=!0),a.isFsku){var je="//img11.360buyimg.com/jdphoto/s128x28_jfs/t5734/347/3788600457/2211/93387e46/59423aeeN58b9ce25.png";d=[{src:je,size:e(je)}],ne["sku直搜"].flag=!0}var he=[],xe=Number(a.userPsnProductNew).toString(2);0!=(16&a.userPsnProductNew)?he.push({src:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t12106/279/1935318217/2914/3852d57b/5a2e281cNce54829f.png",width:"64"}):0!=(32&a.userPsnProductNew)?he.push({src:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t16111/321/257108586/2906/71d79d89/5a2e282eN1153a330.png",width:"64"}):0!=(64&a.userPsnProductNew)?he.push({src:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t16186/178/326016442/2909/4c8c0be7/5a2e282eN83fcafb8.png",width:"64"}):xe.length>=33&&"1"===xe.substr(-33,1)?he.push({src:"//img11.360buyimg.com/jdphoto/s148x28_jfs/t14152/70/1924097622/3758/671576e3/5a2e282fN2e35172e.png",width:"74"}):xe.length>=34&&"1"===xe.substr(-34,1)?he.push({src:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t13570/114/1947915845/2815/bd22145d/5a2e282fNafa8838d.png",width:"64"}):xe.length>=35&&"1"===xe.substr(-35,1)&&he.push({src:"//img11.360buyimg.com/jdphoto/s128x28_jfs/t15436/327/473650211/3067/5a88ddba/5a2e282fN90b2b7e5.png",width:"64"});var ye=[];return 1==a.decoration&&ye.push({src:"//img11.360buyimg.com/jdphoto/s88x28_jfs/t1/24919/12/3295/2568/5c25d067Ea0f4e690/9e94e17f36f626d9.png",size:[44,14]}),ye.length<1&&1==a.good_shop?ye.push({src:"//img11.360buyimg.com/jdphoto/s115x28_jfs/t1/8474/1/14098/983/5c6272baE9587a9fc/550b9688103af3c4.png",bsrc:"//img11.360buyimg.com/jdphoto/s75x28_jfs/t1/17780/15/6750/751/5c6272baEdd6a2ac4/fa14d0eabf2bbafe.png",size:[57.5,14],bsize:[37.5,14]}):ye.length<1&&2==a.good_shop&&ye.push({src:"//img11.360buyimg.com/jdphoto/s68x28_jfs/t1/38357/5/9891/1684/5d118f8aE058324aa/41ad2127f9e45057.png",bsrc:"//img11.360buyimg.com/jdphoto/s68x28_jfs/t1/38357/5/9891/1684/5d118f8aE058324aa/41ad2127f9e45057.png",size:[34,14],bsize:[34,14]}),{commentPrefix:m.slice(0,3),titlePrefix:f,priceAffix:d,priceTags:ne,yuYue:g,uniqueMark:he,shopPrefixTag:ye}},exports.getJfsImgSize=e,exports.initActInfoPre=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if((a=e)&&0!=a.length){for(var s=0,i=a.length;s<i;++s){var c=a[s],o=c.actid.split("|");c.actMark=parseInt(o[0],10),c.beginTime=c.startTime?Date.parse(c.startTime):0,c.endTime=c.endTime?Date.parse(c.endTime):0,c.cid2s=c.cid2s?c.cid2s.split("|"):[],c.catids=c.catids?c.catids.split("|"):[],c.qt=parseInt(c.qt||"1",10),s<7?(c.rd="0-3-"+(2*s+9),c.crd="0-3-"+(2*s+10),c.mrd="0-9-"+(2*s+39),c.mcrd="0-9-"+(2*s+40)):(c.rd="0-3-23",c.crd="0-3-24",c.mrd="0-9-53",c.mcrd="0-9-54");for(var p=0,f=o.length;p<f;++p)t[o[p]]=c.actMark}return t}},exports.priceTagHandle=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=s.up&&s.up.split(",")[0];if("tkp"===i&&s.tkp>0)e["专属价"].flag=!0,e["专属价"].price=s.tkp;else if("sp"===i&&s.sp>0)e["山姆价"].flag=!0,e["山姆价"].price=s.sp;else if("stp"===i&&s.stp)e["学生价"].flag=!0,e["学生价"].price=s.stp;else if(s.newUser)e["新人价"].flag=!0,e["新人价"].price=s.newUser.price;else if("pp"===i&&s.pp>0||"tpp"===i&&s.tpp>0){var c=s.pp&&s.pp>0?s.pp:s.tpp;e["PLUS价"].flag=!0,e["PLUS价"].price=c}return e}; 
 			}); 
		define("pages/search/model/ppms.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMultiPPMS=exports.getPPMS=void 0;var e=t(require("../../../libs/promise.min")),r=t(require("../common/js/fetch.js")),n=require("../common/js/utils.js"),o=require("../constants/ppms.js");exports.getPPMS=function(t){if(!n.ENV.isXcx&&window){var u=o.PPMS_MAP[t];if(u)return e.default.resolve(window[u]||[])}return(0,r.default)({url:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev"+t+".jsonp"}).then(function(t){var e=t.body;return(void 0===e?{}:e).data||[]}).catch(function(){return[]})},exports.getMultiPPMS=function(t){var u={};if(!Array.isArray(t)||!t.length)return e.default.resolve(u);if(!n.ENV.isXcx&&window){var i=[];if(t.forEach(function(t){var e=o.PPMS_MAP[t];e?u[t]=window[e]||[]:i.push(t)}),!i.length)return e.default.resolve(u);t=i}var s="https://wqs.jd.com/j/="+t.map(function(t){return"/data/ppms/js/ppms.pagev"+t+".json"}).join(",");return(0,r.default)({url:s}).then(function(e){var r=e.body,n=((void 0===r?{}:r).files||[]).map(function(t){return t&&t.content}).filter(function(t){return t}),o=[];return t.forEach(function(t){var e=n.find(function(e){return e.pageId==t});u[t]=e&&e.data||[],!e&&o.push(t)}),o&&o.length&&console.warn(o),u}).catch(function(){return u})}; 
 			}); 
		define("pages/search/model/search-index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return l.default.resolve([]);var t={source:m.ENV.isM&&3||m.ENV.isSq&&4||5,search:e.join(",")};return(0,h.default)({url:"//wq.jd.com/bases/waistbandservice/waistband",data:t,timeout:2500}).then(function(e){var t=e.body,r=void 0===t?{}:t,o=[];return 0==r.retCode&&(o=r.data),o}).catch(function(e){return[]})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length?(0,h.default)({url:"//club.jd.com/clubservice/summary-m-"+e.join(",")+".html",timeout:3e3}).then(function(e){var t=e.body,r={},o=(void 0===t?{}:t).CommentsCount||[];return o.forEach(function(e){r[e.SkuId]=e}),v.JD.report.umpBiz({bizid:g,operation:6,result:0,message:"comment success"}),0===o.length&&v.JD.report.umpBiz({bizid:g,operation:7,result:0,message:"comment empty"}),r}).catch(function(e){v.JD.report.umpBiz({bizid:g,operation:6,result:1,message:"comment fail"})}):l.default.resolve({})}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return l.default.resolve({});var t={clientType:1,skuids:e.join(","),source:m.ENV.isXcx?"wxapp_search":""};return(0,h.default)({url:"//wq.jd.com/commodity/comment/getsummarys",data:t,timeout:3e3}).then(function(e){var t=e.body,r=void 0===t?{}:t,o={},n=[];return 0==r.errcode&&(n=(0,m.getProp)(r,"result.commentSummaries")||[]).forEach(function(e){o[e.SkuId]=e}),v.JD.report.umpBiz({bizid:g,operation:6,result:0,message:"comment success"}),0===n.length&&v.JD.report.umpBiz({bizid:g,operation:7,result:0,message:"comment empty"}),o}).catch(function(e){v.JD.report.umpBiz({bizid:g,operation:6,result:1,message:"comment fail"})})}function a(e,t){return e?a.requesting?l.default.reject():(a.requesting=!0,u().then(function(){return i(e,t)}).then(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).body;return a.requesting=!1,e}).catch(function(){a.requesting=!1})):l.default.resolve()}function i(e,t){var r={ext:"hj:"+(m.ENV.isXcx&&"x"||m.ENV.isWx&&"w"||m.ENV.isSq&&"q"||"m"),active:e,level:t,t:(new Date).getTime()};return(0,h.default)({url:"//wq.jd.com/active/active_draw",data:r,autoLogin:!0,codeName:"ret",loginCode:2})}function u(){return m.ENV.isXcx?l.default.resolve(!0):v.JD.cookie.get("promotejs")?l.default.resolve(!0):(0,h.default)({url:"//wq.jd.com/active/getfunction",autoLogin:!0,codeName:"errorCode",loginCode:2}).then(function(e){var t=e.body,r=void 0===t?{}:t;if(0==r.errorCode)return r.function(r.TOKEN),!0})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return l.default.resolve();var t={venderId:e.join(",")};return(0,h.default)({url:"//wq.jd.com/user/msgcenter/QueryMsgByVenderIds",data:t}).then(function(e){var t=e.body,r=void 0===t?{}:t,o={10:"上新",27:"秒杀",26:"满减",25:"促销"},n={};return 0==r.iRet&&(r.data||[]).forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.msgType,r=e.venderId;if(t&&r){var a=[];for(var i in o)o.hasOwnProperty(i)&&-1!=t.indexOf(i)&&a.push(o[i]);n[r]=a}}),n}).catch(function(){})}function s(e){if(!e||!e.length)return l.default.resolve();var t={venderId:e.join(",")};return(0,h.default)({url:"//wq.jd.com/mshop/BatchQueryCoupon",data:t}).then(function(e){var t=e.body,r=void 0===t?{}:t,o={};return 0==r.errcode&&(r.data||[]).forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.couponInfo,r=e.venderId;if(t&&r){var n=[];t.length>0&&n.push("优惠券"),o[r]=n}}),o}).catch(function(){})}function d(e){return e?d.requesting?l.default.reject():(d.requesting=!0,u().then(function(t){return t?f(e):l.default.reject()}).then(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).body;return d.requesting=!1,e}).catch(function(){d.requesting=!1})):l.default.resolve()}function f(e){if(!e)return l.default.resolve();var t={scene:1,active:e};return(0,h.default)({url:"//wq.jd.com/activetmp/waterdrink/firstpagedraw",data:t})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawHongbaoActive=exports.queryHongbaoActive=exports.checkIsNewUser=exports.getCarRecommend=exports.getCars=exports.getFavoriteStatus=exports.delFavorite=exports.addFavorite=exports.getSwitchSkus=exports.getTopic=exports.getAutoRank=exports.getUserCoupon=exports.get188Gift=exports.drawShopCoupon=exports.getShopCouponStatus=exports.addShopFav=exports.getShopFav=exports.getShopSkus=exports.getShops=exports.getShopTags=exports.getShopByVenderId=exports.getActiveInfo=exports.getUserStatus=exports.activeDraw=exports.getPrizesStatus=exports.getBingoList=exports.relationalSearch=exports.addCart=exports.getBendicang=exports.getPopLease=exports.getBaitiaoInfo=exports.getPaimaiInfo=exports.getBookAdInfo=exports.getBeltInfo=exports.getHidePrice=exports.getYuyueOrYushou=exports.getComments=exports.getPriceAndStock=exports.getFilterAttr=exports.doSearch=void 0;var l=e(require("../../../libs/promise.min")),p=require("../../../common/userinfo_wqvue"),v=require("../common/js/base.js"),h=e(require("../common/js/fetch.js")),m=require("../common/js/utils.js"),g=759;exports.doSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={datatype:m.ENV.isXcx?4:1};if(m.ENV.isXcx){var r="function"==typeof getApp?getApp():{scene:"",systemInfo:{platform:""}};t.scene=r.scene,t.platform=r.systemInfo.platform}for(var o in e){var n=e[o];void 0!==n&&null!==n&&""!==n&&(t[o]=n)}var a=m.ENV.isXcx?"//wqsou.jd.com/search/searchwxapp":"//wqsou.jd.com/search/searchn";return(0,h.default)({url:a,data:t}).then(function(e){var t=e.body;return console.log(t),t}).catch(function(e){return console.warn(e),l.default.reject({error:!0})})},exports.getFilterAttr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={datatype:m.ENV.isXcx?4:""};for(var r in e)e[r]&&(t[r]=e[r]);return(0,h.default)({url:"//wqsou.jd.com/search/searchattr",data:t}).then(function(e){return e.body}).catch(function(){})},exports.getPriceAndStock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e||!e.length)return l.default.resolve({price:{},stock:{}});var r=(0,p.getAddress)(),o=r.coordinate&&r.coordinate.split(",").slice(-2).map(function(e){return parseInt(100*e)}).join(","),n=new Array(e.length).join("1,")+"1",a={command:t,priceinfo:1,source:m.ENV.isXcx?"wxapp_search":"wqm_search",skus:e.join(","),buynums:n,area:r.areaId,coord:o?"1,"+o:"",app:m.ENV.isXcx?"search_wx":""};return(0,h.default)({url:"//wq.jd.com/commodity/skudescribe/get",data:a,timeout:3e3}).then(function(e){var t=e.body,r=void 0===t?{}:t;if(0!=r.errcode)return l.default.reject();var o={},n={};return r.priceinfo&&(0==r.priceinfo.errcode?(o=r.priceinfo.data||{},v.JD.report.umpBiz({bizid:g,operation:3,result:0,message:"price success"}),0===Object.keys(o).length&&v.JD.report.umpBiz({bizid:g,operation:5,result:0,message:"price empty"})):v.JD.report.umpBiz({bizid:g,operation:3,result:-1,message:"price fail"})),r.stockstate&&(0==r.stockstate.errcode?(n=r.stockstate.data||{},v.JD.report.umpBiz({bizid:g,operation:2,result:0,message:"stock success"}),0===Object.keys(n).length&&v.JD.report.umpBiz({bizid:g,operation:4,result:0,message:"stock empty"})):v.JD.report.umpBiz({bizid:g,operation:2,result:-1,message:"stock fail"})),{price:o,stock:n}}).catch(function(){return 1!=t&&3!=t||v.JD.report.umpBiz({bizid:g,operation:2,result:-1,message:"stock fail"}),2!=t&&3!=t||v.JD.report.umpBiz({bizid:g,operation:3,result:-1,message:"price fail"}),{price:{},stock:{}}})},exports.getComments=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?n(e):o(e)},exports.getYuyueOrYushou=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return l.default.resolve({});var t={sku:e.join(","),source:m.ENV.isXcx||m.ENV.isWx?1:2};return(0,h.default)({url:"//yushou.jd.com/youshouinfoList.action",data:t,timeout:2500}).then(function(e){var t=e.body,r={};for(var o in t)t.hasOwnProperty(o)&&(r[o]=JSON.parse(t[o]));return r}).catch(function(e){return{}})},exports.getHidePrice=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return l.default.resolve({});var t={sku:e.join(",")};return(0,h.default)({url:"//wq.jd.com/commodity/marattr/readattributes",data:t,timeout:3e3}).then(function(e){var t=e.body,r={};return 0==t.errcode&&(r=t.data),r}).catch(function(e){return{}})},exports.getBeltInfo=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=[];e.length>0;){var n=e.slice(0,10);o.push(r(n)),e=e.slice(10)}return l.default.all(o).then(function(e){var r,o={};return(r=[]).concat.apply(r,t(e)).forEach(function(e){o[e.skuId]=e}),o})},exports.getBookAdInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return l.default.resolve({});var t={source:"search_wxsq",skuids:e.map(function(e){return"AD_"+e}).join(",")};return(0,h.default)({url:"//ad.3.cn/ads/mgets",data:t,timeout:2e3}).then(function(e){var t=e.body,r={};return(void 0===t?[]:t).forEach(function(e){e&&(r[e.id.replace("AD_","")]=e)}),r}).catch(function(e){return{}})},exports.getPaimaiInfo=function(e){if(!e||!e.length)return l.default.resolve({});var t={skuinfo:e.join("-")};return(0,h.default)({url:"//wq.jd.com/bases/searchxg/getpaimaiinfo",data:t,timeout:3e3}).then(function(e){var t=e.body,r=void 0===t?{}:t,o={};return 0==r.retcode&&(r.skuinfolist||[]).forEach(function(e){o[e.skuid]=e}),o}).catch(function(e){return{}})},exports.getBaitiaoInfo=function(e){if(!e||!e.length)return l.default.resolve({});var t={skuinfo:e.join("-")};return(0,h.default)({url:"//wq.jd.com/bases/searchxg/GetBaitiaoInfo",data:t,timeout:2e3}).then(function(e){var t=e.body,r=void 0===t?{}:t,o={};return 0==r.retcode&&(r.skuinfolist||[]).forEach(function(e){o[e.skuid]=e}),o}).catch(function(e){return{}})},exports.getPopLease=function(e){if(!e||!e.length)return l.default.resolve({});var t={skuInfo:e.join(",")};return(0,h.default)({url:"//wq.jd.com/bases/searchxg/getpopprice",data:t,timeout:3e3}).then(function(e){var t=e.body,r=void 0===t?{}:t,o={};return 0==r.retcode&&(r.skuinfolist||[]).forEach(function(e){o[e.skuId]=e}),o}).catch(function(e){return{}})},exports.getBendicang=function(e){if(!e||!e.length)return l.default.resolve({});var t={skuinfo:e.join(",")};return(0,h.default)({url:"//wq.jd.com/bases/searchxg/promiserealtime",data:t,timeout:2e3}).then(function(e){var t=e.body,r=void 0===t?{}:t,o={};return 0==r.retcode&&r.skuinfolist&&r.skuinfolist.forEach(function(e){o[e.skuid]=e.flaglist||[]}),o}).catch(function(){return{}})},exports.addCart=function(e,t,r){if(!e)return l.default.resolve();var o={scene:2,type:0,commlist:[e,"",t>1?t:1,e,1,0,0].join(","),locationid:(0,p.getAddress)().areaId.replace(/_/g,"-"),t:Date.now()};return r&&(o.dist="jd"),(0,h.default)({url:"//wq.jd.com/deal/mshopcart/addcmdy",data:o}).then(function(e){var t=e.body;return t&&0==t.errId&&(v.JD.cookie.set("cartNum",t.cart.mainSkuNum,43200),m.ENV.isXcx&&"function"==typeof getApp&&getApp().event.emit("cartrefresh")),t}).catch(function(){})},exports.relationalSearch=function(e){if(!e)return l.default.resolve([]);var t={client:m.ENV.isXcx&&"sp"||m.ENV.isWx&&"wx"||m.ENV.isSq&&"qq"||"app",ver:"auto",keyword:e,pvid:v.JD.cookie.get("visitkey")};return(0,h.default)({url:"//qpsearch.jd.com/relationalSearch",data:t,dataType:m.ENV.isXcx?"text":"jsonp"}).then(function(e){var t=e.body,r=(void 0===t?"":t).split("^^");if(r[1])return r[1].replace(/\*+$/,"").split("*")}).catch(function(){return[]})},exports.getBingoList=function(e){if(!e||!e.length)return l.default.resolve([]);var t={activelist:e.join(",")};return(0,h.default)({url:"//wq.jd.com/active/querybingolist",data:t}).then(function(e){var t=e.body,r=void 0===t?{}:t,o=[];return 0==r.errorCode&&(o=r.result||[]),o}).catch(function(){return[]})},exports.getPrizesStatus=function(e){if(!e||!e.length)return l.default.resolve([]);var t={activelist:e.join(",")};return(0,h.default)({url:"//wq.jd.com/active/queryprizesstatuslist",data:t}).then(function(e){var t=e.body,r=void 0===t?{}:t,o=[];return 0==r.retcode&&(o=r.result||[]),o}).catch(function(){return[]})},exports.activeDraw=a,exports.getUserStatus=function(){return(0,h.default)({url:"//wq.jd.com/mjgj/column/QueryUserThirdBuyUnactStatus"}).then(function(e){var t=e.body,r=void 0===t?{}:t,o=null;return 0==r.iRet&&(o=r.data),o}).catch(function(){return null})},exports.getActiveInfo=function(e){var t={active:e};return(0,h.default)({url:"//wq.jd.com/activepersistent/couponrecommend/queryuseractiveinfo",data:t}).then(function(t){var r=t.body,o=void 0===r?{}:r,n=null;return 0==o.ret&&(n={active:e,bingos:o.bingos,prizes:o.prizes}),n}).catch(function(){return null})},exports.getShopByVenderId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return l.default.resolve([]);var t={venderIds:e.join(",")};return(0,h.default)({url:"//wq.jd.com/mshop/BatchGetShopInfoByVenderId",data:t}).then(function(e){var t=e.body,r=void 0===t?{}:t,o=[];return 0==r.errcode&&(o=r.data||[]),o}).catch(function(){return[]})},exports.getShopTags=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return l.default.resolve([]);var t=["优惠券","上新","秒杀","满减","促销"];return l.default.all([c(e),s(e)]).then(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o={};return e.forEach(function(e){var n=[];r.forEach(function(t){t&&t[e]&&(n=n.concat(t[e]))});var a=[];t.forEach(function(e){-1!=n.indexOf(e)&&a.push(e)}),o[e]=a}),o})},exports.getShops=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(!e)return l.default.resolve();var o={key:e,sort_type:"sort_mobile_shop_desc",pagesize:r,page:t};return(0,h.default)({url:"//wqsou.jd.com/shopsearch/search",data:o}).then(function(e){var t=e.body,r=void 0===t?{}:t,o=null;return 0==r.retcode&&(o=r),o}).catch(function(){})},exports.getShopSkus=function(e,t){if(!t)return l.default.resolve();var r={key:e,expression_key:"ids,,"+t,datatype:1,pagesize:3,page:1,merge_sku:"yes"};return(0,h.default)({url:"//wqsou.jd.com/search/searchjson",data:r}).then(function(e){var t=e.body,r=void 0===t?{}:t,o=null;if(0==r.retcode){var n=r.data||{};o={total:parseInt((0,m.getProp)(n,"searchm.Head.Summary.ResultCount"))||0,list:(0,m.getProp)(n,"searchm.Paragraph")||[]}}return o}).catch(function(){})},exports.getShopFav=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!e&&!t)return l.default.reject();var r={shopId:e,venderId:t};return m.ENV.isXcx&&(r.callback="callback"),(0,h.default)({url:"//wq.jd.com/fav/shop/QueryOneShopFav",data:r}).then(function(e){var t=e.body,r=void 0===t?{}:t;return 9999==r.iRet?l.default.reject():1==r.state})},exports.addShopFav=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!e&&!t)return l.default.resolve();var r={shopId:e,venderId:t};return(0,h.default)({url:"//wq.jd.com/fav/shop/AddShopFav",data:r}).then(function(e){var t=e.body,r=void 0===t?{}:t;if(9999!=r.iRet)return 0==r.iRet}).catch(function(){})},exports.getShopCouponStatus=function(e,t){if(!e||!t)return l.default.reject();var r={rolekeys:e+":"+t};return(0,h.default)({url:"//wq.jd.com/activeapi/queryjdshopfreecouponstatus",data:r}).then(function(t){var r=t.body,o=void 0===r?{}:r;return 0!=o.errorCode?l.default.reject():o.data&&o.data[e]||{}})},exports.drawShopCoupon=function(e,t,r){if(!(e&&t||r))return l.default.resolve();var o={key:t,roleid:e,putkey:r};return(0,h.default)({url:"//wq.jd.com/activeapi/obtainjdshopfreecouponv2",data:o}).then(function(e){var t=e.body;return void 0===t?{}:t}).catch(function(){})},exports.get188Gift=function(){if(!m.ENV.isWx&&!m.ENV.isSq)return l.default.resolve();var e={active:m.ENV.isWx?"newgift_WX1882016":"newgift_SQ1882016"};return(0,h.default)({url:"//wq.jd.com/activetmp/dianzan/query188",data:e}).then(function(e){var t=e.body;return void 0===t?{}:t}).catch(function(){})},exports.getUserCoupon=function(){var e={t:Date.now()};return(0,h.default)({url:"//wq.jd.com/activepersistent/usercoupon/queryusercoupon",data:e}).then(function(e){var t=e.body;return void 0===t?{}:t}).catch(function(){})},exports.getAutoRank=function(e){if(!e)return l.default.resolve();var t={offset:0,count:10,cgids:e};return(0,h.default)({url:"//wqcoss.jd.com/mcoss/autorank/show",data:t}).then(function(e){var t=e.body,r=void 0===t?{}:t,o=null;if(0==r.errcode){var n=r.data&&r.data[0]||{},a=n.list||[];if(a.length>=10){var i=a.find(function(e){return e.imgbase});i&&n.cgid&&n.ranktxt&&(o={name:n.ranktxt,desc:"精选榜单",img:(0,m.getImg)(i.imgbase,370,370),long_img:(0,m.getImg)(i.imgbase,370,501).replace(/(\.(jpg|jpeg))/,"$1!cc_370x501"),url:"//wqs.jd.com/wxsq_project/portal/intelligentlist/index.html?cgids="+n.cgid+"&cgidattr="+n.cgidattr+"&pps="+i.pps+"&skus="+i.skuid,id:n.cgid,attr:n.cgidattr})}}return o}).catch(function(){})},exports.getTopic=function(e){if(!e)return l.default.resolve();var t={topn:2,sceneid:1,count:2,offset:0,c3:e};return(0,h.default)({url:"//wqcoss.jd.com/mcoss/topic/gettopic",data:t}).then(function(e){var t=e.body,r=void 0===t?{}:t,o=null;if(0==r.errcode){var n=(r.themes||[]).filter(function(e){var t=(e.topicimgs||[]).find(function(e){return e.imgurl});return e.topicname&&e.topicdesc&&t&&(e.item=t)})[0];if(n){var a=n.item;o={name:n.topicname,desc:n.topicdesc,img:(0,m.getImg)(a.imgurl,370,370),long_img:(0,m.getImg)(a.imgurl,370,501).replace(/(\.(jpg|jpeg))/,"$1!cc_370x501"),url:"//wq.jd.com/webportal/channel/theme_page?sceneid=1&themeid="+n.topicid+"&pps="+a.pps+"&skus="+a.skuid,id:n.topicid}}}return o}).catch(function(){})},exports.getSwitchSkus=function(e){if(!e)return l.default.resolve();var t={skuid:e};return(0,h.default)({url:"//wq.jd.com/bases/searchxg/getsearchclo",data:t}).then(function(e){var t=e.body,r=void 0===t?{}:t,o=[];if(0==r.errcode){var n=r.images||[],a=r.prices||[];n.forEach(function(e){var t=a.find(function(t){return t[e.sku]});t&&e.imagePath&&(e.price=t[e.sku],e.shopName=r.vender||"",1==e.select?o.unshift(e):o.push(e))})}return o}).catch(function(){})},exports.addFavorite=function(e){if(!e)return l.default.resolve();var t={commId:e};return(0,h.default)({url:"//wq.jd.com/fav/comm/FavCommAdd",data:t}).then(function(e){var t=e.body;return 0==(void 0===t?{}:t).iRet}).catch(function(){})},exports.delFavorite=function(e){if(!e)return l.default.resolve();var t={commId:e};return(0,h.default)({url:"//wq.jd.com/fav/comm/FavCommDel",data:t}).then(function(e){var t=e.body;return 0==(void 0===t?{}:t).iRet}).catch(function(){})},exports.getFavoriteStatus=function(e){if(!e||!e.length)return l.default.resolve();var t={commId:e.join(",")};return(0,h.default)({url:"//wq.jd.com/fav/comm/FavManyCommQuery",data:t}).then(function(e){var t=e.body,r=void 0===t?{}:t,o={};return 0==r.iRet&&(r.data||[]).forEach(function(e){o[e.skuid]=e.state}),o}).catch(function(){})},exports.getCars=function(){var e={t:Date.now()};return(0,h.default)({url:"//wq.jd.com/commodity/aiche/getuserdefaultcarmodelbypin",data:e}).then(function(e){var t=e.body;return void 0===t?{}:t}).catch(function(){})},exports.getCarRecommend=function(e,t,r){var o={modelid:e,mileage:t,registrationdate:r};return(0,h.default)({url:"//wq.jd.com/commodity/maintenance/recommendmaintenancekeyword",data:o}).then(function(e){var t=e.body;return(void 0===t?{}:t).data||[]}).catch(function(){return[]})},exports.checkIsNewUser=function(){return(0,h.default)({url:"//wq.jd.com/userattribute/QueryIsNewUser"}).then(function(e){var t=e.body,r=void 0===t?{}:t;if(0==r.retcode)return 2==r.isNewUser}).catch(function(){})},exports.queryHongbaoActive=function(e){if(!e)return l.default.resolve();var t={scene:1,active:e};return(0,h.default)({url:"//wq.jd.com/activetmp/waterdrink/firstpagequery",data:t}).then(function(e){var t=e.body;return void 0===t?{}:t}).catch(function(){})},exports.drawHongbaoActive=d; 
 			}); 
		define("pages/search/model/smartbox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSmartList=exports.getHotWords=exports.clearHistoryWords=exports.setHistoryWords=exports.getHistoryWords=void 0;var e=function(e){return e&&e.__esModule?e:{default:e}}(require("../common/js/fetch.js")),t=require("../common/js/utils.js"),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(require("../../../common/localStorage.js"));exports.getHistoryWords=function(){return r.get("search_kw_history",[]).then(function(e){return e.forEach(function(e){switch(parseInt(e.type)){case 0:e.text=e.key+"（店铺）";break;case 1:e.text=e.key+"（京东国际）";break;case 2:e.text=e.key+"（"+e.desc+"）";break;default:e.text=e.key}}),e.reverse()}).catch(function(e){return console.warn(e),[]})},exports.setHistoryWords=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";2!=t&&(o="",n="");var s={key:e,type:t,ico:o,desc:n};r.get("search_kw_history",[]).then(function(o){var n=o||[],c=n.findIndex(function(r){return r.key==e&&r.type==t});c>-1&&n.splice(c,1),n.length>=20&&n.shift(),n.push(s),r.set("search_kw_history",n)}).catch(function(e){console.warn(e),r.set("search_kw_history",[s])})},exports.clearHistoryWords=function(){return r.remove("search_kw_history")},exports.getHotWords=function(t,r){return(0,e.default)({url:"//wqcoss.jd.com/mcoss/data/get",data:{func:"page_keyword",recpos:33665,param:encodeURIComponent(JSON.stringify({pagenum:t,pagesize:r}))}}).then(function(e){return e.body}).catch(function(){})},exports.getSmartList=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t.ENV.isXcx?"wxmina":t.ENV.isSq?"qq":"weixin";return(0,e.default)({url:"//wq.jd.com/bases/searchdropdown/getdropdown",data:{key:r,pvid:o,terminal:n,ver:2,zip:1,newjson:1}}).then(function(e){return e.body}).catch(function(){})}; 
 			}); 
		define("pages/search/models_old/search_coupon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1],o=arguments[2],a=arguments[3],n=arguments[4];this.success=function(s){if(console.log("result",s),"string"==typeof s)try{s=s.replace(/(:\s*".*?)(")(?=.*")/g,"$1\\$2"),s=JSON.parse(s)}catch(e){var i={errCode:m.default.RET_HTTP_RESPONSE_ERROR,errMsg:d(m.default.RET_HTTP_RESPONSE_ERROR)};n(i)}if(0!=s.retcode)return s.errCode=m.default.RET_HTTP_RESPONSE_ERROR,s.errMsg=d(s.errCode),void n(s);for(var c=s.data,l=c.searchm.Paragraph||[],u=(c.searchm.Head||{}).Query||{},p=[],h=0,f=l.length;h<f;++h){var _=l[h];_.Content.warename=_.Content.warename.replace(/<[^>]*>/g,""),_.imageurl="http://img1"+_.wareid%5+".360buyimg.com/n2/"+_.Content.imageurl,_.dredisprice=(1*_.dredisprice).toFixed(2),p.push(_)}var v={};if(v.itemList=p,o){var g=u.HcCid1s,y=void 0===g?"":g,b=u.HcCid2s,C=void 0===b?"":b,T=u.HcCid3s,E=void 0===T?"":T,R=u.Mtest,S=void 0===R?"":R;x.ReportManager.addSearchPagePv(t,e,v.itemList.length>0?"1":"0","",y,C,E,S);var P=[],w=[];if(c&&c.searchm&&"ObjExtAttrCollection"in c.searchm&&(""!=c.searchm.ObjExtAttrCollection&&(w=c.searchm.ObjExtAttrCollection),["品牌","价格","颜色","价位","颜色分类"].forEach(function(e){w.map(function(t,r){t.expandsortname==e&&w.splice(r,1)})}),w=w.map(function(e){var t=e.valueid.split(";").filter(function(e){return e}),r=e.valuename.split(";").filter(function(e){return e}),o=[];return t.forEach(function(e,t){o.push({valueid:e,valuename:r[t]})}),{expandsortname:e.expandsortname,expandsortid:e.expandsortid,sortorder:e.sortorder,selected:[],valueitem:o,type:"ext",isTap:!0}})),c&&c.searchm&&c.searchm.ObjB_TextCollection){if("brand"in c.searchm.ObjB_TextCollection&&""!=c.searchm.ObjB_TextCollection.brand.value){P=c.searchm.ObjB_TextCollection.brand.value.split("|=|");var H=c.searchm.ObjB_TextCollection.brand.pinyin.split(";"),I=[];P.filter(function(e){return e}).forEach(function(e,t){I.push({valueid:"0000",valuename:e,letter:H[t]})}),w.push({expandsortname:"品牌",expandsortid:"brand_0001",sortorder:c.searchm.ObjB_TextCollection.brand.sortorder,selected:[],valueitem:I,type:"brand",isTap:!0})}if("exp_size"in c.searchm.ObjB_TextCollection&&""!=c.searchm.ObjB_TextCollection.exp_size.value){var q=[];c.searchm.ObjB_TextCollection.exp_size.value.split(";").filter(function(e){return e}).forEach(function(e,t){q.push({valueid:"0000",valuename:e})}),w.push({expandsortname:"尺码/尺寸",expandsortid:"exp_size_0001",sortorder:c.searchm.ObjB_TextCollection.exp_size.sortorder,selected:[],valueitem:q,type:"exp_size",isTap:!0})}if("exp_color"in c.searchm.ObjB_TextCollection&&""!=c.searchm.ObjB_TextCollection.exp_color.value){var M=[];c.searchm.ObjB_TextCollection.exp_color.value.split(";").filter(function(e){return e}).forEach(function(e,t){M.push({valueid:"0000",valuename:e})}),w.push({expandsortname:"颜色",expandsortid:"exp_color_0001",sortorder:c.searchm.ObjB_TextCollection.exp_color.sortorder,selected:[],valueitem:M,type:"exp_color",isTap:!0})}}w.sort(function(e,t){return e.sortorder-t.sortorder});var N=[],k=[],B=[],A={},z={};c.searchm&&c.searchm.ObjCollection&&(N=c.searchm.ObjCollection.cid2||[],k=c.searchm.ObjCollection.catid||[]);for(var L=0,F=N.length;L<F;++L){var U=N[L];A[U.Classification]={id:U.Classification,name:U.Name,childs:[]}}for(var D=0,$=k.length;D<$;++D){var Q=k[D],J=Q.Name;A[Q.FClassification]&&A[Q.FClassification].childs.push({id:Q.Classification,name:Q.Name}),z[J]||(z[J]=Q.Classification)}for(var W=0,G=N.length;W<G;++W){var V=A[N[W].Classification];V&&B.push(V)}v.comonList=w,v.cid2List=B,v.HcCid1s=y.split(";"),v.HcCid2s=C.split(";"),v.HcCid3s=E.split(";"),v.mtest=S,O=c.searchm.ObjC_NumberCollection.vender_id,j="201"==c.plusMemberType||"101"==c.plusMemberType}c.searchm.Head.Summary.Page&&(v.pageIndex=c.searchm.Head.Summary.Page.PageIndex||"",v.pageCount=c.searchm.Head.Summary.Page.PageCount||""),v.resultCount=c.searchm.Head.Summary.OrgSkuCount||"";var K={"京东物流":!0,"有货优先":!0,"货到付款":!0,"京东国际":!0,"促销商品":!0};v.filter=K,v.pageIndex=c.searchm.Head.Summary.Page.PageIndex,v.pageCount=c.searchm.Head.Summary.Page.PageCount,v.resultCount=c.searchm.Head.Summary.OrgSkuCount,v.isStock="true",v.isPlusMember=j,r(a,v.itemList,v.pageIndex,e,s.data),n("",v)},this.fail=function(e){n(l(e))}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],r=arguments[2],o=arguments[3],a=arguments[4],n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(0!=t.length){var s=[],i=[];t.forEach(function(e){s.push(e),i.push(e.wareid)});var c={sf:n,actid:11===n?1:0,ss_exp_type:1,search_kwd:encodeURIComponent(o),intenid:s[0].catid,exp_sku_list:i.join("_"),exp_sku_qtty:i.length,ss_page:r,ss_mtest:"",event_id:"",ss_hccid1s:"",ss_hccid2s:"",ss_hccid3s:""};if(e.coupon_batch){var d=e.coupon_batch,l=void 0===d?"":d,u=e.coupon_kind,p=void 0===u?"":u,h=e.coupon_shopid,f=void 0===h?"":h;c.coupon_batch=l,c.coupon_kind=p,c.coupon_shopid=f}else{var m=e.activity_id,_=void 0===m?"":m;c.activity_id=_}if(a.adpos&&"[object Object]"===Object.prototype.toString.call(a.adpos)){c.csid=a.adpos.csid||"";try{c.event_id=a.adpos.PosAdInfo.event_id||""}catch(e){console.log(e)}}try{a.searchm.Head.Query&&"[object Object]"===Object.prototype.toString.call(a.searchm.Head.Query)&&(c.ss_mtest=a.searchm.Head.Query.Mtest||"",c.ss_hccid1s=a.searchm.Head.Query.HcCid1s||"",c.ss_hccid2s=a.searchm.Head.Query.HcCid2s||"",c.ss_hccid3s=a.searchm.Head.Query.HcCid3s||"")}catch(e){console.log(e)}s.length>0&&x.ReportManager.addSearchPageExposure(c)}}function o(e){this.success=function(t){if("string"==typeof t)try{t=t.replace(/(:\s*".*?)(")(?=.*")/g,"$1\\$2"),t=JSON.parse(t)}catch(t){var r={errCode:m.default.RET_HTTP_RESPONSE_ERROR,errMsg:d(m.default.RET_HTTP_RESPONSE_ERROR)};e(r)}if(0!=t.retcode)return t.errCode=m.default.RET_HTTP_RESPONSE_ERROR,t.errMsg=d(t.errCode),void e(t);var o={},a=t.data,n=[],s=[];if(a&&a.searchm&&"ObjExtAttrCollection"in a.searchm&&(""!=a.searchm.ObjExtAttrCollection&&(s=a.searchm.ObjExtAttrCollection),["品牌","价格","颜色","价位","颜色分类"].forEach(function(e){s.map(function(t,r){t.expandsortname==e&&s.splice(r,1)})}),s=s.map(function(e){var t=e.valueid.split(";").filter(function(e){return e}),r=e.valuename.split(";").filter(function(e){return e}),o=[];return t.forEach(function(e,t){o.push({valueid:e,valuename:r[t]})}),{expandsortname:e.expandsortname,expandsortid:e.expandsortid,sortorder:e.sortorder,selected:[],valueitem:o,type:"ext",isTap:!0}})),a&&a.searchm&&a.searchm.ObjB_TextCollection){if("brand"in a.searchm.ObjB_TextCollection&&""!=a.searchm.ObjB_TextCollection.brand.value){n=a.searchm.ObjB_TextCollection.brand.value.split("|=|");var i=a.searchm.ObjB_TextCollection.brand.pinyin.split(";"),c=[];n.filter(function(e){return e}).forEach(function(e,t){c.push({valueid:"0000",valuename:e,letter:i[t]})}),s.push({expandsortname:"品牌",expandsortid:"brand_0001",sortorder:a.searchm.ObjB_TextCollection.brand.sortorder,selected:[],valueitem:c,type:"brand",isTap:!0})}if("exp_size"in a.searchm.ObjB_TextCollection&&""!=a.searchm.ObjB_TextCollection.exp_size.value){var l=[];a.searchm.ObjB_TextCollection.exp_size.value.split(";").filter(function(e){return e}).forEach(function(e,t){l.push({valueid:"0000",valuename:e})}),s.push({expandsortname:"尺码/尺寸",expandsortid:"exp_size_0001",sortorder:a.searchm.ObjB_TextCollection.exp_size.sortorder,selected:[],valueitem:l,type:"exp_size",isTap:!0})}if("exp_color"in a.searchm.ObjB_TextCollection&&""!=a.searchm.ObjB_TextCollection.exp_color.value){var u=[];a.searchm.ObjB_TextCollection.exp_color.value.split(";").filter(function(e){return e}).forEach(function(e,t){u.push({valueid:"0000",valuename:e})}),s.push({expandsortname:"颜色",expandsortid:"exp_color_0001",sortorder:a.searchm.ObjB_TextCollection.exp_color.sortorder,selected:[],valueitem:u,type:"exp_color",isTap:!0})}}s.sort(function(e,t){return e.sortorder-t.sortorder});var p=[],h=[],f=[],_={},v={};a.searchm&&a.searchm.ObjCollection&&(p=a.searchm.ObjCollection.cid2||[],h=a.searchm.ObjCollection.catid||[]);for(var g=0,x=p.length;g<x;++g){var y=p[g];_[y.Classification]={id:y.Classification,name:y.Name,childs:[]}}for(var b=0,C=h.length;b<C;++b){var T=h[b],E=T.Name;_[T.FClassification]&&_[T.FClassification].childs.push({id:T.Classification,name:T.Name}),v[E]||(v[E]=T.Classification)}for(var O=0,R=p.length;O<R;++O){var j=_[p[O].Classification];j&&f.push(j)}o.comonList=s,o.cid2List=f,o.isStock="true",e("",o)},this.fail=function(t){e(l(t))}}function a(e,t,r){this.success=function(o){var n=this;if("string"==typeof o)try{o=o.replace(/(:\s*".*?)(")(?=.*")/g,"$1\\$2"),o=JSON.parse(o)}catch(e){var s={errCode:m.default.RET_HTTP_RESPONSE_ERROR,errMsg:d(m.default.RET_HTTP_RESPONSE_ERROR)};r(s)}if("13"===o.errId)v.doLogin().then(function(){a(e,r)}).catch(function(e,t){n.fail(t)});else if(0!=o.errId)return o.errCode=m.default.RET_HTTP_RESPONSE_ERROR,o.errMsg=d(o.errId),void r(o);if(o.cart&&o.cart.venderCart){for(var i,c=o.cart.venderCart||[],l="",u=[],p={},h=!1,f=0,_=c.length;f<_;f++){if((i=c[f]).mzsuits&&i.mzsuits.length>0)for(var g,x=0,y=i.mzsuits.length;x<y;x++)g=i.mzsuits[x],!l&&g.promotion&&g.promotion.pid==t&&(l=g,h=function(t){var r=!1;if(t.products&&t.products.length)for(var o=0,a=t.products.length;o<a;o++)if(t.products[o].mainSku.id===e){r=!0;break}return r}(g));if(l)break}l&&(u=(l.manGiftSkus||[]).filter(function(e){return e&&"2"===e.giftSelectState})),p.giftSkus=u,p.isInCart=h,r("",p)}else r({errCode:1,errMsg:"数据返回不完整"})},this.fail=function(e){r(l(e))}}function n(e){this.success=function(t){if("string"==typeof t)try{t=t.replace(/(:\s*".*?)(")(?=.*")/g,"$1\\$2"),t=JSON.parse(t)}catch(t){var r={errCode:m.default.RET_HTTP_RESPONSE_ERROR,errMsg:d(m.default.RET_HTTP_RESPONSE_ERROR)};e(r)}if(0!=t.errId)return t.errCode=m.default.RET_HTTP_RESPONSE_ERROR,t.errMsg=d(t.errId),void e(t);var o=t.cart;e("",o)},this.fail=function(t){e(l(t))}}function s(e,t,r){e=e||"",t=t||[];var o=[],a=_.getUserAddressID(),n={};e?(o=[e,"","1",e,"13,"+E+",0","","","",t.join("_")],n={type:0,scene:8,reg:1,commlist:o.join(","),locationid:a}):(t.forEach(function(e){o.push([e,"0","1",e,"15,"+E+",0"].join(","))}),n={type:1,scene:0,action:0,commlist:o.join("$"),locationid:a}),g.get("3c_shop","").then(function(e){var o=e.id||"";o&&(n.shopid=o);var a=new i(t,r),s=a.success,c=a.fail;(0,f.request)({data:n,url:"https://wqdeal.jd.com/deal/mshopcart/addcmdy"}).then(function(e){var t=e.body;getApp().event.emit("cartrefresh"),s(t)}).catch(c)})}function i(e,t){this.success=function(r){var o=this;if("string"==typeof r)try{r=r.replace(/(:\s*".*?)(")(?=.*")/g,"$1\\$2"),r=JSON.parse(r)}catch(e){var a={errCode:m.default.RET_HTTP_RESPONSE_ERROR,errMsg:d(m.default.RET_HTTP_RESPONSE_ERROR)};t(a)}var n=r.errId;"13"===n?v.doLogin().then(function(){s(e,t)}).catch(function(e,t){o.fail(t)}):"0"===n?t(null,!0):t({errCode:n,errMsg:r.errMsg})},this.fail=function(e){t(l(e))}}function c(e){this.success=function(t){0==t.errcode&&0!=t.data.length||e("getShopInfo error or no datas");var r=t.data[0];"0"==r.shopId?e("default shop"):(r.venderId=O,e("",r))},this.fail=function(t){e(l(t))}}function d(e){var t="";switch(e){case m.default.RET_HTTP_RESPONSE_ERROR:t=m.default.Text_RET_HTTP_RESPONSE_ERROR;break;case m.default.RET_WS_CONNECT_ERROR:t=m.default.Text_RET_WS_CONNECT_ERROR;break;case m.default.RET_WS_REQUEST_TIMEOUT:t=m.default.Text_RET_WS_REQUEST_TIMEOUT}return t}function l(e){return"string"==typeof e?{errCode:e,errMsg:d(e)}:e}function u(e,t,r,o){var a={batchid:e,source:"mergecoupon",venderid:t,couponkind:r,t:Math.random()};(0,f.request)({data:a,url:"https://wqdeal.jd.com/deal/mcartassit/mergecouponorder"}).then(function(a){var n=a.body;"13"===n.errId?v.doLogin().then(function(){u(e,t,r,o)}).catch(function(e){o(l(e))}):o("",n)}).catch(function(e){o(l(e))})}function p(e,t,r){var o=[],a=_.getUserAddressID();e.map(function(e){o.push([e,0,1,e,16,t,0].join(","))});var n={commlist:o.join("$"),type:1,checked:0,locationid:a.replace(/_/g,"-")};(0,f.request)({data:n,url:"https://wq.jd.com/deal/mshopcart/rmvCmdy"}).then(function(o){var a=o.body;"13"===a.errId?v.doLogin().then(function(){p(e,t,r)}).catch(function(e){r(l(e))}):r("",a)}).catch(function(e){r(l(e))})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.rmvCmdy=exports.modifyNum=exports.unSelectFun=exports.seclectFun=exports.getCartData=exports.getCouponInfo=exports.getShopInfo=exports.hgAddCart=exports.addCartSpec=exports.getCartview=exports.getFilterData=exports.getSearchResult=void 0;var h=function(){function e(e,t){var r=[],o=!0,a=!1,n=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);o=!0);}catch(e){a=!0,n=e}finally{try{!o&&i.return&&i.return()}finally{if(a)throw n}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=require("../../../common/request/request.js"),m=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../common/http_constant")),_=e(require("../../../common/user_info.js")),v=e(require("../../../common/login/login.js")),g=e(require("../../../common/localStorage.js")),x=require("../../../api/Ptag/report_manager"),y=759,b=function(e){return 0==Object.keys(e).length?"":Object.entries(e).map(function(e){var t=h(e,2),r=t[0],o=t[1];return o.reduce(function(e,t,a,n){return 1==o.length?r+",,"+t:a==n.length-1?e+(r+",,")+t+"[)]":e+(r+",,")+t+"[|]"},"[(]")}).join("[+]")},C=function(e){return 0==Object.keys(e).length?"":"expand_name,"+Object.entries(e).map(function(e){var t=h(e,2),r=t[0];return t[1].join("||")+"::"+r}).join("^^")+";"},T="",E="",O="",R="",j=!1,S="https://wqsou.jd.com/coprsearch/wxappcosearch",P="https://wqsou.jd.com/coprsearch/wxappprsearch",w=!1,H={sales:"sort_totalsales15_desc",price_asc:"sort_dredisprice_asc",price_desc:"sort_dredisprice_desc",winsdate_desc:"sort_winsdate_desc",commentcount_desc:"sort_commentcount_desc"},I={brand:"brand",exp_size:"exp_size",exp_color:"exp_color"},q={"货到付款":"cod,L1M1;","促销商品":"promotion_address,b2v1||b7v1;","211限时达":"delivertime,1;","京东物流":"col_type,L0M0;","新品":"product_ext,b26v1;","京尊达":"product_ext,b3v1;","京东国际":"product_ext,b11v1;","PLUS专享促销":"plus_promotion;"};exports.getSearchResult=function(e,r){_.initUserData();var o=e.page||1,a=e.size||10,n=e.keyword||"",s=e.isFirstLoad||!1,i=e.coupon_kind||"",c=e.coupon_shopid||"",d="",l="";T=e.coupon_batch||"",E=e.activity_id||"",T||E||r({errCode:1,errMsg:"缺少关键参数"});var u=e.sortType?H[e.sortType]:"",p={},h={},m=void 0;Array.isArray(e.extendFields)&&e.extendFields.forEach(function(e){var t=I[e.type];if(t&&Array.isArray(e.selected)&&e.selected.length>0)return p[t]=e.selected.map(function(e){return e.valuename});if("ext"==e.type&&Array.isArray(e.selected)&&e.selected.length>0){var r=e.selected.map(function(e){return e.valueid});h[e.expandsortid]=r}});var v="";if(e.service){var g=!!Array.isArray(e.service)&&e.service.indexOf("有货优先")>-1;g&&(v=v+"redisstore,"+_.getUserAddressID().split("_")[0]+";"),g||""==R||(m="8");for(var x=0;x<e.service.length;x++){var O=e.service[x];q[O]&&(v+=q[O])}}else""!=R&&(m="8");var j="";e.catid&&e.catid.id&&(j="catid,L"+e.catid.id+"M"+e.catid.id+";");var w="";e.price&&(w="dredisprice,"+e.price+";");var M=C(h),N={key:n,page:o,datatype:4,rtapi:"no",pagesize:a,sort_type:u,size_col:"yes",neverpop:"yes",ext_attr:"no",brand_col:"yes",price_col:"yes",color_col:"yes",multi_select:"yes",ext_attr_sort:"no",qp_exclude:m,multi_suppliers:"yes",expression_key:b(p),filt_type:w+v+j+M},k=void 0;T?(N.coupon_aggregation="yes",d=S,l="http://wq.jd.com/wxapp/pages/search/subPackages/coupon/coupon",N.coupon_batch=T,k=12,i&&(N.coupon_kind=i),c&&(N.coupon_shopid=c)):(N.promotion_aggregation="yes",d=P,l="http://wq.jd.com/wxapp/pages/search/subPackages/sales/sales",k=13,N.activity_id=E),Object.keys(N).forEach(function(e){(null==N[e]||void 0===N[e]||""==N[e])&&delete N[e]});var B=new t(n,l,s,N,r),A=B.success,z=B.fail;(0,f.request)({url:d,data:N,speedPointId:T?8:9,ump:{opId:k,bizId:y}}).then(function(e){var t=e.body;A(t)}).catch(z)},exports.getFilterData=function(e,t){var r=e.coupon_batch||"",a=e.activity_id||"",n={},s="";n={coupon_aggregation:"yes",neverpop:"yes",datatype:4,ext_attr:"yes",brand_col:"yes",price_col:"yes",color_col:"yes",size_col:"yes",ext_attr_sort:"yes",merge_sku:"yes",filt_type:"redisstore,19;",multi_suppliers:"yes",rtapi:"no"},r?(s=S,n.coupon_batch=r):(s=P,n.activity_id=a);var i=new o(t),c=i.success,d=i.fail;(0,f.request)({data:n,url:s}).then(function(e){var t=e.body;c(t)}).catch(d)},exports.getCartview=function(e,t,r){E=t||E;var o={reg:1,isnewyb:1,locationid:_.getUserAddressID()},n=new a(e,t,r),s=n.success,i=n.fail;(0,f.request)({data:o,url:"https://wqdeal.jd.com/deal/mshopcart/cartview"}).then(function(e){var t=e.body;s(t)}).catch(i)},exports.addCartSpec=function(e,t,r){var o=[e,"","1",e,"1,0,0"];w&&(o[7]="1"),t=t||[];var a={scene:0,action:0,commlist:o.join(","),locationid:t.join("-")};g.get("3c_shop","").then(function(e){var t=e.id||"";t&&(a.shopid=t);var o=new n(r),s=o.success,i=o.fail;(0,f.request)({data:a,url:"https://wqdeal.jd.com/deal/mshopcart/addcmdy"}).then(function(e){var t=e.body;s(t)}).catch(i)})},exports.hgAddCart=s,exports.getShopInfo=function(e,t){if(e&&"0"!=e){var r=new c(t),o=r.success,a=r.fail;(0,f.request)({url:"https://wq.jd.com/mshop/BatchGetShopInfoByVenderId",data:{venderIds:e}}).then(function(e){var t=e.body;o(t)}).catch(a)}else t("no vender_id or vender_id eq 0")},exports.getCouponInfo=function(e){return(0,f.request)({url:"https://wq.jd.com/activeapi/queryjdcouponbatchinfo",data:{batchids:e}}).then(function(t){var r=t.body;return 0!=r.errorCode?Promise.reject({code:r.errorCode,message:r.errMsg}):r.batch[e]&&r.batch[e].length?r.batch[e][0]:{}})},exports.getCartData=u,exports.seclectFun=function(e,t,r,o){var a={commlist:[e,"","0",e,t,r,"0"],locationid:_.getUserAddressID(),type:0,source:"mergecoupon",all:0,t:Math.random()};(0,f.request)({data:a,url:"https://wqdeal.jd.com/deal/mshopcart/checkcmdy"}).then(function(e){var t=e.body;getApp().event.emit("cartrefresh"),o("",t)}).catch(function(e){o(l(e))})},exports.unSelectFun=function(e,t,r,o){var a={commlist:[e,"","0",e,t,r,"0"],locationid:_.getUserAddressID(),type:0,source:"mergecoupon",all:0,t:Math.random()};(0,f.request)({data:a,url:"https://wqdeal.jd.com/deal/mshopcart/uncheckcmdy"}).then(function(e){var t=e.body;getApp().event.emit("cartrefresh"),o("",t)}).catch(function(e){o(l(e))})},exports.modifyNum=function(e,t,r,o,a){var n={commlist:[e,"",t,e,r,o,"0"],locationid:_.getUserAddressID(),type:0,source:"mergecoupon",all:0,t:Math.random()};(0,f.request)({data:n,url:"https://wqdeal.jd.com/deal/mshopcart/modifycmdynum"}).then(function(e){var t=e.body;a("",t)}).catch(function(e){a(l(e))})},exports.rmvCmdy=p; 
 			}); 
		define("pages/search/models_old/search_result.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function t(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";"object"==(void 0===r?"undefined":a(r))&&(r=r.code+" - "+r.message),u.umpBiz({bizid:d,operation:e,result:~~t,message:r})}function r(e,t){this.success=function(e){if("string"==typeof e)try{e=e.replace(/(:\s*".*?)(")(?=.*")/g,"$1\\$2"),e=JSON.parse(e)}catch(e){var r={errCode:s.default.RET_HTTP_RESPONSE_ERROR,errMsg:o(s.default.RET_HTTP_RESPONSE_ERROR)};return t(r)}if(0!=e.retcode)return e.errCode=s.default.RET_HTTP_RESPONSE_ERROR,e.errMsg=o(e.errCode),void t(e);var n={},a=e.data||{};if(!a.searchm||"[object Object]"!=Object.prototype.toString.call(a.searchm))return t(f);var i=[],c=[];if("ObjExtAttrCollection"in a.searchm&&Array.isArray(a.searchm.ObjExtAttrCollection)&&a.searchm.ObjExtAttrCollection.length>0&&(c=a.searchm.ObjExtAttrCollection,["品牌","价格","颜色","价位","颜色分类"].forEach(function(e){c.map(function(t,r){t.expandsortname==e&&c.splice(r,1)})}),c=c.map(function(e){var t=e.valueid.split(";").filter(function(e){return e}),r=e.valuename.split(";").filter(function(e){return e}),o=[];return t.forEach(function(e,t){o.push({valueid:e,valuename:r[t]})}),{expandsortname:e.expandsortname,expandsortid:e.expandsortid,sortorder:e.sortorder,selected:[],valueitem:o,type:"ext",isTap:!1}})),a.searchm.ObjB_TextCollection){if("brand"in a.searchm.ObjB_TextCollection&&""!=a.searchm.ObjB_TextCollection.brand.value){i=a.searchm.ObjB_TextCollection.brand.value.split("|=|");var u=a.searchm.ObjB_TextCollection.brand.pinyin.split(";"),l=[];i.filter(function(e){return e}).forEach(function(e,t){l.push({valueid:"0000",valuename:e,letter:u[t]})}),c.push({expandsortname:"品牌",expandsortid:"brand_0001",sortorder:a.searchm.ObjB_TextCollection.brand.sortorder,selected:[],valueitem:l,type:"brand",isTap:!1})}if("exp_size"in a.searchm.ObjB_TextCollection&&""!=a.searchm.ObjB_TextCollection.exp_size.value){var d=[];a.searchm.ObjB_TextCollection.exp_size.value.split(";").filter(function(e){return e}).forEach(function(e,t){d.push({valueid:"0000",valuename:e})}),c.push({expandsortname:"尺码/尺寸",expandsortid:"exp_size_0001",sortorder:a.searchm.ObjB_TextCollection.exp_size.sortorder,selected:[],valueitem:d,type:"exp_size",isTap:!1})}if("exp_color"in a.searchm.ObjB_TextCollection&&""!=a.searchm.ObjB_TextCollection.exp_color.value){var p=[];a.searchm.ObjB_TextCollection.exp_color.value.split(";").filter(function(e){return e}).forEach(function(e,t){p.push({valueid:"0000",valuename:e})}),c.push({expandsortname:"颜色",expandsortid:"exp_color_0001",sortorder:a.searchm.ObjB_TextCollection.exp_color.sortorder,selected:[],valueitem:p,type:"exp_color",isTap:!1})}}c.sort(function(e,t){return e.sortorder-t.sortorder});var m=[],h=[];a.searchm.ObjCollection&&"[object Object]"===Object.prototype.toString.call(a.searchm.ObjCollection)&&(Array.isArray(a.searchm.ObjCollection.cid2)&&(m=a.searchm.ObjCollection.cid2),Array.isArray(a.searchm.ObjCollection.catid)&&(h=a.searchm.ObjCollection.catid));for(var v=[],_={},b={},y=0,x=m.length;y<x;++y){var g=m[y];_[g.Classification]={id:g.Classification,name:g.Name,childs:[]}}for(var j=0,O=h.length;j<O;++j){var T=h[j],E=T.Name;_[T.FClassification]&&_[T.FClassification].childs.push({id:T.Classification,name:T.Name}),b[E]||(b[E]=T.Classification)}for(var C=0,S=m.length;C<S;++C){var R=_[m[C].Classification];R&&v.push(R)}n.cid2List=v,n.comonList=c;try{n.total=a.searchm.Head.Summary.ResultCount}catch(e){console.error("未能获取到数量字段 searchm.Head.Summary.ResultCount",e)}t("",n)},this.fail=function(e){t(n(e))}}function o(e){var t="";switch(e){case s.default.RET_HTTP_RESPONSE_ERROR:t=s.default.Text_RET_HTTP_RESPONSE_ERROR;break;case s.default.RET_WS_CONNECT_ERROR:t=s.default.Text_RET_WS_CONNECT_ERROR;break;case s.default.RET_WS_REQUEST_TIMEOUT:t=s.default.Text_RET_WS_REQUEST_TIMEOUT}return t}function n(e){return"string"==typeof e?{errCode:e,errMsg:o(e)}:e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSkuExtraInfo=exports.getYuYueHiddenPirce=exports.getErrmsg=exports.getYuYueTag=exports.getNewMcossTag=exports.getLocalStore=exports.getSearchLinkage=exports.getComments=exports.getStockPrice=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&c.return&&c.return()}finally{if(n)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=e(require("../../../common/user_info.js")),s=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../common/http_constant")),u=e(require("../../../common/fe_report/usability.js")),l=require("../../../common/request/request.js"),d=759,f={errCode:s.default.RET_HTTP_RESPONSE_ERROR,errMsg:o("系统错误，接口返回不规范提醒")},p=function(e){return 0==Object.keys(e).length?"":Object.entries(e).map(function(e){var t=i(e,2),r=t[0],o=t[1];return o.reduce(function(e,t,n,a){return 1==o.length?r+",,"+t:n==a.length-1?e+(r+",,")+t+"[)]":e+(r+",,")+t+"[|]"},"[(]")}).join("[+]")},m=function(e){return 0==Object.keys(e).length?"":"expand_name,"+Object.entries(e).map(function(e){var t=i(e,2),r=t[0];return t[1].join("||")+"::"+r}).join("^^")+";"},h="",v=void 0,_=void 0,b={sales:"sort_totalsales15_desc",price_asc:"sort_dredisprice_asc",price_desc:"sort_dredisprice_desc",winsdate_desc:"sort_winsdate_desc",commentcount_desc:"sort_commentcount_desc"},y={brand:"brand",exp_size:"exp_size",exp_color:"exp_color"},x={"货到付款":"cod,L1M1;","促销商品":"promotion_address,b2v1||b7v1;","211限时达":"delivertime,1;","京东物流":"col_type,L0M0;","新品":"product_ext,b26v1;","京尊达":"product_ext,b3v1;","京东国际":"product_ext,b11v1;","PLUS专享促销":"plus_promotion;","艺术品":"productext2,b5v1;","拼购商品":"productext2,b12v1;","拍拍二手":"cid1,L13765M13765;"};exports.getStockPrice=function(e,r){if(e){var o=e.map(function(e){return 1}).join(","),a=c.getUserAddressID().split("_"),s=a.length;if(s>4)a=a.slice(0,4);else if(s<4)for(var u=0;u<4-s;u++)a.push(0);var f={command:3,skus:e.join(","),area:a.join("_"),source:"wxapp_search",app:"search_wx",priceinfo:1,buynums:o,format:1,callback:"skudescribeCB"},p=c.getAddress().coordinateWithType;p&&(f.coord=p),(0,l.request)({url:"https://wq.jd.com/commodity/skudescribe/get",data:f,method:"GET",ump:{opId:2,bizId:d,reportHook:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{code:Object.keys(e).length>0?0:-1}}}}).then(function(e){var o=e.body,n=o,a=o.priceinfo,c=void 0===a?{}:a,s=o.stockstate,u=void 0===s?{}:s;0==n.errcode&&(0==c.errcode?(c=c.data,0===Object.keys(c).length&&t(5,0)):t(3,-1),0==u.errcode?u=u.data:t(4,-1));var l={},d=new Map([[34,"无货"],[36,"预订"]]),f=!0,p=!1,m=void 0;try{for(var h,v=Object.entries(u)[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var _=i(h.value,2),b=_[0],y=_[1],x=d.get(+y.a)||y.c;l[b]={status:x,d:y.d,e:y.e}}}catch(e){p=!0,m=e}finally{try{!f&&v.return&&v.return()}finally{if(p)throw m}}r("",{stock:l,price:c})}).catch(function(e){r(n(e))})}},exports.getComments=function(e,r){if(e){for(var o="summary-m-",a=0,i=e.length;a<i;++a)o=o+e[a]+",";o=o.substring(0,o.length-1),(0,l.request)({url:"https://club.jd.com/clubservice/"+o+".html",data:{},method:"GET",ump:{opId:6,bizId:d,reportHook:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"CommentsCount"in e?{code:e.CommentsCount.length>0?0:-1}:{code:-1}}}}).then(function(e){var o=e.body.CommentsCount,n={};0==o.length&&t(7,0);for(var a=0,i=o.length;a<i;++a){var c=o[a];n[c.SkuId]=0==c.SensitiveBook?c.CommentCount+"_"+c.GoodRateShow+"%":"sensitive"}r("",n)}).catch(function(e){r(n(e))})}},exports.getSearchLinkage=function(e,t,o){var n=e,i={},s={},u=t.sortType?b[t.sortType]||"":"";Array.isArray(t.extendFields)&&t.extendFields.forEach(function(e){var t=y[e.type];if(t&&Array.isArray(e.selected)&&e.selected.length>0)return i[t]=e.selected.map(function(e){return e.valuename});if("ext"==e.type&&Array.isArray(e.selected)&&e.selected.length>0){var r=e.selected.map(function(e){return e.valueid});s[e.expandsortid]=r}});var d="";if(t.service){var f=!!Array.isArray(t.service)&&t.service.indexOf("有货优先")>-1;f&&(d=d+"redisstore,"+c.getUserAddressID().split("_")[0]+";","8"==v&&(v=null)),!f&&h&&(v="8");for(var g=0;g<t.service.length;g++){var j=t.service[g];if(x[j]&&(d+=x[j]),"object"==(void 0===_?"undefined":a(_))&&t.service[g]==_.actname){var O=_.actid;d+="ico,L"+O+"M"+O+";"}}}var T="";t.catid&&t.catid.id&&(T="catid,L"+t.catid.id+"M"+t.catid.id+";"),t.virtual&&t.virtual.length>0&&(T+=t.virtual.join(";")+";");var E="";t.price&&(E="dredisprice,"+t.price+";");var C=m(s),S={key:n,datatype:4,sort_type:u,expression_key:p(i),filt_type:E+d+T+C,qp_exclude:v};Object.keys(S).forEach(function(e){(null==S[e]||void 0===S[e]||""==S[e])&&delete S[e]});var R=new r(e,o),k=R.success,w=R.fail;(0,l.request)({data:S,url:"https://wqsou.jd.com/search/searchattr"}).then(function(e){var t=e.body;k(t)}).catch(w)},exports.getLocalStore=function(e,t){var r={skuinfo:e.join(",")};(0,l.request)({url:"https://wq.jd.com/bases/searchxg/promiserealtime",data:r,method:"GET"}).then(function(e){var r=[];e.body.skuinfolist.forEach(function(e,t){if(Array.isArray(e.flaglist)){var o=e.skuid;e.flaglist.forEach(function(e){1==e.flag&&r.push(o)})}}),t("",r)}).catch(function(e){t(n(e))})},exports.getNewMcossTag=function(e,t){var r={sku:e.join(","),flagtype:1,source:"wssearch",ump:{bizId:d,opId:10}};(0,l.request)({url:"https://wq.jd.com/bases/panflag/get",data:r,ump:{opId:8,bizId:d}}).then(function(e){var r={};e.body.data.skuFlag.forEach(function(e){switch(e.flagType){case"1":r[e.skuId]=e}}),t("",r)}).catch(function(e){t(n(e))})},exports.getYuYueTag=function(e,t){var r={sku:e.join(","),source:1};(0,l.request)({data:r,url:"https://yushou.jd.com/youshouinfoList.action"}).then(function(e){var r=e.body,o={};for(var n in r){var a=JSON.parse(r[n]);if(!a.error){1==a.state||2==a.state?o[n]="预约":3==a.state||4==a.state?o[n]="抢购":o[n]="预售";try{1==a.ret.hideRealPrice&&2==a.type&&(o[n]+="|待发布")}catch(e){console.log("")}}}t("",o)}).catch(function(e){t(n(e))})},exports.getErrmsg=o,exports.getYuYueHiddenPirce=function(e){var t={sku:e.join(",")};return new Promise(function(e,r){(0,l.request)({data:t,url:"https://wq.jd.com/commodity/marattr/readattributes"}).then(function(t){var r=t.body,o={};0==r.errcode&&(o=r.data),e(o)}).catch(function(e){r(e)})})},exports.getSkuExtraInfo=function(e,r){var o={debugPort:8834,skuIds:e.join(","),area:c.getUserAddressID(),bookingSkuIds:r.join(",")};return(0,l.request)({data:o,url:"https://wq.jd.com/webportal/cgigw/wxapp_search_coupon",speedPointId:13,ump:{opId:19,bizId:d}}).then(function(e){var r=e.body.data,o=r.commentList,n=void 0===o?[]:o,a=r.bookingPrice,c=void 0===a?{}:a,s=r.bookingInfo,u=void 0===s?{}:s,l={};0==n.length&&t(7,0),Array.isArray(n)&&n.forEach(function(e){var t=e.SkuId,r=e.CommentCount,o=e.GoodRateShow;l[t]=r+"_"+o+"%"});var d={},f=!0,p=!1,m=void 0;try{for(var h,v=Object.entries(u)[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var _=i(h.value,2),b=_[0],y=_[1],x=void 0;try{x=JSON.parse(y)}catch(e){console.warn(e)}if(x&&!x.error){var g=x,j=g.state,O=g.ret,T=g.type;switch(j){case 1:case 2:d[b]="预约";break;case 3:case 4:d[b]="抢购";break;default:d[b]="预售"}O&&1==O.hideRealPrice&&2==T&&(d[b]+="|待发布")}}}catch(e){p=!0,m=e}finally{try{!f&&v.return&&v.return()}finally{if(p)throw m}}return{comment:l,bookingPrice:c,bookingInfo:d}})}; 
 			}); 
		define("pages/search/models_old/search_sales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function e(t){return 0==t?t:(t/100).toFixed(2)}function o(t){return{factPrice:e(t.coudanSuit.factPrice),totalPrice:e(t.coudanSuit.totalPrice),promoTitle:t.coudanSuit.promoTitle,manGiftSkus:t.coudanSuit.manGiftSkus,mzsuit:t.coudanSuit}}function r(t,e){var n=i.getUserAddressID(),a={callback:"addCartCBD",commlist:e,scene:"0",action:"0",locationid:n,promoid:t,t:Math.random()};return new Promise(function(n,i){(0,c.request)({url:"https://wqdeal.jd.com/deal/mergeorder/coudanaddcmdy",method:"GET",data:a}).then(function(a){var c=a.body;"13"===c.errId?d.doLogin().then(function(){r(t,e)}).catch(function(t){i(t)}):(getApp().event.emit("cartrefresh"),n(o(c)))}).catch(function(t){i(t)})})}function n(t,e){var r=i.getUserAddressID(),a={callback:"addRemoveCmdyD",commlist:e,type:"1",scene:"0",action:"0",locationid:r,promoid:t,t:Math.random()};return new Promise(function(r,i){(0,c.request)({url:"https://wqdeal.jd.com/deal/mergeorder/coudanaddcmdy",method:"GET",data:a}).then(function(a){var c=a.body;"13"===c.errId?d.doLogin().then(function(){n(t,e)}).catch(function(t){i(t)}):(getApp().event.emit("cartrefresh"),r(o(c)))}).catch(function(t){i(t)})})}function a(t,e){var r=i.getUserAddressID(),n={callback:"addRemoveCmdyD",commlist:e,type:"1",checked:"0",locationid:r,promoid:t,t:Math.random()};return new Promise(function(r,i){(0,c.request)({url:"https://wqdeal.jd.com/deal/mergeorder/coudanrmvcmdy",method:"GET",data:n}).then(function(n){var c=n.body;"13"===c.errId?d.doLogin().then(function(){a(t,e)}).catch(function(t){i(t)}):(getApp().event.emit("cartrefresh"),r(o(c)))}).catch(function(t){i(t)})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.rmGiftToCart=exports.addGiftToCart=exports.getGiftData=exports.getGiftInit=void 0;var c=require("../../../common/request/request.js"),i=t(require("../../../common/user_info.js")),d=t(require("../../../common/login/login.js"));exports.getGiftInit=function(t){var e={reg:"1",isnewyb:"1",callback:"mzCartCBA",locationid:i.getUserAddressID(),promoid:t,t:Math.random()};return new Promise(function(n,a){(0,c.request)({url:"https://wqdeal.jd.com/deal/mergeorder/coudancartview",method:"GET",data:e}).then(function(e){var c=e.body;"13"===c.errId?d.doLogin().then(function(){r(t)}).catch(function(t){a(t)}):n(o(c))}).catch(function(t){a(t)})})},exports.getGiftData=r,exports.addGiftToCart=n,exports.rmGiftToCart=a; 
 			}); 
		define("pages/search/path.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=e[s]);return r.default=e,r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.toast=exports.Modal=exports.helper=exports.searchSales=exports.searchResult=exports.searchCoupon=exports.PtagManager=exports.PtagUtils=exports.Ptag=exports.JDPage=exports.Sf=void 0;var r=e(require("./api_old/sf_constants.js")),s=e(require("./api_old/Ptag_constants.js")),t=require("../../api/Ptag/Ptag_utils.js"),o=require("../../api/Ptag/report_manager.js"),a=require("../../bases/page.js"),p=e(require("../../common/fe_helper.js")),l=e(require("./models_old/search_coupon.js")),u=e(require("./models_old/search_result.js")),i=e(require("./models_old/search_sales.js")),x=e(require("../../common/modal/modal")),n=e(require("../../common/toast/toast"));exports.Sf=r,exports.JDPage=a.JDPage,exports.Ptag=s,exports.PtagUtils=t.PtagUtils,exports.PtagManager=o.ReportManager,exports.searchCoupon=l,exports.searchResult=u,exports.searchSales=i,exports.helper=p,exports.Modal=x,exports.toast=n; 
 			}); 
		define("pages/search/subPackages/coupon/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getExtraSkuInfo=function(t,n){return new Promise(function(r,u){if(t&&0==t.length)return r({});e.searchResult.getSkuExtraInfo(t,n).then(function(e){r(e)}).catch(function(){r({})})})},exports.getStockPriceList=function(t){return new Promise(function(n,r){if(t&&0==t.length)return n({});e.searchResult.getStockPrice(t,function(e,t){return e&&n({}),n(t)})})},exports.getLocalStoreList=function(t){return new Promise(function(n,r){t&&0==t.length?n([]):e.searchResult.getLocalStore(t,function(e,t){return e&&n([]),n(t)})})},exports.getFilterItem=function(t){return new Promise(function(n,r){e.searchCoupon.getFilterData({coupon_batch:t},function(e,t){return e?r(e):n(t)})})},exports.getSearchData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1],r=arguments[2],u=arguments[3],o=Object.assign({coupon_kind:r,coupon_batch:n},u,{keyword:t});return new Promise(function(t,n){e.searchCoupon.getSearchResult(o,function(e,r){return e?n(e):t(r)})})},exports.getYuYueTag=function(t){return new Promise(function(n,r){t&&0==t.length?n({}):e.searchResult.getYuYueTag(t,function(e,t){return n(e?{}:t)})})},exports.getYuYueHiddenPrice=function(t){return 0==t.length?{}:new Promise(function(n,r){e.searchResult.getYuYueHiddenPirce(t).then(function(e){n(e)}).catch(function(e){n({})})})},exports.getCommentsList=function(t){return new Promise(function(n,r){t&&0==t.length?n([]):e.searchResult.getComments(t,function(e,t){return n(e?[]:t)})})};var e=require("../../path.js"); 
 			}); 
		define("pages/search/subPackages/coupon/compute.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleExtraSkuInfo=function(e,r){var o=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).priceTagObj,s=[],n=r.price,u=r.comment,a=r.bookingInfo,l=r.bookingPrice,d=r.stock;return e.map(function(e){var r=d[e.id],c=e.lowestbuy,f=e.isFsku;if(r){var p=r.status;if(/无货/.test(p))e.stock="无货";else if(/预订/.test(p)&&!a[e.id])a[e.id]="预订";else if(c>1&&!f){var m=p>0&&p<c;e.stock=m?"库存不足":c+"件起售"}else p>0&&p<=5&&(e.stock="仅剩"+p+"件")}var h=(0,i.priceTagHandle)(o[e.id],n[e.id]);if(h["PLUS价"].flag&&(e.tempCommentPrefix=e.tempCommentPrefix.filter(function(e){return"plus专属95折"!=e.name})),e.commentPrefix=e.tempCommentPrefix.slice(0,2),delete e.tempCommentPrefix,e.secKill&&1==e.secKill&&(h["秒杀"].flag=!0),h["sku直搜"].flag?e.priceAffix=[h["sku直搜"]]:e.priceAffix=Object.values(h).filter(function(e){return e.flag}).slice(0,2),n[e.id]&&n[e.id].p&&(e.price=n[e.id].p.split(".")),a[e.id]&&(e.yuYue=a[e.id].split("|")),l[e.id]&&(e.yuYueHiddenPrice=!0,e.yuYueHiddenPriceText=t),u[e.id]){var g=u[e.id].split("_");e.favourable=g[1],e.comments=g[0]>=1e4?Math.floor(g[0]/1e4)+"万":g[0]}return"undefined"!=e.wareWeight&&d[e.id]&&s.push(e.id+"|"+e.wareWeight+"|"+d[e.id].d+"|"+d[e.id].e),e}),{list:e,skuInfo:s,priceTagObj:o}},exports.handleSkuList=function(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=o.priceTagObj,n=o.isPlusMember,u=[],a=[],l=t.map(function(t,o){u.push(t.wareid);var l=(0,i.sopMark)(t),d=l.commentPrefix,c=l.titlePrefix,f=l.priceAffix,p=l.yuYue,m=l.priceTags,h=void 0===m?[]:m;p&&a.push(t.wareid),s[t.wareid]=h;var g=!(0==r&&o<6),v=t.productext,x=t.wareid,k=t.imageurl,y=t.dredisprice,P=t.commentcount,b=t.wareWeight,w=t.lowestbuy,I=t.isFsku,j=t.Content,T=t.isbjp,C=void 0===T?0:T,K=P-0>=1e4?Math.floor((P-0)/1e4)+"万":P-0,q=!(1==t.isPlusLimit&&!n||1==t.plusVender&&!n),O={isFsku:I,comments:K,lazyLoad:g,id:x,priceAffix:f,titlePrefix:c,tempCommentPrefix:d,lowestbuy:w,wareWeight:b,title:j.warename,price:y.split("."),img:(0,e.getImg)(k,240),isjx:v&&0!=(8388608&v),showCart:q};return t.secKill&&(O.secKill=t.secKill.status),1==C&&(O.attrs=["保健食品"]),O});return{skuIds:u,yuYueSkuIds:a,priceTagObj:s,list:l}},exports.handleTip=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.quota,t=e.discount,r=e.couponType,o=e.couponStyle,s=e.limitStr,n=e.popId,u=e.venderName,a=e.discountInfo,l=e[54]||{},d="满"+i+"减"+t+"优惠券",c={isInitCart:{status:!0,exec:!0},discountInfo:{quota:i,discount:t,high:l.high>0?l.high:"",type:""}};if(1==r&&3==o){if(c.isZheKou=!0,c.zheKouInfo=a.info.map(function(e){return e.discount=10*parseFloat(e.discount),e.quota=parseFloat(e.quota),e}),Array.isArray(a.info)&&a.info.length>0){var f=a.info[0];c.zheKouObj=f,d=(d=a.info.map(function(e){return"满"+e.quota+"享"+100*e.discount/100+"折"}).join("，"))?d+"优惠券":""}}else 28==o&&(c.discountInfo.type=28,d="每满"+i+"减"+t,d+=l.high>0?"(最高可减"+l.high+")":"",d+="优惠券");var p=s;return 2!=r&&3!=r||(p="仅限在"+u+"中使用"),p&&(d=d+"，"+p),n&&0!=n&&(c.venderId=n),{tips:d,state:c}};var e=require("../../../../common/utils"),i=require("../../list_old/sopMark.js"),t="待发布"; 
 			}); 
		__wxRoute = 'pages/search/components/coupon-float/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/coupon-float/index.js';	define("pages/search/components/coupon-float/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(require("../../../../common/localStorage.js")),o=require("../../../../common/login/loginv1"),i=require("../../common/js/base.js"),r=require("../../model/search-index.js"),n=require("../../list/managers/report.manager"),a={SUCCESS:{image:"https://img11.360buyimg.com/jdphoto/s400x400_jfs/t1/99314/18/8347/158946/5e035c0bEc53ab933/6c37256fe60045cb.png",text:"恭喜您，领取成功"},FAIL:{image:"https://img11.360buyimg.com/jdphoto/s400x400_jfs/t1/102263/9/8319/125109/5e035c0cEede1ba53/ae620bc69e212b5c.png",text:"活动太火爆了, 请下次再来"}},c=void 0,s=void 0,u=function(){},p={props:{coupon:{type:Object,value:null},keyword:{type:String,value:""}},data:{visible:!1,tips:null,timer:2},watch:{coupon:function(e){e&&!e.hasDraw&&(this.visible=!0,c=setTimeout(u,3e4),i.event.off("search-bar-active",u),i.event.on("search-bar-active",u))}},methods:{onDraw:function(){var e=this;if(!this._requesting){var t=this.coupon||{},s=t.roleId,u=t.key,p=t.putkey;(s&&u||p)&&(clearTimeout(c),(0,n.reportClick)("CLICK_FLOAT_COUPON_DRAW"),this._requesting=!0,(0,r.drawShopCoupon)(s,u,p).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e._requesting=!1;var r=void 0;return 1e3==t.code?(0,o.doLogin)({returnUrl:"/pages/search/list/list?key="+e.keyword,navBackType:"navigateBack"}).then(function(){return e.onDraw()}):163==t.code||164==t.code?(0,i.xgoto)({xcx:{url:"/pages/my_pages/accountv2/index",params:{returnUrl:"/pages/search/list/list?key="+e.keyword,sceneid:"521394820",ptag:"138268.6.29",navBackType:"navigateBack"}}}):(999==t.code?(r=a.SUCCESS,e.$emit("draw-coupon"),(0,n.reportExposure)("EXPOSE_FLOAT_COUPON_SUCCESS")):(r=a.FAIL,(0,n.reportExposure)("EXPOSE_FLOAT_COUPON_FAIL")),e._timer(2),void(e.tips=r))}))}},_timer:function(e){var t=this;e>0?(this.setData({timer:e}),s=setTimeout(function(){t._timer(e-1)},1e3)):u()},onCancel:function(){u()},onClose:function(){u(),t.set("SEARCH_FLOAT_COUPON",!0,{expire:"10080m"}),(0,n.reportClick)("CLICK_FLOAT_COUPON_CLOSE")},_hide:function(){clearTimeout(c),clearTimeout(s),this.visible=!1,this.tips=null}},created:function(){var e=this;u=function(){e._hide(),i.event.off("search-bar-active",u)}},detached:function(){i.event.off("search-bar-active",u)}};new e.WqComponent(p,"coupon-float"); 
 			}); 	require("pages/search/components/coupon-float/index.js");
 		__wxRoute = 'pages/search/components/filter-act/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/filter-act/index.js';	define("pages/search/components/filter-act/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),o=require("../../list/managers/report.manager"),t=require("../../common/js/base"),c={props:{filterPanel:{type:Object,value:{}},coupon:{type:Object,value:{}}},data:{couponBtnVisible:!0},computed:{act:function(){var e=((this.filterPanel.service||{}).list||[]).find(function(e){return"banner"===e.view&&"ico"===e.key});return e||null},canShowCouponBtn:function(){var e=this.coupon||{},t=!(!e.batchId||!e.hasDraw);return t&&this.couponBtnVisible&&(0,o.reportExposure)("EXPOSE_FLOAT_COUPON_ENTER"),t}},methods:{onToggleAct:function(){var e=this.act||{},t=e.checked,c=e.id,n=e.value;this.$emit("filter",{cmd:t?"uncheck":"check",type:"service",id:c}),this.$emit("filter",{cmd:"confirm"});var r=t?"CLICK_BAR_FILTER_BANNER_ACT_UNCHECK":"CLICK_BAR_FILTER_BANNER_ACT_CHECK";(0,o.reportClick)(r,{},{eparam:n&&n.join(",")||""})},onToCouponSearch:function(){var e=this.coupon||{};e.batchId&&((0,t.xgoto)({xcx:{url:"/pages/search/subPackages/coupon/coupon",params:{batch:e.batchId,kind:1,endTime:"",startTime:"",key:e.keyword}},h5:{url:"//wqsou.jd.com/coprsearch/cosearch",params:{coupon_batch:e.batchId,coupon_kind:1,coupon_aggregation:"yes"}}}),(0,o.reportClick)("CLICK_FLOAT_COUPON_ENTER"))},onClose:function(){this.couponBtnVisible=!1,(0,o.reportClick)("CLICK_FLOAT_COUPON_ENTER_CLOSE")}}};new e.WqComponent(c,"filter-act"); 
 			}); 	require("pages/search/components/filter-act/index.js");
 		__wxRoute = 'pages/search/components/filter-bar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/filter-bar/index.js';	define("pages/search/components/filter-bar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(){var e=(0,c.genExpressionKey)(),t=(0,c.genFilterType)();return!(!e&&!t)}var t=require("../../../../common/wqvue/indexv1.2"),i=require("../../common/js/base.js"),r=require("../../common/js/utils.js"),n=require("../../components/modal/modal.js"),c=require("../../list/stores/filter.store.js"),o=require("../../list/managers/report.manager"),s="",a=[],l=667,d={props:{filterPanel:{type:Object,value:{}},extraTabs:{type:Array,value:[]}},data:{activeMoreFilter:!1,quickBarItemsCount:8,quickBarHidden:!1,dropdown:{type:"",list:[],visible:!1,style:""}},watch:{filterPanel:function(){this.activeMoreFilter=e()}},computed:{sortList:function(){return((this.filterPanel.sort||{}).list||[]).filter(function(e){return"销量"!==e.name})},selectedSortName:function(){return(this.sortList.find(function(e){return e.checked})||{}).name||""},saleSort:function(){return((this.filterPanel.sort||{}).list||[]).find(function(e){return"销量"===e.name})||{}},serviceList:function(){return((this.filterPanel.service||{}).list||[]).filter(function(e){return e&&"fixed"===e.view})},selectedServiceName:function(){return(this.serviceList.filter(function(e){return e.checked})||[]).map(function(e){return e.name}).join(",")},quickView:function(){var e=this;if(this.quickBarHidden)return[];var t=this.quickBarItemsCount,i=void 0,r=4,n=[];((this.filterPanel.service||{}).list||[]).forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"quick"===e.view&&("拍拍二手"===e.name?i=e:n.push(e),"ico"===e.key&&(r=5))});var c=(this.filterPanel.quick||{}).list||[],o=[].concat(n,c).sort(function(e,t){return e.order<t.order?-1:1}),s=(this.filterPanel.orderView||[]).map(function(t){var i=e.filterPanel[t];return i.currentStr=Array.isArray(i.current)?i.current.join("、"):"",i}),a=1,l=[].concat(o,s.slice(0,t-o.length-(i?1:0)));return i&&l.splice(r,0,i),l.forEach(function(e,t){e.index=t,e.view||(e.dropIndex=a,a+=1)}),l},quickList:function(){return(this.filterPanel[this.dropdown.type]||{}).list||[]},activeTab:function(){return this.extraTabs.find(function(e){return e.checked})||null}},methods:{onTab:function(e){var t=this,i=e.currentTarget.dataset.type;if((this.activeTab||{}).type!=i){this._hideDropdown();var r=this.filterPanel.sort||{};switch((s=(r.list||[]).find(function(e){return e.checked}))&&this.$emit("filter",{cmd:"uncheck",type:"sort"}),(a=this.serviceList.filter(function(e){return e.checked}))&&a.forEach(function(e){t.$emit("filter",{cmd:"uncheck",type:"service",id:e.id})}),this.$emit("tab",{cmd:"check",type:i}),i){case"shop":(0,o.reportClick)("CLICK_BAR_TAB_SHOP",{},{eparam:"店铺_3_"+(5+this.extraTabs.length)})}}},onSaleSort:function(e){var t=this;this.activeTab&&(a&&a.forEach(function(e){t.$emit("filter",{cmd:"check",type:"service",id:e.id})}),this.$emit("tab",{cmd:"uncheck"})),"sort"!==this.dropdown.type&&this.dropdown.visible&&this.$emit("filter",{cmd:"cancel"}),this.onSort(e),(0,o.reportClick)("CLICK_BAR_SORT_SALE",{},{eparam:"销量_1_"+(5+this.extraTabs.length)})},onSort:function(e){var t=e.currentTarget.dataset,r=t.id,n=t.checked,c=t.name,s=t.index;if(i.event.emit("overflow-visible"),this.dropdown.visible=!1,!n){this.$emit("filter",{cmd:"check",type:"sort",id:r}),this.$emit("filter",{cmd:"confirm"});var a={eparam:c+"_"+s};switch(c){case"综合":(0,o.reportClick)("CLICK_DROP_SORT_COMPREHENSIVE",{},a);break;case"最新上架":(0,o.reportClick)("CLICK_DROP_SORT_WINSDATE_DESC",{},a);break;case"价格最低":(0,o.reportClick)("CLICK_DROP_SORT_PRICE_ASC",{},a);break;case"价格最高":(0,o.reportClick)("CLICK_DROP_SORT_PRICE_DESC",{},a);break;case"评价最多":(0,o.reportClick)("CLICK_DROP_SORT_COMMENT_DESC",{},a)}}},onToggle:function(e){var t=e.currentTarget.dataset,i=t.id,r=t.checked,c=t.type,s=this.filterPanel[c]||{};if(-1==["service","packstate"].indexOf(c)&&Array.isArray(s.current)&&s.current.length>=6&&!r)(0,n.toast)("最多可选6个");else{this.$emit("filter",{cmd:r?"uncheck":"check",type:c,id:i});var a=void 0;a="service"===c?r?"CLICK_DROP_SERVICE_UNCHECKED":"CLICK_DROP_SERVICE_CHECKED":r?"CLICK_DROP_FILTER_QUICK_"+s.dropIndex+"_UNCHECK":"CLICK_DROP_FILTER_QUICK_"+s.dropIndex+"_CHECK",(0,o.reportClick)(a)}},onToggleFixed:function(e){var t=this,i=e.currentTarget.dataset.type;if("sort"==i?(0,o.reportClick)("CLICK_BAR_SORT",{},{eparam:"综合_0_"+(5+this.extraTabs.length)}):(0,o.reportClick)("CLICK_BAR_SERVICE",{},{eparam:"服务_2_"+(5+this.extraTabs.length)}),this.activeTab)return this.$emit("tab",{cmd:"uncheck"}),s&&this.$emit("filter",{cmd:"check",type:"sort",id:s.id}),a&&a.forEach(function(e){t.$emit("filter",{cmd:"check",type:"service",id:e.id})}),void this.$emit("filter",{cmd:"confirm"});this._toggleDropdown(i,"top: -40px;")},onToggleQuick:function(e){var t=e.currentTarget.dataset.index,i=this.quickView.find(function(e){return e.index==t});if(i){if(i.list){var r=this._toggleDropdown(i.type,"top: 0;")?"CLICK_BAR_FILTER_QUICK_"+i.dropIndex+"_UNFLOD":"CLICK_BAR_FILTER_QUICK_"+i.dropIndex+"_FLOD";(0,o.reportClick)(r)}else{this._hideDropdown();var n="quick"===i.type?"quick":"service";switch(this.$emit("filter",{cmd:i.checked?"uncheck":"check",type:n,id:i.id}),this.$emit("filter",{cmd:"confirm"}),i.name){case"京东物流":(0,o.reportClick)("CLICK_BAR_SERVICE_JINGDONGWULIU");break;case"新品":(0,o.reportClick)("CLICK_BAR_SERVICE_XINPIN");break;case"拼购商品":(0,o.reportClick)("CLICK_BAR_SERVICE_PINGOU")}}(0,o.reportClick)("CLICK_BAR_QUICK",{},{eparam:(i.name||i.title)+"_"+t+"_"+this.quickView.length})}},_toggleDropdown:function(e,t){var r=this.dropdown;if(r.visible){if(this.$emit("filter",{cmd:"cancel"}),!e||r.type==e)return i.event.emit("overflow-visible"),r.visible=!1,!1}else r.visible=!0,i.event.emit("overflow-hidden",{hideTopArea:!0});return this.$emit("partial-panel",e),r.type=e,r.style="height: "+(l-40)+"px; "+t,!0},_hideDropdown:function(){this.dropdown.visible&&(this.$emit("filter",{cmd:"cancel"}),i.event.emit("overflow-visible"),this.dropdown.visible=!1)},onCancel:function(){this._hideDropdown()},onReset:function(){var e=this.dropdown.type,t="service"===e?"fixed":"";if(this.$emit("filter",{cmd:"reset",type:e,view:t}),"service"===e)(0,o.reportClick)("CLICK_DROP_SERVICE_RESET",{},{eparam:"服务"});else{var i=this.quickView.find(function(t){return t.type===e})||{};(0,o.reportClick)("CLICK_DROP_FILTER_QUICK_RESET",{},{eparam:""+i.title})}},onConfirm:function(){this.$emit("filter",{cmd:"confirm"}),i.event.emit("overflow-visible"),this.dropdown.visible=!1;var e=this.dropdown.type;if("service"===e)(0,o.reportClick)("CLICK_DROP_SERVICE_CONFIRM",{},{eparam:"服务_"+this.selectedServiceName.replace(/,/g,"#")});else{var t=this.quickView.find(function(t){return t.type===e})||{};(0,o.reportClick)("CLICK_DROP_FILTER_QUICK_COMFRIM",{},{eparam:t.title+"_"+t.currentStr.replace(/、/g,"#")})}},onMoreFilter:function(){this.activeTab||(this._hideDropdown(),this.$emit("more-filter"),i.event.emit("overflow-hidden"),(0,o.reportClick)("CLICK_BAR_FILTER",{},{eparam:"筛选_"+(4+this.extraTabs.length)+"_"+(5+this.extraTabs.length)}))}},created:function(){var e=this;if(i.event.on("search-bar-active",function(){e._hideDropdown(),e.quickBarHidden=!0}),i.event.on("search-refresh",function(){e.quickBarHidden=!1}),r.ENV.isXcx){var t=this.createSelectorQuery();t.selectViewport().boundingClientRect(function(e){l=(e=e||{}).height||l}),t.exec()}else l=window.innerHeight||document.documentElement.clientHeight}};new t.WqComponent(d,"filter-bar"); 
 			}); 	require("pages/search/components/filter-bar/index.js");
 		__wxRoute = 'pages/search/components/filter-panel/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/filter-panel/index.js';	define("pages/search/components/filter-panel/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(){function e(e,t){var r=[],i=!0,a=!1,n=void 0;try{for(var s,o=e[Symbol.iterator]();!(i=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);i=!0);}catch(e){a=!0,n=e}finally{try{!i&&o.return&&o.return()}finally{if(a)throw n}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t=require("../../../../common/wqvue/indexv1.2"),r=require("../../../../common/userinfo_wqvue"),i=require("../../common/js/utils"),a=require("../../components/modal/modal.js"),n=require("../../list/managers/report.manager"),s=require("../../model/search-index.js"),o=require("../../list/stores/filter.store.js"),c=[],l={props:{filterPanel:{type:Object,value:{}},visible:{type:Boolean,value:!1},keyword:{type:String,value:""},navHeight:{type:Number,value:0}},data:{hideDelay:!1,total:"",morePanel:{visible:!1,type:"",cid2:"",tab:"abcList",letter:"A",scrollTop:0},addressPanel:{visible:!1,name:"",areaId:"",addressId:""}},watch:{visible:function(t,r){var i=this;if(clearTimeout(this._visibleTimeout),t){var a=((this.filterPanel.price||{}).current||"").split("-"),s=e(a,2),o=s[0],c=s[1];if(o>=0&&c>=0&&parseInt(o)>parseInt(c)){var l=[c,o];this.$emit("filter",{cmd:"edit",type:"price",key:"dredisprice",value:l,name:l.join("-")})}this._updateAddress(),this.hideDelay=!0,this._calSkuCount(!0),this.serviceList.find(function(e){return"拼购商品"===e.name})&&(0,n.reportExposure)("EXPOSE_FILTER_SERVICE_PINGOU")}else this._visibleTimeout=setTimeout(function(){i.hideDelay=!1},1e3),this._hideAddress()}},computed:{serviceList:function(){return(this.filterPanel.service||{}).list||[]},categoryList:function(){return(this.filterPanel.category||{}).list||[]},category:function(){var e=this.filterPanel.category||{};return e.current||"全部分类"},priceList:function(){return(this.filterPanel.price||{}).list||[]},price:function(){var t=this.filterPanel.price||{},r=(t.current||"").split("-"),i=e(r,2);return{min:i[0],max:i[1]}},orderView:function(){var e=this;return(this.filterPanel.orderView||[]).map(function(t){var r=e.filterPanel[t];return r.currentStr=Array.isArray(r.current)?r.current.join("、"):"",r.currentNum=Array.isArray(r.current)?r.current.length:0,r.sList=r.list.length>9?r.list.slice(0,8):r.list.slice(0,9),r})},moreList:function(){var e=this.morePanel.type,t=this.filterPanel[e]||{};if("brand"===e){var r=[],i=t.alphabet||[],a=t.list||[];i.sort().forEach(function(e){r.push({letter:e}),r=r.concat(a.filter(function(t){return t.pinyin==e}))}),t.abcList=r}return t["brand"===e&&this.morePanel.tab||"list"]||[]},moreHead:function(){var e=this.morePanel.type,t=this.filterPanel[e]||{};return"category"==e?{title:t.current||"全部分类",count:0}:{title:(Array.isArray(t.current)?t.current.join("、"):t.current)||"",count:Array.isArray(t.current)?t.current.length:0}},alphabet:function(){return(this.filterPanel.brand||{}).alphabet||[]}},methods:{onShowAddress:function(){this.addressPanel.visible=!0},onHideAddress:function(){this._hideAddress(),this._updateAddress()},_hideAddress:function(){this.addressPanel.visible=!1},_updateAddress:function(){var e=(0,r.getAddress)();this.addressPanel.areaId=e.areaId,this.addressPanel.addressId=e.addressId,this.addressPanel.name=e.addressName||(e.areaName||"").split("_").slice(0,4).filter(function(e){return e}).join("-")||""},onChangePrice:function(e){var t=this,r=e.detail.value;r=parseInt(r)||"";var i="min"==e.currentTarget.dataset.type?[r,this.price.max]:[this.price.min,r];clearTimeout(this.priceTimeout),this.priceTimeout=setTimeout(function(){t.$emit("filter",{cmd:"edit",type:"price",key:"dredisprice",value:i,name:i.join("-")})},500)},onPriceFocus:function(e){var t="min"==e.currentTarget.dataset.type?"CLICK_FILTER_PRICE_INPUT_MIN":"CLICK_FILTER_PRICE_INPUT_MAX";(0,n.reportClick)(t)},onToggle:function(e){var t=e.currentTarget.dataset,r=t.type,i=t.id,s=t.checked;if(-1==["service","category","price","packstate"].indexOf(r)){var o=this.filterPanel[r]||{};if(Array.isArray(o.current)&&o.current.length>=6&&!s)return void(0,a.toast)("最多可选6个")}if(this.$emit("filter",{cmd:s?"uncheck":"check",type:r,id:i}),"category"===r&&this.onSelect(),this._calSkuCount(),"service"===r)switch(e.currentTarget.dataset.name){case"京东物流":(0,n.reportClick)("CLICK_FILTER_SERVICE_JINGDONGWULIU");break;case"京尊达":(0,n.reportClick)("CLICKFILTER_SERVICE_JINGZUNDAO");break;case"有货优先":(0,n.reportClick)("CLICK_FILTER_SERVICE_YOUHUOYOUXIAN");break;case"货到付款":(0,n.reportClick)("CLICK_FILTER_SERVICE_HUODAOFUKUAN");break;case"211限时达":(0,n.reportClick)("CLICK_FILTER_SERVICE_211");break;case"新品":(0,n.reportClick)("CLICK_FILTER_SERVICE_XINPIN");break;case"京东国际":(0,n.reportClick)("CLICK_FILTER_SERVICE_GLOBAL");break;case"PLUS专享":(0,n.reportClick)("CLICK_FILTER_SERVICE_PLUS");break;case"促销商品":(0,n.reportClick)("CLICK_FILTER_SERVICE_SALESGOODS");break;case"艺术品":(0,n.reportClick)(s?"CLICK_FILTER_SERVICE_ART_UNCHECK":"CLICK_FILTER_SERVICE_ART");break;case"拼购商品":(0,n.reportClick)("CLICK_FILTER_SERVICE_PINGGOU")}else if("category"===r)(0,n.reportClick)("CLICK_FILTER_CATEGORY_CHECK");else if("price"===r){var c=e.currentTarget.dataset.index,l=s?"CLICK_FILTER_PRICE_"+(c+1)+"_INACTIVE":"CLICK_FILTER_PRICE_"+(c+1)+"_ACTIVE";(0,n.reportClick)(l)}},_calSkuCount:function(e){var t=this,r=Object.assign({key:this.keyword},(0,o.getFilterParams)());(0,s.getFilterAttr)(r).then(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n="";if(0==r.retcode){var s=r.data||{};switch((n=(0,i.getProp)(s,"searchm.Head.Summary.ResultCount")||"0").length){case 1:break;case 2:n=n.replace(/\d$/,"0+");break;case 3:case 4:n=n.replace(/\d{2}$/,"00+");break;case 5:n=(n/1e4).toFixed(1)+"万+";break;default:n=parseInt(n/1e4)+"万+"}}t.total=n||"",0!=t.total||e||(0,a.toast)("抱歉，暂无合适结果，请适当缩少筛选项再尝试")})},onMore:function(e){var t=e.currentTarget.dataset.type;this.$emit("partial-panel",t),this._showMorePanel(t),this.$emit("filter",{cmd:"snapshot-save"})},onToggleCatidList:function(e){var t=e.currentTarget.dataset.id;this.morePanel.cid2=this.morePanel.cid2==t?"":t},_setCatidListStatus:function(){for(var e=0;e<this.categoryList.length;e++){var t=this.categoryList[e];if(t.checked)return void(this.morePanel.cid2=t.id);if(t.children)for(var r=0;r<t.children.length;r++)if(t.children[r].checked)return void(this.morePanel.cid2=t.id)}},onChangeBrandTab:function(e){var t=e.currentTarget.dataset.tab;this.morePanel.tab=t||"abcList",this.morePanel.scrollTop=0,this.morePanel.letter=this.alphabet[0]},onJumpToLetter:function(e){var t=e.currentTarget.dataset.letter,r=c.find(function(e){return e.letter==t});this.morePanel.scrollTop=r.top},onLv2Scroll:function(e){var t=this;"brand"==this.morePanel.type&&(clearTimeout(this.morePanel._scrollTimeout),this.morePanel._scrollTimeout=setTimeout(function(){t.morePanel.scrollTop=e.detail.scrollTop},500),"abcList"==this.morePanel.tab&&(clearTimeout(this._abcTimeout),this._abcTimeout=setTimeout(function(){for(var r=c.length;r-- >0;){var i=c[r];if(i.top<=e.detail.scrollTop){t.morePanel.letter=i.letter;break}}},200)))},_hideMorePanel:function(){this.morePanel.visible=!1,this.morePanel.type="",this.morePanel.scrollTop=0},_showMorePanel:function(e){function t(e,t){e&&!isNaN(t)&&c.push({letter:e,top:t})}var r=this;this.morePanel.visible=!0,this.morePanel.type=e,"category"===e?(!this.morePanel.cid2&&this._setCatidListStatus(),(0,n.reportClick)("CLICK_FILTER_CATEGORY_ENTER")):"brand"===e&&(this.morePanel.tab="abcList",this.morePanel.letter=this.alphabet[0],c=[],this.$nextTick(function(){if(i.ENV.isXcx){var e=r.createSelectorQuery();e.selectAll(".panel-list .group-title").boundingClientRect(function(e){var i=90+r.navHeight;(e||[]).forEach(function(e){return t(e.dataset.letter,parseInt(e.top)-i)})}),e.exec()}else{var a=document.querySelectorAll(".panel-list .group-title");Array.from(a).forEach(function(e){return t(e.dataset.letter,e.offsetTop)})}}))},onCancel:function(e){this.$emit("filter",{cmd:"cancel"}),this.$emit("hide"),this._hideMorePanel();var t=(e.currentTarget.dataset||{}).source;(0,n.reportClick)("background"===t?"CLICK_FILTER_CANCEL_BG":"CLICK_FILTER_CANCEL")},onReset:function(){this.$emit("filter",{cmd:"reset",type:"all"}),this._calSkuCount(),(0,n.reportClick)("CLICK_FILTER_RESET")},onConfirm:function(){this.$emit("filter",{cmd:"confirm"}),this.$emit("hide"),(0,n.reportClick)("CLICK_FILTER_CONFIRM",{},{eparam:(0,o.genMeridianReportParams)()})},onBack:function(){this.$emit("filter",{cmd:"snapshot-pop"}),this._hideMorePanel()},onSelect:function(){this.$emit("filter",{cmd:"snapshot-drop"}),this._hideMorePanel()}}};new t.WqComponent(l,"filter-panel"); 
 			}); 	require("pages/search/components/filter-panel/index.js");
 		__wxRoute = 'pages/search/components/goods-list/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/goods-list/index.js';	define("pages/search/components/goods-list/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var t=require("../../../../common/wqvue/indexv1.2"),r=require("../../../../common/login/loginv1.js"),i=require("../../common/js/helper.js"),n=require("../../common/js/base.js"),a=require("../../model/search-index.js"),o=require("../../list/stores/filter.store.js"),s=require("../modal/modal.js"),d=require("../../list/managers/report.manager.js"),u={options:{multipleSlots:!0},data:{similar:"",activeItem:{}},props:{list:{type:Array,value:[]},listMode:{type:Number,value:1},longImgMode:{type:Boolean,value:!1},pseudoItem:{type:Array,value:[]},interlude:{type:Object,value:{}},hasInterlude:{type:Boolean,value:!0}},watch:{list:function(e){e.length||(this.similar="",this.activeItem={})}},methods:{onImageError:function(t){var r;if(!(((t.detail||{}).errMsg||"").indexOf("retry=")>-1)){var i=t.currentTarget.dataset.order,a=this.list[i];a&&a.Content&&a.Content.imageurl&&this.setData((r={},e(r,"list["+i+"].Content.imageurl",n.JD.url.addUrlParam(a.Content.imageurl,{retry:Date.now()})),e(r,"list["+i+"].Content.long_image_url",n.JD.url.addUrlParam(a.Content.long_image_url,{retry:Date.now()})),r))}},onToItem:function(t){var r=this,n=t.currentTarget.dataset.id;if(this.similar!=n){var a=this.list.find(function(e){return e.id==n});a&&(setTimeout(function(){r.$setData(e({},"activeItem."+n,!0))},1e3),(0,d.reportItemClick)(a),(0,i.gotoItem)(a))}else this.similar=""},onToShop:function(e){var t=e.currentTarget.dataset.id,r=this.list.find(function(e){return e.id==t});if(r){var i=r.vender_id,a={sceneId:1002,skuId:r.wareid,shopName:r.shop_name,keywords:r.keyword};(0,n.xgoto)({xcx:{url:"/pages/shop/index/index",params:Object.assign({venderId:i},a)},h5:{url:"//wqshop.jd.com/mshop/gethomepage",params:Object.assign({venderid:i},a)}}),(0,d.reportClick)("CLICK_ITEM_SHOP",{},(0,d.getItemClickMeridianParams)(r))}},onSearchMore:function(e){var t=e.currentTarget.dataset,r=t.sku,i=t.name;(0,n.xgoto)({h5:{url:"//wqs.jd.com/search/index_child.shtml",params:{sku:r,warename:encodeURIComponent(i)}}})},onShowSimilar:function(e){var t=e.currentTarget.dataset.id;this.similar=t,(0,d.reportClick)("CLICK_ITEM_SIMILAR_BTN")},onToSimilar:function(e){var t=e.currentTarget.dataset,r=t.sku,i=t.price;this.$xgoto(["//wqs.jd.com/search/searchsimilar.shtml?sceneid=1&sku="+r+"&jp="+i]),(0,d.reportClick)("CLICK_ITEM_SIMILAR_MASK")},onShowSkuSwitch:function(e){var t=e.currentTarget.dataset,r=t.id,i=t.similar,n=this.list.find(function(e){return e.id==r});this.$emit("sku-switch",{item:n,similar:i})},onAddCart:function(e){var t=this;if(!this._addingCart){this._addingCart=!0;var i=e.currentTarget.dataset,n=i.sku,u=i.lowest,c=i.id,l=!!(0,o.getFilter)("col_type");(0,a.addCart)(n,u,l).then(function(i){return t._addingCart=!1,i?13!=i.errId?8968==i.errId?(0,s.toast)("商品数量最大超过200"):8969==i.errId?(0,s.toast)("添加商品失败，已超出购物车最大容量"):0==i.errId?(t.$emit("add-cart",i),(0,s.toast)("加入购物车成功")):(0,s.toast)("添加失败，请稍后再试"):void(0,r.doLogin)().then(function(){t.onAddCart(e)}):(0,s.toast)("添加失败，请稍后再试")});var m=this.list.find(function(e){return e.id==c});(0,d.reportClick)("CLICK_ITEM_ADDCART",{},(0,d.getItemClickMeridianParams)(m))}},bubble:function(e){this.$emit(e.type,e.detail)}},created:function(){var e=this,t=function(){var e=[];return{add:function(t,r){var i=(0,n.observe)(t,"#goods-item-"+r.id,function(){(0,d.collectExposureItem)(r)});e.push(i)},clear:function(){e.forEach(function(e){e&&e.disconnect&&e.disconnect()}),e=[]}}}();this._observer=t,this._realExposure=function(r){r&&r.length&&setTimeout(function(){r.forEach(function(r){r.isAd&&(0,n.observe)(e,"#goods-item-"+r.id,function(){(0,d.reportAdItemExposure)(r.exposal_url,r.csid)}),t.add(e,r)})},100)},n.event.on("list-rendered",this._realExposure),this._searchRefresh=function(){t.clear()},n.event.on("search-refresh",this._searchRefresh)},detached:function(){n.event.off("list-rendered",this._realExposure),n.event.off("search-refresh",this._searchRefresh),this._observer.clear()}};new t.WqComponent(u,"goods-list"); 
 			}); 	require("pages/search/components/goods-list/index.js");
 		__wxRoute = 'pages/search/components/hongbao-egg/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/hongbao-egg/index.js';	define("pages/search/components/hongbao-egg/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),i=require("../../model/search-index.js"),t=require("../../list/managers/report.manager"),o=null,n=!1,a={data:{visible:!1,step:1,coupon:{discount:"",condition:"无门槛",tips:"全品类商品可用"}},props:{hongbaoEgg:{type:Object,value:null}},watch:{hongbaoEgg:function(e){var i=!1;e&&"HONGBAO_NEW_USER"==e.type&&(i=!0,this.step=1,(0,t.reportExposure)("EXPOSE_HONGBAO_NEWER")),this.visible=i,i&&this._delayHide()}},methods:{_delayHide:function(){var e=this;o=setTimeout(function(){e.visible=!1},this.hongbaoEgg.delay||1e4)},_clearDelayHide:function(){clearTimeout(o)},_drawHongbao:function(){var e=this;n||(n=!0,this._clearDelayHide(),(0,i.drawHongbaoActive)(this.hongbaoEgg.activeid).then(function(i){n=!1,e._delayHide(),i&&0==i.ret&&i.prize&&i.prize.level>0?(e.coupon.discount=parseInt(i.prize.value,10),e.step=2):e.step=3}).catch(function(){n=!1,e._delayHide(),e.step=3}))},onTap:function(){1==this.step?(this._drawHongbao(),(0,t.reportClick)("CLICK_HONGBAO_NEWER")):this.onClose()},onClose:function(){this.visible=!1,this._clearDelayHide()}}};new e.WqComponent(a,"hongbao-egg"); 
 			}); 	require("pages/search/components/hongbao-egg/index.js");
 		__wxRoute = 'pages/search/components/item-mcoss/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/item-mcoss/index.js';	define("pages/search/components/item-mcoss/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),r=require("../../common/js/base"),o=require("../../list/managers/report.manager"),t={props:{item:{type:Object,value:{}},listMode:{type:Number,value:1},longImgMode:{type:Boolean,value:!1}},methods:{onTapMcoss:function(){var e=this.item||{},t=e.url,s=e.iType,i=e.attr,n=e.id,_=e.order;if((0,r.xgoto)({h5:t}),"autorank"==s){var a=i?"CLICK_PSEUDO_RANK_ATTR":"CLICK_PSEUDO_RANK";(0,o.reportClick)(a,{},{eparam:n+"_"+_+"_"+this.listMode})}else"topic"==s&&(0,o.reportClick)("CLICK_PSEUDO_TOPIC",{},{eparam:n+"_"+_+"_"+this.listMode})}},ready:function(){var e=this,t=this.item||{},s=t.iType,i=t.attr,n=t.order;"autorank"==s?(0,o.reportExposure)(i?"EXPOSE_PSEUDO_RANK_ATTR":"EXPOSE_PSEUDO_RANK"):"topic"==s&&(0,o.reportExposure)("EXPOSE_PSEUDO_TOPIC"),this._exposure=function(){e._observer&&e._observer.disconnect&&e._observer.disconnect(),e._observer=(0,r.observe)(e,".custom-mcoss",function(){(0,o.reportExposure)("EXPOSE_MIDDLE",{},{eparam:s+"_"+n})})},this._exposure()},detached:function(){this._observer&&this._observer.disconnect&&this._observer.disconnect()}};new e.WqComponent(t,"item-mcoss"); 
 			}); 	require("pages/search/components/item-mcoss/index.js");
 		__wxRoute = 'pages/search/components/mid-adshop/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/mid-adshop/index.js';	define("pages/search/components/mid-adshop/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),r=require("../../common/js/base.js"),o=require("../../list/managers/report.manager.js"),s={props:{adshop:{type:Object,value:{}},listMode:{type:Number,value:1}},methods:{onToShop:function(){var e=this.adshop||{},s=e.vender_id,i=e.shop_name,t=e.click_url,d=e.order;(0,r.xgoto)({xcx:{url:"/pages/shop/index/index",params:{venderId:s,shopName:encodeURIComponent(i)}},h5:{url:"//wqshop.jd.com/mshop/gethomepage",params:{venderid:s}}});var n=1==this.listMode?"CLICK_MIDDLE_ADSHOP_IN_LIST":"CLICK_MIDDLE_ADSHOP_IN_IMAGE",_={eparam:s+"_"+d+"_"+this.listMode};(0,o.reportClick)(n,{},_),(0,o.reportAd)(t)},onToItem:function(e){var s=e.currentTarget.dataset.index,i=this.adshop||{},t=i.child_link,d=void 0===t?[]:t,n=i.vender_id,_=i.click_url,p=i.order,a=d[s],c=a.sku_id,h=a.sku_price;if(c){(0,r.gotoItem)({sku:c,price:h});var u=1==this.listMode?"CLICK_MIDDLE_ADSHOP_SKU_IN_LIST":"CLICK_MIDDLE_ADSHOP_SKU_IN_IMAGE",v={eparam:n+"_"+p+"_"+this.listMode};(0,o.reportClick)(u,{},v),(0,o.reportAd)(_)}}},ready:function(){var e=this,s=this.adshop||{},i=s.exposal_url,t=s.iType,d=s.order;(0,o.reportExposure)("EXPOSE_MIDDLE_ADSHOP"),this._observerForAd=(0,r.observe)(this,".mid-adshop",function(){(0,o.reportAd)(i,null,{bizId:759,opId:21})}),this._exposure=function(){e._observer&&e._observer.disconnect&&e._observer.disconnect(),e._observer=(0,r.observe)(e,".mid-adshop",function(){(0,o.reportExposure)("EXPOSE_MIDDLE",{},{eparam:t+"_"+d})})},this._exposure()},detached:function(){this._observerForAd&&this._observerForAd.disconnect&&this._observerForAd.disconnect(),this._observer&&this._observer.disconnect&&this._observer.disconnect()}};new e.WqComponent(s,"mid-adshop"); 
 			}); 	require("pages/search/components/mid-adshop/index.js");
 		__wxRoute = 'pages/search/components/mid-banner/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/mid-banner/index.js';	define("pages/search/components/mid-banner/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),r=require("../../common/js/base"),o=require("../../list/managers/report.manager"),n={props:{banner:{type:Object,value:{}},listMode:{type:Number,value:1}},methods:{onTap:function(){var e=this.banner||{},n=e.toUrl,s=e.order;(0,r.xgoto)({h5:n}),(0,o.reportClick)("CLICK_MIDDLE_BANNER",{},{eparam:n+"_"+s+"_"+this.listMode})}},ready:function(){var e=this;this._exposure=function(){var n=e.banner||{},s=n.iType,t=n.order;e._observer&&e._observer.disconnect&&e._observer.disconnect(),e._observer=(0,r.observe)(e,".mid-banner",function(){(0,o.reportExposure)("EXPOSE_MIDDLE",{},{eparam:s+"_"+t})})},this._exposure()},detached:function(){this._observer&&this._observer.disconnect&&this._observer.disconnect()}};new e.WqComponent(n,"mid-banner"); 
 			}); 	require("pages/search/components/mid-banner/index.js");
 		__wxRoute = 'pages/search/components/mid-coupon/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/mid-coupon/index.js';	define("pages/search/components/mid-coupon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),o=require("../../model/search-index.js"),t=require("../../common/js/base.js"),n=require("../../common/js/utils.js"),r=require("../../components/modal/modal.js"),c=require("../../list/managers/report.manager"),s={props:{coupon:{type:Object,value:{}},listMode:{type:Number,value:1}},computed:{coupons:function(){return(this.coupon||{}).coupons||[]}},methods:{onTap:function(e){var t=this,s=e.currentTarget.dataset.index,i=(this.coupon||{}).order,a=this.coupons[s],u=a.couponInfo&&a.couponInfo[0];!a.isBingo&&u&&((0,c.reportClick)("CLICK_MIDDLE_COUPON",{},{eparam:a.activeId+"_"+a.levelId+"_"+s+"_东券_"+i+"_"+this.listMode}),(0,o.activeDraw)(a.activeId,a.levelId).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=u.limitType,c=u.beginTime,s=u.endTime,i=(new Date).getTime();0==o?c=u.createTime:1==o&&(s=(c=i)+864e5*u.addDays);var d=i>=c&&i<=s,m=d?"优惠券领取成功！":"优惠券领取成功，但未到使用时间！",p=d?"请在：个人中心-我的优惠券中查看":"时间："+(0,n.formatDate)(c,"yyyy年MM月dd日")+"-"+(0,n.formatDate)(s,"yyyy年MM月dd日");switch(parseInt(e.ret)){case 0:a.isBingo=!0,(0,r.confirm)({content:m,note:p,confirmText:d?"去用券":"去看看",cancelText:"知道了",onConfirm:function(){t.$xgoto(["//wqs.jd.com/search/allcate_coupon.shtml"],{coupon_batch:u.batchId})},onCancel:function(){console.log("知道了")}});break;case 3:case 4:case 10:case 144:(0,r.toast)({content:"您已经领取过此优惠券，别太贪心哦，\r\n下次再来"});break;case 7:case 11:(0,r.toast)({content:"很遗憾，优惠券已发完，下次再来哦"});break;default:(0,r.toast)({content:"领券的人太多啦，稍后再来"})}}).catch(function(){return null}))}},ready:function(){var e=this;this._exposure=function(){var o=e.coupon||{},n=o.iType,r=o.order;e._observer&&e._observer.disconnect&&e._observer.disconnect(),e._observer=(0,t.observe)(e,".mid-coupon",function(){(0,c.reportExposure)("EXPOSE_MIDDLE",{},{eparam:n+"_"+r})})},this._exposure()},detached:function(){this._observer&&this._observer.disconnect&&this._observer.disconnect()}};new e.WqComponent(s,"mid-coupon"); 
 			}); 	require("pages/search/components/mid-coupon/index.js");
 		__wxRoute = 'pages/search/components/mid-tags/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/mid-tags/index.js';	define("pages/search/components/mid-tags/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),t=require("../../common/js/base"),a=require("../../list/managers/report.manager"),r={props:{floor:{type:Object,value:{}},listMode:{type:Number,value:1}},methods:{onTap:function(e){var t=e.currentTarget.dataset.index,r=this.floor||{},i=r.tag_list,m=r.order,n=r.floor_name,s=i&&i[t];if(s){var o="";switch((s.tagtype||"").split("|")[0]){case"recall_tag":this.$emit("mid-search",{cmd:"refresh",key:s.tagquery});break;case"brd_word":if(!(o=s.tagvalue.match(/brand,,([^;]*)/))||!o[1])break;this.$emit("mid-filter",{cmd:"edit",type:"brand",key:"brand",value:o[1],name:o[1],tagname:s.tagname}),this.$emit("mid-filter",{cmd:"confirm"});break;case"prd_word":if(!(o=s.tagvalue.match(/(cid1|cid2|catid),L(\d+)M\d+/))||!o[1]||!o[2])break;this.$emit("mid-filter",{cmd:"edit",type:"category",key:o[1],value:o[2],name:s.tagname,tagname:s.tagname}),this.$emit("mid-filter",{cmd:"confirm"});break;case"attr_word":if(!(o=s.tagvalue.match(/expand_name,([^:@^]*)(?:::|@@)([^^;]*)/))||!o[1]||!o[2])break;this.$emit("mid-filter",{cmd:"edit",type:"expand_name/"+o[2],key:"expand_name/"+o[2],value:o[1],name:s.tagname,tagname:s.tagname}),this.$emit("mid-filter",{cmd:"confirm"})}var d="精选"===n?"CLICK_MIDDLE_TAG_JINGXUAN":"CLICK_MIDDLE_TAG_SMART";(0,a.reportClick)(d,{},{eparam:s.tagname+"_"+m+"_"+this.listMode})}}},ready:function(){var e=this;this._exposure=function(){var r=e.floor||{},i=r.iType,m=r.order;e._observer&&e._observer.disconnect&&e._observer.disconnect(),e._observer=(0,t.observe)(e,".mid-tags",function(){(0,a.reportExposure)("EXPOSE_MIDDLE",{},{eparam:i+"_"+m})})},this._exposure()},detached:function(){this._observer&&this._observer.disconnect&&this._observer.disconnect()}};new e.WqComponent(r,"mid-tags"); 
 			}); 	require("pages/search/components/mid-tags/index.js");
 		__wxRoute = 'pages/search/components/modal/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/modal/index.js';	define("pages/search/components/modal/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var o=require("../../../../common/wqvue/indexv1.2"),n=require("./modal.js"),t={data:{modal:{visible:!1,content:"",note:"",showCancel:!0,cancelText:"取消",confirmText:"确认",onCancel:function(){},onConfirm:function(){}},toast:{visible:!1,content:"",timeout:""}},methods:{_showToast:function(){var o=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.content,i=void 0===t?"":t,e=n.duration,c=void 0===e?2e3:e;clearTimeout(this.toast.timeout),this.toast={content:i,visible:!0,timeout:setTimeout(function(){return o._hideToast()},c)}},_hideToast:function(){this.toast.visible=!1},_showModal:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o.content,t=void 0===n?"":n,i=o.note,e=void 0===i?"":i,c=o.showCancel,a=void 0===c||c,s=o.cancelText,l=void 0===s?"取消":s,d=o.confirmText,h=void 0===d?"确认":d,m=o.onCancel,u=void 0===m?function(){}:m,v=o.onConfirm,r=void 0===v?function(){}:v;this.modal={content:t,note:e,showCancel:a,cancelText:l,confirmText:h,onCancel:u,onConfirm:r,visible:!0}},_hideModal:function(){this.modal.visible=!1},onConfirm:function(){this.modal.onConfirm(),this._hideModal()},onCancel:function(){this.modal.onCancel(),this._hideModal()}},created:function(){(0,n.install)(this)}};new o.WqComponent(t,"modal"); 
 			}); 	require("pages/search/components/modal/index.js");
 		__wxRoute = 'pages/search/components/pagination/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/pagination/index.js';	define("pages/search/components/pagination/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),t={props:{page:{type:Number,value:1},pageSize:{type:Number,value:10},bigPageSize:{type:Number,value:200},resultCount:{type:Number,value:0}},computed:{current:function(){var e=this.bigPageSize||200;return Math.ceil(this.page*this.pageSize/e)},count:function(){var e=this.bigPageSize||200;return Math.ceil(this.resultCount/e)},list:function(){for(var e=[],t=0;t<this.count;t++)e.push(t+1);return e}},methods:{onChange:function(e){var t=(e.detail||{}).value,i=this.list[parseInt(t)];i!=this.current&&this.$emit("page-change",{index:i})},onPrev:function(){this.current<=1||this.$emit("page-change",{index:this.current-1})},onNext:function(){this.current>=this.count||this.$emit("page-change",{index:this.current+1})}}};new e.WqComponent(t,"pagination"); 
 			}); 	require("pages/search/components/pagination/index.js");
 		__wxRoute = 'pages/search/components/search-bar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/search-bar/index.js';	define("pages/search/components/search-bar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(){function t(t,e){var r=[],i=!0,o=!1,n=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);i=!0);}catch(t){o=!0,n=t}finally{try{!i&&a.return&&a.return()}finally{if(o)throw n}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=require("../../../../common/wqvue/indexv1.2"),i=require("../../model/smartbox.js"),o=require("../../constants/sf.js"),n=require("../../constants/ptag"),s=require("../../common/js/utils"),a=require("../../list/managers/report.manager.js"),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(require("./commands.js")),u=require("../../common/js/base"),l={options:{multipleSlots:!0},props:{keyword:{type:String,value:""},isActive:{type:Boolean,value:!1},darkList:{type:Array,value:""},extraKeys:{type:Array,value:[]},specialStyle:{type:String,value:""},category:{type:Object,value:{}},navHeight:{type:Number,value:0}},data:{isFocus:!0,cursor:0,darkItem:"",darkTimeout:"",scrollLeft:0,isIOS:"ios"===s.systemInfo.platform},computed:{placeholder:function(){var t=this.darkItem&&this.darkItem.showKey||"搜索京东商品/店铺";return this.category&&this.category.id&&(t=this.category.name||""),t}},watch:{isActive:function(t){var e=this;if(clearTimeout(this.focusTimeout),this.focusTimeout=setTimeout(function(){e.isFocus=!!t},150),t){var r=this.darkList||[];if(1==r.length)this.darkItem=r[0];else if(r.length>1){!function t(i,o){e.darkItem=r[o],e.darkTimeout=setTimeout(function(){t(i,(o+1)%i.length)},8e3)}(r,0)}}else clearTimeout(this.darkTimeout)},keyword:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.cursor=t.length,this._scrollToRight()},extraKeys:function(){this._scrollToRight()}},detached:function(){clearTimeout(this.darkTimeout)},methods:{_scrollToRight:function(){var t=this;this.isActive||(clearTimeout(this._scrollTimeout),this._scrollTimeout=setTimeout(function(){if(s.ENV.isXcx){var r=t.createSelectorQuery();r.select(".searchbar-tags").boundingClientRect(),r.selectAll(".searchbar-tag").boundingClientRect(),r.exec(function(r){var i=e(r,2),o=i[0],n=void 0===o?{}:o,s=i[1],a=void 0===s?[]:s;n=n||{};var c=(a=a||[]).reduce(function(t,e){return t+=e.width+3},0)-n.width;t.scrollLeft=c>0?c:0})}else{var i=document.querySelector(".searchbar-tags"),o=document.querySelectorAll(".searchbar-tag"),n=Array.from(o).reduce(function(t,e){return t+=e.clientWidth+3},0)-i.clientWidth;t.scrollLeft=n>0?n:0}},30))},_focus:function(){this.isFocus=!0},_blur:function(){this.isFocus=!1},_active:function(){this.$emit("active")},_change:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$emit("keyword-change",{value:t})},_search:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",l=!1;if(!(r=r.trim()||"")){if("搜索京东商品/店铺"==this.placeholder)return void setTimeout(function(){return e._focus()},300);var h=(0,s.decode)(this.darkItem.url);if(h){(0,a.reportClick)("CLICK_SMARTBOX_SEARCH_DARK_URL");var d=h.match(/^https?:\/\/wq.jd.com\/wxapp(\/pages\/.*)$/);return(0,u.xgoto)({xcx:u.JD.url.addUrlParam(d&&d[1]?d[1]:h,{ptag:n.CLICK_SMARTBOX_SEARCH_DARK_URL})})}r=this.darkItem.searchKey,l=!0}"object"!==(void 0===c?"undefined":t(c))||!c.isCommandCode(r)&&!/^\/\/goto\s(http|https:\/\/\w+)/.test(r)?(r.match(/catid_str,,(\d+)/)||(0,i.setHistoryWords)(r),this.$emit("search",{key:r,as:1,sf:l?o.SF_SEARCH_NAME:o.SF_SEARCH_BAR,ptag:l?n.CLICK_SMARTBOX_SEARCH_DARK:n.CLICK_SMARTBOX_SEARCH}),(0,a.reportClick)(l?"CLICK_SMARTBOX_SEARCH_DARK":"CLICK_SMARTBOX_SEARCH",{ss_key:r,drop_ver:this._version,pvid:this._pvid},{eparam:r+"_"+(l?1:0)})):c.cmdProcessHandle(r)},onDelete:function(t){var e=t.currentTarget.dataset,r=e.type,i=e.index,o=this.extraKeys||[];if("keyword"===r){var n=o[0];n?(this._change(n.tagname),this.$emit("extra-key-remove",{index:0})):(this._change(""),this._active())}else this.$emit("extra-key-remove",{index:i});(0,a.reportClick)("CLICK_SMARTBOX_DELETE",{},{pparam:this.keyword})},onActive:function(){var t=(this.extraKeys||[]).map(function(t){return t.tagname});t.unshift(this.keyword),this._change(t.join(" ")),this._active(),(0,a.reportClick)("CLICK_SMARTBOX_ACTIVE",{},{pparam:this.keyword})},onCancel:function(){},onInput:function(t){var e=t.detail.value;this._change(e)},onFocus:function(){(0,a.reportClick)("CLICK_SMARTBOX_FOCUS")},onBlur:function(){this._blur()},onClear:function(){var t=this;this._change(""),setTimeout(function(){return t._focus()},300),(0,a.reportClick)("CLICK_SMARTBOX_CLEAR",{},{eparam:this.keyword})},onConfrim:function(t){var e=t.detail.value;this._search(e)},onSearch:function(){this._search(this.keyword)},bubble:function(t){this.$emit(t.type,t.detail)},onQuickInput:function(t){var e=this;setTimeout(function(){return e._focus()},300),this.bubble(t)},onVersionChange:function(t){this._version=t.detail.version||"",this.bubble(t)},onPvidChange:function(t){this._pvid=t.detail.pvid||""}}};new r.WqComponent(l,"search-bar"); 
 			}); 	require("pages/search/components/search-bar/index.js");
 		__wxRoute = 'pages/search/components/shop-list/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/shop-list/index.js';	define("pages/search/components/shop-list/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),s=require("../../common/js/base.js"),r=require("../../list/managers/report.manager"),o={props:{shops:{type:Array,value:[]}},methods:{onShop:function(e){var o=e.currentTarget.dataset.venderId;(0,s.xgoto)({xcx:{url:"/pages/shop/index/index",params:{venderId:o,fs:2}},h5:{url:"//wqshop.jd.com/mshop/gethomepage",params:{venderid:o,fs:2}}}),(0,r.reportClick)("CLICK_SHOP_ENTER")},onItem:function(e){var o=e.currentTarget.dataset,i=o.skuIndex,t=o.shopIndex,n=this.shops[t].skus[i];(0,s.gotoItem)({sku:n.skuId,price:n.price},{isPingou:n.isPingou,useH5:n.isSaishi,isJx:n.isJx}),(0,r.reportClick)("CLICK_SHOP_SKU")}}};new e.WqComponent(o,"shop-list"); 
 			}); 	require("pages/search/components/shop-list/index.js");
 		__wxRoute = 'pages/search/components/sku-switch/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/sku-switch/index.js';	define("pages/search/components/sku-switch/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=function(){function t(t,i){var e=[],n=!0,a=!1,s=void 0;try{for(var r,o=t[Symbol.iterator]();!(n=(r=o.next()).done)&&(e.push(r.value),!i||e.length!==i);n=!0);}catch(t){a=!0,s=t}finally{try{!n&&o.return&&o.return()}finally{if(a)throw s}}return e}return function(i,e){if(Array.isArray(i))return i;if(Symbol.iterator in Object(i))return t(i,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=require("../../../../common/wqvue/indexv1.2"),e=require("../../../../common/login/loginv1.js"),n=require("../../model/search-index.js"),a=require("../../common/js/utils.js"),s=require("../../common/js/base.js"),r=require("../../common/js/helper.js"),o=require("../modal/modal.js"),u=void 0,h=void 0,c={data:{list:[],isShow:!1,animate:"",isAnimating:!1},props:{visible:{type:Boolean,value:!1},keyword:{type:String,value:""},similar:{type:Boolean,value:!1},item:{type:Object,value:{}},navHeight:{type:Number,value:0}},computed:{canAnimate:function(){return this.list&&this.list.length>1}},watch:{visible:function(i,e){var s=this;i?(0,n.getSwitchSkus)(this.item.wareid).then(function(i){if(!i||!i.length)return(0,o.toast)("当前点击人数太多啦，稍后再试"),void s._hide();var e=[];i.forEach(function(t,n){t.image=(0,a.getImg)(t.imagePath),t.order=n+1,t.count=i.length,t.hasSimilar=!!s.similar,t.isFavorited=!1,t.stockStatus="",t.cartNumber=0;var r=t.price.toString().split(".");t.priceShow=[r[0],((r[1]||"")+"00").slice(0,2)],e.push(t.sku)}),s.list=i,s.isShow=!0,Promise.all([(0,n.getPriceAndStock)(e,1),(0,n.getFavoriteStatus)(e)]).then(function(i){var e=t(i,2),n=e[0],a=(n=void 0===n?{}:n).stock,r=void 0===a?{}:a,o=e[1],u=void 0===o?{}:o;s.list.forEach(function(t){t.stockStatus=r[t.sku]&&34==r[t.sku].a?"无货":"",t.isFavorited=1==u[t.sku]})})}):(this.list=[],this._hide())}},methods:{onTouchStart:function(t){if(this.canAnimate&&!this.isAnimating){var i=t.changedTouches&&t.changedTouches[0]||{};u=i.pageX,h=i.pageY}},onTouchMove:function(t){this.canAnimate&&!this.isAnimating&&t.preventDefault&&t.preventDefault()},onTouchEnd:function(t){var i=this;if(this.canAnimate&&!this.isAnimating){var e=t.changedTouches&&t.changedTouches[0]||{},n=e.pageX,a=e.pageY;if(Math.abs(a-h)<40&&u-n>40)this.animate="animate-left",this.isAnimating=!0;else if(Math.abs(a-h)<40&&n-u>40){var s=this.list.pop();this.list.unshift(s),this.animate="animate-right",this.$nextTick(function(){i.animate="",i.isAnimating=!0})}}},onAnimateEnd:function(){var t=this;if(this.isAnimating&&(this.isAnimating=!1,"animate-left"===this.animate)){this.animate="";var i=this.list.shift();this.$nextTick(function(){t.list.push(i)})}},_hide:function(){this.isShow=!1,this.$emit("hide")},onClose:function(){this._hide()},onToItem:function(t){var i=t.currentTarget.dataset.index,e=this.list[i]||{},n=e.sku,a=e.price,s=e.image;(0,r.gotoItem)(this.item,{sku:n,price:a,image:s})},onFavorite:function(t){var i=t.currentTarget.dataset.index,e=this.list[i]||{};e.sku&&(e.isFavorited?(0,n.delFavorite)(e.sku).then(function(t){t?e.isFavorited=!1:(0,o.toast)("取消收藏失败")}):(0,n.addFavorite)(e.sku).then(function(t){t?e.isFavorited=!0:(0,o.toast)("收藏失败")}))},onAddCart:function(t){var i=this;if(!this._addingCart){var a=t.currentTarget.dataset.index,s=this.list[a]||{};"无货"!=s.stockStatus&&(this._addingCart=!0,(0,n.addCart)(s.sku).then(function(n){if(i._addingCart=!1,!n)return(0,o.toast)("添加失败，请稍后再试");if(13==n.errId)(0,e.doLogin)().then(function(){i.onAddCart(t)});else{if(8968==n.errId)return(0,o.toast)("商品数量最大超过200");if(8969==n.errId)return(0,o.toast)("添加商品失败，已超出购物车最大容量");if(0!=n.errId)return(0,o.toast)("添加失败，请稍后再试");s.cartNumber+=1}}))}},onSimilar:function(t){var i=t.currentTarget.dataset.index,e=this.list[i]||{},n=e.sku,a=e.price;n&&a&&(0,s.xgoto)({h5:"//wqs.jd.com/search/searchsimilar.shtml?sceneid=1&sku="+n+"&jp="+a+"&key="+encodeURIComponent(this.keyword)})}}};new i.WqComponent(c,"sku-switch"); 
 			}); 	require("pages/search/components/sku-switch/index.js");
 		__wxRoute = 'pages/search/components/smart-box/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/smart-box/index.js';	define("pages/search/components/smart-box/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=require("../../../../common/wqvue/indexv1.2"),e=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(require("../../../../common/localStorage.js")),r=require("../../model/smartbox.js"),o=require("../../constants/sf.js"),i=require("../../constants/ptag"),s=require("../../common/js/base"),n=require("../../common/js/utils"),a=require("../../list/managers/report.manager"),c=require("../../list/managers/ppms.manager"),h=375,d={props:{keyword:{type:String,value:""},isActive:{type:Boolean,value:!1},navHeight:{type:Number,value:0}},data:{historyWords:null,foldIndex:-1,foldLine:2,isFold:!0,historyWordsVisible:!1,hotWords:null,showHotWords:!0,isLessI7ScreenHeight:!1,atmosphereStyle:"",activity:[]},watch:{keyword:{handler:function(t,e){t||(this._getHistoryWords(),this.hotWords||(this._page=1,this._getHotWords()))},immediate:!0},isActive:function(t){t||(this.isFold=!0,this.historyWordsVisible=!1)}},methods:{onClearHistory:function(){var t=this;(0,r.clearHistoryWords)().then(function(){t._getHistoryWords()}),(0,a.reportClick)("CLICK_SMARTBOX_HISTORY_CLEAR")},onHistory:function(t){var e=t.currentTarget.dataset,s=e.key,n=e.type,c=e.ico,h=e.desc;(0,r.setHistoryWords)(s,n,c,h),"0"==n?this.$xgoto(["//wqs.jd.com/search/shop_index.shtml"],{key:s,as:0,sf:o.SF_HISTORY,ptag:i.CLICK_SMARTBOX_HISTORY},"navigateTo"):"1"==n?this.$emit("search",{key:s,filter:{filt_type:"product_ext,b11v1;"},projectId:-10,as:0,sf:o.SF_HISTORY,ptag:i.CLICK_SMARTBOX_HISTORY}):"2"==n?this.$emit("search",{key:s,filter:{filt_type:"ico,L"+c+"M"+c+";"},projectId:-10,as:0,sf:o.SF_HISTORY,ptag:i.CLICK_SMARTBOX_HISTORY}):this.$emit("search",{key:s,projectId:-10,as:0,sf:o.SF_HISTORY,ptag:i.CLICK_SMARTBOX_HISTORY}),(0,a.reportClick)("CLICK_SMARTBOX_HISTORY",{hist_wd:s},{eparam:s})},toggleHistoryFold:function(){(0,a.reportClick)(this.isFold?"CLICK_SMARTBOX_HISTORY_UNFOLD":"CLICK_SMARTBOX_HISTORY_FOLD"),this.isFold=!this.isFold},_getHistoryWords:function(){var t=this;(0,r.getHistoryWords)().then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.historyWords=e,t.foldIndex=-Date.now(),t.$nextTick(function(){if(t.isActive&&n.ENV.isXcx){var e=t.createSelectorQuery();e.selectAll("#history-tags .tag").boundingClientRect(),e.exec(function(e){if(e){var r=e[0]||[],o=0,i=0,s=r.findIndex(function(t){return t.top!=i&&(i=t.top,o++),o>2}),n=2;if(--s>-1){var c=r[s];if(c.right+42>h){var d=r[--s];c.top!=d.top&&(n=d.right+42>h?2:1)}(0,a.reportExposure)("EXPOSE_SMARTBOX_HISTORY_UNFOLD")}t.foldLine=n,t.foldIndex=s,t.historyWordsVisible=!0}})}})})},onToggleHotVisible:function(){this.showHotWords=!this.showHotWords,e.set("search_tags_hotpanel",this.showHotWords?1:0,{expire:"365d"});var t=this.showHotWords?"CLICK_SMARTBOX_HOT_SHOW":"CLICK_SMARTBOX_HOT_HIDE",r={eparam:this.showHotWords?"0":"1"};(0,a.reportClick)(t,{},r)},onMoreHots:function(){this.showHotWords&&(this._getHotWords(),(0,a.reportClick)("CLICK_SMARTBOX_HOT_RRESH"))},onHot:function(t){var e=t.currentTarget.dataset,n=e.key,c=e.pps,h=e.activeUrl,d=e.index;if(c&&(0,a.reportPPS)(c),(0,a.reportClick)("CLICK_SMARTBOX_HOT",{realPtag:d+1,trend_wd:n,trend_rank:d+1},{eparam:n+"_"+d}),h){var _=h.match(/^https?:\/\/wq.jd.com\/wxapp(\/pages\/.*)$/);_&&_[1]?(0,s.xgoto)({xcx:_[1]}):(0,s.xgoto)({h5:h})}else(0,r.setHistoryWords)(n),this.$emit("search",{key:n,pps:c,as:0,sf:o.SF_HOT_WORD,ptag:i.CLICK_SMARTBOX_HOT.replace("xxx",d+1)})},_getHotWords:function(){var t=this,e=this.isLessI7ScreenHeight?20:30;(0,r.getHotWords)(this._page,e).then(function(r){if(t.isActive&&t.$emit("hot-word-ready"),r&&0==r.errcode){var o=r.data&&r.data.hotwords||{},i=(o.content||[]).filter(function(t){t.key=s.JD.url.getUrlParam("key",t.link)||t.id,t.corner_img=(0,n.getImg)(t.corner_img,t.corner_img_w,t.corner_img_h);var e=t.corner_img_h/15;return t.img_w=t.corner_img_w/e||15,t.id}),a=Math.ceil(o.total/e);t._page=t._page>=a?1:t._page+1,t.hotWords=i}})},onAct:function(t){var e=(t.currentTarget.dataset||{}).index,r=this.activity[e];r&&((0,s.xgoto)({h5:r.url}),(0,a.reportClick)("CLICK_SMARTBOX_ACT",{},{eparam:r.url+"_"+e+"_0"}))},onMoreAct:function(t){var e=(t.currentTarget.dataset||{}).index,r=this.activity[e];r&&((0,s.xgoto)({h5:r.moreLink}),(0,a.reportClick)("CLICK_SMARTBOX_ACT_MORE",{},{eparam:r.moreLink+"_"+e+"_1"}))}},created:function(){var t=this;n.ENV.isXcx?this.createSelectorQuery().selectViewport().boundingClientRect(function(e){e&&(h=e.width,t.isLessI7ScreenHeight=e.height<603)}).exec():this.isLessI7ScreenHeight=window.screen.height<603,e.get("search_tags_hotpanel",!0).then(function(e){t.showHotWords=!!e}).catch(function(){t.showHotWords=!0}),(0,c.getSmartboxAtmosphere)().then(function(e){if(e){var r=(0,n.getImg)(e.bg_top),o=(0,n.getImg)(e.bg_bottom);t.atmosphereStyle="background-image: url("+r+"), url("+o+")"}}),(0,c.getSmartboxActivity)().then(function(e){e&&(t.activity=(e||[]).map(function(t){t.icon=(0,n.getImg)(t.icon);var e=t.icon.match(/\/s(\d+)x(\d+)_jfs\//)||[];return t.iconWidth=parseInt(e[1])/2,t}).slice(0,1))})}};new t.WqComponent(d,"smart-box"); 
 			}); 	require("pages/search/components/smart-box/index.js");
 		__wxRoute = 'pages/search/components/smart-list/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/smart-list/index.js';	define("pages/search/components/smart-list/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),t=require("../../common/js/base.js"),i=require("../../common/js/utils.js"),r=require("../../model/smartbox.js"),s=require("../../constants/sf.js"),o=require("../../list/managers/report.manager"),a={0:"https://img11.360buyimg.com/jdphoto/s26x26_jfs/t17389/38/1940671204/537/61e976a3/5adf177bN002f4a19.png",1:"https://img11.360buyimg.com/jdphoto/s26x26_jfs/t18544/250/1969390356/990/e085a486/5adf177bN1a2470ae.png",2:"https://img11.360buyimg.com/jdphoto/s26x26_jfs/t17209/184/1970445468/900/71ce7bab/5adf177bNee92495b.png",3:"https://img11.360buyimg.com/jdphoto/s26x26_jfs/t17209/184/1970445468/900/71ce7bab/5adf177bNee92495b.png",4:"https://img11.360buyimg.com/jdphoto/s26x26_jfs/t17209/184/1970445468/900/71ce7bab/5adf177bNee92495b.png"},p={props:{keyword:{type:String,value:""},isActive:{type:Boolean,value:!1}},data:{list:[],extList:[]},watch:{keyword:{handler:function(e){e?this._getSmartList(e):(this.list=[],this.extList=[])},immediate:!0},isActive:function(e){e||(this._pvid="")}},methods:{onTapExtension:function(e){var i=e.currentTarget.dataset,a=i.key,p=i.type,n=i.ico,_=i.desc,d=i.url,c=i.filter,h=i.index;"0"==p?((0,r.setHistoryWords)(a,p),(0,t.xgoto)({h5:{url:"//wqs.jd.com/search/shop_index.shtml",params:{key:encodeURIComponent(a),as:0,sf:s.SF_SEARCH_SHOP}}}),(0,o.reportClick)("CLICK_SMARTBOX_LIST_SHOP",{ss_key:this.keyword,drop_ver:this._version,pvid:this._pvid},{eparam:a+"_shop_"+h})):"1"==p?((0,r.setHistoryWords)(a,p),this.$emit("search",{key:a,filter:{filt_type:"product_ext,b11v1;"},as:0,sf:s.SF_GLOBAL}),(0,o.reportClick)("CLICK_SMARTBOX_LIST_GLOBAL",{ss_key:this.keyword,drop_ver:this._version,pvid:this._pvid},{eparam:a+"_global_"+h})):"2"==p?((0,r.setHistoryWords)(a,p,n,_),this.$emit("search",{key:a,filter:{filt_type:"ico,L"+n+"M"+n+";"},as:0,sf:s.SF_ACTIVITY}),(0,o.reportClick)("CLICK_SMARTBOX_LIST_ACT",{ss_key:this.keyword,drop_ver:this._version,pvid:this._pvid},{eparam:a+"_"+n+"_"+h})):"3"==p?((0,t.xgoto)({h5:{url:d,params:{key:encodeURIComponent(a),sourcefrom:"xiala",as:0,sf:s.SF_SEARCH_ACTURL}}}),(0,o.reportClick)("CLICK_SMARTBOX_LIST_URL",{ss_key:this.keyword,drop_ver:this._version,pvid:this._pvid},{eparam:a+"_url_"+h})):"4"==p&&(this.$emit("search",{key:a,filter:{filt_type:"&art=1"==c?"productext2,b5v1;":""},as:0,sf:s.SF_SEARCH_ART}),(0,o.reportClick)("CLICK_SMARTBOX_LIST_ART",{ss_key:this.keyword,drop_ver:this._version,pvid:this._pvid},{eparam:a+"_art_"+h}))},onTapSmartItem:function(e){var t=e.currentTarget.dataset,i=t.key,a=t.index;(0,r.setHistoryWords)(i),this.$emit("search",{key:i,as:0,sf:s.SF_LIST_TEXT}),(0,o.reportClick)("CLICK_SMARTBOX_LIST",{ss_key:this.keyword,drop_wd:i,drop_rank:a+1,drop_ver:this._version,pvid:this._pvid},{eparam:i+"_"+a})},onTapSmartTag:function(e){var t=e.currentTarget.dataset,i=t.key,a=t.itemIndex,p=t.itemName,n=t.tagIndex,_=t.tagName;(0,r.setHistoryWords)(i),this.$emit("search",{key:i,as:0,sf:s.SF_LIST_TAG}),(0,o.reportClick)("CLICK_SMARTBOX_LIST_TAG",{ss_key:this.keyword,drop_wd:i,drop_rank:a+1,drop_ver:this._version,pvid:this._pvid},{eparam:p+"_"+_+"_"+a+"_"+n})},onQuickInput:function(e){var t=e.currentTarget.dataset,i=t.key,r=t.index;this.$emit("keyword-change",{value:i}),(0,o.reportClick)("CLICK_SMARTBOX_LIST_QUICK",{ss_key:this.keyword,drop_wd:i,drop_rank:r+1,drop_ver:this._version,pvid:this._pvid},{eparam:i+"_"+r})},_getSmartList:function(e){var t=this,i=new RegExp("("+this.keyword.trim().replace(/([+*.?|^(){}[\]\/\\])/g,"\\$1")+")","g");(0,r.getSmartList)(e,this._pvid).then(function(e){if(!t.keyword.trim())return t.list=[],void(t.extList=[]);if(Array.isArray(e)&&e.length){var r=[],s=[];e.forEach(function(e){if(e.version)t._version!=e.version&&(t._version=e.version,t.$emit("version-change",{version:e.version}));else if(e.pvid)t._pvid!=e.pvid&&(t._pvid=e.pvid,t.$emit("pvid-change",{pvid:e.pvid}));else if(e.wqif)r=e.wqif.map(function(e){if(e.icon=a[e.iftp]||"",2==e.iftp)e.ico=e.acu.replace(/^&icon=/,"");else if(3==e.iftp){var t=e.prt.split("&");e.preText=t[0]||"",e.sufText=t[1]||"",e.preText||(e=null)}else 4==e.iftp&&(e.icon=e.icu||e.icon);return e.icon||(e=null),e}).filter(function(e){return e}).sort(function(e,t){return e.sho-t.sho});else if(e.key){e.text="";var o=(e.key||"").replace(i,function(t){return e.text=t||"","|==|"}).split("|==|");e.preText=o[0]||"",e.sufText=o[1]||"",e.key&&s.push(e)}}),t.list=s,t.extList=r}})}},created:function(){this._getSmartList=(0,i.debounce)(this._getSmartList,100)}};new e.WqComponent(p,"smart-list"); 
 			}); 	require("pages/search/components/smart-list/index.js");
 		__wxRoute = 'pages/search/components/top-adshop/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/top-adshop/index.js';	define("pages/search/components/top-adshop/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var o=require("../../../../common/wqvue/indexv1.2"),t=require("../../common/js/base.js"),e=require("../../list/managers/report.manager"),r={props:{shop:{type:Object,value:null}},data:{current:0,autoplay:!0},watch:{shop:function(o){o&&(this.current=0)}},methods:{_gotoShop:function(){var o=this.shop,e=o.vender_id,r=o.shop_name;e&&(0,t.xgoto)({xcx:{url:"/pages/shop/index/index",params:{venderId:e,shopName:r||""}},h5:{url:"//wqshop.jd.com/mshop/gethomepage",params:{venderid:e}}})},onToShop:function(){this._gotoShop();var o="";switch(parseInt(this.shop.style_type)){case 1:o="CLICK_TOP_AD_SHOP_JINGXUAN_LINK";break;case 2:o="CLICK_TOP_AD_SHOP_JINGXUAN_IMAGE"}(0,e.reportClick)(o,{},{eparam:this.shop.vender_id}),(0,e.reportAd)(this.shop.click_url)},onToLink:function(o){var r=o.currentTarget.dataset,n=r.linkUrl,a=r.clickUrl,i=r.index,s=r.text;(0,t.xgoto)({h5:n}),(0,e.reportClick)("CLICK_TOP_AD_SHOP_JINGXUAN_LINK_BTN",{},{eparam:this.shop.vender_id+"_"+s+"_"+(i+1)+"_"+n}),(0,e.reportAd)(a)},onSwipe:function(o){var t=o.detail.current;this.current=t},onTabChange:function(o){var t=this;this.autoplay=!1;var e=o.currentTarget.dataset.index;this.current=e,this.$nextTick(function(){t.autoplay=!0})},onDrawCoupon:function(){var o=this.shop.coupon_info;2!=o.couponState&&(1!=o.couponState?this.$emit("draw-coupon"):this._gotoShop())}}};new o.WqComponent(r,"top-adshop"); 
 			}); 	require("pages/search/components/top-adshop/index.js");
 		__wxRoute = 'pages/search/components/top-banner/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/top-banner/index.js';	define("pages/search/components/top-banner/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),n=require("../../common/js/base"),o={props:{banner:{type:Object,value:null}},methods:{onTap:function(){this.banner.url&&(0,n.xgoto)({h5:this.banner.url})}}};new e.WqComponent(o,"top-banner"); 
 			}); 	require("pages/search/components/top-banner/index.js");
 		__wxRoute = 'pages/search/components/top-car/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/top-car/index.js';	define("pages/search/components/top-car/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),i=require("../../common/js/utils.js"),o={isOpen:!1},n={data:{isWQ:i.ENV.isWx||i.ENV.isSq,isOpen:!1},props:{car:{type:Object,value:{}}},methods:{onTips:function(){var e="";e=(this.car.tips||{}).needLogin?"//wq.jd.com/pinbind/pintokenredirect?biz=car&url="+encodeURIComponent(window.location.href):"//car.m.jd.com/list.html?source=wxsearch",this.$xgoto([e])},onText:function(){this.$xgoto(["//car.m.jd.com/h5/carManageForApp.html?source=wxsearch"])},onFillInfo:function(){this.$xgoto(["//car.m.jd.com/h5/myCarInfo.html"])},onToggleRecommend:function(){this.isOpen=!this.isOpen,o.isOpen=this.isOpen,this.$emit("toggle-recommend")},onRecommend:function(e){var i=e.currentTarget.dataset.index,o=(this.car.list||[])[i];o&&this.$emit("car-search",{key:o.keyword,car_model_id:this.car.info.modelId})}},created:function(){this.isOpen=o.isOpen}};new e.WqComponent(n,"top-car"); 
 			}); 	require("pages/search/components/top-car/index.js");
 		__wxRoute = 'pages/search/components/top-category/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/top-category/index.js';	define("pages/search/components/top-category/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),t=require("../../list/managers/report.manager"),a={props:{category:{type:Array,value:[]}},methods:{onTap:function(e){var a=e.currentTarget.dataset.index,r=this.category[a]||{},i=(r.tagvalue||"").match(/([^,]+),L(\d+)M(\d+)/);if(i&&i[1]&&i[2]){var n=-1!=["cid1","cid2","catid"].indexOf(i[1])?"category":"virtual";this.$emit("top-filter",{cmd:"edit",type:n,key:i[1],value:i[2],name:r.tagname,tagname:r.tagname}),this.$emit("top-filter",{cmd:"confirm"}),(0,t.reportClick)("CLICK_TOP_CATEGORY",{index:a+1},{eparam:r.tagname+"_"+a})}}}};new e.WqComponent(a,"top-category"); 
 			}); 	require("pages/search/components/top-category/index.js");
 		__wxRoute = 'pages/search/components/top-coupon/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/top-coupon/index.js';	define("pages/search/components/top-coupon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),o=require("../../list/managers/report.manager"),t={props:{coupons:{type:Array,value:[]}},methods:{onTap:function(e){var t=e.currentTarget.dataset.index,p=this.coupons[t]||{};p.isBingo||(this.$emit("draw-coupon",{type:p.type,index:t}),"coupon_precise"===p.type?(0,o.reportClick)("CLICK_TOP_COUPON_PRECISE",{},{eparam:p.active+"-"+p.level+"-"+this.coupons.length}):"coupon_ppms"===p.type&&(0,o.reportClick)("CLICK_TOP_COUPON_PPMS",{},{eparam:p.roleId+"_"+p.key+"_"+this.coupons.length}))}}};new e.WqComponent(t,"top-coupon"); 
 			}); 	require("pages/search/components/top-coupon/index.js");
 		__wxRoute = 'pages/search/components/top-notice/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/top-notice/index.js';	define("pages/search/components/top-notice/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),n={props:{notice:{type:Object,value:null}}};new e.WqComponent(n,"top-notice"); 
 			}); 	require("pages/search/components/top-notice/index.js");
 		__wxRoute = 'pages/search/components/top-portal/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/top-portal/index.js';	define("pages/search/components/top-portal/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),r=require("../../list/managers/report.manager"),t=require("../../common/js/base.js"),o={props:{portal:{type:Object,value:{}}},methods:{onTap:function(){var e=(this.portal||{}).toUrl;if(e){var o=/^(https?:)?\/\/jd-health\.wxapp\//;if(o.test(e)){var a=decodeURIComponent(e.replace(o,""));(0,t.toMiniProgram)({appId:"wx862d8e26109609cb",path:a})}else(0,t.xgoto)({h5:e});(0,r.reportClick)("CLICK_TOP_PORTAL",{},{eparam:e})}}}};new e.WqComponent(o,"top-portal"); 
 			}); 	require("pages/search/components/top-portal/index.js");
 		__wxRoute = 'pages/search/components/top-shop/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/top-shop/index.js';	define("pages/search/components/top-shop/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),r=require("../../common/js/utils.js"),t=require("../../list/managers/report.manager"),n={props:{shops:{type:Array,value:[]}},data:{current:0},watch:{shops:function(){this.current=0}},methods:{onChange:function(e){var r=e.detail,n=r.current,s=r.source;if(this.current=n,"touch"==s){var o=this.shops[this.current]||{};(0,t.reportClick)("CLICK_TOP_SHOP_SLIP",{},{eparam:o.venderId+"_"+(this.current+1)})}},onTap:function(){var e=this.shops[this.current]||{};r.ENV.isXcx?this.$goto("/pages/shop/index/index",{venderId:e.venderId,shopName:e.name}):this.$xgoto(["//wqshop.jd.com/mshop/gethomepage"],{venderid:e.venderId}),(0,t.reportClick)("CLICK_TOP_SHOP",{venderid:e.venderId,venderind:this.current+1},{eparam:e.venderId+"_"+(this.current+1)})}}};new e.WqComponent(n,"top-shop"); 
 			}); 	require("pages/search/components/top-shop/index.js");
 		__wxRoute = 'pages/search/components/top-writer/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components/top-writer/index.js';	define("pages/search/components/top-writer/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../common/wqvue/indexv1.2"),r=require("../../list/managers/report.manager"),o={props:{writer:{type:Object,value:{}}},methods:{onTap:function(){var e=this.writer,o=e.id,t=e.yfb,i=e.origin,n=e.name;this.$xgoto(["//wqs.jd.com/wxsq_project/search/books/author/index.html"],{id:o,env:t||0,origin:i}),(0,r.reportClick)("CLICK_TOP_WRITER",{},{eparam:""+n})}}};new e.WqComponent(o,"top-writer"); 
 			}); 	require("pages/search/components/top-writer/index.js");
 		__wxRoute = 'pages/search/components_old/cart-subtotal/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components_old/cart-subtotal/index.js';	define("pages/search/components_old/cart-subtotal/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=require("../../../../bases/component.js"),e=require("../../list/managers/report.manager.js");new t.JDComponent({properties:{cartTotal:{type:Object,value:{factPrice:"0.00",totalPrice:"0.00",promoTitle:"",manGiftSkus:[],mzsuit:{}},observer:"observerCartTotalChange"},type:{type:Number,value:-1,observer:"observerTypeChange"},prevParams:{type:Object,value:{source:""}},isHiddenSubtotal:{type:Boolean,value:!0}},data:{unfold:!1,subButtonText:"去换购",subButtonShow:!1},ready:function(){this.setSubButtonStatus(this.data.prevParams.promoType)},methods:{observerCartTotalChange:function(t,e){var a=[];0!=Object.keys(t).length&&(a=t.mzsuit.manGiftSkus.filter(function(t){return 2==t.giftSelectState})),this.setData({cartTotal:t,_selectedSku:a}),this.setSubButtonStatus(this.data.type)},observerTypeChange:function(t,e){this.setSubButtonStatus(t)},setSubButtonStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(0!=Object.keys(this.data.cartTotal).length&&0==this.data.cartTotal.mzsuit.manGiftSkus.length&&(t=0,this.setData({subButtonShow:!1})),-1==t)return this.triggerEvent("updateHiddenSubtotal",{isHiddenSubtotal:!0});1==t||2==t?(this.triggerEvent("updateHiddenSubtotal",{isHiddenSubtotal:!1}),this.data._selectedSku.length>0?1==t?this.setData({subButtonText:"重新领取"}):this.setData({subButtonText:"重新换购"}):1==t?this.setData({subButtonText:"领取赠品"}):this.setData({subButtonText:"去换购"}),this.setData({subButtonShow:!0})):this.triggerEvent("updateHiddenSubtotal",{isHiddenSubtotal:!1})},_onTapGoGift:function(){this.setData({unfold:!0}),"去换购"==this.data.subButtonText&&(0,e.reportClick)("CLICK_SP_COUNT_EXCHANGE")},_onTapGoCart:function(){switch(this.data.type){case 0:(0,e.reportClick)("CLICK_SP_COUNT_CART_MJ");break;case 1:(0,e.reportClick)("CLICK_SP_COUNT_CART_MZ");break;case 2:(0,e.reportClick)("CLICK_SP_COUNT_CART_JJG")}this.$goto("/pages/cart/cart/index")}}}); 
 			}); 	require("pages/search/components_old/cart-subtotal/index.js");
 		__wxRoute = 'pages/search/components_old/exhibition/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components_old/exhibition/index.js';	define("pages/search/components_old/exhibition/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return Array.from(e)}var o=require("../../../../api/Ptag/Ptag_utils"),t=require("../../../../bases/component.js"),s=require("../../path.js"),r=s.Ptag,i={"自营":{size:[24,14],src:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png"},"京东好店":{size:[56,14],src:"//img11.360buyimg.com/jdphoto/s112x28_jfs/t14554/205/1842763392/2625/f44cdabc/5a5c7090Ne9b78604.png"},"yohome店铺":{size:[56,14],src:"//img11.360buyimg.com/jdphoto/s112x28_jfs/t15673/79/1640911352/5197/3171e6ff/5a5c7076N82df55a4.png"},"优惠券":{size:[34,14],src:"//img11.360buyimg.com/jdphoto/s68x28_jfs/t18313/177/2646756182/2247/3a860d55/5b0260baNc465c33f.png"},"上新":{size:[24,14],src:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t18130/217/2434125589/1284/8812f67c/5af5645dN125bb775.png"},"秒杀":{size:[24,14],src:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t7867/19/1452018090/1756/1c57bcf8/599cf3f5N7dbe95e5.png"},"满减":{size:[24,14],src:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t18766/170/2599757442/1957/ae32b760/5b027c81N676d7b5a.png"},"促销":{size:[24,14],src:"//img11.360buyimg.com/jdphoto/s48x28_jfs/t18355/80/2601247209/1641/4af07c44/5b0260a5Nf9f47459.png"}};new t.JDComponent({properties:{venderId:{type:String,value:""},type:{type:String,value:""}},data:{shopList:[]},ready:function(){this.gotoShop=this.helper.throttle(this.gotoShop,1e3)},attached:function(){var e=this,o=this.data.venderId;s.searchCoupon.getShopInfo(o,function(o,t){if(!o){var s=Object.assign(t,{commonGoodShopCode:1}),r=e._assignShopInfo(s);e.setData({shopList:[r]})}})},methods:{formatNumbers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e<1e4?e:(e/=1e4)<1e3?e.toFixed(1)+"万":"999万+"},_assignShopInfo:function(o){var t,s=o.shopInfo,r=o.commonGoodShopCode,a=void 0===r?0:r,n=o.categoryGoodShopCode,p=void 0===n?0:n,g=o.scoreRankRateGrade,c=o.squareLogo,d=o.rectLogo,h=[],f=!1;d?h=[d,180,60]:(f=!0,h=[c,60,60]);var m={isSquare:f,tags:[],shopTags:[],titleTags:[],brief:s.brief,id:s.venderId,name:s.shopName,rate:g||0,score:s.totalScore,goods:this.formatNumbers(s.goodsNum),fans:this.formatNumbers(s.shopFansNum),brand:(t=this.helper).getImg.apply(t,e(h)),banner:s.fPicUrl?this.helper.getImg(s.fPicUrl,446,184):""};return"1"==s.isZy?m=Object.assign(m,{isZy:!0,titleTags:[i["自营"]]}):1==a?m.shopTags.push(i["京东好店"]):1002==p&&m.shopTags.push(i["yohome店铺"]),m},gotoShop:function(e){var t=e.currentTarget.dataset,s=t.id,i=t.name,a=t.index,n=t.clickurl,p=t.stype;if(o.PtagUtils.addPtag(r.SEARCH_SHOP_CLICK,{venderid:s,venderind:a+1}),n){this.reportExposure(n);var g=1===p?r.SEARCH_ADVERT_SHOP_BIG_CLICK:r.SEARCH_ADVERT_SHOP_LINK_CLICK,c=1===p?{}:{type:0};this.$report(g,c)}this.$goto("/pages/shop/index/index",{venderId:s,shopName:i})},reportExposure:function(e){e&&wx.$.request.get({url:e,dataType:"text",priority:"REPORT"}).catch(function(e){console.error(e)})}}}); 
 			}); 	require("pages/search/components_old/exhibition/index.js");
 		__wxRoute = 'pages/search/components_old/filter-panel/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components_old/filter-panel/index.js';	define("pages/search/components_old/filter-panel/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=require("../../../../bases/component.js"),e=require("../../path.js"),s=require("../filter_status_ptag.js"),a=e.Ptag.FILTER_SERVICE_DEFAULT_PINGGOU,i=e.Ptag.EXP_FILTER_SERVICE_DEFAULT_PINGGOU,r=e.Ptag.FILTER_ART_UNCHECK,n=e.Ptag.FILTER_USED_UNCHECK,c={"京东物流":!0,"有货优先":!0,"货到付款":!0,"京东国际":!0,"促销商品":!0};new t.JDComponent({properties:{service:{type:Array,value:[],observer:"observerService"},filters:{type:Object,value:c},source:{type:String,value:"default"}},data:{title:"京东服务",max_size:9,radio:!1,overview_hide:!0,fold_status:!1,tags:[],checked_list:[]},ready:function(){this.PtagConstants=e.Ptag;var t=this.data.service,s=this._getDataList(),a=s;t&&(a=s.map(function(s){return s.status=-1!=t.findIndex(function(t){return t==s.id})?"checked":"","拼购商品"===s.text&&e.PtagManager.addPtagExposure(i),s})),this.setData({tags:a,checked_list:t}),this.setTagStatus()},methods:{observerService:function(t,e){0==t.length&&this.reset()},_getDataList:function(){var t=this.data.filters;t=t||c;var e=["京东物流","京尊达","有货优先","货到付款","211限时达","新品","拼购商品","京东国际","PLUS专享促销","促销商品","拍拍二手"];return Object.keys(t).forEach(function(t){-1==e.findIndex(function(e){return e==t})&&e.push(t)}),(e=e.map(function(e){if(t[e])return{id:e,text:e}})).filter(function(t){return t})},reset:function(){var t=this.data.tags;t=t.map(function(t){return t.status="",t}),this.setData({selected_text:"",checked_list:[],tags:t})},setTagStatus:function(){var t=this.data,e=t.tags,s=t.radio,a=t.max_size,i=e.filter(function(t){return"checked"==t.status}),r=!1;!s&&i.length>=a&&(r=!0);var n=i.map(function(t){return t.text}).join("，");e.forEach(function(t){"checked"!=t.status&&(t.status=r?"disable":"")}),this.setData({selected_text:n,checked_list:i,tags:e})},onCheckItem:function(t){var e=t.currentTarget.dataset,i=e.index,c=e.text,u=this.data,o=u.tags,h=u.radio,d=u.checked_list,f=u.max_size;if("拼购商品"===c&&this.$report(a),"checked"==o[i].status)o[i].status="","艺术品"==c&&this.$report(r),"拍拍二手"==c&&this.$report(n);else if(h)o.forEach(function(t){t.status=""}),o[i].status="checked";else{if(d.length>=f)return void this.toast.show({icon:this.toast.ICON.WARNING,content:"筛选个数不能超过"+f+"个哦~"});o[i].status="checked",s.FilterStatusPtag.reportServicePtag(c,this.data.source,"serviceNameList")}this.setTagStatus();var l=this.getSelectedResult();this.triggerEvent("filterPanel",{service:l})},onChangeFold:function(){this.setData({fold_status:!this.data.fold_status})},getSelectedResult:function(){var t=this.data.checked_list;return t.length?t.map(function(t){return t.id}):[]}}}); 
 			}); 	require("pages/search/components_old/filter-panel/index.js");
 		__wxRoute = 'pages/search/components_old/filter-price/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components_old/filter-price/index.js';	define("pages/search/components_old/filter-price/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t,e){var r=void 0;switch(t){case"default":r=a[e];break;case"sales":r="lower"==e?"FILTER_PRICE_SALES_INPUT_START":"FILTER_PRICE_SALES_INPUT_END";break;case"coupon":r="lower"==e?"FILTER_PRICE_COUPON_INPUT_START":"FILTER_PRICE_COUPON_INPUT_END";break;default:r=a[e]}return r}var e=require("../../../../bases/component.js"),r=require("../../path.js"),a={active1:"FILTER_PRICE_FIRST_ACTIVE",active2:"FILTER_PRICE_SECOND_ACTIVE",active3:"FILTER_PRICE_THIRD_ACTIVE",inactive1:"FILTER_PRICE_FIRST_INACTIVE",inactive2:"FILTER_PRICE_SECOND_INACTIVE",inactive3:"FILTER_PRICE_THIRD_INACTIVE",lower:"FILTER_PRICE_INPUT_START",upper:"FILTER_PRICE_INPUT_END"};new e.JDComponent({properties:{intervals:{type:Array,value:[]},price:{type:Object,value:{lower:0,upper:0}},source:{type:String,value:"default"}},ready:function(){this.PtagConstants=r.Ptag},actions:{onInputPrice:function(t){var e=t.detail.value,r=t.target.dataset.type,a=this.data.price,n=void 0===a?{}:a;n[r]=""===e?null:+e;var i=this._getMatchInterval(),I=this._getIntervalsStatus(i,!0);this.triggerEvent("inputPrice",{price:n,intervals:I})},onTapInterval:function(t){var e=t.currentTarget.dataset,r=e.start,n=e.end,i=e.index,I=i+1,s=void 0,_=void 0,c=this._getSelectedIntervalIndex();c>=0&&c==i?(s="inactive"+I,_=!1):(_=!0,s="active"+I),this.$report(a[s]);var v=this._getPrice(i,r,n),u=this._getIntervalsStatus(i,_);this.triggerEvent("tapInterval",{price:v,intervals:u})},onReportPtag:function(e){var r=e.target.dataset.type,a=t(this.data.source,r);this.$report(a)}},methods:{_getMatchInterval:function(){var t=this.data,e=t.price;return t.intervals.findIndex(function(t){return t.start==e.lower&&t.end==e.upper})},_getIntervalByIndex:function(t){var e=this.data.intervals;return e&&e[t]||{}},_getPrice:function(t,e,r){return this._getIntervalByIndex(t).active?{}:{upper:+r,lower:+e}},_getIntervalsStatus:function(t,e){return this.data.intervals.map(function(r,a){return r.active=a==t&&e,r})},_getSelectedIntervalIndex:function(){return this.data.intervals.findIndex(function(t){return t.active})}}}); 
 			}); 	require("pages/search/components_old/filter-price/index.js");
 		__wxRoute = 'pages/search/components_old/filter-sort/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components_old/filter-sort/index.js';	define("pages/search/components_old/filter-sort/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=require("../../../../bases/component.js"),e=require("../../list/managers/report.manager.js"),a={default:"CLICK_SC_BAR_DEFAULT",sale:"CLICK_SC_BAR_SALE",price_asc:"CLICK_SC_BAR_PRICE_ASC",price_desc:"CLICK_SC_BAR_PRICE_DESC",filter:"CLICK_SC_BAR_FILTER"};new t.JDComponent({properties:{PtagMap:{type:Object,value:a},actived:{type:Object,value:{status:"default",exec:!1},observer:"observerActived"},key:{type:String,value:"",observer:"observerKey"},hasFilter:{type:Boolean,value:!1},isfilterSortFixed:{type:Boolean,value:!1}},data:{scrollTop:0},ready:function(){this.filter={};var t=getCurrentPages();this.$page=t[t.length-1],this.onTapSales=this.helper.throttle(this.onTapSales,500),this.onTapFilter=this.helper.throttle(this.onTapFilter,1e3),this.outFilterData={}},methods:{observerKey:function(t,e){t&&this.triggerEvent("sortevent",{actived:{status:"default",exec:!1}})},_orderList:function(t){this.data.actived.status!=t&&this.triggerEvent("sortevent",{actived:{status:t,exec:!0}})},onTapFilter:function(){this.triggerEvent("sortevent",{actived:{status:this.data.actived.status,exec:!1},isTapFilter:{status:!0,exec:!0}}),(0,e.reportClick)(this.data.PtagMap.filter,{},{eparam:"筛选"})},onTapSales:function(){this._orderList("sales"),(0,e.reportClick)(this.data.PtagMap.sale,{},{eparam:"销量"})},onTapDefault:function(){(0,e.reportClick)(this.data.PtagMap.default,{},{eparam:"综合"}),this._orderList("default")},onTapPrice:function(){var t=void 0,a=void 0;"price_asc"==this.data.actived.status?(t="price_desc",a="价格降"):(t="price_asc",a="价格升"),(0,e.reportClick)(this.data.PtagMap[t],{},{eparam:a}),this._orderList(t)},onTouchMoveMask:function(){return!1}}}); 
 			}); 	require("pages/search/components_old/filter-sort/index.js");
 		__wxRoute = 'pages/search/components_old/gift-panel/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components_old/gift-panel/index.js';	define("pages/search/components_old/gift-panel/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}function e(t,e){return t=(t/100).toFixed(2),e?t.split("."):t}var a=require("../../../../bases/component.js"),i=t(require("../../../../common/fe_helper.js")),n=t(require("../../../../common/toast/toast.js")),o=require("../../list/managers/report.manager.js"),s=t(require("../../models_old/search_sales.js")),r=require("../../path.js"),d=getApp().debug("促销搜索 - 赠品选择"),u={DISCOUNT:1,GIFT:2,"3C":3},c={UNCHECKED:1,CHECKED:2,DISABLED:3,LIMITED:4};new a.JDComponent({properties:{unfold:{type:Boolean,value:!1},prevParams:{type:Object,value:{actId:0,gifts:{canSelectedGiftNum:0,manGiftSkus:[]},tips:"",type:0,promoType:-1}},cartTotal:{type:Object,value:{factPrice:"0.00",totalPrice:"0.00",promoTitle:"",manGiftSkus:[],mzsuit:{}},observer:"observerCartTotalChange"}},data:{loading:!1,firstShowPanel:!1,renderNum:0,TYPE:u,STATUS:c,type:0,d:{manGiftSkus:[]},num:0,soldOut:{},checkInfo:{},limited:{}},ready:function(){this.PtagConstants=r.Ptag,this.initComponent()},methods:{observerCartTotalChange:function(t,e){0!=Object.keys(t).length&&0!=t.manGiftSkus.length&&this.updateManGiftSkus(t)},initComponent:function(){this.onTapItem=i.throttle(this.onTapItem,500),this.onConfirm=i.throttle(this.onConfirm,500);var t=this.data.prevParams.actId;this.pid=t},updateStock:function(t){var e=this;r.searchResult.getStockPrice(t,function(t,a){if(a){var i=a.stock,n=void 0===i?{}:i,o={};for(var s in n)o[s]="无货"==n[s].status;e.setData({soldOut:o})}})},updateCheckedNum:function(){var t=this.data.checkInfo,e={},a=0;if(this.data.type==u["3C"])for(var i in t)for(var n in t[i])t[i][n]==c.CHECKED&&a++;else{for(var o in t)t[o]==c.CHECKED&&a++;var s=this.data.d.canSelectedGiftNum;if(a==s&&s>1)for(var r in t)t[r]!=c.CHECKED&&(e[r]=!0)}this.setData({num:a,limited:e})},updateManGiftSkus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(0!=Object.keys(t).length){var a=this.data.checkInfo,n=[];t.mzsuit.manGiftSkus.forEach(function(t){t.image_=i.getImg(t.image,150),t.price_=e(t.promoPrice,!0),t.giftNeedMoney_=parseFloat(e(t.giftNeedMoney)),a[t.id]=t.giftSelectState,n.push(t.id)}),this.data.prevParams.type==u.DISCOUNT&&n.length&&this.updateStock(n);var o=!(1!=t.mzsuit.isAchieved||1!=t.mzsuit.checkType),s=this.data.renderNum,r=this.data.firstShowPanel;o&&(this.data.firstShowPanel&&2==s?(o=!1,s=2):(r=!0,s+=1)),this.setData({firstShowPanel:r,renderNum:s,checkInfo:a,unfold:o,d:{canSelectedGiftNum:t.mzsuit.canSelectedGiftNum,manGiftSkus:t.mzsuit.manGiftSkus}}),i.debounce(this.updateCheckedNum(),1e3)}},setLoadingState:function(t){this.setData({loading:t})},onCheck:function(t){},onTapItem:function(t){var e=t.currentTarget.dataset,a=e.sku,i=e.status;if(i!=c.DISABLED&&!this.data.soldOut[a]){var n=this.data.checkInfo;if(this.data.type!=u["3C"]){var s=this.data.d.canSelectedGiftNum;if(i!=c.LIMITED){if(n[a]==c.CHECKED)n[a]=c.UNCHECKED,(0,o.reportClick)("CLICK_SP_COUNT_MODAL_UNSELECT");else if(1==s){(0,o.reportClick)("CLICK_SP_COUNT_MODAL_SELECT");for(var r in n)n[r]==c.CHECKED&&(n[r]=c.UNCHECKED,(0,o.reportClick)("CLICK_SP_COUNT_MODAL_UNSELECT"));n[a]=c.CHECKED}else s>1&&(n[a]=c.CHECKED);this.setData({checkInfo:n}),this.updateCheckedNum()}}}},onConfirm:function(t){var e=this,a=this.data.checkInfo,i=function(t){return e.setLoadingState(0),n.show({icon:n.ICON.WARNING,content:t.toString()})},r=function(t){d("addCmdy / rmvCmdy",t),e.setLoadingState(!1)},f=function(t){d("addCmdy / rmvCmdy",t),e.setLoadingState(!1),(0,o.reportClick)("CLICK_SP_COUNT_MODAL_CONFIRM"),getApp().event.emit("updataSalesSubTotalView",t),e.setData({unfold:!1})};if(this.data.type==u["3C"]);else{if(this.data.num>0){this.setLoadingState(!0);var h=[];for(var C in a)a[C]==c.CHECKED&&h.push([C,0,1,C,15,this.pid,0].join(","));return h.length?s.addGiftToCart(this.pid,h.join("$")).then(f).catch(i):r()}var l=[];this.data.d.manGiftSkus.forEach(function(t){t.giftSelectState==c.CHECKED&&l.push([t.id,0,1,t.id,16,e.pid,0].join(","))}),l.length?(this.setLoadingState(!0),s.rmGiftToCart(this.pid,l.join("$")).then(f).catch(i)):(this.setData({unfold:!1}),r())}},onTapClose:function(){(0,o.reportClick)("CLICK_SP_COUNT_MODAL_CLOSE"),this.setData({unfold:!1}),this.onConfirm()}}}); 
 			}); 	require("pages/search/components_old/gift-panel/index.js");
 		__wxRoute = 'pages/search/components_old/good-count/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components_old/good-count/index.js';	define("pages/search/components_old/good-count/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}var e=t(require("../../../../common/utils.js")),o=require("../../path.js"),r=t(require("../../../../common/cookie-v2/cookie")),a=require("../../../../bases/component.js"),i=require("../../list/managers/report.manager"),n=getApp();new a.JDComponent({properties:{PtagMap:{type:Object,value:{close:"CLICK_SC_COUNT_CLOSE",check:"CLICK_SC_COUNT_CHECKED",uncheck:"CLICK_SC_COUNT_UNCHECKED",fold:"CLICK_SC_COUNT_FOLD",unfold:"CLICK_SC_COUNT_UNFOLD",cart:"CLICK_SC_COUNT_CART",pay:"CLICK_SC_COUNT_PAY",apay:"CLICK_SC_COUNT_APAY",back:"CLICK_SC_COUNT_BACK",oversea:"CLICK_SC_COUNT_OVERSEA",normal:"CLICK_SC_COUNT_NORMAL"}},batch:{type:String,value:""},from:{type:String,value:""},kind:{type:String,value:""},discountInfo:{type:Object,value:{quota:0,discount:0}},zheKouObj:{type:Object,value:{quota:0,discount:0}},venderId:{type:String,value:""},isZheKou:{type:Boolean,value:!1},zheKouInfo:{type:Array,value:[]},isInitCart:{type:Object,value:{status:!1,exec:!1},observer:"observerIsInitCart"}},data:{unfold:!1,chkMainSkuNum:0,glockeckNum:0,factPrice:0,globalprice:0,products:[],addProducts:[],isFirstLoad:!0,isOver:!1,discountAmount:"",pay:"0.0",isOverZhekou:!1,modalInfo:{name:"",type:"",price:0,product:[],normalPrice:0,normalProduct:[]},checkedProduct:{otc:{price:0,product:[]},oversea:{price:0,product:[]},normal:{price:0,product:[]}}},ready:function(){this.PtagConstants=o.Ptag},attached:function(){n.event.on("updateCouponCartNum",this.initCart.bind(this));var t=this.data.PtagMap;this.PtagMap=t,this._count=1},detached:function(){n.event.off("updateCouponCartNum")},methods:{observerIsInitCart:function(t,e){if(1==this._count){var o=this.data.discountInfo;this.setData({pay:o.quota,discountAmount:o.discount}),this._count++}t.status&&t.exec&&this.getCartData()},showError:function(t){var e=t.errCode,o=t.errMsg;this.setData({_status:"error"}),this.toast.show({icon:this.toast.ICON.WARNING,content:void 0===e?"网络不佳，请稍后重试":o+"("+e+")"})},onUnfold:function(t){var e=t.currentTarget.dataset.type,o=this.data.unfold;this.setData({unfold:!o}),"close"==e?(0,i.reportClick)(this.data.PtagMap.close):o?(0,i.reportClick)(this.data.PtagMap.fold):(0,i.reportClick)(this.data.PtagMap.unfold)},onBindinput:function(t){var o=t.currentTarget.dataset.num,r=t.detail.value;e.debounce(function(){if(0===Number(r))return{value:o}},100)},onBindblur:function(t){var e=this,r=t.currentTarget.dataset,a=r.id,i=r.type,n=r.promotionid,c=r.num,s=t.detail.value;s!=c&&(c=s,this.throttle||(this.throttle=!0,o.searchCoupon.modifyNum(a,c,i,n,function(t,o){if(t)return e.showError(t),void(e.throttle=!1);e.throttle=!1,e.initCart(),0!=o.errId&&e.toast.show({icon:e.toast.ICON.WARNING,content:o.errMsg})})))},onDecrease:function(t){var e=this,r=t.currentTarget.dataset,a=r.id,i=r.type,n=r.promotionid,c=r.num;1!=c&&(this.throttle||(this.throttle=!0,c--,o.searchCoupon.modifyNum(a,c,i,n,function(t,o){if(t)return e.showError(t),void(e.throttle=!1);e.throttle=!1,e.initCart()})))},onIncrease:function(t){var e=this,r=t.currentTarget.dataset,a=r.id,i=r.type,n=r.promotionid,c=r.num;this.throttle||(this.throttle=!0,c++,o.searchCoupon.modifyNum(a,c,i,n,function(t,o){if(t)return e.showError(t),void(e.throttle=!1);e.throttle=!1,e.initCart(),0!=o.errId&&e.toast.show({icon:e.toast.ICON.WARNING,content:o.errMsg})}))},onChecked:function(t){var e=this,r=t.currentTarget.dataset,a=r.id,n=r.type,c=r.promotionid,s=r.typedata,u=r.index,d=r.checktype,p=this.data,h=p.addProducts,l=p.products;"new"==s?1==h[u].checkType?h[u].checkType=0:h[u].checkType=1:1==l[u].checkType?l[u].checkType=0:l[u].checkType=1,this.setData({products:l,addProducts:h}),1==d?((0,i.reportClick)(this.data.PtagMap.uncheck),o.searchCoupon.unSelectFun(a,n,c,function(t,o){t?e.showError(t):e.initCart()})):((0,i.reportClick)(this.data.PtagMap.check),o.searchCoupon.seclectFun(a,n,c,function(t,o){t?e.showError(t):e.initCart()}))},getCartData:function(){this.initCart()},initCart:function(){var t=this,e=this.data,r=e.pay,a=e.isOver,i=e.isOverZhekou,n=this.data,c=n.isZheKou,s=n.zheKouInfo,u=n.zheKouObj,d=n.venderId,p=n.batch,h=n.kind,l=n.isFirstLoad,C=n.addProducts,m=n.products,f=n.discountInfo,g=f.quota,v=f.discount,k=f.high,y=f.type,_=v;o.searchCoupon.getCartData(p,d,h,function(e,o){if(e)t.showError(e);else if(0!=o.products.length){if(o.products.forEach(function(e){var o=e.mainSku,r=o.id,a=(o.promoPrice/100).toFixed(2);if(e.mainSku.image=t.helper.getImg(o.image,150),e.mainSku.price=[a.split(".")[0],a.split(".")[1]],l)return m.push(e);var i=m.findIndex(function(t){return t.mainSku.id==r});if(-1==i){var n=C.findIndex(function(t){return t.mainSku.id==r});-1!=n?C[n]=e:C.push(e)}else m[i]=e}),0==o.errId){var n=o.chkMainSkuNum,d=o.factPrice,p=o.totalPromotionPrice,h=o.global,f=void 0===h?{}:h,P=p,I=(f.totalPromotionPrice/100).toFixed(2)||0;if(P=(P/100).toFixed(2),c){var N=s.find(function(t){return Number(t.quota)>Number(P)});N?(i=!1,u.quota=(N.quota-P).toFixed(2),u.discount=N.discount):(i=!0,u.discount=s[s.length-1].discount)}else if(Number(P)>=Number(g)){if(a=!0,28==y){var O=parseInt(100*P/(100*g))*v;_=k>0&&O>k?k:O}}else r=(g-P).toFixed(2),a=!1;t.setData({products:m,addProducts:C,chkMainSkuNum:n,glockeckNum:f.chkMainSkuNum,factPrice:(d/100).toFixed(2),globalprice:I,isFirstLoad:!1,isOver:a,discountAmount:_,pay:r,isOverZhekou:i,zheKouObj:u})}}else t.setData({isFirstLoad:!1})})},gotoCart:function(){this.$goto("/pages/cart/cart/index"),(0,i.reportClick)(this.data.PtagMap.cart)},onBuy:function(){var t=this.data,e=t.addProducts,o=t.products,a=0,n={otc:{price:0,product:[]},oversea:{price:0,product:[]},normal:{price:0,product:[]}};e.concat(o).forEach(function(t){if(1==t.checkType){a++;var e="normal";1==t.mainSku.oversea?e="oversea":1==t.mainSku.isOtcDrug&&(e="otc"),n[e].product.push(t.mainSku.id+",,"+t.num+","+t.mainSku.id+",1,0,0"),n[e].price+=(t.mainSku.promoPrice/100).toFixed(2)-0}});var c=n.otc,s=n.normal,u=n.oversea,d=c.product.length==a,p=s.product.length==a,h=u.product.length==a;if((0,i.reportClick)(this.data.PtagMap.pay),d){var l=c.product.join("$"),C=encodeURIComponent(r.getCookie("wq_addr"));this.$goto("/pages/h5/index",{url:"https://wqs.jd.com/order/s_confirm_otc.shtml?commlist="+l+"&wq_addr="+C})}else if(p)this.$goto("/pages/pay/index/index",{commlist:s.product.join("$")});else if(h)this.$goto("/pages/pay/index/index",{commlist:u.product.join("$"),category:"global"});else{var m=c.product.length>0;this.setData({showPay:!0,modalInfo:{normalPrice:s.price,normalProduct:s.product,type:m?"otc":"oversea",price:m?c.price:u.price,name:m?"京东大药房药品":"京东全球购商品",product:m?c.product:u.product},isChecked:1})}},hideConfirmPay:function(){(0,i.reportClick)(this.dta.PtagMap.back),this.setData({showPay:!1})},onPayCheck:function(t){var e=t.currentTarget.dataset.check;1==e?(0,i.reportClick)(this.dta.PtagMap.oversea):(0,i.reportClick)(this.dta.PtagMap.normal),this.setData({isChecked:e})},gotoPay:function(){var t=this.data,e=t.isChecked,o=t.modalInfo,a=o.product,n=o.normalProduct,c=o.type;if((0,i.reportClick)(this.dta.PtagMap.apay),1==e){var s=a.join("$"),u=encodeURIComponent(r.getCookie("wq_addr"));switch(c){case"otc":this.$goto("/pages/h5/index",{url:"https://wqs.jd.com/order/s_confirm_otc.shtml?commlist="+s+"&wq_addr="+u});break;case"oversea":default:this.$goto("/pages/pay/index/index",{commlist:s})}}else this.$goto("/pages/pay/index/index",{commlist:n.join("$")})}}}); 
 			}); 	require("pages/search/components_old/good-count/index.js");
 		__wxRoute = 'pages/search/components_old/search-bar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/components_old/search-bar/index.js';	define("pages/search/components_old/search-bar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}var t=require("../../../../bases/component.js"),a=e(require("../../../../common/localStorage.js")),r=e(require("./commands.js")),i=require("../../list/managers/report.manager.js"),o=require("../../path.js"),s=o.Sf.SF_SEARCH_BAR,n=o.Sf.SF_SEARCH_NAME,c=["oA1P50KhVFeyNPw3MYcU2tfSxkh4","oA1P50ArPH_kQFxqp7X2IrL5VZ1w","oA1P50LsUsksLRi5RmfXHdDe1OAA","oA1P50PorGIowu5ja2u5SXNWvoe4","oA1P50FiJ0X59MVmO3lbDNfZ_XPs","oA1P50ASVT5tKIk3N-tXrnQuiIkA","oA1P50CI6DgVzn7M5DbFTNOsqLes","oA1P50LHHOXB9UQIt7fYGJlTz5oE","oA1P50Eum9EXY97878A5OOHU0kz8","oA1P50CjTif_QGEBcEZR4aU98UZU"];new t.JDComponent({properties:{PtagMap:{type:Object,value:{focus:"CLICK_SMARTBOX_FOCUS",search:"CLICK_SMARTBOX_SEARCH",cancel:"CLICK_SMARTBOX_CANCEL",clear:"CLICK_SMARTBOX_CLEAR",size:"CLICK_BAR_MODE_CHANGE"}},currentTab:{type:String,value:"Sku"},placeholder:{type:String,value:"搜索京东商品"},floorKeys:{type:Array,value:[]},type:{type:String,value:"search"},key:{type:String,value:""},mode:{type:Boolean,value:!1},cartMark:{type:Boolean,value:!1},isFocus:{type:Boolean,value:!1},isSupportNav:{type:Boolean,value:!1},addMark:{type:Object,value:{status:!1,exec:!1},observer:"observerAddMark"},cursor:{type:Number,value:0}},data:{focus:!1},ready:function(){this._openid=null,this._getUserInfo()},methods:{observerAddMark:function(e,t){e.status&&e.exec&&this._addMark()},_isWhiteList:function(e){return"The Beale Papers"===e&&this._openid&&c.indexOf(this._openid)>=0},_setFocus:function(){this.data.isFocus||this.triggerEvent("inputFocus",{isFocus:{status:!0,exec:!0}})},_getUserInfo:function(){var e=this;a.get("gUserData").then(function(t){e._openid=t.open_id})},_searchKey:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.data,a=t.placeholder,i=t.type;if(!/^搜索.+商品$/.test(a)&&!e)return this.triggerEvent("toSearch",{value:a}),void this.triggerEvent("updateSf",{sf:n});e=e.trim(),"search"==i?e&&(r.isCommandCode(e)||/^\/\/goto\s(http|https:\/\/\w+)/.test(e)?r.cmdProcessHandle(e):(this.triggerEvent("toSearch",{value:e}),this.triggerEvent("updateSf",{sf:s}))):this.triggerEvent("toSearch",{value:e})},_addMark:function(){this.data.cartMark||this.setData({cartMark:!0})},onTapSearchTag:function(){var e=this.data,t=e.key,a=e.floorKeys;this._setFocus(),a=a.map(function(e){return e.name}),this.triggerEvent("searchKeyChange",{value:t+" "+a.join(" ")})},onTapSearchDel:function(e){var t=e.currentTarget.dataset,a=t.type,r=t.name,o=t.id,s=t.value;this.triggerEvent("searchFloorKeyDete",{type:a,name:r,id:o,value:s}),(0,i.reportClick)(this.data.PtagMap.delete)},onFocus:function(){(0,i.reportClick)(this.data.PtagMap.focus)},onBlur:function(){this.triggerEvent("inputBlur")},onSearchConfirm:function(e){var t=e.detail.value;(0,i.reportClick)(this.data.PtagMap.search,{},{eparam:"2"}),this._searchKey(t)},onTapSearchBar:function(){this._setFocus()},onTapSearchBtn:function(){var e=this.data.key;if(this._isWhiteList(e))return wx.showToast({title:"Welcome back, my lord!"}),void this.helper.debounce(function(){wx.reLaunch({url:"/pages/mart/review/review"})},1e3)();(0,i.reportClick)(this.data.PtagMap.search,{},{eparam:"1"}),this._searchKey(e)},onTapSearchCancel:function(){(0,i.reportClick)(this.data.PtagMap.cancel),this.triggerEvent("searchCancel")},onSearchInput:function(e){var t=e.detail.value;this.triggerEvent("searchKeyChange",{value:t})},onTapSearchClear:function(e){var t=e.currentTarget.dataset.type;this.data.floorKeys.length>0&&"tag"==t?this.triggerEvent("toSearch",{value:""}):(this.triggerEvent("searchKeyChange",{value:""}),this._setFocus()),(0,i.reportClick)(this.data.PtagMap.clear)},onChangeMode:function(){var e=this.data,t=e.mode;"Sku"==e.currentTab&&(t=!t,this.triggerEvent("changeMode",{mode:t}),(0,i.reportClick)(this.data.PtagMap.size))},gotoCart:function(){this.$goto("/pages/cart/cart/cart","switchTab"),this.setData({cartMark:!1}),(0,i.reportClick)(this.data.PtagMap.cart)}}}); 
 			}); 	require("pages/search/components_old/search-bar/index.js");
 		__wxRoute = 'pages/search/list/list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/list/list.js';	define("pages/search/list/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e,t){var r={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r}var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},r=require("../../../common/wqvue/indexv1.2"),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(require("../../../common/recovery/search.js")),o=require("../constants/sf.js"),s=require("../common/js/base.js"),a=require("../common/js/utils.js"),n=require("./managers/ppms.manager.js"),c=require("./managers/report.manager.js"),h=require("./stores/search.store.js"),l=require("./stores/filter.store.js"),d=require("./stores/smartbox.store.js"),u=require("./stores/prelude.store.js"),f=require("./stores/interlude.store.js"),p=require("./stores/pseudo_item.store.js"),_=require("./stores/header.store.js"),v=require("./stores/shop.store.js"),y=require("./stores/float.store.js"),g=!1,m="",k=!1,T={store:function(){var e={state:{ptag:"",keyword:"",navBarData:{pageKey:"search",isShowCapsule:!1,isHalfCapsule:!0,isCustom:!0,title:"搜索",backgroundOpacity:"1"},navBarHeight:64,isSupportNav:!0,skuSwitch:{visible:!1,item:{},similar:""},overflowHide:"",hideTopArea:!1,isReady:!1,filterPanelVisible:!1,cartInfo:{canShow:!1,count:0},showBackToTop:!1},actions:{}};return[h.store,l.store,d.store,u.store,f.store,p.store,_.store,v.store,y.store].forEach(function(t){Object.assign(e.state,t.state),Object.assign(e.actions,t.actions)}),e},computed:{viewList:function(){var e=Object.assign([],this.list),t=Object.assign([],this.pseudoItem).sort(function(e,t){return e.order>t.order?-1:1});return this.pageInfo.page/this.pageInfo.span<=1&&t.length&&t.forEach(function(t){t.order<=e.length&&e.splice(t.order-1,0,t)}),e}},onLoad:function(){console.log("%c-> ","color: #dd4a68","wqvue search onLoad: ",this.$query);var e=this.$query,t={key:(0,a.decode)((e.key||"").trim())};t.darkText=e.searchname,t.service=e.service,t.price=e.price,t.brand=e.brand,t.cid1=e.cid1,t.catid=e.catid,t.sort=e.sort,t.sf=e.sf||"",t.as=e.as||"",t.mtest=e.mtest,t.ss_close=e.ss_close,t.projectId=e.projectId||"",t.hiddenid=e.hiddenid||"",t.version=e.version||"",t.sort_type=e.sort_type||"",t.filt_type=e.filt_type||"",t.expression_key=e.expression_key||"",t.multi_select=e.multi_select||"",t.qp_disable=e.qp_disable||"no",t.qp_exclude=e.qp_exclude||"",t.showtitle=e.showtitle||"",t.jd_market_sort=e.jd_market_sort||"",this.initSearch(t),this.manualJDReportPV=!0,this._meridianReport=(0,c.getMeridian)()},created_xcx:function(e){var t=this;console.log("xcx created ............",e);var r=i.getRecoveryUrl(e.key);if(r)this.$xgoto([r],{},"redirectTo");else{var o=this.createSelectorQuery().selectViewport();s.event.on("overflow-hidden",function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).hideTopArea&&(t.hideTopArea=!0),k=!0,t.$nextTick(function(){o.scrollOffset(function(e){m=e.scrollTop,(0,s.pageScrollTo)({scrollTop:0,duration:0}),t.overflowHide="overflow-hidden"}).exec()})});var a=null;s.event.on("overflow-visible",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.hideTopArea=!1,t.overflowHide="",t.$nextTick(function(){e.isRefresh&&(m=0,t._scrollHeader(0)),(0,s.pageScrollTo)({scrollTop:m,duration:0}),clearTimeout(a),a=setTimeout(function(){k=!1},100)})})}},created_vue:function(){console.log("vue created ............")},onReady:function(){g=!0},onShow:function(){},onHide:function(){(0,c.reportItemExposureToMeridian)()},onUnload:function(){console.log("wqvue search unload ............"),s.event.off("list-rendered"),s.event.off("overflow-hidden"),s.event.off("overflow-visible"),s.event.off("search-bar-active"),s.event.off("search-refresh")},isNotScrollThrottle:!0,onPageScroll:function(e){if(!k){var t=e.scrollTop;this._scrollHeader(t),t>800?!this.showBackToTop&&(this.showBackToTop=!0):this.showBackToTop&&(this.showBackToTop=!1)}},onReachBottom:function(){this._nextScrollPage()},methods:{initSearch:function(r){var i=this,o=r.key,a=void 0===o?"":o,c=r.darkText,h=e(r,["key","darkText"]);this._setKeyword(a,h),this._handleDarkText(c);var l=this._initSmartbox(a);l&&s.event.emit("overflow-hidden");var d=(0,n.initPPMS)();this._refresh(t({key:a},h),"",d).then(function(){l||i._speedInFirstSearchReady()}),this.isReady=!0},_setKeyword:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="",i="";if(a.ENV.isXcx)t.cid1?r=t.cid1:t.catid&&(r=t.catid.split("|")[0]);else{var o=t.filt_type||"";if(o&&(i=o.match(/(cid1|cid2|catid),([^;]*)/i))[2]){var s=/L(\d+)M\d+/i,n=i[2].split("||").map(function(e){var t=e.match(s);return t&&t[1]||""}).filter(function(e){return e});n.length&&(r=n[0])}}(i=e.match(/catid_str,,(\d+)/))&&(r?e="":r=i[1]||""),this._updateCategory(i||!e?r:""),this.keyword=e},_speedInHotWordReady:function(){g&&(g=!1,this.speedMark(4).speedReport())},_speedInFirstSearchReady:function(){g&&(g=!1,this.speedMark(5).speedReport())},onSetNavInfo:function(e){var t=e.detail,r=t.isSupportNav,i=t.navHeight;this.$setData({isSupportNav:r,navBarHeight:r?i:0}),(0,_.initHeader)(r)},onSearchBarActive:function(){(0,c.reportItemExposureToMeridian)(),this._showSmartbox(),this.filterPanelVisible=!1,this.skuSwitch.visible=!1,s.event.emit("search-bar-active"),s.event.emit("overflow-hidden")},onKeywordChange:function(e){this.keyword=e.detail.value||""},onVersionChange:function(e){this.searchbar.version=e.detail.version||""},onSearch:function(e){var t=e.detail,r=t.key,i=t.sf,o=t.as,a=t.projectId,n=t.pps,c=t.filter,h=void 0===c?{}:c,l=t.ptag;r&&(this.ptag=l,this._refresh({key:r,sf:i,as:o,projectId:a,pps:n,filt_type:h.filt_type,version:this.searchbar.version},"smartbox"),this._setKeyword(r),this._clearExtraKeys(),this._hideSmartbox(),s.event.emit("overflow-visible",{isRefresh:!0}))},onExtraKeyRemove:function(e){var t=e.detail.index,r=this._delExtraKey(t);if(r){if("virtual"===r.type)r.cmd="edit",r.value="";else{var i=this._getFilterItem(r.type,r.value);i&&(r.cmd="uncheck",r.id=i.id)}this._filter(r),this._filter({cmd:"confirm"})}},onHotWordReady:function(){this._speedInHotWordReady()},onChangeMode:function(){this.listMode=1==this.listMode?2:1,(0,c.reportClick)("CLICK_BAR_MODE_CHANGE",{},{eparam:(1==this.listMode?"列表":"宫格")+"_"+(3+this.extraTabs.length)+"_"+(5+this.extraTabs.length)})},onTopFilter:function(e){var t=e.detail||{};"edit"===t.cmd&&this._addExtraKey(t),this._filter(t)},onCarSearch:function(e){var t=e.detail||{},r=t.key,i=t.car_model_id;this._refresh({key:r,filt_type:"car_model_id,"+i+";"},"car-search"),this._clearExtraKeys(),this._setKeyword(r)},onCalcHeader:function(){var e=this;setTimeout(function(){e._calcHeader()},50)},onDrawAdShopCoupon:function(){this._drawAdShopCoupon()},onDrawTopCoupon:function(e){var t=e.detail||{},r=t.type,i=t.index;this._drawTopCoupon(r,i)},_filter:function(e){console.log("%c-> ","color: #dd4a68",e),this._setFilter(e),"confirm"===e.cmd&&((0,s.pageScrollTo)({scrollTop:0,duration:0}),this._scrollHeader(0),this._search({key:this.keyword,page:1}),this._reviewExtraKeys())},onFilter:function(e){var t=e.detail||{};this._filter(t)},onTab:function(e){var t=this,r=e.detail||{};this._toggleExtraTab(r),setTimeout(function(){t._calcHeader()},50)},onShowFilterPanel:function(){this.filterPanelVisible=!0},onHideFilterPanel:function(){this.filterPanelVisible=!1,s.event.emit("overflow-visible")},onPartialPanel:function(e){var t=e.detail||{};this._partialFilterPanel(t)},onStillSearch:function(){var e=o.SF_SEARCH_REPLACE;this._refresh({key:this.keyword,sf:e,qp_disable:"yes"},"noresult"),this._clearExtraKeys(),(0,c.reportClick)("CLICK_NORESULT_AUTOFIX",{status:"replace"})},onSuggestSearch:function(e){var t=e.currentTarget.dataset.key,r=o.SF_SEARCH_SUGGEST;this._refresh({key:t,sf:r},"noresult"),this._clearExtraKeys(),this._setKeyword(t),(0,c.reportClick)("CLICK_NORESULT_AUTOFIX",{status:"suggest"})},onRecommendSearch:function(e){var t=e.currentTarget.dataset,r=t.key,i=t.index,s=o.SF_SEARCH_RECOMMEND;this._refresh({key:r,sf:s},"noresult"),this._clearExtraKeys(),this._setKeyword(r),(0,c.reportClick)("CLICK_NORESULT_RECOMMAND_"+(i+1),{ss_key:this.keyword,ss_onekey:this.searchTips.key,ss_otherkey:Array.isArray(this.searchTips.others)?this.searchTips.others.join(";"):""})},onRelatedKeySearch:function(e){var t=e.currentTarget.dataset.key,r=o.SF_RELATED_WORD;this._refresh({key:t,sf:r},"noresult"),this._clearExtraKeys(),this._setKeyword(t)},onToMedicine:function(){(0,c.reportClick)("CLICK_NORESULT_TO_YIYAO"),(0,s.toMiniProgram)({appId:"wx862d8e26109609cb",path:"pages/searchlist/searchlist?name="+this.keyword})},onAddCart:function(e){var t=e.detail;this.cartInfo.count=1*t.cart.mainSkuNum||0},onRetry:function(){this._search(this.searchError.reqParams)},onShowSkuSwitch:function(e){var t=e.detail||{},r=t.item,i=t.similar;this.skuSwitch={visible:!0,item:r,similar:i}},onHideSkuSwitch:function(){this.skuSwitch.visible=!1},onMidSearch:function(e){var t=e.detail||{},r=t.cmd,i=t.key;"refresh"==r?(this._refresh({key:i}),this._clearExtraKeys()):this._search({key:i,page:1}),this.keyword=i},onMidFilter:function(e){var t=e.detail||{};"edit"===t.cmd&&this._addExtraKey(t),this._filter(t)},onPageChange:function(e){var t=(e.detail||{}).index;if(t){var r=this.pageInfo.span;this._search({key:this.keyword,page:(t-1)*r+1,isReset:!0})}},_nextScrollPage:function(){if(this.shop.visible)this._getShops(this.keyword,this.shop.page+1);else{var e=this.pageInfo.page;if(e>=this.pageInfo.pageCount)return;if(e%this.pageInfo.span==0)return;this._search({key:this.keyword,page:e+1})}},onDrawFloatCoupon:function(){this._drawFloatCoupon()},onBackToTop:function(){(0,s.pageScrollTo)({scrollTop:0,duration:0}),(0,c.reportClick)("CLICK_OTHER_BACK_TOP")},onToCart:function(){(0,s.xgoto)({xcx:"/pages/cart/cart/cart",h5:"//wqdeal.jd.com/deal/mshopcart/mycart?ptag=7092.18.4"})},onToFootprint:function(){(0,s.xgoto)({h5:"https://wqs.jd.com/search/searchfootprint.shtml?ptag=7429.6.32#level1=1"}),(0,c.reportClick)("CLICK_OTHER_TO_FOOTPRINT")},onShareAppMessage:function(){var e=this.pageInfo.resultCount||0;e>9999&&(e=(e/1e4).toFixed(1)+"万");var t=this.searchbar.category,r=t.id?t.name:this.keyword;return r&&e?this._getSearchShare(r,e):this._getIndexShare()},_getSearchShare:function(e,t){var r=e&&t?"搜索到"+t+"件“"+e+"”相关的京东优质商品":"京东购物，多·快·好·省",i=(0,l.getFilterParams)(),o=Object.assign({key:encodeURIComponent(e)},i),s=[];for(var a in o)o[a]&&s.push(a+"="+o[a]);return{title:r,path:"/pages/search/list/list"+(s.length?"?"+s.join("&"):"")}},_getIndexShare:function(){return{title:"京东购物，多·快·好·省",desc:"京东(JD.COM) - 正品低价、品质保障、配送及时、轻松购物！",path:"/pages/index/index"}}}};new r.WqVue(T); 
 			}); 	require("pages/search/list/list.js");
 		__wxRoute = 'pages/search/subPackages/filter/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/subPackages/filter/index.js';	define("pages/search/subPackages/filter/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}var t=require("../../../../bases/page.js"),i=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../libs/emitter.js")),r=require("../../path.js"),a=require("../../../../api/Ptag/Ptag_utils"),s=e(require("../../../../models/pay/address_data_model")),n=e(require("../../../../common/user_info.js")),d=require("../../components_old/filter_status_ptag.js"),o=require("../../list/managers/report.manager"),l=getApp(),c=r.Ptag;new t.JDPage({data:{virtual:[],service:[],price:{lower:"",upper:""},cate_id:"",cate_text:"",userAddress:"",userAddressID:"",addrfull:"",extendFields:[],priceIntervals:[],source:"default",total:0,totalError:!1},onLoad:function(e){var t=this,r=e.data,a=void 0===r?{}:r,s=e.service,d=e.price,o=e.catid,c=void 0===o?{}:o,h=e.extendFields,u=e.key,v=e.type,p=void 0===v?"":v,f=e.source,g=void 0===f?"default":f,x=e.virtual,m=void 0===x?[]:x,_=e.filter,y=void 0===_?{}:_,D=e.total,F=void 0===D?0:D,P=e.reportMap,I=void 0===P?{}:P;this.onConfirm=this.helper.throttle(this.onConfirm,1e3),this.onSelectAddress=this.helper.throttle(this.onSelectAddress,1e3),this.onNavtoExtend=this.helper.throttle(this.onNavtoExtend,1e3),this.onNavToCate=this.helper.throttle(this.onNavToCate,1e3),this.type=p,l.event.on("filter:cate",this.onCategoryChange.bind(this)),l.event.on("updateCheckItemDetailAddr",function(e,i){t.setData({userAddress:e.nameList.join(""),userAddressID:e.idList.join("_"),addrfull:i})}),l.event.on("updateItemDetailAddr",function(e){t.setData({userAddress:e.nameList.join(""),userAddressID:e.idList.join("_"),addrfull:e.nameList.join("")})}),l.event.on("filter:extend",this.onExtendChange.bind(this)),this.emitter=new i.default,this._events={};var A=this.events;if(A)for(var b in A)this.on(b,this[A[b]]),this._events[b]=[],this._events[b].push(this[A[b]]);if(Object.keys(a).length){var w=this._formatIntervals(a.priceIntervals,d);this.setPrice(d);var C=n.getUserAddressID(),k=n.getAddress();this.fData=a,this.service=s,this._preFilter=this.helper.deepExtend(y),this.setData({extendFields:a.extendFields,service:s,priceIntervals:w,userAddress:k.areaName.replace(/_/g,""),userAddressID:C,addrfull:k.addressName||k.areaName.replace(/_/g,""),filters:a.filter,key:u,source:g,total:F,virtual:m,type:p}),this.setCategory(c),h&&h.length>0&&this.setData({extendFields:h}),this.reportMap=I}else wx.navigateBack({delta:1})},onUnload:function(){for(var e in this._events){for(var t in this._events[e]){var i=this._events[e][t];this.emitter.off(e,i)}delete this._events[e]}l.event.off("updateCheckItemDetailAddr"),l.event.off("updateItemDetailAddr"),l.event.off("filter:extend")},emit:function(){var e;(e=this.emitter).emit.apply(e,arguments)},on:function(e,t){this.emitter.on(e,t)},onSelectAddress:function(e){var t=this,i=e.currentTarget.dataset,r=i.addressid,n=i.userAddress,d=i.addrfull;s.fetchAddressList(function(e,i){var a=i;e||0==a.length?t.$goto("/pages/item/subPackages/address/address",{addr_id_str:r}):t.$goto("/pages/search/subPackages/address/address",{addressList:a,addressid:r,userAddress:n,addrfull:d})}),a.PtagUtils.addPtag(c.SEARCH_FILTER_ADDRESS)},setPrice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t=this._transofromPrice(e),i=t.lower,r=t.upper;this.setData({"price.upper":r,"price.lower":i})}else this.setData({price:{upper:"",lower:""}})},setCategory:function(e){var t=e.id,i=void 0===t?"":t,r=e.name,a=void 0===r?"":r,s=this.fData.category;if(i){if(!a){var n=!0,d=!1,o=void 0;try{e:for(var l,c=s[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var h=l.value;if(h.id==i){a=h.name;break}var u=!0,v=!1,p=void 0;try{for(var f,g=h.childs[Symbol.iterator]();!(u=(f=g.next()).done);u=!0){var x=f.value;if(x.id==i){a=x.name;break e}}}catch(e){v=!0,p=e}finally{try{!u&&g.return&&g.return()}finally{if(v)throw p}}}}catch(e){d=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(d)throw o}}}this.setData({cate_id:i,cate_text:a}),this.updateExtend()}else this.setData({cate_id:"",cate_text:""})},getPriceResult:function(){var e=this.data.price||{},t=e.lower,i=e.upper;if(!t&&!i)return"";if(t&&i&&t>i){var r=[i,t];t=r[0],i=r[1],this.data.price.lower=t,this.data.price.upper=i}var a="";return i&&(a+="L"+i),t&&(a+="M"+t),a},onCategoryChange:function(e){this.setCategory(e);var t=this.data.extendFields;this.setData({extendFields:t})},onExtendChange:function(e){"search"==this.type&&this.updateExtend({extendFields:e}),this.setData({extendFields:e})},onNavToCate:function(e){if(d.FilterStatusPtag.reportServicePtag("分类",this.data.source,"btnNameList"),Array.isArray(this.fData.category)&&this.fData.category.length>0)return this.$goto("/pages/search/subPackages/category/category",{list:this.fData.category,id:this.data.cate_id});wx.showToast({icon:"none",title:"无更多分类可选"})},updateExtend:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this.data,r=i.key,a=i.cate_id,s=i.cate_text,n=i.extendFields,d=i.virtual,o=this.getPriceResult(),l=Object.assign({extendFields:n,service:this.service,catid:{id:a,name:s},price:o,virtual:d},t);this.getSearchLinkage(r,l).then(function(i){var r=i.total,a={};if(t&&t.extendFields&&(a.extendFields=t.extendFields),void 0===r)return a.totalError=!0,e.setData(a);0===parseInt(r)&&wx.showToast({title:"抱歉，暂无合适结果，请适当缩少筛选项再尝试",icon:"none"}),a.total=r,e.setData(a)})},onCheckValueItem:function(e){var t=e.currentTarget.dataset,i=t.itemIndex,r=t.valueitemIndex,a=this.data.extendFields.concat(),s=a[i].valueitem,n=a[i].selected,d=s[r];if(0==n.length)n.push(s[r]);else{var o=n.findIndex(function(e){return e.valuename==d.valuename});-1==o?n.push(d):a[i].selected=n.slice(0,o).concat(n.slice(o+1,n.length))}a[i].selected.length>6&&(this.toast.show({icon:this.toast.ICON.WARNING,content:"最多可选6个"}),a[i].selected.pop()),this.onExtendChange(a)},onNavtoExtend:function(e){var t=e.currentTarget.dataset,i=t.title,r=t.list,a=t.index,s=t.type,n=this.data.extendFields;!n[a].isTap&&n[a].selected.length>0?(JSON.parse(JSON.stringify(n))[a].selected=[],this.$goto("/pages/search/subPackages/brand/brand",{list:n[a].valueitem,extendFields:n,index:a,type:s})):this.$goto("/pages/search/subPackages/brand/brand",{title:i,list:r,extendFields:n,index:a,type:s})},_transofromPrice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e)return{};var t=/(L(\d+))?(M(\d+))?/,i=void 0,r=void 0,a=e.match(t);return void 0!==a[2]&&(i=Number(a[2])),void 0!==a[4]&&(r=Number(a[4])),r<=0&&(r=null),{lower:r,upper:i}},_formatIntervals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!Array.isArray(e))return[];var i=this._transofromPrice(t),r=i.lower,a=i.upper,s=e.filter(function(e){return!(e.start<=0)&&(0!=e.percent&&(e.active=!1,e))}).splice(0,3),n=s.findIndex(function(e){return e.start==r&&e.end==a});return n>=0&&s[n]&&(s[n].active=!0),s},onTapInterval:function(e){var t=e.detail,i=t.price,r=t.intervals;this.setData({price:i,priceIntervals:r}),"search"==this.type&&this.updateExtend({price:this.getPriceResult(i)})},onInputPrice:function(e){var t=e.detail,i=t.price,r=void 0===i?{}:i,a=t.intervals;r.upper||0===r.upper||(r.upper=""),r.lower||0===r.lower||(r.lower=""),this.setData({price:r,priceIntervals:a}),this.updateExtend()},onFilterPanel:function(e){var t=e.detail.service;this.service=t,"search"==this.type&&this.updateExtend({service:t})},triggerFilter:function(){var e=this.data,t=e.cate_id,i=e.cate_text,r=e.extendFields,a=e.virtual,s=this.service,n=this.getPriceResult(),d={service:s||[],catid:{id:t,name:i},extendFields:r,price:n,virtual:a};this.$pages=getCurrentPages(),this.$pages.length>1&&(this.$prev=this.$pages[this.$pages.length-2]);try{this.$prev.emit("search:filter",d,!1,!0,this._preFilter)}catch(e){console.error(e)}},onConfirm:function(e){this.triggerFilter(),wx.navigateBack({delta:1}),d.FilterStatusPtag.reportServicePtag("确定",this.data.source,"btnNameList"),(0,o.reportClick)(this.reportMap.confirm)},onReset:function(){var e=this;if("search"==this.type){var t=this.data,i=t.key,r=t.priceIntervals.map(function(e){return e.active=!1,e});this.service=[];var a={service:[],catid:{id:"",name:""},extendFields:[],price:{upper:"",lower:""}};this.getSearchLinkage(i,a).then(function(t){var i=t.comonList,a=t.cid2List,s=t.total;e.fData.category=a,i.forEach(function(e){"品牌"==e.expandsortname&&(e.valueitem=e.valueitem.slice(0,100))}),e.setData({total:s,service:[],price:{upper:"",lower:""},cate_id:"",cate_text:"",extendFields:i.filter(function(e){return e}).slice(0,10),priceIntervals:r})})}else{var s=this.data.extendFields;s.forEach(function(e){e.selected=[]}),this.service=[],this.setData({service:[],price:{upper:"",lower:""},cate_id:"",cate_text:"",brand_list:[],size_list:[],color_list:[],brand_text:"",size_text:"",color_text:"",extendFields:s})}d.FilterStatusPtag.reportServicePtag("重置",this.data.source,"btnNameList"),(0,o.reportClick)(this.reportMap.reset)},getSearchLinkage:function(e,t){return new Promise(function(i,a){r.searchResult.getSearchLinkage(e,t,function(e,t){return e?a(e):i(t)})})}}); 
 			}); 	require("pages/search/subPackages/filter/index.js");
 		__wxRoute = 'pages/search/subPackages/category/category';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/subPackages/category/category.js';	define("pages/search/subPackages/category/category.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=require("../../../../bases/page.js"),a=require("../../path.js"),e=getApp();new t.JDPage({data:{active_cate:"",sub_cate:"",list:[]},onLoad:function(t){var e=t.list,i=void 0===e?[]:e,s=t.id,n=void 0===s?"":s;i.length?(this.setList(i,n),wx.setNavigationBarTitle({title:"分类"}),this.PtagConstants=a.Ptag):wx.navigateBack({delta:1})},setList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments[1];a?t=t.map(function(t){return t.active=!!t.childs.find(function(t){return t.id==a}),t}):t[0]&&(t[0].active=!0),this.setData({sub_cate:a,list:t})},onTapCate:function(t){var a=t.currentTarget.dataset.id,e=this.data.list;e=e.map(function(t){return t.id==a?t.active=!t.active:t.active=!1,t}),this.setData({list:e})},onTapSubCate:function(t){var a=t.currentTarget.dataset,i=a.id,s=a.name;if(this.$report("FILTER_SERVICE_DEFAULT_IN_CHECK"),this.data.sub_cate==i)return wx.navigateBack({delta:1});this.$pages=getCurrentPages(),e.event.emit("filter:cate",{id:i,name:s}),this.setData({sub_cate:i}),wx.navigateBack({delta:1})}}); 
 			}); 	require("pages/search/subPackages/category/category.js");
 		__wxRoute = 'pages/search/subPackages/brand/brand';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/subPackages/brand/brand.js';	define("pages/search/subPackages/brand/brand.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var e=require("../../../../bases/page.js"),s=require("../../path.js"),i=getApp();new e.JDPage({data:{max:6,selected:[],selected_text:"",list:[],letterList:[],extendFields:[],extendIdx:0,type:"brand",modType:0,top:0,curLetter:"",displayLetter:""},onLoad:function(t){var e=t.title,i=void 0===e?"":e,n=t.list,a=void 0===n?[]:n,r=t.extendFields,l=void 0===r?[]:r,d=t.type,o=void 0===d?"brand":d,c=t.index;this.PtagConstants=s.Ptag,this._letterPos={},a.length?(this.index=c,this.initSelectedExtendList(a,l,o,c),wx.setNavigationBarTitle({title:i}),this.bindscroll=this.helper.throttle(this.bindscroll,200),/(iPhone|iPad|iPod|iOS)/i.test(getApp().systemInfo.system)||(this.bindscroll=this.helper.debounce(this.bindscroll,200)),this.isEexcScroll=!0):wx.navigateBack({delta:1})},onTapFilterMode:function(t){var e=t.currentTarget.dataset.type;this.setData({modType:e,top:0})},onTapLetter:function(t){var e=this,s=t.currentTarget.dataset.letter,i=this._letterPos[s].pos;this.isEexcScroll=!1,this.setData({curLetter:s,top:i},this.helper.debounce(function(){e.isEexcScroll=!0},500))},bindscroll:function(t){var e=this,s=this.data.letterList,i=t.detail.scrollTop,n=void 0;Object.keys(this._letterPos).some(function(t){if(e._letterPos[t].pos>i)return!0;n=t}),i<10&&Array.isArray(s)&&(n=s[0]);var a={displayLetter:n};this.isEexcScroll&&(a.curLetter=n),this.setData(a)},initSelectedExtendList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=this,i=arguments[2],n=arguments[3],a=[],r=[];e[n].selected.forEach(function(t){a.push(t.valuename)});var l={list:t=t.map(function(t){var e={text:t.valuename,id:t.valueid,selected:-1!=a.findIndex(function(e){return e==t.valuename})};return"brand"==i&&(r.push(t.letter),e.letter=t.letter),e}),type:i,extendFields:e,extendIdx:n};if("brand"==i){var d=0;(r=Array.from(new Set(r)).sort()).map(function(e,i){s._letterPos[e]={items:[],len:0},t.map(function(t){e==t.letter&&s._letterPos[e].items.push(t)}),s._letterPos[e].len=s._letterPos[e].items.length,s._letterPos[e].pos=45*d+32*i,d+=s._letterPos[e].items.length}),Object.assign(l,{letterList:r,curLetter:r[0],displayLetter:r[0]})}this.setData(l),this.setSelectedList()},onTapItem:function(e){var s=e.currentTarget.dataset,i=s.idx,n=s.status,a=this.data,r=a.list,l=a.selected,d=a.max,o=a.type,c=a.extendIdx,h=a.extendFields,u="个";switch(o){case"brand":u="个品牌";break;case"size":u="种尺码/尺寸";break;case"color":u="种颜色"}if(!r[i].selected&&l.length>=d||h.length>0&&h[c].selected.length>d)this.toast.show({icon:this.toast.ICON.WARNING,content:"最多选"+d+u+"哦"});else{this.setData(t({},"list["+i+"].selected",!r[i].selected));var p=this.data.list;h[c].selected=[],p.forEach(function(t){t.selected&&h[c].selected.push({valuename:t.text,valueid:t.id})}),this.setData({extendFields:h}),0==n&&"ext"==o?this.$report("SEARCH_TAB_EXTEND_CHECKED"):this.$report("SEARCH_TAB_EXTEND_CANCEL"),this.setSelectedList()}},setSelectedList:function(){var t=this.data.list.filter(function(t){return t.selected}).map(function(t){return t.text});this.setData({selected:t,selected_text:t.join("，")})},onConfirm:function(){var t=this.data.extendFields;this.$pages=getCurrentPages(),this.$pages.length>1&&(this.$prev=this.$pages[this.$pages.length-2]),i.event.emit("filter:extend",t),this.$report("SEARCH_TAB_EXTEND_CONFRIM"),wx.navigateBack({delta:1})},onReset:function(){var t=this.data,e=t.list,s=t.extendFields;s[this.index].selected=[],e.forEach(function(t){t.selected=!1}),this.setData({list:e,extendFields:s}),this.setSelectedList()}}); 
 			}); 	require("pages/search/subPackages/brand/brand.js");
 		__wxRoute = 'pages/search/subPackages/address/address';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/subPackages/address/address.js';	define("pages/search/subPackages/address/address.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../api/Ptag/Ptag_utils.js"),a=require("../../../../bases/page.js"),d=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(a[d]=e[d]);return a.default=e,a}(require("../../../../common/user_info.js")),t=require("../../path.js").Ptag;new a.JDPage({data:{addressList:[],addrInfo:{name:"",mobile:"",detail:"",label:"",myLabel:"",inputLabel:""},isShowAddressAddTagMod:!1,editId:0,addAddrFlag:!1,oldMobile:"",checkedId:0},onLoad:function(e){var a=e.addressList,d=e.addressid,t=e.addrfull,s={},r=[];a.forEach(function(e){s.hasOwnProperty(e.addrfull)||(s[e.addrfull]=e,r.push(e))}),s=null,(a=r).forEach(function(e){e.addrfull==t?e.checked=!0:e.checked=!1}),this.setData({addressList:a,addressid:d})},checkAddress:function(a){e.PtagUtils.addPtag(t.CONFIRM_CHECK_ADDRESS_TIMES);var s=a.currentTarget.dataset.index,r=this.data.addressList;r.forEach(function(e){e.checked=!1}),r[s].checked=!0,this.setData({addressList:r});var i=[r[s].provinceName,r[s].cityName,r[s].countyName,r[s].townName].filter(function(e){return e}),n={complete:!0,idList:[r[s].provinceId,r[s].cityId,r[s].countyId,r[s].townId].filter(function(e){return e}),nameList:i},c=r[s],o=c.addrfull,l=c.type,u=c.latitude,f=c.longitude;getApp().event.emit("updateCheckItemDetailAddr",n,o);var h=n.idList.slice(),g=n.nameList.slice();d.updateAddress({areaId:h.join("_"),areaName:g.join("_"),addressName:o,coordinate:l+","+f+","+u}),e.PtagUtils.addPtag(t.SEARCH_FILTER_ADDRESS_SELECT),this.helper.debounce(function(){wx.navigateBack({delta:1})},200)()},selectAddress:function(){var a=this.data.addressid;e.PtagUtils.addPtag(t.SEARCH_FILTER_ADDRESS_EDITSELECT),this.$goto("/pages/item/subPackages/address/address",{addr_id_str:a,type:"search_address"})}}); 
 			}); 	require("pages/search/subPackages/address/address.js");
 		__wxRoute = 'pages/search/subPackages/sales/sales';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/subPackages/sales/sales.js';	define("pages/search/subPackages/sales/sales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},i=function(){function t(t,e){var i=[],s=!0,a=!1,r=void 0;try{for(var n,o=t[Symbol.iterator]();!(s=(n=o.next()).done)&&(i.push(n.value),!e||i.length!==e);s=!0);}catch(t){a=!0,r=t}finally{try{!s&&o.return&&o.return()}finally{if(a)throw r}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=require("../../../../bases/page.js"),a=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../libs/emitter.js")),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(require("../../models_old/search_sales.js")),n=require("../../list/managers/report.manager.js"),o=require("../../path.js"),c=require("../../list_old/sopMark.js"),l=require("../../../../common/utils"),h=require("../../../../common/fe_report/speed");new s.JDPage({model:function(){return{keyInfo:{value:"",isSearch:!1},actived:{status:"default",exec:!1},isTapFilter:{status:!1,exec:!1},hasFilter:!1,isReachBottom:!1,isHiddenSubtotal:!0,isFocus:{status:!1,exec:!1},scrollData:{scrollTop:0},isfilterSortFixed:!1,addMark:{status:!1,exec:!1},reportInfo:{ss_mtest:"",ss_hccid1s:"",ss_hccid2s:"",ss_hccid3s:""}}},data:{navBarData:{pageKey:"search_sale",isShowCapsule:!0,isCustom:!1,title:"促销搜索"},loading:!0,cartTotal:{},promoType:0,prevParams:{},tips:"",filterSortPtagMap:{default:"CLICK_SP_BAR_DEFAULT",sale:"CLICK_SP_BAR_SALE",price_asc:"CLICK_SP_BAR_PRICE_ASC",price_desc:"CLICK_SP_BAR_PRICE_DESC",filter:"CLICK_SP_BAR_FILTER"},searchBarPtagMap:{focus:"CLICK_SP_SMARTBOX_FOCUS",search:"CLICK_SP_SMARTBOX_SEARCH",cancel:"CLICK_SP_SMARTBOX_CANCEL",cart:"CLICK_SP_SMARTBOX_CART",delete:"CLICK_SP_SMARTBOX_DELETE",clear:"CLICK_SP_SMARTBOX_DELETE"},max_page:1,max_screen:1,list:[],mode:!1,pageArray:[],_last_visited:"",_item_index:0,_status:"normal",_showRelative:!1,_max_page_screen:10,_pageIndex:0,_loadPage:1,_isDisplayPage:!1,showBack:!1,errCode:""},onLoad:function(t){var e=this;this.pageSize=this.getPageSize(),this.emitter=new a.default,this._events={};var i=this.events;if(i)for(var s in i)this.on(s,this[i[s]]),this._events[s]=[],this._events[s].push(this[i[s]]);this.initSearch(t),this._filter={},this._filterData={},this._priceTagObj={},this._apiLock=!0,this.PtagConstants=o.Ptag,getApp().event.on("updataSalesSubTotalView",function(t){e.setData({cartTotal:t})}),this.manualJDReportPV=!0,this._meridianReport=(0,n.getMeridian)(),(0,n.initMeridian)({pageId:"JDS_PromSearch",pparam:t.actId||"",url:"http://wq.jd.com/wxapp/pages/search/subPackages/sales/sales"}).pv()},onShow:function(){this.getcartView(this.data.prevParams)},onReady:function(){this.speedMark(3).speedReport(),this._initPageIndex=1,this.tempListData=[],this._scroll_top=0,this.onTapGoodsItem=this.helper.throttle(this.onTapGoodsItem,1e3),this.onPickerChange=this.helper.throttle(this.onPickerChange,300),this.onPageScroll=this.helper.throttle(this.onPageScroll,100),this.emitter.on("search:filter",this.onFilter.bind(this))},onUnload:function(){for(var t in this._events){for(var e in this._events[t]){var i=this._events[t][e];this.emitter.off(t,i)}delete this._events[t]}getApp().event.off("updataSalesSubTotalView")},emit:function(){var t;(t=this.emitter).emit.apply(t,arguments)},on:function(t,e){this.emitter.on(t,e)},initSearch:function(t){var e=this,i=t.actId,s=t.tips,a=t.key,r=void 0===a?"":a,n=t.service,o=t.price,c=t.catid,l=t.brand;i||this.setNoResult();var h=r.trim(),u={};c&&(u.catid=c),n&&(u.service=n.split(",")),o&&(u.price=o),l&&(u.brand=l.split(",")),0==Object.keys(u).length&&(u={}),this._initFilter=u;var d={loading:!1,key:r,actId:i,"keyInfo.value":h,prevParams:t};s&&(d.tips=s),this.setData(d,function(){e.searchKey()})},getcartView:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.actId)return this.setData({promoType:-1});r.getGiftInit(e.actId).then(function(i){t.setData({cartTotal:i}),t.setSubtotalStatus(e)}).catch(function(e){t.setData({promoType:-1})})},updateCartView:function(){var t=this,e=this.data.actId,i=this._cartViewId,s=[i,"","1",i,"1","0","0"].join(",");r.getGiftData(e,s).then(function(e){t.toast.show({icon:t.toast.ICON.SUCCESS,content:"添加成功"}),t.setData({cartTotal:e})}).catch(function(e){t.toast.show({icon:t.toast.ICON.INFO,content:e.errMsg||"添加失败"}),t.setData({promoType:-1})})},setSubtotalStatus:function(t){var e=t.promoType,i=void 0===e?"":e;""!==i?this.setData({promoType:i}):this.setData({promoType:-1})},onPageScroll:function(t){var e=t.scrollTop,i=e>800,s=e>=0;this.hasOwnProperty("__showBack")||(this.__showBack=i),this.hasOwnProperty("__isfilterSortFixed")||(this.__isfilterSortFixed=s),i==this.__showBack&&s==this.__isfilterSortFixed||(this.__showBack=i,this.__isfilterSortFixed=s,this.setData({showBack:i,isfilterSortFixed:s}))},onReachBottom:function(){this._apiLock&&this.onScrollToLower()},onScrollToLower:function(){if(!this.data._showRelative){var t=this.data,e=t.max_page,i=t._max_page_screen,s=t._loadPage,a=t.list;a.length!=i&&e!=(s-1)*i+a.length&&(this._initPageIndex+=1,this.getSearchList(this.key,{page:this._initPageIndex,tag:!0}))}},onPickerChange:function(t){var e=this.data,i=e._pageIndex,s=e._loadPage,a=e.max_screen,r=e._max_page_screen,n=t.currentTarget.dataset.type;if("change"==n)i=t.detail.value*r,s=t.detail.value-0+1;else if("prev"==n){if(1==s)return;i=((s-=1)-1)*r}else if("next"==n){if(a==s)return;i=((s+=1)-1)*r}this._initPageIndex=i+1;var o=[];this.tempListData[s-1]&&this.tempListData[s-1].length>0&&(o=this.tempListData[s-1],this.onBack2Top()),this.setData({_pageIndex:i,_loadPage:s,list:o}),o.length>0||this.getSearchList(this.key,{page:i+1,tag:!0},this.onBack2Top)},getPageSize:function(){if(/(iPhone|iPad|iPod|iOS)/i.test(getApp().systemInfo),!this._pageSize){var t=getApp();/(iPhone|iPad|iPod|iOS)/i.test(t.systemInfo.system)?this._pageSize="wifi"==t.networkType?20:10:this._pageSize=10}return this._pageSize},onRetrySearch:function(){this.setData({_status:"loading"});var t={page:this.data.list.length+1,filtered:{}};Object.keys(this._filterData).length||(t.isFirstLoad=!0),this.getSearchList(this.key,t)},gotoFilter:function(){var t=this._filterData||{},e=this._filter||{};Object.keys(t).length&&this.$goto("/pages/search/subPackages/filter/index",{data:t,service:e.service,extendFields:e.extendFields,catid:e.catid||{},price:e.price,key:this.key,source:"sales",reportMap:{confirm:"CLICK_SP_FILTER_CONFIRM",reset:"CLICK_SP_FILTER_RESET"}})},changeSort:function(t){this.sort=t,this.getSearchList(this.key,{isFirstLoad:!0},this.onBack2Top)},onFilter:function(t){t=JSON.parse(JSON.stringify(t));var e=this._filter.cateItems;this._filter=t,this._filter.cateItems=e,this.getSearchList(this.key,{isFirstLoad:!0},this.onBack2Top)},searchKey:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this._initFilter||{};this.key=t,this._filter=this.helper.deepExtend(e),this._filter.hasOwnProperty("service")||(this._filter.service=[]),this._filter.service.findIndex(function(t){return"有货优先"==t}),this._filterData={},this.sort="default",this.getSearchList(t,{isFirstLoad:!0},this.onBack2Top)},getFilterItem:function(){var t=this.data.actId;return new Promise(function(e,i){o.searchCoupon.getFilterData({activity_id:t},function(t,s){return t?i(t):e(s)})})},getSearchList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.key,e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments[2],a=this.pageSize,r=this.sort||"default",n=this.data.reportInfo,o=i.isFirstLoad;i.page||this.reset();var c=this._filter||{};this.setFilterStyle(c),i=Object.assign({sortType:r,size:a},c,i),this.apiLock=!1;var l=Date.now();this.getSearchData(t,i).then(function(t){var a=t.mtest,r=void 0===a?"":a,c=t.HcCid1s,u=void 0===c?"":c,d=t.HcCid2s,f=void 0===d?"":d,p=t.HcCid3s,g=void 0===p?"":p;e.apiLock=!0;var _=Date.now();h.Speed.reportAlone(1251,{s4:Date.now()-l});var m={_isDisplayPage:!1};if(!t.itemList.length&&!i.hasOwnProperty("tag"))return e.setNoResult(),o&&e.setFilterData(t),m=Object.assign(m,{max_page:1,max_screen:1}),void e.setData(m);o&&(e.setFilterData(t),m=Object.assign(m,{reportInfo:Object.assign(n,{ss_mtest:r,ss_hccid1s:u.join(";"),ss_hccid2s:f.join(";"),ss_hccid3s:g.join(";")})})),m=Object.assign(m,{_status:"normal"}),e.setData(m),e.setSearchList(t,_,o),s&&s.call(e,"goTop")},function(t){e.apiLock=!0,e.showError(t)})},setFilterData:function(){var t=this,e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).filter;this.getFilterItem().then(function(i){var s=i.comonList,a=void 0===s?[]:s,r=i.cid2List,n=void 0===r?[]:r;t._filter.hasOwnProperty("cateItems")||(t._filter.cateItems=n,t._filter.catid={}),t._filterData={extendFields:a.filter(function(t){return t}).slice(0,10),category:t._filter.cateItems,filter:e}})},setSearchList:function(e,s,a){var r=e.itemList,n=e.pageCount,o=e.pageIndex,l=e.resultCount,u=e.isPlusMember,d=this,f=[],p=void 0,g=this.data,_=g._max_page_screen,m=g._loadPage;if(a){if(0==r.length&&0==o)return void this.setData(t({max_page:+n},"list[0]",[]));this._total=+l;for(var v=1,S=p=Math.ceil(+n/_);v<=S;v++)f.push("第"+v+"页")}var P=[],y=[],C=r.map(function(t,e){var s=[],a=t.isbjp;1==(void 0===a?0:a)&&(s=["保健食品"]),P.push(t.wareid);var r=(0,c.sopMark)(t),n=r.commentPrefix,l=r.titlePrefix,h=r.priceTags,f=void 0===h?[]:h,p=r.yuYue;d._priceTagObj[t.wareid]=f,p&&y.push(t.wareid);var g=!1,_=!1;t.cid1&&13314==t.cid1&&(g=!0),t.catid&&15294==t.catid&&(_=!0);var m=!0;0==o&&e<6&&(m=!1);var v=!(1==t.isPlusLimit&&!u||1==t.plusVender&&!u),S={id:t.wareid,img:d.helper.getImg(t.imageurl,240),title:t.Content.warename,price:t.dredisprice.split("."),comments:t.commentcount-0>=1e4?Math.floor((t.commentcount-0)/1e4)+"万":t.commentcount-0,favourable:t.good+"%",tempCommentPrefix:n,priceAffix:[],titlePrefix:l,wareWeight:t.wareWeight,lowestbuy:t.lowestbuy,isjx:t.productext&&0!=(8388608&t.productext),isFsku:t.isFsku,lazyLoad:m,isRecipe:g,isSign:_,isVideo:t.is_video,attrs:s,showCart:v};t.secKill&&(S.secKill=t.secKill.status);var C=!0,x=!1,w=void 0;try{for(var I,L=Object.entries(S)[Symbol.iterator]();!(C=(I=L.next()).done);C=!0){var T=i(I.value,2),k=T[0];T[1]||delete S[k]}}catch(t){x=!0,w=t}finally{try{!C&&L.return&&L.return()}finally{if(x)throw w}}return S}),x=t({},"list["+(o=o-1-(m-1)*_)+"]",C);p&&(x.max_screen=p,x.max_page=+n),f.length>0&&(x.pageArray=f),this.tempListData[m-1]||(this.tempListData[m-1]=[]),this.tempListData[m-1].push(C),this.setData(x,function(){h.Speed.reportAlone(1251,{s5:Date.now()-s})}),this.getGoodsListDetails(P,o+1,y)},getGoodsListDetails:function(e,s,a){var r=this;Promise.all([this.getStockPriceList(e),this.getCommentsList(e),this.getYuYueTag(a),this.getYuYueHiddenPrice(a)]).then(function(e){var a=i(e,4),n=a[0],o=n.stock,l=void 0===o?{}:o,h=n.price,u=void 0===h?{}:h,d=a[1],f=a[2],p=a[3],g=r.data.list[s-1],_=[];g.length>0&&g.forEach(function(t){if(l[t.id]){var e=l[t.id].status;/无货/.test(e)?t.stock="无货":/预订/.test(e)?f[t.id]||(f[t.id]="预订"):t.lowestbuy>1&&!t.isFsku?e>0&&e<t.lowestbuy?t.stock="库存不足":t.stock=t.lowestbuy+"件起售":e>0&&e<=5&&(t.stock="仅剩"+e+"件")}var i=(0,c.priceTagHandle)(r._priceTagObj[t.id],u[t.id]);if(i["PLUS价"].flag&&(t.tempCommentPrefix=t.tempCommentPrefix.filter(function(t){return"plus专属95折"!=t.name})),t.commentPrefix=t.tempCommentPrefix.slice(0,2),delete t.tempCommentPrefix,t.secKill&&1==t.secKill&&(i["秒杀"].flag=!0),i["sku直搜"].flag?t.priceAffix=[i["sku直搜"]]:t.priceAffix=Object.values(i).map(function(t){if(t.flag)return t}).filter(function(t){return t}).slice(0,2),u[t.id]&&(t.price=u[t.id].p.split(".")),f[t.id]&&(t.yuYue=f[t.id].split("|")),p[t.id]&&(t.yuYueHiddenPrice=!0,t.yuYueHiddenPriceText="待发布"),d[t.id]){var s=d[t.id].split("_");t.comments=s[0]>=1e4?Math.floor(s[0]/1e4)+"万":s[0],t.favourable=s[1]}t.wareWeight&&l[t.id]&&_.push(t.id+"|"+t.wareWeight+"|"+l[t.id].d+"|"+l[t.id].e)}),r.getLocalStoreList(_).then(function(e){g.forEach(function(t){if(-1!=e.findIndex(function(e){return e==t.id})){var i="//img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png",s=(0,c.getJfsImgSize)(i);t.commentPrefix.push({src:i,size:s}),t.commentPrefix=t.commentPrefix.slice(0,2)}}),r.setData(t({_isDisplayPage:!0},"list["+(s-1)+"]",g))})})},getSearchData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1],i=this.data.actId,s=Object.assign({},e,{keyword:t,activity_id:i});return new Promise(function(t,e){o.searchCoupon.getSearchResult(s,function(i,s){return i?e(i):t(s)})})},getCommentsList:function(t){return new Promise(function(e,i){t&&0==t.length?e([]):o.searchResult.getComments(t,function(t,i){return e(t?[]:i)})})},getNewMcossTag:function(t){return new Promise(function(e,i){t&&0==t.length?e({}):o.searchResult.getNewMcossTag(t,function(t,i){return e(t?{}:i)})})},getYuYueTag:function(t){return new Promise(function(e,i){t&&0==t.length?e({}):o.searchResult.getYuYueTag(t,function(t,i){return e(t?{}:i)})})},getYuYueHiddenPrice:function(t){return 0==t.length?{}:new Promise(function(e,i){o.searchResult.getYuYueHiddenPirce(t).then(function(t){e(t)}).catch(function(t){e({})})})},getStockPriceList:function(t){return new Promise(function(e,i){if(t&&0==t.length)return e({});o.searchResult.getStockPrice(t,function(t,i){return t&&e({}),e(i)})})},getLocalStoreList:function(t){return new Promise(function(e,i){t&&0==t.length?e([]):o.searchResult.getLocalStore(t,function(t,i){return t&&e([]),e(i)})})},setNoResult:function(){var t={_status:"empty"};this._total=0,this.isFiltered||(t._showRelative=!0),this.setData(t)},onTapGoodsItem:function(t){var i=t.currentTarget.dataset,s=i.page,a=i.index,r=i.yuyue,o=i.recipe,c=i.sign,l=i.isjx,h=this.data.list[s][a],u=h.id,d=h.img,f=h.title,p=h.price,g=h.isPingou,_=this.data.reportInfo;this.setData({_last_visited:u});var m=e({sf:0,skuid:u,pos:a+1,hasPvReport:!0},_);(0,n.reportClick)("CLICK_SP_ITEM",m,{eparam:u+"_"+(s*this.pageSize+a)}),this.$goto("/pages/item/detail/detail",{sku:u,cover:d,name:f,price:p.join(".")},{isPingou:g,isJx:l,useH5:r&&"预售"==r[0]||o||c})},addToCart:function(t){var e=t.currentTarget.dataset,i=e.id,s=e.page,a=e.index;this._cartViewId=i,this.setData({addMark:{status:!0,exec:!0}}),this.updateCartView(),(0,n.reportClick)("CLICK_SP_ITEM_CART",{},{eparam:i+"_"+(s*this.pageSize+a)})},showError:function(t){var e=t.code,i=void 0===e?"":e;this.setData({_status:"error",errCode:i})},reset:function(){this.tempListData=[],this._initPageIndex=1,this._scroll_top=0,this.setData({_pageIndex:0,_loadPage:1,_last_visited:null,_status:"loading",_showRelative:!1,list:[]})},onBack2Top:function(t){this._scroll_top=0,wx.pageScrollTo({scrollTop:0}),"goTop"!=t&&(0,n.reportClick)("CLICK_SP_OTHER_BACK_TOP")},actions:{updateHiddenSubtotal:function(t){var e=t.detail.isHiddenSubtotal;this.setData({isHiddenSubtotal:e})},onToSearch:function(t){var e=t.detail.value;this.setData({keyInfo:{value:e,isSearch:!0},isFocus:{status:!1,exec:!1}}),this.searchKey(e)},onSearchKeyChange:function(t){var e=t.detail.value;this.setData({keyInfo:{value:e,isSearch:!1}})},onInputFocus:function(t){var e=t.detail.isFocus.status;this.setData({isFocus:{status:e,exec:!1}})},onSortEvent:function(t){var e=this,i=t.detail.actived,s=void 0;s="isTapFilter"in t.detail?t.detail.isTapFilter:{status:!1,exec:!1},this.setData({actived:i,isTapFilter:s},function(){i.exec&&e.changeSort(i.status),s.exec&&e.gotoFilter()})},setFilterStyle:function(t){var e=Object.assign({service:[],price:"",extendFields:[],catid:{}},t),i=e.service,s=e.price,a=e.extendFields,r=e.catid;if((0,l.isObject)(t)&&Object.keys(t).length){var n=!!Array.isArray(a)&&a.some(function(t){return Array.isArray(t.selected)&&t.selected.length>0}),o=!!(i.length||s||n||r.id);this.setData({hasFilter:o})}}}}); 
 			}); 	require("pages/search/subPackages/sales/sales.js");
 		__wxRoute = 'pages/search/subPackages/coupon/coupon';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/subPackages/coupon/coupon.js';	define("pages/search/subPackages/coupon/coupon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var e=function(){function t(t,e){var i=[],a=!0,s=!1,r=void 0;try{for(var n,o=t[Symbol.iterator]();!(a=(n=o.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){s=!0,r=t}finally{try{!a&&o.return&&o.return()}finally{if(s)throw r}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},a=require("../../../../bases/page.js"),s=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../libs/emitter.js")),r=require("../../path.js"),n=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(require("../../../../common/fe_helper.js")),o=require("../../list/managers/report.manager.js"),c=require("../../list_old/sopMark.js"),h=require("./api.js"),u=require("./compute"),l=require("../../../../common/fe_report/speed"),_=require("../../../../common/utils"),d={default:"CLICK_SC_BAR_DEFAULT",sale:"CLICK_SC_BAR_SALE",price_asc:"CLICK_SC_BAR_PRICE_ASC",price_desc:"CLICK_SC_BAR_PRICE_DESC",filter:"CLICK_SC_BAR_FILTER"},p={cart:"CLICK_SC_SMARTBOX_CART",focus:"CLICK_SC_SMARTBOX_FOCUS",search:"CLICK_SC_SMARTBOX_SEARCH",cancel:"CLICK_SC_SMARTBOX_CANCEL",delete:"CLICK_SC_SMARTBOX_DELETE",clear:"CLICK_SC_SMARTBOX_DELETE"},f={close:"CLICK_SC_COUNT_CLOSE",check:"CLICK_SC_COUNT_CHECKED",uncheck:"CLICK_SC_COUNT_UNCHECKED",fold:"CLICK_SC_COUNT_FOLD",unfold:"CLICK_SC_COUNT_UNFOLD",cart:"CLICK_SC_COUNT_CART",pay:"CLICK_SC_COUNT_PAY",apay:"CLICK_SC_COUNT_APAY",back:"CLICK_SC_COUNT_BACK",oversea:"CLICK_SC_COUNT_OVERSEA",normal:"CLICK_SC_COUNT_NORMAL"};new a.JDPage({model:function(){return{hasFilter:!1,isFilterSortFixed:!1,from:"",keyInfo:{value:"",isSearch:!1},addMark:{status:!1,exec:!1},isFocus:{status:!1,exec:!1},isInitCart:{status:!1,exec:!1},actived:{status:"default",exec:!1},reportInfo:{ss_mtest:"",ss_hccid1s:"",ss_hccid2s:"",ss_hccid3s:""}}},data:{navBarData:{pageKey:"search_coupon",isShowCapsule:!0,isCustom:!1,title:"券购搜索"},tips:"",venderId:"",loading:!1,expired:!0,isZheKou:!1,showBack:!1,zheKouInfo:[],zheKouObj:{quota:0,discount:0},discountInfo:{quota:0,discount:0},max_page:1,max_screen:1,list:[],pageArray:[],isFinished:!1,errCode:"",_last_visited:"",_status:"normal",_currentScreen:1,_isDisplayPage:!1,MAX_PAGE_SCREEN:10,SEARCH_BAR_PTAG:p,FILTER_SORT_PTAG:d,COUPON_COUNT_PTAG:f},onReady:function(){this.speedReport()},onLoad:function(t){var e=this.events;if(this._events={},this.emitter=new s.default,this._filter={},this._filterData={},this._apiLock=!0,this._currentPage=1,this._priceTagObj={},this.tempListData=[],this.PtagConstants=r.Ptag,this.pageSize=this._getPageSize(),this.emitter.on("search:filter",this.onFilter.bind(this)),e)for(var i in e)this.on(i,this[e[i]]),this._events[i]=[],this._events[i].push(this[e[i]]);var a=n.getServerTime(),c=t.endTime||0;a>=(t.startTime||0)&&a<c&&this.setData({expired:!1}),this.initSearch(t),this.manualJDReportPV=!0,this._meridianReport=(0,o.getMeridian)(),(0,o.initMeridian)({pageId:"JDS_CoupSearch",pparam:t.batch||"",url:"http://wq.jd.com/wxapp/pages/search/subPackages/coupon/coupon"}).pv()},onUnload:function(){for(var t in this._events){for(var e in this._events[t]){var i=this._events[t][e];this.emitter.off(t,i)}delete this._events[t]}},onReachBottom:function(){this._apiLock||this.onScrollToLower()},emit:function(){var t;(t=this.emitter).emit.apply(t,arguments)},on:function(t,e){this.emitter.on(t,e)},initSearch:function(t){var e=t.batch,i=t.kind,a=t.key,s=void 0===a?"":a,r=t.service,n=t.price,o=t.catid,c=t.brand,h=t.from;if(!e)return wx.navigateBack({delta:1});var u={batch:e};this.getTips(e,i);var l=s.trim();h&&(u.from=h),i&&(u.kind=i),l&&(u["keyInfo.value"]=l);var _={};o&&(_.catid=o),n&&(_.price=n),r&&(_.service=r.split(",")),c&&(_.brand=c.split(",")),this.searchKey(l,{coupon_kind:i,coupon_batch:e}),this.setData(u)},getTips:function(t){var e=this;r.searchCoupon.getCouponInfo(t).then(function(t){var a=(0,u.handleTip)(t),s=a.tips,r=a.state;e.setData(i({tips:s},r))})},_getPageSize:function(){var t=getApp();return/(iPhone|iPad|iPod|iOS)/i.test(t.systemInfo.system)&&"wifi"==t.networkType?20:10},onTapGoodsItem:n.throttle(function(t){var e=t.currentTarget.dataset,a=e.page,s=e.index,r=this.data.list[a][s],n=r.id,c=r.isPingou,h=r.img,u=r.title,l=r.price,_=r.isjx,d=r.yuyue,p=r.recipe,f=r.sign,C=this.data.reportInfo;this.setData({_last_visited:n});var g={isPingou:c,isJx:_,useH5:d&&"预售"==d[0]||p||f},v=i({sf:0,skuid:n,pos:s+1,hasPvReport:!0},C);this.$gotoItem({sku:n,cover:h,name:u,price:l.join("."),isCouponSearch:!0},g),(0,o.reportClick)("CLICK_SC_ITEM",v,{eparam:n+"_"+(a*this.pageSize+s)})},1e3),addToCart:function(t){var e=this,i=t.currentTarget.dataset,a=i.id,s=i.page,r=i.index;this.biz.couponAddCart({skuId:a}).then(function(){e.toast.show({icon:e.toast.ICON.SUCCESS,content:"添加成功"});var t={addMark:{status:!0,exec:!0},isInitCart:{status:!0,exec:!0}};e.setData(t)},function(t){e.toast.show({icon:e.toast.ICON.INFO,content:t||"添加失败"})}),(0,o.reportClick)("CLICK_SC_ITEM_CART",{},{eparam:a+"_"+(s*this.pageSize+r)})},getGoodsListDetails:function(a,s,r){var n=this,o=Date.now();Promise.all([(0,h.getStockPriceList)(a),(0,h.getExtraSkuInfo)(a,r)]).then(function(a){var r=e(a,2),_=r[0],d=_.stock,p=void 0===d?{}:d,f=_.price,C=void 0===f?{}:f,g=r[1];if(l.Speed.reportAlone(1250,{s6:Date.now()-o}),!g||0!=Object.keys(g).length){var v=n.data.list[s];if(Array.isArray(v)&&0!=v.length){var S=(0,u.handleExtraSkuInfo)(v,i({stock:p,price:C},g),{priceTagObj:n._priceTagObj}),m=S.list,I=S.skuInfo,L=S.priceTagObj;n._priceTagObj=L,(0,h.getLocalStoreList)(I).then(function(e){m.forEach(function(t){if(-1!=e.findIndex(function(e){return e==t.id})){var i="//img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png",a=(0,c.getJfsImgSize)(i);t.commentPrefix.push({src:i,size:a}),t.commentPrefix=t.commentPrefix.slice(0,2)}}),n.setData(t({},"list["+s+"]",m))})}}})},setSearchList:function(t,e){var i=this,a=t.itemList,s=t.pageCount,r=t.pageIndex,n=t.isPlusMember;s=parseInt(s),r=parseInt(r);var o=this.data,c=o._currentScreen,h=o.MAX_PAGE_SCREEN,_=(0,u.handleSkuList)(a,r,{priceTagObj:this._priceTagObj,isPlusMember:n}),d=_.list,p=_.skuIds,f=_.yuYueSkuIds,C=_.priceTagObj;if(this._priceTagObj=C,0!=d.length||0!=r){var g={max_page:s},v=this.data.list.some(function(t){return!t}),S=this.data.list.map(function(t){return t||[]});v?(S[r-1]=d,g.list=S):g["list["+(r=r-1-(c-1)*h)+"]"]=d,this.getGoodsListDetails(p,r,f);var m=c-1;this.tempListData[m]?this.tempListData[m].push(d):this.tempListData[m]=[d],this.setData(g,function(){i.setData({_isDisplayPage:!0}),l.Speed.reportAlone(1250,{s5:Date.now()-e})})}else this.setData({"list[0]":d,max_page:s})},setFilterData:function(){var t=this,e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).filter,i=this.data.batch;(0,h.getFilterItem)(i).then(function(i){var a=i.comonList,s=void 0===a?[]:a,r=i.cid2List,n=void 0===r?[]:r;t._filter.hasOwnProperty("cateItems")||(t._filter.cateItems=n,t._filter.catid={}),t._filterData={extendFields:s.filter(function(t){return t}).slice(0,10),category:t._filter.cateItems,filter:e}})},getSearchList:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments[2],s={_status:"loading",_isDisplayPage:!1},r=this.data,n=r.MAX_PAGE_SCREEN,o=r.batch,c=r.kind,u=r.reportInfo,_=i.isFirstLoad,d=this.pageSize,p=this.sort||"default";_&&(this._filterData={},this.tempListData=[],s=Object.assign(s,{list:[],isFinished:!1,_currentScreen:1})),this.setData(s);var f=this._filter||{};i=Object.assign({sortType:p,size:d},f,i),this._apiLock=!0;var C=Date.now();(0,h.getSearchData)(t,o,c,i).then(function(t){var s=t.pageCount,r=t.pageIndex,o=t.mtest,c=void 0===o?"":o,h=t.HcCid1s,d=void 0===h?"":h,p=t.HcCid2s,f=void 0===p?"":p,g=t.HcCid3s,v=void 0===g?"":g;e._currentPage=e._currentPage+1;var S=Date.now();l.Speed.reportAlone(1250,{s4:S-C}),e.speedMark(4);var m={_isDisplayPage:!1};if(_&&e.setFilterData(t),e._apiLock=!1,!t.itemList.length&&!i.hasOwnProperty("tag"))return e.setNoResult(),e._apiLock=!0,m=Object.assign(m,{max_page:1,max_screen:1}),void e.setData(m);if(s==r&&(e._apiLock=!0,m.isFinished=!0),_){for(var I=[],L=Math.ceil(parseInt(s)/n),T=1;T<=L;T++)I.push("第"+T+"页");(m=Object.assign(m,{pageArray:I,max_screen:L,reportInfo:Object.assign(u,{ss_mtest:c,ss_hccid1s:d.join(";"),ss_hccid2s:f.join(";"),ss_hccid3s:v.join(";")})})).pageArray=I,m.max_screen=L}m.status="normal",e.setData(m),e.setSearchList(t,S),a&&a.call(e,"goTop")},function(t){e._apiLock=!1,e.showError(t)})},setNoResult:function(){this.setData({_status:"empty"})},showError:function(t){var e=t.code,i=void 0===e?"":e;this.setData({_status:"error",errCode:i})},searchKey:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.data.keyInfo.value,a=void 0===i?"":i;this._filter={},this._currentPage=1;var s=t||a,r=Object.assign(e,{isFirstLoad:!0});this.setData({hasFilter:!1}),this.getSearchList(s,r,this.onBack2Top)},_getIsFilter:function(t){var e=Object.assign({service:[],price:"",extendFields:[],catid:{}},t),i=e.service,a=e.price,s=e.extendFields,r=e.catid;if((0,_.isObject)(t)&&Object.keys(t).length){var n=!!Array.isArray(s)&&s.some(function(t){return Array.isArray(t.selected)&&t.selected.length>0});return!!(i.length||a||n||r.id)}},gotoFilter:function(){var t=this._filterData||{},e=this._filter||{};Object.keys(t).length&&this.$goto("/pages/search/subPackages/filter/index",{data:t,service:e.service||[],extendFields:e.extendFields,catid:e.catid||{},price:e.price,key:this.data.keyInfo.value||"",source:"coupon",reportMap:{confirm:"CLICK_SC_FILTER_CONFIRM",reset:"CLICK_SC_FILTER_RESET"}})},onPickerChange:n.throttle(function(t){var e=this.data,i=e.max_page,a=e.MAX_PAGE_SCREEN,s=e._currentScreen,r=this._currentPage,n=t.detail.value,o=t.currentTarget.dataset.type;if(n=parseInt(n),"change"==o)s=n+1,r=n*a+1;else if("prev"==o){if(r<=1)return;r=((s-=1)-1)*a+1}else if("next"==o){if(r>i)return;r=s*a+1,s+=1}this._currentPage=r;var c=[],h=s-1;this.tempListData[h]&&this.tempListData[h].length>0&&(c=this.tempListData[h],this.onBack2Top()),this.setData({list:c,_currentScreen:s}),c.length>0?this._apiLock=!0:this.getSearchList(this.data.keyInfo.value,{tag:!0,page:this._currentPage},this.onBack2Top)},300),onScrollToLower:function(){var t=this.data,e=t.list,i=t.MAX_PAGE_SCREEN,a=t.keyInfo.value,s=this._currentPage;e.length!=i&&this.getSearchList(a,{tag:!0,page:s})},onPageScroll:n.debounce(function(t){var e=t.scrollTop,i=this.data,a=i.showBack,s=i.isFilterSortFixed,r=e>800,n=e>=47,o={};r!=a&&(o.showBack=r),n!=s&&(o.isFilterSortFixed=n),0!=Object.keys(o).length&&this.setData(o)},100),onRetrySearch:function(){this.setData({_status:"loading"});var t={page:this.data.list.length+1,filtered:{}};Object.keys(this._filterData).length||(t.isFirstLoad=!0),this.getSearchList(this.data.keyInfo.value,t)},onFilter:function(t){var e=this._filter.cateItems;this._filter=this.helper.deepExtend(t),this._filter.cateItems=e,this._currentPage=1,this.setData({hasFilter:this._getIsFilter(t)}),this.getSearchList(this.data.keyInfo.value,{isFirstLoad:!0},this.onBack2Top)},onBack2Top:function(t){wx.pageScrollTo({scrollTop:0}),"goTop"!=t&&(0,o.reportClick)("CLICK_SC_OTHER_BACK_TOP")},actions:{onAddMark:function(t){var e=t.detail.addMark;this.setData({addMark:e})},onReachBottomEvent:function(t){var e=t.detail.isReachBottom;this.setData({isReachBottom:e})},onToSearch:function(t){var e=t.detail.value;this.setData({keyInfo:{value:e,isSearch:!0},isFocus:{status:!1,exec:!1}}),this.searchKey(e)},onSearchKeyChange:function(t){var e=t.detail.value;this.setData({keyInfo:{value:e,isSearch:!1}})},onInputFocus:function(t){var e=t.detail.isFocus.status;this.setData({isFocus:{status:e,exec:!1}})},onChangeSort:function(t){var e=t.detail,i=e.actived,a=e.isTapFilter;if((void 0===a?{}:a).exec)return this.gotoFilter();this.sort=i.status,this._currentPage=1,this.setData({actived:i}),i.exec&&this.getSearchList(this.data.keyInfo.value,{isFirstLoad:!0},this.onBack2Top)}}}); 
 			}); 	require("pages/search/subPackages/coupon/coupon.js");
 		__wxRoute = 'pages/search/subPackages/exchange/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/subPackages/exchange/index.js';	define("pages/search/subPackages/exchange/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){e.toast.show({content:t.errMsg||t.errmsg||"网络错误",icon:e.toast.ICON.WARNING})}var e=require("../../path.js"),i=require("../../list/managers/report.manager.js"),o=getApp().debug("满件换购");new e.JDPage({data:{navBarData:{pageKey:"exchange",isShowCapsule:!0,isCustom:!1,title:"换购商品"},sku:{id:0,img:"",name:""},loading:!0,pageCount:0,pageIndex:1,isInCart:!1,categoryId:0,itemList:[],categoryList:[],checkGoodsCount:0,checkGoodsSum:0,checkGoodsList:[],showLayer:!1},onLoad:function(t){var o=t.activityId,a=t.from,c=void 0===a?"":a,s=t.name,r=void 0===s?"":s,n=t.img,d=void 0===n?"":n,h=t.skuId,u=void 0===h?0:h;this.activityId=o,this.from=c,this.setData({sku:{name:r,img:d,id:u}}),this._checkGoodsList=[],this.init(),e.helper.throttle(this.addToCart.bind(this),1e3),e.helper.throttle(this.switchCategory.bind(this),500),this.manualJDReportPV=!0,this._meridianReport=(0,i.getMeridian)(),(0,i.initMeridian)({pageId:"JDS_ProExchange",pparam:o||"",url:"http://wq.jd.com/wxapp/pages/search/subPackages/exchange/index"}).pv()},onShow:function(){(0,i.reportExposure)("EXPOSE_EX_PAGE")},fetchCategoryData:function(t){var i={activity_id:t};return new Promise(function(t,o){e.searchCoupon.getFilterData(i,function(e,i){e?o(e):t(i)})})},fetchGoodsListData:function(t,i,o,a){var c={activity_id:t,page:i,catid:{id:o},isFirstLoad:a};return new Promise(function(t,i){e.searchCoupon.getSearchResult(c,function(e,o){e?i(e):t(o)})})},popSuccModal:function(){var t=this,i=this.data,o=i.isInCart,a=i.checkGoodsCount,c=i.sku,s=void 0;"cart"!==this.from?(s=o?{title:"换购成功",content:a+"件换购商品已加入购物车",confirmColor:"#E93B3D",confirmText:"去购物车",showCancel:!0,cancelText:"返回商品详情",success:function(){t.$goto("/pages/cart/cart/cart")},fail:function(){wx.navigateBack()}}:{sku:c,checkGoodsCount:a,title:"换购成功",content:"",align:"left",confirmColor:"#E93B3D",confirmText:"去购物车",showCancel:!0,cancelText:"返回商品详情",success:function(){t.$goto("/pages/cart/cart/cart")},fail:function(){wx.navigateBack()}},e.Modal.show(s)):wx.navigateBack()},addToCart:function(){var t=this,o=this.data,a=o.sku,c=o.checkGoodsList,s=[],r=0==a.id?"":a.id;c.forEach(function(t){s.push(t.wareid)}),(0,i.reportClick)("CLICK_EX_SUBMIT",{},{eparam:s.join("#")}),s.length?e.searchCoupon.hgAddCart(r,s,function(i,o){if(i){var a=i.errMsg?i.errMsg:"加车失败";e.toast.show({icon:e.toast.ICON.WARNING,content:a+"（"+i.errCode+"）",page:t})}else o&&t.popSuccModal()}):"cart"===this.from?(0==this._checkGoodsList.length&&wx.navigateBack(),e.searchCoupon.rmvCmdy(this._checkGoodsList,this.activityId,function(t,e){t||0==e.errId&&(wx.navigateBack(),getApp().event.emit("cartrefresh"))})):e.toast.show({icon:e.toast.ICON.WARNING,content:"请选择换购商品",page:this})},showLayer:function(t){if(t){if(t.currentTarget.dataset.count>0){var o=this.data.showLayer;this.setData({showLayer:!o}),e.PtagUtils.addPtag(e.Ptag.CART_MH_SELECTION),(0,i.reportClick)("CLICK_EX_COUNT_MODAL_SHOW")}}else{var a=this.data.showLayer;this.setData({showLayer:!a})}},init:function(e){var i=this,o=this.data,a=o.pageIndex,c=o.sku,s=this.activityId;0===c.id?(this.cartView("",s).then(function(){i.getGoodsList(a,"",!0,!0)}).catch(function(e){t(e)}),this.setData({isInCart:!0})):this.cartView(c.id,s).then(function(){i.getGoodsList(a,"",!0,!0)}).catch(function(t){wx.showModal({title:"提示",content:"对不起，暂无可换购商品",showCancel:!1,confirmText:"返回",confirmColor:"#e93b3d",success:function(t){wx.navigateBack()}})})},cartView:function(t,i){var o=this;return new Promise(function(a,c){e.searchCoupon.getCartview(t,i,function(i,s){if(!i){var r=!t||s.isInCart,n=s.giftSkus,d=o.data,h=d.checkGoodsList,u=d.checkGoodsSum,p=d.checkGoodsCount;return n.forEach(function(t){var i=void 0;i=t.promoPrice!=t.price,h.push({showDredisprice:i,warename:t.name,imageurl:e.helper.getImg(t.image),wareid:t.id,dredisprice:+t.price/100,eredisprice:(+t.promoPrice/100).toFixed(2).split("."),price:(+t.promoPrice/100).toFixed(2),checked:!0}),u+=Number((+t.promoPrice/100).toFixed(2))}),p=h.length,u=parseFloat(u).toFixed(2),o.setData({isInCart:r,checkGoodsList:h,checkGoodsSum:u,checkGoodsCount:p}),a()}return c(i)})})},checkGift:function(t){var e=this.data.checkGoodsList;this._checkGoodsList=e.map(function(t){return t.wareid}),t.forEach(function(t){e.forEach(function(e){t.wareid===e.wareid&&(t.checked=!0)})})},getGoodsList:function(t,i,a,c){var s=this,r=this.activityId;this.getGoodFlag=!0,this.fetchGoodsListData(r,t,i,c).then(function(i){var c;if(o("【满件换购】fetchGoodsListData",i),1==t&&s.setData({loading:!1}),s.getGoodFlag=!1,i.cid2List&&i.cid2List.length){var r=i.cid2List[0].childs;r.unshift({id:0,name:"全部"}),s.categoryList=r,s.setData({categoryList:r})}var n=+i.pageCount,d=[],h=[],u=s.data.itemList;a&&(u=[]),t++,i.itemList.forEach(function(t){h.push(t.wareid);var i=void 0;t.eredisprice=Number(t.eredisprice||0).toFixed(2),i=!(t.dredisprice<=t.eredisprice),+t.dredisprice<=0&&(t.dredisprice=""),+t.eredisprice<=0&&(t.eredisprice="暂无定价"),d.push({showDredisprice:i,warename:t.Content.warename,imageurl:e.helper.getImg(t.Content.imageurl),wareid:t.wareid,dredisprice:t.dredisprice,eredisprice:t.eredisprice.split("."),price:Number(t.eredisprice),checked:!1,stock:!0})}),s.checkGift(d),(c=u).push.apply(c,d),s.setData({itemList:u,pageCount:n,pageIndex:t});try{h.length&&e.searchResult.getStockPrice(h,function(t,e){if(e){var i=e.stock,o=void 0===i?{}:i,a=e.price,c=void 0===a?{}:a;u.forEach(function(t){"无货"==o[t.wareid].status&&(t.stock=!1),c[t.wareid]&&(t.dredisprice=c[t.wareid].p,t.showDredisprice=t.dredisprice>t.price)}),s.setData({itemList:u})}})}catch(t){console.log(t)}}).catch(function(i){1==t&&s.setData({loading:!1}),e.toast.show({icon:e.toast.ICON.WARNING,content:i.errMsg||"网络错误，请稍后重试~"}),console.log("【满件换购】fetchGoodsListData",i)})},onScrollBottom:function(){var t=this.data,e=t.pageIndex,i=t.pageCount,o=t.categoryId;e>i||this.getGoodFlag||this.getGoodsList(e,o)},switchCategory:function(t){var e=t.currentTarget.dataset,o=e.id,a=e.name,c=0==o;this.setData({categoryId:o}),this.getGoodsList(1,c?"":o,!0,c),(0,i.reportClick)("CLICK_EX_CATEGORY",{},{eparam:a})},checkGoods:function(t){var e=t.currentTarget.dataset,o=e.checked,a=e.idx;if(e.stock){var c=this.data,s=c.itemList,r=c.checkGoodsCount,n=c.checkGoodsSum,d=c.checkGoodsList;s[a].checked=!o,n=+n;var h=s[a].wareid;if(o){r--,n-=s[a].price||0;for(var u=void 0,p=0,g=d.length;p<g;p++)if(d[p].wareid===h){u=p;break}d.splice(u,1)}else r++,n+=s[a].price||0,d.push(s[a]);n=parseFloat(n).toFixed(2),this.setData({itemList:s,checkGoodsCount:r,checkGoodsSum:n,checkGoodsList:d}),(0,i.reportClick)("CLICK_EX_ITEM_TOGGLE",{},{eparam:(o?"1":"0")+"_"+h})}},comfirm:function(t){"close"===(t.currentTarget.dataset||{}).type?(0,i.reportClick)("CLICK_EX_COUNT_MODAL_HIDE"):(0,i.reportClick)("CLICK_EX_COUNT_MODAL_CONFIRM"),this.showLayer();var e=this.data.checkGoodsList;e=e.filter(function(t){return t.checked}),this.setData({checkGoodsList:e})},checkGoodsWithList:function(t){var e=t.currentTarget.dataset.idx,o=this.data,a=o.itemList,c=o.checkGoodsList,s=o.checkGoodsSum,r=o.checkGoodsCount,n=!c[e].checked;c[e].checked=n,s=+s;var d=c[e].wareid;n?(r++,s+=+c[e].price):(r--,s-=+c[e].price);for(var h=0,u=0,p=a.length;u<p;u++)if(a[u].wareid===d){h=u;break}a[h].checked=n,s=parseFloat(s).toFixed(2),this.setData({itemList:a,checkGoodsCount:r,checkGoodsSum:s,checkGoodsList:c}),(0,i.reportClick)("CLICK_EX_COUNT_MODAL_TOGGLE",{},{eparam:(n?"0":"1")+"_"+d})}}); 
 			}); 	require("pages/search/subPackages/exchange/index.js");
 	