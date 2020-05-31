require("../../netdisk_utils/transform.js");

var e = require("../../netdisk_utils/wxApiToPromise.js"), a = require("../../netdisk_utils/calculate.js"), i = function(a, i) {
    var d = "";
    (0, e.getImageInfo)(a).then(function(e) {
        var a = e.width, o = e.height, r = o / a;
        d = r > 1 && o > 240 ? "width: 100%; height: " + 750 * r + "rpx" : r <= 1 && a > 300 ? "width: " + 600 / r + "rpx; height: 100%; left: " + (750 - 600 / r) / 2 + "rpx" : "width: " + a + "rpx; height: " + o + "rpx; top: " + (600 - o) / 2 + "rpx; left: " + (750 - a) / 2 + "rpx", 
        wx.toasthide(), -1 === e.height && -1 === e.width ? t(i) : i.setData({
            thumbStyle: d,
            isMediaMore: i.data.isMediaMore,
            mediaType: i.data.mediaType,
            showThumb: i.data.showThumb,
            videoName: i.data.videoName,
            videoSize: i.data.videoSize
        });
    }, function() {
        wx.toasthide(), t(i);
    });
}, t = function(e) {
    var a = "";
    a = "video" === e.data.mediaType ? "background: url('https://staticwx.cdn.bcebos.com/mini-program/images/bg_video_default.png') no-repeat center;background-size:100% 600rpx;" : "background: url('https://staticwx.cdn.bcebos.com/mini-program/images/default_map.png') no-repeat center;background-size:100% 600rpx;", 
    e.setData({
        mediaBgStyle: a,
        isMediaMore: e.data.isMediaMore,
        mediaType: e.data.mediaType,
        videoName: e.data.videoName,
        videoSize: e.data.videoSize
    });
};

module.exports = {
    filterListMedia: function(e) {
        var a = [];
        return e.map(function(e) {
            3 == +e.category && a.push(e);
        }), {
            imgList: a
        };
    },
    initSnapShots: function(e, t, d) {
        var o = e.imgList;
        if (o.length > 1 && (t.data.isMediaMore = !0), o.length > 0) {
            t.data.mediaType = "image", t.data.shareType = "image", wx.log.snapshoot.snapshootimage.send();
            var r = o[0];
            t.data.showThumb = (0, a.getOriginImgUrl)(r.thumbs.url3);
        }
        i(t.data.showThumb, t);
    }
};