var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../pluginbehavior.js"));

Component({
    behaviors: [ t.default ],
    properties: {},
    data: {
        richtext: "",
        textstyle: ""
    },
    attached: function() {
        getApp();
        this.formatText();
    },
    methods: {
        formatText: function() {
            this.setData({
                richtext: this.data.param.message.replace(/ /g, " ")
            });
        }
    }
});