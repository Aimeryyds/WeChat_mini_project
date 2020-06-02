Component({
    properties: {
        pingjiaArray: {
            type: Array,
            value: []
        }
    },
    data: {
        currentType: 0
    },
    methods: {
        onEvaluateItem: function(e) {
            var t = e.currentTarget.dataset.index, a = 0 == t ? -1 : 1 == t ? 1 : 2 == t ? 2 : 3 == t ? 3 : 4;
            this.setData({
                currentType: t,
                evaluate: a
            }), this.triggerEvent("onquery", {
                currentType: this.data.currentType,
                evaluate: this.data.evaluate
            });
        }
    }
});