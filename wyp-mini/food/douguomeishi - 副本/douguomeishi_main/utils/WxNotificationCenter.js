function o(o) {
    e.push(o);
}

"function" == typeof Symbol && Symbol.iterator;

var e = [];

module.exports = {
    addNotification: function(e, i, t) {
        e && i ? (t || console.log("addNotification Warning: no observer will can't remove notice"), 
        console.log("addNotification:" + e), o({
            name: e,
            selector: i,
            observer: t
        })) : console.log("addNotification error: no selector or name");
    },
    removeNotification: function(o, i) {
        console.log("removeNotification:" + o);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (n.name === o && n.observer === i) return void e.splice(t, 1);
        }
    },
    postNotificationName: function(o, i) {
        if (console.log("postNotificationName:" + o), 0 != e.length) for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n.name === o && n.selector(i);
        } else console.log("postNotificationName error: u hadn't add any notice.");
    },
    addOnceNotification: function(o, i, t) {
        if (e.length > 0) for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (r.name === o && r.observer === t) return;
        }
        this.addNotification(o, i, t);
    }
};