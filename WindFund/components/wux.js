function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.$wuxPrompt = exports.$wuxDialog = exports.$wuxButton = exports.$wuxActionSheet = void 0;

var t = e(require("actionsheet/actionsheet")), o = e(require("button/button")), r = e(require("dialog/dialog")), u = e(require("prompt/prompt"));

exports.$wuxActionSheet = t.default, exports.$wuxButton = o.default, exports.$wuxDialog = r.default, 
exports.$wuxPrompt = u.default;