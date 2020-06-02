var t = "", a = require("../../../utils/server");

wx.getStorageSync("utoken");

Page({
    data: {
        showType: !1
    },
    onLoad: function(e) {
        t = this;
        n = wx.getStorageSync("utoken");
        a.sendRequest({
            url: "?r=sad.detail&utoken=" + n + "&id=" + e.id,
            data: {},
            method: "GET",
            success: function(a) {
                t.setData({
                    detialList: a.data.result
                }), t.data.detialList.status && (1 == t.data.detialList.status ? t.setData({
                    isFinish: "消息待完成"
                }) : t.setData({
                    isFinish: "消息已完成"
                }));
                var e = /^(\d{3})\d{4}(\d{4})$/, n = t.data.detialList.mobile.replace(e, "$1****$2");
                t.setData({
                    phone: n
                });
            }
        });
        var n = wx.getStorageSync("utoken");
        a.sendRequest({
            url: "?r=sad.get_type&utoken=" + n,
            method: "GET",
            success: function(a) {
                t.setData({
                    typeList: a.data.result
                });
            }
        });
    },
    clickphone: function() {
        (t = this).setData({
            phone: t.data.phone
        });
    },
    clickEnd: function() {
        t = this;
        var e = wx.getStorageSync("utoken");
        1 == t.data.detialList.status && wx.showModal({
            title: "提示",
            content: "您确定结束此消息么",
            success: function(n) {
                n.confirm ? a.sendRequest({
                    url: "?r=sad.finish&utoken=" + e + "&id=" + t.data.detialList.id,
                    method: "GET",
                    success: function(a) {
                        wx.redirectTo({
                            url: "../myexhibit/myexhibit?issd=22222&sub=" + t.data.detialList.type
                        });
                    }
                }) : n.cancel;
            }
        });
    },
    returnIndex: function() {
        this.setData({
            cardAgain: !1
        });
    },
    returnIndexf: function() {
        this.setData({
            cardf: !1
        });
    },
    chooseType: function(a) {
        var e = a.currentTarget.dataset.index;
        t.setData({
            showType: !1,
            currtype: t.data.listType[e]
        });
    },
    modifyName: function() {
        (t = this).data.fname ? t.setData({
            fname: !1
        }) : t.setData({
            fname: !0
        });
    },
    pname: function(a) {
        t = this;
        var e = a.detail.value;
        e ? t.setData({
            pname: e
        }) : t.setData({
            pname: "",
            cardAgain: !0
        });
    },
    modifyPhone: function() {
        (t = this).data.fphone ? t.setData({
            fphone: !1
        }) : t.setData({
            fphone: !0
        });
    },
    phone: function(a) {
        t = this;
        var e = a.detail.value;
        /^1(3|4|5|7|8)\d{9}$/.test(e) ? t.setData({
            myphone: e
        }) : t.setData({
            myphone: "",
            cardAgain: !0
        });
    },
    modifyType: function() {
        (t = this).data.ftype ? t.setData({
            ftype: !1
        }) : t.setData({
            ftype: !0
        });
    },
    type: function(a) {
        (t = this).setData({
            showType: !0,
            listType: t.data.typeList
        });
    },
    modifyCont: function() {
        (t = this).data.fcont ? t.setData({
            fcont: !1
        }) : t.setData({
            fcont: !0
        });
    },
    cont: function(a) {
        t = this, console.log(a);
        var e = a.detail.value;
        console.log(e), t.setData({
            cont: e
        });
    },
    clickmodify: function() {
        (t = this).data.pname ? t.setData({
            name: t.data.pname
        }) : t.setData({
            name: t.data.detialList.name
        }), t.data.myphone ? t.setData({
            nowphone: t.data.myphone
        }) : t.setData({
            nowphone: t.data.detialList.mobile
        }), t.data.currtype ? t.setData({
            nowtype: t.data.currtype
        }) : t.setData({
            nowtype: t.data.detialList.desc
        }), t.data.cont ? t.setData({
            nowcont: t.data.cont
        }) : t.setData({
            nowcont: t.data.detialList.content
        }), t.data.pname || t.data.myphone || t.data.currtype || t.data.cont ? wx.showModal({
            title: "提示",
            content: "您确定修改该消息吗？",
            success: function(e) {
                if (e.confirm) {
                    var n = wx.getStorageSync("utoken");
                    a.sendRequest({
                        url: "?r=sad.edit&utoken=" + n + "&id=" + t.data.detialList.id,
                        data: {
                            desc: t.data.nowtype,
                            content: t.data.nowcont,
                            name: t.data.name,
                            mobile: t.data.nowphone
                        },
                        method: "POST",
                        success: function(a) {
                            wx.redirectTo({
                                url: "../myexhibit/myexhibit?issd=22222&sub=" + t.data.detialList.type
                            });
                        }
                    });
                } else e.cancel && t.setData({
                    pname: "",
                    phone: "",
                    currtype: "",
                    cont: ""
                });
            }
        }) : t.setData({
            cardf: !0
        });
    }
});