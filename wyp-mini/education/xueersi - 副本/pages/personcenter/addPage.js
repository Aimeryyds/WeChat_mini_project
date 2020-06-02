function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _path = require("./../../common/axios/path.js"), _path2 = _interopRequireDefault(_path), _toast = require("./../../components/Commons/toast.js"), _toast2 = _interopRequireDefault(_toast), _global = require("./../../common/util/global.js"), _common = require("./../../common/util/common.js"), testlist = function(e) {
    function t() {
        var e, a, i, s;
        _classCallCheck(this, t);
        for (var r = arguments.length, o = Array(r), n = 0; n < r; n++) o[n] = arguments[n];
        return a = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        i.config = {
            navigationBarTitleText: "添加收货地址",
            navigationBarTextStyle: "black",
            navigationBarBackgroundColor: "#fff"
        }, i.data = {
            addressInfo: {},
            edit: 0,
            region: [ 0, 0, 0 ],
            name: "",
            phone: "",
            address: "",
            areaCode: [],
            riProvinceId: "",
            riCityId: "",
            riCountyId: "",
            riIsDefault: 0,
            riId: "",
            saving: !1,
            multiIndex: [ 0, 0, 0 ],
            multiArray: [ [], [], [] ],
            selectedProvinceIndex: 0,
            areaSelectResult: "",
            repick: !1,
            saveFlag: !1
        }, i.components = {
            taltoast: _toast2.default
        }, s = a, _possibleConstructorReturn(i, s);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            if (this.getcity(), !e || !e.add) {
                var t = _wepy2.default.$instance.globalData.ReceivingAddressInfo;
                t && (this.edit = 1, wx.setNavigationBarTitle({
                    title: "编辑收货地址"
                }), this.addressInfo = t, this.riIsDefault = this.addressInfo.riIsDefault, this.riProvinceId = this.addressInfo.riProvinceId, 
                this.riCityId = this.addressInfo.riCityId, this.riCountyId = this.addressInfo.riCountyId, 
                this.name = this.addressInfo.riRecipientName, this.phone = this.addressInfo.riMobilePhoneNumber, 
                this.areaSelectResult = this.addressInfo.riProvinceName + " " + this.addressInfo.riCityName + " " + this.addressInfo.riCountyName, 
                this.address = this.addressInfo.riDetailAddress, this.riId = this.addressInfo.riId, 
                this.riIsDefault = this.addressInfo.riIsDefault, this.$apply());
            }
        }
    }, {
        key: "getcity",
        value: function() {
            var e = this, t = wx.getStorageSync("userInfoStatus").area_code, a = _path2.default.allcity, i = [], s = [], r = [], o = {
                area: t
            };
            (0, _global.isHaveObjectValue)(o) && (0, _common.axios)({
                url: a,
                data: o
            }).then(function(t) {
                var a = t.data;
                a && a.data && 0 === a.error_code ? (e.areaCode = a.data, e.areaCode.forEach(function(e) {
                    i.push(e.label);
                }), e.areaCode[0].children.forEach(function(e) {
                    s.push(e.label);
                }), e.areaCode[0].children[0].children.forEach(function(e) {
                    r.push(e.label);
                }), e.multiArray = [ i, s, r ], e.$apply()) : (e.$invoke("taltoast", "show", {
                    message: a.error_msg
                }), e.$apply());
            });
        }
    }, {
        key: "bindRegionChange",
        value: function(e) {
            this.repick = !0, this.region = e.detail.value, this.areaSelectResult = this.multiArray[0][this.region[0]] + " " + this.multiArray[1][this.region[1]] + " " + this.multiArray[2][this.region[2]], 
            this.$apply();
        }
    }, {
        key: "switch1Change",
        value: function(e) {
            !0 === e.detail.value ? this.riIsDefault = 1 : this.riIsDefault = 0;
        }
    }, {
        key: "trueName",
        value: function(e) {
            this.name = e.detail.value;
        }
    }, {
        key: "phoneInput",
        value: function(e) {
            this.phone = e.detail.value;
        }
    }, {
        key: "addAddress",
        value: function() {
            if (!this.saveFlag) {
                this.saveFlag = !0, this.$apply();
                this.checkUserInfo() ? this.edit ? this.editAddressInfo() : this.addAddressInfo() : (this.saveFlag = !1, 
                this.$apply());
            }
        }
    }, {
        key: "addAddressInfo",
        value: function() {
            var e = this, t = this.areaCode[this.region[0]], a = this.areaCode[this.region[0]].children[this.region[1]], i = this.areaCode[this.region[0]].children[this.region[1]].children[this.region[2]], s = this, r = wx.getStorageSync("userInfoStatus"), o = _path2.default.addconsignee, n = {
                stu_id: r.stu_id,
                class_id: this.classId,
                recipient_name: s.name,
                phone: s.phone,
                province_id: t.value,
                city_id: a.value,
                county_id: i.value,
                detail_address: s.address,
                is_default: s.riIsDefault
            }, l = {
                authorization: wx.getStorageSync("user-token")
            };
            if ((0, _global.reTextSymbol)(n.recipient_name, n.detail_address)) return wx.showToast({
                title: _wepy2.default.$instance.globalData.tErrorMasg,
                icon: "none",
                duration: 2e3
            }), this.saveFlag = !1, void this.$apply();
            (0, _global.isHaveObjectValue)(l) && (0, _common.axios)({
                url: o,
                data: n,
                header: l
            }).then(function(t) {
                var a = t.data;
                a && 0 === a.error_code ? wx.navigateBack({
                    url: "/pages/personcenter/addressmanage"
                }) : (s.$invoke("taltoast", "show", {
                    message: a.error_msg || "保存失败，请重试"
                }), e.saveFlag = !1, s.$apply());
            });
        }
    }, {
        key: "editAddressInfo",
        value: function() {
            var e = this, t = this, a = "", i = "", s = "";
            this.repick ? (a = this.areaCode[this.region[0]].value, i = this.areaCode[this.region[0]].children[this.region[1]].value, 
            s = this.areaCode[this.region[0]].children[this.region[1]].children[this.region[2]].value) : (a = t.addressInfo.riProvinceId, 
            i = t.addressInfo.riCityId, s = t.addressInfo.riCountyId);
            var r = wx.getStorageSync("userInfoStatus"), o = _path2.default.updateconsignee, n = {
                address_id: t.riId,
                area: r.area_code,
                stu_id: r.stu_id,
                recipient_name: t.name,
                phone: t.phone,
                province_id: a,
                city_id: i,
                county_id: s,
                detail_address: t.address,
                is_default: t.riIsDefault
            }, l = {
                authorization: wx.getStorageSync("user-token")
            };
            return (0, _global.reTextSymbol)(n.recipient_name, n.detail_address) ? (wx.showToast({
                title: _wepy2.default.$instance.globalData.tErrorMasg,
                icon: "none",
                duration: 2e3
            }), this.saveFlag = !1, void this.$apply()) : (0, _global.isHaveObjectValue)(l) ? void (0, 
            _common.axios)({
                url: o,
                data: n,
                header: l
            }).then(function(a) {
                var i = a.data;
                i && 0 === i.error_code ? (t.$invoke("taltoast", "show", {
                    message: "保存成功"
                }), wx.navigateBack({
                    url: "/pages/personcenter/addressmanage"
                })) : (e.saveFlag = !1, e.$apply(), t.$invoke("taltoast", "show", {
                    message: i.error_msg || "保存失败，请重试"
                }));
            }) : (this.saveFlag = !1, void this.$apply());
        }
    }, {
        key: "checkUserInfo",
        value: function() {
            var e = !0;
            return "" === this.name ? (this.$invoke("taltoast", "show", {
                message: "请填写真实姓名",
                duration: 2e3
            }), e = !1) : (0, _global.validePhone)(this.phone) ? "" === this.areaSelectResult ? (this.$invoke("taltoast", "show", {
                message: "请选择所在地区",
                duration: 2e3
            }), e = !1) : "" === this.address && (this.$invoke("taltoast", "show", {
                message: "请填写详细地址",
                duration: 2e3
            }), e = !1) : (this.$invoke("taltoast", "show", {
                message: "请输入正确的手机号",
                duration: 2e3
            }), e = !1), e;
        }
    }, {
        key: "addressDetail",
        value: function(e) {
            this.address = e.detail.value;
        }
    }, {
        key: "bindMultiPickerColumnChange",
        value: function(e) {
            var t = [], a = [];
            0 === e.detail.column ? (this.areaCode[e.detail.value].children.forEach(function(e) {
                t.push(e.label);
            }), this.selectedProvinceIndex = e.detail.value, this.multiArray[1] = t, this.areaCode[e.detail.value].children[0].children.forEach(function(e) {
                a.push(e.label);
            }), this.multiArray[2] = a) : 1 === e.detail.column && (this.areaCode[this.selectedProvinceIndex].children[e.detail.value].children.forEach(function(e) {
                a.push(e.label);
            }), this.multiArray[2] = a), this.$apply();
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(testlist, "pages/personcenter/addPage"));