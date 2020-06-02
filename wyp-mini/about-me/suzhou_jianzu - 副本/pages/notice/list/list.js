var t = require("../../../utils/server");

Page({
    data: {
        parm: {
            keywords: "",
            menu_type: 0,
            menu_id: 0,
            page: 0,
            sort: "",
            asc: "desc"
        },
        menu_subtype: -1,
        lists: [],
        getCategorys: []
    },
    onLoad: function(t) {
        this.getCategorys(), this.getList(this.data.parm);
    },
    tapMainMenu: function(t) {
        var e = this, a = e.data.parm;
        a.menu_type = parseInt(t.currentTarget.dataset.menu_type), 1 == a.menu_type || (0 == a.menu_type ? (a.keywords = "", 
        a.menu_type = 0, a.menu_id = 0, a.page = 0, a.sort = "", a.asc = "desc", e.getList(a)) : e.getList(a)), 
        e.setData({
            menu_subtype: a.menu_type,
            parm: a
        });
    },
    tapSubMenu: function(t) {
        var e = this, a = e.data.parm;
        a.menu_id = parseInt(t.currentTarget.dataset.menu_id), e.getList(a), e.setData({
            menu_subtype: -1,
            parm: a
        });
    },
    bindChange: function(t) {
        var e = this, a = e.data.parm;
        a.keywords = t.detail.value, e.setData({
            parm: a
        });
    },
    search: function(t) {
        var e = this, a = e.data.parm;
        e.getList(a);
    },
    getList: function(e) {
        var a = this;
        t.sendRequest({
            url: "?r=wxarticle.list.getlist",
            data: e,
            method: "GET",
            success: function(t) {
                var e = t.data.result;
                a.setData({
                    lists: e
                });
            }
        });
    },
    getCategorys: function() {
        var e = this;
        t.sendRequest({
            url: "?r=wxarticle.list.categorys",
            method: "GET",
            success: function(t) {
                var a = t.data.result;
                e.setData({
                    getCategorys: a
                });
            }
        });
    },
    tapLists: function(t) {
        var e = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "/pages/article/detail/detail?objectId=" + e
        });
    }
});