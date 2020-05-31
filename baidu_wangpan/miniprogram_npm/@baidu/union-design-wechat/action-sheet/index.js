Component({
    externalClasses: [ "u-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    data: {
        isShow: !1,
        gridWidth: "100%"
    },
    properties: {
        buttons: {
            type: Array,
            value: []
        },
        mode: {
            type: String,
            value: "single"
        },
        gridPercent: {
            type: String,
            value: "33.33%"
        },
        titleIcon: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        iconSize: {
            type: String,
            value: "big"
        }
    },
    attached: function() {
        "multiple" === this.data.mode && this.setData({
            gridWidth: this.data.gridPercent
        });
    },
    methods: {
        hide: function() {
            this.setData({
                isShow: !1
            }), this.triggerEvent("close");
        },
        show: function() {
            this.properties.buttons && this.setData({
                isShow: !0
            });
        },
        _handleTapBottomModalItem: function(t) {
            this.setData({
                isShow: !1
            });
            var e = t.currentTarget.dataset.tapfunc, i = getCurrentPages() || [], a = i[i.length - 1];
            if ("function" != typeof a[e]) throw new Error("methodName:" + e + " was not in current page.please check it");
            a[e]();
        }
    }
});