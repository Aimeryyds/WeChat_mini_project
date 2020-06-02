getApp();

var t, i = require("../../../utils/functions");

require("../../../utils/util");

Page({
    data: {
        list: null
    },
    onLoad: function(i) {
        (t = this).getList();
    },
    getList: function() {
        i.getQuestionList(function(i) {
            t.setData({
                list: i.list
            });
        });
    }
});