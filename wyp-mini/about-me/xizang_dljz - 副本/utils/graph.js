function t() {
    this.items = {};
}

function e() {
    this.vertices = [], this.adjList = new t();
}

function s(t, e, r) {
    if (!r || !r(t)) {
        exports.time = i += exports.speed = o += 5;
        for (var n = e.adjList.get(t), p = 0; p < n.length; p++) {
            var h = n[p];
            setTimeout(function() {
                s(h, e, r);
            }, i);
        }
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Graph = e, exports.time = i, exports.speed = o, exports.resetSpeed = function() {
    exports.speed = o = 0;
}, exports.resetTime = function() {
    exports.time = i = 100;
};

t.prototype.has = function(t) {
    return t in this.items;
}, t.prototype.set = function(t, e) {
    this.items[t] = e;
}, t.prototype.remove = function(t) {
    return !!this.has(t) && (delete this.items[t], !0);
}, t.prototype.get = function(t) {
    return this.has(t) ? this.items[t] : void 0;
}, t.prototype.values = function(t) {
    var e = [];
    for (var s in this.items) this.has(t) && e.push(this.items[t]);
    return e;
}, t.prototype.clear = function() {
    this.items = {};
}, t.prototype.size = function() {
    return Object.keys(this.items).length;
}, t.prototype.keys = function() {
    return Object.keys(this.items);
}, e.prototype.addVertex = function(t) {
    this.vertices.push(t), this.adjList.set(t, []);
}, e.prototype.addEdge = function(t, e) {
    this.adjList.get(t).push(e);
}, e.prototype.dfs = function(t) {
    s(0, this, t);
};

var i = 100, o = 0;

e.prototype.toString = function() {
    for (var t = "", e = 0; e < this.vertices.length; e++) {
        t += this.vertices[e] + " -> ";
        for (var s = this.adjList.get(this.vertices[e]), i = 0; i < s.length; i++) t += s[i] + " ";
        t += "\n";
    }
    return t;
};