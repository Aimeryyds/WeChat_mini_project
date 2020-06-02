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

var default_data = {
    visible: false,
    content: "",
    icon: "",
    image: "",
    duration: 2,
    mask: true,
    type: "default"
};

var timmer = null;

Component({
    externalClasses: [ "i-class" ],
    data: _extends({}, default_data),
    methods: {
        handleShow: function handleShow(options) {
            var _this = this;
            var _options$type = options.type, type = _options$type === undefined ? "default" : _options$type, _options$duration = options.duration, duration = _options$duration === undefined ? 2 : _options$duration;
            this.setData(_extends({}, options, {
                type: type,
                duration: duration,
                visible: true
            }));
            var d = this.data.duration * 1e3;
            if (timmer) clearTimeout(timmer);
            if (d !== 0) {
                timmer = setTimeout(function() {
                    _this.handleHide();
                    timmer = null;
                }, d);
            }
        },
        handleHide: function handleHide() {
            this.setData(_extends({}, default_data));
        }
    }
});