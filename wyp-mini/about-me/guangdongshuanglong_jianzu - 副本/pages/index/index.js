var e = require("../../utils/net.js"), t = require("../../utils/util.js"), a = getApp(), o = require("../../wxParse/wxParse.js");

Page({
    data: {
        title: "",
        introductInfo: {
            introduct: "",
            dataNode: ""
        },
        imgUrls: []
    },
    onLoad: function() {
        a.IsShowBottomLogo(this), this.requestTitle(), console.log(e.MessageCode.SuccessCode.NORMAL), 
        console.log(e.Address.GET_MODEL_DATA), this.request();
    },
    onPullDownRefresh: function() {
        this.request(!1), a.IsShowBottomLogo(this), wx.stopPullDownRefresh();
    },
    request: function() {
        var i = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], s = this, l = {
            appid: a.globalData.appid,
            level: "1"
        };
        i && t.showLoadingDialog();
        new e.GET(e.Address.GET_MODEL_DATA, l, {
            success: function(i, l) {
                if (t.hideLoadingDialog(), t.stopPullDownRefresh(), l == e.MessageCode.SuccessCode.NORMAL) {
                    var n = i.data[0], d = n.Title, r = n.Content, u = n.ImgUrl.split(",");
                    r = (r = (r = r.replace(/[<]br[/][>]/g, '<div style="height:20px"></div>')).replace(/&nbsp;/g, '<span style="margin-left:16rpx;"></span>')).replace(/[<][/]p[>][<]p[>]/g, "<div></div>"), 
                    s.data.introductInfo.dataNode = o.wxParse("article", "html", r, s, 5), s.data.title = d, 
                    s.data.imgUrls = u, s.setData(s.data), a.globalData.title = d, console.log(i);
                } else console.log("no data");
            },
            failure: function(e) {
                console.log(e), t.hideLoadingDialog(), t.stopPullDownRefresh();
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title,
            path: "/pages/index/index"
        };
    },
    requestTitle: function() {
        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        wx.request({
            url: e.Address.GET_MODEl_IMG,
            data: {
                appid: a.globalData.appid
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (1 == e.data.isok) {
                    var t = e.data.data;
                    if (e.data.data.length > 0) {
                        var a = t.find(function(e) {
                            return "nparam" == e.Param;
                        });
                        null != a && void 0 != a && wx.setNavigationBarTitle({
                            title: a.Value
                        });
                    }
                }
            },
            fail: function(e) {
                console.log(e);
            },
            complete: function() {
                wx.stopPullDownRefresh(), t.hideNavigationBarLoading();
            }
        });
    }
});