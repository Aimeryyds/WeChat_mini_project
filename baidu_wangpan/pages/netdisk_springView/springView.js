Page({
    data: {
        url: ""
    },
    onLoad: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = "", t = a.pagetype;
        t && (e += "https://pan.baidu.com", e += "addresslist" === t ? "/act/prize/sendaddress" : "/act/pullnew/mainpage");
        var n = e || "https://pan.baidu.com/act/pullnew/mainpage?action=myprize&pt=combine&frametype=0";
        for (var i in a) n += -1 === n.indexOf("?") ? "?" : "&", n += i + "=" + a[i];
        wx.setStorageSync("reload", !0), this.setData({
            url: n
        });
    }
});