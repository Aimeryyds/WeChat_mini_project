Component({
    properties: {
        force: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        showCancel: !1,
        cancelText: "取消",
        confirmText: "前往授权",
        title: "授权百度网盘",
        content: "需要微信授权后使用",
        text: "和家人、朋友、同事共同存放文件",
        isShow: !1
    },
    methods: {
        _setUserWxInfo: function(t) {
            this.triggerEvent("myevent", t), this.hide();
        },
        show: function() {
            this.setData({
                isShow: !0
            });
        },
        hide: function() {
            this.setData({
                isShow: !1
            });
        }
    }
});