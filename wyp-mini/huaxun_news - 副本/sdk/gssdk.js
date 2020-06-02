function loadHisTask(e) {
    var t = {};
    t.taskId = e, t.time = new Date().getTime(), hTasks.push(t);
}

function compareHisTask(e) {
    for (var t = 0; t < hTasks.length; t++) if (e == hTasks[t].taskId) return !0;
    return !1;
}

function XMLReader() {}

function _parse(e, t, n, r, i) {
    function o(e) {
        var t = e.slice(1, -1);
        return t in n ? n[t] : "#" === t.charAt(0) ? function(e) {
            if (e > 65535) {
                var t = 55296 + ((e -= 65536) >> 10), n = 56320 + (1023 & e);
                return String.fromCharCode(t, n);
            }
            return String.fromCharCode(e);
        }(parseInt(t.substr(1).replace("x", "0x"))) : (i.error("entity not found:" + e), 
        e);
    }
    function a(t) {
        if (t > m) {
            var n = e.substring(m, t).replace(/&#?\w+;/g, o);
            d && s(m), r.characters(n, 0, t - m), m = t;
        }
    }
    function s(t, n) {
        for (;t >= l && (n = c.exec(e)); ) u = n.index, l = u + n[0].length, d.lineNumber++;
        d.columnNumber = t - u + 1;
    }
    for (var u = 0, l = 0, c = /.*(?:\r\n?|\n)|.*$/g, d = r.locator, p = [ {
        currentNSMap: t
    } ], f = {}, m = 0; ;) {
        try {
            var h = e.indexOf("<", m);
            if (h < 0) {
                if (!e.substr(m).match(/^\s*$/)) {
                    var N = r.doc, E = N.createTextNode(e.substr(m));
                    N.appendChild(E), r.currentElement = E;
                }
                return;
            }
            switch (h > m && a(h), e.charAt(h + 1)) {
              case "/":
                var g = e.indexOf(">", h + 3), T = e.substring(h + 2, g), _ = p.pop();
                g < 0 ? (T = e.substring(h + 2).replace(/[\s<].*/, ""), i.error("end tag name: " + T + " is not complete:" + _.tagName), 
                g = h + 1 + T.length) : T.match(/\s</) && (T = T.replace(/[\s<].*/, ""), i.error("end tag name: " + T + " maybe not complete"), 
                g = h + 1 + T.length);
                var v = _.localNSMap, y = _.tagName == T;
                if (y || _.tagName && _.tagName.toLowerCase() == T.toLowerCase()) {
                    if (r.endElement(_.uri, _.localName, T), v) for (var D in v) r.endPrefixMapping(D);
                    y || i.fatalError("end tag name: " + T + " is not match the current start tagName:" + _.tagName);
                } else p.push(_);
                g++;
                break;

              case "?":
                d && s(h), g = parseInstruction(e, h, r);
                break;

              case "!":
                d && s(h), g = parseDCC(e, h, r, i);
                break;

              default:
                d && s(h);
                var O = new ElementAttributes(), A = p[p.length - 1].currentNSMap, S = (g = parseElementStartPart(e, h, O, A, o, i), 
                O.length);
                if (!O.closed && fixSelfClosed(e, g, O.tagName, f) && (O.closed = !0, n.nbsp || i.warning("unclosed xml attribute")), 
                d && S) {
                    for (var R = copyLocator(d, {}), w = 0; w < S; w++) {
                        var b = O[w];
                        s(b.offset), b.locator = copyLocator(d, {});
                    }
                    r.locator = R, appendElementFromSax(O, r, A) && p.push(O), r.locator = d;
                } else appendElementFromSax(O, r, A) && p.push(O);
                "http://www.w3.org/1999/xhtml" !== O.uri || O.closed ? g++ : g = parseHtmlSpecialContent(e, g, O.tagName, o, r);
            }
        } catch (e) {
            i.error("element parse error: " + e), g = -1;
        }
        g > m ? m = g : a(Math.max(h, m) + 1);
    }
}

function copyLocator(e, t) {
    return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
}

function parseElementStartPart(e, t, n, r, i, o) {
    for (var a, s = ++t, u = S_TAG; ;) {
        var l = e.charAt(s);
        switch (l) {
          case "=":
            if (u === S_ATTR) a = e.slice(t, s), u = S_EQ; else {
                if (u !== S_ATTR_SPACE) throw new Error("attribute equal must after attrName");
                u = S_EQ;
            }
            break;

          case "'":
          case '"':
            if (u === S_EQ || u === S_ATTR) {
                if (u === S_ATTR && (o.warning('attribute value must after "="'), a = e.slice(t, s)), 
                t = s + 1, !((s = e.indexOf(l, t)) > 0)) throw new Error("attribute value no end '" + l + "' match");
                c = e.slice(t, s).replace(/&#?\w+;/g, i), n.add(a, c, t - 1), u = S_ATTR_END;
            } else {
                if (u != S_ATTR_NOQUOT_VALUE) throw new Error('attribute value must after "="');
                c = e.slice(t, s).replace(/&#?\w+;/g, i), n.add(a, c, t), o.warning('attribute "' + a + '" missed start quot(' + l + ")!!"), 
                t = s + 1, u = S_ATTR_END;
            }
            break;

          case "/":
            switch (u) {
              case S_TAG:
                n.setTagName(e.slice(t, s));

              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                u = S_TAG_CLOSE, n.closed = !0;

              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
              case S_ATTR_SPACE:
                break;

              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;

          case "":
            return o.error("unexpected end of input"), u == S_TAG && n.setTagName(e.slice(t, s)), 
            s;

          case ">":
            switch (u) {
              case S_TAG:
                n.setTagName(e.slice(t, s));

              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                break;

              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                "/" === (c = e.slice(t, s)).slice(-1) && (n.closed = !0, c = c.slice(0, -1));

              case S_ATTR_SPACE:
                u === S_ATTR_SPACE && (c = a), u == S_ATTR_NOQUOT_VALUE ? (o.warning('attribute "' + c + '" missed quot(")!!'), 
                n.add(a, c.replace(/&#?\w+;/g, i), t)) : ("http://www.w3.org/1999/xhtml" === r[""] && c.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + c + '" missed value!! "' + c + '" instead!!'), 
                n.add(c, c, t));
                break;

              case S_EQ:
                throw new Error("attribute value missed!!");
            }
            return s;

          case "":
            l = " ";

          default:
            if (l <= " ") switch (u) {
              case S_TAG:
                n.setTagName(e.slice(t, s)), u = S_TAG_SPACE;
                break;

              case S_ATTR:
                a = e.slice(t, s), u = S_ATTR_SPACE;
                break;

              case S_ATTR_NOQUOT_VALUE:
                var c = e.slice(t, s).replace(/&#?\w+;/g, i);
                o.warning('attribute "' + c + '" missed quot(")!!'), n.add(a, c, t);

              case S_ATTR_END:
                u = S_TAG_SPACE;
            } else switch (u) {
              case S_ATTR_SPACE:
                n.tagName, "http://www.w3.org/1999/xhtml" === r[""] && a.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'), 
                n.add(a, a, t), t = s, u = S_ATTR;
                break;

              case S_ATTR_END:
                o.warning('attribute space is required"' + a + '"!!');

              case S_TAG_SPACE:
                u = S_ATTR, t = s;
                break;

              case S_EQ:
                u = S_ATTR_NOQUOT_VALUE, t = s;
                break;

              case S_TAG_CLOSE:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
        }
        s++;
    }
}

function appendElementFromSax(e, t, n) {
    for (var r = e.tagName, i = null, o = e.length; o--; ) {
        var a = e[o], s = a.qName, u = a.value;
        if ((p = s.indexOf(":")) > 0) var l = a.prefix = s.slice(0, p), c = s.slice(p + 1), d = "xmlns" === l && c; else c = s, 
        l = null, d = "xmlns" === s && "";
        a.localName = c, !1 !== d && (null == i && (i = {}, _copy(n, n = {})), n[d] = i[d] = u, 
        a.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(d, u));
    }
    for (o = e.length; o--; ) (l = (a = e[o]).prefix) && ("xml" === l && (a.uri = "http://www.w3.org/XML/1998/namespace"), 
    "xmlns" !== l && (a.uri = n[l || ""]));
    var p;
    (p = r.indexOf(":")) > 0 ? (l = e.prefix = r.slice(0, p), c = e.localName = r.slice(p + 1)) : (l = null, 
    c = e.localName = r);
    var f = e.uri = n[l || ""];
    if (t.startElement(f, c, r, e), !e.closed) return e.currentNSMap = n, e.localNSMap = i, 
    !0;
    if (t.endElement(f, c, r), i) for (l in i) t.endPrefixMapping(l);
}

function parseHtmlSpecialContent(e, t, n, r, i) {
    if (/^(?:script|textarea)$/i.test(n)) {
        var o = e.indexOf("</" + n + ">", t), a = e.substring(t + 1, o);
        if (/[&<]/.test(a)) return /^script$/i.test(n) ? (i.characters(a, 0, a.length), 
        o) : (a = a.replace(/&#?\w+;/g, r), i.characters(a, 0, a.length), o);
    }
    return t + 1;
}

function fixSelfClosed(e, t, n, r) {
    var i = r[n];
    return null == i && ((i = e.lastIndexOf("</" + n + ">")) < t && (i = e.lastIndexOf("</" + n)), 
    r[n] = i), i < t;
}

function _copy(e, t) {
    for (var n in e) t[n] = e[n];
}

function parseDCC(e, t, n, r) {
    switch (e.charAt(t + 2)) {
      case "-":
        return "-" === e.charAt(t + 3) ? (i = e.indexOf("--\x3e", t + 4)) > t ? (n.comment(e, t + 4, i - t - 4), 
        i + 3) : (r.error("Unclosed comment"), -1) : -1;

      default:
        if ("CDATA[" == e.substr(t + 3, 6)) {
            var i = e.indexOf("]]>", t + 9);
            return n.startCDATA(), n.characters(e, t + 9, i - t - 9), n.endCDATA(), i + 3;
        }
        var o = split(e, t), a = o.length;
        if (a > 1 && /!doctype/i.test(o[0][0])) {
            var s = o[1][0], u = a > 3 && /^public$/i.test(o[2][0]) && o[3][0], l = a > 4 && o[4][0], c = o[a - 1];
            return n.startDTD(s, u && u.replace(/^(['"])(.*?)\1$/, "$2"), l && l.replace(/^(['"])(.*?)\1$/, "$2")), 
            n.endDTD(), c.index + c[0].length;
        }
    }
    return -1;
}

function parseInstruction(e, t, n) {
    var r = e.indexOf("?>", t);
    if (r) {
        var i = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        return i ? (i[0].length, n.processingInstruction(i[1], i[2]), r + 2) : -1;
    }
    return -1;
}

function ElementAttributes(e) {}

function split(e, t) {
    var n, r = [], i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (i.lastIndex = t, i.exec(e); n = i.exec(e); ) if (r.push(n), n[1]) return r;
}

function copy(e, t) {
    for (var n in e) t[n] = e[n];
}

function _extends(e, t) {
    var n = e.prototype;
    if (!(n instanceof t)) {
        var r = function() {};
        r.prototype = t.prototype, copy(n, r = new r()), e.prototype = n = r;
    }
    n.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), 
    n.constructor = e);
}

function DOMException(e, t) {
    if (t instanceof Error) var n = t; else n = this, Error.call(this, ExceptionMessage[e]), 
    this.message = ExceptionMessage[e], Error.captureStackTrace && Error.captureStackTrace(this, DOMException);
    return n.code = e, t && (this.message = this.message + ": " + t), n;
}

function NodeList() {}

function LiveNodeList(e, t) {
    this._node = e, this._refresh = t, _updateLiveList(this);
}

function _updateLiveList(e) {
    var t = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc != t) {
        var n = e._refresh(e._node);
        __set__(e, "length", n.length), copy(n, e), e._inc = t;
    }
}

function NamedNodeMap() {}

function _findNodeIndex(e, t) {
    for (var n = e.length; n--; ) if (e[n] === t) return n;
}

function _addNamedNode(e, t, n, r) {
    if (r ? t[_findNodeIndex(t, r)] = n : t[t.length++] = n, e) {
        n.ownerElement = e;
        var i = e.ownerDocument;
        i && (r && _onRemoveAttribute(i, e, r), _onAddAttribute(i, e, n));
    }
}

function _removeNamedNode(e, t, n) {
    var r = _findNodeIndex(t, n);
    if (!(r >= 0)) throw DOMException(NOT_FOUND_ERR, new Error(e.tagName + "@" + n));
    for (var i = t.length - 1; r < i; ) t[r] = t[++r];
    if (t.length = i, e) {
        var o = e.ownerDocument;
        o && (_onRemoveAttribute(o, e, n), n.ownerElement = null);
    }
}

function DOMImplementation(e) {
    if (this._features = {}, e) for (var t in e) this._features = e[t];
}

function Node() {}

function _xmlEncoder(e) {
    return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
}

function _visitNode(e, t) {
    if (t(e)) return !0;
    if (e = e.firstChild) do {
        if (_visitNode(e, t)) return !0;
    } while (e = e.nextSibling);
}

function Document() {}

function _onAddAttribute(e, t, n) {
    e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
}

function _onRemoveAttribute(e, t, n, r) {
    e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
}

function _onUpdateChild(e, t, n) {
    if (e && e._inc) {
        e._inc++;
        var r = t.childNodes;
        if (n) r[r.length++] = n; else {
            for (var i = t.firstChild, o = 0; i; ) r[o++] = i, i = i.nextSibling;
            r.length = o;
        }
    }
}

function _removeChild(e, t) {
    var n = t.previousSibling, r = t.nextSibling;
    return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, 
    _onUpdateChild(e.ownerDocument, e), t;
}

function _insertBefore(e, t, n) {
    var r = t.parentNode;
    if (r && r.removeChild(t), t.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var i = t.firstChild;
        if (null == i) return t;
        var o = t.lastChild;
    } else i = o = t;
    var a = n ? n.previousSibling : e.lastChild;
    for (i.previousSibling = a, o.nextSibling = n, a ? a.nextSibling = i : e.firstChild = i, 
    null == n ? e.lastChild = o : n.previousSibling = o; i.parentNode = e, i !== o && (i = i.nextSibling); ) ;
    return _onUpdateChild(e.ownerDocument || e, e), t.nodeType == DOCUMENT_FRAGMENT_NODE && (t.firstChild = t.lastChild = null), 
    t;
}

function _appendSingleChild(e, t) {
    var n = t.parentNode;
    if (n) {
        var r = e.lastChild;
        n.removeChild(t), r = e.lastChild;
    }
    return r = e.lastChild, t.parentNode = e, t.previousSibling = r, t.nextSibling = null, 
    r ? r.nextSibling = t : e.firstChild = t, e.lastChild = t, _onUpdateChild(e.ownerDocument, e, t), 
    t;
}

function Element() {
    this._nsMap = {};
}

function Attr() {}

function CharacterData() {}

function Text() {}

function Comment() {}

function CDATASection() {}

function DocumentType() {}

function Notation() {}

function Entity() {}

function EntityReference() {}

function DocumentFragment() {}

function ProcessingInstruction() {}

function XMLSerializer() {}

function nodeSerializeToString(e, t) {
    var n = [], r = 9 == this.nodeType && this.documentElement || this, i = r.prefix, o = r.namespaceURI;
    if (o && null == i && null == (i = r.lookupPrefix(o))) var a = [ {
        namespace: o,
        prefix: null
    } ];
    return serializeToString(this, n, e, t, a), n.join("");
}

function needNamespaceDefine(e, t, n) {
    var r = e.prefix || "", i = e.namespaceURI;
    if (!r && !i) return !1;
    if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === i || "http://www.w3.org/2000/xmlns/" == i) return !1;
    for (var o = n.length; o--; ) {
        var a = n[o];
        if (a.prefix == r) return a.namespace != i;
    }
    return !0;
}

function serializeToString(e, t, n, r, i) {
    if (r) {
        if (!(e = r(e))) return;
        if ("string" == typeof e) return void t.push(e);
    }
    switch (e.nodeType) {
      case ELEMENT_NODE:
        i || (i = []), i.length;
        var o = e.attributes, a = o.length, s = e.firstChild, u = e.tagName;
        n = htmlns === e.namespaceURI || n, t.push("<", u);
        for (var l = 0; l < a; l++) "xmlns" == (c = o.item(l)).prefix ? i.push({
            prefix: c.localName,
            namespace: c.value
        }) : "xmlns" == c.nodeName && i.push({
            prefix: "",
            namespace: c.value
        });
        for (l = 0; l < a; l++) {
            var c;
            if (needNamespaceDefine(c = o.item(l), n, i)) {
                var d = c.prefix || "", p = c.namespaceURI, f = d ? " xmlns:" + d : " xmlns";
                t.push(f, '="', p, '"'), i.push({
                    prefix: d,
                    namespace: p
                });
            }
            serializeToString(c, t, n, r, i);
        }
        if (needNamespaceDefine(e, n, i) && (d = e.prefix || "", p = e.namespaceURI, f = d ? " xmlns:" + d : " xmlns", 
        t.push(f, '="', p, '"'), i.push({
            prefix: d,
            namespace: p
        })), s || n && !/^(?:meta|link|img|br|hr|input)$/i.test(u)) {
            if (t.push(">"), n && /^script$/i.test(u)) for (;s; ) s.data ? t.push(s.data) : serializeToString(s, t, n, r, i), 
            s = s.nextSibling; else for (;s; ) serializeToString(s, t, n, r, i), s = s.nextSibling;
            t.push("</", u, ">");
        } else t.push("/>");
        return;

      case DOCUMENT_NODE:
      case DOCUMENT_FRAGMENT_NODE:
        for (s = e.firstChild; s; ) serializeToString(s, t, n, r, i), s = s.nextSibling;
        return;

      case ATTRIBUTE_NODE:
        return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, _xmlEncoder), '"');

      case TEXT_NODE:
        return t.push(e.data.replace(/[<&]/g, _xmlEncoder));

      case CDATA_SECTION_NODE:
        return t.push("<![CDATA[", e.data, "]]>");

      case COMMENT_NODE:
        return t.push("\x3c!--", e.data, "--\x3e");

      case DOCUMENT_TYPE_NODE:
        var m = e.publicId, h = e.systemId;
        if (t.push("<!DOCTYPE ", e.name), m) t.push(' PUBLIC "', m), h && "." != h && t.push('" "', h), 
        t.push('">'); else if (h && "." != h) t.push(' SYSTEM "', h, '">'); else {
            var N = e.internalSubset;
            N && t.push(" [", N, "]"), t.push(">");
        }
        return;

      case PROCESSING_INSTRUCTION_NODE:
        return t.push("<?", e.target, " ", e.data, "?>");

      case ENTITY_REFERENCE_NODE:
        return t.push("&", e.nodeName, ";");

      default:
        t.push("??", e.nodeName);
    }
}

function _importNode(e, t, n) {
    var r;
    switch (t.nodeType) {
      case ELEMENT_NODE:
        (r = t.cloneNode(!1)).ownerDocument = e;

      case DOCUMENT_FRAGMENT_NODE:
        break;

      case ATTRIBUTE_NODE:
        n = !0;
    }
    if (r || (r = t.cloneNode(!1)), r.ownerDocument = e, r.parentNode = null, n) for (var i = t.firstChild; i; ) r.appendChild(_importNode(e, i, n)), 
    i = i.nextSibling;
    return r;
}

function _cloneNode(e, t, n) {
    var r = new t.constructor();
    for (var i in t) {
        var o = t[i];
        "object" != (void 0 === o ? "undefined" : _typeof(o)) && o != r[i] && (r[i] = o);
    }
    switch (t.childNodes && (r.childNodes = new NodeList()), r.ownerDocument = e, r.nodeType) {
      case ELEMENT_NODE:
        var a = t.attributes, s = r.attributes = new NamedNodeMap(), u = a.length;
        s._ownerElement = r;
        for (var l = 0; l < u; l++) r.setAttributeNode(_cloneNode(e, a.item(l), !0));
        break;

      case ATTRIBUTE_NODE:
        n = !0;
    }
    if (n) for (var c = t.firstChild; c; ) r.appendChild(_cloneNode(e, c, n)), c = c.nextSibling;
    return r;
}

function __set__(e, t, n) {
    e[t] = n;
}

function DOMParser(e) {
    this.options = e || {
        locator: {}
    };
}

function buildErrorHandler(e, t, n) {
    function r(t) {
        var r = e[t];
        !r && o && (r = 2 == e.length ? function(n) {
            e(t, n);
        } : e), i[t] = r && function(e) {
            r("[xmldom " + t + "]\t" + e + _locator(n));
        } || function() {};
    }
    if (!e) {
        if (t instanceof DOMHandler) return t;
        e = t;
    }
    var i = {}, o = e instanceof Function;
    return n = n || {}, r("warning"), r("error"), r("fatalError"), i;
}

function DOMHandler() {
    this.cdata = !1;
}

function position(e, t) {
    t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
}

function _locator(e) {
    if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
}

function _toString(e, t, n) {
    return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
}

function appendElement(e, t) {
    e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
}

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, app = getApp(), SDK = function() {
    var e = {};
    e.defaultKey = "_GS_SDK_default_group_" + new Date().getTime(), e.suites = {}, e.widgets = {}, 
    e.N = 0, e.register = function(t, n) {
        for (var r = t.split("."), i = e, o = null; o = r.shift(); ) r.length ? (void 0 === i[o] && (i[o] = {}), 
        i = i[o]) : void 0 === i[o] && (i[o] = n(e));
    }, e.trim = function(e) {
        return "string" != typeof e ? e : "function" == typeof e.trim ? e.trim() : e.replace(/^(\u3000|\s|\t|\u00A0)*|(\u3000|\s|\t|\u00A0)*$/g, "");
    }, e.isEmpty = function(t) {
        return void 0 === t || (null == t || "string" == typeof t && "" == e.trim(t));
    }, e.isNotEmpty = function(t) {
        return !e.isEmpty(t);
    }, e.Event = function(e, t, n, r, i) {
        this.type = e, this.target = t, this.data = n, "string" == typeof r ? this.receiver = r : (this.cb = r, 
        this.receiver = i);
    }, e.Logger = function(e) {
        var t = this;
        this.name = e, this.logs = [];
        var n = {
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            FATAL: 4
        };
        this.level = "INFO", this.out = function(e) {
            t.logs.push(e);
        }, this.log = function(e, r, i) {
            var o = n[(r = r || "info").toUpperCase()], a = n[t.level.toUpperCase()];
            "number" == typeof o && "number" == typeof a && o < a || "string" == typeof e || this.log("log(msg, type), type of msg must be 'string'", "ERROR", e);
        }, this.moveLogs = function(e) {
            return t.logs.splice(0, e || t.logs.length);
        };
    }, e.logger = new e.Logger(), e.log = e.logger.log, e.asyncRun = function(t, n) {
        setTimeout(function() {
            try {
                t(n);
            } catch (t) {
                throw e.log("" + t, "ERROR", t), t;
            }
        }, 0);
    }, e.register("core.util.assignProperties", function() {
        return function(e, t, n, r) {
            if (void 0 !== t) for (var i in t) {
                var o = t[i];
                "function" == typeof n && (i = n(i)), "function" == typeof r && (o = r(o)), e[i] = o;
            }
            return e;
        };
    });
    var t = function() {
        var t = function(e, t, n) {
            this.enabled = !0, this.orign = e, this.type = t, this.elem = n ? n.elem : {}, this.attrs = n ? n.attrs : null, 
            this.initId();
        };
        return t.fn = t.prototype = {
            constructor: t,
            attr: function(t) {
                if (e.isNotEmpty(this.attrs)) return this.attrs[t];
                var n = "";
                try {
                    this.elem.getAttribute && (n = this.elem.getAttribute(t), n = e.trim(n));
                } catch (t) {
                    e.log(".getAttribute(name) throw:" + t, "ERROR", this);
                }
                return e.isEmpty(n) ? "" : n;
            },
            initId: function() {
                var t = this.attr("id");
                e.isEmpty(t) && (t = "_GS_WIDGET_" + e.N++, t += "_" + new Date().getTime()), this.id = t;
            },
            bind: function(e, t) {
                this.enabled && (e = e.toLowerCase(), this.suite.eventsmap[e] || (this.suite.eventsmap[e] = []), 
                this.suite.eventsmap[e].push({
                    wgid: this.id,
                    handler: t
                }));
            },
            unbind: function(e, t) {
                if (this.enabled) {
                    e = e.toLowerCase();
                    var n = this.suite.eventsmap[e];
                    if (n) for (var r = 0; r < n.length; r++) if (n[r].handler == t) {
                        n.splice(r, 1);
                        break;
                    }
                }
            },
            fire: function(t) {
                if (this.enabled) {
                    if (!(t instanceof e.Event)) throw e.log("It's not instanceof Event - " + t, "ERROR"), 
                    "[SDK]ERROR! It's not a instance of Event - " + t;
                    if ("onRewardResponse" != t.type || !t.data || void 0 == t.data.userControl || "false" != t.data.userControl || "0" != t.data.returnCode) {
                        var n = t.type.toLowerCase(), r = this.suite.eventsmap[n], i = 0;
                        if (r) {
                            i = r.length;
                            for (var o = t.receiver, a = 0; a < r.length; a++) o ? o == r[a].wgid && e.asyncRun(r[a].handler, t) : e.asyncRun(r[a].handler, t);
                        }
                        return e.log("send message of '" + t.type + "'", "DEBUG", t), i;
                    }
                    window.top.location.href = t.data.codeUrl;
                }
            }
        }, t;
    }(), n = function() {
        var n = function(t) {
            e.isEmpty(t) && (t = e.defaultKey), this.key = t, this.init();
        };
        return n.fn = n.prototype = {
            constructor: n,
            init: function() {
                this.eventsmap = {}, this.widgets = {};
            },
            loadWidget: function(t) {
                if (void 0 === _typeof(t.id)) throw new ERROR("widget's id is undefined. " + t);
                void 0 === this.widgets[t.id] && (t.suite = this, this.widgets[t.id] = t, e.widgets[t.id] = t, 
                e.log("Widget(" + t.id + ") has loaded!", "INFO", t));
            },
            createWidget: function(e, n, r) {
                n = n.toLowerCase();
                var i = new t(e, n, r);
                return this.loadWidget(i), i;
            },
            clearWidget: function(t) {
                this.eventsmap = {}, this.widgets = {}, e.suites = {}, e.widgets = {};
            },
            removeWidget: function(t) {
                if (void 0 === (void 0 === t ? "undefined" : _typeof(t))) throw new ERROR("widgetId is undefined.");
                var n = this.widgets[t];
                if (e.isEmpty(n)) throw new ERROR("widget not found in suite for widgetId:" + t);
                n.suite = null;
                for (var r in this.eventsmap) {
                    var i = this.eventsmap[r];
                    if (i) for (var o = 0; o < i.length; o++) if (i[o].wgid == t) {
                        i.splice(o, 1);
                        break;
                    }
                }
                return delete this.widgets[t], delete e.widgets[t], e.log("Widget(" + t + ") has remove!", "INFO", t), 
                n;
            }
        }, n;
    }();
    return e.suite = function(t) {
        e.isEmpty(t) && (t = e.defaultKey);
        var r = e.suites[t];
        return void 0 === r && (r = new n(t), e.suites[t] = r), r;
    }, e;
}();

SDK.logger.name = "SDK", SDK.register("api.ready", function() {
    return function(e) {
        SDK.core.dom.ready(e);
    };
}), SDK.register("api.widget", function() {
    return function(e) {
        return SDK.widgets[e];
    };
}), SDK.register("api.widget.proxy", function(e) {
    return function(t) {
        var n = e.api.widget(t);
        if (e.isEmpty(n)) throw e.log("No widget which id is " + t, "ERROR"), "[SDK]ERROR! no widget which id is " + t;
        if (void 0 === n.proxy) {
            var r = n.proxy = {
                id: t,
                type: n.type,
                group: n.suite.key,
                enabled: !0
            };
            n.eventTargetProxy = {
                id: t,
                type: n.type
            }, r.extend = function(t) {
                e.core.util.assignProperties(r, t);
            }, r.bind = function(t, i) {
                r.enabled && ("string" == typeof t ? "function" == typeof i ? (t = e.trim(t), e.isEmpty(t) ? e.log("Empty type of event is invalid!", "ERROR") : n.bind(t, i)) : e.log("Handler of event must be a function!", "ERROR") : e.log("Type of event must be a string!", "ERROR"));
            }, r.unbind = function(t, i) {
                r.enabled && ("string" == typeof t ? "function" == typeof i ? (t = e.trim(t), e.isEmpty(t) ? e.log("Empty type of event is invalid!", "ERROR") : n.unbind(t, i)) : e.log("Handler of event must be a function!", "ERROR") : e.log("Type of event must be a string!", "ERROR"));
            }, r.send = function(t, i, o, a) {
                if (r.enabled) {
                    if ("string" == typeof o && (a = o, o = void 0), "string" != typeof t) throw e.log("Type of message must be a string!", "ERROR"), 
                    "[SDK]ERROR! Type of message must be a string!";
                    t = e.trim(t), t = typeCenter.types(t);
                    var s = new e.Event(t, n.eventTargetProxy, i, o, a), u = n.fire(s);
                    if (0 == u) {
                        var l = n.suite.key == e.defaultKey ? "" : n.suite.key + ".";
                        e.log("No handler had bound to '" + l + s.type + "'!", "WARN", s);
                    }
                    return u;
                }
            }, r.activeShakehand = function(t, i, o) {
                if (r.enabled) {
                    n._dataInMyHand = i, "string" == typeof o && e.isNotEmpty(o) ? n._shakeWithType = o : delete n._shakeWithType, 
                    r.shakehand = "function" == typeof t ? function(e) {
                        setTimeout(function() {
                            t(e._dataInMyHand);
                        }, 0);
                    } : function() {};
                    var a = n.suite;
                    if (a) for (var s in a.widgets) {
                        var u = a.widgets[s];
                        if (u.id != n.id) {
                            var l = e.api.widget.proxy(u.id);
                            if (e.isNotEmpty(l.shakehand)) {
                                var c = !0;
                                n._shakeWithType && n._shakeWithType != u.type && (c = !1);
                                var d = !0;
                                u._shakeWithType && u._shakeWithType != n.type && (d = !1), c && d && (r.shakehand(u), 
                                l.shakehand(n));
                            }
                        }
                    }
                }
            };
        }
        return n.proxy;
    };
});

var typeCenter = function() {
    var e = {}, t = {};
    return e.types = function(e) {
        if ("object" === (void 0 === e ? "undefined" : _typeof(e))) SDK.core.util.assignProperties(t, e, function(e) {
            return SDK.trim(e).toLowerCase();
        }); else {
            if ("string" == typeof e) {
                var n = e.toLowerCase();
                return t[n] ? t[n] : e;
            }
            if (SDK.isEmpty(e)) return t;
            SDK.log("typeCenter.types(arg):arg not support-" + e, "WARN");
        }
    }, e;
}(), GS = {
    version: "1.0",
    autoload: !1,
    init: function(e) {
        SDK.log("[SDK]init", "INFO", e);
    },
    createChannel: function(e) {
        var t = SDK.suite(e).createWidget("CHANNEL", "CHANNEL");
        return SDK.api.widget.proxy(t.id);
    },
    removeChannel: function(e, t) {
        SDK.suite(t).removeWidget(e);
    },
    clearChannel: function() {
        SDK.suite().clearWidget();
    }
}, tool = {};

tool.checkObjectIsNull = function(e) {
    return null == e || void 0 == e || void 0 === e;
}, tool.checkObjectIsNotNull = function(e) {
    return !this.checkObjectIsNull(e);
}, tool.isFunction = function(e) {
    return "function" == typeof e;
}, tool.checkParamsIsNotNull = function(str, obj) {
    if (this.checkObjectIsNotNull(str)) {
        for (var splitArray = str.split("."), objSplit = "", i = 0; i < splitArray.length; i++) if (0 != i ? (objSplit += ".", 
        objSplit += splitArray[i]) : objSplit = "obj", eval("typeof(" + objSplit + ")=='undefined'")) return !1;
        return !0;
    }
    return !1;
}, tool.extend = function() {
    var e, t, n, r = arguments[0] || {}, i = 1, o = arguments.length;
    for ("boolean" == typeof r && (r, r = arguments[1] || {}, i = 2), "object" === (void 0 === r ? "undefined" : _typeof(r)) || this.isFunction(r) || (r = {}), 
    o === i && (r = this, --i); i < o; i++) if (null != (e = arguments[i])) for (t in e) r[t], 
    r !== (n = e[t]) && void 0 !== n && (r[t] = n);
    return r;
}, tool.trim = function(e) {
    return "string" != typeof e ? e : "function" == typeof e.trim ? e.trim() : e.replace(/^(\u3000|\s|\t|\u00A0)*|(\u3000|\s|\t|\u00A0)*$/g, "");
}, tool.isEmptyObject = function(e) {
    for (var t in e) return !1;
    return !0;
}, tool.isEmpty = function(e) {
    return void 0 === e || (null == e || "string" == typeof e && "" == tool.trim(e));
}, tool.decodeHex = function(e) {
    if (e.length % 2) return "";
    for (var t = "", n = 0; n < e.length; n += 2) t += "%" + e.charAt(n) + e.charAt(n + 1);
    return decodeURIComponent(t);
}, tool.createUUID = function() {
    var e = new Date(1582, 10, 15, 0, 0, 0, 0), t = new Date().getTime() - e.getTime(), n = "-";
    return tool.getIntegerBits(t, 0, 31) + n + tool.getIntegerBits(t, 32, 47) + n + (tool.getIntegerBits(t, 48, 59) + "1") + n + tool.getIntegerBits(tool.rand(4095), 0, 7) + tool.getIntegerBits(tool.rand(4095), 0, 7) + n + (tool.getIntegerBits(tool.rand(8191), 0, 7) + tool.getIntegerBits(tool.rand(8191), 8, 15) + tool.getIntegerBits(tool.rand(8191), 0, 7) + tool.getIntegerBits(tool.rand(8191), 8, 15) + tool.getIntegerBits(tool.rand(8191), 0, 15));
}, tool.getIntegerBits = function(e, t, n) {
    var r = tool.returnBase(e, 16), i = new Array(), o = "", a = 0;
    for (a = 0; a < r.length; a++) i.push(r.substring(a, a + 1));
    for (a = Math.floor(t / 4); a <= Math.floor(n / 4); a++) i[a] && "" != i[a] ? o += i[a] : o += "0";
    return o;
}, tool.returnBase = function(e, t) {
    var n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    if (e < t) o = n[e]; else {
        var r = "" + Math.floor(e / t), i = e - r * t;
        if (r >= t) o = this.returnBase(r, t) + n[i]; else var o = n[r] + n[i];
    }
    return o;
}, tool.rand = function(e) {
    return Math.floor(Math.random() * e);
}, tool.isArray = function(e) {
    return "object" === (void 0 === e ? "undefined" : _typeof(e)) && "[object Array]" === Object.prototype.toString.call(e);
}, tool.createXml = function(e, t) {
    var n = '<?xml version="1.0" ' + (t = tool.isEmpty(t) ? "" : 'encoding="' + t + '"') + "?>";
    return tool.isEmpty(e) || (n += tool.createNode(e)), n;
}, tool.createNode = function(e, t) {
    if (tool.isEmpty(t) && (t = !0), !tool.isEmpty(e) && !tool.isEmpty(e.nodeName)) {
        i = "<" + e.nodeName;
        if (!this.isEmpty(e.attrArray)) for (var n = 0; n < e.attrArray.length; n++) {
            var r = e.attrArray[n];
            i += " " + r.name + '="' + r.value + '"';
        }
        var i = i + ">";
        return tool.isEmpty(e.value) || (t ? i = i + "<![CDATA[" + e.value + "]]>" : i += e.value), 
        i = i + "</" + e.nodeName + ">";
    }
}, tool.createNodeNone = function(e) {
    if (!tool.isEmpty(e) && !tool.isEmpty(e.nodeName)) {
        var t = "<" + e.nodeName;
        if (!tool.isEmpty(e.attrArray)) for (var n = 0; n < e.attrArray.length; n++) {
            var r = e.attrArray[n];
            t += " " + r.name + '="' + r.value + '"';
        }
        return t = t + "/>";
    }
}, tool.createNodeText = function(e, t) {
    if (tool.isEmpty(t) && (t = !0), !tool.isEmpty(e) && !tool.isEmpty(e.nodeName)) {
        r = "<" + e.nodeName;
        if (!tool.isEmpty(e.attrArray)) for (i = 0; i < e.attrArray.length; i++) {
            var n = e.attrArray[i];
            r += " " + n.name + '="' + n.value + '"';
        }
        var r = r + ">";
        if (tool.isEmpty(e.value) || (t ? r = r + "<![CDATA[" + e.value + "]]>" : r += e.value), 
        !tool.isEmpty(e.textArray) && e.textArray.length > 0) for (var i = 0; i < e.textArray.length; i++) {
            var o = e.textArray[i];
            tool.isEmpty(o.nodeName) || (r = r + "<" + o.nodeName + "><![CDATA[", tool.isEmpty(o.value) || (r += o.value), 
            r = r + "]]></" + o.nodeName + ">");
        }
        return r = r + "</" + e.nodeName + ">";
    }
}, tool.addNode = function(e, t, n, r) {
    var i = 0;
    if (tool.isEmpty(n)) {
        if (-1 == (i = (o = e).lastIndexOf("</"))) return;
    } else {
        tool.isEmpty(r) && (r = 1);
        for (var o = e, a = 0, s = 0; s < r; s++) {
            if (-1 == (a = o.indexOf(n, a))) return;
            (c = o.lastIndexOf("<", a)) <= (d = o.lastIndexOf("</", a)) && s--, a += n.length;
        }
        if (0 == a) return;
        o = o.substring(a + n.length), i += a + n.length, a = 0;
        for (var u = 0, l = !0; l; ) {
            if (-1 == (a = o.indexOf(n))) return;
            var c = o.lastIndexOf("<", a), d = o.lastIndexOf("</", a);
            c <= d ? u-- : u++, u < 0 && (i += d, l = !1);
        }
    }
    return e.substring(0, i) + t + e.substring(i);
}, tool.formatXml = function(e) {
    return new DOMParser().parseFromString(e, "application/xml");
}, tool.parseXml = function(e) {
    var t;
    return t = new DOMParser().parseFromString(e), e = t;
}, tool.getXmlNodeAttr = function(e, t) {
    return e && e.attributes ? null != e.attributes[t] ? e.attributes[t].value : null != e.attributes.getNamedItem(t) ? e.attributes.getNamedItem(t).value : "" : "";
}, tool.getNodeValue = function(e) {
    return tool.trim(e.textContent);
}, tool.logger = function(e) {
    var t = this;
    this.name = e, this.logs = [];
    var n = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        FATAL: 4
    };
    this.level = "INFO", this.out = function(e) {
        t.logs.push(e), console.log(e);
    }, this.log = function(e, r, i) {
        var o = n[(r = r || "info").toUpperCase()], a = n[t.level.toUpperCase()];
        "number" == typeof o && "number" == typeof a && o < a || ("string" == typeof e ? t.out({
            time: new Date(),
            msg: e,
            type: r,
            data: i
        }) : this.log("log(msg, type), type of msg must be 'string'", "ERROR", e));
    }, this.moveLogs = function(e) {
        return t.logs.splice(0, e || t.logs.length);
    };
}, tool.isBlank = function(e) {
    return !(!this.isEmpty(e) && "" != this.trim(e));
}, tool.ajax = function(e) {
    wx.request({
        url: e.url,
        header: e.header,
        method: e.type,
        responseType: e.responseType,
        dataType: e.dataType,
        data: e.data,
        success: e.success,
        fail: e.error
    });
}, tool.isNumber = function(e) {
    return !this.isEmpty(e) && /^([0-9]|[1-9][0-9]*|[0-9]\.[0-9]+|[1-9][0-9]*\.[0-9]+)$/.test(e);
};

var hTasks = [], task = function(e) {
    hTasks = e.hTasks;
    var t = this;
    this.executedImmediately = void 0 != e.executedImmediately && e.executedImmediately, 
    this.taskArray = new Array(), this.taskFunction = new Array(), this.defaultOpt = {
        interval: 200,
        status: !1
    }, this.anyOpt = {
        interval: 200,
        status: !1
    }, this.timeOutObj = null, this.anyOutObj = null, this.dealTask = !1, this.i = 0, 
    this.timeOut = function() {
        t.dealTask = !0;
        var e = t.taskArray, n = t.taskFunction;
        if (e.length > 0) {
            var r = 1e3 * app.globalData.currentTime;
            if (r >= 0) for (var i = 0; i < e.length; i++) {
                var o = e[i];
                if (null == o.startTime || void 0 == o.startTime || void 0 === o.startTime || "" == o.startTime) {
                    for (var a = o.type, s = 0; s < n.length; s++) if ((u = n[s]).type == a) {
                        u.startFun.call(this, o.data);
                        break;
                    }
                    e.splice(i, 1), i--;
                } else if (o.startTime <= r) if (null == o.endTime || void 0 == o.endTime || void 0 === o.endTime || "" == o.endTime) {
                    for (var a = o.type, s = 0; s < n.length; s++) if ((u = n[s]).type == a) {
                        u.startFun.call(this, o.data);
                        break;
                    }
                    e.splice(i, 1), i--;
                } else if (r < o.endTime) {
                    a = o.type;
                    if (null == o.startDeal || void 0 == o.startDeal || void 0 === o.startDeal) for (s = 0; s < n.length; s++) if ((u = n[s]).type == a) {
                        o.startDeal = !0, u.startFun.call(this, o.data);
                        break;
                    }
                } else {
                    for (var a = o.type, s = 0; s < n.length; s++) {
                        var u = n[s];
                        if (u.type == a) {
                            u.endFun.call(this, o.data);
                            break;
                        }
                    }
                    e.splice(i, 1), i--;
                }
            }
        }
        t.dealTask = !1;
    }, this.anyTimeOut = function() {
        var e = t.taskArray, n = t.taskFunction;
        if (e.length > 0) for (var r = 0; r < e.length; r++) {
            var i = e[r];
            if ("ems" == i.type && ("onPriChat" == i.data.dealFunction || "onChatRemove" == i.data.dealFunction || "onPublicChat" == i.data.dealFunction || "onThirdPartChat" == i.data.dealFunction || "onSetting" == i.data.dealFunction && "chat" == i.data.content.option)) {
                for (var o = i.type, a = 0; a < n.length; a++) {
                    var s = n[a];
                    if (s.type == o) {
                        s.startFun.call(this, i.data);
                        break;
                    }
                }
                e.splice(r, 1), r--;
            }
        }
    };
};

task.prototype.switchMedia = function(e) {
    this.media = media;
}, task.prototype.setInterval = function(e) {
    var t = this;
    return !this.dealTask && (this.defaultOpt.interval = e, this.defaultOpt.status && (clearInterval(this.timeOutObj), 
    this.timeOutObj = setInterval(function() {
        t.timeOut();
    }, this.defaultOpt.interval)), !0);
}, task.prototype.start = function() {
    var e = this;
    null != this.anyOutObj && clearInterval(this.anyOutObj), this.defaultOpt.status || (this.timeOutObj = setInterval(function() {
        e.timeOut();
    }, this.defaultOpt.interval), this.defaultOpt.status = !0);
}, task.prototype.stop = function() {
    return !this.dealTask && (clearInterval(this.timeOutObj), this.defaultOpt.status = !1, 
    !0);
}, task.prototype.anyStart = function() {
    var e = this;
    this.anyOpt.status || (this.anyOutObj = setInterval(function() {
        e.anyTimeOut();
    }, this.anyOpt.interval), this.anyOpt.status = !0);
}, task.prototype.addTaskFunction = function(e, t, n) {
    var r = this.taskFunction;
    if (tool.checkObjectIsNull(e)) return !1;
    if (!tool.isFunction(t)) return !1;
    var i = {
        type: e,
        startFun: t
    };
    return tool.isFunction(n) ? i.endFun = n : i.endFun = function() {}, r.push(i), 
    !0;
}, task.prototype.addTask = function(e, t, n, r) {
    var i = this.taskArray;
    if (tool.checkObjectIsNull(e)) return !1;
    var o = {};
    if (t.taskId) {
        if (compareHisTask(e + t.taskId)) return;
        loadHisTask(e + t.taskId);
    }
    return o = this.executedImmediately ? {
        type: e,
        data: t,
        startTime: null,
        endTime: null
    } : {
        type: e,
        data: t,
        startTime: n,
        endTime: r
    }, i.push(o), !0;
}, task.prototype.clearTask = function() {
    var e = this.taskArray;
    e.splice(0, e.length);
}, task.prototype.executeAllTask = function() {
    var e = this.taskArray;
    console.log("[executeAllTask]:" + e.length);
    for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n.startTime = null, n.endTime = null;
    }
};

var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$"), S_TAG = 0, S_ATTR = 1, S_ATTR_SPACE = 2, S_EQ = 3, S_ATTR_NOQUOT_VALUE = 4, S_ATTR_END = 5, S_TAG_SPACE = 6, S_TAG_CLOSE = 7;

XMLReader.prototype = {
    parse: function(e, t, n) {
        var r = this.domBuilder;
        r.startDocument(), _copy(t, t = {}), _parse(e, t, n, r, this.errorHandler), r.endDocument();
    }
}, ElementAttributes.prototype = {
    setTagName: function(e) {
        if (!tagNamePattern.test(e)) throw new Error("invalid tagName:" + e);
        this.tagName = e;
    },
    add: function(e, t, n) {
        if (!tagNamePattern.test(e)) throw new Error("invalid attribute:" + e);
        this[this.length++] = {
            qName: e,
            value: t,
            offset: n
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
}, exports.XMLReader = XMLReader;

var htmlns = "http://www.w3.org/1999/xhtml", NodeType = {}, ELEMENT_NODE = NodeType.ELEMENT_NODE = 1, ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2, TEXT_NODE = NodeType.TEXT_NODE = 3, CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4, ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5, ENTITY_NODE = NodeType.ENTITY_NODE = 6, PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7, COMMENT_NODE = NodeType.COMMENT_NODE = 8, DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9, DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10, DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11, NOTATION_NODE = NodeType.NOTATION_NODE = 12, ExceptionCode = {}, ExceptionMessage = {}, INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 
1), DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 
2), HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 
3), WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 
4), INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 
5), NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 
6), NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 
7), NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 
8), NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 
9), INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 
10), INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 
11), SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 
12), INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 
13), NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 
14), INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 
15);

DOMException.prototype = Error.prototype, copy(ExceptionCode, DOMException), NodeList.prototype = {
    length: 0,
    item: function(e) {
        return this[e] || null;
    },
    toString: function(e, t) {
        for (var n = [], r = 0; r < this.length; r++) serializeToString(this[r], n, e, t);
        return n.join("");
    }
}, LiveNodeList.prototype.item = function(e) {
    return _updateLiveList(this), this[e];
}, _extends(LiveNodeList, NodeList), NamedNodeMap.prototype = {
    length: 0,
    item: NodeList.prototype.item,
    getNamedItem: function(e) {
        for (var t = this.length; t--; ) {
            var n = this[t];
            if (n.nodeName == e) return n;
        }
    },
    setNamedItem: function(e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new DOMException(INUSE_ATTRIBUTE_ERR);
        var n = this.getNamedItem(e.nodeName);
        return _addNamedNode(this._ownerElement, this, e, n), n;
    },
    setNamedItemNS: function(e) {
        var t, n = e.ownerElement;
        if (n && n != this._ownerElement) throw new DOMException(INUSE_ATTRIBUTE_ERR);
        return t = this.getNamedItemNS(e.namespaceURI, e.localName), _addNamedNode(this._ownerElement, this, e, t), 
        t;
    },
    removeNamedItem: function(e) {
        var t = this.getNamedItem(e);
        return _removeNamedNode(this._ownerElement, this, t), t;
    },
    removeNamedItemNS: function(e, t) {
        var n = this.getNamedItemNS(e, t);
        return _removeNamedNode(this._ownerElement, this, n), n;
    },
    getNamedItemNS: function(e, t) {
        for (var n = this.length; n--; ) {
            var r = this[n];
            if (r.localName == t && r.namespaceURI == e) return r;
        }
        return null;
    }
}, DOMImplementation.prototype = {
    hasFeature: function(e, t) {
        var n = this._features[e.toLowerCase()];
        return !(!n || t && !(t in n));
    },
    createDocument: function(e, t, n) {
        var r = new Document();
        if (r.implementation = this, r.childNodes = new NodeList(), r.doctype = n, n && r.appendChild(n), 
        t) {
            var i = r.createElementNS(e, t);
            r.appendChild(i);
        }
        return r;
    },
    createDocumentType: function(e, t, n) {
        var r = new DocumentType();
        return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
    }
}, Node.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function(e, t) {
        return _insertBefore(this, e, t);
    },
    replaceChild: function(e, t) {
        this.insertBefore(e, t), t && this.removeChild(t);
    },
    removeChild: function(e) {
        return _removeChild(this, e);
    },
    appendChild: function(e) {
        return this.insertBefore(e, null);
    },
    hasChildNodes: function() {
        return null != this.firstChild;
    },
    cloneNode: function(e) {
        return _cloneNode(this.ownerDocument || this, this, e);
    },
    normalize: function() {
        for (var e = this.firstChild; e; ) {
            var t = e.nextSibling;
            t && t.nodeType == TEXT_NODE && e.nodeType == TEXT_NODE ? (this.removeChild(t), 
            e.appendData(t.data)) : (e.normalize(), e = t);
        }
    },
    isSupported: function(e, t) {
        return this.ownerDocument.implementation.hasFeature(e, t);
    },
    hasAttributes: function() {
        return this.attributes.length > 0;
    },
    lookupPrefix: function(e) {
        for (var t = this; t; ) {
            var n = t._nsMap;
            if (n) for (var r in n) if (n[r] == e) return r;
            t = t.nodeType == ATTRIBUTE_NODE ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    lookupNamespaceURI: function(e) {
        for (var t = this; t; ) {
            var n = t._nsMap;
            if (n && e in n) return n[e];
            t = t.nodeType == ATTRIBUTE_NODE ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    isDefaultNamespace: function(e) {
        return null == this.lookupPrefix(e);
    }
}, copy(NodeType, Node), copy(NodeType, Node.prototype), Document.prototype = {
    nodeName: "#document",
    nodeType: DOCUMENT_NODE,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(e, t) {
        if (e.nodeType == DOCUMENT_FRAGMENT_NODE) {
            for (var n = e.firstChild; n; ) {
                var r = n.nextSibling;
                this.insertBefore(n, t), n = r;
            }
            return e;
        }
        return null == this.documentElement && e.nodeType == ELEMENT_NODE && (this.documentElement = e), 
        _insertBefore(this, e, t), e.ownerDocument = this, e;
    },
    removeChild: function(e) {
        return this.documentElement == e && (this.documentElement = null), _removeChild(this, e);
    },
    importNode: function(e, t) {
        return _importNode(this, e, t);
    },
    getElementById: function(e) {
        var t = null;
        return _visitNode(this.documentElement, function(n) {
            if (n.nodeType == ELEMENT_NODE && n.getAttribute("id") == e) return t = n, !0;
        }), t;
    },
    createElement: function(e) {
        var t = new Element();
        return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new NodeList(), 
        (t.attributes = new NamedNodeMap())._ownerElement = t, t;
    },
    createDocumentFragment: function() {
        var e = new DocumentFragment();
        return e.ownerDocument = this, e.childNodes = new NodeList(), e;
    },
    createTextNode: function(e) {
        var t = new Text();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createComment: function(e) {
        var t = new Comment();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createCDATASection: function(e) {
        var t = new CDATASection();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createProcessingInstruction: function(e, t) {
        var n = new ProcessingInstruction();
        return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, 
        n;
    },
    createAttribute: function(e) {
        var t = new Attr();
        return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, 
        t;
    },
    createEntityReference: function(e) {
        var t = new EntityReference();
        return t.ownerDocument = this, t.nodeName = e, t;
    },
    createElementNS: function(e, t) {
        var n = new Element(), r = t.split(":"), i = n.attributes = new NamedNodeMap();
        return n.childNodes = new NodeList(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, 
        n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, 
        i._ownerElement = n, n;
    },
    createAttributeNS: function(e, t) {
        var n = new Attr(), r = t.split(":");
        return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 
        2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
    }
}, _extends(Document, Node), Element.prototype = {
    nodeType: ELEMENT_NODE,
    hasAttribute: function(e) {
        return null != this.getAttributeNode(e);
    },
    getAttribute: function(e) {
        var t = this.getAttributeNode(e);
        return t && t.value || "";
    },
    getAttributeNode: function(e) {
        return this.attributes.getNamedItem(e);
    },
    setAttribute: function(e, t) {
        var n = this.ownerDocument.createAttribute(e);
        n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
    },
    removeAttribute: function(e) {
        var t = this.getAttributeNode(e);
        t && this.removeAttributeNode(t);
    },
    appendChild: function(e) {
        return e.nodeType === DOCUMENT_FRAGMENT_NODE ? this.insertBefore(e, null) : _appendSingleChild(this, e);
    },
    setAttributeNode: function(e) {
        return this.attributes.setNamedItem(e);
    },
    setAttributeNodeNS: function(e) {
        return this.attributes.setNamedItemNS(e);
    },
    removeAttributeNode: function(e) {
        return this.attributes.removeNamedItem(e.nodeName);
    },
    removeAttributeNS: function(e, t) {
        var n = this.getAttributeNodeNS(e, t);
        n && this.removeAttributeNode(n);
    },
    hasAttributeNS: function(e, t) {
        return null != this.getAttributeNodeNS(e, t);
    },
    getAttributeNS: function(e, t) {
        var n = this.getAttributeNodeNS(e, t);
        return n && n.value || "";
    },
    setAttributeNS: function(e, t, n) {
        var r = this.ownerDocument.createAttributeNS(e, t);
        r.value = r.nodeValue = "" + n, this.setAttributeNode(r);
    },
    getAttributeNodeNS: function(e, t) {
        return this.attributes.getNamedItemNS(e, t);
    },
    getElementsByTagName: function(e) {
        return new LiveNodeList(this, function(t) {
            var n = [];
            return _visitNode(t, function(r) {
                r === t || r.nodeType != ELEMENT_NODE || "*" !== e && r.tagName != e || n.push(r);
            }), n;
        });
    },
    getElementsByTagNameNS: function(e, t) {
        return new LiveNodeList(this, function(n) {
            var r = [];
            return _visitNode(n, function(i) {
                i === n || i.nodeType !== ELEMENT_NODE || "*" !== e && i.namespaceURI !== e || "*" !== t && i.localName != t || r.push(i);
            }), r;
        });
    }
}, Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName, 
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS, 
_extends(Element, Node), Attr.prototype.nodeType = ATTRIBUTE_NODE, _extends(Attr, Node), 
CharacterData.prototype = {
    data: "",
    substringData: function(e, t) {
        return this.data.substring(e, e + t);
    },
    appendData: function(e) {
        e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
    },
    insertData: function(e, t) {
        this.replaceData(e, 0, t);
    },
    appendChild: function(e) {
        throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
    },
    deleteData: function(e, t) {
        this.replaceData(e, t, "");
    },
    replaceData: function(e, t, n) {
        n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, 
        this.length = n.length;
    }
}, _extends(CharacterData, Node), Text.prototype = {
    nodeName: "#text",
    nodeType: TEXT_NODE,
    splitText: function(e) {
        var t = this.data, n = t.substring(e);
        t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
        var r = this.ownerDocument.createTextNode(n);
        return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
    }
}, _extends(Text, CharacterData), Comment.prototype = {
    nodeName: "#comment",
    nodeType: COMMENT_NODE
}, _extends(Comment, CharacterData), CDATASection.prototype = {
    nodeName: "#cdata-section",
    nodeType: CDATA_SECTION_NODE
}, _extends(CDATASection, CharacterData), DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE, 
_extends(DocumentType, Node), Notation.prototype.nodeType = NOTATION_NODE, _extends(Notation, Node), 
Entity.prototype.nodeType = ENTITY_NODE, _extends(Entity, Node), EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE, 
_extends(EntityReference, Node), DocumentFragment.prototype.nodeName = "#document-fragment", 
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE, _extends(DocumentFragment, Node), 
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE, _extends(ProcessingInstruction, Node), 
XMLSerializer.prototype.serializeToString = function(e, t, n) {
    return nodeSerializeToString.call(e, t, n);
}, Node.prototype.toString = nodeSerializeToString;

try {
    if (Object.defineProperty) {
        var getTextContent = function e(t) {
            switch (t.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                var n = [];
                for (t = t.firstChild; t; ) 7 !== t.nodeType && 8 !== t.nodeType && n.push(e(t)), 
                t = t.nextSibling;
                return n.join("");

              default:
                return t.nodeValue;
            }
        };
        Object.defineProperty(LiveNodeList.prototype, "length", {
            get: function() {
                return _updateLiveList(this), this.$$length;
            }
        }), Object.defineProperty(Node.prototype, "textContent", {
            get: function() {
                return getTextContent(this);
            },
            set: function(e) {
                switch (this.nodeType) {
                  case ELEMENT_NODE:
                  case DOCUMENT_FRAGMENT_NODE:
                    for (;this.firstChild; ) this.removeChild(this.firstChild);
                    (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                    break;

                  default:
                    this.data = e, this.value = e, this.nodeValue = e;
                }
            }
        }), __set__ = function(e, t, n) {
            e["$$" + t] = n;
        };
    }
} catch (e) {}

exports.DOMImplementation = DOMImplementation, exports.XMLSerializer = XMLSerializer, 
DOMParser.prototype.parseFromString = function(e, t) {
    var n = this.options, r = new XMLReader(), i = n.domBuilder || new DOMHandler(), o = n.errorHandler, a = n.locator, s = n.xmlns || {}, u = /\/x?html?$/.test(t), l = u ? htmlEntity.entityMap : {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'"
    };
    return a && i.setDocumentLocator(a), r.errorHandler = buildErrorHandler(o, i, a), 
    r.domBuilder = n.domBuilder || i, u && (s[""] = "http://www.w3.org/1999/xhtml"), 
    s.xml = s.xml || "http://www.w3.org/XML/1998/namespace", e ? r.parse(e, s, l) : r.errorHandler.error("invalid doc source"), 
    i.doc;
}, DOMHandler.prototype = {
    startDocument: function() {
        this.doc = new DOMImplementation().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
    },
    startElement: function(e, t, n, r) {
        var i = this.doc, o = i.createElementNS(e, n || t), a = r.length;
        appendElement(this, o), this.currentElement = o, this.locator && position(this.locator, o);
        for (var s = 0; s < a; s++) {
            e = r.getURI(s);
            var u = r.getValue(s), l = (n = r.getQName(s), i.createAttributeNS(e, n));
            this.locator && position(r.getLocator(s), l), l.value = l.nodeValue = u, o.setAttributeNode(l);
        }
    },
    endElement: function(e, t, n) {
        var r = this.currentElement;
        r.tagName, this.currentElement = r.parentNode;
    },
    startPrefixMapping: function(e, t) {},
    endPrefixMapping: function(e) {},
    processingInstruction: function(e, t) {
        var n = this.doc.createProcessingInstruction(e, t);
        this.locator && position(this.locator, n), appendElement(this, n);
    },
    ignorableWhitespace: function(e, t, n) {},
    characters: function(e, t, n) {
        if (e = _toString.apply(this, arguments)) {
            if (this.cdata) var r = this.doc.createCDATASection(e); else r = this.doc.createTextNode(e);
            this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(e) && this.doc.appendChild(r), 
            this.locator && position(this.locator, r);
        }
    },
    skippedEntity: function(e) {},
    endDocument: function() {
        this.doc.normalize();
    },
    setDocumentLocator: function(e) {
        (this.locator = e) && (e.lineNumber = 0);
    },
    comment: function(e, t, n) {
        e = _toString.apply(this, arguments);
        var r = this.doc.createComment(e);
        this.locator && position(this.locator, r), appendElement(this, r);
    },
    startCDATA: function() {
        this.cdata = !0;
    },
    endCDATA: function() {
        this.cdata = !1;
    },
    startDTD: function(e, t, n) {
        var r = this.doc.implementation;
        if (r && r.createDocumentType) {
            var i = r.createDocumentType(e, t, n);
            this.locator && position(this.locator, i), appendElement(this, i);
        }
    },
    warning: function(e) {
        console.warn("[xmldom warning]\t" + e, _locator(this.locator));
    },
    error: function(e) {
        console.error("[xmldom error]\t" + e, _locator(this.locator));
    },
    fatalError: function(e) {
        throw console.error("[xmldom fatalError]\t" + e, _locator(this.locator)), e;
    }
}, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e) {
    DOMHandler.prototype[e] = function() {
        return null;
    };
}), module.exports = {
    GS: GS,
    tool: tool,
    task: task,
    DOMParser: DOMParser
};