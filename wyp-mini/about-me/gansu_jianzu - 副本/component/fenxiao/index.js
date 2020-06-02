function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = t(require("../../network/api")), a = t(require("../../utils/es6-promise.min")), n = t(require("../../utils/const.js")), i = t(require("../../utils/notification")), o = require("../../dist/index"), s = require("../../utils/wxParse/wxParse.js");

exports.default = {
    data: {},
    onLoad: function(t) {
        var e = this;
        this.setData({
            from: t.from || "line"
        }), wx.showLoading({
            title: "请稍后"
        });
        var a = this;
        i.default.register(n.default.action.BIND_PHONE_SUCCESS, this, function(t) {
            console.log("--------BIND_PHONE_SUCCESS--------", t);
            var n = wx.getStorageSync("userinfo");
            e.setData({
                userinfo: n
            }), a.init();
        });
    },
    onShow: function() {
        var t = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: t
        });
    },
    init: function() {
        this.queryDistribute().then(function(t) {
            wx.hideLoading();
        }).catch(function(t) {
            console.log(t), wx.hideLoading();
        });
    },
    queryDistribute: function() {
        var t = this, n = this;
        return e.default.getRecruitmentDistribute().then(function(e) {
            wx.hideLoading();
            var i = e.data;
            return t.setData({
                config: i
            }), i && i.isOpen && i.isDist ? n.saleCenter() : i && i.isOpen && i.isRecruit && !i.isDist ? n.getRecruitmentInfo() : a.default.reject();
        });
    },
    saleCenter: function() {
        var t = this;
        return e.default.saleCenter().then(function(e) {
            return wx.hideLoading(), t.setData({
                userdata: e.data
            }), e.data;
        });
    },
    getRecruitmentInfo: function() {
        var t = this;
        return e.default.getRecruitmentInfo().then(function(e) {
            return console.log(e), wx.hideLoading(), t.setData({
                detail: e.data
            }), s.wxParse("content", "html", e.data.content ? e.data.content : "暂无", t, 5), 
            e.data;
        });
    },
    showZanToast: function(t, e) {
        o.Toast.showZanToast.call(this, t, e);
    },
    clearZanToast: function() {
        o.Toast.clearZanToast.call(this);
    },
    applyRecruitment: function() {
        var t = this;
        console.log("+++++++++");
        var a = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: a
        }), this.data.userinfo.mobile ? (wx.showLoading({
            title: "请稍后"
        }), console.log("applyRecruitment==this.data.from===>", this.data.from), e.default.applyRecruitment({
            from: this.data.from
        }).then(function(e) {
            console.log("apply res=>", e), wx.hideLoading();
            var a = wx.getStorageSync("userinfo");
            a.isDist = !0, wx.setStorageSync("userinfo", a), getApp().globalData.userinfo = a, 
            console.log("----userInfo---------", a), t.showZanToast("恭喜您，已成功申请为" + t.data.config.globalName + "！"), 
            setTimeout(function() {
                this.init();
            }.bind(t), 2e3);
        }).catch(function(a) {
            console.log("apply err=>", a), wx.hideLoading(), t.showZanToast(e.default.errors(a.error) || "网络连接错误，请稍后重试");
        })) : this.setData({
            showModal: !0,
            url: "/pages/login/login?type=zhaomu&from=" + this.data.from + "&zhaomuName=" + this.data.config.globalName
        });
    },
    onUnload: function() {
        i.default.remove(n.default.action.BIND_PHONE_SUCCESS, this);
    }
};