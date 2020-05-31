/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx12=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx12:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx12 || [];
function gz$gwx12_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_1)return __WXML_GLOBAL__.ops_cached.$gwx12_1
__WXML_GLOBAL__.ops_cached.$gwx12_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[7],[3,'isSupportNav']],[[7],[3,'customNavbarData']]],[[6],[[7],[3,'customNavbarData']],[3,'pageKey']]])
Z([3,'onNavBack'])
Z([3,'setNavbarInfo'])
Z(z[1])
Z([[7],[3,'customNavbarData']])
Z([[6],[[7],[3,'flags']],[3,'isJxScene']])
Z([[6],[[7],[3,'flags']],[3,'showJxSearchBar']])
Z([3,'jx-header__search'])
Z([3,'background: rgba(247, 247, 247 , .6)'])
Z([3,'3'])
Z([3,'搜索全站商品'])
Z([3,'7418.31.6'])
Z([[6],[[7],[3,'detail']],[3,'skuId']])
Z([[2,'?:'],[[2,'||'],[[6],[[7],[3,'flags']],[3,'showJxSearchBarFirseScreen']],[[2,'!='],[[7],[3,'cpart']],[1,'main']]],[1,''],[[2,'+'],[[2,'+'],[[2,'+'],[1,'opacity:'],[[6],[[7],[3,'customNavbarData']],[3,'backgroundOpacity']]],[1,';']],[[2,'?:'],[[2,'<'],[[6],[[7],[3,'customNavbarData']],[3,'backgroundOpacity']],[1,0.1]],[1,'pointer-events: none;'],[1,'']]]])
Z([[6],[[7],[3,'flags']],[3,'showSearchBar']])
Z([[7],[3,'navTabs']])
Z([3,'dtype'])
Z([[6],[[7],[3,'item']],[3,'show']])
Z([[2,'||'],[[6],[[7],[3,'flags']],[3,'showSearchBar']],[[6],[[7],[3,'flags']],[3,'isJxScene']]])
Z(z[15])
Z(z[16])
Z(z[17])
Z([a,[3,'wrapper '],[[2,'?:'],[[6],[[7],[3,'flags']],[3,'isJxScene']],[1,'pingou_style'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pgxcx'],[1,'']]])
Z([[6],[[7],[3,'flags']],[3,'showSkeletonScreen']])
Z([[7],[3,'defaultImg']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'firstScreenImage']],[[6],[[6],[[7],[3,'detail']],[3,'firstScreenImage']],[1,0]]])
Z([[7],[3,'isSupportNav']])
Z([[6],[[7],[3,'detail']],[3,'firstScreenPrice']])
Z([[6],[[7],[3,'detail']],[3,'skuName']])
Z([[7],[3,'windowHeight']])
Z([[2,'?:'],[[6],[[7],[3,'flags']],[3,'forbidScrollFlag']],[1,'noscroll'],[1,'']])
Z([a,[3,'height: '],[[2,'?:'],[[6],[[7],[3,'flags']],[3,'forbidScrollFlag']],[[7],[3,'windowHeight']],[1,'auto;']],z[22][3],[[2,'?:'],[[6],[[7],[3,'flags']],[3,'showSkeletonScreen']],[1,'display:none;'],[1,'']]])
Z([3,'wrapper item_detail'])
Z([3,'part_main'])
Z([a,[[2,'?:'],[[2,'!='],[[7],[3,'scrollTop']],[1,'0px']],[[2,'+'],[[2,'+'],[1,'top:'],[[7],[3,'scrollTop']]],[1,';']],[1,'']],z[22][3],[[2,'?:'],[[2,'&&'],[[2,'!='],[[7],[3,'cpart']],[1,'main']],[[2,'!'],[[7],[3,'cpartChanging']]]],[1,'display: none;'],[1,'']]])
Z([[2,'&&'],[[6],[[7],[3,'flags']],[3,'showSearchBar']],[[7],[3,'isNotchScreen']]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'flags']],[3,'showPingouBtnFlag']],[[7],[3,'navHeightGot']]],[[2,'||'],[[6],[[7],[3,'flags']],[3,'showCoverImgFlag']],[[6],[[7],[3,'flags']],[3,'scrollUnderMainImgFlag']]]])
Z([[7],[3,'pgappLauchConfigParam']])
Z([3,'launch-pgapp'])
Z([[2,'?:'],[[7],[3,'itemNavBaseTop']],[[2,'+'],[[7],[3,'itemNavBaseTop']],[1,'rpx']],[1,'98rpx']])
Z([[7],[3,'triggerLaunchErrorCount']])
Z([[6],[[7],[3,'detail']],[3,'isPingou']])
Z([[7],[3,'klCopyConfig']])
Z([[7],[3,'klCopyConfigParam']])
Z(z[38])
Z([[7],[3,'triggerKlDownloadGuideCount']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'flags']],[3,'showAppFlag']],[[7],[3,'navHeightGot']]],[[2,'||'],[[6],[[7],[3,'flags']],[3,'showCoverImgFlag']],[[6],[[7],[3,'flags']],[3,'scrollUnderMainImgFlag']]]])
Z([[7],[3,'launchBarAniFlag']])
Z([3,'launchAppError'])
Z([[2,'||'],[[6],[[7],[3,'detail']],[3,'skuId']],[[7],[3,'skuId']]])
Z(z[39])
Z([[6],[[7],[3,'flags']],[3,'ylToCustomerServiceFlag']])
Z([[6],[[7],[3,'flags']],[3,'showAppFlag']])
Z(z[48])
Z(z[49])
Z(z[51])
Z([[2,'!'],[[7],[3,'isPingouXcx']]])
Z([[7],[3,'imkParam']])
Z(z[40])
Z([[6],[[7],[3,'detail']],[3,'isNormalItem']])
Z([3,'item'])
Z([[2,'!'],[[7],[3,'isSupportNav']]])
Z([3,'handleNavTabClick'])
Z([3,'handleShareBtnClick'])
Z([[7],[3,'navCur']])
Z([[6],[[7],[3,'flags']],[3,'showCoverImgFlag']])
Z(z[15])
Z([[6],[[7],[3,'bigPromoteInfo']],[3,'rightupImg']])
Z([[2,'?:'],[[2,'||'],[[6],[[7],[3,'flags']],[3,'showAppFlag']],[[6],[[7],[3,'flags']],[3,'showPingouBtnFlag']]],[[2,'?:'],[[7],[3,'itemNavBaseTop']],[[2,'+'],[[2,'+'],[[7],[3,'itemNavBaseTop']],[1,80]],[1,'rpx']],[1,'178rpx']],[[2,'+'],[[2,'-'],[[2,'+'],[[2,'*'],[[7],[3,'navHeight']],[1,2]],[1,20]],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'flags']],[3,'showSearchBar']],[[7],[3,'isNotchScreen']]],[[7],[3,'statusBarHeight']]],[[2,'*'],[[7],[3,'statusBarHeight']],[1,2]],[1,0]]],[1,'rpx']]])
Z([3,'changeCpart'])
Z([3,'handleSuyuanIconClick'])
Z([3,'onJxLiveClose'])
Z([3,'showDialog'])
Z([3,'showVideoToast'])
Z([3,'updateVideoStatus'])
Z([3,'Jrolling'])
Z(z[24])
Z([[7],[3,'focusSlideObj']])
Z([[6],[[7],[3,'commonVideo']],[3,'show']])
Z(z[78])
Z([3,'navItem'])
Z(z[26])
Z([[7],[3,'jxLive']])
Z([[2,'||'],[[2,'!'],[[6],[[7],[3,'flags']],[3,'keepSameLiveVideo']]],[[6],[[7],[3,'commonVideo']],[3,'show']]])
Z([[2,'?:'],[[2,'||'],[[6],[[7],[3,'flags']],[3,'showAppFlag']],[[6],[[7],[3,'flags']],[3,'showPingouBtnFlag']]],[[2,'+'],[[2,'+'],[[7],[3,'itemNavBaseTop']],[1,80]],[1,'rpx']],[1,'250rpx']])
Z([[6],[[7],[3,'flags']],[3,'scrollUnderMainImgFlag']])
Z([3,'handleChangeSku'])
Z([[6],[[7],[3,'detail']],[3,'clothesColor']])
Z(z[41])
Z([[6],[[7],[3,'detail']],[3,'jdCategory']])
Z(z[59])
Z([[6],[[7],[3,'addressData']],[3,'areaId']])
Z([[7],[3,'atmosProcessType']])
Z([3,'handleCountDownOver'])
Z(z[70])
Z([3,'initSpecialAtmosData'])
Z([3,'refreshPostPromo'])
Z([3,'updateAtmosType'])
Z([3,'updateBeltInfo'])
Z([[6],[[7],[3,'detail']],[3,'maskSkuConfig']])
Z([[7],[3,'pageHideCount']])
Z([[7],[3,'pageShowCount']])
Z([[7],[3,'bigPromoteInfo']])
Z([[7],[3,'bannerAtmosphereObj']])
Z([[7],[3,'specialProcess']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isPingou']],[[2,'||'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'pgBanner']],[[2,'>'],[[6],[[6],[[7],[3,'detail']],[3,'pgBanner']],[3,'flag']],[1,0]]],[[2,'&&'],[[7],[3,'bigPromoteInfo']],[[2,'||'],[[6],[[7],[3,'bigPromoteInfo']],[3,'bannerImg']],[[6],[[7],[3,'bigPromoteInfo']],[3,'bannerImgWithPrice']]]]]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'recm_tuan_info']]],[[6],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'recm_tuan_info']],[3,'pingou_member_count']]])
Z([[6],[[7],[3,'detail']],[3,'afterDiscountPrice']])
Z(z[102])
Z(z[93])
Z([3,'showGwfxTips'])
Z([[6],[[7],[3,'detail']],[3,'fanxian']])
Z(z[100])
Z(z[101])
Z([[6],[[7],[3,'detail']],[3,'pgBanner']])
Z([[6],[[7],[3,'detail']],[3,'pingouInfo']])
Z([3,'xlist'])
Z([3,'xlist_group radius_bottom'])
Z([3,'common_margin_left'])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[2,'!'],[[7],[3,'isSpecialProcess']]]])
Z([3,'price-cnt common_padding_right'])
Z([3,'price-cnt__fl'])
Z([3,'price-area'])
Z([3,'updateSfpArrowLeft'])
Z([1,true])
Z([[7],[3,'itemPriceObj']])
Z(z[124])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'flags']],[3,'showWXSearchFlag']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[2,'!'],[[6],[[7],[3,'flags']],[3,'showWXSearchFlag']]]],[[6],[[7],[3,'flags']],[3,'showGwfxInfoFlag']]],[[6],[[7],[3,'detail']],[3,'gwfxInfo']]],[[6],[[6],[[7],[3,'detail']],[3,'gwfxInfo']],[3,'returnMoney']]])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'flags']],[3,'showGwfxTipsFlag']]],[[6],[[6],[[7],[3,'detail']],[3,'gwfxInfo']],[3,'rulesContent']]])
Z([3,'operating-area'])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'jdCategory']],[[6],[[7],[3,'flags']],[3,'showDropNoticeFlag']]],[[2,'!'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'wxappType']],[1,1]],[[7],[3,'itemPriceObj']]],[[6],[[7],[3,'itemPriceObj']],[3,'priceObj']]],[[6],[[6],[[7],[3,'itemPriceObj']],[3,'priceObj']],[3,'priorityPrice']]]]])
Z([[6],[[7],[3,'flags']],[3,'showFamilyListEnterFlag']])
Z([[6],[[7],[3,'detail']],[3,'isInFamilyList']])
Z(z[12])
Z(z[130])
Z([[7],[3,'favourObj']])
Z(z[5])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isSpecialProcess']]],[[6],[[7],[3,'detail']],[3,'venderId']]],[[6],[[7],[3,'detail']],[3,'sfpShopName']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'itemPriceObj']],[[6],[[7],[3,'itemPriceObj']],[3,'priceObj']]],[[6],[[6],[[7],[3,'itemPriceObj']],[3,'priceObj']],[3,'sfpPrice']]],[[2,'=='],[[6],[[6],[[7],[3,'itemPriceObj']],[3,'priceObj']],[3,'priorityPrice']],[1,'sfpPrice']]],[[2,'!'],[[7],[3,'shopFavStatus']]]])
Z([[2,'>'],[[7],[3,'sfpArrowLeft']],[1,0]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isSpecialProcess']]],[[2,'!'],[[6],[[7],[3,'flags']],[3,'showWXSearchFlag']]]],[[6],[[7],[3,'flags']],[3,'showGwfxInfoFlag']]],[[6],[[7],[3,'flags']],[3,'showGwfxTipsFlag']]])
Z([3,'gwfx-info'])
Z([[6],[[6],[[7],[3,'detail']],[3,'gwfxInfo']],[3,'rulesContent']])
Z([[6],[[6],[[7],[3,'detail']],[3,'gwfxInfo']],[3,'peopleTotalStr']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'detail']],[3,'isLoc']]],[[2,'!'],[[6],[[7],[3,'detail']],[3,'locAddCartDirect']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'itemPriceObj']],[[6],[[7],[3,'itemPriceObj']],[3,'priceObj']]],[[6],[[6],[[7],[3,'itemPriceObj']],[3,'priceObj']],[3,'nupPrice']]],[[2,'=='],[[6],[[6],[[7],[3,'itemPriceObj']],[3,'priceObj']],[3,'priorityPrice']],[1,'nupPrice']]],[[7],[3,'nupInfo']]],[[6],[[7],[3,'nupInfo']],[3,'isNupBannerShow']]])
Z([3,'priceArea nup_price_banner'])
Z([[2,'&&'],[[7],[3,'nupInfo']],[[6],[[7],[3,'nupInfo']],[3,'isSingleDef']]])
Z([[2,'&&'],[[7],[3,'nupInfo']],[[6],[[7],[3,'nupInfo']],[3,'isDoubleDef']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'globalInfo']],[[6],[[6],[[7],[3,'detail']],[3,'taxTxt']],[3,'content']]],[[6],[[6],[[7],[3,'detail']],[3,'taxTxt']],[3,'title']]],[[6],[[6],[[7],[3,'detail']],[3,'taxTxt']],[3,'detail']]])
Z([3,'global_info'])
Z([[6],[[6],[[7],[3,'detail']],[3,'globalInfo']],[3,'nationalFlag']])
Z([[6],[[6],[[7],[3,'detail']],[3,'globalInfo']],[3,'nation']])
Z([[2,'!'],[[7],[3,'isSpecialProcess']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'detail']],[3,'isPlus']]],[[7],[3,'itemPriceObj']]],[[6],[[7],[3,'itemPriceObj']],[3,'priceObj']]],[[2,'=='],[[6],[[6],[[7],[3,'itemPriceObj']],[3,'priceObj']],[3,'priorityPrice']],[1,'plusPrice']]],[[6],[[7],[3,'detail']],[3,'plusTip']]])
Z([3,'coverGotoH5'])
Z([3,'plus_tip radius'])
Z([3,'plus'])
Z([3,'https://plus.m.jd.com/index'])
Z([[6],[[7],[3,'detail']],[3,'goTip']])
Z([[2,'&&'],[[2,'||'],[[6],[[7],[3,'detail']],[3,'isSamGoods']],[[6],[[7],[3,'detail']],[3,'isSamGoods2']]],[[2,'!'],[[6],[[7],[3,'samStatus']],[3,'isCardMember']]]])
Z([[7],[3,'strOpenCardUrl']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isPingou']],[[2,'!'],[[2,'||'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'pgBanner']],[[2,'>'],[[6],[[6],[[7],[3,'detail']],[3,'pgBanner']],[3,'flag']],[1,0]]],[[2,'&&'],[[7],[3,'bigPromoteInfo']],[[6],[[7],[3,'bigPromoteInfo']],[3,'bannerImgWithPrice']]]]]])
Z(z[121])
Z(z[106])
Z(z[107])
Z(z[110])
Z(z[111])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'price']]])
Z(z[130])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'jdCategory']],[[6],[[7],[3,'flags']],[3,'showDropNoticeFlag']]])
Z(z[130])
Z(z[136])
Z(z[5])
Z(z[41])
Z([[2,'?:'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'pgBanner']],[[6],[[6],[[7],[3,'detail']],[3,'pgBanner']],[3,'promoBgpicture']]],[[6],[[6],[[7],[3,'detail']],[3,'pgBanner']],[3,'promoBgpicture']],[[2,'?:'],[[6],[[7],[3,'bigPromoteInfo']],[3,'bannerImgWithPrice']],[[6],[[7],[3,'bigPromoteInfo']],[3,'afterDiscountBg']],[1,'']]])
Z([3,'refreshDiscountPg'])
Z([3,'refreshJxNewerCouponInfo'])
Z([3,'refreshJxappCoupon'])
Z([3,'showPgDiscountLayer'])
Z([[7],[3,'couponObj']])
Z(z[41])
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'pgBanner']],[[2,'>'],[[6],[[6],[[7],[3,'detail']],[3,'pgBanner']],[3,'flag']],[1,0]]],[[2,'&&'],[[7],[3,'bigPromoteInfo']],[[6],[[7],[3,'bigPromoteInfo']],[3,'bannerImgWithPrice']]]])
Z(z[169])
Z([[6],[[7],[3,'detail']],[3,'plusFlag']])
Z([[6],[[7],[3,'detail']],[3,'prizeQualification']])
Z([[7],[3,'promoteObj']])
Z([[7],[3,'wxSearchFlag']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'aboveTitleSkuFlags']],[3,'url']]])
Z([a,[3,'title_wrap '],[[2,'?:'],[[2,'||'],[[2,'&&'],[[6],[[7],[3,'flags']],[3,'isJxScene']],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[7],[3,'isSpecialProcess']]]],[[2,'||'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isPingou']],[[6],[[7],[3,'detail']],[3,'pgBanner']]],[[2,'>'],[[6],[[6],[[7],[3,'detail']],[3,'pgBanner']],[3,'flag']],[1,0]]],[[2,'&&'],[[7],[3,'bigPromoteInfo']],[[6],[[7],[3,'bigPromoteInfo']],[3,'bannerImgWithPrice']]]]],[1,''],[1,'common_padding_right']]])
Z(z[28])
Z([[6],[[7],[3,'bigPromoteInfo']],[3,'beforeTitleTag']])
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[7],[3,'isSpecialProcess']]],[[2,'||'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isPingou']],[[6],[[7],[3,'detail']],[3,'pgBanner']]],[[2,'>'],[[6],[[6],[[7],[3,'detail']],[3,'pgBanner']],[3,'flag']],[1,0]]],[[2,'&&'],[[7],[3,'bigPromoteInfo']],[[6],[[7],[3,'bigPromoteInfo']],[3,'bannerImgWithPrice']]]]])
Z([3,'item-btn'])
Z(z[136])
Z(z[132])
Z(z[194])
Z(z[133])
Z(z[12])
Z(z[5])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'detail']],[3,'ad']]],[[6],[[6],[[7],[3,'detail']],[3,'ad']],[3,'length']]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[7],[3,'adultTip']]],[[2,'!'],[[7],[3,'isPingouXcx']]]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[2,'||'],[[2,'=='],[[6],[[7],[3,'detail']],[3,'skuType']],[1,2]],[[2,'=='],[[6],[[7],[3,'detail']],[3,'skuType']],[1,3]]]])
Z([[7],[3,'goodsDescData']])
Z([[6],[[7],[3,'detail']],[3,'skuType']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[7],[3,'isSpecialProcess']]],[[6],[[7],[3,'flags']],[3,'showWXSearchFlag']]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'detail']],[3,'isJingzao']]],[[6],[[7],[3,'detail']],[3,'jdzzDesc']]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isPingou']],[[6],[[7],[3,'detail']],[3,'pingouInfo']]],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'duoDanFan']]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pgNotice']],[[6],[[6],[[7],[3,'detail']],[3,'pgNotice']],[3,'title']]])
Z([[6],[[6],[[7],[3,'detail']],[3,'pgNotice']],[3,'price']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[2,'!'],[[7],[3,'isSpecialProcess']]]],[[7],[3,'postPromo']]],[[6],[[7],[3,'postPromo']],[3,'showPromoNoticeFlag']]])
Z([3,'promo_notice_info'])
Z([[6],[[7],[3,'postPromo']],[3,'price']])
Z([[6],[[7],[3,'postPromo']],[3,'descStr']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[2,'!'],[[7],[3,'isSpecialProcess']]]],[[7],[3,'postPromo']]],[[6],[[7],[3,'postPromo']],[3,'showPromoNoticeProfit']]],[[6],[[7],[3,'postPromo']],[3,'descStr']]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'specialProcess']],[3,'showTime']]])
Z([[6],[[7],[3,'specialProcess']],[3,'processText']])
Z([[6],[[7],[3,'specialProcess']],[3,'iconText']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[2,'!='],[[7],[3,'atmosProcessType']],[1,4]]],[[6],[[7],[3,'detail']],[3,'promomiao']]],[[6],[[6],[[7],[3,'detail']],[3,'promomiao']],[3,'showTime']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'detail']],[3,'flashpurchaseFlag']]],[[2,'!='],[[7],[3,'atmosProcessType']],[1,5]]],[[6],[[7],[3,'detail']],[3,'flashpurchase']]],[[6],[[6],[[7],[3,'detail']],[3,'flashpurchase']],[3,'showTime']]])
Z(z[59])
Z([3,'showKernelPropsInfo'])
Z(z[89])
Z(z[12])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'detail']],[3,'showPlusZxGouTip']]],[[6],[[7],[3,'detail']],[3,'plusZxGouTip']]],[[6],[[7],[3,'detail']],[3,'canBuy']]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'detail']],[3,'plusPriorInfo']]],[[6],[[6],[[7],[3,'detail']],[3,'plusPriorInfo']],[3,'tips']]])
Z(z[156])
Z([3,'plus-prior-tips common_margin_left'])
Z(z[158])
Z([[2,'?:'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'plusPriorInfo']],[[6],[[6],[[7],[3,'detail']],[3,'plusPriorInfo']],[3,'canOpen']]],[1,'https://plus.m.jd.com/index'],[1,'']])
Z([[6],[[6],[[7],[3,'detail']],[3,'plusPriorInfo']],[3,'canOpen']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'kanjiaData']],[3,'isActShow']]])
Z([3,'goToKanjiaPage'])
Z([3,'kanjia'])
Z([3,'kanjia_left_title'])
Z([[2,'!'],[[6],[[7],[3,'kanjiaData']],[3,'isPriceNormal']]])
Z([[6],[[7],[3,'kanjiaData']],[3,'isPriceNormal']])
Z(z[237])
Z([[2,'&&'],[[6],[[7],[3,'kanjiaData']],[3,'personNum']],[[2,'>'],[[6],[[7],[3,'kanjiaData']],[3,'personNum']],[1,0]]])
Z([[2,'&&'],[[2,'&&'],[[2,'||'],[[2,'!'],[[6],[[7],[3,'detail']],[3,'pingouInfo']]],[[2,'!'],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'isFactorySupply']]]],[[6],[[7],[3,'detail']],[3,'isPingou']]],[[6],[[6],[[6],[[7],[3,'layer']],[3,'service']],[3,'content']],[3,'length']]])
Z([3,'service'])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'isFactorySupply']]])
Z([3,'showLayer'])
Z([a,[3,'service-bar-item factory-supply service_row '],[[2,'?:'],[[6],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'factorySupply']],[3,'isPlaceStraight']],[1,'place-straight'],[1,'']]])
Z([3,'factory'])
Z([[6],[[6],[[6],[[7],[3,'layer']],[3,'service']],[3,'content']],[3,'length']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'detail']],[3,'isJx']]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'detail']],[3,'isJingzao']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[7],[3,'layer']]],[[6],[[7],[3,'layer']],[3,'globalService']]],[[6],[[6],[[7],[3,'layer']],[3,'globalService']],[3,'content']]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'layer']],[3,'globalService']],[3,'content']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[7],[3,'layer']]],[[6],[[7],[3,'layer']],[3,'easeBuy']]],[[6],[[6],[[7],[3,'layer']],[3,'easeBuy']],[3,'contentToShowOnPage']]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'layer']],[3,'easeBuy']],[3,'contentToShowOnPage']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isPingou']],[[7],[3,'adultTip']]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'skuId']],[[6],[[7],[3,'detail']],[3,'jdCategory']]],[[6],[[6],[[7],[3,'detail']],[3,'jdCategory']],[3,'length']]])
Z(z[59])
Z([3,'refreshCoupon'])
Z([3,'showDiscountLayer'])
Z(z[181])
Z(z[41])
Z(z[185])
Z(z[187])
Z([[7],[3,'promotionText']])
Z(z[188])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'detail']],[3,'isPingou']]],[[2,'!'],[[6],[[7],[3,'detail']],[3,'isWareOff']]]],[[6],[[7],[3,'detail']],[3,'venderId']]],[[2,'||'],[[6],[[7],[3,'detail']],[3,'spuId']],[[2,'=='],[[6],[[7],[3,'detail']],[3,'ptqq']],[1,'1']]]])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'detail']],[3,'spuId']]]])
Z([[2,'=='],[[6],[[7],[3,'detail']],[3,'ptqq']],[1,'1']])
Z([[6],[[7],[3,'detail']],[3,'isZiying']])
Z([[7],[3,'skuId']])
Z([[6],[[7],[3,'detail']],[3,'spuId']])
Z([[6],[[7],[3,'detail']],[3,'venderId']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isPingou']],[[6],[[7],[3,'detail']],[3,'pingouInfo']]],[[2,'||'],[[2,'!'],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'cannotBuy']]],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'isAppZxCanLaunch']]]],[[6],[[7],[3,'detail']],[3,'canBuy']]])
Z([3,'gotoPingouDetail'])
Z([3,'handleKlDownload'])
Z([3,'xlist_group tuan_recommend_warp'])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'fanxian']],[[6],[[6],[[7],[3,'detail']],[3,'fanxian']],[3,'amountDesc']]])
Z([[7],[3,'appZxLaunchAppParameter']])
Z(z[100])
Z(z[101])
Z(z[115])
Z([[2,'||'],[[2,'!'],[[6],[[7],[3,'detail']],[3,'fanxian']]],[[2,'!='],[[6],[[6],[[7],[3,'detail']],[3,'fanxian']],[3,'peopleStr']],[1,'-1']]])
Z([3,'xlist_group radius'])
Z(z[243])
Z([3,'xlist_item common_margin_left common_padding_column flex_col group-panel--sku'])
Z([3,'sku'])
Z([[2,'&&'],[[7],[3,'valueAddedLocShops']],[[6],[[7],[3,'valueAddedLocShops']],[3,'show']]])
Z([[2,'||'],[[7],[3,'supportServicesStr']],[[6],[[7],[3,'checkedServiceList']],[3,'length']]])
Z([[2,'||'],[[6],[[7],[3,'addressData']],[3,'address']],[[6],[[7],[3,'detail']],[3,'isLoc']]])
Z([[6],[[7],[3,'addressData']],[3,'address']])
Z([3,'chooseShop'])
Z([3,'showAddressLayer'])
Z(z[89])
Z([3,'Address'])
Z([[6],[[6],[[7],[3,'detail']],[3,'stock']],[3,'expiration']])
Z([[6],[[7],[3,'detail']],[3,'freight']])
Z(z[41])
Z(z[41])
Z([[6],[[7],[3,'grayscale']],[3,'qualityInfoGray']])
Z([[6],[[7],[3,'detail']],[3,'isLoc']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isPingou']],[[2,'!'],[[6],[[7],[3,'detail']],[3,'isZiying']]]])
Z([[6],[[7],[3,'detail']],[3,'locAddCartDirect']])
Z([[7],[3,'isOfflineHasShop']])
Z([[6],[[7],[3,'addressData']],[3,'shopDetail']])
Z(z[266])
Z([[7],[3,'beforeStockSkuFlags']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isLdp']],[[6],[[6],[[7],[3,'detail']],[3,'stock']],[3,'vsc']]])
Z([[6],[[6],[[7],[3,'detail']],[3,'stock']],[3,'vsc']])
Z([3,'*this'])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[6],[[7],[3,'item']],[3,'charge']])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'detail']],[3,'isPingou']]],[[6],[[6],[[6],[[7],[3,'layer']],[3,'service']],[3,'content']],[3,'length']]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[7],[3,'adultTip']]],[[7],[3,'isPingouXcx']]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouActiveEntry']],[[6],[[6],[[7],[3,'detail']],[3,'pingouActiveEntry']],[3,'bannerUrl']]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouRuleInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouRuleInfo']],[3,'pingouRule']]])
Z([3,'commonToUrl'])
Z([3,'xlist_item common_margin_left common_padding_right flex_col group-panel--pgrule'])
Z([3,'CLICK_PINGOU_WANFA'])
Z([[6],[[6],[[7],[3,'detail']],[3,'pingouRuleInfo']],[3,'pingouRuleToUrl']])
Z(z[315])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'detail']],[3,'showDaojiaSku']]])
Z([[6],[[7],[3,'addressData']],[3,'addressId']])
Z([[6],[[7],[3,'detail']],[3,'upc']])
Z(z[59])
Z([[2,'>'],[[6],[[6],[[7],[3,'detail']],[3,'suyuanVideos']],[3,'length']],[1,0]])
Z(z[73])
Z([[6],[[7],[3,'detail']],[3,'suyuanVideos']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'detail']],[3,'isOfflineStore']]])
Z(z[12])
Z([[6],[[7],[3,'detail']],[3,'skumark']])
Z([[6],[[7],[3,'detail']],[3,'spAttr']])
Z(z[268])
Z([a,[3,'app-launch-area xlist_group '],[[2,'?:'],[[6],[[7],[3,'flags']],[3,'isJxScene']],[1,'radius'],[1,'radius_top']]])
Z(z[69])
Z([3,'handleComment'])
Z([3,'handleSensitive'])
Z(z[73])
Z(z[89])
Z([3,'Review Jrolling'])
Z([3,'navComment'])
Z([[6],[[7],[3,'flags']],[3,'forbidAppDetailNavigate']])
Z(z[41])
Z(z[12])
Z(z[268])
Z(z[337])
Z([3,'app-launch-area'])
Z([[2,'&&'],[[6],[[7],[3,'flags']],[3,'showAnswerFlag']],[[2,'!'],[[6],[[7],[3,'flags']],[3,'forbidSensitiveInfo']]]])
Z(z[337])
Z(z[41])
Z(z[12])
Z(z[337])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'skuId']],[[6],[[7],[3,'detail']],[3,'venderId']]])
Z([3,'updateShopFavStatus'])
Z(z[279])
Z([[6],[[7],[3,'detail']],[3,'isFCS']])
Z([[6],[[7],[3,'detail']],[3,'isNewPingou']])
Z([[6],[[7],[3,'detail']],[3,'isOverseaPurchase']])
Z(z[41])
Z([[6],[[7],[3,'detail']],[3,'isSCF']])
Z(z[265])
Z([[6],[[7],[3,'detail']],[3,'pgShopInfo']])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'detail']],[3,'isZiying']]],[[2,'<='],[[6],[[7],[3,'detail']],[3,'isOverseaPurchase']],[1,0]]],[[2,'!'],[[6],[[7],[3,'detail']],[3,'isFCS']]]])
Z(z[12])
Z(z[268])
Z(z[59])
Z([[7],[3,'businessEntryObj']])
Z([3,'xlist_group business radius'])
Z(z[59])
Z([[7],[3,'accessoriesObj']])
Z([3,'xlist_group accessories radius'])
Z([[7],[3,'lazyLoadThirdScreenFlag']])
Z([3,'xlist_group radius GuessYouLike Jrolling'])
Z([[7],[3,'guessYouLikeObj']])
Z([3,'navGuess'])
Z(z[367])
Z([3,'onShowShareDetail'])
Z([3,'updateExtraTips'])
Z([3,'Specific'])
Z([[7],[3,'specificObj']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isPingou']],[[7],[3,'pgCartEnterShow']]],[[7],[3,'cartPosHasAdjusted']]])
Z([3,'gotoCart'])
Z([3,'cart_pg'])
Z([[2,'+'],[[2,'+'],[1,'bottom: '],[[7],[3,'cartPosToBottom']]],[1,'px;']])
Z([[7],[3,'cartNumShow']])
Z([[2,'>'],[[6],[[7],[3,'cart']],[3,'num']],[1,0]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[6],[[7],[3,'flags']],[3,'showHomeBtnFlag']]],[[2,'!'],[[7],[3,'isSupportNav']]]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[2,'!'],[[7],[3,'isSupportNav']]]])
Z([3,'item/detail'])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNormalItem']],[[2,'!'],[[7],[3,'isPingouXcx']]]])
Z([[6],[[7],[3,'flags']],[3,'showReturnAppBtnFlag']])
Z([[7],[3,'commentRid']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'jdCategory']],[[2,'=='],[[6],[[6],[[7],[3,'detail']],[3,'jdCategory']],[1,0]],[1,'1713']]])
Z(z[41])
Z([[7],[3,'navHeight']])
Z([[2,'&&'],[[6],[[7],[3,'flags']],[3,'forbidScrollFlag']],[[7],[3,'scrollTop']]])
Z([[2,'=='],[[7],[3,'cpart']],[1,'comment']])
Z(z[266])
Z([[2,'?:'],[[2,'!='],[[7],[3,'cpart']],[1,'comment']],[1,'display:none;'],[1,'']])
Z(z[327])
Z([3,'certifiction'])
Z([3,'doLogin'])
Z(z[270])
Z([3,'gotoTuan'])
Z(z[271])
Z([[6],[[7],[3,'detail']],[3,'canNotBuyHere']])
Z([[6],[[7],[3,'detail']],[3,'tipsContent']])
Z([[6],[[7],[3,'detail']],[3,'hasBigouma']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'isAppZx']]])
Z([[6],[[7],[3,'samStatus']],[3,'isCardMember']])
Z([[6],[[7],[3,'detail']],[3,'isJMa']])
Z(z[41])
Z([[6],[[7],[3,'detail']],[3,'isSubscribeCar']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'isTuanOfFriend']]])
Z(z[274])
Z(z[298])
Z(z[99])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'newerLayer']],[[6],[[6],[[7],[3,'detail']],[3,'newerLayer']],[3,'bottomText']]])
Z([[2,'&&'],[[7],[3,'usefulNewerCouponInfo']],[[6],[[7],[3,'usefulNewerCouponInfo']],[3,'remainTime']]])
Z(z[299])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'cannotBuy']]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'cannotBuyMsg']]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'newerNoPinBottomMsg']]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'newerNoTuanBottomMsg']]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'specBottomMsg']]])
Z([[7],[3,'specialProcessStatus']])
Z([[2,'=='],[[6],[[6],[[7],[3,'detail']],[3,'newerLayer']],[3,'popLayerType']],[1,'3']])
Z([[7],[3,'isSpecialProcess']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'stock']],[[6],[[6],[[7],[3,'detail']],[3,'stock']],[3,'StockState']]])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'tjTuanInfo']]])
Z([[6],[[7],[3,'flags']],[3,'tjTuanBottomShow']])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'yuyue']],[[6],[[6],[[7],[3,'detail']],[3,'yuyue']],[3,'state']]])
Z(z[59])
Z([3,'addToCart'])
Z([3,'doBuy'])
Z([3,'cdkeyBuy'])
Z([3,'chooseInstallShop'])
Z(z[287])
Z(z[377])
Z([3,'onGotoCustom'])
Z([3,'gotoJdhealthOrder'])
Z(z[271])
Z([3,'showModalTips'])
Z([3,'plusZxGouOpenPlus'])
Z([3,'specialBuy'])
Z([3,'subscribeItem'])
Z([[7],[3,'bottomBtn']])
Z([[7],[3,'cart']])
Z(z[380])
Z([[7],[3,'choseShopId']])
Z([[2,'?:'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isSpecialProcess']]],[[2,'!'],[[6],[[7],[3,'flags']],[3,'showWXSearchFlag']]]],[[6],[[7],[3,'flags']],[3,'showGwfxInfoFlag']]],[[6],[[6],[[7],[3,'detail']],[3,'gwfxInfo']],[3,'returnMoney']],[1,'']])
Z([[6],[[7],[3,'detail']],[3,'hasBigouCode']])
Z(z[405])
Z([[6],[[7],[3,'detail']],[3,'isJx']])
Z([[6],[[7],[3,'detail']],[3,'isWareOff']])
Z(z[408])
Z(z[283])
Z([[6],[[7],[3,'detail']],[3,'isECard']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isECard']],[[6],[[7],[3,'detail']],[3,'spAttr']]],[[2,'=='],[[6],[[6],[[7],[3,'detail']],[3,'spAttr']],[3,'yysfhf']],[1,1]]])
Z(z[274])
Z(z[99])
Z(z[299])
Z(z[102])
Z([[6],[[7],[3,'flags']],[3,'showArrivalNoticeFlag']])
Z([[7],[3,'detail']])
Z(z[41])
Z(z[429])
Z([3,'gotoBuy'])
Z(z[270])
Z(z[399])
Z(z[271])
Z(z[72])
Z(z[274])
Z([[7],[3,'pgAddCartShow']])
Z(z[459])
Z(z[460])
Z([[7],[3,'isPingouXcx']])
Z([[7],[3,'bottomWidgetData']])
Z([[6],[[7],[3,'dialog']],[3,'show']])
Z([3,'onDialogCancel'])
Z([3,'hideDialog'])
Z([3,'onDialogConfirm'])
Z([[7],[3,'dialog']])
Z([3,'wq-dialog'])
Z(z[479])
Z([[6],[[7],[3,'addressData']],[3,'addressList']])
Z(z[318])
Z([3,'closeAddressLayer'])
Z([3,'switchAddress'])
Z([[6],[[6],[[7],[3,'layer']],[3,'address']],[3,'show']])
Z([[6],[[7],[3,'flags']],[3,'usePgShare']])
Z([3,'closeShareLayer'])
Z([3,'onCloseShareDetail'])
Z([[7],[3,'hideSharePannel']])
Z([[7],[3,'shareOptions']])
Z([[6],[[6],[[7],[3,'layer']],[3,'share']],[3,'show']])
Z([[7],[3,'triggerShowShareDetail']])
Z(z[487])
Z(z[488])
Z(z[489])
Z(z[490])
Z(z[491])
Z(z[492])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'layer']],[[6],[[7],[3,'layer']],[3,'easeBuy']]],[[6],[[6],[[7],[3,'layer']],[3,'easeBuy']],[3,'content']]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'layer']],[3,'easeBuy']],[3,'content']],[3,'length']],[1,0]]])
Z([3,'closeEaseBuyLayer'])
Z(z[500])
Z(z[41])
Z([[6],[[7],[3,'layer']],[3,'easeBuy']])
Z([[6],[[7],[3,'detail']],[3,'isJingzao']])
Z([3,'closeJingzaoLayer'])
Z(z[505])
Z(z[41])
Z([[6],[[7],[3,'layer']],[3,'jingzao']])
Z(z[242])
Z([3,'closeFactoryLayer'])
Z(z[510])
Z([3,'playCommonVideo'])
Z(z[73])
Z([[2,'&&'],[[6],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'factorySupply']],[3,'hasIndustryVideo']],[[6],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'factorySupply']],[3,'industryVideo']]])
Z([[6],[[6],[[7],[3,'layer']],[3,'service']],[3,'content']])
Z(z[41])
Z([[6],[[7],[3,'layer']],[3,'factory']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'layer']],[[6],[[7],[3,'layer']],[3,'globalService']]],[[6],[[6],[[7],[3,'layer']],[3,'globalService']],[3,'content']]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'layer']],[3,'globalService']],[3,'content']],[3,'length']],[1,0]]])
Z([3,'closeGlobalServiceLayer'])
Z(z[519])
Z(z[41])
Z([[6],[[7],[3,'layer']],[3,'globalService']])
Z(z[246])
Z([3,'closeServiceLayer'])
Z(z[524])
Z(z[41])
Z([[6],[[7],[3,'layer']],[3,'service']])
Z(z[266])
Z(z[41])
Z(z[107])
Z([3,'closeDiscountLayer'])
Z([3,'drawCoupon'])
Z([3,'gotoAd'])
Z([3,'gotoExchange'])
Z(z[271])
Z([[6],[[6],[[7],[3,'layer']],[3,'discount']],[3,'couponContent']])
Z([[6],[[6],[[7],[3,'layer']],[3,'discount']],[3,'guideCanGetCoupons']])
Z([[6],[[6],[[7],[3,'layer']],[3,'discount']],[3,'guideCanUseCoupons']])
Z([[6],[[6],[[7],[3,'layer']],[3,'discount']],[3,'guideCanUsePromotes']])
Z(z[124])
Z([1,false])
Z([[6],[[6],[[7],[3,'layer']],[3,'discount']],[3,'jxAppCoupon']])
Z([[7],[3,'launchAppParameter']])
Z(z[187])
Z([[6],[[6],[[7],[3,'layer']],[3,'discount']],[3,'promotePacks']])
Z([[6],[[6],[[7],[3,'layer']],[3,'discount']],[3,'promoteContent']])
Z([[2,'&&'],[[6],[[7],[3,'layer']],[3,'discount']],[[6],[[6],[[7],[3,'layer']],[3,'discount']],[3,'show']]])
Z(z[268])
Z(z[531])
Z(z[532])
Z(z[533])
Z([3,'handleBindingClick'])
Z(z[534])
Z(z[271])
Z(z[536])
Z(z[41])
Z(z[541])
Z(z[41])
Z(z[543])
Z([[6],[[6],[[7],[3,'layer']],[3,'discount']],[3,'parallelPromote']])
Z(z[187])
Z(z[545])
Z(z[546])
Z(z[547])
Z(z[268])
Z(z[208])
Z([3,'closeJxappExclusiveLayer'])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'detail']],[3,'pingouInfo']],[3,'duoDanFan']]])
Z(z[543])
Z([[2,'&&'],[[6],[[7],[3,'layer']],[3,'jxappExclusive']],[[6],[[6],[[7],[3,'layer']],[3,'jxappExclusive']],[3,'show']]])
Z(z[59])
Z([3,'closeKernelPropsLayer'])
Z(z[41])
Z([[6],[[6],[[7],[3,'layer']],[3,'kernelProps']],[3,'content']])
Z([[6],[[6],[[7],[3,'layer']],[3,'kernelProps']],[3,'show']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'detail']],[3,'isNewPingou']],[[6],[[7],[3,'detail']],[3,'fanxian']]],[[6],[[6],[[7],[3,'detail']],[3,'fanxian']],[3,'amountDesc']]])
Z([3,'updateCardImage'])
Z(z[490])
Z(z[577])
Z(z[490])
Z([[7],[3,'addedServices']])
Z([[7],[3,'afterDiscountBenfit']])
Z(z[287])
Z([3,'closeSkuLayer'])
Z(z[397])
Z([3,'gotoCustomHandle'])
Z(z[436])
Z([3,'handleDrawAfterDiscount'])
Z(z[271])
Z([3,'handleAddCartFail'])
Z([3,'setVisitedSku'])
Z(z[72])
Z([3,'switchSku'])
Z(z[442])
Z(z[445])
Z([[7],[3,'goodsNum']])
Z(z[537])
Z(z[299])
Z(z[274])
Z(z[460])
Z(z[99])
Z(z[413])
Z(z[414])
Z(z[188])
Z([[7],[3,'skuLayerData']])
Z(z[469])
Z([[7],[3,'tjTuanInfoCur']])
Z(z[102])
Z([[2,'||'],[[6],[[7],[3,'detail']],[3,'isPingou']],[[6],[[7],[3,'flags']],[3,'showSKuLayerActions']]])
Z(z[459])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isSpecialProcess']]],[[2,'!'],[[6],[[7],[3,'flags']],[3,'showWXSearchFlag']]]],[[6],[[7],[3,'flags']],[3,'showGwfxInfoFlag']]])
Z([[2,'&&'],[[6],[[7],[3,'layer']],[3,'sku']],[[6],[[6],[[7],[3,'layer']],[3,'sku']],[3,'show']]])
Z(z[422])
Z([[6],[[7],[3,'flags']],[3,'showWXSearchFlag']])
Z(z[12])
Z([[6],[[7],[3,'goodsNum']],[3,'value']])
Z([[2,'&&'],[[7],[3,'isPingouXcx']],[[6],[[7],[3,'flags']],[3,'forbidAppDetailNavigate']]])
Z(z[78])
Z([[7],[3,'videoToastShow']])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
Z([[10],[[7],[3,'modal']]])
Z([3,'modal'])
Z([3,'onJxVipHide'])
Z([3,'1441'])
Z([3,'jxvip-buy'])
Z([[2,'&&'],[[6],[[7],[3,'detail']],[3,'newerLayer']],[[6],[[6],[[7],[3,'detail']],[3,'newerLayer']],[3,'show']]])
Z([[7],[3,'loginLayerData']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_1);return __WXML_GLOBAL__.ops_cached.$gwx12_1
}
function gz$gwx12_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_2)return __WXML_GLOBAL__.ops_cached.$gwx12_2
__WXML_GLOBAL__.ops_cached.$gwx12_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'accessoryList']],[[2,'>'],[[6],[[7],[3,'accessoryList']],[3,'length']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_2);return __WXML_GLOBAL__.ops_cached.$gwx12_2
}
function gz$gwx12_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_3)return __WXML_GLOBAL__.ops_cached.$gwx12_3
__WXML_GLOBAL__.ops_cached.$gwx12_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_3);return __WXML_GLOBAL__.ops_cached.$gwx12_3
}
function gz$gwx12_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_4)return __WXML_GLOBAL__.ops_cached.$gwx12_4
__WXML_GLOBAL__.ops_cached.$gwx12_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'activities']],[[2,'>'],[[6],[[7],[3,'activities']],[3,'length']],[1,0]]])
Z([3,'activities-floor radius common_padding_column'])
Z([3,'activities-floor__header common_margin_left'])
Z([[2,'>'],[[6],[[7],[3,'activities']],[3,'length']],[1,1]])
Z([3,'activities-floor__main'])
Z([[2,'!'],[[7],[3,'isFlod']]])
Z([[7],[3,'isFlod']])
Z([[7],[3,'isFold']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_4);return __WXML_GLOBAL__.ops_cached.$gwx12_4
}
function gz$gwx12_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_5)return __WXML_GLOBAL__.ops_cached.$gwx12_5
__WXML_GLOBAL__.ops_cached.$gwx12_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx12_5);return __WXML_GLOBAL__.ops_cached.$gwx12_5
}
function gz$gwx12_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_6)return __WXML_GLOBAL__.ops_cached.$gwx12_6
__WXML_GLOBAL__.ops_cached.$gwx12_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'panel panel-address '],[[2,'?:'],[[2,'||'],[[7],[3,'isPingou']],[[7],[3,'isPingouXcx']]],[1,'pingou_style'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pgxcx'],[1,'']]])
Z([[7],[3,'isShowPingou']])
Z([3,'panel-address__detail'])
Z([3,'switchAddress'])
Z([3,'panel-address__line'])
Z([3,'panel-address__item-status'])
Z([[6],[[7],[3,'skuFlagInfo']],[3,'url']])
Z([[6],[[7],[3,'freight']],[3,'df']])
Z([[6],[[7],[3,'freight']],[3,'serviceInfo']])
Z([[6],[[7],[3,'freight']],[3,'dcashDesc']])
Z([[7],[3,'isOffline']])
Z([[6],[[7],[3,'shopDetail']],[3,'id']])
Z([3,'detail-shop__detail'])
Z([[6],[[7],[3,'shopDetail']],[3,'addr']])
Z([[6],[[7],[3,'shopDetail']],[3,'phone']])
Z(z[3])
Z(z[2])
Z([[2,'&&'],[[7],[3,'freight']],[[6],[[7],[3,'freight']],[3,'state']]])
Z(z[6])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'hideWeight']]],[[7],[3,'freight']]],[[6],[[7],[3,'freight']],[3,'weightValue']]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_6);return __WXML_GLOBAL__.ops_cached.$gwx12_6
}
function gz$gwx12_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_7)return __WXML_GLOBAL__.ops_cached.$gwx12_7
__WXML_GLOBAL__.ops_cached.$gwx12_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'answers '],[[2,'?:'],[[2,'||'],[[7],[3,'isPingou']],[[7],[3,'isPingouXcx']]],[1,'pingou_style radius'],[1,'no_top radius_bottom']],[3,' '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pgxcx'],[1,'']]])
Z([[7],[3,'isAppLaunch']])
Z([[6],[[7],[3,'answerList']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_7);return __WXML_GLOBAL__.ops_cached.$gwx12_7
}
function gz$gwx12_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_8)return __WXML_GLOBAL__.ops_cached.$gwx12_8
__WXML_GLOBAL__.ops_cached.$gwx12_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_8);return __WXML_GLOBAL__.ops_cached.$gwx12_8
}
function gz$gwx12_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_9)return __WXML_GLOBAL__.ops_cached.$gwx12_9
__WXML_GLOBAL__.ops_cached.$gwx12_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_9);return __WXML_GLOBAL__.ops_cached.$gwx12_9
}
function gz$gwx12_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_10)return __WXML_GLOBAL__.ops_cached.$gwx12_10
__WXML_GLOBAL__.ops_cached.$gwx12_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'skuItem']],[3,'suyuanBanner']])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'atmosType']],[1,6]],[[6],[[7],[3,'beltAtmos']],[3,'show']]],[[6],[[7],[3,'beltAtmos']],[3,'banner']]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'atmosType']],[1,7]],[[6],[[7],[3,'promoteAtoms']],[3,'config']]],[[6],[[6],[[7],[3,'promoteAtoms']],[3,'config']],[3,'bannerimg']]])
Z([[2,'||'],[[2,'>'],[[6],[[7],[3,'timerNums']],[1,0]],[1,0]],[[2,'>'],[[6],[[7],[3,'timerNums']],[1,1]],[1,0]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'atmosType']],[1,0]],[[6],[[7],[3,'saleAtmos']],[3,'bannerImg']]])
Z([[2,'||'],[[2,'=='],[[7],[3,'atmosType']],[1,8]],[[2,'=='],[[7],[3,'atmosType']],[1,9]]])
Z([[2,'&&'],[[6],[[7],[3,'skuItem']],[3,'priceObj']],[[6],[[6],[[7],[3,'skuItem']],[3,'priceObj']],[3,'linePrice']]])
Z([[2,'&&'],[[6],[[7],[3,'skuItem']],[3,'isPlusZxGou']],[[2,'||'],[[2,'=='],[[7],[3,'atmosType']],[1,1]],[[2,'=='],[[7],[3,'atmosType']],[1,3]]]])
Z([3,'pluszx-subscribe-atmos'])
Z([[6],[[7],[3,'specialProcess']],[3,'num']])
Z([[6],[[6],[[7],[3,'specialProcess']],[3,'countdown']],[3,'text']])
Z([3,'pluszx-subscribe-atmos__countdown'])
Z([[6],[[6],[[7],[3,'specialProcess']],[3,'countdown']],[3,'show']])
Z(z[3])
Z(z[10])
Z([[2,'||'],[[2,'=='],[[7],[3,'atmosType']],[1,1]],[[2,'=='],[[7],[3,'atmosType']],[1,3]]])
Z([3,'special-atmos'])
Z([a,[3,'special-atmos__main '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'specialProcess']],[3,'type']],[1,1]],[1,'subscribe-atmos'],[1,'buying-spree-atmos']]])
Z([[2,'&&'],[[7],[3,'maskSkuConfig']],[[6],[[7],[3,'maskSkuConfig']],[3,'iconUrl']]])
Z([3,'special-atmos__content'])
Z([[2,'&&'],[[6],[[7],[3,'specialProcess']],[3,'prevPrice']],[[2,'!'],[[6],[[7],[3,'specialProcess']],[3,'showPresellSellPrice']]]])
Z(z[9])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'specialProcess']],[3,'type']],[1,2]],[[2,'=='],[[6],[[7],[3,'specialProcess']],[3,'type']],[1,3]]])
Z(z[10])
Z([3,'special-atmos__countdown'])
Z(z[12])
Z(z[3])
Z(z[10])
Z([[2,'||'],[[2,'=='],[[7],[3,'atmosType']],[1,4]],[[2,'=='],[[7],[3,'atmosType']],[1,5]]])
Z([3,'seckill-atmos'])
Z([[6],[[7],[3,'seckillAtmos']],[3,'prevPrice']])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx12_10);return __WXML_GLOBAL__.ops_cached.$gwx12_10
}
function gz$gwx12_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_11)return __WXML_GLOBAL__.ops_cached.$gwx12_11
__WXML_GLOBAL__.ops_cached.$gwx12_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'pgBanner']],[3,'flag']],[1,0]])
Z([3,'spec-atmosphere__main'])
Z([[2,'?:'],[[6],[[7],[3,'pgBanner']],[3,'bgpicture']],[[2,'+'],[[2,'+'],[1,'background: url('],[[6],[[7],[3,'pgBanner']],[3,'bgpicture']]],[1,') no-repeat;background-size: 100% 100%;']],[1,'']])
Z([3,'spec-atmosphere__price'])
Z([[2,'=='],[[6],[[7],[3,'pgBanner']],[3,'flag']],[1,5]])
Z([[2,'!='],[[6],[[7],[3,'pgBanner']],[3,'flag']],[1,5]])
Z([[7],[3,'afterDiscountPrice']])
Z([[2,'&&'],[[7],[3,'fanxian']],[[6],[[7],[3,'fanxian']],[3,'amountDesc']]])
Z([[2,'&&'],[[7],[3,'pgBanner']],[[6],[[7],[3,'pgBanner']],[3,'rightIcon']]])
Z([[2,'&&'],[[7],[3,'timeObj']],[[6],[[7],[3,'timeObj']],[3,'hours']]])
Z([[2,'&&'],[[7],[3,'timeObj']],[[2,'>'],[[6],[[7],[3,'timeObj']],[3,'days']],[1,0]]])
Z([[6],[[7],[3,'bigPromoteInfo']],[3,'bannerImg']])
Z([[6],[[7],[3,'bigPromoteInfo']],[3,'bannerImgWithPrice']])
Z([3,'sale-atmos__banner'])
Z([[6],[[7],[3,'bigPromoteInfo']],[3,'bannerRightIcon']])
Z([3,'sale-atmos__price'])
Z(z[6])
Z(z[7])
Z([[2,'!'],[[7],[3,'hideReturnTip']]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_11);return __WXML_GLOBAL__.ops_cached.$gwx12_11
}
function gz$gwx12_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_12)return __WXML_GLOBAL__.ops_cached.$gwx12_12
__WXML_GLOBAL__.ops_cached.$gwx12_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'bottom_op '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pingou_style pgxcx'],[1,'']]])
Z([[7],[3,'skuItem']])
Z([[2,'!='],[[6],[[7],[3,'skuItem']],[3,'venderId']],[1,'0']])
Z([[2,'&&'],[[7],[3,'isECard']],[[2,'!'],[[7],[3,'isECardOnce']]]])
Z([[2,'!'],[[7],[3,'isECardOnce']]])
Z([3,'gotoCart'])
Z([3,'link_cart'])
Z([[7],[3,'cartNumShow']])
Z([[2,'>'],[[6],[[7],[3,'cart']],[3,'num']],[1,0]])
Z([[6],[[7],[3,'skuItem']],[3,'isToJdhealthOrder']])
Z([[2,'==='],[[6],[[7],[3,'skuItem']],[3,'noSaleFlag']],[1,1]])
Z(z[4])
Z([[7],[3,'gwfxMoney']])
Z([[6],[[7],[3,'skuItem']],[3,'isPingouToNormal']])
Z([[6],[[7],[3,'skuItem']],[3,'showPlusZxGouTip']])
Z([[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'text']])
Z([[2,'&&'],[[2,'||'],[[6],[[7],[3,'skuItem']],[3,'isPlusZxShop']],[[2,'&&'],[[6],[[7],[3,'skuItem']],[3,'isPlusZxGou']],[[2,'!'],[[2,'||'],[[6],[[7],[3,'skuItem']],[3,'isQianggou']],[[6],[[7],[3,'skuItem']],[3,'isYuYue']]]]]],[[7],[3,'isNoStock']]])
Z([[2,'||'],[[6],[[7],[3,'skuItem']],[3,'isQianggou']],[[6],[[7],[3,'skuItem']],[3,'isYuYue']]])
Z([[2,'||'],[[2,'&&'],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'text']],[[2,'!='],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'method']],[1,'buy']]],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'sellWhilePresell']],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'prevPrice']]],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'price']]],[[6],[[7],[3,'skuItem']],[3,'canBuy']]]])
Z([3,'method0'])
Z([a,[3,'btn  common_btn btn_cart adaption_bg_grad_yellow '],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'style']]])
Z([[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'enable']])
Z([[2,'&&'],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'sellWhilePresell']],[[6],[[7],[3,'skuItem']],[3,'canBuy']]])
Z(z[15])
Z([[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'launchJxApp']])
Z([[6],[[7],[3,'maskSkuConfig']],[3,'canLaunchToJxapp']])
Z([[7],[3,'launchAppParameter']])
Z([3,'launchAppError'])
Z([3,'launchApp'])
Z([a,[3,'btn common_btn btn_buy adaption_bg_grad_red  '],[[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'style']]])
Z([[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'yuyueState']])
Z(z[28])
Z([[2,'&&'],[[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'sellWhilePresell']],[[6],[[7],[3,'skuItem']],[3,'canBuy']]])
Z(z[27])
Z([a,[3,'btn common_btn btn_buy adaption_bg_grad_red '],z[29][2]])
Z([3,'empty'])
Z(z[30])
Z(z[32])
Z([3,'method1'])
Z([3,'wx-form'])
Z(z[32])
Z([[6],[[7],[3,'skuItem']],[3,'canNotBuyHere']])
Z(z[4])
Z([[7],[3,'isNoStock']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isOutOfStock']]],[[7],[3,'showArrivalNotice']]])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'skuItem']],[3,'canBuy']],[1,false]],[[2,'!'],[[6],[[7],[3,'skuItem']],[3,'skuId']]]])
Z(z[4])
Z([[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'skuItem']],[3,'spAttr']],[3,'zxLx']],[1,1]],[[2,'!'],[[7],[3,'isCardMember']]]])
Z([[6],[[7],[3,'skuItem']],[3,'isJMa']])
Z([[7],[3,'isSubscribeCar']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'skuItem']],[3,'isLoc']],[[2,'!'],[[6],[[7],[3,'skuItem']],[3,'locAddCartDirect']]]],[[2,'!'],[[7],[3,'offlineHasShop']]]])
Z([[7],[3,'isValueAddedLocShops']])
Z([[6],[[6],[[7],[3,'skuItem']],[3,'spAttr']],[3,'isFlimPrint']])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'skuItem']],[3,'spAttr']],[3,'isFlimPrint']],[1,'2']],[[2,'=='],[[6],[[6],[[7],[3,'skuItem']],[3,'spAttr']],[3,'isFlimPrint']],[1,'3']]])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'skuItem']],[3,'spAttr']],[3,'isFlimPrint']],[1,'1']],[[2,'=='],[[6],[[6],[[7],[3,'skuItem']],[3,'spAttr']],[3,'isFlimPrint']],[1,'3']]])
Z([[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'skuItem']],[3,'spAttr']],[3,'Customize']],[1,3]],[[2,'!'],[[7],[3,'isJx']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'saleAtmos']],[[6],[[7],[3,'saleAtmos']],[3,'ppmsItemId']]],[[6],[[7],[3,'saleAtmos']],[3,'cartBtnColor']]],[[6],[[7],[3,'saleAtmos']],[3,'buyBtnColor']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isECardOnce']]],[[2,'!'],[[6],[[7],[3,'skuItem']],[3,'jdfwjPbAddCart']]]])
Z([3,'buy'])
Z([3,'btn common_btn btn_buy'])
Z([[7],[3,'isECard']])
Z([[2,'+'],[1,'background: '],[[6],[[7],[3,'saleAtmos']],[3,'buyBtnColor']]])
Z(z[12])
Z(z[57])
Z(z[58])
Z([a,z[34][1],[[2,'?:'],[[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'skuItem']],[3,'spAttr']],[3,'ysp']],[1,'1']],[[2,'=='],[[6],[[6],[[7],[3,'skuItem']],[3,'spAttr']],[3,'ysp']],[1,'3']]],[1,'btn_buy_ysp'],[1,'']]])
Z(z[60])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx12_12);return __WXML_GLOBAL__.ops_cached.$gwx12_12
}
function gz$gwx12_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_13)return __WXML_GLOBAL__.ops_cached.$gwx12_13
__WXML_GLOBAL__.ops_cached.$gwx12_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'bottom_op pingou_style '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pgxcx'],[1,'']]])
Z([3,'serviceShow'])
Z([[7],[3,'skuItem']])
Z([[7],[3,'showShopEnter']])
Z([[7],[3,'showAddCartBtn']])
Z([3,'handle'])
Z([3,'addCartPg'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'skuItem']],[3,'isNoStock']],[[2,'!'],[[6],[[7],[3,'skuItem']],[3,'canNotBuyHere']]]],[[2,'!'],[[6],[[7],[3,'skuItem']],[3,'isWareOff']]]],[[7],[3,'showArrivalNotice']]])
Z([[2,'&&'],[[6],[[7],[3,'skuItem']],[3,'pgBottomBtn']],[[6],[[6],[[7],[3,'skuItem']],[3,'pgBottomBtn']],[3,'length']]])
Z([[6],[[7],[3,'skuItem']],[3,'pgBottomBtn']])
Z([3,'text'])
Z([[6],[[7],[3,'item']],[3,'text']])
Z(z[5])
Z([a,[3,'common_btn '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[1,0]],[1,'btn_join adaption_bg_grad_yellow'],[1,'btn_buy adaption_bg_grad_red']],[3,' '],[[2,'?:'],[[2,'||'],[[2,'!'],[[6],[[7],[3,'skuItem']],[3,'canBuy']]],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'cannotBuy']]],[1,'disabled_btn'],[1,'']]])
Z([[6],[[6],[[7],[3,'item']],[3,'tuanInfo']],[3,'activeId']])
Z([[2,'||'],[[2,'!'],[[6],[[7],[3,'skuItem']],[3,'canBuy']]],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'cannotBuy']]])
Z([[6],[[7],[3,'item']],[3,'method']])
Z([3,'new'])
Z([[6],[[6],[[7],[3,'item']],[3,'tuanInfo']],[3,'tuan_owner_nickname']])
Z([[6],[[7],[3,'item']],[3,'ptagName']])
Z([[6],[[6],[[7],[3,'item']],[3,'tuanInfo']],[3,'tuan_id']])
Z([[6],[[6],[[7],[3,'item']],[3,'tuanInfo']],[3,'tuanList']])
Z([[6],[[7],[3,'item']],[3,'bottomText']])
Z([[2,'&&'],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'isNewerNoPin']]])
Z([[2,'!'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'ext_info']]],[[2,'=='],[[6],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'ext_info']],[3,'isHideCpsTuan']],[1,1]]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'skuItem']],[3,'canBuy']],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']]],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'specialAppZhuanXiang']]],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'isAppZxCanLaunchToJxapp']]])
Z([[7],[3,'launchAppParameter']])
Z([3,'launchAppError'])
Z([3,'launchApp'])
Z([3,'btn_cart common_btn adaption_bg_grad_yellow'])
Z([3,'buy'])
Z(z[28])
Z([[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'originPrice']])
Z(z[5])
Z([a,[3,'btn_cart common_btn adaption_bg_grad_yellow '],[[2,'?:'],[[2,'||'],[[2,'!'],[[6],[[7],[3,'skuItem']],[3,'canBuy']]],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'cannotSingleBuy']]],[1,'disabled_btn'],[1,'']]])
Z([[2,'||'],[[2,'!'],[[6],[[7],[3,'skuItem']],[3,'canBuy']]],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'cannotSingleBuy']]])
Z([3,'gotoBuy'])
Z(z[17])
Z(z[32])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'skuItem']],[3,'canBuy']],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']]],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'isAppZxCanLaunchToJxapp']]])
Z(z[26])
Z(z[27])
Z(z[28])
Z([3,'btn_buy common_btn adaption_bg_grad_red'])
Z([3,'createTuan'])
Z(z[28])
Z([[2,'||'],[[6],[[7],[3,'skuItem']],[3,'afterDiscountPrice']],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'price']]])
Z([[2,'&&'],[[6],[[7],[3,'skuItem']],[3,'fanxian']],[[6],[[6],[[7],[3,'skuItem']],[3,'fanxian']],[3,'amountDesc']]])
Z(z[5])
Z([a,[3,'btn_buy common_btn adaption_bg_grad_red '],[[2,'?:'],[[2,'||'],[[2,'!'],[[6],[[7],[3,'skuItem']],[3,'canBuy']]],[[2,'&&'],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'cannotBuy']],[[2,'!'],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'isAppZxCanLaunch']]]]],[1,'disabled_btn'],[1,'']]])
Z([[2,'||'],[[2,'!'],[[6],[[7],[3,'skuItem']],[3,'canBuy']]],[[2,'&&'],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'cannotBuy']],[[2,'!'],[[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'isAppZxCanLaunch']]]]])
Z([3,'gotoTuan'])
Z(z[46])
Z(z[47])
Z([3,'btn_txt'])
Z([[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'isNewerNoTuan']])
Z([[6],[[6],[[7],[3,'skuItem']],[3,'pingouInfo']],[3,'isNewerTuan']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_13);return __WXML_GLOBAL__.ops_cached.$gwx12_13
}
function gz$gwx12_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_14)return __WXML_GLOBAL__.ops_cached.$gwx12_14
__WXML_GLOBAL__.ops_cached.$gwx12_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'entriesArr']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_14);return __WXML_GLOBAL__.ops_cached.$gwx12_14
}
function gz$gwx12_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_15)return __WXML_GLOBAL__.ops_cached.$gwx12_15
__WXML_GLOBAL__.ops_cached.$gwx12_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'card-share'])
Z([[2,'&&'],[[7],[3,'showCanvas']],[[2,'!'],[[7],[3,'isSupportCanvas2d']]]])
Z([[2,'&&'],[[7],[3,'showCanvas']],[[7],[3,'isSupportCanvas2d']]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_15);return __WXML_GLOBAL__.ops_cached.$gwx12_15
}
function gz$gwx12_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_16)return __WXML_GLOBAL__.ops_cached.$gwx12_16
__WXML_GLOBAL__.ops_cached.$gwx12_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'card-share'])
Z([[2,'&&'],[[7],[3,'showCanvas']],[[2,'!'],[[7],[3,'isSupportCanvas2d']]]])
Z([[2,'&&'],[[7],[3,'showCanvas']],[[7],[3,'isSupportCanvas2d']]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_16);return __WXML_GLOBAL__.ops_cached.$gwx12_16
}
function gz$gwx12_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_17)return __WXML_GLOBAL__.ops_cached.$gwx12_17
__WXML_GLOBAL__.ops_cached.$gwx12_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'review']])
Z([a,[3,'xlist_group common_margin_left review '],[[2,'?:'],[[2,'||'],[[7],[3,'isPingou']],[[7],[3,'isPingouXcx']]],[1,'pingou_style radius'],[1,'radius_top']],[3,' '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pgxcx'],[1,'']]])
Z([[7],[3,'isAppLaunch']])
Z([3,'showCommentPage'])
Z([a,[3,'xlist_item common_padding_right common_row common_module_header header '],[[2,'?:'],[[2,'>'],[[6],[[7],[3,'review']],[3,'total']],[1,0]],[1,''],[1,'no_data']]])
Z([3,'top'])
Z([3,'0'])
Z([[7],[3,'isPingou']])
Z([[2,'>'],[[6],[[7],[3,'review']],[3,'total']],[1,0]])
Z([[7],[3,'isPingouXcx']])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'review']],[3,'total']],[1,0]],[[2,'>'],[[6],[[7],[3,'review']],[3,'percent']],[1,0]]])
Z(z[8])
Z(z[8])
Z(z[10])
Z(z[8])
Z([[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'review']],[3,'detail']],[3,'length']],[1,0]],[[2,'>'],[[6],[[7],[3,'review']],[3,'total']],[1,0]]])
Z([3,'index'])
Z([[6],[[7],[3,'review']],[3,'detail']])
Z([3,'id'])
Z([[6],[[6],[[7],[3,'review']],[3,'detail']],[3,'length']])
Z(z[3])
Z([3,'common_padding_right review_item'])
Z([[7],[3,'skuId']])
Z(z[6])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isPingouXcx']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'userLevelName']],[1,'PLUS会员']]])
Z([[2,'||'],[[6],[[6],[[7],[3,'item']],[3,'thumbs']],[3,'length']],[[6],[[7],[3,'item']],[3,'videos']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isPingou']]],[[6],[[6],[[7],[3,'review']],[3,'detail']],[3,'length']]])
Z([[7],[3,'showVideo']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_17);return __WXML_GLOBAL__.ops_cached.$gwx12_17
}
function gz$gwx12_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_18)return __WXML_GLOBAL__.ops_cached.$gwx12_18
__WXML_GLOBAL__.ops_cached.$gwx12_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'entry'])
Z([[7],[3,'loopArray']])
Z([[7],[3,'index']])
Z([3,'review_item common_margin_left common_padding_right'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isPingouApp']]],[[2,'=='],[[6],[[7],[3,'entry']],[3,'userLevelName']],[1,'PLUS会员']]])
Z([3,'content'])
Z([[6],[[7],[3,'entry']],[3,'contentClass']])
Z([[6],[[7],[3,'entry']],[3,'contentExpand']])
Z([[6],[[7],[3,'entry']],[3,'contentFold']])
Z([[2,'||'],[[6],[[6],[[7],[3,'entry']],[3,'thumbs']],[3,'length']],[[6],[[6],[[7],[3,'entry']],[3,'videos']],[3,'length']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[2,'!'],[[6],[[7],[3,'entry']],[3,'carType']]]],[[6],[[6],[[7],[3,'entry']],[3,'carType']],[3,'brandName']]],[[6],[[6],[[7],[3,'entry']],[3,'carType']],[3,'seriesName']]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_18);return __WXML_GLOBAL__.ops_cached.$gwx12_18
}
function gz$gwx12_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_19)return __WXML_GLOBAL__.ops_cached.$gwx12_19
__WXML_GLOBAL__.ops_cached.$gwx12_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[7],[3,'customServiceStatus']],[[7],[3,'phoneNum']]])
Z([3,'closeActionSheet'])
Z([3,'handleActionClick'])
Z([[7],[3,'customServiceList']])
Z([[7],[3,'showActionSheetFlag']])
Z([3,'请选择客服联系方式'])
})(__WXML_GLOBAL__.ops_cached.$gwx12_19);return __WXML_GLOBAL__.ops_cached.$gwx12_19
}
function gz$gwx12_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_20)return __WXML_GLOBAL__.ops_cached.$gwx12_20
__WXML_GLOBAL__.ops_cached.$gwx12_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showDaodianInfo']])
Z([3,'daojia-recommend__info'])
Z([[2,'&&'],[[7],[3,'deliverTips']],[[6],[[7],[3,'deliverTips']],[3,'strDetail']]])
Z([[7],[3,'listTags']])
Z([3,'*this'])
Z([[7],[3,'item']])
Z([[10],[[7],[3,'modal']]])
Z([3,'modal'])
})(__WXML_GLOBAL__.ops_cached.$gwx12_20);return __WXML_GLOBAL__.ops_cached.$gwx12_20
}
function gz$gwx12_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_21)return __WXML_GLOBAL__.ops_cached.$gwx12_21
__WXML_GLOBAL__.ops_cached.$gwx12_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'||'],[[2,'||'],[[7],[3,'couponsCount']],[[2,'=='],[[7],[3,'couponFlag']],[1,4]]],[[6],[[7],[3,'promote']],[3,'length']]],[[6],[[7],[3,'parallelPromote']],[3,'length']]])
Z([3,'showPreferentialLayer'])
Z([3,'preferential common_margin_left common_padding_column'])
Z([3,'preferential__info common_content_text'])
Z([[2,'&&'],[[6],[[6],[[7],[3,'parallelPromote']],[1,0]],[3,'isPlusNF']],[[6],[[6],[[7],[3,'parallelPromote']],[1,0]],[3,'content']]])
Z([[2,'||'],[[7],[3,'couponsCount']],[[2,'=='],[[7],[3,'couponFlag']],[1,4]]])
Z([3,'preferential__coupon'])
Z([[2,'>'],[[7],[3,'couponsCount']],[1,0]])
Z([[12],[[7],[3,'sliceArr']],[[5],[[5],[[5],[[7],[3,'floorCoupons']]],[1,0]],[[2,'?:'],[[2,'&&'],[[2,'>'],[[7],[3,'couponFlag']],[1,0]],[[2,'!='],[[7],[3,'couponFlag']],[1,4]]],[1,2],[1,3]]]])
Z([3,'roleId'])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'type']],[1,'binding']])
Z([[2,'>'],[[7],[3,'couponFlag']],[1,0]])
Z([[6],[[7],[3,'promote']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_21);return __WXML_GLOBAL__.ops_cached.$gwx12_21
}
function gz$gwx12_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_22)return __WXML_GLOBAL__.ops_cached.$gwx12_22
__WXML_GLOBAL__.ops_cached.$gwx12_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'preferential-layer__content common_padding_left common_padding_right'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'parallelPromote']],[[6],[[7],[3,'parallelPromote']],[3,'length']]],[[6],[[6],[[7],[3,'parallelPromote']],[1,0]],[3,'isPlusNF']]],[[6],[[6],[[7],[3,'parallelPromote']],[1,0]],[3,'content']]])
Z([[2,'&&'],[[7],[3,'promotes']],[[6],[[7],[3,'promotes']],[3,'length']]])
Z([[7],[3,'promotes']])
Z([3,'content'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'PLUS赠品']])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'赠品']],[[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'组套商品']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'换购']])
Z([3,'gotoExchange'])
Z([3,'promote__item'])
Z([[6],[[7],[3,'item']],[3,'activityId']])
Z([[2,'!'],[[7],[3,'hideSalePromoteJump']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'优惠套装']])
Z([[6],[[7],[3,'item']],[3,'sale']])
Z([3,'gotoSalesSearch'])
Z(z[9])
Z([[6],[[7],[3,'item']],[3,'name']])
Z(z[10])
Z([[6],[[7],[3,'item']],[3,'content']])
Z(z[11])
Z([[2,'||'],[[6],[[7],[3,'item']],[3,'adurl']],[[6],[[7],[3,'item']],[3,'actUrl']]])
Z([3,'gotoAd'])
Z(z[9])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'type']])
Z(z[20])
Z([[2,'!'],[[7],[3,'hideOtherPromoteJump']]])
Z([[2,'&&'],[[7],[3,'coupons']],[[6],[[7],[3,'coupons']],[3,'length']]])
Z([3,'preferential-layer__panel'])
Z([[2,'!'],[[7],[3,'onlyCoupon']]])
Z([3,'coupon'])
Z([[7],[3,'coupons']])
Z([3,'roleId'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'binding']])
Z(z[31])
Z(z[32])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'item']],[3,'isJxNewer']]],[[2,'!=='],[[6],[[7],[3,'item']],[3,'type']],[1,'binding']]])
Z([a,[3,'coupon__item-wrap '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'didGet']],[1,'coupon__item-wrap--geted'],[1,'']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'style']],[1,3]],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'descDiscount']],[3,'length']],[1,1]]])
Z([[6],[[7],[3,'item']],[3,'descDiscount2']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'style']],[1,3]],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'descDiscount']],[3,'length']],[1,1]]])
Z(z[39])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'style']],[1,28]])
Z([3,'coupon__item-pri'])
Z([[6],[[7],[3,'item']],[3,'isJt']])
Z(z[39])
Z([[6],[[7],[3,'item']],[3,'isFans']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_22);return __WXML_GLOBAL__.ops_cached.$gwx12_22
}
function gz$gwx12_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_23)return __WXML_GLOBAL__.ops_cached.$gwx12_23
__WXML_GLOBAL__.ops_cached.$gwx12_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'preferential-layer__content common_padding_left common_padding_right'])
Z([[2,'||'],[[2,'||'],[[6],[[7],[3,'guideCanGetCoupons']],[3,'length']],[[6],[[7],[3,'guideCanUseCoupons']],[3,'length']]],[[6],[[7],[3,'guideCanUsePromotes']],[3,'length']]])
Z([3,'preferential-layer__panel'])
Z([[7],[3,'afterDiscountPrice']])
Z([3,'preferential-layer__panel-content'])
Z([[6],[[7],[3,'guideCanUsePromotes']],[3,'length']])
Z([[7],[3,'guideCanUsePromotes']])
Z([3,'content'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'PLUS赠品']])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'赠品']],[[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'组套商品']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'换购']])
Z([3,'gotoExchange'])
Z([3,'promote__item'])
Z([[6],[[7],[3,'item']],[3,'activityId']])
Z([[2,'!'],[[7],[3,'hideSalePromoteJump']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'优惠套装']])
Z([[6],[[7],[3,'item']],[3,'sale']])
Z([3,'gotoSalesSearch'])
Z(z[12])
Z([[6],[[7],[3,'item']],[3,'name']])
Z(z[13])
Z([[6],[[7],[3,'item']],[3,'content']])
Z(z[14])
Z([[2,'||'],[[6],[[7],[3,'item']],[3,'adurl']],[[6],[[7],[3,'item']],[3,'actUrl']]])
Z([3,'gotoAd'])
Z(z[12])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'type']])
Z(z[23])
Z([[2,'!'],[[7],[3,'hideOtherPromoteJump']]])
Z([[2,'||'],[[6],[[7],[3,'guideCanGetCoupons']],[3,'length']],[[6],[[7],[3,'guideCanUseCoupons']],[3,'length']]])
Z([[12],[[7],[3,'concatArr']],[[5],[[5],[[7],[3,'guideCanGetCoupons']]],[[7],[3,'guideCanUseCoupons']]]])
Z([3,'roleId'])
Z([a,[3,'coupon__item-wrap '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'didGet']],[1,'coupon__item-wrap--geted'],[1,'']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'style']],[1,3]],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'descDiscount']],[3,'length']],[1,1]]])
Z([[6],[[7],[3,'item']],[3,'descDiscount2']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'style']],[1,3]],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'descDiscount']],[3,'length']],[1,1]]])
Z(z[35])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'style']],[1,28]])
Z([3,'coupon__item-pri'])
Z([[6],[[7],[3,'item']],[3,'isJt']])
Z(z[35])
Z([[6],[[7],[3,'item']],[3,'isFans']])
Z([[2,'&&'],[[7],[3,'promotes']],[[6],[[7],[3,'promotes']],[3,'length']]])
Z([[7],[3,'promotes']])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[12])
Z(z[19])
Z(z[13])
Z(z[21])
Z(z[14])
Z(z[23])
Z(z[24])
Z(z[12])
Z(z[26])
Z(z[27])
Z(z[23])
Z(z[29])
Z([[2,'||'],[[7],[3,'jxAppCoupon']],[[2,'&&'],[[7],[3,'coupons']],[[6],[[7],[3,'coupons']],[3,'length']]]])
Z([3,'coupon'])
Z([[2,'&&'],[[7],[3,'jxNewerCoupon']],[[6],[[7],[3,'jxNewerCoupon']],[3,'length']]])
Z([[7],[3,'jxNewerCoupon']])
Z(z[32])
Z([a,[3,'coupon__item '],z[27]])
Z([[6],[[7],[3,'item']],[3,'channel_limit']])
Z([[6],[[7],[3,'item']],[3,'newuser_limit']])
Z([[7],[3,'jxAppCoupon']])
Z([[6],[[7],[3,'jxAppCoupon']],[3,'underCouponDesc']])
Z([[7],[3,'coupons']])
Z(z[32])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isJxNewer']]])
Z([a,z[33][1],z[33][2]])
Z(z[34])
Z(z[35])
Z(z[36])
Z(z[35])
Z(z[38])
Z(z[39])
Z(z[40])
Z(z[35])
Z(z[42])
})(__WXML_GLOBAL__.ops_cached.$gwx12_23);return __WXML_GLOBAL__.ops_cached.$gwx12_23
}
function gz$gwx12_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_24)return __WXML_GLOBAL__.ops_cached.$gwx12_24
__WXML_GLOBAL__.ops_cached.$gwx12_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'>'],[[6],[[7],[3,'newerCoupons']],[3,'length']],[1,0]],[[7],[3,'jxAppCoupon']]],[[2,'>'],[[6],[[7],[3,'discounts']],[3,'length']],[1,0]]],[[7],[3,'couponFlagText']]])
Z([3,'showPreferentialLayer'])
Z([3,'discount common_margin_right'])
Z([[7],[3,'newerCoupons']])
Z([3,'roleId'])
Z([[6],[[7],[3,'item']],[3,'desc']])
Z([[2,'&&'],[[7],[3,'jxAppCoupon']],[[6],[[7],[3,'jxAppCoupon']],[3,'desc']]])
Z([[7],[3,'couponFlagText']])
Z([[2,'>'],[[6],[[7],[3,'discounts']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_24);return __WXML_GLOBAL__.ops_cached.$gwx12_24
}
function gz$gwx12_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_25)return __WXML_GLOBAL__.ops_cached.$gwx12_25
__WXML_GLOBAL__.ops_cached.$gwx12_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'familyListEnter']],[3,'showName']])
Z([[7],[3,'showConfirm']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_25);return __WXML_GLOBAL__.ops_cached.$gwx12_25
}
function gz$gwx12_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_26)return __WXML_GLOBAL__.ops_cached.$gwx12_26
__WXML_GLOBAL__.ops_cached.$gwx12_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx12_26);return __WXML_GLOBAL__.ops_cached.$gwx12_26
}
function gz$gwx12_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_27)return __WXML_GLOBAL__.ops_cached.$gwx12_27
__WXML_GLOBAL__.ops_cached.$gwx12_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'slideWarp '],[[2,'?:'],[[2,'||'],[[6],[[7],[3,'focusSlideObj']],[3,'isPingou']],[[7],[3,'isPingouXcx']]],[1,'pingou_style'],[1,'']]])
Z([3,'previewImage'])
Z([a,[3,'cover Jrolling '],[[2,'?:'],[[7],[3,'isSupportNav']],[1,'no-gutter'],[1,'']]])
Z([[2,'||'],[[6],[[7],[3,'slideImages']],[3,'length']],[[7],[3,'firstScreenImg']]])
Z([3,'onSwiperChange'])
Z([1,true])
Z([3,'mod_slider'])
Z([[7],[3,'slideIdx']])
Z([1,false])
Z([a,[3,'height:'],[[7],[3,'slideHeight']],[3,'px; '],[[2,'?:'],[[7],[3,'firstScreenImg']],[[2,'+'],[[2,'+'],[1,'background: url('],[[7],[3,'firstScreenImg']]],[1,');background-size: 100% 100%;']],[1,'']]])
Z([[6],[[7],[3,'mainVideo']],[3,'insertFirstSlide']])
Z(z[10])
Z([[7],[3,'defaultImg']])
Z([[2,'!'],[[7],[3,'isPingouXcx']]])
Z([3,'mainpic_btn_grp'])
Z([[2,'=='],[[6],[[6],[[7],[3,'label']],[3,'rightDown']],[3,'flag']],[1,'alloverImg']])
Z([[2,'=='],[[6],[[6],[[7],[3,'label']],[3,'rightDown']],[3,'flag']],[1,'eBook']])
Z([[2,'&&'],[[6],[[7],[3,'mainVideo']],[3,'show']],[[2,'!'],[[6],[[7],[3,'mainVideo']],[3,'insertFirstSlide']]]])
Z([[2,'&&'],[[6],[[7],[3,'mainVideo']],[3,'show']],[[7],[3,'useJxDesign']]])
Z([[2,'&&'],[[6],[[7],[3,'mainVideo']],[3,'insertFirstSlide']],[[7],[3,'useJxDesign']]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'tagType']],[1,'image']],[[6],[[7],[3,'slideImages']],[3,'length']]])
Z([[6],[[7],[3,'slideImages']],[3,'length']])
Z([[7],[3,'bigPromoteRightup']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'slideIdx']],[[2,'?:'],[[6],[[7],[3,'mainVideo']],[3,'insertFirstSlide']],[[2,'=='],[[7],[3,'slideIdx']],[[6],[[7],[3,'slideImages']],[3,'length']]],[[2,'=='],[[7],[3,'slideIdx']],[[2,'-'],[[6],[[7],[3,'slideImages']],[3,'length']],[1,1]]]]],[[6],[[7],[3,'coverCommentData']],[3,'totalNum']]],[[2,'!'],[[6],[[7],[3,'flags']],[3,'forbidSensitiveInfo']]]])
Z([[7],[3,'isPingouXcx']])
Z([[7],[3,'mainImagePreload']])
Z([[2,'&&'],[[7],[3,'jxLive']],[[6],[[7],[3,'jxLive']],[3,'liveUrl']]])
Z([[6],[[7],[3,'jxLive']],[3,'liveFlowUrl']])
Z([3,'onLiveClick'])
Z([a,[3,'onlive '],[[2,'?:'],[[7],[3,'jxLiveLoad']],[1,'show'],[1,'']]])
Z([[6],[[7],[3,'jxLive']],[3,'liveUrl']])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[7],[3,'jxLiveClose']],[[7],[3,'hideOnlineVideo']]],[[6],[[7],[3,'mainVideo']],[3,'playing']]],[[6],[[7],[3,'mainVideo']],[3,'isFullScreen']]])
Z([a,[3,'top: '],[[7],[3,'onlineVideoTop']],[3,';']])
Z([[6],[[7],[3,'jxLive']],[3,'userPic']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_27);return __WXML_GLOBAL__.ops_cached.$gwx12_27
}
function gz$gwx12_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_28)return __WXML_GLOBAL__.ops_cached.$gwx12_28
__WXML_GLOBAL__.ops_cached.$gwx12_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[7],[3,'showListNum']],[1,0]])
Z([[7],[3,'clothesColor']])
Z([[6],[[7],[3,'item']],[3,'sku']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_28);return __WXML_GLOBAL__.ops_cached.$gwx12_28
}
function gz$gwx12_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_29)return __WXML_GLOBAL__.ops_cached.$gwx12_29
__WXML_GLOBAL__.ops_cached.$gwx12_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'skuType']],[1,2]])
Z([[2,'&&'],[[6],[[7],[3,'descData']],[3,'AuthorArr']],[[6],[[6],[[7],[3,'descData']],[3,'AuthorArr']],[3,'length']]])
Z([3,'item'])
Z([[6],[[7],[3,'descData']],[3,'EditerArr']])
Z([[6],[[7],[3,'descData']],[3,'DrawerArr']])
Z([[6],[[7],[3,'descData']],[3,'PhotographyArr']])
Z([[6],[[7],[3,'descData']],[3,'WriteArr']])
Z([[6],[[7],[3,'descData']],[3,'Transfer']])
Z([[6],[[7],[3,'descData']],[3,'Publishers']])
Z([[2,'=='],[[7],[3,'skuType']],[1,3]])
Z([3,'art_desc'])
Z([[6],[[7],[3,'descData']],[3,'Publishing_Company']])
Z(z[7])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx12_29);return __WXML_GLOBAL__.ops_cached.$gwx12_29
}
function gz$gwx12_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_30)return __WXML_GLOBAL__.ops_cached.$gwx12_30
__WXML_GLOBAL__.ops_cached.$gwx12_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[6],[[7],[3,'tabItems']],[3,'length']],[[2,'!'],[[7],[3,'isJx']]]])
Z([a,[3,'detail-guess xlist_group radius '],[[2,'?:'],[[2,'||'],[[6],[[7],[3,'guessYouLikeObj']],[3,'isPingou']],[[7],[3,'isPingouXcx']]],[1,'pingou_style'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pgxcx'],[1,'']]])
Z([3,'detail-guess__content'])
Z([[2,'!='],[[7],[3,'tabIdx']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'guessYouLike']],[3,'style']],[1,'1']])
Z([3,'swiperGuessYouLike'])
Z([3,'detail-guess__swiper'])
Z([3,'i'])
Z([3,'ul'])
Z([[6],[[7],[3,'guessYouLike']],[3,'list']])
Z([[7],[3,'i']])
Z([3,'idx'])
Z([3,'li'])
Z([[7],[3,'ul']])
Z(z[10])
Z([3,'index'])
Z([[7],[3,'li']])
Z([3,'sku'])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'type']],[1,'more']])
Z([3,'guessYouLikeGotoDetail'])
Z([3,'detail-guess__swiper-item-li'])
Z([[6],[[7],[3,'item']],[3,'click_url']])
Z([[6],[[7],[3,'item']],[3,'img']])
Z(z[10])
Z([[7],[3,'idx']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'isPingou']])
Z([[6],[[7],[3,'item']],[3,'skuName']])
Z([[6],[[7],[3,'item']],[3,'pps']])
Z([[6],[[7],[3,'item']],[3,'price']])
Z([[6],[[7],[3,'item']],[3,'sku']])
Z([a,[3,'wrap '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'source']],[1,'1']],[1,'black_bot'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'isYuyue']])
Z([3,'detail-guess__swiper-item-price adaption_color_red'])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'item']],[3,'fxrightlabel']]],[[6],[[7],[3,'item']],[3,'pingouCount']]])
Z([[6],[[7],[3,'item']],[3,'fxrightlabel']])
Z([[2,'=='],[[6],[[7],[3,'guessYouLike']],[3,'style']],[1,'2']])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[7])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[17])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[22])
Z(z[10])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2]])
Z(z[32])
Z(z[33])
Z(z[34])
Z(z[35])
Z([[2,'=='],[[6],[[7],[3,'guessYouLike']],[3,'style']],[1,'3']])
Z(z[5])
Z([3,'detail-guess__swiper new-style'])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[7])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[17])
Z(z[15])
Z(z[16])
Z(z[15])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[22])
Z(z[10])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[30])
Z([3,'mask-price'])
Z(z[34])
Z(z[35])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[7])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[17])
Z(z[16])
Z(z[15])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[22])
Z(z[10])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[30])
Z(z[90])
Z(z[34])
Z(z[35])
Z([[2,'>'],[[6],[[6],[[7],[3,'guessYouLike']],[3,'list']],[3,'length']],[1,1]])
Z([[2,'>'],[[6],[[6],[[7],[3,'usedGoods']],[3,'list']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_30);return __WXML_GLOBAL__.ops_cached.$gwx12_30
}
function gz$gwx12_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_31)return __WXML_GLOBAL__.ops_cached.$gwx12_31
__WXML_GLOBAL__.ops_cached.$gwx12_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'priceArea '],[[7],[3,'priceLayoutClass']],[3,' '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pingou_style pgxcx'],[1,'']]])
Z([[2,'&&'],[[6],[[7],[3,'info']],[3,'priceObj']],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'price']]])
Z([[2,'&&'],[[2,'||'],[[2,'||'],[[2,'!'],[[7],[3,'extraPriceFlag']]],[[2,'!'],[[6],[[7],[3,'info']],[3,'priceObj']]]],[[2,'!'],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'priorityPrice']]]],[[7],[3,'discount']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'extraPriceFlag']],[[6],[[7],[3,'info']],[3,'priceObj']]],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'priorityPrice']],[1,'plusPrice']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'extraPriceFlag']],[[6],[[7],[3,'info']],[3,'priceObj']]],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'priorityPrice']],[1,'specialPrice']]])
Z([[7],[3,'showGuide']])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'extraPriceFlag']],[[6],[[7],[3,'info']],[3,'priceObj']]],[[2,'==='],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'priorityPrice']],[1,'samPrice']]])
Z(z[5])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'extraPriceFlag']],[[6],[[7],[3,'info']],[3,'priceObj']]],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'priorityPrice']],[1,'sfpPrice']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'isNupPriceShow']],[[7],[3,'extraPriceFlag']]],[[6],[[7],[3,'info']],[3,'priceObj']]],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'priorityPrice']],[1,'nupPrice']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'extraPriceFlag']],[[6],[[7],[3,'info']],[3,'priceObj']]],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'priorityPrice']],[1,'stpPrice']]])
Z(z[5])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'extraPriceFlag']],[[6],[[7],[3,'info']],[3,'priceObj']]],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'priorityPrice']],[1,'fmpPrice']]],[[2,'!'],[[7],[3,'isPingouXcx']]]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'extraPriceFlag']],[[6],[[7],[3,'info']],[3,'priceObj']]],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'priorityPrice']],[1,'vdpPrice']]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'isNormalAct']],[[2,'||'],[[2,'||'],[[2,'!'],[[7],[3,'extraPriceFlag']]],[[2,'!'],[[6],[[7],[3,'info']],[3,'priceObj']]]],[[2,'!'],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'priorityPrice']]]]],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'marketPrice']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'info']],[3,'isNormalAct']]],[[2,'||'],[[2,'||'],[[2,'!'],[[7],[3,'extraPriceFlag']]],[[2,'!'],[[6],[[7],[3,'info']],[3,'priceObj']]]],[[2,'!'],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'priorityPrice']]]]],[[6],[[6],[[7],[3,'info']],[3,'priceObj']],[3,'linePrice']]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_31);return __WXML_GLOBAL__.ops_cached.$gwx12_31
}
function gz$gwx12_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_32)return __WXML_GLOBAL__.ops_cached.$gwx12_32
__WXML_GLOBAL__.ops_cached.$gwx12_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'price_return_container adaption_color_red'])
Z([[7],[3,'afterDiscountPrice']])
Z([[2,'&&'],[[7],[3,'fanxian']],[[6],[[7],[3,'fanxian']],[3,'amountDesc']]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_32);return __WXML_GLOBAL__.ops_cached.$gwx12_32
}
function gz$gwx12_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_33)return __WXML_GLOBAL__.ops_cached.$gwx12_33
__WXML_GLOBAL__.ops_cached.$gwx12_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'shopInfo']],[3,'shopName']])
Z([a,[3,'xlist_group common_padding_column shopInfo common_padding_right radius '],[[2,'?:'],[[2,'||'],[[7],[3,'isPingou']],[[7],[3,'isPingouXcx']]],[1,'pingou_style'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pgxcx'],[1,'']]])
Z([3,'gotoShop'])
Z([3,'shopInfo_shot common_margin_left'])
Z([[7],[3,'isPingou']])
Z([3,'shopInfo_name'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'>'],[[6],[[7],[3,'shopInfo']],[3,'scoreRankRateGrade']],[1,0]],[[2,'!='],[[6],[[7],[3,'shopInfo']],[3,'commonGoodShopCode']],[1,'1']]],[[2,'!='],[[6],[[7],[3,'shopInfo']],[3,'categoryGoodShopCode']],[1,'1002']]],[[2,'!'],[[6],[[7],[3,'shopInfo']],[3,'hasDecoUnionCode']]]])
Z([[2,'>'],[[6],[[7],[3,'shopInfo']],[3,'gczgGoodsNum']],[1,0]])
Z([[2,'>'],[[7],[3,'shopEntryType']],[1,0]])
Z(z[2])
Z([3,'shopInfo_detail'])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'shopInfo']],[3,'isZy']]],[[6],[[7],[3,'shopInfo']],[3,'isScoreShow']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isPingou']]],[[6],[[7],[3,'shopInfo']],[3,'isShopEnterShow']]])
Z([[2,'!='],[[7],[3,'venderId']],[1,0]])
Z([3,'handleModalClose'])
Z(z[14])
Z([[6],[[7],[3,'shopGift']],[3,'resTips']])
Z([[6],[[7],[3,'shopGift']],[3,'code']])
Z([[6],[[7],[3,'shopGift']],[3,'giftList']])
Z([[7],[3,'showModalFlag']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_33);return __WXML_GLOBAL__.ops_cached.$gwx12_33
}
function gz$gwx12_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_34)return __WXML_GLOBAL__.ops_cached.$gwx12_34
__WXML_GLOBAL__.ops_cached.$gwx12_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'duoDanFan']],[[6],[[7],[3,'duoDanFan']],[3,'title']]],[[6],[[7],[3,'duoDanFan']],[3,'desc']]],[[6],[[7],[3,'duoDanFan']],[3,'tips']]])
Z([3,'cancelJump'])
Z([[7],[3,'param']])
Z([3,'launch-pgapp'])
})(__WXML_GLOBAL__.ops_cached.$gwx12_34);return __WXML_GLOBAL__.ops_cached.$gwx12_34
}
function gz$gwx12_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_35)return __WXML_GLOBAL__.ops_cached.$gwx12_35
__WXML_GLOBAL__.ops_cached.$gwx12_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
Z([3,'jxvip_buy'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'status']],[1,1]],[[7],[3,'isPaySuccess']]])
Z([[6],[[7],[3,'activateInfo']],[3,'remain']])
Z([[7],[3,'protocolShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_35);return __WXML_GLOBAL__.ops_cached.$gwx12_35
}
function gz$gwx12_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_36)return __WXML_GLOBAL__.ops_cached.$gwx12_36
__WXML_GLOBAL__.ops_cached.$gwx12_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_36);return __WXML_GLOBAL__.ops_cached.$gwx12_36
}
function gz$gwx12_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_37)return __WXML_GLOBAL__.ops_cached.$gwx12_37
__WXML_GLOBAL__.ops_cached.$gwx12_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx12_37);return __WXML_GLOBAL__.ops_cached.$gwx12_37
}
function gz$gwx12_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_38)return __WXML_GLOBAL__.ops_cached.$gwx12_38
__WXML_GLOBAL__.ops_cached.$gwx12_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShowModal']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'errCode']],[1,0]],[[6],[[7],[3,'showGifts']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_38);return __WXML_GLOBAL__.ops_cached.$gwx12_38
}
function gz$gwx12_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_39)return __WXML_GLOBAL__.ops_cached.$gwx12_39
__WXML_GLOBAL__.ops_cached.$gwx12_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'nav_tab'])
Z([a,[3,'top: '],[[7],[3,'top']]])
Z([[7],[3,'tabs']])
Z([[6],[[7],[3,'item']],[3,'show']])
Z([[7],[3,'showPingouShareTips']])
Z([[7],[3,'showShareTipsPingou']])
Z([[7],[3,'isXcxEnv']])
Z([[7],[3,'showShareTips']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_39);return __WXML_GLOBAL__.ops_cached.$gwx12_39
}
function gz$gwx12_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_40)return __WXML_GLOBAL__.ops_cached.$gwx12_40
__WXML_GLOBAL__.ops_cached.$gwx12_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showOfflineStore']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_40);return __WXML_GLOBAL__.ops_cached.$gwx12_40
}
function gz$gwx12_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_41)return __WXML_GLOBAL__.ops_cached.$gwx12_41
__WXML_GLOBAL__.ops_cached.$gwx12_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'part-comment '],[[2,'?:'],[[7],[3,'isShowPopup']],[1,'show'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'showPopupAnimEnd']],[1,'no-transform'],[[2,'?:'],[[7],[3,'isShowPopupAnim']],[1,'anim-in'],[1,'']]],[3,' '],[[2,'?:'],[[2,'||'],[[7],[3,'isPingou']],[[7],[3,'isPingouXcx']]],[1,'pingou_style'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pgxcx'],[1,'']]])
Z([3,'partComment'])
Z([a,[3,'padding-top: '],[[2,'+'],[[2,'||'],[[7],[3,'navHeight']],[1,0]],[1,45]],[3,'px; '],[[2,'?:'],[[2,'&&'],[[7],[3,'noScrollTop']],[[2,'!='],[[7],[3,'noScrollTop']],[1,'0px']]],[[2,'+'],[[2,'+'],[1,'margin-top:'],[[7],[3,'noScrollTop']]],[1,';']],[1,'']]])
Z([3,'review-header radius_bottom common_padding_right'])
Z([3,'idx'])
Z([3,'entry'])
Z([[7],[3,'entries']])
Z(z[4])
Z([3,'switchTab'])
Z([[2,'?:'],[[2,'?:'],[[7],[3,'rid']],[[2,'=='],[[6],[[7],[3,'entry']],[3,'rid']],[[7],[3,'rid']]],[[2,'=='],[[7],[3,'curIdx']],[[7],[3,'idx']]]],[1,'review-header__tab review-header__tab--cur'],[1,'review-header__tab']])
Z([[7],[3,'idx']])
Z([[6],[[7],[3,'entry']],[3,'rid']])
Z([[2,'!=='],[[7],[3,'idx']],[1,1]])
Z([[7],[3,'showAllTabs']])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[4])
Z([3,'review-list'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'curIdx']],[[7],[3,'idx']]],[1,'display:block;'],[1,'']])
Z([[6],[[7],[3,'entry']],[3,'hasError']])
Z([3,'review-list__group'])
Z([[2,'&&'],[[6],[[7],[3,'entry']],[3,'list']],[[2,'>'],[[6],[[6],[[7],[3,'entry']],[3,'list']],[3,'length']],[1,0]]])
Z([3,'previewVideo'])
Z([3,'showVideoToast'])
Z([[6],[[7],[3,'entry']],[3,'list']])
Z([[7],[3,'isPingou']])
Z([[6],[[6],[[7],[3,'entry']],[3,'foldList']],[3,'length']])
Z([[2,'!'],[[6],[[7],[3,'entry']],[3,'foldStatus']]])
Z(z[23])
Z(z[24])
Z([[6],[[7],[3,'entry']],[3,'foldList']])
Z(z[26])
Z([[7],[3,'showVideo']])
Z([[7],[3,'videoToastShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_41);return __WXML_GLOBAL__.ops_cached.$gwx12_41
}
function gz$gwx12_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_42)return __WXML_GLOBAL__.ops_cached.$gwx12_42
__WXML_GLOBAL__.ops_cached.$gwx12_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'tuanInfoList']],[3,'length']],[1,0]])
Z([3,'tuan_recommend_list_warp'])
Z([[6],[[7],[3,'pingouInfo']],[3,'isAppZxCanLaunchToJxapp']])
Z([[2,'>'],[[6],[[7],[3,'tuanInfoList']],[3,'length']],[1,1]])
Z([3,'tuan'])
Z([[7],[3,'tuanInfoList']])
Z([3,'tuan_owner_nickname'])
Z([[2,'>'],[[6],[[7],[3,'tuan']],[3,'tuan_time_left']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_42);return __WXML_GLOBAL__.ops_cached.$gwx12_42
}
function gz$gwx12_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_43)return __WXML_GLOBAL__.ops_cached.$gwx12_43
__WXML_GLOBAL__.ops_cached.$gwx12_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'popup__body info__content'])
Z([[6],[[7],[3,'popupLayerObj']],[3,'topDesc']])
Z([[6],[[7],[3,'popupLayerObj']],[3,'content']])
Z([3,'title'])
Z([3,'navigateTo'])
Z([3,'xlist_item common_margin_left service-item'])
Z([[6],[[7],[3,'item']],[3,'flag']])
Z([[6],[[7],[3,'item']],[3,'iconCode']])
Z([[6],[[7],[3,'item']],[3,'toUrl']])
Z([[6],[[7],[3,'item']],[3,'videoUrl']])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z([[2,'||'],[[2,'||'],[[2,'&&'],[[7],[3,'skuId']],[[2,'==='],[[6],[[7],[3,'item']],[3,'iconCode']],[1,'service_shangjiazx']]],[[6],[[7],[3,'item']],[3,'toUrl']]],[[6],[[7],[3,'item']],[3,'videoUrl']]])
Z([[7],[3,'extraContent']])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z([[2,'||'],[[2,'&&'],[[7],[3,'skuId']],[[2,'==='],[[6],[[7],[3,'item']],[3,'iconCode']],[1,'service_shangjiazx']]],[[6],[[7],[3,'item']],[3,'toUrl']]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_43);return __WXML_GLOBAL__.ops_cached.$gwx12_43
}
function gz$gwx12_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_44)return __WXML_GLOBAL__.ops_cached.$gwx12_44
__WXML_GLOBAL__.ops_cached.$gwx12_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[2,'?:'],[[2,'||'],[[7],[3,'isPingou']],[[7],[3,'isPingouXcx']]],[1,'pingou_style'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pgxcx'],[1,'']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'attr']],[3,'isLOC']],[1,'1']],[[2,'!'],[[7],[3,'locAddCartDirect']]]],[[2,'!'],[[7],[3,'offline']]]],[[2,'!'],[[7],[3,'isSubscribeCar']]]])
Z([[2,'&&'],[[7],[3,'content']],[[7],[3,'canNotBuyHere']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'special']],[[6],[[7],[3,'processStatus']],[3,'showStockStatus']]],[[2,'||'],[[2,'==='],[[7],[3,'state']],[1,0]],[[2,'==='],[[7],[3,'state']],[1,34]]]])
Z([[7],[3,'content']])
Z([[7],[3,'isPingou']])
Z([[2,'&&'],[[7],[3,'pgCannotBuy']],[[7],[3,'pgCannotBuyMsg']]])
Z([[2,'!'],[[7],[3,'isAppZx']]])
Z([[2,'||'],[[2,'||'],[[7],[3,'pgNewerNoPinBottomMsg']],[[7],[3,'pgNewerNoTuanBottomMsg']]],[[7],[3,'newerCouponBottomText']]])
Z([[2,'?:'],[[7],[3,'pgNewerNoTuanBottomMsg']],[1,'onNewerNoTuanTipClick'],[1,'onNewerNoPinTipClick']])
Z([a,[3,'bottom_newer_tips '],[[2,'?:'],[[2,'||'],[[7],[3,'pgNewerNoPinBottomMsg']],[[7],[3,'newerCouponBottomText']]],[1,'qp'],[1,'']]])
Z([[7],[3,'newerCouponRemainTime']])
Z([[7],[3,'showUserLogin']])
Z([[7],[3,'pgSpecBottomMsg']])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'pgCannotBuy']]],[[7],[3,'tjTuanInfo']]],[[6],[[7],[3,'tjTuanInfo']],[3,'tuanList']]])
Z([3,'gotoPingouDetail'])
Z([a,[3,'bottom_tips pintuan '],[[2,'?:'],[[7],[3,'tjTuanShow']],[1,'show'],[1,'']]])
Z([[6],[[7],[3,'tjTuanInfo']],[3,'activeId']])
Z([3,'new'])
Z([[6],[[7],[3,'tjTuanInfo']],[3,'tuan_owner_nickname']])
Z([[6],[[7],[3,'tjTuanInfo']],[3,'tuan_id']])
Z([[6],[[7],[3,'tjTuanInfo']],[3,'tuanList']])
Z([3,'pintuan-left'])
Z([[7],[3,'isTuanOfFriend']])
Z(z[21])
Z([[7],[3,'index']])
Z([[2,'||'],[[2,'!'],[[7],[3,'isTuanOfFriend']]],[[2,'=='],[[7],[3,'index']],[1,0]]])
Z([[2,'&&'],[[7],[3,'isJma']],[[2,'!'],[[7],[3,'hasBigouCode']]]])
Z([[2,'&&'],[[6],[[7],[3,'processStatus']],[3,'needCertifiction']],[[2,'||'],[[2,'=='],[[6],[[7],[3,'processStatus']],[3,'certifictionStatus']],[1,0]],[[2,'=='],[[6],[[7],[3,'processStatus']],[3,'certifictionStatus']],[1,1]]]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'special']]],[[2,'=='],[[6],[[7],[3,'attr']],[3,'zxLx']],[1,1]]],[[2,'!'],[[7],[3,'isCardMember']]]])
Z([[2,'&&'],[[7],[3,'isNoPlus']],[[6],[[7],[3,'plusOpenTips']],[3,'content']]])
Z([3,'gotoPlusPage'])
Z([3,'bottom_plus_tip'])
Z([3,'plus'])
Z([3,'bottom_plus_tip_body'])
Z([[6],[[7],[3,'plusOpenTips']],[3,'showDescTips']])
Z([[2,'&&'],[[6],[[7],[3,'plusOpenTips']],[3,'showExtraTips']],[[6],[[7],[3,'plusOpenTips']],[3,'goTip']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'maskSkuConfig']],[[6],[[7],[3,'maskSkuConfig']],[3,'downloadTips']]],[[6],[[6],[[7],[3,'maskSkuConfig']],[3,'downloadTips']],[3,'other']]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_44);return __WXML_GLOBAL__.ops_cached.$gwx12_44
}
function gz$gwx12_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_45)return __WXML_GLOBAL__.ops_cached.$gwx12_45
__WXML_GLOBAL__.ops_cached.$gwx12_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'share-layer'])
Z([3,'share-layer__content'])
Z([[7],[3,'canUseRecommendBtn']])
Z(z[2])
Z([3,'doPreviewImage'])
Z([a,[3,'image-wrapper '],[[2,'?:'],[[7],[3,'previewImgUrl']],[1,'show'],[1,'']]])
Z([[7],[3,'previewImgUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_45);return __WXML_GLOBAL__.ops_cached.$gwx12_45
}
function gz$gwx12_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_46)return __WXML_GLOBAL__.ops_cached.$gwx12_46
__WXML_GLOBAL__.ops_cached.$gwx12_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'share-layer'])
Z([3,'share-layer__content'])
Z([[7],[3,'canUseRecommendBtn']])
Z(z[2])
Z([3,'doPreviewImage'])
Z([a,[3,'image-wrapper '],[[2,'?:'],[[7],[3,'previewImgUrl']],[1,'show'],[1,'']]])
Z([[7],[3,'previewImgUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_46);return __WXML_GLOBAL__.ops_cached.$gwx12_46
}
function gz$gwx12_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_47)return __WXML_GLOBAL__.ops_cached.$gwx12_47
__WXML_GLOBAL__.ops_cached.$gwx12_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx12_47);return __WXML_GLOBAL__.ops_cached.$gwx12_47
}
function gz$gwx12_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_48)return __WXML_GLOBAL__.ops_cached.$gwx12_48
__WXML_GLOBAL__.ops_cached.$gwx12_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'sku-services_wrap '],[[2,'?:'],[[2,'||'],[[7],[3,'isPingou']],[[7],[3,'isPingouXcx']]],[1,'pingou_style'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pgxcx'],[1,'']]])
Z([[7],[3,'loading']])
Z([[2,'&&'],[[6],[[7],[3,'options']],[3,'ext']],[[2,'>'],[[6],[[6],[[7],[3,'options']],[3,'ext']],[3,'length']],[1,0]]])
Z([3,'groupIndex'])
Z([3,'group'])
Z([[6],[[7],[3,'options']],[3,'ext']])
Z([3,'name'])
Z([3,'services_group common_module_header'])
Z([[2,'&&'],[[6],[[7],[3,'group']],[3,'mainSkuId']],[[2,'||'],[[2,'!'],[[7],[3,'isPingou']]],[[7],[3,'ybDetailSwitch']]]])
Z([[6],[[7],[3,'group']],[3,'list']])
Z([3,'id'])
Z([3,'onCheck'])
Z([a,[3,'services_group_list_item '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,'checked'],[1,'']]])
Z([[7],[3,'groupIndex']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'ext'])
Z([[6],[[7],[3,'item']],[3,'tag']])
Z([[6],[[7],[3,'item']],[3,'desc']])
Z([[2,'&&'],[[6],[[7],[3,'options']],[3,'jd']],[[2,'>'],[[6],[[6],[[7],[3,'options']],[3,'jd']],[3,'length']],[1,0]]])
Z(z[3])
Z(z[4])
Z([[6],[[7],[3,'options']],[3,'jd']])
Z(z[6])
Z(z[9])
Z(z[10])
Z(z[11])
Z([a,z[12][1],z[12][2]])
Z(z[13])
Z(z[14])
Z([3,'jd'])
Z([3,'service_header'])
Z([[6],[[7],[3,'item']],[3,'isFavor']])
Z(z[16])
Z(z[17])
Z([[2,'&&'],[[6],[[7],[3,'options']],[3,'gift']],[[2,'>'],[[6],[[6],[[7],[3,'options']],[3,'gift']],[3,'length']],[1,0]]])
Z(z[3])
Z(z[4])
Z([[6],[[7],[3,'options']],[3,'gift']])
Z(z[6])
Z(z[9])
Z(z[10])
Z(z[11])
Z([a,z[12][1],z[12][2],[3,' \x27gift\x27}}']])
Z(z[13])
Z(z[14])
Z([3,'gift'])
Z(z[30])
Z(z[31])
Z(z[16])
Z(z[17])
Z([[6],[[7],[3,'item']],[3,'image']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_48);return __WXML_GLOBAL__.ops_cached.$gwx12_48
}
function gz$gwx12_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_49)return __WXML_GLOBAL__.ops_cached.$gwx12_49
__WXML_GLOBAL__.ops_cached.$gwx12_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'popup__main radius_top '],[[2,'?:'],[[7],[3,'isShowPopup']],[1,'show'],[1,'']]])
Z([3,'sku-layer__header-info'])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'isPingou']],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isButie']]],[[2,'!='],[[6],[[7],[3,'othersData']],[3,'buyType']],[1,1]]])
Z([3,'sku-layer__header-price'])
Z([[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'price']])
Z([[2,'&&'],[[6],[[7],[3,'info']],[3,'afterDiscountPrice']],[[2,'=='],[[6],[[7],[3,'goodsNum']],[3,'value']],[1,1]]])
Z([[2,'&&'],[[6],[[7],[3,'info']],[3,'fanxian']],[[6],[[6],[[7],[3,'info']],[3,'fanxian']],[3,'amountDesc']]])
Z([[2,'&&'],[[6],[[6],[[7],[3,'info']],[3,'pgBanner']],[3,'rightTips']],[[2,'>'],[[6],[[6],[[6],[[7],[3,'info']],[3,'pgBanner']],[3,'rightTips']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[6],[[7],[3,'info']],[3,'afterDiscountTotalBenefit']],[[2,'>'],[[6],[[7],[3,'goodsNum']],[3,'value']],[1,1]]])
Z([[2,'&&'],[[6],[[7],[3,'info']],[3,'isPingou']],[[2,'!='],[[6],[[7],[3,'othersData']],[3,'buyType']],[1,1]]])
Z([a,[3,'sku-layer__header-price '],[[7],[3,'headerClass']]])
Z(z[4])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'active_info']]],[[2,'!'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isNewerNoPin']]]],[[2,'!'],[[6],[[7],[3,'info']],[3,'afterDiscountPrice']]]])
Z(z[5])
Z(z[6])
Z(z[8])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'othersData']],[3,'buyType']],[1,1]],[[6],[[7],[3,'info']],[3,'isPingou']]],[[6],[[7],[3,'info']],[3,'pingouInfo']]],[[2,'!'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isNewerNoPin']]]])
Z([[6],[[7],[3,'info']],[3,'jdPrice']])
Z([3,'price-item main-price'])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'bottomBtn']],[1,0]],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'sellWhilePresell']]],[[6],[[7],[3,'info']],[3,'canBuy']]])
Z([[2,'=='],[[6],[[7],[3,'othersData']],[3,'btnType']],[1,'subscribe']])
Z([[2,'=='],[[6],[[7],[3,'othersData']],[3,'btnType']],[1,'buy']])
Z([1,true])
Z([[7],[3,'info']])
Z([[7],[3,'isOfflineHasShop']])
Z([1,'sku-layer'])
Z([1,false])
Z([[6],[[7],[3,'info']],[3,'isPingou']])
Z([[2,'&&'],[[6],[[7],[3,'bottomBtn']],[1,1]],[[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'price']]])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z([[2,'!'],[[6],[[7],[3,'info']],[3,'isPingou']]])
Z([3,'popup__body sku-layer__content common_padding_left common_padding_right'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'pgSkuLayerRule']],[[6],[[6],[[7],[3,'info']],[3,'pgSkuLayerRule']],[3,'rightTips']]],[[2,'>'],[[6],[[6],[[6],[[7],[3,'info']],[3,'pgSkuLayerRule']],[3,'rightTips']],[3,'length']],[1,0]]],[[2,'!='],[[6],[[7],[3,'othersData']],[3,'buyType']],[1,1]]],[[2,'!='],[[6],[[7],[3,'othersData']],[3,'buyType']],[[2,'-'],[1,1]]]])
Z([[6],[[6],[[7],[3,'info']],[3,'pgSkuLayerRule']],[3,'icon']])
Z([3,'sku-layer__panel'])
Z([[2,'||'],[[6],[[7],[3,'skuProps']],[3,'length']],[[6],[[7],[3,'info']],[3,'text']]])
Z([3,'index'])
Z([3,'skuProp'])
Z([[7],[3,'skuProps']])
Z([3,'name'])
Z([[2,'>='],[[6],[[6],[[7],[3,'skuProp']],[3,'value']],[3,'length']],[1,1]])
Z([3,'sku-layer__item-list'])
Z([[7],[3,'isPingouApp']])
Z([3,'idx'])
Z([[6],[[7],[3,'skuProp']],[3,'value']])
Z([3,'*this'])
Z([[7],[3,'item']])
Z(z[47])
Z(z[48])
Z(z[49])
Z(z[50])
Z([[2,'&&'],[[7],[3,'valueAddedLocShops']],[[6],[[7],[3,'valueAddedLocShops']],[3,'show']]])
Z([[6],[[7],[3,'valueAddedLocShops']],[3,'setupStatus']])
Z([[2,'=='],[[7],[3,'locShopSetupStatus']],[1,'1']])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isSuit']]],[[6],[[7],[3,'info']],[3,'poolList']]],[[6],[[6],[[7],[3,'info']],[3,'poolList']],[3,'length']]])
Z([3,'gotoGiftList'])
Z([3,'gift-pool__list'])
Z([[6],[[7],[3,'info']],[3,'poolFlag']])
Z(z[47])
Z([[6],[[6],[[6],[[7],[3,'info']],[3,'poolList']],[1,0]],[3,'selectedArr']])
Z([[2,'<'],[[7],[3,'idx']],[1,4]])
Z([3,'gift-pool__images'])
Z(z[47])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'num']],[1,1]])
Z([[2,'=='],[[7],[3,'idx']],[1,4]])
Z([[2,'>'],[[6],[[6],[[7],[3,'info']],[3,'poolList']],[3,'length']],[1,4]])
Z([[7],[3,'showNumController']])
Z([[2,'&&'],[[6],[[7],[3,'info']],[3,'stock']],[[2,'>'],[[6],[[6],[[7],[3,'info']],[3,'stock']],[3,'rn']],[1,0]]])
Z([[7],[3,'isLoading']])
Z([[7],[3,'areaId']])
Z([3,'updateAddedServices'])
Z([[6],[[7],[3,'info']],[3,'brandId']])
Z([[6],[[7],[3,'info']],[3,'jdCategory']])
Z(z[27])
Z([[6],[[7],[3,'info']],[3,'isSupportGift']])
Z([[6],[[7],[3,'info']],[3,'isSupportPackageJd']])
Z([[6],[[7],[3,'info']],[3,'isSupportYanbao']])
Z(z[17])
Z([[6],[[7],[3,'info']],[3,'skuId']])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'othersData']],[3,'buyType']],[1,1]],[[2,'!'],[[2,'||'],[[7],[3,'tipsContent']],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'cannotBuy']]],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'cannotBuyMsg']]]]]])
Z([[7],[3,'tipsContent']])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'maskSkuConfig']],[[6],[[7],[3,'maskSkuConfig']],[3,'downloadTips']]],[[6],[[6],[[7],[3,'maskSkuConfig']],[3,'downloadTips']],[3,'other']]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'othersData']],[3,'buyType']],[1,1]],[[2,'!'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isAppZx']]]],[[2,'!'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'cannotBuy']]],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'cannotBuyMsg']]]]],[[6],[[7],[3,'info']],[3,'pingouInfo']]],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'specBottomMsg']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'othersData']],[3,'buyType']],[1,1]],[[2,'!='],[[6],[[7],[3,'othersData']],[3,'buyType']],[[2,'-'],[1,1]]]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'cannotBuy']]],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'cannotBuyMsg']]])
Z([[2,'!'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isAppZx']]])
Z([[2,'&&'],[[6],[[7],[3,'info']],[3,'isPingou']],[[2,'||'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'pingouInfo']],[[2,'||'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'newerNoPinBottomMsg']],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'newerNoTuanBottomMsg']]]],[[7],[3,'newerCouponBottomText']]]])
Z([[2,'?:'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'newerNoTuanBottomMsg']],[1,'onNewerNoTuanTipClick'],[1,'onNewerNoPinTipClick']])
Z([a,[3,'bottom_newer_tips '],[[2,'?:'],[[2,'||'],[[2,'||'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'newerNoPinBottomMsg']],[[2,'&&'],[[6],[[7],[3,'info']],[3,'newerLayer']],[[6],[[6],[[7],[3,'info']],[3,'newerLayer']],[3,'bottomText']]]],[[7],[3,'newerCouponBottomText']]],[1,'qp'],[1,'']]])
Z([[7],[3,'newerCouponRemainTime']])
Z([[7],[3,'showUserLogin']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'isPingou']],[[6],[[7],[3,'info']],[3,'pingouInfo']]],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'tjTuanInfo']]],[[6],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'tjTuanInfo']],[3,'tuanList']]],[[2,'!='],[[6],[[7],[3,'othersData']],[3,'buyType']],[1,3]]])
Z([3,'gotoPingouDetail'])
Z([3,'sku-layer__tips pintuan'])
Z([3,'pintuan-left'])
Z([[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isTuanOfFriend']])
Z([[6],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'tjTuanInfo']],[3,'tuanList']])
Z([[7],[3,'index']])
Z([[2,'||'],[[2,'!'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isTuanOfFriend']]],[[2,'=='],[[7],[3,'index']],[1,0]]])
Z([[7],[3,'showActions']])
Z([[2,'&&'],[[6],[[7],[3,'info']],[3,'isPingou']],[[2,'||'],[[2,'=='],[[6],[[7],[3,'othersData']],[3,'buyType']],[1,0]],[[2,'=='],[[6],[[7],[3,'othersData']],[3,'buyType']],[1,'']]]])
Z([3,'sku-layer__btn'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'pgAddCartShow']],[[6],[[7],[3,'info']],[3,'canBuy']]],[[2,'!'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'cannotAddCart']]]],[[2,'!'],[[2,'&&'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'ext_info']],[[2,'=='],[[6],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'ext_info']],[3,'isHideCpsTuan']],[1,1]]]]])
Z([3,'addToCart'])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'isNoStock']],[[2,'!'],[[6],[[7],[3,'info']],[3,'canNotBuyHere']]]],[[2,'!'],[[6],[[7],[3,'info']],[3,'isWareOff']]]],[[7],[3,'showArrivalNotice']]])
Z([[2,'&&'],[[6],[[7],[3,'info']],[3,'pgBottomBtn']],[[6],[[6],[[7],[3,'info']],[3,'pgBottomBtn']],[3,'length']]])
Z([[6],[[7],[3,'info']],[3,'pgBottomBtn']])
Z([3,'text'])
Z([[6],[[7],[3,'item']],[3,'text']])
Z([[6],[[7],[3,'item']],[3,'method']])
Z([a,[3,'common_btn '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[1,0]],[1,'btn-join btn-join--pingou adaption_bg_grad_yellow'],[1,'btn-buy btn-buy--pingou adaption_bg_grad_red']],[3,' '],[[2,'?:'],[[2,'||'],[[2,'!'],[[6],[[7],[3,'info']],[3,'canBuy']]],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'cannotBuy']]],[1,'disabled_btn'],[1,'']]])
Z([[2,'||'],[[2,'!'],[[6],[[7],[3,'info']],[3,'canBuy']]],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'cannotBuy']]])
Z([[6],[[7],[3,'item']],[3,'ptagName']])
Z([[6],[[7],[3,'item']],[3,'tuanInfo']])
Z([[6],[[7],[3,'item']],[3,'bottomText']])
Z([[2,'&&'],[[6],[[7],[3,'info']],[3,'pingouInfo']],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isNewerNoPin']]])
Z([[2,'!'],[[2,'&&'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'ext_info']],[[2,'=='],[[6],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'ext_info']],[3,'isHideCpsTuan']],[1,1]]]])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'canBuy']],[[6],[[7],[3,'info']],[3,'pingouInfo']]],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isAppZxCanLaunchToJxapp']]])
Z([[7],[3,'launchAppParameter']])
Z([3,'launchAppError'])
Z([3,'launchApp'])
Z([3,'btn common_btn btn-buy btn-buy--pingou adaption_bg_grad_red'])
Z([3,'createTuan'])
Z(z[124])
Z(z[6])
Z([3,'gotoTuan'])
Z([a,[3,'btn common_btn btn-buy btn-buy--pingou adaption_bg_grad_red '],[[2,'?:'],[[2,'||'],[[2,'!'],[[6],[[7],[3,'info']],[3,'canBuy']]],[[2,'&&'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'cannotBuy']],[[2,'!'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isAppZxCanLaunch']]]]],[1,'disabled'],[1,'']]])
Z([[2,'||'],[[2,'!'],[[6],[[7],[3,'info']],[3,'canBuy']]],[[2,'&&'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'cannotBuy']],[[2,'!'],[[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isAppZxCanLaunch']]]]])
Z([3,'1'])
Z(z[6])
Z([3,'btn_tuan btn_txt'])
Z([[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isNewerNoTuan']])
Z([[6],[[6],[[7],[3,'info']],[3,'pingouInfo']],[3,'isNewerTuan']])
Z(z[34])
Z(z[105])
Z([[6],[[7],[3,'info']],[3,'isToJdhealthOrder']])
Z([[2,'==='],[[6],[[7],[3,'info']],[3,'noSaleFlag']],[1,1]])
Z([[2,'!'],[[6],[[7],[3,'info']],[3,'isECardOnce']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'showGwfx']],[[6],[[7],[3,'info']],[3,'gwfxInfo']]],[[6],[[6],[[7],[3,'info']],[3,'gwfxInfo']],[3,'returnMoney']]])
Z([[6],[[7],[3,'info']],[3,'isPingouToNormal']])
Z([[6],[[7],[3,'info']],[3,'showPlusZxGouTip']])
Z([[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'text']])
Z([[2,'&&'],[[2,'||'],[[6],[[7],[3,'info']],[3,'isPlusZxShop']],[[2,'&&'],[[6],[[7],[3,'info']],[3,'isPlusZxGou']],[[2,'!'],[[2,'||'],[[6],[[7],[3,'info']],[3,'isQianggou']],[[6],[[7],[3,'info']],[3,'isYuYue']]]]]],[[6],[[7],[3,'info']],[3,'isNoStock']]])
Z([[2,'||'],[[6],[[7],[3,'info']],[3,'isQianggou']],[[6],[[7],[3,'info']],[3,'isYuYue']]])
Z([[2,'||'],[[2,'&&'],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'text']],[[2,'!='],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'method']],[1,'buy']]],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'sellWhilePresell']],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'prevPrice']]],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'price']]],[[6],[[7],[3,'info']],[3,'canBuy']]]])
Z([3,'method0'])
Z([a,[3,'btn common_btn btn-cart adaption_bg_grad_yellow '],[[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'style']]])
Z([[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'enable']])
Z([[6],[[6],[[7],[3,'bottomBtn']],[1,0]],[3,'sellWhilePresell']])
Z(z[145])
Z([[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'launchJxApp']])
Z([[6],[[7],[3,'maskSkuConfig']],[3,'canLaunchToJxapp']])
Z(z[122])
Z(z[123])
Z(z[124])
Z([a,[3,'btn common_btn btn-buy adaption_bg_grad_red '],[[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'style']]])
Z([3,'maskYl'])
Z([[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'yuyueState']])
Z(z[124])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'sellWhilePresell']],[[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'prevPrice']]],[[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'price']]],[[6],[[7],[3,'info']],[3,'canBuy']]])
Z(z[123])
Z([a,z[159][1],z[159][2]])
Z([3,'maskYlEmpty'])
Z(z[161])
Z(z[163])
Z([[2,'=='],[[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'method']],[1,'subscribeItem']])
Z([3,'method1'])
Z([3,'wx-form'])
Z(z[163])
Z(z[170])
Z([a,z[159][1],z[159][2]])
Z([[6],[[6],[[7],[3,'bottomBtn']],[1,1]],[3,'enable']])
Z(z[163])
Z([[6],[[7],[3,'info']],[3,'canNotBuyHere']])
Z(z[141])
Z([[2,'&&'],[[6],[[7],[3,'info']],[3,'stock']],[[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'stock']],[3,'StockState']],[1,0]],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'stock']],[3,'StockState']],[1,34]]]])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'info']],[3,'isWareOff']]],[[7],[3,'showArrivalNotice']]])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'info']],[3,'canBuy']],[1,false]],[[2,'!'],[[6],[[7],[3,'info']],[3,'skuId']]]])
Z(z[141])
Z([[6],[[7],[3,'info']],[3,'isJMa']])
Z([[6],[[7],[3,'info']],[3,'isSubscribeCar']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'isLoc']],[[2,'!'],[[6],[[7],[3,'info']],[3,'locAddCartDirect']]]],[[2,'!'],[[7],[3,'isOfflineHasShop']]]])
Z([[6],[[7],[3,'valueAddedLocShops']],[3,'show']])
Z([[6],[[6],[[7],[3,'info']],[3,'spAttr']],[3,'isFlimPrint']])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'spAttr']],[3,'isFlimPrint']],[1,'2']],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'spAttr']],[3,'isFlimPrint']],[1,'3']]])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'spAttr']],[3,'isFlimPrint']],[1,'1']],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'spAttr']],[3,'isFlimPrint']],[1,'3']]])
Z([[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'spAttr']],[3,'Customize']],[1,'3']],[[2,'!'],[[6],[[7],[3,'info']],[3,'isJX']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'saleAtmos']],[[6],[[7],[3,'saleAtmos']],[3,'ppmsItemId']]],[[6],[[7],[3,'saleAtmos']],[3,'cartBtnColor']]],[[6],[[7],[3,'saleAtmos']],[3,'buyBtnColor']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isECardOnce']]],[[2,'!'],[[6],[[7],[3,'info']],[3,'jdfwjPbAddCart']]]])
Z([3,'doBuy'])
Z([3,'btn common_btn btn-buy'])
Z([[2,'+'],[1,'background: '],[[6],[[7],[3,'saleAtmos']],[3,'buyBtnColor']]])
Z(z[142])
Z(z[192])
Z(z[193])
Z([a,z[159][1],[[2,'?:'],[[2,'&&'],[[6],[[7],[3,'info']],[3,'spAttr']],[[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'spAttr']],[3,'ysp']],[1,'1']],[[2,'=='],[[6],[[6],[[7],[3,'info']],[3,'spAttr']],[3,'ysp']],[1,'3']]]],[1,'btn-buy--ysp'],[1,'']]])
Z(z[142])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx12_49);return __WXML_GLOBAL__.ops_cached.$gwx12_49
}
function gz$gwx12_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_50)return __WXML_GLOBAL__.ops_cached.$gwx12_50
__WXML_GLOBAL__.ops_cached.$gwx12_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'xlist_item common_margin_left'])
Z([a,[3,'min-height: '],[[6],[[7],[3,'tab']],[3,'minHeight']],[3,';']])
Z([3,'onHandleLongPress'])
Z([3,'onHandleTap'])
Z([3,'onHandleTouchEnd'])
Z([3,'onHandleTouchStart'])
Z([3,'section_intro'])
Z([[2,'!='],[[6],[[7],[3,'tab']],[3,'index']],[1,0]])
Z([[6],[[6],[[6],[[7],[3,'tab']],[3,'intro']],[3,'notices']],[3,'length']])
Z([[2,'&&'],[[7],[3,'isBookOrDisk']],[[6],[[6],[[6],[[7],[3,'tab']],[3,'intro']],[3,'contents']],[3,'length']]])
Z([3,'section'])
Z([[6],[[6],[[7],[3,'tab']],[3,'intro']],[3,'contents']])
Z([3,'title'])
Z([[6],[[7],[3,'section']],[3,'title']])
Z([[6],[[6],[[6],[[7],[3,'tab']],[3,'intro']],[3,'images']],[3,'length']])
Z([[7],[3,'showInstallText']])
Z([[6],[[6],[[7],[3,'tab']],[3,'intro']],[3,'tips']])
Z([3,'section_specs'])
Z([[2,'!='],[[6],[[7],[3,'tab']],[3,'index']],[1,1]])
Z([[6],[[6],[[7],[3,'tab']],[3,'specs']],[3,'tips']])
Z([[6],[[6],[[7],[3,'tab']],[3,'specs']],[3,'packInfo']])
Z([[6],[[6],[[7],[3,'tab']],[3,'specs']],[3,'specific']])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([3,'section_service'])
Z([[2,'!='],[[6],[[7],[3,'tab']],[3,'index']],[1,2]])
Z([[6],[[6],[[7],[3,'tab']],[3,'service']],[3,'content']])
Z([[6],[[7],[3,'specificObj']],[3,'isZiying']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_50);return __WXML_GLOBAL__.ops_cached.$gwx12_50
}
function gz$gwx12_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_51)return __WXML_GLOBAL__.ops_cached.$gwx12_51
__WXML_GLOBAL__.ops_cached.$gwx12_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[2,'?:'],[[2,'||'],[[7],[3,'isPingou']],[[7],[3,'isPingouXcx']]],[1,'pingou_style radius'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isPingouXcx']],[1,'pgxcx'],[1,'']]])
Z([[2,'&&'],[[7],[3,'videos']],[[6],[[7],[3,'videos']],[3,'length']]])
Z([[7],[3,'showVideo']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_51);return __WXML_GLOBAL__.ops_cached.$gwx12_51
}
function gz$gwx12_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_52)return __WXML_GLOBAL__.ops_cached.$gwx12_52
__WXML_GLOBAL__.ops_cached.$gwx12_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([[2,'=='],[[6],[[7],[3,'dialog']],[3,'type']],[1,'newerSingleBuy']])
Z([3,'content'])
Z([[2,'&&'],[[6],[[7],[3,'dialog']],[3,'btns']],[[6],[[6],[[7],[3,'dialog']],[3,'btns']],[1,1]]])
Z([[2,'&&'],[[6],[[7],[3,'dialog']],[3,'btns']],[[6],[[6],[[7],[3,'dialog']],[3,'btns']],[1,0]]])
Z([a,[3,'mod_alert_info mod_alert fixed show '],[[2,'?:'],[[6],[[7],[3,'dialog']],[3,'useNewStyle']],[1,'new_style'],[1,'']]])
Z([[6],[[7],[3,'dialog']],[3,'title']])
Z([[2,'!'],[[6],[[7],[3,'dialog']],[3,'hideIcon']]])
Z([[2,'!'],[[6],[[7],[3,'dialog']],[3,'hideClose']]])
Z([3,'inner'])
Z([[6],[[7],[3,'dialog']],[3,'titleMsg']])
Z([[6],[[7],[3,'dialog']],[3,'msg']])
Z([[6],[[7],[3,'dialog']],[3,'mediumMsg']])
Z([[6],[[7],[3,'dialog']],[3,'mediumMsgs']])
Z([[6],[[7],[3,'dialog']],[3,'smallMsg']])
Z([[6],[[7],[3,'dialog']],[3,'selfMsg']])
Z([[2,'&&'],[[6],[[7],[3,'dialog']],[3,'btns']],[[6],[[6],[[7],[3,'dialog']],[3,'btns']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx12_52);return __WXML_GLOBAL__.ops_cached.$gwx12_52
}
function gz$gwx12_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_53)return __WXML_GLOBAL__.ops_cached.$gwx12_53
__WXML_GLOBAL__.ops_cached.$gwx12_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx12_53);return __WXML_GLOBAL__.ops_cached.$gwx12_53
}
function gz$gwx12_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_54)return __WXML_GLOBAL__.ops_cached.$gwx12_54
__WXML_GLOBAL__.ops_cached.$gwx12_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'xlist_group'])
Z([[2,'!'],[[7],[3,'noDefault']]])
Z([[10],[[7],[3,'addrPicker']]])
Z([3,'address_picker'])
Z([[2,'!'],[[7],[3,'didReady']]])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx12_54);return __WXML_GLOBAL__.ops_cached.$gwx12_54
}
function gz$gwx12_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_55)return __WXML_GLOBAL__.ops_cached.$gwx12_55
__WXML_GLOBAL__.ops_cached.$gwx12_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrapper'])
Z([[2,'&&'],[[7],[3,'goods']],[[6],[[7],[3,'goods']],[3,'name']]])
Z([3,'poolIdx'])
Z([3,'pool'])
Z([[7],[3,'poolList']])
Z([[2,'!'],[[7],[3,'flag']]])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx12_55);return __WXML_GLOBAL__.ops_cached.$gwx12_55
}
function gz$gwx12_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_56)return __WXML_GLOBAL__.ops_cached.$gwx12_56
__WXML_GLOBAL__.ops_cached.$gwx12_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx12_56);return __WXML_GLOBAL__.ops_cached.$gwx12_56
}
function gz$gwx12_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_57)return __WXML_GLOBAL__.ops_cached.$gwx12_57
__WXML_GLOBAL__.ops_cached.$gwx12_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'addressList']])
Z([[6],[[7],[3,'receiveInfo']],[3,'id']])
Z([[6],[[7],[3,'receiveInfo']],[3,'area']])
Z([3,'closeAddressLayer'])
Z([3,'switchAddress'])
Z([[7],[3,'showAddressLayerFlag']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_57);return __WXML_GLOBAL__.ops_cached.$gwx12_57
}
function gz$gwx12_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_58)return __WXML_GLOBAL__.ops_cached.$gwx12_58
__WXML_GLOBAL__.ops_cached.$gwx12_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrapper'])
Z([3,'pidx'])
Z([3,'suit'])
Z([[7],[3,'entries']])
Z(z[1])
Z([[6],[[7],[3,'unfold']],[[6],[[7],[3,'suit']],[3,'reid']]])
Z([3,'idx'])
Z([[6],[[7],[3,'suit']],[3,'item']])
Z([3,'sku'])
Z([[6],[[7],[3,'soldOut']],[[6],[[7],[3,'item']],[3,'sku']]])
Z([3,'toggle'])
Z([3,'suit xlist_group'])
Z([[6],[[7],[3,'suit']],[3,'reid']])
Z(z[7])
Z(z[9])
Z([3,'closeSkuLayer'])
Z([3,'handleSkuChange'])
Z([[6],[[7],[3,'skuPanelData']],[3,'cover']])
Z([1,true])
Z([[6],[[7],[3,'skuPanelData']],[3,'price']])
Z([[7],[3,'showSkuLayerFlag']])
Z([[6],[[7],[3,'skuPanelData']],[3,'sku']])
Z([[6],[[7],[3,'skuPanelData']],[3,'suitPackData']])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx12_58);return __WXML_GLOBAL__.ops_cached.$gwx12_58
}
function gz$gwx12_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_59)return __WXML_GLOBAL__.ops_cached.$gwx12_59
__WXML_GLOBAL__.ops_cached.$gwx12_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'level1'])
Z([[7],[3,'freight']])
Z([[6],[[7],[3,'level1']],[3,'title1']])
Z([3,'level2'])
Z([[6],[[7],[3,'level1']],[3,'content']])
Z([[6],[[7],[3,'level2']],[3,'title2']])
Z([3,'item'])
Z([[6],[[7],[3,'level2']],[3,'content']])
Z([[7],[3,'item']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_59);return __WXML_GLOBAL__.ops_cached.$gwx12_59
}
function gz$gwx12_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_60)return __WXML_GLOBAL__.ops_cached.$gwx12_60
__WXML_GLOBAL__.ops_cached.$gwx12_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'xlist_group'])
Z([[2,'!'],[[7],[3,'noDefault']]])
Z([[10],[[7],[3,'addrPicker']]])
Z([3,'address_picker'])
Z([[2,'!'],[[7],[3,'didReady']]])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx12_60);return __WXML_GLOBAL__.ops_cached.$gwx12_60
}
function gz$gwx12_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_61)return __WXML_GLOBAL__.ops_cached.$gwx12_61
__WXML_GLOBAL__.ops_cached.$gwx12_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'arrive-container'])
Z([[7],[3,'showAutoBuy']])
Z([[7],[3,'autoBuy']])
Z([3,'onFormchange'])
Z([3,'onSelectedvalidatekeyChange'])
Z(z[1])
Z([[7],[3,'showNoticeDialog']])
Z([3,'onCloseMod'])
Z([[7],[3,'noticeDialogTitle']])
Z([[7],[3,'subsGuider']])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
Z([[6],[[7],[3,'dialog']],[3,'show']])
Z([3,'onDialogCancel'])
Z([3,'onDialogConfirm'])
Z([[7],[3,'dialog']])
Z([3,'wq-dialog'])
Z(z[16])
})(__WXML_GLOBAL__.ops_cached.$gwx12_61);return __WXML_GLOBAL__.ops_cached.$gwx12_61
}
function gz$gwx12_62(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_62)return __WXML_GLOBAL__.ops_cached.$gwx12_62
__WXML_GLOBAL__.ops_cached.$gwx12_62=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'xlist shop_wrapper'])
Z([3,'fixed'])
Z([3,'header_content'])
Z([3,'showSkuLayer'])
Z([3,'header_content_title'])
Z([[7],[3,'currentSelect']])
Z([1,true])
Z([[7],[3,'priceObj']])
Z([1,false])
Z([3,'address_picker'])
Z([[7],[3,'activePicker']])
Z([3,'pickerDidChange'])
Z([3,'address_picker_main_content'])
Z([[6],[[7],[3,'areaData']],[3,'provinces']])
Z([[6],[[7],[3,'item']],[3,'addressId']])
Z([[2,'&&'],[[6],[[7],[3,'areaData']],[3,'provinces']],[[2,'=='],[[7],[3,'activeLevel']],[1,'0']]])
Z([[6],[[7],[3,'areaData']],[3,'cities']])
Z(z[14])
Z([[2,'&&'],[[6],[[7],[3,'areaData']],[3,'cities']],[[2,'=='],[[7],[3,'activeLevel']],[1,'1']]])
Z([[6],[[7],[3,'areaData']],[3,'districts']])
Z(z[14])
Z([[2,'&&'],[[6],[[7],[3,'areaData']],[3,'districts']],[[2,'=='],[[7],[3,'activeLevel']],[1,'2']]])
Z(z[10])
Z([[7],[3,'isError']])
Z([[6],[[7],[3,'locShops']],[3,'length']])
Z([[7],[3,'locShops']])
Z([3,'choseShop'])
Z([3,'xlist_group jsScrolling'])
Z([[6],[[7],[3,'item']],[3,'fullAddress']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[7],[3,'index']])
Z([[7],[3,'locationid']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[6],[[7],[3,'item']],[3,'phone']])
Z([[6],[[7],[3,'shopPrices']],[[6],[[7],[3,'item']],[3,'id']]])
Z(z[30])
Z([a,[3,'xlist_item flex_row no_border title '],[[2,'?:'],[[7],[3,'locAddCartDirect']],[1,'no_padding'],[1,'']]])
Z([[2,'!'],[[7],[3,'locAddCartDirect']]])
Z(z[34])
Z([[7],[3,'locAddCartDirect']])
Z([[2,'==='],[[6],[[7],[3,'locShops']],[3,'length']],[1,0]])
Z([3,'btns'])
Z([[7],[3,'isNullStock']])
Z([[7],[3,'showArrivalNotice']])
Z([[7],[3,'isSubscribeCar']])
Z([3,'handleSkuLayerClose'])
Z([3,'handleSkuChange'])
Z([[7],[3,'image']])
Z([[7],[3,'otherData']])
Z([[6],[[6],[[7],[3,'priceObj']],[3,'priceObj']],[3,'price']])
Z(z[6])
Z([[7],[3,'showSkuLayerFlag']])
Z([[7],[3,'sku']])
Z([[7],[3,'goodsNum']])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx12_62);return __WXML_GLOBAL__.ops_cached.$gwx12_62
}
function gz$gwx12_63(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_63)return __WXML_GLOBAL__.ops_cached.$gwx12_63
__WXML_GLOBAL__.ops_cached.$gwx12_63=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrapper item_gift'])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'options']],[3,'name']],[1,'PLUS赠品']],[[6],[[7],[3,'options']],[3,'hasGift']]])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'options']],[3,'name']],[1,'PLUS赠品']],[[2,'!'],[[6],[[7],[3,'options']],[3,'isPlus']]]])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx12_63);return __WXML_GLOBAL__.ops_cached.$gwx12_63
}
function gz$gwx12_64(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_64)return __WXML_GLOBAL__.ops_cached.$gwx12_64
__WXML_GLOBAL__.ops_cached.$gwx12_64=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'flag']])
Z([[7],[3,'goods']])
Z([[7],[3,'poolList']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_64);return __WXML_GLOBAL__.ops_cached.$gwx12_64
}
function gz$gwx12_65(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_65)return __WXML_GLOBAL__.ops_cached.$gwx12_65
__WXML_GLOBAL__.ops_cached.$gwx12_65=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'vsc']])
Z([3,'*this'])
Z([[6],[[7],[3,'item']],[3,'name']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_65);return __WXML_GLOBAL__.ops_cached.$gwx12_65
}
function gz$gwx12_66(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_66)return __WXML_GLOBAL__.ops_cached.$gwx12_66
__WXML_GLOBAL__.ops_cached.$gwx12_66=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pricereduce-container'])
Z([[7],[3,'showAutoBuy']])
Z([[7],[3,'autoBuy']])
Z([3,'onFormchange'])
Z([3,'onSelectedvalidatekeyChange'])
Z(z[1])
Z([[7],[3,'showNoticeDialog']])
Z([3,'onCloseMod'])
Z([[7],[3,'noticeDialogTitle']])
Z([[7],[3,'subsGuider']])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
Z([[6],[[7],[3,'dialog']],[3,'show']])
Z([3,'onDialogCancel'])
Z([3,'onDialogConfirm'])
Z([[7],[3,'dialog']])
Z([3,'wq-dialog'])
Z(z[16])
})(__WXML_GLOBAL__.ops_cached.$gwx12_66);return __WXML_GLOBAL__.ops_cached.$gwx12_66
}
function gz$gwx12_67(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_67)return __WXML_GLOBAL__.ops_cached.$gwx12_67
__WXML_GLOBAL__.ops_cached.$gwx12_67=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'entries']])
Z([[7],[3,'packList']])
})(__WXML_GLOBAL__.ops_cached.$gwx12_67);return __WXML_GLOBAL__.ops_cached.$gwx12_67
}
function gz$gwx12_68(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_68)return __WXML_GLOBAL__.ops_cached.$gwx12_68
__WXML_GLOBAL__.ops_cached.$gwx12_68=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[7],[3,'resultStatus']],[1,0]])
Z([[7],[3,'showNoticeDialog']])
Z([3,'onCloseMod'])
Z([[7],[3,'noticeDialogTitle']])
Z([[7],[3,'subsGuider']])
Z([[10],[[7],[3,'toast']]])
Z([3,'toast'])
Z([[6],[[7],[3,'dialog']],[3,'show']])
Z([3,'onDialogCancel'])
Z([3,'onDialogConfirm'])
Z([[7],[3,'dialog']])
Z([3,'wq-dialog'])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx12_68);return __WXML_GLOBAL__.ops_cached.$gwx12_68
}
__WXML_GLOBAL__.ops_set.$gwx12=z;
__WXML_GLOBAL__.ops_init.$gwx12=true;
var nv_require=function(){var nnm={"p_./pages/item/itemBase/js/wxs/concatArr.wxs":np_0,"p_./pages/item/itemBase/js/wxs/isChecked.wxs":np_1,"p_./pages/item/itemBase/js/wxs/setNum.wxs":np_2,"p_./pages/item/itemBase/js/wxs/setPrice.wxs":np_3,"p_./pages/item/itemBase/js/wxs/sliceArr.wxs":np_4,"p_./pages/item/itemBase/js/wxs/util.wxs":np_5,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/item/detail/detail.wxml']={};
f_['./pages/item/detail/detail.wxml']['sliceArr'] =f_['./pages/item/itemBase/js/wxs/sliceArr.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/sliceArr.wxs");
f_['./pages/item/detail/detail.wxml']['sliceArr']();
f_['./pages/item/detail/detail.wxml']['setPrice'] =f_['./pages/item/itemBase/js/wxs/setPrice.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/setPrice.wxs");
f_['./pages/item/detail/detail.wxml']['setPrice']();

f_['./pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.wxml']={};
f_['./pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.wxml']['setPrice'] =f_['./pages/item/itemBase/js/wxs/setPrice.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/setPrice.wxs");
f_['./pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.wxml']['setPrice']();
f_['./pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.wxml']['setNum'] =f_['./pages/item/itemBase/js/wxs/setNum.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/setNum.wxs");
f_['./pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.wxml']['setNum']();

f_['./pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.wxml']={};
f_['./pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.wxml']['setPrice'] =f_['./common/wxs/price.wxs'] || nv_require("p_./common/wxs/price.wxs");
f_['./pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.wxml']['setPrice']();

f_['./pages/item/itemBase/components/bottomBtn/bottomBtn.wxml']={};
f_['./pages/item/itemBase/components/bottomBtn/bottomBtn.wxml']['setPrice'] =f_['./common/wxs/price.wxs'] || nv_require("p_./common/wxs/price.wxs");
f_['./pages/item/itemBase/components/bottomBtn/bottomBtn.wxml']['setPrice']();

f_['./pages/item/itemBase/components/discount/discount.wxml']={};
f_['./pages/item/itemBase/components/discount/discount.wxml']['sliceArr'] =f_['./pages/item/itemBase/js/wxs/sliceArr.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/sliceArr.wxs");
f_['./pages/item/itemBase/components/discount/discount.wxml']['sliceArr']();

f_['./pages/item/itemBase/components/discountLayerPg/discountLayerPg.wxml']={};
f_['./pages/item/itemBase/components/discountLayerPg/discountLayerPg.wxml']['concatArr'] =f_['./pages/item/itemBase/js/wxs/concatArr.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/concatArr.wxs");
f_['./pages/item/itemBase/components/discountLayerPg/discountLayerPg.wxml']['concatArr']();

f_['./pages/item/itemBase/components/discountPg/discountPg.wxml']={};
f_['./pages/item/itemBase/components/discountPg/discountPg.wxml']['sliceArr'] =f_['./pages/item/itemBase/js/wxs/sliceArr.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/sliceArr.wxs");
f_['./pages/item/itemBase/components/discountPg/discountPg.wxml']['sliceArr']();

f_['./pages/item/itemBase/components/goodsDesc/goodsDesc.wxml']={};
f_['./pages/item/itemBase/components/goodsDesc/goodsDesc.wxml']['util'] =f_['./pages/item/itemBase/js/wxs/util.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/util.wxs");
f_['./pages/item/itemBase/components/goodsDesc/goodsDesc.wxml']['util']();

f_['./pages/item/itemBase/components/itemPrice/itemPrice.wxml']={};
f_['./pages/item/itemBase/components/itemPrice/itemPrice.wxml']['setPrice'] =f_['./common/wxs/price.wxs'] || nv_require("p_./common/wxs/price.wxs");
f_['./pages/item/itemBase/components/itemPrice/itemPrice.wxml']['setPrice']();

f_['./pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.wxml']={};
f_['./pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.wxml']['setCount'] =f_['./pages/item/itemBase/js/wxs/setNum.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/setNum.wxs");
f_['./pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.wxml']['setCount']();

f_['./pages/item/itemBase/components/skeletonScreen/skeletonScreen.wxml']={};
f_['./pages/item/itemBase/components/skeletonScreen/skeletonScreen.wxml']['setPrice'] =f_['./common/wxs/price.wxs'] || nv_require("p_./common/wxs/price.wxs");
f_['./pages/item/itemBase/components/skeletonScreen/skeletonScreen.wxml']['setPrice']();

f_['./pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.wxml']={};
f_['./pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.wxml']['isChecked'] =f_['./pages/item/itemBase/js/wxs/isChecked.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/isChecked.wxs");
f_['./pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.wxml']['isChecked']();
f_['./pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.wxml']['setPrice'] =f_['./pages/item/itemBase/js/wxs/setPrice.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/setPrice.wxs");
f_['./pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.wxml']['setPrice']();

f_['./pages/item/itemBase/components/skuLayer/skuLayer.wxml']={};
f_['./pages/item/itemBase/components/skuLayer/skuLayer.wxml']['setPrice'] =f_['./pages/item/itemBase/js/wxs/setPrice.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/setPrice.wxs");
f_['./pages/item/itemBase/components/skuLayer/skuLayer.wxml']['setPrice']();
f_['./pages/item/itemBase/components/skuLayer/skuLayer.wxml']['sliceArr'] =f_['./pages/item/itemBase/js/wxs/sliceArr.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/sliceArr.wxs");
f_['./pages/item/itemBase/components/skuLayer/skuLayer.wxml']['sliceArr']();
f_['./pages/item/itemBase/components/skuLayer/skuLayer.wxml']['setCount'] =f_['./pages/item/itemBase/js/wxs/setNum.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/setNum.wxs");
f_['./pages/item/itemBase/components/skuLayer/skuLayer.wxml']['setCount']();

f_['./pages/item/itemBase/js/wxs/concatArr.wxs'] = nv_require("p_./pages/item/itemBase/js/wxs/concatArr.wxs");
function np_0(){var nv_module={nv_exports:{}};nv_module.nv_exports = (function (nv_arr1,nv_arr2){for(var nv_i = 0;nv_i < nv_arr2.nv_length;nv_i++){nv_arr1.nv_push(nv_arr2[((nt_0=(nv_i),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))])};return(nv_arr1)});return nv_module.nv_exports;}

f_['./pages/item/itemBase/js/wxs/isChecked.wxs'] = nv_require("p_./pages/item/itemBase/js/wxs/isChecked.wxs");
function np_1(){var nv_module={nv_exports:{}};nv_module.nv_exports = (function (nv_list,nv_id){return(nv_list.nv_indexOf(nv_id) > -1)});return nv_module.nv_exports;}

f_['./pages/item/itemBase/js/wxs/setNum.wxs'] = nv_require("p_./pages/item/itemBase/js/wxs/setNum.wxs");
function np_2(){var nv_module={nv_exports:{}};nv_module.nv_exports = (function (nv_num){var nv_yuyueNum = nv_parseInt(nv_num);if (nv_yuyueNum > 99999999){nv_yuyueNum = +(nv_parseFloat(nv_yuyueNum / 10000).nv_toFixed(1)) + '亿'} else if (nv_yuyueNum > 9999){nv_yuyueNum = +(nv_parseFloat(nv_yuyueNum / 10000).nv_toFixed(1)) + '万'};return(nv_yuyueNum)});return nv_module.nv_exports;}

f_['./pages/item/itemBase/js/wxs/setPrice.wxs'] = nv_require("p_./pages/item/itemBase/js/wxs/setPrice.wxs");
function np_3(){var nv_module={nv_exports:{}};nv_module.nv_exports = (function (nv_price,nv_decimalPlaces){var nv_fPrice = nv_parseFloat(nv_price);if (nv_isNaN(nv_fPrice)){return(({nv_whole:nv_price,nv_int:nv_price,nv_decimal:'',}))};if (typeof nv_decimalPlaces == 'undefined'){nv_decimalPlaces = 2};var nv_sPrice = nv_fPrice.nv_toFixed(nv_decimalPlaces);var nv_aPrice = nv_sPrice.nv_split('.');return(({nv_whole:nv_sPrice,nv_int:nv_aPrice[(0)],nv_decimal:nv_aPrice[(1)] || '',}))});return nv_module.nv_exports;}

f_['./pages/item/itemBase/js/wxs/sliceArr.wxs'] = nv_require("p_./pages/item/itemBase/js/wxs/sliceArr.wxs");
function np_4(){var nv_module={nv_exports:{}};nv_module.nv_exports = (function (nv_arr,nv_start,nv_end){return(nv_arr.nv_slice(nv_start,nv_end))});return nv_module.nv_exports;}

f_['./pages/item/itemBase/js/wxs/util.wxs'] = nv_require("p_./pages/item/itemBase/js/wxs/util.wxs");
function np_5(){var nv_module={nv_exports:{}};function nv_formatAuthorInfo(nv_authors){var nv_authorsInfo = [];var nv_i;var nv_j;var nv_len;var nv_jlen;for(nv_i = 0 , nv_len = nv_authors.nv_length;nv_i < nv_len;nv_i++){var nv_authorsArr = [];for(nv_j = 0 , nv_jlen = nv_authors[((nt_0=(nv_i),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_author.nv_length;nv_j < nv_jlen;nv_j++){nv_authorsArr.nv_push(nv_authors[((nt_1=(nv_i),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))].nv_author[((nt_2=(nv_j),null==nt_2?undefined:'number'=== typeof nt_2?nt_2:"nv_"+nt_2))].nv_author);if (nv_authorsArr.nv_length === 3){nv_authorsArr[(2)] = nv_authorsArr[(2)] + '...';break}};nv_authorsInfo.nv_push(({nv_title:nv_authors[((nt_5=(nv_i),null==nt_5?undefined:'number'=== typeof nt_5?nt_5:"nv_"+nt_5))].nv_title,nv_data:nv_authorsArr,}))};return(nv_authorsInfo)};function nv_formatTransfer(nv_transfer){return(nv_transfer.nv_replace('，等','').nv_replace(' 译',''))};nv_module.nv_exports = ({nv_formatAuthorInfo:nv_formatAuthorInfo,nv_formatTransfer:nv_formatTransfer,});return nv_module.nv_exports;}

f_['./pages/item/subPackages/components/giftPool/giftPool.wxml']={};
f_['./pages/item/subPackages/components/giftPool/giftPool.wxml']['setPrice'] =f_['./pages/item/itemBase/js/wxs/setPrice.wxs'] || nv_require("p_./pages/item/itemBase/js/wxs/setPrice.wxs");
f_['./pages/item/subPackages/components/giftPool/giftPool.wxml']['setPrice']();

f_['./pages/item/subPackages/pages/chooseShop/chooseShop.wxml']={};
f_['./pages/item/subPackages/pages/chooseShop/chooseShop.wxml']['setPrice'] =f_['./common/wxs/price.wxs'] || nv_require("p_./common/wxs/price.wxs");
f_['./pages/item/subPackages/pages/chooseShop/chooseShop.wxml']['setPrice']();

var x=['./pages/item/detail/detail.wxml','../../../common/toast/toast.wxml','../../../common/modal/modal.wxml','./pages/item/itemBase/components/accessories/accessories.wxml','./pages/item/itemBase/components/actionSheet/actionSheet.wxml','./pages/item/itemBase/components/activities/activities.wxml','./pages/item/itemBase/components/addCartPg/addCartPg.wxml','./pages/item/itemBase/components/address/address.wxml','./pages/item/itemBase/components/answers/answers.wxml','./pages/item/itemBase/components/appLaunchBar/appLaunchBar.wxml','./pages/item/itemBase/components/appLaunchBtn/appLaunchBtn.wxml','./pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.wxml','./pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.wxml','./pages/item/itemBase/components/bottomBtn/bottomBtn.wxml','./pages/item/itemBase/components/bottomBtnPg/bottomBtnPg.wxml','./pages/item/itemBase/components/businessEntry/businessEntry.wxml','./pages/item/itemBase/components/cardShare/cardShare.wxml','./pages/item/itemBase/components/cardSharePg/cardSharePg.wxml','./pages/item/itemBase/components/comment/comment.wxml','./pages/item/itemBase/components/commentItems/commentItems.wxml','./pages/item/itemBase/components/customService/customService.wxml','./pages/item/itemBase/components/daojiaRecommend/daojiaRecommend.wxml','../../../../../common/modal/modal.wxml','./pages/item/itemBase/components/discount/discount.wxml','./pages/item/itemBase/components/discountLayer/discountLayer.wxml','./pages/item/itemBase/components/discountLayerPg/discountLayerPg.wxml','./pages/item/itemBase/components/discountPg/discountPg.wxml','./pages/item/itemBase/components/familyList/familyList.wxml','./pages/item/itemBase/components/favour/favour.wxml','./pages/item/itemBase/components/focusSlide/focusSlide.wxml','./pages/item/itemBase/components/garmentColor/garmentColor.wxml','./pages/item/itemBase/components/goodsDesc/goodsDesc.wxml','./pages/item/itemBase/components/guessYouLike/guessYouLike.wxml','./pages/item/itemBase/components/itemPrice/itemPrice.wxml','./pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.wxml','./pages/item/itemBase/components/itemShop/itemShop.wxml','./pages/item/itemBase/components/jxappExclusiveLayer/jxappExclusiveLayer.wxml','./pages/item/itemBase/components/jxvip-buy/index.wxml','./pages/item/itemBase/components/kernelProps/kernelProps.wxml','./pages/item/itemBase/components/kernelPropsLayer/kernelPropsLayer.wxml','./pages/item/itemBase/components/modalGift/index.wxml','./pages/item/itemBase/components/navbar/navbar.wxml','./pages/item/itemBase/components/offlineStore/offlineStore.wxml','./pages/item/itemBase/components/pageComment/pageComment.wxml','./pages/item/itemBase/components/pgRecommendTuan/pgRecommendTuan.wxml','./pages/item/itemBase/components/popupLayer/popupLayer.wxml','./pages/item/itemBase/components/purchaseTip/purchaseTip.wxml','./pages/item/itemBase/components/shareLayer/shareLayer.wxml','./pages/item/itemBase/components/shareLayerPg/shareLayerPg.wxml','./pages/item/itemBase/components/skeletonScreen/skeletonScreen.wxml','./pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.wxml','./pages/item/itemBase/components/skuLayer/skuLayer.wxml','../../../../../common/toast/toast.wxml','./pages/item/itemBase/components/specific/specific.wxml','./pages/item/itemBase/components/suyuanVideo/suyuanVideo.wxml','./pages/item/itemBase/components/wqDialog/wqDialog.wxml','./pages/item/pingou/pingou.wxml','./pages/item/subPackages/address/address.wxml','../../../../common/address_picker/address_picker.wxml','../../../../common/toast/toast.wxml','./pages/item/subPackages/components/giftPool/giftPool.wxml','./pages/item/subPackages/components/noticeDialog/index.wxml','./pages/item/subPackages/components/noticeForm/index.wxml','./pages/item/subPackages/components/suit/suit.wxml','./pages/item/subPackages/freight/freight.wxml','./pages/item/subPackages/pages/address/address.wxml','../../../../../common/address_picker/address_picker.wxml','./pages/item/subPackages/pages/arriveNotice/index.wxml','./pages/item/subPackages/pages/chooseShop/chooseShop.wxml','./pages/item/subPackages/pages/gift/gift.wxml','./pages/item/subPackages/pages/giftPool/giftPool.wxml','./pages/item/subPackages/pages/ldp/ldp.wxml','./pages/item/subPackages/pages/pricereduceNotice/index.wxml','./pages/item/subPackages/pages/suit/suit.wxml','./pages/item/subPackages/pages/yuyueResult/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx12_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var oD=_mz(z,'Nav-bar',['bind:clickleft',1,'bind:getnavinfo',1,'bind:triggernavback',2,'navBarData',3],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,5,e,s,gg)){fE.wxVkey=1
var cF=_v()
_(fE,cF)
if(_oz(z,6,e,s,gg)){cF.wxVkey=1
var hG=_mz(z,'Search-bar',['useDarkText',-1,'class',7,'cssStyle',1,'from',2,'placeholder',3,'ptag',4,'skuid',5,'style',6],[],e,s,gg)
_(cF,hG)
}
cF.wxXCkey=1
cF.wxXCkey=3
}
else{fE.wxVkey=2
var oH=_v()
_(fE,oH)
if(_oz(z,14,e,s,gg)){oH.wxVkey=1
}
else{oH.wxVkey=2
var cI=_v()
_(oH,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_v()
_(tM,bO)
if(_oz(z,17,aL,lK,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
return tM
}
cI.wxXCkey=2
_2z(z,15,oJ,e,s,gg,cI,'item','index','dtype')
}
oH.wxXCkey=1
}
fE.wxXCkey=1
fE.wxXCkey=3
_(oB,oD)
}
var xC=_v()
_(r,xC)
if(_oz(z,18,e,s,gg)){xC.wxVkey=1
var oP=_v()
_(xC,oP)
var xQ=function(fS,oR,cT,gg){
var oV=_v()
_(cT,oV)
if(_oz(z,21,fS,oR,gg)){oV.wxVkey=1
}
oV.wxXCkey=1
return cT
}
oP.wxXCkey=2
_2z(z,19,xQ,e,s,gg,oP,'item','index','dtype')
}
var cW=_n('view')
_rz(z,cW,'class',22,e,s,gg)
var oX=e_[x[0]].i
var lY=_v()
_(cW,lY)
if(_oz(z,23,e,s,gg)){lY.wxVkey=1
var eFB=_mz(z,'skeleton-screen',['defaultImg',24,'focusImage',1,'isSupportNav',2,'price',3,'title',4,'windowHeight',5],[],e,s,gg)
_(lY,eFB)
}
var bGB=_mz(z,'view',['class',30,'style',1],[],e,s,gg)
var oJB=_mz(z,'view',['class',32,'id',1,'style',2],[],e,s,gg)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,35,e,s,gg)){fKB.wxVkey=1
}
var cLB=_v()
_(oJB,cLB)
if(_oz(z,36,e,s,gg)){cLB.wxVkey=1
var cZB=_mz(z,'Pgapp-Launch',['param',37,'ref',1,'top',2,'triggerLaunchErrorCount',3],[],e,s,gg)
_(cLB,cZB)
}
var hMB=_v()
_(oJB,hMB)
if(_oz(z,41,e,s,gg)){hMB.wxVkey=1
var h1B=_mz(z,'Pgapp-Launch',['klCopyConfig',42,'param',1,'ref',2,'triggerKlDownloadGuideCount',3],[],e,s,gg)
_(hMB,h1B)
}
var oNB=_v()
_(oJB,oNB)
if(_oz(z,46,e,s,gg)){oNB.wxVkey=1
var o2B=_mz(z,'App-launch',['aniFlag',47,'bind:launchAppError',1,'skuId',2,'top',3,'ylToCustomerServiceFlag',4],[],e,s,gg)
_(oNB,o2B)
}
var cOB=_v()
_(oJB,cOB)
if(_oz(z,52,e,s,gg)){cOB.wxVkey=1
var c3B=_mz(z,'App-launch-bar',['bind:launchAppError',53,'skuId',1,'ylToCustomerServiceFlag',2],[],e,s,gg)
_(cOB,c3B)
}
var oPB=_v()
_(oJB,oPB)
if(_oz(z,56,e,s,gg)){oPB.wxVkey=1
var o4B=_mz(z,'Jdapp-Launch',['imkParam',57,'triggerLaunchErrorCount',1],[],e,s,gg)
_(oPB,o4B)
}
var lQB=_v()
_(oJB,lQB)
if(_oz(z,59,e,s,gg)){lQB.wxVkey=1
var l5B=_n('Return-wxapp')
_rz(z,l5B,'source',60,e,s,gg)
_(lQB,l5B)
}
var aRB=_v()
_(oJB,aRB)
if(_oz(z,61,e,s,gg)){aRB.wxVkey=1
var a6B=_mz(z,'Navbar',['bind:clickNavTab',62,'bind:clickShareBtn',1,'navCur',2,'showTips',3,'tabs',4],[],e,s,gg)
_(aRB,a6B)
}
var t7B=_mz(z,'Focus-slide',['bigPromoteRightupImg',67,'bigPromoteRightupImgTop',1,'bind:changeCpart',2,'bind:handleSuyuanIconClick',3,'bind:onJxLiveClose',4,'bind:showDialog',5,'bind:showVideoToast',6,'bind:updateVideoStatus',7,'class',8,'defaultImg',9,'focusSlideObj',10,'hideMainVideo',11,'hideOnlineVideo',12,'id',13,'isSupportNav',14,'jxLive',15,'liveVideoMuted',16,'onlineVideoTop',17,'scrollUnderMainImg',18],[],e,s,gg)
_(oJB,t7B)
var e8B=_mz(z,'Garment-color',['bind:changeSku',86,'clothesColor',1,'isPingou',2,'jdCategory',3],[],e,s,gg)
_(oJB,e8B)
var tSB=_v()
_(oJB,tSB)
if(_oz(z,90,e,s,gg)){tSB.wxVkey=1
var b9B=_mz(z,'Banner-atmosphere',['areaId',91,'atmosProcessType',1,'bind:countDownOver',2,'bind:handleSuyuanIconClick',3,'bind:initSpecialAtmosData',4,'bind:refreshPostPromo',5,'bind:updateAtmosType',6,'bind:updateBeltInfo',7,'maskSkuConfig',8,'pageHideCount',9,'pageShowCount',10,'saleAtmos',11,'skuItem',12,'specialProcess',13],[],e,s,gg)
_(tSB,b9B)
}
var eTB=_v()
_(oJB,eTB)
if(_oz(z,105,e,s,gg)){eTB.wxVkey=1
var o0B=_mz(z,'Banner-atmosphere-pg',['actParticipantNum',106,'afterDiscountPrice',1,'bigPromoteInfo',2,'bind:countDownOver',3,'bind:showGwfxTips',4,'fanxian',5,'pageHideCount',6,'pageShowCount',7,'pgBanner',8,'pingouInfo',9],[],e,s,gg)
_(eTB,o0B)
}
var xAC=_n('view')
_rz(z,xAC,'class',116,e,s,gg)
var fCC=_n('view')
_rz(z,fCC,'class',117,e,s,gg)
var cGC=_n('view')
_rz(z,cGC,'class',118,e,s,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,119,e,s,gg)){oHC.wxVkey=1
var tYC=_n('view')
_rz(z,tYC,'class',120,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',121,e,s,gg)
var h7C=_n('view')
_rz(z,h7C,'class',122,e,s,gg)
var o0C=_mz(z,'Item-price',['bind:updateSfpArrowLeft',123,'extraPriceFlag',1,'info',2,'showGuide',3],[],e,s,gg)
_(h7C,o0C)
var o8C=_v()
_(h7C,o8C)
if(_oz(z,127,e,s,gg)){o8C.wxVkey=1
}
var c9C=_v()
_(h7C,c9C)
if(_oz(z,128,e,s,gg)){c9C.wxVkey=1
var lAD=_v()
_(c9C,lAD)
if(_oz(z,129,e,s,gg)){lAD.wxVkey=1
}
lAD.wxXCkey=1
}
o8C.wxXCkey=1
c9C.wxXCkey=1
_(c6C,h7C)
var aBD=_n('view')
_rz(z,aBD,'class',130,e,s,gg)
var tCD=_v()
_(aBD,tCD)
if(_oz(z,131,e,s,gg)){tCD.wxVkey=1
}
var eDD=_v()
_(aBD,eDD)
if(_oz(z,132,e,s,gg)){eDD.wxVkey=1
var oFD=_mz(z,'Family-list',['isInFamilyList',133,'skuId',1],[],e,s,gg)
_(eDD,oFD)
}
var xGD=_mz(z,'Favour',['className',135,'favourObj',1],[],e,s,gg)
_(aBD,xGD)
var bED=_v()
_(aBD,bED)
if(_oz(z,137,e,s,gg)){bED.wxVkey=1
}
tCD.wxXCkey=1
eDD.wxXCkey=1
eDD.wxXCkey=3
bED.wxXCkey=1
_(c6C,aBD)
_(tYC,c6C)
var eZC=_v()
_(tYC,eZC)
if(_oz(z,138,e,s,gg)){eZC.wxVkey=1
var oHD=_v()
_(eZC,oHD)
if(_oz(z,139,e,s,gg)){oHD.wxVkey=1
var fID=_v()
_(oHD,fID)
if(_oz(z,140,e,s,gg)){fID.wxVkey=1
}
fID.wxXCkey=1
}
oHD.wxXCkey=1
}
var b1C=_v()
_(tYC,b1C)
if(_oz(z,141,e,s,gg)){b1C.wxVkey=1
var cJD=_n('view')
_rz(z,cJD,'class',142,e,s,gg)
var hKD=_v()
_(cJD,hKD)
if(_oz(z,143,e,s,gg)){hKD.wxVkey=1
}
var oLD=_v()
_(cJD,oLD)
if(_oz(z,144,e,s,gg)){oLD.wxVkey=1
}
hKD.wxXCkey=1
oLD.wxXCkey=1
_(b1C,cJD)
}
var o2C=_v()
_(tYC,o2C)
if(_oz(z,145,e,s,gg)){o2C.wxVkey=1
}
var x3C=_v()
_(tYC,x3C)
if(_oz(z,146,e,s,gg)){x3C.wxVkey=1
var cMD=_n('view')
_rz(z,cMD,'class',147,e,s,gg)
var oND=_v()
_(cMD,oND)
if(_oz(z,148,e,s,gg)){oND.wxVkey=1
}
var lOD=_v()
_(cMD,lOD)
if(_oz(z,149,e,s,gg)){lOD.wxVkey=1
}
oND.wxXCkey=1
lOD.wxXCkey=1
_(x3C,cMD)
}
var o4C=_v()
_(tYC,o4C)
if(_oz(z,150,e,s,gg)){o4C.wxVkey=1
var aPD=_n('view')
_rz(z,aPD,'class',151,e,s,gg)
var tQD=_v()
_(aPD,tQD)
if(_oz(z,152,e,s,gg)){tQD.wxVkey=1
}
var eRD=_v()
_(aPD,eRD)
if(_oz(z,153,e,s,gg)){eRD.wxVkey=1
}
tQD.wxXCkey=1
eRD.wxXCkey=1
_(o4C,aPD)
}
var f5C=_v()
_(tYC,f5C)
if(_oz(z,154,e,s,gg)){f5C.wxVkey=1
var bSD=_v()
_(f5C,bSD)
if(_oz(z,155,e,s,gg)){bSD.wxVkey=1
var oVD=_mz(z,'view',['bindtap',156,'class',1,'data-flag',2,'data-url',3],[],e,s,gg)
var fWD=_v()
_(oVD,fWD)
if(_oz(z,160,e,s,gg)){fWD.wxVkey=1
}
fWD.wxXCkey=1
_(bSD,oVD)
}
var oTD=_v()
_(f5C,oTD)
if(_oz(z,161,e,s,gg)){oTD.wxVkey=1
}
var xUD=_v()
_(f5C,xUD)
if(_oz(z,162,e,s,gg)){xUD.wxVkey=1
}
bSD.wxXCkey=1
oTD.wxXCkey=1
xUD.wxXCkey=1
}
eZC.wxXCkey=1
b1C.wxXCkey=1
o2C.wxXCkey=1
x3C.wxXCkey=1
o4C.wxXCkey=1
f5C.wxXCkey=1
_(oHC,tYC)
}
var lIC=_v()
_(cGC,lIC)
if(_oz(z,163,e,s,gg)){lIC.wxVkey=1
var cXD=_n('view')
_rz(z,cXD,'class',164,e,s,gg)
var hYD=_mz(z,'Item-price-return',['actParticipantNum',165,'afterDiscountPrice',1,'bind:showGwfxTips',2,'fanxian',3,'price',4],[],e,s,gg)
_(cXD,hYD)
var oZD=_n('view')
_rz(z,oZD,'class',170,e,s,gg)
var c1D=_v()
_(oZD,c1D)
if(_oz(z,171,e,s,gg)){c1D.wxVkey=1
}
var l3D=_mz(z,'Favour',['className',172,'favourObj',1],[],e,s,gg)
_(oZD,l3D)
var o2D=_v()
_(oZD,o2D)
if(_oz(z,174,e,s,gg)){o2D.wxVkey=1
}
c1D.wxXCkey=1
o2D.wxXCkey=1
_(cXD,oZD)
_(lIC,cXD)
}
var aJC=_v()
_(cGC,aJC)
if(_oz(z,175,e,s,gg)){aJC.wxVkey=1
var a4D=_mz(z,'Discount-pg',['afterDiscountBg',176,'bind:refreshDiscountPg',1,'bind:refreshJxNewerCouponInfo',2,'bind:refreshJxappCoupon',3,'bind:showPgDiscountLayer',4,'couponObj',5,'isPingou',6,'noTop',7,'pgPrice',8,'plusFlag',9,'prizeQualification',10,'promoteObj',11,'wxSearchFlag',12],[],e,s,gg)
_(aJC,a4D)
}
var tKC=_v()
_(cGC,tKC)
if(_oz(z,189,e,s,gg)){tKC.wxVkey=1
}
var t5D=_n('view')
_rz(z,t5D,'class',190,e,s,gg)
var e6D=_v()
_(t5D,e6D)
if(_oz(z,191,e,s,gg)){e6D.wxVkey=1
var o8D=_v()
_(e6D,o8D)
if(_oz(z,192,e,s,gg)){o8D.wxVkey=1
}
o8D.wxXCkey=1
}
var b7D=_v()
_(t5D,b7D)
if(_oz(z,193,e,s,gg)){b7D.wxVkey=1
var fAE=_mz(z,'Favour',['className',194,'favourObj',1],[],e,s,gg)
_(b7D,fAE)
var x9D=_v()
_(b7D,x9D)
if(_oz(z,196,e,s,gg)){x9D.wxVkey=1
var cBE=_mz(z,'Family-list',['className',197,'isInFamilyList',1,'skuId',2],[],e,s,gg)
_(x9D,cBE)
}
var o0D=_v()
_(b7D,o0D)
if(_oz(z,200,e,s,gg)){o0D.wxVkey=1
}
x9D.wxXCkey=1
x9D.wxXCkey=3
o0D.wxXCkey=1
}
e6D.wxXCkey=1
b7D.wxXCkey=1
b7D.wxXCkey=3
_(cGC,t5D)
var eLC=_v()
_(cGC,eLC)
if(_oz(z,201,e,s,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(cGC,bMC)
if(_oz(z,202,e,s,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(cGC,oNC)
if(_oz(z,203,e,s,gg)){oNC.wxVkey=1
var hCE=_mz(z,'Goods-desc',['descData',204,'skuType',1],[],e,s,gg)
_(oNC,hCE)
}
var xOC=_v()
_(cGC,xOC)
if(_oz(z,206,e,s,gg)){xOC.wxVkey=1
}
var oPC=_v()
_(cGC,oPC)
if(_oz(z,207,e,s,gg)){oPC.wxVkey=1
}
var fQC=_v()
_(cGC,fQC)
if(_oz(z,208,e,s,gg)){fQC.wxVkey=1
}
var cRC=_v()
_(cGC,cRC)
if(_oz(z,209,e,s,gg)){cRC.wxVkey=1
var oDE=_v()
_(cRC,oDE)
if(_oz(z,210,e,s,gg)){oDE.wxVkey=1
}
oDE.wxXCkey=1
}
var hSC=_v()
_(cGC,hSC)
if(_oz(z,211,e,s,gg)){hSC.wxVkey=1
var cEE=_n('view')
_rz(z,cEE,'class',212,e,s,gg)
var oFE=_v()
_(cEE,oFE)
if(_oz(z,213,e,s,gg)){oFE.wxVkey=1
}
var lGE=_v()
_(cEE,lGE)
if(_oz(z,214,e,s,gg)){lGE.wxVkey=1
}
oFE.wxXCkey=1
lGE.wxXCkey=1
_(hSC,cEE)
}
else if(_oz(z,215,e,s,gg)){hSC.wxVkey=2
}
var oTC=_v()
_(cGC,oTC)
if(_oz(z,216,e,s,gg)){oTC.wxVkey=1
var aHE=_v()
_(oTC,aHE)
if(_oz(z,217,e,s,gg)){aHE.wxVkey=1
var tIE=_v()
_(aHE,tIE)
if(_oz(z,218,e,s,gg)){tIE.wxVkey=1
}
tIE.wxXCkey=1
}
aHE.wxXCkey=1
}
var cUC=_v()
_(cGC,cUC)
if(_oz(z,219,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(cGC,oVC)
if(_oz(z,220,e,s,gg)){oVC.wxVkey=1
}
var lWC=_v()
_(cGC,lWC)
if(_oz(z,221,e,s,gg)){lWC.wxVkey=1
var eJE=_mz(z,'Kernel-props',['bind:handleLayerClick',222,'category',1,'skuId',2],[],e,s,gg)
_(lWC,eJE)
}
var aXC=_v()
_(cGC,aXC)
if(_oz(z,225,e,s,gg)){aXC.wxVkey=1
}
else if(_oz(z,226,e,s,gg)){aXC.wxVkey=2
var bKE=_mz(z,'view',['bindtap',227,'class',1,'data-flag',2,'data-url',3],[],e,s,gg)
var oLE=_v()
_(bKE,oLE)
if(_oz(z,231,e,s,gg)){oLE.wxVkey=1
}
oLE.wxXCkey=1
_(aXC,bKE)
}
oHC.wxXCkey=1
oHC.wxXCkey=3
lIC.wxXCkey=1
lIC.wxXCkey=3
aJC.wxXCkey=1
aJC.wxXCkey=3
tKC.wxXCkey=1
eLC.wxXCkey=1
bMC.wxXCkey=1
oNC.wxXCkey=1
oNC.wxXCkey=3
xOC.wxXCkey=1
oPC.wxXCkey=1
fQC.wxXCkey=1
cRC.wxXCkey=1
hSC.wxXCkey=1
oTC.wxXCkey=1
cUC.wxXCkey=1
oVC.wxXCkey=1
lWC.wxXCkey=1
lWC.wxXCkey=3
aXC.wxXCkey=1
_(fCC,cGC)
var cDC=_v()
_(fCC,cDC)
if(_oz(z,232,e,s,gg)){cDC.wxVkey=1
var xME=_mz(z,'view',['bind:tap',233,'class',1],[],e,s,gg)
var oNE=_n('view')
_rz(z,oNE,'class',235,e,s,gg)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,236,e,s,gg)){fOE.wxVkey=1
}
var cPE=_v()
_(oNE,cPE)
if(_oz(z,237,e,s,gg)){cPE.wxVkey=1
}
var hQE=_v()
_(oNE,hQE)
if(_oz(z,238,e,s,gg)){hQE.wxVkey=1
}
var oRE=_v()
_(oNE,oRE)
if(_oz(z,239,e,s,gg)){oRE.wxVkey=1
}
fOE.wxXCkey=1
cPE.wxXCkey=1
hQE.wxXCkey=1
oRE.wxXCkey=1
_(xME,oNE)
_(cDC,xME)
}
var hEC=_v()
_(fCC,hEC)
if(_oz(z,240,e,s,gg)){hEC.wxVkey=1
}
var cSE=_n('view')
_rz(z,cSE,'class',241,e,s,gg)
var oTE=_v()
_(cSE,oTE)
if(_oz(z,242,e,s,gg)){oTE.wxVkey=1
var bYE=_mz(z,'view',['bindtap',243,'class',1,'data-type',2],[],e,s,gg)
var oZE=_v()
_(bYE,oZE)
if(_oz(z,246,e,s,gg)){oZE.wxVkey=1
}
oZE.wxXCkey=1
_(oTE,bYE)
}
var lUE=_v()
_(cSE,lUE)
if(_oz(z,247,e,s,gg)){lUE.wxVkey=1
}
var aVE=_v()
_(cSE,aVE)
if(_oz(z,248,e,s,gg)){aVE.wxVkey=1
}
var tWE=_v()
_(cSE,tWE)
if(_oz(z,249,e,s,gg)){tWE.wxVkey=1
}
var eXE=_v()
_(cSE,eXE)
if(_oz(z,250,e,s,gg)){eXE.wxVkey=1
}
oTE.wxXCkey=1
lUE.wxXCkey=1
aVE.wxXCkey=1
tWE.wxXCkey=1
eXE.wxXCkey=1
_(fCC,cSE)
var oFC=_v()
_(fCC,oFC)
if(_oz(z,251,e,s,gg)){oFC.wxVkey=1
}
cDC.wxXCkey=1
hEC.wxXCkey=1
oFC.wxXCkey=1
_(xAC,fCC)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,252,e,s,gg)){oBC.wxVkey=1
var x1E=_v()
_(oBC,x1E)
if(_oz(z,253,e,s,gg)){x1E.wxVkey=1
var oDF=_mz(z,'Discount',['bind:refreshCoupon',254,'bind:showDiscountLayer',1,'couponObj',2,'isPingou',3,'plusFlag',4,'promoteObj',5,'promotionText',6,'wxSearchFlag',7],[],e,s,gg)
_(x1E,oDF)
}
var o2E=_v()
_(oBC,o2E)
if(_oz(z,262,e,s,gg)){o2E.wxVkey=1
var xEF=_mz(z,'Activities',['getBphb',263,'getPtqq',1,'isZiying',2,'skuId',3,'spuId',4,'venderId',5],[],e,s,gg)
_(o2E,xEF)
}
var f3E=_v()
_(oBC,f3E)
if(_oz(z,269,e,s,gg)){f3E.wxVkey=1
var oFF=_mz(z,'PgRecommendTuan',['bind:gotoPingouDetail',270,'bind:handleKlDownload',1,'class',2,'fxPrice',3,'launchAppParameter',4,'pageHideCount',5,'pageShowCount',6,'pingouInfo',7,'showPincount',8],[],e,s,gg)
_(f3E,oFF)
}
var fGF=_n('view')
_rz(z,fGF,'class',279,e,s,gg)
var oLF=_mz(z,'view',['bindtap',280,'class',1,'data-type',2],[],e,s,gg)
var lMF=_v()
_(oLF,lMF)
if(_oz(z,283,e,s,gg)){lMF.wxVkey=1
}
var aNF=_v()
_(oLF,aNF)
if(_oz(z,284,e,s,gg)){aNF.wxVkey=1
}
lMF.wxXCkey=1
aNF.wxXCkey=1
_(fGF,oLF)
var cHF=_v()
_(fGF,cHF)
if(_oz(z,285,e,s,gg)){cHF.wxVkey=1
var tOF=_mz(z,'User-address',['address',286,'bind:chooseShop',1,'bind:showAddressLayer',2,'category',3,'class',4,'expiration',5,'freight',6,'hideWeight',7,'isPingou',8,'isExpirationGrayOpen',9,'isOffline',10,'isShowPingou',11,'locAddCartDirect',12,'offlineHasShop',13,'shopDetail',14,'skuId',15,'skuFlagInfo',16],[],e,s,gg)
_(cHF,tOF)
}
var hIF=_v()
_(fGF,hIF)
if(_oz(z,303,e,s,gg)){hIF.wxVkey=1
var ePF=_v()
_(hIF,ePF)
var bQF=function(xSF,oRF,oTF,gg){
var cVF=_v()
_(oTF,cVF)
if(_oz(z,306,xSF,oRF,gg)){cVF.wxVkey=1
var hWF=_v()
_(cVF,hWF)
if(_oz(z,307,xSF,oRF,gg)){hWF.wxVkey=1
}
hWF.wxXCkey=1
}
cVF.wxXCkey=1
return oTF
}
ePF.wxXCkey=2
_2z(z,304,bQF,e,s,gg,ePF,'item','index','*this')
}
var oJF=_v()
_(fGF,oJF)
if(_oz(z,308,e,s,gg)){oJF.wxVkey=1
}
var cKF=_v()
_(fGF,cKF)
if(_oz(z,309,e,s,gg)){cKF.wxVkey=1
}
cHF.wxXCkey=1
cHF.wxXCkey=3
hIF.wxXCkey=1
oJF.wxXCkey=1
cKF.wxXCkey=1
_(oBC,fGF)
var c4E=_v()
_(oBC,c4E)
if(_oz(z,310,e,s,gg)){c4E.wxVkey=1
}
var h5E=_v()
_(oBC,h5E)
if(_oz(z,311,e,s,gg)){h5E.wxVkey=1
var oXF=_mz(z,'view',['bindtap',312,'class',1,'data-ptag',2,'data-url',3],[],e,s,gg)
var cYF=_v()
_(oXF,cYF)
if(_oz(z,316,e,s,gg)){cYF.wxVkey=1
}
cYF.wxXCkey=1
_(h5E,oXF)
}
var o6E=_v()
_(oBC,o6E)
if(_oz(z,317,e,s,gg)){o6E.wxVkey=1
var oZF=_mz(z,'Daojia-recommend',['adid',318,'upc',1],[],e,s,gg)
_(o6E,oZF)
}
var c7E=_v()
_(oBC,c7E)
if(_oz(z,320,e,s,gg)){c7E.wxVkey=1
var l1F=_v()
_(c7E,l1F)
if(_oz(z,321,e,s,gg)){l1F.wxVkey=1
var a2F=_mz(z,'Suyuan-video',['bind:showVideoToast',322,'videos',1],[],e,s,gg)
_(l1F,a2F)
}
l1F.wxXCkey=1
l1F.wxXCkey=3
}
var o8E=_v()
_(oBC,o8E)
if(_oz(z,324,e,s,gg)){o8E.wxVkey=1
var t3F=_mz(z,'Offline-store',['skuId',325,'skumark',1,'spAttr',2,'venderId',3],[],e,s,gg)
_(o8E,t3F)
}
var e4F=_n('view')
_rz(z,e4F,'class',329,e,s,gg)
var o6F=_mz(z,'Comment',['bind:changeCpart',330,'bind:handleComment',1,'bind:handleSensitive',2,'bind:showVideoToast',3,'category',4,'class',5,'id',6,'isAppLaunch',7,'isPingou',8,'skuId',9,'venderId',10],[],e,s,gg)
_(e4F,o6F)
var b5F=_v()
_(e4F,b5F)
if(_oz(z,341,e,s,gg)){b5F.wxVkey=1
}
b5F.wxXCkey=1
_(oBC,e4F)
var x7F=_n('view')
_rz(z,x7F,'class',342,e,s,gg)
var o8F=_v()
_(x7F,o8F)
if(_oz(z,343,e,s,gg)){o8F.wxVkey=1
var c0F=_mz(z,'Answers',['isAppLaunch',344,'isPingou',1,'skuId',2],[],e,s,gg)
_(o8F,c0F)
}
var f9F=_v()
_(x7F,f9F)
if(_oz(z,347,e,s,gg)){f9F.wxVkey=1
}
o8F.wxXCkey=1
o8F.wxXCkey=3
f9F.wxXCkey=1
_(oBC,x7F)
var l9E=_v()
_(oBC,l9E)
if(_oz(z,348,e,s,gg)){l9E.wxVkey=1
var hAG=_mz(z,'Item-shop',['bind:updateShopFavStatus',349,'class',1,'isFCS',2,'isNewPingou',3,'isOverseaPurchase',4,'isPingou',5,'isSCF',6,'isZiying',7,'pgShopInfo',8,'showPhoneNum',9,'skuId',10,'venderId',11],[],e,s,gg)
_(l9E,hAG)
}
var a0E=_v()
_(oBC,a0E)
if(_oz(z,361,e,s,gg)){a0E.wxVkey=1
var oBG=_mz(z,'Business-entry',['businessEntryObj',362,'class',1],[],e,s,gg)
_(a0E,oBG)
}
var tAF=_v()
_(oBC,tAF)
if(_oz(z,364,e,s,gg)){tAF.wxVkey=1
var cCG=_mz(z,'Accessories',['accessoriesObj',365,'class',1],[],e,s,gg)
_(tAF,cCG)
}
var eBF=_v()
_(oBC,eBF)
if(_oz(z,367,e,s,gg)){eBF.wxVkey=1
var oDG=_mz(z,'Guess-you-like',['class',368,'guessYouLikeObj',1,'id',2],[],e,s,gg)
_(eBF,oDG)
}
var bCF=_v()
_(oBC,bCF)
if(_oz(z,371,e,s,gg)){bCF.wxVkey=1
var lEG=_mz(z,'Specific',['bind:onShowShareDetail',372,'bind:showExtraTips',1,'class',2,'specificObj',3],[],e,s,gg)
_(bCF,lEG)
}
x1E.wxXCkey=1
x1E.wxXCkey=3
o2E.wxXCkey=1
o2E.wxXCkey=3
f3E.wxXCkey=1
f3E.wxXCkey=3
c4E.wxXCkey=1
h5E.wxXCkey=1
o6E.wxXCkey=1
o6E.wxXCkey=3
c7E.wxXCkey=1
c7E.wxXCkey=3
o8E.wxXCkey=1
o8E.wxXCkey=3
l9E.wxXCkey=1
l9E.wxXCkey=3
a0E.wxXCkey=1
a0E.wxXCkey=3
tAF.wxXCkey=1
tAF.wxXCkey=3
eBF.wxXCkey=1
eBF.wxXCkey=3
bCF.wxXCkey=1
bCF.wxXCkey=3
}
oBC.wxXCkey=1
oBC.wxXCkey=3
_(oJB,xAC)
var bUB=_v()
_(oJB,bUB)
if(_oz(z,376,e,s,gg)){bUB.wxVkey=1
var aFG=_mz(z,'view',['bindtap',377,'class',1,'style',2],[],e,s,gg)
var tGG=_v()
_(aFG,tGG)
if(_oz(z,380,e,s,gg)){tGG.wxVkey=1
var eHG=_v()
_(tGG,eHG)
if(_oz(z,381,e,s,gg)){eHG.wxVkey=1
}
eHG.wxXCkey=1
}
tGG.wxXCkey=1
_(bUB,aFG)
}
var oVB=_v()
_(oJB,oVB)
if(_oz(z,382,e,s,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(oJB,xWB)
if(_oz(z,383,e,s,gg)){xWB.wxVkey=1
var bIG=_n('Quick-nav')
_rz(z,bIG,'wxappPageUrl',384,e,s,gg)
_(xWB,bIG)
}
var oXB=_v()
_(oJB,oXB)
if(_oz(z,385,e,s,gg)){oXB.wxVkey=1
}
var fYB=_v()
_(oJB,fYB)
if(_oz(z,386,e,s,gg)){fYB.wxVkey=1
}
fKB.wxXCkey=1
cLB.wxXCkey=1
cLB.wxXCkey=3
hMB.wxXCkey=1
hMB.wxXCkey=3
oNB.wxXCkey=1
oNB.wxXCkey=3
cOB.wxXCkey=1
cOB.wxXCkey=3
oPB.wxXCkey=1
oPB.wxXCkey=3
lQB.wxXCkey=1
lQB.wxXCkey=3
aRB.wxXCkey=1
aRB.wxXCkey=3
tSB.wxXCkey=1
tSB.wxXCkey=3
eTB.wxXCkey=1
eTB.wxXCkey=3
bUB.wxXCkey=1
oVB.wxXCkey=1
xWB.wxXCkey=1
xWB.wxXCkey=3
oXB.wxXCkey=1
fYB.wxXCkey=1
_(bGB,oJB)
var oJG=_mz(z,'Page-comment',['commentRid',387,'initChecked',1,'isPingou',2,'navHeight',3,'noScrollTop',4,'showFlag',5,'skuId',6,'style',7],[],e,s,gg)
_(bGB,oJG)
var xKG=_mz(z,'Purchase-tip',['attr',395,'bind:certifiction',1,'bind:doLogin',2,'bind:gotoPingouDetail',3,'bind:gotoTuan',4,'bind:handleKlDownload',5,'canNotBuyHere',6,'content',7,'hasBigouCode',8,'isAppZx',9,'isCardMember',10,'isJma',11,'isPingou',12,'isSubscribeCar',13,'isTuanOfFriend',14,'launchAppParameter',15,'locAddCartDirect',16,'maskSkuConfig',17,'newerCouponBottomText',18,'newerCouponRemainTime',19,'offline',20,'pgCannotBuy',21,'pgCannotBuyMsg',22,'pgNewerNoPinBottomMsg',23,'pgNewerNoTuanBottomMsg',24,'pgSpecBottomMsg',25,'processStatus',26,'showUserLogin',27,'special',28,'state',29,'tjTuanInfo',30,'tjTuanShow',31,'yuyueState',32],[],e,s,gg)
_(bGB,xKG)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,428,e,s,gg)){oHB.wxVkey=1
var oLG=_mz(z,'Bottom-btn',['bind:addToCart',429,'bind:buy',1,'bind:cdkeyBuy',2,'bind:chooseInstallShop',3,'bind:chooseShop',4,'bind:gotoCart',5,'bind:gotoCustom',6,'bind:gotoJdhealthOrder',7,'bind:handleKlDownload',8,'bind:modalTip',9,'bind:plusZxGouOpenPlus',10,'bind:specialBuy',11,'bind:subscribeItem',12,'bottomBtn',13,'cart',14,'cartNumShow',15,'choseShopId',16,'gwfxMoney',17,'hasBigouCode',18,'isCardNumber',19,'isJx',20,'isOutOfStock',21,'isSubscribeCar',22,'isValueAddedLocShops',23,'isECard',24,'isECardOnce',25,'launchAppParameter',26,'maskSkuConfig',27,'offlineHasShop',28,'saleAtmos',29,'showArrivalNotice',30,'skuItem',31],[],e,s,gg)
_(oHB,oLG)
}
var xIB=_v()
_(bGB,xIB)
if(_oz(z,461,e,s,gg)){xIB.wxVkey=1
var fMG=_mz(z,'Bottom-btn-pg',['bind:addCartPg',462,'bind:gotoBuy',1,'bind:gotoPingouDetail',2,'bind:gotoTuan',3,'bind:handleKlDownload',4,'bind:showDialog',5,'launchAppParameter',6,'pgAddCartShow',7,'showArrivalNotice',8,'skuItem',9],[],e,s,gg)
_(xIB,fMG)
}
oHB.wxXCkey=1
oHB.wxXCkey=3
xIB.wxXCkey=1
xIB.wxXCkey=3
_(cW,bGB)
var aZ=_v()
_(cW,aZ)
if(_oz(z,472,e,s,gg)){aZ.wxVkey=1
var cNG=_n('Bottom-widget')
_rz(z,cNG,'bottomWidgetData',473,e,s,gg)
_(aZ,cNG)
}
var t1=_v()
_(cW,t1)
if(_oz(z,474,e,s,gg)){t1.wxVkey=1
var hOG=_mz(z,'Wq-dialog',['bind:cancel',475,'bind:childhide',1,'bind:confirm',2,'dialogOpt',3,'id',4,'ref',5],[],e,s,gg)
_(t1,hOG)
}
var oPG=_mz(z,'Address-layer',['loadAddressList',-1,'showOverseaTabBar',-1,'addressList',481,'adid',1,'bind:closeAddress',2,'bind:switchAddress',3,'showAddressLayerFlag',4],[],e,s,gg)
_(cW,oPG)
var e2=_v()
_(cW,e2)
if(_oz(z,486,e,s,gg)){e2.wxVkey=1
var cQG=_mz(z,'Share-layer-pg',['bind:closeShareLayer',487,'bind:onCloseShareDetail',1,'hideSharePannel',2,'shareOptions',3,'showPopupFlag',4,'triggerShowShareDetail',5],[],e,s,gg)
_(e2,cQG)
}
else{e2.wxVkey=2
var oRG=_mz(z,'Share-layer',['bind:closeShareLayer',493,'bind:onCloseShareDetail',1,'hideSharePannel',2,'shareOptions',3,'showPopupFlag',4,'triggerShowShareDetail',5],[],e,s,gg)
_(e2,oRG)
}
var b3=_v()
_(cW,b3)
if(_oz(z,499,e,s,gg)){b3.wxVkey=1
var lSG=_mz(z,'Popup-layer',['bind:onCancel',500,'bind:onConfirm',1,'isPingou',2,'popupLayerObj',3],[],e,s,gg)
_(b3,lSG)
}
var o4=_v()
_(cW,o4)
if(_oz(z,504,e,s,gg)){o4.wxVkey=1
var aTG=_mz(z,'Popup-layer',['bind:onCancel',505,'bind:onConfirm',1,'isPingou',2,'popupLayerObj',3],[],e,s,gg)
_(o4,aTG)
}
var x5=_v()
_(cW,x5)
if(_oz(z,509,e,s,gg)){x5.wxVkey=1
var tUG=_mz(z,'Popup-layer',['bind:onCancel',510,'bind:onConfirm',1,'bind:playCommonVideo',2,'bind:showVideoToast',3,'commonVideo',4,'extraContent',5,'isPingou',6,'popupLayerObj',7],[],e,s,gg)
_(x5,tUG)
}
var o6=_v()
_(cW,o6)
if(_oz(z,518,e,s,gg)){o6.wxVkey=1
var eVG=_mz(z,'Popup-layer',['bind:onCancel',519,'bind:onConfirm',1,'isPingou',2,'popupLayerObj',3],[],e,s,gg)
_(o6,eVG)
}
var f7=_v()
_(cW,f7)
if(_oz(z,523,e,s,gg)){f7.wxVkey=1
var bWG=_mz(z,'Popup-layer',['bind:onCancel',524,'bind:onConfirm',1,'isPingou',2,'popupLayerObj',3,'skuId',4],[],e,s,gg)
_(f7,bWG)
}
var c8=_v()
_(cW,c8)
if(_oz(z,529,e,s,gg)){c8.wxVkey=1
var oXG=_mz(z,'Discount-layer-pg',['afterDiscountPrice',530,'bind:closeDiscount',1,'bind:drawCoupon',2,'bind:gotoAd',3,'bind:gotoExchange',4,'bind:handleKlDownload',5,'coupons',6,'guideCanGetCoupons',7,'guideCanUseCoupons',8,'guideCanUsePromotes',9,'hideOtherPromoteJump',10,'hideSalePromoteJump',11,'jxAppCoupon',12,'launchAppParameter',13,'promoteObj',14,'promotePacks',15,'promotes',16,'showDiscountLayerFlag',17,'venderId',18],[],e,s,gg)
_(c8,oXG)
}
else{c8.wxVkey=2
var xYG=_mz(z,'Discount-layer',['bind:closeDiscount',549,'bind:drawCoupon',1,'bind:gotoAd',2,'bind:gotoBinding',3,'bind:gotoExchange',4,'bind:handleKlDownload',5,'coupons',6,'hideOtherPromoteJump',7,'hideSalePromoteJump',8,'isPingou',9,'launchAppParameter',10,'parallelPromote',11,'promoteObj',12,'promotePacks',13,'promotes',14,'showDiscountLayerFlag',15,'venderId',16],[],e,s,gg)
_(c8,xYG)
}
var h9=_v()
_(cW,h9)
if(_oz(z,566,e,s,gg)){h9.wxVkey=1
var oZG=_mz(z,'Jxapp-exclusive-layer',['bind:closeJxappExclusiveLayer',567,'duoDanFan',1,'launchAppParameter',2,'showJxappExclusiveLayerFlag',3],[],e,s,gg)
_(h9,oZG)
}
var o0=_v()
_(cW,o0)
if(_oz(z,571,e,s,gg)){o0.wxVkey=1
var f1G=_mz(z,'Kernel-props-layer',['bind:closeKernelProps',572,'isPingou',1,'propsList',2,'showKernelPropsLayerFlag',3],[],e,s,gg)
_(o0,f1G)
}
var cAB=_v()
_(cW,cAB)
if(_oz(z,576,e,s,gg)){cAB.wxVkey=1
var c2G=_mz(z,'Card-share-pg',['bind:updateCardImage',577,'shareOptions',1],[],e,s,gg)
_(cAB,c2G)
}
else{cAB.wxVkey=2
var h3G=_mz(z,'Card-share',['bind:updateCardImage',579,'shareOptions',1],[],e,s,gg)
_(cAB,h3G)
}
var o4G=_mz(z,'Sku-layer',['needReport',-1,'showNumController',-1,'addedServices',581,'afterDiscountBenfit',1,'bind:chooseShop',2,'bind:closeSkuLayer',3,'bind:doLogin',4,'bind:gotoCustomHandle',5,'bind:gotoJdhealthOrder',6,'bind:handleDrawAfterDiscount',7,'bind:handleKlDownload',8,'bind:onAddCartFail',9,'bind:setVisitedSku',10,'bind:showDialog',11,'bind:switchSku',12,'bottomBtn',13,'choseShopId',14,'goodsNumObj',15,'guideCanGetCoupons',16,'isOfflineHasShop',17,'launchAppParameter',18,'localData',19,'maskSkuConfig',20,'newerCouponBottomText',21,'newerCouponRemainTime',22,'notJump',23,'othersData',24,'pgAddCartShow',25,'pingouTipData',26,'saleAtmos',27,'showActions',28,'showArrivalNotice',29,'showGwfx',30,'showSkuLayerFlag',31,'showUserLogin',32,'showWxsearch',33,'sku',34,'totalNum',35],[],e,s,gg)
_(cW,o4G)
var oBB=_v()
_(cW,oBB)
if(_oz(z,617,e,s,gg)){oBB.wxVkey=1
}
var lCB=_v()
_(cW,lCB)
if(_oz(z,618,e,s,gg)){lCB.wxVkey=1
}
var aDB=_v()
_(cW,aDB)
if(_oz(z,619,e,s,gg)){aDB.wxVkey=1
}
_ai(oX,x[1],e_,x[0],1225,2)
var c5G=_v()
_(cW,c5G)
var o6G=_oz(z,621,e,s,gg)
var l7G=_gd(x[0],o6G,e_,d_)
if(l7G){
var a8G=_1z(z,620,e,s,gg) || {}
var cur_globalf=gg.f
c5G.wxXCkey=3
l7G(a8G,a8G,c5G,gg)
gg.f=cur_globalf
}
else _w(o6G,x[0],1226,14)
_ai(oX,x[2],e_,x[0],1228,2)
var t9G=_v()
_(cW,t9G)
var e0G=_oz(z,623,e,s,gg)
var bAH=_gd(x[0],e0G,e_,d_)
if(bAH){
var oBH=_1z(z,622,e,s,gg) || {}
var cur_globalf=gg.f
t9G.wxXCkey=3
bAH(oBH,oBH,t9G,gg)
gg.f=cur_globalf
}
else _w(e0G,x[0],1229,14)
var xCH=_mz(z,'Jxvip-buy',['bindonHide',624,'bizId',1,'id',2],[],e,s,gg)
_(cW,xCH)
var tEB=_v()
_(cW,tEB)
if(_oz(z,627,e,s,gg)){tEB.wxVkey=1
}
var oDH=_n('login-layer')
_rz(z,oDH,'loginLayerData',628,e,s,gg)
_(cW,oDH)
lY.wxXCkey=1
lY.wxXCkey=3
aZ.wxXCkey=1
aZ.wxXCkey=3
t1.wxXCkey=1
t1.wxXCkey=3
e2.wxXCkey=1
e2.wxXCkey=3
e2.wxXCkey=3
b3.wxXCkey=1
b3.wxXCkey=3
o4.wxXCkey=1
o4.wxXCkey=3
x5.wxXCkey=1
x5.wxXCkey=3
o6.wxXCkey=1
o6.wxXCkey=3
f7.wxXCkey=1
f7.wxXCkey=3
c8.wxXCkey=1
c8.wxXCkey=3
c8.wxXCkey=3
h9.wxXCkey=1
h9.wxXCkey=3
o0.wxXCkey=1
o0.wxXCkey=3
cAB.wxXCkey=1
cAB.wxXCkey=3
cAB.wxXCkey=3
oBB.wxXCkey=1
lCB.wxXCkey=1
aDB.wxXCkey=1
tEB.wxXCkey=1
oX.pop()
oX.pop()
_(r,cW)
oB.wxXCkey=1
oB.wxXCkey=3
xC.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx12_2()
var cFH=_v()
_(r,cFH)
if(_oz(z,0,e,s,gg)){cFH.wxVkey=1
}
cFH.wxXCkey=1
return r
}
e_[x[3]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx12_3()
var oHH=_v()
_(r,oHH)
if(_oz(z,0,e,s,gg)){oHH.wxVkey=1
}
oHH.wxXCkey=1
return r
}
e_[x[4]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx12_4()
var oJH=_v()
_(r,oJH)
if(_oz(z,0,e,s,gg)){oJH.wxVkey=1
var lKH=_n('view')
_rz(z,lKH,'class',1,e,s,gg)
var tMH=_n('view')
_rz(z,tMH,'class',2,e,s,gg)
var eNH=_v()
_(tMH,eNH)
if(_oz(z,3,e,s,gg)){eNH.wxVkey=1
var bOH=_n('view')
_rz(z,bOH,'class',4,e,s,gg)
var oPH=_v()
_(bOH,oPH)
if(_oz(z,5,e,s,gg)){oPH.wxVkey=1
}
var xQH=_v()
_(bOH,xQH)
if(_oz(z,6,e,s,gg)){xQH.wxVkey=1
}
oPH.wxXCkey=1
xQH.wxXCkey=1
_(eNH,bOH)
}
else{eNH.wxVkey=2
}
eNH.wxXCkey=1
_(lKH,tMH)
var aLH=_v()
_(lKH,aLH)
if(_oz(z,7,e,s,gg)){aLH.wxVkey=1
}
aLH.wxXCkey=1
_(oJH,lKH)
}
oJH.wxXCkey=1
return r
}
e_[x[5]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx12_5()
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx12_6()
var cTH=_n('view')
_rz(z,cTH,'class',0,e,s,gg)
var hUH=_v()
_(cTH,hUH)
if(_oz(z,1,e,s,gg)){hUH.wxVkey=1
var oVH=_n('view')
_rz(z,oVH,'class',2,e,s,gg)
var oXH=_mz(z,'view',['bindtap',3,'class',1],[],e,s,gg)
var lYH=_n('view')
_rz(z,lYH,'class',5,e,s,gg)
var aZH=_v()
_(lYH,aZH)
if(_oz(z,6,e,s,gg)){aZH.wxVkey=1
}
var t1H=_v()
_(lYH,t1H)
if(_oz(z,7,e,s,gg)){t1H.wxVkey=1
}
var e2H=_v()
_(lYH,e2H)
if(_oz(z,8,e,s,gg)){e2H.wxVkey=1
}
aZH.wxXCkey=1
t1H.wxXCkey=1
e2H.wxXCkey=1
_(oXH,lYH)
_(oVH,oXH)
var cWH=_v()
_(oVH,cWH)
if(_oz(z,9,e,s,gg)){cWH.wxVkey=1
}
cWH.wxXCkey=1
_(hUH,oVH)
}
else if(_oz(z,10,e,s,gg)){hUH.wxVkey=2
var b3H=_v()
_(hUH,b3H)
if(_oz(z,11,e,s,gg)){b3H.wxVkey=1
var o4H=_n('view')
_rz(z,o4H,'class',12,e,s,gg)
var x5H=_v()
_(o4H,x5H)
if(_oz(z,13,e,s,gg)){x5H.wxVkey=1
}
var o6H=_v()
_(o4H,o6H)
if(_oz(z,14,e,s,gg)){o6H.wxVkey=1
}
x5H.wxXCkey=1
o6H.wxXCkey=1
_(b3H,o4H)
}
b3H.wxXCkey=1
}
else{hUH.wxVkey=3
var f7H=_mz(z,'view',['bindtap',15,'class',1],[],e,s,gg)
var c8H=_v()
_(f7H,c8H)
if(_oz(z,17,e,s,gg)){c8H.wxVkey=1
var o0H=_v()
_(c8H,o0H)
if(_oz(z,18,e,s,gg)){o0H.wxVkey=1
}
o0H.wxXCkey=1
}
var h9H=_v()
_(f7H,h9H)
if(_oz(z,19,e,s,gg)){h9H.wxVkey=1
}
c8H.wxXCkey=1
h9H.wxXCkey=1
_(hUH,f7H)
}
hUH.wxXCkey=1
_(r,cTH)
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx12_7()
var oBI=_n('view')
_rz(z,oBI,'class',0,e,s,gg)
var lCI=_v()
_(oBI,lCI)
if(_oz(z,1,e,s,gg)){lCI.wxVkey=1
}
var aDI=_v()
_(oBI,aDI)
if(_oz(z,2,e,s,gg)){aDI.wxVkey=1
}
lCI.wxXCkey=1
aDI.wxXCkey=1
_(r,oBI)
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx12_8()
var eFI=_v()
_(r,eFI)
if(_oz(z,0,e,s,gg)){eFI.wxVkey=1
}
eFI.wxXCkey=1
return r
}
e_[x[9]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx12_9()
var oHI=_v()
_(r,oHI)
if(_oz(z,0,e,s,gg)){oHI.wxVkey=1
}
oHI.wxXCkey=1
return r
}
e_[x[10]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx12_10()
var oJI=_n('view')
var fKI=_v()
_(oJI,fKI)
if(_oz(z,0,e,s,gg)){fKI.wxVkey=1
}
else if(_oz(z,1,e,s,gg)){fKI.wxVkey=2
}
else if(_oz(z,2,e,s,gg)){fKI.wxVkey=3
var hMI=_v()
_(fKI,hMI)
if(_oz(z,3,e,s,gg)){hMI.wxVkey=1
}
hMI.wxXCkey=1
}
else if(_oz(z,4,e,s,gg)){fKI.wxVkey=4
}
var cLI=_v()
_(oJI,cLI)
if(_oz(z,5,e,s,gg)){cLI.wxVkey=1
var oNI=_v()
_(cLI,oNI)
if(_oz(z,6,e,s,gg)){oNI.wxVkey=1
}
oNI.wxXCkey=1
}
else if(_oz(z,7,e,s,gg)){cLI.wxVkey=2
var cOI=_n('view')
_rz(z,cOI,'class',8,e,s,gg)
var oPI=_v()
_(cOI,oPI)
if(_oz(z,9,e,s,gg)){oPI.wxVkey=1
}
var lQI=_v()
_(cOI,lQI)
if(_oz(z,10,e,s,gg)){lQI.wxVkey=1
var aRI=_n('view')
_rz(z,aRI,'class',11,e,s,gg)
var tSI=_v()
_(aRI,tSI)
if(_oz(z,12,e,s,gg)){tSI.wxVkey=1
var eTI=_v()
_(tSI,eTI)
if(_oz(z,13,e,s,gg)){eTI.wxVkey=1
}
eTI.wxXCkey=1
}
else if(_oz(z,14,e,s,gg)){tSI.wxVkey=2
}
tSI.wxXCkey=1
_(lQI,aRI)
}
oPI.wxXCkey=1
lQI.wxXCkey=1
_(cLI,cOI)
}
else if(_oz(z,15,e,s,gg)){cLI.wxVkey=3
var bUI=_n('view')
_rz(z,bUI,'class',16,e,s,gg)
var xWI=_n('view')
_rz(z,xWI,'class',17,e,s,gg)
var oXI=_v()
_(xWI,oXI)
if(_oz(z,18,e,s,gg)){oXI.wxVkey=1
}
var fYI=_n('view')
_rz(z,fYI,'class',19,e,s,gg)
var cZI=_v()
_(fYI,cZI)
if(_oz(z,20,e,s,gg)){cZI.wxVkey=1
}
else{cZI.wxVkey=2
var h1I=_v()
_(cZI,h1I)
if(_oz(z,21,e,s,gg)){h1I.wxVkey=1
}
var o2I=_v()
_(cZI,o2I)
if(_oz(z,22,e,s,gg)){o2I.wxVkey=1
}
h1I.wxXCkey=1
o2I.wxXCkey=1
}
cZI.wxXCkey=1
_(xWI,fYI)
oXI.wxXCkey=1
_(bUI,xWI)
var oVI=_v()
_(bUI,oVI)
if(_oz(z,23,e,s,gg)){oVI.wxVkey=1
var c3I=_n('view')
_rz(z,c3I,'class',24,e,s,gg)
var o4I=_v()
_(c3I,o4I)
if(_oz(z,25,e,s,gg)){o4I.wxVkey=1
var l5I=_v()
_(o4I,l5I)
if(_oz(z,26,e,s,gg)){l5I.wxVkey=1
}
l5I.wxXCkey=1
}
else if(_oz(z,27,e,s,gg)){o4I.wxVkey=2
}
o4I.wxXCkey=1
_(oVI,c3I)
}
oVI.wxXCkey=1
_(cLI,bUI)
}
else if(_oz(z,28,e,s,gg)){cLI.wxVkey=4
var a6I=_n('view')
_rz(z,a6I,'class',29,e,s,gg)
var t7I=_v()
_(a6I,t7I)
if(_oz(z,30,e,s,gg)){t7I.wxVkey=1
}
var e8I=_v()
_(a6I,e8I)
if(_oz(z,31,e,s,gg)){e8I.wxVkey=1
}
t7I.wxXCkey=1
e8I.wxXCkey=1
_(cLI,a6I)
}
fKI.wxXCkey=1
cLI.wxXCkey=1
_(r,oJI)
return r
}
e_[x[11]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx12_11()
var o0I=_n('view')
var xAJ=_v()
_(o0I,xAJ)
if(_oz(z,0,e,s,gg)){xAJ.wxVkey=1
var oBJ=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var hEJ=_n('view')
_rz(z,hEJ,'class',3,e,s,gg)
var oFJ=_v()
_(hEJ,oFJ)
if(_oz(z,4,e,s,gg)){oFJ.wxVkey=1
}
var cGJ=_v()
_(hEJ,cGJ)
if(_oz(z,5,e,s,gg)){cGJ.wxVkey=1
}
var oHJ=_v()
_(hEJ,oHJ)
if(_oz(z,6,e,s,gg)){oHJ.wxVkey=1
}
var lIJ=_v()
_(hEJ,lIJ)
if(_oz(z,7,e,s,gg)){lIJ.wxVkey=1
}
oFJ.wxXCkey=1
cGJ.wxXCkey=1
oHJ.wxXCkey=1
lIJ.wxXCkey=1
_(oBJ,hEJ)
var fCJ=_v()
_(oBJ,fCJ)
if(_oz(z,8,e,s,gg)){fCJ.wxVkey=1
}
var cDJ=_v()
_(oBJ,cDJ)
if(_oz(z,9,e,s,gg)){cDJ.wxVkey=1
var aJJ=_v()
_(cDJ,aJJ)
if(_oz(z,10,e,s,gg)){aJJ.wxVkey=1
}
aJJ.wxXCkey=1
}
fCJ.wxXCkey=1
cDJ.wxXCkey=1
_(xAJ,oBJ)
}
else if(_oz(z,11,e,s,gg)){xAJ.wxVkey=2
}
else if(_oz(z,12,e,s,gg)){xAJ.wxVkey=3
var tKJ=_n('view')
_rz(z,tKJ,'class',13,e,s,gg)
var eLJ=_v()
_(tKJ,eLJ)
if(_oz(z,14,e,s,gg)){eLJ.wxVkey=1
}
var bMJ=_n('view')
_rz(z,bMJ,'class',15,e,s,gg)
var oNJ=_v()
_(bMJ,oNJ)
if(_oz(z,16,e,s,gg)){oNJ.wxVkey=1
}
var xOJ=_v()
_(bMJ,xOJ)
if(_oz(z,17,e,s,gg)){xOJ.wxVkey=1
var oPJ=_v()
_(xOJ,oPJ)
if(_oz(z,18,e,s,gg)){oPJ.wxVkey=1
}
oPJ.wxXCkey=1
}
oNJ.wxXCkey=1
xOJ.wxXCkey=1
_(tKJ,bMJ)
eLJ.wxXCkey=1
_(xAJ,tKJ)
}
xAJ.wxXCkey=1
_(r,o0I)
return r
}
e_[x[12]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx12_12()
var cRJ=_n('view')
_rz(z,cRJ,'class',0,e,s,gg)
var oVJ=_n('Custom-service')
_rz(z,oVJ,'skuItem',1,e,s,gg)
_(cRJ,oVJ)
var hSJ=_v()
_(cRJ,hSJ)
if(_oz(z,2,e,s,gg)){hSJ.wxVkey=1
}
var oTJ=_v()
_(cRJ,oTJ)
if(_oz(z,3,e,s,gg)){oTJ.wxVkey=1
}
else if(_oz(z,4,e,s,gg)){oTJ.wxVkey=2
var lWJ=_mz(z,'view',['bindtap',5,'class',1],[],e,s,gg)
var aXJ=_v()
_(lWJ,aXJ)
if(_oz(z,7,e,s,gg)){aXJ.wxVkey=1
var tYJ=_v()
_(aXJ,tYJ)
if(_oz(z,8,e,s,gg)){tYJ.wxVkey=1
}
tYJ.wxXCkey=1
}
aXJ.wxXCkey=1
_(oTJ,lWJ)
}
var cUJ=_v()
_(cRJ,cUJ)
if(_oz(z,9,e,s,gg)){cUJ.wxVkey=1
}
else if(_oz(z,10,e,s,gg)){cUJ.wxVkey=2
var eZJ=_v()
_(cUJ,eZJ)
if(_oz(z,11,e,s,gg)){eZJ.wxVkey=1
}
var b1J=_v()
_(cUJ,b1J)
if(_oz(z,12,e,s,gg)){b1J.wxVkey=1
}
eZJ.wxXCkey=1
b1J.wxXCkey=1
}
else if(_oz(z,13,e,s,gg)){cUJ.wxVkey=3
}
else if(_oz(z,14,e,s,gg)){cUJ.wxVkey=4
var o2J=_v()
_(cUJ,o2J)
if(_oz(z,15,e,s,gg)){o2J.wxVkey=1
}
o2J.wxXCkey=1
}
else if(_oz(z,16,e,s,gg)){cUJ.wxVkey=5
}
else if(_oz(z,17,e,s,gg)){cUJ.wxVkey=6
var x3J=_v()
_(cUJ,x3J)
if(_oz(z,18,e,s,gg)){x3J.wxVkey=1
var f5J=_mz(z,'view',['bindtap',19,'class',1,'data-enable',2],[],e,s,gg)
var c6J=_v()
_(f5J,c6J)
if(_oz(z,22,e,s,gg)){c6J.wxVkey=1
}
c6J.wxXCkey=1
_(x3J,f5J)
}
var o4J=_v()
_(cUJ,o4J)
if(_oz(z,23,e,s,gg)){o4J.wxVkey=1
var h7J=_v()
_(o4J,h7J)
if(_oz(z,24,e,s,gg)){h7J.wxVkey=1
var o8J=_v()
_(h7J,o8J)
if(_oz(z,25,e,s,gg)){o8J.wxVkey=1
var c9J=_mz(z,'button',['appParameter',26,'binderror',1,'bindtap',2,'class',3,'data-yuyue-status',4,'openType',5],[],e,s,gg)
var o0J=_v()
_(c9J,o0J)
if(_oz(z,32,e,s,gg)){o0J.wxVkey=1
}
o0J.wxXCkey=1
_(o8J,c9J)
}
else{o8J.wxVkey=2
var lAK=_mz(z,'button',['bindtap',33,'class',1,'data-type',2,'data-yuyue-status',3],[],e,s,gg)
var aBK=_v()
_(lAK,aBK)
if(_oz(z,37,e,s,gg)){aBK.wxVkey=1
}
aBK.wxXCkey=1
_(o8J,lAK)
}
o8J.wxXCkey=1
}
else{h7J.wxVkey=2
var tCK=_mz(z,'form',['reportSubmit',-1,'bindsubmit',38,'class',1],[],e,s,gg)
var eDK=_v()
_(tCK,eDK)
if(_oz(z,40,e,s,gg)){eDK.wxVkey=1
}
eDK.wxXCkey=1
_(h7J,tCK)
}
h7J.wxXCkey=1
}
x3J.wxXCkey=1
o4J.wxXCkey=1
}
else if(_oz(z,41,e,s,gg)){cUJ.wxVkey=7
var bEK=_v()
_(cUJ,bEK)
if(_oz(z,42,e,s,gg)){bEK.wxVkey=1
}
bEK.wxXCkey=1
}
else if(_oz(z,43,e,s,gg)){cUJ.wxVkey=8
var oFK=_v()
_(cUJ,oFK)
if(_oz(z,44,e,s,gg)){oFK.wxVkey=1
}
oFK.wxXCkey=1
}
else if(_oz(z,45,e,s,gg)){cUJ.wxVkey=9
var xGK=_v()
_(cUJ,xGK)
if(_oz(z,46,e,s,gg)){xGK.wxVkey=1
}
xGK.wxXCkey=1
}
else if(_oz(z,47,e,s,gg)){cUJ.wxVkey=10
}
else if(_oz(z,48,e,s,gg)){cUJ.wxVkey=11
}
else if(_oz(z,49,e,s,gg)){cUJ.wxVkey=12
}
else if(_oz(z,50,e,s,gg)){cUJ.wxVkey=13
}
else if(_oz(z,51,e,s,gg)){cUJ.wxVkey=14
}
else if(_oz(z,52,e,s,gg)){cUJ.wxVkey=15
var oHK=_v()
_(cUJ,oHK)
if(_oz(z,53,e,s,gg)){oHK.wxVkey=1
}
var fIK=_v()
_(cUJ,fIK)
if(_oz(z,54,e,s,gg)){fIK.wxVkey=1
}
oHK.wxXCkey=1
fIK.wxXCkey=1
}
else if(_oz(z,55,e,s,gg)){cUJ.wxVkey=16
}
else if(_oz(z,56,e,s,gg)){cUJ.wxVkey=17
var cJK=_v()
_(cUJ,cJK)
if(_oz(z,57,e,s,gg)){cJK.wxVkey=1
}
var hKK=_mz(z,'view',['bindtap',58,'class',1,'data-ecard',2,'style',3],[],e,s,gg)
var oLK=_v()
_(hKK,oLK)
if(_oz(z,62,e,s,gg)){oLK.wxVkey=1
}
oLK.wxXCkey=1
_(cUJ,hKK)
cJK.wxXCkey=1
}
else{cUJ.wxVkey=18
var cMK=_v()
_(cUJ,cMK)
if(_oz(z,63,e,s,gg)){cMK.wxVkey=1
}
var oNK=_mz(z,'view',['bindtap',64,'class',1,'data-ecard',2],[],e,s,gg)
var lOK=_v()
_(oNK,lOK)
if(_oz(z,67,e,s,gg)){lOK.wxVkey=1
}
lOK.wxXCkey=1
_(cUJ,oNK)
cMK.wxXCkey=1
}
hSJ.wxXCkey=1
oTJ.wxXCkey=1
cUJ.wxXCkey=1
_(r,cRJ)
return r
}
e_[x[13]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx12_13()
var tQK=_n('view')
_rz(z,tQK,'class',0,e,s,gg)
var xUK=_mz(z,'Custom-service',['bind:serviceShow',1,'skuItem',1],[],e,s,gg)
_(tQK,xUK)
var eRK=_v()
_(tQK,eRK)
if(_oz(z,3,e,s,gg)){eRK.wxVkey=1
}
var bSK=_v()
_(tQK,bSK)
if(_oz(z,4,e,s,gg)){bSK.wxVkey=1
var oVK=_mz(z,'Add-cart-pg',['bind:addCartPg',5,'data-event',1],[],e,s,gg)
_(bSK,oVK)
}
var oTK=_v()
_(tQK,oTK)
if(_oz(z,7,e,s,gg)){oTK.wxVkey=1
}
else if(_oz(z,8,e,s,gg)){oTK.wxVkey=2
var fWK=_v()
_(oTK,fWK)
var cXK=function(oZK,hYK,c1K,gg){
var l3K=_v()
_(c1K,l3K)
if(_oz(z,11,oZK,hYK,gg)){l3K.wxVkey=1
var a4K=_mz(z,'view',['bindtap',12,'class',1,'data-activeid',2,'data-disabled',3,'data-event',4,'data-id',5,'data-masternickname',6,'data-ptagname',7,'data-tuanid',8,'data-tuanlist',9],[],oZK,hYK,gg)
var t5K=_v()
_(a4K,t5K)
if(_oz(z,22,oZK,hYK,gg)){t5K.wxVkey=1
}
t5K.wxXCkey=1
_(l3K,a4K)
}
l3K.wxXCkey=1
return c1K
}
fWK.wxXCkey=2
_2z(z,9,cXK,e,s,gg,fWK,'item','index','text')
}
else if(_oz(z,23,e,s,gg)){oTK.wxVkey=3
}
else{oTK.wxVkey=4
var e6K=_v()
_(oTK,e6K)
if(_oz(z,24,e,s,gg)){e6K.wxVkey=1
var o8K=_v()
_(e6K,o8K)
if(_oz(z,25,e,s,gg)){o8K.wxVkey=1
var x9K=_mz(z,'button',['appParameter',26,'binderror',1,'bindtap',2,'class',3,'data-type',4,'openType',5],[],e,s,gg)
var o0K=_v()
_(x9K,o0K)
if(_oz(z,32,e,s,gg)){o0K.wxVkey=1
}
o0K.wxXCkey=1
_(o8K,x9K)
}
else{o8K.wxVkey=2
var fAL=_mz(z,'view',['bindtap',33,'class',1,'data-disabled',2,'data-event',3,'data-id',4],[],e,s,gg)
var cBL=_v()
_(fAL,cBL)
if(_oz(z,38,e,s,gg)){cBL.wxVkey=1
}
cBL.wxXCkey=1
_(o8K,fAL)
}
o8K.wxXCkey=1
}
var b7K=_v()
_(oTK,b7K)
if(_oz(z,39,e,s,gg)){b7K.wxVkey=1
var hCL=_mz(z,'button',['appParameter',40,'binderror',1,'bindtap',2,'class',3,'data-type',4,'openType',5],[],e,s,gg)
var oDL=_v()
_(hCL,oDL)
if(_oz(z,46,e,s,gg)){oDL.wxVkey=1
var cEL=_v()
_(oDL,cEL)
if(_oz(z,47,e,s,gg)){cEL.wxVkey=1
}
cEL.wxXCkey=1
}
oDL.wxXCkey=1
_(b7K,hCL)
}
else{b7K.wxVkey=2
var oFL=_mz(z,'view',['bindtap',48,'class',1,'data-disabled',2,'data-event',3],[],e,s,gg)
var lGL=_v()
_(oFL,lGL)
if(_oz(z,52,e,s,gg)){lGL.wxVkey=1
var aHL=_v()
_(lGL,aHL)
if(_oz(z,53,e,s,gg)){aHL.wxVkey=1
}
aHL.wxXCkey=1
}
var tIL=_n('view')
_rz(z,tIL,'class',54,e,s,gg)
var eJL=_v()
_(tIL,eJL)
if(_oz(z,55,e,s,gg)){eJL.wxVkey=1
}
else{eJL.wxVkey=2
var bKL=_v()
_(eJL,bKL)
if(_oz(z,56,e,s,gg)){bKL.wxVkey=1
}
bKL.wxXCkey=1
}
eJL.wxXCkey=1
_(oFL,tIL)
lGL.wxXCkey=1
_(b7K,oFL)
}
e6K.wxXCkey=1
b7K.wxXCkey=1
}
eRK.wxXCkey=1
bSK.wxXCkey=1
bSK.wxXCkey=3
oTK.wxXCkey=1
_(r,tQK)
return r
}
e_[x[14]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx12_14()
var xML=_v()
_(r,xML)
if(_oz(z,0,e,s,gg)){xML.wxVkey=1
}
xML.wxXCkey=1
return r
}
e_[x[15]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx12_15()
var fOL=_n('view')
_rz(z,fOL,'class',0,e,s,gg)
var cPL=_v()
_(fOL,cPL)
if(_oz(z,1,e,s,gg)){cPL.wxVkey=1
}
var hQL=_v()
_(fOL,hQL)
if(_oz(z,2,e,s,gg)){hQL.wxVkey=1
}
cPL.wxXCkey=1
hQL.wxXCkey=1
_(r,fOL)
return r
}
e_[x[16]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx12_16()
var cSL=_n('view')
_rz(z,cSL,'class',0,e,s,gg)
var oTL=_v()
_(cSL,oTL)
if(_oz(z,1,e,s,gg)){oTL.wxVkey=1
}
var lUL=_v()
_(cSL,lUL)
if(_oz(z,2,e,s,gg)){lUL.wxVkey=1
}
oTL.wxXCkey=1
lUL.wxXCkey=1
_(r,cSL)
return r
}
e_[x[17]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx12_17()
var tWL=_v()
_(r,tWL)
if(_oz(z,0,e,s,gg)){tWL.wxVkey=1
var bYL=_n('view')
_rz(z,bYL,'class',1,e,s,gg)
var oZL=_v()
_(bYL,oZL)
if(_oz(z,2,e,s,gg)){oZL.wxVkey=1
}
var c4L=_mz(z,'view',['bindtap',3,'class',1,'data-report',2,'data-type',3],[],e,s,gg)
var h5L=_v()
_(c4L,h5L)
if(_oz(z,7,e,s,gg)){h5L.wxVkey=1
var o6L=_v()
_(h5L,o6L)
if(_oz(z,8,e,s,gg)){o6L.wxVkey=1
}
o6L.wxXCkey=1
}
else if(_oz(z,9,e,s,gg)){h5L.wxVkey=2
var c7L=_v()
_(h5L,c7L)
if(_oz(z,10,e,s,gg)){c7L.wxVkey=1
}
c7L.wxXCkey=1
}
else{h5L.wxVkey=3
var o8L=_v()
_(h5L,o8L)
if(_oz(z,11,e,s,gg)){o8L.wxVkey=1
}
var l9L=_v()
_(h5L,l9L)
if(_oz(z,12,e,s,gg)){l9L.wxVkey=1
var a0L=_v()
_(l9L,a0L)
if(_oz(z,13,e,s,gg)){a0L.wxVkey=1
}
a0L.wxXCkey=1
}
else{l9L.wxVkey=2
}
o8L.wxXCkey=1
l9L.wxXCkey=1
}
h5L.wxXCkey=1
_(bYL,c4L)
var x1L=_v()
_(bYL,x1L)
if(_oz(z,14,e,s,gg)){x1L.wxVkey=1
}
var o2L=_v()
_(bYL,o2L)
if(_oz(z,15,e,s,gg)){o2L.wxVkey=1
}
var tAM=_v()
_(bYL,tAM)
var eBM=function(oDM,bCM,xEM,gg){
var fGM=_v()
_(xEM,fGM)
if(_oz(z,19,oDM,bCM,gg)){fGM.wxVkey=1
var cHM=_mz(z,'view',['bindtap',20,'class',1,'data-sku',2,'data-type',3],[],oDM,bCM,gg)
var hIM=_v()
_(cHM,hIM)
if(_oz(z,24,oDM,bCM,gg)){hIM.wxVkey=1
}
var oJM=_v()
_(cHM,oJM)
if(_oz(z,25,oDM,bCM,gg)){oJM.wxVkey=1
}
hIM.wxXCkey=1
oJM.wxXCkey=1
_(fGM,cHM)
}
fGM.wxXCkey=1
return xEM
}
tAM.wxXCkey=2
_2z(z,17,eBM,e,s,gg,tAM,'item','index','id')
var f3L=_v()
_(bYL,f3L)
if(_oz(z,26,e,s,gg)){f3L.wxVkey=1
}
oZL.wxXCkey=1
x1L.wxXCkey=1
o2L.wxXCkey=1
f3L.wxXCkey=1
_(tWL,bYL)
}
var eXL=_v()
_(r,eXL)
if(_oz(z,27,e,s,gg)){eXL.wxVkey=1
}
tWL.wxXCkey=1
eXL.wxXCkey=1
return r
}
e_[x[18]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx12_18()
var oLM=_v()
_(r,oLM)
var lMM=function(tOM,aNM,ePM,gg){
var oRM=_n('view')
_rz(z,oRM,'class',4,tOM,aNM,gg)
var xSM=_v()
_(oRM,xSM)
if(_oz(z,5,tOM,aNM,gg)){xSM.wxVkey=1
}
var fUM=_n('view')
_rz(z,fUM,'class',6,tOM,aNM,gg)
var hWM=_n('view')
_rz(z,hWM,'class',7,tOM,aNM,gg)
var oXM=_v()
_(hWM,oXM)
if(_oz(z,8,tOM,aNM,gg)){oXM.wxVkey=1
}
var cYM=_v()
_(hWM,cYM)
if(_oz(z,9,tOM,aNM,gg)){cYM.wxVkey=1
}
oXM.wxXCkey=1
cYM.wxXCkey=1
_(fUM,hWM)
var cVM=_v()
_(fUM,cVM)
if(_oz(z,10,tOM,aNM,gg)){cVM.wxVkey=1
}
cVM.wxXCkey=1
_(oRM,fUM)
var oTM=_v()
_(oRM,oTM)
if(_oz(z,11,tOM,aNM,gg)){oTM.wxVkey=1
}
xSM.wxXCkey=1
oTM.wxXCkey=1
_(ePM,oRM)
return ePM
}
oLM.wxXCkey=2
_2z(z,2,lMM,e,s,gg,oLM,'entry','index','{{index}}')
return r
}
e_[x[19]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx12_19()
var l1M=_v()
_(r,l1M)
if(_oz(z,0,e,s,gg)){l1M.wxVkey=1
}
var a2M=_mz(z,'Action-sheet',['bind:closeActionSheet',1,'bind:handleItemClick',1,'listData',2,'showActionSheetFlag',3,'title',4],[],e,s,gg)
_(r,a2M)
l1M.wxXCkey=1
return r
}
e_[x[20]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx12_20()
var e4M=e_[x[21]].i
var b5M=_v()
_(r,b5M)
if(_oz(z,0,e,s,gg)){b5M.wxVkey=1
var o6M=_n('view')
_rz(z,o6M,'class',1,e,s,gg)
var x7M=_v()
_(o6M,x7M)
if(_oz(z,2,e,s,gg)){x7M.wxVkey=1
}
var o8M=_v()
_(o6M,o8M)
var f9M=function(hAN,c0M,oBN,gg){
var oDN=_v()
_(oBN,oDN)
if(_oz(z,5,hAN,c0M,gg)){oDN.wxVkey=1
}
oDN.wxXCkey=1
return oBN
}
o8M.wxXCkey=2
_2z(z,3,f9M,e,s,gg,o8M,'item','index','*this')
x7M.wxXCkey=1
_(b5M,o6M)
}
_ai(e4M,x[22],e_,x[21],35,2)
var lEN=_v()
_(r,lEN)
var aFN=_oz(z,7,e,s,gg)
var tGN=_gd(x[21],aFN,e_,d_)
if(tGN){
var eHN=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
lEN.wxXCkey=3
tGN(eHN,eHN,lEN,gg)
gg.f=cur_globalf
}
else _w(aFN,x[21],36,14)
b5M.wxXCkey=1
e4M.pop()
return r
}
e_[x[21]]={f:m19,j:[],i:[],ti:[x[22]],ic:[]}
d_[x[23]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx12_21()
var oJN=_v()
_(r,oJN)
if(_oz(z,0,e,s,gg)){oJN.wxVkey=1
var xKN=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var oLN=_n('view')
_rz(z,oLN,'class',3,e,s,gg)
var fMN=_v()
_(oLN,fMN)
if(_oz(z,4,e,s,gg)){fMN.wxVkey=1
}
var cNN=_v()
_(oLN,cNN)
if(_oz(z,5,e,s,gg)){cNN.wxVkey=1
var oPN=_n('view')
_rz(z,oPN,'class',6,e,s,gg)
var cQN=_v()
_(oPN,cQN)
if(_oz(z,7,e,s,gg)){cQN.wxVkey=1
var lSN=_v()
_(cQN,lSN)
var aTN=function(eVN,tUN,bWN,gg){
var xYN=_v()
_(bWN,xYN)
if(_oz(z,10,eVN,tUN,gg)){xYN.wxVkey=1
}
xYN.wxXCkey=1
return bWN
}
lSN.wxXCkey=2
_2z(z,8,aTN,e,s,gg,lSN,'item','index','roleId')
}
var oRN=_v()
_(oPN,oRN)
if(_oz(z,11,e,s,gg)){oRN.wxVkey=1
}
cQN.wxXCkey=1
oRN.wxXCkey=1
_(cNN,oPN)
}
var hON=_v()
_(oLN,hON)
if(_oz(z,12,e,s,gg)){hON.wxVkey=1
}
fMN.wxXCkey=1
cNN.wxXCkey=1
hON.wxXCkey=1
_(xKN,oLN)
_(oJN,xKN)
}
oJN.wxXCkey=1
return r
}
e_[x[23]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx12_22()
var f1N=_n('view')
_rz(z,f1N,'class',0,e,s,gg)
var c2N=_v()
_(f1N,c2N)
if(_oz(z,1,e,s,gg)){c2N.wxVkey=1
}
var h3N=_v()
_(f1N,h3N)
if(_oz(z,2,e,s,gg)){h3N.wxVkey=1
var c5N=_v()
_(h3N,c5N)
var o6N=function(a8N,l7N,t9N,gg){
var bAO=_v()
_(t9N,bAO)
if(_oz(z,5,a8N,l7N,gg)){bAO.wxVkey=1
}
else if(_oz(z,6,a8N,l7N,gg)){bAO.wxVkey=2
}
else if(_oz(z,7,a8N,l7N,gg)){bAO.wxVkey=3
var oBO=_mz(z,'view',['bindtap',8,'class',1,'data-activity-id',2],[],a8N,l7N,gg)
var xCO=_v()
_(oBO,xCO)
if(_oz(z,11,a8N,l7N,gg)){xCO.wxVkey=1
}
xCO.wxXCkey=1
_(bAO,oBO)
}
else if(_oz(z,12,a8N,l7N,gg)){bAO.wxVkey=4
}
else if(_oz(z,13,a8N,l7N,gg)){bAO.wxVkey=5
var oDO=_mz(z,'view',['bindtap',14,'class',1,'data-name',2,'data-pid',3,'data-tips',4],[],a8N,l7N,gg)
var fEO=_v()
_(oDO,fEO)
if(_oz(z,19,a8N,l7N,gg)){fEO.wxVkey=1
}
fEO.wxXCkey=1
_(bAO,oDO)
}
else if(_oz(z,20,a8N,l7N,gg)){bAO.wxVkey=6
var cFO=_mz(z,'view',['bindtap',21,'class',1,'data-id',2,'data-type',3,'data-url',4],[],a8N,l7N,gg)
var hGO=_v()
_(cFO,hGO)
if(_oz(z,26,a8N,l7N,gg)){hGO.wxVkey=1
}
hGO.wxXCkey=1
_(bAO,cFO)
}
else{bAO.wxVkey=7
}
bAO.wxXCkey=1
return t9N
}
c5N.wxXCkey=2
_2z(z,3,o6N,e,s,gg,c5N,'item','index','content')
}
var o4N=_v()
_(f1N,o4N)
if(_oz(z,27,e,s,gg)){o4N.wxVkey=1
var oHO=_n('view')
_rz(z,oHO,'class',28,e,s,gg)
var cIO=_v()
_(oHO,cIO)
if(_oz(z,29,e,s,gg)){cIO.wxVkey=1
}
var oJO=_n('view')
_rz(z,oJO,'class',30,e,s,gg)
var lKO=_v()
_(oJO,lKO)
var aLO=function(eNO,tMO,bOO,gg){
var xQO=_v()
_(bOO,xQO)
if(_oz(z,33,eNO,tMO,gg)){xQO.wxVkey=1
}
xQO.wxXCkey=1
return bOO
}
lKO.wxXCkey=2
_2z(z,31,aLO,e,s,gg,lKO,'item','index','roleId')
var oRO=_v()
_(oJO,oRO)
var fSO=function(hUO,cTO,oVO,gg){
var oXO=_v()
_(oVO,oXO)
if(_oz(z,36,hUO,cTO,gg)){oXO.wxVkey=1
var lYO=_n('view')
_rz(z,lYO,'class',37,hUO,cTO,gg)
var aZO=_v()
_(lYO,aZO)
if(_oz(z,38,hUO,cTO,gg)){aZO.wxVkey=1
var e2O=_v()
_(aZO,e2O)
if(_oz(z,39,hUO,cTO,gg)){e2O.wxVkey=1
}
e2O.wxXCkey=1
}
else if(_oz(z,40,hUO,cTO,gg)){aZO.wxVkey=2
var b3O=_v()
_(aZO,b3O)
if(_oz(z,41,hUO,cTO,gg)){b3O.wxVkey=1
}
b3O.wxXCkey=1
}
else if(_oz(z,42,hUO,cTO,gg)){aZO.wxVkey=3
var o4O=_n('view')
_rz(z,o4O,'class',43,hUO,cTO,gg)
var x5O=_v()
_(o4O,x5O)
if(_oz(z,44,hUO,cTO,gg)){x5O.wxVkey=1
}
var o6O=_v()
_(o4O,o6O)
if(_oz(z,45,hUO,cTO,gg)){o6O.wxVkey=1
}
x5O.wxXCkey=1
o6O.wxXCkey=1
_(aZO,o4O)
}
else{aZO.wxVkey=4
}
var t1O=_v()
_(lYO,t1O)
if(_oz(z,46,hUO,cTO,gg)){t1O.wxVkey=1
}
aZO.wxXCkey=1
t1O.wxXCkey=1
_(oXO,lYO)
}
oXO.wxXCkey=1
return oVO
}
oRO.wxXCkey=2
_2z(z,34,fSO,e,s,gg,oRO,'item','index','roleId')
_(oHO,oJO)
cIO.wxXCkey=1
_(o4N,oHO)
}
c2N.wxXCkey=1
h3N.wxXCkey=1
o4N.wxXCkey=1
_(r,f1N)
return r
}
e_[x[24]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx12_23()
var c8O=_n('view')
_rz(z,c8O,'class',0,e,s,gg)
var h9O=_v()
_(c8O,h9O)
if(_oz(z,1,e,s,gg)){h9O.wxVkey=1
var oBP=_n('view')
_rz(z,oBP,'class',2,e,s,gg)
var lCP=_v()
_(oBP,lCP)
if(_oz(z,3,e,s,gg)){lCP.wxVkey=1
}
var aDP=_n('view')
_rz(z,aDP,'class',4,e,s,gg)
var tEP=_v()
_(aDP,tEP)
if(_oz(z,5,e,s,gg)){tEP.wxVkey=1
var bGP=_v()
_(tEP,bGP)
var oHP=function(oJP,xIP,fKP,gg){
var hMP=_v()
_(fKP,hMP)
if(_oz(z,8,oJP,xIP,gg)){hMP.wxVkey=1
}
else if(_oz(z,9,oJP,xIP,gg)){hMP.wxVkey=2
}
else if(_oz(z,10,oJP,xIP,gg)){hMP.wxVkey=3
var oNP=_mz(z,'view',['bindtap',11,'class',1,'data-activity-id',2],[],oJP,xIP,gg)
var cOP=_v()
_(oNP,cOP)
if(_oz(z,14,oJP,xIP,gg)){cOP.wxVkey=1
}
cOP.wxXCkey=1
_(hMP,oNP)
}
else if(_oz(z,15,oJP,xIP,gg)){hMP.wxVkey=4
}
else if(_oz(z,16,oJP,xIP,gg)){hMP.wxVkey=5
var oPP=_mz(z,'view',['bindtap',17,'class',1,'data-name',2,'data-pid',3,'data-tips',4],[],oJP,xIP,gg)
var lQP=_v()
_(oPP,lQP)
if(_oz(z,22,oJP,xIP,gg)){lQP.wxVkey=1
}
lQP.wxXCkey=1
_(hMP,oPP)
}
else if(_oz(z,23,oJP,xIP,gg)){hMP.wxVkey=6
var aRP=_mz(z,'view',['bindtap',24,'class',1,'data-id',2,'data-type',3,'data-url',4],[],oJP,xIP,gg)
var tSP=_v()
_(aRP,tSP)
if(_oz(z,29,oJP,xIP,gg)){tSP.wxVkey=1
}
tSP.wxXCkey=1
_(hMP,aRP)
}
else{hMP.wxVkey=7
}
hMP.wxXCkey=1
return fKP
}
bGP.wxXCkey=2
_2z(z,6,oHP,e,s,gg,bGP,'item','index','content')
}
var eFP=_v()
_(aDP,eFP)
if(_oz(z,30,e,s,gg)){eFP.wxVkey=1
var eTP=_v()
_(eFP,eTP)
var bUP=function(xWP,oVP,oXP,gg){
var cZP=_n('view')
_rz(z,cZP,'class',33,xWP,oVP,gg)
var h1P=_v()
_(cZP,h1P)
if(_oz(z,34,xWP,oVP,gg)){h1P.wxVkey=1
var c3P=_v()
_(h1P,c3P)
if(_oz(z,35,xWP,oVP,gg)){c3P.wxVkey=1
}
c3P.wxXCkey=1
}
else if(_oz(z,36,xWP,oVP,gg)){h1P.wxVkey=2
var o4P=_v()
_(h1P,o4P)
if(_oz(z,37,xWP,oVP,gg)){o4P.wxVkey=1
}
o4P.wxXCkey=1
}
else if(_oz(z,38,xWP,oVP,gg)){h1P.wxVkey=3
var l5P=_n('view')
_rz(z,l5P,'class',39,xWP,oVP,gg)
var a6P=_v()
_(l5P,a6P)
if(_oz(z,40,xWP,oVP,gg)){a6P.wxVkey=1
}
var t7P=_v()
_(l5P,t7P)
if(_oz(z,41,xWP,oVP,gg)){t7P.wxVkey=1
}
a6P.wxXCkey=1
t7P.wxXCkey=1
_(h1P,l5P)
}
else{h1P.wxVkey=4
}
var o2P=_v()
_(cZP,o2P)
if(_oz(z,42,xWP,oVP,gg)){o2P.wxVkey=1
}
h1P.wxXCkey=1
o2P.wxXCkey=1
_(oXP,cZP)
return oXP
}
eTP.wxXCkey=2
_2z(z,31,bUP,e,s,gg,eTP,'item','index','roleId')
}
tEP.wxXCkey=1
eFP.wxXCkey=1
_(oBP,aDP)
lCP.wxXCkey=1
_(h9O,oBP)
}
var o0O=_v()
_(c8O,o0O)
if(_oz(z,43,e,s,gg)){o0O.wxVkey=1
var e8P=_v()
_(o0O,e8P)
var b9P=function(xAQ,o0P,oBQ,gg){
var cDQ=_v()
_(oBQ,cDQ)
if(_oz(z,46,xAQ,o0P,gg)){cDQ.wxVkey=1
}
else if(_oz(z,47,xAQ,o0P,gg)){cDQ.wxVkey=2
}
else if(_oz(z,48,xAQ,o0P,gg)){cDQ.wxVkey=3
var hEQ=_mz(z,'view',['bindtap',49,'class',1,'data-activity-id',2],[],xAQ,o0P,gg)
var oFQ=_v()
_(hEQ,oFQ)
if(_oz(z,52,xAQ,o0P,gg)){oFQ.wxVkey=1
}
oFQ.wxXCkey=1
_(cDQ,hEQ)
}
else if(_oz(z,53,xAQ,o0P,gg)){cDQ.wxVkey=4
}
else if(_oz(z,54,xAQ,o0P,gg)){cDQ.wxVkey=5
var cGQ=_mz(z,'view',['bindtap',55,'class',1,'data-name',2,'data-pid',3,'data-tips',4],[],xAQ,o0P,gg)
var oHQ=_v()
_(cGQ,oHQ)
if(_oz(z,60,xAQ,o0P,gg)){oHQ.wxVkey=1
}
oHQ.wxXCkey=1
_(cDQ,cGQ)
}
else if(_oz(z,61,xAQ,o0P,gg)){cDQ.wxVkey=6
var lIQ=_mz(z,'view',['bindtap',62,'class',1,'data-id',2,'data-type',3,'data-url',4],[],xAQ,o0P,gg)
var aJQ=_v()
_(lIQ,aJQ)
if(_oz(z,67,xAQ,o0P,gg)){aJQ.wxVkey=1
}
aJQ.wxXCkey=1
_(cDQ,lIQ)
}
else{cDQ.wxVkey=7
}
cDQ.wxXCkey=1
return oBQ
}
e8P.wxXCkey=2
_2z(z,44,b9P,e,s,gg,e8P,'item','index','content')
}
var cAP=_v()
_(c8O,cAP)
if(_oz(z,68,e,s,gg)){cAP.wxVkey=1
var tKQ=_n('view')
_rz(z,tKQ,'class',69,e,s,gg)
var eLQ=_v()
_(tKQ,eLQ)
if(_oz(z,70,e,s,gg)){eLQ.wxVkey=1
var oNQ=_v()
_(eLQ,oNQ)
var xOQ=function(fQQ,oPQ,cRQ,gg){
var oTQ=_n('view')
_rz(z,oTQ,'class',73,fQQ,oPQ,gg)
var cUQ=_v()
_(oTQ,cUQ)
if(_oz(z,74,fQQ,oPQ,gg)){cUQ.wxVkey=1
}
var oVQ=_v()
_(oTQ,oVQ)
if(_oz(z,75,fQQ,oPQ,gg)){oVQ.wxVkey=1
}
cUQ.wxXCkey=1
oVQ.wxXCkey=1
_(cRQ,oTQ)
return cRQ
}
oNQ.wxXCkey=2
_2z(z,71,xOQ,e,s,gg,oNQ,'item','index','roleId')
}
var bMQ=_v()
_(tKQ,bMQ)
if(_oz(z,76,e,s,gg)){bMQ.wxVkey=1
var lWQ=_v()
_(bMQ,lWQ)
if(_oz(z,77,e,s,gg)){lWQ.wxVkey=1
}
lWQ.wxXCkey=1
}
var aXQ=_v()
_(tKQ,aXQ)
var tYQ=function(b1Q,eZQ,o2Q,gg){
var o4Q=_v()
_(o2Q,o4Q)
if(_oz(z,80,b1Q,eZQ,gg)){o4Q.wxVkey=1
var f5Q=_n('view')
_rz(z,f5Q,'class',81,b1Q,eZQ,gg)
var c6Q=_v()
_(f5Q,c6Q)
if(_oz(z,82,b1Q,eZQ,gg)){c6Q.wxVkey=1
var o8Q=_v()
_(c6Q,o8Q)
if(_oz(z,83,b1Q,eZQ,gg)){o8Q.wxVkey=1
}
o8Q.wxXCkey=1
}
else if(_oz(z,84,b1Q,eZQ,gg)){c6Q.wxVkey=2
var c9Q=_v()
_(c6Q,c9Q)
if(_oz(z,85,b1Q,eZQ,gg)){c9Q.wxVkey=1
}
c9Q.wxXCkey=1
}
else if(_oz(z,86,b1Q,eZQ,gg)){c6Q.wxVkey=3
var o0Q=_n('view')
_rz(z,o0Q,'class',87,b1Q,eZQ,gg)
var lAR=_v()
_(o0Q,lAR)
if(_oz(z,88,b1Q,eZQ,gg)){lAR.wxVkey=1
}
var aBR=_v()
_(o0Q,aBR)
if(_oz(z,89,b1Q,eZQ,gg)){aBR.wxVkey=1
}
lAR.wxXCkey=1
aBR.wxXCkey=1
_(c6Q,o0Q)
}
else{c6Q.wxVkey=4
}
var h7Q=_v()
_(f5Q,h7Q)
if(_oz(z,90,b1Q,eZQ,gg)){h7Q.wxVkey=1
}
c6Q.wxXCkey=1
h7Q.wxXCkey=1
_(o4Q,f5Q)
}
o4Q.wxXCkey=1
return o2Q
}
aXQ.wxXCkey=2
_2z(z,78,tYQ,e,s,gg,aXQ,'item','index','roleId')
eLQ.wxXCkey=1
bMQ.wxXCkey=1
_(cAP,tKQ)
}
h9O.wxXCkey=1
o0O.wxXCkey=1
cAP.wxXCkey=1
_(r,c8O)
return r
}
e_[x[25]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx12_24()
var eDR=_v()
_(r,eDR)
if(_oz(z,0,e,s,gg)){eDR.wxVkey=1
var bER=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var fIR=_v()
_(bER,fIR)
var cJR=function(oLR,hKR,cMR,gg){
var lOR=_v()
_(cMR,lOR)
if(_oz(z,5,oLR,hKR,gg)){lOR.wxVkey=1
}
lOR.wxXCkey=1
return cMR
}
fIR.wxXCkey=2
_2z(z,3,cJR,e,s,gg,fIR,'item','index','roleId')
var oFR=_v()
_(bER,oFR)
if(_oz(z,6,e,s,gg)){oFR.wxVkey=1
}
var xGR=_v()
_(bER,xGR)
if(_oz(z,7,e,s,gg)){xGR.wxVkey=1
}
var oHR=_v()
_(bER,oHR)
if(_oz(z,8,e,s,gg)){oHR.wxVkey=1
}
oFR.wxXCkey=1
xGR.wxXCkey=1
oHR.wxXCkey=1
_(eDR,bER)
}
eDR.wxXCkey=1
return r
}
e_[x[26]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx12_25()
var tQR=_v()
_(r,tQR)
if(_oz(z,0,e,s,gg)){tQR.wxVkey=1
}
var eRR=_v()
_(r,eRR)
if(_oz(z,1,e,s,gg)){eRR.wxVkey=1
}
tQR.wxXCkey=1
eRR.wxXCkey=1
return r
}
e_[x[27]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx12_26()
return r
}
e_[x[28]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx12_27()
var xUR=_n('view')
_rz(z,xUR,'class',0,e,s,gg)
var cXR=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var hYR=_v()
_(cXR,hYR)
if(_oz(z,3,e,s,gg)){hYR.wxVkey=1
var e6R=_mz(z,'swiper',['bindchange',4,'circular',1,'class',2,'current',3,'indicatorDots',4,'style',5,'swiperFlag',6],[],e,s,gg)
var b7R=_v()
_(e6R,b7R)
if(_oz(z,11,e,s,gg)){b7R.wxVkey=1
}
b7R.wxXCkey=1
_(hYR,e6R)
}
else if(_oz(z,12,e,s,gg)){hYR.wxVkey=2
}
var oZR=_v()
_(cXR,oZR)
if(_oz(z,13,e,s,gg)){oZR.wxVkey=1
var o8R=_n('view')
_rz(z,o8R,'class',14,e,s,gg)
var x9R=_v()
_(o8R,x9R)
if(_oz(z,15,e,s,gg)){x9R.wxVkey=1
}
var o0R=_v()
_(o8R,o0R)
if(_oz(z,16,e,s,gg)){o0R.wxVkey=1
}
var fAS=_v()
_(o8R,fAS)
if(_oz(z,17,e,s,gg)){fAS.wxVkey=1
}
x9R.wxXCkey=1
o0R.wxXCkey=1
fAS.wxXCkey=1
_(oZR,o8R)
}
var c1R=_v()
_(cXR,c1R)
if(_oz(z,18,e,s,gg)){c1R.wxVkey=1
}
var o2R=_v()
_(cXR,o2R)
if(_oz(z,19,e,s,gg)){o2R.wxVkey=1
var cBS=_v()
_(o2R,cBS)
if(_oz(z,20,e,s,gg)){cBS.wxVkey=1
}
cBS.wxXCkey=1
}
else{o2R.wxVkey=2
var hCS=_v()
_(o2R,hCS)
if(_oz(z,21,e,s,gg)){hCS.wxVkey=1
}
hCS.wxXCkey=1
}
var l3R=_v()
_(cXR,l3R)
if(_oz(z,22,e,s,gg)){l3R.wxVkey=1
}
var a4R=_v()
_(cXR,a4R)
if(_oz(z,23,e,s,gg)){a4R.wxVkey=1
}
var t5R=_v()
_(cXR,t5R)
if(_oz(z,24,e,s,gg)){t5R.wxVkey=1
}
hYR.wxXCkey=1
oZR.wxXCkey=1
c1R.wxXCkey=1
o2R.wxXCkey=1
l3R.wxXCkey=1
a4R.wxXCkey=1
t5R.wxXCkey=1
_(xUR,cXR)
var oVR=_v()
_(xUR,oVR)
if(_oz(z,25,e,s,gg)){oVR.wxVkey=1
}
var fWR=_v()
_(xUR,fWR)
if(_oz(z,26,e,s,gg)){fWR.wxVkey=1
var oDS=_v()
_(fWR,oDS)
if(_oz(z,27,e,s,gg)){oDS.wxVkey=1
var cES=_mz(z,'view',['bindtap',28,'class',1,'data-url',2,'hidden',3,'style',4],[],e,s,gg)
var oFS=_v()
_(cES,oFS)
if(_oz(z,33,e,s,gg)){oFS.wxVkey=1
}
oFS.wxXCkey=1
_(oDS,cES)
}
else{oDS.wxVkey=2
}
oDS.wxXCkey=1
}
oVR.wxXCkey=1
fWR.wxXCkey=1
_(r,xUR)
return r
}
e_[x[29]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx12_28()
var aHS=_v()
_(r,aHS)
if(_oz(z,0,e,s,gg)){aHS.wxVkey=1
var tIS=_v()
_(aHS,tIS)
var eJS=function(oLS,bKS,xMS,gg){
var fOS=_v()
_(xMS,fOS)
if(_oz(z,2,oLS,bKS,gg)){fOS.wxVkey=1
}
fOS.wxXCkey=1
return xMS
}
tIS.wxXCkey=2
_2z(z,1,eJS,e,s,gg,tIS,'item','index','')
}
aHS.wxXCkey=1
return r
}
e_[x[30]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx12_29()
var hQS=_n('view')
var oRS=_v()
_(hQS,oRS)
if(_oz(z,0,e,s,gg)){oRS.wxVkey=1
var oTS=_v()
_(oRS,oTS)
if(_oz(z,1,e,s,gg)){oTS.wxVkey=1
var lUS=_n('view')
_rz(z,lUS,'class',2,e,s,gg)
var aVS=_v()
_(lUS,aVS)
if(_oz(z,3,e,s,gg)){aVS.wxVkey=1
}
var tWS=_v()
_(lUS,tWS)
if(_oz(z,4,e,s,gg)){tWS.wxVkey=1
}
var eXS=_v()
_(lUS,eXS)
if(_oz(z,5,e,s,gg)){eXS.wxVkey=1
}
var bYS=_v()
_(lUS,bYS)
if(_oz(z,6,e,s,gg)){bYS.wxVkey=1
}
var oZS=_v()
_(lUS,oZS)
if(_oz(z,7,e,s,gg)){oZS.wxVkey=1
}
var x1S=_v()
_(lUS,x1S)
if(_oz(z,8,e,s,gg)){x1S.wxVkey=1
}
aVS.wxXCkey=1
tWS.wxXCkey=1
eXS.wxXCkey=1
bYS.wxXCkey=1
oZS.wxXCkey=1
x1S.wxXCkey=1
_(oTS,lUS)
}
oTS.wxXCkey=1
}
var cSS=_v()
_(hQS,cSS)
if(_oz(z,9,e,s,gg)){cSS.wxVkey=1
var o2S=_n('view')
_rz(z,o2S,'class',10,e,s,gg)
var f3S=_v()
_(o2S,f3S)
if(_oz(z,11,e,s,gg)){f3S.wxVkey=1
}
var c4S=_v()
_(o2S,c4S)
if(_oz(z,12,e,s,gg)){c4S.wxVkey=1
}
var h5S=_v()
_(o2S,h5S)
if(_oz(z,13,e,s,gg)){h5S.wxVkey=1
}
f3S.wxXCkey=1
c4S.wxXCkey=1
h5S.wxXCkey=1
_(cSS,o2S)
}
oRS.wxXCkey=1
cSS.wxXCkey=1
_(r,hQS)
return r
}
e_[x[31]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx12_30()
var c7S=_v()
_(r,c7S)
if(_oz(z,0,e,s,gg)){c7S.wxVkey=1
var o8S=_n('view')
_rz(z,o8S,'class',1,e,s,gg)
var a0S=_mz(z,'view',['class',2,'hidden',1],[],e,s,gg)
var tAT=_v()
_(a0S,tAT)
if(_oz(z,4,e,s,gg)){tAT.wxVkey=1
var bCT=_mz(z,'swiper',['bindchange',5,'class',1],[],e,s,gg)
var oDT=_v()
_(bCT,oDT)
var xET=function(fGT,oFT,cHT,gg){
var oJT=_v()
_(cHT,oJT)
var cKT=function(lMT,oLT,aNT,gg){
var ePT=_v()
_(aNT,ePT)
var bQT=function(xST,oRT,oTT,gg){
var cVT=_v()
_(oTT,cVT)
if(_oz(z,18,xST,oRT,gg)){cVT.wxVkey=1
var hWT=_mz(z,'view',['bindtap',19,'class',1,'data-click-url',2,'data-cover',3,'data-i',4,'data-idx',5,'data-index',6,'data-is-pingou',7,'data-name',8,'data-pps',9,'data-price',10,'data-sku',11],[],xST,oRT,gg)
var oXT=_n('view')
_rz(z,oXT,'class',31,xST,oRT,gg)
var cYT=_v()
_(oXT,cYT)
if(_oz(z,32,xST,oRT,gg)){cYT.wxVkey=1
}
var oZT=_n('view')
_rz(z,oZT,'class',33,xST,oRT,gg)
var l1T=_v()
_(oZT,l1T)
if(_oz(z,34,xST,oRT,gg)){l1T.wxVkey=1
}
var a2T=_v()
_(oZT,a2T)
if(_oz(z,35,xST,oRT,gg)){a2T.wxVkey=1
}
l1T.wxXCkey=1
a2T.wxXCkey=1
_(oXT,oZT)
cYT.wxXCkey=1
_(hWT,oXT)
_(cVT,hWT)
}
else{cVT.wxVkey=2
}
cVT.wxXCkey=1
return oTT
}
ePT.wxXCkey=2
_2z(z,16,bQT,lMT,oLT,gg,ePT,'item','index','sku')
return aNT
}
oJT.wxXCkey=2
_2z(z,13,cKT,fGT,oFT,gg,oJT,'li','idx','{{ i }}')
return cHT
}
oDT.wxXCkey=2
_2z(z,9,xET,e,s,gg,oDT,'ul','i','{{ i }}')
_(tAT,bCT)
}
else if(_oz(z,36,e,s,gg)){tAT.wxVkey=2
var t3T=_v()
_(tAT,t3T)
var e4T=function(o6T,b5T,x7T,gg){
var f9T=_v()
_(x7T,f9T)
var c0T=function(oBU,hAU,cCU,gg){
var lEU=_v()
_(cCU,lEU)
var aFU=function(eHU,tGU,bIU,gg){
var xKU=_v()
_(bIU,xKU)
if(_oz(z,47,eHU,tGU,gg)){xKU.wxVkey=1
var oLU=_mz(z,'view',['bindtap',48,'class',1,'data-cover',2,'data-i',3,'data-idx',4,'data-index',5,'data-is-pingou',6,'data-name',7,'data-pps',8,'data-price',9,'data-sku',10],[],eHU,tGU,gg)
var fMU=_n('view')
_rz(z,fMU,'class',59,eHU,tGU,gg)
var cNU=_v()
_(fMU,cNU)
if(_oz(z,60,eHU,tGU,gg)){cNU.wxVkey=1
}
var hOU=_n('view')
_rz(z,hOU,'class',61,eHU,tGU,gg)
var oPU=_v()
_(hOU,oPU)
if(_oz(z,62,eHU,tGU,gg)){oPU.wxVkey=1
}
var cQU=_v()
_(hOU,cQU)
if(_oz(z,63,eHU,tGU,gg)){cQU.wxVkey=1
}
oPU.wxXCkey=1
cQU.wxXCkey=1
_(fMU,hOU)
cNU.wxXCkey=1
_(oLU,fMU)
_(xKU,oLU)
}
xKU.wxXCkey=1
return bIU
}
lEU.wxXCkey=2
_2z(z,45,aFU,oBU,hAU,gg,lEU,'item','index','sku')
return cCU
}
f9T.wxXCkey=2
_2z(z,43,c0T,o6T,b5T,gg,f9T,'li','idx','sku')
return x7T
}
t3T.wxXCkey=2
_2z(z,39,e4T,e,s,gg,t3T,'ul','i','i')
}
else if(_oz(z,64,e,s,gg)){tAT.wxVkey=3
var oRU=_mz(z,'swiper',['bindchange',65,'class',1],[],e,s,gg)
var lSU=_v()
_(oRU,lSU)
var aTU=function(eVU,tUU,bWU,gg){
var xYU=_v()
_(bWU,xYU)
var oZU=function(c2U,f1U,h3U,gg){
var c5U=_v()
_(h3U,c5U)
var o6U=function(a8U,l7U,t9U,gg){
var bAV=_v()
_(t9U,bAV)
if(_oz(z,78,a8U,l7U,gg)){bAV.wxVkey=1
var oBV=_mz(z,'view',['bindtap',79,'class',1,'data-cover',2,'data-i',3,'data-idx',4,'data-index',5,'data-is-pingou',6,'data-name',7,'data-pps',8,'data-price',9,'data-sku',10],[],a8U,l7U,gg)
var xCV=_n('view')
_rz(z,xCV,'class',90,a8U,l7U,gg)
var oDV=_v()
_(xCV,oDV)
if(_oz(z,91,a8U,l7U,gg)){oDV.wxVkey=1
}
var fEV=_v()
_(xCV,fEV)
if(_oz(z,92,a8U,l7U,gg)){fEV.wxVkey=1
}
oDV.wxXCkey=1
fEV.wxXCkey=1
_(oBV,xCV)
_(bAV,oBV)
}
else{bAV.wxVkey=2
}
bAV.wxXCkey=1
return t9U
}
c5U.wxXCkey=2
_2z(z,76,o6U,c2U,f1U,gg,c5U,'item','index','index')
return h3U
}
xYU.wxXCkey=2
_2z(z,73,oZU,eVU,tUU,gg,xYU,'li','idx','sku')
return bWU
}
lSU.wxXCkey=2
_2z(z,69,aTU,e,s,gg,lSU,'ul','i','i')
_(tAT,oRU)
}
else{tAT.wxVkey=4
var cFV=_v()
_(tAT,cFV)
var hGV=function(cIV,oHV,oJV,gg){
var aLV=_v()
_(oJV,aLV)
var tMV=function(bOV,eNV,oPV,gg){
var oRV=_v()
_(oPV,oRV)
var fSV=function(hUV,cTV,oVV,gg){
var oXV=_v()
_(oVV,oXV)
if(_oz(z,103,hUV,cTV,gg)){oXV.wxVkey=1
var lYV=_mz(z,'view',['bindtap',104,'class',1,'data-cover',2,'data-i',3,'data-idx',4,'data-index',5,'data-is-pingou',6,'data-name',7,'data-pps',8,'data-price',9,'data-sku',10],[],hUV,cTV,gg)
var aZV=_n('view')
_rz(z,aZV,'class',115,hUV,cTV,gg)
var t1V=_v()
_(aZV,t1V)
if(_oz(z,116,hUV,cTV,gg)){t1V.wxVkey=1
}
var e2V=_v()
_(aZV,e2V)
if(_oz(z,117,hUV,cTV,gg)){e2V.wxVkey=1
}
t1V.wxXCkey=1
e2V.wxXCkey=1
_(lYV,aZV)
_(oXV,lYV)
}
oXV.wxXCkey=1
return oVV
}
oRV.wxXCkey=2
_2z(z,101,fSV,bOV,eNV,gg,oRV,'item','index','index')
return oPV
}
aLV.wxXCkey=2
_2z(z,99,tMV,cIV,oHV,gg,aLV,'li','idx','sku')
return oJV
}
cFV.wxXCkey=2
_2z(z,95,hGV,e,s,gg,cFV,'ul','i','i')
}
var eBT=_v()
_(a0S,eBT)
if(_oz(z,118,e,s,gg)){eBT.wxVkey=1
}
tAT.wxXCkey=1
eBT.wxXCkey=1
_(o8S,a0S)
var l9S=_v()
_(o8S,l9S)
if(_oz(z,119,e,s,gg)){l9S.wxVkey=1
}
l9S.wxXCkey=1
_(c7S,o8S)
}
c7S.wxXCkey=1
return r
}
e_[x[32]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx12_31()
var o4V=_n('view')
_rz(z,o4V,'class',0,e,s,gg)
var x5V=_v()
_(o4V,x5V)
if(_oz(z,1,e,s,gg)){x5V.wxVkey=1
var h9V=_v()
_(x5V,h9V)
if(_oz(z,2,e,s,gg)){h9V.wxVkey=1
}
h9V.wxXCkey=1
}
var o6V=_v()
_(o4V,o6V)
if(_oz(z,3,e,s,gg)){o6V.wxVkey=1
}
else if(_oz(z,4,e,s,gg)){o6V.wxVkey=2
var o0V=_v()
_(o6V,o0V)
if(_oz(z,5,e,s,gg)){o0V.wxVkey=1
}
o0V.wxXCkey=1
}
else if(_oz(z,6,e,s,gg)){o6V.wxVkey=3
var cAW=_v()
_(o6V,cAW)
if(_oz(z,7,e,s,gg)){cAW.wxVkey=1
}
cAW.wxXCkey=1
}
else if(_oz(z,8,e,s,gg)){o6V.wxVkey=4
}
else if(_oz(z,9,e,s,gg)){o6V.wxVkey=5
}
else if(_oz(z,10,e,s,gg)){o6V.wxVkey=6
var oBW=_v()
_(o6V,oBW)
if(_oz(z,11,e,s,gg)){oBW.wxVkey=1
}
oBW.wxXCkey=1
}
else if(_oz(z,12,e,s,gg)){o6V.wxVkey=7
}
else if(_oz(z,13,e,s,gg)){o6V.wxVkey=8
}
var f7V=_v()
_(o4V,f7V)
if(_oz(z,14,e,s,gg)){f7V.wxVkey=1
}
var c8V=_v()
_(o4V,c8V)
if(_oz(z,15,e,s,gg)){c8V.wxVkey=1
}
x5V.wxXCkey=1
o6V.wxXCkey=1
f7V.wxXCkey=1
c8V.wxXCkey=1
_(r,o4V)
return r
}
e_[x[33]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx12_32()
var aDW=_n('view')
_rz(z,aDW,'class',0,e,s,gg)
var tEW=_v()
_(aDW,tEW)
if(_oz(z,1,e,s,gg)){tEW.wxVkey=1
}
var eFW=_v()
_(aDW,eFW)
if(_oz(z,2,e,s,gg)){eFW.wxVkey=1
}
tEW.wxXCkey=1
eFW.wxXCkey=1
_(r,aDW)
return r
}
e_[x[34]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx12_33()
var oHW=_v()
_(r,oHW)
if(_oz(z,0,e,s,gg)){oHW.wxVkey=1
var xIW=_n('view')
_rz(z,xIW,'class',1,e,s,gg)
var cLW=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
var hMW=_v()
_(cLW,hMW)
if(_oz(z,4,e,s,gg)){hMW.wxVkey=1
var cOW=_n('view')
_rz(z,cOW,'class',5,e,s,gg)
var oPW=_v()
_(cOW,oPW)
if(_oz(z,6,e,s,gg)){oPW.wxVkey=1
}
var lQW=_v()
_(cOW,lQW)
if(_oz(z,7,e,s,gg)){lQW.wxVkey=1
}
oPW.wxXCkey=1
lQW.wxXCkey=1
_(hMW,cOW)
}
else{hMW.wxVkey=2
}
var oNW=_v()
_(cLW,oNW)
if(_oz(z,8,e,s,gg)){oNW.wxVkey=1
}
hMW.wxXCkey=1
oNW.wxXCkey=1
_(xIW,cLW)
var aRW=_mz(z,'view',['bindtap',9,'class',1],[],e,s,gg)
var tSW=_v()
_(aRW,tSW)
if(_oz(z,11,e,s,gg)){tSW.wxVkey=1
}
tSW.wxXCkey=1
_(xIW,aRW)
var oJW=_v()
_(xIW,oJW)
if(_oz(z,12,e,s,gg)){oJW.wxVkey=1
}
var fKW=_v()
_(xIW,fKW)
if(_oz(z,13,e,s,gg)){fKW.wxVkey=1
}
oJW.wxXCkey=1
fKW.wxXCkey=1
_(oHW,xIW)
var eTW=_mz(z,'modal-gift',['bind:close',14,'bind:confirm',1,'desc',2,'errCode',3,'giftList',4,'isShowModal',5],[],e,s,gg)
_(oHW,eTW)
}
oHW.wxXCkey=1
oHW.wxXCkey=3
return r
}
e_[x[35]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx12_34()
var oVW=_v()
_(r,oVW)
if(_oz(z,0,e,s,gg)){oVW.wxVkey=1
}
var xWW=_mz(z,'launch-pgapp',['bind:cancelJump',1,'param',1,'ref',2],[],e,s,gg)
_(r,xWW)
oVW.wxXCkey=1
return r
}
e_[x[36]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx12_35()
var fYW=_v()
_(r,fYW)
if(_oz(z,0,e,s,gg)){fYW.wxVkey=1
var cZW=_n('view')
_rz(z,cZW,'class',1,e,s,gg)
var h1W=_v()
_(cZW,h1W)
if(_oz(z,2,e,s,gg)){h1W.wxVkey=1
}
else{h1W.wxVkey=2
var c3W=_v()
_(h1W,c3W)
if(_oz(z,3,e,s,gg)){c3W.wxVkey=1
}
c3W.wxXCkey=1
}
var o2W=_v()
_(cZW,o2W)
if(_oz(z,4,e,s,gg)){o2W.wxVkey=1
}
h1W.wxXCkey=1
o2W.wxXCkey=1
_(fYW,cZW)
}
fYW.wxXCkey=1
return r
}
e_[x[37]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx12_36()
var l5W=_v()
_(r,l5W)
if(_oz(z,0,e,s,gg)){l5W.wxVkey=1
}
l5W.wxXCkey=1
return r
}
e_[x[38]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx12_37()
return r
}
e_[x[39]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx12_38()
var e8W=_v()
_(r,e8W)
if(_oz(z,0,e,s,gg)){e8W.wxVkey=1
var b9W=_v()
_(e8W,b9W)
if(_oz(z,1,e,s,gg)){b9W.wxVkey=1
}
b9W.wxXCkey=1
}
e8W.wxXCkey=1
return r
}
e_[x[40]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx12_39()
var xAX=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var fCX=_v()
_(xAX,fCX)
var cDX=function(oFX,hEX,cGX,gg){
var lIX=_v()
_(cGX,lIX)
if(_oz(z,3,oFX,hEX,gg)){lIX.wxVkey=1
}
lIX.wxXCkey=1
return cGX
}
fCX.wxXCkey=2
_2z(z,2,cDX,e,s,gg,fCX,'item','index','')
var oBX=_v()
_(xAX,oBX)
if(_oz(z,4,e,s,gg)){oBX.wxVkey=1
var aJX=_v()
_(oBX,aJX)
if(_oz(z,5,e,s,gg)){aJX.wxVkey=1
}
aJX.wxXCkey=1
}
else if(_oz(z,6,e,s,gg)){oBX.wxVkey=2
var tKX=_v()
_(oBX,tKX)
if(_oz(z,7,e,s,gg)){tKX.wxVkey=1
}
tKX.wxXCkey=1
}
oBX.wxXCkey=1
_(r,xAX)
return r
}
e_[x[41]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx12_40()
var bMX=_v()
_(r,bMX)
if(_oz(z,0,e,s,gg)){bMX.wxVkey=1
}
bMX.wxXCkey=1
return r
}
e_[x[42]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx12_41()
var xOX=_mz(z,'view',['class',0,'id',1,'style',1],[],e,s,gg)
var cRX=_n('view')
_rz(z,cRX,'class',3,e,s,gg)
var oTX=_v()
_(cRX,oTX)
var cUX=function(lWX,oVX,aXX,gg){
var eZX=_mz(z,'view',['catchtap',8,'class',1,'data-index',2,'data-rid',3],[],lWX,oVX,gg)
var b1X=_v()
_(eZX,b1X)
if(_oz(z,12,lWX,oVX,gg)){b1X.wxVkey=1
}
b1X.wxXCkey=1
_(aXX,eZX)
return aXX
}
oTX.wxXCkey=2
_2z(z,6,cUX,e,s,gg,oTX,'entry','idx','idx')
var hSX=_v()
_(cRX,hSX)
if(_oz(z,13,e,s,gg)){hSX.wxVkey=1
}
hSX.wxXCkey=1
_(xOX,cRX)
var o2X=_v()
_(xOX,o2X)
var x3X=function(f5X,o4X,c6X,gg){
var o8X=_mz(z,'view',['class',18,'style',1],[],f5X,o4X,gg)
var c9X=_v()
_(o8X,c9X)
if(_oz(z,20,f5X,o4X,gg)){c9X.wxVkey=1
}
else{c9X.wxVkey=2
var o0X=_n('view')
_rz(z,o0X,'class',21,f5X,o4X,gg)
var lAY=_v()
_(o0X,lAY)
if(_oz(z,22,f5X,o4X,gg)){lAY.wxVkey=1
var eDY=_mz(z,'comment-items',['bind:previewVideo',23,'bind:showVideoToast',1,'entries',2,'isPingou',3],[],f5X,o4X,gg)
_(lAY,eDY)
}
var aBY=_v()
_(o0X,aBY)
if(_oz(z,27,f5X,o4X,gg)){aBY.wxVkey=1
}
var tCY=_v()
_(o0X,tCY)
if(_oz(z,28,f5X,o4X,gg)){tCY.wxVkey=1
var bEY=_mz(z,'comment-items',['bind:previewVideo',29,'bind:showVideoToast',1,'entries',2,'isPingou',3],[],f5X,o4X,gg)
_(tCY,bEY)
}
lAY.wxXCkey=1
lAY.wxXCkey=3
aBY.wxXCkey=1
tCY.wxXCkey=1
tCY.wxXCkey=3
_(c9X,o0X)
}
c9X.wxXCkey=1
c9X.wxXCkey=3
_(c6X,o8X)
return c6X
}
o2X.wxXCkey=4
_2z(z,16,x3X,e,s,gg,o2X,'entry','idx','idx')
var oPX=_v()
_(xOX,oPX)
if(_oz(z,33,e,s,gg)){oPX.wxVkey=1
}
var fQX=_v()
_(xOX,fQX)
if(_oz(z,34,e,s,gg)){fQX.wxVkey=1
}
oPX.wxXCkey=1
fQX.wxXCkey=1
_(r,xOX)
return r
}
e_[x[43]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx12_42()
var xGY=_v()
_(r,xGY)
if(_oz(z,0,e,s,gg)){xGY.wxVkey=1
var oHY=_n('view')
_rz(z,oHY,'class',1,e,s,gg)
var fIY=_v()
_(oHY,fIY)
if(_oz(z,2,e,s,gg)){fIY.wxVkey=1
}
else{fIY.wxVkey=2
var cJY=_v()
_(fIY,cJY)
if(_oz(z,3,e,s,gg)){cJY.wxVkey=1
}
cJY.wxXCkey=1
}
var hKY=_v()
_(oHY,hKY)
var oLY=function(oNY,cMY,lOY,gg){
var tQY=_v()
_(lOY,tQY)
if(_oz(z,7,oNY,cMY,gg)){tQY.wxVkey=1
}
tQY.wxXCkey=1
return lOY
}
hKY.wxXCkey=2
_2z(z,5,oLY,e,s,gg,hKY,'tuan','index','tuan_owner_nickname')
fIY.wxXCkey=1
_(xGY,oHY)
}
xGY.wxXCkey=1
return r
}
e_[x[44]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx12_43()
var bSY=_n('view')
_rz(z,bSY,'class',0,e,s,gg)
var oTY=_v()
_(bSY,oTY)
if(_oz(z,1,e,s,gg)){oTY.wxVkey=1
}
var xUY=_v()
_(bSY,xUY)
var oVY=function(cXY,fWY,hYY,gg){
var c1Y=_mz(z,'view',['bindtap',4,'class',1,'data-flag',2,'data-icon',3,'data-tourl',4,'data-videourl',5],[],cXY,fWY,gg)
var o2Y=_v()
_(c1Y,o2Y)
if(_oz(z,10,cXY,fWY,gg)){o2Y.wxVkey=1
}
var l3Y=_v()
_(c1Y,l3Y)
if(_oz(z,11,cXY,fWY,gg)){l3Y.wxVkey=1
}
o2Y.wxXCkey=1
l3Y.wxXCkey=1
_(hYY,c1Y)
return hYY
}
xUY.wxXCkey=2
_2z(z,2,oVY,e,s,gg,xUY,'item','index','title')
var a4Y=_v()
_(bSY,a4Y)
var t5Y=function(b7Y,e6Y,o8Y,gg){
var o0Y=_mz(z,'view',['bindtap',14,'class',1,'data-flag',2,'data-icon',3,'data-tourl',4],[],b7Y,e6Y,gg)
var fAZ=_v()
_(o0Y,fAZ)
if(_oz(z,19,b7Y,e6Y,gg)){fAZ.wxVkey=1
}
fAZ.wxXCkey=1
_(o8Y,o0Y)
return o8Y
}
a4Y.wxXCkey=2
_2z(z,12,t5Y,e,s,gg,a4Y,'item','index','title')
oTY.wxXCkey=1
_(r,bSY)
return r
}
e_[x[45]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx12_44()
var hCZ=_n('view')
_rz(z,hCZ,'class',0,e,s,gg)
var oDZ=_v()
_(hCZ,oDZ)
if(_oz(z,1,e,s,gg)){oDZ.wxVkey=1
}
else if(_oz(z,2,e,s,gg)){oDZ.wxVkey=2
}
else if(_oz(z,3,e,s,gg)){oDZ.wxVkey=3
}
else if(_oz(z,4,e,s,gg)){oDZ.wxVkey=4
}
else if(_oz(z,5,e,s,gg)){oDZ.wxVkey=5
var cEZ=_v()
_(oDZ,cEZ)
if(_oz(z,6,e,s,gg)){cEZ.wxVkey=1
}
else if(_oz(z,7,e,s,gg)){cEZ.wxVkey=2
var oFZ=_v()
_(cEZ,oFZ)
if(_oz(z,8,e,s,gg)){oFZ.wxVkey=1
var lGZ=_mz(z,'view',['bind:tap',9,'class',1],[],e,s,gg)
var aHZ=_v()
_(lGZ,aHZ)
if(_oz(z,11,e,s,gg)){aHZ.wxVkey=1
}
var tIZ=_v()
_(lGZ,tIZ)
if(_oz(z,12,e,s,gg)){tIZ.wxVkey=1
}
aHZ.wxXCkey=1
tIZ.wxXCkey=1
_(oFZ,lGZ)
}
else if(_oz(z,13,e,s,gg)){oFZ.wxVkey=2
}
else if(_oz(z,14,e,s,gg)){oFZ.wxVkey=3
var eJZ=_mz(z,'view',['bind:tap',15,'class',1,'data-activeid',2,'data-id',3,'data-masternickname',4,'data-tuanid',5,'data-tuanlist',6],[],e,s,gg)
var bKZ=_n('view')
_rz(z,bKZ,'class',22,e,s,gg)
var oLZ=_v()
_(bKZ,oLZ)
if(_oz(z,23,e,s,gg)){oLZ.wxVkey=1
}
var xMZ=_v()
_(bKZ,xMZ)
var oNZ=function(cPZ,fOZ,hQZ,gg){
var cSZ=_v()
_(hQZ,cSZ)
if(_oz(z,26,cPZ,fOZ,gg)){cSZ.wxVkey=1
}
cSZ.wxXCkey=1
return hQZ
}
xMZ.wxXCkey=2
_2z(z,24,oNZ,e,s,gg,xMZ,'item','index','{{ index }}')
oLZ.wxXCkey=1
_(eJZ,bKZ)
_(oFZ,eJZ)
}
oFZ.wxXCkey=1
}
cEZ.wxXCkey=1
}
else if(_oz(z,27,e,s,gg)){oDZ.wxVkey=6
}
else if(_oz(z,28,e,s,gg)){oDZ.wxVkey=7
}
else if(_oz(z,29,e,s,gg)){oDZ.wxVkey=8
}
else if(_oz(z,30,e,s,gg)){oDZ.wxVkey=9
var oTZ=_mz(z,'view',['bindtap',31,'class',1,'data-flag',2],[],e,s,gg)
var lUZ=_n('view')
_rz(z,lUZ,'class',34,e,s,gg)
var aVZ=_v()
_(lUZ,aVZ)
if(_oz(z,35,e,s,gg)){aVZ.wxVkey=1
}
var tWZ=_v()
_(lUZ,tWZ)
if(_oz(z,36,e,s,gg)){tWZ.wxVkey=1
}
aVZ.wxXCkey=1
tWZ.wxXCkey=1
_(oTZ,lUZ)
_(oDZ,oTZ)
}
else if(_oz(z,37,e,s,gg)){oDZ.wxVkey=10
}
oDZ.wxXCkey=1
_(r,hCZ)
return r
}
e_[x[46]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx12_45()
var bYZ=_n('view')
_rz(z,bYZ,'class',0,e,s,gg)
var oZZ=_n('view')
_rz(z,oZZ,'class',1,e,s,gg)
var x1Z=_v()
_(oZZ,x1Z)
if(_oz(z,2,e,s,gg)){x1Z.wxVkey=1
}
var o2Z=_v()
_(oZZ,o2Z)
if(_oz(z,3,e,s,gg)){o2Z.wxVkey=1
}
x1Z.wxXCkey=1
o2Z.wxXCkey=1
_(bYZ,oZZ)
var f3Z=_mz(z,'view',['bindtap',4,'class',1],[],e,s,gg)
var c4Z=_v()
_(f3Z,c4Z)
if(_oz(z,6,e,s,gg)){c4Z.wxVkey=1
}
c4Z.wxXCkey=1
_(bYZ,f3Z)
_(r,bYZ)
return r
}
e_[x[47]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx12_46()
var o6Z=_n('view')
_rz(z,o6Z,'class',0,e,s,gg)
var c7Z=_n('view')
_rz(z,c7Z,'class',1,e,s,gg)
var o8Z=_v()
_(c7Z,o8Z)
if(_oz(z,2,e,s,gg)){o8Z.wxVkey=1
}
var l9Z=_v()
_(c7Z,l9Z)
if(_oz(z,3,e,s,gg)){l9Z.wxVkey=1
}
o8Z.wxXCkey=1
l9Z.wxXCkey=1
_(o6Z,c7Z)
var a0Z=_mz(z,'view',['bindtap',4,'class',1],[],e,s,gg)
var tA1=_v()
_(a0Z,tA1)
if(_oz(z,6,e,s,gg)){tA1.wxVkey=1
}
tA1.wxXCkey=1
_(o6Z,a0Z)
_(r,o6Z)
return r
}
e_[x[48]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx12_47()
return r
}
e_[x[49]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx12_48()
var oD1=_n('view')
_rz(z,oD1,'class',0,e,s,gg)
var xE1=_v()
_(oD1,xE1)
if(_oz(z,1,e,s,gg)){xE1.wxVkey=1
}
var oF1=_v()
_(oD1,oF1)
if(_oz(z,2,e,s,gg)){oF1.wxVkey=1
var hI1=_v()
_(oF1,hI1)
var oJ1=function(oL1,cK1,lM1,gg){
var tO1=_n('view')
_rz(z,tO1,'class',7,oL1,cK1,gg)
var eP1=_v()
_(tO1,eP1)
if(_oz(z,8,oL1,cK1,gg)){eP1.wxVkey=1
}
var bQ1=_v()
_(tO1,bQ1)
var oR1=function(oT1,xS1,fU1,gg){
var hW1=_mz(z,'view',['bind:tap',11,'class',1,'data-gindex',2,'data-id',3,'data-type',4],[],oT1,xS1,gg)
var oX1=_v()
_(hW1,oX1)
if(_oz(z,16,oT1,xS1,gg)){oX1.wxVkey=1
}
var cY1=_v()
_(hW1,cY1)
if(_oz(z,17,oT1,xS1,gg)){cY1.wxVkey=1
}
oX1.wxXCkey=1
cY1.wxXCkey=1
_(fU1,hW1)
return fU1
}
bQ1.wxXCkey=2
_2z(z,9,oR1,oL1,cK1,gg,bQ1,'item','index','id')
eP1.wxXCkey=1
_(lM1,tO1)
return lM1
}
hI1.wxXCkey=2
_2z(z,5,oJ1,e,s,gg,hI1,'group','groupIndex','name')
}
var fG1=_v()
_(oD1,fG1)
if(_oz(z,18,e,s,gg)){fG1.wxVkey=1
var oZ1=_v()
_(fG1,oZ1)
var l11=function(t31,a21,e41,gg){
var o61=_v()
_(e41,o61)
var x71=function(f91,o81,c01,gg){
var oB2=_mz(z,'view',['bind:tap',25,'class',1,'data-gindex',2,'data-id',3,'data-type',4],[],f91,o81,gg)
var oD2=_n('view')
_rz(z,oD2,'class',30,f91,o81,gg)
var lE2=_v()
_(oD2,lE2)
if(_oz(z,31,f91,o81,gg)){lE2.wxVkey=1
}
var aF2=_v()
_(oD2,aF2)
if(_oz(z,32,f91,o81,gg)){aF2.wxVkey=1
}
lE2.wxXCkey=1
aF2.wxXCkey=1
_(oB2,oD2)
var cC2=_v()
_(oB2,cC2)
if(_oz(z,33,f91,o81,gg)){cC2.wxVkey=1
}
cC2.wxXCkey=1
_(c01,oB2)
return c01
}
o61.wxXCkey=2
_2z(z,23,x71,t31,a21,gg,o61,'item','index','id')
return e41
}
oZ1.wxXCkey=2
_2z(z,21,l11,e,s,gg,oZ1,'group','groupIndex','name')
}
var cH1=_v()
_(oD1,cH1)
if(_oz(z,34,e,s,gg)){cH1.wxVkey=1
var tG2=_v()
_(cH1,tG2)
var eH2=function(oJ2,bI2,xK2,gg){
var fM2=_v()
_(xK2,fM2)
var cN2=function(oP2,hO2,cQ2,gg){
var lS2=_mz(z,'view',['bind:tap',41,'class',1,'data-gindex',2,'data-id',3,'data-type',4],[],oP2,hO2,gg)
var eV2=_n('view')
_rz(z,eV2,'class',46,oP2,hO2,gg)
var bW2=_v()
_(eV2,bW2)
if(_oz(z,47,oP2,hO2,gg)){bW2.wxVkey=1
}
var oX2=_v()
_(eV2,oX2)
if(_oz(z,48,oP2,hO2,gg)){oX2.wxVkey=1
}
bW2.wxXCkey=1
oX2.wxXCkey=1
_(lS2,eV2)
var aT2=_v()
_(lS2,aT2)
if(_oz(z,49,oP2,hO2,gg)){aT2.wxVkey=1
}
var tU2=_v()
_(lS2,tU2)
if(_oz(z,50,oP2,hO2,gg)){tU2.wxVkey=1
}
aT2.wxXCkey=1
tU2.wxXCkey=1
_(cQ2,lS2)
return cQ2
}
fM2.wxXCkey=2
_2z(z,39,cN2,oJ2,bI2,gg,fM2,'item','index','id')
return xK2
}
tG2.wxXCkey=2
_2z(z,37,eH2,e,s,gg,tG2,'group','groupIndex','name')
}
xE1.wxXCkey=1
oF1.wxXCkey=1
fG1.wxXCkey=1
cH1.wxXCkey=1
_(r,oD1)
return r
}
e_[x[50]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx12_49()
var oZ2=e_[x[51]].i
var f12=_n('view')
_rz(z,f12,'class',0,e,s,gg)
var c52=_n('view')
_rz(z,c52,'class',1,e,s,gg)
var o62=_v()
_(c52,o62)
if(_oz(z,2,e,s,gg)){o62.wxVkey=1
var e02=_n('view')
_rz(z,e02,'class',3,e,s,gg)
var bA3=_v()
_(e02,bA3)
if(_oz(z,4,e,s,gg)){bA3.wxVkey=1
}
var oB3=_v()
_(e02,oB3)
if(_oz(z,5,e,s,gg)){oB3.wxVkey=1
}
var xC3=_v()
_(e02,xC3)
if(_oz(z,6,e,s,gg)){xC3.wxVkey=1
}
bA3.wxXCkey=1
oB3.wxXCkey=1
xC3.wxXCkey=1
_(o62,e02)
var a82=_v()
_(o62,a82)
if(_oz(z,7,e,s,gg)){a82.wxVkey=1
}
var t92=_v()
_(o62,t92)
if(_oz(z,8,e,s,gg)){t92.wxVkey=1
}
a82.wxXCkey=1
t92.wxXCkey=1
}
else if(_oz(z,9,e,s,gg)){o62.wxVkey=2
var cF3=_n('view')
_rz(z,cF3,'class',10,e,s,gg)
var hG3=_v()
_(cF3,hG3)
if(_oz(z,11,e,s,gg)){hG3.wxVkey=1
var oJ3=_v()
_(hG3,oJ3)
if(_oz(z,12,e,s,gg)){oJ3.wxVkey=1
}
oJ3.wxXCkey=1
}
var oH3=_v()
_(cF3,oH3)
if(_oz(z,13,e,s,gg)){oH3.wxVkey=1
}
var cI3=_v()
_(cF3,cI3)
if(_oz(z,14,e,s,gg)){cI3.wxVkey=1
}
hG3.wxXCkey=1
oH3.wxXCkey=1
cI3.wxXCkey=1
_(o62,cF3)
var oD3=_v()
_(o62,oD3)
if(_oz(z,15,e,s,gg)){oD3.wxVkey=1
}
var fE3=_v()
_(o62,fE3)
if(_oz(z,16,e,s,gg)){fE3.wxVkey=1
}
oD3.wxXCkey=1
fE3.wxXCkey=1
}
else if(_oz(z,17,e,s,gg)){o62.wxVkey=3
var lK3=_n('view')
_rz(z,lK3,'class',18,e,s,gg)
var aL3=_v()
_(lK3,aL3)
if(_oz(z,19,e,s,gg)){aL3.wxVkey=1
var tM3=_v()
_(aL3,tM3)
if(_oz(z,20,e,s,gg)){tM3.wxVkey=1
}
else if(_oz(z,21,e,s,gg)){tM3.wxVkey=2
var eN3=_mz(z,'Item-price',['extraPriceFlag',22,'info',1,'isOfflineHasShop',2,'priceLayoutClass',3,'showGuide',4],[],e,s,gg)
_(tM3,eN3)
}
else{tM3.wxVkey=3
}
tM3.wxXCkey=1
tM3.wxXCkey=3
}
else{aL3.wxVkey=2
var bO3=_v()
_(aL3,bO3)
if(_oz(z,27,e,s,gg)){bO3.wxVkey=1
}
else if(_oz(z,28,e,s,gg)){bO3.wxVkey=2
}
else{bO3.wxVkey=3
var oP3=_mz(z,'Item-price',['extraPriceFlag',29,'info',1,'isOfflineHasShop',2,'priceLayoutClass',3,'showGuide',4],[],e,s,gg)
_(bO3,oP3)
}
bO3.wxXCkey=1
bO3.wxXCkey=3
}
aL3.wxXCkey=1
aL3.wxXCkey=3
aL3.wxXCkey=3
_(o62,lK3)
}
var l72=_v()
_(c52,l72)
if(_oz(z,34,e,s,gg)){l72.wxVkey=1
}
o62.wxXCkey=1
o62.wxXCkey=3
l72.wxXCkey=1
_(f12,c52)
var xQ3=_n('view')
_rz(z,xQ3,'class',35,e,s,gg)
var oR3=_v()
_(xQ3,oR3)
if(_oz(z,36,e,s,gg)){oR3.wxVkey=1
var fS3=_v()
_(oR3,fS3)
if(_oz(z,37,e,s,gg)){fS3.wxVkey=1
}
fS3.wxXCkey=1
}
var cT3=_n('view')
_rz(z,cT3,'class',38,e,s,gg)
var hU3=_v()
_(cT3,hU3)
if(_oz(z,39,e,s,gg)){hU3.wxVkey=1
var aZ3=_v()
_(hU3,aZ3)
var t13=function(b33,e23,o43,gg){
var o63=_v()
_(o43,o63)
if(_oz(z,44,b33,e23,gg)){o63.wxVkey=1
var f73=_n('view')
_rz(z,f73,'class',45,b33,e23,gg)
var c83=_v()
_(f73,c83)
if(_oz(z,46,b33,e23,gg)){c83.wxVkey=1
var h93=_v()
_(c83,h93)
var o03=function(oB4,cA4,lC4,gg){
var tE4=_v()
_(lC4,tE4)
if(_oz(z,50,oB4,cA4,gg)){tE4.wxVkey=1
}
tE4.wxXCkey=1
return lC4
}
h93.wxXCkey=2
_2z(z,48,o03,b33,e23,gg,h93,'item','idx','*this')
}
else{c83.wxVkey=2
var eF4=_v()
_(c83,eF4)
var bG4=function(xI4,oH4,oJ4,gg){
var cL4=_v()
_(oJ4,cL4)
if(_oz(z,54,xI4,oH4,gg)){cL4.wxVkey=1
}
cL4.wxXCkey=1
return oJ4
}
eF4.wxXCkey=2
_2z(z,52,bG4,b33,e23,gg,eF4,'item','idx','*this')
}
c83.wxXCkey=1
_(o63,f73)
}
o63.wxXCkey=1
return o43
}
aZ3.wxXCkey=2
_2z(z,42,t13,e,s,gg,aZ3,'skuProp','index','name')
}
var oV3=_v()
_(cT3,oV3)
if(_oz(z,55,e,s,gg)){oV3.wxVkey=1
var hM4=_v()
_(oV3,hM4)
if(_oz(z,56,e,s,gg)){hM4.wxVkey=1
}
var oN4=_v()
_(oV3,oN4)
if(_oz(z,57,e,s,gg)){oN4.wxVkey=1
}
hM4.wxXCkey=1
oN4.wxXCkey=1
}
var cW3=_v()
_(cT3,cW3)
if(_oz(z,58,e,s,gg)){cW3.wxVkey=1
var cO4=_mz(z,'view',['bindtap',59,'class',1],[],e,s,gg)
var oP4=_v()
_(cO4,oP4)
if(_oz(z,61,e,s,gg)){oP4.wxVkey=1
var lQ4=_v()
_(oP4,lQ4)
var aR4=function(eT4,tS4,bU4,gg){
var xW4=_v()
_(bU4,xW4)
if(_oz(z,64,eT4,tS4,gg)){xW4.wxVkey=1
var fY4=_n('view')
_rz(z,fY4,'class',65,eT4,tS4,gg)
var cZ4=_v()
_(fY4,cZ4)
if(_oz(z,67,eT4,tS4,gg)){cZ4.wxVkey=1
}
cZ4.wxXCkey=1
_(xW4,fY4)
}
var oX4=_v()
_(bU4,oX4)
if(_oz(z,68,eT4,tS4,gg)){oX4.wxVkey=1
}
xW4.wxXCkey=1
oX4.wxXCkey=1
return bU4
}
lQ4.wxXCkey=2
_2z(z,63,aR4,e,s,gg,lQ4,'item','idx','')
}
else{oP4.wxVkey=2
var h14=_v()
_(oP4,h14)
if(_oz(z,69,e,s,gg)){h14.wxVkey=1
}
h14.wxXCkey=1
}
oP4.wxXCkey=1
_(cW3,cO4)
}
var oX3=_v()
_(cT3,oX3)
if(_oz(z,70,e,s,gg)){oX3.wxVkey=1
var o24=_v()
_(oX3,o24)
if(_oz(z,71,e,s,gg)){o24.wxVkey=1
}
o24.wxXCkey=1
}
var lY3=_v()
_(cT3,lY3)
if(_oz(z,72,e,s,gg)){lY3.wxVkey=1
}
hU3.wxXCkey=1
oV3.wxXCkey=1
cW3.wxXCkey=1
oX3.wxXCkey=1
lY3.wxXCkey=1
_(xQ3,cT3)
var c34=_mz(z,'Sku-added-service',['areaId',73,'bind:updateAddedServices',1,'brandId',2,'category',3,'isPingou',4,'isSupportGift',5,'isSupportPackageJd',6,'isSupportYanbao',7,'price',8,'skuId',9],[],e,s,gg)
_(xQ3,c34)
oR3.wxXCkey=1
_(f12,xQ3)
var c22=_v()
_(f12,c22)
if(_oz(z,83,e,s,gg)){c22.wxVkey=1
}
var h32=_v()
_(f12,h32)
if(_oz(z,84,e,s,gg)){h32.wxVkey=1
}
else if(_oz(z,85,e,s,gg)){h32.wxVkey=2
}
else if(_oz(z,86,e,s,gg)){h32.wxVkey=3
}
else if(_oz(z,87,e,s,gg)){h32.wxVkey=4
var o44=_v()
_(h32,o44)
if(_oz(z,88,e,s,gg)){o44.wxVkey=1
}
else if(_oz(z,89,e,s,gg)){o44.wxVkey=2
var l54=_v()
_(o44,l54)
if(_oz(z,90,e,s,gg)){l54.wxVkey=1
var a64=_mz(z,'view',['bind:tap',91,'class',1],[],e,s,gg)
var t74=_v()
_(a64,t74)
if(_oz(z,93,e,s,gg)){t74.wxVkey=1
}
var e84=_v()
_(a64,e84)
if(_oz(z,94,e,s,gg)){e84.wxVkey=1
}
t74.wxXCkey=1
e84.wxXCkey=1
_(l54,a64)
}
else if(_oz(z,95,e,s,gg)){l54.wxVkey=2
var b94=_mz(z,'view',['bind:tap',96,'class',1],[],e,s,gg)
var o04=_n('view')
_rz(z,o04,'class',98,e,s,gg)
var xA5=_v()
_(o04,xA5)
if(_oz(z,99,e,s,gg)){xA5.wxVkey=1
}
var oB5=_v()
_(o04,oB5)
var fC5=function(hE5,cD5,oF5,gg){
var oH5=_v()
_(oF5,oH5)
if(_oz(z,102,hE5,cD5,gg)){oH5.wxVkey=1
}
oH5.wxXCkey=1
return oF5
}
oB5.wxXCkey=2
_2z(z,100,fC5,e,s,gg,oB5,'item','index','{{ index }}')
xA5.wxXCkey=1
_(b94,o04)
_(l54,b94)
}
l54.wxXCkey=1
}
o44.wxXCkey=1
}
var o42=_v()
_(f12,o42)
if(_oz(z,103,e,s,gg)){o42.wxVkey=1
var lI5=_v()
_(o42,lI5)
if(_oz(z,104,e,s,gg)){lI5.wxVkey=1
var aJ5=_n('view')
_rz(z,aJ5,'class',105,e,s,gg)
var tK5=_v()
_(aJ5,tK5)
if(_oz(z,106,e,s,gg)){tK5.wxVkey=1
var bM5=_n('Add-cart-pg')
_rz(z,bM5,'bind:addCartPg',107,e,s,gg)
_(tK5,bM5)
}
var eL5=_v()
_(aJ5,eL5)
if(_oz(z,108,e,s,gg)){eL5.wxVkey=1
}
else if(_oz(z,109,e,s,gg)){eL5.wxVkey=2
var oN5=_v()
_(eL5,oN5)
var xO5=function(fQ5,oP5,cR5,gg){
var oT5=_v()
_(cR5,oT5)
if(_oz(z,112,fQ5,oP5,gg)){oT5.wxVkey=1
var cU5=_mz(z,'view',['bindtap',113,'class',1,'data-disabled',2,'data-ptagname',3,'data-tuaninfo',4],[],fQ5,oP5,gg)
var oV5=_v()
_(cU5,oV5)
if(_oz(z,118,fQ5,oP5,gg)){oV5.wxVkey=1
}
oV5.wxXCkey=1
_(oT5,cU5)
}
oT5.wxXCkey=1
return cR5
}
oN5.wxXCkey=2
_2z(z,110,xO5,e,s,gg,oN5,'item','index','text')
}
else if(_oz(z,119,e,s,gg)){eL5.wxVkey=3
}
else{eL5.wxVkey=4
var lW5=_v()
_(eL5,lW5)
if(_oz(z,120,e,s,gg)){lW5.wxVkey=1
}
var aX5=_v()
_(eL5,aX5)
if(_oz(z,121,e,s,gg)){aX5.wxVkey=1
var tY5=_mz(z,'button',['appParameter',122,'binderror',1,'bindtap',2,'class',3,'data-type',4,'openType',5],[],e,s,gg)
var eZ5=_v()
_(tY5,eZ5)
if(_oz(z,128,e,s,gg)){eZ5.wxVkey=1
}
eZ5.wxXCkey=1
_(aX5,tY5)
}
else{aX5.wxVkey=2
var b15=_mz(z,'view',['bind:tap',129,'class',1,'data-disabled',2,'data-report',3],[],e,s,gg)
var o25=_v()
_(b15,o25)
if(_oz(z,133,e,s,gg)){o25.wxVkey=1
}
var x35=_n('view')
_rz(z,x35,'class',134,e,s,gg)
var o45=_v()
_(x35,o45)
if(_oz(z,135,e,s,gg)){o45.wxVkey=1
}
else{o45.wxVkey=2
var f55=_v()
_(o45,f55)
if(_oz(z,136,e,s,gg)){f55.wxVkey=1
}
f55.wxXCkey=1
}
o45.wxXCkey=1
_(b15,x35)
o25.wxXCkey=1
_(aX5,b15)
}
lW5.wxXCkey=1
aX5.wxXCkey=1
}
tK5.wxXCkey=1
tK5.wxXCkey=3
eL5.wxXCkey=1
_(lI5,aJ5)
}
else if(_oz(z,137,e,s,gg)){lI5.wxVkey=2
var c65=_n('view')
_rz(z,c65,'class',138,e,s,gg)
var h75=_v()
_(c65,h75)
if(_oz(z,139,e,s,gg)){h75.wxVkey=1
}
else if(_oz(z,140,e,s,gg)){h75.wxVkey=2
var o85=_v()
_(h75,o85)
if(_oz(z,141,e,s,gg)){o85.wxVkey=1
}
var c95=_v()
_(h75,c95)
if(_oz(z,142,e,s,gg)){c95.wxVkey=1
}
o85.wxXCkey=1
c95.wxXCkey=1
}
else if(_oz(z,143,e,s,gg)){h75.wxVkey=3
}
else if(_oz(z,144,e,s,gg)){h75.wxVkey=4
var o05=_v()
_(h75,o05)
if(_oz(z,145,e,s,gg)){o05.wxVkey=1
}
o05.wxXCkey=1
}
else if(_oz(z,146,e,s,gg)){h75.wxVkey=5
}
else if(_oz(z,147,e,s,gg)){h75.wxVkey=6
var lA6=_v()
_(h75,lA6)
if(_oz(z,148,e,s,gg)){lA6.wxVkey=1
var tC6=_mz(z,'view',['bindtap',149,'class',1,'data-enable',2],[],e,s,gg)
var eD6=_v()
_(tC6,eD6)
if(_oz(z,152,e,s,gg)){eD6.wxVkey=1
}
eD6.wxXCkey=1
_(lA6,tC6)
}
var aB6=_v()
_(h75,aB6)
if(_oz(z,153,e,s,gg)){aB6.wxVkey=1
var bE6=_v()
_(aB6,bE6)
if(_oz(z,154,e,s,gg)){bE6.wxVkey=1
var oF6=_v()
_(bE6,oF6)
if(_oz(z,155,e,s,gg)){oF6.wxVkey=1
var xG6=_mz(z,'button',['appParameter',156,'binderror',1,'bindtap',2,'class',3,'data-type',4,'data-yuyue-status',5,'openType',6],[],e,s,gg)
var oH6=_v()
_(xG6,oH6)
if(_oz(z,163,e,s,gg)){oH6.wxVkey=1
}
oH6.wxXCkey=1
_(oF6,xG6)
}
else{oF6.wxVkey=2
var fI6=_mz(z,'button',['bindtap',164,'class',1,'data-type',2,'data-yuyue-status',3],[],e,s,gg)
var cJ6=_v()
_(fI6,cJ6)
if(_oz(z,168,e,s,gg)){cJ6.wxVkey=1
}
cJ6.wxXCkey=1
_(oF6,fI6)
}
oF6.wxXCkey=1
}
else if(_oz(z,169,e,s,gg)){bE6.wxVkey=2
var hK6=_mz(z,'form',['reportSubmit',-1,'bindsubmit',170,'class',1],[],e,s,gg)
var oL6=_v()
_(hK6,oL6)
if(_oz(z,172,e,s,gg)){oL6.wxVkey=1
}
oL6.wxXCkey=1
_(bE6,hK6)
}
else{bE6.wxVkey=3
var cM6=_mz(z,'view',['bindtap',173,'class',1,'data-enable',2],[],e,s,gg)
var oN6=_v()
_(cM6,oN6)
if(_oz(z,176,e,s,gg)){oN6.wxVkey=1
}
oN6.wxXCkey=1
_(bE6,cM6)
}
bE6.wxXCkey=1
}
lA6.wxXCkey=1
aB6.wxXCkey=1
}
else if(_oz(z,177,e,s,gg)){h75.wxVkey=7
var lO6=_v()
_(h75,lO6)
if(_oz(z,178,e,s,gg)){lO6.wxVkey=1
}
lO6.wxXCkey=1
}
else if(_oz(z,179,e,s,gg)){h75.wxVkey=8
var aP6=_v()
_(h75,aP6)
if(_oz(z,180,e,s,gg)){aP6.wxVkey=1
}
aP6.wxXCkey=1
}
else if(_oz(z,181,e,s,gg)){h75.wxVkey=9
var tQ6=_v()
_(h75,tQ6)
if(_oz(z,182,e,s,gg)){tQ6.wxVkey=1
}
tQ6.wxXCkey=1
}
else if(_oz(z,183,e,s,gg)){h75.wxVkey=10
}
else if(_oz(z,184,e,s,gg)){h75.wxVkey=11
}
else if(_oz(z,185,e,s,gg)){h75.wxVkey=12
}
else if(_oz(z,186,e,s,gg)){h75.wxVkey=13
}
else if(_oz(z,187,e,s,gg)){h75.wxVkey=14
var eR6=_v()
_(h75,eR6)
if(_oz(z,188,e,s,gg)){eR6.wxVkey=1
}
var bS6=_v()
_(h75,bS6)
if(_oz(z,189,e,s,gg)){bS6.wxVkey=1
}
eR6.wxXCkey=1
bS6.wxXCkey=1
}
else if(_oz(z,190,e,s,gg)){h75.wxVkey=15
}
else if(_oz(z,191,e,s,gg)){h75.wxVkey=16
var oT6=_v()
_(h75,oT6)
if(_oz(z,192,e,s,gg)){oT6.wxVkey=1
}
var xU6=_mz(z,'view',['bindtap',193,'class',1,'style',2],[],e,s,gg)
var oV6=_v()
_(xU6,oV6)
if(_oz(z,196,e,s,gg)){oV6.wxVkey=1
}
oV6.wxXCkey=1
_(h75,xU6)
oT6.wxXCkey=1
}
else{h75.wxVkey=17
var fW6=_v()
_(h75,fW6)
if(_oz(z,197,e,s,gg)){fW6.wxVkey=1
}
var cX6=_mz(z,'view',['bindtap',198,'class',1],[],e,s,gg)
var hY6=_v()
_(cX6,hY6)
if(_oz(z,200,e,s,gg)){hY6.wxVkey=1
}
hY6.wxXCkey=1
_(h75,cX6)
fW6.wxXCkey=1
}
h75.wxXCkey=1
_(lI5,c65)
}
else{lI5.wxVkey=3
}
lI5.wxXCkey=1
lI5.wxXCkey=3
}
else{o42.wxVkey=2
}
c22.wxXCkey=1
h32.wxXCkey=1
o42.wxXCkey=1
o42.wxXCkey=3
_(r,f12)
_ai(oZ2,x[52],e_,x[51],601,2)
var oZ6=_v()
_(r,oZ6)
var c16=_oz(z,202,e,s,gg)
var o26=_gd(x[51],c16,e_,d_)
if(o26){
var l36=_1z(z,201,e,s,gg) || {}
var cur_globalf=gg.f
oZ6.wxXCkey=3
o26(l36,l36,oZ6,gg)
gg.f=cur_globalf
}
else _w(c16,x[51],602,14)
oZ2.pop()
return r
}
e_[x[51]]={f:m48,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[53]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx12_50()
var t56=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var e66=_mz(z,'view',['bindlongpress',2,'bindtap',1,'bindtouchend',2,'bindtouchstart',3,'class',4,'hidden',5],[],e,s,gg)
var b76=_v()
_(e66,b76)
if(_oz(z,8,e,s,gg)){b76.wxVkey=1
}
var o86=_v()
_(e66,o86)
if(_oz(z,9,e,s,gg)){o86.wxVkey=1
var fA7=_v()
_(o86,fA7)
var cB7=function(oD7,hC7,cE7,gg){
var lG7=_v()
_(cE7,lG7)
if(_oz(z,13,oD7,hC7,gg)){lG7.wxVkey=1
}
lG7.wxXCkey=1
return cE7
}
fA7.wxXCkey=2
_2z(z,11,cB7,e,s,gg,fA7,'section','index','title')
}
else if(_oz(z,14,e,s,gg)){o86.wxVkey=2
}
var x96=_v()
_(e66,x96)
if(_oz(z,15,e,s,gg)){x96.wxVkey=1
}
var o06=_v()
_(e66,o06)
if(_oz(z,16,e,s,gg)){o06.wxVkey=1
}
b76.wxXCkey=1
o86.wxXCkey=1
x96.wxXCkey=1
o06.wxXCkey=1
_(t56,e66)
var aH7=_mz(z,'view',['class',17,'hidden',1],[],e,s,gg)
var tI7=_v()
_(aH7,tI7)
if(_oz(z,19,e,s,gg)){tI7.wxVkey=1
}
var eJ7=_v()
_(aH7,eJ7)
if(_oz(z,20,e,s,gg)){eJ7.wxVkey=1
}
var bK7=_v()
_(aH7,bK7)
var oL7=function(oN7,xM7,fO7,gg){
var hQ7=_v()
_(fO7,hQ7)
if(_oz(z,22,oN7,xM7,gg)){hQ7.wxVkey=1
}
hQ7.wxXCkey=1
return fO7
}
bK7.wxXCkey=2
_2z(z,21,oL7,e,s,gg,bK7,'item','index','')
tI7.wxXCkey=1
eJ7.wxXCkey=1
_(t56,aH7)
var oR7=_mz(z,'view',['class',23,'hidden',1],[],e,s,gg)
var cS7=_v()
_(oR7,cS7)
if(_oz(z,25,e,s,gg)){cS7.wxVkey=1
}
var oT7=_v()
_(oR7,oT7)
if(_oz(z,26,e,s,gg)){oT7.wxVkey=1
}
cS7.wxXCkey=1
oT7.wxXCkey=1
_(t56,oR7)
_(r,t56)
return r
}
e_[x[53]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx12_51()
var aV7=_n('view')
_rz(z,aV7,'class',0,e,s,gg)
var tW7=_v()
_(aV7,tW7)
if(_oz(z,1,e,s,gg)){tW7.wxVkey=1
}
var eX7=_v()
_(aV7,eX7)
if(_oz(z,2,e,s,gg)){eX7.wxVkey=1
}
tW7.wxXCkey=1
eX7.wxXCkey=1
_(r,aV7)
return r
}
e_[x[54]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx12_52()
var oZ7=_v()
_(r,oZ7)
if(_oz(z,0,e,s,gg)){oZ7.wxVkey=1
var x17=_n('view')
var o27=_v()
_(x17,o27)
if(_oz(z,1,e,s,gg)){o27.wxVkey=1
var f37=_n('view')
_rz(z,f37,'class',2,e,s,gg)
var c47=_v()
_(f37,c47)
if(_oz(z,3,e,s,gg)){c47.wxVkey=1
}
var h57=_v()
_(f37,h57)
if(_oz(z,4,e,s,gg)){h57.wxVkey=1
}
c47.wxXCkey=1
h57.wxXCkey=1
_(o27,f37)
}
else{o27.wxVkey=2
var o67=_n('view')
_rz(z,o67,'class',5,e,s,gg)
var c77=_v()
_(o67,c77)
if(_oz(z,6,e,s,gg)){c77.wxVkey=1
}
var o87=_v()
_(o67,o87)
if(_oz(z,7,e,s,gg)){o87.wxVkey=1
}
var l97=_v()
_(o67,l97)
if(_oz(z,8,e,s,gg)){l97.wxVkey=1
}
var tA8=_n('view')
_rz(z,tA8,'class',9,e,s,gg)
var eB8=_v()
_(tA8,eB8)
if(_oz(z,10,e,s,gg)){eB8.wxVkey=1
}
var bC8=_v()
_(tA8,bC8)
if(_oz(z,11,e,s,gg)){bC8.wxVkey=1
}
var oD8=_v()
_(tA8,oD8)
if(_oz(z,12,e,s,gg)){oD8.wxVkey=1
}
var xE8=_v()
_(tA8,xE8)
if(_oz(z,13,e,s,gg)){xE8.wxVkey=1
}
var oF8=_v()
_(tA8,oF8)
if(_oz(z,14,e,s,gg)){oF8.wxVkey=1
}
var fG8=_v()
_(tA8,fG8)
if(_oz(z,15,e,s,gg)){fG8.wxVkey=1
}
eB8.wxXCkey=1
bC8.wxXCkey=1
oD8.wxXCkey=1
xE8.wxXCkey=1
oF8.wxXCkey=1
fG8.wxXCkey=1
_(o67,tA8)
var a07=_v()
_(o67,a07)
if(_oz(z,16,e,s,gg)){a07.wxVkey=1
}
c77.wxXCkey=1
o87.wxXCkey=1
l97.wxXCkey=1
a07.wxXCkey=1
_(o27,o67)
}
o27.wxXCkey=1
_(oZ7,x17)
}
oZ7.wxXCkey=1
return r
}
e_[x[55]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx12_53()
return r
}
e_[x[56]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx12_54()
var oJ8=e_[x[57]].i
_ai(oJ8,x[58],e_,x[57],1,1)
var oL8=_n('view')
_rz(z,oL8,'class',0,e,s,gg)
var lM8=_v()
_(oL8,lM8)
if(_oz(z,1,e,s,gg)){lM8.wxVkey=1
}
var aN8=_v()
_(oL8,aN8)
var tO8=_oz(z,3,e,s,gg)
var eP8=_gd(x[57],tO8,e_,d_)
if(eP8){
var bQ8=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
aN8.wxXCkey=3
eP8(bQ8,bQ8,aN8,gg)
gg.f=cur_globalf
}
else _w(tO8,x[57],10,16)
lM8.wxXCkey=1
_(r,oL8)
var cK8=_v()
_(r,cK8)
if(_oz(z,4,e,s,gg)){cK8.wxVkey=1
}
_ai(oJ8,x[59],e_,x[57],21,2)
var oR8=_v()
_(r,oR8)
var xS8=_oz(z,6,e,s,gg)
var oT8=_gd(x[57],xS8,e_,d_)
if(oT8){
var fU8=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
oR8.wxXCkey=3
oT8(fU8,fU8,oR8,gg)
gg.f=cur_globalf
}
else _w(xS8,x[57],22,14)
cK8.wxXCkey=1
oJ8.pop()
oJ8.pop()
return r
}
e_[x[57]]={f:m53,j:[],i:[],ti:[x[58],x[59]],ic:[]}
d_[x[60]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx12_55()
var hW8=e_[x[60]].i
var oX8=_n('view')
_rz(z,oX8,'class',0,e,s,gg)
var cY8=_v()
_(oX8,cY8)
if(_oz(z,1,e,s,gg)){cY8.wxVkey=1
}
var oZ8=_v()
_(oX8,oZ8)
var l18=function(t38,a28,e48,gg){
var o68=_v()
_(e48,o68)
if(_oz(z,5,t38,a28,gg)){o68.wxVkey=1
}
o68.wxXCkey=1
return e48
}
oZ8.wxXCkey=2
_2z(z,4,l18,e,s,gg,oZ8,'pool','poolIdx','')
cY8.wxXCkey=1
_(r,oX8)
_ai(hW8,x[52],e_,x[60],81,2)
var x78=_v()
_(r,x78)
var o88=_oz(z,7,e,s,gg)
var f98=_gd(x[60],o88,e_,d_)
if(f98){
var c08=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
x78.wxXCkey=3
f98(c08,c08,x78,gg)
gg.f=cur_globalf
}
else _w(o88,x[60],82,14)
hW8.pop()
return r
}
e_[x[60]]={f:m54,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[61]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx12_56()
return r
}
e_[x[61]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[62]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx12_57()
var cC9=_mz(z,'AddressLayer',['addressList',0,'adid',1,'areaid',1,'bind:closeAddress',2,'bind:switchAddress',3,'showAddressLayerFlag',4],[],e,s,gg)
_(r,cC9)
return r
}
e_[x[62]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx12_58()
var lE9=e_[x[63]].i
var aF9=_n('view')
_rz(z,aF9,'class',0,e,s,gg)
var tG9=_v()
_(aF9,tG9)
var eH9=function(oJ9,bI9,xK9,gg){
var fM9=_v()
_(xK9,fM9)
if(_oz(z,5,oJ9,bI9,gg)){fM9.wxVkey=1
var cN9=_v()
_(fM9,cN9)
var hO9=function(cQ9,oP9,oR9,gg){
var aT9=_v()
_(oR9,aT9)
if(_oz(z,9,cQ9,oP9,gg)){aT9.wxVkey=1
}
aT9.wxXCkey=1
return oR9
}
cN9.wxXCkey=2
_2z(z,7,hO9,oJ9,bI9,gg,cN9,'item','idx','sku')
}
else{fM9.wxVkey=2
var tU9=_mz(z,'view',['bindtap',10,'class',1,'data-reid',2],[],oJ9,bI9,gg)
var eV9=_v()
_(tU9,eV9)
var bW9=function(xY9,oX9,oZ9,gg){
var c29=_v()
_(oZ9,c29)
if(_oz(z,14,xY9,oX9,gg)){c29.wxVkey=1
}
c29.wxXCkey=1
return oZ9
}
eV9.wxXCkey=2
_2z(z,13,bW9,oJ9,bI9,gg,eV9,'item','index','')
_(fM9,tU9)
}
fM9.wxXCkey=1
return xK9
}
tG9.wxXCkey=2
_2z(z,3,eH9,e,s,gg,tG9,'suit','pidx','pidx')
var h39=_mz(z,'Sku-layer',['bind:closeSkuLayer',15,'bind:confirmSkuChange',1,'cover',2,'isSuit',3,'price',4,'showSkuLayerFlag',5,'sku',6,'suitPackData',7],[],e,s,gg)
_(aF9,h39)
_(r,aF9)
_ai(lE9,x[52],e_,x[63],73,2)
var o49=_v()
_(r,o49)
var c59=_oz(z,24,e,s,gg)
var o69=_gd(x[63],c59,e_,d_)
if(o69){
var l79=_1z(z,23,e,s,gg) || {}
var cur_globalf=gg.f
o49.wxXCkey=3
o69(l79,l79,o49,gg)
gg.f=cur_globalf
}
else _w(c59,x[63],74,14)
lE9.pop()
return r
}
e_[x[63]]={f:m57,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[64]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx12_59()
var t99=_v()
_(r,t99)
var e09=function(oB0,bA0,xC0,gg){
var fE0=_v()
_(xC0,fE0)
if(_oz(z,2,oB0,bA0,gg)){fE0.wxVkey=1
}
var cF0=_v()
_(xC0,cF0)
var hG0=function(cI0,oH0,oJ0,gg){
var aL0=_v()
_(oJ0,aL0)
if(_oz(z,5,cI0,oH0,gg)){aL0.wxVkey=1
}
var tM0=_v()
_(oJ0,tM0)
var eN0=function(oP0,bO0,xQ0,gg){
var fS0=_v()
_(xQ0,fS0)
if(_oz(z,8,oP0,bO0,gg)){fS0.wxVkey=1
}
fS0.wxXCkey=1
return xQ0
}
tM0.wxXCkey=2
_2z(z,7,eN0,cI0,oH0,gg,tM0,'item','index','')
aL0.wxXCkey=1
return oJ0
}
cF0.wxXCkey=2
_2z(z,4,hG0,oB0,bA0,gg,cF0,'level2','index','')
fE0.wxXCkey=1
return xC0
}
t99.wxXCkey=2
_2z(z,1,e09,e,s,gg,t99,'level1','index','')
return r
}
e_[x[64]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[65]]={}
var m59=function(e,s,r,gg){
var z=gz$gwx12_60()
var hU0=e_[x[65]].i
_ai(hU0,x[66],e_,x[65],1,1)
var cW0=_n('view')
_rz(z,cW0,'class',0,e,s,gg)
var oX0=_v()
_(cW0,oX0)
if(_oz(z,1,e,s,gg)){oX0.wxVkey=1
}
var lY0=_v()
_(cW0,lY0)
var aZ0=_oz(z,3,e,s,gg)
var t10=_gd(x[65],aZ0,e_,d_)
if(t10){
var e20=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
lY0.wxXCkey=3
t10(e20,e20,lY0,gg)
gg.f=cur_globalf
}
else _w(aZ0,x[65],10,16)
oX0.wxXCkey=1
_(r,cW0)
var oV0=_v()
_(r,oV0)
if(_oz(z,4,e,s,gg)){oV0.wxVkey=1
}
_ai(hU0,x[52],e_,x[65],21,2)
var b30=_v()
_(r,b30)
var o40=_oz(z,6,e,s,gg)
var x50=_gd(x[65],o40,e_,d_)
if(x50){
var o60=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
b30.wxXCkey=3
x50(o60,o60,b30,gg)
gg.f=cur_globalf
}
else _w(o40,x[65],22,14)
oV0.wxXCkey=1
hU0.pop()
hU0.pop()
return r
}
e_[x[65]]={f:m59,j:[],i:[],ti:[x[66],x[52]],ic:[]}
d_[x[67]]={}
var m60=function(e,s,r,gg){
var z=gz$gwx12_61()
var c80=e_[x[67]].i
var cAAB=_n('view')
_rz(z,cAAB,'class',0,e,s,gg)
var oBAB=_v()
_(cAAB,oBAB)
if(_oz(z,1,e,s,gg)){oBAB.wxVkey=1
var aDAB=_mz(z,'notice-form',['autoBuy',2,'bind:formchange',1,'bind:selectedvalidatekeyChange',2],[],e,s,gg)
_(oBAB,aDAB)
}
var lCAB=_v()
_(cAAB,lCAB)
if(_oz(z,5,e,s,gg)){lCAB.wxVkey=1
}
oBAB.wxXCkey=1
oBAB.wxXCkey=3
lCAB.wxXCkey=1
_(r,cAAB)
var h90=_v()
_(r,h90)
if(_oz(z,6,e,s,gg)){h90.wxVkey=1
var tEAB=_mz(z,'notice-dialog',['bind:closeMod',7,'title',1],[],e,s,gg)
_(h90,tEAB)
}
var eFAB=_n('subscribe-guider')
_rz(z,eFAB,'props',9,e,s,gg)
_(r,eFAB)
_ai(c80,x[52],e_,x[67],26,2)
var bGAB=_v()
_(r,bGAB)
var oHAB=_oz(z,11,e,s,gg)
var xIAB=_gd(x[67],oHAB,e_,d_)
if(xIAB){
var oJAB=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
bGAB.wxXCkey=3
xIAB(oJAB,oJAB,bGAB,gg)
gg.f=cur_globalf
}
else _w(oHAB,x[67],27,14)
var o00=_v()
_(r,o00)
if(_oz(z,12,e,s,gg)){o00.wxVkey=1
var fKAB=_mz(z,'Wq-dialog',['bind:cancel',13,'bind:confirm',1,'dialogOpt',2,'id',3,'ref',4],[],e,s,gg)
_(o00,fKAB)
}
h90.wxXCkey=1
h90.wxXCkey=3
o00.wxXCkey=1
o00.wxXCkey=3
c80.pop()
return r
}
e_[x[67]]={f:m60,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[68]]={}
var m61=function(e,s,r,gg){
var z=gz$gwx12_62()
var hMAB=e_[x[68]].i
var oNAB=_n('view')
_rz(z,oNAB,'class',0,e,s,gg)
var oPAB=_n('view')
_rz(z,oPAB,'class',1,e,s,gg)
var lQAB=_n('view')
_rz(z,lQAB,'class',2,e,s,gg)
var aRAB=_mz(z,'view',['bind:tap',3,'class',1],[],e,s,gg)
var tSAB=_v()
_(aRAB,tSAB)
if(_oz(z,5,e,s,gg)){tSAB.wxVkey=1
}
tSAB.wxXCkey=1
_(lQAB,aRAB)
var eTAB=_mz(z,'Item-price',['extraPriceFlag',6,'info',1,'showGuide',2],[],e,s,gg)
_(lQAB,eTAB)
_(oPAB,lQAB)
var bUAB=_n('view')
_rz(z,bUAB,'class',9,e,s,gg)
var oVAB=_v()
_(bUAB,oVAB)
if(_oz(z,10,e,s,gg)){oVAB.wxVkey=1
var oXAB=_mz(z,'view',['bind:tap',11,'class',1],[],e,s,gg)
var fYAB=_v()
_(oXAB,fYAB)
var cZAB=function(o2AB,h1AB,c3AB,gg){
var l5AB=_v()
_(c3AB,l5AB)
if(_oz(z,15,o2AB,h1AB,gg)){l5AB.wxVkey=1
}
l5AB.wxXCkey=1
return c3AB
}
fYAB.wxXCkey=2
_2z(z,13,cZAB,e,s,gg,fYAB,'item','index','{{ item.addressId }}')
var a6AB=_v()
_(oXAB,a6AB)
var t7AB=function(b9AB,e8AB,o0AB,gg){
var oBBB=_v()
_(o0AB,oBBB)
if(_oz(z,18,b9AB,e8AB,gg)){oBBB.wxVkey=1
}
oBBB.wxXCkey=1
return o0AB
}
a6AB.wxXCkey=2
_2z(z,16,t7AB,e,s,gg,a6AB,'item','index','{{ item.addressId }}')
var fCBB=_v()
_(oXAB,fCBB)
var cDBB=function(oFBB,hEBB,cGBB,gg){
var lIBB=_v()
_(cGBB,lIBB)
if(_oz(z,21,oFBB,hEBB,gg)){lIBB.wxVkey=1
}
lIBB.wxXCkey=1
return cGBB
}
fCBB.wxXCkey=2
_2z(z,19,cDBB,e,s,gg,fCBB,'item','index','{{ item.addressId }}')
_(oVAB,oXAB)
}
var xWAB=_v()
_(bUAB,xWAB)
if(_oz(z,22,e,s,gg)){xWAB.wxVkey=1
}
oVAB.wxXCkey=1
xWAB.wxXCkey=1
_(oPAB,bUAB)
_(oNAB,oPAB)
var cOAB=_v()
_(oNAB,cOAB)
if(_oz(z,23,e,s,gg)){cOAB.wxVkey=1
}
else{cOAB.wxVkey=2
var aJBB=_v()
_(cOAB,aJBB)
if(_oz(z,24,e,s,gg)){aJBB.wxVkey=1
var eLBB=_v()
_(aJBB,eLBB)
var bMBB=function(xOBB,oNBB,oPBB,gg){
var cRBB=_mz(z,'view',['bindtap',26,'class',1,'data-addr',2,'data-id',3,'data-index',4,'data-locationid',5,'data-name',6,'data-phone',7,'data-price',8,'key',9],[],xOBB,oNBB,gg)
var oTBB=_n('view')
_rz(z,oTBB,'class',36,xOBB,oNBB,gg)
var cUBB=_v()
_(oTBB,cUBB)
if(_oz(z,37,xOBB,oNBB,gg)){cUBB.wxVkey=1
}
var oVBB=_v()
_(oTBB,oVBB)
if(_oz(z,38,xOBB,oNBB,gg)){oVBB.wxVkey=1
}
cUBB.wxXCkey=1
oVBB.wxXCkey=1
_(cRBB,oTBB)
var hSBB=_v()
_(cRBB,hSBB)
if(_oz(z,39,xOBB,oNBB,gg)){hSBB.wxVkey=1
}
hSBB.wxXCkey=1
_(oPBB,cRBB)
return oPBB
}
eLBB.wxXCkey=2
_2z(z,25,bMBB,e,s,gg,eLBB,'item','index','')
}
var tKBB=_v()
_(cOAB,tKBB)
if(_oz(z,40,e,s,gg)){tKBB.wxVkey=1
}
aJBB.wxXCkey=1
tKBB.wxXCkey=1
}
cOAB.wxXCkey=1
_(r,oNAB)
var lWBB=_n('view')
_rz(z,lWBB,'class',41,e,s,gg)
var aXBB=_v()
_(lWBB,aXBB)
if(_oz(z,42,e,s,gg)){aXBB.wxVkey=1
var tYBB=_v()
_(aXBB,tYBB)
if(_oz(z,43,e,s,gg)){tYBB.wxVkey=1
}
tYBB.wxXCkey=1
}
else if(_oz(z,44,e,s,gg)){aXBB.wxVkey=2
}
else{aXBB.wxVkey=3
}
aXBB.wxXCkey=1
_(r,lWBB)
var eZBB=_mz(z,'Sku-layer',['bind:closeSkuLayer',45,'bind:confirmSkuChange',1,'cover',2,'othersData',3,'price',4,'showNumController',5,'showSkuLayerFlag',6,'sku',7,'totalNum',8],[],e,s,gg)
_(r,eZBB)
_ai(hMAB,x[52],e_,x[68],154,2)
var b1BB=_v()
_(r,b1BB)
var o2BB=_oz(z,55,e,s,gg)
var x3BB=_gd(x[68],o2BB,e_,d_)
if(x3BB){
var o4BB=_1z(z,54,e,s,gg) || {}
var cur_globalf=gg.f
b1BB.wxXCkey=3
x3BB(o4BB,o4BB,b1BB,gg)
gg.f=cur_globalf
}
else _w(o2BB,x[68],155,14)
hMAB.pop()
return r
}
e_[x[68]]={f:m61,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[69]]={}
var m62=function(e,s,r,gg){
var z=gz$gwx12_63()
var c6BB=e_[x[69]].i
var h7BB=_n('view')
_rz(z,h7BB,'class',0,e,s,gg)
var o8BB=_v()
_(h7BB,o8BB)
if(_oz(z,1,e,s,gg)){o8BB.wxVkey=1
}
var c9BB=_v()
_(h7BB,c9BB)
if(_oz(z,2,e,s,gg)){c9BB.wxVkey=1
}
o8BB.wxXCkey=1
c9BB.wxXCkey=1
_(r,h7BB)
_ai(c6BB,x[52],e_,x[69],27,2)
var o0BB=_v()
_(r,o0BB)
var lACB=_oz(z,4,e,s,gg)
var aBCB=_gd(x[69],lACB,e_,d_)
if(aBCB){
var tCCB=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
o0BB.wxXCkey=3
aBCB(tCCB,tCCB,o0BB,gg)
gg.f=cur_globalf
}
else _w(lACB,x[69],28,14)
c6BB.pop()
return r
}
e_[x[69]]={f:m62,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[70]]={}
var m63=function(e,s,r,gg){
var z=gz$gwx12_64()
var bECB=_mz(z,'gift-pool',['flag',0,'goods',1,'poolList',1],[],e,s,gg)
_(r,bECB)
return r
}
e_[x[70]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[71]]={}
var m64=function(e,s,r,gg){
var z=gz$gwx12_65()
var xGCB=_v()
_(r,xGCB)
var oHCB=function(cJCB,fICB,hKCB,gg){
var cMCB=_v()
_(hKCB,cMCB)
if(_oz(z,2,cJCB,fICB,gg)){cMCB.wxVkey=1
}
cMCB.wxXCkey=1
return hKCB
}
xGCB.wxXCkey=2
_2z(z,0,oHCB,e,s,gg,xGCB,'item','index','*this')
return r
}
e_[x[71]]={f:m64,j:[],i:[],ti:[],ic:[]}
d_[x[72]]={}
var m65=function(e,s,r,gg){
var z=gz$gwx12_66()
var lOCB=e_[x[72]].i
var eRCB=_n('view')
_rz(z,eRCB,'class',0,e,s,gg)
var bSCB=_v()
_(eRCB,bSCB)
if(_oz(z,1,e,s,gg)){bSCB.wxVkey=1
var xUCB=_mz(z,'notice-form',['autoBuy',2,'bind:formchange',1,'bind:selectedvalidatekeyChange',2],[],e,s,gg)
_(bSCB,xUCB)
}
var oTCB=_v()
_(eRCB,oTCB)
if(_oz(z,5,e,s,gg)){oTCB.wxVkey=1
}
bSCB.wxXCkey=1
bSCB.wxXCkey=3
oTCB.wxXCkey=1
_(r,eRCB)
var aPCB=_v()
_(r,aPCB)
if(_oz(z,6,e,s,gg)){aPCB.wxVkey=1
var oVCB=_mz(z,'notice-dialog',['bind:closeMod',7,'title',1],[],e,s,gg)
_(aPCB,oVCB)
}
var fWCB=_n('subscribe-guider')
_rz(z,fWCB,'props',9,e,s,gg)
_(r,fWCB)
_ai(lOCB,x[52],e_,x[72],39,2)
var cXCB=_v()
_(r,cXCB)
var hYCB=_oz(z,11,e,s,gg)
var oZCB=_gd(x[72],hYCB,e_,d_)
if(oZCB){
var c1CB=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
cXCB.wxXCkey=3
oZCB(c1CB,c1CB,cXCB,gg)
gg.f=cur_globalf
}
else _w(hYCB,x[72],40,14)
var tQCB=_v()
_(r,tQCB)
if(_oz(z,12,e,s,gg)){tQCB.wxVkey=1
var o2CB=_mz(z,'Wq-dialog',['bind:cancel',13,'bind:confirm',1,'dialogOpt',2,'id',3,'ref',4],[],e,s,gg)
_(tQCB,o2CB)
}
aPCB.wxXCkey=1
aPCB.wxXCkey=3
tQCB.wxXCkey=1
tQCB.wxXCkey=3
lOCB.pop()
return r
}
e_[x[72]]={f:m65,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[73]]={}
var m66=function(e,s,r,gg){
var z=gz$gwx12_67()
var a4CB=_mz(z,'suit',['entries',0,'packList',1],[],e,s,gg)
_(r,a4CB)
return r
}
e_[x[73]]={f:m66,j:[],i:[],ti:[],ic:[]}
d_[x[74]]={}
var m67=function(e,s,r,gg){
var z=gz$gwx12_68()
var e6CB=e_[x[74]].i
var b7CB=_v()
_(r,b7CB)
if(_oz(z,0,e,s,gg)){b7CB.wxVkey=1
}
var o8CB=_v()
_(r,o8CB)
if(_oz(z,1,e,s,gg)){o8CB.wxVkey=1
var o0CB=_mz(z,'notice-dialog',['bind:closeMod',2,'title',1],[],e,s,gg)
_(o8CB,o0CB)
}
var fADB=_n('subscribe-guider')
_rz(z,fADB,'props',4,e,s,gg)
_(r,fADB)
_ai(e6CB,x[52],e_,x[74],23,2)
var cBDB=_v()
_(r,cBDB)
var hCDB=_oz(z,6,e,s,gg)
var oDDB=_gd(x[74],hCDB,e_,d_)
if(oDDB){
var cEDB=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
cBDB.wxXCkey=3
oDDB(cEDB,cEDB,cBDB,gg)
gg.f=cur_globalf
}
else _w(hCDB,x[74],24,14)
var x9CB=_v()
_(r,x9CB)
if(_oz(z,7,e,s,gg)){x9CB.wxVkey=1
var oFDB=_mz(z,'Wq-dialog',['bind:cancel',8,'bind:confirm',1,'dialogOpt',2,'id',3,'ref',4],[],e,s,gg)
_(x9CB,oFDB)
}
b7CB.wxXCkey=1
o8CB.wxXCkey=1
o8CB.wxXCkey=3
x9CB.wxXCkey=1
x9CB.wxXCkey=3
e6CB.pop()
return r
}
e_[x[74]]={f:m67,j:[],i:[],ti:[x[52]],ic:[]}
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
	__wxAppCode__['pages/item/detail/detail.json'] = {"navigationBarTitleText":"商品详情","usingComponents":{"skeleton-screen":"../itemBase/components/skeletonScreen/skeletonScreen","Wq-dialog":"../itemBase/components/wqDialog/wqDialog","Navbar":"../itemBase/components/navbar/navbar","Pgapp-Launch":"/components/launch-pgapp/index","Jdapp-Launch":"/components/launch-jdapp/index","App-launch":"../itemBase/components/appLaunchBtn/appLaunchBtn","App-launch-bar":"../itemBase/components/appLaunchBar/appLaunchBar","Focus-slide":"../itemBase/components/focusSlide/focusSlide","Family-list":"../itemBase/components/familyList/familyList","Favour":"../itemBase/components/favour/favour","Item-price":"../itemBase/components/itemPrice/itemPrice","Item-price-return":"../itemBase/components/itemPriceReturn/itemPriceReturn","Kernel-props":"../itemBase/components/kernelProps/kernelProps","Activities":"../itemBase/components/activities/activities","Discount":"../itemBase/components/discount/discount","Accessories":"../itemBase/components/accessories/accessories","Item-shop":"../itemBase/components/itemShop/itemShop","Guess-you-like":"../itemBase/components/guessYouLike/guessYouLike","User-address":"../itemBase/components/address/address","Comment":"../itemBase/components/comment/comment","Answers":"../itemBase/components/answers/answers","Purchase-tip":"../itemBase/components/purchaseTip/purchaseTip","Bottom-btn":"../itemBase/components/bottomBtn/bottomBtn","Bottom-btn-pg":"../itemBase/components/bottomBtnPg/bottomBtnPg","Specific":"../itemBase/components/specific/specific","Business-entry":"../itemBase/components/businessEntry/businessEntry","Garment-color":"../itemBase/components/garmentColor/garmentColor","Banner-atmosphere":"../itemBase/components/bannerAtmosphere/bannerAtmosphere","Quick-nav":"../../../components/quick-nav/quick-nav","Suyuan-video":"../itemBase/components/suyuanVideo/suyuanVideo","Goods-desc":"../itemBase/components/goodsDesc/goodsDesc","Card-share":"../itemBase/components/cardShare/cardShare","Offline-store":"../itemBase/components/offlineStore/offlineStore","Return-wxapp":"/components/return-wxapp/index","Banner-atmosphere-pg":"../itemBase/components/bannerAtmospherePg/bannerAtmospherePg","Discount-pg":"../itemBase/components/discountPg/discountPg","Jxapp-exclusive-layer":"../itemBase/components/jxappExclusiveLayer/jxappExclusiveLayer","PgRecommendTuan":"../itemBase/components/pgRecommendTuan/pgRecommendTuan","Card-share-pg":"../itemBase/components/cardSharePg/cardSharePg","Share-layer-pg":"../itemBase/components/shareLayerPg/shareLayerPg","Popup-layer":"../itemBase/components/popupLayer/popupLayer","Discount-layer":"../itemBase/components/discountLayer/discountLayer","Discount-layer-pg":"../itemBase/components/discountLayerPg/discountLayerPg","Sku-layer":"../itemBase/components/skuLayer/skuLayer","Share-layer":"../itemBase/components/shareLayer/shareLayer","Address-layer":"../../../components/address-layer/index","Kernel-props-layer":"../itemBase/components/kernelPropsLayer/kernelPropsLayer","Search-bar":"/components/search-bar/index","Nav-bar":"../../../components/nav-bar/nav-bar","Daojia-recommend":"../itemBase/components/daojiaRecommend/daojiaRecommend","Bottom-widget":"/components/bottom-widget/bottom-widget","Jxvip-buy":"../itemBase/components/jxvip-buy/index","login-layer":"/components/login-layer/login-layer","Page-comment":"../itemBase/components/pageComment/pageComment"},"navigationStyle":"custom"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/detail/detail.wxml'] = [$gwx12, './pages/item/detail/detail.wxml'];else __wxAppCode__['pages/item/detail/detail.wxml'] = $gwx12( './pages/item/detail/detail.wxml' );
		__wxAppCode__['pages/item/itemBase/components/accessories/accessories.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/accessories/accessories.wxml'] = [$gwx12, './pages/item/itemBase/components/accessories/accessories.wxml'];else __wxAppCode__['pages/item/itemBase/components/accessories/accessories.wxml'] = $gwx12( './pages/item/itemBase/components/accessories/accessories.wxml' );
		__wxAppCode__['pages/item/itemBase/components/actionSheet/actionSheet.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/actionSheet/actionSheet.wxml'] = [$gwx12, './pages/item/itemBase/components/actionSheet/actionSheet.wxml'];else __wxAppCode__['pages/item/itemBase/components/actionSheet/actionSheet.wxml'] = $gwx12( './pages/item/itemBase/components/actionSheet/actionSheet.wxml' );
		__wxAppCode__['pages/item/itemBase/components/activities/activities.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/activities/activities.wxml'] = [$gwx12, './pages/item/itemBase/components/activities/activities.wxml'];else __wxAppCode__['pages/item/itemBase/components/activities/activities.wxml'] = $gwx12( './pages/item/itemBase/components/activities/activities.wxml' );
		__wxAppCode__['pages/item/itemBase/components/addCartPg/addCartPg.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/addCartPg/addCartPg.wxml'] = [$gwx12, './pages/item/itemBase/components/addCartPg/addCartPg.wxml'];else __wxAppCode__['pages/item/itemBase/components/addCartPg/addCartPg.wxml'] = $gwx12( './pages/item/itemBase/components/addCartPg/addCartPg.wxml' );
		__wxAppCode__['pages/item/itemBase/components/address/address.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/address/address.wxml'] = [$gwx12, './pages/item/itemBase/components/address/address.wxml'];else __wxAppCode__['pages/item/itemBase/components/address/address.wxml'] = $gwx12( './pages/item/itemBase/components/address/address.wxml' );
		__wxAppCode__['pages/item/itemBase/components/answers/answers.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/answers/answers.wxml'] = [$gwx12, './pages/item/itemBase/components/answers/answers.wxml'];else __wxAppCode__['pages/item/itemBase/components/answers/answers.wxml'] = $gwx12( './pages/item/itemBase/components/answers/answers.wxml' );
		__wxAppCode__['pages/item/itemBase/components/appLaunchBar/appLaunchBar.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/appLaunchBar/appLaunchBar.wxml'] = [$gwx12, './pages/item/itemBase/components/appLaunchBar/appLaunchBar.wxml'];else __wxAppCode__['pages/item/itemBase/components/appLaunchBar/appLaunchBar.wxml'] = $gwx12( './pages/item/itemBase/components/appLaunchBar/appLaunchBar.wxml' );
		__wxAppCode__['pages/item/itemBase/components/appLaunchBtn/appLaunchBtn.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/appLaunchBtn/appLaunchBtn.wxml'] = [$gwx12, './pages/item/itemBase/components/appLaunchBtn/appLaunchBtn.wxml'];else __wxAppCode__['pages/item/itemBase/components/appLaunchBtn/appLaunchBtn.wxml'] = $gwx12( './pages/item/itemBase/components/appLaunchBtn/appLaunchBtn.wxml' );
		__wxAppCode__['pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.wxml'] = [$gwx12, './pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.wxml'];else __wxAppCode__['pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.wxml'] = $gwx12( './pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.wxml' );
		__wxAppCode__['pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.wxml'] = [$gwx12, './pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.wxml'];else __wxAppCode__['pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.wxml'] = $gwx12( './pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.wxml' );
		__wxAppCode__['pages/item/itemBase/components/bottomBtn/bottomBtn.json'] = {"component":true,"usingComponents":{"Custom-service":"../customService/customService"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/bottomBtn/bottomBtn.wxml'] = [$gwx12, './pages/item/itemBase/components/bottomBtn/bottomBtn.wxml'];else __wxAppCode__['pages/item/itemBase/components/bottomBtn/bottomBtn.wxml'] = $gwx12( './pages/item/itemBase/components/bottomBtn/bottomBtn.wxml' );
		__wxAppCode__['pages/item/itemBase/components/bottomBtnPg/bottomBtnPg.json'] = {"component":true,"usingComponents":{"Custom-service":"../customService/customService","Add-cart-pg":"../addCartPg/addCartPg"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/bottomBtnPg/bottomBtnPg.wxml'] = [$gwx12, './pages/item/itemBase/components/bottomBtnPg/bottomBtnPg.wxml'];else __wxAppCode__['pages/item/itemBase/components/bottomBtnPg/bottomBtnPg.wxml'] = $gwx12( './pages/item/itemBase/components/bottomBtnPg/bottomBtnPg.wxml' );
		__wxAppCode__['pages/item/itemBase/components/businessEntry/businessEntry.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/businessEntry/businessEntry.wxml'] = [$gwx12, './pages/item/itemBase/components/businessEntry/businessEntry.wxml'];else __wxAppCode__['pages/item/itemBase/components/businessEntry/businessEntry.wxml'] = $gwx12( './pages/item/itemBase/components/businessEntry/businessEntry.wxml' );
		__wxAppCode__['pages/item/itemBase/components/cardShare/cardShare.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/cardShare/cardShare.wxml'] = [$gwx12, './pages/item/itemBase/components/cardShare/cardShare.wxml'];else __wxAppCode__['pages/item/itemBase/components/cardShare/cardShare.wxml'] = $gwx12( './pages/item/itemBase/components/cardShare/cardShare.wxml' );
		__wxAppCode__['pages/item/itemBase/components/cardSharePg/cardSharePg.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/cardSharePg/cardSharePg.wxml'] = [$gwx12, './pages/item/itemBase/components/cardSharePg/cardSharePg.wxml'];else __wxAppCode__['pages/item/itemBase/components/cardSharePg/cardSharePg.wxml'] = $gwx12( './pages/item/itemBase/components/cardSharePg/cardSharePg.wxml' );
		__wxAppCode__['pages/item/itemBase/components/comment/comment.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/comment/comment.wxml'] = [$gwx12, './pages/item/itemBase/components/comment/comment.wxml'];else __wxAppCode__['pages/item/itemBase/components/comment/comment.wxml'] = $gwx12( './pages/item/itemBase/components/comment/comment.wxml' );
		__wxAppCode__['pages/item/itemBase/components/commentItems/commentItems.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/commentItems/commentItems.wxml'] = [$gwx12, './pages/item/itemBase/components/commentItems/commentItems.wxml'];else __wxAppCode__['pages/item/itemBase/components/commentItems/commentItems.wxml'] = $gwx12( './pages/item/itemBase/components/commentItems/commentItems.wxml' );
		__wxAppCode__['pages/item/itemBase/components/customService/customService.json'] = {"component":true,"usingComponents":{"Action-sheet":"../actionSheet/actionSheet"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/customService/customService.wxml'] = [$gwx12, './pages/item/itemBase/components/customService/customService.wxml'];else __wxAppCode__['pages/item/itemBase/components/customService/customService.wxml'] = $gwx12( './pages/item/itemBase/components/customService/customService.wxml' );
		__wxAppCode__['pages/item/itemBase/components/daojiaRecommend/daojiaRecommend.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/daojiaRecommend/daojiaRecommend.wxml'] = [$gwx12, './pages/item/itemBase/components/daojiaRecommend/daojiaRecommend.wxml'];else __wxAppCode__['pages/item/itemBase/components/daojiaRecommend/daojiaRecommend.wxml'] = $gwx12( './pages/item/itemBase/components/daojiaRecommend/daojiaRecommend.wxml' );
		__wxAppCode__['pages/item/itemBase/components/discount/discount.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/discount/discount.wxml'] = [$gwx12, './pages/item/itemBase/components/discount/discount.wxml'];else __wxAppCode__['pages/item/itemBase/components/discount/discount.wxml'] = $gwx12( './pages/item/itemBase/components/discount/discount.wxml' );
		__wxAppCode__['pages/item/itemBase/components/discountLayer/discountLayer.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/discountLayer/discountLayer.wxml'] = [$gwx12, './pages/item/itemBase/components/discountLayer/discountLayer.wxml'];else __wxAppCode__['pages/item/itemBase/components/discountLayer/discountLayer.wxml'] = $gwx12( './pages/item/itemBase/components/discountLayer/discountLayer.wxml' );
		__wxAppCode__['pages/item/itemBase/components/discountLayerPg/discountLayerPg.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/discountLayerPg/discountLayerPg.wxml'] = [$gwx12, './pages/item/itemBase/components/discountLayerPg/discountLayerPg.wxml'];else __wxAppCode__['pages/item/itemBase/components/discountLayerPg/discountLayerPg.wxml'] = $gwx12( './pages/item/itemBase/components/discountLayerPg/discountLayerPg.wxml' );
		__wxAppCode__['pages/item/itemBase/components/discountPg/discountPg.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/discountPg/discountPg.wxml'] = [$gwx12, './pages/item/itemBase/components/discountPg/discountPg.wxml'];else __wxAppCode__['pages/item/itemBase/components/discountPg/discountPg.wxml'] = $gwx12( './pages/item/itemBase/components/discountPg/discountPg.wxml' );
		__wxAppCode__['pages/item/itemBase/components/familyList/familyList.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/familyList/familyList.wxml'] = [$gwx12, './pages/item/itemBase/components/familyList/familyList.wxml'];else __wxAppCode__['pages/item/itemBase/components/familyList/familyList.wxml'] = $gwx12( './pages/item/itemBase/components/familyList/familyList.wxml' );
		__wxAppCode__['pages/item/itemBase/components/favour/favour.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/favour/favour.wxml'] = [$gwx12, './pages/item/itemBase/components/favour/favour.wxml'];else __wxAppCode__['pages/item/itemBase/components/favour/favour.wxml'] = $gwx12( './pages/item/itemBase/components/favour/favour.wxml' );
		__wxAppCode__['pages/item/itemBase/components/focusSlide/focusSlide.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/focusSlide/focusSlide.wxml'] = [$gwx12, './pages/item/itemBase/components/focusSlide/focusSlide.wxml'];else __wxAppCode__['pages/item/itemBase/components/focusSlide/focusSlide.wxml'] = $gwx12( './pages/item/itemBase/components/focusSlide/focusSlide.wxml' );
		__wxAppCode__['pages/item/itemBase/components/garmentColor/garmentColor.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/garmentColor/garmentColor.wxml'] = [$gwx12, './pages/item/itemBase/components/garmentColor/garmentColor.wxml'];else __wxAppCode__['pages/item/itemBase/components/garmentColor/garmentColor.wxml'] = $gwx12( './pages/item/itemBase/components/garmentColor/garmentColor.wxml' );
		__wxAppCode__['pages/item/itemBase/components/goodsDesc/goodsDesc.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/goodsDesc/goodsDesc.wxml'] = [$gwx12, './pages/item/itemBase/components/goodsDesc/goodsDesc.wxml'];else __wxAppCode__['pages/item/itemBase/components/goodsDesc/goodsDesc.wxml'] = $gwx12( './pages/item/itemBase/components/goodsDesc/goodsDesc.wxml' );
		__wxAppCode__['pages/item/itemBase/components/guessYouLike/guessYouLike.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/guessYouLike/guessYouLike.wxml'] = [$gwx12, './pages/item/itemBase/components/guessYouLike/guessYouLike.wxml'];else __wxAppCode__['pages/item/itemBase/components/guessYouLike/guessYouLike.wxml'] = $gwx12( './pages/item/itemBase/components/guessYouLike/guessYouLike.wxml' );
		__wxAppCode__['pages/item/itemBase/components/itemPrice/itemPrice.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/itemPrice/itemPrice.wxml'] = [$gwx12, './pages/item/itemBase/components/itemPrice/itemPrice.wxml'];else __wxAppCode__['pages/item/itemBase/components/itemPrice/itemPrice.wxml'] = $gwx12( './pages/item/itemBase/components/itemPrice/itemPrice.wxml' );
		__wxAppCode__['pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.wxml'] = [$gwx12, './pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.wxml'];else __wxAppCode__['pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.wxml'] = $gwx12( './pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.wxml' );
		__wxAppCode__['pages/item/itemBase/components/itemShop/itemShop.json'] = {"component":true,"usingComponents":{"modal-gift":"../modalGift/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/itemShop/itemShop.wxml'] = [$gwx12, './pages/item/itemBase/components/itemShop/itemShop.wxml'];else __wxAppCode__['pages/item/itemBase/components/itemShop/itemShop.wxml'] = $gwx12( './pages/item/itemBase/components/itemShop/itemShop.wxml' );
		__wxAppCode__['pages/item/itemBase/components/jxappExclusiveLayer/jxappExclusiveLayer.json'] = {"component":true,"usingComponents":{"launch-pgapp":"/components/launch-pgapp/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/jxappExclusiveLayer/jxappExclusiveLayer.wxml'] = [$gwx12, './pages/item/itemBase/components/jxappExclusiveLayer/jxappExclusiveLayer.wxml'];else __wxAppCode__['pages/item/itemBase/components/jxappExclusiveLayer/jxappExclusiveLayer.wxml'] = $gwx12( './pages/item/itemBase/components/jxappExclusiveLayer/jxappExclusiveLayer.wxml' );
		__wxAppCode__['pages/item/itemBase/components/jxvip-buy/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/jxvip-buy/index.wxml'] = [$gwx12, './pages/item/itemBase/components/jxvip-buy/index.wxml'];else __wxAppCode__['pages/item/itemBase/components/jxvip-buy/index.wxml'] = $gwx12( './pages/item/itemBase/components/jxvip-buy/index.wxml' );
		__wxAppCode__['pages/item/itemBase/components/kernelProps/kernelProps.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/kernelProps/kernelProps.wxml'] = [$gwx12, './pages/item/itemBase/components/kernelProps/kernelProps.wxml'];else __wxAppCode__['pages/item/itemBase/components/kernelProps/kernelProps.wxml'] = $gwx12( './pages/item/itemBase/components/kernelProps/kernelProps.wxml' );
		__wxAppCode__['pages/item/itemBase/components/kernelPropsLayer/kernelPropsLayer.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/kernelPropsLayer/kernelPropsLayer.wxml'] = [$gwx12, './pages/item/itemBase/components/kernelPropsLayer/kernelPropsLayer.wxml'];else __wxAppCode__['pages/item/itemBase/components/kernelPropsLayer/kernelPropsLayer.wxml'] = $gwx12( './pages/item/itemBase/components/kernelPropsLayer/kernelPropsLayer.wxml' );
		__wxAppCode__['pages/item/itemBase/components/modalGift/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/modalGift/index.wxml'] = [$gwx12, './pages/item/itemBase/components/modalGift/index.wxml'];else __wxAppCode__['pages/item/itemBase/components/modalGift/index.wxml'] = $gwx12( './pages/item/itemBase/components/modalGift/index.wxml' );
		__wxAppCode__['pages/item/itemBase/components/navbar/navbar.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/navbar/navbar.wxml'] = [$gwx12, './pages/item/itemBase/components/navbar/navbar.wxml'];else __wxAppCode__['pages/item/itemBase/components/navbar/navbar.wxml'] = $gwx12( './pages/item/itemBase/components/navbar/navbar.wxml' );
		__wxAppCode__['pages/item/itemBase/components/offlineStore/offlineStore.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/offlineStore/offlineStore.wxml'] = [$gwx12, './pages/item/itemBase/components/offlineStore/offlineStore.wxml'];else __wxAppCode__['pages/item/itemBase/components/offlineStore/offlineStore.wxml'] = $gwx12( './pages/item/itemBase/components/offlineStore/offlineStore.wxml' );
		__wxAppCode__['pages/item/itemBase/components/pageComment/pageComment.json'] = {"component":true,"usingComponents":{"comment-items":"../commentItems/commentItems"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/pageComment/pageComment.wxml'] = [$gwx12, './pages/item/itemBase/components/pageComment/pageComment.wxml'];else __wxAppCode__['pages/item/itemBase/components/pageComment/pageComment.wxml'] = $gwx12( './pages/item/itemBase/components/pageComment/pageComment.wxml' );
		__wxAppCode__['pages/item/itemBase/components/pgRecommendTuan/pgRecommendTuan.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/pgRecommendTuan/pgRecommendTuan.wxml'] = [$gwx12, './pages/item/itemBase/components/pgRecommendTuan/pgRecommendTuan.wxml'];else __wxAppCode__['pages/item/itemBase/components/pgRecommendTuan/pgRecommendTuan.wxml'] = $gwx12( './pages/item/itemBase/components/pgRecommendTuan/pgRecommendTuan.wxml' );
		__wxAppCode__['pages/item/itemBase/components/popupLayer/popupLayer.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/popupLayer/popupLayer.wxml'] = [$gwx12, './pages/item/itemBase/components/popupLayer/popupLayer.wxml'];else __wxAppCode__['pages/item/itemBase/components/popupLayer/popupLayer.wxml'] = $gwx12( './pages/item/itemBase/components/popupLayer/popupLayer.wxml' );
		__wxAppCode__['pages/item/itemBase/components/purchaseTip/purchaseTip.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/purchaseTip/purchaseTip.wxml'] = [$gwx12, './pages/item/itemBase/components/purchaseTip/purchaseTip.wxml'];else __wxAppCode__['pages/item/itemBase/components/purchaseTip/purchaseTip.wxml'] = $gwx12( './pages/item/itemBase/components/purchaseTip/purchaseTip.wxml' );
		__wxAppCode__['pages/item/itemBase/components/shareLayer/shareLayer.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/shareLayer/shareLayer.wxml'] = [$gwx12, './pages/item/itemBase/components/shareLayer/shareLayer.wxml'];else __wxAppCode__['pages/item/itemBase/components/shareLayer/shareLayer.wxml'] = $gwx12( './pages/item/itemBase/components/shareLayer/shareLayer.wxml' );
		__wxAppCode__['pages/item/itemBase/components/shareLayerPg/shareLayerPg.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/shareLayerPg/shareLayerPg.wxml'] = [$gwx12, './pages/item/itemBase/components/shareLayerPg/shareLayerPg.wxml'];else __wxAppCode__['pages/item/itemBase/components/shareLayerPg/shareLayerPg.wxml'] = $gwx12( './pages/item/itemBase/components/shareLayerPg/shareLayerPg.wxml' );
		__wxAppCode__['pages/item/itemBase/components/skeletonScreen/skeletonScreen.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/skeletonScreen/skeletonScreen.wxml'] = [$gwx12, './pages/item/itemBase/components/skeletonScreen/skeletonScreen.wxml'];else __wxAppCode__['pages/item/itemBase/components/skeletonScreen/skeletonScreen.wxml'] = $gwx12( './pages/item/itemBase/components/skeletonScreen/skeletonScreen.wxml' );
		__wxAppCode__['pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.wxml'] = [$gwx12, './pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.wxml'];else __wxAppCode__['pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.wxml'] = $gwx12( './pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.wxml' );
		__wxAppCode__['pages/item/itemBase/components/skuLayer/skuLayer.json'] = {"component":true,"usingComponents":{"Sku-added-service":"./skuAddedService/skuAddedService","Item-price":"../itemPrice/itemPrice","Add-cart-pg":"../addCartPg/addCartPg"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/skuLayer/skuLayer.wxml'] = [$gwx12, './pages/item/itemBase/components/skuLayer/skuLayer.wxml'];else __wxAppCode__['pages/item/itemBase/components/skuLayer/skuLayer.wxml'] = $gwx12( './pages/item/itemBase/components/skuLayer/skuLayer.wxml' );
		__wxAppCode__['pages/item/itemBase/components/specific/specific.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/specific/specific.wxml'] = [$gwx12, './pages/item/itemBase/components/specific/specific.wxml'];else __wxAppCode__['pages/item/itemBase/components/specific/specific.wxml'] = $gwx12( './pages/item/itemBase/components/specific/specific.wxml' );
		__wxAppCode__['pages/item/itemBase/components/suyuanVideo/suyuanVideo.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/suyuanVideo/suyuanVideo.wxml'] = [$gwx12, './pages/item/itemBase/components/suyuanVideo/suyuanVideo.wxml'];else __wxAppCode__['pages/item/itemBase/components/suyuanVideo/suyuanVideo.wxml'] = $gwx12( './pages/item/itemBase/components/suyuanVideo/suyuanVideo.wxml' );
		__wxAppCode__['pages/item/itemBase/components/wqDialog/wqDialog.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/itemBase/components/wqDialog/wqDialog.wxml'] = [$gwx12, './pages/item/itemBase/components/wqDialog/wqDialog.wxml'];else __wxAppCode__['pages/item/itemBase/components/wqDialog/wqDialog.wxml'] = $gwx12( './pages/item/itemBase/components/wqDialog/wqDialog.wxml' );
		__wxAppCode__['pages/item/pingou/pingou.json'] = {"navigationBarTitleText":"商品详情","usingComponents":{},"navigationStyle":"custom"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/pingou/pingou.wxml'] = [$gwx12, './pages/item/pingou/pingou.wxml'];else __wxAppCode__['pages/item/pingou/pingou.wxml'] = $gwx12( './pages/item/pingou/pingou.wxml' );
		__wxAppCode__['pages/item/subPackages/address/address.json'] = {"navigationBarTitleText":"选择其他地址","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/address/address.wxml'] = [$gwx12, './pages/item/subPackages/address/address.wxml'];else __wxAppCode__['pages/item/subPackages/address/address.wxml'] = $gwx12( './pages/item/subPackages/address/address.wxml' );
		__wxAppCode__['pages/item/subPackages/components/giftPool/giftPool.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/components/giftPool/giftPool.wxml'] = [$gwx12, './pages/item/subPackages/components/giftPool/giftPool.wxml'];else __wxAppCode__['pages/item/subPackages/components/giftPool/giftPool.wxml'] = $gwx12( './pages/item/subPackages/components/giftPool/giftPool.wxml' );
		__wxAppCode__['pages/item/subPackages/components/noticeDialog/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/components/noticeDialog/index.wxml'] = [$gwx12, './pages/item/subPackages/components/noticeDialog/index.wxml'];else __wxAppCode__['pages/item/subPackages/components/noticeDialog/index.wxml'] = $gwx12( './pages/item/subPackages/components/noticeDialog/index.wxml' );
		__wxAppCode__['pages/item/subPackages/components/noticeForm/index.json'] = {"component":true,"usingComponents":{"AddressLayer":"../../../../../components/address-layer/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/components/noticeForm/index.wxml'] = [$gwx12, './pages/item/subPackages/components/noticeForm/index.wxml'];else __wxAppCode__['pages/item/subPackages/components/noticeForm/index.wxml'] = $gwx12( './pages/item/subPackages/components/noticeForm/index.wxml' );
		__wxAppCode__['pages/item/subPackages/components/suit/suit.json'] = {"component":true,"usingComponents":{"Sku-layer":"../../../itemBase/components/skuLayer/skuLayer"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/components/suit/suit.wxml'] = [$gwx12, './pages/item/subPackages/components/suit/suit.wxml'];else __wxAppCode__['pages/item/subPackages/components/suit/suit.wxml'] = $gwx12( './pages/item/subPackages/components/suit/suit.wxml' );
		__wxAppCode__['pages/item/subPackages/freight/freight.json'] = {"navigationBarTitleText":"配送费收费标准","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/freight/freight.wxml'] = [$gwx12, './pages/item/subPackages/freight/freight.wxml'];else __wxAppCode__['pages/item/subPackages/freight/freight.wxml'] = $gwx12( './pages/item/subPackages/freight/freight.wxml' );
		__wxAppCode__['pages/item/subPackages/pages/address/address.json'] = {"navigationBarTitleText":"选择其他地址","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/pages/address/address.wxml'] = [$gwx12, './pages/item/subPackages/pages/address/address.wxml'];else __wxAppCode__['pages/item/subPackages/pages/address/address.wxml'] = $gwx12( './pages/item/subPackages/pages/address/address.wxml' );
		__wxAppCode__['pages/item/subPackages/pages/arriveNotice/index.json'] = {"navigationBarTitleText":"到货通知","usingComponents":{"subscribe-guider":"../../../../../components/subscribe-guider/index","Wq-dialog":"../../../itemBase/components/wqDialog/wqDialog","notice-form":"../../components/noticeForm/index","notice-dialog":"../../components/noticeDialog/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/pages/arriveNotice/index.wxml'] = [$gwx12, './pages/item/subPackages/pages/arriveNotice/index.wxml'];else __wxAppCode__['pages/item/subPackages/pages/arriveNotice/index.wxml'] = $gwx12( './pages/item/subPackages/pages/arriveNotice/index.wxml' );
		__wxAppCode__['pages/item/subPackages/pages/chooseShop/chooseShop.json'] = {"navigationBarTitleText":"选择门店","usingComponents":{"Sku-layer":"../../../itemBase/components/skuLayer/skuLayer","Item-price":"../../../itemBase/components/itemPrice/itemPrice"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/pages/chooseShop/chooseShop.wxml'] = [$gwx12, './pages/item/subPackages/pages/chooseShop/chooseShop.wxml'];else __wxAppCode__['pages/item/subPackages/pages/chooseShop/chooseShop.wxml'] = $gwx12( './pages/item/subPackages/pages/chooseShop/chooseShop.wxml' );
		__wxAppCode__['pages/item/subPackages/pages/gift/gift.json'] = {"navigationBarTitleText":"赠品列表","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/pages/gift/gift.wxml'] = [$gwx12, './pages/item/subPackages/pages/gift/gift.wxml'];else __wxAppCode__['pages/item/subPackages/pages/gift/gift.wxml'] = $gwx12( './pages/item/subPackages/pages/gift/gift.wxml' );
		__wxAppCode__['pages/item/subPackages/pages/giftPool/giftPool.json'] = {"navigationBarTitleText":"领取赠品","usingComponents":{"gift-pool":"../../components/giftPool/giftPool"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/pages/giftPool/giftPool.wxml'] = [$gwx12, './pages/item/subPackages/pages/giftPool/giftPool.wxml'];else __wxAppCode__['pages/item/subPackages/pages/giftPool/giftPool.wxml'] = $gwx12( './pages/item/subPackages/pages/giftPool/giftPool.wxml' );
		__wxAppCode__['pages/item/subPackages/pages/ldp/ldp.json'] = {"navigationBarTitleText":"选择门店","usingComponents":{"Sku-layer":"../../../itemBase/components/skuLayer/skuLayer","Item-price":"../../../itemBase/components/itemPrice/itemPrice"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/pages/ldp/ldp.wxml'] = [$gwx12, './pages/item/subPackages/pages/ldp/ldp.wxml'];else __wxAppCode__['pages/item/subPackages/pages/ldp/ldp.wxml'] = $gwx12( './pages/item/subPackages/pages/ldp/ldp.wxml' );
		__wxAppCode__['pages/item/subPackages/pages/pricereduceNotice/index.json'] = {"navigationBarTitleText":"降价通知","usingComponents":{"subscribe-guider":"../../../../../components/subscribe-guider/index","Wq-dialog":"../../../itemBase/components/wqDialog/wqDialog","notice-form":"../../components/noticeForm/index","notice-dialog":"../../components/noticeDialog/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/pages/pricereduceNotice/index.wxml'] = [$gwx12, './pages/item/subPackages/pages/pricereduceNotice/index.wxml'];else __wxAppCode__['pages/item/subPackages/pages/pricereduceNotice/index.wxml'] = $gwx12( './pages/item/subPackages/pages/pricereduceNotice/index.wxml' );
		__wxAppCode__['pages/item/subPackages/pages/suit/suit.json'] = {"navigationBarTitleText":"优惠套装","usingComponents":{"suit":"../../components/suit/suit"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/pages/suit/suit.wxml'] = [$gwx12, './pages/item/subPackages/pages/suit/suit.wxml'];else __wxAppCode__['pages/item/subPackages/pages/suit/suit.wxml'] = $gwx12( './pages/item/subPackages/pages/suit/suit.wxml' );
		__wxAppCode__['pages/item/subPackages/pages/yuyueResult/index.json'] = {"navigationBarTitleText":"预约结果","usingComponents":{"subscribe-guider":"../../../../../components/subscribe-guider/index","Wq-dialog":"../../../itemBase/components/wqDialog/wqDialog","notice-dialog":"../../components/noticeDialog/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/item/subPackages/pages/yuyueResult/index.wxml'] = [$gwx12, './pages/item/subPackages/pages/yuyueResult/index.wxml'];else __wxAppCode__['pages/item/subPackages/pages/yuyueResult/index.wxml'] = $gwx12( './pages/item/subPackages/pages/yuyueResult/index.wxml' );
	
	define("pages/item/detail/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(exports,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},a=function(){function e(e,t){var i=[],r=!0,o=!1,a=void 0;try{for(var s,n=e[Symbol.iterator]();!(r=(s=n.next()).done)&&(i.push(s.value),!t||i.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&n.return&&n.return()}finally{if(o)throw a}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=t(require("../../../common/utils.js")),n=require("../../../common/timer-manage"),u=t(require("../itemBase/js/util/util.js")),c=require("../../../components/launch-jdapp/util.js"),l=t(require("../../../components/launch-pgapp/util.js")),p=require("../itemBase/js/model/fetch.js"),d=require("../itemBase/js/model/baseModel.js"),h=e(require("../../../libs/promise.min.js")),g=require("./store.js"),f=require("../itemBase/js/handler/organize.js"),m=e(require("../../../common/wxcontext.js")),v=t(require("../../../common/localStorage.js")),y=t(require("../../../common/login/loginv1.js")),C=t(require("../../../common/fe_helper.js")),I=t(require("../../../common/modal/modal")),_=t(require("../../../common/toast/toast.js")),T=t(require("../../../common/userinfo_wqvue.js")),S=t(require("../itemBase/js/handler/action.js")),k=t(require("../itemBase/js/handler/pingouAction.js")),P=t(require("../itemBase/js/handler/userInfo.js")),E=t(require("../itemBase/constants/ptag-constants")),N=e(require("../../../api/Ptag/report_manager_wqvue")),w=e(require("../../../libs/day.min.js")),x=t(require("../../../common/recovery/item.js")),A=require("../itemBase/constants/constants"),L=!1,O="",D=0,b={store:g.storeFn,created:function(){var e=this;L=!1,this.visitedSku={};var t=this.$query,i=t.pps,r=t.from,o=t.isCouponSearch,a=t.token,l=t.user_tag,p=t.channelkey,d=t.channelvalue,h=t.name,g=t.price,f=t.cover,v=t.neverBack,y=t.num,I=t.cartlocation,T=t.sku,S=t.action,k=t.actid,P=t.key,N=t.activeid,w=t.tuanid,A=t.topLiveId;if(this.activeid=N,this.tuanid=w,T){var D=T.trim()||"";u.reporter.setExtraData({sku_id:T});var b=this.$query,B=b.utm_medium,R=b.utm_source,j=b.utm_campaign,U=b.utm_term,F=b.frdeh5;if(u.reporter.reportExposure(E.EXP_DETAIL_INIT,{utm_medium:B,utm_source:R,utm_campaign:j,utm_term:U}),1==F&&u.reporter.reportExposure(E.DETAIL_H5_TO_WXAPP),O=x.getRecoveryUrl(D))u.gotoUrl(this,{url:O},"","redirectTo");else{if("wm"===r?u.reporter.reportClick(E.DETAIL_SHARE_FROM_TIMELINE):"wxshare"===r?u.reporter.reportClick(E.DETAIL_SHARE_FROM_FRIEND):"wxshare_2"===r?u.reporter.reportClick(E.DETAIL_SHARE_FROM_FRIEND_2):"wxshare_3"===r?u.reporter.reportClick(E.DETAIL_SHARE_FROM_FRIEND_3):"wxshare_4"===r?u.reporter.reportClick(E.DETAIL_SHARE_FROM_FRIEND_4):"wxshare_5"===r&&u.reporter.reportClick(E.DETAIL_SHARE_FROM_FRIEND_5),u.reporter.reportExposure(E.DETAIL_NAV_TAB_EXP),this.pps=i||"",this.manualReportPV=!0,this.unifyReport.set({pparam:D}),this.unifyReport.pv(),this.isCouponSearch=!!o,this.action=S||"",this.needJumpToAddress=!!I,u.ENV.isXcxEnv){var X=getApp();if(X&&X.isAppShare&&X.isAppShare.status){var M=m.default.JD.cookie.get("wxapp_type");X.isAppShare.fromJxapp&&2==M&&(this.showPingouBtnFlag=!0,X.event.on("commentAskGuideClosed",function(){e.flags.forbidAppDetailNavigate=!1})),1==M&&c.getSwitchesPromise.then(function(t){t&&(t.isShowLaunchEnterSwitch||t.ylToCustomerServiceSwitch)&&(!t.isShowLaunchEnterSwitch&&t.ylToCustomerServiceSwitch&&(e.flags.ylToCustomerServiceFlag=!0),e.flags.showAppFlag=!0,e.flags.forbidAppDetailNavigate=!X.isAppShare.isCommentAskGuideClosed,e.flags.forbidAppDetailNavigate&&(e.reviewAppParameter=(0,c.getAppSchema)("item",{skuId:D,source:"wxapp_review"}),e.answerAppParameter=(0,c.getAppSchema)("item",{skuId:D,source:"wxapp_qa"}),u.reporter.reportExposure(D==X.isAppShare.sku?E.COMMENT_ASK_APP_LAUNCH_EXP:E.COMMENT_ASK_APP_ACROSS_ITEM_LAUNCH_EXP)),X.event.on("commentAskGuideClosed",function(){(0,n.createTimeout)(function(){e.flags.forbidAppDetailNavigate=!1},1e3)}),e.imkParam.skuId=D)})}var J=getCurrentPages();1===J.length&&(this.flags.showHomeBtnFlag=!0,u.reporter.reportExposure(E.VIEW_RETURN_HOME_EXP)),1069==X.scene&&X.referrerInfo&&"wx5dfbe0a95623607b"==X.referrerInfo.appId&&1===J.length&&(this.flags.showReturnAppBtnFlag=!0,u.reporter.reportExposure(E.EXP_RETURN_TO_WEISHI)),1037==X.scene&&X.referrerInfo&&"wx862d8e26109609cb"==X.referrerInfo.appId&&1===J.length&&u.reporter.reportExposure(E.EXP_RETURN_FORM_HEALTHWXAPP)}if(a&&(this.wxsearchToken=a,m.default.JD.cookie.set("wxsearch_token",a,1440)),this.baseSkuId=D,this.skuId=D,this.detail={isZiying:D.length<10,canBuy:!0,skuId:D,skuName:h?C.decode(h):"",priceObj:{price:g},firstScreenPrice:g,firstScreenImage:f?[C.decode(f)]:[],jdCategory:[],isFirstScreen:!0,pingouInfo:{price:g}},f&&(this.focusSlideObj=s.only(this.detail,["firstScreenImage","skuId","isZiying","jdCategory","isFirstScreen"]),this.hitFirstScreenQuery=!0,this.$nextTick().then(function(){e.speedMark(11)})),g&&(this.itemPriceObj=s.only(this.detail,["skuId","priceObj","isFirstScreen"])),this.isNewUser=1==l,this.neverBack=v||"",this.goodsNum.value=y?+y:1,this.actid=k,this.flags.keepSameLiveVideo=!!A,this.loadItemInfo(this.skuId,{init:!0,needReport:!0,actid:this.actid,key:P}),"cubeinvite"==p&&d){var G={value:d,skuId:D,timeStamp:Date.now()},H=JSON.stringify({cubeinvite:G});m.default.JD.cookie.set("item_orderchannel",H,1440)}this.throttleFun()}}else _.show({icon:_.ICON.WARNING,content:"参数错误",page:this})},onReady:function(){var e=this;m.default.getSystemInfo({success:function(t){t&&t.windowHeight&&e.setData({windowHeight:t.windowHeight+"px"})}})},onShow:function(){this.pageShow=!0,this.setData({pageShow:!0}),this.pageShowCount++,O||(this.reportPV(),this.init(),this.removeListen(),this.loadListen(),this.initAddress(),this.checkCertifiction(),m.default.JD.events.trigger("item.main.updateShopGiftStatus"),this.restoreNewerCouponTimer())},onHide:function(){_.hide(),this.pageShow=!1,this.setData({pageShow:!1}),this.pageHideCount++,L||(0,p.clearRequestList)(),this.newerCouponTimer&&(this.needRestoreNewerCouponTimer=!0,(0,n.stopTimeout)(this.newerCouponTimer),this.newerCouponTimer=null)},destroyed:function(){this.removeListen(),(0,p.clearRequestList)()},data:{timmer:{},isRetry:!0},computed:{},watch:{},methods:{onNavBack:function(){"comment"==this.cpart?this.changeCpart({cpart:"main"}):m.default.navigateBack()},onNavigate:function(e){e.page,e.url;var t=e.params;L||((0,p.clearRequestList)(),L=!0);var i=(t.sku+"").trim();i&&(0,d.getItemInfo)({sku:i,isInit:!0,key:t.key})},reportPV:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).mustRport,t=void 0!==e&&e,i=this.detail,r=void 0===i?{}:i,o=r.pingouInfo,a=void 0===o?{}:o,s=r.freight,n=void 0===s?{}:s,c=r.canBuy,l=r.skuId,p=r.jdCategory,d=void 0===p?[]:p,h=r.venderId,g=r.isQianggou;if(t||l&&d.length>0){this.pps&&N.default.setPPS(this.pps);var f=this.$query.actid,m="http://wq.jd.com/wxapp/pages/item/detail/detail?as="+((void 0===f?0:f)||0)+"&pps="+(this.pps||"");u.reporter.reportDetailPV(m,l,h,c?E.EXP_VIEW_CAN_BUY:E.EXP_VIEW_CANNOT_BUY,g,{shipping:n.dcashDesc||"",pgIsNewUser:a.isNewer?"1":"0",pgIsNewerSingleTuan:a.isNewerNoTuan?"1":"0"}),u.reporter.reportExposure(c?E.EXP_VIEW_CAN_BUY:E.EXP_VIEW_CANNOT_BUY)}},init:function(){var e=u.getClientInfo(),t=e.windowHeight,i=e.windowWidth;if(this.windowHeight=t+"px",this.windowWidth=i+"px",this.updateCartNum(),u.ENV.isXcxEnv){var r=m.default.JD.cookie.get("wxsearch_token");getApp().isWXSearchScene&&(this.wxsearchToken||r)?this.wxSearchFlag=!0:this.flags.showWXSearchFlag=!1}else m.default.JD.url.getUrlParam("sosomark")?this.wxSearchFlag=!0:this.flags.showWXSearchFlag=!1},throttleFun:function(){this.loadItemInfo=u.throttle(this.loadItemInfo,500,!0),this.drawCoupon=u.throttle(this.drawCoupon,500),this.doBuy=u.throttle(this.doBuy,500),this.addToCart=u.throttle(this.addToCart,1e3),this.scrollNav=u.throttle(this.scrollNav,300),this.startTuan=u.throttle(this.startTuan,800),this.gotoTuan=u.throttle(this.gotoTuan,800),this.gotoBuy=u.throttle(this.gotoBuy,800),this.handleTjTuanBottomShow=u.throttle(this.handleTjTuanBottomShow,500),this.plusZxGouOpenPlus=u.throttle(this.plusZxGouOpenPlus,500),this.handleCommentAnswerLaunchClick=u.throttle(this.handleCommentAnswerLaunchClick,500),this.setScrollUnderMainImgFlag=s.debounce(this.setScrollUnderMainImgFlag,350)},loadItemInfo:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.skuId,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});if(this.skuId){m.default.showNavigationBarLoading();var i=t.redirectUrl,r=t.init,o=t.key,s=t.fckr,n=[];i?n.push((0,d.getItemInfo)({url:i})):n.push((0,d.getItemInfo)({sku:this.skuId,isInit:!0,key:o,fckr:s})),h.default.all(n).then(function(i){var o=a(i,2),s=o[0],n=o[1];if(n&&n.length){var c={};n.forEach(function(e){e.key&&e.num&&(c[e.key]=u.getGray(parseFloat(e.num)))}),e.setData({grayscale:c})}e.initDatail(s,r,t)}).catch(function(t){e.detailError({errCode:-1})}).then(function(){m.default.hideNavigationBarLoading()})}else this.detailError()},initDatail:function(e,t){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e)if(0!=e.errCode)this.detailError(e);else if(0!=e.bizRetCode&&"30001"!=e.bizRetCode&&"30003"!=e.bizRetCode)this.detailBizError(e);else{var o=e.item&&e.item.image,a=e.chnImg||[];0!=e.plusMemberType&&a.length>=1&&(o=a),this.detail.focusImages=o,this.focusSlideObj=s.only(this.detail,["focusImages","skuId","isZiying","jdCategory","firstScreenImage","isFirstScreen"]),this.hitFirstScreenQuery||this.$nextTick().then(function(){i.speedMark(11)}),(0,f.organize)({json:e,isRetry:this.isRetry,pps:this.pps,needReport:r.needReport,actid:r.actid}).then(function(o){if(t&&u.reporter.reportExposure(E.EXP_DETAIL_MAINLOAD),o.redirectUrl)return i.isRetry=!1,void i.loadItemInfo(i.skuId,{redirectUrl:o.redirectUrl,needReport:!0});if(i.isRetry=!0,!o.jumpUrl||i.wxSearchFlag&&i.wxsearchToken){if(o.huanUrl)return t||(i.huanPrice=o.huanPrice||""),i.skuId=o.huanSku,i.loadItemInfo(i.skuId,{key:r.key,needReport:!0}),void(t&&m.default.showModal({title:"",content:"已为您切换在该地区售卖的相似商品，请关注。",showCancel:!1,confirmText:"知道了",confirmColor:"#E93B3D"}));i.speedMark(4),o.isToJdhealthOrder&&u.reporter.reportExposure(E.EXP_GOTO_JDHEALTH_ORDER),o.isPlusZxGou&&o.showPlusZxGouTip&&(u.reporter.reportExposure(E.EXP_PLUSZX_OPENTIP),o.canBuy?u.reporter.reportExposure(E.EXP_PLUSZX_OPENBTN):u.reporter.reportExposure(E.EXP_PLUSZX_OPENBTN_GRAY)),o.isPlusZxShop&&o.showPlusZxGouTip&&(u.reporter.reportExposure(E.EXP_PLUSZXSHOP_OPENTIP),o.canBuy?u.reporter.reportExposure(E.EXP_PLUSZXSHOP_OPENBTN):u.reporter.reportExposure(E.EXP_PLUSZXSHOP_OPENBTN_GRAY)),t&&o.isPingou&&o.fanxian&&o.fanxian.amountDesc&&u.reporter.reportExposure(E.EXP_FANXIAN_PRICE),o.isSpecialProcess&&i.setVisitedSku(o.skuId),o.pgBanner&&o.pgBanner.activeLeftTime&&i.setVisitedSku(o.skuId),o.jxviplabel&&i.setVisitedSku(o.skuId),o.isPingou?i.customNavbarData.pageKey=2==i.wxappType?"pgweapp_item_detail":"weapp_pgitem_detail":i.customNavbarData.pageKey=2==i.wxappType?"pgweapp_ptitem_detail":"weapp_item_detail",i.flags.isJxScene=o.isPingou||i.isPingouXcx,i.flags.isJxScene&&(i.customNavbarData.mainContentOpacity=1),t&&(0,d.getPpmsData)("_grayInfo").then(function(e){(e||[]).forEach(function(e){if(!i.isPingouApp&&o.isNormalItem)"addSearchGray"==e.key&&u.getGray(parseFloat(e.num))&&(i.flags.showSearchBar=!0,i.customNavbarData.mainContentOpacity=1,u.reporter.reportExposure(E.EXP_SEARCH_BAR));else if("jxAddSearchXcxGray"==e.key&&u.getGray(parseFloat(e.num))){i.flags.showJxSearchBar=!0;var t=getApp(),r=getCurrentPages();[1011,1012,1013,1036,1047,1048,1049,1007,1008].includes(t.scene)&&1===r.length&&(i.flags.showJxSearchBarFirseScreen=!0),u.reporter.reportExposure(E.EXP_SEARCH_BAR_JX)}})}),i.flags.showFamilyListEnterFlag=!i.isPingouXcx&&o.isNormalItem&&o.hasFamilyAccount&&!o.isWareOff&&!o.isOtcToHealth;try{o.ad=o.ad&&u.formatAdText(o.ad,u.checkURL()),o.ad&&u.reporter.reportExposure(E.EXP_DETAIL_NAME_AD)}catch(e){o.ad="",console.error(e)}i.flags.usePgShare=o.isPingou||u.ENV.isPingouXcx,i.layer.service.content=o.service||[],i.firstScreenMsg={sku:o.skuId,name:o.skuName.trim(),price:o.jdPrice,cover:C.getImg(o.focusImages[0],750).replace("img/","n1/")},Object.assign(i.shareOptions,{sku:o.skuId,name:o.skuName.trim(),price:o.sharePrices,jdPrice:o.jdPrice,oriPrice:o.oriPrice,cover:o.focusImages,category:o.jdCategory,processType:o.processType||"",type:i.getShareType(o,e),service:(o.pingouInfo&&o.pingouInfo.isFactorySupply?[{title:"工厂直供",text:"精选全国千家优质工厂 · 放心好货",iconCode:"",iconState:!0}]:[]).concat(o.service||[]),activeLeftTime:o.pgBanner?o.pgBanner.activeLeftTime:0,fxPrice:o.fanxian&&o.fanxian.amountDesc||"",tuanMember:o.pingouInfo&&o.pingouInfo.active_info&&o.pingouInfo.active_info.tuan_member_count,kaiTuanNum:o.pingouInfo&&o.pingouInfo.recm_tuan_info&&o.pingouInfo.recm_tuan_info.pingou_member_count,promomiao:o.promomiao,flashpurchase:o.flashpurchase}),i.atmosProcessType=o.processType||0,i.isSpecialProcess=o.isSpecialProcess,i.flags.keepSameLiveVideo&&i.jxLive&&i.jxLive.liveUrl||(i.jxLive=o.jxLive||{}),o.isNeedRefreshAddress&&(i.initAddress(),o.isNeedRefreshAddress=!1),o.firstScreenImage=i.detail.firstScreenImage||[],i.setStoreByKey("detail",o),i.$nextTick().then(function(){i.flags.showSkeletonScreen=!1,m.default.createSelectorQuery().select(".item-ad").boundingClientRect(function(e){e&&(i.adStatus.hasMore=e.height>45)}).exec()}),i.updateRecommendTuan(),h.default.all([i.updateStock(),i.updatePrice(),i.updatePgPrice()]).then(function(){try{i.calcSkuForEachProp(i.detail.props),i.updateCurrentSelect()}catch(e){console.error(e)}i.loadComponentByDetail(i.detail),i.loadExtra(i.detail),i.detail.isPingou&&i.loadPingouSpec(i.detail)}),i.$nextTick().then(function(){i.detail.isPingou?i.speedMark(12):i.speedMark(13),i.speedMark(5).speedReport({isReportPerformance:!0})})}else u.gotoUrl(i,{url:o.jumpUrl},"","redirectTo",!0)}).catch(function(e){i.detailError({errCode:-2})})}else this.detailError({errCode:-10018})},getShareType:function(e,t){var i="";if(e.pingouInfo&&e.pingouInfo.isFactorySupply)i=A.ITEM_SHARE_TYPE.GCZG;else if(e.pgBanner&&e.pgBanner.flag)switch(e.pgBanner.flag){case 2:case 3:t.pingouItem&&1*t.pingouItem.m_bp==1?i=A.ITEM_SHARE_TYPE.YYXR:e.fanxian&&2==e.fanxian.fanXianType&&(i=A.ITEM_SHARE_TYPE.XRQF);break;case 4:i=A.ITEM_SHARE_TYPE.XSGF;break;case 5:i=A.ITEM_SHARE_TYPE.BYBT;break;case 6:i=A.ITEM_SHARE_TYPE.XSQF}return i},updateRecommendTuan:function(){var e=this;return this.detail.isNeedRegainPingouRecommendTuan?(this.detail.isNeedRegainPingouRecommendTuan=!1,k.getPingouRecommendTuan(this.skuId).then(function(t){var i=e.detail.pingouInfo,r=void 0===i?{}:i;e.setData({"detail.pingouInfo":Object.assign(r,{tuanInfoList:[t],tjTuanInfo:t})})}).catch(function(e){})):h.default.resolve(!0)},updatePgPrice:function(){var e=this;return this.detail.isNeedRegainPricePingou?(this.detail.isNeedRegainPricePingou=!1,k.getPingouPrice(this.skuId).then(function(t){var i=t.bp,r=t.p>0&&1*t.bp<1*t.p&&t.p||"暂无定价";e.detail.pingouInfo.price=i,e.detail.pingouInfo.originPrice=r,e.setData({"detail.pingouInfo.price":i,"detail.pingouInfo.originPrice":r})}).catch(function(t){e.detail.pingouInfo.price="暂无定价",e.detail.pingouInfo.originPrice="暂无定价",e.setData({"detail.pingouInfo.price":"暂无定价","detail.pingouInfo.originPrice":"暂无定价"})})):h.default.resolve(!0)},updatePrice:function(){var e=this;return this.detail.isNeedRegainPrice?(0,f.getRealPrice)().then(function(t){e.detail.jdPrice=t.jdPrice||"暂无定价",e.detail.oriPrice=t.oriPrice||"暂无定价",e.detail.jdMprice=t.jdMprice||"暂无定价",e.detail.initPrice=t.initPrice||"暂无定价",e.detail.promote=t.promote||[],e.detail.tipsContent=t.tipsContent||"",e.detail.canBuy=!!t.canBuy,e.detail.priceObj=t.priceObj,e.detail.plusPromoInfo=t.plusPromoInfo}).catch(function(e){}):h.default.resolve(!0)},updateStock:function(){var e=this,t=this.detail,i=t.skuId;if(!t.isNeedRegainStock&&!this.isNeedRegainStock){var r=this.detail.stock||{};return 0!=r.StockState&&34!=r.StockState||(u.reporter.reportExposure(E.DETAIL_LOOK_SIMILAR_BUTTON_EXP),u.reporter.reportExposure(E.DETAIL_STOCK_NOTICE_EXP)),h.default.resolve(!0)}return(0,f.getRealStock)().then(function(t){e.detail.stock=t.stock||{},e.detail.tipsContent=t.tipsContent||"",e.detail.canBuy=!!t.canBuy,e.detail.service=t.service||[],e.detail.freight=t.freight||{},e.detail.venderType=t.venderType,e.detail.isJDexpress=t.isJDexpress,e.detail.stockSid=t.stockSid,e.serviceQueryStr=C.querystring({d:JSON.stringify(t.service||{}),sku:i});var r=t.stock||{};0!=r.StockState&&34!=r.StockState||(u.reporter.reportExposure(E.DETAIL_LOOK_SIMILAR_BUTTON_EXP),u.reporter.reportExposure(E.DETAIL_STOCK_NOTICE_EXP)),e.isNeedRegainStock=!1}).catch(function(e){})},loadComponentByDetail:function(e){if(this.focusSlideObj=s.only(e,["focusImages","mainVideoId","skuId","isOnlineBook","isJDChoice","spAttr","jdCategory","isZiying","isOverseaPurchase","isCjg","allOverImg","isPingou","suyuanIcon"]),this.refreshBannerAtmosphere(),e.isNormalItem){this.itemPriceObj=s.only(e,["skuId","priceObj","isNormalAct","isPingou"]);var t="";!this.itemPriceObj.isNormalAct||this.itemPriceObj.priceObj&&this.itemPriceObj.priceObj.priorityPrice||!this.itemPriceObj.priceObj.marketPrice?this.itemPriceObj.isNormalAct||this.itemPriceObj.priceObj&&this.itemPriceObj.priceObj.priorityPrice||!this.itemPriceObj.priceObj.linePrice||(t=this.itemPriceObj.priceObj.linePrice):t=this.itemPriceObj.priceObj.marketPrice,this.shareOptions.linePrice=t}this.favourObj=s.only(e,["skuId","jdSkuIds","jdCategory","venderId","isPingou"]),e.isPingou?this.couponObj=s.only(e,["skuId","jxviplabel","avlCoupon","prizeCoupon","couponGuide"]):this.couponObj=s.only(e,["skuId","isZiying","jdCategory","venderId","isOverseaPurchase"]),this.promoteObj=s.only(e,["skuId","plusPromoInfo","promov2","bankpromo","is9669order","isPrescribeDrug","focusImages","skuName","jdCategory","item","isPlus","promoteInfo","isPingouShop","isPingou"]),e.isNormalItem&&(this.accessoriesObj=s.only(e,["skuId","jdCategory"])),this.guessYouLikeObj=s.only(e,["skuId","jdCategory","isZiying","jdPrice","venderId","isPingou","isPingouShop"]),this.specificObj=s.only(e,["skuId","skuType","focusImages","jdCategory","isOverseaPurchase","isZiying","descriptionId","isPlus","item","expAttr","isPingou","isPingouShop"]),e.isNormalItem&&(this.businessEntryObj=s.only(e,["skuId","spAttr","jdCategory","isZiying"]))},setPgappLauchConfig:function(){var e=this.detail,t=void 0===e?{}:e,i=this.tuanid,r=this.activeid;this.pgappLauchConfigParam.url=r&&i?t.isNewPingou?"https://item.m.jd.com/item/jxview?sku="+t.skuId+"&activeid="+r+"&tuanid="+i:"https://item.m.jd.com/product/"+t.skuId+".html?activeid="+r+"&tuanid="+i:t.isNewPingou?"https://item.m.jd.com/item/jxview?sku="+t.skuId:"https://item.m.jd.com/product/"+t.skuId+".html",this.appZxLaunchAppParameter=l.getAppSchema({moduleName:"item",url:this.pgappLauchConfigParam.url,urlConfig:{rdLink:49}}),this.launchAppParameter=l.getAppSchema({moduleName:"item",url:this.pgappLauchConfigParam.url,urlConfig:this.pgappLauchConfigParam.urlConfig}),this.reviewAppParameter=this.launchAppParameter,this.answerAppParameter=this.launchAppParameter},loadExtra:function(e){var t=this;u.ENV.isPingouXcx&&this.setPgappLauchConfig(),this.showPingouBtnFlag&&(0,d.getPpmsData)("_grayInfo").then(function(e){return(e||[]).forEach(function(e){if("jxMiniProgramToApp"==e.key&&"100"==e.num){t.flags.showPingouBtnFlag=!0;var i=getApp();t.flags.forbidAppDetailNavigate=!i.isAppShare.isCommentAskGuideClosed}}),t.flags.forbidAppDetailNavigate}).then(function(e){t.jxCommentAnswerYlToastDes=[],e&&(0,d.getPpmsData)("_jxCommentAnswerYlConfig").then(function(e){(e||[]).forEach(function(e){e&&1==e.channel&&e.description&&e.description.forEach(function(e){t.jxCommentAnswerYlToastDes.push({text:e.text,markRed:1==e.markRed})})})})}),(0,d.getPpmsData)("_cartConfig").then(function(i){var r=i||[],o=2==t.wxappType?"pgxcx":"xcx",a=e.isNormalItem?"normal":e.isNewPingou?"newpg":"oldpg";r.forEach(function(e){e.channel==o&&(e.type||[]).forEach(function(e){e.itemType==a&&(t.cartNumShow=1==e.cartNum,t.pgCartEnterShow=1==e.cartEnter,t.pgAddCartShow=1==e.addCart)})})}).catch(function(){2==t.wxappType?(t.cartNumShow=!1,t.pgCartEnterShow=!0,t.pgAddCartShow=e.isNewPingou):(t.cartNumShow=!0,t.pgCartEnterShowType=!0,t.pgAddCartShow=!e.isNewPingou)}),(0,d.getPpmsData)("_itemArrivalNotice").then(function(i){var r=i||[],o=2==t.wxappType?"pgxcx":"xcx",a=e.isNormalItem?"normal":e.isNewPingou?"newpg":"oldpg",s={arrivalNotice:"showArrivalNoticeFlag",dropNotice:"showDropNoticeFlag"};r.forEach(function(e){var i=e.channel&&e.channel.split(";")||[],r=e.itemType&&e.itemType.split(";")||[];i.includes(o)&&r.includes(a)&&s[e.key]&&(t.flags[s[e.key]]=!0)}),e.isPingou&&e.isNoStock&&!e.canNotBuyHere&&!e.isWareOff&&t.flags.showArrivalNoticeFlag&&u.reporter.reportExposure(E.EXP_ARRIVAL_NOTICE_JX)}),S.getTitleTag(e).then(function(e){var i=e.skuNameFlags,r=void 0===i?[]:i,o=e.aboveTitleSkuFlags,a=void 0===o?[]:o,s=e.beforeStockSkuFlags,n=void 0===s?{}:s;t.skuNameFlags=r,t.aboveTitleSkuFlags=a,t.beforeStockSkuFlags=n,t.shareOptions.flags=r||[]}),S.getAddedService(e).then(function(i){i&&i.supportServicesStr&&(t.setStoreByKey("supportServicesStr",i.supportServicesStr),u.reporter.reportExposure(E.ADDED_SERVICES_EXP),e.isPingou&&u.reporter.reportExposure(E.PG_ADDED_SERVICES_EXP))}),S.getBigPromoteInfo(e).then(function(e){t.setStoreByKey("bigPromoteInfo",e)}),e.isNormalItem?S.serviceAreaOrganize(e).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.layer.easeBuy.relaxType=e.relaxType,t.layer.easeBuy.title=3==t.layer.easeBuy.relaxType?"企悦服务":"放心购",e.popEaseBuy&&e.popEaseBuy.length?(t.layer.easeBuy.content=e.popEaseBuy,t.layer.easeBuy.contentToShowOnPage=e.popEaseBuy,t.layer.easeBuy.topDesc=""):e.zyEaseBuy&&e.zyEaseBuy.length?(t.layer.easeBuy.content=e.zyEaseBuy,t.layer.easeBuy.topDesc="本页面服务内容，与客户会员等级、信用等级等多维度因素相关，具体可享受的服务以客户申请售后时页面展示的信息为准。",t.layer.easeBuy.contentToShowOnPage=e.zyEaseBuyToShowOnPage,3==t.layer.easeBuy.relaxType&&u.reporter.reportExposure(E.EXP_FXG_ZY_QY)):t.layer.easeBuy.content=[],t.layer.service.content=e.serviceContent||[]}):(0,d.couponList)({skuId:e.skuId,isZiying:e.isZiying,jdCategory:e.jdCategory,venderId:e.venderId,isOverseaPurchase:e.isOverseaPurchase,isPingouShop:e.isPingouShop,spAttr:e.spAttr||{},useCache:!0}).then(function(e){var i=e&&e.sku_info&&e.sku_info.limitCouponDesc||"";i&&(t.layer.service.content||(t.layer.service.content=[]),t.layer.service.content.push({title:i,text:i,iconCode:"",iconState:!1}))}),e.isNormalItem&&6!=e.isOverseaPurchase&&7!=e.isOverseaPurchase&&S.globalServiceOrganize(e.taxinfov2).then(function(e){e&&e.length>0&&(t.layer.globalService.content=e)});var i=[9196];if([12813,6321,13314,6324,12814].indexOf(0|e.jdCategory[0])<0&&i.indexOf(0|e.jdCategory[1])<0?this.flags.showAnswerFlag=!0:this.flags.showAnswerFlag=!1,e.isNormalItem&&S.easyBuyInfo(e).then(function(e){e&&e.length>0&&(t.layer.easyBuy.content=e)}),e.isNormalItem&&!this.flags.showWXSearchFlag&&S.cashBack(e).then(function(e){t.detail.gwfxInfo=e,t.flags.showGwfxInfoFlag=e.show,e.show&&(u.reporter.reportExposure(E.GWFX_TAG_EXP),t.$nextTick().then(function(){t.flags.showGwfxTipsFlag=!1,m.default.createSelectorQuery().select(".price-area").boundingClientRect(function(e){e&&m.default.createSelectorQuery().select(".price-item--gwfx").boundingClientRect(function(i){i&&(t.flags.showGwfxTipsFlag=i.top-e.top<30)}).exec()}).exec()}))}),e.isKanjia?S.getActInfo(parseInt(e.skuId),100*parseFloat(e.jdPrice)).then(function(e){t.kanjiaData=e}).catch(function(e){}):this.kanjiaData={isActShow:!1},S.handleAdultTip(e.jdCategory).then(function(e){t.adultTip=e||""}).catch(function(e){t.adultTip=""}),(e.isSamGoods||e.isSamGoods2)&&P.getSamCardStatus().then(function(e){t.setStoreByKey("samStatus",e)}),e.isNormalItem&&!e.isPlus&&(0,d.getPpmsData)("_plusTip").then(function(i){var r=i||[],o="",a=e.priceObj,s=(Number(a.price)-Number(a.plusPrice)).toFixed(2),n=("102"==e.plusFlag?"试用":"开通")+"会员，此商品立省￥"+s,u=r[0];if(u.effectstartTime&&u.effectEndTime){var c=(0,w.default)(u.effectstartTime,"YYYY/MM/DD HH:mm:ss"),l=(0,w.default)(u.effectEndTime,"YYYY/MM/DD HH:mm:ss"),p=(0,w.default)();p.isBefore(c)||l.isBefore(p)?t.setData({"detail.plusTip":n}):("102"==e.plusFlag&&u.notryout?(n=u.notryout.replace(/{\s?}/g,s),o=u.goTip||""):"103"==e.plusFlag&&u.tryoutExpired?n=u.tryoutExpired.replace(/{\s?}/g,s):"203"==e.plusFlag&&u.vipplusExpired&&(n=u.vipplusExpired.replace(/{\s?}/g,s)),t.setData({"detail.plusTip":n,"detail.goTip":o}))}else t.setData({"detail.plusTip":n})}).catch(function(){}),e.isNormalItem&&e.priceObj.sfpPrice&&"sfpPrice"==e.priceObj.priorityPrice&&(0,d.shopCheckFav)(e.venderId).then(function(e){var i=0==e.iRet&&1==e.state;t.shopFavStatus=i}).catch(function(e){}),e.isNormalItem&&e.priceObj.nupPrice&&"nupPrice"==e.priceObj.priorityPrice?P.getPinStatus().then(function(e){var i=void 0,r=void 0,o=void 0,a=void 0,s=e.isDefault,n=e.isSwitch;s?(o=!0,i=!0):n?(o=!0,r=!0):a=!0,t.setData({nupInfo:{isSingleDef:i,isDoubleDef:r,isNupBannerShow:o,isNupPriceShow:a}})}):this.setData({nupInfo:{}}),this.strOpenCardUrl="",e.isNormalItem&&e.priceObj.vdpPrice&&"vdpPrice"==e.priceObj.priorityPrice){var r={};try{r=JSON.parse(e.priceExt)}catch(e){console.error(e)}parseInt(r&&r.VENDOR_MEMBER&&r.VENDOR_MEMBER.level)||(0,d.shopMemberCard)(e.venderId).then(function(e){e&&0==e.errcode&&e.result&&e.result.oData&&e.result.oData.strOpenCardUrl&&(t.strOpenCardUrl="https://wq.jd.com/pinbind/pintokenredirect?biz=ecard&url="+encodeURIComponent(""+e.result.oData.strOpenCardUrl))})}e.isNormalItem&&(this.goodsDescData=s.only(e.item,["AuthorArr","EditerArr","DrawerArr","PhotographyArr","WriteArr","Transfer","Publishers","Authorsstr","Authors","Publishing_Company"])),this.updateLimitBuy(e),e.isNormalItem&&this.initWXSearchFlag(),e.isNormalItem&&e.isLoc&&e.locAddCartDirect&&this.nearLocShop(),this.valueAddedLocShops={},u.ENV.isPingouXcx||"1"==e.spAttr.YuShou||"2"!=e.spAttr.isFreeload||(0,d.valueAddedLocShops)(e.skuId).then(function(i){if(i&&1==i.isValueAddedLoc){u.reporter.reportExposure(E.EXP_CHOOSE_SHOP_BTN);var r="1"!=i.setupStatus;e.isZiying&&(r=!(e.spAttr&&"2"==e.spAttr.psdd)),t.valueAddedLocShops={show:!0,info:i.info,serviceNumLink:i.serviceNumLink,linkage:i.linkage,setupStatus:r}}})},onPageScroll:function(e){if("main"!=this.cpart)return this.customNavbarData.mainContentOpacity="1",void(this.customNavbarData.backgroundOpacity="1");this.lazyLoadThirdScreenFlag=!0;var t=this.data.windowWidth.replace(/\D/g,"")||400,i=this.flags.showBackToTopFlag,r=this.data.flags.forbidScrollFlag,o=this.isSupportNav,a=this.customNavbarData.backgroundOpacity,s=e.scrollTop,n=this.navHeight+(this.flags.showSearchBar||this.flags.showJxSearchBar?38:0);if(this.scrollNav(),s>1*t-n?this.setScrollUnderMainImgFlag(s>1*t-n):(this.flags.scrollUnderMainImgFlag=!1,this.setScrollUnderMainImgFlag(!1)),this.pgappLauchConfigParam&&this.pgappLauchConfigParam.showBottomBar&&(this.pgappLauchConfigParam.setBottomBarVisible="navDetail"==this.navCur),o&&!r){var u=s>0?s:0;if(u<=187&&"main"==this.cpart){var c=""+(u/187).toFixed(2);this.disableNavTab="0.00"==c,this.customNavbarData.backgroundOpacity=c,this.flags.showSearchBar||this.flags.isJxScene||(this.customNavbarData.mainContentOpacity=c)}else parseInt(a)<=1&&(this.customNavbarData.backgroundOpacity="1",this.customNavbarData.mainContentOpacity="1",this.disableNavTab=!1)}s>1e3&&!i?(this.flags.showBackToTopFlag=!0,this.floatShareAnimation="animationToTop"):s<=1e3&&i&&(this.flags.showBackToTopFlag=!1,this.floatShareAnimation="animationToBottom"),this.handleTjTuanBottomShow(),this.handleLaunchBtnAnimation(s)},setScrollUnderMainImgFlag:function(e){this.flags.scrollUnderMainImgFlag=e},handleTjTuanBottomShow:function(){var e=this,t=this.detail.pingouInfo;if((void 0===t?{}:t).tjTuanInfo){var i=this.createSelectorQuery();if(i){var r=this.data.windowHeight.replace(/\D/g,"");i.select(".tuan_recommend_warp").boundingClientRect(function(t){if(t&&t.height>0){44>=t.bottom||r-49<t.bottom-(t.height-30)/2?e.flags.tjTuanBottomShow=!0:e.flags.tjTuanBottomShow=!1}else e.flags.tjTuanBottomShow=!0}).exec()}else this.flags.tjTuanBottomShow=!0}},handleLaunchBtnAnimation:function(e){this.flags.showAppFlag&&(e>this.data.windowHeight.replace(/\D/g,"")?this.launchBarAniFlag="1":"1"==this.launchBarAniFlag&&(this.launchBarAniFlag="2"))},back2top:function(){this.flags.showBackToTopFlag=!1,m.default.pageScrollTo({scrollTop:0})},pageShow:function(){var e=this;m.default.JD.events.listen("pageshow",function(){e.loadItemInfo()})},detailError:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setData({"detail.isNormalItem":!0}),this.detail.noSkuSwitch=!0,this.reportPV({mustRport:!0}),this.flags.showSkeletonScreen=!1,this.detail.dontCheckSku=!0;var i={10001:"对不起，该商品不存在",20160304:"对不起，该商品不存在","-10018":"对不起，该商品不存在",20017:"抱歉，小程序内暂不支持购买此商品",default:"对不起，该商品已下架"},r=t.errCode,o=t.msg,a=t.bizRetCode,s=(u.ENV.isXcxEnv?getCurrentPages()||[]:[]).length>1;"20017"==r?(this.flags.showBlurMask=!0,m.default.showModal({content:i[r]||i.default,showCancel:!1,confirmText:"我知道了",success:function(t){s?m.default.navigateBack():u.gotoUrl(e,{xcx:{url:u.ENV.isPingouXcx?"/pages/pingou/index/index":"/pages/index/index"},h5:{url:u.ENV.isMEnv?"https://m.jd.com":u.ENV.isWxEnv?"https://wq.jd.com/wxportal/index_v6":"https://wq.jd.com/sqportal/index_v6"}})}}),"30002"==a&&u.reporter.reportExposure(E.EXP_DRUG_CAN_NOT_BUY)):"10001"==r||"20160304"==r||-10018==r?m.default.showModal({content:i[r]||i.default,showCancel:s,cancelText:"返回",confirmText:"去首页",success:function(t){t.confirm?u.gotoUrl(e,{xcx:{url:u.ENV.isPingouXcx?"/pages/pingou/index/index":"/pages/index/index"},h5:{url:u.ENV.isMEnv?"https://m.jd.com":u.ENV.isWxEnv?"https://wq.jd.com/wxportal/index_v6":"https://wq.jd.com/sqportal/index_v6"}}):m.default.navigateBack()}}):"40000"==r?m.default.showModal({content:""+(o||"活动太火爆了,请稍后重试"),showCancel:!0,cancelText:"取消",confirmText:"刷新重试",success:function(t){t.confirm&&(e.visitedSku[e.skuId]=!0,e.loadItemInfo(e.skuId,{needReport:!0}))}}):m.default.showModal({content:"网络错误，请稍后重试("+(r||"")+")",showCancel:!0,cancelText:"取消",confirmText:"刷新重试",success:function(t){t.confirm&&(e.visitedSku[e.skuId]=!0,e.loadItemInfo(e.skuId,{needReport:!0}))}})},detailBizError:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setData({"detail.isNormalItem":!0}),this.detail.noSkuSwitch=!0,this.reportPV({mustRport:!0}),this.flags.showSkeletonScreen=!1,this.detail.dontCheckSku=!0;var i=t.bizRetCode,r=t.bizMsg||"抱歉，小程序内暂不支持购买此商品",o=(u.ENV.isXcxEnv?getCurrentPages()||[]:[]).length>1,a=t.skuId,s=t.item&&t.item.venderID||"0";"30002"==i?(this.flags.showBlurMask=!0,u.reporter.reportExposure(E.EXP_DRUG_JUMP_HEALTHWXAPP_ALERT),m.default.showModal({content:r,cancelText:"暂不",confirmText:"立即打开",success:function(i){i.confirm?(m.default.navigateToMiniProgram({appId:"wx862d8e26109609cb",path:"pages/product/product?wareId="+a+"&venderId="+s,envVersion:"release",complete:function(){e.detailBizError(t)},success:function(){u.reporter.reportClick(E.CLICK_DRUG_JUMP_HEALTHWXAPP_ALERT_SUCCESS)},fail:function(){u.reporter.reportClick(E.CLICK_DRUG_JUMP_HEALTHWXAPP_ALERT_FAIL)}}),u.reporter.reportClick(E.CLICK_DRUG_JUMP_HEALTHWXAPP_ALERT_OPEN)):(o?m.default.navigateBack():u.gotoUrl(e,{xcx:{url:u.ENV.isPingouXcx?"/pages/pingou/index/index":"/pages/index/index"}}),u.reporter.reportClick(E.CLICK_DRUG_JUMP_HEALTHWXAPP_ALERT_NOT))}})):m.default.showModal({content:r,showCancel:!1,confirmText:"我知道了",success:function(t){o?m.default.navigateBack():u.gotoUrl(e,{xcx:{url:u.ENV.isPingouXcx?"/pages/pingou/index/index":"/pages/index/index"}})}})},gotoAd:function(e){var t=Object.keys(e.currentTarget.dataset).length?e.currentTarget.dataset:e.detail.currentTarget.dataset,i=t.url,r=t.type,o=t.id,a=t.position,s=t.clickrd;s&&u.reporter.reportClick(s),"ad"==a&&(N.default.setChangeRef(!0),u.reporter.reportClick(E.DETAIL_NAME_AD)),o?"shop"==r?u.gotoUrl(this,{xcx:{url:"/pages/shop/index/index",params:{venderId:o}},h5:{url:i}}):u.gotoUrl(this,{xcx:{url:"/pages/item/detail/detail",params:{sku:o}},h5:{url:i}}):u.gotoUrl(this,{url:i})},showMoreAd:function(){var e=this.adStatus;this.adStatus.hideMore=!e.hideMore},goDrop:function(){var e=this.detail,t=e.skuId,i=e.itemType;u.gotoUrl(this,{xcx:{url:"/pages/item/subPackages/pages/pricereduceNotice/index",params:{sku:t,itemType:i}}})},goto:function(e){var t=Object.keys(e.currentTarget.dataset).length?e.currentTarget.dataset:e.detail.currentTarget.dataset,i=t.url,r=t.urltype,o=t.clickrd,a=t.clickrdname;o&&u.reporter.reportClick(o),a&&E[a]&&u.reporter.reportClick(E[a]),"h5"==r&&u.gotoUrl(this,{url:i})},loadListen:function(){var e=this;m.default.JD.events.listen("item.chooseShop.addCart",function(t){e.addToCart(t,"chooseShop")}),m.default.JD.events.listen("item.chooseShop.choose",function(t){e.renderShopAddress(t)}),m.default.JD.events.listen("item.chooseShop.updateShopInfo",function(t){e.renderShopInfo(t)}),m.default.JD.events.listen("item.chooseShop.changeSku",function(t){e.changeSku(t)})},removeListen:function(){m.default.JD.events.remove("item.chooseShop.addCart"),m.default.JD.events.remove("item.chooseShop.choose"),m.default.JD.events.remove("item.chooseShop.updateShopInfo"),m.default.JD.events.remove("item.chooseShop.changeSku")},switchSku:function(e){var t=(e.detail||{}).detail;this.refreshBannerAtmosphere(t)},refreshBannerAtmosphere:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.detail;e.isNormalItem&&(this.bannerAtmosphereObj=s.only(e,["skuId","isYuYue","isQianggou","promomiao","seckillFlag","flashpurchaseFlag","flashpurchase","processType","item","stock","miao","yuyue","tipsContent","oriPrice","jdPrice","canBuy","spAttr","jdCategory","plusFlag","isPlus","price","isPlusZxGou","isPlusZxShop","showPlusZxGouTip","priceObj","suyuanBanner","venderId","isNoStock","plusZxGouYuyueNotPlus","canNotBuyHere"]))},setVisitedSku:function(e){var t=e&&e.detail?e.detail:e;t&&(this.visitedSku[t]=!0)},updateSfpArrowLeft:function(e){this.sfpArrowLeft=e.detail},updateShopFavStatus:function(e){this.shopFavStatus=e.detail},addFavShop:function(){m.default.JD.events.trigger("item.main.addFavShop")},updateVideoStatus:function(e){this.flags.showCoverImgFlag=!(1==e.detail)},onJxLiveClose:function(){this.flags.keepSameLiveVideo=!1},updateAtmosType:function(e){var t=e.detail;this.atmosProcessType=t||0},updateBeltInfo:function(e){var t=this.postPromo;t&&t.showPromoNoticeFlag&&(this.postPromo.showPromoNoticeFlag=!1)},gotoLdp:function(){var e=this.detail.stock.vsc;u.gotoUrl(this,{xcx:{url:"/pages/item/subPackages/pages/ldp/ldp",params:{vsc:e}}})},commonToUrl:function(e){var t=e.currentTarget.dataset,i=t.url,r=t.ptag;i&&u.gotoUrl(this,{url:i}),r&&E[r]&&u.reporter.reportClick(E[r])},initSpecialAtmosData:function(e){var t=e.detail,i=t.specialProcess,r=t.specialProcessStatus,o=t.bottomBtn,a=t.tipsContent;this.specialProcess=i,this.specialProcessStatus=r,this.bottomBtn=o,this.detail.tipsContent=a,this.goodsNum.maxLimit=1,o&&o[1]&&o[1].price&&this.shareOptions.price&&(this.shareOptions.price=[o[1].price])},handleCountDownOver:function(){var e=this,t=this.skuId;(0,n.createTimeout)(function(){t&&e.loadItemInfo()},500)},showSubscribeInfoTip:function(e){var t=e.currentTarget.dataset.content;t&&I.show({title:"",content:t.replace("\n","<br>"),align:"left",showCancel:!1,confirmText:"我知道了",confirmColor:"#E93B3D"})},refreshPostPromo:function(e){this.postPromo=e.detail},updateCartNum:function(e,t){var i=this;if(e&&!this.isPingouXcx||(e=m.default.JD.cookie.get("cartNum")),e&&(this.cart.num=e),t){var r=parseInt(this.goodsNum.value),o=this.cart,a=m.default.createAnimation({duration:666});a.opacity(1).translateY(-10).step().opacity(0).step(),o.add=r,o.ani=a.export(),this.cart=o,(0,n.createTimeout)(function(){var e=m.default.createAnimation({duration:0});e.opacity(0).translateY(0).step(),i.cart.ani=e.export()},1332)}},handleAddCartFail:function(e,t){var i=this,r=e.detail||t,o=r.code,a=r.num;8969==o?m.default.showModal({content:"购物车已满，您需选择商品清理后才可继续加车",confirmText:"选择商品",confirmColor:"#E93B3D",success:function(e){e.confirm&&i.showLayer("quickClearOptions.show")}}):1001==o&&a&&this.updateCartNum(a,!0)},addToCart:function(e,t){var i=this,r=this.detail,o=r.canBuy,a=r.noSkuSwitch,s=r.isECard,n=r.skuId,c=r.spAttr,l=void 0===c?{}:c,p=r.poolList,h=void 0===p?[]:p,g=r.isLoc,f=r.pingouInfo,v=void 0===f?{}:f,y=this.addedServices,C=this.choseShopId;if(o&&this.checkSku()){if(!a&&!g)return this.setData({skuLayerData:{btnType:"addToCart",buyType:-1},"flags.showSKuLayerActions":!1}),this.flags.showSKuLayerActions=!1,this.skuLayerData.btnType="addToCart",this.skuLayerData.buyType=-1,this.handleLayer("sku",!0),void u.reporter.reportExposure(E.LAYER_SKU_TWO_CONFIRM_EXP);var I=this.goodsNum.value||1,T="";h.length&&(T=this.detail.poolFlag?h[0].selectedArr&&h[0].selectedArr.map(function(e){return e.sid+"|"+e.num}).join("_")||"":h.reduce(function(e,t){return e.concat(t.list.filter(function(e){return e.selected}))},[]).map(function(e){return e.sid+"|"+i.goodsNum.value}).join("_")||"");var k=g&&C?C:"";s?P.checkPinStatus({loginText:"您当前登录的是临时账号，为了您的资产安全，购买礼品卡前请先登录京东账号",switchText:"您当前登录的是临时账号，为了您的资产安全，购买礼品卡前请先切换至您的京东账号",skuId:n,instance:this}).then(function(e){(0,d.addCardList)({pin:e.pin||"",skuId:n,num:i.goodsNum.value||1}).then(function(e){_.show({icon:_.ICON.SUCCESS,content:"加入卡清单成功",page:i}),i.updateCartNum(null,!0)}).catch(function(e){i.us.report(i.us.OP_ITEM_ADD_CART,1,e),_.show({icon:_.ICON.ERROR,content:e&&e.code&&"加入卡清单失败("+e.code+")"||"加入卡清单失败",page:i})})}).catch(function(e){_.show({icon:_.ICON.ERROR,content:"加入卡清单失败",page:i})}):S.addCart({buyNum:I,type:l&&1==l.isXnzt?3:0,sku:n,shopid:k,str:T,services:y},this.detail).then(function(e){"chooseShop"==t?m.default.JD.events.trigger("item.main.addShopCartRes",1):_.show({icon:_.ICON.SUCCESS,content:"加入购物车成功",page:i}),i.updateCartNum(e,!0),m.default.JD.events.trigger("cartrefresh"),i.isCouponSearch}).catch(function(e){"chooseShop"==t?m.default.JD.events.trigger("item.main.addShopCartRes"):e&&"8969"==e.code?_.show({icon:_.ICON.ERROR,content:e.message||"添加购物车失败，请稍后再试",page:i}):_.show({icon:_.ICON.ERROR,content:"添加购物车失败，请稍后再试",page:i})}),u.reporter.reportClick(E.VIEW_ADD_TO_CART,{sku_id:n}),v.isAppZx&&u.reporter.reportClick(E.CLICK_JXAPPZX_ADDCART_BTN)}},getServicesCommList:function(e,t){var i=t.jdServices,r=void 0===i?[]:i,o=t.extServices,a=void 0===o?[]:o,s=t.giftServices,n=void 0===s?[]:s,u={};if(a.length){var c=a.map(function(t){return[t.id,"",e.buyNum||1,e.skuId,1===e.polyType?7:8,e.skuId,0==e.pid?"":e.pid,0].join(",")}).join("$");c&&Object.assign(u,{ybcommlist:c})}if(r.length){var l=e.isVirtualSuit||e.isSuit?e.itemId||"":"",p=r.map(function(t){return[t.id,"","","","",e.skuId,l,e.isVirtualSuit?"suitType:1":""].join(",")}).join("$");p&&Object.assign(u,{jdhscommlist:p})}if(n.length){var d=n.map(function(t){return[e.skuId,"",e.buyNum||1,e.skuId,1,"",0,"",t.id].join(",")}).join("$");d&&Object.assign(u,{commlist:d})}return u},doBuy:function(e){var t=this,i=this.isSpecialProcess,r=this.addedServices,a=this.choseShopId,s=this.specialProcess,n=void 0===s?{}:s,c=this.detail,l=c.canBuy,p=c.noSkuSwitch,d=c.isYuYue,h=c.isQianggou,g=c.poolList,f=void 0===g?[]:g,m=c.spAttr,v=c.skuId,y=c.isECard,C=c.isPingou,I=c.isPingouShop,S=c.pingouInfo,k=c.jdfwj,N=this.goodsNum.value||1,w=!!n.showPresellSellPrice,x=this.isPingouXcx&&I;if(i&&u.reporter.reportClick(E.DETAIL_SUBSCRIBE_SECKILL_BTN),l&&this.checkSku()){if(!(p||d||h||a))return u.reporter.reportExposure(E.LAYER_SKU_TWO_CONFIRM_EXP),this.setData({"skuLayerData.btnType":"buy","flags.showSKuLayerActions":!1}),this.flags.showSKuLayerActions=!1,this.skuLayerData.btnType="buy",void this.handleLayer("sku",!0);if("2"==k)u.gotoUrl(this,{url:"https://m-weixiu.jd.com/settle?sku="+v+"&number="+N});else if(y){var A=T.getAddress().addressId;P.checkPinStatus({loginText:"您当前登录的是临时账号，为了您的资产安全，购买礼品卡前请先登录京东账号",switchText:"您当前登录的是临时账号，为了您的资产安全，购买礼品卡前请先切换至您的京东账号",skuId:v,instance:this}).then(function(e){var i="https://wq.jd.com/pinbind/pintokenredirect?biz=ecard&url="+encodeURIComponent("https://giftcard.jd.com/giftcardpurchase/mIndex?skuNumInfo="+v+","+N+"&clientType=1&addressId="+A)+(x?"&pingouchannel=1":"");u.gotoUrl(t,{url:i})}).catch(function(e){e.message&&_.show({icon:_.ICON.WARNING,content:e.message,page:t})})}else if(this.choseShopId){var L={commlist:[v,this.choseShopId,N,v,"1,0,0"].join(",")};x&&(L.pingouchannel=1),u.gotoUrl(this,{xcx:{url:"/pages/pay/index/index",params:L}})}else{var O="";f.length&&(O=this.detail.poolFlag?f[0].selectedArr&&f[0].selectedArr.map(function(e){return e.sid+"|"+e.num}).join("_")||"":f.reduce(function(e,t){return e.concat(t.list.filter(function(e){return e.selected}))},[]).map(function(e){return e.sid+"|"+t.goodsNum.value}).join("_")||"");var D=this.getServicesCommList({skuId:v,buyNum:this.goodsNum.value},r),b=o({sku:v,num:this.goodsNum.value,zp:O,type:m&&1==m.isXnzt?3:0},D);w&&(b.sourcefrom="presalefixup"),m&&m.isOverseaPurchase&&0!=m.isOverseaPurchase&&(b.category="global"),C&&(b.bizkey="pingou",b.bizval=0),S&&S.limitSingleBuyOne&&(b.fixednum=1),x&&(b.pingouchannel=1),u.gotoUrl(this,{xcx:{url:"/pages/pay/index/index",params:b}})}u.reporter.reportClick(E.VIEW_BUYING,{sku_id:v})}},checkSku:function(){var e=this.getCurrentSelect(),t=this.detail,i=t.newColorSize;if(t.dontCheckSku)return!0;if(!this.checkPropSelect(e,i)){var r=[];return this.skuProps.forEach(function(t){e[t.name]||r.push(t.text.replace("选择",""))}),_.show({icon:_.ICON.WARNING,content:"请选择`"+r.join("/")+"`",page:this}),!1}return!0},onAddrChange:function(){this.loadItemInfo(this.skuId,{needReport:!0,fckr:1}),this.initAddress()},initAddress:function(){var e=this,t=T.getAddress(),i=t.addressName,r=t.areaId,o=t.addressId,a=y.isLogin(),s=m.default.JD.cookie.get("wq_addr"),n=T.getAddress().areaName,u=void 0===n?"":n;u=u.replace(/_/g,"");var c=function(){var t=i||u;e.addressData.address&&e.addressData.address!=t&&(e.visitedSku[e.skuId]=!0,e.loadItemInfo(e.skuId,{needReport:!0,fckr:1})),e.addressData.address=t,e.addressData.areaId=r,e.addressData.addressId=o};a&&!s?(0,d.addressList)().then(function(t){var i=t.list||[],r=i.find(function(e){return 1==e.default_address});if(r=r||i[0]){var o=[r.provinceId,r.cityId,r.countyId,r.townId].join("_"),a=[r.provinceName,r.cityName,r.countyName,r.townName].join("_"),s=r.adid,n=r.addrfull,u=[r.type,r.longitude,r.latitude].join(",");e.addressData.address=n,e.addressData.areaId=o,e.addressData.addressId=s,e.addressData.addressList=i,T.updateAddress({addressId:s,areaId:o,areaName:a,addressName:n,coordinate:u}),e.isNeedRegainStock=!0}else c()}).catch(function(){c()}):c()},showAddressLayer:function(e){u.reporter.reportExposure(E.DETAIL_ADDRESS_LAYER_EXP),this.handleLayer("address",!0)},switchAddress:function(e){var t=e.detail,i=t.adid,r=t.addressName,o=t.addressId,a=t.areaId;i?(this.addressData.address=r,this.addressData.areaId=a,this.addressData.addressId=o,this.loadItemInfo(this.skuId,{needReport:!0,fckr:1}),m.default.JD.events.trigger("cartrefresh"),m.default.JD.events.trigger("item.adderss.switch",a)):this.onAddrChange()},closeAddressLayer:function(e){this.handleLayer("address",!1)},changeCpart:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.detail||t,r=i.cpart,o=i.rid,a=void 0===o?"":o,s=this.detail.isPingou;"comment"==r?u.getScrollTop().then(function(t){D=t,e.commentRid=a,e.cpart=r,e.customNavbarData.isCustomCapsuleLeft=!0,s&&(e.flags.tjTuanBottomShow=!0),e.setData({cpart:r,commentRid:a,cpartChanging:!0}),(0,n.createTimeout)(function(){e.setData({cpartChanging:!1})},500)}):(this.cpart=r,this.customNavbarData.isCustomCapsuleLeft=!1,this.setData({cpart:r}),m.default.pageScrollTo({scrollTop:D,duration:0}),D=0)},handleLayer:function(e,t){t?(this.layer[e].show=!0,this.setData(r({},"layer."+e+".show",!0)),this.fixedPage()):(this.layer[e].show=!1,this.setData(r({},"layer."+e+".show",!1)),this.unFixedPage())},showLayer:function(e){var t=(Object.keys(e.currentTarget.dataset).length?e.currentTarget.dataset:e.detail.currentTarget.dataset).type;if("sku"==t&&(this.setData({skuLayerData:{btnType:"",buyType:0},"flags.showSKuLayerActions":!0}),this.flags.showSKuLayerActions=!0,this.skuLayerData.btnType="",this.skuLayerData.buyType=0,u.reporter.reportClick(E.SKU_FLOOR_VIEW)),"factory"==t){u.reporter.reportClick(E.CLICK_FACTORYSUPPLY);var i=this.detail.pingouInfo,r=void 0===i?{}:i;r.factorySupply&&r.factorySupply.isIndustry&&u.reporter.reportExposure(E.EXP_INDUSTRY_LAYER),r.factorySupply&&r.factorySupply.hasIndustryVideo&&u.reporter.reportClick(E.CLICK_FACTORY_ROW_WITH_VIDEO),r.factorySupply&&r.factorySupply.isPlaceStraight&&u.reporter.reportExposure(E.EXP_PLACESTRAIGHT_LAYER)}"easeBuy"==t&&3==this.layer.easeBuy.relaxType&&u.reporter.reportClick(E.CLICK_FXG_ZY_QY),"jxappExclusive"==t&&u.reporter.reportClick(E.CLICK_JXAPP_EXCLUSIVE_FLOOR),this.handleLayer(t,!0)},closeJingzaoLayer:function(){this.handleLayer("jingzao",!1)},closeFactoryLayer:function(){this.handleLayer("factory",!1)},closeEaseBuyLayer:function(){this.handleLayer("easeBuy",!1)},showDiscountLayer:function(e){var t=e.detail||{},i=t.promote,r=t.promotePacks,o=t.parallelPromote;i&&(this.layer.discount.promoteContent=JSON.parse(JSON.stringify(i||[]))),r&&(this.layer.discount.promotePacks=JSON.parse(JSON.stringify(r||{}))),o&&(this.layer.discount.parallelPromote=JSON.parse(JSON.stringify(o||[]))),this.handleLayer("discount",!0)},showPgDiscountLayer:function(e){this.layer.discount.jxAppCoupon&&(u.reporter.reportClick(E.CLICK_APP_COUPON_ROW),u.reporter.reportExposure(E.EXP_APP_COUPON)),this.handleLayer("discount",!0)},closeDiscountLayer:function(){this.handleLayer("discount",!1)},closeJxappExclusiveLayer:function(){this.handleLayer("jxappExclusive",!1)},closeServiceLayer:function(){this.handleLayer("service",!1)},closeSkuLayer:function(e){this.handleLayer("sku",!1);var t=(e.detail||e).params,r=void 0===t?{}:t,o=r.sku,a=r.num,s=r.addedServices;s&&s.extServices&&(this.addedServices=s,this.checkedServiceList=[].concat(i(s.extServices),i(s.jdServices),i(s.giftServices))),a&&(this.goodsNum.value=a),o&&this.skuId!=o&&(this.skuId=o,this.detail.isLoc&&this.renderShopAddress(),this.loadItemInfo(o),this.flags.showReturnAppBtnFlag=!1,this.isPingouXcx?this.setPgappLauchConfig():this.flags.forbidAppDetailNavigate&&(this.reviewAppParameter=(0,c.getAppSchema)("item",{skuId:o,source:"wxapp_review"}),this.answerAppParameter=(0,c.getAppSchema)("item",{skuId:o,source:"wxapp_qa"}),this.imkParam.skuId=o))},closeGlobalServiceLayer:function(){this.handleLayer("globalService",!1)},onJxVipHide:function(e){e&&e.detail&&1==e.detail.vipStatus&&(this.detail.jxviplabel&&(this.detail.jxviplabel.isVIP=1),this.visitedSku[this.skuId]=!0,this.loadItemInfo(this.skuId)),this.unFixedPage()},showTaxInfoTip:function(e){var t=this.detail.taxTxt;t&&I.show({title:t.title.replace(/：/g,""),content:t.detail.replace("\r\n","<br><br>"),align:"left",showCancel:!1,confirmText:"知道了",confirmColor:"#E93B3D"})},showGwfxTips:function(){var e=this,t=this.detail.gwfxInfo,i=t.rulesTitle,r=t.rulesContent;i&&r?(I.show({title:i,content:r,align:"left",showCancel:!1,confirmText:"知道了",confirmColor:"#FF4142",complete:function(){this.unFixedPage()}}),this.fixedPage(),u.reporter.reportClick(E.EXP_FANXIAN_PRICE_I)):(0,d.getPpmsData)("_specText").then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(t=t.filter(function(e){return"gouwufanxian"===e.textId})).length&&(e.detail.gwfxInfo||(e.detail.gwfxInfo={}),e.detail.gwfxInfo.rulesTitle=t[0].textTitle||"活动规则",e.detail.gwfxInfo.rulesContent=t[0].textContent||"",e.showGwfxTips())})},showKernelPropsInfo:function(e){var t=e.detail.propsList,i=void 0===t?[]:t;this.layer.kernelProps.content=i,this.handleLayer("kernelProps",!0)},closeKernelPropsLayer:function(){this.handleLayer("kernelProps",!1)},handleSuyuanIconClick:function(){var e=this.detail,t=e.suyuanUrl,i=e.isPingou;t&&u.gotoUrl(this,{url:t}),i?u.reporter.reportClick(E.CLICK_SUYUAN_ICON):u.reporter.reportClick(E.CLICK_SUYUAN_BANNER)},handleDrawAfterDiscount:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.detail||t,r=i.indexList,o=void 0===r?[]:r,a=i.index,s=void 0===a?0:a;this.layer&&this.layer.discount&&this.layer.discount.guideCanGetCoupons&&this.layer.discount.guideCanUseCoupons&&(o.length?(o.sort(function(e,t){return t-e}),o.forEach(function(t){e.handleDrawAfterDiscount({index:t})})):(this.layer.discount.guideCanGetCoupons[s].didGet=!0,this.layer.discount.guideCanUseCoupons.unshift(this.layer.discount.guideCanGetCoupons[s]),this.layer.discount.guideCanGetCoupons.splice(s,1)))},refreshDiscountPg:function(e){var t=e.detail||{},i=t.normalCoupons,r=void 0===i?[]:i,o=t.guideCanGetCoupons,a=void 0===o?[]:o,s=t.guideCanUseCoupons,n=void 0===s?[]:s,u=t.normalPromotes,c=void 0===u?[]:u,l=t.guideCanUsePromotes,p=void 0===l?[]:l,d=t.suitPacks,h=void 0===d?{}:d,g=t.afterDiscountBenfit,f=void 0===g?{}:g;this.layer.discount.guideCanGetCoupons=JSON.parse(JSON.stringify(a)),this.layer.discount.guideCanUseCoupons=JSON.parse(JSON.stringify(n)),this.layer.discount.guideCanUsePromotes=JSON.parse(JSON.stringify(p)),this.layer.discount.couponContent=JSON.parse(JSON.stringify(r)),this.layer.discount.promoteContent=JSON.parse(JSON.stringify(c)),this.layer.discount.promotePacks=JSON.parse(JSON.stringify(h)),this.afterDiscountBenfit=JSON.parse(JSON.stringify(f))},refreshCoupon:function(e){var t=e.detail;this.layer.discount.couponContent=JSON.parse(JSON.stringify(t||[])),this.shareOptions.coupons=JSON.parse(JSON.stringify(t||[]))},refreshJxappCoupon:function(e){var t=e.detail;this.layer.discount.jxAppCoupon=JSON.parse(JSON.stringify(t||{}))},drawCoupon:function(e,t){var i=this,r=e.detail,a=void 0;a=t?t.roleId:r.currentTarget.dataset.roleid;var s=t||r.currentTarget.dataset,n=s.get,c=s.key,l=s.index,p=s.type,h=s.isjt,g=s.isJxNewer,f=s.klCopySucText,C=void 0===f?"":f,I=s.klCopyFailText,T=void 0===I?"":I,k=s.isguide;if(n||!c||!a)return!1;if(g){var N=a.split("-");if(N.length<=1)return!1;if(!t&&!y.isLogin()){var w=this.layer.discount.couponContent.filter(function(e){return e.isJxNewer});v.set("item:jxNewerCoupon",w),m.default.JD.cookie.set("jxnewer_coupon_login",1,10)}(0,d.jxNewerActiveDraw)({active:N[0],level:N[1]}).then(function(e){var r=e.retcode,a=e.errmsg,s=void 0===a?"领券失败，请稍后重试":a,n=e.bingolevel;if(0==r&&n>0){if(t)if(m.default.JD.cookie.get("jxnewer_coupon_login"))_.show({icon:"none",content:"领取成功",page:i}),i.visitedSku[i.skuId]=!0,i.loadItemInfo(i.skuId);else{var c=i.detail.newerLayer;c.popLayerUrl?(c.show=!0,i.detail.newerLayer=o({},c),u.reporter.reportExposure(E.EXP_JXNEWER_COUPON_TOAST_SEND)):(i.visitedSku[i.skuId]=!0,i.loadItemInfo(i.skuId))}else _.show({icon:"none",content:"领取成功",page:i}),i.visitedSku[i.skuId]=!0,i.loadItemInfo(i.skuId);var l=i.layer.discount.couponContent&&i.layer.discount.couponContent.findIndex(function(e){return e.isJxNewer});l>=0&&(i.layer.discount.couponContent[l].didGet=!0)}else t&&!m.default.JD.cookie.get("jxnewer_coupon_login")||_.show({icon:"none",content:s}),!t&&i.detail.newerLayer&&3==i.detail.newerLayer.popLayerType&&(i.visitedSku[i.skuId]=!0,i.loadItemInfo(i.skuId));i.hasShowedNewerLayer1=!0,m.default.JD.cookie.del("jxnewer_coupon_login"),v.remove("item:jxNewerCoupon")})}else if("jxviplabel"==c)this.closeDiscountLayer(),this.selectComponent("#jxvip-buy")&&(this.selectComponent("#jxvip-buy").show(),this.fixedPage(),u.reporter.reportClick(E.CLICK_JXVIP_OPEN));else if("jxAppCoupon"==c){var x=a.split("-");if(x.length<=1)return!1;(0,d.obtainjxAppCoupon)({active:x[0],level:x[1]}).then(function(e){var t=e.retcode,r=(e.errmsg,{"<0":"网络开小差了,请稍后再试",1:"网络开小差了,请稍后再试",103:"活动还没开始哟",104:"活动已经结束了",147:"活动太火爆,去看看其它活动吧",1e3:"网络开小差了,请稍后再试",1001:"您已经领过啦",1002:"活动太火爆，没抢到",1003:"活动太火爆，没抢到",default:"领券失败,请稍后再试"});switch(t){case 0:i.layer.discount.jxAppCoupon.didGet=!0,i.closeDiscountLayer(),i.klCopyConfigParam.klCopySucText=C.split("%"),i.klCopyConfigParam.klCopyFailText=T.split("%"),i.handleKlDownload(null,{klCopyType:"coupon",klCopyTitle:"领券成功"}),u.reporter.reportExposure(E.EXP_APP_COUPON_GET),u.reporter.reportExposure(E.EXP_APP_COUPON_KL);break;default:_.show({icon:"none",content:t<0?r["<0"]:r[t]||r.default})}}).catch(function(){_.show({icon:"none",content:"领券失败，请稍后重试",page:i})}),u.reporter.reportClick(E.CLICK_APP_COUPON)}else if("couponPool"==c){var A=a.split("-");if(A.length<=1)return!1;(0,d.activeDraw)({active:A[0],level:A[1]}).then(function(e){var t=e.ret,r=e.retmsg,o=void 0===r?"领券失败，请稍后重试":r;switch(t){case 0:_.show({icon:"none",content:"领取成功",page:i}),k?i.handleDrawAfterDiscount({index:l}):i.layer.discount.couponContent[l].didGet=!0;break;case 3:case 4:_.show({icon:"none",content:"您已经领取过了哦"}),i.layer.discount.couponContent[l].didGet=!0;break;case 26:case 147:_.show({icon:"none",content:"领券的人有点多，请稍后再试"});break;case 19:_.show({icon:"none",content:"小伙伴太热情，券已被抢光了"});break;case 199:_.show({icon:"none",content:"抱歉，该优惠券只限新用户领取"});break;default:_.show({icon:"none",content:o})}}).catch(function(){_.show({icon:"none",content:"领券失败，请稍后重试",page:i})})}else{var L={999:"领取成功！优惠券将在1分钟内到账。",14:"您已经领取过此优惠券。",15:"您今天已经参加过此活动，请明天再试。",16:"此券今日已经被领完，请明天再来~",17:"此券已经被领完了，下次记得早点来哟~",12:"您的账户级别稍微有点低，需再接再厉哟~",22:"当前领券排队人数太多，请稍晚再尝试领取。",18:"您提交过于频繁，请30秒后再试！",default:"活动太火爆，请您一会再来吧！"};P.checkPinStatus({loginText:"您当前登录的是临时账号，为了您的资产安全，请先登录京东账号",switchText:"您当前登录的是临时账号，为了您的资产安全，请先切换至您的京东账号",skuId:this.skuId,instance:this}).then(function(e){(0,d.obtainFreeCoupon)({sceneid:33,key:c,roleid:a}).then(function(e){34===e.code?S.verifyAuth().then(function(e){if(0==e.retcode&&e.url){i.gobackCertifictionFlag=!0,i.drawCouponEv=r;var t=e.url;u.gotoUrl(i,{url:t})}else _.show({icon:"none",content:L.default})}):54===e.code?m.default.showModal({title:"",content:"亲爱的用户，此券只有实名认证用户才可以领取哦~",cancelText:"稍后再说",confirmText:"实名认证",confirmColor:"#E93B3D",success:function(e){e&&e.confirm&&u.gotoUrl(this,{url:"https://msc.jd.com/auth/loginpage/wcoo/toAuthPage?source=15&businessType=726"})}.bind(i)}):(_.show({icon:"none",content:L[e.code]||e.message||L.default,page:i}),999==e.code||14==e.code||15==e.code?k?i.handleDrawAfterDiscount({index:l}):i.layer.discount.couponContent[l].didGet=!0:u.reporter.reportClick(E.DETAIL_COUPON_FAIL),999==e.code&&(3==p&&u.reporter.reportClick(E.DETAIL_DISCOUNT_SUCC),28==p?(u.reporter.reportClick(E.SUCC_COUPON_FLOAT_MM),h&&u.reporter.reportClick(E.SUCC_COUPON_FLOAT_MMJT)):u.reporter.reportClick(E.DETAIL_COUPON_SUCC)))}).catch(function(e){_.show({icon:"none",content:L.default}),u.reporter.reportClick(E.DETAIL_COUPON_FAIL)})})}28==p?(u.reporter.reportClick(E.CLICK_COUPON_FLOAT_MM),h&&u.reporter.reportClick(E.CLICK_COUPON_FLOAT_MMJT)):u.reporter.reportClick(E.VIEW_COUPON)},handleBindingClick:function(e){var t=e.detail.currentTarget.dataset,i=t.sceneid,r=t.activeid,o=t.level;this.gobackCheckBindingFlag=!0,u.reporter.reportClick(E.DETAIL_BINDING_COUPON_BTN),this.closeDiscountLayer(),u.gotoUrl(this,{xcx:{url:"/pages/my_pages/accountv2/index",params:{returnUrl:encodeURIComponent("/pages/item/detail/detail?sku="+this.detail.skuId),sceneid:i,ptag:(this.isPingouXcx,"138268.6.21"),activeid:r,activeLevel:o,navBackType:"navigateBack"}}})},checkCertifiction:function(){var e=this;this.gotoCertifictionFlag&&(this.gotoCertifictionFlag=!1,S.verifyAuth().then(function(t){t.status;0==t.retcode&&e.render(e.detail.skuId)})),this.gobackCertifictionFlag?(this.gobackCertifictionFlag=!1,S.verifyAuth().then(function(t){var i=t.status;t.retcode;if(1==i){var r=e.drawCouponEv;r&&e.drawCoupon(r)}else _.show({icon:"WARNING",content:"未完成实名认证，领券失败",page:e})})):this.gobackCheckPinFlag&&(this.gobackCheckPinFlag=!1,P.getPinStatus().then(function(t){if(0==t.json.defaultFlag){var i=e.drawCouponEv;i&&e.drawCoupon(i)}}))},certifiction:function(e){var t=e.detail.currentTarget.dataset,i=t.url,r=t.status;if(this.gotoCertifictionFlag=!0,0==r)u.gotoUrl(this,{url:i});else{var o={returnUrl:encodeURIComponent("/pages/item/detail/detail?sku="+this.detail.skuId),sceneid:this.isPingouXcx?"711394781":"521194460",ptag:(this.isPingouXcx,"138268.6.21"),navBackType:"navigateBack"};u.gotoUrl(this,{xcx:{url:"/pages/my_pages/accountv2/index",params:o}})}},calcSkuForEachProp:function(e){var t=this,i=e||this.skuProps,o=this.getCurrentSelect(i);Array.isArray(i)&&(i.forEach(function(e){var i=[];e.value.forEach(function(a){var s={};Object.assign(s,o,r({},e.name,a)),e.isSizeGuideShow&&t.$report("EXP_SIZE_GUIDE");var n=u.getSpecifySku(s,t.detail.newColorSize);i.push(n.join("|"))}),e.sku=i}),this.skuProps=i)},checkPropSelect:function(e){var t="";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach(function(i){if(i&&!t){var r=!0;for(var o in e)e[o]!=i[o]&&(r=!1);t=r?i.skuId:""}}),!!t},handleChangeSku:function(e){var t=e.detail.sku;this.skuId!=t&&(this.skuId=t,this.loadItemInfo(t,{needReport:!0}))},changeSku:function(e){var t=e.currentTarget?e.currentTarget.dataset:e,i=t.idx,o=t.sku,a=t.name,s=(e.currentTarget?e.currentTarget.dataset:e).val;if(o){var n=this.getCurrentSelect();s==n[a]&&(s=""),this.setData(r({},"skuProps["+i+"].current",s)),this.calcSkuForEachProp(),this.updateCurrentSelect(),n=this.getCurrentSelect();var c=this.detail.newColorSize;1==o.split("|").length&&this.checkPropSelect(n,c)&&o!=this.detail.skuId&&(this.skuId=o,this.loadItemInfo(o)),u.reporter.reportClick(E.VIEW_GOODS_PROPERTY)}},getCurrentSelect:function(e){var t={};return e||(e=this.data.skuProps),e.forEach(function(e){t[e.name]=e.current}),t},updateCurrentSelect:function(){var e=[];this.skuProps.forEach(function(t){t.current&&t.value.length>=1&&e.push(t.current)}),this.curSelectedText=e.join("，")},setNavbarInfo:function(e){var t=this,i=e.detail,r=i.isSupportNav,o=void 0!==r&&r,a=i.navHeight,s=void 0===a?0:a,n=i.mainContentWidth,c=void 0===n?0:n,l=i.mainContentHeight,p=void 0===l?0:l,d=i.capsuleHeight,h=void 0===d?32:d,g=i.capsuleMarginTop,f=void 0===g?0:g;this.$nextTick().then(function(){t.navHeightGot=!0,t.navHeight=s,t.isSupportNav=o,t.searchBarHeight=h,t.searchBarMarginTop=f,t.navContentHeight=p,t.navMaxWidth=c>0?c-8+"px":"auto";var e=s-p;t.isNotchScreen=e>=44||"android"==u.ENV.platform&&e>24,t.statusBarHeight=e,t.itemNavBaseTop=2*s+64+20})},scrollNav:function(){var e=this,t=this.navHeight+(this.flags.showSearchBar||this.flags.showJxSearchBar?38:0),i=parseInt(t);m.default.createSelectorQuery().selectAll(".Jrolling").boundingClientRect(function(t){var r=e.data.navCur;t.length&&(t[3]&&t[3].top<=i?r!=t[3].id&&(e.navCur=t[3].id):t[2]&&t[2].top<=i?r!=t[2].id&&(e.navCur=t[2].id):t[1]&&t[1].top<=i?r!=t[1].id&&(e.navCur=t[1].id):t[0]&&t[0].top<=i&&r!=t[0].id&&(e.navCur=t[0].id))}).exec()},navScrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this.navHeight+(this.flags.showSearchBar||this.flags.showJxSearchBar?38:0),o=parseInt(r);if(u.ENV.isXcxEnv)m.default.createSelectorQuery().selectViewport().scrollOffset(function(r){m.default.createSelectorQuery().select("#"+e).boundingClientRect(function(e){r&&e&&m.default.pageScrollTo({scrollTop:e.top+r.scrollTop-o+1+i,duration:t})}).exec()}).exec();else{var a=(document.getElementById(e)&&document.getElementById(e).offsetTop||0)-o;a=a<0?0:a+.5,m.default.pageScrollTo({scrollTop:a,duration:0})}},handleNavTabClick:function(e){var t=this.detail.isPingou;if(!this.disableNavTab){var i=e.target.dataset.dtype;switch(i){case"navItem":this.navScrollTo("navItem"),u.reporter.reportClick(t?E.CLICK_NAV_GOODS:E.DETAIL_NAV_TAB_GOODS);break;case"navComment":this.navScrollTo("navComment"),u.reporter.reportClick(t?E.CLICK_NAV_COMMENT:E.DETAIL_NAV_TAB_COMMENT);break;case"navDetail":this.navScrollTo("navDetail"),u.reporter.reportClick(t?E.CLICK_NAV_DETAIL:E.DETAIL_NAV_TAB_DETAIL);break;case"navGuess":this.navScrollTo("navGuess"),u.reporter.reportClick(t?E.CLICK_NAV_REC:E.DETAIL_NAV_TAB_RECOMMEND)}this.navCur=i}},handleShareBtnClick:function(){this.detail.isPingou&&u.reporter.reportClick(E.CLICK_SHARE_BTN_PG),u.ENV.isPingouXcx&&u.reporter.reportClick(E.CLICK_JX_SHARE_BTN),this.handleLayer("share",!0)},handleHeaderShareBtnClick:function(){u.reporter.reportClick(E.CLICK_HEADER_SHARE_BTN_PG)},closeShareLayer:function(e){this.hideSharePannel=!1,this.handleLayer("share",!1)},gotoSearchList:function(){u.reporter.reportClick(E.CLICK_SEARCH_BAR),u.gotoUrl(this,{xcx:{url:u.ENV.isPingouXcx?"/pages/pingou_second/search/search":"/pages/search/list/list"}})},onShowShareDetail:function(){this.hideSharePannel=!0,this.handleLayer("share",!0),this.triggerShowShareDetail++},handleSensitive:function(e){this.flags.forbidSensitiveInfo=!(!e||!e.detail)},handleComment:function(e){var t=e&&e.detail,i=t.launch,r=t.favorablerate;this.flags.commentLaunch=!!i,this.favorablerate=r||0},goToKanjiaPage:function(){var e=this.kanjiaData.ddwActId,t=this.detail.skuId,i="https://wqs.jd.com/wxsq_project/kj_sksm/index/index.html?kj_active_id="+e+"&kj_sku="+t;u.gotoUrl(this,{xcx:{url:"/pages/events/kj_sksm/index/index",params:{kj_active_id:e,kj_sku:t}},h5:{url:i}})},onDialogConfirm:function(e){this.dialog.onConfirm&&this.dialog.onConfirm(e.detail)},onDialogCancel:function(e){this.dialog.onCancel&&this.dialog.onCancel(e.detail)},hideDialog:function(){this.dialog.show=!1},showDialog:function(e){this.dialog=e.detail},chooseShop:function(e){var t=this.favorablerate>0?"&favorablerate="+this.favorablerate:"",i=this.detail,r=i.venderId,o=i.skuId,a=i.spAttr,s=i.focusImages,n=i.canBuy,c=i.isSubscribeCar,l=i.locAddCartDirect,p=i.itemType,d=a.locGroupId,h={venderId:r,sku:o,locGroupId:d,priceObj:this.itemPriceObj,skuProps:this.data.skuProps,goodsNum:this.goodsNum,image:s?"https://m.360buyimg.com/n1/s750x750_"+s[0]:"",isNullStock:!n},g=encodeURIComponent(JSON.stringify(h));if(e&&e.detail){var f=e.detail.currentTarget.dataset,m=f.locationid,v=f.address,y=f.id;r&&o&&d&&u.gotoUrl(this,{xcx:{url:"/pages/item/subPackages/pages/chooseShop/chooseShop?trans="+g+"&locationid="+(m||"")+"&address="+(v||"")+"&id="+(y||"")+"&isSubscribeCar="+c+"&locAddCartDirect="+l+"&showArrivalNotice="+this.flags.showArrivalNoticeFlag+"&itemType="+p+t}},"","navigateToByForce")}else r&&o&&d&&u.gotoUrl(this,{xcx:{url:"/pages/item/subPackages/pages/chooseShop/chooseShop?trans="+g+"&isSubscribeCar="+c+"&locAddCartDirect="+l+"&showArrivalNotice="+this.flags.showArrivalNoticeFlag+"&itemType="+p+t}},"","navigateToByForce")},showLocTipInfo:function(){m.default.showModal({title:"服务及购买流程",content:"该商品是非实物商品，商品价格因门店而定，您需先选择消费门店后才可提交购买，购买后将获得短信凭证，在对应商家线下门店出示该凭证即可享受相关权益",showCancel:!1,confirmText:"知道了",confirmColor:"#E93B3D"})},renderShopAddress:function(e){var t=this.itemPriceObj&&this.itemPriceObj.priceObj&&this.itemPriceObj.priceObj.price||"";e?(this.setData({"info.price":e.price?e.price:t,isOfflineHasShop:!!e.id,"addressData.shopDetail":e}),this.choseShopId=e.id):(this.setData({price:t,isOfflineHasShop:!1,"addressData.shopDetail":{}}),this.choseShopId="")},renderShopInfo:function(e){var t=e.goodsNum;this.goodsNum.value=t,this.updateCurrentSelect()},nearLocShop:function(){var e=this,t=this.detail.spAttr,i=(void 0===t?{}:t).locGroupId;wx.getLocation({type:"gcj02",success:function(t){var r=t.longitude,o=t.latitude;(0,d.getNearLocShop)(i,r,o).then(function(t){e.addressData.shopDetail=t})},fail:function(){var t=T.getAddress(),r=t.coordinate,o=t.areaId;if(r){var a=r.split(",");(0,d.getNearLocShop)(i,a[0],a[1]).then(function(t){e.addressData.shopDetail=t})}else if(o){var s=o.split("_"),n=e.detail,u=n.venderId,c=n.spAttr.locGroupId;(0,d.getShopListById)({venderid:u,shopgroupid:c,page:1,addressid:s[1],level:2}).then(function(t){if(t&&t.itemList&&t.itemList[0]){var i=t.itemList[0];e.addressData.shopDetail={locationid:s.slice(0,2).join("-")+"-0",id:i.storeId,name:i.name,addr:i.fullAddress,phone:i.phone}}})}}})},chooseInstallShop:function(){this.handleLayer("sku",!0)},onShareAppMessage:function(e){var t=this.firstScreenMsg||{},i=t.name,r=void 0===i?"":i,o=t.sku,a=t.cover,s=this.detail,n=void 0===s?{}:s,c=n.pingouInfo&&n.pingouInfo.price||n.jdPrice,l=c?"￥"+c+" | "+r:""+r,p=a,d="wxshare";return this.cardShareImageUrl?(p=this.cardShareImageUrl,l=(1==this.wxappType?"[好友推荐]":"")+r,d="wxshare_3",u.reporter.reportClick(E.DETAIL_SHARE_TO_FRIEND_3)):u.reporter.reportClick(E.DETAIL_SHARE_TO_FRIEND),u.reporter.reportClick(E.SHARE_SUCCESS),u.ENV.isPingouXcx&&("menu"==e.from?u.reporter.reportClick(E.CLICK_JX_RIGHT_TOP_SHARE_BTN):e.target&&e.target.id.indexOf("shareBtn")>-1&&u.reporter.reportClick(E.CLICK_JX_SHARE_PANNEL_SHARE_TO_FRIEND_BTN)),{title:l,path:"/pages/item/detail/detail?"+C.querystring({sku:o,name:r,price:c,cover:a,from:d}),imageUrl:p,complete:function(e){this.handleLayer("share",!1)}.bind(this)}},updateCardImage:function(e){var t=e.detail.imageUrl;this.cardShareImageUrl=t},gotoBindPage:function(){var e={returnUrl:encodeURIComponent("/pages/item/detail/detail?sku="+this.detail.skuId),sceneid:this.isPingouXcx?"711394781":"721294561",ptag:(this.isPingouXcx,"138268.6.21"),navBackType:"navigateBack"};u.gotoUrl(this,{url:"/pages/my_pages/accountv2/index",params:e})},gotoSwitchPage:function(){u.gotoUrl(this,{url:"https://wqs.jd.com/my/accountv2.shtml"})},updateLimitBuy:function(e){var t=this,i=e.pingouInfo,r=e.othersData,o=void 0===r?{}:r,a=e.plusLimitBuy,s=200;e.spAttr&&parseInt(e.spAttr.MN)?s=parseInt(e.spAttr.MN)>9999?9999:parseInt(e.spAttr.MN):e.jdCategory&&"1713"==e.jdCategory[0]&&(s=1e3);var n=parseInt(e.spAttr&&e.spAttr.LowestBuy)||1;i&&i.limitBuy&&1!=o.buyType&&i.limitBuy.min&&i.limitBuy.max?this.goodsNum.value=1*i.limitBuy.min||1:i&&i.limitBuyOne&&1!=o.buyType?(this.goodsNum.value=1,this.goodsNum.limit=1,this.goodsNum.limitText=""):i&&i.limitSingleBuyOne&&1==o.buyType?(this.goodsNum.value=1,this.goodsNum.limit=1,this.goodsNum.limitText=""):e.isYuYue||e.isQianggou?(this.goodsNum.maxLimit=1,this.goodsNum.subEnabled=!1,this.goodsNum.addEnabled=!1):e.spAttr&&e.spAttr.LowestBuy&&n>1?(this.goodsNum.value=n,this.goodsNum.limit=n,this.goodsNum.maxLimit=s):this.goodsNum.maxLimit=s;var u="",c="",l="";(e.promov2&&e.promov2[0]&&e.promov2[0].pis||[]).forEach(function(e){for(var t in e)if(3==t){var i=(e.pid||"").split("_");u=i[0],c=i[1];var r={};try{r=JSON.parse(e.customtag)}catch(e){console.warn(e)}l=100*r.p||""}}),(0,d.getLimitBuyInfo)({plusLimitBuy:a,skuId:e.skuId,areaId:T.getUserAddressID(),category:e.jdCategory&&e.jdCategory.join(","),venderId:e.venderId,skuName:e.skuName,promoId:u,promoType:c,promoPrice:l}).then(function(i){var r=i.limitNum,o=i.promotionText,s=i.noSaleFlag,n=i.resultExt,u=void 0===n?{}:n,c=i.plusFlag;r>0&&(t.goodsNum.maxLimit=r),1==s&&t.setData({"detail.noSaleFlag":1,"detail.tipsContent":"该商品在该地区暂不支持销售，非常抱歉！","detail.canBuy":!1,"detail.freight.state":"[无货]","detail.freight.serviceInfo":"该商品在该地区暂不支持销售"}),o&&o.trim()&&(t.promotionText=o);var l=e.isPlusZxShop,p=e.canBuy;a||l||"1"!==u.isPlusLimit||(t.detail.isPlusZxGou=!0,201!=c&&(t.detail.plusZxGouYuyueNotPlus=!0,p&&(t.detail.tipsContent="本活动限PLUS用户专享，开通PLUS即可参与")),t.refreshBannerAtmosphere())})},showModalTips:function(e){var t=Object.keys(e.currentTarget.dataset).length?e.currentTarget.dataset:e.detail.currentTarget.dataset,i=t.type,r=t.content,o="",a="#3CC51F";switch(i){case"openPlusTip":u.reporter.reportClick(E.DETAIL_OPEN_PLUS),o="请到“微信-发现-购物-个人中心”进行PLUS会员开通。";break;case"specialPriceTip":o="近期浏览、关注过该商品或关联商品的用户，有可能被判定为该商品的优惠价专属用户。仅在商品展示“专属价”标签期间，用户能以低于京东价的专属价购买该商品。";break;case"samPriceTip":o="山姆会员店是沃尔玛旗下的高端会员制商店，将山姆会员卡与京东账号绑定后，即可在山姆会员商店官方旗舰店享受会员价购买商品",a="#E93B3D";break;case"subscribe":o=r,a="#E9383D";break;case"samTip":u.reporter.reportClick(E.DETAIL_FOOTER_SAM_BUY),o="请到“微信-发现-购物-个人中心-账号管理-山姆会员”购买Sam's会籍或进行会员绑定。",a="#E9383D"}o&&I.show({title:"",content:o,showCancel:!1,confirmColor:a})},subscribeItem:function(){if(this.checkSku()){var e=this.skuId,t=this.specialProcess,i=void 0===t?{}:t,r=this.detail,o=r.noSkuSwitch,a=r.isPlusZxGou;if(!o&&i.subscribing)return u.reporter.reportExposure(E.LAYER_SKU_TWO_CONFIRM_EXP),this.setData({"skuLayerData.btnType":"subscribe","flags.showSKuLayerActions":!1}),this.flags.showSKuLayerActions=!1,this.skuLayerData.btnType="subscribe",void this.handleLayer("sku",!0);u.gotoUrl(this,{xcx:{url:"/pages/item/subPackages/pages/yuyueResult/index",params:{sku:e}}}),u.reporter.reportClick(E.DETAIL_SUBSCRIBE_BTN),a&&u.reporter.reportClick(E.CLICK_PLUSZX_YUYUE_STATE2)}},plusZxGouOpenPlus:function(e){var t=e.currentTarget.dataset.flag,i=this.detail,r=i.canBuy,o=i.isPlusZxShop,a=i.isYuYue,s=i.isQianggou;r?(u.gotoUrl(this,{url:"https://plus.m.jd.com/open/accountPage#/classic/"}),"plusTip"==t?o?u.reporter.reportClick(E.CLICK_PLUSZXSHOP_OPENTIP):u.reporter.reportClick(E.CLICK_PLUSZX_OPENTIP):o?u.reporter.reportClick(E.CLICK_PLUSZXSHOP_OPENBTN):(u.reporter.reportClick(E.CLICK_PLUSZX_OPENBTN),(a||s)&&u.reporter.reportClick(E.CLICK_PLUSZX_YUYUE_OPENPLUS))):"plusTip"!=t&&(o?u.reporter.reportClick(E.CLICK_PLUSZXSHOP_OPENBTN_GRAY):u.reporter.reportClick(E.CLICK_PLUSZX_OPENBTN_GRAY))},onGotoCustom:function(){var e=this.detail.noSkuSwitch;if(u.reporter.reportClick(E.CLICK_DETAIL_FOOTER_CUSTOMIZE),!e)return this.setData({"skuLayerData.btnType":"custom","flags.showSKuLayerActions":!1}),this.flags.showSKuLayerActions=!1,this.skuLayerData.btnType="custom",void this.handleLayer("sku",!0);this.gotoCustomHandle()},gotoCustomHandle:function(e){var t=this,i=this.goodsNum.value||1,r=this.skuId;e&&e.detail&&(i=e.detail.buyNum,r=e.detail.skuId),(0,d.getCustomUrl)(r,i).then(function(e){var i=e.returl,r=e.errcode;if(!i||0!=r)return h.default.reject();u.gotoUrl(t,{url:"https://wq.jd.com/pinbind/pintokenredirect?biz=ecard&url="+encodeURIComponent(""+i),params:{omitH5Params:!0}})}).catch(function(e){_.show({content:"网络错误，请稍后重试",icon:_.ICON.ERROR})})},specialBuy:function(e){var t=this.detail,i=t.isZiying,r=t.stock,o=t.isPlusZxGou,a=void 0;if(this.checkSku()){r&&r.D?a=r&&r.D&&r.D.type:r&&r.venderType&&"100"==r.venderType?a=100:i&&(a=-1),u.reporter.reportClick(E.DETAIL_BUYING_SPREE_BTN),o&&u.reporter.reportClick(E.CLICK_PLUSZX_YUYUE_STATE4);var s={sku:this.detail.skuId,num:this.goodsNum.value,rcheck:1,category:"miao"};void 0!==a&&(s.venderType=a),u.gotoUrl(this,{xcx:{url:"/pages/pay/index/index",params:s}})}},cdkeyBuy:function(){this.setData({"flags.showBigouInfoTipFlag":!0})},coverGotoH5:function(e){var t=e.currentTarget.dataset,i=t.url,r=t.flag,o=!this.detail.isPlus&&this.detail.isTrialPlus?"CLICK_PLUS_TIP_SHIYONG":"CLICK_PLUS_TIP";switch(r){case"ebook":this.$report("DETAIL_EBOOK_PREVIEW");break;case"alloverimg":this.$report("DETAIL_ALLIMG");break;case"3D":this.$report("DETAIL_3D_IMG");break;case"plus":this.$report(o)}i&&u.gotoUrl(this,{url:i})},updateExtraTips:function(e){var t=e.detail||"";t&&(this.adultTip=t)},initWXSearchFlag:function(){var e=this.detail;!e.canBuy||e.yuyue&&e.yuyue.state<3||e.isOTC?this.flags.showWXSearchFlag=!1:this.wxSearchFlag&&(this.flags.showWXSearchFlag=!0)},gotoCart:function(){var e={};2==this.wxappType&&(e.cartType=this.detail.isPingouShop?"0":"1"),u.gotoUrl(this,{xcx:{url:"/pages/cart/cart/cart",params:e},h5:{url:u.ENV.isMEnv?"https://p.m.jd.com/cart/cart.action":"https://wqs.jd.com/my/cart/jdshopcart.shtml"}}),u.reporter.reportClick(E.VIEW_GO_TO_CART),this.cart.num>0?u.reporter.reportClick(E.CLICK_CART_WITH_NUM):u.reporter.reportClick(E.CLICK_CART_NO_NUM)},loadPingouSpec:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.pingouInfo||{};if(i.isFactorySupply&&i.factorySupply&&(u.reporter.reportExposure(E.EXP_FACTORYSUPPLY),i.factorySupply.isIndustry&&u.reporter.reportExposure(E.EXP_INDUSTRY_FLOOR),i.factorySupply.hasIndustryVideo&&u.reporter.reportExposure(E.EXP_FACTORY_ROW_WITH_VIDEO),i.factorySupply.isPlaceStraight&&u.reporter.reportExposure(E.EXP_PLACESTRAIGHT_FLOOR)),t.pingouActiveEntry&&t.pingouActiveEntry.bannerUrl&&u.reporter.reportExposure(E.EXP_PINGOU_ACTIVE_ENTRY),i.isFactorySupply&&(i.factorySupply.isPlaceStraight&&(this.layer.factory.name="placeStraight",this.layer.factory.title="产地直发服务"),this.layer.factory.content=(i.factorySupply.tips||[]).map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=e.desc,o=e.url,a=e.icon,s="",n="";return a?n=o:s=o,{title:t,text:r,toUrl:s,videoUrl:n,icon:a,flag:i.factorySupply&&i.factorySupply.isIndustry?"isIndustry":"",iconState:!0}})),this.handleJxNewerCoupon(t),t.pgNotice&&t.pgNotice.type)switch(t.pgNotice.type){case 1:u.reporter.reportExposure(E.EXP_BIPIN_NOTICE);break;case 4:u.reporter.reportExposure(E.EXP_GAOFAN_NOTICE);break;case 6:u.reporter.reportExposure(E.EXP_QUANFAN_NOTICE)}if(t.pgBanner&&t.pgBanner.flag)switch(t.pgBanner.flag){case 1:u.reporter.reportExposure(E.EXP_BIPIN_BANNER);break;case 2:u.reporter.reportExposure(E.EXP_BELT_NEWERTUAN);break;case 3:u.reporter.reportExposure(E.EXP_BELT_LANEWERTUAN);break;case 4:u.reporter.reportExposure(E.EXP_BELT_GAOFAN);break;case 5:u.reporter.reportExposure(E.EXP_BELT_BUTIE);break;case 6:u.reporter.reportExposure(E.EXP_BELT_QUANFAN)}i.duoDanFan&&(u.reporter.reportExposure(E.EXP_JXAPP_EXCLUSIVE_FLOOR),u.reporter.reportExposure(E.EXP_JXAPP_EXCLUSIVE_FLOOR_FANXIAN)),i.isNewerNoPin?u.reporter.reportExposure(y.isLogin()?E.EXP_QP_BUY_BTN:E.EXP_QP_BUY_BTN_LOGIN):i.isNewerNoTuan?u.reporter.reportExposure(E.EXP_NEWER_NOTUAN_BTN):i.isNewer?u.reporter.reportExposure(E.EXP_NEWER_KAITUAN_BTN):u.reporter.reportExposure(E.EXP_OLDER_KAITUAN_BTN),(0,n.createTimeout)(function(){e.updateFloatPos(),e.handleTjTuanBottomShow(),t.isPingou&&t.pingouRuleInfo&&t.pingouRuleInfo.pingouRule2&&m.default.createSelectorQuery().select(".pgrule_text").boundingClientRect(function(i){i&&i.height<35&&(e.detail.pingouRuleInfo.pingouRule+="\n"+t.pingouRuleInfo.pingouRule2)}).exec()},1e3)},gotoPingouDetail:function(e){var t=this.detail,i=t.canBuy,r=t.noSkuSwitch,o=t.pingouInfo,a=void 0===o?{}:o,s=t.tipsContent,n=Object.keys(e.currentTarget.dataset).length?e.currentTarget.dataset:e.detail.currentTarget.dataset,c=n.id,l=n.activeid,p=n.tuanid,d=n.masternickname,h=n.tuanlist,g=n.cannotbuyneedalert,f=n.ptagname;if(i&&!a.cannotBuy){if(c?u.reporter.reportClick(E.CLICK_PINGOU_BOTTOM_TIP,{isBottomTip:"1"}):u.reporter.reportClick(E.CLICK_TUAN,{isBottomTip:"0"}),f&&u.reporter.reportClick(E[f],{isBottomTip:"1"}),this.tjTuanInfoCur={activeId:l,tuan_id:p,tuan_owner_nickname:d,tuanList:h},r)return this.startTuan(!0);this.setData({skuLayerData:{btnType:"buy",buyType:3}}),this.skuLayerData.btnType="buy",this.skuLayerData.buyType=3,this.handleLayer("sku",!0),u.reporter.reportExposure(E.LAYER_SKU_TWO_CONFIRM_EXP)}else if("1"==g){var m=a.cannotBuy?a.cannotBuyMsg||"抱歉，该商品暂时无法参团":s||"抱歉，该商品暂时无法参团";I.show({title:"提示",content:m,showCancel:!1,confirmText:"知道啦",confirmColor:"#E93B3D"})}},gotoBuy:function(){u.reporter.reportClick(E.CLICK_PRICE);var e=this.detail,t=e.canBuy,i=e.noSkuSwitch,r=e.pingouInfo,o=void 0===r?{}:r;if(t&&!o.cannotSingleBuy){if(i)return this.doBuy();this.setData({skuLayerData:{btnType:"buy",buyType:1}}),this.skuLayerData.btnType="buy",this.skuLayerData.buyType=1,this.handleLayer("sku",!0),u.reporter.reportExposure(E.LAYER_SKU_TWO_CONFIRM_EXP)}},gotoTuan:function(e){var t=this.detail,i=t.canBuy,r=t.noSkuSwitch,o=t.pingouInfo,a=void 0===o?{}:o;if(i&&!a.cannotBuy){if(u.reporter.reportClick(E.CLICK_GOTO_TUAN),a.isNewerNoPin?u.reporter.reportClick(y.isLogin()?E.CLICK_QP_BUY_BTN:E.CLICK_QP_BUY_BTN_LOGIN):a.isNewerNoTuan?u.reporter.reportClick(E.CLICK_NEWER_NOTUAN_BTN):a.isNewer?u.reporter.reportClick(E.CLICK_NEWER_KAITUAN_BTN):u.reporter.reportClick(E.CLICK_OLDER_KAITUAN_BTN),a.isButie&&u.reporter.reportClick(E.CLICK_BUTIE_OPEN_TUAN),e&&e.detail){var s=(Object.keys(e.currentTarget.dataset).length?e.currentTarget.dataset:e.detail.currentTarget.dataset).ptagname;s&&u.reporter.reportClick(E[s])}if(r)return this.startTuan();this.setData({skuLayerData:{btnType:"buy",buyType:2}}),this.skuLayerData.btnType="buy",this.skuLayerData.buyType=2,this.handleLayer("sku",!0),u.reporter.reportExposure(E.LAYER_SKU_TWO_CONFIRM_EXP)}},startTuan:function(e){var t=this,i=this.addedServices,r=this.detail,c=r.canBuy,l=r.skuId,p=r.pingouInfo,g=void 0===p?{}:p,f=r.spAttr,v=r.isPingouShop;if(c){var y=this.tjTuanInfoCur,C=y.activeId,T=y.tuan_id,S=y.tuan_owner_nickname,P=y.tuanList,N=g.isNewerNoPin?"2":g.isNewerNoTuan?"1":"0",w=e?{skuId:l,activeId:C,tuanId:T,nickname:S,headUrl:P&&P[0].head_portrait_url||"https://img10.360buyimg.com/jdphoto/s100x100_jfs/t1951/176/1222496278/15607/bbb3b2eb/568cdbf0N4d33c2a4.png"}:{skuId:l,isNewerSingleTuan:N};"0"===N||e||(w.tuanId="99999"),u.reporter.reportExposure(E.EXP_START_TUAN);var x=[k.getTuanStatus(w)],A=this.layer&&this.layer.discount&&this.layer.discount.guideCanGetCoupons||[];A.length&&x.push(k.drawAfterDiscountCoupons(A,l)),h.default.all(x).then(function(r){var c=a(r,2),p=c[0],h=c[1];if(p)if(p.active_time_left<=0)I.show({title:"提示",content:"该活动已结束，去看看其他拼购商品吧！",showCancel:!1,confirmText:"知道啦",confirmColor:"#E93B3D"});else if(1!=p.cannot_buy_code){var y=function(){(g.isLimitTuan||g.isNewerTuan)&&g.canMaxBuy<t.goodsNum.value&&(t.goodsNum.value=g.canMaxBuy),g.limitBuy&&(g.limitBuy.max<t.goodsNum.value&&(t.goodsNum.value=g.limitBuy.max),g.limitBuy.min>t.goodsNum.value&&(t.goodsNum.value=g.limitBuy.min));var e=t.getServicesCommList({skuId:l,buyNum:t.goodsNum.value},i),r=o({activeid:p.active_id,sku:Number(l),num:t.goodsNum.value,bizkey:"pingou",bizval:p.biz_value,member:p.tuan_member_count},e);f&&f.isOverseaPurchase&&0!=f.isOverseaPurchase&&(r.category="global"),f&&1==f.isXnzt&&(r.type=3),g&&(g.limitBuyOne||g.limitBuy&&1==g.limitBuy.max)&&Object.assign(r,{fixednum:1}),t.isPingouXcx&&v&&(r.pingouchannel=1),!g||1!=g.pinType&&5!=g.pinType?u.gotoUrl(t,{xcx:{url:"/pages/pay/index/index",params:r}}):m.default.JD.cookie.get("cd_eid")?u.gotoUrl(t,{xcx:{url:"/pages/pay/index/index",params:r}}):(0,d.getNewerTuanSwitch)().then(function(e){if(e){var i=Object.assign({},r,{pindes:p.pid}),o=s.querystring(i);u.gotoUrl(t,{url:"https://wqs.jd.com/my/agreement/eid_page.shtml?"+o})}else u.gotoUrl(t,{xcx:{url:"/pages/pay/index/index",params:r}})}).catch(function(e){u.gotoUrl(t,{xcx:{url:"/pages/pay/index/index",params:r}})})};if(h&&(h.successList.length&&t.handleDrawAfterDiscount({indexList:h.successList.map(function(e){return e.index})}),!h.success||h.failList.length))return m.default.showToast({title:h.failList.map(function(e){return e.desc}).join("、")+"优惠券领取失败，本次无法享受优惠价格",icon:"none",duration:3e3}),void(0,n.createTimeout)(function(){y()},3e3);y()}else I.show({title:"提示",content:p.getTuanStatus_text&&p.getTuanStatus_text.checkPayDialog||"该商品仅限新用户"+(e?"参":"开")+"团哦，再看看其他好货吧~",showCancel:!1,confirmText:"知道啦",confirmColor:"#E93B3D"});else I.show({title:"提示",content:"抱歉，网络跑的有点慢，请稍后重试~",showCancel:!1,confirmText:"知道啦",confirmColor:"#E93B3D"})}).catch(function(i){!(i&&i.isHold)&&_.show({icon:_.ICON.WARNING,content:e?"参团失败，请稍后再试":"开团失败，请稍后再试",page:t})})}},updateFloatPos:function(){var e=this;if(!this.cartPosHasAdjusted){var t=this.createSelectorQuery();t?t.select(".tuan_recommend_warp").boundingClientRect(function(t){if(t&&t.height>0&&t.top>200){var i=t.height,r=t.top,o=e.data.windowHeight.replace(/\D/g,""),a=e.cartPosToBottom,s=e.returnToTopToBottom,n=o-a-45-r+6;n>0&&n<i&&(e.cartPosToBottom=a+n,e.returnToTopToBottom=s+n),e.cartPosHasAdjusted=!0}else e.cartPosHasAdjusted=!0}).exec():this.cartPosHasAdjusted=!0}},launchAppError:function(){console.log("[商详] APP 唤起协议（评论）",this.reviewAppParameter),console.log("[商详] APP 唤起协议（问答）",this.answerAppParameter),this.triggerLaunchErrorCount++},handleLaunchClick:function(){if(this.isPingouXcx)this.showCommentAnswerLaunch=!1,this.unFixedPage(),u.reporter.reportClick(E.COMMENT_ASK_APP_LAUNCH_TOAST_OPEN_CLICK);else{var e=getApp();e.event.emit("commentAskGuideClosed"),this.flags.ylToCustomerServiceFlag&&this.triggerLaunchErrorCount++,u.reporter.reportClick(this.baseSkuId==e.isAppShare.sku?E.COMMENT_ASK_APP_LAUNCH_CLICK:E.COMMENT_ASK_APP_ACROSS_ITEM_LAUNCH_CLICK)}},handleKlDownload:function(e,t){var i=(e&&e.detail&&e.detail.currentTarget&&e.detail.currentTarget.dataset||{}).klCopyType,r="";t&&(i=t.klCopyType,r=t.klCopyTitle);var o=this.detail;"coupon"==i?this.klCopyConfigParam.klCopyType="-1":o.maskSkuConfig?o.isQianggou?this.klCopyConfigParam.klCopyType="1":this.klCopyConfigParam.klCopyType="2":this.klCopyConfigParam.klCopyType="0",this.klCopyConfigParam.klCopyTitle=r;var a=this.skuId;this.klCopyConfig={url:"https://wqitem.jd.com/item/zxview?sku="+a,width:"72",ratio:"65",s:"1"},this.triggerKlDownloadGuideCount++},handleCommentAnswerLaunchClick:function(e){var t=(Object.keys(e.currentTarget.dataset).length?e.currentTarget.dataset:e.detail.currentTarget.dataset).launchType;this.launchType=t,this.showCommentAnswerLaunch=!0,this.fixedPage(),u.reporter.reportExposure(E.COMMENT_ASK_APP_LAUNCH_TOAST_EXP)},closeCommentAnswerLaunchToast:function(e){this.showCommentAnswerLaunch=!1,getApp().event.emit("commentAskGuideClosed"),this.unFixedPage(),e&&u.reporter.reportClick(E.COMMENT_ASK_APP_LAUNCH_TOAST_CLOSE_CLICK)},keepView:function(){"comment"==this.launchType?this.changeCpart({cpart:"comment"}):u.gotoUrl(this,{url:"https://wqs.jd.com/faqs/index.html?productId="+this.detail.skuId}),this.closeCommentAnswerLaunchToast(),u.reporter.reportClick(E.COMMENT_ASK_APP_LAUNCH_TOAST_VIEW_CLICK)},returnAppError:function(){_.show({content:"请前往应用市场或 APP STORE 下载微视APP"})},returnReport:function(){u.reporter.reportClick(E.CLICK_RETURN_TO_WEISHI)},fixedPage:function(){var e=this;u.getScrollTop().then(function(t){e.scrollTop="-"+t+"px",e.setData({scrollTop:"-"+t+"px","flags.forbidScrollFlag":!0})}).catch(function(){e.setData({"flags.forbidScrollFlag":!0})})},unFixedPage:function(){var e=Number(this.scrollTop.match(/\d+/)[0]);0==e?this.setData({"flags.forbidScrollFlag":!1}):(this.setData({"flags.forbidScrollFlag":!1}),this.setData({scrollTop:"0px"}),m.default.pageScrollTo({scrollTop:e,duration:0}))},gotoJdhealthOrder:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail,t=void 0===e?{}:e,i=t.dontShowLayer,r=void 0!==i&&i,o=t.changeBuyNum,a=t.changeSkuId||this.detail.skuId,s=o||this.goodsNum.value||1,n=this.detail,c=n.venderId,l=n.noSkuSwitch;if(u.reporter.reportClick(E.CLICK_GOTO_JDHEALTH_ORDER),!l&&!r)return this.setData({"skuLayerData.btnType":"gotoJdhealthOrder","flags.showSKuLayerActions":!1}),this.flags.showSKuLayerActions=!1,this.skuLayerData.btnType="gotoJdhealthOrder",void this.handleLayer("sku",!0);var p=encodeURIComponent("pages/item/detail/detail?sku="+a);m.default.navigateToMiniProgram({appId:"wx862d8e26109609cb",path:"pages/pay/pay?wareId="+a+"&wareNum="+s+"&venderId="+c+"&returnUrl="+p,envVersion:"release"})},playCommonVideo:function(e){var t=e.detail.videoUrl;t&&(this.commonVideo.url=t,this.commonVideo.show=!0)},stopCmmonVideo:function(){this.commonVideo.show=!1},showVideoToast:function(){var e=this;this.videoToastShow=!0,(0,n.stopTimeout)(this.videoTimeoutId),this.videoTimeoutId=(0,n.createTimeout)(function(){e.videoToastShow=!1},2e3)},jxCouponToastLoad:function(){this.detail.newerLayer.hidden=!1},jxCouponToastBtnClick:function(){"3"!=this.detail.newerLayer.popLayerType?this.closeJxCouponToast():(this.doLogin(),u.reporter.reportClick(E.CLICK_JXNEWER_COUPON_TOAST_LOGIN))},closeJxCouponToast:function(){var e=this.detail.newerLayer;e.show=!1,this.detail.newerLayer=o({},e),2==e.popLayerType&&(this.visitedSku[this.skuId]=!0,this.loadItemInfo(this.skuId))},doLogin:function(){var e=this;y.doLogin({isNeedErrorToast:!0}).then(function(){e.visitedSku[e.skuId]=!0,e.loadItemInfo(e.skuId)})},restoreNewerCouponTimer:function(){var e=this;if(this.needRestoreNewerCouponTimer&&this.newerCouponExpireTime){this.needRestoreNewerCouponTimer=!1,this.newerCouponTimer&&((0,n.stopTimeout)(this.newerCouponTimer),this.newerCouponTimer=null);var t=parseInt(C.getServerTime()/1e3),i=this.newerCouponExpireTime-t;if(i>0){var r=u.getTimeDetail(i);r.hours=24*(r.days-0)+(r.hours-0)+"",r.hours.length<2&&(r.hours="0"+r.hours),this.usefulNewerCouponInfo.remainTime=r;!function t(){e.newerCouponTimer=(0,n.createTimeout)(function(){i--;var r=u.getTimeDetail(i);if(r.hours=24*(r.days-0)+(r.hours-0)+"",r.hours.length<2&&(r.hours="0"+r.hours),e.usefulNewerCouponInfo.remainTime=r,0==i)return e.usefulNewerCouponInfo={},e.visitedSku[e.skuId]=!0,void e.loadItemInfo(e.skuId);t()},1e3)}()}else this.usefulNewerCouponInfo={},this.visitedSku[this.skuId]=!0,this.loadItemInfo(this.skuId)}},handleJxNewerCoupon:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.prizeCoupon,r=void 0===i?{}:i,a=t.newerLayer,s=void 0===a?{}:a,c=r.newerBelong,l=void 0===c?[]:c;if(m.default.JD.cookie.get("jxnewer_coupon_login")&&v.get("item:jxNewerCoupon").then(function(t){e.drawCoupon({},t[0])}),s)if("1"==s.popLayerType){if(s.remainTime>0){var p=m.default.JD.cookie.get("detail_newerLayer_pop_1"),d=m.default.JD.cookie.get("jxnewer_coupon_login");if(!p&&!d&&!this.hasShowedNewerLayer1&&s.popLayerUrl){var h=this.detail.newerLayer;h.show=!0,this.detail.newerLayer=o({},h),m.default.JD.cookie.set("detail_newerLayer_pop_1",1,1440),u.reporter.reportExposure(E.EXP_JXNEWER_COUPON_TOAST_DRAW)}this.hasShowedNewerLayer1=!0;var g=parseInt(C.getServerTime()/1e3);this.newerCouponExpireTime=g+(s.remainTime-0);var f=u.getTimeDetail(s.remainTime);f.hours=24*(f.days-0)+(f.hours-0)+"",f.hours.length<2&&(f.hours="0"+f.hours),this.usefulNewerCouponInfo={remainTime:f},this.newerCouponTimer&&((0,n.stopTimeout)(this.newerCouponTimer),this.newerCouponTimer=null);!function t(){e.newerCouponTimer=(0,n.createTimeout)(function(){s.remainTime--;var i=u.getTimeDetail(s.remainTime);if(i.hours=24*(i.days-0)+(i.hours-0)+"",i.hours.length<2&&(i.hours="0"+i.hours),e.usefulNewerCouponInfo.remainTime=i,0==s.remainTime)return e.usefulNewerCouponInfo={},e.visitedSku[e.skuId]=!0,void e.loadItemInfo(e.skuId);t()},1e3)}()}}else if("2"==s.popLayerType){if(l&&l[0]&&!m.default.JD.cookie.get("jxnewer_coupon_login")){var y=l[0];y.isJxNewer=!0,y.key="couponPool",y.roleId=y.active+"-"+y.level,this.drawCoupon({},y)}}else if("3"==s.popLayerType){if(!m.default.JD.cookie.get("detail_newerLayer_pop_0")&&!this.hasShowedNewerLayer0&&s.popLayerUrl){var I=this.detail.newerLayer;I.show=!0,this.detail.newerLayer=o({},I),m.default.JD.cookie.set("detail_newerLayer_pop_0",1,1440),u.reporter.reportExposure(E.EXP_JXNEWER_COUPON_TOAST_LOGIN)}this.hasShowedNewerLayer0=!0,u.reporter.reportExposure(E.EXP_JXNEWER_COUPON_BANNER_LOGIN)}}}};exports.default=b; 
 			}); 
		define("pages/item/detail/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var o=require("../itemBase/js/util/util.js"),t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../common/wxcontext.js"));exports.storeFn=function(){var a={state:{cpart:"main",cpartChanging:!1,isPingouXcx:o.ENV.isPingouXcx,lazyLoadThirdScreenFlag:!1,pageShowCount:0,pageHideCount:0,pageShow:!0,wxappType:t.default.JD.cookie.get("wxapp_type"),cartPosToBottom:165,returnToTopToBottom:110,cartPosHasAdjusted:!1,cartNumShow:!1,pgCartEnterShow:!1,pgAddCartShow:!1,skuId:"",detail:{stock:{}},grayscale:{},scrollTop:"0px",windowHeight:"500rpx",windowWidth:"400rpx",skuNameFlags:[],aboveTitleSkuFlags:[],beforeStockSkuFlags:{},addressData:{address:"",addressId:"",areaId:"",addressList:[],shopDetail:{}},isNeedRegainStock:!1,unifyConfig:{manual:!0,channel:4,meridian:{base:{},pv:{}}},bigPromoteInfo:{rightupImg:"",bannerImg:"",beforeTitleTag:""},bannerInfo:{},promoteAtoms:{},limitTime:{promoteAtoms:{}},goodsDescData:{},jxLive:{},bottomBtn:[{text:"加入购物车",method:"",enable:1,style:""},{text:"立即购买",method:"",enable:1,style:""}],cart:{num:0,add:0,ani:{}},quickClearOptions:{show:!1},choseShopId:"",skuLayerData:{btnType:"",buyType:0},addedServices:{jdServices:[],extServices:[],giftServices:[]},saleAtmos:{},skuProps:[],curSelectedText:"",goodsNum:{value:1,limit:1,maxLimit:200,subEnabled:!1,addEnabled:!0},postPromo:"",wxSearchFlag:!1,flags:{showArrivalNoticeFlag:!1,showDropNoticeFlag:!1,showHomeBtnFlag:!1,showBackToTopFlag:!1,showAnswerFlag:!1,showPingouBtnFlag:!1,showAppFlag:!1,ylToCustomerServiceFlag:!1,showReturnAppBtnFlag:!1,showCoverImgFlag:!0,showWXSearchFlag:!1,forbidScrollFlag:!1,showSKuLayerActions:!0,showGwfxInfoFlag:!1,showGwfxTipsFlag:!1,forbidSensitiveInfo:!1,forbidAppDetailNavigate:!1,commentLaunch:!0,tjTuanBottomShow:!1,usePgShare:!1,showSkeletonScreen:!0,showPgBannerFlag:0,showFamilyListEnterFlag:!1,keepSameLiveVideo:!1,scrollUnderMainImgFlag:!1,showSearchBar:!1,showJxSearchBar:!1,showJxSearchBarFirseScreen:!1,isJxScene:!1},commonVideo:{url:"",show:!1},defaultImg:o.ENV.isPingouXcx?"https://img11.360buyimg.com/jdphoto/s200x164_jfs/t1/80538/38/9803/7074/5d760ba6E2b197a38/5b2aa1fb3f4d05bc.png":"https://img11.360buyimg.com/jdphoto/s200x164_jfs/t15445/293/1935232823/3508/1cbf2bb8/5a65899bN06385d8b.png",focusSlideObj:{},bannerAtmosphereObj:{},favourObj:{},itemPriceObj:{},couponObj:{},baitiaoObj:{},promoteObj:{},accessoriesObj:{},guessYouLikeObj:{},specificObj:{},businessEntryObj:{},usefulNewerCouponInfo:{},suitObj:{},samCardStatus:{},floor:{},shareOptions:{category:[],coupons:[],cover:[],flags:[],name:"",price:[],jdPrice:"",oriPrice:"",linePrice:"",type:"",service:[],sku:"",fxPrice:"",tuanMember:"",kaiTuanNum:"",activeLeftTime:0,processType:"",flashpurchase:{},promomiao:{}},triggerShowShareDetail:0,hideSharePannel:!1,afterDiscountBenfit:{coupons:[],promotes:[]},layer:{address:{show:!1},discount:{show:!1,couponContent:[],promoteContent:[],promotePacks:null,parallelPromote:[],jxAppCoupon:null,guideCanGetCoupons:[],guideCanUseCoupons:[],guideCanUsePromotes:[],normalCoupons:[],normalPromotes:[]},sku:{show:!1},share:{show:!1},jingzao:{name:"jingzao",show:!1,title:"京造介绍",showIcon:!0,content:[{title:"自有品牌",text:"京东自有品牌，甄选优质制造商，省去中间环节，回归品质。",iconState:!0},{title:"严控品质",text:"联手国际优秀质控公司，坚持严格的品控标准。",iconState:!0}]},easeBuy:{name:"fxg",show:!1,relaxType:0,topDesc:"",title:"放心购",content:[],contentToShowOnPage:[]},globalService:{name:"globalService",show:!1,title:"京东国际服务",content:[]},easyBuy:{content:[]},service:{name:"service",show:!1,title:"服务说明",showIcon:!0,content:[]},kernelProps:{content:[],show:!1},factory:{name:"factory",show:!1,title:"工厂直供服务",showIcon:!0,content:[]},jxappExclusive:{show:!1},suyuanVideo:{show:!1}},navContentHeight:0,searchBarHeight:32,searchBarMarginTop:4,isNotchScreen:!1,statusBarHeight:0,navTabs:[{name:"商品",dtype:"navItem",show:!0},{name:"评价",dtype:"navComment",show:!0},{name:"详情",dtype:"navDetail",show:!0},{name:"推荐",dtype:"navGuess",show:!0}],navCur:"navItem",isSupportNav:o.ENV.isXcxEnv,disableNavTab:!0,navMaxWidth:"auto",navHeight:0,itemNavBaseTop:0,customNavbarData:{title:"商品详情",isShowCapsule:!0,isCustom:!0,pageKey:"",backgroundOpacity:"0",mainContentOpacity:"0",isCustomNavBack:!0,isCustomCapsuleLeft:!1,leftIconLink:"https://img12.360buyimg.com/img/s80x80_jfs/t1/114882/6/6886/629/5ebe0e05Ecb1536e4/214ea4e4cd0ea826.png"},navHeightGot:!1,dialog:{show:!1,data:{}},bottomWidgetData:{exposePtag:"138963.4.5",clickPtag:"138963.4.6",right:0,bottom:650,zIndex:11},kanjiaData:{isActShow:!1},checkedServiceList:[],supportServicesStr:"",shopFavStatus:!1,sfpArrowLeft:0,adultTip:"",promotionText:"",adStatus:{hasMore:!1,hideMore:!0},floatShareAnimation:"",valueAddedLocShops:{},commentRid:"",strOpenCardUrl:"",samStatus:{isCardMember:!1},isOfflineHasShop:!1,isSpecialProcess:!1,atmosProcessType:0,specialProcess:{num:0,subscribing:!1,countdown:{text:"",timer:[0,0,0,0,0,0,0,0],show:!1},iconText:"",showTime:"",processText:"",price:"",prevPrice:"",type:0,secPriceMark:"",secPrevPriceMark:""},specialProcessStatus:{certifiction:-1,needCertifiction:!1,certifictionStatus:"",certifictionUrl:"",showStockStatus:!1},pgappLauchConfigParam:{moduleName:"item",url:"",urlConfig:{rdLink:21},downloadAppGuideType:2,showBar:!0,showBottomBar:!0,setBottomBarVisible:!1,bottomBarConfig:{bottom:110}},launchAppParameter:"",appZxLaunchAppParameter:"",reviewAppParameter:"",answerAppParameter:"",launchBarAniFlag:"0",showCommentAnswerLaunch:!1,launchType:"",jxCommentAnswerYlToastDes:[],triggerLaunchErrorCount:0,klCopyConfigParam:{moduleName:"item",klCopyType:"0",klCopyTitle:"",klCopySucText:[],klCopyFailText:[]},klCopyConfig:{},triggerKlDownloadGuideCount:0,imkParam:{moduleName:"item",skuId:"",M_sourceFrom:"xcxguide"},loginLayerData:{hasImportLoginComponents:!0,isHideCloseLayerButton:!1},tjTuanInfo:{},tjTuanInfoCur:{},tuanInfoList:[],videoToastShow:!1},actions:{setStoreByKey:function(t,s,i){if(!i&&a.hasOwnProperty(t))a[t]=s;else if(i)if(o.ENV.isXcxEnv){var r=i+"."+t;this.setData(e({},r,s))}else if(-1!=i.indexOf(".")){var n=(0,o.parsePath)(i)(this);n&&(n[t]=s)}else this[i]=Object.assign({},this[i],e({},t,s))}}};return a}; 
 			}); 
		define("pages/item/itemBase/components/accessories/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../libs/promise.min.js")),r=require("./store"),i=require("../../js/model/baseModel.js"),s=require("../../js/util/util.js"),o=e(require("../../constants/ptag-constants")),n=e(require("../../../../../common/fe_helper")),c={props:{accessoriesObj:{type:Object}},store:r.storeFn,watch:{accessoriesObj:function(e){e&&e.skuId&&this.initAccessory(e.skuId,e.jdCategory)}},methods:{initAccessory:function(e,t){var r=this;this.accessoryList=[],e&&t&&this.getAccessoriesList(t).then(function(e){if(e.length)return e[0]}).then(function(i){r.getAccessorieInfo(e,t).then(function(e){(e=e||[]).length<4||(r.setData({accessoryList:e,enterText:i&&i.enterText||""}),s.reporter.reportExposure(o.DETAIL_ACCESSORIES_RECOMMEND_EXP))})})},getAccessoriesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length){var r="|"+e[0]+"|",s="|"+e[1]+"|",o="|"+e[2]+"|";return(0,i.getPpmsData)("accessoryInfo").then(function(e){var i=[];return(e=e||[]).forEach(function(e){(e.cid1s&&~e.cid1s.indexOf(r)||e.cid2s&&~e.cid2s.indexOf(s)||e.cid3s&&~e.cid3s.indexOf(o))&&i.push({cid1s:e.cid1s,cid2s:e.cid2s,cid3s:e.cid3s,enterText:e.enterText,title:e.title})}),t.default.resolve(i)})}},getAccessorieInfo:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(e&&r.length)return(0,i.peijianCategory)({skuId:e,jdCategory:r}).then(function(e){if(0==e.errcode){var r=e.data,i=[];return r&&r.category&&Array.isArray(r.category)&&(r.category=r.category.filter(function(e){return e.itemLogoUrl&&e.name}),r.category.forEach(function(e){e.itemLogoUrl=n.getImg(e.itemLogoUrl),i.push({itemLogoUrl:e.itemLogoUrl,name:e.name,id:e.id,thirdCatId:e.thirdCatId,thirdCatName:e.thirdCatName})})),t.default.resolve(i)}return t.default.reject({code:e.errcode,message:e.msg})})},gotoAccessoryTab:function(e){var t=this.accessoriesObj,r=t.skuId,i=t.jdCategory,n=(e.currentTarget.dataset||0).id;0==n?s.reporter.reportClick(o.DETAIL_ACCESSORIES_RECOMMEND_ALL):s.reporter.reportClick(o.DETAIL_ACCESSORIES_RECOMMEND_CATEGORY);var c="https://3c-peijian.jd.com/index?banner=null&ABTestFlag=0&eventId=5&sku="+r+"&cid="+i[2]+"&accyCategoryId="+n;(0,s.gotoUrl)(this,{url:c},null,"navigateTo")}}};exports.default=c; 
 			}); 
		define("pages/item/itemBase/components/accessories/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,accessoryList:[],enterText:""},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/actionSheet/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),t={props:{title:String,listData:{type:Array,value:[]},showActionSheetFlag:{type:Boolean,value:!1,observer:"observeFlagChange"}},store:e.storeFn,methods:{closeLayer:function(e){this.triggerEvent("closeActionSheet")},handleItemClick:function(e){var t=e.currentTarget.dataset.idx;this.triggerEvent("handleItemClick",t)},observeFlagChange:function(e){var t=this;e?(this.setData({isShowLayer:!0}),setTimeout(function(){t.setData({showAnim:!0})},100)):(this.setData({showAnim:!1}),setTimeout(function(){t.setData({isShowLayer:!1})},100))},noscroll:function(){}}};exports.default=t; 
 			}); 
		define("pages/item/itemBase/components/actionSheet/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{isShowLayer:!1,showAnim:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/activities/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function e(t,e,n,o){var r={url:"https://wq.jd.com/hotspuactentrance/getspuact",data:{spuId:o?t:e,isSelf:o?1:0,venderId:n,callback:"getActivitiesCB"}};return new i.default(function(t,e){u.request.get(r).then(function(e){var n=e.body;t(0==n.errno?n.data:{})}).catch(function(t){return e(t)})})}function n(t,e,n){var o={url:"https://wq.jd.com/activep3/jdpq/ptqqshang",data:{skuid:t,spuid:e,venderid:n,skutype:0,ver:1}};return new i.default(function(t,e){u.request.get(o).then(function(e){var n=e.body;t(0==n.errcode?n.data:{})}).catch(function(t){return e(t)})})}function o(t,e,n){var r={url:"https://wq.jd.com/hotspuactjoin/creategroupact",data:{skuId:t,activeId:e,venderId:n,callback:"gotoTuanCB"}};return u.request.get(r).then(function(r){var u=r.body;return 0==u.errno?{id:u.data.groupId,isGrouper:1==u.data.isGrouper}:(13==u.errno&&a.doLogin().then(function(r){o(t,e,n).then(function(t){return i.default.resolve(t)})}).catch(function(){}),i.default.reject())}).catch(function(t){return i.default.reject(t)})}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./store"),i=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../../libs/promise.min.js")),u=require("../../../../../common/request/request.js"),a=t(require("../../../../../common/login/loginv1")),c=t(require("../../js/util/util.js")),s={0:"抢神券",1:"查看进度",3:"去使用"},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",e=arguments[1];return{0:"邀请好友拼团抢"+e+"元神券",1:"还差"+arguments[2]+"人即可赢取"+e+"元神券",3:"拼团成功，已抢到"+e+"元优惠券"}[t]},p={0:"抢红包",1:"查看进度",2:""},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",e=arguments[1];return{0:"邀请好友瓜分"+e+"元爆品红包",1:"还差"+arguments[2]+"人即可瓜分"+e+"元爆品红包",2:"瓜分成功，已抢到"+e+"元优惠券"}[t]},g={props:{skuId:{type:String},spuId:{type:String},isZiying:{type:Boolean},venderId:{type:String},getBphb:{type:Boolean},getPtqq:{type:Boolean}},store:r.storeFn,watch:{skuId:{handler:function(){this.initActivities()},immediate:!0}},methods:{initActivities:function(){var t=this,o=this.data,r=o.skuId,u=o.spuId,a=o.venderId,c=o.getBphb,g=o.getPtqq,h=o.isZiying,f=[];c&&f.push(e(r,u,a,h)),g&&f.push(n(r,u,a)),i.default.all(f).then(function(e){var n=[],o=c?e[0]:{},r=(c?e[1]:e[0])||{};if(o&&1==o.isSpuAct){var i=o.groupAmount,u=o.groupStatus,a=o.groupResiduePeople,g=o.couponAmount,h=o.activeId,f=o.groupId,v={url:"https://img11.360buyimg.com/jdphoto/s30x30_jfs/t1/8974/37/1541/815/5bced96eE7436e83d/056b4eae702489be.png",name:"爆品红包",type:"1",content:l(u,(2==u?g:i)/100,a),action:p[u]||"",actionHandler:"gotoHongbao",activeId:h,groupId:f};(2!=u||2==u&&g>0)&&n.push(v)}if(r&&1==r.show&&"2"!=r.status&&r.discount>0){var m=r.discount,I=r.status,q=r.url,j={url:"https://img11.360buyimg.com/jdphoto/s30x30_jfs/t1/17746/37/5940/518/5c45858eEe59817e0/322a37cc5ffc3418.png",name:"拼团抢券",type:"2",content:d(I,m,r.peoplenum-r.tuannum),action:s[I]||"",actionHandler:"gotoPintuan",activeId:q};n.push(j)}2===n.length&&((o.rate||0)>=(r.rate||0)?n.pop():n.shift()),t.setData({activities:n})}).catch(function(t){console.log(t)})},toggleFold:function(){this.setData({isFold:!this.data.isFold})},gotoHongbao:function(t){var e=this,n=t.currentTarget.dataset,r=n.activeid,i=n.groupid,u=this.skuId,a=this.venderId;if(i){var s="https://wqs.jd.com/wxsq_project/bphb/detail/index.html?skuId="+u+"&venderId="+a+"&groupId="+i+"&activeId="+r+"&joinScene=2";c.gotoUrl(this,{url:s})}else o(u,r,a).then(function(t){var n=t.id,o=t.isGrouper,i="https://wqs.jd.com/wxsq_project/bphb/detail/index.html?skuId="+u+"&venderId="+a+"&groupId="+n+"&activeId="+r+"&joinScene=2&ptag="+(o?"7607.1.35":"7607.1.36");c.gotoUrl(e,{url:i})}).catch(function(t){e.triggerEvent("error",t)})},gotoPintuan:function(t){var e=t.currentTarget.dataset.activeid;e&&c.gotoUrl(this,{url:e})},actionHandler:function(t){1==t.currentTarget.dataset.type?this.gotoHongbao(t):this.gotoPintuan(t)}}};exports.default=g; 
 			}); 
		define("pages/item/itemBase/components/activities/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,activities:[],isFold:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/addCartPg/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={props:{},store:require("./store").storeFn,watch:{},methods:{addCart:function(){this.triggerEvent("addCartPg")}}};exports.default=e; 
 			}); 
		define("pages/item/itemBase/components/addCartPg/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/address/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),r=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../common/wxcontext.js")),t=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}(require("../../constants/ptag-constants")),o=require("../../js/util/util.js"),s={props:{address:String,category:Array,skuFlagInfo:Object,isShowPingou:Boolean,isPingou:Boolean,skuId:{type:String},freight:Object,serviceQueryStr:String,isOffline:Boolean,shopDetail:{type:Object,value:null},locAddCartDirect:Boolean,hideWeight:Boolean},store:e.storeFn,watch:{skuId:function(e){e&&this.render()},freight:function(e){this.isShowPingou&&e&&(e.df&&o.reporter.reportExposure(t.EXP_ADDRESS_DELIVERY),e.dcashDesc&&o.reporter.reportExposure(t.EXP_ADDRESS_FREIGHT),e.state&&o.reporter.reportExposure(t.EXP_ADDRESS_STOCK_STATE),e.serviceInfo&&o.reporter.reportExposure(t.EXP_ADDRESS_SERVICE_INFO))},skuFlagInfo:function(e){e&&e.url&&this.isShowPingou&&o.reporter.reportExposure(t.EXP_ADDRESS_JDWULIU)}},methods:{render:function(){var e=r.default.JD.cookie.get("choseShop");if(e){var t=r.default.JD.cookie.get("choseShopId").split("----");if(t&&t[1]===this.data.skuId&&e){var o=e.split("----"),s={addr:o[0],name:o[1],phone:o[2]};this.setData({shopDetail:s})}else this.setData({shopDetail:null})}},switchAddress:function(e){o.reporter.reportClick(t.CLICK_ADDRESS),this.triggerEvent("showAddressLayer")},chooseShop:function(e){this.triggerEvent("chooseShop",e)},makePhone:function(e){var t=e.currentTarget.dataset.phone;r.default.makePhoneCall({phoneNumber:t})}}};exports.default=s; 
 			}); 
		define("pages/item/itemBase/components/address/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,isShowExpiration:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/answers/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),r=require("../../js/model/baseModel.js"),s=t(require("../../../itemBase/constants/ptag-constants")),n=t(require("../../js/util/util.js")),o={props:{skuId:String,isAppLaunch:Boolean,isPingou:Boolean},store:e.storeFn,ready:function(){var t=this.skuId;this.init(t)},methods:{init:function(t){var e=this;(0,r.getAnswerList)(t).then(function(t){t&&t.length>0&&(e.answerList=t)})},gotoAnswerList:function(t){var e=t.currentTarget.dataset.type,r="https://wqs.jd.com/faqs/index.html?productId="+this.skuId;n.gotoUrl(this,{url:r}),"all"==e?n.reporter.reportClick(s.CLICK_ANSWER_FLOOR):"content"==e&&n.reporter.reportClick(s.DETAIL_ANSWER_LIST)},handleMaskClick:function(){}}};exports.default=o; 
 			}); 
		define("pages/item/itemBase/components/answers/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../common/wxcontext.js")),t=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:t.ENV.isPingouXcx,wxappType:e.default.JD.cookie.get("wxapp_type"),answerList:[]},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/appLaunchBar/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store"),e=require("../../js/util/util.js"),r=require("../../../../../components/launch-jdapp/util.js"),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(require("../../constants/ptag-constants")),i=getApp(),o={props:{skuId:String,ylToCustomerServiceFlag:Boolean},store:t.storeFn,watch:{skuId:function(t){t&&this.init()}},methods:{init:function(){var t=this,i=this.skuId,o=getApp(),n=!o.isAppShare.isAppBarClosed;if(n){this.setData({isShow:n});var a=(0,r.getAppSchema)("item",{skuId:i,source:"wxapp_foot"});this.setData({parameter:a}),console.warn(a);var p="",u=getCurrentPages().length,c=getCurrentPages()[u-1];o&&o.isAppShare&&c.baseSkuId==o.isAppShare.sku?(p=s.BOTTOM_APP_LAUNCH_EXP,this.clickPtag=s.BOTTOM_APP_LAUNCH_CLICK):(p=s.BOTTOM_APP_ACROSS_ITEM_LAUNCH_EXP,this.clickPtag=s.BOTTOM_APP_ACROSS_ITEM_LAUNCH_CLICK),this.reportExposure||(this.reportExposure=!0,e.reporter.reportExposure(p)),this.bind||(this.bind=!0,o.event.on("appBarClosed",function(){t.setData({showAnim:!0},function(){setTimeout(function(){t.setData({isShow:!1})},1e3)})}))}},launchAppError:function(){this.triggerEvent("launchAppError")},handleClick:function(){this.ylToCustomerServiceFlag&&this.launchAppError(),e.reporter.reportClick(this.clickPtag)},close:function(){i.event.emit("appBarClosed")}}};exports.default=o; 
 			}); 
		define("pages/item/itemBase/components/appLaunchBar/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{isShow:!1,showAnim:!1,parameter:""},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/appLaunchBtn/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store"),e=require("../../js/util/util.js"),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(require("../../constants/ptag-constants")),i=require("../../../../../components/launch-jdapp/util.js"),s={props:{skuId:String,top:{type:String,value:0},aniFlag:String,ylToCustomerServiceFlag:Boolean},store:t.storeFn,watch:{skuId:function(t){t&&this.init()},aniFlag:function(t,e){t!=e&&this.showAni()}},methods:{init:function(){var t=this.skuId,s="",n=getApp(),a=getCurrentPages().length,o=getCurrentPages()[a-1];n&&n.isAppShare&&o.baseSkuId==n.isAppShare.sku?(s=r.APP_LAUNCH_EXP,this.clickPtag=r.APP_LAUNCH_CLICK):(s=r.APP_ACROSS_ITEM_LAUNCH_EXP,this.clickPtag=r.APP_ACROSS_ITEM_LAUNCH_CLICK),this.reportExposure||(this.reportExposure=!0,e.reporter.reportExposure(s)),this.parameter=(0,i.getAppSchema)("item",{skuId:t,source:"wxapp",ptag:this.clickPtag}),console.warn(this.parameter)},launchAppError:function(t){this.triggerEvent("launchAppError")},close:function(){this.setData({isShow:!1})},handleClick:function(){this.ylToCustomerServiceFlag&&this.launchAppError(),e.reporter.reportClick(this.clickPtag)},showAni:function(){var t=this.aniFlag;"1"==t?this.animationClass="foldAnimation":"2"==t&&(this.animationClass="expandAnimation")}}};exports.default=s; 
 			}); 
		define("pages/item/itemBase/components/appLaunchBtn/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{isShow:!0,parameter:"",animationClass:""},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/bannerAtmosphere/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){var i=[],o=!0,r=!1,s=void 0;try{for(var n,a=e[Symbol.iterator]();!(o=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){r=!0,s=e}finally{try{!o&&a.return&&a.return()}finally{if(r)throw s}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=require("./store"),o=e(require("../../../../../common/fe_helper")),r=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../libs/day.min")),s=e(require("../../js/util/util")),n=e(require("../../../../../common/utils")),a=require("../../js/model/baseModel"),u=require("../../js/handler/action"),m=e(require("../../constants/ptag-constants")),c={props:{pageShowCount:Number,pageHideCount:Number,skuItem:Object,areaId:String,atmosProcessType:Number,specialProcess:Object,saleAtmos:Object,maskSkuConfig:Object},store:i.storeFn,watch:{pageShowCount:function(){this.pageHideClear&&(this.initAtmos(),this.pageHideClear=!1)},pageHideCount:function(){this.countdownTimer&&(clearTimeout(this.countdownTimer),this.pageHideClear=!0)},skuItem:{handler:function(e,t){e&&e.skuId&&this.initAtmos()},deep:!0}},detached:function(){this.countdownTimer&&clearTimeout(this.countdownTimer)},methods:{initAtmos:function(){var e=this.skuItem;this.atmosType=this.atmosProcessType||0,this.countdownTimer&&clearTimeout(this.countdownTimer),this.triggerEvent("refreshPostPromo",{}),this.setData({timerNums:[],beltAtmos:{},promoteAtoms:{}}),e.isPlusZxShop||e.isPlusZxGou&&!e.isQianggou&&!e.isYuYue?(e.showPlusZxGouTip&&this.triggerEvent("initSpecialAtmosData",{bottomBtn:[{},{text:!e.canBuy&&e.isNoStock?"已售罄":"开通PLUS立即购买",enable:e.canBuy?1:0,method:"plusZxGouOpenPlus",style:e.canBuy?"":"disabled_btn"}]}),this.updateAtmosType(e.isPlusZxShop?9:8),e.isPlusZxGou&&s.reporter.reportExposure(m.EXP_PLUSZX_BANNER),e.isPlusZxShop&&s.reporter.reportExposure(m.EXP_PLUSZXSHOP_BANNER)):e.isYuYue||e.isQianggou?(this.updateAtmosType(e.isYuYue?1:3),this.initSubscribeSpreeAtmos(e)):e.seckillFlag&&4==e.processType?this.initSeckillAtmos(e.promomiao):e.flashpurchaseFlag&&5==e.processType?this.initFlashAtmos(e):this.initProfitBelt(e)},updateAtmosType:function(e){this.atmosType=e,this.triggerEvent("updateAtmosType",e||0)},initSubscribeSpreeAtmos:function(e){var t=this,i=!1;i=(!e.item||"1"===e.item.warestatus)&&!(0==e.stock.StockState||34==e.stock.StockState);var n=e.isPlusZxGou,a=e.canBuy,c=e.canNotBuyHere,l={countdown:{}},d=!(!e.isQianggou||!e.miao),p=!(!e.isYuYue||!e.yuyue),h=e.yuyue||{},f=[],g=0,T=0,P=!0,S={},b=parseInt(o.getServerTime()/1e3),v=e.tipsContent,y=this.skuItem.price||{},w=n?"btn_buy_plusZx":"";if(1==h.showPromoPrice&&e.oriPrice){var _=+e.jdPrice,E=y.np||{},x=E.type,k=E.t,A=E.p,I=+e.oriPrice,C=!0;if(h.state<=3&&h.hidePrice&&(C=!1),_>=I&&(C=!1),3==x&&1==k&&A){var B=parseFloat(A);B>=I?C=!1:(C=!0,l.price=B)}C&&I&&(I=(+I).toFixed(2),l.secPrevPriceMark=/^\d/.test(I)?"¥":"",l.prevPrice=I)}if(1==h.showPromoPrice&&1==h.sellWhilePresell&&y.np){var D=y.np,Y=D.type,N=D.t,U=D.p;if(3==Y&&1==N&&U){var X=parseFloat(U),O=parseFloat(e.oriPrice);X<O&&(l.price=X.toFixed(2),l.prevPrice=O.toFixed(2),l.showPresellSellPrice=a)}}if(d){var M=e.miao,j=+M.startTime,F=+M.endTime;b=+M.serverTime,0==M.isKo&&(M.state=3),0==j||j>b?M.state=1:j<=b&&b<F?M.state=2:F>0&&b>F&&(M.state=3),1==M.certifiction&&(0,u.verifyAuth)().then(function(e){var i=e.retcode,o=e.status,r=e.url,s=-1;0==i&&2==o?s=0:4==i&&(s=1),S={certifiction:i,needCertifiction:1!=o,certifictionStatus:s,certifictionUrl:r||""},t.triggerEvent("initSpecialAtmosData",{specialProcess:l,bottomBtn:f,specialProcessStatus:S,tipsContent:v})})}var L=this.maskSkuConfig&&this.maskSkuConfig.iconText&&this.maskSkuConfig.iconText.other,Z=this.maskSkuConfig&&"1"==this.maskSkuConfig.isCheckYuyue;if(p){if(d&&0!=h.state&&1!=h.state&&2!=h.state?(l.type=3,l.processText="1.预约 2.抢购 3.发货",l.iconText="1.部分商品预约成功后才有购买资格，预约成功后，请关注抢购时间及时抢购，资源有限，先抢先得！\n2.部分商品在预约期间抢购时间未定，我们会在商品抢购前通过Push通知提醒您，请在设置中选择允许通知，以免错过抢购时间。\n3.对于预约成功享优惠的商品，抢购开始后，点击“立即抢购”进入结算页，可在结算页查看优惠，若抢购时间结束，优惠自动失效。\n4.查看预约商品请至“微信-发现-购物-个人中心-我的活动-预约”进行查看。\n5.如果提供赠品，赠品赠送规则顺序按照预约商品购买成功时间来计算，而不是预约成功时间。\n6.如您对活动有任何疑问，请联系客服咨询。"):(l.type=1,l.processText="1.预约 2.抢购 3.发货",l.iconText="1.部分商品预约成功后才有购买资格，预约成功后，请关注抢购时间及时抢购，资源有限，先抢先得！\n 2.部分商品在预约期间抢购时间未定，我们会在商品抢购前通过Push通知提醒您，请在设置中选择允许通知，以免错过抢购时间。\n3.对于预约成功享优惠的商品，抢购开始后，点击“立即抢购”进入结算页，可在结算页查看优惠，若抢购时间结束，优惠自动失效。\n4.查看预约商品请至“京东购物-我的-预约”进行查看。\n5.如果提供赠品，赠品赠送规则顺序按照预约商品购买成功时间来计算，而不是预约成功时间。\n6.如您对活动有任何疑问，请联系客服咨询。"),l.processText+=Z?"（预约成功才可抢购）":"",h.state>1&&h.num>=1&&(l.num=h.num),h.qiangEtime&&h.qiangStime){var q=(0,r.default)(h.qiangStime,r.default.ISO_8601).format("YYYY.MM.DD HH:mm"),H=(0,r.default)(h.qiangEtime,r.default.ISO_8601).format("YYYY.MM.DD HH:mm"),K=h.plusType||0,G=h.plusStime||h.qiangStime||"",Q=this.skuItem,J=Q.isPlus,R=Q.plusFlag;K&&G&&h.plusEtime&&(q=1==K&&J&&!/^1/.test(R)||2==K&&J?(0,r.default)(G,r.default.ISO_8601).format("YYYY.MM.DD HH:mm"):(0,r.default)(h.plusEtime,r.default.ISO_8601).format("YYYY.MM.DD HH:mm"));var W=q.split("."),z=H.split(".");W[0]==z[0]&&(W.shift(),z.shift(),q=W.join("."),H=z.join(".")),l.showTime=q+" - "+H}else l.showTime="敬请期待";h.state<=3&&(l.hidePrice=!!h.hidePrice);var V=[m.EXP_MASK_YLTIP_1,m.EXP_MASK_YLTIP_1,"",m.EXP_MASK_YLTIP_3];this.maskSkuConfig&&this.maskSkuConfig.downloadTips&&this.maskSkuConfig.downloadTips.other&&V[h.state]&&s.reporter.reportExposure(V[h.state]);var $=[m.EXP_MASK_BTN_1,m.EXP_MASK_BTN_1,m.EXP_MASK_BTN_2,m.EXP_MASK_BTN_3,m.EXP_MASK_BTN_4];if(this.maskSkuConfig&&$[h.state]&&s.reporter.reportExposure($[h.state]),0==h.state)l.countdown.text="敬请期待",l.countdown.show=!1,f=[{},{text:L||"等待预约",enable:0,method:"",style:w+" disabled_btn",yuyueState:h.state}],P=!1;else if(1==h.state)l.countdown.text="距预约开始还剩",l.countdown.show=!0,g=s.parseTime(h.yueStime),f=[{},{text:L||"等待预约",enable:0,method:"",style:w+" disabled_btn",yuyueState:h.state}],P=!1;else if(2==h.state)l.countdown.text="距预约结束还剩",l.countdown.show=!0,l.subscribing=!0,g=s.parseTime(h.yueEtime),f=l.showPresellSellPrice?[{text:"立即购买",method:"buy",enable:1,style:""+w,price:l.price||"",prevPrice:l.prevPrice||"",sellWhilePresell:!0},{text:L||"立即预约",enable:1,method:"subscribeItem",style:""+w,price:l.price||"",prevPrice:l.prevPrice||"",sellWhilePresell:!0,launchJxApp:this.maskSkuConfig,yuyueState:h.state}]:[{},{text:L||"立即预约",enable:1,method:"subscribeItem",style:""+w,price:l.price||"",launchJxApp:this.maskSkuConfig,yuyueState:h.state}],P=!1,s.reporter.reportExposure(m.EXP_DETAIL_SUBSCRIBE_BTN),n&&s.reporter.reportExposure(m.EXP_PLUSZX_YUYUE_STATE2);else if(3==h.state){g=s.parseTime(h.qiangStime)||"";var ee=h.plusType||0,te=h.plusStime||h.qiangStime||"",ie=this.skuItem,oe=ie.isPlus,re=ie.plusFlag;ee&&te&&h.plusEtime&&(g=s.parseTime(h.plusEtime)||"",(1==ee&&oe&&!/^1/.test(re)||2==ee&&oe)&&(g=s.parseTime(h.plusStime)||"")),e.miao&&(1==e.miao.state||2==e.miao.state)&&e.miao.startTime,l.countdown.text="距抢购开始还剩",l.countdown.show=!0,f=[{},{text:L||"抢购未开始",enable:0,style:w+" disabled_btn",method:"",yuyueState:h.state}],P=!1}else 4==h.state?(g=s.parseTime(h.qiangEtime),d&&e.miao&&2==e.miao.state?(l.countdown.text="距抢购结束还剩",l.countdown.show=!0,T=e.miao.endTime,f=[{},{text:L||"立即抢购",method:i?"specialBuy":"",enable:i?1:0,style:w+" "+(i?"":"disabled_btn"),launchJxApp:this.maskSkuConfig&&i,yuyueState:h.state}],i||s.reporter.reportExposure(m.EXP_DETAIL_BUYING_SPREE_STOCK),s.reporter.reportExposure(m.EXP_DETAIL_BUYING_SPREE_BTN),n&&s.reporter.reportExposure(m.EXP_PLUSZX_YUYUE_STATE4)):e.isQianggou&&!d?(l.type=3,l.countdown.text="距抢购结束还剩",l.countdown.show=!0,f=[{},{text:"排队中",enable:0,style:w+" disabled_btn",method:""}]):this.maskSkuConfig?(l.type=3,l.countdown.text="距抢购结束还剩",l.countdown.show=!0,f=[{},{text:L||"立即抢购",method:i?"specialBuy":"",enable:i?1:0,style:w+" "+(i?"":"disabled_btn"),launchJxApp:this.maskSkuConfig&&i,yuyueState:h.state}]):(l.countdown.text="距抢购结束还剩",l.countdown.show=!0,f=[{text:"加入购物车",method:i?"addToCart":"",enable:i?1:0,style:i?"":"disabled_btn"},{text:"立即抢购",method:i?"buy":"",enable:i?1:0,style:w+" "+(i?"":"disabled_btn")}],s.reporter.reportExposure(m.EXP_DETAIL_SUBSCRIBE_SECKILL_BTN))):5==h.state&&(l.countdown.text="抢购已结束",l.countdown.show=!1,f=[{},{text:L||"抢购已结束",enable:0,style:w+" disabled_btn",method:""}],g=0);""===g&&(l.countdown.text="敬请期待",l.countdown.show=!1)}else if(d){var se=e.miao;l.type=2,l.showTime="",this.maskSkuConfig&&this.maskSkuConfig.downloadTips&&this.maskSkuConfig.downloadTips.other&&s.reporter.reportExposure(m.EXP_MASK_YLTIP_3),1==se.state?(se.startTime?(l.countdown.text="距抢购开始还剩",l.countdown.show=!0,g=se.startTime):(l.countdown.text="敬请期待",l.countdown.show=!1),f=[{},{text:L||"抢购未开始",method:"",enable:0,style:w+" disabled_btn",yuyueState:-1}],P=!1,this.maskSkuConfig&&s.reporter.reportExposure(m.EXP_MASK_BTN_3)):2==se.state?(g=0,T=se.endTime,l.countdown.show=!1,f=[{},{text:L||"立即抢购",method:i?"specialBuy":"",enable:i?1:0,style:w+" "+(i?"":"disabled_btn"),launchJxApp:this.maskSkuConfig&&i,yuyueState:4}],i||s.reporter.reportExposure(m.EXP_DETAIL_BUYING_SPREE_STOCK),s.reporter.reportExposure(m.EXP_DETAIL_BUYING_SPREE_BTN),this.maskSkuConfig&&s.reporter.reportExposure(m.EXP_MASK_BTN_4)):(g=0,l.countdown.text="抢购已结束",l.countdown.show=!1,f=[{},{text:L||"抢购已结束",style:w+" disabled_btn",enable:0,method:""}])}(g||T)&&this.countdown(g,b,T,function(){t.triggerEvent("countDownOver")}),f.length||(f=[{},{text:"立即预约",enable:0,style:w+" disabled_btn",method:""}]),P||i||c||(v="");var ne=this.skuItem,ae=ne.plusZxGouYuyueNotPlus,ue=ne.isNoStock;ae&&(f=[{},{text:!a&&ue?"已售罄":"开通PLUS立即参与",enable:a?1:0,method:"plusZxGouOpenPlus",style:w+" "+(a?"":"disabled_btn")}],!(!a&&ue)&&s.reporter.reportExposure(m.EXP_PLUSZX_YUYUE_OPENPLUS)),S.showStockStatus=P,c&&f.map(function(e){1==e.enable&&(e.enable=0,e.method="",e.style+=" disabled_btn")}),this.triggerEvent("initSpecialAtmosData",{specialProcess:l,bottomBtn:f,specialProcessStatus:S,tipsContent:v}),n&&s.reporter.reportExposure(m.EXP_PLUSZX_YUYUE_BANNER)},countdown:function(e,t,i,r){var s=this;if(i>0&&i-t<=0)return clearTimeout(this.countdownTimer),void(r&&r());if(e>0){var n=[0,0,0,0,0,0,0,0],a=e-t;if(!(a>0))return clearTimeout(this.countdownTimer),void(r&&r());var u=a/86400%99|0,m=a/3600%24|0,c=a/60%60|0,l=a%60|0;n[0]=u/10|0,n[1]=u%10,n[2]=m/10|0,n[3]=m%10,n[4]=c/10|0,n[5]=c%10,n[6]=l/10|0,n[7]=l%10,this.setData({timerNums:n})}this.countdownTimer=setTimeout(function(){s.countdown(e,parseInt(o.getServerTime()/1e3),i,r)},1e3)},initSeckillAtmos:function(e){e.serverTime>=e.intStartTime&&e.serverTime<e.intEndTime&&(this.setData({seckillAtmos:{price:this.skuItem.jdPrice||"暂无定价",prevPrice:e.jdPrice||"",isBrandSeckill:"2"==e.seckillType}}),this.updateAtmosType(4),this.updateCountDownTimer(e.intEndTime,e.serverTime))},initFlashAtmos:function(e){var t=e.flashpurchase,i=void 0===t?{}:t;this.setData({seckillAtmos:{price:this.skuItem.jdPrice||"暂无定价",prevPrice:i.jdPrice||"",isBrandSeckill:!0}});var r=parseInt(o.getServerTime()/1e3);this.updateCountDownTimer(parseInt(i.et/1e3),r)},updateCountDownTimer:function(e,t){var i=this,r=[0,0,0,0,0,0,0,0],s=e-t;if(!(s>0))return clearTimeout(this.countdownTimer),void this.triggerEvent("countDownOver");var n=s/86400%99|0,a=s/3600%24|0,u=s/60%60|0,m=s%60|0;r[0]=n/10|0,r[1]=n%10,r[2]=a/10|0,r[3]=a%10,r[4]=u/10|0,r[5]=u%10,r[6]=m/10|0,r[7]=m%10,this.setData({timerNums:r}),this.countdownTimer=setTimeout(function(){i.updateCountDownTimer(e,parseInt(o.getServerTime()/1e3))},1e3)},promotionAtmos:function(e){var t=e.skuId,i=e.imgTag,u=e.np,m=e.category,c=e.price;return(0,a.getPpmsData)("_itemPromote").then(function(e){var a="|"+m[0]+"|",l="|"+m[1]+"|",d="|"+m[2]+"|",p="|"+t+"|",h=i?"|"+i+"|":"",f=o.getServerTime(),g=[],T="",P="",S=0,b=0,v=0,y="",w=0,_=!1;u.id&&(T=u.c||"",P=u.id||"",S=u.t||0,b=parseInt(u.s)||0,v=parseInt(u.e)||0,w=u.p||c||0,_=!0);var E=e.filter(function(e){return!!(!!(e&&e.bannerimg&&e.backcolor&&e.textcolor&&e.numcolor&&e.numbackcolor)&&(e.category1&&e.category1.indexOf(a)>=0||e.category2&&e.category2.indexOf(l)>=0||e.category3&&e.category3.indexOf(d)>=0||e.sku&&e.sku.indexOf(p)>=0||e.promoteid&&""!=h&&e.promoteid.indexOf(h)>=0)&&e.starttime&&new Date(e.starttime).getTime()<f&&e.endtime&&new Date(e.endtime)>f)}),x=e.filter(function(e){return e&&e.bannerimg&&e.backcolor&&e.textcolor&&e.numcolor&&e.numbackcolor&&e.activestage&&e.activestage.indexOf(S)>=0&&v&&v>f&&""!=e.matid&&e.matid==P});if(x.length&&b>0){var k=(1*w).toFixed(2).split(".");k[1]=k[1]?"."+k[1]:"";var A=n.formatTime(new Date(b)),I=A.split("."),C=s.formatTimeSimple(new Date(b)),B=n.formatTime(f),D=n.formatTime(new Date(f+864e5));y=A===B?"今日":A===D?"明天":A.substr(0,4)===B.substr(0,4)?I[1]+"月"+I[2]+"日":I[0]+"年"+I[1]+"月"+I[2]+"日",y+=[C.hour,C.min].join(":");var Y=x[0];if(Y.title=T,Y.dcstarttime=b,Y.dcendtime=v,Y.price=k,Y.startTimeStr=y,Y.descStr="将于"+y+"开抢，请提前加入购物车",1==u.type)Y.title="限量优惠价",1==Y.activestage?Y.descStr="将于"+y+"开抢，前"+(u.m||1)+"件享受优惠":2==Y.activestage&&w&&(Y.descStr="前"+(u.m||1)+"件仅售"+w+"元，欲购从速！");else if(2==u.type&&1==Y.activestage){var N=(0,r.default)(v).diff((0,r.default)(b),"hours",!0).toFixed(1);Y.descStr="将于"+y+"开抢，前"+(parseFloat(N)||0)+"小时优惠"}g.push(Y)}else E.length&&g.push(E[0]);if(g.length&&_){var U=g[0];U.matid&&U.title&&U.descStr&&(1==U.activestage?(g[0].showPromoNoticeFlag=!0,u.p||1!=u.type&&2!=u.type||(g[0].showPromoNoticeFlag=!1)):2==U.activestage&&1==u.type&&(g[0].showPromoNoticeProfit=!0))}return g.length?g[0]:{}}).catch(function(e){var t=e.code,i=e.message;return Promise.reject({code:t,message:i})})},getProfitBelt:function(e){var t=e.skuId,i=e.cateId,o=e.venderId,r=e.isGlobal,s=void 0===r?0:r,n=e.isCanUseDQ,u=e.isCanUseJQ,m=e.tagId;return new Promise(function(e,r){(0,a.profitBelt)({skuId:t,isCanUseDQ:n,isCanUseJQ:u,isOverseaPurchase:s,jdCategory3:i,venderId:o,tagId:m}).then(function(t){var i=t.beltList,o=void 0===i?[]:i,r={};o&&o.length&&(r=o[0]),e(r)}).catch(function(e){e.code;var t=e.message;r(t)})})},initProfitBelt:function(e){var i=this;if(e.skuId&&e.spAttr&&e.jdCategory){var r=e.skuId,n=e.spAttr,a=e.venderId,u=void 0===a?0:a,c=e.jdCategory,l=void 0===c?[]:c,d=e.item,p=void 0===d?{}:d,h=e.jdPrice,f=e.price,g=void 0===f?{}:f,T=p.pTag,P={skuId:r,cateId:l[2]||0,venderId:u,isGlobal:n&&n.isOverseaPurchase>0,isCanUseDQ:n.isCanUseDQ,isCanUseJQ:n.isCanUseJQ,tagId:T};this.promotionAtmos({skuId:r,imgTag:T,np:g.np||{},category:l,price:h}).then(function(e){return e&&i.triggerEvent("refreshPostPromo",e),e}).then(function(e){return i.getProfitBelt(P).then(function(t){return[t,e]})}).then(function(r){var n=t(r,2),a=n[0],u=n[1],c=void 0===u?{}:u;if(e.profitBelt=a,e.postPromo=c,a&&a.beltBegin&&a.beltEnd){var l=o.getServerTime(),d=!(!c.dcstarttime||!c.dcendtime),p=!(!c.starttime||!c.endtime),h=parseInt(c.dcstarttime)||0,f=parseInt(c.dcendtime)||0,g=parseInt(a.beltForcast)||0,T=parseInt(a.beltBegin)||0,P=parseInt(a.beltEnd)||0,S=!!(g<l&&P>l&&a.beltUrl);d&&T==h&&P==f?(S&&(a.waistBandUrl=a.beltUrl.split(",")[0],i.setData({"beltAtmos.banner":a.waistBandUrl,"beltAtmos.show":!0}),i.updateAtmosType(6),s.reporter.reportExposure(m.EXP_WAISTBAND,{flowId:a.beltExt&&a.beltExt.flowId})),i.initPromoAtoms(e)):d&&!S?i.initPromoAtoms(e):S?(a.waistBandUrl=a.beltUrl.split(",")[0],i.setData({"beltAtmos.banner":a.waistBandUrl,"beltAtmos.show":!0}),i.updateAtmosType(6),i.triggerEvent("updateBeltInfo",{promoNoticeFlag:!1}),s.reporter.reportExposure(m.EXP_WAISTBAND,{flowId:a.beltExt&&a.beltExt.flowId})):p&&i.initPromoAtoms(e)}else i.initPromoAtoms(e)}).catch(function(t){i.initPromoAtoms(e)})}},initPromoAtoms:function(e){var t=e.postPromo||{};e.seckillFlag||e.isPresale||e.isYuYue||e.isQianggou||e.flashpurchaseFlag||(t.bannerimg?(this.initPostPromoAtmos(t),this.updateAtmosType(7)):this.updateAtmosType(0))},initPostPromoAtmos:function(e){var t=this,i=void 0;i=e.matid?2==e.activestage?Math.ceil(e.dcendtime/1e3):Math.ceil(e.dcstarttime/1e3):Math.ceil(new Date(e.endtime).getTime()/1e3),e.bannerimg=o.getImg(e.bannerimg);var r=n.only(e,["bannerimg","backcolor","textcolor","numcolor","numbackcolor","descword"]);this.setData({"promoteAtoms.config":r}),this.promoServerTime=o.getServerTime()/1e3|0,this.updatePromoAtomsTimer(i,function(){t.initAtmos()})},updatePromoAtomsTimer:function(e,t){var i=this,r=[0,0,0,0,0,0,0,0],s=e-this.promoServerTime;if(!(s>=0))return clearTimeout(this.countdownTimer),this.setData({timerNums:[0,0,0,0,0,0,0,0]}),void(t&&t());var n=s/86400%99|0,a=s/3600%24|0,u=s/60%60|0,m=s%60|0;r[0]=n/10|0,r[1]=n%10,r[2]=a/10|0,r[3]=a%10,r[4]=u/10|0,r[5]=u%10,r[6]=m/10|0,r[7]=m%10,this.setData({timerNums:r}),this.countdownTimer=setTimeout(function(){i.promoServerTime=o.getServerTime()/1e3|0,i.updatePromoAtomsTimer(e,t)},1e3)},handleSuyuanIconClick:function(){this.triggerEvent("handleSuyuanIconClick")}}};exports.default=c; 
 			}); 
		define("pages/item/itemBase/components/bannerAtmosphere/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{timerNums:[],beltAtmos:{},promoteAtoms:{},seckillAtmos:{},atmosType:0},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/bannerAtmospherePg/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),i=t(require("../../js/util/util")),r=t(require("../../../itemBase/constants/ptag-constants")),n={props:{pageShowCount:{type:Number},pageHideCount:{type:Number},pgBanner:{type:Object},fanxian:{type:Object},pingouInfo:{type:Object},pgBannerFlag:{type:String},bigPromoteInfo:{type:Object},actParticipantNum:{type:String},afterDiscountPrice:{type:String}},store:e.storeFn,watch:{pageShowCount:function(){this.pageHideClear&&(this.initTimer(),this.pageHideClear=!1)},pageHideCount:function(){this.countdownTimer&&(clearTimeout(this.countdownTimer),this.pageHideClear=!0)},pgBanner:{handler:function(t){t&&t.activeLeftTime>0&&(this.countdownTimer&&clearTimeout(this.countdownTimer),this.initTimer(t.activeLeftTime)),t&&5==t.flag&&t.icon&&i.reporter.reportExposure(r.EXP_BUTIE_BANNER_ICON),this.adjustPriceArea()}},bigPromoteInfo:{handler:function(t){t&&t.bannerImgWithPrice&&this.adjustPriceArea()}}},detached:function(){this.countdownTimer&&clearTimeout(this.countdownTimer)},methods:{adjustPriceArea:function(){var t=i.getClientInfo().windowWidth,e=this.pingouInfo||{},r=this.fanxian||{},n=e.price,o=r.amountDesc,a=void 0===o?"":o,s=r.fanXianTypeDesc,c=(n+""+a+(void 0===s?"":s)).length;t<375?c>11&&(this.priceSmallFontSize=!0):t<414&&c>12&&(this.priceSmallFontSize=!0),"暂无定价"==n&&(this.priceSmallFontSize=!0);var u=this.afterDiscountPrice;u&&(c+=2*u.length)>=28&&(this.hideReturnTip=!0)},initTimer:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pgBanner&&this.pgBanner.activeLeftTime;e<=0?this.triggerEvent("countDownOver"):(this.timeObj=i.getTimeDetail(e),this.countdownTimer=setTimeout(function(){e-=1,t.initTimer(e)},1e3))},showGwfxTips:function(){this.triggerEvent("showGwfxTips")},goActiveEntry:function(t){var e=t.currentTarget.dataset,n=e.tourl,o=e.flag;i.reporter.reportClick(r.CLICK_BANNER_ICON),5==o&&i.reporter.reportClick(r.CLICK_BUTIE_BANNER_ICON),1==o&&i.reporter.reportClick(r.CLICK_BIPIN_BANNER_ICON),n&&i.gotoUrl(this,{url:n})}}};exports.default=n; 
 			}); 
		define("pages/item/itemBase/components/bannerAtmospherePg/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{timeObj:{},priceSmallFontSize:!1,hideReturnTip:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/bottomBtn/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store"),e=require("../../js/util/util.js"),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(require("../../constants/ptag-constants")),r=require("../../../../../common/biz"),i={props:{isJx:Boolean,skuItem:Object,cart:Object,saleAtmos:Object,isCardMember:Boolean,isECard:Boolean,isECardOnce:Boolean,offlineHasShop:Boolean,bottomBtn:Array,hasBigouCode:Boolean,gwfxMoney:String,isOutOfStock:Boolean,choseShopId:String,isSubscribeCar:Boolean,locAddCartDirect:Boolean,isValueAddedLocShops:Boolean,cartNumShow:Boolean,showArrivalNotice:Boolean,launchAppParameter:String,maskSkuConfig:Object},store:t.storeFn,watch:{skuItem:{handler:function(t){if(t){var r=t.stock||{};this.isNoStock=0==r.StockState||34==r.StockState,"0"==t.venderId||this.hasReportExp||(e.reporter.reportExposure(o.EXP_DETAIL_FOOTER_SHOP),this.hasReportExp=!0),!this.isJx&&this.skuItem.spAttr&&3==this.skuItem.spAttr.Customize&&e.reporter.reportExposure(o.EXP_DETAIL_FOOTER_CUSTOMIZE)}},deep:!0}},methods:{chooseShop:function(){this.triggerEvent("chooseShop")},chooseInstallShop:function(){this.triggerEvent("chooseInstallShop")},modalTip:function(t){this.triggerEvent("modalTip",t)},method0:function(){this.triggerEvent(""+this.bottomBtn[0].method)},method1:function(t){var e=this;t.detail&&t.detail.formId?(0,r.setFormIdWithSession)(t.detail.formId).then(function(){e.triggerEvent(""+e.bottomBtn[1].method)}).catch(function(){e.triggerEvent(""+e.bottomBtn[1].method)}):this.triggerEvent(""+this.bottomBtn[1].method)},addToCart:function(t){var e=this.offlineHasShop,o=this.skuItem,r=o.locAddCartDirect,i=o.spAttr;"1"!==(void 0===i?{}:i).isLOC||r||e?this.triggerEvent("addToCart",t):this.triggerEvent("chooseShop")},buy:function(t){this.triggerEvent("buy",t)},cdkeyBuy:function(){e.reporter.reportClick(o.DETAIL_BIGOUMA_CLICK),this.hasBigouCode&&this.triggerEvent("cdkeyBuy")},gotoCart:function(){this.triggerEvent("gotoCart")},gotoCardList:function(){(0,e.gotoUrl)(this,{url:"https://wq.jd.com/pinbind/pintokenredirect?biz=ecard&url="+encodeURIComponent("https://giftcard.jd.com/giftcardpurchase/listGiftCardsForM.action?clientType=1")})},gotoCustom:function(){this.triggerEvent("gotoCustom")},gotoShop:function(){e.reporter.reportClick(o.DETAIL_FOOTER_SHOP);var t=this.skuItem.venderId;t&&(0,e.gotoUrl)(this,{xcx:{url:"/pages/shop/index/index",params:{venderId:t}},h5:{url:"https://wqshop.jd.com/mshop/gethomepage?venderid="+t}})},lookLike:function(){var t=this.skuItem,r="https://wqs.jd.com/search/searchsimilar.shtml?sceneid=18&sku="+t.skuId+"&jp="+t.price;e.reporter.reportClick(o.DETAIL_LOOK_SIMILAR_BUTTON),(0,e.gotoUrl)(this,{url:r})},stockNotice:function(t){var r=this.skuItem,i=r.skuId,s=r.itemType;e.reporter.reportClick(o.DETAIL_STOCK_NOTICE),(0,e.gotoUrl)(this,{xcx:{url:"/pages/item/subPackages/pages/arriveNotice/index",params:{sku:i,itemType:s}}})},subscribeCar:function(){e.reporter.reportClick(o.DETAIL_YUYUEKANCHE_CLICK);var t=this.choseShopId,r=void 0===t?"":t,i=this.skuItem.skuId,s="https://wq.jd.com/pinbind/pintokenredirect?biz=carbrand&url="+encodeURIComponent("https://carbrand.jd.com/m/html/reservationCar.html?skuId="+i+"&storeId="+r);(0,e.gotoUrl)(this,{url:s})},gotoChongyin:function(){e.reporter.reportClick(o.DETAIL_CHONGYIN_CLICK);var t="https://printing.m.jd.com/index.html#/?skuId="+this.skuItem.skuId;(0,e.gotoUrl)(this,{url:t})},gotoJdhealthOrder:function(){this.triggerEvent("gotoJdhealthOrder")},launchApp:function(t){var r=t.currentTarget.dataset.yuyueState;2==r?e.reporter.reportClick(o.CLICK_MASK_BTN_2):4==r&&e.reporter.reportClick(o.CLICK_MASK_BTN_4)},launchAppError:function(t){"empty"==t.currentTarget.dataset.type&&this.launchApp(t),this.triggerEvent("handleKlDownload")}}};exports.default=i; 
 			}); 
		define("pages/item/itemBase/components/bottomBtn/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,customerService:{},isNoStock:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/bottomBtnPg/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),r=t(require("../../../itemBase/constants/ptag-constants")),o=t(require("../../../itemBase/js/util/util.js")),n={props:{skuItem:Object,pgAddCartShow:Boolean,launchAppParameter:String,showArrivalNotice:Boolean},store:e.storeFn,watch:{skuItem:{handler:function(t){this.adjustBtns()},deep:!0},pgAddCartShow:function(t){this.adjustBtns()}},methods:{adjustBtns:function(){var t=this,e=this.pgAddCartShow,n=this.skuItem,i=n.venderId,s=n.canBuy,a=n.pingouInfo,u=void 0===a?{}:a,c=u.cannotAddCart,p=u.ext_info,h=void 0===p?{}:p;this.showShopEnter="0"!=i,this.showShopEnter&&!this.hasReportExp&&(o.reporter.reportExposure(r.EXP_DETAIL_FOOTER_SHOP),this.hasReportExp=!0),this.showAddCartBtn=e&&s&&!c&&1!=h.isHideCpsTuan,this.customerServiceShow&&this.showShopEnter&&this.showAddCartBtn&&setTimeout(function(){var e=t.createSelectorQuery();if(e){var r=void 0;e.selectAll(".btn_price").boundingClientRect(function(t){t&&t.length>1&&(r=t[1].bottom)}).exec(),e.selectAll(".btn_buy .btn_price .return_info").boundingClientRect(function(e){e&&e.length&&Math.abs(e[0].bottom-r)>5&&(t.priceFontSize="12")}).exec(),e.selectAll(".btn_txt_bottom").boundingClientRect(function(e){e&&e.length&&e[0].height>15&&(t.textBottomFontSize="8")}).exec()}},500)},serviceShow:function(){this.customerServiceShow=!0,this.adjustBtns()},gotoShop:function(){var t=this.skuItem.venderId;t&&o.gotoUrl(this,{xcx:{url:"/pages/shop/index/index",params:{venderId:t}},h5:{url:"https://wqshop.jd.com/mshop/gethomepage?venderid="+t}}),o.reporter.reportClick(r.DETAIL_FOOTER_SHOP)},handle:function(t){var e=this,n=t.currentTarget.dataset,i=n.event;if(!n.disabled){var s=this.skuItem&&this.skuItem.pingouInfo||{},a=s.specialAppZhuanXiang,u=s.isAppZxCanLaunch,c=s.cannotBuy,p=s.isNewerNoTuan,h=s.newerNoTuanSingleBuyMsgArr;"gotoBuy"==i&&a||"gotoTuan"==i&&u?this.launchAppError():"gotoBuy"==i&&!c&&p&&h?(o.reporter.reportExposure(r.EXP_NEWER_NOTUAN_SINGLEBUY_ALERT),this.triggerEvent("showDialog",{show:!0,type:"newerSingleBuy",specMsgArr:h,confirmBtnTxt:"免开团购买",cancelBtnTxt:"单独购买",onConfirm:function(){e.triggerEvent("gotoTuan",t),o.reporter.reportClick(r.CLICK_NEWER_NOTUAN_SINGLEBUY_NOTUAN)},onCancel:function(){e.triggerEvent(i),o.reporter.reportClick(r.CLICK_NEWER_NOTUAN_SINGLEBUY_SINGLE)}})):this.triggerEvent(i,t)}},launchApp:function(t){switch(t.currentTarget.dataset.type){case"buy":o.reporter.reportClick(r.CLICK_SPJXAPPZX_BUY_BTN);break;case"createTuan":o.reporter.reportClick(r.CLICK_JXAPPZX_CREATETUAN_BTN)}},launchAppError:function(){this.triggerEvent("handleKlDownload")},stockNotice:function(t){var e=this.skuItem,n=e.skuId,i=e.itemType;o.reporter.reportClick(r.DETAIL_STOCK_NOTICE),o.reporter.reportClick(r.CLICK_ARRIVAL_NOTICE_JX),o.gotoUrl(this,{xcx:{url:"/pages/item/subPackages/pages/arriveNotice/index",params:{sku:n,itemType:i}}})}}};exports.default=n; 
 			}); 
		define("pages/item/itemBase/components/bottomBtnPg/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var t=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:t.ENV.isPingouXcx,customerServiceShow:!1,showShopEnter:!1,showAddCartBtn:!1,priceFontSize:"",textBottomFontSize:""},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/businessEntry/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("../../../../../libs/promise.min.js")),i=require("./store"),t=require("../../js/model/baseModel.js"),r=require("../../js/util/util.js"),u=require("../../../../../common/userinfo_wqvue"),a=require("../../../../../common/utils.js"),s=e(require("../../../../../common/wxcontext.js")),o={props:{businessEntryObj:{type:Object,default:{}}},store:i.storeFn,watch:{businessEntryObj:{handler:function(e){e&&e.skuId&&this.initEntries()},deep:!0}},methods:{initEntries:function(){var e=this,i=this.businessEntryObj,t=i.skuId,u=i.jdCategory,a=void 0===u?[]:u;this.getBusinessEntriesByPPMS().then(function(i){var u=[],o={yijiuhuanxin:!1,tongkuanershou:!1,ziyingxinpin:!1};i.forEach(function(e){"yijiuhuanxin"===e.domId?o.yijiuhuanxin=!0:"tongkuanershou"===e.domId?"13765"!==a[0]&&(o.tongkuanershou=!0):"ziyingxinpin"===e.domId?o.ziyingxinpin=!0:"jingda"===e.domId&&(e.enterLink=s.default.JD.url.addUrlParam(e.enterLink,{clientType:"2"}))}),o.yijiuhuanxin&&u.push(e.getHuanXinEntry()),o.tongkuanershou&&u.push(e.getSkuNumByUsed()),o.ziyingxinpin&&u.push(e.getNewSkuByUsed()),u.length?n.default.all(u).then(function(n){var u=[];(u=i.filter(function(e){var i=n.filter(function(n){return n.name===e.domId});if(!("tongkuanershou"!==e.domId||i[0]&&i[0].data))return!1;if("ziyingxinpin"===e.domId)return!!(i[0]&&i[0].data&&i[0].data.newSkuId)&&(e.enterLink=e.enterLink.replace(/{#skuId#}/g,i[0].data.newSkuId),e.enterText=e.enterText.replace(/{#price#}/g,i[0].data.price),e.enterLink=(0,r.fixProtocol)(e.enterLink),!0);if("yijiuhuanxin"===e.domId&&e.whiteList){if(!i[0])return!1;new RegExp(e.whiteList).test(i[0].data)&&(e.enterLink=i[0].data)}return!!e.enterLink&&(e.enterLink=e.enterLink.replace(/{#skuId#}/g,t),e.enterLink=e.enterLink.replace(/{#cid1#}/g,a[0]),e.enterLink=e.enterLink.replace(/{#cid2#}/g,a[1]),e.enterLink=e.enterLink.replace(/{#cid3#}/g,a[2]),e.enterLink=(0,r.fixProtocol)(e.enterLink),!0)})).forEach(function(e){e.exposureRd&&r.reporter.reportExposure(e.exposureRd)}),e.entriesArr=u}):(i.forEach(function(e){e.exposureRd&&r.reporter.reportExposure(e.exposureRd),e.enterLink=e.enterLink.replace(/{#skuId#}/g,t),e.enterLink=e.enterLink.replace(/{#cid1#}/g,a[0]),e.enterLink=e.enterLink.replace(/{#cid2#}/g,a[1]),e.enterLink=e.enterLink.replace(/{#cid3#}/g,a[2]),e.enterLink=(0,r.fixProtocol)(e.enterLink)}),e.setData({entriesArr:i||[]}))})},getBusinessEntriesByPPMS:function(){var e=this.businessEntryObj,i=e.isJX,r=e.jdCategory,u=void 0===r?[]:r,s=e.spAttr,o=void 0===s?{}:s;return new n.default(function(e,n){(0,t.getPpmsData)("_itemEnterInfo").then(function(n){var t=[];t=n.filter(function(e){var n=!0;return!(!(e.domId&&e.enterTitle&&e.enterText&&e.enterLink&&(i||e.enterIcon))||i&&!e.jxEnterIcon)&&(!(!e.source||e.source.split(";").indexOf("3")<0)&&(e.cid1s&&"||"!=e.cid1s||e.cid2s&&"||"!=e.cid2s||e.cid3s&&"||"!=e.cid3s||(n=!1),e.cid1s="|"+e.cid1s+"|",e.cid2s="|"+e.cid2s+"|",e.cid3s="|"+e.cid3s+"|",e.specMarkVal="|"+e.specMarkVal+"|",!(n&&!~e.cid1s.indexOf("|"+u[0]+"|")&&!~e.cid2s.indexOf("|"+u[1]+"|")&&!~e.cid3s.indexOf("|"+u[2]+"|"))&&(!(e.specMark&&e.specMarkVal&&(!o[e.specMark]||!~e.specMarkVal.indexOf("|"+o[e.specMark]+"|")))&&(e.enterIcon=(0,a.getImg)(e.enterIcon),e))))}),e(t)}).catch(function(n){e([])})})},getSkuNumByUsed:function(){var e=this.businessEntryObj.skuId;return new n.default(function(n,i){(0,t.isErshouSku)(e).then(function(e){var i=(e.data||{}).CheckSkuResult,t=void 0===i?[]:i;n(0==e.errcode&&t.length?{name:"tongkuanershou",data:t[0].skuNum||0}:{name:"tongkuanershou",data:0})}).catch(function(e){n({name:"tongkuanershou",data:0})})})},getNewSkuByUsed:function(){var e=this.businessEntryObj.skuId;return new n.default(function(n,i){(0,t.isNewSku)(e).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.data||{},t=i.newSkuResult,r=void 0===t?{}:t,u=i.code;n(0==e.errcode&&200===u?{name:"ziyingxinpin",data:r}:{name:"ziyingxinpin",data:{}})}).catch(function(e){n({name:"ziyingxinpin",data:{}})})})},getHuanXinEntry:function(){var e=this.businessEntryObj,i=e.skuId,r=e.jdCategory,a=e.isZiying,s=(0,u.getAddress)().areaId,o=(void 0===s?"":s).split("_");return new n.default(function(e,n){(0,t.huanxinEnter)({skuId:i,jdCategory:r,isZiying:a,areaIdArr:o}).then(function(n){e(200!=n.code?{name:"yijiuhuanxin",data:""}:{name:"yijiuhuanxin",data:n.data})}).catch(function(n){e({name:"yijiuhuanxin",data:""})})})},gotoBusinessPage:function(e){var n=e.currentTarget.dataset,i=n.url,t=void 0===i?"":i,u=n.rd,a=n.pinbind;n.check;u&&r.reporter.reportClick(u),(0,r.gotoUrl)(this,{url:1==a?"https://wq.jd.com/pinbind/pintokenredirect?biz=weapp_item&url="+encodeURIComponent(t):t})}}};exports.default=o; 
 			}); 
		define("pages/item/itemBase/components/businessEntry/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{entriesArr:[],isPingouXcx:e.ENV.isPingouXcx},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/cardShare/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function e(e,i){var n=i.top,r=void 0===n?0:n,o=i.left,a=void 0===o?0:o,s=i.width,c=void 0===s?0:s,h=i.height,l=void 0===h?0:h,u=i.color,f=void 0===u?"#333333":u,d=i.background,p=void 0===d?"#ffffff":d,x=i.lineWidth,g=void 0===x?1:x,m=i.fill,v=void 0!==m&&m,w=i.shadow,T=void 0===w?[]:w,C=i.radius,y=void 0===C?[0,0,0,0]:C;e.save(),e.beginPath(),e.arc(a+y[0],r+y[0],y[0],Math.PI,1.5*Math.PI),e.moveTo(a+y[0],r),e.lineTo(a+c-y[1],r),e.arc(a+c-y[1],r+y[1],y[1],1.5*Math.PI,2*Math.PI),e.lineTo(a+c,r+l-y[2]),e.arc(a+c-y[2],r+l-y[2],y[2],0,.5*Math.PI),e.lineTo(a+y[3],r+l),e.arc(a+y[3],r+l-y[3],y[3],.5*Math.PI,Math.PI),e.lineTo(a,r+y[0]),T.length>0&&e.setShadow.apply(e,t(T)),v?(e.setFillStyle(p),e.fill()):(e.setLineWidth(g),e.setStrokeStyle(f),e.stroke()),e.closePath(),e.clip(),e.restore()}function i(t,e){var i=[0,0,0,0,0,0,0,0],n=t-e;if(n>0){var r=n/86400%99|0,o=n/3600%24|0,a=n/60%60|0,s=n%60|0;i[0]=r/10|0,i[1]=r%10,i[2]=o/10|0,i[3]=o%10,i[4]=a/10|0,i[5]=a%10,i[6]=s/10|0,i[7]=s%10}if(i[0]>0||i[1]>0){var c=new Date;return c.setTime(1e3*t),c.getMonth()+1+"月"+c.getDate()+"日 "+c.getHours()+"时结束"}return""+i[2]+i[3]+"时:"+i[4]+i[5]+"分:"+i[6]+i[7]+"秒结束"}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function t(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=require("./store"),o=require("../../../../../common/canvas"),a=require("../../../../../common/canvas2d"),s=require("../../../../../common/utils"),c=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../../common/wxcontext.js")),h=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(require("../../../../../common/fe_helper")),l=require("../../js/model/baseModel.js"),u=getApp(),f=u.systemInfo.SDKVersion,d=(0,s.compareVersion)(f,"1.9.90")>=0,p=c.default.JD.cookie.get("wxapp_type"),x={props:{shareOptions:{type:Object},showCanvas:{type:Boolean,value:!0},width:{type:Number,value:420},height:{type:Number,value:336}},store:r.storeFn,watch:{shareOptions:{handler:function(t){t.sku&&(2==p?this.isSupportCanvas2d?this.initCardImageJx2d():this.initCardImageJx():this.isSupportCanvas2d?this.initCardImage2d():this.initCardImage())},deep:!0}},data:{scale:u.systemInfo.pixelRatio,isInitCanvas2d:!1},created:function(){this.isSupportCanvas2d=(0,s.compareVersion)(f,"2.9.0")>=0},methods:{initCardImageJx2d:function(){var t=this,e=this.shareOptions,i=e.cover,r=e.coupons,o=void 0===r?[]:r,a=[];this.createSelectorQuery().select("#canvas-drawer").fields({node:!0,size:!0}).exec(function(e){e&&e.length&&e[0]&&e[0].node&&(t.canvas=e[0].node,t.ctx=t.canvas.getContext("2d"),t.ctx&&d&&(t.canvas.width=e[0].width*t.scale,t.canvas.height=e[0].height*t.scale,!t.isInitCanvas2d&&t.ctx.scale(t.scale,t.scale),t.isInitCanvas2d=!0,i.forEach(function(t){t="https://img10.360buyimg.com/n1/s440x440_"+t,a.push(t)}),o.length&&t.formatCoupons(o),t.hasCoupons=!!t.skuCouponText,Promise.all([t.loadImageByUrl(a[0]),t.loadImageByUrl("https://img10.360buyimg.com/img/s172x80_jfs/t1/100059/35/14062/10746/5e6223d0E65f18685/7cbd362d26a81d0f.png"),t.loadImageByUrl("https://img10.360buyimg.com/img/s123x41_jfs/t1/105260/22/14228/1145/5e622066Eb6ad588c/2ea3086e13d3c93d.png")]).then(function(e){var i=n(e,3),r=i[0],o=i[1],a=i[2];r&&o?t.renderCardImageJx2d(r,o,a,function(){console.log("商详：生成分享卡片成功")}):console.log("商详：生成分享卡片失败")})))})},renderCardImageJx2d:function(t,e,i,n){var r=this,o=this.width,s=this.height,c=this.shareOptions,h=c.price,l=c.oriPrice,u=c.processType,f=c.promomiao,d=c.flashpurchase;this.processType=u,(0,a.drawRect)(this.ctx,{width:o,height:s,background:"#ffffff"}).then(function(){return(0,a.drawRoundRect)(r.ctx,{top:20,left:10,width:400,height:300,radius:[0,0,30,8],fill:!0,background:"#ffffff",shadow:[0,4,8,"rgba(0,0,0,0.05)"]})}).then(function(){return r.renderCoverImageJx2d(t)}).then(function(){return r.renderButtonJx2d(e,f,d)}).then(function(){return r.renderPriceJx2d(h,l)}).then(function(){return r.hasCoupons?r.renderCouponTagJx2d(i):Promise.resolve()}).then(function(){return r.printCanvas(n)})},renderCoverImageJx2d:function(t){return(0,a.drawImage)(this.ctx,this.canvas,{url:t,top:20,left:100,width:220,height:220})},renderButtonJx2d:function(t,e,n){var r=this,o=292,s="";if(4==this.processType&&e&&e.intEndTime&&e.serverTime)s=i(e.intEndTime,e.serverTime);else if(5==this.processType&&n&&n.et){var c=parseInt(h.getServerTime()/1e3);s=i(parseInt(n.et/1e3),c)}return s&&(o-=15),new Promise(function(e,i){(0,a.drawRoundRect)(r.ctx,{top:240,left:10,width:400,height:80,radius:[0,0,30,8],fill:!0,background:"rgba(242,20,12,0.04)"}).then(function(){return(0,a.drawImage)(r.ctx,r.canvas,{url:t,left:238,top:240,width:172,height:80})}).then(function(){return(0,a.drawText)(r.ctx,{content:"立即购买",top:o,left:280,color:"#FFFFFF",fontSize:24,lineHeight:24})}).then(function(){if(s){r.ctx.font="normal 16px/20px Arial";var t=238+(172-r.ctx.measureText(s).width)/2;return(0,a.drawText)(r.ctx,{content:s,top:o+25,left:t,color:"#FFFFFF",fontSize:16,lineHeight:20})}return Promise.resolve()}).then(function(){return e()})})},renderPriceJx2d:function(t,e){var i=this,n={top:295,left:25},r=[],o=!1,s=!1,c="",h=0;Number.isNaN(parseFloat(t[0]))?(r=[t[0]],o=!0):t[0]<0?(r=["暂无定价"],o=!0):r=Number(t[0]).toFixed(2).split("."),4!=this.processType&&5!=this.processType||o||(c=4==this.processType?"秒杀价:":"闪购价",n.left-=5,e&&!Number.isNaN(e)&&e>0&&(n.top-=12,s=!0)),c&&(this.ctx.font="normal 18px/48px Arial",h=this.ctx.measureText(c).width),this.ctx.font="normal 22px/48px Arial";var l=o?0:this.ctx.measureText("￥").width;this.ctx.font="normal 36px/48px Arial";var u=this.ctx.measureText(r[0]).width+n.left+h+l,f="";return new Promise(function(t,d){var p=Promise.resolve();o||(p=new Promise(function(t,e){(0,a.drawText)(i.ctx,{content:c,top:n.top,left:n.left,color:"#F2270C",fontSize:18,lineHeight:48}).then(function(){return(0,a.drawText)(i.ctx,{content:"￥",top:n.top,left:n.left+h,color:"#F2270C",fontSize:22,lineHeight:48})}).then(function(){return t()})})),p.then(function(){return(0,a.drawText)(i.ctx,{content:r[0],top:n.top+2,left:n.left+h+l,color:"#F2270C",fontSize:36,lineHeight:48})}).then(function(){return r[1]?(f="."+r[1],(0,a.drawText)(i.ctx,{content:f,top:n.top+2,left:u,color:"#E93B3D",fontSize:22,lineHeight:48})):Promise.resolve()}).then(function(){if(s){i.ctx.font="normal 18px/20px Arial";var t=i.ctx.measureText("￥"+e).width;return new Promise(function(r,o){(0,a.drawText)(i.ctx,{content:"￥"+e,top:n.top+22,left:n.left,color:"#B1B1B1",fontFamily:"Arial",fontSize:18,lineHeight:20}).then(function(){return(0,a.drawRect)(i.ctx,{top:n.top+14,left:n.left+4,width:t-4,height:2,background:"#B1B1B1"})}).then(function(){return r()})})}return Promise.resolve()}).then(function(){return t()})})},renderCouponTagJx2d:function(t){var e=this,i=20,n=20;this.ctx.font="normal "+i+"px/"+n+"px Arial";var r=this.ctx.measureText(this.skuCouponText).width;if(r>115){var o=Math.ceil((r-115)/10);i-=o+1,n-=o+1,this.ctx.font="normal "+i+"px/"+n+"px Arial",r=this.ctx.measureText(this.skuCouponText).width}var s=8+(123-(r+8))/2;return new Promise(function(r,o){(0,a.drawImage)(e.ctx,e.canvas,{url:t,top:30,left:5,width:123,height:41}).then(function(){return(0,a.drawText)(e.ctx,{content:e.skuCouponText,top:57,left:s,color:"#543213",fontSize:i,lineHeight:n,fontFamily:"Arial"})}).then(function(){return r()})})},initCardImageJx:function(){var t=this,e=/\/\/(\w+).360buyimg/,i=this.shareOptions,r=i.cover,o=i.coupons,a=void 0===o?[]:o,s=[];this.ctx=c.default.createCanvasContext("canvas-drawer",this),this.ctx&&d&&(r.forEach(function(t){(t="https://img11.360buyimg.com/n1/s750x750_"+t).replace(e,function(e,i,n,r){return t=r.replace(i,"img10").replace(/^(https?:)?\/\//i,"https://"),r.replace(i,"img10")}),s.push(t)}),a.length&&this.formatCoupons(a),this.hasCoupons=!!this.skuCouponText,Promise.all([this.loadImageByUrl(s[0]),this.loadImageByUrl("https://img10.360buyimg.com/img/s172x80_jfs/t1/100059/35/14062/10746/5e6223d0E65f18685/7cbd362d26a81d0f.png"),this.loadImageByUrl("https://img10.360buyimg.com/img/s123x41_jfs/t1/105260/22/14228/1145/5e622066Eb6ad588c/2ea3086e13d3c93d.png")]).then(function(e){var i=n(e,3),r=i[0],o=i[1],a=i[2];r&&o?t.renderCardImageJx(r,o,a,function(){console.log("商详：生成分享卡片成功")}):console.log("商详：生成分享卡片失败")}))},renderCardImageJx:function(t,i,n,r){var a=this.data,s=a.width,c=a.height,h=this.shareOptions,l=h.price,u=h.oriPrice,f=h.processType,d=h.promomiao,p=h.flashpurchase;this.processType=f,(0,o.drawRect)(this.ctx,{width:s,height:c,background:"#ffffff"}),e(this.ctx,{top:20,left:10,width:400,height:300,radius:[0,0,30,8],fill:!0,background:"#ffffff",shadow:[0,4,8,"rgba(0,0,0,0.05)"]}),this.renderCoverImageJx(t),this.renderButtonJx(i,d,p),this.renderPriceJx(l,u),this.hasCoupons&&this.renderCouponTagJx(n),this.ctx.draw(!1,function(){var t=this;setTimeout(function(){t.printCanvas(r)},500)}.bind(this))},renderCoverImageJx:function(t){(0,o.drawImage)(this.ctx,{url:t,top:20,left:100,width:220,height:220,radius:0})},renderPriceJx:function(t,e){var i={top:295,left:25},n=[],r=!1,a=!1,s="",c=0;Number.isNaN(parseFloat(t[0]))?(n=[t[0]],r=!0):t[0]<0?(n=["暂无定价"],r=!0):n=Number(t[0]).toFixed(2).split("."),4!=this.processType&&5!=this.processType||r||(s=4==this.processType?"秒杀价:":"闪购价",i.left-=5,e&&!Number.isNaN(e)&&e>0&&(i.top-=12,a=!0)),s&&(this.ctx.font='normal 18px/48px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',c=this.ctx.measureText(s).width),this.ctx.font='normal 22px/48px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var h=r?0:this.ctx.measureText("￥").width;this.ctx.font='normal 36px/48px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var l=this.ctx.measureText(n[0]).width;!r&&(0,o.drawText)(this.ctx,{content:s,top:i.top,left:i.left,color:"#F2270C",fontSize:18,lineHeight:48}),!r&&(0,o.drawText)(this.ctx,{content:"￥",top:i.top,left:i.left+c,color:"#F2270C",fontSize:22,lineHeight:48}),(0,o.drawText)(this.ctx,{content:n[0],top:i.top+2,left:i.left+c+h,color:"#F2270C",fontSize:36,lineHeight:48});var u=l+i.left+c+h,f="";if(n[1]&&(f="."+n[1],(0,o.drawText)(this.ctx,{content:f,top:i.top,left:u,color:"#E93B3D",fontSize:22,lineHeight:48})),a){this.ctx.font='normal 18px/20px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var d=this.ctx.measureText("￥"+e).width;(0,o.drawText)(this.ctx,{content:"￥"+e,top:i.top+22,left:i.left,color:"#B1B1B1",fontFamily:'JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:18,lineHeight:20}),(0,o.drawRect)(this.ctx,{top:i.top+14,left:i.left+4,width:d-4,height:2,background:"#B1B1B1"})}},renderButtonJx:function(t,n,r){var a=292,s="";if(4==this.processType&&n&&n.intEndTime&&n.serverTime)s=i(n.intEndTime,n.serverTime);else if(5==this.processType&&r&&r.et){var c=parseInt(h.getServerTime()/1e3);s=i(parseInt(r.et/1e3),c)}if(s&&(a-=15),e(this.ctx,{top:240,left:10,width:400,height:80,radius:[0,0,30,8],fill:!0,background:"rgba(242,20,12,0.04)"}),(0,o.drawImage)(this.ctx,{url:t,left:238,top:240,width:172,height:80}),(0,o.drawText)(this.ctx,{content:"立即购买",top:a,left:280,color:"#FFFFFF",fontSize:24,lineHeight:24}),s){this.ctx.font='normal 16px/20px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var l=238+(172-this.ctx.measureText(s).width)/2;(0,o.drawText)(this.ctx,{content:s,top:a+25,left:l,color:"#FFFFFF",fontSize:16,lineHeight:20})}},renderCouponTagJx:function(t){var e=20,i=20;this.ctx.font="normal "+e+"px/"+i+'px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var n=this.ctx.measureText(this.skuCouponText).width;if(n>115){var r=Math.ceil((n-115)/10);e-=r+1,i-=r+1,this.ctx.font="normal "+e+"px/"+i+'px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',n=this.ctx.measureText(this.skuCouponText).width}var a=8+(123-(n+8))/2;(0,o.drawImage)(this.ctx,{url:t,top:30,left:5,width:123,height:41}),(0,o.drawText)(this.ctx,{content:this.skuCouponText,top:57,left:a,color:"#543213",fontSize:e,lineHeight:i,fontFamily:'JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif'})},initCardImage2d:function(){var t=this,e=this.shareOptions,i=e.cover,n=e.coupons,r=void 0===n?[]:n,o=[];this.createSelectorQuery().select("#canvas-drawer").fields({node:!0,size:!0}).exec(function(e){if(e&&e.length&&e[0]&&e[0].node&&(t.canvas=e[0].node,t.ctx=t.canvas.getContext("2d"),t.ctx&&d)){t.canvas.width=e[0].width*t.scale,t.canvas.height=e[0].height*t.scale,!t.isInitCanvas2d&&t.ctx.scale(t.scale,t.scale),t.isInitCanvas2d=!0,i.forEach(function(t){t="https://img10.360buyimg.com/n1/s480x480_"+t,o.push(t)}),1===o.length&&o.push(o[0]),r.length&&t.formatCoupons(r),t.hasCoupons=!!t.skuCouponText;var n=o[0];t.getPpmsImgs().then(function(e){n?t.renderCardImage2d(n,e,function(){console.log("商详：生成分享卡片成功")}):console.log("商详：生成分享卡片失败")})}})},renderCardImage2d:function(t,e,i){var n=this,r=this.width,o=this.height;(0,a.drawRect)(this.ctx,{width:r,height:o,background:"#ffffff"}).then(function(){return n.rendersImage2d(e)}).then(function(){return n.renderCoverImage2d(t)}).then(function(){return n.renderPrice2d()}).then(function(){return n.renderBuyButtom2d()}).then(function(){return n.printCanvas(i)})},rendersImage2d:function(t){var e=this;return new Promise(function(i,n){(0,a.drawImage)(e.ctx,e.canvas,{url:t,top:0,width:420,height:76,radius:[0,0,0,0]}).then(function(){return i()})})},renderCoverImage2d:function(t){var e=this,i=[8,8,8,8],n={width:240,height:240};return new Promise(function(r,o){(0,a.drawImage)(e.ctx,e.canvas,{url:t,top:86,width:n.width,height:n.height,radius:i}).then(function(){return r()})})},renderPrice2d:function(){var t=this,e=this.shareOptions,i=e.price,n=e.oriPrice,r=e.processType,o=this.shareOptions.linePrice,s="";switch(r){case 1:s="预约价",o="";break;case 2:s="预售价",o=n;break;case 3:s="抢购价",o="";break;case 4:s="秒杀价",o=n;break;case 5:s="闪购价",o=n}var c={top:180,left:255},h=44,l=[],u=!1,f=(l=Number.isNaN(parseFloat(i[0]))?[i[0]]:i[0]<0?["暂无定价"]:Number(i[0]).toFixed(2).split("."))[0];if("暂无定价"==f&&(u=!0,h=28),f.length>4){var d=f.length-4;h-=5*d+3}this.ctx.font="normal 24px/30px Arial";var p=this.ctx.measureText("￥").width;this.ctx.font="normal "+h+"px/48px Arial";var x=this.ctx.measureText(f).width,g=p+x,m="";return new Promise(function(e,i){(0,a.drawText)(t.ctx,{content:u?"":"￥",top:c.top,left:c.left,color:"#E93B3D",fontFamily:"Arial",fontWeight:"bold",fontSize:24,lineHeight:30}).then(function(){return(0,a.drawText)(t.ctx,{content:f,top:c.top,left:c.left+p,color:"#E93B3D",fontFamily:"Arial",fontWeight:"bold",fontSize:h,lineHeight:48})}).then(function(){return l[1]?(m="."+l[1],(0,a.drawText)(t.ctx,{content:m,top:c.top,left:c.left+g,color:"#E93B3D",fontFamily:"Arial",fontWeight:"bold",fontSize:24,lineHeight:30})):Promise.resolve()}).then(function(){return s?new Promise(function(e,i){(0,a.drawText)(t.ctx,{content:s,top:c.top-60,left:c.left,color:"#262626",fontSize:22,lineHeight:26}).then(function(){return e()})}):Promise.resolve()}).then(function(){if(o&&"暂无定价"!=o){var e=24;if(o.length>10){var i=o.length-10;e-=2*i}t.ctx.font="normal "+e+"px/"+e+"px Arial";var n=t.ctx.measureText("￥"+o).width;return new Promise(function(i,r){(0,a.drawText)(t.ctx,{content:"￥"+o,top:c.top+45,left:c.left,color:"#B1B1B1",fontFamily:"Arial",fontSize:e,lineHeight:e}).then(function(){return(0,a.drawRect)(t.ctx,{top:c.top+35,left:c.left+4,width:n-4,height:2,background:"#B1B1B1"})}).then(function(){return i()})})}return Promise.resolve()}).then(function(){return e()})})},renderCouponTag2d:function(t,e,i){var n=this,r=this.ctx.measureText(t).width;return new Promise(function(o,s){(0,a.drawRoundRect)(n.ctx,{top:e,left:i,width:r+10,height:28,radius:[4,4,4,4],color:"#E93B3D"}).then(function(){return(0,a.drawText)(n.ctx,{content:t,top:e+21,left:i+(r+10)/2,color:"#E93B3D",fontSize:20,lineHeight:20,textAlign:"center"})}).then(function(){return o()})})},renderBuyButtom2d:function(){var t=this;return new Promise(function(e,i){(0,a.drawRoundRect)(t.ctx,{top:262,left:255,width:160,height:64,radius:[32,32,32,32],fill:!0,background:"#E93B3D"}).then(function(){return(0,a.drawText)(t.ctx,{content:"立即购买",top:302,left:335,color:"#FFFFFF",fontSize:24,lineHeight:24,textAlign:"center"})}).then(function(){return e()})})},initCardImage:function(){var t=this,e=/\/\/(\w+).360buyimg/,i=this.shareOptions,r=i.cover,o=i.coupons,a=void 0===o?[]:o,s=[];if(this.ctx=c.default.createCanvasContext("canvas-drawer",this),this.ctx&&d){r.forEach(function(t){(t="http://img11.360buyimg.com/n1/s750x750_"+t).replace(e,function(e,i,n,r){return t=r.replace(i,"img10").replace(/^(https?:)?\/\//i,"https://"),r.replace(i,"img10")}),s.push(t)}),1===s.length&&s.push(s[0]),a.length&&this.formatCoupons(a),this.hasCoupons=!!this.skuCouponText;var h=[this.loadImageByUrl(s[0]),this.loadImageByUrl(s[1])];Promise.all(h).then(function(e){var i=n(e,2),r=i[0],o=i[1];r&&o?t.renderCardImage([r,o],function(){console.log("商详：生成分享卡片成功")}):console.log("商详：生成分享卡片失败")})}},renderCardImage:function(t,e){var i=this.data,n=i.width,r=i.height,a=this.shareOptions.price;(0,o.drawRect)(this.ctx,{width:n,height:r,background:"#ffffff"}),this.renderCoverImage(t),this.renderPrice(a),this.ctx.draw(!1,function(){var t=this;setTimeout(function(){t.printCanvas(e)},500)}.bind(this))},renderCoverImage:function(t){var e={width:200,height:200};(0,o.drawImage)(this.ctx,{url:t[0],top:80,width:e.width,height:e.height,radius:8}),(0,o.drawImage)(this.ctx,{url:t[1],top:80,left:e.width+20,width:e.width,height:e.height,radius:8})},renderPrice:function(t){var e={top:36,left:0},i=[];i=Number.isNaN(parseFloat(t[0]))?[t[0]]:t[0]<0?["暂无定价"]:Number(t[0]).toFixed(2).split("."),(0,o.drawText)(this.ctx,{content:"¥",top:e.top,left:e.left,color:"#E93B3D",fontSize:20,lineHeight:30}),(0,o.drawText)(this.ctx,{content:i[0],top:e.top,left:20,color:"#E93B3D",fontSize:32,lineHeight:48});var n=this.ctx.measureText(i[0]).width+20+2,r="";if(i[1]&&(r="."+i[1],(0,o.drawText)(this.ctx,{content:r,top:e.top,left:n,color:"#E93B3D",fontSize:20,lineHeight:30})),this.hasCoupons){var a=n+10;r&&(a=this.ctx.measureText(r).width+n+10),this.renderCouponTag(this.skuCouponText,e.top-26,a)}},renderCouponTag:function(t,i,n){var r=this.ctx.measureText(t).width;e(this.ctx,{top:i,left:n,width:r+10,height:28,radius:[4,4,4,4],color:"#E93B3D"}),(0,o.drawText)(this.ctx,{content:t,top:i+21,left:n+(r+10)/2,color:"#E93B3D",fontSize:20,lineHeight:20,textAlign:"center"})},formatCoupons:function(t){var e=t[0],i="";"3"==e.style?i=e.descDiscount1||"":e.limit>0&&"bg_yun"!=e.type?i="满"+e.limit+"减"+e.money:0!=e.limit&&"bg_yun"!=e.type||(i=e.money+"元"+e.typeName),this.skuCouponText=i},loadImageByUrl:function(t){return new Promise(function(e,i){c.default.downloadFile({url:t,success:function(t){e(t.tempFilePath||"")},fail:function(t){e("")}})})},printCanvas:function(t){var e=this;this.isSupportCanvas2d?c.default.canvasToTempFilePath({canvas:this.canvas,width:this.width*this.scale,height:this.height*this.scale,destWidth:this.width*this.scale,destHeight:this.height*this.scale,complete:function(i){e.triggerEvent("updateCardImage",{imageUrl:i.tempFilePath}),t&&t()}},this):c.default.canvasToTempFilePath({canvasId:"canvas-drawer",complete:function(e){this.triggerEvent("updateCardImage",{imageUrl:e.tempFilePath}),t&&t()}.bind(this)},this)},getPpmsImgs:function(){return new Promise(function(t,e){(0,l.getPpmsData)("_jdItemShareConfig").then(function(e){var i=/\/\/img\d+\.360buyimg\.com\//,n="";(e||[]).forEach(function(t){n=t.simg.replace(i,"//img10.360buyimg.com/")});var r=(n||"").replace(/(https?:)?\/\//,"https://");t(r)}).catch(function(e){t("")})})}}};exports.default=x; 
 			}); 
		define("pages/item/itemBase/components/cardShare/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{isSupportCanvas2d:!0},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/cardSharePg/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t,e){var i=e.url,r=e.top,n=void 0===r?0:r,a=e.left,o=void 0===a?0:a,c=e.width,s=void 0===c?200:c,l=e.height,h=void 0===l?200:l,d=e.radius,u=void 0!==d&&d,f=e.radiusInfo,x=void 0===f?[]:f;t.save(),u&&(t.beginPath(),t.moveTo(o,n+x[0]),t.lineTo(o,n+h-x[3]),t.quadraticCurveTo(o,n+h,o+x[3],n+h),t.lineTo(o+s-x[2],n+h),t.quadraticCurveTo(o+s,n+h,o+s,n+h-x[2]),t.lineTo(o+s,n+x[1]),t.quadraticCurveTo(o+s,n,o+s-x[1],n),t.lineTo(o+x[0],n),t.quadraticCurveTo(o,n,o,n+x[0]),t.closePath(),t.clip()),t.drawImage(i,o,n,s,h),t.restore()}function i(t,e){var i=e.top,r=void 0===i?0:i,n=e.left,a=void 0===n?0:n,o=e.width,c=void 0===o?0:o,s=e.height,l=void 0===s?0:s,h=e.color,d=void 0===h?"#333333":h,u=e.background,f=void 0===u?"#ffffff":u,x=e.lineWidth,g=void 0===x?1:x,p=e.fill,F=void 0!==p&&p,m=e.radius,v=void 0===m?[0,0,0,0]:m;t.save(),t.beginPath(),t.arc(a+v[0],r+v[0],v[0],Math.PI,1.5*Math.PI),t.moveTo(a+v[0],r),t.lineTo(a+c-v[1],r),t.arc(a+c-v[1],r+v[1],v[1],1.5*Math.PI,2*Math.PI),t.lineTo(a+c,r+l-v[2]),t.arc(a+c-v[2],r+l-v[2],v[2],0,.5*Math.PI),t.lineTo(a+v[3],r+l),t.arc(a+v[3],r+l-v[3],v[3],.5*Math.PI,Math.PI),t.lineTo(a,r+v[0]),F?(t.setFillStyle(f),t.fill()):(t.setLineWidth(g),t.setStrokeStyle(d),t.stroke()),t.closePath(),t.clip(),t.restore()}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function t(t,e){var i=[],r=!0,n=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(i.push(o.value),!e||i.length!==e);r=!0);}catch(t){n=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(n)throw a}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=require("./store"),a=require("../../../../../common/canvas"),o=require("../../../../../common/canvas2d"),c=require("../../../../../common/utils"),s=t(require("../../../../../common/wxcontext.js")),l=require("../../constants/constants"),h=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(require("../../js/util/util")),d=require("../../js/model/baseModel.js"),u=t(require("../../../../../libs/promise.min.js")),f=getApp(),x=f.systemInfo.SDKVersion,g=(0,c.compareVersion)(x,"1.9.90")>=0,p={props:{shareOptions:{type:Object},showCanvas:{type:Boolean,value:!0},width:{type:Number,value:420},height:{type:Number,value:336}},store:n.storeFn,watch:{shareOptions:{handler:function(t){t.sku&&(this.isSupportCanvas2d?this.initCardImage2d(t):this.initCardImage(t))},deep:!0}},data:{itemType:"",scale:f.systemInfo.pixelRatio,isInitCanvas2d:!1},created:function(){this.isSupportCanvas2d=(0,c.compareVersion)(x,"2.9.0")>=0},methods:{initCardImage2d:function(t){var e=this,i=t.cover,r=t.type;this.itemType=r,this.createSelectorQuery().select("#canvas-drawer").fields({node:!0,size:!0}).exec(function(t){t&&t.length&&t[0]&&t[0].node&&(e.canvas=t[0].node,e.ctx=e.canvas.getContext("2d"),e.ctx&&g&&(e.canvas.width=t[0].width*e.scale,e.canvas.height=t[0].height*e.scale,!e.isInitCanvas2d&&e.ctx.scale(e.scale,e.scale),e.isInitCanvas2d=!0,e.getBgImg(r).then(function(t){var r=t,n="https://img10.360buyimg.com/n1/s420x420_"+i[0],a="https://img10.360buyimg.com/n1/s272x80_jfs/t1/78821/34/5470/6184/5d391985Ecb6f43ea/d19e7caa695ed4ce.png";r&&n?e.renderCardImage2d({bgImg:r,coverImg:n,buttonImg:a},function(){console.log("商详：生成分享卡片成功")}):console.log("商详：生成分享卡片失败")})))})},renderCardImage2d:function(t,e){var i=this,r=t.bgImg,n=t.coverImg,a=t.buttonImg;this.renderWhiteBackGround2d().then(function(){return i.renderBackGround2d(r)}).then(function(){return i.renderCoverImage2d(n)}).then(function(){return i.renderPrices2d()}).then(function(){return i.renderButton2d(a)}).then(function(){return i.printCanvas(e)})},renderWhiteBackGround2d:function(){var t=this.width,e=this.height;return(0,o.drawRect)(this.ctx,{width:t,height:e,background:"#ffffff"})},renderBackGround2d:function(t){var e=this.width,i=this.height;return(0,o.drawImage)(this.ctx,this.canvas,{url:t,width:e,height:i,radius:[8,8,8,8]})},renderCoverImage2d:function(t){return(0,o.drawImage)(this.ctx,this.canvas,{url:t,left:15,top:108,width:210,height:210,radius:[8,0,0,8]})},renderPrices2d:function(){var t=this,e=this.shareOptions,i=e.price,r=e.fxPrice,n=e.jdPrice,a=e.activeLeftTime;return new u.default(function(e,o){switch(t.itemType){case l.ITEM_SHARE_TYPE.BYBT:t.renderScribingPrice2d(n).then(function(){return t.renderPrice2d(i,{top:230})}).then(function(){return e()});break;case l.ITEM_SHARE_TYPE.YYXR:t.renderScribingPrice2d(n).then(function(){return t.renderPrice2d(i,{top:230,fontSize:80,lineHeight:80,offsetTop:4})}).then(function(){return e()});break;case l.ITEM_SHARE_TYPE.XSGF:t.renderTimer2d(a).then(function(){return t.renderPgPrice2d(i)}).then(function(){return t.renderFxPrice2d(r,{price:i,isMiddle:!0,isPricePercent:!0})}).then(function(){return t.renderAfterFxPrice2d(i,r)}).then(function(){return e()});break;case l.ITEM_SHARE_TYPE.XSQF:t.renderTimer2d(a).then(function(){return t.renderPgPrice2d(i)}).then(function(){return t.renderFxPrice2d(r,{price:i,isMiddle:!0})}).then(function(){return t.renderAfterFxPrice2d(i,r,!0)}).then(function(){return e()});break;case l.ITEM_SHARE_TYPE.XRQF:t.renderPgPrice2d(i).then(function(){return t.renderFxPrice2d(r,{price:i,isMiddle:!0})}).then(function(){return t.renderAfterFxPrice2d(i,r,!0)}).then(function(){return e()});break;default:t.renderPrice2d(i).then(function(){return t.renderFxPrice2d(r)}).then(function(){return e()})}})},renderButton2d:function(t){var e=1*247..toFixed(2);return(0,o.drawImage)(this.ctx,this.canvas,{url:t,left:e,top:263,width:136,height:40})},renderPrice2d:function(t,e){var i=this,r={top:e&&e.top?e.top:176},n=e&&e.markFontSize?e.markFontSize:36,a=e&&e.fontSize?e.fontSize:60,c=e&&e.lineHeight?e.lineHeight:60,s=e&&e.offsetTop?e.offsetTop:2,l="";1*(l=Number.isNaN(parseFloat(t[0]))?t[0]:t[0]<0?"暂无定价":Number(t[0]).toFixed(2))==1&&(l="1");if(l.length>4){var h=l.length-4;a-=6*h,c-=6*h,n=parseInt(.6*a,10)}this.ctx.font="480 "+n+"px/"+c+"px Arial";var d=this.ctx.measureText("￥").width;this.ctx.font="480 "+a+"px/"+c+"px Arial";var f=this.ctx.measureText(l).width;return r.left=1*(225+(180-(d+f))/2).toFixed(2),new u.default(function(t,e){(0,o.drawText)(i.ctx,{content:"￥",top:r.top,left:r.left+4,color:"#FF4142",fontFamily:"Arial",fontWeight:480,fontSize:n,lineHeight:c}).then(function(){return(0,o.drawText)(i.ctx,{content:l,top:r.top+s,left:r.left+d-4,color:"#FF4142",fontFamily:"Arial",fontWeight:480,fontSize:a,lineHeight:c})}).then(function(){t()})})},renderFxPrice2d:function(t,e){var i=this;if(t=t.replace(/¥|￥/g,""),e&&e.isPricePercent){var r=0;(r=Number.isNaN(parseFloat(e.price[0]))?e.price[0]:parseFloat(e.price[0]))>0&&(t=parseInt(parseFloat(t/r*100,10))+"%")}var n=!/^\d/.test(t);this.ctx.font="normal 20px/20px Arial";var a=this.ctx.measureText(t).width,c=n?0:this.ctx.measureText("￥").width,s=e&&e.isMiddle?170:206,l=n?10:6,h=s+20+2,d=c+a+2*l,f=1*(225+(180-(28+d))/2).toFixed(2);return new u.default(function(e,r){(0,o.drawRoundRect)(i.ctx,{top:s-.5,left:f,width:28,height:29,radius:[2,0,0,2],fill:!0,background:"#FF4142"}).then(function(){return(0,o.drawText)(i.ctx,{content:"返",top:h,left:f+3,color:"#fff",fontSize:20,lineHeight:20})}).then(function(){return(0,o.drawRoundRect)(i.ctx,{top:s,left:f+28,width:d,height:28,radius:[0,2,2,0],color:"#FF4142"})}).then(function(){return n?u.default.resolve():(0,o.drawText)(i.ctx,{content:"￥",top:h,left:f+28+l,color:"#FF4142",fontFamily:"Arial",fontSize:20,lineHeight:20})}).then(function(){return(0,o.drawText)(i.ctx,{content:t,top:h,left:f+28+l+c-1,color:"#FF4142",fontFamily:"Arial",fontSize:20,lineHeight:20})}).then(function(){e()})})},renderScribingPrice2d:function(t){var e=this,i=26,r=22;if(t.length>6){var n=t.length-6;i-=2*n,r-=2*n}this.ctx.font="normal "+i+"px/26px Arial";var a=this.ctx.measureText("￥"+t).width;this.ctx.font="normal "+r+"px/26px Arial";var c=this.ctx.measureText("补贴后").width,s=1*(225+(180-(a+c+3))/2).toFixed(2);return new u.default(function(n,c){(0,o.drawText)(e.ctx,{content:"￥"+t,top:150,left:s,color:"#666666",fontFamily:"Arial",fontSize:i,lineHeight:26}).then(function(){return(0,o.drawRect)(e.ctx,{top:140,left:s+4,width:a-4,height:2,background:"#666666"})}).then(function(){return(0,o.drawText)(e.ctx,{content:"补贴后",top:148,left:s+a+3,color:"#666666",fontSize:r,lineHeight:26})}).then(function(){return n()})})},renderTimer2d:function(t){var e=this;if(t&&!(t<=0)){var i=h.getTimeDetail(t);this.ctx.font="normal 24px/26px Arial";var r="距结束";i.days>0&&(r+=" "+i.days+"天");var n=this.ctx.measureText(r).width,a=this.ctx.measureText(i.hours).width+2,c=this.ctx.measureText(i.minutes).width+2,s=this.ctx.measureText(i.seconds).width+2,l=15+n+8+1,d=l+a+20+1,f=d+c+20+1;return new u.default(function(t,n){(0,o.drawText)(e.ctx,{content:r,top:90,left:15,color:"#FFFFFF",fontSize:24,lineHeight:26}).then(function(){return(0,o.drawRect)(e.ctx,{top:67,left:l-3,width:a+4,height:26,radius:4,background:"#FFFFFF"})}).then(function(){return(0,o.drawText)(e.ctx,{content:i.hours,top:90,left:l,color:"#FF4142",fontSize:24,lineHeight:26})}).then(function(){return(0,o.drawText)(e.ctx,{content:":",top:89,left:l+a+6,color:"#FFFFFF",fontSize:24,lineHeight:26})}).then(function(){return(0,o.drawRect)(e.ctx,{top:67,left:d-3,width:c+4,height:26,radius:4,background:"#FFFFFF"})}).then(function(){return(0,o.drawText)(e.ctx,{content:i.minutes,top:90,left:d,color:"#FF4142",fontSize:24,lineHeight:26})}).then(function(){return(0,o.drawText)(e.ctx,{content:":",top:89,left:d+c+6,color:"#FFFFFF",fontSize:24,lineHeight:26})}).then(function(){return(0,o.drawRect)(e.ctx,{top:67,left:f-3,width:s+4,height:26,radius:4,background:"#FFFFFF"})}).then(function(){return(0,o.drawText)(e.ctx,{content:i.seconds,top:90,left:f,color:"#FF4142",fontSize:24,lineHeight:26})}).then(function(){return t()})})}},renderPgPrice2d:function(t){var e=this,i="",r=26,n=20;if((i=Number.isNaN(parseFloat(t[0]))?t[0]:t[0]<0?"暂无定价":Number(t[0]).toFixed(2)).length>7){var a=i.length-7;r-=2*a,n-=2*a}this.ctx.font="normal "+n+"px/26px Arial";var c=this.ctx.measureText("拼购价").width;this.ctx.font="normal "+r+"px/26px Arial";var s=this.ctx.measureText("￥"+i).width,l=1*(225+(180-(c+s))/2).toFixed(2);return new u.default(function(t,a){(0,o.drawText)(e.ctx,{content:"拼购价",top:148,left:l,color:"#666666",fontFamily:"Arial",fontSize:n,lineHeight:26}).then(function(){return(0,o.drawText)(e.ctx,{content:"￥"+i,top:150,left:l+c,color:"#666666",fontFamily:"Arial",fontSize:r,lineHeight:26})}).then(function(){return t()})})},renderAfterFxPrice2d:function(t,e,i){var r=this,n=0,a="",c=36,s=22,l=2,h=parseFloat(e.replace(/¥|￥/g,""));if(i)a="0",c=50,l=4;else{if((n=Number.isNaN(parseFloat(t[0]))?t[0]:parseFloat(t[0]))<h)return;if((a=(n-h).toFixed(2)).length>5){var d=a.length-5;c-=3*d,s-=2*d}}this.ctx.font="normal "+s+"px/36px Arial";var f=this.ctx.measureText("返后").width;this.ctx.font="480 "+(c-4)+"px/36px Arial";var x=this.ctx.measureText("￥").width;this.ctx.font="480 "+c+"px/36px Arial";var g=this.ctx.measureText(a).width,p=1*(225+(180-(f+x+g+3))/2).toFixed(2);return new u.default(function(t,e){(0,o.drawText)(r.ctx,{content:"返后",top:246,left:p,color:"#666666",fontSize:s,lineHeight:36}).then(function(){return(0,o.drawText)(r.ctx,{content:"￥",top:250,left:p+f+3,color:"#FF4142",fontFamily:"Arial",fontWeight:480,fontSize:c-4,lineHeight:36})}).then(function(){return(0,o.drawText)(r.ctx,{content:a,top:246+l,left:p+f+x,color:"#FF4142",fontFamily:"Arial",fontWeight:480,fontSize:c,lineHeight:36})}).then(function(){return t()})})},initCardImage:function(t){var e=this,i=t.cover,n=t.type;this.itemType=n,this.ctx=s.default.createCanvasContext("canvas-drawer",this),this.ctx&&g&&this.getBgImg(n).then(function(t){var n=[e.loadImageByUrl(t),e.loadImageByUrl("https://img10.360buyimg.com/n1/s210x210_"+i[0]),e.loadImageByUrl("https://img10.360buyimg.com/n1/s136x40_jfs/t1/78821/34/5470/6184/5d391985Ecb6f43ea/d19e7caa695ed4ce.png")];u.default.all(n).then(function(t){var i=r(t,3),n=i[0],a=i[1],o=i[2];n&&a&&o?e.renderCardImage({bgImg:n,coverImg:a,buttonImg:o},function(){console.log("商详：生成分享卡片成功")}):console.log("商详：生成分享卡片失败")})})},renderCardImage:function(t,e){var i=this,r=t.bgImg,n=t.coverImg,o=t.buttonImg,c=this.width,s=this.height,h=this.shareOptions,d=h.price,u=h.fxPrice,f=h.jdPrice,x=h.activeLeftTime;switch((0,a.drawRect)(this.ctx,{width:c,height:s,background:"#ffffff"}),this.renderBackGround(r),this.renderCoverImage(n),this.itemType){case l.ITEM_SHARE_TYPE.BYBT:this.renderScribingPrice(f),this.renderPrice(d,{top:230});break;case l.ITEM_SHARE_TYPE.YYXR:this.renderScribingPrice(f),this.renderPrice(d,{top:230,fontSize:80,lineHeight:80,offsetTop:4});break;case l.ITEM_SHARE_TYPE.XSGF:this.renderTimer(x),this.renderPgPrice(d),this.renderFxPrice(u,{price:d,isMiddle:!0,isPricePercent:!0}),this.renderAfterFxPrice(d,u);break;case l.ITEM_SHARE_TYPE.XSQF:this.renderTimer(x),this.renderPgPrice(d),this.renderFxPrice(u,{price:d,isMiddle:!0}),this.renderAfterFxPrice(d,u,!0);break;case l.ITEM_SHARE_TYPE.XRQF:this.renderPgPrice(d),this.renderFxPrice(u,{price:d,isMiddle:!0}),this.renderAfterFxPrice(d,u,!0);break;default:this.renderPrice(d),this.renderFxPrice(u)}this.renderButton(o),this.ctx.draw(!1,function(){setTimeout(function(){i.printCanvas(e)},500)})},renderBackGround:function(t){var i=this.width,r=this.height;e(this.ctx,{url:t,width:i,height:r,radius:!0,radiusInfo:[8,8,8,8]})},renderCoverImage:function(t){e(this.ctx,{url:t,left:15,top:108,width:210,height:210,radius:!0,radiusInfo:[8,0,0,8]})},renderTimer:function(t){if(t&&!(t<=0)){var e=h.getTimeDetail(t);this.ctx.font='normal 24px/26px "Helvetica Neue", Helvetica, Arial, sans-serif';var i="距结束";e.days>0&&(i+=" "+e.days+"天");var r=this.ctx.measureText(i).width,n=this.ctx.measureText(e.hours).width+2,o=this.ctx.measureText(e.minutes).width+2,c=this.ctx.measureText(e.seconds).width+2;(0,a.drawText)(this.ctx,{content:i,top:90,left:15,color:"#FFFFFF",fontSize:24,lineHeight:26});var s=15+r+8+1;(0,a.drawRect)(this.ctx,{top:67,left:s-3,width:n+4,height:26,radius:4,background:"#FFFFFF"}),(0,a.drawText)(this.ctx,{content:e.hours,top:90,left:s,color:"#FF4142",fontSize:24,lineHeight:26}),(0,a.drawText)(this.ctx,{content:":",top:89,left:s+n+6,color:"#FFFFFF",fontSize:24,lineHeight:26});var l=s+n+20+1;(0,a.drawRect)(this.ctx,{top:67,left:l-3,width:o+4,height:26,radius:4,background:"#FFFFFF"}),(0,a.drawText)(this.ctx,{content:e.minutes,top:90,left:l,color:"#FF4142",fontSize:24,lineHeight:26}),(0,a.drawText)(this.ctx,{content:":",top:89,left:l+o+6,color:"#FFFFFF",fontSize:24,lineHeight:26});var d=l+o+20+1;(0,a.drawRect)(this.ctx,{top:67,left:d-3,width:c+4,height:26,radius:4,background:"#FFFFFF"}),(0,a.drawText)(this.ctx,{content:e.seconds,top:90,left:d,color:"#FF4142",fontSize:24,lineHeight:26})}},renderPgPrice:function(t){var e="",i=26,r=20;if((e=Number.isNaN(parseFloat(t[0]))?t[0]:t[0]<0?"暂无定价":Number(t[0]).toFixed(2)).length>7){var n=e.length-7;i-=2*n,r-=2*n}this.ctx.font="normal "+r+'px/26px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var o=this.ctx.measureText("拼购价").width;this.ctx.font="normal "+i+'px/26px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var c=1*(225+(180-(o+this.ctx.measureText("￥"+e).width))/2).toFixed(2);(0,a.drawText)(this.ctx,{content:"拼购价",top:148,left:c,color:"#666666",fontFamily:'JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:r,lineHeight:26}),(0,a.drawText)(this.ctx,{content:"￥"+e,top:150,left:c+o,color:"#666666",fontFamily:'JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:i,lineHeight:26})},renderAfterFxPrice:function(t,e,i){var r=0,n="",o=36,c=22,s=2,l=parseFloat(e.replace(/¥|￥/g,""));if(i)n="0",o=50,s=4;else{if((r=Number.isNaN(parseFloat(t[0]))?t[0]:parseFloat(t[0]))<l)return;if((n=(r-l).toFixed(2)).length>5){var h=n.length-5;o-=3*h,c-=2*h}}this.ctx.font="normal "+c+'px/36px "Helvetica Neue", Helvetica, Arial, sans-serif';var d=this.ctx.measureText("返后").width;this.ctx.font="normal "+(o-4)+'px/36px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var u=this.ctx.measureText("￥").width;this.ctx.font="normal "+o+'px/36px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var f=1*(225+(180-(d+u+this.ctx.measureText(n).width+3))/2).toFixed(2);(0,a.drawText)(this.ctx,{content:"返后",top:246,left:f,color:"#666666",fontSize:c,lineHeight:36}),(0,a.drawText)(this.ctx,{content:"￥",top:250,left:f+d+3,color:"#FF4142",fontFamily:'JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:o-4,lineHeight:36}),(0,a.drawText)(this.ctx,{content:n,top:246+s,left:f+d+u,color:"#FF4142",fontFamily:'JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:o,lineHeight:36})},renderScribingPrice:function(t){var e=26,i=22;if(t.length>6){var r=t.length-6;e-=2*r,i-=2*r}this.ctx.font="normal "+e+'px/26px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var n=this.ctx.measureText("￥"+t).width;this.ctx.font="normal "+i+'px/26px "Helvetica Neue", Helvetica, Arial, sans-serif';var o=1*(225+(180-(n+this.ctx.measureText("补贴后").width+3))/2).toFixed(2);(0,a.drawText)(this.ctx,{content:"￥"+t,top:150,left:o,color:"#666666",fontFamily:'JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:e,lineHeight:26}),(0,a.drawRect)(this.ctx,{top:140,left:o+4,width:n-4,height:2,background:"#666666"}),(0,a.drawText)(this.ctx,{content:"补贴后",top:148,left:o+n+3,color:"#666666",fontSize:i,lineHeight:26})},renderPrice:function(t,e){var i={top:e&&e.top?e.top:176},r=e&&e.markFontSize?e.markFontSize:36,n=e&&e.fontSize?e.fontSize:60,o=e&&e.lineHeight?e.lineHeight:60,c=e&&e.offsetTop?e.offsetTop:2,s="";1*(s=Number.isNaN(parseFloat(t[0]))?t[0]:t[0]<0?"暂无定价":Number(t[0]).toFixed(2))==1&&(s="1");if(s.length>4){var l=s.length-4;n-=6*l,o-=6*l,r=parseInt(.6*n,10)}this.ctx.font="normal "+r+"px/"+o+'px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var h=this.ctx.measureText("￥").width;this.ctx.font="normal "+n+"px/"+o+'px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var d=this.ctx.measureText(s).width;i.left=1*(225+(180-(h+d))/2).toFixed(2),(0,a.drawText)(this.ctx,{content:"￥",top:i.top,left:i.left+4,color:"#FF4142",fontFamily:'JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:r,lineHeight:o}),(0,a.drawText)(this.ctx,{content:s,top:i.top+c,left:i.left+h-4,color:"#FF4142",fontFamily:'JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:n,lineHeight:o})},renderFxPrice:function(t,e){if(t=t.replace(/¥|￥/g,""),e&&e.isPricePercent){var r=0;(r=Number.isNaN(parseFloat(e.price[0]))?e.price[0]:parseFloat(e.price[0]))>0&&(t=parseInt(parseFloat(t/r*100,10))+"%")}var n=!/^\d/.test(t);this.ctx.font='normal 20px/20px JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif';var o=this.ctx.measureText(t).width,c=n?0:this.ctx.measureText("￥").width,s=e&&e.isMiddle?170:206,l=n?10:6,h=s+20+2,d=c+o+2*l,u=1*(225+(180-(28+d))/2).toFixed(2);i(this.ctx,{top:s-.5,left:u,width:28,height:29,radius:[4,0,0,4],fill:!0,background:"#FF4142"}),(0,a.drawText)(this.ctx,{content:"返",top:h,left:u+3,color:"#fff",fontSize:20,lineHeight:20}),i(this.ctx,{top:s,left:u+28,width:d,height:28,radius:[0,4,4,0],color:"#FF4142"}),!n&&(0,a.drawText)(this.ctx,{content:"￥",top:h,left:u+28+l,color:"#FF4142",fontFamily:'JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:20,lineHeight:20}),(0,a.drawText)(this.ctx,{content:t,top:h,left:u+28+l+c-2,color:"#FF4142",fontFamily:'JDZH-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif',fontSize:20,lineHeight:20})},renderButton:function(t){var i=1*247..toFixed(2);e(this.ctx,{url:t,left:i,top:263,width:136,height:40})},loadImageByUrl:function(t){return new u.default(function(e,i){s.default.downloadFile({url:t,success:function(t){e(t.tempFilePath||"")},fail:function(t){e("")}})})},printCanvas:function(t){var e=this;this.isSupportCanvas2d?s.default.canvasToTempFilePath({canvas:this.canvas,width:this.width*this.scale,height:this.height*this.scale,destWidth:this.width*this.scale,destHeight:this.height*this.scale,complete:function(i){e.triggerEvent("updateCardImage",{imageUrl:i.tempFilePath}),t&&t()}},this):s.default.canvasToTempFilePath({canvasId:"canvas-drawer",complete:function(i){e.triggerEvent("updateCardImage",{imageUrl:i.tempFilePath}),t&&t()}},this)},getBgImg:function(t){var e="https://img10.360buyimg.com/img/s420x336_jfs/t1/88250/39/12870/19728/5e524a1cE262b51a5/8048fe3d033eb52a.png";return new u.default(function(i,r){(0,d.getPpmsData)("_jxItemShareConfig").then(function(r){var n=/\/\/img\d+\.360buyimg\.com\//,a="//img10.360buyimg.com/",o="",c="";(r||[]).forEach(function(e){"default"==e.mark&&(o=e.bgimg.replace(n,a)),e.mark==t&&(c=e.bgimg.replace(n,a))});var s=(c||o||e).replace(/(https?:)?\/\//,"https://");i(s)}).catch(function(t){i(e)})})}}};exports.default=p; 
 			}); 
		define("pages/item/itemBase/components/cardSharePg/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{isSupportCanvas2d:!0},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/comment/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function e(t){var e=Object.assign({},t);return e.postTime=e.creationTime.substr(0,10),e.skuDesc=(e.productColor+" "+e.productSize).trim(),e.thumbs=e.images?e.images.map(function(t){var e=t.imgUrl.replace(/\/n\d{1,2}\//i,"/n8/");return o.getImg(e,200,400)}):[],e.videos=e.videos?e.videos.map(function(t){var e=t.mainUrl.replace(/\/n\d{1,2}\//i,"/n8/");return{imgUrl:o.getImg(e,200,400),videoUrl:t.remark}}):[],e.userImageUrl="misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg"==e.userImageUrl?"img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png":e.userImageUrl,e}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./store"),o=t(require("../../../../../common/fe_helper.js")),n=require("../../js/model/baseModel.js"),i=t(require("../../../itemBase/js/util/util.js")),a=t(require("../../../itemBase/constants/ptag-constants")),s={props:{isPingou:{type:Boolean},skuId:{type:String},venderId:{type:String},category:{type:Array},isAppLaunch:{type:Boolean}},store:r.storeFn,watch:{skuId:function(t,e){t&&t!=e&&this.init(t)}},methods:{init:function(t){var r=this;(0,n.getCommentList)(0,0,t).then(function(t){var o=t.productCommentSummary,n=[],s=o.CommentCount>0?parseInt(100*o.GoodRate):0;if(o.SensitiveBook&&1==o.SensitiveBook)return r.setData({"review.total":0}),r.triggerEvent("handleSensitive",!0),void r.triggerEvent("handleComment",{launch:!1});r.triggerEvent("handleSensitive",!1),r.triggerEvent("handleComment",{launch:o.CommentCount>0,favorablerate:s}),t.comments[0]&&n.push(e(t.comments[0])),!r.isPingou&&t.comments[1]&&n.push(e(t.comments[1]));var u={total:o.CommentCount,totalStr:o.CommentCountStr,defaultGoodCountStr:o.DefaultGoodCountStr,percent:s,detail:n,entries:[{name:"好评",countStr:o.GoodCountStr},{name:"中评",countStr:o.GeneralCountStr},{name:"差评",countStr:o.PoorCountStr},{name:"晒单",countStr:o.ShowCountStr}],features:t.hotCommentTagStatistics};r.setData({review:u}),i.reporter.reportExposure(a.EXP_VIEW_COMMENTS)}).catch(function(t){throw t})},showCommentPage:function(t){if(this.data.review.total&&0!=this.data.review.total){var e=t.currentTarget.dataset,r=e.rid,o=void 0===r?"":r,n=e.report;switch(this.triggerEvent("changeCpart",{cpart:"comment",rid:o}),i.reporter.reportClick(a.VIEW_COMMENT),n){case"top":i.reporter.reportClick(a.VIEW_ENTRY_TOP);break;case"bottom":i.reporter.reportClick(a.VIEW_ENTRY_BOTTOM);break;default:i.reporter.reportClick(a.VIEW_ENTRY_TEXT)}}},previewCommentImg:function(t){var e=t.currentTarget.dataset,r=e.index,n=e.idx,i=this.data.review.detail[r].images.map(function(t){return o.getImg(t.imgUrl,750,1500)});wx.previewImage({current:i[n],urls:i,success:function(){}})},gotoCinema:function(t){var e=t&&t.currentTarget.dataset.url;e&&("wifi"==getApp().networkType||!i.ENV.isPingouXcx&&!this.isPingou||this.triggerEvent("showVideoToast"),this.setData({showVideo:!0,url:e}))},back:function(){this.setData({showVideo:!1})}}};exports.default=s; 
 			}); 
		define("pages/item/itemBase/components/comment/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{skuId:"",state:{isPingouXcx:e.ENV.isPingouXcx,review:{},showVideo:!1,url:""},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/commentItems/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n=require("./store"),r=t(require("../../../../../common/fe_helper.js")),o=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../../common/wxcontext.js")),a=t(require("../../../itemBase/js/util/util.js")),i={props:{entries:{type:Array},isPingou:Boolean},store:n.storeFn,watch:{entries:function(){this.createData()}},mounted:function(){},destroyed:function(){},methods:{createData:function(){var t=this,n=this.data.entries.map(function(t,n){return e({},t,{contentClass:"content__text",contentExpand:!1,contentFold:!1})});this.setData({loopArray:n},function(){t.setShowAll()})},previewImage:function(t){var e=this.data.entries,n=t.currentTarget.dataset,a=n.commIdx,i=n.imgIdx,s=e[a]&&e[a].thumbs&&e[a].thumbs.map(function(t){return r.getImg(t,750,1500)});s&&s.length&&o.default.previewImage({current:s[i],urls:s})},previewVideo:function(t){var e=t.currentTarget.dataset.url;"wifi"==getApp().networkType||!this.isPingou&&!a.ENV.isPingouXcx||this.triggerEvent("showVideoToast"),this.triggerEvent("previewVideo",{url:e})},handleFeedback:function(t){var e=t.currentTarget.dataset,n=e.productid,r=e.orderid,o=e.guid;a.gotoUrl(this,{url:"https://wqs.jd.com/wxsq_project/comment/commentDetail/index.html?PTAG=37287.3.1&productid="+n+"&guid="+o+"&orderid="+r})},setShowAll:function(){var t=this,e=this.data.loopArray;this.createSelectorQuery().selectAll(".content__text").boundingClientRect(function(n){n.forEach(function(t,n){t.height>130&&(e[n].contentClass="content__text hide",e[n].contentExpand=!0,e[n].contentFold=!1)}),t.setData({loopArray:e})}).exec()},handleShowAll:function(t){var e=t.currentTarget.dataset.index,n=this.data.loopArray;n[e].contentClass="content__text",n[e].contentExpand=!1,n[e].contentFold=!0,this.setData({loopArray:n})},handleShowBack:function(t){var e=t.currentTarget.dataset.index,n=this.data.loopArray;n[e].contentClass="content__text hide",n[e].contentExpand=!0,n[e].contentFold=!1,this.setData({loopArray:n})},showVideoToast:function(){this.triggerEvent("showVideoToast")}}};exports.default=i; 
 			}); 
		define("pages/item/itemBase/components/commentItems/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../common/wxcontext.js"));exports.storeFn=function(){return{state:{isPingouApp:2==e.default.JD.cookie.get("wxapp_type")},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/customService/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),t=require("../../js/model/baseModel.js"),o=require("../../js/util/util.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../common/wxcontext.js")),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(require("../../constants/ptag-constants")),r={props:{skuItem:{type:Object,value:{}}},store:e.storeFn,watch:{"skuItem.skuId":{handler:function(e){e&&this.init(e)}},"skuItem.venderId":{handler:function(e){var o=this;e&&(0,t.getVenderInfo)(e).then(function(e){if(0==e.errcode&&e.data&&e.data.length>0){var t=e.data[0].shopInfo.phoneNum;t&&(o.phoneNum=t,o.triggerEvent("serviceShow"))}})}}},computed:{customServiceUrl:function(){return this.skuItem?["https://wq.jd.com/mjgj/dongdong/goodsquery?skuid="+this.skuItem.skuId,"name="+encodeURIComponent(this.skuItem.skuName),"imgUrl="+encodeURIComponent(this.skuItem.focusImages&&this.skuItem.focusImages[0]),"price="+this.skuItem.jdPrice,"source=0","entry=2",this.isPingouXcx?"isolation=true":""].join("&"):""}},methods:{init:function(e){var o=this;(0,t.checkChat)(e).then(function(e){var t=e.code;o.customServiceStatus=1==t?"online":3==t?"offline":"",o.customServiceStatus&&o.triggerEvent("serviceShow")})},closeActionSheet:function(){this.showActionSheetFlag=!1},contactService:function(){var e=this.customServiceUrl,t=void 0===e?"":e,s=this.customServiceStatus,r=this.phoneNum,n=[];o.reporter.reportClick(i.DETAIL_FOOTER_SERVICE),r&&n.unshift("拨打电话 "+r),s&&n.push("在线客服"),this.customServicePhone=r,this.customServiceList=n,r?this.showActionSheetFlag=!0:t&&(0,o.gotoUrl)(this,{url:t})},handleActionClick:function(e){var t=e.detail;switch(this.showActionSheetFlag=!1,t){case 0:if(this.customServicePhone){var i=(""+this.customServicePhone).match(/([0-9-])+/);i&&i[0]&&s.default.makePhoneCall({phoneNumber:i[0]})}break;case 1:this.customServiceUrl&&(0,o.gotoUrl)(this,{url:this.customServiceUrl})}}}};exports.default=r; 
 			}); 
		define("pages/item/itemBase/components/customService/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,customServiceStatus:"",phoneNum:"",customServiceList:[],showActionSheetFlag:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/daojiaRecommend/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),t=require("../../js/model/baseModel.js"),o=require("../../../../../common/fe_helper.js"),i=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../common/wxcontext.js")),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(require("../../../itemBase/js/util/util.js")),r={props:{upc:{type:String,observer:"updateRecommend"},adid:{type:String,observer:"updateRecommend"}},store:e.storeFn,ready:function(){this.initRecommendData()},methods:{initRecommendData:function(){var e=this,o=this.data.upc;(0,t.getRecommendDaojiaSku)(o).then(function(t){e.formatDaodianData(t)}).catch(function(){e.setData({showDaodianInfo:!1})})},updateRecommend:function(e,t){e&&t&&e!=t&&this.initRecommendData()},showTimeTips:function(){var e=this.data.deliverTips,t=void 0===e?{}:e;i.default.showModal({title:t.strTitle||"预计送达时间说明",content:t.strDetail,align:"left",showCancel:!1,confirmText:"我知道了",confirmColor:"#E93B3D"})},formatDaodianData:function(e){var t=e||{},i=t.listTags,a=void 0===i?[]:i,r=t.oDeliverTip,s=void 0===r?{}:r,n=t.strDeliverTimeDesc,d=t.strImgUrl,c=t.strPath,m=t.strPrice,u=t.strRecommendWords,l=t.strStoreName,p=e.strDistance;if(e&&d&&m&&l&&p&&n&&c){var h=p.match(/\d+\.*\d*/),f=p.match(/千米|米/);if(h&&h[0]&&f&&f[0]){var D=parseFloat(h[0]).toFixed(1);p=(D=D<.1?.1:D)+("千米"==f[0]?"km":"m"),this.setData({showDaodianInfo:!0,deliverTips:s,listTags:a.slice(0,3),deliverTimeDesc:n,deliverDistance:p,skuImg:(0,o.getImg)(d,120),skuPrice:m,skuPath:c,storeRecommendWords:u||"同款商品周边配送更快的优质门店",storeName:l})}else this.setData({showDaodianInfo:!1})}else this.setData({showDaodianInfo:!1})},gotoDetail:function(){var e=this.data.skuPath;/pinbind\/pintokenredirect/.test(e)?a.gotoUrl(this,{url:e,params:{omitH5Params:!0}}):a.gotoUrl(this,{url:"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfca9a073810e992d&redirect_uri="+encodeURIComponent(e)+"&h5_redirect_url="+encodeURIComponent(e)+"?channel=wx_icon&hideapp=true&response_type=code&scope=snsapi_base#wechat_redirect"})}}};exports.default=r; 
 			}); 
		define("pages/item/itemBase/components/daojiaRecommend/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,showDaodianInfo:!1,deliverTips:{},listTags:[],deliverTimeDesc:"",deliverDistance:"",skuImg:"",skuPrice:"",skuPath:"",storeRecommendWords:"",storeName:""},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/discount/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./store"),e=require("../../js/model/baseModel.js"),t=require("../../js/util/util.js"),o=require("../../js/handler/action.js"),i=function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}(require("../../constants/ptag-constants")),r={props:{isPingou:Boolean,couponObj:Object,wxSearchFlag:Boolean,promoteObj:Object,promotionText:String,plusFlag:String},store:n.storeFn,data:{promotePacks:null},watch:{couponObj:{handler:function(n){this.initCoupon(n)},deep:!0},wxSearchFlag:function(){},promoteObj:{handler:function(n){n&&n.skuId&&this.initPromo(n)},deep:!0},promotionText:function(){if(this.promotionText){var n=-1;this.data.promote.forEach(function(e,t){"限购"==e.name&&(n=t)}),n>=0&&(this.promote[n].content=this.promotionText)}}},methods:{initCoupon:function(n){var r=this;if(!n.skuId)return!1;var u=this.isPingou,a={0:{activeId:u?"newshangxiang":"wqsxfq_laxin201710",activeflag:"1"},1:{activeId:u?"wqsxfq_huiyufuli2017108":"",activeflag:"2"},2:{activeId:u?"wqsxfq_huiyufuli2017108":"",activeflag:"2"},11:{activeId:u?"chenshuishangxiang":"",activeflag:"2"},12:{activeId:u?"chenshuishangxiang":"",activeflag:"2"},13:{activeId:u?"chenshuishangxiang":"",activeflag:"2"},14:{activeId:u?"chenshuishangxiang":"",activeflag:"2"},15:{activeId:u?"qudaonewshangxiang":"",activeflag:"2"},pingou:{activeId:"pgyx_shangxiang",activeflag:"5"},needJr:!1},c=!0,s=[],d=!1,p=!1;(0,o.getCouponList)(n).then(function(n){c=n.showGiftCoupons,s=s.concat(n.coupons)}).then(function(n){return c?r.getUserThirdBuy().then(function(n){return n?(d=n.isDefault,p=n.isDouble,a[n.userFlag]):""}):""}).then(function(n){return c?n||!a.needJr?n:r.getUserFinance().then(function(n){return a[n]}):""}).then(function(n){return n&&n.activeId?(0,o.getCouponPool)(n.activeId).then(function(e){return e?(r.couponFlag=n.activeflag,e):[]}):[]}).then(function(n){return n.length?n:u&&a.pingou&&c?(0,e.getPpmsData)("_verderList").then(function(n){return(n&&n[0]&&n[0].venderids).includes("|"+r.couponObj.venderId+"|")?[]:(0,o.getCouponPool)(a.pingou.activeId).then(function(n){return n?(r.couponFlag=a.pingou.activeflag,n):[]})}).catch(function(n){return[]}):[]}).then(function(n){return n.length?n:!d||p?[]:r.wxSearchFlag?[]:(0,o.getBindingGift)().then(function(n){return n?(r.couponFlag="4",n.type="binding",t.reporter.reportExposure(i.DETAIL_BINDING_COUPON_EXP),[n]):[]}).catch(function(n){return[]})}).then(function(n){s="4"==r.couponFlag?n.concat(s):s.concat(n);var e=r.couponOrganize(s);r.couponsCount=e.length,r.triggerEvent("refreshCoupon",e);var o=e,u=o.findIndex(function(n){return n.isFans});if(u>=0){var a=o[u];(o=o.filter(function(n){return!n.isFans})).splice(u,0,a)}r.floorCoupons=o,e.length&&t.reporter.reportExposure(i.EXP_DETAIL_COUPON_AREA)})},couponOrganize:function(n){if(!n||!n.length)return[];var e=this.couponFlag,o=[],r=function(n){return(10*Number(n)).toFixed(1).replace(/\.0+$/,"")};return n.forEach(function(n){if("binding"!=n.type){var u="";n.discountArr?u=n.discountArr.length>1?n.discountArr.join("/")+"折":"满"+n.discountdesc.info[0].quota+"享"+n.discountArr[0]+"折":(u=28==n.couponstyle?"每满"+n.quota+"减"+n.discount:2==n.couponType?n.discount+"元运费券":0==n.couponType?n.discount+"元京券":"满"+n.quota+"减"+n.discount,n.Vender&&2==n.Vender&&(u="免邮券"));var a=n.flag||!1,c=1*n.discount,s=1*n.quota,d=void 0,p=void 0;0===n.couponType?(d="bg_jing",p="京券"):1===n.couponType?(d="bg_dong",p="东券"):2===n.couponType&&(d="bg_yun",p="运费券"),2!==n.couponKind&&3!==n.couponKind||(p="店铺"+p),211!=n.businessLabel&&212!=n.businessLabel||(p="京享礼金券");var l=n.couponstyle,g=n.timeDesc,f=n.discountdesc&&n.discountdesc.info,h=void 0,v=void 0,m=void 0,y=28==l&&1==n.couponKind&&204==n.businessLabel;f&&(h=f.map(function(n){return{discount:r(n.discount),quota:n.quota}}).sort(function(n,e){return n.discount-e.discount}),v=f.length>1?h.map(function(n){return n.discount}).join("/")+"折":"满"+f[0].quota+"享"+r(f[0].discount)+"折",m=n.discountdesc.high?"最高可减"+ +n.discountdesc.high+"元":"",t.reporter.reportExposure(28==l?i.EXP_COUPON_FLOOR_MM:i.EXP_DISCOUNT_COUPON)),o.push({desc:u,money:c,limit:s,time:g,desc1:0==s?"":28==l?"每满"+s+"元可减":"满"+s+"元可用",desc2:n.name,key:n.key,roleId:n.roleId,didGet:a,type:d,typeName:p,style:l,couponFlag:"couponPool"==n.key?e:"",couponKind:n.couponKind,batchId:n.batchId,descDiscount:h,descDiscount1:v,descDiscount2:m,isJt:y,isFans:104==n.userLabel,isFamilyAccountOnly:105==n.userLabel})}else o.push({type:"binding",typeName:"绑定礼包",cover:n.img,sceneid:n.sceneid,activeid:n.activeid,levelid:n.activeLevel})}),o},getUserThirdBuy:function(){return(0,e.userThirdBuy)().then(function(n){if(0!=n.iRet||!n.data)return!1;var e=n.data,t=22==e.status2,o=1==e.status3,i={userFlag:"",isDefault:t,isDouble:o};return 2!=e.status5||t&&o?1!=e.status4&&e.status1&&"0"!=e.status1&&(i.userFlag=e.status1):i.userFlag="0",i}).catch(function(n){return!1})},getUserFinance:function(){return(0,e.userFinance)().then(function(n){return 0==n.retcode&&n.financeIdentify?"jr_"+n.financeIdentify:""})},initPromo:function(n){var e=this;if(!n||!n.skuId)return!1;this.promote=[];var t=n.promov2||[],i=n.bankpromo||{},r=n.plusPromoInfo||null;(0,o.promoteOrganize)({promov2:t[0]||{},plusInfo:r,bankpromo:i,promoteObj:n,plusFlag:this.plusFlag}).then(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.promote,o=void 0===t?[]:t,i=n.parallelPromote,r=void 0===i?[]:i,u=n.promotePacks,a=void 0===u?[]:u;e.promote=o,e.parallelPromote=r,e.promotePacks=a})},showPreferentialLayer:function(){this.triggerEvent("showDiscountLayer",{promote:this.promote,promotePacks:this.promotePacks,parallelPromote:this.parallelPromote})}}};exports.default=r; 
 			}); 
		define("pages/item/itemBase/components/discount/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var o=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:o.ENV.isPingouXcx,couponsCount:0,floorCoupons:[],couponFlag:"",promote:[],parallelPromote:[]},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/discountLayer/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store"),e=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(require("../../constants/ptag-constants")),o=require("../../js/util/util.js"),r=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../../common/wxcontext.js")),i=require("../../../../../common/timer-manage"),s={props:{showDiscountLayerFlag:{type:Boolean},onlyCoupon:{type:Boolean},coupons:{type:Array},promotes:{type:Array,value:[]},promotePacks:{type:Object,value:{}},parallelPromote:{type:Array,value:[]},promoteObj:{type:Object,value:{}},hideSalePromoteJump:{type:Boolean},hideOtherPromoteJump:{type:Boolean},venderId:{type:String},isPingou:{type:Boolean},launchAppParameter:{type:String}},store:t.storeFn,attached:function(){this.page=getCurrentPages().pop()},watch:{showDiscountLayerFlag:function(t){this.observeFlagChange(t)},coupons:{handler:function(t){this.jxNewerCoupon=t&&t.filter(function(t){return t.isJxNewer})},deep:!0}},data:{wxappType:r.default.JD.cookie.get("wxapp_type")},methods:{observeFlagChange:function(t){var e=this;t?(this.setData({isShowDiscountLayerFlag:!0}),this.reportData(),(0,i.createTimeout)(function(){e.setData({showAnim:!0})},100,this.page)):(this.setData({showAnim:!1}),(0,i.createTimeout)(function(){e.setData({isShowDiscountLayerFlag:!1})},500,this.page))},closeDiscount:function(){this.triggerEvent("closeDiscount")},drawCoupon:function(t){var r=t.currentTarget.dataset,i=r.get,s=r.kind,a=void 0===s?0:s,n=r.index,u=r.isJxNewer;if(i){var p=this.coupons[n];if(0==a){var c="/pages/cate/cate";2==this.wxappType&&(c="/pages/pingou/cate/cate"),(0,o.gotoUrl)(this,{xcx:{url:c}})}else 1==a||3==a?(0,o.gotoUrl)(this,{xcx:{url:"/pages/search/subPackages/coupon/coupon",params:{batch:p.batchId,kind:a}}}):2==a&&(0,o.gotoUrl)(this,{xcx:{url:"/pages/shop/index/index",params:{venderId:this.venderId}}});return"jxviplabel"==p.couponFlag&&o.reporter.reportClick(p.isJxVipGodCounpon?e.CLICK_JXVIP_GODCOUPON:e.CLICK_JXVIP_NORMALCOUPON),!1}this.triggerEvent("drawCoupon",t),u&&o.reporter.reportClick(e.CLICK_JXNEWER_COUPON_POPUP)},gotoBinding:function(t){this.triggerEvent("gotoBinding",t)},reportData:function(){var t=this.data.coupons;t&&t.length&&t.forEach(function(t){28==t.style&&o.reporter.reportExposure(e.EXP_COUPON_FLOAT_MM),t.isJt&&o.reporter.reportExposure(e.EXP_COUPON_FLOAT_MMJT)})},noscroll:function(){},gotoPlusRight:function(){(0,o.gotoUrl)(this,{url:"https://plus.m.jd.com/rights/plusRightsDetail?/detail13&s=xcx"}),this.closeDiscount()},gotoGiftList:function(t){var r=t.currentTarget.dataset.url;o.reporter.reportClick(e.DETAIL_GIFT_PROMOTION),o.ENV.isXcxEnv&&((0,o.gotoUrl)(this,{xcx:{url:r}}),this.closeDiscount())},gotoExchange:function(t){if(!this.hideSalePromoteJump){o.reporter.reportClick(e.DETAIL_EXCHANGE);var r=t.currentTarget.dataset.activityId,i=this.promoteObj||{},s=i.skuId,a=i.focusImages[0],n=i.skuName,u=i.isPingouShop?1:0,p=(0,o.querystring)({activityId:r,skuId:s,img:a,name:n,pingouchannel:u}),c=(0,o.querystring)({activity_id:r,sku:s});(0,o.gotoUrl)(this,{xcx:{url:"/pages/search/subPackages/exchange/index?"+p},h5:{url:"https://wqs.jd.com/item/add_buy.shtml?ptag=7014.19.9&"+c}}),this.closeDiscount()}},gotoSuitList:function(t){var r=t.currentTarget.dataset.idx,i=this.promotes[r]&&this.promotes[r].content;if(i&&o.ENV.isXcxEnv){var s=getApp();s.tempSuitListData=i,s.tempSuitPacksData=this.promotePacks,(0,o.gotoUrl)(this,{xcx:{url:"/pages/item/subPackages/pages/suit/suit"}}),this.closeDiscount()}o.reporter.reportClick(e.DETAIL_SUIT),o.reporter.reportClick(e.VIEW_SUIT)},gotoSalesSearch:function(t){if(!this.hideSalePromoteJump){o.reporter.reportClick(e.DETAIL_PROMOTION_SEARCH);var r=(this.promoteObj||{}).isPingouShop?1:0,i=t.currentTarget.dataset,s=i.pid,a=i.tips,n=i.name,u=0;"满减"===n||"满折"===n||"多买优惠"===n||"跨店铺满折"===n||"跨店铺满减"===n||"跨店铺满免"===n?u=0:"满赠"===n||"满送"===n?u=1:"加价购"===n&&(u=2),o.ENV.isXcxEnv&&((0,o.gotoUrl)(this,{xcx:{url:"/pages/search/subPackages/sales/sales",params:{tips:a,actId:s,promoType:u,pingouchannel:r,source:"detail"}}}),this.closeDiscount())}},gotoAd:function(t){this.hideOtherPromoteJump||this.triggerEvent("gotoAd",t)}}};exports.default=s; 
 			}); 
		define("pages/item/itemBase/components/discountLayer/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,isShowDiscountLayerFlag:!1,isShowPopupAnim:!1,showAnim:!1,jxNewerCoupon:[]},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/discountLayerPg/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store"),e=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(require("../../constants/ptag-constants")),r=require("../../js/util/util.js"),o=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../../common/wxcontext.js")),s=require("../../../../../common/timer-manage"),a={props:{showDiscountLayerFlag:{type:Boolean},jxAppCoupon:{type:Object},afterDiscountPrice:{type:String},guideCanGetCoupons:{type:Array},guideCanUseCoupons:{type:Array},guideCanUsePromotes:{type:Array},coupons:{type:Array},promotes:{type:Array,value:[]},promotePacks:{type:Object,value:{}},promoteObj:{type:Object,value:{}},hideSalePromoteJump:{type:Boolean},hideOtherPromoteJump:{type:Boolean},venderId:{type:String},launchAppParameter:{type:String}},store:t.storeFn,attached:function(){this.page=getCurrentPages().pop()},watch:{showDiscountLayerFlag:function(t){this.observeFlagChange(t)},coupons:{handler:function(t){this.jxNewerCoupon=t&&t.filter(function(t){return t.isJxNewer})},deep:!0},guideCanGetCoupons:{handler:function(t){},deep:!0}},data:{wxappType:o.default.JD.cookie.get("wxapp_type")},methods:{observeFlagChange:function(t){var e=this;t?(this.setData({isShowDiscountLayerFlag:!0}),this.reportData(),(0,s.createTimeout)(function(){e.setData({showAnim:!0})},100,this.page)):(this.setData({showAnim:!1}),(0,s.createTimeout)(function(){e.setData({isShowDiscountLayerFlag:!1})},500,this.page))},closeDiscount:function(){this.triggerEvent("closeDiscount")},drawCoupon:function(t){var o=t.currentTarget.dataset,s=o.get,a=o.kind,i=void 0===a?0:a,n=o.index,p=o.isJxNewer;if(s){var u=this.coupons[n];if(0==i){var c="/pages/cate/cate";2==this.wxappType&&(c="/pages/pingou/cate/cate"),(0,r.gotoUrl)(this,{xcx:{url:c}})}else 1==i||3==i?(0,r.gotoUrl)(this,{xcx:{url:"/pages/search/subPackages/coupon/coupon",params:{batch:u.batchId,kind:i}}}):2==i&&(0,r.gotoUrl)(this,{xcx:{url:"/pages/shop/index/index",params:{venderId:this.venderId}}});return"jxviplabel"==u.couponFlag&&r.reporter.reportClick(u.isJxVipGodCounpon?e.CLICK_JXVIP_GODCOUPON:e.CLICK_JXVIP_NORMALCOUPON),!1}this.triggerEvent("drawCoupon",t),p&&r.reporter.reportClick(e.CLICK_JXNEWER_COUPON_POPUP)},reportData:function(){var t=this.data.coupons;t&&t.length&&t.forEach(function(t){28==t.style&&r.reporter.reportExposure(e.EXP_COUPON_FLOAT_MM),t.isJt&&r.reporter.reportExposure(e.EXP_COUPON_FLOAT_MMJT)})},noscroll:function(){},gotoGiftList:function(t){var o=t.currentTarget.dataset.url;r.reporter.reportClick(e.DETAIL_GIFT_PROMOTION),r.ENV.isXcxEnv&&((0,r.gotoUrl)(this,{xcx:{url:o}}),this.closeDiscount())},gotoExchange:function(t){if(!this.hideSalePromoteJump){r.reporter.reportClick(e.DETAIL_EXCHANGE);var o=t.currentTarget.dataset.activityId,s=this.promoteObj||{},a=s.skuId,i=s.focusImages[0],n=s.skuName,p=s.isPingouShop?1:0,u=(0,r.querystring)({activityId:o,skuId:a,img:i,name:n,pingouchannel:p}),c=(0,r.querystring)({activity_id:o,sku:a});(0,r.gotoUrl)(this,{xcx:{url:"/pages/search/subPackages/exchange/index?"+u},h5:{url:"https://wqs.jd.com/item/add_buy.shtml?ptag=7014.19.9&"+c}}),this.closeDiscount()}},gotoSuitList:function(t){var o=t.currentTarget.dataset.idx,s=this.promotes[o]&&this.promotes[o].content;if(s&&r.ENV.isXcxEnv){var a=getApp();a.tempSuitListData=s,a.tempSuitPacksData=this.promotePacks,(0,r.gotoUrl)(this,{xcx:{url:"/pages/item/subPackages/pages/suit/suit"}}),this.closeDiscount()}r.reporter.reportClick(e.DETAIL_SUIT),r.reporter.reportClick(e.VIEW_SUIT)},gotoSalesSearch:function(t){if(!this.hideSalePromoteJump){r.reporter.reportClick(e.DETAIL_PROMOTION_SEARCH);var o=(this.promoteObj||{}).isPingouShop?1:0,s=t.currentTarget.dataset,a=s.pid,i=s.tips,n=s.name,p=0;"满减"===n||"满折"===n||"多买优惠"===n||"跨店铺满折"===n||"跨店铺满减"===n||"跨店铺满免"===n?p=0:"满赠"===n||"满送"===n?p=1:"加价购"===n&&(p=2),(0,r.gotoUrl)(this,{xcx:{url:"/pages/search/subPackages/sales/sales",params:{tips:i,actId:a,promoType:p,pingouchannel:o,source:"detail"}}}),this.closeDiscount()}},gotoAd:function(t){this.hideOtherPromoteJump||this.triggerEvent("gotoAd",t)},launchApp:function(){r.reporter.reportClick(e.CLICK_APP_COUPON_USE),this.closeDiscount()},launchAppError:function(t){r.reporter.reportExposure(e.EXP_APP_COUPON_KL),this.triggerEvent("handleKlDownload",t)}}};exports.default=a; 
 			}); 
		define("pages/item/itemBase/components/discountLayerPg/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,isShowDiscountLayerFlag:!1,isShowPopupAnim:!1,showAnim:!1,jxNewerCoupon:[]},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/discountPg/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o.default=e,o}Object.defineProperty(exports,"__esModule",{value:!0});var o=require("./store"),t=e(require("../../../../../common/fe_helper.js")),i=require("../../js/model/baseModel.js"),n=require("../../js/util/util.js"),r=e(require("../../constants/ptag-constants")),u=require("../../js/handler/action.js"),p=!1,a=[],s=[],c=[],l=[],d=[],v=[],g={props:{prizeQualification:Object,pgPrice:String,promoteObj:Object,promotionText:String,plusFlag:String,afterDiscountBg:String,couponObj:Object,noTop:Boolean},store:o.storeFn,data:{},watch:{pgPrice:function(e){e&&this.initJxAppCoupon()},couponObj:{handler:function(e){e&&e.skuId&&this.initCoupon(e)},deep:!0}},methods:{initJxAppCoupon:function(){var e=this;if(this.jxAppCoupon&&(this.jxAppCoupon=null,this.triggerEvent("refreshJxappCoupon",this.jxAppCoupon)),n.ENV.isPingouXcx){var o=this.prizeQualification,r=void 0===o?{}:o,u=this.pgPrice,p=n.ENV.isPingouXcx?"pgxcx":"xcx",a=t.getServerTime();(0,i.getPpmsData)("_itemCouponJxV2").then(function(){var o=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[])[0]||{},t=o.getCouponText,i=o.klSucToastText,n=o.klFailToastText,s=o.userLevelPrizeMap,c={getCouponText:t,klSucToastText:i,klFailToastText:n},l="";for(var d in r)1==r[d]&&(l=d);var v=s.filter(function(e){return e&&e.userLevel==l&&(!e.startTime||new Date(e.startTime).getTime()<a)&&(!e.endTime||new Date(e.endTime).getTime()>a)&&e.channel&&~e.channel.indexOf(p)})[0];if(v){var g=v.activeId,m=v.activeLevel,h=v.pricePrizeMap,f=void 0===h?[]:h,x=g,C=m;f.length>0&&f.forEach(function(e){(!e.lowerPrice||1*e.lowerPrice<=u)&&(!e.higherPrice||1*e.higherPrice>=u)&&(x=e.activeId,C=e.activeLevel)}),x&&C&&(c.activeId=x,c.activeLevel=C,e.getJxAppCouponList(c))}})}},getJxAppCouponList:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jxAppCouponList)({active:o.activeId,level:o.activeLevel}).then(function(i){if(i&&i.prizes&&1==i.isshow&&0==i.retcode&&(1!=i.receive||e.prizeQualification&&"1"==e.prizeQualification.appLoginNew)){var u=i.prizes||{},p=u.PrizeTime?u.PrizeTime.split(","):[],a=u.ConstraintTime?u.ConstraintTime.split(","):[],s=1==u.ValidType&&u.CouponTime?u.CouponTime.split(","):[],c=u.DiscountQuota?u.DiscountQuota.split(","):[],l=t.getServerTime();if(1==i.receive||0==u.Status&&c&&c.length>1&&c[0]>0&&(p.length<1||1e3*parseFloat(p[0])<=l&&1e3*parseFloat(p[1])>=l)&&(2==u.ValidType||s.length>1&&1e3*parseFloat(s[1])>=l)&&a.length>1&&1e3*parseFloat(a[0])<=l&&1e3*parseFloat(a[1])>=l){var d={key:"jxAppCoupon",roleId:o.activeId+"-"+o.activeLevel,klCopySucText:""+o.klSucToastText,klCopyFailText:""+o.klFailToastText,limit:c[1],money:c[0],desc2:u.Desc||"全品类(特例商品除外)",didGet:1==i.receive};if(d.desc=0==d.limit?d.money+"元京券":"满"+d.limit+"减"+d.money,d.desc1=0==d.limit?"":"满"+d.limit+"元可用",d.underCouponDesc="前往APP使用优惠券下单立减",d.underCouponDescRed=d.money+"元",1==u.ValidType){var v=void 0;s.length>1&&(v=(0,n.formatTimeSimple)(new Date(1e3*parseFloat(s[0]))),d.time=v.year+"."+parseInt(v.month)+"."+parseInt(v.day)+" "+v.hour+":"+v.min,v=(0,n.formatTimeSimple)(new Date(1e3*parseFloat(s[1]))),d.time+=" - "+v.year+"."+parseInt(v.month)+"."+parseInt(v.day)+" "+v.hour+":"+v.min)}else d.time="自领取后"+u.CouponTime+"天内有效";0==d.limit?(d.type="bg_jing",d.typeName="京券"):(d.type="bg_dong",d.typeName="东券"),u.Vender&&(1==u.Vender?(d.type="bg_jing",d.typeName="京券"):2==u.Vender&&(d.type="bg_yun",d.typeName="运费券")),e.triggerEvent("refreshJxappCoupon",d),e.jxAppCoupon=d,n.reporter.reportExposure(r.EXP_APP_COUPON_ROW)}}})},getCouponFormGuide:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o={counpons:[],activeCoupons:[]},t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(e){return 1*e.batchId});return o.activeCoupons=e.filter(function(e){return t.includes(1*e.batchId)}),o.counpons=e.filter(function(e){return!t.includes(1*e.batchId)}),o},getPromoteFormGuide:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o={promote:[],activePromotes:[]},t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(e){return e.pid});return o.activePromotes=e.filter(function(e){return t.includes(e.pid)}),o.promote=e.filter(function(e){return!t.includes(e.pid)}),o},initPromo:function(e){var o=this;if(!e||!e.skuId)return!1;this.promote=[];var t=e.promov2||[],i=e.bankpromo||{},p=e.plusPromoInfo||null,g=e.promoteInfo||[];(0,u.promoteOrganize)({promov2:t[0]||{},plusInfo:p,bankpromo:i,promoteObj:e,plusFlag:this.plusFlag,extObj:{hidePlus:!0,hideSuit:!0}}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.promote,i=void 0===t?[]:t,u=e.promotePacks;a=void 0===u?[]:u;var p=(0,n.deepExtend)(o.couponObj||{}).couponGuide,m=(void 0===p?{}:p).promotionResult,h=(void 0===m?{}:m).promoInfoList,f=void 0===h?[]:h;v=[];var x=(d=i.map(function(e){return e.pid&&g.forEach(function(o){o.pid==e.pid&&(e.outTags=o.outTags)}),e})).length;if(f.length){var C=o.getPromoteFormGuide(d,f);d=C.promote,v=C.activePromotes}var P=[].concat(c,l,v,s,d);o.couponFlagText&&"jxviplabel"==o.couponFlag&&(P=P.filter(function(e){return!e.isJxVipGodCounpon})),(P=P.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.name?{type:"promote",outTags:e.outTags,name:e.name}:{isJxNewer:e.isJxNewer,type:"coupon",desc:e.isFans?"粉丝专享":e.desc}})).length&&n.reporter.reportExposure(r.EXP_FLOOR_DISCOUNT_ALL),o.newerCoupons=P.filter(function(e){return e.isJxNewer}),o.discounts=P.filter(function(e){return!e.isJxNewer});var T={coupons:[].concat(c,l).map(function(e){return e.desc}),promotes:v.map(function(e){return e.name})};o.triggerEvent("refreshDiscountPg",{guideCanGetCoupons:c,guideCanUseCoupons:l,guideCanUsePromotes:v,normalCoupons:s,normalPromotes:d,suitPacks:a,afterDiscountBenfit:T}),x&&n.reporter.reportExposure(r.EXP_FLOOR_PROMOTE),x&&n.reporter.reportExposure(r.EXP_FLOOR_DISCOUNT)})},initCoupon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p=!1,this.couponFlag="",this.couponFlagText="";var o=(0,n.deepExtend)(e||{}),t=o.avlCoupon,i=void 0===t?{}:t,a=o.prizeCoupon,d=void 0===a?{}:a,v=o.couponGuide,g=void 0===v?{}:v,m=o.jxviplabel,h=void 0===m?{}:m,f=[];for(var x in d)!function(e){d[e].length&&(d[e].forEach(function(o){o.didget="0",o.key="couponPool",o.roleId=o.active+"-"+o.level,o.prizeType=e}),f=[].concat(f,d[e]))}(x);var C=i.coupons,P=void 0===C?[]:C,T=g.couponJoinActiveResultModule,_=void 0===T?{}:T,O=g.couponCanUseResultModule,b=void 0===O?{}:O,y=_.joinActiveList,j=void 0===y?[]:y,I=b.canUseCouponList,L=void 0===I?[]:I;if(c=[],l=[],(s=this.couponOrganize(f.concat((0,u.avlCouponOrganize)(P)))).length&&n.reporter.reportExposure(r.EXP_DETAIL_COUPON_AREA),o.jxviplabel&&this.isPingouXcx){var F=s.some(function(e){return e.isJxVipGodCounpon});s=this.jxviplabelOrganize(h,F).concat(s)}if(j.length){var E=this.getCouponFormGuide(s,j);s=E.counpons,c=E.activeCoupons}if(L.length){var N=this.getCouponFormGuide(s,L);s=N.counpons,l=N.activeCoupons}this.initPromo(this.promoteObj)},jxviplabelOrganize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1],t=[],i=e.isVIP,u=e.notVipCouponLabel,a=void 0===u?{}:u,s=e.itemLabelText,c=e.couponLabelText,l=a.discountText,d=a.couponTypeText,v=a.useRangeText,g=a.useQuotaText,m=a.openCardText;return p=1==i,s&&(!p&&l||o)&&(this.couponFlag="jxviplabel",this.couponFlagText=s,n.reporter.reportExposure(p?r.EXP_JXVIP_ISVIP_ROW:r.EXP_JXVIP_NOVIP_ROW)),!p&&l&&t.push({didGet:!1,key:"jxviplabel",roleId:"jxviplabel",couponFlag:c&&"jxviplabel",couponLabel:c,type:"bg_jxcard bg_jxcard_gold",desc1:g,desc2:v,typeName:d,drawText:m,money:l}),t},couponOrganize:function(e){var o=this;if(!e||!e.length)return[];var t=[],i=function(e){return(10*Number(e)).toFixed(1).replace(/\.0+$/,"")};return e.forEach(function(e){if("binding"!=e.type){var u="",p="109-1"==e.userLabel;p?u="新人券"+e.quota+"-"+e.discount:e.discountArr?u=e.discountArr.length>1?e.discountArr.join("/")+"折":"满"+e.discountdesc.info[0].quota+"享"+e.discountArr[0]+"折":(u=28==e.couponstyle?"每满"+e.quota+"减"+e.discount:2==e.couponType?e.discount+"元运费券":0==e.couponType?e.discount+"元京券":"满"+e.quota+"减"+e.discount,e.Vender&&2==e.Vender&&(u="免邮券"));var a=!("1"!=e.didget&&!e.flag),s=1*e.discount,c=1*e.quota,l=void 0,d=void 0,v=void 0;0===e.couponType?(l="bg_jing",d="京券"):1===e.couponType?(l="bg_dong",d="东券"):2===e.couponType&&(l="bg_yun",d="运费券"),2!==e.couponKind&&3!==e.couponKind||(d="店铺"+d),211!=e.businessLabel&&212!=e.businessLabel||(d="京享礼金券");var g=void 0,m=void 0;o.isPingouXcx&&("108-1"==e.userLabel?(g=!0,v="省钱卡专享",l="bg_jxcard"):"108-2"==e.userLabel&&(g=!0,m=!0,v="省钱卡专享",l="bg_jxcard bg_jxcard_gold"));var h=e.couponstyle,f=e.timeDesc,x=e.discountdesc&&e.discountdesc.info,C=void 0,P=void 0,T=void 0,_=28==h&&1==e.couponKind&&204==e.businessLabel;x&&(C=x.map(function(e){return{discount:i(e.discount),quota:e.quota}}).sort(function(e,o){return e.discount-o.discount}),P=x.length>1?C.map(function(e){return e.discount}).join("/")+"折":"满"+x[0].quota+"享"+i(x[0].discount)+"折",T=e.discountdesc.high?"最高可减"+ +e.discountdesc.high+"元":"",n.reporter.reportExposure(28==h?r.EXP_COUPON_FLOOR_MM:r.EXP_DISCOUNT_COUPON)),t.push({desc:u,money:s,limit:c,time:f,desc1:0==c?"":28==h?"每满"+c+"元可减":"满"+c+"元可用",desc2:e.name,key:e.key,couponKey:e.couponKey,token:e.token,roleId:e.roleId,didGet:a,type:l,typeName:d,style:h,couponFlag:g?"jxviplabel":"couponPool"==e.key?e.prizeType:"",couponLabel:v,couponKind:e.couponKind,batchId:e.batchId,descDiscount:C,descDiscount1:P,descDiscount2:T,isJt:_,isJxVipGodCounpon:m,isFans:104==e.userLabel,isFamilyAccountOnly:105==e.userLabel,isJxNewer:p,newuser_limit:e.newuser_limit,channel_limit:e.channel_limit})}else t.push({type:"binding",typeName:"绑定礼包",cover:e.img,sceneid:e.sceneid,activeid:e.activeid,levelid:e.activeLevel})}),t},showPreferentialLayer:function(e){this.triggerEvent("showPgDiscountLayer"),n.reporter.reportClick(r.CLICK_FLOOR_DISCOUNT),n.reporter.reportClick(r.CLICK_COUPON_FLOOR),"jxviplabel"==this.couponFlag&&n.reporter.reportClick(p?r.CLICK_JXVIP_ISVIP_ROW:r.CLICK_JXVIP_NOVIP_ROW);var o=[].concat(c,l,s),t=o.some(function(e){return e.isJxVipGodCounpon}),i=o.some(function(e){return"jxviplabel"==e.couponFlag&&!e.isJxVipGodCounpon});t&&n.reporter.reportClick(r.EXP_JXVIP_GODCOUPON),i&&n.reporter.reportClick(r.EXP_JXVIP_NORMALCOUPON),o.some(function(e){return!e.didGet})&&n.reporter.reportExposure(r.EXP_LAYER_COUPON_CANGET)}}};exports.default=g; 
 			}); 
		define("pages/item/itemBase/components/discountPg/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var o=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:o.ENV.isPingouXcx,jxAppCoupon:null,couponFlag:"",couponFlagText:"",discounts:[],newerCoupons:[]},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/familyList/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var s={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i]);return s.default=t,s}Object.defineProperty(exports,"__esModule",{value:!0});var s=require("./store"),i=t(require("../../../itemBase/js/util/util.js")),e=require("../../../itemBase/js/model/baseModel.js"),o=t(require("../../../../../common/toast/toast.js")),r=t(require("../../constants/ptag-constants")),n={props:{skuId:String,className:String,isInFamilyList:Boolean,isPingou:Boolean},store:s.storeFn,attached:function(){var t=this;(0,e.getPpmsData)("_linkConfig").then(function(s){(s||[]).forEach(function(s){"familyEnter"==s.linkName&&(t.familyListEnter=s)})}).catch(function(){t.familyListEnter={showName:"家庭清单",url:"https://myfamily.jd.com/shoppingList?source=progshoplist"}}),this.handleList=i.throttle(this.handleList,500)},watch:{skuId:{handler:function(){this.init()}}},methods:{init:function(){this.map||(this.map={}),this.addStatus=void 0!==this.map[this.skuId]?this.map[this.skuId]:this.isInFamilyList,this.map[this.skuId]=this.addStatus,i.reporter.reportExposure(this.addStatus?r.EXP_FAMILY_ENTER_IN:r.EXP_FAMILY_ENTER_NOT_IN)},handleList:function(){var t=this,s=this.skuId,n=this.addStatus;n?(0,e.removeFamilyList)(s).then(function(e){e&&1==e.success?(t.addStatus=!1,t.map[s]=!1,t.showConfirm=!0,i.reporter.reportExposure(r.EXP_FAMILY_CONFIRM_REMOVE)):o.show({icon:"none",content:e.message||"系统出错啦，请稍后再试"})}):(0,e.addFamilyList)(s).then(function(e){e&&1==e.success?(t.addStatus=!0,t.map[s]=!0,t.showConfirm=!0,i.reporter.reportExposure(r.EXP_FAMILY_CONFIRM_ADD)):o.show({icon:"none",content:e.message||"系统出错啦，请稍后再试"})}),i.reporter.reportClick(n?r.CLICK_FAMILY_ENTER_IN:r.CLICK_FAMILY_ENTER_NOT_IN)},closeConfirm:function(){this.showConfirm=!1,i.reporter.reportClick(this.addStatus?r.CLICK_FAMILY_CONFIRM_ADD_CLOSE:r.CLICK_FAMILY_CONFIRM_REMOVE_CLOSE)},checkList:function(){this.showConfirm=!1;var t=this.familyListEnter.url||"https://myfamily.jd.com/shoppingList?source=progshoplist";0!=t.indexOf("//")&&0!=t.indexOf("http")||(t="https://wq.jd.com/pinbind/pintokenredirect?biz=family&url="+encodeURIComponent(t)),i.gotoUrl(this,{url:t}),i.reporter.reportClick(this.addStatus?r.CLICK_FAMILY_CONFIRM_ADD_ENTER:r.CLICK_FAMILY_CONFIRM_REMOVE_ENTER)}}};exports.default=n; 
 			}); 
		define("pages/item/itemBase/components/familyList/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var t=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:t.ENV.isPingouXcx,addStatus:!1,showConfirm:!1,familyListEnter:{}},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/favour/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),o=require("../../js/model/baseModel.js"),s=t(require("../../../../../common/toast/toast.js")),n=require("../../js/util/util.js"),a=t(require("../../constants/ptag-constants")),r={props:{favourObj:{type:Object},className:{type:String}},store:e.storeFn,watch:{favourObj:function(){this.init()}},methods:{init:function(){this.favourObj&&this.favourObj.jdSkuIds&&this.favourObj.skuId&&this.checkFav()},handleFavGoods:function(t){"add"==t.currentTarget.dataset.type?(n.reporter.reportClick(a.DETAIL_ITEM_FAV),this.addFavGoods()):(n.reporter.reportClick(a.DETAIL_ITEM_UNFAV),this.delFavGoods())},checkFav:function(){var t=this;(0,o.getItemFav)(this.favourObj.jdSkuIds,this.favourObj.venderId).then(function(e){if("0"==e.iRet)for(var o=e.data,s=0;s<o.length;s++)t.favInfo[o[s].skuid]="1"==o[s].state,o[s].skuid==t.favourObj.skuId&&(t.favStatus="1"==o[s].state);else t.favStatus=!1}).catch(function(e){t.favStatus=!1})},addFavGoods:function(){var t=this;(0,o.itemAddFav)(this.favourObj.skuId,this.favourObj.venderId).then(function(e){"2"==e.iRet?s.show({icon:s.ICON.ERROR,content:"您的收藏商品数量已达上限"}):"0"==e.iRet||"3"==e.iRet?(t.favStatus=!0,t.favInfo[t.favourObj.skuId]=!0,s.show({icon:s.ICON.SUCCESS,content:"收藏成功"})):s.show({icon:s.ICON.WARNING,content:"收藏失败，请稍后重试"})}).catch(function(t){t.code,t.message;s.show({icon:s.ICON.WARNING,content:"收藏失败，请稍后重试"})})},delFavGoods:function(){var t=this;(0,o.itemDelFav)(this.favourObj.skuId,this.favourObj.venderId).then(function(e){0==e.iRet?(t.favStatus=!1,t.favInfo[t.favourObj.skuId]=!1,s.show({icon:s.ICON.SUCCESS,content:"取消收藏成功"})):s.show({icon:s.ICON.WARNING,content:"取消收藏失败，请稍后重试"})}).catch(function(t){s.show({icon:s.ICON.WARNING,content:"取消收藏失败，请稍后重试"})})}}};exports.default=r; 
 			}); 
		define("pages/item/itemBase/components/favour/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var t=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:t.ENV.isPingouXcx,favStatus:!1,favInfo:{}},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/focusSlide/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(require("../../../../../libs/promise.min.js")),o=require("./store"),r=require("../../js/model/baseModel.js"),n=require("../../js/util/util.js"),s=require("../../../../../common/utils.js"),a=e(require("../../constants/ptag-constants")),l=t(require("../../../../../common/wxcontext.js")),u=e(require("../../../../../common/fe_helper.js")),d=t(require("../../constants/ump-config")),h=require("../../../../../common/fe_report/usability.js"),c=require("../../../../../common/timer-manage"),m=getApp()||{},g=0,p="",f=!1,v=!0,I="",V=1,C=!1,E={props:{focusSlideObj:{type:Object},jxLive:Object,bigPromoteRightupImg:{type:String,default:""},isSupportNav:Boolean,hideOnlineVideo:Boolean,liveVideoMuted:Boolean,bigPromoteRightupImgTop:{type:String,value:"98rpx"},onlineVideoTop:{type:String,value:"250rpx"},defaultImg:String,hideMainVideo:Boolean,scrollUnderMainImg:Boolean},store:o.storeFn,watch:{focusSlideObj:function(e,t){e&&e.skuId&&(this.initFoucsSlide(e),this.initLabel(e),(!t||e.skuId!=t.skuId)&&this.initCommentBubble(e.skuId))},bigPromoteRightupImg:function(){this.bigPromoteRightup=this.bigPromoteRightupImg},hideMainVideo:function(e){e&&this.mainVideo.play?(this.switchVideoStatus(0),C=!0):!e&&C&&(this.switchVideoStatus(1),C=!1)},jxLive:function(e){e&&e.liveUrl&&(this.jxLiveClose=!1,this.jxLiveLoad=!1,n.reporter.reportExposure(a.EXP_ONLIVE_VIDEO_WINDOW))}},computed:{useJxDesign:function(){return this.isPingouXcx||this.focusSlideObj&&this.focusSlideObj.isPingou},showFloatVideo:function(){return this.useJxDesign&&this.scrollUnderMainImg&&this.mainVideo.playing}},data:{},ready:function(){this.handleVideoTimeUpdate=(0,n.throttle)(this.handleVideoTimeUpdate,500),this.videoTouchEnd=(0,s.debounce)(this.videoTouchEnd,100),v=!0},methods:{imagePreload:function(e){var t=this,i=this.focusSlideObj.focusImages;this.mainImagePreload="",this.slideImages=this.getImgList(i),this.$nextTick().then(function(){t.firstScreenImg=""})},imagePreloadError:function(e){var t=this,i=this.focusSlideObj.focusImages;this.mainImagePreload="",this.slideImages=this.getImgList(i),this.$nextTick().then(function(){t.firstScreenImg=""}),(0,h.umpBiz)({bizid:d.default.BIZ_ID_WQVUE,operation:d.default.mainImgFail,result:"0",message:"首张主图加载失败：focusImages="+i})},getImgList:function(e,t){return e?e.map(function(e){return e=e.trim().replace(/^(https?:)?\/\//i,"https://"),/^(https?:)?\/\//i.test(e)?e:t?u.getImg("https://m.360buyimg.com/n1/s200x200_"+e):u.getImg("https://m.360buyimg.com/mobilecms/s750x750_"+e)}):[]},initFoucsSlide:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};C=!1,g=0,V=1;var t=e.focusImages,i=void 0===t?[]:t,o=e.isFirstScreen,r=void 0!==o&&o,s=e.mainVideoId,a=void 0===s?0:s,l=e.firstScreenImage,u=void 0===l?[]:l;r&&u.length&&(this.firstScreenImg=this.getImgList(u,r)[0]),i.length&&(i=this.getImgList(i),this.focusSlideObj.focusImages=i,this.mainImagePreload=i[0],this.mainVideoId=a,this.initMainVideo()),this.slideHeight=(0,n.getClientInfo)().windowWidth,this.checkoutPauseStatus()},initMainVideo:function(){var e=this;this.mainVideo.insertFirstSlide=!1,this.mainVideo.show=!1,this.mainVideo.play=!1,this.mainVideo.playing=!1,this.mainVideo.url="",this.mainVideo.duration="",this.mainVideo.size="",this.mainVideo.cover="",this.mainVideo.isFullScreen=!1,this.mainVideoId&&(0,r.getMainVideo)(this.mainVideoId).then(function(t){if(0==t.errcode&&t.result&&t.result.data&&t.result.data.length>0){var i={low:1,high:2,yuanhua:3},o=t.result.data.filter(function(e){return e&&e.main_url}).sort(function(e,t){return i[e.sharpness]-i[t.sharpness]})[0];if(!o||!o.main_url)return;var r=t.result.videoSize||0,s=t.result.videoDuration||0;r&&(r=(1*r/1024/1024).toFixed(1)),e.mainVideo.insertFirstSlide=e.useJxDesign,e.mainVideo.show=!0,e.mainVideo.url=o.main_url,e.mainVideo.duration=s>0?e.getVideoTime(s)||"播放":"播放",e.mainVideo.size=r,e.mainVideo.cover=t.imageUrls&&t.imageUrls[0]||"",e.tagType="mainVideo",e.videoCtx=l.default.createVideoContext("mainVideo",e),n.reporter.reportExposure(a.EXP_MAIN_VIDEO)}})},getVideoTime:function(e){var t=parseInt(e),i=0,o=this.useJxDesign?"":"″",r=this.useJxDesign?":":"′";if(t>=60&&(i=parseInt(t/60),t=parseInt(t%60),i>=60))return!1;var n=(t<10?"0":"")+t+o;return i>=0&&(n=(i<10?"0":"")+parseInt(i)+r+n),n},showMainVideo:function(e){if(this.mainVideo.show){var t="wifi"==m.networkType;n.reporter.reportClick(a.MAIN_VIDEO_PLAY),!t&&v&&this.triggerEvent("showVideoToast"),this.switchVideoStatus(1),v=!1}},showCover:function(){this.mainVideo.isFullScreen&&this.videoCtx.exitFullScreen(),this.switchVideoStatus(0)},toggleNav:function(e){var t=e.detail.fullScreen;this.mainVideo.isFullScreen=t},checkoutPauseStatus:function(){this.mainVideo.play||this.switchVideoStatus(0)},cancalPlay:function(){n.reporter.reportClick(a.MAIN_VIDEO_CANCEL_PLAY),this.switchVideoStatus(0)},handleVideoPause:function(){this.mainVideo.playing=!1},handleVideoPlay:function(){this.mainVideo.playing=!0},switchVideoStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;1==e?(n.reporter.reportExposure(a.EXP_MAIN_VIDEO_PLAY),this.mainVideo.play=!0,this.setData({"mainVideo.play":!0}),this.videoCtx&&this.videoCtx.play()):(this.mainVideo.play=!1,this.setData({"mainVideo.play":!1}),this.videoCtx&&this.videoCtx.pause()),this.triggerEvent("updateVideoStatus",e)},videoTouchStart:function(e){var t=e.touches[0];this.clientStartX=t.clientX},videoTouchEnd:function(e){var t=e.changedTouches[0].clientX;f||(t-this.clientStartX>80&&(this.handleSlideIdxChange(this.slideImages.length),this.switchVideoStatus(0),n.reporter.reportClick(a.MAIN_VIDEO_CHECKOUT_IMAGES)),this.clientStartX-t>80&&(this.handleSlideIdxChange(1),this.switchVideoStatus(0),n.reporter.reportClick(a.MAIN_VIDEO_CHECKOUT_IMAGES)))},handleLoadedmetadata:function(e){var t=e.detail,i=t.width,o=t.height,r="240rpx",n="180rpx";i>o?(r=180/o*i+"rpx",n="180rpx"):(r="180rpx",n=180/i*o+"rpx"),this.floatVideoWidth=r,this.floatVideoHeight=n},handleVideoTimeUpdate:function(e){var t=e.detail.currentTime,i=void 0===t?0:t;Math.abs(1*i-1*g)>1.5&&(f=!0,p&&(0,c.stopTimeout)(p),p=(0,c.createTimeout)(function(){f=!1},1e3)),g=i},onSwiperChange:function(e){var t=this;"touch"!=e.detail.source&&n.ENV.isXcxEnv||(this.handleSlideIdxChange(e.detail.current),this.$nextTick().then(function(){var e=t.slideImages,i=t.mainVideo.insertFirstSlide,o=i?e.length:e.length-1;(e.length>1||i)&&t.slideIdx==o?(n.reporter.reportExposure(a.COVER_REVIEW_EXP),t.coverCommentData.curIdx=-1,t.playCoverReviewAnim()):(0,c.stopTimeout)(I)}))},handleSlideIdxChange:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.slideIdx=1*t||0;var i=this.slideImages,o=this.mainVideo.insertFirstSlide,r=o?i.length:i.length-1;o&&(0===this.slideIdx?this.tagType="mainVideo":"image"!=this.tagType&&(this.tagType="image")),this.$nextTick().then(function(){(i.length>1||o)&&e.slideIdx==r?(n.reporter.reportExposure(a.COVER_REVIEW_EXP),e.coverCommentData.curIdx=-1,e.playCoverReviewAnim()):(0,c.stopTimeout)(e.reviewAnimTimer)})},previewImage:function(){var e=this.data,t=e.slideImages,i=e.slideIdx,o=t.map(function(e){return e.replace(/(\/)(?:s\d+x\d+_)?(jfs\/)/,"$1$2")});n.reporter.reportClick(a.MAIN_IMAGE_CLICK,{slideIdx:i}),o.length&&(this.mainVideo.insertFirstSlide?l.default.previewImage({current:o[i-1],urls:o}):l.default.previewImage({current:o[i],urls:o}))},changeTag:function(e){var t=e.currentTarget.dataset.type;if(this.tagType!==t){var i=1;"image"===t?(this.mainVideo.play&&this.switchVideoStatus(0),i=V,n.reporter.reportClick(a.CLICK_IMG_TAG)):(i=0,V=this.slideIdx,n.reporter.reportClick(a.CLICK_MAIN_VIDEO_TAG)),this.slideIdx=1*i||0,this.tagType=t}},initLabel:function(e){e.skuId&&!e.isPingou&&(this.initRightDownLabel(e),this.initLeftDownLabel(e),this.initLeftUpLabel(e))},initLeftUpLabel:function(e){e.isOnlineBook&&(this.label.leftUp.flag="onlineBook")},initLeftDownLabel:function(e){var t=this;this.newGoodLabel(e).then(function(e){if(e.labelUrl)return t.label.leftDown.flag="newGood",n.reporter.reportExposure(a.DETAIL_SCENE_EXP),!0})},newGoodLabel:function(e){var t=e.spAttr||{};return"1"===t.isFzxp||"2"===t.isFzxp?i.default.resolve({labelUrl:"https://img11.360buyimg.com/jdphoto/s200x200_jfs/t4837/130/1067752991/3352/67ee71f1/58ec4c22N7a6f24c9.png"}):i.default.resolve({})},initRightDownLabel:function(e){var t=this;t.label.rightDown.flag="",t.label.rightDown.url="",t.sceneLabel(e).then(function(e){if(e.url)return t.label.rightDown.flag="scene",t.label.rightDown.url=e.url,n.reporter.reportExposure(a.DETAIL_SCENE_EXP),!0}).then(function(i){return i||t.alloverImgLabel(e).then(function(e){if(e.url)return t.label.rightDown.flag="alloverImg",t.label.rightDown.url=e.url,n.reporter.reportExposure(a.DETAIL_ALLIMG_EXP),!0})})},sceneLabel:function(e){return i.default.resolve({})},alloverImgLabel:function(e){return e.allOverImg?(0,r.getAlloverImg)(e.skuId).then(function(t){return 0==t.errcode&&t.result&&t.result.allOverImg&&t.result.allOverImg.length>0?i.default.resolve({url:"https://wqs.jd.com/item/panorama.shtml?ptag=7001.1.160&skuId="+e.skuId}):i.default.resolve({})}):i.default.resolve({})},eBookLabel:function(e){return"1713"==e.jdCategory[0]&&"android"!=n.ENV.platform?(0,r.getEBook)(e.skuId).then(function(e){return"1"===e.code&&e.info&&e.info.length>0&&e.info[0].ebookId?i.default.resolve({url:"https://e-m.jd.com/ebook/read/"+e.info[0].ebookId+"-0-1.html?sid=&source=wxsq"}):i.default.resolve({})}):i.default.resolve({})},coverGotoH5:function(e){var t=e.currentTarget.dataset,i=t.url;switch(t.flag){case"scene":n.reporter.reportClick(a.DETAIL_SCENE);break;case"ebook":n.reporter.reportClick(a.DETAIL_EBOOK_PREVIEW);break;case"alloverimg":n.reporter.reportClick(a.DETAIL_ALLIMG);break;case"3D":n.reporter.reportClick(a.DETAIL_3D_IMG)}i&&(0,n.gotoUrl)(this,{url:i})},handleSuyuanIconClick:function(){this.triggerEvent("handleSuyuanIconClick")},initCommentBubble:function(e){var t=this;(0,r.getCommentList)(0,0,e).then(function(e){var i=e.productCommentSummary,o=void 0===i?{}:i,r=e.hotCommentTagStatistics,n=void 0===r?[]:r,a=o.CommentCount,l=void 0===a?0:a,u=o.CommentCountStr,d=void 0===u?"":u;if(1!=o.SensitiveBook&&l>0){var h=[];n.forEach(function(e){e.canBeFiltered&&e.name&&h.push({name:e.name,idx:h.length})}),h.length>2&&h.length%2&&(h=h.concat(h)),h=(0,s.chunk)(h,2),t.coverCommentData.tags=h,t.coverCommentData.totalNum=parseInt(l)||0,t.coverCommentData.totalNumStr=d}})},playCoverReviewAnim:function(){var e=this,t=this.coverCommentData,i=t.curIdx,o=t.tags,r=void 0===o?[]:o,n=t.totalNum,s=void 0===n?0:n,a=i<r.length-1?i+1:0;!s||r.length<=1||(this.coverCommentData.curIdx=a,I&&(0,c.stopTimeout)(I),I=(0,c.createTimeout)(function(){e.playCoverReviewAnim()},3500))},gotoReview:function(){this.triggerEvent("changeCpart",{cpart:"comment"}),n.reporter.reportClick(a.COVER_REVIEW_CLICK)},onLiveClick:function(e){n.reporter.reportClick(a.CLICK_ONLIVE_VIDEO_WINDOW);var t=e.currentTarget.dataset.url;t&&(0,n.gotoUrl)(this,{url:t})},onLiveClose:function(){n.reporter.reportClick(a.CLICK_ONLIVE_VIDEO_WINDOW_CLOSE),this.jxLiveClose=!0,this.triggerEvent("onJxLiveClose")},onLiveStatechange:function(e){var t=e.detail.code;2004==t||2005==t?this.jxLiveLoad=!0:-2301==t&&(this.jxLiveClose=!0)},onLiveError:function(e){this.jxLive&&(this.jxLive.liveFlowUrl="")}}};exports.default=E; 
 			}); 
		define("pages/item/itemBase/components/focusSlide/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,slideIdx:0,slideImages:[],slideHeight:0,mainVideoId:0,bigPromoteRightup:"",mainVideo:{insertFirstSlide:!1,show:!1,play:!1,playing:!1,url:"",duration:"",size:"",cover:"",isFullScreen:!1},label:{rightDown:{flag:"",url:""},leftUp:{flag:""},leftDown:{flag:""}},coverCommentData:{tags:[],totalNum:0,totalNumStr:"",curIdx:-1},mainImagePreload:"",firstScreenImg:"",tagType:"image",jxLiveClose:!1,jxLiveLoad:!1,floatVideoWidth:"240rpx",floatVideoHeight:"180rpx"},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/garmentColor/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),t=require("../../js/util/util.js"),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(require("../../constants/ptag-constants")),s={props:{clothesColor:{type:Array,value:[]},jdCategory:{type:Array,value:[]},isPingou:Boolean},store:e.storeFn,watch:{clothesColor:function(e){this.updateGarment(e)}},methods:{updateGarment:function(e){if(this.jdCategory&&["1342","1343"].includes(this.jdCategory[1]))if(e&&e.length){var s=e.filter(function(e,t){return e.sku&&e.imagePath});this.setData({showListNum:s.length}),s.length&&t.reporter.reportExposure(r.GARMENT_COLOR_EXP)}else this.setData({showListNum:0});else this.setData({showListNum:0})},handleSkuChange:function(e){var s=e.currentTarget.dataset,o=s.sku,a=s.selected;a&&"0"!==a||(t.reporter.reportClick(r.GARMENT_COLOR_ITEM_CLICK),this.triggerEvent("changeSku",{sku:o}))}}};exports.default=s; 
 			}); 
		define("pages/item/itemBase/components/garmentColor/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,showListNum:0},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/goodsDesc/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),r=require("../../js/util/util.js"),t=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}(require("../../constants/ptag-constants")),s={props:{skuType:String,descData:Object},store:e.storeFn,watch:{},attached:function(){r.reporter.reportExposure(t.DETAIL_BOOK_AUTHOR_EXPO)},methods:{gotoSearchList:function(e){var s=e.currentTarget.dataset.key;r.reporter.reportClick(t.DETAIL_BOOK_AUTHOR_CLICK),(0,r.gotoUrl)(this,{xcx:{url:r.ENV.isPingouXcx?"/pages/pingou_second/search/search":"/pages/search/list/list",params:{key:s}}})}}};exports.default=s; 
 			}); 
		define("pages/item/itemBase/components/goodsDesc/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/guessYouLike/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=function(){function e(e,t){var i=[],r=!0,s=!1,o=void 0;try{for(var n,u=e[Symbol.iterator]();!(r=(n=u.next()).done)&&(i.push(n.value),!t||i.length!==t);r=!0);}catch(e){s=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(s)throw o}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=require("./store"),s=require("../../../../../common/fe_helper.js"),o=require("../../js/model/baseModel.js"),n=t(require("../../../../../libs/promise.min.js")),u=t(require("../../../../../common/wxcontext")),a=e(require("../../js/util/util.js")),c=require("../../../../../common/utils.js"),d=require("../../../../../common/numberp.js"),l=t(require("../../../../../api/Ptag/report_manager_wqvue")),p=e(require("../../constants/ptag-constants")),g={props:{guessYouLikeObj:Object},store:r.storeFn,watch:{guessYouLikeObj:function(e){e.jdCategory&&this.init(e)}},data:{pinLikeRecpos:"5711"},methods:{init:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.jdCategory,s=t.skuId,o=[this.queryShowNewGuess(r),this.fetchTabsConfig()];n.default.all(o).then(function(t){var r=i(t,2),o=r[0],n=r[1];e.enableTags=n,e.isNewStyle=!!o,e.initRecommendData(s)})},fetchTabsConfig:function(){return(0,o.getPpmsData)("_recommendTabsSwitch").then(function(e){return e||[]}).catch(function(){return[]})},initRecommendData:function(e){var t=this;if(e){var r=[this.getGuessYouLikeData()];r.push(this.getTabsStatus("tkes")?this.getUsedWareRecommend(e):n.default.resolve([])),n.default.all(r).then(function(e){var r=i(e,2),s=r[0],o=r[1],n=[],u=0;s&&(n.push({id:0,name:"猜你喜欢"}),t.guessYouLike.list=s.list,t.guessYouLike.style=s.style,t.guessYouLike.impr=s.impr||"",t.initReport(s.list)),o&&o.length&&(n.push({id:1,name:"同款二手"}),a.reporter.reportExposure(p.USED_GOODS_EXP),t.usedGoods.list=o),n.length&&(u=n[0].id),t.tabItems=n,t.tabIdx=u}).catch(function(e){})}},switchTab:function(e){var t=e.currentTarget.dataset.tab,i=void 0===t?0:t;this.tabIdx=i},getTabsStatus:function(e){var t=this.guessYouLikeObj,i=t.jdCategory,r=t.venderId,s=(this.enableTags||[]).filter(function(t){return t.tabId===e});return!s||!s.length||(s[0].cid1s.split("|").indexOf(i[0])>=0||s[0].cid2s.split("|").indexOf(i[1])>=0||s[0].cid3s.split("|").indexOf(i[2])>=0||s[0].venderId.split("|").indexOf(r)>=0)},report:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.action?t.action=1:t.action=0;var i=1==t.action,r=this.guessYouLike.impr,s=i?e.clk||"":"",o={source:e.source||""};if(i?Object.assign(o,{clk:s}):Object.assign(o,{impr:r}),1==t.action&&1==e.source){o.operation=this.isZiying?"10250":"10251"}l.default.guessyouLike(o)},initReport:function(e){var t=this.data.isPingou,i=[];Array.isArray(e)&&(e.forEach(function(e){e.forEach(function(e){Array.isArray(e)?e.forEach(function(e){i.push(e.source)}):i.push(e.source)})}),i.includes("1")&&(this.reportAdGoodsFlag=!0),this.onPageScroll(),i.length&&this.report({source:i.join(",")},{action:0}),t&&a.reporter.reportExposure(p.EXP_GUESS_YOU_LICK_FLOOR))},getUsedWareRecommend:function(e){var t={skuId:e,count:12};return(0,o.usedWareRecommend)(t).then(function(e){if(200==e.code&&e.data){var t=e.data.listSkuRelation||[];return t.map(function(e){e.mainImgPath=(0,s.getImg)(e.mainImgPath,250),e.showPrice=(""+parseFloat(e.price).toFixed(2)).split(".")}),t=t.length<10?[]:(0,c.chunk)(t,6)}return[]}).catch(function(){return[]})},queryShowNewGuess:function(e){return(0,o.getPpmsData)("guessGray").then(function(t){t=t||[];for(var i=0;i<t.length;i++){var r=t[i];if((r.cid1s||r.cid2s||r.cid3s)&&(~r.cid1s.indexOf("|"+e[0]+"|")||~r.cid2s.indexOf("|"+e[1]+"|")||~r.cid3s.indexOf("|"+e[2]+"|")))return a.getGray(r.gray)}return!1}).catch(function(){return n.default.resolve(!1)})},getGuessYouLikeData:function(){var e=this.guessYouLikeObj,t=e.skuId,i=e.jdCategory,r=e.isZiying,s=e.isJx,o=a.ENV.isPingouXcx,n=!!this.isNewStyle;return o?(this.isPinyoulike=!0,this.getPingouRecommend(t,n,i)):this.fetchGuessYouLike(t,!r,i,n,s)},fetchGuessYouLike:function(e,t,i,r,l){var p=a.ENV.isPingouXcx,g=p?"10266":"10250",h=p?"10267":"10251",f=r?45:30,m=u.default.JD.cookie.get("open_id")||"",k={recpos:t?h:g,pc:f,hi:m,sku:e,c1:i[0],c2:i[1],c3:i[2],t:Math.random()+""};return(0,o.guessYouLike)(k).then(function(e){if(!0===e.success&&e.data&&e.data.length){var t=r?"3":"1",i=e.data.map(function(e){e.isPingou=6==e.paicon,e.isPingou&&e.dpicon&&e.dpicon.count&&(e.pingouCount=e.dpicon.count);var t=e.isPingou&&e.dpicon&&e.dpicon.p||e.jp;return e.price=(0,d.round)((0,d.divide)(t,100),2).toFixed(2),e.showPrice=e.price.split("."),e.img=(0,s.getImg)(e.img,250),e.isHidePrice=1==e.jpnonshow,e.isYuyue=1==e.reserve,e.skuName=e.t,e}),o={type:"more"};return i.length>=f&&(i.pop(),i.push(o)),i.length<=3&&(t=r?"4":"2"),{list:l?(0,c.chunk)(i,3):(0,c.chunk)((0,c.chunk)(i,3),r?3:2),style:t,impr:e.impr}}return[]}).catch(function(e){var t=e.code,i=e.message;n.default.reject({code:t,message:i})})},getPingouRecommend:function(e,t,i){var r=this.pinLikeRecpos;return new n.default(function(n,u){if(e){var a={sku:e,recpos:r,count:t?45:30,c1:i[0],c2:i[1],c3:i[2]};(0,o.pinYouLike)(a).then(function(e){if("0"==e.errcode&&l.default.addPtagExposure("138264.1.3"),e&&e.data&&e.data.feeds&&e.data.feeds.length>0){var i=t?"3":"1",r=e.data.feeds.map(function(e){var t=((4096&e.property)>0?e.pgprice:e.jdprice)||0,i=e.ext,r=void 0===i?{}:i;return e.sku=e.id,e.skuName=e.name,e.price=(0,d.round)(t,2).toFixed(2),e.showPrice=e.price>0?e.price.split("."):["暂无定价"],e.isPingou=!0,e.img=(0,s.getImg)(e.imgbase,250),e.pingouCount=e.needcount>0?e.needcount:"",e.fxleftlabel=r.fxleftlabel||"返",e.fxrightlabel=r.fxrightlabel,e.source=r.source,e.needReport=!0,e});r.length<=3&&(i=t?"4":"2");var o=(0,c.chunk)((0,c.chunk)(r,3),t?3:2);n({list:o,style:i,impr:e.impr})}else u()}).catch(function(e){e.code,e.message;u()})}else u()})},swiperGuessYouLike:function(e){var t=e.detail.current;this.guessYouLike.current=t,this.reportAdGoods.length=0,this.guessLikeReport()},swiperUsedGoods:function(e){var t=e.detail.current;this.usedGoods.current=t},guessLikeReport:function(){var e=this;0===this.tabIdx&&(this.isPinyoulike||this.reportAdGoodsFlag)&&this.createSelectorQuery().select(".detail-guess__swiper").boundingClientRect(function(t){if(t){var i=e.guessYouLike.list||[];if(!i.length)return;var r=e.guessYouLikeObj.isPingou,s=e.guessYouLike.current,o=50+(r?40:0);if(e.isPinyoulike){var n=(0,d.divide)(e.screenWidth-6,3),u=n+(e.isNewStyle?0:70);i[s].forEach(function(i,r){var a=t.top+u*r+(0,d.divide)(n,2);if(a+o<e.screenHeight&&a>42){var c=[];i.forEach(function(t,i){if(t.needReport){var o=t.ext,n=void 0===o?{}:o,u=t.pps,a=t.sku,d=n.source,l=n.sid,p=n.reqsig,g=n.broker_info,h=n.expose_url,f=n.user_layer,m=n.rp,k=void 0===m?{}:m;c.push({report_url:h,source:d,ad_sid:l,reqsig:p,ad_type:3,id:"",skuid:a,page:s+1,index:3*r+(i+1),broker_info:g,pps:u,ptag:"7418.16.37",recpos:e.pinLikeRecpos,skus:e.guessYouLikeObj&&e.guessYouLikeObj.skuId,user_layer:f,ext:k}),t.needReport=!1}}),c.length>0&&l.default.pinLikeExposure&&l.default.pinLikeExposure(c)}})}else if(t.bottom<42||t.top>e.screenHeight)e.reportAdGoods.length=0;else if(t.bottom+o<e.screenHeight&&t.top>42&&0===e.reportAdGoods.length){var a=(Array.isArray(i[s][0])?i[s].reduce(function(e,t){return e.concat(t)}):i[s]).filter(function(e){return"1"==e.source}).map(function(e){return e.client_exposal_url});e.reportAdGoods=a,e.reportUrls(e.reportAdGoods)}}}).exec()},onPageScroll:function(){var e=this;this.reportAdGoods=[],this.screenHeight=667,this.screenWidth=375,u.default.getSystemInfo({success:function(t){e.screenHeight=t.screenHeight,e.screenWidth=t.screenWidth}});var t=getCurrentPages().length;this.page=getCurrentPages()[t-1],["pages/item/detail/detail","pages/item/featured/featured","pages/item/pingou/pingou"].includes(this.page.route)&&(this.pageScrollFunc||(this.pageScrollFunc=this.page.onPageScroll),this.page.onPageScroll=a.throttle(function(t){e.pageScrollFunc&&e.pageScrollFunc(t),e.guessLikeReport()},300,!0))},guessYouLikeGotoDetail:function(e){l.default.setChangeRef(!0);var t=e.currentTarget.dataset,i=t.sku,r=t.price,s=t.name,o=t.cover,n=t.pps,u=t.i,c=t.idx,d=t.index,g=t.isPingou,h=this.guessYouLike.list,f=this.isJx,m=f?h[u][c]:h[u][c][d],k=f?3*u+c:6*u+3*c+d,v={sku:i,price:r,name:s,cover:o};if(this.report(m,{action:1,index:k}),this.isPinyoulike){var y=m.ext,_=void 0===y?{}:y,L=m.pps,b=_.source,x=_.sid,j=_.reqsig,O=_.broker_info,P=_.user_layer,S=_.click_url,Y=_.rp,I=void 0===Y?{}:Y;l.default.pinLikeClick&&l.default.pinLikeClick([{report_url:S,source:b,ad_sid:x,reqsig:j,ad_type:3,id:"",skuid:i,page:u+1,index:3*c+(d+1),broker_info:O,pps:L,recpos:this.pinLikeRecpos,skus:this.guessYouLikeObj&&this.guessYouLikeObj.skuId,user_layer:P,ext:I}])}else v.pps=n;a.reporter.reportClick(p.CLICK_GUESS_YOU_LIKE_FLOOR),g&&(v.ptag="138264.1.2",a.reporter.reportClick(p.CLICK_GUESS_YOU_LIKE_FLOOR_PG)),this.$gotoItem(v,{isPingou:g,useH5:!a.ENV.isXcxEnv})},gotoDetailUsedGoods:function(e){var t=e.currentTarget.dataset,i=t.sku,r=t.price,s=t.name,o=t.cover;a.reporter.reportClick(p.USED_GOODS_CLICK);var n={sku:i,price:r,name:s,cover:o};this.$gotoItem(n,{useH5:!a.ENV.isXcxEnv})},guessYouLikeloadMore:function(){l.default.setChangeRef(!0),a.reporter.reportClick(p.CLICK_GUESS_YOU_LIKE_MORE);var e=this.guessYouLikeObj,t=e.skuId,i=e.jdCategory,r=e.jdPrice,s=e.isZiying?"1742":"1877",o="https://wqs.jd.com/item/recommend_more.shtml"+["?sku="+t,"category="+i.join("_"),"price="+r,"adids="+s,"scene=4"].join("&");a.gotoUrl(this,{url:o})},reportUrls:function(e){if(0!==(e=e.filter(Boolean)).length){var t="https://sh.jd.com/b/"+e.map(function(e){var t=e.lastIndexOf("/");return e.slice(t+1,e.length)}).join(",");l.default.guessyouLike({impr:t,source:1})}}}};exports.default=g; 
 			}); 
		define("pages/item/itemBase/components/guessYouLike/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,priceMark:"￥",guessYouLike:{list:[],current:0,style:1,impr:""},tabItems:[],tabIdx:0,usedGoods:{list:[],current:0},isNewStyle:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/itemPrice/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(require("../../../itemBase/js/handler/userInfo.js")),i={props:{info:{type:Object},extraPriceFlag:{type:Boolean},showGuide:{type:Boolean},priceLayoutClass:{type:String}},store:e.storeFn,watch:{info:function(){var e=this;this.data.info&&this.data.info.priceObj&&"sfpPrice"==this.data.info.priceObj.priorityPrice&&this.createSelectorQuery().select(".sfp_price_icon").boundingClientRect(function(t){if(t){var i=t.left+t.width/2-18;i>0&&e.triggerEvent("updateSfpArrowLeft",i)}}).exec();var i=this.data.info,r=i.isNormalAct,a=i.priceObj;if(r){var c="";+a.price<+a.marketPrice&&(c=(10*a.price/a.marketPrice).toFixed(1));var s=c+"折";this.setData({discount:s})}if(this.data.info&&this.data.info.priceObj&&"nupPrice"==this.data.info.priceObj.priorityPrice&&t.getPinStatus().then(function(t){var i=t.isDefault,r=t.isSwitch;i||r||(e.isNupPriceShow=!0)}),this.data.info&&this.data.info.priceObj&&"vdpPrice"==this.data.info.priceObj.priorityPrice){var o={};try{o=JSON.parse(this.data.info.priceObj.ext)}catch(e){console.error(e)}var n="";switch(parseInt(o&&o.VENDOR_MEMBER&&o.VENDOR_MEMBER.level)){case 5002:n="https://m.360buyimg.com/cc/jfs/t1/92840/19/10905/2079/5e21868fEb6666928/ab484e4e88ced651.png";break;case 5003:n="https://m.360buyimg.com/cc/jfs/t1/101652/3/10793/2121/5e2186b5Ee18a2992/bd7a58f0c3fc86e9.png";break;case 5004:n="https://m.360buyimg.com/cc/jfs/t1/96396/19/10821/2058/5e2186d8E9a39b258/d85c4b70b5a07a0c.png";break;case 5005:n="https://m.360buyimg.com/cc/jfs/t1/90596/33/10827/2109/5e2186efE91d61cd8/14775d2dc16c945b.png";break;default:n="https://m.360buyimg.com/cc/jfs/t1/95198/24/10865/3751/5e252210Ebdd44a44/522da3df0c7928da.png"}this.vdpPriceIcon=n}}},methods:{showModalTips:function(e){var t="",i="#3CC51F";switch((Object.keys(e.currentTarget.dataset).length?e.currentTarget.dataset:e.detail.currentTarget.dataset).type){case"specialPriceTip":t="近期浏览、关注过该商品或关联商品的用户，有可能被判定为该商品的优惠价专属用户。仅在商品展示“专属价”标签期间，用户能以低于京东价的专属价购买该商品。";break;case"samPriceTip":t="山姆会员店是沃尔玛旗下的高端会员制商店，将山姆会员卡与京东账号绑定后，即可在山姆会员商店官方旗舰店享受会员价购买商品",i="#E93B3D";break;case"stpPriceTip":t="学生价是京东针对完成认证的学生用户设置的优惠价，仅限已注册认证的京东校园用户可享受，其他用户无法享受。",i="#E9383D"}t&&wx.showModal({title:"",content:t,showCancel:!1,confirmColor:i})}}};exports.default=i; 
 			}); 
		define("pages/item/itemBase/components/itemPrice/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,priceMark:"￥",discount:"",isNupPriceShow:!1,vdpPriceIcon:""},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/itemPriceReturn/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(require("../../../itemBase/js/util/util.js")),r={props:{price:{type:String},fanxian:{type:Object},actParticipantNum:{type:String},afterDiscountPrice:{type:String}},store:e.storeFn,watch:{},created:function(){var e=t.getClientInfo().windowWidth;this.responsiveHide=e<=320},methods:{showGwfxTips:function(){this.triggerEvent("showGwfxTips")}}};exports.default=r; 
 			}); 
		define("pages/item/itemBase/components/itemPriceReturn/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,priceMark:"￥",responsiveHide:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/itemShop/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),o=t(require("../../../../../common/fe_helper")),a=require("../../js/model/baseModel.js"),n=t(require("../../js/util/util.js")),s=t(require("../../../../../common/toast/toast.js")),i=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../../common/wxcontext.js")),r=t(require("../../../itemBase/constants/ptag-constants")),d={props:{venderId:{type:String},skuId:{type:String},isJx:{type:Boolean},category:{type:Array},isZiying:{type:Boolean},isFCS:{type:Boolean},isOverseaPurchase:{type:String},isPingou:{type:Boolean},isNewPingou:{type:Boolean},isSCF:{type:Boolean},showPhoneNum:{type:Boolean},pgShopInfo:{type:Object}},store:e.storeFn,ready:function(){var t=this,e=this.isPingouXcx;this.venderId&&((0,a.getVenderInfo)(this.venderId).then(function(a){var s={};if(0==a.errcode&&a.data&&a.data.length>0){var i=a.data[0]||{},d=i.shopInfo,h=i.gczgGoodsNum,p=i.squareLogo;s.isZy="1"==d.isZy,s.shopName=d.shopName,e&&"//img30.360buyimg.com/cms/jfs/t18595/220/1675716535/1334/7ab25346/5ad3fffaN4384dc33.png"==p&&(p="//img11.360buyimg.com/jdphoto/s100x100_jfs/t1/88809/20/3942/1650/5de4b4e0E7aeb0d40/ce1ea22696e25641.png"),s.shopLogoUrl=o.getImg(p),s.gczgGoodsNum=h,s.goodsNum=d.goodsNum,s.shopFansNum=d.shopFansNum,s.isDiamond=0!=d.isDiamond,s.venderId=d.venderId,s.phoneNum=d.phoneNum,s.shopId=a.data[0].shopId,s.shopEnterHotCateId1=a.data[0].shopEnterHotCateId1,s.shopEnterHotCateId2=a.data[0].shopEnterHotCateId2,s.shopEnterHotCateId3=a.data[0].shopEnterHotCateId3,s.shopEnterHotCateName1=a.data[0].shopEnterHotCateName1,s.shopEnterHotCateName2=a.data[0].shopEnterHotCateName2,s.shopEnterHotCateName3=a.data[0].shopEnterHotCateName3,s.fPicUrl=o.getImg(d.fPicUrl),s.isShopEnterShow="1"==a.data[0].productDetailShopEnteranceFlag&&d.fPicUrl&&s.shopEnterHotCateName1&&s.shopEnterHotCateName2&&s.shopEnterHotCateName3,s.shopFansNum=Number(s.shopFansNum),s.shopFansNum<1e4?s.shopFansNum=s.shopFansNum:s.shopFansNum<=99999?s.shopFansNum=(s.shopFansNum/1e4).toFixed(1)+"万":s.shopFansNum=(s.shopFansNum/1e4).toFixed(0)+"万","1"!=d.isZy&&(s.scoreRankRateGrade=a.data[0].scoreRankRateGrade,s.userEvaluateScore=a.data[0].userEvaluateScore,s.commentFactorScoreRankGrade=a.data[0].commentFactorScoreRankGrade,s.logisticsLvyueScore=a.data[0].logisticsLvyueScore,s.logisticsFactorScoreRankGrade=a.data[0].logisticsFactorScoreRankGrade,s.afterServiceScore=a.data[0].afterServiceScore,s.afsFactorScoreRankGrade=a.data[0].afsFactorScoreRankGrade,s.isScoreShow=s.userEvaluateScore&&s.logisticsLvyueScore&&s.afterServiceScore),s.categoryGoodShopCode=a.data[0].categoryGoodShopCode,s.commonGoodShopCode=a.data[0].commonGoodShopCode,s.hasDecoUnionCode=1==a.data[0].decoUnionCode,s.shopName&&(t.setData({shopInfo:s}),n.reporter.reportExposure(r.EXP_DETAIL_SHOP_FLOOR))}}).catch(function(t){}),(0,a.shopCheckFav)(this.venderId).then(function(e){var o=0==e.iRet&&1==e.state;t.setData({favStatus:o})}).catch(function(t){}),this.initShopGiftInfo()),i.default.JD.events.listen("item.main.addFavShop",function(){t.addFavShop(t.venderId)}),i.default.JD.events.listen("item.main.updateShopGiftStatus",function(){t.initShopGiftInfo()}),this.favShop=o.throttle(this.favShop,1e3)},methods:{gotoShop:function(t){var e=t.currentTarget.dataset.from,o=this.data.shopInfo.venderId;"button"==e&&n.reporter.reportClick(r.DETAIL_GOTO_SHOP),o&&n.gotoUrl(this,{xcx:{url:"/pages/shop/index/index",params:{venderId:o}},h5:{url:"https://wqshop.jd.com/mshop/gethomepage?venderid="+o}})},gotoShopWithCate:function(t){var e=t.currentTarget.dataset,o=e.cateid,a=void 0===o?"":o,s=e.index,i=this.skuId,r=this.venderId,d=void 0===r?"":r,h="",p={};d&&("1"==s?(h="https://wqshop.jd.com/mshop/gethomepage?venderid="+d+"&sceneId=1001&skuId="+i+"&categoryId3="+a,p={venderId:d,sceneId:1001,categoryId3:a,skuId:i}):(h="https://wqshop.jd.com/mshop/gethomepage?venderid="+d+"&sceneId=1001&categoryId3="+a,p={venderId:d,sceneId:1001,categoryId3:a}),n.gotoUrl(this,{xcx:{url:"/pages/shop/index/index",params:p},h5:{url:h}}))},favShop:function(t){var e=t.currentTarget.dataset.type,o=this.venderId;"add"==e?(this.addFavShop(o),n.reporter.reportClick(r.DETAIL_SHOP_FAV)):(this.delFavShop(o),n.reporter.reportClick(r.DETAIL_SHOP_UNFAV))},addFavShop:function(t){var e=this,o=this.data.shopFavType;(0,a.shopAddFav)(t).then(function(a){var n=0==a.iRet||2==a.iRet;n?(s.show({content:"收藏成功",icon:s.ICON.SUCCESS}),e.setData({favStatus:n}),1===o&&e.drawShopActGift(t),e.triggerEvent("updateShopFavStatus",n),e.initShopGiftInfo()):s.show({content:"收藏失败，请稍后再试",icon:s.ICON.ERROR})}).catch(function(t){s.show({content:"收藏失败，请稍后再试",icon:s.ICON.ERROR})})},delFavShop:function(t){var e=this;(0,a.shopDelFav)(t).then(function(t){0==t.iRet?(s.show({content:"取消收藏成功",icon:s.ICON.SUCCESS}),e.setData({favStatus:!1}),e.triggerEvent("updateShopFavStatus",!1),e.initShopGiftInfo()):s.show({content:"网络错误，请稍后重试",icon:s.ICON.ERROR})}).catch(function(t){s.show({content:"网络错误，请稍后重试",icon:s.ICON.ERROR})})},initShopGiftInfo:function(){var t=this,e=this.data.venderId;(0,a.getShopActivityList)(e).then(function(e){if(e.length){var o=e[0],a={dongCoupon:{type:"dongquan",desc:"%discount%元店铺券"},jingCoupon:{type:"jingquan",desc:"%discount%元店铺券"},jingBean:{type:"jingdou",desc:"%sendCount%京豆"},point:{type:"jifen",desc:"%sendCount%店铺积分"}};t.shopGiftInfo={shopGiftActiveId:o.activeId,shopGiftId:o.giftId,giftList:[]};for(var n in a){var s=o[n];if(s&&(s.discount||s.sendCount)){var i=a[n];i.desc=i.desc.replace(/%discount%/gi,s.discount).replace(/%sendCount%/gi,s.sendCount),t.shopGiftInfo.giftList.push(i)}}t.setData({shopFavType:1})}else t.setData({shopFavType:0})}),(0,a.getShopGiftList)(e).then(function(o){if(o.length){var n=o[0].modelNameList;(void 0===n?[]:n).filter(function(t){return"-3"==t.code}).length||t.setData({shopEntryType:3})}else(0,a.getShopSignStatus)(e).then(function(e){var o=e.type,a=e.code,n=0;"0"===o&&0==a?n=1:"1"===o&&0==a&&(n=2),n>0?t.setData({shopEntryType:n}):t.setData({shopEntryType:0})})}).catch(function(t){})},drawShopActGift:function(t){var e=this,o=this.shopGiftInfo||{},n=o.shopGiftActiveId,s=o.shopGiftId,i=o.giftList;(0,a.drawShopActivityGift)(t,n,s).then(function(t){var o=t.retCode,a=void 0===o?-1:o,n={0:"礼包领取成功，可在个人中心进行查看",201:"您已经领取过该礼包，可到个人中心进行查看",402:"活动已失效，礼包领取失败，下次要快一点哦","-1":"很遗憾，礼包领取失败了，稍后再试试吧","-2":"礼包领取成功，可在个人中心&店铺中查看"},s=n[""+a]||n[-1];0===a&&i.forEach(function(t){"积分"===t.type&&(s=n[-2])}),e.setData({shopFavType:0,showModalFlag:!0,shopGift:{giftList:i||[],resTips:s||"",code:a}})}).catch(function(t){var o=t.code;t.message;e.setData({shopFavType:0,showModalFlag:!0,shopGift:{resTips:"很遗憾，礼包领取失败了，稍后再试试吧",code:o||-1}})})},handleModalClose:function(){this.setData({showModalFlag:!1})}}};exports.default=d; 
 			}); 
		define("pages/item/itemBase/components/itemShop/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,shopInfo:{},favStatus:!1,shopEntryType:0,shopFavType:0,showModalFlag:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/jxappExclusiveLayer/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store"),a=e(require("../../../itemBase/constants/ptag-constants")),o=e(require("../../js/util/util.js")),s=require("../../../itemBase/js/model/baseModel.js"),r={props:{showJxappExclusiveLayerFlag:{type:Boolean},duoDanFan:{type:Object,value:{}},launchAppParameter:{type:String}},store:t.storeFn,ready:function(){var e=this;(0,s.getPpmsData)("_grayInfo").then(function(t){(t||[]).forEach(function(t){"jxappExclusiveDownloadToast"==t.key&&"100"==t.num&&(e.downloadToastSwitch=!0)})})},watch:{showJxappExclusiveLayerFlag:function(e){this.observeFlagChange(e)}},methods:{observeFlagChange:function(e){var t=this;e?(this.setData({isShowJxappExclusiveLayerFlag:!0}),setTimeout(function(){t.setData({showAnim:!0})},100),o.reporter.reportExposure(a.EXP_JXAPP_EXCLUSIVE_LAYER_FANXIAN)):(this.setData({showAnim:!1}),setTimeout(function(){t.setData({isShowJxappExclusiveLayerFlag:!1})},500))},closeJxappExclusiveLayer:function(){this.triggerEvent("closeJxappExclusiveLayer")},noscroll:function(){},launchError:function(e){var t=this;this.downloadToastSwitch?this.toast.show({icon:this.toast.ICON.INFO,content:"请到App Store或应用市场下载京喜App；如已下载，请直接打开京喜App下单。",duration:3e3}):setTimeout(function(){t.param.launchApp=!0},1e3),console.error("唤起错误",e)},cancelJump:function(){this.param.launchApp=!1},launchAppTap:function(){this.closeJxappExclusiveLayer(),o.reporter.reportClick(a.CLICK_JXAPP_EXCLUSIVE_LAYER_BTN)}}};exports.default=r; 
 			}); 
		define("pages/item/itemBase/components/jxappExclusiveLayer/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,isShowJxappExclusiveLayerFlag:!1,isShowPopupAnim:!1,showAnim:!1,param:{moduleName:"item",urlConfig:{rdLink:21},showBar:!1,launchApp:!1,downloadAppGuideType:2},schema:"",downloadToastSwitch:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/jxvip-buy/model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(r,t){var u={key:"wq.webmonitor.jxvip.buy_popup.OpenCardInfo",bizId:t,opId:1,errKey:"wq.webmonitor.jxvip.buy_popup.OpenCardInfo.request.error",errBizId:t,errOpId:2,reportHook:function(e){return 0==e.ret?{code:0}:{code:e.ret,message:e.msg}}};return new Promise(function(t,i){o.request.get({url:"https://wq.jd.com/jxvip/index/OpenCardInfo",data:r,ump:u}).then(function(o){var u=o.body;if(99==u.ret)return(0,n.doLoginV2)().then(function(){t(e(r))}).catch(function(e){i(e)});t(u)}).catch(function(e){i(e)})})}function r(e,t){var u={key:"wq.webmonitor.jxvip.buy_popup.SubmitOrder",bizId:t,opId:5,errKey:"wq.webmonitor.jxvip.buy_popup.SubmitOrder.request.error",errBizId:t,errOpId:6,reportHook:function(e){return 0==e.ret?{code:0}:{code:e.ret,message:e.msg}}};return new Promise(function(t,i){o.request.get({url:"//wq.jd.com/jxvip/purchase/SubmitOrder",data:e,ump:u}).then(function(o){var u=o.body;if(2e4==u.ret||20004==u.ret)return(0,n.doLoginV2)().then(function(){t(r(e))}).catch(function(e){i(e)});t(u)}).catch(function(e){i(e)})})}function t(e,r){var u={key:"wq.webmonitor.jxvip.buy_popup.QueryOrder",bizId:r,opId:7,errKey:"wq.webmonitor.jxvip.buy_popup.QueryOrder.request.error",errBizId:r,errOpId:8,reportHook:function(e){return 0==e.ret?{code:0}:{code:e.ret,message:e.msg}}};return new Promise(function(r,i){o.request.get({url:"https://wq.jd.com/jxvip/purchase/QueryOrder",data:e,ump:u}).then(function(o){var u=o.body;if(2e4==u.ret||20004==u.ret)return(0,n.doLoginV2)().then(function(){r(t(e))}).catch(function(e){i(e)});r(u)}).catch(function(e){i(e)})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.openCardInfo=e,exports.getPPMSConfig=function(e){var r={key:"wq.webmonitor.jxvip.buy_popup.ppms",bizId:e,opId:3,errKey:"wq.webmonitor.jxvip.buy_popup.ppms.request.error",errBizId:e,errOpId:4,reportHook:function(e){return e.data&&e.data[0]?{code:0}:{code:9991,message:"data为空"}}};return new Promise(function(e,t){o.request.get({url:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev37082.jsonp",data:{_t:+new Date},retry:1,ump:r}).then(function(r){var o=r.body;o.data?e(o.data):t({code:9991,message:"data不存在"})}).catch(function(e){var r=e.code,o=e.message;t({code:r,message:o})})})},exports.submitOrder=r,exports.queryOrder=t;var o=require("../../../../../common/request/request"),n=require("../../../../../common/login/loginv1"); 
 			}); 
		define("pages/item/itemBase/components/kernelProps/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t,e){return t.reduce(function(t,r){return t.find(function(t){return t[e]===r[e]})?t:t.concat([r])},[])}function e(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!=e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./store"),n=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(require("../../../../../common/fe_helper.js")),i=require("../../../itemBase/js/model/baseModel.js"),o={props:{skuId:{type:String,observer:"updateItemSpecs"},category:{type:Array,observer:"updateItemSpecs",value:[]}},store:r.storeFn,ready:function(){var t=this.skuId,e=this.category,r=void 0===e?[]:e;t&&r.length&&this.initItemSpecs()},methods:{updateItemSpecs:function(t,r,n){r&&t!=r&&("category"===n[0]&&e(t,r)||this.initItemSpecs())},initItemSpecs:function(){var e=this,r=this.data,o=r.skuId,a=r.category,s=void 0===a?[]:a;o&&s[2]&&(0,i.getPpmsData)("_kernelProps").then(function(r){var a=(r=r.filter(function(e){var r=e.content,n=(void 0===r?[]:r).filter(function(t){return t.categoryGroupAttId&&t.name&&t.image});return n=t(n,"categoryGroupAttId"),e.content=n,n.length>=3})).filter(function(t){return t.cid3s.split("|").indexOf(s[2])>=0});if(a[0]){var u=a[0].content;(0,i.specification)(o).then(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=[];(r=t(r,"categoryGroupAttId")).length<3?e.setData({isShow:!1,propsList:i}):(u.forEach(function(t){var e=r.findIndex(function(e){return e.categoryGroupAttId===t.categoryGroupAttId});e>=0&&i.push({id:t.categoryGroupAttId,key:t.name&&t.name.trim(),value:r[e].vals[0],icon:n.getImg(t.image)})}),i.length,e.setData({isShow:i.length>=3,propsList:i.slice(0,8)}))})}else e.setData({isShow:!1,propsList:[]})})},handleLayerClick:function(){var t=this.data.propsList;this.triggerEvent("handleLayerClick",{propsList:t})}}};exports.default=o; 
 			}); 
		define("pages/item/itemBase/components/kernelProps/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{propsList:[],isShow:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/kernelPropsLayer/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),o={props:{showKernelPropsLayerFlag:Boolean,propsList:Array,isPingou:Boolean},store:e.storeFn,watch:{showKernelPropsLayerFlag:function(e){this.observeFlagChange(e)}},methods:{observeFlagChange:function(e){var o=this;e?(this.setData({isShowPopup:!0}),setTimeout(function(){o.setData({showAnim:!0})},100)):(this.setData({showAnim:!1}),setTimeout(function(){o.setData({isShowPopup:!1})},500))},closeKernelProps:function(){this.triggerEvent("closeKernelProps")}}};exports.default=o; 
 			}); 
		define("pages/item/itemBase/components/kernelPropsLayer/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,isShowPopup:!1,showAnim:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/navbar/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){var r=[],i=!0,o=!1,n=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){o=!0,n=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw n}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../libs/promise.min.js")),i=require("./store"),o=e(require("../../../../../common/localStorage")),n=require("../../js/model/baseModel.js"),a=require("../../js/util/util.js"),s=e(require("../../constants/ptag-constants")),c={props:{tabs:{type:Array,value:[]},top:{type:String,value:"0"},navCur:{type:String},showShareTips:Boolean,isJx:{type:Boolean,value:!1},showTips:Boolean,isPingou:{type:Boolean,value:!1}},mounted:function(){var e=this;this.isXcxEnv=a.ENV.isXcxEnv,o.get("item:closeShareTip",1).then(function(t){1==t?(a.reporter.reportExposure(s.DETAIL_SHARE_TIP_EXP),e.setData({showShareTips:!0},function(){setTimeout(function(){e._closeShareTips()},6e3)})):e.setData({showShareTips:!1})})},store:i.storeFn,watch:{},methods:{handleNavTabClick:function(e){var t=e.target.dataset.dtype;this.triggerEvent("clickNavTab",t)},handleShareBtnClick:function(){switch(o.getSync("item:cardShareType")){case 1:a.reporter.reportClick(s.DETAIL_SHARE_BTN_2);break;case 2:a.reporter.reportClick(s.DETAIL_SHARE_BTN_3);break;case 3:a.reporter.reportClick(s.DETAIL_SHARE_BTN_4);break;case 4:a.reporter.reportClick(s.DETAIL_SHARE_BTN_5);break;default:a.reporter.reportClick(s.DETAIL_SHARE_BTN)}this._closeShareTips(),this.triggerEvent("clickShareBtn")},handleCloseClick:function(){this._closeShareTips()},_closeShareTips:function(){this.showShareTips&&(o.set("item:closeShareTip",0),a.reporter.reportClick(s.DETAIL_SHARE_TIP_CLOSE)),this.setData({showShareTips:!1})},initPingouShareInfo:function(){var e=this;this.data.isPingou&&r.default.all([(0,n.cpsSkuInfo)(this.data.skuId),(0,n.unionUser)()]).then(function(r){var i=t(r,2),o=i[0],c=i[1];if(o&&c){if(0==o[0].commissionRate)return;(0,n.getPpmsData)("_cpsShareInfo").then(function(t){if(t.source.indexOf("2")>-1&&t&&t.iconUrl&&t.tip){var r=t.tip.indexOf("{"),i=r>-1?t.tip.slice(0,r):t.tip;e.setData({pingouTip:{icon:t.iconUrl,text:i,commission:o[0].commission},showPingouShareTips:!0,unionId:c.unionId}),a.reporter.reportExposure(s.EXP_PINGOU_SHARE_TIP)}}).catch(function(){})}}).catch(function(e){})},handlePingouShareBtnClick:function(){var e=this;this.data.unionId&&((0,n.wqToken)().then(function(t){if(t){var r="https://wqs.jd.com/pingou_cps/share/index.html?skuid="+e.data.skuId+"&unionId="+e.data.unionId+"&fromPgDetail=1&isWxapp=1&wq_auth_token="+t;(0,a.gotoUrl)(e,{url:r})}}).catch(function(t){e.triggerEvent("error",{errMsg:"网络错误("+t.code+")"})}),a.reporter.reportClick(s.CLICK_PINGOU_SHARE_TIP))},handlePingouCloseClick:function(){this.setData({showShareTipsPingou:!1})}}};exports.default=c; 
 			}); 
		define("pages/item/itemBase/components/navbar/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{showPingouShareTips:!1,pingouTip:{},showShareTipsPingou:!0,isPGWeapp:!1,isXcxEnv:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/offlineStore/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),t=require("../../js/model/baseModel.js"),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(require("../../constants/ptag-constants")),o=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../common/wxcontext.js")),s=require("../../js/util/util.js"),i=require("../../../../../common/userinfo_wqvue"),n={props:{skuId:String,venderId:String,spAttr:{type:Object,value:{}},skumark:Number},store:e.storeFn,watch:{skuId:function(e,t){this.updateOfflineStore(e,t)}},methods:{gotoStoreList:function(e){var t=e.currentTarget.dataset.url;s.reporter.reportClick(r.STORE_INFO_CLICK),(0,s.gotoUrl)(this,{url:t,omitH5Params:!0})},updateOfflineStore:function(e,t){t&&e==t||!e||this.getLocation()},initOfflineStore:function(){var e=this,t=this.data,r=t.venderId;t.skuId?this.getBrandStoreInfo().then(function(t){e.handleOfflineStoreData(t,1)}).catch(function(){r?e.getStoreInfo().then(function(t){e.handleOfflineStoreData(t,2)}).catch(function(){e.setData({showOfflineStore:!1})}):e.setData({showOfflineStore:!1})}):this.setData({showOfflineStore:!1})},getLocation:function(){var e=this;this.data&&this.data.longitude&&this.data.latitude?this.initOfflineStore():o.default.getLocation({type:"gcj02",success:function(t){var r=t.longitude,o=void 0===r?"":r,s=t.latitude,i=void 0===s?"":s;e.setData({longitude:o,latitude:i},function(){e.initOfflineStore()})},fail:function(t){e.initOfflineStore()}})},getStoreInfo:function(){var e=this.data,r=e.skuId,o=e.venderId,s=e.spAttr,i=void 0===s?{}:s,n=e.skumark,d=void 0===n?0:n,a=e.longitude,u=e.latitude;return o&&i&&a?(0,t.commonRequest)({api:"storeInfo",param:{venid:o,tssp:i.tssp||"",fdms:i.fdms||"",longitude:a,latitude:u,skumark:d}}).then(function(e){if(0==e.errcode&&e.result){if(0==e.errcode&&e.result){var t=e.result,s=t.strName,n=t.strFullAddress,f=t.ddDistance;return{storeName:s,storeAddress:n,storeDistance:void 0===f?0:f,moreUrl:"https://md-mobile.jd.com/storefromwxmobileqq/storeinfolistview?skuId="+r+"&venderId="+o+"&lng="+a+"&lat="+u+"&firstAddress=&secondAddress=&thirdAddress=&tssp="+(i.tssp||"")+"&fdms="+(i.fdms||"")+"&skumark="+d}}return Promise.reject()}return Promise.reject()}).catch(function(){return Promise.reject()}):Promise.reject()},getBrandStoreInfo:function(){var e=this.data,r=e.skuId,o=e.longitude,s=e.latitude,n=e.spAttr,d=(0,i.getAddress)(),a=d.addressName,u=d.addressId,f=!(!o||!s),c={};return 1!=n.wjtyd?Promise.reject():(c=f?{skuid:r,longitude:o,latitude:s}:{skuid:r,address:a,addrcode:u},(0,t.commonRequest)({api:"brandStoreInfo",param:c}).then(function(e){if(1==e.code&&e.model){var t=e.model,i=t.storeName,n=t.storeProvince,d=t.storeProvinceCode,u=t.storeCity,c=t.storeCityCode,l=t.storeCounty,m=t.address,h=t.distance,v="https://jwm.jd.com/shop_list.html?skuId="+r;return i&&n&&u&&l&&d&&c?(v=f?v+"&lat="+s+"&lon="+o+"&provinceId="+d+"&cityId="+c:v+"&provinceId="+d+"&cityId="+c+"&addressName="+a,{storeName:i,storeAddress:""+n+u+l+m,storeDistance:h,moreUrl:v}):Promise.reject()}return Promise.reject()}).catch(function(){return Promise.reject()}))},handleOfflineStoreData:function(e,t){var o=e.storeName,i=void 0===o?"":o,n=e.storeAddress,d=void 0===n?"":n,a=e.storeDistance,u=void 0===a?0:a,f=e.moreUrl,c=void 0===f?"":f,l="";if(i&&d&&u){if(u>1e3){var m=(1*u/1e3).toFixed(1);l=(m=m>999?"999+":m)+"km"}else u>0&&(l=u+"m");s.reporter.reportExposure(r.STORE_INFO_EXP),this.setData({title:1===t?"线下体验店":"线下门店",showOfflineStore:!0,storeInfo:{name:i,address:d,distance:l},moreUrl:c})}else this.setData({showOfflineStore:!1})}}};exports.default=n; 
 			}); 
		define("pages/item/itemBase/components/offlineStore/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,showOfflineStore:!1,storeInfo:{}},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/pageComment/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store.js"),o=require("../../js/model/baseModel.js"),r=t(require("../../../../../common/fe_helper.js")),i=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../../common/wxcontext.js")),n=require("../../../../../common/timer-manage"),s=t(require("../../js/util/util.js")),a=t(require("../../../itemBase/constants/ptag-constants")),c={count:0,countStr:"-",list:[],foldList:[],foldStatus:!0,hasFoldMore:!0,curFoldPage:0,curPage:0,loading:!1,hasMore:!0,scrollTop:0,showTopBtn:!1,hasError:!1},u={props:{showFlag:{type:Boolean},isPingou:{type:Boolean},skuId:{type:String},commentRid:{type:String},initChecked:{type:Boolean},navHeight:{type:Number},noScrollTop:{type:String}},store:e.storeFn,attached:function(){var t=this,e=getCurrentPages().length;this.page=getCurrentPages()[e-1],this.pageReachBottomFunc||(this.pageReachBottomFunc=this.page.onReachBottom),this.page.onReachBottom=function(){if(t.pageReachBottomFunc&&t.pageReachBottomFunc(),t.showFlag){var e=t.curIdx,o=t.entries;if(o[e].curPage>=19)return o[e].hasMore=!1,void t.setData({entries:o});o[e].curPage++,t.getData({curIdx:e})}}},watch:{showFlag:function(t){this.observeFlagChange(t)},skuId:function(t){t&&this.showFlag&&this.initData()},initChecked:function(t,e){t&&!e&&(this.checked=t)}},methods:{observeFlagChange:function(t){var e=this;t?(this.setData({isShowPopup:!0}),(0,n.createTimeout)(function(){e.setData({isShowPopupAnim:!0}),(0,n.createTimeout)(function(){e.setData({showPopupAnimEnd:!0})},500)},100),this.commentRid==this.rid&&this.skuId==this.sku||this.initData(!0)):this.setData({isShowPopupAnim:!1,showPopupAnimEnd:!1,isShowPopup:!1})},initData:function(t){var e=[{name:"全部",type:0},{name:"最新",type:9},{name:"好评",type:3},{name:"中评",type:2},{name:"差评",type:1},{name:"视频晒单",type:7},{name:"有图",type:4}];e.forEach(function(t){return Object.assign(t,c)}),this.commentRid!=this.rid&&(this.checked=!1),this.skuId!=this.sku?(this.sku?this.rid="":this.rid=this.commentRid,this.sku=this.skuId):this.rid=this.commentRid,this.entries=e,this.getData({skuId:this.skuId,rid:this.commentRid}),!t&&i.default.pageScrollTo({scrollTop:0,duration:0})},processReviewItem:function(t){var e=Object.assign({},t);return e.postTime=e.creationTime.substr(0,10),e.skuDesc=(e.productColor+" "+e.productSize).trim(),e.thumbs=e.images?e.images.map(function(t){var e=t.imgUrl.replace(/\/n\d{1,2}\//i,"/n8/");return r.getImg(e,200,400)}):[],e.videos=e.videos?e.videos.map(function(t){var e=t.mainUrl.replace(/\/n\d{1,2}\//i,"/n8/");return{imgUrl:r.getImg(e,200,400),videoUrl:t.remark}}):[],e.userImageUrl="misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg"==e.userImageUrl?"https://img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png":"https://"+e.userImageUrl,e.replyCount="0"==e.replyCount?"":e.replyCount,e},updateCount:function(t,e){return e[0].count=t.CommentCount,e[0].countStr=t.CommentCountStr,e[1].count=e[0].count,e[2].count=t.GoodCount,e[2].countStr=t.GoodCountStr,e[3].count=t.GeneralCount,e[3].countStr=t.GeneralCountStr,e[4].count=t.PoorCount,e[4].countStr=t.PoorCountStr,e[5].count=t.VideoCount,e[5].countStr=t.VideoCountStr,e[6].count=t.ShowCount,e[6].countStr=t.ShowCountStr,{entries:e,defaultNum:t.DefaultGoodCountStr,goodRate:t.GoodRateShow}},getFoldComment:function(t,e){var r=this,i=this.sku,n=this.checked;(0,o.getFoldCommentList)(t.type,t.curFoldPage,i,n).then(function(o){if(o&&o.comments){var i=o.comments.map(function(t){return r.processReviewItem(t)});s.reporter.reportExposure(a.EXP_DETAIL_FOLD_COMMENT),t.foldList=t.foldList.concat(i),t.hasFoldMore=t.curFoldPage<o.maxPage,t.loading=!1,t.curFoldPage++;var n=r.entries;n[e]=t,r.entries=n}}).catch(function(t){console.error("err foldComment",t)})},getData:function(t){var e=this,r=this.sku||t.skuId,i=t.rid,n=t.curIdx||0,s=t.checkedChanged,a=this.checked,u=this.entries;s&&u.forEach(function(t){t.loading=!1,t.hasMore=!0,t.hasFoldMore=!0,t.list=[],t.curPage=0});var h=Object.assign({},u[n]),d=i||h.rid;h.loading||!h.hasMore&&!h.hasFoldMore||h.hasMore&&(h.loading=!0,h.hasError=!1,this.entries=u,(0,o.getCommentList)(h.type,h.curPage,r,d,a).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.productCommentSummary,r=t.hotCommentTagStatistics.map(function(t){return Object.assign({},c,{count:t.count,countStr:t.count,name:t.name,rid:t.rid})}),l=e.updateCount(o,u),m=l.entries.slice(0,7).concat(r);if(i){var g=m.findIndex(function(t){return t.rid==i});h=Object.assign({},m[g])}var p=t.comments.map(function(t){return e.processReviewItem(t)});i||(h.count=m[n].count,h.countStr=m[n].countStr),h.list=s?p:h.list.concat(p),h.hasMore=h.list.length<h.count&&0!==p.length,(h.count<10&&h.list.length<h.count||p.length<10||h.curPage+1>=t.maxPage)&&(h.hasMore=!1),h.loading=!1;var f=n;i?m[f=m.findIndex(function(t){return t.rid==i})]=h:m[n]=h,h.hasMore||d||e.getFoldComment(h,f),e.isInit=!1,e.curIdx=f,e.entries=m,e.defaultNum=l.defaultNum,e.goodRate=l.goodRate,e.totalStr=o.CommentCountStr,e.$nextTick().then(function(){e.setShowAll(a)})}).catch(function(t){if(h.hasMore=!t&&h.list.length<h.count,h.loading=!1,h.curPage++,h.hasMore||e.getFoldComment(h,n),!h.list.length)return u[n].hasError=!0,u[n].loading=!1,void(e.entries=u);u[n]=h,e.entries=u}))},setShowAll:function(t){var e=this;this.showAllTabs&&!t||(this.toggleTabs=!1,this.setData({toggleTabs:!1}),(0,n.createTimeout)(function(){var t=e.createSelectorQuery();t&&t.select("#tabs").boundingClientRect(function(t){t&&t.height>130?(e.showAllTabs=!0,e.toggleTabs=!0):(e.showAllTabs=!1,e.toggleTabs=!1)}).exec()},10))},switchTab:function(t){var e=t.currentTarget.dataset,o=e.index,r=e.rid,i=void 0===r?"":r,n=this.entries[o];switch(o){case 0:s.reporter.reportClick(a.REVIEW_TAB_ALL);break;case 1:s.reporter.reportClick(a.REVIEW_TAB_NEW);break;case 2:s.reporter.reportClick(a.REVIEW_TAB_GOOD);break;case 3:s.reporter.reportClick(a.REVIEW_TAB_MIDDLE);break;case 4:s.reporter.reportClick(a.REVIEW_TAB_BAD);break;case 5:s.reporter.reportClick(a.REVIEW_TAB_VEDIO);break;case 6:s.reporter.reportClick(a.REVIEW_TAB_EXP);break;default:s.reporter.reportClick(a.REVIEW_TAB_TAG)}o!=this.curIdx&&(this.curIdx=o,this.rid=i,n.list.length||this.getData({curIdx:o}))},foldHideComment:function(t){s.reporter.reportClick(a.DETAIL_FOLD_COMMENT);var e=t.currentTarget.dataset.index,o=this.entries;o[e].foldStatus=!o[e].foldStatus,this.entries=o},handleShowTabs:function(){this.toggleTabs=!this.toggleTabs},handleCheck:function(){var t=this;this.checked=!this.checked,this.curIdx=0,this.rid="",this.$nextTick().then(function(){var e=t.curIdx;t.getData({curIdx:e,checkedChanged:!0})})},handleBack:function(){this.showVideo=!1,this.videoUrl=""},previewVideo:function(t){var e=t.detail.url;this.showVideo=!0,this.videoUrl=e},showVideoToast:function(){var t=this;this.videoToastShow=!0,(0,n.stopTimeout)(this.videoTimeoutId),this.videoTimeoutId=(0,n.createTimeout)(function(){t.videoToastShow=!1},2e3)}}};exports.default=u; 
 			}); 
		define("pages/item/itemBase/components/pageComment/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var o=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:o.ENV.isPingouXcx,isShowPopup:!1,isShowPopupAnim:!1,showPopupAnimEnd:!1,isInit:!0,entries:[],defaultNum:"",curIdx:0,showVideo:!1,videoUrl:"",showAllTabs:!1,toggleTabs:!1,goodRate:"100",totalStr:"",rid:"",sku:"",checked:!1,videoToastShow:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/pgRecommendTuan/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store"),e=require("../../js/util/util.js"),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(require("../../constants/ptag-constants")),r=require("../../../../../common/timer-manage"),n={props:{pingouInfo:{type:Object},fxPrice:{type:String},showPincount:{type:Boolean},launchAppParameter:{type:String}},store:t.storeFn,data:{timer:""},attached:function(){this.page=getCurrentPages().pop()},watch:{pingouInfo:{handler:function(t){this.init(t)},deep:!0}},detached:function(){this.data.timer&&(0,r.stopTimeout)(this.data.timer)},methods:{init:function(t){var n=this,o=t.tuanInfoList,a=void 0===o?[]:o,u=t.recm_tuan_info,s=void 0===u?{}:u,p=t.active_info,c=void 0===p?{}:p,f=t.isTuanOfFriend;if(this.startTime=(new Date).getTime(),this.tuanInfoList=(0,e.deepExtend)(a||[]),this.actParticipantNum=s.pingou_member_count||"0",this.tuanNemberCount=c.tuan_member_count||"",this.tuanInfoList.length){e.reporter.reportExposure(i.EXP_TUAN_RECOMMEND),f&&e.reporter.reportExposure(i.EXP_FRIEND_TUAN_RECOMMEND),t.isAppZxCanLaunch&&e.reporter.reportExposure(i.EXP_JXAPPZX_JOINTUAN),this.setTimer();var h=0,m=this.tuanInfoList.length,l=m<=4?1:2,_=(0,r.createInterval)(function(){if(m<=2)return(0,r.stopInterval)(_),void(n.slideIdx=0);h+=l,n.slideIdx=h%m},3e3,this.page)}},setTimer:function(){var t=this;this.data.timer&&(0,r.stopTimeout)(this.data.timer),this.data.timer=(0,r.createTimeout)(function(){t.nowTime=(new Date).getTime();var i=t.nowTime-t.startTime;t.tuanInfoList.forEach(function(t,r){t.current_tuan_time_left>0&&(t.current_tuan_time_left=t.tuan_time_left-i,t.formatTime=(0,e.getTimeDetail)(t.current_tuan_time_left,!0))}),t.setTimer()},1e3,this.page)},gotoPingouDetail:function(t){var r=this.pingouInfo,n=r.isAppZxCanLaunch;if(r.isAppZxCanLaunchToJxapp||!n){var o=this.pingouInfo.isTuanOfFriend;this.triggerEvent("gotoPingouDetail",t),o&&e.reporter.reportClick(i.CLICK_FRIEND_TUAN_RECOMMEND)}else this.launchAppError()},launchApp:function(){e.reporter.reportClick(i.CLICK_JXAPPZX_JOINTUAN)},launchAppError:function(){this.triggerEvent("handleKlDownload")}}};exports.default=n; 
 			}); 
		define("pages/item/itemBase/components/pgRecommendTuan/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var t=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:t.ENV.isPingouXcx,tuanInfoList:[],actParticipantNum:"0",tuanNemberCount:"",slideIdx:0},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/popupLayer/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store"),e=require("../../js/util/util.js"),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(require("../../constants/ptag-constants")),r={props:{popupLayerObj:Object,skuId:String,extraContent:Array,isPingou:Boolean,commonVideo:Object},store:t.storeFn,data:{fristPlay:!0},watch:{popupLayerObj:{handler:function(t){t&&t.name&&this.observeFlagChange(t.show)},immediate:!0}},methods:{onConfirm:function(){this.triggerEvent("onConfirm")},onCancel:function(){this.triggerEvent("onCancel")},observeFlagChange:function(t){var e=this;t?(this.setData({isShowPopup:!0}),setTimeout(function(){e.setData({isShowPopupAnim:!0})},100)):(this.setData({isShowPopupAnim:!1}),setTimeout(function(){e.setData({isShowPopup:!1})},100))},navigateTo:function(t){var r=this.skuId,i=t.currentTarget.dataset,n=i.icon,s=i.tourl,a=i.flag,u=i.videourl;u?this.playIndustryVideo(u):s?(this.triggerEvent("onCancel"),"isIndustry"==a&&e.reporter.reportClick(o.CLICK_INDUSTRY_LAYER),(0,e.gotoUrl)(this,{url:s})):"service_shangjiazx"===n&&r&&(this.triggerEvent("onCancel"),(0,e.gotoUrl)(this,{url:"https://baozhang.jd.com/baoxian/qrxDesc?isPhone=0&skuId="+r}))},playIndustryVideo:function(t){t&&(!("wifi"==(getApp()||{}).networkType)&&this.fristPlay&&(this.fristPlay=!1,this.triggerEvent("showVideoToast")),this.triggerEvent("playCommonVideo",{videoUrl:t}),e.reporter.reportClick(o.CLICK_FACTORY_LAYER_WITH_VIDEO))}}};exports.default=r; 
 			}); 
		define("pages/item/itemBase/components/popupLayer/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,isShowPopup:!1,isShowPopupAnim:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/purchaseTip/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store"),e=require("../../js/util/util.js"),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(require("../../constants/ptag-constants")),r={props:{attr:Object,processStatus:Object,state:Number,content:String,canNotBuyHere:Boolean,special:Boolean,isCardMember:Boolean,offline:Boolean,hasBigouCode:Boolean,isJma:Boolean,isNoPlus:Boolean,isTrialPlus:Boolean,plusOpenTips:Object,isSubscribeCar:Boolean,locAddCartDirect:Boolean,isPingou:Boolean,tjTuanInfo:Object,tjTuanShow:Boolean,isTuanOfFriend:Boolean,pgCannotBuy:Boolean,pgCannotBuyMsg:String,pgSpecBottomMsg:String,pgNewerNoPinBottomMsg:String,pgNewerNoTuanBottomMsg:String,newerCouponBottomText:String,newerCouponRemainTime:Object,isAppZx:Boolean,maskSkuConfig:Object,launchAppParameter:String,yuyueState:String,showUserLogin:Boolean},store:t.storeFn,watch:{},attached:function(){var t=wx.getSystemInfoSync();this.windowWidth=t.windowWidth},methods:{gotoBindCode:function(){(0,e.gotoUrl)(this,{url:"https://wqs.jd.com/my/cdkey.shtml"})},gotoPlusPage:function(){var t=this.isNoPlus&&this.isTrialPlus?"CLICK_PLUS_TIP_SHIYONG":"CLICK_PLUS_TIP";e.reporter.reportExposure(o[t]),(0,e.gotoUrl)(this,{url:"https://plus.m.jd.com/index"})},certifiction:function(t){this.triggerEvent("certifiction",t)},gotoPingouDetail:function(t){this.triggerEvent("gotoPingouDetail",t),this.isTuanOfFriend&&e.reporter.reportClick(o.CLICK_FRIEND_TUAN_RECOMMEND)},launchApp:function(){0==this.yuyueState||1==this.yuyueState?e.reporter.reportClick(o.CLICK_MASK_YLTIP_1):-1!=this.yuyueState&&3!=this.yuyueState||e.reporter.reportClick(o.CLICK_MASK_YLTIP_3)},launchAppError:function(t){"empty"==t.currentTarget.dataset.type&&this.launchApp(),this.triggerEvent("handleKlDownload")},onNewerNoTuanTipClick:function(){e.reporter.reportClick(o.CLICK_NEWER_NOTUAN_TIP),this.triggerEvent("gotoTuan")},onNewerNoPinTipClick:function(){this.showUserLogin&&(this.triggerEvent("doLogin"),e.reporter.reportClick(o.CLICK_JXNEWER_COUPON_BANNER_LOGIN))}}};exports.default=r; 
 			}); 
		define("pages/item/itemBase/components/purchaseTip/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,windowWidth:375},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/shareLayer/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function t(t,e){var i=[],o=!0,r=!1,n=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);o=!0);}catch(t){r=!0,n=t}finally{try{!o&&a.return&&a.return()}finally{if(r)throw n}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=require("./store"),o=t(require("../../../../../libs/promise.min.js")),r=require("../../../../../common/timer-manage"),n=require("../../js/util/util.js"),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(require("../../constants/ptag-constants")),a=t(require("../../../../../common/wxcontext.js")),h=require("../../../../../common/canvas"),c=require("../../../../../common/utils"),u=require("../../../../../common/request/request"),l=require("../../../../../common/fe_helper.js"),p=t(require("../../constants/ump-config")),d=require("../../js/model/baseModel"),f=getApp().systemInfo.SDKVersion,m=(0,c.compareVersion)(f,"2.0.7")>=0,g=!1,w={props:{shareOptions:{type:Object},showPopupFlag:{type:Boolean,value:!1},isJx:{type:Boolean,value:!1},hideSharePannel:{type:Boolean,value:!1},triggerShowShareDetail:Number},store:i.storeFn,watch:{showPopupFlag:function(){this.observeFlagChange(this.showPopupFlag)},triggerShowShareDetail:function(){this.showShareDetail()},shareOptions:{handler:function(t,e){this.updateLayerStatus(t,e)},deep:!0}},ready:function(){a.default.openBusinessView&&(this.canUseRecommendBtn=!0),a.default.getSetting({success:function(t){t&&t.authSetting&&t.authSetting["scope.writePhotosAlbum"]&&this.setData({hasAlbumnAuth:!0})}.bind(this)}),this.doGoodsRecommend=(0,n.throttle)(this.doGoodsRecommend,1500)},methods:{noscroll:function(){},updateLayerStatus:function(t,e){t&&t.sku&&(JSON.stringify(t)!==JSON.stringify(e)&&(this.needReRender=!0),parseInt(t.price)||(this.canUseRecommendBtn=!1))},observeFlagChange:function(t){var e=this;t?(this.setData({isShowPopup:!0}),this.hadImportData||(this.hadImportData=!0,this.doImportProduct()),(0,r.createTimeout)(function(){e.setData({isShowPopupAnim:!0})},100)):(this.setData({isShowPopupAnim:!1,showShareDetailFlag:!1}),(0,r.createTimeout)(function(){e.setData({isShowPopup:!1})},500))},closePopup:function(t){var e=(t&&t.currentTarget&&t.currentTarget.dataset||{}).close;n.reporter.reportClick(s.DETAIL_SHARE_LAYER_CLOSE),n.ENV.isPingouXcx&&e&&n.reporter.reportClick(s.CLICK_JX_SHARE_PANNEL_CLOSE_BTN),this.triggerEvent("closeShareLayer"),this.closeShareDetail()},doGoodsRecommend:function(){var t=this,e=this.shareOptions||{};if(n.reporter.reportClick(s.GOODS_RECOMMEND_CLICK),n.ENV.isPingouXcx&&n.reporter.reportClick(s.CLICK_JX_SHARE_PANNEL_HWQ_BTN),a.default.openBusinessView){var i=e.cover.map(function(t){return(0,l.getImg)(t,800,800)});a.default.openBusinessView({businessType:"friendGoodsRecommend",extraData:{product:{item_code:(""+e.sku).trim(),title:e.name,image_list:i}},success:function(t){n.reporter.reportClick(s.SUCCESS_GOODS_RECOMMEND)},fail:function(t){console.log("[商详好物推荐接口失败]",t)},complete:function(){t.closePopup()}})}},doImportProduct:function(){var t=this.shareOptions||{},i=t.cover.map(function(t){return(0,l.getImg)(t,800,800)}),r=[this.getCateName(t.category&&t.category[2]),this.getFeedListBySKU(t.sku)];o.default.all(r).then(function(o){var r=e(o,2),n=r[0],s=r[1],a={url:"https://wq.jd.com/bases/wxapi/wximportitem?apptype=1",method:"POST",header:{"Content-Type":"application/json"},data:{product_list:[{item_code:(""+t.sku).trim(),title:t.name,category_list:n.length?n:t.category||[],image_list:i,src_wxapp_path:("pages/item/detail/detail?sku="+t.sku+"&ptag=138612.1.1").trim(),sku_list:[{sku_id:(""+t.sku).trim(),price:100*parseInt(t.price),status:1}],article_info:{article_lst:s||[]}}]},channel:"http-direct"};return p.default.importProduct&&(a.ump={bizId:p.default.BIZ_ID_WQVUE,opId:p.default.importProduct}),(0,u.request)(a).then(function(t){var e=t.body;e&&0!=e.errcode&&console.log("[商详好物推荐异常]",e)}).catch(function(t){console.log("[商详好物推荐异常]",t)})})},getCateName:function(t){return(0,d.commonRequest)({api:"cateCnName",param:{cat3rd:t,source:"item"}}).then(function(t){return 0==t.errcode?t.result||[]:[]}).catch(function(){return[]})},getFeedListBySKU:function(t){return(0,d.commonRequest)({api:"feedList",param:{skuids:t,datatype:1,pageno:1,pagesize:10,source:"sxhaowuquan"}}).then(function(t){if(0==t.iRet){var e=[];return(t.feed_list||[]).forEach(function(t){if(t.sharepicurl&&t.commentcontent&&t.shareid){var i=t.sharepicurl.split(",");e.push({title:t.commentcontent,src_wxapp_path:"pages/h5/index?encode_url="+encodeURIComponent("https://wqs.jd.com/xcxgwq/detail.html?shareid="+t.shareid),cover_image_url:(0,l.getImg)(i[0])})}}),e}return[]}).catch(function(){return[]})},showShareDetail:function(t){n.reporter.reportClick(s.DETAIL_SHARE_TO_TIMELINE),g=!t,n.ENV.isPingouXcx&&!g&&n.reporter.reportClick(s.CLICK_JX_SHARE_PANNEL_HB_BTN),this.setData({showShareDetailFlag:!0}),!this.needReRender&&this.previewImgUrl||this.initPreviewImage()},closeShareDetail:function(){this.data.showShareDetailFlag&&n.reporter.reportClick(s.DETAIL_SHARE_DETAIL_LAYER_CLOSE),this.triggerEvent("closeShareLayer")},initPreviewImage:function(){var t=this;this.ctx=a.default.createCanvasContext("preview-canvas",this);var i=this.shareOptions.coupons,r=void 0===i?[]:i,h=this.shareOptions.flags,c=void 0===h?[]:h;c=c.map(function(t){return Object.assign({},t,{width:1*t.width,height:1*t.height})});var u=this.shareOptions,l=u.sku,p=u.cover,d=/\/\/(\w+).360buyimg/;(p="http://img11.360buyimg.com/n1/s750x750_"+p[0]).replace(d,function(t,e,i,o){return p=o.replace(e,"img10").replace(/^(https?:)?\/\//i,"https://"),o.replace(e,"img10")}),l&&(l=(""+l).trim()),a.default.showLoading({title:"图片生成中...",mask:!0}),r.length&&this.formatCoupons(r);var f=[this.loadWXACode(l),this.loadImageByUrl("https://img10.360buyimg.com/jdphoto/s750x1334_jfs/t1/29837/24/4770/83558/5c342fbaE60f33a5d/9839f6342bef4e3b.jpg"),this.loadImageByUrl(p),this.loadImageByUrl("https://img10.360buyimg.com/jdphoto/s26x26_jfs/t18565/303/2499380355/407/3ae7cd7f/5af8f737Nb8b5c33f.png"),this.loadImageByUrl("https://img10.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png")];if(c&&c.length){var m=c[0].url;m.replace(d,function(t,e,i,o){return m=o.replace(e,"img10").replace(/^(https?:)?\/\//i,"https://"),o.replace(e,"img10")}),f.push(this.loadImageByUrl(m))}o.default.all(f).then(function(i){var o=e(i,6),r=o[0],h=o[1],c=o[2],u=o[3],l=o[4],p=o[5];r&&h&&c&&u&&l?(t.firstFlagUrl=p||"",t.iconCheckUrl=u,t.iconPlusUrl=l,t.renderPreviewImage(h,r,c,p,function(){a.default.hideLoading(),n.reporter.reportClick(s.DETAIL_SHARE_PIC_SUCCESS)})):(a.default.hideLoading(),a.default.showToast({title:"图片生成失败",icon:"none"}),t.closePopup(),n.reporter.reportClick(s.DETAIL_SHARE_PIC_FAIL))})},loadImageByUrl:function(t){return new o.default(function(e,i){a.default.downloadFile({url:t,success:function(t){e(200===t.statusCode?t.tempFilePath:"")},fail:function(t){e("")}})})},loadWXACode:function(t){var e="https://wq.jd.com/bases/wxapi/getwxacode?scene="+encodeURIComponent("sku="+t+(g?"":"&from=wm"))+"&page=pages/item/detail/detail&width=280";return new o.default(function(t,i){a.default.downloadFile({url:e,success:function(e){t(200===e.statusCode?e.tempFilePath:"")},fail:function(e){t("")}})})},renderPreviewImage:function(t,e,i,o,r){var n=this.shareOptions,s=n.name,a=n.price,c=this.shareOptions.flags;c=c.map(function(t){return Object.assign({},t,{width:1*t.width,height:1*t.height})});var u=0;(0,h.drawImage)(this.ctx,{url:t,top:0,left:0,width:750,height:1334}),c&&c.length&&(u=this.renderSKUFlags(c,30),u+=10),this.renderSKUName(s,30,u,690),this.renderPrice(a),this.renderPromiseItems(),(0,h.drawImage)(this.ctx,{url:i,left:0,top:298,width:750,height:750}),(0,h.drawImage)(this.ctx,{url:e,left:110,top:1068,width:246,height:246}),this.ctx.draw(!1,function(){this.printCanvas(r)}.bind(this))},printCanvas:function(t){a.default.canvasToTempFilePath({canvasId:"preview-canvas",complete:function(e){t&&t(),this.needReRender=!1,this.previewImgUrl=e.tempFilePath}.bind(this)},this)},doPreviewImage:function(){var t=this.previewImgUrl;t&&a.default.previewImage({urls:[t]})},doSaveImage:function(){var t=this.previewImgUrl;t&&(!g&&n.reporter.reportClick(s.DETAIL_SHARE_BTN_SAVE),a.default.saveImageToPhotosAlbum({filePath:t,success:function(){a.default.showToast({title:"已保存到相册，可以去发图啦~",icon:"none"}),this.closePopup(),!g&&n.reporter.reportClick(s.DEATIL_SHARE_SAVE_SUCCESS)}.bind(this),fail:function(){var t=this;if((this.isFirstTimeSave||this.hasAlbumnAuth)&&(a.default.showToast({title:"图片保存失败",icon:"none"}),this.isFirstTimeSave=!1),!this.hasAlbumnAuth)if(m)this.setData({isNeedOpenSetting:!0});else{if(this.isFirstTimeSave)return;a.default.openSetting({success:function(e){var i=e.authSetting;i&&i["scope.writePhotosAlbum"]?t.hasAlbumnAuth=!0:a.default.showToast({title:"请点击保存图片并开启保存到相册权限",icon:"none",duration:3e3})},fail:function(){a.default.showToast({title:"图片保存失败",icon:"none"})}})}}.bind(this)}))},handleOpenSetting:function(t){var e=t.detail.authSetting;e&&e["scope.writePhotosAlbum"]?this.setData({isNeedOpenSetting:!1,hasAlbumnAuth:!0}):(a.default.showToast({title:"请点击保存图片并开启保存到相册权限",icon:"none",duration:3e3}),this.setData({isNeedOpenSetting:!0,hasAlbumnAuth:!1}))},renderSKUFlags:function(t,e){return(0,h.drawImage)(this.ctx,{url:this.firstFlagUrl,top:92,left:e,width:t[0].width,height:t[0].height}),t[0].width},renderSKUName:function(t,e,i,o){(0,h.drawText)(this.ctx,{content:t,width:o,top:118,left:e,textIndent:i,fontSize:32,lineHeight:42,maxLineNum:2})},renderPrice:function(t){var e=t[1]||{},i=30,o=[];o=Number.isNaN(parseFloat(t[0]))?[t[0]]:t[0]<0?["暂无定价"]:Number(t[0]).toFixed(2).split("."),i+=(0,h.drawText)(this.ctx,{content:"¥",top:220,left:i,color:"#E93B3D",fontSize:32,lineHeight:66,noBreakWord:!0})+4,i+=(0,h.drawText)(this.ctx,{content:o[0],left:i,top:220,color:"#E93B3D",fontSize:44,fontWeight:"bold",lineHeight:66,noBreakWord:!0}),o[1]&&(i+=(0,h.drawText)(this.ctx,{content:"."+o[1],left:i,top:220,color:"#E93B3D",fontSize:32,fontWeight:"bold",lineHeight:66,noBreakWord:!0}),i+=10),"plus"===e.type&&(i+=(0,h.drawText)(this.ctx,{content:"¥"+e.price,left:i,top:220,color:"#333333",fontSize:32,lineHeight:66,noBreakWord:!0}),i+=12,(0,h.drawImage)(this.ctx,{url:this.iconPlusUrl,left:i,top:195,width:58,height:28}),i+=70),this.hasCoupons&&this.renderCouponTag(this.skuCouponText,194,i)},renderPromiseItems:function(){var t=0,e=[];if(this.shareOptions.service.forEach(function(t){t.iconState&&e.push(t.title)}),(e=e.slice(0,3)).length)for(var i=0;i<e.length;i++){this.ctx.save(),this.ctx.beginPath(),this.ctx.setFillStyle("#999999"),this.ctx.setFontSize(20),this.ctx.setTextAlign("left"),this.ctx.setTextBaseline("top");var o=t+24,r=o+10+26,n=r+this.ctx.measureText(e[i]).width;this.ctx.restore(),n<=720&&((0,h.drawImage)(this.ctx,{url:this.iconCheckUrl,left:o,top:253,width:26,height:26}),(0,h.drawText)(this.ctx,{content:e[i],left:r,top:255,color:"#999999",fontSize:20,lineHeight:30,noBreakWord:!0,baseline:"top"}),t=n)}},renderCouponTag:function(t,e,i){this.ctx.save(),this.ctx.beginPath(),this.ctx.setFillStyle("#E93B3D"),this.ctx.setFontSize(20),this.ctx.setTextAlign("left"),this.ctx.setTextBaseline("top");var o=this.ctx.measureText(t).width;this.ctx.restore(),(0,h.drawRoundRect)(this.ctx,{top:e,left:i,width:o+10,height:26,radius:4,color:"#E93B3D"}),(0,h.drawText)(this.ctx,{content:t,top:e+21,left:i+(o+10)/2,color:"#E93B3D",fontSize:20,lineHeight:20,textAlign:"center"})},formatCoupons:function(t){var e=t[0],i="";"3"==e.style?i=e.descDiscount1||"":e.limit>0&&"bg_yun"!=e.type?i="满"+e.limit+"减"+e.money:0!=e.limit&&"bg_yun"!=e.type||(i=e.money+"元"+e.typeName),this.skuCouponText=i,this.hasCoupons=!!this.skuCouponText}}};exports.default=w; 
 			}); 
		define("pages/item/itemBase/components/shareLayer/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{isShowPopup:!1,isShowPopupAnim:!1,previewImgUrl:"",isFirstTimeSave:!0,hasAlbumnAuth:!1,canUseRecommendBtn:!1,isNeedOpenSetting:!1,showShareDetailFlag:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/shareLayerPg/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){var i=[],a=!0,n=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw o}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=require("./store"),a=e(require("../../../../../libs/promise.min.js")),n=require("../../js/util/util.js"),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(require("../../constants/ptag-constants")),r=e(require("../../../../../common/wxcontext.js")),s=require("../../../../../common/canvas"),l=require("../../../../../common/utils"),c=require("../../../../../common/request/request"),u=require("../../../../../common/fe_helper.js"),h=require("../../../../../common/timer-manage"),d=e(require("../../constants/ump-config")),p=require("../../js/model/baseModel"),f=getApp().systemInfo.SDKVersion,m=(0,l.compareVersion)(f,"1.9.90")>=0,g=(0,l.compareVersion)(f,"2.0.7")>=0,x="https://img10.360buyimg.com/jdphoto/s26x26_jfs/t18565/303/2499380355/407/3ae7cd7f/5af8f737Nb8b5c33f.png",w="https://img10.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png",y=!1,v={props:{shareOptions:{type:Object},showPopupFlag:{type:Boolean,value:!1},isJx:{type:Boolean,value:!1},hideSharePannel:{type:Boolean,value:!1},triggerShowShareDetail:Number},store:i.storeFn,watch:{showPopupFlag:function(){this.observeFlagChange(this.showPopupFlag)},triggerShowShareDetail:function(){this.showShareDetail()},shareOptions:{handler:function(e,t){this.updateLayerStatus(e,t)},deep:!0}},ready:function(){r.default.openBusinessView&&(this.canUseRecommendBtn=!0),r.default.getSetting({success:function(e){e&&e.authSetting&&e.authSetting["scope.writePhotosAlbum"]&&this.setData({hasAlbumnAuth:!0})}.bind(this)}),this.iconPlusUrl=w,this.iconCheckUrl=x,this.isPingouApp=n.ENV.isPingouXcx,this.doGoodsRecommend=(0,n.throttle)(this.doGoodsRecommend,1500)},methods:{noscroll:function(){},updateLayerStatus:function(e,t){e&&e.sku&&(JSON.stringify(e)!==JSON.stringify(t)&&(this.needReRender=!0),parseInt(e.price)||(this.canUseRecommendBtn=!1))},observeFlagChange:function(e){var t=this;e?(this.setData({isShowPopup:!0}),this.hadImportData||(this.hadImportData=!0,this.doImportProduct()),(0,h.createTimeout)(function(){t.setData({isShowPopupAnim:!0})},100)):(this.setData({isShowPopupAnim:!1,showShareDetailFlag:!1}),(0,h.createTimeout)(function(){t.setData({isShowPopup:!1})},500))},closePopup:function(e){var t=(e&&e.currentTarget&&e.currentTarget.dataset||{}).close;n.ENV.isPingouXcx&&t&&n.reporter.reportClick(o.CLICK_JX_SHARE_PANNEL_CLOSE_BTN),this.closeShareDetail(),this.triggerEvent("closeShareLayer")},doGoodsRecommend:function(){var e=this,t=this.shareOptions;if(n.reporter.reportClick(o.GOODS_RECOMMEND_PG_CLICK),n.ENV.isPingouXcx&&n.reporter.reportClick(o.CLICK_JX_SHARE_PANNEL_HWQ_BTN),r.default.openBusinessView){var i=t.cover.map(function(e){return(0,u.getImg)(e,800,800)});r.default.openBusinessView({businessType:"friendGoodsRecommend",extraData:{product:{item_code:(""+t.sku).trim(),title:t.name,image_list:i}},success:function(e){n.reporter.reportClick(o.SUCCESS_GOODS_RECOMMEND_PG)},fail:function(e){console.log("[商详好物推荐接口失败]",e)},complete:function(){e.closePopup()}})}},doImportProduct:function(){var e=this.shareOptions||{},i=this.isPingouApp?2:1,n=e.cover.map(function(e){return(0,u.getImg)(e,800,800)}),o=[this.getCateName(e.category&&e.category[2]),this.getFeedListBySKU(e.sku)];a.default.all(o).then(function(a){var o=t(a,2),r=o[0],s=o[1],l={url:"https://wq.jd.com/bases/wxapi/wximportitem?apptype="+i,method:"POST",header:{"Content-Type":"application/json"},data:{product_list:[{item_code:(""+e.sku).trim(),title:e.name,category_list:r.length?r:e.category||[],image_list:n,src_wxapp_path:("pages/item/detail/detail?sku="+e.sku+"&ptag=138612.1.2").trim(),sku_list:[{sku_id:(""+e.sku).trim(),price:100*parseInt(e.price),status:1}],article_info:{article_lst:s||[]}}]},channel:"http-direct"};return d.default.importProduct&&(l.ump={bizId:d.default.BIZ_ID_WQVUE,opId:d.default.importProduct}),(0,c.request)(l).then(function(e){var t=e.body;t&&0!=t.errcode&&console.log("[商详好物推荐异常]",t)}).catch(function(e){console.log("[商详好物推荐异常]",e)})})},getCateName:function(e){return(0,p.commonRequest)({api:"cateCnName",param:{cat3rd:e,source:"item"}}).then(function(e){return 0==e.errcode?e.result||[]:[]}).catch(function(){return[]})},getFeedListBySKU:function(e){return(0,p.commonRequest)({api:"feedList",param:{skuids:e,datatype:1,pageno:1,pagesize:10,source:"sxhaowuquan"}}).then(function(e){if(0==e.iRet){var t=[];return(e.feed_list||[]).forEach(function(e){if(e.sharepicurl&&e.commentcontent&&e.shareid){var i=e.sharepicurl.split(",");t.push({title:e.commentcontent,src_wxapp_path:"pages/h5/index?encode_url="+encodeURIComponent("https://wqs.jd.com/xcxgwq/detail.html?shareid="+e.shareid),cover_image_url:(0,u.getImg)(i[0])})}}),t}return[]}).catch(function(){return[]})},showShareDetail:function(e){n.reporter.reportClick("7583.1.8"),y=!e,n.ENV.isPingouXcx&&!y&&n.reporter.reportClick(o.CLICK_JX_SHARE_PANNEL_HB_BTN),this.setData({showShareDetailFlag:!0}),!this.needReRender&&this.previewImgUrl||this.initPreviewImage()},closeShareDetail:function(){this.triggerEvent("closeShareLayer")},initPreviewImage:function(){var e=this;this.ctx=r.default.createCanvasContext("preview-canvas",this);var i=this.shareOptions,s=i.sku,l=i.cover,c=/\/\/(\w+).360buyimg/;(l="http://img11.360buyimg.com/n1/s750x750_"+l[0]).replace(c,function(e,t,i,a){return l=a.replace(t,"img10").replace(/^(https?:)?\/\//i,"https://"),a.replace(t,"img10")}),s&&(s=(""+s).trim()),wx.showLoading({title:"图片生成中...",mask:!0});var u=this.isPingouApp?"https://img11.360buyimg.com/jdphoto/s750x1334_jfs/t1/74235/5/9752/13824/5d760602E0e4a6305/590f953157ae8b72.png":"https://img11.360buyimg.com/jdphoto/s750x1334_jfs/t19843/342/1156962245/13448/cc3ab0af/5b1633a6Nd77c1082.png",h=r.default.JD.cookie.get("wxAvatarUrl");h=h||r.default.JD.cookie.get("avatarUrl")||"https://img10.360buyimg.com/jdphoto/s100x100_jfs/t1951/176/1222496278/15607/bbb3b2eb/568cdbf0N4d33c2a4.png";var d=[this.loadWXACode(s),this.loadImageByUrl(u.replace("//img11","//img10")),this.loadImageByUrl(l),this.loadImageByUrl(x),this.loadImageByUrl(w),this.loadImageByUrl(h.replace("//img11","//img10"))];a.default.all(d).then(function(i){var a=t(i,6),r=a[0],s=a[1],l=a[2],c=a[3],u=a[4],h=a[5];r&&s&&l&&c&&u&&h?(e.setData({iconCheckUrl:c,iconPlusUrl:u}),e.renderPreviewImage(s,r,l,h,function(){wx.hideLoading(),n.reporter.reportClick(o.DETAIL_SHARE_PIC_SUCCESS)})):(wx.hideLoading(),wx.showToast({title:"图片生成失败",icon:"none"}),e.closePopup(),n.reporter.reportClick(o.DETAIL_SHARE_PIC_FAIL))})},loadImageByUrl:function(e){return new a.default(function(t,i){r.default.downloadFile({url:e,success:function(e){t(200===e.statusCode?e.tempFilePath:"")},fail:function(e){t("")}})})},loadWXACode:function(e){var t="https://wq.jd.com/bases/wxapi/getwxacode?scene="+encodeURIComponent("sku="+e+"&share=1"+(y?"":"&from=wm"))+"&page=pages/item/detail/detail&width=280&apptype="+(this.isPingouApp?2:1);return new a.default(function(e,i){wx.downloadFile({url:t,success:function(t){e(200===t.statusCode?t.tempFilePath:"")},fail:function(t){e("")}})})},renderPreviewImage:function(e,t,i,a,n){var o=this.ctx,s=this.shareOptions,l=s.name,c=s.price,u=s.kaiTuanNum,h=s.tuanMember,d=s.service,p=s.fxPrice,f=d.map(function(e){return e.title});if(f.length&&f.length>3){var m=[],g=[];f.forEach(function(e){e.includes("工厂直供")||e.includes("七天退货")||e.includes("99元免基础运费")||e.includes("发货&")?g.push(e):m.push(e)}),g.length<3&&(g=g.concat(m.slice(0,3-g.length))),f=g}var x={headImg:a,productImg:i,title:l&&l.substring(0,21)+"…",priceInt:c[0]||"暂无定价",tuanNum:1*u,tuanMember:h,fxPrice:p,serviceInfo:f,nickName:r.default.JD.cookie.get("wxNickName")||r.default.JD.cookie.get("nickName")||"京东用户"};o.drawImage(e,0,0,375,667),this.drawDialogBox(),this.drawHeadImg(this.Point(30,30),15,x.headImg),this.drawNick(x.nickName,55,35),this.drawComment("发现一个好物，推荐给你呀",15,70),this.drawProductInfo(this.Point(30,105),315,315,x),this.drawServiceInfo(this.Point(35,472.5),f),this.renderWXACode(t),o.draw(!1,function(){this.printCanvas(n)}.bind(this))},printCanvas:function(e){r.default.canvasToTempFilePath({canvasId:"preview-canvas",complete:function(t){e&&e(),this.needReRender=!1,this.previewImgUrl=t.tempFilePath}.bind(this)},this)},doPreviewImage:function(){var e=this.previewImgUrl;e&&r.default.previewImage({urls:[e]})},doSaveImage:function(){var e=this.previewImgUrl;e&&(!y&&n.reporter.reportClick(o.DETAIL_SHARE_BTN_SAVE),r.default.saveImageToPhotosAlbum({filePath:e,success:function(){r.default.showToast({title:"已保存到相册，可以去发图啦~",icon:"none"}),this.closePopup(),!y&&n.reporter.reportClick(o.DEATIL_SHARE_SAVE_SUCCESS)}.bind(this),fail:function(){var e=this;if((this.isFirstTimeSave||this.hasAlbumnAuth)&&(r.default.showToast({title:"图片保存失败",icon:"none"}),this.isFirstTimeSave=!1),!this.hasAlbumnAuth)if(g)this.setData({isNeedOpenSetting:!0});else{if(this.isFirstTimeSave)return;r.default.openSetting({success:function(t){var i=t.authSetting;i&&i["scope.writePhotosAlbum"]?e.hasAlbumnAuth=!0:r.default.showToast({title:"请点击保存图片并开启保存到相册权限",icon:"none",duration:3e3})},fail:function(){r.default.showToast({title:"图片保存失败",icon:"none"})}})}}.bind(this)}))},handleOpenSetting:function(e){var t=e.detail.authSetting;t&&t["scope.writePhotosAlbum"]?this.setData({isNeedOpenSetting:!1,hasAlbumnAuth:!0}):(r.default.showToast({title:"请点击保存图片并开启保存到相册权限",icon:"none",duration:3e3}),this.setData({isNeedOpenSetting:!0,hasAlbumnAuth:!1}))},renderSKUName:function(e,t,i){var a=this.ctx,n=Math.floor(i/32),o="",r=0;if(a.setFillStyle("#333333"),a.setFontSize(32),a.setTextAlign("left"),a.setTextBaseline("middle"),m){if(a.measureText(e).width>i){for(;r<=i-64;)o=e.slice(0,n),r=a.measureText(o).width,n++;e=o+"..."}}else e=(o=e.slice(0,n-1))+"...";a.fillText(e,t,110)},renderPrice:function(e){var t=this.ctx,i=30,a=e[0],n=e[1]||{},o=e[0].split(".");t.setFillStyle("#FF4142"),t.setFontSize(32),t.setTextAlign("left"),t.setTextBaseline("normal"),t.fillText("¥",i,180,32),i+=32,m?(t.setFontSize(44),t.fillText(o[0],i,180),i+=t.measureText(o[0]).width,i+=2,o[1]&&(t.setFontSize(32),t.fillText("."+o[1],i,180),i+=t.measureText("."+o[1]).width,i+=10),"plus"===n.type&&(t.setFontSize(32),t.setFillStyle("#333333"),t.fillText("¥"+n.price,i,180),i+=t.measureText("¥"+n.price).width,i+=8,t.drawImage(this.iconPlusUrl,i,156,58,28))):(t.setFontSize(44),t.fillText(a,i,180))},renderWXACode:function(e){this.ctx.drawImage(e,45,512,110,110)},Rect:function(e,t,i,a){return{x:e,y:t,width:i,height:a}},Point:function(e,t){return{x:e,y:t}},drawHeadImg:function(e,t,i){var a=this.ctx;a.beginPath(),a.drawImage(i,e.x-t,e.y-t,2*t,2*t),a.fillStyle="transparent",a.arc(e.x,e.y,t+5,0,2*Math.PI),a.fill(),a.lineWidth=10,a.strokeStyle="white",a.stroke(),a.closePath()},drawNick:function(e,t,i){var a=this.ctx;a.beginPath(),a.font="14px Verdana",a.fillStyle="#999999",a.fillText(e,t,i)},drawComment:function(e,t,i){var a=this.ctx;a.beginPath(),a.font="16px Verdana",a.fillStyle="#333333",a.fillText(e,t,i)},drawProductInfo:function(e,t,i,a){var n=this.ctx;n.beginPath(),n.drawImage(a.productImg,e.x,e.y,t,i),n.rect(e.x,e.y+281,t,34),n.globalAlpha=.9,n.fillStyle="#F7F7F7",n.fill(),a.title&&(n.font="14px PingFangSC-Semibold",n.fillStyle="#333",n.fillText(a.title,e.x+10,e.y+304),n.closePath()),n.beginPath();var o=e.x;if(a.tuanMember){n.globalAlpha=1,n.font="16px Verdana",n.fillStyle="#FF4142";var r=a.tuanMember+"人拼";n.fillText(r,o,e.y+345),o+=n.measureText(r).width}if(a.priceInt){n.font="14px Verdana",n.fillStyle="#FF4142",o+=6.5,n.fillText("￥",o,e.y+345),o+=n.measureText("￥").width,n.font="26px Verdana",n.fillStyle="#FF4142",n.fillText(a.priceInt,o,e.y+345),o+=n.measureText(a.priceInt).width}if(a.priceFloat&&(n.font="14px Verdana",n.fillStyle="#FF4142",n.fillText(a.priceFloat,o,e.y+345),o+=n.measureText(a.priceFloat).width),a.fxPrice){var l=" "+a.fxPrice;n.font='normal 12px/12px "Helvetica Neue", Helvetica, Arial, sans-serif';var c=n.measureText(l).width,u=e.y+345-18,h=u+1.5+12,d=18+c+3;o+=5,(0,s.drawRect)(n,{top:u,left:o,width:18,height:18,radius:4,background:"#FF4142"}),(0,s.drawText)(n,{content:"返",top:h,left:o+3,color:"#fff",fontSize:12,lineHeight:12}),(0,s.drawRoundRect)(n,{top:u,left:o,width:d,height:18,radius:4,color:"#FF4142"}),(0,s.drawText)(n,{content:l,top:h,left:o+18,color:"#FF4142",fontSize:12,lineHeight:12}),o+=18+d}a.tuanNum>0&&(n.font="12px Verdana",n.fillStyle="#999999",n.fillText("已拼"+(a.tuanNum||2)+"件",e.x+230,e.y+345),n.closePath())},drawRoundedRect:function(e,t,i){var a=this.ctx,n=this.Point(e.x+t,e.y),o=this.Point(e.x+e.width,e.y),r=this.Point(e.x+e.width,e.y+e.height),s=this.Point(e.x,e.y+e.height),l=this.Point(e.x,e.y);a.beginPath(),a.moveTo(n.x,n.y),a.arcTo(o.x,o.y,r.x,r.y,t),a.arcTo(r.x,r.y,s.x,s.y,t),a.arcTo(s.x,s.y,l.x,l.y,t),a.arcTo(l.x,l.y,n.x,n.y,t),a.strokeStyle=i,a.stroke(),a.closePath()},drawDialogAngle:function(e,t){var i=this.ctx;i.beginPath(),i.moveTo(e.x,e.y),i.lineTo(e.x+5,e.y-5),i.lineTo(e.x+10,e.y),i.strokeStyle=t,i.stroke(),i.closePath(),i.beginPath(),i.moveTo(e.x+1,e.y),i.lineTo(e.x+9.5,e.y),i.lineWidth=1,i.strokeStyle="white",i.stroke(),i.closePath()},drawDialogBox:function(){var e=this.Rect(15,90,345,405);this.drawRoundedRect(e,5,"#FE976C"),this.drawDialogAngle(this.Point(30,90))},drawServiceInfo:function(e,t){var i=this.ctx;i.beginPath(),t&&t.length>4&&(t=t.slice(0,4));var a=0;if(t.length>0)for(var n=0;n<t.length;n++){i.beginPath(),i.font="10px Verdana";var o=this.ctx.measureText(t[n]).width+22.5;if(i.closePath(),e.x+a+o>360)break;i.beginPath(),i.arc(e.x+a,e.y,5,0,2*Math.PI),i.lineWidth=1,i.strokeStyle="#f97c54",i.stroke(),i.closePath(),i.beginPath(),i.moveTo(e.x+a-2.5,e.y,5,0,2*Math.PI),i.lineTo(e.x+a,e.y+2.5,5,0,2*Math.PI),i.lineTo(e.x+a+3,e.y-2,5,0,2*Math.PI),i.stroke(),i.closePath(),i.beginPath(),i.font="10px Verdana",i.fillStyle="#999999",i.fillText(t[n],e.x+a+10,e.y+4),i.closePath(),a+=o}}}};exports.default=v; 
 			}); 
		define("pages/item/itemBase/components/shareLayerPg/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{isShowPopup:!1,isShowPopupAnim:!1,product:{},previewImgUrl:"",isFirstTimeSave:!0,iconPlusUrl:"",iconCheckUrl:"ICON_CHECK_URL",firstFlagUrl:"",ctx:"",isPingouApp:!1,canUseRecommendBtn:!1,showShareDetailFlag:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/skeletonScreen/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(require("../../../../../common/fe_helper.js")),r={props:{title:{type:String,default:""},focusImage:{type:String,default:""},price:{type:String,default:""},isSupportNav:Boolean,windowHeight:{type:String,default:""},defaultImg:String},computed:{mainImg:function(){return this.focusImage?/^jfs\//.test(this.focusImage)?t.getImg("https://m.360buyimg.com/n1/s200x200_"+this.focusImage):this.focusImage.replace(/^(http:)*\/\//,"https://"):""}},store:e.storeFn,methods:{}};exports.default=r; 
 			}); 
		define("pages/item/itemBase/components/skeletonScreen/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/skuLayer/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=s.skuId,T=s.isNewUser,_=s.redirectUrl,d=s.needReport;return new n.default(function(n,s){var c={sku:u,isInit:!1};_&&(c={url:_}),(0,t.getItemInfo)(c).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=t.errCode,_=t.msg;if(u&&0!=u){var c=o.ITEM_OUT_OF_STOCK;return"10001"==u||"20160304"==u?c=o.ITEM_NOT_EXIST:"20017"==u?c=o.ITEM_NOT_SUPPORT:"40000"==u&&(c=_||o.ITEM_ACT_HOT),s({code:u,message:c})}return 1==t.isSamCard?n(t):(0,r.organize)({json:t,isRetry:i,isNewUser:T,needReport:d}).then(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.redirectUrl?(i=!1,e({redirectUrl:r.redirectUrl,needReport:d}).then(function(e){n(e)}).catch(function(e){s(e)})):(i=!0,n(r))})}).catch(function(e){s(e)})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.initItem=e;var r=require("../../js/handler/organize.js"),t=require("../../js/model/baseModel.js"),n=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../libs/promise.min.js")),i=!0,o={NO_PRICE:"暂无定价",ITEM_OUT_OF_STOCK:"对不起，该商品已下架",ITEM_NOT_EXIST:"对不起，该商品不存在",ITEM_NOT_SUPPORT:"抱歉，小程序内暂不支持购买此商品",ITEM_ACT_HOT:"活动太火爆了,请稍后重试"}; 
 			}); 
		define("pages/item/itemBase/components/skuLayer/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function i(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function t(t,e){var i=[],o=!0,r=!1,s=void 0;try{for(var n,u=t[Symbol.iterator]();!(o=(n=u.next()).done)&&(i.push(n.value),!e||i.length!==e);o=!0);}catch(t){r=!0,s=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw s}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},n=require("./store"),u=require("../../../../../common/fe_helper.js"),a=e(require("../../../../../common/toast/toast")),c=require("../../../../../common/timer-manage"),p=require("../../../../../common/userinfo_wqvue"),l=require("../../js/model/baseModel.js"),h=t(require("../../../../../libs/promise.min.js")),d=e(require("../../js/handler/userInfo.js")),f=e(require("../../js/util/util.js")),g=t(require("../../../../../common/wxcontext.js")),m=require("../../js/handler/action"),v=require("../../js/handler/pingouAction"),k=require("../../../../../common/biz"),y=e(require("../../../../../common/login/loginv1.js")),I=require("./api.js"),C=e(require("../../constants/ptag-constants")),N={color:"颜色",size:"尺寸",spec:"规格"},S={},T={props:{sku:String,price:String,cover:String,totalNum:Number,goodsNumObj:Object,suitPackData:Object,localData:Object,othersData:{type:Object,value:{}},addedServices:{type:Object,value:{}},pingouTipData:Object,saleAtmos:Object,bottomBtn:Array,isOfflineHasShop:Boolean,choseShopId:String,needReport:Boolean,isPingou:Boolean,notJump:Boolean,showGwfx:Boolean,showWxsearch:Boolean,pgAddCartShow:Boolean,isSuit:{type:Boolean,value:!1},isNewUser:{type:Boolean,value:!1},showSkuLayerFlag:{type:Boolean,value:!1},showNumController:{type:Boolean,value:!1},showActions:{type:Boolean,value:!1},showArrivalNotice:Boolean,launchAppParameter:String,maskSkuConfig:Object,guideCanGetCoupons:Array,afterDiscountBenfit:Object,showUserLogin:Boolean,newerCouponBottomText:String,newerCouponRemainTime:Object},store:n.storeFn,attached:function(){this.page=getCurrentPages().pop()},watch:{showSkuLayerFlag:function(t){this.observeFlagChange(t)},othersData:{handler:function(t){},deep:!0},afterDiscountBenfit:{handler:function(){this.updateAfterDiscountBenfitTips()},deep:!0},guideCanGetCoupons:{handler:function(){this.updateAfterDiscountBenfitTips()},deep:!0}},computed:{headerClass:function(){var t=this.info||{},e=this.othersData||{},i=this.goodsNum||{},o=t.pingouInfo||{},r=t.afterDiscountPrice;return[o.isButie&&1!=e.buyType?"butie":o.isBipin?"bipin":"",r&&1==i.value?"discount":""].join(" ")}},created:function(){this.newColorSize=[],this.loadListen();var t=wx.getSystemInfoSync();this.windowWidth=t.windowWidth},ready:function(){var t=this;this.doBuy=f.throttle(this.doBuy,1e3),this.buy=f.throttle(this.doBuy,1e3),this.addToCart=f.throttle(this.addToCart,500),this.handleLookLike=f.throttle(this.handleLookLike,1e3),this.handleStockNotice=f.throttle(this.handleStockNotice,1e3),this.handleConfirmBtn=f.throttle(this.handleConfirmBtn,1e3),this.handleSkuChange=f.throttle(this.handleSkuChange,500),this.startTuan=f.throttle(this.startTuan,800),this.plusZxGouOpenPlus=f.throttle(this.plusZxGouOpenPlus,500),g.default.JD.events.listen("item.adderss.switch",function(e){t.observeAreaIdChange()})},methods:{updateAfterDiscountBenfitTips:function(){var t=this.afterDiscountBenfit||{},e=this.guideCanGetCoupons||[],i=t.coupons||[],o=t.promotes||[],r=e.length;if(!i.length&&!o.length)return this.afterDiscountTuanTips=[],void(this.afterDiscountBenfitTips=[]);var s=[];s.push({text:r?"购买时会自动领取并使用":"购买时会自动使用"}),i.length&&(s.push({text:i.join("、"),type:"1"}),s.push({text:"优惠券"}),o.length&&s.push({text:"及"})),o.length&&(s.push({text:o.join("、"),type:"1"}),s.push({text:"促销"}));var n=[];n.push({text:"当前商品可使用"}),i.length&&(n.push({text:i.join("、"),type:"1"}),n.push({text:"优惠券"}),o.length&&n.push({text:"及"})),o.length&&(n.push({text:o.join("、"),type:"1"}),n.push({text:"促销"})),this.afterDiscountTuanTips=s,this.afterDiscountBenfitTips=n},observeAreaIdChange:function(t){var e={extServices:[],jdServices:[],giftServices:[]};this.setData({addedServices:e}),this.triggerEvent("closeSkuLayer",{params:{addedServices:e}})},updateAddedServices:function(t){var e=this,i=t.detail.addedServices;g.default.nextTick?g.default.nextTick(function(){e.setData({addedServices:i})}):(0,c.createTimeout)(function(){e.setData({addedServices:i})},500,this.page)},observeFlagChange:function(t){var e=this;t?(this.showSkuPanel(),this.setData({isShowPopup:!0}),(0,c.createTimeout)(function(){e.setData({isShowPopupAnim:!0})},100,this.page)):(this.setData({isShowPopupAnim:!1}),(0,c.createTimeout)(function(){e.setData({isShowPopup:!1}),e.resetPanelData()},100,this.page))},showSkuPanel:function(){this.info.jdPrice=this.price||this.info.jdPrice||"",this.info.cover=this.cover||this.info.focusImages&&(0,u.getImg)(this.info.focusImages[0],160)||"";var t=this.suitPackData,e=this.sku;if(t&&t.packList){for(var i=t.pIndex,o=t.iIndex,r=t.suit,n=t.packList[i].poolList[o-1],a=n.saleProp,c=n.saleNames,p=[],l=n.colorList||[],h={},d={},f=l.length-1;f>=0;f--)e==l[f].skuId&&(d=l[f],h={color:l[f].color||"",size:l[f].size||"",spec:l[f].spec||""});c.forEach(function(t){p.push({value:a[t],name:t,text:N[t],current:h[t],sale:!0})});var g=r.item[o].finalPrice,m={price:r.price,dis:r.dis,mprice:r.mprice},v=s({},this.data.info,{skuId:d.skuId,skuName:d.skuName,sku:d.skuId,name:d.skuName,jdPrice:g.toFixed(2),priceObj:{price:g.toFixed(2)},cover:(0,u.getImg)(d.skuPicUrl,160),text:[h.color,h.size,h.spec].join(" "),choose:[h.color,h.size,h.spec].join(" "),canBuy:!!d.stock});return r.suitPrice=m,this.info=v,this.skuProps=p,this.pool=n,this.showAddCartBtns=!1,void(this.suitPackData.suit=r)}this.goodsNum.value=0|this.totalNum||1,this.initSkuPanelInfo(this.sku,!0)},getItemData:function(t,e){return e&&this.localData?h.default.resolve(JSON.parse(JSON.stringify(this.localData))):(0,I.initItem)({skuId:t,isNewUser:this.isNewUser,needReport:!e})},initSkuPanelInfo:function(t,e){var i=this,o=this.othersData||{},r=this.isSuit,n=this.goodsNum,c=this.notJump;this.isLoading=!0,f.reporter.setExtraData({sku_id:t}),this.getItemData(t,e).then(function(p){if(!p)return a.show({icon:a.ICON.WARNING,content:"网络错误，请稍后重试"}),void(i.isLoading=!1);if(!e&&i.triggerEvent("switchSku",{skuId:p.skuId,detail:p}),p.isSpecialProcess&&i.triggerEvent("setVisitedSku",p.skuId),!r&&p.jumpUrl&&!c)return f.gotoUrl(i,{url:p.jumpUrl},"","redirectTo",!0),i.isLoading=!1,void i.closeSkuLayer();if((p.isQianggou||p.huanSku)&&!e&&!r){var h={sku:t};return i.isLoading=!1,void i.closeSkuLayer({},h)}p.isJX=!(!p.spAttr||1!=p.spAttr.IsJX),p.isECardOnce=p.isECard&&p.spAttr&&1==p.spAttr.yysfhf,Number(p.jdPrice)&&(p.jdPrice=parseFloat(p.jdPrice).toFixed(2)),e&&(i.newColorSize=p.newColorSize||[]);var d=i.calcSkuForEachProp(p.props)||[],g=i.formatCurrentSelectText(p.props).join(", "),k=p.isPingou,y=p.pingouInfo,I=void 0===y?{}:y,N=p.isNeedRegainPricePingou,S=p.isNeedRegainPingouRecommendTuan,T=[];if(d.forEach(function(t){T.push(t.current),k&&I&&I.skuid_list&&(t.disabled=t.sku.map(function(t){return-1===I.skuid_list.indexOf(Number(t))}))}),i.updateLimitBuy(p),void 0!==o.buyType&&0!=o.buyType&&f.reporter.reportExposure(C.EXP_CONFIRM_BTN),N&&(i.info.isNeedRegainPricePingou=!1,(0,v.getPingouPrice)(p.skuId).then(function(t){i.setData({"info.pingouInfo.price":t.bp,"info.pingouInfo.originPrice":t.p>0&&1*t.bp<1*t.p&&t.p||"暂无定价"})}).catch(function(t){i.setData({"info.pingouInfo.price":"暂无定价"})})),S&&(i.info.isNeedRegainPingouRecommendTuan=!1,(0,v.getPingouRecommendTuan)(p.skuId).then(function(t){i.setData({"info.pingouInfo.tjTuanInfo":t})}).catch(function(t){})),p.poolList){var _=i.goodsNum.value||1,E=p.poolList;E.forEach(function(t){t.list.forEach(function(t){t.img=(0,u.getImg)(t.mp,150),t.num=_,t.selected=!1})}),p.poolFlag?(E[0].list[0].selected=!0,E[0].selectedArr=[E[0].list[0]]):E.forEach(function(t){t.list[0].selected=!0,t.selectedIndex=0,t.selectedNum=1})}i.valueAddedLocShops={},i.locShopSetupStatus=1,f.ENV.isPingouXcx||"1"==p.spAttr.YuShou||"2"!=p.spAttr.isFreeload||(0,l.valueAddedLocShops)(p.skuId).then(function(t){if(t&&1==t.isValueAddedLoc){f.reporter.reportExposure(C.EXP_CHOOSE_SHOP_BTN);var e="1"!=t.setupStatus;p.isZiying&&(e=!(p.spAttr&&"2"==p.spAttr.psdd)),i.valueAddedLocShops={show:!0,info:t.info,serviceNumLink:t.serviceNumLink,linkage:t.linkage,setupStatus:e}}}),!p.isPingou||!p.pingouInfo||p.pingouInfo.tjTuanInfo&&p.pingouInfo.tjTuanInfo.tuanList||(p.pingouInfo.tjTuanInfo=p.pgBottomBtn&&p.pgBottomBtn[0]&&p.pgBottomBtn[0].tuanInfo),delete p.item,delete p.newColorSize;var P=s({},p,{cover:(0,u.getImg)(p.focusImages[0],160),text:g,choose:T.join(" ")});i.setData({info:P}),i.info=P,i.skuProps=d,i.tipsContent=p.tipsContent||"",i.showAddCartBtns=!1,i.isLoading=!1,i.updateNum(parseInt(n.value)||1),!i.showWxsearch&&(0,m.cashBack)(P).then(function(t){i.info.gwfxInfo=t,i.showGwfx=t.show}),!e&&p.isPingou&&p.fanxian&&p.fanxian.amount&&f.reporter.reportExposure(C.EXP_FANXIAN_PRICE),P.pgSkuLayerRule&&P.pgSkuLayerRule.rightTips&&P.pgSkuLayerRule.rightTips.length>0&&1!=o.buyType&&-1!=o.buyType&&(P.pingouInfo&&P.pingouInfo.isNewerTuan?f.reporter.reportExposure(C.EXP_SKULAYR_RULE_NEWERTUAN):P.pingouInfo&&P.pingouInfo.isLaNewerTuan&&f.reporter.reportExposure(C.EXP_SKULAYR_RULE_LANEWERTUAN)),!e&&p.showPlusZxGouTip&&p.isPlusZxGou&&(p.canBuy?f.reporter.reportExposure(C.EXP_PLUSZX_OPENBTN):f.reporter.reportExposure(C.EXP_PLUSZX_OPENBTN_GRAY)),!e&&p.showPlusZxGouTip&&p.isPlusZxShop&&(p.canBuy?f.reporter.reportExposure(C.EXP_PLUSZXSHOP_OPENBTN):f.reporter.reportExposure(C.EXP_PLUSZXSHOP_OPENBTN_GRAY)),!e&&I&&(I.isNewerNoTuan?f.reporter.reportExposure(C.EXP_NEWER_NOTUAN_BTN):I.isNewer?f.reporter.reportExposure(C.EXP_NEWER_KAITUAN_BTN):f.reporter.reportExposure(C.EXP_OLDER_KAITUAN_BTN)),!e&&P&&P.isPingou&&P.isNoStock&&!P.canNotBuyHere&&!P.isWareOff&&i.showArrivalNotice&&f.reporter.reportExposure(C.EXP_ARRIVAL_NOTICE_JX),!e&&p.isToJdhealthOrder&&f.reporter.reportExposure(C.EXP_GOTO_JDHEALTH_ORDER)}).catch(function(t){a.show({icon:a.ICON.WARNING,content:i.wrapErr(t)||"网络错误，请稍后重试"}),i.info.canBuy=!1,i.isLoading=!1})},resetPanelData:function(){this.newColorSize=[],this.skuProps=[],this.pool={},this.info.canBuy=!0},calcSkuForEachProp:function(t){var e=this,o=t||this.skuProps,r=this.getCurrentSelect(o);return Array.isArray(o)&&o.forEach(function(t){var o=[];t.value.forEach(function(s){var n={};Object.assign(n,r,i({},t.name,s)),t.isSizeGuideShow&&f.reporter.reportExposure(C.EXP_SIZE_GUIDE);var u=f.getSpecifySku(n,e.newColorSize);o.push(u.join("|"))}),t.sku=o}),o},getCurrentSelect:function(t){var e={};return(t=t||this.skuProps).forEach(function(t){e[t.name]=t.current}),e},formatCurrentSelectText:function(t){var e=[];return(t=t||this.skuProps).forEach(function(t){t.current&&t.value.length>=1&&e.push(t.current)}),e},checkPropSelect:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(this.isSuit){for(var i in t)if(!t[i])return!1;return!0}var o="";return e.forEach(function(e){if(e&&!o){var i=!0;for(var r in t)t[r]!=e[r]&&(i=!1);o=i?e.skuId:""}}),!!o},gotoSizeGuide:function(t){var e=this.data.info.skuId,i=t.currentTarget?t.currentTarget.dataset:t,o=i.spu,r=i.size;f.reporter.reportClick(C.CLICK_SIZE_GUIDE),f.gotoUrl(this,{url:"https://m.toplife.com/sizeGuide.html?skuId="+e+"&productId="+o+"&sizeCode="+r+"&showHead=no"})},handleSkuChange:function(t){var e=this.skuProps,i=t.currentTarget.dataset,o=i.pidx,r=i.idx,n=i.name,a=i.val,c=i.disabled,p=this.getCurrentSelect(),l=this.newColorSize;if(!c&&e[o])if(a!=p[n]){if(this.setData({isOfflineHasShop:!1,addedServices:{}}),S={pidx:o,idx:r,name:n,val:a},e[o].sku){var h=e[o].sku[r];if(!h)return;var d=this.getCurrentSelect();this.skuProps[o].current=a==d[n]?"":a,this.setData({skuProps:this.calcSkuForEachProp()}),d=this.getCurrentSelect(),1==h.split("|").length&&this.checkPropSelect(d,l)&&h!=this.info.skuId&&this.initSkuPanelInfo(h)}else{var g=this.skuProps,m=this.suitPackData,v=this.pool,k=v.saleNames,y=v.colorList,I=g[o].value[r],N={},T=[],_=void 0;g[o].current=I,g.forEach(function(t){N[t.name]=t.current,T.push(t.current)});for(var E=y.length-1;E>=0;E--)for(var P=0,L=k.length-1;L>=0;L--){var x=k[L];N[x]==y[E][x]&&++P==k.length&&(_=y[E])}if(!_)return;var B=m.suit,A=m.iIndex,b=B.item[A].finalPrice,O={price:B.price,dis:B.dis,mprice:B.mprice},w=s({},this.info,{skuId:_.skuId,skuName:_.skuName,sku:_.skuId,name:_.skuName,price:b.toFixed(2),cover:(0,u.getImg)(_.skuPicUrl,160),text:[N.color,N.size,N.spec].join(" "),choose:T.join(" "),canBuy:!!_.stock});B.suitPrice=O,this.info=w,this.skuProps=g,this.suitPackData.suit=B}f.reporter.reportClick(C.LAYER_SKU_CHANGE)}else this.isSuit||(this.skuProps[o].current="",this.setData({skuProps:this.calcSkuForEachProp()}))},doAddNum:function(t){var e=this.info,i=this.othersData||{},o=this.goodsNum,r=e.isPingou,s=e.pingouInfo;if(o.addEnabled){if(r&&s){if(s.limitBuyOne&&1!=i.buyType)return;if(s.limitSingleBuyOne&&1==i.buyType)return}this.updateNum(parseInt(o.value)+1)}},doSubNum:function(t){var e=this.info,i=this.othersData||{},o=this.goodsNum,r=e.isPingou,s=e.pingouInfo;if(o.subEnabled){if(r&&s){if(s.limitBuyOne&&1!=i.buyType)return;if(s.limitSingleBuyOne&&1==i.buyType)return}this.updateNum(parseInt(o.value)-1)}},doInputNum:function(t){var e=t.detail.value,i=this.info,o=this.othersData||{},r=i.isPingou,s=i.pingouInfo;if(r&&s){if(s.limitBuyOne&&1!=o.buyType)return;if(s.limitSingleBuyOne&&1==o.buyType)return}this.updateNum(parseInt(e)||1)},updateNum:function(t){var e=this.info,i=this.othersData||{},o=e.stock,r=void 0===o?{}:o,s=e.poolFlag,n=e.pingouInfo,u=void 0===n?{}:n,c=r.rn||0,p=this.goodsNum.limit,l=this.goodsNum.maxLimit,h="",d=!1;1!=i.buyType&&u&&u.limitBuy&&u.limitBuy.max&&u.limitBuy.min&&(d=!0,p=1*u.limitBuy.min,l=1*u.limitBuy.max),p=p<1?1:p,c>0&&(l=Math.min(l,c)),t<p?(t=p,p>1&&(h="该商品最少需购买"+p+"件")):t>l&&(t=l,h=200==l?"单款最多可买200件":"该商品最多可买"+l+"件"),h&&!d&&a.show({icon:a.ICON.WARNING,content:h});var f=this.info.poolList&&Array.from(this.info.poolList);if(f&&f.length)if(s){if(f[0].list&&f[0].list.length){f[0].selectedNum=t,f[0].selectedArr=f[0].list.filter(function(t){return t.selected});var g=f[0].selectedArr.reduce(function(t,e){return t+e.num},0);if(f[0].selectedArr[0].num+=t-g,f[0].selectedArr[0].num<=0){var m=f[0].list.find(function(t){return t.selected});m.selected=!1,m.num=1,f[0].selectedArr.shift()}}}else f.forEach(function(e){t<=e.list.length&&(e.selectedNum=t)});this.info.poolList=f||[],this.goodsNum.value="number"==typeof this.goodsNum.value?t+"":+t,this.goodsNum.subEnabled=t>p,this.goodsNum.addEnabled=t<l},setLimitBuy:function(t){var e="",i=t.value,o=void 0===i?this.goodsNum.value:i,r=t.limit,s=void 0===r?this.goodsNum.limit:r,n=t.maxLimit;n&&n<200&&s&&s>1&&s<=n?e=s+"件起售，最多可购买"+n+"件":s==n&&1==s?e="仅限购买1件":s&&s>1?e=s+"件起售":n&&n<200&&(e="最多可购买"+n+"件"),this.goodsNum.value=o,this.goodsNum.limit=s,this.goodsNum.maxLimit=n,this.goodsNum.limitText=e,this.goodsNum.subEnabled=o>s,this.goodsNum.addEnabled=o<n},updateLimitBuy:function(t){var e=this,i=t.pingouInfo,o=t.plusLimitBuy,r=this.othersData,s=void 0===r?{}:r,n=200;t.spAttr&&parseInt(t.spAttr.MN)?n=parseInt(t.spAttr.MN)>9999?9999:parseInt(t.spAttr.MN):t.jdCategory&&"1713"==t.jdCategory[0]&&(n=1e3);var u=parseInt(t.spAttr&&t.spAttr.LowestBuy)||1;1!=s.buyType&&i&&i.limitBuy&&i.limitBuy.max&&i.limitBuy.min||(i&&(i.isNewerTuan||i.isLaNewerTuan)&&i.canMaxBuy&&1!=s.buyType?this.setLimitBuy({value:1,limit:1,maxLimit:i.canMaxBuy}):i&&i.limitBuyOne&&1!=s.buyType?this.setLimitBuy({value:1,limit:1,maxLimit:n}):i&&i.limitSingleBuyOne&&1==s.buyType?this.setLimitBuy({value:1,limit:1,maxLimit:n}):t.isYuYue||t.isQianggou?t.isQianggou&&t.miao&&t.miao.limitNum>0?this.setLimitBuy({value:1,maxLimit:t.miao.limitNum}):this.setLimitBuy({value:1,maxLimit:1}):t.spAttr&&t.spAttr.LowestBuy&&u>1?this.setLimitBuy({value:u,limit:u,maxLimit:n}):this.setLimitBuy({limit:u,maxLimit:n}));var a="",c="",h="";(t.promov2&&t.promov2[0]&&t.promov2[0].pis||[]).forEach(function(t){for(var e in t)if(3==e){var i=(t.pid||"").split("_");a=i[0],c=i[1];var o={};try{o=JSON.parse(t.customtag)}catch(t){console.warn(t)}h=100*o.p||""}}),(0,l.getLimitBuyInfo)({plusLimitBuy:o,skuId:t.skuId,areaId:(0,p.getUserAddressID)(),category:t.jdCategory&&t.jdCategory.join(","),venderId:t.venderId,skuName:t.skuName,promoId:a,promoType:c,promoPrice:h}).then(function(i){var r=i.limitNum,s=i.noSaleFlag,n=i.plusFlag,u=i.resultExt,a=void 0===u?{}:u;r>0&&!t.isYuYue&&!t.isQianggou&&e.setLimitBuy({maxLimit:r}),1==s&&e.setData({"info.noSaleFlag":1,tipsContent:"该商品在该地区暂不支持销售，非常抱歉！","info.canBuy":!1});var c=t.isPlusZxShop,p=t.canBuy;o||c||"1"!==a.isPlusLimit||(e.info.isPlusZxGou=!0,201!=n&&(e.info.plusZxGouYuyueNotPlus=!0,p&&(e.info.tipsContent="本活动限PLUS用户专享，开通PLUS即可参与")),e.triggerEvent("switchSku",{skuId:e.info.skuId,detail:e.info}))})},handlePreviewImage:function(){var t=this.info.isPingou,e=this.info.cover;e&&!this.isSuit&&(t?f.reporter.reportClick(C.LAYER_SKU_COVER_VIEW_PINGOU):f.reporter.reportClick(C.LAYER_SKU_COVER_VIEW),e=e.replace(/(\/)(?:s\d+x\d+_)?(jfs\/)/,"$1$2").replace("n1/","img/"),g.default.previewImage({current:e,urls:[e]}))},closeSkuLayer:function(t,e){var i=this.info,o=void 0===i?{}:i,r=this.skuProps,s=this.goodsNum,n=this.addedServices;if(e||o.skuId){var u=o.skuId,a=o.skuName,c=o.jdPrice,p=o.cover,l=e||{sku:u,name:a,price:c,cover:p,num:s.value,skuProps:r,addedServices:n};this.triggerEvent("closeSkuLayer",{params:l}),f.reporter.reportClick(C.LAYER_SKU_CLOSE)}else this.triggerEvent("closeSkuLayer")},noscroll:function(){},checkSku:function(){var t=this.getCurrentSelect(),e=this.newColorSize;if((this.info||{}).dontCheckSku)return!0;if(!this.checkPropSelect(t,e)){var i=[];return this.skuProps.forEach(function(e){t[e.name]||i.push(e.text.replace("选择",""))}),a.show({icon:a.ICON.WARNING,content:"请选择`"+i.join("/")+"`",page:this}),!1}return!0},addToCart:function(t){var e=this,i=this.info,o=i.canBuy,r=i.skuId,s=i.spAttr,n=i.poolList,u=void 0===n?[]:n,c=i.poolFlag,p=i.isECard,h=i.isLoc,v=i.locAddCartDirect,k=i.pingouInfo,y=void 0===k?{}:k,I=this.addedServices,N=t&&t.currentTarget&&t.currentTarget.dataset||{},S=N.disabled,T=N.report,_=this.goodsNum.value||1;if(o&&!S&&this.checkSku()){if(T&&f.reporter.reportExposure(T),h&&!v&&!this.data.isOfflineHasShop)return this.chooseShop();var E="";u.length&&(E=c?u[0].selectedArr&&u[0].selectedArr.map(function(t){return t.sid+"|"+t.num}).join("_")||"":u.reduce(function(t,e){return t.concat(e.list.filter(function(t){return t.selected}))},[]).map(function(t){return t.sid+"|"+e.goodsNum.value}).join("_")||"");var P=h&&this.choseShopId?this.choseShopId:"";p?d.checkPinStatus({loginText:"您当前登录的是临时账号，为了您的资产安全，购买礼品卡前请先登录京东账号",switchText:"您当前登录的是临时账号，为了您的资产安全，购买礼品卡前请先切换至您的京东账号",skuId:r,instance:this}).then(function(t){(0,l.addCardList)({pin:t.pin||"",skuId:r,num:_}).then(function(t){e.us.report(e.us.OP_ITEM_ADD_CART,0,null),a.show({icon:a.ICON.SUCCESS,content:"加入卡清单成功",page:e}),e.closeSkuLayer()}).catch(function(t){e.us.report(e.us.OP_ITEM_ADD_CART,1,t),a.show({icon:a.ICON.ERROR,content:t&&t.code&&"加入卡清单失败("+t.code+")"||"加入卡清单失败",page:e}),e.closeSkuLayer()})}).catch(function(t){a.show({icon:a.ICON.ERROR,content:"加入卡清单失败",page:e}),e.closeSkuLayer()}):(0,m.addCart)({buyNum:_,type:s&&1==s.isXnzt?3:0,sku:r,shopid:P,str:E,services:I},this.info).then(function(t){a.show({icon:a.ICON.SUCCESS,content:"加入购物车成功",page:e}),e.closeSkuLayer(),e.triggerEvent("onAddCartFail",{code:1001,num:t}),g.default.JD.events.trigger("cartrefresh")}).catch(function(t){t&&"8969"==t.code?a.show({icon:a.ICON.ERROR,content:t.message||"添加购物车失败，请稍后再试",page:e}):a.show({icon:a.ICON.ERROR,content:"添加购物车失败，请稍后再试",page:e}),e.closeSkuLayer()}),f.reporter.reportClick(C.VIEW_ADD_TO_CART,{sku_id:r}),y&&y.isAppZx&&f.reporter.reportClick(C.CLICK_JXAPPZX_ADDCART_BTN)}},getServicesCommList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.jdServices,o=void 0===i?[]:i,r=e.extServices,s=void 0===r?[]:r,n=e.giftServices,u=void 0===n?[]:n,a={};if(s.length){var c=s.map(function(e){return[e.id,"",t.buyNum||1,t.skuId,1===t.polyType?7:8,t.skuId,0==t.pid?"":t.pid,0].join(",")}).join("$");c&&Object.assign(a,{ybcommlist:c})}if(o.length){var p=t.isVirtualSuit||t.isSuit?t.itemId||"":"",l=o.map(function(e){return[e.id,"","","","",t.skuId,p,t.isVirtualSuit?"suitType:1":""].join(",")}).join("$");l&&Object.assign(a,{jdhscommlist:l})}if(u.length){var h=u.map(function(e){return[t.skuId,"",t.buyNum||1,t.skuId,1,"",0,"",e.id].join(",")}).join("$");h&&Object.assign(a,{commlist:h})}return a},handleCommlistData:function(){var t=this.info,e=t.skuId,i=t.poolList,o=void 0===i?[]:i,r=this.goodsNum.value||1,n=this.data.addedServices,u="";o.length&&(u=this.info.poolFlag?o[0].selectedArr&&o[0].selectedArr.map(function(t){return t.sid+"|"+t.num}).join("_")||"":o.reduce(function(t,e){return t.concat(e.list.filter(function(t){return t.selected}))},[]).map(function(t){return t.sid+"|"+r}).join("_")||"");var a=this.getServicesCommList({skuId:e,buyNum:r},n);return s({zp:u},a)},method0:function(){if(this.checkSku()){var t=""+this.bottomBtn[0].method;this[t]&&this[t]()}},method1:function(t){var e=this;if(this.checkSku()){var i=""+this.bottomBtn[1].method;t.detail&&t.detail.formId?(0,k.setFormIdWithSession)(t.detail.formId).then(function(){e[i]&&e[i]()}).catch(function(){e[i]&&e[i]()}):this[i]&&this[i]()}},plusZxGouOpenPlus:function(){var t=this.info,e=t.canBuy,i=t.isPlusZxShop;e?(f.gotoUrl(this,{url:"https://plus.m.jd.com/open/accountPage#/classic/"}),this.closeSkuLayer(),i?f.reporter.reportClick(C.CLICK_PLUSZXSHOP_OPENBTN):f.reporter.reportClick(C.CLICK_PLUSZX_OPENBTN)):i?f.reporter.reportClick(C.CLICK_PLUSZXSHOP_OPENBTN_GRAY):f.reporter.reportClick(C.CLICK_PLUSZX_OPENBTN_GRAY)},singleBuyAlert:function(t){var e=this,i=t.currentTarget.dataset.disabled,o=this.info,r=o.pingouInfo,s=void 0===r?{}:r,n=o.canBuy,u=s.cannotBuy,a=s.isNewerNoTuan,c=s.newerNoTuanSingleBuyMsgArr;i||(s.specialAppZhuanXiang?this.launchAppError():n&&(!u&&a&&c?(f.reporter.reportExposure(C.EXP_NEWER_NOTUAN_SINGLEBUY_ALERT),this.triggerEvent("showDialog",{show:!0,type:"newerSingleBuy",specMsgArr:c,confirmBtnTxt:"免开团购买",cancelBtnTxt:"单独购买",onConfirm:function(){e.startTuan(),f.reporter.reportClick(C.CLICK_NEWER_NOTUAN_SINGLEBUY_NOTUAN)},onCancel:function(){e.doBuy(t),f.reporter.reportClick(C.CLICK_NEWER_NOTUAN_SINGLEBUY_SINGLE)}})):this.doBuy(t)))},doBuy:function(t){var e=this,i=(t&&t.currentTarget&&t.currentTarget.dataset||{}).report,o=this.data.addedServices,r=this.info,s=r.canBuy,n=r.spAttr,u=r.skuId,c=r.isECard,l=r.isSpecialProcess,h=r.isPingouShop,g=r.pingouInfo,m=void 0===g?{}:g,v=r.isPingou,k=r.jdfwj,y=this.goodsNum.value||1,I=2==this.wxappType&&h;if(l&&f.reporter.reportClick(C.DETAIL_SUBSCRIBE_SECKILL_BTN),i&&(f.reporter.reportExposure(C.EXP_COMMON_BUY),f.reporter.reportExposure(i)),s&&(!m||!m.cannotSingleBuy)&&this.checkSku())if(this.closeSkuLayer({},{sku:u,num:y,addedServices:o,action:"buy"}),"2"==k)f.gotoUrl(this,{url:"https://m-weixiu.jd.com/settle?sku="+u+"&number="+y});else if(c){var N=(0,p.getAddress)().addressId;d.checkPinStatus({loginText:"您当前登录的是临时账号，为了您的资产安全，购买礼品卡前请先登录京东账号",switchText:"您当前登录的是临时账号，为了您的资产安全，购买礼品卡前请先切换至您的京东账号",skuId:u,instance:this}).then(function(t){var i="https://wq.jd.com/pinbind/pintokenredirect?biz=ecard&url="+encodeURIComponent("https://giftcard.jd.com/giftcardpurchase/mIndex?skuNumInfo="+u+","+y+"&clientType=1&addressId="+N)+(I?"&pingouchannel=1":"");f.gotoUrl(e,{url:i})}).catch(function(t){t.message&&a.show({icon:a.ICON.WARNING,content:t.message,page:e})})}else if(this.choseShopId){var S={commlist:[u,this.choseShopId,y,u,"1,0,0"].join(",")};I&&(S.pingouchannel=1),f.gotoUrl(this,{xcx:{url:"/pages/pay/index/index",params:S}})}else{var T=this.handleCommlistData(),_={sku:u,num:y,type:n&&1==n.isXnzt?3:0};v&&(_=Object.assign(_,{bizkey:"pingou",bizval:0})),_=Object.assign(_,T),n&&n.isOverseaPurchase&&0!=n.isOverseaPurchase&&(_.category="global"),m&&m.limitSingleBuyOne&&(_.fixednum=1),I&&(_.pingouchannel=1),f.ENV.isXcxEnv&&f.gotoUrl(this,{xcx:{url:"/pages/pay/index/index",params:_}})}f.reporter.reportClick(C.VIEW_BUYING,{sku_id:u})},subscribeItem:function(){f.gotoUrl(this,{xcx:{url:"/pages/item/subPackages/pages/yuyueResult/index",params:{sku:this.info.skuId}}}),f.reporter.reportClick(C.DETAIL_SUBSCRIBE_BTN),this.info.isPlusZxGou&&f.reporter.reportClick(C.CLICK_PLUSZX_YUYUE_STATE2)},specialBuy:function(t){var e=this.info,i=e.isPop,o=e.stock,r=e.isPlusZxGou,s=void 0;o&&o.D?s=o&&o.D&&o.D.type:o&&o.venderType&&"100"==o.venderType?s=100:i||(s=-1),f.reporter.reportClick(C.DETAIL_BUYING_SPREE_BTN),r&&f.reporter.reportClick(C.CLICK_PLUSZX_YUYUE_STATE4);var n={sku:this.info.skuId,num:this.goodsNum.value,rcheck:1,category:"miao"};void 0!==s&&(n.venderType=s),f.gotoUrl(this,{xcx:{url:"/pages/pay/index/index",params:n}})},handleStockNotice:function(){var t=this.info,e=t.skuId,i=t.itemType,o=t.isPingou;f.reporter.reportClick(C.DETAIL_STOCK_NOTICE),o&&f.reporter.reportClick(C.CLICK_ARRIVAL_NOTICE_JX),f.gotoUrl(this,{xcx:{url:"/pages/item/subPackages/pages/arriveNotice/index",params:{sku:e,itemType:i}}})},handleLookLike:function(){var t=this.info,e="https://wqs.jd.com/search/searchsimilar.shtml?sceneid=18&sku="+t.skuId+"&jp="+t.jdPrice;f.reporter.reportClick(C.DETAIL_LOOK_SIMILAR_BUTTON),f.gotoUrl(this,{url:e})},handleConfirmBtn:function(){var t=this.info,e=this.goodsNum,i=this.suitPackData,o=this.othersData,r=void 0===o?{}:o;if(f.reporter.reportClick(C.LAYER_SKU_TWO_CONFIRM_CLICK),(t.canBuy||"subscribe"==r.btnType)&&this.checkSku()){if("addToCart"===r.btnType)return f.reporter.reportClick(C.LAYER_SKU_TOW_CONFIRM),this.addToCart();if("buy"==r.btnType)return f.reporter.reportClick(C.LAYER_SKU_TOW_CONFIRM),this.doBuy();if("subscribe"==r.btnType)return f.reporter.reportClick(C.LAYER_SKU_TOW_CONFIRM),this.subscribeItem();"gotoJdhealthOrder"==r.btnType?this.gotoJdhealthOrder():"custom"==r.btnType&&this.onGotoCustom();var s={sku:t.skuId,idx:S.pidx,name:S.name,val:S.val};t.sku=t.skuId,this.triggerEvent("confirmSkuChange",{info:t,num:e.value,suitPackData:i,othersData:r,sInfo:s})}},loadListen:function(){var t=this;g.default.JD.events.listen("skuLayer.giftPool.update",function(e){e.length&&(e[0].selectedArr=e[0].list.filter(function(t){return t.selected}),t.info.poolList=e)})},gotoGiftList:function(t){var e=this.info,i=e.cover,o=e.skuName,r=e.jdPrice,s=e.poolFlag,n=e.poolList,u=void 0===n?[]:n,a=this.goodsNum.value;f.ENV.isXcxEnv&&(getApp().itemPoolList=u,f.gotoUrl(this,{xcx:{url:"/pages/item/subPackages/pages/giftPool/giftPool",params:{name:o,price:r,cover:i,num:a,flag:s}}}))},wrapErr:function(t){var e="";return"object"==(void 0===t?"undefined":r(t))?e=t.message:"string"==typeof t&&(e=t),e},chooseShop:function(){var t=this;this.closeSkuLayer(),(0,c.createTimeout)(function(){t.triggerEvent("chooseShop")},100,this.page)},gotoChongyin:function(){this.triggerEvent("closeSkuLayer",{});var t=this.info.skuId;f.gotoUrl(this,{url:"https://printing.m.jd.com/index.html#/?skuId="+t})},subscribeCar:function(){var t=this.info.sku,e=this.choseShopId,i=void 0===e?"":e,o="https://wq.jd.com/pinbind/pintokenredirect?biz=carbrand&url="+encodeURIComponent("https://carbrand.jd.com/m/html/reservationCar.html?skuId="+t+"&storeId="+i);f.gotoUrl(this,{url:o})},pingouConfirm:function(){var t=this.info,e=this.othersData,i=void 0===e?{}:e;f.reporter.reportClick(C.LAYER_SKU_TWO_CONFIRM_CLICK),t.isPingou&&1==i.buyType?this.doBuy():t.isPingou&&2==i.buyType?(f.reporter.reportClick(C.CLICK_START_TUAN_CONFIRM),this.startTuan(!1)):t.isPingou&&3==i.buyType?this.startTuan(!0):t.isPingou&&-1==i.buyType&&this.addToCart()},gotoPingouDetail:function(t){var e=this.othersData,i=void 0===e?{}:e,o=this.info.pingouInfo,r=void 0===o?{}:o,s=t.currentTarget.dataset,n=s.tuaninfo,u=s.ptagname;this.pingouTipData=n||r&&r.tjTuanInfo,this.startTuan(!0),f.reporter.reportClick(C.CLICK_TUAN,{isBottomTip:"2"}),2==i.buyType&&f.reporter.reportClick(C.CLICK_JOIN_TUAN),u&&f.reporter.reportClick(C[u])},showBtns:function(){this.info.canBuy&&(this.isPingouApp||this.setData({showAddCartBtns:!0}))},hiddenBtns:function(){this.setData({showAddCartBtns:!1})},gotoTuan:function(t){if(t){var e=t&&t.currentTarget&&t.currentTarget.dataset,i=e.report,o=e.ptagname;i&&f.reporter.reportExposure(C.EXP_START_TUAN),o&&f.reporter.reportClick(C[o])}var r=this.info.pingouInfo,s=void 0===r?{}:r;f.reporter.reportClick(C.CLICK_GOTO_TUAN),s.isNewerNoPin?f.reporter.reportClick(y.isLogin()?C.CLICK_QP_BUY_BTN:C.CLICK_QP_BUY_BTN_LOGIN):s.isNewerNoTuan?f.reporter.reportClick(C.CLICK_NEWER_NOTUAN_BTN):s.isNewer?f.reporter.reportClick(C.CLICK_NEWER_KAITUAN_BTN):f.reporter.reportClick(C.CLICK_OLDER_KAITUAN_BTN),s.isButie&&f.reporter.reportClick(C.CLICK_BUTIE_OPEN_TUAN),s.isAppZxCanLaunch?this.launchAppError():s.cannotBuy||this.startTuan()},startTuan:function(t){var e=this;if(this.info.canBuy){var i=this.info,r=i.skuId,s=i.pingouInfo,n=i.spAttr,u=i.isPingouShop,p=this.addedServices,l=this.guideCanGetCoupons,d=this.pingouTipData,m=d.activeId,k=d.tuan_id,y=d.tuan_owner_nickname,I=d.tuanList,C=s.isNewerNoPin?"2":s.isNewerNoTuan?"1":"0",N=t?{skuId:r,activeId:m,tuanId:k,nickname:y,headUrl:I&&I[0]&&I[0].head_portrait_url||"https://img10.360buyimg.com/jdphoto/s100x100_jfs/t1951/176/1222496278/15607/bbb3b2eb/568cdbf0N4d33c2a4.png"}:{skuId:r,isNewerSingleTuan:C};"0"===C||t||(N.tuanId="99999");var S=[(0,v.getTuanStatus)(N)];l.length&&S.push((0,v.drawAfterDiscountCoupons)(l,r)),h.default.all(S).then(function(i){var a=o(i,2),l=a[0],h=a[1];if(l)if(l.active_time_left<=0)wx.showModal({title:"提示",content:"该活动已结束，去看看其他拼购商品吧！",showCancel:!1,confirmText:"知道啦",confirmColor:"#E93B3D"});else if(1!=l.cannot_buy_code){var d=function(){e.closeSkuLayer({},{sku:r,num:e.data.goodsNum.value,addedServices:p,action:"buy"});var i=e.handleCommlistData(),o={activeid:l.active_id,sku:Number(r),num:e.data.goodsNum.value,bizkey:"pingou",bizval:l.biz_value,member:l.tuan_member_count};t&&(o=Object.assign(o,{jointuan:"1"})),o=Object.assign(o,i),n&&n.isOverseaPurchase&&0!=n.isOverseaPurchase&&(o.category="global"),n&&1==n.isXnzt&&(o.type=3),s&&(s.limitBuyOne||s.limitBuy&&1==s.limitBuy.max)&&Object.assign(o,{fixednum:1}),2==e.wxappType&&u&&(o.pingouchannel=1),!s||1!=s.pinType&&5!=s.pinType?f.gotoUrl(e,{xcx:{url:"/pages/pay/index/index",params:o}}):g.default.JD.cookie.get("cd_eid")?f.gotoUrl(e,{xcx:{url:"/pages/pay/index/index",params:o}}):(0,v.getNewerTuanSwitch)().then(function(t){if(t){var i=Object.assign({},o,{pindes:l.pid}),r="https://wqs.jd.com/my/agreement/eid_page.shtml?"+f.querystring(i);f.gotoUrl(e,{url:r})}else f.gotoUrl(e,{xcx:{url:"/pages/pay/index/index",params:o}})}).catch(function(t){f.gotoUrl(e,{xcx:{url:"/pages/pay/index/index",params:o}})})};if(h&&(h.successList.length&&e.triggerEvent("handleDrawAfterDiscount",{indexList:h.successList.map(function(t){return t.index})}),!h.success||h.failList.length))return g.default.showToast({title:h.failList.map(function(t){return t.desc}).join("、")+"优惠券领取失败，本次无法享受优惠价格",icon:"none",duration:3e3}),void(0,c.createTimeout)(function(){d()},3e3,e.page);d()}else wx.showModal({title:"提示",content:l.getTuanStatus_text&&l.getTuanStatus_text.checkPayDialog||"该商品仅限新用户"+(t?"参":"开")+"团哦，再看看其他好货吧~",showCancel:!1,confirmText:"知道啦",confirmColor:"#E93B3D"});else wx.showModal({title:"提示",content:"抱歉，网络跑的有点慢，请稍后重试~",showCancel:!1,confirmText:"知道啦",confirmColor:"#E93B3D"})}).catch(function(i){!(i&&i.isHold)&&a.show({icon:a.ICON.WARNING,content:t?"参团失败，请稍后再试":"开团失败，请稍后再试",page:e})})}},launchApp:function(t){var e=t.currentTarget.dataset,i=e.type,o=e.yuyueState;switch(i){case"buy":f.reporter.reportClick(C.CLICK_SPJXAPPZX_BUY_BTN);break;case"createTuan":f.reporter.reportClick(C.CLICK_JXAPPZX_CREATETUAN_BTN);break;case"maskYl":2==o?f.reporter.reportClick(C.CLICK_MASK_BTN_2):4==o&&f.reporter.reportClick(C.CLICK_MASK_BTN_4);break;case"maskYlTip":f.reporter.reportClick(C.CLICK_MASK_YLTIP_3)}},launchAppError:function(t){this.closeSkuLayer(),this.triggerEvent("handleKlDownload");var e=t.currentTarget.dataset,i=e.type,o=e.yuyueState;"maskYlEmpty"==i&&(2==o?f.reporter.reportClick(C.CLICK_MASK_BTN_2):4==o&&f.reporter.reportClick(C.CLICK_MASK_BTN_4)),"maskYlTipEmpty"==i&&f.reporter.reportClick(C.CLICK_MASK_YLTIP_3)},onNewerNoTuanTipClick:function(){f.reporter.reportClick(C.CLICK_NEWER_NOTUAN_TIP),this.gotoTuan()},onNewerNoPinTipClick:function(){this.showUserLogin&&(this.triggerEvent("doLogin"),f.reporter.reportClick(C.CLICK_JXNEWER_COUPON_BANNER_LOGIN))},gotoJdhealthOrder:function(){var t=this.info.skuId,e=this.goodsNum.value||1;this.triggerEvent("gotoJdhealthOrder",{dontShowLayer:!0,changeBuyNum:e,changeSkuId:t})},onGotoCustom:function(){var t=this.goodsNum,e=this.info;this.triggerEvent("gotoCustomHandle",{buyNum:t.value||1,skuId:e.skuId})},chooseLocShopService:function(t){var e=t.currentTarget.dataset.type;this.locShopSetupStatus=e},chooseInstallShop:function(){var t=this.info.skuId,e=this.goodsNum.value||1,i=(0,p.getUserAddressID)(),o="https://wq.jd.com/pinbind/pintokenredirect?biz=carbrand&url="+encodeURIComponent("https://fcar.jd.com/carService/m/index.html#index/skuId:"+t+"/num:"+e+"/area:"+i+"/wechat:1");f.gotoUrl(this,{url:o}),f.reporter.reportClick(C.CLICK_CHOOSE_SHOP_BTN)}}};exports.default=T; 
 			}); 
		define("pages/item/itemBase/components/skuLayer/skuAddedService/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){var i=[],r=!0,n=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(i.push(a.value),!t||i.length!==t);r=!0);}catch(e){n=!0,s=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw s}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=require("./store"),r=e(require("../../../../../../common/fe_helper.js")),n=require("../../../../../../common/numberp.js"),s=require("../../../js/handler/action"),a=require("../../../js/model/baseModel.js"),o=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../../common/wxcontext.js")),d=e(require("../../../constants/ptag-constants")),c=e(require("../../../../itemBase/js/util/util.js")),u={props:{skuId:{type:String},areaId:{type:String},category:{type:Array,value:[]},brandId:String,price:String,isSupportGift:Boolean,isSupportYanbao:Boolean,isSupportPackageJd:Boolean,isPingou:Boolean},store:i.storeFn,watch:{skuId:function(e,t){this.updateAddedService(e,t)},areaId:function(e,t){this.updateAddedService(e,t)}},mounted:function(){var e=this;o.default.JD.events.listen("item.adderss.switch",function(t){e.resetAddedService(),e.fetchServices()}),(0,a.getPpmsData)("_grayInfo").then(function(t){(t||[]).forEach(function(t){"jxybDetailGray"==t.key&&"100"==t.num&&(e.ybDetailSwitch=!0)})})},methods:{updateAddedService:function(e,t){t&&"0"!=e&&(this.resetAddedService(),this.fetchServices())},resetAddedService:function(){var e={ext:[],jd:[],gift:[]},t=this.data.options;this.setData({checkedIdMap:e}),this.triggerEvent("updateAddedServices",{addedServices:this.organizeServices(t,e)})},onCheck:function(e){var t=this,i=e.currentTarget.dataset,r=i.id,n=i.type,s=i.gindex,a=this.data,o=a.checkedIdMap,u=a.options;console.log(r,n,s),o[n]&&(o[n].includes(r)?this.deleteCheckedId(o[n],r):((u[n][s].list||[]).forEach(function(e,i){o[n].includes(e.id)&&t.deleteCheckedId(o[n],e.id)}),o[n].push(r)),console.log(o),this.triggerEvent("updateAddedServices",{addedServices:this.organizeServices(u,o)}),this.setData({checkedIdMap:o}),c.reporter.reportClick(d.ADDED_SERVICES_CLICK),this.isPingou&&c.reporter.reportClick(d.PG_ADDED_SERVICES_CLICK))},fetchServices:function(){var e=this,t=this.skuId,i=void 0===t?"":t,r=this.category,n=void 0===r?[]:r,a=this.brandId,o=void 0===a?"":a,d=this.price,c=void 0===d?"":d,u=this.isSupportGift,l=this.isSupportPackageJd,f=this.isSupportYanbao,v=this.isPingou;i&&0!=i&&(this.loading=!0,(0,s.getAddedService)({skuId:i,jdCategory:n,brandId:o,jdPrice:c,isSupportGift:u,isSupportPackageJd:l,isSupportYanbao:f,isPingou:v}).then(function(t){e.loading=!1;var i=t.baozhang,r=void 0===i?[]:i,n=t.svcplus,s=void 0===n?[]:n,a=t.baozhangTitle,o=t.svcplusTitle,d=t.giftgou,c=void 0===d?{}:d;c=u&&c.success?c.result:{},e.baozhangTitle=a,e.svcplusTitle=o,e.options.ext=e.formatExtServers(r)||[],e.options.jd=e.formatJDServices(s)||[],e.options.gift=e.formatGiftServices(c)||[]}))},deleteCheckedId:function(e,t){e.forEach(function(i,r){i===t&&e.splice(r,1)})},organizeServices:function(e,t){var i={extServices:[],jdServices:[],giftServices:[]};return e.ext.forEach(function(e){e.list.forEach(function(e){t.ext.includes(e.id)&&i.extServices.push(e)})}),e.jd.forEach(function(e){e.list.forEach(function(e){t.jd.includes(e.id)&&i.jdServices.push(e)})}),e.gift.forEach(function(e){e.list&&e.list.forEach(function(e){t.gift.includes(e.id)&&i.giftServices.push(e)})}),i},formatJDServices:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=[];return Array.isArray(t)?(t.forEach(function(t,r){if(t&&t.fuwuSkuDetailList&&t.fuwuSkuDetailList.length){var s=0,a=t.fuwuSkuDetailList.map(function(i){var a=e.getServieFields({index:s,grpIndex:r,id:i.bindSkuId,name:i.bindSkuName,desc:i.tip||"",price:(0,n.divide)(i.price,100),isFavor:t.isFavor});return s++,a});i.push({name:t.displayName,list:a})}}),i):i},formatExtServers:function(){var e=this,t=[];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(i,r){if(i&&i.fuwuSkuDetailList&&i.fuwuSkuDetailList.length){var s=0,a=i.displayName,o=i.mainSkuId,d=[],c=i.fuwuSkuDetailList.map(function(t){var i=e.getServieFields({index:s,grpIndex:r,id:t.bindSkuId,name:t.bindSkuName,desc:t.tip,price:(0,n.divide)(t.price,100),tag:t.activityWriter||""});return s++,d.push(t.bindSkuId),i});t.push({name:a,mainSkuId:o,extServerIds:d,list:c})}}),t},formatGiftServices:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=[],n={name:"礼品包装",list:[]},s=Object.entries(e),a={packing:"礼品包装"},o=0,d=0,c=!0,u=!1,l=void 0;try{for(var f,v=s[Symbol.iterator]();!(c=(f=v.next()).done);c=!0){var p=t(f.value,2),h=p[0],S=p[1],g=a[h]||"";if(g){var m=this.getServieFields({index:o,grpIndex:d,id:S.serviceSku,name:g,desc:"精美包装服务",image:r.getImg(S.pic,50).replace(/\/img\//,"/"),price:S.price,isFavor:S.isFavor});n.list.push(m),o++}}}catch(e){u=!0,l=e}finally{try{!c&&v.return&&v.return()}finally{if(u)throw l}}return s.length&&i.push(n)&&d++,i},getServieFields:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({id:"",name:"",desc:"",image:"",price:"",tag:"",type:"",checked:!1},e)},gotoServiceIntroduce:function(e){var t=this.data.checkedIdMap,i=void 0===t?{}:t,r=e.currentTarget.dataset,n=r.mainsku,s=r.extserverids,a=void 0===s?[]:s,o=i.ext&&a.filter(function(e){if(i.ext.includes(e))return e})[0]||a[0];n&&c.gotoUrl(this,{url:"https://b.jr.jd.com/service/serveIntroduce/#/introduce?mainSkuId="+n+"&bindSkuId="+o}),c.reporter.reportClick(d.ADDED_SERVICES_INTRO_ENTRY_CLICK)}}};exports.default=u; 
 			}); 
		define("pages/item/itemBase/components/skuLayer/skuAddedService/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var t=require("../../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:t.ENV.isPingouXcx,checkedIdMap:{ext:[],jd:[],gift:[]},options:{ext:[],jd:[],gift:[]},baozhangTitle:"",svcplusTitle:"",loading:!1,ybDetailSwitch:!1},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/skuLayer/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var i=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:i.ENV.isPingouXcx,windowWidth:375,isECardOnce:!1,skuProps:[],info:{skuId:0,skuName:"",jdPrice:"",otherPrice:"",cover:"",text:"",canBuy:!0},goodsNum:{value:1,limit:1,maxLimit:200,subEnabled:!1,addEnabled:!0,limitText:""},pool:{},isPingouApp:!1,tipsContent:"",isLoading:!1,tuanInfo:{},isShowPopup:!1,isShowPopupAnim:!1,isJX:!1,showAddCartBtns:!1,afterDiscountBenfitTips:"",afterDiscountTuanTips:"",valueAddedLocShops:{},locShopSetupStatus:"1"},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/specific/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(require("../../../../../libs/promise.min.js")),r=require("./store"),a=require("../../js/model/baseModel.js"),n=require("../../js/util/util.js"),s=t(require("../../../../../common/wxcontext.js")),o=t(require("../../../../../common/http_constant.js")),c=e(require("../../../../../common/fe_helper")),u=e(require("../../constants/ptag-constants")),h=!0,l=0,p=void 0,f=void 0,g=void 0,d={props:{specificObj:{type:Object,value:{}}},store:r.storeFn,watch:{specificObj:function(e){e&&e.skuId&&this.init()}},methods:{init:function(){var e=this.specificObj,t=e.skuId,i=e.skuType,r=e.focusImages,a=e.jdCategory,n=e.isOverseaPurchase,s=e.descriptionId,o=e.isPlus,c=e.item,u=e.expAttr,h=a&&a[2],l=a&&a[1];h&&["13690","13691","18578","18577"].includes(h)&&(this.showInstallText=!0),this.imageSizeInfo||(this.imageSizeInfo={}),this.renderSpecific(t,i,c,u,l),this.renderDetailContent({skuId:t,skuType:i,focusImages:r,jdCategory:a,isOverseaPurchase:n,descriptionId:s,isPlus:o})},switchTab:function(e){var t=e.currentTarget.dataset.tab;switch(t){case 0:this.$report("DETAIL_TAB_INTRO");break;case 1:this.$report("DETAIL_TAB_SPECS");break;case 2:this.$report("DETAIL_TAB_AFTER_SALE")}this.tab.index=t},renderSpecific:function(e,t,i,r,a){var n=this;this.getSpec(e,t,i,r,function(t,i){t?console.log("^^^^^^ 商详-包装清单、商品参数拉取失败",t):(n.tab.specs.packInfo=i.packInfo,n.tab.specs.specific=i.specific.slice(),n.tab.service.content=i.afterSale);var r=n.tab.specs.specific;r.push({title:r.length?"其他":"",content:[["商品编号",e]]}),["9193","9194","9195"].indexOf(a)>=0&&r[0].content.forEach(function(e){"蓝帽标识"===e[0]&&"保健食品（食健字）"===e[1]&&n.triggerEvent("showExtraTips","保健食品不具有疾病预防、治疗功能，本品不能替代药物")}),n.tab.specs.specific=r,n.tab.specs.tips=""})},renderDetailContent:function(e){var t=this,i=e.skuId,r=e.skuType,a=e.focusImages,n=e.jdCategory,s=e.isOverseaPurchase,o=e.descriptionId,u=e.isPlus;n[0]&&s&&this.getGlobalNotice(n[0],s).then(function(e){var i=[];e.forEach(function(e){e.forEach(function(e){e=c.getImg(e),i.push(e)})}),i=i.map(function(e,i){var r=c.getImg(e),a=t.imageSizeInfo[r]||{};return{url:r,width:t.rpx2px(a.width?a.width:0)+"px",height:t.rpx2px(a.height?a.height:0)+"px"}}),t.tab.intro.notices=i}).catch(function(e){}),this.getInfo(i,r,o,u).then(function(e){t.isBookOrDisk="2"==r||"3"==r;var i=[];e&&e.length?t.isBookOrDisk?(e.forEach(function(e){e.content.forEach(function(e){"image"==e.type&&(i.push(e.value),e.imgIdx=i.length-1)})}),t.tab.intro.contents=e):i=e:i=a.slice(),i=i.map(function(e,i){var r=c.getImg(e),a=t.imageSizeInfo[r]||{};return{url:r,width:t.rpx2px(a.width?a.width:0)+"px",height:t.rpx2px(a.height?a.height:0)+"px"}}),t.tab.intro.images=i,t.tab.intro.tips=""}).catch(function(e){var i=a.map(function(e,i){var r=c.getImg(e),a=t.imageSizeInfo[r]||{};return{url:r,width:t.rpx2px(a.width?a.width:0)+"px",height:t.rpx2px(a.height?a.height:0)+"px"}});t.tab.intro.images=i,t.tab.intro.tips=""})},imageDidLoad:function(e){var t=e.target.dataset.idx,i=e.target.dataset.src,r=e.target.dataset.type,a=e.detail.naturalWidth||e.detail.width,n=e.detail.naturalHeight||e.detail.height;a>400&&(this.imageSizeInfo[i]={width:750,height:Math.round(750*n/a)},this.tab.intro[r][t]&&(this.tab.intro[r][t].url=i,this.tab.intro[r][t].width=this.rpx2px(this.imageSizeInfo[i].width)+"px",this.tab.intro[r][t].height=this.rpx2px(this.imageSizeInfo[i].height)+"px"))},onHandleTouchStart:function(e){this.startTime=e.timeStamp},onHandleTouchEnd:function(e){this.endTime=e.timeStamp},onHandleTap:function(e){if(!(this.endTime-this.startTime>=350)&&(n.ENV.isPingouXcx||this.specificObj.isPingouShop&&this.specificObj.isPingou)){var t=(e.target&&e.target.dataset).src;t&&(s.default.previewImage({current:t,urls:[t]}),n.reporter.reportClick(u.CLICK_DETAIL_PIC))}},onHandleLongPress:function(e){var t=this;(n.ENV.isPingouXcx||this.specificObj.isPingouShop&&this.specificObj.isPingou)&&(this.setData({isShowPopup:!0}),setTimeout(function(){t.setData({isShowPopupAnim:!0})},100),n.reporter.reportExposure(u.EXP_LONGPRESS_DETAIL_PIC_PANNEL))},onClosePannel:function(e){var t=this;this.setData({isShowPopupAnim:!1}),setTimeout(function(){t.setData({isShowPopup:!1})},500),e&&n.reporter.reportClick(u.CLICK_LONGPRESS_PANNEL_CANCEL)},onShare:function(){this.onClosePannel(),n.reporter.reportClick(u.CLICK_LONGPRESS_PANNEL_SHARE)},onMakePoster:function(){this.triggerEvent("onShowShareDetail"),this.onClosePannel(),n.reporter.reportClick(u.CLICK_LONGPRESS_PANNEL_POSTER)},resetAllParam:function(){p=[],f={},g="",l=0},SpecCallback:function(e,t,i,r){var a=function(e){var t=[];try{var i=/<[tr].*?>(.*?)tr>/gi,r=/([^>]*?)<\/th>/gi,a=/([^>]*?)<\/td>/gi,n=e.match(i),s=void 0;if(n){for(var o=0;o<n.length;o++){var c=n[o].match(r);if(c&&c[0])s&&t.push(s),(s={}).content=[],s.title=c[0].replace("</th>","");else{var u=n[o].match(a);if(u){for(var h=[],l=0;l<u.length;l++)h.push(u[l].replace("</td>",""));s.content.push(h)}}}s&&(t.push(s),s=null)}}catch(e){console.log("createSpecArray Fail"+e)}return t},s=function(e,t){var i=[],r={};if(r=e||(t||{})){var a={};a.content=[],a.title="";for(var n in r){var s=[],o="";o=(s=r[n]||[])instanceof Array?s[0]:s;var c=[];c.push(n),c.push(o),a.content.push(c)}i.push(a)}return i};this.success=function(o){var c={};if("1"==e?((p=a(o))||(p=s(t,i)),l++):"2"==e&&(g=(0,n.delHtmlTag)(o.afterSale),f=(0,n.delHtmlTag)(o.packList),l++),2==l&&(c.afterSale=g,c.packInfo="string"==typeof f?f:"",c.specific=p,l=0,h))return h=!1,r(null,c)},this.fail=function(e){if(console.log("specCallback Error:",e),h)return h=!1,r("specCallback Error")}},failBack:function(e,t){var i="";switch(t=t||'"Network Error"',e){case o.default.RET_HTTP_RESPONSE_ERROR:i=o.default.Text_RET_HTTP_RESPONSE_ERROR;break;case o.default.RET_WS_CONNECT_ERROR:i=o.default.Text_RET_WS_CONNECT_ERROR;break;case o.default.RET_WS_REQUEST_TIMEOUT:i=o.default.Text_RET_WS_REQUEST_TIMEOUT;break;default:i=t}return i},splitBrImgTag:function(e,t){e.split(/<br[^>]+>/gi).forEach(function(e){if(e.indexOf("src")>0){var i=/<[img|IMG].*?src=["|'](.*?)["|']/gi,r=/src=['"]?([^'"]*)['"]?/i,a=e.match(i);if(a)for(var s=0;s<a.length;s++){var o=a[s].match(r);if(o[1]){var c={};c.type="image",c.value=o[1],t.push(c)}}}var u=(0,n.delHtmlTag)(e).replace("　　","");if(u){var h={};h.type="string",h.value=(0,n.htmlDecodeByRegExp)(u),t.push(h)}})},getInfo:function(e,t,r,s){var o=this,c=e,u=r||"d"+c;return new i.default(function(i,r){(0,a.detailImages)({skuId:e,descriptionId:u,isPlus:s}).then(function(e){if("2"===t||"3"===t){var a=t,s={productFeatures:"产品特色",editerDesc:"编辑推荐",contentDesc:"内容简介",authorDesc:"作者简介",image:"内页插图",comments:"精彩书评",catalogue:"目录",bookAbstract:"精彩书摘",introduction:"前言/序言"},c={productFeatures:"产品特色",editerDesc:"编辑推荐",contentDesc:"专辑介绍",biography:"艺人介绍",catalogue:"曲目",comments:"精彩赏评",image:"精彩剧照",mvdColor:"色差"};if("1"==e.success){var u=[],h=2==a?s:c;for(var l in h)if(e[l]){var p={},f=[];if("image"==l){p.title=h[l];for(var g=e[l].split(";")||[],d=0,m=g.length;d<m;d++){var v={};v.type="image",v.value=g[d],f.push(v)}p.content=f,u.push(p)}else if(e[l].indexOf("<p>")>=0){var _=/<p>(.*?)<\/p>/gi,S=e[l].match(_);if(S){for(var b=0;b<S.length;b++)o.splitBrImgTag(S[b],f);f.length>0&&(p.title=h[l],p.content=f,u.push(p))}}else o.splitBrImgTag(e[l],f),p.title=h[l],p.content=f,u.push(p)}if(0==u.length){var I=e.content.match(/<img.*?>/g);if(I){var P=I.map(function(e){var t=e.match(/\ssrc=['"](.*?)['"]/);return t&&{type:"image",value:t[1]}}).filter(function(e){return e});P.length&&u.push({content:P})}}return i(u)}r("该商品暂无商品详情")}else{if(!e||!e.content)return r("没有图片");var E=/<div[^>]+skudesign="100011"[^>]*>/gi;if((e=(e=e.content).replace(/\\/gi,"").replace(/\n/gi,"").replace(/\r/gi,"")).match(E)){var T=/<div[^>]+id="zbViewWeChatMiniImages"[^>]+value="([^>]*)">/i,x=e.match(T);if(x&&x.length>1&&x[1]){var C=x[1].split(",").map(function(e){return"https://img30.360buyimg.com"+e});return void i(C)}}var k=[],y=/background-image:url\((.*?)\)/gi,R=e.match(y);if(R)for(var N=0;N<R.length;N++)if(R[N].indexOf("360buyimg")){var O=R[N].replace("background-image:url(","").replace(")","");(0,n.validImgUrl)(O)&&k.push(O)}var D=/[(&lt;)<][img|IMG].*?src=["|'](.*?)["|']/gi,A=/src=['"]?([^'"]*)['"]?/i,w=e.match(D);if(w)for(var L=0;L<w.length;L++){var j=w[L].match(A);(0,n.validImgUrl)(j[1])&&k.push(j[1])}k.length>0?i(k):r("没有图片")}}).catch(function(e){var t=e.code,i=e.message,a=o.failBack(t,i);r(a)})})},getSpec:function(e,t,i,r,n){if(this.resetAllParam(),2==t||3==t){var s={},o=[],c={content:[],title:2==t?"图书参数":"音像参数"},u={ISBN:"ISBN",ISSN:"ISSN",BookName:"营销书名",ForeignBookName:"外文书名",Language:"图书语言",Author:"作者",Editer:"编者",Proofreader:"校对",Remarker:"注释",Transfer:"译者",Drawer:"绘者",Publishers:"出版社",PublishNo:"出版社号",Series:"丛书名",Brand:"品牌",Package:"包装(装帧)",Pages:"页数",BatchNo:"版次",PublishTime:"出版时间",SizeAndHeight:"尺寸及重量",ChinaCatalog:"中国法分类号",Sheet:"印张",Papers:"用纸",Attachment:"附件",AttachmentNum:"附件数量",PackNum:"套装数量",Letters:"字数",KeyWords:"主题词",PickState:"捡货标记",Compile:"编纂",Photography:"摄影",Dictation:"口述",Read:"朗读",Finishing:"整理",Write:"书写",saleDate:"上架时间",Format:"开本"},l={Aka:"又名",Brand:"品牌",Foreignname:"外文名",ISBN:"ISBN",Mvd_Wxjz:"文像进字",Mvd_Gqyz:"国权音字",Mvd_wyjz:"文音进字",ISRC:"ISRC",Mvd_Dcz:"电出字",Mvd_Xcyg:"新出音管",Press:"出版社",Publishing_Company:"发行公司",Production_Company:"出品公司",Copyright:"版权提供",Actor:"演员",Director:"导演",Dub:"配音",Voiceover:"解说者",Screenwriter:"编剧",Producer:"监制",Singer:"演唱者",Performer:"演奏者",Authorsstr:"作词",Compose:"作曲",Command:"指挥",Orchestra:"知名乐团",Media:"介质",Soundtrack:"碟数",Number_Of_Discs:"碟片数",Episode:"集数",Record_Number:"唱片数量",Publication_Date:"出版日期",Release_Date:"投放市场的日期",ReleaseDate:"上映日期",Accessories:"附件",Included_Additional_Item:"附件数量",Set_The_Number_Of:"套装数量",Region:"区码",Length:"片长",Screen_Ratio:"屏幕比例",Audio_Encoding_Chinese:"音频格式",Quality_Description:"品质说明",Dregion:"地区",Language:"图书语言",Language_Dubbed:"配音语言",Language_Subtitled:"字幕语言",Version_Language:"版本语言",Language_Pronunciation:"发音语言",Menu_Language:"菜单语言",Platform:"操作系统",Minimum_System_Requirement_Description:"最低配置要求",Recommended_System_Description:"推荐配置要求",Online_Play_Description:"在线游戏",Awards:"获奖情况",Type_Keywords:"商品类型关键词",Keywords:"主题词",Readers:"读者对象",Number_Of_Players:"游戏人员数量",Mfg_Minimum:"最小年龄",Mfg_Maximum:"最大年龄",Compile:"编纂",Photography:"摄影",Dictation:"口述",Read:"朗读",Finishing:"整理",Write:"书写",Version:"产品评级（可链入搜索结果页）",Color:"厂牌（可链入搜索结果页）",Type:"录音模式",Format:"画面色彩",saleDate:"上架时间:"},p=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},f=2==t?u:l;for(var g in f){var d=[];if(i&&i[g]){if(p(i[g])){for(var m,v=[],_=0,S=i[g].length;_<S;_++)(m=i[g][_].replace(/(^\s*)|(\s*$)/g,""))&&v.push(m);if(v.length<1)continue;d.push(f[g]),d.push(v.join(","))}else d.push(f[g]),d.push(i[g]);c.content.push(d)}}return o.push(c),s.afterSale="",s.packInfo="",s.specific=o,n(null,s)}h=!0,e=(""+e).trim();var b=new this.SpecCallback("1",r,i.expandAttrDesc,n);(0,a.specInfo)({skuId:e,type:1}).then(function(e){b.success(e)},function(e){var t=e.code;e.message;b.fail(t)});var I=new this.SpecCallback("2",r,i.expandAttrDesc,n);(0,a.specInfo)({skuId:e,type:2}).then(function(e){I.success(e)}).catch(function(e){var t=e.code;e.message;I.fail(t)})},getGlobalNotice:function(e,t){if(!e||!t)return i.default.resolve([]);var r=/<img\b.*?(?:>|\/>)/gi,n=/<img\b.*?src=["|'](.*?)["|']/;return(0,a.globalNotice)({jdCategory:e,isOverseaPurchase:t}).then(function(e){if(e.notices&&e.notices.length){var t=[];return e.notices.forEach(function(e){var i=e.htmlNotice.match(r),a=[];i&&i.forEach(function(e){var t=n.exec(e);t[1]&&a.push(t[1])}),t.push(a)}),t}return[]}).catch(function(e){var t=e.code,r=e.message;return i.default.reject({code:t,message:r})})}}};exports.default=d; 
 			}); 
		define("pages/item/itemBase/components/specific/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,isBookOrDisk:!1,showInstallText:!1,isShowPopup:!1,isShowPopupAnim:!1,tab:{index:0,intro:{tips:"努力加载中...",contents:[],notices:[],images:[]},specs:{tips:"努力加载中...",packInfo:"",specific:[]},service:{content:""},minHeight:0}},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/suyuanVideo/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store"),t={props:{videos:Array,isPingou:Boolean},store:e.storeFn,data:{fristPlay:!0},methods:{gotoCinema:function(e){var t=e&&e.currentTarget.dataset,r=t.url,o=t.type;r&&(!("wifi"==(getApp()||{}).networkType)&&this.fristPlay&&(this.fristPlay=!1,this.triggerEvent("showVideoToast")),this.setData({showVideo:o,url:r}))},back:function(){this.setData({showVideo:!1})},liveError:function(e){console.error("live-player error:",e.detail.errMsg)}}};exports.default=t; 
 			}); 
		define("pages/item/itemBase/components/suyuanVideo/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeFn=void 0;var e=require("../../js/util/util");exports.storeFn=function(){return{state:{isPingouXcx:e.ENV.isPingouXcx,showVideo:!1,url:""},actions:{}}}; 
 			}); 
		define("pages/item/itemBase/components/wqDialog/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store"),e={props:{dialogOpt:{type:Object,default:function(){return{show:!1,title:"",type:"",specMsgArr:[],useNewStyle:!1,hideIcon:!1,hideClose:!1,selfIconCls:"",titleMsg:"",msg:"",mediumMsg:"",mediumMsgs:"",smallMsg:"",selfMsg:"",confirmBtnTxt:"",cancelBtnTxt:"",onConfirm:function(){},onCancel:function(){},selfBtns:[]}}},onConfirm:{type:Function,default:function(){return function(){}}}},store:t.storeFn,created:function(){this.dialogOpt&&(this.setDialog(this.dialogOpt),this.setStoreByKey("show",this.dialogOpt.show))},watch:{dialogOpt:{handler:function(t){t&&(this.setDialog(t),this.setStoreByKey("show",t.show))},deep:!0}},methods:{setDialog:function(t){var e=this,s=[];t.cancelBtnTxt&&s.push({btnTxt:t.cancelBtnTxt,btnCls:t.btnCls||"btn_2",clickEvn:function(){e.close(),e.$emit("cancel")}}),t.confirmBtnTxt&&s.push({btnTxt:t.confirmBtnTxt,btnCls:t.btnCls||"btn_1",clickEvn:function(){"jxappcoupon"!=t.type&&e.close(),e.$emit("confirm")}}),this.setStoreByKey("dialog",{useNewStyle:t.useNewStyle,hideIcon:t.hideIcon,hideClose:t.hideClose,title:t.title,selfIconCls:t.selfIconCls,msg:t.msg,titleMsg:t.titleMsg,mediumMsg:t.mediumMsg,mediumMsgs:t.mediumMsgs,smallMsg:t.smallMsg,selfMsg:t.selfMsg,type:t.type,specMsgArr:t.specMsgArr,onCancel:t.onCancel,onConfirm:t.onConfirm,btns:s})},btnClick:function(t){var e=(t.xcxEvent||t).currentTarget.dataset.btnIndex;if(null!=e&&e>-1){var s=this.dialog.btns[e];s&&s.clickEvn&&(this.show&&s.closeAfterClick&&this.close(),"function"==typeof s.clickEvn?s.clickEvn():this.$emit(s.clickEvn+""))}},close:function(){this.setData({show:!1}),this.setStoreByKey("show",!1),this.$emit("childhide")}}};exports.default=e; 
 			}); 
		define("pages/item/itemBase/components/wqDialog/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){var e={state:{dialog:{},show:!1},actions:{setStoreByKey:function(t,o){e[t]=o}}};return e}; 
 			}); 
		define("pages/item/itemBase/constants/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.apiUrlMap=void 0;var t=require("../js/util/util");exports.apiUrlMap={itemInfo:t.ENV.isXcxEnv?"https://wqitem.jd.com/item/waview":"https://wqitem.jd.com/item/view2",realStock:"https://c.3.cn/stock",mainVideo:"https://wq.jd.com/commodity/extension/getplayurl",alloverImg:"https://wq.jd.com/commodity/extension/alloverimg",eBook:"https://gw-e.jd.com/forBookCode/forBookCode_getBathEbookIdForJs.action",itemCheckFav:"https://wq.jd.com/fav/comm/FavManyCommQuery",itemAddFav:"https://wq.jd.com/fav/comm/FavCommAdd",itemDelFav:"https://wq.jd.com/fav/comm/FavCommDel",couponList:"https://wq.jd.com/bases/couponsoa/avlCoupon",userThirdBuy:"https://wq.jd.com/mjgj/column/QueryUserThirdBuyUnactStatus",isNewUser:"https://wq.jd.com/userattribute/QueryIsNewUser",userFinance:"https://wq.jd.com/mjgj/column/JudgeFinanceIdentify",couponPool:"https://wq.jd.com/activepersistent/couponrecommend/queryuseractiveinfo",verifyAuthUrl:"https://wq.jd.com/vipplus/LoginBrigdeAuthName",obtainFreeCoupon:"https://wq.jd.com/activeapi/obtainjdshopfreecouponv2",verifyAuthUser:"https://wq.jd.com/vipplus/VerifyAuthUser",activeDraw:"https://wq.jd.com/active/active_draw",jxNewerActiveDraw:"https://wq.jd.com/pdc/sxst/draw",switchPin:"https://wq.jd.com/pinbind/switchAccount",jxAppCouponList:"https://wq.jd.com/activepersistent/couponrecommend/queryjxappvipcoupon",obtainjxAppCoupon:"https://wq.jd.com/activepersistent/couponrecommend/receivejxappvipcoupon",obtainfterDiscountCoupons:"https://wq.jd.com/pdc/sxst/multidraw",samCardStatus:"https://wq.jd.com/samclubmember/getcardstate",profitBelt:"https://wq.jd.com/bases/waistbandservice/newbelt",queryPinStatus:"https://wq.jd.com/pinbind/QueryPinStatus",peijianCategory:"https://wq.jd.com/commodity/peijian/categorylist",btInfo:"https://wq.jd.com/commodity/btinfo/get",guessYouLike:"https://wq.jd.com/mcoss/reclike/getrecinfo",pinYouLike:"https://wq.jd.com/mcoss/data/get",usedWareRecommend:"https://used-api.jd.com/productRelation/ware/recommend",suitInfo:"https://c.3.cn/recommend",addressList:"https://wq.jd.com/deal/recvaddr/getrecvaddrlistV3",getVenderInfo:"https://wq.jd.com/mshop/BatchGetShopInfoByVenderId",shopCheckFav:"https://wq.jd.com/fav/shop/QueryOneShopFav",shopAddFav:"https://wq.jd.com/fav/shop/AddShopFav",shopDelFav:"https://wq.jd.com/fav/shop/DelShopFav",getShopGiftList:"https://wq.jd.com/shopbranch/QueryShopGiftList",getShopSignStatus:"https://wq.jd.com/shopbranch/QueryShopSignDraw",getShopActivityList:"https://wq.jd.com/fav_snsgift/QueryShopActive",drawShopActivityGift:"https://wq.jd.com/fav_snsgift/GiveShopGift",getActInfo:"https://wq.jd.com/cutitem/MGetActInfoBySku",getAnswerList:"https://wq.jd.com/questionanswer/GetSkuQuestionListWeChat",cpsSkuInfo:"https://wq.jd.com/pgcps/GetCpsSkuInfo",unionUser:"https://wq.jd.com/pgcps/GetUserInfo",wqToken:"https://wq.jd.com/pinbind/TokenRedirectForWxApp",detailImages:"https://wq.jd.com/commodity/introduction/get",globalNotice:t.ENV.isXcxEnv?"https://hk.jd.com/notice/getInfo.do":"https://www.jd.hk/notice/getInfo.do",specInfo:"https://yx.3.cn/service/info.action",specification:"https://wq.jd.com/commodity/itembranch/getspecification",addCart:"https://wq.jd.com/deal/mshopcart/addcmdy",addCardList:"https://wqjsf.jd.com/giftcardsoaCartService/addCart",checkChat:"https://chat1.jd.com/api/checkChat",isErshouSku:"https://wq.jd.com/commodity/ershou/GetSkuNumByUsed",isNewSku:"https://wq.jd.com/commodity/ershou/GetSkuByUsedSku",huanxinEnter:"https://hsapi.jd.com/urlM",addedService:"https://wq.jd.com/commodity/jdsbranch/get",feedList:"https://wq.jd.com/shopgroup_api_feed/GetSkuFeedList",cateCnName:"https://wq.jd.com/commodity/extension/getcatcnname",storeInfo:"https://wq.jd.com/commodity/extension/StoreInfo",brandStoreInfo:"https://wq.jd.com/bases/offlinestoreservice/getoffinestore",valueAddedLocShops:"https://wq.jd.com/bases/valueaddedlocshop/hasvalueaddedlocshops",cashBack:"https://wq.jd.com/jdcashback/active/queryActive",addFamilyList:"https://wq.jd.com/commodity/wish/addsku",removeFamilyList:"https://wq.jd.com/commodity/wish/delsku",shopMemberCard:"https://wq.jd.com/commodity/extension/shopmember",_grayInfo:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev33156.jsonp",_categoryInfo:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev33146.jsonp",_itemTitleTag:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev34162.jsonp",_bigPromoteList:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev33978.jsonp",_itemPromote:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev31246.jsonp",_bindingGift:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev34978.jsonp",_easeServiceIconCode:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev35152.jsonp",accessoryInfo:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev33316.jsonp",_jdpayInfo:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev34102.jsonp",guessGray:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev33876.jsonp",_cpsShareInfo:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev35260.jsonp",_itemInsurance:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev33252.jsonp",_itemEnterInfo:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev33558.jsonp",itemWhitelist:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev35502.jsonp",_plusTip:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev35712.jsonp",_adultCategoryInfo:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev35602.jsonp",_kernelProps:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev36260.jsonp",newerTuanConfig:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev33036.jsonp",_specText:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev36194.jsonp",_verderList:"http://wq.360buyimg.com/data/ppms/js/ppms.pagev35154.jsonp",_recommendTabsSwitch:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev36300.jsonp",_cartConfig:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev36394.jsonp",_newerTuanTipConfig:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev36698.jsonp",_linkConfig:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev36774.jsonp",_jxCommentAnswerYlConfig:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev36668.jsonp",_itemArrivalNotice:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev36958.jsonp",_jxItemShareConfig:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev36996.jsonp",_jdItemShareConfig:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev37296.jsonp",_itemCouponJxV2:"https://wq.360buyimg.com/data/ppms/js/ppms.pagev37368.jsonp",getNearLocShop:"https://wq.jd.com/commodity/lbslocshop/getnearlocshop",getShopAllAddr:"https://wq.jd.com/commodity/lbslocshop/getaddrtree",getShopListById:"https://wq.jd.com/commodity/lbslocshop/getshoplistbyaddrid",changelaglat:"https://wq.jd.com/deal/trademisc/getregioninfobylnglat",getRealPrice:"https://pe.3.cn/prices/pcpmgets",getCommentList:"https://wq.jd.com/commodity/comment/getcommentlist",getLimitBuyInfo:"https://wq.jd.com/commodity/jdsbranch/get",getRecommendDaojiaSku:"https://wq.jd.com/commodity/extension/recommenddaojiasku",pingouTuanStatus:"https://wq.jd.com/pingou_core/GetTuanStatus_UTF8",pingouPrice:"https://wq.jd.com/pingou_api/getskusprice",pingouRecommendTuan:"https://wq.jd.com/pingou_core/GetIsNewUserSku",getNewerTuanSwitch:"https://wq.jd.com/jdcashback/active/queryActive",getCustomUrl:"https://wq.jd.com/commodity/bespoke/getpageurl"}; 
 			}); 
		define("pages/item/itemBase/constants/constants.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.ITEM_SHARE_TYPE={BYBT:"bybt",YYXR:"yyxr",XSGF:"xsgf",XSQF:"xsqf",JRBP:"jrbp",GCZG:"gczg",XRQF:"xrqf"}; 
 			}); 
		define("pages/item/itemBase/constants/ptag-constants.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.EXP_DETAIL_INIT="7418.9.3",exports.EXP_DETAIL_MAINLOAD="7418.9.4",exports.VIEW_BUYING="7418.2.1",exports.VIEW_ADD_TO_CART="7418.2.2",exports.VIEW_GO_TO_CART="7418.2.3",exports.VIEW_GOODS_PROPERTY="7418.4.2",exports.VIEW_SELECT_COUNTS="7418.4.3",exports.VIEW_SUIT="7418.10.2",exports.VIEW_SUIT_ADD_TO_CART="7418.10.3",exports.DETAIL_NAME="7418.12.4",exports.DETAIL_SERVICE="7418.12.5",exports.EXP_VIEW_CAN_BUY="7418.9.1",exports.EXP_VIEW_CANNOT_BUY="7418.9.2",exports.EXP_VIEW_INTRODUCE="7418.3.1",exports.EXP_VIEW_FOLD_ADDRESS=" 7418.5.2",exports.EXP_VIEW_PROMOTE=" 7418.5.2",exports.EXP_VIEW_COUPON="7418.7.1",exports.EXP_VIEW_SUIT="7418.10.1",exports.VIEW_RETURN_HOME_EXP="7418.12.14",exports.VIEW_RETURN_HOME="7418.12.15",exports.VIEW_FOLD_GOODS="7418.4.1",exports.VIEW_FOLD_ADDR="7418.5.1",exports.VIEW_FOLD_PROMOTIONS="7418.6.1",exports.DETAIL_LOOK_SIMILAR_BUTTON_EXP="7418.12.16",exports.DETAIL_LOOK_SIMILAR_BUTTON="7418.12.17",exports.DETAIL_STOCK_NOTICE_EXP="7418.12.18",exports.DETAIL_STOCK_NOTICE="7418.12.19",exports.DETAIL_EBOOK_PREVIEW_EXP="7418.12.27",exports.DETAIL_EBOOK_PREVIEW="7418.12.28",exports.DETAIL_MAIN_VIDEO_EXP="7418.12.29",exports.DETAIL_MAIN_VIDEO="7418.12.30",exports.DETAIL_ALLIMG_EXP="7418.12.31",exports.DETAIL_ALLIMG="7418.12.32",exports.DETAIL_3D_IMG_EXP="7418.12.47",exports.DETAIL_3D_IMG="7418.12.48",exports.DETAIL_NAV_TAB_EXP="7418.12.35",exports.DETAIL_NAV_TAB_GOODS="7418.12.36",exports.DETAIL_NAV_TAB_COMMENT="7418.12.37",exports.DETAIL_NAV_TAB_DETAIL="7418.12.38",exports.DETAIL_NAV_TAB_RECOMMEND="7418.12.39",exports.DETAIL_GLOBAL_SERVICE_EXP="7418.12.20",exports.DETAIL_GLOBAL_SERVICE="7418.12.21",exports.DETAIL_ANSWER_LIST_EXP="7418.12.22",exports.DETAIL_ANSWER_LIST="7418.12.23",exports.CLICK_ANSWER_FLOOR="7418.12.69",exports.DETAIL_ACCESSORIES_RECOMMEND_EXP="7418.12.24",exports.DETAIL_ACCESSORIES_RECOMMEND_ALL="7418.12.25",exports.DETAIL_ACCESSORIES_RECOMMEND_CATEGORY="7418.12.26",exports.DETAIL_ADDRESS_LAYER_EXP="7418.12.34",exports.DETAIL_ADDRESS_LAYER_ITEM="7418.12.33",exports.CLICK_HEADER_SHARE_BTN_PG="7418.16.87",exports.CLICK_SHARE_BTN_PG="7418.13.16",exports.DETAIL_SHARE_BTN="7418.12.40",exports.DETAIL_SHARE_BTN_2="7418.15.7",exports.DETAIL_SHARE_BTN_3="7418.15.8",exports.DETAIL_SHARE_BTN_4="7418.15.9",exports.DETAIL_SHARE_BTN_5="7418.15.10",exports.DETAIL_SHARE_TIP_EXP="7418.12.41",exports.DETAIL_SHARE_TIP_CLOSE="7418.12.42",exports.DETAIL_SHOP_CLICK="7001.1.274",exports.DETAIL_SHOP_EXP="7001.1.273",exports.DETAIL_APP_SHARE="7001.9.1",exports.DETAIL_SHARE_TO_FRIEND="7418.13.1",exports.DETAIL_SHARE_TO_FRIEND_2="7418.15.1",exports.DETAIL_SHARE_TO_FRIEND_3="7418.15.3",exports.DETAIL_SHARE_TO_FRIEND_4="7418.15.5",exports.DETAIL_SHARE_TO_FRIEND_5="7418.15.11",exports.DETAIL_SHARE_TO_TIMELINE="7418.13.2",exports.DETAIL_SHARE_BTN_SAVE="7418.13.3",exports.DEATIL_SHARE_SAVE_SUCCESS="7418.13.4",exports.DETAIL_SHARE_FROM_FRIEND="7418.13.5",exports.DETAIL_SHARE_FROM_FRIEND_2="7418.15.2",exports.DETAIL_SHARE_FROM_FRIEND_3="7418.15.4",exports.DETAIL_SHARE_FROM_FRIEND_4="7418.15.6",exports.DETAIL_SHARE_FROM_FRIEND_5="7418.15.12",exports.DETAIL_SHARE_FROM_TIMELINE="7418.13.6",exports.DETAIL_SHARE_LAYER_CLOSE="7418.13.11",exports.DETAIL_SHARE_DETAIL_LAYER_CLOSE="7418.13.12",exports.DETAIL_SHARE_PIC_SUCCESS="7418.13.9",exports.DETAIL_SHARE_PIC_FAIL="7418.13.10",exports.CLICK_JX_RIGHT_TOP_SHARE_BTN="7418.16.79",exports.CLICK_JX_SHARE_BTN="7418.16.80",exports.CLICK_JX_SHARE_PANNEL_HWQ_BTN="7418.16.81",exports.CLICK_JX_SHARE_PANNEL_SHARE_TO_FRIEND_BTN="7418.16.82",exports.CLICK_JX_SHARE_PANNEL_HB_BTN="7418.16.83",exports.CLICK_JX_SHARE_PANNEL_CLOSE_BTN="7418.16.84",exports.EXP_DETAIL_BUYING_SPREE_BTN="7536.1.1",exports.DETAIL_BUYING_SPREE_BTN="7536.1.2",exports.EXP_DETAIL_BUYING_SPREE_STOCK="7536.1.3",exports.EXP_DETAIL_SUBSCRIBE_BTN="7538.1.1",exports.DETAIL_SUBSCRIBE_BTN="7538.1.2",exports.EXP_DETAIL_SUBSCRIBE_SECKILL_BTN="7538.1.3",exports.DETAIL_SUBSCRIBE_SECKILL_BTN="7538.1.4",exports.MAIN_VIDEO_SHOW="7418.14.1",exports.MAIN_VIDEO_PLAY="7418.14.2",exports.MAIN_VIDEO_CANCEL_PLAY="7418.14.3",exports.MAIN_VIDEO_CHECKOUT_IMAGES="7418.14.4",exports.MAIN_VIDEO_DIALOG="7418.14.5",exports.MAIN_VIDEO_DIALOG_CANCEL="7418.14.6",exports.MAIN_IMAGE_CLICK="7418.14.13",exports.VIEW_COUPON="7418.7.2",exports.EXP_DETAIL_COUPON_AREA="7418.7.9",exports.CLICK_COUPON_FLOOR="7418.7.10",exports.EXP_DISCOUNT_COUPON="7418.7.3",exports.DETAIL_DISCOUNT_SUCC="7418.7.4",exports.DETAIL_COUPON_SUCC="7418.7.7",exports.DETAIL_COUPON_FAIL="7418.7.8",exports.DETAIL_BINDING_COUPON_EXP="138268.5.1",exports.DETAIL_BINDING_COUPON_BTN="138268.4.1",exports.EXP_COUPON_FLOOR_MM="7418.7.11",exports.EXP_COUPON_FLOAT_MM="7418.7.12",exports.CLICK_COUPON_FLOAT_MM="7418.7.13",exports.SUCC_COUPON_FLOAT_MM="7418.7.14",exports.EXP_COUPON_FLOAT_MMJT="7418.7.15",exports.CLICK_COUPON_FLOAT_MMJT="7418.7.16",exports.SUCC_COUPON_FLOAT_MMJT="7418.7.17",exports.EXP_DETAIL_PROMOTION="7418.6.2",exports.EXP_DETAIL_PROMOTION_SEARCH="7418.6.5",exports.DETAIL_PROMOTION_SEARCH="7418.6.6",exports.EXP_DETAIL_EXCHANGE="7418.6.3",exports.DETAIL_EXCHANGE="7418.6.4",exports.EXP_DETAIL_GIFT_PROMOTION="7418.6.7",exports.DETAIL_GIFT_PROMOTION="7418.6.8",exports.EXP_DETAIL_SUIT="7418.6.9",exports.DETAIL_SUIT="7418.6.10",exports.DETAIL_TAB_INTRO="7418.3.2",exports.DETAIL_TAB_SPECS="7418.3.3",exports.DETAIL_TAB_AFTER_SALE="7418.3.4",exports.EXP_DETAIL_FOOTER_SHOP="7418.2.4",exports.DETAIL_FOOTER_SHOP="7418.2.5",exports.EXP_DETAIL_FOOTER_SERVICE="7418.2.6",exports.DETAIL_FOOTER_SERVICE="7418.2.7",exports.EXP_DETAIL_SHOP_FLOOR="7418.11.1",exports.DETAIL_SHOP_FANS="7418.11.2",exports.DETAIL_SHOP_ALL="7418.11.3",exports.DETAIL_GOTO_SHOP="7418.11.4",exports.EXP_DETAIL_SHOP_FAV="7418.11.5",exports.DETAIL_SHOP_FAV="7418.11.6",exports.EXP_DETAIL_SHOP_UNFAV="7418.11.7",exports.DETAIL_SHOP_UNFAV="7418.11.8",exports.EXP_DETAIL_FOOTER_SAM_BUY="7418.2.8",exports.DETAIL_FOOTER_SAM_BUY="7418.2.9",exports.EXP_DETAIL_SAM_BING="7418.2.10",exports.DETAIL_SAM_BIND="7418.2.11",exports.EXP_DETAIL_SAM_BUY="7418.12.3",exports.EXP_DETAIL_OPEN_PLUS="7418.12.1",exports.DETAIL_OPEN_PLUS="7418.12.2",exports.EXP_VIEW_COMMENTS="7418.8.1",exports.VIEW_COMMENT="7418.8.2",exports.VIEW_ENTRY_TOP="7418.8.12",exports.VIEW_ENTRY_BOTTOM="7418.8.13",exports.VIEW_ENTRY_TEXT="7418.8.14",exports.EXP_DETAIL_FOLD_COMMENT="7418.8.3",exports.DETAIL_FOLD_COMMENT="7418.8.4",exports.REVIEW_TAB_ALL="7418.8.5",exports.REVIEW_TAB_GOOD="7418.8.6",exports.REVIEW_TAB_MIDDLE="7418.8.7",exports.REVIEW_TAB_BAD="7418.8.8",exports.REVIEW_TAB_EXP="7418.8.9",exports.REVIEW_TAB_NEW="7418.8.10",exports.REVIEW_TAB_VEDIO="7418.8.11",exports.REVIEW_TAB_TAG="7418.8.15",exports.EXP_DETAIL_ITEM_FAV="7418.12.6",exports.DETAIL_ITEM_FAV="7418.12.7",exports.EXP_DETAIL_ITEM_UNFAV="7418.12.8",exports.DETAIL_ITEM_UNFAV="7418.12.9",exports.EXP_DETAIL_NAME_AD="7418.12.12",exports.DETAIL_NAME_AD="7418.12.13",exports.SKU_CHANGE="7418.12.49",exports.SHOP_CHANGE="7418.12.50",exports.EXP_FXG_ZY="7418.12.52",exports.CLICK_FXG_ZY="7418.12.53",exports.EXP_FXG_ZY_QY="7001.1.358",exports.CLICK_FXG_ZY_QY="7001.1.359",exports.EXP_FXG="7418.12.54",exports.CLICK_FXG="7418.12.55",exports.EXP_PLUS_TIP="7001.1.317",exports.CLICK_PLUS_TIP="7001.1.90",exports.EXP_PLUS_TIP_SHIYONG="7001.1.318",exports.CLICK_PLUS_TIP_SHIYONG="7001.1.319",exports.EXP_PLUS_TIP_JX="7001.4.3",exports.CLICK_PLUS_TIP_JX="7001.4.4",exports.EXP_PLUS_TIP_SHIYONG_JX="7001.4.54",exports.CLICK_PLUS_TIP_SHIYONG_JX="7001.4.55",exports.EXP_PLUS_PRICE="7001.1.320",exports.EXP_PLUS_PRICE_JX="7001.4.2",exports.EXP_ACT_BPHB="7418.18.1",exports.CLICK_ACT_BPHB="7418.18.2",exports.EXP_ACT_PTQQ="7418.18.3",exports.CLICK_ACT_PTQQ="7418.18.4",exports.EXP_LINE_PRICE="7001.1.326",exports.EXP_SIZE_GUIDE="7418.4.4",exports.CLICK_SIZE_GUIDE="7418.4.5",exports.EXP_KANJIA="7418.12.51",exports.CLICK_KANJIA="7418.12.56",exports.SKU_FLOOR_VIEW="7418.4.6",exports.LAYER_SKU_TWO_CONFIRM_EXP="7418.4.9",exports.LAYER_SKU_TWO_CONFIRM_CLICK="7418.4.10",exports.EXP_CART_NO_NUM="137081.10.7",exports.EXP_CART_WITH_NUM="137081.10.8",exports.CLICK_CART_NO_NUM="137081.10.9",exports.CLICK_CART_WITH_NUM="137081.10.10",exports.EXP_NUP_TAG="138487.1.1",exports.EXP_NUP="138268.2.36",exports.EXP_EXPIRATION="7418.12.59",exports.GARMENT_COLOR_EXP="7418.4.12",exports.GARMENT_COLOR_ITEM_CLICK="7418.4.13",exports.GARMENT_COLOR_FOLD_CLICK="7418.4.14",exports.GWFX_TAG_EXP="7418.12.64",exports.COVER_REVIEW_EXP="7418.14.7",exports.COVER_REVIEW_CLICK="7418.14.8",exports.APP_LAUNCH_EXP="7418.21.1",exports.APP_LAUNCH_CLICK="7418.21.2",exports.APP_ACROSS_ITEM_LAUNCH_EXP="7418.21.7",exports.APP_ACROSS_ITEM_LAUNCH_CLICK="7418.21.8",exports.BOTTOM_APP_LAUNCH_EXP="7418.21.3",exports.BOTTOM_APP_LAUNCH_CLICK="7418.21.4",exports.BOTTOM_APP_ACROSS_ITEM_LAUNCH_EXP="7418.21.9",exports.BOTTOM_APP_ACROSS_ITEM_LAUNCH_CLICK="7418.21.10",exports.COMMENT_ASK_APP_LAUNCH_EXP="7418.21.5",exports.COMMENT_ASK_APP_LAUNCH_CLICK="7418.21.6",exports.COMMENT_ASK_APP_ACROSS_ITEM_LAUNCH_EXP="7418.21.11",exports.COMMENT_ASK_APP_ACROSS_ITEM_LAUNCH_CLICK="7418.21.12",exports.COMMENT_ASK_APP_LAUNCH_TOAST_EXP="7418.16.53",exports.COMMENT_ASK_APP_LAUNCH_TOAST_OPEN_CLICK="7418.16.54",exports.COMMENT_ASK_APP_LAUNCH_TOAST_VIEW_CLICK="7418.16.55",exports.COMMENT_ASK_APP_LAUNCH_TOAST_CLOSE_CLICK="7418.16.56",exports.STORE_INFO_EXP="7418.12.62",exports.STORE_INFO_CLICK="7418.12.63",exports.USED_GOODS_EXP="7418.19.1",exports.USED_GOODS_CLICK="7418.19.2",exports.EXP_JINGXUAN="7418.12.67",exports.CLICK_JINGXUAN_CHANNEL="7418.12.68",exports.ADDED_SERVICES_EXP="7418.4.15",exports.ADDED_SERVICES_CLICK="7418.4.16",exports.PG_ADDED_SERVICES_EXP="7418.16.65",exports.PG_ADDED_SERVICES_CLICK="7418.16.66",exports.ADDED_SERVICES_INTRO_ENTRY_CLICK="7418.16.67",exports.SHARE_SUCCESS="7145.8.23",exports.CLICK_NAV_GOODS="7418.16.23",exports.CLICK_NAV_DETAIL="7418.16.24",exports.CLICK_NAV_COMMENT="7418.16.25",exports.CLICK_NAV_REC="7418.16.26",exports.CLICK_SHARE_BTN="7418.16.29",exports.EXP_REC_TUAN="7418.16.1",exports.CLICK_TUAN="7145.8.12",exports.EXP_PLAY_WAY="7418.16.2",exports.CLICK_PLAY_WAY="7145.8.5",exports.CLICK_PRICE="7145.8.21",exports.CLICK_GOTO_TUAN="7145.8.1",exports.EXP_PROMO_FLOOR="7418.16.7",exports.CLICK_PROMO_ON="7418.16.8",exports.CLICK_PROMO_OFF="7418.16.9",exports.EXP_SKU_FLOOR="7418.16.10",exports.CLICK_SKU_FLOOR="7145.8.18",exports.EXP_ADDRESS_FLOOR="7418.16.12",exports.CLICK_ADDRESS="7418.16.13",exports.EXP_GUESS_YOU_LICK_FLOOR="7418.16.18",exports.CLICK_GUESS_YOU_LIKE_FLOOR_PG="7418.16.19",exports.CLICK_GUESS_YOU_LIKE_FLOOR="7418.35.1",exports.CLICK_GUESS_YOU_LIKE_MORE="7418.35.2",exports.CLICK_QUICK_NAV="7418.16.20",exports.CLICK_QUICK_NAV_MY_PINGOU="7418.16.21",exports.CLICK_QUICK_NAV_PINGOU="7418.16.22",exports.EXP_CONFIRM_BTN="7418.16.28",exports.CLICK_PINGOU_INDEX="7145.8.20",exports.CLICK_PINGOU_BOTTOM_TIP="7145.8.12",exports.EXP_PINGOU_SHARE_TIP="7418.12.57",exports.CLICK_PINGOU_SHARE_TIP="7418.12.58",exports.EXP_COMMON_BUY="7415.8.21",exports.EXP_START_TUAN="7415.8.1",exports.GOODS_RECOMMEND_CLICK="7418.13.13",exports.GOODS_RECOMMEND_PG_CLICK="7418.16.35",exports.SUCCESS_GOODS_RECOMMEND="7418.13.14",exports.SUCCESS_GOODS_RECOMMEND_PG="7418.16.36",exports.CLICK_PINGOU_ADD_TO_CART="7418.16.31",exports.CLICK_PINGOU_BUY="7418.16.32",exports.CLICK_GOTO_CART="7418.16.34",exports.EXP_FAMILY_ENTER_NOT_IN="7418.22.7",exports.CLICK_FAMILY_ENTER_NOT_IN="7418.22.8",exports.EXP_FAMILY_CONFIRM_ADD="7418.22.9",exports.CLICK_FAMILY_CONFIRM_ADD_ENTER="7418.22.10",exports.CLICK_FAMILY_CONFIRM_ADD_CLOSE="7418.22.11",exports.EXP_FAMILY_ENTER_IN="7418.22.12",exports.CLICK_FAMILY_ENTER_IN="7418.22.13",exports.EXP_FAMILY_CONFIRM_REMOVE="7418.22.14",exports.CLICK_FAMILY_CONFIRM_REMOVE_ENTER="7418.22.15",exports.CLICK_FAMILY_CONFIRM_REMOVE_CLOSE="7418.22.16",exports.EXP_FANXIAN_PRICE="7418.20.1",exports.EXP_FANXIAN_PRICE_I="7418.20.2",exports.EXP_BIPIN_NOTICE="7418.20.3",exports.EXP_BIPIN_BANNER="7418.20.4",exports.CLICK_BIPIN_BANNER_ICON="7418.20.116",exports.EXP_TUAN_RECOMMEND="7418.20.5",exports.EXP_FRIEND_TUAN_RECOMMEND="7418.20.52",exports.CLICK_FRIEND_TUAN_RECOMMEND="7418.20.53",exports.EXP_SINGLEBUG_ALERT="7418.20.6",exports.CLICK_SINGLEBUG_ALERT_CANCLE="7418.20.7",exports.CLICK_SINGLEBUG_ALERT_CONFIRM="7418.20.8",exports.EXP_FACTORYSUPPLY="7418.20.9",exports.CLICK_FACTORYSUPPLY="7418.20.10",exports.EXP_RETURN_TO_WEISHI="7418.12.70",exports.CLICK_RETURN_TO_WEISHI="7418.12.71",exports.EXP_GAOFAN_NOTICE="7418.20.21",exports.EXP_QUANFAN_NOTICE="7418.20.22",exports.EXP_FLOOR_DISCOUNT="7418.20.34",exports.CLICK_FLOOR_DISCOUNT="7418.20.35",exports.EXP_FLOOR_PROMOTE="7418.20.36",exports.EXP_FLOOR_DISCOUNT_ALL="7418.20.128",exports.EXP_LAYER_COUPON_CANGET="7418.20.127",exports.EXP_BELT_LANEWERTUAN="7418.20.23",exports.EXP_BELT_NEWERTUAN="7418.20.24",exports.EXP_BELT_GAOFAN="7418.20.25",exports.EXP_BELT_QUANFAN="7418.20.26",exports.EXP_BELT_BUTIE="7418.20.27",exports.EXP_ADDRESS_DELIVERY="7418.20.31",exports.EXP_ADDRESS_JDWULIU="7418.20.32",exports.EXP_ADDRESS_FREIGHT="7418.20.33",exports.CLICK_BANNER_ICON="7418.16.38",exports.EXP_PINGOU_ACTIVE_ENTRY="7418.16.43",exports.CLICK_PINGOU_ACTIVE_ENTRY="7418.16.44",exports.CLICK_PINGOU_WANFA="7418.20.42",exports.EXP_JXAPP_EXCLUSIVE_FLOOR="7418.16.45",exports.EXP_JXAPP_EXCLUSIVE_FLOOR_FANXIAN="7418.16.46",exports.CLICK_JXAPP_EXCLUSIVE_FLOOR="7418.16.48",exports.EXP_JXAPP_EXCLUSIVE_LAYER_FANXIAN="7418.16.49",exports.CLICK_JXAPP_EXCLUSIVE_LAYER_BTN="7418.16.51",exports.EXP_PLUSZX_BANNER="7418.23.1",exports.EXP_PLUSZX_OPENTIP="7418.23.2",exports.CLICK_PLUSZX_OPENTIP="7418.23.3",exports.EXP_PLUSZX_OPENBTN="7418.23.4",exports.CLICK_PLUSZX_OPENBTN="7418.23.5",exports.EXP_PLUSZX_OPENBTN_GRAY="7418.23.6",exports.CLICK_PLUSZX_OPENBTN_GRAY="7418.23.7",exports.EXP_PLUSZXSHOP_BANNER="7418.23.20",exports.EXP_PLUSZXSHOP_OPENTIP="7418.23.21",exports.CLICK_PLUSZXSHOP_OPENTIP="7418.23.22",exports.EXP_PLUSZXSHOP_OPENBTN="7418.23.23",exports.CLICK_PLUSZXSHOP_OPENBTN="7418.23.24",exports.EXP_PLUSZXSHOP_OPENBTN_GRAY="7418.23.25",exports.CLICK_PLUSZXSHOP_OPENBTN_GRAY="7418.23.26",exports.EXP_NEWER_NOTUAN_BTN="7418.20.43",exports.CLICK_NEWER_NOTUAN_BTN="7418.20.44",exports.EXP_NEWER_KAITUAN_BTN="7418.20.50",exports.CLICK_NEWER_KAITUAN_BTN="7418.20.51",exports.EXP_OLDER_KAITUAN_BTN="7418.20.48",exports.CLICK_OLDER_KAITUAN_BTN="7418.20.49",exports.EXP_NEWER_NOTUAN_SINGLEBUY_ALERT="7418.20.45",exports.CLICK_NEWER_NOTUAN_SINGLEBUY_NOTUAN="7418.20.46",exports.CLICK_NEWER_NOTUAN_SINGLEBUY_SINGLE="7418.20.47",exports.CLICK_NEWER_NOTUAN_TIP="7418.20.91",exports.LAYER_SKU_CHANGE="7418.4.7",exports.LAYER_SKU_CLOSE="7418.4.8",exports.LAYER_SKU_TOW_CONFIRM="7418.4.10",exports.LAYER_SKU_COVER_VIEW="7418.4.11",exports.LAYER_SKU_COVER_VIEW_PINGOU="7418.16.33",exports.CLICK_JOIN_TUAN="7145.8.31",exports.CLICK_START_TUAN_CONFIRM="7145.8.27",exports.EXP_JXAPPZX="7418.20.70",exports.EXP_JXAPPZX_CREATETUAN_BTN="7418.20.62",exports.CLICK_JXAPPZX_CREATETUAN_BTN="7418.20.63",exports.EXP_JXAPPZX_JOINTUAN="7418.20.64",exports.CLICK_JXAPPZX_JOINTUAN="7418.20.65",exports.CLICK_SPJXAPPZX_BUY_BTN="7418.20.72",exports.CLICK_JXAPPZX_ADDCART_BTN="7418.20.83",exports.EXP_DRUG_CAN_NOT_BUY="7418.27.1",exports.EXP_DRUG_JUMP_HEALTHWXAPP_ALERT="7418.27.2",exports.CLICK_DRUG_JUMP_HEALTHWXAPP_ALERT_NOT="7418.27.3",exports.CLICK_DRUG_JUMP_HEALTHWXAPP_ALERT_OPEN="7418.27.4",exports.CLICK_DRUG_JUMP_HEALTHWXAPP_ALERT_SUCCESS="7418.27.5",exports.CLICK_DRUG_JUMP_HEALTHWXAPP_ALERT_FAIL="7418.27.6",exports.EXP_RETURN_FORM_HEALTHWXAPP="7418.27.7",exports.EXP_INDUSTRY_FLOOR="7418.20.78",exports.EXP_INDUSTRY_LAYER="7418.20.79",exports.CLICK_INDUSTRY_LAYER="7418.20.80",exports.EXP_PLACESTRAIGHT_FLOOR="7418.29.10",exports.EXP_PLACESTRAIGHT_LAYER="7418.29.11",exports.EXP_ARRIVAL_NOTICE_JX="7418.20.73",exports.CLICK_ARRIVAL_NOTICE_JX="7418.20.74",exports.EXP_MASK_YLTIP_1="7418.12.72",exports.EXP_MASK_YLTIP_3="7418.12.77",exports.CLICK_MASK_YLTIP_1="7418.12.73",exports.CLICK_MASK_YLTIP_3="7418.12.78",exports.EXP_MASK_BTN_1="7418.12.74",exports.EXP_MASK_BTN_2="7418.12.75",exports.EXP_MASK_BTN_3="7418.12.79",exports.EXP_MASK_BTN_4="7418.12.80",exports.CLICK_MASK_BTN_2="7418.12.76",exports.CLICK_MASK_BTN_4="7418.12.81",exports.EXP_SUYUAN_BANNER="7418.14.9",exports.CLICK_SUYUAN_BANNER="7418.14.10",exports.EXP_SUYUAN_ICON="7418.16.57",exports.CLICK_SUYUAN_ICON="7418.16.58",exports.CLICK_SUYUAN_VIDEO="7418.16.59",exports.EXP_ADDRESS_STOCK_STATE="7418.20.84",exports.EXP_ADDRESS_SERVICE_INFO="7418.20.85",exports.EXP_WAISTBAND="7418.30.1",exports.DETAIL_H5_TO_WXAPP="7001.21.10",exports.EXP_BUTIE_OPEN_TUAN="7418.20.99",exports.CLICK_BUTIE_OPEN_TUAN="7418.20.100",exports.EXP_FACTORY_ROW_WITH_VIDEO="7418.29.5",exports.CLICK_FACTORY_ROW_WITH_VIDEO="7418.29.6",exports.CLICK_FACTORY_LAYER_WITH_VIDEO="7418.29.8",exports.EXP_SEARCH_BAR="7418.31.1",exports.CLICK_SEARCH_BAR="7418.31.2",exports.EXP_MAIN_VIDEO="7418.20.54",exports.EXP_MAIN_VIDEO_PLAY="7418.20.55",exports.CLICK_MAIN_VIDEO_TAG="7418.20.59",exports.CLICK_IMG_TAG="7418.20.61",exports.EXP_ONLIVE_VIDEO_WINDOW="7418.20.86",exports.CLICK_ONLIVE_VIDEO_WINDOW="7418.20.87",exports.CLICK_ONLIVE_VIDEO_WINDOW_CLOSE="7418.20.88",exports.EXP_GOTO_JDHEALTH_ORDER="7418.2.18",exports.CLICK_GOTO_JDHEALTH_ORDER="7418.2.19",exports.DETAIL_BOOK_AUTHOR_EXPO="7418.32.3",exports.DETAIL_BOOK_AUTHOR_CLICK="7418.32.4",exports.DETAIL_BIGOUMA_CLICK="7418.2.26",exports.DETAIL_YUYUEKANCHE_CLICK="7418.2.16",exports.DETAIL_CHONGYIN_CLICK="7418.2.14",exports.EXP_PLUSZX_YUYUE_BANNER="7418.23.27",exports.EXP_PLUSZX_YUYUE_STATE2="7418.23.29",exports.CLICK_PLUSZX_YUYUE_STATE2="7418.23.30",exports.EXP_PLUSZX_YUYUE_STATE4="7418.23.32",exports.CLICK_PLUSZX_YUYUE_STATE4="7418.23.33",exports.EXP_PLUSZX_YUYUE_OPENPLUS="7418.23.35",exports.CLICK_PLUSZX_YUYUE_OPENPLUS="7418.23.36",exports.EXP_BUTIE_BANNER_ICON="7418.20.103",exports.CLICK_BUTIE_BANNER_ICON="7418.20.104",exports.CLICK_DETAIL_PIC="7418.16.68",exports.EXP_LONGPRESS_DETAIL_PIC_PANNEL="7418.16.74",exports.CLICK_LONGPRESS_PANNEL_SHARE="7418.16.75",exports.CLICK_LONGPRESS_PANNEL_POSTER="7418.16.76",exports.CLICK_LONGPRESS_PANNEL_CANCEL="7418.16.77",exports.EXP_DETAIL_FOOTER_CUSTOMIZE="7418.2.20",exports.CLICK_DETAIL_FOOTER_CUSTOMIZE="7418.2.21",exports.EXP_JXVIP_NOVIP_ROW="7418.7.20",exports.CLICK_JXVIP_NOVIP_ROW="7418.7.21",exports.EXP_JXVIP_ISVIP_ROW="7418.7.22",exports.CLICK_JXVIP_ISVIP_ROW="7418.7.23",exports.CLICK_JXVIP_OPEN="7418.7.25",exports.EXP_JXVIP_GODCOUPON="7418.7.26",exports.CLICK_JXVIP_GODCOUPON="7418.7.27",exports.EXP_JXVIP_NORMALCOUPON="7418.7.28",exports.CLICK_JXVIP_NORMALCOUPON="7418.7.29",exports.EXP_APP_COUPON_ROW="7617.2.5",exports.CLICK_APP_COUPON_ROW="7617.2.1",exports.EXP_APP_COUPON="7617.2.6",exports.CLICK_APP_COUPON="7617.2.2",exports.CLICK_APP_COUPON_USE="7617.2.9",exports.EXP_APP_COUPON_GET="7617.2.10",exports.CLICK_APP_COUPON_GET_OPENAPP="7617.2.11",exports.EXP_APP_COUPON_KL="7617.2.12",exports.EXP_JXNEWER_COUPON_TOAST_SEND="7418.20.111",exports.EXP_JXNEWER_COUPON_TOAST_DRAW="7418.20.112",exports.EXP_JXNEWER_COUPON_TOAST_LOGIN="7418.20.113",exports.CLICK_JXNEWER_COUPON_TOAST_LOGIN="7418.20.114",exports.EXP_JXNEWER_COUPON_BANNER_LOGIN="7418.20.107",exports.CLICK_JXNEWER_COUPON_BANNER_LOGIN="7418.20.108",exports.CLICK_JXNEWER_COUPON_POPUP="7418.20.115",exports.EXP_QP_BUY_BTN="7418.20.105",exports.CLICK_QP_BUY_BTN="7418.20.106",exports.EXP_QP_BUY_BTN_LOGIN="7418.20.109",exports.CLICK_QP_BUY_BTN_LOGIN="7418.20.110",exports.EXP_SEARCH_BAR_JX="7418.31.5",exports.EXP_CHOOSE_SHOP_BTN="7418.2.22",exports.CLICK_CHOOSE_SHOP_BTN="7418.2.23"; 
 			}); 
		define("pages/item/itemBase/constants/ump-config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../js/util/util.js"),i="1129"==getApp().scene,t={BIZ_ID:760,BIZ_ID_WQVUE:e.ENV.isPingouXcx?1307:1240,itemInfo:i?99:1,itemAddFav:4,itemDelFav:5,addCart:6,guessYouLike:7,suitInfo:8,couponList:9,addressList:11,addCardList:12,addedService:13,getLimitBuyInfo:14,pingouNewUser:19,getShopGoodsInfo:20,pingouTuanStatus:22,pingouPrice:23,getPinNum:24,pinYouLike:25,drawAfterDiscountCoupons:30,mainImgFail:29,launchApp:2,importProduct:15},o={},u=e.ENV.isXcxEnv?t:o;exports.default=u; 
 			}); 
		define("pages/item/itemBase/js/handler/action.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){return e.split("|").filter(function(e){return""!==e}).indexOf(t)>-1}function r(e,t){var n=t.jdServices,r=void 0===n?[]:n,i=t.extServices,o=void 0===i?[]:i,s=t.giftServices,a=void 0===s?[]:s,u={};if(o.length){var c=o.map(function(t){return[t.id,"",e.buyNum||1,e.skuId,1===e.polyType?7:8,e.skuId,0==e.pid?"":e.pid,0].join(",")}).join("$");c&&Object.assign(u,{ybcommlist:c})}if(r.length){var d=e.isVirtualSuit||e.isSuit?e.itemId||"":"",l=r.map(function(t){return[t.id,"","","","",e.skuId,d,e.isVirtualSuit?"suitType:1":""].join(",")}).join("$");l&&Object.assign(u,{jdhscommlist:l})}if(a.length){var p=a.map(function(t){return[e.skuId,"",e.buyNum||1,e.skuId,1,"",0,"",t.id].join(",")}).join("$");p&&Object.assign(u,{commlist:p})}return u}function i(e,t){var n=(0,v.getUserAddressID)();return new g.default(function(o,s){var a={},u=void 0;e.isRelated?u=e.skuid:t.skuId?u=t.skuId:e.sku&&(u=e.sku);var c=[u,e.shopid||"",e.buyNum||1,e.isRelated?"":u,e.isRelated?4:1,0,0];e.str&&c.push(e.str),e.services&&(a=r({skuId:u,polyType:e.isRelated?4:1,isSuit:!!e.isRelated},e.services));var d=f({scene:2,reg:1,type:e.type||0,commlist:c.join(","),locationid:n.split("_").slice(0,3).join("-"),t:Math.random()},a);y.get("3c_shop","").then(function(n){var r=n.id||"";r&&(d.shopid=r),I.addCart(d).then(function(n){var r=n.errId,a="";if("0"==r){var u=1*n.cart.mainSkuNum;2!=m.default.JD.cookie.get("wxapp_type")&&m.default.JD.cookie.set("cartNum",u,43200),o(u)}else"8968"==r?a="商品数量最大超过200":"8969"==r?a=n.errMsg||"加入失败，您的购物车已满":"13"==r?h.doLogin().then(function(){i(e,t).then(function(e){o(e)}).catch(function(e){var t=e.code,n=e.message;s({code:t,message:n})})}).catch(function(e,t){s({message:"用户未登录",code:13})}):a="添加失败，请稍后再试";a&&s({message:a,code:r})}).catch(function(e){var t=e.code,n=e.message;s({code:t,message:n})})})})}function o(){return I.verifyAuthUrl().then(function(e){return 0==e.retcode?g.default.resolve(e):g.default.reject({code:e.retcode})}).catch(function(e){var t=e.code,n=e.message;return g.default.reject({code:t,message:n})})}function s(e){if(!e.length)return[];var t=(0,x.deepExtend)(e),n=function(e){return e?parseFloat(parseFloat(e).toFixed(2).toString().replace(".00","")):0};t.forEach(function(e,r){if(e.flag="1"==e.didget,3==e.couponstyle&&e.discountdesc&&e.discountdesc.info&&e.discountdesc.info.length>0&&(t[r].discountArr=[],e.discountdesc.info=e.discountdesc.info.sort(function(e,t){return parseFloat(e.discount)-parseFloat(t.discount)}),e.discountdesc.info.forEach(function(e){t[r].discountArr.push(n(10*parseFloat(e.discount)))}),e.discountdesc.info.length>1)){var i=[];e.discountdesc.info.forEach(function(e){i.push("满"+n(e.quota)+"元享"+n(10*parseFloat(e.discount))+"折")}),t[r].discountDesc=i.join(", ")}e.name||0!=e.couponKind||(e.name="全品类(特例商品除外)")});var r={};return t=t.filter(function(e){return!!["108-2","108-1"].includes(e.userLabel)||(!r[e.quota+"-"+e.discount]||3==e.couponstyle)&&(3!=e.couponstyle&&(r[e.quota+"-"+e.discount]=!0),!0)}),t=t.sort(function(e,t){return(e.discountArr?1/(1-e.discountArr[0]/10):e.quota/e.discount)-(t.discountArr?1/(1-t.discountArr[0]/10):t.quota/t.discount)})}function a(e,t){var n={promoteArray:[],parallelPromote:[]};return new g.default(function(r,i){function o(e){switch(e){case-1:return"未注册";case 50:case 59:return"注册";case 56:return"铜牌";case 60:case 61:return"银牌";case 62:return"金牌";case 63:return"钻石";case 64:return"经销商";case 110:return"VIP";case 66:return"京东员工";case 88:case 103:case 104:case 105:return"钻石";case 90:return"企业";case 5001:case 5002:case 5003:case 5004:case 5005:return"店铺VIP";case 6010:return"PLUS试用";case 6020:return"PLUS正式";default:return"未知"}}if(!e.pis||!e.pis.length)return r(n);try{for(var s,a,u,c=e.pis,d={1:"会员特价",3:"限购",4:"京豆优惠购",6:"赠券",7:"赠京豆",9:"限制",10:"赠品",11:"封顶",15:"满减",16:"满送",17:"加价购",18:"满赠",19:"多买优惠",20:"团购",23:"跨店铺满免",29:"赠品池",36:"跨店铺满折",40:"促销",60:"换购",80:"PLUS赠品"},l=!1,p=0,f=c.length;p<f;p++)if(s=c[p],a=(s.pid||"").split("_"),!~(u=(s.etg||"").split(",")).indexOf("11"))for(var g in s)if((0,x.IsNum)(g)&&d[g]){var m={pid:s.pid},v=s.adurl,y=d[g],I=(s[g]||"").replace(/(\.00|\.0[^\d])/g,""),k=~I.indexOf("!@@!")?I.split("!@@!"):[];if("1"==g){if(k.length>0){var P=~u.indexOf("16"),S=1*k[0];h.isLogin()?"1"==e.hit?(I="您享受"+o((~" 5001 5002 5003 5004 5005 ".indexOf(" "+S+" ")?1*e.vl:~" 6010 6020 ".indexOf(" "+S+" ")?1*e.pl:1*e.jl)||S)+"会员"+(P?"专享":"")+"价：￥"+k[1],!P||50!==S&&59!==S||(y="新人专享",I="您可享受新用户专享价：￥"+k[1])):I=P?"未知":"成为"+o(S)+"会员可享受会员价，最低￥"+k[1]+"起":I=P?"请登录 确认是否可享受该优惠":o(S)+"会员可享受会员价，最低￥"+k[1]+"起"}else I="未知";~I.indexOf("PLUS")&&(I="未知")}else if("10"==g||"29"==g||"80"==g){if(!(I=(0,x.str2json)(k.length>0?k[0]:I))||!I.length){I="未知";break}var b=I.filter(function(e){return e&&2===e.gt&&e.num>0});("10"===g||"80"===g)&&b.length>0?("10"===g&&s.customtag&&JSON.parse(s.customtag)[2]?m.name="组套商品":m.name=y,m.title=("80"===g?"PLUS会员购买即赠热销商品":"购买即赠热销商品")+b.length+"件"+(k.length>0?" "+k.slice(1).join("，"):"，赠完即止"),m.content=b):I="未知"}else if("15"==g||"23"==g||"36"==g){var T=(new Date).getTime();~u.indexOf({15:"4",23:"9",36:"14"}[g])&&(y={15:"跨店铺满减",23:"跨店铺满免",36:"跨店铺满折"}[g],I=1e3*s.st<T?"【"+y+"进行中】"+I:(0,x.formatTime)(new Date(1e3*s.st),"mm月dd日hh:ii")+"该商品参加"+y+"活动，"+I)}for(var C=0;C<u.length;C++)if(25==u[C]||26==u[C]||27==u[C]){var O=(new Date).getTime();y={25:"跨自营/店铺满减",26:"跨自营/店铺满免",27:"跨自营/店铺满折"}[u[C]],1e3*s.st<O?(s.customtag&&JSON.parse(s.customtag).mli&&(y=JSON.parse(s.customtag).mli),I="【"+y+"进行中】"+I):I=(0,x.formatTime)(new Date(1e3*s.st),"mm月dd日hh:ii")+"该商品参加"+y+"活动，"+I,l=!0;break}if("未知"!==I){if(m.name||(m.name=y,m.content=I),v||(m.sale=l),"15"==g||"23"==g||"36"==g);if(m.activityId=a[0]||"","3"==g){var j=s.customtag&&JSON.parse(s.customtag)||{};m.activityType=a[1]||"",m.price=j.p||""}else if("40"==g){"9.5"!=(s.customtag&&JSON.parse(s.customtag)||{}).discount||"101"!=t&&"201"!=t||(m.isPlusNF=!0,n.parallelPromote.push(m));continue}m.content&&n.promoteArray.push(m)}}return r(n)}catch(e){return console.log("促销报错："+e),r(n)}})}function u(e){var t={promoteArray:[]};return new g.default(function(n,r){return e&&(e.limit_text&&(t.promoteArray.push({name:"PLUS限购",content:e.limit_text}),t.promoteArray.forEach(function(e){"限购"==e.name&&(e.content="非PLUS会员"+e.content)})),e.confine_text&&-1===t.promoteArray.findIndex(function(e){return"限制"==e.name})&&t.promoteArray.push({name:"PLUS限制",content:e.confine_text})),n(t)})}function c(e){var t={promoteArray:[]};return new g.default(function(n,r){if(!e||!e.title)return n(t);var i={name:"满额返券",content:e.title};return t.promoteArray=[i],n(t)})}function d(e){var t={promoteArray:[],promotePacks:[]};return I.suitInfo({skuId:e.skuId,jdCategory:e.jdCategory}).then(function(n){var r=n;if(!r||!r.suit||200!=r.suit.status||!r.suit.data)return t;for(var i,o=e.item||{},s=[],a=0,u=o.newColorSize.length;a<u;a++)if((i=o.newColorSize[a]).skuId==e.skuId)for(var c=1,d=Object.keys(o.saleProp).length;c<d;c++)s.push(i[c]);var l={name:"优惠套装",title:"",content:[]},p=[],f=0,g={type:0,sku:e.skuId,name:o.skuName,num:1,img:"https://img14.360buyimg.com/n4/"+e.focusImages[0],choose:s.join(" "),link:"",finalPrice:e.jdPrice},m=r.suit.data.packList,h={},v={},y={},I=[],x={},k={};if(!m||!m.length)return t;for(var P=0,S=m.length;P<S;P++)if(1!=(v=m[P]).suitType&&(v.packPrice=v.packPrice||{},y={},I=[],h=v.poolList,f=Math.max(f,v.baseSuitDiscount),y.reid=v.packId,y.price=v.packPromotionPrice.toFixed(2),y.dis=v.baseSuitDiscount.toFixed(2),y.mprice=(v.baseSuitDiscount+v.packPromotionPrice).toFixed(2),y.item=[g],!(y.dis<=0||y.price<=0||y.mprice<=0))){I.push(v.packId),I.push(e.skuId);for(var b=h.length,T=0;T<b;T++)if(1==(x=h[T]||{}).selectState){var C=(x.colorList||[]).filter(function(e){return e&&e.skuId}),O=C.length;if(!(O<1)){k=C[0],I.push(k.skuId),k.imgUrl="https://img14.360buyimg.com/n4/"+k.skuPicUrl;for(var j,w=[],A=0,L=x.saleNames.length;A<L;A++)j=x.saleNames[A],w.push(k[j]);y.item.push({type:1,sku:k.skuId,link:"",name:k.skuName,choose:w.join(" "),img:k.imgUrl,num:x.num,finalPrice:k.finalPrice,canChoose:O>1})}}y.cartid=I.join("_"),p.push(y)}return p.length<=0?t:(l.title="该商品有"+p.length+"款优惠套装",l.content=p,t.promoteArray=[l],t.promotePacks=r.suit.data,t)}).catch(function(e){return t})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!1;if(e.length)return e.forEach(function(e,t){"赠品"===e.name&&(r=!0)}),e.forEach(function(e,n){if("赠品"===e.name||"PLUS赠品"===e.name||"组套商品"===e.name){var i=e.content.map(function(e){return{img:e.mp,title:e.nm,num:e.num,sku:e.sid}}),o={hasGift:r,name:e.name,isPlus:!!t};"赠品"===e.name||"组套商品"===e.name?e.giftQueryStr=(0,x.querystring)({d:JSON.stringify(i),o:JSON.stringify(o)}):"PLUS赠品"===e.name&&(e.plusGiftQueryStr=(0,x.querystring)({d:JSON.stringify(i),o:JSON.stringify(o)}))}else("满减"==e.name||"满折"==e.name||"多买优惠"==e.name||"满赠"==e.name||"加价购"==e.name||"满送"==e.name||"跨店铺满折"==e.name&&!e.adurl||"跨店铺满减"==e.name&&!e.adurl||"跨店铺满免"==e.name&&!e.adurl)&&(e.sale=!0)}),e.forEach(function(e){var t=e.name;switch(t){case"PLUS赠品":e.sortIdx=1;break;case"赠品":case"组套商品":e.sortIdx=2;break;case"PLUS限购":e.sortIdx=3;break;case"限购":e.sortIdx=4;break;case"限制":case"PLUS限制":e.sortIdx=5;break;default:e.sortIdx=6}"PLUS限购"!=t&&"PLUS限制"!=t&&"PLUS赠品"!=t||(e.showPlusStyle=!0)}),e.sort(function(e,t){return e.sortIdx-t.sortIdx}),n.hidePlus&&(e=e.filter(function(e){return e&&!e.showPlusStyle})),e}Object.defineProperty(exports,"__esModule",{value:!0});var p=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};exports.getTitleTag=function(e){var t=this;return I.getPpmsData("_itemTitleTag").then(function(n){function r(t,n){n=n||1;var r=t.filter(function(t){return t&&"jingdongwuliu"==t.remarks?!e.isSam&&!e.isWoma&&t.position==n&&(0==e.venderType&&1==e.isJDexpress||1==e.venderType||!e.isZiying&&1==u.isSopUseSelfStock):(!t||"yaopin"!=t.remarks||!~"|7373035|7159286|7373033|7373031|7159314|7159312|7159310|7373029|7159308|7159306|7373027|7159304|7373003|7159302|7159300|7159284|7159298|7373001|7373025|7159370|7159334|7159350|7373045|7159320|7373057|7373067|7373069|7159328|7159362|".indexOf("|"+s.skuId+"|"))&&(!(!t||"mdfh"!=t.remarks||t.position!=n||1!=u.isSds&&1!=a.fdms)||("ziying"==t.remarks?!(t.position!=n||!t.ziyingIcon):!!(t.cid1s||t.cid2s||t.cid3s||t.specMark||t.brandId||t.venderId)&&t&&t.position==n&&(!t.cid1s&&!t.cid2s&&!t.cid3s||t.cid1s&&~("|"+t.cid1s+"|").indexOf(p)||t.cid2s&&~("|"+t.cid2s+"|").indexOf(f)||t.cid3s&&~("|"+t.cid3s+"|").indexOf(g))&&(!t.specMark||!t.specMarkVal||~("|"+t.specMarkVal+"|").indexOf("|"+a[t.specMark]+"|"))&&(!t.brandId||~("|"+t.brandId+"|").indexOf(c))&&(!t.venderId||~("|"+t.venderId+"|").indexOf(d))))})[0];if(!r)return!1;var i=r[m?"ziyingIcon":"popIcon"],o=e.isPingou||x.ENV.isPingouXcx?28:26,l=150;if(/\/s((\d)+x(\d)+)_jfs\//.test(i)){var h=i.match(/s((\d)+x(\d)+)_jfs/)[1];l=(o*(h.split("x")[0]/h.split("x")[1])+1).toFixed(2)}return i=k.getImg(i),{url:i,width:l,height:o,desc:r.desc||""}}if(!n||!n.length)return{};var i={skuNameFlags:[],beforeStockSkuFlags:{},aboveTitleSkuFlag:{}},o=[],s=t,a=e.spAttr||{},u=e.skuMark||{},c="|"+e.brandId+"|",d="|"+e.venderId+"|",l=e.jdCategory,p="|"+l[0]+"|",f="|"+l[1]+"|",g="|"+l[2]+"|",m=e.isZiying||e.isFCS||e.isSCF,h=x.ENV.isPingouXcx?"pgxcx":"xcx";if((o=n.filter(function(e){return e&&(e.ziyingIcon&&m&&!(1==a.factoryShip&&1==a.isnoZY)||e.popIcon&&!m)&&e.channel&&e.channel.split(";").includes(h)})).length){var v=r(o,1);v&&i.skuNameFlags.push(v);var y=r(o,2);y&&i.skuNameFlags.push(y);var I=r(o,3),P=r(o,4);P&&(i.beforeStockSkuFlags=P),I&&(i.aboveTitleSkuFlags=I)}return i})},exports.getBigPromoteInfo=function(e){return I.getPpmsData("_bigPromoteList").then(function(t){if(!t||!t.length)return{};var n=(0,x.deepExtend)(t),r=e.spAttr,i="|"+e.jdCategory[0]+"|",o="|"+e.jdCategory[1]+"|",s="|"+e.jdCategory[2]+"|",a="|"+e.brandId+"|",u="|"+e.venderId+"|",c="|"+e.pTag+"|",d=(new Date).getTime(),l=e.price,p=(l.pp>0&&l.p>l.pp||l.tpp>0&&l.p>l.tpp)&&!e.isZxService&&!e.isAd2,f=x.ENV.isPingouXcx?"5":x.ENV.isXcxEnv?"4":x.ENV.isSqEnv?"2":x.ENV.isWxEnv?"1":"3",g=e.isNormalItem?"normal":e.isNewPingou?"newpg":"oldpg",m=n.filter(function(e){var t=e.source&&e.source.split(";")||[],n=e.itemType&&e.itemType.split(";")||[];return!("plus"==e.remarks&&!p)&&~t.indexOf(f)&&~n.indexOf(g)&&(!e.pTag||~("|"+e.pTag+"|").indexOf(c))&&(!e.cid1s&&!e.cid2s&&!e.cid3s||e.cid1s&&~("|"+e.cid1s+"|").indexOf(i)||e.cid2s&&~("|"+e.cid2s+"|").indexOf(o)||e.cid3s&&~("|"+e.cid3s+"|").indexOf(s))&&(!e.specMark||!e.specMarkVal||~("|"+e.specMarkVal+"|").indexOf("|"+r[e.specMark]+"|"))&&(!e.brandId||~("|"+e.brandId+"|").indexOf(a))&&(!e.venderId||~("|"+e.venderId+"|").indexOf(u))&&(!e.startTime||new Date(e.startTime).getTime()<d)&&(!e.endTime||new Date(e.endTime).getTime()>d)})[0];if(!m)return{};var h=e.isJx?m.choiseBuyBtnColor.split(","):m.buyBtnColor.split(","),v=e.isJx?m.choiseCartBtnColor.split(","):m.cartBtnColor.split(",");if(h.length>1&&(m.buyBtnColor="linear-gradient(to right,"+h.join(",")+");"),v.length>1&&(m.cartBtnColor="linear-gradient(to right,"+v.join(",")+");"),m.bannerImg=k.getImg(m.bannerImg),m.rightupImg=k.getImg(m.rightupImg),m.beforeTitleTag=k.getImg(m.beforeTitleTag),m.bannerImgWithPrice=k.getImg(m.bannerImgWithPrice),m.bannerRightIcon=k.getImg(m.bannerRightIcon),m.afterDiscountBg=k.getImg(m.afterDiscountBg),m.beforeTitleTag){var y=e.isPingou||x.ENV.isPingouXcx?28:26,I=150;if(/\/s((\d)+x(\d)+)_jfs\//.test(m.beforeTitleTag)){var P=m.beforeTitleTag.match(/s((\d)+x(\d)+)_jfs/)[1];I=(y*(P.split("x")[0]/P.split("x")[1])+1).toFixed(2)}m.beforeTitleTagWidth=I}return m.bannerImg&&(m.bannerImgWithPrice=""),m})},exports.serviceAreaOrganize=function(e){var t=e.stock||{},n={popEaseBuy:[],zyEaseBuy:[],zyEaseBuyToShowOnPage:[],serviceContent:[]};return e.is9669order||"1000089641"==e.venderId||!t?g.default.resolve(n):I.getPpmsData("_easeServiceIconCode").then(function(r){var i=r&&r[0]&&r[0].popIconCode||"",o=r&&r[0]&&r[0].zyIconCode||"";n.serviceContent=(e.service||[]).filter(function(e){return!e.iconCode||!~(" "+o+" ").indexOf(" "+e.iconCode+" ")}),"1"==t.popFxgCode&&(n.serviceContent=n.serviceContent.filter(function(e){return!e.iconCode||!~(" "+i+" ").indexOf(" "+e.iconCode+" ")}));for(var s=t.ir||[],a=[],u=0,c=s.length;u<c;u++){var d=s[u];1==d.resultCode&&"1"==t.popFxgCode&&~(" "+i+" ").indexOf(" "+d.iconCode+" ")&&a.push(d)}if(a.length&&a.length)for(var l,p=0;p<a.length;p++)l=a[p],n.popEaseBuy.push({title:l.showName,text:l.iconTip});for(var f=t.sr||[],g=0,m=f.length;g<m;g++){var h=f[g];if(("service_zyfangxingou"==h.iconCode||"appliances_zyfangxingou"==h.iconCode)&&h.showIconResults){n.relaxType=h.relaxType;for(var v=0,y=h.showIconResults.length;v<y;v++){var I=h.showIconResults[v];~(" "+o+" ").indexOf(" "+I.iconCode+" ")&&n.zyEaseBuyToShowOnPage.push({title:I.showName,text:I.iconTip})}h.featureIconResults&&h.featureIconResults.forEach(function(e){~(" "+o+" ").indexOf(" "+e.iconCode+" ")&&n.zyEaseBuy.push({title:e.showName,text:e.iconTip})}),h.baseServiceIconResults&&h.baseServiceIconResults.forEach(function(e){~(" "+o+" ").indexOf(" "+e.iconCode+" ")&&n.zyEaseBuy.push({title:e.showName,text:e.iconTip})})}}return n}).then(function(t){return e.skuId?I.couponList({skuId:e.skuId,isZiying:e.isZiying,jdCategory:e.jdCategory,venderId:e.venderId,isOverseaPurchase:e.isOverseaPurchase,isPingouShop:e.isPingouShop,spAttr:e.spAttr||{},useCache:!0}).then(function(e){var n=e&&e.sku_info&&e.sku_info.limitCouponDesc||"";return n&&t.serviceContent.push({title:n,text:n,iconCode:"",iconState:!1}),t}):t})},exports.globalServiceOrganize=function(e){var t=[];if(!e||!e.iconInfoVoList||!e.iconInfoVoList.length)return g.default.resolve(t);for(var n=0;n<e.iconInfoVoList.length;n++){var r=(e.iconInfoVoList[n].title||"").replace(/(^\s*)|(\s*$)/g,""),i=(e.iconInfoVoList[n].content||"").replace(/(^\s*)|(\s*$)/g,"");r&&t.push({title:r,text:i})}return g.default.resolve(t)},exports.easyBuyInfo=function(e){var t=e.jdCategory||[];if(t.length){var r=t[0],i=t[1],o=t[2];return I.getPpmsData("_itemInsurance").then(function(t){var s=[];return t.forEach(function(t){var a=""===t.cid1s&&""===t.cid2s&&""===t.cid3s;(n(t.cid1s,r)||n(t.cid2s,i)||n(t.cid3s,o)||a)&&(t.brandId&&n(t.brandId,e.brandId)||!t.brandId)&&"isOverseaPurchase"===t.specMark&&(t.specMarkVal&&!n(t.specMarkVal,e.isOverseaPurchase)||(t.icon=k.getImg(t.icon),t.link=t.link.replace(/^(https*:){0,1}\/\//,"https://"),s.push(t)))}),g.default.resolve(s)})}},exports.addCart=i,exports.getActInfo=function(e,t){return I.getActInfo(e,t).then(function(e){var t=e.data;if(0===e.iRet&&t.length>0){var n=t[0],r=n.bIsShowAct,i=n.strLinkUrl4Wxa,o=n.ddwEndPrice,s=n.dwBuyPerson,a=n.ddwActId,u=(parseInt(o)/100).toFixed(2);return{isActShow:r&&!!i,isPriceNormal:!!parseInt(o),ddwActId:a,url:i,personNum:parseInt(s),centPrice:o,intPartPrice:u.toString().split(".")[0],decPartPrice:u.toString().split(".")[1]}}return{}})},exports.getAddedService=function(e){var t=e.skuId,n=e.jdCategory,r=e.brandId,i=e.jdPrice,o=e.isSupportGift,s=e.isSupportYanbao,a=e.isSupportPackageJd;return I.addedService({skuId:t,jdCategory:n,brandId:r,jdPrice:i}).then(function(e){var t=[],n=e.errcode,r=e.bzsvc,i=void 0===r?[]:r,u=e.giftgou,c=[],d=[],l="保障服务",p="京东服务";return n||(i&&i.length>0&&(i[0]&&i[0].bindResponses&&i[0].bindResponses.length>0&&(1==i[0].type?(c=i[0].bindResponses,l=i[0].title||l):2==i[0].type&&(d=i[0].bindResponses,p=i[0].title||p)),i[1]&&i[1].bindResponses&&i[1].bindResponses.length>0&&(1==i[1].type?(c=i[1].bindResponses,l=i[1].title||l):2==i[1].type&&(d=i[1].bindResponses,p=i[1].title||p))),s&&c.length&&t.push(l),a&&d.length&&t.push(p),o&&u&&t.push("礼品包装")),console.log("##CS",t),{supportServicesStr:t.join("、"),baozhang:c,svcplus:d,baozhangTitle:l,svcplusTitle:p,giftgou:u}})},exports.verifyAuth=function(){return I.verifyAuthUser().then(function(e){return-1==e.retcode?g.default.reject({message:"系统错误"}):1!=e.status&&0==e.retcode||2==e.retcode||4==e.retcode?o().then(function(t){return 0==t.retcode&&(/^https:/.test(t.redirect)?e.url=t.redirect:/^http:/.test(t.redirect)?e.url=t.redirect.replace(/^http:/,"https:"):e.url="https:"+t.redirect),g.default.resolve(e)}).catch(function(t){return g.default.resolve(e)}):g.default.resolve(e)})},exports.verifyAuthUrl=o,exports.handleAdultTip=function(e){return I.getPpmsData("_adultCategoryInfo").then(function(t){if(!e||e.length<3||!t||t.length<1)return g.default.reject({code:"1"});var n="";return t.forEach(function(t){t.tip&&(t.cid1s||t.cid2s||t.cid3s)&&(~t.cid1s.indexOf("|"+e[0]+"|")||~t.cid2s.indexOf("|"+e[1]+"|")||~t.cid3s.indexOf("|"+e[2]+"|"))&&(n=t.tip)}),n?g.default.resolve(n):g.default.reject({code:"1"})}).catch(function(e){var t=e.code,n=e.message;return g.default.reject({code:t,message:n})})},exports.cashBack=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isSpecialProcess,n=e.isCashBack,r=e.skuId,i={show:!1,peopleTotalStr:"",returnMoney:"",returnMoneyNum:0,rulesTitle:"",rulesContent:""};return n&&r&&!t?g.default.all([I.getPpmsData("_specText"),I.commonRequest({api:"cashBack",param:{sku:r}})]).then(function(e){var t=p(e,2),n=t[0],r=void 0===n?[]:n,o=t[1],s=o.retCode,a=o.list,u=void 0===a?[]:a;if(0!==s||!u||!u[0])return i;var c=u[0],d=c.people,l=void 0===d?0:d,f=c.groupReturnTotal,g=void 0===f?0:f,m=l||"";l>9999&&(m=parseFloat(l/1e4).toFixed(1)+"万");var h=parseFloat(g/100).toFixed(2),v="",y="";return g?((r=r.filter(function(e){return"gouwufanxian"===e.textId})).length&&(v=r[0].textTitle||"活动规则",y=r[0].textContent||""),i.show=!0,i.peopleTotalStr=m,i.returnMoney=h,i.returnMoneyNum=parseFloat(h||0),i.rulesTitle=v,i.rulesContent=y,i):void 0}).catch(function(e){return i}):g.default.resolve(i)},exports.getCouponList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.skuId)return I.couponList(e).then(function(e){var t={showGiftCoupons:!0,showJxVipCoupons:!0,coupons:[]};if(!e||0!=e.ret)return t;var n=e.sku_info||{},r=n.limitCouponType||[];return t.showGiftCoupons="0"!=n.useJing&&"0"!=n.useDong&&!~r.indexOf("limit_1")&&!~r.indexOf("limit_2"),t.showJxVipCoupons=!~r.indexOf("limit_1")&&!~r.indexOf("limit_2"),t.coupons=s([].concat(e.coupons||[])),t})},exports.avlCouponOrganize=s,exports.getCouponPool=function(e){return I.couponPool(e).then(function(t){if(0!=t.ret||!t.prizes)return!1;var n=[];t.bingos&&t.bingos.length>0&&t.bingos.forEach(function(e){e.Level&&n.push(parseInt(e.Level))});var r=t.prizes.filter(function(e){var t=e.PrizeTime?e.PrizeTime.split(","):[],r=e.ConstraintTime?e.ConstraintTime.split(","):[],i=1==e.ValidType&&e.CouponTime?e.CouponTime.split(","):[],o=e.DiscountQuota?e.DiscountQuota.split(","):[],s=(new Date).getTime();return e&&0==e.Status&&e.Level&&o&&o.length>1&&t.length>1&&1e3*parseFloat(t[0])<=s&&1e3*parseFloat(t[1])>=s&&(2==e.ValidType||i.length>1&&1e3*parseFloat(i[1])>=s)&&r.length>1&&1e3*parseFloat(r[0])<=s&&1e3*parseFloat(r[1])>=s&&!~n.indexOf(parseInt(e.Level))});return!(r.length<=0)&&((r=r.slice(0,3)).sort(function(e,t){return parseInt(e.Level)-parseInt(t.Level)}),r=r.map(function(t){var n=t.DiscountQuota?t.DiscountQuota.split(","):[],r={0:1,1:0,2:2},i={roleId:e+"-"+t.Level,key:"couponPool",quota:n[1],discount:n[0],name:"全品类(特例商品除外)",couponType:t.Vender?r[t.Vender]:1};if(1==t.ValidType){var o=t.CouponTime.split(","),s=void 0;o.length>1&&(s=(0,x.formatTimeSimple)(new Date(1e3*parseFloat(o[0]))),i.timeDesc=s.year+"."+parseInt(s.month)+"."+parseInt(s.day)+" "+s.hour+":"+s.min,s=(0,x.formatTimeSimple)(new Date(1e3*parseFloat(o[1]))),i.timeDesc+=" - "+s.year+"."+parseInt(s.month)+"."+parseInt(s.day)+" "+s.hour+":"+s.min)}else i.timeDesc="自领取后"+t.CouponTime+"天内有效";return i}))}).catch(function(e){return!1})},exports.getBindingGift=function(){return I.getPpmsData("_bindingGift").then(function(e){var t=e&&e[2]||"";return t.img&&t.sceneid&&t.ptag&&t.activeLevel&&t.activeid?(t.img=k.getImg(t.img),t):""})},exports.promoteOrganize=function(e){var t=e.promov2,n=e.plusInfo,r=e.bankpromo,i=e.plusFlag,o=e.promoteObj,s=void 0===o?{}:o,f=e.extObj,m=void 0===f?{}:f,h=[a(t,i),u(n),c(r)];return m.hideSuit||h.push(d(s)),g.default.all(h).then(function(e){var t=p(e,4),n=t[0],r=void 0===n?{}:n,i=t[1],o=void 0===i?{}:i,a=t[2],u=void 0===a?{}:a,c=t[3],d=void 0===c?{}:c;return{promote:l([].concat(r.promoteArray||[],o.promoteArray||[],u.promoteArray||[],d.promoteArray||[]),s.isPlus,m),parallelPromote:r.parallelPromote,promotePacks:d.promotePacks}}).catch(function(e){})};var g=t(require("../../../../../libs/promise.min.js")),m=t(require("../../../../../common/wxcontext.js")),h=e(require("../../../../../common/login/loginv1")),v=require("../../../../../common/userinfo_wqvue"),y=e(require("../../../../../common/localStorage.js")),I=e(require("../model/baseModel.js")),x=require("../util/util.js"),k=e(require("../../../../../common/fe_helper")); 
 			}); 
		define("pages/item/itemBase/js/handler/organize.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var i={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r]);return i.default=e,i}function i(e){return e&&e.__esModule?e:{default:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i={};return["expiration","vsc","StockState","rn","self_D","D","venderType","shortTitle","serviceInfo","dcName","crossRegionCharge","isJDexpress","promiseYX","promiseMark","ir","afsCode","sr","sid","Drd","stockDesc","dcashDesc","wDispatch","StockStateName","sidDely","serviceInfo","promiseResult","weightValue","ArrivalDate","rfg","popFxgCode"].forEach(function(r){r&&(e[r]||0===e[r])&&(i[r]=e[r])}),i}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};["dataFrom","saleUnit","brandName","productArea","pName","weight","length","width","height","model","timelinessId","valuePayFirst","yn","unLimit_cid"].forEach(function(i){delete e[i]})}function o(e){var i=e.json,o=e.isRetry,a=e.isNewUser;return H={},new L.default(function(c,m){var h=i.item||{},v=i.stock||{},y=h.spAttr||{};if(i.isSamCard&&1==i.isSamCard)return i.jumpUrl="https://wqitem.jd.com/item/view?sku="+i.skuId,void c(i);if(i.h5RedirectUrl)return i.jumpUrl=i.h5RedirectUrl.replace(/^(http:)*\/\//,"https://"),void c(i);if(i.redirectUrl&&o)c({redirectUrl:i.redirectUrl});else{if(i.huanUrl)return i.huanSku=_("sku",i.huanUrl),i.huanPrice=f(i.price&&i.price.p?i.price.p:"0.00"),void c(i);if(h.skuMark&&"string"==typeof h.skuMark)try{h.skuMark=JSON.parse(h.skuMark)}catch(e){console.log("skumark解析错误")}h.newColorSize=A(h.newColorSize||[],i.skuId);var I=h.newColorSize||[];H.jdSkuIds=[],I&&I.length?I.forEach(function(e){e.skuId&&H.jdSkuIds.push(e.skuId)}):(H.jdSkuIds.push(i.skuId),H.dontCheckSku=!0),H.bizRetCode=i.bizRetCode,H.bizMsg=i.bizMsg,H.isNewUser=a,H.skuId=i.skuId,H.taxinfov2=i.taxinfov2||{},H.spAttr=y,n(h),H.item=h,H.skuMark=h.skuMark||{},H.newColorSize=I,H.stock=r(v),H.isPingou="1"==i.pingou,H.isPingouShop="1"==i.pingouShop,H.isNewPingou=H.isPingou&&H.isPingouShop,H.isOldPingou=!H.isNewPingou&&H.isPingou,H.isNormalItem=!H.isNewPingou&&!H.isPingou,H.isPingouToNormal=H.isPingouShop&&H.isNormalItem,H.itemType=H.isNewPingou?"2":H.isOldPingou?"1":"",H.fanxian=(0,Y.deepExtend)(i.fanxian),H.fanxian&&(H.fanxian.amountDesc=H.fanxian.ex_fxamount,H.fanxian.fanXianTypeDesc=H.fanxian.fanXianTypeDesc||"返"),H.duoDanFan=i.duoDanFan,H.pingouRuleInfo=i.pingouRuleInfo||{},H.pingouActiveEntry=H.isPingou&&i.pingouActiveEntry||{};var P=H.isPingou&&i.activeTypeInfo||{},N=P.skuLayer||{};if(N.rightTips&&N.rightTips.length&&(N.rightTips=N.rightTips.filter(function(e){return e})),H.pgBanner=P.banner||{},H.pingouActiveEntry.toUrl&&5!=H.pgBanner.flag&&9!=H.pgBanner.flag&&(H.pgBanner.iconToUrl=H.pingouActiveEntry.toUrl,H.pgBanner.icon=H.pingouActiveEntry.iconUrl||H.pgBanner.icon),H.pgActiveFlag=H.pgBanner.flag||0,H.pgNotice=P.notice||{},H.pgSkuLayerRule=N,H.isSamCard=1==i.isSamCard,H.isPhotoPrint=1==i.isPhotoPrint,H.isWatsonsCard="200117505809"==H.skuId,H.promov2=i.promov2||[],H.bankpromo=i.bankpromo,H.price=i.price||{},H.priceExt=i.price&&i.price.ext||{},H.plusPromoInfo=i.price&&i.price.ext&&JSON.parse(i.price.ext).PLUS||null,H.focusImages=h.image||[],H.skuName=h.skuName,H.superrebate=i.superrebate,H.expAttr=i.expAttr,H.descriptionId=h.description||"",H.spuId=H.descriptionId.replace(/^d/,""),H.specificationId=h.specification,H.jdPrice=f(H.isKeplerScene&&i.price&&i.price.bp||(i.price?i.price.p:0)||B.default.JD.url.getUrlParam("price")),H.jdMprice=f(i.price?i.price.m:"0.00"),H.opPrice=f(i.price?i.price.op:"0.00"),H.oriPrice=f(H.price.op?H.price.op:"0.00"),H.skuType=h.skuType,H.isZiying=!h.isPop,H.brandId=h.brandId,H.skumark=h.skumark||0,H.isJingzao="299330"==h.brandId,H.jdzzDesc=i.jdzzDesc||"",H.venderId=h.venderID,H.venderName=h.venderID?(v.self_D||v.D||{vender:"京东"}).vender:"",H.pTag=h.pTag,H.ad=i.AdvertCount&&i.AdvertCount.ad,H.jdCategory=h.category||[],H.decorate=i.decorate,H.isWareOff="1"!=h.warestatus,H.hasBigouma="1"==i.bigouinfo,H.isLoadCoupon="1"!=y.isKO,H.hasFamilyAccount="1"==i.familyAccount,H.isInFamilyList="1"==i.isInFamilyList,H.isPlus=0!=i.plusMemberType,H.plusFlag=i.plusFlag,H.allOverImg=1==i.allOverImg,H.ptqq=i.ptqq,H.kanjia=i.kanjia,H.isLdp=y&&y.isFreeload&&"1"==y.isFreeload,H.taxInfo=i.taxinfov2,H.mainVideoId=i.mainVideoId||0,H.infoVideoId=i.infoVideoId||0,H.promoteInfo=i.promoteInfo||[],H.plusLimitBuy=i.plusLimitBuy,H.isOverseaPurchase=y.isOverseaPurchase>0?y.isOverseaPurchase:"0",H.soldOversea=y.SoldOversea?parseInt(y.SoldOversea):0,H.isJx="1"==y.IsJX,H.isNormalAct=(2==H.skuType||3==H.skuType)&&"14669"!=H.jdCategory[1]&&"4855"!=H.jdCategory[1]&&"6929"!=H.jdCategory[1],H.isOnlineBook=/^3\d{7}$/.test(H.skuId),H.isWoma="663284"==H.venderId,H.isSam="603837"==H.venderId,H.isSamGoods="1"==y.isSamGoods,H.isSamGoods2="684711"==H.venderId,H.isPlusZxShop=i.flag&&"1"===i.flag.plusVender,H.isZxLx="1"==y.zxLx,H.isDzItem="1"==y.Customize||"2"==y.Customize,H.is9669order="1"==y.isSelfService&&"1000089641"!=H.venderId&&(!H.isZiying||"12856"!=H.jdCategory[2]),H.isOTC="12632"==H.jdCategory[1]?3:0,H.isXnzt="1"==y.isXnzt,H.venderType=v.D&&v.D.type,H.isFCS=100==H.venderType,H.isSCF=110==H.venderType,H.isJMa="1"==y.isJMa,H.hasSuyuanVideo="1"==y.jdzs||"2"==y.jdzs,H.isHYKHSP="1"==y.HYKHSP||"1195"==H.jdCategory[2],H.isZxService=i.decorate&&1==i.decorate.isZx&&~" 9944 9953 9945 9946 9947 9948 ".indexOf(" "+H.jdCategory[2]+" "),H.isSupportCard="1"===y.isSupportCard,H.isECard="6980"==H.jdCategory[2],H.isFlimPrint="1"==y.isFlimPrint,H.isYsp=1==y.ysp||3==y.ysp,H.isCjg=2==y.ysp||3==y.ysp,H.isSecondHand="13765"===H.jdCategory[0],H.isfqy="1"===y.fqy,H.isPaiPai=H.isSecondHand||H.isfqy,H.isPrescribeDrug=!!~" 13315 13326 13335 13349 13354 13362 13380 13388 13424 13430 13446 13456 13468 13488 13494 13500 13504 13518 13527 ".indexOf(" "+H.jdCategory[1]+" "),H.isJzzy=(H.isZiying||H.isFCS)&&"299330"==h.brandId,H.feetype=i.feetype,H.isHeyue=i.feetype&&i.feetype.datas&&i.feetype.datas.length>0,H.isLocNum=y.isLOC,H.isLoc="1"==y.isLOC,H.isOnlineService="2"==y.isLOC,H.isJdGame="3"==y.isLOC,H.isTencentVideo="4"==y.isLOC,H.isXnkq="2"==y.xnkq,H.isCzGoods=H.jdCategory&&" 4835 4836 12276 12277 15048 ".indexOf(" "+H.jdCategory[2]+" ")>=0,H.repairCenterGoods="1000089641"==H.venderId,H.zyTravel="1"==y.factoryShip&&" 003 103 104 105 106 107 ".indexOf(" "+y.VirtualSpecial+" ")>=0,H.isSxdzq="32"==y.isSelfService,H.isOilCard=H.jdCategory&&"14410"==H.jdCategory[2],H.isOtcToHealth="30003"==i.bizRetCode,H.promomiao=i.seckill,H.flashpurchase=i.flashgs,H.miao=i.miao,H.yuyue=i.yuyue,H.yuyueActive=i.yuyueActive||{},H.jxLive=i.jxLive,H.isPlusZxGou=!1,H.avlCoupon=i.avlCoupon,H.prizeCoupon=i.prizeCoupon,H.couponGuide={},i.newerLayer&&(i.newerLayer.bottomText=i.newerLayer.bottomText&&i.newerLayer.bottomText.replace("仅剩",""),H.newerLayer=F({},i.newerLayer,{show:!1,hidden:!0,btnText:"3"==i.newerLayer.popLayerType?"立即登录":"我知道了"})),i.jxviplabel&&1==i.jxviplabel.isShowLabel&&(H.jxviplabel=i.jxviplabel),H.jxLive&&H.jxLive.liveFlowUrl&&!J&&(H.jxLive.liveFlowUrl=""),H.maskSkuConfig=i.maskSkuConfig,H.maskSkuConfig){var j=getApp();H.maskSkuConfig.canLaunchToJxapp=j&&j.isAppShare&&j.isAppShare.fromJxapp}H.newDrugGray=H.jdCategory&&"13314"==H.jdCategory[0]&&H.isZiying&&window._itemGlobal&&window._itemGlobal.M_drugSwitch,H.clothesColor=i.clothesColor||[],H.upc=i.upc||h.upc||"",H.showDaojiaSku=H.upc&&"1"==y.zywtzbs,H.jdfwj=y.jdfwj,H.jdfwjPbAddCart=1==H.jdfwj||3==H.jdfwj||"2"==H.jdfwj&&"1"==y.pbjc;var O=i.chnImg||[];H.isPlus&&O.length>=1&&(H.focusImages=O),H.isECard||H.isDzItem||H.isHYKHSP||H.isPresale||H.isYuYue||H.isQianggou||H.isHeyue||H.isPrescribeDrug||H.isfqy||H.isSamGoods||H.isSamGoods2||H.isJMa&&H.hasBigouma||H.isLoc||H.isOnlineService||H.isJdGame||H.isTencentVideo?H.isSpecItem=!0:H.isSpecItem=!1,H.noSaleFlag=0,H.locAddCartDirect=!1,y.locfwlx&&(y.locfwlx||"").split(",").forEach(function(e){"1"==e&&(H.locAddCartDirect=!0)}),H.clothesColor.length&&H.clothesColor.forEach(function(e){e.imagePath=M.getImg(e.imagePath||"",80,80)}),H.isPingou&&b(H,i),!H.isNormalItem||i.price&&i.price.p||(H.isNeedRegainPrice=!0),i.stock||(H.isNeedRegainStock=!0),(H.skuMark&&1==H.skuMark.isSds||1==H.spAttr.fdms||4==H.spAttr.tssp)&&(H.isOfflineStore=!0),1==y.wjtyd&&(H.isOfflineStore=!0),H.isCashBack=H.skuMark&&1==H.skuMark.gwfx,H.gwfxInfo={},H.isSubscribeCar="1"===y.isLOC&&"12379"==H.jdCategory[0],H.priceObj=d(H.price),x(H),Object.assign(H,S(H.promov2[0]||{})),g(v),H.isSupportYanbao=!H.isfqy,H.isSupportGift=H.isSupportCard&&!(H.isPresale||H.isXnzt||H.isfqy||H.isQianggou||H.isYuYue),H.isSupportPackageJd=!(H.isPresale||H.isOverseaPurchase>0||"1"==y.factoryShip||"52"==H.stockSid),l(i),H.props=p(),H.noSkuSwitch=!u(H.props),C(H.item),T(H),H.sharePrices=w(H),k(),D(i),v.self_D?H.sfpShopName=v.self_D.vender||"":v.D&&(H.sfpShopName=v.D.vender||""),t(H),s(H,e),H.isJx&&e.needReport&&Y.reporter.reportExposure(G.EXP_JINGXUAN),i.wq_addr&&((0,R.updateAddress)({wq_addr:i.wq_addr}),H.isNeedRefreshAddress=!0),c(H)}})}function t(e){var i=e.pingouInfo,r=void 0===i?{}:i,n=e.itemType,o=e.pgActiveFlag,t=void 0===o?"0":o,s=e.skuId,a=e.jdPrice,u=e.stock,p=void 0===u?{}:u,c=e.suyuanIcon,l=e.suyuanBanner,f=e.afterDiscountPriceGray,d=e.hasAfterDiscountPrice,g=e.prizeQualification,m=r.isNewerSingleTuan,h=r.isNewerNoTuan,v=r.isNewerNoPin,y=r.newerFlag,I=r.isNewer,P=r.price,S=p.StockState,k={33:1,39:2,36:3,34:4,40:8}[S]||-1,T={33:5,39:5,36:5,34:5,40:6}[S]||-1,x=(0,R.getAddress)().areaId||"",C=c||l?"1":"0";Y.reporter.setPvExtraData({sku:[s,a,k,T,S].join("|"),area:x.split("_").join("|"),pingou_price:P||-1});var w="";for(var N in g)1==g[N]&&(w=N);Y.reporter.setExtraData({item_type:n,pg_active_flag:t+"",is_miantuan:v?"2":h?"1":"0",newer_flag:y+"",is_miantuan_user:I?"1":"0",after_discount_price_gray:f?"1":"0",has_after_discount_price:d?"1":"0",suyuanFlag:C,isNewerSingleTuan:m,property:w})}function s(e,i){if(i.needReport){var r=e.freight,n=void 0===r?{}:r,o=e.canBuy?G.EXP_VIEW_CAN_BUY:G.EXP_VIEW_CANNOT_BUY,t="http://wq.jd.com/wxapp/pages/item/detail/detail?as="+(i.actid||0)+"&pps="+(i.pps||"");i.pps&&q.default.setPPS(i.pps),Y.reporter.reportDetailPV(t,e.skuId,e.venderId,o,e.isQianggou,{shipping:n.dcashDesc||""}),Y.reporter.reportExposure(o)}}function a(){return(0,z.realStock)({skuId:H.skuId,venderId:H.venderId,jdCategory:H.jdCategory}).then(function(e){if(H.isNeedRegainStock=!1,e.stock){var i=e.stock;H.stock=r(i)}else H.stock={StockState:33,StockStateName:"有货"},console.log("Network Error data.stock false");return g(H.stock),H}).catch(function(e){e.code,e.message;return H.stock={StockState:33,StockStateName:"有货"},g(H.stock),H})}function u(e){var i=!1;return e&&e.length?(e.forEach(function(e){e&&e.value&&e.value.length>1&&(i=!0)}),i):i}function p(){var e={1:"国际标准",2:"中国码",3:"意大利码",4:"法国码",5:"美国码",6:"英国码",7:"德国码",8:"日本码",9:"韩国码",10:"澳大利亚码",11:"俄罗斯码",12:"丹麦码",13:"巴西码",14:"罗马数字",15:"数字码"},i=H.item,r=[],n=i.saleProp,o=void 0===n?{}:n,t=i.newColorSize,s=void 0===t?[]:t,a=i.spAttr,u=void 0===a?{}:a,p=i.salePropSeq,l=void 0===p?{}:p,f=[];if(i.skuProp={},s.length){if(i.skuProp.salePropArr)f=i.skuProp.salePropArr,l=i.skuProp.salePropSeq;else{for(var d in o)o.hasOwnProperty(d)&&o[d]&&f.push(d);for(var g=[],m="",h="",v=[],y=0,I=f.length;y<I;y++)v=(l[h=f[y]]||[]).filter(function(e){return(e||"").trim()}),l[h]=v,v.length?((m=o[h]||"").length>2&&(m=m.replace(/^选择/,"").substr(0,4)),g.push(m)):f[y]="";f=f.filter(function(e){return""!==e}),i.skuProp.salePropArr=f,i.skuProp.salePropSeq=l,i.skuProp.propNameArr=g}if(i.skuProp.salePropArr&&i.skuProp.salePropArr.length)for(var P=i.skuProp.salePropArr,S=i.skuProp.propNameArr||[],k=0,T=P.length;k<T;k++){var x={};u.cmmz&&"1"!==u.cmmz&&"2"!==u.cmmz&&"尺码"===S[k]&&(x.sizeCode=u.cmmz,x.spuId=H.spuId,x.sizeText=e[u.cmmz],x.isSizeGuideShow=!0),x.name=P[k],x.text=S[k],x.value=l[P[k]]||[],x.current=c(P[k],i),x.text&&r.push(x)}return r}}function c(e,i){if(e){var r=i.newColorSize;if(!r.length)return"";for(var n=0,o=r.length;n<o;n++)if(r[n].skuId==i.skuId)return r[n][e]||""}}function l(e){if(e.taxinfov2||e.taxinfo){var i=e.taxinfov2||e.taxinfo;H.globalInfo={nationalFlag:M.getImg(i.nationImgMap&&i.nationImgMap.m||""),nation:i.nationName||"",tax:i.taxContent||i.taxTxt&&i.taxTxt.content||""},H.serviceIconList=i.iconInfoVoList||i.serviceIconList,H.taxTxt=i.taxTxt||{title:i.taxTitle,content:i.taxContent,detail:i.taxDetail},H.spAttr&&"1"==H.spAttr.qqjx&&(H.serviceIconList=i.jingXuanVo&&i.jingXuanVo.serviceList||i.jingXuan&&i.jingXuan.serviceList)}}function f(e){return(e=Number(e))>0?e.toFixed(2):"暂无定价"}function d(e){var i={};if(e.p&&(i.price=f(e.p),i.marketPrice=f(e.m)),e.l>0&&parseFloat(i.price)<parseFloat(e.l)&&(i.linePrice=f(e.l),H.flashpurchaseFlag&&(i.oriPrice=i.linePrice,H.opPrice=i.linePrice)),e.up){var r=[];switch(r=e.up.split(","),i.priorityPrice="",r[0]){case"tkp":e.tkp>0&&parseFloat(i.price)>parseFloat(e.tkp)&&(i.specialPrice=f(e.tkp),i.priorityPrice="specialPrice");break;case"tpp":e.tpp>0&&parseFloat(i.price)>parseFloat(e.tpp)&&(i.plusPrice=f(e.tpp),i.priorityPrice="plusPrice");break;case"sp":e.sp>0&&parseFloat(i.price)>parseFloat(e.sp)&&(i.samPrice=f(e.sp),i.priorityPrice="samPrice");break;case"sfp":e.sfp>0&&parseFloat(i.price)>parseFloat(e.sfp)&&(i.sfpPrice=f(e.sfp),i.priorityPrice="sfpPrice");break;case"nup":e.nup>0&&parseFloat(i.price)>parseFloat(e.nup)&&(i.nupPrice=f(e.nup),i.priorityPrice="nupPrice");break;case"stp":e.stp>0&&parseFloat(i.price)>parseFloat(e.stp)&&(i.stpPrice=f(e.stp),i.priorityPrice="stpPrice");break;case"fmp":e.fmp>0&&parseFloat(i.price)>parseFloat(e.fmp)&&(i.fmpPrice=f(e.fmp),i.priorityPrice="fmpPrice");break;case"vdp":e.vdp>0&&parseFloat(i.price)>parseFloat(e.vdp)&&(i.vdpPrice=f(e.vdp),i.priorityPrice="vdpPrice")}}return e.ext&&(i.ext=e.ext),i}function g(e){var i=[],r=void 0;H.venderName=H.venderName||(e.self_D||e.D||{vender:"京东"}).vender||"",H.venderType=e&&e.D&&e.D.type,H.isJDexpress=e&&e.isJDexpress,H.stockSid=e&&e.sid;var n=H.item||{};if(n.spAttr=n.spAttr||{},"34"==e.StockState||"0"==e.StockState?(H.canBuy=!1,H.isNoStock=!0,H.tipsContent=H.pingouInfo&&H.pingouInfo.stockStateDesc||"抱歉，此商品在所选地址无货或不支持配送"):"36"==e.StockState?(H.canBuy=!0,H.tipsContent="",e.Drd?r="此商品为预定商品，下单后在"+e.Drd:e.stockDesc&&(r=v(e.stockDesc))):(H.canBuy=!0,H.tipsContent=""),h(e,i,n),e.promiseYX)if(n.spAttr&&n.spAttr.is7ToReturn){var o=n.spAttr.is7ToReturn,t=n.spAttr["THWA".toLowerCase()],s=["1","12","22","32","37"];"12345678".includes(o)&&t&&!s.includes(t)?m(i,e.promiseYX.iconSrc,e.promiseMark,e.promiseYX.iconCode,!0):"service_noreturn"===e.promiseYX.iconCode?m(i,e.promiseYX.showName,e.promiseMark,e.promiseYX.iconCode,!1):m(i,e.promiseYX.showName,e.promiseMark,e.promiseYX.iconCode,!0)}else"service_noreturn"===e.promiseYX.iconCode?m(i,e.promiseYX.showName,e.promiseMark,e.promiseYX.iconCode,!1):m(i,e.promiseYX.showName,e.promiseMark,e.promiseYX.iconCode,!0);if(e.ir)for(var a=0;a<e.ir.length;a++)"sendpay_zhun"!=e.ir[a].iconCode&&"special_ziti"!=e.ir[a].iconCode&&("free_delivery_zhong"==e.ir[a].iconCode||"free_delivery"==e.ir[a].iconCode?m(i,e.ir[a].iconSrc,e.ir[a].iconTip,e.ir[a].iconCode,!0,!0):m(i,e.ir[a].iconSrc,e.ir[a].iconTip,e.ir[a].iconCode,!0,!1));var u=H.jdCategory,p=O(void 0===u?[]:u,3),c=p[0],l=p[1],f=p[2];if("12632"==c&&m(i,"药品提示","请仔细阅读产品说明书或者在药师指导下购买和使用","",!0),"12632"==c&&H.isZiying&&(~JSON.stringify(i).indexOf("不支持7天无理由退货")||m(i,"不支持7天无理由退货","不支持7天无理由退货","",!1)),n.spAttr.SoldOversea){var d={1:{shortTitle:"可配送港澳",detail:"支持收货地址为香港及澳门"},2:{shortTitle:"可配送台湾",detail:"支持收货地址为台湾"},3:{shortTitle:"可配送港澳台",detail:"支持收货地址为港澳台"},4:{shortTitle:"可配送海外",detail:"支持收货地址为海外"},5:{shortTitle:"可配送港澳及海外",detail:"支持收货地址为香港、澳门及海外"},6:{shortTitle:"可配送台湾及海外",detail:"支持收货地址为台湾及海外"},7:{shortTitle:"可配送港澳台及海外",detail:"支持收货地址为香港、澳门、台湾及海外"}};d[n.spAttr.SoldOversea]&&m(i,d[n.spAttr.SoldOversea].shortTitle,d[n.spAttr.SoldOversea].detail,"",!0)}H.service=i,H.freight={};var g=e.dcashDesc||"",I="";if(e&&e.wDispatch&&"无货"!==v(e.StockStateName)){var S=+e.sidDely,k=void 0;k=667===S||671===S?"2-7":668===S?"3-12":"5-20",I="从"+e.wDispatch+"发货，预计"+k+"天送达",S>=601&&S<=650&&(I="从"+e.wDispatch+"发货，预计3-7天送达")}e.serviceInfo&&-1!==e.serviceInfo.indexOf("有货（外地跨区调货）,需加收调货服务费")?H.freight.state="有货（外地跨区调货）,需加收调货服务费":e.serviceInfo&&-1!==e.serviceInfo.indexOf("有货（外地跨区调货）,暂免调货服务费")?H.freight.state="有货（外地跨区调货）,暂免调货服务费":e.serviceInfo&&-1!==e.serviceInfo.indexOf("跨区调货")?H.freight.state="有货（外地跨区调货）":H.freight.state=v(e.StockStateName),H.isYuYue&&H.yuyue&&H.yuyue.state<=3&&(H.freight.state="",H.tipsContent="",H.canBuy=!0),H.isJMa&&"[无货]"===H.freight.state&&(H.freight.state=""),H.isJMa&&H.isNoStock&&(H.tipsContent=""),H.freight.dcashDesc=v(g),H.freight.serviceInfo="36"==e.StockState?r:e.promiseResult?v(e.promiseResult.replace(/。$/gi,"")):I,H.freight.df=(e.D||e.self_D||{}).df,6144!=c&&(H.freight.weightValue=e.weightValue),H.isPingou&&y(e,n);var T=P(),x=T.canBuy,C=T.tipsContent;!1===x&&(H.canNotBuyHere=!0,H.canBuy=!1),H.plusZxGouYuyueNotPlus&&H.canBuy&&(H.tipsContent="本活动限PLUS用户专享，开通PLUS即可参与"),H.tipsContent=void 0===C?H.tipsContent||"":C,c&&c&&f&&("9192"==c&&"9196"==l&&["1505","14697","14698","12609","14699","12610","14700","14701","1502","1504","1506","13172"].includes(f)&&(H.isAdultGoods=!0),"1315"==c&&"1345"==l&&"1368"==f&&(H.isAdultGoods=!0))}function m(e,i,r,n,o,t){var s={};s.title=i,s.text=r,s.iconCode=n,s.iconState=o,t?e.unshift(s):e.push(s)}function h(e,i,r){try{var n="",o="";e.serviceInfo&&(o=e.serviceInfo.replace(/<.*?>/gi,""));var t=o.split(/,|，/),s=(t[0]||"").replace(/\s+/g,""),a=t[1]||"";if(r.spAttr){var u=e&&e.isJDexpress;"1"==r.spAttr.factoryShip?(o=1==u?"由京东指定厂家或供应商提供发货服务，京东提供配送服务":"由京东指定厂家或供应商提供发货和配送服务",n=1==u?"厂商发货京东配送":"厂商发货配送"):r.spAttr.isOTC>0||~s.indexOf("京东大药房")?(o="由 京东大药房 发货，并提供售后服务",n="京东大药房发货&售后"):"3"==r.spAttr.isOverseaPurchase?(n="京东国际发货&售后",o="由京东国际发货并提供售后服务"):"2"==r.spAttr.isOverseaPurchase&&1==u?(n="京东国际发货&店铺售后",o="由京东国际发货，店铺提供售后服务"):"1"==r.spAttr.isOverseaPurchase?n="商家发货&京东售后":r.spAttr.isExpByjd||~s.indexOf("京东")?(r.venderId&&!/^并| ?提供/.test(a)||(n="京东发货&售后"),~a.indexOf(H.venderName)&&(n="京东发货&商家售后")):~s.indexOf(H.venderName)&&(n="商家发货&"+(~a.indexOf("京东")?"京东":"")+"售后")}H.isSCF&&"京东发货&售后"==n&&(n="京东发货&店铺售后",o="由京东发货，店铺提供售后服务"),m(i,n=n||"发货&售后",v(o),"",!0)}catch(r){e.serviceInfo&&m(i,"发货&售后",v(e.serviceInfo),"",!0)}}function v(e){return"string"==typeof e?e.replace(/<[^>]+>/g,""):""}function y(e,i){var r=/<\/?b>/g,n="",o="";if(e&&e.StockState){switch(e.promiseResult&&(o=e.promiseResult.replace(r,"")),e.StockState){case 33:n="现货";break;case 34:n="无货",o||(o="此商品暂时售完");break;case 36:n="采购中",o||(o=e.Drd?"此商品为预定商品，下单后在"+e.Drd:e.ArrivalDate?"预计"+e.ArrivalDate+"日后有货，现在可下单":2!=e.rfg||2!=i.skuType&&3!=i.skuType?"商品到货后发货，现在可下单":"拼购成功后7-9周发货");break;case 39:n="有货",o||(o="拼购成功后2-6天发货");break;case 40:n="有货",o||(o=2!=e.rfg||2!=i.skuType&&3!=i.skuType?"拼购成功后2-6天发货":"预计拼购成功后5-10天发货")}H.freight.state=n,H.freight.serviceInfo=o}}function I(e){return{tipsContent:e||"抱歉，该商品暂不支持在此购买",canBuy:!1}}function P(){var e=H,i=e.spAttr,r=e.jdCategory,n=e.stock,o=void 0===n?{}:n,t=e.skuId,s=e.isZiying,a=e.bizRetCode,u=e.bizMsg,p=e.isNoStock,c=e.isOtcToHealth,l=o.D&&o.D.type;if("30001"==a)return I(u);if(1==i.isLOC||2==i.isLOC||4==i.isLOC)return{};if("6980"==r[2])return{};if(/^3\d{7}$/.test(t))return I();if(/^20\d{10}$/.test(t)){var f=r[2];if("14402 14385 14386 14387 14389 14390 14391 14392 14395 14399 14400 14388 14393 14394 14396 14397 14398 14401".indexOf(f)>-1)return I()}if(H.isWareOff)return I("抱歉，该商品已下架");if("暂无定价"===H.priceObj.price)return I("抱歉，该商品暂不支持购买");if(r&&r.length>2){var d=r[0],g=r[2];if("4938"===d&&"9392"!==g||~" 1195 13046 13121 13532 13680 ".indexOf(" "+g+" "))return I();if("12274"==g)return I("抱歉，该商品暂不支持在此购买");if("12856"==g&&s)return I("抱歉，该商品暂不支持在此购买")}if(i){if(i.isLOC>1||"1"===i.PinGou||"1"===i.HYKHSP||"1"===i.isPickingGoods||"2"===i.isPickingGoods||1*i.isWeChatStock>0&&!(1*i.isWeChatStock&1))return I();if("1"===i.jdfwj||"3"===i.jdfwj)return I("抱歉，该商品不支持单独购买");if("1"===i.isSelfService||"2"===i.isSelfService||"5"===i.isSelfService||"1"==i.GiftsGoods||"1"===i.isPackBox||"1"===i.isGiftCard)return I("抱歉，该商品不支持单独购买");if("3"===i.LeaseType||"1"===i.fqy||"1"===i.Customize||"2"===i.Customize)return I();if("1"===i.tsop||"2"===i.tsop)return I()}if(["146426","635467","117761","591371","198809"].indexOf(H.venderId)>-1)return I();if("719574"===H.venderId)return I("抱歉，该商品仅支持在京东APP上购买");if(o.D&&613998==o.D.id)return I();if(H.feetype&&H.feetype.datas){if(H.feetype.dis)return I("抱歉，合约机暂不支持在此购买");for(var m in H.feetype.datas)if(H.feetype.datas[m].feetypes[0].sku==H.skuId&&"100"==H.feetype.datas[m].feetypes[0].ft)return{};return I("抱歉，合约机暂不支持在此购买")}return"101"==l?I("抱歉，该商品暂不支持在此购买"):c&&!p&&H.isNormalItem?(H.isToJdhealthOrder=!0,{tipsContent:u,canBuy:!0}):{}}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.pis&&e.pis.length){var i={};try{for(var r,n=e.pis,o=0,t=n.length;o<t;o++){var s=(r=n[o])[29];if(s){var a=s.replace(/(\.00|\.0[^\d])/g,""),u=~a.indexOf("!@@!")?a.split("!@@!"):[];if(!(a=(0,Y.str2json)(u.length>0?u[0]:a))||!a.length){a="未知";break}var p=a.filter(function(e){return e&&2===e.gt&&e.num>0}),c=r.customtag&&"1"==JSON.parse(r.customtag).ifg,l={},f=0;if((p=p.filter(function(e){return e.pno})).length>0)for(var d,g=0,m=p.length;g<m;g++)l[(d=p[g]).pno]||(l[d.pno]={pno:d.pno,poolName:d.poolName,list:[]},f++),l[d.pno].list.push(d);if(f>0){var h=[];for(var v in l)l.hasOwnProperty(v)&&h.push(l[v]);i.poolList=h,i.poolFlag=c}}}return i}catch(e){return console.log("[商详]",e),!1}}}function k(){if(H.jdPrice&&!(H.jdPrice<0)){H.plusTip="",H.isPlus||"101"==H.plusFlag||"201"==H.plusFlag||(H.isTrialPlus="102"==H.plusFlag);var e=H,i=e.yuyue,r=void 0===i?{}:i,n=e.plusFlag,o=e.isPlus,t=r.plusType||0;if(t){var s=r.plusStime||r.qiangStime||"",a=(0,E.default)(s.replace(/-/g,"/")).format("YYYY.MM.DD HH:mm"),u="",p=!1;H.isYuYue&&2==r.state?1==t?(u="PLUS正式会员可于 "+a+" 提前开抢",o&&!/^1/.test(n)||(u="开通"+u,p=!0)):2==t&&(u="PLUS会员可于 "+a+" 提前开抢",o||(u="开通"+u,p=!0)):H.isYuYue&&3==r.state?1==t?(u="PLUS正式会员可于 "+a+" 提前开抢",o&&!/^1/.test(n)||(u="开通"+u,p=!0)):2==t&&(u="PLUS会员可于 "+a+" 提前开抢",o||(u="开通"+u,p=!0)):H.isYuYue&&4==r.state&&M.getServerTime()>=(0,Y.parseTime)(r.plusStime)&&1==r.isBefore&&(1==t?!o||/^1/.test(n)?(u="开通PLUS正式会员可提前抢购",p=!0):u="PLUS正式会员提前抢购中":2==t&&(o?u="PLUS会员提前抢购中":(u="开通PLUS会员可提前抢购",p=!0))),H.plusPriorInfo={tips:u,canOpen:p}}}}function T(e){if(Y.ENV.isXcxEnv){var i=e.jdCategory,r=void 0===i?[]:i,n=e.isPresale,o=e.spAttr,t=void 0===o?{}:o,s=e.skuId,a=e.isSamCard,u=e.isWatsonsCard,p="";n||"13314"===r[0]||"15294"===r[2]||u||a?p="https://wqitem.jd.com/item/view?sku="+s:"15088"===r[2]||"15089"===r[2]?p="https://esfr.m.jd.com/detailsPage?parmkey="+s:["15085","15086","15090","15091","15092"].includes(r[2])?p="https://realestate.m.jd.com/single/"+s:Y.ENV.isPingouXcx||"15116"!==r[1]?1!=t.AuctionStatus&&2!=t.AuctionStatus&&3!=t.AuctionStatus||(p="https://mpaimai.jd.com/man/"+s+".html"):p="https://zufang.m.jd.com/houseDetail/"+s,e.jumpUrl=p}}function x(e){e.priceObj.extraPriceFlag=!0;var i=e.skuMark,r=e.spAttr,n=e.plusLimitBuy;if(!e.isWareOff){if(!e.isPlusZxShop&&n&&n.resultExt&&"1"===n.resultExt.isPlusLimit&&(e.isPlusZxGou=!0),!e.isPlusZxShop&&("1"==r.isKO||e.miao&&"1"==e.miao.isKo)&&(e.isQianggou=!0,e.processType=3),e.isPlusZxShop)e.processType=9,201!=e.plusFlag&&101!=e.plusFlag&&(e.showPlusZxGouTip=!0,e.plusZxGouTip="该商品属于PLUS会员店，仅PLUS会员可购买");else if(i&&i.presale)e.isPresale=!0,e.processType=2;else if("1"==r.YuShou||e.yuyueActive.activeId)e.isYuYue=!0,e.processType=1;else if(e.promomiao){var o=e.promomiao;if(e.seckillFlag=!0,e.priceObj.extraPriceFlag=!1,o.serverTime>=o.intStartTime&&o.serverTime<o.intEndTime&&(e.processType=4),o.serverTime<o.intStartTime){var t=(0,E.default)(1e3*o.intStartTime).format("YYYY.MM.DD HH:mm"),s=(0,E.default)(1e3*o.intEndTime).format("YYYY.MM.DD HH:mm"),a=t.split("."),u=s.split(".");a[0]==u[0]&&(a.shift(),u.shift(),t=a.join("."),s=u.join(".")),o.showTime=t+" - "+s}o.jdPrice=f(o.jdPrice?o.jdPrice:0),o.miaoShaPrice=f(o.miaoShaPrice?o.miaoShaPrice:0),e.promomiao=o,e.price&&(e.price.pp="0"==e.price.pp?"":e.price.pp,e.price.tpp="0"==e.price.tpp?"":e.price.tpp,e.price.tpp&&(e.priceObj.priorityPrice="plusPrice",e.priceObj.extraPriceFlag=!0))}else if(e.flashpurchase&&e.flashpurchase.yn){var p=e.flashpurchase,c=1e3*p.serverTime;if(c<p.et){if(c>p.st&&(e.processType=5),p.st&&p.et){var l=(0,E.default)(p.st).format("YYYY.MM.DD HH:mm"),d=(0,E.default)(p.et).format("YYYY.MM.DD HH:mm");p.showTime=l+" - "+d}p.jdPrice=f(p.jdPrice?p.jdPrice:0),e.flashpurchase=p,e.flashpurchaseFlag=!0}}else"1"!=e.kanjia||e.isPingou||e.isQianggou||"1"===e.spAttr.IsJX||"34"==e.stock.StockState||(e.isKanjia=!0);e.isPlusZxGou&&(e.isQianggou||e.isYuYue?201!=e.plusFlag&&(e.plusZxGouYuyueNotPlus=!0):(e.processType=8,201!=e.plusFlag&&101!=e.plusFlag&&(e.showPlusZxGouTip=!0,e.plusZxGouTip="本商品为PLUS专享购商品，开通PLUS即可购买")))}(e.isPresale||e.isYuYue||e.isQianggou||e.flashpurchaseFlag)&&(e.priceObj.extraPriceFlag=!1),e.isPlusZxShop||e.isPlusZxGou||e.isYuYue||e.isQianggou||e.seckillFlag&&4===e.processType||e.flashpurchaseFlag&&5===e.processType?e.isSpecialProcess=!0:e.isSpecialProcess=!1}function C(e){var i=/(\[\S+\])?(\S+)/;e.Author&&(e.AuthorArr=e.Author.match(i)),e.Editor&&(e.EditerArr=e.Editer.match(i)),e.Drawer&&(e.DrawerArr=e.Drawer.match(i)),e.Photography&&(e.PhotographyArr=e.Photography.match(i)),e.Write&&(e.WriteArr=e.Write.match(i))}function w(e){var i=[e.jdPrice],r="";return e.isNewPingou?[e.pingouInfo.price]:(e.priceObj.extraPriceFlag&&"plusPrice"===e.priceObj.priorityPrice&&(r=e.priceObj.plusPrice),r&&i.push({type:"plus",price:r}),i)}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(1!=e.length)return!1;var i=e[0]||{},r=i.tuan_id,n=i.activeId,o=getCurrentPages(),t=o[o.length-1];if(t&&t.$query){var s=t.$query,a=s.activeid,u=s.tuanid;if(a&&u&&a==n&&r==u)return!0}return!1}function b(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i.pingouItem&&(i.pingouItem.m_bp<=0||1*i.pingouItem.m_bp>=1*i.pingouItem.m_p))return e.isPingou=!1,e.isPingouShop=!1,e.isNewPingou=!1,e.isOldPingou=!1,e.isNormalItem=!0,void(e.isPingouToNormal=!0);e.pingouInfo={};var r=function(){if(i.pingouItem&&i.pingouItem.m_bp){var r=i.pingouItem||{},n=(0,U.minus)(r.m_p||0,r.m_bp);e.pingouInfo.priceDiff=n>0?(0,U.round)(n,2).toFixed(2):"",e.pingouInfo.price=f(r.m_bp),e.pingouInfo.originPrice=f(r.m_p);var o=i.factorySupply||{};o.mark&&o.tips&&o.tips.length&&(e.pingouInfo.isFactorySupply=!0,o.isIndustry="1"==o.isIndustry,o.isPlaceStraight="1"==o.isPlaceStraight,o.markArr=(0,Y.jsonToTplArr)({icon:o.markIcon},o.mark)||[],o.hasIndustryVideo=o.markArr.length>1,e.pingouInfo.factorySupply=o)}else e.isNeedRegainPricePingou=!0,e.pingouInfo.price="暂无定价",e.pingouInfo.originPrice="暂无定价";e.pgBanner&&e.pgBanner.price&&(e.pingouInfo.price=f(e.pgBanner.price))};if(i.pingouActive){var n=i.pingouActive;e.pingouInfo=n,r();var o=n.active_info&&n.active_info.pingou_type||{};e.pingouInfo.pinType=o.type,e.pingouInfo.cannotBuy=!1,e.pingouInfo.cannotSingleBuy=!1,e.pingouInfo.isNewerTuan=!1,e.pingouInfo.isLaNewerTuan=!1,e.pingouInfo.isLimitTuan=3==o.type,e.pingouInfo.isQuanFanTuan=!1,e.pingouInfo.isButie=!1,e.pingouInfo.newerFlag=n.newerFlag,e.pingouInfo.isNewer=1===n.isNewUser,e.pingouInfo.isNewerNoTuan=e.pingouInfo.isNewer&&1===n.isNewerSingleTuan,e.pingouInfo.isNewerNoPin=2==n.isNewerSingleTuan,e.pingouInfo.haveseletTip="",e.pingouInfo.createRuleTip="",e.pingouInfo.joinRuleTip="",e.pingouInfo.onebuyTip="";var t=getApp();switch(e.pgActiveFlag){case 1:e.pingouInfo.isBipin=!0;break;case 2:e.pingouInfo.isNewerTuan=!0;break;case 3:e.pingouInfo.isLaNewerTuan=!0;break;case 5:case 9:e.pingouInfo.isButie=!0;break;case 6:e.pingouInfo.isQuanFanTuan=!0;break;case 8:e.pingouInfo.isAppZx=!0,Y.reporter.reportExposure(G.EXP_JXAPPZX),e.pingouInfo.isAppZxCanLaunch=i.appZhuanxiang&&5==i.appZhuanxiang.subsidyCode,e.pingouInfo.isAppZxCanLaunch&&Y.reporter.reportExposure(G.EXP_JXAPPZX_CREATETUAN_BTN),e.pingouInfo.isAppZxCanLaunchToJxapp=e.pingouInfo.isAppZxCanLaunch&&t&&t.isAppShare&&t.isAppShare.fromJxapp,e.pingouInfo.specialAppZhuanXiang=i.specialAppZhuanXiang}e.pingouInfo.isNewerNoTuan=e.pingouInfo.isNewerNoTuan&&!e.pingouInfo.isAppZx&&!(e.pingouInfo.ext_info&&1==e.pingouInfo.ext_info.isHideCpsTuan),e.pingouInfo.isNewerNoPin=e.pingouInfo.isNewerNoPin&&!e.pingouInfo.isAppZx&&!(e.pingouInfo.ext_info&&1==e.pingouInfo.ext_info.isHideCpsTuan);var s=(e.isPingou&&i.activeTypeInfo||{}).cannotbuy||{};s&&(e.pingouInfo.cannotBuy=s.cannotTuanBuy,e.pingouInfo.cannotSingleBuy=s.cannotSingleBuy,e.pingouInfo.cannotBuyMsg=s.cannotBuyMsg||"");var a=n.recm_tuan_info,u=void 0===a?{}:a,p=n.active_info,c=void 0===p?{}:p,l=(u.recm_tuan_list||[]).filter(function(e){return e.tuan_time_left>0&&e.tuan_real_size<c.tuan_member_count}).sort(function(e,i){return e.tuan_time_left-i.tuan_time_left}),d={head_portrait_url:"https://img11.360buyimg.com/jdphoto/s60x60_jfs/t24697/277/2148369463/2325/5594f2b9/5bc478b7Na0b2e015.png"};if(l.length){var g=!0,m=!1,h=void 0;try{for(var v,y=l[Symbol.iterator]();!(g=(v=y.next()).done);g=!0){var I=v.value;I.tuan_time_left*=1e3,I.current_tuan_time_left=I.tuan_time_left,I.formatTime=(0,Y.getTimeDetail)(I.tuan_time_left,!0),I.leftCount=Number(c.tuan_member_count)-Number(I.tuan_real_size),I.leftCount=I.leftCount>0?I.leftCount:1,I.activeId=B.default.JD.url.getUrlParam("activeid",I.tuan_detail_url),I.head_url=I.head_url||"https://img10.360buyimg.com/jdphoto/s100x100_jfs/t1951/176/1222496278/15607/bbb3b2eb/568cdbf0N4d33c2a4.png",I.tuanList=[{head_portrait_url:I.tuan_owner_url},d]}}catch(e){m=!0,h=e}finally{try{!g&&y.return&&y.return()}finally{if(m)throw h}}}e.pingouInfo.tuanInfoList=l||[],e.pingouInfo.isTuanOfFriend=N(e.pingouInfo.tuanInfoList),e.pingouInfo.isNewerNoTuan||(e.pingouInfo.tjTuanInfo=e.pingouInfo.tuanInfoList[0]);var P={};try{n.oDetailText&&(P=JSON.parse(n.oDetailText))}catch(e){P={},console.error("接口下发新人团文案解析出错")}var S=P,k=S.belt1,T=S.belt2,x=S.haveselet,C=S.createRule,w=S.joinRule,b=S.onebuy,_=S.bottomBtnTips,j=S.buyDialogTips,A=S.belt_icon;if(e.pingouInfo.isNewerTuan&&"0"!=o.msg1&&(e.pingouInfo.cannotBuy=!0,e.pingouInfo.newerTuanCannotBuy=!0),(e.pingouInfo.isNewerTuan||e.pingouInfo.isLaNewerTuan||e.pingouInfo.isNewerNoTuan)&&(e.pingouInfo.bannerTips=[],e.pingouInfo.haveseletTip="",e.pingouInfo.createRuleTip="",e.pingouInfo.joinRuleTip="",e.pingouInfo.onebuyTip="",e.pingouInfo.skuruleTips=[],A&&(e.pingouInfo.bannerIcon=A.replace("http://","https://")),(e.pingouInfo.isNewerTuan||e.pingouInfo.isLaNewerTuan)&&(e.pingouInfo.canMaxBuy=n.canMaxBuy,(k||T)&&(k&&e.pingouInfo.bannerTips.push(k),T&&e.pingouInfo.bannerTips.push(T)),x&&(e.pingouInfo.haveseletTip=x),C&&(e.pingouInfo.createRuleTip=C),w&&(e.pingouInfo.joinRuleTip=w),b&&(e.pingouInfo.onebuyTip=b)),e.pingouInfo.isNewerNoTuan&&(_&&(e.pingouInfo.newerNoTuanBottomMsg=(0,Y.jsonToTpl)({priceDiff:"￥"+e.pingouInfo.priceDiff,tuanPrice:"￥"+e.pingouInfo.price},_)),j&&(e.pingouInfo.newerNoTuanSingleBuyMsgArr=(0,Y.jsonToTplArr)({priceDiff:"￥"+e.pingouInfo.priceDiff,tuanPrice:"￥"+e.pingouInfo.price},j)))),e.pingouInfo.isNewerNoPin&&_&&(e.pingouInfo.newerNoPinBottomMsg=_),e.pingouInfo.isButie||e.pingouInfo.isAppZx){var D=e.pgSkuLayerRule,O=D.icon,F=D.rightTips,L=void 0===F?[]:F;L.length&&(e.pingouRuleInfo.icon=O,e.pingouRuleInfo.pingouRule=L[0],e.pingouRuleInfo.pingouRule2=L[1])}if(e.pingouInfo.isButie){var z=i.butie,M=z.stockStateDesc,E=z.type,R=z.tips,X=z.subsidyCode,q=z.bannerBottomTips;"2"===E&&["2","4"].includes(X)&&R&&!e.pingouInfo.cannotBuy&&(e.pingouInfo.specBottomMsg=R),M&&(e.canBuy=!1,e.pingouInfo.stockStateDesc=M),e.pingouInfo.isNewerNoTuan||Y.reporter.reportExposure(G.EXP_BUTIE_OPEN_TUAN),e.pgBanner.rightTips=q}if(e.duoDanFan&&e.duoDanFan.tips&&e.duoDanFan.title&&e.duoDanFan.desc&&(e.pingouInfo.duoDanFan=e.duoDanFan),e.pingouInfo.isNewerTuan||e.pingouInfo.isLaNewerTuan||e.pingouInfo.cannotBuy&&!e.pingouInfo.isButie&&!e.pingouInfo.isAppZx?e.pingouInfo.cannotAddCart=!0:e.pingouInfo.cannotAddCart=!1,e.pingouInfo.recm_tuan_info){var Z=!0,J=!1,H=void 0;try{for(var V,Q=e.pingouInfo.recm_tuan_info.recm_tuan_list[Symbol.iterator]();!(Z=(V=Q.next()).done);Z=!0){var W=V.value;W.tuan_owner_nickname=W.tuan_owner_nickname.replace(/(^[^])([^]*)([^]$)/,"$1***$3")}}catch(e){J=!0,H=e}finally{try{!Z&&Q.return&&Q.return()}finally{if(J)throw H}}e.pingouInfo.pingouMemberCount=e.pingouInfo.recm_tuan_info.pingou_member_count}e.pingouInfo.limitBuyOne=e.pingouInfo.isLimitTuan||e.pingouInfo.isQuanFanTuan,e.pingouInfo.limitSingleBuyOne=e.pingouInfo.isQuanFanTuan,e.pingouInfo.limitBuy=i.limitBuy||""}else e.isNeedRegainPingouRecommendTuan=!0,r();e.pgShopInfo={shopSellSkuNumber:i.shopSellSkuNumber&&"0"!=i.shopSellSkuNumber?i.shopSellSkuNumber:"1",shopSellSkuNumberStr:i.shopSellSkuNumberStr&&"0"!=i.shopSellSkuNumberStr?i.shopSellSkuNumberStr:"1",shopSkuNumber:i.shopSkuNumber&&"0"!=i.shopSkuNumber?i.shopSkuNumber:"1"},i.prizeQualification&&(e.prizeQualification=i.prizeQualification);var K=i.couponGuide,$=void 0===K?{}:K,ee=i.couponGuideShow,ie=$.totalBenefit,re=$.purchaseOnePrice;e.afterDiscountPriceGray=1==ee,e.hasAfterDiscountPrice=!!(ie>0&&re),e.afterDiscountPriceGray&&e.hasAfterDiscountPrice&&(e.afterDiscountPrice=(0,U.round)((0,U.divide)(re,100),2).toFixed(2),e.afterDiscountTotalBenefit=(0,U.round)((0,U.divide)(ie,100),2).toFixed(2),e.couponGuide=$)}function _(e,i){i||(i=window.location.href),e=e.replace(/[[]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(i);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}function j(e){e&&(H.oriPrice=f(e.op?e.op:"0.00"),H.jdPrice=f(H.isKeplerScene&&e&&e.bp||(e?e.p:0)||B.default.JD.url.getUrlParam("price")||"0.00"),H.jdMprice=f(e.m?e.m:"0.00"),H.np=e.np||{},H.plusPromoInfo=e.ext&&JSON.parse(e.ext).PLUS||null,H.initPrice=JSON.parse(JSON.stringify(H.price)),H.priceObj=d(e),k(),H.stock&&g(H.stock))}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments[1];if(!e.length)return e;try{var r={};return(e=e.sort(function(e,r){return i==e.skuId?-1:1})).filter(function(e){for(var i="",n=e.dim||1,o=1;o<=n;o++)i+=o+"__"+(e[o]||"");return!r[i]&&(r[i]=!0,!0)})}catch(i){return e}}function D(e){var i=e.suyuanLogo,r=e.suyuanData,n=void 0===r?{}:r,o=e.suyuanUrl,t=H.isPingou?1:3,s=H.isPingou?"suyuanIcon":"suyuanBanner",a=n.videos;if(a&&a.length){var u=function(e,i){if(!Array.isArray(e)||0==e.length)return"";var r="wifi"==getApp().networkType;return(e.find(function(e){return e.type==("alive"==i?"selfPull":r?"high":"low")})||{}).link},p=a.filter(function(e){return"up"==e.status&&(J||"on_command"==e.status)}).slice(0,3).map(function(e){return Object.assign({},{introduce:e.introduce.replace(/http\b/,"https"),type:e.type,name:e.name,url:u(e.address,e.type)})});p&&p.length>=t&&(H.suyuanVideos=p,i&&(H[s]=i,Y.reporter.reportExposure(H.isPingou?G.EXP_SUYUAN_ICON:G.EXP_SUYUAN_BANNER),o&&(H.suyuanUrl=o)))}}Object.defineProperty(exports,"__esModule",{value:!0});var O=function(){function e(e,i){var r=[],n=!0,o=!1,t=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!i||r.length!==i);n=!0);}catch(e){o=!0,t=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw t}}return r}return function(i,r){if(Array.isArray(i))return i;if(Symbol.iterator in Object(i))return e(i,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),F=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};exports.organize=function(){return o(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).then(function(e){return e.isQianggou?a().then(function(e){return e}).catch(function(i){return e}):e})},exports.getRealStock=a,exports.getRealPrice=function(){return(0,z.realPrice)(H.skuId).then(function(e){return j(e&&e.length?e[0]:{p:-1}),H}).catch(function(e){return e.code,e.message,j({p:-1}),H})};var L=i(require("../../../../../libs/promise.min.js")),B=i(require("../../../../../common/wxcontext")),Y=require("../util/util"),z=require("../model/baseModel"),M=e(require("../../../../../common/fe_helper")),E=i(require("../../../../../libs/day.min.js")),U=require("../../../../../common/numberp.js"),R=require("../../../../../common/userinfo_wqvue"),X=require("../../../../../common/utils"),q=i(require("../../../../../api/Ptag/report_manager_wqvue")),G=e(require("../../constants/ptag-constants")),Z=getApp().systemInfo.SDKVersion,J=(0,X.compareVersion)(Z,"1.7.0")>=0,H={}; 
 			}); 
		define("pages/item/itemBase/js/handler/pingouAction.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTuanStatus=function(e){var r=e.skuId,a=e.activeId,c=e.tuanId,o=e.nickname,s=e.headUrl,d=e.isNewerSingleTuan;return u?t.default.reject({isHold:!0}):(u=!0,new t.default(function(e,t){if(!r)return u=!1,void t();var f={client_id:100,sku_id:r,tuan_id:c||0,active_id:a||0,nickname:o||"",headUrl:s||"",orderId:0,jointype:0,platform:2==n.default.JD.cookie.get("wxapp_type")?9:4,callback:"getTuanStatusCb",app_id:getApp().appId||0};d&&(f.isNewerSingleTuan=d);var l=n.default.JD.cookie.get("item_orderchannel");l&&(l=JSON.parse(l)).cubeinvite&&l.cubeinvite.value&&(f=Object.assign(f,{from:"cubeinvite_"+l.cubeinvite.value})),i.pingouTuanStatus(f).then(function(n){0==n.iRet?(u=!1,e(n)):(u=!1,t({}))}).catch(function(e){var n=e.code,i=e.message;u=!1,t({code:n,message:i})})}))},exports.getNewerTuanSwitch=function(){return i.getPpmsData("newerTuanConfig").then(function(e){return"1"==e[0].riskSwitch}).catch(function(e){return t.default.reject(e)})},exports.getPingouPrice=function(e){var n={skuids:e,origin:"5",platform:"4"};return i.commonRequest({api:"pingouPrice",param:n}).then(function(e){if(e[0]&&e[0].bp&&e[0].bp>0)return e[0];t.default.reject()}).catch(function(){return t.default.reject()})},exports.getPingouRecommendTuan=function(e){var n={sku_id:e,platform:"4",callback:"getPingouTuijianCB"};return i.commonRequest({api:"pingouRecommendTuan",param:n}).then(function(e){if(0==e.iRet||10==e.iRet){var n=e.data,i=void 0===n?{}:n,u={head_portrait_url:"https://img11.360buyimg.com/jdphoto/s60x60_jfs/t24697/277/2148369463/2325/5594f2b9/5bc478b7Na0b2e015.png"};if(i.active_id){var r=i.nick_name||"*******";return r=r.length>7?r.replace(/(^[^])([^]*)([^]$)/,"$1***$3"):r,i.head_url=i.head_url?i.head_url:"https://img10.360buyimg.com/jdphoto/s100x100_jfs/t1951/176/1222496278/15607/bbb3b2eb/568cdbf0N4d33c2a4.png",{activeId:i.active_id,tuan_id:i.tuan_id,tuanList:[{head_portrait_url:i.head_url},u],tuan_owner_url:i.head_url,tuan_owner_nickname:r,leftCount:1}}t.default.reject()}else t.default.reject()}).catch(function(){return t.default.reject()})},exports.drawAfterDiscountCoupons=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1],u={success:!1,successList:[],failList:[]};return e.length?new t.default(function(t,r){i.obtainfterDiscountCoupons(e,n).then(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.ret,r=n.coupon,a=void 0===r?[]:r,c=n.active,o=void 0===c?[]:c;u.success=0===i,a.forEach(function(t){var n=0===t.ret;e.forEach(function(e,i){e.key===t.couponkey&&u[n?"successList":"failList"].push({desc:e.desc,index:i})})}),o.forEach(function(t){var n=0===t.ret&&t.bingolevel>0;e.forEach(function(e,i){e.couponKey===t.couponkey&&u[n?"successList":"failList"].push({desc:e.desc,index:i})})}),t(u)}).catch(function(){t(u)})}):t.default.resolve(u)};var t=e(require("../../../../../libs/promise.min.js")),n=e(require("../../../../../common/wxcontext.js")),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(require("../model/baseModel.js")),u=!1; 
 			}); 
		define("pages/item/itemBase/js/handler/userInfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:521194460,t={isDefault:!1,isPerfect:!1,isBind:!1,isSwitch:!1,url:""};return a.ENV.isMEnv?s.default.resolve(t):r.queryPinStatus(e).then(function(e){if(e&&0===e.errcode){var n=e.state;t.isDefault=1===n||2===n,t.isPerfect=1===n,t.isBind=2===n||4===n,t.isSwitch=3===n&&1===e.defaultFlag,t.url=e.url,t.json=e}return t})}function n(e,t){return r.switchPin({expectPin:(0,i.base64encode)(encodeURIComponent(e)),rurl:t}).then(function(e){var t=e.body,n=void 0===t?{}:t;return 0==n.retcode?s.default.resolve({code:0,message:"切换成功"}):s.default.reject({code:n.retcode,message:n.errmsg})}).catch(function(e){var t=e.code,n=e.message;return s.default.reject({code:t,message:n})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPinStatus=t,exports.checkPinStatus=function(e){var r=2==o.default.JD.cookie.get("wxapp_type"),i=e.loginText||"您当前登录的是临时账号，为了您的资产安全，请先登录京东账号",u=e.switchText||"您当前登录的是临时账号，为了您的资产安全，先切换至您的京东账号",c=e.sceneId||(r?"711394781":"521194460"),l=e.pageUrl||"/pages/item/detail/detail",d=e.skuId,f=e.instance||this;return new s.default(function(e,s){t().then(function(t){var r=t.json,m=void 0===r?{}:r;1==m.defaultFlag?1==m.state||2==m.state||4==m.state?o.default.showModal({title:"温馨提示",content:i,showCancel:!0,confirmText:"去登录",confirmColor:"#E93B3D",success:function(e){e.confirm?(0,a.gotoUrl)(f,{xcx:{url:"/pages/my_pages/accountv2/index",params:{returnUrl:encodeURIComponent("/pages/item/detail/detail?sku="+d),sceneid:c,ptag:"138268.6.21",navBackType:"navigateBack"}},h5:{}}):e.cancel&&s({status:!1})},fail:function(){s({status:!1})}}):3==m.state&&o.default.showModal({title:"温馨提示",content:u,showCancel:!0,confirmText:"去切换",confirmColor:"#E93B3D",success:function(t){if(t.confirm){var r=m.pinList.find(function(e){return 0==e.defaultFlag}),i=r?r.pin:"";n(i,l+"?sku="+d).then(function(t){e({status:!0,pin:i})}).catch(function(e){s({status:!1,message:"切换失败，请稍后重试"})})}},fail:function(){s({status:!1})}}):e({status:!0,pin:m.pin||""})}).catch(function(e){s({status:!1,message:e.message||""})})})},exports.queryIsNewUser=function(){var e=0;return r.isNewUser().then(function(t){return"0"==t.retcode&&t.isNewUser&&(e=t.isNewUser),e})},exports.getSamCardStatus=function(){return r.samCardStatus().then(function(e){var t={};return"0"==e.retcode&&(t.isBind=1==e.sam_is_bind,t.isCardMember=1==e.sam_card_status,t.bindType=e.sam_binding_type),t})};var s=e(require("../../../../../libs/promise.min.js")),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(require("../model/baseModel.js")),i=require("../../../../../common/base64/base64"),a=require("../util/util.js"),o=e(require("../../../../../common/wxcontext")); 
 			}); 
		define("pages/item/itemBase/js/model/baseModel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function t(e){return e&&e.__esModule?e:{default:e}}function r(e){if(0==e.length)return"";var t=e.replace(/&amp;/g,"&");return t=t.replace(/&lt;/g,"<"),t=t.replace(/&gt;/g,">"),t=t.replace(/&nbsp;/g," "),t=t.replace(/&#39;/g,"'"),t=t.replace(/&quot;/g,'"'),t=t.replace(/&hellip;/g,"..."),t=t.replace(/&ldquo;/g,'"'),t=t.replace(/&rdquo;/g,'"'),t=t.replace(/&cap;/g,"∩")}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=[],a=[];e.forEach(function(e){var t=e.key,r=e.roleId,n=e.couponKey,u=e.token;if("couponPool"==t){var i=r.split("-")||[];o.push({active:i[0],level:1*i[1],couponkey:n,token:u})}else a.push({ruleid:1*r,couponkey:t,token:u})});var d={url:i.apiUrlMap.obtainfterDiscountCoupons,method:"POST",data:{source:"shangxiang",ispg:1,skuid:t,activeinfo:JSON.stringify(o),couponinfo:JSON.stringify(a)},channel:"http-direct"};return p.default.drawAfterDiscountCoupons&&(d.ump={bizId:p.default.BIZ_ID_WQVUE,opId:p.default.drawAfterDiscountCoupons}),(0,l.request)(d).then(function(o){var a=o.body;return r&&a&&2==a.ret?m.doLogin().then(function(){return n(e,t,!1)}):a},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})}Object.defineProperty(exports,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.getItemInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.sku,r=e.url,n=e.isInit,o=e.key,i=e.fckr;if(r){var c=(0,d.createURL)((r.indexOf("https:")<0?"https:"+r:r).replace("&areaid=&","&"),{datatype:"1",areaid:(0,s.getAddress)().areaId});return(0,a.default)({apiUrl:c}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})}var f={sku:t,callback:"skuInfoCB",cgi_source:d.ENV.isXcxEnv?"xcx":"item",areaid:(0,s.getAddress)().areaId,fckr:i};o&&(f.key=encodeURIComponent(o)),n||(f.datatype="1");var p=getCurrentPages(),l=p[p.length-1];if(l&&l.visitedSku&&l.visitedSku[t]&&(f.t=Math.random()+""),l&&l.$query){var g=l.$query,v=g.activeid,h=g.tuanid,y=g.topLiveId;v&&h&&(f.activeid=v,f.tuanid=h),y&&n&&(f.topLiveId=y)}var b=function(){return(0,a.default)({api:"itemInfo",param:f,cacheExcludeParamKeys:["datatype"]}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})};return m.getLoginPromise({mode:"silent"}).then(b,b)},exports.realStock=function(e){var t=e.skuId,r=e.venderId,n=e.jdCategory;return(0,a.default)({api:"realStock",param:{skuId:t,venderId:r,cat:n.join(","),area:(0,s.getAddress)().areaId,extraParam:'{"originid":"3"}',buyNum:"1",ch:"5",callback:"getStockCallback",t:Math.random()+""},encoding:"GBK"}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.realPrice=function(e){return(0,a.default)({api:"getRealPrice",param:{skuids:e,origin:"5",area:(0,s.getUserAddressID)(),source:"wxsqitemsou",ext:"11",pin:encodeURIComponent((0,s.gUserData)().pin),t:Math.random()+""}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getMainVideo=function(e){return(0,a.default)({api:"mainVideo",param:{vid:e,type:1}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getAlloverImg=function(e){return(0,a.default)({api:"alloverImg",param:{skuid:e}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getEBook=function(e){return(0,a.default)({api:"eBook",param:{bookCode:e,callback:"eBook_Cb"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getItemFav=function(e,t){return(0,a.default)({api:"itemCheckFav",param:{commId:e,shopId:t||0}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.itemAddFav=function(e,t){return(0,a.default)({api:"itemAddFav",isNeedLogin:!0,returnCode:"iRet",loginCode:"9999",param:{commId:e,shopId:t||0,t:(new Date).getTime()}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.itemDelFav=function(e,t){return(0,a.default)({api:"itemDelFav",isNeedLogin:!0,returnCode:"iRet",loginCode:"9999",param:{commId:e,shopId:t||0,t:(new Date).getTime()}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.profitBelt=function(e){var t=e.skuId,r=e.isCanUseDQ,n=e.isCanUseJQ,o=e.isOverseaPurchase,i=e.jdCategory3,d=e.venderId,c=e.tagId;return(0,a.default)({api:"profitBelt",param:{search:[t,"0"==r?"0":"1","0"==n?"0":"1",o>0?"1":"0",i,d||0,c].join("_")}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.couponList=function(e){var t=e.skuId,r=e.isOverseaPurchase,n=e.jdCategory,o=e.venderId,u=e.isZiying,i=e.isPingouShop,c=e.spAttr,s=void 0===c?{}:c;e.useCache||(g=(new Date).getTime());var f="0"!=s.isCanUseJQ,p="0"!=s.isCanUseDQ,l=r>0;return(0,a.default)({api:"couponList",param:{callback:"getCouponListCB",platform:d.ENV.isWxEnv?5:d.ENV.isSqEnv?4:d.ENV.isMEnv?3:5,cid:n&&n[2],sku:t,popId:3==r?"8889":u?"8888":o,pgshop:i?"1":"0",usejing:f,usedong:p,useglobal:l,t:g}}).then(function(e){return e.body},function(e){return{code:e.code,msg:e.msg}})},exports.activeDraw=function(e){var t=e.active,r=e.level;return(0,a.default)({api:"activeDraw",isNeedLogin:!0,returnCode:"ret",loginCode:"2",param:{ext:"hj:x",active:t,level:r,t:(new Date).getTime()}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.jxNewerActiveDraw=function(e){var t=e.active,r=e.level;return(0,a.default)({api:"jxNewerActiveDraw",isNeedLogin:!0,returnCode:"retcode",loginCode:"2",param:{source:"shangxiang",active:t,level:r,t:(new Date).getTime()}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.userThirdBuy=function(){return(0,a.default)({api:"userThirdBuy",param:{}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.userFinance=function(){return(0,a.default)({api:"userFinance",param:{}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.couponPool=function(e){return(0,a.default)({api:"couponPool",param:{active:e,t:(new Date).getTime()}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.obtainFreeCoupon=function(e){var t=e.sceneid,r=e.key,n=e.roleid;return(0,a.default)({api:"obtainFreeCoupon",isNeedLogin:!0,returnCode:"code",loginCode:"1000",param:{hj:"x",scene:t,key:r,roleid:n,t:(new Date).getTime()}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.jxAppCouponList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.active,r=e.level;return(0,a.default)({api:"jxAppCouponList",param:{active:t,level:r,t:(new Date).getTime()},isNeedLogin:!0,returnCode:"retcode",loginCode:"2"}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.obtainjxAppCoupon=function(e){var t=e.active,r=e.level;return(0,a.default)({api:"obtainjxAppCoupon",param:{active:t,level:r,t:(new Date).getTime()}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.verifyAuthUser=function(){return(0,a.default)({api:"verifyAuthUser",isNeedLogin:!0,returnCode:"retcode",loginCode:"13",param:{callback:"verifyAuth"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.verifyAuthUrl=function(){return(0,a.default)({api:"verifyAuthUrl",isNeedLogin:!0,returnCode:"retcode",loginCode:"13",param:{scene:"weixin",bussinessType:"535",rurl:"/pages/item/detail/detail"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.switchPin=function(e){var t=e.pin,r=e.ref;return(0,a.default)({api:"switchPin",isNeedLogin:!0,returnCode:"retcode",loginCode:"13",param:{expectPin:t,fromtype:"x",sceneid:"521392394",atk:9,rurl:r,t:(new Date).getTime()}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.peijianCategory=function(e){var t=e.skuId,r=e.jdCategory;return(0,a.default)({api:"peijianCategory",param:{source:"item",cat:r[2],sku:t}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.queryPinStatus=function(e){return(0,a.default)({api:"queryPinStatus",param:{source:d.ENV.isWxEnv?"2":"1",sceneid:e}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.btInfo=function(e){var t=e.buyNum,r=e.skuId,n=e.jdCategory,o=e.venderId,i=e.jdPrice,d=e.isXnzt,c=e.isZiying,s=e.isOverseaPurchase;return(0,a.default)({api:"btInfo",param:{num:t||1,skuid:r,cat:n.slice(0,3).join(","),ven:o,price:i,suit:d?"1":"0",jd:c?"1":"0",oversea:s>0?"1":"0"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.isNewUser=function(){return(0,a.default)({api:"isNewUser"}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.samCardStatus=function(){return(0,a.default)({api:"samCardStatus"}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.guessYouLike=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({api:"guessYouLike",param:e},{reportHook:function(e){return{code:e.success?0:1,message:e.error_msg}}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.pinYouLike=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.sku,r=e.recpos,n=void 0===r?"5711":r,o=e.count,i=e.c1,d=e.c2,c=e.c3;return(0,a.default)({api:"pinYouLike",param:{func:"pinlike",recpos:n,param:JSON.stringify({pagenum:1,count:o,sku:t,c1:i,c2:d,c3:c})}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.usedWareRecommend=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.source=e.source||"WQ",(0,a.default)({api:"usedWareRecommend",param:e}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.suitInfo=function(e){var t=e.skuId,r=e.jdCategory,n={channel:d.ENV.isWxEnv?4:d.ENV.isSqEnv?5:d.ENV.isMEnv?2:4,methods:"suitv2",sku:t,cat:(r||[]).slice(0,3).join(","),area:(0,s.getAddress)().areaId};return(0,a.default)({api:"suitInfo",param:n,encoding:"GBK"},{reportHook:function(e){var t=0;return e&&e.suit&&200==e.suit.status&&e.suit.data||(t=1),{code:t,message:e.error_msg}}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.addressList=function(){return(0,a.default)({api:"addressList",isNeedLogin:!0,returnCode:"errCode",loginCode:"13"}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.cpsSkuInfo=function(e){return(0,a.default)({api:"cpsSkuInfo",param:{skuIds:e}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.unionUser=function(){return(0,a.default)({api:"unionUser",param:{fromPgDetail:"1"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.wqToken=function(){var e=c.default.JD.cookie.get("wq_auth_token");{if(!e)return(0,a.default)({api:"wqToken",isNeedLogin:!0,returnCode:"retcode",loginCode:"13",param:{callback:"getWqAuthTokenCB",biz:"pingou_cps"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})});u.default.resolve(e)}},exports.detailImages=function(e){var t=e.skuId,r=e.descriptionId,n=e.isPlus;return(0,a.default)({api:"detailImages",param:{skuId:t,k:r,type:n?"plus":"normal"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.globalNotice=function(e){var t=e.jdCategory,r=void 0===t?[]:t,n=e.isOverseaPurchase;return(0,a.default)({api:"globalNotice",param:{callback:"globalBuyNoticeCB",platform:"3",category:r[0],type:n}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.specInfo=function(e){var t=e.skuId;return 2==e.type?(0,a.default)({api:"specInfo",param:{k1:t},encoding:"GBK"}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})}):(0,a.default)({api:"specInfo",param:{k:"g"+t,u_source:d.ENV.isXcxEnv?"wxapp":"wxsqitemsou"},dataType:"html",encoding:"GBK"}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.specification=function(e){return(0,a.default)({api:"specification",param:{skuid:e}}).then(function(e){var t=e.body;if(0==t.errcode){var r=t.data.propGroups,n=[];return(void 0===r?[]:r).map(function(e){e.atts&&e.atts.length&&(n=n.concat(e.atts))}),n}return[]},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.addCart=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.t=(new Date).getTime(),(0,a.default)({api:"addCart",returnCode:"errId",loginCode:"13",param:e}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.addCardList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.default)({api:"addCardList",noOtherParam:!0,isNeedLogin:!0,noToken:!0,param:e},{},!0).then(function(e){return e.body.success?u.default.resolve(!0):u.default.reject("添加失败，请稍后再试")},function(e){e.code;var t=e.msg;return u.default.reject(t)})},exports.checkChat=function(e){return(0,a.default)({api:"checkChat",param:{pid:e,callback:"checkChat"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.isErshouSku=function(e){return(0,a.default)({api:"isErshouSku",param:{skuIds:e}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.isNewSku=function(e){return(0,a.default)({api:"isNewSku",param:{usedSkuId:e}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.huanxinEnter=function(e){var t=e.skuId,r=e.isZiying,n=e.jdCategory,o=void 0===n?[]:n,i=e.areaIdArr,d=void 0===i?[]:i;return(0,a.default)({api:"huanxinEnter",param:{skuId:t,source:4,cid1:o[0],cid2:o[1],cid3:o[2],province:d[0]||"",city:d[1]||"",county:d[2]||"",commodityType:r?2:1}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getPpmsData=function(e){if(v[e]||"object"==("undefined"==typeof window?"undefined":o(window))&&window[e])return u.default.resolve(v[e]||window[e]);var t=null,r=/^(https*:){0,1}\/\/wq.360buyimg.com\/data\/ppms\/js\/ppms.pagev(\d+)\.jsonp$/i;return i.apiUrlMap[e]&&r.test(i.apiUrlMap[e])&&(t="showPageData"+i.apiUrlMap[e].match(r)[2]),(0,a.default)({api:e,param:{call:t||e+"_Cb"},expire:"3m",cacheKey:"itemppms_"+e},{reportHook:function(t){return t.data&&t.data.length?{code:0}:{code:-1,message:"getPpmsData error"+e}}}).then(function(t){var r=t.body;return r&&r.data instanceof Array&&(v[e]=r.data),u.default.resolve(v[e])})},exports.getVenderInfo=function(e){return(0,a.default)({api:"getVenderInfo",param:{venderIds:e,call:"getVenderInfo"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.shopCheckFav=function(e){return(0,a.default)({api:"shopCheckFav",param:{venderId:e,callback:"shopCheckFav"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.shopAddFav=function(e){return(0,a.default)({api:"shopAddFav",isNeedLogin:!0,returnCode:"iRet",loginCode:"9999",param:{venderId:e,callback:"shopAddFav",t:(new Date).getTime()}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.shopDelFav=function(e){return(0,a.default)({api:"shopDelFav",isNeedLogin:!0,returnCode:"iRet",loginCode:"9999",param:{venderId:e,callback:"shopDelFav",t:(new Date).getTime()}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getShopGiftList=function(e){return(0,a.default)({api:"getShopGiftList",param:{venderId:e,channel:6}}).then(function(e){var t=e.body;return t&&!t.errcode?t.shopgift||[]:[]},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getShopSignStatus=function(e){return(0,a.default)({api:"getShopSignStatus",param:{venderId:e,channel:2}}).then(function(e){var t=e.body;return t&&!t.errcode?{type:t.data&&t.data.type,code:t.data&&t.data.code}:{type:"",code:""}},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getShopActivityList=function(e){return(0,a.default)({api:"getShopActivityList",param:{venderId:e,callback:"getShopActivityList",t:(new Date).getTime()}}).then(function(e){var t=e.body;return!t||0==t.iRet&&1!=t.fan?(t.gift||[]).filter(function(e){return e.activeId&&e.giftId&&0==e.giftType&&0==e.giftLeftState&&1==e.state&&(e.dongCoupon&&e.dongCoupon.discount||e.jingBean&&e.jingBean.sendCount||e.jingCoupon&&e.jingCoupon.discount||e.point&&e.point.sendCount)}):[]},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.drawShopActivityGift=function(e,t,r){return(0,a.default)({api:"drawShopActivityGift",param:{venderId:e,activeId:t,giftId:r,t:(new Date).getTime(),callback:"drawShopActivityGift"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getAnswerList=function(e){return(0,a.default)({api:"getAnswerList",param:{productId:e,callback:"getAnswerList"}}).then(function(e){var t=e.body;if(0==t.resultCode){var r=t.result&&t.result.questionList||[];return r=r.slice(0,2),r=r.map(function(e){return f.only(e,"content answerCount")})}return[]},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getActInfo=function(e,t){return(0,a.default)({api:"getActInfo",param:{sSkuInfo:'[{"ddwSkuId": '+e+', "ddwNowPrice": '+t+"}]"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.addedService=function(e){var t=e.skuId,r=e.jdCategory,n=void 0===r?[]:r,o=e.brandId,i=void 0===o?"":o,d=e.jdPrice,c=void 0===d?0:d;return(0,a.default)({api:"addedService",param:{skuid:t,cat:n.join(","),sence:23,brandid:i,price:c,area:(0,s.getAddress)().areaId,functionids:"8,12"}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getNearLocShop=function(e,t,r){return(0,a.default)({api:"getNearLocShop",param:{shopgroupid:e,longitude:t,latitude:r}}).then(function(e){var t=e.body;if(0==t.errcode&&t.data&&t.data[0]){var r=t.data[0];return{locationid:r.addOneCode&&r.addSecCode?r.addOneCode+"-"+r.addSecCode+"-"+(r.addCode||0):"",id:r.storeId,name:r.storeName,addr:r.storeAddress,phone:r.phone}}return{}},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getShopAllAddr=function(e,t){return(0,a.default)({api:"getShopAllAddr",param:{venderid:e,shopgroupid:t,callback:"getShopAllAddr"}}).then(function(e){var t=e.body;if(0==t.errcode)return t.data},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getShopListById=function(e){var t=e.venderid,r=e.shopgroupid,n=e.page,o=e.addressid,i=e.level;return(0,a.default)({api:"getShopListById",param:{venderid:t,shopgroupid:r,page:n,pagesize:10,addressid:o,level:i,callback:"getShopListById"}}).then(function(e){var t=e.body;if(0==t.errcode)return t.data},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.changelaglat=function(e,t){return(0,a.default)({api:"changelaglat",param:{lng:e,lat:t}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getShopRealPrice=function(e,t){return(0,a.default)({api:"getRealPrice",param:{skuids:e,origin:"5",area:(0,s.getUserAddressID)(),source:"wxsqitemsou",ext:"11",pin:encodeURIComponent((0,s.gUserData)().pin),t:Math.random()+"",storeid:t}}).then(function(e){var r=e.body;return r[0].storeid=t,r},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getCommentList=function(e,t,n,o,i){var d={version:"v2",sku:n,page:t+1,pagesize:10,sorttype:9==e?6:5,callback:"getCommentList"};return void 0!==e&&9!=e&&Object.assign(d,{score:e}),o&&Object.assign(d,{rid:o}),i&&Object.assign(d,{skucomment:1}),(0,a.default)({api:"getCommentList",param:d}).then(function(e){var t=e&&e.body||{};if("0"===t.errcode){var n={};if((t=t.result||{}).productCommentSummary&&t.comments){n.productCommentSummary=t.productCommentSummary;for(var o=[],a=0,i=t.comments.length;a<i;++a){var d=t.comments[a];d.content=r(d.content),o.push(d)}return n.comments=o,t.hotCommentTagStatistics&&(n.hotCommentTagStatistics=t.hotCommentTagStatistics),n.maxPage=t.maxPage,n}console.log("commentCallback Error:"+t),u.default.reject({code:-1,msg:"评论拉取失败"})}else console.log("commentCallback Error:"+t),u.default.reject({code:-1,msg:"评论拉取失败"})},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getFoldCommentList=function(e,t,r,n){var o={version:"v2",fold:1,sku:r,page:t+1,pagesize:10,score:e,callback:"getFoldCommentList"};return n&&Object.assign(o,{skucomment:1}),(0,a.default)({api:"getCommentList",param:o}).then(function(e){return e.body.result},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.pingouTuanStatus=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.t=Math.random(),(0,a.default)({api:"pingouTuanStatus",param:e,isNeedLogin:!0,returnCode:"iRet",loginCode:"2"}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.commonRequest=function(e){var t=e.api,r=e.param;return(0,a.default)({api:t,param:r}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getLimitBuyInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.plusLimitBuy?new u.default(function(t,r){t(e.plusLimitBuy)}):(0,a.default)({api:"getLimitBuyInfo",param:{skuid:e.skuId||"",area:e.areaId||"",functionids:"10,11",cat:e.category||"",venderid:e.venderId||"",skuname:e.skuName||"",promoid:e.promoId||"",promotype:e.promoType||"",promoprice:e.promoPrice||"",callback:"getLimitBuyInfo"}}).then(function(e){var t=e.body||{},r=t.errcode,n=t.limitbuy||{},o=t.plus;return 0==r?(o&&(n.plusFlag=o),n):{}},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getRecommendDaojiaSku=function(e){var t=(0,s.getAddress)(),r=t.coordinate,n=t.areaId,o=r.split(","),i=n.split("_");if(o.length<2||!e)return u.default.reject();var d={longitude:o[0],latitude:o[1],upc:e};return i.length>=2&&(d.cityId=n),(0,a.default)({api:"getRecommendDaojiaSku",param:d}).then(function(e){var t=e.body;return 0==t.errcode?t.result||{}:{}},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.getNewerTuanSwitch=function(){return(0,a.default)({api:"getNewerTuanSwitch"}).then(function(e){return"1"==e.body.data[0].riskSwitch},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.addFamilyList=function(e){return(0,a.default)({api:"addFamilyList",param:{skuId:e,t:(new Date).getTime()},isNeedLogin:!0,returnCode:"errcode",loginCode:"13"}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.removeFamilyList=function(e){return(0,a.default)({api:"removeFamilyList",param:{skuId:e,t:(new Date).getTime()},isNeedLogin:!0,returnCode:"errcode",loginCode:"13"}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.obtainfterDiscountCoupons=n,exports.getCustomUrl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(0,a.default)({api:"getCustomUrl",param:{skuId:e,skuNum:t,client:2,t:(new Date).getTime()}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.valueAddedLocShops=function(e){return(0,a.default)({api:"valueAddedLocShops",param:{skuId:e}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})},exports.shopMemberCard=function(e){return(0,a.default)({api:"shopMemberCard",param:{brandId:e}}).then(function(e){return e.body},function(e){var t=e.code,r=e.msg;return u.default.reject({code:t,msg:r})})};var a=t(require("./fetch.js")),u=t(require("../../../../../libs/promise.min.js")),i=require("../../constants/api.js"),d=require("../util/util.js"),c=t(require("../../../../../common/wxcontext.js")),s=require("../../../../../common/userinfo_wqvue"),f=e(require("../../../../../common/utils.js")),p=t(require("../../constants/ump-config")),l=require("../../../../../common/request/request"),m=e(require("../../../../../common/login/loginv1")),g="",v={}; 
 			}); 
		define("pages/item/itemBase/js/model/fetch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){var r=e.api,o=e.apiUrl,a=e.param,n=e.otherOpt,t=void 0===n?{}:n,c=e.encoding,l=e.dataType,p=e.expire,s=e.noToken,f=e.noOtherParam,m=e.cacheKey,v=o||i.apiUrlMap[r];f||u.ENV.isMEnv&&(a.sceneval="2");var g="";u.ENV.isXcxEnv||(g=a.callback?a.callback:a.call?a.call:r+"CB",delete a.callback);var h={url:v,data:a,dataType:l||(u.ENV.isXcxEnv?"":"jsonp"),jsonpCallback:g,expire:p,cacheKey:m,noToken:s};return c&&(h.encoding=c),d.default[r]&&(h.ump={bizId:d.default.BIZ_ID_WQVUE,opId:d.default[r]}),h.ump&&t&&t.reportHook&&(h.ump.reportHook=t.reportHook),h}function o(e,r,o){var a=d.default[e];if(!a||!d.default.BIZ_ID)return!1;(0,l.umpBiz)({bizid:d.default.BIZ_ID,operation:a,result:r?"0":"1",message:"商详旧key上报：code="+o})}function a(e,i,d){var l=e.api,s=e.apiUrl,f=e.param,m=void 0===f?{}:f,v=e.dataType,g=e.encoding,h=e.isNeedLogin,y=void 0!==h&&h,b=e.returnCode,k=void 0===b?"errCode":b,O=e.loginCode,x=void 0===O?"13":O,q=e.expire,E=void 0!==q&&q,_=e.noToken,T=void 0!==_&&_,I=e.noOtherParam,N=void 0!==I&&I,P=e.cacheExcludeParamKeys,j=void 0===P?[]:P,K=e.cacheKey,L=y?t.getLoginPromise():c.default.resolve({}),U=r({api:l,apiUrl:s,param:m,otherOpt:i,encoding:g,dataType:v,expire:E,noToken:T,noOtherParam:N,cacheKey:K}),B=JSON.stringify(U);if(j.length>0){var C=Object.assign({},m);j.forEach(function(e){delete C[e]}),B=JSON.stringify(r({api:l,apiUrl:s,param:C,otherOpt:i,encoding:g,dataType:v,expire:E,noToken:T,noOtherParam:N,cacheKey:K}))}return p[B]&&!d||(p[B]=L.then(function(e){return n.request.get(U).then(function(e){var r=e.body,n={body:r,header:e.header};if(y&&r[k]==x){if(u.ENV.isXcxEnv)return t.doLogin().then(function(){return a({api:l,param:m,isNeedLogin:!1},i,!0)});t.doLogin()}else o(l,!0,0);return n})}).catch(function(e){var r=e.code,a=e.message;return o(l,!1,r),console.log(l+"接口获取失败，code:"+r+"，msg:"+a),c.default.reject({code:r,msg:a})})),p[B]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.clearRequestList=function(){p={}},exports.default=a;var n=require("../../../../../common/request/request"),t=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r.default=e,r}(require("../../../../../common/login/loginv1")),i=require("../../constants/api"),c=e(require("../../../../../libs/promise.min")),u=require("../util/util"),d=e(require("../../constants/ump-config")),l=require("../../../../../common/fe_report/usability.js"),p={}; 
 			}); 
		define("pages/item/itemBase/js/util/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){for(var r=0,n=t-(e+"").length;r<n;r++)e="0"+e;return e+""}function r(e,t){var r=Math.floor(e)+"",o=t-r.length;return o>=0?n("0",o)+r:n("9",t)}function n(e,t){for(var r="",n=0;n<t;n++)r+=e;return r}function o(e,t){var r=[];for(var n in e)void 0!==e[n]&&(t&&"ptag"==n.toLocaleLowerCase||("string"==typeof e[n]&&(e[n]=e[n].replace(/%/g,"%25"),e[n]=e[n].replace(/&/g,"%26"),e[n]=e[n].replace(/\?/g,"%3F"),e[n]=e[n].replace(/=/g,"%3D")),r.push(n+"="+e[n])));return r.join("&")}function i(e,t){var r="";try{r=(t||"").replace(/{#(\w+)#}/g,function(t,r){return 0===e[r]?"0":e[r]||""})}catch(e){console.warn("jsonToTpl fail"+t)}return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.deepExtend=exports.ENV=exports.reporter=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.throttle=function(e,t,r){var n=void 0,o=void 0;return function(){var i=this,a=arguments,c=+new Date;if(n&&c<n+t){if(!r)return;clearTimeout(o),o=setTimeout(function(){n=c,e.apply(i,a)},t)}else n=c,e.apply(i,a)}},exports.formatPrice=function(e){return(e/100||0).toFixed(2)+""},exports.addZero=t,exports.formatTime=function(e,r){var n=["日","一","二","三","四","五","六"];return r.replace(/yyyy|YYYY/,e.getFullYear()).replace(/yy|YY/,t(e.getFullYear()%100,2)).replace(/mm|MM/,t(e.getMonth()+1,2)).replace(/m|M/g,e.getMonth()+1).replace(/dd|DD/,t(e.getDate(),2)).replace(/d|D/g,e.getDate()).replace(/hh|HH/,t(e.getHours(),2)).replace(/h|H/g,e.getHours()).replace(/ii|II/,t(e.getMinutes(),2)).replace(/i|I/g,e.getMinutes()).replace(/ss|SS/,t(e.getSeconds(),2)).replace(/s|S/g,e.getSeconds()).replace(/w/g,e.getDay()).replace(/W/g,n[e.getDay()])},exports.ppmsControl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments[2],n=t.filter(function(t){return t.lockname==e&&"1"==t.lockvalue})[0];if(!n)return null;var o=r||(new Date).getTime();return o>=new Date(n.begintime).getTime()&&o<=new Date(n.endtime).getTime()?n:null},exports.gotoUrl=function(e,t,r,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=n||"navigateTo",c=void 0;t.xcx||t.h5?c=t:((c={}).xcx=t,c.h5=t);var u=null;if(s.isXcxEnv&&"h5"!=r&&c.xcx){if((u=c.xcx).cb&&u.cb(),u.params&&u.params.ptag&&(l.reportClick(u.params.ptag,u.params.ptagExtra||{}),delete u.params.ptag),u.url&&u.url.indexOf("pages/pay/index/index")>-1){u.params||(u.params={}),u.params.sourcefrom="detail";var d=getCurrentPages(),p=d[d.length-1];p&&p.favorablerate>0&&(u.params.favorablerate=p.favorablerate)}e.$goto(u.url,u.params,{method:a,skipSwitchUrl:i})}else if(c.h5){var f=c.h5,m=f.params,g=f.url;if(m){var v=o(m,!0);v&&(g=g.indexOf("?")>-1?g+"&"+v:g+"?"+v)}var h=function(){"navigateTo"==a?location.href=g:location.replace(g)};f.cb&&f.cb(),m&&m.ptag?(l.reportClick(m.ptag,m.ptagExtra||{}),setTimeout(function(){h()},300)):h()}},exports.parsePath=function(e){if(!p.test(e)){var t=e.split(".");return function(e){for(var r=0;r<t.length;r++){if(!e)return;e=e[t[r]]}return e}}},exports.getAddrInfo=function(){var e="";if(s.isXcxEnv)try{var t=c.default.getStorageSync("cookies");t&&(e=t._data&&t._data.wq_addr&&t._data.wq_addr.value||"")}catch(e){console.log(e)}else e=c.default.JD.cookie&&"function"==typeof c.default.JD.cookie.get&&c.default.JD.cookie.get("wq_addr")||"";return e},exports.mapShow=function(e){var t=e.latitude,r=e.longitude,n=e.addr,o=e.name;if(t&&r)if(s.isWxEnv)c.default.JD.wxapi&&c.default.JD.wxapi.ready(function(e){e.beta=!0,window.wx&&window.wx.openLocation({latitude:1*t,longitude:1*r,name:o,address:n,scale:15,infoUrl:""})});else if(s.isSqEnv){var i="https://apis.map.qq.com/tools/poimarker?marker=coord:"+t+","+r+";title:"+o+";addr:"+n+"&referer=myapp&key=AEXBZ-2MUKJ-YSVF6-KIYLB-44AA3-3QFEK";window.mqq&&window.mqq.ui.openUrl({url:i,target:1,style:1,animation:0})}},exports.qqShare=function(e){var t=e.title,r=void 0===t?"京东购物":t,n=e.desc,o=void 0===n?"多快好省":n,i=e.share_url,a=e.image_url,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c.default.JD&&c.default.JD.sqapi&&c.default.JD.sqapi.ready(function(){mqq.ui.shareMessage({title:r,desc:o,share_type:0,share_url:i,image_url:a,back:!0,puin:2712384158,sourceName:"京东购物"},function(e){"0"==e.retCode?u.sucFun&&u.sucFun():u.sucFun&&u.failFun()})})},exports.ldScriptSave=function(e,t,r){"string"==typeof t&&(r=t,t=function(){});var n=document.createElement("script"),o=document.getElementsByTagName("head")[0];n.setAttribute("charset",r||"utf-8"),n.src=e,n.onload=function(){t&&t()},o.appendChild(n)},exports.pingClick=function(e,t,r,n){if(window.MPing)try{var o=new MPing.inputs.Click(e);o.event_param=t||"",o.event_level=r||"",n&&(o.page_param=n),(new MPing).send(o)}catch(e){}},exports.transformArrayToSet=function(e,t){return Array.isArray(e)&&e.reduce(function(e,r){return e[r[t]]=r,e},{})||null},exports.getLocation=function(e){var t="#";if(s.isXcxEnv){var r=getCurrentPages();r.length>0&&(t="/"+(r[r.length-1]&&r[r.length-1].route),e&&(t=t+"?"+o(e)))}else window.location&&(t=window.location.href);return t},exports.leftTimeBySec=function(e){var t=e.start,n=e.duration,o=e.now,i=new Date(t.replace(/-/g,"/")).getTime()+1e3*n-new Date(o.replace(/-/g,"/")).getTime();return!(i<=0||i>=864e5)&&r(i/36e5,2)+"时"+r(i/6e4%60,2)+"分"},exports.goBack=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).delta,t=void 0===e?1:e;c.default.navigateBack({delta:t})},exports.formatInt=r,exports.getScrollTop=function(){if(s.isXcxEnv){var e=c.default.createSelectorQuery();return new d.default(function(t,r){e.selectViewport().scrollOffset(function(e){e?t(e.scrollTop):r()}).exec()})}var t=0,r=0,n=0;return document&&document.body&&(t=document.body.scrollTop||0),document&&document.documentElement&&(r=document.documentElement.scrollTop||0),n=t>r?t:r,d.default.resolve(n)},exports.getScrollHeight=function(){var e=0,t=0;return document&&document.body&&(e=document.body.scrollHeight||0),document&&document.documentElement&&(t=document.documentElement.scrollHeight||0),e>t?e:t},exports.getClientInfo=function(){var e={windowWidth:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,windowHeight:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0};if(s.isXcxEnv){if("function"==typeof getApp){var t=getApp().systemInfo||e;e.windowWidth=t.windowWidth,e.windowHeight=t.windowHeight}}else"object"==("undefined"==typeof window?"undefined":a(window))&&(e.windowWidth=window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth,e.windowHeight=window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight);return e},exports.leftTimeOfPrint=function(e,t){var r=t&&new Date(t).getTime()||(new Date).getTime(),n=new Date(e).getTime()-r;return n>0&&Math.floor(n/864e5)+"天"+Math.floor(n/36e5%24)+"时"+Math.floor(n/6e4%60)+"分"},exports.getDeepCopyObj=function(e){var t={};return"object"==(void 0===e?"undefined":a(e))&&Object.keys(e).forEach(function(r){t[r]=e[r]}),t},exports.querystring=o,exports.remainTime=function(e){var t=e,r=function(e){return(1*e<10?"0":"")+e},n=e%60;e=(e-n)/60,n=r(n);var o=e%60;e=(e-o)/60,o=r(o);var i=e%24;e=(e-i)/24,i=r(i);var a=e;return a>0&&(a=r(a)),{day:a,hour:i,min:o,sec:n,limit:t}},exports.formatAdText=function(e,t){if(!e)return[];var r=/<a(?:[\s]+|[\s]+[^<>]+[\s]+)href=["'\\]*([^<>"'\\]*)["'\\]*[^<>]*>([\d\D]*)<\/\s?a>/g,n=e.match(r),o=[],i=[],a=[];n&&n.length?(n.forEach(function(t){var r=e.indexOf(t),n=r+t.length;o.push(r,n)}),o.push(e.length),o.reduce(function(t,r,n,o){return i.push(e.slice(t,r)),r},0),a=i.map(function(e){var n=r.exec(e);if(n){var o=t(n[1]),i=n[1]&&n[1].trim();return o&&"Jshop"===o.type&&(i=i.indexOf("?")>-1?i+"&wxAppName=jd":i+"?wxAppName=jd"),o?{txt:n[2],url:i,type:o.type,id:o.id}:{}}return{txt:e}})):a=[{txt:e}];var c="";return a.forEach(function(e){e.url&&(c={txt:"查看>",url:e.url,type:e.type,id:e.id,adType:"entry"})}),c&&a.push(c),a},exports.checkURL=function(e){var t=[{regs:[/item\.jd\.com\/(\d+)\.html/,/item\.jd\.hk\/(\d+)\.html/,/item\.yiyaojd\.com\/(\d+)\.html/],type:"item"},{regs:[/m\.jd\.com\/product\/(\d+)\.html/,/m\.jd\.com\/ware\/view\.action\?\S*?wareId=(\d+)/,/item\.m\.jd\.com\/product\/(\d+)\.html/,/item\.m\.jd\.com\/ware\/view\.action\?\S*?wareId=(\d+)/,/m\.yiyaojd\.com\/ware\/view\.action\?\S*?wareId=(\d+)/,/m\.yiyaojd\.com\/product\/(\d+)/,/mitem\.jd\.hk\/product\/(\d+)\.html/,/mitem\.jd\.hk\/ware\/view\.action\?\S*?wareId=(\d+)/],type:"item"},{regs:[/wqitem\.jd\.com\/item\/view\?\S*?sku=(\d+)/,/wqitem\.jd\.hk\/item\/view\?\S*?sku=(\d+)/,/wq\.jd\.com\/item\/view\?\S*?sku=(\d+)/,/wqitem\.jd\.com\/item\/view\?\S*?sku=(\d+)/,/wqmitem\.jd\.com\/item\/view\?\S*?sku=(\d+)/],type:"item"}];return t.push({regs:[/wq\.jd\.com\/mshop\/gethomepage\?\S*?venderId=(\d+)/,/wqshop\.jd\.com\/mshop\/gethomepage\?\S*?venderId=(\d+)/,/shop\.m\.jd\.com\/mshop\/gethomepage\?\S*?venderId=(\d+)/],type:"shop"}),function(e){var r=!0,n=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var c=i.value,u=!0,d=!1,l=void 0;try{for(var s,p=c.regs[Symbol.iterator]();!(u=(s=p.next()).done);u=!0){var f=s.value.exec(e);if(f)return{type:c.type,id:f[1]}}}catch(e){d=!0,l=e}finally{try{!u&&p.return&&p.return()}finally{if(d)throw l}}}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}return!1}},exports.formatTimeSimple=function(e){var t=function(e){return(e<10?"0":"")+e};return{year:e.getFullYear(),month:t(e.getMonth()+1),day:t(e.getDate()),hour:t(e.getHours()),min:t(e.getMinutes()),sec:t(e.getSeconds())}},exports.getTimeDetail=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e<=0)return{days:"00",hours:"00",minutes:"00",seconds:"00",hundredMilliseconds:"0"};var r=t?1e3:1,n=Math.floor(e/(86400*r)),o=e-3600*n*24*r,i=("0"+Math.floor(o/(3600*r))).slice(-2),a=o-3600*i*r,c=("0"+Math.floor(a/(60*r))).slice(-2),u=a-60*c*r,d=("0"+Math.floor(u/r)).slice(-2),l=u-d*r;return{days:n,hours:i,minutes:c,seconds:d,hundredMilliseconds:("0"+Math.floor(l/100)).slice(-1)}},exports.str2json=function(e){if(!e)return!1;try{return JSON.parse(e.replace("\t",""))}catch(e){return!1}},exports.obj2str=function(e){if(!e)return"";try{return JSON.stringify(e)}catch(e){return""}},exports.jsonToTpl=i,exports.jsonToTplArr=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=[];try{var n=/{#(\w+)#}/g;r=t.split(/({#\w+#})/).filter(function(e){return e}).map(function(t){if(t){var r=0,o=t;return n.test(t)&&(r=1,o=i(e,t)),{type:r,text:o}}})}catch(e){console.warn("jsonToTpl fail"+t)}return r},exports.getSpecifySku=function(e,t){var r=[],n=t;if(n)for(var o=0;o<n.length;o++){var i=!1;for(var a in e)e[a]&&n[o][a]!=e[a]&&(i=!0);i||r.push(n[o].skuId)}return r},exports.getGray=function(e){e=e||0;var t=c.default.JD.cookie.get("visitkey")||"0",r=c.default.JD.cookie.get("wq_uin"),n=c.default.JD.cookie.get("pin");return r&&~" 455641804 3930618783 4702487425 4068428191 5881223 707062524 3978935903 4702487425 3934950771 4612271440 4154686945 3982814220 3932689101 707062524 4783700082 19511709003 ".indexOf(" "+r+" ")||n&&~" jd_7610f0c9b24fe 13760273856_p 好吃的muffin a2193705 叶果萍 domonmy2002 nathenever 克什米尔inn ethanpi wdNebtbibiNQNwj honghui2724 7548408-86490653 limeivivian herizonyan s1845754433990530 jd_45bafb42d1d58 598941952 349991516_m 63670516-41431690 citrixcai allen616li wy112358132134 189656068-571334 532964875 jd_7b8f8fe3cc2de 18612451819_p jabeye003 ".indexOf(" "+n+" ")||parseInt(t.substr(-2),10)<e},exports.IsNum=function(e){if(null!=e){var t=/\d*/i;return e.match(t)==e}return!1},exports.htmlDecodeByRegExp=function(e){if(0==e.length)return"";var t=e.replace(/&amp;/g,"&");return t=t.replace(/&lt;/g,"<"),t=t.replace(/&gt;/g,">"),t=t.replace(/&nbsp;/g," "),t=t.replace(/&#39;/g,"'"),t=t.replace(/&quot;/g,'"'),t=t.replace(/&hellip;/g,"..."),t=t.replace(/&ldquo;/g,'"'),t=t.replace(/&rdquo;/g,'"'),t=t.replace(/&cap;/g,"∩")},exports.delHtmlTag=function(e){return"string"==typeof e?e.replace(/<[^>]+>/g," "):""},exports.validImgUrl=function(e){var t=/^(http:|https:)?\/\//i;return e&&t.test(e)?e:""},exports.fixProtocol=function(e){return e&&(e=e.replace(/^(http:\/\/|\/\/)/,"https://")),e},exports.parseTime=function(e){return e?+new Date(e.replace(/-/g,"/"))/1e3:""},exports.createURL=function(e,t){var r=[];for(var n in t)r.push(n+"="+encodeURIComponent(t[n]));return e+(e.indexOf("?")>-1?"&":"?")+r.join("&")};var c=e(require("../../../../../common/wxcontext")),u=e(require("../../../../../api/Ptag/report_manager_wqvue")),d=e(require("../../../../../libs/promise.min.js")),l=exports.reporter={pvExtraData:{sku_id:"",item_type:""},extraData:{sku_id:"",item_type:""},setPvExtraData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.assign(this.pvExtraData,e)},setExtraData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.assign(this.extraData,e)},reportDetailPV:function(e,t,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};try{i=Object.assign({},this.pvExtraData,this.extraData,i),u.default.addDetailPagePv(e,t,r,n,o,i)}catch(e){console.error("PV上报报错了~~"+e)}},reportExposure:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{t=Object.assign({},this.extraData,t),u.default.addPtagExposure(e,t)}catch(e){console.error("曝光上报报错了~~"+e)}},reportClick:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{t=Object.assign({},this.extraData,t),u.default.addPtag(e,t)}catch(e){console.error("点击上报报错了~~"+e)}}},s=exports.ENV={isWxEnv:"weixin"==c.default.JD.device.scene,isSqEnv:"qq"==c.default.JD.device.scene,isMEnv:"object"==("undefined"==typeof location?"undefined":a(location))&&(/(^|[&|?])sceneval=2([&|#]|$)/.test(location.search)||"home.m.jd.com"==document.domain),isXcxEnv:c.default.isXCX,isPingouXcx:"2"==c.default.JD.cookie.get("wxapp_type"),isSpecialXcxEnv:"object"==("undefined"==typeof window?"undefined":a(window))&&window.location&&-1!=c.default.JD.url.getUrlParam("sourceEnd").indexOf("wxapp_"),platform:c.default.isXCX?"function"!=typeof getApp||"android"!==getApp().systemInfo.platform&&!/android/gi.test(getApp().systemInfo.system)?"ios":"android":/android/gi.test(navigator.userAgent)?"android":"ios"},p=/[^\w.$]/;exports.deepExtend=function e(t){var r=void 0;if(null==t||"object"!=(void 0===t?"undefined":a(t)))return t;if(t instanceof Date)return(r=new Date).setTime(t.getTime()),r;if(t instanceof Array){r=[];for(var n=0,o=t.length;n<o;n++)r[n]=e(t[n]);return r}if(t instanceof Object){r={};for(var i in t)t.hasOwnProperty(i)&&(r[i]=e(t[i]));return r}console.warn("Unable to copy obj! Its type isn't supported.")}; 
 			}); 
		define("pages/item/pingou/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store.js"),r=require("../../../common/fe_report/usability.js"),t={store:e.storeFn,created:function(e){var t=this.getCurrentPages(),o=t[t.length-2]||{},s=o.route||o.__route__;(0,r.umpBiz)({bizid:"1240",operation:"17",result:"0",message:s?"refer="+s:"无refer"}),this.$goto("/pages/item/detail/detail",e,{method:"redirectTo"})}};exports.default=t; 
 			}); 
		define("pages/item/pingou/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{},actions:{}}}; 
 			}); 
		define("pages/item/subPackages/components/giftPool/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store"),e=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../../common/wxcontext.js")),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e}(require("../../../../../common/toast/toast.js")),o={props:{goods:Object,flag:Boolean,poolList:Array},store:t.storeFn,watch:{},methods:{onTapItem:function(t){var e=t.currentTarget.dataset,s=e.poolIdx,o=e.index,i=JSON.parse(JSON.stringify(this.poolList));if(this.flag){i[s].list[o].selected=!i[s].list[o].selected;var n=this.calcNum(i);if(!n&&0!==n)return;this.setData({chosenNum:n,poolList:i})}else i[s].list.forEach(function(t){t.selected=!1}),i[s].selectedIndex=o,i[s].list[o].selected=!0,this.setData({poolList:i})},onConfirm:function(t){if(this.flag){var o=this.calcNum(this.poolList);if(!o)return;if(o<this.goods.num)return void s.show({icon:"none",content:"搭配赠品需选择 "+this.goods.num+" 件",page:this})}e.default.JD.events.trigger("skuLayer.giftPool.update",this.poolList),wx.navigateBack()},minusGoodsNum:function(t){var e=t.currentTarget.dataset,s=e.poolIdx,o=e.index,i=JSON.parse(JSON.stringify(this.poolList)),n=i[s].list[o].num;if(1!=n){i[s].list[o].num=n-1;var r=this.calcNum(i);r&&this.setData({poolList:i,chosenNum:r})}},plusGoodsNum:function(t){var e=t.currentTarget.dataset,s=e.poolIdx,o=e.index,i=JSON.parse(JSON.stringify(this.poolList)),n=i[s].list[o].num;i[s].list[o].num=n+1;var r=this.calcNum(i);r&&this.setData({poolList:i,chosenNum:r})},calcNum:function(t){var e=t[0].list.filter(function(t){return t.selected}),o=e&&e.length&&e.reduce(function(t,e){return t+e.num},0)||0;if(o<=this.goods.num)return o;s.show({icon:"none",content:"最多选择 "+this.goods.num+" 件",page:this})}}};exports.default=o; 
 			}); 
		define("pages/item/subPackages/components/giftPool/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{chosenNum:0},actions:{}}}; 
 			}); 
		define("pages/item/subPackages/components/noticeForm/model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getReceiverInfo=function(){return r.getLoginPromise().then(function(){return(0,e.request)({url:t.receiverInfo,data:{callback:"notifyCB",r:Math.random()}})}).then(function(e){var r=e.body;return 0===r.errcode&&r.result&&r.result.length>0?(r.result.forEach(function(e){e.adid=e.id,e.addrfull=e.address}),r.result):[]}).catch(function(){return[]})};var e=require("../../../../../common/request/request"),r=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}(require("../../../../../common/login/login")),t={receiverInfo:"//wq.jd.com/commodity/notify/GetReceiverInfo"}; 
 			}); 
		define("pages/item/subPackages/components/suit/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}function e(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}Object.defineProperty(exports,"__esModule",{value:!0});var a=require("./store"),r=require("../../../itemBase/js/handler/action"),i=require("../../../itemBase/js/util/util"),s=t(require("../../../itemBase/constants/ptag-constants")),n=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../../common/wxcontext")),o=t(require("../../../../../common/toast/toast")),u={props:{packList:Array,entries:Array},store:a.storeFn,watch:{entries:function(t){t&&t[0]&&t[0].reid&&this.setData(e({},"unfold."+t[0].reid,!0))}},methods:{toggle:function(t){var a=t.currentTarget.dataset.reid;this.setData(e({},"unfold."+a,!this.data.unfold[a]))},addToCart:function(t){var e=this,a=t.currentTarget.dataset.cartid;(0,r.addCart)({skuid:a,isRelated:!0}).then(function(t){e.addToCartHandler(null,t)}).catch(function(t){e.addToCartHandler(t)}),i.reporter.reportClick(s.VIEW_SUIT_ADD_TO_CART)},addToCartHandler:function(t,e){var a=this;return t?o.show({page:this,content:"string"==typeof t?t:t.message}):n.default.showModal({title:"商品已成功添加至购物车",showCancel:!0,cancelText:"继续逛逛",confirmText:"去购物车",success:function(t){t.confirm&&(0,i.gotoUrl)(a,{xcx:{url:"/pages/cart/cart/cart"}})}})},showSkuPanel:function(t){var e=t.currentTarget.dataset,a=e.sku,r=e.pidx,i=e.idx,s=this.entries[r],n={pIndex:r,iIndex:i,packList:this.packList,suit:s};this.skuPanelData.sku=a,this.skuPanelData.suitPackData=n,this.showSkuLayerFlag=!0},closeSkuLayer:function(){this.showSkuLayerFlag=!1},handleSkuChange:function(t){var e=this.entries,a=t.detail,r=a.info,i=a.num,s=a.suitPackData,n=s.pIndex,o=s.iIndex,u=s.suit,c=u.price,d=u.mprice,l=u.dis,h=r.sku,f=r.choose,p=r.cover,k=r.skuName;e[n].cartid=e[n].cartid.split("_"),e[n].cartid[+o+1]=h,e[n].cartid=e[n].cartid.join("_"),e[n].item[o].sku=h,e[n].item[o].name=k,e[n].item[o].choose=f,e[n].item[o].num=i,e[n].item[o].img=p,e[n].price=c,e[n].mprice=d,e[n].dis=l,this.setData({entries:e}),this.skuPanelData.sku=h,this.skuPanelData.suitPackData=s,this.showSkuLayerFlag=!1}}};exports.default=u; 
 			}); 
		define("pages/item/subPackages/components/suit/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{unfold:{},soldOut:{},skuPanelData:{sku:"",price:"",cover:"",suitPackData:{}},showSkuLayerFlag:!1},actions:{}}}; 
 			}); 
		define("pages/item/subPackages/pages/arriveNotice/constant.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.PTAG={CLICK_BTN_NOTICEME:"7418.26.4",CLICK_DIALOG_BTN_SET_NOTICE:"7418.26.6",CLICK_DIALOG_SET_NOTICE_AGAIN:"7418.26.11",CLICK_WXAUTH_ALLOW:"7418.26.25",CLICK_WXAUTH_CANCEL:"7418.26.26",EXPOSURE_PAGE:"7418.26.3",EXPOSURE_DIALOG_SET_NOTICE:"7418.26.5",EXPOSURE_TOAST_SET_NOTICE_FAIL:"7418.26.7",EXPOSURE_TOAST_SET_NOTICE_SUCCESS:"7418.26.8",EXPOSURE_DIALOG_SET_NOTICE_FAIL:"7418.26.9",EXPOSURE_DIALOG_LOW_VERSION:"7418.26.12",EXPOSURE_DIALOG_GUIDE_SET:"7418.26.24"}; 
 			}); 
		define("pages/item/subPackages/pages/arriveNotice/model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function r(){var e=s.getCookie("wq_addr"),r=e?e.split("|"):[];return[r[0]||"0",r[1]||"19_1607_3155_0",r[2]||"广东_深圳市_南山区_",r[3]||""]}function t(e){var o={addr:r()[1].replace(/_/g,"-"),sku:e,r:Math.random()};return i.getLoginPromise().then(function(){return(0,c.request)({url:d.subscribe,data:o})}).then(function(r){var o=r.body;return"13"==o.errcode?i.doLogin().then(function(){return t(e)}):0==o.errcode&&o.result?1==o.result.resultCode&&o.result.templateId?o.result.templateId:Promise.reject(o.result.resultCode):Promise.reject(null)})}function o(e){var t=r()[1],n=Object.assign({},e,{addr:t,r:Math.random()});return i.getLoginPromise().then(function(){return(0,c.request)({url:d.autoBuy,data:n})}).then(function(r){var t=r.body;return"13"==t.errcode?i.doLogin().then(function(){return o(e)}):0==t.errcode&&t.result?1==t.result.resultCode&&t.result.templateId?t.result.templateId:Promise.reject(t.result.resultCode):Promise.reject(null)})}function n(){var e={url:"https://wq.jd.com/pinbind/QueryPinStatus",data:{source:2,sceneid:80015,rurl:""}};return c.request.get(e).then(function(e){var r=e.body;return 0==r.errcode?r:13==r.errcode?i.doLogin().then(n):null}).catch(function(e){return null})}function u(e){return c.request.get({url:d.supportAutoBuy,data:{callback:"supportAutoBuyCB",sku:e}}).then(function(r){var t=r.body,o=void 0===t?{}:t;return 0===o.errcode&&1===o.result||13===o.errcode&&i.doLogin().then(function(){return u(e)})}).catch(function(e){return!1})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.subscribeItem=t,exports.subscribeAutoBuy=o,exports.getReceiverInfo=function(){return i.getLoginPromise().then(function(){return(0,c.request)({url:d.receiverInfo,data:{callback:"notifyCB",r:Math.random()}})}).then(function(e){var r=e.body;return 0===r.errcode&&r.result&&r.result.length>0?(r.result.forEach(function(e){e.adid=e.id,e.addrfull=e.address}),r.result):[]}).catch(function(){return[]})},exports.queryPinStatus=n,exports.getPPMS=function(e,r){var t=r?"pgxcx":"xcx",o=2==e?"newpg":1==e?"oldpg":"normal";return c.request.get({url:d.ppms}).then(function(e){var r=e.body,n=void 0===r?{}:r,u=!1;return(n&&n.data||[]).forEach(function(e){var r=e.channel&&e.channel.split(";")||[],n=e.itemType&&e.itemType.split(";")||[];r.includes(t)&&n.includes(o)&&"arrivalNoticeOrder"==e.key&&(u=!0)}),u}).catch(function(e){return!1})},exports.supportAutoBuy=u;var c=require("../../../../../common/request/request"),i=e(require("../../../../../common/login/login")),s=e(require("../../../../../common/cookie-v2/cookie")),d={receiverInfo:"//wq.jd.com/commodity/notify/GetReceiverInfo",subscribe:"//wq.jd.com/commodity/notify/SubscribeStock",autoBuy:"//wq.jd.com/commodity/notify/StockOrder",ppms:"//wq.360buyimg.com/data/ppms/js/ppms.pagev36958.json",supportAutoBuy:"//wq.jd.com/commodity/notify/IsSupportOrder"}; 
 			}); 
		define("pages/item/subPackages/pages/chooseShop/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(exports,"__esModule",{value:!0});var a=require("./store.js"),s=require("../../../itemBase/js/model/baseModel.js"),i=e(require("../../../../../common/userinfo_wqvue")),r=e(require("../../../../../common/toast/toast.js")),o=e(require("../../../../../common/fe_helper.js")),d=e(require("../../../../../common/localStorage")),n=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../common/wxcontext.js")),c=e(require("../../../itemBase/js/util/util.js")),h={addressId:0,addressName:"全部区域"},u={store:a.storeFn,created:function(){var e=this,t=JSON.parse(this.$query.trans||{}),a=this.$query.locationid?this.$query.locationid:"",s=this.$query.address,i=this.$query.id?this.$query.id:"",r="true"===this.$query.isSubscribeCar,d="true"===this.$query.locAddCartDirect;this.showArrivalNotice="true"===this.$query.showArrivalNotice,this.itemType=this.$query.itemType,this.favorablerate=this.$query.favorablerate,d&&wx.setNavigationBarTitle({title:"门店"}),s=s?JSON.parse(decodeURIComponent(s)):[];var c=this.setSelectInfo(t.skuProps),h=t.goodsNum.value,u=t.priceObj;this.setData({venderId:t.venderId,locGroupId:t.locGroupId,sku:t.sku,priceObj:u,locationid:a,choseShopId:i,"otherData.choosed":!!i,"address.names":s,currentSelect:c,goodsNum:h,goodsNumLimit:t.goodsNum.limit,image:t.image,isNullStock:t.isNullStock,isSubscribeCar:r,locAddCartDirect:d},function(){e.init()}),n.default.JD.events.listen("item.main.addShopCartRes",function(t){e.showAddCartRes(t)}),this.scrollNav=o.throttle(this.scrollNav,100)},onShow:function(){},destroyed:function(){var e=this.data,t={goodsNum:e.goodsNum,sku:e.sku};n.default.JD.events.remove("item.chooseShop.addCart"),n.default.JD.events.remove("item.main.addShopCartRes"),this.data.locAddCartDirect||n.default.JD.events.trigger("item.chooseShop.updateShopInfo",t)},methods:{onPageScroll:function(e){this.scrollNav()},onReachBottom:function(){var e=this,t=this.data,a=t.page,s=t.locationid;a.index<a.total&&this.setData({"page.index":a.index+1},function(){e.render(s)})},init:function(){var e=this,t=this.data,a=t.venderId,i=t.locGroupId,r=t.locationid,o=t.address;(0,s.getShopAllAddr)(a,i).then(function(t){e.areas=t,e.setData({"areaData.provinces":t.map(function(e){return{addressId:e.addressId,addressName:e.addressName}})}),!r||o.names&&o.names.length||e.setAddressName(t,r),e.getLocat(r)}).catch(function(t){e.setData({isError:!0,errorCode:t.code||"-30"})})},setAddressName:function(e,t){if(e&&t){var a=t.split("-"),s=+a[0],i=+a[1],r=+a[2],o="全部区域",d="全部区域",n="全部区域";e.forEach(function(e){if(e.addressId==s){o=e.addressName||"全部区域";var t=e.childNodes;i&&t&&t.forEach(function(e){if(e.addressId==i){d=e.addressName||"全部区域";var t=e.childNodes;r&&t&&t.forEach(function(e){e.addressId==r&&(n=e.addressName||"全部区域")})}})}}),this.setData({"address.names":[o,d,n]})}},getLocat:function(e){var t=this;wx.getLocation({type:"gcj02",success:function(a){var i=a.longitude,r=a.latitude,o=i+","+r;t.setData({coords:o}),e?t.initAddress(e):(0,s.changelaglat)(i,r).then(function(e){var a=e.addrLvlIds,s=a.dwProvinceId,i=a.dwCityId,r=a.strCityName,o=a.strCountyName,d=a.strProvinceName,n=s+"-"+i+"-0";if(d&&r&&o){var c=[d,r,"全部区域"];t.setData({"address.names":c}),t.initAddress(n)}}).catch(function(e){t.setData({isError:!0,errorCode:e||"-30"})})},fail:function(a){if(e)t.initAddress(e);else{var s=i.getAddress(),r=s.areaId,o=s.areaName;o=o.split(/_/g).filter(function(e){return""!==e}),r=r.replace(/_/g,"-"),t.setData({"address.names":o}),t.initAddress(r)}}})},initAddress:function(e){var t=e.split("-"),a=+t[0],s=+t[1],i=+t[2],r=[a,s,i],o=void 0,d=void 0;if("0"==i?(o=2,d=s):(o=3,d=i),"0"==s&&(o=1,d=a),this.setData({"page.level":o,"page.addrId":d,"address.ids":r}),this.render(e,!1,!0),s>0){var n=this.getAddressData(0,0,[a],this.areas),c=this.getAddressData(1,0,[a,s],this.areas);this.setData({"areaData.cities":n,"areaData.districts":c})}else{var h=this.getAddressData(0,0,[a],this.areas);this.setData({"areaData.cities":h})}},render:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.data,o=r.page,d=r.venderId,c=r.locGroupId,h=r.locShops,u={venderid:d,shopgroupid:c,page:o.index,addressid:o.addrId,level:o.level};(0,s.getShopListById)(u).then(function(s){var r={},o=[],d=s.itemList;if(d&&d.length){if(h&&h.length>0&&!a){var c=h.map(function(e){return e.storeId});d=d.filter(function(e){return!c.includes(e.storeId)})}d.forEach(function(e){e.id=e.storeId,r[e.id]=null,o.push(e.id)})}if(0===d.length&&i&&e){var u=e.split("-");if("0"==u[2]){var l=u[0]+"-0-0";return t.setData({"address.names[1]":"全部区域","address.names[2]":"全部区域","address.ids":[u[0],"0","0"],"page.level":1,"page.addrId":u[0]}),t.render(l)}}var p=a?d:h.concat(d);t.setData({locShops:p||[],locationid:e,shopPrices:r,isError:!1,"page.total":s.totalPage}),a&&wx.pageScrollTo({scrollTop:0,duration:0}),o.length&&t.scrollNav(),a&&(t.data.locAddCartDirect||n.default.JD.events.trigger("item.chooseShop.choose"),t.setData({choseShopId:"","otherData.choosed":!1})),t.scrollIds=[]}).catch(function(e){t.setData({isError:!0,errorCode:e.code||"-30"})})},openMap:function(e){var t=e.currentTarget.dataset,a=t.coords,s=t.fulladdr,i=a.split(","),r=+i[0],o=+i[1];wx.openLocation({latitude:r,longitude:o,address:s,name:s,scale:28,success:function(e){console.log(e)}})},makePhone:function(e){var t=e.currentTarget.dataset.phone;wx.makePhoneCall({phoneNumber:t})},shopDetail:function(e){var t=this.data,a=t.sku,s=t.venderId,i=e.currentTarget.dataset,r=i.id,o=i.coords.split(","),d=+o[0],n=+o[1];c.gotoUrl(this,{url:"https://md-mobile.jd.com/storefromwxmobileqq/storeInfoloc?skuId="+a+"&venderId="+s+"&storeId="+r+"&lat="+d+"&lng="+n})},onAddrChange:function(e){var t=e.idList.slice(),a=e.nameList.slice();3==t.length&&(t.push(0),a.push(""));var s={province:e.nameList[0],city:e.nameList[1]||"全部区域",district:e.nameList[2]||"全部区域"},i={province:e.idList[0],city:e.idList[1]||0,district:e.idList[2]||0};this.setData({address:s,addressId:i}),this.render(e.idList.join("-"))},choseShop:function(e){if(!this.data.locAddCartDirect){var t=e.currentTarget.dataset,a=t.phone,s=t.name,i=t.addr,r=t.id,o=t.locationid,c=t.price,h=encodeURIComponent(JSON.stringify(this.data.address.names)),u={phone:a,name:s,addr:i,id:r,locationid:o,price:c,address:h},l=this.data.price;c?this.setData({choseShopId:r,"otherData.choosed":!!r,price:c}):this.setData({choseShopId:r,"otherData.choosed":!!r,price:l}),n.default.JD.events.trigger("item.chooseShop.choose",u),d.set("choseShop"+this.data.sku,i+"----"+s+"----"+a+"----"+o+"----"+r+"----"+h)}},refresh:function(e){this.init()},chooseArea:function(e){var t=e.target.dataset.level;t==this.data.activeLevel&&this.data.activePicker?this.closePicker():this.setData({activeLevel:t,activePicker:!0})},pickerDidChange:function(e){for(var a,s=+e.target.dataset.level,i=+e.target.dataset.value,r=e.target.dataset.name,o=["cities","districts"],d=[],n=[],c=0;c<s;c++)d.push(this.data.address.ids[c]),n.push(this.data.address.names[c]);if(d.push(i),n.push(r),d.length<3)for(var u=d.length,l=0;l<3-u;l++)d.push(0);if(n.length<3)for(var p=n.length,f=0;f<3-p;f++)n.push("全部区域");var g=0==i?s:s+1,v=0==i?1==s?d[0]:d[1]:i;if((0==s||1==s&&0==i)&&this.setData({"areaData.districts":[h]}),2==s||0==i)return this.setData({"address.ids":d,"address.names":n,"page.level":g,"page.addrId":v,"page.index":1}),void this.closePicker();var m=this.getAddressData(s,0,d,this.areas);this.setData((a={activeLevel:s+1},t(a,"areaData."+o[s],m),t(a,"address.ids",d),t(a,"address.names",n),t(a,"page.level",g),t(a,"page.addrId",v),t(a,"page.index",1),a))},closePicker:function(){var e=this.data.address.ids.join("-");this.setData({activePicker:!1}),e!==this.data.locationid&&this.render(e,!0)},getAddressData:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments[2],s=arguments[3],i=a[t],r=s.find(function(e){return e.addressId==i}),o=r?r.childNodes:[];return e==t?[h].concat(o):this.getAddressData(e,t+1,a,o)},backToLevel3:function(){this.setData({activeLevel:2})},minusGoodsNum:function(e){var t=e.target.dataset.limit,a=+this.data.goodsNum;a=a<=t?t:--a,this.setData({goodsNum:a})},plusGoodsNum:function(){var e=+this.data.goodsNum;e=e>=200?200:++e,this.setData({goodsNum:e})},showSkuLayer:function(){this.setData({showSkuLayerFlag:!0})},handleSkuLayerClose:function(){this.setData({showSkuLayerFlag:!1})},handleSkuChange:function(e){var t=e.detail,a=t.info,s=t.num,i=t.sInfo;a.sku!==this.data.sku?(this.setData({image:a.cover,price:a.price,plusPrice:a.otherPrice&&a.otherPrice||"",goodsNum:s,sku:a.sku,showSkuLayerFlag:!1,currentSelect:a.text}),this.render(this.data.locationid,!0),n.default.JD.events.trigger("item.chooseShop.changeSku",i)):this.setData({goodsNum:s,showSkuLayerFlag:!1})},setSelectInfo:function(e){if(e&&e.length){var t=[];return e.forEach(function(e){e.current&&e.value.length>1&&t.push(e.current)}),t.join("，")}return""},addtocart:function(){this.data.choseShopId||this.data.locAddCartDirect?n.default.JD.events.trigger("item.chooseShop.addCart"):r.show({icon:r.ICON.WARNING,content:"请选择门店",page:this})},showAddCartRes:function(e){r.show({icon:1==e?r.ICON.SUCCESS:r.ICON.ERROR,content:1==e?"添加成功":"添加失败",page:this})},buy:function(){if((this.data.choseShopId||this.data.locAddCartDirect)&&this.data.sku){var e=[this.data.sku,this.data.choseShopId||"",this.data.goodsNum||1,this.data.sku,"1,0,0"];c.gotoUrl(this,{url:"/pages/pay/index/index",params:{commlist:e.join(",")}})}else r.show({icon:r.ICON.WARNING,content:"请选择门店",page:this})},lookLike:function(){var e=this.data,t="https://wqs.jd.com/search/searchsimilar.shtml?sceneid=18&sku="+e.sku+"&jp="+e.price;this.$report("DETAIL_LOOK_SIMILAR_BUTTON"),this.$goto("/pages/h5/index",{url:t})},stockNotice:function(e){var t=this.data.sku,a=this.itemType;this.$report("DETAIL_STOCK_NOTICE"),this.$goto("/pages/item/subPackages/pages/arriveNotice/index",{sku:t,itemType:a})},subscribeCar:function(){var e=this.data,t=e.sku,a=e.choseShopId,s=void 0===a?"":a,i="https://wq.jd.com/pinbind/pintokenredirect?biz=carbrand&url="+encodeURIComponent("https://carbrand.jd.com/m/html/reservationCar.html?skuId="+t+"&storeId="+s);this.$goto("/pages/h5/index",{url:i})},scrollIds:[],scrollNav:function(){var e=this;this.data.locAddCartDirect||wx.createSelectorQuery().selectViewport().boundingClientRect(function(t){wx.createSelectorQuery().selectAll(".jsScrolling").boundingClientRect(function(a){a&&a.filter(function(e){return e.top<t.height+200}).forEach(function(t,a){var s=t.dataset.id;e.scrollIds.indexOf(s)>-1||(e.scrollIds.push(s),e.renderPrices(s))})}).exec()}).exec()},renderPrices:function(e){var t=this;(0,s.getShopRealPrice)(this.data.sku,e).then(function(e){var a=Object.assign({},t.data.shopPrices);a[e[0].storeid]=e[0].p>0?e[0].p:"",t.setData({shopPrices:a})})}}};exports.default=u; 
 			}); 
		define("pages/item/subPackages/pages/chooseShop/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{address:{ids:[],names:[]},didReady:!1,locShops:[],sku:"",venderId:"",locGroupId:"",choseShopId:"",locationid:"",isError:!1,errorCode:"",activeLevel:"0",activePicker:!1,shopPrices:{},priceObj:{},currentSelect:"",goodsNum:"",goodsNumLimit:0,image:"",showSkuLayerFlag:!1,coords:"",isNullStock:!1,otherData:{offline:!0,choosed:!1},isSubscribeCar:!1,locAddCartDirect:!1,areaData:{provinces:{},cities:{},districts:{},counties:{}},page:{index:1,total:0},showArrivalNotice:!0},actions:{}}}; 
 			}); 
		define("pages/item/subPackages/pages/gift/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../../itemBase/js/util/util.js"),o=require("./store.js"),r=e(require("../../../../../common/fe_helper")),i=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../common/wxcontext.js")),s=e(require("../../../../../common/toast/toast.js")),a=require("../../../../../common/timer-manage"),n={store:o.storeFn,created:function(){var e=this.$query,o=e.d,i=e.c,n=e.o;if(!o&&!i)return s.show({icon:s.ICON.WARNING,content:"参数错误"}),void(this.timeoutId=(0,a.createTimeout)(function(){(0,t.goBack)()},1500));try{var c=[],u=[],l={};o&&(c=JSON.parse(r.decode(o))),i&&(u=JSON.parse(r.decode(i))),n&&(l=JSON.parse(r.decode(n))),c.forEach(function(e){e.img=r.getImg(e.img||"jfs/t1264/236/181850154/1105/14bba6c8/5509488cN2093c2a9.png",150)}),this.list=c,this.coupon=u,this.options={name:l.name,isPlus:l.isPlus,hasGift:l.hasGift}}catch(e){s.show({icon:s.ICON.WARNING,content:"JSON.parse error"}),this.timeoutId=(0,a.createTimeout)(function(){(0,t.goBack)()},1500)}},onShow:function(){},destoryed:function(){clearTimeout(this.timeoutId)},methods:{modalTip:function(e){var t="";switch(e.currentTarget.dataset.type){case"openPlusTip":t="请到“微信-发现-购物-个人中心”进行PLUS会员开通。"}t&&i.default.showModal({title:"",content:t,showCancel:!1,confirmColor:"#3CC51F"})},gotoDetail:function(e){var o={sku:e.currentTarget.dataset.sku};(0,t.gotoUrl)(this,{xcx:{url:"/pages/item/detail/detail",params:o},h5:{url:"https://wqitem.jd.com/item/view",params:o}})}}};exports.default=n; 
 			}); 
		define("pages/item/subPackages/pages/gift/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{list:[],coupon:[],options:{name:"",isPlus:!1,hasGift:!1}},actions:{}}}; 
 			}); 
		define("pages/item/subPackages/pages/giftPool/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store.js"),t=getApp(),o={store:e.storeFn,created:function(){var e=this.$query,o=e.name,r=e.price,s=e.cover,i=e.num,n=e.flag;this.goods={name:o,price:r,cover:s,num:i},this.poolList=t.itemPoolList,this.flag="true"==n},onShow:function(){},destoryed:function(){delete t.itemPoolList},data:{},computed:{},watch:{},methods:{}};exports.default=o; 
 			}); 
		define("pages/item/subPackages/pages/giftPool/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{goods:{},flag:!1,poolList:[]},actions:{}}}; 
 			}); 
		define("pages/item/subPackages/pages/ldp/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store.js"),t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../common/wxcontext.js")),r={store:e.storeFn,created:function(){this.vsc=this.$query.vsc},methods:{onCancel:function(){t.default.navigateBack()}}};exports.default=r; 
 			}); 
		define("pages/item/subPackages/pages/ldp/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{vsc:[]},actions:{}}}; 
 			}); 
		define("pages/item/subPackages/pages/pricereduceNotice/constant.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.PTAG={CLICK_BTN_NOTICEME:"7418.25.4",CLICK_DIALOG_BTN_SET_NOTICE:"7418.25.6",CLICK_DIALOG_SET_NOTICE_AGAIN:"7418.25.11",CLICK_WXAUTH_ALLOW:"7418.25.25",CLICK_WXAUTH_CANCEL:"7418.25.26",EXPOSURE_PAGE:"7418.25.3",EXPOSURE_DIALOG_SET_NOTICE:"7418.25.5",EXPOSURE_TOAST_SET_NOTICE_FAIL:"7418.25.7",EXPOSURE_TOAST_SET_NOTICE_SUCCESS:"7418.25.8",EXPOSURE_DIALOG_SET_NOTICE_FAIL:"7418.25.9",EXPOSURE_DIALOG_LOW_VERSION:"7418.25.12",EXPOSURE_DIALOG_GUIDE_SET:"7418.25.24"}; 
 			}); 
		define("pages/item/subPackages/pages/pricereduceNotice/model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function r(){var e=a.getCookie("wq_addr"),r=e?e.split("|"):[];return[r[0]||"0",r[1]||"19_1607_3155_0",r[2]||"广东_深圳市_南山区_",r[3]||""]}function t(e,n){var o={addr:r()[1].replace(/_/g,"-"),sku:e,price:n,src:"item",r:Math.random()};return s.getLoginPromise().then(function(){return(0,i.request)({url:d.subscribe,data:o})}).then(function(r){var o=r.body;return"13"==o.errcode?s.doLogin().then(function(){return t(e,n)}):0==o.errcode&&o.result?1==o.result.resultCode&&o.result.templateId?o.result.templateId:Promise.reject(o.result.resultCode):Promise.reject(null)})}function n(e){var t=r()[1],o=Object.assign({},e,{addr:t,r:Math.random()});return s.getLoginPromise().then(function(){return(0,i.request)({url:d.autoBuy,data:o})}).then(function(r){var t=r.body;return"13"==t.errcode?s.doLogin().then(function(){return n(e)}):0==t.errcode&&t.result?1==t.result.resultCode&&t.result.templateId?t.result.templateId:Promise.reject(t.result.resultCode):Promise.reject(null)})}function o(e){return s.getLoginPromise().then(function(){return(0,i.request)({url:d.skuFav,data:{commId:e,callback:"skuFavCallbck",r:Math.random()}})}).then(function(r){var t=r.body;return"9999"==t.iRet?s.doLogin().then(function(){return o(e)}):["0","3","16"].includes(t.iRet)?"success":"fail"}).catch(function(e){return"fail"})}function u(){var e={url:"https://wq.jd.com/pinbind/QueryPinStatus",data:{source:2,sceneid:80015,rurl:""}};return i.request.get(e).then(function(e){var r=e.body;return 0==r.errcode?r:13==r.errcode?s.doLogin().then(u):null}).catch(function(e){return null})}function c(e){return i.request.get({url:d.supportAutoBuy,data:{callback:"supportAutoBuyCB",sku:e}}).then(function(r){var t=r.body,n=void 0===t?{}:t;return 0===n.errcode&&1===n.result||13===n.errcode&&s.doLogin().then(function(){return c(e)})}).catch(function(e){return!1})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.subscribePricereduce=t,exports.subscribeAutoBuy=n,exports.getReceiverInfo=function(){return s.getLoginPromise().then(function(){return(0,i.request)({url:d.receiverInfo,data:{callback:"notifyCB",r:Math.random()}})}).then(function(e){var r=e.body;return 0===r.errcode&&r.result&&r.result.length>0?(r.result.forEach(function(e){e.adid=e.id,e.addrfull=e.address}),r.result):[]}).catch(function(){return[]})},exports.getItemPrice=function(e){var t=r()[1],n={skus:e,command:2,source:"wxapp_reducepricenotice",priceinfo:"1",area:t};return(0,i.request)({url:d.getPrice,data:n}).then(function(r){var t=r.body;return 0==t.errcode&&t.priceinfo&&0==t.priceinfo.errcode&&t.priceinfo.data?t.priceinfo.data[e]:null}).catch(function(e){return null})},exports.skuFav=o,exports.queryPinStatus=u,exports.getPPMS=function(e,r){var t=r?"pgxcx":"xcx",n=2==e?"newpg":1==e?"oldpg":"normal";return i.request.get({url:d.ppms}).then(function(e){var r=e.body,o=void 0===r?{}:r,u=!1;return(o&&o.data||[]).forEach(function(e){var r=e.channel&&e.channel.split(";")||[],o=e.itemType&&e.itemType.split(";")||[];r.includes(t)&&o.includes(n)&&"dropNoticeOrder"==e.key&&(u=!0)}),u}).catch(function(e){return!1})},exports.supportAutoBuy=c;var i=require("../../../../../common/request/request"),s=e(require("../../../../../common/login/login")),a=e(require("../../../../../common/cookie-v2/cookie")),d={receiverInfo:"//wq.jd.com/commodity/notify/GetReceiverInfo",subscribe:"//wq.jd.com/commodity/notify/SubscribePrice",autoBuy:"//wq.jd.com/commodity/notify/PriceOrder",getPrice:"//wq.jd.com/commodity/skudescribe/get",skuFav:"//wq.jd.com/fav/comm/FavCommAdd",ppms:"//wq.360buyimg.com/data/ppms/js/ppms.pagev36958.json",supportAutoBuy:"//wq.jd.com/commodity/notify/IsSupportOrder"}; 
 			}); 
		define("pages/item/subPackages/pages/suit/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./store.js"),e=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e}(require("../../../../../common/toast/toast.js")),s=getApp(),r={store:t.storeFn,created:function(){if(this.entries=s.tempSuitListData||[],!this.entries&&this.entries.length)return e.show({page:this,content:"数据未找到"});this.packList=s.tempSuitPacksData&&s.tempSuitPacksData.packList||[]},onShow:function(){},destoryed:function(){delete s.tempSuitListData},data:{},computed:{},watch:{},methods:{}};exports.default=r; 
 			}); 
		define("pages/item/subPackages/pages/suit/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.storeFn=function(){return{state:{entries:[],packList:{}},actions:{}}}; 
 			}); 
		define("pages/item/subPackages/pages/yuyueResult/constant.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.PTAG={CLICK_BTN_VIEW_YUYUE:"7418.24.5",CLICK_BTN_NOTICEME:"7418.24.6",CLICK_WXAUTH_ALLOW:"7418.24.14",CLICK_WXAUTH_CANCEL:"7418.24.15",CLICK_BTN_SET_AGAIN:"7418.24.10",EXPOSURE_PAGE_SUCCESS:"7418.24.3",EXPOSURE_PAGE_FAIL:"7418.24.4",EXPOSURE_TOAST_SET_SUCCESS:"7418.24.7",EXPOSURE_DIALOG_GUIDE_SET:"7418.24.13",EXPOSURE_DIALOG_SET_NOTICE_FAIL:"7418.24.8",EXPOSURE_DIALOG_LOW_VERSION:"7418.24.11"}; 
 			}); 
		define("pages/item/subPackages/pages/yuyueResult/model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(o){return t.getLoginPromise().then(function(){return r.request.get({url:"//wq.jd.com/bases/yuyue/itemsubscribe",data:{skuId:o,callback:"itemsubscribeCallback"},ump:{ret:"retCode",bizId:1240,opId:27,errBizId:1240,errOpId:28,reportHook:function(e){if(0==e.retCode&&e.list&&Array.isArray(e.list)){var r=e.list[0];return{code:r.replyCode,message:r.replyMsg}}return 0!=e.retCode?{code:e.retCode,message:e.retMsg}:{code:1,message:"response data list error"}}}})}).then(function(r){var n=r.body;return"13"==n.retCode?t.doLogin().then(function(){return e(o)}):n}).catch(function(e){})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadYuyueData=e;var r=require("../../../../../common/request/request"),t=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}(require("../../../../../common/login/login.js")); 
 			}); 
		define("pages/item/subPackages/pages/yuyueResult/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function t(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(require("./store")),o=t(require("../../../../../components/subscribe-guider/helper")),s=t(require("../../../../../common/toast/toast")),a=t(require("../../../../../common/biz")),n=e(require("../../../../../api/Ptag/report_manager_wqvue")),u=require("./constant"),r=require("../../../../../common/timer-manage"),l="2"==t(require("../../../../../common/cookie-v2/cookie")).getCookie("wxapp_type"),c={show:!0,hideIcon:!0,titleMsg:"设置提醒失败",smallMsg:"我们将无法通过小程序服务通知提醒您，如需接收提醒，请重新设置",confirmBtnTxt:"重新设置",cancelBtnTxt:"暂不"},d={store:i.default,methods:{init:function(){var t=this.$query,e=t.sku,i=t.activeid,o=t.activetype&&i||"";e?(this.noticeDialogTitle=l?"商品开售提醒":"活动开始提醒",this.loadData(e,o)):this.goback()},gotoYuyue:function(){n.default.addPtag(u.PTAG.CLICK_BTN_VIEW_YUYUE);this.$goto("/pages/h5/index",{url:"https://wqs.jd.com/my/preorder/mypreorder_v1.shtml?ptag=38723.2.1"})},goback:function(){(0,r.createTimeout)(function(){wx.navigateBack({delta:1})},700)},noticeMe:function(){if(1!=this.noticeStatus){n.default.addPtag(u.PTAG.CLICK_BTN_NOTICEME);var t=wx.canIUse("requestSubscribeMessage"),e=[this.templateId],i=this;if(t){var r=Date.now(),l="开启通知，可收到"+this.noticeDialogTitle;o.delayShow({tplCount:e.length,title:l},800),wx.requestSubscribeMessage({tmplIds:e,success:function(t){o.hide();var e=t[i.templateId],l=Date.now()-r<=800;a.setWxappSubscriBeauth(e,i.activeId,1),"accept"===e?(l||n.default.addPtag(u.PTAG.CLICK_WXAUTH_ALLOW),i.noticeStatus=1,s.show({icon:s.ICON.SUCCESS,content:"成功设置提醒"}),n.default.addPtagExposure(u.PTAG.EXPOSURE_TOAST_SET_SUCCESS),i.goback()):l?(i.showNoticeDialog=!0,n.default.addPtagExposure(u.PTAG.EXPOSURE_DIALOG_GUIDE_SET)):(n.default.addPtag(u.PTAG.CLICK_WXAUTH_CANCEL),n.default.addPtagExposure(u.PTAG.EXPOSURE_DIALOG_SET_NOTICE_FAIL),i.dialog=Object.assign({},c,{onConfirm:function(){n.default.addPtag(u.PTAG.CLICK_BTN_SET_AGAIN),i.noticeMe()}}))},fail:function(t){o.hide(),i.showNoticeDialog=!0,n.default.addPtagExposure(u.PTAG.EXPOSURE_DIALOG_SET_NOTICE_FAIL)}})}else this.dialog.show=!0,n.default.addPtagExposure(u.PTAG.EXPOSURE_DIALOG_LOW_VERSION)}},onDialogConfirm:function(){this.dialog.show=!1,this.dialog.onConfirm&&this.dialog.onConfirm()},onDialogCancel:function(){this.dialog.show=!1,this.dialog.onCancel&&this.dialog.onCancel()},onCloseMod:function(){this.showNoticeDialog=!1},retrySubscribe:function(){var t=this;wx.showLoading({title:"排队中"}),(0,r.createTimeout)(function(){t.init()},1e3)}},created:function(){this.init()},computed:{resultTime:function(){return 0==this.resultStatus||3==this.resultStatus||4==this.resultStatus?"":(~this.saleStartTime.indexOf(":")?"开抢时间：":"")+this.saleStartTime},resultTitle:function(){return 0==this.resultStatus?"":1==this.resultStatus||3==this.resultStatus||4==this.resultStatus?this.replyMsg:"预约失败！请重新预约！"},resultText:function(){return 0==this.resultStatus||3==this.resultStatus||4==this.resultStatus?"":1==this.resultStatus?"点击下方“开抢前提醒我”设置提醒，我们可在商品开抢前通过小程序服务通知提醒您":this.replyMsg?"原因: "+this.replyMsg:""},noticeBtnEnable:function(){return 0==this.noticeStatus?"":"disabled"},noticeBtnText:function(){return 0==this.noticeStatus?"开抢前提醒我":"已开启开抢提醒"}}};exports.default=d; 
 			}); 
		define("pages/item/subPackages/pages/yuyueResult/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./model"),t=require("../../../../../common/biz"),l=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../api/Ptag/report_manager_wqvue")),s=require("./constant");exports.default=function(){return{state:{noticeStatus:0,resultIcon:"icon_wait",saleStartTime:"",replyMsg:"",resultStatus:0,templateId:"",activeId:"",dialog:{show:!1,selfIconCls:"icon_fail",titleMsg:"无法设置提醒",smallMsg:"您的微信版本过低，无法设置小程序提醒，请注意短信提醒",confirmBtnTxt:"知道了",onCancel:null},showNoticeDialog:!1,noticeDialogTitle:""},actions:{loadData:function(a,r){var u=this;(0,e.loadYuyueData)(a,r).then(function(e){if(wx.hideLoading(),0==e.retCode&&e.list&&e.list.length){var a=e.list[0];~" 6 7 8 9 ".indexOf(a.replyCode)?("1"==a.addCart&&(0,t.addCart)({skuId:a.skuId,buyNum:1}).then(function(e){9!=a.replyCode&&(u.replyMsg+="，商品已加入购物车")}),u.resultStatus=1,l.default.addPtagExposure(s.PTAG.EXPOSURE_PAGE_SUCCESS),u.resultIcon="icon_success",u.templateId=e.templateId,u.activeId=a.activeId,u.replyMsg=a.replyMsg):("22"==a.replyCode?(u.resultStatus=4,u.replyMsg=a.replyMsg||"预约失败，您已超出最多购买数量，谢谢惠顾"):"10020"==a.replyCode?(u.resultStatus=4,u.replyMsg="抱歉，活动已结束，请下次再来"):(u.resultStatus=2,u.replyMsg=a.replyMsg),l.default.addPtagExposure(s.PTAG.EXPOSURE_PAGE_FAIL),u.resultIcon="icon_fail"),u.saleStartTime=a.saleStartTime}else u.resultIcon="icon_fail","40000"==e.retCode?(u.resultStatus=3,u.replyMsg=e.retMsg||"活动太火爆，没挤进去，请重新预约"):u.resultStatus=2}).catch(function(e){wx.hideLoading(),u.resultIcon="icon_fail",u.resultStatus=2})}}}}; 
 			}); 
		__wxRoute = 'pages/item/itemBase/components/accessories/accessories';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/accessories/accessories.js';	define("pages/item/itemBase/components/accessories/accessories.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"accessories"); 
 			}); 	require("pages/item/itemBase/components/accessories/accessories.js");
 		__wxRoute = 'pages/item/itemBase/components/actionSheet/actionSheet';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/actionSheet/actionSheet.js';	define("pages/item/itemBase/components/actionSheet/actionSheet.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"action-sheet"); 
 			}); 	require("pages/item/itemBase/components/actionSheet/actionSheet.js");
 		__wxRoute = 'pages/item/itemBase/components/activities/activities';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/activities/activities.js';	define("pages/item/itemBase/components/activities/activities.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"activities"); 
 			}); 	require("pages/item/itemBase/components/activities/activities.js");
 		__wxRoute = 'pages/item/itemBase/components/addCartPg/addCartPg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/addCartPg/addCartPg.js';	define("pages/item/itemBase/components/addCartPg/addCartPg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"add-cart-pg"); 
 			}); 	require("pages/item/itemBase/components/addCartPg/addCartPg.js");
 		__wxRoute = 'pages/item/itemBase/components/address/address';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/address/address.js';	define("pages/item/itemBase/components/address/address.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"address"); 
 			}); 	require("pages/item/itemBase/components/address/address.js");
 		__wxRoute = 'pages/item/itemBase/components/answers/answers';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/answers/answers.js';	define("pages/item/itemBase/components/answers/answers.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"answers"); 
 			}); 	require("pages/item/itemBase/components/answers/answers.js");
 		__wxRoute = 'pages/item/itemBase/components/appLaunchBar/appLaunchBar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/appLaunchBar/appLaunchBar.js';	define("pages/item/itemBase/components/appLaunchBar/appLaunchBar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"add-launch-bar"); 
 			}); 	require("pages/item/itemBase/components/appLaunchBar/appLaunchBar.js");
 		__wxRoute = 'pages/item/itemBase/components/appLaunchBtn/appLaunchBtn';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/appLaunchBtn/appLaunchBtn.js';	define("pages/item/itemBase/components/appLaunchBtn/appLaunchBtn.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"add-launch-btn"); 
 			}); 	require("pages/item/itemBase/components/appLaunchBtn/appLaunchBtn.js");
 		__wxRoute = 'pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.js';	define("pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"banner-atmosphere"); 
 			}); 	require("pages/item/itemBase/components/bannerAtmosphere/bannerAtmosphere.js");
 		__wxRoute = 'pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.js';	define("pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"banner-atmosphere-pg"); 
 			}); 	require("pages/item/itemBase/components/bannerAtmospherePg/bannerAtmospherePg.js");
 		__wxRoute = 'pages/item/itemBase/components/bottomBtn/bottomBtn';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/bottomBtn/bottomBtn.js';	define("pages/item/itemBase/components/bottomBtn/bottomBtn.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"bottom-btn"); 
 			}); 	require("pages/item/itemBase/components/bottomBtn/bottomBtn.js");
 		__wxRoute = 'pages/item/itemBase/components/bottomBtnPg/bottomBtnPg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/bottomBtnPg/bottomBtnPg.js';	define("pages/item/itemBase/components/bottomBtnPg/bottomBtnPg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"bottom-btn-pg"); 
 			}); 	require("pages/item/itemBase/components/bottomBtnPg/bottomBtnPg.js");
 		__wxRoute = 'pages/item/itemBase/components/businessEntry/businessEntry';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/businessEntry/businessEntry.js';	define("pages/item/itemBase/components/businessEntry/businessEntry.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"business-entry"); 
 			}); 	require("pages/item/itemBase/components/businessEntry/businessEntry.js");
 		__wxRoute = 'pages/item/itemBase/components/cardShare/cardShare';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/cardShare/cardShare.js';	define("pages/item/itemBase/components/cardShare/cardShare.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"card-share"); 
 			}); 	require("pages/item/itemBase/components/cardShare/cardShare.js");
 		__wxRoute = 'pages/item/itemBase/components/cardSharePg/cardSharePg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/cardSharePg/cardSharePg.js';	define("pages/item/itemBase/components/cardSharePg/cardSharePg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"card-share-pg"); 
 			}); 	require("pages/item/itemBase/components/cardSharePg/cardSharePg.js");
 		__wxRoute = 'pages/item/itemBase/components/comment/comment';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/comment/comment.js';	define("pages/item/itemBase/components/comment/comment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"comment"); 
 			}); 	require("pages/item/itemBase/components/comment/comment.js");
 		__wxRoute = 'pages/item/itemBase/components/commentItems/commentItems';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/commentItems/commentItems.js';	define("pages/item/itemBase/components/commentItems/commentItems.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"comment-items"); 
 			}); 	require("pages/item/itemBase/components/commentItems/commentItems.js");
 		__wxRoute = 'pages/item/itemBase/components/customService/customService';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/customService/customService.js';	define("pages/item/itemBase/components/customService/customService.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"custom-service"); 
 			}); 	require("pages/item/itemBase/components/customService/customService.js");
 		__wxRoute = 'pages/item/itemBase/components/daojiaRecommend/daojiaRecommend';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/daojiaRecommend/daojiaRecommend.js';	define("pages/item/itemBase/components/daojiaRecommend/daojiaRecommend.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"daojia-recommend"); 
 			}); 	require("pages/item/itemBase/components/daojiaRecommend/daojiaRecommend.js");
 		__wxRoute = 'pages/item/itemBase/components/discount/discount';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/discount/discount.js';	define("pages/item/itemBase/components/discount/discount.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"discount"); 
 			}); 	require("pages/item/itemBase/components/discount/discount.js");
 		__wxRoute = 'pages/item/itemBase/components/discountLayer/discountLayer';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/discountLayer/discountLayer.js';	define("pages/item/itemBase/components/discountLayer/discountLayer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"discountLayer"); 
 			}); 	require("pages/item/itemBase/components/discountLayer/discountLayer.js");
 		__wxRoute = 'pages/item/itemBase/components/discountLayerPg/discountLayerPg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/discountLayerPg/discountLayerPg.js';	define("pages/item/itemBase/components/discountLayerPg/discountLayerPg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"discountLayerPg"); 
 			}); 	require("pages/item/itemBase/components/discountLayerPg/discountLayerPg.js");
 		__wxRoute = 'pages/item/itemBase/components/discountPg/discountPg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/discountPg/discountPg.js';	define("pages/item/itemBase/components/discountPg/discountPg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"discount-pg"); 
 			}); 	require("pages/item/itemBase/components/discountPg/discountPg.js");
 		__wxRoute = 'pages/item/itemBase/components/familyList/familyList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/familyList/familyList.js';	define("pages/item/itemBase/components/familyList/familyList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"family-list"); 
 			}); 	require("pages/item/itemBase/components/familyList/familyList.js");
 		__wxRoute = 'pages/item/itemBase/components/favour/favour';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/favour/favour.js';	define("pages/item/itemBase/components/favour/favour.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"favour"); 
 			}); 	require("pages/item/itemBase/components/favour/favour.js");
 		__wxRoute = 'pages/item/itemBase/components/focusSlide/focusSlide';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/focusSlide/focusSlide.js';	define("pages/item/itemBase/components/focusSlide/focusSlide.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"foucs-slide"); 
 			}); 	require("pages/item/itemBase/components/focusSlide/focusSlide.js");
 		__wxRoute = 'pages/item/itemBase/components/garmentColor/garmentColor';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/garmentColor/garmentColor.js';	define("pages/item/itemBase/components/garmentColor/garmentColor.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"garment-color"); 
 			}); 	require("pages/item/itemBase/components/garmentColor/garmentColor.js");
 		__wxRoute = 'pages/item/itemBase/components/goodsDesc/goodsDesc';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/goodsDesc/goodsDesc.js';	define("pages/item/itemBase/components/goodsDesc/goodsDesc.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"goods-desc"); 
 			}); 	require("pages/item/itemBase/components/goodsDesc/goodsDesc.js");
 		__wxRoute = 'pages/item/itemBase/components/guessYouLike/guessYouLike';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/guessYouLike/guessYouLike.js';	define("pages/item/itemBase/components/guessYouLike/guessYouLike.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"guess-you-like"); 
 			}); 	require("pages/item/itemBase/components/guessYouLike/guessYouLike.js");
 		__wxRoute = 'pages/item/itemBase/components/itemPrice/itemPrice';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/itemPrice/itemPrice.js';	define("pages/item/itemBase/components/itemPrice/itemPrice.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"item-price"); 
 			}); 	require("pages/item/itemBase/components/itemPrice/itemPrice.js");
 		__wxRoute = 'pages/item/itemBase/components/itemPriceReturn/itemPriceReturn';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.js';	define("pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"item-price-return"); 
 			}); 	require("pages/item/itemBase/components/itemPriceReturn/itemPriceReturn.js");
 		__wxRoute = 'pages/item/itemBase/components/itemShop/itemShop';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/itemShop/itemShop.js';	define("pages/item/itemBase/components/itemShop/itemShop.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"item-shop"); 
 			}); 	require("pages/item/itemBase/components/itemShop/itemShop.js");
 		__wxRoute = 'pages/item/itemBase/components/jxappExclusiveLayer/jxappExclusiveLayer';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/jxappExclusiveLayer/jxappExclusiveLayer.js';	define("pages/item/itemBase/components/jxappExclusiveLayer/jxappExclusiveLayer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"jxapp-exclusive-layer"); 
 			}); 	require("pages/item/itemBase/components/jxappExclusiveLayer/jxappExclusiveLayer.js");
 		__wxRoute = 'pages/item/itemBase/components/jxvip-buy/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/jxvip-buy/index.js';	define("pages/item/itemBase/components/jxvip-buy/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=require("../../../../../bases/component.js"),e=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(require("../../../../../common/toast/toast")),a=require("../../../../../models/pay/wechat_pay.js"),i=require("../../../../../common/timer-manage"),o=require("../../../../../common/fe_report/usability"),s=function(t){return t&&t.__esModule?t:{default:t}}(require("../../../../../api/Ptag/report_manager_wqvue")),n=require("./model.js");new t.JDComponent({data:{isShow:!1,buyLock:!1,firstLoad:!0,protocolSelected:!0,protocol:[],protocolShow:!1,isBuySuccess:!1,isPaySuccess:!1,payLoading:!1,status:0,activateInfo:{benefit_version:0,price_version:0,activate_status:0,purchase_type:1,current_price:{raw:"",prefix:"",content:"",suffix:""},origin_price:"",remain:""},nonmember_title:{raw:"",prefix:"",content:"",suffix:""},nonmember_desc:{raw:"",prefix:"",content:"",suffix:""},coupons:[],success_icon:"",success_title:"",success_desc:[]},properties:{bizId:{type:String,value:"1435"}},methods:{show:function(){var t=this;this.data.firstLoad?this.init():1==this.data.status?(this.hide(),e.show({icon:e.ICON.NONE,content:"您已购买省钱卡，无需重复购买"})):1!=this.data.status&&this.queryVipData().then(function(){t.setData({isShow:!0}),s.default.addPtagExposure("138885.4.1")}).catch(function(t){e.show({icon:e.ICON.NONE,content:t&&t.content||"网络不佳，请稍后再试"})})},hide:function(){this.setData({isShow:!1}),this.triggerEvent("onHide",{vipStatus:this.data.status})},init:function(){var t=this;Promise.all([this.queryVipData(),this.getPPMSConfig()]).then(function(){t.data.firstLoad&&t.setData({firstLoad:!1}),t.setData({isShow:!0}),s.default.addPtagExposure("138885.4.1")}).catch(function(a){(0,o.umpBiz)({bizid:t.data.bizId,operation:9,result:"1",message:a}),e.show({icon:e.ICON.NONE,content:a&&a.content||"网络不佳，请稍后再试"})})},queryVipData:function(){var t=this;return new Promise(function(e,a){(0,n.openCardInfo)({bizId:t.data.bizId},t.data.bizId).then(function(i){0==i.ret?(1==i.status?(t.setData({status:i.status}),t.triggerEvent("onSuccess",{vipStatus:i.status}),t.data.isPaySuccess||a({content:"您已购买省钱卡，无需重复购买"})):i.activate_info?(i.activate_info.current_price=t.stringFormat(i.activate_info.current_price||""),t.setData({activateInfo:i.activate_info})):a(),e()):a()}).catch(function(t){a()})})},getPPMSConfig:function(){var t=this;return new Promise(function(e,a){(0,n.getPPMSConfig)(t.data.bizId).then(function(i){var o=i&&i[0]||null;if(o){var s=o.protocol.split("<br>")||[],n=t.stringFormat(o.nonmember_title||""),c=t.stringFormat(o.nonmember_desc||""),r=o.coupons||[],u=o.success_icon||"",d=o.success_title,p=o.success_desc.split("<br>")||[];if(p.length>0&&p.forEach(function(e,a){p[a]=t.stringFormat(e||"")}),r.length<7)return void a();t.setData({protocol:s,nonmember_title:n,nonmember_desc:c,coupons:r,success_icon:u,success_title:d,success_desc:p}),e()}else a()}).catch(function(t){a()})})},paySuccess:function(t){this.setData({payLoading:!0,isBuySuccess:!1,isPaySuccess:!0}),this.payStatusUpdate(t,10,!0),s.default.addPtagExposure("138885.4.9")},payStatusUpdate:function(t,a,s){var n=this;s&&this.queryOrder(t),(0,i.createTimeout)(function(){if(a<=0||n.data.isBuySuccess)return n.setData({payLoading:!1}),void(n.data.isBuySuccess||(e.show({icon:e.ICON.NONE,content:"省钱卡购买中，请稍后留意购买结果"}),(0,o.umpBiz)({bizid:n.data.bizId,operation:11,result:1,message:"开通超时"})));n.queryOrder(t),a--,n.payStatusUpdate(t,a)},1e3)},queryOrder:function(t){var e=this;(0,n.queryOrder)({orderId:t},this.data.bizId).then(function(t){0==t.ret&&t.data&&t.data.orderId&&2==t.data.status&&(e.setData({isBuySuccess:!0,payLoading:!1}),e.queryVipData().catch(function(t){e.setData({status:1}),e.triggerEvent("onSuccess",{vipStatus:1})}))})},protocolClick:function(){this.setData({protocolSelected:!this.data.protocolSelected})},checkVipStatus:function(){var t=this;return new Promise(function(e,a){(0,n.openCardInfo)({bizId:t.data.bizId},t.data.bizId).then(function(a){0==a.ret&&1==a.status&&(t.setData({status:a.status}),e(!0)),e(!1)}).catch(function(t){e(!1)})})},buy:function(){var t=this;this.data.payLoading||(this.data.protocolSelected?this.data.buyLock||(this.setData({buyLock:!0}),this.checkVipStatus().then(function(a){if(a)t.setData({buyLock:!1}),t.hide(),e.show({icon:e.ICON.NONE,content:"您已购买省钱卡，无需重复购买"});else{var o=t.data.activateInfo.purchase_type,s=t.data.activateInfo.price_version;(0,n.submitOrder)({purchaseType:o,priceVersion:s,autoCoupon:1,bizId:t.data.bizId},t.data.bizId).then(function(a){if(t.setData({buyLock:!1}),0==a.ret&&a.data&&a.data.orderId){var o={dealId:a.data.orderId,price:a.data.price||"",appid:a.data.payAppId||""};t.pay(o)}else 20007==a.ret?(e.show({icon:e.ICON.NONE,content:a.msg}),(0,i.createTimeout)(function(){t.queryVipData()},2e3)):e.show({icon:e.ICON.NONE,content:a.msg})}).catch(function(a){t.setData({buyLock:!1}),e.show({icon:e.ICON.NONE,content:"网络不佳，请稍后再试"})})}}),s.default.addPtag("138885.4.4")):e.show({icon:e.ICON.NONE,content:"请阅读并勾选用户协议后开通"}))},pay:function(t){var i=this,n=getApp();(0,a.requestPay)(n.appId,t.dealId,function(a,n){a?"requestPayment:fail cancel"==a.errMsg?s.default.addPtagExposure("138885.4.15"):(e.show({icon:e.ICON.NONE,content:"亲，支付失败，请稍后重新再试吧"}),(0,o.umpBiz)({bizid:i.data.bizId,operation:10,result:1,message:a}),s.default.addPtagExposure("138885.4.12")):i.paySuccess(t.dealId)})},showProtocol:function(){this.setData({protocolShow:!0})},hideProtocol:function(){this.setData({protocolShow:!1})},stringFormat:function(t){if(t.indexOf("#")>=0){var e=t.split("#");return{raw:t,prefix:e[0]||"",content:e[1]||"",suffix:e[2]||""}}return{raw:t,prefix:"",content:"",suffix:""}},stopMove:function(){if(this.data.protocolShow)return!1}}}); 
 			}); 	require("pages/item/itemBase/components/jxvip-buy/index.js");
 		__wxRoute = 'pages/item/itemBase/components/kernelProps/kernelProps';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/kernelProps/kernelProps.js';	define("pages/item/itemBase/components/kernelProps/kernelProps.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"kernel-props"); 
 			}); 	require("pages/item/itemBase/components/kernelProps/kernelProps.js");
 		__wxRoute = 'pages/item/itemBase/components/kernelPropsLayer/kernelPropsLayer';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/kernelPropsLayer/kernelPropsLayer.js';	define("pages/item/itemBase/components/kernelPropsLayer/kernelPropsLayer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"kernel-props-layer"); 
 			}); 	require("pages/item/itemBase/components/kernelPropsLayer/kernelPropsLayer.js");
 		__wxRoute = 'pages/item/itemBase/components/modalGift/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/modalGift/index.js';	define("pages/item/itemBase/components/modalGift/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t={dongquan:"https://img11.360buyimg.com/jdphoto/s120x120_jfs/t1/34653/18/355/10481/5cae04beEb16dd3c5/1195fcb4563cddc6.png",jingquan:"https://img11.360buyimg.com/jdphoto/s120x120_jfs/t1/16026/39/15151/10452/5cadf601E75f9207c/3a2451ad0b2054ca.png",jingdou:"https://img11.360buyimg.com/jdphoto/s120x120_jfs/t1/30024/10/10289/9190/5cadf601Ea766ab03/c86467df3a94ea52.png",jifen:"https://img11.360buyimg.com/jdphoto/s133x124_jfs/t1/14173/18/13027/9693/5cadf601E8e29734d/1ddcd5b263c089e2.png"};new(require("../../../../../bases/component").JDComponent)({properties:{giftList:{type:Array,value:[],observer:"updateShowGifts"},desc:String,errCode:Number,isShowModal:Boolean},data:{showGifts:[]},methods:{updateShowGifts:function(o){o.forEach(function(o){o.icon=t[o.type]}),this.setData({showGifts:o})},handleConfirm:function(t){this.triggerEvent("confirm")},handleClose:function(t){this.triggerEvent("close")}}}); 
 			}); 	require("pages/item/itemBase/components/modalGift/index.js");
 		__wxRoute = 'pages/item/itemBase/components/navbar/navbar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/navbar/navbar.js';	define("pages/item/itemBase/components/navbar/navbar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"navbar"); 
 			}); 	require("pages/item/itemBase/components/navbar/navbar.js");
 		__wxRoute = 'pages/item/itemBase/components/offlineStore/offlineStore';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/offlineStore/offlineStore.js';	define("pages/item/itemBase/components/offlineStore/offlineStore.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"Offline-store"); 
 			}); 	require("pages/item/itemBase/components/offlineStore/offlineStore.js");
 		__wxRoute = 'pages/item/itemBase/components/pageComment/pageComment';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/pageComment/pageComment.js';	define("pages/item/itemBase/components/pageComment/pageComment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"page-comment"); 
 			}); 	require("pages/item/itemBase/components/pageComment/pageComment.js");
 		__wxRoute = 'pages/item/itemBase/components/pgRecommendTuan/pgRecommendTuan';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/pgRecommendTuan/pgRecommendTuan.js';	define("pages/item/itemBase/components/pgRecommendTuan/pgRecommendTuan.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"pg-recommend-tuan"); 
 			}); 	require("pages/item/itemBase/components/pgRecommendTuan/pgRecommendTuan.js");
 		__wxRoute = 'pages/item/itemBase/components/popupLayer/popupLayer';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/popupLayer/popupLayer.js';	define("pages/item/itemBase/components/popupLayer/popupLayer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"popup-layer"); 
 			}); 	require("pages/item/itemBase/components/popupLayer/popupLayer.js");
 		__wxRoute = 'pages/item/itemBase/components/purchaseTip/purchaseTip';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/purchaseTip/purchaseTip.js';	define("pages/item/itemBase/components/purchaseTip/purchaseTip.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"purchase-tip"); 
 			}); 	require("pages/item/itemBase/components/purchaseTip/purchaseTip.js");
 		__wxRoute = 'pages/item/itemBase/components/shareLayer/shareLayer';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/shareLayer/shareLayer.js';	define("pages/item/itemBase/components/shareLayer/shareLayer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"share-layer"); 
 			}); 	require("pages/item/itemBase/components/shareLayer/shareLayer.js");
 		__wxRoute = 'pages/item/itemBase/components/shareLayerPg/shareLayerPg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/shareLayerPg/shareLayerPg.js';	define("pages/item/itemBase/components/shareLayerPg/shareLayerPg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"share-layer"); 
 			}); 	require("pages/item/itemBase/components/shareLayerPg/shareLayerPg.js");
 		__wxRoute = 'pages/item/itemBase/components/skeletonScreen/skeletonScreen';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/skeletonScreen/skeletonScreen.js';	define("pages/item/itemBase/components/skeletonScreen/skeletonScreen.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"skeleton-screen"); 
 			}); 	require("pages/item/itemBase/components/skeletonScreen/skeletonScreen.js");
 		__wxRoute = 'pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.js';	define("pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"skuAddedService"); 
 			}); 	require("pages/item/itemBase/components/skuLayer/skuAddedService/skuAddedService.js");
 		__wxRoute = 'pages/item/itemBase/components/skuLayer/skuLayer';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/skuLayer/skuLayer.js';	define("pages/item/itemBase/components/skuLayer/skuLayer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"sku-layer"); 
 			}); 	require("pages/item/itemBase/components/skuLayer/skuLayer.js");
 		__wxRoute = 'pages/item/itemBase/components/specific/specific';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/specific/specific.js';	define("pages/item/itemBase/components/specific/specific.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"specific"); 
 			}); 	require("pages/item/itemBase/components/specific/specific.js");
 		__wxRoute = 'pages/item/itemBase/components/suyuanVideo/suyuanVideo';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/suyuanVideo/suyuanVideo.js';	define("pages/item/itemBase/components/suyuanVideo/suyuanVideo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"suyuan-video"); 
 			}); 	require("pages/item/itemBase/components/suyuanVideo/suyuanVideo.js");
 		__wxRoute = 'pages/item/itemBase/components/wqDialog/wqDialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/itemBase/components/wqDialog/wqDialog.js';	define("pages/item/itemBase/components/wqDialog/wqDialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"wq-dialog"); 
 			}); 	require("pages/item/itemBase/components/wqDialog/wqDialog.js");
 		__wxRoute = 'pages/item/subPackages/components/giftPool/giftPool';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/components/giftPool/giftPool.js';	define("pages/item/subPackages/components/giftPool/giftPool.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"gift-pool"); 
 			}); 	require("pages/item/subPackages/components/giftPool/giftPool.js");
 		__wxRoute = 'pages/item/subPackages/components/noticeDialog/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/components/noticeDialog/index.js';	define("pages/item/subPackages/components/noticeDialog/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../../bases/component"),o=function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o.default=e,o}(require("../../../../../common/cookie-v2/cookie"));new e.JDComponent({data:{isjx:"2"==o.getCookie("wxapp_type")},properties:{title:String},methods:{closeMod:function(){this.triggerEvent("closeMod")}}},"notice-dialog"); 
 			}); 	require("pages/item/subPackages/components/noticeDialog/index.js");
 		__wxRoute = 'pages/item/subPackages/components/noticeForm/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/components/noticeForm/index.js';	define("pages/item/subPackages/components/noticeForm/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var t=require("../../../../../bases/component"),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(require("./model"));new t.JDComponent({data:{receiveInfo:{},validate:!1,validatePrice:!0,addressList:[],showAddressLayerFlag:!1,validityArray:[{key:"ONE_WEEK",value:"一周内"},{key:"ONE_MONTH",value:"一个月内"},{key:"THREE_MONTH",value:"三个月内"}],selectedValidateKey:"ONE_WEEK",validateMap:{ONE_WEEK:"一周",ONE_MONTH:"一个月",THREE_MONTH:"三个月"},loadAddress:!1},properties:{autoBuy:Boolean},methods:{onInputChange:function(t){var a=t.target.dataset.type;this.setData(e({},a,t.detail.value))},changeValidity:function(e){this.setData({selectedValidateKey:e.target.dataset.validatekey}),this.triggerEvent("selectedvalidatekeyChange",e.target.dataset.validatekey)},switchAddress:function(e){var t=e.detail,a=t.adid,r=t.areaName,s=t.areaId,i=this.data.addressList.filter(function(e){return e.id==a});i.length?this.setData({receiveInfo:this._clone(i[0])}):this.setData({"receiveInfo.address":r.replace(/_/g,""),"receiveInfo.addressType":2,"receiveInfo.id":0,"receiveInfo.area":s}),this.closeAddressLayer()},_clone:function(e){return JSON.parse(JSON.stringify(e))},closeAddressLayer:function(){this.setData({showAddressLayerFlag:!1})},openAddressLayer:function(){this.setData({showAddressLayerFlag:!0})},clearInput:function(t){var a=t.target.dataset.type;this.setData(e({},a,""))},getAddress:function(){var e=this;a.getReceiverInfo().then(function(t){var a=t.filter(function(e){return e.isAddressDefault}),r=a[0]?a[0]:t[0]?t[0]:{};e.setData({receiveInfo:e._clone(r),addressList:t,loadAddress:!0})})}},observers:{"receiveInfo.**":function(e){this.triggerEvent("formchange",e)},autoBuy:function(e){e&&!this.data.loadAddress&&this.getAddress()}}},"notice-form"); 
 			}); 	require("pages/item/subPackages/components/noticeForm/index.js");
 		__wxRoute = 'pages/item/subPackages/components/suit/suit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/components/suit/suit.js';	define("pages/item/subPackages/components/suit/suit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqComponent)(e.default,"suit"); 
 			}); 	require("pages/item/subPackages/components/suit/suit.js");
 		__wxRoute = 'pages/item/detail/detail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/detail/detail.js';	define("pages/item/detail/detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var u=e(require("./page")),r=require("../../../common/wqvue/indexv1.2");e(require("../../../common/wxcontext")).default.isXCX,new r.WqVue(u.default); 
 			}); 	require("pages/item/detail/detail.js");
 		__wxRoute = 'pages/item/pingou/pingou';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/pingou/pingou.js';	define("pages/item/pingou/pingou.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var u=e(require("./page")),r=require("../../../common/wqvue/indexv1.2");e(require("../../../common/wxcontext")).default.isXCX,new r.WqVue(u.default); 
 			}); 	require("pages/item/pingou/pingou.js");
 		__wxRoute = 'pages/item/subPackages/address/address';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/address/address.js';	define("pages/item/subPackages/address/address.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}var t=require("../../../page.js"),a=e(require("../../../../common/address_picker/address_picker.js")),i=e(require("../../../../common/toast/toast.js")),n=e(require("../../../../common/user_info")),r={data:{address:"",didReady:!1,noDefault:!1},onLoad:function(e){var t=n.getAddress().areaId,a=!!e.noDefault,i=e.addr_id_str||t;a&&(i="",this.setData({noDefault:!0})),this.type=e.type||"",this.offline=!1,this.noCookie=!!e.noCookie,e.offline&&(this.offline=!0,wx.setNavigationBarTitle({title:"选择地址"})),this.setAddrData(i.split("_"))},onAddrChange:function(e){this.setData({address:e.nameList.join(""),didReady:!0})},onCancel:function(){wx.navigateBack(),getApp().event.emit("cancelAddressSelect")},onConfirm:function(){var e=this.getAddrData();if(e.complete){var t=e.idList||[],a=e.nameList||[];if(this.noCookie||n.updateAddress({areaId:t.join("_"),areaName:a.join("_")}),getApp().event.emit("cartrefresh"),this.offline)return getApp().event.emit("updateOfflineAddr",e),void wx.navigateBack();getApp().event.emit("updateItemDetailAddr",e),getApp().event.emit("updateItemDetailAddr_ITEM",e),"search_address"===this.type?wx.navigateBack({delta:2}):wx.navigateBack()}else i.show({icon:i.ICON.WARNING,content:"请填写完整的配送地址"})}};a.init(r,{specialAddr:!0}),new t.JDPage(r); 
 			}); 	require("pages/item/subPackages/address/address.js");
 		__wxRoute = 'pages/item/subPackages/freight/freight';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/freight/freight.js';	define("pages/item/subPackages/freight/freight.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var t=require("../../../page.js"),e=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(require("../../../../common/http_json"));new t.JDPage({data:{freight:[]},onLoad:function(){e.get("https://wq.360buyimg.com/data/ppms/js/ppms.pagev31026.jsonp",{},{success:function(t){var e=[];t.data.forEach(function(t){var n={};n.title1=t.title1[0].level1,n.content=[],t.title1[0].title2.forEach(function(t){var e={};t.level2&&(e.title2=t.level2),t.content=t.content.replace(/{{/g,"").replace(/}}/g,"@#"),e.content=t.content.split("@#"),e.content.pop(),n.content.push(e)}),e.push(n),this.setData({freight:e})}.bind(this))}.bind(this)})}}); 
 			}); 	require("pages/item/subPackages/freight/freight.js");
 		__wxRoute = 'pages/item/subPackages/pages/suit/suit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/pages/suit/suit.js';	define("pages/item/subPackages/pages/suit/suit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqVue)(e.default); 
 			}); 	require("pages/item/subPackages/pages/suit/suit.js");
 		__wxRoute = 'pages/item/subPackages/pages/giftPool/giftPool';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/pages/giftPool/giftPool.js';	define("pages/item/subPackages/pages/giftPool/giftPool.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqVue)(e.default); 
 			}); 	require("pages/item/subPackages/pages/giftPool/giftPool.js");
 		__wxRoute = 'pages/item/subPackages/pages/gift/gift';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/pages/gift/gift.js';	define("pages/item/subPackages/pages/gift/gift.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqVue)(e.default); 
 			}); 	require("pages/item/subPackages/pages/gift/gift.js");
 		__wxRoute = 'pages/item/subPackages/pages/chooseShop/chooseShop';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/pages/chooseShop/chooseShop.js';	define("pages/item/subPackages/pages/chooseShop/chooseShop.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqVue)(e.default); 
 			}); 	require("pages/item/subPackages/pages/chooseShop/chooseShop.js");
 		__wxRoute = 'pages/item/subPackages/pages/ldp/ldp';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/pages/ldp/ldp.js';	define("pages/item/subPackages/pages/ldp/ldp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new(require("../../../../../common/wqvue/indexv1.2").WqVue)(e.default); 
 			}); 	require("pages/item/subPackages/pages/ldp/ldp.js");
 		__wxRoute = 'pages/item/subPackages/pages/address/address';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/pages/address/address.js';	define("pages/item/subPackages/pages/address/address.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}var t=require("../../../../page.js"),a=e(require("../../../../../common/address_picker/address_picker.js")),i=e(require("../../../../../common/toast/toast.js")),n=e(require("../../../../../common/user_info")),r={data:{address:"",didReady:!1,noDefault:!1},onLoad:function(e){var t=n.getAddress().areaId,a=!!e.noDefault,i=e.addr_id_str||t;a&&(i="",this.setData({noDefault:!0})),this.type=e.type||"",this.offline=!1,this.noCookie=!!e.noCookie,e.offline&&(this.offline=!0,wx.setNavigationBarTitle({title:"选择地址"})),this.setAddrData(i.split("_"))},onAddrChange:function(e){this.setData({address:e.nameList.join(""),didReady:!0})},onCancel:function(){wx.navigateBack(),getApp().event.emit("cancelAddressSelect")},onConfirm:function(){var e=this.getAddrData();if(e.complete){var t=e.idList||[],a=e.nameList||[];if(this.noCookie||n.updateAddress({areaId:t.join("_"),areaName:a.join("_")}),getApp().event.emit("cartrefresh"),this.offline)return getApp().event.emit("updateOfflineAddr",e),void wx.navigateBack();getApp().event.emit("updateItemDetailAddr",e),getApp().event.emit("updateItemDetailAddr_ITEM",e),"search_address"===this.type?wx.navigateBack({delta:2}):wx.navigateBack()}else i.show({icon:i.ICON.WARNING,content:"请填写完整的配送地址"})}};a.init(r,{specialAddr:!0}),new t.JDPage(r); 
 			}); 	require("pages/item/subPackages/pages/address/address.js");
 		__wxRoute = 'pages/item/subPackages/pages/yuyueResult/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/pages/yuyueResult/index.js';	define("pages/item/subPackages/pages/yuyueResult/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";var e=require("../../../../../common/wqvue/indexv1.2"),u=function(e){return e&&e.__esModule?e:{default:e}}(require("./page"));new e.WqVue(u.default); 
 			}); 	require("pages/item/subPackages/pages/yuyueResult/index.js");
 		__wxRoute = 'pages/item/subPackages/pages/arriveNotice/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/pages/arriveNotice/index.js';	define("pages/item/subPackages/pages/arriveNotice/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}var t=require("../../../../../bases/page"),a=e(require("./model")),i=e(require("../../../../../components/subscribe-guider/helper")),o=e(require("../../../../../common/toast/toast")),s=require("../../../../..//common/timer-manage"),n=e(require("../../../../../common/cookie-v2/cookie")),d=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../api/Ptag/report_manager_wqvue")),r=require("./constant"),u="2"==n.getCookie("wxapp_type"),c={show:!0,selfIconCls:"icon_fail",titleMsg:"无法设置提醒",smallMsg:"您的微信版本过低，无法设置小程序提醒，请注意短信提醒",confirmBtnTxt:"我知道了",onCancel:null},l={show:!0,hideIcon:!0,titleMsg:"",mediumMsg:"",smallMsg:"",confirmBtnTxt:""},h={show:!0,hideIcon:!0,titleMsg:"设置提醒失败",mediumMsg:"",smallMsg:"我们将无法通过小程序服务通知提醒您，如需接收提醒，请重新设置",confirmBtnTxt:"重新设置",cancelBtnTxt:"暂不"};new t.JDPage({data:{autoBuy:!1,receiveInfo:{},validate:!1,selectedValidateKey:"ONE_WEEK",templateId:"",autoBuyTip:"到货后自动帮您下单，您仅需手动支付，完成购买",dialog:{show:!1},sku:"",showNoticeDialog:!1,showAutoBuy:!1,noticeDialogTitle:""},onLoad:function(e){var t=this,i=e.sku,o=void 0===i?"":i,s=e.itemType;this.setData({sku:o}),this.setDialogInfo(2);var n=[a.supportAutoBuy(o),a.getPPMS(s,u)];Promise.all(n).then(function(e){var a=e.every(function(e){return!0===e});t.setData({showAutoBuy:a})}),a.queryPinStatus().then(function(e){var a="",i="",o=!1;if(0==e.errcode){switch(e.state){case 1:case 2:case 4:a="您登录的账号尚未完善，完善资料后即可订阅到货通知",i="完善资料",o=!0;break;case 3:1==e.defaultFlag&&(a="您登录的账号尚未完善，切换至已完善的账号即可订阅到货通知",i="切换帐号",o=!0)}o&&t.setData({dialog:{show:!0,hideIcon:!0,msg:"",mediumMsg:a,smallMsg:"",confirmBtnTxt:i,onConfirm:function(){t.$goto("/pages/h5/index",{url:e.url})}}})}})},onShow:function(){d.default.addPtagExposure(r.PTAG.EXPOSURE_PAGE)},setDialogInfo:function(e){var t="";2==e?t=u?"商品更新通知":"预约到货通知":1==e&&(t="新订单通知"),this.setData({noticeDialogTitle:t})},toggleAutoBuy:function(){var e=!this.data.autoBuy,t=e?"普通发票（纸质）个人明细图书/第三方商家商品：不开发票；配送方式及运费以实际下单为准；若预定商品成为抢购商品，系统将不提供自动下单服务；目前代下单价格仅以京东商城网页端为准。":"到货后自动帮您下单，您仅需手动支付，完成购买";e?this.setDialogInfo(1):this.setDialogInfo(2),this.setData({autoBuy:e,autoBuyTip:t})},autoBuyClick:function(){var e=this;this.data.validate&&this.data.autoBuy&&(wx.showLoading({title:"设置中...",mask:!0}),a.subscribeAutoBuy({sku:this.data.sku,src:"item",validTime:this.data.selectedValidateKey,isDefAddr:Number(this.data.receiveInfo.isAddressDefault||0),orderAddrId:this.data.receiveInfo.id||0,phone:this.data.receiveInfo.receicerPhoneNo,payWay:this.data.receiveInfo.payway||4,orderAddr:this.data.receiveInfo.area.replace(/-/g,"_"),orderAddrName:this.data.receiveInfo.address,receiver:this.data.receiveInfo.receiver,addrType:this.data.receiveInfo.addressType||2}).then(function(t){e.setNotice(t,1)}).catch(this.errorHander))},noticeMeClick:function(){var e=this;d.default.addPtag(r.PTAG.CLICK_BTN_NOTICEME),wx.showLoading({title:"设置中...",mask:!0}),a.subscribeItem(this.data.sku).then(function(t){e.setNotice(t,2)}).catch(this.errorHander)},setNotice:function(e,t){var a=this;wx.hideLoading();var i=1==t?"自动下单设置成功":"设置到货提醒",o=1==t?"下单后提醒我":"立即设置",s="";s=1==t?'点击下方"下单后提醒我"设置提醒，我们可在自动下单成功后通过小程序服务通知提醒您':"设置完成后，"+(u?"京喜":"京东购物")+"小程序将通过服务通知提醒您，请保持服务通知为打开状态";var n=Object.assign({},l,{titleMsg:i,smallMsg:s,confirmBtnTxt:o,onConfirm:function(){1!=t&&d.default.addPtag(r.PTAG.CLICK_DIALOG_BTN_SET_NOTICE),a.requestAuth()}});this.setData({templateId:e,dialog:n},function(){d.default.addPtagExposure(r.PTAG.EXPOSURE_DIALOG_SET_NOTICE)})},errorHander:function(e){wx.hideLoading();var t="设置提醒失败，请稍后重试";2==e?t="您今天设置提醒的次数过多，请明天再来":95==e&&(t="当前商品暂不支持自动下单"),d.default.addPtagExposure(r.PTAG.EXPOSURE_TOAST_SET_NOTICE_FAIL),o.show({icon:"none",content:t})},requestAuth:function(){var e=this,t=wx.canIUse("requestSubscribeMessage"),a=[this.data.templateId];if(t){var n="开启通知，可收到"+this.data.noticeDialogTitle;i.delayShow({tplCount:a.length,title:n},800);var u=Date.now();wx.requestSubscribeMessage({tmplIds:a,success:function(t){i.hide();var a=t[e.data.templateId],n=Date.now()-u<=800;"accept"===a?(n||d.default.addPtag(r.PTAG.CLICK_WXAUTH_ALLOW),o.show({icon:o.ICON.SUCCESS,content:"设置提醒成功"}),d.default.addPtagExposure(r.PTAG.EXPOSURE_TOAST_SET_NOTICE_SUCCESS),(0,s.createTimeout)(function(){wx.navigateBack({delta:1})},700)):n?e.setData({showNoticeDialog:!0},function(){d.default.addPtagExposure(r.PTAG.EXPOSURE_DIALOG_GUIDE_SET)}):(d.default.addPtag(r.PTAG.CLICK_WXAUTH_CANCEL),e.setData({dialog:Object.assign({},h,{onConfirm:function(){d.default.addPtag(r.PTAG.CLICK_DIALOG_SET_NOTICE_AGAIN),e.requestAuth()}})},function(){d.default.addPtagExposure(r.PTAG.EXPOSURE_DIALOG_SET_NOTICE_FAIL)}))},fail:function(t){i.hide(),e.setData({showNoticeDialog:!0},function(){d.default.addPtagExposure(r.PTAG.EXPOSURE_DIALOG_GUIDE_SET)}),d.default.addPtagExposure(r.PTAG.EXPOSURE_DIALOG_SET_NOTICE_FAIL)}})}else this.setData({dialog:c},function(){d.default.addPtagExposure(r.PTAG.EXPOSURE_DIALOG_LOW_VERSION)})},onDialogConfirm:function(){this.setData({"dialog.show":!1}),this.data.dialog.onConfirm&&this.data.dialog.onConfirm()},onDialogCancel:function(){this.setData({"dialog.show":!1}),this.data.dialog.onCancel&&this.data.dialog.onCancel()},onFormchange:function(e){var t=e.detail,a=t.receiver,i=t.receicerPhoneNo,o=t.address,s=/^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(i);this.setData({receiveInfo:e.detail||{},validate:Boolean(a&&i&&s&&o)})},onSelectedvalidatekeyChange:function(e){this.setData({selectedValidateKey:e.detail})},onCloseMod:function(){this.setData({showNoticeDialog:!1})}}); 
 			}); 	require("pages/item/subPackages/pages/arriveNotice/index.js");
 		__wxRoute = 'pages/item/subPackages/pages/pricereduceNotice/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/item/subPackages/pages/pricereduceNotice/index.js';	define("pages/item/subPackages/pages/pricereduceNotice/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}var t=require("../../../../../bases/page"),a=e(require("./model")),i=e(require("../../../../../components/subscribe-guider/helper")),o=e(require("../../../../../common/toast/toast")),s=require("../../../../..//common/timer-manage"),n=e(require("../../../../../common/cookie-v2/cookie")),r=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../../../api/Ptag/report_manager_wqvue")),d=require("./constant"),c="2"==n.getCookie("wxapp_type"),u={show:!0,selfIconCls:"icon_fail",titleMsg:"无法设置提醒",smallMsg:"您的微信版本过低，无法设置小程序提醒，请注意短信提醒",confirmBtnTxt:"知道了",onCancel:null},l={show:!0,hideIcon:!0,titleMsg:"",mediumMsg:"",smallMsg:"",confirmBtnTxt:""},h={show:!0,hideIcon:!0,titleMsg:"设置提醒失败",mediumMsg:"",smallMsg:"我们将无法通过小程序服务通知提醒您，如需接收提醒，请重新设置",confirmBtnTxt:"重新设置",cancelBtnTxt:"暂不"};new t.JDPage({data:{autoBuy:!1,sku:"",originalPrice:-1,price:"",autoBuyTip:"降价后自动帮您下单，您仅需手动支付，完成购买",reduceBtnTxt:"降价",alertTxt:"",templateId:"",receiveInfo:{},validate:!1,validatePrice:!1,selectedValidateKey:"ONE_WEEK",dialog:{show:!1},hasFav:!1,showNoticeDialog:!1,showAutoBuy:!1,noticeDialogTitle:""},onLoad:function(e){var t=this,i=e.sku,o=void 0===i?"":i,s=e.itemType;this.setData({sku:o}),this.setDialogInfo(2);var n=[a.supportAutoBuy(o),a.getPPMS(s,c)];Promise.all(n).then(function(e){var a=e.every(function(e){return!0===e});t.setData({showAutoBuy:a})}),a.queryPinStatus().then(function(e){var a="",i="",o=!1;if(0==e.errcode){switch(e.state){case 1:case 2:case 4:a="您登录的账号尚未完善，完善资料后即可订阅降价通知",i="完善资料",o=!0;break;case 3:1==e.defaultFlag&&(a="您登录的账号尚未完善，切换至已完善的账号即可订阅降价通知",i="切换帐号",o=!0)}o&&t.setData({dialog:{show:!0,hideIcon:!0,msg:"",mediumMsg:a,smallMsg:"",confirmBtnTxt:i,onConfirm:function(){wx.navigateTo({url:"/pages/h5/index?url="+e.url})}}})}}),a.getItemPrice(o).then(function(e){e&&e.p&&e.p>0&&t.setData({originalPrice:e.p,reduceBtnTxt:"低于¥"+e.p,validatePrice:!0})})},onShow:function(){r.default.addPtagExposure(d.PTAG.EXPOSURE_PAGE)},setDialogInfo:function(e){var t="";2==e?t=c?"商品更新通知":"商品降价提醒":1==e&&(t="新订单通知"),this.setData({noticeDialogTitle:t})},toggleAutoBuy:function(){var e=!this.data.autoBuy,t=e?"普通发票（纸质）个人明细图书/第三方商家商品：不开发票；配送方式及运费以实际下单为准；若预定商品成为抢购商品，系统将不提供自动下单服务；目前代下单价格仅以京东商城网页端为准。":"降价后自动帮您下单，您仅需手动支付，完成购买";e?this.setDialogInfo(1):this.setDialogInfo(2),this.setData({autoBuy:e,autoBuyTip:t})},autoBuyClick:function(){var e=this;if(this.data.validate&&this.data.validatePrice&&this.data.autoBuy){wx.showLoading({title:"设置中...",mask:!0});var t=this.data.price||this.data.originalPrice||0;a.subscribeAutoBuy({sku:this.data.sku,phone:this.data.receiveInfo.receicerPhoneNo,price:Math.ceil(100*t),src:"item",payWay:this.data.receiveInfo.payway||4,orderAddr:this.data.receiveInfo.area.replace(/-/g,"_"),orderAddrName:this.data.receiveInfo.address,validTime:this.data.selectedValidateKey,receiver:this.data.receiveInfo.receiver,addrType:this.data.receiveInfo.addressType||2,isDefAddr:Number(this.data.receiveInfo.isAddressDefault||0),orderAddrId:this.data.receiveInfo.id||0}).then(function(t){e.setNotice(t,1)}).catch(this.errorHander)}},noticeMeClick:function(){var e=this;if(!this.data.validatePrice)return!1;r.default.addPtag(d.PTAG.CLICK_BTN_NOTICEME),wx.showLoading({title:"设置中...",mask:!0});var t=this.data.price||this.data.originalPrice||0;a.subscribePricereduce(this.data.sku,Math.ceil(100*t)).then(function(t){e.setNotice(t,2)}).catch(this.errorHander),!this.data.hasFav&&a.skuFav(this.data.sku).then(function(t){"success"===t&&e.setData({hasFav:!0})})},setNotice:function(e,t){var a=this;wx.hideLoading();var i=1==t?"自动下单设置成功":"设置降价提醒",o=1==t?"下单后提醒我":"立即设置",s="";s=1==t?'点击下方"下单后提醒我"设置提醒，我们可在自动下单成功后通过小程序服务通知提醒您':"设置完成后，"+(c?"京喜":"京东购物")+"小程序将通过服务通知提醒您，请保持服务通知为打开状态";var n=Object.assign({},l,{titleMsg:i,smallMsg:s,confirmBtnTxt:o,onConfirm:function(){1!=t&&r.default.addPtag(d.PTAG.CLICK_DIALOG_BTN_SET_NOTICE),a.requestAuth(t)}});this.setData({templateId:e,dialog:n},function(){r.default.addPtagExposure(d.PTAG.EXPOSURE_DIALOG_SET_NOTICE)})},errorHander:function(e){wx.hideLoading();var t="设置提醒失败，请稍后重试";2==e?t="您今天设置提醒的次数过多，请明天再来":95==e&&(t="当前商品暂不支持自动下单"),r.default.addPtagExposure(d.PTAG.EXPOSURE_TOAST_SET_NOTICE_FAIL),o.show({icon:"none",content:t})},requestAuth:function(e){var t=this,a=wx.canIUse("requestSubscribeMessage"),n=[this.data.templateId];if(a){var c="开启通知，可收到"+this.data.noticeDialogTitle;i.delayShow({tplCount:n.length,title:c},800);var l=Date.now();wx.requestSubscribeMessage({tmplIds:n,success:function(a){i.hide();var n=a[t.data.templateId],c=Date.now()-l<=800;"accept"===n?(c||r.default.addPtag(d.PTAG.CLICK_WXAUTH_ALLOW),o.show({icon:o.ICON.SUCCESS,content:"设置提醒成功"}),r.default.addPtagExposure(d.PTAG.EXPOSURE_TOAST_SET_NOTICE_SUCCESS),(0,s.createTimeout)(function(){wx.navigateBack({delta:1})},700)):c?t.setData({showNoticeDialog:!0},function(){r.default.addPtagExposure(d.PTAG.EXPOSURE_DIALOG_GUIDE_SET)}):(r.default.addPtag(d.PTAG.CLICK_WXAUTH_CANCEL),t.setData({dialog:Object.assign({},h,{onConfirm:function(){r.default.addPtag(d.PTAG.CLICK_DIALOG_SET_NOTICE_AGAIN),t.requestAuth(e)}})},function(){r.default.addPtagExposure(d.PTAG.EXPOSURE_DIALOG_SET_NOTICE_FAIL)}))},fail:function(e){i.hide(),t.setData({showNoticeDialog:!0},function(){r.default.addPtagExposure(d.PTAG.EXPOSURE_DIALOG_GUIDE_SET)}),r.default.addPtagExposure(d.PTAG.EXPOSURE_DIALOG_SET_NOTICE_FAIL)}})}else this.setData({dialog:u},function(){r.default.addPtagExposure(d.PTAG.EXPOSURE_DIALOG_LOW_VERSION)})},onDialogConfirm:function(){this.setData({"dialog.show":!1}),this.data.dialog.onConfirm&&this.data.dialog.onConfirm()},onDialogCancel:function(){this.setData({"dialog.show":!1}),this.data.dialog.onCancel&&this.data.dialog.onCancel()},onInputPriceChange:function(e){var t=e.detail.value;this.setData({price:t});var a="降价",i="",o=!0,s=Number(t),n=Number(this.data.originalPrice);if(""===t&&n>0)a="低于¥"+n.toFixed(2);else if(!Number.isNaN(s)&&s>0){if(n>0)if(s<n){var r=(10*s/n).toFixed(1);1*r>9.9&&(r=9.9),i=r+"折",a="低于¥"+s.toFixed(2)}else s==n?(i="当前京东价",a="低于¥"+s.toFixed(2)):(i="需低于当前价",o=!1)}else s<=0&&""!=t&&(i="需正数"),o=!1;this.setData({reduceBtnTxt:a,alertTxt:i,validatePrice:o})},clearInputPrice:function(){var e=Number(this.data.originalPrice),t=e&&e>0?"低于¥"+e.toFixed(2):"降价";this.setData({price:"",alertTxt:"",reduceBtnTxt:t})},onFormchange:function(e){var t=e.detail,a=t.receiver,i=t.receicerPhoneNo,o=t.address,s=/^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(i);this.setData({receiveInfo:e.detail||{},validate:Boolean(a&&i&&s&&o)})},onSelectedvalidatekeyChange:function(e){this.setData({selectedValidateKey:e.detail})},onCloseMod:function(){this.setData({showNoticeDialog:!1})}}); 
 			}); 	require("pages/item/subPackages/pages/pricereduceNotice/index.js");
 	