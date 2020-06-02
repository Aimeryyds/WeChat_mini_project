var t = require("api.js"), e = require("util.js");

module.exports = {
    getPhoneNumber: function(e, r) {
        this.request(t.wx_getPhoneNumber_url, e, r);
    },
    getBankList: function(e) {
        this.request(t.bank_list_url, {}, e);
    },
    getShopInfo: function(e) {
        this.request(t.shop_info_url, {}, e);
    },
    getShopBannerList: function(e, r) {
        this.request(t.shop_banners_url, {
            position: e
        }, r);
    },
    getShopCouponList: function(e) {
        this.request(t.shop_coupons_url, {}, e);
    },
    getShopModules: function(e) {
        this.request(t.shop_modules_url, {}, e);
    },
    getBanner: function(e, r) {
        this.request(t.sys_banner_url + "/" + e, {}, r);
    },
    getSysLink: function(e, r) {
        this.request(t.sys_link_url + "/" + e, {}, r);
    },
    getSysWin: function(e, r) {
        this.request(t.sys_win_url + "/" + e, {}, r);
    },
    getAlbumInfo: function(e, r) {
        this.request(t.shop_album_url + "/" + e, {}, r);
    },
    getRecommendList: function(e, r) {
        this.request(t.shop_recommend_list_url, {
            type: e
        }, r);
    },
    receiveCoupon: function(e, r) {
        this.request(t.coupon_receive_url, {
            couponId: e
        }, r);
    },
    getHotList: function(e) {
        this.request(t.goods_list_url, {
            isHot: 1
        }, e);
    },
    getGoodsByCate: function(e, r) {
        this.request(t.goods_list_url, {
            cid: e
        }, r);
    },
    getGoodsList: function(e, r) {
        this.request(t.goods_list_url, e, r);
    },
    getGoodsDetail: function(e, r) {
        this.request(t.goods_url + "/" + e, {}, r);
    },
    getCategories: function(e, r) {
        this.request(t.goods_categories_url, e, r);
    },
    add2Cart: function(e, r) {
        this.request(t.cart_add_url, e, r);
    },
    getCartList: function(e) {
        this.request(t.cart_list_url, {}, e);
    },
    changeCart: function(e, r, s) {
        this.request(t.cart_change_url + "/" + e, {
            number: r
        }, s);
    },
    delCartItem: function(e, r) {
        this.request(t.cart_delete_url + "/" + e, {
            cartId: e
        }, r);
    },
    clearInvalid: function(e) {
        this.request(t.cart_clear_invalid_url, {}, e);
    },
    countCartNum: function(e) {
        this.request(t.cart_count_url, {}, e);
    },
    updateCartNumber: function(e, r, s) {
        this.request(t.cart_updateNumber_url + e, {
            number: r
        }, s);
    },
    getAddrList: function(e) {
        this.request(t.address_list_url, {}, e);
    },
    getDefaultAddr: function(e) {
        this.request(t.address_default_url, {}, e);
    },
    setAddrDefault: function(e, r) {
        this.request(t.address_url + e + "/default", {}, r);
    },
    saveAddr: function(e, r) {
        this.request(t.address_save_url, e, r);
    },
    deleteAddr: function(e, r) {
        this.request(t.address_url + e + "/delete", {}, r);
    },
    updateAddr: function(e, r) {
        this.request(t.address_update_url, e, r);
    },
    getCouponDiscount: function(e, r, s) {
        this.request(t.coupon_discount_url, {
            price: e,
            originalLimit: r
        }, s);
    },
    getCouponDiscountList: function(e, r, s) {
        this.request(t.coupon_discount_list_url, {
            price: e,
            originalLimit: r
        }, s);
    },
    createOrders: function(e, r) {
        this.request(t.orders_create_url, e, r);
    },
    getOrdersDetail: function(e, r) {
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.request(t.orders_detail_url + e, s, r);
    },
    getOrdersList: function(e, r) {
        this.request(t.orders_list_url, e, r);
    },
    getPayJson: function(e, r) {
        this.request(t.orders_pay_json_url, e, r);
    },
    receiptOrders: function(e, r) {
        this.request(t.orders_detail_url + e + "/receipt", {}, r);
    },
    deleteOrders: function(e, r) {
        this.request(t.orders_detail_url + e + "/delete", {}, r);
    },
    countOrders: function(e) {
        this.request(t.orders_statics_url, {}, e);
    },
    getCouponList: function(e) {
        this.request(t.coupon_list_url, {}, e);
    },
    getCouponChooseList: function(e, r, s) {
        this.request(t.coupon_choose_list_url, {
            payPrice: e,
            type: r
        }, s);
    },
    getPagesInfo: function(e, r) {
        this.request(t.pages_url + "/" + e, {}, r);
    },
    getLotteryActivity: function(e) {
        this.request(t.lottery_activity_url, {}, e);
    },
    getLotteryAwards: function(e, r, s) {
        this.request(t.lottery_url + "/" + e + "/awardList", r, s);
    },
    actShare: function(e, r) {
        this.request(t.lottery_share_url + "/" + e, {}, r);
    },
    lotteryDraw: function(e, r) {
        this.request(t.lottery_draw_url + "/" + e, {}, r);
    },
    getLotteryInfo: function(e, r) {
        this.request(t.lottery_url + "/info/" + e, {}, r);
    },
    lotteryCreateOrders: function(e, r) {
        this.request(t.lottery_createOrders_url, e, r);
    },
    getDistributionInfo: function(e) {
        this.request(t.distribution_info_url, {}, e);
    },
    bindSpokesman: function(e, r) {
        this.request(t.custom_bind_url + e, {}, r);
    },
    applySpokesman: function(e, r) {
        this.request(t.spokesman_apply_url, e, r);
    },
    improveSpokesman: function(e, r) {
        this.request(t.spokesman_improve_url, e, r);
    },
    getSpokesmanInfo: function(e) {
        this.request(t.spokesman_info_url, {}, e);
    },
    calWithdrawAmount: function(e) {
        this.request(t.withdraw_amountCal_url, {}, e);
    },
    getWithdrawAccount: function(e) {
        this.request(t.withdraw_account_url, {}, e);
    },
    applyWithdraw: function(e, r, s) {
        this.request(t.withdraw_apply_url + e, {
            amount: r
        }, s);
    },
    getWithdrawList: function(e, r) {
        this.request(t.withdraw_list_url, e, r);
    },
    getDetailsList: function(e, r) {
        this.request(t.details_list_url, e, r);
    },
    getCustomList: function(e, r) {
        this.request(t.custom_list_url, e, r);
    },
    getGoodsTgList: function(e, r) {
        this.request(t.goods_tglist_url, e, r);
    },
    getQuestionList: function(e) {
        this.request(t.questions_list_url, {}, e);
    },
    getGroupedList: function(e, r) {
        this.request(t.grouped_list_url, e, r);
    },
    getGroupNumberInfo: function(e, r) {
        this.request(t.group_number_url, {
            groupOrderId: e
        }, r);
    },
    getGroupAddress: function(e, r) {
        this.request(t.group_address_url, {
            groupOrderId: e
        }, r);
    },
    getPurchaseMax: function(e, r) {
        this.request(t.purchase_max_url, {
            groupMarketId: e
        }, r);
    },
    getBargainGoodsList: function(e, r, s) {
        this.request(t.bargain_goods_list, e, r, "POST", s);
    },
    getBargainSelfList: function(e, r, s) {
        this.request(t.bargain_self_list, e, r, "POST", s);
    },
    getBargainGoodsInfo: function(e, r) {
        this.request(t.bargain_goods_detail + e, {}, r);
    },
    getBargainOrderInfo: function(e, r, s) {
        this.request(t.bargain_order_info + e, {
            id: r
        }, s);
    },
    createBargain: function(e, r) {
        this.request(t.bargain_create_url, e, r);
    },
    saveBargain: function(e, r) {
        this.request(t.bargain_save_url, e, r);
    },
    getBargainHelpList: function(e, r) {
        this.request(t.bargain_help_list_url, e, r);
    },
    createBargainOrder: function(e, r) {
        this.request(t.baragin_create_order_url, e, r);
    },
    getBargainBanner: function(e) {
        this.request(t.bargain_banner_url, {}, e);
    },
    getBargainRecList: function(e, r) {
        this.request(t.bargain_goods_recommend_url, e, r);
    },
    request: function(r, s, u) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "POST";
        wx.request({
            url: r,
            data: s,
            method: i,
            header: {
                "content-type": "application/x-www-form-urlencoded",
                token: t.token,
                utoken: wx.getStorageSync("utoken")
            },
            success: function(t) {
                if (t && 200 == t.statusCode) if (0 === t.data.code) "function" == typeof u && u(t.data); else {
                    var r = null == t.data.msg ? "error:接口请求错误" : t.data.msg;
                    e.toast(r, function() {
                        setTimeout(function() {
                            wx.hideToast();
                        }, 2e3);
                    });
                } else t && t.statusCode;
            },
            fail: function(t) {},
            complete: function() {}
        });
    }
};