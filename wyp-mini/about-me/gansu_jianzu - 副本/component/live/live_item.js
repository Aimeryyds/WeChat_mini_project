var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../behaviors/toast.js")), i = (require("../../utils/util.js"), require("../../network/api.js"));

Component({
    behaviors: [ e.default ],
    properties: {
        live: {
            type: Object
        },
        index: {
            type: Number
        }
    },
    ready: function() {},
    methods: {
        handleAddFavorite: function(e) {
            var t = this.data.live;
            this.setData({
                "live.isFavorite": 1,
                "live.favoriteUsers": t.favoriteUsers + 1
            });
            var a = new Date(), r = new Date(t.startTime.replace(/-/g, "/"));
            1 == t.status && (r - a) / 6e4 > 6 ? this.showToast("已加入收藏，直播开始前5分钟将收到提醒") : this.showToast("已加入收藏"), 
            (0, i.addLiveFavorite)({
                id: t.id,
                formId: e
            });
        },
        handleRemoveFavorite: function() {
            var e = this.data, t = e.live, a = e.index;
            this.setData({
                "live.isFavorite": 0,
                "live.favoriteUsers": t.favoriteUsers - 1
            }), this.showToast("已取消收藏"), this.triggerEvent("removefavorite", {
                index: a
            }, {
                composed: !0,
                bubbles: !0
            }), (0, i.removeLiveFavorite)({
                id: t.id
            });
        },
        handleFavorite: function(e) {
            var i = e.detail.formId;
            this.data.live.isFavorite ? this.handleRemoveFavorite() : this.handleAddFavorite(i);
        },
        handleTapLive: function(e) {
            if ("favoriteBtn" != e.target.id) {
                var i = this.data.live;
                wx.navigateTo({
                    url: "/pages/live/detail/index?id=" + i.id
                });
            }
        }
    }
});