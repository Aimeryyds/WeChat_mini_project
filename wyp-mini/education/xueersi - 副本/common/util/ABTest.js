function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getABtest(e) {
    var t = wx.getStorageSync("openid"), a = wx.getStorageSync("userInfoStatus") || {}, n = wx.getStorageSync("weChatExpress") || {}, o = a.area_code || n.area_name || "", r = a.grade || n.grade || "", i = _wepy2.default.$instance.globalData.ABTestConfig[e], s = i.layerId, u = i.expId;
    return new Promise(function(a, n) {
        (0, _newCommon.newAxios)({
            url: _path2.default.abTest,
            data: {
                flowId: t,
                layerId: s,
                expId: u,
                city: o,
                grade: r
            }
        }).then(function(t) {
            t && t.data && 0 === t.status ? _wepy2.default.$instance.globalData.ABTestConfig[e].groupId = t.data.group_id : _wepy2.default.$instance.globalData.ABTestConfig[e].groupId = _wepy2.default.$instance.globalData.ABTestConfig[e].compare, 
            a();
        }, function() {
            a(), _wepy2.default.$instance.globalData.ABTestConfig[e].groupId = _wepy2.default.$instance.globalData.ABTestConfig[e].compare;
        });
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getABtest = void 0;

var _path = require("./../axios/path.js"), _path2 = _interopRequireDefault(_path), _newCommon = require("./newCommon.js"), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy);

exports.getABtest = getABtest;