var t = getApp();

Page({
    data: {
        list: [],
        delBtnWidth: 90,
        animationremove: null,
        animationup: null,
        currentIndex: void 0
    },
    touchS: function(t) {
        1 == t.touches.length && this.setData({
            startX: t.touches[0].clientX
        });
    },
    touchM: function(t) {
        if (1 == t.touches.length) {
            var a = t.touches[0].clientX, n = this.data.startX - a, e = this.data.delBtnWidth;
            if (n > 30) {
                var i = "";
                i = "transform:translate(" + -(n = n > e ? e : n) + "px,0px);";
                var o = t.currentTarget.dataset.index, s = this.data.list;
                s[o].txtStyle = i, this.clearTranlate(s, o), this.setData({
                    list: s
                });
            }
        }
    },
    touchE: function(t) {
        if (1 == t.changedTouches.length) {
            var a = t.changedTouches[0].clientX, n = this.data.startX - a, e = this.data.delBtnWidth, i = this.data.list, o = t.currentTarget.dataset.index, s = "";
            if (n > 30) s = "transform:translate(" + -(n = n > e / 2 ? e : 0) + "px,0px);"; else s = "transform:translate(0px,0px);";
            i[o].txtStyle = s, this.clearTranlate(i, o), this.setData({
                list: i
            });
        }
    },
    clearTranlate: function(t, a) {
        t.forEach(function(t, n) {
            a != n && (t.txtStyle = "");
        });
    },
    switch1Change: function(a) {
        var n = this, e = "", i = a.currentTarget.dataset.index;
        i == n.data.currentIndex ? this.setData({
            currentIndex: null
        }) : this.setData({
            currentIndex: i
        }), e = 1 == a.detail.value ? 1 : 0;
        var o = {
            fundCode: this.data.list[i].fundCode,
            onOff: e
        };
        t.getData("CMD_XCX_VALUE_NOTATION_OFFON", o, function(t) {});
    },
    dayChoice: function(a) {
        t.getData("CMD_XCX_SIGN_IN", {}, function(t) {
            wx.showToast({
                title: "签到成功",
                icon: "success",
                duration: 1500
            });
        });
    },
    getformid: function(a) {
        t.addformid(a.detail.formId);
    },
    gotoItem: function(a) {
        this.data.islongtap || wx.navigateTo({
            url: "../fund" + t.getFundPage() + "?code=" + this.data.list[a.currentTarget.dataset.index].fundCode
        });
    },
    gotoPortfolio: function(t) {
        this.data.islongtap || (console.log(this.data.list[t.currentTarget.dataset.index]), 
        wx.navigateTo({
            url: "../portfolio/single/index?code=" + this.data.list[t.currentTarget.dataset.index].fundCode
        }));
    },
    delItem: function(a) {
        if (!this.data.deleting) {
            this.setData({
                deleting: !0
            });
            var n = a.currentTarget.dataset.index, e = {
                fundCode: this.data.list[n].fundCode,
                favoriteStatus: 0
            }, i = this;
            t.getData("CMD_SAVE_FAVORITE_FUND", e, function(t) {
                var a = i.data.list;
                a.splice(n, 1), i.setData({
                    list: a,
                    deleting: !1
                });
            }, function(t) {
                this.setData({
                    deleting: !1
                });
            }, 1, "取消关注");
        }
    },
    gotoSearch: function() {
        wx.navigateTo({
            url: "../search/search"
        });
    },
    getAttentionList: function() {
        var a = {
            favoriteTypeID: "",
            pageNo: 0,
            pageSize: 3e3
        }, n = this, e = -1;
        t.getData("CMD_QUERY_FAVORITE_FUND_LIST", a, function(t) {
            for (var a = t.dataList, i = 0; i < a.length; i++) {
                var o = a[i], s = o.fundCode;
                o.fundCodeShow = s.split(".")[0], 1 == o.onOff && (e = i);
            }
            n.setData({
                list: t.dataList,
                showadditem: !0,
                currentIndex: e
            });
        }, function(a) {
            n.setData({
                showadditem: !0
            }), "sessionout" == a && t.checkUserHasUinionId(!0, n.getAttentionList);
        }, 1, "查询关注");
    },
    longtap: function(a) {
        var n = a.currentTarget.dataset.index;
        this.setData({
            islongtap: !0
        });
        var e = this;
        wx.showModal({
            title: "置顶",
            content: "是否将基金在关注中置顶？",
            success: function(a) {
                if (a.confirm) {
                    var i = {
                        order: "",
                        fundCode: e.data.list[n].fundCode
                    };
                    t.getData("CMD_EDIT_FAVORITE_FUND", i, function(t) {
                        var a = e.data.list;
                        a = a.splice(n, 1).concat(a), e.setData({
                            list: a
                        });
                    }, function(t) {}, 1);
                } else a.cancel;
                e.setData({
                    islongtap: !1
                });
            }
        });
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "我的关注"
        });
    },
    onReady: function() {},
    onShow: function() {
        t.checkUserHasUinionId(!0, this.getAttentionList);
    },
    onHide: function() {
        t.submitFormIds();
    },
    onUnload: function() {
        t.submitFormIds();
    },
    gotonews: function() {
        wx.navigateTo({
            url: "../news/fundnews"
        });
    },
    gotoannouncement: function() {
        wx.navigateTo({
            url: "../announcement/announcement"
        });
    }
});