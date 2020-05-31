Page({
    data: {
        src: ""
    },
    onLoad: function(a) {
        this.setData({
            src: "https://pan.baidu.com/wap/appeal?from=ios&verifyerrno=" + a.errno
        });
    }
});