Component({
    properties: {},
    data: {
        opacity: 0,
        showModalStatus: !1,
        content: "default value",
        showIsFinish: !0
    },
    methods: {
        show: function(t) {
            var a = this;
            if (a.data.showIsFinish) {
                var i = wx.createAnimation({
                    duration: 1e3,
                    timingFunction: "ease"
                });
                a.animation = i, i.opacity(.9).step(), a.setData({
                    showModalStatus: !0,
                    showIsFinish: !1,
                    content: t,
                    animationData: i.export()
                }), setTimeout(function() {
                    i.opacity(0).step(), a.setData({
                        showModalStatus: !1,
                        showIsFinish: !0,
                        animationData: i.export()
                    });
                }.bind(a), 2e3);
            }
        }
    }
});