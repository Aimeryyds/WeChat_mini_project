var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../@babel/runtime/helpers/defineProperty")), r = e(require("../utils/logger")), a = e(require("../utils/mlodash"));

function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, a);
    }
    return r;
}

function o(e) {
    for (var r = 1; r < arguments.length; r++) {
        var a = null != arguments[r] ? arguments[r] : {};
        r % 2 ? i(Object(a), !0).forEach(function(r) {
            (0, t.default)(e, r, a[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : i(Object(a)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
    }
    return e;
}

var s = {
    name: "follow",
    state: {
        hasSet: !1,
        userMap: {},
        mediaMap: {},
        topicMap: {},
        reqHandler: null
    },
    getter: {},
    method: {
        getFollowData: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return !this.hasSet && this._$store.userInfo.hasLogin || t.force ? this.reqHandler ? this.reqHandler : (this.reqHandler = this._$request.post(this._$URL.getUserSubTopicAndCpList, {
                rawData: this._$store.userInfo.rawData
            }).then(function(t) {
                return t && 0 === t.ret ? (e.topicMap = {}, e.userMap = {}, e.mediaMap = {}, a.default.forEach(t.topicIdList, function(t) {
                    return e.topicMap[t] = t;
                }), a.default.forEach(t.userIdList, function(t) {
                    t.type = Number(t.type), 0 === t.type ? e.userMap[t.id] = t : 1 === t.type && (e.mediaMap[t.id] = t);
                }), e.hasSet = !0, e.reqHandler = null, {
                    topicMap: e.topicMap,
                    userMap: e.userMap,
                    mediaMap: e.mediaMap
                }) : Promise.reject(t);
            }).catch(function(t) {
                return r.default.error("获取用户关注列表失败:", t), e.reqHandler = null, {
                    topicMap: e.topicMap,
                    userMap: e.userMap,
                    mediaMap: e.mediaMap
                };
            }), this.reqHandler) : Promise.resolve({
                topicMap: this.topicMap,
                userMap: this.userMap,
                mediaMap: this.mediaMap
            });
        },
        followUser: function(e) {
            var t = this;
            return this._$request.login().post(this._$URL.syncSubCp, o({
                rawData: this._$store.userInfo.rawData
            }, e)).then(function(e) {
                return e && 0 === e.ret ? (t.getFollowData({
                    force: !0
                }), e) : Promise.reject(e);
            });
        },
        focusOnTopic: function(e) {
            var t = this;
            return this._$request.login().post(this._$URL.syncSubTopic, o({
                rawData: this._$store.userInfo.rawData
            }, e)).then(function(e) {
                return e && 0 === e.ret ? (t.getFollowData({
                    force: !0
                }), e) : Promise.reject(e);
            });
        }
    },
    event: []
};

exports.default = s;