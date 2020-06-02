var e = getApp();

require("../../utils/util.js");

Component({
    behaviors: [],
    properties: {
        visible: Boolean,
        mainColor: String,
        textColor: String,
        imgUrls: Array,
        setTop: String
    },
    observers: {},
    data: {
        guideImage: "../../images/bluetooth_g_b.png",
        indicatorDots: !0,
        autoplay: !1,
        interval: 5e3,
        duration: 500,
        checked: !1,
        contentHeight: 300
    },
    lifetimes: {
        attached: function() {},
        moved: function() {},
        detached: function() {}
    },
    attached: function() {},
    ready: function() {},
    pageLifetimes: {
        show: function() {},
        hide: function() {},
        resize: function() {}
    },
    methods: {
        getImageDom: function() {
            var e = this, t = this.createSelectorQuery();
            t.select("#img_0").boundingClientRect(), t.exec(function(t) {
                console.log(t), "" != t[0] && null != t[0] ? e.setData({
                    contentHeight: t[0].height + 10
                }) : setTimeout(function() {
                    e.getImageDom();
                }, 200);
            });
        },
        knownTap: function() {
            this.triggerEvent("knownTap", {}, {});
        },
        checkboxChange: function(e) {
            console.log(e.detail.value), "check" == e.detail.value[0] ? this.check = !0 : this.check = !1;
        },
        toTarget: function(t) {
            var n = t.currentTarget.dataset.url;
            n && n.length > 0 && (n.indexOf("http") > -1 ? wx.navigateTo({
                url: "../../pages/urlTarget/urlTarget?targetUrl=" + n
            }) : e.globalData.userInfo ? wx.navigateTo({
                url: n
            }) : wx.navigateTo({
                url: "../login/login?unknowUrl=" + n
            }));
        }
    }
});