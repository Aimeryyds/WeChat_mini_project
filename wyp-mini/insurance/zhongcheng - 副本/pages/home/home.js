var e = getApp();

Page({
    onLoad: function(o) {
        console.log(o), !e.globalData.sessionToken || e.globalData.sessionToken;
    },
    pageIndex: function(o) {
        var n = o.detail.formId;
        wx.showToast({
            title: "加载中",
            icon: "loading"
        }), e.sendRedirect("MICRO_SHOP", n);
    },
    pagePolicy: function(o) {
        var n = o.detail.formId;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), e.sendRedirect("POLICY_SERVICE", n);
    },
    pageClaimService: function(o) {
        var n = o.detail.formId;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), e.sendRedirect("CLAIM_SERVICE", n);
    },
    pageInnerCarService: function(o) {
        var n = o.detail.formId;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), e.sendRedirect("INNER_CAR_SERVICE", n);
    },
    pageHelper: function(o) {
        var n = o.detail.formId;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), e.sendRedirect("HELPER_SERVICE", n);
    },
    pageClaim: function(o) {
        console.log(o);
        var n = o.detail.formId;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), e.sendRedirect("yiyongsurvey", n);
    },
    verifyBinding: function(o, n, a) {
        a || (console.log("sessionToken为空，再次获取..."), a = e.getAppSessionToken(), wx.showLoading({
            title: "加载中...",
            mask: !0
        })), wx.request({
            url: e.globalData.domainPath + e.globalData.projectName + "/verifyBinding.do",
            data: {
                sessionToken: a,
                formId: o
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), "0000" == a.data.errcode ? e.sendRedirect(n, o) : "-1000" == a.data.errcode ? e.sendRedirect("VERIFY_BINDING", o) : (wx.hideLoading(), 
                wx.showToast({
                    title: "系统错误,请稍后再试",
                    icon: "none"
                }));
            },
            fail: function(e) {
                console.log(e), wx.hideLoading(), wx.showToast({
                    title: "系统错误,请稍后再试",
                    icon: "none"
                });
            }
        });
    },
    handleContact: function(e) {
        console.log(e);
    },
    submitContact: function(o) {
        console.log(o);
        var n = o.detail.formId;
        n && e.saveFormId(n, "CONTACT_HOME");
    }
});