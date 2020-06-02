var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../utils/mlodash")), n = {
    name: "article",
    state: {
        syncMap: new Map(),
        syncDanmuMap: new Map()
    },
    getter: {},
    method: {
        showInputPanel: function(e) {
            this.emit(this.event.showInputPanel, e);
        },
        addSyncFn: function(e, t) {
            if (e && t) {
                var n = this.syncMap.get(e);
                n ? n.push(t) : n = [ t ], this.syncMap.set(e, n);
            }
        },
        getSyncFn: function(e) {
            return this.syncMap.get(e);
        },
        deleteSyncFn: function(e, n) {
            var a = this.syncMap.get(e);
            if (a && n) {
                var s = t.default.findIndex(a, n);
                a.splice(s, 1);
            }
        }
    },
    event: [ "showInputPanel" ]
};

exports.default = n;