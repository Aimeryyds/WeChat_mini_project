var e, t = require("../../utils/server"), a = wx.getStorageSync("utoken");

Page({
    data: {
        cardAgain: !1,
        items: [ {
            name: "man",
            value: "男",
            checked: "true"
        }, {
            name: "woman",
            value: "女"
        } ],
        psex: "man",
        list: [ "供应", "需求" ],
        sub: 0,
        showType: !1,
        typeNum: 0,
        formList: {},
        imgs: [],
        position: "",
        images: [],
        values: [],
        area: ""
    },
    onLoad: function(e) {
        var a = this;
        e.sub && a.setData({
            sub: e.sub,
            typeNum: e.sub
        });
        var s = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=sad2.get_type&utoken=" + s,
            method: "GET",
            success: function(e) {
                a.setData({
                    typeList: e.data.result
                });
            }
        });
    },
    clickTitle: function(e) {
        var t = this, a = e.currentTarget.dataset.index;
        t.setData({
            sub: a,
            pname: "",
            psex: "man",
            phone: "",
            cont: "",
            currtype: "",
            typeNum: a
        });
    },
    type: function(t) {
        (e = this).setData({
            showType: !0,
            listType: e.data.typeList
        });
    },
    chooseType: function(t) {
        var a = t.currentTarget.dataset.index;
        e.setData({
            showType: !1,
            currtype: e.data.listType[a]
        });
    },
    pname: function(t) {
        e = this;
        var a = t.detail.value;
        a ? e.setData({
            pname: a
        }) : e.setData({
            pname: "",
            cardAgain: !0
        });
    },
    radioChange: function(t) {
        e = this;
        var a = t.detail.value;
        console.log(a), e.setData({
            psex: a
        });
    },
    phone: function(t) {
        e = this;
        var a = t.detail.value;
        /^1(3|4|5|7|8)\d{9}$/.test(a) ? e.setData({
            phone: a
        }) : e.setData({
            phone: "",
            cardAgain: !0
        });
    },
    areaCont: function(t) {
        e = this;
        var a = t.detail.value;
        e.setData({
            cont: a
        });
    },
    position: function(e) {
        var t = this;
        wx.chooseLocation({
            success: function(e) {
                if (console.log(e), e.address) {
                    var a = e.address.indexOf("市"), s = e.address.indexOf("区");
                    t.setData({
                        positionAll: e.address,
                        position: e.address.substring(0, a + 1),
                        area: e.address.substring(0, s + 1)
                    });
                }
            }
        });
    },
    returnIndex: function() {
        this.setData({
            cardAgain: !1
        });
    },
    chooseImage: function() {
        var e = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                var s = t.tempFilePaths;
                console.log(s[0]), wx.uploadFile({
                    url: "https://tws.cnweisou.com/wxapi/index.php?r=sad2.upload_img&i=170&utoken=" + a,
                    filePath: s[0],
                    name: "img",
                    success: function(t) {
                        var a = JSON.parse(t.data), s = e.data.images, i = e.data.values;
                        s.push(a.result.url), i.push(a.result.value), s.length > 5 || i.length > 5 ? (wx.showToast({
                            title: "最多只能选5张",
                            image: "https://tws.cnweisou.com/images/eidtNo.png",
                            duration: 2e3
                        }), s.splice(5, s.length), i.splice(5, i.length), e.setData({
                            images: s,
                            ValueLists: i
                        })) : e.setData({
                            images: s,
                            ValueLists: i
                        });
                    }
                });
            }
        });
    },
    previewImage: function() {
        var e = this;
        wx.previewImage({
            urls: e.data.images
        });
    },
    delete: function(e) {
        var t = this, a = e.currentTarget.dataset.index, s = t.data.images, i = t.data.ValueLists;
        s.splice(a, 1), i.splice(a, 1), t.setData({
            images: s,
            ValueLists: i
        });
    },
    formSubmitAll: function() {
        e = this;
        var a = wx.getStorageSync("utoken");
        console.log(e.data.ValueLists), t.sendRequest({
            url: "?r=sad2.edit&utoken=" + a,
            data: {
                desc: e.data.currtype,
                content: e.data.cont,
                type: e.data.typeNum,
                name: e.data.pname,
                mobile: e.data.phone,
                imgs: e.data.ValueLists,
                city: e.data.position,
                area: e.data.area
            },
            method: "POST",
            success: function(t) {
                wx.redirectTo({
                    url: "myexhibit/myexhibit?issd=true&sub=" + e.data.typeNum,
                    success: function() {
                        e.setData({
                            pname: "",
                            phone: "",
                            currtype: "",
                            cont: ""
                        });
                    }
                });
            }
        });
    }
});