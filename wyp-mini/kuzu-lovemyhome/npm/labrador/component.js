function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = module.exports = {};

Object.defineProperty(t, "__esModule", {
    value: !0
});

var s = e(require("../babel-runtime/helpers/defineProperty.js")), a = e(require("../babel-runtime/core-js/object/keys.js")), o = e(require("../babel-runtime/core-js/object/assign.js")), i = e(require("../babel-runtime/helpers/classCallCheck.js")), r = e(require("../babel-runtime/helpers/createClass.js")), n = e(require("../deep-equal/index.js")), p = e(require("../lodash/keyBy.js")), c = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    return t.default = e, t;
}(require("./utils.js")), u = function() {
    function e(t) {
        (0, i.default)(this, e), this.props = (0, o.default)({}, this.constructor.defaultProps, t), 
        this._setStateQueue = [], this._setStateCallbacks = [];
    }
    return (0, r.default)(e, [ {
        key: "setState",
        value: function(e, t) {
            var s = this;
            "string" == typeof e && console.error(this.id + "#setState() 第一个参数不能为字符串"), this._inited || console.error(this.id + ' 组件未自动初始化之前请勿调用setState()，如果在组件构造函数中请直接使用"this.state={}"赋值语法'), 
            this._setStateQueue.push(e), t && this._setStateCallbacks.push(t), this._setStateTimer || (this._setStateTimer = setTimeout(function() {
                s._setStateTimer = 0;
                var e = s.state, t = !1;
                s._setStateQueue.forEach(function(a) {
                    if ("function" == typeof a && (a = a(e, s.props)), c.shouldUpdate(e, a)) {
                        t = !0;
                        var i = c.getDebugObject(e), r = c.getDebugObject(a);
                        e = (0, o.default)({}, e, a), console.log("%c%s setState(%o) : %o -> %o Component:%o", "color:#2a8f99", s.id, r, i, c.getDebugObject(e), s);
                    } else console.log("%c%s setState(%o) ignored", "color:#fcc", s.id, c.getDebugObject(a));
                }), s.state = e, s._setStateQueue = [], s._setStateCallbacks.forEach(function(e) {
                    return e();
                }), s._setStateCallbacks = [], t && s._update();
            }));
        }
    }, {
        key: "_init",
        value: function(e, t, s, a) {
            this._inited || (this._setKey(e, t, s, a), this.data && console.error(this.id + " Component data属性和 setData方法已经废弃,请使用state 和 setState代替"), 
            console.log("%c%s init %o", "color:#9a23cc", this.id, this), this.state || (this.state = {}), 
            this._children = {}, this._checkProps(), e && this.onLoad && (console.log("%c%s onLoad()", "color:#9a23cc", this.id), 
            this.onLoad(this.page._loadOptions)), e && this.page._ready && c.callLifecycle(this, "onReady"), 
            e && this.page._show && c.callLifecycle(this, "onShow"), this._inited = !0, this._update());
        }
    }, {
        key: "_setKey",
        value: function(e, t, s, a) {
            this.key = e, this._listIndex = s, this._listKey = a, t && (this.page = t.page, 
            this.id = t.id + ":" + e), this.parent = t, e && t && t.path ? this.path = t.path + "." + e : this.path = e, 
            "number" == typeof s && (this.path += "." + s, this.id += "." + s), this.name = this.constructor.name || this.path, 
            "props" !== e && "state" !== e || console.error(t.id + " 的子组件'" + this.name + "'的'key'不能设置为'props'或'state'，请修改 " + t.id + "#children() 方法的返回值");
        }
    }, {
        key: "_update",
        value: function() {
            var e = this;
            this._updateTimer || (this._updateTimer = setTimeout(function() {
                e._updateTimer = 0;
                var t = e.path ? e.path + "." : "", s = {};
                s[t + "props"] = e.props, s[t + "state"] = e.state, e.page.updateData(s), e._updateChildren();
            }));
        }
    }, {
        key: "_checkProps",
        value: function() {
            var e = this;
            this.propsTypes && console.warn('组件"' + this.name + '"的"propsTypes"属性应该为静态static'), 
            this.constructor.propTypes && (0, a.default)(this.constructor.propTypes).forEach(function(t) {
                var s = e.constructor.propTypes[t];
                if ("function" == typeof s) {
                    var a = s(e.props, t, e.name);
                    a && console.warn(a.message);
                } else console.warn('组件"' + e.name + '"的"' + t + '"属性类型检测器不是一个有效函数');
            });
        }
    }, {
        key: "_updateChildren",
        value: function() {
            var e = this, t = this._children || {}, o = this.children && this.children();
            return (0, n.default)(o, this._childrenConfigs) || (console.log("%c%s %s -> %o", "color:#9a23cc", this.id, "children()", o), 
            (0, a.default)(o).forEach(function(i) {
                var r = o[i];
                if (Array.isArray(r)) !function() {
                    var o = {}, n = [], u = t[i];
                    u && Array.isArray(u) && u.forEach(function(e) {
                        var t = e._listKey;
                        (t || 0 === t) && (o[t] = e);
                    }), u = [], r.forEach(function(t, s) {
                        void 0 === t.key && console.warn('"' + e.name + '"的子组件"' + i + '"列表项必须包含"key"属性定义');
                        var a = void 0, r = null !== t.key && void 0 !== t.key ? String(t.key) : "";
                        r && o.hasOwnProperty(r) && (-1 === n.indexOf(r) ? (a = o[r], delete o[r]) : console.warn('"' + e.name + '"的子组件"' + i + '"列表项必须"key"属性定义发现重复值："' + r + '"'), 
                        n.push(r)), u.push(e._updateChild(i, a, t, s));
                    }), (0, a.default)(o).forEach(function(e) {
                        c.callLifecycle(o[e], "onUnload");
                    }), t[i] = {
                        _children: (0, p.default)(u, function(e) {
                            return e._listKey;
                        })
                    };
                    var l = [];
                    u.forEach(function(e) {
                        l.push({
                            props: e.props,
                            state: e.state,
                            __k: e._listKey
                        });
                    });
                    var h = e.path ? e.path + "." + i : i;
                    e.page.updateData((0, s.default)({}, h, l));
                }(); else {
                    var n = t[i];
                    if (t[i] = e._updateChild(i, n, r), n) {
                        var u = {};
                        u[n.path + ".props"] = n.props, u[n.path + ".state"] = n.state, e.page.updateData(u);
                    }
                }
            })), this._childrenConfigs = o, this._children = t, t;
        }
    }, {
        key: "_updateChild",
        value: function(e, t, s, a) {
            if (t) {
                if (t._setKey(e, this, a, s.key), s.props && c.shouldUpdate(t.props, s.props)) {
                    var i = void 0;
                    if (i = t.props && t.props.merge && t.props.asMutable ? t.props.merge(s.props) : (0, 
                    o.default)({}, t.props, s.props), t.onUpdate) {
                        var r = c.getDebugObject(t.props);
                        t.onUpdate(i), console.log("%c%s onUpdate(%o) -> %o Component:%o", "color:#2a8f99", this.id, r, c.getDebugObject(t.props), t);
                    }
                    t.props = i, t._update();
                }
            } else (t = new (0, s.component)(s.props))._config = s, t._init(e, this, a, s.key);
            return t;
        }
    } ]), e;
}();

t.default = u;