function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var i = e[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, a, i) {
        return a && t(e.prototype, a), i && t(e, i), e;
    };
}(), a = function() {
    function a(e, i) {
        t(this, a), this.page = e, this.len = i.len || 8, this.ret = i.ret, this.speed = i.speed, 
        this.countmy = i.countmy, this.isStart = !1, this.endCallBack = i.callback, this.page.start = this.start.bind(this);
    }
    return e(a, [ {
        key: "start",
        value: function() {
            this.idx;
            var t = this.ret, e = this.len, a = this.speed;
            if (!this.isStart) {
                this.isStart = !0;
                var i = Math.floor(3 * Math.random() + 2), n = 0, r = Math.floor(a / i / e * .8);
                !function s(o) {
                    setTimeout(function() {
                        ++n > i * e ? a += 4 * r : a -= r, n != 2 * i * e + t ? s(o) : (o.isStart = !1, 
                        o.endCallBack && o.endCallBack()), o.page.setData({
                            machine: {
                                idx: n % 8 == 0 ? 8 : n % 8
                            }
                        });
                    }, a);
                }(this);
            }
        }
    }, {
        key: "reset",
        value: function() {
            this.page.setData({
                machine: {
                    idx: ""
                }
            });
        }
    } ]), a;
}();

exports.default = a;