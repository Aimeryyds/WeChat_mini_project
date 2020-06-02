function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = module.exports = {};

Object.defineProperty(t, "__esModule", {
    value: !0
});

var a = e(require("../../npm/babel-runtime/helpers/extends.js")), r = e(require("../../npm/babel-runtime/regenerator/index.js")), i = e(require("../../npm/babel-runtime/helpers/asyncToGenerator.js")), s = e(require("../../npm/babel-runtime/core-js/object/get-prototype-of.js")), n = e(require("../../npm/babel-runtime/helpers/classCallCheck.js")), o = e(require("../../npm/babel-runtime/helpers/createClass.js")), u = e(require("../../npm/babel-runtime/helpers/possibleConstructorReturn.js")), l = e(require("../../npm/babel-runtime/helpers/inherits.js")), h = require("../../npm/labrador-immutable/index.js"), p = e(h), d = e(require("../../npm/seamless-immutable/src/seamless-immutable.js")), c = e(require("../../dataService.js")), m = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t.default = e, t;
}(require("../../utils/util.js")), f = require("../../const.js"), g = function(e) {
    function t(e) {
        (0, n.default)(this, t);
        var a = (0, u.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, e));
        return a.p = {
            page: 1,
            num: 10,
            nextpage: !0,
            houses: [],
            total: 0
        }, a.state = (0, d.default)({
            status: ""
        }), a;
    }
    return (0, l.default)(t, e), (0, o.default)(t, [ {
        key: "navigateTo",
        value: function(e) {
            var t = (+this.index ? f.BASEURL.rent_details : f.BASEURL.esf_details) + e.currentTarget.dataset.value + "&cityid=" + c.default.locInfo.cityid;
            getCurrentPages().length, p.default.wx.redirectTo({
                url: t
            });
        }
    }, {
        key: "updateList",
        value: function() {
            this.p.houses.length = 0, this.p.nextpage = !0, this.p.page = 1, this.loading = !1, 
            this._loadData();
        }
    }, {
        key: "_loadData",
        value: function() {
            var e = (0, i.default)(r.default.mark(function e() {
                var t, a, i;
                return r.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            list_type: 0 == this.index ? "ershoufang" : "zufang",
                            cityid: c.default.locInfo.cityid,
                            page: this.p.page,
                            num: this.p.num,
                            location: this.location,
                            price_low: this.price_low,
                            price_top: Math.min(+this.price_top, 99999)
                        }, c.default.SDK.showLoading && p.default.wx.showLoading({
                            title: "加载中",
                            mask: !0
                        }), e.next = 4, c.default._apiCall(f.URL2, f.API.gethouse, t, "GET");

                      case 4:
                        a = e.sent, i = [], a.retval.houses && 0 != a.retval.houses.length && (i = a.retval.houses.map(function(e) {
                            return m.getFilterData(e, [ "other", "bedroom", "livingroom", "toilet", "buildarea", "heading", "areaname", "communityname", "price", "rentmode", "onePrice" ]);
                        })), i = this.p.houses.concat(i.map(function(e) {
                            return e.onePrice = parseInt(e.onePrice), e.buildarea = parseInt(e.buildarea), e;
                        })), c.default.SDK.showLoading && p.default.wx.hideLoading(), this.setState({
                            status: 0 == i.length ? "empty" : "have",
                            city: {
                                datas: 0 == i.length ? [] : i
                            },
                            ___src___: "setState.end._loadData"
                        }), this.p.houses = i, a.retval.total && i.length >= +a.retval.total || void 0 == a.retval.houses || 0 == a.retval.houses.length ? this.p.nextpage = !1 : (this.p.nextpage = !0, 
                        this.p.page += 1);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }()
    }, {
        key: "imageError",
        value: function(e) {
            e.detail.errMsg.indexOf("404 (Not Found)") > 0 && (void 0 === this.p.houses[e.currentTarget.dataset.idx].other ? this.p.houses[e.currentTarget.dataset.idx].other = {
                house: {
                    imgurl: "https://res.5i5j.com/cache/weixin/common/default_list.jpg"
                }
            } : this.p.houses[e.currentTarget.dataset.idx].other.house.imgurl = "https://res.5i5j.com/cache/weixin/common/default_list.jpg", 
            this.setState({
                city: (0, a.default)({}, this.state.city, {
                    datas: this.p.houses
                }),
                ___src___: "fixErrorImage"
            }));
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            0 != this.p.houses.length && this.updateList(), p.default.stopPullDownRefresh();
        }
    }, {
        key: "onReachBottom",
        value: function() {
            this.p.nextpage && this._loadData();
        }
    }, {
        key: "onLoad",
        value: function(e) {
            this.index = e.list_type, this.location = e.location, this.price_low = e.price_low, 
            this.price_top = e.price_top, this._loadData(), this.setState({
                index: this.index
            });
        }
    } ]), t;
}(h.Component);

Page(require("../../npm/labrador/index.js")._createPage(g));