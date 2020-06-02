var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.EXPAND_POLICY = void 0;

e(require("../../utils/logger"));

var t = require("../../store/index"), i = {
    height: "height",
    rows: "rows",
    force: "force"
};

exports.EXPAND_POLICY = i, Component({
    properties: {
        enableShowAll: {
            type: Boolean,
            value: !0
        },
        maxHeight: {
            type: Number,
            value: 2 * t.systemInfo.screenHeight
        },
        maxRows: {
            type: Number,
            value: 8
        },
        by: {
            type: String,
            value: i.height
        },
        enable: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        isFull: !0,
        wrapStyle: "",
        expandStyle: ""
    },
    ready: function() {
        var e = this;
        this.data.enable && (this.__checked = !1, this.checkInitHeight(), setTimeout(function() {
            e.__checked = !0;
        }, 3e3));
    },
    created: function() {},
    attached: function() {},
    methods: {
        tapShowAll: function() {
            this.setData({
                enableShowAll: !1,
                isFull: !0
            });
        },
        checkInitHeight: function() {
            var e = this;
            this.__checked || this.createSelectorQuery().select(".content-text").fields({
                size: !0,
                computedStyle: [ "lineHeight" ]
            }, function(t) {
                if (t) {
                    var a = parseInt(t.lineHeight.slice(0, -2), 10), n = parseInt(t.height, 10), o = Math.round(n / a), r = e.data, l = r.by, s = r.maxHeight, c = r.maxRows, h = !1;
                    switch (l) {
                      case i.height:
                        h = n > s;
                        break;

                      case i.rows:
                        h = o > c;
                        break;

                      case i.force:
                        h = !0;
                    }
                    h ? (e.__checked = !0, l === i.height ? e.setData({
                        isFull: !1
                    }, function() {
                        e.setData({
                            wrapStyle: "overflow-y: hidden; max-height: ".concat(1.5 * s, "rpx;"),
                            expandStyle: "overflow-y: inherit; max-height: inherit;"
                        });
                    }) : l === i.rows && e.setData({
                        isFull: !1
                    }, function() {
                        e.setData({
                            wrapStyle: "display: -webkit-box; overflow-y: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; -webkit-line-clamp: ".concat(c, ";"),
                            expandStyle: "-webkit-box-orient: normal; -webkit-line-clamp: none;"
                        });
                    })) : setTimeout(function() {
                        e.checkInitHeight();
                    }, 1e3);
                }
            }).exec();
        },
        countLines: function() {}
    }
});