var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/util.js"));

Page({
    onLoad: function(t) {
        console.log(e.default.parse(t.url), "options"), this.setData({
            url: e.default.parse(t.url)
        });
    }
});