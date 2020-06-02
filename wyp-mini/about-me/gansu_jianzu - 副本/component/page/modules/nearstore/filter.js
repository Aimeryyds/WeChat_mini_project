Component({
    properties: {
        filters: {
            type: Array,
            value: []
        }
    },
    data: {},
    methods: {
        onCheck: function(t) {
            var e = t.currentTarget.dataset, o = e.index, i = e.idx, s = this.data.filters, a = s[o];
            switch (a.type) {
              case "radio":
                a.options.forEach(function(t, e) {
                    a.options[e].checked = e == i && !a.options[i].checked;
                });
                break;

              case "checkbox":
                a.options[i].checked = !a.options[i].checked;
            }
            console.log(s), this.setData({
                filters: s
            });
        },
        onSubmit: function(t) {
            var e = this.data.filters;
            this.triggerEvent("submit", e);
        },
        onReset: function(t) {
            for (var e = this.data.filters, o = 0, i = e.length; o < i; o++) for (var s = e[o], a = 0, n = s.options.length; a < n; a++) s.options[a].checked = !1;
            this.setData({
                filters: e
            });
        }
    }
});