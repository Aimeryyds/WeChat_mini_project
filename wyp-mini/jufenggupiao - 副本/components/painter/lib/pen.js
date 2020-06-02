Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var QR = require("./qrcode.js");

var Painter = function() {
    function Painter(ctx, data) {
        _classCallCheck(this, Painter);
        this.ctx = ctx;
        this.data = data;
        this.viewsPool = [];
        this.callback = {};
    }
    _createClass(Painter, [ {
        key: "paint",
        value: function paint(callback) {
            this.callback = callback;
            this.style = {
                width: this.data.width.toPx(),
                height: this.data.height.toPx()
            };
            this._background();
            // 将静态元素绘制在static-canvas，将动态元素绘制在dynamic-canvas并入动态池
                        var dynamicPool = [];
            var staticPool = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
            try {
                for (var _iterator = this.data.views[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var view = _step.value;
                    if (view.animation) {
                        dynamicPool.push(view);
                    } else {
                        staticPool.push(view);
                    }
                    this._drawAbsolute(view);
                }
                // 整理元素池
                        } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            this.viewsPool = staticPool.concat(dynamicPool);
            this.ctx.draw(false, function() {
                callback();
            });
        }
        // 提供给kooHandler使用，接收动态元素的位置信息
        }, {
        key: "moveView",
        value: function moveView(view) {
            var _this = this;
            // 先绘制背景
                        this._background();
            // 绘制所有元素
                        var index = void 0;
            this.viewsPool.forEach(function(v, i) {
                if (view !== v) {
                    _this._drawAbsolute(v);
                } else {
                    index = i;
                }
            });
            this._drawAbsolute(view);
            // 对元素进行重新排序
                        this.viewsPool.splice(index, 1);
            this.viewsPool.push(view);
            this.ctx.draw(false);
        }
    }, {
        key: "_background",
        value: function _background() {
            this.ctx.save();
            var _style = this.style, width = _style.width, height = _style.height;
            var bg = this.data.background;
            this.ctx.translate(width / 2, height / 2);
            this._doClip(this.data.borderRadius, width, height);
            if (!bg) {
                // 如果未设置背景，则默认使用白色
                this.ctx.setFillStyle("#fff");
                this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
            } else if (bg.startsWith("#") || bg.startsWith("rgba")) {
                // 背景填充颜色
                this.ctx.setFillStyle(bg);
                this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
            } else {
                // 背景填充图片
                this.ctx.drawImage(bg, -(width / 2), -(height / 2), width, height);
            }
            this.ctx.restore();
        }
    }, {
        key: "_drawAbsolute",
        value: function _drawAbsolute(view) {
            // 证明 css 为数组形式，需要合并
            if (view.css && view.css.length) {
                /* eslint-disable no-param-reassign */
                view.css = Object.assign.apply(Object, _toConsumableArray(view.css));
            }
            switch (view.type) {
              case "image":
                this._drawAbsImage(view);
                break;

              case "text":
                this._fillAbsText(view);
                break;

              case "rect":
                this._drawAbsRect(view);
                break;

              case "qrcode":
                this._drawQRCode(view);
                break;

              default:
                break;
            }
        }
        /**
     * 根据 borderRadius 进行裁减
     */    }, {
        key: "_doClip",
        value: function _doClip(borderRadius, width, height) {
            if (borderRadius && width && height) {
                var r = Math.min(borderRadius.toPx(), width / 2, height / 2);
                // 防止在某些机型上周边有黑框现象，此处如果直接设置 setFillStyle 为透明，在 Android 机型上会导致被裁减的图片也变为透明， iOS 和 IDE 上不会
                // setGlobalAlpha 在 1.9.90 起支持，低版本下无效，但把 setFillStyle 设为了 white，相对默认的 black 要好点
                                this.ctx.setGlobalAlpha(0);
                this.ctx.setFillStyle("white");
                this.ctx.beginPath();
                this.ctx.arc(-width / 2 + r, -height / 2 + r, r, 1 * Math.PI, 1.5 * Math.PI);
                this.ctx.lineTo(width / 2 - r, -height / 2);
                this.ctx.arc(width / 2 - r, -height / 2 + r, r, 1.5 * Math.PI, 2 * Math.PI);
                this.ctx.lineTo(width / 2, height / 2 - r);
                this.ctx.arc(width / 2 - r, height / 2 - r, r, 0, .5 * Math.PI);
                this.ctx.lineTo(-width / 2 + r, height / 2);
                this.ctx.arc(-width / 2 + r, height / 2 - r, r, .5 * Math.PI, 1 * Math.PI);
                this.ctx.closePath();
                this.ctx.fill();
                // 在 ios 的 6.6.6 版本上 clip 有 bug，禁掉此类型上的 clip，也就意味着，在此版本微信的 ios 设备下无法使用 border 属性
                                if (!(getApp().systemInfo && getApp().systemInfo.version <= "6.6.6" && getApp().systemInfo.platform === "ios")) {
                    this.ctx.clip();
                }
                this.ctx.setGlobalAlpha(1);
            }
        }
        /**
     * 画边框
     */    }, {
        key: "_doBorder",
        value: function _doBorder(view, width, height) {
            if (!view.css) {
                return;
            }
            var _view$css = view.css, borderRadius = _view$css.borderRadius, borderWidth = _view$css.borderWidth, borderColor = _view$css.borderColor;
            if (!borderWidth) {
                return;
            }
            this.ctx.save();
            this._preProcess(view, true);
            var r = void 0;
            if (borderRadius) {
                r = Math.min(borderRadius.toPx(), width / 2, height / 2);
            } else {
                r = 0;
            }
            var lineWidth = borderWidth.toPx();
            this.ctx.setLineWidth(lineWidth);
            this.ctx.setStrokeStyle(borderColor || "black");
            this.ctx.beginPath();
            this.ctx.arc(-width / 2 + r, -height / 2 + r, r + lineWidth / 2, 1 * Math.PI, 1.5 * Math.PI);
            this.ctx.lineTo(width / 2 - r, -height / 2 - lineWidth / 2);
            this.ctx.arc(width / 2 - r, -height / 2 + r, r + lineWidth / 2, 1.5 * Math.PI, 2 * Math.PI);
            this.ctx.lineTo(width / 2 + lineWidth / 2, height / 2 - r);
            this.ctx.arc(width / 2 - r, height / 2 - r, r + lineWidth / 2, 0, .5 * Math.PI);
            this.ctx.lineTo(-width / 2 + r, height / 2 + lineWidth / 2);
            this.ctx.arc(-width / 2 + r, height / 2 - r, r + lineWidth / 2, .5 * Math.PI, 1 * Math.PI);
            this.ctx.closePath();
            this.ctx.stroke();
            this.ctx.restore();
        }
    }, {
        key: "_preProcess",
        value: function _preProcess(view, notClip) {
            var width = void 0;
            var height = void 0;
            var extra = void 0;
            switch (view.type) {
              case "text":
                {
                    var fontWeight = view.css.fontWeight === "bold" ? "bold" : "normal";
                    view.css.fontSize = view.css.fontSize ? view.css.fontSize : "20rpx";
                    this.ctx.font = "normal " + fontWeight + " " + view.css.fontSize.toPx() + "px sans-serif";
                    // this.ctx.setFontSize(view.css.fontSize.toPx());
                                        var textLength = 0;
                    if (view.css.textLength) {
                        textLength = view.css.textLength;
                    } else {
                        textLength = this.ctx.measureText(view.text).width;
                        view.css.textLength = textLength;
                    }
                    width = view.css.width ? view.css.width.toPx() : textLength;
                    // 计算行数
                                        var calLines = Math.ceil(textLength / width) + 4;
                    var lines = view.css.maxLines < calLines ? view.css.maxLines : calLines;
                    var lineHeight = view.css.lineHeight ? view.css.lineHeight.toPx() : view.css.fontSize.toPx();
                    height = lineHeight * lines;
                    extra = {
                        lines: lines,
                        lineHeight: lineHeight
                    };
                    break;
                }

              case "image":
                {
                    // image 如果未设置长宽，则使用图片本身的长宽
                    var ratio = getApp().systemInfo.pixelRatio ? getApp().systemInfo.pixelRatio : 2;
                    width = view.css && view.css.width ? view.css.width.toPx() : Math.round(view.sWidth / ratio);
                    height = view.css && view.css.height ? view.css.height.toPx() : Math.round(view.sHeight / ratio);
                    break;
                }

              default:
                {
                    if (!(view.css.width && view.css.height)) {
                        console.error("You should set width and height");
                        return;
                    }
                    width = view.css.width.toPx();
                    height = view.css.height.toPx();
                }
            }
            var x = view.css && view.css.right ? this.style.width - view.css.right.toPx(true) : view.css && view.css.left ? view.css.left.toPx(true) : 0;
            var y = view.css && view.css.bottom ? this.style.height - height - view.css.bottom.toPx(true) : view.css && view.css.top ? view.css.top.toPx(true) : 0;
            var angle = view.css && view.css.rotate ? this._getAngle(view.css.rotate) : 0;
            // 当设置了 right 时，默认 align 用 right，反之用 left
                        var align = view.css && view.css.align ? view.css.align : view.css && view.css.right ? "right" : "left";
            var xa = 0;
            var ya = y + height / 2;
            switch (align) {
              case "center":
                xa = x;
                break;

              case "right":
                xa = x - width / 2;
                break;

              default:
                xa = x + width / 2;
                break;
            }
            this.ctx.translate(xa, ya);
            this.ctx.rotate(angle);
            if (!notClip && view.css && view.css.borderRadius) {
                this._doClip(view.css.borderRadius, width, height);
            }
            view.position = {
                origin: {
                    x: view.css.right ? x - width : x,
                    y: y
                },
                actual: {
                    x: xa - width / 2,
                    y: y
                },
                width: width,
                height: height
            };
            return {
                width: width,
                height: height,
                x: x,
                y: y,
                extra: extra
            };
        }
    }, {
        key: "_drawQRCode",
        value: function _drawQRCode(view) {
            this.ctx.save();
            var _preProcess2 = this._preProcess(view), width = _preProcess2.width, height = _preProcess2.height;
            QR.api.draw(view.content, this.ctx, -width / 2, -height / 2, width, height, view.css.background, view.css.color);
            this.ctx.restore();
            this._doBorder(view, width, height);
        }
    }, {
        key: "_drawAbsImage",
        value: function _drawAbsImage(view) {
            if (!view.url) {
                return;
            }
            this.ctx.save();
            var _preProcess3 = this._preProcess(view), width = _preProcess3.width, height = _preProcess3.height;
            // 获得缩放到图片大小级别的裁减框
                        var rWidth = void 0;
            var rHeight = void 0;
            var startX = 0;
            var startY = 0;
            if (width > height) {
                rHeight = Math.round(view.sWidth / width * height);
                rWidth = view.sWidth;
            } else {
                rWidth = Math.round(view.sHeight / height * width);
                rHeight = view.sHeight;
            }
            if (view.sWidth > rWidth) {
                startX = Math.round((view.sWidth - rWidth) / 2);
            }
            if (view.sHeight > rHeight) {
                startY = Math.round((view.sHeight - rHeight) / 2);
            }
            if (view.css && view.css.mode === "scaleToFill") {
                this.ctx.drawImage(view.url, -(width / 2), -(height / 2), width, height);
            } else {
                this.ctx.drawImage(view.url, startX, startY, rWidth, rHeight, -(width / 2), -(height / 2), width, height);
            }
            this.ctx.restore();
            this._doBorder(view, width, height);
        }
    }, {
        key: "_fillAbsText",
        value: function _fillAbsText(view) {
            if (!view.text) {
                return;
            }
            this.ctx.save();
            var _preProcess4 = this._preProcess(view), width = _preProcess4.width, height = _preProcess4.height, extra = _preProcess4.extra;
            this.ctx.setFillStyle(view.css.color || "black");
            var lines = extra.lines, lineHeight = extra.lineHeight;
            var preLineLength = Math.round(view.text.length / lines);
            var start = 0;
            var alreadyCount = 0;
            if (!view.textBuf) {
                view.textBuf = [];
            }
            var bufIndex = 0;
            for (var i = 0; i < lines; ++i) {
                alreadyCount = preLineLength;
                var text = view.text.substr(start, alreadyCount);
                var measuredWith = 0;
                // measuredWith = this.ctx.measureText(text).width;
                                if (view.textBuf[bufIndex]) {
                    measuredWith = view.textBuf[bufIndex];
                } else {
                    measuredWith = this.ctx.measureText(text).width;
                    view.textBuf[bufIndex] = measuredWith;
                }
                bufIndex++;
                // 如果测量大小小于width一个字符的大小，则进行补齐，如果测量大小超出 width，则进行减除
                // 如果已经到文本末尾，也不要进行该循环
                                while (start + alreadyCount <= view.text.length && (width - measuredWith > view.css.fontSize.toPx() || measuredWith > width)) {
                    if (measuredWith < width) {
                        text = view.text.substr(start, ++alreadyCount);
                    } else {
                        if (text.length <= 1) {
                            // 如果只有一个字符时，直接跳出循环
                            break;
                        }
                        text = view.text.substr(start, --alreadyCount);
                    }
                    // measuredWith = this.ctx.measureText(text).width;
                                        if (view.textBuf[bufIndex]) {
                        measuredWith = view.textBuf[bufIndex];
                    } else {
                        measuredWith = this.ctx.measureText(text).width;
                        view.textBuf[bufIndex] = measuredWith;
                    }
                    bufIndex++;
                }
                start += text.length;
                // 如果是最后一行了，发现还有未绘制完的内容，则加...
                                if (i === lines - 1 && start < view.text.length) {
                    var lastLength = 0;
                    if (view.textBuf[bufIndex]) {
                        lastLength = view.textBuf[bufIndex];
                    } else {
                        lastLength = this.ctx.measureText(text + "...").width;
                        view.textBuf[bufIndex] = lastLength;
                    }
                    bufIndex++;
                    while (lastLength > width) {
                        if (text.length <= 1) {
                            // 如果只有一个字符时，直接跳出循环
                            break;
                        }
                        text = text.substring(0, text.length - 1);
                        if (view.textBuf[bufIndex]) {
                            lastLength = view.textBuf[bufIndex];
                        } else {
                            lastLength = this.ctx.measureText(text + "...").width;
                            view.textBuf[bufIndex] = lastLength;
                        }
                        bufIndex++;
                    }
                    text += "...";
                    // measuredWith = this.ctx.measureText(text).width;
                                        if (view.textBuf[bufIndex]) {
                        measuredWith = view.textBuf[bufIndex];
                    } else {
                        measuredWith = this.ctx.measureText(text).width;
                        view.textBuf[bufIndex] = measuredWith;
                    }
                    bufIndex++;
                }
                this.ctx.setTextAlign(view.css.align ? view.css.align : "left");
                var x = void 0;
                switch (view.css.align) {
                  case "center":
                    x = 0;
                    break;

                  case "right":
                    x = width / 2;
                    break;

                  default:
                    x = -(width / 2);
                    break;
                }
                var y = -(height / 2) + (i === 0 ? view.css.fontSize.toPx() : view.css.fontSize.toPx() + i * lineHeight);
                if (view.css.textStyle === "stroke") {
                    this.ctx.strokeText(text, x, y, measuredWith);
                } else {
                    this.ctx.fillText(text, x, y, measuredWith);
                }
                var fontSize = view.css.fontSize.toPx();
                if (view.css.textDecoration) {
                    this.ctx.beginPath();
                    if (/\bunderline\b/.test(view.css.textDecoration)) {
                        this.ctx.moveTo(x, y);
                        this.ctx.lineTo(x + measuredWith, y);
                    }
                    if (/\boverline\b/.test(view.css.textDecoration)) {
                        this.ctx.moveTo(x, y - fontSize);
                        this.ctx.lineTo(x + measuredWith, y - fontSize);
                    }
                    if (/\bline-through\b/.test(view.css.textDecoration)) {
                        this.ctx.moveTo(x, y - fontSize / 3);
                        this.ctx.lineTo(x + measuredWith, y - fontSize / 3);
                    }
                    this.ctx.closePath();
                    this.ctx.setStrokeStyle(view.css.color);
                    this.ctx.stroke();
                }
            }
            this.ctx.restore();
            this._doBorder(view, width, height);
        }
    }, {
        key: "_drawAbsRect",
        value: function _drawAbsRect(view) {
            this.ctx.save();
            var _preProcess5 = this._preProcess(view), width = _preProcess5.width, height = _preProcess5.height;
            this.ctx.setFillStyle(view.css.color);
            this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
            this.ctx.restore();
            this._doBorder(view, width, height);
        }
    }, {
        key: "_getAngle",
        value: function _getAngle(angle) {
            return Number(angle) * Math.PI / 180;
        }
    } ]);
    return Painter;
}();

exports.default = Painter;