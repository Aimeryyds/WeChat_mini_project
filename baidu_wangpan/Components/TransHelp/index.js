var t = wx.ENV.staticPath;

Component({
    properties: {
        questionid: {
            type: Number,
            value: 9
        },
        contentType: {
            type: Number,
            value: 1
        },
        from: {
            type: String,
            value: ""
        }
    },
    data: {
        explainIcon: t + "/ic_trans_explain.png"
    },
    attached: function() {},
    methods: {
        _clickQuestion: function() {
            var t = this.data, e = t.questionid, n = t.contentType, a = t.from;
            wx.safeNavigateTo("/pages/netdisk_helpcontent/helpcontent", {
                questionid: e,
                contentType: n
            }), wx.log.transAssistant.helpClick.send({
                from: a
            });
        }
    }
});