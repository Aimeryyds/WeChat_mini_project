var e = function(e, t) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e)) return function(e, t) {
        var n = [], o = !0, a = !1, i = void 0;
        try {
            for (var l, s = e[Symbol.iterator](); !(o = (l = s.next()).done) && (n.push(l.value), 
            !t || n.length !== t); o = !0) ;
        } catch (e) {
            a = !0, i = e;
        } finally {
            try {
                !o && s.return && s.return();
            } finally {
                if (a) throw i;
            }
        }
        return n;
    }(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}, t = getApp(), n = require("../..//utils/wechat.js"), o = require("../..//utils/core.js");

Page({
    data: {
        src: "",
        paths: {
            goods: "yb_shop/pages/goods/detail/index",
            kanjia: "yb_shop/pages/kanjia/goods_info/index",
            pintuan: "yb_shop/pages/pintuan/pages/goods/detail"
        }
    },
    dosave: function() {
        0 < this.data.src.length ? (wx.showLoading({
            title: "保存中..."
        }), n.saveImageToPhotosAlbum(this.data.src).then(function(e) {
            wx.hideLoading(), o.alert("海报保存成功");
        }).catch(function(e) {
            wx.hideLoading(), o.alert("海报保存失败,请重试");
        })) : o.alert("海报正在生成,请稍候");
    },
    onLoad: function(a) {
        console.log(a);
        var i = this.data.paths[a.share_type], l = a.id, s = t.util.makeurl({
            url: "entry/wxapp/net_img",
            data: {
                url: encodeURIComponent(a.img)
            }
        });
        a.img = s, console.log(s), o.loading("海报生成中");
        var r = wx.createCanvasContext("poster");
        r.clearRect(0, 0, 0, 0), r.setFillStyle("#ffffff"), r.fillRect(0, 0, 750, 1030);
        var c = this.textByteLength(a.title, 34), h = e(c, 3), d = (h[0], h[1]);
        h[2], r.setTextAlign("left"), r.setFontSize(28), r.setFillStyle("#333333");
        for (var u = 0; u < d.length; u++) r.fillText(d[u], 12, 805 + 35 * u);
        var g = "原价￥" + a.original_price;
        r.setFontSize(22), r.setFillStyle("#818181"), r.fillText(g, 12, 920);
        var f = r.measureText(g);
        r.setFontSize(22), r.setFillStyle("#333333"), r.fillText("优惠价￥", 12, 990), r.setFontSize(48), 
        r.setFillStyle("#d92d20"), r.fillText(a.price, 100, 993), r.setStrokeStyle("#818181"), 
        r.beginPath(), r.setLineWidth(1), r.moveTo(12, 911), r.lineTo(f.width + 12, 911), 
        r.stroke();
        var p = t.util.makeurl({
            url: "entry/wxapp/qr_code",
            data: {
                path: i,
                scene: l,
                pid: t.getCache("userinfo").uid
            }
        });
        console.log(p);
        var m = t.util.md5("share_type=" + a.share_type + "&id=" + a.id), v = t.getCache(m);
        console.log(v);
        var y = this;
        "" != v ? (console.log("has save !!!!!!!"), r.drawImage(v, 490, 765, 236, 236), 
        n.downloadFile(a.img).then(function(e) {
            console.log(e), r.drawImage(e.tempFilePath, 0, 0, 750, 750), r.draw(!1, function() {
                wx.canvasToTempFilePath({
                    destWidth: 750,
                    destHeight: 1030,
                    canvasId: "poster",
                    success: function(e) {
                        o.hideLoading(), console.log(e.tempFilePath), y.setData({
                            src: e.tempFilePath
                        });
                    }
                });
            });
        }).catch(function(e) {
            o.alert("商品图片无法下载,海报生成失败");
        })) : (console.log("not save !!!!!!!"), n.downloadFile(a.img).then(function(e) {
            return console.log(e), r.drawImage(e.tempFilePath, 0, 0, 750, 750), n.downloadFile(p);
        }).then(function(e) {
            return console.log(e), n.saveFile(e.tempFilePath);
        }).then(function(e) {
            console.log(e);
            var n = e.savedFilePath;
            t.setCache(m, n), r.drawImage(n, 490, 765, 236, 236), r.draw(!1, function() {
                wx.canvasToTempFilePath({
                    destWidth: 750,
                    destHeight: 1030,
                    canvasId: "poster",
                    success: function(e) {
                        console.log(e), o.hideLoading(), y.setData({
                            src: e.tempFilePath
                        });
                    }
                });
            });
        }).catch(function(e) {
            o.alert("商品图片无法下载,海报生成失败");
        }));
    },
    textByteLength: function(e, t) {
        for (var n = 0, o = 1, a = 0, i = [], l = 0; l < e.length; l++) 255 < e.charCodeAt(l) ? o * t < (n += 2) && (n++, 
        i.push(e.slice(a, l)), a = l, o++) : o * t < ++n && (i.push(e.slice(a, l)), a = l, 
        o++);
        return i.push(e.slice(a, e.length)), [ n, i, o ];
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});