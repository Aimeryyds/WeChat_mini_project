var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../itemBehavior.js")), t = require("../../../netdisk_utils/checkFile.js");

(0, e.default)({
    properties: {
        sharePage: {
            type: Boolean,
            value: !1
        },
        surl: {
            type: String,
            value: ""
        },
        shareUrlInfo: {
            type: Object
        },
        isJumpItem: {
            type: Boolean,
            value: !1
        },
        isShowMore: {
            type: Boolean,
            value: !0
        },
        isTransAssisList: {
            type: Boolean,
            value: !1
        },
        isCollectionList: {
            type: Boolean,
            value: !1
        },
        isSingleItem: {
            type: Boolean,
            value: !1
        },
        itemKey: {
            type: String,
            value: "fs_id"
        },
        previewCate: {
            type: Array,
            optionalTypes: [ String ],
            value: ""
        },
        canNavDir: {
            type: Boolean,
            value: !0
        },
        imgHideShare: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        _showMore: function() {
            if (this.data.isCollectionList) this.triggerEvent("select", {
                fileMeta: this.data.fileMeta
            }); else {
                wx.log.normal.normalBtnMoreClick.send();
                var e = wx.MODAL_DIALOG_TYPE, a = e.SHARE_DIR_LIST, i = e.DIR_LIST_FILE, l = e.DIR_LIST_FOLDER, o = e.DIR_LIST_FILE_2, s = this.data, r = s.shareDirPage, n = s.fileMeta, u = s.thumbnail, p = s.categoryImage, v = wx.getCurrentViewPage(), g = (n.isdir, 
                !!u), h = u || p, y = (0, t.checkFileIsOwner)(n), I = void 0;
                I = r ? v.data.isOwner ? i : y ? o : a : n.category - 0 == 6 ? l : i, v.modalDialog.show(I, n, {
                    titleIcon: h,
                    isThumb: g,
                    mode: "single"
                });
            }
        }
    }
});