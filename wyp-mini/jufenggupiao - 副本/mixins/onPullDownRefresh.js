Object.defineProperty(exports, "__esModule", {
    value: true
});

var pullDown = {
    onPullDownRefresh: function onPullDownRefresh() {
        if (this.tab == 2) {
            this.$broadcast("get-stock-home");
        } else if (this.tab == 0) {
            this.$broadcast("get-live-data", "refresh");
        } else if (this.tab == 1) {
            this.$broadcast("get-myService-data");
        } else if (this.tab == 3) {
            this.$broadcast("load-more-question", "init");
        }
    }
};

exports.default = pullDown;