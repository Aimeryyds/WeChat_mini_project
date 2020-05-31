function t(t) {}

function a(t) {}

function i(t) {}

function e(t) {
    wx.getSystemInfo({
        success: function(a) {
            a.windowWidth;
            var i = a.windowHeight, e = t.data.wxSortPickerData;
            void 0 === e && (e = {});
            var r = {};
            r.scrollHeight = i, e.view = r, t.setData({
                wxSortPickerData: e
            });
        }
    });
}

function r(t) {
    var a = this, i = a.data.wxSortPickerData;
    i.wxSortPickerViewtoView = t.target.dataset.tag, a.setData({
        wxSortPickerData: i
    });
}

var o = require("../../../utils/lettersort.js");

module.exports = {
    init: function(w, c, n, s, x, d) {
        var S = c.data.wxSortPickerData;
        void 0 === S && (S = {}), c.wxSortPickerViewUpper = t, c.wxSortPickerViewLower = a, 
        c.wxSortPickerViewScroll = i, c.wxSortPickerViewTemTagTap = r, e(c);
        var u = o.buildTextData(w, void 0, x, d);
        void 0 === (S = c.data.wxSortPickerData) && (S = {}), S.textData = u, c.setData({
            wxSortPickerData: S
        });
    }
};