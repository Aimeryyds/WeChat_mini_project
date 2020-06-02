var e = getApp(), t = require("../../utils/util");

Page({
    data: {
        studentAuthImg: "../../images/studentAuth/image.png",
        picture: []
    },
    onLoad: function() {},
    upImg: function(e) {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                console.log(e.tempFilePaths), t.setData({
                    studentAuthImg: e.tempFilePaths,
                    picture: e.tempFilePaths
                });
            }
        });
    },
    toAgreement: function() {
        wx.navigateTo({
            url: "../agreement/agreement"
        });
    },
    formSubmit: function(a) {
        var n = this, o = a.detail.value.name, i = a.detail.value.studentNO, s = a.detail.value.reason, u = n.data.picture;
        0 != a.detail.value.agreement.length ? 0 == o.length || 0 == i.length ? wx.showToast({
            icon: "none",
            title: "您还有必选项没有输入！"
        }) : 0 == u.length ? wx.showToast({
            icon: "none",
            title: "请选择上传图片！"
        }) : (t.showLoadingTrue("请稍候"), e.checkToken(function(a) {
            a.length > 0 && wx.uploadFile({
                url: e.globalData.baseUrl + "studentAuth/apply.do",
                filePath: u[0],
                name: "imageFiles",
                header: {
                    "Content-Type": "multipart/form-data"
                },
                formData: {
                    name: o,
                    studentNO: i,
                    reason: s,
                    token: a,
                    machineNO: e.globalData.machineNO
                },
                success: function(e) {
                    var a = JSON.parse(e.data);
                    console.log(a), a.ret ? (wx.hideLoading(), t.showModal("已提交审核，在此期间无法用车，还请耐心等待!", function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    })) : (wx.hideLoading(), n.setData({
                        studentAuthImg: "../../images/studentAuth/image.png",
                        picture: []
                    }), t.showModal(a.msg));
                },
                fail: function(e) {
                    wx.hideLoading(), t.showModal(JSON.stringify(e)), console.log("错误信息：" + e);
                },
                complete: function() {}
            });
        })) : wx.showToast({
            icon: "none",
            title: "请仔细阅读协议并勾选！"
        });
    }
});