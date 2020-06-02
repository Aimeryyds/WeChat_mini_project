var e = getApp();

Page({
    data: {
        addressInfo: {},
        addressVal: [ 0, 0, 0 ],
        addressData: {},
        from: !1
    },
    onLoad: function(e) {
        console.log(e), this.setData({
            from: e.from
        }), this.setAddress();
    },
    onReady: function() {},
    onShow: function() {
        this.setAddress();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    userAddress: function(s) {
        for (var t = s.currentTarget.dataset.id, d = 0; d < this.addressList.length; d++) this.addressList[d].id == t && (e.address = this.addressList[d], 
        wx.navigateBack());
    },
    setAddress: function() {
        var s = this;
        wx.showLoading({
            title: "正在加载",
            mask: !0
        }), e.request.wxRequest({
            url: "address-list",
            success: function(e) {
                s.addressList = e, wx.hideLoading(), s.setData({
                    address: e
                });
            }
        });
    },
    chooseWxAddress: function() {
        var s = this;
        wx.chooseAddress({
            success: function(t) {
                var d = {};
                d.userName = t.userName, d.province = t.provinceName, d.city = t.cityName, d.county = t.countyName, 
                d.address = t.detailInfo, d.telNumber = t.telNumber, e.request.wxRequest({
                    url: "address-edit",
                    data: d,
                    method: "POST",
                    success: function(e) {
                        s.setAddress();
                    }
                });
            }
        });
    },
    setDefault: function(s) {
        var t = this, d = s.currentTarget.dataset.id;
        e.request.wxRequest({
            url: "address-edit&act=setdefault&aid=" + d,
            success: function(s) {
                e.showToast(t, "设置成功"), t.setAddress();
            }
        });
    },
    delAddress: function(s) {
        var t = s.currentTarget.dataset.id, d = this;
        e.request.wxRequest({
            url: "address-edit&act=del&aid=" + t,
            success: function(s) {
                e.showToast(d, "删除成功"), d.setAddress();
            }
        });
    },
    bindblur: function(e) {
        var s = e.currentTarget.dataset.name, t = e.detail.value;
        this.data.addressInfo[s] = t;
    },
    editAddress: function(e) {
        var s = e.currentTarget.dataset.id;
        console.log(s), wx.navigateTo({
            url: "/pages/member/edit-address?id=" + s
        });
    },
    onKeyAddress: function(s) {
        wx.chooseAddress({
            success: function(s) {
                console.log(s);
                var t = {};
                t.userName = s.userName, t.province = s.provinceName, t.city = s.cityName, t.county = s.countyName, 
                t.address = s.detailInfo, t.telNumber = s.telNumber, wx.showLoading({
                    title: "正在保存",
                    mask: !0
                }), e.request.wxAsk({
                    url: "address/edit",
                    data: t,
                    method: "POST",
                    success: function(s) {
                        wx.hideLoading(), 0 == s.code && (e.address = s.data, wx.navigateBack());
                    }
                });
            }
        });
    }
});