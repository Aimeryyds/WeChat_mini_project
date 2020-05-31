var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/vendor" ], {
    "00bd": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            r.default.showModal({
                title: "小贴士",
                content: "请前往APP商店下载选股宝为您提供更多服务",
                showCancel: !1,
                confirmText: "知道了"
            }).then(function(e) {
                e.confirm || e.cancel;
            });
        };
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("6988"));
    },
    "00d8": function(e, t) {
        !function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t;
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t;
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                    return e;
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                    return t;
                },
                bytesToWords: function(e) {
                    for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                    return t;
                },
                wordsToBytes: function(e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t;
                },
                bytesToHex: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                    return t.join("");
                },
                hexToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                    return t;
                },
                bytesToBase64: function(e) {
                    for (var n = [], r = 0; r < e.length; r += 3) for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], i = 0; i < 4; i++) 8 * r + 6 * i <= 8 * e.length ? n.push(t.charAt(o >>> 6 * (3 - i) & 63)) : n.push("=");
                    return n.join("");
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, o = 0; r < e.length; o = ++r % 4) 0 != o && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(r)) >>> 6 - 2 * o);
                    return n;
                }
            };
            e.exports = n;
        }();
    },
    "0157": function(e, t, n) {
        var r = n("662a");
        e.exports = function(e) {
            return r(new Date(), e);
        };
    },
    "02aa": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getTimerId = t.saveTimerId = t.getDateAttribute = void 0;
        var r = "timeago-tid", o = function(e, t) {
            return e.getAttribute ? e.getAttribute(t) : e.attr ? e.attr(t) : void 0;
        };
        t.getDateAttribute = function(e) {
            return o(e, "datetime");
        };
        t.saveTimerId = function(e, t) {
            return e.setAttribute ? e.setAttribute(r, t) : e.attr ? e.attr(r, t) : void 0;
        };
        t.getTimerId = function(e) {
            return o(e, r);
        };
    },
    "03b3": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    i(e, t, n[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a(e) {
            return f.get("/api/v2/tab/recommend", o({}, e));
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.decodeWxPhone = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.openId, n = e.unionId, r = e.encryptedData, o = e.iv;
            return f.post("/baoer_backend/api/wxapp/bind-phone-number ", {
                open_id: t,
                union_id: n,
                encrypted_data: r,
                iv: o
            });
        }, t.createTopupOrder = function(e) {
            var t = e.openid, n = e.productType, r = e.messageId, o = void 0 === r ? "" : r, i = e.subscribeItemId, a = void 0 === i ? "" : i, c = e.promoteNo, u = void 0 === c ? "" : c, s = e.distributionCode, l = void 0 === s ? "" : s, d = e.wxUnionId;
            return f.request({
                method: "POST",
                url: "/baoer_backend/api/premium/wxMpBaobiOrder",
                headers: {
                    "X-Appgo-Platform": "device=wxapp;channel=weixin"
                },
                params: {
                    openid: t,
                    productType: n,
                    messageId: o,
                    subscribeItemId: a,
                    wxUnionId: d,
                    promoteNo: u,
                    distributionCode: l
                }
            });
        }, t.checkBaobiOrder = function(e) {
            return f.get("/baoer_backend/api/premium/baobiOrder/".concat(e));
        }, t.purchaseMessage = function(e) {
            var t = e.MessageId, n = e.SubjectId, r = e.CouponId, o = void 0 === r ? "" : r, i = e.PayClientType, a = void 0 === i ? 1 : i;
            return f.request("/baoer_backend/api/premium/purchaseMessage", {
                MessageId: t,
                SubjectId: n,
                CouponId: o,
                PayClientType: a
            }, {
                method: "POST"
            });
        }, t.purchaseSubject = function(e) {
            var t = e.SubjectId, n = e.ItemId, r = e.Days, o = e.Amount, i = e.CouponId, a = void 0 === i ? "" : i, c = e.PayClientType, u = void 0 === c ? 1 : c, s = e.promoteNo, l = void 0 === s ? null : s, d = e.distributionCode, p = void 0 === d ? null : d, h = e.partnerToken, g = void 0 === h ? null : h;
            return f.request("/baoer_backend/api/premium/subscribeSubject", {
                SubjectId: t,
                ItemId: n,
                Days: r,
                Amount: o,
                CouponId: a,
                PayClientType: u,
                promoteNo: l,
                distributionCode: p,
                partnerToken: g
            }, {
                method: "POST"
            });
        }, t.getSubjectInfo = function(e, t) {
            return f.get("/baoer_backend/api/wxapp/subjects/show/v2/".concat(e), o({}, t));
        }, t.fetchSubjectMessages = function(e) {
            var t = e.id, n = e.mark, r = e.msgFlowType;
            return f.get("/baoer_backend/api/wxapp/subjects/messages/v2/".concat(t), {
                limit: 10,
                mark: n,
                msg_flow_type: r
            });
        }, t.fetchBaoerMessage = function(e, t, n) {
            return f.get("/baoer_backend/api/wxapp/messages/show/v2/".concat(e), t ? o({
                subjectId: t
            }, n) : n);
        }, t.fetchMessageRelatedMessages = function(e) {
            return f.get("/api/v2/content/article/recommend/".concat(e));
        }, t.fetchMessageRelatedMessages_v2 = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
            return f.get("/api/v6/message/recommend_messages/".concat(e), {
                mark: t,
                limit: n
            });
        }, t.fetchMessageRelatedMessages_v3 = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
            return f.get("/api/v6/message/recommend_messages_page_token/".concat(e), {
                token: t,
                limit: n
            });
        }, t.getAppRecommendModules = a, t.getAppRecommendTrending = function() {
            return a({
                module: "trending_plates"
            });
        }, t.getSubjectSubscribeInfo = function(e, t, n, r, o) {
            return f.get("/baoer_backend/api/wxapp/subjects/subscribe/v2/".concat(e), {
                PromoteNo: t,
                DistributionCode: n,
                PartnerToken: r,
                Hide_Flag: o
            });
        }, t.wxLoginCode = function(e) {
            return f.post("/baoer_backend/api/wxapp/code2session", {
                code: e
            });
        }, t.wxLogin = function(e) {
            var t = {
                unionId: e.unionId,
                openId: e.openId,
                rawData: e.rawData,
                signature: e.signature,
                encryptedData: e.encryptedData,
                iv: e.iv
            };
            return f.post("/baoer_backend/api/wxapp/wechat_login", t);
        }, t.getUserInfo = function() {
            return f.get("/baoer_backend/api/wxapp/account/my_info");
        }, t.getUserSubscribe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
            return f.get("/baoer_backend/api/my/subscribes", {
                limit: t,
                mark: e
            });
        }, t.getMyFavoritesList = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return f.get("/baoer_backend/api/wxapp/my/likes", {
                limit: t,
                mark: e
            });
        }, t.getMyConcernList = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return f.get("/baoer_backend/api/wxapp/my/subjects", {
                limit: t,
                mark: e
            });
        }, t.sendCode = function(e) {
            return f.post("/baoer_backend/api/wxapp/sms_login/send_code", {
                mobile: e,
                returnCode: !0
            });
        }, t.verifyCode = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
            return f.post("/baoer_backend/api/wxapp/sms_login/verify_code", {
                mobile: e,
                code: t,
                role: n
            });
        }, t.bindWechatAndMobile = function(e) {
            var t = e.Mobile, n = e.Code, r = e.ReBind, o = e.partnerToken;
            return f.post("/baoer_backend/api/account/weixin_set_mobile/verify_code", {
                Mobile: t,
                Code: n,
                ReBind: r,
                partnerToken: o
            });
        }, t.getQrCode = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 150;
            return f.post("/baoer_backend/api/wxapp/qrcode", {
                query: t,
                page: e,
                width: n
            });
        }, t.getQueryByScene = function(e) {
            return f.post("/baoer_backend/api/wxapp/scene2query", {
                scene: e
            });
        }, t.getMessageComment = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20;
            return f.get("/api/v2/wxapp/message/".concat(e, "/comments?limit=").concat(n, "&mark=").concat(t));
        }, t.starComment = function(e, t) {
            return f.put("/api/v2/wxapp/comment/".concat(e, "/like?type=").concat(t));
        }, t.unStarComment = function(e, t) {
            return f.put("/api/v2/wxapp/comment/".concat(e, "/dislike?type=").concat(t));
        }, t.getMessageHot = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return f.get("/baoer_backend/api/wxapp/messages/hot", {
                mark: e,
                limit: t
            });
        }, t.getPersonalRecommend = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return f.get("/api/v2/content/recommendTab/personalRecommend", {
                token: e,
                limit: t
            }).then(function(e) {
                return o({}, e, {
                    items: e.items.filter(function(e) {
                        return !e.fromSubject || 9 !== e.fromSubject.id && 10 !== e.fromSubject.id;
                    })
                });
            });
        }, t.followSubject = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return f.post("/baoer_backend/api/subjects/follow/".concat(e, "?PushOn=").concat(t));
        }, t.unFollowSubject = function(e) {
            return f.post("/baoer_backend/api/subjects/unfollow/".concat(e));
        }, t.likeArticle = function(e, t) {
            return f.post("/baoer_backend/api/messages/like/".concat(e, "?SubjectId=").concat(t));
        }, t.unlikeArticle = function(e) {
            return f.post("/baoer_backend/api/messages/cancel_like/".concat(e));
        }, t.getPremiumMsgs = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return f.get("/api/v2/wxapp/my/premiumMsgs", {
                limit: t,
                mark: e
            });
        }, t.getSubjectSubscribeItem = function(e) {
            var t = e.subjectId, n = e.promoteNo, r = void 0 === n ? "" : n, o = e.distributionCode, i = void 0 === o ? "" : o, a = e.partnerToken, c = void 0 === a ? "" : a, u = e.hideFlag, s = void 0 === u ? "" : u;
            return f.get("baoer_backend/api/subjects/subscribe", {
                subjectId: t,
                promoteNo: r,
                distributionCode: i,
                partnerToken: c,
                hide_flag: s
            });
        }, t.getSubjectCoupons = function(e, t) {
            return f.get("baoer_backend/api/coupon/subject/".concat(e, "/coupons?subid=").concat(t));
        }, t.getMessageCoupons = function(e) {
            return f.get("baoer_backend/api/coupon/message/".concat(e, "/coupons"));
        }, t.fetchMessagePreferentialPrice = function(e, t) {
            return f.get("baoer_backend/api/coupon/message/".concat(e, "/price?couponId=").concat(t));
        }, t.fetchSubjectPreferentialPrice = function(e) {
            var t = e.subjectId, n = e.itemId, r = e.couponId, o = e.promoteNo, i = void 0 === o ? "" : o, a = e.distributionCode, c = void 0 === a ? "" : a, u = e.partnerToken, s = void 0 === u ? "" : u;
            return f.get("baoer_backend/api/subjects/price", {
                subjectId: t,
                itemId: n,
                couponId: r,
                promoteNo: i,
                distributionCode: c,
                partnerToken: s
            });
        }, t.getActivityInfo = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return f.get("/api/v6/bargain/activity/".concat(e));
        }, t.getGoodsInfo = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return f.get("/api/v6/bargain/activity/".concat(e, "/products"));
        }, t.createBargainOrder = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bargainActivityId, n = void 0 === t ? 1 : t, r = e.ownerId, o = void 0 === r ? 0 : r, i = e.productId, a = void 0 === i ? "" : i, c = e.productSku, u = void 0 === c ? "" : c, s = e.productType, l = void 0 === s ? "" : s;
            return f.post("/api/v6/order/bargain/create_bargain_order", {
                bargain_activity_id: n,
                owner_id: o,
                product_id: a,
                product_sku: u,
                product_type: l
            });
        }, t.helpBargain = function(e) {
            var t = e.bargainOrderNo, n = e.userId;
            return f.post("/api/v6/order/bargain/bargain", {
                bargain_order_no: t,
                user_id: +n
            });
        }, t.getBargainOrderInfo = function(e) {
            return f.get("/api/v6/order/bargain/get_bargain_order", {
                bargain_order_no: e
            });
        }, t.submitFormId = function(e) {
            var t = e.formId, n = e.openId, r = e.appId, o = void 0 === r ? "" : r;
            return f.post("baoer_backend/api/wxapp/mini-program-formid", {
                form_id: t,
                open_id: n,
                app_id: o
            });
        }, t.getActivityProducts = function(e) {
            return f.get("/api/v6/bargain/activity/".concat(e, "/products"));
        }, t.getMallItem = function(e) {
            return f.get("/baoer_backend/api/mall/items/".concat(e));
        }, t.getMallAddresses = function() {
            return f.get("/baoer_backend/api/mall/users/address");
        }, t.addNewMallAddress = function(e) {
            return f.post("/baoer_backend/api/mall/users/address", e);
        }, t.updateNewMallAddress = function(e, t) {
            return f.put("/baoer_backend/api/mall/users/address/".concat(e), t);
        }, t.getOrderList = function() {
            return f.get("/baoer_backend/api/mall/orders");
        }, t.createNewOrder = function(e) {
            return f.post("/api/v6/order/payment", e);
        }, t.getPayInfo = function(e, t) {
            return f.post("/api/v6/order/payment/info", {
                order_no: e,
                extra: t,
                pay_channel: "wxminapp"
            });
        }, t.createShareKeyByUnionId = function(e) {
            if (!e) try {
                e = u.default.state.user.loginInfo.unionId;
            } catch (e) {
                return Promise.resolve(void 0);
            }
            return f.post("/api/v6/user/create_share_key", {
                union_id: e
            }).then(function(e) {
                return e.shareKey;
            }).catch(function() {
                return Promise.reject();
            });
        }, t.reportShareRelationInfo = function(e) {
            var t = e.keyType, n = e.shareContentId, r = e.shareContentType, o = e.shareKey, i = e.traceId, a = e.userKey, c = e.channel, u = void 0 === c ? "minapp" : c;
            return f.post("/api/v6/user/report_share_relation_info", {
                channel: u,
                key_type: t,
                share_content_id: n,
                share_content_type: r,
                share_key: o,
                trace_id: i,
                user_key: a
            });
        };
        var c = n("4be4"), u = r(n("4360")), s = r(n("a06c")), f = new (n("ac60"))();
        f.config.headers = {
            "X-Appgo-Platform": "device=wxapp",
            "X-Wxapp-Id": "wx639c6cca11806f2d",
            "X-Ivanka-Platform": "baoer-platform"
        }, f.config.timeout = 6e4, f.config.baseURL = s.default.baoer, f.interceptors.request.use(function(e) {
            return e.headers["X-Appgo-Token"] = u.default.getters["user/token"], e.headers["X-Ivanka-Token"] = u.default.getters["user/token"], 
            e;
        }, function(e) {
            return Promise.reject(e);
        }), f.interceptors.response.use(function(e) {
            var t = e.data, n = t.code, r = t.errcode;
            return 2e4 === n ? (0, c.transformUnderscoreApi)(e.data.data) : r ? Promise.reject(e.data) : n ? Promise.reject(e.data) : (0, 
            c.transformCapitalApi)((0, c.transformUnderscoreApi)(e.data));
        }, function(e) {
            return Promise.reject(e);
        });
    },
    "044b": function(e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
        }
        function r(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
        }
        e.exports = function(e) {
            return null != e && (n(e) || r(e) || !!e._isBuffer);
        };
    },
    "05c6": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return !!r.default.getters["user/token"];
        };
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("4360"));
    },
    "0978": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e);
            return t.setHours(0, 0, 0, 0), t;
        };
    },
    "0d3e": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e).getTime(), o = r(t).getTime();
            return n < o ? -1 : n > o ? 1 : 0;
        };
    },
    "0f9a": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("f8c8"), o = n("761b"), i = n("ed08"), a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("a846")), c = {
            namespaced: !0,
            state: {
                commonInfo: null,
                user: null,
                wxInfo: null,
                loginInfo: wx.getStorageSync("loginInfo") || null,
                token: wx.getStorageSync("token"),
                balance: 0,
                distributioncode: ""
            },
            getters: {
                token: function(e) {
                    return e.token;
                },
                balance: function(e) {
                    return e.balance;
                },
                openId: function(e) {
                    return e.loginInfo && e.loginInfo.openId;
                }
            },
            actions: {
                wxLogin: function(e, t) {
                    var n = e.commit, o = (e.state, e.dispatch);
                    return wx.showLoading({
                        title: "登录中...",
                        mask: !1
                    }), i.wxp.login().then(function(e) {
                        return e.code;
                    }).then(function(e) {
                        return (0, r.wxLoginWSCN)(e, t);
                    }).then(function(e) {
                        wx.hideLoading();
                        var t = e.code, r = e.data;
                        if (2e4 === t) {
                            var i = r.accounts;
                            if (!r.multi_user || !Array.isArray(i)) return n("setToken", r.token), o("updateUserInfo"), 
                            r.token;
                            n("bindAccount/setWscnAccounts", i, {
                                root: !0
                            });
                        } else wx.showToast({
                            title: "登录失败，请稍后重试！",
                            icon: "none",
                            duration: 1500
                        });
                    }).catch(function(e) {
                        wx.hideLoading(), console.error("wxLogin error", e), wx.showToast({
                            title: "登录失败，请稍后重试！",
                            icon: "none",
                            duration: 1500
                        });
                    });
                },
                updateUserInfo: function(e) {
                    var t = e.commit, n = e.dispatch;
                    (0, r.getUserInfo)().then(function(e) {
                        t("setUserInfo", e), t("upDateBalance", e.balance || 0);
                    }).catch(function() {
                        n("logout");
                    });
                },
                logout: function(e) {
                    var t = e.commit;
                    return new Promise(function(e, n) {
                        try {
                            t("clearToken"), t("setWxInfo", null), t("setUserInfo", null), t("setCommonInfo", null), 
                            t("upDateBalance", 0), e(!0);
                        } catch (e) {
                            console.error("logout error", e), n(e);
                        }
                    });
                }
            },
            mutations: {
                setDistributioncode: function(e, t) {
                    e.distributioncode = t;
                },
                clearDistributioncode: function(e) {
                    e.distributioncode = "";
                },
                upDateBalance: function(e, t) {
                    e.balance = t;
                },
                setCommonInfo: function(e, t) {
                    e.commonInfo = t;
                },
                setUserInfo: function(e, t) {
                    e.user = t, o.Taotie.resetCommonData({
                        uid: t ? +t.id : 0
                    }), (0, a.default)("setUserId", t ? +t.id : 0);
                },
                setWxInfo: function(e, t) {
                    e.wxInfo = t, (0, a.default)("setVisitor", t), o.Taotie.resetCommonData({
                        userInfo: t && {
                            city: t.city,
                            country: t.country,
                            gender: t.gender,
                            language: t.language,
                            nickName: t.nickName,
                            province: t.province
                        }
                    });
                },
                setLoginInfo: function(e, t) {
                    e.loginInfo = t, wx.setStorage({
                        key: "loginInfo",
                        data: t
                    }), t.openId && t.unionId && (0, a.default)("identify", t.openId, t.unionId);
                },
                setToken: function(e, t) {
                    wx.setStorage({
                        key: "token",
                        data: t
                    }), e.token = t;
                },
                clearToken: function(e) {
                    wx.removeStorageSync("token"), e.token = "";
                }
            }
        };
        t.default = c;
    },
    "10c8": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return r(e).getFullYear();
        };
    },
    "12fd": function(e, t, n) {
        var r = n("6665");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n);
        };
    },
    "142d": function(e, t, n) {
        function r(e) {
            return a(e) || i(e) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }
        function i(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }
        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = n("f8c8"), u = {
            namespaced: !0,
            state: {
                addressList: [],
                activeAddress: null
            },
            getters: {
                addressList: function(e) {
                    return e.addressList;
                },
                activeAddress: function(e) {
                    return e.activeAddress;
                }
            },
            mutations: {
                UPDATE_ADDRESS_LIST: function(e, t) {
                    e.addressList = t;
                },
                UPDATE_SINGLE_ADDRESS_LIST: function(e, t) {
                    var n = e.addressList.findIndex(function(e) {
                        return e.id === t.id;
                    });
                    e.addressList = n > -1 ? [].concat(r(e.addressList.slice(0, n)), [ t ], r(e.addressList.slice(n + 1))) : [].concat(r(e.addressList), [ t ]);
                },
                UPDATE_ACTIVE_ADDRESS: function(e, t) {
                    e.activeAddress = t;
                }
            },
            actions: {
                init: function(e) {
                    var t = e.commit;
                    (0, c.getMallAddresses)().then(function(e) {
                        if (t("UPDATE_ADDRESS_LIST", e.items || []), e.items) for (var n = 0; n < e.items.length; n++) {
                            var r = e.items[n];
                            if (r.isDefault) {
                                t("UPDATE_ACTIVE_ADDRESS", r);
                                break;
                            }
                        }
                    });
                },
                updateAddress: function(e, t) {
                    e.commit;
                    var n = e.dispatch, r = t.id, o = t.data;
                    (0, c.updateNewMallAddress)(r, {
                        name: o.name,
                        city: o.city,
                        mobile: o.mobile,
                        address: o.address,
                        is_default: o.isDefault
                    }).then(function(e) {
                        e.errcode ? console.error(e.humanMsg || e.errmsg) : n("init");
                    }).catch(function(e) {
                        console.error(e);
                    });
                },
                addAddress: function(e, t) {
                    e.commit;
                    var n = e.dispatch;
                    (0, c.addNewMallAddress)({
                        name: t.name,
                        city: t.city,
                        mobile: t.mobile,
                        address: t.address,
                        is_default: t.isDefault
                    }).then(function(e) {
                        e.errcode ? console.error(e.humanMsg || e.errmsg) : n("init");
                    }).catch(function(e) {
                        console.error(e);
                    });
                }
            }
        };
        t.default = u;
    },
    "145e": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e);
            return t.setMilliseconds(999), t;
        };
    },
    "158b": function(e, t, n) {
        var r = n("c8d5"), o = n("3814");
        e.exports = function(e, t) {
            var n = r(e), i = Number(t) - (Math.floor(n.getMonth() / 3) + 1);
            return o(n, n.getMonth() + 3 * i);
        };
    },
    1753: function _(module, exports, __webpack_require__) {
        (function(global) {
            !function(e, t) {
                t(exports);
            }(0, function(exports) {
                function __extends(e, t) {
                    function n() {
                        this.constructor = e;
                    }
                    _extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
                    new n());
                }
                function __decorate(e, t, n, r) {
                    var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" == ("undefined" == typeof Reflect ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
                    return i > 3 && a && Object.defineProperty(t, n, a), a;
                }
                function request(e) {
                    return new Promise(function(t, n) {
                        wx.request(_assign({}, e, {
                            success: function(e) {
                                e.statusCode >= 200 && e.statusCode < 300 ? t && t(e.data) : n && n(e.data);
                            },
                            fail: function(e) {
                                n && n(e);
                            }
                        }));
                    });
                }
                function setStorage(e) {
                    return new Promise(function(t, n) {
                        wx.setStorage(_assign({}, e, {
                            success: function(e) {
                                t(e);
                            },
                            fail: function(e) {
                                n(e);
                            }
                        }));
                    });
                }
                function getStorage(e) {
                    return new Promise(function(t, n) {
                        wx.getStorage({
                            key: e,
                            success: function(e) {
                                t(e.data);
                            },
                            fail: function(e) {
                                n(e);
                            }
                        });
                    });
                }
                function getSystemInfo() {
                    return new Promise(function(e, t) {
                        wx.getSystemInfo({
                            success: function(t) {
                                e(t);
                            },
                            fail: function(e) {
                                t(e);
                            }
                        });
                    });
                }
                function getNetworkType() {
                    return new Promise(function(e, t) {
                        wx.getNetworkType({
                            success: function(t) {
                                e(t.networkType);
                            },
                            fail: function(e) {
                                t(e);
                            }
                        });
                    });
                }
                function onNetworkStatusChange(e) {
                    wx.onNetworkStatusChange(function(t) {
                        e(t.networkType);
                    });
                }
                function functionWrapper(e, t, n) {
                    var r = e[t];
                    e[t] = function(e) {
                        return n.call(this, e), r && r.call(this, e);
                    };
                }
                function syncTime(e) {
                    return new Promise(function(t) {
                        request({
                            url: e + "/v1/time",
                            method: "GET"
                        }).then(function(e) {
                            t(e.time - Date.now());
                        }).catch(function() {
                            t(0);
                        });
                    });
                }
                function readonlyDecorator() {
                    return function(e, t, n) {
                        return n.writable = !1, n;
                    };
                }
                function createCommonjsModule(e, t) {
                    return t = {
                        exports: {}
                    }, e(t, t.exports), t.exports;
                }
                function isBuffer(e) {
                    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
                }
                function isSlowBuffer(e) {
                    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && isBuffer(e.slice(0, 0));
                }
                var _extendStatics = function(e, t) {
                    return (_extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    })(e, t);
                }, _assign = function() {
                    return (_assign = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
                }, STORAGE_KEY = "tracker_tasks", WeChatStore = function() {
                    function e(e) {
                        this.data = [], this.config = e;
                    }
                    return e.prototype.get = function() {
                        return getStorage("tracker_tasks").then(function(e) {
                            return Promise.resolve(e);
                        }).catch(function(e) {
                            return Promise.resolve([]);
                        });
                    }, e.prototype.update = function(e) {
                        return this.data = e, setStorage({
                            key: "tracker_tasks",
                            data: e
                        });
                    }, e;
                }(), helper = {
                    DEBUG: !0,
                    log: function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = new Date(), r = this.format(n.getHours()) + ":" + this.format(n.getMinutes()) + ":" + this.format(n.getSeconds());
                        this.DEBUG && console.log.apply(console, [ "%c[🔍 tracker] " + r, "color:rgba(118,147,92,1);" ].concat(e));
                    },
                    format: function(e, t) {
                        return void 0 === e && (e = ""), void 0 === t && (t = 2), ("00" + e).slice(0 - t);
                    }
                }, CommonDataVendor = function() {
                    function e(e) {
                        this.config = e;
                    }
                    return e.validate = function(e, t) {
                        var n = {
                            required: [],
                            optional: []
                        };
                        for (var r in t) t.hasOwnProperty(r) && !e[r] && n[1 === t[r] ? "required" : "optional"].push(r);
                        return n;
                    }, e;
                }(), WeChatCommonDataVender = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this;
                    }
                    return __extends(t, e), t.prototype.getCommonData = function(e) {
                        var t = e.onLaunchOption, n = void 0 === t ? {} : t;
                        return Promise.all([ this.getDeviceId(n), getSystemInfo(), getNetworkType() ]).then(function(e) {
                            var t = e[0], n = e[1], r = e[2], o = n.system.split(/\s+/), i = {
                                __debug: 1,
                                channel: "wechat",
                                deviceInfo: {
                                    deviceId: t,
                                    appName: "",
                                    appVersion: "",
                                    osName: o[0],
                                    osVersion: o[1],
                                    connectionType: "NONE" === r.toUpperCase() ? "UNCONNECTED" : r.toUpperCase(),
                                    resolution: n.windowHeight + "X" + n.windowWidth,
                                    deviceModel: n.model,
                                    deviceBrand: n.brand,
                                    orientation: "PORTRAIT",
                                    timezoneOffset: Math.round(new Date().getTimezoneOffset() / 60 * -1)
                                },
                                userInfo: {
                                    gender: 0,
                                    nickName: "",
                                    country: "",
                                    province: "",
                                    city: "",
                                    launguage: ""
                                },
                                additional: {},
                                uid: 0
                            };
                            return Promise.resolve(i);
                        });
                    }, t.prototype.getDeviceId = function(e) {
                        var t = this;
                        return e.device_id ? this.setDeviceId(e.device_id) : getStorage(this.config.deviceIdKey).then(function(e) {
                            return Promise.resolve(e);
                        }).catch(function(e) {
                            return t.setDeviceId(t.genUUId());
                        });
                    }, t.prototype.setDeviceId = function(e) {
                        var t = this;
                        return setStorage({
                            key: this.config.deviceIdKey,
                            data: e
                        }).then(function() {
                            return Promise.resolve(e);
                        }, function() {
                            return setStorage({
                                key: t.config.deviceIdKey,
                                data: e
                            }), Promise.resolve(e);
                        });
                    }, t.prototype.genUUId = function() {
                        return Date.now() + "-" + Math.floor(1e7 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8);
                    }, t;
                }(CommonDataVendor), WeChatSender = function() {
                    function e(e, t) {
                        this.url = e.trackerHost, this.config = e, this.commonData = t;
                    }
                    return e.prototype.send = function(e) {
                        var t = this, n = this.url + "/v1/track", r = e.map(function(e) {
                            e.data.additional = Object.assign({}, t.commonData.additional, e.data.additional);
                            var n = _assign({}, t.commonData, e.data);
                            return "function" == typeof t.config.beforeSend && (n = t.config.beforeSend(n)), 
                            n;
                        });
                        return helper.log("打点数据校验结果:", e, WeChatCommonDataVender.validate(r, this.config.dataScheme)), 
                        request({
                            url: n,
                            method: this.config.httpMethod,
                            data: r
                        }).then(function() {
                            return e.forEach(function(e) {
                                return e.isSucceed();
                            }), Promise.resolve(e);
                        }).catch(function() {
                            return e.forEach(function(e) {
                                return e.isFailed();
                            }), Promise.resolve(e);
                        });
                    }, e;
                }(), NetworkDetector = function() {
                    return function(e) {
                        this.config = e;
                    };
                }(), WeChatNetworkDetector = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this;
                    }
                    return __extends(t, e), t.prototype.getNetworkStatus = function() {
                        return getNetworkType().then(function(e) {
                            return Promise.resolve(e);
                        }, function(e) {
                            return console.error("[tracker] 获取网络状态失败", e), Promise.resolve("none");
                        });
                    }, t.prototype.watchNetworkStatusChange = function(e) {
                        onNetworkStatusChange(e);
                    }, t;
                }(NetworkDetector), TASK_STATUS;
                !function(e) {
                    e[e.SUCCESS = -1] = "SUCCESS", e[e.PENDING = 0] = "PENDING", e[e.FAILED = 1] = "FAILED";
                }(TASK_STATUS || (TASK_STATUS = {}));
                var Task = function() {
                    function e(e) {
                        var t = Date.now();
                        this._id = Math.random().toString(16).replace(".", ""), this.status = TASK_STATUS.PENDING, 
                        this.data = e, this.timestamp = t;
                    }
                    return e.prototype.isSucceed = function() {
                        this.status = TASK_STATUS.SUCCESS;
                    }, e.prototype.isFailed = function() {
                        this.status++;
                    }, e;
                }(), QUEUE_EXECUTOR_STATUS;
                !function(e) {
                    e[e.IDLE = 0] = "IDLE", e[e.PAUSE = 1] = "PAUSE", e[e.RUNNING = 2] = "RUNNING";
                }(QUEUE_EXECUTOR_STATUS || (QUEUE_EXECUTOR_STATUS = {}));
                var QueueManager = function() {
                    function e(e) {
                        this.queue = [], this.failedQueue = [], this.config = e, this.lastStoreUpdate = 0, 
                        this.executor = new Executor();
                    }
                    return e.prototype.init = function(e) {
                        var t = this;
                        this.sender || (this.store = e.store, this.sender = e.sender, this.executor.init(this.sender, this), 
                        this.store.get().then(function(e) {
                            var n;
                            (n = t.queue).push.apply(n, e.map(function(e) {
                                return new Task(e.data);
                            })), t.run();
                        }));
                    }, e.prototype.push = function(e) {
                        e.status === TASK_STATUS.PENDING && this.queue.length < this.config.queueMaxLength ? (this.queue.push(e), 
                        this.updateStore(), this.run()) : e.status >= TASK_STATUS.FAILED && e.status <= this.config.retry && (this.failedQueue.push(e), 
                        this.updateStore(), this.run());
                    }, e.prototype.intrude = function(e) {
                        this.sender && this.sender.send([ e ]);
                    }, e.prototype.pop = function() {
                        var e = this.failedQueue.concat(this.queue);
                        return this.failedQueue = [], this.queue = [], this.updateStore(), e;
                    }, e.prototype.updateStore = function(e) {
                        var t = Date.now();
                        (this.store && t - this.lastStoreUpdate >= 500 || e && this.store) && (this.store.update(this.queue.concat(this.failedQueue)), 
                        this.lastStoreUpdate = t);
                    }, e.prototype.run = function() {
                        setTimeout(this.executor.run.bind(this.executor), 0);
                    }, e.prototype.length = function() {
                        return this.failedQueue.length + this.queue.length;
                    }, e.prototype.suspend = function(e) {
                        this.updateStore(!0), this.executor.suspend(e);
                    }, e;
                }(), Executor = function() {
                    function e() {
                        this.status = QUEUE_EXECUTOR_STATUS.IDLE;
                    }
                    return Object.defineProperty(e.prototype, "isIdle", {
                        get: function() {
                            return this.sender && this.queueManager && this.status === QUEUE_EXECUTOR_STATUS.IDLE;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.init = function(e, t) {
                        this.sender = e, this.queueManager = t;
                    }, e.prototype.run = function() {
                        var e = this;
                        this.isIdle && (this.queueManager.length() >= this.queueManager.config.MaxBufferSize ? this.exec() : this.timer = setTimeout(function() {
                            e.exec();
                        }, this.queueManager.config.interval));
                    }, e.prototype.exec = function() {
                        var e = this, t = this.queueManager.pop();
                        t.length ? (this.status = QUEUE_EXECUTOR_STATUS.RUNNING, this.sender.send(t).then(function(t) {
                            t.forEach(function(t) {
                                t.status !== TASK_STATUS.SUCCESS && e.queueManager.push(t);
                            });
                        }).then(function() {
                            e.timer = setTimeout(function() {
                                e.exec();
                            }, e.queueManager.config.interval);
                        })) : this.status = QUEUE_EXECUTOR_STATUS.IDLE;
                    }, e.prototype.suspend = function(e) {
                        e ? (this.status = QUEUE_EXECUTOR_STATUS.PAUSE, clearTimeout(this.timer)) : this.status === QUEUE_EXECUTOR_STATUS.PAUSE ? (this.status = QUEUE_EXECUTOR_STATUS.IDLE, 
                        this.run()) : this.status === QUEUE_EXECUTOR_STATUS.IDLE && this.run();
                    }, e;
                }(), Core = function() {
                    function e(e) {
                        this.config = e, this.queueManager = new QueueManager(this.config);
                    }
                    return e.prototype.init = function(e) {
                        this.queueManager.init(_assign({}, e));
                    }, e.prototype.log = function(e) {
                        this.queueManager.push(e);
                    }, e.prototype.forceLog = function(e) {
                        this.queueManager.intrude(e);
                    }, e;
                }(), DEFAULT_CONFIG = {
                    debug: !0,
                    httpMethod: "POST",
                    trackerHost: "https://dashuju-sit.wallstreetcn.com",
                    retry: 2,
                    interval: 1e3,
                    groupMaxLength: 5,
                    timestampKey: "time",
                    deviceIdKey: "device_id",
                    queueMaxLength: 500,
                    commonData: {},
                    dataScheme: {},
                    sourceSrcKey: "src",
                    detectChanel: !0,
                    detectAppStart: !0,
                    attachActionToUrl: !1,
                    autoPageView: function(e, t) {
                        t({
                            eventName: "MiniPageViewEvent",
                            topicName: "MiniPageViewEvent"
                        });
                    },
                    beforeSend: function(e) {
                        for (var t in e) !e.hasOwnProperty(t) || null !== e[t] && void 0 !== e[t] || delete e[t];
                        return e;
                    }
                }, Initializer = function() {
                    return function(e) {
                        void 0 === e && (e = {}), Object.assign(this, DEFAULT_CONFIG, e);
                    };
                }(), Tracker = function() {
                    function e(e) {
                        void 0 === e && (e = {}), this.config = new Initializer(e), this.core = new Core(this.config), 
                        helper.DEBUG = this.config.debug, this.core.queueManager.suspend(!0), this.networkDetector = new WeChatNetworkDetector(this.config), 
                        this.commonDataVendor = new WeChatCommonDataVender(this.config);
                    }
                    return e.prototype.init = function(e) {
                        var t = this;
                        if (!this.sender) {
                            var n = this.handleNetworkStatusChange.bind(this);
                            this.sender = new WeChatSender(this.config, e), this.store = new WeChatStore(this.config), 
                            this.core.init({
                                sender: this.sender,
                                store: this.store
                            }), syncTime(this.config.trackerHost).then(function(e) {
                                t.timeOffset = e;
                            }), this.networkDetector.getNetworkStatus().then(n, n), this.networkDetector.watchNetworkStatusChange(n), 
                            helper.log("初始化完成");
                        }
                    }, e.prototype.handleNetworkStatusChange = function(e) {
                        var t = "none" === e || e instanceof Error;
                        this.core.queueManager.suspend(t);
                    }, e.prototype.log = function(e) {
                        this.injectTimestamp(e), this.core.log(new Task(e));
                    }, e.prototype.forceLog = function(e) {
                        this.injectTimestamp(e), this.core.forceLog(new Task(e));
                    }, e.prototype.injectTimestamp = function(e) {
                        if (void 0 === e[this.config.timestampKey]) {
                            var t = Date.now() + (this.timeOffset || 0);
                            e[this.config.timestampKey] = t;
                        }
                        return e;
                    }, e.prototype.resetCommonData = function(e) {
                        this.core.queueManager.sender && (this.core.queueManager.sender.commonData = Object.assign({}, this.core.queueManager.sender.commonData, e));
                    }, __decorate([ readonlyDecorator() ], e.prototype, "init", null), __decorate([ readonlyDecorator() ], e.prototype, "handleNetworkStatusChange", null), 
                    __decorate([ readonlyDecorator() ], e.prototype, "log", null), __decorate([ readonlyDecorator() ], e.prototype, "forceLog", null), 
                    __decorate([ readonlyDecorator() ], e.prototype, "injectTimestamp", null), __decorate([ readonlyDecorator() ], e.prototype, "resetCommonData", null), 
                    e;
                }(), commonjsGlobal = "undefined" != typeof window ? window : void 0 !== global ? global : "undefined" != typeof self ? self : {}, base64 = createCommonjsModule(function(module, exports) {
                    !function(global, factory) {
                        module.exports = function(global) {
                            global = global || {};
                            var _Base64 = global.Base64, version = "2.5.1", buffer;
                            if (module.exports) try {
                                buffer = eval("require('buffer').Buffer");
                            } catch (e) {
                                buffer = void 0;
                            }
                            var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b64tab = function(e) {
                                for (var t = {}, n = 0, r = e.length; n < r; n++) t[e.charAt(n)] = n;
                                return t;
                            }(b64chars), fromCharCode = String.fromCharCode, cb_utob = function(e) {
                                if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? fromCharCode(192 | t >>> 6) + fromCharCode(128 | 63 & t) : fromCharCode(224 | t >>> 12 & 15) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t);
                                var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                                return fromCharCode(240 | t >>> 18 & 7) + fromCharCode(128 | t >>> 12 & 63) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t);
                            }, re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, utob = function(e) {
                                return e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, cb_utob);
                            }, cb_encode = function(e) {
                                var t = [ 0, 2, 1 ][e.length % 3], n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                                return [ b64chars.charAt(n >>> 18), b64chars.charAt(n >>> 12 & 63), t >= 2 ? "=" : b64chars.charAt(n >>> 6 & 63), t >= 1 ? "=" : b64chars.charAt(63 & n) ].join("");
                            }, btoa = global.btoa ? function(e) {
                                return global.btoa(e);
                            } : function(e) {
                                return e.replace(/[\s\S]{1,3}/g, cb_encode);
                            }, _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(e) {
                                return (e.constructor === buffer.constructor ? e : buffer.from(e)).toString("base64");
                            } : function(e) {
                                return (e.constructor === buffer.constructor ? e : new buffer(e)).toString("base64");
                            } : function(e) {
                                return btoa(utob(e));
                            }, encode = function(e, t) {
                                return t ? _encode(String(e)).replace(/[+\/]/g, function(e) {
                                    return "+" == e ? "-" : "_";
                                }).replace(/=/g, "") : _encode(String(e));
                            }, encodeURI = function(e) {
                                return encode(e, !0);
                            }, re_btou = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), cb_btou = function(e) {
                                switch (e.length) {
                                  case 4:
                                    var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                                    return fromCharCode(55296 + (t >>> 10)) + fromCharCode(56320 + (1023 & t));

                                  case 3:
                                    return fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

                                  default:
                                    return fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
                                }
                            }, btou = function(e) {
                                return e.replace(re_btou, cb_btou);
                            }, cb_decode = function(e) {
                                var t = e.length, n = t % 4, r = (t > 0 ? b64tab[e.charAt(0)] << 18 : 0) | (t > 1 ? b64tab[e.charAt(1)] << 12 : 0) | (t > 2 ? b64tab[e.charAt(2)] << 6 : 0) | (t > 3 ? b64tab[e.charAt(3)] : 0), o = [ fromCharCode(r >>> 16), fromCharCode(r >>> 8 & 255), fromCharCode(255 & r) ];
                                return o.length -= [ 0, 0, 2, 1 ][n], o.join("");
                            }, _atob = global.atob ? function(e) {
                                return global.atob(e);
                            } : function(e) {
                                return e.replace(/\S{1,4}/g, cb_decode);
                            }, atob = function(e) {
                                return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""));
                            }, _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(e) {
                                return (e.constructor === buffer.constructor ? e : buffer.from(e, "base64")).toString();
                            } : function(e) {
                                return (e.constructor === buffer.constructor ? e : new buffer(e, "base64")).toString();
                            } : function(e) {
                                return btou(_atob(e));
                            }, decode = function(e) {
                                return _decode(String(e).replace(/[-_]/g, function(e) {
                                    return "-" == e ? "+" : "/";
                                }).replace(/[^A-Za-z0-9\+\/]/g, ""));
                            }, noConflict = function() {
                                var e = global.Base64;
                                return global.Base64 = _Base64, e;
                            };
                            if (global.Base64 = {
                                VERSION: "2.5.1",
                                atob: atob,
                                btoa: btoa,
                                fromBase64: decode,
                                toBase64: encode,
                                utob: utob,
                                encode: encode,
                                encodeURI: encodeURI,
                                btou: btou,
                                decode: decode,
                                noConflict: noConflict,
                                __buffer__: buffer
                            }, "function" == typeof Object.defineProperty) {
                                var noEnum = function(e) {
                                    return {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    };
                                };
                                global.Base64.extendString = function() {
                                    Object.defineProperty(String.prototype, "fromBase64", noEnum(function() {
                                        return decode(this);
                                    })), Object.defineProperty(String.prototype, "toBase64", noEnum(function(e) {
                                        return encode(this, e);
                                    })), Object.defineProperty(String.prototype, "toBase64URI", noEnum(function() {
                                        return encode(this, !0);
                                    }));
                                };
                            }
                            return global.Meteor && (Base64 = global.Base64), module.exports && (module.exports.Base64 = global.Base64), 
                            {
                                Base64: global.Base64
                            };
                        }(global);
                    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : commonjsGlobal);
                }), base64_1 = base64.Base64, crypt = createCommonjsModule(function(e) {
                    !function() {
                        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
                            rotl: function(e, t) {
                                return e << t | e >>> 32 - t;
                            },
                            rotr: function(e, t) {
                                return e << 32 - t | e >>> t;
                            },
                            endian: function(e) {
                                if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                                for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                                return e;
                            },
                            randomBytes: function(e) {
                                for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                                return t;
                            },
                            bytesToWords: function(e) {
                                for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                                return t;
                            },
                            wordsToBytes: function(e) {
                                for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                                return t;
                            },
                            bytesToHex: function(e) {
                                for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                                return t.join("");
                            },
                            hexToBytes: function(e) {
                                for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                                return t;
                            },
                            bytesToBase64: function(e) {
                                for (var n = [], r = 0; r < e.length; r += 3) for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], i = 0; i < 4; i++) 8 * r + 6 * i <= 8 * e.length ? n.push(t.charAt(o >>> 6 * (3 - i) & 63)) : n.push("=");
                                return n.join("");
                            },
                            base64ToBytes: function(e) {
                                e = e.replace(/[^A-Z0-9+\/]/gi, "");
                                for (var n = [], r = 0, o = 0; r < e.length; o = ++r % 4) 0 != o && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(r)) >>> 6 - 2 * o);
                                return n;
                            }
                        };
                        e.exports = n;
                    }();
                }), charenc = {
                    utf8: {
                        stringToBytes: function(e) {
                            return charenc.bin.stringToBytes(unescape(encodeURIComponent(e)));
                        },
                        bytesToString: function(e) {
                            return decodeURIComponent(escape(charenc.bin.bytesToString(e)));
                        }
                    },
                    bin: {
                        stringToBytes: function(e) {
                            for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                            return t;
                        },
                        bytesToString: function(e) {
                            for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                            return t.join("");
                        }
                    }
                }, charenc_1 = charenc, isBuffer_1 = function(e) {
                    return null != e && (isBuffer(e) || isSlowBuffer(e) || !!e._isBuffer);
                }, md5 = createCommonjsModule(function(e) {
                    !function() {
                        var t = crypt, n = charenc_1.utf8, r = isBuffer_1, o = charenc_1.bin, i = function e(i, a) {
                            i.constructor == String ? i = a && "binary" === a.encoding ? o.stringToBytes(i) : n.stringToBytes(i) : r(i) ? i = Array.prototype.slice.call(i, 0) : Array.isArray(i) || (i = i.toString());
                            for (var c = t.bytesToWords(i), u = 8 * i.length, s = 1732584193, f = -271733879, l = -1732584194, d = 271733878, p = 0; p < c.length; p++) c[p] = 16711935 & (c[p] << 8 | c[p] >>> 24) | 4278255360 & (c[p] << 24 | c[p] >>> 8);
                            c[u >>> 5] |= 128 << u % 32, c[14 + (u + 64 >>> 9 << 4)] = u;
                            var h = e._ff, g = e._gg, v = e._hh, m = e._ii;
                            for (p = 0; p < c.length; p += 16) {
                                var y = s, b = f, _ = l, w = d;
                                f = m(f = m(f = m(f = m(f = v(f = v(f = v(f = v(f = g(f = g(f = g(f = g(f = h(f = h(f = h(f = h(f, l = h(l, d = h(d, s = h(s, f, l, d, c[p + 0], 7, -680876936), f, l, c[p + 1], 12, -389564586), s, f, c[p + 2], 17, 606105819), d, s, c[p + 3], 22, -1044525330), l = h(l, d = h(d, s = h(s, f, l, d, c[p + 4], 7, -176418897), f, l, c[p + 5], 12, 1200080426), s, f, c[p + 6], 17, -1473231341), d, s, c[p + 7], 22, -45705983), l = h(l, d = h(d, s = h(s, f, l, d, c[p + 8], 7, 1770035416), f, l, c[p + 9], 12, -1958414417), s, f, c[p + 10], 17, -42063), d, s, c[p + 11], 22, -1990404162), l = h(l, d = h(d, s = h(s, f, l, d, c[p + 12], 7, 1804603682), f, l, c[p + 13], 12, -40341101), s, f, c[p + 14], 17, -1502002290), d, s, c[p + 15], 22, 1236535329), l = g(l, d = g(d, s = g(s, f, l, d, c[p + 1], 5, -165796510), f, l, c[p + 6], 9, -1069501632), s, f, c[p + 11], 14, 643717713), d, s, c[p + 0], 20, -373897302), l = g(l, d = g(d, s = g(s, f, l, d, c[p + 5], 5, -701558691), f, l, c[p + 10], 9, 38016083), s, f, c[p + 15], 14, -660478335), d, s, c[p + 4], 20, -405537848), l = g(l, d = g(d, s = g(s, f, l, d, c[p + 9], 5, 568446438), f, l, c[p + 14], 9, -1019803690), s, f, c[p + 3], 14, -187363961), d, s, c[p + 8], 20, 1163531501), l = g(l, d = g(d, s = g(s, f, l, d, c[p + 13], 5, -1444681467), f, l, c[p + 2], 9, -51403784), s, f, c[p + 7], 14, 1735328473), d, s, c[p + 12], 20, -1926607734), l = v(l, d = v(d, s = v(s, f, l, d, c[p + 5], 4, -378558), f, l, c[p + 8], 11, -2022574463), s, f, c[p + 11], 16, 1839030562), d, s, c[p + 14], 23, -35309556), l = v(l, d = v(d, s = v(s, f, l, d, c[p + 1], 4, -1530992060), f, l, c[p + 4], 11, 1272893353), s, f, c[p + 7], 16, -155497632), d, s, c[p + 10], 23, -1094730640), l = v(l, d = v(d, s = v(s, f, l, d, c[p + 13], 4, 681279174), f, l, c[p + 0], 11, -358537222), s, f, c[p + 3], 16, -722521979), d, s, c[p + 6], 23, 76029189), l = v(l, d = v(d, s = v(s, f, l, d, c[p + 9], 4, -640364487), f, l, c[p + 12], 11, -421815835), s, f, c[p + 15], 16, 530742520), d, s, c[p + 2], 23, -995338651), l = m(l, d = m(d, s = m(s, f, l, d, c[p + 0], 6, -198630844), f, l, c[p + 7], 10, 1126891415), s, f, c[p + 14], 15, -1416354905), d, s, c[p + 5], 21, -57434055), l = m(l, d = m(d, s = m(s, f, l, d, c[p + 12], 6, 1700485571), f, l, c[p + 3], 10, -1894986606), s, f, c[p + 10], 15, -1051523), d, s, c[p + 1], 21, -2054922799), l = m(l, d = m(d, s = m(s, f, l, d, c[p + 8], 6, 1873313359), f, l, c[p + 15], 10, -30611744), s, f, c[p + 6], 15, -1560198380), d, s, c[p + 13], 21, 1309151649), l = m(l, d = m(d, s = m(s, f, l, d, c[p + 4], 6, -145523070), f, l, c[p + 11], 10, -1120210379), s, f, c[p + 2], 15, 718787259), d, s, c[p + 9], 21, -343485551), 
                                s = s + y >>> 0, f = f + b >>> 0, l = l + _ >>> 0, d = d + w >>> 0;
                            }
                            return t.endian([ s, f, l, d ]);
                        };
                        i._ff = function(e, t, n, r, o, i, a) {
                            var c = e + (t & n | ~t & r) + (o >>> 0) + a;
                            return (c << i | c >>> 32 - i) + t;
                        }, i._gg = function(e, t, n, r, o, i, a) {
                            var c = e + (t & r | n & ~r) + (o >>> 0) + a;
                            return (c << i | c >>> 32 - i) + t;
                        }, i._hh = function(e, t, n, r, o, i, a) {
                            var c = e + (t ^ n ^ r) + (o >>> 0) + a;
                            return (c << i | c >>> 32 - i) + t;
                        }, i._ii = function(e, t, n, r, o, i, a) {
                            var c = e + (n ^ (t | ~r)) + (o >>> 0) + a;
                            return (c << i | c >>> 32 - i) + t;
                        }, i._blocksize = 16, i._digestsize = 16, e.exports = function(e, n) {
                            if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
                            var r = t.wordsToBytes(i(e, n));
                            return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r);
                        };
                    }();
                }), BxTracker = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this;
                    }
                    return __extends(t, e), t.prototype.createSessionId = function() {
                        var e = Date.now() + (this.timeOffset || 0);
                        this.sessionStart = e, this.sessionId = md5("" + e + Math.random().toString().slice(2, 7).padEnd(5, "0"));
                    }, t.prototype.checkSessionId = function() {
                        Date.now() + (this.timeOffset || 0) - this.sessionStart > 18e5 && (this.createSessionId(), 
                        tracker.resetCommonData({
                            sessionId: this.sessionId
                        }));
                    }, t.generateTrackerInstance = function(e) {
                        var n = {};
                        try {
                            var r = __webpack_require__("1871");
                            Object.assign(n, r);
                        } catch (t) {
                            !e && console.log("缺少配置文件 anka-tracker.config.js", t);
                        }
                        e && Object.assign(n, e);
                        var o = new t(n);
                        if (o.createSessionId(), "undefined" != typeof App && "undefined" != typeof Page) {
                            var i = App, a = Page;
                            App = function(e) {
                                return functionWrapper(e, "onLaunch", function(e) {
                                    o.onLaunchOption = e, o.track({
                                        eventName: "MiniActivatedEvent",
                                        topicName: "MiniActivatedEvent",
                                        additional: {
                                            scene: "" + e.scene,
                                            path: e.path || "",
                                            shareTicket: e.shareTicket || "",
                                            referrerInfo: JSON.stringify(e.referrerInfo) || "",
                                            query: JSON.stringify(e.query)
                                        }
                                    });
                                }), i(e);
                            }, Page = function(e) {
                                function t(e) {
                                    return base64_1.encode(md5("" + o.deviceId + e + "+ " + (Date.now() + (o.timeOffset || 0))));
                                }
                                return functionWrapper(e, "onLoad", function(e) {
                                    this.__page_params__ = e;
                                }), "function" == typeof o.config.autoPageView && (functionWrapper(e, "onShow", function() {
                                    var e = getCurrentPages().slice(), n = e.pop(), r = e.pop(), i = {
                                        route: n.route,
                                        previousRoute: r ? r.route : "",
                                        previousTrackingId: r ? t(r.route) : "",
                                        trackingId: t(n.route)
                                    };
                                    o.resetCommonData({
                                        pageInfo: i
                                    }), o.pageViewStart = +new Date();
                                }), functionWrapper(e, "onHide", function() {
                                    var e = getCurrentPages().slice().pop();
                                    o.config.autoPageView(e, function(e) {
                                        o.pv(e, {
                                            additional: {
                                                durational: +new Date() - o.pageViewStart
                                            }
                                        });
                                    });
                                })), a(e);
                            };
                        } else console.log("anka-tracker无法在当前环境运行！");
                        return o;
                    }, t.prototype.asyncInitWithCommonData = function(e) {
                        var t = this;
                        return void 0 === e && (e = {}), e.sessionId = this.sessionId, this.commonDataVendor.getCommonData({
                            onLaunchOption: Object.assign({}, e, this.onLaunchOption)
                        }).then(function(n) {
                            var r = n, o = Object.keys(r).concat(Object.keys(t.config.commonData), Object.keys(e));
                            (o = Array.from(new Set(o))).forEach(function(n) {
                                "[object Object]" === Object.prototype.toString.call(r[n]) ? Object.assign(r[n], t.config.commonData[n], e[n]) : r[n] = t.config.commonData[n] || e[n] || r[n];
                            }), t.init(r);
                        }).catch(function(e) {
                            helper.log("初始化失败"), console.log(e);
                        });
                    }, t.prototype.composeCommonData = function(e) {
                        var t = [];
                        return e.map(function(e) {
                            "function" == typeof e ? t.push(new Promise(function(t) {
                                e(t);
                            })) : t.push(Promise.resolve(e));
                        }), t.push(Promise.resolve(this.injectTimestamp({}))), Promise.all(t).then(function(e) {
                            return Promise.resolve(Object.assign.apply(Object, [ {} ].concat(e)));
                        });
                    }, t.prototype.track = function() {
                        for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        this.checkSessionId(), this.composeCommonData(t).then(function(t) {
                            return e.log(t);
                        });
                    }, t.prototype.forceTrack = function() {
                        for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        this.checkSessionId(), this.composeCommonData(t).then(function(t) {
                            return e.forceLog(t);
                        });
                    }, t.prototype.evt = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.track.apply(this, [ {
                            eventName: "MiniControlClickedEvent",
                            topicName: "MiniControlClickedEvent"
                        } ].concat(e));
                    }, t.prototype.forceEvt = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.forceTrack.apply(this, [ {
                            eventName: "MiniControlClickedEvent",
                            topicName: "MiniControlClickedEvent"
                        } ].concat(e));
                    }, t.prototype.pv = function() {
                        for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        this.composeCommonData(t).then(function(t) {
                            e.track(Object.assign(t));
                        });
                    }, __decorate([ readonlyDecorator() ], t.prototype, "createSessionId", null), __decorate([ readonlyDecorator() ], t.prototype, "checkSessionId", null), 
                    __decorate([ readonlyDecorator() ], t.prototype, "asyncInitWithCommonData", null), 
                    __decorate([ readonlyDecorator() ], t.prototype, "composeCommonData", null), __decorate([ readonlyDecorator() ], t.prototype, "track", null), 
                    __decorate([ readonlyDecorator() ], t.prototype, "forceTrack", null), __decorate([ readonlyDecorator() ], t.prototype, "evt", null), 
                    __decorate([ readonlyDecorator() ], t.prototype, "forceEvt", null), __decorate([ readonlyDecorator() ], t.prototype, "pv", null), 
                    t;
                }(Tracker), tracker = BxTracker.generateTrackerInstance({});
                exports.Tracker = Tracker, exports.BxTracker = BxTracker, exports.tracker = tracker, 
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                });
            });
        }).call(this, __webpack_require__("c8ba"));
    },
    "17cd": function(e, t, n) {
        var r = n("c8d5"), o = n("b2e9"), i = n("0d3e");
        e.exports = function(e, t) {
            var n = r(e), a = r(t), c = i(n, a), u = Math.abs(o(n, a));
            return n.setMonth(n.getMonth() - c * u), c * (u - (i(n, a) === -c));
        };
    },
    1871: function(e, t) {
        e.exports = {};
    },
    "18b7": function(e, t, n) {
        var r = n("72b7");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n);
        };
    },
    "1a84": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                return r(e);
            }), t = Math.min.apply(null, e);
            return new Date(t);
        };
    },
    "1baf": function(e, t, n) {
        var r = n("c7ce");
        e.exports = function(e, t, n) {
            var o = r(e, n), i = r(t, n);
            return o.getTime() === i.getTime();
        };
    },
    "1cc6": function(e, t, n) {
        var r = n("ec1f"), o = 36e5;
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, n * o);
        };
    },
    2095: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
            return (0, r.format)(e, t);
        };
        var r = n("340b");
    },
    "20b1": function(e, t, n) {
        var r = n("0978");
        e.exports = function(e) {
            var t = new Date();
            return t.setDate(t.getDate() + 1), r(e).getTime() === r(t).getTime();
        };
    },
    "20ca": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, n) {
            var r, o, i = function() {
                var i = this, a = arguments;
                if (r && clearTimeout(r), n) {
                    var c = !r;
                    r = setTimeout(function() {
                        r = null;
                    }, t), c && (o = e.apply(i, a));
                } else r = setTimeout(function() {
                    e.apply(i, a);
                }, t);
                return o;
            };
            return i.cancel = function() {
                r && (clearTimeout(r), r = null);
            }, i;
        };
    },
    2299: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e);
            return t.setMilliseconds(0), t;
        };
    },
    "231c": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return r(e).getSeconds();
        };
    },
    2366: function(e, t) {
        for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
        e.exports = function(e, t) {
            var r = t || 0, o = n;
            return [ o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]] ].join("");
        };
    },
    "24ec": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, n) {
            return "function" != typeof t && (t = function(e) {
                return e > 0;
            }), "function" != typeof n && (n = function(e) {
                return e < 0;
            }), t(e) ? "number-color-up" : n(e) ? "number-color-down" : "number-color-default";
        };
    },
    2507: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return 1 === r(e).getDay();
        };
    },
    "26d5": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getFullYear() === o.getFullYear();
        };
    },
    "271a": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e);
            return t.setMinutes(59, 59, 999), t;
        };
    },
    "27a1": function(e, t, n) {
        var r = n("8964"), o = n("9706");
        e.exports = function(e, t) {
            var n = Number(t);
            return o(e, r(e) + n);
        };
    },
    "27ae": function ae(module, exports, __webpack_require__) {
        (function(global) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !function(e, t) {
                module.exports = t(e);
            }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== global ? global : this, function(global) {
                global = global || {};
                var _Base64 = global.Base64, version = "2.5.1", buffer;
                if (module.exports) try {
                    buffer = eval("require('buffer').Buffer");
                } catch (e) {
                    buffer = void 0;
                }
                var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b64tab = function(e) {
                    for (var t = {}, n = 0, r = e.length; n < r; n++) t[e.charAt(n)] = n;
                    return t;
                }(b64chars), fromCharCode = String.fromCharCode, cb_utob = function(e) {
                    if (e.length < 2) {
                        var t = e.charCodeAt(0);
                        return t < 128 ? e : t < 2048 ? fromCharCode(192 | t >>> 6) + fromCharCode(128 | 63 & t) : fromCharCode(224 | t >>> 12 & 15) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t);
                    }
                    return t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320), 
                    fromCharCode(240 | t >>> 18 & 7) + fromCharCode(128 | t >>> 12 & 63) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t);
                }, re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, utob = function(e) {
                    return e.replace(re_utob, cb_utob);
                }, cb_encode = function(e) {
                    var t = [ 0, 2, 1 ][e.length % 3], n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                    return [ b64chars.charAt(n >>> 18), b64chars.charAt(n >>> 12 & 63), t >= 2 ? "=" : b64chars.charAt(n >>> 6 & 63), t >= 1 ? "=" : b64chars.charAt(63 & n) ].join("");
                }, btoa = global.btoa ? function(e) {
                    return global.btoa(e);
                } : function(e) {
                    return e.replace(/[\s\S]{1,3}/g, cb_encode);
                }, _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(e) {
                    return (e.constructor === buffer.constructor ? e : buffer.from(e)).toString("base64");
                } : function(e) {
                    return (e.constructor === buffer.constructor ? e : new buffer(e)).toString("base64");
                } : function(e) {
                    return btoa(utob(e));
                }, encode = function(e, t) {
                    return t ? _encode(String(e)).replace(/[+\/]/g, function(e) {
                        return "+" == e ? "-" : "_";
                    }).replace(/=/g, "") : _encode(String(e));
                }, encodeURI = function(e) {
                    return encode(e, !0);
                }, re_btou = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), cb_btou = function(e) {
                    switch (e.length) {
                      case 4:
                        var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                        return fromCharCode(55296 + (t >>> 10)) + fromCharCode(56320 + (1023 & t));

                      case 3:
                        return fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

                      default:
                        return fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
                    }
                }, btou = function(e) {
                    return e.replace(re_btou, cb_btou);
                }, cb_decode = function(e) {
                    var t = e.length, n = t % 4, r = (t > 0 ? b64tab[e.charAt(0)] << 18 : 0) | (t > 1 ? b64tab[e.charAt(1)] << 12 : 0) | (t > 2 ? b64tab[e.charAt(2)] << 6 : 0) | (t > 3 ? b64tab[e.charAt(3)] : 0), o = [ fromCharCode(r >>> 16), fromCharCode(r >>> 8 & 255), fromCharCode(255 & r) ];
                    return o.length -= [ 0, 0, 2, 1 ][n], o.join("");
                }, _atob = global.atob ? function(e) {
                    return global.atob(e);
                } : function(e) {
                    return e.replace(/\S{1,4}/g, cb_decode);
                }, atob = function(e) {
                    return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""));
                }, _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(e) {
                    return (e.constructor === buffer.constructor ? e : buffer.from(e, "base64")).toString();
                } : function(e) {
                    return (e.constructor === buffer.constructor ? e : new buffer(e, "base64")).toString();
                } : function(e) {
                    return btou(_atob(e));
                }, decode = function(e) {
                    return _decode(String(e).replace(/[-_]/g, function(e) {
                        return "-" == e ? "+" : "/";
                    }).replace(/[^A-Za-z0-9\+\/]/g, ""));
                }, noConflict = function() {
                    var e = global.Base64;
                    return global.Base64 = _Base64, e;
                };
                if (global.Base64 = {
                    VERSION: version,
                    atob: atob,
                    btoa: btoa,
                    fromBase64: decode,
                    toBase64: encode,
                    utob: utob,
                    encode: encode,
                    encodeURI: encodeURI,
                    btou: btou,
                    decode: decode,
                    noConflict: noConflict,
                    __buffer__: buffer
                }, "function" == typeof Object.defineProperty) {
                    var noEnum = function(e) {
                        return {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        };
                    };
                    global.Base64.extendString = function() {
                        Object.defineProperty(String.prototype, "fromBase64", noEnum(function() {
                            return decode(this);
                        })), Object.defineProperty(String.prototype, "toBase64", noEnum(function(e) {
                            return encode(this, e);
                        })), Object.defineProperty(String.prototype, "toBase64URI", noEnum(function() {
                            return encode(this, !0);
                        }));
                    };
                }
                return global.Meteor && (Base64 = global.Base64), module.exports ? module.exports.Base64 = global.Base64 : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], 
                void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return global.Base64;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), 
                {
                    Base64: global.Base64
                };
            });
        }).call(this, __webpack_require__("c8ba"));
    },
    "284b": function(e, t, n) {
        function r(e) {
            return a(e) || i(e) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }
        function i(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }
        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = {
            namespaced: !0,
            state: function() {
                return {
                    stack: []
                };
            },
            getters: {
                currentStack: function(e) {
                    return e.stack[e.stack.length - 1];
                },
                isPayingMessage: function(e, t) {
                    return "pay message" === t.currentStack;
                },
                isChoosingSubscription: function(e, t) {
                    return e.stack.includes("choose subject subscribe item");
                },
                isPayingSubject: function(e, t) {
                    return "pay subject" === t.currentStack;
                },
                isVerifingMobile: function(e, t) {
                    return "verify mobile" === t.currentStack;
                },
                isVerifiedAndSuccedded: function(e, t) {
                    return "verified and succedded" === t.currentStack;
                },
                isDealingVerifyConflict: function(e, t) {
                    return "deal verify conflict" === t.currentStack;
                },
                isSucceededInBuyingSubject: function(e, t) {
                    return "buy subject succeeded" === t.currentStack;
                },
                isReadingLessonsChapter: function(e, t) {
                    return "read lessons chapter" === t.currentStack;
                },
                isReadingDistributionInfo: function(e, t) {
                    return "read distribution info" === t.currentStack;
                },
                isChooseCoupon: function(e, t) {
                    return "choose coupon" === t.currentStack;
                }
            },
            actions: {
                pushOverlayStack: function(e, t) {
                    e.state, (0, e.commit)("pushOverlayStack", t);
                },
                replaceOverlayStack: function(e, t) {
                    e.state, (0, e.commit)("replaceOverlayStack", t);
                },
                popOverlayStack: function(e) {
                    var t = e.commit, n = e.state;
                    t("popOverlayStack"), n.stack.length || (t("subscribe/unSelectMessage", null, {
                        root: !0
                    }), t("subscribe/unSelectSubject", null, {
                        root: !0
                    }));
                },
                popOverlayStackAfterPopState: function(e) {
                    (0, e.commit)("popOverlayStack");
                },
                clearOverlayStack: function(e) {
                    var t = e.state, n = e.commit;
                    t.stack.length && (n("clearOverlayStack"), n("subscribe/unSelectMessage", null, {
                        root: !0
                    }), n("subscribe/unSelectSubject", null, {
                        root: !0
                    }), n("subscribe/clearCoupon", null, {
                        root: !0
                    }));
                }
            },
            mutations: {
                pushOverlayStack: function(e, t) {
                    e.stack = [].concat(r(e.stack), [ t ]);
                },
                replaceOverlayStack: function(e, t) {
                    e.stack = e.stack.slice(0, e.stack.length - 1).concat([ t ]);
                },
                popOverlayStack: function(e) {
                    e.stack = e.stack.slice(0, e.stack.length - 1);
                },
                clearOverlayStack: function(e) {
                    e.stack = [];
                }
            }
        };
        t.default = c;
    },
    2877: function(e, t, n) {
        function r(e, t, n, r, o, i, a, c) {
            var u, s = "function" == typeof e ? e.options : e;
            if (t && (s.render = t, s.staticRenderFns = n, s._compiled = !0), r && (s.functional = !0), 
            i && (s._scopeId = "data-v-" + i), a ? (u = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), 
                o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a);
            }, s._ssrRegister = u) : o && (u = c ? function() {
                o.call(this, this.$root.$options.shadowRoot);
            } : o), u) if (s.functional) {
                s._injectStyles = u;
                var f = s.render;
                s.render = function(e, t) {
                    return u.call(t), f(e, t);
                };
            } else {
                var l = s.beforeCreate;
                s.beforeCreate = l ? [].concat(l, u) : [ u ];
            }
            return {
                exports: e,
                options: s
            };
        }
        n.d(t, "a", function() {
            return r;
        });
    },
    "2a80": function(e, t, n) {
        var r = n("9aaa");
        e.exports = function(e) {
            return r(new Date(), e);
        };
    },
    "2a9c": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getFullYear() - o.getFullYear();
        };
    },
    "2b57": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return 0 === r(e).getDay();
        };
    },
    "2b67": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return r(e).getTime() > new Date().getTime();
        };
    },
    "2d0a": function(e, t, n) {
        String.prototype.padEnd = String.prototype.padEnd ? String.prototype.padEnd : function(e, t) {
            if ((e = Math.floor(e) || 0) < this.length) return String(this);
            t = t ? String(t) : " ";
            for (var n = "", r = e - this.length, o = 0; n.length < r; ) t[o] || (o = 0), n += t[o], 
            o++;
            return String(this).slice(0) + n;
        };
    },
    "2d23": function(e, t, n) {
        var r = n("1baf");
        e.exports = function(e, t) {
            return r(new Date(), e, t);
        };
    },
    "2d96": function(e, t) {
        e.exports = function() {
            var e = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: {
                    one: "1 second",
                    other: "{{count}} seconds"
                },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: {
                    one: "1 hour",
                    other: "{{count}} hours"
                },
                xDays: {
                    one: "1 day",
                    other: "{{count}} days"
                },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: {
                    one: "1 month",
                    other: "{{count}} months"
                },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: {
                    one: "1 year",
                    other: "{{count}} years"
                },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            };
            return {
                localize: function(t, n, r) {
                    var o;
                    return r = r || {}, o = "string" == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace("{{count}}", n), 
                    r.addSuffix ? r.comparison > 0 ? "in " + o : o + " ago" : o;
                }
            };
        };
    },
    "2f1a": function(e, t, n) {
        var r = n("c7ce"), o = 6e4, i = 6048e5;
        e.exports = function(e, t, n) {
            var a = r(e, n), c = r(t, n), u = a.getTime() - a.getTimezoneOffset() * o, s = c.getTime() - c.getTimezoneOffset() * o;
            return Math.round((u - s) / i);
        };
    },
    "2f62": function(e, t, n) {
        n.r(t), function(e) {
            function r(e) {
                function t() {
                    var e = this.$options;
                    e.store ? this.$store = "function" == typeof e.store ? e.store() : e.store : e.parent && e.parent.$store && (this.$store = e.parent.$store);
                }
                if (Number(e.version.split(".")[0]) >= 2) e.mixin({
                    beforeCreate: t
                }); else {
                    var n = e.prototype._init;
                    e.prototype._init = function(e) {
                        void 0 === e && (e = {}), e.init = e.init ? [ t ].concat(e.init) : t, n.call(this, e);
                    };
                }
            }
            function o(e) {
                T && (e._devtoolHook = T, T.emit("vuex:init", e), T.on("vuex:travel-to-state", function(t) {
                    e.replaceState(t);
                }), e.subscribe(function(e, t) {
                    T.emit("vuex:mutation", e, t);
                }));
            }
            function i(e, t) {
                Object.keys(e).forEach(function(n) {
                    return t(e[n], n);
                });
            }
            function a(e) {
                return null !== e && "object" === (void 0 === e ? "undefined" : _typeof(e));
            }
            function c(e) {
                return e && "function" == typeof e.then;
            }
            function u(e, t) {
                return function() {
                    return e(t);
                };
            }
            function s(e, t, n) {
                if (t.update(n), n.modules) for (var r in n.modules) {
                    if (!t.getChild(r)) return;
                    s(e.concat(r), t.getChild(r), n.modules[r]);
                }
            }
            function f(e, t) {
                return t.indexOf(e) < 0 && t.push(e), function() {
                    var n = t.indexOf(e);
                    n > -1 && t.splice(n, 1);
                };
            }
            function l(e, t) {
                e._actions = Object.create(null), e._mutations = Object.create(null), e._wrappedGetters = Object.create(null), 
                e._modulesNamespaceMap = Object.create(null);
                var n = e.state;
                p(e, n, [], e._modules.root, !0), d(e, n, t);
            }
            function d(e, t, n) {
                var r = e._vm;
                e.getters = {};
                var o = {};
                i(e._wrappedGetters, function(t, n) {
                    o[n] = u(t, e), Object.defineProperty(e.getters, n, {
                        get: function() {
                            return e._vm[n];
                        },
                        enumerable: !0
                    });
                });
                var a = A.config.silent;
                A.config.silent = !0, e._vm = new A({
                    data: {
                        $$state: t
                    },
                    computed: o
                }), A.config.silent = a, e.strict && b(e), r && (n && e._withCommit(function() {
                    r._data.$$state = null;
                }), A.nextTick(function() {
                    return r.$destroy();
                }));
            }
            function p(e, t, n, r, o) {
                var i = !n.length, a = e._modules.getNamespace(n);
                if (r.namespaced && (e._modulesNamespaceMap[a] = r), !i && !o) {
                    var c = _(t, n.slice(0, -1)), u = n[n.length - 1];
                    e._withCommit(function() {
                        A.set(c, u, r.state);
                    });
                }
                var s = r.context = h(e, a, n);
                r.forEachMutation(function(t, n) {
                    v(e, a + n, t, s);
                }), r.forEachAction(function(t, n) {
                    var r = t.root ? n : a + n, o = t.handler || t;
                    m(e, r, o, s);
                }), r.forEachGetter(function(t, n) {
                    y(e, a + n, t, s);
                }), r.forEachChild(function(r, i) {
                    p(e, t, n.concat(i), r, o);
                });
            }
            function h(e, t, n) {
                var r = "" === t, o = {
                    dispatch: r ? e.dispatch : function(n, r, o) {
                        var i = w(n, r, o), a = i.payload, c = i.options, u = i.type;
                        return c && c.root || (u = t + u), e.dispatch(u, a);
                    },
                    commit: r ? e.commit : function(n, r, o) {
                        var i = w(n, r, o), a = i.payload, c = i.options, u = i.type;
                        c && c.root || (u = t + u), e.commit(u, a, c);
                    }
                };
                return Object.defineProperties(o, {
                    getters: {
                        get: r ? function() {
                            return e.getters;
                        } : function() {
                            return g(e, t);
                        }
                    },
                    state: {
                        get: function() {
                            return _(e.state, n);
                        }
                    }
                }), o;
            }
            function g(e, t) {
                var n = {}, r = t.length;
                return Object.keys(e.getters).forEach(function(o) {
                    if (o.slice(0, r) === t) {
                        var i = o.slice(r);
                        Object.defineProperty(n, i, {
                            get: function() {
                                return e.getters[o];
                            },
                            enumerable: !0
                        });
                    }
                }), n;
            }
            function v(e, t, n, r) {
                (e._mutations[t] || (e._mutations[t] = [])).push(function(t) {
                    n.call(e, r.state, t);
                });
            }
            function m(e, t, n, r) {
                (e._actions[t] || (e._actions[t] = [])).push(function(t, o) {
                    var i = n.call(e, {
                        dispatch: r.dispatch,
                        commit: r.commit,
                        getters: r.getters,
                        state: r.state,
                        rootGetters: e.getters,
                        rootState: e.state
                    }, t, o);
                    return c(i) || (i = Promise.resolve(i)), e._devtoolHook ? i.catch(function(t) {
                        throw e._devtoolHook.emit("vuex:error", t), t;
                    }) : i;
                });
            }
            function y(e, t, n, r) {
                e._wrappedGetters[t] || (e._wrappedGetters[t] = function(e) {
                    return n(r.state, r.getters, e.state, e.getters);
                });
            }
            function b(e) {
                e._vm.$watch(function() {
                    return this._data.$$state;
                }, function() {}, {
                    deep: !0,
                    sync: !0
                });
            }
            function _(e, t) {
                return t.length ? t.reduce(function(e, t) {
                    return e[t];
                }, e) : e;
            }
            function w(e, t, n) {
                return a(e) && e.type && (n = t, t = e, e = e.type), {
                    type: e,
                    payload: t,
                    options: n
                };
            }
            function S(e) {
                A && e === A || (A = e, r(A));
            }
            function x(e) {
                return Array.isArray(e) ? e.map(function(e) {
                    return {
                        key: e,
                        val: e
                    };
                }) : Object.keys(e).map(function(t) {
                    return {
                        key: t,
                        val: e[t]
                    };
                });
            }
            function O(e) {
                return function(t, n) {
                    return "string" != typeof t ? (n = t, t = "") : "/" !== t.charAt(t.length - 1) && (t += "/"), 
                    e(t, n);
                };
            }
            function k(e, t, n) {
                return e._modulesNamespaceMap[n];
            }
            n.d(t, "Store", function() {
                return C;
            }), n.d(t, "install", function() {
                return S;
            }), n.d(t, "mapState", function() {
                return E;
            }), n.d(t, "mapMutations", function() {
                return M;
            }), n.d(t, "mapGetters", function() {
                return $;
            }), n.d(t, "mapActions", function() {
                return L;
            }), n.d(t, "createNamespacedHelpers", function() {
                return N;
            });
            var T = ("undefined" != typeof window ? window : void 0 !== e ? e : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__, j = function(e, t) {
                this.runtime = t, this._children = Object.create(null), this._rawModule = e;
                var n = e.state;
                this.state = ("function" == typeof n ? n() : n) || {};
            }, P = {
                namespaced: {
                    configurable: !0
                }
            };
            P.namespaced.get = function() {
                return !!this._rawModule.namespaced;
            }, j.prototype.addChild = function(e, t) {
                this._children[e] = t;
            }, j.prototype.removeChild = function(e) {
                delete this._children[e];
            }, j.prototype.getChild = function(e) {
                return this._children[e];
            }, j.prototype.update = function(e) {
                this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), 
                e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters);
            }, j.prototype.forEachChild = function(e) {
                i(this._children, e);
            }, j.prototype.forEachGetter = function(e) {
                this._rawModule.getters && i(this._rawModule.getters, e);
            }, j.prototype.forEachAction = function(e) {
                this._rawModule.actions && i(this._rawModule.actions, e);
            }, j.prototype.forEachMutation = function(e) {
                this._rawModule.mutations && i(this._rawModule.mutations, e);
            }, Object.defineProperties(j.prototype, P);
            var I = function(e) {
                this.register([], e, !1);
            };
            I.prototype.get = function(e) {
                return e.reduce(function(e, t) {
                    return e.getChild(t);
                }, this.root);
            }, I.prototype.getNamespace = function(e) {
                var t = this.root;
                return e.reduce(function(e, n) {
                    return t = t.getChild(n), e + (t.namespaced ? n + "/" : "");
                }, "");
            }, I.prototype.update = function(e) {
                s([], this.root, e);
            }, I.prototype.register = function(e, t, n) {
                var r = this;
                void 0 === n && (n = !0);
                var o = new j(t, n);
                0 === e.length ? this.root = o : this.get(e.slice(0, -1)).addChild(e[e.length - 1], o), 
                t.modules && i(t.modules, function(t, o) {
                    r.register(e.concat(o), t, n);
                });
            }, I.prototype.unregister = function(e) {
                var t = this.get(e.slice(0, -1)), n = e[e.length - 1];
                t.getChild(n).runtime && t.removeChild(n);
            };
            var A, C = function(e) {
                var t = this;
                void 0 === e && (e = {}), !A && "undefined" != typeof window && window.Vue && S(window.Vue);
                var n = e.plugins;
                void 0 === n && (n = []);
                var r = e.strict;
                void 0 === r && (r = !1), this._committing = !1, this._actions = Object.create(null), 
                this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), 
                this._modules = new I(e), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], 
                this._watcherVM = new A();
                var i = this, a = this, c = a.dispatch, u = a.commit;
                this.dispatch = function(e, t) {
                    return c.call(i, e, t);
                }, this.commit = function(e, t, n) {
                    return u.call(i, e, t, n);
                }, this.strict = r;
                var s = this._modules.root.state;
                p(this, s, [], this._modules.root), d(this, s), n.forEach(function(e) {
                    return e(t);
                }), (void 0 !== e.devtools ? e.devtools : A.config.devtools) && o(this);
            }, D = {
                state: {
                    configurable: !0
                }
            };
            D.state.get = function() {
                return this._vm._data.$$state;
            }, D.state.set = function(e) {}, C.prototype.commit = function(e, t, n) {
                var r = this, o = w(e, t, n), i = o.type, a = o.payload, c = (o.options, {
                    type: i,
                    payload: a
                }), u = this._mutations[i];
                u && (this._withCommit(function() {
                    u.forEach(function(e) {
                        e(a);
                    });
                }), this._subscribers.forEach(function(e) {
                    return e(c, r.state);
                }));
            }, C.prototype.dispatch = function(e, t) {
                var n = this, r = w(e, t), o = r.type, i = r.payload, a = {
                    type: o,
                    payload: i
                }, c = this._actions[o];
                if (c) {
                    try {
                        this._actionSubscribers.filter(function(e) {
                            return e.before;
                        }).forEach(function(e) {
                            return e.before(a, n.state);
                        });
                    } catch (e) {}
                    return (c.length > 1 ? Promise.all(c.map(function(e) {
                        return e(i);
                    })) : c[0](i)).then(function(e) {
                        try {
                            n._actionSubscribers.filter(function(e) {
                                return e.after;
                            }).forEach(function(e) {
                                return e.after(a, n.state);
                            });
                        } catch (e) {}
                        return e;
                    });
                }
            }, C.prototype.subscribe = function(e) {
                return f(e, this._subscribers);
            }, C.prototype.subscribeAction = function(e) {
                return f("function" == typeof e ? {
                    before: e
                } : e, this._actionSubscribers);
            }, C.prototype.watch = function(e, t, n) {
                var r = this;
                return this._watcherVM.$watch(function() {
                    return e(r.state, r.getters);
                }, t, n);
            }, C.prototype.replaceState = function(e) {
                var t = this;
                this._withCommit(function() {
                    t._vm._data.$$state = e;
                });
            }, C.prototype.registerModule = function(e, t, n) {
                void 0 === n && (n = {}), "string" == typeof e && (e = [ e ]), this._modules.register(e, t), 
                p(this, this.state, e, this._modules.get(e), n.preserveState), d(this, this.state);
            }, C.prototype.unregisterModule = function(e) {
                var t = this;
                "string" == typeof e && (e = [ e ]), this._modules.unregister(e), this._withCommit(function() {
                    var n = _(t.state, e.slice(0, -1));
                    A.delete(n, e[e.length - 1]);
                }), l(this);
            }, C.prototype.hotUpdate = function(e) {
                this._modules.update(e), l(this, !0);
            }, C.prototype._withCommit = function(e) {
                var t = this._committing;
                this._committing = !0, e(), this._committing = t;
            }, Object.defineProperties(C.prototype, D);
            var E = O(function(e, t) {
                var n = {};
                return x(t).forEach(function(t) {
                    var r = t.key, o = t.val;
                    n[r] = function() {
                        var t = this.$store.state, n = this.$store.getters;
                        if (e) {
                            var r = k(this.$store, 0, e);
                            if (!r) return;
                            t = r.context.state, n = r.context.getters;
                        }
                        return "function" == typeof o ? o.call(this, t, n) : t[o];
                    }, n[r].vuex = !0;
                }), n;
            }), M = O(function(e, t) {
                var n = {};
                return x(t).forEach(function(t) {
                    var r = t.key, o = t.val;
                    n[r] = function() {
                        for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                        var r = this.$store.commit;
                        if (e) {
                            var i = k(this.$store, 0, e);
                            if (!i) return;
                            r = i.context.commit;
                        }
                        return "function" == typeof o ? o.apply(this, [ r ].concat(t)) : r.apply(this.$store, [ o ].concat(t));
                    };
                }), n;
            }), $ = O(function(e, t) {
                var n = {};
                return x(t).forEach(function(t) {
                    var r = t.key, o = t.val;
                    o = e + o, n[r] = function() {
                        if (!e || k(this.$store, 0, e)) return this.$store.getters[o];
                    }, n[r].vuex = !0;
                }), n;
            }), L = O(function(e, t) {
                var n = {};
                return x(t).forEach(function(t) {
                    var r = t.key, o = t.val;
                    n[r] = function() {
                        for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                        var r = this.$store.dispatch;
                        if (e) {
                            var i = k(this.$store, 0, e);
                            if (!i) return;
                            r = i.context.dispatch;
                        }
                        return "function" == typeof o ? o.apply(this, [ r ].concat(t)) : r.apply(this.$store, [ o ].concat(t));
                    };
                }), n;
            }), N = function(e) {
                return {
                    mapState: E.bind(null, e),
                    mapGetters: $.bind(null, e),
                    mapMutations: M.bind(null, e),
                    mapActions: L.bind(null, e)
                };
            }, U = {
                Store: C,
                install: S,
                version: "3.1.1",
                mapState: E,
                mapMutations: M,
                mapGetters: $,
                mapActions: L,
                createNamespacedHelpers: N
            };
            t.default = U;
        }.call(this, n("c8ba"));
    },
    "2f8f": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = Number(t);
            return n.setFullYear(o), n;
        };
    },
    "2fff": function(e, t, n) {
        var r = n("4497");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getTime() === o.getTime();
        };
    },
    "30d1": function(e, t, n) {
        var r = n("0978");
        e.exports = function(e) {
            return r(e).getTime() === r(new Date()).getTime();
        };
    },
    "340b": function(e, t, n) {
        e.exports = {
            addDays: n("8946"),
            addHours: n("1cc6"),
            addISOYears: n("27a1"),
            addMilliseconds: n("ec1f"),
            addMinutes: n("72b7"),
            addMonths: n("6665"),
            addQuarters: n("f5dd"),
            addSeconds: n("af1b"),
            addWeeks: n("7a83"),
            addYears: n("fcb3"),
            areRangesOverlapping: n("eaa5"),
            closestIndexTo: n("7fd8"),
            closestTo: n("4f67"),
            compareAsc: n("0d3e"),
            compareDesc: n("c873"),
            differenceInCalendarDays: n("d420"),
            differenceInCalendarISOWeeks: n("82dc"),
            differenceInCalendarISOYears: n("f9ff"),
            differenceInCalendarMonths: n("b2e9"),
            differenceInCalendarQuarters: n("fb36"),
            differenceInCalendarWeeks: n("2f1a"),
            differenceInCalendarYears: n("2a9c"),
            differenceInDays: n("3bc7"),
            differenceInHours: n("d2ed"),
            differenceInISOYears: n("b3f5"),
            differenceInMilliseconds: n("e785"),
            differenceInMinutes: n("6570"),
            differenceInMonths: n("17cd"),
            differenceInQuarters: n("8301"),
            differenceInSeconds: n("e13a"),
            differenceInWeeks: n("ee91"),
            differenceInYears: n("6fcc"),
            distanceInWords: n("366b"),
            distanceInWordsStrict: n("bb7c"),
            distanceInWordsToNow: n("6254"),
            eachDay: n("c4c2"),
            endOfDay: n("9744"),
            endOfHour: n("271a"),
            endOfISOWeek: n("4175"),
            endOfISOYear: n("861d"),
            endOfMinute: n("3ac3"),
            endOfMonth: n("d6f8"),
            endOfQuarter: n("3691"),
            endOfSecond: n("145e"),
            endOfToday: n("7443"),
            endOfTomorrow: n("6f4e"),
            endOfWeek: n("7494"),
            endOfYear: n("d975"),
            endOfYesterday: n("e51d"),
            format: n("70f2"),
            getDate: n("b60f"),
            getDay: n("c2b5"),
            getDayOfYear: n("580f"),
            getDaysInMonth: n("5416"),
            getDaysInYear: n("dddf"),
            getHours: n("5d95"),
            getISODay: n("84b9"),
            getISOWeek: n("81fc"),
            getISOWeeksInYear: n("3b7b"),
            getISOYear: n("8964"),
            getMilliseconds: n("8c81"),
            getMinutes: n("c589"),
            getMonth: n("7338"),
            getOverlappingDaysInRanges: n("6337"),
            getQuarter: n("b8f9"),
            getSeconds: n("231c"),
            getTime: n("902e"),
            getYear: n("10c8"),
            isAfter: n("a431"),
            isBefore: n("6b8f"),
            isDate: n("a735"),
            isEqual: n("abd4"),
            isFirstDayOfMonth: n("353e"),
            isFriday: n("a852"),
            isFuture: n("2b67"),
            isLastDayOfMonth: n("3eee"),
            isLeapYear: n("acc4"),
            isMonday: n("2507"),
            isPast: n("a935"),
            isSameDay: n("fd39"),
            isSameHour: n("662a"),
            isSameISOWeek: n("ccce"),
            isSameISOYear: n("2fff"),
            isSameMinute: n("f564"),
            isSameMonth: n("5a60"),
            isSameQuarter: n("9aaa"),
            isSameSecond: n("c6ae"),
            isSameWeek: n("1baf"),
            isSameYear: n("26d5"),
            isSaturday: n("48a6"),
            isSunday: n("2b57"),
            isThisHour: n("0157"),
            isThisISOWeek: n("cc64"),
            isThisISOYear: n("97af"),
            isThisMinute: n("3ef9"),
            isThisMonth: n("9bb9"),
            isThisQuarter: n("2a80"),
            isThisSecond: n("e620"),
            isThisWeek: n("2d23"),
            isThisYear: n("f66d"),
            isThursday: n("5a38"),
            isToday: n("30d1"),
            isTomorrow: n("20b1"),
            isTuesday: n("7606"),
            isValid: n("7eea"),
            isWednesday: n("c980"),
            isWeekend: n("9ad8"),
            isWithinRange: n("f56a"),
            isYesterday: n("c4f9"),
            lastDayOfISOWeek: n("5292"),
            lastDayOfISOYear: n("de13"),
            lastDayOfMonth: n("eca2"),
            lastDayOfQuarter: n("ce3d"),
            lastDayOfWeek: n("cb96"),
            lastDayOfYear: n("b8a7"),
            max: n("95ea"),
            min: n("1a84"),
            parse: n("c8d5"),
            setDate: n("957f"),
            setDay: n("b78a"),
            setDayOfYear: n("9530"),
            setHours: n("6f00"),
            setISODay: n("fa76"),
            setISOWeek: n("e73d"),
            setISOYear: n("9706"),
            setMilliseconds: n("d473"),
            setMinutes: n("8aed4"),
            setMonth: n("3814"),
            setQuarter: n("158b"),
            setSeconds: n("9113"),
            setYear: n("2f8f"),
            startOfDay: n("0978"),
            startOfHour: n("fbaf"),
            startOfISOWeek: n("b4c7"),
            startOfISOYear: n("4497"),
            startOfMinute: n("e96b"),
            startOfMonth: n("942b"),
            startOfQuarter: n("4399"),
            startOfSecond: n("2299"),
            startOfToday: n("3cae"),
            startOfTomorrow: n("8148"),
            startOfWeek: n("c7ce"),
            startOfYear: n("a4b7"),
            startOfYesterday: n("693a"),
            subDays: n("e2ff"),
            subHours: n("fb98"),
            subISOYears: n("df35"),
            subMilliseconds: n("badb"),
            subMinutes: n("18b7"),
            subMonths: n("12fd"),
            subQuarters: n("d4ae"),
            subSeconds: n("83f0"),
            subWeeks: n("e1ca"),
            subYears: n("8902")
        };
    },
    "353e": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return 1 === r(e).getDate();
        };
    },
    "366b": function(e, t, n) {
        var r = n("c873"), o = n("c8d5"), i = n("e13a"), a = n("17cd"), c = n("52cf"), u = 1440, s = 2520, f = 43200, l = 86400;
        e.exports = function(e, t, n) {
            var d = n || {}, p = r(e, t), h = d.locale, g = c.distanceInWords.localize;
            h && h.distanceInWords && h.distanceInWords.localize && (g = h.distanceInWords.localize);
            var v, m, y = {
                addSuffix: Boolean(d.addSuffix),
                comparison: p
            };
            p > 0 ? (v = o(e), m = o(t)) : (v = o(t), m = o(e));
            var b, _ = i(m, v), w = m.getTimezoneOffset() - v.getTimezoneOffset(), S = Math.round(_ / 60) - w;
            if (S < 2) return d.includeSeconds ? _ < 5 ? g("lessThanXSeconds", 5, y) : _ < 10 ? g("lessThanXSeconds", 10, y) : _ < 20 ? g("lessThanXSeconds", 20, y) : _ < 40 ? g("halfAMinute", null, y) : g(_ < 60 ? "lessThanXMinutes" : "xMinutes", 1, y) : 0 === S ? g("lessThanXMinutes", 1, y) : g("xMinutes", S, y);
            if (S < 45) return g("xMinutes", S, y);
            if (S < 90) return g("aboutXHours", 1, y);
            if (S < u) return g("aboutXHours", Math.round(S / 60), y);
            if (S < s) return g("xDays", 1, y);
            if (S < f) return g("xDays", Math.round(S / u), y);
            if (S < l) return b = Math.round(S / f), g("aboutXMonths", b, y);
            if ((b = a(m, v)) < 12) return g("xMonths", Math.round(S / f), y);
            var x = b % 12, O = Math.floor(b / 12);
            return x < 3 ? g("aboutXYears", O, y) : x < 9 ? g("overXYears", O, y) : g("almostXYears", O + 1, y);
        };
    },
    3691: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e), n = t.getMonth(), o = n - n % 3 + 3;
            return t.setMonth(o, 0), t.setHours(23, 59, 59, 999), t;
        };
    },
    3784: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        t.default = function(e) {
            return 1 === e.type ? "#".concat(e.title) : (e.type, e.title);
        };
    },
    3814: function(e, t, n) {
        var r = n("c8d5"), o = n("5416");
        e.exports = function(e, t) {
            var n = r(e), i = Number(t), a = n.getFullYear(), c = n.getDate(), u = new Date(0);
            u.setFullYear(a, i, 15), u.setHours(0, 0, 0, 0);
            var s = o(u);
            return n.setMonth(i, Math.min(c, s)), n;
        };
    },
    "3ac3": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e);
            return t.setSeconds(59, 999), t;
        };
    },
    "3b7b": function(e, t, n) {
        var r = n("4497"), o = n("7a83"), i = 6048e5;
        e.exports = function(e) {
            var t = r(e), n = r(o(t, 60)).valueOf() - t.valueOf();
            return Math.round(n / i);
        };
    },
    "3bc7": function(e, t, n) {
        var r = n("c8d5"), o = n("d420"), i = n("0d3e");
        e.exports = function(e, t) {
            var n = r(e), a = r(t), c = i(n, a), u = Math.abs(o(n, a));
            return n.setDate(n.getDate() - c * u), c * (u - (i(n, a) === -c));
        };
    },
    "3cae": function(e, t, n) {
        var r = n("0978");
        e.exports = function() {
            return r(new Date());
        };
    },
    "3eee": function(e, t, n) {
        var r = n("c8d5"), o = n("9744"), i = n("d6f8");
        e.exports = function(e) {
            var t = r(e);
            return o(t).getTime() === i(t).getTime();
        };
    },
    "3ef9": function(e, t, n) {
        var r = n("f564");
        e.exports = function(e) {
            return r(new Date(), e);
        };
    },
    4175: function(e, t, n) {
        var r = n("7494");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            });
        };
    },
    4360: function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) if (t % 2) {
                    var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    }))), r.forEach(function(t) {
                        i(e, t, n[t]);
                    });
                } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
                return e;
            }
            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("66fd")), c = r(n("2f62")), u = n("4ae0").keys().reduce(function(e, t) {
                var r = /\/(\w+)\.js/.exec(t)[1];
                return r ? o({}, e, i({}, r, n("7905")("./".concat(t.substr(2))).default)) : e;
            }, {});
            a.default.use(c.default);
            var s = e.store = new c.default.Store({
                strict: !1,
                plugins: [],
                modules: u
            });
            s.dispatch("stocks/poll");
            var f = s;
            t.default = f;
        }).call(this, n("c8ba"));
    },
    4399: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e), n = t.getMonth(), o = n - n % 3;
            return t.setMonth(o, 1), t.setHours(0, 0, 0, 0), t;
        };
    },
    4497: function(e, t, n) {
        var r = n("8964"), o = n("b4c7");
        e.exports = function(e) {
            var t = r(e), n = new Date(0);
            return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), o(n);
        };
    },
    "44e3": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            var t = e.accessToken, n = e.appType, r = e.avatar, o = e.code, i = e.displayName, a = e.from, c = e.openId, u = e.platform, s = e.refreshToken, l = e.extraDetail;
            return f.post("/apiv1/userv2/signin/thirdparty", {
                access_token: t,
                app_type: n,
                avatar: r,
                code: o,
                display_name: i,
                from: a,
                open_id: c,
                platform: u,
                refresh_token: s,
                extra_detail: l
            });
        }
        function i(e) {
            var t = e.signinKey, n = e.signinValue, r = e.createIfNoExist, o = void 0 === r || r, i = e.refreshToken, a = void 0 !== i && i, c = e.shareCode, u = void 0 === c ? "" : c;
            return f.post("/apiv1/userv2/signin/captcha", {
                create_if_no_exist: o,
                refresh_token: a,
                share_code: u,
                signin_key: t,
                signin_value: n
            });
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.thirdPartLoginWSCN = o, t.getWeixiInfoWSCN = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.code, n = e.from, r = void 0 === n ? "baoerms" : n;
            return f.get("/apiv1/userv2/weixin/info", {
                code: t,
                from: r
            });
        }, t.exchangeMobileWSCN = function(e) {
            var t = e.encryptedData, n = e.iv;
            return u.wxp.login().then(function(e) {
                return e.code;
            }).then(function(e) {
                return f.post("/apiv1/userv2/weixin/bind_mobile", {
                    encrypted_data: t,
                    iv: n,
                    code: e,
                    from: "baoerms"
                });
            });
        }, t.wxLoginWSCN = function(e, t) {
            return o({
                code: e,
                accessToken: "",
                appType: "",
                avatar: "",
                displayName: "",
                from: "baoerms",
                openId: "",
                platform: "wechat",
                refreshToken: !1,
                extraDetail: t
            });
        }, t.sendMobilCodeWSCN = function(e) {
            return f.get("/apiv1/message/login/mobile/send", {
                receiver: e,
                sign: (0, a.default)(e, "wallstreetcn2016"),
                app_type: ""
            });
        }, t.loginByCaptchaWSCN = i, t.verifyCaptchaWSCN = function(e, t) {
            return i({
                signinKey: e,
                signinValue: t
            });
        }, t.getUserInfoWSCN = function() {
            return f.get("/apiv1/user/v2/info");
        }, t.bindBaoerAndWSCN = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.wscnId, n = e.baoerId, r = void 0 === n ? "" : n;
            return f.post("/apiv1/userv2/signin/baoer_bind_wscn", {
                baoer_id: r,
                uid: t
            });
        };
        var a = r(n("8d81")), c = r(n("4360")), u = n("ed08"), s = r(n("a06c")), f = new (n("ac60"))();
        f.config.headers = {
            "X-Wxapp-Id": "wx639c6cca11806f2d",
            "X-Ivanka-Platform": "baoer-platform",
            "X-Client-Type": "minapp"
        }, f.config.timeout = 6e4, f.config.baseURL = s.default.wscn, f.interceptors.request.use(function(e) {
            return e.headers["X-Ivanka-Token"] = c.default.getters["user/token"], e;
        }, function(e) {
            return Promise.reject(e);
        }), f.interceptors.response.use(function(e) {
            var t = e.data;
            return t.code && 50008 === t.code && c.default.dispatch("user/logout"), t;
        }, function(e) {
            return Promise.reject(e);
        });
    },
    4578: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.filterArticle = function(e) {
            return {
                id: e.id,
                commentCount: e.commentCount,
                comments: e.comments,
                content: e.content,
                contentRefused: e.contentRefused,
                createdAt: e.createdAt,
                fromSubjectId: e.fromSubject && e.fromSubject.id,
                image: e.image,
                isPaid: e.isPaid,
                isSubscribed: e.isSubscribed,
                likeCount: e.likeCount,
                liked: e.liked,
                likedAt: e.likedAt,
                paidCount: e.paidCount,
                previewContent: e.previewContent,
                price: e.price,
                purchasedAt: e.purchasedAt,
                source: e.source,
                status: e.status,
                stocks: e.stocks,
                style: e.style,
                subjIds: e.subjIds,
                subscribeSubjId: e.subscribeSubjId,
                subscribeType: e.subscribeType,
                summary: e.summary,
                title: e.title,
                type: e.type,
                updatedAt: e.updatedAt,
                mediaType: e.mediaType,
                mediaUrl: e.mediaUrl
            };
        }, t.filterSubject = function(e) {
            return e;
        };
    },
    4652: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            Number.isNaN(e) && (e = new Date(e));
            var t = Date.now();
            return (0, r.differenceInSeconds)(t, e) < 60 ? "刚刚" : (0, r.isToday)(e) ? (0, o.default)(e, "HH:mm") : (0, 
            o.default)(e, "YYYY-MM-DD HH:mm");
        };
        var r = n("340b"), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("2095"));
    },
    "48a6": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return 6 === r(e).getDay();
        };
    },
    "4ae0": function(e, t, n) {
        function r(e) {
            var t = o(e);
            return n(t);
        }
        function o(e) {
            var t = i[e];
            if (!(t + 1)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND", n;
            }
            return t;
        }
        var i = {
            "./address.js": "142d",
            "./bargainInfo.js": "6473",
            "./bindAccount.js": "c5d1",
            "./comments.js": "9898",
            "./device.js": "4f2c",
            "./entities.js": "9790",
            "./overlay.js": "284b",
            "./stocks.js": "d9c6",
            "./subject.js": "ff9e",
            "./subjectTimeline.js": "57f4",
            "./subscribe.js": "73b1",
            "./topup.js": "6fc3",
            "./user.js": "0f9a",
            "./verifyMobile.js": "e9c8"
        };
        r.keys = function() {
            return Object.keys(i);
        }, r.resolve = o, e.exports = r, r.id = "4ae0";
    },
    "4be4": function(e, t, n) {
        function r(e, t) {
            if (void 0 === t && (t = 2), "number" != typeof e) throw new Error("Wrong argument type.");
            if (Number.isNaN(e)) throw new Error("Pass in a number other than NaN.");
            return 0 === t ? String(parseInt(e)) : e.toFixed(t);
        }
        function o(e) {
            var t = e || window.navigator.userAgent;
            return !!t && -1 !== t.toLowerCase().indexOf("android");
        }
        function i(e) {
            var t = e || window.navigator.userAgent;
            return !!t && -1 !== t.toLowerCase().indexOf("micromessenger");
        }
        function a(e, t, n) {
            if ("[object Object]" !== Object.prototype.toString.call(e)) throw new Error("wrong parametr！[data] should be object !");
            if ("string" != typeof t || "string" != typeof n) throw new Error("wrong parametr！[fieldName] and [itemName] should be string !");
            var r = [];
            return e[t] && e[n] && e[n].length && (r = e[n].map(function(n) {
                var r = {};
                for (var o in n) n.hasOwnProperty(o) && (r[e[t][o]] = n[o]);
                return r;
            })), r;
        }
        function c(e, t) {
            if (!Array.isArray(e) || !Array.isArray(t)) throw Error("wrong argument type!");
            return e.map(function(e) {
                return t.reduce(function(t, n, r) {
                    var o;
                    return Object.assign({}, t, ((o = {})[n] = e[r], o));
                }, {});
            });
        }
        function u(e, t) {
            if ("[object Object]" !== Object.prototype.toString.call(e)) throw new Error("first argument should be an object!");
            if (!Array.isArray(t)) throw new Error("wrong argument type!");
            return Object.keys(e).map(function(n) {
                var r;
                return (r = {})[n] = t.reduce(function(t, r, o) {
                    var i;
                    return Object.assign({}, t, ((i = {})[r] = e[n][o], i));
                }, {}), r;
            }).reduce(function(e, t) {
                return Object.assign({}, e, t);
            }, {});
        }
        function s(e) {
            if ("number" != typeof e) throw new Error("Wrong argument type.");
            if (Number.isNaN(e)) throw new Error("Pass in a number other than NaN.");
            return e >= 0 ? e > 1e8 ? (e / 1e8).toFixed(2) + "亿" : e > 1e4 ? (e / 1e4).toFixed(2) + "万" : e.toFixed(2) + "" : "-" + (Math.abs(e) > 1e8 ? (Math.abs(e) / 1e8).toFixed(2) + "亿" : Math.abs(e) > 1e4 ? (Math.abs(e) / 1e4).toFixed(2) + "万" : Math.abs(e));
        }
        function f(e, t) {
            void 0 === t && (t = {
                positiveSignInNeed: !0,
                fixedDigits: 2
            });
            var n = parseFloat(e);
            if (Number.isNaN(n)) return e;
            var o = n >= 0;
            return n = r(n, t.fixedDigits) + "%", o && t.positiveSignInNeed ? "+" + n : n;
        }
        function l(e, t) {
            if ("[object Object]" === Object.prototype.toString.call(e)) {
                var n = {};
                return Object.keys(e).forEach(function(r) {
                    "[object Object]" === Object.prototype.toString.call(e[r]) ? n[t(r)] = l(e[r], t) : Array.isArray(e[r]) ? n[t(r)] = e[r].map(function(e) {
                        return l(e, t);
                    }) : n[t(r)] = e[r];
                }), n;
            }
            return Array.isArray(e) ? e.map(function(e) {
                return l(e, t);
            }) : e;
        }
        function d(e) {
            return e.split("_").reduce(function(e, t) {
                return "" + e + t[0].toUpperCase() + t.substring(1);
            });
        }
        function p(e) {
            return l(e, d);
        }
        function h(e) {
            return e.charAt(0).toLowerCase() + e.substring(1);
        }
        function g(e) {
            return l(e, h);
        }
        function v(e, t) {
            if ("number" != typeof e) return e;
            t || (t = {});
            var n = void 0 === t.fixedDigit ? 2 : t.fixedDigit, o = t.format || "zh", i = Math.abs(e), a = function(e) {
                var t = new Map();
                return t.set("zh", [ "万", "亿" ]), t.set("en", [ "w", "e" ]), t.get(e);
            }(o), c = a[0], u = a[1];
            if (i >= 1e8) {
                var s = r(i / 1e8, n);
                return (s = e >= 0 ? s : -s) + u;
            }
            if (i >= 1e4) {
                var f = r(i / 1e4, n);
                return (f = e >= 0 ? f : -f) + c;
            }
            return e.toString();
        }
        function m(e) {
            var t = e || window.navigator.userAgent;
            return {
                trident: t.indexOf("Trident") > -1,
                presto: t.indexOf("Presto") > -1,
                webKit: t.indexOf("AppleWebKit") > -1,
                gecko: t.indexOf("Gecko") > -1 && -1 === t.indexOf("KHTML"),
                mobile: !!t.match(/AppleWebKit.*Mobile.*/),
                ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: t.indexOf("Android") > -1 || t.indexOf("Adr") > -1,
                iPhone: t.indexOf("iPhone") > -1,
                iPad: t.indexOf("iPad") > -1,
                webApp: -1 === t.indexOf("Safari"),
                weixin: t.indexOf("MicroMessenger") > -1,
                qq: " qq" === t.match(/\sQQ/i),
                weibo: t.toLowerCase().indexOf("weibo") > -1,
                wscnapp: t.toLowerCase().indexOf("wscnapp") > -1
            };
        }
        function y(e, t) {
            return o() ? "baoer://m.xuangubao.cn/" + t + "/" + e : "https://m.xuangubao.cn/" + t + "/" + e;
        }
        n.r(t), n.d(t, "toFixed", function() {
            return r;
        }), n.d(t, "checkIsAndroid", function() {
            return o;
        }), n.d(t, "checkIsWeixin", function() {
            return i;
        }), n.d(t, "dataBeautify", function() {
            return a;
        }), n.d(t, "formatWowsStyleArray", function() {
            return c;
        }), n.d(t, "formatWowsStyleObject", function() {
            return u;
        }), n.d(t, "approxNumber", function() {
            return s;
        }), n.d(t, "numberToPercentage", function() {
            return f;
        }), n.d(t, "transformUnderscoreApi", function() {
            return p;
        }), n.d(t, "transformCapitalApi", function() {
            return g;
        }), n.d(t, "numberToLocale", function() {
            return v;
        }), n.d(t, "isDevicePlatform", function() {
            return m;
        }), n.d(t, "getNativeSchema", function() {
            return y;
        });
    },
    "4f2c": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                deviceInfo: null
            },
            getters: {
                statusBarHeight: function(e) {
                    return e.deviceInfo ? e.deviceInfo.statusBarHeight : 40;
                },
                screenWidth: function(e) {
                    return e.deviceInfo ? e.deviceInfo.screenWidth : 375;
                },
                screenHeight: function(e) {
                    return e.deviceInfo ? e.deviceInfo.screenHeight : 667;
                },
                devicePlatform: function(e) {
                    return function(t) {
                        return e.deviceInfo && e.deviceInfo.system.toLocaleLowerCase().includes(t);
                    };
                }
            },
            actions: {},
            mutations: {
                setDeviceInfo: function(e, t) {
                    e.deviceInfo = t;
                }
            }
        };
        t.default = r;
    },
    "4f67": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, o, i = r(e).getTime();
            return t.forEach(function(e) {
                var t = r(e), a = Math.abs(i - t.getTime());
                (void 0 === n || a < o) && (n = t, o = a);
            }), n;
        };
    },
    5292: function(e, t, n) {
        var r = n("cb96");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            });
        };
    },
    "52cf": function(e, t, n) {
        var r = n("2d96"), o = n("e830");
        e.exports = {
            distanceInWords: r(),
            format: o()
        };
    },
    5416: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e), n = t.getFullYear(), o = t.getMonth(), i = new Date(0);
            return i.setFullYear(n, o + 1, 0), i.setHours(0, 0, 0, 0), i.getDate();
        };
    },
    "543d": function(e, t, n) {
        function r(e, t) {
            return a(e) || i(e, t) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function i(e, t) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    r || null == c.return || c.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }
        function a(e) {
            if (Array.isArray(e)) return e;
        }
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function u(e) {
            return "function" == typeof e;
        }
        function s(e) {
            return "string" == typeof e;
        }
        function f(e) {
            return "[object Object]" === fe.call(e);
        }
        function l(e, t) {
            return le.call(e, t);
        }
        function d() {}
        function p(e) {
            var t = Object.create(null);
            return function(n) {
                return t[n] || (t[n] = e(n));
            };
        }
        function h(e) {
            return ge.test(e);
        }
        function g(e) {
            return he.test(e);
        }
        function v(e) {
            return ve.test(e);
        }
        function m(e) {
            return e.then(function(e) {
                return [ null, e ];
            }).catch(function(e) {
                return [ e ];
            });
        }
        function y(e) {
            return !(h(e) || g(e) || v(e));
        }
        function b(e, t) {
            return y(e) ? function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                return u(e.success) || u(e.fail) || u(e.complete) ? t.apply(void 0, [ e ].concat(r)) : m(new Promise(function(n, o) {
                    t.apply(void 0, [ Object.assign({}, e, {
                        success: n,
                        fail: o
                    }) ].concat(r)), Promise.prototype.finally || (Promise.prototype.finally = function(e) {
                        var t = this.constructor;
                        return this.then(function(n) {
                            return t.resolve(e()).then(function() {
                                return n;
                            });
                        }, function(n) {
                            return t.resolve(e()).then(function() {
                                throw n;
                            });
                        });
                    });
                }));
            } : t;
        }
        function _() {
            var e = wx.getSystemInfoSync(), t = e.platform, n = e.pixelRatio, r = e.windowWidth;
            _e = r, we = n, be = "ios" === t;
        }
        function w(e, t) {
            if (0 === _e && _(), 0 === (e = Number(e))) return 0;
            var n = e / ye * (t || _e);
            return n < 0 && (n = -n), 0 === (n = Math.floor(n + me)) ? 1 !== we && be ? .5 : 1 : e < 0 ? -n : n;
        }
        function S(e, t, n) {
            return function(r) {
                return t(O(e, r, n));
            };
        }
        function x(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (f(t)) {
                var i = !0 === o ? t : {};
                for (var a in u(n) && (n = n(t, i) || {}), t) if (l(n, a)) {
                    var c = n[a];
                    u(c) && (c = c(t[a], t, i)), c ? s(c) ? i[c] = t[a] : f(c) && (i[c.name ? c.name : a] = c.value) : console.warn("微信小程序 ".concat(e, "暂不支持").concat(a));
                } else -1 !== ke.indexOf(a) ? i[a] = S(e, t[a], r) : o || (i[a] = t[a]);
                return i;
            }
            return u(t) && (t = S(e, t, r)), t;
        }
        function O(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return u(Se.returnValue) && (t = Se.returnValue(e, t)), x(e, t, n, {}, r);
        }
        function k(e, t) {
            if (l(Se, e)) {
                var n = Se[e];
                return n ? function(t, r) {
                    var o = n;
                    u(n) && (o = n(t));
                    var i = [ t = x(e, t, o.args, o.returnValue) ];
                    void 0 !== r && i.push(r);
                    var a = wx[o.name || e].apply(wx, i);
                    return g(e) ? O(e, a, o.returnValue, h(e)) : a;
                } : function() {
                    console.error("微信小程序 暂不支持".concat(e));
                };
            }
            return t;
        }
        function T(e) {
            return function(t) {
                var n = t.fail, r = t.complete, o = {
                    errMsg: "".concat(e, ":fail:暂不支持 ").concat(e, " 方法")
                };
                u(n) && n(o), u(r) && r(o);
            };
        }
        function j(e, t, n) {
            return e[t].apply(e, n);
        }
        function P(e) {
            if (wx.canIUse("nextTick")) {
                var t = e.triggerEvent;
                e.triggerEvent = function(n) {
                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                    return t.apply(e, [ $e(n) ].concat(o));
                };
            }
        }
        function I(e, t) {
            var n = t[e];
            t[e] = n ? function() {
                P(this);
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return n.apply(this, t);
            } : function() {
                P(this);
            };
        }
        function A(e, t) {
            var n = e.$mp[e.mpType];
            t.forEach(function(t) {
                l(n, t) && (e[t] = n[t]);
            });
        }
        function C(e, t) {
            if (!t) return !0;
            if (se.default.options && Array.isArray(se.default.options[e])) return !0;
            if (t = t.default || t, u(t)) return !!u(t.extendOptions[e]) || !!(t.super && t.super.options && Array.isArray(t.super.options[e]));
            if (u(t[e])) return !0;
            var n = t.mixins;
            return Array.isArray(n) ? !!n.find(function(t) {
                return C(e, t);
            }) : void 0;
        }
        function D(e, t, n) {
            t.forEach(function(t) {
                C(t, n) && (e[t] = function(e) {
                    return this.$vm && this.$vm.__call_hook(t, e);
                });
            });
        }
        function E(e, t) {
            var n;
            return t = t.default || t, u(t) ? (n = t, t = n.extendOptions) : n = e.extend(t), 
            [ n, t ];
        }
        function M(e, t) {
            if (Array.isArray(t) && t.length) {
                var n = Object.create(null);
                t.forEach(function(e) {
                    n[e] = !0;
                }), e.$scopedSlots = e.$slots = n;
            }
        }
        function $(e, t) {
            var n = (e = (e || "").split(",")).length;
            1 === n ? t._$vueId = e[0] : 2 === n && (t._$vueId = e[0], t._$vuePid = e[1]);
        }
        function L(e, t) {
            var n = e.data || {}, r = e.methods || {};
            if ("function" == typeof n) try {
                n = n.call(t);
            } catch (e) {
                Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", n);
            } else try {
                n = JSON.parse(JSON.stringify(n));
            } catch (e) {}
            return f(n) || (n = {}), Object.keys(r).forEach(function(e) {
                -1 !== t.__lifecycle_hooks__.indexOf(e) || l(n, e) || (n[e] = r[e]);
            }), n;
        }
        function N(e) {
            return function(t, n) {
                this.$vm && (this.$vm[e] = t);
            };
        }
        function U(e, t) {
            var n = e.behaviors, r = e.extends, o = e.mixins, i = e.props;
            i || (e.props = i = []);
            var a = [];
            return Array.isArray(n) && n.forEach(function(e) {
                a.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(i) ? (i.push("name"), 
                i.push("value")) : (i.name = {
                    type: String,
                    default: ""
                }, i.value = {
                    type: [ String, Number, Boolean, Array, Object, Date ],
                    default: ""
                }));
            }), f(r) && r.props && a.push(t({
                properties: B(r.props, !0)
            })), Array.isArray(o) && o.forEach(function(e) {
                f(e) && e.props && a.push(t({
                    properties: B(e.props, !0)
                }));
            }), a;
        }
        function R(e, t, n, r) {
            return Array.isArray(t) && 1 === t.length ? t[0] : t;
        }
        function B(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", r = {};
            return t || (r.vueId = {
                type: String,
                value: ""
            }, r.vueSlots = {
                type: null,
                value: [],
                observer: function(e, t) {
                    var n = Object.create(null);
                    e.forEach(function(e) {
                        n[e] = !0;
                    }), this.setData({
                        $slots: n
                    });
                }
            }), Array.isArray(e) ? e.forEach(function(e) {
                r[e] = {
                    type: null,
                    observer: N(e)
                };
            }) : f(e) && Object.keys(e).forEach(function(t) {
                var o = e[t];
                if (f(o)) {
                    var i = o.default;
                    u(i) && (i = i()), o.type = R(t, o.type, i, n), r[t] = {
                        type: -1 !== Ne.indexOf(o.type) ? o.type : null,
                        value: i,
                        observer: N(t)
                    };
                } else {
                    var a = R(t, o, null, n);
                    r[t] = {
                        type: -1 !== Ne.indexOf(a) ? a : null,
                        observer: N(t)
                    };
                }
            }), r;
        }
        function F(e) {
            try {
                e.mp = JSON.parse(JSON.stringify(e));
            } catch (e) {}
            return e.stopPropagation = d, e.preventDefault = d, e.target = e.target || {}, l(e, "detail") || (e.detail = {}), 
            f(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), e;
        }
        function q(e, t) {
            var n = e;
            return t.forEach(function(t) {
                var r = t[0], o = t[2];
                if (r || void 0 !== o) {
                    var i = t[1], a = t[3], c = r ? e.__get_value(r, n) : n;
                    Number.isInteger(c) ? n = o : i ? Array.isArray(c) ? n = c.find(function(t) {
                        return e.__get_value(i, t) === o;
                    }) : f(c) ? n = Object.keys(c).find(function(t) {
                        return e.__get_value(i, c[t]) === o;
                    }) : console.error("v-for 暂不支持循环数据：", c) : n = c[o], a && (n = e.__get_value(a, n));
                }
            }), n;
        }
        function H(e, t, n) {
            var r = {};
            return Array.isArray(t) && t.length && t.forEach(function(t, o) {
                "string" == typeof t ? t ? "$event" === t ? r["$" + o] = n : 0 === t.indexOf("$event.") ? r["$" + o] = e.__get_value(t.replace("$event.", ""), n) : r["$" + o] = e.__get_value(t) : r["$" + o] = e : r["$" + o] = q(e, t);
            }), r;
        }
        function V(e) {
            for (var t = {}, n = 1; n < e.length; n++) {
                var r = e[n];
                t[r[0]] = r[1];
            }
            return t;
        }
        function Y(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], o = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, a = !1;
            if (o && (a = t.currentTarget && t.currentTarget.dataset && "wx" === t.currentTarget.dataset.comType, 
            !n.length)) return a ? [ t ] : t.detail.__args__ || t.detail;
            var c = H(e, r, t), u = [];
            return n.forEach(function(e) {
                "$event" === e ? "__set_model" !== i || o ? o && !a ? u.push(t.detail.__args__[0]) : u.push(t) : u.push(t.target.value) : Array.isArray(e) && "o" === e[0] ? u.push(V(e)) : "string" == typeof e && l(c, e) ? u.push(c[e]) : u.push(e);
            }), u;
        }
        function W(e, t) {
            return e === t || "regionchange" === t && ("begin" === e || "end" === e);
        }
        function G(e) {
            var t = this, n = ((e = F(e)).currentTarget || e.target).dataset;
            if (!n) return console.warn("事件信息不存在");
            var r = n.eventOpts || n["event-opts"];
            if (!r) return console.warn("事件信息不存在");
            var o = e.type;
            r.forEach(function(n) {
                var r = n[0], i = n[1], a = r.charAt(0) === Re, c = (r = a ? r.slice(1) : r).charAt(0) === Ue;
                r = c ? r.slice(1) : r, i && W(o, r) && i.forEach(function(n) {
                    var r = n[0];
                    if (r) {
                        var o = t.$vm;
                        o.$options.generic && o.$parent && o.$parent.$parent && (o = o.$parent.$parent);
                        var i = o[r];
                        if (!u(i)) throw new Error(" _vm.".concat(r, " is not a function"));
                        if (c) {
                            if (i.once) return;
                            i.once = !0;
                        }
                        i.apply(o, Y(t.$vm, e, n[1], n[2], a, r));
                    }
                });
            });
        }
        function z(e, t) {
            var n = t.mocks, r = t.initRefs;
            se.default.prototype.mpHost = "mp-weixin", se.default.mixin({
                beforeCreate: function() {
                    this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = c({
                        data: {}
                    }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                    delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (r(this), 
                    A(this, n)));
                }
            });
            var o = {
                onLaunch: function(t) {
                    this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                    this.$vm = e, this.$vm.$mp = {
                        app: this
                    }, this.$vm.$scope = this, this.$vm._isMounted = !0, this.$vm.__call_hook("mounted", t), 
                    this.$vm.__call_hook("onLaunch", t));
                }
            };
            return o.globalData = e.$options.globalData || {}, D(o, Be), o;
        }
        function Q(e, t) {
            var n = e.$children, r = n.find(function(e) {
                return e.$scope._$vueId === t;
            });
            if (r) return r;
            for (var o = n.length - 1; o >= 0; o--) if (r = Q(n[o], t)) return r;
        }
        function K(e) {
            return Behavior(e);
        }
        function X() {
            return !!this.route;
        }
        function J(e) {
            this.triggerEvent("__l", e);
        }
        function Z(e) {
            var t = e.$scope;
            Object.defineProperty(e, "$refs", {
                get: function() {
                    var e = {};
                    return t.selectAllComponents(".vue-ref").forEach(function(t) {
                        var n = t.dataset.ref;
                        e[n] = t.$vm || t;
                    }), t.selectAllComponents(".vue-ref-in-for").forEach(function(t) {
                        var n = t.dataset.ref;
                        e[n] || (e[n] = []), e[n].push(t.$vm || t);
                    }), e;
                }
            });
        }
        function ee(e) {
            var t, n = e.detail || e.value, r = n.vuePid, o = n.vueOptions;
            r && (t = Q(this.$vm, r)), t || (t = this.$vm), o.parent = t;
        }
        function te(e) {
            return z(e, {
                mocks: Fe,
                initRefs: Z
            });
        }
        function ne(e) {
            return App(te(e)), e;
        }
        function re(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.isPage, o = t.initRelation, i = r(E(se.default, e), 2), a = i[0], c = i[1], u = {
                options: {
                    multipleSlots: !0,
                    addGlobalClass: !0
                },
                data: L(c, se.default.prototype),
                behaviors: U(c, K),
                properties: B(c.props, !1, c.__file),
                lifetimes: {
                    attached: function() {
                        var e = this.properties, t = {
                            mpType: n.call(this) ? "page" : "component",
                            mpInstance: this,
                            propsData: e
                        };
                        $(e.vueId, this), o.call(this, {
                            vuePid: this._$vuePid,
                            vueOptions: t
                        }), this.$vm = new a(t), M(this.$vm, e.vueSlots), this.$vm.$mount();
                    },
                    ready: function() {
                        this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                    },
                    detached: function() {
                        this.$vm.$destroy();
                    }
                },
                pageLifetimes: {
                    show: function(e) {
                        this.$vm && this.$vm.__call_hook("onPageShow", e);
                    },
                    hide: function() {
                        this.$vm && this.$vm.__call_hook("onPageHide");
                    },
                    resize: function(e) {
                        this.$vm && this.$vm.__call_hook("onPageResize", e);
                    }
                },
                methods: {
                    __l: ee,
                    __e: G
                }
            };
            return n ? u : [ u, a ];
        }
        function oe(e) {
            return re(e, {
                isPage: X,
                initRelation: J
            });
        }
        function ie(e, t) {
            var n = oe(e, {
                isPage: t.isPage,
                initRelation: t.initRelation
            });
            return D(n.methods, qe, e), n.methods.onLoad = function(e) {
                this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e);
            }, n;
        }
        function ae(e) {
            return ie(e, {
                isPage: X,
                initRelation: J
            });
        }
        function ce(e) {
            return Component(ae(e));
        }
        function ue(e) {
            return Component(oe(e));
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createApp = ne, t.createPage = ce, t.createComponent = ue, t.default = void 0;
        var se = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("66fd")), fe = Object.prototype.toString, le = Object.prototype.hasOwnProperty, de = /-(\w)/g, pe = p(function(e) {
            return e.replace(de, function(e, t) {
                return t ? t.toUpperCase() : "";
            });
        }), he = /^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/, ge = /^create|Manager$/, ve = /^on/, me = 1e-4, ye = 750, be = !1, _e = 0, we = 0, Se = {
            previewImage: {
                args: function(e) {
                    var t = parseInt(e.current);
                    if (!isNaN(t)) {
                        var n = e.urls;
                        if (Array.isArray(n)) {
                            var r = n.length;
                            if (r) return t < 0 ? t = 0 : t >= r && (t = r - 1), t > 0 ? (e.current = n[t], 
                            e.urls = n.filter(function(e, r) {
                                return !(r < t) || e !== n[t];
                            })) : e.current = n[0], {
                                indicator: !1,
                                loop: !1
                            };
                        }
                    }
                }
            }
        }, xe = [], Oe = [], ke = [ "success", "fail", "cancel", "complete" ], Te = Object.create(null);
        [ "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(e) {
            Te[e] = T(e);
        });
        var je = {
            oauth: [ "weixin" ],
            share: [ "weixin" ],
            payment: [ "wxpay" ],
            push: [ "weixin" ]
        }, Pe = Object.freeze({
            getProvider: function(e) {
                var t = e.service, n = e.success, r = e.fail, o = e.complete, i = !1;
                je[t] ? (i = {
                    errMsg: "getProvider:ok",
                    service: t,
                    provider: je[t]
                }, u(n) && n(i)) : (i = {
                    errMsg: "getProvider:fail:服务[" + t + "]不存在"
                }, u(r) && r(i)), u(o) && o(i);
            }
        }), Ie = function() {
            return "function" == typeof getUniEmitter ? getUniEmitter : function() {
                return e || (e = new se.default()), e;
            };
            var e;
        }(), Ae = Object.freeze({
            $on: function() {
                return j(Ie(), "$on", Array.prototype.slice.call(arguments));
            },
            $off: function() {
                return j(Ie(), "$off", Array.prototype.slice.call(arguments));
            },
            $once: function() {
                return j(Ie(), "$once", Array.prototype.slice.call(arguments));
            },
            $emit: function() {
                return j(Ie(), "$emit", Array.prototype.slice.call(arguments));
            }
        }), Ce = Object.freeze({}), De = Page, Ee = Component, Me = /:/g, $e = p(function(e) {
            return pe(e.replace(Me, "-"));
        });
        Page = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return I("onLoad", e), De(e);
        }, Component = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return I("created", e), Ee(e);
        };
        var Le = [ "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ], Ne = [ String, Number, Boolean, Object, Array, null ], Ue = "~", Re = "^", Be = [ "onShow", "onHide", "onError", "onPageNotFound" ], Fe = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ], qe = [ "onShow", "onHide", "onUnload" ];
        qe.push.apply(qe, Le), xe.forEach(function(e) {
            Se[e] = !1;
        }), Oe.forEach(function(e) {
            var t = Se[e] && Se[e].name ? Se[e].name : e;
            wx.canIUse(t) || (Se[e] = !1);
        });
        var He = {};
        "undefined" != typeof Proxy ? He = new Proxy({}, {
            get: function(e, t) {
                return "upx2px" === t ? w : Ce[t] ? b(t, Ce[t]) : Pe[t] ? b(t, Pe[t]) : Te[t] ? b(t, Te[t]) : Ae[t] ? Ae[t] : l(wx, t) || l(Se, t) ? b(t, k(t, wx[t])) : void 0;
            }
        }) : (He.upx2px = w, Object.keys(Te).forEach(function(e) {
            He[e] = b(e, Te[e]);
        }), Object.keys(Pe).forEach(function(e) {
            He[e] = b(e, Te[e]);
        }), Object.keys(Ae).forEach(function(e) {
            He[e] = Ae[e];
        }), Object.keys(Ce).forEach(function(e) {
            He[e] = b(e, Ce[e]);
        }), Object.keys(wx).forEach(function(e) {
            (l(wx, e) || l(Se, e)) && (He[e] = b(e, k(e, wx[e])));
        })), wx.createApp = ne, wx.createPage = ce, wx.createComponent = ue;
        var Ve = He;
        t.default = Ve;
    },
    5465: function(e, t) {
        e.exports = function(e) {
            var t = new Date(e.getTime()), n = t.getTimezoneOffset();
            return t.setSeconds(0, 0), 6e4 * n + t.getTime() % 6e4;
        };
    },
    5768: function(e, t, n) {},
    "57f4": function(e, t, n) {
        function r(e) {
            return a(e) || i(e) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }
        function i(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }
        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    u(e, t, n[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = n("f8c8"), f = {
            namespaced: !0,
            state: {
                id: null,
                params: {},
                fetchingStatus: "",
                timeline: {}
            },
            getters: {
                subjectId: function(e) {
                    return e.id;
                },
                timeline: function(e) {
                    return function(t) {
                        return e.timeline[t] || [];
                    };
                },
                flowType: function(e) {
                    return function(t) {
                        return e.params[t] ? e.params[t].msgFlowType : 0;
                    };
                }
            },
            actions: {
                fetchTimeline: function(e) {
                    var t = e.state, n = e.commit;
                    "fetching" !== t.fetchingStatus && (n("UPDATE_FETCHING_STATUS", "fetching"), (0, 
                    s.fetchSubjectMessages)(c({
                        id: t.id
                    }, t.params[t.id])).then(function(e) {
                        n("UPDATE_TIMELINE", {
                            timeline: e.items.map(function(e) {
                                return "message" === e.type ? (n("entities/UPDATE_ARTICLE_ENTITY", {
                                    id: e.value.id,
                                    entity: e.value
                                }, {
                                    root: !0
                                }), {
                                    type: "message",
                                    value: e.value.id
                                }) : e;
                            })
                        }), n("UPDATE_MARK", {
                            mark: e.nextMark
                        }), n("UPDATE_FETCHING_STATUS", "");
                    }).catch(function() {
                        n("UPDATE_FETCHING_STATUS", "");
                    }));
                },
                changeFlowType: function(e, t) {
                    var n = e.commit, r = e.dispatch, o = t.type;
                    n("CLEAR_TIMELINE"), n("UPDATE_FLOW_TYPE", {
                        type: o
                    }), r("fetchTimeline");
                }
            },
            mutations: {
                SET_ID: function(e, t) {
                    e.id = t, e.params[t] || (e.params = c({}, e.params, u({}, t, {
                        mark: 0,
                        msgFlowType: 0
                    })));
                },
                UPDATE_TIMELINE: function(e, t) {
                    var n = t.timeline;
                    e.timeline = c({}, e.timeline, u({}, e.id, [].concat(r(e.timeline[e.id] || []), r(n))));
                },
                UPDATE_MARK: function(e, t) {
                    var n = t.mark;
                    e.params[e.id].mark = n;
                },
                UPDATE_FLOW_TYPE: function(e, t) {
                    var n = t.type;
                    e.params[e.id].msgFlowType = n;
                },
                UPDATE_FETCHING_STATUS: function(e, t) {
                    e.fetchingStatus = t;
                },
                CLEAR_TIMELINE: function(e) {
                    e.params = c({}, e.params, u({}, e.id, {
                        mark: 0,
                        msgFlowType: 0
                    })), e.fetchingStatus = "", e.timeline = c({}, e.timeline, u({}, e.id, []));
                }
            }
        };
        t.default = f;
    },
    "580f": function(e, t, n) {
        var r = n("c8d5"), o = n("a4b7"), i = n("d420");
        e.exports = function(e) {
            var t = r(e);
            return i(t, o(t)) + 1;
        };
    },
    "5a38": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return 4 === r(e).getDay();
        };
    },
    "5a60": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
        };
    },
    "5b22": function(e, t, n) {
        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(e) {
                return e.items;
            }, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                return e.fields;
            };
            return function(n) {
                var r;
                try {
                    r = (0, i.transformUnderscoreApi)((0, i.formatWowsStyleArray)(e(n), t(n)));
                } catch (e) {
                    console.error(e);
                }
                return r || {};
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getPlatesDetail = function(e) {
            return a.get("/v3/aioria/plates/detail?id=".concat(e)).then(function(e) {
                return (0, i.transformUnderscoreApi)(e);
            });
        }, t.getPlateTopStocks = function(e) {
            return a.get("/v3/aioria/plates/detail/field?fields=stocks&desc=true&limit=3&page=1&sort_type=pcp&id=".concat(e)).then(r(function(e) {
                return e.stocks.items;
            }, function(e) {
                return e.stocks.fields;
            }));
        };
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("a06c")), i = n("4be4"), a = new (n("ac60"))();
        a.config.headers = {}, a.config.timeout = 6e4, a.config.baseURL = o.default.wows, 
        a.interceptors.request.use(function(e) {
            return e;
        }, function(e) {
            return Promise.reject(e);
        }), a.interceptors.response.use(function(e) {
            return [ 2e4, 200 ].some(function(t) {
                return t === e.data.code;
            }) ? (0, i.transformUnderscoreApi)(e.data.data) : Promise.reject(e);
        }, function(e) {
            return Promise.reject(e);
        });
    },
    "5d95": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return r(e).getHours();
        };
    },
    6254: function(e, t, n) {
        var r = n("366b");
        e.exports = function(e, t) {
            return r(Date.now(), e, t);
        };
    },
    6337: function(e, t, n) {
        var r = n("c8d5"), o = 864e5;
        e.exports = function(e, t, n, i) {
            var a = r(e).getTime(), c = r(t).getTime(), u = r(n).getTime(), s = r(i).getTime();
            if (a > c || u > s) throw new Error("The start of the range cannot be after the end of the range");
            if (!(a < s && u < c)) return 0;
            var f = u < a ? a : u, l = (s > c ? c : s) - f;
            return Math.ceil(l / o);
        };
    },
    "642b": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 375, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
            return e.includes("?watermark") ? "".concat(e, "&imageView2/1/w/").concat(t, "/h/").concat(n) : "".concat(e, "?imageView2/1/w/").concat(t, "/h/").concat(n);
        };
    },
    6473: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("f8c8"), o = {
            namespaced: !0,
            state: {
                bargainInfo: null,
                loading: !1
            },
            getters: {},
            actions: {
                getBargainOrderInfo: function(e, t) {
                    var n = e.commit;
                    if (t) return n("updateLoadingStatus", !0), (0, r.getBargainOrderInfo)(t).then(function(e) {
                        return n("updateBargainInfo", e), n("updateLoadingStatus", !1), e;
                    }).catch(function(e) {
                        console.log("getBargainOrderInfo error", e), n("updateBargainInfo", null), n("updateLoadingStatus", !1), 
                        e.message && wx.showToast({
                            title: e.message,
                            icon: "none",
                            duration: 1e3
                        });
                    });
                }
            },
            mutations: {
                updateBargainInfo: function(e, t) {
                    e.bargainInfo = t;
                },
                updateLoadingStatus: function(e, t) {
                    e.loading = t;
                }
            }
        };
        t.default = o;
    },
    6570: function(e, t, n) {
        var r = n("e785"), o = 6e4;
        e.exports = function(e, t) {
            var n = r(e, t) / o;
            return n > 0 ? Math.floor(n) : Math.ceil(n);
        };
    },
    "65b7": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
            return e.includes("?watermark") ? "".concat(e, "&imageMogr2/thumbnail/").concat(t, "/").concat(n) : "".concat(e, "?imageMogr2/thumbnail/").concat(t, "/").concat(n);
        };
    },
    "662a": function(e, t, n) {
        var r = n("fbaf");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getTime() === o.getTime();
        };
    },
    6665: function(e, t, n) {
        var r = n("c8d5"), o = n("5416");
        e.exports = function(e, t) {
            var n = r(e), i = Number(t), a = n.getMonth() + i, c = new Date(0);
            c.setFullYear(n.getFullYear(), a, 1), c.setHours(0, 0, 0, 0);
            var u = o(c);
            return n.setMonth(a, Math.min(u, n.getDate())), n;
        };
    },
    "66fd": function(e, t, n) {
        n.r(t), function(e) {
            function n(e) {
                return void 0 === e || null === e;
            }
            function r(e) {
                return void 0 !== e && null !== e;
            }
            function o(e) {
                return !0 === e;
            }
            function i(e) {
                return !1 === e;
            }
            function a(e) {
                return "string" == typeof e || "number" == typeof e || "symbol" === (void 0 === e ? "undefined" : _typeof(e)) || "boolean" == typeof e;
            }
            function c(e) {
                return null !== e && "object" === (void 0 === e ? "undefined" : _typeof(e));
            }
            function u(e) {
                return "[object Object]" === vn.call(e);
            }
            function s(e) {
                return "[object RegExp]" === vn.call(e);
            }
            function f(e) {
                var t = parseFloat(String(e));
                return t >= 0 && Math.floor(t) === t && isFinite(e);
            }
            function l(e) {
                return r(e) && "function" == typeof e.then && "function" == typeof e.catch;
            }
            function d(e) {
                return null == e ? "" : Array.isArray(e) || u(e) && e.toString === vn ? JSON.stringify(e, null, 2) : String(e);
            }
            function p(e) {
                var t = parseFloat(e);
                return isNaN(t) ? e : t;
            }
            function h(e, t) {
                for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
                return t ? function(e) {
                    return n[e.toLowerCase()];
                } : function(e) {
                    return n[e];
                };
            }
            function g(e, t) {
                if (e.length) {
                    var n = e.indexOf(t);
                    if (n > -1) return e.splice(n, 1);
                }
            }
            function v(e, t) {
                return bn.call(e, t);
            }
            function m(e) {
                var t = Object.create(null);
                return function(n) {
                    return t[n] || (t[n] = e(n));
                };
            }
            function y(e, t) {
                t = t || 0;
                for (var n = e.length - t, r = new Array(n); n--; ) r[n] = e[n + t];
                return r;
            }
            function b(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function _(e) {
                for (var t = {}, n = 0; n < e.length; n++) e[n] && b(t, e[n]);
                return t;
            }
            function w(e, t, n) {}
            function S(e, t) {
                if (e === t) return !0;
                var n = c(e), r = c(t);
                if (!n || !r) return !n && !r && String(e) === String(t);
                try {
                    var o = Array.isArray(e), i = Array.isArray(t);
                    if (o && i) return e.length === t.length && e.every(function(e, n) {
                        return S(e, t[n]);
                    });
                    if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                    if (o || i) return !1;
                    var a = Object.keys(e), u = Object.keys(t);
                    return a.length === u.length && a.every(function(n) {
                        return S(e[n], t[n]);
                    });
                } catch (e) {
                    return !1;
                }
            }
            function x(e, t) {
                for (var n = 0; n < e.length; n++) if (S(e[n], t)) return n;
                return -1;
            }
            function O(e) {
                var t = !1;
                return function() {
                    t || (t = !0, e.apply(this, arguments));
                };
            }
            function k(e) {
                var t = (e + "").charCodeAt(0);
                return 36 === t || 95 === t;
            }
            function T(e, t, n, r) {
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                });
            }
            function j(e) {
                if (!Dn.test(e)) {
                    var t = e.split(".");
                    return function(e) {
                        for (var n = 0; n < t.length; n++) {
                            if (!e) return;
                            e = e[t[n]];
                        }
                        return e;
                    };
                }
            }
            function P(e) {
                return "function" == typeof e && /native code/.test(e.toString());
            }
            function I(e) {
                zn.SharedObject.targetStack.push(e), zn.SharedObject.target = e;
            }
            function A() {
                zn.SharedObject.targetStack.pop(), zn.SharedObject.target = zn.SharedObject.targetStack[zn.SharedObject.targetStack.length - 1];
            }
            function C(e) {
                return new Qn(void 0, void 0, void 0, String(e));
            }
            function D(e) {
                var t = new Qn(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, 
                t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, 
                t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
            }
            function E(e) {
                tr = e;
            }
            function M(e, t) {
                e.__proto__ = t;
            }
            function $(e, t, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    T(e, i, t[i]);
                }
            }
            function L(e, t) {
                var n;
                if (c(e) && !(e instanceof Qn)) return v(e, "__ob__") && e.__ob__ instanceof nr ? n = e.__ob__ : tr && !Hn() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new nr(e)), 
                t && n && n.vmCount++, n;
            }
            function N(e, t, n, r, o) {
                var i = new zn(), a = Object.getOwnPropertyDescriptor(e, t);
                if (!a || !1 !== a.configurable) {
                    var c = a && a.get, u = a && a.set;
                    c && !u || 2 !== arguments.length || (n = e[t]);
                    var s = !o && L(n);
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var t = c ? c.call(e) : n;
                            return zn.SharedObject.target && (i.depend(), s && (s.dep.depend(), Array.isArray(t) && B(t))), 
                            t;
                        },
                        set: function(t) {
                            var r = c ? c.call(e) : n;
                            t === r || t !== t && r !== r || c && !u || (u ? u.call(e, t) : n = t, s = !o && L(t), 
                            i.notify());
                        }
                    });
                }
            }
            function U(e, t, n) {
                if (Array.isArray(e) && f(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), 
                n;
                if (t in e && !(t in Object.prototype)) return e[t] = n, n;
                var r = e.__ob__;
                return e._isVue || r && r.vmCount ? n : r ? (N(r.value, t, n), r.dep.notify(), n) : (e[t] = n, 
                n);
            }
            function R(e, t) {
                if (Array.isArray(e) && f(t)) e.splice(t, 1); else {
                    var n = e.__ob__;
                    e._isVue || n && n.vmCount || v(e, t) && (delete e[t], n && n.dep.notify());
                }
            }
            function B(e) {
                for (var t = void 0, n = 0, r = e.length; n < r; n++) (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), 
                Array.isArray(t) && B(t);
            }
            function F(e, t) {
                if (!t) return e;
                for (var n, r, o, i = Yn ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < i.length; a++) "__ob__" !== (n = i[a]) && (r = e[n], 
                o = t[n], v(e, n) ? r !== o && u(r) && u(o) && F(r, o) : U(e, n, o));
                return e;
            }
            function q(e, t, n) {
                return n ? function() {
                    var r = "function" == typeof t ? t.call(n, n) : t, o = "function" == typeof e ? e.call(n, n) : e;
                    return r ? F(r, o) : o;
                } : t ? e ? function() {
                    return F("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
                } : t : e;
            }
            function H(e, t) {
                var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [ t ] : e;
                return n ? V(n) : n;
            }
            function V(e) {
                for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t;
            }
            function Y(e, t, n, r) {
                var o = Object.create(e || null);
                return t ? b(o, t) : o;
            }
            function W(e, t) {
                var n = e.props;
                if (n) {
                    var r, o, i, a = {};
                    if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (o = n[r]) && (i = wn(o), 
                    a[i] = {
                        type: null
                    }); else if (u(n)) for (var c in n) o = n[c], a[i = wn(c)] = u(o) ? o : {
                        type: o
                    };
                    e.props = a;
                }
            }
            function G(e, t) {
                var n = e.inject;
                if (n) {
                    var r = e.inject = {};
                    if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r[n[o]] = {
                        from: n[o]
                    }; else if (u(n)) for (var i in n) {
                        var a = n[i];
                        r[i] = u(a) ? b({
                            from: i
                        }, a) : {
                            from: a
                        };
                    }
                }
            }
            function z(e) {
                var t = e.directives;
                if (t) for (var n in t) {
                    var r = t[n];
                    "function" == typeof r && (t[n] = {
                        bind: r,
                        update: r
                    });
                }
            }
            function Q(e, t, n) {
                function r(r) {
                    var o = rr[r] || ir;
                    c[r] = o(e[r], t[r], n, r);
                }
                if ("function" == typeof t && (t = t.options), W(t, n), G(t, n), z(t), !t._base && (t.extends && (e = Q(e, t.extends, n)), 
                t.mixins)) for (var o = 0, i = t.mixins.length; o < i; o++) e = Q(e, t.mixins[o], n);
                var a, c = {};
                for (a in e) r(a);
                for (a in t) v(e, a) || r(a);
                return c;
            }
            function K(e, t, n, r) {
                if ("string" == typeof n) {
                    var o = e[t];
                    if (v(o, n)) return o[n];
                    var i = wn(n);
                    if (v(o, i)) return o[i];
                    var a = Sn(i);
                    return v(o, a) ? o[a] : o[n] || o[i] || o[a];
                }
            }
            function X(e, t, n, r) {
                var o = t[e], i = !v(n, e), a = n[e], c = te(Boolean, o.type);
                if (c > -1) if (i && !v(o, "default")) a = !1; else if ("" === a || a === On(e)) {
                    var u = te(String, o.type);
                    (u < 0 || c < u) && (a = !0);
                }
                if (void 0 === a) {
                    a = J(r, o, e);
                    var s = tr;
                    E(!0), L(a), E(s);
                }
                return a;
            }
            function J(e, t, n) {
                if (v(t, "default")) {
                    var r = t.default;
                    return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== Z(t.type) ? r.call(e) : r;
                }
            }
            function Z(e) {
                var t = e && e.toString().match(/^\s*function (\w+)/);
                return t ? t[1] : "";
            }
            function ee(e, t) {
                return Z(e) === Z(t);
            }
            function te(e, t) {
                if (!Array.isArray(t)) return ee(t, e) ? 0 : -1;
                for (var n = 0, r = t.length; n < r; n++) if (ee(t[n], e)) return n;
                return -1;
            }
            function ne(e, t, n) {
                I();
                try {
                    if (t) for (var r = t; r = r.$parent; ) {
                        var o = r.$options.errorCaptured;
                        if (o) for (var i = 0; i < o.length; i++) try {
                            if (!1 === o[i].call(r, e, t, n)) return;
                        } catch (e) {
                            oe(e, r, "errorCaptured hook");
                        }
                    }
                    oe(e, t, n);
                } finally {
                    A();
                }
            }
            function re(e, t, n, r, o) {
                var i;
                try {
                    (i = n ? e.apply(t, n) : e.call(t)) && !i._isVue && l(i) && !i._handled && (i.catch(function(e) {
                        return ne(e, r, o + " (Promise/async)");
                    }), i._handled = !0);
                } catch (e) {
                    ne(e, r, o);
                }
                return i;
            }
            function oe(e, t, n) {
                if (An.errorHandler) try {
                    return An.errorHandler.call(null, e, t, n);
                } catch (t) {
                    t !== e && ie(t, null, "config.errorHandler");
                }
                ie(e, t, n);
            }
            function ie(e, t, n) {
                if (!Mn && !$n || "undefined" == typeof console) throw e;
                console.error(e);
            }
            function ae() {
                cr = !1;
                var e = ar.slice(0);
                ar.length = 0;
                for (var t = 0; t < e.length; t++) e[t]();
            }
            function ce(e, t) {
                var n;
                if (ar.push(function() {
                    if (e) try {
                        e.call(t);
                    } catch (e) {
                        ne(e, t, "nextTick");
                    } else n && n(t);
                }), cr || (cr = !0, or()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                    n = e;
                });
            }
            function ue(e) {
                se(e, dr), dr.clear();
            }
            function se(e, t) {
                var n, r, o = Array.isArray(e);
                if (!(!o && !c(e) || Object.isFrozen(e) || e instanceof Qn)) {
                    if (e.__ob__) {
                        var i = e.__ob__.dep.id;
                        if (t.has(i)) return;
                        t.add(i);
                    }
                    if (o) for (n = e.length; n--; ) se(e[n], t); else for (n = (r = Object.keys(e)).length; n--; ) se(e[r[n]], t);
                }
            }
            function fe(e, t) {
                function n() {
                    var e = arguments, r = n.fns;
                    if (!Array.isArray(r)) return re(r, null, arguments, t, "v-on handler");
                    for (var o = r.slice(), i = 0; i < o.length; i++) re(o[i], null, e, t, "v-on handler");
                }
                return n.fns = e, n;
            }
            function le(e, t, r, i, a, c) {
                var u, s, f, l;
                for (u in e) s = e[u], f = t[u], l = pr(u), n(s) || (n(f) ? (n(s.fns) && (s = e[u] = fe(s, c)), 
                o(l.once) && (s = e[u] = a(l.name, s, l.capture)), r(l.name, s, l.capture, l.passive, l.params)) : s !== f && (f.fns = s, 
                e[u] = f));
                for (u in t) n(e[u]) && (l = pr(u), i(l.name, t[u], l.capture));
            }
            function de(e, t, o) {
                var i = t.options.props;
                if (!n(i)) {
                    var a = {}, c = e.attrs, u = e.props;
                    if (r(c) || r(u)) for (var s in i) {
                        var f = On(s);
                        pe(a, u, s, f, !0) || pe(a, c, s, f, !1);
                    }
                    return a;
                }
            }
            function pe(e, t, n, o, i) {
                if (r(t)) {
                    if (v(t, n)) return e[n] = t[n], i || delete t[n], !0;
                    if (v(t, o)) return e[n] = t[o], i || delete t[o], !0;
                }
                return !1;
            }
            function he(e) {
                for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                return e;
            }
            function ge(e) {
                return a(e) ? [ C(e) ] : Array.isArray(e) ? me(e) : void 0;
            }
            function ve(e) {
                return r(e) && r(e.text) && i(e.isComment);
            }
            function me(e, t) {
                var i, c, u, s, f = [];
                for (i = 0; i < e.length; i++) n(c = e[i]) || "boolean" == typeof c || (u = f.length - 1, 
                s = f[u], Array.isArray(c) ? c.length > 0 && (c = me(c, (t || "") + "_" + i), ve(c[0]) && ve(s) && (f[u] = C(s.text + c[0].text), 
                c.shift()), f.push.apply(f, c)) : a(c) ? ve(s) ? f[u] = C(s.text + c) : "" !== c && f.push(C(c)) : ve(c) && ve(s) ? f[u] = C(s.text + c.text) : (o(e._isVList) && r(c.tag) && n(c.key) && r(t) && (c.key = "__vlist" + t + "_" + i + "__"), 
                f.push(c)));
                return f;
            }
            function ye(e) {
                var t = e.$options.provide;
                t && (e._provided = "function" == typeof t ? t.call(e) : t);
            }
            function be(e) {
                var t = _e(e.$options.inject, e);
                t && (E(!1), Object.keys(t).forEach(function(n) {
                    N(e, n, t[n]);
                }), E(!0));
            }
            function _e(e, t) {
                if (e) {
                    for (var n = Object.create(null), r = Yn ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
                        var i = r[o];
                        if ("__ob__" !== i) {
                            for (var a = e[i].from, c = t; c; ) {
                                if (c._provided && v(c._provided, a)) {
                                    n[i] = c._provided[a];
                                    break;
                                }
                                c = c.$parent;
                            }
                            if (!c && "default" in e[i]) {
                                var u = e[i].default;
                                n[i] = "function" == typeof u ? u.call(t) : u;
                            }
                        }
                    }
                    return n;
                }
            }
            function we(e, t) {
                if (!e || !e.length) return {};
                for (var n = {}, r = 0, o = e.length; r < o; r++) {
                    var i = e[r], a = i.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== t && i.fnContext !== t || !a || null == a.slot) i.asyncMeta && i.asyncMeta.data && "page" === i.asyncMeta.data.slot ? (n.page || (n.page = [])).push(i) : (n.default || (n.default = [])).push(i); else {
                        var c = a.slot, u = n[c] || (n[c] = []);
                        "template" === i.tag ? u.push.apply(u, i.children || []) : u.push(i);
                    }
                }
                for (var s in n) n[s].every(Se) && delete n[s];
                return n;
            }
            function Se(e) {
                return e.isComment && !e.asyncFactory || " " === e.text;
            }
            function xe(e, t, n) {
                var r, o = Object.keys(t).length > 0, i = e ? !!e.$stable : !o, a = e && e.$key;
                if (e) {
                    if (e._normalized) return e._normalized;
                    if (i && n && n !== gn && a === n.$key && !o && !n.$hasNormal) return n;
                    for (var c in r = {}, e) e[c] && "$" !== c[0] && (r[c] = Oe(t, c, e[c]));
                } else r = {};
                for (var u in t) u in r || (r[u] = ke(t, u));
                return e && Object.isExtensible(e) && (e._normalized = r), T(r, "$stable", i), T(r, "$key", a), 
                T(r, "$hasNormal", o), r;
            }
            function Oe(e, t, n) {
                var r = function() {
                    var e = arguments.length ? n.apply(null, arguments) : n({});
                    return (e = e && "object" === (void 0 === e ? "undefined" : _typeof(e)) && !Array.isArray(e) ? [ e ] : ge(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
                };
                return n.proxy && Object.defineProperty(e, t, {
                    get: r,
                    enumerable: !0,
                    configurable: !0
                }), r;
            }
            function ke(e, t) {
                return function() {
                    return e[t];
                };
            }
            function Te(e, t) {
                var n, o, i, a, u;
                if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), o = 0, 
                i = e.length; o < i; o++) n[o] = t(e[o], o); else if ("number" == typeof e) for (n = new Array(e), 
                o = 0; o < e; o++) n[o] = t(o + 1, o); else if (c(e)) if (Yn && e[Symbol.iterator]) {
                    n = [];
                    for (var s = e[Symbol.iterator](), f = s.next(); !f.done; ) n.push(t(f.value, n.length)), 
                    f = s.next();
                } else for (a = Object.keys(e), n = new Array(a.length), o = 0, i = a.length; o < i; o++) u = a[o], 
                n[o] = t(e[u], u, o);
                return r(n) || (n = []), n._isVList = !0, n;
            }
            function je(e, t, n, r) {
                var o, i = this.$scopedSlots[e];
                i ? (n = n || {}, r && (n = b(b({}, r), n)), o = i(n) || t) : o = this.$slots[e] || t;
                var a = n && n.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, o) : o;
            }
            function Pe(e) {
                return K(this.$options, "filters", e, !0) || jn;
            }
            function Ie(e, t) {
                return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
            }
            function Ae(e, t, n, r, o) {
                var i = An.keyCodes[t] || n;
                return o && r && !An.keyCodes[t] ? Ie(o, r) : i ? Ie(i, e) : r ? On(r) !== t : void 0;
            }
            function Ce(e, t, n, r, o) {
                if (n && c(n)) {
                    var i;
                    Array.isArray(n) && (n = _(n));
                    for (var a in n) !function(a) {
                        if ("class" === a || "style" === a || yn(a)) i = e; else {
                            var c = e.attrs && e.attrs.type;
                            i = r || An.mustUseProp(t, c, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                        }
                        var u = wn(a), s = On(a);
                        u in i || s in i || (i[a] = n[a], !o) || ((e.on || (e.on = {}))["update:" + a] = function(e) {
                            n[a] = e;
                        });
                    }(a);
                }
                return e;
            }
            function De(e, t) {
                var n = this._staticTrees || (this._staticTrees = []), r = n[e];
                return r && !t ? r : (r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), 
                Me(r, "__static__" + e, !1), r);
            }
            function Ee(e, t, n) {
                return Me(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
            }
            function Me(e, t, n) {
                if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && $e(e[r], t + "_" + r, n); else $e(e, t, n);
            }
            function $e(e, t, n) {
                e.isStatic = !0, e.key = t, e.isOnce = n;
            }
            function Le(e, t) {
                if (t && u(t)) {
                    var n = e.on = e.on ? b({}, e.on) : {};
                    for (var r in t) {
                        var o = n[r], i = t[r];
                        n[r] = o ? [].concat(o, i) : i;
                    }
                }
                return e;
            }
            function Ne(e, t, n, r) {
                t = t || {
                    $stable: !n
                };
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    Array.isArray(i) ? Ne(i, t, n) : i && (i.proxy && (i.fn.proxy = !0), t[i.key] = i.fn);
                }
                return r && (t.$key = r), t;
            }
            function Ue(e, t) {
                for (var n = 0; n < t.length; n += 2) {
                    var r = t[n];
                    "string" == typeof r && r && (e[t[n]] = t[n + 1]);
                }
                return e;
            }
            function Re(e, t) {
                return "string" == typeof e ? t + e : e;
            }
            function Be(e) {
                e._o = Ee, e._n = p, e._s = d, e._l = Te, e._t = je, e._q = S, e._i = x, e._m = De, 
                e._f = Pe, e._k = Ae, e._b = Ce, e._v = C, e._e = Xn, e._u = Ne, e._g = Le, e._d = Ue, 
                e._p = Re;
            }
            function Fe(e, t, n, r, i) {
                var a, c = this, u = i.options;
                v(r, "_uid") ? (a = Object.create(r), a._original = r) : (a = r, r = r._original);
                var s = o(u._compiled), f = !s;
                this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || gn, 
                this.injections = _e(u.inject, r), this.slots = function() {
                    return c.$slots || xe(e.scopedSlots, c.$slots = we(n, r)), c.$slots;
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return xe(e.scopedSlots, this.slots());
                    }
                }), s && (this.$options = u, this.$slots = this.slots(), this.$scopedSlots = xe(e.scopedSlots, this.$slots)), 
                u._scopeId ? this._c = function(e, t, n, o) {
                    var i = Ke(a, e, t, n, o, f);
                    return i && !Array.isArray(i) && (i.fnScopeId = u._scopeId, i.fnContext = r), i;
                } : this._c = function(e, t, n, r) {
                    return Ke(a, e, t, n, r, f);
                };
            }
            function qe(e, t, n, o, i) {
                var a = e.options, c = {}, u = a.props;
                if (r(u)) for (var s in u) c[s] = X(s, u, t || gn); else r(n.attrs) && Ve(c, n.attrs), 
                r(n.props) && Ve(c, n.props);
                var f = new Fe(n, c, i, o, e), l = a.render.call(null, f._c, f);
                if (l instanceof Qn) return He(l, n, f.parent, a, f);
                if (Array.isArray(l)) {
                    for (var d = ge(l) || [], p = new Array(d.length), h = 0; h < d.length; h++) p[h] = He(d[h], n, f.parent, a, f);
                    return p;
                }
            }
            function He(e, t, n, r, o) {
                var i = D(e);
                return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot), 
                i;
            }
            function Ve(e, t) {
                for (var n in t) e[wn(n)] = t[n];
            }
            function Ye(e, t, i, a, u) {
                if (!n(e)) {
                    var s = i.$options._base;
                    if (c(e) && (e = s.extend(e)), "function" == typeof e) {
                        var f;
                        if (n(e.cid) && (f = e, void 0 === (e = rt(f, s)))) return nt(f, t, i, a, u);
                        t = t || {}, Nt(e), r(t.model) && Qe(e.options, t);
                        var l = de(t, e, u);
                        if (o(e.options.functional)) return qe(e, l, t, i, a);
                        var d = t.on;
                        if (t.on = t.nativeOn, o(e.options.abstract)) {
                            var p = t.slot;
                            t = {}, p && (t.slot = p);
                        }
                        Ge(t);
                        var h = e.options.name || u;
                        return new Qn("vue-component-" + e.cid + (h ? "-" + h : ""), t, void 0, void 0, void 0, i, {
                            Ctor: e,
                            propsData: l,
                            listeners: d,
                            tag: u,
                            children: a
                        }, f);
                    }
                }
            }
            function We(e, t) {
                var n = {
                    _isComponent: !0,
                    _parentVnode: e,
                    parent: t
                }, o = e.data.inlineTemplate;
                return r(o) && (n.render = o.render, n.staticRenderFns = o.staticRenderFns), new e.componentOptions.Ctor(n);
            }
            function Ge(e) {
                for (var t = e.hook || (e.hook = {}), n = 0; n < vr.length; n++) {
                    var r = vr[n], o = t[r], i = gr[r];
                    o === i || o && o._merged || (t[r] = o ? ze(i, o) : i);
                }
            }
            function ze(e, t) {
                var n = function(n, r) {
                    e(n, r), t(n, r);
                };
                return n._merged = !0, n;
            }
            function Qe(e, t) {
                var n = e.model && e.model.prop || "value", o = e.model && e.model.event || "input";
                (t.attrs || (t.attrs = {}))[n] = t.model.value;
                var i = t.on || (t.on = {}), a = i[o], c = t.model.callback;
                r(a) ? (Array.isArray(a) ? -1 === a.indexOf(c) : a !== c) && (i[o] = [ c ].concat(a)) : i[o] = c;
            }
            function Ke(e, t, n, r, i, c) {
                return (Array.isArray(n) || a(n)) && (i = r, r = n, n = void 0), o(c) && (i = yr), 
                Xe(e, t, n, r, i);
            }
            function Xe(e, t, n, o, i) {
                if (r(n) && r(n.__ob__)) return Xn();
                if (r(n) && r(n.is) && (t = n.is), !t) return Xn();
                var a, c, u;
                return Array.isArray(o) && "function" == typeof o[0] && (n = n || {}, n.scopedSlots = {
                    default: o[0]
                }, o.length = 0), i === yr ? o = ge(o) : i === mr && (o = he(o)), "string" == typeof t ? (c = e.$vnode && e.$vnode.ns || An.getTagNamespace(t), 
                a = An.isReservedTag(t) ? new Qn(An.parsePlatformTagName(t), n, o, void 0, void 0, e) : n && n.pre || !r(u = K(e.$options, "components", t)) ? new Qn(t, n, o, void 0, void 0, e) : Ye(u, n, e, o, t)) : a = Ye(t, n, e, o), 
                Array.isArray(a) ? a : r(a) ? (r(c) && Je(a, c), r(n) && Ze(n), a) : Xn();
            }
            function Je(e, t, i) {
                if (e.ns = t, "foreignObject" === e.tag && (t = void 0, i = !0), r(e.children)) for (var a = 0, c = e.children.length; a < c; a++) {
                    var u = e.children[a];
                    r(u.tag) && (n(u.ns) || o(i) && "svg" !== u.tag) && Je(u, t, i);
                }
            }
            function Ze(e) {
                c(e.style) && ue(e.style), c(e.class) && ue(e.class);
            }
            function et(e) {
                e._vnode = null, e._staticTrees = null;
                var t = e.$options, n = e.$vnode = t._parentVnode, r = n && n.context;
                e.$slots = we(t._renderChildren, r), e.$scopedSlots = gn, e._c = function(t, n, r, o) {
                    return Ke(e, t, n, r, o, !1);
                }, e.$createElement = function(t, n, r, o) {
                    return Ke(e, t, n, r, o, !0);
                };
                var o = n && n.data;
                N(e, "$attrs", o && o.attrs || gn, null, !0), N(e, "$listeners", t._parentListeners || gn, null, !0);
            }
            function tt(e, t) {
                return (e.__esModule || Yn && "Module" === e[Symbol.toStringTag]) && (e = e.default), 
                c(e) ? t.extend(e) : e;
            }
            function nt(e, t, n, r, o) {
                var i = Xn();
                return i.asyncFactory = e, i.asyncMeta = {
                    data: t,
                    context: n,
                    children: r,
                    tag: o
                }, i;
            }
            function rt(e, t) {
                if (o(e.error) && r(e.errorComp)) return e.errorComp;
                if (r(e.resolved)) return e.resolved;
                var i = br;
                if (i && r(e.owners) && -1 === e.owners.indexOf(i) && e.owners.push(i), o(e.loading) && r(e.loadingComp)) return e.loadingComp;
                if (i && !r(e.owners)) {
                    var a = e.owners = [ i ], u = !0, s = null, f = null;
                    i.$on("hook:destroyed", function() {
                        return g(a, i);
                    });
                    var d = function(e) {
                        for (var t = 0, n = a.length; t < n; t++) a[t].$forceUpdate();
                        e && (a.length = 0, null !== s && (clearTimeout(s), s = null), null !== f && (clearTimeout(f), 
                        f = null));
                    }, p = O(function(n) {
                        e.resolved = tt(n, t), u ? a.length = 0 : d(!0);
                    }), h = O(function(t) {
                        r(e.errorComp) && (e.error = !0, d(!0));
                    }), v = e(p, h);
                    return c(v) && (l(v) ? n(e.resolved) && v.then(p, h) : l(v.component) && (v.component.then(p, h), 
                    r(v.error) && (e.errorComp = tt(v.error, t)), r(v.loading) && (e.loadingComp = tt(v.loading, t), 
                    0 === v.delay ? e.loading = !0 : s = setTimeout(function() {
                        s = null, n(e.resolved) && n(e.error) && (e.loading = !0, d(!1));
                    }, v.delay || 200)), r(v.timeout) && (f = setTimeout(function() {
                        f = null, n(e.resolved) && h(null);
                    }, v.timeout)))), u = !1, e.loading ? e.loadingComp : e.resolved;
                }
            }
            function ot(e) {
                return e.isComment && e.asyncFactory;
            }
            function it(e) {
                if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (r(n) && (r(n.componentOptions) || ot(n))) return n;
                }
            }
            function at(e) {
                e._events = Object.create(null), e._hasHookEvent = !1;
                var t = e.$options._parentListeners;
                t && ft(e, t);
            }
            function ct(e, t) {
                hr.$on(e, t);
            }
            function ut(e, t) {
                hr.$off(e, t);
            }
            function st(e, t) {
                var n = hr;
                return function r() {
                    null !== t.apply(null, arguments) && n.$off(e, r);
                };
            }
            function ft(e, t, n) {
                hr = e, le(t, n || {}, ct, ut, st, e), hr = void 0;
            }
            function lt(e) {
                var t = _r;
                return _r = e, function() {
                    _r = t;
                };
            }
            function dt(e) {
                var t = e.$options, n = t.parent;
                if (n && !t.abstract) {
                    for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                    n.$children.push(e);
                }
                e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, 
                e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, 
                e._isBeingDestroyed = !1;
            }
            function pt(e, t, n, r, o) {
                var i = r.data.scopedSlots, a = e.$scopedSlots, c = !!(i && !i.$stable || a !== gn && !a.$stable || i && e.$scopedSlots.$key !== i.$key), u = !!(o || e.$options._renderChildren || c);
                if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), 
                e.$options._renderChildren = o, e.$attrs = r.data.attrs || gn, e.$listeners = n || gn, 
                t && e.$options.props) {
                    E(!1);
                    for (var s = e._props, f = e.$options._propKeys || [], l = 0; l < f.length; l++) {
                        var d = f[l], p = e.$options.props;
                        s[d] = X(d, p, t, e);
                    }
                    E(!0), e.$options.propsData = t;
                }
                n = n || gn;
                var h = e.$options._parentListeners;
                e.$options._parentListeners = n, ft(e, n, h), u && (e.$slots = we(o, r.context), 
                e.$forceUpdate());
            }
            function ht(e) {
                for (;e && (e = e.$parent); ) if (e._inactive) return !0;
                return !1;
            }
            function gt(e, t) {
                if (t) {
                    if (e._directInactive = !1, ht(e)) return;
                } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var n = 0; n < e.$children.length; n++) gt(e.$children[n]);
                    mt(e, "activated");
                }
            }
            function vt(e, t) {
                if (!(t && (e._directInactive = !0, ht(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var n = 0; n < e.$children.length; n++) vt(e.$children[n]);
                    mt(e, "deactivated");
                }
            }
            function mt(e, t) {
                I();
                var n = e.$options[t], r = t + " hook";
                if (n) for (var o = 0, i = n.length; o < i; o++) re(n[o], e, null, e, r);
                e._hasHookEvent && e.$emit("hook:" + t), A();
            }
            function yt() {
                Tr = wr.length = Sr.length = 0, xr = {}, Or = kr = !1;
            }
            function bt() {
                var e, t;
                for (jr(), kr = !0, wr.sort(function(e, t) {
                    return e.id - t.id;
                }), Tr = 0; Tr < wr.length; Tr++) (e = wr[Tr]).before && e.before(), t = e.id, xr[t] = null, 
                e.run();
                var n = Sr.slice(), r = wr.slice();
                yt(), St(n), _t(r), Vn && An.devtools && Vn.emit("flush");
            }
            function _t(e) {
                for (var t = e.length; t--; ) {
                    var n = e[t], r = n.vm;
                    r._watcher === n && r._isMounted && !r._isDestroyed && mt(r, "updated");
                }
            }
            function wt(e) {
                e._inactive = !1, Sr.push(e);
            }
            function St(e) {
                for (var t = 0; t < e.length; t++) e[t]._inactive = !0, gt(e[t], !0);
            }
            function xt(e) {
                var t = e.id;
                if (null == xr[t]) {
                    if (xr[t] = !0, kr) {
                        for (var n = wr.length - 1; n > Tr && wr[n].id > e.id; ) n--;
                        wr.splice(n + 1, 0, e);
                    } else wr.push(e);
                    Or || (Or = !0, ce(bt));
                }
            }
            function Ot(e, t, n) {
                Cr.get = function() {
                    return this[t][n];
                }, Cr.set = function(e) {
                    this[t][n] = e;
                }, Object.defineProperty(e, n, Cr);
            }
            function kt(e) {
                e._watchers = [];
                var t = e.$options;
                t.props && Tt(e, t.props), t.methods && Et(e, t.methods), t.data ? jt(e) : L(e._data = {}, !0), 
                t.computed && It(e, t.computed), t.watch && t.watch !== Bn && Mt(e, t.watch);
            }
            function Tt(e, t) {
                var n = e.$options.propsData || {}, r = e._props = {}, o = e.$options._propKeys = [];
                !e.$parent || E(!1);
                for (var i in t) !function(i) {
                    o.push(i);
                    var a = X(i, t, n, e);
                    N(r, i, a), i in e || Ot(e, "_props", i);
                }(i);
                E(!0);
            }
            function jt(e) {
                var t = e.$options.data;
                u(t = e._data = "function" == typeof t ? Pt(t, e) : t || {}) || (t = {});
                for (var n = Object.keys(t), r = e.$options.props, o = (e.$options.methods, n.length); o--; ) {
                    var i = n[o];
                    r && v(r, i) || k(i) || Ot(e, "_data", i);
                }
                L(t, !0);
            }
            function Pt(e, t) {
                I();
                try {
                    return e.call(t, t);
                } catch (e) {
                    return ne(e, t, "data()"), {};
                } finally {
                    A();
                }
            }
            function It(e, t) {
                var n = e._computedWatchers = Object.create(null), r = Hn();
                for (var o in t) {
                    var i = t[o], a = "function" == typeof i ? i : i.get;
                    r || (n[o] = new Ar(e, a || w, w, Dr)), o in e || At(e, o, i);
                }
            }
            function At(e, t, n) {
                var r = !Hn();
                "function" == typeof n ? (Cr.get = r ? Ct(t) : Dt(n), Cr.set = w) : (Cr.get = n.get ? r && !1 !== n.cache ? Ct(t) : Dt(n.get) : w, 
                Cr.set = n.set || w), Object.defineProperty(e, t, Cr);
            }
            function Ct(e) {
                return function() {
                    var t = this._computedWatchers && this._computedWatchers[e];
                    if (t) return t.dirty && t.evaluate(), zn.SharedObject.target && t.depend(), t.value;
                };
            }
            function Dt(e) {
                return function() {
                    return e.call(this, this);
                };
            }
            function Et(e, t) {
                e.$options.props;
                for (var n in t) e[n] = "function" != typeof t[n] ? w : kn(t[n], e);
            }
            function Mt(e, t) {
                for (var n in t) {
                    var r = t[n];
                    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) $t(e, n, r[o]); else $t(e, n, r);
                }
            }
            function $t(e, t, n, r) {
                return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
            }
            function Lt(e, t) {
                var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
                n.parent = t.parent, n._parentVnode = r;
                var o = r.componentOptions;
                n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, 
                n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
            }
            function Nt(e) {
                var t = e.options;
                if (e.super) {
                    var n = Nt(e.super);
                    if (n !== e.superOptions) {
                        e.superOptions = n;
                        var r = Ut(e);
                        r && b(e.extendOptions, r), (t = e.options = Q(n, e.extendOptions)).name && (t.components[t.name] = e);
                    }
                }
                return t;
            }
            function Ut(e) {
                var t, n = e.options, r = e.sealedOptions;
                for (var o in n) n[o] !== r[o] && (t || (t = {}), t[o] = n[o]);
                return t;
            }
            function Rt(e) {
                this._init(e);
            }
            function Bt(e) {
                e.use = function(e) {
                    var t = this._installedPlugins || (this._installedPlugins = []);
                    if (t.indexOf(e) > -1) return this;
                    var n = y(arguments, 1);
                    return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), 
                    t.push(e), this;
                };
            }
            function Ft(e) {
                e.mixin = function(e) {
                    return this.options = Q(this.options, e), this;
                };
            }
            function qt(e) {
                e.cid = 0;
                var t = 1;
                e.extend = function(e) {
                    e = e || {};
                    var n = this, r = n.cid, o = e._Ctor || (e._Ctor = {});
                    if (o[r]) return o[r];
                    var i = e.name || n.options.name, a = function(e) {
                        this._init(e);
                    };
                    return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = t++, 
                    a.options = Q(n.options, e), a.super = n, a.options.props && Ht(a), a.options.computed && Vt(a), 
                    a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, Pn.forEach(function(e) {
                        a[e] = n[e];
                    }), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = e, 
                    a.sealedOptions = b({}, a.options), o[r] = a, a;
                };
            }
            function Ht(e) {
                var t = e.options.props;
                for (var n in t) Ot(e.prototype, "_props", n);
            }
            function Vt(e) {
                var t = e.options.computed;
                for (var n in t) At(e.prototype, n, t[n]);
            }
            function Yt(e) {
                Pn.forEach(function(t) {
                    e[t] = function(e, n) {
                        return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), 
                        "directive" === t && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
                    };
                });
            }
            function Wt(e) {
                return e && (e.Ctor.options.name || e.tag);
            }
            function Gt(e, t) {
                return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!s(e) && e.test(t);
            }
            function zt(e, t) {
                var n = e.cache, r = e.keys, o = e._vnode;
                for (var i in n) {
                    var a = n[i];
                    if (a) {
                        var c = Wt(a.componentOptions);
                        c && !t(c) && Qt(n, i, r, o);
                    }
                }
            }
            function Qt(e, t, n, r) {
                var o = e[t];
                !o || r && o.tag === r.tag || o.componentInstance.$destroy(), e[t] = null, g(n, t);
            }
            function Kt(e, t) {
                var n = {};
                return Xt(e, t), Jt(e, t, "", n), n;
            }
            function Xt(e, t) {
                if (e !== t) {
                    var n = en(e), r = en(t);
                    if (n == Nr && r == Nr) {
                        if (Object.keys(e).length >= Object.keys(t).length) for (var o in t) {
                            var i = e[o];
                            void 0 === i ? e[o] = null : Xt(i, t[o]);
                        }
                    } else n == Lr && r == Lr && e.length >= t.length && t.forEach(function(t, n) {
                        Xt(e[n], t);
                    });
                }
            }
            function Jt(e, t, n, r) {
                if (e !== t) {
                    var o = en(e), i = en(t);
                    if (o == Nr) if (i != Nr || Object.keys(e).length < Object.keys(t).length) Zt(r, n, e); else {
                        for (var a in e) !function(o) {
                            var i = e[o], a = t[o], c = en(i), u = en(a);
                            if (c != Lr && c != Nr) i != t[o] && Zt(r, ("" == n ? "" : n + ".") + o, i); else if (c == Lr) u != Lr ? Zt(r, ("" == n ? "" : n + ".") + o, i) : i.length < a.length ? Zt(r, ("" == n ? "" : n + ".") + o, i) : i.forEach(function(e, t) {
                                Jt(e, a[t], ("" == n ? "" : n + ".") + o + "[" + t + "]", r);
                            }); else if (c == Nr) if (u != Nr || Object.keys(i).length < Object.keys(a).length) Zt(r, ("" == n ? "" : n + ".") + o, i); else for (var s in i) Jt(i[s], a[s], ("" == n ? "" : n + ".") + o + "." + s, r);
                        }(a);
                    } else o == Lr ? i != Lr ? Zt(r, n, e) : e.length < t.length ? Zt(r, n, e) : e.forEach(function(e, o) {
                        Jt(e, t[o], n + "[" + o + "]", r);
                    }) : Zt(r, n, e);
                }
            }
            function Zt(e, t, n) {
                e[t] = n;
            }
            function en(e) {
                return Object.prototype.toString.call(e);
            }
            function tn(e) {
                if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var t = e.$scope;
                        console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]");
                    }
                    var n = e.__next_tick_callbacks.slice(0);
                    e.__next_tick_callbacks.length = 0;
                    for (var r = 0; r < n.length; r++) n[r]();
                }
            }
            function nn(e) {
                return wr.find(function(t) {
                    return e._watcher === t;
                });
            }
            function rn(e, t) {
                if (!e.__next_tick_pending && !nn(e)) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var n = e.$scope;
                        console.log("[" + +new Date() + "][" + (n.is || n.route) + "][" + e._uid + "]:nextVueTick");
                    }
                    return ce(t, e);
                }
                if (Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var r = e.$scope;
                    console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + e._uid + "]:nextMPTick");
                }
                var o;
                if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push(function() {
                    if (t) try {
                        t.call(e);
                    } catch (t) {
                        ne(t, e, "nextTick");
                    } else o && o(e);
                }), !t && "undefined" != typeof Promise) return new Promise(function(e) {
                    o = e;
                });
            }
            function on(e) {
                var t = Object.create(null);
                return [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {})).reduce(function(t, n) {
                    return t[n] = e[n], t;
                }, t), Object.assign(t, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (t.name = e.name, 
                t.value = e.value), JSON.parse(JSON.stringify(t));
            }
            function an() {}
            function cn(e, t, n) {
                if (!e.mpType) return e;
                "app" === e.mpType && (e.$options.render = an), e.$options.render || (e.$options.render = an), 
                "mp-toutiao" !== e.mpHost && mt(e, "beforeMount");
                return new Ar(e, function() {
                    e._update(e._render(), n);
                }, w, {
                    before: function() {
                        e._isMounted && !e._isDestroyed && mt(e, "beforeUpdate");
                    }
                }, !0), n = !1, e;
            }
            function un(e, t) {
                return r(e) || r(t) ? sn(e, fn(t)) : "";
            }
            function sn(e, t) {
                return e ? t ? e + " " + t : e : t || "";
            }
            function fn(e) {
                return Array.isArray(e) ? ln(e) : c(e) ? dn(e) : "string" == typeof e ? e : "";
            }
            function ln(e) {
                for (var t, n = "", o = 0, i = e.length; o < i; o++) r(t = fn(e[o])) && "" !== t && (n && (n += " "), 
                n += t);
                return n;
            }
            function dn(e) {
                var t = "";
                for (var n in e) e[n] && (t && (t += " "), t += n);
                return t;
            }
            function pn(e) {
                return Array.isArray(e) ? _(e) : "string" == typeof e ? Ur(e) : e;
            }
            function hn(e, t) {
                var n = t.split("."), r = n[0];
                return 0 === r.indexOf("__$n") && (r = parseInt(r.replace("__$n", ""))), 1 === n.length ? e[r] : hn(e[r], n.slice(1).join("."));
            }
            var gn = Object.freeze({}), vn = Object.prototype.toString;
            h("slot,component", !0);
            var mn, yn = h("key,ref,slot,slot-scope,is"), bn = Object.prototype.hasOwnProperty, _n = /-(\w)/g, wn = m(function(e) {
                return e.replace(_n, function(e, t) {
                    return t ? t.toUpperCase() : "";
                });
            }), Sn = m(function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }), xn = /\B([A-Z])/g, On = m(function(e) {
                return e.replace(xn, "-$1").toLowerCase();
            }), kn = Function.prototype.bind ? function(e, t) {
                return e.bind(t);
            } : function(e, t) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
                }
                return n._length = e.length, n;
            }, Tn = function(e, t, n) {
                return !1;
            }, jn = function(e) {
                return e;
            }, Pn = [ "component", "directive", "filter" ], In = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], An = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: Tn,
                isReservedAttr: Tn,
                isUnknownElement: Tn,
                getTagNamespace: w,
                parsePlatformTagName: jn,
                mustUseProp: Tn,
                async: !0,
                _lifecycleHooks: In
            }, Cn = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/, Dn = new RegExp("[^" + Cn.source + ".$_\\d]"), En = "__proto__" in {}, Mn = "undefined" != typeof window, $n = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, Ln = $n && WXEnvironment.platform.toLowerCase(), Nn = Mn && window.navigator.userAgent.toLowerCase(), Un = Nn && /msie|trident/.test(Nn), Rn = (Nn && Nn.indexOf("msie 9.0"), 
            Nn && Nn.indexOf("edge/"), Nn && Nn.indexOf("android"), Nn && /iphone|ipad|ipod|ios/.test(Nn) || "ios" === Ln), Bn = (Nn && /chrome\/\d+/.test(Nn), 
            Nn && /phantomjs/.test(Nn), Nn && Nn.match(/firefox\/(\d+)/), {}.watch);
            if (Mn) try {
                var Fn = {};
                Object.defineProperty(Fn, "passive", {
                    get: function() {}
                }), window.addEventListener("test-passive", null, Fn);
            } catch (e) {}
            var qn, Hn = function() {
                return void 0 === mn && (mn = !Mn && !$n && void 0 !== e && e.process && "server" === e.process.env.VUE_ENV), 
                mn;
            }, Vn = Mn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, Yn = "undefined" != typeof Symbol && P(Symbol) && "undefined" != typeof Reflect && P(Reflect.ownKeys);
            qn = "undefined" != typeof Set && P(Set) ? Set : function() {
                function e() {
                    this.set = Object.create(null);
                }
                return e.prototype.has = function(e) {
                    return !0 === this.set[e];
                }, e.prototype.add = function(e) {
                    this.set[e] = !0;
                }, e.prototype.clear = function() {
                    this.set = Object.create(null);
                }, e;
            }();
            var Wn = w, Gn = 0, zn = function() {
                this.id = Gn++, this.subs = [];
            };
            zn.prototype.addSub = function(e) {
                this.subs.push(e);
            }, zn.prototype.removeSub = function(e) {
                g(this.subs, e);
            }, zn.prototype.depend = function() {
                zn.SharedObject.target && zn.SharedObject.target.addDep(this);
            }, zn.prototype.notify = function() {
                for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update();
            }, zn.SharedObject = "undefined" != typeof SharedObject ? SharedObject : {}, zn.SharedObject.target = null, 
            zn.SharedObject.targetStack = [];
            var Qn = function(e, t, n, r, o, i, a, c) {
                this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = o, this.ns = void 0, 
                this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
                this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, 
                this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
                this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = c, 
                this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, Kn = {
                child: {
                    configurable: !0
                }
            };
            Kn.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(Qn.prototype, Kn);
            var Xn = function(e) {
                void 0 === e && (e = "");
                var t = new Qn();
                return t.text = e, t.isComment = !0, t;
            }, Jn = Array.prototype, Zn = Object.create(Jn);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(e) {
                var t = Jn[e];
                T(Zn, e, function() {
                    for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
                    var o, i = t.apply(this, n), a = this.__ob__;
                    switch (e) {
                      case "push":
                      case "unshift":
                        o = n;
                        break;

                      case "splice":
                        o = n.slice(2);
                    }
                    return o && a.observeArray(o), a.dep.notify(), i;
                });
            });
            var er = Object.getOwnPropertyNames(Zn), tr = !0, nr = function(e) {
                this.value = e, this.dep = new zn(), this.vmCount = 0, T(e, "__ob__", this), Array.isArray(e) ? (En ? e.push !== e.__proto__.push ? $(e, Zn, er) : M(e, Zn) : $(e, Zn, er), 
                this.observeArray(e)) : this.walk(e);
            };
            nr.prototype.walk = function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) N(e, t[n]);
            }, nr.prototype.observeArray = function(e) {
                for (var t = 0, n = e.length; t < n; t++) L(e[t]);
            };
            var rr = An.optionMergeStrategies;
            rr.data = function(e, t, n) {
                return n ? q(e, t, n) : t && "function" != typeof t ? e : q(e, t);
            }, In.forEach(function(e) {
                rr[e] = H;
            }), Pn.forEach(function(e) {
                rr[e + "s"] = Y;
            }), rr.watch = function(e, t, n, r) {
                if (e === Bn && (e = void 0), t === Bn && (t = void 0), !t) return Object.create(e || null);
                if (!e) return t;
                var o = {};
                for (var i in b(o, e), t) {
                    var a = o[i], c = t[i];
                    a && !Array.isArray(a) && (a = [ a ]), o[i] = a ? a.concat(c) : Array.isArray(c) ? c : [ c ];
                }
                return o;
            }, rr.props = rr.methods = rr.inject = rr.computed = function(e, t, n, r) {
                if (!e) return t;
                var o = Object.create(null);
                return b(o, e), t && b(o, t), o;
            }, rr.provide = q;
            var or, ir = function(e, t) {
                return void 0 === t ? e : t;
            }, ar = [], cr = !1;
            if ("undefined" != typeof Promise && P(Promise)) {
                var ur = Promise.resolve();
                or = function() {
                    ur.then(ae), Rn && setTimeout(w);
                };
            } else if (Un || "undefined" == typeof MutationObserver || !P(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) or = "undefined" != typeof setImmediate && P(setImmediate) ? function() {
                setImmediate(ae);
            } : function() {
                setTimeout(ae, 0);
            }; else {
                var sr = 1, fr = new MutationObserver(ae), lr = document.createTextNode(String(sr));
                fr.observe(lr, {
                    characterData: !0
                }), or = function() {
                    sr = (sr + 1) % 2, lr.data = String(sr);
                };
            }
            var dr = new qn(), pr = m(function(e) {
                var t = "&" === e.charAt(0), n = "~" === (e = t ? e.slice(1) : e).charAt(0), r = "!" === (e = n ? e.slice(1) : e).charAt(0);
                return e = r ? e.slice(1) : e, {
                    name: e,
                    once: n,
                    capture: r,
                    passive: t
                };
            });
            Be(Fe.prototype);
            var hr, gr = {
                init: function(e, t) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var n = e;
                        gr.prepatch(n, n);
                    } else (e.componentInstance = We(e, _r)).$mount(t ? e.elm : void 0, t);
                },
                prepatch: function(e, t) {
                    var n = t.componentOptions;
                    pt(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
                },
                insert: function(e) {
                    var t = e.context, n = e.componentInstance;
                    n._isMounted || (n._isMounted = !0, mt(n, "mounted")), e.data.keepAlive && (t._isMounted ? wt(n) : gt(n, !0));
                },
                destroy: function(e) {
                    var t = e.componentInstance;
                    t._isDestroyed || (e.data.keepAlive ? vt(t, !0) : t.$destroy());
                }
            }, vr = Object.keys(gr), mr = 1, yr = 2, br = null, _r = null, wr = [], Sr = [], xr = {}, Or = !1, kr = !1, Tr = 0, jr = Date.now;
            if (Mn && !Un) {
                var Pr = window.performance;
                Pr && "function" == typeof Pr.now && jr() > document.createEvent("Event").timeStamp && (jr = function() {
                    return Pr.now();
                });
            }
            var Ir = 0, Ar = function(e, t, n, r, o) {
                this.vm = e, o && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, 
                this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = n, this.id = ++Ir, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new qn(), this.newDepIds = new qn(), this.expression = "", 
                "function" == typeof t ? this.getter = t : (this.getter = j(t), this.getter || (this.getter = w)), 
                this.value = this.lazy ? void 0 : this.get();
            };
            Ar.prototype.get = function() {
                var e;
                I(this);
                var t = this.vm;
                try {
                    e = this.getter.call(t, t);
                } catch (e) {
                    if (!this.user) throw e;
                    ne(e, t, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && ue(e), A(), this.cleanupDeps();
                }
                return e;
            }, Ar.prototype.addDep = function(e) {
                var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
            }, Ar.prototype.cleanupDeps = function() {
                for (var e = this.deps.length; e--; ) {
                    var t = this.deps[e];
                    this.newDepIds.has(t.id) || t.removeSub(this);
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
                this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
            }, Ar.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : xt(this);
            }, Ar.prototype.run = function() {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || c(e) || this.deep) {
                        var t = this.value;
                        if (this.value = e, this.user) try {
                            this.cb.call(this.vm, e, t);
                        } catch (e) {
                            ne(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, e, t);
                    }
                }
            }, Ar.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, Ar.prototype.depend = function() {
                for (var e = this.deps.length; e--; ) this.deps[e].depend();
            }, Ar.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || g(this.vm._watchers, this);
                    for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
                    this.active = !1;
                }
            };
            var Cr = {
                enumerable: !0,
                configurable: !0,
                get: w,
                set: w
            }, Dr = {
                lazy: !0
            }, Er = 0;
            (function(e) {
                e.prototype._init = function(e) {
                    var t = this;
                    t._uid = Er++, t._isVue = !0, e && e._isComponent ? Lt(t, e) : t.$options = Q(Nt(t.constructor), e || {}, t), 
                    t._renderProxy = t, t._self = t, dt(t), at(t), et(t), mt(t, "beforeCreate"), "mp-toutiao" !== t.mpHost && be(t), 
                    kt(t), "mp-toutiao" !== t.mpHost && ye(t), "mp-toutiao" !== t.mpHost && mt(t, "created"), 
                    t.$options.el && t.$mount(t.$options.el);
                };
            })(Rt), function(e) {
                var t = {
                    get: function() {
                        return this._data;
                    }
                }, n = {
                    get: function() {
                        return this._props;
                    }
                };
                Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), 
                e.prototype.$set = U, e.prototype.$delete = R, e.prototype.$watch = function(e, t, n) {
                    var r = this;
                    if (u(t)) return $t(r, e, t, n);
                    (n = n || {}).user = !0;
                    var o = new Ar(r, e, t, n);
                    if (n.immediate) try {
                        t.call(r, o.value);
                    } catch (e) {
                        ne(e, r, 'callback for immediate watcher "' + o.expression + '"');
                    }
                    return function() {
                        o.teardown();
                    };
                };
            }(Rt), function(e) {
                var t = /^hook:/;
                e.prototype.$on = function(e, n) {
                    var r = this;
                    if (Array.isArray(e)) for (var o = 0, i = e.length; o < i; o++) r.$on(e[o], n); else (r._events[e] || (r._events[e] = [])).push(n), 
                    t.test(e) && (r._hasHookEvent = !0);
                    return r;
                }, e.prototype.$once = function(e, t) {
                    function n() {
                        r.$off(e, n), t.apply(r, arguments);
                    }
                    var r = this;
                    return n.fn = t, r.$on(e, n), r;
                }, e.prototype.$off = function(e, t) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(e)) {
                        for (var r = 0, o = e.length; r < o; r++) n.$off(e[r], t);
                        return n;
                    }
                    var i, a = n._events[e];
                    if (!a) return n;
                    if (!t) return n._events[e] = null, n;
                    for (var c = a.length; c--; ) if ((i = a[c]) === t || i.fn === t) {
                        a.splice(c, 1);
                        break;
                    }
                    return n;
                }, e.prototype.$emit = function(e) {
                    var t = this, n = t._events[e];
                    if (n) {
                        n = n.length > 1 ? y(n) : n;
                        for (var r = y(arguments, 1), o = 'event handler for "' + e + '"', i = 0, a = n.length; i < a; i++) re(n[i], t, r, t, o);
                    }
                    return t;
                };
            }(Rt), function(e) {
                e.prototype._update = function(e, t) {
                    var n = this, r = n.$el, o = n._vnode, i = lt(n);
                    n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), i(), 
                    r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
                }, e.prototype.$forceUpdate = function() {
                    var e = this;
                    e._watcher && e._watcher.update();
                }, e.prototype.$destroy = function() {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        mt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var t = e.$parent;
                        !t || t._isBeingDestroyed || e.$options.abstract || g(t.$children, e), e._watcher && e._watcher.teardown();
                        for (var n = e._watchers.length; n--; ) e._watchers[n].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), 
                        mt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
                    }
                };
            }(Rt), function(e) {
                Be(e.prototype), e.prototype.$nextTick = function(e) {
                    return ce(e, this);
                }, e.prototype._render = function() {
                    var e, t = this, n = t.$options, r = n.render, o = n._parentVnode;
                    o && (t.$scopedSlots = xe(o.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = o;
                    try {
                        br = t, e = r.call(t._renderProxy, t.$createElement);
                    } catch (n) {
                        ne(n, t, "render"), e = t._vnode;
                    } finally {
                        br = null;
                    }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof Qn || (e = Xn()), 
                    e.parent = o, e;
                };
            }(Rt);
            var Mr = [ String, RegExp, Array ], $r = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: Mr,
                        exclude: Mr,
                        max: [ String, Number ]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function() {
                        for (var e in this.cache) Qt(this.cache, e, this.keys);
                    },
                    mounted: function() {
                        var e = this;
                        this.$watch("include", function(t) {
                            zt(e, function(e) {
                                return Gt(t, e);
                            });
                        }), this.$watch("exclude", function(t) {
                            zt(e, function(e) {
                                return !Gt(t, e);
                            });
                        });
                    },
                    render: function() {
                        var e = this.$slots.default, t = it(e), n = t && t.componentOptions;
                        if (n) {
                            var r = Wt(n), o = this, i = o.include, a = o.exclude;
                            if (i && (!r || !Gt(i, r)) || a && r && Gt(a, r)) return t;
                            var c = this, u = c.cache, s = c.keys, f = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                            u[f] ? (t.componentInstance = u[f].componentInstance, g(s, f), s.push(f)) : (u[f] = t, 
                            s.push(f), this.max && s.length > parseInt(this.max) && Qt(u, s[0], s, this._vnode)), 
                            t.data.keepAlive = !0;
                        }
                        return t || e && e[0];
                    }
                }
            };
            (function(e) {
                var t = {
                    get: function() {
                        return An;
                    }
                };
                Object.defineProperty(e, "config", t), e.util = {
                    warn: Wn,
                    extend: b,
                    mergeOptions: Q,
                    defineReactive: N
                }, e.set = U, e.delete = R, e.nextTick = ce, e.observable = function(e) {
                    return L(e), e;
                }, e.options = Object.create(null), Pn.forEach(function(t) {
                    e.options[t + "s"] = Object.create(null);
                }), e.options._base = e, b(e.options.components, $r), Bt(e), Ft(e), qt(e), Yt(e);
            })(Rt), Object.defineProperty(Rt.prototype, "$isServer", {
                get: Hn
            }), Object.defineProperty(Rt.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(Rt, "FunctionalRenderContext", {
                value: Fe
            }), Rt.version = "2.6.10";
            var Lr = "[object Array]", Nr = "[object Object]", Ur = m(function(e) {
                var t = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
                return e.split(n).forEach(function(e) {
                    if (e) {
                        var n = e.split(r);
                        n.length > 1 && (t[n[0].trim()] = n[1].trim());
                    }
                }), t;
            }), Rr = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ], Br = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onError", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize" ];
            Rt.prototype.__patch__ = function(e, t) {
                var n = this;
                if (null !== t && ("page" === this.mpType || "component" === this.mpType)) {
                    var r = this.$scope, o = Object.create(null);
                    try {
                        o = on(this);
                    } catch (e) {
                        console.error(e);
                    }
                    o.__webviewId__ = r.data.__webviewId__;
                    var i = Object.create(null);
                    Object.keys(o).forEach(function(e) {
                        i[e] = r.data[e];
                    });
                    var a = Kt(o, i);
                    Object.keys(a).length ? (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + this._uid + "]差量更新", JSON.stringify(a)), 
                    this.__next_tick_pending = !0, r.setData(a, function() {
                        n.__next_tick_pending = !1, tn(n);
                    })) : tn(this);
                }
            }, Rt.prototype.$mount = function(e, t) {
                return cn(this, 0, t);
            }, function(e) {
                var t = e.extend;
                e.extend = function(e) {
                    var n = (e = e || {}).methods;
                    return n && Object.keys(n).forEach(function(t) {
                        -1 !== Br.indexOf(t) && (e[t] = n[t], delete n[t]);
                    }), t.call(this, e);
                };
                var n = e.config.optionMergeStrategies, r = n.created;
                Br.forEach(function(e) {
                    n[e] = r;
                }), e.prototype.__lifecycle_hooks__ = Br;
            }(Rt), function(e) {
                e.config.errorHandler = function(e) {
                    console.error(e);
                };
                var t = e.prototype.$emit;
                e.prototype.$emit = function(e) {
                    return this.$scope && e && this.$scope.triggerEvent(e, {
                        __args__: y(arguments, 1)
                    }), t.apply(this, arguments);
                }, e.prototype.$nextTick = function(e) {
                    return rn(this, e);
                }, Rr.forEach(function(t) {
                    e.prototype[t] = function(e) {
                        if (this.$scope) return this.$scope[t](e);
                    };
                }), e.prototype.__init_provide = ye, e.prototype.__init_injections = be, e.prototype.__call_hook = function(e, t) {
                    var n = this;
                    I();
                    var r, o = n.$options[e], i = e + " hook";
                    if (o) for (var a = 0, c = o.length; a < c; a++) r = re(o[a], n, t ? [ t ] : null, n, i);
                    return n._hasHookEvent && n.$emit("hook:" + e), A(), r;
                }, e.prototype.__set_model = function(e, t, n, r) {
                    Array.isArray(r) && (-1 !== r.indexOf("trim") && (n = n.trim()), -1 !== r.indexOf("number") && (n = this._n(n))), 
                    e || (e = this), e[t] = n;
                }, e.prototype.__set_sync = function(e, t, n) {
                    e || (e = this), e[t] = n;
                }, e.prototype.__get_orig = function(e) {
                    return u(e) && e.$orig || e;
                }, e.prototype.__get_value = function(e, t) {
                    return hn(t || this, e);
                }, e.prototype.__get_class = function(e, t) {
                    return un(t, e);
                }, e.prototype.__get_style = function(e, t) {
                    if (!e && !t) return "";
                    var n = pn(e), r = t ? b(t, n) : n;
                    return Object.keys(r).map(function(e) {
                        return On(e) + ":" + r[e];
                    }).join(";");
                }, e.prototype.__map = function(e, t) {
                    var n, r, o, i, a;
                    if (Array.isArray(e)) {
                        for (n = new Array(e.length), r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r);
                        return n;
                    }
                    if (c(e)) {
                        for (i = Object.keys(e), n = Object.create(null), r = 0, o = i.length; r < o; r++) n[a = i[r]] = t(e[a], a, r);
                        return n;
                    }
                    return [];
                };
            }(Rt), t.default = Rt;
        }.call(this, n("c8ba"));
    },
    6821: function(e, t, n) {
        !function() {
            var t = n("00d8"), r = n("9a63").utf8, o = n("044b"), i = n("9a63").bin, a = function e(n, a) {
                n.constructor == String ? n = a && "binary" === a.encoding ? i.stringToBytes(n) : r.stringToBytes(n) : o(n) ? n = Array.prototype.slice.call(n, 0) : Array.isArray(n) || (n = n.toString());
                for (var c = t.bytesToWords(n), u = 8 * n.length, s = 1732584193, f = -271733879, l = -1732584194, d = 271733878, p = 0; p < c.length; p++) c[p] = 16711935 & (c[p] << 8 | c[p] >>> 24) | 4278255360 & (c[p] << 24 | c[p] >>> 8);
                c[u >>> 5] |= 128 << u % 32, c[14 + (u + 64 >>> 9 << 4)] = u;
                var h = e._ff, g = e._gg, v = e._hh, m = e._ii;
                for (p = 0; p < c.length; p += 16) {
                    var y = s, b = f, _ = l, w = d;
                    f = m(f = m(f = m(f = m(f = v(f = v(f = v(f = v(f = g(f = g(f = g(f = g(f = h(f = h(f = h(f = h(f, l = h(l, d = h(d, s = h(s, f, l, d, c[p + 0], 7, -680876936), f, l, c[p + 1], 12, -389564586), s, f, c[p + 2], 17, 606105819), d, s, c[p + 3], 22, -1044525330), l = h(l, d = h(d, s = h(s, f, l, d, c[p + 4], 7, -176418897), f, l, c[p + 5], 12, 1200080426), s, f, c[p + 6], 17, -1473231341), d, s, c[p + 7], 22, -45705983), l = h(l, d = h(d, s = h(s, f, l, d, c[p + 8], 7, 1770035416), f, l, c[p + 9], 12, -1958414417), s, f, c[p + 10], 17, -42063), d, s, c[p + 11], 22, -1990404162), l = h(l, d = h(d, s = h(s, f, l, d, c[p + 12], 7, 1804603682), f, l, c[p + 13], 12, -40341101), s, f, c[p + 14], 17, -1502002290), d, s, c[p + 15], 22, 1236535329), l = g(l, d = g(d, s = g(s, f, l, d, c[p + 1], 5, -165796510), f, l, c[p + 6], 9, -1069501632), s, f, c[p + 11], 14, 643717713), d, s, c[p + 0], 20, -373897302), l = g(l, d = g(d, s = g(s, f, l, d, c[p + 5], 5, -701558691), f, l, c[p + 10], 9, 38016083), s, f, c[p + 15], 14, -660478335), d, s, c[p + 4], 20, -405537848), l = g(l, d = g(d, s = g(s, f, l, d, c[p + 9], 5, 568446438), f, l, c[p + 14], 9, -1019803690), s, f, c[p + 3], 14, -187363961), d, s, c[p + 8], 20, 1163531501), l = g(l, d = g(d, s = g(s, f, l, d, c[p + 13], 5, -1444681467), f, l, c[p + 2], 9, -51403784), s, f, c[p + 7], 14, 1735328473), d, s, c[p + 12], 20, -1926607734), l = v(l, d = v(d, s = v(s, f, l, d, c[p + 5], 4, -378558), f, l, c[p + 8], 11, -2022574463), s, f, c[p + 11], 16, 1839030562), d, s, c[p + 14], 23, -35309556), l = v(l, d = v(d, s = v(s, f, l, d, c[p + 1], 4, -1530992060), f, l, c[p + 4], 11, 1272893353), s, f, c[p + 7], 16, -155497632), d, s, c[p + 10], 23, -1094730640), l = v(l, d = v(d, s = v(s, f, l, d, c[p + 13], 4, 681279174), f, l, c[p + 0], 11, -358537222), s, f, c[p + 3], 16, -722521979), d, s, c[p + 6], 23, 76029189), l = v(l, d = v(d, s = v(s, f, l, d, c[p + 9], 4, -640364487), f, l, c[p + 12], 11, -421815835), s, f, c[p + 15], 16, 530742520), d, s, c[p + 2], 23, -995338651), l = m(l, d = m(d, s = m(s, f, l, d, c[p + 0], 6, -198630844), f, l, c[p + 7], 10, 1126891415), s, f, c[p + 14], 15, -1416354905), d, s, c[p + 5], 21, -57434055), l = m(l, d = m(d, s = m(s, f, l, d, c[p + 12], 6, 1700485571), f, l, c[p + 3], 10, -1894986606), s, f, c[p + 10], 15, -1051523), d, s, c[p + 1], 21, -2054922799), l = m(l, d = m(d, s = m(s, f, l, d, c[p + 8], 6, 1873313359), f, l, c[p + 15], 10, -30611744), s, f, c[p + 6], 15, -1560198380), d, s, c[p + 13], 21, 1309151649), l = m(l, d = m(d, s = m(s, f, l, d, c[p + 4], 6, -145523070), f, l, c[p + 11], 10, -1120210379), s, f, c[p + 2], 15, 718787259), d, s, c[p + 9], 21, -343485551), 
                    s = s + y >>> 0, f = f + b >>> 0, l = l + _ >>> 0, d = d + w >>> 0;
                }
                return t.endian([ s, f, l, d ]);
            };
            a._ff = function(e, t, n, r, o, i, a) {
                var c = e + (t & n | ~t & r) + (o >>> 0) + a;
                return (c << i | c >>> 32 - i) + t;
            }, a._gg = function(e, t, n, r, o, i, a) {
                var c = e + (t & r | n & ~r) + (o >>> 0) + a;
                return (c << i | c >>> 32 - i) + t;
            }, a._hh = function(e, t, n, r, o, i, a) {
                var c = e + (t ^ n ^ r) + (o >>> 0) + a;
                return (c << i | c >>> 32 - i) + t;
            }, a._ii = function(e, t, n, r, o, i, a) {
                var c = e + (n ^ (t | ~r)) + (o >>> 0) + a;
                return (c << i | c >>> 32 - i) + t;
            }, a._blocksize = 16, a._digestsize = 16, e.exports = function(e, n) {
                if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
                var r = t.wordsToBytes(a(e, n));
                return n && n.asBytes ? r : n && n.asString ? i.bytesToString(r) : t.bytesToHex(r);
            };
        }();
    },
    "693a": function(e, t) {
        e.exports = function() {
            var e = new Date(), t = e.getFullYear(), n = e.getMonth(), r = e.getDate(), o = new Date(0);
            return o.setFullYear(t, n, r - 1), o.setHours(0, 0, 0, 0), o;
        };
    },
    6988: function(e, t, n) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : _typeof(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
            })(e);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(e) {
            return "function" != typeof e ? e : function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return "object" !== r(t) ? e(t) : new Promise(function(n, r) {
                    t.success = n, t.fail = r, e(t);
                });
            };
        }, i = Object.keys(wx).reduce(function(e, t) {
            return e[t] = o(wx[t]), e;
        }, {});
        t.default = i;
    },
    "6b8f": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getTime() < o.getTime();
        };
    },
    "6cdc": function(e, t, n) {},
    "6f00": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = Number(t);
            return n.setHours(o), n;
        };
    },
    "6f4e": function(e, t) {
        e.exports = function() {
            var e = new Date(), t = e.getFullYear(), n = e.getMonth(), r = e.getDate(), o = new Date(0);
            return o.setFullYear(t, n, r + 1), o.setHours(23, 59, 59, 999), o;
        };
    },
    "6fc3": function(e, t, n) {
        function r(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    o(e, t, n[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n("f8c8"), a = {
            namespaced: !0,
            state: function() {
                return {};
            },
            getters: {},
            actions: {
                createOrder: function(e, t) {
                    e.state;
                    var n = e.rootState, o = e.dispatch, a = n.user.loginInfo;
                    (0, i.createTopupOrder)(r({}, t, {
                        openid: a.openId,
                        wxUnionId: a.unionId
                    })).then(function(e) {
                        o("invokeWechatPay", {
                            order: e,
                            productType: t.productType
                        });
                    }).catch(function(e) {
                        if (40003 === e.errcode) return wx.showToast({
                            title: "绑定手机",
                            icon: "none",
                            duration: 1e3
                        }), void o("overlay/pushOverlayStack", "verify mobile", {
                            root: !0
                        });
                        wx.showToast({
                            title: "微信签名错误",
                            icon: "none",
                            duration: 1e3
                        });
                    });
                },
                invokeWechatPay: function(e, t) {
                    var n = e.dispatch, r = t.order, o = t.productType, i = {
                        appId: r.wxWebPayOrder.appId,
                        nonceStr: r.wxWebPayOrder.nonceStr,
                        timeStamp: r.wxWebPayOrder.timeStamp,
                        package: r.wxWebPayOrder.package,
                        signType: r.wxWebPayOrder.signType,
                        paySign: r.wxWebPayOrder.paySign,
                        success: function(e) {
                            console.log("success", e, i), n("checkBaobiOrderStatus", {
                                orderId: r.orderId,
                                productType: o
                            });
                        },
                        fail: function(e) {
                            console.log("fail", e, i);
                        }
                    };
                    wx.requestPayment(i);
                },
                checkBaobiOrderStatus: function(e, t) {
                    var n, r = e.commit, o = e.dispatch, a = t.orderId, c = t.productType;
                    !function e() {
                        (0, i.checkBaobiOrder)(a).then(function(t) {
                            n = setTimeout(e, 1e3), t.baobiOrder && 9 === t.baobiOrder.status && (clearTimeout(n), 
                            r("user/upDateBalance", t.latestBalance, {
                                root: !0
                            }), 0 === c ? o("subscribe/purchaseMessage", null, {
                                root: !0
                            }) : 1 === c && o("subscribe/purchaseSubject", null, {
                                root: !0
                            }));
                        }).catch(function(t) {
                            console.error("checkBaobiOrder", t), n = setTimeout(e, 1e3);
                        });
                    }();
                }
            },
            mutations: {}
        };
        t.default = a;
    },
    "6fcc": function(e, t, n) {
        var r = n("c8d5"), o = n("2a9c"), i = n("0d3e");
        e.exports = function(e, t) {
            var n = r(e), a = r(t), c = i(n, a), u = Math.abs(o(n, a));
            return n.setFullYear(n.getFullYear() - c * u), c * (u - (i(n, a) === -c));
        };
    },
    "70f2": function(e, t, n) {
        function r(e, t, n) {
            var r, i, a = e.match(n), c = a.length;
            for (r = 0; r < c; r++) i = t[a[r]] || p[a[r]], a[r] = i || o(a[r]);
            return function(e) {
                for (var t = "", n = 0; n < c; n++) a[n] instanceof Function ? t += a[n](e, p) : t += a[n];
                return t;
            };
        }
        function o(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|]$/g, "") : e.replace(/\\/g, "");
        }
        function i(e, t) {
            t = t || "";
            var n = e > 0 ? "-" : "+", r = Math.abs(e), o = r % 60;
            return n + a(Math.floor(r / 60), 2) + t + a(o, 2);
        }
        function a(e, t) {
            for (var n = Math.abs(e).toString(); n.length < t; ) n = "0" + n;
            return n;
        }
        var c = n("580f"), u = n("81fc"), s = n("8964"), f = n("c8d5"), l = n("7eea"), d = n("52cf"), p = {
            M: function(e) {
                return e.getMonth() + 1;
            },
            MM: function(e) {
                return a(e.getMonth() + 1, 2);
            },
            Q: function(e) {
                return Math.ceil((e.getMonth() + 1) / 3);
            },
            D: function(e) {
                return e.getDate();
            },
            DD: function(e) {
                return a(e.getDate(), 2);
            },
            DDD: function(e) {
                return c(e);
            },
            DDDD: function(e) {
                return a(c(e), 3);
            },
            d: function(e) {
                return e.getDay();
            },
            E: function(e) {
                return e.getDay() || 7;
            },
            W: function(e) {
                return u(e);
            },
            WW: function(e) {
                return a(u(e), 2);
            },
            YY: function(e) {
                return a(e.getFullYear(), 4).substr(2);
            },
            YYYY: function(e) {
                return a(e.getFullYear(), 4);
            },
            GG: function(e) {
                return String(s(e)).substr(2);
            },
            GGGG: function(e) {
                return s(e);
            },
            H: function(e) {
                return e.getHours();
            },
            HH: function(e) {
                return a(e.getHours(), 2);
            },
            h: function(e) {
                var t = e.getHours();
                return 0 === t ? 12 : t > 12 ? t % 12 : t;
            },
            hh: function(e) {
                return a(p.h(e), 2);
            },
            m: function(e) {
                return e.getMinutes();
            },
            mm: function(e) {
                return a(e.getMinutes(), 2);
            },
            s: function(e) {
                return e.getSeconds();
            },
            ss: function(e) {
                return a(e.getSeconds(), 2);
            },
            S: function(e) {
                return Math.floor(e.getMilliseconds() / 100);
            },
            SS: function(e) {
                return a(Math.floor(e.getMilliseconds() / 10), 2);
            },
            SSS: function(e) {
                return a(e.getMilliseconds(), 3);
            },
            Z: function(e) {
                return i(e.getTimezoneOffset(), ":");
            },
            ZZ: function(e) {
                return i(e.getTimezoneOffset());
            },
            X: function(e) {
                return Math.floor(e.getTime() / 1e3);
            },
            x: function(e) {
                return e.getTime();
            }
        };
        e.exports = function(e, t, n) {
            var o = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ", i = (n || {}).locale, a = d.format.formatters, c = d.format.formattingTokensRegExp;
            i && i.format && i.format.formatters && (a = i.format.formatters, i.format.formattingTokensRegExp && (c = i.format.formattingTokensRegExp));
            var u = f(e);
            return l(u) ? r(o, a, c)(u) : "Invalid Date";
        };
    },
    "72b7": function(e, t, n) {
        var r = n("ec1f"), o = 6e4;
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, n * o);
        };
    },
    7338: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return r(e).getMonth();
        };
    },
    "73b1": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("f8c8"), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("761b")), i = {
            namespaced: !0,
            state: function() {
                return {
                    message: null,
                    subject: null,
                    activeSubjectSubItem: null,
                    couponListType: "",
                    couponList: [],
                    activeCoupon: null,
                    preferentialPrice: -1,
                    fetchingPrice: !1,
                    subjectSubItems: []
                };
            },
            getters: {
                preferentialPrice: function(e) {
                    return e.preferentialPrice;
                },
                fetchingPriceState: function(e) {
                    return e.fetchingPrice;
                },
                messageChargePrice: function(e, t, n) {
                    return function() {
                        if (!e.message) return 0;
                        var t = n.user.balance, r = e.preferentialPrice >= 0 ? e.preferentialPrice : e.message.price;
                        return t >= r ? 0 : r - t;
                    };
                },
                subjectChargePrice: function(e, t, n) {
                    return function() {
                        if (!e.subject) return 0;
                        if (!e.subject.subjSubscribeItems) return 0;
                        if (!e.activeSubjectSubItem) return 0;
                        var t = n.user.balance, r = e.preferentialPrice >= 0 ? e.preferentialPrice : e.activeSubjectSubItem.discountPrice;
                        return t >= r ? 0 : r - t;
                    };
                },
                minSubscribeItemPrice: function(e) {
                    return e.subject && e.subject.subjSubscribeItems ? e.subject.subjSubscribeItems.reduce(function(e, t) {
                        return Math.min(e, t.discountPrice);
                    }, 1 / 0) : 0;
                },
                maxSubscribeItemDiscount: function(e) {
                    return e.subject && e.subject.subjSubscribeItems ? e.subject.subjSubscribeItems.reduce(function(e, t) {
                        return Math.max(e, t.originPrice - t.discountPrice);
                    }, -1 / 0) : 0;
                }
            },
            actions: {
                purchaseMessage: function(e) {
                    var t = e.state, n = e.commit, i = e.getters, a = e.dispatch;
                    if (e.rootState, t.message) {
                        var c = String(t.message.id), u = String(t.subject.id), s = t.activeCoupon ? t.activeCoupon.id : "";
                        i.messageChargePrice() > 0 ? a("topup/createOrder", {
                            productType: 0,
                            messageId: c
                        }, {
                            root: !0
                        }) : (0, r.purchaseMessage)({
                            MessageId: c,
                            SubjectId: u,
                            CouponId: s,
                            PayClientType: 1
                        }).then(function(e) {
                            wx.showToast({
                                title: "购买成功",
                                icon: "success",
                                duration: 1e3
                            }), (0, o.default)("unlock_paid_click"), a("entities/fetchArticle", {
                                articleId: c,
                                subjectId: u
                            }, {
                                root: !0
                            }), a("overlay/clearOverlayStack", null, {
                                root: !0
                            }), n("user/upDateBalance", e.result.balance, {
                                root: !0
                            }), n("unSelectMessage");
                        }).catch(function(e) {
                            if (console.error(e), 40003 === e.errcode) return wx.showToast({
                                title: "绑定手机",
                                icon: "none",
                                duration: 1e3
                            }), void a("overlay/pushOverlayStack", "verify mobile", {
                                root: !0
                            });
                            40001 !== e.errcode ? (wx.showToast({
                                title: "未知错误",
                                icon: "none",
                                duration: 1e3
                            }), a("overlay/clearOverlayStack", null, {
                                root: !0
                            })) : wx.showToast({
                                title: "余额不足",
                                icon: "none",
                                duration: 1e3
                            });
                        });
                    }
                },
                purchaseSubject: function(e) {
                    var t = e.state, n = e.commit, o = e.dispatch, i = e.getters;
                    t.subject && t.activeSubjectSubItem && (i.subjectChargePrice() > 0 ? o("topup/createOrder", {
                        productType: 1,
                        subscribeItemId: t.activeSubjectSubItem.id
                    }, {
                        root: !0
                    }) : (0, r.purchaseSubject)({
                        PayClientType: 1,
                        ItemId: t.activeSubjectSubItem.id,
                        Days: t.activeSubjectSubItem.days,
                        Amount: Math.floor(100 * t.activeSubjectSubItem.discountPrice),
                        SubjectId: t.subject.id,
                        CouponId: t.activeCoupon ? t.activeCoupon.id : ""
                    }).then(function(e) {
                        if (t.message) {
                            var r = t.message.id, i = t.subject.id;
                            o("entities/fetchArticle", {
                                articleId: r,
                                subjectId: i
                            }, {
                                root: !0
                            });
                        }
                        o("overlay/pushOverlayStack", "buy subject succeeded", {
                            root: !0
                        }), n("user/upDateBalance", e.balance, {
                            root: !0
                        });
                    }).catch(function(e) {
                        if (console.error(e), 40003 === e.errcode) return wx.showToast({
                            title: "绑定手机",
                            icon: "none",
                            duration: 1e3
                        }), void o("overlay/pushOverlayStack", "verify mobile", {
                            root: !0
                        });
                        40001 !== e.errcode ? wx.showToast({
                            title: "未知错误",
                            icon: "none",
                            duration: 1e3
                        }) : wx.showToast({
                            title: "余额不足",
                            icon: "none",
                            duration: 1e3
                        });
                    }));
                },
                chooseSubscribeItem: function(e) {
                    (0, e.dispatch)("overlay/pushOverlayStack", "choose subject subscribe item", {
                        root: !0
                    });
                },
                openPaySubjectOverlay: function(e) {
                    (0, e.dispatch)("overlay/pushOverlayStack", "pay subject", {
                        root: !0
                    });
                },
                openPayMessageOverlay: function(e) {
                    (0, e.dispatch)("overlay/pushOverlayStack", "pay message", {
                        root: !0
                    });
                },
                fetchCouponList: function(e, t) {
                    var n = e.commit, o = e.state;
                    if ("msg" === t) {
                        if (!o.message) return void n("clearCouponList");
                        var i = o.message.id;
                        n("updateCouponListType", t), (0, r.getMessageCoupons)(i).then(function(e) {
                            var t = e.items;
                            t ? n("updateCouponList", t) : n("clearCouponList");
                        }).catch(function() {
                            n("clearCouponList");
                        });
                    } else if ("subject" === t) {
                        if (!o.subject || !o.activeSubjectSubItem) return void n("clearCouponList");
                        var a = o.subject.id, c = o.activeSubjectSubItem.id;
                        n("updateCouponListType", t), (0, r.getSubjectCoupons)(a, c).then(function(e) {
                            var t = e.items;
                            t ? n("updateCouponList", t) : n("clearCouponList");
                        }).catch(function() {
                            n("clearCouponList");
                        });
                    }
                },
                fetchPreferentialPrice: function(e, t) {
                    var n = e.commit, o = e.state;
                    if ("msg" === t) {
                        if (!o.message) return n("clearActiveCoupon"), void n("updatePreferentialPrice", -1);
                        if ("subject" === o.couponListType) return;
                        var i = o.message.id, a = o.activeCoupon ? o.activeCoupon.id : "";
                        n("updateFetchingPrice", !0), (0, r.fetchMessagePreferentialPrice)(i, a).then(function(e) {
                            var t = e.finalPrice;
                            e.originalPrice, void 0 != t && n("updatePreferentialPrice", t), n("updateFetchingPrice", !1);
                        }).catch(function() {
                            n("updatePreferentialPrice", -1), n("updateFetchingPrice", !1);
                        });
                    } else if ("subject" === t) {
                        if (!o.subject || !o.activeSubjectSubItem) return n("clearActiveCoupon"), void n("updatePreferentialPrice", -1);
                        if ("msg" === o.couponListType) return;
                        var c = o.subject.id, u = o.activeSubjectSubItem.id, s = o.activeCoupon ? o.activeCoupon.id : "";
                        n("updateFetchingPrice", !0), (0, r.fetchSubjectPreferentialPrice)({
                            subjectId: c,
                            itemId: u,
                            couponId: s
                        }).then(function(e) {
                            var t = e.finalPrice;
                            e.originalPrice, void 0 != t && n("updatePreferentialPrice", t), n("updateFetchingPrice", !1);
                        }).catch(function() {
                            n("updatePreferentialPrice", -1), n("updateFetchingPrice", !1);
                        });
                    }
                },
                fetchSubjectSubscribeItem: function(e) {
                    var t = e.commit, n = e.state;
                    return n.subject ? (0, r.getSubjectSubscribeItem)({
                        subjectId: n.subject.id
                    }).then(function(e) {
                        var n = e.subject;
                        return n && n.subjSubscribeItems ? (t("updateSubjectSubItems", n.subjSubscribeItems), 
                        t("selectSubjectSubscribeItem", n.subjSubscribeItems[0])) : t("updateSubjectSubItems", []), 
                        n && n.subjSubscribeItems;
                    }).catch(function() {
                        t("updateSubjectSubItems", []);
                    }) : Promise.resolve(null);
                }
            },
            mutations: {
                selectMessage: function(e, t) {
                    e.message = t;
                },
                selectSubject: function(e, t) {
                    e.subject = t, t && t.subjSubscribeItems && t.subjSubscribeItems.length ? e.activeSubjectSubItem = t.subjSubscribeItems[0] : e.activeSubjectSubItem = null, 
                    this.dispatch("subscribe/fetchSubjectSubscribeItem");
                },
                unSelectMessage: function(e) {
                    e.message = null;
                },
                unSelectSubject: function(e) {
                    e.subject = null, e.activeSubjectSubItem = null;
                },
                selectSubjectSubscribeItem: function(e, t) {
                    e.activeSubjectSubItem = t;
                },
                updatePreferentialPrice: function(e, t) {
                    e.preferentialPrice = Number(t);
                },
                updateFetchingPrice: function(e, t) {
                    e.fetchingPrice = t;
                },
                updateCouponListType: function(e, t) {
                    e.couponListType = t;
                },
                updateCouponList: function(e, t) {
                    e.couponList = t;
                },
                clearCouponList: function(e) {
                    e.couponList = [];
                },
                updateActiveCoupon: function(e, t) {
                    e.activeCoupon = t;
                },
                clearActiveCoupon: function(e) {
                    e.activeCoupon = null;
                },
                updateSubjectSubItems: function(e, t) {
                    e.subjectSubItems = t;
                },
                clearCoupon: function(e) {
                    e.preferentialPrice = -1, e.couponListType = "", e.couponList = [], e.activeCoupon = null;
                }
            }
        };
        t.default = i;
    },
    7443: function(e, t, n) {
        var r = n("9744");
        e.exports = function() {
            return r(new Date());
        };
    },
    7494: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0, o = r(e), i = o.getDay(), a = 6 + (i < n ? -7 : 0) - (i - n);
            return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
        };
    },
    7606: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return 2 === r(e).getDay();
        };
    },
    "761b": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    i(e, t, n[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a(e) {
            return c.Base64.encode((0, u.default)("".concat(f.deviceId).concat(e, "+ ").concat(Date.now() + (f.timeOffset || 0))));
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            wx.reportAnalytics(e, t), f.evt({
                eventName: "MiniControlClickedEvent",
                topicName: "MiniControlClickedEvent",
                additional: o({
                    actionName: e
                }, t)
            });
        }, t.Taotie = void 0;
        var c = n("27ae"), u = r(n("6821")), s = r(n("b279")), f = n("1753").BxTracker.generateTrackerInstance(s.default);
        f.customSendPV = function(e) {
            var t = getCurrentPages().slice(), n = t.pop(), r = t.pop();
            f.pv("", {
                eventName: "MiniPageViewEvent",
                topicName: "MiniPageViewEvent"
            }, {
                pageInfo: {
                    route: n.route,
                    previousRoute: r ? r.route : "",
                    previousPageUrn: "",
                    previousTrackingId: r ? a(r.route) : "",
                    pageUrn: "",
                    trackingId: a(n.route)
                },
                additional: {
                    duration: "" + Math.round(e)
                }
            });
        };
        var l = f;
        t.Taotie = l;
    },
    7905: function(e, t, n) {
        function r(e) {
            var t = o(e);
            return n(t);
        }
        function o(e) {
            var t = i[e];
            if (!(t + 1)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND", n;
            }
            return t;
        }
        var i = {
            "./address": "142d",
            "./address.js": "142d",
            "./bargainInfo": "6473",
            "./bargainInfo.js": "6473",
            "./bindAccount": "c5d1",
            "./bindAccount.js": "c5d1",
            "./comments": "9898",
            "./comments.js": "9898",
            "./device": "4f2c",
            "./device.js": "4f2c",
            "./entities": "9790",
            "./entities.js": "9790",
            "./overlay": "284b",
            "./overlay.js": "284b",
            "./stocks": "d9c6",
            "./stocks.js": "d9c6",
            "./subject": "ff9e",
            "./subject.js": "ff9e",
            "./subjectTimeline": "57f4",
            "./subjectTimeline.js": "57f4",
            "./subscribe": "73b1",
            "./subscribe.js": "73b1",
            "./topup": "6fc3",
            "./topup.js": "6fc3",
            "./user": "0f9a",
            "./user.js": "0f9a",
            "./verifyMobile": "e9c8",
            "./verifyMobile.js": "e9c8"
        };
        r.keys = function() {
            return Object.keys(i);
        }, r.resolve = o, e.exports = r, r.id = "7905";
    },
    "7a83": function(e, t, n) {
        var r = n("8946");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 7 * n);
        };
    },
    "7eea": function(e, t, n) {
        var r = n("a735");
        e.exports = function(e) {
            if (r(e)) return !isNaN(e);
            throw new TypeError(toString.call(e) + " is not an instance of Date");
        };
    },
    "7fd8": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, o, i = r(e).getTime();
            return t.forEach(function(e, t) {
                var a = r(e), c = Math.abs(i - a.getTime());
                (void 0 === n || c < o) && (n = t, o = c);
            }), n;
        };
    },
    "804c": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = r(n("66fd")), i = {
            projectId: "8169fa9a6b8255f9",
            appId: "wx639c6cca11806f2d",
            version: r(n("ccf3")).default,
            debug: !1,
            forceLogin: !1,
            followShare: !0,
            usePlugin: !1,
            getLocation: {
                autoGet: !1,
                type: "wgs84"
            },
            keepAlive: 3e5,
            vue: o.default,
            taro: !1,
            cml: !1
        };
        t.default = i;
    },
    8148: function(e, t) {
        e.exports = function() {
            var e = new Date(), t = e.getFullYear(), n = e.getMonth(), r = e.getDate(), o = new Date(0);
            return o.setFullYear(t, n, r + 1), o.setHours(0, 0, 0, 0), o;
        };
    },
    8189: function(e) {
        e.exports = {
            _from: "@dcloudio/uni-stat@^2.0.0-23720191024001",
            _id: "@dcloudio/uni-stat@2.0.0-23720191024001",
            _inBundle: !1,
            _integrity: "sha1-GCcoFERqm8YFO8kmZuxwZKF2dYg=",
            _location: "/@dcloudio/uni-stat",
            _phantomChildren: {},
            _requested: {
                type: "range",
                registry: !0,
                raw: "@dcloudio/uni-stat@^2.0.0-23720191024001",
                name: "@dcloudio/uni-stat",
                escapedName: "@dcloudio%2funi-stat",
                scope: "@dcloudio",
                rawSpec: "^2.0.0-23720191024001",
                saveSpec: null,
                fetchSpec: "^2.0.0-23720191024001"
            },
            _requiredBy: [ "/@dcloudio/vue-cli-plugin-uni" ],
            _resolved: "https://maven.wallstcn.com/repository/npm-all/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",
            _shasum: "18272814446a9bc6053bc92666ec7064a1767588",
            _spec: "@dcloudio/uni-stat@^2.0.0-23720191024001",
            _where: "C:\\Users\\admin\\Desktop\\minip\\mp\\node_modules\\@dcloudio\\vue-cli-plugin-uni",
            author: "",
            bugs: {
                url: "https://github.com/dcloudio/uni-app/issues"
            },
            bundleDependencies: !1,
            deprecated: !1,
            description: "",
            devDependencies: {
                "@babel/core": "^7.5.5",
                "@babel/preset-env": "^7.5.5",
                eslint: "^6.1.0",
                rollup: "^1.19.3",
                "rollup-plugin-babel": "^4.3.3",
                "rollup-plugin-clear": "^2.0.7",
                "rollup-plugin-commonjs": "^10.0.2",
                "rollup-plugin-copy": "^3.1.0",
                "rollup-plugin-eslint": "^7.0.0",
                "rollup-plugin-json": "^4.0.0",
                "rollup-plugin-node-resolve": "^5.2.0",
                "rollup-plugin-replace": "^2.2.0",
                "rollup-plugin-uglify": "^6.0.2"
            },
            files: [ "dist", "package.json", "LICENSE" ],
            gitHead: "a725c04ef762e5df78a9a69d140c2666e0de05fc",
            homepage: "https://github.com/dcloudio/uni-app#readme",
            license: "Apache-2.0",
            main: "dist/index.js",
            name: "@dcloudio/uni-stat",
            repository: {
                type: "git",
                url: "git+https://github.com/dcloudio/uni-app.git",
                directory: "packages/uni-stat"
            },
            scripts: {
                build: "NODE_ENV=production rollup -c rollup.config.js",
                dev: "NODE_ENV=development rollup -w -c rollup.config.js"
            },
            version: "2.0.0-23720191024001"
        };
    },
    "81fc": function(e, t, n) {
        var r = n("c8d5"), o = n("b4c7"), i = n("4497"), a = 6048e5;
        e.exports = function(e) {
            var t = r(e), n = o(t).getTime() - i(t).getTime();
            return Math.round(n / a) + 1;
        };
    },
    8219: function(e, t, n) {
        function r(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    o(e, t, n[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("4360")), a = n("ed08"), c = n("f8c8"), u = {
            data: function() {
                return {
                    toLike: null
                };
            },
            onShow: function() {
                this.toLike && (0, a.ifLogin)() && (this.toggleLikeMessage(this.toLike), this.toLike = null);
            },
            onUnlod: function() {
                this.toLike = null;
            },
            methods: {
                toggleLikeMessage: function(e) {
                    if (!(0, a.ifLogin)()) return this.toLike = e, void (0, a.goToLogin)();
                    var t = e.likeCount;
                    e.liked ? (this.$emit("unlike"), (0, c.unlikeArticle)(e.id).catch(function() {}), 
                    t--) : (this.$emit("like"), (0, c.likeArticle)(e.id, e.fromSubject.id).catch(function() {}), 
                    t++), i.default.commit("entities/UPDATE_ARTICLE_ENTITY", {
                        id: e.id,
                        entity: r({}, e, {
                            liked: !e.liked,
                            likeCount: t
                        })
                    });
                }
            }
        };
        t.default = u;
    },
    "82dc": function(e, t, n) {
        var r = n("b4c7"), o = 6e4, i = 6048e5;
        e.exports = function(e, t) {
            var n = r(e), a = r(t), c = n.getTime() - n.getTimezoneOffset() * o, u = a.getTime() - a.getTimezoneOffset() * o;
            return Math.round((c - u) / i);
        };
    },
    8301: function(e, t, n) {
        var r = n("17cd");
        e.exports = function(e, t) {
            var n = r(e, t) / 3;
            return n > 0 ? Math.floor(n) : Math.ceil(n);
        };
    },
    "83f0": function(e, t, n) {
        var r = n("af1b");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n);
        };
    },
    "84b9": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e).getDay();
            return 0 === t && (t = 7), t;
        };
    },
    "861d": function(e, t, n) {
        var r = n("8964"), o = n("b4c7");
        e.exports = function(e) {
            var t = r(e), n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var i = o(n);
            return i.setMilliseconds(i.getMilliseconds() - 1), i;
        };
    },
    8902: function(e, t, n) {
        var r = n("fcb3");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n);
        };
    },
    8946: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = Number(t);
            return n.setDate(n.getDate() + o), n;
        };
    },
    8964: function(e, t, n) {
        var r = n("c8d5"), o = n("b4c7");
        e.exports = function(e) {
            var t = r(e), n = t.getFullYear(), i = new Date(0);
            i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
            var a = o(i), c = new Date(0);
            c.setFullYear(n, 0, 4), c.setHours(0, 0, 0, 0);
            var u = o(c);
            return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1;
        };
    },
    "8aed4": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = Number(t);
            return n.setMinutes(o), n;
        };
    },
    "8c14": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.nextInterval = t.diffSec = t.formatDiff = t.toDate = t.toInt = void 0;
        var r = [ 60, 60, 24, 7, 365 / 7 / 12, 12 ], o = function(e) {
            return parseInt(e);
        };
        t.toInt = o;
        var i = function(e) {
            return e instanceof Date ? e : !isNaN(e) || /^\d+$/.test(e) ? new Date(o(e)) : (e = (e || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), 
            new Date(e));
        };
        t.toDate = i;
        t.formatDiff = function(e, t) {
            for (var n = 0, i = e < 0 ? 1 : 0, a = e = Math.abs(e); e >= r[n] && n < r.length; n++) e /= r[n];
            return e = o(e), n *= 2, e > (0 === n ? 9 : 1) && (n += 1), t(e, n, a)[i].replace("%s", e);
        };
        t.diffSec = function(e, t) {
            return ((t = t ? i(t) : new Date()) - i(e)) / 1e3;
        };
        t.nextInterval = function(e) {
            for (var t = 1, n = 0, o = Math.abs(e); e >= r[n] && n < r.length; n++) e /= r[n], 
            t *= r[n];
            return o %= t, o = o ? t - o : t, Math.ceil(o);
        };
    },
    "8c81": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return r(e).getMilliseconds();
        };
    },
    "8d81": function(e, t, n) {
        var r;
        !function(o) {
            function i(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
            }
            function a(e, t) {
                return e << t | e >>> 32 - t;
            }
            function c(e, t, n, r, o, c) {
                return i(a(i(i(t, e), i(r, c)), o), n);
            }
            function u(e, t, n, r, o, i, a) {
                return c(t & n | ~t & r, e, t, o, i, a);
            }
            function s(e, t, n, r, o, i, a) {
                return c(t & r | n & ~r, e, t, o, i, a);
            }
            function f(e, t, n, r, o, i, a) {
                return c(t ^ n ^ r, e, t, o, i, a);
            }
            function l(e, t, n, r, o, i, a) {
                return c(n ^ (t | ~r), e, t, o, i, a);
            }
            function d(e, t) {
                var n, r, o, a, c;
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                var d = 1732584193, p = -271733879, h = -1732584194, g = 271733878;
                for (n = 0; n < e.length; n += 16) r = d, o = p, a = h, c = g, p = l(p = l(p = l(p = l(p = f(p = f(p = f(p = f(p = s(p = s(p = s(p = s(p = u(p = u(p = u(p = u(p, h = u(h, g = u(g, d = u(d, p, h, g, e[n], 7, -680876936), p, h, e[n + 1], 12, -389564586), d, p, e[n + 2], 17, 606105819), g, d, e[n + 3], 22, -1044525330), h = u(h, g = u(g, d = u(d, p, h, g, e[n + 4], 7, -176418897), p, h, e[n + 5], 12, 1200080426), d, p, e[n + 6], 17, -1473231341), g, d, e[n + 7], 22, -45705983), h = u(h, g = u(g, d = u(d, p, h, g, e[n + 8], 7, 1770035416), p, h, e[n + 9], 12, -1958414417), d, p, e[n + 10], 17, -42063), g, d, e[n + 11], 22, -1990404162), h = u(h, g = u(g, d = u(d, p, h, g, e[n + 12], 7, 1804603682), p, h, e[n + 13], 12, -40341101), d, p, e[n + 14], 17, -1502002290), g, d, e[n + 15], 22, 1236535329), h = s(h, g = s(g, d = s(d, p, h, g, e[n + 1], 5, -165796510), p, h, e[n + 6], 9, -1069501632), d, p, e[n + 11], 14, 643717713), g, d, e[n], 20, -373897302), h = s(h, g = s(g, d = s(d, p, h, g, e[n + 5], 5, -701558691), p, h, e[n + 10], 9, 38016083), d, p, e[n + 15], 14, -660478335), g, d, e[n + 4], 20, -405537848), h = s(h, g = s(g, d = s(d, p, h, g, e[n + 9], 5, 568446438), p, h, e[n + 14], 9, -1019803690), d, p, e[n + 3], 14, -187363961), g, d, e[n + 8], 20, 1163531501), h = s(h, g = s(g, d = s(d, p, h, g, e[n + 13], 5, -1444681467), p, h, e[n + 2], 9, -51403784), d, p, e[n + 7], 14, 1735328473), g, d, e[n + 12], 20, -1926607734), h = f(h, g = f(g, d = f(d, p, h, g, e[n + 5], 4, -378558), p, h, e[n + 8], 11, -2022574463), d, p, e[n + 11], 16, 1839030562), g, d, e[n + 14], 23, -35309556), h = f(h, g = f(g, d = f(d, p, h, g, e[n + 1], 4, -1530992060), p, h, e[n + 4], 11, 1272893353), d, p, e[n + 7], 16, -155497632), g, d, e[n + 10], 23, -1094730640), h = f(h, g = f(g, d = f(d, p, h, g, e[n + 13], 4, 681279174), p, h, e[n], 11, -358537222), d, p, e[n + 3], 16, -722521979), g, d, e[n + 6], 23, 76029189), h = f(h, g = f(g, d = f(d, p, h, g, e[n + 9], 4, -640364487), p, h, e[n + 12], 11, -421815835), d, p, e[n + 15], 16, 530742520), g, d, e[n + 2], 23, -995338651), h = l(h, g = l(g, d = l(d, p, h, g, e[n], 6, -198630844), p, h, e[n + 7], 10, 1126891415), d, p, e[n + 14], 15, -1416354905), g, d, e[n + 5], 21, -57434055), h = l(h, g = l(g, d = l(d, p, h, g, e[n + 12], 6, 1700485571), p, h, e[n + 3], 10, -1894986606), d, p, e[n + 10], 15, -1051523), g, d, e[n + 1], 21, -2054922799), h = l(h, g = l(g, d = l(d, p, h, g, e[n + 8], 6, 1873313359), p, h, e[n + 15], 10, -30611744), d, p, e[n + 6], 15, -1560198380), g, d, e[n + 13], 21, 1309151649), h = l(h, g = l(g, d = l(d, p, h, g, e[n + 4], 6, -145523070), p, h, e[n + 11], 10, -1120210379), d, p, e[n + 2], 15, 718787259), g, d, e[n + 9], 21, -343485551), 
                d = i(d, r), p = i(p, o), h = i(h, a), g = i(g, c);
                return [ d, p, h, g ];
            }
            function p(e) {
                var t, n = "", r = 32 * e.length;
                for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n;
            }
            function h(e) {
                var t, n = [];
                for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n;
            }
            function g(e) {
                return p(d(h(e), 8 * e.length));
            }
            function v(e, t) {
                var n, r, o = h(e), i = [], a = [];
                for (i[15] = a[15] = void 0, o.length > 16 && (o = d(o, 8 * e.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ o[n], 
                a[n] = 1549556828 ^ o[n];
                return r = d(i.concat(h(t)), 512 + 8 * t.length), p(d(a.concat(r), 640));
            }
            function m(e) {
                var t, n, r = "0123456789abcdef", o = "";
                for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), o += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                return o;
            }
            function y(e) {
                return unescape(encodeURIComponent(e));
            }
            function b(e) {
                return g(y(e));
            }
            function _(e) {
                return m(b(e));
            }
            function w(e, t) {
                return v(y(e), y(t));
            }
            function S(e, t) {
                return m(w(e, t));
            }
            function x(e, t, n) {
                return t ? n ? w(t, e) : S(t, e) : n ? b(e) : _(e);
            }
            void 0 === (r = function() {
                return x;
            }.call(t, n, t, e)) || (e.exports = r);
        }();
    },
    "8df3": function(e, t, n) {
        function r(e) {
            for (var t = {}, n = e.split(","), r = 0; r < n.length; r += 1) t[n[r]] = !0;
            return t;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, i = /^<\/([-A-Za-z0-9_]+)[^>]*>/, a = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g, c = r("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), u = r("address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), s = r("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), f = r("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), l = r("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
        t.default = function(e, t) {
            function n(e, n) {
                var r;
                if (n) for (n = n.toLowerCase(), r = g.length - 1; r >= 0 && g[r] !== n; r -= 1) ; else r = 0;
                if (r >= 0) {
                    for (var o = g.length - 1; o >= r; o -= 1) t.end && t.end(g[o]);
                    g.length = r;
                }
            }
            var r, d, p, h = e, g = [];
            for (g.last = function() {
                return g[g.length - 1];
            }; e; ) {
                if (d = !0, 0 === e.indexOf("</") ? (p = e.match(i)) && (e = e.substring(p[0].length), 
                p[0].replace(i, n), d = !1) : 0 === e.indexOf("<") && (p = e.match(o)) && (e = e.substring(p[0].length), 
                p[0].replace(o, function(e, r, o, i) {
                    if (r = r.toLowerCase(), u[r]) for (;g.last() && s[g.last()]; ) n("", g.last());
                    if (f[r] && g.last() === r && n("", r), (i = c[r] || !!i) || g.push(r), t.start) {
                        var d = [];
                        o.replace(a, function(e, t) {
                            var n = arguments[2] || arguments[3] || arguments[4] || (l[t] ? t : "");
                            d.push({
                                name: t,
                                value: n,
                                escaped: n.replace(/(^|[^\\])"/g, '$1\\"')
                            });
                        }), t.start && t.start(r, d, i);
                    }
                }), d = !1), d) {
                    r = e.indexOf("<");
                    for (var v = ""; 0 === r; ) v += "<", r = (e = e.substring(1)).indexOf("<");
                    v += r < 0 ? e : e.substring(0, r), e = r < 0 ? "" : e.substring(r), t.chars && t.chars(v);
                }
                if (e === h) throw new Error("Parse Error: ".concat(e));
                h = e;
            }
            n();
        };
    },
    "902e": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return r(e).getTime();
        };
    },
    "90e5": function(e, t) {
        var n = [ "M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x" ];
        e.exports = function(e) {
            var t = [];
            for (var r in e) e.hasOwnProperty(r) && t.push(r);
            var o = n.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + o.join("|") + "|.)", "g");
        };
    },
    9113: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = Number(t);
            return n.setSeconds(o), n;
        };
    },
    "921b": function(e, t, n) {
        (function(e) {
            function t(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? r(e) : t;
            }
            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            function i(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && a(e, t);
            }
            function a(e, t) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function s(e, t, n) {
                return t && u(e.prototype, t), n && u(e, n), e;
            }
            function f(e) {
                return (f = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : _typeof(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
                })(e);
            }
            function l() {
                var t = "";
                if ("n" === y()) {
                    try {
                        t = plus.runtime.getDCloudId();
                    } catch (e) {
                        t = "";
                    }
                    return t;
                }
                try {
                    t = e.getStorageSync(p);
                } catch (e) {
                    t = h;
                }
                if (!t) {
                    t = Date.now() + "" + Math.floor(1e7 * Math.random());
                    try {
                        e.setStorageSync(p, t);
                    } catch (t) {
                        e.setStorageSync(p, h);
                    }
                }
                return t;
            }
            var d = n("8189").version, p = "__DC_STAT_UUID", h = "__DC_UUID_VALUE", g = function(e) {
                var t = Object.keys(e).sort(), n = {}, r = "";
                for (var o in t) n[t[o]] = e[t[o]], r += t[o] + "=" + e[t[o]] + "&";
                return {
                    sign: "",
                    options: r.substr(0, r.length - 1)
                };
            }, v = function(e) {
                var t = "";
                for (var n in e) t += n + "=" + e[n] + "&";
                return t.substr(0, t.length - 1);
            }, m = function() {
                return parseInt(new Date().getTime() / 1e3);
            }, y = function() {
                return {
                    "app-plus": "n",
                    h5: "h5",
                    "mp-weixin": "wx",
                    "mp-alipay": "ali",
                    "mp-baidu": "bd",
                    "mp-toutiao": "tt",
                    "mp-qq": "qq"
                }["mp-weixin"];
            }, b = function() {
                var t = "";
                return "wx" !== y() && "qq" !== y() || e.canIUse("getAccountInfoSync") && (t = e.getAccountInfoSync().miniProgram.appId || ""), 
                t;
            }, _ = function() {
                return "n" === y() ? plus.runtime.version : "";
            }, w = function() {
                var e = "";
                return "n" === y() && (e = plus.runtime.channel), e;
            }, S = function(t) {
                var n = y(), r = "";
                return t || ("wx" === n && (r = e.getLaunchOptionsSync().scene), r);
            }, x = "First__Visit__Time", O = "Last__Visit__Time", k = function() {
                var t = e.getStorageSync(x), n = 0;
                return t ? n = t : (n = m(), e.setStorageSync(x, n), e.removeStorageSync(O)), n;
            }, T = function() {
                var t = 0;
                return t = e.getStorageSync(O) || "", e.setStorageSync(O, m()), t;
            }, j = "__page__residence__time", P = 0, I = 0, A = function() {
                return P = m(), "n" === y() && e.setStorageSync(j, m()), P;
            }, C = function() {
                return I = m(), "n" === y() && (P = e.getStorageSync(j)), I - P;
            }, D = "Total__Visit__Count", E = function() {
                var t = e.getStorageSync(D), n = 1;
                return t && (n = t, n++), e.setStorageSync(D, n), n;
            }, M = function(e) {
                var t = {};
                for (var n in e) t[n] = encodeURIComponent(e[n]);
                return t;
            }, $ = 0, L = 0, N = function() {
                var e = new Date().getTime();
                return $ = e, L = 0, e;
            }, U = function() {
                var e = new Date().getTime();
                return L = e, e;
            }, R = function(e) {
                var t = 0;
                return 0 !== $ && (t = L - $), t = parseInt(t / 1e3), t = t < 1 ? 1 : t, "app" === e ? {
                    residenceTime: t,
                    overtime: t > 300
                } : "page" === e ? {
                    residenceTime: t,
                    overtime: t > 1800
                } : {
                    residenceTime: t
                };
            }, B = function() {
                var e = getCurrentPages(), t = e[e.length - 1].$vm;
                return "bd" === y() ? t.$mp && t.$mp.page.is : t.$scope && t.$scope.route || t.$mp && t.$mp.page.route;
            }, F = function(e) {
                var t = getCurrentPages(), n = t[t.length - 1].$vm, r = e._query, o = r && "{}" !== JSON.stringify(r) ? "?" + JSON.stringify(r) : "";
                return e._query = "", "bd" === y() ? n.$mp && n.$mp.page.is + o : n.$scope && n.$scope.route + o || n.$mp && n.$mp.page.route + o;
            }, q = function(e) {
                return !!("page" === e.mpType || e.$mp && "page" === e.$mp.mpType || "page" === e.$options.mpType);
            }, H = function(e, t) {
                return e ? "string" != typeof e ? (console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"), 
                !0) : e.length > 255 ? (console.error("uni.report [eventName] 参数长度不能大于 255"), !0) : "string" != typeof t && "object" !== f(t) ? (console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"), 
                !0) : "string" == typeof t && t.length > 255 ? (console.error("uni.report [options] 参数长度不能大于 255"), 
                !0) : "title" === e && "string" != typeof t ? (console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"), 
                !0) : void 0 : (console.error("uni.report 缺少 [eventName] 参数"), !0);
            }, V = n("5768").default, Y = n("ecd6").default || n("ecd6"), W = e.getSystemInfoSync(), G = function() {
                function t() {
                    c(this, t), this.self = "", this._retry = 0, this._platform = "", this._query = {}, 
                    this._navigationBarTitle = {
                        config: "",
                        page: "",
                        report: "",
                        lt: ""
                    }, this._operatingTime = 0, this._reportingRequestData = {
                        1: [],
                        11: []
                    }, this.__prevent_triggering = !1, this.__licationHide = !1, this.__licationShow = !1, 
                    this._lastPageRoute = "", this.statData = {
                        uuid: l(),
                        ut: y(),
                        mpn: b(),
                        ak: Y.appid,
                        usv: d,
                        v: _(),
                        ch: w(),
                        cn: "",
                        pn: "",
                        ct: "",
                        t: m(),
                        tt: "",
                        p: "android" === W.platform ? "a" : "i",
                        brand: W.brand || "",
                        md: W.model,
                        sv: W.system.replace(/(Android|iOS)\s/, ""),
                        mpsdk: W.SDKVersion || "",
                        mpv: W.version || "",
                        lang: W.language,
                        pr: W.pixelRatio,
                        ww: W.windowWidth,
                        wh: W.windowHeight,
                        sw: W.screenWidth,
                        sh: W.screenHeight
                    };
                }
                return s(t, [ {
                    key: "_applicationShow",
                    value: function() {
                        if (this.__licationHide) {
                            if (U(), R("app").overtime) {
                                var e = {
                                    path: this._lastPageRoute,
                                    scene: this.statData.sc
                                };
                                this._sendReportRequest(e);
                            }
                            this.__licationHide = !1;
                        }
                    }
                }, {
                    key: "_applicationHide",
                    value: function(e, t) {
                        this.__licationHide = !0, U();
                        var n = R();
                        N();
                        var r = F(this);
                        this._sendHideRequest({
                            urlref: r,
                            urlref_ts: n.residenceTime
                        }, t);
                    }
                }, {
                    key: "_pageShow",
                    value: function() {
                        var e = F(this), t = B();
                        if (this._navigationBarTitle.config = V && V.pages[t] && V.pages[t].titleNView && V.pages[t].titleNView.titleText || V && V.pages[t] && V.pages[t].navigationBarTitleText || "", 
                        this.__licationShow) return N(), this.__licationShow = !1, void (this._lastPageRoute = e);
                        if (U(), this._lastPageRoute = e, R("page").overtime) {
                            var n = {
                                path: this._lastPageRoute,
                                scene: this.statData.sc
                            };
                            this._sendReportRequest(n);
                        }
                        N();
                    }
                }, {
                    key: "_pageHide",
                    value: function() {
                        if (!this.__licationHide) {
                            U();
                            var e = R("page");
                            return this._sendPageRequest({
                                url: this._lastPageRoute,
                                urlref: this._lastPageRoute,
                                urlref_ts: e.residenceTime
                            }), void (this._navigationBarTitle = {
                                config: "",
                                page: "",
                                report: "",
                                lt: ""
                            });
                        }
                    }
                }, {
                    key: "_login",
                    value: function() {
                        this._sendEventRequest({
                            key: "login"
                        }, 0);
                    }
                }, {
                    key: "_share",
                    value: function() {
                        this._sendEventRequest({
                            key: "share"
                        }, 0);
                    }
                }, {
                    key: "_payment",
                    value: function(e) {
                        this._sendEventRequest({
                            key: e
                        }, 0);
                    }
                }, {
                    key: "_sendReportRequest",
                    value: function(e) {
                        this._navigationBarTitle.lt = "1";
                        var t = e.query && "{}" !== JSON.stringify(e.query) ? "?" + JSON.stringify(e.query) : "";
                        this.statData.lt = "1", this.statData.url = e.path + t || "", this.statData.t = m(), 
                        this.statData.sc = S(e.scene), this.statData.fvts = k(), this.statData.lvts = T(), 
                        this.statData.tvc = E(), "n" === y() ? this.getProperty() : this.getNetworkInfo();
                    }
                }, {
                    key: "_sendPageRequest",
                    value: function(e) {
                        var t = e.url, n = e.urlref, r = e.urlref_ts;
                        this._navigationBarTitle.lt = "11";
                        var o = {
                            ak: this.statData.ak,
                            uuid: this.statData.uuid,
                            lt: "11",
                            ut: this.statData.ut,
                            url: t,
                            tt: this.statData.tt,
                            urlref: n,
                            urlref_ts: r,
                            ch: this.statData.ch,
                            usv: this.statData.usv,
                            t: m(),
                            p: this.statData.p
                        };
                        this.request(o);
                    }
                }, {
                    key: "_sendHideRequest",
                    value: function(e, t) {
                        var n = e.urlref, r = e.urlref_ts, o = {
                            ak: this.statData.ak,
                            uuid: this.statData.uuid,
                            lt: "3",
                            ut: this.statData.ut,
                            urlref: n,
                            urlref_ts: r,
                            ch: this.statData.ch,
                            usv: this.statData.usv,
                            t: m(),
                            p: this.statData.p
                        };
                        this.request(o, t);
                    }
                }, {
                    key: "_sendEventRequest",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.key, n = void 0 === t ? "" : t, r = e.value, o = void 0 === r ? "" : r, i = this._lastPageRoute, a = {
                            ak: this.statData.ak,
                            uuid: this.statData.uuid,
                            lt: "21",
                            ut: this.statData.ut,
                            url: i,
                            ch: this.statData.ch,
                            e_n: n,
                            e_v: "object" === f(o) ? JSON.stringify(o) : o.toString(),
                            usv: this.statData.usv,
                            t: m(),
                            p: this.statData.p
                        };
                        this.request(a);
                    }
                }, {
                    key: "getNetworkInfo",
                    value: function() {
                        var t = this;
                        e.getNetworkType({
                            success: function(e) {
                                t.statData.net = e.networkType, t.getLocation();
                            }
                        });
                    }
                }, {
                    key: "getProperty",
                    value: function() {
                        var e = this;
                        plus.runtime.getProperty(plus.runtime.appid, function(t) {
                            e.statData.v = t.version || "", e.getNetworkInfo();
                        });
                    }
                }, {
                    key: "getLocation",
                    value: function() {
                        var t = this;
                        Y.getLocation ? e.getLocation({
                            type: "wgs84",
                            geocode: !0,
                            success: function(e) {
                                e.address && (t.statData.cn = e.address.country, t.statData.pn = e.address.province, 
                                t.statData.ct = e.address.city), t.statData.lat = e.latitude, t.statData.lng = e.longitude, 
                                t.request(t.statData);
                            }
                        }) : (this.statData.lat = 0, this.statData.lng = 0, this.request(this.statData));
                    }
                }, {
                    key: "request",
                    value: function(t, n) {
                        var r = this, o = m(), i = this._navigationBarTitle;
                        t.ttn = i.page, t.ttpj = i.config, t.ttc = i.report;
                        var a = this._reportingRequestData;
                        if ("n" === y() && (a = e.getStorageSync("__UNI__STAT__DATA") || {}), a[t.lt] || (a[t.lt] = []), 
                        a[t.lt].push(t), "n" === y() && e.setStorageSync("__UNI__STAT__DATA", a), !(C() < 10) || n) {
                            var c = this._reportingRequestData;
                            "n" === y() && (c = e.getStorageSync("__UNI__STAT__DATA")), A();
                            var u = [], s = [], f = [];
                            for (var l in c) !function(e) {
                                c[e].forEach(function(t) {
                                    var n = v(t);
                                    0 === e ? u.push(n) : 3 === e ? f.push(n) : s.push(n);
                                });
                            }(l);
                            u.push.apply(u, s.concat(f));
                            var p = {
                                usv: d,
                                t: o,
                                requests: JSON.stringify(u)
                            };
                            this._reportingRequestData = {}, "n" === y() && e.removeStorageSync("__UNI__STAT__DATA"), 
                            "h5" !== t.ut ? "n" !== y() || "a" !== this.statData.p ? this._sendRequest(p) : setTimeout(function() {
                                r._sendRequest(p);
                            }, 200) : this.imageRequest(p);
                        }
                    }
                }, {
                    key: "_sendRequest",
                    value: function(t) {
                        var n = this;
                        e.request({
                            url: "https://tongji.dcloud.io/uni/stat",
                            method: "POST",
                            data: t,
                            success: function() {},
                            fail: function(e) {
                                ++n._retry < 3 && setTimeout(function() {
                                    n._sendRequest(t);
                                }, 1e3);
                            }
                        });
                    }
                }, {
                    key: "imageRequest",
                    value: function(e) {
                        var t = new Image(), n = g(M(e)).options;
                        t.src = "https://tongji.dcloud.io/uni/stat.gif?" + n;
                    }
                }, {
                    key: "sendEvent",
                    value: function(e, t) {
                        H(e, t) || ("title" !== e ? this._sendEventRequest({
                            key: e,
                            value: "object" === f(t) ? JSON.stringify(t) : t
                        }, 1) : this._navigationBarTitle.report = t);
                    }
                } ]), t;
            }(), z = function(n) {
                function r() {
                    var n;
                    return c(this, r), n = t(this, o(r).call(this)), n.instance = null, "function" == typeof e.addInterceptor && (n.addInterceptorInit(), 
                    n.interceptLogin(), n.interceptShare(!0), n.interceptRequestPayment()), n;
                }
                return i(r, G), s(r, null, [ {
                    key: "getInstance",
                    value: function() {
                        return this.instance || (this.instance = new r()), this.instance;
                    }
                } ]), s(r, [ {
                    key: "addInterceptorInit",
                    value: function() {
                        var t = this;
                        e.addInterceptor("setNavigationBarTitle", {
                            invoke: function(e) {
                                t._navigationBarTitle.page = e.title;
                            }
                        });
                    }
                }, {
                    key: "interceptLogin",
                    value: function() {
                        var t = this;
                        e.addInterceptor("login", {
                            complete: function() {
                                t._login();
                            }
                        });
                    }
                }, {
                    key: "interceptShare",
                    value: function(t) {
                        var n = this;
                        t ? e.addInterceptor("share", {
                            success: function() {
                                n._share();
                            },
                            fail: function() {
                                n._share();
                            }
                        }) : n._share();
                    }
                }, {
                    key: "interceptRequestPayment",
                    value: function() {
                        var t = this;
                        e.addInterceptor("requestPayment", {
                            success: function() {
                                t._payment("pay_success");
                            },
                            fail: function() {
                                t._payment("pay_fail");
                            }
                        });
                    }
                }, {
                    key: "report",
                    value: function(e, t) {
                        this.self = t, A(), this.__licationShow = !0, this._sendReportRequest(e, !0);
                    }
                }, {
                    key: "load",
                    value: function(e, t) {
                        if (!t.$scope && !t.$mp) {
                            var n = getCurrentPages();
                            t.$scope = n[n.length - 1];
                        }
                        this.self = t, this._query = e;
                    }
                }, {
                    key: "show",
                    value: function(e) {
                        this.self = e, q(e) ? this._pageShow(e) : this._applicationShow(e);
                    }
                }, {
                    key: "ready",
                    value: function(e) {}
                }, {
                    key: "hide",
                    value: function(e) {
                        this.self = e, q(e) ? this._pageHide(e) : this._applicationHide(e, !0);
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        this._platform;
                        var t = "";
                        t = e.message ? e.stack : JSON.stringify(e);
                        var n = {
                            ak: this.statData.ak,
                            uuid: this.statData.uuid,
                            lt: "31",
                            ut: this.statData.ut,
                            ch: this.statData.ch,
                            mpsdk: this.statData.mpsdk,
                            mpv: this.statData.mpv,
                            v: this.statData.v,
                            em: t,
                            usv: this.statData.usv,
                            t: m(),
                            p: this.statData.p
                        };
                        this.request(n);
                    }
                } ]), r;
            }().getInstance(), Q = !1, K = {
                onLaunch: function(e) {
                    z.report(e, this);
                },
                onReady: function() {
                    z.ready(this);
                },
                onLoad: function(e) {
                    if (z.load(e, this), this.$scope && this.$scope.onShareAppMessage) {
                        var t = this.$scope.onShareAppMessage;
                        this.$scope.onShareAppMessage = function(e) {
                            return z.interceptShare(!1), t.call(this, e);
                        };
                    }
                },
                onShow: function() {
                    Q = !1, z.show(this);
                },
                onHide: function() {
                    Q = !0, z.hide(this);
                },
                onUnload: function() {
                    Q ? Q = !1 : z.hide(this);
                },
                onError: function(e) {
                    z.error(e);
                }
            };
            !function() {
                var t = n("66fd");
                (t.default || t).mixin(K), e.report = function(e, t) {
                    z.sendEvent(e, t);
                };
            }();
        }).call(this, n("543d").default);
    },
    "942b": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e);
            return t.setDate(1), t.setHours(0, 0, 0, 0), t;
        };
    },
    9530: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = Number(t);
            return n.setMonth(0), n.setDate(o), n;
        };
    },
    "957f": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = Number(t);
            return n.setDate(o), n;
        };
    },
    "95ea": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                return r(e);
            }), t = Math.max.apply(null, e);
            return new Date(t);
        };
    },
    "96cf": function(e, t) {
        !function(t) {
            function n(e, t, n, r) {
                var i = t && t.prototype instanceof o ? t : o, a = Object.create(i.prototype), c = new p(r || []);
                return a._invoke = s(e, n, c), a;
            }
            function r(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            function o() {}
            function i() {}
            function a() {}
            function c(e) {
                [ "next", "throw", "return" ].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function u(e) {
                function t(n, o, i, a) {
                    var c = r(e[n], e, o);
                    if ("throw" !== c.type) {
                        var u = c.arg, s = u.value;
                        return s && "object" === (void 0 === s ? "undefined" : _typeof(s)) && y.call(s, "__await") ? Promise.resolve(s.__await).then(function(e) {
                            t("next", e, i, a);
                        }, function(e) {
                            t("throw", e, i, a);
                        }) : Promise.resolve(s).then(function(e) {
                            u.value = e, i(u);
                        }, function(e) {
                            return t("throw", e, i, a);
                        });
                    }
                    a(c.arg);
                }
                var n;
                this._invoke = function(e, r) {
                    function o() {
                        return new Promise(function(n, o) {
                            t(e, r, n, o);
                        });
                    }
                    return n = n ? n.then(o, o) : o();
                };
            }
            function s(e, t, n) {
                var o = k;
                return function(i, a) {
                    if (o === j) throw new Error("Generator is already running");
                    if (o === P) {
                        if ("throw" === i) throw a;
                        return g();
                    }
                    for (n.method = i, n.arg = a; ;) {
                        var c = n.delegate;
                        if (c) {
                            var u = f(c, n);
                            if (u) {
                                if (u === I) continue;
                                return u;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if (o === k) throw o = P, n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        o = j;
                        var s = r(e, t, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? P : T, s.arg === I) continue;
                            return {
                                value: s.arg,
                                done: n.done
                            };
                        }
                        "throw" === s.type && (o = P, n.method = "throw", n.arg = s.arg);
                    }
                };
            }
            function f(e, t) {
                var n = e.iterator[t.method];
                if (n === v) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = v, f(e, t), "throw" === t.method)) return I;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return I;
                }
                var o = r(n, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
                I;
                var i = o.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                t.arg = v), t.delegate = null, I) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                t.delegate = null, I);
            }
            function l(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                this.tryEntries.push(t);
            }
            function d(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function p(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(l, this), this.reset(!0);
            }
            function h(e) {
                if (e) {
                    var t = e[_];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1, r = function t() {
                            for (;++n < e.length; ) if (y.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = v, t.done = !0, t;
                        };
                        return r.next = r;
                    }
                }
                return {
                    next: g
                };
            }
            function g() {
                return {
                    value: v,
                    done: !0
                };
            }
            var v, m = Object.prototype, y = m.hasOwnProperty, b = "function" == typeof Symbol ? Symbol : {}, _ = b.iterator || "@@iterator", w = b.asyncIterator || "@@asyncIterator", S = b.toStringTag || "@@toStringTag", x = "object" === (void 0 === e ? "undefined" : _typeof(e)), O = t.regeneratorRuntime;
            if (O) x && (e.exports = O); else {
                (O = t.regeneratorRuntime = x ? e.exports : {}).wrap = n;
                var k = "suspendedStart", T = "suspendedYield", j = "executing", P = "completed", I = {}, A = {};
                A[_] = function() {
                    return this;
                };
                var C = Object.getPrototypeOf, D = C && C(C(h([])));
                D && D !== m && y.call(D, _) && (A = D);
                var E = a.prototype = o.prototype = Object.create(A);
                i.prototype = E.constructor = a, a.constructor = i, a[S] = i.displayName = "GeneratorFunction", 
                O.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === i || "GeneratorFunction" === (t.displayName || t.name));
                }, O.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, S in e || (e[S] = "GeneratorFunction")), 
                    e.prototype = Object.create(E), e;
                }, O.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, c(u.prototype), u.prototype[w] = function() {
                    return this;
                }, O.AsyncIterator = u, O.async = function(e, t, r, o) {
                    var i = new u(n(e, t, r, o));
                    return O.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next();
                    });
                }, c(E), E[S] = "Generator", E[_] = function() {
                    return this;
                }, E.toString = function() {
                    return "[object Generator]";
                }, O.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(), function n() {
                        for (;t.length; ) {
                            var r = t.pop();
                            if (r in e) return n.value = r, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, O.values = h, p.prototype = {
                    constructor: p,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, 
                        this.method = "next", this.arg = v, this.tryEntries.forEach(d), !e) for (var t in this) "t" === t.charAt(0) && y.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = v);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        function t(t, r) {
                            return i.type = "throw", i.arg = e, n.next = t, r && (n.method = "next", n.arg = v), 
                            !!r;
                        }
                        if (this.done) throw e;
                        for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r], i = o.completion;
                            if ("root" === o.tryLoc) return t("end");
                            if (o.tryLoc <= this.prev) {
                                var a = y.call(o, "catchLoc"), c = y.call(o, "finallyLoc");
                                if (a && c) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                                } else if (a) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && y.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break;
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
                        I) : this.complete(i);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                        this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                        I;
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), d(n), I;
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    d(n);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: h(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = v), I;
                    }
                };
            }
        }(function() {
            return this || "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) && self;
        }() || Function("return this")());
    },
    9706: function(e, t, n) {
        var r = n("c8d5"), o = n("4497"), i = n("d420");
        e.exports = function(e, t) {
            var n = r(e), a = Number(t), c = i(n, o(n)), u = new Date(0);
            return u.setFullYear(a, 0, 4), u.setHours(0, 0, 0, 0), (n = o(u)).setDate(n.getDate() + c), 
            n;
        };
    },
    9707: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return e ? e.replace("http://", "https://").replace("image.bao.wallstreetcn.com", "image.xuangubao.cn") : e;
        };
    },
    9744: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e);
            return t.setHours(23, 59, 59, 999), t;
        };
    },
    9790: function(e, t, n) {
        function r(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    o(e, t, n[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n("f8c8"), a = {
            namespaced: !0,
            state: {
                subject: {
                    entities: {}
                },
                article: {
                    entities: {}
                }
            },
            getters: {
                subjectEntities: function(e) {
                    return e.subject.entities;
                },
                subjectEntitiesById: function(e) {
                    return function(t) {
                        return e.subject.entities[t];
                    };
                },
                articleEntities: function(e) {
                    return e.article.entities;
                },
                articleEntitiesById: function(e) {
                    return function(t) {
                        return e.article.entities[t];
                    };
                }
            },
            actions: {
                fetchSubject: function(e, t) {
                    var n = e.commit, r = t.id;
                    (0, i.getSubjectInfo)(r).then(function(e) {
                        n("UPDATE_SUBJECT_ENTITY", {
                            id: r,
                            entity: e
                        });
                    });
                },
                fetchArticle: function(e, t) {
                    var n = e.commit, r = t.articleId, o = t.subjectId;
                    (0, i.fetchBaoerMessage)(r, o).then(function(e) {
                        n("UPDATE_ARTICLE_ENTITY", {
                            id: r,
                            entity: e
                        }), e.fromSubject && n("UPDATE_SUBJECT_ENTITY", {
                            id: e.fromSubject.id,
                            entity: e.fromSubject
                        });
                    });
                },
                removeArticle: function(e, t) {
                    (0, e.commit)("REMOVE_ARTICLE_ENTITY", {
                        id: t.articleId
                    });
                }
            },
            mutations: {
                UPDATE_SUBJECT_ENTITY: function(e, t) {
                    var n = t.id, i = t.entity;
                    e.subject.entities = r({}, e.subject.entities, o({}, n, Object.assign({}, e.subject.entities[n], r({}, i, {
                        subjSubscribeItems: i.subjSubscribeItems || i.subscribeItems
                    }))));
                },
                UPDATE_SUBJECT_ENTITY_MULTI: function(e, t) {
                    var n = t.reduce(function(t, n) {
                        return r({}, t, o({}, n.id, Object.assign({}, e.subject.entities[n.id], r({}, n, {
                            subjSubscribeItems: n.subjSubscribeItems || n.subscribeItems
                        }))));
                    }, {});
                    e.subject.entities = r({}, e.subject.entities, {}, n);
                },
                UPDATE_ARTICLE_ENTITY: function(e, t) {
                    var n = t.id, i = t.entity;
                    e.article.entities = r({}, e.article.entities, o({}, n, Object.assign({}, e.article.entities[n], i)));
                },
                UPDATE_ARTICLE_ENTITY_MULTI: function(e, t) {
                    var n = t.reduce(function(t, n) {
                        return r({}, t, o({}, n.id, Object.assign({}, e.article.entities[n.id], n)));
                    }, {});
                    e.article.entities = r({}, e.article.entities, {}, n);
                },
                REMOVE_ARTICLE_ENTITY: function(e, t) {
                    var n = t.id;
                    e.article.entities = r({}, e.article.entities, o({}, n, null));
                }
            }
        };
        t.default = a;
    },
    "97af": function(e, t, n) {
        var r = n("2fff");
        e.exports = function(e) {
            return r(new Date(), e);
        };
    },
    9898: function(e, t, n) {
        function r(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    o(e, t, n[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            namespaced: !0,
            state: {
                comments: {}
            },
            getters: {
                comments: function(e) {
                    return function(t) {
                        return e.comments[t] || {};
                    };
                }
            },
            actions: {},
            mutations: {
                UPDATE_COMMENTS: function(e, t) {
                    var n = t.articleId, i = t.comments;
                    e.comments = r({}, e.comments, o({}, n, r({}, e.comments[n], {}, i.reduce(function(e, t) {
                        return r({}, e, o({}, t.id, t));
                    }, {}))));
                },
                CLEAR_COMMENTS: function(e, t) {
                    e.comments = r({}, e.comments, o({}, t, null));
                }
            }
        };
        t.default = i;
    },
    "9a62": function(e, t, n) {
        e.exports = [ "中国 +86", "中国香港 +852", "中国台湾 +886", "中国澳门 +853", "美国 +1", "加拿大 +1", "澳大利亚 +61", "日本 +81", "新加坡 +65", "英国 +44", "法国 +33", "德国 +49", "马来西亚 +60" ];
    },
    "9a63": function(e, t) {
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)));
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                    return t;
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("");
                }
            }
        };
        e.exports = n;
    },
    "9aaa": function(e, t, n) {
        var r = n("4399");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getTime() === o.getTime();
        };
    },
    "9ad8": function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e).getDay();
            return 0 === t || 6 === t;
        };
    },
    "9bb9": function(e, t, n) {
        var r = n("5a60");
        e.exports = function(e) {
            return r(new Date(), e);
        };
    },
    "9d76": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            for (var t = {}, n = e.split(","), r = 0; r < n.length; r += 1) t[n[r]] = !0;
            return t;
        }
        function i(e) {
            return /<body.*>([^]*)<\/body>/.test(e) ? RegExp.$1 : e;
        }
        function a(e) {
            return e.replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<").replace(/<script[^]*<\/script>/gi, "").replace(/<style[^]*<\/style>/gi, "");
        }
        function c() {
            var e = {};
            return wx.getSystemInfo({
                success: function(t) {
                    e.width = t.windowWidth, e.height = t.windowHeight;
                }
            }), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = r(n("a5c6")), s = r(n("8df3")), f = o("br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), l = o("a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), d = o("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
        t.default = function(e, t, n, r) {
            function o(e) {
                this.node = "element", this.tag = e, this.$screen = g;
            }
            e = a(e = i(e)), e = u.default.strDiscode(e);
            var p = [], h = {
                nodes: [],
                imageUrls: []
            }, g = c();
            return (0, s.default)(e, {
                start: function(e, r, i) {
                    var a = new o(e);
                    if (0 !== p.length) {
                        var c = p[0];
                        void 0 === c.nodes && (c.nodes = []);
                    }
                    if (f[e] ? a.tagType = "block" : l[e] ? a.tagType = "inline" : d[e] && (a.tagType = "closeSelf"), 
                    a.attr = r.reduce(function(e, t) {
                        var n = t.name, r = t.value;
                        return "class" === n && (a.classStr = r), "style" === n && (a.styleStr = r), r.match(/ /) && (r = r.split(" ")), 
                        e[n] ? Array.isArray(e[n]) ? e[n].push(r) : e[n] = [ e[n], r ] : e[n] = r, e;
                    }, {}), a.classStr ? a.classStr += " ".concat(a.tag) : a.classStr = a.tag, "inline" === a.tagType && (a.classStr += " inline"), 
                    "img" === a.tag) {
                        var s = a.attr.src;
                        s = u.default.urlToHttpUrl(s, n.domain), Object.assign(a.attr, n, {
                            src: s || ""
                        }), s && h.imageUrls.push(s);
                    }
                    if ("a" === a.tag && (a.attr.href = a.attr.href || ""), "font" === a.tag) {
                        var g = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], v = {
                            color: "color",
                            face: "font-family",
                            size: "font-size"
                        };
                        a.styleStr || (a.styleStr = ""), Object.keys(v).forEach(function(e) {
                            if (a.attr[e]) {
                                var t = "size" === e ? g[a.attr[e] - 1] : a.attr[e];
                                a.styleStr += "".concat(v[e], ": ").concat(t, ";");
                            }
                        });
                    }
                    if ("source" === a.tag && (h.source = a.attr.src), t.start && t.start(a, h), i) {
                        var m = p[0] || h;
                        void 0 === m.nodes && (m.nodes = []), m.nodes.push(a);
                    } else p.unshift(a);
                },
                end: function(e) {
                    var n = p.shift();
                    if (n.tag !== e && console.error("invalid state: mismatch end tag"), "video" === n.tag && h.source && (n.attr.src = h.source, 
                    delete h.source), t.end && t.end(n, h), 0 === p.length) h.nodes.push(n); else {
                        var r = p[0];
                        r.nodes || (r.nodes = []), r.nodes.push(n);
                    }
                },
                chars: function(e) {
                    if (e.trim()) {
                        var n = {
                            node: "text",
                            text: e
                        };
                        if (t.chars && t.chars(n, h), 0 === p.length) h.nodes.push(n); else {
                            var r = p[0];
                            void 0 === r.nodes && (r.nodes = []), r.nodes.push(n);
                        }
                    }
                }
            }), h;
        };
    },
    a06c: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            baoer: "https://baoer-api-prod.xuangubao.cn",
            ddc: "https://api-ddc-wscn.xuangubao.cn",
            wows: "https://wows-api-wscn.xuangubao.cn",
            wscn: "https://api-wscn.xuangubao.cn",
            api: "https://api.xuangubao.cn"
        };
        t.default = r;
    },
    a34a: function(e, t, n) {
        e.exports = n("bbdd");
    },
    a431: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getTime() > o.getTime();
        };
    },
    a4b7: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e), n = new Date(0);
            return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
        };
    },
    a5c6: function(e, t, n) {
        function r(e) {
            return e = e.replace(/&forall;/g, "∀"), e = e.replace(/&part;/g, "∂"), e = e.replace(/&exist;/g, "∃"), 
            e = e.replace(/&empty;/g, "∅"), e = e.replace(/&nabla;/g, "∇"), e = e.replace(/&isin;/g, "∈"), 
            e = e.replace(/&notin;/g, "∉"), e = e.replace(/&ni;/g, "∋"), e = e.replace(/&prod;/g, "∏"), 
            e = e.replace(/&sum;/g, "∑"), e = e.replace(/&minus;/g, "−"), e = e.replace(/&lowast;/g, "∗"), 
            e = e.replace(/&radic;/g, "√"), e = e.replace(/&prop;/g, "∝"), e = e.replace(/&infin;/g, "∞"), 
            e = e.replace(/&ang;/g, "∠"), e = e.replace(/&and;/g, "∧"), e = e.replace(/&or;/g, "∨"), 
            e = e.replace(/&cap;/g, "∩"), e = e.replace(/&cup;/g, "∪"), e = e.replace(/&int;/g, "∫"), 
            e = e.replace(/&there4;/g, "∴"), e = e.replace(/&sim;/g, "∼"), e = e.replace(/&cong;/g, "≅"), 
            e = e.replace(/&asymp;/g, "≈"), e = e.replace(/&ne;/g, "≠"), e = e.replace(/&le;/g, "≤"), 
            e = e.replace(/&ge;/g, "≥"), e = e.replace(/&sub;/g, "⊂"), e = e.replace(/&sup;/g, "⊃"), 
            e = e.replace(/&nsub;/g, "⊄"), e = e.replace(/&sube;/g, "⊆"), e = e.replace(/&supe;/g, "⊇"), 
            e = e.replace(/&oplus;/g, "⊕"), e = e.replace(/&otimes;/g, "⊗"), e = e.replace(/&perp;/g, "⊥"), 
            e = e.replace(/&sdot;/g, "⋅");
        }
        function o(e) {
            return e = e.replace(/&Alpha;/g, "Α"), e = e.replace(/&Beta;/g, "Β"), e = e.replace(/&Gamma;/g, "Γ"), 
            e = e.replace(/&Delta;/g, "Δ"), e = e.replace(/&Epsilon;/g, "Ε"), e = e.replace(/&Zeta;/g, "Ζ"), 
            e = e.replace(/&Eta;/g, "Η"), e = e.replace(/&Theta;/g, "Θ"), e = e.replace(/&Iota;/g, "Ι"), 
            e = e.replace(/&Kappa;/g, "Κ"), e = e.replace(/&Lambda;/g, "Λ"), e = e.replace(/&Mu;/g, "Μ"), 
            e = e.replace(/&Nu;/g, "Ν"), e = e.replace(/&Xi;/g, "Ν"), e = e.replace(/&Omicron;/g, "Ο"), 
            e = e.replace(/&Pi;/g, "Π"), e = e.replace(/&Rho;/g, "Ρ"), e = e.replace(/&Sigma;/g, "Σ"), 
            e = e.replace(/&Tau;/g, "Τ"), e = e.replace(/&Upsilon;/g, "Υ"), e = e.replace(/&Phi;/g, "Φ"), 
            e = e.replace(/&Chi;/g, "Χ"), e = e.replace(/&Psi;/g, "Ψ"), e = e.replace(/&Omega;/g, "Ω"), 
            e = e.replace(/&alpha;/g, "α"), e = e.replace(/&beta;/g, "β"), e = e.replace(/&gamma;/g, "γ"), 
            e = e.replace(/&delta;/g, "δ"), e = e.replace(/&epsilon;/g, "ε"), e = e.replace(/&zeta;/g, "ζ"), 
            e = e.replace(/&eta;/g, "η"), e = e.replace(/&theta;/g, "θ"), e = e.replace(/&iota;/g, "ι"), 
            e = e.replace(/&kappa;/g, "κ"), e = e.replace(/&lambda;/g, "λ"), e = e.replace(/&mu;/g, "μ"), 
            e = e.replace(/&nu;/g, "ν"), e = e.replace(/&xi;/g, "ξ"), e = e.replace(/&omicron;/g, "ο"), 
            e = e.replace(/&pi;/g, "π"), e = e.replace(/&rho;/g, "ρ"), e = e.replace(/&sigmaf;/g, "ς"), 
            e = e.replace(/&sigma;/g, "σ"), e = e.replace(/&tau;/g, "τ"), e = e.replace(/&upsilon;/g, "υ"), 
            e = e.replace(/&phi;/g, "φ"), e = e.replace(/&chi;/g, "χ"), e = e.replace(/&psi;/g, "ψ"), 
            e = e.replace(/&omega;/g, "ω"), e = e.replace(/&thetasym;/g, "ϑ"), e = e.replace(/&upsih;/g, "ϒ"), 
            e = e.replace(/&piv;/g, "ϖ"), e = e.replace(/&middot;/g, "·");
        }
        function i(e) {
            return e = e.replace(/&nbsp;/g, " "), e = e.replace(/&ensp;/g, " "), e = e.replace(/&emsp;/g, "　"), 
            e = e.replace(/&quot;/g, "'"), e = e.replace(/&amp;/g, "&"), e = e.replace(/&lt;/g, "<"), 
            e = e.replace(/&gt;/g, ">"), e = e.replace(/&#8226;/g, "•");
        }
        function a(e) {
            return e = e.replace(/&OElig;/g, "Œ"), e = e.replace(/&oelig;/g, "œ"), e = e.replace(/&Scaron;/g, "Š"), 
            e = e.replace(/&scaron;/g, "š"), e = e.replace(/&Yuml;/g, "Ÿ"), e = e.replace(/&fnof;/g, "ƒ"), 
            e = e.replace(/&circ;/g, "ˆ"), e = e.replace(/&tilde;/g, "˜"), e = e.replace(/&ensp;/g, ""), 
            e = e.replace(/&emsp;/g, ""), e = e.replace(/&thinsp;/g, ""), e = e.replace(/&zwnj;/g, ""), 
            e = e.replace(/&zwj;/g, ""), e = e.replace(/&lrm;/g, ""), e = e.replace(/&rlm;/g, ""), 
            e = e.replace(/&ndash;/g, "–"), e = e.replace(/&mdash;/g, "—"), e = e.replace(/&lsquo;/g, "‘"), 
            e = e.replace(/&rsquo;/g, "’"), e = e.replace(/&sbquo;/g, "‚"), e = e.replace(/&ldquo;/g, "“"), 
            e = e.replace(/&rdquo;/g, "”"), e = e.replace(/&bdquo;/g, "„"), e = e.replace(/&dagger;/g, "†"), 
            e = e.replace(/&Dagger;/g, "‡"), e = e.replace(/&bull;/g, "•"), e = e.replace(/&hellip;/g, "…"), 
            e = e.replace(/&permil;/g, "‰"), e = e.replace(/&prime;/g, "′"), e = e.replace(/&Prime;/g, "″"), 
            e = e.replace(/&lsaquo;/g, "‹"), e = e.replace(/&rsaquo;/g, "›"), e = e.replace(/&oline;/g, "‾"), 
            e = e.replace(/&euro;/g, "€"), e = e.replace(/&trade;/g, "™"), e = e.replace(/&larr;/g, "←"), 
            e = e.replace(/&uarr;/g, "↑"), e = e.replace(/&rarr;/g, "→"), e = e.replace(/&darr;/g, "↓"), 
            e = e.replace(/&harr;/g, "↔"), e = e.replace(/&crarr;/g, "↵"), e = e.replace(/&lceil;/g, "⌈"), 
            e = e.replace(/&rceil;/g, "⌉"), e = e.replace(/&lfloor;/g, "⌊"), e = e.replace(/&rfloor;/g, "⌋"), 
            e = e.replace(/&loz;/g, "◊"), e = e.replace(/&spades;/g, "♠"), e = e.replace(/&clubs;/g, "♣"), 
            e = e.replace(/&hearts;/g, "♥"), e = e.replace(/&diams;/g, "♦"), e = e.replace(/&#39;/g, "'");
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = {
            strDiscode: function(e) {
                return e = r(e), e = o(e), e = i(e), e = a(e);
            },
            urlToHttpUrl: function(e, t) {
                return /^\/\//.test(e) ? "https:".concat(e) : /^\//.test(e) ? "https://".concat(t).concat(e) : e;
            }
        };
        t.default = c;
    },
    a735: function(e, t) {
        e.exports = function(e) {
            return e instanceof Date;
        };
    },
    a846: function(e, t, n) {
        (function(e) {
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function i(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e;
            }
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : _typeof(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
                })(e);
            }
            function c(e) {
                return e && e.$attrs ? e.$attrs.mpcomid : "0";
            }
            function u(e, t, n) {
                return !(!e || !t || t !== e && 0 !== t.indexOf(e + n));
            }
            function s(e, t, n) {
                void 0 === t && (t = []);
                var r = t.slice(1);
                if (!r.length) return e;
                var o = r.join(n), i = "";
                return r.reduce(function(e, t) {
                    for (var r = e.$children.length, a = 0; a < r; a++) {
                        var s = e.$children[a], f = c(s);
                        if (i && (f = i + n + f), u(f, o, n)) return i = f, e = s;
                    }
                    return e;
                }, e);
            }
            function f(e, t, n) {
                void 0 === n && (n = []);
                var r = [];
                if (!e || !e.tag) return r;
                var o = e || {}, i = o.data;
                void 0 === i && (i = {});
                var a = o.children;
                void 0 === a && (a = []);
                var c = o.componentInstance;
                c ? Object.keys(c.$slots).forEach(function(e) {
                    var o = c.$slots[e];
                    (Array.isArray(o) ? o : [ o ]).forEach(function(e) {
                        r = r.concat(f(e, t, n));
                    });
                }) : a.forEach(function(e) {
                    r = r.concat(f(e, t, n));
                });
                var u = i.attrs, s = i.on;
                return u && s && u.eventid === t && n.forEach(function(e) {
                    var t = s[e];
                    "function" == typeof t ? r.push(t) : Array.isArray(t) && (r = r.concat(t));
                }), r;
            }
            function l(e, t) {
                return e === t || "regionchange" === t && ("begin" === e || "end" === e);
            }
            function d() {}
            function p(e, t) {
                for (var n = e.length; n--; ) if (e[n].listener === t) return n;
                return -1;
            }
            function h(e) {
                return function() {
                    return this[e].apply(this, arguments);
                };
            }
            function g(e) {
                return "function" == typeof e || e instanceof RegExp || !(!e || "object" !== a(e)) && g(e.listener);
            }
            var v;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.growingio = t.gioEmitter = t.GioPage = t.GioComponent = t.GioBehavior = t.GioApp = t.default = void 0, 
            Object.hasOwnProperty("getOwnPropertyDescriptors") || (v = "object" === ("undefined" == typeof Reflect ? "undefined" : a(Reflect)) && "function" == typeof Reflect.ownKeys ? Reflect.ownKeys : "function" == typeof Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            } : Object.getOwnPropertyNames, Object.defineProperty(Object, "getOwnPropertyDescriptors", {
                configurable: !0,
                writable: !0,
                value: function(e) {
                    return v(e).reduce(function(t, n) {
                        return Object.defineProperty(t, n, {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: Object.getOwnPropertyDescriptor(e, n)
                        });
                    }, {});
                }
            }));
            var m = function() {
                function e(t) {
                    r(this, e), this.growingio = t, this.messageQueue = [], this.uploadingQueue = [], 
                    this.uploadTimer = null, this.projectId = this.growingio.projectId, this.appId = this.growingio.appId, 
                    this.host = this.growingio.host, this.url = "".concat(this.host, "/projects/").concat(this.projectId, "/apps/").concat(this.appId, "/collect");
                }
                return i(e, [ {
                    key: "upload",
                    value: function(e) {
                        var t = this;
                        this.messageQueue.push(e);
                        var n = this.messageQueue.length;
                        n > 100 && (this.messageQueue = this.messageQueue.slice(n - 100)), this.uploadTimer || (this.uploadTimer = setTimeout(function() {
                            t._flush(), t.uploadTimer = null;
                        }, 1e3));
                    }
                }, {
                    key: "forceFlush",
                    value: function() {
                        this.uploadTimer && (clearTimeout(this.uploadTimer), this.uploadTimer = null), this._flush();
                    }
                }, {
                    key: "_flush",
                    value: function() {
                        var e = this;
                        this.uploadingQueue = this.messageQueue.slice(), this.messageQueue = [], this.uploadingQueue.length > 0 && wx.request({
                            url: "".concat(this.url, "?stm=").concat(Date.now()),
                            header: {
                                "content-type": "application/json"
                            },
                            method: "POST",
                            data: this.uploadingQueue,
                            success: function() {
                                e.messageQueue.length > 0 && e._flush();
                            },
                            fail: function() {
                                e.messageQueue = e.uploadingQueue.concat(e.messageQueue);
                            }
                        });
                    }
                } ]), e;
            }(), y = {
                sdkVer: "2.0.12",
                devVer: 1,
                guid: function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16);
                    });
                },
                getAppId: function() {
                    var e = void 0;
                    return wx.getSystemInfo({
                        success: function(t) {
                            y.compareVersion(t.SDKVersion, "2.2.2") >= 0 && (e = wx.getAccountInfoSync().miniProgram.appId);
                        }
                    }), e;
                },
                getScreenHeight: function(e) {
                    return Math.round(e.screenHeight * e.pixelRatio);
                },
                getScreenWidth: function(e) {
                    return Math.round(e.screenWidth * e.pixelRatio);
                },
                getOS: function(e) {
                    if (e) {
                        var t = e.toLowerCase();
                        return -1 != t.indexOf("android") ? "Weixin-Android" : -1 != t.indexOf("ios") ? "Weixin-iOS" : e;
                    }
                },
                getOSV: function(e) {
                    return "Weixin ".concat(e);
                },
                isEmpty: function(e) {
                    for (var t in e) if (e.hasOwnProperty(t)) return !1;
                    return !0;
                },
                compareVersion: function(e, t) {
                    e = e.split("."), t = t.split(".");
                    for (var n = Math.max(e.length, t.length); e.length < n; ) e.push("0");
                    for (;t.length < n; ) t.push("0");
                    for (var r = 0; r < n; r++) {
                        var o = parseInt(e[r]), i = parseInt(t[r]);
                        if (o > i) return 1;
                        if (o < i) return -1;
                    }
                    return 0;
                }
            }, b = function() {
                function e() {
                    r(this, e), this.queries = {}, this.pvar = {};
                }
                return i(e, [ {
                    key: "touch",
                    value: function(e) {
                        this.path = e.route, this.time = Date.now(), this.queries[e.route] ? this.query = this.queries[e.route] : this.query = void 0;
                    }
                }, {
                    key: "addQuery",
                    value: function(e, t) {
                        this.queries[e.route] = t ? this._getQuery(t) : null;
                    }
                }, {
                    key: "_getQuery",
                    value: function(e) {
                        return Object.keys(e).filter(function(e) {
                            return "wxShoppingListScene" !== e;
                        }).map(function(t) {
                            return "".concat(t, "=").concat(e[t]);
                        }).join("&");
                    }
                }, {
                    key: "touchRelatedPvarData",
                    value: function(e) {
                        var t = "".concat(e.p, "?").concat(e.q);
                        this.pvar[t] ? this.pvar[t].push(e) : this.pvar[t] = [ e ];
                    }
                } ]), e;
            }(), _ = {
                tap: [ "tap", "click" ],
                longtap: [ "longtap" ],
                input: [ "input" ],
                blur: [ "change", "blur" ],
                submit: [ "submit" ],
                focus: [ "focus" ]
            }, w = /^function[^\(]*\([^\)]+\).*[^\.]+\.([^\(]+)\(.*/, S = function() {
                function e(t) {
                    r(this, e), this.vueVM = t;
                }
                return i(e, [ {
                    key: "getHandle",
                    value: function(e) {
                        var t = e.type, n = e.target;
                        void 0 === n && (n = {});
                        var r = (e.currentTarget || n).dataset;
                        void 0 === r && (r = {});
                        var o = r.comkey;
                        void 0 === o && (o = "");
                        var i = r.eventid, a = -1 !== o.indexOf("_") ? "_" : ",", c = s(this.vueVM, o.split(a), a);
                        if (c) {
                            var u = _[t] || [ t ], l = f(c._vnode, i, u);
                            if (l.length) {
                                var d = l[0];
                                if (d.isProxied) return d.proxiedName;
                                try {
                                    var p = d.toString().replace("\n", "");
                                    if (p.match(w)) {
                                        var h = w.exec(p);
                                        if (h && h.length > 1) return h[1];
                                    }
                                } catch (e) {}
                                return d.name;
                            }
                        }
                    }
                }, {
                    key: "handleEvent",
                    value: function(e) {
                        var t = (e.currentTarget || e.target).dataset;
                        if (!t) return console.warn("事件信息不存在");
                        var n = t.eventOpts || t["event-opts"];
                        if (!n) return console.warn("事件信息不存在");
                        var r, o = e.type;
                        return n.forEach(function(e) {
                            var t = e[0], n = e[1];
                            t = "~" === (t = "^" === t.charAt(0) ? t.slice(1) : t).charAt(0) ? t.slice(1) : t, 
                            n && l(o, t) && n.forEach(function(e) {
                                r = e[0];
                            });
                        }), r;
                    }
                } ]), e;
            }(), x = d.prototype, O = t.EventEmitter;
            x.getListeners = function(e) {
                var t, n, r = this._getEvents();
                if (e instanceof RegExp) for (n in t = {}, r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]); else t = r[e] || (r[e] = []);
                return t;
            }, x.flattenListeners = function(e) {
                var t, n = [];
                for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                return n;
            }, x.getListenersAsObject = function(e) {
                var t, n = this.getListeners(e);
                return n instanceof Array && (t = {}, t[e] = n), t || n;
            }, x.addListener = function(e, t) {
                if (!g(t)) throw new TypeError("listener must be a function");
                var n, r = this.getListenersAsObject(e), o = "object" === a(t);
                for (n in r) r.hasOwnProperty(n) && -1 === p(r[n], t) && r[n].push(o ? t : {
                    listener: t,
                    once: !1
                });
                return this;
            }, x.on = h("addListener"), x.addOnceListener = function(e, t) {
                return this.addListener(e, {
                    listener: t,
                    once: !0
                });
            }, x.once = h("addOnceListener"), x.defineEvent = function(e) {
                return this.getListeners(e), this;
            }, x.defineEvents = function(e) {
                for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                return this;
            }, x.removeListener = function(e, t) {
                var n, r, o = this.getListenersAsObject(e);
                for (r in o) o.hasOwnProperty(r) && -1 !== (n = p(o[r], t)) && o[r].splice(n, 1);
                return this;
            }, x.off = h("removeListener"), x.addListeners = function(e, t) {
                return this.manipulateListeners(!1, e, t);
            }, x.removeListeners = function(e, t) {
                return this.manipulateListeners(!0, e, t);
            }, x.manipulateListeners = function(e, t, n) {
                var r, o, i = e ? this.removeListener : this.addListener, c = e ? this.removeListeners : this.addListeners;
                if ("object" !== a(t) || t instanceof RegExp) for (r = n.length; r--; ) i.call(this, t, n[r]); else for (r in t) t.hasOwnProperty(r) && (o = t[r]) && ("function" == typeof o ? i.call(this, r, o) : c.call(this, r, o));
                return this;
            }, x.removeEvent = function(e) {
                var t, n = a(e), r = this._getEvents();
                if ("string" === n) delete r[e]; else if (e instanceof RegExp) for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t]; else delete this._events;
                return this;
            }, x.removeAllListeners = h("removeEvent"), x.emitEvent = function(e, t) {
                var n, r, o, i, a = this.getListenersAsObject(e);
                for (i in a) if (a.hasOwnProperty(i)) for (n = a[i].slice(0), o = 0; o < n.length; o++) !0 === (r = n[o]).once && this.removeListener(e, r.listener), 
                r.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                return this;
            }, x.trigger = h("emitEvent"), x.emit = function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, t);
            }, x.setOnceReturnValue = function(e) {
                return this._onceReturnValue = e, this;
            }, x._getOnceReturnValue = function() {
                return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
            }, x._getEvents = function() {
                return this._events || (this._events = {});
            }, d.noConflict = function() {
                return t.EventEmitter = O, d;
            };
            var k = new d(), T = function() {
                function e(t) {
                    r(this, e), this.growingio = t, this.weixin = t.weixin, this.currentPage = new b(), 
                    this.scene = null, this._sessionId = null, this.cs1 = null, this.lastPageEvent = void 0, 
                    this.lastVstArgs = void 0, this.lastCloseTime = null, this.lastScene = void 0, this.keepAlive = t.keepAlive, 
                    this.isPauseSession = !1, this._observer = null, this.CLICK_TYPE = {
                        tap: "clck",
                        longpress: "lngprss",
                        longtap: "lngprss"
                    };
                }
                return i(e, [ {
                    key: "resetSessionId",
                    value: function() {
                        this._sessionId = null;
                    }
                }, {
                    key: "pauseSession",
                    value: function() {
                        this.isPauseSession = !0;
                    }
                }, {
                    key: "getVisitorId",
                    value: function() {
                        return this.weixin.uid;
                    }
                }, {
                    key: "getUserId",
                    value: function() {
                        return this.cs1;
                    }
                }, {
                    key: "getGioInfo",
                    value: function() {
                        return "giou=".concat(this.getVisitorId(), "&giocs1=").concat(this.getUserId(), "&gios=").concat(this.sessionId);
                    }
                }, {
                    key: "setUserId",
                    value: function(e) {
                        var t = String(e);
                        t && t.length < 100 && (this.cs1 = t, k.emitEvent("setCs1", [ t ]), this.lastPageEvent && this._sendEvent(this.lastPageEvent));
                    }
                }, {
                    key: "clearUserId",
                    value: function() {
                        this.cs1 = null;
                    }
                }, {
                    key: "collectImp",
                    value: function(e) {
                        var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        this.growingio.vue && (e = e.$mp.page), this.growingio.taro && (e = e.$scope);
                        var r = {};
                        this._observer && this._observer.disconnect(), e.isComponent ? this._observer = e.createIntersectionObserver({
                            observeAll: !0
                        }) : this._observer = wx.createIntersectionObserver(e, {
                            observeAll: !0
                        }), this._relative = n ? this._observer.relativeTo(n) : this._observer.relativeToViewport(), 
                        this._relative.observe(".growing_collect_imp", function(e) {
                            var n = e.dataset.gioTrack && e.dataset.gioTrack.name, o = e.dataset.gioTrack && e.dataset.gioTrack.properties;
                            e.id && !r[e.id] && (t.track(n, o), r[e.id] = !0);
                        });
                    }
                }, {
                    key: "appListener",
                    value: function(e, t, n) {
                        this.isPauseSession || (this.growingio.debug && console.log("App.", t, Date.now()), 
                        "onShow" == t ? (k.emitEvent("appShow"), this._parseScene(n), !this.lastCloseTime || Date.now() - this.lastCloseTime > this.keepAlive || this.lastScene && this.scene !== this.lastScene ? (this.resetSessionId(), 
                        this.sendVisitEvent(n, this.growingio.getLocationType), this.lastVstArgs = n, this.lastPageEvent = void 0) : this.useLastPageTime = !0) : "onHide" == t ? (this.lastScene = this.scene, 
                        this.growingio.forceFlush(), this.weixin.syncStorage(), this.isPauseSession || (this.lastCloseTime = Date.now(), 
                        this.sendVisitCloseEvent())) : "onError" == t && this.sendErrorEvent(n));
                    }
                }, {
                    key: "pageListener",
                    value: function(e, t, n) {
                        if (this.growingio.debug && console.log("Page.", e.route, "#", t, Date.now()), "onShow" === t) this.isPauseSession ? this.isPauseSession = !1 : (this.currentPage.touch(e), 
                        this.sendPage(e)); else if ("onLoad" === t) {
                            var r = n[0];
                            y.isEmpty(r) || this.currentPage.addQuery(e, r);
                        } else if ("onHide" === t) this._observer && this._observer.disconnect(); else if ("onUnload" === t) this.currentPage.pvar["".concat(this.currentPage.path, "?").concat(this.currentPage.query)] = void 0; else if ("onShareAppMessage" === t) {
                            r = null;
                            var o = null;
                            n.length >= 2 ? (r = n[0], o = n[1]) : 1 === n.length && (n[0].from ? r = n[0] : n[0].title && (o = n[0])), 
                            this.pauseSession(), this.sendPageShare(e, r, o);
                        } else if ("onTabItemTap" === t) {
                            var i = n[0];
                            this.sendTabClick(i);
                        }
                    }
                }, {
                    key: "actionListener",
                    value: function(e, t) {
                        if ("_cmlEventProxy" !== t) {
                            if ("handleProxy" === t && this.growingio.vueRootVMs && this.growingio.vueRootVMs[this.currentPage.path]) {
                                var n = new S(this.growingio.vueRootVMs[this.currentPage.path]).getHandle(e);
                                n && (t = n);
                            }
                            if ("__e" === t && this.growingio.vueRootVMs && this.growingio.vueRootVMs[this.currentPage.path]) {
                                var r = new S(this.growingio.vueRootVMs[this.currentPage.path]).handleEvent(e);
                                r && (t = r);
                            }
                            this.growingio.taroRootVMs && this.growingio.taroRootVMs[t] && (t = this.growingio.taroRootVMs[t]), 
                            this.growingio.debug && console.log("Click on ", t, Date.now()), "tap" === e.type || "longpress" === e.type ? this.sendClick(e, t) : -1 !== [ "change", "confirm", "blur" ].indexOf(e.type) ? this.sendChange(e, t) : "getuserinfo" === e.type ? (this.sendClick(e, t), 
                            e.detail && e.detail.userInfo && this.setVisitor(e.detail.userInfo)) : "getphonenumber" === e.type ? this.sendClick(e, t) : "contact" === e.type ? this.sendClick(e, t) : "submit" === e.type && this.sendSubmit(e, t);
                        }
                    }
                }, {
                    key: "getLocation",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wgs84";
                        this.growingio.getLocation = !0, this.sendVisitEvent(this.lastVstArgs, e);
                    }
                }, {
                    key: "sendVideoCstm",
                    value: function(e, t) {
                        this.track("video-".concat(e.type), e.var);
                    }
                }, {
                    key: "track",
                    value: function(e, t) {
                        if (null !== e && void 0 !== e && 0 !== e.length) {
                            var n = {
                                t: "cstm",
                                ptm: this.currentPage.time,
                                p: this.currentPage.path,
                                q: this.currentPage.query,
                                n: e
                            };
                            null !== t && "object" === a(t) && (n.var = t), this._sendEvent(n);
                        }
                    }
                }, {
                    key: "identify",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        if (void 0 !== e && 0 !== e.length) {
                            this.growingio.login(e);
                            var n = {
                                t: "vstr",
                                var: {
                                    openid: e,
                                    unionid: t
                                }
                            };
                            this._sendEvent(n);
                        }
                    }
                }, {
                    key: "setVisitor",
                    value: function(e) {
                        var t = {
                            t: "vstr",
                            var: e
                        };
                        this._sendEvent(t);
                    }
                }, {
                    key: "setUser",
                    value: function(e) {
                        var t = {
                            t: "ppl",
                            var: e
                        };
                        this._sendEvent(t);
                    }
                }, {
                    key: "setPage",
                    value: function(e) {
                        var t = {
                            t: "pvar",
                            ptm: this.currentPage.time,
                            p: this.currentPage.path,
                            q: this.currentPage.query,
                            var: e
                        };
                        this.currentPage.touchRelatedPvarData(t), this._sendEvent(t);
                    }
                }, {
                    key: "setEvar",
                    value: function(e) {
                        var t = {
                            t: "evar",
                            var: e
                        };
                        this._sendEvent(t);
                    }
                }, {
                    key: "sendVisitEvent",
                    value: function(e) {
                        var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "wgs84";
                        n = -1 !== [ "wgs84", "gcj02" ].indexOf(n) ? n : "wgs84";
                        var r = this.weixin.systemInfo, o = {
                            t: "vst",
                            tm: Date.now(),
                            av: y.sdkVer,
                            db: r.brand,
                            dm: r.model.replace(/<.*>/, ""),
                            sh: y.getScreenHeight(r),
                            sw: y.getScreenWidth(r),
                            os: y.getOS(r.platform),
                            osv: y.getOSV(r.version),
                            l: r.language
                        };
                        if (this.growingio.appVer && (o.cv = String(this.growingio.appVer)), e.length > 0) {
                            var i = e[0];
                            o.p = i.path, y.isEmpty(i.query) || (o.q = this.currentPage._getQuery(i.query)), 
                            o.ch = "scn:".concat(this.scene), i.referrerInfo && i.referrerInfo.appId && (o.rf = i.referrerInfo.appId);
                        }
                        this.weixin.getNetworkType().then(function(e) {
                            e && (o.nt = e.networkType, t._sendEvent(o), t.growingio.getLocation && t.weixin.requestLocation(n).then(function() {
                                null != t.weixin.location && (o.lat = t.weixin.location.latitude, o.lng = t.weixin.location.longitude, 
                                t._sendEvent(o));
                            }));
                        });
                    }
                }, {
                    key: "sendVisitCloseEvent",
                    value: function() {
                        var e = {
                            t: "cls",
                            p: this.currentPage.path,
                            q: this.currentPage.query
                        };
                        this._sendEvent(e);
                    }
                }, {
                    key: "sendErrorEvent",
                    value: function(e) {
                        if (e && e.length > 0) {
                            var t = e[0].split("\n");
                            if (t && t.length > 1) {
                                var n = t[1].split(";");
                                if (n && n.length > 1) {
                                    var r = n[1].match(/at ([^ ]+) page (.*) function/), o = {
                                        key: t[0],
                                        error: n[0]
                                    };
                                    r && r.length > 2 && (o.page = r[1], o.function = r[2]);
                                    var i = {
                                        t: "cstm",
                                        ptm: this.currentPage.time,
                                        p: this.currentPage.path,
                                        q: this.currentPage.query,
                                        n: "onError",
                                        var: o
                                    };
                                    this._sendEvent(i);
                                }
                            }
                        }
                    }
                }, {
                    key: "sendPage",
                    value: function(e) {
                        var t = this, n = {
                            t: "page",
                            tm: this.currentPage.time,
                            p: this.currentPage.path,
                            q: this.currentPage.query
                        };
                        this.lastPageEvent ? (n.rp = this.lastPageEvent.p, this.useLastPageTime && (n.tm = this.lastPageEvent.tm, 
                        this.useLastPageTime = !1)) : this.scene ? n.rp = "scn:".concat(this.scene) : n.rp = null, 
                        e.data && e.data.pvar && (n.var = e.data.pvar);
                        var r = this.weixin.getPageTitle(e);
                        r && r.length > 0 && (n.tl = r), this._sendEvent(n), this.lastPageEvent = n;
                        var o = this.currentPage.pvar["".concat(this.currentPage.path, "?").concat(this.currentPage.query)];
                        o && o.length > 0 && o.map(function(e) {
                            e.ptm = t.currentPage.time, t._sendEvent(e);
                        });
                    }
                }, {
                    key: "sendPageShare",
                    value: function(e, t, n) {
                        var r = {
                            t: "cstm",
                            ptm: this.currentPage.time,
                            p: this.currentPage.path,
                            q: this.currentPage.query,
                            n: "onShareAppMessage",
                            var: {
                                from: t ? t.from : void 0,
                                target: t && t.target ? t.target.id : void 0,
                                title: n ? n.title : void 0,
                                path: n ? decodeURI(n.path) : void 0
                            }
                        };
                        this._sendEvent(r);
                    }
                }, {
                    key: "sendClick",
                    value: function(e, t) {
                        var n = {
                            t: this.CLICK_TYPE[e.type] || "clck",
                            ptm: this.currentPage.time,
                            p: this.currentPage.path,
                            q: this.currentPage.query
                        }, r = e.currentTarget, o = {
                            x: "".concat(r.id, "#").concat(t)
                        };
                        r.dataset.title ? o.v = r.dataset.title : r.dataset.src && (o.h = r.dataset.src), 
                        void 0 !== r.dataset.index && (/^[\d]+$/.test(r.dataset.index) ? o.idx = parseInt(r.dataset.index) : o.idx = -1), 
                        n.e = [ o ], this._sendEvent(n);
                    }
                }, {
                    key: "sendSubmit",
                    value: function(e, t) {
                        var n = {
                            t: "sbmt",
                            ptm: this.currentPage.time,
                            p: this.currentPage.path,
                            q: this.currentPage.query
                        }, r = e.currentTarget, o = {
                            x: "".concat(r.id, "#").concat(t)
                        };
                        n.e = [ o ], this._sendEvent(n);
                    }
                }, {
                    key: "sendChange",
                    value: function(e, t) {
                        var n = {
                            t: "chng",
                            ptm: this.currentPage.time,
                            p: this.currentPage.path,
                            q: this.currentPage.query
                        }, r = e.currentTarget, o = {
                            x: "".concat(r.id, "#").concat(t)
                        };
                        if (-1 !== [ "blur", "change", "confirm" ].indexOf(e.type) && r.dataset.growingTrack) {
                            if (!e.detail.value || 0 === e.detail.value.length) return;
                            "string" == typeof e.detail.value ? o.v = e.detail.value : "[object Array]" === Object.prototype.toString.call(e.detail.value) && (o.v = e.detail.value.join(","));
                        }
                        "change" === e.type && e.detail && e.detail.source && "autoplay" === e.detail.source || (n.e = [ o ], 
                        this._sendEvent(n));
                    }
                }, {
                    key: "sendTabClick",
                    value: function(e) {
                        var t = {
                            t: "clck",
                            ptm: this.currentPage.time,
                            p: this.currentPage.path,
                            q: this.currentPage.query,
                            e: [ {
                                x: "#onTabItemTap",
                                v: e.text,
                                idx: e.index,
                                h: JSON.stringify(e.pagePath)
                            } ]
                        };
                        this._sendEvent(t);
                    }
                }, {
                    key: "_sendEvent",
                    value: function(e) {
                        if (e.u = this.weixin.uid, e.s = this.sessionId, e.tm = e.tm || Date.now(), e.d = this.growingio.appId, 
                        e.b = "MinP", null !== this.cs1 && (e.cs1 = this.cs1), e.var) {
                            var t = e.var;
                            Object.keys(t).forEach(function(n) {
                                "string" != typeof t[n] && (e.var[n] = JSON.stringify(t[n]));
                            });
                        }
                        this.growingio.upload(e);
                    }
                }, {
                    key: "_parseScene",
                    value: function(e) {
                        if (e.length > 0) {
                            var t = e[0];
                            t.query.wxShoppingListScene ? this.scene = t.query.wxShoppingListScene : t.scene && (this.scene = t.scene);
                        }
                    }
                }, {
                    key: "sessionId",
                    get: function() {
                        return null === this._sessionId && (this._sessionId = y.guid()), this._sessionId;
                    }
                } ]), e;
            }(), j = function() {
                function e(t) {
                    r(this, e), this._location = null, this._systemInfo = null, this._uid = wx.getStorageSync("_growing_uid_"), 
                    this._uid && 36 !== this._uid.length && (t.forceLogin = !1), this._esid = wx.getStorageSync("_growing_esid_");
                }
                return i(e, [ {
                    key: "syncStorage",
                    value: function() {
                        wx.getStorageSync("_growing_uid_") || wx.setStorageSync("_growing_uid_", this._uid);
                    }
                }, {
                    key: "requestLocation",
                    value: function(e) {
                        var t = this;
                        return new Promise(function(n) {
                            t._getLocation(e).then(function(e) {
                                return t._location = e, n(e);
                            });
                        });
                    }
                }, {
                    key: "getNetworkType",
                    value: function() {
                        return new Promise(function(e) {
                            wx.getNetworkType({
                                success: function(t) {
                                    return e(t);
                                },
                                fail: function() {
                                    return e(null);
                                }
                            });
                        });
                    }
                }, {
                    key: "getPageTitle",
                    value: function(e) {
                        var t = "";
                        try {
                            if (e.data.title && e.data.title.length > 0 && (t = Array.isArray(e.data.title) ? e.data.title.join(" ") : e.data.title), 
                            0 === t.length && __wxConfig) {
                                if (__wxConfig.tabBar) {
                                    var n = __wxConfig.tabBar.list.find(function(t) {
                                        return t.pathPath == e.route || t.pagePath == "".concat(e.route, ".html");
                                    });
                                    n && n.text && (t = n.text);
                                }
                                if (0 == t.length) {
                                    var r = __wxConfig.page[e.route] || __wxConfig.page["".concat(e.route, ".html")];
                                    t = r ? r.window.navigationBarTitleText : __wxConfig.global.window.navigationBarTitleText;
                                }
                            }
                        } catch (e) {}
                        return t;
                    }
                }, {
                    key: "_getSetting",
                    value: function() {
                        return new Promise(function(e) {
                            wx.getSetting({
                                success: e,
                                fail: e
                            });
                        });
                    }
                }, {
                    key: "_getLocation",
                    value: function(e) {
                        return new Promise(function(t) {
                            wx.getLocation({
                                type: e,
                                success: t,
                                fail: function() {
                                    return t(null);
                                }
                            });
                        });
                    }
                }, {
                    key: "location",
                    get: function() {
                        return this._location;
                    }
                }, {
                    key: "systemInfo",
                    get: function() {
                        return null == this._systemInfo && (this._systemInfo = wx.getSystemInfoSync()), 
                        this._systemInfo;
                    }
                }, {
                    key: "esid",
                    set: function(e) {
                        this._esid = e, wx.setStorageSync("_growing_esid_", this._esid);
                    },
                    get: function() {
                        return this._esid || (this._esid = 1), this._esid;
                    }
                }, {
                    key: "uid",
                    set: function(e) {
                        this._uid = e, wx.setStorageSync("_growing_uid_", this._uid);
                    },
                    get: function() {
                        return this._uid || (this.uid = y.guid()), this._uid;
                    }
                } ]), e;
            }(), P = function(e) {
                var t = I.observer.growingio;
                t && t.followShare && e && e.path && (-1 === e.path.indexOf("?") ? e.path = e.path + "?suid=" + t.weixin.uid : e.path = e.path + "&suid=" + t.weixin.uid);
            }, I = {
                defaultPageCallbacks: {},
                defaultAppCallbacks: {},
                appHandlers: [ "onShow", "onHide", "onError" ],
                pageHandlers: [ "onLoad", "onShow", "onShareAppMessage", "onTabItemTap", "onHide", "onUnload" ],
                actionEventTypes: [ "tap", "longpress", "blur", "change", "submit", "confirm", "getuserinfo", "getphonenumber", "contact" ],
                originalPage: Page,
                originalApp: App,
                originalComponent: Component,
                originalBehavior: Behavior,
                hook: function(e, t) {
                    return function() {
                        var n, r = arguments ? arguments[0] : void 0;
                        if (r && r.currentTarget && -1 != I.actionEventTypes.indexOf(r.type)) try {
                            I.observer.actionListener(r, e);
                        } catch (e) {
                            console.error(e);
                        }
                        if (this._growing_app_ && "onShow" !== e ? n = t.apply(this, arguments) : this._growing_page_ && -1 === [ "onShow", "onLoad", "onTabItemTap", "onHide", "onUnload" ].indexOf(e) ? n = t.apply(this, arguments) : this._growing_app_ || this._growing_page_ || (n = t.apply(this, arguments)), 
                        this._growing_app_ && -1 !== I.appHandlers.indexOf(e)) {
                            try {
                                I.defaultAppCallbacks[e].apply(this, arguments);
                            } catch (e) {
                                console.error(e);
                            }
                            "onShow" === e && (n = t.apply(this, arguments));
                        }
                        if (this._growing_page_ && -1 !== I.pageHandlers.indexOf(e)) {
                            var o = Array.prototype.slice.call(arguments);
                            n && o.push(n);
                            try {
                                I.defaultPageCallbacks[e].apply(this, o);
                            } catch (e) {
                                console.error(e);
                            }
                            -1 !== [ "onShow", "onLoad", "onTabItemTap", "onHide", "onUnload" ].indexOf(e) ? n = t.apply(this, arguments) : P(n);
                        }
                        return n;
                    };
                },
                hookComponent: function(e, t) {
                    return function() {
                        var n = arguments ? arguments[0] : void 0;
                        if (n && n.currentTarget && -1 != I.actionEventTypes.indexOf(n.type)) try {
                            I.observer.actionListener(n, e);
                        } catch (e) {
                            console.error(e);
                        }
                        return t.apply(this, arguments);
                    };
                },
                instrument: function(e) {
                    for (var t in e) "function" == typeof e[t] && (e[t] = this.hook(t, e[t]));
                    return e._growing_app_ && I.appHandlers.map(function(t) {
                        e[t] || (e[t] = I.defaultAppCallbacks[t]);
                    }), e._growing_page_ && I.pageHandlers.map(function(t) {
                        e[t] || "onShareAppMessage" === t || (e[t] = I.defaultPageCallbacks[t]);
                    }), e;
                },
                instrumentTaroPageComponent: function(e) {
                    if (e.methods) {
                        var t = e.methods;
                        for (var n in t) !function(n) {
                            if ("function" == typeof t[n] && -1 != I.pageHandlers.indexOf(n)) {
                                var r = t[n];
                                e.methods[n] = function() {
                                    I.observer.pageListener(this, n, arguments);
                                    var e = r.apply(this, arguments);
                                    return "onShareAppMessage" === n && P(e), e;
                                };
                            }
                        }(n);
                    }
                    return e;
                },
                instrumentUniappPageComponent: function(e) {
                    for (var t in e) !function(t) {
                        if ("function" == typeof e[t] && -1 != I.pageHandlers.indexOf(t)) {
                            var n = e[t];
                            e[t] = function() {
                                I.observer.pageListener(this, t, arguments);
                                var e = n.apply(this, arguments);
                                return "onShareAppMessage" === t && P(e), e;
                            };
                        }
                    }(t);
                    return e;
                },
                instrumentComponent: function(e) {
                    if (e.methods) {
                        var t = e.methods;
                        for (var n in t) "function" == typeof t[n] && (e.methods[n] = this.hookComponent(n, t[n]));
                    }
                    return e;
                },
                GrowingPage: function(e) {
                    return e._growing_page_ = !0, I.originalPage(I.instrument(e));
                },
                GrowingComponent: function(e) {
                    return I.originalComponent(I.instrumentComponent(e));
                },
                GrowingBehavior: function(e) {
                    return I.originalBehavior(I.instrumentComponent(e));
                },
                GrowingApp: function(e) {
                    return e._growing_app_ = !0, I.originalApp(I.instrument(e));
                },
                initInstrument: function(t, n) {
                    I.observer = t, I.pageHandlers.forEach(function(e) {
                        I.defaultPageCallbacks[e] = function() {
                            this.__route__ && I.observer.pageListener(this, e, arguments);
                        };
                    }), I.appHandlers.forEach(function(e) {
                        I.defaultAppCallbacks[e] = function() {
                            I.observer.appListener(this, e, arguments);
                        };
                    }), n ? (e.GioPage = I.GrowingPage, e.GioApp = I.GrowingApp, e.GioComponent = I.GrowingComponent, 
                    e.GioBehavior = I.GrowingBehavior, e.trackApp = function() {
                        var e = arguments[0];
                        return e._growing_app_ = !0, I.instrument(e);
                    }, e.trackPage = function() {
                        var e = arguments[0];
                        return e._growing_page_ = !0, I.instrument(e);
                    }, e.trackComponent = function() {
                        return I.instrument(arguments[0]);
                    }, e.trackBehavior = function() {
                        return I.instrument(arguments[0]);
                    }) : (Page = function() {
                        return I.GrowingPage(arguments[0]);
                    }, App = function() {
                        return I.GrowingApp(arguments[0]);
                    }, Component = function() {
                        return I.GrowingComponent(arguments[0]);
                    }, Behavior = function() {
                        return I.GrowingBehavior(arguments[0]);
                    });
                }
            }, A = new (function() {
                function t() {
                    r(this, t), this.uploadingMessages = [], this.start = !1;
                }
                return i(t, [ {
                    key: "init",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.start || (this.start = !0, this.projectId = e, "string" == typeof t ? this.appId = t : (n = t, 
                        this.appId = y.getAppId()), this.appVer = n.version, this.debug = n.debug || !1, 
                        this.forceLogin = n.forceLogin || !1, this.followShare = void 0 === n.followShare || n.followShare, 
                        this.usePlugin = n.usePlugin || !1, this.getLocation = ("object" === a(n.getLocation) ? n.getLocation.autoGet : n.getLocation) || !1, 
                        this.getLocationType = "object" === a(n.getLocation) && n.getLocation.type || "wgs84", 
                        this.keepAlive = Number(n.keepAlive) || 3e5, this.vue = !!n.vue, this.taro = !!n.taro, 
                        this.dataCollect = !(n.stopTrack && !n.dataCollect), this.weixin = new j(this), 
                        this.esid = this.weixin.esid, this.host = "https://wxapi.growingio.com", n.host && n.host.indexOf("http") >= 0 && (this.host = "https://" + n.host.slice(n.host.indexOf("://") + 3)), 
                        this.uploader = new m(this), this.observer = new T(this), this.start = !0, n.vue && (this.vueRootVMs = {}, 
                        this._proxyVue(n.vue)), n.taro && (this.taroRootVMs = {}, this._proxyTaro(n.taro)), 
                        n.cml && this._proxyCml(n.cml), this._start());
                    }
                }, {
                    key: "setVue",
                    value: function(e) {
                        this.vueRootVMs || (this.vueRootVMs = {}), this.vue = !0, this._proxyVue(e);
                    }
                }, {
                    key: "setDataCollect",
                    value: function(e) {
                        this.dataCollect = e;
                    }
                }, {
                    key: "login",
                    value: function(e) {
                        if (this.forceLogin) {
                            this.weixin.uid = e, this.forceLogin = !1;
                            var t = !0, n = !1, r = void 0;
                            try {
                                for (var o, i = this.uploadingMessages[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                                    var a = o.value;
                                    a.u = e, this._upload(a);
                                }
                            } catch (e) {
                                n = !0, r = e;
                            } finally {
                                try {
                                    t || null == i.return || i.return();
                                } finally {
                                    if (n) throw r;
                                }
                            }
                        }
                    }
                }, {
                    key: "upload",
                    value: function(e) {
                        this.dataCollect && (this.forceLogin ? this.uploadingMessages.push(e) : this._upload(e));
                    }
                }, {
                    key: "forceFlush",
                    value: function() {
                        this.weixin.esid = this.esid, this.uploader.forceFlush();
                    }
                }, {
                    key: "proxy",
                    value: function(e, t) {
                        try {
                            if ("setVue" === e) this.setVue(t[0]); else if ("setDataCollect" === e) this.setDataCollect(t[0]); else if ("setStopTrack" === e) this.setDataCollect(!t[0]); else if (this.observer && this.observer[e]) return this.observer[e].apply(this.observer, t);
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }, {
                    key: "_start",
                    value: function() {
                        I.initInstrument(this.observer, this.usePlugin);
                        try {
                            e && (e.App = App, e.Page = Page, e.Component = Component);
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }, {
                    key: "_upload",
                    value: function(e) {
                        e.esid = this.esid++, this.debug && console.info("generate new event", JSON.stringify(e, 0, 2)), 
                        k.emitEvent("upload", [ e ]), this.uploader.upload(e);
                    }
                }, {
                    key: "_proxyTaro",
                    value: function(e) {
                        var t = this, n = e.createComponent;
                        e.createComponent = function(e, r) {
                            for (var o = e; o && o.prototype; ) {
                                for (var i = Object.keys(Object.getOwnPropertyDescriptors(o.prototype) || {}), a = 0; a < i.length; a++) if (i[a].startsWith("func__")) {
                                    var c = o.name, u = i[a].slice(6), s = e.prototype[i[a]].toString().match(/this\.__triggerPropsFn\(\"(.+)\",/)[1];
                                    t.taroRootVMs[i[a]] = c + "_" + s + "_" + u;
                                }
                                o = Object.getPrototypeOf(o);
                            }
                            var f = n(e, r);
                            return r && I.instrumentTaroPageComponent(f), f;
                        };
                    }
                }, {
                    key: "_proxyCml",
                    value: function(e) {
                        var t = e.createApp;
                        e.createApp = function(e) {
                            var n = t(e);
                            return I.GrowingApp(n.options), n;
                        };
                    }
                }, {
                    key: "_proxyVue",
                    value: function(e) {
                        if (void 0 !== e.mixin) {
                            var t = this;
                            e.mixin({
                                created: function() {
                                    if (this.$options.methods) for (var e = Object.keys(this.$options.methods), t = 0, n = Object.keys(this); t < n.length; t++) {
                                        var r = n[t];
                                        e.indexOf(r) >= 0 && "function" == typeof this[r] && (Object.defineProperty(this[r], "proxiedName", {
                                            value: r
                                        }), Object.defineProperty(this[r], "isProxied", {
                                            value: !0
                                        }));
                                    }
                                },
                                beforeMount: function() {
                                    var e = this.$root;
                                    e.$mp && "page" === e.$mp.mpType ? e.$mp.page && (t.vueRootVMs[e.$mp.page.route] = e) : "page" === e.mpType && e.$mp.page && (t.vueRootVMs[e.$mp.page.route] = e, 
                                    I.instrumentUniappPageComponent(e.$mp.page));
                                }
                            });
                        }
                    }
                } ]), t;
            }())();
            t.growingio = A;
            var C = function() {
                var e = arguments[0];
                if (e) {
                    var t = 2 <= arguments.length ? [].slice.call(arguments, 1) : [];
                    if ("init" !== e) return A.proxy(e, t);
                    if (t.length < 2) console.log("初始化 GrowingIO SDK 失败。请使用 gio('init', '你的GrowingIO项目ID', '你的微信APP_ID', options);"); else {
                        var n = t[0], r = t[1], o = t[2];
                        A.init(n, r, o);
                    }
                }
            };
            if (console.log("init growingio..."), y.compareVersion(y.sdkVer, "1.9.0") >= 0 && !A.start) {
                var D = n("804c").default;
                D.appId ? A.init(D.projectId, D.appId, D) : A.init(D.projectId, y.getAppId(), D);
            }
            var E = I.GrowingPage;
            t.GioPage = E;
            var M = I.GrowingApp;
            t.GioApp = M;
            var $ = I.GrowingComponent;
            t.GioComponent = $;
            var L = I.GioBehavior;
            t.GioBehavior = L;
            var N = k;
            t.gioEmitter = N, e.__growing__ = {
                gioEmitter: N,
                gio: C,
                growingio: A
            };
            var U = C;
            t.default = U;
        }).call(this, n("c8ba"));
    },
    a852: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return 5 === r(e).getDay();
        };
    },
    a935: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return r(e).getTime() < new Date().getTime();
        };
    },
    abd4: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getTime() === o.getTime();
        };
    },
    ac34: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.postMsgView = function(e) {
            return a.get("/api/pc/msgView/".concat(e));
        };
        var o = r(n("4360")), i = r(n("a06c")), a = new (n("ac60"))();
        a.config.headers = {
            "X-Appgo-Platform": "device=wxapp",
            "X-Track-Info": JSON.stringify({
                AppId: "mini.stock"
            })
        }, a.config.timeout = 6e4, a.config.baseURL = i.default.api, a.interceptors.request.use(function(e) {
            return e.headers["X-Ivanka-Token"] = o.default.getters["user/token"], e.headers["X-Device-ID"] = o.default.getters["user/openId"], 
            e.headers["X-Taotie-Device-ID"] = o.default.getters["user/openId"], e;
        }, function(e) {
            return Promise.reject(e);
        }), a.interceptors.response.use(function(e) {
            return e.data;
        }, function(e) {
            return Promise.reject(e);
        });
    },
    ac60: function(e, t, n) {
        !function(t, n) {
            e.exports = n();
        }(0, function() {
            return function(e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
                }
                var n = {};
                return t.m = e, t.c = n, t.i = function(e) {
                    return e;
                }, t.d = function(e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    });
                }, t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default;
                    } : function() {
                        return e;
                    };
                    return t.d(n, "a", n), n;
                }, t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }, t.p = "", t(t.s = 13);
            }([ function(e, t, n) {
                var r = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : _typeof(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
                };
                e.exports = {
                    type: function(e) {
                        return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
                    },
                    isObject: function(e, t) {
                        return t ? "object" === this.type(e) : e && "object" === (void 0 === e ? "undefined" : r(e));
                    },
                    isFormData: function(e) {
                        return "undefined" != typeof FormData && e instanceof FormData;
                    },
                    trim: function(e) {
                        return e.replace(/(^\s*)|(\s*$)/g, "");
                    },
                    encode: function(e) {
                        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                    },
                    formatParams: function(e) {
                        function t(e, i) {
                            var a = o.encode, c = o.type(e);
                            if ("array" == c) e.forEach(function(e, n) {
                                o.isObject(e) || (n = ""), t(e, i + "%5B" + n + "%5D");
                            }); else if ("object" == c) for (var u in e) t(e[u], i ? i + "%5B" + a(u) + "%5D" : a(u)); else r || (n += "&"), 
                            r = !1, n += i + "=" + a(e);
                        }
                        var n = "", r = !0, o = this;
                        return this.isObject(e) ? (t(e, ""), n) : e;
                    },
                    merge: function(e, t) {
                        for (var n in t) e.hasOwnProperty(n) ? this.isObject(t[n], 1) && this.isObject(e[n], 1) && this.merge(e[n], t[n]) : e[n] = t[n];
                        return e;
                    }
                };
            }, function(e, t, n) {
                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                var o = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : _typeof(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
                }, i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                            Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t;
                    };
                }(), a = n(0), c = "undefined" != typeof document;
                e.exports = function(e) {
                    return function() {
                        function t() {
                            r(this, t), this.requestHeaders = {}, this.readyState = 0, this.timeout = 0, this.responseURL = "", 
                            this.responseHeaders = {};
                        }
                        return i(t, [ {
                            key: "_call",
                            value: function(e) {
                                this[e] && this[e].apply(this, [].splice.call(arguments, 1));
                            }
                        }, {
                            key: "_changeReadyState",
                            value: function(e) {
                                this.readyState = e, this._call("onreadystatechange");
                            }
                        }, {
                            key: "open",
                            value: function(e, t) {
                                if (this.method = e, t) {
                                    if (0 !== (t = a.trim(t)).indexOf("http") && c) {
                                        var n = document.createElement("a");
                                        n.href = t, t = n.href;
                                    }
                                } else t = location.href;
                                this.responseURL = t, this._changeReadyState(1);
                            }
                        }, {
                            key: "send",
                            value: function(t) {
                                var n = this;
                                t = t || null;
                                var r = this;
                                if (e) {
                                    var i = {
                                        method: r.method,
                                        url: r.responseURL,
                                        headers: r.requestHeaders || {},
                                        body: t
                                    };
                                    a.merge(i, r._options || {}), "GET" === i.method && (i.body = null), r._changeReadyState(3);
                                    var u = void 0;
                                    r.timeout = r.timeout || 0, r.timeout > 0 && (u = setTimeout(function() {
                                        3 === r.readyState && (n._call("onloadend"), r._changeReadyState(0), r._call("ontimeout"));
                                    }, r.timeout)), i.timeout = r.timeout, e(i, function(e) {
                                        function t(t) {
                                            var n = e[t];
                                            return delete e[t], n;
                                        }
                                        if (3 === r.readyState) {
                                            clearTimeout(u), r.status = t("statusCode") - 0;
                                            var n = t("responseText"), i = t("statusMessage");
                                            if (r.status) {
                                                var a = t("headers"), s = {};
                                                for (var f in a) {
                                                    var l = a[f], d = f.toLowerCase();
                                                    "object" === (void 0 === l ? "undefined" : o(l)) ? s[d] = l : (s[d] = s[d] || [], 
                                                    s[d].push(l));
                                                }
                                                var p = s["set-cookie"];
                                                c && p && p.forEach(function(e) {
                                                    document.cookie = e.replace(/;\s*httpOnly/gi, "");
                                                }), r.responseHeaders = s, r.statusText = i || "", r.response = r.responseText = n, 
                                                r._response = e, r._changeReadyState(4), r._call("onload");
                                            } else r.statusText = n, r._call("onerror", {
                                                msg: i
                                            });
                                            r._call("onloadend");
                                        }
                                    });
                                } else console.error("Ajax require adapter");
                            }
                        }, {
                            key: "setRequestHeader",
                            value: function(e, t) {
                                this.requestHeaders[a.trim(e)] = t;
                            }
                        }, {
                            key: "getResponseHeader",
                            value: function(e) {
                                return (this.responseHeaders[e.toLowerCase()] || "").toString() || null;
                            }
                        }, {
                            key: "getAllResponseHeaders",
                            value: function() {
                                var e = "";
                                for (var t in this.responseHeaders) e += t + ":" + this.getResponseHeader(t) + "\r\n";
                                return e || null;
                            }
                        }, {
                            key: "abort",
                            value: function(e) {
                                this._changeReadyState(0), this._call("onerror", {
                                    msg: e
                                }), this._call("onloadend");
                            }
                        } ], [ {
                            key: "setAdapter",
                            value: function(t) {
                                e = t;
                            }
                        } ]), t;
                    }();
                };
            }, function(e, t, n) {
                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                            Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t;
                    };
                }(), i = n(0), a = "undefined" != typeof document, c = function() {
                    function e(t) {
                        function n(e) {
                            function t() {
                                e.p = n = r = null;
                            }
                            var n = void 0, r = void 0;
                            i.merge(e, {
                                lock: function() {
                                    n || (e.p = new Promise(function(e, t) {
                                        n = e, r = t;
                                    }));
                                },
                                unlock: function() {
                                    n && (n(), t());
                                },
                                clear: function() {
                                    r && (r("cancel"), t());
                                }
                            });
                        }
                        r(this, e), this.engine = t || XMLHttpRequest, this.default = this;
                        var o = this.interceptors = {
                            response: {
                                use: function(e, t) {
                                    this.handler = e, this.onerror = t;
                                }
                            },
                            request: {
                                use: function(e) {
                                    this.handler = e;
                                }
                            }
                        }, a = o.request;
                        n(o.response), n(a), this.config = {
                            method: "GET",
                            baseURL: "",
                            headers: {},
                            timeout: 0,
                            params: {},
                            parseJson: !0,
                            withCredentials: !1
                        };
                    }
                    return o(e, [ {
                        key: "request",
                        value: function(e, t, n) {
                            var r = this, o = new this.engine(), c = "Content-Type", u = c.toLowerCase(), s = this.interceptors, f = s.request, l = s.response, d = f.handler, p = new Promise(function(s, p) {
                                function h(e) {
                                    return e && e.then && e.catch;
                                }
                                function g(e, t) {
                                    e ? e.then(function() {
                                        t();
                                    }) : t();
                                }
                                function v(n) {
                                    function r(e, t, r) {
                                        g(l.p, function() {
                                            if (e) {
                                                r && (t.request = n);
                                                var o = e.call(l, t, Promise);
                                                t = void 0 === o ? t : o;
                                            }
                                            h(t) || (t = Promise[0 === r ? "resolve" : "reject"](t)), t.then(function(e) {
                                                s(e);
                                            }).catch(function(e) {
                                                p(e);
                                            });
                                        });
                                    }
                                    function f(e) {
                                        e.engine = o, r(l.onerror, e, -1);
                                    }
                                    function d(e, t) {
                                        this.message = e, this.status = t;
                                    }
                                    t = n.body, e = i.trim(n.url);
                                    var v = i.trim(n.baseURL || "");
                                    if (e || !a || v || (e = location.href), 0 !== e.indexOf("http")) {
                                        var m = "/" === e[0];
                                        if (!v && a) {
                                            var y = location.pathname.split("/");
                                            y.pop(), v = location.protocol + "//" + location.host + (m ? "" : y.join("/"));
                                        }
                                        if ("/" !== v[v.length - 1] && (v += "/"), e = v + (m ? e.substr(1) : e), a) {
                                            var b = document.createElement("a");
                                            b.href = e, e = b.href;
                                        }
                                    }
                                    var _ = i.trim(n.responseType || ""), w = -1 !== [ "GET", "HEAD", "DELETE", "OPTION" ].indexOf(n.method), S = i.type(t), x = n.params || {};
                                    w && "object" === S && (x = i.merge(t, x));
                                    var O = [];
                                    (x = i.formatParams(x)) && O.push(x), w && t && "string" === S && O.push(t), O.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + O.join("&")), 
                                    o.open(n.method, e);
                                    try {
                                        o.withCredentials = !!n.withCredentials, o.timeout = n.timeout || 0, "stream" !== _ && (o.responseType = _);
                                    } catch (e) {}
                                    var k = n.headers[c] || n.headers[u], T = "application/x-www-form-urlencoded";
                                    for (var j in i.trim((k || "").toLowerCase()) === T ? t = i.formatParams(t) : i.isFormData(t) || -1 === [ "object", "array" ].indexOf(i.type(t)) || (T = "application/json;charset=utf-8", 
                                    t = JSON.stringify(t)), k || w || (n.headers[c] = T), n.headers) if (j === c && i.isFormData(t)) delete n.headers[j]; else try {
                                        o.setRequestHeader(j, n.headers[j]);
                                    } catch (e) {}
                                    o.onload = function() {
                                        try {
                                            var e = o.response || o.responseText;
                                            e && n.parseJson && -1 !== (o.getResponseHeader(c) || "").indexOf("json") && !i.isObject(e) && (e = JSON.parse(e));
                                            var t = o.responseHeaders;
                                            if (!t) {
                                                t = {};
                                                var a = (o.getAllResponseHeaders() || "").split("\r\n");
                                                a.pop(), a.forEach(function(e) {
                                                    if (e) {
                                                        var n = e.split(":")[0];
                                                        t[n] = o.getResponseHeader(n);
                                                    }
                                                });
                                            }
                                            var u = o.status, s = o.statusText, p = {
                                                data: e,
                                                headers: t,
                                                status: u,
                                                statusText: s
                                            };
                                            if (i.merge(p, o._response), u >= 200 && u < 300 || 304 === u) p.engine = o, p.request = n, 
                                            r(l.handler, p, 0); else {
                                                var h = new d(s, u);
                                                h.response = p, f(h);
                                            }
                                        } catch (h) {
                                            f(new d(h.msg, o.status));
                                        }
                                    }, o.onerror = function(e) {
                                        f(new d(e.msg || "Network Error", 0));
                                    }, o.ontimeout = function() {
                                        f(new d("timeout [ " + o.timeout + "ms ]", 1));
                                    }, o._options = n, setTimeout(function() {
                                        o.send(w ? null : t);
                                    }, 0);
                                }
                                i.isObject(e) && (n = e, e = n.url), (n = n || {}).headers = n.headers || {}, g(f.p, function() {
                                    i.merge(n, JSON.parse(JSON.stringify(r.config)));
                                    var o = n.headers;
                                    o[c] = o[c] || o[u] || "", delete o[u], n.body = t || n.body, e = i.trim(e || ""), 
                                    n.method = n.method.toUpperCase(), n.url = e;
                                    var a = n;
                                    d && (a = d.call(f, n, Promise) || n), h(a) || (a = Promise.resolve(a)), a.then(function(e) {
                                        e === n ? v(e) : s(e);
                                    }, function(e) {
                                        p(e);
                                    });
                                });
                            });
                            return p.engine = o, p;
                        }
                    }, {
                        key: "all",
                        value: function(e) {
                            return Promise.all(e);
                        }
                    }, {
                        key: "spread",
                        value: function(e) {
                            return function(t) {
                                return e.apply(null, t);
                            };
                        }
                    } ]), e;
                }();
                c.default = c, [ "get", "post", "put", "patch", "head", "delete" ].forEach(function(e) {
                    c.prototype[e] = function(t, n, r) {
                        return this.request(t, n, i.merge({
                            method: e
                        }, r));
                    };
                }), [ "lock", "unlock", "clear" ].forEach(function(e) {
                    c.prototype[e] = function() {
                        this.interceptors.request[e]();
                    };
                }), e.exports = c;
            }, , , , , function(e, t, n) {
                e.exports = function(e, t) {
                    var n = {
                        method: e.method,
                        url: e.url,
                        dataType: e.dataType || void 0,
                        header: e.headers,
                        data: e.body || {},
                        responseType: e.responseType || "text",
                        success: function(e) {
                            t({
                                statusCode: e.statusCode,
                                responseText: e.data,
                                headers: e.header,
                                statusMessage: e.errMsg
                            });
                        },
                        fail: function(e) {
                            t({
                                statusCode: e.statusCode || 0,
                                statusMessage: e.errMsg
                            });
                        }
                    };
                    wx.request(n);
                };
            }, , , , , , function(e, t, n) {
                var r = n(2), o = n(1)(n(7));
                e.exports = function(e) {
                    return new r(e || o);
                };
            } ]);
        });
    },
    acc4: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e).getFullYear();
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0;
        };
    },
    acc9: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getStockReal = function(e) {
            return i.get("/market/real", {
                prod_code: e,
                fields: "prod_name,last_px,px_change,px_change_rate"
            }).then(function(e) {
                var t;
                try {
                    t = (0, o.transformUnderscoreApi)((0, o.formatWowsStyleObject)(e.snapshot, e.fields));
                } catch (e) {
                    console.error(e);
                }
                return t || {};
            });
        };
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("a06c")), o = n("4be4"), i = new (n("ac60"))();
        i.config.headers = {}, i.config.timeout = 6e4, i.config.baseURL = r.default.ddc, 
        i.interceptors.request.use(function(e) {
            return e;
        }, function(e) {
            return Promise.reject(e);
        }), i.interceptors.response.use(function(e) {
            return [ 2e4, 200 ].some(function(t) {
                return t === e.data.code;
            }) ? (0, o.transformUnderscoreApi)(e.data.data) : Promise.reject(e);
        }, function(e) {
            return Promise.reject(e);
        });
    },
    af1b: function(e, t, n) {
        var r = n("ec1f");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 1e3 * n);
        };
    },
    b0dc: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getLocale = t.register = void 0;
        var r = "second_minute_hour_day_week_month_year".split("_"), o = "秒_分钟_小时_天_周_个月_年".split("_"), i = function(e, t) {
            if (0 === t) return [ "just now", "right now" ];
            var n = r[parseInt(t / 2)];
            return e > 1 && (n += "s"), [ "".concat(e, " ").concat(n, " ago"), "in ".concat(e, " ").concat(n) ];
        }, a = {
            en_US: i,
            zh_CN: function(e, t) {
                if (0 === t) return [ "刚刚", "片刻后" ];
                var n = o[parseInt(t / 2)];
                return [ "".concat(e, " ").concat(n, "前"), "".concat(e, " ").concat(n, "后") ];
            }
        };
        t.register = function(e, t) {
            a[e] = t;
        };
        t.getLocale = function(e) {
            return a[e] || i;
        };
    },
    b184: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            var e, t = [ 1036, 1038, 1089, 1090 ];
            try {
                e = wx.getLaunchOptionsSync();
            } catch (t) {
                e = "";
            }
            return t.includes(e.scene);
        };
    },
    b216: function(e, t, n) {
        function r(e, t) {
            return a(e) || i(e, t) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function i(e, t) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    r || null == c.return || c.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }
        function a(e) {
            if (Array.isArray(e)) return e;
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    u(e, t, n[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("4360")), f = n("f8c8"), l = n("ed08"), d = {
            data: function() {
                return {
                    toFollow: null
                };
            },
            onShow: function() {
                this.toFollow && (0, l.ifLogin)() && (this.toggleFollowsubject(this.toFollow), this.toFollow = null);
            },
            onUnlod: function() {
                this.toFollow = null;
            },
            methods: {
                toggleFollowsubject: function(e) {
                    if (!(0, l.ifLogin)()) return this.toFollow = e, void (0, l.goToLogin)();
                    if (e.following) this.$emit("unfollow"), (0, f.unFollowSubject)(e.id).catch(function() {}); else {
                        this.$emit("follow");
                        var t = this._toggleFollowSubject_mixin_currentPage();
                        t && (0, l.dataAnalytic)("follow_click", {
                            frompage: t
                        }), (0, f.followSubject)(e.id).catch(function() {});
                    }
                    s.default.commit("entities/UPDATE_SUBJECT_ENTITY", {
                        id: e.id,
                        entity: c({}, e, {
                            following: !e.following
                        })
                    });
                },
                _toggleFollowSubject_mixin_currentPage: function() {
                    return {
                        Article: "article",
                        Subject: "subject",
                        MoreHotArticlesList: "hot",
                        Home: "recommender"
                    }[r(getCurrentPages().slice(-1), 1)[0].route.match(/pages\/(\S*)\/main/)[1]];
                }
            }
        };
        t.default = d;
    },
    b279: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            debug: !1,
            trackerHost: "https://dashuju-mini-wscn.xuangubao.cn",
            commonData: {
                backend: "baoer",
                appId: "mini.stock",
                channel: "weixin",
                uid: 0,
                environment: "prod",
                deviceInfo: {
                    appName: "选股宝股票",
                    appVersion: function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }(n("ccf3")).default
                }
            }
        };
        t.default = r;
    },
    b2e9: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return 12 * (n.getFullYear() - o.getFullYear()) + (n.getMonth() - o.getMonth());
        };
    },
    b356: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "format", {
            enumerable: !0,
            get: function() {
                return r.format;
            }
        }), Object.defineProperty(t, "render", {
            enumerable: !0,
            get: function() {
                return o.render;
            }
        }), Object.defineProperty(t, "cancel", {
            enumerable: !0,
            get: function() {
                return o.cancel;
            }
        }), Object.defineProperty(t, "register", {
            enumerable: !0,
            get: function() {
                return i.register;
            }
        }), t.version = void 0;
        var r = n("f58c"), o = n("ce34"), i = n("b0dc");
        t.version = "4.0.0-beta.2";
    },
    b3f5: function(e, t, n) {
        var r = n("c8d5"), o = n("f9ff"), i = n("0d3e"), a = n("df35");
        e.exports = function(e, t) {
            var n = r(e), c = r(t), u = i(n, c), s = Math.abs(o(n, c));
            return n = a(n, u * s), u * (s - (i(n, c) === -u));
        };
    },
    b4c7: function(e, t, n) {
        var r = n("c7ce");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            });
        };
    },
    b60f: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return r(e).getDate();
        };
    },
    b78a: function(e, t, n) {
        var r = n("c8d5"), o = n("8946");
        e.exports = function(e, t, n) {
            var i = n && Number(n.weekStartsOn) || 0, a = r(e), c = Number(t), u = a.getDay();
            return o(a, ((c % 7 + 7) % 7 < i ? 7 : 0) + c - u);
        };
    },
    b8a7: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e), n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(0, 0, 0, 0), t;
        };
    },
    b8f9: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e);
            return Math.floor(t.getMonth() / 3) + 1;
        };
    },
    badb: function(e, t, n) {
        var r = n("ec1f");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n);
        };
    },
    bb7c: function(e, t, n) {
        var r = n("c873"), o = n("c8d5"), i = n("e13a"), a = n("52cf"), c = 1440, u = 43200, s = 525600;
        e.exports = function(e, t, n) {
            var f = n || {}, l = r(e, t), d = f.locale, p = a.distanceInWords.localize;
            d && d.distanceInWords && d.distanceInWords.localize && (p = d.distanceInWords.localize);
            var h, g, v, m = {
                addSuffix: Boolean(f.addSuffix),
                comparison: l
            };
            l > 0 ? (h = o(e), g = o(t)) : (h = o(t), g = o(e));
            var y, b, _, w, S = Math[f.partialMethod ? String(f.partialMethod) : "floor"], x = i(g, h), O = g.getTimezoneOffset() - h.getTimezoneOffset(), k = S(x / 60) - O;
            if ("s" === (v = f.unit ? String(f.unit) : k < 1 ? "s" : k < 60 ? "m" : k < c ? "h" : k < u ? "d" : k < s ? "M" : "Y")) return p("xSeconds", x, m);
            if ("m" === v) return p("xMinutes", k, m);
            if ("h" === v) return y = S(k / 60), p("xHours", y, m);
            if ("d" === v) return b = S(k / c), p("xDays", b, m);
            if ("M" === v) return _ = S(k / u), p("xMonths", _, m);
            if ("Y" === v) return w = S(k / s), p("xYears", w, m);
            throw new Error("Unknown unit: " + v);
        };
    },
    bbdd: function(e, t, n) {
        var r = function() {
            return this || "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) && self;
        }() || Function("return this")(), o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0, i = o && r.regeneratorRuntime;
        if (r.regeneratorRuntime = void 0, e.exports = n("96cf"), o) r.regeneratorRuntime = i; else try {
            delete r.regeneratorRuntime;
        } catch (e) {
            r.regeneratorRuntime = void 0;
        }
    },
    bebd: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), u = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function i(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, i) {
                    function a(e) {
                        o(u, r, i, a, c, "next", e);
                    }
                    function c(e) {
                        o(u, r, i, a, c, "throw", e);
                    }
                    var u = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function a() {
            return (a = i(c.default.mark(function e() {
                var t, n;
                return c.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!(t = s.default.state.user.user)) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", t.shareKey);

                      case 5:
                        return e.prev = 5, e.next = 8, (0, u.createShareKeyByUnionId)();

                      case 8:
                        return n = e.sent, e.abrupt("return", n);

                      case 12:
                        return e.prev = 12, e.t0 = e.catch(5), e.abrupt("return", void 0);

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 5, 12 ] ]);
            }))).apply(this, arguments);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.produceTraceId = function() {
            return f();
        }, t.produceShareKey = function() {
            return a.apply(this, arguments);
        }, t.reportShareRelation = function(e) {
            var t = e.shareContentId, n = e.shareContentType, r = e.shareKey, o = e.traceId, i = s.default.state.user.loginInfo && s.default.state.user.loginInfo.unionId, a = s.default.state.user.user && s.default.state.user.user.id;
            i && (0, u.reportShareRelationInfo)({
                shareContentId: t,
                shareContentType: n,
                shareKey: r,
                traceId: o,
                keyType: a ? "uid" : "wechat",
                userKey: a || i
            }).then(function() {}).catch(function() {});
        };
        var c = r(n("a34a")), u = n("f8c8"), s = r(n("4360")), f = n("c437");
    },
    c2b5: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return r(e).getDay();
        };
    },
    c2d7: function(e, t, n) {
        function r(e, t) {
            return a(e) || i(e, t) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function i(e, t) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    r || null == c.return || c.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }
        function a(e) {
            if (Array.isArray(e)) return e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("4360")), u = n("f8c8"), s = {
            data: function() {
                return {
                    leftMinSeconds: 0,
                    originalPrice: 0,
                    bargainMoney: 0,
                    activityState: "ongoing",
                    bargainState: "ongoing",
                    activityInfo: null,
                    goodsInfo: {
                        img: "https://image.xuangubao.cn/Fn2xaJB9SNy0p8OtTaYP4lQmvKEP",
                        desc: "选股宝股民必备限定T恤(共5款) A炒股好难 B老股民 C满仓涨停 D十八线游资 E为*接盘",
                        price: "￥10-￥88",
                        sellCount: 288
                    },
                    goodsSwiperImgs: [ "https://image.xuangubao.cn/Ft_Q6hbRb_Z1d9OCQZ9mBCBV_FND", "https://image.xuangubao.cn/Fg4giGR-S2-vSxliyNg82JWAYGzJ", "https://image.xuangubao.cn/FsImAfML4RubotpzANjG4ZmX40wz", "https://image.xuangubao.cn/FlPbVyQdIJMsXsaaQ8d-MfHA3lTP", "https://image.xuangubao.cn/FiLNVzmg-v_9OrVpb8dbY97Pf-yj", "https://image.xuangubao.cn/FiSkSy_KHTbjFN4PQ0L9esYDvWay" ]
                };
            },
            computed: {
                loadingStatus: function() {
                    return c.default.state.bargainInfo.loading;
                },
                bargainInfo: function() {
                    var e = c.default.state.bargainInfo.bargainInfo;
                    return e ? (this.leftMinSeconds = Math.max(0, Math.min(1e3 * e.endedAt - Date.now(), 864e5)), 
                    this.bargainMoney = (e.totalMoney - e.remainMoneyToPay) / 100, this.originalPrice = (e.totalMoney - e.minMoney) / 100, 
                    this.goodsInfo.price = "￥".concat(e.minMoney / 100, "-￥").concat(e.totalMoney / 100), 
                    1e3 * e.endedAt < Date.now() ? this.bargainState = "bargainover" : e.userBargainOrder && e.userBargainOrder.hasBargainedTheOrder && (this.bargainState = "alreadybargain", 
                    this.helpBargainPrice = e.userBargainOrder.bargainedTheOrderMoney / 100), e) : null;
                }
            },
            watch: {
                loadingStatus: function() {
                    this.loadingStatus ? wx.showLoading({
                        title: "loading...",
                        mask: !1
                    }) : wx.hideLoading();
                }
            },
            onShow: function() {
                var e = this;
                c.default.commit("bargainInfo/updateBargainInfo", null);
                var t = r(getCurrentPages().slice(-1), 1)[0].options.bargainOrderNo;
                t ? (c.default.dispatch("bargainInfo/getBargainOrderInfo", t), Promise.all([ (0, 
                u.getGoodsInfo)(), (0, u.getActivityInfo)() ]).then(function(t) {
                    var n = r(t, 2), o = n[0], i = n[1];
                    o.items && o.items.length && (e.goodsInfo.sellCount = o.items.reduce(function(e, t) {
                        return t.sellCount ? e + t.sellCount : e;
                    }, 0)), 1e3 * i.endedAt < Date.now() && (e.activityState = "activityover"), e.activityInfo = i;
                }).catch(function() {
                    e.activityState = "activityover";
                })) : wx.reLaunch({
                    url: "/pages/Home/main"
                });
            }
        };
        t.default = s;
    },
    c437: function(e, t, n) {
        var r, o, i = n("e1f4"), a = n("2366"), c = 0, u = 0;
        e.exports = function(e, t, n) {
            var s = t && n || 0, f = t || [], l = (e = e || {}).node || r, d = void 0 !== e.clockseq ? e.clockseq : o;
            if (null == l || null == d) {
                var p = i();
                null == l && (l = r = [ 1 | p[0], p[1], p[2], p[3], p[4], p[5] ]), null == d && (d = o = 16383 & (p[6] << 8 | p[7]));
            }
            var h = void 0 !== e.msecs ? e.msecs : new Date().getTime(), g = void 0 !== e.nsecs ? e.nsecs : u + 1, v = h - c + (g - u) / 1e4;
            if (v < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (v < 0 || h > c) && void 0 === e.nsecs && (g = 0), 
            g >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            c = h, u = g, o = d;
            var m = (1e4 * (268435455 & (h += 122192928e5)) + g) % 4294967296;
            f[s++] = m >>> 24 & 255, f[s++] = m >>> 16 & 255, f[s++] = m >>> 8 & 255, f[s++] = 255 & m;
            var y = h / 4294967296 * 1e4 & 268435455;
            f[s++] = y >>> 8 & 255, f[s++] = 255 & y, f[s++] = y >>> 24 & 15 | 16, f[s++] = y >>> 16 & 255, 
            f[s++] = d >>> 8 | 128, f[s++] = 255 & d;
            for (var b = 0; b < 6; ++b) f[s + b] = l[b];
            return t || a(f);
        };
    },
    c4c2: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t, n) {
            var o = r(e), i = r(t), a = void 0 !== n ? n : 1, c = i.getTime();
            if (o.getTime() > c) throw new Error("The first date cannot be after the second date");
            var u = [], s = o;
            for (s.setHours(0, 0, 0, 0); s.getTime() <= c; ) u.push(r(s)), s.setDate(s.getDate() + a);
            return u;
        };
    },
    c4f9: function(e, t, n) {
        var r = n("0978");
        e.exports = function(e) {
            var t = new Date();
            return t.setDate(t.getDate() - 1), r(e).getTime() === r(t).getTime();
        };
    },
    c589: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return r(e).getMinutes();
        };
    },
    c5d1: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("f8c8"), o = {
            namespaced: !0,
            state: {
                wscnAccounts: [],
                activeWscnAccount: null
            },
            getters: {},
            actions: {
                bindWscnAndXgbAccount: function(e) {
                    var t = e.state, n = e.commit, o = e.dispatch;
                    if (t.activeWscnAccount) return (0, r.bindBaoerAndWSCN)({
                        wscnId: t.activeWscnAccount.account.uid
                    }).then(function(e) {
                        if (2e4 === e.code) return n("user/setToken", e.data.token, {
                            root: !0
                        }), o("user/updateUserInfo", null, {
                            root: !0
                        }), n("setWscnAccounts", []), n("setActiveWscnAccount", null), e.data.token;
                    }).catch(function(e) {
                        console.error("bindWscnAndXgbAccount error", e);
                    });
                }
            },
            mutations: {
                setWscnAccounts: function(e, t) {
                    e.wscnAccounts = t;
                },
                setActiveWscnAccount: function(e, t) {
                    e.activeWscnAccount = t;
                }
            }
        };
        t.default = o;
    },
    c6ae: function(e, t, n) {
        var r = n("2299");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getTime() === o.getTime();
        };
    },
    c7ce: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0, o = r(e), i = o.getDay(), a = (i < n ? 7 : 0) + i - n;
            return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
        };
    },
    c873: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e).getTime(), o = r(t).getTime();
            return n > o ? -1 : n < o ? 1 : 0;
        };
    },
    c8ba: function(e, t) {
        var n;
        n = function() {
            return this;
        }();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && (n = window);
        }
        e.exports = n;
    },
    c8d5: function(e, t, n) {
        function r(e) {
            var t, n = {}, r = e.split(h);
            if (g.test(r[0]) ? (n.date = null, t = r[0]) : (n.date = r[0], t = r[1]), t) {
                var o = P.exec(t);
                o ? (n.time = t.replace(o[1], ""), n.timezone = o[1]) : n.time = t;
            }
            return n;
        }
        function o(e, t) {
            var n, r = m[t], o = b[t];
            if (n = y.exec(e) || o.exec(e)) {
                var i = n[1];
                return {
                    year: parseInt(i, 10),
                    restDateString: e.slice(i.length)
                };
            }
            if (n = v.exec(e) || r.exec(e)) {
                var a = n[1];
                return {
                    year: 100 * parseInt(a, 10),
                    restDateString: e.slice(a.length)
                };
            }
            return {
                year: null
            };
        }
        function i(e, t) {
            if (null === t) return null;
            var n, r, o, i;
            if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r;
            if (n = _.exec(e)) return r = new Date(0), o = parseInt(n[1], 10) - 1, r.setUTCFullYear(t, o), 
            r;
            if (n = w.exec(e)) {
                r = new Date(0);
                var a = parseInt(n[1], 10);
                return r.setUTCFullYear(t, 0, a), r;
            }
            if (n = S.exec(e)) {
                r = new Date(0), o = parseInt(n[1], 10) - 1;
                var c = parseInt(n[2], 10);
                return r.setUTCFullYear(t, o, c), r;
            }
            return (n = x.exec(e)) ? (i = parseInt(n[1], 10) - 1, u(t, i)) : (n = O.exec(e)) ? u(t, i = parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1) : null;
        }
        function a(e) {
            var t, n, r;
            if (t = k.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * l;
            if (t = T.exec(e)) return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), 
            n % 24 * l + r * d;
            if (t = j.exec(e)) {
                n = parseInt(t[1], 10), r = parseInt(t[2], 10);
                var o = parseFloat(t[3].replace(",", "."));
                return n % 24 * l + r * d + 1e3 * o;
            }
            return null;
        }
        function c(e) {
            var t, n;
            return (t = I.exec(e)) ? 0 : (t = A.exec(e)) ? (n = 60 * parseInt(t[2], 10), "+" === t[1] ? -n : n) : (t = C.exec(e)) ? (n = 60 * parseInt(t[2], 10) + parseInt(t[3], 10), 
            "+" === t[1] ? -n : n) : 0;
        }
        function u(e, t, n) {
            t = t || 0, n = n || 0;
            var r = new Date(0);
            r.setUTCFullYear(e, 0, 4);
            var o = 7 * t + n + 1 - (r.getUTCDay() || 7);
            return r.setUTCDate(r.getUTCDate() + o), r;
        }
        var s = n("5465"), f = n("a735"), l = 36e5, d = 6e4, p = 2, h = /[T ]/, g = /:/, v = /^(\d{2})$/, m = [ /^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/ ], y = /^(\d{4})/, b = [ /^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/ ], _ = /^-(\d{2})$/, w = /^-?(\d{3})$/, S = /^-?(\d{2})-?(\d{2})$/, x = /^-?W(\d{2})$/, O = /^-?W(\d{2})-?(\d{1})$/, k = /^(\d{2}([.,]\d*)?)$/, T = /^(\d{2}):?(\d{2}([.,]\d*)?)$/, j = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/, P = /([Z+-].*)$/, I = /^(Z)$/, A = /^([+-])(\d{2})$/, C = /^([+-])(\d{2}):?(\d{2})$/;
        e.exports = function(e, t) {
            if (f(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var n = (t || {}).additionalDigits;
            n = null == n ? p : Number(n);
            var u = r(e), l = o(u.date, n), h = l.year, g = i(l.restDateString, h);
            if (g) {
                var v, m = g.getTime(), y = 0;
                if (u.time && (y = a(u.time)), u.timezone) v = c(u.timezone) * d; else {
                    var b = m + y, _ = new Date(b);
                    v = s(_);
                    var w = new Date(b);
                    w.setDate(_.getDate() + 1);
                    var S = s(w) - s(_);
                    S > 0 && (v += S);
                }
                return new Date(m + y + v);
            }
            return new Date(e);
        };
    },
    c980: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            return 3 === r(e).getDay();
        };
    },
    cb1f: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            wx.navigateTo({
                url: "/pages/Login/LoginMain/main"
            });
        };
    },
    cb96: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0, o = r(e), i = o.getDay(), a = 6 + (i < n ? -7 : 0) - (i - n);
            return o.setHours(0, 0, 0, 0), o.setDate(o.getDate() + a), o;
        };
    },
    cc64: function(e, t, n) {
        var r = n("ccce");
        e.exports = function(e) {
            return r(new Date(), e);
        };
    },
    ccce: function(e, t, n) {
        var r = n("1baf");
        e.exports = function(e, t) {
            return r(e, t, {
                weekStartsOn: 1
            });
        };
    },
    ccf3: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        t.default = "1.3.16";
    },
    ce34: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.render = t.cancel = void 0;
        var r = n("02aa"), o = n("8c14"), i = n("b0dc"), a = {}, c = function(e) {
            clearTimeout(e), delete a[e];
        }, u = function e(t, n, i, u) {
            c((0, r.getTimerId)(t));
            var s = (0, o.diffSec)(n, u);
            t.innerHTML = (0, o.formatDiff)(s, i);
            var f = setTimeout(function() {
                e(t, n, i, u);
            }, 1e3 * (0, o.nextInterval)(s), 2147483647);
            a[f] = 0, (0, r.saveTimerId)(t, f);
        };
        t.cancel = function(e) {
            if (e) c((0, r.getTimerId)(e)); else for (var t in a) c(t);
        };
        t.render = function(e, t, n) {
            var o;
            void 0 === e.length && (e = [ e ]);
            for (var a = 0; a < e.length; a++) {
                o = e[a];
                var c = (0, r.getDateAttribute)(o), s = (0, i.getLocale)(t);
                u(o, c, s, n);
            }
            return e;
        };
    },
    ce3d: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e), n = t.getMonth(), o = n - n % 3 + 3;
            return t.setMonth(o, 0), t.setHours(0, 0, 0, 0), t;
        };
    },
    d05d: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("761b"), o = {
            onShow: function() {
                this.trackPVTime = +new Date();
            },
            onHide: function() {
                this.trackPVTime && (r.Taotie.customSendPV(+new Date() - this.trackPVTime), this.trackPVTime = null);
            },
            onUnload: function() {
                this.trackPVTime && (r.Taotie.customSendPV(+new Date() - this.trackPVTime), this.trackPVTime = null);
            }
        };
        t.default = o;
    },
    d2ed: function(e, t, n) {
        var r = n("e785"), o = 36e5;
        e.exports = function(e, t) {
            var n = r(e, t) / o;
            return n > 0 ? Math.floor(n) : Math.ceil(n);
        };
    },
    d420: function(e, t, n) {
        var r = n("0978"), o = 6e4, i = 864e5;
        e.exports = function(e, t) {
            var n = r(e), a = r(t), c = n.getTime() - n.getTimezoneOffset() * o, u = a.getTime() - a.getTimezoneOffset() * o;
            return Math.round((c - u) / i);
        };
    },
    d473: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = Number(t);
            return n.setMilliseconds(o), n;
        };
    },
    d4ae: function(e, t, n) {
        var r = n("f5dd");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n);
        };
    },
    d6f8: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e), n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
        };
    },
    d975: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e), n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
        };
    },
    d9c6: function(e, t, n) {
        function r(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    o(e, t, n[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function i(e) {
            return u(e) || c(e) || a();
        }
        function a() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }
        function c(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }
        function u(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = n("f8c8"), f = {
            namespaced: !0,
            state: {
                symbols: new Set(),
                real: {}
            },
            getters: {
                prodCode: function(e) {
                    return i(e.symbols);
                },
                real: function(e) {
                    return e.real;
                }
            },
            actions: {
                pushSymbols: function(e, t) {
                    var n = e.state, r = e.commit, o = e.dispatch, i = t.symbols.filter(function(e) {
                        return !n.symbols.has(e);
                    });
                    r("PUSH_SYMBOLS", {
                        symbols: i
                    }), o("getReal", {
                        symbols: i
                    });
                },
                getReal: function(e, t) {
                    var n = e.commit, r = t.symbols;
                    if (r.length) return (0, s.getStockReal)(r.join(",")).then(function(e) {
                        n("UPDATE_REAL", {
                            real: e
                        });
                    });
                },
                poll: function(e) {
                    var t = e.dispatch, n = e.getters;
                    setTimeout(function() {
                        t("getReal", {
                            symbols: n.prodCode
                        }).then(function() {
                            t("poll");
                        }).catch(function() {
                            t("poll");
                        });
                    }, 5e3);
                }
            },
            mutations: {
                PUSH_SYMBOLS: function(e, t) {
                    t.symbols.forEach(function(t) {
                        return e.symbols.add(t);
                    });
                },
                UPDATE_REAL: function(e, t) {
                    var n = t.real;
                    e.real = r({}, e.real, {}, n);
                }
            }
        };
        t.default = f;
    },
    dc57: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, n) {
            var r, o = 0;
            n || (n = {});
            var i = function() {
                var i = this, a = arguments, c = Date.now();
                o || !1 !== n.leading || (o = c);
                var u = t - (c - o);
                u <= 0 || u > t ? (r && (clearTimeout(r), r = null), o = c, e.apply(this, arguments)) : r || !1 === n.trailing || (r = setTimeout(function() {
                    o = !1 === n.leading ? 0 : c, e.apply(i, a), r = null;
                }, u));
            };
            return i.cancel = function() {
                clearTimeout(r), o = 0, r = null;
            }, i;
        };
    },
    dddf: function(e, t, n) {
        var r = n("acc4");
        e.exports = function(e) {
            return r(e) ? 366 : 365;
        };
    },
    de13: function(e, t, n) {
        var r = n("8964"), o = n("b4c7");
        e.exports = function(e) {
            var t = r(e), n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var i = o(n);
            return i.setDate(i.getDate() - 1), i;
        };
    },
    df35: function(e, t, n) {
        var r = n("27a1");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n);
        };
    },
    dfbf: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            Basic: function(e, t) {
                e.save(), e.beginPath(), t(e);
            },
            Fill: function(e, t, n) {
                r.Basic(e, t), e.fillStyle = n || "black", e.fill(), e.closePath(), e.restore();
            },
            Stroke: function(e, t, n) {
                r.Basic(e, t), e.strokeStyle = n || "black", e.stroke(), e.closePath(), e.restore();
            },
            FillnStroke: function(e, t, n, o) {
                r.Basic(e, t), e.fillStyle = n || "black", e.strokeStyle = o || "black", e.fill(), 
                e.stroke(), e.closePath(), e.restore();
            },
            Text: function(e, t, n, r) {
                e.save(), r && (e.font = r), e.fillStyle = n || "black", t(e), e.restore();
            },
            ClipRoundRect: function(e, t, n, r, o, i, a) {
                var c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "transparent";
                e.save(), e.beginPath(), e.fillStyle = c, e.arc(t + i, n + i, i, Math.PI, 1.5 * Math.PI), 
                e.moveTo(t + i, n), e.lineTo(t + r - i, n), e.lineTo(t + r, n + i), e.arc(t + r - i, n + i, i, 1.5 * Math.PI, 2 * Math.PI), 
                e.lineTo(t + r, n + o - i), e.lineTo(t + r - i, n + o), e.arc(t + r - i, n + o - i, i, 0, .5 * Math.PI), 
                e.lineTo(t + i, n + o), e.lineTo(t, n + o - i), e.arc(t + i, n + o - i, i, .5 * Math.PI, Math.PI), 
                e.lineTo(t, n + i), e.lineTo(t + i, n), e.fill(), e.closePath(), e.clip(), a(e), 
                e.closePath(), e.restore();
            }
        }, o = r;
        t.default = o;
    },
    e13a: function(e, t, n) {
        var r = n("e785");
        e.exports = function(e, t) {
            var n = r(e, t) / 1e3;
            return n > 0 ? Math.floor(n) : Math.ceil(n);
        };
    },
    e1ca: function(e, t, n) {
        var r = n("7a83");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n);
        };
    },
    e1f4: function(e, t) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
            var r = new Uint8Array(16);
            e.exports = function() {
                return n(r), r;
            };
        } else {
            var o = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), 
                o[t] = e >>> ((3 & t) << 3) & 255;
                return o;
            };
        }
    },
    e2ff: function(e, t, n) {
        var r = n("8946");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n);
        };
    },
    e51d: function(e, t) {
        e.exports = function() {
            var e = new Date(), t = e.getFullYear(), n = e.getMonth(), r = e.getDate(), o = new Date(0);
            return o.setFullYear(t, n, r - 1), o.setHours(23, 59, 59, 999), o;
        };
    },
    e620: function(e, t, n) {
        var r = n("c6ae");
        e.exports = function(e) {
            return r(new Date(), e);
        };
    },
    e73d: function(e, t, n) {
        var r = n("c8d5"), o = n("81fc");
        e.exports = function(e, t) {
            var n = r(e), i = Number(t), a = o(n) - i;
            return n.setDate(n.getDate() - 7 * a), n;
        };
    },
    e785: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getTime() - o.getTime();
        };
    },
    e830: function(e, t, n) {
        function r(e) {
            var t = e % 100;
            if (t > 20 || t < 10) switch (t % 10) {
              case 1:
                return e + "st";

              case 2:
                return e + "nd";

              case 3:
                return e + "rd";
            }
            return e + "th";
        }
        var o = n("90e5");
        e.exports = function() {
            var e = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], t = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], n = [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ], i = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], a = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], c = [ "AM", "PM" ], u = [ "am", "pm" ], s = [ "a.m.", "p.m." ], f = {
                MMM: function(t) {
                    return e[t.getMonth()];
                },
                MMMM: function(e) {
                    return t[e.getMonth()];
                },
                dd: function(e) {
                    return n[e.getDay()];
                },
                ddd: function(e) {
                    return i[e.getDay()];
                },
                dddd: function(e) {
                    return a[e.getDay()];
                },
                A: function(e) {
                    return e.getHours() / 12 >= 1 ? c[1] : c[0];
                },
                a: function(e) {
                    return e.getHours() / 12 >= 1 ? u[1] : u[0];
                },
                aa: function(e) {
                    return e.getHours() / 12 >= 1 ? s[1] : s[0];
                }
            };
            return [ "M", "D", "DDD", "d", "Q", "W" ].forEach(function(e) {
                f[e + "o"] = function(t, n) {
                    return r(n[e](t));
                };
            }), {
                formatters: f,
                formattingTokensRegExp: o(f)
            };
        };
    },
    e96b: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e);
            return t.setSeconds(0, 0), t;
        };
    },
    e9c8: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: function() {
                return {
                    form: {
                        mobile: "",
                        code: ""
                    }
                };
            },
            getters: {},
            actions: {},
            mutations: {
                updateForm: function(e, t) {
                    var n = t.key, r = t.val;
                    e.form[n] = r;
                }
            }
        };
        t.default = r;
    },
    eaa5: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t, n, o) {
            var i = r(e).getTime(), a = r(t).getTime(), c = r(n).getTime(), u = r(o).getTime();
            if (i > a || c > u) throw new Error("The start of the range cannot be after the end of the range");
            return i < u && c < a;
        };
    },
    ec1f: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t) {
            var n = r(e).getTime(), o = Number(t);
            return new Date(n + o);
        };
    },
    eca2: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e), n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
        };
    },
    ecd6: function(e, t, n) {},
    ed08: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = {
            throttle: !0,
            debounce: !0,
            formatTimeAgo: !0,
            wxp: !0,
            draw: !0,
            showDownLoadReminder: !0,
            canOpenApp: !0,
            ifLogin: !0,
            goToLogin: !0,
            replaceImgHost: !0,
            dataAnalytic: !0
        };
        Object.defineProperty(t, "throttle", {
            enumerable: !0,
            get: function() {
                return a.default;
            }
        }), Object.defineProperty(t, "debounce", {
            enumerable: !0,
            get: function() {
                return c.default;
            }
        }), Object.defineProperty(t, "formatTimeAgo", {
            enumerable: !0,
            get: function() {
                return u.default;
            }
        }), Object.defineProperty(t, "wxp", {
            enumerable: !0,
            get: function() {
                return s.default;
            }
        }), Object.defineProperty(t, "draw", {
            enumerable: !0,
            get: function() {
                return f.default;
            }
        }), Object.defineProperty(t, "showDownLoadReminder", {
            enumerable: !0,
            get: function() {
                return l.default;
            }
        }), Object.defineProperty(t, "canOpenApp", {
            enumerable: !0,
            get: function() {
                return d.default;
            }
        }), Object.defineProperty(t, "ifLogin", {
            enumerable: !0,
            get: function() {
                return p.default;
            }
        }), Object.defineProperty(t, "goToLogin", {
            enumerable: !0,
            get: function() {
                return h.default;
            }
        }), Object.defineProperty(t, "replaceImgHost", {
            enumerable: !0,
            get: function() {
                return g.default;
            }
        }), Object.defineProperty(t, "dataAnalytic", {
            enumerable: !0,
            get: function() {
                return v.default;
            }
        });
        var i = n("4be4");
        Object.keys(i).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e];
                }
            }));
        });
        var a = r(n("dc57")), c = r(n("20ca")), u = r(n("4652")), s = r(n("6988")), f = r(n("dfbf")), l = r(n("00bd")), d = r(n("b184")), p = r(n("05c6")), h = r(n("cb1f")), g = r(n("9707")), v = r(n("761b"));
    },
    ee91: function(e, t, n) {
        var r = n("3bc7");
        e.exports = function(e, t) {
            var n = r(e, t) / 7;
            return n > 0 ? Math.floor(n) : Math.ceil(n);
        };
    },
    f564: function(e, t, n) {
        var r = n("e96b");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getTime() === o.getTime();
        };
    },
    f56a: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e, t, n) {
            var o = r(e).getTime(), i = r(t).getTime(), a = r(n).getTime();
            if (i > a) throw new Error("The start of the range cannot be after the end of the range");
            return o >= i && o <= a;
        };
    },
    f58c: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.format = void 0;
        var r = n("8c14"), o = n("b0dc");
        t.format = function(e, t, n) {
            var i = (0, r.diffSec)(e, n);
            return (0, r.formatDiff)(i, (0, o.getLocale)(t));
        };
    },
    f5dd: function(e, t, n) {
        var r = n("6665");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 3 * n);
        };
    },
    f66d: function(e, t, n) {
        var r = n("26d5");
        e.exports = function(e) {
            return r(new Date(), e);
        };
    },
    f8c8: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("03b3");
        Object.keys(r).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e];
                }
            });
        });
        var o = n("acc9");
        Object.keys(o).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e];
                }
            });
        });
        var i = n("5b22");
        Object.keys(i).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e];
                }
            });
        });
        var a = n("44e3");
        Object.keys(a).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return a[e];
                }
            });
        });
        var c = n("ac34");
        Object.keys(c).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return c[e];
                }
            });
        });
    },
    f9ff: function(e, t, n) {
        var r = n("8964");
        e.exports = function(e, t) {
            return r(e) - r(t);
        };
    },
    fa76: function(e, t, n) {
        var r = n("c8d5"), o = n("8946"), i = n("84b9");
        e.exports = function(e, t) {
            var n = r(e), a = Number(t), c = i(n);
            return o(n, a - c);
        };
    },
    fb36: function(e, t, n) {
        var r = n("b8f9"), o = n("c8d5");
        e.exports = function(e, t) {
            var n = o(e), i = o(t);
            return 4 * (n.getFullYear() - i.getFullYear()) + (r(n) - r(i));
        };
    },
    fb98: function(e, t, n) {
        var r = n("1cc6");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n);
        };
    },
    fbaf: function(e, t, n) {
        var r = n("c8d5");
        e.exports = function(e) {
            var t = r(e);
            return t.setMinutes(0, 0, 0), t;
        };
    },
    fcb3: function(e, t, n) {
        var r = n("6665");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 12 * n);
        };
    },
    fd0f: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.goToStockPage = function(e) {
            console.log("/pages/stock/index?code=".concat(e)), wx.navigateToMiniProgram && e && wx.navigateToMiniProgram({
                appId: r,
                path: "/pages/stock/index?code=".concat(e),
                success: function(e) {
                    console.log("success", e);
                },
                fail: function(e) {
                    console.log("fail", e);
                }
            });
        }, t.goToPlatePage = function(e) {
            console.log("/pages/plate/index?plateId=".concat(e)), wx.navigateToMiniProgram && e && e > 0 && wx.navigateToMiniProgram({
                appId: r,
                path: "/pages/plate/index?plateId=".concat(e),
                success: function(e) {
                    console.log("success", e);
                },
                fail: function(e) {
                    console.log("fail", e);
                }
            });
        };
        var r = "wxd4fba725dc2331b7";
    },
    fd39: function(e, t, n) {
        var r = n("0978");
        e.exports = function(e, t) {
            var n = r(e), o = r(t);
            return n.getTime() === o.getTime();
        };
    },
    ff9e: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                id: null
            },
            getters: {},
            actions: {
                initSubject: function(e, t) {
                    e.state, e.dispatch, (0, e.commit)("SET_SUBJECT_PAGE_ID", t.id);
                }
            },
            mutations: {
                SET_SUBJECT_PAGE_ID: function(e, t) {
                    e.id = t;
                }
            }
        };
        t.default = r;
    }
} ]);