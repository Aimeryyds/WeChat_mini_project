module.exports = {
    drawLine: function(e, t, o, i, r, n, a) {
        e.beginPath(), e.setLineWidth(a || 1), e.setStrokeStyle(n || "#DEDEDE"), e.moveTo(t, o), 
        e.lineTo(i, r), e.stroke();
    },
    drawDashLine: function(e, t, o, i, r, n, a, l) {
        e.setLineWidth(l || 1), e.setStrokeStyle(a || "#F2F2F3");
        for (var s = void 0 === n ? 3 : n, d = i - t, c = r - o, h = Math.floor(Math.sqrt(d * d + c * c) / s), u = 0; u < h; u++) u % 2 == 0 ? e.moveTo(t + d / h * u, o + c / h * u) : e.lineTo(t + d / h * u, o + c / h * u);
        e.stroke();
    },
    drawPath: function(e, t, o, i) {
        e.beginPath(), e.setStrokeStyle(o), e.setLineWidth(i || 1), e.moveTo(t[0].x, t[0].y);
        for (var r = 1; r < t.length; r++) t[r] && e.lineTo(t[r].x, t[r].y);
        e.stroke();
    },
    drawBezierPath: function(e, t, o, i) {
        e.beginPath(), e.setStrokeStyle(o), e.setLineWidth(i || 1), e.moveTo(t[0].x, t[0].y);
        for (var r = 1; r < t.length; r++) if (e.lineTo(t[r].x, t[r].y), 0 == r) e.moveTo(t[r].x, t[r].y); else {
            var n = getCtrlPoint(t, r - 1);
            e.bezierCurveTo(n.pA.x, n.pA.y, n.pB.x, n.pB.y, t[r].x, t[r].y);
        }
        e.stroke();
    },
    drawRoundRect: function(e, t, o, i, r) {
        var n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5, a = arguments[6], l = arguments[7];
        void 0 === l && (l = !0), void 0 === n && (n = 5), e.beginPath(), e.moveTo(t + n, o), 
        e.lineTo(t + i - n, o), e.quadraticCurveTo(t + i, o, t + i, o + n), e.lineTo(t + i, o + r - n), 
        e.quadraticCurveTo(t + i, o + r, t + i - n, o + r), e.lineTo(t + n, o + r), e.quadraticCurveTo(t, o + r, t, o + r - n), 
        e.lineTo(t, o + n), e.quadraticCurveTo(t, o, t + n, o), e.closePath(), l && (console.log("drawRoundRect stroke"), 
        e.stroke()), a && (console.log("drawRoundRect fill"), e.fill());
    },
    drawRingPiece: function(e, t, o, i, r, n, a, l) {
        e.beginPath(), e.setLineWidth(a), e.arc(t, o, i, r, n), e.setStrokeStyle(l), e.stroke();
    },
    drawSolidPie: function(e, t, o, i, r, n, a) {
        e.beginPath(), e.arc(t, o, i, r, n, !1), e.lineTo(t, o), e.setFillStyle(a), e.fill(), 
        e.closePath();
    }
};