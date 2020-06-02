Page({
    data: {
        enable: !1,
        loading: !1,
        title: "",
        titleStyle: "",
        bgStyle: "position: fixed",
        delta: 2
    },
    onLoad: function() {},
    onnavback: function(t) {
        console.log("navback", t);
    },
    setTitle: function() {
        "微信" !== this.data.title ? this.setData({
            title: "微信"
        }) : this.setData({
            title: "WeChat"
        });
    },
    setLoading: function() {
        !1 === this.data.loading ? this.setData({
            loading: !0
        }) : this.setData({
            loading: !1
        });
    },
    setNavBack: function() {
        !1 === this.data.enable ? this.setData({
            enable: !0
        }) : this.setData({
            enable: !1
        });
    },
    setTitleStyle: function() {
        "color: #333300;" !== this.data.titleStyle ? this.setData({
            titleStyle: "color: #333300;"
        }) : this.setData({
            titleStyle: "color: #fff;"
        });
    },
    setBgStyle: function() {
        "background-color: #60A718;" !== this.data.bgStyle ? this.setData({
            bgStyle: "background-color: #60A718;"
        }) : this.setData({
            bgStyle: "background-color: #000;"
        });
    }
});