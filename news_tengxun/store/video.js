var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../utils/mlodash")), i = {
    name: "video",
    state: {
        activeUid: "",
        instanceMap: new Map(),
        currentTimeMap: new Map(),
        progressBarMap: new Map(),
        showTipsWhenNotWifi: !0,
        continueTipsList: []
    },
    getter: {},
    setter: {},
    method: {
        play: function(e) {
            var i = this.instanceMap.get(e);
            if (i) if ("wifi" !== this._$store.systemInfo.networkType && this.showTipsWhenNotWifi) {
                var s = i.selectComponent("#".concat(i.data._uid, "_cover"));
                s && s.tapCover && s.tapCover();
            } else t.default.forEach(this.continueTipsList, function(e) {
                return e();
            }), this.continueTipsList.length = 0, i.play();
        },
        pause: function(e) {
            var t = this.instanceMap.get(e);
            t && t.pause();
        },
        pauseSelf: function(e) {
            e === this.activeUid && (this.activeUid = "");
        },
        pauseOther: function(e) {
            this.emit(this.event.pauseAll, e), this.activeUid = e;
        },
        updateCurrentTime: function(e, i) {
            var s = this.currentTimeMap.get(e);
            t.default.isFunction(s) && s(i);
        },
        updateProgressBar: function(e, i) {
            var s = this.progressBarMap.get(e);
            t.default.isFunction(s) && s(i);
        }
    },
    event: [ "pauseAll", "resetCover" ]
};

exports.default = i;