Component({
    properties: {
        isFullScreen: {
            type: Boolean,
            value: !1
        },
        tips: {
            type: String,
            value: ""
        },
        loading: {
            type: Boolean,
            value: !1
        },
        isSelectingDir: {
            type: Boolean,
            value: !1
        },
        selectDirInfo: {
            type: Object,
            value: {}
        },
        isSelecting: {
            type: Boolean,
            value: !1
        },
        host: {
            type: Object,
            value: {}
        },
        guest: {
            type: Object,
            value: {}
        },
        tucaoData: {
            type: Object,
            value: {}
        },
        isIPhoneX: {
            type: Boolean,
            value: !1
        },
        multiFileInfo: {
            type: Object,
            value: {}
        }
    },
    data: {
        personBoxVisibility: !1,
        isSelectingDir: !1
    },
    methods: {
        enterSelection: function() {
            this.triggerEvent("enterselection");
        },
        save: function() {
            this.triggerEvent("save");
        },
        showPersonBox: function() {
            this.setData({
                personBoxVisibility: !0
            });
        },
        hidePersonBox: function() {
            this.setData({
                personBoxVisibility: !1
            });
        },
        selectLoaction: function() {
            this.data.isSelectingDir ? this.hideSelectDir() : this.triggerEvent("enterSelectSaveDir");
        },
        saveSelectDir: function() {
            this.triggerEvent("saveSelectDir");
        },
        saveIntoSelectDir: function() {
            this.triggerEvent("saveIntoSelectDir");
        },
        hideSelectDir: function() {
            this.triggerEvent("cancelSelectDir");
        },
        clickDirItem: function(e) {
            this.triggerEvent("selectSaveDir", {
                name: e.currentTarget.dataset.item.dir_name,
                key: e.currentTarget.dataset.item.dir_key,
                pDirKey: e.currentTarget.dataset.item.pdir_key,
                ppDirKey: e.currentTarget.dataset.item.ppdir_key
            });
        },
        loadMore: function() {
            this.data.selectDirInfo.finished || this.triggerEvent("selectSaveDirLoadMore");
        },
        backToUpper: function() {
            this.triggerEvent("selectSaveDirBackToUpper");
        }
    }
});