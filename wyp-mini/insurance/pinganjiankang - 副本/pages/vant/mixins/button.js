Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.button = void 0;

var e = Behavior({
    externalClasses: [ "hover-class" ],
    properties: {
        id: String,
        lang: String,
        businessId: Number,
        sessionFrom: String,
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean,
        appParameter: String,
        ariaLabel: String
    }
});

exports.button = e;