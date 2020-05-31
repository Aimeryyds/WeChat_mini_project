Component({
    properties: {
        index: {
            type: Number,
            value: 0
        },
        fileMeta: {
            type: Object,
            value: {}
        }
    },
    data: {
        categoryImage: wx.ENV.staticName + "mini-program/images/ic_file2.png"
    },
    methods: {
        _click: function() {
            var e = this.data.fileMeta, t = e.uuid, i = e.left_time, a = e.title, s = e.surl, l = e.msg_cnt;
            this.triggerEvent("click", {
                fileMeta: e
            }), wx.safeNavigateTo("/pages/netdisk_collection/collection", {
                uuid: t,
                title: a,
                surl: s,
                leftTime: i,
                msgCnt: l
            });
        },
        shareHandler: function() {
            wx.log.transAssistant.myCollectionShareBtn.send();
            var e = this.data.fileMeta, t = e.surl, i = e.title;
            wx.safeNavigateTo("/pages/netdisk_transShare/index", {
                surl: t,
                title: i
            });
        }
    }
});