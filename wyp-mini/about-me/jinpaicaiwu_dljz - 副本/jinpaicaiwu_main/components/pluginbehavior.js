module.exports = Behavior({
    properties: {
        param: Object,
        layerid: String
    },
    data: {
        $parent: null
    },
    methods: {
        onLoad: function(a) {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onReady: function() {},
        setWxPageObj: function(a) {
            this.data.$parent = a;
        },
        _getPage: function() {
            return this.data.$parent;
        },
        viewtap: function() {
            var a = getApp(), t = this.data.param.modclick;
            t.param.type && "previewImage" == t.param.type && (t.src = this.data.param.src || ""), 
            a.moduleBindTap(t);
        }
    }
});