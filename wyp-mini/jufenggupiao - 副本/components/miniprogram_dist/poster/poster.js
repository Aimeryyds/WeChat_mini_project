Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

var defaultOptions = {
    selector: "#poster"
};

function Poster() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    options = _extends({}, defaultOptions, options);
    var pages = getCurrentPages();
    var ctx = pages[pages.length - 1];
    var poster = ctx.selectComponent(options.selector);
    delete options.selector;
    return poster;
}

Poster.create = function() {
    var poster = Poster();
    if (!poster) {
        console.error('请设置组件的id="poster"!!!');
    } else {
        return Poster().onCreate();
    }
};

exports.default = Poster;