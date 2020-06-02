var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../utils/mlodash")), i = (e(require("../../utils/logger")), 
require("../../store/index")), s = "getUserInfo:ok", n = "tapCancel";

Component({
    properties: {
        fullCover: Boolean
    },
    data: {
        show: !1,
        dialogStyle: "",
        coverStyle: ""
    },
    created: function() {
        this.hasRegistered = !1;
    },
    attached: function() {
        this.registerEvent();
    },
    detached: function() {
        this.cancelEvent("component detached");
    },
    pageLifetimes: {
        show: function() {
            this.registerEvent();
        },
        hide: function() {
            this.cancelEvent("page hide");
        }
    },
    methods: {
        none: function() {},
        handleCancel: function() {
            this.data.fullCover || (this.setData({
                show: !1
            }), t.default.isFunction(this.reject) && this.reject("cancelEvent: " + n));
        },
        handleApprove: function() {
            var e = this;
            this.data.fullCover ? this.setData({
                dialogStyle: "opacity: 0;"
            }) : setTimeout(function() {
                e.setData({
                    coverStyle: "opacity: 0;"
                });
            }, 100);
        },
        handleGetUserInfo: function(e) {
            this.setData({
                show: !1
            });
            var i = e && e.detail || {};
            (i.errMsg || "") === s ? this.resolve(i) : t.default.isFunction(this.reject) && this.reject(i);
        },
        registerEvent: function() {
            var e = this;
            this.hasRegistered || (this.hasRegistered = !0, this.showDialog = function(t, i) {
                e.setData({
                    show: !0,
                    coverStyle: "",
                    dialogStyle: ""
                }), e.resolve = t, e.reject = i;
            }, i.userInfo.on(i.userInfo.event.showAuthButton, this.showDialog));
        },
        cancelEvent: function(e) {
            t.default.isFunction(this.reject) && this.reject("cancelEvent: " + e), this.setData({
                show: !1
            }), i.userInfo.off(i.userInfo.event.showAuthButton, this.showDialog), this.resolve = null, 
            this.reject = null, this.hasRegistered = !1;
        }
    }
});