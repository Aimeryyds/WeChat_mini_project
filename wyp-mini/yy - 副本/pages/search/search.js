var t = getApp(), a = require("../../utils/hdweapp.js"), e = require("../../utils/paramConfig.js").ParamConfig, s = require("../../utils/request.js").RequestGet;

Page({
    data: {
        statusBar: {
            title: "主播",
            height: t.globalData.systemInfo.statusBarHeight
        },
        formId: null,
        anchorList: {},
        channelsList: {},
        pageType: "",
        searchValue: "",
        gotoUrl: !1
    },
    getuserinfo: function(a) {
        var e = a.target.dataset.url;
        this.data.gotoUrl || (this.setData({
            gotoUrl: !0
        }), t.collector(e, this.data.formId));
    },
    submitForm: function(t) {
        this.setData({
            formId: t.detail.formId
        });
    },
    fetchSearchList: function() {
        var t = this, a = e.MINIAPP_YY_HOST + "/mini/search", i = {
            uid: 0,
            q: this.data.searchValue
        };
        s(a, i).then(function(a) {
            if (0 == a.code) {
                var e = a.data;
                t.setData({
                    anchorList: {
                        list: e.anchors
                    },
                    channelsList: {
                        list: e.channels
                    }
                });
            }
        });
    },
    setGotoUrlDisable: function() {
        this.setData({
            gotoUrl: !0
        });
    },
    onLoad: function(t) {
        this.setData({
            pageType: t.pageType,
            searchValue: t.value
        }), this.fetchSearchList(), a.Page.init();
    },
    onShow: function() {
        t.getOpenId(), this.setData({
            gotoUrl: !1
        });
    },
    onHide: function() {},
    onUnload: function() {}
});