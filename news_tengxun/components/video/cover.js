var t = require("../../@babel/runtime/helpers/interopRequireDefault"), i = t(require("../../utils/logger")), e = t(require("../../utils/mlodash")), o = require("../../store/index"), n = require("../../utils/common");

Component({
    properties: {
        _uid: String,
        snapshot: String,
        playCount: {
            type: Number,
            observer: function(t, i) {
                t && t !== i && this.setData({
                    playCountStr: (0, n.formatCount)(t)
                });
            }
        },
        durationStr: String,
        title: String,
        showErrorTips: Boolean,
        showRetryTips: Boolean,
        showTopTitle: Boolean,
        errMsg: String
    },
    data: {
        playCountStr: "",
        showContinueTips: !1
    },
    created: function() {},
    attached: function() {},
    methods: {
        tapCover: function() {
            this.data.showErrorTips || this.isWifi() && (this.triggerEvent("tapCover"), i.default.info("video/cover: triggerEvent tapCover"));
        },
        tapContinue: function() {
            o.video.showTipsWhenNotWifi = !1, this.setData({
                showRetryTips: !1,
                showContinueTips: !1
            }), this.triggerEvent("tapCover"), i.default.info("video/cover: tapContinue triggerEvent ");
        },
        isWifi: function() {
            var t = this;
            if ("wifi" === o.systemInfo.networkType || !o.video.showTipsWhenNotWifi) return !0;
            this.data.showContinueTips || (this.setData({
                showContinueTips: !0
            }), e.default.forEach(o.video.continueTipsList, function(t) {
                return t();
            }), o.video.continueTipsList.length = 0, o.video.continueTipsList.push(function() {
                t.setData({
                    showContinueTips: !1
                });
            }));
        }
    }
});