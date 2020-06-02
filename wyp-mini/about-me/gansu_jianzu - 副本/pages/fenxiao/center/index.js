function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../utils/util.js")), i = e(require("../../../component/fenxiao/index.js")), u = t.default.registComp({}, i.default, {
    onLoad: function(e) {
        i.default.onLoad.call(this, e), this.init();
    }
});

Page(u);