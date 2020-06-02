function e(e) {
    for (var t = {}, r = e.split(","), s = 0; s < r.length; s++) t[r[s]] = !0;
    return t;
}

function t(e) {
    return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "");
}

function r(e) {
    var t = [];
    if (0 == a.length || !o) return (d = {}).node = "text", d.text = e, s = [ d ];
    e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
    for (var r = new RegExp("[:]"), s = e.split(r), i = 0; i < s.length; i++) {
        var l = s[i], d = {};
        o[l] ? (d.node = "element", d.tag = "emoji", d.text = o[l], d.baseSrc = n) : (d.node = "text", 
        d.text = l), t.push(d);
    }
    return t;
}

var s = "https", a = "", n = "", o = {}, i = require("./wxDiscode.js"), l = require("./htmlparser.js"), d = (e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), 
e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")), c = e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), u = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), 
e("wxxxcode-style,script,style,view,scroll-view,block");

module.exports = {
    html2json: function(e, a) {
        e = t(e), e = i.strDiscode(e);
        var n = [], o = {
            node: a,
            nodes: [],
            images: [],
            imageUrls: []
        }, p = 0;
        return l(e, {
            start: function(e, t, r) {
                var l = {
                    node: "element",
                    tag: e
                };
                if (0 === n.length ? (l.index = p.toString(), p += 1) : (void 0 === (x = n[0]).nodes && (x.nodes = []), 
                l.index = x.index + "." + x.nodes.length), d[e] ? l.tagType = "block" : c[e] ? l.tagType = "inline" : u[e] && (l.tagType = "closeSelf"), 
                0 !== t.length && (l.attr = t.reduce(function(e, t) {
                    var r = t.name, s = t.value;
                    return "class" == r && (l.classStr = s), "style" == r && (l.styleStr = s), s.match(/ /) && (s = s.split(" ")), 
                    e[r] ? Array.isArray(e[r]) ? e[r].push(s) : e[r] = [ e[r], s ] : e[r] = s, e;
                }, {})), "img" === l.tag) {
                    l.imgIndex = o.images.length;
                    var m = l.attr.src;
                    "" == m[0] && m.splice(0, 1), m = i.urlToHttpUrl(m, s), l.attr.src = m, l.from = a, 
                    o.images.push(l), o.imageUrls.push(m);
                }
                if ("font" === l.tag) {
                    var h = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], f = {
                        color: "color",
                        face: "font-family",
                        size: "font-size"
                    };
                    l.attr.style || (l.attr.style = []), l.styleStr || (l.styleStr = "");
                    for (var g in f) if (l.attr[g]) {
                        var v = "size" === g ? h[l.attr[g] - 1] : l.attr[g];
                        l.attr.style.push(f[g]), l.attr.style.push(v), l.styleStr += f[g] + ": " + v + ";";
                    }
                }
                if ("source" === l.tag && (o.source = l.attr.src), r) {
                    var x = n[0] || o;
                    void 0 === x.nodes && (x.nodes = []), x.nodes.push(l);
                } else n.unshift(l);
            },
            end: function(e) {
                var t = n.shift();
                if (t.tag !== e && console.error("invalid state: mismatch end tag"), "video" === t.tag && o.source && (t.attr.src = o.source, 
                delete result.source), 0 === n.length) o.nodes.push(t); else {
                    var r = n[0];
                    void 0 === r.nodes && (r.nodes = []), r.nodes.push(t);
                }
            },
            chars: function(e) {
                var t = {
                    node: "text",
                    text: e,
                    textArray: r(e)
                };
                if (0 === n.length) o.nodes.push(t); else {
                    var s = n[0];
                    void 0 === s.nodes && (s.nodes = []), t.index = s.index + "." + s.nodes.length, 
                    s.nodes.push(t);
                }
            },
            comment: function(e) {}
        }), o;
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", r = arguments[2];
        a = e, n = t, o = r;
    }
};