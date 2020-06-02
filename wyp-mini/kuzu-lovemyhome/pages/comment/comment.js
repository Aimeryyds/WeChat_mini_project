function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = module.exports = {};

Object.defineProperty(t, "__esModule", {
    value: !0
});

var a = e(require("../../npm/babel-runtime/regenerator/index.js")), s = e(require("../../npm/babel-runtime/core-js/json/stringify.js")), n = e(require("../../npm/babel-runtime/helpers/asyncToGenerator.js")), r = e(require("../../npm/babel-runtime/core-js/object/get-prototype-of.js")), i = e(require("../../npm/babel-runtime/helpers/classCallCheck.js")), u = e(require("../../npm/babel-runtime/helpers/createClass.js")), l = e(require("../../npm/babel-runtime/helpers/possibleConstructorReturn.js")), o = e(require("../../npm/babel-runtime/helpers/inherits.js")), p = require("../../npm/labrador-immutable/index.js"), h = e(p), c = e(require("../../npm/seamless-immutable/src/seamless-immutable.js")), d = e(require("../../dataService.js")), m = require("../../const.js"), f = function(e) {
    function t(e) {
        (0, i.default)(this, t);
        var a = (0, l.default)(this, (t.__proto__ || (0, r.default)(t)).call(this, e));
        return a.p = {
            house_id: "",
            loading: !1,
            num: 10,
            nextpage: !0,
            note_list: [],
            newDatas: [],
            compare: ""
        }, a.state = (0, c.default)({
            loading: !1,
            status: "",
            note_list: []
        }), a;
    }
    return (0, o.default)(t, e), (0, u.default)(t, [ {
        key: "makePhoneCall",
        value: function(e) {
            switch (e.currentTarget.dataset.type) {
              case "tel":
                h.default.wx.makePhoneCall({
                    phoneNumber: e.currentTarget.dataset.value
                });
            }
        }
    }, {
        key: "_loadData",
        value: function() {
            var e = (0, n.default)(a.default.mark(function e() {
                var t, n;
                return a.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.p.loading) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (t = {
                            house_id: this.p.house_id,
                            from: this.p.note_list.length + 1,
                            num: this.p.num
                        }, this.p.compare !== (0, s.default)(t)) {
                            e.next = 8;
                            break;
                        }
                        return console.log("no params change:", this.p.compare), e.abrupt("return");

                      case 8:
                        this.p.compare = (0, s.default)(t);

                      case 9:
                        return this.setState({
                            loading: !(this.p.loading = !0)
                        }), e.next = 12, d.default.apiIJCall(m.API.getHouseNoteList, t);

                      case 12:
                        0 != (n = e.sent).retval.note_list.length && (this.p.newDatas = this.p.note_list.concat(n.retval.note_list.map(function(e) {
                            return e.note = e.note.replace(/\\n/g, "\n"), e;
                        }))), this.setState({
                            loading: !(this.p.loading = !1),
                            status: 0 == this.p.newDatas.length ? "empty" : "have",
                            note_list: 0 == this.p.newDatas.length ? [] : this.p.newDatas
                        }), this.p.house_list = this.p.newDatas, this.p.nextpage = n.retval.house_list.length == this.p.num;

                      case 17:
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
        key: "updateList",
        value: function() {
            this.p.house_list.length = 0, this.p.newDatas.length = 0, this.p.nextpage = !0, 
            this._loadData();
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            0 != this.p.house_list.length && this.updateList(), h.default.stopPullDownRefresh();
        }
    }, {
        key: "onReachBottom",
        value: function() {
            this.p.nextpage && this.p.note_list.length % this.p.num == 0 && this._loadData();
        }
    }, {
        key: "onLoad",
        value: function(e) {
            this.p.house_id = e.house_id, this._loadData();
        }
    } ]), t;
}(p.Component);

Page(require("../../npm/labrador/index.js")._createPage(f));