module.exports = Behavior({
    behaviors: [],
    properties: {
        title: {
            type: String
        },
        timeout: {
            type: Number
        }
    },
    data: {
        myBehaviorData: {}
    },
    onLoad: function() {},
    attached: function() {},
    methods: {
        showZanTopTips: function() {
            var t = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, e = this.data.zanTopTips || {};
            e.timer && (clearTimeout(e.timer), e.timer = void 0), "number" == typeof o && (o = {
                duration: o
            }), o = Object.assign({
                duration: 3e3
            }, o);
            var a = setTimeout(function() {
                t.setData({
                    "zanTopTips.show": !1,
                    "zanTopTips.timer": void 0
                });
            }, o.duration);
            this.setData({
                zanTopTips: {
                    show: !0,
                    content: i,
                    options: o,
                    timer: a
                }
            });
        }
    }
});