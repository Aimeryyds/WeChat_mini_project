function e(e) {
    var r = {
        omitExtraWLInCodeBlocks: {
            defaultValue: !1,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
        },
        noHeaderId: {
            defaultValue: !1,
            describe: "Turn on/off generated header id",
            type: "boolean"
        },
        prefixHeaderId: {
            defaultValue: !1,
            describe: "Specify a prefix to generated header ids",
            type: "string"
        },
        headerLevelStart: {
            defaultValue: !1,
            describe: "The header blocks level start",
            type: "integer"
        },
        parseImgDimensions: {
            defaultValue: !1,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
        },
        simplifiedAutoLink: {
            defaultValue: !1,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
        },
        literalMidWordUnderscores: {
            defaultValue: !1,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
        },
        strikethrough: {
            defaultValue: !1,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
        },
        tables: {
            defaultValue: !1,
            describe: "Turn on/off tables support",
            type: "boolean"
        },
        tablesHeaderId: {
            defaultValue: !1,
            describe: "Add an id to table headers",
            type: "boolean"
        },
        ghCodeBlocks: {
            defaultValue: !0,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
        },
        tasklists: {
            defaultValue: !1,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
        },
        smoothLivePreview: {
            defaultValue: !1,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
        },
        smartIndentationFix: {
            defaultValue: !1,
            description: "Tries to smartly fix identation in es6 strings",
            type: "boolean"
        }
    };
    if (!1 === e) return JSON.parse(JSON.stringify(r));
    var t = {};
    for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n].defaultValue);
    return t;
}

function r(e, r) {
    var t = r ? "Error in " + r + " extension->" : "Error in unnamed extension", n = {
        valid: !0,
        error: ""
    };
    a.helper.isArray(e) || (e = [ e ]);
    for (var o = 0; o < e.length; ++o) {
        var i = t + " sub-extension " + o + ": ", l = e[o];
        if ("object" !== (void 0 === l ? "undefined" : s(l))) return n.valid = !1, n.error = i + "must be an object, but " + (void 0 === l ? "undefined" : s(l)) + " given", 
        n;
        if (!a.helper.isString(l.type)) return n.valid = !1, n.error = i + 'property "type" must be a string, but ' + s(l.type) + " given", 
        n;
        var c = l.type = l.type.toLowerCase();
        if ("language" === c && (c = l.type = "lang"), "html" === c && (c = l.type = "output"), 
        "lang" !== c && "output" !== c && "listener" !== c) return n.valid = !1, n.error = i + "type " + c + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', 
        n;
        if ("listener" === c) {
            if (a.helper.isUndefined(l.listeners)) return n.valid = !1, n.error = i + '. Extensions of type "listener" must have a property called "listeners"', 
            n;
        } else if (a.helper.isUndefined(l.filter) && a.helper.isUndefined(l.regex)) return n.valid = !1, 
        n.error = i + c + ' extensions must define either a "regex" property or a "filter" method', 
        n;
        if (l.listeners) {
            if ("object" !== s(l.listeners)) return n.valid = !1, n.error = i + '"listeners" property must be an object but ' + s(l.listeners) + " given", 
            n;
            for (var u in l.listeners) if (l.listeners.hasOwnProperty(u) && "function" != typeof l.listeners[u]) return n.valid = !1, 
            n.error = i + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + u + " must be a function but " + s(l.listeners[u]) + " given", 
            n;
        }
        if (l.filter) {
            if ("function" != typeof l.filter) return n.valid = !1, n.error = i + '"filter" must be a function, but ' + s(l.filter) + " given", 
            n;
        } else if (l.regex) {
            if (a.helper.isString(l.regex) && (l.regex = new RegExp(l.regex, "g")), !l.regex instanceof RegExp) return n.valid = !1, 
            n.error = i + '"regex" property must either be a string or a RegExp object, but ' + s(l.regex) + " given", 
            n;
            if (a.helper.isUndefined(l.replace)) return n.valid = !1, n.error = i + '"regex" extensions must implement a replace string or function', 
            n;
        }
    }
    return n;
}

function t(e, r) {
    return "~E" + r.charCodeAt(0) + "E";
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, s = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e) {
    return void 0 === e ? "undefined" : n(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : n(e);
}, a = {}, o = {}, i = {}, l = e(!0), c = {
    github: {
        omitExtraWLInCodeBlocks: !0,
        prefixHeaderId: "user-content-",
        simplifiedAutoLink: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0
    },
    vanilla: e(!0)
};

a.helper = {}, a.extensions = {}, a.setOption = function(e, r) {
    return l[e] = r, this;
}, a.getOption = function(e) {
    return l[e];
}, a.getOptions = function() {
    return l;
}, a.resetOptions = function() {
    l = e(!0);
}, a.setFlavor = function(e) {
    if (c.hasOwnProperty(e)) {
        var r = c[e];
        for (var t in r) r.hasOwnProperty(t) && (l[t] = r[t]);
    }
}, a.getDefaultOptions = function(r) {
    return e(r);
}, a.subParser = function(e, r) {
    if (a.helper.isString(e)) {
        if (void 0 === r) {
            if (o.hasOwnProperty(e)) return o[e];
            throw Error("SubParser named " + e + " not registered!");
        }
        o[e] = r;
    }
}, a.extension = function(e, t) {
    if (!a.helper.isString(e)) throw Error("Extension 'name' must be a string");
    if (e = a.helper.stdExtName(e), a.helper.isUndefined(t)) {
        if (!i.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
        return i[e];
    }
    "function" == typeof t && (t = t()), a.helper.isArray(t) || (t = [ t ]);
    var n = r(t, e);
    if (!n.valid) throw Error(n.error);
    i[e] = t;
}, a.getAllExtensions = function() {
    return i;
}, a.removeExtension = function(e) {
    delete i[e];
}, a.resetExtensions = function() {
    i = {};
}, a.validateExtension = function(e) {
    var t = r(e, null);
    return !!t.valid || (console.warn(t.error), !1);
}, a.hasOwnProperty("helper") || (a.helper = {}), a.helper.isString = function(e) {
    return "string" == typeof e || e instanceof String;
}, a.helper.isFunction = function(e) {
    return e && "[object Function]" === {}.toString.call(e);
}, a.helper.forEach = function(e, r) {
    if ("function" == typeof e.forEach) e.forEach(r); else for (var t = 0; t < e.length; t++) r(e[t], t, e);
}, a.helper.isArray = function(e) {
    return e.constructor === Array;
}, a.helper.isUndefined = function(e) {
    return void 0 === e;
}, a.helper.stdExtName = function(e) {
    return e.replace(/[_-]||\s/g, "").toLowerCase();
}, a.helper.escapeCharactersCallback = t, a.helper.escapeCharacters = function(e, r, n) {
    var s = "([" + r.replace(/([\[\]\\])/g, "\\$1") + "])";
    n && (s = "\\\\" + s);
    var a = new RegExp(s, "g");
    return e = e.replace(a, t);
};

var u = function(e, r, t, n) {
    var s, a, o, i, l, c = n || "", u = -1 < c.indexOf("g"), p = new RegExp(r + "|" + t, "g" + c.replace(/g/g, "")), h = new RegExp(r, c.replace(/g/g, "")), d = [];
    do {
        for (s = 0; o = p.exec(e); ) if (h.test(o[0])) s++ || (i = (a = p.lastIndex) - o[0].length); else if (s && !--s) {
            l = o.index + o[0].length;
            var f = {
                left: {
                    start: i,
                    end: a
                },
                match: {
                    start: a,
                    end: o.index
                },
                right: {
                    start: o.index,
                    end: l
                },
                wholeMatch: {
                    start: i,
                    end: l
                }
            };
            if (d.push(f), !u) return d;
        }
    } while (s && (p.lastIndex = a));
    return d;
};

a.helper.matchRecursiveRegExp = function(e, r, t, n) {
    for (var s = u(e, r, t, n), a = [], o = 0; o < s.length; ++o) a.push([ e.slice(s[o].wholeMatch.start, s[o].wholeMatch.end), e.slice(s[o].match.start, s[o].match.end), e.slice(s[o].left.start, s[o].left.end), e.slice(s[o].right.start, s[o].right.end) ]);
    return a;
}, a.helper.replaceRecursiveRegExp = function(e, r, t, n, s) {
    if (!a.helper.isFunction(r)) {
        var o = r;
        r = function() {
            return o;
        };
    }
    var i = u(e, t, n, s), l = e, c = i.length;
    if (0 < c) {
        var p = [];
        0 !== i[0].wholeMatch.start && p.push(e.slice(0, i[0].wholeMatch.start));
        for (var h = 0; h < c; ++h) p.push(r(e.slice(i[h].wholeMatch.start, i[h].wholeMatch.end), e.slice(i[h].match.start, i[h].match.end), e.slice(i[h].left.start, i[h].left.end), e.slice(i[h].right.start, i[h].right.end))), 
        h < c - 1 && p.push(e.slice(i[h].wholeMatch.end, i[h + 1].wholeMatch.start));
        i[c - 1].wholeMatch.end < e.length && p.push(e.slice(i[c - 1].wholeMatch.end)), 
        l = p.join("");
    }
    return l;
}, a.helper.isUndefined(console) && (console = {
    warn: function(e) {
        alert(e);
    },
    log: function(e) {
        alert(e);
    },
    error: function(e) {
        throw e;
    }
}), a.Converter = function(e) {
    function t(e, t) {
        if (t = t || null, a.helper.isString(e)) {
            if (t = e = a.helper.stdExtName(e), a.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), 
            void function(e, t) {
                "function" == typeof e && (e = e(new a.Converter())), a.helper.isArray(e) || (e = [ e ]);
                var n = r(e, t);
                if (!n.valid) throw Error(n.error);
                for (var s = 0; s < e.length; ++s) switch (e[s].type) {
                  case "lang":
                    u.push(e[s]);
                    break;

                  case "output":
                    p.push(e[s]);
                    break;

                  default:
                    throw Error("Extension loader error: Type unrecognized!!!");
                }
            }(a.extensions[e], e);
            if (a.helper.isUndefined(i[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
            e = i[e];
        }
        "function" == typeof e && (e = e()), a.helper.isArray(e) || (e = [ e ]);
        var s = r(e, t);
        if (!s.valid) throw Error(s.error);
        for (var o = 0; o < e.length; ++o) {
            switch (e[o].type) {
              case "lang":
                u.push(e[o]);
                break;

              case "output":
                p.push(e[o]);
            }
            if (e[o].hasOwnProperty(h)) for (var l in e[o].listeners) e[o].listeners.hasOwnProperty(l) && n(l, e[o].listeners[l]);
        }
    }
    function n(e, r) {
        if (!a.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + (void 0 === e ? "undefined" : s(e)) + " given");
        if ("function" != typeof r) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + (void 0 === r ? "undefined" : s(r)) + " given");
        h.hasOwnProperty(e) || (h[e] = []), h[e].push(r);
    }
    var o = {}, u = [], p = [], h = {};
    !function() {
        for (var r in e = e || {}, l) l.hasOwnProperty(r) && (o[r] = l[r]);
        if ("object" !== (void 0 === e ? "undefined" : s(e))) throw Error("Converter expects the passed parameter to be an object, but " + (void 0 === e ? "undefined" : s(e)) + " was passed instead.");
        for (var n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
        o.extensions && a.helper.forEach(o.extensions, t);
    }(), this._dispatch = function(e, r, t, n) {
        if (h.hasOwnProperty(e)) for (var s = 0; s < h[e].length; ++s) {
            var a = h[e][s](e, r, this, t, n);
            a && void 0 !== a && (r = a);
        }
        return r;
    }, this.listen = function(e, r) {
        return n(e, r), this;
    }, this.makeHtml = function(e) {
        if (!e) return e;
        var r, t, n, s = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions: u,
            outputModifiers: p,
            converter: this,
            ghCodeBlocks: []
        };
        return e = (e = (e = (e = e.replace(/~/g, "~T")).replace(/\$/g, "~D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n"), 
        o.smartIndentationFix && (t = (r = e).match(/^\s*/)[0].length, n = new RegExp("^\\s{0," + t + "}", "gm"), 
        e = r.replace(n, "")), e = e, e = a.subParser("detab")(e, o, s), e = a.subParser("stripBlankLines")(e, o, s), 
        a.helper.forEach(u, function(r) {
            e = a.subParser("runExtension")(r, e, o, s);
        }), e = a.subParser("hashPreCodeTags")(e, o, s), e = a.subParser("githubCodeBlocks")(e, o, s), 
        e = a.subParser("hashHTMLBlocks")(e, o, s), e = a.subParser("hashHTMLSpans")(e, o, s), 
        e = a.subParser("stripLinkDefinitions")(e, o, s), e = a.subParser("blockGamut")(e, o, s), 
        e = a.subParser("unhashHTMLSpans")(e, o, s), e = (e = (e = a.subParser("unescapeSpecialChars")(e, o, s)).replace(/~D/g, "$$")).replace(/~T/g, "~"), 
        a.helper.forEach(p, function(r) {
            e = a.subParser("runExtension")(r, e, o, s);
        }), e;
    }, this.setOption = function(e, r) {
        o[e] = r;
    }, this.getOption = function(e) {
        return o[e];
    }, this.getOptions = function() {
        return o;
    }, this.addExtension = function(e, r) {
        t(e, r = r || null);
    }, this.useExtension = function(e) {
        t(e);
    }, this.setFlavor = function(e) {
        if (c.hasOwnProperty(e)) {
            var r = c[e];
            for (var t in r) r.hasOwnProperty(t) && (o[t] = r[t]);
        }
    }, this.removeExtension = function(e) {
        a.helper.isArray(e) || (e = [ e ]);
        for (var r = 0; r < e.length; ++r) {
            for (var t = e[r], n = 0; n < u.length; ++n) u[n] === t && u[n].splice(n, 1);
            for (;0 < p.length; ++n) p[0] === t && p[0].splice(n, 1);
        }
    }, this.getAllExtensions = function() {
        return {
            language: u,
            output: p
        };
    };
}, a.subParser("anchors", function(e, r, t) {
    var n = function(e, r, n, s, o, i, l, c) {
        a.helper.isUndefined(c) && (c = ""), e = r;
        var u = n, p = s.toLowerCase(), h = o, d = c;
        if (!h) if (p || (p = u.toLowerCase().replace(/ ?\n/g, " ")), h = "#" + p, a.helper.isUndefined(t.gUrls[p])) {
            if (!(-1 < e.search(/\(\s*\)$/m))) return e;
            h = "";
        } else h = t.gUrls[p], a.helper.isUndefined(t.gTitles[p]) || (d = t.gTitles[p]);
        var f = '<a href="' + (h = a.helper.escapeCharacters(h, "*_", !1)) + '"';
        return "" !== d && null !== d && (d = d.replace(/"/g, "&quot;"), f += ' title="' + (d = a.helper.escapeCharacters(d, "*_", !1)) + '"'), 
        f += ">" + u + "</a>";
    };
    return e = (e = (e = (e = t.converter._dispatch("anchors.before", e, r, t)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g, n)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, n)).replace(/(\[([^\[\]]+)])()()()()()/g, n), 
    e = t.converter._dispatch("anchors.after", e, r, t);
}), a.subParser("autoLinks", function(e, r, t) {
    function n(e, r) {
        var t = r;
        return /^www\./i.test(r) && (r = r.replace(/^www\./i, "http://www.")), '<a href="' + r + '">' + t + "</a>";
    }
    function s(e, r) {
        var t = a.subParser("unescapeSpecialChars")(r);
        return a.subParser("encodeEmailAddress")(t);
    }
    return e = (e = (e = t.converter._dispatch("autoLinks.before", e, r, t)).replace(/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi, n)).replace(/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, s), 
    r.simplifiedAutoLink && (e = (e = e.replace(/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi, n)).replace(/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi, s)), 
    e = t.converter._dispatch("autoLinks.after", e, r, t);
}), a.subParser("blockGamut", function(e, r, t) {
    e = t.converter._dispatch("blockGamut.before", e, r, t), e = a.subParser("blockQuotes")(e, r, t), 
    e = a.subParser("headers")(e, r, t);
    var n = a.subParser("hashBlock")("<hr />", r, t);
    return e = (e = (e = e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, n)).replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, n)).replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, n), 
    e = a.subParser("lists")(e, r, t), e = a.subParser("codeBlocks")(e, r, t), e = a.subParser("tables")(e, r, t), 
    e = a.subParser("hashHTMLBlocks")(e, r, t), e = a.subParser("paragraphs")(e, r, t), 
    e = t.converter._dispatch("blockGamut.after", e, r, t);
}), a.subParser("blockQuotes", function(e, r, t) {
    return e = (e = t.converter._dispatch("blockQuotes.before", e, r, t)).replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(e, n) {
        var s = n;
        return s = (s = (s = s.replace(/^[ \t]*>[ \t]?/gm, "~0")).replace(/~0/g, "")).replace(/^[ \t]+$/gm, ""), 
        s = a.subParser("githubCodeBlocks")(s, r, t), s = (s = (s = a.subParser("blockGamut")(s, r, t)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, r) {
            var t = r;
            return t = (t = t.replace(/^  /gm, "~0")).replace(/~0/g, "");
        }), a.subParser("hashBlock")("<blockquote>\n" + s + "\n</blockquote>", r, t);
    }), e = t.converter._dispatch("blockQuotes.after", e, r, t);
}), a.subParser("codeBlocks", function(e, r, t) {
    return e = t.converter._dispatch("codeBlocks.before", e, r, t), e = (e = (e += "~0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(e, n, s) {
        var o = n, i = s, l = "\n";
        return o = a.subParser("outdent")(o), o = a.subParser("encodeCode")(o), o = (o = (o = a.subParser("detab")(o)).replace(/^\n+/g, "")).replace(/\n+$/g, ""), 
        r.omitExtraWLInCodeBlocks && (l = ""), o = "<pre><code>" + o + l + "</code></pre>", 
        a.subParser("hashBlock")(o, r, t) + i;
    })).replace(/~0/, ""), e = t.converter._dispatch("codeBlocks.after", e, r, t);
}), a.subParser("codeSpans", function(e, r, t) {
    return void 0 === (e = t.converter._dispatch("codeSpans.before", e, r, t)) && (e = ""), 
    e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, r, t, n) {
        var s = n;
        return s = (s = s.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""), r + "<code>" + (s = a.subParser("encodeCode")(s)) + "</code>";
    }), e = t.converter._dispatch("codeSpans.after", e, r, t);
}), a.subParser("detab", function(e) {
    return e = (e = (e = (e = (e = e.replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "~A~B")).replace(/~B(.+?)~A/g, function(e, r) {
        for (var t = r, n = 4 - t.length % 4, s = 0; s < n; s++) t += " ";
        return t;
    })).replace(/~A/g, "    ")).replace(/~B/g, "");
}), a.subParser("encodeAmpsAndAngles", function(e) {
    return e = (e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?\$!])/gi, "&lt;");
}), a.subParser("encodeBackslashEscapes", function(e) {
    return e = (e = e.replace(/\\(\\)/g, a.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+-.!])/g, a.helper.escapeCharactersCallback);
}), a.subParser("encodeCode", function(e) {
    return e = (e = (e = e.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), 
    e = a.helper.escapeCharacters(e, "*_{}[]\\", !1);
}), a.subParser("encodeEmailAddress", function(e) {
    var r = [ function(e) {
        return "&#" + e.charCodeAt(0) + ";";
    }, function(e) {
        return "&#x" + e.charCodeAt(0).toString(16) + ";";
    }, function(e) {
        return e;
    } ];
    return e = (e = '<a href="' + (e = (e = "mailto:" + e).replace(/./g, function(e) {
        if ("@" === e) e = r[Math.floor(2 * Math.random())](e); else if (":" !== e) {
            var t = Math.random();
            e = .9 < t ? r[2](e) : .45 < t ? r[1](e) : r[0](e);
        }
        return e;
    })) + '">' + e + "</a>").replace(/">.+:/g, '">');
}), a.subParser("escapeSpecialCharsWithinTagAttributes", function(e) {
    return e = e.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi, function(e) {
        var r = e.replace(/(.)<\/?code>(?=.)/g, "$1`");
        return r = a.helper.escapeCharacters(r, "\\`*_", !1);
    });
}), a.subParser("githubCodeBlocks", function(e, r, t) {
    return r.ghCodeBlocks ? (e = t.converter._dispatch("githubCodeBlocks.before", e, r, t), 
    e = (e = (e += "~0").replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(e, n, s) {
        var o = r.omitExtraWLInCodeBlocks ? "" : "\n";
        return s = a.subParser("encodeCode")(s), s = "<pre><code" + (n ? ' class="' + n + " language-" + n + '"' : "") + ">" + (s = (s = (s = a.subParser("detab")(s)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + o + "</code></pre>", 
        s = a.subParser("hashBlock")(s, r, t), "\n\n~G" + (t.ghCodeBlocks.push({
            text: e,
            codeblock: s
        }) - 1) + "G\n\n";
    })).replace(/~0/, ""), t.converter._dispatch("githubCodeBlocks.after", e, r, t)) : e;
}), a.subParser("hashBlock", function(e, r, t) {
    return e = e.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (t.gHtmlBlocks.push(e) - 1) + "K\n\n";
}), a.subParser("hashElement", function(e, r, t) {
    return function(e, r) {
        var n = r;
        return n = (n = (n = n.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""), 
        n = "\n\n~K" + (t.gHtmlBlocks.push(n) - 1) + "K\n\n";
    };
}), a.subParser("hashHTMLBlocks", function(e, r, t) {
    for (var n = [ "pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p" ], s = 0; s < n.length; ++s) e = a.helper.replaceRecursiveRegExp(e, function(e, r, n, s) {
        var a = e;
        return -1 !== n.search(/\bmarkdown\b/) && (a = n + t.converter.makeHtml(r) + s), 
        "\n\n~K" + (t.gHtmlBlocks.push(a) - 1) + "K\n\n";
    }, "^(?: |\\t){0,3}<" + n[s] + "\\b[^>]*>", "</" + n[s] + ">", "gim");
    return e = (e = (e = e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, a.subParser("hashElement")(e, r, t))).replace(/(<!--[\s\S]*?-->)/g, a.subParser("hashElement")(e, r, t))).replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, a.subParser("hashElement")(e, r, t));
}), a.subParser("hashHTMLSpans", function(e, r, t) {
    for (var n = a.helper.matchRecursiveRegExp(e, "<code\\b[^>]*>", "</code>", "gi"), s = 0; s < n.length; ++s) e = e.replace(n[s][0], "~L" + (t.gHtmlSpans.push(n[s][0]) - 1) + "L");
    return e;
}), a.subParser("unhashHTMLSpans", function(e, r, t) {
    for (var n = 0; n < t.gHtmlSpans.length; ++n) e = e.replace("~L" + n + "L", t.gHtmlSpans[n]);
    return e;
}), a.subParser("hashPreCodeTags", function(e, r, t) {
    return e = a.helper.replaceRecursiveRegExp(e, function(e, r, n, s) {
        var o = n + a.subParser("encodeCode")(r) + s;
        return "\n\n~G" + (t.ghCodeBlocks.push({
            text: e,
            codeblock: o
        }) - 1) + "G\n\n";
    }, "^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^(?: |\\t){0,3}</code>\\s*</pre>", "gim");
}), a.subParser("headers", function(e, r, t) {
    function n(e) {
        var r, n = e.replace(/[^\w]/g, "").toLowerCase();
        return t.hashLinkCounts[n] ? r = n + "-" + t.hashLinkCounts[n]++ : (r = n, t.hashLinkCounts[n] = 1), 
        !0 === s && (s = "section"), a.helper.isString(s) ? s + r : r;
    }
    e = t.converter._dispatch("headers.before", e, r, t);
    var s = r.prefixHeaderId, o = isNaN(parseInt(r.headerLevelStart)) ? 1 : parseInt(r.headerLevelStart), i = r.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, l = r.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
    return e = (e = (e = e.replace(i, function(e, s) {
        var i = a.subParser("spanGamut")(s, r, t), l = r.noHeaderId ? "" : ' id="' + n(s) + '"', c = "<h" + o + l + ">" + i + "</h" + o + ">";
        return a.subParser("hashBlock")(c, r, t);
    })).replace(l, function(e, s) {
        var i = a.subParser("spanGamut")(s, r, t), l = r.noHeaderId ? "" : ' id="' + n(s) + '"', c = o + 1, u = "<h" + c + l + ">" + i + "</h" + c + ">";
        return a.subParser("hashBlock")(u, r, t);
    })).replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm, function(e, s, i) {
        var l = a.subParser("spanGamut")(i, r, t), c = r.noHeaderId ? "" : ' id="' + n(i) + '"', u = o - 1 + s.length, p = "<h" + u + c + ">" + l + "</h" + u + ">";
        return a.subParser("hashBlock")(p, r, t);
    }), e = t.converter._dispatch("headers.after", e, r, t);
}), a.subParser("images", function(e, r, t) {
    function n(e, r, n, s, o, i, l, c) {
        var u = t.gUrls, p = t.gTitles, h = t.gDimensions;
        if (n = n.toLowerCase(), c || (c = ""), "" === s || null === s) {
            if ("" !== n && null !== n || (n = r.toLowerCase().replace(/ ?\n/g, " ")), s = "#" + n, 
            a.helper.isUndefined(u[n])) return e;
            s = u[n], a.helper.isUndefined(p[n]) || (c = p[n]), a.helper.isUndefined(h[n]) || (o = h[n].width, 
            i = h[n].height);
        }
        r = r.replace(/"/g, "&quot;"), r = a.helper.escapeCharacters(r, "*_", !1);
        var d = '<img src="' + (s = a.helper.escapeCharacters(s, "*_", !1)) + '" alt="' + r + '"';
        return c && (c = c.replace(/"/g, "&quot;"), d += ' title="' + (c = a.helper.escapeCharacters(c, "*_", !1)) + '"'), 
        o && i && (d += ' width="' + (o = "*" === o ? "auto" : o) + '"', d += ' height="' + (i = "*" === i ? "auto" : i) + '"'), 
        d += " />";
    }
    return e = (e = (e = t.converter._dispatch("images.before", e, r, t)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g, n)).replace(/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g, n), 
    e = t.converter._dispatch("images.after", e, r, t);
}), a.subParser("italicsAndBold", function(e, r, t) {
    return e = t.converter._dispatch("italicsAndBold.before", e, r, t), e = r.literalMidWordUnderscores ? (e = (e = (e = e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm, "$1<strong>$2</strong>")).replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm, "$1<em>$2</em>")).replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g, "<strong>$2</strong>")).replace(/(\*)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>") : (e = e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>")).replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>"), 
    e = t.converter._dispatch("italicsAndBold.after", e, r, t);
}), a.subParser("lists", function(e, r, t) {
    function n(e, n) {
        t.gListLevel++, e = e.replace(/\n{2,}$/, "\n");
        var s = /\n[ \t]*\n(?!~0)/.test(e += "~0");
        return e = (e = e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function(e, n, o, i, l, c, u) {
            u = u && "" !== u.trim();
            var p = a.subParser("outdent")(l, r, t), h = "";
            return c && r.tasklists && (h = ' class="task-list-item" style="list-style-type: none;"', 
            p = p.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                return u && (e += " checked"), e += ">";
            })), n || -1 < p.search(/\n{2,}/) ? (p = a.subParser("githubCodeBlocks")(p, r, t), 
            p = a.subParser("blockGamut")(p, r, t)) : (p = (p = a.subParser("lists")(p, r, t)).replace(/\n$/, ""), 
            p = s ? a.subParser("paragraphs")(p, r, t) : a.subParser("spanGamut")(p, r, t)), 
            p = "\n<li" + h + ">" + p + "</li>\n";
        })).replace(/~0/g, ""), t.gListLevel--, n && (e = e.replace(/\s+$/, "")), e;
    }
    function s(e, r, t) {
        var s = "ul" === r ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm, a = [], o = "";
        if (-1 !== e.search(s)) {
            !function e(a) {
                var i = a.search(s);
                -1 !== i ? (o += "\n\n<" + r + ">" + n(a.slice(0, i), !!t) + "</" + r + ">\n\n", 
                s = "ul" == (r = "ul" === r ? "ol" : "ul") ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm, 
                e(a.slice(i))) : o += "\n\n<" + r + ">" + n(a, !!t) + "</" + r + ">\n\n";
            }(e);
            for (var i = 0; i < a.length; ++i) ;
        } else o = "\n\n<" + r + ">" + n(e, !!t) + "</" + r + ">\n\n";
        return o;
    }
    e = t.converter._dispatch("lists.before", e, r, t), e += "~0";
    var o = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
    return t.gListLevel ? e = e.replace(o, function(e, r, t) {
        return s(r, -1 < t.search(/[*+-]/g) ? "ul" : "ol", !0);
    }) : (o = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, 
    e = e.replace(o, function(e, r, t, n) {
        return s(t, -1 < n.search(/[*+-]/g) ? "ul" : "ol");
    })), e = e.replace(/~0/, ""), e = t.converter._dispatch("lists.after", e, r, t);
}), a.subParser("outdent", function(e) {
    return e = (e = e.replace(/^(\t|[ ]{1,4})/gm, "~0")).replace(/~0/g, "");
}), a.subParser("paragraphs", function(e, r, t) {
    for (var n = (e = (e = (e = t.converter._dispatch("paragraphs.before", e, r, t)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), s = [], o = n.length, i = 0; i < o; i++) {
        var l = n[i];
        0 <= l.search(/~(K|G)(\d+)\1/g) || (l = (l = a.subParser("spanGamut")(l, r, t)).replace(/^([ \t]*)/g, "<p>"), 
        l += "</p>"), s.push(l);
    }
    for (o = s.length, i = 0; i < o; i++) {
        for (var c = "", u = s[i], p = !1; 0 <= u.search(/~(K|G)(\d+)\1/); ) {
            var h = RegExp.$1, d = RegExp.$2;
            c = (c = "K" === h ? t.gHtmlBlocks[d] : p ? a.subParser("encodeCode")(t.ghCodeBlocks[d].text) : t.ghCodeBlocks[d].codeblock).replace(/\$/g, "$$$$"), 
            u = u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/, c), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u) && (p = !0);
        }
        s[i] = u;
    }
    return e = (e = (e = s.join("\n\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""), 
    t.converter._dispatch("paragraphs.after", e, r, t);
}), a.subParser("runExtension", function(e, r, t, n) {
    if (e.filter) r = e.filter(r, n.converter, t); else if (e.regex) {
        var s = e.regex;
        !s instanceof RegExp && (s = new RegExp(s, "g")), r = r.replace(s, e.replace);
    }
    return r;
}), a.subParser("spanGamut", function(e, r, t) {
    return e = t.converter._dispatch("spanGamut.before", e, r, t), e = a.subParser("codeSpans")(e, r, t), 
    e = a.subParser("escapeSpecialCharsWithinTagAttributes")(e, r, t), e = a.subParser("encodeBackslashEscapes")(e, r, t), 
    e = a.subParser("images")(e, r, t), e = a.subParser("anchors")(e, r, t), e = a.subParser("autoLinks")(e, r, t), 
    e = a.subParser("encodeAmpsAndAngles")(e, r, t), e = a.subParser("italicsAndBold")(e, r, t), 
    e = (e = a.subParser("strikethrough")(e, r, t)).replace(/  +\n/g, " <br />\n"), 
    e = t.converter._dispatch("spanGamut.after", e, r, t);
}), a.subParser("strikethrough", function(e, r, t) {
    return r.strikethrough && (e = (e = t.converter._dispatch("strikethrough.before", e, r, t)).replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g, "<del>$1</del>"), 
    e = t.converter._dispatch("strikethrough.after", e, r, t)), e;
}), a.subParser("stripBlankLines", function(e) {
    return e.replace(/^[ \t]+$/gm, "");
}), a.subParser("stripLinkDefinitions", function(e, r, t) {
    return e = (e = (e += "~0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm, function(e, n, s, o, i, l, c) {
        return n = n.toLowerCase(), t.gUrls[n] = a.subParser("encodeAmpsAndAngles")(s), 
        l ? l + c : (c && (t.gTitles[n] = c.replace(/"|'/g, "&quot;")), r.parseImgDimensions && o && i && (t.gDimensions[n] = {
            width: o,
            height: i
        }), "");
    })).replace(/~0/, "");
}), a.subParser("tables", function(e, r, t) {
    return r.tables ? (e = (e = t.converter._dispatch("tables.before", e, r, t)).replace(/^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm, function(e) {
        var n, s = e.split("\n");
        for (n = 0; n < s.length; ++n) /^[ \t]{0,3}\|/.test(s[n]) && (s[n] = s[n].replace(/^[ \t]{0,3}\|/, "")), 
        /\|[ \t]*$/.test(s[n]) && (s[n] = s[n].replace(/\|[ \t]*$/, ""));
        var o, i, l, c, u, p = s[0].split("|").map(function(e) {
            return e.trim();
        }), h = s[1].split("|").map(function(e) {
            return e.trim();
        }), d = [], f = [], g = [], b = [];
        for (s.shift(), s.shift(), n = 0; n < s.length; ++n) "" !== s[n].trim() && d.push(s[n].split("|").map(function(e) {
            return e.trim();
        }));
        if (p.length < h.length) return e;
        for (n = 0; n < h.length; ++n) g.push((o = h[n], /^:[ \t]*--*$/.test(o) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(o) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(o) ? ' style="text-align:center;"' : ""));
        for (n = 0; n < p.length; ++n) a.helper.isUndefined(g[n]) && (g[n] = ""), f.push((i = p[n], 
        l = g[n], c = void 0, c = "", i = i.trim(), r.tableHeaderId && (c = ' id="' + i.replace(/ /g, "_").toLowerCase() + '"'), 
        "<th" + c + l + ">" + (i = a.subParser("spanGamut")(i, r, t)) + "</th>\n"));
        for (n = 0; n < d.length; ++n) {
            for (var v = [], m = 0; m < f.length; ++m) a.helper.isUndefined(d[n][m]), v.push((u = d[n][m], 
            "<td" + g[m] + ">" + a.subParser("spanGamut")(u, r, t) + "</td>\n"));
            b.push(v);
        }
        return function(e, r) {
            for (var t = "<table>\n<thead>\n<tr>\n", n = e.length, s = 0; s < n; ++s) t += e[s];
            for (t += "</tr>\n</thead>\n<tbody>\n", s = 0; s < r.length; ++s) {
                t += "<tr>\n";
                for (var a = 0; a < n; ++a) t += r[s][a];
                t += "</tr>\n";
            }
            return t += "</tbody>\n</table>\n";
        }(f, b);
    }), e = t.converter._dispatch("tables.after", e, r, t)) : e;
}), a.subParser("unescapeSpecialChars", function(e) {
    return e = e.replace(/~E(\d+)E/g, function(e, r) {
        var t = parseInt(r);
        return String.fromCharCode(t);
    });
}), module.exports = a;