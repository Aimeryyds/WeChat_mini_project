function a(a) {
    if (Array.isArray(a)) {
        for (var e = 0, t = Array(a.length); e < a.length; e++) t[e] = a[e];
        return t;
    }
    return Array.from(a);
}

function e(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

var t = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../../network/api"));

Component({
    properties: {
        form: {
            type: Array,
            value: [],
            observer: "updateForm"
        },
        textareaObj: {
            type: Object,
            value: {},
            observer: "updateTextAreaObj"
        }
    },
    data: {
        focus: !1,
        imgUrl: [],
        formData: []
    },
    ready: function() {},
    methods: {
        updateForm: function(a, e) {
            if (e && !(e.length > 0)) {
                console.log("updateForm--------------", a, e);
                var t = a.map(function(a) {
                    switch (a.type) {
                      case "text":
                      case "textarea":
                        return {
                            label: a.label,
                            value: ""
                        };

                      case "radio":
                      case "checkbox":
                      case "upload":
                        return {
                            label: a.label,
                            value: []
                        };
                    }
                });
                this.setData({
                    formData: t
                });
            }
        },
        updateTextAreaObj: function(a, t) {
            if (a) {
                this.data.formData;
                var r = a.value, o = a.index;
                console.log("newVal", a), console.log("---this.data", this.data, r), this.setData(e({}, "formData[" + o + "].value", r)), 
                console.log("this.data---", this.data);
            }
        },
        handleRadioClick: function(a) {
            var t = a.target.dataset, r = t.value, o = t.index, n = t.optionindex;
            console.log("index=", o, n);
            var i = this.data, l = (i.formData, i.form);
            this.setData(e({}, "formData[" + o + "].value", [ r ]));
            var s = !l[o].options[n].checked, u = l[o].options.map(function(a) {
                return a.value === r ? a.checked = s : a.checked = !1, a;
            });
            this.setData(e({}, "form[" + o + "].options", u)), console.log("this.data", this.data);
        },
        handleCheckboxClick: function(t) {
            console.log(t);
            var r = t.target.dataset, o = r.value, n = r.index, i = r.optionindex, l = this.data, s = l.formData, u = l.form;
            this.setData(e({}, "formData[" + n + "].value", [].concat(a(s[n].value), [ o ])));
            var c = !u[n].options[i].checked;
            this.setData(e({}, "form[" + n + "].options[" + i + "].checked", c)), console.log("this.data", this.data);
        },
        handleChooseImg: function(a) {
            console.log("e---", a);
            var r = a.currentTarget.dataset.index, o = this;
            wx.chooseImage({
                count: 1,
                success: function(a) {
                    var n = a.tempFilePaths;
                    t.default.uploadImage(n[0]).then(function(a) {
                        var t = o.data.formData;
                        console.log("formData---", t, r);
                        var n = t[r].value;
                        n.push(a.url), o.setData(e({}, "formData[" + r + "].value", n));
                    }).catch(function(a) {
                        console.log("chooseimage", a);
                    });
                }
            });
        },
        handleRemoveImg: function(a) {
            var t = a.currentTarget.dataset, r = t.index, o = t.imgindex, n = this.data.formData[r].value;
            n.splice(o, 1), this.setData(e({}, "formData[" + r + "].value", n));
        },
        jumpTextarea: function(a) {
            var e = a.currentTarget.dataset.index, t = this.data.form[e], r = this.data.formData[e].value;
            getApp().setFlash("service_textarea_data", {
                data: t,
                index: e,
                value: r
            }), wx.navigateTo({
                url: "/pages/services/service_textarea/index"
            });
        },
        validate: function() {
            var a = this.data, e = a.form, t = a.formData;
            console.log("---form---formData", e, t);
            for (var r = [], o = 0; o < e.length; o++) {
                if (console.log("i==", o), e[o].require && this.isEmpty(t[o].value)) {
                    "radio" === e[o].type || "checkbox" === e[o].typ ? r.push("请选择" + e[o].label) : r.push("请输入" + e[o].label);
                    break;
                }
                "text" == e[o].type && "none" !== e[o].validate && ("email" != e[o].validate || this.validateEmail(t[o].value) || r.push("请输入正确的" + e[o].label), 
                "idcard" != e[o].validate || this.validateIDCard(t[o].value) || r.push("请输入正确的" + e[o].label), 
                "phone" != e[o].validate || this.validatePhone(t[o].value) || r.push("请输入正确的" + e[o].label));
            }
            return r;
        },
        validateIDCard: function(a) {
            var e = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            return this.isEmpty(a) || e.test(a);
        },
        validatePhone: function(a) {
            var e = /^1[0-9]{10}$/;
            return this.isEmpty(a) || e.test(a);
        },
        validateEmail: function(a) {
            var e = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
            return this.isEmpty(a) || e.test(a);
        },
        isEmpty: function(a) {
            if (null == a) return !0;
            if (Array.isArray(a) || "string" == typeof a || "function" == typeof a.splice || isBuffer(a) || isTypedArray(a) || isArguments(a)) return !a.length;
            var e = getTag(a);
            if ("[object Map]" == e || "[object Set]" == e) return !a.size;
            if (isPrototype(a)) return !Object.keys(a).length;
            for (var t in a) if (hasOwnProperty.call(a, t)) return !1;
            return !0;
        },
        handleFocus: function() {
            this.setData({
                focus: !0
            });
        },
        handleBlur: function() {
            this.setData({
                focus: !1
            });
        },
        handleNameChange: function(a) {
            var t = a.currentTarget.dataset.index, r = a.detail.value;
            this.setData(e({}, "formData[" + t + "].value", r));
        },
        getBookerInfo: function() {
            var a = this.data, e = a.form, t = a.formData;
            return e.map(function(a, e) {
                return {
                    label: a.label,
                    type: a.type,
                    value: t[e].value
                };
            });
        },
        getCellPhone: function() {
            for (var a = this.data, e = a.form, t = a.formData, r = "", o = 0; o < e.length; o++) if ("phone" === e[o].validate) {
                r = t[o].value || "";
                break;
            }
            return r;
        }
    }
});