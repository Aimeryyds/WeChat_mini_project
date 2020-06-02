var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = {
    getStorageSync: function(e) {
        return my.getStorageSync({
            key: e
        }).data || "";
    },
    getStorage: function(e) {
        return my.getStorage(e);
    },
    setStorageSync: function(e, t) {
        return my.setStorageSync({
            key: e,
            data: t
        });
    },
    setStorage: function(e) {
        return my.setStorage(e);
    },
    login: function(e) {
        return my.getAuthCode(Object.assign(e, {
            scopes: "auth_base",
            success: function(e) {
                if (e.authErrorScope) return console.error("无法获取授权码，" + e.authErrorScope), !1;
                var t = getApp();
                t.apiRequest("weixin", "get_aliuserinf", {
                    data: {
                        code: e.authCode
                    },
                    success: function(e) {
                        var n = e.data || {};
                        if ("OK" != n.result) return console.error(n.errmsg || "获取会员信息失败"), !1;
                        var o = n.data || "";
                        my.setStorageSync({
                            key: "openid",
                            data: o
                        }), t.getSignIn(o);
                    },
                    fail: function(e) {
                        var t = e[0], n = t.data, o = t.error, r = t.status;
                        console.error(n + " (errorCode: " + o + ", httpStatus: " + r + ")");
                    }
                });
            }
        }));
    },
    showToast: function(e) {
        return e.content = e.title || "", delete e.title, e.icon && (e.type = e.icon, delete e.icon), 
        my.showToast(e);
    },
    showModal: function(e) {
        return void 0 !== e.showCancel && !1 === e.showCancel ? my.alert(e) : my.confirm(e);
    },
    getSystemInfo: function(e) {
        return my.getSystemInfo(e);
    },
    request: function(t) {
        return t.header && (t.headers = Object.assign({}, t.header), delete t.header), t.complete || "object" !== e(t.complete) || delete t.complete, 
        my.httpRequest(t);
    },
    makePhoneCall: function(e) {
        return e.number = e.phoneNumber, delete e.phoneNumber, my.makePhoneCall(e);
    },
    switchTab: function(e) {
        return my.switchTab(e);
    },
    navigateTo: function(e) {
        return my.navigateTo(e);
    },
    navigateBack: function(e) {
        return my.navigateBack(e);
    },
    redirectTo: function(e) {
        return my.redirectTo(e);
    },
    setNavigationBarTitle: function(e) {
        return my.setNavigationBar(e);
    },
    pageScrollTo: function(e) {
        return my.pageScrollTo(e);
    },
    canIUse: function(e) {
        return my.canIUse(e);
    },
    showLoading: function(e) {
        return e.content = e.title || "", my.showLoading(e);
    },
    hideLoading: function(e) {
        return my.hideLoading(e);
    },
    hideToast: function(e) {
        return my.hideToast();
    },
    setClipboardData: function(e) {
        return e.text = e.data || "", e.data && delete e.data, my.setClipboard(e);
    },
    getClipboardData: function(e) {
        return my.getClipboard(e);
    },
    chooseImage: function(e) {
        return my.chooseImage(e);
    },
    previewImage: function(e) {
        return my.previewImage(e);
    },
    createAnimation: function(e) {
        return e.timeFunction = e.timingFunction || "linear", e.timingFunction && delete e.timingFunction, 
        my.createAnimation(e);
    },
    showActionSheet: function(e) {
        return e.items = e.itemList || [], e.itemList && delete e.itemList, my.showActionSheet(e);
    },
    requestPayment: function(e) {
        var t = [ "timeStamp", "nonceStr", "package", "signType", "paySign" ];
        for (var n in e) t.indexOf(n) > -1 && delete e[n];
        return my.tradePay(e);
    },
    getLocation: function(e) {
        return e.type = "wgs84" == e.type ? 0 : 1, my.getLocation(e);
    },
    chooseLocation: function(e) {
        return my.chooseLocation(e);
    }
};