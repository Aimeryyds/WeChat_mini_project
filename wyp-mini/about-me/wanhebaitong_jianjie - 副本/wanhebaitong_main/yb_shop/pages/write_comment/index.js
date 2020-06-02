var a = getApp(), e = a.requirejs("core");

Page({
    data: {
        gray_star: "http://ddfwz.sssvip.net/asmce/yigou/gray-star.png",
        light_star: "http://ddfwz.sssvip.net/asmce/yigou/light-star.png",
        store_pic_array: [],
        score: [ 1, 1, 1, 1, 1 ],
        total_score: 0,
        url: getApp().globalData.api,
        config: getApp().config
    },
    score: function(a) {
        var t = e.pdata(a).index, o = t + 1, n = [ 1, 1, 1, 1, 1 ];
        for (var i in n) i <= t && (n[i] = 2);
        this.setData({
            score: n,
            total_score: o
        });
    },
    onLoad: function(a) {},
    onReady: function() {},
    onShow: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    formSubmit: function(a) {
        var t = this.data.total_score, o = a.detail.value;
        "" != o.info ? 0 != t ? (o.fraction = t, o.user_id = getApp().getCache("userinfo").uid, 
        o.app_id = getApp().globalData.appid, o.array_pic = this.data.store_pic_array, e.post("Index/WriteComment", o, function(a) {
            console.log(a), 0 == a.code ? e.alert("提交成功", function() {
                e.jump("", 5);
            }) : e.alert(a.msg);
        })) : e.alert("您还没有评分哦") : e.alert("内容不能为空！");
    },
    chooseImageTap: function() {
        var a = this;
        wx.showActionSheet({
            itemList: [ "从相册中选择", "拍照" ],
            itemColor: "#f7982a",
            success: function(e) {
                e.cancel || (0 == e.tapIndex ? a.chooseWxImage("album") : 1 == e.tapIndex && a.chooseWxImage("camera"));
            }
        });
    },
    chooseWxImage: function(e) {
        var t = this, o = a.siteInfo;
        wx.chooseImage({
            sizeType: [ "original", "compressed" ],
            sourceType: [ e ],
            success: function(a) {
                a.tempFilePaths.forEach(function(a) {
                    console.log(a), wx.uploadFile({
                        url: o.siteroot + "?i=" + o.uniacid + "&t=undefined&v=" + o.version + "&from=wxapp&c=entry&a=wxapp&do=index_uploadFile&path=comment&m=" + o.name + "&sign=1d917db727d0aa4e23ca117826fa3153",
                        filePath: a,
                        name: "file_upload",
                        success: function(a) {
                            if (console.log(a), null != a.data) {
                                var e = t.data.store_pic_array.concat(a.data);
                                t.setData({
                                    store_pic_array: e
                                });
                            }
                        }
                    });
                });
            }
        });
    },
    Image_del: function(a) {
        var t = this, o = e.pdata(a).index, n = t.data.store_pic_array;
        e.removeByValue(n, o, function(a) {
            t.setData({
                store_pic_array: a
            });
        });
    }
});