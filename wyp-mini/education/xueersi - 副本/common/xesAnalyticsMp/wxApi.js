var _require = require("./util.js"), isObject = _require.isObject, isFunction = _require.isFunction, wxApiMethod = {
    retryCount: 1,
    getInfo: function(t, e) {
        return e = e || 0, new Promise(function(n) {
            var o = wxApiMethod.retryCount;
            e++, t({
                success: function(t) {
                    n(t);
                },
                fail: function(r) {
                    if (e > o) return n({});
                    wxApiMethod.getInfo(t, e);
                },
                complete: function(t) {}
            });
        });
    },
    getSystemInfo: function() {
        return wxApiMethod.getInfo(wx.getSystemInfo);
    },
    getNetType: function() {
        return wxApiMethod.getInfo(wx.getNetworkType);
    },
    getWifiInfo: function() {
        var t = 0, e = wxApiMethod.retryCount;
        return new Promise(function(n) {
            function o() {
                t++, wx.startWifi({
                    complete: function(r) {
                        wx.getConnectedWifi({
                            success: function(t) {
                                n(t.wifi);
                            },
                            fail: function(r) {
                                if (t > e) return n({});
                                o();
                            }
                        });
                    }
                });
            }
            o();
        });
    },
    getFromId: function(t) {
        return {
            1000: "其他",
            1001: "发现栏小程序主入口，「最近使用」列表（基础库2.2.4版本起包含「我的小程序」列表）",
            1005: "顶部搜索框的搜索结果页",
            1006: "发现栏小程序主入口搜索框的搜索结果页",
            1007: "单人聊天会话中的小程序消息卡片",
            1008: "群聊会话中的小程序消息卡片",
            1011: "扫描二维码",
            1012: "长按图片识别二维码",
            1013: "手机相册选取二维码",
            1014: "小程序模版消息",
            1017: "前往体验版的入口页",
            1019: "微信钱包",
            1020: "公众号 profile 页相关小程序列表",
            1022: "聊天顶部置顶小程序入口",
            1023: "安卓系统桌面图标",
            1024: "小程序 profile 页",
            1025: "扫描一维码",
            1026: "附近小程序列表",
            1027: "顶部搜索框搜索结果页“使用过的小程序”列表",
            1028: "我的卡包",
            1029: "卡券详情页",
            1030: "自动化测试下打开小程序",
            1031: "长按图片识别一维码",
            1032: "手机相册选取一维码",
            1034: "微信支付完成页",
            1035: "公众号自定义菜单",
            1036: "App 分享消息卡片",
            1037: "小程序打开小程序",
            1038: "从另一个小程序返回",
            1039: "摇电视",
            1042: "添加好友搜索框的搜索结果页",
            1043: "公众号模板消息",
            1044: "带 shareTicket 的小程序消息卡片（详情)",
            1045: "朋友圈广告",
            1046: "朋友圈广告详情页",
            1047: "扫描小程序码",
            1048: "长按图片识别小程序码",
            1049: "手机相册选取小程序码",
            1052: "卡券的适用门店列表",
            1053: "搜一搜的结果页",
            1054: "顶部搜索框小程序快捷入口",
            1056: "音乐播放器菜单",
            1057: "钱包中的银行卡详情页",
            1058: "公众号文章",
            1059: "体验版小程序绑定邀请页",
            1064: "微信连Wi-Fi状态栏",
            1067: "公众号文章广告",
            1068: "附近小程序列表广告",
            1069: "移动应用",
            1071: "钱包中的银行卡列表页",
            1072: "二维码收款页面",
            1073: "客服消息列表下发的小程序消息卡片",
            1074: "公众号会话下发的小程序消息卡片",
            1077: "摇周边",
            1078: "连Wi-Fi成功页",
            1079: "微信游戏中心",
            1081: "客服消息下发的文字链",
            1082: "公众号会话下发的文字链",
            1084: "朋友圈广告原生页",
            1088: "会话中查看系统消息，打开小程序",
            1089: "微信聊天主界面下拉",
            1090: "长按小程序右上角菜单唤出最近使用历史",
            1091: "公众号文章商品卡片",
            1092: "城市服务入口",
            1095: "小程序广告组件",
            1096: "聊天记录",
            1097: "微信支付签约页",
            1099: "页面内嵌插件",
            1102: "公众号 profile 页服务预览",
            1103: "发现栏小程序主入口，“我的小程序”列表",
            1104: "微信聊天主界面下拉，“我的小程序”栏",
            1106: "聊天主界面下拉，从顶部搜索结果页，打开小程序",
            1107: "订阅消息，打开小程序",
            1113: "安卓手机负一屏，打开小程序(三星)",
            1114: "安卓手机侧边栏，打开小程序(三星)",
            1124: "扫“一物一码”打开小程序",
            1125: "长按图片识别“一物一码”",
            1126: "扫描手机相册中选取的“一物一码”",
            1129: "微信爬虫访问",
            1131: "浮窗打开小程序",
            1146: "地理位置信息打开出行类小程序",
            1148: "卡包-交通卡，打开小程序"
        }[t + ""];
    },
    getLocation: function() {
        return wxApiMethod.getInfo(wx.getLocation);
    },
    getStorage: function(t) {
        return new Promise(function(e) {
            wx.getStorage({
                key: t,
                success: function(t) {},
                complete: function(t) {
                    e(t.data || {});
                }
            });
        });
    },
    setStorage: function(t, e) {
        return new Promise(function(n) {
            wx.setStorage({
                key: t,
                data: e,
                complete: function(t) {
                    n(t);
                }
            });
        });
    },
    pathModel: {
        routerMap: {},
        getTitle: function(t) {
            var e = getCurrentPages(), n = e.length;
            if (!e || !e.length) return "";
            if (!t || "current" === t) {
                var o = e[n - 1].route;
                return this.routerMap[o] || o;
            }
            if (n >= 2 && "referer" == t) {
                var r = e[n - 2].route;
                return this.routerMap[r] || r;
            }
            return "";
        }
    },
    msgRequest: function(t) {
        return new Promise(function(e) {
            var n = t.url, o = t.data, r = t.projId, i = t.source, u = t.uploadId, c = t.time, f = wx.request({
                url: n,
                method: "POST",
                data: o,
                header: {
                    "content-type": "application/json",
                    "cache-control": "no-cache",
                    projId: r,
                    source: i,
                    upTime: c,
                    uploadId: u
                },
                success: function(t) {
                    e({
                        status: "success"
                    });
                },
                fail: function(t) {
                    e({
                        status: "errorNet"
                    });
                },
                complete: function(t) {}
            }), s = setTimeout(function() {
                clearTimeout(s), isObject(f) && isFunction(f.abort) && (f.abort(), e({
                    status: "errorNet"
                }));
            }, 3e3);
        });
    }
};

module.exports = wxApiMethod;