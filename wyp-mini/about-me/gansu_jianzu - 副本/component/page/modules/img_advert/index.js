function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
}, i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../common.js"));

Component({
    behaviors: [ i.default ],
    data: {
        imgUrlsWH: {}
    },
    properties: {
        module: {
            type: Object,
            observer: function(t, e) {
                e && e.options && this.createImg();
            }
        }
    },
    ready: function() {
        this.createImg();
    },
    methods: {
        createImg: function() {
            console.log("+过滤无图片+"), -1 !== [ "type1", "type2", "type3", "type4" ].indexOf(this.data.module.options.adsStyle) && this.init();
        },
        init: function() {
            for (var t = this.data.module, i = [], a = 0; a < t.options.navs.length; a++) if (t.options.navs[a].imgUrl) {
                var o = this.data.imgUrlsWH[t.options.navs[a].imgUrl];
                o ? i.push(e({}, t.options.navs[a], o)) : i.push(t.options.navs[a]);
            }
            "type1" == this.data.module.options.adsStyle && (i = i.slice(0, 1)), "type2" == this.data.module.options.adsStyle && (i = i.slice(0, 2)), 
            "type3" == this.data.module.options.adsStyle && (i = i.slice(0, 3)), console.log(i, "images"), 
            t.options.navs = i, this.setData({
                module: t
            });
        },
        setImgAdvertWH: function(i) {
            i.target.dataset.aid;
            var a, o = i.target.dataset.index, s = i.detail.width, n = i.detail.height, r = i.target.dataset.imgurl;
            this.setData((a = {}, t(a, "module.options.navs[" + o + "].width", s), t(a, "module.options.navs[" + o + "].height", n), 
            t(a, "imgUrlsWH", e({}, this.data.imgUrlsWH, t({}, r, {
                width: s,
                height: n
            }))), a));
        }
    }
});