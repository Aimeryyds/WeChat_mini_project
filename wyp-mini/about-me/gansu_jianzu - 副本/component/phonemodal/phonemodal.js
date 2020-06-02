var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../behaviors/toast.js"));

Component({
    behaviors: [ t.default ],
    properties: {
        showModal: {
            type: Boolean,
            observer: function(t, o) {
                this.onShowModal(t, o);
            }
        },
        url: {
            type: String,
            observer: function(t, o) {
                this.setData({
                    loginUrl: t
                });
            }
        }
    },
    data: {
        data: "加载中",
        show: !1,
        loginUrl: "/pages/login/login"
    },
    methods: {
        onCancel: function() {
            this.setData({
                show: !1,
                showModal: !1
            });
        },
        onShowModal: function(t, o) {
            if (1 == t) {
                var e = wx.getStorageSync("config");
                this.setData({
                    show: !0,
                    title: e.programName || "小程序"
                });
            } else this.setData({
                show: !1
            });
        },
        changeuser: function() {
            this.triggerEvent("changeuser");
        },
        showtoast: function(t) {
            this.showToast(t.detail.title);
        }
    }
});