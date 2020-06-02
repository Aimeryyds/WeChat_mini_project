Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(t) {
    return t.toString().length < 2 ? "0" + t : t.toString();
}, e = function() {
    function e(t) {
        this.time = new Date(t);
    }
    return e.prototype.fromNow = function() {
        var e = new Date(), i = e.getTime() - this.time.getTime();
        return i <= 6e5 ? "刚刚" : i <= 36e5 ? Math.round(i / 60 / 1e3) + "分钟前" : i <= 864e5 ? Math.round(i / 60 / 60 / 1e3) + "小时前" : e.getFullYear() == this.time.getFullYear() ? t(this.time.getMonth() + 1) + "-" + t(this.time.getDate()) + " " + t(this.time.getHours()) + ":" + t(this.time.getMinutes()) : this.time.getFullYear() + "-" + t(this.time.getMonth() + 1) + "-" + t(this.time.getDate());
    }, e.prototype.format = function(e) {
        return e.replace("yyyy", this.time.getFullYear().toString()).replace("MM", t(this.time.getMonth() + 1)).replace("dd", t(this.time.getDate())).replace("HH", t(this.time.getHours())).replace("mm", t(this.time.getMinutes()));
    }, e.prototype.fixTime = function() {
        var e = new Date();
        if (e.getFullYear() == this.time.getFullYear()) {
            var i = new Date(e.getFullYear(), e.getMonth(), e.getDate()), r = new Date(this.time.getFullYear(), this.time.getMonth(), this.time.getDate());
            return i.getTime() - r.getTime() == 0 ? "今天 " + t(this.time.getHours()) + ":" + t(this.time.getMinutes()) : i.getTime() - r.getTime() <= 864e5 ? "昨天 " + t(this.time.getHours()) + ":" + t(this.time.getMinutes()) : this.fromNow();
        }
        return this.fromNow();
    }, e;
}();

exports.default = e;