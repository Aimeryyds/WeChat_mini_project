var e = require("../../../@babel/runtime/helpers/interopRequireWildcard"), t = require("../../../services/report"), r = e(require("../../js/generate-poster")), a = (e(require("../../js/const")), 
require("../../js/login_manager")), o = getApp().global, n = require("../../js/authorize.js"), s = require("../../js/netspeed");

Component({
    properties: {
        fromPage: {
            type: String,
            value: ""
        },
        articleInfo: {
            type: Object,
            value: ""
        },
        shareType: {
            type: Number,
            value: ""
        },
        isShow: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        shareImagePath: "",
        shareCurTitleTips: "正在保存...",
        userInfo: {},
        isShareDialogShow: !1
    },
    ready: function() {
        this.setData({
            userInfo: o.userInfo
        });
    },
    methods: {
        _shareToPoster: function(e) {
            var r = this, o = this, n = e.currentTarget.dataset.sharetype;
            this.setData({
                isShareDialogShow: !1
            });
            var i = "wx" === n ? "clk_share2friend" : "clk_share2tl";
            if ((0, t.report)({
                opType: i,
                fromPage: this.properties.fromPage
            }), "wx" === n) return !1;
            this.setData({
                shareCurTitleTips: "正在保存..."
            }), s.usenet().then(function() {
                a.checkLogin("", r, function() {
                    o._doGeneratePoster();
                }, function() {
                    o._doGeneratePoster();
                });
            });
        },
        _doGeneratePoster: function() {
            var e = this, t = this.selectComponent("#authDialog");
            this.setData({
                userInfo: o.userInfo || {},
                isShareDialogShow: !1
            }), t.show("openSetting", "scope.writePhotosAlbum").then(function() {
                r.generatePosterAndDownload(e, e.data.userInfo, e.properties.articleInfo, e.properties.shareType);
            });
        },
        _closePosterDialog: function() {
            this.setData({
                shareImagePath: ""
            });
        },
        _handleDisappearShareDialog: function() {
            this.setData({
                isShareDialogShow: !1
            });
        },
        onAuthOkBtnTap: function(e) {
            n.onAuthOkBtnTap(this, e);
        },
        onAuthCancelBtnTap: function(e) {
            n.onAuthCancelBtnTap(this, e);
        },
        onAuthDialogOutTap: function(e) {
            n.onAuthDialogOutTap(this, e);
        },
        bindAuthGetUserInfo: function(e) {
            n.bindAuthGetUserInfo(this, e);
        },
        launchUserInfoAuthDialog: function(e, t) {
            n.launchUserInfoAuthDialog(this, e, t);
        }
    }
});