var t = getApp();

Page({
    data: {
        page: 1,
        loading: !0,
        loading_end: !1,
        loading_fail: !1,
        list: [],
        title: "",
        status: !0,
        haveuid: !1
    },
    onLoad: function(a) {
        var e = this;
        e.setData({
            id: a.id,
            title: a.title,
            type: a.type
        }), t.globalData.uid > 0 && e.setData({
            haveuid: !0
        }), wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    statusBarHeight: t.statusBarHeight
                });
            }
        }), e.loadMore();
    },
    onShow: function() {
        var t = this;
        1 == wx.getStorageSync("showcomment") && (t.setData({
            page: 1,
            loading: !0,
            loading_end: !1,
            loading_fail: !1,
            list: []
        }), t.loadMore());
    },
    onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function() {
        var a = this;
        if (a.data.status) {
            a.setData({
                loading: !0,
                loading_end: !1,
                loading_fail: !1,
                status: !1
            });
            var e = "comment_getCommentList", i = {
                id: a.data.id,
                type: a.data.type,
                show: "desc",
                pageindex: a.data.page,
                pagesize: 10
            }, n = t.getParam(e, i);
            wx.request({
                url: t.globalData.murl5,
                data: {
                    p: n
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(i) {
                    var n, o = i.data[e].data;
                    if (0 == i.data[e].error) {
                        if (null == o) return a.setData({
                            loading: !1,
                            loading_end: !0
                        }), !1;
                        for (n = 0; n < o.length; n++) o[n].message = a.get_img_txt(o[n].message), o[n].vip = t.showstaruser(o[n].authorid);
                        a.setData({
                            list: a.data.list.concat(o),
                            loading: !1,
                            page: a.data.page + 1
                        });
                    } else a.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                fail: function() {
                    a.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                complete: function() {
                    a.setData({
                        status: !0
                    });
                }
            });
        }
    },
    get_img_txt: function(t) {
        for (var a = "", e = /(\[em\:)+[a-z0-9]+(\:\])*/gi, i = /<img.*?(?:>|\/>)/gi, n = (a = (a = (a = (a = t.replace(e, function(t) {
            var a = t;
            return a = a.replace("[em:", "******https://static.meishichina.com/u2/i/face/"), 
            a = a.replace(":]", ".gif******");
        })).replace(i, function(t) {
            return "******https://static.meishichina.com/u2/i/face/" + t.match(/[^\/\s]+\.gif/gi)[0] + "******";
        })).replace(/<div(.*?)\<\/div>/g, "")).replace(/&nbsp;/g, " ")).split("******"), o = [], s = 0; s < n.length; s++) "" != n[s] && (/https:/.test(n[s]) ? o.push({
            type: "img",
            value: n[s]
        }) : o.push({
            type: "txt",
            value: n[s]
        }));
        return o;
    },
    back: function() {
        wx.navigateBack();
    },
    comment_do: function() {
        var t = this;
        wx.navigateTo({
            url: "../comment_add/comment_add?type=recipe&id=" + t.data.id
        });
    },
    clickinfo: function(a) {
        var e = this;
        t.globalData.uid = -1, wx.getUserInfo({
            success: function(a) {
                t.getId(function(t) {
                    t > 0 && (e.setData({
                        haveuid: !0
                    }), e.comment_do());
                });
            }
        });
    },
    onReady: function() {},
    shareSubmit: function(a) {
        t.save_formid(a.detail.formId);
    }
});