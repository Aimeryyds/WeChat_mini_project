(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/detail/detail" ], {
    3220: function(e, t, o) {
        o.r(t);
        var i = o("7e42"), n = o.n(i);
        for (var a in i) "default" !== a && function(e) {
            o.d(t, e, function() {
                return i[e];
            });
        }(a);
        t.default = n.a;
    },
    "48a3": function(e, t, o) {},
    "4d34": function(e, t, o) {
        var i = o("48a3");
        o.n(i).a;
    },
    "6d79": function(e, t, o) {
        o.r(t);
        var i = o("ed01"), n = o("3220");
        for (var a in n) "default" !== a && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(a);
        o("4d34");
        var s = o("f0c5"), r = Object(s.a)(n.default, i.b, i.c, !1, null, "06d92ae0", null, !1, i.a, void 0);
        t.default = r.exports;
    },
    "7e42": function(e, t, o) {
        (function(e) {
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = i(o("edb7")), a = i(o("5f18")), s = i(o("ba34")), r = i(o("a720")), l = o("ef52"), c = getApp();
            c.sensors || (c.sensors = c.globalData.sensors);
            var u = {
                data: function() {
                    return {
                        swipePicList: [],
                        showSkeleton: !0,
                        response: null,
                        listsList: null,
                        currentIndex: 0,
                        menuTapCurrent: 0,
                        options: null,
                        userInfo: null,
                        city_id: "",
                        city_name: "",
                        cityTelNum: "",
                        is_collect: !1,
                        onlineToLogin: !1,
                        interestToLogin: !1,
                        toIndex: !1,
                        backApp: !1,
                        rentTypeList: [ "", "整租", "合租", "月租" ],
                        mapData: {
                            scale: 14,
                            latitude: "",
                            longitude: "",
                            markers: []
                        },
                        nearByRoom: [],
                        includePoints: null,
                        sublet: !1,
                        roomStatus: !1,
                        fromShare: !1,
                        sharePath: "",
                        isClickOnline: "",
                        communityData: "",
                        share_cityId: "",
                        verification: !1,
                        verificationNumber: "",
                        aroundList: [ {
                            name: "交通",
                            key: "地铁",
                            id: "1",
                            selected: !0
                        }, {
                            name: "商超",
                            id: "2",
                            key: "商场",
                            selected: !1
                        }, {
                            name: "金融",
                            id: "3",
                            key: "银行",
                            selected: !1
                        }, {
                            name: "餐饮",
                            id: "4",
                            key: "餐厅",
                            selected: !1
                        }, {
                            name: "医疗",
                            id: "5",
                            key: "医院",
                            selected: !1
                        } ],
                        clickId: "",
                        MPAdClickId: "",
                        appointmentTime: "",
                        roomInfo: []
                    };
                },
                components: {
                    skeletonDetail: function() {
                        o.e("components/skeleton-detail/skeleton-detaile").then(function() {
                            return resolve(o("0d0b"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    wPicker: function() {
                        Promise.all([ o.e("common/vendor"), o.e("components/w-picker/w-picker") ]).then(function() {
                            return resolve(o("66b2"));
                        }.bind(null, o)).catch(o.oe);
                    }
                },
                onReady: function() {
                    var e = this;
                    setTimeout(function() {
                        e.showSkeleton = !1;
                    }, 500);
                },
                onLoad: function(t) {
                    this.options = t, console.log(this.options.scene + "========"), this.userInfo = e.getStorageSync("userInfo"), 
                    !this.userInfo && (this.userInfo = {
                        user_id: e.getStorageSync("userId"),
                        mobile: e.getStorageSync("userMobile")
                    }), this.city_id = e.getStorageSync("cityStorageNum"), this.city_name = e.getStorageSync("cityStorageName"), 
                    this.cityTelNum = e.getStorageSync("cityTelNum"), this.userInfo.user_id && this.getCollectStatus(t), 
                    this.getClickId(), this.getMPAdClickId(), 1 == t.isClickOnline ? this.isClickOnline = 1 : t.back_to_detail ? this.back_to_detail = 1 : t.detail_openId ? this.detail_openId = 1 : e.setStorageSync("detail_key", t);
                    var o = e.getStorageSync("detail_key");
                    if (o.id) console.log("小程序内分享"), void 0 != t.share_cityId && (this.share_cityId = t.share_cityId), 
                    o.userId ? e.getStorageSync("userId") ? e.getStorageSync("userId") != o.userId ? (this.fromShare = !0, 
                    this.options = o, this.reportReferrals()) : this.options = o : e.redirectTo({
                        url: "../login/login?new_to_detail=1"
                    }) : this.options = o; else if (o.params) this.options = JSON.parse(r.default.Base64.decode(o.params)), 
                    this.options.userId && (e.getStorageSync("userId") ? e.getStorageSync("userId") != this.options.userId && (this.fromShare = !0, 
                    this.reportReferrals()) : e.redirectTo({
                        url: "../login/login?new_to_detail=1"
                    })), null == this.options.from_app && "" != this.options.from_app && (this.backApp = !0), 
                    "true" === this.options.subletStatus ? (this.sublet = !0, this.cityTelNum = this.options.subletMobile) : "false" === this.options.subletStatus && (this.sublet = !1, 
                    this.cityTelNum = e.getStorageSync("cityTelNum")); else if (void 0 != o.q) {
                        var i = decodeURIComponent(o.q);
                        if (-1 != i.indexOf("params")) this.options = i.split("?")[1], this.options = this.options.split("=")[1], 
                        this.options = JSON.parse(r.default.Base64.decode(this.options)), this.options.userId && (e.getStorageSync("userId") ? e.getStorageSync("userId") != this.options.userId && (this.fromShare = !0, 
                        this.reportReferrals()) : e.redirectTo({
                            url: "../login/login?new_to_detail=1"
                        })), null == this.options.from_app && "" != this.options.from_app && (this.backApp = !0), 
                        "true" === this.options.subletStatus ? (this.sublet = !0, this.cityTelNum = this.options.subletMobile) : "false" === this.options.subletStatus && (this.sublet = !1, 
                        this.cityTelNum = e.getStorageSync("cityTelNum")); else {
                            for (var n = {}, a = i.split("?")[1].split("&"), s = 0, l = a.length; s < l; s++) {
                                var c = a[s].split("=");
                                n[c[0]] = c[1];
                            }
                            this.options = n, "true" === n.subletStatus ? (this.sublet = !0, this.cityTelNum = n.subletMobile) : "false" === n.subletMobile && (this.sublet = !1, 
                            this.cityTelNum = e.getStorageSync("cityTelNum"));
                        }
                    }
                    this.getDetailData(), this.mapCtx = e.createMapContext("map"), this.aresMap = {
                        "地铁": [],
                        "商场": [],
                        "银行": [],
                        "餐厅": [],
                        "医院": []
                    };
                },
                onShow: function() {
                    var t = this;
                    1 == t.isClickOnline && t.handleConfirm(), (t.onlineToLogin || t.interestToLogin) && (this.userInfo = e.getStorageSync("userInfo"), 
                    !this.userInfo && (this.userInfo = {
                        user_id: e.getStorageSync("userId"),
                        mobile: e.getStorageSync("userMobile")
                    }));
                    var o = e.getStorageSync("detailReload");
                    t.interestToLogin && o && (e.setStorage({
                        key: "detailReload",
                        data: 0
                    }), t.interestToLogin = !1, t.interestEvt());
                },
                methods: {
                    closeShare: function() {
                        this.fromShare = !1;
                    },
                    verification_fun: function() {
                        var t = this;
                        "1366" == e.getStorageSync("cityStorageNum") && (0, s.default)(a.default.new_url + "/rooms/" + t.response.roomCode + "/verification", "GET", !1).then(function(e) {
                            0 == e.data.code && e.data.result.verificationNumber && (t.verification = !0, t.verificationNumber = e.data.result.verificationNumber);
                        });
                    },
                    reportReferrals: function() {
                        (0, s.default)(a.default.new_url + "/referrals", {
                            userId: this.options.userId,
                            mobile: this.options.mobile,
                            deviceId: this.options.deviceId,
                            unionId: this.options.unionId,
                            nickname: this.options.nickname,
                            roomId: this.options.id,
                            invitedUserId: e.getStorageSync("userId"),
                            invitedMobile: e.getStorageSync("userMobile"),
                            source: "1"
                        }, "POST", !1).then(function(e) {});
                    },
                    isShouldShare: function() {
                        var t = this;
                        (0, s.default)(a.default.new_url + "/referrals/enrollings", {
                            userId: e.getStorageSync("userId"),
                            mobile: e.getStorageSync("userMobile"),
                            source: "1"
                        }, "GET", !1).then(function(o) {
                            0 == o.data.code && (o.data.result ? t.sharePath = "pages/detail/detail?id=" + t.response.roomId + "&rent_type=" + t.response.rentType + "&isMonth=" + t.response.isMonth + "&from_app=&deviceId=&userId=" + e.getStorageSync("userId") + "&mobile=" + e.getStorageSync("userMobile") + "&unionId=" + e.getStorageSync("unionId") + "&nickname=" + e.getStorageSync("userNickname") + "&share_cityId=" + t.city_id + "&inside=1" : t.sharePath = "pages/detail/detail?id=" + t.response.roomId + "&rent_type=" + t.response.rentType + "&isMonth=" + t.response.isMonth + "&from_app=&share_cityId=" + t.city_id + "&inside=1");
                        });
                    },
                    getRecommendationsData: function(t, o, i) {
                        var n = this, r = this, l = "";
                        "" != r.share_cityId ? (l = r.share_cityId, r.share_cityId = "") : l = e.getStorageSync("cityStorageNum"), 
                        (0, s.default)(a.default.new_url + "/rooms/recommendations", {
                            cityId: l,
                            execlusions: i,
                            latitude: t,
                            longitude: o,
                            pageReferrer: 5
                        }, "GET", !1).then(function(e) {
                            e.data.result.content.length > 10 ? n.nearByRoom = e.data.result.content.slice(0, 10) : n.nearByRoom = e.data.result.content;
                        });
                    },
                    community_detail: function() {
                        e.navigateTo({
                            url: "../webviews/webviews?url=" + encodeURIComponent(this.communityData.communityUrl)
                        });
                    },
                    getDetailData: function() {
                        var t = this, o = this;
                        e.showLoading({
                            title: "加载中..."
                        }), void 0 == this.options.isMonth && (this.options.isMonth = !1);
                        var i = o.options.id || decodeURIComponent(o.options.scene).split("/")[0];
                        (0, s.default)(a.default.new_url + "/rooms/" + i, {
                            cityId: o.city_id,
                            isMonth: o.options.isMonth || !1,
                            rentType: o.options.rent_type || decodeURIComponent(o.options.scene).split("/")[1]
                        }, "GET", !1).then(function(o) {
                            0 == o.data.code ? (1 == o.data.result.hasVideo ? (t.swipePicList = o.data.result.detailPictures, 
                            t.swipePicList.unshift({
                                labelName: "视频",
                                picSuffix: "",
                                detailSuffix: null,
                                picsCount: 1,
                                pictures: [ '"' + o.data.result + '"' ]
                            }), t.doPics(t.swipePicList)) : t.doPics(o.data.result.detailPictures), delete o.data.result.detailPictures, 
                            delete o.data.result.detail_pic, t.response = o.data.result, t.collectRoomInfo(o.data.result), 
                            t.mapInit(), t.getRecommendationsData(o.data.result.communityLatitude, o.data.result.communityLongitude, o.data.result.roomId), 
                            t.response.subletStatus && (t.sublet = !0), t.isShouldShare(), t.verification_fun(), 
                            c.sensors.track("Xcx_detail_click", {
                                Xcx_share_formXCX: o.data.result.name
                            })) : e.showToast({
                                title: o.data.msg || "请求出错"
                            }), e.hideLoading();
                        });
                    },
                    collectRoomInfo: function(e) {
                        var t = "暂无数据", o = "", i = e.signDate.length;
                        if (i) for (var n = 0; n < i; n++) o += e.signDate[n] + "/";
                        var a = o.length - 1, s = o.charAt(a), r = e.expectCheckIn.checkInTitle, l = !!("转租" === r && e.expectCheckIn.dateType || "可预约" === r && e.expectCheckIn.dateType);
                        "/" === s && (o = o.substring(0, a)), this.roomInfo = [ {
                            label: "朝向",
                            val: e.facing || t,
                            isShow: !0
                        }, {
                            label: "户型",
                            val: "".concat(e.bedroomCount, "室").concat(e.parlor, "厅").concat(e.toiletCount, "卫") || !1,
                            isShow: !0
                        }, {
                            label: "建面",
                            val: e.roomArea || t,
                            isShow: !0
                        }, {
                            label: "楼层",
                            val: e.floorCount + "/" + e.floorTotalCount + "层" || !1,
                            isShow: !0
                        }, {
                            label: "供暖",
                            val: e.heating || t,
                            isShow: !0
                        }, {
                            label: "电梯",
                            val: e.hasLift ? "有电梯" : "无电梯",
                            isShow: !0
                        }, {
                            label: "年代",
                            val: "0" == e.builtYears ? t : e.builtYears || t,
                            isShow: !0
                        }, {
                            label: "绿化",
                            val: t,
                            isShow: !0
                        }, {
                            label: "状态",
                            val: e.expectCheckIn.checkInTitle || t,
                            isShow: !0
                        }, {
                            label: "签约",
                            val: o || t,
                            isShow: !0
                        }, {
                            label: "入住",
                            val: e.expectCheckIn.dateType || t,
                            isShow: l
                        } ];
                    },
                    getCollectStatus: function(e) {
                        var t = this;
                        (0, n.default)({
                            url: a.default.url_room + "/v1/collect/status",
                            noLoading: !0,
                            data: {
                                city_id: t.city_id,
                                user_id: t.userInfo.user_id,
                                room_id: e.id
                            },
                            signData: {
                                user_id: t.userInfo.user_id
                            }
                        }).then(function(e) {
                            t.is_collect = e.data.data.is_collect;
                        });
                    },
                    reLoad: function(t) {
                        this.options.id = t.currentTarget.dataset.public_id, e.pageScrollTo({
                            scrollTop: 0
                        }), this.getDetailData();
                    },
                    doPics: function(e) {
                        var t = this, o = [], i = [], n = 0;
                        e.forEach(function(e, a) {
                            var s = {};
                            s.label_name = e.labelName, s.picslength = e.pictures.length, s.currentGroup = n, 
                            n += e.pictures.length, e.pictures.forEach(function(i) {
                                var n = {};
                                switch (a) {
                                  case 0:
                                    n.type = 0, t.handleImgs(n, e, i);
                                    break;

                                  case 1:
                                    n.type = 1, t.handleImgs(n, e, i);
                                    break;

                                  case 2:
                                    n.type = 2, t.handleImgs(n, e, i);
                                    break;

                                  case 3:
                                    n.type = 3, t.handleImgs(n, e, i);
                                    break;

                                  case 4:
                                    n.type = 4, t.handleImgs(n, e, i);
                                    break;

                                  case 5:
                                    n.type = 5, t.handleImgs(n, e, i);
                                }
                                o.push(n);
                            }), i.push(s);
                        }), this.listsList = {
                            typeName: i,
                            pics: o
                        };
                    },
                    isImg: function(e) {
                        return null != e.match(/\.(jpeg|jpg|png|gif)$/);
                    },
                    handleImgs: function(e, t, o) {
                        this.isImg(o) ? e.url = o : e.url = o + t.picSuffix;
                    },
                    swiperEvt: function(e) {
                        this.currentIndex = e.detail.current;
                    },
                    currentGroup: function(e) {
                        var t = e.currentTarget.dataset.index, o = this.listsList.typeName[t].currentGroup;
                        this.currentIndex = o;
                    },
                    mapInit: function() {
                        var e = l.transform([ this.response.communityLongitude, this.response.communityLatitude ], l.BD09, l.GCJ02);
                        this.mapData.longitude = e[0], this.mapData.latitude = e[1], this.getMapMarkers("地铁"), 
                        this.mapIndex = 0;
                    },
                    getMapMarkers: function(e) {
                        var t = this, o = [];
                        if (t.aresMap[e].length) return t.mapData.markers = t.aresMap[e], t.mapCtx.includePoints({
                            points: t.aresMap[e],
                            padding: [ 20 ]
                        }), !1;
                        (0, n.default)({
                            url: "https://api.map.baidu.com/place/v2/search?ak=YY5lVvoVmMSw7AHA11VQvw57GVdA6fLp",
                            noLoading: !0,
                            data: {
                                page_size: 10,
                                page_num: 0,
                                coord_type: 2,
                                filter: "",
                                output: "json",
                                sn: "",
                                timestamp: "",
                                scope: 1,
                                radius: 5e3,
                                ret_coordtype: "gcj02ll",
                                query: e,
                                location: t.mapData.latitude + "," + t.mapData.longitude
                            }
                        }).then(function(i) {
                            var n = {
                                id: 0,
                                markerId: 0,
                                latitude: t.mapData.latitude,
                                longitude: t.mapData.longitude,
                                width: 50,
                                height: 50,
                                zIndex: 6,
                                markerLevel: 6,
                                iconPath: "https://public.danke.com.cn/public-20190808-Fi0MC4VarRZb_WYTMh63cDLtHKrO"
                            };
                            if (o.push(n), i.data.results && !i.data.results.length) return setTimeout(function() {
                                t.mapData.markers = o;
                            }, 10), !1;
                            for (var a = 0; a < i.data.results.length; a++) {
                                var s = {
                                    content: i.data.results[a].name,
                                    padding: 8,
                                    display: "ALWAYS",
                                    textAlign: "center",
                                    borderRadius: 15,
                                    fontSize: 14,
                                    color: "#ffffff",
                                    bgColor: "#FFC543",
                                    borderColor: "#FFC543",
                                    borderWidth: 1
                                }, r = {
                                    id: a + 1,
                                    markerId: a + 1,
                                    latitude: i.data.results[a].location.lat,
                                    longitude: i.data.results[a].location.lng,
                                    iconPath: "https://public.danke.com.cn/public-20190808-FnRZsnbOMEJxWaE8sh8jti_6g13Y",
                                    width: 1,
                                    height: 1,
                                    callout: s
                                };
                                o.push(r);
                            }
                            t.mapData.markers = o, t.aresMap[e] = o, t.mapCtx.includePoints({
                                points: o,
                                padding: [ 20 ]
                            });
                        });
                    },
                    getAround: function(e) {
                        var t = e.currentTarget.dataset.index;
                        this.getMapMarkers(this.aroundList[t].key), this.aroundList.forEach(function(e) {
                            e.selected = !1;
                        }), this.aroundList[t].selected = !0, this.mapIndex = t;
                    },
                    phonenum: function(t) {
                        var o = this;
                        1 === t ? c.sensors.track("Xcx_detail_click", {
                            Xcx_makephonecall_icon: "点击icon进行电话咨询"
                        }) : 2 === t ? (o.cityTelNum = this.response.subletMobile, c.sensors.track("Xcx_detail_click", {
                            Xcx_makephonecall_button_zuanzu: "点击按钮联系转租人"
                        })) : c.sensors.track("Xcx_detail_click", {
                            Xcx_makephonecall_button: "点击按钮进行电话咨询"
                        });
                        if (o.clickId && o.sendClickAdCount("http://www.pages/detail/detail", o.clickId, "RESERVATION"), 
                        o.MPAdClickId && c.sensors.track("Xcx_call_yuyue_Ad", {
                            MP_ad_clickId: "1"
                        }), e.makePhoneCall({
                            phoneNumber: o.cityTelNum,
                            success: function() {},
                            fail: function() {
                                o.userInfo.user_id && o.phoneFail();
                            }
                        }), e.getStorageSync("userMobile")) {
                            var i = "";
                            i = 1 == this.response.rentType ? "整租" : 2 == this.response.rentType ? "合租" : this.response.rentType, 
                            (0, s.default)(a.default.new_url + "/leads", {
                                pageReferrer: "1",
                                platform: "3",
                                userId: e.getStorageSync("userId"),
                                mobile: e.getStorageSync("userMobile"),
                                name: e.getStorageSync("userNickname"),
                                roomId: this.response.roomId,
                                price: this.response.price,
                                rentType: i,
                                city: e.getStorageSync("cityStorageName"),
                                blockId: this.response.blockId,
                                xiaoquId: this.response.communityId,
                                roomCode: this.response.roomCode
                            }, "POST", !1).then(function(e) {});
                        }
                    },
                    phoneFail: function() {
                        var e = this;
                        (0, n.default)({
                            url: a.default.url_room + "/v1/passenger/handler",
                            method: "POST",
                            data: {
                                city_id: e.city_id,
                                source_describe: "电话咨询未呼出",
                                uid: e.userInfo.user_id || "",
                                source: "微信小程序",
                                mobile: e.userInfo.mobile,
                                room_id: e.response.roomId
                            }
                        }).then(function(e) {});
                    },
                    payment: function(t) {
                        c.sensors.track("Xcx_detail_click", {
                            Xcx_payment: "付款方式"
                        }), e.navigateTo({
                            url: "../webviews/webviews?url=" + encodeURIComponent(t)
                        });
                    },
                    roomOk: function(t) {
                        var o = t.currentTarget.dataset;
                        "查看房源" == o.title && e.redirectTo({
                            url: "../detail/detail?id=" + o.public_id + "&rent_type=" + o.rent_type + "&isMonth=false&from_app="
                        });
                    },
                    menuTapChange: function(e) {
                        this.menuTapCurrent = e.currentTarget.dataset.index;
                    },
                    interestEvt: function() {
                        var t, o = this, i = o.is_collect;
                        if (!o.userInfo.user_id) return o.interestToLogin = !0, void o.toLogin();
                        var s = i ? "/v1/collect/cancelRoom" : "/v1/collect/putRoom";
                        t = {
                            city_id: o.city_id,
                            user_id: o.userInfo.user_id
                        }, i ? t.room_ids = o.response.roomId : t.room_id = o.response.roomId, (0, n.default)({
                            url: a.default.url_room + s,
                            method: "GET",
                            data: t,
                            signData: {
                                user_id: o.userInfo.user_id
                            }
                        }).then(function(t) {
                            "0000" === t.data.code ? (o.is_collect = !i, i ? (e.showToast({
                                title: "取消关注"
                            }), e.setStorage({
                                key: "interestReload",
                                data: "1"
                            })) : (e.setStorage({
                                key: "interestReload",
                                data: "1"
                            }), e.showToast({
                                title: "关注成功"
                            }), c.sensors.track("Xcx_detail_click", {
                                Xcx_attention: o.response.name
                            }))) : e.showToast({
                                title: t.data.msg || "请求出错"
                            });
                        });
                    },
                    online: function(e) {
                        var t = this;
                        t.$refs.limit.show();
                        t.clickId && t.sendClickAdCount("http://www.pages/detail/detail", t.clickId, "RESERVATION"), 
                        t.MPAdClickId && c.sensors.track("Xcx_online_yuyue_Ad", {
                            MP_ad_clickId: "1"
                        }), c.sensors.track("MP_Detail_Yuyue_Click", {
                            btn_name: "在线预约点击",
                            room_code: this.response.roomCode
                        });
                    },
                    getDefaultApTime: function() {
                        var e = new Date(), t = e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1, o = e.getDate() < 10 ? "0" + e.getDate() : e.getDate(), i = e.getHours() < 10 ? "0" + e.getHours() : e.getHours(), n = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes();
                        return "".concat(year, "-").concat(t, "-").concat(o, " ").concat(i, ":").concat(n);
                    },
                    onConfirm: function(t) {
                        var o = this, i = t.result || o.getDefaultApTime();
                        e.setStorage({
                            key: "appointmentTime",
                            data: i,
                            success: function() {
                                o.handleConfirm(i);
                            }
                        }), c.sensors.track("Xcx_detail_yuyue", {
                            Xcx_appointmentTime_confirm_click: "点击预约时间组件确认按钮"
                        });
                    },
                    handleConfirm: function(t) {
                        var o = this, i = this;
                        if (e.getStorageSync("userId")) {
                            e.showLoading({
                                title: "预约中",
                                mask: !0
                            });
                            var n = "";
                            n = 1 == this.response.rentType ? "整租" : 2 == this.response.rentType ? "合租" : this.response.rentType;
                            var r = t || e.getStorageSync("appointmentTime") || i.getDefaultApTime();
                            (0, s.default)(a.default.new_url + "/leads", {
                                pageReferrer: "1",
                                platform: "3",
                                userId: e.getStorageSync("userId"),
                                mobile: e.getStorageSync("userMobile"),
                                name: e.getStorageSync("userNickname"),
                                roomId: this.response.roomId,
                                price: this.response.price,
                                rentType: n,
                                city: e.getStorageSync("cityStorageName"),
                                blockId: this.response.blockId,
                                xiaoquId: this.response.communityId,
                                roomCode: this.response.roomCode,
                                appointmentTime: r
                            }, "POST", !1).then(function(t) {
                                i.$refs.limit.hide(), 0 == t.data.code ? (e.hideLoading(), e.showToast({
                                    title: "预约成功",
                                    duration: 3e3
                                }), c.sensors.track("MP_Detail_Yuyue_Success", {
                                    yuyue_result: "预约成功",
                                    room_code: o.response.roomCode
                                }), i.isClickOnline && (i.isClickOnline = "")) : i.bookFaild();
                            }).catch(function(e) {
                                i.bookFaild();
                            });
                        } else this.onlineToLogin = !0, c.sensors.track("MP_Detail_Yuyue_Click", {
                            btn_name: "未登陆用户预约",
                            room_code: this.response.roomCode
                        }), e.getStorageSync("userMobile") || e.navigateTo({
                            url: "../login/login?isClickOnline=1"
                        });
                    },
                    bookFaild: function() {
                        var t = this;
                        e.hideLoading(), e.showToast({
                            title: "预约失败",
                            duration: 3e3
                        }), t.isClickOnline && (t.isClickOnline = "");
                    },
                    onlineSign: function() {
                        var t = this, o = "../detail/detail?id=" + t.response.roomId + "&rent_type=" + t.response.rentType + "&from_app=";
                        t.userInfo.user_id ? t.checkSign() : (e.setStorageSync({
                            key: "callBackOnlineSign",
                            data: !0
                        }), e.navigateTo({
                            url: "../login/login?callback=" + o
                        }));
                    },
                    checkSign: function() {
                        var t = this;
                        (0, n.default)({
                            url: a.default.url + "/api/v4/online-sign/online-entry",
                            data: {
                                room_id: t.response.roomId
                            }
                        }).then(function(o) {
                            if ("0000" == o.code) switch (o.data.entry) {
                              case "customer":
                                e.navigateTo({
                                    url: "../onlineSignTenantInfo/onlineSignTenantInfo?type=human&room_id=" + t.response.roomId
                                });
                                break;

                              case "contract":
                                e.navigateTo({
                                    url: "../onlineSignTenancy/onlineSignTenancy?room_id=" + t.response.roomId
                                });
                                break;

                              case "eleContract":
                                e.navigateTo({
                                    url: "../onlineSignNotice/onlineSignNotice?code=" + o.data.contractCode
                                });
                            } else "9001" == o.code ? t.showModals(o.msg, "去逛逛", function() {
                                e.reLaunch({
                                    url: "../index/index"
                                });
                            }) : "9002" == o.code ? t.showModals(o.msg, "去查看", function() {
                                my.redirectTo({
                                    url: "../onlineSignMyContract/onlineSignMyContract"
                                });
                            }) : "9003" == o.code ? t.showModals(o.msg, "关闭") : "9004" == o.code ? t.showModal(o.msg, "继续", function() {
                                e.redirectTo({
                                    url: "../onlineSignTenantInfo/onlineSignTenantInfo?type=human&room_id=" + t.response.roomId + "&tag=1"
                                });
                            }) : e.showToast({
                                content: o.msg
                            });
                        }).catch(function(e) {
                            console.log(e);
                        });
                    },
                    showModals: function(t, o, i) {
                        e.showModal({
                            title: "提示",
                            content: t,
                            showCancel: !1,
                            confirmText: o,
                            confirmColor: "#31CAD6",
                            success: function(e) {
                                e.confirm && i();
                            }
                        });
                    },
                    getNowTime: function() {
                        var e = new Date(), t = e.getFullYear(), o = e.getMonth() + 1, i = e.getDate();
                        return o < 10 && (o = "0" + o), i < 10 && (i = "0" + i), t + "-" + o + "-" + i;
                    },
                    videoPlay: function(t) {
                        e.navigateTo({
                            url: "../detail-videoPlay/detail-videoPlay?video_url=" + this.response.videoUrl
                        });
                    },
                    onShareAppMessage: function(e) {
                        var t = this;
                        return e.from, e.from, {
                            title: t.response.name,
                            path: t.sharePath,
                            success: function(e) {
                                console.log(e);
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        };
                    },
                    launchAppError: function(e) {
                        console.log(e.detail.errMsg);
                    },
                    toLogin: function() {
                        var t = getCurrentPages(), o = t[t.length - 1].route;
                        e.navigateTo({
                            url: "../login/login?callback=" + o
                        });
                    },
                    toIndexs: function() {
                        e.reLaunch({
                            url: "../index/index"
                        });
                    },
                    toDatailMap: function(t) {
                        var o = {
                            latitude: this.mapData.latitude,
                            longitude: this.mapData.longitude,
                            mapIndex: this.mapIndex,
                            map_address: this.response.communityName
                        };
                        e.navigateTo({
                            url: "../detail-map/detail-map?obj=" + JSON.stringify(o)
                        });
                    },
                    getClickId: function() {
                        var t = this;
                        e.getStorage({
                            key: "clickId",
                            success: function(e) {
                                console.log(e.data), t.clickId = e.data;
                            }
                        });
                    },
                    getMPAdClickId: function() {
                        var t = this;
                        e.getStorage({
                            key: "MP_ad_clickId",
                            success: function(e) {
                                t.MPAdClickId = e.data;
                            }
                        });
                    },
                    sendClickAdCount: function(e, t, o) {
                        (0, s.default)(a.default.new_url + "/statistics/actions", {
                            url: e,
                            clickId: t,
                            actionType: o
                        }, "POST", !1).then(function(e) {
                            console.log(e);
                        });
                    }
                }
            };
            t.default = u;
        }).call(this, o("543d").default);
    },
    dd6c: function(e, t, o) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            o("e027"), t(o("66fd")), e(t(o("6d79")).default);
        }).call(this, o("543d").createPage);
    },
    ed01: function(e, t, o) {
        var i = {
            wPicker: function() {
                return Promise.all([ o.e("common/vendor"), o.e("components/w-picker/w-picker") ]).then(o.bind(null, "66b2"));
            }
        }, n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
        o.d(t, "b", function() {
            return n;
        }), o.d(t, "c", function() {
            return a;
        }), o.d(t, "a", function() {
            return i;
        });
    }
}, [ [ "dd6c", "common/runtime", "common/vendor" ] ] ]);