var t = getApp();

Component({
    properties: {
        url: {
            type: String,
            value: ""
        },
        actid: {
            type: String,
            value: ""
        }
    },
    data: {
        confirmText: "授权参与",
        title: "授权百度网盘",
        content: "授权参与活动获取更多福利"
    },
    ready: function() {
        this.popup = this.selectComponent("#popup");
    },
    methods: {
        jumpToMiniProgram: function() {
            wx.log.send({
                type: "activity_jump_onclick_" + this.data.actid,
                value: "跳转小程序中间页点击"
            });
        },
        show: function() {
            this.popup.show();
        },
        hide: function() {
            this.popup.show();
        },
        backhome: function() {
            wx.log.send({
                type: "activity_jump_fail_" + this.data.actid,
                value: "取消跳转"
            }), t.mtj && t.mtj.trackEvent("act_jump_page_user_choose", {
                agree: 0
            }), wx.navigateTo({
                url: "/pages/netdisk_index/index"
            });
        },
        goActMini: function() {
            wx.redirectTo({
                url: "/pages/netdisk_index/index"
            }), t.mtj && t.mtj.trackEvent("act_jump_page_user_choose", {
                agree: 1
            });
        }
    }
});