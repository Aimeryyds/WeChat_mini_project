getApp();

Component({
    properties: {
        upload_progress: {
            type: Number,
            value: 0
        },
        imgUrl: {
            type: String,
            value: ""
        },
        count: {
            type: Number,
            value: 1,
            observer: function(e, t) {
                return e > 9 ? 9 : e < 1 ? 1 : void 0;
            }
        },
        uploadUrl: {
            type: String,
            value: "https://api2.wii.qq.com/utils/fileupload/image"
        },
        isShow: {
            type: Boolean,
            value: !0
        },
        hasEvent: {
            type: Boolean,
            value: !0
        },
        size: {
            type: Number,
            value: 2
        }
    },
    data: {},
    attached: function() {},
    ready: function() {},
    methods: {
        uploadHook: function(e) {
            var t = this;
            wx.chooseImage({
                count: t.data.count,
                sizeType: [ "original", "compressed" ],
                sourceType: [ "album", "camera" ],
                success: function(e) {
                    for (var a = e.tempFilePaths, i = 0; i < a.length; i++) {
                        var o = a[i];
                        try {
                            o.match(/(http:\/\/tmp\/)(.+)/)[2];
                        } catch (e) {
                            o.match(/(wxfile:\/\/)(.+)/)[2];
                        }
                        wx.uploadFile({
                            url: t.data.uploadUrl,
                            filePath: o,
                            name: "file",
                            header: {
                                WXAPP: "qq.com"
                            },
                            success: function(e) {
                                var a = (e = JSON.parse(e.data)).data.size[t.data.size];
                                e.data.image_url = e.data.image_url.replace(/\/[0-9]+(?=[^0-9]*$)/, "/" + a), t.setData({
                                    imgUrl: e.data.image_url
                                }), t._emitEvents(e);
                            },
                            fail: function(e) {
                                wx.showToast({
                                    title: e.msg,
                                    image: "none",
                                    duration: 2e3
                                });
                            }
                        });
                    }
                }
            });
        },
        _emitEvents: function(e) {
            this.triggerEvent("wiiUploadEvent", e);
        }
    }
});