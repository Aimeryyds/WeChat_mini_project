var t = [ [ {
    text: "分享至朋友圈",
    tapFunc: "makePoster",
    icon: "icon-share-circle-yellow"
}, {
    text: "发送给好友",
    tapFunc: "",
    icon: "icon-share-friend",
    openType: "share"
} ] ], e = [ [ {
    text: "发送给好友",
    tapFunc: "",
    icon: "icon-share-friend",
    openType: "share"
} ] ];

wx.SHARE_DIALOG_TYPE = {
    SHARE_FILES: 0
};

var i = getApp();

Component({
    data: {
        isShow: !1,
        buttons: [],
        iconSize: "small",
        titleIcon: "",
        mode: "multiple",
        isShowCancle: !1
    },
    properties: {
        from: {
            type: String,
            value: ""
        }
    },
    methods: {
        hide: function() {
            this.setData({
                isShow: !1
            });
        },
        show: function() {
            var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments[2], r = n.titleIcon, s = void 0 === r ? "" : r, l = n.mode, c = void 0 === l ? "multiple" : l, h = [];
            h = i.globalData.systemInfo.ispc ? e[o] : t[o];
            var p = [ 0 ].indexOf(o) > -1 ? "big" : "small";
            h && this.setData({
                isShow: !0,
                buttons: h,
                fileMeta: a,
                iconSize: p,
                titleIcon: s,
                mode: c
            });
        },
        getTitle: function() {
            return this.data.title;
        },
        getFileMeta: function() {
            return this.data.fileMeta;
        },
        _handleTapBottomModalItem: function(t) {
            this.setData({
                isShow: !1
            });
            var e = t.currentTarget.dataset.tapfunc;
            if (e) {
                var i = wx.getCurrentViewPage();
                "function" == typeof i[e] ? i[e](this.data.fileMeta, this.properties.from) : console.warn(new Error("methodName:" + e + " was not in current page.please check it"));
            }
        },
        move: {}
    }
});