var t = require("../../2A5831C68A740DDF4C3E59C1F25DC841.js"), e = require("../../14E98D478A740DDF728FE5401BCCC841.js"), n = getApp(), a = null;

Page({
    data: {
        hintInfo: {
            hintIsShow: !1,
            hintImage: null,
            hintMessage1: null,
            hintMessage2: null,
            hintButton: null
        },
        focusListInfo: [],
        offset: 0,
        hasMore: !0,
        hasMoreLoading: !1,
        navigationTitleText: "我的关注",
        navStatusbarHeight: 20,
        isChat: n.isChat
    },
    onLoad: function(t) {
        (a = this).getFocusList(0), a.dialog = a.selectComponent(".mydialog"), this.setData({
            navStatusbarHeight: n.globalData.navStatusbarHeight
        });
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        a.setData({
            offset: 0,
            hasMore: !0
        }), a.getFocusList(1);
    },
    onReachBottom: function() {
        a.data.hasMore && (a.setData({
            hasMoreLoading: !0
        }), setTimeout(function() {
            a.getFocusList(2);
        }, 1e3));
    },
    getFocusList: function(i) {
        0 == i && wx.showLoading({
            title: "载入中..."
        });
        var s = n.apiurl + "follow/getPublishers2", o = {
            api_key: n.opApiKey,
            v: "1",
            client_info: n.client_info,
            session_key: n.currentUser.session_key,
            call_id: new Date().getTime(),
            offset: a.data.offset,
            needWhisperInfo: 1,
            limit: 20
        };
        o.sig = e.getsign(o), t.getNetworkTypeP()().then(function(e) {
            if (a.consoleLog("关注主播列表=1=>" + JSON.stringify(e)), "none" != e.networkType) return a.setHintView(0, i), 
            t.getRequestP(s, "", o);
            a.setHintView(3, i), fail();
        }).then(function(t) {
            a.consoleLog("关注主播列表=2=>" + JSON.stringify(t));
            var e = t.data.has_more, n = t.data.publisherDetailList, s = t.data.error_code;
            t.data.error_msg;
            200 == t.statusCode ? s ? a.setHintView(2, i) : 2 == i ? a.setData({
                hasMore: e,
                offset: a.data.offset + n.length,
                focusListInfo: a.data.focusListInfo.concat(n)
            }) : a.setData({
                hasMore: e,
                offset: a.data.offset + n.length,
                focusListInfo: n
            }) : a.setHintView(2, i);
        }).catch(function(t) {
            a.consoleLog("关注主播列表=catch=>");
        }).finally(function(t) {
            a.consoleLog("关注主播列表=finally=>"), a.setData({
                hasMoreLoading: !1
            }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
        });
    },
    onRest: function() {
        a.getFocusList(0);
    },
    onJumpView: function(t) {
        var e = "isLive=2222&playerId=" + t.currentTarget.dataset.item.userId;
        wx.navigateTo({
            url: "./../personalPage/personalPage?" + e
        });
    },
    tochatDetail: function(t) {
        if (0 == n.isChat) return wx.showToast({
            title: "功能正在升级，敬请期待...",
            icon: "none",
            duration: 2e3
        }), !1;
        var e = t.currentTarget.dataset.item, a = e.userId, i = e.name, s = e.headUrl;
        return wx.navigateTo({
            url: "../chatDetail/chatDetail?id=" + a + "&name=" + i + "&headUrl=" + s + "&from=chat"
        }), !1;
    },
    setHintView: function(t, e) {
        if (0 == e) {
            var n = a.data.focusListInfo;
            if (null != n && n <= 0) switch (t) {
              case 0:
                a.setData({
                    hintInfo: {
                        hintIsShow: !1,
                        hintImage: null,
                        hintMessage1: null,
                        hintMessage2: null,
                        hintButton: null
                    }
                });
                break;

              case 1:
                a.setData({
                    hintInfo: {
                        hintIsShow: !0,
                        hintImage: "/images/hint/hint-empty.png",
                        hintMessage1: "您还没有关注主播",
                        hintMessage2: "快点去关注主播吧~",
                        hintButton: "点击重试"
                    }
                });
                break;

              case 2:
                a.setData({
                    hintInfo: {
                        hintIsShow: !0,
                        hintImage: "/images/hint/hint-rest.png",
                        hintMessage1: "请求失败,请稍后再试",
                        hintMessage2: null,
                        hintButton: "点击重试"
                    }
                });
                break;

              case 3:
                a.setData({
                    hintInfo: {
                        hintIsShow: !0,
                        hintImage: "/images/hint/hint-no-network.png",
                        hintMessage1: "额，没有网络连接了",
                        hintMessage2: "请检查网络设置",
                        hintButton: "点击重试"
                    }
                });
            }
        }
    },
    consoleLog: function(t) {}
});