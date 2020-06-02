function e() {
    var e = getCurrentPages();
    return e[e.length - 1] || {};
}

function r(r) {
    var n = e().vanPageScroller;
    (void 0 === n ? [] : n).forEach(function(e) {
        "function" == typeof e && e(r);
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.pageScrollMixin = void 0;

exports.pageScrollMixin = function(n) {
    return Behavior({
        attached: function() {
            var o = e();
            Array.isArray(o.vanPageScroller) ? o.vanPageScroller.push(n.bind(this)) : o.vanPageScroller = "function" == typeof o.onPageScroll ? [ o.onPageScroll.bind(o), n.bind(this) ] : [ n.bind(this) ], 
            o.onPageScroll = r;
        },
        detached: function() {
            var r = e();
            r.vanPageScroller = (r.vanPageScroller || []).filter(function(e) {
                return e !== n;
            });
        }
    });
};