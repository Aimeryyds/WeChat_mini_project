var has = Object.prototype.hasOwnProperty;

var hexTable = function() {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
    }
    return array;
}();

var compactQueue = function compactQueue(queue) {
    var obj;
    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];
        if (Array.isArray(obj)) {
            var compacted = [];
            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== "undefined") {
                    compacted.push(obj[j]);
                }
            }
            item.obj[item.prop] = compacted;
        }
    }
    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
            obj[i] = source[i];
        }
    }
    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }
    if (typeof source !== "object") {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === "object") {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [ target, source ];
        }
        return target;
    }
    if (typeof target !== "object") {
        return [ target ].concat(source);
    }
    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }
    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === "object") {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function(str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, " "));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }
    var string = typeof str === "string" ? str : String(str);
    var out = "";
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);
        if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122) {
            out += string.charAt(i);
            continue;
        }
        if (c < 128) {
            out = out + hexTable[c];
            continue;
        }
        if (c < 2048) {
            out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
            continue;
        }
        if (c < 55296 || c >= 57344) {
            out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
            continue;
        }
        i += 1;
        c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
        out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
    }
    return out;
};

var compact = function compact(value) {
    var queue = [ {
        obj: {
            o: value
        },
        prop: "o"
    } ];
    var refs = [];
    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === "undefined") {
        return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};