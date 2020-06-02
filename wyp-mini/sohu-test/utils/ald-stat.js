var e = getApp();

module.exports = {
    pullDown: function(t) {
        e.aldstat.sendEvent(t + "-下拉刷新-自定义", {
            sTime: Date.now() + "",
            openId: e.globalData.usrKey.openid
        });
    },
    dragUp: function(t) {
        e.aldstat.sendEvent(t + "-上拉刷新-自定义", {
            sTime: Date.now() + "",
            openId: e.globalData.usrKey.openid
        });
    },
    panelTab: function(t) {
        var n = t + "-频道点击-自定义";
        e.aldstat.sendEvent(n, {
            time: Date.now() + "",
            openId: e.globalData.usrKey.openid
        });
    },
    refreshTip: function() {
        e.aldstat.sendEvent("阅读进度提示点击-自定义", {
            time: Date.now() + "",
            openId: e.globalData.usrKey.openid
        });
    },
    dissNews: function(t) {
        e.aldstat.sendEvent("不感兴趣点击-自定义", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid
        });
    },
    focusPic: function(t) {
        e.aldstat.sendEvent("焦点图点击-自定义", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid
        });
    },
    gotoArticle: function(t, n, a) {
        e.aldstat.sendEvent(n + "-点击新闻-自定义", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid,
            isLocal: String(a)
        });
    },
    gotoRelatedArticle: function(t, n) {
        e.aldstat.sendEvent("点击相关新闻-自定义", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid,
            isLocal: String(n)
        });
    },
    gotoVideo: function(t, n) {
        e.aldstat.sendEvent("点击视频新闻-自定义", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid,
            from: n || "视频流"
        });
    },
    gotoRelatedVideo: function(t) {
        e.aldstat.sendEvent("点击视频相关新闻-自定义", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid
        });
    },
    launchApp: function(t) {
        e.aldstat.sendEvent("点击打开APP按钮-自定义", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid
        });
    },
    guidanceStatus: function(t) {
        var n = 1 == t ? "关闭" : "展示";
        e.aldstat.sendEvent("首页新闻流-引导提示-" + n, {
            time: Date.now() + "",
            openId: e.globalData.usrKey.openid
        });
    },
    shareFriendClick: function(t, n) {
        e.aldstat.sendEvent(n + "分享给好友按钮点击", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid
        });
    },
    shareCircleClick: function(t, n) {
        e.aldstat.sendEvent(n + "分享至朋友圈按钮点击", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid
        });
    },
    enterHotWithSubscribed: function() {
        e.aldstat.sendEvent("进入热点流-已订阅", {
            time: Date.now() + "",
            openId: e.globalData.usrKey.openid
        });
    },
    changeSubscribeStatus: function(t) {
        var n = 1 == t ? "取消关注" : "关注";
        e.aldstat.sendEvent("订阅状态改变-" + n, {
            time: Date.now() + "",
            openId: e.globalData.usrKey.openid
        });
    },
    launchFromTemplateMsg: function(t) {
        e.aldstat.sendEvent("从服务通知进入-" + t, {
            time: Date.now() + "",
            openId: e.globalData.usrKey.openid
        });
    },
    relatedArticleExposure: function(t, n) {
        e.aldstat.sendEvent("相关新闻曝光-自定义", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid,
            isLocal: String(n)
        });
    },
    gotoActivity: function() {
        e.aldstat.sendEvent("点击活动浮窗-自定义", {
            time: Date.now() + "",
            openId: e.globalData.usrKey.openid
        });
    },
    gotoAd: function(t) {
        e.aldstat.sendEvent("广告点击-自定义", {
            time: Date.now() + "",
            name: t
        });
    },
    gotoMoment: function(t, n, a) {
        e.aldstat.sendEvent(n + "-点击时刻-自定义", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid,
            isLocal: String(a)
        });
    },
    onVideoPlayAgain: function(t) {
        e.aldstat.sendEvent("点击再看一次-自定义", {
            time: Date.now() + "",
            newsId: t + "",
            openId: e.globalData.usrKey.openid
        });
    },
    onDatePickerClick: function() {
        e.aldstat.sendEvent("点击热榜日期选择-自定义", {
            time: Date.now() + "",
            openId: e.globalData.usrKey.openid
        });
    },
    onEventItemClick: function(t) {
        e.aldstat.sendEvent("点击事件进展进入时刻-自定义", {
            time: Date.now() + "",
            openId: e.globalData.usrKey.openid,
            newsId: t
        });
    }
};