var e = function() {}, t = [ "getUserInfo", "getPhoneNumber", "openSetting" ];

Component({
    properties: {
        contentPadding: {
            type: String,
            value: ""
        },
        bottom: {
            type: Boolean,
            value: !1
        }
    },
    options: {
        multipleSlots: !0
    },
    data: {
        title: "",
        buttons: [],
        message: "",
        selector: "#zan-dialog",
        buttonsShowVertical: !1,
        showConfirmButton: !0,
        confirmButtonText: "确定",
        confirmButtonColor: "#3f7de5",
        showCancelButton: !1,
        cancelButtonText: "取消",
        cancelButtonColor: "#333",
        key: "",
        autoClose: !0,
        show: !1,
        showCustomBtns: !1,
        promiseFunc: {},
        openTypePromiseFunc: {},
        header: ""
    },
    methods: {
        handle: function(e) {
            e.detail.value;
            this.setData({
                inputVal: e.detail.value
            });
        },
        handleButtonClick: function(n) {
            var o = this, a = n.currentTarget, s = (void 0 === a ? {} : a).dataset, i = void 0 === s ? {} : s, r = this.data.promiseFunc || {}, p = r.resolve, l = void 0 === p ? e : p, c = r.reject, d = void 0 === c ? e : c;
            if (this.data.autoClose && this.setData({
                show: !1
            }), this.data.showCustomBtns) {
                var h = t.indexOf(i.openType) > -1, u = {
                    type: i.type
                };
                return h && (u.openDataPromise = new Promise(function(e, t) {
                    o.setData({
                        openTypePromiseFunc: {
                            resolve: e,
                            reject: t
                        }
                    });
                }), u.hasOpenDataPromise = !0), void l(u);
            }
            this.data.onConfirm || this.data.onCancel ? "confirm" === i.type ? this.data.contnet ? this.data.onConfirm({
                type: "confirm",
                content: this.data.inputVal
            }) : this.data.onConfirm({
                type: "confirm"
            }) : this.data.onCancel({
                type: "cancel"
            }) : ("confirm" === i.type ? l({
                type: "confirm"
            }) : d({
                type: "cancel"
            }), this.setData({
                promiseFunc: {}
            }));
        },
        handleUserInfoResponse: function(e) {
            var t = e.detail;
            this.__handleOpenDataResponse({
                type: "getUserInfo:ok" === t.errMsg ? "resolve" : "reject",
                data: t
            });
        },
        handlePhoneResponse: function(e) {
            var t = e.detail;
            this.__handleOpenDataResponse({
                type: "getPhoneNumber:ok" === t.errMsg ? "resolve" : "reject",
                data: t
            });
        },
        handleOpenSettingResponse: function(e) {
            var t = e.detail;
            this.__handleOpenDataResponse({
                type: "openSetting:ok" === t.errMsg ? "resolve" : "reject",
                data: t
            });
        },
        __handleOpenDataResponse: function(t) {
            var n = t.type, o = void 0 === n ? "resolve" : n, a = t.data, s = void 0 === a ? {} : a;
            ((this.data.openTypePromiseFunc || {})[o] || e)(s), this.setData({
                openTypePromiseFunc: null
            });
        }
    }
});