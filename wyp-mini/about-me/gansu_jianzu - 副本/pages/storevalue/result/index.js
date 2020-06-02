var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/util"));

Page({
    data: {},
    onLoad: function(a) {
        this.setData({
            isShow: !0,
            data: t.default.parse(a.data),
            result: a.result
        }), console.log(this.data.result, "????????????????????????????");
    }
});