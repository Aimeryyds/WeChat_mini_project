var a = getApp(), t = require("../../utils/api"), e = require("../../libs/wxParse/wxParse.js");

Page({
    data: {
        globalColor: "",
        activeIndex: 0,
        aboutInfo: "",
        showShareMyCard: !1,
        hasInitCanvas: !1,
        visitorTipFlag: !0,
        fadeShowFlag: !1,
        visitedList: []
    },
    onLoad: function(o) {
        function i(a) {
            var t = a.cardInfo, o = a.cardList, i = {
                name: t.name,
                phone: t.phone,
                job: t.job,
                email: t.email,
                wechatId: t.wechatId,
                addr: t.addr,
                avator: t.avatorUrl ? t.avatorUrl : "http://qz.faisys.com/image/wxImage/head.png",
                about: t.about
            };
            void 0 !== o && (i.visitedList = o), l.setData(i, function() {
                wx.hideLoading(), l.showVisitorTip();
            }), t.about && e.wxParse("aboutInfo", "html", t.about, l, 5);
        }
        0 == Object.keys(a.globalData.wxappInfo).length ? t.getWXAppInfo(this.setWXAppInfoData) : this.setWXAppInfoData(), 
        a.globalData.cardConfig ? this.setCardConfig() : t.getCardConfig(this.setCardConfig);
        var n = o.id;
        wx.showLoading({
            title: "加载中"
        }), void 0 !== o.type ? t.getCardInfo(n, i, o.type) : t.getCardInfo(n, i);
        var l = this;
        this.setData({
            cardId: n
        });
    },
    onShow: function() {
        a.globalData.wxAppRequest.logDog(7000059, 0);
    },
    setWXAppInfoData: function() {
        var t = a.globalData.wxappInfo;
        if (0 !== Object.keys(t).length) {
            var e = a.globalData.globalColor, o = t.flag, i = t.isOem, n = t.agentAcct;
            o.footerOpen = !o.cancelSupport, wx.setNavigationBarColor({
                frontColor: "#ffffff",
                backgroundColor: e
            }), this.setData({
                globalColor: e,
                flag: o,
                isOem: i,
                agentAcct: n
            });
        }
    },
    setCardConfig: function() {
        var t = a.globalData.cardConfig, e = t.cn, o = 0 == t.bt ? "我的公司" : "我的门店";
        wx.setNavigationBarTitle({
            title: e
        }), this.setData({
            corpName: e,
            btnName: o
        });
    },
    switchNav: function(t) {
        var e = t.target.dataset.index;
        0 == e ? a.globalData.wxAppRequest.logDog(7000059, 12) : a.globalData.wxAppRequest.logDog(7000059, 13), 
        this.data.activeIndex != e && this.setData({
            activeIndex: e
        });
    },
    saveToContact: function() {
        a.globalData.wxAppRequest.logDog(7000059, 8), wx.addPhoneContact({
            firstName: this.data.name,
            mobilePhoneNumber: this.data.phone,
            weChatNumber: this.data.wechatId,
            organization: this.data.corpName,
            title: this.data.job,
            success: function(a) {
                wx.showToast({
                    title: "保存成功",
                    icon: "success",
                    duration: 1e3
                });
            }
        });
    },
    viewMyHome: function() {
        a.globalData.wxAppRequest.logDog(7000059, 14), a.globalData._cardEntranceData = {
            id: this.data.cardId,
            avator: this.data.avator
        }, wx.switchTab({
            url: "/pages/index/index"
        }), wx.navigateTo({
            url: "/pages/index/index"
        });
    },
    makePhoneCall: function() {
        a.globalData.wxAppRequest.logDog(7000059, 6), wx.makePhoneCall({
            phoneNumber: this.data.phone,
            success: function() {
                a.globalData.wxAppRequest.logDog(7000059, 7);
            }
        });
    },
    copyInfo: function(t) {
        var e = t.target.dataset.type;
        if (void 0 !== e) {
            var o = "", i = "";
            0 == e ? (a.globalData.wxAppRequest.logDog(7000059, 9), o = "复制邮件地址", i = this.data.email) : 1 == e && (a.globalData.wxAppRequest.logDog(7000059, 11), 
            o = "复制微信号", i = this.data.wechatId), wx.showActionSheet({
                itemList: [ o ],
                success: function(a) {
                    wx.setClipboardData({
                        data: i,
                        success: function(a) {
                            wx.showToast({
                                title: "复制成功",
                                icon: "success",
                                duration: 1e3
                            });
                        }
                    });
                }
            });
        }
    },
    openMap: function() {
        a.globalData.wxAppRequest.logDog(7000059, 10), a.globalData.wxAppRequest.getLocationFromBaidu(this.data.addr);
    },
    hideShareMyCard: function() {
        this.setData({
            showShareMyCard: !1
        });
    },
    shareMyCard: function() {
        a.globalData.wxAppRequest.logDog(7000059, 4), this.data.hasInitCanvas ? this.setData({
            showShareMyCard: !0
        }) : this.initCanvas();
    },
    initCanvas: function() {
        function t(a, t, i) {
            var s = wx.createCanvasContext("myCanvas"), r = 345 * i, g = 460 * i, h = 0, d = 15 * i, c = wx.canIUse("canvasContext.measureText");
            n.roundRect(s, 0, 0, r, g, 6 * i), s.setFillStyle("#ffffff"), s.fill(), s.setFontSize(16 * i), 
            s.setFillStyle("#999999"), h = c ? e(l.corpName, d, 38 * i, 20 * i, 250 * i, s) : o(l.corpName, d, 38 * i, 15 * i, 250 * i, s), 
            h += 45 * i, s.setFontSize(22 * i), s.setFillStyle("#333333"), s.fillText(l.name, d, h), 
            l.job.length > 0 && (h += 26 * i, s.setFontSize(12 * i), s.setFillStyle("#999999"), 
            s.fillText(l.job, d, h)), s.drawImage(a, 284 * i, 20 * i, 46 * i, 46 * i), l.phone.length > 0 && (h += 35 * i, 
            s.setFontSize(13 * i), s.setFillStyle("#999999"), s.fillText(l.phone, d, h)), l.email.length > 0 && (h += 20 * i, 
            s.setFontSize(13 * i), s.setFillStyle("#999999"), s.fillText(l.email, d, h)), l.addr.length > 0 && (h += 20 * i, 
            s.setFontSize(13 * i), s.setFillStyle("#999999"), h = c ? e(l.addr, d, h, 18 * i, 320 * i, s) : o(l.addr, d, h, 13 * i, 320 * i, s)), 
            h < .4 * g && (h = .4 * g), h += 15 * i, s.setLineWidth(1), s.setLineDash([ 2, 5 ]), 
            s.setStrokeStyle("#eeeeee"), s.beginPath(), s.moveTo(12 * i, h), s.lineTo(330 * i, h), 
            s.closePath(), s.stroke(), s.beginPath(), s.arc(0, h, 8 * i, 0, 2 * Math.PI), s.closePath(), 
            s.setFillStyle("rgba(0, 0, 0, 0.5)"), s.fill(), s.beginPath(), s.arc(r, h, 8 * i, 0, 2 * Math.PI), 
            s.closePath(), s.setFillStyle("rgba(0, 0, 0, 0.5)"), s.fill(), h += 18 * i, s.drawImage(t, (r - 160 * i) / 2, h, 160 * i, 160 * i), 
            h += 185 * i, s.setFontSize(13 * i), s.setFillStyle("#656565"), s.fillText("长按识别小程序码，马上认识我", (r - 13 * i * 14) / 2, h), 
            s.draw(), n.setData({
                showShareMyCard: !0,
                hasInitCanvas: !0
            }), wx.hideLoading();
        }
        function e(a, t, e, o, i, n) {
            if (0 !== a.length) {
                var l = n.measureText(a).width, s = void 0, r = void 0;
                if (l > i ? (s = Math.ceil(l / i), r = (i / l).toFixed(2)) : s = 1, 1 == s) return n.fillText(a, t, e), 
                e;
                if (s >= 2) {
                    var g = a.substr(0, a.length * r);
                    if (n.fillText(g, t, e), 2 == s) n.fillText(a.substr(g.length + 1), t, e + o); else {
                        var h = a.substr(g.length + 1, a.length * r - 1);
                        h += "...", n.fillText(h, t, e + o);
                    }
                    return e + o;
                }
            }
        }
        function o(a, t, e, o, i, n) {
            var l = Math.floor(i / o);
            return a.length > l && (a = a.substr(0, l - 1) + "..."), n.fillText(a, t, e), e;
        }
        wx.showLoading({});
        var i = 0;
        wx.getSystemInfo({
            success: function(a) {
                i = a.screenWidth;
            }
        });
        var n = this, l = n.data, s = a.globalData.extConfigData, r = s.wxappDomain, g = s.wxappAid, h = s.wxappId, d = i / 375;
        r = r.substring(0, r.lastIndexOf("/")), wx.downloadFile({
            url: r + "/wxAppImgTransfer.jsp?imgUrl=" + l.avator,
            success: function(a) {
                var e = a.tempFilePath;
                wx.downloadFile({
                    url: r + "/wxAppQRCode.jsp?wxappAid=" + g + "&wxappId=" + h + "&type=cardQrCode&cardId=" + l.cardId,
                    success: function(a) {
                        var o = a.tempFilePath;
                        t(e, o, d);
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
    roundRect: function(a, t, e, o, i, n) {
        var l = Math.min(o, i);
        n > l / 2 && (n = l / 2), a.beginPath(), a.moveTo(t + n, e), a.lineTo(t + o - n, e), 
        a.arc(t + o - n, e + n, n, 1.5 * Math.PI, 0 * Math.PI), a.lineTo(t + o, e + i - n), 
        a.arc(t + o - n, e + i - n, n, 0 * Math.PI, .5 * Math.PI), a.lineTo(t + n, e + i), 
        a.arc(t + n, e + i - n, n, .5 * Math.PI, 1 * Math.PI), a.lineTo(t, e + n), a.arc(t + n, e + n, n, 1 * Math.PI, 1.5 * Math.PI), 
        a.closePath();
    },
    drawDashLine: function(a, t, e, o, i, n) {
        a.beginPath();
        for (var l = void 0 === n ? 3 : n, s = o - t, r = i - e, g = Math.floor(Math.sqrt(s * s + r * r) / l), h = 0; h < g; h++) h % 2 == 0 ? a.moveTo(t + s / g * h, e + r / g * h) : a.lineTo(t + s / g * h, e + r / g * h);
        a.setStrokeStyle("#eee"), a.stroke(), a.closePath();
    },
    savePic: function() {
        a.globalData.wxAppRequest.logDog(7000059, 5);
        var t = this;
        wx.canvasToTempFilePath({
            width: 500,
            height: 1e3,
            canvasId: "myCanvas",
            success: function(a) {
                wx.saveImageToPhotosAlbum({
                    filePath: a.tempFilePath,
                    success: function(a) {
                        wx.showToast({
                            title: "保存成功"
                        }), t.setData({
                            showShareMyCard: !1
                        });
                    },
                    fail: function(a) {}
                });
            }
        });
    },
    viewMyAvator: function() {
        a.globalData.wxAppRequest.logDog(7000059, 2);
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), t.getCardInfo(this.data.cardId, this), t.getCardConfig(this.setCardConfig);
    },
    onShareAppMessage: function() {
        var t = this.data.title, e = "";
        if (a.globalData.wxappInfo && a.globalData.wxappInfo.wxShare) {
            var o = a.globalData.wxappInfo.wxShare.tle, i = a.globalData.wxappInfo.wxShare.p, n = a.globalData.wxappInfo.wxShare.it, l = a.globalData.wxappInfo.wxShare.tt;
            o && l && (t = o), i && n && (e = i);
        }
        return {
            title: t,
            imageUrl: e
        };
    },
    showAdvertising: function(t) {
        a.globalData.wxAppRequest.logDog(7000059, 1), a.globalData.wxAppRequest.logDog(7000032, 0), 
        a.globalData.isVerFree ? a.globalData.wxAppRequest.logDog(7000047, 1) : a.globalData.wxAppRequest.logDog(7000047, 4), 
        wx.navigateTo({
            url: "/pages/advertising/advertising?ori=0"
        });
    },
    showVisitorTip: function() {
        function a() {
            setTimeout(function() {
                t.setData({
                    visitorTipFlag: !1
                });
            }, 2e3);
        }
        var t = this;
        setTimeout(function() {
            t.setData({
                fadeShowFlag: !0
            }), a();
        }, 2e3);
    },
    visitHandler: function(a) {
        var t = a.target.dataset.cid;
        wx.navigateTo({
            url: "/pages/card/card?id=" + t
        });
    }
});