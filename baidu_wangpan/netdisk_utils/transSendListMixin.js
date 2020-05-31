Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./transform.js"), t = require("../netdiisk_requestapi/transAssistant"), i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("miniprogram-computed"));

exports.default = Behavior({
    behaviors: [ i.default ],
    data: {
        list: [],
        hasMore: 0,
        loading: !1,
        listMinLengthCheckCount: 1
    },
    methods: {
        handleMsg: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
            wx.wetoast({
                content: e,
                duration: t
            });
        },
        loadMore: function() {
            var e = this.data, t = e.loading, i = e.hasMore, s = e.list;
            t || i && this.getList(s.length);
        },
        selectItem: function() {
            console.log("selectItem");
        },
        processListRes: function(i) {
            if (0 === i.errno) {
                var s = this.data.hasMore;
                "number" == typeof i.has_more && (s = i.has_more);
                var r = i.list, n = this.data.type, a = "number" == typeof n;
                r.forEach(function(e) {
                    e.server_filename = e.file_name, e.server_mtime = e.ctime, e.fsid = e.fs_id, 2 !== e.file_type && 1 !== e.file_type || (e.isdir = 1), 
                    e.uk = a ? n ? e.receiver_id : e.sender_id : e.receiver_id || e.sender_id;
                }), r = (0, e.dataTransform)(r), this.setData({
                    list: this.data.list.concat(r),
                    hasMore: s
                }), this.checkListMinLength();
            } else {
                var o = t.errMap[i.errno] || "出错了，请稍后重试";
                this.handleMsg(o);
            }
        },
        checkListMinLength: function() {
            var e = this.data, t = e.hasMore, i = e.list, s = e.listMinLengthCheckCount;
            !t || s > 10 || i.filter(function(e) {
                return 3 !== e.send_status;
            }).length < 30 && (this.setData({
                listMinLengthCheckCount: s + 1
            }), this.loadMore());
        }
    }
});