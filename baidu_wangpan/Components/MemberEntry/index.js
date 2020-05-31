var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("miniprogram-computed")), t = require("../../netdisk_utils/common"), r = require("../../netdiisk_requestapi/reportAction"), i = wx.ENV.staticPath, o = {
    0: {
        title: "开通超级会员",
        subTitle: "",
        desc: "享5T空间、转存数等特权"
    },
    1: {
        title: "升级超级会员",
        subTitle: "",
        desc: "享5T空间、转存数等特权"
    },
    2: {
        title: "超级会员",
        subTitle: "",
        desc: "享5T空间、转存数等特权"
    }
};

Component({
    behaviors: [ e.default ],
    properties: {
        memberType: {
            type: Number,
            value: 0
        }
    },
    data: {
        svipIcon: i + "/ic_super_member_v2.png",
        rightArrowIcon: i + "/right-arrow-icon.png"
    },
    computed: {
        tip: function(e) {
            return o[e.memberType];
        }
    },
    methods: {
        handleEntryTap: function() {
            var e = "userCenter_entry_svip", i = (0, t.getMemberUrl)({
                from: e,
                category: "svip",
                backurl: "/pay/pages/cashierDesk/index?from=" + e + "&type=vip&category=svip"
            });
            wx.navigateTo({
                url: i
            }), (0, r.reportAction)({
                type: "wx_" + e + "_click",
                value: "会员入口点击"
            });
        }
    }
});