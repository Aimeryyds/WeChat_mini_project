Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = {
    name: "constant",
    getter: {
        reqStatus: function() {
            return {
                pending: "pending",
                fullfilled: "fullfilled",
                rejected: "rejected"
            };
        },
        pageStatus: function() {
            return {
                loading: "loading",
                ready: "ready",
                error: "error",
                delete: "delete",
                noNetwork: "noNetwork"
            };
        },
        tabItem: function() {
            return {
                home: "home",
                newsflash: "newsflash",
                mime: "mime"
            };
        },
        HAS_READ_NEWSLIST: function() {
            return "HAS_READ_NEWSLIST";
        },
        DISLIKE_NEWSLIST: function() {
            return "DISLIKE_NEWSLIST";
        },
        ZWB_HAS_READ_LIST: function() {
            return "ZWB_HAS_READ_LIST";
        }
    }
};

exports.default = e;