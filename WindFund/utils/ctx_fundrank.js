var t = require("ctxbase.js");

module.exports = {
    FundRank: function(e, i, l) {
        function s() {
            return this.ctx = e, this.width = l.width, this.height = 1.1 * this.width, this.itemheight = .08, 
            this.options = l, this.draw(i), this.ctx.draw(), this;
        }
        return s.prototype.drawinfos = function() {
            var t = this.ctx, e = this.width, i = this.height, l = this.options;
            t.drawImage(l.imgpath, .12 * e, .71 * i, .24 * e, .24 * e), t.setFillStyle("#999999"), 
            t.setFontSize(14), t.setTextAlign("center"), t.fillText("长按识别小程序码", .62 * e, .81 * i), 
            t.fillText("了解更多", .62 * e, .81 * i + 22);
        }, s.prototype.drawBG = function() {
            var t = this.ctx, e = this.width, i = this.height;
            t.rect(0, 0, e, i), t.setFillStyle("#FFFFFF"), t.fill();
        }, s.prototype.drawRect = function() {
            var e = this.ctx, i = this.width, l = this.height, s = this.itemheight;
            e.setFillStyle("#FFFFFF"), e.setStrokeStyle("#EDEDED"), e.setShadow(0, 0, 10, "#EDEDED"), 
            t.drawRoundRect(e, .03 * i, .03 * l, .94 * i, .94 * l, 10, "#FFF", "#FDFDFD"), e.setShadow(0, 0, 0, "white"), 
            e.setFillStyle("#F4F4F4"), t.drawLine(e, .03 * i, .2 * l, .97 * i, .2 * l, "#F4F4F4"), 
            e.fillRect(.03 * i, .28 * l, .94 * i, l * s), e.fillRect(.03 * i, .44 * l, .94 * i, l * s), 
            e.fillRect(.03 * i, .6 * l, .94 * i, l * s);
        }, s.prototype.drawTitle = function(t) {
            var e = this.ctx, i = this.width, l = this.height;
            e.setFillStyle("#FFA125"), e.setFontSize(26), e.setTextAlign("center"), e.fillText(t.title, i / 2, .12 * l), 
            e.setFillStyle("#999999"), e.setFontSize(11), e.setTextAlign("center"), e.fillText(t.subtitle || new Date().formart("MM月dd日"), i / 2, .17 * l);
        }, s.prototype.drawFundRank = function(t) {
            var e = this.ctx, i = this.width, l = this.height, s = this.itemheight;
            e.setFillStyle("#999999"), e.setFontSize(14), e.setTextAlign("left"), e.fillText("No.", .07 * i, .25 * l + 2), 
            e.fillText("基金名称", .19 * i, .25 * l + 2), e.setTextAlign("right"), e.fillText(t.unidtype, .92 * i, .25 * l + 2), 
            t.list.forEach(function(n, h) {
                e.setFillStyle("#606060"), e.setFontSize(14), e.setTextAlign("left"), e.fillText(h + 1, .09 * i, l * (.33 + s * h) + 2), 
                e.fillText(n.fundName, .19 * i, l * (.33 + s * h) + 2), e.setTextAlign("right");
                var r = void 0;
                "navUnit" == t.sort ? r = n.navUnit : "mmfAnnualizedYield" == t.sort ? (n.mmfAnnualizedYield >= 0 ? e.setFillStyle("#EE3348") : e.setFillStyle("#09BF82"), 
                r = n.mmfAnnualizedYield + "%") : "mmfUnityield" == t.sort ? r = n.mmfUnityield : (n[t.unidtypevalue] >= 0 ? e.setFillStyle("#EE3348") : e.setFillStyle("#09BF82"), 
                r = n[t.unidtypevalue] + "%"), e.fillText(r, .93 * i, l * (.33 + s * h) + 2);
            });
        }, s.prototype.drawNewFund = function(e) {
            for (var i = this.ctx, l = this.width, s = this.height, n = this.itemheight, h = 0, r = 0; r < (5 & e.list.length); r++) i.setFillStyle("#606060"), 
            i.setFontSize(14), i.setTextAlign("left"), i.fillText(r + 1, .06 * l, s * (.25 + n * r) + 2), 
            i.fillText(e.list[r].fundname, .12 * l, s * (.25 + n * r) + 2), i.setFontSize(12), 
            i.setFillStyle(e.list[r].color), h = "QDII" == e.list[r].typename ? 5 : 0, i.fillText(e.list[r].typename, .84 * l + h, s * (.25 + n * r) + 2), 
            i.setStrokeStyle(e.list[r].color), t.drawRoundRect(i, .84 * l - 5, s * (.25 + n * r) - 13, 46, 20, 5, 0, 1);
            e.list.length > 5 && (i.setFillStyle("#606060"), i.setFontSize(14), i.setTextAlign("center"), 
            i.fillText("以及其他" + (e.list.length - 5) + "个新基金", l / 2, s * (.25 + 5 * n) + 2));
        }, s.prototype.drawManagerRank = function(e) {
            var i = this.ctx, l = this.width, s = this.height, n = this.itemheight;
            i.setFillStyle("#999999"), i.setFontSize(14), i.setTextAlign("left"), i.fillText("No.", .09 * l, .25 * s + 2), 
            i.fillText("姓名", .22 * l, .25 * s + 2), i.setTextAlign("right"), i.fillText(e.rankname, .92 * l, .25 * s + 2), 
            e.list.forEach(function(h, r) {
                i.setFillStyle("#606060"), i.setFontSize(14), i.setTextAlign("left"), i.fillText(r + 1, .1 * l, s * (.33 + n * r) + 2), 
                i.fillText(h.managerName, .22 * l, s * (.33 + n * r) + 2), i.setStrokeStyle("#FF9A65"), 
                i.setFillStyle("#FF9A65"), t.drawRoundRect(i, .38 * l, s * (.33 + n * r) - 13, 14 * h.corpName.length + 20, 20, 5, 0, 1), 
                i.fillText(h.corpName, .38 * l + 10, s * (.33 + n * r) + 2), i.setTextAlign("right"), 
                e.showcolor ? h.aceVaule >= 0 ? i.setFillStyle("#EE3348") : i.setFillStyle("#09BF82") : i.setFillStyle("#666666"), 
                i.fillText(h.aceVaule + h.aceUnit, .93 * l, s * (.33 + n * r) + 2);
            });
        }, s.prototype.draw = function(t) {
            this.ctx, this.fundtype, console.log(t), this.drawBG(), this.drawRect(), this.drawTitle(t), 
            "fundrank" == t.cardtype ? this.drawFundRank(t) : "newindex" == t.cardtype ? this.drawNewFund(t) : "managerranklist" == t.cardtype && this.drawManagerRank(t), 
            this.drawinfos();
        }, new s();
    }
};