var e = getApp(), a = e.requirejs("core"), t = e.requirejs("check");

Page({
    data: {
        id: "",
        posting: !1,
        subtext: "保存地址",
        detail: {
            consigner: "",
            phone: "",
            area: "",
            address: "",
            areaid: ""
        },
        showPicker: !1,
        pvalOld: [ 0, 0, 0 ],
        pval: [ 0, 0, 0 ],
        areas: [],
        street: [],
        streetIndex: 0,
        noArea: !1
    },
    get_wx_address: function() {
        var e = this, a = e.data.detail;
        wx.chooseAddress({
            success: function(t) {
                a.consigner = t.userName, a.phone = t.telNumber, a.address = t.detailInfo, a.province = t.provinceName, 
                a.city = t.cityName, a.area = t.countyName;
                var i = a.province + " " + a.city + " " + a.area, r = e.getIndex(i, e.data.areas);
                a.areaid = e.getareaid(i, e.data.areas), e.setData({
                    pvalOld: r,
                    pval: r,
                    detail: a
                });
            }
        });
    },
    onLoad: function(e) {
        a.setting(), this.setData({
            id: e.id,
            type: e.type,
            order: e.order,
            config: getApp().config
        }), this.getDetail(), e.id || wx.setNavigationBarTitle({
            title: "添加收货地址"
        });
        var t = this;
        a.get("area/GetArea", {}, function(a) {
            t.setData({
                areas: a.areas,
                type: e.type
            });
        });
    },
    getDetail: function() {
        var e = this, i = e.data.id;
        a.get("user/SingleAddress", {
            id: i,
            uid: getApp().getCache("userinfo").uid
        }, function(a) {
            var i = {
                show: !0
            };
            if (!t.isEmptyObject(a.info)) {
                wx.setNavigationBarTitle({
                    title: "编辑收货地址"
                });
                var r = a.info.province + " " + a.info.city + " " + a.info.district, s = e.getIndex(r, e.data.areas);
                i.pval = s, i.pvalOld = s, i.detail = a.info, i.detail.area = a.info.district;
            }
            e.setData(i);
        });
    },
    submit: function(e) {
        var t = this, i = this.data.id, r = a.pdata(e).type, s = t.data.detail;
        return s.uid = getApp().getCache("userinfo").uid, "" != s.consigner && s.consigner ? "" != s.phone && s.phone ? "" != s.city && s.city ? "" != s.address && s.address ? (t.setData({
            posting: !0
        }), void ("add" == r ? (console.log(s), a.get("user/CreateAddress", s, function(e) {
            if (0 != e.code) return t.setData({
                posting: !1
            }), void a.alert(e.msg);
            a.success("添加成功！"), setTimeout(function() {
                "add" == t.data.type && 1 == t.data.order ? wx.redirectTo({
                    url: "/yb_shop/pages/member/address/select"
                }) : wx.navigateBack();
            }, 1e3);
        })) : (s.id = i, a.get("user/UpdateAddress", s, function(e) {
            if (0 != e.code) return t.setData({
                posting: !1
            }), void a.alert(e.msg);
            a.success("修改成功！"), setTimeout(function() {
                "member" == t.data.type && 2 == t.data.order ? wx.redirectTo({
                    url: "/yb_shop/pages/member/address/select"
                }) : wx.navigateBack();
            }, 1e3);
        })))) : (a.toast("请填写详细地址"), !1) : (a.toast("请选择所在地区"), !1) : (a.toast("请填写联系电话"), 
        !1) : (a.toast("请填写收件人"), !1);
    },
    onChange: function(e) {
        var a = this.data.detail, i = e.currentTarget.dataset.type, r = t.trim(e.detail.value);
        a[i] = r, this.setData({
            detail: a
        });
    },
    selectArea: function(e) {
        var a = e.currentTarget.dataset.area, t = this.getIndex(a, this.data.areas);
        this.setData({
            pval: t,
            pvalOld: t,
            showPicker: !0
        });
    },
    getStreet: function(e, a) {
        e && a && this.data.detail.province && this.data.detail.city && this.data.openstreet && (e[a[0]].city[a[1]].code, 
        e[a[0]].city[a[1]].area[a[2]].code);
    },
    bindChange: function(e) {
        var a = this.data.pvalOld, t = e.detail.value;
        a[0] != t[0] && (t[1] = 0), a[1] != t[1] && (t[2] = 0), this.setData({
            pval: t,
            pvalOld: t
        });
    },
    onCancel: function(e) {
        this.setData({
            showPicker: !1
        });
    },
    onConfirm: function(e) {
        var a = this.data.pval, t = this.data.areas, i = this.data.detail;
        i.province = t[a[0]].name, i.city = t[a[0]].city[a[1]].name, i.areaid = t[a[0]].city[a[1]].area[a[2]].id, 
        i.datavalue = t[a[0]].code + " " + t[a[0]].city[a[1]].code, t[a[0]].city[a[1]].area && 0 < t[a[0]].city[a[1]].area.length ? (i.area = t[a[0]].city[a[1]].area[a[2]].name, 
        i.datavalue += " " + t[a[0]].city[a[1]].area[a[2]].code, this.getStreet(t, a)) : i.area = "", 
        i.street = "", this.setData({
            detail: i,
            streetIndex: 0,
            showPicker: !1
        });
    },
    getIndex: function(e, a) {
        if ("" == t.trim(e) || !t.isArray(a)) return [ 0, 0, 0 ];
        var i = e.split(" "), r = [ 0, 0, 0 ];
        for (var s in a) if (a[s].name == i[0]) {
            for (var n in r[0] = Number(s), a[s].city) if (a[s].city[n].name == i[1]) {
                for (var d in r[1] = Number(n), a[s].city[n].area) if (a[s].city[n].area[d].name == i[2]) {
                    r[2] = Number(d);
                    break;
                }
                break;
            }
            break;
        }
        return console.log(r), r;
    },
    getareaid: function(e, a) {
        var i = null;
        if ("" == t.trim(e) || !t.isArray(a)) return i;
        var r = e.split(" ");
        for (var s in console.log(a), a) if (a[s].name == r[0]) {
            for (var n in a[s].city) if (a[s].city[n].name == r[1]) {
                for (var d in a[s].city[n].area) if (a[s].city[n].area[d].name == r[2]) {
                    console.log(a[s].city[n].area[d]), i = a[s].city[n].area[d].id;
                    break;
                }
                break;
            }
            break;
        }
        return console.log(i), i;
    }
});