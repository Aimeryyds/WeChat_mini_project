Object.defineProperty(exports, "__esModule", {
    value: !0
});

var env = "mini", setbaseurl = function() {
    return {
        dev: "https://dev-mini.xesapp.com/",
        test: "https://test-mini.xesapp.com/",
        mini: "https://mini.speiyou.com/",
        pre: "https://pre-mini.xesapp.com/"
    }[env];
}(), sensorsdataUrl = function() {
    return {
        dev: "https://taluanaly.speiyou.com/sa?project=default",
        test: "https://taluanaly.speiyou.com/sa?project=default",
        mini: "https://taluanaly.speiyou.com/sa?project=xueersiapp",
        pre: "https://taluanaly.speiyou.com/sa?project=default"
    }[env];
}(), appId = function() {
    return [ "dev", "test" ].includes(env), "wxbe6637760b9554c8";
}();

exports.setbaseurl = setbaseurl, exports.sensorsdataUrl = sensorsdataUrl, exports.appId = appId;