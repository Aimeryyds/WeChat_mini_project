Object.defineProperty(exports, "__esModule", {
    value: !0
});

var u = /[\\\/\:\*\?'<>\|]+/gi, D = /(?:[\xA9\xAE\u2122\u23E9-\u23EF\u23F3\u23F8-\u23FA\u24C2\u25B6\u2600-\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|\uD83E[\uDD00-\uDDFF])+/g;

exports.validation = {
    TextValidationCheck: function(e) {
        return u.test(e) ? "文件名不能包含非法字符" : D.test(e) ? "文件名不能包含表情" : "" === e ? "文件名不能为空" : "legal";
    }
};