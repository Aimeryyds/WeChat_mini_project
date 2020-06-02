var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    "20a0": function(e, t, s) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            s("e027"), t(s("66fd")), e(t(s("5249")).default);
        }).call(this, s("543d").createPage);
    },
    5249: function(e, t, s) {
        s.r(t);
        var a = s("d582"), i = s("ffb6");
        for (var n in i) "default" !== n && function(e) {
            s.d(t, e, function() {
                return i[e];
            });
        }(n);
        s("d988");
        var r = s("f0c5"), o = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = o.exports;
    },
    6730: function(t, s, a) {
        (function(t) {
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var n = i(a("5f18")), r = i(a("733e")), o = i(a("ba34")), c = getApp();
            c.sensors || (c.sensors = c.globalData.sensors);
            var l = {
                data: function() {
                    return {
                        showSkeleton: !0,
                        cityName: "",
                        cityId: "",
                        cityIdList: "",
                        cityNameList: [],
                        has_banner: !1,
                        banner_list: "",
                        value_text: "你想住哪儿?",
                        textRent: "合/整租",
                        pos_text: "位置",
                        price_text: "价格",
                        colorRent: !1,
                        resultPosText: "",
                        resultPriceText: !1,
                        moreSelect: !1,
                        no_room: 0,
                        pageNum: 1,
                        loadDataType: "init",
                        all_data: {},
                        layerRent: [],
                        layerPos: [],
                        layerSubway: [],
                        layerArea: [],
                        layerPrice: [],
                        layerTags: [],
                        layerSort: null,
                        isLastPage: !1,
                        roomList0: [],
                        roomList1: [],
                        recommend_title: "",
                        layerBox: 0,
                        showLayer_1: !1,
                        showLayer_2: !1,
                        showLayer_3: !1,
                        showLayer_4: !1,
                        showLayer_5: !1,
                        scrollTop: 0,
                        old: {
                            scrollTop: 0
                        },
                        secondBox: 0,
                        threeBox: 0,
                        showPos: 0,
                        showSubwayList: "",
                        showTradeList: "",
                        textSubway: "",
                        textTrade: "",
                        textPos: "",
                        showStation: 0,
                        showTrade: 0,
                        colorSort: 0,
                        list_Nav_onoff: !0,
                        rent_btn: "",
                        hz_zrr: [],
                        zz_zrr: [],
                        rent_btn_1: !1,
                        rent_btn_2: !1,
                        rent_btn_3: !1,
                        rent_btn_4: !1,
                        rent_btn_zz1: !1,
                        rent_btn_zz2: !1,
                        rent_btn_zz3: !1,
                        rent_btn_zz4: !1,
                        rent_all_code: "",
                        minValue: 0,
                        maxValue: 24,
                        rangeValues: [ 0, 10 ],
                        slideWidth: 350,
                        slideHeight: 80,
                        slideBlockSize: 56,
                        slideMin: 0,
                        slideMax: 24,
                        search_text: "",
                        tehuiKeywords: "",
                        popup_name: "",
                        dataRent: {},
                        dataPos: {},
                        dataPrice: {},
                        dataMore: {},
                        dataNear: {},
                        latlng: "",
                        colorPrice: 0,
                        del_btn: !1,
                        inputValue: t.getStorageSync("userMobile"),
                        btn_onoff: !1,
                        search_result: !1,
                        search_result_data1: !1,
                        search_result_data2: !1,
                        pos_near: !0,
                        bindscroll: !1,
                        image_popup: "",
                        image_icon: "",
                        activity_onoff: !1,
                        resource_data_act: "",
                        resource_type_act: "",
                        pop_is_can_share: "",
                        pop_shareUrl: "",
                        bargain_onoff: !1,
                        bargain_active_onoff: !1,
                        overflowNew: "auto",
                        isClick_yuezu: !1,
                        filtersName: "",
                        hezuTitle: "",
                        hezuSubTitle: "",
                        zhengzuTitle: "",
                        zhengzuSubTitle: "",
                        hezuList: "",
                        zhengzuList: "",
                        hz_btn_1: "",
                        hz_btn_2: "",
                        hz_btn_3: "",
                        hz_btn_4: "",
                        zz_btn_1: "",
                        zz_btn_2: "",
                        zz_btn_3: "",
                        zz_btn_4: "",
                        all_hezu_zhengzu_code: "",
                        rentType: "",
                        hasNext: !1,
                        pageNumber: 1,
                        newPrice: "0-10000",
                        newNearBy: "",
                        newSubway: "",
                        newDistrict: "",
                        newFeatures: "",
                        newFacingsData: "",
                        newAreaLevelsData: "",
                        newStylesData: "",
                        newStatusData: "",
                        newRentTimeData: "",
                        newSort: "",
                        newRoomFeatures: [],
                        newFacings: [],
                        newAreaLevels: [],
                        newStyles: [],
                        newStatus: [],
                        newRentTime: [],
                        newRoomFeaturesTitle: [],
                        newFacingsTitle: [],
                        newAreaLevelsTitle: [],
                        newStylesTitle: [],
                        newStatusTitle: [],
                        newRentTimeTitle: [],
                        isFeatures: [],
                        isFacings: [],
                        isAreaLevels: [],
                        isStyles: [],
                        isStatus: [],
                        isRentTime: [],
                        new_isFeatures: [],
                        new_isFacings: [],
                        new_isAreaLevels: [],
                        new_isStyles: [],
                        new_isStatus: [],
                        new_isRentTime: [],
                        time1: !1,
                        timeData1: "",
                        timeData2: "",
                        rentDate: [],
                        posEvt_onoff: !0,
                        isPromotion: "0",
                        newSearchText: "",
                        gpsLongitude: "",
                        gpsLatitude: "",
                        platformType: "",
                        new_shareData: "",
                        shareData: "",
                        isFromWXAd: !1,
                        selectWXAdData: [ {
                            id: 0,
                            op: "通勤好房",
                            isSelected: !1
                        }, {
                            id: 1,
                            op: "居住好房",
                            isSelected: !1
                        }, {
                            id: 2,
                            op: "低价好房",
                            isSelected: !1
                        }, {
                            id: 3,
                            op: "品质好房",
                            isSelected: !1
                        } ],
                        showHouseSel: 0,
                        showLiveSel: 0,
                        tracficIsSelected: !1,
                        liveIsSelected: !1,
                        priceIsSelected: !1,
                        qualityIsSelected: !1,
                        localOptions: {},
                        isLogin: !1
                    };
                },
                components: {
                    RangeSlider: function() {
                        a.e("components/range-slider/range-slider").then(function() {
                            return resolve(a("2d41"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    skeletonIndex: function() {
                        a.e("components/skeleton-index/skeleton-index").then(function() {
                            return resolve(a("4317"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                onShow: function() {
                    var e = this;
                    e.inputValue = t.getStorageSync("userMobile"), t.getStorageSync("userMobile") ? e.isLogin = !0 : e.isLogin = !1, 
                    1 == c.globalData.index_leads && (e.leads(), c.globalData.index_leads = ""), c.sensors.track("Xcx_test_sensors", {
                        Xcx_test_sensors: "测试神策埋点"
                    }), wx.reportAnalytics("test_shence", {
                        Xcx_test_sensors: "测试神策埋点"
                    });
                },
                onReady: function() {
                    var e = this;
                    setTimeout(function() {
                        e.showSkeleton = !1;
                    }, 1500);
                },
                onLoad: function(e) {
                    var s = this;
                    s.localOptions = e, e.MP_ad_clickId && (c.sensors.track("Xcx_from_ad", {
                        Xcx_new_clickId: e.gdt_vid
                    }), t.setStorage({
                        key: "MP_ad_clickId",
                        data: 1,
                        success: function() {
                            console.log("MP_ad_clickId is setted success");
                        }
                    })), e.gdt_vid && t.setStorageSync("clickId", e.gdt_vid), t.setStorageSync("clickId", e.gdt_vid), 
                    c.sensors.track("Xcx_from_ad", {
                        Xcx_from_ad: e.gdt_vid
                    }), t.getStorageSync("bargainActive") && (s.bargain_onoff = !1, s.bargain_active_onoff = !0);
                    var a = s.formatDateTime(new Date().getTime());
                    t.login({
                        success: function(e) {
                            console.log(e), t.request({
                                url: n.default.new_url + "/passport/social-identity",
                                method: "GET",
                                data: {
                                    socialAuthCode: e.code,
                                    appPlatform: "WXMP",
                                    source: "WECHAT"
                                },
                                success: function(e) {
                                    console.log(e), s.openId = e.data.result.openId, s.unionId = e.data.result.unionId, 
                                    t.setStorage({
                                        key: "openId",
                                        data: e.data.result.openId
                                    }), t.setStorage({
                                        key: "unionId",
                                        data: e.data.result.unionId
                                    }), c.sensors.registerApp({
                                        cid: t.getStorageSync("cityStorageName"),
                                        platformType: "wx_xcx",
                                        version: "2.0",
                                        openId: e.data.result.openId,
                                        unionId: e.data.result.unionId,
                                        user_type: "游客"
                                    }), c.sensors.setProfile({
                                        cid: t.getStorageSync("cityStorageName"),
                                        openId: e.data.result.openId,
                                        unionId: e.data.result.unionId,
                                        visitTime: a,
                                        user_type: "游客"
                                    }), c.sensors.setOpenid(e.data.result.openId), c.sensors.init();
                                }
                            });
                        }
                    }), c.$vm.appLoad(function(a, i) {
                        s.cityIdList = c.globalData.cityNum, s.cityNameList = c.globalData.cityName, void 0 != e.search_text ? (s.search_text = decodeURIComponent(e.search_text), 
                        s.value_text = decodeURIComponent(e.search_text), s.del_btn = !0) : (s.search_text = "", 
                        s.value_text = "你想住哪儿?"), "" != t.getStorageSync("cityLongitude") && "" != t.getStorageSync("cityLatitude") ? s.pos_near = !0 : s.pos_near = !1, 
                        void 0 != e.shareData ? (s.new_shareData = JSON.parse(e.shareData), s.isFeatures = e.isFeatures.split(","), 
                        s.isFacings = e.isFacings.split(","), s.isAreaLevels = e.isAreaLevels.split(","), 
                        s.isStyles = e.isStyles.split(","), s.isStatus = e.isStatus.split(","), s.isRentTime = e.isRentTime.split(","), 
                        s.moreSelect = "false" !== e.moreSelect, s.posEvt_onoff = "false" !== e.posEvt_onoff, 
                        s.colorSort = e.colorSort, s.colorPrice = e.colorPrice, s.resultPriceText = "false" !== e.resultPriceText, 
                        s.textSubway = e.textSubway, s.textTrade = e.textTrade, s.showPos = e.showPos, s.showSubwayList = e.showSubwayList, 
                        s.showTradeList = e.showTradeList, s.resultPosText = e.resultPosText, s.rent_btn_1 = "false" !== e.rent_btn_1, 
                        s.rent_btn_2 = "false" !== e.rent_btn_2, s.rent_btn_3 = "false" !== e.rent_btn_3, 
                        s.rent_btn_4 = "false" !== e.rent_btn_4, s.rent_btn_zz1 = "false" !== e.rent_btn_zz1, 
                        s.rent_btn_zz2 = "false" !== e.rent_btn_zz2, s.rent_btn_zz3 = "false" !== e.rent_btn_zz3, 
                        s.rent_btn_zz4 = "false" !== e.rent_btn_zz4, s.colorRent = "false" !== e.colorRent, 
                        s.textRent = e.textRent, s.price_text = e.price_text, s.pos_text = e.pos_text, s.cityName = e.cityStorageName, 
                        s.cityId = e.cityStorageNum, t.setStorageSync("cityStorageName", e.cityName), t.setStorageSync("cityStorageNum", e.cityId), 
                        s.getRoomList(), s.banner_index(), s.newFilter(e.cityId), s.activity_config(), 2 == e.showPos ? (s.secondBox = 1, 
                        s.threeBox = 1, s.showStation = 1) : 3 == e.showPos && (s.secondBox = 1, s.threeBox = 1, 
                        s.showTrade = 1)) : (s.cityId = i, s.cityName = a, e.MP_ad_tqhf ? s.handelTrafficHouSel() : e.MP_ad_djhf ? s.handelPriceHouSel() : e.MP_ad_pzhf ? s.handelQualityHouSel() : e.MP_ad_monthRent ? s.handelMonthRentSel() : s.getRoomList(), 
                        s.banner_index(), s.newFilter(), s.activity_config()), s.isFromWXCir(e);
                    }), s.sortsObj = {
                        feature: [],
                        direction: [],
                        room_area: [],
                        style: [],
                        status: [],
                        rent_date: []
                    };
                },
                onReachBottom: function() {
                    this.scrollLoading();
                },
                methods: {
                    bindPickerChange: function(e) {
                        console.log("picker发送选择改变，携带值为", e.target.value), this.index = e.target.value;
                    },
                    formatDateTime: function(e) {
                        var t = new Date(e), s = t.getFullYear(), a = t.getMonth() + 1;
                        a = a < 10 ? "0" + a : a;
                        var i = t.getDate();
                        i = i < 10 ? "0" + i : i;
                        var n = t.getHours();
                        n = n < 10 ? "0" + n : n;
                        var r = t.getMinutes(), o = t.getSeconds();
                        return r = r < 10 ? "0" + r : r, o = o < 10 ? "0" + o : o, s + "-" + a + "-" + i + " " + n + ":" + r + ":" + o;
                    },
                    newFilter: function() {
                        var e = this;
                        (0, o.default)(n.default.new_url + "/rooms/criterias", {
                            cityId: e.cityId
                        }, "GET", !1).then(function(t) {
                            e.filtersName = t.data.result.filters, e.layerRent = t.data.result.filters[0], e.hezuTitle = e.layerRent.options[0].name, 
                            e.hezuSubTitle = e.layerRent.options[0].subTitle, e.zhengzuTitle = e.layerRent.options[1].name, 
                            e.zhengzuSubTitle = e.layerRent.options[1].subTitle, e.hz_btn_1 = e.layerRent.options[0].options[0], 
                            e.hz_btn_2 = e.layerRent.options[0].options[1], e.hz_btn_3 = e.layerRent.options[0].options[2], 
                            e.hz_btn_4 = e.layerRent.options[0].options[3], e.zz_btn_1 = e.layerRent.options[1].options[0], 
                            e.zz_btn_2 = e.layerRent.options[1].options[1], e.zz_btn_3 = e.layerRent.options[1].options[2], 
                            e.zz_btn_4 = e.layerRent.options[1].options[3], e.layerPos = t.data.result.filters[1].options[1].options, 
                            e.layerSubway = t.data.result.filters[1].options[3].options, e.layerArea = t.data.result.filters[1].options[2].options, 
                            e.layerPrice = t.data.result.filters[2].options, e.layerSort = t.data.result.sorts, 
                            e.layerTags = t.data.result.filters[3].options, e.newRoomFeaturesTitle = t.data.result.filters[3].options[0].name, 
                            e.newFacingsTitle = t.data.result.filters[3].options[1].name, e.newAreaLevelsTitle = t.data.result.filters[3].options[2].name, 
                            e.newStylesTitle = t.data.result.filters[3].options[3].name, e.newStatusTitle = t.data.result.filters[3].options[4].name, 
                            e.newRentTimeTitle = t.data.result.filters[3].options[5].name, e.newRoomFeatures = t.data.result.filters[3].options[0].options, 
                            e.newFacings = t.data.result.filters[3].options[1].options, e.newAreaLevels = t.data.result.filters[3].options[2].options, 
                            e.newStyles = t.data.result.filters[3].options[3].options, e.newStatus = t.data.result.filters[3].options[4].options, 
                            e.newRentTime = t.data.result.filters[3].options[5].options;
                            for (var s = 0; s < e.newRentTime.length; s++) e.rentDate.push(e.newRentTime[s].value);
                        });
                    },
                    stopScroll: function() {},
                    selectFeatures: function(e) {
                        -1 != this.isFeatures.indexOf(e.currentTarget.dataset.value) ? this.isFeatures.splice(this.isFeatures.indexOf(e.currentTarget.dataset.value), 1) : this.isFeatures.push(e.currentTarget.dataset.value), 
                        this.newFeatures = this.isFeatures.toString(), this.new_isFeatures = this.isFeatures.join(",");
                    },
                    selectFacings: function(e) {
                        -1 != this.isFacings.indexOf(e.currentTarget.dataset.value) ? this.isFacings.splice(this.isFacings.indexOf(e.currentTarget.dataset.value), 1) : this.isFacings.push(e.currentTarget.dataset.value), 
                        this.newFacingsData = this.isFacings.toString(), this.new_isFacings = this.isFacings.join(",");
                    },
                    selectAreaLevels: function(e) {
                        -1 != this.isAreaLevels.indexOf(e.currentTarget.dataset.value) ? this.isAreaLevels.splice(this.isAreaLevels.indexOf(e.currentTarget.dataset.value), 1) : this.isAreaLevels.push(e.currentTarget.dataset.value), 
                        this.newAreaLevelsData = this.isAreaLevels.toString(), this.new_isAreaLevels = this.isAreaLevels.join(",");
                    },
                    selectStyles: function(e) {
                        -1 != this.isStyles.indexOf(e.currentTarget.dataset.value) ? this.isStyles.splice(this.isStyles.indexOf(e.currentTarget.dataset.value), 1) : this.isStyles.push(e.currentTarget.dataset.value), 
                        this.newStylesData = this.isStyles.toString(), this.new_isStyles = this.isStyles.join(",");
                    },
                    selectStatus: function(e) {
                        -1 != this.isStatus.indexOf(e.currentTarget.dataset.value) ? this.isStatus.splice(this.isStatus.indexOf(e.currentTarget.dataset.value), 1) : this.isStatus.push(e.currentTarget.dataset.value), 
                        this.newStatusData = this.isStatus.toString(), this.new_isStatus = this.isStatus.join(",");
                    },
                    selectRentTime: function(e) {
                        var t = this;
                        t.time1 ? (t.time1 = !1, t.timeData2 = e.currentTarget.dataset.value, t.rentDate.indexOf(t.timeData1) < t.rentDate.indexOf(t.timeData2) ? (this.isRentTime = t.rentDate.slice(t.rentDate.indexOf(t.timeData1), t.rentDate.indexOf(t.timeData2) + 1), 
                        t.newRentTimeData = t.timeData1 + "," + t.timeData2, t.new_isRentTime = this.isRentTime.join(",")) : (this.isRentTime = t.rentDate.slice(t.rentDate.indexOf(t.timeData2), t.rentDate.indexOf(t.timeData1) + 1), 
                        t.newRentTimeData = t.timeData2 + "," + t.timeData1, t.new_isRentTime = this.isRentTime.join(","))) : (t.isRentTime = [], 
                        t.time1 = !0, t.timeData1 = e.currentTarget.dataset.value, t.isRentTime.push(e.currentTarget.dataset.value), 
                        t.newRentTimeData = e.currentTarget.dataset.value, t.new_isRentTime = this.isRentTime.join(","));
                    },
                    changeArea: function(e) {
                        var s = this, a = e.detail.value;
                        this.cityName = this.cityNameList[a], this.cityId = c.globalData.cityNum[a], console.log("toutiao123"), 
                        console.log(this.cityNameList), console.log(c.globalData.cityNum), t.setStorage({
                            key: "cityStorageName",
                            data: c.globalData.cityName[a]
                        }), t.setStorage({
                            key: "cityStorageNum",
                            data: c.globalData.cityNum[a]
                        }), t.setStorage({
                            key: "cityTelNum",
                            data: c.globalData.cityTelList[c.globalData.cityName[a]]
                        }), this.clearAllData(), this.clearRoomList(), c.sensors.track("Xcx_IndexClick", {
                            Xcx_changeArea: c.globalData.cityName[a]
                        }), c.$vm.appLoad(function(e, t) {
                            s.cityId = t, s.cityName = e, s.cityIdList = c.globalData.cityNum, s.cityNameList = c.globalData.cityName, 
                            s.newFilter(t), s.banner_index(), s.isFromWXCir(s.localOptions), s.loadData("init"), 
                            s.activity_config();
                        });
                    },
                    banner_index: function() {
                        var e = this;
                        (0, r.default)(n.default.url + "/web-api/wechat-applets/banner-list", {
                            city_id: e.cityId,
                            app_id: "wx024695259e1a68cb",
                            applet_type: 1
                        }, "GET", !1, {
                            app_id: "wx024695259e1a68cb",
                            city_id: e.cityId
                        }).then(function(t) {
                            t.data.success && (e.has_banner = !0, e.banner_list = t.data.data);
                        });
                    },
                    to_banner: function(e) {
                        console.log(e.currentTarget.dataset.name), "网站" == e.currentTarget.dataset.bannertype || "网站" == e.currentTarget.dataset.bannerType ? (t.navigateTo({
                            url: "../bannerPage/bannerPage?bannerURL=" + encodeURIComponent(e.currentTarget.dataset.address) + "&name=" + e.currentTarget.dataset.name
                        }), t.setStorageSync("url_parameter", e.currentTarget.dataset.address.split("?")[1]), 
                        t.setStorageSync("is_can_share", e.currentTarget.dataset.iscanshare), t.setStorageSync("shareUrl", e.currentTarget.dataset.shareurl)) : "小程序路径" != e.currentTarget.dataset.bannertype && "小程序路径" != e.currentTarget.dataset.bannerType || t.navigateTo({
                            url: e.currentTarget.dataset.address
                        }), c.sensors.track("Xcx_tobanner", {
                            Xcx_tobanner: "首页点击banner-" + e.currentTarget.dataset.name
                        });
                    },
                    to_banner1: function(e) {
                        t.navigateTo({
                            url: "../alipayPage/alipayPage"
                        });
                    },
                    getTehuiText: function() {
                        var e = this;
                        (0, r.default)(n.default.url_room + "/v1/room/teHui", {
                            app_id: "wx024695259e1a68cb",
                            city_id: e.cityId
                        }, "GET", !1, "").then(function(t) {
                            "0000" == t.data.code && (e.tehuiKeywords = t.data.data.searchText);
                        });
                    },
                    allListInfo: function(e) {
                        var t = this;
                        (0, r.default)(n.default.url_room + "/v1/room/condsList", {
                            app_id: "wx024695259e1a68cb",
                            city_id: t.cityId
                        }, "GET", !1, "").then(function(e) {
                            e.data;
                        });
                    },
                    getRoomList: function(e) {
                        var s = this;
                        console.log(s.new_shareData), "" != s.new_shareData && (console.log(123321), console.log(s.new_shareData), 
                        s.cityId = s.new_shareData.cityId, s.pageNumber = s.new_shareData.pageNumber, s.all_hezu_zhengzu_code = s.new_shareData.bedroomCount, 
                        s.rentType = s.new_shareData.rentType, s.newPrice = s.new_shareData.price, s.newNearBy = s.new_shareData.nearBy, 
                        s.newSubway = s.new_shareData.subway, s.newDistrict = s.new_shareData.district, 
                        s.newFeatures = s.new_shareData.roomFeatures, s.newFacingsData = s.new_shareData.facings, 
                        s.newAreaLevelsData = s.new_shareData.areaLevels, s.newStylesData = s.new_shareData.styles, 
                        s.newStatusData = s.new_shareData.status, s.newRentTimeData = s.new_shareData.rentTime, 
                        s.newSort = s.new_shareData.sort, s.isPromotion = s.new_shareData.isPromotion, s.search_text = s.new_shareData.searchText, 
                        s.gpsLongitude = s.new_shareData.gpsLongitude, s.gpsLatitude = s.new_shareData.gpsLatitude, 
                        s.platformType = s.new_shareData.platformType, s.new_shareData = "");
                        var a = {
                            cityId: s.cityId,
                            pageNumber: s.pageNumber,
                            pageReferrer: 3,
                            bedroomCount: s.all_hezu_zhengzu_code,
                            rentType: s.rentType,
                            price: s.newPrice,
                            nearBy: s.newNearBy,
                            subway: s.newSubway,
                            district: s.newDistrict,
                            roomFeatures: s.newFeatures,
                            facings: s.newFacingsData,
                            areaLevels: s.newAreaLevelsData,
                            styles: s.newStylesData,
                            status: s.newStatusData,
                            rentTime: s.newRentTimeData,
                            sort: s.newSort,
                            isPromotion: s.isPromotion,
                            searchText: s.search_text,
                            gpsLongitude: s.gpsLongitude,
                            gpsLatitude: s.gpsLatitude,
                            platformType: s.platformType
                        };
                        s.shareData = a, (0, o.default)(n.default.new_url + "/rooms", a, "GET", !0).then(function(e) {
                            if (null != e.data.result) {
                                var a = e.data.result.content;
                                e.data.result.content, s.hasNext = e.data.result.hasNext;
                                var i = [];
                                if (null != a) {
                                    s.no_room = 0;
                                    for (var n = 0; n < a.length; n++) i.push(a[n]);
                                    s.roomList0 = s.roomList0.concat(i), t.hideLoading();
                                } else null == a && (s.no_room = 1);
                            }
                        });
                    },
                    onShareAppMessage: function(e) {
                        return e.from, e.from, {
                            title: "分享给你我选中的房源列表",
                            path: "pages/index/index?shareData=" + JSON.stringify(this.shareData) + "&isFeatures=" + this.new_isFeatures + "&isFacings=" + this.new_isFacings + "&isAreaLevels=" + this.new_isAreaLevels + "&isStyles=" + this.new_isStyles + "&isStatus=" + this.new_isStatus + "&isRentTime=" + this.new_isRentTime + "&moreSelect=" + this.moreSelect + "&posEvt_onoff=" + this.posEvt_onoff + "&colorSort=" + this.colorSort + "&colorPrice=" + this.colorPrice + "&resultPriceText=" + this.resultPriceText + "&textSubway=" + this.textSubway + "&showPos=" + this.showPos + "&showSubwayList=" + this.showSubwayList + "&resultPosText=" + this.resultPosText + "&textTrade=" + this.textTrade + "&showTradeList=" + this.showTradeList + "&rent_btn_1=" + this.rent_btn_1 + "&rent_btn_2=" + this.rent_btn_2 + "&rent_btn_3=" + this.rent_btn_3 + "&rent_btn_4=" + this.rent_btn_4 + "&rent_btn_zz1=" + this.rent_btn_zz1 + "&rent_btn_zz2=" + this.rent_btn_zz2 + "&rent_btn_zz3=" + this.rent_btn_zz3 + "&rent_btn_zz4=" + this.rent_btn_zz4 + "&colorRent=" + this.colorRent + "&textRent=" + this.textRent + "&price_text=" + this.price_text + "&pos_text=" + this.pos_text + "&cityStorageName=" + this.cityName + "&cityStorageNum=" + this.cityId,
                            success: function(e) {
                                console.log(e);
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        };
                    },
                    scroll: function(e) {
                        this.old.scrollTop = e.detail.scrollTop;
                    },
                    goTop: function(e) {
                        this.scrollTop = this.old.scrollTop, this.$nextTick(function() {
                            this.scrollTop = 0;
                        });
                    },
                    closeLayer: function(e) {
                        this.layerBox = 0, this.list_Nav_onoff = !0, this.bindscroll = !1;
                    },
                    rentEvt_hzz: function(e) {
                        var t = this;
                        0 == e.currentTarget.dataset.nav ? (t.showLayer_1 = !0, t.showLayer_2 = !1, t.showLayer_3 = !1, 
                        t.showLayer_4 = !1, t.showLayer_5 = !1, t.layerBox = 1, t.goTop(), t.bindscroll = !0) : 1 == e.currentTarget.dataset.nav ? (t.showLayer_1 = !1, 
                        t.showLayer_2 = !0, t.showLayer_3 = !1, t.showLayer_4 = !1, t.showLayer_5 = !1, 
                        t.layerBox = 1, t.goTop(), t.bindscroll = !0) : 2 == e.currentTarget.dataset.nav ? (t.showLayer_1 = !1, 
                        t.showLayer_2 = !1, t.showLayer_3 = !0, t.showLayer_4 = !1, t.showLayer_5 = !1, 
                        t.layerBox = 1, t.goTop(), t.bindscroll = !0) : 3 == e.currentTarget.dataset.nav && (t.showLayer_1 = !1, 
                        t.showLayer_2 = !1, t.showLayer_3 = !1, t.showLayer_4 = !0, t.showLayer_5 = !1, 
                        t.layerBox = 1, t.goTop(), t.bindscroll = !0);
                    },
                    rentEvt_Pos: function() {
                        var e = this;
                        e.showLayer_1 = !1, e.showLayer_2 = !0, e.showLayer_3 = !1, e.showLayer_4 = !1, 
                        e.showLayer_5 = !1, e.layerBox = 1, e.goTop(), e.bindscroll = !0;
                    },
                    rentEvt_Pri: function() {
                        var e = this;
                        e.showLayer_1 = !1, e.showLayer_2 = !1, e.showLayer_3 = !0, e.showLayer_4 = !1, 
                        e.showLayer_5 = !1, e.layerBox = 1, e.goTop(), e.bindscroll = !0;
                    },
                    rentEvt_more: function() {
                        var e = this;
                        e.showLayer_1 = !1, e.showLayer_2 = !1, e.showLayer_3 = !1, e.showLayer_4 = !0, 
                        e.showLayer_5 = !1, e.layerBox = 1, e.goTop(), e.bindscroll = !0;
                    },
                    rentEvt_filter: function() {
                        var e = this;
                        e.showLayer_1 = !1, e.showLayer_2 = !1, e.showLayer_3 = !1, e.showLayer_4 = !1, 
                        e.showLayer_5 = !0, e.layerBox = 1, e.goTop(), e.bindscroll = !0;
                    },
                    posEvt: function(e) {
                        var t = e.currentTarget.dataset.index;
                        this.showPos = +t, this.secondBox = +t, this.showTrade = 0, this.showStation = 0, 
                        this.textSubway = "", this.textTrade = "", this.threeBox = 0, +t || (this.dataPos = {}, 
                        this.pos_text = "位置", this.resultPosText = "", this.textPos = "", this.pageNumber = 1, 
                        this.gpsLongitude = "", this.gpsLatitude = "", this.platformType = "", this.newSubway = "", 
                        this.newDistrict = "", this.newNearBy = "", this.delKeywords(), this.closeLayer(), 
                        this.clearRoomList(), c.sensors.track("Xcx_IndexFilter", {
                            Xcx_position_level_1: "不限"
                        })), 1 == t && (this.secondBox = 1, this.resultPosText = "", c.sensors.track("Xcx_IndexFilter", {
                            Xcx_position_level_1: "附近"
                        })), 2 == this.showPos ? c.sensors.track("Xcx_IndexFilter", {
                            Xcx_position_level_1_subway: "地铁"
                        }) : 3 == this.showPos && c.sensors.track("Xcx_IndexFilter", {
                            Xcx_position_level_1_area: "区域"
                        });
                    },
                    subwayEvt: function(e) {
                        var t = e.target.dataset;
                        this.showSubwayList = t.index, this.textSubway = t.name, this.showStation = 1, this.threeBox = 1, 
                        c.sensors.track("Xcx_IndexFilter", {
                            Xcx_position_level_2_line: t.name
                        });
                    },
                    areaEvt: function(e) {
                        var t = e.target.dataset;
                        this.showTradeList = t.index, this.textTrade = t.name, this.showTrade = 1, this.threeBox = 1, 
                        c.sensors.track("Xcx_IndexFilter", {
                            Xcx_position_level_2_district: t.name
                        });
                    },
                    selectRentType3: function(e) {
                        var t = this;
                        e.target.dataset.position && (t.search_text = ""), t.rent_btn_1 ? (t.rent_btn_1 = !1, 
                        t.rent_btn_2 = !1, t.rent_btn_3 = !1, t.rent_btn_4 = !1, t.hz_zrr = []) : (t.rent_btn_1 = !0, 
                        t.rent_btn_2 = !0, t.rent_btn_3 = !0, t.rent_btn_4 = !0, t.hz_zrr = [ "20", "22", "23", "24" ]), 
                        console.log(t.hz_zrr);
                    },
                    selectRentType4: function(e) {
                        var t = this, s = e.target.dataset;
                        s.position && (t.search_text = ""), t.rent_btn_2 ? (t.rent_btn_2 = !1, t.hz_zrr.splice(t.hz_zrr.indexOf("22"), 1), 
                        -1 != t.hz_zrr.indexOf("20") && t.hz_zrr.splice(t.hz_zrr.indexOf("20"), 1), -1 == t.hz_zrr.indexOf("22") && (t.rent_btn_1 = !1)) : (t.rent_btn_2 = !0, 
                        t.hz_zrr.push(s.value.toString()), -1 != t.hz_zrr.indexOf("23") && -1 != t.hz_zrr.indexOf("24") && (t.rent_btn_1 = !0, 
                        t.hz_zrr.push("20"))), console.log(t.hz_zrr);
                    },
                    selectRentType5: function(e) {
                        var t = this, s = e.target.dataset;
                        s.position && (t.search_text = ""), t.rent_btn_3 ? (t.rent_btn_3 = !1, t.hz_zrr.splice(t.hz_zrr.indexOf("23"), 1), 
                        -1 != t.hz_zrr.indexOf("20") && t.hz_zrr.splice(t.hz_zrr.indexOf("20"), 1), -1 == t.hz_zrr.indexOf("23") && (t.rent_btn_1 = !1)) : (t.rent_btn_3 = !0, 
                        t.hz_zrr.push(s.value.toString()), -1 != t.hz_zrr.indexOf("22") && -1 != t.hz_zrr.indexOf("24") && (t.rent_btn_1 = !0, 
                        t.hz_zrr.push("20"))), console.log(t.hz_zrr);
                    },
                    selectRentType6: function(e) {
                        var t = this, s = e.target.dataset;
                        s.position && (t.search_text = ""), t.rent_btn_4 ? (t.rent_btn_4 = !1, t.hz_zrr.splice(t.hz_zrr.indexOf("24"), 1), 
                        -1 != t.hz_zrr.indexOf("20") && t.hz_zrr.splice(t.hz_zrr.indexOf("20"), 1), -1 == t.hz_zrr.indexOf("24") && (t.rent_btn_1 = !1)) : (t.rent_btn_4 = !0, 
                        t.hz_zrr.push(s.value.toString()), -1 != t.hz_zrr.indexOf("22") && -1 != t.hz_zrr.indexOf("23") && (t.rent_btn_1 = !0, 
                        t.hz_zrr.push("20"))), console.log(t.hz_zrr);
                    },
                    selectRentTypeZz1: function(e) {
                        var t = this;
                        e.target.dataset.position && (t.search_text = ""), t.rent_btn_zz1 ? (t.rent_btn_zz1 = !1, 
                        t.rent_btn_zz2 = !1, t.rent_btn_zz3 = !1, t.rent_btn_zz4 = !1, t.zz_zrr = []) : (t.rent_btn_zz1 = !0, 
                        t.rent_btn_zz2 = !0, t.rent_btn_zz3 = !0, t.rent_btn_zz4 = !0, t.zz_zrr = [ "10", "11", "12", "13" ]), 
                        console.log(t.zz_zrr);
                    },
                    selectRentTypeZz2: function(e) {
                        var t = this, s = e.target.dataset;
                        s.position && (t.search_text = ""), t.rent_btn_zz2 ? (t.rent_btn_zz2 = !1, t.zz_zrr.splice(t.zz_zrr.indexOf("11"), 1), 
                        -1 != t.zz_zrr.indexOf("10") && t.zz_zrr.splice(t.zz_zrr.indexOf("10"), 1), -1 == t.zz_zrr.indexOf("11") && (t.rent_btn_zz1 = !1)) : (t.rent_btn_zz2 = !0, 
                        t.zz_zrr.push(s.value.toString()), -1 != t.zz_zrr.indexOf("12") && -1 != t.zz_zrr.indexOf("13") && (t.rent_btn_zz1 = !0, 
                        t.zz_zrr.push("10"))), console.log(t.zz_zrr);
                    },
                    selectRentTypeZz3: function(e) {
                        var t = this, s = e.target.dataset;
                        s.position && (t.search_text = ""), t.rent_btn_zz3 ? (t.rent_btn_zz3 = !1, t.zz_zrr.splice(t.zz_zrr.indexOf("12"), 1), 
                        -1 != t.zz_zrr.indexOf("10") && t.zz_zrr.splice(t.zz_zrr.indexOf("10"), 1), -1 == t.zz_zrr.indexOf("12") && (t.rent_btn_zz1 = !1)) : (t.rent_btn_zz3 = !0, 
                        t.zz_zrr.push(s.value.toString()), -1 != t.zz_zrr.indexOf("11") && -1 != t.zz_zrr.indexOf("13") && (t.rent_btn_zz1 = !0, 
                        t.zz_zrr.push("10"))), console.log(t.zz_zrr);
                    },
                    selectRentTypeZz4: function(e) {
                        var t = this, s = e.target.dataset;
                        s.position && (t.search_text = ""), t.rent_btn_zz4 ? (t.rent_btn_zz4 = !1, t.zz_zrr.splice(t.zz_zrr.indexOf("13"), 1), 
                        -1 != t.zz_zrr.indexOf("10") && t.zz_zrr.splice(t.zz_zrr.indexOf("10"), 1), -1 == t.zz_zrr.indexOf("13") && (t.rent_btn_zz1 = !1)) : (t.rent_btn_zz4 = !0, 
                        t.zz_zrr.push(s.value.toString()), -1 != t.zz_zrr.indexOf("12") && -1 != t.zz_zrr.indexOf("11") && (t.rent_btn_zz1 = !0, 
                        t.zz_zrr.push("10"))), console.log(t.zz_zrr);
                    },
                    selectMore: function(e) {
                        var t = this, s = e.target.dataset, a = this.sortsObj[s.type].indexOf(s.code);
                        a > -1 ? (this.layerTags[s.index1].data[s.index2].selected = !1, this.sortsObj[s.type].splice(a, 1)) : (this.sortsObj[s.type].push(s.code), 
                        this.layerTags[s.index1].data[s.index2].selected = !0), console.log(this.sortsObj);
                        var i = this.layerTags;
                        this.layerTags = null, this.layerTags = i, console.log(t.layerTags);
                    },
                    default_stop: function() {
                        console.log("取消冒泡作用");
                    },
                    showLoading: function() {
                        t.showLoading({
                            title: "加载中"
                        });
                    },
                    scrollLoading: function() {
                        if (!this.no_room) if (this.hasNext) {
                            var e = this.pageNumber + 1;
                            this.showLoading(), this.pageNumber = e, this.loadData();
                        } else t.showToast({
                            title: "没有更多房源了~",
                            icon: "none",
                            duration: 1200
                        });
                    },
                    mergeData: function(e) {
                        this.showLoading(), e && (this.pageNum = 1, "init" != e && (this.loadDataType = null));
                    },
                    loadData: function(e) {
                        this.showLoading(), this.getRoomList(this.mergeData(e));
                    },
                    clearRoomList: function() {
                        this.roomList0 = [], this.roomList1 = [], this.value_text = "你想住哪儿？";
                    },
                    toAllUserSell: function() {
                        t.navigateTo({
                            url: "../allUserSell/allUserSell"
                        });
                    },
                    tehui: function() {
                        this.isClick_yuezu && (this.dataMore = {}, this.sortsObj = {
                            feature: [],
                            status: [],
                            room_area: [],
                            style: [],
                            direction: [],
                            rent_date: []
                        }, this.isClick_yuezu = !1, this.moreSelect = !1), this.clearNewData(), this.colorRent = !1, 
                        this.textRent = "合/整租", this.isPromotion = "1", this.isFeatures = [], this.isFacings = [], 
                        this.isAreaLevels = [], this.isStyles = [], this.isStatus = [], this.isRentTime = [], 
                        this.gpsLongitude = "", this.gpsLatitude = "", this.moreSelect = !1, this.platformType = "", 
                        this.dataPos = {}, this.pos_text = "位置", this.resultPosText = "", this.textPos = "", 
                        this.gpsLongitude = "", this.gpsLatitude = "", this.platformType = "", this.colorPrice = 0, 
                        this.price_text = "价格", this.resultPriceText = !1, this.newPrice = "0-10000", this.delKeywords(), 
                        this.closeLayer(), this.clearRoomList();
                    },
                    selectRentType1: function(e) {
                        var t = this, s = e.currentTarget.dataset;
                        s.position && (t.search_text = ""), this.isClick_yuezu && (this.dataMore = {}, this.sortsObj = {
                            feature: [],
                            status: [],
                            room_area: [],
                            style: [],
                            direction: [],
                            rent_date: []
                        }, this.isClick_yuezu = !1, this.moreSelect = !1), this.clearNewData(), this.isFeatures = [], 
                        "合租" == s.text ? (t.colorRent = !0, t.textRent = "合租", t.all_hezu_zhengzu_code = "20,22,23,24", 
                        t.rentType = "2") : "整租" == s.text && (t.colorRent = !0, t.textRent = "整租", t.all_hezu_zhengzu_code = "10,11,12,13", 
                        t.rentType = "1"), this.delKeywords(), this.closeLayer(), this.clearRoomList(), 
                        c.sensors.track("Xcx_IndexClick", {
                            Xcx_index_rentType: s.text
                        });
                    },
                    btn_qd: function() {
                        var e = this;
                        e.pageNumber = 1, e.all_hezu_zhengzu_code = e.hz_zrr.concat(e.zz_zrr).toString(), 
                        0 != e.hz_zrr.length && 0 == e.zz_zrr.length ? (e.rentType = "2", e.textRent = "合租", 
                        e.colorRent = !0) : 0 == e.hz_zrr.length && 0 != e.zz_zrr.length ? (e.rentType = "1", 
                        e.textRent = "整租", e.colorRent = !0) : 0 != e.hz_zrr.length && 0 != e.zz_zrr.length ? (e.rentType = "1,2", 
                        e.textRent = "合/整租", e.colorRent = !0) : (e.textRent = "合/整租", e.colorRent = !1), 
                        this.delKeywords(), this.closeLayer(), this.clearRoomList();
                    },
                    btn_cz: function() {
                        this.rent_btn_1 = !1, this.rent_btn_2 = !1, this.rent_btn_3 = !1, this.rent_btn_4 = !1, 
                        this.hz_zrr = [], this.rent_btn_zz1 = !1, this.rent_btn_zz2 = !1, this.rent_btn_zz3 = !1, 
                        this.rent_btn_zz4 = !1, this.zz_zrr = [], this.colorRent = !1, this.all_hezu_zhengzu_code = "", 
                        this.rentType = "";
                    },
                    listNav: function() {
                        this.list_Nav_onoff = !1;
                    },
                    selectNear: function(e) {
                        var t = e.currentTarget.dataset, s = this;
                        s.pos_text = t.title, s.textPos = t.code, s.newNearBy = t.code, s.resultPosText = t.code, 
                        s.pageNumber = 1, s.newSubway = "", s.newDistrict = "", s.gpsLongitude = c.globalData.longitude, 
                        s.gpsLatitude = c.globalData.latitude, s.platformType = 3, s.dataPos = {
                            is_near_by: "1",
                            nearby: +t.code,
                            latlng: c.globalData.longitude + "," + c.globalData.latitude,
                            isnewformat: "1"
                        }, this.delKeywords(), this.closeLayer(), this.clearRoomList();
                    },
                    selectStation: function(e) {
                        var t = e.currentTarget.dataset;
                        this.pos_text = t.station, this.resultPosText = t.index, this.dataPos = {
                            position: "l" + this.textSubway + ("不限" == t.station ? "" : "-s" + t.station)
                        }, this.pageNumber = 1, this.newNearBy = "", this.newDistrict = "", this.search_text = "", 
                        this.newSubway = this.textSubway + "." + t.station, this.delKeywords(), this.closeLayer(), 
                        this.clearRoomList(), c.sensors.track("Xcx_IndexFilter", {
                            Xcx_position_level_3_station: t.station
                        });
                    },
                    selectTrade: function(e) {
                        var t = e.currentTarget.dataset;
                        this.pos_text = t.name, this.resultPosText = t.index, this.dataPos = {
                            position: "d" + this.textTrade + ("不限" == t.name ? "" : "-b" + t.name)
                        }, this.pageNumber = 1, this.search_text = "", this.newSubway = "", this.newNearBy = "", 
                        this.newDistrict = this.textTrade + "." + t.name, this.delKeywords(), this.closeLayer(), 
                        this.clearRoomList(), c.sensors.track("Xcx_IndexFilter", {
                            Xcx_position_level_3_business_district: t.name
                        });
                    },
                    selectPrice: function(e) {
                        console.log("shabi");
                        var t = e.currentTarget.dataset;
                        this.colorPrice = t.index, this.price_text = "" == t.code ? "价格" : t.title, this.pageNumber = 1, 
                        "1000-2000" == t.code || "0-1000" == t.code ? this.priceIsSelected = !0 : this.priceIsSelected = !1, 
                        0 == t.index ? this.resultPriceText = !1 : this.resultPriceText = !0, this.newPrice = t.code, 
                        this.delKeywords(), this.closeLayer(), this.clearRoomList(), c.sensors.track("Xcx_IndexFilter", {
                            Xcx_price: t.title
                        });
                    },
                    month_yz: function() {
                        this.clearNewData(), this.newFeatures = "8", this.moreSelect = !0, this.isFeatures = [ "8" ], 
                        this.textRent = "合/整租", this.colorRent = !1, this.dataRent = {}, this.isClick_yuezu = !0, 
                        this.delKeywords(), this.closeLayer(), this.clearRoomList(), c.sensors.track("Xcx_IndexClick", {
                            Xcx_index_rentType: "月租"
                        });
                    },
                    selectCustomMore: function() {
                        var e = this;
                        this.moreSelect = !0, 0 == e.isFeatures.length && 0 == e.isFacings.length && 0 == e.isAreaLevels.length && 0 == e.isStyles.length && 0 == e.isStatus.length && 0 == e.isRentTime.length && (this.moreSelect = !1), 
                        e.pageNumber = 1;
                        var t = {
                            feature: e.newFeatures,
                            status: e.newStatusData,
                            room_area: e.newAreaLevelsData,
                            style: e.newStylesData,
                            direction: e.newFacingsData,
                            rent_date: e.newRentTimeData
                        };
                        "1" === e.cityId || "178" === e.cityId || "540" === e.cityId || "1781" === e.cityId ? 1 == this.isFeatures.length && "4" == this.isFeatures[0] ? this.qualityIsSelected = !0 : this.qualityIsSelected = !1 : 1 == this.isFeatures.length && "2" == this.isFeatures[0] ? this.qualityIsSelected = !0 : this.qualityIsSelected = !1, 
                        this.delKeywords(), e.closeLayer(), e.clearRoomList(), c.sensors.track("Xcx_Indexfilter_more", t);
                    },
                    resetCustomMore: function() {
                        var e = this;
                        e.newFeatures = "", e.newFacingsData = "", e.newAreaLevelsData = "", e.newStylesData = "", 
                        e.newStatusData = "", e.newRentTimeData = "", e.isFeatures = [], e.isFacings = [], 
                        e.isAreaLevels = [], e.isStyles = [], e.isStatus = [], e.isRentTime = [];
                        var t = this.layerTags;
                        this.layerTags = null, this.layerTags = t;
                    },
                    sortEvt: function(e) {
                        var t = e.currentTarget.dataset.code;
                        this.colorSort = t, null != t ? (this.newSort = t, this.posEvt_onoff = !1) : (this.newSort = "", 
                        this.posEvt_onoff = !0), this.delKeywords(), this.closeLayer(), this.clearRoomList(), 
                        c.sensors.track("Xcx_IndexFilter", {
                            Xcx_filter_sort: t
                        });
                    },
                    orderRoom: function() {
                        var e = this;
                        c.sensors.track("Xcx_IndexTagbar", {
                            Xcx_order_room: "Xcx首页-房源定制"
                        }), e.bannerURL = "https://www.danke.com/pangu-activity/marketing/custom-house-resource?platform=xcx&city_id=" + e.cityId, 
                        t.navigateTo({
                            url: "../webviews/webviews?url=" + encodeURIComponent(e.bannerURL)
                        });
                    },
                    inputclick: function() {
                        c.sensors.track("Xcx_IndexClick", {
                            Xcx_toSearchPage: "点击搜索框"
                        }), t.navigateTo({
                            url: "../search/search"
                        });
                    },
                    delKeywords: function() {
                        this.search_text = "", this.del_btn = !1, this.loadData(), this.closeLayer(), this.clearRoomList();
                    },
                    bindKeyInput: function(e) {
                        this.inputValue = e.detail.value;
                    },
                    click_btn_yuyue: function() {
                        var e = this;
                        t.getStorageSync("userMobile") ? e.leads() : t.navigateTo({
                            url: "../login/login?index_leads=1"
                        });
                    },
                    click_btn: function() {
                        var e = this;
                        e.btn_onoff = !0, e.btn_onoff && (t.getStorageSync("userMobile") ? e.leads() : t.navigateTo({
                            url: "../login/login?index_leads=1"
                        })), c.sensors.track("Xcx_toActive", {
                            Xcx_noRoom_MakeCall: "搜索无结果-手机号码提交（用户填写)——" + e.inputValue
                        });
                    },
                    leads: function() {
                        var e = this;
                        (0, o.default)(n.default.new_url + "/leads", {
                            pageReferrer: "2",
                            platform: "3",
                            userId: t.getStorageSync("userId"),
                            mobile: e.inputValue,
                            name: t.getStorageSync("userNickname"),
                            city: t.getStorageSync("cityStorageName")
                        }, "POST", !1).then(function(s) {
                            console.log(s), 0 == s.data.code && t.showToast({
                                title: "提交成功",
                                icon: "none",
                                duration: 3e3
                            }), e.btn_onoff = !1;
                        });
                    },
                    phoneCall: function() {
                        t.makePhoneCall({
                            phoneNumber: t.getStorageSync("cityTelNum"),
                            success: function() {
                                console.log("拨打电话成功！");
                            },
                            fail: function() {
                                console.log("拨打电话失败！");
                            }
                        }), c.sensors.track("Xcx_toActive", {
                            Xcx_noRoom_PhoneCall: "搜索无结果-拨打电话（400电话）"
                        });
                    },
                    activity_config: function() {
                        var e = this;
                        (0, r.default)(n.default.url + "/web-api/wechat-applets/popup", {
                            city_id: e.cityId,
                            app_id: "wx024695259e1a68cb",
                            applet_type: 1
                        }, "GET", !1, {
                            app_id: "wx024695259e1a68cb",
                            city_id: e.cityId
                        }).then(function(s) {
                            s.data.success ? (e.activity_onoff = !0, e.image_icon = s.data.data.image_icon, 
                            e.image_popup = s.data.data.image_popup, e.popup_name = s.data.data.name, e.resource_data_act = s.data.data.resource_data, 
                            e.resource_type_act = s.data.data.resource_type, e.pop_is_can_share = s.data.data.is_can_share, 
                            e.pop_shareUrl = s.data.data.shareUrl, t.getStorageSync("bargainActive") ? (e.bargain_onoff = !1, 
                            e.bargain_active_onoff = !0) : (e.bargain_onoff = !0, e.bargain_active_onoff = !1)) : (e.bargain_onoff = !1, 
                            e.bargain_active_onoff = !1);
                        });
                    },
                    toBargain: function(e) {
                        "网站" == e.currentTarget.dataset.typeact ? (t.navigateTo({
                            url: "../bannerPage/bannerPage?bannerURL=" + encodeURIComponent(e.currentTarget.dataset.addresact)
                        }), t.setStorageSync("url_parameter", e.currentTarget.dataset.addresact.split("?")[1]), 
                        t.setStorageSync("is_can_share", e.currentTarget.dataset.iscanshare), t.setStorageSync("shareUrl", e.currentTarget.dataset.shareurl)) : "小程序路径" == e.currentTarget.dataset.typeact && t.navigateTo({
                            url: e.currentTarget.dataset.addresact
                        }), this.bargain_onoff && c.sensors.track("Xcx_toActive", {
                            Xcx_indexClick: "首页点击首页弹窗大图-" + e.currentTarget.dataset.name
                        }), this.bargain_active_onoff && c.sensors.track("Xcx_toActive", {
                            Xcx_indexClick: "首页点击首页弹窗小图-" + e.currentTarget.dataset.name
                        }), t.setStorage({
                            key: "bargainActive",
                            data: !0
                        });
                    },
                    close_bargain: function() {
                        this.bargain_onoff = !1, this.bargain_active_onoff = !0;
                    },
                    close_bargain_active: function() {
                        this.bargain_active_onoff = !1;
                    },
                    toMap: function() {
                        t.navigateTo({
                            url: "../houseOnMap/houseOnMap"
                        }), c.sensors.track("Xcx_IndexClick", {
                            Xcx_map_find_room: "Xcx地图找房"
                        });
                    },
                    clearNewData: function() {
                        this.all_hezu_zhengzu_code = "", this.rentType = "", this.newPrice = "0-10000", 
                        this.newNearBy = "", this.newSubway = "", this.newDistrict = "", this.newFeatures = "", 
                        this.newFacingsData = "", this.newAreaLevelsData = "", this.newStylesData = "", 
                        this.newStatusData = "", this.newRentTimeData = "", this.isPromotion = "0", this.rent_btn_1 = !1, 
                        this.rent_btn_2 = !1, this.rent_btn_3 = !1, this.rent_btn_4 = !1, this.hz_zrr = [], 
                        this.rent_btn_zz1 = !1, this.rent_btn_zz2 = !1, this.rent_btn_zz3 = !1, this.rent_btn_zz4 = !1, 
                        this.zz_zrr = [], this.colorRent = !1;
                    },
                    clearAllData: function() {
                        this.cityName = "", this.cityId = "", this.cityIdList = "", this.cityNameList = [], 
                        this.has_banner = !1, this.banner_list = "", this.value_text = "你想住哪儿?", this.textRent = "合/整租", 
                        this.pos_text = "位置", this.price_text = "价格", this.colorRent = !1, this.resultPosText = !1, 
                        this.resultPriceText = !1, this.moreSelect = !1, this.no_room = 0, this.pageNum = 1, 
                        this.loadDataType = "init", this.all_data = {}, this.layerRent = [], this.layerPos = [], 
                        this.layerSubway = [], this.layerArea = [], this.layerPrice = [], this.layerTags = [], 
                        this.layerSort = null, this.isLastPage = !1, this.roomList0 = [], this.roomList1 = [], 
                        this.recommend_title = "", this.layerBox = 0, this.showLayer_1 = !1, this.showLayer_2 = !1, 
                        this.showLayer_3 = !1, this.showLayer_4 = !1, this.showLayer_5 = !1, this.scrollTop = 0, 
                        this.old = {
                            scrollTop: 0
                        }, this.secondBox = 0, this.threeBox = 0, this.showPos = 0, this.showSubwayList = "", 
                        this.showTradeList = "", this.textSubway = "", this.textTrade = "", this.textPos = "", 
                        this.showStation = 0, this.showTrade = 0, this.colorSort = 0, this.list_Nav_onoff = !0, 
                        this.rent_btn = "", this.hz_zrr = [], this.zz_zrr = [], this.rent_btn_1 = !1, this.rent_btn_2 = !1, 
                        this.rent_btn_3 = !1, this.rent_btn_4 = !1, this.rent_btn_zz1 = !1, this.rent_btn_zz2 = !1, 
                        this.rent_btn_zz3 = !1, this.rent_btn_zz4 = !1, this.rent_all_code = "", this.minValue = 0, 
                        this.maxValue = 24, this.rangeValues = [ 0, 10 ], this.slideWidth = 350, this.slideHeight = 80, 
                        this.slideBlockSize = 56, this.slideMin = 0, this.slideMax = 24, this.search_text = "", 
                        this.tehuiKeywords = "", this.dataRent = {}, this.dataPos = {}, this.dataPrice = {}, 
                        this.dataMore = {}, this.dataNear = {}, this.latlng = "", this.colorPrice = 0, this.filtersName = "", 
                        this.hezuTitle = "", this.hezuSubTitle = "", this.zhengzuTitle = "", this.zhengzuSubTitle = "", 
                        this.hezuList = "", this.zhengzuList = "", this.hz_btn_1 = "", this.hz_btn_2 = "", 
                        this.hz_btn_3 = "", this.hz_btn_4 = "", this.zz_btn_1 = "", this.zz_btn_2 = "", 
                        this.zz_btn_3 = "", this.zz_btn_4 = "", this.all_hezu_zhengzu_code = "", this.hasNext = !1, 
                        this.pageNumber = 1, this.rentType = "", this.newPrice = "0-10000", this.newNearBy = "", 
                        this.newSubway = "", this.newDistrict = "", this.newFeatures = "", this.newFacingsData = "", 
                        this.newAreaLevelsData = "", this.newStylesData = "", this.newStatusData = "", this.newRentTimeData = "", 
                        this.newSort = "", this.newRoomFeatures = [], this.newFacings = [], this.newAreaLevels = [], 
                        this.newStyles = [], this.newStatus = [], this.newRentTime = [], this.newRoomFeaturesTitle = [], 
                        this.newFacingsTitle = [], this.newAreaLevelsTitle = [], this.newStylesTitle = [], 
                        this.newStatusTitle = [], this.newRentTimeTitle = [], this.isFeatures = [], this.isFacings = [], 
                        this.isAreaLevels = [], this.isStyles = [], this.isStatus = [], this.isRentTime = [], 
                        this.time1 = !1, this.timeData1 = "", this.timeData2 = "", this.rentDate = [], this.isPromotion = "0", 
                        this.gpsLongitude = "", this.gpsLatitude = "", this.platformType = "", this.all_hezu_zhengzu_code = "", 
                        this.rentType = "", this.newPrice = "0-10000", this.newNearBy = "", this.newSubway = "", 
                        this.newDistrict = "", this.newFeatures = "", this.newFacingsData = "", this.newAreaLevelsData = "", 
                        this.newStylesData = "", this.newStatusData = "", this.newRentTimeData = "", this.isPromotion = "0";
                    },
                    clearSSData: function() {
                        var e = this;
                        e.btn_cz(), e.showPos = 0, e.secondBox = 0, e.showTrade = 0, e.showStation = 0, 
                        e.textSubway = "", e.textTrade = "", e.threeBox = 0, e.colorPrice = 0, e.price_text = "价格", 
                        e.textRent = "合/整租", e.resultPriceText = !1, e.dataPos = {}, e.pos_text = "位置", 
                        e.resultPosText = "", e.textPos = "", e.moreSelect = "", e.newSubway = "", e.newNearBy = "", 
                        e.newPrice = "0-10000", e.newDistrict = "", e.newFeatures = "", e.newFacingsData = "", 
                        e.newAreaLevelsData = "", e.newStylesData = "", e.newStatusData = "", e.newRentTimeData = "", 
                        e.isFeatures = [], e.isFacings = [], e.isAreaLevels = [], e.isStyles = [], e.isStatus = [], 
                        e.isRentTime = [], e.pageNumber = 1;
                    },
                    isFromWXCir: function(e) {
                        var s = this;
                        if (e.gdt_vid) {
                            s.isFromWXAd = !0;
                            var a = new Date().getHours();
                            t.getStorageSync("original_cityNum") == s.cityId ? a >= 9 && a <= 20 ? (s.showHouseSel = 1, 
                            s.showLiveSel = "", s.newNearBy = "", s.tracficIsSelected = !1, s.liveIsSelected = !1, 
                            s.priceIsSelected = !1, s.qualityIsSelected = !1) : (s.showHouseSel = "", s.showLiveSel = 1, 
                            s.newNearBy = "", s.tracficIsSelected = !1, s.liveIsSelected = !1, s.priceIsSelected = !1, 
                            s.qualityIsSelected = !1) : (s.showHouseSel = "", s.showLiveSel = "", s.newPrice = "0-10000", 
                            s.newNearBy = "", s.newFeatures = "", s.pageNumber = 1, s.priceIsSelected = !1, 
                            s.qualityIsSelected = !1);
                        } else s.isFromWXAd = !1;
                    },
                    handleSelHouse: function(s) {
                        var a = this;
                        switch (s) {
                          case 0:
                            a.tracficIsSelected ? (a.tracficIsSelected = !1, a.liveIsSelected = !1, a.priceIsSelected = !1, 
                            a.qualityIsSelected = !1, a.newNearBy = "", a.clearRoomList(), a.getRoomList(), 
                            c.sensors.track("Xcx_from_ad", {
                                Xcx_tqhf_cancel: "取消-点击通勤好房"
                            })) : (a.clearSSData(), a.newNearBy = 15e3, a.tracficIsSelected = !0, a.liveIsSelected = !1, 
                            a.priceIsSelected = !1, a.qualityIsSelected = !1, a.clearRoomList(), a.delKeywords(), 
                            c.sensors.track("Xcx_from_ad", {
                                Xcx_tqhf_confirm: "确认-点击通勤好房"
                            }));
                            break;

                          case 1:
                            a.liveIsSelected ? (a.tracficIsSelected = !1, a.liveIsSelected = !1, a.priceIsSelected = !1, 
                            a.qualityIsSelected = !1, a.newNearBy = "", a.clearRoomList(), a.getRoomList(), 
                            c.sensors.track("Xcx_from_ad", {
                                Xcx_jzhf_cancel: "取消-点击居住好房"
                            })) : (a.clearSSData(), a.newNearBy = 5e3, a.tracficIsSelected = !1, a.liveIsSelected = !0, 
                            a.priceIsSelected = !1, a.qualityIsSelected = !1, a.clearRoomList(), a.getRoomList(), 
                            c.sensors.track("Xcx_from_ad", {
                                Xcx_jzhf_confirm: "确认-点击居住好房"
                            }));
                            break;

                          case 2:
                            a.priceIsSelected ? (a.price_text = "价格", a.resultPriceText = !1, a.newPrice = "0-10000", 
                            a.tracficIsSelected = !1, a.liveIsSelected = !1, a.priceIsSelected = !1, a.qualityIsSelected = !1, 
                            a.clearRoomList(), a.getRoomList(), c.sensors.track("Xcx_from_ad", {
                                Xcx_djhf_cancel: "取消-点击低价好房"
                            })) : (a.clearSSData(), a.tracficIsSelected = !1, a.liveIsSelected = !1, a.priceIsSelected = !0, 
                            a.qualityIsSelected = !1, a.newPrice = "0-2000", a.clearRoomList(), a.delKeywords(), 
                            a.closeLayer(), c.sensors.track("Xcx_from_ad", {
                                Xcx_djhf_confirm: "确认-点击低价好房"
                            }));
                            break;

                          case 3:
                            a.qualityIsSelected ? (a.tracficIsSelected = !1, a.liveIsSelected = !1, a.priceIsSelected = !1, 
                            a.qualityIsSelected = !1, a.newFeatures = "", a.isFeatures = [], a.moreSelect = !1, 
                            a.clearRoomList(), a.getRoomList(), c.sensors.track("Xcx_from_ad", {
                                Xcx_pzhf_cancel: "取消-点击" + t.getStorageSync("cityStorageName") + "品质好房"
                            })) : (a.tracficIsSelected = !1, a.liveIsSelected = !1, a.priceIsSelected = !1, 
                            a.qualityIsSelected = !0, console.log(e(a.cityId)), "1" === a.cityId || "178" === a.cityId || "540" === a.cityId || "1781" === a.cityId ? (a.newFeatures = "4", 
                            a.isFeatures = [ "4" ], a.moreSelect = !0, a.newNearBy = "", a.newPrice = "0-10000", 
                            a.pageNumber = 1, a.clearRoomList(), a.getRoomList(), c.sensors.track("Xcx_from_ad", {
                                Xcx_pzhf_confirm_bsgs: "确认-点击" + t.getStorageSync("cityStorageName") + "品质好房"
                            })) : (a.newFeatures = "2", a.isFeatures = [ "2" ], a.moreSelect = !0, a.newNearBy = "", 
                            a.newPrice = "0-10000", a.pageNumber = 1, a.clearRoomList(), a.getRoomList(), c.sensors.track("Xcx_from_ad", {
                                Xcx_pzhf_confirm_NO_bsgs: "确认-点击" + t.getStorageSync("cityStorageName") + "品质好房"
                            })));
                        }
                    },
                    handelTrafficHouSel: function() {
                        var e = this;
                        e.newNearBy = 15e3, e.tracficIsSelected = !0, e.getRoomList(), c.sensors.track("Xcx_from_ad_init", {
                            Xcx_tqhf_init_selected: "从广告通勤好房进入"
                        });
                    },
                    handelLiveHouSel: function() {
                        var e = this;
                        e.newNearBy = 5e3, e.liveIsSelected = !0, e.getRoomList(), c.sensors.track("Xcx_from_ad_init", {
                            Xcx_jzhf_init_selected: "从广告居住好房进入"
                        });
                    },
                    handelPriceHouSel: function() {
                        var e = this;
                        e.priceIsSelected = !0, e.newPrice = "0-2000", e.getRoomList(), c.sensors.track("Xcx_from_ad_init", {
                            Xcx_djhf_init_selected: "从广告低价好房进入"
                        });
                    },
                    handelQualityHouSel: function() {
                        var e = this;
                        e.qualityIsSelected = !0, "1" === e.cityId || "178" === e.cityId || "540" === e.cityId || "1781" === e.cityId ? (e.newFeatures = "4", 
                        e.isFeatures = [ "4" ], e.moreSelect = !0, e.newNearBy = "", e.newPrice = "0-10000", 
                        e.pageNumber = 1, e.getRoomList(), c.sensors.track("Xcx_from_ad_init", {
                            Xcx_pzhf_init_selected_bsgs: t.getStorageSync("cityStorageName") + "用户从广告品质好房进入"
                        })) : (e.newFeatures = "2", e.isFeatures = [ "2" ], e.moreSelect = !0, e.newNearBy = "", 
                        e.newPrice = "0-10000", e.pageNumber = 1, e.getRoomList(), c.sensors.track("Xcx_from_ad_init", {
                            Xcx_pzhf_init_selected_NO_bsgs: t.getStorageSync("cityStorageName") + "的用户从广告品质好房进入"
                        }));
                    },
                    handelMonthRentSel: function() {
                        var e = this;
                        this.newFeatures = "8", this.moreSelect = !0, this.isFeatures = [ "8" ], this.textRent = "合/整租", 
                        this.colorRent = !1, this.dataRent = {}, this.isClick_yuezu = !0, e.getRoomList(), 
                        c.sensors.track("Xcx_from_ad_init", {
                            Xcx_yz_init_selected: "用户从广告月租进入"
                        });
                    }
                },
                computed: {}
            };
            s.default = l;
        }).call(this, a("543d").default);
    },
    9977: function(e, t, s) {},
    d582: function(e, t, s) {
        var a = function() {
            var e = this, t = (e.$createElement, e._self._c, e.cityNameList.indexOf(e.cityName)), s = e.cityNameList.indexOf(e.cityName), a = e.__map(e.newRoomFeatures, function(t, s) {
                var a = e.isFeatures.indexOf(t.value);
                return {
                    $orig: e.__get_orig(t),
                    g2: a
                };
            }), i = e.__map(e.newFacings, function(t, s) {
                var a = e.isFacings.indexOf(t.value);
                return {
                    $orig: e.__get_orig(t),
                    g3: a
                };
            }), n = e.__map(e.newAreaLevels, function(t, s) {
                var a = e.isAreaLevels.indexOf(t.value);
                return {
                    $orig: e.__get_orig(t),
                    g4: a
                };
            }), r = e.__map(e.newStyles, function(t, s) {
                var a = e.isStyles.indexOf(t.value);
                return {
                    $orig: e.__get_orig(t),
                    g5: a
                };
            }), o = e.__map(e.newStatus, function(t, s) {
                var a = e.isStatus.indexOf(t.value);
                return {
                    $orig: e.__get_orig(t),
                    g6: a
                };
            }), c = e.__map(e.newRentTime, function(t, s) {
                var a = e.isRentTime.indexOf(t.value);
                return {
                    $orig: e.__get_orig(t),
                    g7: a
                };
            });
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    g1: s,
                    l0: a,
                    l1: i,
                    l2: n,
                    l3: r,
                    l4: o,
                    l5: c
                }
            });
        }, i = [];
        s.d(t, "b", function() {
            return a;
        }), s.d(t, "c", function() {
            return i;
        }), s.d(t, "a", function() {});
    },
    d988: function(e, t, s) {
        var a = s("9977");
        s.n(a).a;
    },
    ffb6: function(e, t, s) {
        s.r(t);
        var a = s("6730"), i = s.n(a);
        for (var n in a) "default" !== n && function(e) {
            s.d(t, e, function() {
                return a[e];
            });
        }(n);
        t.default = i.a;
    }
}, [ [ "20a0", "common/runtime", "common/vendor" ] ] ]);