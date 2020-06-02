var e = getApp(), t = {
    clickTypeFun: function(t) {
        var a = this, s = a.data.searchobj;
        s.house_type = t.currentTarget.dataset.id, a.setData({
            searchobj: s,
            bangongtype: t.currentTarget.dataset.id
        });
        var r = a.data.house_is_register, i = a.data.house_house_type, d = a.data.tag, o = function(e, t) {
            for (var s = 0; s < e.length; s++) e[s].checked = "不限" === e[s].show;
            var r = {};
            r[t] = e, a.setData(r);
        };
        o(r, "house_is_register"), o(i, "house_house_type"), o(d, "tag");
        var n = a.data.searchobj;
        e.extend(n, {
            house_is_register: 0,
            house_house_type: "",
            tag: ""
        }), a.setData({
            searchobj: n
        });
    },
    clickTypeZX: function(e) {
        var t = this.data.searchobj;
        t.house_zhuangxiu = e.currentTarget.dataset.id, this.setData({
            searchobj: t,
            zhuangxiutype: e.currentTarget.dataset.id
        });
    },
    filterFun: function() {
        var e = this;
        setTimeout(function() {
            var t = e.data.house_is_register, a = e.data.house_house_type, s = e.data.tag, r = e.data.searchobj, i = function(e, t, a) {
                for (var s = [], r = 0; r < e.length; r++) if (e[r].checked) {
                    var i = e[r].val + "";
                    "undefined" === i && (i = !1), s.push(i || e[r].tag_id);
                }
                a[t] = s.join(",");
            };
            i(t, "house_is_register", r), i(a, "house_house_type", r), i(s, "tag", r), e.setData({
                searchobj: r
            });
        }, 200);
    },
    clickTypeTS: function(e) {
        for (var t = this, a = e.currentTarget.dataset, s = t.data[a.key], r = {}, i = 0; i < s.length; i++) {
            var d = s[i].tag_id || s[i].val;
            a.id == d && (r = s[i]);
        }
        r.checked = !r.checked;
        var o = {};
        o[a.key] = s, t.setData(o);
        var n = function(e, a) {
            for (var s = a, r = {}, i = 0; i < s.length; i++) "不限" !== (s[i].show || s[i].name) && (s[i].checked = !1);
            r[e] = s, t.setData(r);
        }, u = t.data.house_is_register;
        if ("house_is_register" === a.key && 0 == a.id) n("house_is_register", t.data.house_is_register), 
        n("house_house_type", t.data.house_house_type), n("tag", t.data.tag); else {
            for (var h = 0; h < u.length; h++) "不限" == u[h].show && (u[h].checked = !1);
            t.setData({
                house_is_register: u
            });
        }
    },
    clickTypeClear: function(e) {
        var t = this;
        t.setData({
            bangongtype: 0,
            zhuangxiutype: 0
        });
        var a = this.data.house_is_register, s = this.data.house_house_type, r = this.data.tag, i = function(e, a) {
            for (var s = 0; s < e.length; s++) e[s].checked = "不限" === e[s].show;
            var r = {};
            r[a] = e, t.setData(r);
        };
        i(a, "house_is_register"), i(s, "house_house_type"), i(r, "tag"), t.setData({
            searchobj: {
                house_type: 0,
                house_zhuangxiu: 0,
                house_is_register: 0,
                house_house_type: "",
                tag: ""
            }
        });
    },
    goTap: function(t) {
        var a = this, s = t.currentTarget.dataset;
        if (s.obj && (s = s.obj), void 0 === s.listorder) {
            var r = a.data.filter;
            void 0 !== s.price && delete r.avg_price, void 0 !== s.avg_price && delete r.price, 
            e.extend(s, r, !0), a.setData({
                filter: s
            }), s = e.extend(s, a.data.order);
        } else a.setData({
            order: s,
            ordertype: s.listorder
        }), s = e.extend(s, a.data.filter);
        var i = e.getSecret(), d = e.extend({
            domain: e.globalData.domain,
            currtime: i.currtime,
            sign: i.sign
        }, s);
        "0" === d.district_id && (delete d.district_id, delete d.circle_id), "0" === d.subway_line && (delete d.subway_line, 
        delete d.station), wx.request({
            url: e.globalData.haozuBase + "/api/miniapps/list/",
            data: d,
            success: function(t) {
                var r = t.data;
                if (0 != r.data.building_list.length) {
                    var i = e.extend(s, a.data.filter);
                    "0" === i.district_id && (delete i.district_id, delete i.circle_id), "0" === i.subway_line && (delete i.subway_line, 
                    delete i.station);
                    var o = r.data.building_list, n = o.items, u = [];
                    for (var h in n) n[h].point_name && (n[h].name = n[h].point_name), u.push(n[h]);
                    var c = {}, _ = [];
                    e.extend(_, a.data.areas), e.extend(c, a.data.tabArr), d.district_id || (c.curSdIndexR = -1, 
                    _ = []);
                    var g = [];
                    e.extend(g, a.data.stations), e.extend(c, a.data.tabArr), d.subway_line || (c.curLdIndexR = -1, 
                    g = []), a.setData({
                        building_items: u,
                        selected: 5,
                        nohouse: !1,
                        house_show: !0,
                        showDialog: !1,
                        pages: 1,
                        maxPage: Math.ceil(o.total / 10),
                        scrollTop: 0,
                        tabArr: c,
                        filter: i,
                        areas: _,
                        stations: g,
                        params: r.data.params
                    });
                } else a.setData({
                    building_items: [],
                    nohouse: !0,
                    house_show: !1,
                    selected: 5,
                    showDialog: !1
                });
            }
        });
    },
    tabFun: function(e) {
        var t = Number(e.target.dataset.id), a = e.currentTarget.dataset.key, s = this.data.tabArr;
        "curAIndex" !== a && "curPIndex" !== a || (s["curAIndex" === a ? "curPIndex" : "curAIndex"] = ""), 
        s[a] = t, this.setData({
            tabArr: s
        });
    },
    tabFunWay: function(e) {
        var t = Number(e.target.dataset.id), a = e.currentTarget.dataset.key, s = this.data.tabArr;
        0 === t && (s[a + "R"] = "curLdIndex" == a ? "沿线" : ""), s[a] = t, this.setData({
            tabArr: s
        });
    },
    tabFunlab: function(e) {
        var t = e.target.dataset.id, a = e.currentTarget.dataset.key, s = this.data.tabArr;
        s[a] = t, this.setData({
            tabArr: s
        });
    },
    showFn: function() {
        var e = this;
        wx.makePhoneCall({
            phoneNumber: e.data.msg_template
        });
    }
};

module.exports = t;