var t = require("../../lib/xmldom/dom-parser.js"), i = require("../../lib/base64/base64.js").Base64, e = require("../../lib/entApp/entApp.js"), n = e.Request, s = e.RequestMoble, r = require("../../../../utils/util.js").logger, f = {
    appid: "",
    maxType: "",
    minType: "",
    moduleId: "",
    minCombo: "",
    fn: "",
    init: function(t, i, e, n, f, a) {
        this.maxType = n, this.minType = f, this.appid = e, this.fn = "function" == typeof a && a;
        var o = new s(t, i, this.maxType, this.minType, this.appid);
        o.setUI32(1);
        var l = {};
        o.setStrStrMap(l), o.sendRequest(), r.log("[giftConfig.js] getFreeFlowerConfig 请求鲜花配置完成");
    }
}, a = {
    xmlUrl: "",
    giftObj: {},
    giftImgInfo: {},
    allGiftInfo: {},
    giftbarList: [],
    maxType: "",
    minType: "",
    moduleId: "",
    minCombo: "",
    fn: "",
    init: function(t, i, e, n, f, a) {
        this.maxType = n, this.minType = f, this.appid = e, this.fn = "function" == typeof a && a;
        var o = new s(t, i, this.maxType, this.minType, this.appid);
        o.setUI32(5);
        var l = {};
        o.setStrStrMap(l), o.sendRequest(), this.resetInitVal(), r.log("[giftConfig.js] getGiftConfig.getGiftConfig 请求礼物配置完成");
    },
    resetInitVal: function() {
        this.giftbarList = [];
    },
    initGiftList: function(t) {
        for (var e = t.giftInfo, n = 0; n < e.length; n++) this.giftbarList[n] = i.decode(e[n]);
        if (this.xmlUrl && t.xmlUrl && this.xmlUrl == t.xmlUrl) return this.giftObj.giftbarList = this.giftbarList, 
        this.fn && this.fn(this.giftObj), void r.warn("[giftConfig.js] getGiftConfig.initGiftList 礼物xml地址一样xmlUrl:" + t.xmlUrl + "礼物信息");
        this.xmlUrl = t.xmlUrl, this.requestXml(this.xmlUrl);
    },
    parseXML: function(i) {
        var e;
        return i && "string" == typeof i ? (e = new t.DOMParser(), e.parseFromString(i)) : null;
    },
    requestXml: function(t) {
        var e = this;
        t = t.replace(/^http:\/\//i, "https://"), wx.request({
            url: t,
            data: {},
            method: "GET",
            header: {
                "Content-Type": "application/json;charset=UTF-8;"
            },
            success: function(t) {
                if (t) {
                    var n = e.parseXML(t.data), s = n.getElementsByTagName("resData")[0].childNodes, f = Array.prototype.slice.call(s), a = n.getElementsByTagName("giftData")[0].childNodes, o = Array.prototype.slice.call(a);
                    f.map(function(t) {
                        var i = t.attributes, n = i[0].nodeValue;
                        e.giftImgInfo[n] = {
                            isPreload: i[1].nodeValue,
                            path: i[2].nodeValue
                        };
                    }), o.map(function(t) {
                        var n = t.attributes, s = n[0].nodeValue;
                        e.allGiftInfo[s] = {
                            info: i.decode(n[1].nodeValue)
                        };
                    }), e.giftObj = {
                        giftbarList: e.giftbarList,
                        giftImgInfo: e.giftImgInfo,
                        allGiftInfo: e.allGiftInfo
                    }, e.fn && e.fn(e.giftObj), r.log("[giftConfig.js] getGiftConfig.requestXml 所有礼物信息");
                }
            },
            fail: function(i) {
                r.warn("[giftConfig.js] getGiftConfig.requestXml 请求礼物配置失败：res:" + JSON.stringify(i) + "url" + t);
            },
            complete: function() {}
        });
    }
}, o = {
    totalData: function(t, i, e, n, r) {
        var f = new s(t, i, n, r, e), a = {};
        f.setStrStrMap(a), f.sendRequest();
    },
    queryChSortedConsumesReq: function(t, i, e, s, r, f, a) {
        var o = new n(t, i, s, r, f, a), l = e || 0;
        o.setUI32(l), o.setUI32(0), o.setUI32(10), o.sendRequest();
    }
}, l = {
    queryHappyFightReq: function(t, i, e, s, r, f, a) {
        var o = new n(t, i, e, s, r, f, a), l = {};
        o.setStrStrMap(l), o.sendRequest();
    }
};

module.exports = {
    contributeConfig: o,
    getGiftConfig: a,
    getFreeFlowerConfig: f,
    happyFightConfig: l
};