function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a, s = 1, o = require("../../../utils/server"), i = wx.getStorageSync("utoken"), n = [];

Page((e = {
    data: {
        list: [ "供应", "需求" ],
        sub: 0,
        showType: !1,
        isType: !1,
        hasType: !1,
        isBottom: !1,
        currtype: ""
    },
    onLoad: function(t) {
        a = this, t.issd ? a.setData({
            sub: t.sub
        }) : a.setData({
            sub: 0
        }), i = wx.getStorageSync("utoken"), o.sendRequest({
            url: "?r=sad.get_type&utoken=" + i,
            method: "GET",
            success: function(t) {
                console.log(t), console.log(t.data.result);
                var e, s = t.data.result;
                for (var o in s) e = o;
                s[parseInt(e) + 1] = "所有", a.setData({
                    typeList: s,
                    currtype: s[parseInt(e) + 1],
                    len: parseInt(e) + 1
                });
            }
        });
    },
    onShow: function() {
        i = wx.getStorageSync("utoken");
        var t = this;
        s = 1, t.setData({
            currtype: ""
        }), t.allListStrat(i, t.data.sub, s, t.data.currtype);
    },
    selectType: function(t) {
        a = this, console.log("selectType"), a.setData({
            showType: !0,
            listType: a.data.typeList
        });
    },
    chooseType: function(t) {
        var e = this;
        console.log(t), console.log(e.data.listType), console.log("chooseType");
        var a = t.currentTarget.dataset.index;
        e.setData({
            showType: !1,
            currtype: e.data.listType[a]
        }), console.log(e.data.len), e.allListStrat(i, e.data.sub, s, e.data.currtype);
    },
    sarchType: function() {
        a = this;
    },
    searchCont: function(t) {
        var e = this, a = t.detail.value, s = [];
        if (e.setData({
            searchCont: a
        }), e.data.searchCont) {
            var o = e.data.typeList;
            for (var i in o) o[i].indexOf(e.data.searchCont) > -1 && s.push(o[i]);
            if (0 != s.length) {
                e.setData({
                    typeSame: s
                });
                e.data.typeList.length;
            }
        }
        0 == s.length && e.setData({
            isType: !0,
            searchCont: ""
        });
    },
    choosetypeSame: function(t) {
        var e = this;
        console.log("choosetypeSame------------");
        var a = t.currentTarget.dataset.index;
        e.setData({
            searchCont: e.data.typeSame[a],
            currtype: e.data.typeSame[a],
            typeSame: ""
        }), s = 1, e.allListStrat(i, e.data.sub, s, e.data.currtype);
    },
    returnIndex: function() {
        this.setData({
            isBottom: !1
        });
    },
    isType: function() {
        this.setData({
            isType: !1,
            searchCont: ""
        });
    }
}, t(e, "returnIndex", function() {
    this.setData({
        isBottom: !1
    });
}), t(e, "add", function() {
    wx.navigateTo({
        url: "../../supdem/supdem"
    });
}), t(e, "clickTitle", function(t) {
    console.log("clickTitle"), console.log(t), s = 1;
    var e = this;
    e.setData({
        currtype: ""
    });
    var a = t.currentTarget.dataset.index;
    e.setData({
        sub: a
    }), s = 1, e.allListStrat(i, e.data.sub, s, e.data.currtype);
}), t(e, "joindetialInfo", function(t) {
    a = this;
    var e = t.currentTarget.dataset.index;
    i = wx.getStorageSync("utoken"), o.sendRequest({
        url: "?r=sad.add_views&utoken=" + i + "&id=" + a.data.contList[e].id,
        data: {},
        method: "GET",
        success: function(t) {
            wx.navigateTo({
                url: "../detialInfo/detialInfo?id=" + a.data.contList[e].id
            });
        }
    });
}), t(e, "joinCreatActivity", function() {
    wx.navigateTo({
        url: "../../supdem/supdem?sub=" + a.data.sub
    });
}), t(e, "onReachBottom", function() {
    var t = this;
    t.data.isBottom || (s++, t.allListStrat(i, t.data.sub, s, t.data.currtype));
}), t(e, "onPullDownRefresh", function() {
    s = 1;
    var t = this;
    t.setData({
        currtype: ""
    }), t.allListStrat(i, t.data.sub, s, t.data.currtype), wx.stopPullDownRefresh();
}), t(e, "allListStrat", function(t, e, a, s) {
    var i = this;
    o.sendRequest({
        url: "?r=sad2.mylist",
        data: {
            utoken: t,
            type: e,
            page: a,
            desc: s
        },
        method: "GET",
        success: function(t) {
            if (t.data.result) if (t.data.result.list && t.data.result.list.length > 0) {
                i.setData({
                    isMylist: !0,
                    searchCont: "",
                    isBottom: !1
                });
                var e;
                for (var o in t.data.result.list) e = t.data.result.list[o].createtime.indexOf(" "), 
                console.log(e), t.data.result.list[o].createtime = t.data.result.list[o].createtime.substring(0, e), 
                console.log(t.data.result.list[o].createtime);
                1 == a ? (n = [], n = t.data.result.list, i.setData({
                    contList: n
                })) : (n.concat(t.data.result.list), i.setData({
                    contList: n
                }));
            } else 1 == a ? (i.setData({
                isMylist: !1
            }), s || i.setData({
                isType: !0,
                hasType: !1
            })) : (console.log(a), i.setData({
                isBottom: !0
            })), i.setData({
                searchCont: ""
            });
        }
    });
}), t(e, "allInfo", function() {
    wx.redirectTo({
        url: "../exhibit/exhibit"
    });
}), e));