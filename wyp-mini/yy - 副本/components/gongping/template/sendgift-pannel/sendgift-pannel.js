var _ = {
    SEND_SUCCESS: 0,
    SEND_PARAM_ERROR: 1,
    SEND_MIC_ENPTY_ERROR: 2,
    SEND_NO_LOGIN_ERROR: 3,
    SEND_LOGIN_USER_ERROR: 4,
    SEND_MIC_USER_ERROR: 5,
    SEND_TO_ONESELF_ERROR: 6,
    SEND_SEC_LIMITED: 10
}, E = {
    MSG_MAX_TYPE: 20,
    REQ_GIFT_MSG_PROPS: 0,
    REQ_GIFT_MSG_PROPS_FAKE: 1,
    RSP_GIFT_MSG_PROPS: 2,
    RSP_GIFT_MSG_PROPS_FAKE: 3,
    PROPS_BROADCAST_MERGE: 4,
    REQ_MSG_PROPS_INFO: 5,
    RSP_MSG_PROPS_INFO: 6,
    BC_COMBO_FLOAT_EFFECTS: 106,
    BC_COMBO_ALL_CHANNEL_NOTIFY: 107,
    REQ_UNION_EFFECTS_STATUS: 108,
    PESP_UNION_EFFECTS_STATUS: 109,
    REQ_GIFT_UNION_EFFECTS: 110,
    RESP_GIFT_UNION_EFFECTS: 112,
    BC_GIFT_UNION_EFFECTS: 113,
    REQ_GIFT_UNION_BC_HISTORY: 114,
    RSP_GIFT_UNION_BC_HISTORY: 115,
    PROPS_MIN_CONFIG: 7,
    REQ_GET_PROP_CONFIG: 20,
    RSP_GET_PROP_CONFIG: 21,
    REQ_GIFT_DWB_PROPS: 100,
    RSP_GIFT_DWB_PROPS: 101,
    RSP_DWB_AUTHORIZE: 102,
    MONEY_MAX: 1009,
    MONEY_MIN_CONFIRM_REQ: 1,
    MONEY_MIN_CONFIRM_RSP: 2,
    REQ_USER_FREE_PROPS: 1009,
    RSP_USER_FREE_PROPS: 1010,
    REQ_GIFT_FREE_PROPS2: 1011,
    RSP_GIFT_FREE_PROPS2: 1012,
    FREE_PROPS_BROADCAST_MERGE: 1004,
    REQ_GIFT_FREE_PROPS3: 1017,
    REQ_USER_FREE_PACKAGE: 1013,
    GIFT_MODULE_TYPE: 2008
}, R = require("../../../../utils/util.js").logger, e = require("../../lib/entApp/entApp.js"), S = e.Request, n = e.RequestMoble, O = {
    sendFlower: function(_, E, e, S) {
        var O = S.num, P = S.toId, t = S.extendInfo, I = S.sMaxType, F = S.sMinType, s = S.ssid, N = new n(_, E, I, F, e, s);
        O && P || R.warn("[sendgift-pannel.js] sendFlower 送鲜花时num 或者toId无效num: " + O + "toId: " + P), 
        N.setUI32(O), N.setUI32(P), N.setStrStrMaputf8(t), N.sendRequest();
    },
    sendGift: function(e, n, O, P, t, I) {
        var F = I.queueUid, s = I.queueNick, N = I.loginUid, T = I.loginNick, i = I.ssid;
        if (F == N) return _.SEND_TO_ONESELF_ERROR;
        var r = P, G = E.REQ_GIFT_DWB_PROPS, u = new S(e, n, O, E.MSG_MAX_TYPE, G, E.GIFT_MODULE_TYPE);
        r.type && t && N && F && i || R.warn("[sendgift-pannel.js] sendGift 送礼时vo.type && num && loginUid && queueUid && ssid 无效" + r.type + t + N + F + i), 
        u.setUI32(r.type), u.setUI32(t), u.setUI32(N), u.setUI32(F), u.setUI32(i), u.setString(T), 
        u.setString(s);
        var M = new Object();
        return M.web_app_type = r.fCode, M.PBUY_KEY_BIZINFO = r.pbuy_key_bizinfo, u.setStrStrMap(M), 
        u.sendRequest(), _.SEND_SUCCESS;
    },
    sendGiftHandler: function(E, e, S, n, O) {
        var P = this;
        if (n && n.num) {
            var t = parseInt(n.num);
            P.sendGift(E, e, S, n, t, O);
        } else R.warn("[sendgift-pannel.js] sendGiftHandler 送礼条件不满足data：" + n + "num: " + n.num), 
        _.SEND_PARAM_ERROR;
    },
    sendFlowerHandler: function(_, E, e, S) {
        var n = this;
        S && S.num ? n.sendFlower(_, E, e, S) : R.warn("[sendgift-pannel.js] sendFlowerHandler 送鲜花条件不满足info：" + JSON.stringify(S) + "num: " + S.num);
    }
};

module.exports = O;