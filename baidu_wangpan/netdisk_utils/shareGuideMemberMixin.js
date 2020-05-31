var e = require("./guideMemberMixin"), t = {
    "-32": !0
}, r = {
    120: !0,
    130: !0,
    "-33": !1
};

module.exports = Behavior({
    methods: {
        checkGuideMemberErrno: function(i) {
            var a = i.errno, s = i.targetSize, o = i.targetFileNums, u = "", m = getApp().globalData.userCenterInfo || {};
            if (t[a]) {
                var g = m && m.quotaSize || {}, n = g.total, d = g.used;
                u = (0, e.getTipByQuota)({
                    size: s,
                    total: n,
                    used: d
                });
            } else r[a] && (u = (0, e.getTipByShareAmount)({
                fileNums: o,
                memberType: m.memberType
            }));
            u && (this.showGuideMemberModal(), this.setData({
                guideMemberTip: Object.assign({}, u, {
                    trigger: "transfer"
                })
            }));
        }
    }
});