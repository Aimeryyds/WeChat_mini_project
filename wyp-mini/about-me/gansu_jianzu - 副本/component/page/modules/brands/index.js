var a = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../common.js"));

Component({
    behaviors: [ a.default ],
    properties: {
        module: {
            type: Object,
            observer: "init"
        }
    },
    ready: function() {
        this.init();
    },
    methods: {
        init: function() {
            var a = this.data.module;
            a.data && a.data.length > 10 && (a.data = a.data.slice(0, 10));
            for (var t = 0; t < a.data.length; t++) a.data[t].showBrandName = a.data[t].brandName, 
            a.data[t].brandName.length > 5 && (a.data[t].showBrandName = a.data[t].brandName.substring(0, 5));
            this.setData({
                module: a
            });
        },
        makestorelist: function(a) {
            var t = a.currentTarget.dataset.brand;
            getApp().setFlash("brand", t), this.jump("/pages/storelist/storelist");
        }
    }
});