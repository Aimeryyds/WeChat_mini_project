var o = getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        title: {
            type: String,
            value: void 0
        },
        content: {
            type: String,
            value: "弹窗内容"
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        confirmText: {
            type: String,
            value: "确定"
        },
        productType: {
            type: String,
            value: void 0
        },
        productCode: {
            type: String,
            value: void 0
        }
    },
    data: {
        isShow: !1,
        disContent: "",
        inputContext: "",
        img: "../../../img/process.gif"
    },
    methods: {
        hideDialog: function() {
            this.setData({
                isShow: !this.data.isShow
            });
        },
        showDialog: function(t) {
            var e = "", i = "", r = "../../../img/process.gif";
            switch (t) {
              case "fund":
                e = "买", i = "马上买基金";
                break;

              case "portfolio":
                e = "买", i = "马上买组合";
                break;

              case "asset":
                e = "资产", i = "    立即查看最新资产", r = "../../../img/asset.gif";
                break;

              case "record":
                e = "查账", i = "    立即查看交易记录", r = "../../../img/assetrecord.gif";
                break;

              case "aip":
                e = "定投", i = "    立即定投", r = "../../../img/aip.gif";
                break;

              case "stib":
                e = "666", i = "回复“666”，关注【万得财富】公众号，我们才能向您推送开售提醒哦~", r = "../../../img/stib.gif";
            }
            this.setData({
                inputContext: e,
                disContent: i,
                isShow: !this.data.isShow,
                img: r
            });
            var a = {
                actionType: "802400050002"
            }, s = o.globalData.advisorInfo;
            s && "" != s && (a.advisorCode = s.advisorCode, a.platformType = s.platformType), 
            a.platformType = a.platformType || 4, this.properties.productType && (a.productType = this.properties.productType), 
            this.properties.productCode && (a.productCode = this.properties.productCode), o.getData("CMD_SAVE_FUNCTION_POINT", a, function(o) {
                console.log("功能点调用成功：", "802400050002");
            }, function(o) {
                console.log("功能点调用失败：", "802400050002");
            }, 1);
        },
        _cancelEvent: function() {
            this.triggerEvent("cancelEvent");
        },
        _confirmEvent: function() {
            this.sendAdvisorInfo(), this.triggerEvent("confirmEvent");
        },
        sendAdvisorInfo: function() {
            var t = {
                productCode: this.properties.productCode,
                productType: this.properties.productType
            };
            if (t.productCode) {
                var e = o.globalData.advisorInfo;
                e && "" != e && (t.advisorCode = e.advisorCode, t.platformType = e.platformType), 
                t.platformType = t.platformType || 4, o.getData("XCX_RECEIVE_CUSTOMER_INFO", t, function(o) {
                    console.log("contactCallBack request success");
                }, function(o) {
                    console.log("contactCallBack request fail");
                });
            }
        },
        copyContentToBoard: function(o) {
            this.copyProductCodeToBoard();
        },
        copyProductCodeToBoard: function(o) {
            o = o || this.properties.productCode, wx.setClipboardData({
                data: o,
                success: function(o) {
                    console.log(o);
                },
                fail: function(o) {
                    console.log(o);
                }
            });
        }
    }
});