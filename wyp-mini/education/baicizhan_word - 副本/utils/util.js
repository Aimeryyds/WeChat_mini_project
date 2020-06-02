Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
};

function _objectWithoutProperties(e, t) {
    var r = {};
    for (var o in e) 0 <= t.indexOf(o) || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
    return r;
}

exports.serialize = serialize;

var getUrlParams = exports.getUrlParams = function(e) {
    try {
        return function(e) {
            var t = window.top.location.search;
            console.log(window.location);
            var r = new RegExp("[&|?]" + e + "=([^&?]*)", "ig");
            return t.match(r) ? decodeURI(t.match(r)[0].substr(e.length + 2)) : "";
        }(e);
    } catch (e) {
        return "";
    }
};

function formatTime(e) {
    var t = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), a = e.getHours(), n = e.getMinutes(), s = e.getSeconds();
    return [ t, r, o ].map(formatNumber).join("/") + " " + [ a, n, s ].map(formatNumber).join(":");
}

function formatNumber(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

var FormatTime = exports.FormatTime = formatTime, $shareMenu = exports.$shareMenu = {
    show: function(e) {
        wx.showShareMenu(e);
    },
    hide: function(e) {
        wx.hideShareMenu(e);
    }
}, alert = exports.alert = function(e, t, r, o) {
    switch (console.log(t, "type"), t) {
      case "warn":
        return wx.showToast({
            title: e,
            icon: "loading",
            duration: 2e3
        });

      default:
        return wx.showToast({
            title: e,
            icon: t || "success",
            duration: r || 2e3
        });
    }
}, $loading = exports.$loading = {
    start: function(e) {
        var t = e || {};
        t.mask = !t.mask || t.mask, wx.showLoading(t);
    },
    done: function() {
        wx.hideLoading();
    }
}, $message = function(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = t.success, o = t.cancel, a = _objectWithoutProperties(t, [ "success", "cancel" ]);
    wx.showModal(_extends({
        title: "提示",
        content: e,
        showCancel: !!o,
        success: function(e) {
            e.confirm ? r && r() : e.cancel && o && o();
        }
    }, a));
};

exports.$message = $message;

var dataset = exports.dataset = function(e) {
    return e.currentTarget.dataset;
};

function serialize(r) {
    if (!r) return "";
    var e = "";
    r && (e = Object.keys(r).reduce(function(e, t) {
        return "" == e ? "?" + t + "=" + r[t] : e + "&" + t + "=" + r[t];
    }, ""));
    return e;
}

var goback = exports.goback = function(e) {
    wx.navigateBack({
        delta: e || 1
    });
}, setItem = exports.setItem = function(e, t, r) {
    return wx.setStorage({
        key: e,
        data: t,
        success: r
    });
}, setItemSync = exports.setItemSync = wx.setStorageSync, getItem = exports.getItem = function(e, t) {
    return wx.getStorage({
        key: e,
        success: t
    });
}, getItemSync = exports.getItemSync = wx.getStorageSync, getItems = exports.getItems = function(e, t) {
    return wx.getStorageInfo({
        success: e,
        fail: t
    });
}, getItemsSync = exports.getItemsSync = wx.getStorageInfoSync, removeItem = exports.removeItem = function(e, t) {
    return wx.removeStorage({
        key: e,
        success: t
    });
}, removeItemSync = exports.removeItemSync = wx.removeStorageSync, clearStorage = exports.clearStorage = wx.clearStorage, clearStorageSync = exports.clearStorageSync = wx.clearStorageSync;

exports.default = {
    formatTime: formatTime,
    $loading: $loading,
    $shareMenu: $shareMenu,
    $message: $message,
    serialize: serialize,
    alert: alert,
    dataset: dataset,
    goback: goback,
    setItem: setItem,
    setItemSync: setItemSync,
    getItem: getItem,
    getItemSync: getItemSync,
    getItems: getItems,
    getItemsSync: getItemsSync,
    removeItem: removeItem,
    removeItemSync: removeItemSync,
    clearStorage: clearStorage,
    clearStorageSync: clearStorageSync,
    getUrlParams: getUrlParams
};