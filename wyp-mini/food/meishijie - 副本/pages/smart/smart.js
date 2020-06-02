var t = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        winHeight: "",
        shareicon: "../../images/rd_b_fx@3x.png",
        smartbg: "https://s1.st.meishij.net/p2/20180517/20180517114618_166.jpg",
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !1,
        smartW3Show: "",
        sw3InputFocus: !1,
        scTipsRes: "",
        scChecked: [],
        scInputValue: "",
        foodsName: "",
        foodsId: ""
    },
    onShareAppMessage: function(t) {
        return t.from, {
            title: "智能组菜 - 有什么食材做什么菜",
            path: "/pages/index/index?goSmart=1",
            imageUrl: "https://s1.st.meishij.net/p2/20190514/20190514152042_276.jpg",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onLoad: function(t) {
        this.setData({
            option: t
        });
    },
    scCheckedFun: function(t) {
        var e = -1;
        for (i in that.data.scChecked) i.id == t && (e = 1);
        return e;
    },
    bindScInput: function(e) {
        var a = this, s = e.detail.value.trim();
        "" == s ? a.setData({
            scTipsRes: ""
        }) : wx.request({
            url: t.globalData.newlocalhost + "/shicai/search",
            data: {
                format: "json",
                keyword: s
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                a.setData({
                    scTipsRes: t.data.data
                });
            }
        });
    },
    bindTipScClick: function(t) {
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.title, s = this, i = {
            id: e,
            title: a,
            img: t.currentTarget.dataset.img
        };
        if (-1 != JSON.stringify(s.data.scChecked).indexOf(JSON.stringify(i))) ; else {
            var n = s.data.scChecked;
            n.push(i);
            var o = s.data.foodsName, c = s.data.foodsId;
            s.setData({
                scChecked: n,
                foodsId: c + e + ",",
                foodsName: o + a + ","
            });
        }
        setTimeout(function() {
            s.shutSw3();
        }, 200);
    },
    removeSc: function(t) {
        var e, a, s = this, i = t.currentTarget.dataset.id;
        for (a in s.data.scChecked) if (s.data.scChecked[a].id == i) {
            e = a;
            break;
        }
        var n = s.data.scChecked;
        n.splice(e, 1);
        var o = s.data.foodsName.split(",");
        o.splice(e, 1), o = o.join(",");
        var c = s.data.foodsId.split(",");
        c.splice(e, 1), c = c.join(","), s.setData({
            scChecked: n,
            foodsId: c,
            foodsName: o
        });
    },
    objinArrar: function(t, e) {
        for (var a = !1, s = -1, i = 0; i < t.length; i++) if (t[i].id == e.id) return a = !0, 
        s = i, i;
        return a ? s : -1;
    },
    addSc: function() {
        var t = this;
        t.setData({
            smartW3Show: "show"
        }), setTimeout(function() {
            t.setData({
                sw3InputFocus: !0
            });
        }, 310);
    },
    shutSw3: function() {
        this.setData({
            smartW3Show: " ",
            sw3InputFocus: !1,
            scTipsRes: "",
            scInputValue: ""
        });
    },
    loadMore: function(t) {
        var e = this;
        e.setData({
            requeseDone: !1
        }), e.loadSc(t);
    }
});