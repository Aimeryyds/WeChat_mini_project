require("../../libs/wxParse/wxParse.js");

var a = require("../../utils/api"), t = getApp();

Page({
    data: {
        bookInfo: {},
        bookInfoContent: "",
        showSharePanel: !1
    },
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: "服务详情"
        }), 0 == Object.keys(t.globalData.wxappInfo).length ? a.getWXAppInfo(this.setWXAppInfoData) : this.setWXAppInfoData(), 
        t.globalData.formItem && t.globalData.shareWXMoment ? this.setBookExtInfo() : a.getBookExtInfo(this.setBookExtInfo);
        var o = this, i = e.bookId;
        o.setData({
            bookId: i
        }), a.getBookInfo(i, o);
    },
    setBookExtInfo: function() {
        var a = t.globalData.formItem, e = t.globalData.shareWXMoment;
        this.setData({
            formItem: a,
            shareWXMoment: e
        });
    },
    setWXAppInfoData: function() {
        var a = t.globalData.wxappInfo;
        if (0 != Object.keys(a).length) {
            var e = a.flag, o = a.cusService, i = a.isOem, n = a.agentAcct, s = t.globalData.globalColor, r = !1, l = t.globalData.tabbar, g = getCurrentPages(), h = g[g.length - 1].__route__;
            0 != h.indexOf("/") && (h = "/" + h);
            for (var f in l.list) if (l.list[f].pagePath == h) {
                r = !0;
                break;
            }
            o.isTabbarPath = r, o.supportOpen = !e.cancelServiceSupport, e.footerOpen = !e.cancelSupport, 
            this.setData({
                cusService: o,
                flag: e,
                globalColor: s,
                isOem: i,
                agentAcct: n
            });
        }
    },
    toOrder: function(a) {
        if (1 != this.data.bookInfo.status) {
            var t = a.currentTarget.dataset.bookid;
            wx.navigateTo({
                url: "/pages/orderDetail/orderDetail?bookId=" + t
            });
        }
    },
    showShareChoosePanel: function() {
        var a = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = a, this.setData({
            animationData: a.export(),
            showModalStatus: !0
        }), this.setData({
            animationData: a.export()
        });
    },
    hideShareChoosePanel: function() {
        var a = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = a, this.setData({
            animationData: a.export()
        }), setTimeout(function() {
            this.setData({
                animationData: a.export(),
                showModalStatus: !1
            });
        }.bind(this), 200);
    },
    hideSharePanel: function() {
        this.setData({
            showSharePanel: !1
        });
    },
    showSharePanel: function() {
        wx.showLoading({});
        var a = 0;
        wx.getSystemInfo({
            success: function(t) {
                a = t.screenWidth;
            }
        });
        var e = this, o = e.data.bookInfo, i = t.globalData.extConfigData, n = i.wxappDomain, s = i.wxappAid, r = i.wxappId, l = a / 375;
        n = n.substring(0, n.lastIndexOf("/")), wx.downloadFile({
            url: n + "/wxAppImgTransfer.jsp?imgUrl=" + o.pic.url,
            success: function(a) {
                var t = a.tempFilePath;
                wx.downloadFile({
                    url: n + "/wxAppQRCode.jsp?wxappAid=" + s + "&wxappId=" + r + "&type=bookDetailQrCode&bookId=" + o.id,
                    success: function(a) {
                        var i = a.tempFilePath;
                        e.hideShareChoosePanel(), e.setData({
                            showSharePanel: !0
                        });
                        var n = wx.createCanvasContext("myCanvas"), s = o.name && o.name.length > 20 ? o.name.substring(0, 20) : o.name, r = o.summary && o.summary.length > 24 ? o.summary.substring(0, 24) : o.summary, g = o.price, h = o.promotionPrice;
                        h && 0 != h && (g = h), e.drawSquare(n, 400, l), n.setFontSize(15 * l), n.setFillStyle("#353535"), 
                        n.fillText(s, 12 * l, 207 * l), r && (n.setFontSize(12 * l), n.setFillStyle("#888888"), 
                        n.fillText(r, 12 * l, 227 * l)), n.setFontSize(16 * l), n.setFillStyle("#D02F3E"), 
                        n.fillText("￥" + g, 12 * l, 257 * l), n.setFontSize(12 * l), n.setFillStyle("#888888"), 
                        n.fillText("我正在看这个，觉得不错！", 18 * l, 332 * l), n.fillText("长按识别小程序，一起看吧~", 18 * l, 352 * l), 
                        e.drawDashLine(n, 12 * l, 272 * l, 310 * l, 272 * l, 3 * l), n.drawImage(t, 9 * l, 9 * l, 300 * l, 166 * l), 
                        n.drawImage(i, 202 * l, 292 * l, 85 * l, 85 * l), n.draw(), wx.hideLoading();
                    },
                    fail: function() {
                        wx.hideLoading();
                    }
                });
            },
            fail: function() {
                wx.hideLoading();
            }
        });
    },
    drawSquare: function(a, t, e) {
        a.rect(0, 0, 320 * e, t * e), a.setFillStyle("#ffffff"), a.fill();
    },
    drawFont: function(a, t, e) {
        a.setFontSize(16), a.setFillStyle("#484a3d"), a.fillText(t, 50, e);
    },
    drawLine: function(a, t) {
        a.beginPath(), a.moveTo(5, t), a.lineTo(490, t), a.closePath();
    },
    drawDashLine: function(a, t, e, o, i, n) {
        a.beginPath();
        for (var s = void 0 === n ? 3 : n, r = o - t, l = i - e, g = Math.floor(Math.sqrt(r * r + l * l) / s), h = 0; h < g; h++) h % 2 == 0 ? a.moveTo(t + r / g * h, e + l / g * h) : a.lineTo(t + r / g * h, e + l / g * h);
        a.setStrokeStyle("#eeeeee"), a.stroke(), a.closePath();
    },
    savePic: function() {
        var a = this;
        wx.canvasToTempFilePath({
            width: 500,
            height: 1e3,
            canvasId: "myCanvas",
            success: function(t) {
                wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        wx.showToast({
                            title: "保存成功"
                        }), a.setData({
                            showSharePanel: !1
                        });
                    },
                    fail: function(a) {}
                });
            }
        });
    },
    makePhoneCall: function() {
        var a = t.globalData.wxappInfo.cusService.phone;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    backToHome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        }), wx.navigateTo({
            url: "/pages/index/index"
        });
    },
    previewImage: function(a) {
        var t = a.currentTarget.dataset.img, e = a.currentTarget.dataset.imglist, o = [];
        for (var i in e) o.push(e[i].url);
        wx.previewImage({
            current: t,
            urls: o
        });
    },
    onShareAppMessage: function() {
        var a = "服务详情", e = "";
        if (t.globalData.wxappInfo && t.globalData.wxappInfo.wxShare) {
            var o = t.globalData.wxappInfo.wxShare.tle, i = t.globalData.wxappInfo.wxShare.p, n = t.globalData.wxappInfo.wxShare.it, s = t.globalData.wxappInfo.wxShare.tt;
            o && s && (a = o), i && n && (e = i);
        }
        return {
            title: a,
            imageUrl: e
        };
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), a.getBookInfo(this.data.bookId, this);
    },
    showAdvertising: function(e) {
        a.logDog(7000032, 0), t.globalData.isVerFree ? a.logDog(7000047, 1) : a.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=0"
        });
    },
    showServiceAdvertising: function(e) {
        a.logDog(7000032, 3), t.globalData.isVerFree ? a.logDog(7000047, 1) : a.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=1"
        });
    }
});