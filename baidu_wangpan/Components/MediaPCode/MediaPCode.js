var e = require("../../netdisk_utils/common");

Component({
    options: {
        addGlobalClass: !0
    },
    externalClasses: [ "text-class" ],
    properties: {
        text: {
            type: String,
            value: ""
        },
        fontColor: {
            type: String,
            value: "fc-blue"
        },
        canOpenApp: {
            type: Boolean
        },
        surl: {
            type: String
        },
        pwd: {
            type: String
        },
        appParameter: {
            type: String
        },
        saved: {
            type: Boolean
        },
        shareid: {
            type: Number
        },
        shareUk: {
            type: Number
        }
    },
    data: {
        shareAppParam: "bdnetdisk://n/action"
    },
    ready: function() {
        var e = this.data;
        this.getShareAppParam({
            shareid: e.shareid,
            shareUk: e.shareUk
        });
    },
    methods: {
        pCode: function() {
            this.triggerEvent("pCode");
        },
        lauchSuccess: function() {},
        launchCal: function() {
            (0, e.openAppReport)();
        },
        getShareAppParam: function(e) {
            var a = e.shareid, t = e.shareUk;
            this.setData({
                shareAppParam: "bdnetdisk://n/action.SAVE?m_n_v=8.3.0&shareid=" + a + "&uk=" + t + "&pwd=" + this.data.pwd + "&path=/&origin=1"
            });
        },
        launchErr: function(a) {
            wx.navigateTo({
                url: "/pages/netdisk_launchApp/launchApp"
            }), (0, e.openAppErr)(a.detail);
        }
    }
});