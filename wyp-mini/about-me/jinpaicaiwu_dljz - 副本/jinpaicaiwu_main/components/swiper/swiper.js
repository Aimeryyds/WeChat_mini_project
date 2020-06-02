var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../pluginbehavior.js"));

Component({
    behaviors: [ e.default ],
    properties: {},
    data: {},
    methods: {
        redirectTo: function(e) {
            var a = {};
            a.param = {}, a.type = "page", a.param.value = e.target.dataset.url, getApp().moduleBindTap(a);
        }
    }
});