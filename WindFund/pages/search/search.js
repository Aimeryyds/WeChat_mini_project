var t = getApp();

Page({
    data: {
        inputShowed: !0,
        resultShowed: !1,
        inputVal: "",
        delay: 800,
        list: [ {
            fundCode: "160127.OF",
            fundName: "南方新兴消费增长",
            fundcodeshow: "160127"
        }, {
            fundCode: "070008.OF",
            fundName: "嘉实货币A",
            fundcodeshow: "070008"
        } ],
        hotList: [ {
            fundCode: "001616.OF",
            fundName: "嘉实环保低碳",
            fundcodeshow: "001616"
        } ],
        historyList: [],
        historyCount: 10,
        timer: null,
        timerforcheck: null,
        highlightnum: 1
    },
    getformid: function(i) {
        console.log("formId"), console.log(i.detail.formId), t.addformid(i.detail.formId);
    },
    showInput: function() {
        this.setData({
            inputShowed: !0
        });
    },
    hideInput: function() {
        this.setData({
            inputVal: "",
            inputShowed: !1,
            resultShowed: !1
        }), this.getHistory(), this.checkHistoryList();
    },
    clearInput: function() {
        this.setData({
            inputVal: "",
            inputShowed: !1,
            resultShowed: !1
        }), this.getHistory(), this.checkHistoryList();
    },
    inputTyping: function(t) {
        var i = this;
        clearTimeout(this.data.timer), this.setData({
            inputVal: t.detail.value,
            resultShowed: !0,
            timer: setTimeout(function() {
                i.searchCommit();
            }, i.data.delay)
        });
    },
    addToHistoryList: function(t) {
        var i = wx.getStorageSync("historyList");
        if (i) {
            for (var e = 0; e < i.length; e++) if (i[e].fundCode === t.fundCode) return;
            i = [ t ].concat(i).slice(0, this.data.historyCount), wx.setStorageSync("historyList", i);
        } else wx.setStorageSync("historyList", [ t ]);
    },
    gotoFundPage: function(i) {
        var e = i.currentTarget.dataset.code;
        e && wx.navigateTo({
            url: "../fund" + t.getFundPage() + "?code=" + e
        });
    },
    gotoSinglePage: function(i) {
        var e = i.currentTarget.dataset.index;
        if (e > -1) {
            var n = this.data.list[e];
            n && this.addToHistoryList(n), wx.navigateTo({
                url: "../fund" + t.getFundPage() + "?code=" + n.fundCode
            });
        }
    },
    checkList: function() {
        var t = this;
        clearTimeout(this.data.timerforcheck), this.setData({
            timerforcheck: setTimeout(function() {
                t.checkSearchList();
            })
        });
    },
    searchCommit: function() {
        var i = this.data.inputVal, e = {
            keyword: i
        }, n = this;
        t.getData("CMD_KEYBOARD_SEARCH", e, function(t) {
            var e = t.keySearch;
            i.length >= n.data.highlightnum && e.forEach(function(t) {
                t.fundcodeshow = t.fundCode.split(".")[0];
                var e = t.fundcodeshow.indexOf(i);
                e >= 0 && (t.hl_begin = e, t.hl_end = e + i.length - 1), (e = t.fundName.indexOf(i)) >= 0 && (t.name_begin = e, 
                t.name_end = e + i.length - 1);
            }), n.setData({
                list: e
            }), n.checkList();
        }, function(t) {});
    },
    getHistory: function() {
        var t = wx.getStorageSync("historyList") || [];
        t.forEach(function(t) {
            t.fundcodeshow = t.fundCode.split(".")[0];
        }), this.setData({
            historyList: t
        });
    },
    getHotList: function() {
        var i = this;
        t.getData("CMD_HOT_SEARCH", {}, function(t) {
            t.hotSearch.forEach(function(t) {
                t.fundcodeshow = t.fundCode.split(".")[0];
            }), i.setData({
                hotList: t.hotSearch
            });
        }, function(t) {}, 1);
    },
    clearHistory: function() {
        wx.removeStorageSync("historyList"), this.getHistory();
    },
    checkAllList: function() {
        this.checkHistoryList(), this.checkHotList(), this.checkSearchList();
    },
    checkHistoryList: function() {
        var t = this;
        if (this.data.historyList) {
            var i = this.data.historyList;
            i.forEach(function(i) {
                i.attention = t.checkListInAttention(i.fundCode) ? 1 : 0;
            }), this.setData({
                historyList: i
            });
        }
    },
    checkHotList: function() {
        var t = this;
        if (this.data.hotList) {
            var i = this.data.hotList;
            i.forEach(function(i) {
                i.attention = t.checkListInAttention(i.fundCode) ? 1 : 0;
            }), this.setData({
                hotList: i
            });
        }
    },
    checkSearchList: function() {
        var t = this;
        if (this.data.list) {
            var i = this.data.list;
            i.forEach(function(i) {
                i.attention = t.checkListInAttention(i.fundCode) ? 1 : 0;
            }), this.setData({
                list: i
            });
        }
    },
    checkListInAttention: function(t) {
        if (this.data.myattentionlist) {
            var i = this.data.myattentionlist, e = void 0;
            for (e = 0; e < i.length; e++) if (t === i[e]) return !0;
        }
        return !1;
    },
    updateAttention: function(t, i) {
        var e = this.data.myattentionlist || [];
        i ? e.unshift(t) : e.splice(e.indexOf(t), 1), this.setData({
            myattentionlist: e
        }), this.checkAllList();
    },
    addAttention: function() {
        var i = this, e = {
            fundCode: this.data.curcode,
            favoriteStatus: this.data.curattention ? 0 : 1
        };
        t.getData("CMD_SAVE_FAVORITE_FUND", e, function(t) {
            wx.showToast({
                title: i.data.curattention ? "取消成功" : "关注成功",
                icon: "success",
                duration: 1500
            }), i.setData({
                isAttentioned: i.data.isAttentioned ? 0 : 1
            }), i.updateAttention(i.data.curcode, !i.data.curattention);
        }, function(e) {
            "sessionout" == e ? t.checkUserHasUinionId(!0, i.addAttention) : i.wetoast.toast({
                icon: "error",
                title: i.data.curattention ? "取消失败" : "关注失败",
                duration: 1500
            });
        }, 1, i.data.curattention ? "取消中" : "关注中");
    },
    addToAttention: function(i) {
        this.setData({
            curcode: i.currentTarget.dataset.code,
            curattention: i.currentTarget.dataset.attention
        }), t.checkUserHasUinionId(!0, this.addAttention);
    },
    onShareAppMessage: function() {
        return {
            title: "基金搜索",
            imageUrl: "../../img/searchshare.jpg",
            desc: "数据来源：Wind",
            path: "/pages/search/search"
        };
    },
    getMyAttention: function() {
        var i = {
            favoriteTypeID: "",
            pageNo: 0,
            pageSize: 3e3
        }, e = this;
        t.getData("CMD_QUERY_FAVORITE_FUND_LIST", i, function(t) {
            for (var i = t.dataList, n = [], o = 0; o < i.length; o++) n.push(i[o].fundCode);
            e.setData({
                myattentionlist: n
            }), e.checkAllList();
        }, function(i) {
            "sessionout" == i && (console.log("getMyAttention sessionout"), t.checkUserHasUinionId(!0, e.getMyAttention));
        });
    },
    onLoad: function(i) {
        console.log("search page onLoad"), t.WeToast(), wx.setNavigationBarTitle({
            title: "搜索"
        }), this.getHistory(), this.getHotList(), console.log("search page onLoad over");
    },
    onShow: function() {
        console.log("search page onshow"), t.checkUserHasUinionId(!0, this.getMyAttention);
    },
    onHide: function() {
        t.submitFormIds();
    },
    onUnload: function() {
        t.submitFormIds();
    }
});