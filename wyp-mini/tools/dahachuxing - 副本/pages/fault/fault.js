var t = getApp(), a = require("../../utils/util.js");

require("../../utils/config.js").appColor;

Page({
    data: {
        machineNO: "",
        fault: "",
        select: "",
        mainColor: "",
        textColor: ""
    },
    onLoad: function(a) {
        var e = "";
        a.userCode && 0 != a.userCode.length && (e = a.userCode), this.setData({
            mainColor: t.globalData.mainColor,
            textColor: t.globalData.textColor,
            machineNO: e
        });
    },
    bindTextAreaBlur: function(t) {
        this.setData({
            fault: t.detail.value
        });
    },
    inputTitle: function(t) {
        this.setData({
            machineNO: t.detail.value
        }), 9 == t.detail.value.length && this.getMachineStatus();
    },
    selectFault: function(t) {
        var a = t.currentTarget.dataset.remark;
        this.setData({
            select: a
        });
    },
    commitFault: function() {
        var a = this;
        t.globalData.locationInfo ? this.sendFault() : t.getLocationInfo("gcj02", function(t) {
            a.sendFault();
        });
    },
    sendFault: function() {
        if ("" != this.data.select) {
            var e = this.data.machineNO, n = this.data.fault;
            n = 0 != n.length && -1 == n.indexOf(" ") ? this.data.select + "," + n : this.data.select, 
            0 != e.indexOf(" ") && 9 == e.length ? (wx.showToast({
                title: "正在上传...",
                icon: "loading",
                mask: !0,
                duration: 5e3
            }), t.checkToken(function(o) {
                if (o.length > 0) {
                    var i = t.globalData.baseUrl + "machineFault/add.do", l = {
                        token: o,
                        userCode: e,
                        faults: n,
                        lo: t.globalData.locationInfo.longitude,
                        la: t.globalData.locationInfo.latitude,
                        mapType: 2
                    };
                    a.request(i, l, function(t) {
                        t.ret && (wx.hideToast(), a.showModal_nocancel("提交成功！", function() {
                            wx.navigateBack({});
                        }));
                    });
                }
            })) : wx.showToast({
                title: "请输入正确的设备编号",
                icon: "none"
            });
        } else wx.showToast({
            title: "请选择故障类型！",
            icon: "none"
        });
    },
    openScanCode: function() {
        var t = this;
        console.log("开启扫码"), wx.scanCode({
            success: function(a) {
                var e = a.result;
                if (0 == e.length) wx.showModal({
                    title: "提示",
                    content: "未识别到内容，请重新扫描!",
                    showCancel: !1,
                    success: function(t) {}
                }); else {
                    console.log("内部扫描内容:" + e);
                    var n = "";
                    n = e.indexOf("?machineNO") > -1 ? e.split("=")[1] : e, t.setData({
                        machineNO: n
                    });
                }
            }
        });
    },
    getMachineStatus: function() {
        var e = this;
        t.checkToken(function(n) {
            if (n.length > 0) {
                var o = t.globalData.baseUrl + "machineStatus/getByMachineNO.do", i = {
                    machineNO: e.data.machineNO,
                    token: n
                };
                wx.request({
                    url: o,
                    data: i,
                    success: function(t) {
                        "-30005" == t.data.code && a.showModal_nocancel("车辆不存在,请扫描其他车辆", function() {
                            e.setData({
                                machineNO: ""
                            });
                        });
                    }
                });
            }
        });
    }
});