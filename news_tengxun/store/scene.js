Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = {
    name: "scene",
    getter: {
        IS_FROM_APP: function() {
            return 1036 === this._$store.global.scene;
        },
        IS_FROM_QR: function() {
            return 1011 === this._$store.global.scene || 1012 === this._$store.global.scene || 1013 === this._$store.global.scene;
        },
        IS_FROM_MP_QR: function() {
            return 1047 === this._$store.global.scene || 1048 === this._$store.global.scene || 1049 === this._$store.global.scene;
        },
        IS_FROM_TEMPLATE: function() {
            return 1014 === this._$store.global.scene;
        },
        IS_FROM_MP: function() {
            return 1037 === this._$store.global.scene;
        },
        IS_FROM_MP_BACK: function() {
            return 1038 === this._$store.global.scene;
        }
    }
};

exports.default = e;