var a = require("../../wxParse/tua-mp"), t = getApp();

(0, a.TuaPage)({
    data: function() {
        return {
            msg: "msg",
            datas: [],
            dealinfos: [],
            page: 1,
            morebutton: !0
        };
    },
    onLoad: function() {
        var a = this, e = t.globalData.userInfo;
        this.page;
        e ? t.apiRequest("user", "cashout_list", {
            data: [],
            success: function(t) {
                "OK" == t.data.result && (a.datas = t.data.data, a.dealinfos = t.data.dealinfos, 
                t.data.data.length < 20 && (a.morebutton = !1));
            }
        }) : wx.navigateTo({
            url: "../login/login"
        });
    },
    computed: {},
    watch: {},
    methods: {
        loadmore: function() {
            var a = parseInt(this.page) + 1, e = this;
            t.apiRequest("user", "cashout_list", {
                data: {
                    page: a
                },
                success: function(a) {
                    if ("OK" == a.data.result) {
                        var t = e.datas;
                        e.datas = t.concat(a.data.data), a.data.data.length < 20 && (e.morebutton = !1);
                    }
                }
            });
        }
    }
});