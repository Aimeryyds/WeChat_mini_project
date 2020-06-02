var a, t = [], e = [], s = [], i = require("../../../../utils/server"), g = wx.getStorageSync("utoken");

Page({
    data: {
        isMove: !1,
        cardAgain: !1,
        isSelectList: [],
        images: [],
        values: [],
        uploadedImages: [],
        imageWidth: "",
        imageWidth2: "",
        imageSrc: [],
        imageSrcLists: [],
        CombinationLists: [],
        AllvalueLists: []
    },
    onLoad: function(t) {
        a = this;
        var e = t.objectId;
        console.log(e + "objectIdobjectId"), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    imageWidth: t.windowWidth / 4 - 10,
                    imageWidth2: t.windowWidth / 2 - 20
                });
            }
        }), g = wx.getStorageSync("utoken"), i.sendRequest({
            url: "?r=activity.index.get_imgs&utoken=" + g,
            data: {},
            method: "GET",
            success: function(t) {
                a.setData({
                    imgList: t.data.result.default
                });
                for (var e = 0; e < a.data.imgList.length; e++) s.push(a.data.imgList[e].choosed);
                a.setData({
                    isSelectList: s
                });
            }
        });
    },
    propaganda: function() {
        wx.navigateTo({
            url: "../propagandaImg/propagandaImg"
        });
    },
    chooseImage: function() {
        wx.chooseImage({
            count: 5,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                var e = t.tempFilePaths;
                wx.uploadFile({
                    url: "https://tws.cnweisou.com/wxapi/index.php?r=activity.index.upload_banner&utoken=" + g + "&i=450",
                    filePath: e[0],
                    name: "banner_img",
                    success: function(t) {
                        var e = JSON.parse(t.data), s = a.data.images, i = a.data.values;
                        s.push(e.result.url), i.push(e.result.value), s.length > 5 || i.length > 5 ? (wx.showToast({
                            title: "最多只能选5张",
                            icon: "success",
                            duration: 2e3
                        }), s.splice(5, s.length), i.splice(5, i.length), a.setData({
                            images: s,
                            ValueLists: i
                        })) : a.setData({
                            images: s,
                            ValueLists: i
                        });
                    }
                });
            }
        });
    },
    previewImage: function() {
        wx.previewImage({
            urls: a.data.images
        });
    },
    delete: function(t) {
        var e = t.currentTarget.dataset.index, s = a.data.images;
        s.splice(e, 1), a.setData({
            images: s
        });
    },
    recommendImage: function(a) {
        for (var i = this, g = 0; g < i.data.imgList.length; g++) {
            if (a.currentTarget.dataset.index == g) if (i.setData({
                imageSrc: i.data.imgList[g].url,
                imageValue: i.data.imgList[g].value
            }), 0 == i.data.imgList[g].choosed) if (a.currentTarget.dataset.name) {
                i.data.imgList[g].choosed = !1, s[g] = i.data.imgList[g].choosed, i.setData({
                    isSelectList: s
                });
                for (var c = 0; c < t.length; c++) if (t[c] == i.data.imageSrc) {
                    t.splice(c, 1), e.splice(c, 1);
                    break;
                }
            } else i.data.imgList[g].choosed = !0, s[g] = i.data.imgList[g].choosed, i.setData({
                isSelectList: s
            }), t.push(i.data.imageSrc), e.push(i.data.imageValue); else if (a.currentTarget.dataset.name) {
                i.data.imgList[g].choosed = !1, s[g] = i.data.imgList[g].choosed, i.setData({
                    isSelectList: s
                });
                for (var o = 0; o < t.length; o++) if (t[o] == i.data.imageSrc) {
                    t.splice(o, 1), e.splice(o, 1);
                    break;
                }
            } else i.data.imgList[g].choosed = !0, s[g] = i.data.imgList[g].choosed, i.setData({
                isSelectList: s
            }), t.push(i.data.imageSrc), e.push(i.data.imageValue);
            i.data.imgList.length > 5 ? (wx.showToast({
                title: "最多只能选5张",
                icon: "success",
                duration: 2e3
            }), t.splice(5, t.length), e.splice(5, t.length), i.setData({
                imageSrcLists: t,
                imageValueLists: e
            })) : i.setData({
                imageSrcLists: t,
                imageValueLists: e
            });
        }
    },
    submit: function() {
        var a = this;
        a.setData({
            isMove: !0
        }), "" == a.data.images && "" != a.data.imageSrcLists ? (wx.setStorageSync("images", a.data.imageSrcLists), 
        wx.setStorageSync("imageValueLists", a.data.imageValueLists), wx.navigateBack(), 
        a.setData({
            isMove: !0
        })) : "" != a.data.images && "" == a.data.imageSrcLists ? (wx.setStorageSync("images", a.data.images), 
        wx.setStorageSync("imageValueLists", a.data.ValueLists), a.setData({
            isMove: !0
        }), wx.navigateBack()) : "" != a.data.images && "" != a.data.imageSrcLists ? (a.setData({
            CombinationLists: a.data.images.concat(a.data.imageSrcLists),
            AllvalueLists: a.data.ValueLists.concat(a.data.imageValueLists),
            isMove: !0
        }), wx.setStorageSync("images", a.data.CombinationLists), wx.setStorageSync("imageValueLists", a.data.AllvalueLists), 
        wx.navigateBack()) : "" == a.data.images && "" == a.data.imageSrcLists && a.setData({
            cardAgain: !0
        });
    },
    returnIndex: function() {
        this.setData({
            cardAgain: !1
        });
    }
});