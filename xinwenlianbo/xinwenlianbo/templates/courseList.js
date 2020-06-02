module.exports = {
    lunBo_data: function(o) {
        wx.request({
            url: o,
            success: function(o) {
                var e = o.data;
                "1001" == e.errcode || "1002" == e.errcode || "1003" == e.errcode ? console.log("请求失败") : console.log(o.data.data);
            },
            error: function(o) {
                console.log("请求轮播图失败");
            }
        });
    }
};