Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = wx.ENV.staticPath;

exports.default = Behavior({
    data: {
        showGuideMember: !1,
        guideMemberTip: {}
    },
    methods: {
        handleGuideMemberClose: function() {
            this.setData({
                showGuideMember: !1
            });
        },
        showGuideMemberModal: function() {
            this.setData({
                showGuideMember: !0
            });
        }
    }
});

exports.guideMemberPageMixin = function(e) {
    return Object.assign(e.data, {
        showGuideMember: !1,
        guideMemberTip: {}
    }), Object.assign(e, {
        handleGuideMemberClose: function() {
            this.setData({
                showGuideMember: !1
            });
        },
        showGuideMemberModal: function() {
            this.setData({
                showGuideMember: !0
            });
        },
        handleUploadRetry: function() {
            this.localUpload();
        }
    }), e;
};

var t = e + "/popup_ic_space.png", i = e + "/popup_ic_num.png", o = exports.guideMemberTip = {
    quota: {
        svip: {
            desc: "空间不足 无法保存",
            title: "开通超级会员，尊享5T超大空间",
            actionTitle: "开通超级会员",
            actionDesc: "30元/月",
            type: "svip",
            icon: t,
            reason: "quota"
        },
        vip: {
            desc: "空间不足 无法保存",
            title: "开通会员，尊享2T超大空间",
            actionTitle: "开通会员",
            actionDesc: "10元/月",
            type: "vip",
            icon: t,
            reason: "quota"
        }
    },
    shareAmount: {
        vip: {
            desc: "文件数超出500无法保存",
            title: "开通会员，转存文件数升至3000",
            actionTitle: "开通会员",
            actionDesc: "10元/月",
            type: "vip",
            icon: i,
            reason: "shareAmount"
        },
        svip: {
            desc: "文件数超出3000无法保存",
            title: "开通超级会员，转存文件数升至5万",
            actionTitle: "开通超级会员",
            actionDesc: "30元/月",
            type: "svip",
            icon: i,
            reason: "shareAmount"
        },
        upsvip: {
            desc: "文件数超出3000无法保存",
            title: "升级为超级会员，转存文件数升至5万",
            actionTitle: "升级为超级会员",
            actionDesc: "30元/月",
            type: "svip",
            icon: i,
            reason: "shareAmount"
        }
    }
}, s = exports.quotaLevel = {
    vip: 2 * Math.pow(1024, 4),
    svip: 5 * Math.pow(1024, 4)
}, a = exports.shareAmountLevel = {
    normal: 500,
    vip: 3e3,
    svip: 5e4
}, p = function() {
    return "android" === (getApp().globalData.systemInfo || {}).platform;
};

exports.getTipByQuota = function(e) {
    var t = e.size, i = e.total, a = e.used;
    if (p()) {
        var n = "";
        return i < s.vip ? n = a + t >= s.vip ? "svip" : "vip" : i <= s.svip && (n = "svip"), 
        o.quota[n];
    }
}, exports.getTipByShareAmount = function(e) {
    var t = e.fileNums, i = e.memberType;
    if (p()) {
        var s = "";
        return t > a.normal && t <= a.vip ? 0 === i && (s = "vip") : t > a.vip && t <= a.svip && (s = {
            0: "svip",
            1: "upsvip"
        }[i]), o.shareAmount[s];
    }
};