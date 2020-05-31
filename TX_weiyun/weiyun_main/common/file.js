function e(e) {
    g[e.dir_key || e.file_id] = e;
}

function i(e) {
    return g[e] || null;
}

function t(e) {
    var i = (e || "").match(v);
    return i ? i[1].toLowerCase() : null;
}

function _(e) {
    return e.toLowerCase() in u;
}

function r(e) {
    return e.toLowerCase() in h;
}

function o(e) {
    return e.toLowerCase() in c;
}

function m(e, i) {
    return i && a[i] ? e in a[i] : e in p;
}

var n = require("../external/fileType.js").getTypeByName, f = require("../external/format.js"), l = f.prettyDate, s = f.size, d = wx.getSystemInfoSync(), u = {
    jpg: 1,
    jpeg: 1,
    gif: 1,
    png: 1,
    bmp: 1,
    pic: 1
}, p = {
    xls: 1,
    xlsx: 1,
    doc: 1,
    docx: 1,
    ppt: 1,
    pptx: 1,
    pdf: 1,
    txt: 1
}, a = {
    doc: {
        doc: 1,
        docx: 1
    },
    xls: {
        xls: 1,
        xlsx: 1
    },
    ppt: {
        ppt: 1,
        pptx: 1
    },
    pdf: {
        pdf: 1
    }
}, c = {
    video: 1,
    swf: 1,
    dat: 1,
    mov: 1,
    mp4: 1,
    "3gp": 1,
    avi: 1,
    wma: 1,
    rmvb: 1,
    wmf: 1,
    mpg: 1,
    rm: 1,
    asf: 1,
    mpeg: 1,
    mkv: 1,
    wmv: 1,
    flv: 1,
    f4a: 1,
    webm: 1
}, x = {
    mov: 1,
    mp4: 1,
    mpg: 1,
    mpeg: 1,
    "3gp": 1
}, h = {
    mp3: 1,
    wmv: 1,
    acc: 1,
    flac: 1
}, v = /\.([^.]+)$/, g = {};

module.exports = {
    setStore: e,
    getStore: i,
    removeStore: function(e) {
        g[e.dir_key || e.file_id] = null, delete g[e.dir_key || e.file_id];
    },
    format: function(f, d, u, p) {
        var a, c, x = [];
        f instanceof Array || (f = [ f ]);
        for (var h = 0, v = f.length; h < v; h++) (a = i((c = f[h]).dir_key || c.file_id) || {}).pdir_key = c.pdir_key || u, 
        a.ppdir_key = c.ppdir_key || p, a.ext_info || (a.ext_info = {}), c.dir_key && (a.dir_key = c.dir_key, 
        a.dir_name = c.dir_name, a.dir_ctime = c.dir_ctime, a.dir_mtime = c.dir_mtime), 
        c.file_id && (a.file_id = c.file_id, a.filename = c.filename, a.file_size = c.file_size, 
        a.file_ctime = c.file_ctime, a.file_mtime = c.file_mtime), a.type = c.type || d, 
        a.ext = c.ext || t(c.filename || c.file_name), c.file_read_size ? a.file_read_size = c.file_read_size : c.file_size && (a.file_read_size = s(c.file_size)), 
        c.create_time ? a.create_time = c.create_time : (c.file_ctime || c.dir_ctime) && (a.create_time = l(c.file_ctime || c.dir_ctime, "YY-MM-DD hh:ii")), 
        c.modify_time ? a.modify_time = c.modify_time : (c.file_mtime || c.dir_mtime) && (a.modify_time = l(c.file_mtime || c.dir_mtime, "YY-MM-DD hh:ii")), 
        a.icon = a.dir_key ? "folder" : c.icon || n(c.filename || c.file_name), void 0 === c.is_image ? a.is_image = !!a.ext && _(a.ext) : a.is_image = c.is_image, 
        void 0 === c.is_video ? a.is_video = !!a.ext && o(a.ext) : a.is_video = c.is_video, 
        void 0 === c.is_audio ? a.is_audio = !!a.ext && r(a.ext) : a.is_audio = c.is_audio, 
        void 0 === c.is_doc ? a.is_doc = !!a.ext && m(a.ext) : a.is_doc = c.is_doc, (c.long_time || c.ext_info && c.ext_info.long_time) && (a.long_time = c.long_time || c.ext_info.long_time), 
        c.ext_info && c.ext_info.thumb_url && (a.ext_info.thumb_url = c.ext_info.thumb_url.replace(/^http:\/\//, "https://")), 
        c.ext_info && c.ext_info.https_url && (a.ext_info.https_url = c.ext_info.https_url.replace(/^http:\/\//, "https://")), 
        c.https_thumb_url && (a.https_thumb_url = c.https_thumb_url), c.thumb_url && (a.thumb_url = c.thumb_url.replace(/^http:\/\//, "https://")), 
        c.video_thumb && (a.video_thumb = c.video_thumb.replace(/^http:\/\//, "https://")), 
        a.download_progress = 0, x.push(a), e(a);
        return x;
    },
    filter: function(e, i) {
        var _, r, o = [];
        i = i.toLowerCase(), e instanceof Array || (e = [ e ]);
        for (var n = 0, f = e.length; n < f; n++) _ = e[n], "image" === i ? _ && _.is_image && _.ext_info && _.ext_info.https_url && !_.ext_info.https_url.includes("&size=") && (_.preview = _.ext_info.https_url + "&size=1024*1024", 
        o.push(_)) : (r = _.ext ? _.ext : _.filename ? t(_.filename) : null) && m(r, i) && o.push(_);
        return o;
    },
    isPreviewVideo: function(e) {
        return e.toLowerCase() in x;
    },
    isImage: _,
    isVideo: o,
    isDoc: m,
    isOutOfLimit: function(e) {
        return !1;
    },
    isQQPlatformLowerVersion: function(e) {
        return "qq" === d.AppPlatform && d.version < e;
    }
};