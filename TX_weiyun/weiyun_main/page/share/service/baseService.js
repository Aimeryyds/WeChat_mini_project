function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var r = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, i, r) {
        return i && e(t.prototype, i), r && e(t, r), t;
    };
}(), n = require("../../../external/mta_analysis.js"), a = require("../../../common/request.js"), o = require("../../../common/md.js"), s = require("../../../external/fileType.js").getTypeByName, l = require("../../../external/EventEmitter.js"), u = require("../../../external/format.js"), h = u.size, c = u.longTime, _ = require("../../../common/error.js").format, f = function(u) {
    function f(i) {
        e(this, f);
        var r = t(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
        return r.Page = i, r.shareKey = r.Page.data.shareKey, r.shareDirKey = r.Page.data.shareDirKey, 
        r.withinDir = Boolean(r.shareDirKey), r.constants = {
            OS_INFO: "wxa_wy",
            BROWSER_INFO: "wxa"
        }, r;
    }
    return i(f, l), r(f, [ {
        key: "isSingle",
        value: function() {
            return Boolean(this.Page.data.singleFile);
        }
    }, {
        key: "isMulti",
        value: function() {
            return Boolean(this.Page.data.multiFileInfo);
        }
    }, {
        key: "loadWyUserInfo",
        value: function() {
            return a.webapp({
                cmd: "DiskUserInfoGet",
                data: {
                    is_get_weiyun_flag: !0
                }
            });
        }
    }, {
        key: "loadShareInfo",
        value: function(e) {
            var t = e.start;
            return this.withinDir ? a.webapp({
                cmd: "WeiyunShareDirList",
                data: {
                    dir_key: this.shareDirKey,
                    share_key: this.shareKey,
                    get_type: 0,
                    start: t || 0,
                    count: 100,
                    sort_field: 0,
                    get_abstract_url: !0
                }
            }) : a.webapp({
                cmd: "WeiyunShareView",
                data: {
                    os_info: this.constants.OS_INFO,
                    browser: this.constants.BROWSER_INFO,
                    share_key: this.shareKey,
                    local_page_context: t || ""
                }
            });
        }
    }, {
        key: "loadDownloadURL",
        value: function(e) {
            var t = e.id, i = e.name, r = e.pdirKey;
            return a.webapp({
                cmd: "WeiyunShareBatchDownload",
                data: {
                    share_key: this.shareKey,
                    download_type: 14,
                    file_list: [ {
                        file_id: t,
                        filename: i,
                        pdir_key: r
                    } ]
                }
            }).then(function(e) {
                var t = (((e || {}).file_list || [])[0] || {}).https_download_url;
                if (t) return t.replace(/(fname=[^&]+)&*(.*)/, function(e, t, i) {
                    return ("" === i ? "" : i + "&") + t;
                });
                throw _({
                    msg: "downloadURL is empty: " + t
                });
            }).catch(function(e) {
                throw o.log("[share page]: fail, loadDownloadURL"), o.log("more info: " + e.message), 
                o.write(), e;
            });
        }
    }, {
        key: "loadCloudPlayInfo",
        value: function(e) {
            var t = e.id, i = e.pdirKey;
            return a.webapp({
                cmd: "WeiyunSharePartDownload",
                data: {
                    download_type: 20,
                    share_key: this.shareKey,
                    file_list: [ {
                        file_id: t,
                        pdir_key: i
                    } ]
                }
            });
        }
    }, {
        key: "doSave",
        value: function(e) {
            var t = e.dirList, i = e.fileList, r = e.noteList, o = e.isSaveAll, s = e.dstPpdirKey, l = e.dstPdirKey;
            return a.webapp({
                cmd: "WeiyunSharePartSaveData",
                msgHead: {
                    device_info: JSON.stringify({
                        browser: this.constants.BROWSER_INFO
                    })
                },
                data: {
                    os_info: this.constants.OS_INFO,
                    browser: this.constants.BROWSER_INFO,
                    share_key: this.shareKey,
                    dir_list: t,
                    file_list: i,
                    note_list: r,
                    dst_ppdir_key: s,
                    dst_pdir_key: l,
                    is_save_all: o
                }
            }).then(function(e) {
                return n.Event.stat("baocun", {
                    sharesavesuccess: "true"
                }), e;
            }).catch(function(e) {
                if (-1 !== [ 114513, 114514, 24301 ].indexOf(e.code)) return n.Event.stat("baocun", {
                    sharesavesuccess: "true"
                }), e;
                throw e;
            });
        }
    }, {
        key: "fileFormat",
        value: function(e) {
            var t = e.file_id, i = this.withinDir ? e.filename : e.file_name, r = e.file_size, n = this.withinDir ? this.shareDirKey : e.pdir_key, a = s(i), o = this.withinDir ? f.getUsablePreviewURL(a, e.ext_info.https_url, 1024) : f.getUsablePreviewURL(a, e.https_thumb_url || e.video_thumb, 1024), l = this.withinDir ? f.getUsablePreviewURL(a, e.ext_info.https_url, 128) : f.getUsablePreviewURL(a, e.https_thumb_url || e.video_thumb, 128), u = "video" === a ? this.withinDir ? e.ext_info.long_time / 1e3 : e.long_time / 1e3 : 0;
            return {
                id: t,
                type: a,
                name: i,
                size: r,
                pdirKey: n,
                previewURL: o,
                thumbURL: l,
                videoDuration: u,
                picWidth: "pic" === a ? this.withinDir ? e.ext_info.width : e.file_ext_info.width : 0,
                picHeight: "pic" === a ? this.withinDir ? e.ext_info.height : e.file_ext_info.height : 0,
                sizeText: h(e.file_size),
                videoDurationText: c(u),
                iconImageSrc: "/img/filetype_icons/ico_" + ("vid" === a ? "video" : a) + "_small.svg",
                selected: !1
            };
        }
    }, {
        key: "dirFormat",
        value: function(e) {
            var t = this.withinDir ? this.shareDirKey : e.pdir_key, i = this.withinDir ? (e.dir_detail_info || {}).total_file_size || 0 : e.dir_file_size, r = this.withinDir ? (e.dir_detail_info || {}).total_dir_cnt + (e.dir_detail_info || {}).total_file_cnt : e.total_dir_count + e.total_file_count;
            return {
                id: e.dir_key,
                type: "folder",
                name: e.dir_name,
                size: i,
                totalCount: r,
                sizeText: h(i),
                pdirKey: t,
                dirCount: e.total_dir_count,
                fileCount: e.total_file_count,
                iconImageSrc: "/img/filetype_icons/ico_folder_small.svg",
                selected: !1
            };
        }
    }, {
        key: "noteFormat",
        value: function(e) {
            return e;
        }
    }, {
        key: "setValueByKey",
        value: function(e, t) {
            var i = Object.create(null);
            i[e] = t, this.Page.setData(i);
        }
    }, {
        key: "appendArray",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments[1];
            if (0 !== e.length) {
                var i = this.Page.data;
                t.split(".").forEach(function(e) {
                    i = i[e];
                });
                for (var r = i.length, n = r + e.length - 1, a = Object.create(null), o = r; o <= n; o++) a[t + "[" + o + "]"] = e[o - r];
                this.Page.setData(a);
            }
        }
    } ]), f;
}();

f.getUsablePreviewURL = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 64;
    if (!t) return "";
    switch (e) {
      case "pic":
        return t + (t.indexOf("?") > -1 ? "&size=" + i : "?size=" + i);

      case "video":
        return (t + "/" + i).replace(/^(http:|https:)/, "https:");
    }
}, module.exports = f;