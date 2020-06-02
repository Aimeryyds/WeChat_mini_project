function t(t, a, e) {
    return !(!t || !a) && (e = e || "f", t = parseFloat(t, 10), a = parseInt(a, 10), 
    "f" === e ? t.toString().split(".")[0] + "." + t.toString().split(".")[1].substring(0, a) : t.toFixed(a));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    behaviors: [],
    properties: {
        value: {
            type: [ Number, String ],
            value: ""
        },
        icon: {
            type: [ String ],
            value: ""
        },
        status: {
            type: String,
            value: ""
        },
        decimal: {
            type: String,
            value: "2"
        },
        decimalNum: {
            type: [ Number, String ],
            value: ""
        }
    },
    data: {},
    methods: {},
    attached: function() {
        if (this.data.value) {
            var a = this.data.value;
            switch (this.data.decimal) {
              case "1":
                a = t(this.data.value, 1);
                break;

              case "none":
                a = parseInt(this.data.value);
                break;

              case "small":
                a = parseInt(this.data.value).toString().trim(), this.setData({
                    decimalNum: this.data.value.toString().split(".")[1].trim()
                });
            }
            this.setData({
                value: a
            });
        }
    }
});