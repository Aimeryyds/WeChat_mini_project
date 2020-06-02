var t = require("../../utils/net.js"), e = require("../../utils/util.js"), a = getApp();

Page({
    data: {
        currentPageIndex: 1,
        isShowQRCode: !1,
        userInfo: {},
        backimg: ""
    },
    onLoad: function() {
        a.IsShowBottomLogo(this), this.setData({
            windowWidth: a.globalData.windowWidth,
            windowHeight: a.globalData.windowHeight,
            pixelRatio: a.globalData.pixelRatio
        }), this.loadDataFormNet();
    },
    onItemClick: function(t) {
        var e = t.target.dataset.index, a = this.data.items[e], i = this;
        switch (e) {
          case 0:
            i.data.isShowQRCode = !i.data.isShowQRCode, i.setData(i.data);
            break;

          case 1:
            wx.openLocation({
                latitude: i.data.userInfo.latitude,
                longitude: i.data.userInfo.longitude,
                scale: 18
            });
            break;

          case 2:
            wx.makePhoneCall({
                phoneNumber: a.title
            });
        }
    },
    loadDataFormNet: function() {
        var i = this, o = {
            appid: a.globalData.appid,
            level: "7"
        };
        e.showLoadingDialog(), t.POST(t.Address.GET_MODEL_DATA, o, {
            success: function(t, a) {
                e.hideLoadingDialog(), e.stopPullDownRefresh();
                var o = [ {
                    image: "/images/QRCode.png",
                    title: "扫一扫，直接聊"
                }, {
                    image: "/images/location.png",
                    title: "选择定位区域"
                }, {
                    image: "/images/phone.png",
                    title: "暂无信息~"
                } ], s = {}, l = "";
                if (null != t && t.data.length > 0) {
                    var n = t.data[0];
                    if (l = n.LitleImgUrl, !e.isOptStrNull(n)) {
                        if (o[1].title = n.Address, o[2].title = n.mobile, !e.isOptStrNull(n.AddressPoint)) var r = n.AddressPoint.split(",") || [ "0", "0" ];
                        s = {
                            avatarUrl: "../../images/icon.png",
                            nickName: n.Title ? n.Title : "暂无信息",
                            location: n.Address,
                            latitude: Number(r[1]),
                            longitude: Number(r[0]),
                            phone: n.mobile,
                            codeImg: n.ImgUrl
                        };
                    }
                }
                i.setData({
                    items: o,
                    userInfo: s,
                    backimg: l
                });
            },
            failure: function(t) {
                console.log(t), e.hideLoadingDialog(), e.stopPullDownRefresh();
            }
        });
    },
    onShareAppMessage: function() {
        return {
            path: "/pages/mine/mine"
        };
    },
    onShow: function() {
        e.isOptStrNull(this.data.items) && this.loadDataFormNet();
    },
    onPullDownRefresh: function() {
        a.IsShowBottomLogo(this), wx.stopPullDownRefresh();
    },
    previewImg: function(t) {
        var e = [];
        e.push(t.currentTarget.dataset.img);
        var a = e[0];
        console.log(a), wx.previewImage({
            current: a,
            urls: e
        });
    }
});