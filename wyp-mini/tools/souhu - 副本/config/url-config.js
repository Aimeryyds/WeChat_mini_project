Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    host: "https://m.sohu.com",
    articlePath: "/a",
    picturePath: "/picture",
    createPictureUrl: function(t) {
        return "" + this.host + this.picturePath + "/" + t;
    },
    createArticleUrl: function(t) {
        return "" + this.host + this.articlePath + "/" + t;
    }
};