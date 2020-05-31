function t() {
    return n;
}

function e(t) {
    var e = (t || "").match(i);
    return e ? e[1].toLowerCase() : "";
}

function p(t) {
    return m[t] || r;
}

function a() {
    return r;
}

var r = "nor", n = "file", s = {
    doc: [ "doc", "docx", "wps", "docm", "dot", "dotx", "dotm", "rtf" ],
    xls: [ "xls", "xlsx", "xlsm", "xltx", "xltm", "xlam", "xlsb", "et" ],
    ppt: [ "ppt", "pptx", "dps", "pptm" ],
    pic: [ "jpg", "jpeg", "tif", "tiff", "png", "gif", "webp", "bmp", "exif", "raw", "image", "heic" ],
    vid: [ "avi", "mpg", "mpeg", "dat", "f4a", "webm", "mod", "avi", "mpe", "mpeg4", "wmv", "wmf", "asf", "ram", "m1v", "m2v", "mpe", "m4b", "m4p", "m4v", "vob", "divx", "ogm", "ssa", "rmvb", "rm", "3gp", "3g2", "3gp2", "3gpp", "flv" ],
    video: [ "mp4", "mov", "mkv" ],
    audio: [ "mp3", "wav", "wave", "acc", "aac", "aiff", "amr", "ape", "flac", "m4a", "mid", "midi", "ogg", "rtttl", "wma", "ram", "ra", "au", "xmf" ],
    flv: [ "fla", "swf" ],
    zip: [ "zip", "rar", "tar", "jar", "7z", "z", "7-zip", "ace", "lzh", "arj", "gzip", "bz2", "cab", "compress", "uue", "iso", "dmg" ],
    code: [ "ini", "css", "js", "java", "as", "py", "php", "c", "cpp", "h", "cs", "plist", "html", "htm", "xml", "ipe", "proto" ],
    note: [ "note" ],
    keynote: [ "key" ],
    ipa: [ "ipa" ],
    pdf: [ "pdf" ],
    txt: [ "txt", "text", "rp", "document" ],
    msg: [ "msg", "oft" ],
    apk: [ "apk" ],
    vsd: [ "vsd", "vsdx" ],
    sketch: [ "sketch" ],
    ps: [ "psd", "psb" ],
    ai: [ "ai", "eps", "svg" ],
    numbers: [ "numbers" ],
    font: [ "ttf", "opt", "fon", "ttc" ],
    pages: [ "pages" ],
    nor: [ "unknow", "srt", "ass", "chm", "hlp", "cnt", "asp", "bak", "bat", "exe", "exec", "dll", "xmin", "log", "msi", "old", "tmp" ],
    damaged: [ "filebroken" ],
    bt: [ "torrent" ]
}, o = [ "doc", "xls", "ppt", "note", "vsd", "pages", "keynote", "numbers", "msg", "zip", "pic", "video", "flv", "audio", "apk", "pdf", "txt", "ipa", "ps", "ai", "font", "code" ], i = /\.([^.]+)$/, m = {}, f = {};

for (var c in s) for (var g = s[c], l = 0, d = g.length; l < d; l++) m[g[l]] = c;

for (var v = 0, u = o.length; v < u; v++) {
    var x = s[o[v]];
    if (!x || !x.length) throw Error(o[v] + ' "canIdent" types must included in the keys of "typeMap"');
    for (var h = 0, b = x.length; h < b; h++) f[x[h]] = 1;
}

module.exports = {
    getTypeByExt: p,
    getTypeByName: function(r, n) {
        var s = void 0;
        return n ? t() : (s = n ? null : e(r)) ? p(s) : a();
    },
    getExtByName: e,
    getFolderType: t,
    getDefaultFileType: a,
    canIdentify: function(t) {
        return !!f[t];
    },
    reviseFileName: function(t, e) {
        var p = wx.getSystemInfoSync(), a = 17, r = 7;
        switch ("qq" === p.AppPlatform && p.version < "8.0.0" && (a = 8, r = 4), e) {
          case 1:
            return t.length > 24 ? [ t.substring(0, 8), "...", t.substring(t.length - 13) ].join("") : t;

          case 2:
            return t.length > a ? [ t.substring(0, r), "...", t.substring(t.length - r) ].join("") : t;
        }
    }
};