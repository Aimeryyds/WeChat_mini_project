Component({
    properties: {
        config: {
            type: Object,
            value: {}
        },
        preload: {
            // 是否预下载图片资源
            type: Boolean,
            value: false
        },
        hideLoading: {
            // 是否隐藏loading
            type: Boolean,
            value: false
        }
    },
    ready: function ready() {
        var _this = this;
        if (this.data.preload) {
            var poster = this.selectComponent("#poster");
            this.downloadStatus = "doing";
            poster.downloadResource(this.data.config.images).then(function() {
                _this.downloadStatus = "success";
                _this.trigger("downloadSuccess");
            }).catch(function(e) {
                _this.downloadStatus = "fail";
                _this.trigger("downloadFail", e);
            });
        }
    },
    methods: {
        trigger: function trigger(event, data) {
            if (this.listener && typeof this.listener[event] === "function") {
                this.listener[event](data);
            }
        },
        once: function once(event, fun) {
            if (typeof this.listener === "undefined") {
                this.listener = {};
            }
            this.listener[event] = fun;
        },
        downloadResource: function downloadResource() {
            var _this2 = this;
            return new Promise(function(resolve, reject) {
                var poster = _this2.selectComponent("#poster");
                if (_this2.downloadStatus && _this2.downloadStatus !== "fail") {
                    if (_this2.downloadStatus === "success") {
                        resolve();
                    } else {
                        _this2.once("downloadSuccess", function() {
                            return resolve();
                        });
                        _this2.once("downloadFail", function(e) {
                            return reject(e);
                        });
                    }
                } else {
                    poster.downloadResource(_this2.data.config.images).then(function() {
                        _this2.downloadStatus = "success";
                        resolve();
                    }).catch(function(e) {
                        return reject(e);
                    });
                }
            });
        },
        onCreate: function onCreate() {
            var _this3 = this;
            !this.data.hideLoading && wx.showLoading({
                mask: true,
                title: "生成中"
            });
            return this.downloadResource().then(function() {
                !_this3.data.hideLoading && wx.hideLoading();
                var poster = _this3.selectComponent("#poster");
                poster.create(_this3.data.config);
            }).catch(function(err) {
                !_this3.data.hideLoading && wx.hideLoading();
                wx.showToast({
                    icon: "none",
                    title: err.errMsg || "生成失败"
                });
                console.error(err);
                _this3.triggerEvent("fail", err);
            });
        },
        onCreateSuccess: function onCreateSuccess(e) {
            var detail = e.detail;
            this.triggerEvent("success", detail);
        },
        onCreateFail: function onCreateFail(err) {
            console.error(err);
            this.triggerEvent("fail", err);
        }
    }
});