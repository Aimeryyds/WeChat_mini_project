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

var main = {
    /**
     * 渲染块
     * @param {Object} params
     */
    drawBlock: function drawBlock(_ref) {
        var text = _ref.text, _ref$width = _ref.width, width = _ref$width === undefined ? 0 : _ref$width, height = _ref.height, x = _ref.x, y = _ref.y, _ref$paddingLeft = _ref.paddingLeft, paddingLeft = _ref$paddingLeft === undefined ? 0 : _ref$paddingLeft, _ref$paddingRight = _ref.paddingRight, paddingRight = _ref$paddingRight === undefined ? 0 : _ref$paddingRight, borderWidth = _ref.borderWidth, backgroundColor = _ref.backgroundColor, borderColor = _ref.borderColor, _ref$borderRadius = _ref.borderRadius, borderRadius = _ref$borderRadius === undefined ? 0 : _ref$borderRadius, _ref$opacity = _ref.opacity, opacity = _ref$opacity === undefined ? 1 : _ref$opacity;
        // 判断是否块内有文字
                var blockWidth = 0;
        // 块的宽度
                var textX = 0;
        var textY = 0;
        if (typeof text !== "undefined") {
            // 如果有文字并且块的宽度小于文字宽度，块的宽度为 文字的宽度 + 内边距
            var textWidth = this._getTextWidth(typeof text.text === "string" ? text : text.text);
            blockWidth = textWidth > width ? textWidth : width;
            blockWidth += paddingLeft + paddingLeft;
            var _text$textAlign = text.textAlign, textAlign = _text$textAlign === undefined ? "left" : _text$textAlign, textCon = text.text;
            textY = height / 2 + y;
            // 文字的y轴坐标在块中线
                        if (textAlign === "left") {
                // 如果是右对齐，那x轴在块的最左边
                textX = x + paddingLeft;
            } else if (textAlign === "center") {
                textX = blockWidth / 2 + x;
            } else {
                textX = x + blockWidth - paddingRight;
            }
        } else {
            blockWidth = width;
        }
        if (backgroundColor) {
            // 画面
            this.ctx.save();
            this.ctx.setGlobalAlpha(opacity);
            this.ctx.setFillStyle(backgroundColor);
            if (borderRadius > 0) {
                // 画圆角矩形
                this._drawRadiusRect(x, y, blockWidth, height, borderRadius);
                this.ctx.fill();
            } else {
                this.ctx.fillRect(this.toPx(x), this.toPx(y), this.toPx(blockWidth), this.toPx(height));
            }
            this.ctx.restore();
        }
        if (borderWidth) {
            // 画线
            this.ctx.save();
            this.ctx.setGlobalAlpha(opacity);
            this.ctx.setStrokeStyle(borderColor);
            this.ctx.setLineWidth(this.toPx(borderWidth));
            if (borderRadius > 0) {
                // 画圆角矩形边框
                this._drawRadiusRect(x, y, blockWidth, height, borderRadius);
                this.ctx.stroke();
            } else {
                this.ctx.strokeRect(this.toPx(x), this.toPx(y), this.toPx(blockWidth), this.toPx(height));
            }
            this.ctx.restore();
        }
        if (text) {
            this.drawText(Object.assign(text, {
                x: textX,
                y: textY
            }));
        }
    },
    /**
     * 渲染文字
     * @param {Object} params
     */
    drawText: function drawText(params) {
        var _this = this;
        var x = params.x, y = params.y, fontSize = params.fontSize, color = params.color, baseLine = params.baseLine, textAlign = params.textAlign, text = params.text, _params$opacity = params.opacity, opacity = _params$opacity === undefined ? 1 : _params$opacity, width = params.width, lineNum = params.lineNum, lineHeight = params.lineHeight;
        if (Object.prototype.toString.call(text) === "[object Array]") {
            var preText = {
                x: x,
                y: y,
                baseLine: baseLine
            };
            text.forEach(function(item) {
                preText.x += item.marginLeft || 0;
                var textWidth = _this._drawSingleText(Object.assign(item, _extends({}, preText)));
                preText.x += textWidth + (item.marginRight || 0);
                // 下一段字的x轴为上一段字x + 上一段字宽度
                        });
        } else {
            this._drawSingleText(params);
        }
    },
    /**
     * 渲染图片
     */
    drawImage: function drawImage(data) {
        var imgPath = data.imgPath, x = data.x, y = data.y, w = data.w, h = data.h, sx = data.sx, sy = data.sy, sw = data.sw, sh = data.sh, _data$borderRadius = data.borderRadius, borderRadius = _data$borderRadius === undefined ? 0 : _data$borderRadius, _data$borderWidth = data.borderWidth, borderWidth = _data$borderWidth === undefined ? 0 : _data$borderWidth, borderColor = data.borderColor;
        this.ctx.save();
        if (borderRadius > 0) {
            this._drawRadiusRect(x, y, w, h, borderRadius);
            this.ctx.clip();
            this.ctx.drawImage(imgPath, this.toPx(sx), this.toPx(sy), this.toPx(sw), this.toPx(sh), this.toPx(x), this.toPx(y), this.toPx(w), this.toPx(h));
            if (borderWidth > 0) {
                this.ctx.setStrokeStyle(borderColor);
                this.ctx.setLineWidth(this.toPx(borderWidth));
                this.ctx.stroke();
            }
        } else {
            this.ctx.drawImage(imgPath, this.toPx(sx), this.toPx(sy), this.toPx(sw), this.toPx(sh), this.toPx(x), this.toPx(y), this.toPx(w), this.toPx(h));
        }
        this.ctx.restore();
    },
    /**
     * 渲染线
     * @param {*} param0
     */
    drawLine: function drawLine(_ref2) {
        var startX = _ref2.startX, startY = _ref2.startY, endX = _ref2.endX, endY = _ref2.endY, color = _ref2.color, width = _ref2.width;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.setStrokeStyle(color);
        this.ctx.setLineWidth(this.toPx(width));
        this.ctx.moveTo(this.toPx(startX), this.toPx(startY));
        this.ctx.lineTo(this.toPx(endX), this.toPx(endY));
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
    },
    downloadResource: function downloadResource() {
        var _this2 = this;
        var images = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var drawList = [];
        this.drawArr = [];
        images.forEach(function(image, index) {
            return drawList.push(_this2._downloadImageAndInfo(image, index));
        });
        return Promise.all(drawList);
    },
    initCanvas: function initCanvas(w, h, debug) {
        var _this3 = this;
        return new Promise(function(resolve) {
            _this3.setData({
                pxWidth: _this3.toPx(w),
                pxHeight: _this3.toPx(h),
                debug: debug
            }, resolve);
        });
    }
};

var handle = {
    /**
     * 画圆角矩形
     */
    _drawRadiusRect: function _drawRadiusRect(x, y, w, h, r) {
        var br = r / 2;
        this.ctx.beginPath();
        this.ctx.moveTo(this.toPx(x + br), this.toPx(y));
        // 移动到左上角的点
                this.ctx.lineTo(this.toPx(x + w - br), this.toPx(y));
        this.ctx.arc(this.toPx(x + w - br), this.toPx(y + br), this.toPx(br), 2 * Math.PI * (3 / 4), 2 * Math.PI * (4 / 4));
        this.ctx.lineTo(this.toPx(x + w), this.toPx(y + h - br));
        this.ctx.arc(this.toPx(x + w - br), this.toPx(y + h - br), this.toPx(br), 0, 2 * Math.PI * (1 / 4));
        this.ctx.lineTo(this.toPx(x + br), this.toPx(y + h));
        this.ctx.arc(this.toPx(x + br), this.toPx(y + h - br), this.toPx(br), 2 * Math.PI * (1 / 4), 2 * Math.PI * (2 / 4));
        this.ctx.lineTo(this.toPx(x), this.toPx(y + br));
        this.ctx.arc(this.toPx(x + br), this.toPx(y + br), this.toPx(br), 2 * Math.PI * (2 / 4), 2 * Math.PI * (3 / 4));
    },
    /**
     * 计算文本长度
     * @param {Array|Object}} text 数组 或者 对象
     */
    _getTextWidth: function _getTextWidth(text) {
        var _this4 = this;
        var texts = [];
        if (Object.prototype.toString.call(text) === "[object Object]") {
            texts.push(text);
        } else {
            texts = text;
        }
        var width = 0;
        texts.forEach(function(_ref3) {
            var fontSize = _ref3.fontSize, text = _ref3.text, _ref3$marginLeft = _ref3.marginLeft, marginLeft = _ref3$marginLeft === undefined ? 0 : _ref3$marginLeft, _ref3$marginRight = _ref3.marginRight, marginRight = _ref3$marginRight === undefined ? 0 : _ref3$marginRight;
            _this4.ctx.setFontSize(_this4.toPx(fontSize));
            width += _this4.ctx.measureText(text).width + marginLeft + marginRight;
        });
        return this.toRpx(width);
    },
    /**
     * 渲染一段文字
     */
    _drawSingleText: function _drawSingleText(_ref4) {
        var _this5 = this;
        var x = _ref4.x, y = _ref4.y, fontSize = _ref4.fontSize, color = _ref4.color, baseLine = _ref4.baseLine, _ref4$textAlign = _ref4.textAlign, textAlign = _ref4$textAlign === undefined ? "left" : _ref4$textAlign, text = _ref4.text, _ref4$opacity = _ref4.opacity, opacity = _ref4$opacity === undefined ? 1 : _ref4$opacity, _ref4$textDecoration = _ref4.textDecoration, textDecoration = _ref4$textDecoration === undefined ? "none" : _ref4$textDecoration, width = _ref4.width, _ref4$lineNum = _ref4.lineNum, lineNum = _ref4$lineNum === undefined ? 1 : _ref4$lineNum, _ref4$lineHeight = _ref4.lineHeight, lineHeight = _ref4$lineHeight === undefined ? 0 : _ref4$lineHeight;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.setGlobalAlpha(opacity);
        this.ctx.setFontSize(this.toPx(fontSize));
        this.ctx.setFillStyle(color);
        this.ctx.setTextBaseline(baseLine);
        this.ctx.setTextAlign(textAlign);
        var textWidth = this.toRpx(this.ctx.measureText(text).width);
        var textArr = [];
        if (textWidth > width) {
            // 文本宽度 大于 渲染宽度
            var unitTextWidth = +(textWidth / text.length).toFixed(2);
            var unitLineNum = width / unitTextWidth;
            // 一行文本数量
                        for (var i = 0; i <= text.length; i += unitLineNum) {
                // 将文字转为数组，一行文字一个元素
                var resText = text.slice(i, i + unitLineNum);
                resText !== "" && textArr.push(resText);
                if (textArr.length === lineNum) {
                    break;
                }
            }
            if (textArr.length * unitLineNum < text.length) {
                var moreTextWidth = this.ctx.measureText("...").width;
                var moreTextNum = Math.ceil(moreTextWidth / unitTextWidth);
                var reg = new RegExp(".{" + moreTextNum + "}$");
                textArr[textArr.length - 1] = textArr[textArr.length - 1].replace(reg, "...");
            }
            textWidth = width;
        } else {
            textArr.push(text);
        }
        textArr.forEach(function(item, index) {
            _this5.ctx.fillText(item, _this5.toPx(x), _this5.toPx(y + (lineHeight || fontSize) * index));
        });
        this.ctx.restore();
        // textDecoration
                if (textDecoration !== "none") {
            var lineY = y;
            if (textDecoration === "line-through") {
                // 目前只支持贯穿线
                lineY = y;
            }
            this.ctx.save();
            this.ctx.moveTo(this.toPx(x), this.toPx(lineY));
            this.ctx.lineTo(this.toPx(x) + this.toPx(textWidth), this.toPx(lineY));
            this.ctx.setStrokeStyle(color);
            this.ctx.stroke();
            this.ctx.restore();
        }
        return textWidth;
    }
};

var helper = {
    /**
      * 下载图片并获取图片信息
      */
    _downloadImageAndInfo: function _downloadImageAndInfo(image, index) {
        var _this6 = this;
        return new Promise(function(resolve, reject) {
            var x = image.x, y = image.y, url = image.url, zIndex = image.zIndex;
            var imageUrl = url;
            // 下载图片
                        _this6._downImage(imageUrl, index).then(function(imgPath) {
                return _this6._getImageInfo(imgPath, index);
            }).then(function(_ref5) {
                var imgPath = _ref5.imgPath, imgInfo = _ref5.imgInfo;
                // 根据画布的宽高计算出图片绘制的大小，这里会保证图片绘制不变形
                                var sx = void 0;
                var sy = void 0;
                var borderRadius = image.borderRadius || 0;
                var setWidth = image.width;
                var setHeight = image.height;
                var width = _this6.toRpx(imgInfo.width);
                var height = _this6.toRpx(imgInfo.height);
                if (width / height <= setWidth / setHeight) {
                    sx = 0;
                    sy = (height - width / setWidth * setHeight) / 2;
                } else {
                    sy = 0;
                    sx = (width - height / setHeight * setWidth) / 2;
                }
                _this6.drawArr.push({
                    type: "image",
                    borderRadius: borderRadius,
                    borderWidth: image.borderWidth,
                    borderColor: image.borderColor,
                    zIndex: typeof zIndex !== "undefined" ? zIndex : index,
                    imgPath: imgPath,
                    sx: sx,
                    sy: sy,
                    sw: width - sx * 2,
                    sh: height - sy * 2,
                    x: x,
                    y: y,
                    w: setWidth,
                    h: setHeight
                });
                resolve();
            }).catch(function(err) {
                return reject(err);
            });
        });
    },
    /**
     * 下载图片资源
     * @param {*} imageUrl
     */
    _downImage: function _downImage(imageUrl) {
        var _this7 = this;
        return new Promise(function(resolve, reject) {
            if (/^http/.test(imageUrl) && !new RegExp(wx.env.USER_DATA_PATH).test(imageUrl)) {
                wx.downloadFile({
                    url: _this7._mapHttpToHttps(imageUrl),
                    success: function success(res) {
                        if (res.statusCode === 200) {
                            resolve(res.tempFilePath);
                        } else {
                            reject(res.errMsg);
                        }
                    },
                    fail: function fail(err) {
                        reject(err);
                    }
                });
            } else {
                // 支持本地地址
                resolve(imageUrl);
            }
        });
    },
    /**
     * 获取图片信息
     * @param {*} imgPath
     * @param {*} index
     */
    _getImageInfo: function _getImageInfo(imgPath, index) {
        return new Promise(function(resolve, reject) {
            wx.getImageInfo({
                src: imgPath,
                success: function success(res) {
                    resolve({
                        imgPath: imgPath,
                        imgInfo: res,
                        index: index
                    });
                },
                fail: function fail(err) {
                    reject(err);
                }
            });
        });
    },
    toPx: function toPx(rpx) {
        return rpx * this.factor;
    },
    toRpx: function toRpx(px) {
        return px / this.factor;
    },
    /**
     * 将http转为https
     * @param {String}} rawUrl 图片资源url
     */
    _mapHttpToHttps: function _mapHttpToHttps(rawUrl) {
        if (rawUrl.indexOf(":") < 0) {
            return rawUrl;
        }
        var urlComponent = rawUrl.split(":");
        if (urlComponent.length === 2) {
            if (urlComponent[0] === "http") {
                urlComponent[0] = "https";
                return urlComponent[0] + ":" + urlComponent[1];
            }
        }
        return rawUrl;
    }
};

Component({
    properties: {},
    created: function created() {
        var sysInfo = wx.getSystemInfoSync();
        var screenWidth = sysInfo.screenWidth;
        this.factor = screenWidth / 750;
    },
    methods: Object.assign({
        create: function create(config) {
            var _this8 = this;
            this.ctx = wx.createCanvasContext("canvasid", this);
            this.initCanvas(config.width, config.height, config.debug).then(function() {
                // 设置画布底色
                if (config.backgroundColor) {
                    _this8.ctx.save();
                    _this8.ctx.setFillStyle(config.backgroundColor);
                    _this8.ctx.fillRect(0, 0, _this8.toPx(config.width), _this8.toPx(config.height));
                    _this8.ctx.restore();
                }
                var _config$texts = config.texts, texts = _config$texts === undefined ? [] : _config$texts, _config$images = config.images, images = _config$images === undefined ? [] : _config$images, _config$blocks = config.blocks, blocks = _config$blocks === undefined ? [] : _config$blocks, _config$lines = config.lines, lines = _config$lines === undefined ? [] : _config$lines;
                var queue = _this8.drawArr.concat(texts.map(function(item) {
                    item.type = "text";
                    item.zIndex = item.zIndex || 0;
                    return item;
                })).concat(blocks.map(function(item) {
                    item.type = "block";
                    item.zIndex = item.zIndex || 0;
                    return item;
                })).concat(lines.map(function(item) {
                    item.type = "line";
                    item.zIndex = item.zIndex || 0;
                    return item;
                }));
                // 按照顺序排序
                                queue.sort(function(a, b) {
                    return a.zIndex - b.zIndex;
                });
                queue.forEach(function(item) {
                    if (item.type === "image") {
                        _this8.drawImage(item);
                    } else if (item.type === "text") {
                        _this8.drawText(item);
                    } else if (item.type === "block") {
                        _this8.drawBlock(item);
                    } else if (item.type === "line") {
                        _this8.drawLine(item);
                    }
                });
                var res = wx.getSystemInfoSync();
                var platform = res.platform;
                var time = 0;
                if (platform === "android") {
                    // 在安卓平台，经测试发现如果海报过于复杂在转换时需要做延时，要不然样式会错乱
                    time = 300;
                }
                _this8.ctx.draw(false, function() {
                    setTimeout(function() {
                        wx.canvasToTempFilePath({
                            canvasId: "canvasid",
                            success: function success(res) {
                                _this8.triggerEvent("success", res.tempFilePath);
                            },
                            fail: function fail(err) {
                                _this8.triggerEvent("fail", err);
                            }
                        }, _this8);
                    }, time);
                });
            }).catch(function(err) {
                wx.showToast({
                    icon: "none",
                    title: err.errMsg || "生成失败"
                });
                console.error(err);
            });
        }
    }, main, handle, helper)
});