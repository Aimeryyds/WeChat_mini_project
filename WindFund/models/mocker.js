var e = require("../utils/util"), t = e.getRandom, i = e.quickSort;

module.exports = {
    createEssays: function(e) {
        for (var r = [ "郭树清： 损失超过10%就要做好损失全部本金的准备", "一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五", "一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五一二三四五" ], u = [ 6e4, 36e5, 864e5 * t(30) ], n = [ "随意资本", "一本万利", "圈钱基金", "啥都不会" ], s = [], l = 0; l < e; l++) s.push({
            articleId: l,
            subject: r[t(r.length - 1)],
            publishTime: Date.now() - u[t(u.length - 1)],
            weixinTopic: n[t(n.length - 1)]
        });
        return i(s, !0, function(e) {
            return e.publishTime;
        });
    }
};