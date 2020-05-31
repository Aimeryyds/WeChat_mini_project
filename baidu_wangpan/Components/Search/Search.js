Component({
    methods: {
        search: function() {
            wx.safeNavigateTo("/pages/netdisk_search/search");
        },
        sortView: function() {
            this.triggerEvent("sort");
        }
    }
});