var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(n, t) {
    "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([ "exports" ], t) : t(n["wx-queue-request"] = n["wx-queue-request"] || {});
}(void 0, function(e) {
    function n(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        if ("function" != typeof e) throw Error("request must be function");
        var c = function(e, n) {
            return t(n), {
                concurrency: n,
                push: function(e, n) {
                    var t = this;
                    u.push({
                        task: e,
                        callback: n
                    }), setTimeout(function() {
                        t.process();
                    }, 0);
                },
                process: function() {
                    for (var n = this; this.concurrency > r.length && u.length; ) !function() {
                        var t = u.shift();
                        r.push(t), e(t.task, o(function() {
                            n.pull(t), "function" == typeof t.callback && t.callback.apply(t, arguments), n.process();
                        }));
                    }();
                },
                pull: function(e) {
                    var n = r.indexOf(e);
                    -1 !== n && r.splice(n, 1);
                }
            };
        }(function(e, n) {
            return e(n);
        }, n);
        return function(n) {
            c.push(function(t) {
                var o = n.complete;
                n.complete = function() {
                    t(), "function" == typeof o && o.apply(void 0, arguments);
                }, e(n);
            });
        };
    }
    var t = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        if (null == e) e = 1; else if (0 === e) throw new Error("Concurrency must not be zero");
        return e;
    }, o = function(e) {
        return function() {
            if (null === e) throw new Error("Callback was already called");
            var n = e;
            return e = null, n.apply(void 0, arguments);
        };
    }, u = [], r = [];
    e.queueRequest = n, e.queue = function(e) {
        var t = wx.request;
        Object.defineProperty(wx, "request", {
            get: function() {
                return n(t, e);
            }
        });
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    });
});