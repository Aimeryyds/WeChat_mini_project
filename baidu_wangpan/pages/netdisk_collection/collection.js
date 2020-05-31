var t = require("../../netdisk_utils/batchFn.js"), s = getApp();

Page({
    data: {
        height: 60,
        systemInfo: s.globalData.systemInfo,
        leftTime: 0,
        uuid: 0,
        title: "传输助手",
        barType: "transCollectionDetail",
        isBatch: !1,
        surl: ""
    },
    onLoad: function(e) {
        this.toast = this.selectComponent("#toast");
        var i = e.leftTime, a = e.uuid, n = e.title, o = e.surl, l = e.msgCnt;
        "string" == typeof l && (l = "99+" === l ? 99 : +l);
        var c = {
            height: s.globalData.navHeight,
            systemInfo: s.globalData.systemInfo
        };
        a && n && o && Object.assign(c, {
            leftTime: i,
            uuid: a,
            title: n,
            surl: o,
            msgCnt: l
        }), this.setData(c), (0, t.batchFn)(this), wx.hideShareMenu(), wx.log.transAssistant.myCollectionDetailShow.send();
    },
    onShow: function() {
        this.XList = this.selectComponent("#XList"), this.XList.init();
    },
    bottomBtnFn: function(t) {
        switch (t.detail) {
          case "edit":
          default:
            this.batchEdit();
        }
    },
    setIsBatchTrue: function() {
        this.setData({
            isBatch: !0
        });
    },
    cancelSelect: function() {
        this.setData({
            isBatch: !1
        });
    },
    batchEdit: function() {
        this.XList.longPress({
            canSelected: !0
        });
    },
    goback: function() {
        console.log("page collection goback");
    },
    shareHandler: function() {
        wx.log.transAssistant.myCollectionShareBtn.send();
        var t = this.data, s = t.surl, e = t.title;
        wx.safeNavigateTo("/pages/netdisk_transShare/index", {
            surl: s,
            title: e
        });
    }
});