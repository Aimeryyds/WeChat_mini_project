var t = {
    empty: 0,
    half: 1,
    full: 2
};

Component({
    properties: {
        starCount: {
            type: Number
        },
        isSmall: {
            type: Boolean
        }
    },
    data: {
        recipeStars: [ t.full, t.full, t.full, t.full, t.full ],
        isSmall: !0
    },
    methods: {
        calculateScore: function() {
            var e = this, a = this.data.recipeStars, l = this.properties.starCount, r = parseInt(l);
            for (var s = 0; s < 5; s++) a[s] = s < r ? t.full : s == r ? t.half : t.empty;
            e.setData({
                recipeStars: a
            });
        }
    },
    lifetimes: {
        attached: function() {
            var t = this;
            t.calculateScore(), t.setData({
                isSmall: t.properties.isSmall
            });
        },
        detached: function() {}
    }
});