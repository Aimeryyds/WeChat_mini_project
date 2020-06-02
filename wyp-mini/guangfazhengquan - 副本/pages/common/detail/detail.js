var t = require("../../../components/utils"), e = require("../../../components/bridge");

getApp().View({
    beacon: {
        name: "文档详情"
    },
    data: {},
    onLoad: function(i) {
        var a = i.title, n = i.content;
        (0, t.setData)(this, "title", a), (0, t.setData)(this, "content", n), (0, e.setNavigationBarTitle)({
            title: a
        });
    }
});