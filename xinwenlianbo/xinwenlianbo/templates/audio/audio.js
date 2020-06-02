module.exports = {
    songToggle: function(a) {
        console.log("进入点击方法"), 0 == that.data.isAudio ? (audioManager.pause(), that.setData({
            isAudio: !0
        })) : (audioManager.play(), that.setData({
            isAudio: !1
        }));
    }
};