Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mBuriedPoint = function(t, n, o, r, a, c) {
    wx.request({
        url: e.globalData.mBuriedPointUrl,
        data: {
            platform: "8",
            timestamp: Date.now(),
            eventReport: JSON.stringify({
                eventId: t,
                content: n,
                url: "",
                eventType: r || "click",
                label: o || "",
                platform: "8",
                currentPage: a || "",
                fromPage: c || "",
                htmlSp: "8",
                mac: "",
                ua: "",
                systemInfo: wx.getStorageSync("systemInfo") || {},
                imei: "",
                deviceId: "",
                openId: wx.getStorageSync("openId") || ""
            })
        },
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {},
        fail: function() {},
        complete: function() {}
    });
};

var e = getApp();