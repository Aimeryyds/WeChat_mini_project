function getStorage(e) {
    return new Promise(function(t) {
        wx.getStorage({
            key: e,
            success: function(e) {
                var o = e.data;
                t(o);
            },
            fail: function() {
                t(!1);
            }
        });
    });
}

function setStorage(e, t) {
    return new Promise(function(o) {
        wx.setStorage({
            key: e,
            data: t,
            success: function() {
                o(!0);
            },
            fail: function() {
                o(!1);
            }
        });
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    getStorage: getStorage,
    setStorage: setStorage
};