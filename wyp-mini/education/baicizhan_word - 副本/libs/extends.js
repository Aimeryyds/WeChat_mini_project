Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
};

exports.default = Init;

var _deepcopy = require("./deepcopy"), _deepcopy2 = _interopRequireDefault(_deepcopy), _util = require("../utils/util"), _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _objectWithoutProperties(e, t) {
    var r = {};
    for (var o in e) 0 <= t.indexOf(o) || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
    return r;
}

var app = getApp(), recorderManager = wx.getRecorderManager(), innerAudioContext = wx.createInnerAudioContext(), config = _extends({
    formIdArr: [],
    isUpload: !0,
    uploading: !0
}, _util2.default, {
    $play: function(e) {
        e = e + "?time=" + +new Date(), this.innerAudioContext.autoplay = !0, this.innerAudioContext.src = e, 
        this.innerAudioContext.onWaiting(function() {
            console.log("加载中");
        }), this.innerAudioContext.onError(function(e) {
            console.log(e.errCode, e.errMsg);
        });
    },
    uploadFile: function(e, t, r) {
        var o = this;
        wx.hideToast(), wx.uploadFile({
            url: app.util.upLoadUrl({
                url: "entry/wxapp/upload"
            }),
            filePath: e,
            name: "file",
            formData: _extends({}, t),
            success: function(e) {
                console.log(e, "upload sucess"), o.$loading.done(), console.log(e.data.indexOf('{"errno"'), "upload sucess data"), 
                e.data = e.data.substr(e.data.indexOf('{"errno"'));
                var t = JSON.parse(e.data);
                console.log(t, "upload result"), t.errno < 0 ? o.$message(t.message) : r && r(t);
            },
            fail: function(e) {
                o.$loading.done(), console.log(e, "err");
            }
        });
    },
    $recordStart: function(r) {
        var o = this, t = {
            duration: 15e3,
            sampleRate: 16e3,
            numberOfChannels: 1,
            encodeBitRate: 24e3,
            format: "mp3",
            frameSize: 50
        };
        wx.getSetting({
            success: function(e) {
                console.log(e), e.authSetting["scope.record"] ? o.recorderManager.start(t) : wx.authorize({
                    scope: "scope.record",
                    success: function(e) {
                        console.log(e, "scope.record success"), o.recorderManager.start(t);
                    },
                    fail: function(e) {
                        o.$message("未开启录音授权，无法进行录音", {
                            confirmText: "去开启",
                            success: function() {
                                $router.push("404", {
                                    prop: "record"
                                });
                            },
                            showCancel: !0
                        });
                    }
                });
            }
        }), this.recorderManager.onStart(function() {
            console.log("正在录音");
        }), this.recorderManager.onStop(function(e) {
            if (console.log("录音停止", e), wx.hideToast(), o.isUpload && o.uploading) {
                o.$loading.start({
                    title: "正在上传语音"
                });
                var t = e.tempFilePath;
                o.uploadFile(t, {
                    type: "audio"
                }, r);
            }
        });
    },
    $shareParams: {
        title: "",
        desc: "",
        params: {
            uid: ""
        },
        imageUrl: "",
        path: "yunrui_tranx/pages/index/index",
        success: function(e) {
            console.log(e);
        }
    },
    onShareAppMessage: function() {
        var e = this.getItemSync("userInfo");
        this.$shareParams.params.uid = e.memberInfo.uid ? e.memberInfo.uid : "", wx.updateShareMenu({
            withShareTicket: !0,
            success: function() {
                console.log("更新转发配置成功");
            }
        });
        var t = this.$shareParams, r = t.title, o = t.desc, n = t.params, a = t.path, i = _objectWithoutProperties(t, [ "title", "desc", "params", "path" ]);
        n || (n = {});
        var s = this.serialize(n);
        return console.log("" + a + s, "path str"), _extends({
            title: r,
            desc: o,
            path: "" + a + s
        }, i);
    },
    setStorageSync: function(e, t) {
        this.formIdArr.push(t), wx.setStorageSync(e, this.formIdArr);
    },
    getStorageSync: function(e) {
        var t = wx.getStorageSync(e);
        return this.formIdArr = [], wx.setStorageSync("formId", this.formIdArr), t;
    }
});

function Init(e) {
    var t = _deepcopy2.default.extend(!0, {}, config, e);
    t.recorderManager = recorderManager, t.innerAudioContext = innerAudioContext, Page(t);
}