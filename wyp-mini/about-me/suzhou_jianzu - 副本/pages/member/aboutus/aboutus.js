var t = require("../../../utils/server");

Page({
    data: {
        loading: !0
    },
    onLoad: function(t) {
        var a = this;
        a.loadPageData(), a.mapCtx = wx.createMapContext("myMap");
    },
    loadPageData: function() {
        var a = this;
        t.sendRequest({
            url: "?r=wxapp.member.aboutus",
            method: "GET",
            showToast: !1,
            success: function(t) {
                if (a.setData({
                    loading: !1
                }), null != t.data.result.tel && "" != t.data.result.tel) if (t.data.result.tel.indexOf(",") > 0) t.data.result.tel = t.data.result.tel.split(","), 
                console.log(t.data.result.tel); else {
                    var e = t.data.result.tel;
                    t.data.result.tel = [], t.data.result.tel.push(e);
                }
                var l = t.data.result.con;
                t.data.result.con = l.split("\r"), a.setData({
                    data: t.data.result,
                    markers: [ {
                        id: 0,
                        latitude: t.data.result.map1,
                        longitude: t.data.result.map2,
                        width: 50,
                        height: 50,
                        title: t.data.result.address
                    } ]
                }), console.log(a.data.data);
            }
        });
    }
});