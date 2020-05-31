var i = require("config.js"), r = require("util.js");

module.exports = {
    mixin: function(e) {
        var t = {
            data: i.data
        };
        return console.log(t), r.mixin(t, e);
    }
};