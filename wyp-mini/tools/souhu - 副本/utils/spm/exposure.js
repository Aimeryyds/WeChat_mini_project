Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../utils/utils"), e = require("../../api/sh"), o = [], a = {}, r = {}, s = {
    exposure: "0",
    disappear: "1"
};

exports.addExposure = function(t, r) {
    var s = r ? e.sh.createSelectorQuery().in(r) : e.sh.createSelectorQuery(), i = s.selectAll(t), p = s.selectViewport();
    a.bottom || p.boundingClientRect(function(t) {
        a.left = t.left, a.top = t.top, a.right = t.width, a.bottom = t.height;
    }).exec(), o.push(i);
};

var i = function(t, e) {
    return t.top < e.bottom && t.bottom > e.top && t.left < e.right && t.right > e.left;
};

exports.exposureCheck = function(e) {
    o.forEach(function(o) {
        o.fields({
            dataset: !0,
            rect: !0
        }, function(o) {
            o.forEach(function(o) {
                r[o.dataset.id] || i(o, a) && (r[o.dataset.id] = 1, "function" == typeof e && e({
                    spm: o.dataset.spm || "",
                    scm: o.dataset.scm || "",
                    ev_page_info: o.dataset.target && {
                        page_type_id: t.getPageType(o.dataset.target.split("|")[0]),
                        content_id: o.dataset.target.split("|")[1],
                        author_id: o.dataset.target.split("|")[2]
                    },
                    showType: s.exposure
                }));
            });
        }).exec();
    });
};