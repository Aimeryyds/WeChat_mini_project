var t = require("../../netdisk_utils/account.js"), n = require("../../netdiisk_requestapi/loginSync.js"), a = getApp();

Component({
    properties: {},
    data: {
        isShow: !0
    },
    methods: {
        contact: function(e) {
            var o = e.target.dataset.type, i = a.globalData.isGuideUser, c = "contact" !== o ? "my" : "contact";
            "contact" !== o && i ? wx.showDialog({
                title: "请关联百度帐号后再试",
                content: "关联后，可查看反馈进度",
                confirmText: "关联帐号",
                confirm: function() {
                    (0, t.bindNormalAccount)();
                }
            }) : (0, n.loginSync)().then(function(t) {
                var n = t.data, a = 0 === n.errno && n.data ? n.data.sign : "";
                wx.navigateTo({
                    url: "/pages/netdisk_ufo/ufo?types=" + c + "&sign=" + a
                });
            });
        }
    }
});