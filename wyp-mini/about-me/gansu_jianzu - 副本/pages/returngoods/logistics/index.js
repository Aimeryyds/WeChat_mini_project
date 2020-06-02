function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var i = arguments[a];
        for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
    }
    return e;
}, i = e(require("../../../network/api.js")), t = e(require("../../../dist/index"));

Page(Object.assign({}, t.default.Toast, t.default.TopTips, {
    data: {
        objectArray: [ {
            id: 0,
            name: "EMS"
        }, {
            id: 1,
            name: "申通快递"
        }, {
            id: 2,
            name: "圆通快递"
        }, {
            id: 3,
            name: "中通快递"
        }, {
            id: 4,
            name: "顺丰快递"
        }, {
            id: 5,
            name: "韵达快递"
        }, {
            id: 6,
            name: "百世快递"
        }, {
            id: 7,
            name: "德邦快递"
        }, {
            id: 8,
            name: "国通快递"
        }, {
            id: 9,
            name: "京东快递"
        }, {
            id: 10,
            name: "全峰快递"
        }, {
            id: 11,
            name: "天天快递"
        }, {
            id: 12,
            name: "信丰快递"
        }, {
            id: 13,
            name: "优速快递"
        }, {
            id: 14,
            name: "运通快递"
        }, {
            id: 15,
            name: "远成快递"
        }, {
            id: 16,
            name: "邮政快递包裹"
        }, {
            id: 17,
            name: "中铁快运"
        }, {
            id: 18,
            name: "宅急送"
        }, {
            id: 19,
            name: "快捷快递"
        }, {
            id: 20,
            name: "跨越速运"
        } ],
        logisticsData: {}
    },
    onLoad: function(e) {
        this.setData({
            id: e.id,
            type: e.type,
            expressComp: e.expressComp,
            expressNo: e.expressNo,
            expressRemark: e.expressRemark
        }), "logModify" == this.data.type && (console.log("3333333333333333"), this.setData({
            logisticsData: {
                name: this.data.expressComp
            }
        }));
    },
    formSubmit: function(e) {
        var t = this, s = e.detail.value;
        console.log(e, "uuuuuuuuuuuuu");
        var o = void 0;
        this.data.logisticsData.name ? s.expressNo || (o = "请输入物流单号") : o = "请选择物流快递", o ? (this.showZanToast(o), 
        console.log(o, "err")) : i.default.queryLogistics(a({}, s, {
            id: this.data.id,
            expressComp: this.data.logisticsData.name
        })).then(function(e) {
            t.setData({
                isShow: !0
            }), t.showZanTopTips("保存成功"), wx.redirectTo({
                url: "/pages/returngoods/applydetail/index?id=" + t.data.id
            });
        }).catch(function(e) {
            console.log(e), t.showZanTopTips("保存失败，请重新填写");
        });
    },
    bindPickerChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            logisticsData: this.data.objectArray[e.detail.value]
        });
    }
}));