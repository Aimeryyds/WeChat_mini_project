var t, e = getApp(), a = (require("../../../utils/functions"), require("../../../utils/util"));

Page({
    data: {
        userInfo: null,
        show_generate: 0,
        generate_w: 1,
        generate_h: 1
    },
    onLoad: function(a) {
        t = this, e.getUserInfo(function(e) {
            e.spokesman.amount = (e.spokesman.amount + e.spokesman.settleAmount).toFixed(2), 
            t.setData({
                userInfo: e
            });
        }), e.getDistribution(function(e) {
            t.setData({
                spokesmanAlias: e.alias
            }), wx.setNavigationBarTitle({
                title: t.data.spokesmanAlias + "中心"
            });
        });
    },
    onShow: function() {},
    onPullDownRefresh: function() {},
    generateDidClick: function(a) {
        var o = a.currentTarget.id, n = e.getHomeShareUrl(o);
        if (this.closeSSWrap(), this.setData({
            show_generate: 1,
            box_h: 1 == o ? 640 : 990
        }), !this.data.photo) {
            wx.createCanvasContext("cas");
            wx.downloadFile({
                url: n,
                success: function(e) {
                    t.setData({
                        photo: e.tempFilePath
                    }), setTimeout(function() {
                        t.setData({
                            generate_w: 640,
                            generate_h: 1 == o ? 640 : 990,
                            generate_l: 0,
                            generate_t: 0
                        });
                    }, 10);
                }
            });
        }
    },
    openSSWrap: function(t) {
        this.setData({
            show_s_wrap: 1
        });
    },
    closeSSWrap: function(t) {
        this.setData({
            show_s_wrap: 0
        });
    },
    closeGenWrap: function() {
        this.setData({
            photo: null,
            show_generate: 0
        });
    },
    savePhoto: function() {
        null != this.data.photo && wx.saveImageToPhotosAlbum({
            filePath: this.data.photo,
            success: function() {
                t.closeGenWrap(), a.toast("保存成功");
            }
        });
    },
    onShareAppMessage: function() {
        t.closeSSWrap();
        var a = e.getHomeShareUrl(0);
        return {
            title: e.globalData.shop.name,
            path: a
        };
    }
});