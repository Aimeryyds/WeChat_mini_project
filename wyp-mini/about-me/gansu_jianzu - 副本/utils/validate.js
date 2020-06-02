var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(function(e, n, r) {
    var i = function t(e, n, r) {
        r = o.extend({}, o.options, r);
        var i = o.runValidations(e, n, r);
        if (i.some(function(t) {
            return o.isPromise(t.error);
        })) throw new Error("Use validate.async if you want support for promises");
        return t.processValidationResults(i, r);
    }, o = i;
    o.extend = function(t) {
        return [].slice.call(arguments, 1).forEach(function(e) {
            for (var n in e) t[n] = e[n];
        }), t;
    }, o.extend(i, {
        version: {
            major: 0,
            minor: 12,
            patch: 0,
            metadata: "development",
            toString: function() {
                var t = o.format("%{major}.%{minor}.%{patch}", o.version);
                return o.isEmpty(o.version.metadata) || (t += "+" + o.version.metadata), t;
            }
        },
        Promise: "undefined" != typeof Promise ? Promise : null,
        EMPTY_STRING_REGEXP: /^\s*$/,
        runValidations: function(t, e, n) {
            var r, i, s, a, u, f, l, c = [];
            (o.isDomElement(t) || o.isJqueryElement(t)) && (t = o.collectFormValues(t));
            for (r in e) {
                s = o.getDeepObjectValue(t, r), a = o.result(e[r], s, t, r, n, e);
                for (i in a) {
                    if (!(u = o.validators[i])) throw l = o.format("Unknown validator %{name}", {
                        name: i
                    }), new Error(l);
                    f = a[i], (f = o.result(f, s, t, r, n, e)) && c.push({
                        attribute: r,
                        value: s,
                        validator: i,
                        globalOptions: n,
                        attributes: t,
                        options: f,
                        error: u.call(u, s, f, r, t, n)
                    });
                }
            }
            return c;
        },
        processValidationResults: function(t, e) {
            t = o.pruneEmptyErrors(t, e), t = o.expandMultipleErrors(t, e);
            var n = e.format || "grouped";
            if ("function" != typeof o.formatters[n]) throw new Error(o.format("Unknown format %{format}", e));
            return t = o.formatters[n](t), o.isEmpty(t) ? void 0 : t;
        },
        async: function(t, e, n) {
            var r = (n = o.extend({}, o.async.options, n)).wrapErrors || function(t) {
                return t;
            };
            !1 !== n.cleanAttributes && (t = o.cleanAttributes(t, e));
            var i = o.runValidations(t, e, n);
            return new o.Promise(function(s, a) {
                o.waitForResults(i).then(function() {
                    var u = o.processValidationResults(i, n);
                    u ? a(new r(u, n, t, e)) : s(t);
                }, function(t) {
                    a(t);
                });
            });
        },
        single: function(t, e, n) {
            return n = o.extend({}, o.single.options, n, {
                format: "flat",
                fullMessages: !1
            }), o({
                single: t
            }, {
                single: e
            }, n);
        },
        waitForResults: function(t) {
            return t.reduce(function(t, e) {
                return o.isPromise(e.error) ? t.then(function() {
                    return e.error.then(function(t) {
                        e.error = t || null;
                    });
                }) : t;
            }, new o.Promise(function(t) {
                t();
            }));
        },
        result: function(t) {
            var e = [].slice.call(arguments, 1);
            return "function" == typeof t && (t = t.apply(null, e)), t;
        },
        isNumber: function(t) {
            return "number" == typeof t && !isNaN(t);
        },
        isFunction: function(t) {
            return "function" == typeof t;
        },
        isInteger: function(t) {
            return o.isNumber(t) && t % 1 == 0;
        },
        isBoolean: function(t) {
            return "boolean" == typeof t;
        },
        isObject: function(t) {
            return t === Object(t);
        },
        isDate: function(t) {
            return t instanceof Date;
        },
        isDefined: function(t) {
            return null !== t && void 0 !== t;
        },
        isPromise: function(t) {
            return !!t && o.isFunction(t.then);
        },
        isJqueryElement: function(t) {
            return t && o.isString(t.jquery);
        },
        isDomElement: function(e) {
            return !!e && (!(!e.querySelectorAll || !e.querySelector) && (!(!o.isObject(document) || e !== document) || ("object" === ("undefined" == typeof HTMLElement ? "undefined" : t(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : t(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName)));
        },
        isEmpty: function(t) {
            var e;
            if (!o.isDefined(t)) return !0;
            if (o.isFunction(t)) return !1;
            if (o.isString(t)) return o.EMPTY_STRING_REGEXP.test(t);
            if (o.isArray(t)) return 0 === t.length;
            if (o.isDate(t)) return !1;
            if (o.isObject(t)) {
                for (e in t) return !1;
                return !0;
            }
            return !1;
        },
        format: o.extend(function(t, e) {
            return o.isString(t) ? t.replace(o.format.FORMAT_REGEXP, function(t, n, r) {
                return "%" === n ? "%{" + r + "}" : String(e[r]);
            }) : t;
        }, {
            FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
        }),
        prettify: function(t) {
            return o.isNumber(t) ? 100 * t % 1 == 0 ? "" + t : parseFloat(Math.round(100 * t) / 100).toFixed(2) : o.isArray(t) ? t.map(function(t) {
                return o.prettify(t);
            }).join(", ") : o.isObject(t) ? t.toString() : (t = "" + t).replace(/([^\s])\.([^\s])/g, "$1 $2").replace(/\\+/g, "").replace(/[_-]/g, " ").replace(/([a-z])([A-Z])/g, function(t, e, n) {
                return e + " " + n.toLowerCase();
            }).toLowerCase();
        },
        stringifyValue: function(t, e) {
            return (e && e.prettify || o.prettify)(t);
        },
        isString: function(t) {
            return "string" == typeof t;
        },
        isArray: function(t) {
            return "[object Array]" === {}.toString.call(t);
        },
        isHash: function(t) {
            return o.isObject(t) && !o.isArray(t) && !o.isFunction(t);
        },
        contains: function(t, e) {
            return !!o.isDefined(t) && (o.isArray(t) ? -1 !== t.indexOf(e) : e in t);
        },
        unique: function(t) {
            return o.isArray(t) ? t.filter(function(t, e, n) {
                return n.indexOf(t) == e;
            }) : t;
        },
        forEachKeyInKeypath: function(t, e, n) {
            if (o.isString(e)) {
                var r, i = "", s = !1;
                for (r = 0; r < e.length; ++r) switch (e[r]) {
                  case ".":
                    s ? (s = !1, i += ".") : (t = n(t, i, !1), i = "");
                    break;

                  case "\\":
                    s ? (s = !1, i += "\\") : s = !0;
                    break;

                  default:
                    s = !1, i += e[r];
                }
                return n(t, i, !0);
            }
        },
        getDeepObjectValue: function(t, e) {
            if (o.isObject(t)) return o.forEachKeyInKeypath(t, e, function(t, e) {
                if (o.isObject(t)) return t[e];
            });
        },
        collectFormValues: function(t, e) {
            var n, r, i, s, a, u, f = {};
            if (o.isJqueryElement(t) && (t = t[0]), !t) return f;
            for (e = e || {}, s = t.querySelectorAll("input[name], textarea[name]"), n = 0; n < s.length; ++n) i = s.item(n), 
            o.isDefined(i.getAttribute("data-ignored")) || (name = i.name.replace(/\./g, "\\\\."), 
            u = o.sanitizeFormValue(i.value, e), "number" === i.type ? u = u ? +u : null : "checkbox" === i.type ? i.attributes.value ? i.checked || (u = f[name] || null) : u = i.checked : "radio" === i.type && (i.checked || (u = f[name] || null)), 
            f[name] = u);
            for (s = t.querySelectorAll("select[name]"), n = 0; n < s.length; ++n) if (i = s.item(n), 
            !o.isDefined(i.getAttribute("data-ignored"))) {
                if (i.multiple) {
                    u = [];
                    for (r in i.options) (a = i.options[r]) && a.selected && u.push(o.sanitizeFormValue(a.value, e));
                } else {
                    var l = void 0 !== i.options[i.selectedIndex] ? i.options[i.selectedIndex].value : "";
                    u = o.sanitizeFormValue(l, e);
                }
                f[i.name] = u;
            }
            return f;
        },
        sanitizeFormValue: function(t, e) {
            return e.trim && o.isString(t) && (t = t.trim()), !1 !== e.nullify && "" === t ? null : t;
        },
        capitalize: function(t) {
            return o.isString(t) ? t[0].toUpperCase() + t.slice(1) : t;
        },
        pruneEmptyErrors: function(t) {
            return t.filter(function(t) {
                return !o.isEmpty(t.error);
            });
        },
        expandMultipleErrors: function(t) {
            var e = [];
            return t.forEach(function(t) {
                o.isArray(t.error) ? t.error.forEach(function(n) {
                    e.push(o.extend({}, t, {
                        error: n
                    }));
                }) : e.push(t);
            }), e;
        },
        convertErrorMessages: function(t, e) {
            var n = [], r = (e = e || {}).prettify || o.prettify;
            return t.forEach(function(t) {
                var i = o.result(t.error, t.value, t.attribute, t.options, t.attributes, t.globalOptions);
                o.isString(i) ? ("^" === i[0] ? i = i.slice(1) : !1 !== e.fullMessages && (i = o.capitalize(r(t.attribute)) + " " + i), 
                i = i.replace(/\\\^/g, "^"), i = o.format(i, {
                    value: o.stringifyValue(t.value, e)
                }), n.push(o.extend({}, t, {
                    error: i
                }))) : n.push(t);
            }), n;
        },
        groupErrorsByAttribute: function(t) {
            var e = {};
            return t.forEach(function(t) {
                var n = e[t.attribute];
                n ? n.push(t) : e[t.attribute] = [ t ];
            }), e;
        },
        flattenErrorsToArray: function(t) {
            return t.map(function(t) {
                return t.error;
            }).filter(function(t, e, n) {
                return n.indexOf(t) === e;
            });
        },
        cleanAttributes: function(t, e) {
            function n(t, e, n) {
                return o.isObject(t[e]) ? t[e] : t[e] = !!n || {};
            }
            function r(t, e) {
                if (!o.isObject(t)) return t;
                var n, i, s = o.extend({}, t);
                for (i in t) n = e[i], o.isObject(n) ? s[i] = r(s[i], n) : n || delete s[i];
                return s;
            }
            return o.isObject(e) && o.isObject(t) ? (e = function(t) {
                var e, r = {};
                for (e in t) t[e] && o.forEachKeyInKeypath(r, e, n);
                return r;
            }(e), r(t, e)) : {};
        },
        exposeModule: function(t, e, n, r, i) {
            n ? (r && r.exports && (n = r.exports = t), n.validate = t) : (e.validate = t, t.isFunction(i) && i.amd && i([], function() {
                return t;
            }));
        },
        warn: function(t) {
            "undefined" != typeof console && console.warn && console.warn("[validate.js] " + t);
        },
        error: function(t) {
            "undefined" != typeof console && console.error && console.error("[validate.js] " + t);
        }
    }), i.validators = {
        presence: function(t, e) {
            if (!1 !== (e = o.extend({}, this.options, e)).allowEmpty ? !o.isDefined(t) : o.isEmpty(t)) return "不能为空";
        },
        length: function(t, e, n) {
            if (o.isDefined(t)) {
                var r, i = (e = o.extend({}, this.options, e)).is, s = e.maximum, a = e.minimum, u = [], f = (t = (e.tokenizer || function(t) {
                    return t;
                })(t)).length;
                return o.isNumber(f) ? (o.isNumber(i) && f !== i && (r = e.wrongLength || this.wrongLength || "is the wrong length (should be %{count} characters)", 
                u.push(o.format(r, {
                    count: i
                }))), o.isNumber(a) && f < a && (r = e.tooShort || this.tooShort || "is too short (minimum is %{count} characters)", 
                u.push(o.format(r, {
                    count: a
                }))), o.isNumber(s) && f > s && (r = e.tooLong || this.tooLong || "is too long (maximum is %{count} characters)", 
                u.push(o.format(r, {
                    count: s
                }))), u.length > 0 ? e.message || u : void 0) : e.message || this.notValid || "has an incorrect length";
            }
        },
        numericality: function(t, e, n, r, i) {
            if (o.isDefined(t) && !o.isEmpty(t)) {
                var s, a, u = [], f = {
                    greaterThan: function(t, e) {
                        return t > e;
                    },
                    greaterThanOrEqualTo: function(t, e) {
                        return t >= e;
                    },
                    equalTo: function(t, e) {
                        return t === e;
                    },
                    lessThan: function(t, e) {
                        return t < e;
                    },
                    lessThanOrEqualTo: function(t, e) {
                        return t <= e;
                    },
                    divisibleBy: function(t, e) {
                        return t % e == 0;
                    }
                }, l = (e = o.extend({}, this.options, e)).prettify || i && i.prettify || o.prettify;
                if (o.isString(t) && e.strict) {
                    var c = "^-?(0|[1-9]\\d*)";
                    if (e.onlyInteger || (c += "(\\.\\d+)?"), c += "$", !new RegExp(c).test(t)) return e.message || e.notValid || this.notValid || this.message || "必须是数字";
                }
                if (!0 !== e.noStrings && o.isString(t) && !o.isEmpty(t) && (t = +t), !o.isNumber(t)) return e.message || e.notValid || this.notValid || this.message || "必须是数字";
                if (e.onlyInteger && !o.isInteger(t)) return e.message || e.notInteger || this.notInteger || this.message || "必须是整数";
                if (!e.onlyInteger && e.decimal) {
                    var d = t.toString().split(".")[1];
                    if (d && d.length > e.decimal) return "最多允许" + e.decimal + "位小数";
                }
                for (s in f) if (a = e[s], o.isNumber(a) && !f[s](t, a)) {
                    var m = "not" + o.capitalize(s), p = e[m] || this[m] || this.message || "必须%{type} %{count}", h = void 0;
                    switch (s) {
                      case "greaterThan":
                        h = "大于";
                        break;

                      case "greaterThanOrEqualTo":
                        h = "大于等于";
                        break;

                      case "lessThan":
                        h = "小于";
                        break;

                      case "lessThanOrEqualTo":
                        h = "小于等于";
                        break;

                      default:
                        h = s;
                    }
                    u.push(o.format(p, {
                        count: a,
                        type: l(h)
                    }));
                }
                return e.odd && t % 2 != 1 && u.push(e.notOdd || this.notOdd || this.message || "must be odd"), 
                e.even && t % 2 != 0 && u.push(e.notEven || this.notEven || this.message || "must be even"), 
                u.length ? e.message || u : void 0;
            }
        },
        datetime: o.extend(function(t, e) {
            if (!o.isFunction(this.parse) || !o.isFunction(this.format)) throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");
            if (o.isDefined(t)) {
                var n, r = [], i = (e = o.extend({}, this.options, e)).earliest ? this.parse(e.earliest, e) : NaN, s = e.latest ? this.parse(e.latest, e) : NaN;
                return t = this.parse(t, e), isNaN(t) || e.dateOnly && t % 864e5 != 0 ? (n = e.notValid || e.message || this.notValid || "must be a valid date", 
                o.format(n, {
                    value: arguments[0]
                })) : (!isNaN(i) && t < i && (n = e.tooEarly || e.message || this.tooEarly || "must be no earlier than %{date}", 
                n = o.format(n, {
                    value: this.format(t, e),
                    date: this.format(i, e)
                }), r.push(n)), !isNaN(s) && t > s && (n = e.tooLate || e.message || this.tooLate || "must be no later than %{date}", 
                n = o.format(n, {
                    date: this.format(s, e),
                    value: this.format(t, e)
                }), r.push(n)), r.length ? o.unique(r) : void 0);
            }
        }, {
            parse: null,
            format: null
        }),
        date: function(t, e) {
            return e = o.extend({}, e, {
                dateOnly: !0
            }), o.validators.datetime.call(o.validators.datetime, t, e);
        },
        format: function(t, e) {
            (o.isString(e) || e instanceof RegExp) && (e = {
                pattern: e
            });
            var n, r = (e = o.extend({}, this.options, e)).message || this.message || "is invalid", i = e.pattern;
            if (o.isDefined(t)) return o.isString(t) ? (o.isString(i) && (i = new RegExp(e.pattern, e.flags)), 
            (n = i.exec(t)) && n[0].length == t.length ? void 0 : r) : r;
        },
        inclusion: function(t, e) {
            if (o.isDefined(t) && (o.isArray(e) && (e = {
                within: e
            }), e = o.extend({}, this.options, e), !o.contains(e.within, t))) {
                var n = e.message || this.message || "^%{value} is not included in the list";
                return o.format(n, {
                    value: t
                });
            }
        },
        exclusion: function(t, e) {
            if (o.isDefined(t) && (o.isArray(e) && (e = {
                within: e
            }), e = o.extend({}, this.options, e), o.contains(e.within, t))) {
                var n = e.message || this.message || "^%{value} is restricted";
                return o.isString(e.within[t]) && (t = e.within[t]), o.format(n, {
                    value: t
                });
            }
        },
        email: o.extend(function(t, e) {
            var n = (e = o.extend({}, this.options, e)).message || this.message || "请输入合法的email";
            if (o.isDefined(t) && !o.isEmpty(t)) return o.isString(t) && this.PATTERN.exec(t) ? void 0 : n;
        }, {
            PATTERN: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i
        }),
        equality: function(t, e, n, r, i) {
            if (o.isDefined(t)) {
                o.isString(e) && (e = {
                    attribute: e
                });
                var s = (e = o.extend({}, this.options, e)).message || this.message || "is not equal to %{attribute}";
                if (o.isEmpty(e.attribute) || !o.isString(e.attribute)) throw new Error("The attribute must be a non empty string");
                var a = o.getDeepObjectValue(r, e.attribute), u = e.comparator || function(t, e) {
                    return t === e;
                }, f = e.prettify || i && i.prettify || o.prettify;
                return u(t, a, e, n, r) ? void 0 : o.format(s, {
                    attribute: f(e.attribute)
                });
            }
        },
        url: function(t, e) {
            if (o.isDefined(t) && !o.isEmpty(t)) {
                var n = (e = o.extend({}, this.options, e)).message || this.message || "请输入合法的网址，http或者https开头", r = e.schemes || this.schemes || [ "http", "https" ], i = e.allowLocal || this.allowLocal || !1;
                if (!o.isString(t)) return n;
                var s = "^(?:(?:" + r.join("|") + ")://)(?:\\S+(?::\\S*)?@)?(?:", a = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
                return i ? a += "?" : s += "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})", 
                s += "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" + a + ")(?::\\d{2,5})?(?:[/?#]\\S*)?$", 
                new RegExp(s, "i").exec(t) ? void 0 : n;
            }
        },
        cellphone: o.extend(function(t, e) {
            var n = (e = o.extend({}, this.options, e)).message || this.message || "请输入正确的手机号码";
            if (o.isDefined(t) && !o.isEmpty(t)) return o.isString(t) && this.PATTERN.exec(t) ? void 0 : n;
        }, {
            PATTERN: /^1(3|4|5|7|8)\d{9}$/
        }),
        idcard: o.extend(function(t, e) {
            var n = (e = o.extend({}, this.options, e)).message || this.message || "请输入合法的身份证号码";
            if (o.isDefined(t) && !o.isEmpty(t)) return o.isString(t) && this.PATTERN.exec(t) ? void 0 : n;
        }, {
            PATTERN: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
        })
    }, (i.formatters = {
        detailed: function(t) {
            return t;
        },
        flat: o.flattenErrorsToArray,
        grouped: function(t) {
            var e;
            t = o.groupErrorsByAttribute(t);
            for (e in t) t[e] = o.flattenErrorsToArray(t[e]);
            return t;
        },
        constraint: function(t) {
            var e;
            t = o.groupErrorsByAttribute(t);
            for (e in t) t[e] = t[e].map(function(t) {
                return t.validator;
            }).sort();
            return t;
        }
    }).array = function(t) {
        return t.map(function(t) {
            return t.error;
        });
    }, i.exposeModule(i, this, e, n, r);
}).call(void 0, "undefined" != typeof exports ? exports : null, "undefined" != typeof module ? module : null, "undefined" != typeof define ? define : null);