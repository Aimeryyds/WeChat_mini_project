var e = require("../../utils/citys.js"), s = [], a = [], t = {
    load: function(t) {
        a = e.getCityData();
        for (var u = [], r = [], i = 0; i < a.length; i++) s.push(a[i].name);
        for (var n = 0; n < a[0].sub.length; n++) u.push(a[0].sub[n].name);
        for (var d = 0; d < a[0].sub[0].sub.length; d++) r.push(a[0].sub[0].sub[d].name);
        t.setData({
            provinces: s,
            citys: u,
            countys: r
        });
        var l = t.data.deliveryAddr;
        null == (l = null == l ? {} : l).province ? (l.province = a[0].name, l.city = a[0].sub[0].name, 
        l.district = a[0].sub[0].sub[0].name, t.setData({
            deliveryAddr: l
        })) : this.setvalue(t);
    },
    choose: function(e, s) {
        var t = e.detail.value, u = s.data.values;
        if (t[0] == u[0]) if (t[1] == u[1]) t[2] == u[2] || s.setData({
            "deliveryAddr.district": s.data.countys[t[2]],
            values: t
        }); else {
            for (var r = [], i = 0; i < a[t[0]].sub[t[1]].sub.length; i++) r.push(a[t[0]].sub[t[1]].sub[i].name);
            s.setData({
                "deliveryAddr.city": s.data.citys[t[1]],
                "deliveryAddr.district": a[t[0]].sub[t[1]].sub[0].name,
                countys: r,
                values: t,
                value: [ t[0], t[1], 0 ]
            });
        } else {
            for (var n = [], d = [], l = 0; l < a[t[0]].sub.length; l++) n.push(a[t[0]].sub[l].name);
            for (var v = 0; v < a[t[0]].sub[0].sub.length; v++) d.push(a[t[0]].sub[0].sub[v].name);
            s.setData({
                "deliveryAddr.province": s.data.provinces[t[0]],
                "deliveryAddr.city": a[t[0]].sub[0].name,
                "deliveryAddr.district": a[t[0]].sub[0].sub[0].name,
                citys: n,
                countys: d,
                values: t,
                value: [ t[0], 0, 0 ]
            });
        }
    },
    setvalue: function(e) {
        for (var t = e.data.deliveryAddr, u = t.province, r = t.city, i = t.district, n = [], d = [], l = [], v = 0; v < s.length; v++) if (u == s[v]) {
            n.push(v);
            for (var c = a[v].sub, o = 0; o < c.length; o++) if (d.push(c[o].name), r == c[o].name) {
                n.push(o);
                for (var b = c[o].sub, y = 0; y < b.length; y++) l.push(b[y].name), i == b[y].name && n.push(y);
            }
            break;
        }
        e.setData({
            value: n,
            citys: d,
            countys: l
        });
    }
};

module.exports = {
    SA: t
};