function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var i = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}(), r = require("./baseService.js"), o = function(o) {
    function a(n) {
        return e(this, a), t(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, n));
    }
    return n(a, r), i(a, [ {
        key: "getInfo",
        value: function() {
            var e = Object.create(null), t = wx.getSystemInfoSync();
            if (this.isSingle()) {
                this.Page.data.singleFile;
                var n = this.Page.data.singleFileInfo;
                e.title = n.name;
            } else if (this.isMulti()) {
                var i = this.Page.data.multiFileInfo;
                if (1 === i.totalDirCount && 1 === i.totalCount) e.title = i.dirList[0].name; else if (i.isAllPic) e.title = i.totalFileCount + "张图片"; else {
                    var r = (i.dirList || [])[0] || (i.fileList || [])[0] || (i.noteList || [])[0];
                    e.title = r.name + "等" + i.totalCount + "个文件";
                }
            }
            return "qq" === t.AppPlatform && "android" === t.platform && t.version < "8.0.0" ? e.path = "https://share.weiyun.com/" + this.shareKey : e.path = "/page/share/index?share_key=" + this.shareKey + "&share_name=" + e.title, 
            e;
        }
    } ]), a;
}();

module.exports = o;