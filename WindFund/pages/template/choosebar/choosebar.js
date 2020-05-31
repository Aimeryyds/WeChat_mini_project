module.exports = {
    ChooseBar: function() {
        function t() {
            var t = getCurrentPages(), e = t[t.length - 1];
            return this.__page = e, this.__timeout = null, e.choosebar = this, this.init(), 
            this;
        }
        var e = function(t) {
            this.setData({
                "__choosebar__.left.show": !this.data.__choosebar__.left.show,
                "__choosebar__.right.show": !1
            });
        }, _ = function(t) {
            this.setData({
                "__choosebar__.left.show": !1,
                "__choosebar__.right.show": !this.data.__choosebar__.right.show
            });
        }, o = function() {
            this.setData({
                "__choosebar__.left.show": !1,
                "__choosebar__.right.show": !1
            }), this.chooseCommit && this.chooseCommit();
        }, a = function() {
            var t = this.data.__choosebar__, e = void 0, _ = void 0, o = void 0, a = void 0;
            this.data.__choosebar__.left.show ? (e = this.data.__choosebar__.left.list, _ = this.data.__choosebar__.left.isSingle, 
            o = this.data.__choosebar__.left.resetChecked, a = this.data.__choosebar__.left.type) : (e = this.data.__choosebar__.right.list, 
            _ = this.data.__choosebar__.right.isSingle, o = this.data.__choosebar__.right.resetChecked, 
            a = this.data.__choosebar__.right.type), _ ? this.data.__choosebar__.left.show ? (t.left.checkIndex = t.left.resetIndex, 
            t.left.active = !1) : (t.right.checkIndex = t.right.resetIndex, t.right.active = !1) : ("companylist" == a ? e.forEach(function(t) {
                t.textArray.forEach(function(t) {
                    t.checked = !!o;
                });
            }) : e.forEach(function(t) {
                t.checked = !!o;
            }), this.data.__choosebar__.left.show ? (t.left.list = e, t.left.active = !1) : (t.right.list = e, 
            t.right.active = !1)), this.setData({
                __choosebar__: t
            });
        }, h = function() {
            this.setData({
                "__choosebar__.left.show": !1,
                "__choosebar__.right.show": !1
            });
        }, s = function(t) {
            var e = t.currentTarget.dataset.index, _ = this.data.__choosebar__, o = void 0, a = void 0;
            this.data.__choosebar__.left.show ? (o = this.data.__choosebar__.left.list, a = this.data.__choosebar__.left.isSingle) : (o = this.data.__choosebar__.right.list, 
            a = this.data.__choosebar__.right.isSingle), a ? this.data.__choosebar__.left.show ? (_.left.checkIndex = e, 
            _.left.active = !0) : (_.right.checkIndex = e, _.right.active = !0) : (o[e].checked = !o[e].checked, 
            this.data.__choosebar__.left.show ? (_.left.list = o, _.left.active = !0) : (_.right.list = o, 
            _.right.active = !0)), this.setData({
                __choosebar__: _
            });
        }, i = function(t) {
            var e = t.currentTarget.dataset.code, _ = t.currentTarget.dataset.tag, o = this.data.__choosebar__, a = this.data.__choosebar__.left.show ? this.data.__choosebar__.left.list : this.data.__choosebar__.right.list;
            a.forEach(function(t) {
                t.tag === _ && t.textArray.forEach(function(t) {
                    t.value === e && (t.checked = !t.checked, console.log("bingo"));
                });
            }), this.data.__choosebar__.left.show ? (o.left.list = a, o.left.tag = "", o.left.active = !0) : (o.right.list = a, 
            o.right.active = !0), this.setData({
                __choosebar__: o
            });
        };
        return t.prototype.init = function(t) {
            var c = this.__page;
            c.lefttap = e, c.righttap = _, c.chooseconfirm = o, c.choosereset = a, c.choosehide = h, 
            c.commonlistitemtap = s, c.companylistitemtap = i;
        }, t.prototype.show = function(t) {
            var e = this.__page;
            clearTimeout(this.__timeout), e.setData({
                __choosebar__: t,
                "__choosebar__.showModal": !0
            });
        }, t.prototype.hide = function() {}, new t();
    }
};