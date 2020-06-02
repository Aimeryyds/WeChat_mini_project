var i = getApp();

Page({
    data: {},
    onLoad: function(i) {},
    onReady: function() {},
    shareSubmit: function(e) {
        i.save_formid(e.detail.formId);
    },
    onShareAppMessage: function() {
        return {
            title: "年夜饭菜谱大全",
            imageUrl: "https://static.meishichina.com/img/nianyecai/2019/share.jpg",
            path: "/pages/index/index?type=minisite&id=chunjiejiayan"
        };
    }
});