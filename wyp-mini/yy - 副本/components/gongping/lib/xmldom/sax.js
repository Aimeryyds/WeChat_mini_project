function e() {}

function t(e, t, i, f, d) {
    function m(e) {
        if (e > 65535) {
            var t = 55296 + ((e -= 65536) >> 10), r = 56320 + (1023 & e);
            return String.fromCharCode(t, r);
        }
        return String.fromCharCode(e);
    }
    function h(e) {
        var t = e.slice(1, -1);
        return t in i ? i[t] : "#" === t.charAt(0) ? m(parseInt(t.substr(1).replace("x", "0x"))) : (d.error("entity not found:" + e), 
        e);
    }
    function g(t) {
        if (t > D) {
            var r = e.substring(D, t).replace(/&#?\w+;/g, h);
            v && p(D), f.characters(r, 0, t - D), D = t;
        }
    }
    function p(t, r) {
        for (;t >= b && (r = x.exec(e)); ) w = r.index, b = w + r[0].length, v.lineNumber++;
        v.columnNumber = t - w + 1;
    }
    for (var w = 0, b = 0, x = /.*(?:\r\n?|\n)|.*$/g, v = f.locator, N = [ {
        currentNSMap: t
    } ], F = {}, D = 0; ;) {
        try {
            var k = e.indexOf("<", D);
            if (k < 0) {
                if (!e.substr(D).match(/^\s*$/)) {
                    var E = f.doc, C = E.createTextNode(e.substr(D));
                    E.appendChild(C), f.currentElement = C;
                }
                return;
            }
            switch (k > D && g(k), e.charAt(k + 1)) {
              case "/":
                var $ = e.indexOf(">", k + 3), A = e.substring(k + 2, $), M = N.pop();
                $ < 0 ? (A = e.substring(k + 2).replace(/[\s<].*/, ""), d.error("end tag name: " + A + " is not complete:" + M.tagName), 
                $ = k + 1 + A.length) : A.match(/\s</) && (A = A.replace(/[\s<].*/, ""), d.error("end tag name: " + A + " maybe not complete"), 
                $ = k + 1 + A.length);
                var O = M.localNSMap, T = M.tagName == A;
                if (T || M.tagName && M.tagName.toLowerCase() == A.toLowerCase()) {
                    if (f.endElement(M.uri, M.localName, A), O) for (var S in O) f.endPrefixMapping(S);
                    T || d.fatalError("end tag name: " + A + " is not match the current start tagName:" + M.tagName);
                } else N.push(M);
                $++;
                break;

              case "?":
                v && p(k), $ = o(e, k, f);
                break;

              case "!":
                v && p(k), $ = u(e, k, f, d);
                break;

              default:
                v && p(k);
                var q = new l(), y = N[N.length - 1].currentNSMap, $ = a(e, k, q, y, h, d), I = q.length;
                if (!q.closed && c(e, $, q.tagName, F) && (q.closed = !0, i.nbsp || d.warning("unclosed xml attribute")), 
                v && I) {
                    for (var L = r(v, {}), _ = 0; _ < I; _++) {
                        var R = q[_];
                        p(R.offset), R.locator = r(v, {});
                    }
                    f.locator = L, n(q, f, y) && N.push(q), f.locator = v;
                } else n(q, f, y) && N.push(q);
                "http://www.w3.org/1999/xhtml" !== q.uri || q.closed ? $++ : $ = s(e, $, q.tagName, h, f);
            }
        } catch (e) {
            d.error("element parse error: " + e), $ = -1;
        }
        $ > D ? D = $ : g(Math.max(k, D) + 1);
    }
}

function r(e, t) {
    return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
}

function a(e, t, r, a, n, s) {
    for (var c, i = ++t, u = p; ;) {
        var o = e.charAt(i);
        switch (o) {
          case "=":
            if (u === w) c = e.slice(t, i), u = x; else {
                if (u !== b) throw new Error("attribute equal must after attrName");
                u = x;
            }
            break;

          case "'":
          case '"':
            if (u === x || u === w) {
                if (u === w && (s.warning('attribute value must after "="'), c = e.slice(t, i)), 
                t = i + 1, !((i = e.indexOf(o, t)) > 0)) throw new Error("attribute value no end '" + o + "' match");
                l = e.slice(t, i).replace(/&#?\w+;/g, n), r.add(c, l, t - 1), u = N;
            } else {
                if (u != v) throw new Error('attribute value must after "="');
                l = e.slice(t, i).replace(/&#?\w+;/g, n), r.add(c, l, t), s.warning('attribute "' + c + '" missed start quot(' + o + ")!!"), 
                t = i + 1, u = N;
            }
            break;

          case "/":
            switch (u) {
              case p:
                r.setTagName(e.slice(t, i));

              case N:
              case F:
              case D:
                u = D, r.closed = !0;

              case v:
              case w:
              case b:
                break;

              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;

          case "":
            return s.error("unexpected end of input"), u == p && r.setTagName(e.slice(t, i)), 
            i;

          case ">":
            switch (u) {
              case p:
                r.setTagName(e.slice(t, i));

              case N:
              case F:
              case D:
                break;

              case v:
              case w:
                "/" === (l = e.slice(t, i)).slice(-1) && (r.closed = !0, l = l.slice(0, -1));

              case b:
                u === b && (l = c), u == v ? (s.warning('attribute "' + l + '" missed quot(")!!'), 
                r.add(c, l.replace(/&#?\w+;/g, n), t)) : ("http://www.w3.org/1999/xhtml" === a[""] && l.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + l + '" missed value!! "' + l + '" instead!!'), 
                r.add(l, l, t));
                break;

              case x:
                throw new Error("attribute value missed!!");
            }
            return i;

          case "":
            o = " ";

          default:
            if (o <= " ") switch (u) {
              case p:
                r.setTagName(e.slice(t, i)), u = F;
                break;

              case w:
                c = e.slice(t, i), u = b;
                break;

              case v:
                var l = e.slice(t, i).replace(/&#?\w+;/g, n);
                s.warning('attribute "' + l + '" missed quot(")!!'), r.add(c, l, t);

              case N:
                u = F;
            } else switch (u) {
              case b:
                r.tagName;
                "http://www.w3.org/1999/xhtml" === a[""] && c.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + c + '" missed value!! "' + c + '" instead2!!'), 
                r.add(c, c, t), t = i, u = w;
                break;

              case N:
                s.warning('attribute space is required"' + c + '"!!');

              case F:
                u = w, t = i;
                break;

              case x:
                u = v, t = i;
                break;

              case D:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
        }
        i++;
    }
}

function n(e, t, r) {
    for (var a = e.tagName, n = null, s = e.length; s--; ) {
        var c = e[s], u = c.qName, o = c.value;
        if ((m = u.indexOf(":")) > 0) var l = c.prefix = u.slice(0, m), f = u.slice(m + 1), d = "xmlns" === l && f; else f = u, 
        l = null, d = "xmlns" === u && "";
        c.localName = f, !1 !== d && (null == n && (n = {}, i(r, r = {})), r[d] = n[d] = o, 
        c.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(d, o));
    }
    for (s = e.length; s--; ) (l = (c = e[s]).prefix) && ("xml" === l && (c.uri = "http://www.w3.org/XML/1998/namespace"), 
    "xmlns" !== l && (c.uri = r[l || ""]));
    var m = a.indexOf(":");
    m > 0 ? (l = e.prefix = a.slice(0, m), f = e.localName = a.slice(m + 1)) : (l = null, 
    f = e.localName = a);
    var h = e.uri = r[l || ""];
    if (t.startElement(h, f, a, e), !e.closed) return e.currentNSMap = r, e.localNSMap = n, 
    !0;
    if (t.endElement(h, f, a), n) for (l in n) t.endPrefixMapping(l);
}

function s(e, t, r, a, n) {
    if (/^(?:script|textarea)$/i.test(r)) {
        var s = e.indexOf("</" + r + ">", t), c = e.substring(t + 1, s);
        if (/[&<]/.test(c)) return /^script$/i.test(r) ? (n.characters(c, 0, c.length), 
        s) : (c = c.replace(/&#?\w+;/g, a), n.characters(c, 0, c.length), s);
    }
    return t + 1;
}

function c(e, t, r, a) {
    var n = a[r];
    return null == n && ((n = e.lastIndexOf("</" + r + ">")) < t && (n = e.lastIndexOf("</" + r)), 
    a[r] = n), n < t;
}

function i(e, t) {
    for (var r in e) t[r] = e[r];
}

function u(e, t, r, a) {
    switch (e.charAt(t + 2)) {
      case "-":
        return "-" === e.charAt(t + 3) ? (n = e.indexOf("--\x3e", t + 4)) > t ? (r.comment(e, t + 4, n - t - 4), 
        n + 3) : (a.error("Unclosed comment"), -1) : -1;

      default:
        if ("CDATA[" == e.substr(t + 3, 6)) {
            var n = e.indexOf("]]>", t + 9);
            return r.startCDATA(), r.characters(e, t + 9, n - t - 9), r.endCDATA(), n + 3;
        }
        var s = d(e, t), c = s.length;
        if (c > 1 && /!doctype/i.test(s[0][0])) {
            var i = s[1][0], u = c > 3 && /^public$/i.test(s[2][0]) && s[3][0], o = c > 4 && s[4][0], l = s[c - 1];
            return r.startDTD(i, u && u.replace(/^(['"])(.*?)\1$/, "$2"), o && o.replace(/^(['"])(.*?)\1$/, "$2")), 
            r.endDTD(), l.index + l[0].length;
        }
    }
    return -1;
}

function o(e, t, r) {
    var a = e.indexOf("?>", t);
    if (a) {
        var n = e.substring(t, a).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (n) {
            n[0].length;
            return r.processingInstruction(n[1], n[2]), a + 2;
        }
        return -1;
    }
    return -1;
}

function l(e) {}

function f(e, t) {
    return e.__proto__ = t, e;
}

function d(e, t) {
    var r, a = [], n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (n.lastIndex = t, n.exec(e); r = n.exec(e); ) if (a.push(r), r[1]) return a;
}

var m = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, h = new RegExp("[\\-\\.0-9" + m.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), g = new RegExp("^" + m.source + h.source + "*(?::" + m.source + h.source + "*)?$"), p = 0, w = 1, b = 2, x = 3, v = 4, N = 5, F = 6, D = 7;

e.prototype = {
    parse: function(e, r, a) {
        var n = this.domBuilder;
        n.startDocument(), i(r, r = {}), t(e, r, a, n, this.errorHandler), n.endDocument();
    }
}, l.prototype = {
    setTagName: function(e) {
        if (!g.test(e)) throw new Error("invalid tagName:" + e);
        this.tagName = e;
    },
    add: function(e, t, r) {
        if (!g.test(e)) throw new Error("invalid attribute:" + e);
        this[this.length++] = {
            qName: e,
            value: t,
            offset: r
        };
    },
    length: 0,
    getLocalName: function(e) {
        return this[e].localName;
    },
    getLocator: function(e) {
        return this[e].locator;
    },
    getQName: function(e) {
        return this[e].qName;
    },
    getURI: function(e) {
        return this[e].uri;
    },
    getValue: function(e) {
        return this[e].value;
    }
}, f({}, f.prototype) instanceof f || (f = function(e, t) {
    function r() {}
    r.prototype = t, r = new r();
    for (t in e) r[t] = e[t];
    return r;
}), exports.XMLReader = e;