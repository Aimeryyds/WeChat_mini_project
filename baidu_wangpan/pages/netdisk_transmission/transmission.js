var t = getApp();

Page({
    data: {
        height: 60,
        currentTab: 0,
        systemInfo: t.globalData.systemInfo,
        isSwitch: !0
    },
    onLoad: function(a) {
        this.toast = this.selectComponent("#toast"), this.showDialog = this.selectComponent("#showDialog"), 
        this.setData({
            height: t.globalData.navHeight,
            systemInfo: t.globalData.systemInfo
        }), wx.hideShareMenu(), wx.log.transAssistant.myCollectionShow.send();
    },
    switchNav: function(t) {
        var a = this;
        +this.data.currentTab != +t.target.dataset.current && this.data.isSwitch && (this.setData({
            currentTab: +t.target.dataset.current,
            isSwitch: !1
        }), setTimeout(function() {
            a.setData({
                isSwitch: !0
            });
        }, 400), this.requestTabData(+t.target.dataset.current));
    },
    changeTab: function(t) {
        if (+t.detail.current != +this.data.currentTab) {
            var a = this.data.currentTab;
            t && (a = t.detail.current, this.setData({
                currentTab: a
            })), this.requestTabData(a);
        }
    },
    requestTabData: function(t) {},
    formSubmit: function() {
        console.log("netdisk_transmission formSubmit");
    }
});