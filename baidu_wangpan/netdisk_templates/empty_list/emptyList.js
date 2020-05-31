Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clickBtn = void 0;

var e = require("../../netdisk_utils/account.js");

exports.clickBtn = function() {
    (0, e.bindNormalAccount)(wx.getCurrentViewPage().route);
};