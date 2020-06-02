function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    }
    return t;
}, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, r = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../pluginbehavior.js"));

Component({
    behaviors: [ r.default ],
    properties: {
        children: Array
    },
    data: {},
    attached: function() {
        var t = 0, e = !0, a = !1, r = void 0;
        try {
            for (var i, n = this.data.children[Symbol.iterator](); !(e = (i = n.next()).done); e = !0) {
                var o = i.value;
                if ("form_submit" == o.type) {
                    var s = this.createSubmitObject(o, t);
                    s.parseStyle(), s.parseStyle("actived");
                }
                t += 1;
            }
        } catch (t) {
            a = !0, r = t;
        } finally {
            try {
                !e && n.return && n.return();
            } finally {
                if (a) throw r;
            }
        }
    },
    methods: {
        formSubmit: function(t) {
            var e = getApp(), a = t.currentTarget.dataset.id, r = t.detail.formId;
            if (!/^[a-z0-9]+$/i.test(a)) return !1;
            var i = 0, n = [], o = [], s = t.detail.value, l = "/static/icons/warning.png";
            if (!Object.keys(s).length) return !1;
            for (var c in s) {
                var u = this.selectComponent("#comp_" + c), f = u.data;
                if (n.push({
                    id: c,
                    reval: f.value
                }), !0 === f.isUploading && o.push(c), 1 == f.param.required) {
                    if (0 == s[c].length) {
                        i++;
                        var d = {
                            haswarn: !0
                        };
                        u.setData(d);
                    }
                    if (u.checkValue && !u.checkValue()) return;
                }
            }
            if (i > 0) wx.showToast({
                title: "请先完善表单数据",
                image: l
            }); else if (o.length > 0) wx.showToast({
                title: "正在传送文件，请稍后再试",
                icon: "none"
            }); else {
                var p = this, h = t.detail.target.dataset.tips;
                wx.showLoading({
                    title: "处理中",
                    mask: !0
                }), e.apiRequest("form_submit", "index", {
                    method: "POST",
                    data: {
                        frmid: a,
                        frmdata: JSON.stringify(s),
                        formId: r
                    },
                    success: function(t) {
                        if (wx.hideLoading(), "ERROR" == t.data.result) return wx.showToast({
                            title: t.data.errmsg,
                            image: l
                        }), !1;
                        wx.showToast({
                            title: h,
                            icon: "success",
                            complete: function() {
                                p.formReset(n);
                            }
                        });
                    },
                    fail: function(t) {
                        wx.showToast({
                            title: t.errMsg,
                            icon: "none",
                            duration: 2500,
                            complete: function() {
                                wx.hideLoading();
                            }
                        });
                    }
                });
            }
        },
        formReset: function(t) {
            var e = this;
            if (!Array.isArray(t)) return !1;
            t.forEach(function(t) {
                var r = t.id, i = e.selectComponent("#comp_" + r), n = null;
                switch (a(t.reval)) {
                  case "string":
                    n = "";
                    break;

                  case "number":
                    n = -1;
                    break;

                  case "object":
                    n = Array.isArray(t.reval) ? [] : {};
                }
                var o = {
                    value: n
                }, s = i.data || {};
                !0 === s.isImageFile && (o.showClear = !1, o.inptext = s.param.inpval), i.setData(o);
            });
        },
        createSubmitObject: function(a, r) {
            var i = a.id, n = a.childprop, o = this, s = {
                init_data: {
                    actived_style: "",
                    inner_style: ""
                },
                setData: function(t) {
                    var e = {};
                    for (var a in t) e["children[" + r + "].data." + a] = t[a];
                    o.setData(e);
                },
                parseStyle: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "inner", a = "", r = {}, i = this.data.param;
                    r = "inner" == e ? i.inner_style : i.actived;
                    var n = getApp();
                    for (var o in r) {
                        var s = r[o];
                        "number" == typeof s && (s = n.px2rpx(s)), a += o + ":" + s + ";";
                    }
                    this.setData(t({}, e + "_style", a));
                }
            };
            Object.defineProperty(s, "data", {
                get: function() {
                    return a.data;
                }
            });
            var l = {};
            return l["children[" + r + "].data"] = e({
                param: n,
                layerid: i
            }, s.init_data), this.setData(l), s;
        }
    }
});