Page({
    data: {
        height: 20,
        focus: !1,
        textCont: "",
        activityTip: !1,
        classNum: "",
        hh: !0
    },
    getFocus: function() {
        this.setData({
            activityTip: !1
        });
    },
    bindFormSubmit: function(t) {
        var a = this;
        0 == t.detail.value.textarea ? (console.log("内容为空"), a.setData({
            activityTip: !0
        })) : (a.setData({
            textCont: t.detail.value.textarea,
            classNum: 1
        }), wx.setStorage({
            key: "textCont",
            data: {
                textCont: a.data.textCont,
                classNum: a.data.classNum
            }
        }), wx.navigateBack());
    }
});