Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.log = void 0;

var e = require("../netdiisk_requestapi/reportAction.js"), t = getApp(), a = {
    activity: {
        activeRulesClick: {
            type: "activite_rules_show",
            value: "活动规则展现"
        },
        mainPageClickMyPrize: {
            type: "main_page_click_myprize",
            value: "主页状态点击我的奖品"
        },
        mainPageToPrize: {
            type: "main_page_to_prize",
            value: "用户进入我的奖品页的用户数和次数"
        },
        assistanceActiveInvitePageShow: {
            type: "assistance_active_invite_page_show",
            value: "助力木版画流程-活动被邀请页"
        },
        getPrintingChance: {
            type: "get_printing_chance",
            value: "云冲印流程-抢到云冲印机会的人数"
        },
        getPrintingChanceFail: function(e) {
            return {
                type: "get_printing_chance_fail",
                value: "云冲印流程-抢到云冲印机会失败",
                other: e.errono
            };
        },
        assistancesNumberToFive: {
            type: "assistance_number_to_five",
            value: "助力木版画流程-助力完成人数（助力达5人）"
        },
        assistanceGenerateOrder: {
            type: "assistance_generate_order",
            value: "助力木版画流程-助力下单成功人数（订单生成）"
        },
        sharePageClickParticipateActivity: {
            type: "share_page_click_participate_activity",
            value: "小程序邀请助力页面【参与活动】的点击"
        },
        assistConfirmShow: {
            type: "assist_confirm_show",
            value: "被邀请页未登录弹出授权窗"
        },
        activeShareClick: function(e) {
            return {
                type: "active_share_page_show",
                value: "分享页状态展示",
                other: e.from
            };
        },
        seckillClick: function(e) {
            return {
                type: "seckill_click_" + e.type,
                value: "云冲印流程-活动主页按钮的点击"
            };
        },
        assistanceClick: function(e) {
            return {
                type: "assistance_click_" + e.type,
                value: "助力木版画流程-活动主页按钮的点击"
            };
        },
        assistanceDialog: function(e) {
            return {
                type: "assistance_dialog",
                value: "助力弹窗展示",
                other: e.type
            };
        },
        assistanceDialogBtn: function(e) {
            return {
                type: "assistance_dialog_btn",
                value: "助力弹窗按钮点击",
                other: e.type
            };
        }
    },
    author: {
        middlePageClickAuthorize: {
            type: "middle_page_click_authorize",
            value: "活动授权中间页按钮【去授权】的点击"
        },
        wxAthorizeSuccess: function(e) {
            return {
                type: "wx_authorize_success",
                value: "微信授权成功",
                other: e.from
            };
        },
        wxAthorizeFail: function(e) {
            return {
                type: "wx_authorize_fail",
                value: "微信授权失败",
                other: e.from
            };
        },
        bdAthorizeSuccess: function(e) {
            return {
                type: "bd_authorize_success",
                value: "百度帐号授权成功",
                other: e.from
            };
        },
        bdNormal: function(e) {
            return {
                type: "bd_normal",
                value: "百度帐号正常化",
                other: e.from
            };
        },
        bdNormalSuccess: function(e) {
            return {
                type: "bd_normal_success",
                value: "百度帐号正常化成功",
                other: e.from
            };
        }
    },
    scene: {
        entrySceneSource: {
            type: "entry_scene_source",
            value: "活动入口场景来源"
        }
    }
}, i = function() {
    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    a.isGuideUser = t.globalData.isGuideUser, a.scene || (a.scene = t.globalData.appOnshowData.scene), 
    a.type = a.type + "_" + a.actId, a.value = a.value + "_" + a.actId, (0, e.reportAction)(a);
}, n = function(e, t, i) {
    var n = a[e] && a[e][t];
    if (!n) return !1;
    "function" == typeof n && (n = n(i));
    var r = n, c = r.type, s = r.value, o = r.other;
    return {
        type: c,
        value: s,
        actId: i.actId || "826311545794",
        other: o
    };
}, r = function(e) {
    return {
        scene: function(a) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            r.scene || (r.scene = t.globalData.appOnshowData.scene);
            var c = n(e, a, r);
            c.scene = r.scene, i(c);
        },
        other: function(t) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = n(e, t, a);
            i(r);
        }
    }["scene" === e ? "scene" : "other"];
};

exports.log = function(e) {
    var t = {};
    return Object.keys(e).forEach(function(e) {
        t[e] = {
            send: r(e)
        };
    }), t;
}(a);