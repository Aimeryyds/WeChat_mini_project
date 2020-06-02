var e = getApp(), t = require("../../sdk/dingxiang.js");

Page({
    data: {
        widthBig: !1,
        scrollTop: 0,
        h: "",
        showButton: !0,
        showFas: !1,
        showList: !1,
        showMore: !1,
        tempFilePaths: "",
        tempFilePaths2: "",
        loadinghide: !1,
        page: 1,
        list: [],
        scrollHeight: 0,
        ismore: !0,
        inputText: "",
        messageId: 0,
        offen: [ "您好，请问这套房子还在吗？", "什么时间方便看房？", "请问这套房子首付和贷款是多少？", "附近还有相似的房子吗？" ],
        isActived: !0,
        loginStatus: 0,
        auto_send_house: 0,
        is_first: 1
    },
    onLoad: function(a) {
        var o = this;
        new t({
            appId: e.globalData.dxAppId
        }, function(e, t) {
            if (e) console.log(e); else {
                o.setData({
                    dxDeviceId: t
                }), console.log("options", a);
                var s = wx.getStorageSync("loginStatus");
                if (1 == s) {
                    var i = wx.getStorageSync("userInfo");
                    o.setData({
                        loginStatus: s,
                        uid: i.uid,
                        userInfo: i
                    });
                } else o.toLogin();
                console.log("加载", o.data.is_first), 1 == o.data.is_first && void 0 !== a.hid && void 0 !== a.cityId && void 0 !== a.type && (console.log(a.type), 
                o.setData({
                    hid: a.hid,
                    cityId: a.cityId,
                    type: a.type,
                    auto_send_house: 1
                }));
                var n = a.bid;
                -1 != n.indexOf("id") ? o.setData({
                    brokerid: n
                }) : o.setData({
                    brokerid: n + "id"
                });
                var r = o, d = wx.getSystemInfoSync().windowHeight - 60;
                r.setData({
                    h: d,
                    scrollTop: 200
                }), o.getBrokerInfo(), o.getUserStatus(), o.getList();
            }
        });
    },
    phrase_list_ShowState: function() {
        var e = this;
        e.setData({
            showList: !e.data.showList,
            showMore: !1,
            widthBig: !1
        }), 0 == e.data.showList && (console.log("-----常用语收起-------"), console.log(wx.getSystemInfoSync().windowHeight - 60), 
        e.setData({
            h: wx.getSystemInfoSync().windowHeight - 60
        })), 1 == e.data.showList && (console.log("-----常用语展开-------"), console.log(wx.getSystemInfoSync().windowHeight - 270), 
        e.setData({
            h: wx.getSystemInfoSync().windowHeight - 270
        }));
    },
    sendOffen: function(e) {
        var t = e.currentTarget.dataset.index, a = this.data.offen[t];
        this.setData({
            showButton: !1,
            showFas: !0,
            widthBig: !0,
            inputText: a,
            is_send: !0
        });
    },
    moreBtn: function() {
        var e = this;
        e.setData({
            showMore: !e.data.showMore,
            showList: !1
        }), 0 == e.data.showMore && (console.log("-----更多收起-------"), console.log(wx.getSystemInfoSync().windowHeight - 60), 
        e.setData({
            h: wx.getSystemInfoSync().windowHeight - 60
        })), 1 == e.data.showMore && (console.log("-----更多展开-------"), console.log(wx.getSystemInfoSync().windowHeight - 180), 
        e.setData({
            h: wx.getSystemInfoSync().windowHeight - 180
        }));
    },
    bindKeyInput: function(e) {
        var t = this;
        console.log(e.detail.value), 0 == !e.detail.value.replace(/\s*/g, "").length ? t.setData({
            showButton: !1,
            showFas: !0,
            widthBig: !0,
            inputText: e.detail.value,
            is_send: !0
        }) : (console.log("input没有值"), t.setData({
            showButton: !0,
            showFas: !1,
            widthBig: !1,
            is_send: !1
        }));
    },
    send: function() {
        var t = this.data.is_send, a = this, o = a.data.isActived, s = e.globalData.url_host;
        if (t) {
            var i = a.data.brokerInfo, n = this.data.inputText, r = a.data.uid, d = i.brokerid;
            wx.request({
                url: s + "/wxim/isforbiddenuser",
                method: "post",
                data: {
                    uid: r,
                    brokerid: d,
                    content: n
                },
                success: function(e) {
                    if ("ok" == e.data) if (console.log(o), o) if (0 == i.job_leave) wx.showToast({
                        title: "该经纪人已离职！",
                        icon: "none"
                    }); else {
                        var t = {
                            imgeurl: i.brokerimg,
                            nickname: i.bname,
                            phonenum: i.mobile,
                            userhid: a.data.brokerid,
                            city: i.companysid
                        }, s = {
                            userhid: r + "uid",
                            phonenum: a.data.userInfo.loginname,
                            nickname: a.data.userInfo.nickname,
                            imageurl: a.data.userInfo.headimg
                        }, d = {
                            broker_info: t,
                            persion_info: s,
                            weichat: {
                                originType: "wxim"
                            }
                        };
                        console.log(i);
                        var l = {
                            from: r + "uid",
                            to: a.data.brokerid,
                            message_type: 0,
                            msg: n,
                            conversation_type: 1,
                            type: "sendMessage",
                            ext: d,
                            company_code: i.companysid
                        }, c = {
                            in_date: a.getTime(),
                            conversation_type: 1,
                            message_type: 0,
                            img: s.imageurl,
                            message_text_content: n
                        }, g = a.data.list;
                        g.push(c), console.log(g), a.setData({
                            list: g
                        }), a.pageScrollToBottom(), l = JSON.stringify(l), console.log(l), a.sendMsg(l), 
                        a.setData({
                            inputText: "",
                            showButton: !0,
                            showFas: !1,
                            widthBig: !1
                        });
                    } else wx.showToast({
                        title: "您已被禁言！",
                        icon: "none"
                    }); else wx.showToast({
                        title: "您已被禁言！",
                        icon: "none"
                    });
                    a.setData({
                        is_send: !0
                    });
                }
            });
        } else wx.showToast({
            title: "发送的内容不能为空！",
            icon: "none"
        });
    },
    sendMsg: function(e) {
        wx.sendSocketMessage({
            data: e,
            success: function(e) {
                console.log(e);
            }
        });
    },
    inputFocus: function() {
        var e = this;
        console.log("获得焦点"), e.setData({
            showButton: !1,
            showFas: !0,
            widthBig: !0
        });
    },
    inputBlur: function(e) {
        var t = this;
        console.log("失去焦点"), 0 == !e.detail.value.length ? (console.log("input有值"), t.setData({
            showButton: !1,
            showFas: !0,
            widthBig: !0
        })) : (console.log("input没有值"), t.setData({
            showButton: !0,
            showFas: !1,
            widthBig: !1
        }));
    },
    pageScrollToBottom: function() {
        console.log("===" + this.data.scrollTop);
        var e = this;
        wx.createSelectorQuery().select(".main_box").boundingClientRect(function(t) {
            if (t) {
                console.log(t);
                var a = t.height - e.data.h;
                e.setData({
                    scrollTop: a
                });
            }
        }).exec();
    },
    toBroker: function() {
        var e = this.data.brokerInfo.companysid, t = this.data.brokerInfo.brokerid;
        wx.navigateTo({
            url: "../broker_detail/brokerDetail?cityId=" + e + "&brokerId=" + t
        });
    },
    imageBtn: function() {
        var t = this, a = e.globalData.url_host;
        t.data.isActived ? wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album" ],
            success: function(e) {
                wx.getFileSystemManager().readFile({
                    filePath: e.tempFilePaths[0],
                    encoding: "base64",
                    success: function(e) {
                        var o = "data:image/png;base64," + e.data, s = t.data.brokerInfo, i = t.data.uid;
                        s.brokerid;
                        wx.request({
                            url: a + "/wxim/checkimg",
                            method: "post",
                            data: {
                                uid: t.data.uid,
                                img: o
                            },
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                                deviceSource: 3,
                                dxdeviceId: t.data.dxDeviceId
                            },
                            success: function(e) {
                                if (1 == e.data.status) {
                                    var a = {
                                        imgeurl: s.brokerimg,
                                        nickname: s.bname,
                                        phonenum: s.mobile,
                                        userhid: t.data.brokerid,
                                        city: s.companysid
                                    }, o = {
                                        userhid: i + "uid",
                                        phonenum: t.data.userInfo.loginname,
                                        nickname: t.data.userInfo.nickname,
                                        imageurl: t.data.userInfo.headimg
                                    }, n = {
                                        broker_info: a,
                                        persion_info: o
                                    };
                                    console.log(s);
                                    var r = {
                                        from: i + "uid",
                                        to: t.data.brokerid,
                                        message_type: 4,
                                        msg: e.data.url,
                                        conversation_type: 1,
                                        type: "sendMessage",
                                        ext: n,
                                        company_code: s.companysid
                                    }, d = {
                                        in_date: t.getTime(),
                                        conversation_type: 1,
                                        message_type: 4,
                                        img: o.imageurl,
                                        message_text_content: e.data.url
                                    }, l = t.data.list;
                                    l.push(d), console.log(l), t.setData({
                                        list: l
                                    }), t.pageScrollToBottom(), r = JSON.stringify(r), console.log(r), t.sendMsg(r);
                                } else wx.showToast({
                                    title: "您发送的图片包含敏感信息",
                                    icon: "none"
                                });
                            }
                        });
                    }
                });
            }
        }) : wx.showToast({
            title: "您已被禁言！",
            icon: "none"
        });
    },
    picturesBtn: function() {
        var t = this, a = t.data.isActived, o = e.globalData.url_host;
        a ? wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "camera" ],
            success: function(e) {
                wx.getFileSystemManager().readFile({
                    filePath: e.tempFilePaths[0],
                    encoding: "base64",
                    success: function(e) {
                        var a = "data:image/png;base64," + e.data, s = t.data.brokerInfo, i = t.data.uid;
                        s.brokerid;
                        wx.request({
                            url: o + "/wxim/checkimg",
                            method: "post",
                            data: {
                                uid: t.data.uid,
                                img: a
                            },
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                                deviceSource: 3,
                                dxdeviceId: t.data.dxDeviceId
                            },
                            success: function(e) {
                                if (1 == e.data.status) {
                                    var a = {
                                        imgeurl: s.brokerimg,
                                        nickname: s.bname,
                                        phonenum: s.mobile,
                                        userhid: t.data.brokerid,
                                        city: s.companysid
                                    }, o = {
                                        userhid: i + "uid",
                                        phonenum: t.data.userInfo.loginname,
                                        nickname: t.data.userInfo.nickname,
                                        imageurl: t.data.userInfo.headimg
                                    }, n = {
                                        broker_info: a,
                                        persion_info: o
                                    };
                                    console.log(s);
                                    var r = {
                                        from: i + "uid",
                                        to: t.data.brokerid,
                                        message_type: 4,
                                        msg: e.data.url,
                                        conversation_type: 1,
                                        type: "sendMessage",
                                        ext: n,
                                        company_code: s.companysid
                                    }, d = {
                                        in_date: t.getTime(),
                                        conversation_type: 1,
                                        message_type: 4,
                                        img: o.imageurl,
                                        message_text_content: e.data.url
                                    }, l = t.data.list;
                                    l.push(d), console.log(l), t.setData({
                                        list: l
                                    }), t.pageScrollToBottom(), r = JSON.stringify(r), console.log(r), t.sendMsg(r);
                                } else wx.showToast({
                                    title: "您发送的图片包含敏感信息",
                                    icon: "none"
                                });
                            }
                        });
                    }
                });
            }
        }) : wx.showToast({
            title: "您已被禁言！",
            icon: "none"
        });
    },
    sendHouse: function(t, a, o) {
        var s = this, i = s.data.isActived, n = e.globalData.url_host;
        if (1 == o) r = n + "/appapi/exchange/" + a + "/v1/allinfo"; else var r = n + "/appapi/rent/" + a + "/v1/allinfo";
        wx.request({
            url: r,
            method: "post",
            data: {
                hid: t
            },
            success: function(t) {
                var a = t.data.data.houseinfo;
                console.log(a);
                var n = s.data.brokerInfo, r = s.data.uid, d = n.brokerid, l = e.globalData.url_host, c = {
                    imgeurl: n.brokerimg,
                    nickname: n.bname,
                    phonenum: n.mobile,
                    userhid: s.data.brokerid,
                    city: n.companysid
                }, g = {
                    userhid: r + "uid",
                    phonenum: s.data.userInfo.loginname,
                    nickname: s.data.userInfo.nickname,
                    imageurl: s.data.userInfo.headimg
                };
                if (null == a.bedroom && (a.bedroom = 0), null == a.livingroom && (a.livingroom = 0), 
                1 == o) var u = a.price + "万", h = a.bedroom + "室" + a.livingroom + "厅" + a.toilet + "卫  " + a.buildarea + "㎡  " + a.heading; else var u = a.price + "元/月", h = a.bedroom + "室" + a.livingroom + "厅" + a.toilet + "卫  " + a.area + "㎡  " + a.heading;
                var m = "[房源]" + a.housetitle + h + u;
                wx.request({
                    url: l + "/wxim/isforbiddenuser",
                    method: "post",
                    data: {
                        uid: r,
                        brokerid: d,
                        content: m
                    },
                    success: function(e) {
                        if ("ok" == e.data) if (console.log(i), i) if (0 == n.job_leave) wx.showToast({
                            title: "该经纪人已离职！",
                            icon: "none"
                        }); else {
                            var t = {
                                area: h,
                                cityId: a.cityid,
                                houseID: a.housesid,
                                houseType: o,
                                imgurl: a.imgurl,
                                price: u,
                                title: a.housetitle,
                                weburl: a.shareurl
                            }, d = {
                                HOUSE_INFO: t,
                                broker_info: c,
                                persion_info: g,
                                txt_message_type: 3
                            }, l = {
                                from: r + "uid",
                                to: s.data.brokerid,
                                message_type: 1,
                                msg: JSON.stringify(t),
                                conversation_type: 1,
                                type: "sendMessage",
                                ext: d,
                                company_code: n.companysid
                            }, m = {
                                in_date: s.getTime(),
                                conversation_type: 1,
                                message_type: 1,
                                img: g.imageurl,
                                payload: {
                                    ext: {
                                        HOUSE_INFO: t
                                    }
                                }
                            }, p = s.data.list;
                            p.push(m), console.log(p), s.setData({
                                list: p
                            }), s.pageScrollToBottom(), console.log("=================="), console.log(l), console.log("=================="), 
                            l = JSON.stringify(l), console.log(l), s.sendMsg(l);
                        } else wx.showToast({
                            title: "您已被禁言！",
                            icon: "none"
                        });
                    }
                });
            }
        });
    },
    getUserStatus: function() {
        var t = e.globalData.url_host, a = this;
        wx.request({
            url: t + "/wxim/userstatus",
            method: "post",
            data: {
                userid: a.data.userid
            },
            success: function(e) {
                e || a.setData({
                    ismore: !1
                });
            }
        });
    },
    getList: function() {
        var t = this, a = e.globalData.url_host;
        wx.request({
            url: a + "/wxim/gethistorylist",
            method: "POST",
            data: {
                user_id: t.data.uid,
                page: t.data.page,
                brokerid: t.data.brokerid,
                message_id: t.data.messageId
            },
            success: function(e) {
                if (console.log(e.data), void 0 !== e.data.results && e.data.results.length > 0) {
                    if (e.data.page < e.data.page_count) {
                        var a = (s = e.data.results).reverse(), o = t.data.list, a = a.concat(o);
                        t.setData({
                            list: a,
                            page_count: e.data.page_count,
                            loadinghide: !0,
                            height: t.data.scrollHeight,
                            messageId: a[0].message_id
                        }), (i = wx.createSelectorQuery()).select(".main_box").boundingClientRect().exec(function(e) {
                            var a = e[0].height;
                            console.log("box-height" + a);
                            var o = a - t.data.scrollHeight;
                            console.log("height" + o), t.setData({
                                scrollTop: o,
                                scrollHeight: a,
                                ismore: !0
                            });
                        });
                    } else {
                        var s = e.data.results, a = s.reverse(), o = t.data.list, a = a.concat(o);
                        t.setData({
                            list: a,
                            page_count: e.data.page_count,
                            loadinghide: !0,
                            height: t.data.scrollHeight,
                            messageId: a[0].message_id
                        });
                        var i = wx.createSelectorQuery();
                        i.select(".main_box").boundingClientRect().exec(function(e) {
                            var a = e[0].height;
                            console.log("box-height" + a);
                            var o = a - t.data.scrollHeight;
                            console.log("height" + o), t.setData({
                                scrollTop: o,
                                scrollHeight: a,
                                ismore: !1
                            });
                        });
                    }
                    if (console.log("查询", t.data.is_first), 1 == e.data.page && 1 == t.data.auto_send_house && 1 == t.data.is_first) {
                        console.log(0x27797f26d671c8);
                        var n = t.data.hid, r = t.data.cityId, d = t.data.type;
                        t.sendHouse(n, r, d), t.setData({
                            is_first: 0
                        });
                    }
                } else if (t.setData({
                    loadinghide: !0
                }), 1 == t.data.auto_send_house && 1 == t.data.is_first) {
                    console.log(2.2222222222222223e22);
                    var l = t.data.hid, c = t.data.cityId, g = t.data.type;
                    t.sendHouse(l, c, g), t.setData({
                        is_first: 0
                    });
                }
            }
        });
    },
    scroll: function(e) {
        if (this.data.ismore && e.detail.scrollTop < 10) {
            this.data.list;
            var t = this.data.page;
            ++t < this.data.page_count && (this.setData({
                page: t,
                loadinghide: !1,
                ismore: !1
            }), this.getList());
        }
    },
    getBrokerInfo: function() {
        var t = this, a = e.globalData.url_host;
        wx.request({
            url: a + "/wxim/getbrokerinfo",
            method: "POST",
            data: {
                brokerid: t.data.brokerid
            },
            success: function(e) {
                t.setData({
                    brokerInfo: e.data
                }), wx.setNavigationBarTitle({
                    title: e.data.bname
                }), console.log(e.data);
            }
        });
    },
    receive: function() {
        var t = this;
        wx.onSocketMessage(function(a) {
            var o = JSON.parse(a.data);
            if (console.log(o), void 0 === o.type) {
                var s = t.data.brokerInfo, i = t.data.list;
                switch (o.messageType) {
                  case 0:
                    var n = e.globalData.url_host;
                    wx.request({
                        url: n + "/wxim/facereplace",
                        method: "POST",
                        data: {
                            str: o.data
                        },
                        success: function(e) {
                            var a = {
                                message_id: o.id,
                                in_date: t.getTime(),
                                conversation_type: 2,
                                message_type: o.messageType,
                                img: s.brokerimg,
                                message_text_content: e.data
                            };
                            i.push(a), t.setData({
                                list: i
                            }), t.pageScrollToBottom();
                        }
                    });
                    break;

                  case 1:
                    var r = {
                        area: o.ext.HOUSE_INFO.area,
                        cityId: o.ext.HOUSE_INFO.cityId,
                        houseID: o.ext.HOUSE_INFO.houseID,
                        houseType: o.ext.HOUSE_INFO.houseType,
                        imgurl: o.ext.HOUSE_INFO.imgurl,
                        price: o.ext.HOUSE_INFO.price,
                        title: o.ext.HOUSE_INFO.title,
                        weburl: o.ext.HOUSE_INFO.weburl
                    }, d = {
                        in_date: t.getTime(),
                        conversation_type: 2,
                        message_type: o.messageType,
                        img: s.brokerimg,
                        payload: {
                            ext: {
                                HOUSE_INFO: r
                            }
                        }
                    };
                    console.log("list", d), i.push(d), t.setData({
                        list: i
                    }), t.pageScrollToBottom();
                    break;

                  case 4:
                    d = {
                        message_id: o.id,
                        in_date: t.getTime(),
                        conversation_type: 2,
                        message_type: o.messageType,
                        img: s.brokerimg,
                        message_text_content: o.data
                    };
                    i.push(d), t.setData({
                        list: i
                    }), t.pageScrollToBottom();
                }
            }
        });
    },
    getTime: function() {
        var e = new Date(), t = e.getHours();
        t < 10 && (t = "0" + t);
        var a = e.getMinutes();
        return a < 10 && (a = "0" + a), t + ":" + a;
    },
    faceReplace: function(t) {
        var a = e.globalData.url_host;
        wx.request({
            url: a + "/wxim/facereplace",
            method: "POST",
            data: {
                str: t
            },
            success: function(e) {
                return e.data;
            }
        });
    },
    toHouseDetail: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.housetype, a = e.currentTarget.dataset.id, o = e.currentTarget.dataset.cityid;
        1 == t && wx.navigateTo({
            url: "../sale_detail/sale_detail?houseId=" + a + "&cityId=" + o
        }), 2 == t && wx.navigateTo({
            url: "../zufang_detail/zufang_detail?houseId=" + a + "&cityId=" + o
        });
    },
    toAttention: function(e) {
        var t = this;
        wx.navigateTo({
            url: "../myfocus/myfocus?from_tip=1&bid=" + t.data.brokerid
        });
    },
    imgError: function(e) {
        console.log("3333333333333333333333");
        var t = {};
        t["list[" + e.target.dataset.index + "].img"] = "https://res.5i5j.com/cache/weixin/common/moHead.png", 
        console.log(t), this.setData(t), console.log(this.data.list);
    },
    toLogin: function() {
        wx.redirectTo({
            url: "../login/login"
        });
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            list: []
        }), this.getList(), this.receive();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});