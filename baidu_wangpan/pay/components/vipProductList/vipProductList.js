var t = require("../../api/vipApi.js");

Component({
    properties: {
        chooseType: {
            type: String
        },
        productType: {
            type: String
        },
        userVipStatus: {
            type: String
        }
    },
    data: {
        vipProductName: [ "vip1_1y", "vip1_3m", "vip1_1m" ],
        svipProductName: [ "vip2_1y", "vip2_3m", "vip2_1m" ],
        buyTime: {
            "1y": 12,
            "3m": 3
        },
        vipList: [],
        svipList: [],
        choosedProductId: "",
        choosedProductPrice: "",
        idPriceObj: {},
        idPriceNoteObj: {},
        idNameObj: {},
        choosedProductIdCanBuy: 1,
        svipDefaultCanBuyProductId: "",
        vipDefaultCanBuyProductId: ""
    },
    created: function() {
        var e = this;
        t.vipApi.getProductList({
            cluster: ""
        }).then(function(t) {
            var r = t.data.product_infos, d = [], c = [], i = e.data.vipProductName, o = e.data.svipProductName, a = "", u = "", p = {}, s = {}, n = {}, P = !0, v = !1, h = void 0;
            try {
                for (var y, m = r[Symbol.iterator](); !(P = (y = m.next()).done); P = !0) {
                    var _ = y.value;
                    _.price = parseFloat(_.price / 100, 10);
                    var l = _.product_name.split("_")[1];
                    _.priceNote = Math.ceil(_.price / e.data.buyTime[l] * 10) / 10, _.showJiaobiao = _.product_name.indexOf("1y") > -1, 
                    p[_.product_id] = _.price, s[_.product_id] = _.priceNote, n[_.product_id] = _.product_name, 
                    i.indexOf(_.product_name) > -1 ? (1 == +_.can_buy && (a = _.product_id), d.unshift(_)) : o.indexOf(_.product_name) > -1 && (1 == +_.can_buy && (u = _.product_id), 
                    c.unshift(_));
                }
            } catch (t) {
                v = !0, h = t;
            } finally {
                try {
                    !P && m.return && m.return();
                } finally {
                    if (v) throw h;
                }
            }
            var f = "svip" === e.properties.chooseType ? u : a;
            e.setData({
                vipList: d,
                svipList: c,
                svipDefaultCanBuyProductId: u,
                vipDefaultCanBuyProductId: a,
                choosedProductId: f,
                idPriceObj: p,
                idPriceNoteObj: s,
                idNameObj: n,
                choosedProductPrice: p[f]
            }), e.triggerEvent("changeProduct", {
                productId: f,
                productIdCanBuy: 1,
                productName: n[f],
                productPrice: p[f],
                productPriceNote: s[f]
            });
        });
    },
    observers: {
        chooseType: function(t) {
            var e = "svip" === t ? this.data.svipDefaultCanBuyProductId : this.data.vipDefaultCanBuyProductId;
            this.data.svipDefaultCanBuyProductId && (this.setData({
                choosedProductId: e,
                choosedProductPrice: this.data.idPriceObj[e],
                choosedProductIdCanBuy: 1
            }), this.triggerEvent("changeProduct", {
                productId: e,
                productIdCanBuy: 1,
                productName: this.data.idNameObj[e],
                productPrice: this.data.idPriceObj[e],
                productPriceNote: this.data.idPriceNoteObj[e]
            }));
        }
    },
    methods: {
        changeProduct: function(t) {
            var e = t.currentTarget.dataset;
            this.setData({
                choosedProductId: e.productId,
                choosedProductPrice: e.productPrice,
                choosedProductIdCanBuy: e.canBuy
            }), this.triggerEvent("changeProduct", {
                productId: e.productId,
                productIdCanBuy: e.canBuy,
                productPrice: e.productPrice,
                productName: e.productName,
                productPriceNote: e.productPriceNote
            }), wx.log.send({
                type: "wx_pay_home_product_" + e.productName + "_click",
                value: "会员中心-首页-商品-名称-点击切换"
            });
        },
        payCheck: function(t) {
            this.triggerEvent("payCallback", t.detail);
        }
    }
});