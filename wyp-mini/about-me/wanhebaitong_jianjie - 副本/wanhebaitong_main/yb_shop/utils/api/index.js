var t = getApp(), a = t.requirejs("core"), o = (t.getCache("userinfo"), t.requirejs("wxParse/wxParse"));

module.exports = {
    to_url: function(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "", i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "", n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "", r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "", l = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : "", s = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : "";
        if (1 == e) t && 0 < t.length && a.jump(t); else if (2 == e) wx.navigateToMiniProgram({
            appId: o,
            path: i,
            extraData: {
                foo: "bar"
            },
            envVersion: "release",
            success: function(e) {
                console.log("打开成功");
            },
            fail: function(e) {
                a.alert("请绑定小程序");
            }
        }); else if (3 == e) a.jump(t, 1); else if (4 == e) r ? wx.makePhoneCall({
            phoneNumber: r
        }) : a.alert("电话不能为空"); else {
            if (5 != e) return;
            l && s ? a.tx_map(l, s, n) : a.alert("请完善位置信息");
        }
    },
    getArea: function() {
        a.get("area/GetArea", {}, function(e) {
            t.globalData.areas = e.areas;
        });
    },
    article_list: function(e, t, o, i, n) {
        var r = {};
        a.get("Article/Article", {
            page: t,
            ident: e,
            class_id: o
        }, function(e) {
            0 == e.code ? (e.info.info ? (0 < e.info.info.length && (r.page = t + 1, r.list = i.data.list.concat(e.info.info), 
            e.info.info.length < 10 && (r.loaded = !0)), 0 == e.info.info.length && (r.loaded = !0)) : r.loaded = !0, 
            r.show = !0, wx.setNavigationBarTitle({
                title: e.info.article_name ? decodeURIComponent(e.info.article_name) : "列表"
            }), r.class_style = e.info.class_style) : a.alert(e.msg, function() {}), "function" == typeof n && n(r);
        }, !0);
    },
    ArticleInfo: function(e, t, i, n) {
        var r = {};
        a.get("Article/ArticleInfo", {
            article_id: t,
            ident: e
        }, function(e) {
            wx.setNavigationBarTitle({
                title: e.info.title ? decodeURIComponent(e.info.title) : "详情"
            }), 0 == e.code ? (o.wxParse("wxParseData", "html", e.info.content, i, "0"), r.detail = e.info, 
            r.show = !0, "function" == typeof n && n(r)) : a.alert(e.msg);
        }, !0);
    },
    indexList: function(e) {
        var o = {}, i = 372, n = t.getCache("indexList");
        n ? "function" == typeof e && e(n) : (i = wx.getSystemInfoSync().windowWidth, a.get("index/index", {}, function(n) {
            if (0 == n.code) {
                var r = n.info.advert_position_list;
                r[2].advert_position.forEach(function(e) {
                    e.high = i * e.height / e.width;
                }), o.advert_position = r[2].advert_position, o.navigation = n.info.advert_position_list[1], 
                o.adv = n.info.advert_position_list[0], o.GoodsList = n.info.goods_list, o.adv_height = "undefined" != n.info.advert_height ? n.info.advert_height : "188", 
                o.show = !0, t.setCache("indexList", o, 10), "function" == typeof e && e(o);
            } else a.alert(n.msg);
        }, !0));
    },
    ImageInfo: function(e, t, o, i, n) {
        var r = {};
        a.get("Album/Album", {
            page: t,
            ident: e,
            group_id: o
        }, function(e) {
            0 == e.code ? (e.info.info ? (0 < e.info.info.length && (r.page = t + 1, r.list = i.data.list.concat(e.info.info), 
            e.info.info.length < 10 && (r.loaded = !0)), 0 == e.info.info.length && (r.loaded = !0)) : r.loaded = !0, 
            r.show = !0, wx.setNavigationBarTitle({
                title: e.info.group_name ? e.info.group_name : "相册"
            })) : a.alert(e.msg, function() {}), "function" == typeof n && n(r);
        }, !0);
    },
    indexMod: function(e, i) {
        var n = this, r = {}, l = wx.getSystemInfoSync().windowWidth, s = t.getCache("indexMod");
        s ? "function" == typeof i && i(s) : (l = wx.getSystemInfoSync().windowWidth, a.get("index/modindex", {}, function(s) {
            "string" == typeof s && (s = a.json_parse(s)), console.log(s), 0 == s.code ? (s.info.all_data.forEach(function(t) {
                "advert" == t.type && (t.high = l * t.ly_height / t.ly_width), "banner" == t.type && (t.high = l * t.ly_height / 10), 
                "position" == t.type && 2 == t.is_display && e.setData({
                    "markers[0].latitude": t.latitude,
                    "markers[0].longitude": t.longitude,
                    "markers[0].title": t.position_name
                }), "rich_text" == t.type && (o.wxParse("wxParseData_" + t.time_key, "html", t.content, e, "0"), 
                t.wxParseData = e.data["wxParseData_" + t.time_key].nodes), "edit_piclist" == t.type && (t.arr = a.str(t.list)), 
                t.type, "comment" == t.type && n.comment(e, t.is_display), "edit_music" == t.type && n.play_music(t.name, t.author, t.imgurl, t.url), 
                "edit_form" == t.type && t.param && "" != t.param && 0 != t.param && (n.get_form_list(2, t.param, e), 
                r.id = t.param);
            }), r.index = s.info.all_data, r.show = !0, t.setCache("indexMod", r, 1), "function" == typeof i && i(r)) : a.alert(s.msg ? s.msg : "数据异常");
        }, !0));
    },
    power: function(e, t, i) {
        var n = this, r = {}, l = wx.getSystemInfoSync().windowWidth;
        a.get("index/power", {
            id: e
        }, function(e) {
            0 == e.code ? (wx.setNavigationBarTitle({
                title: e.info.name ? e.info.name : "万能页面"
            }), e.info.all_data.forEach(function(e) {
                "advert" == e.type && (e.high = l * e.ly_height / e.ly_width), "banner" == e.type && (e.high = l * e.ly_height / 10), 
                "position" == e.type && 2 == e.is_display && t.setData({
                    "markers[0].latitude": e.latitude,
                    "markers[0].longitude": e.longitude,
                    "markers[0].title": e.position_name
                }), "rich_text" == e.type && (o.wxParse("wxParseData_" + e.time_key, "html", e.content, t, "0"), 
                e.wxParseData = t.data["wxParseData_" + e.time_key].nodes), "edit_piclist" == e.type && (e.arr = a.str(e.list)), 
                e.type, "comment" == e.type && n.comment(t, e.is_display), "edit_music" == e.type && n.play_music(e.name, e.author, e.imgurl, e.url), 
                "edit_form" == e.type && e.param && "" != e.param && 0 != e.param && (n.get_form_list(3, e.param, t), 
                r.id = e.param);
            }), r.index = e.info.all_data, r.show = !0, r.page = e.info.page, "function" == typeof i && i(r)) : a.alert(e.msg);
        }, !0);
    },
    play_music: function(e, t, a, o) {
        if (o && "" != o) {
            var i = wx.getBackgroundAudioManager();
            i.title = e, i.singer = t, i.coverImgUrl = a, i.src = o;
        }
    },
    comment: function(t, o) {
        a.get("Index/CommentList", {
            num: o
        }, function(a) {
            if (0 == a.code) {
                var o = {
                    sroce: a.info.sroce,
                    count: a.info.count
                };
                o.commentlist = a.info.info, t.setData(o);
            } else e.alert(a.msg);
        });
    },
    Article_Class: function(e, t) {
        var o = {};
        wx.getSystemInfo({
            success: function(e) {
                var a = .5 * (e.windowWidth - 20) * .9;
                t.setData({
                    height: a
                });
            }
        }), a.get("Article/ArticleClass", {
            ident_class: e
        }, function(e) {
            0 == e.code ? e.info && (o.list = e.info, o.show = !0, t.setData(o)) : a.alert(e.msg);
        }, !0);
    },
    Album_Class: function(e, t) {
        var o = {};
        wx.getSystemInfo({
            success: function(e) {
                var a = .5 * (e.windowWidth - 20) * .9;
                t.setData({
                    height: a
                });
            }
        }), a.get("Album/AlbumImages", {
            ident_class: e
        }, function(e) {
            0 == e.code ? e.info && (o.list = e.info, o.show = !0, t.setData(o)) : a.alert(e.msg);
        }, !0);
    },
    formSubmit: function(e, o) {
        console.log(o);
        var i = this, n = o.detail.value, r = n.id + "";
        console.log(r), console.log(e.data.power_form[r + ""]);
        var l = e.data.power_form[r + ""].form;
        delete n.id, i.validate(n, l, function(o) {
            0 == o && (n = JSON.stringify(i.to_str(n, l)), a.loading("正在提交中..."), a.post("index/submitform", {
                data: n,
                form: JSON.stringify(l),
                bus_form_id: r,
                user_id: t.getCache("userinfo").uid
            }, function(t) {
                if (a.hideLoading(), 0 == t.code) {
                    var o = e.data.power_form;
                    o[r].form = l, e.setData({
                        power_form: o,
                        form_data: {}
                    }), a.success("提交成功");
                } else a.alert(t.msg);
            }));
        });
    },
    bindPickerChange: function(e, t) {
        console.log(t);
        var a = t.target.id, o = e.data.form_data ? e.data.form_data : {};
        if ("region" == t.currentTarget.dataset.type) {
            var i = "";
            t.detail.value.forEach(function(e) {
                "" == i ? i = e : i += " " + e;
            }), o[a] = i;
        } else o[a] = t.detail.value;
        e.setData({
            form_data: o
        }), console.log(e.data.form_data);
    },
    listen_time_two: function(e, t) {
        console.log(t);
        var o = t.target.id, i = t.currentTarget.dataset.key, n = e.data.form_data ? e.data.form_data : {};
        if (n[o + "_" + i] = t.detail.value, 2 == i && n[o + "_1"] && n[o + "_2"]) {
            if (a.time_str(n[o + "_1"]) >= a.time_str(n[o + "_2"])) return void a.error("不小于开始时间");
            n[o] = n[o + "_1"] + "," + n[o + "_2"];
        }
        e.setData({
            form_data: n
        });
    },
    Image_del: function(e, t) {
        var o = a.pdata(t).index, i = a.pdata(t).key, n = e.data.form_data;
        a.removeByValue(n[i], o, function(t) {
            n[i] = t, e.setData({
                form_data: n
            });
        });
    },
    get_form_list: function(e, t, o) {
        var i = {}, n = "提交";
        a.get("index/form", {
            id: t
        }, function(r) {
            var l = r.info.list;
            if (0 == r.code) {
                if (1 == e && (wx.setNavigationBarTitle({
                    title: r.info.title ? decodeURIComponent(r.info.title) : "万能表单"
                }), 0 == l.length)) return void a.alert("表单内容为空");
                l.forEach(function(e) {
                    "picker" == e.module && (i[e.name] = 0), "time_one" == e.module && (i[e.name] = e.default), 
                    "time_two" == e.module && (i[e.name + "_1"] = e.default1, i[e.name + "_2"] = e.default2, 
                    e.default1 && e.default2 ? i[e.name] = e.default1 + "," + e.default2 : i[e.name] = ""), 
                    "pic_arr" == e.module && (i[e.name] = []), "region" == e.module && (i[e.name] = e.default, 
                    i[e.name + "_multi"] = [ 0, 0, 0 ]), "button" == e.module && (n = e.title);
                }), 1 == e && o.setData({
                    show: !0
                }), console.log("-------------------"), console.log(o.data);
                var s = o.data.power_form ? o.data.power_form : {};
                s[t + ""] = {
                    data: i,
                    button_name: n,
                    form: l,
                    form_id: t
                }, console.log(s), o.setData({
                    power_form: s
                });
            } else a.alert(r.msg);
        }, !0);
    },
    to_str: function(e, t) {
        var o = [];
        for (var i in e) o.push({
            name: i,
            value: e[i]
        });
        return 0 < o.length ? (o.forEach(function(a) {
            for (var o = 0; o < t.length; o++) a.name == t[o].name && "checkbox" == t[o].module && (e[a.name] = e[a.name].join(","));
        }), e) : void a.error("表单不能为空");
    },
    validate: function(e, t, o) {
        var i = [], n = 0;
        for (var r in e) i.push({
            name: r,
            value: e[r]
        });
        if (0 < i.length) {
            for (var l = 0; l < i.length; l++) {
                var s = this.in_array(i[l].name, i[l].value, t);
                if (1 == s.code) {
                    n++, a.alert(s.msg);
                    break;
                }
            }
            "function" == typeof o && o(n);
        } else a.alert("表单不能为空");
    },
    in_array: function(e, t, a) {
        var o = {
            code: 0
        };
        return a.forEach(function(a) {
            if (a.name == e && a.empty && (!t || 0 == t.length)) return o.code = 1, o.msg = a.title + "不能为空", 
            o;
        }), o;
    },
    upload: function(e, t, a) {
        var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0, i = this;
        wx.showActionSheet({
            itemList: [ "从相册中选择", "拍照" ],
            itemColor: "#f7982a",
            success: function(n) {
                n.cancel || (0 == n.tapIndex ? i.chooseWxImage("album", e, t, a, o) : 1 == n.tapIndex && i.chooseWxImage("camera", e, t, a, o));
            }
        });
    },
    chooseWxImage: function(e, t, o, i, n) {
        var r = getApp().siteInfo, l = t.data.form_data ? t.data.form_data : {}, s = r.siteroot + "?i=" + r.uniacid + "&t=undefined&v=" + r.version + "&from=wxapp&c=entry&a=wxapp&do=index_uploadFile&path=" + i + "&m=yb_shop&sign=5201314";
        l[o] = l[o] ? l[o] : [], wx.chooseImage({
            sizeType: [ "original", "compressed" ],
            sourceType: [ e ],
            success: function(e) {
                0 == n ? e.tempFilePaths.forEach(function(e) {
                    wx.uploadFile({
                        url: s,
                        filePath: e,
                        name: "file_upload",
                        success: function(e) {
                            console.log(e.data), null != e.data && "" != e.data ? (l[o] = l[o].concat(e.data), 
                            t.setData({
                                form_data: l
                            })) : a.error(data.msg);
                        }
                    });
                }) : wx.uploadFile({
                    url: s,
                    filePath: e.tempFilePaths[0],
                    name: "file_upload",
                    success: function(e) {
                        null != e.data && "" != e.data ? (console.log(e.data), l[o] = e.data, t.setData({
                            form_data: l
                        })) : a.error("上传失败，请重试");
                    }
                });
            }
        });
    },
    versionfunegt: function(e, t) {
        var a = e.replace(".", ""), o = t.replace(".", "");
        return !(parseFloat(a) < parseFloat(o));
    }
};