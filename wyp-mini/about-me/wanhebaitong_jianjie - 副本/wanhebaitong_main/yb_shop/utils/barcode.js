function t(t) {
    for (var r = [], i = 0; i < t.length; i++) r.push(t.charCodeAt(i));
    return r;
}

function r(r) {
    var g, A, B, v = {
        currcs: p.C
    }, w = t(r), C = w[0] == h ? 1 : 0, _ = 0 < w.length ? s(w[C++]) : p.AB, b = 0 < w.length ? s(w[C++]) : p.AB;
    v.currcs = (A = b, B = 0, B += (g = _) == p.A ? 1 : 0, B += g == p.B ? -1 : 0, B += A == p.A ? 1 : 0, 
    0 < (B += A == p.B ? -1 : 0) ? p.A : p.B), v.currcs = function(t, r) {
        for (var i = 0; i < t.length; i++) {
            var e = t[i];
            if ((e < 48 || 57 < e) && e != h) return r;
        }
        return p.C;
    }(w, v.currcs);
    var R = new Array();
    switch (v.currcs) {
      case p.A:
        R.push(n);
        break;

      case p.B:
        R.push(c);
        break;

      default:
        R.push(a);
    }
    for (var y = 0; y < w.length; y++) {
        var z = w[y];
        z in d && (R.push(d[z]), z = w[++y]);
        var x = w.length > y + 1 ? w[y + 1] : -1;
        R = R.concat(function(t, r, s) {
            var h = [], n = -1;
            if (e(t, s)) s == p.C && (-1 == r ? (n = o, s = p.B) : -1 == r || e(r, s) || (e(r, p.A) ? (n = f, 
            s = p.A) : (n = o, s = p.B))); else if (-1 == r || e(r, s)) n = u; else switch (s) {
              case p.A:
                n = o, s = p.B;
                break;

              case p.B:
                n = f, s = p.A;
            }
            return -1 != n ? (h.push(n), h.push(i(t))) : s == p.C ? h.push(i(t, r)) : h.push(i(t)), 
            v.currcs = s, h;
        }(z, x, v.currcs)), v.currcs == p.C && y++;
    }
    for (var I = R[0], k = 1; k < R.length; k++) I += k * R[k];
    return R.push(I % 103), R.push(l), R;
}

function i(t, r) {
    return void 0 === r ? 32 <= t ? t - 32 : t + 64 : parseInt(String.fromCharCode(t) + String.fromCharCode(r));
}

function e(t, r) {
    var i = s(t);
    return i == p.ANY || i == p.AB || i == p.A && r == p.A || i == p.B && r == p.B;
}

function s(t) {
    return 48 <= t && t <= 57 ? p.ANY : 32 <= t && t <= 95 ? p.AB : t < 32 ? p.A : p.B;
}

var h = 126, n = 103, c = 104, a = 105, u = 98, f = 101, o = 100, l = 106, d = {
    CHAR_TILDE: 102
}, p = {
    ANY: 1,
    AB: 2,
    A: 3,
    B: 4,
    C: 5
};

exports.code128 = function(t, i, e, s) {
    e = parseInt(e), s = parseInt(s);
    for (var h = r(i), n = new g(t, e, s), c = n.area.width / (11 * (h.length - 3) + 35), a = n.area.left, u = n.area.top, f = 0; f < h.length; f++) for (var o = h[f], l = 0; l < 8; l += 2) {
        var d = A[o][l] * c, p = s - u, B = A[o][l + 1] * c;
        0 < d && n.fillFgRect(a, u, d, p), a += d + B;
    }
    t.draw();
};

var g = function(t, r, i) {
    this.width = r, this.height = i, this.quiet = Math.round(this.width / 40), this.border_size = 0, 
    this.padding_width = 0, this.area = {
        width: r - 2 * this.padding_width - 2 * this.quiet,
        height: i - 2 * this.border_size,
        top: this.border_size - 4,
        left: this.padding_width + this.quiet
    }, this.ctx = t, this.fg = "#000000", this.bg = "#ffffff", this.fillBgRect(0, 0, r, i), 
    this.fillBgRect(0, this.border_size, r, i - 2 * this.border_size);
};

g.prototype._fillRect = function(t, r, i, e, s) {
    this.ctx.setFillStyle(s), this.ctx.fillRect(t, r, i, e);
}, g.prototype.fillFgRect = function(t, r, i, e) {
    this._fillRect(t, r, i, e, this.fg);
}, g.prototype.fillBgRect = function(t, r, i, e) {
    this._fillRect(t, r, i, e, this.bg);
};

var A = [ [ 2, 1, 2, 2, 2, 2, 0, 0 ], [ 2, 2, 2, 1, 2, 2, 0, 0 ], [ 2, 2, 2, 2, 2, 1, 0, 0 ], [ 1, 2, 1, 2, 2, 3, 0, 0 ], [ 1, 2, 1, 3, 2, 2, 0, 0 ], [ 1, 3, 1, 2, 2, 2, 0, 0 ], [ 1, 2, 2, 2, 1, 3, 0, 0 ], [ 1, 2, 2, 3, 1, 2, 0, 0 ], [ 1, 3, 2, 2, 1, 2, 0, 0 ], [ 2, 2, 1, 2, 1, 3, 0, 0 ], [ 2, 2, 1, 3, 1, 2, 0, 0 ], [ 2, 3, 1, 2, 1, 2, 0, 0 ], [ 1, 1, 2, 2, 3, 2, 0, 0 ], [ 1, 2, 2, 1, 3, 2, 0, 0 ], [ 1, 2, 2, 2, 3, 1, 0, 0 ], [ 1, 1, 3, 2, 2, 2, 0, 0 ], [ 1, 2, 3, 1, 2, 2, 0, 0 ], [ 1, 2, 3, 2, 2, 1, 0, 0 ], [ 2, 2, 3, 2, 1, 1, 0, 0 ], [ 2, 2, 1, 1, 3, 2, 0, 0 ], [ 2, 2, 1, 2, 3, 1, 0, 0 ], [ 2, 1, 3, 2, 1, 2, 0, 0 ], [ 2, 2, 3, 1, 1, 2, 0, 0 ], [ 3, 1, 2, 1, 3, 1, 0, 0 ], [ 3, 1, 1, 2, 2, 2, 0, 0 ], [ 3, 2, 1, 1, 2, 2, 0, 0 ], [ 3, 2, 1, 2, 2, 1, 0, 0 ], [ 3, 1, 2, 2, 1, 2, 0, 0 ], [ 3, 2, 2, 1, 1, 2, 0, 0 ], [ 3, 2, 2, 2, 1, 1, 0, 0 ], [ 2, 1, 2, 1, 2, 3, 0, 0 ], [ 2, 1, 2, 3, 2, 1, 0, 0 ], [ 2, 3, 2, 1, 2, 1, 0, 0 ], [ 1, 1, 1, 3, 2, 3, 0, 0 ], [ 1, 3, 1, 1, 2, 3, 0, 0 ], [ 1, 3, 1, 3, 2, 1, 0, 0 ], [ 1, 1, 2, 3, 1, 3, 0, 0 ], [ 1, 3, 2, 1, 1, 3, 0, 0 ], [ 1, 3, 2, 3, 1, 1, 0, 0 ], [ 2, 1, 1, 3, 1, 3, 0, 0 ], [ 2, 3, 1, 1, 1, 3, 0, 0 ], [ 2, 3, 1, 3, 1, 1, 0, 0 ], [ 1, 1, 2, 1, 3, 3, 0, 0 ], [ 1, 1, 2, 3, 3, 1, 0, 0 ], [ 1, 3, 2, 1, 3, 1, 0, 0 ], [ 1, 1, 3, 1, 2, 3, 0, 0 ], [ 1, 1, 3, 3, 2, 1, 0, 0 ], [ 1, 3, 3, 1, 2, 1, 0, 0 ], [ 3, 1, 3, 1, 2, 1, 0, 0 ], [ 2, 1, 1, 3, 3, 1, 0, 0 ], [ 2, 3, 1, 1, 3, 1, 0, 0 ], [ 2, 1, 3, 1, 1, 3, 0, 0 ], [ 2, 1, 3, 3, 1, 1, 0, 0 ], [ 2, 1, 3, 1, 3, 1, 0, 0 ], [ 3, 1, 1, 1, 2, 3, 0, 0 ], [ 3, 1, 1, 3, 2, 1, 0, 0 ], [ 3, 3, 1, 1, 2, 1, 0, 0 ], [ 3, 1, 2, 1, 1, 3, 0, 0 ], [ 3, 1, 2, 3, 1, 1, 0, 0 ], [ 3, 3, 2, 1, 1, 1, 0, 0 ], [ 3, 1, 4, 1, 1, 1, 0, 0 ], [ 2, 2, 1, 4, 1, 1, 0, 0 ], [ 4, 3, 1, 1, 1, 1, 0, 0 ], [ 1, 1, 1, 2, 2, 4, 0, 0 ], [ 1, 1, 1, 4, 2, 2, 0, 0 ], [ 1, 2, 1, 1, 2, 4, 0, 0 ], [ 1, 2, 1, 4, 2, 1, 0, 0 ], [ 1, 4, 1, 1, 2, 2, 0, 0 ], [ 1, 4, 1, 2, 2, 1, 0, 0 ], [ 1, 1, 2, 2, 1, 4, 0, 0 ], [ 1, 1, 2, 4, 1, 2, 0, 0 ], [ 1, 2, 2, 1, 1, 4, 0, 0 ], [ 1, 2, 2, 4, 1, 1, 0, 0 ], [ 1, 4, 2, 1, 1, 2, 0, 0 ], [ 1, 4, 2, 2, 1, 1, 0, 0 ], [ 2, 4, 1, 2, 1, 1, 0, 0 ], [ 2, 2, 1, 1, 1, 4, 0, 0 ], [ 4, 1, 3, 1, 1, 1, 0, 0 ], [ 2, 4, 1, 1, 1, 2, 0, 0 ], [ 1, 3, 4, 1, 1, 1, 0, 0 ], [ 1, 1, 1, 2, 4, 2, 0, 0 ], [ 1, 2, 1, 1, 4, 2, 0, 0 ], [ 1, 2, 1, 2, 4, 1, 0, 0 ], [ 1, 1, 4, 2, 1, 2, 0, 0 ], [ 1, 2, 4, 1, 1, 2, 0, 0 ], [ 1, 2, 4, 2, 1, 1, 0, 0 ], [ 4, 1, 1, 2, 1, 2, 0, 0 ], [ 4, 2, 1, 1, 1, 2, 0, 0 ], [ 4, 2, 1, 2, 1, 1, 0, 0 ], [ 2, 1, 2, 1, 4, 1, 0, 0 ], [ 2, 1, 4, 1, 2, 1, 0, 0 ], [ 4, 1, 2, 1, 2, 1, 0, 0 ], [ 1, 1, 1, 1, 4, 3, 0, 0 ], [ 1, 1, 1, 3, 4, 1, 0, 0 ], [ 1, 3, 1, 1, 4, 1, 0, 0 ], [ 1, 1, 4, 1, 1, 3, 0, 0 ], [ 1, 1, 4, 3, 1, 1, 0, 0 ], [ 4, 1, 1, 1, 1, 3, 0, 0 ], [ 4, 1, 1, 3, 1, 1, 0, 0 ], [ 1, 1, 3, 1, 4, 1, 0, 0 ], [ 1, 1, 4, 1, 3, 1, 0, 0 ], [ 3, 1, 1, 1, 4, 1, 0, 0 ], [ 4, 1, 1, 1, 3, 1, 0, 0 ], [ 2, 1, 1, 4, 1, 2, 0, 0 ], [ 2, 1, 1, 2, 1, 4, 0, 0 ], [ 2, 1, 1, 2, 3, 2, 0, 0 ], [ 2, 3, 3, 1, 1, 1, 2, 0 ] ];