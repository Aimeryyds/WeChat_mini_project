var e = wx.getSystemInfoSync(), s = {
    env: "prd",
    cdnBase: "",
    data: {
        systeminfo: e,
        isIpx: JSON.stringify(e).indexOf("iPhone X") >= 0
    }
};

module.exports = s;