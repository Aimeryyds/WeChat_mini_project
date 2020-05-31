var t = Object.assign || function(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, n = require("../../../netdisk_utils/common.js");

Component({
    options: {
        multipleSlots: !0
    },
    data: {
        isShow: !1,
        width: "",
        height: "",
        mpBgSrc: "",
        close: "",
        btnColor: "",
        singleBtn: "",
        doubleBtn: "",
        btn1: {
            isShow: !1,
            openType: "",
            btnBg: "",
            btnColor: "",
            btnText: ""
        },
        btn2: {
            isShow: !1,
            openType: "",
            btnBg: "",
            btnColor: "",
            btnText: ""
        },
        className: "single-btn",
        footerShow: !1
    },
    methods: {
        show: function(n) {
            var e = [];
            n.btn1 && 1 == +n.btn1.isShow && e.push("btn1"), n.btn2 && 1 == +n.btn2.isShow && e.push("btn2");
            var o = 2 === e.length ? "double-btn" : "single-btn";
            e.map(function(t, o) {
                var r = n[t];
                r.btnBg = r.btnBg ? r.btnBg : 2 === e.length ? n.doubleBtn : n.singleBtn, r.btnColor = r.btnColor ? r.btnColor : (e.length, 
                n.btnColor), r.hasOwnProperty("openShare") && (r.openType = 1 == +r.openShare ? "share" : "");
            });
            var r = e.length < 1;
            this.setData(t({}, n, {
                isShow: !0,
                className: o,
                footerShow: r
            }));
        },
        hide: function() {
            this.setData({
                isShow: !1
            }), this.triggerEvent("hide");
        },
        _btnEvent: function(t) {
            var n = t.currentTarget.dataset.btn;
            this.triggerEvent(n + "Event", this.data[n]);
        },
        formSubmit: function(t) {
            return (0, n.generateFormId)(t);
        },
        _touch: function() {}
    }
});