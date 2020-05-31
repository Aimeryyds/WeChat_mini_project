var t = wx.ENV.staticPath;

Component({
    properties: {
        surl: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        }
    },
    data: {
        transBgImg: t + "/trans-assistant-share-v2.png"
    },
    attached: function() {},
    methods: {
        sendMoments: function(t) {
            var s = this.data, e = s.surl, n = s.title;
            wx.safeNavigateTo("/pages/netdisk_transPoster/index", {
                surl: e,
                title: n
            }), wx.log.transAssistant.shareMoments.send();
        },
        sendFriends: function() {
            wx.log.transAssistant.shareFriends.send();
        }
    }
});