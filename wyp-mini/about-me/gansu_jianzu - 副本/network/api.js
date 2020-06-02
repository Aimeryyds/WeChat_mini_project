function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function t() {
    return new f.default(function(e, r) {
        wx.login({
            success: function(r) {
                r.errMsg;
                var t = r.code;
                e(t);
            }
        });
    }).then(function(e) {
        return (0, g.default)(v + "/user/init", {
            headers: {
                "x-comp-token": getApp().globalData.token || ""
            },
            "content-type": "application/json",
            method: "POST",
            body: {
                code: e
            }
        });
    }).then(function(e) {
        return m.default.post(q.default.action.LOGIN, {
            accessToken: e.data.accessToken,
            userInfo: e.data
        }), new f.default(function(r) {
            return r(e.data);
        });
    });
}

function n() {
    return wx.getStorageSync("accessToken") ? new f.default(function(e) {
        return e(wx.getStorageSync("userinfo"));
    }) : t();
}

function o(e, r) {
    return n().then(function(t) {
        var n = {
            headers: {
                "x-comp-token": getApp().globalData.token || "",
                accesstoken: getApp().globalData.accessToken || "",
                "x-city-code": getApp().globalData.city ? getApp().globalData.city.code : ""
            },
            method: "GET",
            qs: r
        };
        return getApp().log("request get ---- " + e), (0, g.default)(e, n);
    });
}

function u(e, r) {
    return n().then(function(t) {
        var n = {
            headers: {
                "x-comp-token": getApp().globalData.token || "",
                accesstoken: getApp().globalData.accessToken || "",
                "x-city-code": getApp().globalData.city ? getApp().globalData.city.code : ""
            },
            "content-type": "application/json",
            method: "POST",
            body: r
        };
        return getApp().log("request post ---- " + e), (0, g.default)(e, n);
    });
}

function i(e, r, t) {
    return (0, y.uploadImg)(e, r, t);
}

function c(e) {
    return o(v + "/project/list", e);
}

function a(e) {
    return o(v + "/sponsor/detail", e);
}

function a(e) {
    return o(v + "/sponsor/detail", e);
}

function s(e) {
    return o(v + "/center/store/list", e);
}

function s(e) {
    return o(v + "/center/store/list", e);
}

function d(e) {
    return o(v + "/cy/mine/diningTableDetail", e);
}

e(require("../utils/util.js"));

var l, f = e(require("../utils/es6-promise.min")), y = require("./request.js"), g = e(y), p = e(require("../utils/const")), q = e(require("../utils/const.js")), m = e(require("../utils/notification")), v = (getApp(), 
p.default.debug ? p.default.devEndPoint : p.default.proEndPoint), C = p.default.debug ? p.default.devTongji : p.default.proTongji, h = p.default.debug ? p.default.devUploadEndPoint : p.default.proUploadEndPoint;

module.exports = (l = {
    loginWx: t,
    errors: function(e) {
        switch (e) {
          case 101:
            return "商品已下架";

          case 102:
            return "商品库存不足";

          case 201:
            return "收货地址不存在";

          case 301:
            return "剩余积分不足";

          case 401:
            return "已达到购买次数限制";

          case 1000101:
            return "申请已提交，人工审核中，审核通过后需要重新进入小程序查看。";

          case 1000102:
            return "您的申请正在审核中,请耐心等待！";

          case 501:
            return "此优惠券可领取数量达到上限";

          case 502:
            return "优惠券已被领光";

          case 503:
            return "用户不存在";

          case 222000225:
            return "已经领取过此张会员卡";

          case 222000226:
            return '累计消费未满"+card.getConsumeMoney()+"元，暂不能领取';

          case 11001001:
            return "appid不能为空";

          case 11001002:
            return "收货地址不能为空";

          case 11001003:
            return "配送方式不能为空";

          case 11001004:
            return "提货人手机号不能为空";

          case 11001005:
            return "商品不能为空";

          case 11001006:
            return "商品库存不足";

          case 11001007:
            return "商品不能为空";

          case 11001008:
            return "sku失效";

          case 11001009:
            return "来晚了，该团已满！";

          case 11001010:
            return "已经有礼品卡使用过了";

          case 11001011:
            return "有礼品卡已经过期了！";

          case 11002001:
            return "该订单为非0元订单！";

          case 11001e3:
            return "用户已撤销，暂不能领取!";

          case 1001001:
            return "订单状态为已完成，不能申请退款!";

          case 1001017:
            return "当前收货地址不支持配送，请修改收货地址";

          case 11001019:
            return "购买金额未达到起送金额";
        }
    },
    onAppShow: function(e) {
        return u(C + "/collection/visitOto", e);
    },
    onAppHide: function(e) {
        return u(C + "/collection/exitOto", e);
    },
    queryAreas: function(e) {
        return o(v + "/sys/region", e);
    },
    uploadImage: function(e) {
        return i("" + h, e);
    },
    init: function(e) {
        return o(v + "/index/all", e);
    },
    getIndexMenu: function(e) {
        return o(v + "/index/menu", e);
    },
    getBrandList: function(e) {
        return o(v + "/index/brand/list", e);
    },
    getStoreList: function(e) {
        return o(v + "/index/store/list", e);
    },
    getGoodsList: function(e) {
        return o(v + "/index/goods/list", e);
    },
    indexSearch: function(e) {
        return u(v + "/index/search", e);
    },
    saveIndexKeword: function(e) {
        return u(v + "/index/kw/save", e);
    },
    getIndexKeWordList: function(e) {
        return o(v + "/index/kw/list", e);
    },
    removeIndexKeWord: function(e) {
        return u(v + "/index/kw/remove", e);
    },
    getIndexCities: function(e) {
        return o(v + "/index/cities", e);
    },
    queryAllCity: function(e) {
        return o(v + "/index/allCities", e);
    },
    searchIndexCity: function(e) {
        return o(v + "/index/city/search", e);
    },
    selectIndexCity: function(e) {
        return u(v + "/index/city/select", e);
    },
    locationIndexCity: function(e) {
        return u(v + "/index/city/location", e);
    },
    getBrandListByLocation: function(e) {
        return o(v + "/brand/list", e);
    },
    getStoreListByLocation: function(e) {
        return o(v + "/store/list", e);
    },
    getStoreDetail: function(e) {
        return o(v + "/store/detail", e);
    },
    getStorecategoryList: function(e) {
        return o(v + "/storeGoods/categoryList", e);
    },
    getStoreGoodsListByCategory: function(e) {
        return o(v + "/storeGoods/category/goodsList", e);
    },
    getStoreGoodsList: function(e) {
        return o(v + "/storeGoods/list", e);
    },
    getStoreGoodDetail: function(e) {
        return o(v + "/storeGoods/detail", e);
    },
    getGoodStock: function(e) {
        return o(v + "/storeGoods/stock", e);
    },
    checkoutSingleOrder: function(e) {
        return o(v + "/order/toOrder", e);
    },
    createSingleOrder: function(e) {
        return u(v + "/order/createOrder", e);
    },
    queryOrders: function(e) {
        return o(v + "/order/list", e);
    },
    showOrder: function(e) {
        return o(v + "/order/detail", e);
    },
    cancelOrder: function(e) {
        return u(v + "/order/cancel", e);
    },
    getLogistics: function(e) {
        return o(v + "/order/logistics", e);
    },
    checkBeforePay: function(e) {
        return o(v + "/cart/checkBeforePay", e);
    },
    queryPaySign: function(e) {
        return u(v + "/pay/wx/toPay", e);
    },
    getOrderConsignee: function(e) {
        return o(v + "/order/consignee/list", e);
    },
    queryAddressList: function(e) {
        return o(v + "/consignee/list", e);
    },
    createAddress: function(e) {
        return u(v + "/consignee/save", e);
    },
    updataAddress: function(e) {
        return u(v + "/consignee/modify", e);
    },
    queryAddressDetail: function(e) {
        return o(v + "/consignee/detail", e);
    },
    checkAddress: function(e) {
        return u(v + "/consignee/check", e);
    },
    saveMessage: function(e) {
        return u(v + "/message/save", e);
    },
    getVerifyCode: function(e) {
        return u(v + "/jmall/bind/verifyCode", e);
    },
    login: function(e) {
        return u(v + "/user/login", e);
    },
    saveUserInfo: function(e) {
        return u(v + "/user/save", e);
    },
    modifyUserInfo: function(e) {
        return u(v + "/user/modify", e);
    },
    initUser: function(e) {
        return u(v + "/user/init", e);
    },
    getUserLocation: function(e) {
        return o(v + "/user/findLocation", e);
    },
    getUserLocationInfo: function(e) {
        return o(v + "/user/findLocationInfo", e);
    },
    queryUserInfo: function(e) {
        return o(v + "/user/lookup", e);
    },
    updateWXUserInfo: function(e) {
        return u(v + "/user/updateUserInfo", e);
    },
    queryMap: function(e) {
        return u(v + "/map/suggestionPost", e);
    },
    getPageById: function(e) {
        return o(v + "/index/page", e);
    },
    logout: function(e) {
        return u(v + "/user/logout", e);
    },
    queryColor: function(e) {
        return o(v + "/xcx/colorDetail", e);
    },
    queryCustom: function(e) {
        return o(v + "/index/custom", e);
    },
    queryStoreType: function(e) {
        return o(v + "/store/loadStoreType", e);
    },
    queryStoreGoodsList: function(e) {
        return o(v + "/storeGoods/goodsList", e);
    },
    queryProjectList: c
}, r(l, "queryProjectList", c), r(l, "queryProjectDetail", function(e) {
    return o(v + "/project/detail", e);
}), r(l, "queryStaffList", function(e) {
    return o(v + "/staff/list", e);
}), r(l, "queryStaffDetail", function(e) {
    return o(v + "/staff/detail", e);
}), r(l, "queryBookSetting", function(e) {
    return u(v + "/booking/toBook/v3", e);
}), r(l, "queryLoadTime", function(e) {
    return o(v + "/booking/loadTime", e);
}), r(l, "querySelectProjectList", function(e) {
    return o(v + "/project/projectList", e);
}), r(l, "querySelectStaffList", function(e) {
    return o(v + "/staff/staffList", e);
}), r(l, "commitBookOrder", function(e) {
    return u(v + "/booking/book/v2", e);
}), r(l, "queryBookList", function(e) {
    return o(v + "/booking/list", e);
}), r(l, "queryBookDetail", function(e) {
    return o(v + "/booking/detail/v2", e);
}), r(l, "cancelBook", function(e) {
    return u(v + "/booking/cancel", e);
}), r(l, "queryAlbumsList", function(e) {
    return o(v + "/albums/list", e);
}), r(l, "receiveCoupon", function(e) {
    return u(v + "/customerCoupon/receive", e);
}), r(l, "queryCouponList", function(e) {
    return o(v + "/customerCoupon/list", e);
}), r(l, "queryCouponDetail", function(e) {
    return o(v + "/customerCoupon/detail", e);
}), r(l, "queryOrderCouponList", function(e) {
    return o(v + "/customerCoupon/availableList", e);
}), r(l, "queryCardList", function(e) {
    return o(v + "/customerCard/list", e);
}), r(l, "queryCardDetail", function(e) {
    return o(v + "/customerCard/detail", e);
}), r(l, "receiveCard", function(e) {
    return u(v + "/customerCard/receive", e);
}), r(l, "queryOrderCardList", function(e) {
    return o(v + "/customerCard/availableList", e);
}), r(l, "bindMobile", function(e) {
    return u(v + "/jmall/bind/excute", e);
}), r(l, "checkVerifyCode", function(e) {
    return u(v + "/jmall/bind/verifyCodeCheck", e);
}), r(l, "checkIsBindMobile", function(e) {
    return o(v + "/jmall/bind/check", e);
}), r(l, "checkBindMobileIsExist", function(e) {
    return o(v + "/jmall/bind/mobileCheck", e);
}), r(l, "queryScoreBannerList", function(e) {
    return o(v + "/jmall/index/all", e);
}), r(l, "queryScoreGoodsList", function(e) {
    return o(v + "/jmall/index/goodsList", e);
}), r(l, "queryScoreUserCenter", function(e) {
    return o(v + "/jmall/user/center", e);
}), r(l, "queryScoreGoodsDetail", function(e) {
    return o(v + "/jmall/goods/detail", e);
}), r(l, "checkScoreOrder", function(e) {
    return o(v + "/jmall/order/prepare", e);
}), r(l, "scoreOrderCreate", function(e) {
    return u(v + "/jmall/order/create", e);
}), r(l, "scoreOrderList", function(e) {
    return o(v + "/jmall/order/list", e);
}), r(l, "scoreOrderCount", function(e) {
    return o(v + "/jmall/order/count", e);
}), r(l, "scoreOrderDetail", function(e) {
    return o(v + "/jmall/order/detail", e);
}), r(l, "getStoreType", function(e) {
    return o(v + "/store/loadStoreType", e);
}), r(l, "bookingCheck", function(e) {
    return o(v + "/booking/check", e);
}), r(l, "saleCenter", function(e) {
    return o(v + "/center/toCenter", e);
}), r(l, "mycollectionList", function(e) {
    return o(v + "/center/collection/list", e);
}), r(l, "distributionGoodsList", function(e) {
    return o(v + "/center/goods/list", e);
}), r(l, "distributionClientList", function(e) {
    return o(v + "/center/client/list", e);
}), r(l, "shareGoodsList", function(e) {
    return u(v + "/center/goods/share", e);
}), r(l, "distributionOrderList", function(e) {
    return o(v + "/center/order/list", e);
}), r(l, "centerToWithdraw", function(e) {
    return o(v + "/balance/toWithdraw", e);
}), r(l, "queryWithdraw", function(e) {
    return u(v + "/balance/withdraw", e);
}), r(l, "withdrawRecord", function(e) {
    return o(v + "/balance/account/record", e);
}), r(l, "withdrawDetail", function(e) {
    return o(v + "/balance/withdraw/detail", e);
}), r(l, "setAccountSave", function(e) {
    return u(v + "/balance/account/save", e);
}), r(l, "setBankSave", function(e) {
    return o(v + "/balance/account/banks", e);
}), r(l, "queryToCenter", function(e) {
    return o(v + "/balance/toCenter", e);
}), r(l, "queryCarts", function(e) {
    return o(v + "/cart/myCart", e);
}), r(l, "queryStoreCarts", function(e) {
    return o(v + "/cart/v2/detail", e);
}), r(l, "addToCart", function(e) {
    return u(v + "/cart/add", e);
}), r(l, "updateCartItem", function(e) {
    return u(v + "/cart/update", e);
}), r(l, "clearCart", function(e) {
    return u(v + "/cart/clear", e);
}), r(l, "clearInvalid", function(e) {
    return u(v + "/cart/clearInvalid", e);
}), r(l, "destroyCartItem", function(e) {
    return u(v + "/cart/del", e);
}), r(l, "queryCartStatics", function(e) {
    return o(v + "/cart/statistics", e);
}), r(l, "queryGoodSku", function(e) {
    return o(v + "/goods/sku", e);
}), r(l, "queryDatasourceGoods", function(e) {
    return o(v + "/index/datasource/goods", e);
}), r(l, "queryDatasourceBrands", function(e) {
    return o(v + "/index/datasource/brands", e);
}), r(l, "queryDatasourceStores", function(e) {
    return o(v + "/index/datasource/stores", e);
}), r(l, "queryDatasourceProjects", function(e) {
    return o(v + "/index/datasource/projects", e);
}), r(l, "queryDatasourceGoodsList", function(e) {
    return o(v + "/index/datasource/goodsList", e);
}), r(l, "queryDatasourceMiaosha", function(e) {
    return o(v + "/index/datasource/seckill", e);
}), r(l, "queryDatasourceTuan", function(e) {
    return o(v + "/index/datasource/group", e);
}), r(l, "queryDatasourceCoupon", function(e) {
    return o(v + "/index/datasource/coupons", e);
}), r(l, "confirmCartOrder", function(e) {
    return o(v + "/order/confirm", e);
}), r(l, "commitCartOrder", function(e) {
    return u(v + "/order/commit", e);
}), r(l, "getStates", function(e) {
    return o(v + "/order/log", e);
}), r(l, "confirmOrder", function(e) {
    return u(v + "/order/receive", e);
}), r(l, "getRecruitmentInfo", function(e) {
    return o(v + "/recruitment/info", e);
}), r(l, "applyRecruitment", function(e) {
    return u(v + "/recruitment/apply", e);
}), r(l, "queryConcatPhone", function(e) {
    return o(v + "/index/menu/phone", e);
}), r(l, "getRecruitmentDistribute", function(e) {
    return o(v + "/recruitment/toDistribute", e);
}), r(l, "getStaticticsOrderNum", function(e) {
    return o(v + "/order/staticticsOrderNum", e);
}), r(l, "getSysConfig", function(e) {
    return o(v + "/sys/config", e);
}), r(l, "queryOpenTuanDetail", a), r(l, "queryTuanGoodsSku", function(e) {
    return o(v + "/sponsor/goods/sku", e);
}), r(l, "queryMyTuanList", function(e) {
    return o(v + "/sponsor/mine/list", e);
}), r(l, "queryOpeningList", function(e) {
    return o(v + "/grouppurchase/opening/list", e);
}), r(l, "querySupplyBuy", function(e) {
    return o(v + "/supplyBuy/detail", e);
}), r(l, "saveSupplyBuy", function(e) {
    return u(v + "/supplyBuy/save", e);
}), r(l, "publishSupplyBuy", function(e) {
    return u(v + "/supplyBuy/savePub", e);
}), r(l, "querySupplyDetail", function(e) {
    return o(v + "/supplyBuy/detail", e);
}), r(l, "querySupplyMy", function(e) {
    return o(v + "/supplyBuy/mine", e);
}), r(l, "querySupplyDel", function(e) {
    return u(v + "/supplyBuy/del", e);
}), r(l, "queryRegions", function(e) {
    return o(v + "/sys/region/findById", e);
}), r(l, "queryNewsinfoList", function(e) {
    return o(v + "/index/datasource/infos", e);
}), r(l, "queryNewsinfoDetail", function(e) {
    return o(v + "/info/detail", e);
}), r(l, "queryCategoryList", function(e) {
    return o(v + "/info/category/list", e);
}), r(l, "querySupplyList", function(e) {
    return o(v + "/index/datasource/supplyBuys", e);
}), r(l, "queryMyTuanId", function(e) {
    return o(v + "/order/sponsor/mine", e);
}), r(l, "queryGiftcardList", function(e) {
    return o(v + "/index/datasource/giftCards", e);
}), r(l, "queryMyGiftcard", function(e) {
    return o(v + "/giftCard/mine", e);
}), r(l, "queryGiftcardRecordList", function(e) {
    return o(v + "/giftCard/giveRecord", e);
}), r(l, "queryGiftcardDetail", function(e) {
    return o(v + "/giftCard/mineDetail", e);
}), r(l, "queryGiftCardgiveRecorddetail", function(e) {
    return o(v + "/giftCard/giveRecord/detail", e);
}), r(l, "queryGiveDetail", function(e) {
    return o(v + "/giftCard/giveDetail", e);
}), r(l, "giftcardLargess", function(e) {
    return u(v + "/giftCard/largess", e);
}), r(l, "queryGiftcardReceive", function(e) {
    return u(v + "/giftCard/receive", e);
}), r(l, "queryGiftDetail", function(e) {
    return o(v + "/giftCard/detail", e);
}), r(l, "commitGiftCard", function(e) {
    return u(v + "/giftCard/order/commit", e);
}), r(l, "queryGiftOrderDetail", function(e) {
    return o(v + "/giftCard/order/detail", e);
}), r(l, "onShareStore", function(e) {
    return u(v + "/center/store/share", e);
}), r(l, "queryFenxiaoStores", s), r(l, "isOutRange", function(e) {
    return o(v + "/order/consignee/isOutRange", e);
}), r(l, "clearCartStoreAll", function(e) {
    return u(v + "/cart/clearAll", e);
}), r(l, "queryFenxiaoStoreQr", function(e) {
    return o(v + "/center/store/detail", e);
}), r(l, "queryManjianList", function(e) {
    return o(v + "/index/datasource/fullreduction", e);
}), r(l, "queryOrderGiftCardList", function(e) {
    return o(v + "/giftCard/order/availableList", e);
}), r(l, "queryRevokeLargess", function(e) {
    return u(v + "/giftCard/revokeLargess", e);
}), r(l, "queryUseGiftCard", function(e) {
    return u(v + "/giftCard/useGiftCard", e);
}), r(l, "toPay0Money", function(e) {
    return u(v + "/giftCard/pay", e);
}), r(l, "negotiationHistory", function(e) {
    return o(v + "/refund/negotiationHistory", e);
}), r(l, "queryApply", function(e) {
    return u(v + "/refund/apply", e);
}), r(l, "queryReturnGoodsDetail", function(e) {
    return o(v + "/refund/detail", e);
}), r(l, "queryApplyCancel", function(e) {
    return u(v + "/refund/cancel", e);
}), r(l, "queryLogistics", function(e) {
    return u(v + "/refund/post", e);
}), r(l, "queryApplyModify", function(e) {
    return u(v + "/refund/modify", e);
}), r(l, "queryRefundList", function(e) {
    return u(v + "/refund/list", e);
}), r(l, "indexAllSearch", function(e) {
    return o(v + "/index/search/goods", e);
}), r(l, "indexStoreSearch", function(e) {
    return o(v + "/index/search/store", e);
}), r(l, "queryStoreDatasource", function(e) {
    return u(v + "/store/datasource/list", e);
}), r(l, "queryGoodsProperties", function(e) {
    return u(v + "/index/search/base", e);
}), r(l, "queryIndexGoods", function(e) {
    return u(v + "/index/search/goods", e);
}), r(l, "queryIndexStores", function(e) {
    return u(v + "/index/search/store", e);
}), r(l, "submitFeedback", function(e) {
    return u(v + "/custom/form/feedback/save", e);
}), r(l, "queryAddress", function(e) {
    return o(v + "/map/addressJson", e);
}), r(l, "queryBalance", function(e) {
    return o(v + "/member/recharge/info/balance", e);
}), r(l, "balanceDetailList", function(e) {
    return o(v + "/member/recharge/info/list", e);
}), r(l, "queryToRecharge", function(e) {
    return o(v + "/member/recharge/toRecharge", e);
}), r(l, "queryImmediateRecharge", function(e) {
    return u(v + "/pay/wx/recharge/toPay", e);
}), r(l, "queryIndexCategory", function(e) {
    return o(v + "/index/goodsCategory/list", e);
}), r(l, "bindSimple", function(e) {
    return u(v + "/jmall/bind/simple", e);
}), r(l, "queryDatasourceGoodsListPost", function(e) {
    return u(v + "/index/datasource/goodsList/v2", e);
}), r(l, "queryCollectionGoods", function(e) {
    return o(v + "/collection/goods/list", e);
}), r(l, "queryCollectionStore", function(e) {
    return o(v + "/collection/store/list", e);
}), r(l, "followGoods", function(e) {
    return o(v + "/collection/goods/follow", e);
}), r(l, "unfollowGoods", function(e) {
    return o(v + "/collection/goods/unfollow", e);
}), r(l, "followStore", function(e) {
    return o(v + "/collection/store/follow", e);
}), r(l, "unfollowStore", function(e) {
    return o(v + "/collection/store/unfollow", e);
}), r(l, "seviceCancelOrder", function(e) {
    return u(v + "/booking/cancel", e);
}), r(l, "seviceTailPay", function(e) {
    return u(v + "/booking/pay/tailPay", e);
}), r(l, "seviceToPay", function(e) {
    return u(v + "/booking/pay/toPay", e);
}), r(l, "queryActivity", function(e) {
    return u(v + "/qrcode/activity/receive", e);
}), r(l, "queryCurrentLives", function(e) {
    return o(v + "/live/currentLive", e);
}), r(l, "queryHistoryLives", function(e) {
    return o(v + "/live/historyLive", e);
}), r(l, "queryLiveDetail", function(e) {
    return o(v + "/live/video/detail", e);
}), r(l, "queryFavoriteLives", function(e) {
    return o(v + "/liveUser/myFavorite", e);
}), r(l, "queryMyLives", function(e) {
    return o(v + "/liveUser/myLive", e);
}), r(l, "queryPoster", function(e) {
    return u(v + "/live/createPoster", e);
}), r(l, "checkPusher", function(e) {
    return o(v + "/live/check", e);
}), r(l, "checkAlive", function(e) {
    return u(v + "/liveUser/keepAlive", e);
}), r(l, "shareLive", function(e) {
    return u(v + "/liveUser/share", e);
}), r(l, "playLive", function(e) {
    return u(v + "/liveUser/play", e);
}), r(l, "stopLive", function(e) {
    return u(v + "/liveUser/stopPlay", e);
}), r(l, "playVideo", function(e) {
    return u(v + "/liveUser/watchRecord", e);
}), r(l, "startPush", function(e) {
    return u(v + "/liveUser/startPush", e);
}), r(l, "stopPush", function(e) {
    return u(v + "/liveUser/stopPush", e);
}), r(l, "addLiveFavorite", function(e) {
    return u(v + "/liveUser/mark", e);
}), r(l, "removeLiveFavorite", function(e) {
    return u(v + "/liveUser/remark", e);
}), r(l, "gotoEvaluate", function(e) {
    return o(v + "/evaluate/gotoEvaluate", e);
}), r(l, "queryEvaluatePublish", function(e) {
    return u(v + "/evaluate/publish", e);
}), r(l, "queryEvaluateList", function(e) {
    return o(v + "/evaluate/list", e);
}), r(l, "queryStoreEvaluate", function(e) {
    return o(v + "/evaluate/store", e);
}), r(l, "queryMyEvaluate", function(e) {
    return o(v + "/evaluate/my", e);
}), r(l, "querySetAnonymous", function(e) {
    return u(v + "/evaluate/anonymous", e);
}), r(l, "updateShareCode", function(e) {
    return u(v + "/user/saveCode", e);
}), r(l, "queryIndexCityV2", function(e) {
    return o(v + "/index/city/list", e);
}), r(l, "selectIndexCityV2", function(e) {
    return u(v + "/index/city/select/v2", e);
}), r(l, "queryIndexSearchCity", function(e) {
    return o(v + "/index/city/search/v2", e);
}), r(l, "confirmFoodCartOrder", function(e) {
    return o(v + "/cy/order/confirm", e);
}), r(l, "cyOrderList", function(e) {
    return o(v + "/cy/mine/orderList", e);
}), r(l, "cyOrderDetail", function(e) {
    return o(v + "/cy/mine/orderDetail", e);
}), r(l, "queryTableById", d), r(l, "cyOrderCancel", function(e) {
    return u(v + "/cy/order/cancel", e);
}), r(l, "queryCyTimes", function(e) {
    return o(v + "/booking/loadCyTime", e);
}), r(l, "cyOrderPay", function(e) {
    return u(v + "/cy/order/toPay", e);
}), r(l, "queryTableById", d), r(l, "commitFoodCartOrder", function(e) {
    return u(v + "/cy/order/commit", e);
}), r(l, "cyPay0Money", function(e) {
    return u(v + "/cy/order/pay", e);
}), r(l, "queryHomePage", function(e) {
    return o(v + "/hotel/homePage", e);
}), r(l, "queryHotelDetail", function(e) {
    return o(v + "/hotel/store/detail", e);
}), r(l, "queryHotelBrandList", function(e) {
    return o(v + "/hotel/brand/list", e);
}), r(l, "queryHotelList", function(e) {
    return o(v + "/hotel/list", e);
}), r(l, "queryMyHotelRoomList", function(e) {
    return o(v + "/hotel/room/list", e);
}), r(l, "payMyHotelBook", function(e) {
    return u(v + "/hotel/store/book/pay", e);
}), r(l, "cancelMyHotelBook", function(e) {
    return u(v + "/hotel/store/book/cancel", e);
}), r(l, "queryMyHotelRoomDetail", function(e) {
    return o(v + "/hotel/store/book/detail", e);
}), r(l, "toHotelOrder", function(e) {
    return o(v + "/hotel/store/book/toSave", e);
}), r(l, "createHotelOrder", function(e) {
    return u(v + "/hotel/store/book/save", e);
}), r(l, "getHotelOrderPagSign", function(e) {
    return u(v + "/hotel/store/book/pay", e);
}), r(l, "queryHotelRoomDetail", function(e) {
    return o(v + "/hotel/store/room/detail", e);
}), r(l, "queryComHotelSetting", function(e) {
    return o(v + "/hotel/config/detail", e);
}), r(l, "queryIndexGroup", function(e) {
    return o(v + "/index/groups/list", e);
}), r(l, "queryGroupService", function(e) {
    return o(v + "/index/groups/projects", e);
}), r(l, "queryGroupInfo", function(e) {
    return o(v + "/index/groups/infos", e);
}), r(l, "queryGroupSupply", function(e) {
    return o(v + "/index/groups/supplyBuys", e);
}), l);