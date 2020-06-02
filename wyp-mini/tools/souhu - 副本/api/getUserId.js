Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./sh"), t = {
    url: "https://m.sohu.com/miniApi/getUserId",
    type: "wx"
};

exports.default = function(o, a) {
    e.sh.login({
        force: !1,
        success: function(e) {
            var d = {
                type: t.type
            };
            e.code && (d.code = e.code, a({
                url: t.url,
                method: "POST",
                data: d
            }).then(function(e) {
                e.data.data.isError && (console.log("请求出错"), console.log(e.data.data));
                var t = "";
                e.data.data.openid && (t = e.data.data.openid), o(t);
            }, function() {
                o("");
            }));
        },
        fail: function() {
            o("");
        }
    });
};