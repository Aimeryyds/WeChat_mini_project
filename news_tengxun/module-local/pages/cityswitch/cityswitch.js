var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), i = require("../../../@babel/runtime/helpers/interopRequireWildcard"), e = i(require("../../js/store/city")), n = i(require("../../js/util")), a = i(require("../../js/const")), s = new (t(require("../../js/lib/wx-cookie")).default)(), r = require("../../js/netspeed"), c = new getApp().global;

Page({
    data: {
        selectedCity: {},
        physicalCity: "",
        cityList: [],
        locationCity: {}
    },
    onLoad: function() {
        this.reloadCityList(), c.mta.Page.init();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    reloadCityList: function() {
        e.getCityList(this);
    },
    onSwitchCity: function(t) {
        var i = t.currentTarget.dataset, e = i.id, n = i.name;
        this.switchCity({
            chlid: e,
            chlname: n
        });
    },
    handleExtendCity: function(t) {
        var i = this, e = t.currentTarget.dataset.allinfo, n = e.chlid, a = e.cityArr, s = this.data.cityList;
        if (a && 0 !== a.length) {
            for (var c in s) s[c].chlid === n && (s[c].isExtend = !s[c].isExtend);
            this.setData({
                cityList: s
            });
        } else r.usenet().then(function() {
            i.switchCity(e);
        });
    },
    switchCity: function(t) {
        t && (c.hasSwitchCity = !0, n.setStorage(a.STORAGE_LC_SELECTED_CITYINFO, t), s.set(a.LOCAL_LAST_LOCATE_INFO, t), 
        this.setData({
            selectedCity: t
        }), wx.navigateBack({
            delta: 1
        }));
    }
});