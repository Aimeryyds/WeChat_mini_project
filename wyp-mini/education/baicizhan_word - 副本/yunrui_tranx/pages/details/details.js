var _extends = require("../../../libs/extends"), _extends2 = _interopRequireDefault(_extends), _deepcopy = require("../../../libs/deepcopy"), _deepcopy2 = _interopRequireDefault(_deepcopy);

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var app = getApp(), init = _deepcopy2.default.extend(!0, {
    data: {
        is_play: !1,
        trans_content: "",
        content: "",
        icon: "",
        now: 1,
        all_length: 0,
        comment_list: [],
        curTimeVal: 0,
        duration: 0,
        has_next: !1,
        ad_id: ""
    },
    id: null,
    url: "",
    count: 1,
    json: [],
    obj: {},
    page: 1,
    pagesize: 20,
    arr: [],
    onLoad: function(t) {
        var e = this;
        wx.getStorage({
            key: "items",
            success: function(t) {
                t && (e.json = t.data.items, e.id = t.data.items[0].id, e.setData({
                    trans_content: e.json[0].trans_content,
                    content: e.json[0].content,
                    icon: t.data.icon,
                    all_length: e.json.length
                }), e.obj = {
                    id: e.id,
                    content: e.data.content
                }, wx.setStorage({
                    key: "content_en",
                    data: e.obj
                }), e.data.content && e.buildVoice());
            }
        }), wx.getStorage({
            key: "base_content",
            success: function(t) {
                t = t.data, e.setData({
                    ad_id: t.ad_id
                });
            }
        });
    },
    buildVoice: function() {
        var e = this, t = this.data.content, n = this.getStorageSync("formId").join(",");
        app.util.request({
            url: "entry/wxapp/tts",
            data: {
                text: t,
                formId: n
            },
            success: function(t) {
                (t = t.data.data).url && (e.url = t.url, e.innerAudioContext.src = t.url);
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        this.setData({
            is_play: !1
        }), this.timer = setInterval(function() {
            t.id && (console.log(t.id, "id"), t.commentlistInit(), clearInterval(t.timer));
        }, 500);
    },
    onReachBottom: function() {
        this.data.has_next && (this.page++, this.getCommentlist());
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    play: function() {
        var e = this;
        this.setData({
            is_play: !0
        }), this.innerAudioContext.play(), this.innerAudioContext.onPlay(function(t) {
            e.updateTime();
        });
    },
    updateTime: function() {
        var i = this;
        this.innerAudioContext.onTimeUpdate(function(t) {
            var e = parseInt(i.innerAudioContext.duration), n = parseInt(i.innerAudioContext.currentTime);
            i.setData({
                duration: e,
                curTimeVal: n
            }), i.innerAudioContext.onEnded(function() {
                i.stop();
            });
        });
    },
    stop: function() {
        this.setData({
            curTimeVal: 0,
            is_play: !1
        }), this.innerAudioContext.stop();
    },
    pause: function() {
        this.setData({
            is_play: !1
        }), this.innerAudioContext.pause();
    },
    changeOne: function(t) {
        this.setStorageSync("formId", t.detail.formId), this.count >= this.json.length ? this.count = 1 : this.count++, 
        this.setData({
            now: this.count,
            is_play: !1,
            trans_content: this.json[this.count - 1].trans_content,
            content: this.json[this.count - 1].content
        }), this.id = this.json[this.count - 1].id, this.commentlistInit(), this.obj = {
            id: this.id,
            content: this.data.content
        }, wx.setStorage({
            key: "content_en",
            data: this.obj
        }), this.buildVoice();
    },
    changeMore: function(t) {
        this.setStorageSync("formId", t.detail.formId), app.util.redirectTo("more");
    },
    followUp: function(t) {
        this.setStorageSync("formId", t.detail.formId), app.util.redirectTo("read");
    },
    commentlistInit: function() {
        this.page = 1, this.arr = [], this.setData({
            comment_list: [],
            has_next: !1
        }), this.getCommentlist();
    },
    getCommentlist: function() {
        var n = this, t = this.getStorageSync("formId").join(",");
        app.util.request({
            url: "entry/wxapp/comment",
            data: {
                p_child_id: this.id,
                page: this.page,
                pagesize: this.pagesize,
                formId: t
            },
            success: function(t) {
                t = t.data.data, n.arr = n.arr.concat(t.rows);
                for (var e = 0; e < n.arr.length; e++) n.arr[e].created = n.diaplayTime(n.arr[e].created);
                n.setData({
                    comment_list: n.arr,
                    has_next: t.has_next
                });
            }
        });
    },
    playVoice: function(t) {
        this.setStorageSync("formId", t.detail.formId);
        var e = app.util.dataset(t).voice;
        this.$play(e);
    },
    diaplayTime: function(t) {
        var e = "", n = new Date(t), i = 864e5, a = new Date() - n, o = a / 2592e6, s = a / (7 * i), r = a / i, c = a / 36e5, d = a / 6e4;
        return a < 0 ? console.log("错误时间") : e = 1 < o ? parseInt(o) + "月前" : 1 < s ? parseInt(s) + "周前" : 1 < r ? parseInt(r) + "天前" : 1 < c ? parseInt(c) + "小时前" : 1 < d ? parseInt(d) + "分钟前" : "刚刚", 
        e;
    }
});

(0, _extends2.default)(init);