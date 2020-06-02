require("../../../../utils/server"), wx.getStorageSync("utoken");

Page({
    data: {
        images: []
    },
    chooseImage: function() {
        var e = this, a = [];
        wx.chooseImage({
            count: 5,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                var s = t.tempFilePaths;
                console.log(s), console.log("--------"), console.log(s[0]);
                for (var i = 0; i < s.length; i++) wx.uploadFile({
                    url: "https://tws.cnweisou.com/wxapi/index.php?r=wxapp.util.uploader&i=450",
                    filePath: s[i],
                    name: "file",
                    method: "POST",
                    header: {
                        "content-type": "multipart/form-data"
                    },
                    success: function(e) {
                        e.data;
                        a.i = e;
                    }
                });
                e.setData({
                    images: e.data.images.concat(s)
                }), e.data.images.length;
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
        var a = this, t = e.currentTarget.dataset.index, s = a.data.images;
        s.splice(t, 1), a.setData({
            images: s
        });
    }
});