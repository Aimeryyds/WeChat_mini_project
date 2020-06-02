require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 39 ], {
    "0iXs": function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = s("5nAL"), i = s.n(r), n = s("DI8R");
        new i.a(n.a).$mount();
    },
    "0pfD": function(t, e, s) {
        "use strict";
        var r = s("Xxa5"), i = s.n(r), n = s("exGp"), a = s.n(n), u = s("D9eU");
        e.a = {
            data: function() {
                return {
                    courseTitle: "",
                    userCourseCourseId: ""
                };
            },
            mounted: function() {
                var t = this.$route.query, e = t.courseTitle, s = t.userCourseId;
                this.courseTitle = e, this.userCourseId = s;
            },
            methods: {
                nav: function() {
                    var t = this;
                    return a()(i.a.mark(function e() {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Object(u.f)({
                                    user_book_course_id: t.userCourseId
                                });

                              case 2:
                                t.$router.replace({
                                    path: "/pages/CourseRewardDone/main",
                                    query: {
                                        courseTitle: t.title
                                    }
                                });

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                }
            }
        };
    },
    DI8R: function(t, e, s) {
        "use strict";
        var r = s("0pfD"), i = s("SFOP");
        var n = function(t) {
            s("HfN9");
        }, a = s("ybqe")(r.a, i.a, n, "data-v-bcb20418", null);
        e.a = a.exports;
    },
    HfN9: function(t, e) {},
    SFOP: function(t, e, s) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {
                    staticClass: "course-refund"
                }, [ s("div", {
                    staticClass: "title-container"
                }, [ s("div", {
                    staticClass: "title"
                }, [ t._v("奖学金申请") ]), t._v(" "), s("div", {
                    staticClass: "sub-title"
                }, [ t._v("申请返现的课程") ]), t._v(" "), s("div", {
                    staticClass: "course-title"
                }, [ t._v(t._s(t.courseTitle)) ]), t._v(" "), s("button", {
                    staticClass: "flex-vhc",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.nav
                    }
                }, [ t._v("下一步") ]) ], 1), t._v(" "), t._m(0) ]);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "tip-container"
                }, [ e("div", [ this._v("Q：找不到可以申请返现的课程？") ]), this._v(" "), e("div", [ this._v("A：请在「扇贝阅读」App-「我的」-「帮助与反馈」进行留言，我们会尽快回复你。") ]) ]);
            } ]
        };
        e.a = r;
    }
}, [ "0iXs" ]);