var t = new getApp().global;

Page({
    data: {
        articleId: "",
        articleCommentId: "",
        replyId: "",
        isCommentDetail: !0
    },
    onLoad: function(e) {
        e.rid ? (this.setData({
            articleId: e.aid,
            articleCommentId: e.cid,
            replyId: e.rid
        }), t.mta.Page.init()) : wx.showToast({
            icon: "none",
            title: "缺少参数"
        });
    },
    onReachBottom: function() {
        this.selectComponent("#lcComment").getMoreReplies();
    },
    methods: {}
});