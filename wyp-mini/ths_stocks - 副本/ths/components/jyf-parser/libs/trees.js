(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/jyf-parser/libs/trees" ], {
    "0ae6": function(t, e, r) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = {
                components: {
                    trees: function() {
                        Promise.resolve().then(function() {
                            return resolve(r("53ae"));
                        }.bind(null, r)).catch(r.oe);
                    }
                },
                name: "trees",
                data: function() {
                    return {
                        controls: {},
                        imgLoad: !1
                    };
                },
                props: {
                    nodes: {
                        type: Array,
                        default: []
                    }
                },
                mounted: function() {
                    for (this._top = this.$parent; "parser" != this._top.$options.name; ) {
                        if (this._top._top) {
                            this._top = this._top._top;
                            break;
                        }
                        this._top = this._top.$parent;
                    }
                },
                beforeDestroy: function() {
                    this._observer && this._observer.disconnect();
                },
                methods: {
                    play: function(t) {
                        if (this._top.videoContexts.length > 1 && this._top.autopause) for (var e = this._top.videoContexts.length; e--; ) this._top.videoContexts[e].id != t.currentTarget.id && this._top.videoContexts[e].pause();
                    },
                    imgtap: function(e) {
                        var r = e.currentTarget.dataset.attrs;
                        if (!r.ignore) {
                            var o = !0;
                            if (this._top.$emit("imgtap", {
                                id: e.currentTarget.id,
                                src: r.src,
                                ignore: function() {
                                    return o = !1;
                                }
                            }), o) {
                                var n = this._top.imgList;
                                n.forEach(function(t, e) {
                                    n.setItem(e, "http:" + t);
                                });
                                var i = this._top.imgList, s = i[r.i] ? parseInt(r.i) : (i = [ r.src ], 0);
                                t.previewImage({
                                    current: s,
                                    urls: i
                                });
                            }
                        }
                    },
                    imglongtap: function(t) {
                        this._top.$emit("imglongtap", {
                            id: t.currentTarget.id,
                            src: t.currentTarget.dataset.attrs.src
                        });
                    },
                    linkpress: function(e) {
                        var r = !0, o = e.currentTarget.dataset.attrs;
                        if (o.ignore = function() {
                            return r = !1;
                        }, this._top.$emit("linkpress", o), r) {
                            if (o["app-id"] || o.appId) return t.navigateToMiniProgram({
                                appId: o["app-id"] || o.appId,
                                path: o.path || ""
                            });
                            o.href && ("#" == o.href[0] ? this._top.useAnchor && this._top.navigateTo({
                                id: o.href.substring(1)
                            }) : 0 == o.href.indexOf("http") || 0 == o.href.indexOf("//") ? t.setClipboardData({
                                data: o.href,
                                success: function() {
                                    t.showToast({
                                        title: "链接已复制"
                                    });
                                }
                            }) : t.navigateTo({
                                url: o.href
                            }));
                        }
                    },
                    triggerError: function(t, e, r, o, n) {
                        this._top.$emit("error", {
                            source: t,
                            target: e,
                            errMsg: r,
                            errCode: o,
                            context: n
                        });
                    },
                    loadSource: function(t) {
                        return !(t.dataset.source.length <= 1 || (this.controls[t.id] ? !(this.controls[t.id] && this.controls[t.id].index < t.dataset.source.length) || (this.$set(this.controls[t.id], "index", this.controls[t.id].index + 1), 
                        0) : (this.$set(this.controls, t.id, {
                            index: 1
                        }), 0)));
                    },
                    adError: function(t) {
                        this.triggerError("ad", t.currentTarget, t.detail.errMsg, t.detail.errorCode);
                    },
                    videoError: function(e) {
                        !this.loadSource(e.currentTarget) && this._top && this.triggerError("video", e.currentTarget, e.detail.errMsg, void 0, t.createVideoContext(e.currentTarget.id, this));
                    },
                    audioError: function(t) {
                        this.loadSource(t.currentTarget) || this.triggerError("audio", t.currentTarget, t.detail.errMsg);
                    },
                    _loadVideo: function(t) {
                        this.$set(this.controls, t.currentTarget.id, {
                            play: !0,
                            index: 0
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, r("543d").default);
    },
    "3e06": function(t, e, r) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, n = [];
        r.d(e, "b", function() {
            return o;
        }), r.d(e, "c", function() {
            return n;
        }), r.d(e, "a", function() {});
    },
    "53ae": function(t, e, r) {
        r.r(e);
        var o = r("3e06"), n = r("c174");
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        r("fe52");
        var s = r("f0c5"), a = r("db7b"), c = Object(s.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        "function" == typeof a.a && Object(a.a)(c), e.default = c.exports;
    },
    c174: function(t, e, r) {
        r.r(e);
        var o = r("0ae6"), n = r.n(o);
        for (var i in o) "default" !== i && function(t) {
            r.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = n.a;
    },
    d270: function(t, e, r) {},
    db7b: function(t, e, r) {
        e.a = function(t) {
            t.options.wxsCallMethods || (t.options.wxsCallMethods = []);
        };
    },
    fe52: function(t, e, r) {
        var o = r("d270");
        r.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/jyf-parser/libs/trees-create-component", {
    "components/jyf-parser/libs/trees-create-component": function(t, e, r) {
        r("543d").createComponent(r("53ae"));
    }
}, [ [ "components/jyf-parser/libs/trees-create-component" ] ] ]);