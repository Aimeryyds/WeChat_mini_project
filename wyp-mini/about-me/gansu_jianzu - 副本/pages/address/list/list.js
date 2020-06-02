function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var r = e(require("../../../network/api")), t = (e(require("../../../utils/const.js")), 
e(require("../../../utils/util")));

e(require("../../../utils/notification.js"));

Page({
    data: {
        list: []
    },
    onLoad: function(e) {
        if (wx.showLoading({
            title: "请稍后"
        }), e.order) {
            console.log(t.default.parse(e.order), "+++++++++++++++++++++++");
            var r = t.default.parse(e.order);
            this.setData({
                order: r,
                goodsId: r.goodsList[0].id,
                formData: t.default.parse(e.formData)
            });
        } else if (e.scoreorder) {
            var a = t.default.parse(e.scoreorder);
            "order" == e.type && this.setData({
                type: e.type
            }), this.setData({
                scoreorder: a,
                formData: t.default.parse(e.formData)
            });
        }
    },
    onReady: function() {},
    onShow: function() {
        if (wx.showLoading({
            title: "请稍后"
        }), this.data.order) {
            var e = this.data.goodsId;
            this.queryorderList({
                goodsId: e,
                pageSize: 999,
                pageNo: 1
            });
        } else this.data.scoreorder, this.queryAddressList();
    },
    makenew: function(e) {
        if (this.data.order) {
            var r = this.data.order;
            wx.redirectTo({
                url: "/pages/address/new/new?type=new&order=" + t.default.stringify(r) + "&formData=" + t.default.stringify(this.data.formData)
            });
        } else if (this.data.scoreorder) {
            var a = this.data.scoreorder;
            "order" == this.data.type ? wx.redirectTo({
                url: "/pages/address/new/new?type=new&scoreorder=" + t.default.stringify(a) + "&formData=" + t.default.stringify(this.data.formData) + "&ordertype=order"
            }) : wx.redirectTo({
                url: "/pages/address/new/new?type=new&scoreorder=" + t.default.stringify(a) + "&formData=" + t.default.stringify(this.data.formData)
            });
        } else wx.navigateTo({
            url: "/pages/address/new/new?type=new"
        });
    },
    makeorder: function(e) {
        if (this.data.order) {
            var r = e.currentTarget.dataset.address;
            console.log(r, "++++++++++++++");
            var a = this.data.order;
            a.consignee = r, wx.redirectTo({
                url: "/pages/orders/new/new?from=address&order=" + t.default.stringify(a) + "&formData=" + t.default.stringify(this.data.formData)
            });
        } else if (this.data.scoreorder) {
            var s = e.currentTarget.dataset.address;
            console.log(s, "++++++++++++++");
            var o = this.data.scoreorder;
            o.consignee = s, this.data.type ? (console.log(o, "scoreorder"), wx.redirectTo({
                url: "/pages/orders/new/new?from=address&order=" + t.default.stringify(o) + "&formData=" + t.default.stringify(this.data.formData)
            })) : wx.redirectTo({
                url: "/pages/mine/scores/score_new_order?from=address&scoreorder=" + t.default.stringify(o) + "&formData=" + t.default.stringify(this.data.formData)
            });
        }
    },
    queryAddressList: function() {
        var e = this;
        r.default.queryAddressList({
            pageSize: 999,
            pageNo: 1,
            gpsType: "all"
        }).then(function(r) {
            wx.stopPullDownRefresh(), wx.hideLoading(), console.log("bingooooooooooooo", r), 
            e.setData({
                list: r.data.data,
                isShow: !0
            });
        }).catch(function(e) {
            return console.log(e);
        });
    },
    editaddress: function(e) {
        var r = e.currentTarget.dataset.item;
        if (this.data.order) {
            var a = this.data.order;
            wx.redirectTo({
                url: "/pages/address/new/new?type=edit&item=" + t.default.stringify(r) + "&order=" + t.default.stringify(a) + "&formData=" + t.default.stringify(this.data.formData)
            });
        } else if (this.data.scoreorder) {
            var s = this.data.scoreorder;
            "order" == this.data.type ? wx.redirectTo({
                url: "/pages/address/new/new?type=edit&scoreorder=" + t.default.stringify(s) + "&item=" + t.default.stringify(r) + "&formData=" + t.default.stringify(this.data.formData) + "&ordertype=order"
            }) : wx.redirectTo({
                url: "/pages/address/new/new?type=edit&scoreorder=" + t.default.stringify(s) + "&item=" + t.default.stringify(r) + "&formData=" + t.default.stringify(this.data.formData)
            });
        } else wx.navigateTo({
            url: "/pages/address/new/new?type=edit&item=" + t.default.stringify(r)
        });
    },
    queryorderList: function(e) {
        var t = this, a = this;
        r.default.getOrderConsignee(e).then(function(e) {
            wx.stopPullDownRefresh(), wx.hideLoading();
            for (var r = e.data, a = [], s = [], o = 0; o < r.length; o++) 1 == r[o].outRange ? s.push(r[o]) : a.push(r[o]);
            t.setData({
                list: a,
                isShow: !0,
                outlist: s
            });
        }).catch(function(e) {
            console.log(e), a.setData({
                isShow: !0
            });
        });
    }
});