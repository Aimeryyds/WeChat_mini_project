function t() {
    b.changeInputWayEvent = function() {
        b.setData({
            "inputObj.inputStatus": "text" === b.data.inputObj.inputStatus ? "voice" : "text",
            "inputObj.extraObj.chatInputShowExtra": !1
        });
    };
}

function n() {
    var t = v / 2.6;
    b.setData({
        "inputObj.inputStyle": b.data.inputObj.inputStyle,
        "inputObj.canUsePress": C,
        "inputObj.inputStatus": "text",
        "inputObj.windowHeight": f,
        "inputObj.windowWidth": v,
        "inputObj.voiceObj.status": "end",
        "inputObj.voiceObj.startStatus": 0,
        "inputObj.voiceObj.voicePartWidth": t,
        "inputObj.voiceObj.moveToCancel": !1,
        "inputObj.voiceObj.voicePartPositionToBottom": (f - t / 2.4) / 2,
        "inputObj.voiceObj.voicePartPositionToLeft": (v - t) / 2
    }), E = .12 * f;
}

function e(t) {
    b.setData({
        "inputObj.extraObj.chatInputExtraArr": t
    }), b.chatInputExtraClickEvent = function() {
        b.setData({
            "inputObj.extraObj.chatInputShowExtra": !b.data.inputObj.extraObj.chatInputShowExtra
        }), D && D(!b.data.inputObj.extraObj.chatInputShowExtra);
    };
}

function o() {
    j.onStart(function() {
        l = 0, h = setInterval(function() {
            ++l >= w && l < d ? b.setData({
                "inputObj.voiceObj.timeDownNum": d - l,
                "inputObj.voiceObj.status": "timeDown"
            }) : l >= d && (b.setData({
                "inputObj.voiceObj.status": "timeout"
            }), s(), clearInterval(h), p());
        }, 1e3);
    }), b.long$click$voice$btn = function(t) {
        "send$voice$btn" === t.currentTarget.id && (b.setData({
            "inputObj.voiceObj.showCancelSendVoicePart": !0,
            "inputObj.voiceObj.timeDownNum": d - l,
            "inputObj.voiceObj.status": "start",
            "inputObj.voiceObj.startStatus": 1,
            "inputObj.voiceObj.moveToCancel": !1
        }), "function" == typeof T && T(I.START), u(function() {
            j.start({
                duration: 6e4,
                format: y
            });
        }, function(t) {
            console.error("录音拒绝授权"), clearInterval(h), p(), b.setData({
                "inputObj.voiceObj.status": "end",
                "inputObj.voiceObj.showCancelSendVoicePart": !1
            }), "function" == typeof T && T(I.UNAUTH), m ? "function" == typeof m && m(t) : wx.openSetting ? wx.showModal({
                title: "您未授权语音功能",
                content: "暂时不能使用语音",
                confirmText: "去设置",
                success: function(t) {
                    t.confirm ? wx.openSetting({
                        success: function(t) {
                            t.authSetting["scope.record"] && b.setData({
                                "inputObj.extraObj.chatInputShowExtra": !1
                            });
                        }
                    }) : b.setData({
                        "inputObj.inputStatus": "text",
                        "inputObj.extraObj.chatInputShowExtra": !1
                    });
                }
            }) : wx.showModal({
                title: "无法使用语音",
                content: "请将微信升级至最新版本才可使用语音功能",
                success: function(t) {
                    t.confirm;
                }
            });
        }));
    };
}

function i() {
    b.long$click$voice$btn = function(t) {
        "send$voice$btn" === t.currentTarget.id && (l = 0, b.setData({
            "inputObj.voiceObj.showCancelSendVoicePart": !0,
            "inputObj.voiceObj.timeDownNum": d - l,
            "inputObj.voiceObj.status": "start",
            "inputObj.voiceObj.startStatus": 1,
            "inputObj.voiceObj.moveToCancel": !1
        }), "function" == typeof T && T(I.START), u(function() {
            wx.startRecord({
                success: function(t) {
                    console.log(t, b.data.inputObj.voiceObj.status), "short" !== b.data.inputObj.voiceObj.status ? b.data.inputObj.voiceObj.moveToCancel ? "function" == typeof T && T(I.CANCEL) : (console.log("录音成功"), 
                    "function" == typeof T && T(I.SUCCESS), "function" == typeof S && S(t, l + "")) : "function" == typeof T && T(I.SHORT);
                },
                fail: function(t) {
                    "function" == typeof T && T(I.FAIL), "function" == typeof m && m(t);
                }
            }), h = setInterval(function() {
                ++l >= w && l < d ? b.setData({
                    "inputObj.voiceObj.timeDownNum": d - l,
                    "inputObj.voiceObj.status": "timeDown"
                }) : l >= d && (b.setData({
                    "inputObj.voiceObj.status": "timeout"
                }), s(), clearInterval(h), p());
            }, 1e3);
        }, function(t) {
            console.error("录音拒绝授权"), clearInterval(h), p(), b.setData({
                "inputObj.voiceObj.status": "end",
                "inputObj.voiceObj.showCancelSendVoicePart": !1
            }), "function" == typeof T && T(I.UNAUTH), m ? "function" == typeof m && m(t) : wx.openSetting ? wx.showModal({
                title: "您未授权语音功能",
                content: "暂时不能使用语音",
                confirmText: "去设置",
                success: function(t) {
                    t.confirm ? wx.openSetting({
                        success: function(t) {
                            t.authSetting["scope.record"] && b.setData({
                                "inputObj.extraObj.chatInputShowExtra": !1
                            });
                        }
                    }) : b.setData({
                        "inputObj.inputStatus": "text",
                        "inputObj.extraObj.chatInputShowExtra": !1
                    });
                }
            }) : wx.showModal({
                title: "无法使用语音",
                content: "请将微信升级至最新版本才可使用语音功能",
                success: function(t) {
                    t.confirm;
                }
            });
        }));
    };
}

function c() {
    b.send$voice$move$event = function(t) {
        "send$voice$btn" === t.currentTarget.id && (f + g - t.touches[0].clientY > E ? O.voiceObj.moveToCancel || b.setData({
            "inputObj.voiceObj.moveToCancel": !0
        }) : O.voiceObj.moveToCancel && b.setData({
            "inputObj.voiceObj.moveToCancel": !1
        }));
    };
}

function a() {
    b.send$voice$move$end$event = function(t) {
        "send$voice$btn" === t.currentTarget.id && (l < x ? (b.setData({
            "inputObj.voiceObj.status": "short"
        }), s()) : b.setData({
            "inputObj.voiceObj.showCancelSendVoicePart": !1,
            "inputObj.voiceObj.status": "end"
        }), h && clearInterval(h), p());
    };
}

function u(t, n) {
    getApp().getNetworkConnected ? wx.getSetting ? wx.getSetting({
        success: function(e) {
            e.authSetting["scope.record"] ? t && t() : wx.authorize({
                scope: "scope.record",
                success: function(t) {
                    console.log("同意", t);
                },
                fail: function(t) {
                    console.log("拒绝", t), n && n();
                }
            });
        }
    }) : wx.showModal({
        title: "无法使用语音",
        content: "请将微信升级至最新版本才可使用语音功能",
        success: function(t) {
            t.confirm;
        }
    }) : t && t();
}

function s() {
    setTimeout(function() {
        "start" !== O.voiceObj.status && b.setData({
            "inputObj.voiceObj.showCancelSendVoicePart": !1,
            "inputObj.voiceObj.status": "end"
        });
    }, 1e3);
}

function r(t) {
    b.data.inputObj = O = {
        voiceObj: {},
        inputStyle: {
            sendButtonBgColor: t.sendButtonBgColor || "mediumseagreen",
            sendButtonTextColor: t.sendButtonTextColor || "white"
        }
    };
}

function p() {
    b.setData({
        "inputObj.voiceObj.startStatus": 0
    }), j ? j.stop() : wx.stopRecord();
}

var b = void 0, O = {}, j = void 0, f = void 0, v = void 0, l = 0, d = 60, x = 1, w = 54, h = void 0, S = void 0, m = void 0, T = void 0, g = 0, D = void 0, C = !1, y = void 0, E = 0, I = {
    START: 1,
    SUCCESS: 2,
    CANCEL: 3,
    SHORT: 4,
    FAIL: 5,
    UNAUTH: 6
};

module.exports = {
    init: function(u, s) {
        f = s.systemInfo.windowHeight, v = s.systemInfo.windowWidth, C = s.systemInfo.SDKVersion > "1.5.0", 
        x = s.minVoiceTime ? s.minVoiceTime : 1, d = s.maxVoiceTime && s.maxVoiceTime <= 60 ? s.maxVoiceTime : 60, 
        y = s.format || "mp3", w = s.startTimeDown && s.startTimeDown < d && s.startTimeDown > 0 ? s.startTimeDown : 54, 
        isNaN(s.tabbarHeigth) || (g = s.tabbarHeigth), f && v ? ((b = u).setData({
            "inputObj.isBangPhone": s.isBangPhone
        }), r(s), n(), e(s.extraArr), t(), wx.getRecorderManager ? (j = wx.getRecorderManager(), 
        o()) : i(), c(), a()) : console.error("没有获取到手机的屏幕尺寸：windowWidth", v, "windowHeight", f);
    },
    clickExtraListener: function(t) {
        b.chatInputExtraItemClickEvent = "function" == typeof t ? t : null;
    },
    closeExtraView: function() {
        b.setData({
            "inputObj.extraObj.chatInputShowExtra": !1
        });
    },
    recordVoiceListener: function(t, n) {
        m = n, S = t, j && ("function" == typeof t && j.onStop(function(t) {
            console.log(t, b.data.inputObj.voiceObj.status), "short" !== b.data.inputObj.voiceObj.status ? b.data.inputObj.voiceObj.moveToCancel ? "function" == typeof T && T(I.CANCEL) : (console.log("录音成功"), 
            "function" == typeof T && T(I.SUCCESS), "function" == typeof S && S(t, Math.round(t.duration / 1e3))) : "function" == typeof T && T(I.SHORT);
        }), "function" == typeof n && j.onError(function(t) {
            "function" == typeof T && T(I.FAIL), "function" == typeof m && m(t);
        }));
    },
    setVoiceRecordStatusListener: function() {
        T = arguments[0];
    },
    setTextMessageListener: function(t) {
        b && (b.chatInputBindFocusEvent = function() {
            b.setData({
                "inputObj.inputType": "text"
            });
        }, b.chatInputBindBlurEvent = function() {
            O.voiceObj.showCancelSendVoicePart, b.setData({
                "inputObj.inputType": "none",
                "inputObj.extraObj.chatInputShowExtra": !1
            }), b.extBlurCallback(t);
        }, b.chatInputSendTextMessage = function(n) {
            b.setData({
                textMessage: ""
            }), "function" == typeof t && t(n);
        }, b.chatInputSendTextMessage02 = function() {
            O.inputValueEventTemp && O.inputValueEventTemp.detail.value && "function" == typeof t && t(JSON.parse(JSON.stringify(O.inputValueEventTemp))), 
            b.setData({
                textMessage: "",
                "inputObj.inputType": "none"
            }), O.inputValueEventTemp = null;
        }, b.chatInputGetValueEvent = function(t) {
            O.inputValueEventTemp = t;
        });
    },
    setExtraButtonClickListener: function(t) {
        D = t;
    },
    VRStatus: I
};