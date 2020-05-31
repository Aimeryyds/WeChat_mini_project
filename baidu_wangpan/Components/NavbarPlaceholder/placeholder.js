var a = getApp();

Component({
    data: {
        navHeight: a.globalData.navHeight
    },
    ready: function() {
        this.data.navHeight !== a.globalData.navHeight && this.setData({
            navHeight: a.globalData.navHeight
        });
    }
});