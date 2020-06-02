var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../common.js"));

Component({
    behaviors: [ e.default ],
    properties: {
        module: {
            type: Object
        }
    },
    methods: {
        onTapGiftCardBuy: function(e) {
            var t = e.currentTarget.dataset.id;
            this.jump("/pages/giftcard/buy/index?urlType=tabHome&id=" + t);
        }
    }
});