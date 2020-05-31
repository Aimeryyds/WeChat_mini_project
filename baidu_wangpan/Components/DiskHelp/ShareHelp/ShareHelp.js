var e = require("../../../netdisk_templates/empty_list/emptyList.js");

Component({
    properties: {
        shareType: {
            type: Number,
            value: 1
        },
        isGuideUser: Boolean,
        hasLogin: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        poster: "https://staticwx.cdn.bcebos.com/mini-program/images/bg_cover_help.png",
        video: "https://staticwx.cdn.bcebos.com/mini-program/media/help_share_1114.mp4",
        showVideo: !1
    },
    methods: {
        showVideo: function() {
            wx.navigateTo({
                url: "/pages/netdisk_helpcontent/helpcontent?questionid=3&contentType=3&openvideo=true"
            }), 1 === this.data.shareType ? wx.log.share.clickNoShareDirHelpVideo.send() : wx.log.share.clickShareDirHelpVideo.send();
        },
        closeVideo: function() {
            this.setData({
                showVideo: !1
            });
        },
        tplClick: function() {
            wx.log.guide.shareNormal.send(), (0, e.clickBtn)();
        }
    },
    attached: function() {
        1 === this.data.shareType ? wx.log.share.showNoShareDirHelpVideo.send() : wx.log.share.showShareDirHelpVideo.send();
    }
});