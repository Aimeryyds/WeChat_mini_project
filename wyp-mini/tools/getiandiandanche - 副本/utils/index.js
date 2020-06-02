require("https.js");

module.exports = {
    ShowMSG: function() {
        wx.getStorageSync("uid") ? wx.navigateTo({
            url: "../actCenter/index"
        }) : this.NotLogin();
    }
};