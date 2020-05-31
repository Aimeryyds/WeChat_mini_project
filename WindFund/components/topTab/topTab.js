var t = function() {
    function t(t, r) {
        var e = [], n = !0, a = !1, i = void 0;
        try {
            for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done) && (e.push(o.value), 
            !r || e.length !== r); n = !0) ;
        } catch (t) {
            a = !0, i = t;
        } finally {
            try {
                !n && s.return && s.return();
            } finally {
                if (a) throw i;
            }
        }
        return e;
    }
    return function(r, e) {
        if (Array.isArray(r)) return r;
        if (Symbol.iterator in Object(r)) return t(r, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

Component({
    properties: {
        tabs: {
            type: Array,
            value: []
        },
        scrolling: String
    },
    data: {
        currentTab: ""
    },
    ready: function() {
        var r = this.properties.tabs.filter(function(t) {
            return t.isActived;
        }), e = t(r, 1)[0];
        e && (this.setData({
            currentTab: e.name
        }), this.triggerEvent("tabchanged", e));
    },
    methods: {
        switchPage: function(r) {
            var e = this.properties.tabs.filter(function(t) {
                return t.name === r.currentTarget.dataset.name;
            }), n = t(e, 1)[0];
            n && (this.setData({
                currentTab: n.name
            }), this.triggerEvent("tabchanged", n));
        }
    }
});