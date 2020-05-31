var e = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}, t = new RegExp("size=\\S*?&"), n = new RegExp("http://pcsdata.baidu.com/");

module.exports = {
    formatTime: function(t) {
        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = t.getFullYear(), i = t.getMonth() + 1, a = t.getDate(), o = t.getHours(), u = t.getMinutes(), g = t.getSeconds();
        return [ r, i, a ].map(e).join("-") + " " + (n ? [ o, u, g ] : [ o, u ]).map(e).join(":");
    },
    getOriginImgUrl: function(e) {
        return e.replace(t, "size=c1999_u1999&").replace(n, "https://pcsdata.baidu.com/");
    }
};