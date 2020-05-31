var t = {
    video: {
        type: 0
    },
    audio: {
        type: 1
    },
    img: {
        type: 2
    },
    imgOrigin: {
        type: 3
    },
    upload: {
        type: 4
    },
    openApp: {
        type: 5
    },
    openActivity: {
        type: 6
    }
}, e = function(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    if (!wx.reportMonitor) return null;
    wx.reportMonitor("" + t, e);
}, i = wx.wxMonitor = {
    register: function(t) {
        Object.keys(t).forEach(function(r) {
            var o = t[r];
            i[r] = o;
            var n = o.type;
            o.send = function() {
                e(n);
            };
        });
    }
};

i.register(t);