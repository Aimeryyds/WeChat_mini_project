Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../config/base-config"), a = "https://a.track.sohu.com/", o = {
    pv: a + "sv",
    ev: a + "se",
    action: a + "sa"
}, i = e.baseConfig.appId, d = e.baseConfig.appName, n = e.baseConfig.spmA, r = {
    index: "home",
    article: "content",
    "video-article": "vd-land",
    404: "404",
    picture: "pic-land",
    author: "author"
}, t = {
    index: {
        menu: "nav",
        topnews: "d-news",
        hotrank: "topranks",
        feeds: [ "recommend", "video", "menu", "shop", "snack", "diet", "baking", "drink" ]
    },
    article: {
        richtext: "content",
        relatedrec: "fd-link",
        navigator: "nav"
    }
}, s = {
    firstSlide: "8404",
    halfView: "8405",
    endView: "8406",
    videoPlay: "8042",
    videoPause: "8043",
    videoEnded: "8303",
    adError: "8796",
    adLoad: "8804",
    clickShare: "8746"
};

exports.default = {
    appName: d,
    appId: i,
    reportUrl: o,
    spmCode: {
        spma: n,
        spmb: r,
        spmc: t,
        acode: s
    }
};