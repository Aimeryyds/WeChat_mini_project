var r = {
    "-1": "由于曾分享过非法内容，分享功能已被禁用",
    "-2": "用户不存在，请检查后再试",
    "-3": "文件不存在，请检查后再试",
    "-4": "分享失败，登录信息无效",
    "-5": "分享失败，登录信息无效",
    "-6": "分享失败，登录信息无效",
    "-10": "分享条数超限，请取消其他分享后再试",
    "-11": "分享失败，验证无效",
    "-16": "分享失败，该文件已限制分享",
    "-17": "分享失败，文件分享超过限制",
    "-33": "单次分享内容过多，请减少后再试",
    "-70": "文件含疑似病毒，为保证安全暂无法分享",
    3: "分享失败，登录信息有误",
    108: "文件名包含敏感信息，请修改后再试",
    110: "操作过于频繁，请稍后再试",
    112: "页面已过期，请重新进入后再试",
    115: "分享失败，该文件已限制分享",
    9100: "分享失败，帐号由于违规行为已被冻结",
    9200: "分享失败，帐号由于违规行为已被冻结",
    9300: "分享失败，帐号由于违规行为暂不可分享",
    9400: "分享失败，帐号异常",
    9500: "帐号存在安全风险，请修改密码后再试"
}, n = "暂时无法分享，请稍后重试", o = function(r) {
    [ "newno", "errno" ].forEach(function(n) {
        "string" == typeof r[n] && (r[n] = +r[n]);
    });
};

module.exports = {
    shareErr: function(o) {
        return o = o.toString(), r[o] ? r[o] : n;
    },
    processNewErr: function(r) {
        return o(r), (r.newno || r.errno) && r.show_msg ? {
            hasErr: !0,
            msg: r.show_msg
        } : {
            hasErr: !1,
            msg: ""
        };
    }
};