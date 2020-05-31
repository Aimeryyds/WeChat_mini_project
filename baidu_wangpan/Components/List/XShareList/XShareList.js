function t() {
    var t = this, s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], a = this.data, o = a.list, d = void 0 === o ? [] : o, h = a.start;
    s && (h = 0), 0 !== h && this.setData({
        showTips: !0
    }), s && this.data.list.length < 1 && !this.data.once && this.setData({
        isLoading: !0
    }), (0, e.getShareList)(h, r).then(function(e) {
        var a = e.data, o = a.list, l = void 0 === o ? [] : o, u = a.has_more, c = (0, i.dataTransform)(l), g = !1;
        s || (c = d.concat(c)), wx.getCurrentViewPage().setData({
            xsharelist: c.length
        }), c.forEach(function(t) {
            t.server_mtime_split = / /.test(t.server_mtime) ? t.server_mtime.split(" ")[0] : t.server_mtime, 
            t.is_owner && (g = !0);
        }), wx.toasthide(), setTimeout(function() {
            t.setData({
                isLoading: !1,
                hasMore: u || 0,
                start: h + r,
                list: c,
                isGuideUser: n.globalData.isGuideUser,
                hasOwner: g,
                once: !0,
                showTips: !1
            });
        }, 500);
    }).catch(function(e) {
        console.warn(e), t.setData({
            isLoading: !1
        });
    });
}

var e = require("../../../netdiisk_requestapi/getShareList.js"), i = require("../../../netdisk_utils/transform.js"), s = require("../../../netdisk_utils/common.js"), a = require("../../../netdisk_templates/empty_list/emptyList.js"), r = wx.ENV.CONF.FILES_LOAD_LIMITED_COUNT, n = getApp();

Component({
    properties: {
        hasLogin: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        isShow: !0,
        list: [],
        hasMore: !1,
        isLoading: !0,
        start: 0,
        isGuideUser: n.globalData.isGuideUser,
        hasOwner: !1,
        showTips: !1
    },
    methods: {
        _scrollToLower: function() {
            var e = this.data, i = e.hasMore, s = e.isLoading, a = e.start;
            i && !s && 0 !== a && t.call(this);
        },
        _touchStart: function(t) {
            var e = t.currentTarget.dataset.index, i = this.data.list;
            i[e].style = "background: #F9F9FA", this.setData({
                list: i
            });
        },
        _touchEnd: function(t) {
            var e = t.currentTarget.dataset.index, i = this.data.list;
            i[e].style = "", this.setData({
                list: i
            });
        },
        _touchMore: function(t) {
            wx.log.share.shareBtnMoreClick.send();
            var e = t.currentTarget.dataset.index, i = this.data.list[e];
            n.globalData.isGuideUser && wx.log.guide.more.send(), wx.getCurrentViewPage().modalDialog.show(wx.MODAL_DIALOG_TYPE.SHARE_ROOT_DIR, i, {
                mode: "single"
            });
        },
        _click: function(t) {
            wx.log.share.visitShareDir.send();
            var e = t.currentTarget.dataset.index, i = this.data.list[e], s = i.is_wx, a = i.avator, r = i.uname, n = i.group_num, o = i.fid, d = i.tt, h = i.uk, l = i.invitor, u = i.sign, c = i.is_owner;
            getApp().globalData.shareDirData.currentDirData = {
                isRoot: !0,
                isWeixin: s,
                publicMeta: {
                    avator: a,
                    uname: r,
                    memberNum: n,
                    gpIsOwner: c,
                    shareinfo: {
                        fid: o,
                        tt: d,
                        uk: h,
                        invitor: l,
                        sign: u
                    }
                },
                dirMeta: i
            }, wx.safeNavigateTo("/pages/netdisk_sharedir/sharedir?from=sharelist");
        },
        formSubmit: function(t) {
            return (0, s.generateFormId)(t);
        },
        loadList: function() {
            t.call(this, !0);
        },
        show: function() {
            this.setData({
                isShow: !0
            });
        },
        hide: function() {
            this.setData({
                isShow: !1
            });
        },
        dispose: function() {
            this.setData({
                list: [],
                hasMore: !1,
                isLoading: !0,
                start: 0
            });
        },
        tplClick: function() {
            wx.log.guide.shareNormal.send(), (0, a.clickBtn)();
        }
    }
});