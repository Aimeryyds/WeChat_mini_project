module.exports = {};

module.exports = function(e, r, l) {
    var c = void 0 === l;
    switch (r.length) {
      case 0:
        return c ? e() : e.call(l);

      case 1:
        return c ? e(r[0]) : e.call(l, r[0]);

      case 2:
        return c ? e(r[0], r[1]) : e.call(l, r[0], r[1]);

      case 3:
        return c ? e(r[0], r[1], r[2]) : e.call(l, r[0], r[1], r[2]);

      case 4:
        return c ? e(r[0], r[1], r[2], r[3]) : e.call(l, r[0], r[1], r[2], r[3]);
    }
    return e.apply(l, r);
};