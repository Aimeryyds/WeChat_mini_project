Component({
    properties: {
        chooseType: {
            type: String
        },
        identity: {
            type: String
        }
    },
    data: {
        btnText: ""
    },
    methods: {
        clickButton: function() {
            this.triggerEvent("clickPrivilegeButton");
        }
    },
    observers: {
        "chooseType, identity": function(t, i) {
            var e, p, n;
            "vip" === t ? (e = "10元/月 ", n = "会员") : "svip" === t ? (e = "30元/月 ", n = "超级会员") : e = "", 
            p = "normal" === i && "vip" === t ? "开通" : "normal" === i && "svip" === t ? "开通" : "vip" === i && "vip" === t ? "续费" : "vip" === i && "svip" === t ? "升级" : "svip" === i && "vip" === t ? "续费" : "svip" === i && "svip" === t ? "续费" : "开通", 
            this.setData({
                btnText: e + p + n
            });
        }
    }
});