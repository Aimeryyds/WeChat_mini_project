var e = require("./md.js"), r = {
    "openDocument:fail filetype not supported": "暂不支持预览该格式文件，请保存到微云APP后进行预览"
};

module.exports = {
    format: function(t) {
        if (e.log("[error.format]: error: " + JSON.stringify(t)), (t = t || {}).errMsg) {
            var o = t.errMsg, s = o.split(":")[0], a = void 0;
            return a = s ? "wx:" + s : "default", r[o] && (o = r[o]), {
                type: a,
                message: o,
                code: 900
            };
        }
        return t.message = t.msg || t.message || "", t.code = t.code || t.ret || t.retcode || 1e3, 
        t.type = "default", t;
    }
};