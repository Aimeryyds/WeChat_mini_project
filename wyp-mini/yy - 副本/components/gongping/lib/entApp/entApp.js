module.exports = {
    RequestMoble: function(t, e, s, r, i, f) {
        this.buffer = new e.PMarshall(!1), this.bufferBody = new e.PMarshall(!1), this.buffer.setUI16(s), 
        this.buffer.setUI16(r);
        var n, h = {};
        if (f) {
            h = {
                1: f
            }, n = Object.keys(h), this.buffer.setUI32(n.length);
            for (var o = 0; o < n.length; ++o) this.buffer.setUI16(parseInt(n[o])), this.buffer.setString(h[n[o]].toString());
        } else {
            h = {}, n = Object.keys(h), this.buffer.setUI32(n.length);
            for (var u = 0; u < n.length; ++u) this.buffer.setString(n[u].toString()), this.buffer.setString(h[n[u]].toString());
        }
        this.bufferCon = new e.PMarshall(!1), this.setUI32 = function(t) {
            this.bufferCon.setUI32(t);
        }, this.setUI16 = function(t) {
            this.bufferCon.setUI16(t);
        }, this.setUTF8 = function(t) {
            this.bufferCon.setString(t.toString());
        }, this.setStrStrMap = function(t) {
            var e = t, s = Object.keys(e);
            this.bufferCon.setUI32(s.length);
            for (var r = 0; r < s.length; ++r) this.bufferCon.setString(s[r].toString()), this.bufferCon.setString(e[s[r]].toString());
        }, this.setStrStrMaputf8 = function(t) {
            var e = t, s = Object.keys(e);
            this.bufferCon.setUI32(s.length);
            for (var r = 0; r < s.length; ++r) this.bufferCon.setUtf8String(s[r].toString()), 
            this.bufferCon.setUtf8String(e[s[r]].toString());
        }, this.setUintStrMap = function(t) {
            var e = t, s = Object.keys(e);
            this.bufferCon.setUI32(s.length);
            for (var r = 0; r < s.length; ++r) this.bufferCon.setUI32(s[r]), this.bufferCon.setString(e[s[r]].toString());
        }, this.sendRequest = function() {
            this.bufferBody.setBytesWithoutLen(this.bufferCon.marshall()), this.buffer.setBytes(this.bufferBody.marshall()), 
            t.sendAppData(i, this.buffer.marshall());
        };
    },
    Request: function(t, e, s, r, i, f, n) {
        this.maxType = r, this.minType = i, this.moduleId = f, this.minCombo = n || 101, 
        this.buffer = new e.PMarshall(!1), this.bufferBody = new e.PMarshall(!1), this.moduleId ? (this.moduleHeader = new e.PMarshall(!1), 
        this.bufferBody = new e.PMarshall(!1), this.buffer.setUI32(300), this.buffer.setUI32(this.minCombo), 
        this.moduleHeader.setUI32(this.moduleId), this.moduleHeader.setUI32(this.maxType), 
        this.moduleHeader.setUI32(this.minType)) : (this.buffer.setUI32(this.maxType), this.buffer.setUI32(this.minType)), 
        this.bufferCon = new e.PMarshall(!1), this.setUInt64 = function(t) {
            var e = this.getUInt64LowHigh(t), s = e.low, r = e.high;
            this.bufferCon.setUI32(s), this.bufferCon.setUI32(r);
        }, this.setInt64 = function(t) {
            var e = this.getInt64LowHigh(t), s = e.low, r = e.high;
            this.bufferCon.setSI32(s), this.bufferCon.setSI32(r);
        }, this.setUI32 = function(t) {
            this.bufferCon.setUI32(t);
        }, this.setUI16 = function(t) {
            this.bufferCon.setUI16(t);
        }, this.setString = function(t) {
            this.bufferCon.setString(t.toString());
        }, this.setStrStrMap = function(t) {
            var e = t, s = Object.keys(e);
            this.bufferCon.setUI32(s.length);
            for (var r = 0; r < s.length; ++r) this.bufferCon.setString(s[r].toString()), this.bufferCon.setString(e[s[r]].toString());
        }, this.setUintStrMap = function(t) {
            var e = t, s = Object.keys(e);
            this.bufferCon.setUI32(s.length);
            for (var r = 0; r < s.length; ++r) this.bufferCon.setUI32(s[r]), this.bufferCon.setString(e[s[r]].toString());
        }, this.setStrUintMap = function(t) {
            var e = t, s = Object.keys(e);
            this.bufferCon.setUI32(s.length);
            for (var r = 0; r < s.length; ++r) this.bufferCon.setString(e[s[r]].toString()), 
            this.bufferCon.setUI32(s[r]);
        }, this.notArr = function(t) {
            for (var e = 0; e < t.length; e++) 0 == t[e] ? t[e] = 1 : 1 == t[e] && (t[e] = 0);
        }, this.add1Arr = function(t) {
            for (var e = 0; e < t.length; e++) if (1 == t[e]) t[e] = 0; else if (0 == t[e]) {
                t[e] = 1;
                break;
            }
        }, this.sub1Arr = function(t) {
            for (var e = 0; e < t.length; e++) if (0 == t[e]) t[e] = 1; else if (1 == t[e]) {
                t[e] = 0;
                break;
            }
        }, this.getInt64LowHigh = function(t) {
            for (var e = Math.abs(t), s = [], r = 0, i = 0, f = 1, n = 1; e > 0; ) s.push(e % 2), 
            e = Math.floor(e / 2);
            for (;s.length < 64; ) s.push(0);
            t < 0 && (this.notArr(s), this.add1Arr(s));
            for (var h = s.length - 1; h >= 0; h--) s[h];
            var o = s.splice(0, 32);
            1 == o[o.length - 1] && (this.sub1Arr(o), this.notArr(o), n = -1), 1 == s[s.length - 1] && (this.sub1Arr(s), 
            this.notArr(s), f = -1);
            for (var u = 0; u < 32; u++) i += o[u] * Math.pow(2, u);
            i *= n;
            for (var a = 0; a < 32; a++) r += s[a] * Math.pow(2, a);
            return r *= f, {
                low: i,
                high: r
            };
        }, this.getUInt64LowHigh = function(t) {
            for (var e = t, s = [], r = 0, i = 0; e > 0; ) s.push(e % 2), e = Math.floor(e / 2);
            for (;s.length < 32; ) s.push(0);
            for (var f = 0; f < 32; f++) i += s[f] * Math.pow(2, f);
            for (var n = 32; n < s.length; n++) r += s[n] * Math.pow(2, n - 32);
            return {
                low: i,
                high: r
            };
        }, this.setBytes = function(t) {
            t && (this.bufferCon.setUI16(t.byteLength), this.bufferCon.setBytes(t));
        }, this.sendRequest = function() {
            if (this.moduleId) {
                this.bufferBody.setBytesWithoutLen(this.moduleHeader.marshall()), this.bufferBody.setBytes(this.bufferCon.marshall());
                var e = new Object(), r = Object.keys(e);
                this.bufferBody.setUI32(r.length);
                for (var i = 0; i < r.length; ++i) this.bufferBody.setString(r[i].toString()), this.bufferBody.setString(e[r[i]].toString());
            } else this.bufferBody.setBytesWithoutLen(this.bufferCon.marshall());
            if (123 == this.minCombo) {
                var f = new Object(), n = Object.keys(f);
                this.bufferBody.setUI32(n.length);
                for (var h = 0; h < n.length; ++h) this.bufferBody.setString(n[h].toString()), this.bufferBody.setString(f[n[h]].toString());
            }
            this.buffer.setBytes(this.bufferBody.marshall()), t.sendAppData(s, this.buffer.marshall());
        };
    }
};