var t = require("../../wxParse/wxParse.js"), a = require("../../utils/net.js"), e = require("../../utils/util.js"), i = require("../../utils/address.js");

Page({
    data: {
        errorMsg: ""
    },
    onLoad: function(t) {
        void 0 != t.isProduct && this.setData({
            isProduct: t.isProduct
        }), e.isOptStrNull(t.id) ? this.setData({
            Content: t.content
        }) : (this.setData({
            id: t.id
        }), this.loadDataFormNet());
    },
    loadDataFormNet: function() {
        var s = this, d = {
            id: s.data.id
        };
        e.showLoadingDialog("正在加载..."), a.POST(i.Address.GET_MODEl_INFO_BY_ID, d, {
            success: function(a, i) {
                e.hideLoadingDialog(), e.isOptStrNull(a) || e.isOptStrNull(a.data) ? s.setData({
                    errorMsg: i
                }) : (a.data[0].Content = a.data[0].Content.replace(/[<]br[/][>]/g, '<div style="height:20px"></div>'), 
                a.data[0].Content = a.data[0].Content.replace(/&nbsp;/g, '<span style="margin-left:16rpx;"></span>'), 
                a.data[0].Content = a.data[0].Content.replace(/[<][/]p[>][<]p[>]/g, "<div></div>"), 
                a.data[0].Content = t.wxParse("article", "html", a.data[0].Content, s, 5), s.setData({
                    headerImg: a.data[0].ImgUrl,
                    navTitle: a.data[0].Title,
                    content: a.data[0].Content
                }), wx.setNavigationBarTitle({
                    title: a.data[0].Title
                }));
            },
            failure: function(t) {
                e.hideLoadingDialog(), console.log(t), s.setData({
                    errorMsg: t
                });
            }
        });
    },
    onShareAppMessage: function() {
        if (!e.isOptStrNull(this.data.id)) return {
            title: this.data.navTitle,
            path: "/pages/detail/detail?id=" + this.data.id
        };
    }
});