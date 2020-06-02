function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var a = require("../../../../network/api.js"), i = e(a), o = e(require("../../../../utils/location.js")), s = e(require("../../../../utils/validate.js")), n = e(require("../../../../behaviors/toast.js"));

Component({
    behaviors: [ n.default ],
    properties: {
        data: {
            type: Object,
            observer: function(e, t) {
                this.init();
            }
        }
    },
    data: {},
    attached: function() {},
    ready: function() {
        this.init();
    },
    detached: function() {},
    methods: {
        init: function() {
            var e = this, t = JSON.parse(JSON.stringify(this.data.data.template)), a = {};
            t.fields.forEach(function(t, i) {
                if ([ "date", "text", "textarea", "number", "location" ].includes(t.type) ? t.value = "" : t.value || (t.value = []), 
                a["" + t.name] = t.validations, "radio" == t.type || "checkbox" == t.type) {
                    var o = t.options.filter(function(e) {
                        return e.checked;
                    });
                    t.value = o;
                }
                if ("picker" == t.type) {
                    var s = t.options.findIndex(function(e) {
                        return e.checked;
                    });
                    t.selectedIndex = s, t.value = [ t.options[s] ];
                }
                if ("number" == t.type) {
                    var n = e.renderNumberFieldLabel(t);
                    t.label = t.label + n;
                }
            }), this.setData({
                formId: this.data.data.formId,
                form: t,
                rules: a
            }), console.log(this.data);
        },
        renderNumberFieldLabel: function(e) {
            var t = e.validations.numericality, a = t.onlyInteger, i = t.decimal, o = t.greaterThanOrEqualTo, s = t.lessThanOrEqualTo, n = [];
            return e.suffix && n.push("单位: " + e.suffix), !a && i > 0 && n.push("最多" + i + "位小数"), 
            void 0 === o && void 0 === s || (void 0 !== o && void 0 !== s ? n.push(o + " - " + s) : void 0 === o ? n.push("小于" + s) : void 0 === s && n.push("大于" + o)), 
            n.length > 0 ? "（" + n.join("，") + "）" : "";
        },
        resetForm: function() {
            var e = this.data, t = e.data, a = e.form;
            (a = t.template).fields.forEach(function(e) {
                var a = t.template.fields.find(function(t) {
                    return t.name == e.name;
                });
                e.value = void 0 == a.value ? "" : a.value;
            }), this.setData({
                form: a
            });
        },
        handleFormSubmit: function(e) {
            var t = this;
            console.log(this.data.form);
            var a = {}, o = this;
            this.data.form.fields.forEach(function(e) {
                e.error = "", a["" + e.name] = e.value;
            });
            var n = (0, s.default)(a, this.data.rules, {
                format: "detailed"
            });
            if (n && n.length > 0) {
                console.log("errorssssssssssssss", n);
                var r = this.data.form;
                r.fields.forEach(function(e) {
                    n.some(function(t) {
                        t.attribute != e.name || (e.error = t.error);
                    });
                }), this.setData({
                    form: r
                }), this.showToast("提交数据有误，请检查修改后重新提交");
            } else wx.showLoading({
                title: "提交中",
                modal: !0
            }), i.default.submitFeedback({
                id: this.data.formId,
                template: this.data.form.fields
            }).then(function(e) {
                wx.hideLoading(), o.showToast(t.data.form.submit.toast || "表单提交成功！"), o.init();
            }).catch(function(e) {
                wx.hideLoading(), console.log(e), o.showToast(e.errorMessage);
            });
        },
        hideDatePicker: function(e) {
            this.setData({
                "datePicker.currDate": "",
                "datePicker.showDatePicker": !1
            });
        },
        showDatePicker: function(e) {
            var t = e.currentTarget.dataset, a = t.index, i = t.date, o = t.enabletime;
            this.setData({
                datePicker: {
                    fieldIndex: a,
                    currDate: i || "",
                    showDatePicker: !0,
                    enableTime: o
                }
            }), console.log(this.data);
        },
        handleChooseImg: function(e) {
            var a = this, o = e.currentTarget.dataset.index;
            wx.chooseImage({
                count: 1,
                success: function(e) {
                    var s = e.tempFilePaths;
                    i.default.uploadImage(s[0]).then(function(e) {
                        var i = a.data.form.fields[o].value, s = void 0 === i ? [] : i;
                        s.push(e.url), a.setData(t({}, "form.fields[" + o + "].value", s));
                    }).catch(function(e) {
                        console.log("chooseimage", e);
                    });
                }
            });
        },
        handleRemoveImg: function(e) {
            var a = e.currentTarget.dataset, i = a.index, o = a.imgindex, s = this.data.form.fields[i].value;
            s.splice(o, 1), this.setData(t({}, "form.fields[" + i + "].value", s));
        },
        handleSelecteDate: function(e) {
            var a = e.target.dataset.index, i = e.detail.date;
            this.setData(t({
                "datePicker.showDatePicker": !1
            }, "form.fields[" + a + "].value", i));
        },
        handleSelecteTime: function(e) {
            var a = e.target.dataset.index;
            this.setData(t({
                "datePicker.showDatePicker": !1
            }, "form.fields[" + a + "].value", e.detail.value));
        },
        handleGetLocation: function(e) {
            var i = this, s = e.currentTarget.dataset.index;
            console.log(e), o.default.authLocation().then(function(e) {
                return wx.showLoading({
                    title: "定位中",
                    modal: !0
                }), o.default.queryLocation();
            }).then(function(e) {
                wx.hideLoading(), console.log(e), (0, a.queryAddress)({
                    latitude: e.latitude,
                    longitude: e.longitude
                }).then(function(e) {
                    var a = e.data, o = a.city, n = a.district, r = a.street, d = a.famousArea;
                    i.setData(t({}, "form.fields[" + s + "].value", o + n + r + d));
                });
            }).catch(function(e) {
                wx.hideLoading(), i.showToast("获取当前地址失败，请打开小程序设置中的位置开关或手动输入当前地址"), console.log(e);
            });
        },
        handleFieldChange: function(e) {
            var a, i = this;
            console.log(e);
            var o = e.target.dataset.index, s = e.detail.value, n = this.data.form.fields[o];
            switch (n.type) {
              case "radio":
              case "checkbox":
                this.setData(t({}, "form.fields[" + o + "].value", n.options.filter(function(e) {
                    return s.includes(e.id.toString());
                }))), n.options.forEach(function(e, a) {
                    s.includes(e.id.toString()) ? i.setData(t({}, "form.fields[" + o + "].options[" + a + "].checked", !0)) : i.setData(t({}, "form.fields[" + o + "].options[" + a + "].checked", !1));
                });
                break;

              case "picker":
                n.options.forEach(function(e, a) {
                    i.setData(t({}, "form.fields[" + o + "].options[" + a + "].checked", a == s));
                }), this.setData((a = {}, t(a, "form.fields[" + o + "].selectedIndex", s), t(a, "form.fields[" + o + "].value", [ n.options[s] ]), 
                a));
                break;

              default:
                this.setData(t({}, "form.fields[" + o + "].value", s));
            }
            console.log(this.data);
        }
    }
});