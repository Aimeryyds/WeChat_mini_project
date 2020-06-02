module.exports = {
    searchEvent: function(t) {
        console.log("执行event"), t.onSearchInput = function(e) {
            var a = e.detail.value;
            a.length > 0 ? t.setData({
                qtext: a
            }) : t.setData({
                qtext: ""
            }), console.log(" page.data.qtext=" + t.data.qtext);
        }, t.onClearInput = function() {
            t.setData({
                qtext: ""
            }), console.log(" page.data.qtext=" + t.data.qtext);
        }, t.onSearchConfirm = function() {
            console.log(" page.data.qtext=" + t.data.qtext);
            var e = getCurrentPages();
            e.length > 1 ? (e[e.length - 2], setTimeout(function() {
                wx.redirectTo({
                    url: "../search/search?key=" + t.data.qtext + "&type=0"
                });
            }, 800)) : setTimeout(function() {
                wx.redirectTo({
                    url: "../search/search?key=" + t.data.qtext + "&type=0"
                });
            }, 800);
        };
    },
    redirectTosearch: function(t) {
        var e = getCurrentPages();
        e.length > 1 ? (e[e.length - 2], setTimeout(function() {
            wx.redirectTo({
                url: "../search/search?key=" + t.data.qtext + "&type=0"
            });
        }, 800)) : setTimeout(function() {
            wx.redirectTo({
                url: "../search/search?key=" + t.data.qtext + "&type=0"
            });
        }, 800);
    }
};