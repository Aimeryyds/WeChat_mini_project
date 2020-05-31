var t = require("../../netdisk_utils/logicUtils.js"), e = [ [ {
    text: "分享",
    tapFunc: "shareToOthers",
    icon: "icon-share-other"
}, {
    text: "共享至好友",
    tapFunc: "shareToWeixinGroup",
    icon: "icon-add-share-members"
}, {
    text: "复制",
    tapFunc: "copyFile",
    icon: "icon-copy-file"
}, {
    text: "重命名",
    tapFunc: "rename",
    icon: "icon-rename"
}, {
    text: "删除",
    tapFunc: "deleteFiles",
    icon: "icon-delete"
} ], [ {
    text: "复制",
    tapFunc: "copyFile",
    icon: "icon-copy-file"
} ], [ {
    text: "添加共享成员",
    tapFunc: "addShareMember",
    icon: "icon-addto-member"
}, {
    text: "修改共享名称",
    tapFunc: "modifiedShareDirName",
    icon: "icon-rename"
} ], [ {
    text: "本地照片",
    tapFunc: "addLocalFile",
    icon: "icon-add-local"
}, {
    text: "本地视频",
    tapFunc: "addVideo",
    icon: "icon-upload-video"
}, {
    text: "网盘文件",
    tapFunc: "addDiskFile",
    icon: "icon-add-disk"
}, {
    text: "新建文件夹",
    tapFunc: "createNewFolder",
    icon: "icon-create-folder"
}, {
    text: "微信文件",
    tapFunc: "addMessageFile",
    icon: "icon-upload-weChat"
}, {
    text: "传输助手",
    tapFunc: "goTransAssistantHome",
    icon: "icon-trans-assis",
    isTransAssis: !0,
    type: "transAssis"
} ], [ {
    text: "分享",
    tapFunc: "shareToOthers",
    icon: "icon-share-other"
}, {
    text: "复制",
    tapFunc: "copyFile",
    icon: "icon-copy-file"
}, {
    text: "重命名",
    tapFunc: "rename",
    icon: "icon-rename"
}, {
    text: "删除",
    tapFunc: "deleteFiles",
    icon: "icon-delete"
} ], [ {
    text: "本地照片",
    tapFunc: "addLocalFile",
    icon: "icon-add-local"
}, {
    text: "本地视频",
    tapFunc: "addVideo",
    icon: "icon-upload-video"
}, {
    text: "新建文件夹",
    tapFunc: "createNewFolder",
    icon: "icon-create-folder"
}, {
    text: "微信文件",
    tapFunc: "addMessageFile",
    icon: "icon-upload-weChat"
}, {
    text: "传输助手",
    tapFunc: "goTransAssistantHome",
    icon: "icon-trans-assis",
    isTransAssis: !0,
    type: "transAssis"
} ], [ {
    text: "复制",
    tapFunc: "copyFile",
    icon: "icon-copy-file"
}, {
    text: "重命名",
    tapFunc: "rename",
    icon: "icon-rename"
}, {
    text: "删除",
    tapFunc: "deleteFiles",
    icon: "icon-delete"
} ], [ {
    text: "本地照片",
    tapFunc: "addLocalFile",
    icon: "icon-add-local"
}, {
    text: "本地视频",
    tapFunc: "addVideo",
    icon: "icon-upload-video"
}, {
    text: "微信文件",
    tapFunc: "addMessageFile",
    icon: "icon-upload-weChat"
} ] ];

wx.MODAL_DIALOG_TYPE = {
    DIR_LIST_FOLDER: 0,
    SHARE_DIR_LIST: 1,
    SHARE_ROOT_DIR: 2,
    ADD_FILES: 3,
    DIR_LIST_FILE: 4,
    INDEX_ADD_FILES: 5,
    DIR_LIST_FILE_2: 6,
    DIR_TRANS_ASSISTANT: 7
};

var i = getApp();

Component({
    data: {
        isShow: !1,
        fileMeta: null,
        title: "",
        buttons: [],
        iconSize: "small",
        titleIcon: "",
        isThumb: !1,
        mode: "multiple",
        ispc: !1
    },
    properties: {
        from: {
            type: String,
            value: ""
        }
    },
    ready: function() {
        this.initGlobalData();
    },
    methods: {
        hide: function() {
            this.setData({
                isShow: !1
            });
        },
        show: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DIR_LIST, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments[2], a = n.titleIcon, o = void 0 === a ? "" : a, s = n.isThumb, c = void 0 !== s && s, r = n.mode, l = void 0 === r ? "multiple" : r, d = e[t], u = [ 3, 5, 7 ].indexOf(t) > -1 ? "big" : "small";
            d && (this.setIsNew(d), this.setData({
                isShow: !0,
                buttons: d,
                fileMeta: i,
                iconSize: u,
                title: i ? i.server_filename : "",
                titleIcon: o,
                isThumb: c,
                mode: l
            }));
        },
        getTitle: function() {
            return this.data.title;
        },
        getFileMeta: function() {
            return this.data.fileMeta;
        },
        _handleTapBottomModalItem: function(t) {
            this.setData({
                isShow: !1
            });
            var e = t.currentTarget.dataset, i = e.tapfunc, n = wx.getCurrentViewPage();
            "function" == typeof n[i] ? n[i](this.data.fileMeta, this.properties.from) : (this.triggerEvent(i, {
                fileMeta: this.data.fileMeta,
                from: this.properties.from
            }), console.warn("methodName:" + i + " was not in current page. use triggerEvent instead")), 
            "transAssis" === e.type && this.setTransAssisStorage();
        },
        move: {},
        initGlobalData: function() {
            (0, t.systemInfoSync)(), this.setData({
                ispc: i.globalData.systemInfo.ispc
            });
        },
        setTransAssisStorage: function() {
            var t = this.data.buttons;
            t.forEach(function(t) {
                t.isTransAssis && (t.isNew = !1);
            }), this.setData({
                buttons: t
            }), wx.setStorageSync("isHighlightTransAssis", !0);
        },
        setIsNew: function(t) {
            return wx.getStorageSync("isHighlightTransAssis") ? t : (t.forEach(function(t) {
                t.isTransAssis && (t.isNew = !0);
            }), t);
        }
    }
});