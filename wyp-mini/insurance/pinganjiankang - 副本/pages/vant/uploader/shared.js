Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.chooseVideoProps = exports.chooseImageProps = void 0;

var e = {
    sizeType: {
        type: Array,
        value: [ "original", "compressed" ]
    },
    capture: {
        type: Array,
        value: [ "album", "camera" ]
    }
};

exports.chooseImageProps = e;

var r = {
    capture: {
        type: Array,
        value: [ "album", "camera" ]
    },
    compressed: {
        type: Boolean,
        value: !0
    },
    maxDuration: {
        type: Number,
        value: 60
    },
    camera: {
        type: String,
        value: "back"
    }
};

exports.chooseVideoProps = r;