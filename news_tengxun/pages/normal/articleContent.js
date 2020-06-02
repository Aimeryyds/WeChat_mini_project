var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/defineProperty")), i = (t(require("../../utils/logger")), 
t(require("../../utils/mlodash"))), r = require("../../store/index"), a = require("../../services/jump");

Component({
    properties: {
        title: {
            type: String,
            value: ""
        },
        intro: {
            type: String,
            value: ""
        },
        introName: {
            type: String,
            value: "摘要"
        },
        origContent: {
            type: Array,
            value: []
        },
        chlid: String,
        chlname: String,
        chlicon: String,
        isMyFollow: Boolean,
        date: String,
        remark: {
            type: String,
            value: ""
        },
        truthContent: Array,
        timeline: Object,
        topic: Object,
        special: Object,
        enableShowMore: Boolean,
        fromPage: String
    },
    data: {
        networkType: r.systemInfo.networkType
    },
    created: function() {},
    attached: function() {},
    ready: function() {
        this.formatContent(this.data.origContent);
    },
    methods: {
        formatContent: function(t) {
            var e = this;
            i.default.forEach(t.filter(function(t) {
                return "img" === t.type;
            }), function(t) {
                e.imgList || (e.imgList = []), 1 == t.itype && t.img_url_gif ? e.imgList.push(t.img_url_gif) : e.imgList.push(t.img_url);
            });
        },
        imgTap: function(t) {
            var e = t.currentTarget.dataset.url;
            wx.previewImage({
                current: e,
                urls: this.imgList
            });
        },
        gifTap: function(t) {
            var i = t.currentTarget.id;
            this.setData((0, e.default)({}, "origContent[".concat(i, "].clicked"), !0));
        },
        mediaTap: function() {
            (0, a.canJumpToMedia)(this.data.chlid) && (0, a.navigateTo)(a.PAGE_PATH.USER, {
                mediaId: this.data.chlid
            });
        },
        albumTap: function(t) {
            var e = t.currentTarget.dataset, i = e.id, r = e.atype;
            (0, a.navigateTo)((0, a.atypeToUrl)(r, {
                id: i
            }));
        },
        linkTap: function(t) {
            var e = t.currentTarget.dataset;
            (0, a.navigateTo)(e.link);
        }
    }
});