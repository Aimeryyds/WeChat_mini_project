function e(e) {
    for (var t = {}, r = e.split(","), a = 0; a < r.length; a++) t[r[a]] = !0;
    return t;
}

function t(e) {
    return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "");
}

function r(e) {
    return e.replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<");
}

function a(e) {
    var t = [];
    if (0 == n.length || !o) return (d = {}).node = "text", d.text = e, a = [ d ];
    e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
    for (var r = new RegExp("[:]"), a = e.split(r), i = 0; i < a.length; i++) {
        var l = a[i], d = {};
        o[l] ? (d.node = "element", d.tag = "emoji", d.text = o[l], d.baseSrc = s) : (d.node = "text", 
        d.text = l), t.push(d);
    }
    return t;
}

var n = "", s = "", o = {}, i = require("./wxDiscode.js"), l = require("./htmlparser.js"), d = (e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), 
e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,object,ol,output,p,pre,section,table,tbody,td,tfoot,th,thead,tr,ul,video")), c = e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), u = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), 
e("wxxxcode-style,style,view,scroll-view,block");

module.exports = {
    html2json: function(e, n) {
        e = r(e = t(e)), e = i.strDiscode(e);
        var s = [], o = {
            node: n,
            nodes: [],
            images: [],
            imageUrls: []
        }, p = 0;
        return l(e, {
            start: function(e, t, r) {
                var a = {
                    node: "element",
                    tag: e
                };
                if (0 === s.length ? (a.index = p.toString(), p += 1) : (void 0 === (h = s[0]).nodes && (h.nodes = []), 
                a.index = h.index + "." + h.nodes.length), d[e] ? a.tagType = "block" : c[e] ? a.tagType = "inline" : u[e] && (a.tagType = "closeSelf"), 
                0 !== t.length && (a.attr = t.reduce(function(e, t) {
                    var r = t.name, n = t.value;
                    return "class" == r && (a.classStr = n), "style" == r && (a.styleStr = n), n.match(/ /) && (n = n.split(" ")), 
                    e[r] ? Array.isArray(e[r]) ? e[r].push(n) : e[r] = [ e[r], n ] : e[r] = n, e;
                }, {})), "img" === a.tag) {
                    a.imgIndex = o.images.length;
                    var i = a.attr.src;
                    "" == i[0] && i.splice(0, 1), a.attr.src = i, a.from = n, o.images.push(a), o.imageUrls.push(i);
                }
                if ("font" === a.tag) {
                    var l = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], m = {
                        color: "color",
                        face: "font-family",
                        size: "font-size"
                    };
                    a.attr || (a.attr = {}), a.attr.style || (a.attr.style = []), a.styleStr || (a.styleStr = "");
                    for (var g in m) if (a.attr[g]) {
                        var f = "size" === g ? l[a.attr[g] - 1] : a.attr[g];
                        a.attr.style.push(m[g]), a.attr.style.push(f), a.styleStr += m[g] + ": " + f + ";";
                    }
                }
                if ("source" === a.tag && (o.source = a.attr.src), r) {
                    var h = s[0] || o;
                    void 0 === h.nodes && (h.nodes = []), h.nodes.push(a);
                } else s.unshift(a);
            },
            end: function(e) {
                var t = s.shift();
                if (t.tag !== e && console.error("invalid state: mismatch end tag"), "video" === t.tag && o.source && (t.attr.src = o.source, 
                delete o.source), 0 === s.length) o.nodes.push(t); else {
                    var r = s[0];
                    void 0 === r.nodes && (r.nodes = []), r.nodes.push(t);
                }
            },
            chars: function(e) {
                var t = {
                    node: "text",
                    text: e,
                    textArray: a(e)
                };
                if (0 === s.length) t.index = p.toString(), p += 1, o.nodes.push(t); else {
                    var r = s[0];
                    void 0 === r.nodes && (r.nodes = []), t.index = r.index + "." + r.nodes.length, 
                    r.nodes.push(t);
                }
            },
            comment: function(e) {}
        }), o;
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", r = arguments[2];
        n = e, s = t, o = r;
    }
};