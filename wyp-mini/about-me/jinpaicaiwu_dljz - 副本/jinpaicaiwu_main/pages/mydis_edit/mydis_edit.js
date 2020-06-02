var a = require("../../wxParse/tua-mp"), t = getApp();

(0, a.TuaPage)({
    data: function() {
        return {
            msg: "msg",
            datas: []
        };
    },
    onLoad: function() {
        var a = this;
        t.globalData.userInfo ? t.apiRequest("user", "mydis_edit", {
            data: [],
            success: function(t) {
                "OK" == t.data.result && (a.datas = t.data);
            }
        }) : wx.navigateTo({
            url: "../login/login"
        });
    },
    computed: {},
    watch: {},
    methods: {
        submitEdit: function(a) {
            var e = a.detail.value;
            e.name && e.desc;
            var s = e.name, n = e.desc;
            t.apiRequest("user", "mydis_edit_save", {
                data: {
                    name: s,
                    desc: n
                },
                success: function(a) {
                    if ("OK" == a.data.result) wx.showModal({
                        title: "提交成功",
                        content: "",
                        showCancel: !1,
                        success: function() {
                            wx.navigateBack();
                        }
                    }); else {
                        var t = a.data.errmsg || "请求失败";
                        wx.showModal({
                            title: t,
                            content: "",
                            showCancel: !1
                        });
                    }
                }
            });
        },
        changeForm: function(a) {
            var t = a.currentTarget.dataset.ftype, e = this.data.datas;
            "name" == t ? e.name = a.detail.value : "desc" == t && (e.desc = a.detail.value), 
            this.setData({
                datas: e
            });
        }
    }
});