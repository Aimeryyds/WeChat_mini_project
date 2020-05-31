var e = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length;
    return 5 <= t ? {
        list: 9 < t ? e.slice(0, 9) : e,
        groupType: "many"
    } : {
        list: e,
        groupType: 1 === t ? "one" : "few"
    };
};

Component({
    properties: {
        avator: {
            type: Array,
            value: [],
            observer: function(t) {
                var r = e(t), o = r.list, p = r.groupType;
                this.setData({
                    list: o,
                    groupType: p
                });
            }
        }
    },
    data: {
        groupType: "many",
        list: []
    }
});