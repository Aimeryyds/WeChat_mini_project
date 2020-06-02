function t(t) {
    var e = [], a = [];
    if (3 === (t = t.replace(/#/, "")).length) {
        for (var r = [], o = 0; o < 3; o++) r.push(t.charAt(o) + t.charAt(o));
        t = r.join("");
    }
    for (var s = 0; s < 3; s++) e[s] = "0x" + t.substr(2 * s, 2), a.push(parseInt(Number(e[s])));
    return a.join(",");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    properties: {
        status: {
            type: String,
            value: "hide",
            observer: function(t) {
                this.setData({
                    status: t
                });
            }
        },
        opacity: {
            type: [ String, Number ],
            value: .6
        },
        backgroundColor: {
            type: String,
            value: "#000000"
        },
        locked: {
            type: [ String ],
            value: "hide"
        },
        contentAlign: {
            type: String,
            value: "tl"
        },
        __positionStyle: {
            type: String,
            value: "top:0; left:0"
        }
    },
    data: {},
    methods: {
        omMaskTap: function() {
            var t = this.data;
            t.locked && "true" !== t.locked && this.setData({
                status: "hide"
            });
        }
    },
    attached: function() {
        var e = this.data;
        this.setData({
            backgroundColor: t(e.backgroundColor)
        });
        var a = void 0;
        switch (e.contentAlign) {
          case "tl":
            a = "top:0; left:0";
            break;

          case "tr":
            a = "top:0; right:0";
            break;

          case "bl":
            a = "bottom:0; left:0";
            break;

          case "br":
            a = "bottom:0; right:0";
        }
        this.setData({
            __positionStyle: a
        });
    }
});