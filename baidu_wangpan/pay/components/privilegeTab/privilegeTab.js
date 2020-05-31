Component({
    properties: {
        chooseType: {
            type: String
        }
    },
    data: {
        privilegeTab: [ {
            titleName: "免费用户",
            type: "normal"
        }, {
            titleName: "会员",
            type: "vip"
        }, {
            titleName: "超级会员",
            type: "svip"
        } ]
    },
    methods: {
        clickPrivilegeTab: function(e) {
            var t = e.currentTarget.dataset.type;
            this.triggerEvent("changeTab", {
                type: t
            }), wx.log.send({
                type: "wx_pay_privilege_tab_" + t + "_click",
                value: "会员中心-特权页-tab-类型-点击切换"
            });
        }
    }
});