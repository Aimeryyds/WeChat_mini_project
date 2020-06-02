Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getChannelKey = function() {
    var X = {}, B = (0, e.getFromChannel)(), n = r.globalData.baseUrl;
    X = n.includes("test2") || n.includes("stg2") ? L : n.includes("test") || n.includes("stg1") ? t : s;
    return X[B];
}, require("../@babel/runtime/helpers/Arrayincludes");

var e = require("./channel.js"), r = getApp(), s = {
    WXXCX: "dz7GfkjArI2vI0qf",
    WXXCX_PAKJ: "j8w9PMhIZHatKbdV",
    LLB: "VIrBLCka4RX51U8R",
    LLB1: "j3tNFiiiZUIHBMC9",
    LLB2: "PIuNr2cHIrGysCHD",
    LLB3: "ExORrpesQDqjImEX",
    LLB4: "Vq5949jNfVbfWy8m",
    LLB5: "Iw0Hg5oQtP4KYq3D",
    LLB6: "c4MbZwdQs0dogh5f",
    BDXCX: "NANep1cbDWs7cbtv"
}, t = {
    WXXCX: "UVV64QjHNbRyYygu",
    WXXCX_PAKJ: "BGrawenxsI8yydFS",
    LLB1: "pQgbijhmivgI5tAf",
    LLB2: "5sBbcjfSHsUkVKRa",
    LLB3: "jIxr4ymf4uLXenjY",
    LLB4: "o0dBxup1JN0TBFlg"
}, L = {
    WXXCX: "AXWmIiqUDaNGBcFE",
    WXXCX_PAKJ: "BGrawenxsI8yydFS"
};