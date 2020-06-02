var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
};

"object" === ("undefined" == typeof global ? "undefined" : a(global)) && (global.Array = Array, 
global.DataView = DataView, global.Date = Date, global.Error = Error, global.Float32Array = Float32Array, 
global.Float64Array = Float64Array, global.Function = Function, global.Int8Array = Int8Array, 
global.Int16Array = Int16Array, global.Int32Array = Int32Array, global.Math = Math, 
global.Object = Object, global.Promise = Promise, global.RegExp = RegExp, global.String = String, 
global.TypeError = TypeError, global.Uint8Array = Uint8Array, global.Uint8ClampedArray = Uint8ClampedArray, 
global.Uint16Array = Uint16Array, global.Uint32Array = Uint32Array, global.WeakMap = WeakMap, 
global.clearTimeout = clearTimeout, global.isFinite = isFinite, global.parseInt = parseInt, 
global.setTimeout = setTimeout, "undefined" == typeof window && (global.window = global));