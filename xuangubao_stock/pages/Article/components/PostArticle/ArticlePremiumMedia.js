(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/components/PostArticle/ArticlePremiumMedia" ], {
    2031: function(t, e, n) {
        n.r(e);
        var i = n("3581"), o = n("655e");
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        n("e433");
        var a = n("2877"), r = Object(a.a)(o.default, i.a, i.b, !1, null, "cd8477bc", null);
        e.default = r.exports;
    },
    3581: function(t, e, n) {
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return o;
        });
    },
    "5e90": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            props: {
                medias: {
                    type: Array
                },
                info: {
                    type: Object,
                    default: function() {
                        return {
                            poster: "",
                            name: "",
                            author: ""
                        };
                    }
                }
            },
            data: function() {
                return {
                    playingAudio: !1
                };
            },
            computed: {
                videos: function() {
                    return this.medias.filter(function(t) {
                        return 2 === t.type;
                    });
                },
                audio: function() {
                    return this.medias.filter(function(t) {
                        return 1 === t.type;
                    })[0] || null;
                }
            },
            created: function() {
                this.audioCtx = wx.createAudioContext("audio"), this.audio && this.audioCtx.setSrc(this.audio.validUrl || this.audio.url);
            },
            methods: {
                clickAudio: function() {
                    this.playingAudio ? (this.audioCtx.pause(), this.playingAudio = !1) : (this.audioCtx.play(), 
                    this.playingAudio = !0);
                }
            }
        };
        e.default = i;
    },
    "655e": function(t, e, n) {
        n.r(e);
        var i = n("5e90"), o = n.n(i);
        for (var u in i) "default" !== u && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(u);
        e.default = o.a;
    },
    cbbf: function(t, e, n) {},
    e433: function(t, e, n) {
        var i = n("cbbf");
        n.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Article/components/PostArticle/ArticlePremiumMedia-create-component", {
    "pages/Article/components/PostArticle/ArticlePremiumMedia-create-component": function(t, e, n) {
        n("543d").createComponent(n("2031"));
    }
}, [ [ "pages/Article/components/PostArticle/ArticlePremiumMedia-create-component" ] ] ]);