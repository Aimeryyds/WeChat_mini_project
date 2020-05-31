Component({
    properties: {
        shorturl: {
            type: String,
            value: ""
        },
        width: {
            type: Number,
            value: 430
        },
        pwd: {
            type: String,
            value: ""
        }
    },
    ready: function() {
        this.getQRCode();
    },
    data: {
        src: ""
    },
    methods: {
        getQRCode: function() {
            var t = this, a = this.data.shorturl, e = this.data.width, d = this.data.pwd, o = "https://pan.baidu.com/api/wechat/qrcode?shorturl=" + a + "&width=" + e + "&source=0&pwd=" + d;
            wx.downloadFile({
                url: o,
                success: function(a) {
                    var d = wx.createCanvasContext("myCanvas", t);
                    d.drawImage(a.tempFilePath, 0, 0, e, e), d.draw();
                }
            });
        },
        downLoadQRCode: function() {}
    }
});