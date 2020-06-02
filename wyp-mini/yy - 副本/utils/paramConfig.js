var _ = {
    APPIDS: [ 15013, 15012, 31 ],
    TEST_APPIDS: [ 60035, 15013, 25112, 15012, 31 ],
    LogLevel: 1,
    PC_APPID: 15012,
    TEST_PC_APPID: 25112,
    YY_APPID: 15013,
    TEST_YY_APPID: 60035,
    MINIAPP_APPID: 90920020,
    TEST_MINIAPP_APPID: 90910013,
    INTERFACE_YY_COM_HOST: "https://interface.yy.com",
    G3_YY_COM_HOST: "https://data.3g.yy.com",
    WAP_COM_HOST: "https://wap.yy.com",
    TEST_WAP_COM_HOST: "https://wtest.3g.yy.com",
    YY_COM_HOST: "https://www.yy.com",
    MINIAPP_YY_HOST: "https://miniapp.yy.com",
    TEST_MINIAPP_YY_HOST: "https://tminiapp.yy.com",
    WECHAT_YY_HOST: "https://w-wechat.yy.com",
    TEST_WECHAT_YY_HOST: "https://wtest-wechat.yy.com",
    TEST_CHANNEL_TRACK: "https://test-channeltrack.yy.com",
    CHANNEL_TRACK: "https://channeltrack.yy.com"
}, T = {
    MAX_RSP_COM: 300,
    MIN_COMBO_USR_REQ_ACTION: 101,
    MIN_COMBO_SRV_APP_ACTION: 102,
    MIN_COMBO_init_APP_ACTION: 103,
    COMBO_SRV_APP_ACTION_ZIP: 120,
    COMBO_SRV_APP_ACTION_ZIP_123: 123,
    MSG_GIFT: 20,
    NEW_GIFT_CONFIG: 3100,
    FREE_FLOWER: 3111,
    TOTAL_CONTRIBUTE: 8812,
    SORT_LIST: 1017
}, O = {
    MINI_COMBO: 4,
    BIG_COMBO: 106,
    SEND_GIFT_RSP: 101,
    FREE_GIFT: 1004,
    SORT_LIST_REQ: 1,
    SORT_LIST_RSP: 2,
    SORT_LIST_BRD: 3,
    TOTAL_CONTRIBUTE_REQ: 3,
    TOTAL_CONTRIBUTE_RSP: 4,
    TOTAL_CONTRIBUTE_BRD: 12,
    NEW_GIFT_REQ: 41,
    NEW_GIFT_RSP: 42,
    FREE_FLOWER_REQ: 1,
    FREE_FLOWER_RSP: 2,
    FREE_FLOWER_BRD: 6,
    SEND_FREE_FLOWER_RSP: 4
};

module.exports = {
    ParamConfig: _,
    MaxType: T,
    MinType: O
};