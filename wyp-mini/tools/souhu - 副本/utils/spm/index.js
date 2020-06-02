Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./util"), a = require("./config"), i = require("../systemInfo"), t = a.default.spmCode.spma, p = "", o = e.getAcodeE(), d = new Date().getTime() + e.generateRand(7), n = {
    os_type: i.systemData.os_type,
    os_version: i.systemData.os_version,
    device_type: i.systemData.device_type,
    device_brand: i.systemData.device_brand,
    device_model: i.systemData.device_model,
    device_res: i.systemData.device_res,
    SUV: i.systemData.SUV
}, r = {
    pv: [],
    ev: [],
    action: []
}, s = {
    SUV: i.systemData.SUV,
    Config: a.default,
    spmACode: t,
    sendPv: function(a) {
        var i = a.bCode, n = void 0 === i ? "" : i, s = a.spm_pre, v = void 0 === s ? "" : s, _ = a.scm_pre, f = void 0 === _ ? "" : _, m = a.pvId, c = void 0 === m ? "" : m, l = a.page_info, g = void 0 === l ? {} : l, u = a.refer_page_info, D = void 0 === u ? {} : u;
        p = n;
        var y = c || e.generatePvid();
        o = e.getAcodeE(), r.pv.push({
            timestamp: +new Date(),
            session_id: d,
            net: void 0,
            spm_cnt: t + "." + p + ".0.0." + o,
            spm_pre: v || "",
            scm_pre: f || "",
            lng: "",
            lat: "",
            page_info: g || {},
            refer_page_info: D || {},
            pv_id: y
        });
    },
    sendActionDirect: function(i) {
        var r = i.actionCode, s = void 0 === r ? "" : r, v = i.clkParam, _ = void 0 === v ? {} : v, f = i.pvId, m = void 0 === f ? "" : f, c = i.spm_pre, l = void 0 === c ? "" : c, g = i.cdCode, u = void 0 === g ? "0.0" : g, D = i.bCode, y = void 0 === D ? "" : D, I = i.page_info, P = void 0 === I ? {} : I, C = i.refer_page_info, w = void 0 === C ? {} : C, x = m || e.generatePvid();
        p = y, e.sendReport(a.default.reportUrl.action, {
            report_time: +new Date(),
            app_version: "1.3.0",
            app_name: a.default.appName,
            app_id: a.default.appId,
            device_info: n,
            action_info: [ {
                timestamp: +new Date(),
                session_id: d,
                net: void 0,
                spm_cnt: t + "." + p + "." + u + "." + o,
                spm_pre: l || "",
                acode: s,
                aext: _,
                page_info: P || {},
                refer_page_info: w || {},
                lng: "",
                lat: "",
                pv_id: x
            } ]
        });
    },
    sendAction: function(a) {
        var i = a.actionCode, n = void 0 === i ? "" : i, s = a.clkParam, v = void 0 === s ? {} : s, _ = a.pvId, f = void 0 === _ ? "" : _, m = a.spm_pre, c = void 0 === m ? "" : m, l = a.cdCode, g = void 0 === l ? "0.0" : l, u = a.bCode, D = void 0 === u ? "" : u, y = a.page_info, I = void 0 === y ? {} : y, P = a.refer_page_info, C = void 0 === P ? {} : P, w = f || e.generatePvid();
        p = D;
        r.action.push({
            timestamp: +new Date(),
            session_id: d,
            net: void 0,
            spm_cnt: t + "." + p + "." + g + "." + o,
            spm_pre: c || "",
            acode: n,
            aext: v,
            page_info: I || {},
            refer_page_info: C || {},
            lng: "",
            lat: "",
            pv_id: w
        });
    },
    sendEv: function(a) {
        var i = void 0 === a ? {} : a, t = i.spm_pre, p = void 0 === t ? "" : t, o = i.scm_cnt, n = void 0 === o ? "" : o, s = i.spm_cnt, v = void 0 === s ? "" : s, _ = i.page_info, f = void 0 === _ ? {} : _, m = i.pvId, c = void 0 === m ? "" : m, l = i.refer_page_info, g = void 0 === l ? {} : l, u = i.ev_page_info, D = void 0 === u ? {} : u, y = c || e.generatePvid();
        r.ev.push({
            timestamp: +new Date(),
            session_id: d,
            net: void 0,
            spm_cnt: v || "",
            scm_cnt: n || "",
            spm_pre: p || "",
            lng: "",
            lat: "",
            page_info: f || {},
            refer_page_info: g || {},
            ev_page_info: D || {},
            pv_id: y
        });
    },
    generatePvid: e.generatePvid
}, v = function() {
    var t = i.systemData.userId;
    if (r.pv.length) {
        var p = e.setSpmParams(r.pv.splice(0));
        e.sendReport(a.default.reportUrl.pv, {
            report_time: +new Date(),
            app_name: a.default.appName,
            app_id: a.default.appId,
            app_version: "1.3.0",
            device_info: n,
            ext: {
                userId: t
            },
            pv_modules: p
        }, function() {});
    }
    if (r.ev.length) {
        var o = e.setSpmParams(r.ev.splice(0));
        e.sendReport(a.default.reportUrl.ev, {
            report_time: +new Date(),
            app_version: "1.3.0",
            app_name: a.default.appName,
            app_id: a.default.appId,
            device_info: n,
            ext: {
                userId: t
            },
            exp_info: o
        });
    }
    if (r.action.length) {
        var d = e.setSpmParams(r.action.splice(0));
        e.sendReport(a.default.reportUrl.action, {
            report_time: +new Date(),
            app_version: "1.3.0",
            app_name: a.default.appName,
            app_id: a.default.appId,
            device_info: n,
            ext: {
                userId: t
            },
            action_info: d
        });
    }
};

setInterval(function() {
    v();
}, 1e3), exports.default = s;