var a = getApp();

Page({
    data: {
        address: {
            name: "",
            phone: "",
            detail: "",
            is_def: "",
            prov_id: "",
            dist_id: "",
            city_id: "",
            province: ""
        },
        isShow: !1,
        areaname: [],
        uid: 0
    },
    onShow: function() {},
    formSubmit: function() {
        var t = this, e = t.data.uid, d = t.data.address;
        d.name && d.phone && d.detailed_addr && d.prov_id && d.city_id && d.dist_id ? a.apiRequest("user", "delivery_address", {
            data: {
                address: JSON.stringify(t.data.address),
                uid: e
            },
            success: function(a) {
                "OK" == a.data.result ? (wx.showToast({
                    title: "保存成功"
                }), wx.navigateBack()) : wx.showToast({
                    title: "保存失败"
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "请填写完整资料",
            showCancel: !1
        });
    },
    bindName: function(a) {
        this.setData({
            "address.name": a.detail.value
        });
    },
    toBack: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    bindPhone: function(a) {
        this.setData({
            "address.phone": a.detail.value
        });
    },
    bindDetail: function(a) {
        this.setData({
            "address.detailed_addr": a.detail.value
        });
    },
    switchChange: function(a) {
        var t = "0";
        1 == a.detail.value && (t = "1"), this.setData({
            "address.is_def": a.detail.value,
            "address.is_default": t
        });
    },
    onCancel: function() {
        this.setData({
            "address.povince": "",
            isShow: !1
        });
    },
    onConfirm: function() {
        this.setData({
            isShow: !1
        });
    },
    addDot: function(a) {
        a instanceof Array && a.map(function(a) {
            return a.fullName.length > 4 ? (a.fullNameDot = a.fullName.slice(0, 4) + "...", 
            a) : (a.fullNameDot = a.fullName, a);
        });
    },
    onLoad: function(t) {
        var e = this, d = 0;
        t.id && (d = t.id), e.setData({
            isShow: !1,
            showDistrict: !0
        }), d && a.apiRequest("user", "getconsignee", {
            data: {
                id: d
            },
            success: function(a) {
                if ("OK" == a.data.result) {
                    var t = a.data.data, i = a.data.areaname, s = i[t.prov_id], c = i[t.city_id], n = i[t.dist_id];
                    t.province = s + " - " + c + " - " + n, void 0 === n && (t.province = s + " - " + c), 
                    "1" == t.is_default ? t.is_def = !0 : t.is_def = !1, e.setData({
                        address: t,
                        areaname: i,
                        uid: d
                    });
                } else wx.showToast({
                    title: "参数错误"
                }), wx.navigateBack();
            }
        }), new Promise(function(t, e) {
            a.apiRequest("user", "basearea", {
                data: {
                    pid: 1
                },
                success: function(a) {
                    return t(a);
                },
                fail: function(a) {
                    return e(a);
                }
            });
        }).then(function(t) {
            var d = t.data.data[0];
            return e.addDot(t.data.data), e.setData({
                proviceData: t.data.data,
                "selectedProvince.index": 0,
                "selectedProvince.code": d.code,
                "selectedProvince.fullName": d.fullName,
                prov_id: d.fullName
            }), new Promise(function(t, e) {
                a.apiRequest("user", "basearea", {
                    data: {
                        pid: d.code
                    },
                    success: function(a) {
                        return t(a);
                    },
                    fail: function(a) {
                        return e(a);
                    }
                });
            });
        }).then(function(t) {
            var d = t.data.data[0];
            return e.addDot(t.data.data), e.setData({
                cityData: t.data.data,
                "selectedCity.index": 0,
                "selectedCity.code": d.code,
                "selectedCity.fullName": d.fullName,
                city_id: d.fullName
            }), e.data.showDistrict ? new Promise(function(t, e) {
                a.apiRequest("user", "basearea", {
                    data: {
                        pid: d.code
                    },
                    success: function(a) {
                        return t(a);
                    },
                    fail: function(a) {
                        return e(a);
                    }
                });
            }) : void e.setData({
                value: [ 0, 0 ]
            });
        }).then(function(a) {
            var t = a.data.data[0];
            e.addDot(a.data.data), e.setData({
                value: [ 0, 0, 0 ],
                districtData: a.data.data,
                "selectedDistrict.index": 0,
                "selectedDistrict.code": t.code,
                "selectedDistrict.fullName": t.fullName,
                dist_id: t.fullName
            });
        }).catch(function(a) {
            console.log(a);
        });
    },
    choosearea: function() {
        this.setData({
            isShow: !0
        });
        var a = this.data, t = a.address;
        t.province = a.prov_id + "-" + a.dist_id + "-" + a.city_id, t.prov_id = a.selectedProvince.code, 
        t.dist_id = a.selectedDistrict.code, t.city_id = a.selectedCity.code, this.setData({
            address: t
        });
    },
    bindChange: function(t) {
        var e = this, d = t.detail.value, i = this.data, s = i.address;
        d.length > 2 && (this.data.value[0] !== d[0] && this.data.value[1] === d[1] && this.data.value[2] === d[2] ? new Promise(function(t, e) {
            a.apiRequest("user", "basearea", {
                data: {
                    pid: i.proviceData[d[0]].code
                },
                success: function(a) {
                    return t(a);
                },
                fail: function(a) {
                    return e(a);
                }
            });
        }).then(function(t) {
            return !!t.data.data && (e.addDot(t.data.data), e.setData({
                cityData: t.data.data
            }), new Promise(function(e, d) {
                a.apiRequest("user", "basearea", {
                    data: {
                        pid: t.data.data[0].code
                    },
                    success: function(a) {
                        return e(a);
                    },
                    fail: function(a) {
                        return d(a);
                    }
                });
            }));
        }).then(function(a) {
            if (!a.data || !a.data.data) return !1;
            a.data.data.length > 0 && (e.addDot(a.data.data), e.setData({
                districtData: a.data.data,
                value: [ d[0], 0, 0 ]
            }), s.province = e.data.proviceData[d[0]].fullName + " - " + e.data.cityData[0].fullName + " - " + a.data.data[0].fullName, 
            s.prov_id = e.data.proviceData[d[0]].code, s.city_id = e.data.cityData[d[1]].code, 
            s.dist_id = e.data.districtData[d[2]].code, e.setData({
                address: s
            }));
        }).catch(function(a) {
            console.log(a);
        }) : this.data.value[0] === d[0] && this.data.value[1] !== d[1] && this.data.value[2] === d[2] ? new Promise(function(t, e) {
            a.apiRequest("user", "basearea", {
                data: {
                    pid: i.cityData[d[1]].code
                },
                success: function(a) {
                    return t(a);
                },
                fail: function(a) {
                    return e(a);
                }
            });
        }).then(function(a) {
            a.data.errmsg ? (a.data.data = [ "" ], e.addDot(a.data.data), s.province = e.data.proviceData[d[0]].fullName + " - " + e.data.cityData[d[1]].fullName, 
            s.prov_id = e.data.proviceData[d[0]].code, s.city_id = e.data.cityData[d[1]].code, 
            e.setData({
                districtData: a.data.data,
                value: [ d[0], d[1], 0 ]
            }), s.dist_id = "0", e.setData({
                address: s
            })) : a.data.data.length > 0 && (e.addDot(a.data.data), s.province = e.data.proviceData[d[0]].fullName + " - " + e.data.cityData[d[1]].fullName + " - " + a.data.data[0].fullName, 
            s.prov_id = e.data.proviceData[d[0]].code, s.city_id = e.data.cityData[d[1]].code, 
            e.setData({
                districtData: a.data.data,
                value: [ d[0], d[1], 0 ]
            }), s.dist_id = e.data.districtData[d[2]].code, e.setData({
                address: s
            }));
        }).catch(function(a) {
            console.log(a);
        }) : this.data.value[0] === d[0] && this.data.value[1] === d[1] && this.data.value[2] !== d[2] && (s.province = this.data.proviceData[d[0]].fullName + " - " + this.data.cityData[d[1]].fullName + " - " + this.data.districtData[d[2]].fullName, 
        s.prov_id = this.data.proviceData[d[0]].code, s.city_id = this.data.cityData[d[1]].code, 
        s.dist_id = this.data.districtData[d[2]].code, this.setData({
            value: d,
            address: s
        })));
    }
});