Component({
    properties: {
        chooseType: {
            type: String
        },
        userVipStatus: {
            type: String
        }
    },
    methods: {
        goToPrivilegeContrastPage: function() {
            wx.log.send({
                type: "wx_pay_home_privilegebtn_" + this.data.chooseType + "_click",
                value: "会员中心-首页-特权按钮-类型-点击"
            }), wx.navigateTo({
                url: "/pay/pages/payPrivilege/index?userVipStatus=" + this.properties.userVipStatus + "&chooseType=" + this.data.chooseType
            });
        },
        log: function() {
            wx.log.send({
                type: "wx_pay_home_privilege_" + this.data.chooseType + "_click",
                value: "会员中心-首页-特权图片-类型-点击"
            }), wx.navigateTo({
                url: "/pay/pages/payPrivilege/index?userVipStatus=" + this.properties.userVipStatus + "&chooseType=" + this.data.chooseType
            });
        }
    }
});