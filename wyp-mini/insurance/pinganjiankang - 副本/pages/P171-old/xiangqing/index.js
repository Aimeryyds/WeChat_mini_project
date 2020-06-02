var a = getApp(), t = require("../../../utils/util.js");

Page({
    data: {
        imgurl: [ a.globalData.wm1Url + "/wxresource/P171/img/ckxq_01.jpg", a.globalData.test1Url + "/wxresource/P171/img/ckxq_02.jpg", a.globalData.test1Url + "/wxresource/P171/img/ckxq_03.jpg", a.globalData.test1Url + "/wxresource/P171/img/bxal.jpg" ]
    },
    toLnsg: function() {
        wx.navigateTo({
            url: "../../P160/index/index"
        });
    },
    openPdf: function(e) {
        var r = a.globalData.wm1Url + e.target.dataset.pdfurl;
        t.getStaticPage(r);
    },
    onLoad: function() {}
});