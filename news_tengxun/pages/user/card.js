require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var t = require("../../utils/common"), e = require("../../services/jump");

Component({
    properties: {
        type: String,
        avatarUrl: String,
        nickName: String,
        userDesc: String,
        coral_uid: String,
        uin: String,
        mediaId: String,
        isMedia: Boolean,
        isMyFollow: Boolean,
        isMyFans: Boolean,
        followNum: Number,
        fansNum: Number,
        likeNum: Number
    },
    data: {
        numbers: [],
        showLikeCountModal: !1,
        descNeedFold: !1,
        calcTextReady: !1,
        folded: !0
    },
    created: function() {},
    attached: function() {
        var e = {
            numbers: [ {
                value: (0, t.formatCount)(this.data.fansNum, !0),
                text: "粉丝",
                event: "tapFans"
            }, {
                value: (0, t.formatCount)(this.data.likeNum, !0),
                text: "获赞",
                event: "tapAgree",
                splitLine: !1
            } ]
        };
        this.data.isMedia || e.numbers.unshift({
            value: (0, t.formatCount)(this.data.followNum, !0),
            text: "关注",
            event: "tapFocus"
        }), this.setData(e);
    },
    ready: function() {
        var t = this;
        this.calcTextWidth(), this.$obQuery = this.createIntersectionObserver(), this.$obQuery.relativeToViewport().observe(".card-wrapper", function(e) {
            t.changeTitle(e.intersectionRatio);
        });
    },
    methods: {
        tapFocus: function() {
            (0, e.navigateTo)(e.PAGE_PATH.USER_FOCUS, {
                type: this.data.type,
                uin: this.data.uin,
                coral_uid: this.data.coral_uid,
                mediaId: this.data.mediaId
            });
        },
        tapFans: function() {
            (0, e.navigateTo)(e.PAGE_PATH.USER_FANS, {
                type: this.data.type,
                uin: this.data.uin,
                coral_uid: this.data.coral_uid,
                mediaId: this.data.mediaId
            });
        },
        tapAgree: function() {
            this.setData({
                showLikeCountModal: !0
            });
        },
        tapExpend: function() {
            this.setData({
                folded: !this.data.folded
            });
        },
        calcTextWidth: function() {
            var t = this;
            this.createSelectorQuery().select(".user-desc").fields({
                size: !0,
                computedStyle: [ "lineHeight" ]
            }, function(e) {
                if (e) {
                    var a = parseInt(e.lineHeight.slice(0, -2)), i = e.height / a;
                    t.setData({
                        descNeedFold: i > 1,
                        calcTextReady: !0
                    });
                }
            }).exec();
        },
        changeTitle: function(t) {
            t > 0 ? (wx.setNavigationBarTitle({
                title: " "
            }), wx.setNavigationBarColor({
                backgroundColor: "#b4dcff",
                frontColor: "#000000"
            })) : (wx.setNavigationBarTitle({
                title: this.data.nickName
            }), wx.setNavigationBarColor({
                backgroundColor: "#ffffff",
                frontColor: "#000000"
            }));
        }
    }
});