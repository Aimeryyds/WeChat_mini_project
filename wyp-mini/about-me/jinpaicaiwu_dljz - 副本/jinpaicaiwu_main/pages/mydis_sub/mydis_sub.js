var a = require("../../wxParse/tua-mp"), e = getApp();

(0, a.TuaPage)({
    data: function() {
        return {
            msg: "msg",
            levers: 100,
            activeIndex: 100,
            datas: [],
            page: 1,
            total_spending: 0,
            morebutton: !0,
            defaulthead: e.globalData.config.domain + "/script/usermanage/img/01.jpg"
        };
    },
    onLoad: function() {
        var a = this;
        e.globalData.userInfo ? e.apiRequest("user", "mydis_fxlist", {
            data: [],
            success: function(e) {
                if ("OK" == e.data.result) {
                    var n = e.data.data || [];
                    n.forEach(function(a, e) {
                        a.weixin_nickname ? /^\".*\"$/.test(a.weixin_nickname) ? a.weixin_nickname = JSON.parse(a.weixin_nickname || "{}") : a.weixin_nickname = a.weixin_nickname : (a.firstname || (a.firstname = ""), 
                        a.lastname || (a.lastname = ""), a.weixin_nickname = a.firstname + a.lastname);
                    }), a.datas = n, a.total_spending = e.data.total_spending, e.data.data.length < 20 && (a.morebutton = !1);
                }
            }
        }) : wx.navigateTo({
            url: "../login/login"
        });
    },
    computed: {},
    watch: {},
    methods: {
        loadmore: function() {
            var a = parseInt(this.page) + 1, n = this.levers, t = this;
            e.apiRequest("user", "mydis_fxlist", {
                data: {
                    page: a,
                    levers: n
                },
                success: function(e) {
                    if ("OK" == e.data.result) {
                        var n = t.datas, i = e.data.data || [];
                        i.forEach(function(a, e) {
                            a.weixin_nickname ? /^\".*\"$/.test(a.weixin_nickname) ? a.weixin_nickname = JSON.parse(a.weixin_nickname || "{}") : a.weixin_nickname = a.weixin_nickname : (a.firstname || (a.firstname = ""), 
                            a.lastname || (a.lastname = ""), a.weixin_nickname = a.firstname + a.lastname);
                        }), t.page = a, t.datas = n.concat(i), t.total_spending = e.data.total_spending, 
                        e.data.data.length < 20 && (t.morebutton = !1);
                    }
                }
            });
        },
        changActive: function(a) {
            var n = this, t = a.currentTarget.dataset.id;
            n.activeIndex = t, n.page = 1, n.levers = t, n.morebutton = !0;
            var i = n.page;
            e.apiRequest("user", "mydis_fxlist", {
                data: {
                    page: i,
                    levers: t
                },
                success: function(a) {
                    if ("OK" == a.data.result) {
                        var e = a.data.data || [];
                        e.forEach(function(a, e) {
                            a.weixin_nickname ? /^\".*\"$/.test(a.weixin_nickname) ? a.weixin_nickname = JSON.parse(a.weixin_nickname || "{}") : a.weixin_nickname = a.weixin_nickname : (a.firstname || (a.firstname = ""), 
                            a.lastname || (a.lastname = ""), a.weixin_nickname = a.firstname + a.lastname);
                        }), n.datas = e, n.total_spending = a.data.total_spending, a.data.data.length < 20 && (n.morebutton = !1);
                    }
                }
            });
        }
    }
});