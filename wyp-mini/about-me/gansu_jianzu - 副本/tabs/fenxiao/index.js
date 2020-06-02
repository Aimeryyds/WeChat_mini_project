function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../utils/util.js")), i = e(require("../../component/fenxiao/index.js")), n = t.default.registComp({}, i.default, {
    onShow: function() {
        i.default.onShow.call(this), this.init();
    },
    onHide: function() {
        this.setData({
            showModal: !1,
            url: "/pages/login/login"
        });
    }
});

Page(n);