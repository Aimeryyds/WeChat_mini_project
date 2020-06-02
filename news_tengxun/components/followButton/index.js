var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../utils/logger")), i = t(require("../../utils/mlodash")), a = require("../../store/index");

Component({
    properties: {
        type: String,
        uin: {
            type: String,
            observer: function(t) {
                var e = this.data.coral_uid === a.userInfo.coral_uid && this.data.uin === a.userInfo.uin;
                e && this.setData({
                    isMe: e
                }), this.setFollowState("userMap", t);
            }
        },
        coral_uid: String,
        mediaId: {
            type: String,
            observer: function(t) {
                this.setFollowState("mediaMap", t);
            }
        },
        topicId: {
            type: String,
            observer: function(t) {
                this.setFollowState("topicMap", t);
            }
        },
        isMyFollow: Boolean,
        isMyFans: Boolean,
        theme: {
            type: String,
            value: "blue"
        }
    },
    data: {
        isMe: !1,
        showLoading: !0
    },
    created: function() {
        Object.assign(this, {
            reqPending: !1,
            getFollowData: a.follow.getFollowData()
        });
    },
    attached: function() {},
    methods: {
        handleTap: function(t) {
            var o = this;
            if (!this.reqPending) {
                var s;
                this.reqPending = !0;
                var l = {};
                if ("topic" === this.data.type && this.data.topicId) {
                    l[this.data.isMyFollow ? "canceltpids" : "subtpids"] = this.data.topicId, s = a.follow.focusOnTopic(l);
                } else {
                    var n = this.data.isMyFollow ? "del" : "add";
                    "media" === this.data.type && this.data.mediaId ? (l[n] = this.data.mediaId, l.sub_type = 1) : (l[n] = this.data.uin, 
                    l.sub_type = 0), s = a.follow.followUser(l);
                }
                s.then(function(t) {
                    o.setData({
                        isMyFollow: i.default.get(t, "data.isMyFollow", !o.data.isMyFollow)
                    }), o.reqPending = !1;
                }).catch(function(t) {
                    e.default.error("关注".concat(o.data.type, "失败:"), t), wx.showToast({
                        icon: "none",
                        title: "".concat(o.data.isMyFollow ? "取消" : "", "关注失败")
                    }), o.reqPending = !1;
                });
            }
        },
        setFollowState: function(t, e) {
            var i = this;
            this.getFollowData.then(function() {
                var o = {
                    showLoading: !1
                };
                a.follow[t][e] && !i.data.isMyFollow && (o.isMyFollow = !0), i.setData(o);
            });
        }
    }
});