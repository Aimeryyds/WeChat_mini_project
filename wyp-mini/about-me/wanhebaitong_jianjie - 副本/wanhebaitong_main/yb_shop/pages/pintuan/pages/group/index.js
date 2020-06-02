var t = getApp(), a = t.requirejs("core");

Page({
    data: {
        currentTab: 0,
        scrollTop: 0,
        page: 0,
        groupList: [],
        loading: !0
    },
    onLoad: function(t) {
        var a = wx.getSystemInfoSync();
        this.setData({
            windowHeight: a.windowHeight
        }), this.setCurrentData();
    },
    onShow: function() {},
    setCurrentData: function() {
        var t = this;
        t.setData({
            loading: !0
        }), a.get("Pintuan/ptGroupList", {
            page: t.data.page,
            status: t.data.currentTab,
            uid: getApp().getCache("userinfo").uid
        }, function(e) {
            console.log(e), 0 == e.code ? (t.setData({
                loading: !1,
                show: !0
            }), 0 < e.info.length && t.setData({
                page: t.data.page + 1,
                groupList: t.data.groupList.concat(e.info)
            }), e.info.length < 10 && t.setData({
                loaded: !0
            })) : a.alert(e.msg);
        }, !0);
    },
    showGoodsDetail: function(a) {
        var e = a.currentTarget.dataset.id;
        e && t.redirect("goods/detail", "gid=" + e);
    },
    showGroupInfo: function(a) {
        var e = a.currentTarget.dataset.id;
        t.redirect("group/detail", "id=" + e);
    },
    showOrderInfo: function(a) {
        var e = a.currentTarget.dataset.id;
        t.redirect("orders/detail", "oid=" + e);
    },
    bindChange: function(t) {
        this.data.page = 0, this.data.groupData = [], this.data.loading = !0, this.data.currentTab = t.detail.current, 
        this.setData({
            loading: !0,
            groupList: [],
            currentTab: this.data.currentTab
        }), this.setCurrentData();
    },
    swichNav: function(t) {
        this.data.currentTab != t.currentTarget.dataset.current && (this.data.currentTab = t.currentTarget.dataset.current, 
        this.setData({
            currentTab: this.data.currentTab
        }));
    },
    onPullDownRefresh: function() {
        this.setData({
            groupList: [],
            page: 1,
            loaded: !1
        }), this.setCurrentData(), wx.stopPullDownRefresh();
    },
    scrolltolower: function() {
        console.log("加载更多"), this.data.loaded || this.setCurrentData();
    }
});