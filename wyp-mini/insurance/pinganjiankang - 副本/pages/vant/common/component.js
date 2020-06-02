var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.VantComponent = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = {};
    s = e, a = r, d = {
        data: "data",
        props: "properties",
        mixins: "behaviors",
        methods: "methods",
        beforeCreate: "created",
        created: "attached",
        mounted: "ready",
        relations: "relations",
        destroyed: "detached",
        classes: "externalClasses"
    }, Object.keys(d).forEach(function(e) {
        s[e] && (a[d[e]] = s[e]);
    });
    var s, a, d;
    var o = e.relation;
    o && function(e, i, r) {
        var s = r.type, a = r.name, d = r.linked, o = r.unlinked, l = r.linkChanged, h = i.beforeCreate, c = i.destroyed;
        "descendant" === s && (e.created = function() {
            h && h.bind(this)(), this.children = this.children || [];
        }, e.detached = function() {
            this.children = [], c && c.bind(this)();
        });
        e.relations = Object.assign(e.relations || {}, (0, n.default)({}, "../".concat(a, "/index"), {
            type: s,
            linked: function(e) {
                t[s].linked.bind(this)(e), d && d.bind(this)(e);
            },
            linkChanged: function(e) {
                l && l.bind(this)(e);
            },
            unlinked: function(e) {
                t[s].unlinked.bind(this)(e), o && o.bind(this)(e);
            }
        }));
    }(r, e, o);
    r.externalClasses = r.externalClasses || [], r.externalClasses.push("custom-class"), 
    r.behaviors = r.behaviors || [], r.behaviors.push(i.basic), e.field && r.behaviors.push("wx://form-field");
    r.properties && Object.keys(r.properties).forEach(function(e) {
        Array.isArray(r.properties[e]) && (r.properties[e] = null);
    });
    r.options = {
        multipleSlots: !0,
        addGlobalClass: !0
    }, Component(r);
};

var n = e(require("../../../@babel/runtime/helpers/defineProperty")), i = require("../mixins/basic"), t = {
    ancestor: {
        linked: function(e) {
            this.parent = e;
        },
        unlinked: function() {
            this.parent = null;
        }
    },
    descendant: {
        linked: function(e) {
            this.children = this.children || [], this.children.push(e);
        },
        unlinked: function(e) {
            this.children = (this.children || []).filter(function(n) {
                return n !== e;
            });
        }
    }
};