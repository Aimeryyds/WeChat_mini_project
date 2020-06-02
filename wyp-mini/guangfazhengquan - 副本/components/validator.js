Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = null;

exports.default = {
    trade: function(t) {
        return !(null == t || "" == t || !/^\d{12}$/.test(t)) || (n = "请输入12位客户编号（交易号）", 
        !1);
    },
    portal: function(t) {
        return null != t && "" != t || (n = "请输入广发通账号", !1);
    },
    verify: function(t) {
        return null != t && "" != t || (n = "请输入短信验证码", !1);
    },
    captcha: function(t) {
        return null != t && "" != t || (n = "请输入图形验证码", !1);
    },
    username: function(t) {
        return null != t && "" != t || (n = "请输入用户名", !1);
    },
    password: function(t) {
        return null != t && "" != t || (n = "请输入登陆密码", !1);
    },
    mobile: function(t) {
        return null == t || "" == t ? (n = "请输入手机号码", !1) : !!/^1\d{10}$/.test(t) || (n = "手机号码格式不正确", 
        !1);
    },
    getLastErr: function() {
        return n;
    }
};