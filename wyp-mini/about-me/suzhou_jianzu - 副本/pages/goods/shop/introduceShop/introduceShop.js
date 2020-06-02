var a = require("../../../../utils/server"), t = (wx.getStorageSync("utoken"), void 0);

Page({
    data: {
        loading: !0,
        isPhoto: "",
        imgUrls: [ "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg", "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" ],
        showImage: !1
    },
    onLoad: function(o) {
        t = this, console.log(o.id), console.log("options.id-----------"), t.setData({
            shopId: o.id
        }), a.sendRequest({
            url: "?r=wxapp.shop&merchid=" + t.data.shopId,
            showToast: !1,
            data: {},
            method: "GET",
            success: function(a) {
                t.setData({
                    shopinfo: a.data.result.shopinfo,
                    advs: a.data.result.advs,
                    loading: !1
                }), a.data.result.banners[0] ? t.setData({
                    banners: a.data.result.banners,
                    isPhoto: !0
                }) : t.setData({
                    isPhoto: !1
                }), a.data.result.advs[0] ? t.setData({
                    advs: a.data.result.advs,
                    isAdvs: !0
                }) : t.setData({
                    isAdvs: !1
                });
            }
        });
    },
    map: function() {
        t = this;
        var a = parseFloat(t.data.shopinfo.lat), o = parseFloat(t.data.shopinfo.lng);
        wx.openLocation({
            latitude: parseFloat(a),
            longitude: parseFloat(o)
        });
    },
    showImages: function() {
        (t = this).setData({
            showImage: !1
        });
    },
    joinImage: function(a) {
        t = this;
        var o = a.currentTarget.dataset.index;
        t.data.showImage || t.setData({
            showImage: !0,
            nowImg: t.data.banners[o].thumb
        });
    },
    dialPhone: function() {
        t = this, wx.makePhoneCall({
            phoneNumber: t.data.shopinfo.mobile
        });
    }
});