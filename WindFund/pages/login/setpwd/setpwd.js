var a = getApp();

Page({
    data: {
        password: "",
        password2: "",
        serialNo: ""
    },
    bindPwdInput: function(a) {
        this.setData({
            password: a.detail.value
        });
    },
    bindPwd2Input: function(a) {
        this.setData({
            password2: a.detail.value
        });
    },
    checkpwd: function() {
        return this.data.password ? this.data.password != this.data.password2 ? "两次密码不一致！" : /^[\w.]{4,20}$/.test(this.data.password) ? "" : "请输入正确格式的密码" : "密码不能为空！";
    },
    showModel: function(a) {
        wx.showModal({
            content: a,
            showCancel: !1,
            confirmColor: "#FBA52F"
        });
    },
    commit: function() {
        var s = this.checkpwd();
        if (s) this.showModel(s); else {
            var t = {
                serialNo: this.data.serialNo,
                password: this.data.password
            }, o = this;
            a.getData("REGISTER_THIRD_PARTY_USER", t, function(s) {
                s.sessionId ? (a.globalData.sessionId = s.sessionId, wx.navigateBack({
                    delta: 1
                })) : o.showModel("注册失败");
            }, function(a) {
                o.showModel(a);
            }, 1);
        }
    },
    onLoad: function(a) {
        this.setData({
            serialNo: a.serialNo
        }), wx.setNavigationBarTitle({
            title: "设置密码"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});