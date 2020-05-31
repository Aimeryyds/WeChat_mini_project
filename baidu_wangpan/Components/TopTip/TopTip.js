function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
    n(t).then(function() {
        e.setData({
            action: "exit"
        });
    }).then(function() {
        return e.setData({
            status: !1
        });
    });
}

var a = e(require("miniprogram-computed")), i = e(require("../../netdisk_utils/guideMemberMixin")), s = wx.ENV.staticPath, o = {
    114: "已存在异步任务",
    "-33": "文件数目过多",
    "-32": "空间配额超限",
    "-30": "文件已存在",
    "-31": "文件拷贝失败",
    default: "上传失败，服务器开小差"
}, u = {
    kind: "",
    action: "",
    status: !1,
    staticName: wx.ENV.staticName,
    succNum: 0,
    failNum: 0,
    errMsg: "",
    closeIcon: s + "/feed-close.png",
    showClose: !1,
    fixedMode: !1,
    hasExceedQuota: !1
}, n = function(e) {
    return new Promise(function(t) {
        setTimeout(t, e);
    });
};

Component({
    behaviors: [ a.default, i.default ],
    data: Object.assign({}, u),
    computed: {
        numTip: function(e) {
            var t = e.succNum, a = e.failNum, i = t + "个文件上传成功，" + a + "个文件上传失败";
            return 0 === t ? i = a + "个文件上传失败" + (e.hasExceedQuota ? "，点我解决" : "，点击重试") : 0 === a && (i = t + "个文件上传成功"), 
            i;
        }
    },
    methods: {
        show: function(e, a, i, s, u) {
            var n = wx.getCurrentViewPage().topTip;
            if (n) {
                var r = Object.assign({}, r);
                r.kind = "normal", r.action = "entry", r.status = e;
                var d = "uploading" === e;
                switch (r.showClose = !1, r.hasExceedQuota = !1, e) {
                  case "caution":
                    r.errMsg = o[a] || o.default, r.kind = "err";
                    break;

                  case "cloudUploading":
                    r.kind = "err", r.succNum = a, r.failNum = i;
                    break;

                  case "localUploading":
                    r.kind = "normal", r.succNum = a, r.failNum = i, 0 === r.succNum && (r.kind = "err", 
                    d = !0, r.showClose = !0, r.hasExceedQuota = s, s && (r.guideMemberTip = u, this.showGuideMemberModal()));
                    break;

                  case "cloudUploadingExceed":
                    r.kind = "err", d = !0, r.showClose = !0, r.hasExceedQuota = !0, r.guideMemberTip = a, 
                    this.showGuideMemberModal();
                }
                r.fixedMode = d, n.setData(r), d || t(n);
            }
        },
        handleClose: function() {
            t(this, 0);
        },
        handleContainerClick: function() {
            var e = this.data;
            e.fixedMode && "uploading" !== e.status && (e.hasExceedQuota ? this.showGuideMemberModal() : this.triggerEvent("retry"));
        }
    }
});