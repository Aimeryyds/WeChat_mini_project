var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = e(require("../@babel/runtime/helpers/defineProperty")), t = e(require("../@babel/runtime/helpers/objectWithoutProperties")), o = e(require("../utils/logger")), i = require("../services/reportConst");

function n(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}

var a = {
    name: "poster",
    state: {},
    getter: {},
    method: {
        genPoster: function(e, a, c) {
            var s = c.articleId, p = c.qrType, u = (0, t.default)(c, [ "articleId", "qrType" ]), l = this._$store.userInfo, f = p || 0, b = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(o), !0).forEach(function(t) {
                        (0, r.default)(e, t, o[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : n(Object(o)).forEach(function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
                    });
                }
                return e;
            }({
                avatarUrl: l.avatarUrl,
                nickName: l.nickName,
                qrUrl: "".concat("https://view.inews.qq.com/generateImage?from=0", "&id=").concat(s, "&&type=").concat(f)
            }, u), O = {
                fromPage: e,
                pageArea: a,
                opType: i.OP_TYPE.sharePicClick
            };
            o.default.info("生成海报信息：", b, O), this.emit(this.event.draw, e, b, O);
        }
    },
    event: [ "draw" ]
};

exports.default = a;