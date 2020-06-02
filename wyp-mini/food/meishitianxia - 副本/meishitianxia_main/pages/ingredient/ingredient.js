var t = getApp(), i = require("data.js");

Page({
    data: {
        toView: "item0",
        llist: [ "推荐", "猪肉", "牛肉", "鸡肉", "羊肉", "蛋类", "其它肉类", "其它禽类", "淡水鱼", "海水鱼", "虾类", "蟹类", "贝类", "其他水产类", "茎叶类", "瓜菜类", "果实类", "根茎类", "菌类", "嫩茎、叶、花菜类", "鲜果类", "干果类", "米类", "面、粉", "豆类", "豆制品", "乳类", "方便食品类", "茶饮", "酒水", "调味品", "食用油" ],
        rlist: [ "" ],
        on: 0,
        more: [],
        hs: [],
        bestIngredient: [ {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 1
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 2
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 3
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 4
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 5
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 6
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 7
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 8
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 9
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 10
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 11
        }, {
            title: "",
            pic: "http://static.meishichina.com/v6/img/blank.gif",
            id: 12
        } ]
    },
    onLoad: function() {
        var t, a = this, e = [];
        for (wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    height: t.windowHeight
                });
            }
        }), t = 0; t < a.data.llist.length; t++) e.push(0);
        a.setData({
            more: e,
            rlist: a.data.rlist.concat(i.tag_data)
        }), wx.request({
            url: "https://static.meishichina.com/app/api/bestIngredient_xcx.json",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                a.setData({
                    bestIngredient: t.data.data
                });
            }
        });
    },
    onShow: function() {
        wx.setStorageSync("showmy", 1);
    },
    queryMultipleNodes: function() {
        var t = this, i = 0, a = [];
        wx.createSelectorQuery().selectAll(".tag_right_item").boundingClientRect(function(e) {
            e.forEach(function(t) {
                a.push(i), i += t.height - 10;
            }), a.push(i), t.setData({
                hs: a
            });
        }).exec();
    },
    on_tag_main: function(t) {
        var i = this, a = t.currentTarget.dataset.idx;
        i.setData({
            on: a,
            toView: "item" + a
        });
    },
    onReady: function() {
        this.queryMultipleNodes();
    },
    show_more: function(t) {
        var i = this, a = i.data.more, e = t.currentTarget.dataset.idx;
        a[e] = 1 == a[e] ? 0 : 1, i.setData({
            more: a
        }, function() {
            i.queryMultipleNodes();
        });
    },
    scroll: function(t) {
        var i, a = this, e = t.detail.scrollTop, n = a.data.hs[a.data.on], c = a.data.hs[a.data.on + 1];
        if (e > n && e < c) return !1;
        for (i = 0; i < a.data.hs.length; i++) if (e < a.data.hs[i]) {
            a.setData({
                on: i - 1
            });
            break;
        }
    },
    open_tag: function(t) {
        var i = t.currentTarget.dataset.id, a = t.currentTarget.dataset.name;
        wx.navigateTo({
            url: "/pages/ingredient_info/ingredient_info?id=" + i + "&title=" + a
        });
    },
    onShareAppMessage: function() {
        return {
            title: "食材大全",
            path: "/pages/index/index?type=ingredient&inviteuid=" + t.globalData.uid
        };
    }
});