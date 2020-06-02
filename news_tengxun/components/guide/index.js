require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

Component({
    properties: {
        guideClass: String,
        guideStyle: String,
        keyName: String,
        timeoutShow: {
            type: Number,
            value: 5e3
        },
        timeoutHide: {
            type: Number,
            value: 4e3
        },
        showGuide: {
            type: Boolean,
            value: !1,
            observer: function(e) {
                if (e) if (this.data.keyName) {
                    var t = {};
                    try {
                        t = wx.getStorageSync("showGuideList") || {};
                    } catch (e) {}
                    t[this.data.keyName] || (this.paint(), t[this.data.keyName] = !0, wx.setStorage({
                        key: "showGuideList",
                        data: t
                    }));
                } else this.paint();
            }
        }
    },
    data: {
        show: !1
    },
    created: function() {
        Object.assign(this, {
            timeoutShowHandler: null,
            timeoutHideHandler: null
        });
    },
    attached: function() {},
    detached: function() {
        clearTimeout(this.timeoutShowHandler), clearTimeout(this.timeoutHideHandler);
    },
    methods: {
        paint: function() {
            var e = this;
            this.timeoutShowHandler = setTimeout(function() {
                e.setData({
                    show: !0
                }), e.timeoutHideHandler = setTimeout(function() {
                    e.setData({
                        show: !1
                    });
                }, e.data.timeoutHide);
            }, this.data.timeoutShow);
        }
    }
});