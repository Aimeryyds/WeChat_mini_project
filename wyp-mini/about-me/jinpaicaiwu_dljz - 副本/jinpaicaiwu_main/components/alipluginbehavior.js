Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    }
    return t;
};

exports.default = {
    props: {
        param: Object,
        layerid: String
    },
    data: {},
    didMount: function() {
        this.setData(t({}, this.props)), this.$page.setComponent(this.data.layerid, this);
    },
    didUpdate: function(t, e) {},
    didUnmount: function() {},
    methods: {
        _getPage: function() {
            return this.$page;
        },
        viewtap: function() {
            var t = getApp(), e = this.props.param.modclick;
            t.moduleBindTap(e);
        }
    }
};