module.exports = {
    query: function(e) {
        for (var t, n, i = {}, o = (n = e ? -1 === (e = decodeURIComponent(e)).indexOf("?") ? "" : e.substring(e.indexOf("?")) : location.search).slice(1).split("&"), r = 0; r < o.length; r++) i[(t = o[r].split("="))[0]] = t[1];
        return i;
    }
};