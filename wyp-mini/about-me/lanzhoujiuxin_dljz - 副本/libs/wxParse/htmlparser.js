function e(e) {
    for (var t = {}, a = e.split(","), r = 0; r < a.length; r++) t[a[r]] = !0;
    return t;
}

var t = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, a = /^<\/([-A-Za-z0-9_]+)[^>]*>/, r = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g, s = e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), n = e("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,table,tbody,td,tfoot,th,thead,tr,ul,video"), o = e("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), i = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), l = e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), c = e("wxxxcode-style,style,view,scroll-view,block");

module.exports = function(e, d) {
    function f(e, t) {
        if (t) for (t = t.toLowerCase(), a = b.length - 1; a >= 0 && b[a] != t; a--) ; else var a = 0;
        if (a >= 0) {
            for (var r = b.length - 1; r >= a; r--) d.end && d.end(b[r]);
            b.length = a;
        }
    }
    var u, p, h, b = [], m = e;
    for (b.last = function() {
        return this[this.length - 1];
    }; e; ) {
        if (p = !0, b.last() && c[b.last()]) e = e.replace(new RegExp("([\\s\\S]*?)</" + b.last() + "[^>]*>"), function(e, t) {
            return t = t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2"), d.chars && d.chars(t), 
            "";
        }), f(0, b.last()); else if (0 == e.indexOf("\x3c!--") ? (u = e.indexOf("--\x3e")) >= 0 && (d.comment && d.comment(e.substring(4, u)), 
        e = e.substring(u + 3), p = !1) : 0 == e.indexOf("</") ? (h = e.match(a)) && (e = e.substring(h[0].length), 
        h[0].replace(a, f), p = !1) : 0 == e.indexOf("<") && (h = e.match(t)) && (e = e.substring(h[0].length), 
        h[0].replace(t, function(e, t, a, c) {
            if (t = t.toLowerCase(), n[t]) for (;b.last() && o[b.last()]; ) f(0, b.last());
            if (i[t] && b.last() == t && f(0, t), (c = s[t] || !!c) || b.push(t), d.start) {
                var u = [];
                a.replace(r, function(e, t) {
                    var a = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : l[t] ? t : "";
                    u.push({
                        name: t,
                        value: a,
                        escaped: a.replace(/(^|[^\\])"/g, '$1\\"')
                    });
                }), d.start && d.start(t, u, c);
            }
        }), p = !1), p) {
            u = e.indexOf("<");
            for (var g = ""; 0 === u; ) g += "<", u = (e = e.substring(1)).indexOf("<");
            g += u < 0 ? e : e.substring(0, u), e = u < 0 ? "" : e.substring(u), d.chars && d.chars(g);
        }
        if (e == m) throw "Parse Error: " + e;
        m = e;
    }
    f();
};