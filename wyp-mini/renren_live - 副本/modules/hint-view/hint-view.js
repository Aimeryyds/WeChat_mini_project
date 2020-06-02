var t = null, n = null;

Component({
    properties: {},
    data: {},
    methods: {
        init: function(i) {
            t = this, n = i;
        },
        setHintView: function(n) {
            switch (t = this, n) {
              case 0:
                t.setData({
                    hintInfo: {
                        hintIsShow: !1,
                        hintImage: null,
                        hintMessage1: null,
                        hintMessage2: null,
                        hintButton: null
                    }
                });
                break;

              case 1:
                t.setData({
                    hintInfo: {
                        hintIsShow: !0,
                        hintImage: "/images/hint/hint-message-empty.png",
                        hintMessage1: "您还没有私聊记录",
                        hintMessage2: "快点去撩撩主播吧~",
                        hintButton: "点击重试"
                    }
                });
                break;

              case 2:
                t.setData({
                    hintInfo: {
                        hintIsShow: !0,
                        hintImage: "/images/hint/hint-rest.png",
                        hintMessage1: "额，加载失败了",
                        hintMessage2: "请稍后重新再试~",
                        hintButton: "点击重试"
                    }
                });
                break;

              case 3:
                t.setData({
                    hintInfo: {
                        hintIsShow: !0,
                        hintImage: "/images/hint/hint-no-network.png",
                        hintMessage1: "额，没有网络连接了",
                        hintMessage2: "请检查网络设置~",
                        hintButton: "点击重试"
                    }
                });
            }
        },
        onAgain: function(t) {
            n.onAgainCallback();
        }
    }
});