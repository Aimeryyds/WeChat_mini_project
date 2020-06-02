var _index = require("./../../config/index.js"), conf = {
    name: "sensors",
    appid: "wxbe6637760b9554c8",
    server_url: _index.sensorsdataUrl,
    send_timeout: 1e3,
    max_string_length: 300,
    use_client_time: !1,
    show_log: !0,
    allow_amend_share_path: !1,
    autoTrack: {
        appLaunch: !0,
        appShow: !0,
        appHide: !0,
        pageShow: !0,
        pageShare: !0
    }
};

module.exports = conf;