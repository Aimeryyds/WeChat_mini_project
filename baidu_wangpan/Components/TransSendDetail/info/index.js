Component({
    properties: {
        transInfo: {
            type: Object
        },
        pageType: null
    },
    data: {},
    attached: function() {},
    methods: {
        send: function() {
            var t = this.data.transInfo.surl;
            wx.safeNavigateTo("/pages/netdisk_transAssistant/index", {
                surl: t
            });
        }
    }
});