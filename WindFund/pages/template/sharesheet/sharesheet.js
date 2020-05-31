Component({
    options: {
        multipleSlots: !0
    },
    data: {
        showModalStatus: !1,
        animationData: {}
    },
    methods: {
        showModal: function() {
            var t = wx.createAnimation({
                duration: 400,
                timingFunction: "linear",
                delay: 0
            });
            this.animation = t, t.translateY(300).step(), this.setData({
                animationData: t.export(),
                showModalStatus: !0
            }), setTimeout(function() {
                t.translateY(0).step(), this.setData({
                    animationData: t.export()
                });
            }.bind(this), 200);
        },
        hideModal: function() {
            var t = wx.createAnimation({
                duration: 200,
                timingFunction: "linear",
                delay: 0
            });
            this.animation = t, t.translateY(300).step(), this.setData({
                animationData: t.export()
            }), setTimeout(function() {
                t.translateY(0).step(), this.setData({
                    animationData: t.export(),
                    showModalStatus: !1
                });
            }.bind(this), 200);
        },
        _confirmCreatePic: function() {
            this.triggerEvent("confirmCreatePic");
        },
        _cancelShareSheet: function() {
            this.triggerEvent("cancelShareSheet");
        }
    }
});