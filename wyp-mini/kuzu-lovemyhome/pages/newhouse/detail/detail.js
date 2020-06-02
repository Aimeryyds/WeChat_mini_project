var e = require("../../../utils/gio-minp/index.js").default, t = require("../../../sdk/gioConfig.js").default;

e("setConfig", t), Page({
    data: {
        area: "",
        estateid: "",
        propertytypeid: "",
        detaildata: "",
        albumdata: [],
        mainAlbumName: "",
        albumindex: 1,
        markers: [],
        loadstatus: !1
    },
    onLoad: function(e) {
        if (console.log(e), e.scene) {
            var t = e.scene.split("_"), a = t[2], i = t[2];
            if (console.log(a), -1 != a.indexOf("-")) {
                var o = t[2].split("-");
                a = o[0] + "-" + o[1], i = o[0] + "," + o[1];
            }
            this.setData({
                estateid: t[0],
                propertytypeid: t[1]
            }), wx.request({
                url: "https://fang.5i5j.com/bj/ajax/sendchannelcode",
                method: "post",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                },
                data: {
                    mobile: a
                },
                dataType: "json",
                success: function(e) {
                    console.log("success", e);
                },
                fail: function(e) {
                    console.log("fail", e);
                }
            }), wx.makePhoneCall({
                phoneNumber: i
            });
        } else this.setData({
            estateid: e.estateid,
            propertytypeid: e.propertytypeid
        });
        this.getData();
    },
    getData: function() {
        var e = this;
        wx.request({
            url: "https://appapi.5i5j.com/estate/1/detail",
            method: "POST",
            data: {
                estateID: e.data.estateid,
                propertyTypeID: e.data.propertytypeid
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t.data.data);
                var a = e.data.albumdata, i = t.data.data.albumnew;
                i.map(function(e) {
                    var t = e.mainAlbumName, i = e.albumName, o = e.albumID, s = e.count, n = e.is3d;
                    e.photo.map(function(e, r) {
                        var d = {
                            mainAlbumName: t,
                            albumName: i,
                            albumID: o,
                            photo: e,
                            count: s,
                            is3d: n,
                            itemindex: r
                        };
                        a.push(d);
                    });
                }), e.setMarkers(t.data.data), e.setData({
                    detaildata: t.data.data,
                    albumdata: a,
                    mainAlbumName: a[0].mainAlbumName,
                    itemcount: a[0].count,
                    itemindex: parseInt(a[0].itemindex) + 1,
                    loadstatus: !0
                }), wx.setStorageSync("albumnew", JSON.stringify(i)), wx.setStorageSync("albumloop", JSON.stringify(a)), 
                e.gettaglist();
            }
        });
    },
    setMarkers: function(e) {
        var t = {
            iconPath: "https://res.5i5j.com/cache/weixin/newhouse/location.png",
            id: 0,
            latitude: e.info.estateLatitude,
            longitude: e.info.estateLongitude,
            width: 21,
            height: 27
        }, a = [];
        a.push(t), this.setData({
            markers: a
        });
    },
    loopchange: function(e) {
        var t = this.data.albumdata[e.detail.current].mainAlbumName;
        this.setData({
            mainAlbumName: t,
            albumindex: parseInt(e.detail.current) + 1
        });
    },
    routergo: function(e) {
        var t = e.currentTarget.dataset.type, a = "";
        if ("albumdetail" == t) a = "/pages/newhouse/albumdetail/albumdetail?albumindex=" + this.data.albumindex; else if ("albumvr" == t) {
            var i = e.currentTarget.dataset.targeturl;
            a = "/pages/webview/webview?url=" + (i = encodeURIComponent(i));
        } else if ("houseinfo" == t) {
            var o = this.data.detaildata.detail;
            wx.setStorageSync("houseinfo", o), a = "/pages/newhouse/detail/houseinfo/houseinfo";
        } else if ("broker" == t) a = "/pages/newhouse/brokerlist/brokerlist?estateid=" + this.data.estateid; else if ("recommondhouse" == t) {
            var s = this.data.detaildata.info.estateAreaName, n = "";
            this.data.area.map(function(e) {
                e.areaName == s && (n = e.areaID);
            });
            var r = {
                page: 1,
                pageSize: 15,
                keyword: "",
                areaID: "",
                priceID: "",
                customPriceLow: "",
                customPriceTop: "",
                houseTypeID: "",
                propertyTypeID: "",
                trafficID: "",
                tagID: "",
                otherID: "",
                openDate: "",
                budingArea: "",
                totalPrice: "",
                customTotalPriceLow: "",
                customTotalPriceTop: "",
                sortID: "",
                swLat: "",
                swLng: "",
                neLng: "",
                neLat: ""
            };
            r.areaID = n, a = "/pages/newhouse/list/list?condition=" + JSON.stringify(r) + "&cityid=" + this.data.detaildata.info.cityid;
        } else "moredt" == t ? (console.log("更多动态"), a = "/pages/newhouse/article/article?estateid=" + this.data.estateid + "&propertyTypeID=" + this.data.propertytypeid) : "housetype" == t ? (console.log("户型列表"), 
        a = "/pages/newhouse/housetype/housetype?estateid=" + this.data.detaildata.info.estateID) : "map" == t ? (wx.removeStorageSync("search-dt"), 
        wx.removeStorageSync("search-gj"), wx.removeStorageSync("search-yh"), wx.removeStorageSync("search-xx"), 
        wx.removeStorageSync("search-yy"), a = "/pages/newhouse/map/map?lon=" + this.data.detaildata.info.estateLongitude + "&lat=" + this.data.detaildata.info.estateLatitude) : "detail" == t ? a = "/pages/newhouse/detail/detail?estateid=" + e.currentTarget.dataset.estateid + "&propertytypeid=" + e.currentTarget.dataset.propertytypeid : "albumlist" == t && (a = "/pages/newhouse/albumlist/albumlist");
        wx.navigateTo({
            url: a
        });
    },
    givecall: function(t) {
        var a = t.currentTarget.dataset.tel, i = t.currentTarget.dataset.bid;
        e("track", "telconsult", {
            agentid_var: i,
            telnum_var: a
        }), wx.makePhoneCall({
            phoneNumber: a
        });
    },
    brokerimgerror: function() {
        var e = this.data.detaildata;
        e.info.superAgency.agencyName = "/img/resources/default_broker_404.png", this.setData({
            detaildata: e
        });
    },
    gettaglist: function() {
        var e = this.data.detaildata.info.cityid, t = this;
        wx.request({
            url: "https://appapi.5i5j.com/appapi/location/" + e + "/index",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                t.setData({
                    area: e.data.data.area
                });
            }
        });
    },
    housetypedetail: function(e) {
        var t = e.currentTarget.dataset.housetypeid;
        wx.navigateTo({
            url: "/pages/newhouse/housetypedetail/housetypedetail?housetypeid=" + t
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});