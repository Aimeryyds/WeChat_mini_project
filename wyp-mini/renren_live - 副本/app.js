var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("931582478A740DDFF573EA40762DC841.js")), t = (require("D76C82478A740DDFB10AEA402B1DC841.js"), 
require("14E98D478A740DDF728FE5401BCCC841.js"));

require("176490B48A740DDF7102F8B3909CC841.js");

App({
    data: {},
    onLaunch: function() {
        var e = this, i = wx.getUpdateManager();
        i.onCheckForUpdate(function(e) {
            e.hasUpdate && (i.onUpdateReady(function() {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    success: function(e) {
                        e.confirm && i.applyUpdate();
                    }
                });
            }), i.onUpdateFailed(function() {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本下载失败",
                    showCancel: !1
                });
            }));
        }), e.globalData.wxcode = wx.getStorageSync("wxcode"), this.currentUser = wx.getStorageSync("currentUser"), 
        this.globalData.userInfo = this.currentUser, this.wxpersonInfo = wx.getStorageSync("wxpersonInfo"), 
        t.init(this, this.wxpersonInfo, this.currentUser), wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? e.globalData.isAuthor = !0 : e.globalData.isAuthor = !1;
            }
        });
    },
    onShow: function(e) {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                t.globalData.platform = e.platform, t.globalData.navStatusbarHeight = e.statusBarHeight, 
                t.isBangPhone(e.model);
            }
        });
        var i = wx.getStorageSync("wxGetUserInfoAuth");
        this.globalData.isAuthor = !!i;
        var o = wx.getStorageSync("wxPhoneAuth");
        this.globalData.isBindMobile = !!o;
        var a = wx.getSystemInfoSync(), n = a.windowWidth, s = a.windowHeight;
        t.globalData.windowHeight = s, t.globalData.windowWidth = n, t.globalData.screenHeight = a.screenHeight;
        var r = .48 * n;
        t.globalData.itemLeft = (n - 2 * r) / 3;
        var l = 220 / 750 * n, u = .04 * n;
        t.globalData.loginheight = 200 / 1334 * t.globalData.screenHeight, t.globalData.threeitemLeft = (n - 3 * l - 2 * u) / 2;
    },
    isBangPhone: function(e) {
        -1 != e.search("iPhone X") && (this.globalData.isBangPhone = !0);
    },
    globalData: {
        userInfo: null,
        isBangPhone: !1,
        navStatusbarHeight: 0,
        navTopHeight: 46,
        itemLeft: 0,
        isAuthor: !1,
        invitorId: 0,
        platform: "renren",
        threeitemLeft: 0,
        windowHeight: 0,
        windowWidth: 0,
        screenHeight: 0,
        wxcode: 0,
        liveRoomId: 0,
        qudao: "",
        huodongStr: "",
        canSign: !1,
        isBindMobile: !1,
        homelist: [],
        loginheight: 200
    },
    currentUser: {
        fill_stage: 0,
        head_url: "",
        is_guide: 0,
        secret_key: "",
        session_key: "",
        ticket: "",
        uid: -1,
        uniq_key: "",
        user_name: "",
        vip_icon_url: "",
        vip_url: "",
        web_ticket: "",
        minute_count: 0,
        renrenguo_count: 0,
        level: 0,
        userVipState: 0
    },
    wxpersonInfo: {
        nickName: " ",
        avatarUrl: "",
        gender: 0,
        province: "",
        city: "",
        country: "",
        unionid: "",
        openid: "",
        session_key: ""
    },
    page: "",
    liveShowClose: "",
    allVideosList: "",
    videosList: "",
    liveShowString: "",
    shortAll: [],
    giftList: [],
    isLivePage: !1,
    giftTempList: [],
    luckGiftList: [],
    loadGift: 0,
    shortIndex: 0,
    isChat: 1,
    allShortVideo: "",
    client_info: '{"uniqid":"104C2BAC-6E2C-4723-A55E-F66FE1206D29","os":"iOS11.2","mac":"6C:40:08:8E:96:CE","screen":"2436X1125","from":"5000","model":"Simulator","other":",","version":"9.1.6"}',
    opApiKey: "wxd889b93f7e88344e",
    opSecretKey: "1a8b4feb5f1715b5bc9bec0fe768f940",
    apiurl: "https://apim.renren.com/api/",
    versionStr: "2.3.14",
    hasyiyuan: !1,
    touches: new e.default()
});