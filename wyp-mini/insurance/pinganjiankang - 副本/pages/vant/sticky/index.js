var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/slicedToArray")), t = require("../common/component"), i = require("../mixins/page-scroll");

(0, t.VantComponent)({
    props: {
        zIndex: {
            type: Number,
            value: 99
        },
        offsetTop: {
            type: Number,
            value: 0,
            observer: "onScroll"
        },
        disabled: {
            type: Boolean,
            observer: "onScroll"
        },
        container: {
            type: null,
            observer: "onScroll"
        },
        scrollTop: {
            type: null,
            observer: function(e) {
                this.onScroll({
                    scrollTop: e
                });
            }
        }
    },
    mixins: [ (0, i.pageScrollMixin)(function(e) {
        null == this.data.scrollTop && this.onScroll(e);
    }) ],
    data: {
        height: 0,
        fixed: !1,
        transform: 0
    },
    mounted: function() {
        this.onScroll();
    },
    methods: {
        onScroll: function() {
            var t = this, i = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).scrollTop, o = this.data, r = o.container, n = o.offsetTop;
            o.disabled ? this.setDataAfterDiff({
                fixed: !1,
                transform: 0
            }) : (this.scrollTop = i || this.scrollTop, "function" != typeof r ? this.getRect(".van-sticky").then(function(e) {
                n >= e.top ? (t.setDataAfterDiff({
                    fixed: !0,
                    height: e.height
                }), t.transform = 0) : t.setDataAfterDiff({
                    fixed: !1
                });
            }) : Promise.all([ this.getRect(".van-sticky"), this.getContainerRect() ]).then(function(i) {
                var o = (0, e.default)(i, 2), r = o[0], a = o[1];
                n + r.height > a.height + a.top ? t.setDataAfterDiff({
                    fixed: !1,
                    transform: a.height - r.height
                }) : n >= r.top ? t.setDataAfterDiff({
                    fixed: !0,
                    height: r.height,
                    transform: 0
                }) : t.setDataAfterDiff({
                    fixed: !1,
                    transform: 0
                });
            }));
        },
        setDataAfterDiff: function(e) {
            var t = this;
            wx.nextTick(function() {
                var i = Object.keys(e).reduce(function(i, o) {
                    return e[o] !== t.data[o] && (i[o] = e[o]), i;
                }, {});
                t.setData(i), t.$emit("scroll", {
                    scrollTop: t.scrollTop,
                    isFixed: e.fixed || t.data.fixed
                });
            });
        },
        getContainerRect: function() {
            var e = this.data.container();
            return new Promise(function(t) {
                return e.boundingClientRect(t).exec();
            });
        }
    }
});