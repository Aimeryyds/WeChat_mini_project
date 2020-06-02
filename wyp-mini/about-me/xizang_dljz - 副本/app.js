var o, n = require("utils/api"), t = require("utils/functions");

require("utils/util");

App({
    onLaunch: function() {
        var t = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
        n.token = t.original_id, o = this, this.getShopInfo();
    },
    onError: function(o) {
        console.log(o);
    },
    constants: {
        open_stat_arr: [ "休息中", "营业中", "未订购" ],
        open_color_arr: [ "gray", "green", "red" ],
        mapKey: "KKCBZ-CWQW6-SBKSQ-MWG52-MT32H-YYBSM",
        use_wxshare_btn: wx.canIUse("button.open-type.share")
    },
    globalData: {
        shop: null,
        userInfo: null,
        wxUserInfo: null,
        cid: null
    },
    getShopInfo: function(n) {
        console.log("getShopInfo"), o.globalData.shop ? "function" == typeof n && n(o.globalData.shop) : o.reloadShopInfo(n);
    },
    reloadShopInfo: function(n) {
        t.getShopInfo(function(t) {
            t.shop.openStat = t.openStat, t.shop.openStatStr = o.constants.open_stat_arr[t.openStat], 
            t.shop.isRest = 1 != t.shop.openStat, t.shop.openStatColor = o.constants.open_color_arr[t.openStat], 
            t.shop.serviceTel = null == t.serviceTel ? "15005000557" : t.serviceTel, null != t.shop.lnglatX && null != t.shop.lnglatY || (t.shop.lnglatX = 26.0435, 
            t.shop.lnglatY = 119.21644), t.shop.goodsConfig.cateExt ? t.shop.goodsConfig.cateExt = JSON.parse(t.shop.goodsConfig.cateExt) : t.shop.goodsConfig.cateExt = {
                listType: 1,
                goodsType: 1
            }, o.globalData.shop = t.shop, "function" == typeof n && n(t.shop);
        }), setTimeout(o.reloadShopInfo, 6e5);
    },
    getDistribution: function(n) {
        this.globalData.distribution ? "function" == typeof n && n(o.globalData.distribution) : t.getDistributionInfo(function(t) {
            o.globalData.distribution = t.distribution, "function" == typeof n && n(o.globalData.distribution);
        });
    },
    getUserInfo: function(o, n) {
        n || !this.globalData.userInfo ? this.authlogin(o) : "function" == typeof o && o(this.globalData.userInfo);
    },
    authlogin: function(n) {
        wx.login({
            success: function(t) {
                var a = t.code;
                wx.getSetting({
                    success: function(t) {
                        t.authSetting["scope.userInfo"] ? o.getAuthUserInfo(a, n) : (wx.hideNavigationBarLoading(), 
                        wx.navigateTo({
                            url: "/pages/authlogin/authlogin"
                        }));
                    },
                    fail: function() {
                        wx.hideNavigationBarLoading();
                    }
                });
            },
            fail: function(o) {}
        });
    },
    getAuthUserInfo: function(a, e) {
        wx.getUserInfo({
            success: function(s) {
                o.globalData.wxUserInfo = s.userInfo;
                var i = {
                    code: a,
                    encryptedData: s.encryptedData,
                    iv: s.iv
                };
                o.globalData.tgaid && (i.aid = o.globalData.tgaid), t.request(n.wx_slogin_url, i, function(n) {
                    console.log("authlogin"), n.userInfo.spokesman = n.spokesman, o.globalData.userInfo = n.userInfo, 
                    wx.setStorageSync("utoken", n.utoken), wx.setStorageSync("sessionKey", n.sessionKey), 
                    "function" == typeof e && e(o.globalData.userInfo);
                });
            }
        });
    },
    bindSpokesman: function(o) {
        t.bindSpokesman(o, function(o) {});
    },
    getBankList: function(n) {
        o.globalData.bank_list ? "function" == typeof n && n(o.globalData.bank_list) : t.getBankList(function(t) {
            o.globalData.bank_list = t.list, "function" == typeof n && n(t.list);
        });
    },
    concat: function() {
        o.globalData.shop.linkTel && o.globalData.shop.landLine ? wx.showActionSheet({
            itemList: [ o.globalData.shop.linkTel, o.globalData.shop.landLine ],
            success: function(n) {
                if (!n.cancel) {
                    var t = "";
                    t = 0 == n.tapIndex ? o.globalData.shop.linkTel : o.globalData.shop.landLine, wx.makePhoneCall({
                        phoneNumber: t
                    });
                }
            },
            fail: function(o) {
                console.log(o.errMsg);
            }
        }) : wx.makePhoneCall({
            phoneNumber: o.globalData.shop.linkTel ? o.globalData.shop.linkTel : o.globalData.shop.landLine
        });
    },
    getGoodsShareUrl: function(o, t) {
        if (!this.globalData.userInfo.spokesman) return "/pages/shopdetail/shopdetail?goodsSn=" + t;
        var a = this.globalData.userInfo.spokesman.memberId;
        return 0 != o ? n.HOST_URL + "/wx/share/goods/" + o + "/" + t + "/" + a + "/" + n.token + ".jpg" : 0 == o ? "/pages/shopdetail/shopdetail?goodsSn=" + t + "&aid=" + a : void 0;
    },
    getHomeShareUrl: function(o) {
        if (!this.globalData.userInfo.spokesman) return "/pages/index/index";
        var t = this.globalData.userInfo.spokesman.memberId;
        return 0 != o ? n.HOST_URL + "/wx/share/index/" + o + "/" + t + "/" + n.token + ".jpg" : 0 == o ? "/pages/index/index?aid=" + t : void 0;
    }
});