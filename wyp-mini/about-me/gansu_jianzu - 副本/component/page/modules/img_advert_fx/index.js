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
        for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
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
            observer: "ready"
        }
    },
    ready: function() {
        this.init();
    },
    methods: {
        init: function() {
            var e = this.data.module, i = this.data.imgUrlsWH[e.options.imgUrl];
            if (i) {
                var o;
                this.setData((o = {}, t(o, "module.options.width", i.width), t(o, "module.options.height", i.height), 
                o));
            }
        },
        setImgAdvertWH: function(i) {
            var o, r = i.detail.width, a = i.detail.height, n = i.target.dataset.imgurl;
            this.setData((o = {}, t(o, "module.options.width", r), t(o, "module.options.height", a), 
            t(o, "imgUrlsWH", e({}, this.data.imgUrlsWH, t({}, n, {
                width: r,
                height: a
            }))), o)), console.log("this.data", this.data);
        }
    }
});