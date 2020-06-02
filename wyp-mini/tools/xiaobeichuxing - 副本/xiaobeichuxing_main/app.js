App({
    onLaunch: function() {
        console.log("1212");
    },
    globalData: {
        userInfo: null,
        exitlogin: !1,
        myAreaid: "",
        vs: !1,
        timer: null,
        isEnd: !1,
        myShow: !0,
        myVeh: {},
        myLocation: {},
        refundId: " ",
        adcode: ""
    },
    onHide: function() {
        clearInterval(this.globalData.timer), wx.removeStorage({
            key: "myVeh",
            success: function(o) {
                console.log(o);
            }
        }), wx.removeStorage({
            key: "isSao",
            success: function(o) {
                console.log(o);
            }
        });
    }
});