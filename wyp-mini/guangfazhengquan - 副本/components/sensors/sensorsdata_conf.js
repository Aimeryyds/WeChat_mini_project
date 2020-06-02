var e = require("../../config");

console.log("ENV", e.ENV);

var a = {
    name: "sensors",
    appid: "xxxxx",
    server_url: "https://behavior.gf.com.cn/sa?project=" + ("test" === e.ENV ? "test" : "sni"),
    send_timeout: 1e3,
    use_client_time: !1,
    show_log: !0,
    allow_amend_share_path: !0,
    autoTrack: {
        appLaunch: !0,
        appShow: !1,
        appHide: !1,
        pageShow: !1,
        pageShare: !1
    },
    is_plugin: !1
};

module.exports = a;