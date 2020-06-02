Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../utils/utils"), t = require("../../utils/spm/index"), a = require("../../api/sh");

Page({
    data: {
        aCode: t.default.Config.spmCode.spma,
        bCode: t.default.Config.spmCode.spmb[404],
        pvId: e.getPvId(),
        spmPre: ""
    },
    onLoad: function(e) {
        var t = this;
        this.sendAction(8729), this.data.spmPre = e.spm || "", setTimeout(function() {
            a.sh.redirectTo({
                url: "../index/index?spm=" + t.data.aCode + "." + t.data.bCode + ".0.0." + t.data.pvId
            });
        }, 3e3);
    },
    onShow: function() {
        this.sendAction(8729);
    },
    onHide: function() {
        this.sendPagePv();
    },
    onUnload: function() {
        this.sendPagePv();
    },
    sendPagePv: function() {
        t.default.sendPv({
            bCode: this.data.bCode,
            pvId: this.data.pvId,
            spm_pre: this.data.spmPre,
            page_info: {
                page_type_id: e.getPageType("404")
            },
            refer_page_info: {
                page_type_id: this.data.spmPre && e.getPageType(this.data.spmPre.split(".")[1])
            }
        });
    },
    sendAction: function(a, d) {
        t.default.sendAction({
            actionCode: a,
            bCode: this.data.bCode,
            page_info: {
                page_type_id: e.getPageType("404")
            },
            refer_page_info: {
                page_type_id: this.data.spmPre && e.getPageType(this.data.spmPre.split(".")[1])
            },
            clkParam: d,
            pvId: this.data.pvId
        });
    }
});