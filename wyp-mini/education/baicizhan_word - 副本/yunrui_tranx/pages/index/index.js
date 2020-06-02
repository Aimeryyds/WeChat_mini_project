var _extends = require("../../../libs/extends"), _extends2 = _interopRequireDefault(_extends), _deepcopy = require("../../../libs/deepcopy"), _deepcopy2 = _interopRequireDefault(_deepcopy);

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var app = getApp(), init = _deepcopy2.default.extend(!0, {
    data: {
        pic: "",
        phone: "",
        copycontent: "",
        showContent: !1,
        content: {},
        lang: "中 -> 英",
        tran_val: "",
        show_delete: !1,
        list: [],
        loading: !1,
        lastY: 0,
        cancel: !1,
        showlanglist: !1,
        langlist: [ "中 -> 英", "中 -> 日", "中 -> 韩", "英 -> 中" ],
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        islogin: !1,
        ad_id: "",
        float_ad_switch: null,
        float_ad_img: null,
        float_ad_right: 0,
        float_ad_bottom: 0,
        float_ad_url: "",
        web_src: "",
        score_add: null,
        score_after: 0,
        count: 0
    },
    nums: 0,
    types: "",
    tranVal: "",
    src: "zh",
    dest: "",
    isTran: !1,
    uid: "",
    onLoad: function(t) {
        this.init(), this.uid = t.uid ? t.uid : "";
    },
    onReady: function() {},
    onShow: function() {
        this.isTran = !1, this.checkAuthorize(), this.shake();
    },
    bindGetUserInfo: function(t) {
        var a = this;
        t.detail.userInfo && app.util.getUserInfo(function(t) {
            a.checkin(), a.setData({
                islogin: !0
            });
        });
    },
    shake: function() {
        var t = this;
        this.timer = setInterval(function() {
            t.nums++, t.setData({
                count: t.nums
            });
        }, 1e3);
    },
    onHide: function() {
        clearInterval(this.timer);
    },
    onUnload: function() {
        clearInterval(this.timer);
    },
    checkAuthorize: function() {
        var a = this;
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? a.setData({
                    islogin: !0
                }, function() {
                    a.checkin();
                }) : a.setData({
                    islogin: !1
                });
            }
        });
    },
    init: function() {
        var a = this;
        app.util.request({
            url: "entry/wxapp/base",
            success: function(t) {
                1 == (t = t.data.data).status ? a.setData({
                    showContent: !1
                }) : a.setData({
                    showContent: !0,
                    content: t.content
                }), t.content.init_tran && (a.tranVal = t.content.init_tran, a.types = "text", a.postTran()), 
                wx.setStorage({
                    key: "base_content",
                    data: t.content
                }), wx.setNavigationBarTitle({
                    title: t.name
                }), a.setData({
                    pic: t.pic,
                    phone: t.phone,
                    copycontent: t.name,
                    ad_id: t.content.ad_id,
                    float_ad_bottom: t.content.float_ad_bottom,
                    float_ad_img: t.content.float_ad_img,
                    float_ad_right: t.content.float_ad_right,
                    float_ad_switch: t.content.float_ad_switch,
                    float_ad_url: t.content.float_ad_url
                });
            }
        });
    },
    checkin: function() {
        var a = this;
        app.util.request({
            url: "entry/wxapp/checkin",
            data: {
                uid: this.uid
            },
            success: function(t) {
                t = t.data.data, a.setData({
                    score_add: t.score_add,
                    score_after: t.score_after
                }), wx.setStorageSync("score_after", t.score_after);
            },
            fail: function(t) {
                console.log(t, "err");
            }
        });
    },
    changeLang: function() {
        this.setData({
            showlanglist: !this.data.showlanglist
        });
    },
    sureLang: function(t) {
        var a = app.util.dataset(t).idx, e = this.data.langlist[a];
        switch (this.setData({
            lang: e,
            showlanglist: !1
        }), this.src = "zh", a) {
          case 0:
            this.dest = "en";
            break;

          case 1:
            this.dest = "jp";
            break;

          case 2:
            this.dest = "kr";
            break;

          case 3:
            this.src = "en", this.dest = "zh";
        }
    },
    linkmode: function(t, a) {
        "navigateTo" == t ? wx.navigateTo({
            url: a
        }) : "redirectTo" == t ? wx.redirectTo({
            url: a
        }) : "reLaunch" == t ? wx.reLaunch({
            url: a
        }) : wx.switchTab({
            url: a
        });
    },
    urlTo: function(t) {
        var a = app.util.dataset(t), e = a.url, n = a.type;
        "string" == typeof e ? this.linkmode(n, e) : wx.navigateToMiniProgram(e);
    },
    contact: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.phone
        });
    },
    clear: function() {
        this.setData({
            tran_val: "",
            show_delete: !1
        });
    },
    showDelete: function(t) {
        this.setData({
            show_delete: !0
        });
    },
    getTranContent: function(t) {
        this.tranVal = t.detail.value, this.types = "text", this.postTran();
    },
    postTran: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/tran",
            data: {
                src: this.src,
                dest: this.dest,
                type: this.types,
                keyword: this.tranVal
            },
            success: function(t) {
                var a = {
                    org_text: (t = t.data.data.data).org_text,
                    trans_text: t.trans_text,
                    type: "tran_content"
                };
                e.data.list.push(a), e.setData({
                    list: e.data.list,
                    tran_val: "",
                    show_delete: !1
                }, function() {
                    var t = e.data.list.length;
                    t % 6 != 0 && 1 != t || e.getCourserand(), e.pageScrollToBottom();
                }), e.tranVal = "";
            },
            fail: function(t) {
                console.log(t, "err");
            }
        });
    },
    getCourserand: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/courserand",
            success: function(t) {
                var a = (t = t.data.data).rows[0];
                e.data.list.push(a), e.setData({
                    list: e.data.list
                }, function() {
                    e.pageScrollToBottom();
                });
            }
        });
    },
    pageScrollToBottom: function() {
        wx.createSelectorQuery().select("#body").boundingClientRect(function(t) {
            wx.pageScrollTo({
                scrollTop: t.height
            });
        }).exec();
    },
    tape: function() {
        var a = this;
        this.uploading = !0, this.setData({
            loading: !0,
            cancel: !1
        }), this.$recordStart(function(t) {
            t = t.data, a.types = "voice", a.tranVal = t.url, a.postTran();
        });
    },
    stopRecord: function() {
        this.recorderManager.stop(), this.setData({
            loading: !1
        });
    },
    help: function() {
        app.util.navigateTo("help");
    },
    handletouchtart: function(t) {
        this.data.lastY = t.touches[0].pageY;
    },
    cancelTape: function(t) {
        var a = t.touches[0].pageY - this.data.lastY;
        50 < Math.abs(a) && (this.uploading = !1, this.setData({
            cancel: !0
        }));
    },
    toDetail: function(t) {
        var a = app.util.dataset(t).id;
        if (this.setStorageSync("formId", t.detail.formId), a) for (var e = 0; e < this.data.list.length; e++) if (this.data.list[e].id && this.data.list[e].id == a) {
            var n = this.data.list[e];
            wx.setStorage({
                key: "items",
                data: n
            }), app.util.navigateTo("details");
        }
    },
    playVoice: function(t) {
        var a = this;
        if (!this.isTran) {
            this.isTran = !0, this.setStorageSync("formId", t.detail.formId);
            var e = app.util.dataset(t).text, n = this.getStorageSync("formId").join(",");
            app.util.request({
                url: "entry/wxapp/tts",
                data: {
                    text: e,
                    formId: n
                },
                success: function(t) {
                    (t = t.data.data).url && (a.url = t.url, a.innerAudioContext.autoplay = !0, a.innerAudioContext.src = t.url, 
                    a.innerAudioContext.onEnded(function() {
                        a.innerAudioContext.stop(), a.isTran = !1;
                    }));
                },
                fail: function(t) {
                    console.log(t, "err tts");
                }
            });
        }
    },
    follow: function(t) {
        var a = app.util.dataset(t).content;
        wx.setStorage({
            key: "content_en",
            data: a
        }), app.util.navigateTo("read");
    },
    toWebView: function(t) {
        this.setStorageSync("formId", t.detail.formId), wx.setStorageSync("web_src", this.data.float_ad_url), 
        app.util.navigateTo("webview");
    },
    toGetStar: function(t) {
        this.setStorageSync("formId", t.detail.formId), app.util.navigateTo("invite");
    }
});

(0, _extends2.default)(init);