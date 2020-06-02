function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../network/api")), e = t(require("../../../dist/index")), i = {
    data: {}
};

t(require("../../../utils/util")).default.registComp(i, e.default.Toast, {
    onLoad: function(t) {
        this.setData({
            id: t.id
        });
    },
    onShow: function() {
        var t = this.data.id, a = this;
        wx.showLoading({
            title: "加载中"
        }), setTimeout(function() {
            a.querycarddetail({
                id: t
            });
        }, 2e3);
        var e = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: e
        });
    },
    onTapReceiveCard: function(t) {
        var e = this, i = wx.getStorageSync("userinfo");
        this.setData({
            userinfo: i
        }), i.mobile ? (wx.showLoading({
            title: "加载中"
        }), a.default.receiveCard({
            id: this.data.id
        }).then(function(t) {
            wx.hideLoading(), console.log(t), e.showZanToast("领取成功"), e.querycarddetail({
                id: e.data.id
            });
        }).catch(function(t) {
            "222000226" == t.error ? e.showZanToast(t.errorMessage) : e.showZanToast(a.default.errors(t.error) || "网络链接错误"), 
            e.querycarddetail({
                id: e.data.id
            });
        })) : this.setData({
            showModal: !0,
            url: "/pages/login/login"
        });
    },
    querycarddetail: function(t) {
        var e = this;
        wx.showLoading({
            title: "加载中"
        }), a.default.queryCardDetail(t).then(function(t) {
            console.log(t, "+_+_+_+_+_+_+"), wx.hideLoading(), e.setData({
                carddata: t.data,
                isShow: !0
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    showToast: function(t) {
        this.showZanToast(t);
    }
}), Page(i);