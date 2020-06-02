require("../../utils/util");

var t, i = require("../../utils/functions");

Page({
    data: {
        module_list: null
    },
    onLoad: function(i) {
        t = this;
    },
    onReady: function() {},
    onShow: function() {
        this.getGroupGoodsList();
    },
    getGroupGoodsList: function() {
        i.getRecommendList(12, function(i) {
            var o = i.list;
            if (null != o && o.length > 0) for (var n = 0; n < o.length; n++) o[n].thumb = o[n].thumb + "?imageslim";
            t.setData({
                module_list: o
            });
        });
    }
});