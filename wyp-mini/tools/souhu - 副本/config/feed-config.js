Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e;

!function(e) {
    e[e.auto = 0] = "auto", e[e.text = 1] = "text", e[e.textImage = 2] = "textImage", 
    e[e.video = 3] = "video", e[e.flow = 4] = "flow";
}(e = exports.ViewType || (exports.ViewType = {})), exports.AutoViewType = function(d) {
    return 1 == d ? e.text : 4 == d ? e.video : 2 == d || 3 == d ? e.textImage : e.text;
}, exports.feedConfig = {
    indexFeeds: [ {
        idTest: 1152,
        id: 16372,
        name: "推荐",
        spmCCode: "fd-recom",
        feed: "recommend",
        options: {
            topNum: 2
        }
    }, {
        idTest: 855,
        id: 16385,
        name: "视频",
        spmCCode: "fd-vd",
        feed: "video",
        options: {
            picWidth: 375,
            picHeight: 210,
            viewType: e.video
        }
    }, {
        idTest: 1153,
        id: 16373,
        name: "资讯",
        spmCCode: "fd-info"
    }, {
        idTest: 1154,
        id: 16374,
        name: "军事",
        spmCCode: "fd-mil"
    }, {
        idTest: 1155,
        id: 16375,
        name: "八卦",
        spmCCode: "fd-gossip"
    }, {
        idTest: 1156,
        id: 16376,
        name: "养生",
        spmCCode: "fd-ys"
    }, {
        idTest: 1157,
        id: 16377,
        name: "揭秘",
        spmCCode: "fd-jm"
    }, {
        idTest: 1158,
        id: 16378,
        name: "女性",
        spmCCode: "fd-lady"
    }, {
        idTest: 1159,
        id: 16379,
        name: "生活",
        spmCCode: "fd-life"
    }, {
        idTest: 1160,
        id: 16380,
        name: "股市",
        spmCCode: "fd-stock"
    }, {
        idTest: 1161,
        id: 16381,
        name: "科技",
        spmCCode: "fd-it"
    }, {
        idTest: 1162,
        id: 16382,
        name: "体育",
        spmCCode: "fd-sports"
    }, {
        idTest: 1163,
        id: 16383,
        name: "教育",
        spmCCode: "fd-learning"
    }, {
        idTest: 1164,
        id: 16384,
        name: "星座",
        spmCCode: "fd-xz"
    } ]
};