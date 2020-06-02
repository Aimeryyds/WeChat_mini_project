require("../../../../utils/util");

Component({
    properties: {
        startDate: {
            type: Number,
            value: 0
        },
        endDate: {
            type: Number,
            value: 0
        }
    },
    relations: {
        calendar: {
            type: "child",
            linked: function(t) {
                var e = this.data, a = e.startDate, n = e.endDate;
                t.render(a, n);
            }
        }
    },
    data: {},
    attached: function() {},
    ready: function() {},
    methods: {
        handleSelectDay: function(t) {
            var e = t.detail, a = e.year, n = e.month, r = e.day, i = new Date(a, n, r).getTime(), d = this.data, s = d.startDate, o = d.endDate;
            o ? (s = i, o = 0) : s && i > s ? o = i : s = i, this.setData({
                startDate: s,
                endDate: o
            }), this.getRelationNodes("calendar").forEach(function(t) {
                return t.render(s, o);
            }), s > 0 && o > 0 && this.triggerEvent("onsubmit", {
                startDate: s,
                endDate: o
            });
        }
    }
});