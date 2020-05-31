var t = getApp();

Page({
    data: {
        questionList: [ {
            id: 3,
            contentType: 3,
            text: "如何使用共享功能?"
        }, {
            id: 4,
            contentType: 1,
            text: "如何保存他人共享的文件？"
        }, {
            id: 5,
            contentType: 1,
            text: "如何退出共享?"
        }, {
            id: 1,
            contentType: 1,
            text: "如何解散共享?"
        }, {
            id: 6,
            contentType: 1,
            text: "小程序加载出错了，如何清理缓存?"
        }, {
            id: 7,
            contentType: 1,
            text: "为什么上传的本地图片视频不够清晰?"
        } ],
        height: 0
    },
    onLoad: function(e) {
        var n = this.selectComponent("#navbar");
        this.showDialog = this.selectComponent("#showDialog"), n.setTitle("帮助与反馈"), this.setData({
            height: t.globalData.navHeight
        });
    },
    _click: function() {
        wx.log.index.connectBtnClick.send();
    },
    _clickQuestion: function(t) {
        var e = t.target.dataset.questionid || t.currentTarget.dataset.questionid, n = t.target.dataset.contenttype || t.currentTarget.dataset.contenttype;
        e && wx.navigateTo({
            url: "/pages/netdisk_helpcontent/helpcontent?questionid=" + e + "&contentType=" + n
        });
    },
    onShareAppMessage: function() {}
});