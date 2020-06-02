var a = Object.assign || function(a) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (a[i] = t[i]);
    }
    return a;
}, e = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../../network/api"));

Page({
    data: {
        detail: {
            imgUrl: [],
            props: [ {
                key: "面积:",
                value: ""
            } ]
        },
        indicatorDots: !1,
        autoplay: !1,
        interval: 5e3,
        duration: 1e3,
        current: 1,
        positionString: ""
    },
    onLoad: function(t) {
        var i = this;
        wx.showLoading({
            title: "请稍后"
        }), e.default.queryHotelRoomDetail({
            id: t.id
        }).then(function(e) {
            console.log(e, "++++"), wx.hideLoading();
            var t = "";
            1 == e.data.checkWired || 1 == e.data.checkWifi ? (1 == e.data.checkWired && (t = "有线"), 
            1 == e.data.checkWired && 1 == e.data.checkWifi && (t += "/"), 1 == e.data.checkWifi && (t += "Wifi")) : t = "无网";
            var n = [ {
                key: "面积:",
                value: e.data.acreage
            }, {
                key: "床型:",
                value: "" + e.data.bedType + e.data.bedWidth + "mx" + e.data.bedLength + "m"
            }, {
                key: "窗户:",
                value: 1 == e.data.hasWindow ? "有窗" : "无窗"
            }, {
                key: "楼层",
                value: e.data.fromFloor + "-" + e.data.toFloor + "层"
            }, {
                key: "早餐",
                value: 1 == e.data.hasBreakfase ? "含早餐" : "不含早餐"
            }, {
                key: "无烟房",
                value: 1 == e.data.smokeType ? "无烟处理" : "无烟楼层"
            }, {
                key: "上网方式",
                value: t
            }, {
                key: "入住人数",
                value: e.data.capacity + "人（" + (1 == e.data.checkAddBed ? "可加床" : "不可加床") + "）"
            } ];
            i.setData({
                detail: a({}, e.data, {
                    props: n
                }),
                positionString: i.data.current + "/" + e.data.imgUrl.length + "张"
            });
        }).catch(function(a) {
            return console.log(a);
        });
    },
    onShow: function() {},
    handleChange: function(a) {
        console.log("handleChange===========>", a), this.setData({
            current: a.detail.current,
            positionString: a.detail.current + 1 + "/" + this.data.detail.imgUrl.length + "张"
        });
    },
    onPullDownRefresh: function() {},
    onShareAppMessage: function() {}
});