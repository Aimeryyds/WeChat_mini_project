require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

Component({
    properties: {
        show: {
            type: Boolean,
            observer: function(e, t, i) {
                this._changeShow(e);
            }
        },
        tips: {
            type: String,
            observer: function(e, t, i) {
                this._changeTips(e);
            }
        },
        imgUrl: {
            type: String,
            observer: function(e, t, i) {
                this._changeImgUrl(e);
            }
        },
        config: {
            type: Object,
            observer: function(e, t, i) {
                this._changeConfig(e);
            }
        }
    },
    data: {
        hide: !0
    },
    created: function() {},
    attached: function() {},
    pageLifetimes: {
        hide: function() {
            this.closePopup();
        }
    },
    methods: {
        closePopup: function() {
            this.triggerEvent("showImgPreview", {
                show: !1
            });
        },
        _changeImgUrl: function(e) {
            e && this.setData({
                imgUrl: e
            });
        },
        _changeShow: function(e) {
            this.setData({
                hide: !e
            });
        },
        _changeTips: function(e) {
            e && this.setData({
                tips: e
            });
        },
        _changeConfig: function(e) {
            e && this.setData({
                config: e
            });
        }
    }
});