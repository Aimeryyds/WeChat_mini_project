Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../../../components/utils"), t = require("../../../../components/bridge"), o = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../services/quote/quote")), i = {
    reqQuote: function(t) {
        return o.default.quote({
            data: {
                market: (0, e.getData)(this, "market"),
                exchange: (0, e.getData)(this, "exchange"),
                code: (0, e.getData)(this, "code")
            },
            timeout: 1e4
        });
    },
    setQuote: function(t) {
        this.error = !!(0, e.getProp)(t, "data.error");
        var o = (0, e.getData)(this, "type") + "", i = this.quoteData = (0, e.getProp)(t, "data.quote") || {}, a = i.data, r = void 0 === a ? {} : a, s = i.info, n = void 0 === s ? {} : s, l = i.price_base, u = void 0 === l ? 2 : l, c = i.id, h = void 0 === c ? {} : c, g = r.market_status, p = r.time, d = void 0 === p ? "" : p, m = n.connect_type, v = n.stock, x = n.type2, T = Math.pow(10, u), _ = u, S = (0, 
        e.getVolumeScale)(o, h.exchange), f = this.isReturnBond = 1501 === x, b = {};
        b.date = this.formatDate(d, "date"), b.time = this.formatDate(d, "time"), b.location = "8" == o ? "美东时间" : "北京", 
        b.marketStatus = "8" == o ? "更新" : this.getMarketStatus(g);
        var N = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return e = e || 0, o ? (e / t).toFixed(o) : e / t;
        }, z = N(r.now, T, _), P = N(r.change, T, _), O = "" + (0, e.getSign)(r.change) + N(r.roc, 100, 2) + "%", k = N(r.high, T, _), F = N(r.open, T, _), y = (0, 
        e.getNumeric)(N(r.volume, S)), D = N(r.low, T, _), w = N(r.pclose, T, _), E = (0, 
        e.getNumeric)(N(r.amount)), M = N(r.high_p1y, T, _), C = N(r.low_p1y, T, _), A = o == e.QUOTETYPE.index || f ? "--" : (0, 
        e.getScaledNumber)(r.avg, T, _), I = this.timeseriesHint = {
            rise_d: O,
            change_d: P,
            avg_d: A,
            now_d: z,
            volume_d: y,
            color: (0, e.getColor)(P)
        };
        b.data = {
            now: {
                text: z,
                color: (0, e.getColor)(r.change),
                size: this.getNowPriceFontSize(z)
            },
            change: {
                text: P,
                color: (0, e.getColor)(r.change),
                size: this.getBasicNumberFontSize(P)
            },
            rise: {
                text: O,
                color: (0, e.getColor)(r.change),
                size: this.getBasicNumberFontSize(O)
            },
            high: {
                text: k,
                color: (0, e.getColor)(r.high - r.pclose),
                size: this.getBasicNumberFontSize(k)
            },
            open: {
                text: F,
                color: (0, e.getColor)(r.open - r.pclose),
                size: this.getBasicNumberFontSize(F)
            },
            volume: {
                text: y,
                size: this.getBasicNumberFontSize(y)
            },
            low: {
                text: D,
                color: (0, e.getColor)(r.low - r.pclose),
                size: this.getBasicNumberFontSize(D)
            },
            pclose: {
                text: w,
                color: (0, e.getColor)(r.pclose - r.pclose),
                size: this.getBasicNumberFontSize(w)
            },
            amount: {
                text: E,
                size: this.getBasicNumberFontSize(E)
            }
        };
        var B = [];
        if (o == e.QUOTETYPE.stock) {
            var G = v.credit, Q = v.sector, q = v.neeq_com_layer, U = v.neeq_transfer_type;
            if (q || U) {
                var Y = 1 === q ? "base" : "inno", R = 2 === U ? "market_make" : 4 === U ? "auction" : "";
                q && B.push(e.TAG_OPTIONS[Y]), R && B.push(e.TAG_OPTIONS[R]);
            } else h.exchange == e.MARKETS.sh ? B.push(e.TAG_OPTIONS.sh) : h.exchange == e.MARKETS.sz && B.push(e.TAG_OPTIONS.sz), 
            G && B.push(e.TAG_OPTIONS.rong), Q && (b.sector = Q, 12 === Q && B.push(e.TAG_OPTIONS.kcb));
        } else o == e.QUOTETYPE.hkstock ? (B.push(e.TAG_OPTIONS.hk), 0 != (m & Math.pow(2, 0)) && B.push(e.TAG_OPTIONS.shgt), 
        0 != (m & Math.pow(2, 1)) && B.push(e.TAG_OPTIONS.szgt)) : o == e.QUOTETYPE.us_secu ? B.push(e.TAG_OPTIONS.us) : h.exchange == e.MARKETS.sh ? B.push(e.TAG_OPTIONS.sh) : h.exchange == e.MARKETS.sz && B.push(e.TAG_OPTIONS.sz);
        if (b.tagList = B, b.moreHeight = 12 == b.sector ? 325 : 285, o != e.QUOTETYPE.index) {
            var K = void 0, H = function() {
                var t = void 0, i = void 0, a = {};
                return o == e.QUOTETYPE.fund ? (t = r.fund || {}, i = n.stock || {}, a = {
                    in: (0, e.getScaledNumber)(r.fund.in, 100),
                    out: (0, e.getScaledNumber)(r.fund.out, 100)
                }) : o == e.QUOTETYPE.bond ? (t = r.bond || {}, i = n.stock || {}, a = {
                    in: (0, e.getScaledNumber)(r.bond.in, S),
                    out: (0, e.getScaledNumber)(r.bond.out, S)
                }) : o == e.QUOTETYPE.hkstock ? (t = r.hk_stock || {}, i = n.stock || {}, a = {
                    in: t.in,
                    out: t.out
                }) : o == e.QUOTETYPE.us_secu ? (t = r.us || {}, i = n.stock || {}) : (t = r.stock || {}, 
                i = n.stock || {}, a = {
                    in: (0, e.getScaledNumber)(t.in, T),
                    out: (0, e.getScaledNumber)(t.out, T)
                }), K = t.position, {
                    handover: {
                        text: (0, e.getScaledNumber)(t.turnover_rate, 100, 2) + "%"
                    },
                    amplitude: {
                        text: (0, e.getScaledNumber)((r.high - r.low) / (r.pclose || r.open) * 100, 1, 2) + "%"
                    },
                    total: {
                        text: (0, e.getNumeric)(i.total || 0)
                    },
                    share: {
                        text: (0, e.getNumeric)(i.share || 0)
                    },
                    in: {
                        text: (0, e.getNumeric)(a.in || 0)
                    },
                    out: {
                        text: (0, e.getNumeric)(a.out || 0)
                    },
                    nvaps: {
                        text: (0, e.getScaledNumber)(i.bvps, T, 2)
                    },
                    pe: {
                        text: (0, e.getScaledNumber)(t.pe, 1e4, 2)
                    },
                    eps: {
                        text: (0, e.getScaledNumber)(i.eps, T, 2)
                    },
                    pb: {
                        text: (0, e.getScaledNumber)(r.now, i.bvps || 1 / 0, 2)
                    },
                    capitalization: {
                        text: (0, e.getNumeric)((0, e.getScaledNumber)(i.total * r.now, T))
                    },
                    share_capitalization: {
                        text: (0, e.getNumeric)((0, e.getScaledNumber)(i.share * r.now, T))
                    },
                    avg: {
                        text: A
                    },
                    high_p1y: {
                        text: M
                    },
                    low_p1y: {
                        text: C
                    }
                };
            }(), j = {};
            12 == b.sector && (j = {
                volume_after: {
                    text: (0, e.getNumeric)((r.volume_after || 0) / S)
                },
                amount_after: {
                    text: (0, e.getNumeric)((r.amount_after || 0) / T)
                },
                weighted_voting_rights: {
                    text: v && v.weighted_voting_rights ? "是" : "否"
                }
            }), Object.assign(b.data, H, j);
            for (var L = {
                sell: [],
                buy: []
            }, V = K || [ {}, {}, {}, {}, {} ], W = 0; W < 5; W++) {
                var J = V[W] || {}, X = J.ask, Z = J.ask_size, $ = J.bid, ee = J.bid_size;
                Z = (Z / S).toFixed(0) - 0 || "--", ee = (ee / S).toFixed(0) - 0 || "--";
                var te = X ? ((X || 0) / T).toFixed(_) : "--", oe = Z > 9999 ? (0, e.getNumeric)(Z, null, 1, !0) : Z, ie = $ ? (($ || 0) / T).toFixed(_) : "--", ae = ee > 9999 ? (0, 
                e.getNumeric)(ee, null, 1, !0) : ee;
                L.sell[5 - W - 1] = {
                    price: te,
                    price_size: this.getFiveTickFontSize(te),
                    color: X ? (0, e.getColor)(X - r.pclose) : (0, e.getColor)(0),
                    volume: oe,
                    volume_size: this.getFiveTickFontSize(oe),
                    volume_color: "--" === oe && (0, e.getColor)(0)
                }, L.buy[W] = {
                    price: ie,
                    price_size: this.getFiveTickFontSize(ie),
                    color: $ ? (0, e.getColor)($ - r.pclose) : (0, e.getColor)(0),
                    volume: ae,
                    volume_size: this.getFiveTickFontSize(ae),
                    volume_color: "--" === ae && (0, e.getColor)(0)
                };
            }
            (0, e.setData)(this, "fiveTick.five.data", L), (0, e.getData)(this, "plate.more") && this.updateMore();
        }
        b.more = ((0, e.getData)(this, "plate") || {}).more || !1, !(0, e.getData)(this, "chart.lining") && (0, 
        e.setData)(this, "hint", I), !(0, e.getData)(this, "fiveday.data.chart.lining") && (0, 
        e.setData)(this, "fiveday.data.hint", I), (0, e.setData)(this, "plate", b);
    },
    togglePlate: function() {
        "1" != (0, e.getData)(this, "type") && ((0, e.getData)(this, "plate.more") ? (this._dot({
            props: {
                buttonNameSuffix: "关闭盘口"
            }
        }), (0, e.setData)(this, "plate.more", !1)) : (this._dot({
            props: {
                buttonNameSuffix: "查看盘口"
            }
        }), this.updateMore(), (0, e.setData)(this, "plate.more", !0)));
    },
    updateMore: function() {
        var o = (0, t.createCanvasContext)("moreCvs"), i = (0, t.createCanvasContext)("lineCvs");
        i.setLineWidth(1), i.setStrokeStyle("#D8D8D8");
        var a = this.data.plate.moreHeight || 325;
        o.save(), o.setFillStyle("#ffffff"), o.beginPath(), o.moveTo(5, 0), o.lineTo(295, 0), 
        o.arc(295, 5, 5, -Math.PI / 2, 0), o.lineTo(300, a - 5), o.arc(295, a - 5, 5, 0, Math.PI / 2), 
        o.lineTo(5, a), o.arc(5, a - 5, 5, Math.PI / 2, Math.PI), o.lineTo(0, 5), o.arc(5, 5, 5, Math.PI, Math.PI / 2 * 3), 
        o.closePath(), o.fill(), o.restore(), o.save(), o.setFontSize(18), o.textBaseline = "top", 
        o.setFillStyle("#333333"), o.fillText("行情数据", 114, 20), o.restore(), i.beginPath(), 
        i.moveTo(82, 32.5), i.lineTo(106, 32.5), i.stroke(), i.beginPath(), i.moveTo(194, 32.5), 
        i.lineTo(218, 32.5), i.stroke(), o.save();
        var r = [ [ "high", "最高" ], [ "low", "最低" ], [ "open", "今开" ], [ "pclose", "昨收" ], [ "volume", "成交量" ], [ "amount", "成交额" ], [ "handover", "换手率" ], [ "amplitude", "振幅" ], [ "capitalization", "总市值" ], [ "total", "总股本" ], [ "eps", "每股收益率" ] ];
        this.data.type == e.QUOTETYPE.us_secu ? r.push.apply(r, [ [ "pe", "市盈率(动)" ], [ "high_p1y", "52周最高" ], [ "low_p1y", "52周最低" ], [ "avg", "平均价" ] ]) : r.push.apply(r, [ [ "pe", "市盈率" ], [ "pb", "市净率" ], [ "nvaps", "净资产" ], [ "share_capitalization", "流通市值" ], [ "share", "流通股" ], [ "in", "内盘" ], [ "out", "外盘" ] ]), 
        12 == this.data.plate.sector && r.push.apply(r, [ [ "volume_after", "盘后成交量" ], [ "amount_after", "盘后成交额" ], [ "weighted_voting_rights", "同股同权" ] ]);
        for (var s = 0, n = r.length; s < n; s++) {
            var l = r[s], u = l[0], c = l[1], h = s % 2 ? 160 : 20, g = 63 + 22 * Math.floor(s / 2);
            o.setFontSize(12), o.textAlign = "left", o.textBaseline = "top", o.setFillStyle("#808080"), 
            o.fillText(c, h, g), o.setFontSize(12), o.textAlign = "right", o.setFillStyle((0, 
            e.getData)(this, "plate.data." + u + ".color") || "#000"), o.fillText((0, e.getData)(this, "plate.data." + u + ".text"), h + 120, g);
        }
        o.restore(), o.draw(), i.draw();
    },
    stopPropagation: function(e) {},
    formatDate: function(e, t) {
        if (e) {
            (e += "").substr(0, 4);
            var o = e.substr(4, 2), i = e.substr(6, 2), a = e.substr(8, 2), r = e.substr(10, 2), s = e.substr(12, 2);
            return "date" === t ? o + "-" + i : "time" === t ? a + ":" + r + ":" + s : "";
        }
    },
    getMarketStatus: function(e) {
        return {
            1: "未开盘",
            2: "开盘集合竞价",
            3: "暂停交易",
            4: "交易中",
            5: "午间休市",
            6: "收盘集合竞价",
            7: "已收盘",
            20: "输入买卖盘",
            21: "对盘前",
            22: "对盘",
            23: "参考定价",
            24: "输入买卖盘",
            25: "不可取消",
            26: "随机收市",
            27: "对盘",
            31: "盘前",
            32: "盘后",
            41: "盘后集中撮合",
            42: "盘后连续交易",
            43: "盘后结束"
        }[e] || "未开盘";
    },
    getNowPriceFontSize: function(e) {
        var t = e.length, o = {
            8: "45rpx",
            9: "39rpx",
            10: "34rpx"
        };
        return t < 8 ? "52rpx" : o[t] || "34rpx";
    },
    getBasicNumberFontSize: function(e) {
        var t = (e + "").length, o = {
            7: "26rpx",
            8: "24rpx",
            9: "20rpx",
            10: "18rpx"
        };
        return t < 7 ? "28rpx" : o[t] || "18rpx";
    }
};

exports.default = i;