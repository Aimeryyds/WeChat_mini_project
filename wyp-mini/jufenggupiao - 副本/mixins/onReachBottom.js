Object.defineProperty(exports, "__esModule", {
    value: true
});

var reachBottom = {
    onReachBottom: function onReachBottom() {
        if (this.tab == 3) {
            this.$broadcast("load-more-question");
        } else if (this.tab == 0) {
            this.$broadcast("get-live-data", "loadmore");
        }
    }
};

exports.default = reachBottom;