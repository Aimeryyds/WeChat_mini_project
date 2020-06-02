Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    hotRank: "https://search.sohu.com/search/hot",
    getArticlePv: "https://v2.sohu.com/public-api/articles/pv",
    getFeed: "https://v2.sohu.com/integration-api/inner/mix/region/",
    getRecommend: "https://v2.sohu.com/integration-api/inner/pure/feedByRegion/",
    getArticleData: function(t) {
        return "https://v2.sohu.com/wap-article-api/article-author/" + t;
    },
    getGallery: "https://v2.sohu.com/public-api/album/",
    getAuthorInfo: function(t) {
        return "https://v2.sohu.com/author-page-api/authors/info?authorId=" + t;
    },
    getAuthorArticles: function(t) {
        return "https://v2.sohu.com/author-page-api/author-articles/wap/" + t;
    }
};