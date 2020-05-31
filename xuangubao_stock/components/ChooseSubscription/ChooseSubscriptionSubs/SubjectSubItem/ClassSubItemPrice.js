(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ChooseSubscription/ChooseSubscriptionSubs/SubjectSubItem/ClassSubItemPrice" ], {
    "2b41": function(e, n, o) {
        o.r(n);
        var t = o("6ff4"), u = o.n(t);
        for (var c in t) "default" !== c && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(c);
        n.default = u.a;
    },
    "6ff4": function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            components: {
                PriceText: function() {
                    return o.e("components/PriceText").then(o.bind(null, "6011"));
                }
            },
            props: {
                price: {
                    type: Number
                }
            }
        };
        n.default = t;
    },
    9328: function(e, n, o) {
        o.r(n);
        var t = o("f7ab"), u = o("2b41");
        for (var c in u) "default" !== c && function(e) {
            o.d(n, e, function() {
                return u[e];
            });
        }(c);
        var r = o("2877"), s = Object(r.a)(u.default, t.a, t.b, !1, null, null, null);
        n.default = s.exports;
    },
    f7ab: function(e, n, o) {
        var t = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, u = [];
        o.d(n, "a", function() {
            return t;
        }), o.d(n, "b", function() {
            return u;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ChooseSubscription/ChooseSubscriptionSubs/SubjectSubItem/ClassSubItemPrice-create-component", {
    "components/ChooseSubscription/ChooseSubscriptionSubs/SubjectSubItem/ClassSubItemPrice-create-component": function(e, n, o) {
        o("543d").createComponent(o("9328"));
    }
}, [ [ "components/ChooseSubscription/ChooseSubscriptionSubs/SubjectSubItem/ClassSubItemPrice-create-component" ] ] ]);