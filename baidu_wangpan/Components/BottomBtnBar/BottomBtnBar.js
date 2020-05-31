function t(t, e) {
    var i = t.barType, a = t.count, n = t.isBatch, r = t.isAllDir, l = t.isAllFileOwner, o = n && a < 1, c = 1 === a && !r && "shareToFriends" === e, u = a > 1 && ("shareToFriends" === e || "rename" === e), h = !l && "copy" !== e && s.indexOf(i) > -1;
    return {
        isNoSelect: o,
        isShareFileNotAllDir: c,
        multiple: u,
        isDisabled: o || c || u || h
    };
}

function e() {
    var e = this.data, s = e.barType, a = e.count, n = e.isBatch, r = e.isAllDir, l = e.isAllFileOwner, o = e.list;
    s && (o = (o = i.buttonBarList[s]).map(function(e, i) {
        var o = t({
            barType: s,
            count: a,
            isBatch: n,
            isAllDir: r,
            isAllFileOwner: l
        }, e.intro);
        return e.btnClass = o.isDisabled ? "batch_disabled" : "", e;
    }), this.setIsNew(o), this.setData({
        list: o
    }));
}

var i = require("./../../netdisk_config/buttonListConfig.js"), s = (wx.getStorageSync("uk"), 
[ "enjoyFileOwnBatch", "enjoyFileOtherBatch" ]);

Component({
    properties: {
        barType: {
            type: String,
            value: "wpFileNonEmpty",
            observer: function() {
                e.call(this);
            }
        },
        bgColor: {
            type: String,
            value: "#FCFCFC"
        },
        count: {
            type: Number,
            value: 0,
            observer: function() {
                e.call(this);
            }
        },
        isBatch: {
            type: Boolean,
            value: !1,
            observer: function() {
                e.call(this);
            }
        },
        isAllDir: {
            type: Boolean,
            value: !1,
            observer: function() {
                e.call(this);
            }
        },
        isAllFileOwner: {
            type: Boolean,
            value: !0,
            observer: function() {
                e.call(this);
            }
        }
    },
    data: {
        list: [],
        isBatch: !1,
        isIpx: !1
    },
    ready: function() {
        this.setData({
            isIpx: getApp().globalData.isIpx,
            list: this.setIsNew(i.buttonBarList[this.data.barType])
        });
    },
    methods: {
        buttonFn: function(e) {
            var i = e.currentTarget.id, s = e.currentTarget.dataset, a = t(this.data, i), n = a.isNoSelect, r = a.isShareFileNotAllDir, l = a.multiple, o = a.isDisabled;
            n ? wx.wetoast({
                content: "请先选中文件",
                duration: 1e3
            }) : o ? wx.wetoast({
                content: "只能处理自己的文件",
                duration: 1e3
            }) : r || l || (this.triggerEvent("buttonFn", e.currentTarget.id), "upload" === s.specType && this.setUploadStorage());
        },
        setUploadStorage: function() {
            var t = this.data.list;
            t.forEach(function(t) {
                t.isUpload && (t.isNew = !1);
            }), this.setData({
                list: t
            }), wx.setStorageSync("isHighlightUpload", !0);
        },
        setIsNew: function(t) {
            return wx.getStorageSync("isHighlightUpload") ? t : (t.forEach(function(t) {
                t.isUpload && (t.isNew = !0);
            }), t);
        }
    }
});