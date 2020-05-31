var t = require("../../../netdiisk_requestapi/transAssistant.js"), e = require("./utils"), i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../netdisk_utils/transListTtpMixin.js"));

Component({
    behaviors: [ i.default ],
    properties: {},
    data: {
        list: [],
        hasMore: 0,
        loading: !1,
        categoryImage: wx.ENV.staticName + "mini-program/images/ic_file2.png",
        showCreate: !1
    },
    attached: function() {
        this.init();
    },
    methods: {
        init: function() {
            this.getList(0);
        },
        handleClick: function(t) {
            if (t && t.detail && t.detail.fileMeta) {
                var e = t.detail.fileMeta.uuid, i = this.data.list, n = i.findIndex(function(t) {
                    return t.uuid === e;
                });
                if (-1 === n) return;
                0 !== i[n].msg_cnt && (i[n].msg_cnt = 0, this.setData({
                    list: i
                }));
            }
        },
        handleMsg: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
            wx.wetoast({
                content: t,
                duration: e
            });
        },
        getList: function(i) {
            var n = this;
            this.setData({
                loading: !0
            });
            var s = function() {
                n.setData({
                    loading: !1
                });
            };
            (0, t.getMyCollectionList)({
                start: i,
                limit: 15
            }).then(function(a) {
                if (s(), 0 === (a = a.data || {}).errno) {
                    var o = n.data.hasMore;
                    "number" == typeof a.has_more && (o = a.has_more);
                    var r = a.list;
                    r.forEach(function(t) {
                        t.msg_cnt > 99 && (t.msg_cnt = "99+"), t.countDown = (0, e.myCollectionCountDown)(t.left_time, 1e3 * t.end_time), 
                        t.createTime = (0, e.myCollectionCreateTime)(t.ctime);
                    }), n.checkTransListTip(r), n.setData({
                        list: n.data.list.concat(r),
                        hasMore: o
                    }), 0 === r.length && 0 === i && (wx.log.transAssistant.myCollectionEmpty.send(), 
                    wx.log.transAssistant.helpShow.send({
                        from: "collectionList"
                    }));
                } else {
                    var l = t.errMap[a.errno] || "出错了，请稍后重试";
                    n.handleMsg(l);
                }
            }).catch(function(t) {
                s(), n.handleMsg("出错了，请稍后重试");
            });
        },
        selectItem: function() {
            console.log("selectItem");
        },
        longPress: function() {
            console.log("longPress");
        },
        loadMore: function() {
            var t = this.data, e = t.loading, i = t.hasMore, n = t.list;
            e || i && this.getList(n.length);
        },
        createCollection: function() {
            this.setData({
                showCreate: !0
            }), wx.log.transAssistant.showCreate.send();
        },
        hideCreateComp: function() {
            this.setData({
                showCreate: !1
            });
        },
        checkTransListTip: function(t) {
            t || (t = this.data.list), t.some(function(t) {
                return t.msg_cnt;
            }) && this.setData({
                showTransListTip: !0
            });
        }
    }
});