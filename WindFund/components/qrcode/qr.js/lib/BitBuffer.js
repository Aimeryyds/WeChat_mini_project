function t() {
    this.buffer = new Array(), this.length = 0;
}

t.prototype = {
    get: function(t) {
        var e = Math.floor(t / 8);
        return 1 == (this.buffer[e] >>> 7 - t % 8 & 1);
    },
    put: function(t, e) {
        for (var h = 0; h < e; h++) this.putBit(1 == (t >>> e - h - 1 & 1));
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), 
        this.length++;
    }
}, module.exports = t;