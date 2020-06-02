function t(a) {
    var e = null;
    a <= 0 ? clearTimeout(r) : (e = i.countdown(a), r = setTimeout(function() {
        t(a - 1e3, o);
    }, 1e3)), o.setData({
        clock: e
    });
}

function a(t, e) {
    var r = o.data.group_info.list;
    if (t <= 0) clearTimeout(d[e]), r[e].coundown_str = "已结束"; else {
        var s = i.countdown_str(t);
        r[e].coundown_str = "剩余" + s, d[e] = setTimeout(function() {
            a(t - 1e3, e, o);
        }, 1e3);
    }
    o.setData({
        "group_info.list": r
    });
}

function e(t, a) {
    return t.sort().toString() == a.sort().toString();
}

var o, r, s = getApp(), n = require("../../utils/functions"), i = require("../../utils/util"), u = require("../../wxParse/wxParse.js"), d = [];

Page({
    data: {
        show_s_wrap: 0,
        userInfo: null,
        tags: [ "商品详情", "买家评价" ],
        selected: 0,
        shop: null,
        goods: {},
        attr_group: null,
        select_attr_arr: [],
        sku_info: null,
        show_choose: !1,
        buy_type: 0,
        attrPic: null,
        attrPrice: 0,
        attrStock: 0,
        input_number: 1,
        cart_num: 0,
        custom_left: 0,
        eva_list: [],
        list: null,
        commentCount: {
            totalNum: 0
        },
        page: 1,
        size: 10,
        hasNextPage: !1,
        showMore: !1,
        show_generate: 0,
        generate_w: 1,
        generate_h: 1,
        group_info: null,
        clock: null,
        attrGroupMasterPrice: null,
        attrGroupPrice: null,
        module_list: null,
        purchaseLimit: null,
        purchaseMax: null
    },
    onLoad: function(t) {
        (o = this).data.goods.goodsSn = t.goodsSn, t.show_choose && o.setData({
            show_choose: t.show_choose,
            buy_type: 1
        }), s.globalData.tgaid = t.aid, o.getGroupGoodsList();
    },
    onShow: function() {
        s.getUserInfo(function(t) {
            o.setData({
                userInfo: t
            }), o.countCartNum();
        }), s.getShopInfo(function(t) {
            2 == t.openStat && wx.redirectTo({
                url: "/pages/noAuth/noAuth"
            }), o.setData({
                shop: t
            }), s.getDistribution(function(t) {
                o.setData({
                    isOpenDistribution: t.isOpen
                });
            }), o.getGoodsInfo();
        });
    },
    onHide: function() {
        clearTimeout(r), i.stopTimeout(d);
    },
    onUnload: function() {
        clearTimeout(r), i.stopTimeout(d);
    },
    getGroupGoodsList: function() {
        o = this;
        n.getRecommendList(11, function(t) {
            var a = t.list;
            if (null != a && a.length > 0) {
                for (var e = -1, r = 0; r < a.length; r++) a[r].thumb = a[r].thumb + "?imageslim", 
                o.data.goods.goodsSn == a[r].goodsSn && (e = r);
                e > -1 && (a = a.del(e));
            }
            var s = [], n = 0;
            a.forEach(function(t) {
                n >= 2 || (s.push(t), n++);
            }), o.setData({
                module_list: s
            });
        });
    },
    getPurchaseMax: function(t) {
        i.loading(), n.getPurchaseMax(t, function(t) {
            console.log(t), o.setData({
                purchaseLimit: t.purchaseLimit,
                purchaseMax: t.purchaseMax
            }), wx.hideToast();
        });
    },
    getGoodsInfo: function() {
        i.loading(), n.getGoodsDetail(o.data.goods.goodsSn, function(e) {
            if (null == e.goods) return i.toast("商品不存在或已下架"), void setTimeout(function() {
                wx.navigateBack();
            }, 1e3);
            if (null != e.goods.masterPics && "" != e.goods.masterPics && (e.goods.masterPics = JSON.parse(e.goods.masterPics)), 
            null != e.goods.pics && "" != e.goods.pics ? e.goods.pics = JSON.parse(e.goods.pics) : e.goods.pics = e.goods.masterPics, 
            o.data.attrPic = e.goods.thumb, null != e.goods.attrs && (o.data.attr_group = JSON.parse(e.goods.attrs), 
            null != o.data.attr_group && o.data.attr_group.length > 0 && 0 == o.data.select_attr_arr.length && o.data.attr_group.forEach(function() {
                o.data.select_attr_arr.push(0);
            })), e.goods.content && u.wxParse("description", "html", e.goods.content, o, 0), 
            e.goods.rebateList = [], e.goods.rebateList && 0 != e.goods.rebateList.length) {
                var r = [], s = [];
                e.goods.rebateList.forEach(function(t) {
                    -1 != t.type.indexOf("1") && r.push(t), -1 != t.type.indexOf("2") && s.push(t);
                });
            }
            wx.hideToast(), e.goods.groupMarket && (e.goods.save_price = (parseFloat(e.goods.price) - parseFloat(e.goods.groupMarket.groupMarketPrice)).toFixed(2), 
            e.goods.groupMarket.timerOver > 0 && t(e.goods.groupMarket.timerOver, o), n.getGroupedList({
                groupMarketId: e.goods.groupMarket.groupMarketId,
                p: 1,
                s: 2
            }, function(t) {
                o.setData({
                    group_info: t.page
                });
                for (var e = 0; e < t.page.list.length; e++) a(t.page.list[e].timerOver, e);
            }), o.getPurchaseMax(e.goods.groupMarket.groupMarketId)), o.setData({
                goods: e.goods,
                attr_group: o.data.attr_group,
                select_attr_arr: o.data.select_attr_arr,
                payPrice: e.goods.price,
                rebateLength: e.goods.rebateList ? e.goods.rebateList.length : 0,
                mjList: r,
                byList: s
            }), wx.setNavigationBarTitle({
                title: e.goods.name
            }), o.calAttrPrice(), 1 == o.data.shop.openComment && o.getGoodsComments();
        });
    },
    bindAttrChange: function(t) {
        var a = t.currentTarget.id, e = parseInt(a.split(",")[0]), r = parseInt(a.split(",")[1]);
        o.data.select_attr_arr[e] = r, this.setData({
            select_attr_arr: o.data.select_attr_arr
        }), o.calAttrPrice();
    },
    calAttrPrice: function() {
        var t = o.data.attr_group, a = o.data.select_attr_arr;
        if (null == t || 0 == t.length) return o.data.goods.groupMarket && o.setData({
            attrGroupPrice: o.data.goods.groupMarket.groupMarketPrice,
            attrGroupMasterPrice: o.data.goods.groupMarket.groupMarketMasterPrice
        }), void o.setData({
            attrStock: o.data.goods.stock,
            attrPic: o.data.goods.thumb,
            attrPrice: o.data.goods.price
        });
        var r = t[0].attrs[a[0]].pic;
        void 0 != r && null != r && "" != r || (r = o.data.goods.thumb), o.setData({
            attrPic: r
        }), o.data.attrs = [];
        for (var s = 0; s < a.length; s++) o.data.attrs.push(t[s].attrs[a[s]].value);
        var n = o.data.attrs.slice(), i = o.data.goods.skuList;
        if (null != i && i.length > 0) {
            var u = i.findIndex(function(t) {
                return e(JSON.parse(t.attrs), n);
            });
            if (u >= 0) {
                var d = i[u];
                o.setData({
                    attrPrice: d.price,
                    attrStock: d.stock,
                    attrGroupMasterPrice: d.groupMarketMasterPrice,
                    attrGroupPrice: d.groupMarketPrice
                });
            }
        }
    },
    bindPlus: function(t) {
        o.data.input_number != o.data.attrStock && (o.data.input_number++, o.setData({
            input_number: o.data.input_number
        }));
    },
    bindMinus: function(t) {
        1 != o.data.input_number && (o.data.input_number--, o.setData({
            input_number: o.data.input_number
        }));
    },
    bindKeyInput: function(t) {
        var a = parseFloat(t.detail.value);
        a <= 0 ? a = 1 : a > o.data.attrStock && (a = o.data.attrStock), o.setData({
            input_number: a
        });
    },
    showChoose: function(t) {
        o.setData({
            show_choose: !0,
            buy_type: t.currentTarget.dataset.type
        });
    },
    closeChoose: function() {
        o.setData({
            show_choose: !1
        });
    },
    confirm: function() {
        if (1 == o.data.buy_type && o.add2Cart(), 2 == o.data.buy_type && o.buy(o.data.attrPrice, !0, !0), 
        3 == o.data.buy_type && o.buy(o.data.attrPrice, !0, !0), 4 == o.data.buy_type) {
            if (o.data.purchaseLimit && 1 == o.data.purchaseLimit) {
                if (0 == o.data.purchaseMax) return void wx.showToast({
                    title: "超过限购数量"
                });
                if (o.data.input_number > o.data.purchaseMax) return void wx.showToast({
                    title: "已超过最大购买数, 还可再买" + o.data.purchaseMax + "件"
                });
            }
            var t = 1 == o.data.goods.groupMarket.masterDiscount ? o.data.attrGroupMasterPrice : o.data.attrGroupPrice;
            o.buy(t, !1, !1);
        }
    },
    add2Cart: function() {
        if (o.data.attrStock <= 0) i.toast("库存为0，不能购买"); else {
            var t = {
                goodsId: o.data.goods.id,
                pic: o.data.attrPic,
                number: o.data.input_number
            };
            o.data.attrs && (t.attrs = JSON.stringify(o.data.attrs)), n.add2Cart(t, function(t) {
                i.toast("加入成功"), o.data.cart_num++, o.setData({
                    cart_num: o.data.cart_num,
                    show_choose: !1
                });
            });
        }
    },
    buy: function(t, a, e) {
        if (o.data.attrStock <= 0) i.toast("库存为0，不能购买"); else {
            var r = o.data.goods, s = {
                goodsId: r.id,
                goods: {
                    goodsSn: r.goodsSn,
                    name: r.name,
                    price: t
                },
                pic: o.data.attrPic,
                number: o.data.input_number
            };
            0 != o.data.goods.rebateList.length && (s.activityId = o.data.goods.rebateList[0].activityId), 
            o.data.attrs && (s.attrs = o.data.attrs);
            var n = {
                totalPrice: t * o.data.input_number + o.data.goods.carriage,
                deliveryFee: o.data.goods.carriage,
                list: [ s ],
                enabled_coupon: a,
                isGroup: 0
            };
            n.is_self_buy = e, o.data.goods.groupMarket && !e && (n.masterReceive = o.data.goods.groupMarket.masterReceive, 
            n.isGroup = 1, n.groupMarketId = o.data.goods.groupMarket.groupMarketId), wx.navigateTo({
                url: "../settle/settle?orders=" + encodeURIComponent(JSON.stringify(n))
            });
        }
    },
    countCartNum: function() {
        n.countCartNum(function(t) {
            o.setData({
                cart_num: t.cartNum
            });
        });
    },
    call: function() {
        s.concat();
    },
    previewImage: function(t) {
        var a = t.currentTarget.dataset.src;
        wx.previewImage({
            current: a,
            urls: o.data.goods.pics
        });
    },
    clickTag: function(t) {
        var a = parseInt(t.currentTarget.id);
        this.setData({
            selected: a,
            custom_left: -750 * a
        }), 1 == a ? this.setData({
            c1_h: 0,
            c2_h: "auto"
        }) : this.setData({
            c1_h: "auto",
            c2_h: 0
        });
    },
    scrollContent: function(t) {
        console.log(t);
        var a = t.detail.current;
        this.setData({
            selected: a
        });
    },
    getGoodsComments: function() {
        n.getGoodsComments(o.data.goods.id, {
            p: o.data.page,
            s: o.data.size
        }, function(t) {
            var a = !1;
            t.page.totalPages > o.data.page && (a = !0);
            var e = {
                totalNum: t.page.totalRows,
                wellNum: 0,
                goodNum: 0,
                badNum: 0
            }, r = t.page.list.map(function(t) {
                return 1 == t.feelNum ? e.wellNum++ : 2 == t.feelNum ? e.goodNum++ : 3 == t.feelNum && e.badNum++, 
                null != t.attrs && (t.attrsStr = JSON.parse(t.attrs).join(" & ")), t.content || (t.content = "此用户没有填写评价。"), 
                t.pics && (t.pics = JSON.parse(t.pics)), t;
            });
            e.wellPercent = parseInt(e.wellNum / e.totalNum * 100), e.goodPercent = parseInt(e.goodNum / e.totalNum * 100), 
            e.badPercent = parseInt(e.badNum / e.totalNum * 100), o.setData({
                commentCount: e,
                showMore: !1,
                hasNextPage: a,
                list: 1 == o.data.page ? r : o.data.list.concat(r)
            }), wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        0 != this.data.selected && o.data.hasNextPage && (o.setData({
            showMore: !0
        }), o.data.page++, o.getGoodsComments());
    },
    zanComment: function(t) {
        var a = t.currentTarget.id, e = this.data.list[a];
        if (0 != e.zanId) n.cancelZan(e.zanId, function(t) {
            var r = "list[" + a + "].zanId", s = {};
            s["list[" + a + "].zanNum"] = e.zanNum - 1, s[r] = 0, o.setData(s);
        }); else {
            var r = {
                goodsId: o.data.goods.id,
                commentId: e.id,
                type: 1
            };
            n.zanComment(r, function(t) {
                var r = "list[" + a + "].zanId", s = {};
                s["list[" + a + "].zanNum"] = e.zanNum + 1, s[r] = t.zanId, o.setData(s);
            });
        }
    },
    commentPicPreview: function(t) {
        var a = t.currentTarget.id, e = t.currentTarget.dataset.pidx, o = this.data.list[a];
        wx.previewImage({
            urls: o.pics,
            current: o.pics[e]
        });
    },
    reply: function(t) {
        var a = t.currentTarget.id, e = this.data.list[a], r = {
            idx: a,
            goodsId: o.data.goods.id,
            commentId: e.id,
            photo: o.data.userInfo.photo,
            username: o.data.userInfo.nickName
        };
        wx.navigateTo({
            url: "../commentinput/commentinput?commentReply=" + JSON.stringify(r)
        });
    },
    go2CommentDetail: function(t) {
        var a = this.data.list[t.currentTarget.id];
        wx.navigateTo({
            url: "../commentdetail/commentdetail?commentId=" + a.id
        });
    },
    openSSWrap: function() {
        this.setData({
            show_s_wrap: 1
        });
    },
    closeSSWrap: function() {
        this.setData({
            show_s_wrap: 0
        });
    },
    generateDidClick: function(t) {
        var a = t.currentTarget.id, e = s.getGoodsShareUrl(a, o.data.goods.goodsSn);
        if (this.closeSSWrap(), this.setData({
            show_generate: 1,
            box_h: 1 == a ? 640 : 990
        }), !this.data.photo) {
            wx.createCanvasContext("cas");
            wx.downloadFile({
                url: e,
                success: function(t) {
                    o.setData({
                        photo: t.tempFilePath
                    }), setTimeout(function() {
                        o.setData({
                            generate_w: 640,
                            generate_h: 1 == a ? 640 : 990,
                            generate_l: 0,
                            generate_t: 0
                        });
                    }, 10);
                }
            });
        }
    },
    closeGenWrap: function() {
        this.setData({
            photo: null,
            show_generate: 0
        });
    },
    savePhoto: function() {
        null != this.data.photo && wx.saveImageToPhotosAlbum({
            filePath: this.data.photo,
            success: function() {
                o.closeGenWrap(), i.toast("保存成功");
            }
        });
    },
    onShareAppMessage: function() {
        o.closeSSWrap();
        var t = s.getGoodsShareUrl(0, o.data.goods.goodsSn);
        return {
            title: o.data.goods.name,
            path: t
        };
    },
    goToJoinGroup: function(t) {
        var a = JSON.stringify(this.data.goods);
        wx.navigateTo({
            url: "/pages/groupdetail/groupdetail?goods=" + a
        });
    }
}), Array.prototype.del = function(t) {
    return t < 0 ? this : this.slice(0, t).concat(this.slice(t + 1, this.length));
};