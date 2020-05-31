Component({
    properties: {
        icon: {
            type: String,
            value: "https://pub.idqqimg.com/pc/misc/files/20190718/b6b18ad41f4a5682122853245a12eb85.png"
        },
        top: {
            type: Number,
            value: 150
        }
    },
    data: {
        isShow: !1,
        animation: null,
        message: ""
    },
    methods: {
        show: function(t) {
            var i = this, e = this;
            this.setData({
                message: t.message
            }), this._animationTimer = setTimeout(function() {
                var t = wx.createAnimation({
                    duration: 500,
                    timingFunction: "ease",
                    delay: 0
                });
                t.opacity(1).step(), i.setData({
                    isShow: !0,
                    animation: t.export()
                });
            }, 50), setTimeout(function() {
                e.hide();
            }, 2e3);
        },
        hide: function() {
            var t = this;
            this._hideTimer && clearTimeout(this._hideTimer);
            var i = wx.createAnimation({
                duration: 200,
                timingFunction: "ease",
                delay: 0
            });
            i.opacity(0).step(), this.setData({
                animation: i.export()
            }), this._hideTimer = setTimeout(function() {
                t.setData({
                    isShow: !1
                }, 250);
            });
        }
    }
});