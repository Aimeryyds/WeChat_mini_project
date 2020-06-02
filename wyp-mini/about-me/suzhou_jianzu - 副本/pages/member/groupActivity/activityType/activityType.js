var t = require("../../../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {
        typeTitle: [],
        typeCont: "",
        classNum: ""
    },
    onLoad: function() {
        e = wx.getStorageSync("utoken");
        var a = this;
        t.sendRequest({
            url: "?r=activity.index.get_type&utoken=" + e,
            method: "GET",
            success: function(t) {
                a.setData({
                    typeTitle: t.data.result
                });
            }
        });
    },
    blockType: function(t) {
        var e = this;
        console.log("blockType"), e.setData({
            currTitleNum: parseInt(t.currentTarget.dataset.id) - 1
        });
    },
    detailType: function(t) {
        var e = this;
        console.log(t), e.setData({
            typeCont: t.currentTarget.dataset.desc,
            classNum: 1
        }), wx.setStorage({
            key: "typeCont",
            data: {
                typeCont: e.data.typeCont,
                classNum: e.data.classNum
            }
        }), wx.navigateBack();
    },
    addTypeCont: function() {
        wx.navigateTo({
            url: "../addType/addType"
        });
    }
});