var e, t = getApp(), n = require("../../utils/functions"), a = require("../../utils/util");

Page({
    data: {
        aid: null,
        userInfo: null,
        show_s_wrap: 0,
        use_wxshare_btn: !1,
        shop: null,
        banner_list: null,
        goods_list: null,
        hasNextPage: !1,
        showMore: !1,
        module_list: null,
        menu_list: o,
        imgList: [],
        show_generate: 0,
        generate_w: 1,
        generate_h: 1
    },
    onLoad: function(n) {
        (e = this).setData({
            use_wxshare_btn: t.constants.use_wxshare_btn
        }), e.getShopModules(), e.data.aid = n.aid, t.globalData.tgaid = n.aid;
    },
    onShow: function() {
        t.getUserInfo(function(t) {
            e.setData({
                userInfo: t
            });
        }, !0), e.getBanners(1), t.getShopInfo(function(n) {
            2 == n.openStat && wx.redirectTo({
                url: "/pages/noAuth/noAuth"
            }), null == n.goodsConfig.cateExt && (n.goodsConfig.cateExt = {
                listType: 1,
                goodsType: 1
            }), e.setData({
                shop: n
            }), t.getDistribution(function(t) {
                e.setData({
                    isOpenDistribution: t.isOpen
                });
            }), wx.setNavigationBarTitle({
                title: n.name
            });
        });
    },
    onPullDownRefresh: function() {
        t.getShopInfo(function(t) {
            2 == t.openStat && wx.redirectTo({
                url: "/pages/noAuth/noAuth"
            }), e.setData({
                shop: t
            });
        }), e.getShopModules();
    },
    getShopModules: function() {
        n.getShopModules(function(t) {
            null != t.list && 0 != t.list.length || (t.list = [ {
                type: 2,
                object: {
                    list: e.data.menu_list
                }
            } ], e.getBanners(2));
            var n = -1;
            t.list.forEach(function(t) {
                n++, 4 == t.type ? e.getBanner(n, t.typeId) : 5 == t.type ? e.getSysWin(n, t.typeId) : 6 == t.type || 7 == t.type ? e.getAlbumInfo(n, t.typeId) : t.type > 7 && e.getRecommendList(n, t.type);
            }), e.setData({
                "shop.goodsConfig": t.goodsConfig,
                module_list: t.list
            }), wx.stopPullDownRefresh();
        });
    },
    getBanners: function(t) {
        n.getShopBannerList(t, function(n) {
            if (1 == t) e.setData({
                banner_list: n.list
            }); else {
                var a = 1, o = e.data.shop.goodsConfig;
                null != n.list && n.list.forEach(function(t) {
                    a++, e.data.module_list.push({
                        type: 4,
                        object: t
                    });
                }), 1 == o.showHot && (e.data.module_list.push({
                    type: 8
                }), e.getRecommendList(a++, 8)), 1 == o.showNew && (e.data.module_list.push({
                    type: 9
                }), e.getRecommendList(a++, 9)), 1 == o.showBest && (e.data.module_list.push({
                    type: 10
                }), e.getRecommendList(a++, 10));
            }
        });
    },
    getBanner: function(t, a) {
        n.getBanner(a, function(n) {
            console.log("=====> getBanner"), e.data.module_list[t].object = n.banner, e.setData({
                module_list: e.data.module_list
            });
        });
    },
    getSysLink: function(t, a) {
        n.getSysLink(a, function(n) {
            console.log("=====> getSysLink"), e.data.module_list[t].object = n.sysLink, e.setData({
                module_list: e.data.module_list
            });
        });
    },
    getSysWin: function(t, a) {
        n.getSysWin(a, function(n) {
            console.log("=====> getSysWin"), e.data.module_list[t].object = n.sysWin, e.setData({
                module_list: e.data.module_list
            });
        });
    },
    getAlbumInfo: function(t, a) {
        n.getAlbumInfo(a, function(n) {
            console.log("=====> getAlbumInfo"), e.data.module_list[t].object = n.album, e.setData({
                module_list: e.data.module_list
            });
        });
    },
    getRecommendList: function(t, a) {
        n.getRecommendList(a, function(n) {
            var a = n.list;
            null != a && a.length > 0 && (a = a.map(function(e) {
                return e.thumb = e.thumb + "?imageslim", e;
            })), e.data.module_list[t].list = n.list, e.setData({
                module_list: e.data.module_list
            });
        });
    },
    join2Cart: function(e) {
        var t = e.currentTarget.id;
        wx.navigateTo({
            url: "/pages/shopdetail/shopdetail?show_choose=true&goodsSn=" + t,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    go2BannerLink: function(n) {
        var a = n.currentTarget.dataset.target, o = n.currentTarget.dataset.targetid;
        if (1 == a) t.globalData.cid = o, wx.reLaunch({
            url: "/pages/catelist/catelist"
        }); else if (2 == a && null != o && 0 != o) wx.navigateTo({
            url: "/pages/shopdetail/shopdetail?goodsSn=" + o
        }); else if (3 == a) wx.navigateTo({
            url: "/pages/singlepages/singlepages?pagesId=" + o
        }); else if (4 == a) {
            if (1 == o) s = "/pages/couponcenter/couponcenter"; else if (4 == o) s = "/pages/mineorder/mineorder"; else if (5 == o) s = "/pages/lottery/lottery"; else if (6 == o) s = e.go2Spokesman(); else if (7 == o) var s = "/pages/bargain/bargain-list/bargain-list";
            wx.navigateTo({
                url: s
            });
        }
    },
    go2MenuLink: function(n) {
        var a = n.currentTarget.dataset.target, o = n.currentTarget.dataset.targetid;
        if (1 == a) return t.globalData.cid = o, void wx.reLaunch({
            url: "/pages/catelist/catelist"
        });
        if (3 == a) s = "/pages/singlepages/singlepages?pagesId=" + o; else if (4 == a) if (1 == o) s = "/pages/couponcenter/couponcenter"; else if (4 == o) s = "/pages/mineorder/mineorder"; else if (5 == o) s = "/pages/lottery/lottery"; else if (6 == o) s = e.go2Spokesman(); else if (7 == o) var s = "/pages/bargain/bargain-list/bargain-list";
        wx.navigateTo({
            url: s
        });
    },
    go2Spokesman: function() {
        var t = "/pages/spokesperson/center/center";
        return e.data.userInfo.spokesman ? 1 == e.data.userInfo.spokesman.status && (t = "/pages/spokesperson/check/check") : t = "/pages/spokesperson/apply/apply", 
        t;
    },
    share: function() {
        a.toast("您的微信版本太低，请直接点击右上角进行转发！");
    },
    call: function() {
        t.concat();
    },
    openSSWrap: function() {
        this.setData({
            show_s_wrap: 1
        });
    },
    closeSSWrap: function() {
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
    generateDidClick: function(n) {
        var a = n.currentTarget.id, o = t.getHomeShareUrl(a);
        if (this.closeSSWrap(), this.setData({
            show_generate: 1,
            box_h: 1 == a ? 640 : 990
        }), !this.data.photo) {
            wx.createCanvasContext("cas");
            wx.downloadFile({
                url: o,
                success: function(t) {
                    e.setData({
                        photo: t.tempFilePath
                    }), setTimeout(function() {
                        e.setData({
                            generate_w: 640,
                            generate_h: 1 == a ? 640 : 990,
                            generate_l: 0,
                            generate_t: 0
                        });
                    }, 10);
                }
            });
        }
    },
    savePhoto: function() {
        null != this.data.photo && wx.saveImageToPhotosAlbum({
            filePath: this.data.photo,
            success: function() {
                e.closeGenWrap(), a.toast("保存成功");
            }
        });
    },
    onShareAppMessage: function() {
        e.closeSSWrap();
        var n = t.getHomeShareUrl(0);
        return {
            title: e.data.shop.intro,
            path: n
        };
    }
});

var o = [ {
    name: "品牌介绍",
    target: 3,
    targetId: 0,
    pic: "http://img.xsplus.cn/common/icons/icon_pinpai.png",
    link: "/pages/couponcenter/couponcenter"
}, {
    name: "领券中心",
    target: 4,
    targetId: 1,
    pic: "http://img.xsplus.cn/common/icons/icon_quan.png",
    link: "/pages/couponcenter/couponcenter"
}, {
    name: "分享店铺",
    pic: "http://img.xsplus.cn/common/icons/icon_share.png"
}, {
    name: "联系客服",
    pic: "http://img.xsplus.cn/common/icons/icon_service.png"
}, {
    name: "我的订单",
    target: 4,
    targetId: 4,
    pic: "http://img.xsplus.cn/common/icons/icon_dingdan.png",
    link: "/pages/mineorder/mineorder"
} ];