require("../../netdiisk_requestapi/setPcode.js");

var e = [ {
    path: "/pages/netdisk_actjump/actJump?action=shareshow&frametype=0&id=569281540179&uk=4080195060&token=ed35009bc0f667735dfc2125821d3a1c",
    name: "去主端小程序-活动中间页卡片"
}, {
    path: "/pages/netdisk_share/share?to=share&surl=1jRtZA2-0U9uLRR4w4mwwbQ",
    name: "去主端小程序-外链分享页卡片"
} ], a = e.map(function(e) {
    return e.name;
}), t = {
    data: {
        sharePath: e[0].path,
        shareTitle: e[0].name,
        index: 0,
        pathTypes: a,
        pathMaps: e
    },
    bindKeyInput: function(e) {
        this.setData({
            sharePath: e.detail.value
        });
    },
    setShare: function(e) {
        wx.showShareMenu();
    },
    gotoPath: function() {
        wx.navigateTo({
            url: this.data.sharePath
        });
    },
    onGotUserInfo: function(e) {
        console.log(e.detail.errMsg), console.log(e.detail.userInfo), console.log(e.detail.rawData);
    },
    bindPickerChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value);
        var a = e.detail.value;
        this.setData({
            index: a,
            sharePath: this.data.pathMaps[a].path,
            shareTitle: this.data.pathMaps[a].name
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: this.data.shareTitle,
            path: this.data.sharePath,
            imageUrl: "https://hiphotos.baidu.com/fex/%70%69%63/item/5d6034a85edf8db13cc4d3020423dd54574e74ea.jpg"
        };
    },
    getMessageFile: function() {
        wx.getFileSystemManager();
        console.log(wx.env.USER_DATA_PATH), wx.chooseMessageFile({
            count: 10,
            type: "all",
            success: function(e) {
                console.log(e);
            }
        });
    },
    getVideo: function() {
        wx.chooseVideo({
            sourceType: [ "album", "camera" ],
            maxDuration: 60,
            camera: "back",
            success: function(e) {
                console.log(e.tempFilePath);
            }
        });
    },
    getImg: function() {
        var e = wx.getFileSystemManager();
        wx.chooseImage({
            sourceType: [ "album", "camera" ],
            maxDuration: 60,
            camera: "back",
            success: function(a) {
                e.readFile({
                    filePath: a.tempFilePaths[0],
                    encoding: "base64",
                    success: function(e) {
                        console.log(e);
                    }
                }), console.log(a.tempFilePaths);
            }
        });
    },
    panOrder: function() {}
};

Page(t);