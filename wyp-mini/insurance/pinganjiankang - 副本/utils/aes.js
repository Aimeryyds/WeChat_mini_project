var e = require("../pages/cryptojs/cryptojs.js").Crypto;

function t(t, r) {
    var s = new e.mode.CBC(e.pad.pkcs7), n = e.util.base64ToBytes(t), c = e.charenc.UTF8.stringToBytes(r), o = e.charenc.UTF8.stringToBytes("1234567890123456");
    return e.AES.decrypt(n, c, {
        asBpytes: !0,
        mode: s,
        iv: o
    });
}

module.exports = {
    encrypt: function(t, r) {
        var s = new e.mode.CBC(e.pad.pkcs7), n = e.charenc.UTF8.stringToBytes(t), c = e.charenc.UTF8.stringToBytes(r), o = e.charenc.UTF8.stringToBytes("1234567890123456");
        return e.AES.encrypt(n, c, {
            iv: o,
            mode: s,
            asBpytes: !0
        });
    },
    decrypt: t,
    getData: function(e, r) {
        return JSON.parse(t(e, r));
    }
};