var e = require("../../../@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getComments = function(e, o, m) {
    if (e.isFetching) return;
    o.reply_id ? a.isArriveBottom = !1 : e.setData(a);
    e.isFetching = !0, n.fetch(t.api.getCommentList, o, {}, "GET").then(function(t) {
        if (e.isFetching = !1, 200 === t.statusCode) if (t.data && 0 === t.data.ret) {
            var m = o.reply_id ? {
                comment_new: e.data.comment_new
            } : a, r = t.data.comments;
            if (o.reply_id && r) {
                var s = c(r.new, o);
                m.comment_new = m.comment_new.concat(s);
            } else r && (m.comment_selected = c(r.selected, o), m.comment_hot = c(r.hot, o), 
            m.comment_new = c(r.new, o), m.comment_count = n.transNum(r.count), m.comment_count_int = r.count);
            m.lastReplyId = i(t.data), e.setData(m);
        } else if (-1 === t.data.ret) e.setData({
            commentState: 2
        }); else {
            var r = a;
            r.commentState = 1, e.setData(r);
        } else {
            var _ = a;
            _.isLoadError = !0, e.setData(_), wx.showToast({
                icon: "none",
                title: "数据加载失败"
            });
        }
    }, function(t) {
        e.isFetching = !1;
    });
}, exports.getCommentsDetail = function(e, o, m) {
    if (e.isFetching) return;
    var r = o;
    o.coral_score ? a.isArriveBottom = !1 : (o.showtype && (a.showType = o.showtype), 
    e.setData(a));
    e.isFetching = !0, n.fetch(t.api.getReplyList, r, r, "GET").then(function(t) {
        if (e.isFetching = !1, 200 === t.statusCode) if (t.data && 0 === t.data.ret) {
            var m = o.coral_score ? {
                comment_new: e.data.comment_new
            } : a, _ = t.data.comments;
            if (o.coral_score && _) {
                var l = c(_.reply_list, r, "reply");
                m.comment_new = m.comment_new.concat(l);
            } else _ && (m.commentDetail = _.orig, m.commentDetail.isPraised = s(m.commentDetail.commentid, m.commentDetail.reply_id), 
            m.commentDetail.pub_time && (m.commentDetail.pub_time_text = n.formatDiffTime(m.commentDetail.pub_time)), 
            m.comment_count_int = _.count, m.comment_count = n.transNum(_.count), m.comment_new = c(_.reply_list, r, "reply"));
            m.lastReplyId = i(t.data, "reply"), m.showType = 1, e.setData(m);
        } else -1 === t.data.ret ? e.setData({
            commentState: 2,
            showType: 3
        }) : e.setData({
            commentState: 1,
            showType: 3
        }); else e.setData({
            commentState: 1,
            showType: 3
        });
    }, function(t) {
        e.isFetching = !1, e.setData({
            commentState: 1,
            showType: 3
        });
    });
}, exports.getThirdComment = function(e, m, a) {
    if (e.isFetching) return;
    wx.showLoading({
        title: "请求中..."
    }), e.isFetching = !0, n.fetch(t.api.getReReplyList, m, m, "GET").then(function(t) {
        if (e.isFetching = !1, wx.hideLoading(), 200 === t.statusCode) {
            var n = !(!t.data || !t.data.comments) && t.data.comments;
            if (t.data && 0 === t.data.ret) {
                if (n && n.reply_list) {
                    var a = e.data.comment_new[m.index], i = function(e) {
                        for (var t = [], n = 0, m = e.length; n < m; n++) {
                            var a = e[n];
                            a.isMe = o.isMe(a.openid), t.push(a);
                        }
                        return t;
                    }(n.reply_list);
                    a.reply = a.reply.concat(i), e.setData({
                        comment_new: e.data.comment_new
                    });
                }
            } else wx.showToast({
                icon: "none",
                title: "请求失败"
            });
        }
    }, function(t) {
        wx.hideLoading(), e.isFetching = !1, wx.showToast({
            icon: "none",
            title: "获取失败"
        });
    });
}, exports.doPraise = function(e, o) {
    return new Promise(function(m, a) {
        n.fetch(t.api.praiseComment, o, o).then(function(a) {
            var i, c, s, _;
            i = o.comment_id, c = o.rid, s = r(i, c), (_ = n.getStorage(t.STORAGE_LC_COMMENT_IS_PRAISED) || {})[s] = !0, 
            n.setStorage(t.STORAGE_LC_COMMENT_IS_PRAISED, _);
            var l = o.index;
            if (l >= 0) {
                var d = e.data.comment_new[l];
                d && d.comment && (d.comment.isPraised = !0, d.comment.agree_count = d.comment.agree_count ? ++d.comment.agree_count : 1), 
                e.setData({
                    comment_new: e.data.comment_new
                });
            } else {
                var d = e.data.commentDetail;
                d.agree_count = d.agree_count ? ++d.agree_count : 1, d.isPraised = !0, e.setData({
                    commentDetail: e.data.commentDetail
                });
            }
            m();
        }, function() {
            a();
        });
    });
}, exports.delComment = function(e, o) {
    n.fetch(t.api.delComment, o, o).then(function(t) {
        t.data && 0 === t.data.ret ? (!function(e, t) {
            var o = e.subIndex, m = e.index;
            if (o >= 0 && m >= 0) {
                var a = t.data.comment_new[m], i = a.reply;
                i.splice(o, 1), a.comment.reply_num--, t.setData({
                    comment_new: t.data.comment_new
                });
            } else if (m >= 0 && !o) {
                t.data.comment_new.splice(m, 1);
                var c = t.data.comment_count_int > 0 ? --t.data.comment_count_int : 0;
                t.setData({
                    comment_new: t.data.comment_new,
                    comment_count_int: c,
                    comment_count: n.transNum(c)
                });
            }
        }(o, e), wx.showToast({
            title: "删除成功"
        })) : wx.showToast({
            icon: "none",
            title: "删除失败"
        });
    }, function(e) {
        wx.showToast({
            icon: "none",
            title: "删除失败"
        });
    });
}, exports.addComment = function(e, o) {
    wx.showLoading();
    var a = {
        comment_id: o.commentid,
        content: o.content
    };
    o.replyid && (a.rid = o.replyid);
    n.fetch(t.api.addComment, {}, a).then(function(i) {
        wx.hideLoading(), i.data && i.data.comment && 0 === i.data.comment.ret ? (!function(e, t, o) {
            t.ret_reply_id = o.comment.reply_id;
            var a = function(e) {
                var t = {};
                return t.reply_id = e.ret_reply_id, t.commentid = e.commentid, t.reply_content = e.content, 
                t.nick = m.userInfo.nickName, t.head_url = m.userInfo.avatarUrl, t.pub_time = new Date().getTime(), 
                t.pub_time_text = "已发送", t.openid = m.comPostInfo.cmnid, t.isMe = !0, t;
            }(t);
            if (t.replyid && t.index >= 0) {
                var i = t.index, c = e.data.comment_new[i];
                c && c.reply && c.reply.length > 0 ? (c.reply = c.reply.concat([ a ]), c.comment.reply_num++) : (c.reply = [ a ], 
                c.comment.reply_num = 1), e.setData({
                    comment_new: e.data.comment_new
                });
            } else {
                var c = {};
                if (c.comment = a, c.reply = [], e.data.comment_new.length > 0) {
                    var r = ++e.data.comment_count_int;
                    e.setData({
                        comment_new: [ c ].concat(e.data.comment_new),
                        comment_count: n.transNum(r),
                        comment_count_int: r
                    });
                } else e.setData({
                    comment_new: [ c ],
                    comment_count_int: 1,
                    comment_count: 1,
                    commentState: 0
                });
            }
        }(e, o, i.data), function(e, o) {
            var m = n.getStorage(t.STORAGE_LC_COMMENT_CONTENT), e = r(e, o);
            m && (m[e] = "");
            n.setStorage(t.STORAGE_LC_COMMENT_CONTENT, m);
        }(a.comment_id, a.rid), wx.showToast({
            title: "发布成功"
        })) : wx.showToast({
            icon: "none",
            title: "发布失败"
        });
    }, function(e) {
        wx.hideLoading(), wx.showToast({
            icon: "none",
            title: "发布失败"
        });
    });
}, exports.setCommentPraiseId = r;

var t = e(require("../const")), n = e(require("../util")), o = require("../login_manager.js"), m = getApp().global, a = {
    commentDetail: {},
    commentState: 0,
    comment_selected: [],
    comment_new: [],
    comment_hot: [],
    comment_count: 0,
    comment_count_int: 0,
    lastReplyId: !1,
    isLoadError: !1,
    isArriveBottom: !1
};

function i(e, t) {
    var n = !1, o = e.comments;
    if ("reply" === t) {
        var m;
        if (e && o.bnext && o.reply_list.length > 0) (m = o.reply_list[o.reply_list.length - 1]) && (n = m.coral_score);
        return n;
    }
    e && e.bnext && o.new.length > 0 && (1 === (m = o.new[o.new.length - 1]).length && (n = m[0].reply_id), 
    2 === m.length && (n = m[1].reply_id));
    return n;
}

function c(e, t, m) {
    for (var a = [], i = 0, c = e.length; i < c; i++) {
        var r = e[i], _ = {};
        _.comment = r[0] || r, _.comment.pub_time && (_.comment.pub_time_text = n.formatDiffTime(_.comment.pub_time)), 
        _.reply = [];
        var l = "reply" === m ? r.reply_list : r[0].reply_list;
        if (l) for (var d = 0, u = l.length; d < u; d++) _.reply.push(l[d][0]), _.reply[d].isMe = o.isMe(_.reply[d].openid);
        _.comment.article_id = t.id, _.comment.isPraised = s(_.comment.commentid, _.comment.reply_id), 
        _.comment_id = _.comment.reply_id, _.comment.isMe = o.isMe(_.comment.openid), a.push(_);
    }
    return a;
}

function r(e, t) {
    var n = "";
    return e && (n = e), t && (n = "".concat(n, "_").concat(t)), n;
}

function s(e, o) {
    return !0 === (n.getStorage(t.STORAGE_LC_COMMENT_IS_PRAISED) || {})[r(e, o)];
}