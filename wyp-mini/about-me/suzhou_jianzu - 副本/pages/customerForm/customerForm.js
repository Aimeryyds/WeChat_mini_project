var t, a = require("../../utils/server"), d = wx.getStorageSync("utoken");

Page({
    data: {
        showType: !1,
        region: [ "北京市", "北京市", "东城区" ],
        images: [],
        values: [],
        areaIndex: 0,
        issunmbit: !0,
        diydataList: [],
        ismoreImg: !0
    },
    onLoad: function(d) {
        (t = this).setData({
            id: d.id
        });
        var e = new Date(), s = e.getFullYear(), i = e.getMonth() + 1, l = e.getDate(), n = e.getHours(), f = e.getMinutes();
        i < 10 && (i = "0" + i), l < 10 && (l = "0" + l), n < 10 && (n = "0" + n), f < 10 && (f = "0" + f);
        var o = new Date(Date.now() + 864e5), r = o.getFullYear(), u = o.getMonth() + 1, L = o.getDate(), c = e.getMinutes();
        u < 10 && (u = "0" + u), L < 10 && (L = "0" + L), c < 10 && (c = "0" + c), t.setData({
            Startdate: s + "-" + i + "-" + l,
            Enddate: r + "-" + u + "-" + L,
            Nowdate: s + "-" + i + "-" + l,
            appointmentTime: s + "-" + i + "-" + l
        });
        var m = {};
        m.Startdate = t.data.Startdate, m.Enddate = t.data.Enddate, t.setData({
            stratEndTime: m
        });
        var p = wx.getStorageSync("utoken");
        a.sendRequest({
            url: "?r=wxapp.diyform.diyform&utoken=" + p + "&id=" + t.data.id,
            method: "GET",
            success: function(a) {
                if (a.data.result) {
                    t.setData({
                        dfieldsList: a.data.result.dfields,
                        dfieldsListSubmit: a.data.result.dfields,
                        id: a.data.result.id,
                        img: a.data.result.img,
                        title: a.data.result.title
                    });
                    for (var d in t.data.dfieldsList) t.data.dfieldsList[d].title = "", t.setData({
                        dfieldsList: t.data.dfieldsList
                    }), 8 == t.data.dfieldsList[d].data_type ? (t.data.dfieldsList[d].stratEndTime = t.data.stratEndTime, 
                    t.setData({
                        dfieldsList: t.data.dfieldsList
                    })) : 7 == t.data.dfieldsList[d].data_type ? (t.data.dfieldsList[d].appointmentTime = t.data.appointmentTime, 
                    t.setData({
                        dfieldsList: t.data.dfieldsList
                    })) : 9 == t.data.dfieldsList[d].data_type ? (t.data.dfieldsList[d].region = t.data.region, 
                    t.setData({
                        dfieldsList: t.data.dfieldsList
                    })) : 2 == t.data.dfieldsList[d].data_type ? (t.data.dfieldsList[d].showType = t.data.showType, 
                    t.setData({
                        dfieldsList: t.data.dfieldsList
                    })) : 5 == t.data.dfieldsList[d].data_type && (t.data.dfieldsList[d].images = t.data.images, 
                    t.setData({
                        dfieldsList: t.data.dfieldsList,
                        tp_max: t.data.dfieldsList[d].tp_max
                    }));
                    console.log(t.data.dfieldsList), console.log("that.data.dfieldsList------------");
                }
            }
        });
    },
    titleBlock: function(t) {
        var a = this, d = t.currentTarget.dataset.index;
        a.data.dfieldsList[d].title = "", a.setData({
            dfieldsList: a.data.dfieldsList
        });
    },
    title: function(t) {
        var a = this, d = t.currentTarget.dataset.index;
        a.data.dfieldsList[d].title = "block", a.setData({
            dfieldsList: a.data.dfieldsList
        });
    },
    pname: function(a) {
        t = this;
        var d = a.target.dataset.id, e = a.detail.value;
        for (var s in t.data.dfieldsList) 0 == t.data.dfieldsList[s].data_type && s == d && (t.data.dfieldsList[s].myCont = a.detail.value, 
        t.setData({
            dfieldsList: t.data.dfieldsList
        }));
        e ? t.setData({
            pname: e
        }) : wx.showModal({
            title: "提示",
            content: "信息填写错误",
            success: function(a) {
                a.confirm ? t.setData({
                    pname: ""
                }) : a.cancel && t.setData({
                    pname: ""
                });
            }
        });
    },
    phoneChange: function(a) {
        t = this;
        var d = a.target.dataset.id;
        for (var e in t.data.dfieldsList) if (0 == t.data.dfieldsList[e].data_type && e == d) {
            var s = a.detail.value;
            /^1[34578]\d{9}$/.test(s) ? t.setData({
                phone: s
            }) : wx.showModal({
                title: "提示",
                content: "信息填写错误",
                success: function(a) {
                    a.confirm ? t.setData({
                        phone: ""
                    }) : a.cancel && t.setData({
                        phone: ""
                    });
                }
            }), t.data.dfieldsList[e].myCont = t.data.phone, t.setData({
                dfieldsList: t.data.dfieldsList
            });
        }
    },
    idNumber: function(a) {
        t = this;
        var d = a.detail.value, e = a.target.dataset.id;
        for (var s in t.data.dfieldsList) 6 == t.data.dfieldsList[s].data_type && (console.log(s), 
        s == e && (/^\d{17}(\d|x)$/i.test(d) ? t.setData({
            idNumber: d
        }) : wx.showModal({
            title: "提示",
            content: "信息填写错误",
            success: function(a) {
                a.confirm ? t.setData({
                    idNumber: ""
                }) : a.cancel && t.setData({
                    idNumber: ""
                });
            }
        }), t.data.dfieldsList[s].idNumber = t.data.idNumber, t.setData({
            dfieldsList: t.data.dfieldsList
        })));
    },
    areaCont: function(a) {
        t = this;
        var d = a.detail.value, e = a.target.dataset.id;
        for (var s in t.data.dfieldsList) 1 == t.data.dfieldsList[s].data_type && s == e && (t.data.dfieldsList[s].myArea = a.detail.value, 
        t.setData({
            dfieldsList: t.data.dfieldsList
        }));
        t.setData({
            cont: d
        });
    },
    checkboxChange: function(t) {
        var a = this, d = t.target.dataset.id;
        for (var e in a.data.dfieldsList) 3 == a.data.dfieldsList[e].data_type && (console.log(e), 
        e == d && (a.data.dfieldsList[e].myOption = t.detail.value, a.setData({
            dfieldsList: a.data.dfieldsList
        })));
    },
    selectArea: function(a) {
        (t = this).setData({
            areaIndex: a.detail.value
        });
        var d = a.target.dataset.id;
        console.log(d);
        for (var e in t.data.dfieldsList) 2 == t.data.dfieldsList[e].data_type && e == d && (t.data.dfieldsList[e].areaIndex = t.data.areaIndex, 
        t.data.dfieldsList[e].selectArea = t.data.dfieldsList[e].tp_text[t.data.dfieldsList[e].areaIndex], 
        t.setData({
            dfieldsList: t.data.dfieldsList
        }));
    },
    bindRegionChange: function(t) {
        var a = this, d = t.target.dataset.id;
        for (var e in a.data.dfieldsList) 9 == a.data.dfieldsList[e].data_type && (console.log(e), 
        e == d && (a.data.dfieldsList[e].region = t.detail.value, a.setData({
            dfieldsList: a.data.dfieldsList
        })));
    },
    chooseImage: function(a) {
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                var s = e.tempFilePaths;
                wx.uploadFile({
                    url: "https://tws.cnweisou.com/wxapi/index.php?r=order.refund.upload_img&utoken=" + d + "&i=450",
                    filePath: s[0],
                    name: "file",
                    success: function(d) {
                        var e = JSON.parse(d.data), s = t.data.images, i = t.data.values;
                        s.push(e.result.url), i.push(e.result.value), s.length > t.data.tp_max || i.length > t.data.tp_max ? (wx.showToast({
                            title: "超过上传图片数量",
                            icon: "success",
                            duration: 2e3
                        }), s.splice(t.data.tp_max, s.length), i.splice(t.data.tp_max, i.length), t.setData({
                            images: s,
                            ValueLists: i
                        })) : t.setData({
                            images: s,
                            ValueLists: i
                        });
                        var l = a.target.dataset.id;
                        console.log(l);
                        for (var n in t.data.dfieldsList) 5 == t.data.dfieldsList[n].data_type && (console.log(n), 
                        n == l && (t.data.dfieldsList[n].images = t.data.images, t.data.dfieldsList[n].ValueLists = t.data.ValueLists, 
                        t.setData({
                            dfieldsList: t.data.dfieldsList,
                            previewImage: t.data.dfieldsList[n].images,
                            thisI: n
                        }), console.log(t.data.dfieldsList)));
                    }
                });
            }
        });
    },
    previewImage: function(t) {
        var a = this;
        for (var d in a.data.dfieldsList) 5 == a.data.dfieldsList[d].data_type && (console.log(d), 
        d == a.data.thisI && wx.previewImage({
            urls: a.data.dfieldsList[d].images
        }));
    },
    delete: function(t) {
        var a = this;
        console.log(t);
        for (var d in a.data.dfieldsList) if (5 == a.data.dfieldsList[d].data_type && (console.log(d), 
        d == a.data.thisI)) {
            var e = t.currentTarget.dataset.index, s = a.data.dfieldsList[d].images, i = a.data.dfieldsList[d].ValueLists;
            s.splice(e, 1), i.splice(e, 1), a.setData({
                images: s,
                ValueLists: i
            }), a.data.dfieldsList[d].images = a.data.images, a.data.dfieldsList[d].ValueLists = a.data.ValueLists, 
            a.setData({
                dfieldsList: a.data.dfieldsList
            });
        }
    },
    appointment: function(a) {
        t = this;
        var d = a.target.dataset.id;
        console.log(d);
        for (var e in t.data.dfieldsList) 7 == t.data.dfieldsList[e].data_type && (console.log(e), 
        e == d && (a.detail.value >= this.data.Nowdate ? this.setData({
            appointmentTime: a.detail.value
        }) : (this.setData({
            appointmentTime: this.data.Nowdate
        }), wx.showModal({
            title: "提示",
            content: "开始时间不得早于当前"
        })), t.data.dfieldsList[e].appointmentTime = t.data.appointmentTime, t.setData({
            dfieldsList: t.data.dfieldsList
        })));
    },
    changeStartDate: function(a) {
        t = this;
        var d = a.target.dataset.id;
        for (var e in t.data.dfieldsList) 8 == t.data.dfieldsList[e].data_type && (console.log(e), 
        e == d && (a.detail.value <= t.data.dfieldsList[e].stratEndTime.Enddate ? t.setData({
            Startdate: a.detail.value
        }) : wx.showModal({
            title: "提示",
            content: "结束时间不能早于开始时间",
            success: function(a) {
                a.confirm ? (t.data.dfieldsList[e].stratEndTime.Startdate = t.data.Startdate, t.setData({
                    Startdate: t.data.Nowdate,
                    dfieldsList: t.data.dfieldsList
                })) : a.cancel && t.setData({
                    Startdate: t.data.Nowdate
                });
            }
        }), a.detail.value >= this.data.Nowdate ? this.setData({
            Startdate: a.detail.value
        }) : (this.setData({
            Startdate: this.data.Nowdate
        }), wx.showModal({
            title: "提示",
            content: "开始时间不得早于当前"
        })), t.data.dfieldsList[e].stratEndTime.Startdate = t.data.Startdate, t.setData({
            dfieldsList: t.data.dfieldsList
        })));
    },
    changeEndDate: function(t) {
        var a = this, d = t.target.dataset.id;
        console.log(d);
        for (var e in a.data.dfieldsList) 8 == a.data.dfieldsList[e].data_type && (console.log(e), 
        e == d && (t.detail.value >= a.data.Startdate ? this.setData({
            Enddate: t.detail.value
        }) : wx.showModal({
            title: "提示",
            content: "结束时间不能早于开始时间"
        }), a.data.dfieldsList[e].stratEndTime.Enddate = a.data.Enddate, a.setData({
            dfieldsList: a.data.dfieldsList
        })));
    },
    formResetAll: function() {},
    formSubmitAll: function() {
        t = this;
        var d = [];
        for (var e in t.data.dfieldsList) 1 == t.data.dfieldsList[e].tp_must && (0 == t.data.dfieldsList[e].data_type && (console.log(t.data.dfieldsList[e]), 
        t.data.dfieldsList[e].myCont ? d.push(!0) : d.push(!1)), 1 == t.data.dfieldsList[e].data_type && (t.data.dfieldsList[e].myArea ? d.push(!0) : d.push(!1)), 
        2 == t.data.dfieldsList[e].data_type && (t.data.dfieldsList[e].selectArea ? d.push(!0) : d.push(!1)), 
        3 == t.data.dfieldsList[e].data_type && (t.data.dfieldsList[e].myOption || d.push(!1)), 
        5 == t.data.dfieldsList[e].data_type && (t.data.dfieldsList[e].ValueLists ? d.push(!0) : d.push(!1)), 
        6 == t.data.dfieldsList[e].data_type && (t.data.dfieldsList[e].idNumber ? d.push(!0) : d.push(!1)), 
        7 == t.data.dfieldsList[e].data_type && (t.data.dfieldsList[e].appointmentTime ? d.push(!0) : d.push(!1)), 
        8 == t.data.dfieldsList[e].data_type && (!t.data.dfieldsList[e].stratEndTime.Startdate && t.data.dfieldsList[e].stratEndTime.Enddate ? d.push(!1) : d.push(!0)), 
        9 == t.data.dfieldsList[e].data_type && (t.data.dfieldsList[e].region ? d.push(!0) : d.push(!1)));
        var s = [];
        for (var i in d) 0 == d[i] && s.push(d[i]);
        if (console.log(s), 0 == s.length ? t.setData({
            issunmbit: !0
        }) : t.setData({
            issunmbit: ""
        }), t.data.issunmbit) {
            for (var l in t.data.dfieldsList) switch (t.data.dfieldsList[l].data_type) {
              case "0":
                t.data.dfieldsListSubmit[l] = t.data.dfieldsList[l].myCont, t.setData({
                    dfieldsListSubmit: t.data.dfieldsListSubmit
                });
                break;

              case "1":
                t.data.dfieldsListSubmit[l] = t.data.dfieldsList[l].myArea, t.setData({
                    dfieldsListSubmit: t.data.dfieldsListSubmit
                });
                break;

              case "2":
                t.data.dfieldsListSubmit[l] = t.data.dfieldsList[l].selectArea, t.setData({
                    dfieldsListSubmit: t.data.dfieldsListSubmit
                });
                break;

              case "3":
                t.data.dfieldsListSubmit[l] = t.data.dfieldsList[l].myOption, t.setData({
                    dfieldsListSubmit: t.data.dfieldsListSubmit
                });
                break;

              case "5":
                t.data.dfieldsListSubmit[l] = t.data.dfieldsList[l].ValueLists, t.setData({
                    dfieldsListSubmit: t.data.dfieldsListSubmit
                });
                break;

              case "6":
                t.data.dfieldsListSubmit[l] = t.data.dfieldsList[l].idNumber, t.setData({
                    dfieldsListSubmit: t.data.dfieldsListSubmit
                });
                break;

              case "7":
                t.data.dfieldsListSubmit[l] = t.data.dfieldsList[l].appointmentTime, t.setData({
                    dfieldsListSubmit: t.data.dfieldsListSubmit
                });
                break;

              case "8":
                t.data.dfieldsListSubmit[l + "_0"] = t.data.dfieldsList[l].stratEndTime.Startdate, 
                t.data.dfieldsListSubmit[l + "_1"] = t.data.dfieldsList[l].stratEndTime.Enddate, 
                delete t.data.dfieldsListSubmit[l], t.setData({
                    dfieldsListSubmit: t.data.dfieldsListSubmit
                });
                break;

              case "9":
                t.data.dfieldsListSubmit[l] = t.data.dfieldsList[l].region, t.setData({
                    dfieldsListSubmit: t.data.dfieldsListSubmit
                });
            }
            var n = {};
            for (var f in t.data.dfieldsListSubmit) n[f] = t.data.dfieldsListSubmit[f], void 0 == n[f] && (n[f] = " ");
            var o = wx.getStorageSync("utoken");
            a.sendRequest({
                url: "?r=wxapp.diyform.diyform.submit&utoken=" + o + "&diyformid=" + t.data.id,
                data: {
                    diydata: n
                },
                method: "post",
                success: function(t) {
                    console.log(t), console.log(t.data.result), wx.showToast({
                        title: "成功",
                        icon: "success",
                        duration: 4e3,
                        success: function() {
                            wx.navigateTo({
                                url: "formSuccess/formSuccess"
                            });
                        }
                    });
                }
            });
        } else wx.showModal({
            title: "提示",
            content: "请填写带*的必填项",
            success: function(t) {
                t.confirm || t.cancel;
            }
        });
    },
    returnIndex: function() {
        this.setData({
            isError: !1
        });
    },
    joinAgain: function() {
        wx.redirectTo({
            url: "formSuccess/formSuccess"
        });
    }
});