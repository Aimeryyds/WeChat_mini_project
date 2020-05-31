var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
}, e = [ 1, 1.33, 1.78, .75, .56 ], i = 0, r = function(t) {
    return 1 * t.toFixed(2);
}, h = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, h = r(t / i), n = [];
    e.forEach(function(t) {
        n.push(r(Math.abs(t - h)));
    });
    for (var o = Math.min.apply(Math, n), a = e.length, s = 0; s < a; s++) if (h === e[s] || o === n[s]) return e[s];
    return e[0];
}, n = function(t, e) {
    return e *= 1, (t *= 1) === e;
}, o = function(t, e, r, h) {
    var o = r.width, a = void 0 === o ? 686 : o, s = r.height, u = void 0 === s ? 686 : s;
    return !1 !== h && n(t.fs_id, h) && (i = e), e += 1, {
        fileMeta: t,
        index: e,
        width: a,
        height: u
    };
}, a = function(t) {
    var e = t.width, i = t.height;
    switch (t.orientation) {
      case "LeftTopOrientation":
      case "RightTopOrientation":
      case "LeftBottomOrientation":
      case "RightBottomOrientation":
        return {
            width: i,
            height: e
        };

      default:
        return {
            width: e,
            height: i
        };
    }
}, s = function(e, i, r, n, s) {
    var u = a(e), f = u.width, v = void 0 === f ? 686 : f, d = u.height, l = void 0 === d ? 686 : d, g = a(r), c = g.width, p = void 0 === c ? 686 : c, w = g.height, y = void 0 === w ? 686 : w, O = h(v, l), M = h(p, y);
    return e = o(e, i, {}, s), r = o(r, n, {}, s), y = l, p = y * M, O === M ? v = p = Math.floor(337) : p = 674 - (v = Math.floor(674 * v / (v + p))), 
    l = y = Math.floor(v / O), [ t({}, e, {
        width: v,
        height: l
    }), t({}, r, {
        width: p,
        height: y
    }) ];
}, u = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments[1];
    if (t.length <= 0) return [];
    for (var r = [], h = t.length % 2 == 1, n = Math.floor(t.length / 2), a = 0; a < n; a++) {
        var u = 2 * a, f = u + 1, v = s(t[u], u, t[f], f, e);
        r.push(v);
    }
    if (h) {
        var d = 2 * n;
        r.push([ o(t[d], d, {
            width: 686,
            height: 686
        }, e) ]);
    }
    return r.unshift([ o(t[i], -1, {
        width: 686,
        height: 468
    }, !1) ]), r;
};

Component({
    properties: {
        surl: {
            type: String,
            value: ""
        },
        imagetype: {
            type: Number,
            value: -1
        },
        list: {
            type: Array,
            value: [],
            observer: function(t) {
                0 === t.length && 0 === this.data.storyList.length || this.setData({
                    storyList: u(t, this.data.coverInfo.fsid)
                });
            }
        },
        coverInfo: {
            type: Object,
            value: {}
        },
        shareUrlInfo: {
            type: Object,
            value: {}
        }
    },
    data: {
        storyList: [],
        space: 12
    },
    methods: {}
});